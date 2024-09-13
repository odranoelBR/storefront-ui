<script setup lang="ts">
import type { LocationQueryRaw } from "vue-router";
import type { OrderLine, Product } from "~/graphql";

const route = useRoute();
const router = useRouter();

const {
  loadProductTemplate,
  productTemplate,
  loadingProductTemplate,
  getAllColors,
  getAllMaterials,
  getAllSizes,
} = useProductTemplate(route.path);
const {
  loadProductVariant,
  loadingProductVariant,
  productVariant,
  getImages,
  breadcrumbs,
  getRegularPrice,
  getSpecialPrice,
} = useProductVariant(route.fullPath);
const { addProductToRecentViews } = useRecentViewProducts();
const { wishlistAddItem, isInWishlist, wishlistRemoveItem } = useWishlist();
const { cart, cartAdd } = useCart();

const params = computed(() => ({
  combinationId: Object.values(route.query)?.map((value) =>
    parseInt(value as string)
  ),
  productTemplateId: productTemplate?.value?.id,
}));

const selectedSize = computed(
  () => Number(route.query.Size) || Number(getAllSizes?.value[0].value)
);
const selectedColor = computed(
  () => Number(route.query.Color) || Number(getAllColors?.value[0].value)
);
const selectedMaterial = computed(
  () => Number(route.query.Material) || Number(getAllMaterials?.value[0].value)
);

const size = ref(selectedSize.value);
const material = ref(selectedMaterial.value);

const productDetailsOpen = ref(true);
const quantitySelectorValue = ref(1);

const updateFilter = async (filter: LocationQueryRaw | undefined) => {
  router.push({
    path: route.path,
    query: {
      Material: selectedMaterial.value,
      Color: selectedColor.value,
      Size: selectedSize.value,
      ...filter,
    },
  });
};

const tomorrow = computed(() => {
  const date = new Date();
  date.setDate(date.getDate() + 1);
  return date.toDateString().slice(0, 10);
});

const productsInCart = computed(() => {
  return (
    cart.value?.order?.orderLines?.find(
      (orderLine: OrderLine) =>
        orderLine.product?.id === productVariant?.value.id
    )?.quantity || 0
  );
});

const handleCartAdd = async () => {
  let id = productVariant?.value.id;
  if (!productVariant.value.combinationInfoVariant) {
    id = Number(productVariant?.value.firstVariant?.id);
  }
  await cartAdd(id, quantitySelectorValue.value);
};

const handleWishlistAddItem = async (firstVariant: Product) => {
  await wishlistAddItem(firstVariant.id);
};

const handleWishlistRemoveItem = async (firstVariant: Product) => {
  await wishlistRemoveItem(firstVariant.id);
};

await loadProductTemplate({ slug: route.path });
await loadProductVariant(params.value);
</script>

<template>
  <div
    class="text-zinc-800 items-center border-b-neutral-300 border-b-2 text-lg justify-between px-6 flex h-20 border-solid bg-zinc-50 font-bold uppercase lg:pr-20 lg:pl-20 lg:sticky xl:pr-28 xl:pl-28"
    id="div-1"
  >
    <div class="text-xs flex">
      <div class="cursor-pointer mr-4 md:mr-8">Product summary</div>
      <div class="text-neutral-300 cursor-pointer mr-4 md:mr-8">
        Product details
      </div>
      <div class="text-neutral-300 cursor-pointer mr-4 md:mr-8">
        Compare models
      </div>
      <div class="text-neutral-300 cursor-pointer">Reviews</div>
    </div>
    <div class="flex">
      <button
        class="items-start cursor-pointer py-3 px-8 text-center inline-block w-48 h-12 border-2 border-zinc-800 border-solid rounded"
        id="button-1"
      >
        Select size
      </button>
    </div>
  </div>

  <div
    class="text-zinc-800 flex-wrap text-lg bg-zinc-50 lg:flex lg:justify-between lg:mt-20 lg:mr-0 lg:mb-20 lg:ml-0"
  >
    <div class="w-full lg:w-[41.66%] lg:pl-28" id="div-1">
      <div class="mb-6">
        <div
          class="bg-[linear-gradient(78.31deg,_rgb(255,_198,_185),_rgb(255,_244,_148)_21.88%,_rgb(203,_255,_186)_35.07%,_rgb(173,_238,_255)_50.55%,_rgb(182,_206,_255)_70.15%,_rgb(252,_194,_241)_99.03%)] relative w-full p-1"
        >
          <div class="bg-white relative">
            <div class="content-start relative flex w-full overflow-hidden">
              <div
                class="cursor-grab relative min-h-full w-[calc(-56px_+_100vw)] h-[calc(-56px_+_100vw)] overflow-hidden lg:w-[calc(-120px_+_41.66vw)] lg:h-[calc(-120px_+_41.66vw)]"
              >
                <NuxtImg
                  provider="odooProvider"
                  :src="productVariant?.image"
                  :width="700"
                  :height="700"
                >
                </NuxtImg>
              </div>
            </div>
          </div>
        </div>
        <div class="flex mt-5" id="div-2">
          <div class="cursor-pointer relative mr-3 md:w-24" id="div-3">
            <img
              src="https://www.zipfit.com/_next/image?url=https%3A%2F%2Fmedia.crystallize.com%2Fzipfit%2F23%2F11%2F1%2F28%2Fzipfit_gara_lv-1.png&amp;w=3840&amp;q=25"
              srcset="
                https://www.zipfit.com/_next/image?url=https%3A%2F%2Fmedia.crystallize.com%2Fzipfit%2F23%2F11%2F1%2F28%2Fzipfit_gara_lv-1.png&amp;w=16&amp;q=25     16w,
                https://www.zipfit.com/_next/image?url=https%3A%2F%2Fmedia.crystallize.com%2Fzipfit%2F23%2F11%2F1%2F28%2Fzipfit_gara_lv-1.png&amp;w=32&amp;q=25     32w,
                https://www.zipfit.com/_next/image?url=https%3A%2F%2Fmedia.crystallize.com%2Fzipfit%2F23%2F11%2F1%2F28%2Fzipfit_gara_lv-1.png&amp;w=48&amp;q=25     48w,
                https://www.zipfit.com/_next/image?url=https%3A%2F%2Fmedia.crystallize.com%2Fzipfit%2F23%2F11%2F1%2F28%2Fzipfit_gara_lv-1.png&amp;w=64&amp;q=25     64w,
                https://www.zipfit.com/_next/image?url=https%3A%2F%2Fmedia.crystallize.com%2Fzipfit%2F23%2F11%2F1%2F28%2Fzipfit_gara_lv-1.png&amp;w=96&amp;q=25     96w,
                https://www.zipfit.com/_next/image?url=https%3A%2F%2Fmedia.crystallize.com%2Fzipfit%2F23%2F11%2F1%2F28%2Fzipfit_gara_lv-1.png&amp;w=128&amp;q=25   128w,
                https://www.zipfit.com/_next/image?url=https%3A%2F%2Fmedia.crystallize.com%2Fzipfit%2F23%2F11%2F1%2F28%2Fzipfit_gara_lv-1.png&amp;w=256&amp;q=25   256w,
                https://www.zipfit.com/_next/image?url=https%3A%2F%2Fmedia.crystallize.com%2Fzipfit%2F23%2F11%2F1%2F28%2Fzipfit_gara_lv-1.png&amp;w=384&amp;q=25   384w,
                https://www.zipfit.com/_next/image?url=https%3A%2F%2Fmedia.crystallize.com%2Fzipfit%2F23%2F11%2F1%2F28%2Fzipfit_gara_lv-1.png&amp;w=640&amp;q=25   640w,
                https://www.zipfit.com/_next/image?url=https%3A%2F%2Fmedia.crystallize.com%2Fzipfit%2F23%2F11%2F1%2F28%2Fzipfit_gara_lv-1.png&amp;w=750&amp;q=25   750w,
                https://www.zipfit.com/_next/image?url=https%3A%2F%2Fmedia.crystallize.com%2Fzipfit%2F23%2F11%2F1%2F28%2Fzipfit_gara_lv-1.png&amp;w=828&amp;q=25   828w,
                https://www.zipfit.com/_next/image?url=https%3A%2F%2Fmedia.crystallize.com%2Fzipfit%2F23%2F11%2F1%2F28%2Fzipfit_gara_lv-1.png&amp;w=1080&amp;q=25 1080w,
                https://www.zipfit.com/_next/image?url=https%3A%2F%2Fmedia.crystallize.com%2Fzipfit%2F23%2F11%2F1%2F28%2Fzipfit_gara_lv-1.png&amp;w=1200&amp;q=25 1200w,
                https://www.zipfit.com/_next/image?url=https%3A%2F%2Fmedia.crystallize.com%2Fzipfit%2F23%2F11%2F1%2F28%2Fzipfit_gara_lv-1.png&amp;w=1920&amp;q=25 1920w,
                https://www.zipfit.com/_next/image?url=https%3A%2F%2Fmedia.crystallize.com%2Fzipfit%2F23%2F11%2F1%2F28%2Fzipfit_gara_lv-1.png&amp;w=2048&amp;q=25 2048w,
                https://www.zipfit.com/_next/image?url=https%3A%2F%2Fmedia.crystallize.com%2Fzipfit%2F23%2F11%2F1%2F28%2Fzipfit_gara_lv-1.png&amp;w=3840&amp;q=25 3840w
              "
              class="bottom-0 left-0 object-contain absolute top-0 w-12 h-12"
              id="img-1"
            />
          </div>
          <div
            class="cursor-pointer opacity-25 relative mr-3 md:w-24"
            id="div-4"
          >
            <img
              src="https://www.zipfit.com/_next/image?url=https%3A%2F%2Fmedia.crystallize.com%2Fzipfit%2F23%2F11%2F1%2F28%2Fzipfit_gara_lv-2.png&amp;w=3840&amp;q=25"
              srcset="
                https://www.zipfit.com/_next/image?url=https%3A%2F%2Fmedia.crystallize.com%2Fzipfit%2F23%2F11%2F1%2F28%2Fzipfit_gara_lv-2.png&amp;w=16&amp;q=25     16w,
                https://www.zipfit.com/_next/image?url=https%3A%2F%2Fmedia.crystallize.com%2Fzipfit%2F23%2F11%2F1%2F28%2Fzipfit_gara_lv-2.png&amp;w=32&amp;q=25     32w,
                https://www.zipfit.com/_next/image?url=https%3A%2F%2Fmedia.crystallize.com%2Fzipfit%2F23%2F11%2F1%2F28%2Fzipfit_gara_lv-2.png&amp;w=48&amp;q=25     48w,
                https://www.zipfit.com/_next/image?url=https%3A%2F%2Fmedia.crystallize.com%2Fzipfit%2F23%2F11%2F1%2F28%2Fzipfit_gara_lv-2.png&amp;w=64&amp;q=25     64w,
                https://www.zipfit.com/_next/image?url=https%3A%2F%2Fmedia.crystallize.com%2Fzipfit%2F23%2F11%2F1%2F28%2Fzipfit_gara_lv-2.png&amp;w=96&amp;q=25     96w,
                https://www.zipfit.com/_next/image?url=https%3A%2F%2Fmedia.crystallize.com%2Fzipfit%2F23%2F11%2F1%2F28%2Fzipfit_gara_lv-2.png&amp;w=128&amp;q=25   128w,
                https://www.zipfit.com/_next/image?url=https%3A%2F%2Fmedia.crystallize.com%2Fzipfit%2F23%2F11%2F1%2F28%2Fzipfit_gara_lv-2.png&amp;w=256&amp;q=25   256w,
                https://www.zipfit.com/_next/image?url=https%3A%2F%2Fmedia.crystallize.com%2Fzipfit%2F23%2F11%2F1%2F28%2Fzipfit_gara_lv-2.png&amp;w=384&amp;q=25   384w,
                https://www.zipfit.com/_next/image?url=https%3A%2F%2Fmedia.crystallize.com%2Fzipfit%2F23%2F11%2F1%2F28%2Fzipfit_gara_lv-2.png&amp;w=640&amp;q=25   640w,
                https://www.zipfit.com/_next/image?url=https%3A%2F%2Fmedia.crystallize.com%2Fzipfit%2F23%2F11%2F1%2F28%2Fzipfit_gara_lv-2.png&amp;w=750&amp;q=25   750w,
                https://www.zipfit.com/_next/image?url=https%3A%2F%2Fmedia.crystallize.com%2Fzipfit%2F23%2F11%2F1%2F28%2Fzipfit_gara_lv-2.png&amp;w=828&amp;q=25   828w,
                https://www.zipfit.com/_next/image?url=https%3A%2F%2Fmedia.crystallize.com%2Fzipfit%2F23%2F11%2F1%2F28%2Fzipfit_gara_lv-2.png&amp;w=1080&amp;q=25 1080w,
                https://www.zipfit.com/_next/image?url=https%3A%2F%2Fmedia.crystallize.com%2Fzipfit%2F23%2F11%2F1%2F28%2Fzipfit_gara_lv-2.png&amp;w=1200&amp;q=25 1200w,
                https://www.zipfit.com/_next/image?url=https%3A%2F%2Fmedia.crystallize.com%2Fzipfit%2F23%2F11%2F1%2F28%2Fzipfit_gara_lv-2.png&amp;w=1920&amp;q=25 1920w,
                https://www.zipfit.com/_next/image?url=https%3A%2F%2Fmedia.crystallize.com%2Fzipfit%2F23%2F11%2F1%2F28%2Fzipfit_gara_lv-2.png&amp;w=2048&amp;q=25 2048w,
                https://www.zipfit.com/_next/image?url=https%3A%2F%2Fmedia.crystallize.com%2Fzipfit%2F23%2F11%2F1%2F28%2Fzipfit_gara_lv-2.png&amp;w=3840&amp;q=25 3840w
              "
              class="bottom-0 left-0 object-contain absolute top-0 w-12 h-12"
              id="img-2"
            />
          </div>
          <div
            class="cursor-pointer opacity-25 relative mr-3 md:w-24"
            id="div-5"
          >
            <img
              src="https://www.zipfit.com/_next/image?url=https%3A%2F%2Fmedia.crystallize.com%2Fzipfit%2F23%2F11%2F1%2F28%2Fzipfit_gara_lv-3.png&amp;w=3840&amp;q=25"
              srcset="
                https://www.zipfit.com/_next/image?url=https%3A%2F%2Fmedia.crystallize.com%2Fzipfit%2F23%2F11%2F1%2F28%2Fzipfit_gara_lv-3.png&amp;w=16&amp;q=25     16w,
                https://www.zipfit.com/_next/image?url=https%3A%2F%2Fmedia.crystallize.com%2Fzipfit%2F23%2F11%2F1%2F28%2Fzipfit_gara_lv-3.png&amp;w=32&amp;q=25     32w,
                https://www.zipfit.com/_next/image?url=https%3A%2F%2Fmedia.crystallize.com%2Fzipfit%2F23%2F11%2F1%2F28%2Fzipfit_gara_lv-3.png&amp;w=48&amp;q=25     48w,
                https://www.zipfit.com/_next/image?url=https%3A%2F%2Fmedia.crystallize.com%2Fzipfit%2F23%2F11%2F1%2F28%2Fzipfit_gara_lv-3.png&amp;w=64&amp;q=25     64w,
                https://www.zipfit.com/_next/image?url=https%3A%2F%2Fmedia.crystallize.com%2Fzipfit%2F23%2F11%2F1%2F28%2Fzipfit_gara_lv-3.png&amp;w=96&amp;q=25     96w,
                https://www.zipfit.com/_next/image?url=https%3A%2F%2Fmedia.crystallize.com%2Fzipfit%2F23%2F11%2F1%2F28%2Fzipfit_gara_lv-3.png&amp;w=128&amp;q=25   128w,
                https://www.zipfit.com/_next/image?url=https%3A%2F%2Fmedia.crystallize.com%2Fzipfit%2F23%2F11%2F1%2F28%2Fzipfit_gara_lv-3.png&amp;w=256&amp;q=25   256w,
                https://www.zipfit.com/_next/image?url=https%3A%2F%2Fmedia.crystallize.com%2Fzipfit%2F23%2F11%2F1%2F28%2Fzipfit_gara_lv-3.png&amp;w=384&amp;q=25   384w,
                https://www.zipfit.com/_next/image?url=https%3A%2F%2Fmedia.crystallize.com%2Fzipfit%2F23%2F11%2F1%2F28%2Fzipfit_gara_lv-3.png&amp;w=640&amp;q=25   640w,
                https://www.zipfit.com/_next/image?url=https%3A%2F%2Fmedia.crystallize.com%2Fzipfit%2F23%2F11%2F1%2F28%2Fzipfit_gara_lv-3.png&amp;w=750&amp;q=25   750w,
                https://www.zipfit.com/_next/image?url=https%3A%2F%2Fmedia.crystallize.com%2Fzipfit%2F23%2F11%2F1%2F28%2Fzipfit_gara_lv-3.png&amp;w=828&amp;q=25   828w,
                https://www.zipfit.com/_next/image?url=https%3A%2F%2Fmedia.crystallize.com%2Fzipfit%2F23%2F11%2F1%2F28%2Fzipfit_gara_lv-3.png&amp;w=1080&amp;q=25 1080w,
                https://www.zipfit.com/_next/image?url=https%3A%2F%2Fmedia.crystallize.com%2Fzipfit%2F23%2F11%2F1%2F28%2Fzipfit_gara_lv-3.png&amp;w=1200&amp;q=25 1200w,
                https://www.zipfit.com/_next/image?url=https%3A%2F%2Fmedia.crystallize.com%2Fzipfit%2F23%2F11%2F1%2F28%2Fzipfit_gara_lv-3.png&amp;w=1920&amp;q=25 1920w,
                https://www.zipfit.com/_next/image?url=https%3A%2F%2Fmedia.crystallize.com%2Fzipfit%2F23%2F11%2F1%2F28%2Fzipfit_gara_lv-3.png&amp;w=2048&amp;q=25 2048w,
                https://www.zipfit.com/_next/image?url=https%3A%2F%2Fmedia.crystallize.com%2Fzipfit%2F23%2F11%2F1%2F28%2Fzipfit_gara_lv-3.png&amp;w=3840&amp;q=25 3840w
              "
              class="bottom-0 left-0 object-contain absolute top-0 w-12 h-12"
              id="img-3"
            />
          </div>
          <div
            class="cursor-pointer opacity-25 relative mr-3 md:w-24"
            id="div-6"
          >
            <img
              src="https://www.zipfit.com/_next/image?url=https%3A%2F%2Fmedia.crystallize.com%2Fzipfit%2F23%2F11%2F1%2F28%2Fzipfit_gara_lv-4.png&amp;w=3840&amp;q=25"
              srcset="
                https://www.zipfit.com/_next/image?url=https%3A%2F%2Fmedia.crystallize.com%2Fzipfit%2F23%2F11%2F1%2F28%2Fzipfit_gara_lv-4.png&amp;w=16&amp;q=25     16w,
                https://www.zipfit.com/_next/image?url=https%3A%2F%2Fmedia.crystallize.com%2Fzipfit%2F23%2F11%2F1%2F28%2Fzipfit_gara_lv-4.png&amp;w=32&amp;q=25     32w,
                https://www.zipfit.com/_next/image?url=https%3A%2F%2Fmedia.crystallize.com%2Fzipfit%2F23%2F11%2F1%2F28%2Fzipfit_gara_lv-4.png&amp;w=48&amp;q=25     48w,
                https://www.zipfit.com/_next/image?url=https%3A%2F%2Fmedia.crystallize.com%2Fzipfit%2F23%2F11%2F1%2F28%2Fzipfit_gara_lv-4.png&amp;w=64&amp;q=25     64w,
                https://www.zipfit.com/_next/image?url=https%3A%2F%2Fmedia.crystallize.com%2Fzipfit%2F23%2F11%2F1%2F28%2Fzipfit_gara_lv-4.png&amp;w=96&amp;q=25     96w,
                https://www.zipfit.com/_next/image?url=https%3A%2F%2Fmedia.crystallize.com%2Fzipfit%2F23%2F11%2F1%2F28%2Fzipfit_gara_lv-4.png&amp;w=128&amp;q=25   128w,
                https://www.zipfit.com/_next/image?url=https%3A%2F%2Fmedia.crystallize.com%2Fzipfit%2F23%2F11%2F1%2F28%2Fzipfit_gara_lv-4.png&amp;w=256&amp;q=25   256w,
                https://www.zipfit.com/_next/image?url=https%3A%2F%2Fmedia.crystallize.com%2Fzipfit%2F23%2F11%2F1%2F28%2Fzipfit_gara_lv-4.png&amp;w=384&amp;q=25   384w,
                https://www.zipfit.com/_next/image?url=https%3A%2F%2Fmedia.crystallize.com%2Fzipfit%2F23%2F11%2F1%2F28%2Fzipfit_gara_lv-4.png&amp;w=640&amp;q=25   640w,
                https://www.zipfit.com/_next/image?url=https%3A%2F%2Fmedia.crystallize.com%2Fzipfit%2F23%2F11%2F1%2F28%2Fzipfit_gara_lv-4.png&amp;w=750&amp;q=25   750w,
                https://www.zipfit.com/_next/image?url=https%3A%2F%2Fmedia.crystallize.com%2Fzipfit%2F23%2F11%2F1%2F28%2Fzipfit_gara_lv-4.png&amp;w=828&amp;q=25   828w,
                https://www.zipfit.com/_next/image?url=https%3A%2F%2Fmedia.crystallize.com%2Fzipfit%2F23%2F11%2F1%2F28%2Fzipfit_gara_lv-4.png&amp;w=1080&amp;q=25 1080w,
                https://www.zipfit.com/_next/image?url=https%3A%2F%2Fmedia.crystallize.com%2Fzipfit%2F23%2F11%2F1%2F28%2Fzipfit_gara_lv-4.png&amp;w=1200&amp;q=25 1200w,
                https://www.zipfit.com/_next/image?url=https%3A%2F%2Fmedia.crystallize.com%2Fzipfit%2F23%2F11%2F1%2F28%2Fzipfit_gara_lv-4.png&amp;w=1920&amp;q=25 1920w,
                https://www.zipfit.com/_next/image?url=https%3A%2F%2Fmedia.crystallize.com%2Fzipfit%2F23%2F11%2F1%2F28%2Fzipfit_gara_lv-4.png&amp;w=2048&amp;q=25 2048w,
                https://www.zipfit.com/_next/image?url=https%3A%2F%2Fmedia.crystallize.com%2Fzipfit%2F23%2F11%2F1%2F28%2Fzipfit_gara_lv-4.png&amp;w=3840&amp;q=25 3840w
              "
              class="bottom-0 left-0 object-contain absolute top-0 w-12 h-12"
              id="img-4"
            />
          </div>
          <div
            class="cursor-pointer opacity-25 relative mr-3 md:w-24"
            id="div-7"
          >
            <img
              src="https://www.zipfit.com/_next/image?url=https%3A%2F%2Fmedia.crystallize.com%2Fzipfit%2F23%2F11%2F1%2F28%2Fzipfit_gara_lv-6.png&amp;w=3840&amp;q=25"
              srcset="
                https://www.zipfit.com/_next/image?url=https%3A%2F%2Fmedia.crystallize.com%2Fzipfit%2F23%2F11%2F1%2F28%2Fzipfit_gara_lv-6.png&amp;w=16&amp;q=25     16w,
                https://www.zipfit.com/_next/image?url=https%3A%2F%2Fmedia.crystallize.com%2Fzipfit%2F23%2F11%2F1%2F28%2Fzipfit_gara_lv-6.png&amp;w=32&amp;q=25     32w,
                https://www.zipfit.com/_next/image?url=https%3A%2F%2Fmedia.crystallize.com%2Fzipfit%2F23%2F11%2F1%2F28%2Fzipfit_gara_lv-6.png&amp;w=48&amp;q=25     48w,
                https://www.zipfit.com/_next/image?url=https%3A%2F%2Fmedia.crystallize.com%2Fzipfit%2F23%2F11%2F1%2F28%2Fzipfit_gara_lv-6.png&amp;w=64&amp;q=25     64w,
                https://www.zipfit.com/_next/image?url=https%3A%2F%2Fmedia.crystallize.com%2Fzipfit%2F23%2F11%2F1%2F28%2Fzipfit_gara_lv-6.png&amp;w=96&amp;q=25     96w,
                https://www.zipfit.com/_next/image?url=https%3A%2F%2Fmedia.crystallize.com%2Fzipfit%2F23%2F11%2F1%2F28%2Fzipfit_gara_lv-6.png&amp;w=128&amp;q=25   128w,
                https://www.zipfit.com/_next/image?url=https%3A%2F%2Fmedia.crystallize.com%2Fzipfit%2F23%2F11%2F1%2F28%2Fzipfit_gara_lv-6.png&amp;w=256&amp;q=25   256w,
                https://www.zipfit.com/_next/image?url=https%3A%2F%2Fmedia.crystallize.com%2Fzipfit%2F23%2F11%2F1%2F28%2Fzipfit_gara_lv-6.png&amp;w=384&amp;q=25   384w,
                https://www.zipfit.com/_next/image?url=https%3A%2F%2Fmedia.crystallize.com%2Fzipfit%2F23%2F11%2F1%2F28%2Fzipfit_gara_lv-6.png&amp;w=640&amp;q=25   640w,
                https://www.zipfit.com/_next/image?url=https%3A%2F%2Fmedia.crystallize.com%2Fzipfit%2F23%2F11%2F1%2F28%2Fzipfit_gara_lv-6.png&amp;w=750&amp;q=25   750w,
                https://www.zipfit.com/_next/image?url=https%3A%2F%2Fmedia.crystallize.com%2Fzipfit%2F23%2F11%2F1%2F28%2Fzipfit_gara_lv-6.png&amp;w=828&amp;q=25   828w,
                https://www.zipfit.com/_next/image?url=https%3A%2F%2Fmedia.crystallize.com%2Fzipfit%2F23%2F11%2F1%2F28%2Fzipfit_gara_lv-6.png&amp;w=1080&amp;q=25 1080w,
                https://www.zipfit.com/_next/image?url=https%3A%2F%2Fmedia.crystallize.com%2Fzipfit%2F23%2F11%2F1%2F28%2Fzipfit_gara_lv-6.png&amp;w=1200&amp;q=25 1200w,
                https://www.zipfit.com/_next/image?url=https%3A%2F%2Fmedia.crystallize.com%2Fzipfit%2F23%2F11%2F1%2F28%2Fzipfit_gara_lv-6.png&amp;w=1920&amp;q=25 1920w,
                https://www.zipfit.com/_next/image?url=https%3A%2F%2Fmedia.crystallize.com%2Fzipfit%2F23%2F11%2F1%2F28%2Fzipfit_gara_lv-6.png&amp;w=2048&amp;q=25 2048w,
                https://www.zipfit.com/_next/image?url=https%3A%2F%2Fmedia.crystallize.com%2Fzipfit%2F23%2F11%2F1%2F28%2Fzipfit_gara_lv-6.png&amp;w=3840&amp;q=25 3840w
              "
              class="bottom-0 left-0 object-contain absolute top-0 w-12 h-12"
              id="img-5"
            />
          </div>
          <div
            class="cursor-pointer opacity-25 relative mr-3 md:w-24"
            id="div-8"
          >
            <img
              src="https://www.zipfit.com/_next/image?url=https%3A%2F%2Fmedia.crystallize.com%2Fzipfit%2F23%2F11%2F1%2F28%2Fzipfit_gara_lv-5.png&amp;w=3840&amp;q=25"
              srcset="
                https://www.zipfit.com/_next/image?url=https%3A%2F%2Fmedia.crystallize.com%2Fzipfit%2F23%2F11%2F1%2F28%2Fzipfit_gara_lv-5.png&amp;w=16&amp;q=25     16w,
                https://www.zipfit.com/_next/image?url=https%3A%2F%2Fmedia.crystallize.com%2Fzipfit%2F23%2F11%2F1%2F28%2Fzipfit_gara_lv-5.png&amp;w=32&amp;q=25     32w,
                https://www.zipfit.com/_next/image?url=https%3A%2F%2Fmedia.crystallize.com%2Fzipfit%2F23%2F11%2F1%2F28%2Fzipfit_gara_lv-5.png&amp;w=48&amp;q=25     48w,
                https://www.zipfit.com/_next/image?url=https%3A%2F%2Fmedia.crystallize.com%2Fzipfit%2F23%2F11%2F1%2F28%2Fzipfit_gara_lv-5.png&amp;w=64&amp;q=25     64w,
                https://www.zipfit.com/_next/image?url=https%3A%2F%2Fmedia.crystallize.com%2Fzipfit%2F23%2F11%2F1%2F28%2Fzipfit_gara_lv-5.png&amp;w=96&amp;q=25     96w,
                https://www.zipfit.com/_next/image?url=https%3A%2F%2Fmedia.crystallize.com%2Fzipfit%2F23%2F11%2F1%2F28%2Fzipfit_gara_lv-5.png&amp;w=128&amp;q=25   128w,
                https://www.zipfit.com/_next/image?url=https%3A%2F%2Fmedia.crystallize.com%2Fzipfit%2F23%2F11%2F1%2F28%2Fzipfit_gara_lv-5.png&amp;w=256&amp;q=25   256w,
                https://www.zipfit.com/_next/image?url=https%3A%2F%2Fmedia.crystallize.com%2Fzipfit%2F23%2F11%2F1%2F28%2Fzipfit_gara_lv-5.png&amp;w=384&amp;q=25   384w,
                https://www.zipfit.com/_next/image?url=https%3A%2F%2Fmedia.crystallize.com%2Fzipfit%2F23%2F11%2F1%2F28%2Fzipfit_gara_lv-5.png&amp;w=640&amp;q=25   640w,
                https://www.zipfit.com/_next/image?url=https%3A%2F%2Fmedia.crystallize.com%2Fzipfit%2F23%2F11%2F1%2F28%2Fzipfit_gara_lv-5.png&amp;w=750&amp;q=25   750w,
                https://www.zipfit.com/_next/image?url=https%3A%2F%2Fmedia.crystallize.com%2Fzipfit%2F23%2F11%2F1%2F28%2Fzipfit_gara_lv-5.png&amp;w=828&amp;q=25   828w,
                https://www.zipfit.com/_next/image?url=https%3A%2F%2Fmedia.crystallize.com%2Fzipfit%2F23%2F11%2F1%2F28%2Fzipfit_gara_lv-5.png&amp;w=1080&amp;q=25 1080w,
                https://www.zipfit.com/_next/image?url=https%3A%2F%2Fmedia.crystallize.com%2Fzipfit%2F23%2F11%2F1%2F28%2Fzipfit_gara_lv-5.png&amp;w=1200&amp;q=25 1200w,
                https://www.zipfit.com/_next/image?url=https%3A%2F%2Fmedia.crystallize.com%2Fzipfit%2F23%2F11%2F1%2F28%2Fzipfit_gara_lv-5.png&amp;w=1920&amp;q=25 1920w,
                https://www.zipfit.com/_next/image?url=https%3A%2F%2Fmedia.crystallize.com%2Fzipfit%2F23%2F11%2F1%2F28%2Fzipfit_gara_lv-5.png&amp;w=2048&amp;q=25 2048w,
                https://www.zipfit.com/_next/image?url=https%3A%2F%2Fmedia.crystallize.com%2Fzipfit%2F23%2F11%2F1%2F28%2Fzipfit_gara_lv-5.png&amp;w=3840&amp;q=25 3840w
              "
              class="bottom-0 left-0 object-contain absolute top-0 w-12 h-12"
              id="img-6"
            />
          </div>
          <div
            class="cursor-pointer opacity-25 relative mr-3 md:w-24"
            id="div-9"
          >
            <img
              src="https://www.zipfit.com/_next/image?url=https%3A%2F%2Fmedia.crystallize.com%2Fzipfit%2F23%2F9%2F26%2F1%2F23-24-blister-best-of-badge-1.png&amp;w=3840&amp;q=25"
              srcset="
                https://www.zipfit.com/_next/image?url=https%3A%2F%2Fmedia.crystallize.com%2Fzipfit%2F23%2F9%2F26%2F1%2F23-24-blister-best-of-badge-1.png&amp;w=16&amp;q=25     16w,
                https://www.zipfit.com/_next/image?url=https%3A%2F%2Fmedia.crystallize.com%2Fzipfit%2F23%2F9%2F26%2F1%2F23-24-blister-best-of-badge-1.png&amp;w=32&amp;q=25     32w,
                https://www.zipfit.com/_next/image?url=https%3A%2F%2Fmedia.crystallize.com%2Fzipfit%2F23%2F9%2F26%2F1%2F23-24-blister-best-of-badge-1.png&amp;w=48&amp;q=25     48w,
                https://www.zipfit.com/_next/image?url=https%3A%2F%2Fmedia.crystallize.com%2Fzipfit%2F23%2F9%2F26%2F1%2F23-24-blister-best-of-badge-1.png&amp;w=64&amp;q=25     64w,
                https://www.zipfit.com/_next/image?url=https%3A%2F%2Fmedia.crystallize.com%2Fzipfit%2F23%2F9%2F26%2F1%2F23-24-blister-best-of-badge-1.png&amp;w=96&amp;q=25     96w,
                https://www.zipfit.com/_next/image?url=https%3A%2F%2Fmedia.crystallize.com%2Fzipfit%2F23%2F9%2F26%2F1%2F23-24-blister-best-of-badge-1.png&amp;w=128&amp;q=25   128w,
                https://www.zipfit.com/_next/image?url=https%3A%2F%2Fmedia.crystallize.com%2Fzipfit%2F23%2F9%2F26%2F1%2F23-24-blister-best-of-badge-1.png&amp;w=256&amp;q=25   256w,
                https://www.zipfit.com/_next/image?url=https%3A%2F%2Fmedia.crystallize.com%2Fzipfit%2F23%2F9%2F26%2F1%2F23-24-blister-best-of-badge-1.png&amp;w=384&amp;q=25   384w,
                https://www.zipfit.com/_next/image?url=https%3A%2F%2Fmedia.crystallize.com%2Fzipfit%2F23%2F9%2F26%2F1%2F23-24-blister-best-of-badge-1.png&amp;w=640&amp;q=25   640w,
                https://www.zipfit.com/_next/image?url=https%3A%2F%2Fmedia.crystallize.com%2Fzipfit%2F23%2F9%2F26%2F1%2F23-24-blister-best-of-badge-1.png&amp;w=750&amp;q=25   750w,
                https://www.zipfit.com/_next/image?url=https%3A%2F%2Fmedia.crystallize.com%2Fzipfit%2F23%2F9%2F26%2F1%2F23-24-blister-best-of-badge-1.png&amp;w=828&amp;q=25   828w,
                https://www.zipfit.com/_next/image?url=https%3A%2F%2Fmedia.crystallize.com%2Fzipfit%2F23%2F9%2F26%2F1%2F23-24-blister-best-of-badge-1.png&amp;w=1080&amp;q=25 1080w,
                https://www.zipfit.com/_next/image?url=https%3A%2F%2Fmedia.crystallize.com%2Fzipfit%2F23%2F9%2F26%2F1%2F23-24-blister-best-of-badge-1.png&amp;w=1200&amp;q=25 1200w,
                https://www.zipfit.com/_next/image?url=https%3A%2F%2Fmedia.crystallize.com%2Fzipfit%2F23%2F9%2F26%2F1%2F23-24-blister-best-of-badge-1.png&amp;w=1920&amp;q=25 1920w,
                https://www.zipfit.com/_next/image?url=https%3A%2F%2Fmedia.crystallize.com%2Fzipfit%2F23%2F9%2F26%2F1%2F23-24-blister-best-of-badge-1.png&amp;w=2048&amp;q=25 2048w,
                https://www.zipfit.com/_next/image?url=https%3A%2F%2Fmedia.crystallize.com%2Fzipfit%2F23%2F9%2F26%2F1%2F23-24-blister-best-of-badge-1.png&amp;w=3840&amp;q=25 3840w
              "
              class="bottom-0 left-0 object-contain absolute top-0 w-12 h-12"
              id="img-7"
            />
          </div>
        </div>
      </div>
    </div>

    <div
      class="text-zinc-800 text-lg w-full bg-zinc-50 lg:w-2/4 lg:pr-28"
      id="div-1"
    >
      <h1 class="text-[5.00rem] leading-none font-bold" id="h1-1">
        {{ productVariant.name }}
      </h1>
      <div
        class="bg-[linear-gradient(258.18deg,_rgb(252,_194,_241),_rgb(133,_173,_255)_100%,_rgb(182,_206,_255)_0px)] w-20 h-1.5 my-6"
        id="div-2"
      ></div>
      <div class="justify-start flex gap-10">
        <div>
          <div class="text-neutral-500">Designed for</div>
          <h6 class="text-2xl font-bold mt-3">All-mountain</h6>
        </div>
        <div>
          <div class="text-neutral-500">Feel</div>
          <h6 class="text-2xl font-bold mt-3">Aggressive</h6>
        </div>
        <div>
          <div class="text-neutral-500">Liner Volume</div>
          <h6 class="text-2xl font-bold mt-3">Mid</h6>
        </div>
      </div>
      <div
        class="text-neutral-500 text-2xl my-6 lg:mt-10 lg:mr-0 lg:mb-10 lg:ml-0"
      >
        {{ productVariant.description }}
      </div>
      <div class="my-6 lg:mt-10 lg:mr-0 lg:mb-10 lg:ml-0">
        <div class="flex mb-4 text-2xl font-bold">
          <h6 class="flex mr-3">
            Not in stock.<span class="cursor-pointer underline"
              >Notify me when back in stock</span
            >
          </h6>
        </div>
        <div class="flex gap-3">
          <select
            @change="updateFilter({ ['Size']: size.toString() })"
            v-model="size"
            style="background-position: calc(100% - 32px) 50%"
            class="bg-zinc-100 items-center bg-no-repeat cursor-pointer text-2xl pl-6 pr-16 text-ellipsis inline-block w-full h-16 max-w-full border-2 border-neutral-300 border-solid rounded md:w-auto lg:h-16 lg:pt-0 lg:pr-16 lg:pb-0 lg:pl-8"
          >
            <option
              value=""
              class="text-zinc-500 pb-1 px-1 w-auto h-auto"
              disabled
            >
              Sizes
            </option>
            <option
              :value="value"
              :key="value"
              class="pb-1 px-1 w-auto h-auto"
              v-for="{ label, value } in getAllSizes"
            >
              {{ label }}
            </option>
          </select>
          <select
            @change="updateFilter({ ['Material']: material.toString() })"
            v-model="material"
            style="background-position: calc(100% - 32px) 50%"
            class="bg-zinc-100 items-center bg-no-repeat cursor-pointer text-2xl pl-6 pr-16 text-ellipsis inline-block w-full h-16 max-w-full border-2 border-neutral-300 border-solid rounded md:w-auto lg:h-16 lg:pt-0 lg:pr-16 lg:pb-0 lg:pl-8"
          >
            <option
              value=""
              class="text-zinc-500 pb-1 px-1 w-auto h-auto"
              disabled
            >
              Material
            </option>
            <option
              :value="value"
              :key="value"
              class="pb-1 px-1 w-auto h-auto"
              v-for="{ label, value } in getAllMaterials"
            >
              {{ label }}
            </option>
          </select>
        </div>
        <div class="text-neutral-500 mt-4">
          Not sure?
          <span class="cursor-pointer underline">View sizing information.</span>
        </div>
      </div>
      <div
        class="text-[2.63rem] leading-none my-6 lg:mt-10 lg:mr-0 lg:mb-10 lg:ml-0"
      >
        €&nbsp; {{ productVariant.price }}
      </div>
      <div class="flex">
        <button
          class="items-start bg-[linear-gradient(258.18deg,_rgb(252,_194,_241),_rgb(133,_173,_255)_100%,_rgb(182,_206,_255)_0px)] font-bold opacity-50 py-3 px-8 text-center uppercase inline-block h-12 rounded"
          id="button-1"
        >
          Add to cart
        </button>
        <div class="pt-6 lg:pt-0 lg:pr-0 lg:pb-0 lg:pl-14">
          <h6 class="text-2xl font-bold">Shipping &amp; Returns</h6>
          <div class="text-neutral-500 mt-4">
            <p>
              Learn about our
              <a href="https://app.zipfit.com/" class="underline"
                >Returns and Exchanges Policy.</a
              >
              Global + UK customers (outside of EU and NA) are responsible for
              all duties and taxes.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div
    class="text-zinc-800 flex-wrap text-lg bg-zinc-50 lg:flex lg:justify-between lg:mt-20 lg:mr-0 lg:mb-20 lg:ml-0"
  >
    <div class="w-full lg:w-[41.66%] lg:pl-28" id="div-1">
      <div>
        <h3 class="text-[3.63rem] leading-none font-bold">Product details</h3>
        <div
          class="bg-[linear-gradient(258.18deg,_rgb(252,_194,_241),_rgb(133,_173,_255)_100%,_rgb(182,_206,_255)_0px)] w-20 h-1.5 my-4"
        ></div>
        <div class="text-neutral-500 text-2xl mt-8 mb-10">
          The interior is stitched with comfortable neoprene that offers just
          the right amount of padding and is easy to slide on or slip off. Gara
          LV ski boot liners properly position your foot so that your toes have
          wiggle room and stay warm thanks to a neoprene toe box insulated with
          Thinsulate and merino wool. A moderately stiff cuff makes the Gara our
          most versatile liner, capable of performing in any terrain on the
          mountain.
        </div>
        <div class="bg-white mb-5 p-8 md:p-10">
          <h5 class="text-4xl font-bold">Fit considerations</h5>
          <div
            class="bg-[linear-gradient(258.18deg,_rgb(252,_194,_241),_rgb(133,_173,_255)_100%,_rgb(182,_206,_255)_0px)] w-20 h-1.5 my-4"
          ></div>
          <p>
            The Gara LV liner is pre-packed with a moderate amount of
            OneMinuteFit self-molding cork composite, specifically designed for
            low to mid volume performance boots. While the Gara LV comes
            pre-packed with less cork, skiers can
            <a
              href="https://www.zipfit.com/resources/adding-omfit-cork"
              class="underline"
              >add more cork</a
            >
            to the tongue or ankle pockets to dial in their perfect fit. If the
            Gara LV doesn’t have enough volume for your ski boot shells,
            consider the Gara HV model.
          </p>
        </div>
        <div class="bg-white p-8 md:p-10">
          <h5 class="text-4xl font-bold">Intended use</h5>
          <div
            class="bg-[linear-gradient(258.18deg,_rgb(252,_194,_241),_rgb(133,_173,_255)_100%,_rgb(182,_206,_255)_0px)] w-20 h-1.5 my-4"
          ></div>
          All mountain, freeride, carving
        </div>
      </div>
    </div>
    <div class="w-full lg:w-2/4 lg:pr-28">
      <div id="div-2">
        <h3 class="text-[3.63rem] leading-none font-bold">Tech features</h3>
        <div
          class="bg-[linear-gradient(258.18deg,_rgb(252,_194,_241),_rgb(133,_173,_255)_100%,_rgb(182,_206,_255)_0px)] w-20 h-1.5 my-4"
        ></div>
      </div>
      <div
        class="grid-rows-[403.172px_377.578px_316.781px] mt-8 gap-5 lg:grid lg:grid-cols-[repeat(2,_1fr)]"
      >
        <div class="bg-white h-full p-6 lg:p-8">
          <h5 class="text-4xl font-bold mb-4">Laces and power strap</h5>
          Designed to keep your heel and midfoot in place, the lacing system and
          power strap align your foot within the liner.
        </div>
        <div class="bg-white h-full p-6 lg:p-8">
          <h5 class="text-4xl font-bold mb-4">Neoprene toe box</h5>
          A flexible toe box conforms to your forefoot, regardless of the width.
          With your foot secure in place, this toe box design allows for toe
          movement, keeping your feet warm.
        </div>
        <div class="bg-white h-full p-6 lg:p-8">
          <h5 class="text-4xl font-bold mb-4">Merino wool and Thinsulate</h5>
          ZipFit toe boxes are insulated with Thinsulate and real merino wool,
          keeping your toes warmer while still promoting breathability.
        </div>
        <div class="bg-white h-full p-6 lg:p-8">
          <h5 class="text-4xl font-bold mb-4">Adjustable cork pouches</h5>
          Three cork pouches in each liner (located behind the top of the tongue
          and on either side of the instep) allow you to adjust the cork fill to
          dial in your perfect fit.
        </div>
        <div class="bg-white h-full p-6 lg:p-8">
          <h5 class="text-4xl font-bold mb-4">Neoprene lining</h5>
          3mm neoprene lines the interior of this ZipFit, adding a nice element
          of cushioning without sacrificing the performance of your fit.
        </div>
      </div>
    </div>
  </div>
</template>
<style>
@media (max-width: 1023px) {
  /* DivMagic Note: Tailwind does not support max-width. We will fix this soon. */

  #div-1 {
    display: none !important;
  }
}
@media (max-width: 767px) {
  /* DivMagic Note: Tailwind does not support max-width. We will fix this soon. */

  #button-1 {
    padding-top: 10px !important;
    padding-right: 18px !important;
    padding-bottom: 10px !important;
    padding-left: 18px !important;
  }
}
@media (max-width: 1023px) {
  /* DivMagic Note: Tailwind does not support max-width. We will fix this soon. */

  #div-1 {
    padding-top: 0px !important;
    padding-right: 24px !important;
    padding-bottom: 0px !important;
    padding-left: 24px !important;
  }
  #h1-1 {
    display: none !important;
  }
  #div-2 {
    display: none !important;
  }
}
@media (max-width: 767px) {
  /* DivMagic Note: Tailwind does not support max-width. We will fix this soon. */

  #button-1 {
    width: 100% !important;
  }
}
@media (max-width: 1023px) {
  /* DivMagic Note: Tailwind does not support max-width. We will fix this soon. */

  #div-1 {
    padding-top: 0px !important;
    padding-right: 24px !important;
    padding-bottom: 0px !important;
    padding-left: 24px !important;
  }
  #div-10 {
    padding-top: 0px !important;
    padding-right: 24px !important;
    padding-bottom: 0px !important;
    padding-left: 24px !important;
  }
  #h1-1 {
    display: none !important;
  }
  #div-11 {
    display: none !important;
  }
}
@media (max-width: 767px) {
  /* DivMagic Note: Tailwind does not support max-width. We will fix this soon. */

  #div-2 {
    justify-content: center !important;
  }
  #div-3 {
    width: 10px !important;
    height: 10px !important;
  }
  #img-1 {
    display: none !important;
  }
  #div-4 {
    width: 10px !important;
    height: 10px !important;
  }
  #img-2 {
    display: none !important;
  }
  #div-5 {
    width: 10px !important;
    height: 10px !important;
  }
  #img-3 {
    display: none !important;
  }
  #div-6 {
    width: 10px !important;
    height: 10px !important;
  }
  #img-4 {
    display: none !important;
  }
  #div-7 {
    width: 10px !important;
    height: 10px !important;
  }
  #img-5 {
    display: none !important;
  }
  #div-8 {
    width: 10px !important;
    height: 10px !important;
  }
  #img-6 {
    display: none !important;
  }
  #div-9 {
    width: 10px !important;
    height: 10px !important;
  }
  #img-7 {
    display: none !important;
  }
  #svg-1 {
    width: 18px !important;
    height: 18px !important;
  }
  #svg-2 {
    width: 18px !important;
    height: 18px !important;
  }
  #svg-3 {
    width: 18px !important;
    height: 18px !important;
  }
  #svg-4 {
    width: 18px !important;
    height: 18px !important;
  }
  #svg-5 {
    width: 18px !important;
    height: 18px !important;
  }
  #button-1 {
    width: 100% !important;
  }
}
@media (max-width: 1023px) {
  /* DivMagic Note: Tailwind does not support max-width. We will fix this soon. */

  #div-1 {
    padding-top: 0px !important;
    padding-right: 24px !important;
    padding-bottom: 0px !important;
    padding-left: 24px !important;
  }
  #div-2 {
    padding-top: 0px !important;
    padding-right: 24px !important;
    padding-bottom: 0px !important;
    padding-left: 24px !important;
  }
}
</style>
