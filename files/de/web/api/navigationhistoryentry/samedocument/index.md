---
title: "NavigationHistoryEntry: sameDocument-Eigenschaft"
short-title: sameDocument
slug: Web/API/NavigationHistoryEntry/sameDocument
l10n:
  sourceCommit: 0496643fbc14a6bad2bf46c94ab27c541f6928ff
---

{{APIRef("Navigation API")}}{{SeeCompatTable}}

Die schreibgeschützte **`sameDocument`**-Eigenschaft der [`NavigationHistoryEntry`](/de/docs/Web/API/NavigationHistoryEntry)-Schnittstelle gibt `true` zurück, wenn dieser Verlaufseintrag für dasselbe `document` wie der aktuelle [`Document`](/de/docs/Web/API/Document)-Wert ist und das aktuelle Dokument vollständig aktiv ist, oder `false` andernfalls.

## Wert

Ein Boolean.

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

- [Modernes clientseitiges Routing: die Navigation API](https://developer.chrome.com/docs/web-platform/navigation-api/)
- [Navigation API Erklärung](https://github.com/WICG/navigation-api/blob/main/README.md)
