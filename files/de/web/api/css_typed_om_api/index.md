---
title: CSS Typed Object Model API
slug: Web/API/CSS_Typed_OM_API
l10n:
  sourceCommit: 0c13af55e869cbc54830fd1a601fd05f60717375
---

{{DefaultAPISidebar("CSS Typed Object Model API")}}

Die CSS Typed Object Model API vereinfacht die Manipulation von CSS-Eigenschaften, indem CSS-Werte als typisierte JavaScript-Objekte statt als Zeichenketten dargestellt werden. Dies vereinfacht nicht nur die Manipulation von CSS, sondern verringert auch die negativen Auswirkungen auf die Leistung im Vergleich zu [`HTMLElement.style`](/de/docs/Web/API/HTMLElement/style).

Im Allgemeinen können CSS-Werte in JavaScript als Zeichenketten gelesen und geschrieben werden, was langsam und umständlich sein kann. Die CSS Typed Object Model API stellt Schnittstellen zur Verfügung, um mit den zugrunde liegenden Werten zu interagieren, indem sie diese mit spezialisierten JS-Objekten darstellt, die leichter und zuverlässiger manipuliert und verstanden werden können als durch Zeichenkettenparsing und -konkatenation. Dies ist für Autoren einfacher (zum Beispiel werden numerische Werte als tatsächliche JS-Zahlen reflektiert und verfügen über einheitsspezifische mathematische Operationen). Es ist in der Regel auch schneller, da Werte direkt manipuliert und dann kostengünstig wieder in zugrunde liegende Werte übersetzt werden können, ohne Zeichenketten für CSS aufbauen und parsen zu müssen.

Die CSS Typed OM ermöglicht sowohl eine performante Manipulation von Werten, die CSS-Eigenschaften zugewiesen sind, als auch wartbaren Code, der verständlicher und leichter zu schreiben ist.

## Schnittstellen

### `CSSStyleValue`

Die [`CSSStyleValue`](/de/docs/Web/API/CSSStyleValue)-Schnittstelle der CSS Typed Object Model API ist die Basisklasse aller CSS-Werte, die über die Typed OM API zugänglich sind. Eine Instanz dieser Klasse kann überall dort verwendet werden, wo eine Zeichenkette erwartet wird.

- [`CSSStyleValue.parse()`](/de/docs/Web/API/CSSStyleValue/parse_static)
  - : Eine Methode, mit der `CSSNumericValue` aus einer CSS-Zeichenkette aufgebaut werden kann. Sie setzt eine bestimmte CSS-Eigenschaft auf die angegebenen Werte und gibt den ersten Wert als `CSSStyleValue`-Objekt zurück.
- [`CSSStyleValue.parseAll()`](/de/docs/Web/API/CSSStyleValue/parseAll_static)
  - : Eine Methode, die alle Vorkommen einer bestimmten CSS-Eigenschaft auf den angegebenen Wert setzt und ein Array von `CSSStyleValue`-Objekten zurückgibt, von denen jedes einen der angegebenen Werte enthält.

### `StylePropertyMap`

Die [`StylePropertyMap`](/de/docs/Web/API/StylePropertyMap)-Schnittstelle der CSS Typed Object Model API bietet eine Darstellung eines CSS-Deklarationsblocks, der eine Alternative zu `CSSStyleDeclaration` darstellt.

- [`StylePropertyMap.set()`](/de/docs/Web/API/StylePropertyMap/set)
  - : Eine Methode, die die CSS-Deklaration mit der angegebenen Eigenschaft auf den angegebenen Wert ändert.
- [`StylePropertyMap.append()`](/de/docs/Web/API/StylePropertyMap/append)
  - : Eine Methode, die eine neue CSS-Deklaration mit der angegebenen Eigenschaft und dem Wert zur `StylePropertyMap` hinzufügt.
- [`StylePropertyMap.delete()`](/de/docs/Web/API/StylePropertyMap/delete)
  - : Eine Methode, die die CSS-Deklaration mit der angegebenen Eigenschaft aus der `StylePropertyMap` entfernt.
- [`StylePropertyMap.clear()`](/de/docs/Web/API/StylePropertyMap/clear)
  - : Eine Methode, die alle Deklarationen in der `StylePropertyMap` entfernt.

### `CSSUnparsedValue`

Die [`CSSUnparsedValue`](/de/docs/Web/API/CSSUnparsedValue)-Schnittstelle der CSS Typed Object Model API repräsentiert Eigenschaftswerte, die auf benutzerdefinierte Eigenschaften verweisen. Sie besteht aus einer Liste von Zeichenkettenfragmenten und Variablereferenzen.

- [`CSSUnparsedValue()`](/de/docs/Web/API/CSSUnparsedValue/CSSUnparsedValue) Konstruktor
  - : Erstellt ein neues `CSSUnparsedValue`-Objekt, das Eigenschaftswerte repräsentiert, die auf benutzerdefinierte Eigenschaften verweisen.
- [`CSSUnparsedValue.entries()`](/de/docs/Web/API/CSSUnparsedValue/entries)
  - : Methode, die ein Array von `[key, value]`-Paaren der aufzählbaren Eigenschaften eines gegebenen Objekts in derselben Reihenfolge zurückgibt, wie es durch eine `for...in`-Schleife bereitgestellt wird (mit dem Unterschied, dass eine for-in-Schleife auch Eigenschaften in der Prototypkette aufzählt).
- [`CSSUnparsedValue.forEach()`](/de/docs/Web/API/CSSUnparsedValue/forEach)
  - : Methode, die eine bereitgestellte Funktion einmal für jedes Element des `CSSUnparsedValue` ausführt.
- [`CSSUnparsedValue.keys()`](/de/docs/Web/API/CSSUnparsedValue/keys)
  - : Methode, die ein neues _Array-Iterator_-Objekt zurückgibt, das die Schlüssel für jeden Index im Array enthält.

### `CSSKeywordValue` Serialization

Die [`CSSKeywordValue`](/de/docs/Web/API/CSSKeywordValue)-Schnittstelle der CSS Typed Object Model API erstellt ein Objekt, um CSS-Schlüsselwörter und andere Bezeichner darzustellen.

- [`CSSKeywordValue()`](/de/docs/Web/API/CSSKeywordValue/CSSKeywordValue) Konstruktor
  - : Konstruktor erstellt ein neues [`CSSKeywordValue()`](/de/docs/Web/API/CSSKeywordValue/CSSKeywordValue) Objekt, das CSS-Schlüsselwörter und andere Bezeichner repräsentiert.
- [`CSSKeywordValue.value()`](/de/docs/Web/API/CSSKeywordValue/value)
  - : Eigenschaft der `CSSKeywordValue`-Schnittstelle, die den Wert der `CSSKeywordValue` zurückgibt oder setzt.

## `CSSStyleValue` Schnittstellen

[`CSSStyleValue`](/de/docs/Web/API/CSSStyleValue) ist die Basisklasse, über die alle CSS-Werte ausgedrückt werden. Unterklassen sind:

- [`CSSImageValue`](/de/docs/Web/API/CSSImageValue)
  - : Eine Schnittstelle, die Werte für Eigenschaften repräsentiert, die ein Bild erfordern, zum Beispiel {{cssxref("background-image")}}, {{cssxref("list-style-image")}} oder {{cssxref("border-image-source")}}.
- [`CSSKeywordValue`](/de/docs/Web/API/CSSKeywordValue)
  - : Eine Schnittstelle, die ein Objekt erstellt, um CSS-Schlüsselwörter und andere Bezeichner darzustellen. Wenn sie dort verwendet wird, wo eine Zeichenkette erwartet wird, gibt sie den Wert von `CSSKeyword.value` zurück.
- [`CSSMathValue`](/de/docs/Web/API/CSSMathValue)
  - : Ein Baum von Unterklassen, der numerische Werte darstellt, die komplizierter sind als ein einzelner Wert und eine Einheit, einschließlich:
    - [`CSSMathInvert`](/de/docs/Web/API/CSSMathInvert) - repräsentiert einen CSS {{cssxref("calc","calc()")}}-Wert, der als `calc(1 / <value>)` verwendet wird.
    - [`CSSMathMax`](/de/docs/Web/API/CSSMathMax) - repräsentiert die CSS {{cssxref("max","max()")}}-Funktion.
    - [`CSSMathMin`](/de/docs/Web/API/CSSMathMin) - repräsentiert die CSS {{cssxref("min","min()")}}-Funktion.
    - [`CSSMathNegate`](/de/docs/Web/API/CSSMathNegate) - negiert den übergebenen Wert.
    - [`CSSMathProduct`](/de/docs/Web/API/CSSMathProduct) - repräsentiert das Ergebnis, das durch das Aufrufen von [`add()`](/de/docs/Web/API/CSSNumericValue/add), [`sub()`](/de/docs/Web/API/CSSNumericValue/sub) oder [`toSum()`](/de/docs/Web/API/CSSNumericValue/toSum) auf [`CSSNumericValue`](/de/docs/Web/API/CSSNumericValue) erhalten wird.
    - [`CSSMathSum`](/de/docs/Web/API/CSSMathSum) - repräsentiert das Ergebnis, das durch das Aufrufen von [`add()`](/de/docs/Web/API/CSSNumericValue/add), [`sub()`](/de/docs/Web/API/CSSNumericValue/sub) oder [`toSum()`](/de/docs/Web/API/CSSNumericValue/toSum) auf [`CSSNumericValue`](/de/docs/Web/API/CSSNumericValue) erhalten wird.

- [`CSSNumericValue`](/de/docs/Web/API/CSSNumericValue)
  - : Eine Schnittstelle, die Operationen darstellt, die alle numerischen Werte ausführen können, einschließlich:
    - [`CSSNumericValue.add`](/de/docs/Web/API/CSSNumericValue/add) - Fügt die angegebenen Zahlen zum `CSSNumericValue` hinzu.
    - [`CSSNumericValue.sub`](/de/docs/Web/API/CSSNumericValue/sub) - Subtrahiert die angegebenen Zahlen von `CSSNumericValue`.
    - [`CSSNumericValue.mul`](/de/docs/Web/API/CSSNumericValue/mul) - Multipliziert die angegebenen Zahlen mit dem `CSSNumericValue`.
    - [`CSSNumericValue.div`](/de/docs/Web/API/CSSNumericValue/div) - Teilt das `CSSNumericValue` durch den angegebenen Wert und gibt einen Fehler aus, wenn `0`.
    - [`CSSNumericValue.min`](/de/docs/Web/API/CSSNumericValue/min) - Gibt den minimalen übergebenen Wert zurück
    - [`CSSNumericValue.max`](/de/docs/Web/API/CSSNumericValue/max) - Gibt den maximalen übergebenen Wert zurück
    - [`CSSNumericValue.equals`](/de/docs/Web/API/CSSNumericValue/equals) - Gibt true zurück, wenn alle Werte genau denselben Typ und Wert in derselben Reihenfolge haben. Andernfalls false
    - [`CSSNumericValue.to`](/de/docs/Web/API/CSSNumericValue/to) - Konvertiert `value` in einen anderen mit der angegebenen _Einheit._
    - [`CSSNumericValue.toSum`](/de/docs/Web/API/CSSNumericValue/toSum)
    - [`CSSNumericValue.type`](/de/docs/Web/API/CSSNumericValue/type)
    - [`CSSNumericValue.parse`](/de/docs/Web/API/CSSNumericValue/parse_static) - Gibt eine aus einer CSS-Zeichenkette geparste Zahl zurück

- [`CSSPositionValue`](/de/docs/Web/API/CSSPositionValue)
  - : Repräsentiert Werte für Eigenschaften, die eine Position erfordern, zum Beispiel object-position.
- [`CSSTransformValue`](/de/docs/Web/API/CSSTransformValue)
  - : Eine Schnittstelle, die eine Liste von {{cssxref("transform")}}-List-Werten repräsentiert. Sie "enthalten" einen oder mehrere [`CSSTransformComponent`](/de/docs/Web/API/CSSTransformComponent)s, die einzelne `transform`-Funktionswerte repräsentieren.
- [`CSSUnitValue`](/de/docs/Web/API/CSSUnitValue)
  - : Eine Schnittstelle, die numerische Werte darstellt, die als eine einzelne Einheit oder als benannte Zahl und Prozentsatz dargestellt werden können.
- [`CSSUnparsedValue`](/de/docs/Web/API/CSSUnparsedValue)
  - : Repräsentiert Eigenschaftswerte, die auf [benutzerdefinierte Eigenschaften](/de/docs/Web/CSS/Reference/Properties/--*) verweisen. Es besteht aus einer Liste von Zeichenkettenfragmenten und Variablereferenzen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [CSS Painting API](/de/docs/Web/API/CSS_Painting_API)
- [Verwendung des CSS Typed Object Model](/de/docs/Web/API/CSS_Typed_OM_API/Guide)
- [CSS Houdini](/de/docs/Web/API/Houdini_APIs)
