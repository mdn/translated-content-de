---
title: "Navigation: currentEntry-Eigenschaft"
short-title: currentEntry
slug: Web/API/Navigation/currentEntry
l10n:
  sourceCommit: ef75c1741b450c2331204be5563ee964ad5f4c48
---

{{APIRef("Navigation API")}}{{SeeCompatTable}}

Die **`currentEntry`** schreibgeschützte Eigenschaft des {{domxref("Navigation")}}-Interfaces gibt ein {{domxref("NavigationHistoryEntry")}}-Objekt zurück, das den Ort repräsentiert, zu dem der Benutzer momentan navigiert ist.

## Wert

Ein {{domxref("NavigationHistoryEntry")}}-Objekt.

## Beispiele

```js
function initHomeBtn() {
  // Holen Sie den Schlüssel des zuerst geladenen Eintrags,
  // damit der Benutzer immer zu dieser Ansicht zurückkehren kann.
  const { key } = navigation.currentEntry;
  backToHomeButton.onclick = () => {
    navigation.traverseTo(key);
  };
}
// Abfangen von Navigationsereignissen, wie z.B. Link-Klicks, und
// sie durch einseitige Navigationen ersetzen
navigation.addEventListener("navigate", (event) => {
  event.intercept({
    async handler() {
      // Zu einer anderen Ansicht navigieren,
      // aber der "Home"-Button wird immer funktionieren.
    },
  });
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Moderne clientseitige Navigation: die Navigation-API](https://developer.chrome.com/docs/web-platform/navigation-api/)
- [Navigation API Erklärer](https://github.com/WICG/navigation-api/blob/main/README.md)
- Domenic Denicolas [Navigation API Live-Demo](https://gigantic-honored-octagon.glitch.me/)
