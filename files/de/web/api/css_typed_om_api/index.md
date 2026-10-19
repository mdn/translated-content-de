---
title: CSS Typed Object Model API
slug: Web/API/CSS_Typed_OM_API
l10n:
  sourceCommit: a64fca52b72fd03b0efd7661207d5afdd220aac3
---

{{DefaultAPISidebar("CSS Typed Object Model API")}}

Die CSS Typed Object Model API vereinfacht die Bearbeitung von CSS-Eigenschaften, indem sie CSS-Werte als typisierte JavaScript-Objekte statt als Zeichenfolgen bereitstellt. Dadurch wird nicht nur die Bearbeitung von CSS vereinfacht, sondern auch die Leistung im Vergleich zu [`HTMLElement.style`](/de/docs/Web/API/HTMLElement/style) weniger beeinträchtigt.

Üblicherweise lassen sich CSS-Werte in JavaScript als Zeichenfolgen lesen und schreiben. Das kann langsam und umständlich sein. Die CSS Typed Object Model API stellt Schnittstellen für den Zugriff auf die zugrunde liegenden Werte bereit. Sie stellt diese als spezialisierte JavaScript-Objekte dar, die sich leichter und zuverlässiger bearbeiten lassen als Zeichenfolgen durch Parsen und Verketten. Das erleichtert die Arbeit bei der Entwicklung: Numerische Werte werden beispielsweise als tatsächliche JavaScript-Zahlen dargestellt, für die einheitenbewusste mathematische Operationen definiert sind. Im Allgemeinen ist dies auch schneller, da Werte direkt bearbeitet und anschließend mit geringem Aufwand wieder in die zugrunde liegenden Werte umgewandelt werden können, ohne CSS-Zeichenfolgen erstellen und parsen zu müssen.

CSS Typed OM ermöglicht somit eine leistungsfähige Bearbeitung von Werten, die CSS-Eigenschaften zugewiesen sind, und unterstützt zugleich wartbaren Code, der verständlicher und einfacher zu schreiben ist.

## Schnittstellen

### `CSSStyleValue`

Die Schnittstelle [`CSSStyleValue`](/de/docs/Web/API/CSSStyleValue) der CSS Typed Object Model API ist die Basisklasse für alle CSS-Werte, auf die über die Typed OM API zugegriffen werden kann. Eine Instanz dieser Klasse kann überall dort verwendet werden, wo eine Zeichenfolge erwartet wird.

- [`CSSStyleValue.parse()`](/de/docs/Web/API/CSSStyleValue/parse_static)
  - : Methode, mit der ein `CSSNumericValue` aus einer CSS-Zeichenfolge erstellt werden kann. Sie setzt eine bestimmte CSS-Eigenschaft auf die angegebenen Werte und gibt den ersten Wert als `CSSStyleValue`-Objekt zurück.
- [`CSSStyleValue.parseAll()`](/de/docs/Web/API/CSSStyleValue/parseAll_static)
  - : Methode, die alle Vorkommen einer bestimmten CSS-Eigenschaft auf den angegebenen Wert setzt und ein Array von `CSSStyleValue`-Objekten zurückgibt, die jeweils einen der angegebenen Werte enthalten.

### `StylePropertyMap`

Die Schnittstelle [`StylePropertyMap`](/de/docs/Web/API/StylePropertyMap) der CSS Typed Object Model API stellt einen CSS-Deklarationsblock dar und ist eine Alternative zu `CSSStyleDeclaration`.

- [`StylePropertyMap.set()`](/de/docs/Web/API/StylePropertyMap/set)
  - : Methode, die die CSS-Deklaration für die angegebene Eigenschaft auf den angegebenen Wert ändert.
- [`StylePropertyMap.append()`](/de/docs/Web/API/StylePropertyMap/append)
  - : Methode, die der `StylePropertyMap` eine neue CSS-Deklaration mit der angegebenen Eigenschaft und dem angegebenen Wert hinzufügt.
- [`StylePropertyMap.delete()`](/de/docs/Web/API/StylePropertyMap/delete)
  - : Methode, die die CSS-Deklaration für die angegebene Eigenschaft aus der `StylePropertyMap` entfernt.
- [`StylePropertyMap.clear()`](/de/docs/Web/API/StylePropertyMap/clear)
  - : Methode, die alle Deklarationen aus der `StylePropertyMap` entfernt.

### `CSSUnparsedValue`

Die Schnittstelle [`CSSUnparsedValue`](/de/docs/Web/API/CSSUnparsedValue) der CSS Typed Object Model API stellt Eigenschaftswerte dar, die auf benutzerdefinierte Eigenschaften verweisen. Sie besteht aus einer Liste von Zeichenfolgenfragmenten und Variablenreferenzen.

- [`CSSUnparsedValue()`](/de/docs/Web/API/CSSUnparsedValue/CSSUnparsedValue)-Konstruktor
  - : Erstellt ein neues `CSSUnparsedValue`-Objekt, das Eigenschaftswerte darstellt, die auf benutzerdefinierte Eigenschaften verweisen.
- [`CSSUnparsedValue.entries()`](/de/docs/Web/API/CSSUnparsedValue/entries)
  - : Methode, die ein Array der eigenen, aufzählbaren `[key, value]`-Paare eines Objekts zurückgibt. Die Reihenfolge entspricht der einer `for...in`-Schleife; anders als diese bezieht sie jedoch keine Eigenschaften aus der Prototypkette ein.
- [`CSSUnparsedValue.forEach()`](/de/docs/Web/API/CSSUnparsedValue/forEach)
  - : Methode, die eine bereitgestellte Funktion einmal für jedes Element von `CSSUnparsedValue` ausführt.
- [`CSSUnparsedValue.keys()`](/de/docs/Web/API/CSSUnparsedValue/keys)
  - : Methode, die ein neues _Array-Iterator_-Objekt zurückgibt, das die Schlüssel für jeden Index im Array enthält.

### Serialisierung von `CSSKeywordValue`

Die Schnittstelle [`CSSKeywordValue`](/de/docs/Web/API/CSSKeywordValue) der CSS Typed Object Model API erstellt ein Objekt zur Darstellung von CSS-Schlüsselwörtern und anderen Bezeichnern.

- [`CSSKeywordValue()`](/de/docs/Web/API/CSSKeywordValue/CSSKeywordValue)-Konstruktor
  - : Erstellt ein neues [`CSSKeywordValue()`](/de/docs/Web/API/CSSKeywordValue/CSSKeywordValue)-Objekt, das CSS-Schlüsselwörter und andere Bezeichner darstellt.
- [`CSSKeywordValue.value()`](/de/docs/Web/API/CSSKeywordValue/value)
  - : Eigenschaft der Schnittstelle `CSSKeywordValue`, die den Wert von `CSSKeywordValue` zurückgibt oder festlegt.

## CSSStyleValue-Schnittstellen

[`CSSStyleValue`](/de/docs/Web/API/CSSStyleValue) ist die Basisklasse, über die alle CSS-Werte ausgedrückt werden. Zu ihren Unterklassen gehören:

- [`CSSImageValue`](/de/docs/Web/API/CSSImageValue)
  - : Schnittstelle zur Darstellung von Werten für Eigenschaften, die ein Bild verwenden, beispielsweise {{cssxref("background-image")}}, {{cssxref("list-style-image")}} oder {{cssxref("border-image-source")}}.
- [`CSSKeywordValue`](/de/docs/Web/API/CSSKeywordValue)
  - : Schnittstelle, die ein Objekt zur Darstellung von CSS-Schlüsselwörtern und anderen Bezeichnern erstellt. Wird sie an einer Stelle verwendet, an der eine Zeichenfolge erwartet wird, gibt sie den Wert von `CSSKeyword.value` zurück.
- [`CSSMathValue`](/de/docs/Web/API/CSSMathValue)
  - : Eine Hierarchie von Unterklassen zur Darstellung numerischer Werte, die komplexer sind als ein einzelner Wert mit einer Einheit. Dazu gehören:
    - [`CSSMathMax`](/de/docs/Web/API/CSSMathMax) – stellt die CSS-Funktion {{cssxref("max","max()")}} dar.
    - [`CSSMathMin`](/de/docs/Web/API/CSSMathMin) – stellt die CSS-Funktion {{cssxref("min","min()")}} dar.
    - [`CSSMathClamp`](/de/docs/Web/API/CSSMathClamp) – stellt die CSS-Funktion {{cssxref("clamp","clamp()")}} dar.
    - [`CSSMathNegate`](/de/docs/Web/API/CSSMathNegate) – negiert den übergebenen Wert.
    - [`CSSMathInvert`](/de/docs/Web/API/CSSMathInvert) – stellt einen Wert der CSS-Funktion {{cssxref("calc","calc()")}} dar, der als `calc(1 / <value>)` verwendet wird. Dieser Typ wird intern von [`div()`](/de/docs/Web/API/CSSNumericValue/div) verwendet, um ein entsprechendes [`CSSMathProduct`](/de/docs/Web/API/CSSMathProduct) zu erstellen.
    - [`CSSMathProduct`](/de/docs/Web/API/CSSMathProduct) – stellt das Ergebnis eines Aufrufs von [`mul()`](/de/docs/Web/API/CSSNumericValue/mul) oder [`div()`](/de/docs/Web/API/CSSNumericValue/div) auf [`CSSNumericValue`](/de/docs/Web/API/CSSNumericValue) dar.
    - [`CSSMathSum`](/de/docs/Web/API/CSSMathSum) – stellt das Ergebnis eines Aufrufs von [`add()`](/de/docs/Web/API/CSSNumericValue/add), [`sub()`](/de/docs/Web/API/CSSNumericValue/sub) oder [`toSum()`](/de/docs/Web/API/CSSNumericValue/toSum) auf [`CSSNumericValue`](/de/docs/Web/API/CSSNumericValue) dar.

- [`CSSNumericValue`](/de/docs/Web/API/CSSNumericValue)
  - : Schnittstelle für Operationen, die alle numerischen Werte ausführen können. Dazu gehören:
    - [`CSSNumericValue.add`](/de/docs/Web/API/CSSNumericValue/add) – Addiert die übergebenen Zahlen zum `CSSNumericValue`.
    - [`CSSNumericValue.sub`](/de/docs/Web/API/CSSNumericValue/sub) – Subtrahiert die übergebenen Zahlen vom `CSSNumericValue`.
    - [`CSSNumericValue.mul`](/de/docs/Web/API/CSSNumericValue/mul) – Multipliziert den `CSSNumericValue` mit den übergebenen Zahlen.
    - [`CSSNumericValue.div`](/de/docs/Web/API/CSSNumericValue/div) – Dividiert den `CSSNumericValue` durch den übergebenen Wert und löst einen Fehler aus, wenn dieser `0` ist.
    - [`CSSNumericValue.min`](/de/docs/Web/API/CSSNumericValue/min) – Gibt den kleinsten der übergebenen Werte zurück.
    - [`CSSNumericValue.max`](/de/docs/Web/API/CSSNumericValue/max) – Gibt den größten der übergebenen Werte zurück.
    - [`CSSNumericValue.equals`](/de/docs/Web/API/CSSNumericValue/equals) – Gibt `true` zurück, wenn jeder übergebene Wert mit dem `CSSNumericValue` übereinstimmt, also dieselben Werte und Einheiten hat; andernfalls wird `false` zurückgegeben.
    - [`CSSNumericValue.to`](/de/docs/Web/API/CSSNumericValue/to) – Wandelt `value` in einen Wert mit der angegebenen _Einheit_ um.
    - [`CSSNumericValue.toSum`](/de/docs/Web/API/CSSNumericValue/toSum)
    - [`CSSNumericValue.type`](/de/docs/Web/API/CSSNumericValue/type)
    - [`CSSNumericValue.parse`](/de/docs/Web/API/CSSNumericValue/parse_static) – Gibt eine Zahl zurück, die aus einer CSS-Zeichenfolge geparst wurde.

- [`CSSPositionValue`](/de/docs/Web/API/CSSPositionValue)
  - : Stellt Werte für Eigenschaften dar, die eine Position verwenden, beispielsweise object-position.
- [`CSSTransformValue`](/de/docs/Web/API/CSSTransformValue)
  - : Schnittstelle zur Darstellung einer Liste von {{cssxref("transform")}}-Werten. Sie „enthält“ eine oder mehrere [`CSSTransformComponent`](/de/docs/Web/API/CSSTransformComponent)-Instanzen, die einzelne `transform`-Funktionswerte darstellen.
- [`CSSUnitValue`](/de/docs/Web/API/CSSUnitValue)
  - : Schnittstelle zur Darstellung numerischer Werte, die sich durch einen einzelnen Wert mit einer Einheit oder durch eine benannte Zahl und einen Prozentwert ausdrücken lassen.
- [`CSSUnparsedValue`](/de/docs/Web/API/CSSUnparsedValue)
  - : Stellt Eigenschaftswerte dar, die auf [benutzerdefinierte Eigenschaften](/de/docs/Web/CSS/Reference/Properties/--*) verweisen. Sie besteht aus einer Liste von Zeichenfolgenfragmenten und Variablenreferenzen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [CSS Painting API](/de/docs/Web/API/CSS_Painting_API)
- [Verwendung des CSS Typed Object Model](/de/docs/Web/API/CSS_Typed_OM_API/Guide)
- [CSS Houdini](/de/docs/Web/API/Houdini_APIs)
