---
title: "NavigationHistoryEntry: url Eigenschaft"
short-title: url
slug: Web/API/NavigationHistoryEntry/url
l10n:
  sourceCommit: 73b2b6ee411ac094b9fc57dafac6f9c232fc20d9
---

{{APIRef("Navigation API")}}{{SeeCompatTable}}

Die **`url`** schreibgeschützte Eigenschaft des [`NavigationHistoryEntry`](/de/docs/Web/API/NavigationHistoryEntry) Interface gibt die absolute URL dieses Verlaufseintrags zurück. Wenn der Eintrag einem anderen Dokument als dem aktuellen entspricht (wie wenn die Eigenschaft `sameDocument` `false` ist), und dieses Dokument mit einem {{httpheader("Referrer-Policy")}} Header, der auf `no-referrer` oder `origin` gesetzt ist, abgerufen wurde, gibt die Eigenschaft `null` zurück. Wenn das aktuelle Dokument nicht vollständig aktiv ist, wird ein leerer String zurückgegeben.

## Wert

Ein String, der die URL darstellt, oder `null`.

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

- [Moderne client-seitige Navigation: die Navigation API](https://developer.chrome.com/docs/web-platform/navigation-api/)
- [Navigation API Erklärung](https://github.com/WICG/navigation-api/blob/main/README.md)
- Domenic Denicolas [Navigation API Live-Demo](https://gigantic-honored-octagon.glitch.me/)
