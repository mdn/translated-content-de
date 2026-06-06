---
title: "XRVisibilityMaskChangeEvent: XRVisibilityMaskChangeEvent() Konstruktor"
short-title: XRVisibilityMaskChangeEvent()
slug: Web/API/XRVisibilityMaskChangeEvent/XRVisibilityMaskChangeEvent
l10n:
  sourceCommit: 8330e7c1afd31d53ae12c3271e96d681bba9e223
---

{{APIRef("WebXR Device API")}}{{SecureContext_Header}}{{SeeCompatTable}}

Der **`XRVisibilityMaskChangeEvent()`**-Konstruktor erstellt und gibt ein neues [`XRVisibilityMaskChangeEvent`](/de/docs/Web/API/XRVisibilityMaskChangeEvent)-Objekt zurück.

## Syntax

```js-nolint
new XRVisibilityMaskChangeEvent(type, options)
```

### Parameter

- `type`
  - : Ein String, der den Namen des Events enthält. Dieser ist immer `visibilitymaskchange`.
- `options`
  - : Ein Objekt, das _zusätzlich zu den in [`Event()`](/de/docs/Web/API/Event/Event) definierten Eigenschaften_ die folgenden Eigenschaften haben kann:
    - `eye`
      - : Das [`eye`](/de/docs/Web/API/XRVisibilityMaskChangeEvent/eye), auf das die Maske angewendet wird.
    - `index`
      - : Der Index des aktuellen [`XRView`](/de/docs/Web/API/XRView) im [`XRViewerPose.views`](/de/docs/Web/API/XRViewerPose/views)-Array.
    - `indices`
      - : Ein [`Uint32Array`](/de/docs/Web/JavaScript/Reference/Global_Objects/Uint32Array) mit Werten, die die Indexposition jedes Koordinatenpaars (nicht der einzelne Array-Index) innerhalb des [`vertices`](#vertices)-Arrays angeben, die die Dreiecke definieren, die verwendet werden, um den derzeit sichtbaren Teil der Szene im [`XRView`](/de/docs/Web/API/XRView) zu zeichnen.
    - `session`
      - : Die [`XRSession`](/de/docs/Web/API/XRSession), zu der das Event gehört.
    - `vertices`
      - : Ein [`Float32Array`](/de/docs/Web/JavaScript/Reference/Global_Objects/Float32Array) von Koordinaten, die die Menge möglicher Koordinatenwerte repräsentiert, die in einer Sichtbarkeitsmaske verwendet werden können. Wenn dieses Array leer ist, wird die gesamte Region des `XRView` gezeichnet.

### Rückgabewert

Eine neue Instanz des [`XRVisibilityMaskChangeEvent`](/de/docs/Web/API/XRVisibilityMaskChangeEvent)-Objekts.

## Beispiele

Siehe die Hauptseite [`XRVisibilityMaskChangeEvent`](/de/docs/Web/API/XRVisibilityMaskChangeEvent) für ein Beispiel.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
