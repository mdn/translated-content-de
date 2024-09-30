---
title: CSS Typed Object Model API
slug: Web/API/CSS_Typed_OM_API
l10n:
  sourceCommit: 3b39e41fb9393a13b16aaf58ba25174a62205041
---

{{DefaultAPISidebar("CSS Typed Object Model API")}}

Die CSS Typed Object Model API vereinfacht die Manipulation von CSS-Eigenschaften, indem CSS-Werte als typisierte JavaScript-Objekte anstatt als Strings bereitgestellt werden. Dies vereinfacht nicht nur die CSS-Manipulation, sondern verringert auch den negativen Einfluss auf die Leistung im Vergleich zu [`HTMLElement.style`](/de/docs/Web/API/HTMLElement/style).

Im Allgemeinen können CSS-Werte in JavaScript als Zeichenfolgen gelesen und geschrieben werden, was langsam und umständlich sein kann. Die CSS Typed Object Model API bietet Schnittstellen, um mit den zugrundeliegenden Werten zu interagieren, indem sie diese mit spezialisierten JS-Objekten darstellt, die einfacher und zuverlässiger zu manipulieren und zu verstehen sind als String-Parsing und -Verkettung. Dies ist für Autoren einfacher (zum Beispiel werden numerische Werte mit tatsächlichen JS-Zahlen widergespiegelt und haben einheitenbewusste mathematische Operationen, die für sie definiert sind). Es ist auch allgemein schneller, da Werte direkt manipuliert werden können und dann günstig in die zugrundeliegenden Werte zurückübersetzt werden können, ohne Zeichenfolgen von CSS erstellen und analysieren zu müssen.

Die CSS Typed OM ermöglicht sowohl die performante Manipulation von Werten, die CSS-Eigenschaften zugewiesen sind, als auch die Erstellung von wartbarem Code, der sowohl verständlicher als auch einfacher zu schreiben ist.

## Schnittstellen

### `CSSStyleValue`

Die [`CSSStyleValue`](/de/docs/Web/API/CSSStyleValue)-Schnittstelle der CSS Typed Object Model API ist die Basisklasse aller CSS-Werte, die über die Typed OM API zugänglich sind. Eine Instanz dieser Klasse kann überall verwendet werden, wo eine Zeichenfolge erwartet wird.

- [`CSSStyleValue.parse()`](/de/docs/Web/API/CSSStyleValue/parse_static)
  - : Die parse()-Methode der CSSStyleValue-Schnittstelle erlaubt es, einen CSSNumericValue aus einer CSS-Zeichenfolge zu konstruieren. Sie setzt eine bestimmte CSS-Eigenschaft auf die angegebenen Werte und gibt den ersten Wert als ein CSSStyleValue-Objekt zurück.
- [`CSSStyleValue.parseAll()`](/de/docs/Web/API/CSSStyleValue/parseAll_static)
  - : Die parseAll()-Methode der CSSStyleValue-Schnittstelle setzt alle Vorkommen einer bestimmten CSS-Eigenschaft auf den angegebenen Wert und gibt ein Array von CSSStyleValue-Objekten zurück, die jeweils einen der bereitgestellten Werte enthalten.

### `StylePropertyMap`

Die [`StylePropertyMap`](/de/docs/Web/API/StylePropertyMap)-Schnittstelle der CSS Typed Object Model API bietet eine Darstellung eines CSS-Deklarationsblocks, der eine Alternative zu CSSStyleDeclaration darstellt.

- [`StylePropertyMap.set()`](/de/docs/Web/API/StylePropertyMap/set)
  - : Methode der StylePropertyMap-Schnittstelle, die die CSS-Deklaration mit der angegebenen Eigenschaft auf den angegebenen Wert ändert.
- [`StylePropertyMap.append()`](/de/docs/Web/API/StylePropertyMap/append)
  - : Methode, die eine neue CSS-Deklaration zur StylePropertyMap mit der angegebenen Eigenschaft und dem Wert hinzufügt.
- [`StylePropertyMap.delete()`](/de/docs/Web/API/StylePropertyMap/delete)
  - : Methode, die die CSS-Deklaration mit der angegebenen Eigenschaft von der StylePropertyMap entfernt.
- [`StylePropertyMap.clear()`](/de/docs/Web/API/StylePropertyMap/clear)
  - : Methode, die alle Deklarationen in der StylePropertyMap entfernt.

### `CSSUnparsedValue`

Die [`CSSUnparsedValue`](/de/docs/Web/API/CSSUnparsedValue)-Schnittstelle der CSS Typed Object Model API repräsentiert Eigenschaftswerte, die sich auf benutzerdefinierte Eigenschaften beziehen. Sie besteht aus einer Liste von Zeichenfolgenfragmenten und Variablenreferenzen.

- [`CSSUnparsedValue()`](/de/docs/Web/API/CSSUnparsedValue/CSSUnparsedValue)-Konstruktor
  - : Erstellt ein neues CSSUnparsedValue-Objekt, das Eigenschaftswerte repräsentiert, die sich auf benutzerdefinierte Eigenschaften beziehen.
- [`CSSUnparsedValue.entries()`](/de/docs/Web/API/CSSUnparsedValue/entries)
  - : Methode, die ein Array der eigenen aufzählbaren \[Schlüssel, Wert]-Paare eines gegebenen Objekts in derselben Reihenfolge wie von einer for...in-Schleife bereitstellt (mit dem Unterschied, dass eine for-in-Schleife auch Eigenschaften in der Prototypenkette aufzählt).
- [`CSSUnparsedValue.forEach()`](/de/docs/Web/API/CSSUnparsedValue/forEach)
  - : Methode, die eine bereitgestellte Funktion einmal für jedes Element des CSSUnparsedValue ausführt.
- [`CSSUnparsedValue.keys()`](/de/docs/Web/API/CSSUnparsedValue/keys)
  - : Methode, die ein neues _Array-Iterator_-Objekt zurückgibt, das die Schlüssel für jeden Index im Array enthält.

### `CSSKeywordValue` Serialisierung

Die [`CSSKeywordValue`](/de/docs/Web/API/CSSKeywordValue)-Schnittstelle der CSS Typed Object Model API erstellt ein Objekt, um CSS-Schlüsselwörter und andere Bezeichner darzustellen.

- [`CSSKeywordValue()`](/de/docs/Web/API/CSSKeywordValue/CSSKeywordValue)-Konstruktor
  - : Der Konstruktor erzeugt ein neues [`CSSKeywordValue()`](/de/docs/Web/API/CSSKeywordValue/CSSKeywordValue)-Objekt, das CSS-Schlüsselwörter und andere Bezeichner repräsentiert.
- [`CSSKeywordValue.value()`](/de/docs/Web/API/CSSKeywordValue/value)
  - : Eigenschaft der CSSKeywordValue-Schnittstelle, die den Wert des CSSKeywordValue zurückgibt oder setzt.

## CSSStyleValue Schnittstellen

CSSStyleValue ist die Basisklasse, durch die alle CSS-Werte ausgedrückt werden. Zu den Unterklassen gehören:

- [`CSSImageValue`](/de/docs/Web/API/CSSImageValue)-Objekte
  - : Eine Schnittstelle, die Werte für Eigenschaften darstellt, die ein Bild übernehmen, zum Beispiel [`background-image`](/de/docs/Web/CSS/background-image), [`list-style-image`](/de/docs/Web/CSS/list-style-image) oder [`border-image-source`](/de/docs/Web/CSS/border-image-source).
- [`CSSKeywordValue`](/de/docs/Web/API/CSSKeywordValue)
  - : Eine Schnittstelle, die ein Objekt erstellt, um CSS-Schlüsselwörter und andere Bezeichner darzustellen. Wenn sie an einer Stelle verwendet wird, an der eine Zeichenfolge erwartet wird, gibt sie den Wert von CSSKeyword.value zurück.
- [`CSSMathValue`](/de/docs/Web/API/CSSMathValue)

  - : Ein Baum von Unterklassen, der numerische Werte darstellt, die komplizierter sind als ein einzelner Wert und eine Einheit, einschließlich:

    - [`CSSMathInvert`](/de/docs/Web/API/CSSMathInvert) - Repräsentiert einen CSS {{cssxref("calc","calc()")}}-Wert in Form von `calc(1 / <value>)`.
    - [`CSSMathMax`](/de/docs/Web/API/CSSMathMax) - Repräsentiert die CSS-Funktion {{cssxref("max","max()")}}.
    - [`CSSMathMin`](/de/docs/Web/API/CSSMathMin) - Repräsentiert die CSS-Funktion {{cssxref("min","min()")}}.
    - [`CSSMathNegate`](/de/docs/Web/API/CSSMathNegate) - Negiert den an sie übergebenen Wert.
    - [`CSSMathProduct`](/de/docs/Web/API/CSSMathProduct) - Repräsentiert das Ergebnis, das durch den Aufruf von [`add()`](/de/docs/Web/API/CSSNumericValue/add), [`sub()`](/de/docs/Web/API/CSSNumericValue/sub) oder [`toSum()`](/de/docs/Web/API/CSSNumericValue/toSum) auf [`CSSNumericValue`](/de/docs/Web/API/CSSNumericValue) erzielt wird.
    - [`CSSMathSum`](/de/docs/Web/API/CSSMathSum) - Repräsentiert das Ergebnis, das durch den Aufruf von [`add()`](/de/docs/Web/API/CSSNumericValue/add), [`sub()`](/de/docs/Web/API/CSSNumericValue/sub) oder [`toSum()`](/de/docs/Web/API/CSSNumericValue/toSum) auf [`CSSNumericValue`](/de/docs/Web/API/CSSNumericValue) erzielt wird.

- [`CSSNumericValue`](/de/docs/Web/API/CSSNumericValue)

  - : Eine Schnittstelle, die Operationen darstellt, die alle numerischen Werte ausführen können, einschließlich:

    - [`CSSNumericValue.add`](/de/docs/Web/API/CSSNumericValue/add) - Fügt der `CSSNumericValue` angegebene Zahlen hinzu.
    - [`CSSNumericValue.sub`](/de/docs/Web/API/CSSNumericValue/sub) - Subtrahiert die angegebenen Zahlen zur `CSSNumericValue`.
    - [`CSSNumericValue.mul`](/de/docs/Web/API/CSSNumericValue/mul) - Multipliziert die angegebenen Zahlen zur `CSSNumericValue`.
    - [`CSSNumericValue.div`](/de/docs/Web/API/CSSNumericValue/div) - Teilt eine angegebene Zahl durch andere, erzeugt einen Fehler, wenn 0.
    - [`CSSNumericValue.min`](/de/docs/Web/API/CSSNumericValue/min) - Gibt den minimalen übergebenen Wert zurück
    - [`CSSNumericValue.max`](/de/docs/Web/API/CSSNumericValue/max) - Gibt den maximalen übergebenen Wert zurück
    - [`CSSNumericValue.equals`](/de/docs/Web/API/CSSNumericValue/equals) - Gibt true zurück, wenn alle Werte vom exakt gleichen Typ und Wert in der gleichen Reihenfolge sind. Andernfalls false
    - [`CSSNumericValue.to`](/de/docs/Web/API/CSSNumericValue/to) - Konvertiert `value` in einen anderen Wert mit der angegebenen _Einheit._
    - [`CSSNumericValue.toSum`](/de/docs/Web/API/CSSNumericValue/toSum)
    - [`CSSNumericValue.type`](/de/docs/Web/API/CSSNumericValue/type)
    - [`CSSNumericValue.parse`](/de/docs/Web/API/CSSNumericValue/parse_static) - Gibt eine nummerierte Zahl aus einem CSS-String zurück

- [`CSSPositionValue`](/de/docs/Web/API/CSSPositionValue)
  - : Repräsentiert Werte für Eigenschaften, die eine Position einnehmen, zum Beispiel object-position.
- [`CSSTransformValue`](/de/docs/Web/API/CSSTransformValue)
  - : Eine Schnittstelle, die eine Liste von [`transform`](/de/docs/Web/CSS/transform)-Listwerten darstellt. Sie "beinhalten" einen oder mehrere [`CSSTransformComponent`](/de/docs/Web/API/CSSTransformComponent)s, die einzelne `transform`-Funktionswerte darstellen.
- [`CSSUnitValue`](/de/docs/Web/API/CSSUnitValue)
  - : Eine Schnittstelle, die numerische Werte darstellt, die als eine einzige Einheit oder als ein benannter Zahl- und Prozentsatz dargestellt werden können.
- [`CSSUnparsedValue`](/de/docs/Web/API/CSSUnparsedValue)
  - : Repräsentiert Eigenschaftswerte, die sich auf [benutzerdefinierte Eigenschaften](/de/docs/Web/CSS/--*) beziehen. Sie besteht aus einer Liste von Zeichenfolgenfragmenten und Variablenreferenzen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [CSS Painting API](/de/docs/Web/API/CSS_Painting_API)
- [CSS Typed Object Model verwenden](/de/docs/Web/API/CSS_Typed_OM_API/Guide)
- [CSS Houdini](/de/docs/Web/API/Houdini_APIs)
