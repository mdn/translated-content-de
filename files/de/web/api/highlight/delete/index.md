---
title: "Highlight: delete()-Methode"
short-title: delete()
slug: Web/API/Highlight/delete
l10n:
  sourceCommit: 47ed48a36b456f8ea9ab6aaa5969c55d2912edcb
---

{{APIRef("CSS Custom Highlight API")}}

Die **`delete()`**-Methode der {{domxref("Highlight")}}-Schnittstelle entfernt ein angegebenes {{domxref("Range")}}-Objekt aus einem `Highlight`-Objekt.

`Highlight` ist ein {{jsxref("Set")}}-ähnliches Objekt, daher ist dies vergleichbar mit der Verwendung von {{jsxref("Set.delete()")}}.

## Syntax

```js-nolint
delete(range)
```

### Parameter

- `range`
  - : Das {{domxref("Range")}}-Objekt, das aus dem `Highlight` entfernt werden soll.

### Rückgabewert

Gibt `true` zurück, wenn `range` bereits in `Highlight` war; andernfalls `false`.

## Beispiele

Das folgende Codebeispiel zeigt, wie man ein neues Highlight mit zwei Bereichen erstellt und dann einen davon löscht:

```js
const range1 = new Range();
const range2 = new Range();

const highlight = new Highlight(range1, range2);
console.log(highlight.size); // 2

highlight.delete(range1);
console.log(highlight.size); // 1
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("css_custom_highlight_api", "Die CSS Custom Highlight API", "", "nocode")}}
- [CSS Custom Highlight API: Die Zukunft der Hervorhebung von Textbereichen im Web](https://css-tricks.com/css-custom-highlight-api-early-look/)
