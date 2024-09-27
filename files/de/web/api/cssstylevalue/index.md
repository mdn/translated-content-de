---
title: CSSStyleValue
slug: Web/API/CSSStyleValue
l10n:
  sourceCommit: 32305cc3cf274fbfdcc73a296bbd400a26f38296
---

{{APIRef("CSS Typed Object Model API")}}

Die **`CSSStyleValue`**-Schnittstelle der [CSS Typed Object Model API](/de/docs/Web/API/CSS_Object_Model#css_typed_object_model) ist die Basisklasse aller CSS-Werte, die über die Typed OM-API zugänglich sind. Eine Instanz dieser Klasse kann überall dort verwendet werden, wo ein String erwartet wird.

## Schnittstellen basierend auf CSSStyleValue

Nachfolgend finden Sie eine Liste von Schnittstellen, die auf der `CSSStyleValue`-Schnittstelle basieren.

- [`CSSImageValue`](/de/docs/Web/API/CSSImageValue)
- [`CSSKeywordValue`](/de/docs/Web/API/CSSKeywordValue)
- [`CSSNumericValue`](/de/docs/Web/API/CSSNumericValue)
- [`CSSPositionValue`](/de/docs/Web/API/CSSPositionValue)
- [`CSSTransformValue`](/de/docs/Web/API/CSSTransformValue)
- [`CSSUnparsedValue`](/de/docs/Web/API/CSSUnparsedValue)

## Statische Methoden

- [`CSSStyleValue.parse()`](/de/docs/Web/API/CSSStyleValue/parse_static)
  - : Setzt eine bestimmte CSS-Eigenschaft auf die angegebenen Werte und gibt den ersten Wert als `CSSStyleValue`-Objekt zurück.
- [`CSSStyleValue.parseAll()`](/de/docs/Web/API/CSSStyleValue/parseAll_static)
  - : Setzt alle Vorkommen einer bestimmten CSS-Eigenschaft auf den angegebenen Wert und gibt ein Array von `CSSStyleValue`-Objekten zurück, von denen jedes einen der gelieferten Werte enthält.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
