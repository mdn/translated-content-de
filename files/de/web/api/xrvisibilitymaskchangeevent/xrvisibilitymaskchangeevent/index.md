---
title: "XRVisibilityMaskChangeEvent: XRVisibilityMaskChangeEvent() Konstruktor"
short-title: XRVisibilityMaskChangeEvent()
slug: Web/API/XRVisibilityMaskChangeEvent/XRVisibilityMaskChangeEvent
l10n:
  sourceCommit: 15e12ff9faca3923ffb811d601ab589f4b2918e0
---

{{APIRef("WebXR Device API")}}{{SecureContext_Header}}

Der **`XRVisibilityMaskChangeEvent()`** Konstruktor erstellt und gibt ein neues [`XRVisibilityMaskChangeEvent`](/de/docs/Web/API/XRVisibilityMaskChangeEvent) Objekt zurück.

## Syntax

```js-nolint
new XRVisibilityMaskChangeEvent(type, options)
```

### Parameter

- `type`
  - : Ein String, der den Namen des Ereignisses enthält, der immer `visibilitymaskchange` ist.
- `options`
  - : Ein Objekt, das _zusätzlich zu den in [`Event()`](/de/docs/Web/API/Event/Event) definierten Eigenschaften_ die folgenden Eigenschaften aufweisen kann:
    - `eye`
      - : Das [`eye`](/de/docs/Web/API/XRVisibilityMaskChangeEvent/eye), auf das die Maske angewendet wird.
    - `index`
      - : Der Index des aktuellen [`XRView`](/de/docs/Web/API/XRView) im [`XRViewerPose.views`](/de/docs/Web/API/XRViewerPose/views) Array.
    - `indices`
      - : Ein [`Uint32Array`](/de/docs/Web/JavaScript/Reference/Global_Objects/Uint32Array) von Werten, die die Indexposition jedes Koordinatenpaares (nicht einzelner Array-Index) im [`vertices`](#vertices) Array spezifizieren, das die Dreiecke definiert, die verwendet werden, um den aktuell sichtbaren Teil der Szene anzuzeigen, der im [`XRView`](/de/docs/Web/API/XRView) dargestellt wird.
    - `session`
      - : Die [`XRSession`](/de/docs/Web/API/XRSession), zu der das Ereignis gehört.
    - `vertices`
      - : Ein [`Float32Array`](/de/docs/Web/JavaScript/Reference/Global_Objects/Float32Array) von Koordinaten, das die Menge der möglichen Koordinatenwerte darstellt, die in einer Sichtbarkeitsmaske verwendet werden können. Wenn dieses Array leer ist, wird der gesamte Bereich des `XRView` gezeichnet.

### Rückgabewert

Eine neue Instanz des [`XRVisibilityMaskChangeEvent`](/de/docs/Web/API/XRVisibilityMaskChangeEvent) Objekts.

## Beispiele

Sehen Sie sich die Hauptseite von [`XRVisibilityMaskChangeEvent`](/de/docs/Web/API/XRVisibilityMaskChangeEvent) für ein Beispiel an.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
