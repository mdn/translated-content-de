---
title: "NavigateEvent: userInitiated-Eigenschaft"
short-title: userInitiated
slug: Web/API/NavigateEvent/userInitiated
l10n:
  sourceCommit: 7e14795a6ef2bf5e760c315ce64800dd1cd98c29
---

{{APIRef("Navigation API")}}

Die **`userInitiated`** schreibgeschützte Eigenschaft des [`NavigateEvent`](/de/docs/Web/API/NavigateEvent)-Interfaces gibt `true` zurück, wenn die Navigation vom Benutzer initiiert wurde (z. B. durch Klicken auf einen Link, Absenden eines Formulars oder Drücken der "Zurück"/"Vorwärts"-Tasten des Browsers), andernfalls `false`.

> [!NOTE]
> Die Tabelle unter [Anhang: Navigationstypen](https://github.com/WICG/navigation-api#appendix-types-of-navigations) zeigt, welche Navigationstypen vom Benutzer initiiert werden.

## Wert

Ein boolescher Wert—`true`, wenn die Navigation vom Benutzer initiiert wird, andernfalls `false`.

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

- [Modernes client-seitiges Routing: die Navigation API](https://developer.chrome.com/docs/web-platform/navigation-api/)
- [Navigation API Erklärer](https://github.com/WICG/navigation-api/blob/main/README.md)
