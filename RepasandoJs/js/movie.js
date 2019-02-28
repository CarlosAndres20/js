var movies=[' capitan Libertad',' capitan America',' Superman',' Flash'];
var category=new Array();
 category[0]='Terror';
 category[1]='Drama';
 category[2]='Comedia';
 category[3]='Accion';
 category[4]='ficcion';
var space='                     '; 
var cine=[category,movies];
document.write('<table>');
document.write('<tr>');
document.write('<th> '+cine[0][4]+':'+cine[1][0]+'</th>'+'<td>'+'xxxxxxxxxxxxx'+'</td>'+
                '<th>'+cine[0][1]+':xxxxxxxxxxxxx'+'</th>'+'<td>'+'xxxxxxxxxxxxx'+'</td>'+
                '<th>'+cine[0][2]+':xxxxxxxxxxxxx'+'</th>'+'<td>'+'xxxxxxxxxxxxx'+'</td>'+
                '<th> '+cine[0][3]+':'+cine[1][0]+'</th>')
document.write('</tr>');
document.write('<tr>');
document.write('<th> '+cine[0][4]+':'+cine[1][1]+'</th>'+'<td>'+'xxxxxxxxxxxxx'+'</td>'+
                '<th>'+cine[0][1]+':xxxxxxxxxxxxx'+'</th>'+'<td>'+'xxxxxxxxxxxxx'+'</td>'+
                '<th>'+cine[0][2]+':xxxxxxxxxxxxx'+'</th>'+'<td>'+'xxxxxxxxxxxxx'+'</td>'+
                '<th> '+cine[0][3]+':'+cine[1][1]+'</th>')
document.write('</tr>');
document.write('<tr>');
document.write('<th> '+cine[0][4]+':'+cine[1][2]+'</th>'+'<td>'+'xxxxxxxxxxxxx'+'</td>'+
                '<th>'+cine[0][1]+':xxxxxxxxxxxxx'+'</th>'+'<td>'+'xxxxxxxxxxxxx'+'</td>'+
                '<th>'+cine[0][2]+':xxxxxxxxxxxxx'+'</th>'+'<td>'+'xxxxxxxxxxxxx'+'</td>'+
                '<th> '+cine[0][3]+':'+cine[1][2]+'</th>')
document.write('</tr>');
document.write('<tr>');
document.write('<th> '+cine[0][4]+':'+cine[1][3]+'</th>'+'<td>'+'xxxxxxxxxxxxx'+'</td>'+
                '<th>'+cine[0][1]+':xxxxxxxxxxxxx'+'</th>'+'<td>'+'xxxxxxxxxxxxx'+'</td>'+
                '<th>'+cine[0][2]+':xxxxxxxxxxxxx'+'</th>'+'<td>'+'xxxxxxxxxxxxx'+'</td>'+
                '<th> '+cine[0][3]+':'+cine[1][3]+'</th>')
document.write('</tr>');    
document.write('</table>');
