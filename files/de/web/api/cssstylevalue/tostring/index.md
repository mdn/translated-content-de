---
title: "CSSStyleValue: toString() Methode"
short-title: toString()
slug: Web/API/CSSStyleValue/toString
l10n:
  sourceCommit: 285179734bb0505a755c76aa556b6cb12d81b643
---

{{APIRef("CSS Typed Object Model API")}} {{AvailableInWorkers}}

Die **`toString()`**-Methode der [`CSSStyleValue`](/de/docs/Web/API/CSSStyleValue)-Schnittstelle ist ein {{Glossary("stringifier", "Stringifier")}}, der den Wert formatiert als Zeichenkette von standardmäßigem CSS-Text zurückgibt.

## Syntax

```js-nolint
toString()
```

### Parameter

Keine.

### Rückgabewert

Eine Zeichenkette.

## Beschreibung

Die genaue Serialisierung des Objekts in eine Zeichenkette hängt davon ab, wie das `CSSStyleValue`-Objekt erhalten wurde:

- Wenn das Objekt durch das Parsen einer CSS-Zeichenkette erstellt wurde, wie z. B. mit [`CSSStyleValue.parse()`](/de/docs/Web/API/CSSStyleValue/parse_static), gibt die Methode die ursprüngliche Zeichenkette zurück, die geparst wurde.
- Wenn das Objekt direkt konstruiert wurde, wie z. B. mit einer [`CSS`-Fabrikfunktion](/de/docs/Web/API/CSS/factory_functions_static) oder einem Unterklassenkonstruktor, wird die zurückgegebene Zeichenkette gemäß den Serialisierungsregeln erstellt, die spezifisch für diese Unterklasse sind.
- Wenn das Objekt aus dem CSSOM gelesen wurde, wie z. B. mit [`Element.computedStyleMap()`](/de/docs/Web/API/Element/computedStyleMap) oder [`HTMLElement.attributeStyleMap`](/de/docs/Web/API/HTMLElement/attributeStyleMap), folgt die zurückgegebene Zeichenkette den CSSOM-Serialisierungsregeln.

Für weitere Informationen zu den Serialisierungsregeln siehe [Wann und wie Werte serialisiert werden](/de/docs/Web/API/CSS_Object_Model/CSS_value_serialization#when_and_how_values_are_serialized) in _CSS-Wertserialisierung_.

## Beispiele

### Grundlegende Verwendung

```js
// Parsed from a string: returns the original string
const length1 = CSSStyleValue.parse("42.0px");
length1.toString(); // "42.0px"

// Constructed directly with a CSS factory function: subclass-specific serialization
const length2 = CSS.px(42.0);
length2.toString(); // "42px"

// Read from the CSSOM: follows CSSOM serialization rules
const element = document.createElement("div");
element.style.width = "42.0px";
const length3 = element.attributeStyleMap.get("width");
length3.toString(); // "42px"
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung des CSS Typed OM](/de/docs/Web/API/CSS_Typed_OM_API/Guide)
- [`CSSStyleValue.parse()`](/de/docs/Web/API/CSSStyleValue/parse_static)
- [`CSSStyleValue.parseAll()`](/de/docs/Web/API/CSSStyleValue/parseAll_static)
