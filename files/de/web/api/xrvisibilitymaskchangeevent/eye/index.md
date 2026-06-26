---
title: "XRVisibilityMaskChangeEvent: eye-Eigenschaft"
short-title: eye
slug: Web/API/XRVisibilityMaskChangeEvent/eye
l10n:
  sourceCommit: 058e546d8a4ed2529efc5cc6ad9d06162bb59def
---

{{APIRef("WebXR Device API")}}{{SecureContext_Header}}{{SeeCompatTable}}

Die **`eye`** schreibgeschützte Eigenschaft der Schnittstelle [`XRVisibilityMaskChangeEvent`](/de/docs/Web/API/XRVisibilityMaskChangeEvent) gibt an, auf welches Auge die Maske angewendet wird.

## Wert

Ein enumerierter Wert, der angibt, auf welches Auge die Maske aus der Perspektive des Betrachters angewendet wird.
Dies kann einer der folgenden Werte sein:

- `left`
  - : Das linke Auge des Betrachters.
- `right`
  - : Das rechte Auge des Betrachters.
- `none`
  - : Eine monokulare Ansicht, oder die Ansicht stellt nicht den Sichtpunkt eines bestimmten Auges dar.

## Beispiele

### Grundlegende Verwendung

Dieses Beispiel zeigt, wie Sie den `eye`-Wert überprüfen können, wenn das `visibilitymaskchange`-Ereignis ausgelöst wird, und dann je nach Ergebnis eine entsprechende Anzeigeaktualisierung rendern.

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
