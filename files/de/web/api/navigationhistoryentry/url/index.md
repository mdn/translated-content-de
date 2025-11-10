---
title: "NavigationHistoryEntry: url-Eigenschaft"
short-title: url
slug: Web/API/NavigationHistoryEntry/url
l10n:
  sourceCommit: 0496643fbc14a6bad2bf46c94ab27c541f6928ff
---

{{APIRef("Navigation API")}}{{SeeCompatTable}}

Die **`url`**-Schreibgeschützte Eigenschaft der [`NavigationHistoryEntry`](/de/docs/Web/API/NavigationHistoryEntry)-Schnittstelle gibt die absolute URL dieses Verlaufs-Eintrags zurück. Wenn der Eintrag einem anderen Dokument als dem aktuellen entspricht (wie zum Beispiel wenn die Eigenschaft `sameDocument` `false` ist) und dieses Dokument mit einem {{httpheader("Referrer-Policy")}}-Header mit dem Wert `no-referrer` oder `origin` abgerufen wurde, gibt die Eigenschaft `null` zurück. Wenn das aktuelle Dokument nicht vollständig aktiv ist, wird ein leerer String zurückgegeben.

## Wert

Ein String, der die URL oder `null` darstellt.

## Beispiele

```js
const current = navigation.currentEntry;
console.log(current.url);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Moderne clientseitige Routings: die Navigation API](https://developer.chrome.com/docs/web-platform/navigation-api/)
- [Erläuterung zur Navigation API](https://github.com/WICG/navigation-api/blob/main/README.md)
