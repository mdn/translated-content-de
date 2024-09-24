---
title: "NavigationHistoryEntry: id-Eigenschaft"
short-title: id
slug: Web/API/NavigationHistoryEntry/id
l10n:
  sourceCommit: 49bd8d27131e30c92c48f970c4cf9f07d4cb67e5
---

{{APIRef("Navigation API")}}{{SeeCompatTable}}

Die **`id`**-Eigenschaft, eine schreibgeschützte Eigenschaft der {{domxref("NavigationHistoryEntry")}}-Schnittstelle, gibt die `id` des Verlaufs-Eintrags zurück oder einen leeren String, wenn das aktuelle Dokument nicht vollständig aktiv ist. Dies ist ein von der Benutzeroberfläche generierter eindeutiger Wert, der immer einen bestimmten Verlaufs-Eintrag repräsentiert und nützlich ist, um ihn mit einer externen Ressource wie einem Speicher-Cache zu korrelieren.

Dies unterscheidet sich vom {{domxref("NavigationHistoryEntry.key", "key")}} eines Verlaufs-Eintrags. Der `key` ist ein von der Benutzeroberfläche generierter eindeutiger Wert, der den Platz des Verlaufs-Eintrags in der Eintragsliste und nicht den Eintrag selbst darstellt. Er wird verwendet, um diesen bestimmten Platz über {{domxref("Navigation.traverseTo()")}} zu navigieren. Der `key` wird von anderen Einträgen wiederverwendet, die den Eintrag in der Liste ersetzen (das heißt, wenn der {{domxref("NavigateEvent.navigationType")}} `replace` ist).

## Wert

Ein String, der die `id` des {{domxref("NavigationHistoryEntry")}} darstellt.

## Beispiele

```js
const current = navigation.currentEntry;
console.log(current.id);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Moderne clientseitige Routing: die Navigation API](https://developer.chrome.com/docs/web-platform/navigation-api/)
- [Erläuterung zur Navigation API](https://github.com/WICG/navigation-api/blob/main/README.md)
- Domenic Denicolas [Navigation API Live-Demo](https://gigantic-honored-octagon.glitch.me/)
