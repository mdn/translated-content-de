---
title: "Navigation: canGoBack-Eigenschaft"
short-title: canGoBack
slug: Web/API/Navigation/canGoBack
l10n:
  sourceCommit: ef75c1741b450c2331204be5563ee964ad5f4c48
---

{{APIRef("Navigation API")}}{{SeeCompatTable}}

Die **`canGoBack`** schreibgeschützte Eigenschaft des
{{domxref("Navigation")}}-Interfaces gibt `true` zurück,
wenn es möglich ist, in der Navigationshistorie rückwärts zu navigieren
(d.h. der {{domxref("Navigation.currentEntry", "currentEntry")}} ist
nicht der erste Eintrag in der Historienliste),
und `false`, wenn dies nicht der Fall ist.

## Wert

Ein boolescher Wert: `true`, wenn es möglich ist, in der Navigationshistorie rückwärts zu navigieren, `false` andernfalls.

## Beispiele

```js
async function backHandler() {
  if (navigation.canGoBack) {
    await navigation.back().finished;
    // Bearbeiten Sie alle erforderlichen Bereinigungen,
    // nachdem die Navigation abgeschlossen ist
  } else {
    displayBanner("Sie sind auf der ersten Seite");
  }
}

async function forwardHandler() {
  if (navigation.canGoForward) {
    await navigation.forward().finished;
    // Bearbeiten Sie alle erforderlichen Bereinigungen,
    // nachdem die Navigation abgeschlossen ist
  } else {
    displayBanner("Sie sind auf der letzten Seite");
  }
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Moderne clientseitige Navigation: die Navigation API](https://developer.chrome.com/docs/web-platform/navigation-api/)
- [Navigation API Erläuterung](https://github.com/WICG/navigation-api/blob/main/README.md)
- Domenic Denicolas [Navigation API Live-Demo](https://gigantic-honored-octagon.glitch.me/)
