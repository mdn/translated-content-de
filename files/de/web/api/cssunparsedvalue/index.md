---
title: CSSUnparsedValue
slug: Web/API/CSSUnparsedValue
l10n:
  sourceCommit: ecc46f2c8d6e09f0aa6e1b3f5194abfcf462e603
---

{{APIRef("CSS Typed OM")}}

Die Schnittstelle **`CSSUnparsedValue`** des [CSS Typed Object Model API](/de/docs/Web/API/CSS_Object_Model) repräsentiert Eigenschaftswerte, die auf [benutzerdefinierte Eigenschaften](/de/docs/Web/CSS/CSS_cascading_variables) verweisen. Sie besteht aus einer Liste von Zeichenkettenfragmenten und Variablenreferenzen.

Benutzerdefinierte Eigenschaften werden durch `CSSUnparsedValue` dargestellt und {{cssxref("var", "var()")}}-Referenzen werden unter Verwendung von [`CSSVariableReferenceValue`](/de/docs/Web/API/CSSVariableReferenceValue) dargestellt.

{{InheritanceDiagram}}

## Konstruktor

- [`CSSUnparsedValue()`](/de/docs/Web/API/CSSUnparsedValue/CSSUnparsedValue)
  - : Erstellt ein neues `CSSUnparsedValue`-Objekt.

## Instanzeigenschaften

- [`CSSUnparsedValue.length`](/de/docs/Web/API/CSSUnparsedValue/length)
  - : Gibt die Anzahl der Elemente im `CSSUnparsedValue`-Objekt zurück.

## Instanzmethoden

- [`CSSUnparsedValue.entries()`](/de/docs/Web/API/CSSUnparsedValue/entries)
  - : Gibt ein Array der eigenen aufzählbaren Eigenschaften `[key, value]`-Paare eines gegebenen Objekts in der gleichen Reihenfolge zurück, wie sie von einer {{jsxref("Statements/for...in", "for...in")}}-Schleife bereitgestellt werden (der Unterschied besteht darin, dass eine for-in-Schleife auch Eigenschaften in der Prototypkette aufzählt).
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
