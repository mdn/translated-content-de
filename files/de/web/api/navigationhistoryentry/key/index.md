---
title: "NavigationHistoryEntry: key-Eigenschaft"
short-title: key
slug: Web/API/NavigationHistoryEntry/key
l10n:
  sourceCommit: 49bd8d27131e30c92c48f970c4cf9f07d4cb67e5
---

{{APIRef("Navigation API")}}{{SeeCompatTable}}

Die **`key`** Eigenschaft des {{domxref("NavigationHistoryEntry")}}-Interfaces gibt den `key` des Verlaufs-Eintrags zurück oder einen leeren String, wenn das aktuelle Dokument nicht vollständig aktiv ist. Dies ist ein einzigartiger, vom UA generierter Wert, der den Platz des Verlaufs-Eintrags in der Eintragsliste darstellt. Er wird verwendet, um zu diesem speziellen Platz über {{domxref("Navigation.traverseTo()")}} zu navigieren. Der `key` wird von anderen Einträgen wiederverwendet, die den Eintrag in der Liste ersetzen (das heißt, wenn der {{domxref("NavigateEvent.navigationType")}} `replace` ist).

Dies unterscheidet sich von der {{domxref("NavigationHistoryEntry.id", "id")}} eines Verlaufs-Eintrags. Die `id` ist ein einzigartiger, vom UA generierter Wert, der immer einen spezifischen Verlaufs-Eintrag und nicht seinen Platz in der Eintragsliste darstellt. Dies ist nützlich, um ihn mit einer externen Ressource wie einem Speicher-Cache zu korrelieren.

## Wert

Ein String, der den `key` des {{domxref("NavigationHistoryEntry")}} darstellt.

## Beispiele

### Grundlegende Verwendung

```js
const current = navigation.currentEntry;
console.log(current.key);
```

### Einrichten eines Startseiten-Buttons

```js
function initHomeBtn() {
  // Holen Sie sich den Schlüssel des zuerst geladenen Eintrags,
  // damit der Benutzer immer zu dieser Ansicht zurückkehren kann.
  const { key } = navigation.currentEntry;
  backToHomeButton.onclick = () => {
    navigation.traverseTo(key);
  };
}
// Abfangen von Navigations-Events, wie Link-Klicks, und
// sie durch Single-Page-Navigationen ersetzen
navigation.addEventListener("navigate", (event) => {
  event.intercept({
    async handler() {
      // Navigieren Sie zu einer anderen Ansicht,
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

- [Moderne clientseitige Routing: die Navigation API](https://developer.chrome.com/docs/web-platform/navigation-api/)
- [Navigation API Erklärer](https://github.com/WICG/navigation-api/blob/main/README.md)
- Domenic Denicolas [Live-Demo der Navigation API](https://gigantic-honored-octagon.glitch.me/)
