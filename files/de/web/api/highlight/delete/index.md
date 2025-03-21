---
title: "Highlight: delete()-Methode"
short-title: delete()
slug: Web/API/Highlight/delete
l10n:
  sourceCommit: 47ed48a36b456f8ea9ab6aaa5969c55d2912edcb
---

{{APIRef("CSS Custom Highlight API")}}

Die **`delete()`**-Methode der [`Highlight`](/de/docs/Web/API/Highlight)-Schnittstelle entfernt ein angegebenes [`Range`](/de/docs/Web/API/Range)-Objekt aus einem `Highlight`-Objekt.

`Highlight` ist ein {{jsxref("Set")}}-ähnliches Objekt, daher ist dies ähnlich wie die Verwendung von {{jsxref("Set.delete()")}}.

## Syntax

```js-nolint
delete(range)
```

### Parameter

- `range`
  - : Das [`Range`](/de/docs/Web/API/Range)-Objekt, das aus dem `Highlight` entfernt werden soll.

### Rückgabewert

Gibt `true` zurück, wenn `range` bereits im `Highlight` war; andernfalls `false`.

## Beispiele

Der folgende Codeausschnitt zeigt, wie Sie ein neues Highlight mit zwei Bereichen erstellen und dann einen davon löschen:

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

- [Die CSS Custom Highlight API](/de/docs/Web/API/CSS_Custom_Highlight_API)
- [CSS Custom Highlight API: Die Zukunft des Hervorhebens von Textbereichen im Web](https://css-tricks.com/css-custom-highlight-api-early-look/)
