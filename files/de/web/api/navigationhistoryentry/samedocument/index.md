---
title: "NavigationHistoryEntry: sameDocument-Eigenschaft"
short-title: sameDocument
slug: Web/API/NavigationHistoryEntry/sameDocument
l10n:
  sourceCommit: 49bd8d27131e30c92c48f970c4cf9f07d4cb67e5
---

{{APIRef("Navigation API")}}{{SeeCompatTable}}

Die **`sameDocument`** schreibgeschützte Eigenschaft des {{domxref("NavigationHistoryEntry")}} Interfaces gibt `true` zurück, wenn dieser Verlaufseintrag für dasselbe `document` wie der aktuelle {{domxref("Document")}}-Wert ist und das aktuelle Dokument vollständig aktiv ist, andernfalls `false`.

## Wert

Ein boolean.

## Beispiele

```js
const current = navigation.currentEntry;
console.log(current.sameDocument);
// Gibt immer true zurück
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Modernes clientseitiges Routing: die Navigation API](https://developer.chrome.com/docs/web-platform/navigation-api/)
- [Erklärung der Navigation API](https://github.com/WICG/navigation-api/blob/main/README.md)
- Domenic Denicolas [Live-Demo der Navigation API](https://gigantic-honored-octagon.glitch.me/)
