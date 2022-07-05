console.time("runtime")
// lang
const __LANG__ = process.argv[2]?process.argv[2]:"en"
// statement
// abi item type
let __ABI_TYPE__ = {
    __EVENT__:"event",
    __FUNCTION__:"function",
}
// function type
let __FUNCTION_TYPE__ = {
    __VIEW__:"view",
    __PAYABLE__:"payable"
}
// chinese message
let __LANG_CN_MESSAGE__ = {
    __EVENT__:"事件",
    __VIEW__:"查看类方法",
    __PAYABLE__:"支付类方法",
    __TRADE_INFORMATION__:"交易信息"
}
// messages
let __MESSAGE__ = {
    __LINE__:"----------------------------------------------------------------------------------------------------------------------------------------------",
    __START_PARSE__(__ABI_NAME__){ return `start parse ${__ABI_NAME__}` },
    __PARSING__(__ABI_ITEM_TYPE__,__ABI_ITEM_STATE_MUTABILITY__,__ABI_NAME__){ return `[complete]\n`.green+`* [methods]`.yellow+` ${__ABI_NAME__}\n`+`* [type]`.yellow+` ${__ABI_ITEM_TYPE__}`+`${__ABI_ITEM_STATE_MUTABILITY__?`\n* [stateMutability]`.yellow+` ${__ABI_ITEM_STATE_MUTABILITY__}`:""}`; },
    __UNKNOWN_TYPE__:"unknown type".gray,
    __PARSE__:`                                                               FUNCTION PARSE                                                               `,
    __PARAM__:`param`,
    __OUTPUT__:"output",
    __PAYABLE_RETURN_MESSAGE__:"trade information",
    __BUILD_STRUCT_COMPLETE__:"build structure complete.",
    __WRITE_SUCCESS__:"write success.",
}
// param type
let __PARAM_TYPE__ = {
    __ADDRESS__:"address",
    __UINT__:{
        256:"uint256",
        248:"uint248",
        240:"uint240",
        232:"uint232",
        224:"uint224",
        216:"uint216",
        208:"uint208",
        200:"uint200",
        192:"uint192",
        184:"uint184",
        176:"uint176",
        168:"uint168",
        160:"uint160",
        152:"uint152",
        144:"uint144",
        136:"uint136",
        128:"uint128",
        120:"uint120",
        112:"uint112",
        104:"uint104",
        96:"uint96",
        88:"uint88",
        80:"uint80",
        80:"uint72",
        64:"uint64",
        56:"uint56",
        48:"uint48",
        40:"uint40",
        32:"uint32",
        24:"uint24",
        16:"uint16",
        8:"uint8",
        0:"uint"
    },
    __STRING__:"string",
    __BOOL__:"bool",
    __BYTES__:{
        0:"byte",
        00:"bytes",
        01:"bytes1",
        02:"bytes2",
        03:"bytes3",
        04:"bytes4",
        05:"bytes5",
        06:"bytes6",
        07:"bytes7",
        08:"bytes8",
        09:"bytes9",
        10:"bytes10",
        11:"bytes11",
        12:"bytes12",
        13:"bytes13",
        14:"bytes14",
        15:"bytes15",
        16:"bytes16",
        17:"bytes17",
        18:"bytes18",
        19:"bytes19",
        20:"bytes20",
        21:"bytes21",
        22:"bytes22",
        23:"bytes23",
        24:"bytes24",
        25:"bytes25",
        26:"bytes26",
        27:"bytes27",
        28:"bytes28",
        29:"bytes29",
        30:"bytes30",
        31:"bytes31",
        32:"bytes32",
    }

}
// init string
let __INIT_STRING__ = __LANG__=="en"?`name,type,function_type,output\n`:"方法名,类型,方法类型,输出\n"
const __FILE_ADDRESS__ = {
    __WHD_JSON__:"./WHD.json",
    __OUTPUT_CSV__:"./WHD.csv"
}
// require module
const __FS_MODULE__ = require('fs');
require('colors');
// encapsulation method
let __PACKAGE_METHODS__ = {
    __LOG__:console.log,
    __WRITE__:__FS_MODULE__.writeFileSync
}
// read file
let __READ__ = __FS_MODULE__.readFileSync("./WHD.json").toString()
let __ABI__ = JSON.parse(__READ__).abi
// main program
function __MAIN__(){
    let __STRING_MEMORY__ = __INIT_STRING__
    let __ABI_ARR__ = {
        __EVENT__:[],
        __FUNCTION__:{
            __VIEW__:[],
            __PAYABLE__:[]
        }
    }
    __PACKAGE_METHODS__.__LOG__(__MESSAGE__.__LINE__.blue)
    __PACKAGE_METHODS__.__LOG__(__MESSAGE__.__PARSE__.blue)
    // circulation array and gets various types of methods
    __ABI__.map((__ABI_ITEM__,__ABI_INDEX__)=>{
        if(__ABI_INDEX__==0){
            __PACKAGE_METHODS__.__LOG__(__MESSAGE__.__LINE__.blue)            
        }
        __PACKAGE_METHODS__.__LOG__(__MESSAGE__.__START_PARSE__(__ABI_ITEM__.name).blue);
        __PACKAGE_METHODS__.__LOG__(__MESSAGE__.__PARSING__(__ABI_ITEM__.type,__ABI_ITEM__.stateMutability,__ABI_ITEM__.name))
        __PACKAGE_METHODS__.__LOG__(__MESSAGE__.__LINE__.blue)
        switch(__ABI_ITEM__.type){
            case __ABI_TYPE__.__EVENT__:__ABI_ARR__.__EVENT__.push(__ABI_ITEM__);break;
            case __ABI_TYPE__.__FUNCTION__:
                switch(__ABI_ITEM__.stateMutability){
                    case __FUNCTION_TYPE__.__VIEW__:__ABI_ARR__.__FUNCTION__.__VIEW__.push(__ABI_ITEM__);break;
                    case __FUNCTION_TYPE__.__PAYABLE__:__ABI_ARR__.__FUNCTION__.__PAYABLE__.push(__ABI_ITEM__);break;
                    default: __ABI_ARR__.__FUNCTION__.__PAYABLE__.push(__ABI_ITEM__);break;
                }
            default: __MESSAGE__.__UNKNOWN_TYPE__;break;
        }
    })
    // circulation event array and write __STRING_MEMORY__
    __ABI_ARR__.__EVENT__.map((__EVENT_ITEM__,__EVENT_INDEX__)=>{
        // init function params
        let __INPUT_MEMORY__ = `(`
        __EVENT_ITEM__.inputs.map((__INPUT_ITEM__,__INPUT_INDEX__)=>{
            __INPUT_MEMORY__ += `${__INPUT_ITEM__.type} ${__INPUT_ITEM__.name?__INPUT_ITEM__.name:`${__MESSAGE__.__PARAM__}${__INPUT_INDEX__}`}`+`${__INPUT_INDEX__ == __EVENT_ITEM__.inputs.length - 1?"":" "}`
        })
        __INPUT_MEMORY__ += `)`
        // write __STRING_MEMORY__
        __STRING_MEMORY__ += `${__EVENT_ITEM__.name}${__INPUT_MEMORY__},${__EVENT_ITEM__.type},${__ABI_TYPE__.__EVENT__}, \n`
    })
    // circulation view array and write __STRING_MEMORY__
    __ABI_ARR__.__FUNCTION__.__VIEW__.map((__VIEW_ITEM__,__VIEW_INDEX__)=>{
        let __INPUT_MEMORY__ = `(`
        __VIEW_ITEM__.inputs.map((__INPUT_ITEM__,__INPUT_INDEX__)=>{
            __INPUT_MEMORY__ += `${__INPUT_ITEM__.type} ${__INPUT_ITEM__.name?__INPUT_ITEM__.name:`${__MESSAGE__.__PARAM__}${__INPUT_INDEX__}`}`+`${__INPUT_INDEX__ == __VIEW_ITEM__.inputs.length - 1?"":" "}`
        })
        __INPUT_MEMORY__ += `)`
        let __OUTPUT_MEMORY__ = ``
        __VIEW_ITEM__.outputs.map((__OUTPUT_ITEM__,__OUTPUT_INDEX__)=>{
            __OUTPUT_MEMORY__ += `${__OUTPUT_ITEM__.type} ${__OUTPUT_ITEM__.name?__OUTPUT_ITEM__.name:`${__MESSAGE__.__OUTPUT__}${__OUTPUT_INDEX__}`}`+`${__OUTPUT_INDEX__ == __VIEW_ITEM__.outputs.length - 1?"":" "}`
        })
        __STRING_MEMORY__ += `${__VIEW_ITEM__.name}${__INPUT_MEMORY__},${__VIEW_ITEM__.type},${__VIEW_ITEM__.stateMutability},${__OUTPUT_MEMORY__} \n`
    })
    // circulation payable array and write __STRING_MEMORY__
    __ABI_ARR__.__FUNCTION__.__PAYABLE__.map((__PAYABLE_ITEM__,__PAYABLE_INDEX__)=>{
        let __INPUT_MEMORY__ = `(`
        __PAYABLE_ITEM__.inputs.map((__INPUT_ITEM__,__INPUT_INDEX__)=>{
            __INPUT_MEMORY__ += `${__INPUT_ITEM__.type} ${__INPUT_ITEM__.name?__INPUT_ITEM__.name:`${__MESSAGE__.__PARAM__}${__INPUT_INDEX__}`}`+`${__INPUT_INDEX__ == __PAYABLE_ITEM__.inputs.length - 1?"":" "}`
        })
        __INPUT_MEMORY__ += `)`
        __STRING_MEMORY__ += `${__PAYABLE_ITEM__.name}${__INPUT_MEMORY__},${__PAYABLE_ITEM__.type},${__FUNCTION_TYPE__.__PAYABLE__},${__MESSAGE__.__PAYABLE_RETURN_MESSAGE__}\n`
    })
    if(__LANG__ == "cn"||__LANG__ == "chinese"||__LANG__ == "CN"){
        __STRING_MEMORY__=__STRING_MEMORY__.replace(/event/g,__LANG_CN_MESSAGE__.__EVENT__)
        __STRING_MEMORY__=__STRING_MEMORY__.replace(/view/g,__LANG_CN_MESSAGE__.__VIEW__)
        __STRING_MEMORY__=__STRING_MEMORY__.replace(/payable/g,__LANG_CN_MESSAGE__.__PAYABLE__)
        __STRING_MEMORY__=__STRING_MEMORY__.replace(/trade information/g,__LANG_CN_MESSAGE__.__TRADE_INFORMATION__)
    }
    __PACKAGE_METHODS__.__LOG__(__MESSAGE__.__BUILD_STRUCT_COMPLETE__)
    // write __STRING_MEMORY__ in whd.csv
    __PACKAGE_METHODS__.__WRITE__(__FILE_ADDRESS__.__OUTPUT_CSV__,__STRING_MEMORY__)
    __PACKAGE_METHODS__.__LOG__(__MESSAGE__.__WRITE_SUCCESS__)
    console.timeEnd("runtime")
}
__MAIN__()