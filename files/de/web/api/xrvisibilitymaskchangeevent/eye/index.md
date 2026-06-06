---
title: "XRVisibilityMaskChangeEvent: eye-Eigenschaft"
short-title: eye
slug: Web/API/XRVisibilityMaskChangeEvent/eye
l10n:
  sourceCommit: 8330e7c1afd31d53ae12c3271e96d681bba9e223
---

{{APIRef("WebXR Device API")}}{{SecureContext_Header}}{{SeeCompatTable}}

Die schreibgeschützte **`eye`**-Eigenschaft des [`XRVisibilityMaskChangeEvent`](/de/docs/Web/API/XRVisibilityMaskChangeEvent)-Interfaces gibt an, auf welches Auge die Maske angewendet wird.

## Wert

Ein enumerierter Wert, der angibt, auf welches Auge die Maske aus der Perspektive des Betrachters angewendet wird.
Dies kann eines der folgenden sein:

- `left`
  - : Das linke Auge des Betrachters.
- `right`
  - : Das rechte Auge des Betrachters.
- `none`
  - : Eine monokulare Ansicht oder die Ansicht stellt anderweitig keine spezifische Perspektive eines Auges dar.

## Beispiele

### Grundlegende Verwendung

Dieses Beispiel zeigt, wie man den `eye`-Wert überprüfen kann, wenn das `visibilitymaskchange`-Ereignis ausgelöst wird, und dann je nach Ergebnis eine geeignete Anzeigeaktualisierung rendern kann.

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
