---
title: "CSSNumericValue: parse()-statische Methode"
short-title: parse()
slug: Web/API/CSSNumericValue/parse_static
l10n:
  sourceCommit: a0f6bf6f7d148f368f6965255058df1ed1f43839
---

{{APIRef("CSS Typed OM")}}

Die **`parse()`**-statische Methode der
{{domxref("CSSNumericValue")}}-Schnittstelle wandelt einen Wertstring in ein Objekt um, dessen
Mitglieder aus dem Wert und den Einheiten bestehen.

## Syntax

```js-nolint
CSSNumericValue.parse(cssText)
```

### Parameter

- `cssText`
  - : ein String, der numerische und Einheitsbestandteile enthält.

### Rückgabewert

Ein {{domxref('CSSNumericValue')}}.

### Ausnahmen

- `SyntaxError` {{domxref("DOMException")}}
  - : TBD

## Beispiele

Das Folgende gibt ein {{domxref('CSSUnitValue')}}-Objekt zurück mit einer `unit`
Eigenschaft gleich `"px"` und einer `value`-Eigenschaft gleich
`42`.

```js
let numValue = CSSNumericValue.parse("42.0px");
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
