---
title: "NavigateEvent: userInitiated-Eigenschaft"
short-title: userInitiated
slug: Web/API/NavigateEvent/userInitiated
l10n:
  sourceCommit: cfb7587e3e3122630ad6cbd94d834ecadbe0a746
---

{{APIRef("Navigation API")}}{{SeeCompatTable}}

Die schreibgeschützte Eigenschaft **`userInitiated`** des {{domxref("NavigateEvent")}}-Interfaces gibt `true` zurück, wenn die Navigation vom Benutzer initiiert wurde (z.B. durch das Klicken auf einen Link, das Absenden eines Formulars oder das Drücken der "Zurück"/"Vorwärts"-Tasten des Browsers), oder `false` andernfalls.

> [!NOTE]
> Die Tabelle im Abschnitt [Anhang: Arten von Navigationen](https://github.com/WICG/navigation-api#appendix-types-of-navigations) zeigt, welche Navigationsarten vom Benutzer initiiert sind.

## Wert

Ein boolescher Wert—`true`, wenn die Navigation vom Benutzer initiiert wurde, `false`, wenn nicht.

## Beispiele

```js
navigation.addEventListener("navigate", (event) => {
  console.log(event.userInitiated);
});
```

## Spezifikationen

{{Specifications}}

## Kompatibilität der Browser

{{Compat}}

## Siehe auch

- [Moderne clientseitige Routings: die Navigation API](https://developer.chrome.com/docs/web-platform/navigation-api/)
- [Navigation API Erläuterung](https://github.com/WICG/navigation-api/blob/main/README.md)
- Domenic Denicolas [Navigation API Live-Demo](https://gigantic-honored-octagon.glitch.me/)
