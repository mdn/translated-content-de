---
title: "Highlight: has()-Methode"
short-title: has()
slug: Web/API/Highlight/has
l10n:
  sourceCommit: 47ed48a36b456f8ea9ab6aaa5969c55d2912edcb
---

{{APIRef("CSS Custom Highlight API")}}

Die **`has()`**-Methode der {{domxref("Highlight")}}-Schnittstelle gibt einen Boolean zurück, der angibt, ob ein {{domxref("Range")}}-Objekt in einem `Highlight`-Objekt existiert oder nicht.

`Highlight` ist ein {{jsxref("Set")}}-ähnliches Objekt, daher ist dies ähnlich wie die Verwendung von {{jsxref("Set.has()")}}.

## Syntax

```js-nolint
has(range)
```

### Parameter

- `range`
  - : Das `Range`-Objekt, dessen Vorhandensein im `Highlight`-Objekt getestet werden soll.

### Rückgabewert

Gibt `true` zurück, wenn der angegebene Bereich im `Highlight`-Objekt existiert; andernfalls `false`.

## Beispiele

Der untenstehende Codeausschnitt erstellt zwei Bereiche und ein Highlight-Objekt, das einen davon enthält. Der Code verwendet dann die `has()`-Methode, um zu überprüfen, ob jeder Bereich im Highlight existiert:

```js
const range1 = new Range();
const range2 = new Range();
const myHighlight = new Highlight(range1);

myHighlight.has(range1); // true
myHighlight.has(range2); // false
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("css_custom_highlight_api", "Die CSS Custom Highlight API", "", "nocode")}}
- [CSS Custom Highlight API: Die Zukunft der Textbereichsmarkierung im Web](https://css-tricks.com/css-custom-highlight-api-early-look/)
