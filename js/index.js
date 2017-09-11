/*
* @Author: Thinkpad
* @Date:   2017-09-09 15:13:01
* @Last Modified by:   Thinkpad
* @Last Modified time: 2017-09-11 18:10:12
*/
/*
映射
 */
function map(arr,fn){
			var newarr = [];
			for (var i=0;i<arr.length;i++){
				newarr[newarr.length]=fn(arr[i]);
			}
			return newarr;
		}
/*
筛选
 */
function flite(arr,fn){
			var newarr=[];
			for(var i=0;i<arr.length;i++){
				if(fn(arr[i])){
				newarr[newarr.length]=arr[i];
				}
			}
			return newarr;
		}
/*
首次出现的位置
 */
function str(arr,num){
			for(i=0;i<arr.length;i++){
				if(arr[i]==num){
					return i;
				}	
			}
			return -1;
		}
/*
最后出现的位置
 */
function laststr(arr,num){
			for(var i=arr.length-1;i>=0;i--){
				if(arr[i]==num){
					return i;
				}
			}
			return -1;
		}
/*
翻转
 */
function reverse(arr){
			var newarr=[];
			for(var i=arr.length-1;i>=0;i--){
				push(newarr,arr[i])
			}
			return newarr;
		}
		function push(arr,...rest){
			for(var i=0;i<rest.length;i++){
				arr[arr.length]=rest[i];
			}
		}
/*
		在任意位置删除
		万能的删除
		 */	
function str1(arr,pos,num){
			var newarr=[];
			for(i=0;i<arr.length;i++){
				if(i>=pos && i<pos+num){
					continue;
				}
				newarr[newarr.length]=arr[i];
			}
			return newarr;
		}
/*
万能的添加
 */
function str2(arr,pos,...rest){
			var newarr=[];
			for(i=0;i<pos;i++){
				newarr[newarr.length]=arr[i];
			}
			for(i=0;i<rest.length;i++){
				newarr[newarr.length]=rest[i];
			}
			for(i=pos;i<arr.length;i++){
				newarr[newarr.length]=arr[i];
			}
			return newarr;
		}
/*
万能添加或者删除
 */
function str(arr,pos,num,...rest){
			var newarr=str1(arr,pos,num)
			if(rest.length>0){
				newarr=str2(newarr,pos,...rest);
			}
			return newarr;
		}