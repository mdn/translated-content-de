---
title: CSS Typed Object Model API
slug: Web/API/CSS_Typed_OM_API
l10n:
  sourceCommit: 55326f330a6ae829494c7606b1bd47b2c0f9d888
---

{{DefaultAPISidebar("CSS Typed Object Model API")}}

Die CSS Typed Object Model API vereinfacht die Manipulation von CSS-Eigenschaften, indem sie CSS-Werte als typisierte JavaScript-Objekte anstatt als Strings bereitstellt. Dies vereinfacht nicht nur die CSS-Manipulation, sondern verringert auch die negativen Auswirkungen auf die Leistung im Vergleich zu [`HTMLElement.style`](/de/docs/Web/API/HTMLElement/style).

Normalerweise können CSS-Werte in JavaScript als Strings gelesen und geschrieben werden, was langsam und umständlich sein kann. Die CSS Typed Object Model API stellt Schnittstellen zur Verfügung, um mit zugrunde liegenden Werten zu interagieren, indem sie durch spezialisierte JS-Objekte repräsentiert werden, die einfacher zu manipulieren und zuverlässiger zu verstehen sind als das Parsen und Verkettung von Strings. Dies ist für Autoren einfacher (zum Beispiel werden numerische Werte als tatsächliche JS-Zahlen widergespiegelt und haben einenheitliche mathematische Operationen, die für sie definiert sind). Es ist auch in der Regel schneller, da Werte direkt manipuliert und dann kostengünstig zurück in die zugrunde liegenden Werte übersetzt werden können, ohne Strings von CSS aufbauen und parsen zu müssen.

CSS Typed OM ermöglicht sowohl eine performante Manipulation von Werten, die CSS-Eigenschaften zugewiesen sind, als auch die Erstellung von wartbarem Code, der sowohl verständlicher als auch einfacher zu schreiben ist.

## Schnittstellen

### `CSSStyleValue`

Die [`CSSStyleValue`](/de/docs/Web/API/CSSStyleValue) Schnittstelle der CSS Typed Object Model API ist die Basisklasse aller über die Typed OM API zugänglichen CSS-Werte. Eine Instanz dieser Klasse kann überall verwendet werden, wo ein String erwartet wird.

- [`CSSStyleValue.parse()`](/de/docs/Web/API/CSSStyleValue/parse_static)
  - : Methode, die es ermöglicht, `CSSNumericValue` aus einem CSS-String zu konstruieren. Sie setzt eine spezifische CSS-Eigenschaft auf die angegebenen Werte und gibt den ersten Wert als `CSSStyleValue`-Objekt zurück.
- [`CSSStyleValue.parseAll()`](/de/docs/Web/API/CSSStyleValue/parseAll_static)
  - : Methode, die alle Vorkommen einer spezifischen CSS-Eigenschaft auf den angegebenen Wert setzt und ein Array von `CSSStyleValue`-Objekten zurückgibt, die jeweils einen der angegebenen Werte enthalten.

### `StylePropertyMap`

Die [`StylePropertyMap`](/de/docs/Web/API/StylePropertyMap) Schnittstelle der CSS Typed Object Model API bietet eine Darstellung eines CSS-Deklarationsblocks, die eine Alternative zu `CSSStyleDeclaration` darstellt.

- [`StylePropertyMap.set()`](/de/docs/Web/API/StylePropertyMap/set)
  - : Methode, die die CSS-Deklaration mit der angegebenen Eigenschaft auf den gegebenen Wert ändert.
- [`StylePropertyMap.append()`](/de/docs/Web/API/StylePropertyMap/append)
  - : Methode, die eine neue CSS-Deklaration mit der angegebenen Eigenschaft und dem Wert zum `StylePropertyMap` hinzufügt.
- [`StylePropertyMap.delete()`](/de/docs/Web/API/StylePropertyMap/delete)
  - : Methode, die die CSS-Deklaration mit der angegebenen Eigenschaft aus dem `StylePropertyMap` entfernt.
- [`StylePropertyMap.clear()`](/de/docs/Web/API/StylePropertyMap/clear)
  - : Methode, die alle Deklarationen im `StylePropertyMap` entfernt.

### `CSSUnparsedValue`

Die [`CSSUnparsedValue`](/de/docs/Web/API/CSSUnparsedValue) Schnittstelle der CSS Typed Object Model API repräsentiert Eigenschaftswerte, die benutzerdefinierte Eigenschaften referenzieren. Sie besteht aus einer Liste von String-Fragmenten und Variablenreferenzen.

- [`CSSUnparsedValue()`](/de/docs/Web/API/CSSUnparsedValue/CSSUnparsedValue) Konstruktor
  - : Erstellt ein neues `CSSUnparsedValue`-Objekt, das Eigenschaftswerte repräsentiert, die benutzerdefinierte Eigenschaften referenzieren.
- [`CSSUnparsedValue.entries()`](/de/docs/Web/API/CSSUnparsedValue/entries)
  - : Methode, die ein Array von eigenen aufzählbaren `[key, value]` Paaren eines gegebenen Objekts in der gleichen Reihenfolge wie bei einem `for...in`-Schleife zurückgibt (mit dem Unterschied, dass eine for-in-Schleife auch Eigenschaften in der Prototypenkette aufzählt).
- [`CSSUnparsedValue.forEach()`](/de/docs/Web/API/CSSUnparsedValue/forEach)
  - : Führt eine bereitgestellte Funktion je einmal für jedes Element des `CSSUnparsedValue` aus.
- [`CSSUnparsedValue.keys()`](/de/docs/Web/API/CSSUnparsedValue/keys)
  - : Methode, die ein neues _Array-Iterator_-Objekt zurückgibt, das die Schlüssel für jeden Index im Array enthält.

### `CSSKeywordValue` Serialisierung

Die [`CSSKeywordValue`](/de/docs/Web/API/CSSKeywordValue) Schnittstelle der CSS Typed Object Model API erstellt ein Objekt, um CSS-Stichwörter und andere Bezeichner zu repräsentieren.

- [`CSSKeywordValue()`](/de/docs/Web/API/CSSKeywordValue/CSSKeywordValue) Konstruktor
  - : Konstruktor erstellt ein neues [`CSSKeywordValue()`](/de/docs/Web/API/CSSKeywordValue/CSSKeywordValue) Objekt, das CSS-Stichwörter und andere Bezeichner repräsentiert.
- [`CSSKeywordValue.value()`](/de/docs/Web/API/CSSKeywordValue/value)
  - : Eigenschaft der `CSSKeywordValue` Schnittstelle, die den Wert der `CSSKeywordValue` zurückgibt oder setzt.

## CSSStyleValue Schnittstellen

[`CSSStyleValue`](/de/docs/Web/API/CSSStyleValue) ist die Basisklasse, durch die alle CSS-Werte ausgedrückt werden. Unterklassen schließen ein:

- [`CSSImageValue`](/de/docs/Web/API/CSSImageValue)
  - : Eine Schnittstelle, die Werte für Eigenschaften repräsentiert, die ein Bild annehmen, zum Beispiel [`background-image`](/de/docs/Web/CSS/Reference/Properties/background-image), [`list-style-image`](/de/docs/Web/CSS/Reference/Properties/list-style-image) oder [`border-image-source`](/de/docs/Web/CSS/Reference/Properties/border-image-source).
- [`CSSKeywordValue`](/de/docs/Web/API/CSSKeywordValue)
  - : Eine Schnittstelle, die ein Objekt erstellt, um CSS-Stichwörter und andere Bezeichner zu repräsentieren. Wenn sie dort verwendet wird, wo ein String erwartet wird, gibt sie den Wert von `CSSKeyword.value` zurück.
- [`CSSMathValue`](/de/docs/Web/API/CSSMathValue)
  - : Ein Baum von Unterklassen, die numerische Werte repräsentieren, die komplizierter sind als ein einzelner Wert und eine Einheit, einschließlich:
    - [`CSSMathInvert`](/de/docs/Web/API/CSSMathInvert) - repräsentiert einen CSS {{cssxref("calc","calc()")}} Wert, der als `calc(1 / <value>)` verwendet wird.
    - [`CSSMathMax`](/de/docs/Web/API/CSSMathMax) - repräsentiert die CSS {{cssxref("max","max()")}} Funktion.
    - [`CSSMathMin`](/de/docs/Web/API/CSSMathMin) - repräsentiert die CSS {{cssxref("min","min()")}} Funktion.
    - [`CSSMathNegate`](/de/docs/Web/API/CSSMathNegate) - negiert den übergebenen Wert.
    - [`CSSMathProduct`](/de/docs/Web/API/CSSMathProduct) - repräsentiert das Ergebnis, das durch Aufruf von [`add()`](/de/docs/Web/API/CSSNumericValue/add), [`sub()`](/de/docs/Web/API/CSSNumericValue/sub) oder [`toSum()`](/de/docs/Web/API/CSSNumericValue/toSum) auf [`CSSNumericValue`](/de/docs/Web/API/CSSNumericValue) erhalten wird.
    - [`CSSMathSum`](/de/docs/Web/API/CSSMathSum) - repräsentiert das Ergebnis, das durch Aufruf von [`add()`](/de/docs/Web/API/CSSNumericValue/add), [`sub()`](/de/docs/Web/API/CSSNumericValue/sub) oder [`toSum()`](/de/docs/Web/API/CSSNumericValue/toSum) auf [`CSSNumericValue`](/de/docs/Web/API/CSSNumericValue) erhalten wird.

- [`CSSNumericValue`](/de/docs/Web/API/CSSNumericValue)
  - : Eine Schnittstelle, die Operationen repräsentiert, die alle numerischen Werte durchführen können, einschließlich:
    - [`CSSNumericValue.add`](/de/docs/Web/API/CSSNumericValue/add) - Fügt den übergebenen Zahlen zur `CSSNumericValue` hinzu.
    - [`CSSNumericValue.sub`](/de/docs/Web/API/CSSNumericValue/sub) - Subtrahiert die übergebenen Zahlen von der `CSSNumericValue`.
    - [`CSSNumericValue.mul`](/de/docs/Web/API/CSSNumericValue/mul) - Multipliziert die übergebenen Zahlen mit der `CSSNumericValue`.
    - [`CSSNumericValue.div`](/de/docs/Web/API/CSSNumericValue/div) - Teilt die `CSSNumericValue` durch den übergebenen Wert und wirft einen Fehler, wenn `0`.
    - [`CSSNumericValue.min`](/de/docs/Web/API/CSSNumericValue/min) - Gibt den minimal übergebenen Wert zurück.
    - [`CSSNumericValue.max`](/de/docs/Web/API/CSSNumericValue/max) - Gibt den maximal übergebenen Wert zurück.
    - [`CSSNumericValue.equals`](/de/docs/Web/API/CSSNumericValue/equals) - Gibt wahr zurück, wenn alle Werte denselben Typ und Wert in der gleichen Reihenfolge haben. Andernfalls falsch.
    - [`CSSNumericValue.to`](/de/docs/Web/API/CSSNumericValue/to) - Konvertiert `value` in einen anderen mit der angegebenen _Einheit_.
    - [`CSSNumericValue.toSum`](/de/docs/Web/API/CSSNumericValue/toSum)
    - [`CSSNumericValue.type`](/de/docs/Web/API/CSSNumericValue/type)
    - [`CSSNumericValue.parse`](/de/docs/Web/API/CSSNumericValue/parse_static) - Gibt eine Zahl zurück, die aus einem CSS-String geparst wird.

- [`CSSPositionValue`](/de/docs/Web/API/CSSPositionValue)
  - : Repräsentiert Werte für Eigenschaften, die eine Position annehmen, zum Beispiel `object-position`.
- [`CSSTransformValue`](/de/docs/Web/API/CSSTransformValue)
  - : Eine Schnittstelle, die eine Liste von [`transform`](/de/docs/Web/CSS/Reference/Properties/transform) Listeneinträgen repräsentiert. Sie "enthalten" einen oder mehrere [`CSSTransformComponent`](/de/docs/Web/API/CSSTransformComponent)s, die einzelne `transform` Funktionswerte repräsentieren.
- [`CSSUnitValue`](/de/docs/Web/API/CSSUnitValue)
  - : Eine Schnittstelle, die numerische Werte repräsentiert, die als eine einzige Einheit oder ein benannter Nummer und Prozentsatz dargestellt werden können.
- [`CSSUnparsedValue`](/de/docs/Web/API/CSSUnparsedValue)
  - : Repräsentiert Eigenschaftswerte, die [benutzerdefinierte Eigenschaften](/de/docs/Web/CSS/Reference/Properties/--*). Es besteht aus einer Liste von String-Fragmenten und Variablenreferenzen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [CSS Painting API](/de/docs/Web/API/CSS_Painting_API)
- [Verwendung des CSS Typed Object Model](/de/docs/Web/API/CSS_Typed_OM_API/Guide)
- [CSS Houdini](/de/docs/Web/API/Houdini_APIs)
