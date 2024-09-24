---
title: "NavigationTransition: navigationType-Eigenschaft"
short-title: navigationType
slug: Web/API/NavigationTransition/navigationType
l10n:
  sourceCommit: ef75c1741b450c2331204be5563ee964ad5f4c48
---

{{APIRef("Navigation API")}}{{SeeCompatTable}}

Die schreibgeschützte Eigenschaft **`navigationType`** der {{domxref("NavigationTransition")}}-Schnittstelle gibt den Typ der laufenden Navigation zurück.

## Wert

Ein enumerierter Wert, der den Typ der laufenden Navigation repräsentiert.

Die möglichen Werte sind:

- `push`: Ein neuer Ort wird navigiert, wobei ein neuer Eintrag in die Verlaufsliste aufgenommen wird.
- `reload`: Der {{domxref("Navigation.currentEntry")}} wird neu geladen.
- `replace`: Der {{domxref("Navigation.currentEntry")}} wird durch einen neuen Verlaufseintrag ersetzt. Dieser neue Eintrag wird denselben {{domxref("NavigationHistoryEntry.key", "key")}} wiederverwenden, aber eine andere {{domxref("NavigationHistoryEntry.id", "id")}} zugewiesen bekommen.
- `traverse`: Der Browser navigiert von einem bestehenden Verlaufs-Eintrag zu einem anderen bestehenden Verlaufs-Eintrag.

## Beispiele

```js
console.log(navigation.transition.navigationType);
```

## Spezifikationen

{{Specifications}}

## Kompatibilität der Browser

{{Compat}}

## Siehe auch

- [Moderner clientseitiger Routing: die Navigation API](https://developer.chrome.com/docs/web-platform/navigation-api/)
- [Navigation API Erklärer](https://github.com/WICG/navigation-api/blob/main/README.md)
- Domenic Denicolas [Navigation API Live-Demo](https://gigantic-honored-octagon.glitch.me/)
