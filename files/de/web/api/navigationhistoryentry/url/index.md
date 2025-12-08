---
title: "NavigationHistoryEntry: url-Eigenschaft"
short-title: url
slug: Web/API/NavigationHistoryEntry/url
l10n:
  sourceCommit: 7e14795a6ef2bf5e760c315ce64800dd1cd98c29
---

{{APIRef("Navigation API")}}

Die **`url`**-Schreibgeschützte Eigenschaft des [`NavigationHistoryEntry`](/de/docs/Web/API/NavigationHistoryEntry)-Interfaces gibt die absolute URL dieses Verlaufs-Eintrags zurück. Wenn der Eintrag einem anderen Dokument als dem aktuellen entspricht (wie wenn die `sameDocument`-Eigenschaft `false` ist), und dieses Dokument mit einem {{httpheader("Referrer-Policy")}}-Header abgerufen wurde, der auf `no-referrer` oder `origin` gesetzt ist, gibt die Eigenschaft `null` zurück. Wenn das aktuelle Dokument nicht vollständig aktiv ist, gibt es einen leeren String zurück.

## Wert

Ein String, der die URL repräsentiert, oder `null`.

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

- [Modernes clientseitiges Routing: die Navigation API](https://developer.chrome.com/docs/web-platform/navigation-api/)
- [Navigation API Erklärung](https://github.com/WICG/navigation-api/blob/main/README.md)
