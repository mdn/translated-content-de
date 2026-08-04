---
title: CSSStyleValue
slug: Web/API/CSSStyleValue
l10n:
  sourceCommit: 285179734bb0505a755c76aa556b6cb12d81b643
---

{{APIRef("CSS Typed Object Model API")}} {{AvailableInWorkers}}

Das **`CSSStyleValue`** Interface der [CSS Typed Object Model API](/de/docs/Web/API/CSS_Typed_OM_API) ist die Basisklasse aller über die Typed OM API zugänglichen CSS-Werte.
Eine Instanz dieser Klasse kann überall verwendet werden, wo ein String erwartet wird.

## Schnittstellen basierend auf CSSStyleValue

Unterhalb finden Sie eine Liste von Schnittstellen, die auf dem `CSSStyleValue` Interface basieren.

- [`CSSImageValue`](/de/docs/Web/API/CSSImageValue)
- [`CSSKeywordValue`](/de/docs/Web/API/CSSKeywordValue)
- [`CSSNumericValue`](/de/docs/Web/API/CSSNumericValue)
- [`CSSPositionValue`](/de/docs/Web/API/CSSPositionValue)
- [`CSSTransformValue`](/de/docs/Web/API/CSSTransformValue)
- [`CSSUnparsedValue`](/de/docs/Web/API/CSSUnparsedValue)

## Statische Methoden

- [`CSSStyleValue.parse()`](/de/docs/Web/API/CSSStyleValue/parse_static)
  - : Setzt eine bestimmte CSS-Eigenschaft auf die angegebenen Werte und gibt den ersten Wert als ein `CSSStyleValue` Objekt zurück.
- [`CSSStyleValue.parseAll()`](/de/docs/Web/API/CSSStyleValue/parseAll_static)
  - : Setzt alle Vorkommen einer bestimmten CSS-Eigenschaft auf den angegebenen Wert und gibt ein Array von `CSSStyleValue` Objekten zurück, das jeweils einen der übergebenen Werte enthält.

## Instanzmethoden

- [`CSSStyleValue.toString()`](/de/docs/Web/API/CSSStyleValue/toString)
  - : Ein {{Glossary("stringifier", "Stringifier")}}, der den Wert formatiert als String im Standard-CSS-Text zurückgibt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
