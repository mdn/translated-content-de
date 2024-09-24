---
title: XRLayerEvent
slug: Web/API/XRLayerEvent
l10n:
  sourceCommit: b5b33acd44e7bb9c7be2efc75ba9a04b8bf8b2b2
---

{{APIRef("WebXR Device API")}} {{secureContext_header}}{{SeeCompatTable}}

Das **`XRLayerEvent`** Interface der [WebXR Device API](/de/docs/Web/API/WebXR_Device_API) ist der Ereignistyp für Ereignisse, die mit einer Zustandsänderung eines {{domxref("XRLayer")}} Objekts zusammenhängen. Diese Ereignisse treten zum Beispiel auf, wenn die Ebene neu gezeichnet werden muss.

{{InheritanceDiagram}}

## Konstruktor

- {{domxref("XRLayerEvent.XRLayerEvent", "XRLayerEvent()")}} {{Experimental_Inline}}
  - : Erstellt und gibt ein neues `XRLayerEvent` Objekt zurück.

## Instanz-Eigenschaften

_Zusätzlich zu den von seinem Eltern-Interface {{domxref("Event")}} geerbten Eigenschaften bietet `XRLayerEvent` die folgenden:_

- {{domxref("XRLayerEvent.layer", "layer")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Der {{domxref("XRLayer")}}, der das Ereignis generiert hat.

## Instanz-Methoden

_Während `XRSessionEvent` keine Methoden definiert, erbt es Methoden von seinem Eltern-Interface {{domxref("Event")}}._

## Ereignistypen

_Folgende Ereignisse werden durch das `XRLayerEvent` Interface repräsentiert und sind zulässige Werte für dessen `type`-Parameter._

### `redraw` Ereignis

Das `redraw` Ereignis wird an das Layer-Objekt gesendet, wenn die zugrundeliegenden Ressourcen der Ebene verloren gehen oder wenn der XR Compositor die Projektion der Ebene nicht mehr aufrechterhalten kann. Wenn dieses Ereignis gesendet wird, sollten Autoren den Inhalt der Ebene im nächsten XR-Animationsframe neu zeichnen. Es ist auf den folgenden Layer-Objekten verfügbar:

- {{domxref("XRQuadLayer")}}: {{domxref("XRQuadLayer.redraw_event", "redraw")}}
- {{domxref("XRCylinderLayer")}}: {{domxref("XRCylinderLayer.redraw_event", "redraw")}}
- {{domxref("XREquirectLayer")}}: {{domxref("XREquirectLayer.redraw_event", "redraw")}}
- {{domxref("XRCubeLayer")}}: {{domxref("XRCubeLayer.redraw_event", "redraw")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("XRCompositionLayer.needsRedraw")}}
