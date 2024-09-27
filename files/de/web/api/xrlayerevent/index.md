---
title: XRLayerEvent
slug: Web/API/XRLayerEvent
l10n:
  sourceCommit: b5b33acd44e7bb9c7be2efc75ba9a04b8bf8b2b2
---

{{APIRef("WebXR Device API")}} {{secureContext_header}}{{SeeCompatTable}}

Die **`XRLayerEvent`**-Schnittstelle der [WebXR Device API](/de/docs/Web/API/WebXR_Device_API) ist der Ereignistyp für Ereignisse, die mit einer Statusänderung eines [`XRLayer`](/de/docs/Web/API/XRLayer)-Objekts zusammenhängen. Diese Ereignisse treten zum Beispiel auf, wenn die Ebene neu gezeichnet werden muss.

{{InheritanceDiagram}}

## Konstruktor

- [`XRLayerEvent()`](/de/docs/Web/API/XRLayerEvent/XRLayerEvent) {{Experimental_Inline}}
  - : Erstellt und gibt ein neues `XRLayerEvent`-Objekt zurück.

## Instanzeigenschaften

_Zusätzlich zu den von ihrer Elternschnittstelle, [`Event`](/de/docs/Web/API/Event), geerbten Eigenschaften bietet `XRLayerEvent` folgende Eigenschaften:_

- [`layer`](/de/docs/Web/API/XRLayerEvent/layer) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Der [`XRLayer`](/de/docs/Web/API/XRLayer), der das Ereignis erzeugt hat.

## Instanzmethoden

_Während `XRSessionEvent` keine Methoden definiert, erbt es Methoden von seiner Elternschnittstelle, [`Event`](/de/docs/Web/API/Event)._

## Ereignistypen

_Folgende Ereignisse werden mit der `XRLayerEvent`-Schnittstelle dargestellt und sind zulässige Werte für ihren `type`-Parameter._

### `redraw` Ereignis

Das `redraw`-Ereignis wird an das Ebenenobjekt gesendet, wenn die zugrunde liegenden Ressourcen der Ebene verloren gehen oder wenn der XR-Compositor die Ebene nicht mehr neu projektieren kann. Wenn dieses Ereignis gesendet wird, sollten Autoren den Inhalt der Ebene im nächsten XR-Animationsrahmen neu zeichnen. Es ist verfügbar auf den folgenden Ebenenobjekten:

- [`XRQuadLayer`](/de/docs/Web/API/XRQuadLayer): [`redraw`](/de/docs/Web/API/XRQuadLayer/redraw_event)
- [`XRCylinderLayer`](/de/docs/Web/API/XRCylinderLayer): [`redraw`](/de/docs/Web/API/XRCylinderLayer/redraw_event)
- [`XREquirectLayer`](/de/docs/Web/API/XREquirectLayer): [`redraw`](/de/docs/Web/API/XREquirectLayer/redraw_event)
- [`XRCubeLayer`](/de/docs/Web/API/XRCubeLayer): [`redraw`](/de/docs/Web/API/XRCubeLayer/redraw_event)

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`XRCompositionLayer.needsRedraw`](/de/docs/Web/API/XRCompositionLayer/needsRedraw)
