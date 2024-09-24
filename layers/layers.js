var wms_layers = [];

var format_Kecamatan_0 = new ol.format.GeoJSON();
var features_Kecamatan_0 = format_Kecamatan_0.readFeatures(json_Kecamatan_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Kecamatan_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Kecamatan_0.addFeatures(features_Kecamatan_0);
var lyr_Kecamatan_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Kecamatan_0, 
                style: style_Kecamatan_0,
                popuplayertitle: "Kecamatan",
                interactive: true,
    title: 'Kecamatan<br />\
    <img src="styles/legend/Kecamatan_0_0.png" /> Hirarki I<br />\
    <img src="styles/legend/Kecamatan_0_1.png" /> Hirarki II<br />\
    <img src="styles/legend/Kecamatan_0_2.png" /> Hirarki III<br />\
    <img src="styles/legend/Kecamatan_0_3.png" /> <br />'
        });
var format_JALAN_LN_25K_1 = new ol.format.GeoJSON();
var features_JALAN_LN_25K_1 = format_JALAN_LN_25K_1.readFeatures(json_JALAN_LN_25K_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JALAN_LN_25K_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JALAN_LN_25K_1.addFeatures(features_JALAN_LN_25K_1);
var lyr_JALAN_LN_25K_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JALAN_LN_25K_1, 
                style: style_JALAN_LN_25K_1,
                popuplayertitle: "JALAN_LN_25K",
                interactive: false,
                    title: '<img src="styles/legend/JALAN_LN_25K_1.png" /> JALAN_LN_25K'
                });
var format_NA_Pendidikan_2 = new ol.format.GeoJSON();
var features_NA_Pendidikan_2 = format_NA_Pendidikan_2.readFeatures(json_NA_Pendidikan_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_NA_Pendidikan_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NA_Pendidikan_2.addFeatures(features_NA_Pendidikan_2);
var lyr_NA_Pendidikan_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_NA_Pendidikan_2, 
                style: style_NA_Pendidikan_2,
                popuplayertitle: "NA_Pendidikan",
                interactive: false,
                    title: '<img src="styles/legend/NA_Pendidikan_2.png" /> NA_Pendidikan'
                });
var format_NA_Kesehatan_3 = new ol.format.GeoJSON();
var features_NA_Kesehatan_3 = format_NA_Kesehatan_3.readFeatures(json_NA_Kesehatan_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_NA_Kesehatan_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NA_Kesehatan_3.addFeatures(features_NA_Kesehatan_3);
var lyr_NA_Kesehatan_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_NA_Kesehatan_3, 
                style: style_NA_Kesehatan_3,
                popuplayertitle: "NA_Kesehatan",
                interactive: false,
                    title: '<img src="styles/legend/NA_Kesehatan_3.png" /> NA_Kesehatan'
                });
var format_Fasilitas_Pendidikan_4 = new ol.format.GeoJSON();
var features_Fasilitas_Pendidikan_4 = format_Fasilitas_Pendidikan_4.readFeatures(json_Fasilitas_Pendidikan_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Fasilitas_Pendidikan_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Fasilitas_Pendidikan_4.addFeatures(features_Fasilitas_Pendidikan_4);
var lyr_Fasilitas_Pendidikan_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Fasilitas_Pendidikan_4, 
                style: style_Fasilitas_Pendidikan_4,
                popuplayertitle: "Fasilitas_Pendidikan",
                interactive: false,
                title: '<img style="max-width:16px; max-height:16px;" src="styles/background_square_rounded.svg" /> Fasilitas_Pendidikan'
            });
var format_Fasilitas_Kesehatan_5 = new ol.format.GeoJSON();
var features_Fasilitas_Kesehatan_5 = format_Fasilitas_Kesehatan_5.readFeatures(json_Fasilitas_Kesehatan_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Fasilitas_Kesehatan_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Fasilitas_Kesehatan_5.addFeatures(features_Fasilitas_Kesehatan_5);
var lyr_Fasilitas_Kesehatan_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Fasilitas_Kesehatan_5, 
                style: style_Fasilitas_Kesehatan_5,
                popuplayertitle: "Fasilitas_Kesehatan",
                interactive: false,
                    title: '<img src="styles/legend/Fasilitas_Kesehatan_5.png" /> Fasilitas_Kesehatan'
                });
var format_Centroids_Kecamatan_6 = new ol.format.GeoJSON();
var features_Centroids_Kecamatan_6 = format_Centroids_Kecamatan_6.readFeatures(json_Centroids_Kecamatan_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Centroids_Kecamatan_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Centroids_Kecamatan_6.addFeatures(features_Centroids_Kecamatan_6);
var lyr_Centroids_Kecamatan_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Centroids_Kecamatan_6, 
                style: style_Centroids_Kecamatan_6,
                popuplayertitle: "Centroids_Kecamatan",
                interactive: false,
                title: '<img style="max-width:16px; max-height:16px;" src="styles/blue-marker.svg" /> Centroids_Kecamatan'
            });
var group_Kesehatan = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "Kesehatan"});
var group_Pendidikan = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "Pendidikan"});

lyr_Kecamatan_0.setVisible(true);lyr_JALAN_LN_25K_1.setVisible(true);lyr_NA_Pendidikan_2.setVisible(true);lyr_NA_Kesehatan_3.setVisible(true);lyr_Fasilitas_Pendidikan_4.setVisible(true);lyr_Fasilitas_Kesehatan_5.setVisible(true);lyr_Centroids_Kecamatan_6.setVisible(true);
var layersList = [lyr_Kecamatan_0,lyr_JALAN_LN_25K_1,lyr_NA_Pendidikan_2,lyr_NA_Kesehatan_3,lyr_Fasilitas_Pendidikan_4,lyr_Fasilitas_Kesehatan_5,lyr_Centroids_Kecamatan_6];
lyr_Kecamatan_0.set('fieldAliases', {'WADMKC': 'WADMKC', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', 'Jumlah pen': 'Jumlah pen', 'Jarak Fasi': 'Jarak Fasi', 'Jarak Fa_1': 'Jarak Fa_1', 'Jumlah SD': 'Jumlah SD', 'Jumlah SMP': 'Jumlah SMP', 'Jumlah SMA': 'Jumlah SMA', 'Jumlah Rum': 'Jumlah Rum', 'Jumlah R_1': 'Jumlah R_1', 'Jumlah R_2': 'Jumlah R_2', 'Jumlah pus': 'Jumlah pus', 'Jumlah Kli': 'Jumlah Kli', 'Jumlah Pos': 'Jumlah Pos', 'IPD': 'IPD', 'Jumlah Jen': 'Jumlah Jen', 'Hierarki': 'Hierarki', });
lyr_JALAN_LN_25K_1.set('fieldAliases', {'NAMRJL': 'NAMRJL', 'KONRJL': 'KONRJL', 'MATRJL': 'MATRJL', 'FGSRJL': 'FGSRJL', 'UTKRJL': 'UTKRJL', 'TOLRJL': 'TOLRJL', 'WLYRJL': 'WLYRJL', 'AUTRJL': 'AUTRJL', 'KLSRJL': 'KLSRJL', 'SPCRJL': 'SPCRJL', 'JPARJL': 'JPARJL', 'ARHRJL': 'ARHRJL', 'STARJL': 'STARJL', 'KLLRJL': 'KLLRJL', 'MEDRJL': 'MEDRJL', 'LOCRJL': 'LOCRJL', 'JARRJL': 'JARRJL', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'SHAPE_Leng': 'SHAPE_Leng', });
lyr_NA_Pendidikan_2.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'LUAS': 'LUAS', 'KATPDK': 'KATPDK', 'JLPDDK': 'JLPDDK', 'FGGPDK': 'FGGPDK', 'REMARK': 'REMARK', 'FCODE': 'FCODE', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'JJGPDF': 'JJGPDF', 'JNSPDL': 'JNSPDL', 'WADMKC': 'WADMKC', 'start': 'start', 'end': 'end', 'cost': 'cost', 'layer': 'layer', 'path': 'path', 'Jarak': 'Jarak', });
lyr_NA_Kesehatan_3.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'LUAS': 'LUAS', 'REMARK': 'REMARK', 'TIPSHT': 'TIPSHT', 'FCODE': 'FCODE', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'FSKADD': 'FSKADD', 'WADMKC': 'WADMKC', 'start': 'start', 'end': 'end', 'cost': 'cost', 'layer': 'layer', 'path': 'path', 'Jarak': 'Jarak', });
lyr_Fasilitas_Pendidikan_4.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'LUAS': 'LUAS', 'KATPDK': 'KATPDK', 'JLPDDK': 'JLPDDK', 'FGGPDK': 'FGGPDK', 'REMARK': 'REMARK', 'FCODE': 'FCODE', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'JJGPDF': 'JJGPDF', 'JNSPDL': 'JNSPDL', 'WADMKC': 'WADMKC', });
lyr_Fasilitas_Kesehatan_5.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'LUAS': 'LUAS', 'REMARK': 'REMARK', 'TIPSHT': 'TIPSHT', 'FCODE': 'FCODE', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'FSKADD': 'FSKADD', 'WADMKC': 'WADMKC', });
lyr_Centroids_Kecamatan_6.set('fieldAliases', {'KDPPUM': 'KDPPUM', 'NAMOBJ': 'NAMOBJ', 'REMARK': 'REMARK', 'KDPBPS': 'KDPBPS', 'FCODE': 'FCODE', 'LUASWH': 'LUASWH', 'UUPP': 'UUPP', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'KDEBPS': 'KDEBPS', 'KDEPUM': 'KDEPUM', 'KDCBPS': 'KDCBPS', 'KDCPUM': 'KDCPUM', 'KDBBPS': 'KDBBPS', 'KDBPUM': 'KDBPUM', 'WADMKD': 'WADMKD', 'WIADKD': 'WIADKD', 'WADMKC': 'WADMKC', 'WIADKC': 'WIADKC', 'WADMKK': 'WADMKK', 'WIADKK': 'WIADKK', 'WADMPR': 'WADMPR', 'WIADPR': 'WIADPR', 'TIPADM': 'TIPADM', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_Kecamatan_0.set('fieldImages', {'WADMKC': 'TextEdit', 'WADMKK': 'TextEdit', 'WADMPR': 'TextEdit', 'Jumlah pen': 'TextEdit', 'Jarak Fasi': 'TextEdit', 'Jarak Fa_1': 'TextEdit', 'Jumlah SD': 'TextEdit', 'Jumlah SMP': 'TextEdit', 'Jumlah SMA': 'TextEdit', 'Jumlah Rum': 'TextEdit', 'Jumlah R_1': 'TextEdit', 'Jumlah R_2': 'TextEdit', 'Jumlah pus': 'TextEdit', 'Jumlah Kli': 'TextEdit', 'Jumlah Pos': 'TextEdit', 'IPD': 'TextEdit', 'Jumlah Jen': 'TextEdit', 'Hierarki': 'TextEdit', });
lyr_JALAN_LN_25K_1.set('fieldImages', {'NAMRJL': 'TextEdit', 'KONRJL': 'TextEdit', 'MATRJL': 'TextEdit', 'FGSRJL': 'TextEdit', 'UTKRJL': 'TextEdit', 'TOLRJL': 'TextEdit', 'WLYRJL': 'TextEdit', 'AUTRJL': 'TextEdit', 'KLSRJL': 'TextEdit', 'SPCRJL': 'TextEdit', 'JPARJL': 'TextEdit', 'ARHRJL': 'TextEdit', 'STARJL': 'TextEdit', 'KLLRJL': 'TextEdit', 'MEDRJL': 'TextEdit', 'LOCRJL': 'TextEdit', 'JARRJL': 'TextEdit', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'SHAPE_Leng': 'TextEdit', });
lyr_NA_Pendidikan_2.set('fieldImages', {'NAMOBJ': 'TextEdit', 'LUAS': 'TextEdit', 'KATPDK': 'TextEdit', 'JLPDDK': 'TextEdit', 'FGGPDK': 'TextEdit', 'REMARK': 'TextEdit', 'FCODE': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'JJGPDF': 'TextEdit', 'JNSPDL': 'TextEdit', 'WADMKC': 'TextEdit', 'start': 'TextEdit', 'end': 'TextEdit', 'cost': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', 'Jarak': 'TextEdit', });
lyr_NA_Kesehatan_3.set('fieldImages', {'NAMOBJ': 'TextEdit', 'LUAS': 'TextEdit', 'REMARK': 'TextEdit', 'TIPSHT': 'TextEdit', 'FCODE': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'FSKADD': 'TextEdit', 'WADMKC': 'TextEdit', 'start': 'TextEdit', 'end': 'TextEdit', 'cost': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', 'Jarak': 'TextEdit', });
lyr_Fasilitas_Pendidikan_4.set('fieldImages', {'NAMOBJ': 'TextEdit', 'LUAS': 'TextEdit', 'KATPDK': 'TextEdit', 'JLPDDK': 'TextEdit', 'FGGPDK': 'TextEdit', 'REMARK': 'TextEdit', 'FCODE': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'JJGPDF': 'TextEdit', 'JNSPDL': 'TextEdit', 'WADMKC': 'TextEdit', });
lyr_Fasilitas_Kesehatan_5.set('fieldImages', {'NAMOBJ': 'TextEdit', 'LUAS': 'TextEdit', 'REMARK': 'TextEdit', 'TIPSHT': 'TextEdit', 'FCODE': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'FSKADD': 'TextEdit', 'WADMKC': 'TextEdit', });
lyr_Centroids_Kecamatan_6.set('fieldImages', {'KDPPUM': 'TextEdit', 'NAMOBJ': 'TextEdit', 'REMARK': 'TextEdit', 'KDPBPS': 'TextEdit', 'FCODE': 'TextEdit', 'LUASWH': 'TextEdit', 'UUPP': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'KDEBPS': 'TextEdit', 'KDEPUM': 'TextEdit', 'KDCBPS': 'TextEdit', 'KDCPUM': 'TextEdit', 'KDBBPS': 'TextEdit', 'KDBPUM': 'TextEdit', 'WADMKD': 'TextEdit', 'WIADKD': 'TextEdit', 'WADMKC': 'TextEdit', 'WIADKC': 'TextEdit', 'WADMKK': 'TextEdit', 'WIADKK': 'TextEdit', 'WADMPR': 'TextEdit', 'WIADPR': 'TextEdit', 'TIPADM': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_Kecamatan_0.set('fieldLabels', {'WADMKC': 'inline label - always visible', 'WADMKK': 'inline label - visible with data', 'WADMPR': 'inline label - visible with data', 'Jumlah pen': 'inline label - visible with data', 'Jarak Fasi': 'inline label - visible with data', 'Jarak Fa_1': 'inline label - visible with data', 'Jumlah SD': 'inline label - visible with data', 'Jumlah SMP': 'inline label - visible with data', 'Jumlah SMA': 'inline label - visible with data', 'Jumlah Rum': 'inline label - visible with data', 'Jumlah R_1': 'inline label - visible with data', 'Jumlah R_2': 'inline label - visible with data', 'Jumlah pus': 'inline label - visible with data', 'Jumlah Kli': 'inline label - visible with data', 'Jumlah Pos': 'inline label - visible with data', 'IPD': 'inline label - visible with data', 'Jumlah Jen': 'inline label - visible with data', 'Hierarki': 'inline label - visible with data', });
lyr_JALAN_LN_25K_1.set('fieldLabels', {'NAMRJL': 'no label', 'KONRJL': 'no label', 'MATRJL': 'no label', 'FGSRJL': 'no label', 'UTKRJL': 'no label', 'TOLRJL': 'no label', 'WLYRJL': 'no label', 'AUTRJL': 'no label', 'KLSRJL': 'no label', 'SPCRJL': 'no label', 'JPARJL': 'no label', 'ARHRJL': 'no label', 'STARJL': 'no label', 'KLLRJL': 'no label', 'MEDRJL': 'no label', 'LOCRJL': 'no label', 'JARRJL': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'SHAPE_Leng': 'no label', });
lyr_NA_Pendidikan_2.set('fieldLabels', {'NAMOBJ': 'no label', 'LUAS': 'no label', 'KATPDK': 'no label', 'JLPDDK': 'no label', 'FGGPDK': 'no label', 'REMARK': 'no label', 'FCODE': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'JJGPDF': 'no label', 'JNSPDL': 'no label', 'WADMKC': 'no label', 'start': 'no label', 'end': 'no label', 'cost': 'no label', 'layer': 'no label', 'path': 'no label', 'Jarak': 'no label', });
lyr_NA_Kesehatan_3.set('fieldLabels', {'NAMOBJ': 'no label', 'LUAS': 'no label', 'REMARK': 'no label', 'TIPSHT': 'no label', 'FCODE': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'FSKADD': 'no label', 'WADMKC': 'no label', 'start': 'no label', 'end': 'no label', 'cost': 'no label', 'layer': 'no label', 'path': 'no label', 'Jarak': 'no label', });
lyr_Fasilitas_Pendidikan_4.set('fieldLabels', {'NAMOBJ': 'no label', 'LUAS': 'no label', 'KATPDK': 'no label', 'JLPDDK': 'no label', 'FGGPDK': 'no label', 'REMARK': 'no label', 'FCODE': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'JJGPDF': 'no label', 'JNSPDL': 'no label', 'WADMKC': 'no label', });
lyr_Fasilitas_Kesehatan_5.set('fieldLabels', {'NAMOBJ': 'no label', 'LUAS': 'no label', 'REMARK': 'no label', 'TIPSHT': 'no label', 'FCODE': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'FSKADD': 'no label', 'WADMKC': 'no label', });
lyr_Centroids_Kecamatan_6.set('fieldLabels', {'KDPPUM': 'no label', 'NAMOBJ': 'no label', 'REMARK': 'no label', 'KDPBPS': 'no label', 'FCODE': 'no label', 'LUASWH': 'no label', 'UUPP': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'KDEBPS': 'no label', 'KDEPUM': 'no label', 'KDCBPS': 'no label', 'KDCPUM': 'no label', 'KDBBPS': 'no label', 'KDBPUM': 'no label', 'WADMKD': 'no label', 'WIADKD': 'no label', 'WADMKC': 'no label', 'WIADKC': 'no label', 'WADMKK': 'no label', 'WIADKK': 'no label', 'WADMPR': 'no label', 'WIADPR': 'no label', 'TIPADM': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_Centroids_Kecamatan_6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});