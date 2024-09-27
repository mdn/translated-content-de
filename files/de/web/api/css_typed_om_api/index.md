---
title: CSS Typed Object Model API
slug: Web/API/CSS_Typed_OM_API
l10n:
  sourceCommit: 3b39e41fb9393a13b16aaf58ba25174a62205041
---

{{DefaultAPISidebar("CSS Typed Object Model API")}}

Die CSS Typed Object Model API vereinfacht die Bearbeitung von CSS-Eigenschaften, indem sie CSS-Werte als typisierte JavaScript-Objekte statt als Zeichenketten zur Verfügung stellt. Dies vereinfacht nicht nur die CSS-Manipulation, sondern verringert im Vergleich zu [`HTMLElement.style`](/de/docs/Web/API/HTMLElement/style) auch den negativen Einfluss auf die Leistung.

Im Allgemeinen können CSS-Werte in JavaScript als Zeichenketten gelesen und geschrieben werden, was langsam und umständlich sein kann. Die CSS Typed Object Model API bietet Schnittstellen zum Arbeiten mit zugrundeliegenden Werten, indem sie diese mit spezialisierten JS-Objekten darstellt, die einfacher und zuverlässiger zu manipulieren und zu verstehen sind als das Parsen und Verketten von Zeichenketten. Dies ist für Autoren einfacher (zum Beispiel werden numerische Werte mit tatsächlichen JS-Zahlen reflektiert und haben einheitenbewusste mathematische Operationen, die für sie definiert sind). Es ist in der Regel auch schneller, da Werte direkt manipuliert und dann kostengünstig wieder in zugrundeliegende Werte umgewandelt werden können, ohne dass Zeichenketten von CSS erstellt und geparst werden müssen.

Die CSS Typed OM ermöglicht sowohl die performante Manipulation von Werten, die CSS-Eigenschaften zugewiesen sind, als auch die Erstellung von wartbarem Code, der verständlicher und einfacher zu schreiben ist.

## Schnittstellen

### `CSSStyleValue`

Die [`CSSStyleValue`](/de/docs/Web/API/CSSStyleValue)-Schnittstelle der CSS Typed Object Model API ist die Basisklasse aller über die Typed OM API zugänglichen CSS-Werte. Eine Instanz dieser Klasse kann überall dort verwendet werden, wo ein String erwartet wird.

- [`CSSStyleValue.parse()`](/de/docs/Web/API/CSSStyleValue/parse_static)
  - : Die parse()-Methode der CSSStyleValue-Schnittstelle ermöglicht es, ein CSSNumericValue aus einem CSS-String zu konstruieren. Sie setzt eine bestimmte CSS-Eigenschaft auf die angegebenen Werte und gibt den ersten Wert als CSSStyleValue-Objekt zurück.
- [`CSSStyleValue.parseAll()`](/de/docs/Web/API/CSSStyleValue/parseAll_static)
  - : Die parseAll()-Methode der CSSStyleValue-Schnittstelle setzt alle Vorkommen einer bestimmten CSS-Eigenschaft auf den angegebenen Wert und gibt ein Array von CSSStyleValue-Objekten zurück, die jeweils einen der übergebenen Werte enthalten.

### `StylePropertyMap`

Die [`StylePropertyMap`](/de/docs/Web/API/StylePropertyMap)-Schnittstelle der CSS Typed Object Model API bietet eine Darstellung eines CSS-Deklarationsblocks, der eine Alternative zu CSSStyleDeclaration darstellt.

- [`StylePropertyMap.set()`](/de/docs/Web/API/StylePropertyMap/set)
  - : Methode der StylePropertyMap-Schnittstelle, die die CSS-Deklaration mit der angegebenen Eigenschaft auf den angegebenen Wert ändert.
- [`StylePropertyMap.append()`](/de/docs/Web/API/StylePropertyMap/append)
  - : Methode, die eine neue CSS-Deklaration zur StylePropertyMap mit der angegebenen Eigenschaft und dem Wert hinzufügt.
- [`StylePropertyMap.delete()`](/de/docs/Web/API/StylePropertyMap/delete)
  - : Methode, die die CSS-Deklaration mit der angegebenen Eigenschaft aus der StylePropertyMap entfernt.
- [`StylePropertyMap.clear()`](/de/docs/Web/API/StylePropertyMap/clear)
  - : Methode, die alle Deklarationen in der StylePropertyMap entfernt.

### `CSSUnparsedValue`

Die [`CSSUnparsedValue`](/de/docs/Web/API/CSSUnparsedValue)-Schnittstelle der CSS Typed Object Model API repräsentiert Eigenschaftswerte, die auf benutzerdefinierte Eigenschaften verweisen. Sie besteht aus einer Liste von Zeichenfolgenfragmenten und Variablenreferenzen.

- [`CSSUnparsedValue()`](/de/docs/Web/API/CSSUnparsedValue/CSSUnparsedValue)-Konstruktor
  - : Erstellt ein neues CSSUnparsedValue-Objekt, das Eigenschaftswerte repräsentiert, die auf benutzerdefinierte Eigenschaften verweisen.
- [`CSSUnparsedValue.entries()`](/de/docs/Web/API/CSSUnparsedValue/entries)
  - : Methode, die ein Array der eigenen aufzählbaren \[Schlüssel, Wert]-Paare eines gegebenen Objekts in derselben Reihenfolge wie die in einer for...in-Schleife bereitstellt (der Unterschied besteht darin, dass in einer for-in-Schleife auch Eigenschaften in der Prototypenkette aufgezählt werden).
- [`CSSUnparsedValue.forEach()`](/de/docs/Web/API/CSSUnparsedValue/forEach)
  - : Methode, die eine bereitgestellte Funktion einmal für jedes Element des CSSUnparsedValue ausführt.
- [`CSSUnparsedValue.keys()`](/de/docs/Web/API/CSSUnparsedValue/keys)
  - : Methode, die ein neues _Array-Iterator_-Objekt zurückgibt, das die Schlüssel für jeden Index im Array enthält.

### `CSSKeywordValue` Serialization

Die [`CSSKeywordValue`](/de/docs/Web/API/CSSKeywordValue)-Schnittstelle der CSS Typed Object Model API erstellt ein Objekt zur Darstellung von CSS-Schlüsselwörtern und anderen Identifikatoren.

- [`CSSKeywordValue()`](/de/docs/Web/API/CSSKeywordValue/CSSKeywordValue)-Konstruktor
  - : Konstruktor erstellt ein neues [`CSSKeywordValue()`](/de/docs/Web/API/CSSKeywordValue/CSSKeywordValue)-Objekt, das CSS-Schlüsselwörter und andere Identifikatoren repräsentiert.
- [`CSSKeywordValue.value()`](/de/docs/Web/API/CSSKeywordValue/value)
  - : Eigenschaft der CSSKeywordValue-Schnittstelle, die den Wert des CSSKeywordValue zurückgibt oder setzt.

## CSSStyleValue-Schnittstellen

CSSStyleValue ist die Basisklasse, durch die alle CSS-Werte ausgedrückt werden. Unterklassen umfassen:

- [`CSSImageValue`](/de/docs/Web/API/CSSImageValue)-Objekte
  - : Eine Schnittstelle, die Werte für Eigenschaften, die ein Bild annehmen, darstellt, zum Beispiel [`background-image`](/de/docs/Web/CSS/background-image), [`list-style-image`](/de/docs/Web/CSS/list-style-image) oder [`border-image-source`](/de/docs/Web/CSS/border-image-source).
- [`CSSKeywordValue`](/de/docs/Web/API/CSSKeywordValue)
  - : Eine Schnittstelle, die ein Objekt zur Darstellung von CSS-Schlüsselwörtern und anderen Identifikatoren erstellt. Wenn sie dort verwendet wird, wo ein String erwartet wird, gibt sie den Wert von CSSKeyword.value zurück.
- [`CSSMathValue`](/de/docs/Web/API/CSSMathValue)

  - : Eine Hierarchie von Unterklassen, die numerische Werte darstellen, die komplizierter sind als nur ein einfacher Wert und eine Einheit, einschließlich:

    - [`CSSMathInvert`](/de/docs/Web/API/CSSMathInvert) - stellt einen CSS-Wert dar, der als `calc(1 / <value>)` verwendet wird.
    - [`CSSMathMax`](/de/docs/Web/API/CSSMathMax) - stellt die CSS-{{cssxref("max","max()")}}-Funktion dar.
    - [`CSSMathMin`](/de/docs/Web/API/CSSMathMin) - stellt die CSS-{{cssxref("min","min()")}}-Funktion dar.
    - [`CSSMathNegate`](/de/docs/Web/API/CSSMathNegate) - negiert den Wert, der in ihn eingefügt wird.
    - [`CSSMathProduct`](/de/docs/Web/API/CSSMathProduct) - stellt das Ergebnis dar, das durch Aufrufen von [`add()`](/de/docs/Web/API/CSSNumericValue/add), [`sub()`](/de/docs/Web/API/CSSNumericValue/sub) oder [`toSum()`](/de/docs/Web/API/CSSNumericValue/toSum) auf [`CSSNumericValue`](/de/docs/Web/API/CSSNumericValue) erhalten wird.
    - [`CSSMathSum`](/de/docs/Web/API/CSSMathSum) - stellt das Ergebnis dar, das durch Aufrufen von [`add()`](/de/docs/Web/API/CSSNumericValue/add), [`sub()`](/de/docs/Web/API/CSSNumericValue/sub) oder [`toSum()`](/de/docs/Web/API/CSSNumericValue/toSum) auf [`CSSNumericValue`](/de/docs/Web/API/CSSNumericValue) erhalten wird.

- [`CSSNumericValue`](/de/docs/Web/API/CSSNumericValue)

  - : Eine Schnittstelle, die Operationen darstellt, die alle numerischen Werte ausführen können, einschließlich:

    - [`CSSNumericValue.add`](/de/docs/Web/API/CSSNumericValue/add) - Fügt der `CSSNumericValue` die angegebenen Zahlen hinzu.
    - [`CSSNumericValue.sub`](/de/docs/Web/API/CSSNumericValue/sub) - Subtrahiert von der `CSSNumericValue` die angegebenen Zahlen.
    - [`CSSNumericValue.mul`](/de/docs/Web/API/CSSNumericValue/mul) - Multipliziert mit der `CSSNumericValue` die angegebenen Zahlen.
    - [`CSSNumericValue.div`](/de/docs/Web/API/CSSNumericValue/div) - Dividiert eine angegebene Zahl durch andere Zahlen, führt einen Fehler aus, wenn 0 angegeben wird.
    - [`CSSNumericValue.min`](/de/docs/Web/API/CSSNumericValue/min) - Gibt den minimalen übergebenen Wert zurück
    - [`CSSNumericValue.max`](/de/docs/Web/API/CSSNumericValue/max) - Gibt den maximalen übergebenen Wert zurück
    - [`CSSNumericValue.equals`](/de/docs/Web/API/CSSNumericValue/equals) - Gibt true zurück, wenn alle Werte genau denselben Typ und Wert in derselben Reihenfolge haben. Andernfalls false
    - [`CSSNumericValue.to`](/de/docs/Web/API/CSSNumericValue/to) - Konvertiert `value` in einen anderen mit der angegebenen _Einheit._
    - [`CSSNumericValue.toSum`](/de/docs/Web/API/CSSNumericValue/toSum)
    - [`CSSNumericValue.type`](/de/docs/Web/API/CSSNumericValue/type)
    - [`CSSNumericValue.parse`](/de/docs/Web/API/CSSNumericValue/parse_static) - Gibt eine Zahl zurück, die aus einem CSS-String geparst wurde

- [`CSSPositionValue`](/de/docs/Web/API/CSSPositionValue)
  - : Stellt Werte für Eigenschaften dar, die eine Position annehmen, zum Beispiel object-position.
- [`CSSTransformValue`](/de/docs/Web/API/CSSTransformValue)
  - : Eine Schnittstelle, die eine Liste von [`transform`](/de/docs/Web/CSS/transform)-Listeneinträgen darstellt. Sie "enthalten" einen oder mehrere [`CSSTransformComponent`](/de/docs/Web/API/CSSTransformComponent)s, die einzelne `transform`-Funktionswerte darstellen.
- [`CSSUnitValue`](/de/docs/Web/API/CSSUnitValue)
  - : Eine Schnittstelle, die numerische Werte darstellt, die als eine einzelne Einheit oder als benannte Zahl und Prozentsatz dargestellt werden können.
- [`CSSUnparsedValue`](/de/docs/Web/API/CSSUnparsedValue)
  - : Stellt Eigenschaftswerte dar, die auf [benutzerdefinierte Eigenschaften](/de/docs/Web/CSS/--*) verweisen. Sie besteht aus einer Liste von Zeichenfolgenfragmenten und Variablenreferenzen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [CSS Painting API](/de/docs/Web/API/CSS_Painting_API)
- [Verwendung des CSS Typed Object Models](/de/docs/Web/API/CSS_Typed_OM_API/Guide)
- [CSS Houdini](/de/docs/Web/API/Houdini_APIs)
