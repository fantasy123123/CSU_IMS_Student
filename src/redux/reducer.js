let initState=[
    {
        key: 1,
        bonusPointName:'名称1',
        bonusScoreCategory:'类别3',
        addedValue:3.00,
        proofPicture:[
            '/avatar.img',
            '/avatar.img'
        ],
        detailInformation:'详细信息1'
    },
    {
        key: 2,
        bonusPointName:'名称2',
        bonusScoreCategory:'类别1',
        addedValue:1.00,
        proofPicture:[
            '/avatar.img',
            '/avatar.img'
        ],
        detailInformation:'详细信息2'
    },
    {
        key: 3,
        bonusPointName:'名称3',
        bonusScoreCategory:'类别3',
        addedValue:3.00,
        proofPicture:[
            '/avatar.img',
            '/avatar.img'
        ],
        detailInformation:'详细信息3'
    },
    {
        key: 4,
        bonusPointName:'名称4',
        bonusScoreCategory:'类别2',
        addedValue:2.00,
        proofPicture:[
            '/avatar.img',
            '/avatar.img',
        ],
        detailInformation:'详细信息4'
    },
    {
        key: 5,
        bonusPointName:'名称5',
        bonusScoreCategory:'类别1',
        addedValue:1.00,
        proofPicture:[
            '/avatar.img',
            '/avatar.img'
        ],
        detailInformation:'详细信息5'
    }
]

let initKey=initState.length

function reducer(preState=initState,action){
    const {type,data}=action

    switch (type){
        case 'deleteBonusPoint'://删除数据
            return preState.filter((item)=>item.key!==data.key)

        case 'changeBonusPoint'://修改数据
            for (let i=0;i<preState.length;i++){
                if(preState[i].key===data.key){
                    preState[i]=data;
                }
            }
            return preState;

        case 'addBonusPoint'://增添数据
            initKey++;
            return preState.concat({
                key: initKey,
                ...data
            })

        default:
            return preState;
    }
}

export default reducer