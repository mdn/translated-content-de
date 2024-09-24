---
title: "NavigationActivation: Eigenschaft navigationType"
short-title: navigationType
slug: Web/API/NavigationActivation/navigationType
l10n:
  sourceCommit: 722311032dbf520bf6aeba3d1f432aca38779ffd
---

{{APIRef("Navigation API")}}{{SeeCompatTable}}

Die schreibgeschützte Eigenschaft **`navigationType`** des {{domxref("NavigationActivation")}}-Interfaces enthält einen String, der den Typ der Navigation angibt.

## Wert

Ein String, der den Typ der Navigation beschreibt, auf den sich das {{domxref("NavigationActivation")}} bezieht. Mögliche Werte sind:

- `push`: Zu einem neuen Ort wurde navigiert, wodurch ein neuer Eintrag in die Verlaufsliste eingefügt wurde.
- `reload`: Der {{domxref("NavigationActivation.entry")}} wurde neu geladen.
- `replace`: Der {{domxref("NavigationActivation.entry")}} wurde durch einen neuen Verlaufseintrag ersetzt. Dieser neue Eintrag verwendet denselben {{domxref("NavigationHistoryEntry.key", "key")}}, erhält jedoch eine andere {{domxref("NavigationHistoryEntry.id", "id")}}.
- `traverse`: Der Browser navigierte von einem bestehenden Verlaufseintrag zu einem anderen bestehenden Verlaufseintrag.

## Beispiele

```js
window.addEventListener("pageswap", (event) => {
  // Zum Beispiel, die Seite wurde versteckt oder die Navigation ist dokumentübergreifend.
  if (!event.viewTransition) return;

  // Überspringen Sie die Ansichtstransition für Vorwärts-/Rückwärtsnavigationen.
  if (event.activation.navigationType === "traverse") {
    event.viewTransition.skipTransition();
  }
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Navigation API](/de/docs/Web/API/Navigation_API)
- [View Transitions API](/de/docs/Web/API/View_Transitions_API)
