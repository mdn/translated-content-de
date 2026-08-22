---
title: "CSS: supports() statische Methode"
short-title: supports()
slug: Web/API/CSS/supports_static
l10n:
  sourceCommit: b2c48c8b7c097aeab4bc15a388c913f466f40e25
---

{{APIRef("CSSOM")}}

Die statische Methode **`CSS.supports()`** gibt einen booleschen Wert zurück, der angibt, ob der Browser ein bestimmtes CSS-Feature unterstützt oder nicht.

## Syntax

```js-nolint
CSS.supports(propertyName, value)
CSS.supports(supportCondition)
```

### Parameter

Es gibt zwei unterschiedliche Sets von Parametern. Das erste ermöglicht es, die Unterstützung eines _Property-Value_-Paares zu testen:

- `propertyName`
  - : Ein Zeichenfolge, die den Namen der zu überprüfenden CSS-Eigenschaft enthält.
- `value`
  - : Ein Zeichenfolge, die den Wert der zu überprüfenden CSS-Eigenschaft enthält.

Die zweite Syntax nimmt einen Parameter an, der der Bedingung von {{cssxref("@supports")}} entspricht:

- `supportCondition`
  - : Ein Zeichenfolge, die die zu überprüfende Bedingung enthält.

### Rückgabewert

`true`, wenn der Browser die Regel unterstützt, andernfalls `false`.

## Beispiele

In den folgenden Beispielen ist `result` ein boolescher Wert, der anzeigt, ob der Browser das angegebene CSS-Feature unterstützt.

```js
result = CSS.supports("text-decoration-style", "blink");
result = CSS.supports("display: flex");
result = CSS.supports("(--foo: red)");
result = CSS.supports("selector(:has(a))");
result = CSS.supports(
  "(transform-style: preserve) or (-moz-transform-style: preserve) or (-webkit-transform-style: preserve)",
);
```

Für weitere Beispiele und Syntaxfunktionen siehe die {{cssxref("@supports")}}-Regel.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die {{cssxref("@supports")}}-Regel, die dieselbe Funktionalität auf deklarative Weise ermöglicht.
- Die [`CSSSupportsRule`](/de/docs/Web/API/CSSSupportsRule) CSSOM-Klasse, die Ihnen erlaubt, {{cssxref("@supports")}}-Regeln zu manipulieren.
