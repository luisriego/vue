<template>
    <div class="container-fluid">
        <div class="row">
            <aside class="col-xs-12 col-3">
                <sidebar-component />
            </aside>
            <div class="col-xs-12 col-9">
                <catalog-component />
            </div>
        </div>
    </div>
</template>
<script>
import CatalogComponent from '@/components/catalog';
import SidebarComponent from '@/components/sidebar';

export default {
    name: 'Products',
    components: {
        CatalogComponent,
        SidebarComponent,
    },
};
</script>
<style lang="scss" module>
@import '~styles/components/light-component';
.sidebar {
    @include light-component;
    ul {
        li a:hover {
            background: $blue-component-link-hover;
        }
    }
}
</style>
