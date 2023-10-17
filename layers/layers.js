var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_XLabResearchblock_1 = new ol.format.GeoJSON();
var features_XLabResearchblock_1 = format_XLabResearchblock_1.readFeatures(json_XLabResearchblock_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_XLabResearchblock_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_XLabResearchblock_1.addFeatures(features_XLabResearchblock_1);
var lyr_XLabResearchblock_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_XLabResearchblock_1, 
                style: style_XLabResearchblock_1,
                interactive: true,
                title: '<img src="styles/legend/XLabResearchblock_1.png" /> XLab/Research block'
            });
var format_ACBlock_2 = new ol.format.GeoJSON();
var features_ACBlock_2 = format_ACBlock_2.readFeatures(json_ACBlock_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ACBlock_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ACBlock_2.addFeatures(features_ACBlock_2);
var lyr_ACBlock_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ACBlock_2, 
                style: style_ACBlock_2,
                interactive: true,
                title: '<img src="styles/legend/ACBlock_2.png" /> AC Block'
            });
var format_Basketballcourt_3 = new ol.format.GeoJSON();
var features_Basketballcourt_3 = format_Basketballcourt_3.readFeatures(json_Basketballcourt_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Basketballcourt_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Basketballcourt_3.addFeatures(features_Basketballcourt_3);
var lyr_Basketballcourt_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Basketballcourt_3, 
                style: style_Basketballcourt_3,
                interactive: true,
                title: '<img src="styles/legend/Basketballcourt_3.png" /> Basketball court'
            });
var format_Tower3_4 = new ol.format.GeoJSON();
var features_Tower3_4 = format_Tower3_4.readFeatures(json_Tower3_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Tower3_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Tower3_4.addFeatures(features_Tower3_4);
var lyr_Tower3_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Tower3_4, 
                style: style_Tower3_4,
                interactive: true,
                title: '<img src="styles/legend/Tower3_4.png" /> Tower 3'
            });
var format_Tower4_5 = new ol.format.GeoJSON();
var features_Tower4_5 = format_Tower4_5.readFeatures(json_Tower4_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Tower4_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Tower4_5.addFeatures(features_Tower4_5);
var lyr_Tower4_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Tower4_5, 
                style: style_Tower4_5,
                interactive: true,
                title: '<img src="styles/legend/Tower4_5.png" /> Tower 4'
            });
var format_Kaaveri_6 = new ol.format.GeoJSON();
var features_Kaaveri_6 = format_Kaaveri_6.readFeatures(json_Kaaveri_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Kaaveri_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Kaaveri_6.addFeatures(features_Kaaveri_6);
var lyr_Kaaveri_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Kaaveri_6, 
                style: style_Kaaveri_6,
                interactive: true,
                title: '<img src="styles/legend/Kaaveri_6.png" /> Kaaveri'
            });
var format_Cafe_7 = new ol.format.GeoJSON();
var features_Cafe_7 = format_Cafe_7.readFeatures(json_Cafe_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Cafe_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Cafe_7.addFeatures(features_Cafe_7);
var lyr_Cafe_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Cafe_7, 
                style: style_Cafe_7,
                interactive: true,
                title: '<img src="styles/legend/Cafe_7.png" /> Cafe'
            });
var format_Cafeteria_8 = new ol.format.GeoJSON();
var features_Cafeteria_8 = format_Cafeteria_8.readFeatures(json_Cafeteria_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Cafeteria_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Cafeteria_8.addFeatures(features_Cafeteria_8);
var lyr_Cafeteria_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Cafeteria_8, 
                style: style_Cafeteria_8,
                interactive: true,
                title: '<img src="styles/legend/Cafeteria_8.png" /> Cafeteria'
            });
var format_Ganga_9 = new ol.format.GeoJSON();
var features_Ganga_9 = format_Ganga_9.readFeatures(json_Ganga_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Ganga_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Ganga_9.addFeatures(features_Ganga_9);
var lyr_Ganga_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Ganga_9, 
                style: style_Ganga_9,
                interactive: true,
                title: '<img src="styles/legend/Ganga_9.png" /> Ganga'
            });
var format_Hostel_10 = new ol.format.GeoJSON();
var features_Hostel_10 = format_Hostel_10.readFeatures(json_Hostel_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Hostel_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Hostel_10.addFeatures(features_Hostel_10);
var lyr_Hostel_10 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Hostel_10, 
                style: style_Hostel_10,
                interactive: true,
                title: '<img src="styles/legend/Hostel_10.png" /> Hostel '
            });
var format_Krishna_11 = new ol.format.GeoJSON();
var features_Krishna_11 = format_Krishna_11.readFeatures(json_Krishna_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Krishna_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Krishna_11.addFeatures(features_Krishna_11);
var lyr_Krishna_11 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Krishna_11, 
                style: style_Krishna_11,
                interactive: true,
                title: '<img src="styles/legend/Krishna_11.png" /> Krishna'
            });
var format_MainMESS_12 = new ol.format.GeoJSON();
var features_MainMESS_12 = format_MainMESS_12.readFeatures(json_MainMESS_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MainMESS_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MainMESS_12.addFeatures(features_MainMESS_12);
var lyr_MainMESS_12 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_MainMESS_12, 
                style: style_MainMESS_12,
                interactive: true,
                title: '<img src="styles/legend/MainMESS_12.png" /> Main MESS'
            });
var format_NewAcademicBlock_13 = new ol.format.GeoJSON();
var features_NewAcademicBlock_13 = format_NewAcademicBlock_13.readFeatures(json_NewAcademicBlock_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_NewAcademicBlock_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NewAcademicBlock_13.addFeatures(features_NewAcademicBlock_13);
var lyr_NewAcademicBlock_13 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_NewAcademicBlock_13, 
                style: style_NewAcademicBlock_13,
                interactive: true,
                title: '<img src="styles/legend/NewAcademicBlock_13.png" /> New Academic Block'
            });
var format_OldAcademicBlock_14 = new ol.format.GeoJSON();
var features_OldAcademicBlock_14 = format_OldAcademicBlock_14.readFeatures(json_OldAcademicBlock_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_OldAcademicBlock_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_OldAcademicBlock_14.addFeatures(features_OldAcademicBlock_14);
var lyr_OldAcademicBlock_14 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_OldAcademicBlock_14, 
                style: style_OldAcademicBlock_14,
                interactive: true,
                title: '<img src="styles/legend/OldAcademicBlock_14.png" /> Old Academic Block'
            });
var format_ResearchBlock_15 = new ol.format.GeoJSON();
var features_ResearchBlock_15 = format_ResearchBlock_15.readFeatures(json_ResearchBlock_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ResearchBlock_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ResearchBlock_15.addFeatures(features_ResearchBlock_15);
var lyr_ResearchBlock_15 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ResearchBlock_15, 
                style: style_ResearchBlock_15,
                interactive: true,
                title: '<img src="styles/legend/ResearchBlock_15.png" /> Research Block'
            });
var format_SBlock_16 = new ol.format.GeoJSON();
var features_SBlock_16 = format_SBlock_16.readFeatures(json_SBlock_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SBlock_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SBlock_16.addFeatures(features_SBlock_16);
var lyr_SBlock_16 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SBlock_16, 
                style: style_SBlock_16,
                interactive: true,
                title: '<img src="styles/legend/SBlock_16.png" /> SBlock'
            });
var format_SUPERMARKET_17 = new ol.format.GeoJSON();
var features_SUPERMARKET_17 = format_SUPERMARKET_17.readFeatures(json_SUPERMARKET_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SUPERMARKET_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SUPERMARKET_17.addFeatures(features_SUPERMARKET_17);
var lyr_SUPERMARKET_17 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SUPERMARKET_17, 
                style: style_SUPERMARKET_17,
                interactive: true,
                title: '<img src="styles/legend/SUPERMARKET_17.png" /> SUPER MARKET'
            });
var format_Treess_18 = new ol.format.GeoJSON();
var features_Treess_18 = format_Treess_18.readFeatures(json_Treess_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Treess_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Treess_18.addFeatures(features_Treess_18);
var lyr_Treess_18 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Treess_18, 
                style: style_Treess_18,
                interactive: true,
                title: '<img src="styles/legend/Treess_18.png" /> Treess'
            });

lyr_OSMStandard_0.setVisible(true);lyr_XLabResearchblock_1.setVisible(true);lyr_ACBlock_2.setVisible(true);lyr_Basketballcourt_3.setVisible(true);lyr_Tower3_4.setVisible(true);lyr_Tower4_5.setVisible(true);lyr_Kaaveri_6.setVisible(true);lyr_Cafe_7.setVisible(true);lyr_Cafeteria_8.setVisible(true);lyr_Ganga_9.setVisible(true);lyr_Hostel_10.setVisible(true);lyr_Krishna_11.setVisible(true);lyr_MainMESS_12.setVisible(true);lyr_NewAcademicBlock_13.setVisible(true);lyr_OldAcademicBlock_14.setVisible(true);lyr_ResearchBlock_15.setVisible(true);lyr_SBlock_16.setVisible(true);lyr_SUPERMARKET_17.setVisible(true);lyr_Treess_18.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_XLabResearchblock_1,lyr_ACBlock_2,lyr_Basketballcourt_3,lyr_Tower3_4,lyr_Tower4_5,lyr_Kaaveri_6,lyr_Cafe_7,lyr_Cafeteria_8,lyr_Ganga_9,lyr_Hostel_10,lyr_Krishna_11,lyr_MainMESS_12,lyr_NewAcademicBlock_13,lyr_OldAcademicBlock_14,lyr_ResearchBlock_15,lyr_SBlock_16,lyr_SUPERMARKET_17,lyr_Treess_18];
lyr_XLabResearchblock_1.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_ACBlock_2.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_Basketballcourt_3.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_Tower3_4.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_Tower4_5.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_Kaaveri_6.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_Cafe_7.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_Cafeteria_8.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_Ganga_9.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_Hostel_10.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_Krishna_11.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_MainMESS_12.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_NewAcademicBlock_13.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_OldAcademicBlock_14.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_ResearchBlock_15.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_SBlock_16.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_SUPERMARKET_17.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_Treess_18.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_XLabResearchblock_1.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', });
lyr_ACBlock_2.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', });
lyr_Basketballcourt_3.set('fieldImages', {'Name': '', 'descriptio': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMo': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', });
lyr_Tower3_4.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', });
lyr_Tower4_5.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', });
lyr_Kaaveri_6.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', });
lyr_Cafe_7.set('fieldImages', {'Name': '', 'descriptio': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMo': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', });
lyr_Cafeteria_8.set('fieldImages', {'Name': '', 'descriptio': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMo': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', });
lyr_Ganga_9.set('fieldImages', {'Name': '', 'descriptio': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMo': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', });
lyr_Hostel_10.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', });
lyr_Krishna_11.set('fieldImages', {'Name': '', 'descriptio': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMo': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', });
lyr_MainMESS_12.set('fieldImages', {'Name': '', 'descriptio': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMo': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', });
lyr_NewAcademicBlock_13.set('fieldImages', {'Name': '', 'descriptio': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMo': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', });
lyr_OldAcademicBlock_14.set('fieldImages', {'Name': '', 'descriptio': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMo': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', });
lyr_ResearchBlock_15.set('fieldImages', {'Name': '', 'descriptio': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMo': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', });
lyr_SBlock_16.set('fieldImages', {'Name': '', 'descriptio': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMo': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', });
lyr_SUPERMARKET_17.set('fieldImages', {'Name': '', 'descriptio': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMo': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', });
lyr_Treess_18.set('fieldImages', {'Name': '', 'descriptio': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMo': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', });
lyr_XLabResearchblock_1.set('fieldLabels', {'Name': 'header label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_ACBlock_2.set('fieldLabels', {'Name': 'header label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_Basketballcourt_3.set('fieldLabels', {'Name': 'header label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_Tower3_4.set('fieldLabels', {'Name': 'header label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_Tower4_5.set('fieldLabels', {'Name': 'header label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_Kaaveri_6.set('fieldLabels', {'Name': 'header label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_Cafe_7.set('fieldLabels', {'Name': 'header label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_Cafeteria_8.set('fieldLabels', {'Name': 'header label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_Ganga_9.set('fieldLabels', {'Name': 'header label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_Hostel_10.set('fieldLabels', {'Name': 'header label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_Krishna_11.set('fieldLabels', {'Name': 'header label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_MainMESS_12.set('fieldLabels', {'Name': 'header label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_NewAcademicBlock_13.set('fieldLabels', {'Name': 'header label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_OldAcademicBlock_14.set('fieldLabels', {'Name': 'header label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_ResearchBlock_15.set('fieldLabels', {'Name': 'header label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_SBlock_16.set('fieldLabels', {'Name': 'header label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_SUPERMARKET_17.set('fieldLabels', {'Name': 'header label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_Treess_18.set('fieldLabels', {'Name': 'header label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_Treess_18.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});