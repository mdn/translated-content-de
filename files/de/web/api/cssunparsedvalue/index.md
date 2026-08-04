---
title: CSSUnparsedValue
slug: Web/API/CSSUnparsedValue
l10n:
  sourceCommit: dd7010ad7ca5647b43f68b66578835b974bf4e70
---

{{APIRef("CSS Typed Object Model API")}} {{AvailableInWorkers}}

Die **`CSSUnparsedValue`**-Schnittstelle der [CSS Typed Object Model API](/de/docs/Web/API/CSS_Object_Model) repräsentiert Eigenschaftswerte, die auf [benutzerdefinierte Eigenschaften](/de/docs/Web/CSS/Guides/Cascading_variables) verweisen.
Sie besteht aus einer Liste von Zeichenfolgenfragmenten und Variablenreferenzen.

Benutzerdefinierte Eigenschaften werden durch `CSSUnparsedValue` und {{cssxref("var", "var()")}}-Referenzen werden unter Verwendung von [`CSSVariableReferenceValue`](/de/docs/Web/API/CSSVariableReferenceValue) dargestellt.

{{InheritanceDiagram}}

## Konstruktor

- [`CSSUnparsedValue()`](/de/docs/Web/API/CSSUnparsedValue/CSSUnparsedValue)
  - : Erstellt ein neues `CSSUnparsedValue`-Objekt.

## Instanzeigenschaften

- [`CSSUnparsedValue.length`](/de/docs/Web/API/CSSUnparsedValue/length)
  - : Gibt die Anzahl der Elemente im `CSSUnparsedValue`-Objekt zurück.

## Instanzmethoden

_Erbt auch Methoden von seiner übergeordneten Schnittstelle, [`CSSStyleValue`](/de/docs/Web/API/CSSStyleValue)._

- [`CSSUnparsedValue.entries()`](/de/docs/Web/API/CSSUnparsedValue/entries)
  - : Gibt ein Array der eigenen aufzählbaren [Schlüssel-Wert]-Paare des gegebenen Objekts in der gleichen Reihenfolge zurück, wie sie von einer {{jsxref("Statements/for...in", "for...in")}}-Schleife bereitgestellt wird (der Unterschied besteht darin, dass eine for-in-Schleife auch Eigenschaften in der Prototypenkette aufzählt).
- [`CSSUnparsedValue.forEach()`](/de/docs/Web/API/CSSUnparsedValue/forEach)
  - : Führt eine bereitgestellte Funktion einmal für jedes Element des `CSSUnparsedValue`-Objekts aus.
- [`CSSUnparsedValue.keys()`](/de/docs/Web/API/CSSUnparsedValue/keys)
  - : Gibt ein neues _Array-Iterator_-Objekt zurück, das die Schlüssel für jeden Index im `CSSUnparsedValue`-Objekt enthält.
- [`CSSUnparsedValue.values()`](/de/docs/Web/API/CSSUnparsedValue/values)
  - : Gibt ein neues _Array-Iterator_-Objekt zurück, das die Werte für jeden Index im `CSSUnparsedValue`-Objekt enthält.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`CSSImageValue`](/de/docs/Web/API/CSSImageValue)
- [`CSSKeywordValue`](/de/docs/Web/API/CSSKeywordValue)
- [`CSSNumericValue`](/de/docs/Web/API/CSSNumericValue)
- [`CSSPositionValue`](/de/docs/Web/API/CSSPositionValue)
- [`CSSTransformValue`](/de/docs/Web/API/CSSTransformValue)
- [Verwendung des CSS Typed OM](/de/docs/Web/API/CSS_Typed_OM_API/Guide)
- [CSS Typed Object Model API](/de/docs/Web/API/CSS_Typed_OM_API)
