---
title: "XRVisibilityMaskChangeEvent: eye Eigenschaft"
short-title: eye
slug: Web/API/XRVisibilityMaskChangeEvent/eye
l10n:
  sourceCommit: 15e12ff9faca3923ffb811d601ab589f4b2918e0
---

{{APIRef("WebXR Device API")}}{{SecureContext_Header}}

Die **`eye`**-Eigenschaft, die nur lesbar ist, des [`XRVisibilityMaskChangeEvent`](/de/docs/Web/API/XRVisibilityMaskChangeEvent)-Interfaces gibt an, auf welches Auge die Maske angewendet wird.

## Wert

Ein aufgezählter Wert, der angibt, auf welches Auge die Maske aus der Sicht des Betrachters angewendet wird.
Dies kann eines der folgenden sein:

- `left`
  - : Das linke Auge des Betrachters.
- `right`
  - : Das rechte Auge des Betrachters.
- `none`
  - : Eine monokulare Ansicht oder die Ansicht stellt nicht den Standpunkt eines bestimmten Auges dar.

## Beispiele

### Grundlegende Verwendung

Dieses Beispiel zeigt, wie Sie den `eye`-Wert überprüfen könnten, wenn das `visibilitymaskchange`-Ereignis ausgelöst wird und dann ein geeignetes Anzeige-Update je nach Ergebnis rendern.

```js
xrSession.addEventListener("visibilitymaskchange", (e) => {
  if (e.eye === "left") {
    // Render for left eye view
  } else if (e.eye === "right") {
    // Render for right eye view
  } else {
    // Render for neutral view
  }
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`XRView.eye`](/de/docs/Web/API/XRView/eye)
