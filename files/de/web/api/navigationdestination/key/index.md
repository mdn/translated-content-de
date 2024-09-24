---
title: "NavigationDestination: key property"
slug: Web/API/NavigationDestination/key
l10n:
  sourceCommit: ac7f942ac73066dcf643f02f8b9f969ccf547220
---

---
title: "NavigationDestination: key Eigenschaft"
short-title: Schlüssel
slug: Web/API/NavigationDestination/key
page-type: web-api-instance-property
status:

- experimental
browser-compat: api.NavigationDestination.key

---

{{APIRef("Navigation API")}}{{SeeCompatTable}}

Die schreibgeschützte Eigenschaft **`key`** der {{domxref("NavigationDestination")}}-Schnittstelle gibt den {{domxref("NavigationHistoryEntry.key", "key")}}-Wert des Ziel-{{domxref("NavigationHistoryEntry")}} zurück, wenn der {{domxref("NavigateEvent.navigationType")}} `traverse` ist, oder einen leeren String in anderen Fällen.

Der `key` ist ein einzigartiger, von der Benutzeragent-Software generierter Wert, der den Speicherplatz des Verlaufsobjekts in der Liste der Verlaufsobjekte darstellt und zur Navigation zu dieser Stelle im Verlauf über {{domxref("Navigation.traverseTo()")}} verwendet wird. Er wird von anderen Einträgen wiederverwendet, die den Eintrag in der Liste ersetzen (d. h. wenn der {{domxref("NavigateEvent.navigationType")}} `replace` ist).

## Wert

Ein String, der den `key` des Ziel-{{domxref("NavigationHistoryEntry")}} darstellt, oder ein leerer String.

## Beispiele

```js
navigation.addEventListener("navigate", (event) => {
  console.log(event.destination.key);
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Moderne client-seitige Routenerstellung: die Navigation API](https://developer.chrome.com/docs/web-platform/navigation-api/)
- [Navigation API Erklärer](https://github.com/WICG/navigation-api/blob/main/README.md)
- Domenic Denicolas [Live-Demo der Navigation API](https://gigantic-honored-octagon.glitch.me/)
