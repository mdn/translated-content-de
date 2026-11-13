---
title: "CSSFunctionRule: Methode getParameters()"
short-title: getParameters()
slug: Web/API/CSSFunctionRule/getParameters
l10n:
  sourceCommit: 25abd448c8a088e9f333360dea0adbe8143e6b86
---

{{ APIRef("CSSOM") }}

Die Methode **`getParameters()`** der Schnittstelle [`CSSFunctionRule`](/de/docs/Web/API/CSSFunctionRule) gibt ein Array von Objekten zurück, die die Parameter der benutzerdefinierten Funktion darstellen.

## Syntax

```js-nolint
getParameters()
```

### Parameter

Keine.

### Rückgabewert

Ein Array von Objekten mit den folgenden Eigenschaften:

- `name`
  - : Ein String mit dem Namen des Funktionsparameters.
- `type`
  - : Ein String mit dem Datentyp des Parameters oder `*`, wenn kein Datentyp angegeben wurde.
- `defaultValue`
  - : Ein String mit dem Standardwert des Parameters oder `null`, wenn kein Standardwert angegeben wurde.

Wenn in der zugehörigen {{cssxref("@function")}}-At-Regel keine Parameter angegeben wurden, wird ein leeres Array zurückgegeben.

## Beispiele

Ein Beispiel finden Sie auf der Referenzseite zu [`CSSFunctionRule`](/de/docs/Web/API/CSSFunctionRule).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("@function")}}
