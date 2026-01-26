---
title: "NavigationHistoryEntry: sameDocument-Eigenschaft"
short-title: sameDocument
slug: Web/API/NavigationHistoryEntry/sameDocument
l10n:
  sourceCommit: 7e14795a6ef2bf5e760c315ce64800dd1cd98c29
---

{{APIRef("Navigation API")}}

Die schreibgeschützte Eigenschaft **`sameDocument`** der [`NavigationHistoryEntry`](/de/docs/Web/API/NavigationHistoryEntry)-Schnittstelle gibt `true` zurück, wenn dieser Verlaufs-Eintrag für dasselbe `document` wie der aktuelle [`Document`](/de/docs/Web/API/Document)-Wert ist und das aktuelle Dokument voll aktiv ist, oder andernfalls `false`.

## Wert

Ein boolescher Wert.

## Beispiele

```js
const current = navigation.currentEntry;
console.log(current.sameDocument);
// Will always return true
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Modernes client-seitiges Routing: die Navigation API](https://developer.chrome.com/docs/web-platform/navigation-api/)
- [Dokumentation zur Navigation API](https://github.com/WICG/navigation-api/blob/main/README.md)
