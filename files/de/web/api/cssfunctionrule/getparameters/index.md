---
title: "CSSFunctionRule: Methode getParameters()"
short-title: getParameters()
slug: Web/API/CSSFunctionRule/getParameters
l10n:
  sourceCommit: 792888cd76b95a986a38d6a48bece464731dda51
---

{{ APIRef("CSSOM") }}

Die **`getParameters()`**-Methode der [`CSSFunctionRule`](/de/docs/Web/API/CSSFunctionRule)-Schnittstelle gibt ein Array von Objekten zurück, die die Parameter der benutzerdefinierten Funktion darstellen.

## Syntax

```js-nolint
getParameters()
```

### Parameter

Keine.

### Rückgabewert

Ein Array von Objekten, das die folgenden Eigenschaften enthält:

- `name`
  - : Ein String, der den Namen des Funktionsparameters darstellt.
- `type`
  - : Ein String, der den Datentyp des Parameters darstellt, oder `*`, wenn kein Datentyp angegeben wurde.
- `defaultValue`
  - : Ein String, der den Standardwert des Parameters darstellt, oder `null`, wenn kein Standardwert angegeben wurde.

Wenn im zugehörigen {{cssxref("@function")}}-At-Regel keine Parameter angegeben wurden, wird ein leeres Array zurückgegeben.

## Beispiele

Siehe die Hauptreferenzseite von [`CSSFunctionRule`](/de/docs/Web/API/CSSFunctionRule) für ein Beispiel.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("@function")}}
