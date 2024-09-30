---
title: "CSS: supports() statische Methode"
short-title: supports()
slug: Web/API/CSS/supports_static
l10n:
  sourceCommit: 4ab235391977478a8a5e56405138392c531e1ad7
---

{{APIRef("CSSOM")}}

Die **`CSS.supports()`** statische Methode gibt einen booleschen Wert zurück, der angibt, ob der Browser ein bestimmtes CSS-Feature unterstützt oder nicht.

## Syntax

```js-nolint
CSS.supports(propertyName, value)
CSS.supports(supportCondition)
```

### Parameter

Es gibt zwei unterschiedliche Sätze von Parametern. Der erste ermöglicht es, die Unterstützung eines _Eigenschaft-Wert_-Paars zu testen:

- `propertyName`
  - : Ein String, der den Namen der zu überprüfenden CSS-Eigenschaft enthält.
- `value`
  - : Ein String, der den Wert der zu überprüfenden CSS-Eigenschaft enthält.

Die zweite Syntax erfordert einen Parameter, der der Bedingung von {{cssxref("@supports")}} entspricht:

- `supportCondition`
  - : Ein String, der die zu überprüfende Bedingung enthält.

### Rückgabewert

`true`, wenn der Browser die Regel unterstützt, andernfalls `false`.

## Beispiele

In den folgenden Beispielen ist `result` ein boolescher Wert, der angibt, ob der Browser das gegebene CSS-Feature unterstützt.

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

- Die {{cssxref("@supports")}}-Regel, die die gleiche Funktionalität auf deklarative Weise ermöglicht.
- Die [`CSSSupportsRule`](/de/docs/Web/API/CSSSupportsRule) CSSOM-Klasse, die es ermöglicht, {{cssxref("@supports")}}-Regeln zu manipulieren.
