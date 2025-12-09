---
title: "NavigateEvent: userInitiated-Eigenschaft"
short-title: userInitiated
slug: Web/API/NavigateEvent/userInitiated
l10n:
  sourceCommit: 06ab986fc58ffb4e12b9f9962ee3c2783ce1290b
---

{{APIRef("Navigation API")}}

Die schreibgeschützte **`userInitiated`**-Eigenschaft des [`NavigateEvent`](/de/docs/Web/API/NavigateEvent)-Interfaces gibt `true` zurück, wenn die Navigation vom Benutzer initiiert wurde (z. B. durch Klicken auf einen Link, Absenden eines Formulars oder Drücken der "Zurück"/"Vorwärts"-Schaltflächen des Browsers), andernfalls `false`.

> [!NOTE]
> Die Tabelle unter [Anhang: Arten von Navigationen](https://github.com/WICG/navigation-api#appendix-types-of-navigations) zeigt, welche Navigationstypen vom Benutzer initiiert werden.

## Wert

Ein boolescher Wert—`true`, wenn die Navigation vom Benutzer initiiert wurde, `false`, wenn nicht.

## Beispiele

### Abrufen von `userInitiated` für ein Ereignis

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

- [Moderne clientseitige Routings: die Navigation API](https://developer.chrome.com/docs/web-platform/navigation-api/)
- [Navigation API Erklärung](https://github.com/WICG/navigation-api/blob/main/README.md)
