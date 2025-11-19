---
title: "CSSFunctionRule: getParameters()-Methode"
short-title: getParameters()
slug: Web/API/CSSFunctionRule/getParameters
l10n:
  sourceCommit: bb55d1b729e6d8fd2eea3f1f9b402f6788a6d1d9
---

{{ APIRef("CSSOM") }}{{SeeCompatTable}}

Die **`getParameters()`**-Methode des [`CSSFunctionRule`](/de/docs/Web/API/CSSFunctionRule)-Interfaces gibt ein Array von Objekten zurück, die die Parameter der benutzerdefinierten Funktion darstellen.

## Syntax

```js-nolint
getParameters()
```

### Parameter

Keine.

### Rückgabewert

Ein Array von Objekten mit den folgenden Eigenschaften:

- `name`
  - : Ein String, der den Namen des Funktionsparameters darstellt.
- `type`
  - : Ein String, der den Datentyp des Parameters darstellt, oder `*`, wenn kein Datentyp angegeben wurde.
- `defaultValue`
  - : Ein String, der den Standardwert des Parameters darstellt, oder `null`, wenn kein Standardwert angegeben wurde.

Wenn keine Parameter in der zugehörigen {{cssxref("@function")}}-At-Regel angegeben wurden, wird ein leeres Array zurückgegeben.

## Beispiele

Sehen Sie sich die Hauptreferenzseite [`CSSFunctionRule`](/de/docs/Web/API/CSSFunctionRule) für ein Beispiel an.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("@function")}}
