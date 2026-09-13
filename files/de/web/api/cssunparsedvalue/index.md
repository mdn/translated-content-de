---
title: CSSUnparsedValue
slug: Web/API/CSSUnparsedValue
l10n:
  sourceCommit: e03cdadd99259770aefef875de5a988aeda6aff0
---

{{APIRef("CSS Typed Object Model API")}} {{AvailableInWorkers}}

Das **`CSSUnparsedValue`**-Interface der [CSS Typed Object Model API](/de/docs/Web/API/CSS_Object_Model) repräsentiert einen Eigenschaftswert, der nicht in einen spezifischeren Typ geparst werden kann — typischerweise der Wert einer [benutzerdefinierten Eigenschaft](/de/docs/Web/CSS/Guides/Cascading_variables/Using_custom_properties).

Das Objekt ist ein Iterable, das Zeichenkettenfragmente und Variablenreferenzen enthalten kann.

Die Elemente können per Index zugegriffen und gesetzt werden (`unparsedValue[0]`), und als Iterable kann es mit einer {{jsxref("Statements/for...of", "for...of")}}-Schleife oder der Spread-Syntax verwendet werden.

{{InheritanceDiagram}}

## Konstruktor

- [`CSSUnparsedValue()`](/de/docs/Web/API/CSSUnparsedValue/CSSUnparsedValue)
  - : Erstellt ein neues `CSSUnparsedValue`-Objekt.

## Instanzeigenschaften

- [`CSSUnparsedValue.length`](/de/docs/Web/API/CSSUnparsedValue/length) {{ReadOnlyInline}}
  - : Gibt die Anzahl der Elemente im Objekt zurück.

## Instanzmethoden

_Erbt auch Methoden von seinem Elterninterface, [`CSSStyleValue`](/de/docs/Web/API/CSSStyleValue)._

- [`CSSUnparsedValue.entries()`](/de/docs/Web/API/CSSUnparsedValue/entries)
  - : Gibt einen neuen _Array-Iterator_ zurück, der `[index, value]`-Paare für jedes Element im Objekt liefert.
- [`CSSUnparsedValue.forEach()`](/de/docs/Web/API/CSSUnparsedValue/forEach)
  - : Führt eine bereitgestellte Funktion einmal für jedes Element im Objekt aus.
- [`CSSUnparsedValue.keys()`](/de/docs/Web/API/CSSUnparsedValue/keys)
  - : Gibt einen neuen _Array-Iterator_ zurück, der den Index jedes Elements im Objekt liefert.
- [`CSSUnparsedValue.values()`](/de/docs/Web/API/CSSUnparsedValue/values)
  - : Gibt einen neuen _Array-Iterator_ zurück, der jedes Element im Objekt liefert.

## Beschreibung

Eine Instanz von `CSSUnparsedValue` ist ein Iterable von Elementen, wobei jedes Element entweder eine Zeichenkette ist, die ein Fragment von CSS-Text darstellt, das nicht weiter geparst wurde, oder ein [`CSSVariableReferenceValue`](/de/docs/Web/API/CSSVariableReferenceValue)-Objekt, das eine {{cssxref("var", "var()")}}-Funktion im Wert repräsentiert (falls welche angegeben wurden).

Zum Beispiel, die benutzerdefinierte Eigenschaft:

```css
--foo: 10px var(--bar, blue);
```

Das `CSSUnparsedValue` für `--foo` hat zwei Elemente:

- `"10px "`: ein einfaches Zeichenfolgenfragment.
- Ein `CSSVariableReferenceValue`: repräsentiert `var(--bar, blue)`, mit seiner eigenen [`variable`](/de/docs/Web/API/CSSVariableReferenceValue/variable) (`"--bar"`) und einem [`fallback`](/de/docs/Web/API/CSSVariableReferenceValue/fallback) (einem verschachtelten `CSSUnparsedValue` für `blue`).

### Ein weiteres Parsen eines `CSSUnparsedValue`

`CSSUnparsedValue` bewahrt den rohen, ungeparsten Text eines Wertes: Es interpretiert diesen Text nicht als Längenwert, Farbe oder einen anderen spezifischeren Typ.

Wenn Sie wissen, welche Art von Wert der Text darstellt, können Sie ihn weiter parsen, indem Sie die statische `parse()`-Methode des erwarteten Typs verwenden, wie z.B. [`CSSNumericValue.parse()`](/de/docs/Web/API/CSSNumericValue/parse_static) für einen numerischen Wert mit einer Einheit, oder die allgemeinere [`CSSStyleValue.parse()`](/de/docs/Web/API/CSSStyleValue/parse_static), die zusätzlich erfordert, dass Sie den Ziel-CSS-Eigenschaftsnamen angeben.

Diese `parse()`-Methoden benötigen einen CSS-Text-String, nicht ein `CSSUnparsedValue`-Objekt.
Da jedoch `CSSUnparsedValue` die [`CSSStyleValue.toString()`](/de/docs/Web/API/CSSStyleValue/toString) Stringifizierungs-Methode erbt, kann es direkt überall dort übergeben werden, wo ein String erwartet wird.
Das Parsen wirft einen `SyntaxError`, wenn der Text nicht der von dem Typ, den Sie parsen, erwarteten Syntax entspricht.

## Beispiele

### Erstellen, Lesen und Aktualisieren eines `CSSUnparsedValue`

Dieses Beispiel erstellt ein `CSSUnparsedValue`, liest dann seine Elemente über `length`, indizierten Zugriff und Iteration und aktualisiert schließlich eines der Elemente, indem es seinem Index zugewiesen wird.

```js
const value = new CSSUnparsedValue(["1em", "#445566", "-45px"]);

console.log(value.length); // 3
console.log(value[0]); // "1em"

for (const fragment of value) {
  console.log(fragment);
}
// "1em"
// "#445566"
// "-45px"

value[0] = "2em";
console.log(value[0]); // "2em"
```

### Lesen und Parsen des Werts einer benutzerdefinierten Eigenschaft

Ein `CSSUnparsedValue` ist das, was Sie zurückbekommen, wenn Sie den Wert einer benutzerdefinierten Eigenschaft von einer [`StylePropertyMapReadOnly`](/de/docs/Web/API/StylePropertyMapReadOnly) lesen, da der Browser im Voraus nicht wissen kann, welche Art von Wert die Eigenschaft enthält.
Dieses Beispiel liest die benutzerdefinierte Eigenschaft `--unit` aus der berechneten Stilkarte eines Elements und parst sie dann in einen [`CSSUnitValue`](/de/docs/Web/API/CSSUnitValue) mit Hilfe von [`CSSNumericValue.parse()`](/de/docs/Web/API/CSSNumericValue/parse_static).

```html
<button id="btn">Styled button</button>
```

```css
#btn {
  --unit: 1.2rem;
  padding: var(--unit);
}
```

```js
const styleMap = document.getElementById("btn").computedStyleMap();
const unit = styleMap.get("--unit");

console.log(unit); // CSSUnparsedValue {0: " 1.2rem", length: 1}
console.log(unit[0]); // " 1.2rem"

const parsedUnit = CSSNumericValue.parse(unit);
console.log(parsedUnit.value); // 1.2
console.log(parsedUnit.unit); // "rem"
```

Siehe den Abschnitt [`CSSUnparsedValue`](/de/docs/Web/API/CSS_Typed_OM_API/Guide#cssunparsedvalue) des _CSS Typed OM Leitfadens_ für mehr Details zu diesem Beispiel.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`CSSVariableReferenceValue`](/de/docs/Web/API/CSSVariableReferenceValue)
- [`CSSImageValue`](/de/docs/Web/API/CSSImageValue)
- [`CSSKeywordValue`](/de/docs/Web/API/CSSKeywordValue)
- [`CSSNumericValue`](/de/docs/Web/API/CSSNumericValue)
- [`CSSPositionValue`](/de/docs/Web/API/CSSPositionValue)
- [`CSSTransformValue`](/de/docs/Web/API/CSSTransformValue)
- [Verwendung des CSS Typed OM](/de/docs/Web/API/CSS_Typed_OM_API/Guide)
- [CSS Typed Object Model API](/de/docs/Web/API/CSS_Typed_OM_API)
