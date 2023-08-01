(function () {
  const productsFilters = () => {
    const products = document.querySelectorAll('.popular-products .collection-popular-card');
    const limit = document.querySelector('.popular-products__wrapper').dataset.limit;

    document.querySelectorAll('.filters__item').forEach(item => {

      item.addEventListener('click', (event) => {
        const filterTarget = item.dataset.filterTarget;
        
        document.querySelectorAll('.filters__item').forEach(element => {
          element.classList.remove('filters__item_active');
        })
        item.classList.add('filters__item_active');

        let i = 0;
        products.forEach(element => {
          element.classList.remove('show');
        });
        
        products.forEach(element => {
          let productFilter = JSON.parse(element.dataset.filter);
          
          if (i < limit) {
            let flag = false;
            for (let index = 0; index < productFilter.length; index++) {
              if (productFilter[index] == filterTarget || filterTarget == 'all') {
                element.classList.add('show');
                flag = true;
                i++;
                break;
              }
            }
            if (!flag) {
              element.classList.remove('show');
            }
          }
        });
      })
    })
  }

  productsFilters();

  document.addEventListener('shopify:section:load', function () {
		productsFilters();
	}); 
})();