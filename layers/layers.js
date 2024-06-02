ol.proj.proj4.register(proj4);
ol.proj.get("EPSG:9518").setExtent([104.636600, -3.067604, 104.863566, -2.888726]);
var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_ADMINISTRASIKECAMATAN_AR_50K_1 = new ol.format.GeoJSON();
var features_ADMINISTRASIKECAMATAN_AR_50K_1 = format_ADMINISTRASIKECAMATAN_AR_50K_1.readFeatures(json_ADMINISTRASIKECAMATAN_AR_50K_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:9518'});
var jsonSource_ADMINISTRASIKECAMATAN_AR_50K_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ADMINISTRASIKECAMATAN_AR_50K_1.addFeatures(features_ADMINISTRASIKECAMATAN_AR_50K_1);
var lyr_ADMINISTRASIKECAMATAN_AR_50K_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ADMINISTRASIKECAMATAN_AR_50K_1, 
                style: style_ADMINISTRASIKECAMATAN_AR_50K_1,
                interactive: true,
                title: '<img src="styles/legend/ADMINISTRASIKECAMATAN_AR_50K_1.png" /> ADMINISTRASIKECAMATAN_AR_50K'
            });
var format_AGRISAWAH_AR_50K_2 = new ol.format.GeoJSON();
var features_AGRISAWAH_AR_50K_2 = format_AGRISAWAH_AR_50K_2.readFeatures(json_AGRISAWAH_AR_50K_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:9518'});
var jsonSource_AGRISAWAH_AR_50K_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AGRISAWAH_AR_50K_2.addFeatures(features_AGRISAWAH_AR_50K_2);
var lyr_AGRISAWAH_AR_50K_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_AGRISAWAH_AR_50K_2, 
                style: style_AGRISAWAH_AR_50K_2,
                interactive: true,
                title: '<img src="styles/legend/AGRISAWAH_AR_50K_2.png" /> AGRISAWAH_AR_50K'
            });
var format_PEMUKIMAN_AR_50K_3 = new ol.format.GeoJSON();
var features_PEMUKIMAN_AR_50K_3 = format_PEMUKIMAN_AR_50K_3.readFeatures(json_PEMUKIMAN_AR_50K_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:9518'});
var jsonSource_PEMUKIMAN_AR_50K_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PEMUKIMAN_AR_50K_3.addFeatures(features_PEMUKIMAN_AR_50K_3);
var lyr_PEMUKIMAN_AR_50K_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PEMUKIMAN_AR_50K_3, 
                style: style_PEMUKIMAN_AR_50K_3,
                interactive: true,
                title: '<img src="styles/legend/PEMUKIMAN_AR_50K_3.png" /> PEMUKIMAN_AR_50K'
            });
var format_DANAU_AR_50K_4 = new ol.format.GeoJSON();
var features_DANAU_AR_50K_4 = format_DANAU_AR_50K_4.readFeatures(json_DANAU_AR_50K_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:9518'});
var jsonSource_DANAU_AR_50K_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DANAU_AR_50K_4.addFeatures(features_DANAU_AR_50K_4);
var lyr_DANAU_AR_50K_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_DANAU_AR_50K_4, 
                style: style_DANAU_AR_50K_4,
                interactive: true,
                title: '<img src="styles/legend/DANAU_AR_50K_4.png" /> DANAU_AR_50K'
            });
var format_JALAN_LN_50K_5 = new ol.format.GeoJSON();
var features_JALAN_LN_50K_5 = format_JALAN_LN_50K_5.readFeatures(json_JALAN_LN_50K_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:9518'});
var jsonSource_JALAN_LN_50K_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JALAN_LN_50K_5.addFeatures(features_JALAN_LN_50K_5);
var lyr_JALAN_LN_50K_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_JALAN_LN_50K_5, 
                style: style_JALAN_LN_50K_5,
                interactive: true,
    title: 'JALAN_LN_50K<br />\
    <img src="styles/legend/JALAN_LN_50K_5_0.png" /> Jalan Arteri<br />\
    <img src="styles/legend/JALAN_LN_50K_5_1.png" /> Jalan Kolektor<br />\
    <img src="styles/legend/JALAN_LN_50K_5_2.png" /> Jalan Lokal<br />'
        });
var format_SUNGAI_LN_50K_6 = new ol.format.GeoJSON();
var features_SUNGAI_LN_50K_6 = format_SUNGAI_LN_50K_6.readFeatures(json_SUNGAI_LN_50K_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:9518'});
var jsonSource_SUNGAI_LN_50K_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SUNGAI_LN_50K_6.addFeatures(features_SUNGAI_LN_50K_6);
var lyr_SUNGAI_LN_50K_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SUNGAI_LN_50K_6, 
                style: style_SUNGAI_LN_50K_6,
                interactive: true,
                title: '<img src="styles/legend/SUNGAI_LN_50K_6.png" /> SUNGAI_LN_50K'
            });
var format_PENDIDIKAN_PT_50K_7 = new ol.format.GeoJSON();
var features_PENDIDIKAN_PT_50K_7 = format_PENDIDIKAN_PT_50K_7.readFeatures(json_PENDIDIKAN_PT_50K_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:9518'});
var jsonSource_PENDIDIKAN_PT_50K_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PENDIDIKAN_PT_50K_7.addFeatures(features_PENDIDIKAN_PT_50K_7);
var lyr_PENDIDIKAN_PT_50K_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PENDIDIKAN_PT_50K_7, 
                style: style_PENDIDIKAN_PT_50K_7,
                interactive: true,
                title: '<img src="styles/legend/PENDIDIKAN_PT_50K_7.png" /> PENDIDIKAN_PT_50K'
            });
var format_LAYANANKESEHATAN_PT_50K_8 = new ol.format.GeoJSON();
var features_LAYANANKESEHATAN_PT_50K_8 = format_LAYANANKESEHATAN_PT_50K_8.readFeatures(json_LAYANANKESEHATAN_PT_50K_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:9518'});
var jsonSource_LAYANANKESEHATAN_PT_50K_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LAYANANKESEHATAN_PT_50K_8.addFeatures(features_LAYANANKESEHATAN_PT_50K_8);
var lyr_LAYANANKESEHATAN_PT_50K_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_LAYANANKESEHATAN_PT_50K_8, 
                style: style_LAYANANKESEHATAN_PT_50K_8,
                interactive: true,
                title: '<img src="styles/legend/LAYANANKESEHATAN_PT_50K_8.png" /> LAYANANKESEHATAN_PT_50K'
            });
var format_PEMERINTAHAN_PT_50K_9 = new ol.format.GeoJSON();
var features_PEMERINTAHAN_PT_50K_9 = format_PEMERINTAHAN_PT_50K_9.readFeatures(json_PEMERINTAHAN_PT_50K_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:9518'});
var jsonSource_PEMERINTAHAN_PT_50K_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PEMERINTAHAN_PT_50K_9.addFeatures(features_PEMERINTAHAN_PT_50K_9);
var lyr_PEMERINTAHAN_PT_50K_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PEMERINTAHAN_PT_50K_9, 
                style: style_PEMERINTAHAN_PT_50K_9,
                interactive: true,
                title: '<img src="styles/legend/PEMERINTAHAN_PT_50K_9.png" /> PEMERINTAHAN_PT_50K'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_ADMINISTRASIKECAMATAN_AR_50K_1.setVisible(true);lyr_AGRISAWAH_AR_50K_2.setVisible(true);lyr_PEMUKIMAN_AR_50K_3.setVisible(true);lyr_DANAU_AR_50K_4.setVisible(true);lyr_JALAN_LN_50K_5.setVisible(true);lyr_SUNGAI_LN_50K_6.setVisible(true);lyr_PENDIDIKAN_PT_50K_7.setVisible(true);lyr_LAYANANKESEHATAN_PT_50K_8.setVisible(true);lyr_PEMERINTAHAN_PT_50K_9.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_ADMINISTRASIKECAMATAN_AR_50K_1,lyr_AGRISAWAH_AR_50K_2,lyr_PEMUKIMAN_AR_50K_3,lyr_DANAU_AR_50K_4,lyr_JALAN_LN_50K_5,lyr_SUNGAI_LN_50K_6,lyr_PENDIDIKAN_PT_50K_7,lyr_LAYANANKESEHATAN_PT_50K_8,lyr_PEMERINTAHAN_PT_50K_9];
lyr_ADMINISTRASIKECAMATAN_AR_50K_1.set('fieldAliases', {'KDPPUM': 'KDPPUM', 'NAMOBJ': 'NAMOBJ', 'REMARK': 'REMARK', 'KDPBPS': 'KDPBPS', 'FCODE': 'FCODE', 'LUASWH': 'LUASWH', 'UUPP': 'UUPP', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'KDEBPS': 'KDEBPS', 'KDEPUM': 'KDEPUM', 'KDCBPS': 'KDCBPS', 'KDCPUM': 'KDCPUM', 'KDBBPS': 'KDBBPS', 'KDBPUM': 'KDBPUM', 'WADMKD': 'WADMKD', 'WIADKD': 'WIADKD', 'WADMKC': 'WADMKC', 'WIADKC': 'WIADKC', 'WADMKK': 'WADMKK', 'WIADKK': 'WIADKK', 'WADMPR': 'WADMPR', 'WIADPR': 'WIADPR', 'TIPADM': 'TIPADM', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_AGRISAWAH_AR_50K_2.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'JNSSWH': 'JNSSWH', 'FCODE': 'FCODE', 'AQDATE': 'AQDATE', 'PUDATE': 'PUDATE', 'REMARK': 'REMARK', 'KODLCO': 'KODLCO', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'TNMSWH': 'TNMSWH', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_PEMUKIMAN_AR_50K_3.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_DANAU_AR_50K_4.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'OTODAN': 'OTODAN', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'KODLCO': 'KODLCO', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'VOLTAP': 'VOLTAP', 'DTA': 'DTA', 'SEDIMN': 'SEDIMN', 'VLCSDN': 'VLCSDN', 'QUAAR': 'QUAAR', 'CRH': 'CRH', 'KPTS': 'KPTS', 'NAMWS': 'NAMWS', 'NAMDAS': 'NAMDAS', 'LOKASI': 'LOKASI', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_JALAN_LN_50K_5.set('fieldAliases', {'NAMRJL': 'NAMRJL', 'KONRJL': 'KONRJL', 'MATRJL': 'MATRJL', 'FGSRJL': 'FGSRJL', 'UTKRJL': 'UTKRJL', 'TOLRJL': 'TOLRJL', 'WLYRJL': 'WLYRJL', 'AUTRJL': 'AUTRJL', 'KLSRJL': 'KLSRJL', 'SPCRJL': 'SPCRJL', 'JPARJL': 'JPARJL', 'ARHRJL': 'ARHRJL', 'STARJL': 'STARJL', 'KLLRJL': 'KLLRJL', 'MEDRJL': 'MEDRJL', 'LOCRJL': 'LOCRJL', 'JARRJL': 'JARRJL', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'SHAPE_Leng': 'SHAPE_Leng', });
lyr_SUNGAI_LN_50K_6.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'TIPSNG': 'TIPSNG', 'KLSSNG': 'KLSSNG', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'NAMWS': 'NAMWS', 'NAMDAS': 'NAMDAS', 'STATUS': 'STATUS', 'WMAX': 'WMAX', 'DBTMAX': 'DBTMAX', 'SLPRT': 'SLPRT', 'SHAPE_Leng': 'SHAPE_Leng', });
lyr_PENDIDIKAN_PT_50K_7.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'LUAS': 'LUAS', 'KATPDK': 'KATPDK', 'JLPDDK': 'JLPDDK', 'FGGPDK': 'FGGPDK', 'REMARK': 'REMARK', 'FCODE': 'FCODE', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'JJGPDF': 'JJGPDF', 'JNSPDL': 'JNSPDL', });
lyr_LAYANANKESEHATAN_PT_50K_8.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'LCODE': 'LCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'METADATA': 'METADATA', 'LKALMT': 'LKALMT', 'TPLYST': 'TPLYST', });
lyr_PEMERINTAHAN_PT_50K_9.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'FGSGOV': 'FGSGOV', 'LUAS': 'LUAS', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', });
lyr_ADMINISTRASIKECAMATAN_AR_50K_1.set('fieldImages', {'KDPPUM': 'TextEdit', 'NAMOBJ': 'TextEdit', 'REMARK': 'TextEdit', 'KDPBPS': 'TextEdit', 'FCODE': 'TextEdit', 'LUASWH': 'TextEdit', 'UUPP': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'KDEBPS': 'TextEdit', 'KDEPUM': 'TextEdit', 'KDCBPS': 'TextEdit', 'KDCPUM': 'TextEdit', 'KDBBPS': 'TextEdit', 'KDBPUM': 'TextEdit', 'WADMKD': 'TextEdit', 'WIADKD': 'TextEdit', 'WADMKC': 'TextEdit', 'WIADKC': 'TextEdit', 'WADMKK': 'TextEdit', 'WIADKK': 'TextEdit', 'WADMPR': 'TextEdit', 'WIADPR': 'TextEdit', 'TIPADM': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_AGRISAWAH_AR_50K_2.set('fieldImages', {'NAMOBJ': 'TextEdit', 'JNSSWH': 'TextEdit', 'FCODE': 'TextEdit', 'AQDATE': 'DateTime', 'PUDATE': 'DateTime', 'REMARK': 'TextEdit', 'KODLCO': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'TNMSWH': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_PEMUKIMAN_AR_50K_3.set('fieldImages', {'NAMOBJ': 'TextEdit', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_DANAU_AR_50K_4.set('fieldImages', {'NAMOBJ': 'TextEdit', 'OTODAN': 'TextEdit', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'KODLCO': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'VOLTAP': 'TextEdit', 'DTA': 'TextEdit', 'SEDIMN': 'TextEdit', 'VLCSDN': 'TextEdit', 'QUAAR': 'TextEdit', 'CRH': 'TextEdit', 'KPTS': 'TextEdit', 'NAMWS': 'TextEdit', 'NAMDAS': 'TextEdit', 'LOKASI': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_JALAN_LN_50K_5.set('fieldImages', {'NAMRJL': 'TextEdit', 'KONRJL': 'TextEdit', 'MATRJL': 'TextEdit', 'FGSRJL': 'TextEdit', 'UTKRJL': 'TextEdit', 'TOLRJL': 'TextEdit', 'WLYRJL': 'TextEdit', 'AUTRJL': 'TextEdit', 'KLSRJL': 'TextEdit', 'SPCRJL': 'TextEdit', 'JPARJL': 'TextEdit', 'ARHRJL': 'TextEdit', 'STARJL': 'TextEdit', 'KLLRJL': 'TextEdit', 'MEDRJL': 'TextEdit', 'LOCRJL': 'TextEdit', 'JARRJL': 'TextEdit', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'SHAPE_Leng': 'TextEdit', });
lyr_SUNGAI_LN_50K_6.set('fieldImages', {'NAMOBJ': 'TextEdit', 'TIPSNG': 'TextEdit', 'KLSSNG': 'TextEdit', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'NAMWS': 'TextEdit', 'NAMDAS': 'TextEdit', 'STATUS': 'TextEdit', 'WMAX': 'TextEdit', 'DBTMAX': 'TextEdit', 'SLPRT': 'TextEdit', 'SHAPE_Leng': 'TextEdit', });
lyr_PENDIDIKAN_PT_50K_7.set('fieldImages', {'NAMOBJ': 'TextEdit', 'LUAS': 'TextEdit', 'KATPDK': 'TextEdit', 'JLPDDK': 'TextEdit', 'FGGPDK': 'TextEdit', 'REMARK': 'TextEdit', 'FCODE': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'JJGPDF': 'TextEdit', 'JNSPDL': 'TextEdit', });
lyr_LAYANANKESEHATAN_PT_50K_8.set('fieldImages', {'NAMOBJ': 'TextEdit', 'FCODE': 'TextEdit', 'LCODE': 'TextEdit', 'REMARK': 'TextEdit', 'SRS_ID': 'TextEdit', 'METADATA': 'TextEdit', 'LKALMT': 'TextEdit', 'TPLYST': 'TextEdit', });
lyr_PEMERINTAHAN_PT_50K_9.set('fieldImages', {'NAMOBJ': 'TextEdit', 'FGSGOV': 'TextEdit', 'LUAS': 'TextEdit', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', });
lyr_ADMINISTRASIKECAMATAN_AR_50K_1.set('fieldLabels', {'KDPPUM': 'no label', 'NAMOBJ': 'inline label', 'REMARK': 'no label', 'KDPBPS': 'no label', 'FCODE': 'no label', 'LUASWH': 'no label', 'UUPP': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'KDEBPS': 'no label', 'KDEPUM': 'no label', 'KDCBPS': 'no label', 'KDCPUM': 'no label', 'KDBBPS': 'no label', 'KDBPUM': 'no label', 'WADMKD': 'no label', 'WIADKD': 'no label', 'WADMKC': 'no label', 'WIADKC': 'no label', 'WADMKK': 'no label', 'WIADKK': 'no label', 'WADMPR': 'no label', 'WIADPR': 'no label', 'TIPADM': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_AGRISAWAH_AR_50K_2.set('fieldLabels', {'NAMOBJ': 'no label', 'JNSSWH': 'no label', 'FCODE': 'no label', 'AQDATE': 'no label', 'PUDATE': 'no label', 'REMARK': 'no label', 'KODLCO': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'TNMSWH': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_PEMUKIMAN_AR_50K_3.set('fieldLabels', {'NAMOBJ': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_DANAU_AR_50K_4.set('fieldLabels', {'NAMOBJ': 'no label', 'OTODAN': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'KODLCO': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'VOLTAP': 'no label', 'DTA': 'no label', 'SEDIMN': 'no label', 'VLCSDN': 'no label', 'QUAAR': 'no label', 'CRH': 'no label', 'KPTS': 'no label', 'NAMWS': 'no label', 'NAMDAS': 'no label', 'LOKASI': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_JALAN_LN_50K_5.set('fieldLabels', {'NAMRJL': 'no label', 'KONRJL': 'no label', 'MATRJL': 'no label', 'FGSRJL': 'no label', 'UTKRJL': 'no label', 'TOLRJL': 'no label', 'WLYRJL': 'no label', 'AUTRJL': 'no label', 'KLSRJL': 'no label', 'SPCRJL': 'no label', 'JPARJL': 'no label', 'ARHRJL': 'no label', 'STARJL': 'no label', 'KLLRJL': 'no label', 'MEDRJL': 'no label', 'LOCRJL': 'no label', 'JARRJL': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'SHAPE_Leng': 'no label', });
lyr_SUNGAI_LN_50K_6.set('fieldLabels', {'NAMOBJ': 'no label', 'TIPSNG': 'no label', 'KLSSNG': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'NAMWS': 'no label', 'NAMDAS': 'no label', 'STATUS': 'no label', 'WMAX': 'no label', 'DBTMAX': 'no label', 'SLPRT': 'no label', 'SHAPE_Leng': 'no label', });
lyr_PENDIDIKAN_PT_50K_7.set('fieldLabels', {'NAMOBJ': 'no label', 'LUAS': 'no label', 'KATPDK': 'no label', 'JLPDDK': 'no label', 'FGGPDK': 'no label', 'REMARK': 'no label', 'FCODE': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'JJGPDF': 'no label', 'JNSPDL': 'no label', });
lyr_LAYANANKESEHATAN_PT_50K_8.set('fieldLabels', {'NAMOBJ': 'no label', 'FCODE': 'no label', 'LCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'METADATA': 'no label', 'LKALMT': 'no label', 'TPLYST': 'no label', });
lyr_PEMERINTAHAN_PT_50K_9.set('fieldLabels', {'NAMOBJ': 'no label', 'FGSGOV': 'no label', 'LUAS': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', });
lyr_PEMERINTAHAN_PT_50K_9.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});