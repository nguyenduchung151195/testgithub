import React from 'react';
import BpmnViewer from 'bpmn-js/lib/Modeler';
import 'bpmn-js/dist/assets/diagram-js.css';
import 'bpmn-font/dist/css/bpmn-embedded.css';
import propertiesPanelModule from 'bpmn-js-properties-panel';
import propertiesProviderModule from 'bpmn-js-properties-panel/lib/provider/camunda';
import 'bpmn-js-properties-panel/dist/assets/bpmn-js-properties-panel.css';
import camundaModdleDescriptor from 'camunda-bpmn-moddle/resources/camunda';

class BpmnView extends React.Component {
    constructor() {
        super();
    }
    render() {
        return (
            <div style={{ height: '100%' }}>
                <div id="js-canvas" ref={this.containerRef} />
                <div id="propview" />
            </div>
        );
    }
    componentDidMount() {
        this.viewer = new BpmnViewer({
            container: document.getElementById('js-canvas'),
            keyboard: {
                bindTo: window,
            },
            propertiesPanel: {
                parent: '#propview',
            },
            additionalModules: [
                propertiesPanelModule,
                propertiesProviderModule,
            ],
            moddleExtensions: {
                camunda: camundaModdleDescriptor,
            },
        });

        // import function
        function importXML(xml, Viewer) {
            // import diagram
            Viewer.importXML(xml, function(err) {
                if (err) {
                    return console.error(
                        'could not import BPMN 2.0 diagram',
                        err
                    );
                }

                var canvas = Viewer.get('canvas'),
                    overlays = Viewer.get('overlays');

                // zoom to fit full viewport
                canvas.zoom('fit-viewport');

                // attach an overlay to a node
                // overlays.add('SCAN_OK', 'note', {
                //     position: {
                //         bottom: 0,
                //         right: 0,
                //     },
                //     html:
                //         '<div class="diagram-note">Mixed up the labels?</div>',
                // });

                // add marker
                // canvas.addMarker('SCAN_OK', 'needs-discussion');
            });

            var eventBus = Viewer.get('eventBus');

            // you may hook into any of the following events
            var events = [
                'element.hover',
                'element.out',
                'element.click',
                'element.dblclick',
                'element.mousedown',
                'element.mouseup',
            ];

            // events.forEach(function(event) {
            //     eventBus.on(event, function(e) {
            //         // e.element = the model element
            //         // e.gfx = the graphical element

            //         // log(event, 'on', e.element.id);
            //         console.log(event, 'on', e.element.id);
            //     });
            // });
            console.log('1', Viewer);
            var one = document.getElementById('js-canvas');
            var two = document.getElementById('propview');
            console.log('one', one);
            // var endEventNode = document.querySelector(
            //     '#js-canvas [data-element-id=]'
            // );
            // endEventNode.addEventListener('click', function(e) {
            //     alert('clicked the end event!');
            // });
            // // var hungEvent = document.getElementById(
            // //     'sid-E433566C-2289-4BEB-A19C-1697048900D2'
            // // );
            // // hungEvent.onclick = function(e) {
            // //     e.preventDefault();
            // //     alert('clicked the end event!');
            // // };
        }

        // a diagram to display
        //
        // see index-async.js on how to load the diagram asynchronously from a url.
        // (requires a running webserver)
        var diagramXML =
            '<?xml version="1.0" encoding="UTF-8"?>\r\n<definitions xmlns="http://www.omg.org/spec/BPMN/20100524/MODEL"\r\n             xmlns:bpmndi="http://www.omg.org/spec/BPMN/20100524/DI"\r\n             xmlns:omgdc="http://www.omg.org/spec/DD/20100524/DC"\r\n             xmlns:omgdi="http://www.omg.org/spec/DD/20100524/DI"\r\n             xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"\r\n             expressionLanguage="http://www.w3.org/1999/XPath"\r\n             typeLanguage="http://www.w3.org/2001/XMLSchema"\r\n             targetNamespace=""\r\n             xsi:schemaLocation="http://www.omg.org/spec/BPMN/20100524/MODEL http://www.omg.org/spec/BPMN/2.0/20100501/BPMN20.xsd">\r\n<collaboration id="sid-c0e745ff-361e-4afb-8c8d-2a1fc32b1424">\r\n    <participant id="sid-87F4C1D6-25E1-4A45-9DA7-AD945993D06F" name="Quy trình" processRef="sid-C3803939-0872-457F-8336-EAE484DC4A04">\r\n    </participant>\r\n</collaboration>\r\n<process id="sid-C3803939-0872-457F-8336-EAE484DC4A04" isClosed="false" isExecutable="false" name="Quy trình" processType="None">\r\n    <extensionElements/>\r\n    <laneSet id="sid-b167d0d7-e761-4636-9200-76b7f0e8e83a">\r\n        <lane id="sid-57E4FE0D-18E4-478D-BC5D-B15164E93254">\r\n            <flowNodeRef>sid-D7F237E8-56D0-4283-A3CE-4F0EFE446138</flowNodeRef>\r\n            <flowNodeRef>sid-52EB1772-F36E-433E-8F5B-D5DFD26E6F26</flowNodeRef>\r\n                 <flowNodeRef>sid-E49425CF-8287-4798-B622-D2A7D78EF00B</flowNodeRef>\r\n            <flowNodeRef>sid-E433566C-2289-4BEB-A19C-1697048900D2</flowNodeRef>\r\n                  </lane>\r\n    </laneSet>\r\n                               \r\n</process>\r\n<bpmndi:BPMNDiagram id="sid-74620812-92c4-44e5-949c-aa47393d3830">\r\n    <bpmndi:BPMNPlane bpmnElement="sid-c0e745ff-361e-4afb-8c8d-2a1fc32b1424" id="sid-cdcae759-2af7-4a6d-bd02-53f3352a731d">\r\n        <bpmndi:BPMNShape bpmnElement="sid-87F4C1D6-25E1-4A45-9DA7-AD945993D06F" id="sid-87F4C1D6-25E1-4A45-9DA7-AD945993D06F_gui" isHorizontal="true">\r\n            <omgdc:Bounds height="250.0" width="933.0" x="42.5" y="75.0"/>\r\n            <bpmndi:BPMNLabel labelStyle="sid-84cb49fd-2f7c-44fb-8950-83c3fa153d3b">\r\n                <omgdc:Bounds height="59.142852783203125" width="12.000000000000014" x="47.49999999999999" y="170.42857360839844"/>\r\n            </bpmndi:BPMNLabel>\r\n        </bpmndi:BPMNShape>\r\n        <bpmndi:BPMNShape bpmnElement="sid-57E4FE0D-18E4-478D-BC5D-B15164E93254" id="sid-57E4FE0D-18E4-478D-BC5D-B15164E93254_gui" isHorizontal="true">\r\n            <omgdc:Bounds height="250.0" width="903.0" x="72.5" y="75.0"/>\r\n        </bpmndi:BPMNShape>\r\n        <bpmndi:BPMNShape bpmnElement="sid-D7F237E8-56D0-4283-A3CE-4F0EFE446138" id="sid-D7F237E8-56D0-4283-A3CE-4F0EFE446138_gui">\r\n            <omgdc:Bounds height="30.0" width="30.0" x="150.0" y="165.0"/>\r\n            <bpmndi:BPMNLabel labelStyle="sid-e0502d32-f8d1-41cf-9c4a-cbb49fecf581">\r\n                <omgdc:Bounds height="22.0" width="46.35714340209961" x="141.8214282989502" y="197.0"/>\r\n            </bpmndi:BPMNLabel>\r\n        </bpmndi:BPMNShape>\r\n        <bpmndi:BPMNShape bpmnElement="sid-52EB1772-F36E-433E-8F5B-D5DFD26E6F26" id="sid-52EB1772-F36E-433E-8F5B-D5DFD26E6F26_gui">\r\n            <omgdc:Bounds height="80.0" width="100.0" x="352.5" y="140.0"/>\r\n            <bpmndi:BPMNLabel labelStyle="sid-84cb49fd-2f7c-44fb-8950-83c3fa153d3b">\r\n                <omgdc:Bounds height="12.0" width="84.0" x="360.5" y="172.0"/>\r\n            </bpmndi:BPMNLabel>\r\n        </bpmndi:BPMNShape>\r\n        <bpmndi:BPMNShape bpmnElement="SCAN_OK" id="SCAN_OK_gui" isMarkerVisible="true">\r\n            <omgdc:Bounds height="40.0" width="40.0" x="550.0" y="160.0"/>\r\n            <bpmndi:BPMNLabel labelStyle="sid-e0502d32-f8d1-41cf-9c4a-cbb49fecf581">\r\n                <omgdc:Bounds height="12.0" width="102.0" x="521.0" y="127.0"/>\r\n            </bpmndi:BPMNLabel>\r\n        </bpmndi:BPMNShape>\r\n        <bpmndi:BPMNShape bpmnElement="sid-E49425CF-8287-4798-B622-D2A7D78EF00B" id="sid-E49425CF-8287-4798-B622-D2A7D78EF00B_gui">\r\n            <omgdc:Bounds height="80.0" width="100.0" x="687.5" y="140.0"/>\r\n            <bpmndi:BPMNLabel labelStyle="sid-84cb49fd-2f7c-44fb-8950-83c3fa153d3b">\r\n                <omgdc:Bounds height="36.0" width="83.14285278320312" x="695.9285736083984" y="162.0"/>\r\n            </bpmndi:BPMNLabel>\r\n        </bpmndi:BPMNShape>\r\n        <bpmndi:BPMNShape bpmnElement="sid-E433566C-2289-4BEB-A19C-1697048900D2" id="sid-E433566C-2289-4BEB-A19C-1697048900D2_gui">\r\n            <omgdc:Bounds height="28.0" width="28.0" x="865.0" y="166.0"/>\r\n            <bpmndi:BPMNLabel labelStyle="sid-e0502d32-f8d1-41cf-9c4a-cbb49fecf581">\r\n                <omgdc:Bounds height="11.0" width="62.857147216796875" x="847.5714263916016" y="196.0"/>\r\n            </bpmndi:BPMNLabel>\r\n        </bpmndi:BPMNShape>\r\n        <bpmndi:BPMNShape bpmnElement="sid-5134932A-1863-4FFA-BB3C-A4B4078B11A9" id="sid-5134932A-1863-4FFA-BB3C-A4B4078B11A9_gui" isMarkerVisible="true">\r\n            <omgdc:Bounds height="40.0" width="40.0" x="240.0" y="160.0"/>\r\n        </bpmndi:BPMNShape>\r\n        <bpmndi:BPMNEdge bpmnElement="sid-EE8A7BA0-5D66-4F8B-80E3-CC2751B3856A" id="sid-EE8A7BA0-5D66-4F8B-80E3-CC2751B3856A_gui">\r\n            <omgdi:waypoint x="452.5" y="180"/>\r\n            <omgdi:waypoint x="550.0" y="180"/>\r\n        </bpmndi:BPMNEdge>\r\n        <bpmndi:BPMNEdge bpmnElement="sid-8B820AF5-DC5C-4618-B854-E08B71FB55CB" id="sid-8B820AF5-DC5C-4618-B854-E08B71FB55CB_gui">\r\n            <omgdi:waypoint x="590.0" y="180"/>\r\n            <omgdi:waypoint x="687.5" y="180"/>\r\n            <bpmndi:BPMNLabel labelStyle="sid-e0502d32-f8d1-41cf-9c4a-cbb49fecf581">\r\n                <omgdc:Bounds height="12.048704338048935" width="16.32155963195521" x="597.8850936986571" y="155"/>\r\n            </bpmndi:BPMNLabel>\r\n        </bpmndi:BPMNEdge>\r\n        <bpmndi:BPMNEdge bpmnElement="sid-7B791A11-2F2E-4D80-AFB3-91A02CF2B4FD" id="sid-7B791A11-2F2E-4D80-AFB3-91A02CF2B4FD_gui">\r\n            <omgdi:waypoint x="180.0" y="180"/>\r\n            <omgdi:waypoint x="240.0" y="180"/>\r\n        </bpmndi:BPMNEdge>\r\n        <bpmndi:BPMNEdge bpmnElement="sid-4DC479E5-5C20-4948-BCFC-9EC5E2F66D8D" id="sid-4DC479E5-5C20-4948-BCFC-9EC5E2F66D8D_gui">\r\n            <omgdi:waypoint x="280.0" y="180"/>\r\n            <omgdi:waypoint x="352.5" y="180"/>\r\n        </bpmndi:BPMNEdge>\r\n        <bpmndi:BPMNEdge bpmnElement="sid-57EB1F24-BD94-479A-BF1F-57F1EAA19C6C" id="sid-57EB1F24-BD94-479A-BF1F-57F1EAA19C6C_gui">\r\n            <omgdi:waypoint x="787.5" y="180.0"/>\r\n            <omgdi:waypoint x="865.0" y="180.0"/>\r\n        </bpmndi:BPMNEdge>\r\n        <bpmndi:BPMNEdge bpmnElement="sid-337A23B9-A923-4CCE-B613-3E247B773CCE" id="sid-337A23B9-A923-4CCE-B613-3E247B773CCE_gui">\r\n            <omgdi:waypoint x="570.5" y="200.0"/>\r\n            <omgdi:waypoint x="570.5" y="269.0"/>\r\n            <omgdi:waypoint x="260.5" y="269.0"/>\r\n            <omgdi:waypoint x="260.5" y="200.0"/>\r\n            <bpmndi:BPMNLabel labelStyle="sid-e0502d32-f8d1-41cf-9c4a-cbb49fecf581">\r\n                <omgdc:Bounds height="21.4285888671875" width="12.0" x="550" y="205"/>\r\n            </bpmndi:BPMNLabel>\r\n        </bpmndi:BPMNEdge>\r\n    </bpmndi:BPMNPlane>\r\n    <bpmndi:BPMNLabelStyle id="sid-e0502d32-f8d1-41cf-9c4a-cbb49fecf581">\r\n        <omgdc:Font isBold="false" isItalic="false" isStrikeThrough="false" isUnderline="false" name="Arial" size="11.0"/>\r\n    </bpmndi:BPMNLabelStyle>\r\n    <bpmndi:BPMNLabelStyle id="sid-84cb49fd-2f7c-44fb-8950-83c3fa153d3b">\r\n        <omgdc:Font isBold="false" isItalic="false" isStrikeThrough="false" isUnderline="false" name="Arial" size="12.0"/>\r\n    </bpmndi:BPMNLabelStyle>\r\n</bpmndi:BPMNDiagram>\r\n</definitions>\r\n\r\n';

        // import xml
        importXML(diagramXML, this.viewer);
    }
}

export default BpmnView;
