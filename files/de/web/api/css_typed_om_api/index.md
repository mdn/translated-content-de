---
title: CSS Typed Object Model API
slug: Web/API/CSS_Typed_OM_API
l10n:
  sourceCommit: b73ead4c375ac0f64bfcc9cb06cfe327b5c1df7d
---

{{DefaultAPISidebar("CSS Typed Object Model API")}}

Die CSS Typed Object Model API vereinfacht die Manipulation von CSS-Eigenschaften, indem sie CSS-Werte als typisierte JavaScript-Objekte statt als Strings zugänglich macht. Dies vereinfacht nicht nur die CSS-Manipulation, sondern verringert auch die negativen Auswirkungen auf die Leistung im Vergleich zur Verwendung von [`HTMLElement.style`](/de/docs/Web/API/HTMLElement/style).

Im Allgemeinen können CSS-Werte in JavaScript als Strings gelesen und geschrieben werden, was langsam und umständlich sein kann. Die CSS Typed Object Model API bietet Schnittstellen, um mit zugrunde liegenden Werten zu interagieren, indem sie diese mit spezialisierten JS-Objekten darstellt, die leichter und zuverlässiger als String-Parsing und -Verkettung manipuliert und verstanden werden können. Dies ist für Autoren einfacher (beispielsweise werden numerische Werte mit tatsächlichen JS-Zahlen widergespiegelt und haben einheitssensitive mathematische Operationen, die für sie definiert sind). Es ist in der Regel auch schneller, da Werte direkt manipuliert und dann kostengünstig in zugrunde liegende Werte zurückübersetzt werden können, ohne dass man sowohl CSS-Strings erstellen als auch parsen muss.

Die CSS Typed OM ermöglicht sowohl die performante Manipulation von Werten, die CSS-Eigenschaften zugewiesen sind, als auch die Erstellung wartbaren Codes, der sowohl verständlicher als auch einfacher zu schreiben ist.

## Schnittstellen

### `CSSStyleValue`

Die [`CSSStyleValue`](/de/docs/Web/API/CSSStyleValue) Schnittstelle der CSS Typed Object Model API ist die Basisklasse aller CSS-Werte, die über die Typed OM API zugänglich sind. Eine Instanz dieser Klasse kann überall verwendet werden, wo ein String erwartet wird.

- [`CSSStyleValue.parse()`](/de/docs/Web/API/CSSStyleValue/parse_static)
  - : Die `parse()` Methode der `CSSStyleValue` Schnittstelle ermöglicht es, einen `CSSNumericValue` aus einem CSS-String zu erstellen. Sie setzt eine spezifische CSS-Eigenschaft auf die angegebenen Werte und gibt den ersten Wert als `CSSStyleValue` Objekt zurück.
- [`CSSStyleValue.parseAll()`](/de/docs/Web/API/CSSStyleValue/parseAll_static)
  - : Die `parseAll()` Methode der `CSSStyleValue` Schnittstelle setzt alle Vorkommen einer spezifischen CSS-Eigenschaft auf den angegebenen Wert und gibt ein Array von `CSSStyleValue` Objekten zurück, die jeweils einen der bereitgestellten Werte enthalten.

### `StylePropertyMap`

Die [`StylePropertyMap`](/de/docs/Web/API/StylePropertyMap) Schnittstelle der CSS Typed Object Model API bietet eine Darstellung eines CSS-Deklarationsblocks, der eine Alternative zu `CSSStyleDeclaration` darstellt.

- [`StylePropertyMap.set()`](/de/docs/Web/API/StylePropertyMap/set)
  - : Methode der `StylePropertyMap` Schnittstelle, die die CSS-Deklaration mit der angegebenen Eigenschaft auf den angegebenen Wert ändert.
- [`StylePropertyMap.append()`](/de/docs/Web/API/StylePropertyMap/append)
  - : Methode, die eine neue CSS-Deklaration zur `StylePropertyMap` mit der angegebenen Eigenschaft und dem Wert hinzufügt.
- [`StylePropertyMap.delete()`](/de/docs/Web/API/StylePropertyMap/delete)
  - : Methode, die die CSS-Deklaration mit der angegebenen Eigenschaft aus der `StylePropertyMap` entfernt.
- [`StylePropertyMap.clear()`](/de/docs/Web/API/StylePropertyMap/clear)
  - : Methode, die alle Deklarationen in der `StylePropertyMap` entfernt.

### `CSSUnparsedValue`

Die [`CSSUnparsedValue`](/de/docs/Web/API/CSSUnparsedValue) Schnittstelle der CSS Typed Object Model API repräsentiert Eigenschaftswerte, die auf benutzerdefinierte Eigenschaften verweisen. Sie besteht aus einer Liste von String-Fragmenten und Variablenreferenzen.

- [`CSSUnparsedValue()`](/de/docs/Web/API/CSSUnparsedValue/CSSUnparsedValue) Konstruktor
  - : Erstellt ein neues `CSSUnparsedValue` Objekt, das Eigenschaftswerte darstellt, die auf benutzerdefinierte Eigenschaften verweisen.
- [`CSSUnparsedValue.entries()`](/de/docs/Web/API/CSSUnparsedValue/entries)
  - : Methode, die ein Array der eigenen aufzählbaren `[key, value]` Paare eines gegebenen Objekts in derselben Reihenfolge wie durch eine `for...in` Schleife (der Unterschied besteht darin, dass eine for-in Schleife auch Eigenschaften in der Prototypenkette aufzählt) zurückgibt.
- [`CSSUnparsedValue.forEach()`](/de/docs/Web/API/CSSUnparsedValue/forEach)
  - : Methode, die eine bereitgestellte Funktion einmal für jedes Element des `CSSUnparsedValue` ausführt.
- [`CSSUnparsedValue.keys()`](/de/docs/Web/API/CSSUnparsedValue/keys)
  - : Methode, die ein neues _Array-Iterator_ Objekt zurückgibt, das die Schlüssel für jeden Index im Array enthält.

### `CSSKeywordValue` Serialisierung

Die [`CSSKeywordValue`](/de/docs/Web/API/CSSKeywordValue) Schnittstelle der CSS Typed Object Model API erstellt ein Objekt zur Darstellung von CSS-Schlüsselwörtern und anderen Identifikatoren.

- [`CSSKeywordValue()`](/de/docs/Web/API/CSSKeywordValue/CSSKeywordValue) Konstruktor
  - : Der Konstruktor erstellt ein neues [`CSSKeywordValue()`](/de/docs/Web/API/CSSKeywordValue/CSSKeywordValue) Objekt, das CSS-Schlüsselwörter und andere Identifikatoren darstellt.
- [`CSSKeywordValue.value()`](/de/docs/Web/API/CSSKeywordValue/value)
  - : Eigenschaft der `CSSKeywordValue` Schnittstelle, die den Wert des `CSSKeywordValue` zurückgibt oder setzt.

## CSSStyleValue Schnittstellen

[`CSSStyleValue`](/de/docs/Web/API/CSSStyleValue) ist die Basisklasse, durch die alle CSS-Werte ausgedrückt werden. Zu den Unterklassen gehören:

- [`CSSImageValue`](/de/docs/Web/API/CSSImageValue)
  - : Eine Schnittstelle, die Werte für Eigenschaften darstellt, die ein Bild erfordern, zum Beispiel [`background-image`](/de/docs/Web/CSS/background-image), [`list-style-image`](/de/docs/Web/CSS/list-style-image) oder [`border-image-source`](/de/docs/Web/CSS/border-image-source).
- [`CSSKeywordValue`](/de/docs/Web/API/CSSKeywordValue)
  - : Eine Schnittstelle, die ein Objekt zur Darstellung von CSS-Schlüsselwörtern und anderen Identifikatoren erstellt. Wenn sie verwendet wird, wo ein String erwartet wird, gibt sie den Wert von `CSSKeyword.value` zurück.
- [`CSSMathValue`](/de/docs/Web/API/CSSMathValue)

  - : Ein Baum von Unterklassen, die numerische Werte darstellen, die komplizierter sind als ein einzelner Wert und eine Einheit, einschließlich:

    - [`CSSMathInvert`](/de/docs/Web/API/CSSMathInvert) - repräsentiert einen CSS {{cssxref("calc","calc()")}}-Wert, der als `calc(1 / <Wert>)` verwendet wird.
    - [`CSSMathMax`](/de/docs/Web/API/CSSMathMax) - repräsentiert die CSS {{cssxref("max","max()")}} Funktion.
    - [`CSSMathMin`](/de/docs/Web/API/CSSMathMin) - repräsentiert die CSS {{cssxref("min","min()")}} Funktion.
    - [`CSSMathNegate`](/de/docs/Web/API/CSSMathNegate) - negiert den übergebenen Wert.
    - [`CSSMathProduct`](/de/docs/Web/API/CSSMathProduct) - repräsentiert das Ergebnis, das durch Aufrufen von [`add()`](/de/docs/Web/API/CSSNumericValue/add), [`sub()`](/de/docs/Web/API/CSSNumericValue/sub) oder [`toSum()`](/de/docs/Web/API/CSSNumericValue/toSum) auf [`CSSNumericValue`](/de/docs/Web/API/CSSNumericValue) erhalten wird.
    - [`CSSMathSum`](/de/docs/Web/API/CSSMathSum) - repräsentiert das Ergebnis, das durch Aufrufen von [`add()`](/de/docs/Web/API/CSSNumericValue/add), [`sub()`](/de/docs/Web/API/CSSNumericValue/sub) oder [`toSum()`](/de/docs/Web/API/CSSNumericValue/toSum) auf [`CSSNumericValue`](/de/docs/Web/API/CSSNumericValue) erhalten wird.

- [`CSSNumericValue`](/de/docs/Web/API/CSSNumericValue)

  - : Eine Schnittstelle, die Operationen repräsentiert, die alle numerischen Werte durchführen können, einschließlich:

    - [`CSSNumericValue.add`](/de/docs/Web/API/CSSNumericValue/add) - Fügt die angegebenen Zahlen dem `CSSNumericValue` hinzu.
    - [`CSSNumericValue.sub`](/de/docs/Web/API/CSSNumericValue/sub) - Subtrahiert die angegebenen Zahlen vom `CSSNumericValue`.
    - [`CSSNumericValue.mul`](/de/docs/Web/API/CSSNumericValue/mul) - Multipliziert die angegebenen Zahlen mit dem `CSSNumericValue`.
    - [`CSSNumericValue.div`](/de/docs/Web/API/CSSNumericValue/div) - Teilt das `CSSNumericValue` durch den angegebenen Wert und löst einen Fehler aus, wenn `0`.
    - [`CSSNumericValue.min`](/de/docs/Web/API/CSSNumericValue/min) - Gibt den kleinsten übergebenen Wert zurück
    - [`CSSNumericValue.max`](/de/docs/Web/API/CSSNumericValue/max) - Gibt den größten übergebenen Wert zurück
    - [`CSSNumericValue.equals`](/de/docs/Web/API/CSSNumericValue/equals) - Gibt true zurück, wenn alle Werte genau vom gleichen Typ und Wert sind, in derselben Reihenfolge. Andernfalls false.
    - [`CSSNumericValue.to`](/de/docs/Web/API/CSSNumericValue/to) - Konvertiert `value` in einen anderen mit der angegebenen _Einheit._
    - [`CSSNumericValue.toSum`](/de/docs/Web/API/CSSNumericValue/toSum)
    - [`CSSNumericValue.type`](/de/docs/Web/API/CSSNumericValue/type)
    - [`CSSNumericValue.parse`](/de/docs/Web/API/CSSNumericValue/parse_static) - Gibt eine Zahl zurück, die aus einem CSS-String geparst wurde

- [`CSSPositionValue`](/de/docs/Web/API/CSSPositionValue)
  - : Repräsentiert Werte für Eigenschaften, die eine Position erfordern, zum Beispiel object-position.
- [`CSSTransformValue`](/de/docs/Web/API/CSSTransformValue)
  - : Eine Schnittstelle, die eine Liste von [`transform`](/de/docs/Web/CSS/transform) Listenwerten darstellt. Sie "enthält" einen oder mehrere [`CSSTransformComponent`](/de/docs/Web/API/CSSTransformComponent)s, die einzelne `transform` Funktionswerte darstellen.
- [`CSSUnitValue`](/de/docs/Web/API/CSSUnitValue)
  - : Eine Schnittstelle, die numerische Werte darstellt, die als einzelne Einheit oder als benannter Zahl und Prozentsatz dargestellt werden können.
- [`CSSUnparsedValue`](/de/docs/Web/API/CSSUnparsedValue)
  - : Repräsentiert Eigenschaftswerte, die auf [benutzerdefinierte Eigenschaften](/de/docs/Web/CSS/--*) verweisen. Sie besteht aus einer Liste von String-Fragmenten und Variablenreferenzen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [CSS Painting API](/de/docs/Web/API/CSS_Painting_API)
- [Verwendung des CSS Typed Object Model](/de/docs/Web/API/CSS_Typed_OM_API/Guide)
- [CSS Houdini](/de/docs/Web/API/Houdini_APIs)
