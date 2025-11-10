---
title: "NavigateEvent: userInitiated-Eigenschaft"
short-title: userInitiated
slug: Web/API/NavigateEvent/userInitiated
l10n:
  sourceCommit: 0496643fbc14a6bad2bf46c94ab27c541f6928ff
---

{{APIRef("Navigation API")}}{{SeeCompatTable}}

Die **`userInitiated`** schreibgeschützte Eigenschaft der [`NavigateEvent`](/de/docs/Web/API/NavigateEvent)-Schnittstelle gibt `true` zurück, wenn die Navigation vom Benutzer initiiert wurde (z.B. durch Klicken auf einen Link, Absenden eines Formulars oder Drücken der "Zurück"/"Vorwärts"-Buttons im Browser), andernfalls `false`.

> [!NOTE]
> Die Tabelle unter [Anhang: Arten von Navigationen](https://github.com/WICG/navigation-api#appendix-types-of-navigations) zeigt, welche Navigationstypen vom Benutzer initiiert sind.

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

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Moderne clientseitige Routenführung: die Navigation API](https://developer.chrome.com/docs/web-platform/navigation-api/)
- [Navigation API Erläuterung](https://github.com/WICG/navigation-api/blob/main/README.md)
