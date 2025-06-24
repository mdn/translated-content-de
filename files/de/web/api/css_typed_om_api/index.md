---
title: CSS Typed Object Model API
slug: Web/API/CSS_Typed_OM_API
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{DefaultAPISidebar("CSS Typed Object Model API")}}

Die CSS Typed Object Model API vereinfacht die Manipulation von CSS-Eigenschaften, indem sie CSS-Werte als typisierte JavaScript-Objekte und nicht als Strings bereitstellt. Dies vereinfacht nicht nur die CSS-Manipulation, sondern verringert auch die negativen Auswirkungen auf die Leistung im Vergleich zu [`HTMLElement.style`](/de/docs/Web/API/HTMLElement/style).

In der Regel können CSS-Werte in JavaScript als Strings gelesen und geschrieben werden, was langsam und umständlich sein kann. Die CSS Typed Object Model API bietet Schnittstellen zur Interaktion mit zugrundeliegenden Werten, indem sie diese als spezialisierte JS-Objekte darstellt, die leichter und zuverlässiger manipuliert und verstanden werden können als das Parsen und Zusammenfügen von Strings. Dies ist für die Autoren einfacher (zum Beispiel werden Zahlenwerte mit echten JS-Zahlen widergespiegelt und haben einheitenbewusste mathematische Operationen definiert). Es ist auch allgemein schneller, da Werte direkt manipuliert und dann kostengünstig in zugrunde liegende Werte zurückübersetzt werden können, ohne dass CSS-Strings erstellt und geparst werden müssen.

CSS Typed OM ermöglicht sowohl die performante Manipulation von Werten, die CSS-Eigenschaften zugewiesen sind, als auch die Erstellung von wartbarem Code, der sowohl verständlicher als auch leichter zu schreiben ist.

## Schnittstellen

### `CSSStyleValue`

Die [`CSSStyleValue`](/de/docs/Web/API/CSSStyleValue)-Schnittstelle der CSS Typed Object Model API ist die Basisklasse aller CSS-Werte, die über die Typed OM API zugänglich sind. Eine Instanz dieser Klasse kann überall dort verwendet werden, wo ein String erwartet wird.

- [`CSSStyleValue.parse()`](/de/docs/Web/API/CSSStyleValue/parse_static)
  - : Methode, die es ermöglicht, `CSSNumericValue` aus einem CSS-String zu konstruieren. Es setzt eine bestimmte CSS-Eigenschaft auf die angegebenen Werte und gibt den ersten Wert als `CSSStyleValue`-Objekt zurück.
- [`CSSStyleValue.parseAll()`](/de/docs/Web/API/CSSStyleValue/parseAll_static)
  - : Methode, die alle Vorkommen einer bestimmten CSS-Eigenschaft auf den angegebenen Wert setzt und ein Array von `CSSStyleValue`-Objekten zurückgibt, die jeweils einen der angegebenen Werte enthalten.

### `StylePropertyMap`

Die [`StylePropertyMap`](/de/docs/Web/API/StylePropertyMap)-Schnittstelle der CSS Typed Object Model API bietet eine Darstellung eines CSS-Deklarationsblocks, der eine Alternative zu `CSSStyleDeclaration` darstellt.

- [`StylePropertyMap.set()`](/de/docs/Web/API/StylePropertyMap/set)
  - : Methode, die die CSS-Deklaration mit der gegebenen Eigenschaft auf den angegebenen Wert ändert.
- [`StylePropertyMap.append()`](/de/docs/Web/API/StylePropertyMap/append)
  - : Methode, die eine neue CSS-Deklaration zur `StylePropertyMap` mit der gegebenen Eigenschaft und dem Wert hinzufügt.
- [`StylePropertyMap.delete()`](/de/docs/Web/API/StylePropertyMap/delete)
  - : Methode, die die CSS-Deklaration mit der gegebenen Eigenschaft aus der `StylePropertyMap` entfernt.
- [`StylePropertyMap.clear()`](/de/docs/Web/API/StylePropertyMap/clear)
  - : Methode, die alle Deklarationen in der `StylePropertyMap` entfernt.

### `CSSUnparsedValue`

Die [`CSSUnparsedValue`](/de/docs/Web/API/CSSUnparsedValue)-Schnittstelle der CSS Typed Object Model API repräsentiert Eigenschaftswerte, die auf benutzerdefinierte Eigenschaften verweisen. Sie besteht aus einer Liste von String-Fragmenten und Variablenverweisen.

- [`CSSUnparsedValue()`](/de/docs/Web/API/CSSUnparsedValue/CSSUnparsedValue) Konstruktor
  - : Erstellt ein neues `CSSUnparsedValue`-Objekt, das Eigenschaftswerte repräsentiert, die auf benutzerdefinierte Eigenschaften verweisen.
- [`CSSUnparsedValue.entries()`](/de/docs/Web/API/CSSUnparsedValue/entries)
  - : Methode, die ein Array der eigenen aufzählbaren Eigenschaften `[Schlüssel, Wert]`-Paare eines gegebenen Objekts in der gleichen Reihenfolge wie bei einer `for...in`-Schleife zurückgibt (der Unterschied besteht darin, dass eine for-in-Schleife auch Eigenschaften in der Prototyp-Kette aufzählt).
- [`CSSUnparsedValue.forEach()`](/de/docs/Web/API/CSSUnparsedValue/forEach)
  - : Methode, die eine bereitgestellte Funktion einmal für jedes Element des `CSSUnparsedValue` ausführt.
- [`CSSUnparsedValue.keys()`](/de/docs/Web/API/CSSUnparsedValue/keys)
  - : Methode, die ein neues _Array-Iterator_ Objekt zurückgibt, das die Schlüssel für jedes Index im Array beinhaltet.

### `CSSKeywordValue` Serialisierung

Die [`CSSKeywordValue`](/de/docs/Web/API/CSSKeywordValue)-Schnittstelle der CSS Typed Object Model API erstellt ein Objekt, um CSS-Schlüsselwörter und andere Bezeichner darzustellen.

- [`CSSKeywordValue()`](/de/docs/Web/API/CSSKeywordValue/CSSKeywordValue) Konstruktor
  - : Konstruktor erstellt ein neues [`CSSKeywordValue()`](/de/docs/Web/API/CSSKeywordValue/CSSKeywordValue)-Objekt, das CSS-Schlüsselwörter und andere Bezeichner repräsentiert.
- [`CSSKeywordValue.value()`](/de/docs/Web/API/CSSKeywordValue/value)
  - : Eigenschaft der `CSSKeywordValue`-Schnittstelle, die den Wert des `CSSKeywordValue` zurückgibt oder setzt.

## CSSStyleValue Schnittstellen

[`CSSStyleValue`](/de/docs/Web/API/CSSStyleValue) ist die Basisklasse, durch die alle CSS-Werte ausgedrückt werden. Unterklassen sind:

- [`CSSImageValue`](/de/docs/Web/API/CSSImageValue)
  - : Eine Schnittstelle, die Werte für Eigenschaften repräsentiert, die ein Bild erfordern, zum Beispiel [`background-image`](/de/docs/Web/CSS/background-image), [`list-style-image`](/de/docs/Web/CSS/list-style-image) oder [`border-image-source`](/de/docs/Web/CSS/border-image-source).
- [`CSSKeywordValue`](/de/docs/Web/API/CSSKeywordValue)
  - : Eine Schnittstelle, die ein Objekt erstellt, um CSS-Schlüsselwörter und andere Bezeichner darzustellen. Wenn sie dort verwendet wird, wo ein String erwartet wird, wird der Wert von `CSSKeyword.value` zurückgegeben.
- [`CSSMathValue`](/de/docs/Web/API/CSSMathValue)

  - : Ein Baum von Unterklassen, die numerische Werte repräsentieren, die komplizierter sind als ein einzelner Wert und eine Einheit, einschließlich:
    - [`CSSMathInvert`](/de/docs/Web/API/CSSMathInvert) - repräsentiert einen CSS {{cssxref("calc","calc()")}}-Wert, der als `calc(1 / <value>)` verwendet wird.
    - [`CSSMathMax`](/de/docs/Web/API/CSSMathMax) - repräsentiert die CSS {{cssxref("max","max()")}}-Funktion.
    - [`CSSMathMin`](/de/docs/Web/API/CSSMathMin) - repräsentiert die CSS {{cssxref("min","min()")}}-Funktion.
    - [`CSSMathNegate`](/de/docs/Web/API/CSSMathNegate) - negiert den ihm übergebenen Wert.
    - [`CSSMathProduct`](/de/docs/Web/API/CSSMathProduct) - repräsentiert das Ergebnis, das durch den Aufruf von [`add()`](/de/docs/Web/API/CSSNumericValue/add), [`sub()`](/de/docs/Web/API/CSSNumericValue/sub) oder [`toSum()`](/de/docs/Web/API/CSSNumericValue/toSum) auf [`CSSNumericValue`](/de/docs/Web/API/CSSNumericValue) erhalten wird.
    - [`CSSMathSum`](/de/docs/Web/API/CSSMathSum) - repräsentiert das Ergebnis, das durch den Aufruf von [`add()`](/de/docs/Web/API/CSSNumericValue/add), [`sub()`](/de/docs/Web/API/CSSNumericValue/sub) oder [`toSum()`](/de/docs/Web/API/CSSNumericValue/toSum) auf [`CSSNumericValue`](/de/docs/Web/API/CSSNumericValue) erhalten wird.

- [`CSSNumericValue`](/de/docs/Web/API/CSSNumericValue)

  - : Eine Schnittstelle, die Operationen repräsentiert, die alle numerischen Werte durchführen können, einschließlich:
    - [`CSSNumericValue.add`](/de/docs/Web/API/CSSNumericValue/add) - Fügt die angegebenen Zahlen zur `CSSNumericValue` hinzu.
    - [`CSSNumericValue.sub`](/de/docs/Web/API/CSSNumericValue/sub) - Zieht die angegebenen Zahlen von der `CSSNumericValue` ab.
    - [`CSSNumericValue.mul`](/de/docs/Web/API/CSSNumericValue/mul) - Multipliziert die angegebenen Zahlen zur `CSSNumericValue`.
    - [`CSSNumericValue.div`](/de/docs/Web/API/CSSNumericValue/div) - Teilt die `CSSNumericValue` durch den angegebenen Wert und löst einen Fehler aus, wenn `0`.
    - [`CSSNumericValue.min`](/de/docs/Web/API/CSSNumericValue/min) - Gibt den minimalen übergebenen Wert zurück
    - [`CSSNumericValue.max`](/de/docs/Web/API/CSSNumericValue/max) - Gibt den maximalen übergebenen Wert zurück
    - [`CSSNumericValue.equals`](/de/docs/Web/API/CSSNumericValue/equals) - Gibt true zurück, wenn alle Werte vom exakt gleichen Typ und Wert, in der gleichen Reihenfolge sind. Andernfalls false
    - [`CSSNumericValue.to`](/de/docs/Web/API/CSSNumericValue/to) - Konvertiert `value` in einen anderen mit der angegebenen Einheit.
    - [`CSSNumericValue.toSum`](/de/docs/Web/API/CSSNumericValue/toSum)
    - [`CSSNumericValue.type`](/de/docs/Web/API/CSSNumericValue/type)
    - [`CSSNumericValue.parse`](/de/docs/Web/API/CSSNumericValue/parse_static) - Gibt eine Zahl zurück, die aus einem CSS-String geparst wurde

- [`CSSPositionValue`](/de/docs/Web/API/CSSPositionValue)
  - : Repräsentiert Werte für Eigenschaften, die eine Position erfordern, zum Beispiel object-position.
- [`CSSTransformValue`](/de/docs/Web/API/CSSTransformValue)
  - : Eine Schnittstelle, die eine Liste von [`transform`](/de/docs/Web/CSS/transform)-Listenelementwerten repräsentiert. Sie "beinhaltet" ein oder mehrere [`CSSTransformComponent`](/de/docs/Web/API/CSSTransformComponent)s, die einzelne `transform`-Funktionswerte darstellen.
- [`CSSUnitValue`](/de/docs/Web/API/CSSUnitValue)
  - : Eine Schnittstelle, die numerische Werte repräsentiert, die als eine einzige Einheit oder als benannte Zahl und Prozentzahl dargestellt werden können.
- [`CSSUnparsedValue`](/de/docs/Web/API/CSSUnparsedValue)
  - : Repräsentiert Eigenschaftswerte, die auf [benutzerdefinierte Eigenschaften](/de/docs/Web/CSS/--*) verweisen. Sie besteht aus einer Liste von String-Fragmenten und Variablenverweisen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [CSS Painting API](/de/docs/Web/API/CSS_Painting_API)
- [Verwenden des CSS Typed Object Model](/de/docs/Web/API/CSS_Typed_OM_API/Guide)
- [CSS Houdini](/de/docs/Web/API/Houdini_APIs)
