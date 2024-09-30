---
title: "NavigationHistoryEntry: sameDocument-Eigenschaft"
short-title: sameDocument
slug: Web/API/NavigationHistoryEntry/sameDocument
l10n:
  sourceCommit: 49bd8d27131e30c92c48f970c4cf9f07d4cb67e5
---

{{APIRef("Navigation API")}}{{SeeCompatTable}}

Die schreibgeschützte Eigenschaft **`sameDocument`** der Schnittstelle [`NavigationHistoryEntry`](/de/docs/Web/API/NavigationHistoryEntry) gibt `true` zurück, wenn dieser Verlaufseintrag für dasselbe `document` wie der aktuelle [`Document`](/de/docs/Web/API/Document)-Wert ist und das aktuelle Dokument vollständig aktiv ist, andernfalls `false`.

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

- [Moderne client-seitige Routings: die Navigation API](https://developer.chrome.com/docs/web-platform/navigation-api/)
- [Navigation API Erklärer](https://github.com/WICG/navigation-api/blob/main/README.md)
- Domenic Denicolas [Navigation API Live-Demo](https://gigantic-honored-octagon.glitch.me/)
