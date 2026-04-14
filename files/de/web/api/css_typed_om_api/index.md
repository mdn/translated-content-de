---
title: CSS Typed Object Model API
slug: Web/API/CSS_Typed_OM_API
l10n:
  sourceCommit: 8446f51f9a446af6a9ed878ff8f9515d60d28ed5
---

{{DefaultAPISidebar("CSS Typed Object Model API")}}

Die CSS Typed Object Model API vereinfacht die Manipulation von CSS-Eigenschaften, indem CSS-Werte als typisierte JavaScript-Objekte anstatt als Strings dargestellt werden. Dies vereinfacht nicht nur die CSS-Manipulation, sondern verringert auch den negativen Leistungseinfluss im Vergleich zu [`HTMLElement.style`](/de/docs/Web/API/HTMLElement/style).

In der Regel können CSS-Werte in JavaScript als Zeichenketten gelesen und geschrieben werden, was langsam und mühsam sein kann. Die CSS Typed Object Model API bietet Schnittstellen, um mit den zugrundeliegenden Werten zu interagieren, indem sie diese mit spezialisierten JS-Objekten darstellt, die einfacher und zuverlässiger manipuliert und verstanden werden können als durch das Parsen und Zusammensetzen von Strings. Dies ist für die Autoren einfacher (zum Beispiel werden numerische Werte mit tatsächlichen JS-Zahlen reflektiert und es sind einheitenbewusste mathematische Operationen für sie definiert). Es ist auch allgemein schneller, da Werte direkt manipuliert und dann kostengünstig in die zugrundeliegenden Werte zurückübersetzt werden können, ohne dass zuerst CSS-Strings erstellt und dann geparst werden müssen.

Die CSS Typed OM ermöglicht sowohl die performante Manipulation von Werten, die CSS-Eigenschaften zugewiesen sind, als auch die Pflege von Code, der sowohl verständlicher als auch leichter zu schreiben ist.

## Schnittstellen

### `CSSStyleValue`

Die [`CSSStyleValue`](/de/docs/Web/API/CSSStyleValue)-Schnittstelle der CSS Typed Object Model API ist die Basisklasse aller durch die Typed OM API zugänglichen CSS-Werte. Eine Instanz dieser Klasse kann überall dort verwendet werden, wo ein String erwartet wird.

- [`CSSStyleValue.parse()`](/de/docs/Web/API/CSSStyleValue/parse_static)
  - : Methode, die es ermöglicht, `CSSNumericValue` aus einem CSS-String zu konstruieren. Sie setzt eine bestimmte CSS-Eigenschaft auf die angegebenen Werte und gibt den ersten Wert als `CSSStyleValue`-Objekt zurück.
- [`CSSStyleValue.parseAll()`](/de/docs/Web/API/CSSStyleValue/parseAll_static)
  - : Methode, die alle Vorkommen einer bestimmten CSS-Eigenschaft auf den angegebenen Wert setzt und ein Array von `CSSStyleValue`-Objekten zurückgibt, wobei jedes ein geliefertes Wert enthält.

### `StylePropertyMap`

Die [`StylePropertyMap`](/de/docs/Web/API/StylePropertyMap)-Schnittstelle der CSS Typed Object Model API bietet eine Darstellung eines CSS-Deklarationsblocks, der eine Alternative zu `CSSStyleDeclaration` darstellt.

- [`StylePropertyMap.set()`](/de/docs/Web/API/StylePropertyMap/set)
  - : Methode, die die CSS-Deklaration mit der gegebenen Eigenschaft auf den angegebenen Wert ändert.
- [`StylePropertyMap.append()`](/de/docs/Web/API/StylePropertyMap/append)
  - : Methode, die eine neue CSS-Deklaration mit der angegebenen Eigenschaft und dem angegebenen Wert zur `StylePropertyMap` hinzufügt.
- [`StylePropertyMap.delete()`](/de/docs/Web/API/StylePropertyMap/delete)
  - : Methode, die die CSS-Deklaration mit der gegebenen Eigenschaft aus der `StylePropertyMap` entfernt.
- [`StylePropertyMap.clear()`](/de/docs/Web/API/StylePropertyMap/clear)
  - : Methode, die alle Deklarationen in der `StylePropertyMap` entfernt.

### `CSSUnparsedValue`

Die [`CSSUnparsedValue`](/de/docs/Web/API/CSSUnparsedValue)-Schnittstelle der CSS Typed Object Model API stellt Eigenschaftswerte dar, die auf benutzerdefinierte Eigenschaften verweisen. Sie besteht aus einer Liste von String-Fragmenten und Variablenreferenzen.

- [`CSSUnparsedValue()`](/de/docs/Web/API/CSSUnparsedValue/CSSUnparsedValue)-Konstruktor
  - : Erstellt ein neues `CSSUnparsedValue`-Objekt, das Eigenschaftswerte darstellt, die auf benutzerdefinierte Eigenschaften verweisen.
- [`CSSUnparsedValue.entries()`](/de/docs/Web/API/CSSUnparsedValue/entries)
  - : Methode, die ein Array der eigenen aufzählbaren Eigenschafts-[key, value]-Paare eines gegebenen Objekts in der gleichen Reihenfolge wie in einer `for...in`-Schleife zurückgibt (der Unterschied besteht darin, dass eine for-in Schleife auch Eigenschaften in der Prototypkette aufzählt).
- [`CSSUnparsedValue.forEach()`](/de/docs/Web/API/CSSUnparsedValue/forEach)
  - : Methode, die eine bereitgestellte Funktion einmal für jedes Element des `CSSUnparsedValue` ausführt.
- [`CSSUnparsedValue.keys()`](/de/docs/Web/API/CSSUnparsedValue/keys)
  - : Methode, die ein neues _Array-Iterator_-Objekt zurückgibt, das die Schlüssel für jeden Index im Array enthält.

### `CSSKeywordValue` Serialisierung

Die [`CSSKeywordValue`](/de/docs/Web/API/CSSKeywordValue)-Schnittstelle der CSS Typed Object Model API erstellt ein Objekt, um CSS-Schlüsselwörter und andere Bezeichner darzustellen.

- [`CSSKeywordValue()`](/de/docs/Web/API/CSSKeywordValue/CSSKeywordValue)-Konstruktor
  - : Der Konstruktor erstellt ein neues [`CSSKeywordValue()`](/de/docs/Web/API/CSSKeywordValue/CSSKeywordValue)-Objekt, das CSS-Schlüsselwörter und andere Bezeichner darstellt.
- [`CSSKeywordValue.value()`](/de/docs/Web/API/CSSKeywordValue/value)
  - : Eigenschaft der `CSSKeywordValue`-Schnittstelle, die den Wert des `CSSKeywordValue` zurückgibt oder setzt.

## CSSStyleValue Schnittstellen

[`CSSStyleValue`](/de/docs/Web/API/CSSStyleValue) ist die Basisklasse, durch die alle CSS-Werte ausgedrückt werden. Unterklassen umfassen:

- [`CSSImageValue`](/de/docs/Web/API/CSSImageValue)
  - : Eine Schnittstelle, die Werte für Eigenschaften darstellt, die ein Bild annehmen, beispielsweise {{cssxref("background-image")}}, {{cssxref("list-style-image")}} oder {{cssxref("border-image-source")}}.
- [`CSSKeywordValue`](/de/docs/Web/API/CSSKeywordValue)
  - : Eine Schnittstelle, die ein Objekt erstellt, um CSS-Schlüsselwörter und andere Bezeichner darzustellen. Wenn sie dort verwendet wird, wo ein String erwartet wird, gibt sie den Wert von `CSSKeyword.value` zurück.
- [`CSSMathValue`](/de/docs/Web/API/CSSMathValue)
  - : Ein Baum von Unterklassen, die numerische Werte repräsentieren, die komplizierter sind als ein einzelner Wert und eine Einheit, einschließlich:
    - [`CSSMathMax`](/de/docs/Web/API/CSSMathMax) - repräsentiert die CSS-{{cssxref("max","max()")}}-Funktion.
    - [`CSSMathMin`](/de/docs/Web/API/CSSMathMin) - repräsentiert die CSS-{{cssxref("min","min()")}}-Funktion.
    - [`CSSMathClamp`](/de/docs/Web/API/CSSMathClamp) - repräsentiert die CSS-{{cssxref("clamp","clamp()")}}-Funktion.
    - [`CSSMathNegate`](/de/docs/Web/API/CSSMathNegate) - negiert den ihm übergebenen Wert.
    - [`CSSMathInvert`](/de/docs/Web/API/CSSMathInvert) - repräsentiert einen CSS-{{cssxref("calc","calc()")}}-Wert, der als `calc(1 / <value>)` verwendet wird. Dieser Typ wird intern durch [`div()`](/de/docs/Web/API/CSSNumericValue/div) verwendet, um ein entsprechendes [`CSSMathProduct`](/de/docs/Web/API/CSSMathProduct) zu erstellen.
    - [`CSSMathProduct`](/de/docs/Web/API/CSSMathProduct) - repräsentiert das Ergebnis, das durch Aufruf von [`mul()`](/de/docs/Web/API/CSSNumericValue/mul) oder [`div()`](/de/docs/Web/API/CSSNumericValue/div) auf [`CSSNumericValue`](/de/docs/Web/API/CSSNumericValue) erhalten wird.
    - [`CSSMathSum`](/de/docs/Web/API/CSSMathSum) - repräsentiert das Ergebnis, das durch Aufruf von [`add()`](/de/docs/Web/API/CSSNumericValue/add), [`sub()`](/de/docs/Web/API/CSSNumericValue/sub) oder [`toSum()`](/de/docs/Web/API/CSSNumericValue/toSum) auf [`CSSNumericValue`](/de/docs/Web/API/CSSNumericValue) erhalten wird.

- [`CSSNumericValue`](/de/docs/Web/API/CSSNumericValue)
  - : Eine Schnittstelle, die Operationen darstellt, die alle numerischen Werte ausführen können, einschließlich:
    - [`CSSNumericValue.add`](/de/docs/Web/API/CSSNumericValue/add) - Fügt die angegebenen Zahlen zum `CSSNumericValue` hinzu.
    - [`CSSNumericValue.sub`](/de/docs/Web/API/CSSNumericValue/sub) - Subtrahiert die angegebenen Zahlen vom `CSSNumericValue`.
    - [`CSSNumericValue.mul`](/de/docs/Web/API/CSSNumericValue/mul) - Multipliziert die angegebenen Zahlen mit dem `CSSNumericValue`.
    - [`CSSNumericValue.div`](/de/docs/Web/API/CSSNumericValue/div) - Dividiert das `CSSNumericValue` durch den angegebenen Wert und wirft einen Fehler, wenn `0`.
    - [`CSSNumericValue.min`](/de/docs/Web/API/CSSNumericValue/min) - Gibt den kleinsten übergebenen Wert zurück.
    - [`CSSNumericValue.max`](/de/docs/Web/API/CSSNumericValue/max) - Gibt den größten übergebenen Wert zurück.
    - [`CSSNumericValue.equals`](/de/docs/Web/API/CSSNumericValue/equals) - Gibt true zurück, wenn alle Werte den exakt gleichen Typ und Wert in der gleichen Reihenfolge haben. Andernfalls false.
    - [`CSSNumericValue.to`](/de/docs/Web/API/CSSNumericValue/to) - Konvertiert `value` in einen anderen mit der angegebenen _Einheit_.
    - [`CSSNumericValue.toSum`](/de/docs/Web/API/CSSNumericValue/toSum)
    - [`CSSNumericValue.type`](/de/docs/Web/API/CSSNumericValue/type)
    - [`CSSNumericValue.parse`](/de/docs/Web/API/CSSNumericValue/parse_static) - Gibt eine Zahl zurück, die aus einem CSS-String geparst wurde.

- [`CSSPositionValue`](/de/docs/Web/API/CSSPositionValue)
  - : Repräsentiert Werte für Eigenschaften, die eine Position annehmen, zum Beispiel object-position.
- [`CSSTransformValue`](/de/docs/Web/API/CSSTransformValue)
  - : Eine Schnittstelle, die eine Liste von {{cssxref("transform")}}-Listenwerten darstellt. Sie "enthält" ein oder mehrere [`CSSTransformComponent`](/de/docs/Web/API/CSSTransformComponent)s, die einzelne `transform`-Funktionswerte repräsentieren.
- [`CSSUnitValue`](/de/docs/Web/API/CSSUnitValue)
  - : Eine Schnittstelle, die numerische Werte darstellt, die als eine einzelne Einheit oder eine benannte Zahl und Prozentsatz dargestellt werden können.
- [`CSSUnparsedValue`](/de/docs/Web/API/CSSUnparsedValue)
  - : Repräsentiert Eigenschaftswerte, die auf [benutzerdefinierte Eigenschaften](/de/docs/Web/CSS/Reference/Properties/--*) verweisen. Sie besteht aus einer Liste von String-Fragmenten und Variablenreferenzen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [CSS Painting API](/de/docs/Web/API/CSS_Painting_API)
- [Verwendung des CSS Typed Object Model](/de/docs/Web/API/CSS_Typed_OM_API/Guide)
- [CSS Houdini](/de/docs/Web/API/Houdini_APIs)
