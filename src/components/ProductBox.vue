<template>
<div id="order_container" class="col-lg-9 col-xs-12">
        <div class="row">
      <div class="col">
        <h5 class="section-heading">訂單查詢</h5>
      </div>
    </div>
    
        <ul class="shipping_filter">
          <li class="active">所有訂單</li>
          <li data-filter="preparing">準備出貨</li>
          <li data-filter="fulfilled">已出貨</li>
          <li data-filter="received">已收貨</li>
          <li data-filter="returned">退貨</li>
        </ul>
        <div id="order_table">
          
            <div class="empty">
              <div class="text-center">您的帳號目前沒有訂單</div>
            </div>
          
        </div>
      </div>
      
</template>
