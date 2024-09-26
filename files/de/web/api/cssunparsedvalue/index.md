---
title: CSSUnparsedValue
slug: Web/API/CSSUnparsedValue
l10n:
  sourceCommit: ecc46f2c8d6e09f0aa6e1b3f5194abfcf462e603
---

{{APIRef("CSS Typed OM")}}

Die **`CSSUnparsedValue`**-Schnittstelle der [CSS Typed Object Model API](/de/docs/Web/API/CSS_Object_Model) repräsentiert Eigenschaftswerte, die [benutzerdefinierte Eigenschaften](/de/docs/Web/CSS/CSS_cascading_variables) referenzieren. Sie besteht aus einer Liste von Zeichenkettenfragmenten und Variablenreferenzen.

Benutzerdefinierte Eigenschaften werden durch `CSSUnparsedValue` dargestellt und {{cssxref("var", "var()")}}-Referenzen werden mit {{domxref('CSSVariableReferenceValue')}} repräsentiert.

{{InheritanceDiagram}}

## Konstruktor

- {{domxref("CSSUnparsedValue.CSSUnparsedValue", "CSSUnparsedValue()")}}
  - : Erstellt ein neues `CSSUnparsedValue`-Objekt.

## Instanz Eigenschaften

- {{domxref('CSSUnparsedValue.length')}}
  - : Gibt die Anzahl der Elemente im `CSSUnparsedValue`-Objekt zurück.

## Instanzmethoden

- {{domxref('CSSUnparsedValue.entries()')}}
  - : Gibt ein Array der eigenen aufzählbaren Eigenschafts-[Schlüssel, Wert]-Paare eines gegebenen Objekts in der gleichen Reihenfolge zurück, wie sie von einer {{jsxref("Statements/for...in", "for...in")}}-Schleife bereitgestellt wird (der Unterschied besteht darin, dass eine for-in-Schleife auch Eigenschaften in der Prototypenkette aufzählt).
- {{domxref('CSSUnparsedValue.forEach()')}}
  - : Führt eine bereitgestellte Funktion einmal für jedes Element des `CSSUnparsedValue`-Objekts aus.
- {{domxref('CSSUnparsedValue.keys()')}}
  - : Gibt ein neues _Array-Iterator_-Objekt zurück, das die Schlüssel für jeden Index im `CSSUnparsedValue`-Objekt enthält.
- {{domxref('CSSUnparsedValue.values()')}}
  - : Gibt ein neues _Array-Iterator_-Objekt zurück, das die Werte für jeden Index im `CSSUnparsedValue`-Objekt enthält.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref('CSSImageValue')}}
- {{domxref('CSSKeywordValue')}}
- {{domxref('CSSNumericValue')}}
- {{domxref('CSSPositionValue')}}
- {{domxref('CSSTransformValue')}}
- [Verwendung des CSS Typed OM](/de/docs/Web/API/CSS_Typed_OM_API/Guide)
- [CSS Typed Object Model API](/de/docs/Web/API/CSS_Typed_OM_API)