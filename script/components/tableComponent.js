/**
 * Created with ES6.
 * User: Ushow Jack/youshoujie@tomee.cn
 * Date: 2017/4/21
 * Time: 11:43
 */
"use strict"
/**
 * data =  [
 *    [{val:1,sort:false},{val:1,sort:true},{val:1,sort:true},{val:1,sort:true}],
 *    [1,2,3,4],
 *    [1,2,3,4],
 *    [1,2,3,4],
 * ]
 * @param data
 */

let table = [
    [{name:"gfawt",sort:true},{name:"gfawt",sort:true},{name:"gfawt",sort:false}],
    ["gfawt","fewfgw","gwgw"],
    ["gfawt","fewfgw","gwgw"],
    ["gfawt","fewfgw","gwgw"],
];
const tableComponent = new Vue({
    el: '.table',
    template: `
        <table class="table">
            <template v-for="(item,index) in table">
                <thead v-if="index === 0">
                    <tr>
                        <th>#</th>
                        <th v-for="(childrenItem,index) in item">
                            {{childrenItem.name}}
                            <span v-if="childrenItem.sort" @click="sortBtn">/</span>
                        </th>
                    </tr>
                </thead>
                <tbody v-else>
                    <tr>
                        <td>{{index}}</td>
                        <td v-for="(childrenItem,index) in item">{{childrenItem}}</td>
                    </tr>
                </tbody>
            </template>
        </table>
    `,
    data: {
        'table': table
    },
    methods: {
        sortBtn(){
            alert("This is sort!")
        }
    }

});

