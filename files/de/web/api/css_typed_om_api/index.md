---
title: CSS Typed Object Model API
slug: Web/API/CSS_Typed_OM_API
l10n:
  sourceCommit: 9151632d3aacb4f7d7228d5446ca66c7f44f406a
---

{{DefaultAPISidebar("CSS Typed Object Model API")}}

Die CSS Typed Object Model API vereinfacht die Manipulation von CSS-Eigenschaften, indem sie CSS-Werte als typisierte JavaScript-Objekte anstelle von Zeichenfolgen bereitstellt. Dies vereinfacht nicht nur die CSS-Manipulation, sondern verringert auch den negativen Einfluss auf die Leistung im Vergleich zu [`HTMLElement.style`](/de/docs/Web/API/HTMLElement/style).

Im Allgemeinen können CSS-Werte in JavaScript als Zeichenfolgen gelesen und geschrieben werden, was langsam und umständlich sein kann. Die CSS Typed Object Model API bietet Schnittstellen, um mit den zugrundeliegenden Werten zu interagieren, indem sie diese mit speziellen JS-Objekten darstellt, die leichter und zuverlässiger zu manipulieren und zu verstehen sind als das Parsen und Verketten von Zeichenfolgen. Dies ist für Entwickler einfacher (zum Beispiel werden numerische Werte mit tatsächlichen JS-Zahlen dargestellt und es sind einheitenbewusste mathematische Operationen für sie definiert). Es ist auch generell schneller, da Werte direkt manipuliert und dann kostengünstig in zugrundeliegende Werte zurückübersetzt werden können, ohne dass beide CSS-Zeichenfolgen erstellt und geparst werden müssen.

CSS Typed OM ermöglicht sowohl die performante Manipulation von Werten, die CSS-Eigenschaften zugewiesen sind, als auch die Erstellung von wartbarem Code, der leichter verständlich und einfacher zu schreiben ist.

## Schnittstellen

### `CSSStyleValue`

Die [`CSSStyleValue`](/de/docs/Web/API/CSSStyleValue)-Schnittstelle der CSS Typed Object Model API ist die Basisklasse für alle CSS-Werte, die über die Typed OM API zugänglich sind. Eine Instanz dieser Klasse kann überall verwendet werden, wo eine Zeichenfolge erwartet wird.

- [`CSSStyleValue.parse()`](/de/docs/Web/API/CSSStyleValue/parse_static)
  - : Methode, die es ermöglicht, `CSSNumericValue` aus einem CSS-String zu konstruieren. Sie setzt eine bestimmte CSS-Eigenschaft auf die angegebenen Werte und gibt den ersten Wert als `CSSStyleValue`-Objekt zurück.
- [`CSSStyleValue.parseAll()`](/de/docs/Web/API/CSSStyleValue/parseAll_static)
  - : Methode, die alle Vorkommen einer bestimmten CSS-Eigenschaft auf den angegebenen Wert setzt und ein Array von `CSSStyleValue`-Objekten zurückgibt, die jeweils einen der gelieferten Werte enthalten.

### `StylePropertyMap`

Die [`StylePropertyMap`](/de/docs/Web/API/StylePropertyMap)-Schnittstelle der CSS Typed Object Model API bietet eine Repräsentation eines CSS-Deklarationsblocks, die eine Alternative zu `CSSStyleDeclaration` darstellt.

- [`StylePropertyMap.set()`](/de/docs/Web/API/StylePropertyMap/set)
  - : Methode, die die CSS-Deklaration mit der angegebenen Eigenschaft auf den angegebenen Wert ändert.
- [`StylePropertyMap.append()`](/de/docs/Web/API/StylePropertyMap/append)
  - : Methode, die eine neue CSS-Deklaration mit der angegebenen Eigenschaft und dem Wert zur `StylePropertyMap` hinzufügt.
- [`StylePropertyMap.delete()`](/de/docs/Web/API/StylePropertyMap/delete)
  - : Methode, die die CSS-Deklaration mit der angegebenen Eigenschaft aus der `StylePropertyMap` entfernt.
- [`StylePropertyMap.clear()`](/de/docs/Web/API/StylePropertyMap/clear)
  - : Methode, die alle Deklarationen in der `StylePropertyMap` entfernt.

### `CSSUnparsedValue`

Die [`CSSUnparsedValue`](/de/docs/Web/API/CSSUnparsedValue)-Schnittstelle der CSS Typed Object Model API stellt Eigenschaftswerte dar, die auf benutzerdefinierte Eigenschaften verweisen. Sie besteht aus einer Liste von String-Fragmenten und Variablenreferenzen.

- [`CSSUnparsedValue()`](/de/docs/Web/API/CSSUnparsedValue/CSSUnparsedValue) Konstruktor
  - : Erstellt ein neues `CSSUnparsedValue`-Objekt, das Eigenschaftswerte darstellt, die auf benutzerdefinierte Eigenschaften verweisen.
- [`CSSUnparsedValue.entries()`](/de/docs/Web/API/CSSUnparsedValue/entries)
  - : Methode, die ein Array der eigenen aufzählbaren Eigenschafts-Paare `[key, value]` eines gegebenen Objekts in der gleichen Reihenfolge wie bei einer `for...in`-Schleife zurückgibt (der Unterschied ist, dass eine for-in-Schleife auch Eigenschaften in der Prototypkette aufzählt).
- [`CSSUnparsedValue.forEach()`](/de/docs/Web/API/CSSUnparsedValue/forEach)
  - : Methode, die eine bereitgestellte Funktion einmal für jedes Element des `CSSUnparsedValue` ausführt.
- [`CSSUnparsedValue.keys()`](/de/docs/Web/API/CSSUnparsedValue/keys)
  - : Methode, die ein neues _Array-Iterator_-Objekt zurückgibt, das die Schlüssel für jeden Index im Array enthält.

### `CSSKeywordValue` Serialisierung

Die [`CSSKeywordValue`](/de/docs/Web/API/CSSKeywordValue)-Schnittstelle der CSS Typed Object Model API erstellt ein Objekt zur Darstellung von CSS-Schlüsselwörtern und anderen Bezeichnern.

- [`CSSKeywordValue()`](/de/docs/Web/API/CSSKeywordValue/CSSKeywordValue) Konstruktor
  - : Konstruktor, der ein neues [`CSSKeywordValue()`](/de/docs/Web/API/CSSKeywordValue/CSSKeywordValue)-Objekt erstellt, das CSS-Schlüsselwörter und andere Bezeichner repräsentiert.
- [`CSSKeywordValue.value()`](/de/docs/Web/API/CSSKeywordValue/value)
  - : Eigenschaft der `CSSKeywordValue`-Schnittstelle, die den Wert von `CSSKeywordValue` zurückgibt oder setzt.

## CSSStyleValue-Schnittstellen

[`CSSStyleValue`](/de/docs/Web/API/CSSStyleValue) ist die Basisklasse, durch die alle CSS-Werte ausgedrückt werden. Unterklassen umfassen:

- [`CSSImageValue`](/de/docs/Web/API/CSSImageValue)
  - : Eine Schnittstelle, die Werte für Eigenschaften repräsentiert, die ein Bild erfordern, beispielsweise [`background-image`](/de/docs/Web/CSS/background-image), [`list-style-image`](/de/docs/Web/CSS/list-style-image) oder [`border-image-source`](/de/docs/Web/CSS/border-image-source).
- [`CSSKeywordValue`](/de/docs/Web/API/CSSKeywordValue)
  - : Eine Schnittstelle, die ein Objekt erstellt, um CSS-Schlüsselwörter und andere Bezeichner darzustellen. Wenn es dort verwendet wird, wo eine Zeichenfolge erwartet wird, gibt es den Wert von `CSSKeyword.value` zurück.
- [`CSSMathValue`](/de/docs/Web/API/CSSMathValue)

  - : Ein Baum von Unterklassen, der numerische Werte repräsentiert, die komplizierter sind als ein einzelner Wert und eine Einheit, einschließlich:

    - [`CSSMathInvert`](/de/docs/Web/API/CSSMathInvert) - repräsentiert einen CSS {{cssxref("calc","calc()")}}-Wert, der als `calc(1 / <value>)` verwendet wird.
    - [`CSSMathMax`](/de/docs/Web/API/CSSMathMax) - repräsentiert die CSS {{cssxref("max","max()")}}-Funktion.
    - [`CSSMathMin`](/de/docs/Web/API/CSSMathMin) - repräsentiert die CSS {{cssxref("min","min()")}}-Funktion.
    - [`CSSMathNegate`](/de/docs/Web/API/CSSMathNegate) - negiert den übergebenen Wert.
    - [`CSSMathProduct`](/de/docs/Web/API/CSSMathProduct) - repräsentiert das Ergebnis, das durch Aufrufen von [`add()`](/de/docs/Web/API/CSSNumericValue/add), [`sub()`](/de/docs/Web/API/CSSNumericValue/sub) oder [`toSum()`](/de/docs/Web/API/CSSNumericValue/toSum) auf [`CSSNumericValue`](/de/docs/Web/API/CSSNumericValue) erhalten wird.
    - [`CSSMathSum`](/de/docs/Web/API/CSSMathSum) - repräsentiert das Ergebnis, das durch Aufrufen von [`add()`](/de/docs/Web/API/CSSNumericValue/add), [`sub()`](/de/docs/Web/API/CSSNumericValue/sub) oder [`toSum()`](/de/docs/Web/API/CSSNumericValue/toSum) auf [`CSSNumericValue`](/de/docs/Web/API/CSSNumericValue) erhalten wird.

- [`CSSNumericValue`](/de/docs/Web/API/CSSNumericValue)

  - : Eine Schnittstelle, die Operationen darstellt, die alle numerischen Werte ausführen können, einschließlich:

    - [`CSSNumericValue.add`](/de/docs/Web/API/CSSNumericValue/add) - Fügt der `CSSNumericValue` die übergebenen Zahlen hinzu.
    - [`CSSNumericValue.sub`](/de/docs/Web/API/CSSNumericValue/sub) - Subtrahiert die übergebenen Zahlen von der `CSSNumericValue`.
    - [`CSSNumericValue.mul`](/de/docs/Web/API/CSSNumericValue/mul) - Multipliziert die übergebenen Zahlen mit der `CSSNumericValue`.
    - [`CSSNumericValue.div`](/de/docs/Web/API/CSSNumericValue/div) - Teilt die `CSSNumericValue` durch den angegebenen Wert und löst einen Fehler aus, wenn `0`.
    - [`CSSNumericValue.min`](/de/docs/Web/API/CSSNumericValue/min) - Gibt den übergebenen Minimalwert zurück
    - [`CSSNumericValue.max`](/de/docs/Web/API/CSSNumericValue/max) - Gibt den übergebenen Maximalwert zurück
    - [`CSSNumericValue.equals`](/de/docs/Web/API/CSSNumericValue/equals) - Gibt true zurück, wenn alle Werte den exakt gleichen Typ und Wert haben und in der gleichen Reihenfolge sind. Andernfalls false
    - [`CSSNumericValue.to`](/de/docs/Web/API/CSSNumericValue/to) - Konvertiert `value` in einen anderen mit der angegebenen _Einheit._
    - [`CSSNumericValue.toSum`](/de/docs/Web/API/CSSNumericValue/toSum)
    - [`CSSNumericValue.type`](/de/docs/Web/API/CSSNumericValue/type)
    - [`CSSNumericValue.parse`](/de/docs/Web/API/CSSNumericValue/parse_static) - Gibt eine Zahl zurück, die aus einem CSS-String geparst wurde

- [`CSSPositionValue`](/de/docs/Web/API/CSSPositionValue)
  - : Repräsentiert Werte für Eigenschaften, die eine Position erfordern, beispielsweise object-position.
- [`CSSTransformValue`](/de/docs/Web/API/CSSTransformValue)
  - : Eine Schnittstelle, die eine Liste von [`transform`](/de/docs/Web/CSS/transform) Listenwerten repräsentiert. Sie "enthalten" einen oder mehrere [`CSSTransformComponent`](/de/docs/Web/API/CSSTransformComponent), die einzelne `transform` Funktionwerte darstellen.
- [`CSSUnitValue`](/de/docs/Web/API/CSSUnitValue)
  - : Eine Schnittstelle, die numerische Werte darstellt, die als eine einzelne Einheit oder als benannte Zahl und Prozentzahl dargestellt werden können.
- [`CSSUnparsedValue`](/de/docs/Web/API/CSSUnparsedValue)
  - : Repräsentiert Eigenschaftswerte, die auf [benutzerdefinierte Eigenschaften](/de/docs/Web/CSS/--*) verweisen. Es besteht aus einer Liste von String-Fragmenten und Variablenreferenzen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [CSS Painting API](/de/docs/Web/API/CSS_Painting_API)
- [Verwendung des CSS Typed Object Model](/de/docs/Web/API/CSS_Typed_OM_API/Guide)
- [CSS Houdini](/de/docs/Web/API/Houdini_APIs)
