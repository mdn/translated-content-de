---
title: "NavigationHistoryEntry: sameDocument-Eigenschaft"
short-title: sameDocument
slug: Web/API/NavigationHistoryEntry/sameDocument
l10n:
  sourceCommit: 49bd8d27131e30c92c48f970c4cf9f07d4cb67e5
---

{{APIRef("Navigation API")}}{{SeeCompatTable}}

Die **`sameDocument`**-Schreibgeschützte Eigenschaft des [`NavigationHistoryEntry`](/de/docs/Web/API/NavigationHistoryEntry)-Interfaces gibt `true` zurück, wenn dieser Verlaufseintrag für das gleiche `document` wie der aktuelle [`Document`](/de/docs/Web/API/Document)-Wert ist und das aktuelle Dokument vollständig aktiv ist, oder `false` andernfalls.

## Wert

Ein Boolescher Wert.

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

- [Modernes Client-seitiges Routing: die Navigation API](https://developer.chrome.com/docs/web-platform/navigation-api/)
- [Navigation API Erklärung](https://github.com/WICG/navigation-api/blob/main/README.md)
- Domenic Denicolas [Navigation API Live-Demo](https://gigantic-honored-octagon.glitch.me/)
