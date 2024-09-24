---
title: CSS Typed Object Model API
slug: Web/API/CSS_Typed_OM_API
l10n:
  sourceCommit: 3b39e41fb9393a13b16aaf58ba25174a62205041
---

{{DefaultAPISidebar("CSS Typed Object Model API")}}

Die CSS Typed Object Model API vereinfacht die Manipulation von CSS-Eigenschaften, indem sie CSS-Werte als typisierte JavaScript-Objekte anstelle von Zeichenfolgen bereitstellt. Dies vereinfacht nicht nur die Manipulation von CSS, sondern verringert auch die negative Auswirkung auf die Leistung im Vergleich zu {{domxref('HTMLElement.style')}}.

Im Allgemeinen können CSS-Werte in JavaScript als Zeichenfolgen gelesen und geschrieben werden, was langsam und umständlich sein kann. Die CSS Typed Object Model API bietet Schnittstellen zur Interaktion mit zugrunde liegenden Werten, indem sie diese mit spezialisierten JS-Objekten darstellt, die einfacher und zuverlässiger manipuliert und verstanden werden können als das Parsen und Verketten von Strings. Das ist für Autoren einfacher (zum Beispiel werden numerische Werte mit tatsächlichen JS-Zahlen widergespiegelt und haben einheitenbewusste mathematische Operationen, die für sie definiert sind). Es ist auch generell schneller, da Werte direkt manipuliert und dann kostengünstig in zugrunde liegende Werte übersetzt werden können, ohne sowohl Strings zu bauen als auch zu parsen.

CSS Typed OM erlaubt sowohl die performante Manipulation von Werten, die CSS-Eigenschaften zugewiesen sind, als auch die Erstellung von wartbarem Code, der sowohl besser verständlich als auch einfacher zu schreiben ist.

## Schnittstellen

### `CSSStyleValue`

Die {{domxref('CSSStyleValue')}}-Schnittstelle der CSS Typed Object Model API ist die Basisklasse aller CSS-Werte, die über die Typed OM API zugänglich sind. Eine Instanz dieser Klasse kann überall verwendet werden, wo eine Zeichenkette erwartet wird.

- {{domxref('CSSStyleValue/parse_static', 'CSSStyleValue.parse()')}}
  - : Die parse()-Methode der CSSStyleValue-Schnittstelle ermöglicht es, einen CSSNumericValue aus einer CSS-Zeichenkette zu erstellen. Sie setzt eine bestimmte CSS-Eigenschaft auf die angegebenen Werte und gibt den ersten Wert als CSSStyleValue-Objekt zurück.
- {{domxref('CSSStyleValue.parseAll_static', 'CSSStyleValue.parseAll()')}}
  - : Die parseAll()-Methode der CSSStyleValue-Schnittstelle setzt alle Vorkommen einer bestimmten CSS-Eigenschaft auf den angegebenen Wert und gibt ein Array von CSSStyleValue-Objekten zurück, die jeweils einen der gelieferten Werte enthalten.

### `StylePropertyMap`

Die {{domxref('StylePropertyMap')}}-Schnittstelle der CSS Typed Object Model API bietet eine Darstellung eines CSS-Deklarationsblocks, der eine Alternative zu CSSStyleDeclaration ist.

- {{domxref('StylePropertyMap.set()')}}
  - : Methode der StylePropertyMap-Schnittstelle, die die CSS-Deklaration mit der angegebenen Eigenschaft auf den gegebenen Wert ändert.
- {{domxref('StylePropertyMap.append()')}}
  - : Methode, die eine neue CSS-Deklaration mit der angegebenen Eigenschaft und dem Wert zur StylePropertyMap hinzufügt.
- {{domxref('StylePropertyMap.delete()')}}
  - : Methode, die die CSS-Deklaration mit der angegebenen Eigenschaft aus der StylePropertyMap entfernt.
- {{domxref('StylePropertyMap.clear()')}}
  - : Methode, die alle Deklarationen in der StylePropertyMap entfernt.

### `CSSUnparsedValue`

Die {{domxref('CSSUnparsedValue')}}-Schnittstelle der CSS Typed Object Model API repräsentiert Eigenschaftswerte, die benutzerdefinierte Eigenschaften referenzieren. Sie besteht aus einer Liste von Zeichenfolgenfragmenten und Variablenreferenzen.

- {{domxref("CSSUnparsedValue.CSSUnparsedValue", "CSSUnparsedValue()")}} Konstruktor
  - : Erstellt ein neues CSSUnparsedValue-Objekt, das Eigenschaftswerte repräsentiert, die benutzerdefinierte Eigenschaften referenzieren.
- {{domxref('CSSUnparsedValue.entries()')}}
  - : Methode, die ein Array der eigenen aufzählbaren \[Schlüssel, Wert]-Paare eines gegebenen Objekts in der gleichen Reihenfolge wie durch eine for...in-Schleife bereitstellt (der Unterschied besteht darin, dass eine for-in-Schleife auch Eigenschaften in der Prototypkette aufzählt).
- {{domxref('CSSUnparsedValue.forEach()')}}
  - : Methode, die eine bereitgestellte Funktion einmal für jedes Element des CSSUnparsedValue ausführt.
- {{domxref('CSSUnparsedValue.keys()')}}
  - : Methode, die ein neues _Array-Iterator_-Objekt zurückgibt, das die Schlüssel für jeden Index im Array enthält.

### `CSSKeywordValue` Serialisierung

Die {{domxref('CSSKeywordValue')}}-Schnittstelle der CSS Typed Object Model API erstellt ein Objekt, um CSS-Schlüsselwörter und andere Bezeichner darzustellen.

- {{domxref("CSSKeywordValue.CSSKeywordValue", "CSSKeywordValue()")}} Konstruktor
  - : Konstruktor erstellt ein neues {{domxref("CSSKeywordValue.CSSKeywordValue", "CSSKeywordValue()")}}-Objekt, das CSS-Schlüsselwörter und andere Bezeichner darstellt.
- {{domxref('CSSKeywordValue.value()')}}
  - : Eigenschaft der CSSKeywordValue-Schnittstelle, die den Wert des CSSKeywordValue zurückgibt oder setzt.

## CSSStyleValue Schnittstellen

CSSStyleValue ist die Basisklasse, durch die alle CSS-Werte ausgedrückt werden. Subklassen sind:

- {{domxref('CSSImageValue')}} Objekte
  - : Eine Schnittstelle, die Werte für Eigenschaften repräsentiert, die ein Bild erfordern, zum Beispiel [`background-image`](/de/docs/Web/CSS/background-image), [`list-style-image`](/de/docs/Web/CSS/list-style-image) oder [`border-image-source`](/de/docs/Web/CSS/border-image-source).
- {{domxref('CSSKeywordValue')}}
  - : Eine Schnittstelle, die ein Objekt erstellt, um CSS-Schlüsselwörter und andere Bezeichner darzustellen. Wenn sie verwendet wird, wo eine Zeichenkette erwartet wird, gibt sie den Wert von CSSKeyword.value zurück.
- {{domxref('CSSMathValue')}}

  - : Ein Baum von Subklassen, die numerische Werte darstellen, die komplexer sind als ein einzelner Wert und eine Einheit, einschließlich:

    - {{domxref('CSSMathInvert')}} - repräsentiert eine CSS {{cssxref("calc","calc()")}}-Wert, der als `calc(1 / <value>)` verwendet wird.
    - {{domxref('CSSMathMax')}} - repräsentiert die CSS {{cssxref("max","max()")}}-Funktion.
    - {{domxref('CSSMathMin')}} - repräsentiert die CSS {{cssxref("min","min()")}}-Funktion.
    - {{domxref('CSSMathNegate')}} - negiert den übergebenen Wert.
    - {{domxref('CSSMathProduct')}} - repräsentiert das Ergebnis, das durch Aufrufen von {{domxref('CSSNumericValue.add','add()')}}, {{domxref('CSSNumericValue.sub','sub()')}}, oder {{domxref('CSSNumericValue.toSum','toSum()')}} auf {{domxref('CSSNumericValue')}} erhalten wird.
    - {{domxref('CSSMathSum')}} - repräsentiert das Ergebnis, das durch Aufrufen von {{domxref('CSSNumericValue.add','add()')}}, {{domxref('CSSNumericValue.sub','sub()')}}, oder {{domxref('CSSNumericValue.toSum','toSum()')}} auf {{domxref('CSSNumericValue')}} erhalten wird.

- {{domxref('CSSNumericValue')}}

  - : Eine Schnittstelle, die Operationen darstellt, die alle numerischen Werte ausführen können, einschließlich:

    - {{domxref('CSSNumericValue.add')}} - Fügt die übergebenen Zahlen zum `CSSNumericValue` hinzu.
    - {{domxref('CSSNumericValue.sub')}} - Subtrahiert die übergebenen Zahlen vom `CSSNumericValue`.
    - {{domxref('CSSNumericValue.mul')}} - Multipliziert die übergebenen Zahlen mit dem `CSSNumericValue`.
    - {{domxref('CSSNumericValue.div')}} - Teilt eine übergebene Zahl durch andere Zahlen und löst einen Fehler aus, wenn 0.
    - {{domxref('CSSNumericValue.min')}} - Gibt den minimalen übergebenen Wert zurück
    - {{domxref('CSSNumericValue.max')}} - Gibt den maximalen übergebenen Wert zurück
    - {{domxref('CSSNumericValue.equals')}} - Gibt true zurück, wenn alle Werte genau denselben Typ und Wert in der gleichen Reihenfolge haben. Andernfalls false
    - {{domxref('CSSNumericValue.to')}} - Konvertiert `value` in einen anderen mit der angegebenen _Einheit._
    - {{domxref('CSSNumericValue.toSum')}}
    - {{domxref('CSSNumericValue.type')}}
    - {{domxref('CSSNumericValue/parse_static', 'CSSNumericValue.parse')}} - Gibt eine Nummer zurück, die aus einer CSS-Zeichenkette geparst wurde

- {{domxref('CSSPositionValue')}}
  - : Repräsentiert Werte für Eigenschaften, die eine Position erfordern, zum Beispiel object-position.
- {{domxref('CSSTransformValue')}}
  - : Eine Schnittstelle, die eine Liste von [`transform`](/de/docs/Web/CSS/transform) List-Werten repräsentiert. Sie "enthalten" ein oder mehrere {{domxref('CSSTransformComponent')}}s, die individuelle `transform` Funktionswerte darstellen.
- {{domxref('CSSUnitValue')}}
  - : Eine Schnittstelle, die numerische Werte darstellt, die als eine einzelne Einheit oder als benannte Zahl und Prozentsatz dargestellt werden können.
- {{domxref('CSSUnparsedValue')}}
  - : Repräsentiert Eigenschaftswerte, die [benutzerdefinierte Eigenschaften](/de/docs/Web/CSS/--*) referenzieren. Sie besteht aus einer Liste von Zeichenfolgenfragmenten und Variablenreferenzen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [CSS Painting API](/de/docs/Web/API/CSS_Painting_API)
- [Verwendung des CSS Typed Object Model](/de/docs/Web/API/CSS_Typed_OM_API/Guide)
- [CSS Houdini](/de/docs/Web/API/Houdini_APIs)
