<template>
    <div class="pa-2 text-center white rounded-lg">
        <v-icon size="30">{{icon}}</v-icon>
        <div class="mt-1" style="font-size:14px;font-weight:600;">{{title}}</div>
        <div :class="`mt-1 ${valueColor}`" style="font-size:20px;font-weight:600;">{{value}}</div>
    </div>
</template>
<script>
export default {
    name:"HistoryCard",
    props:{
        title:{
            type:String,
            default:"No Title"
        },
        value:{
            type:[String,Number],
            default:'null'
        },
        valueColor:{
            type:String,
            default:null,
        },
        icon:{
            type:String,
            default:null,
        }
    }
}
</script>