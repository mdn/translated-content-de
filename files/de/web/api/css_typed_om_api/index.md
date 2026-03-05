---
title: CSS Typed Object Model API
slug: Web/API/CSS_Typed_OM_API
l10n:
  sourceCommit: 3484971cfbbb1d63a7faa765457180136d8ece34
---

{{DefaultAPISidebar("CSS Typed Object Model API")}}

Die CSS Typed Object Model API vereinfacht die Manipulation von CSS-Eigenschaften, indem sie CSS-Werte als typisierte JavaScript-Objekte statt als Strings verfügbar macht. Dies vereinfacht nicht nur die Manipulation von CSS, sondern verringert auch die negativen Auswirkungen auf die Leistung im Vergleich zu [`HTMLElement.style`](/de/docs/Web/API/HTMLElement/style).

Normalerweise können CSS-Werte in JavaScript als Strings gelesen und geschrieben werden, was langsam und umständlich sein kann. Die CSS Typed Object Model API bietet Schnittstellen, um mit den zugrunde liegenden Werten zu interagieren, indem sie diese mit spezialisierten JS-Objekten darstellt, die einfacher und zuverlässiger manipulierbar und verständlich sind als das Parsen und Verketten von Strings. Dies ist für Autoren einfacher (beispielsweise werden numerische Werte mit echten JS-Zahlen reflektiert und haben einheitsgeprüfte mathematische Operationen definiert). Es ist auch allgemein schneller, da Werte direkt manipulierbar und dann kostengünstig zurück in zugrunde liegende Werte übersetzbar sind, ohne sowohl CSS-Strings zu erstellen als auch zu parsen.

Die CSS Typed OM ermöglicht sowohl die performante Manipulation von Werten, die CSS-Eigenschaften zugewiesen sind, als auch die Erstellung von wartbarem Code, der verständlicher und einfacher zu schreiben ist.

## Schnittstellen

### `CSSStyleValue`

Das [`CSSStyleValue`](/de/docs/Web/API/CSSStyleValue)-Interface der CSS Typed Object Model API ist die Basisklasse aller über die Typed OM API zugänglichen CSS-Werte. Eine Instanz dieser Klasse kann überall verwendet werden, wo ein String erwartet wird.

- [`CSSStyleValue.parse()`](/de/docs/Web/API/CSSStyleValue/parse_static)
  - : Methode, die es ermöglicht, `CSSNumericValue` aus einem CSS-String zu konstruieren. Sie setzt eine spezifische CSS-Eigenschaft auf die angegebenen Werte und gibt den ersten Wert als `CSSStyleValue`-Objekt zurück.
- [`CSSStyleValue.parseAll()`](/de/docs/Web/API/CSSStyleValue/parseAll_static)
  - : Methode, die alle Vorkommen einer spezifischen CSS-Eigenschaft auf den angegebenen Wert setzt und ein Array von `CSSStyleValue`-Objekten zurückgibt, die jeweils einen der bereitgestellten Werte enthalten.

### `StylePropertyMap`

Das [`StylePropertyMap`](/de/docs/Web/API/StylePropertyMap)-Interface der CSS Typed Object Model API bietet eine Darstellung eines CSS-Deklarationsblocks als Alternative zu `CSSStyleDeclaration`.

- [`StylePropertyMap.set()`](/de/docs/Web/API/StylePropertyMap/set)
  - : Methode, die die CSS-Deklaration mit der angegebenen Eigenschaft auf den angegebenen Wert ändert.
- [`StylePropertyMap.append()`](/de/docs/Web/API/StylePropertyMap/append)
  - : Methode, die eine neue CSS-Deklaration zur `StylePropertyMap` mit der angegebenen Eigenschaft und dem Wert hinzufügt.
- [`StylePropertyMap.delete()`](/de/docs/Web/API/StylePropertyMap/delete)
  - : Methode, die die CSS-Deklaration mit der angegebenen Eigenschaft aus der `StylePropertyMap` entfernt.
- [`StylePropertyMap.clear()`](/de/docs/Web/API/StylePropertyMap/clear)
  - : Methode, die alle Deklarationen in der `StylePropertyMap` entfernt.

### `CSSUnparsedValue`

Das [`CSSUnparsedValue`](/de/docs/Web/API/CSSUnparsedValue)-Interface der CSS Typed Object Model API repräsentiert Eigenschaftswerte, die auf benutzerdefinierte Eigenschaften verweisen. Es besteht aus einer Liste von Stringfragmenten und Variablenreferenzen.

- [`CSSUnparsedValue()`](/de/docs/Web/API/CSSUnparsedValue/CSSUnparsedValue) Konstruktor
  - : Erstellt ein neues `CSSUnparsedValue`-Objekt, das Eigenschaftswerte darstellt, die auf benutzerdefinierte Eigenschaften verweisen.
- [`CSSUnparsedValue.entries()`](/de/docs/Web/API/CSSUnparsedValue/entries)
  - : Methode, die ein Array der eigenen aufzählbaren `[key, value]`-Paare eines gegebenen Objekts in derselben Reihenfolge zurückgibt, wie sie von einer `for...in`-Schleife bereitgestellt wird (der Unterschied besteht darin, dass eine for-in-Schleife auch Eigenschaften in der Prototypkette aufzählt).
- [`CSSUnparsedValue.forEach()`](/de/docs/Web/API/CSSUnparsedValue/forEach)
  - : Methode, die eine bereitgestellte Funktion einmal für jedes Element des `CSSUnparsedValue` ausführt.
- [`CSSUnparsedValue.keys()`](/de/docs/Web/API/CSSUnparsedValue/keys)
  - : Methode, die ein neues _Array-Iterator_-Objekt zurückgibt, das die Schlüssel für jeden Index im Array enthält.

### `CSSKeywordValue` Serialisierung

Das [`CSSKeywordValue`](/de/docs/Web/API/CSSKeywordValue)-Interface der CSS Typed Object Model API erstellt ein Objekt, um CSS-Schlüsselwörter und andere Bezeichner darzustellen.

- [`CSSKeywordValue()`](/de/docs/Web/API/CSSKeywordValue/CSSKeywordValue) Konstruktor
  - : Konstruktor erstellt ein neues [`CSSKeywordValue()`](/de/docs/Web/API/CSSKeywordValue/CSSKeywordValue)-Objekt, das CSS-Schlüsselwörter und andere Bezeichner darstellt.
- [`CSSKeywordValue.value()`](/de/docs/Web/API/CSSKeywordValue/value)
  - : Eigenschaft des `CSSKeywordValue`-Interfaces, die den Wert des `CSSKeywordValue` zurückgibt oder setzt.

## CSSStyleValue Schnittstellen

[`CSSStyleValue`](/de/docs/Web/API/CSSStyleValue) ist die Basisklasse, durch die alle CSS-Werte ausgedrückt werden. Unterklassen umfassen:

- [`CSSImageValue`](/de/docs/Web/API/CSSImageValue)
  - : Eine Schnittstelle, die Werte für Eigenschaften darstellt, die ein Bild als Wert annehmen, beispielsweise {{cssxref("background-image")}}, {{cssxref("list-style-image")}} oder {{cssxref("border-image-source")}}.
- [`CSSKeywordValue`](/de/docs/Web/API/CSSKeywordValue)
  - : Eine Schnittstelle, die ein Objekt erstellt, um CSS-Schlüsselwörter und andere Bezeichner darzustellen. Wenn es an Stellen verwendet wird, an denen ein String erwartet wird, gibt es den Wert von `CSSKeyword.value` zurück.
- [`CSSMathValue`](/de/docs/Web/API/CSSMathValue)
  - : Ein Baum aus Unterklassen, der numerische Werte repräsentiert, die komplexer sind als ein einzelner Wert und eine Einheit, einschließlich:
    - [`CSSMathMax`](/de/docs/Web/API/CSSMathMax) - repräsentiert die CSS-{{cssxref("max","max()")}}-Funktion.
    - [`CSSMathMin`](/de/docs/Web/API/CSSMathMin) - repräsentiert die CSS-{{cssxref("min","min()")}}-Funktion.
    - [`CSSMathNegate`](/de/docs/Web/API/CSSMathNegate) - negiert den übergebenen Wert.
    - [`CSSMathInvert`](/de/docs/Web/API/CSSMathInvert) - repräsentiert einen CSS-{{cssxref("calc","calc()")}}-Wert, der als `calc(1 / <value>)` verwendet wird. Dieser Typ wird intern von [`div()`](/de/docs/Web/API/CSSNumericValue/div) verwendet, um ein entsprechendes [`CSSMathProduct`](/de/docs/Web/API/CSSMathProduct) zu erstellen.
    - [`CSSMathProduct`](/de/docs/Web/API/CSSMathProduct) - repräsentiert das Ergebnis, das durch Aufruf von [`mul()`](/de/docs/Web/API/CSSNumericValue/mul) oder [`div()`](/de/docs/Web/API/CSSNumericValue/div) auf [`CSSNumericValue`](/de/docs/Web/API/CSSNumericValue) erhalten wird.
    - [`CSSMathSum`](/de/docs/Web/API/CSSMathSum) - repräsentiert das Ergebnis, das durch Aufruf von [`add()`](/de/docs/Web/API/CSSNumericValue/add), [`sub()`](/de/docs/Web/API/CSSNumericValue/sub) oder [`toSum()`](/de/docs/Web/API/CSSNumericValue/toSum) auf [`CSSNumericValue`](/de/docs/Web/API/CSSNumericValue) erhalten wird.

- [`CSSNumericValue`](/de/docs/Web/API/CSSNumericValue)
  - : Ein Interface, das Operationen darstellt, die alle numerischen Werte ausführen können, einschließlich:
    - [`CSSNumericValue.add`](/de/docs/Web/API/CSSNumericValue/add) - Fügt dem `CSSNumericValue` die angegebenen Zahlen hinzu.
    - [`CSSNumericValue.sub`](/de/docs/Web/API/CSSNumericValue/sub) - Subtrahiert die angegebenen Zahlen vom `CSSNumericValue`.
    - [`CSSNumericValue.mul`](/de/docs/Web/API/CSSNumericValue/mul) - Multipliziert die angegebenen Zahlen mit dem `CSSNumericValue`.
    - [`CSSNumericValue.div`](/de/docs/Web/API/CSSNumericValue/div) - Teilt das `CSSNumericValue` durch den angegebenen Wert und löst einen Fehler aus, wenn `0`.
    - [`CSSNumericValue.min`](/de/docs/Web/API/CSSNumericValue/min) - Gibt den minimal übergebenen Wert zurück.
    - [`CSSNumericValue.max`](/de/docs/Web/API/CSSNumericValue/max) - Gibt den maximal übergebenen Wert zurück.
    - [`CSSNumericValue.equals`](/de/docs/Web/API/CSSNumericValue/equals) - Gibt true zurück, wenn alle Werte vom exakt gleichen Typ und Wert und in der gleichen Reihenfolge sind. Andernfalls false.
    - [`CSSNumericValue.to`](/de/docs/Web/API/CSSNumericValue/to) - Konvertiert `value` in einen anderen mit der angegebenen _Einheit_.
    - [`CSSNumericValue.toSum`](/de/docs/Web/API/CSSNumericValue/toSum)
    - [`CSSNumericValue.type`](/de/docs/Web/API/CSSNumericValue/type)
    - [`CSSNumericValue.parse`](/de/docs/Web/API/CSSNumericValue/parse_static) - Gibt eine Zahl zurück, die aus einem CSS-String geparst wurde.

- [`CSSPositionValue`](/de/docs/Web/API/CSSPositionValue)
  - : Repräsentiert Werte für Eigenschaften, die eine Position erfordern, beispielsweise object-position.
- [`CSSTransformValue`](/de/docs/Web/API/CSSTransformValue)
  - : Ein Interface, das eine Liste von {{cssxref("transform")}}-Wertlisten repräsentiert. Sie "enthalten" einen oder mehrere [`CSSTransformComponent`](/de/docs/Web/API/CSSTransformComponent)s, die einzelne `transform`-Funktionswerte darstellen.
- [`CSSUnitValue`](/de/docs/Web/API/CSSUnitValue)
  - : Ein Interface, das numerische Werte darstellt, die als eine einzige Einheit oder als benannte Zahl und Prozentsatz dargestellt werden können.
- [`CSSUnparsedValue`](/de/docs/Web/API/CSSUnparsedValue)
  - : Repräsentiert Eigenschaftswerte, die auf [benutzerdefinierte Eigenschaften](/de/docs/Web/CSS/Reference/Properties/--*) verweisen. Es besteht aus einer Liste von Stringfragmenten und Variablenreferenzen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [CSS Painting API](/de/docs/Web/API/CSS_Painting_API)
- [Verwendung des CSS Typed Object Model](/de/docs/Web/API/CSS_Typed_OM_API/Guide)
- [CSS Houdini](/de/docs/Web/API/Houdini_APIs)
