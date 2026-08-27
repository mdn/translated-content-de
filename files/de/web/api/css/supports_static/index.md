---
title: "CSS: supports() statische Methode"
short-title: supports()
slug: Web/API/CSS/supports_static
l10n:
  sourceCommit: 56f3d7018159127dbe92842413fb45d0aa7e8193
---

{{APIRef("CSSOM")}}

Die statische Methode **`CSS.supports()`** gibt einen booleschen Wert zurück, der angibt, ob der Browser ein bestimmtes CSS-Feature unterstützt oder nicht.

## Syntax

```js-nolint
CSS.supports(propertyName, value)
CSS.supports(supportCondition)
```

### Parameter

Es gibt zwei verschiedene Sätze von Parametern. Der erste ermöglicht es Ihnen, die Unterstützung eines _property-value_-Paares zu testen:

- `propertyName`
  - : Ein String, der den Namen der zu überprüfenden CSS-Eigenschaft enthält.
- `value`
  - : Ein String, der den Wert der zu überprüfenden CSS-Eigenschaft enthält.

Die zweite Syntax nimmt einen Parameter, der der Bedingung von {{cssxref("@supports")}} entspricht:

- `supportCondition`
  - : Ein String, der die zu überprüfende Bedingung enthält.

### Rückgabewert

`true`, wenn der Browser die Regel unterstützt, andernfalls `false`.

## Beispiele

In den folgenden Beispielen ist `result` ein boolescher Wert, der anzeigt, ob der Browser das gegebene CSS-Feature unterstützt.

```js
result = CSS.supports("text-decoration-style", "blink");
result = CSS.supports("display: flex");
result = CSS.supports("(--foo: red)");
result = CSS.supports("selector(:has(a))");
result = CSS.supports(
  "(transform-style: preserve) or (-moz-transform-style: preserve) or (-webkit-transform-style: preserve)",
);
```

Für weitere Beispiele und Syntaxmerkmale siehe die {{cssxref("@supports")}}-Regel.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die {{cssxref("@supports")}}-Regel, die die gleiche Funktionalität, aber auf eine deklarative Weise, ermöglicht.
- Die [`CSSSupportsRule`](/de/docs/Web/API/CSSSupportsRule) CSSOM-Klasse, die es Ihnen ermöglicht, {{cssxref("@supports")}}-Regeln zu manipulieren.
