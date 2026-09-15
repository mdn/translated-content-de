---
title: "XRVisibilityMaskChangeEvent: XRVisibilityMaskChangeEvent()-Konstruktor"
short-title: XRVisibilityMaskChangeEvent()
slug: Web/API/XRVisibilityMaskChangeEvent/XRVisibilityMaskChangeEvent
l10n:
  sourceCommit: 6a5c66fd39deaf266d332f7e04a885751d1d691c
---

{{APIRef("WebXR Device API")}}{{SecureContext_Header}}{{SeeCompatTable}}

Der Konstruktor **`XRVisibilityMaskChangeEvent()`** erstellt und gibt ein neues [`XRVisibilityMaskChangeEvent`](/de/docs/Web/API/XRVisibilityMaskChangeEvent)-Objekt zurück.

## Syntax

```js-nolint
new XRVisibilityMaskChangeEvent(type, options)
```

### Parameter

- `type`
  - : Ein String, der den Namen des Ereignisses enthält, welcher immer `visibilitymaskchange` ist.
- `options`
  - : Ein Objekt, das _zusätzlich zu den in [`Event()`](/de/docs/Web/API/Event/Event) definierten Eigenschaften_ die folgenden Eigenschaften haben kann:
    - `eye`
      - : Das [`eye`](/de/docs/Web/API/XRVisibilityMaskChangeEvent/eye), auf das die Maske angewendet wird.
    - `index`
      - : Der Index des aktuellen [`XRView`](/de/docs/Web/API/XRView) im Array [`XRViewerPose.views`](/de/docs/Web/API/XRViewerPose/views).
    - `indices`
      - : Ein {{jsxref("Uint32Array")}} von Werten, die die Indexposition jedes Koordinatenpaars (nicht den einzelnen Array-Index) innerhalb des Arrays [`vertices`](#vertices) angeben, welche die Dreiecke definieren, die zum Zeichnen des aktuell sichtbaren Teils der in [`XRView`](/de/docs/Web/API/XRView) dargestellten Szene verwendet werden.
    - `session`
      - : Die [`XRSession`](/de/docs/Web/API/XRSession), zu der das Ereignis gehört.
    - `vertices`
      - : Ein {{jsxref("Float32Array")}} von Koordinaten, das die Menge möglicher Koordinatenwerte darstellt, die in einer Sichtbarkeitsmaske verwendet werden können. Wenn dieses Array leer ist, wird der gesamte Bereich von `XRView` gezeichnet.

### Rückgabewert

Eine neue Instanz eines [`XRVisibilityMaskChangeEvent`](/de/docs/Web/API/XRVisibilityMaskChangeEvent)-Objekts.

## Beispiele

Ein Beispiel finden Sie auf der Hauptseite zu [`XRVisibilityMaskChangeEvent`](/de/docs/Web/API/XRVisibilityMaskChangeEvent).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
