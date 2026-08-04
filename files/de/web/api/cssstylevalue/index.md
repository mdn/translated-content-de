---
title: CSSStyleValue
slug: Web/API/CSSStyleValue
l10n:
  sourceCommit: dd7010ad7ca5647b43f68b66578835b974bf4e70
---

{{APIRef("CSS Typed Object Model API")}} {{AvailableInWorkers}}

Die **`CSSStyleValue`** Schnittstelle der [CSS Typed Object Model API](/de/docs/Web/API/CSS_Typed_OM_API) ist die Basisklasse aller CSS-Werte, die über die Typed OM API zugänglich sind. Eine Instanz dieser Klasse kann überall verwendet werden, wo ein String erwartet wird.

## Statische Methoden

- [`CSSStyleValue.parse()`](/de/docs/Web/API/CSSStyleValue/parse_static)
  - : Setzt eine spezifische CSS-Eigenschaft auf die angegebenen Werte und gibt den ersten Wert als `CSSStyleValue`-Objekt zurück.
- [`CSSStyleValue.parseAll()`](/de/docs/Web/API/CSSStyleValue/parseAll_static)
  - : Setzt alle Vorkommen einer spezifischen CSS-Eigenschaft auf den angegebenen Wert und gibt ein Array von `CSSStyleValue`-Objekten zurück, wobei jedes Objekt einen der bereitgestellten Werte enthält.

## Instanzmethoden

- [`CSSStyleValue.toString()`](/de/docs/Web/API/CSSStyleValue/toString)
  - : Ein {{Glossary("stringifier", "Stringifier")}}, der den Wert als String des standardmäßigen CSS-Textes formatiert zurückgibt.

## Schnittstellen basierend auf CSSStyleValue

- [`CSSImageValue`](/de/docs/Web/API/CSSImageValue)
- [`CSSKeywordValue`](/de/docs/Web/API/CSSKeywordValue)
- [`CSSNumericValue`](/de/docs/Web/API/CSSNumericValue)
- [`CSSPositionValue`](/de/docs/Web/API/CSSPositionValue)
- [`CSSTransformValue`](/de/docs/Web/API/CSSTransformValue)
- [`CSSUnparsedValue`](/de/docs/Web/API/CSSUnparsedValue)

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
