---
title: CSSStyleValue
slug: Web/API/CSSStyleValue
l10n:
  sourceCommit: ebb9a6421c24c4aff2fef3913527571441361cf0
---

{{APIRef("CSS Typed Object Model API")}}

Die **`CSSStyleValue`**-Schnittstelle des [CSS Typed Object Model API](/de/docs/Web/API/CSS_Object_Model#css_typed_object_model) ist die Basisklasse aller CSS-Werte, die über die Typed OM API zugänglich sind. Eine Instanz dieser Klasse kann überall dort verwendet werden, wo ein String erwartet wird.

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
  - : Setzt alle Vorkommen einer bestimmten CSS-Eigenschaft auf den angegebenen Wert und gibt ein Array von `CSSStyleValue`-Objekten zurück, die jeweils einen der gelieferten Werte enthalten.

## Instanzmethoden

- [`CSSStyleValue.toString()`](/de/docs/Web/API/CSSStyleValue/toString)
  - : Ein {{Glossary("stringifier", "Stringifier")}}, der den Wert als String im Standard-CSS-Textformat zurückgibt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
