
//打开对话框(添加修改)
function openDialog(title,url,width,height,dgId,dgType){
	
	//datagrid.datagrid('unselectAll').datagrid('uncheckAll');
	var target = parent.$('<div></div>').appendTo('body');
	var opt = { 
			title: title, 
			width: width, 
			height: height, 
			modal: true, 
			collapsible: false, 
			minimizable: false, 
			maximizable: true, 
			closable: true,
			onOpen : function() {
				parent.$.messager.progress({
					title : '提示',
					text : '数据处理中，请稍后....'
				});} 
		};
    opt.content = "<iframe src='"+url+"' style='height:100%;width:100%;border:0;display:block;' frameborder='0'></iframe>"; 
	
    opt.onRefresh = function () {                //可接收选择数据
    	if(dgType == 'datagrid'){
    		dgId.datagrid('reload');
    	}else if(dgType == 'treegrid'){
    		dgId.treegrid('reload');
    	}
    };
    
    target.window(opt);
	
}

//打开对话框(查看)
function openDialogView(title,url,width,height){
	
	
	var target = parent.$('<div></div>').appendTo('body');
	var opt = { 
			title: title, 
			width: width, 
			height: height, 
			modal: true, 
			collapsible: false, 
			minimizable: false, 
			maximizable: true, 
			closable: true,
			onOpen : function() {
				parent.$.messager.progress({
					title : '提示',
					text : '数据处理中，请稍后....'
				});} 
		};
    opt.content = "<iframe src='"+url+"' style='height:100%;width:100%;border:0;display:block;' frameborder='0'></iframe>"; 
	
    target.window(opt);
	
}

function search(){//查询，页码清零
	$("#pageNo").val(0);
	$("#searchForm").submit();
		return false;
}

function reset(){//重置，页码清零
	$("#pageNo").val(0);
	$("#searchForm div.form-group input").val("");
	$("#searchForm div.form-group select").val("");
	$("#searchForm").submit();
		return false;
	 }
function sortOrRefresh(){//刷新或者排序，页码不清零
	
	$("#searchForm").submit();
		return false;
}
function page(n,s){//翻页
	$("#pageNo").val(n);
	$("#pageSize").val(s);
	$("#searchForm").submit();
	$("span.page-size").text(s);
	return false;
}

// 增删改查
var  url1='add-p.html';
var  url2='p-newstage.html';
var  url3='p-newtype.html';
var  url5='p-newtype.html';
var  url6='contract-billing.html';
var  url7='notice.html';
var  url8='contract-bill-add.html';
var  url9='contract-Receivables.html';
var  url10='contract-receive-add.html';
var  url11='contract-bill-add.html';
var  url12='file-Insurance-add.html';
var  url13='file-project-add.html';
var  url14='file-contract-add.html';
var  url15='file-car-add.html';
var  url16='contract-add.html';
var  url17='cost-type-add.html';
var  url18='file-Insurance-add.html';
var  url19='file-certificate-add.html';
var  url20='file-type-add.html';
var  url21='file-renewal.html';
var  url22='cost-apply-add.html';
var  url23='cost-apply-approval.html';
var  url24='cost-account-add.html';
var  url25='file-certificat-chu.html';
var  url26='file-certificat-return.html';
var  url27='file-project-add2.html';
var  url28='cost-apply-add.html';
var  url29='material-receive-type-add.html';
var  url30='material-storage-add.html';
var  url31='material-outgoing-add.html';
var  url32='material-apply.html';

var src='tuijin-p.html';
var src2="tuijin-p2.html";
var src1='tuijin-p1.html';
var src3='tuijin-p3.html';
var src4='tuijin-p4.html';
var src5='tuijin-p5.html';


//新增
	function userAdd(src){
		var target = $('<div></div>').appendTo('body');
		var opt = {
			title: "新增",
			width: 600,
			height: 400,
			modal: true,
			collapsible: false,
			minimizable: false,
			maximizable: true,
			closable: true
		};
		opt.content = "<iframe src="+src+" style='height:100%;width:100%;border:0;display:block;' frameborder='0'></iframe>";

		target.window(opt);
	}
// 修改
function userEdit(src) {
	var dataGrid = $('#user_datagrid');
	var rows = dataGrid.datagrid('getSelections');
	if (rows.length == 1) {
		var target = $('<div></div>').appendTo('body');
		var opt = {
			title: "修改",
			width: 600,
			height: 400,
			modal: true,
			collapsible: false,
			minimizable: false,
			maximizable: true,
			closable: true

		};
        // opt.content = "<iframe src='+src+' style='height:100%;width:100%;border:0;display:block;' frameborder='0'></iframe>";
        //
        // opt.row = rows[0];
        // target.window(opt);
        opt.content = "<iframe src="+src+" style='height:100%;width:100%;border:0;display:block;' frameborder='0'></iframe>";
        opt.row = rows[0];
        target.window(opt);

	}else if (rows.length > 1) {
		sy.messagerAlert('提示', '同一时间只能编辑一条记录！', 'error');
	} else {
		sy.messagerAlert('提示', '请选择要编辑的记录！', 'error');
	}
}

// 阶段推进
function userEdit2(src) {
    var dataGrid = $('#user_datagrid');
    var rows = dataGrid.datagrid('getSelections');
    if (rows.length == 1) {
        var target = $('<div></div>').appendTo('body');
        var opt = {
            title: "阶段推进",
            width: 600,
            height: 400,
            modal: true,
            collapsible: false,
            minimizable: false,
            maximizable: true,
            closable: true

        };
        opt.row = rows[0];
        var sta=opt.row;
        var stage=sta.stage;
        switch (stage){
            case 1:
                src="tuijin-p1.html";
                break;
            case 2:
                src="tuijin-p2.html";
                break;
            case 3:
                src="tuijin-p3.html";
                break;
            case 4:
                src="tuijin-p4.html";
                break;
        }
        opt.content = "<iframe src="+src+" style='height:100%;width:100%;border:0;display:block;' frameborder='0'></iframe>";
        target.window(opt);

    }else if (rows.length > 1) {
        sy.messagerAlert('提示', '同一时间只能编辑一条记录！', 'error');
    } else {
        sy.messagerAlert('提示', '请选择要编辑的记录！', 'error');
    }
}

// 删除
function deleteUser() {
	var dataGrid = $('#user_datagrid');
	var rows = dataGrid.datagrid('getSelections');
	if (rows.length == 1) {
		var id = rows[0].userId;
		parent.$.messager.confirm('询问', '您是否要删除当前用户？', function(b) {
			if (b) {
				var currentUserId = '${sessionInfo.userId}';/*当前登录用户的ID*/
				if (currentUserId != id) {
					parent.$.messager.progress({
						title : '提示',
						text : '数据处理中，请稍后....'
					});
					$.post('${pageContext.request.contextPath}/demo/userAction!delete.action', {
						userId : id
					}, function(result) {
						if (result.success) {
							parent.$.messager.alert('提示', result.msg, 'info');
							dataGrid.datagrid('reload');
						}else{
							parent.$.messager.alert('错误', result.msg, 'error');
						}
						parent.$.messager.progress('close');
					}, 'JSON');
				} else {
					parent.$.messager.show({
						title : '提示',
						msg : '不可以删除自己！'
					});
				}
			}
		});
	}else {
		parent.sy.messagerAlert('提示', '请选择要删除的记录！', 'error');
	}
}

// 归档
function saveproject(src) {
	var dataGrid = $('#user_datagrid');
	var rows = dataGrid.datagrid('getSelections');
	if (rows.length == 1) {
		var id = rows[0].userId;
		parent.$.messager.confirm('询问', '您是否要保存当前项目？', function(b) {
			if (b) {
				var currentUserId = '${sessionInfo.userId}';/*当前登录用户的ID*/
				if (currentUserId != id) {
					parent.$.messager.progress({
						title : '提示',
						text : '数据处理中，请稍后....'
					});
					$.post('${pageContext.request.contextPath}/demo/userAction!delete.action', {
						userId : id
					}, function(result) {
						if (result.success) {
							parent.$.messager.alert('提示', result.msg, 'info');
							dataGrid.datagrid('reload');
						}else{
							parent.$.messager.alert('错误', result.msg, 'error');
						}
						parent.$.messager.progress('close');
					}, 'JSON');
				} else {
					parent.$.messager.show({
						title : '提示',
						msg : '不可以删除自己！'
					});
				}
			}
		});
	}else {
		parent.sy.messagerAlert('提示', '请选择要删除的记录！', 'error');
	}
}


function doSearch() {
	$('#user_datagrid').datagrid('load', sy.serializeObject($('#user_searchForm')));
}

function cleanSearch() {
	$('#user_datagrid').datagrid('load', {});
	$('#user_searchForm input').val('');
}
// 刷新
function refresh(){
	$('#user_datagrid').datagrid('reload');
}

// 对话框样式新建或打开，覆盖在当前页上方

	function openDia(src){
		$('#dlg').dialog({
			title : '新增',
			maximized:true,
			draggable:false,
			border:'thin',
			headerCls:'aaaa',
			href : src,
		});
		console.log(src);
	}


	// 新建页面关闭当前tab
function closetab() {
	//关闭
	parent.$('.page-tabs-content').find('.active i').trigger("click");
	//打开
	parent.$.learuntab.addTab2("31","../project/projectList.action","项目列表");
}