---
title: "CSS: supports()-Methode"
short-title: supports()
slug: Web/API/CSS/supports_static
l10n:
  sourceCommit: 4ab235391977478a8a5e56405138392c531e1ad7
---

{{APIRef("CSSOM")}}

Die statische Methode **`CSS.supports()`** gibt einen booleschen Wert zurück, der angibt, ob der Browser eine bestimmte CSS-Funktion unterstützt oder nicht.

## Syntax

```js-nolint
CSS.supports(propertyName, value)
CSS.supports(supportCondition)
```

### Parameter

Es gibt zwei unterschiedliche Parametergruppen. Die erste ermöglicht das Testen der Unterstützung eines _Eigenschaft-Wert_-Paares:

- `propertyName`
  - : Ein String, der den Namen der zu überprüfenden CSS-Eigenschaft enthält.
- `value`
  - : Ein String, der den Wert der zu überprüfenden CSS-Eigenschaft enthält.

Die zweite Syntax nimmt einen Parameter an, der der Bedingung von {{cssxref("@supports")}} entspricht:

- `supportCondition`
  - : Ein String, der die zu überprüfende Bedingung enthält.

### Rückgabewert

`true`, wenn der Browser die Regel unterstützt, andernfalls `false`.

## Beispiele

In den folgenden Beispielen ist `result` ein boolescher Wert, der angibt, ob der Browser die gegebene CSS-Funktion unterstützt.

```js
result = CSS.supports("text-decoration-style", "blink");
result = CSS.supports("display: flex");
result = CSS.supports("(--foo: red)");
result = CSS.supports("selector(:has(a))");
result = CSS.supports(
  "(transform-style: preserve) or (-moz-transform-style: preserve) or (-webkit-transform-style: preserve)",
);
```

Für mehr Beispiele und Syntax-Funktionen siehe die {{cssxref("@supports")}}-Regel.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die {{cssxref("@supports")}}-Regel, die dieselbe Funktionalität auf deklarative Weise ermöglicht.
- Die {{domxref("CSSSupportsRule")}}-CSSOM-Klasse, die das Manipulieren von {{cssxref("@supports")}}-Regeln erlaubt.
