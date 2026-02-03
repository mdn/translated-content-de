---
title: "Custom properties (--*): CSS variables"
slug: Web/CSS/Reference/Properties/--*
l10n:
  sourceCommit: 98bbdcd90e5487539cebe19b12fe3d731fb5a03e
---

Eigenschaftsnamen, die mit `--` beginnen, wie `--example-name`, repräsentieren _benutzerdefinierte Eigenschaften_, die einen Wert enthalten, der in anderen Deklarationen unter Verwendung der {{cssxref("var()")}}-Funktion verwendet werden kann.

Benutzerdefinierte Eigenschaften sind auf die Elemente beschränkt, für die sie deklariert wurden, und nehmen an der Kaskade teil: Der Wert einer solchen benutzerdefinierten Eigenschaft ist der, der durch den kaskadierenden Algorithmus entschieden wird.

{{CSSInfo}}

## Syntax

```css
--some-keyword: left;
--some-color: #123456;
--some-complex-value: 3px 6px rgb(20 32 54);
```

- `<declaration-value>`
  - : Dieser Wert entspricht jeder Sequenz von einem oder mehreren Tokens, sofern die Sequenz kein nicht erlaubtes Token enthält. Er repräsentiert die Gesamtheit dessen, was eine gültige Deklaration als Wert haben kann.

> [!NOTE]
> Benutzerdefinierte Eigenschaftsnamen sind Groß-/Kleinschreibung empfindlich – `--my-color` wird als separate benutzerdefinierte Eigenschaft zu `--My-color` behandelt.

## Beispiel

### Grundlegendes Beispiel

#### HTML

```html
<p id="firstParagraph">
  This paragraph should have a blue background and yellow text.
</p>
<p id="secondParagraph">
  This paragraph should have a yellow background and blue text.
</p>
<div id="container">
  <p id="thirdParagraph">
    This paragraph should have a green background and yellow text.
  </p>
</div>
```

#### CSS

```css
:root {
  --first-color: #1166ff;
  --second-color: #ffff77;
}

#firstParagraph {
  background-color: var(--first-color);
  color: var(--second-color);
}

#secondParagraph {
  background-color: var(--second-color);
  color: var(--first-color);
}

#container {
  --first-color: #229900;
}

#thirdParagraph {
  background-color: var(--first-color);
  color: var(--second-color);
}
```

#### Ergebnis

{{EmbedLiveSample('basic example', 500, 130)}}

### Registrieren von benutzerdefinierten Eigenschaften mit @property

In diesem Beispiel verwenden wir die {{cssxref("@property")}}-At-Regel, um eine benutzerdefinierte Eigenschaft zu registrieren.

#### HTML

Unser HTML enthält eine geordnete Liste ({{htmlelement("ol")}}) mit drei Listenelementen ({{htmlelement("li")}}).

```html
<ol>
  <li class="one">Item one</li>
  <li class="two">Item two</li>
  <li class="three">Item three</li>
</ol>
```

#### CSS

Wir verwenden die {{cssxref("@property")}}-At-Regel, um zwei benutzerdefinierte Eigenschaften zu registrieren.

```css
@property --itemSize {
  syntax: "<length> | <percentage>";
  inherits: true;
  initial-value: 200px;
}

@property --borderWidth {
  syntax: "<length>";
  inherits: false;
  initial-value: 10px;
}
```

Wir versuchen, die Werte der benutzerdefinierten Eigenschaften zu überschreiben. Die auf `.two` gesetzten Werte sind gültig, während die auf `.three` gesetzten Werte ungültig sind.

```css
ol {
  --itemSize: 100px;
  --borderWidth: 1px;
}
.two {
  --itemSize: initial;
  --borderWidth: inherit;
}
.three {
  --itemSize: large;
  --borderWidth: 3%;
}
```

Wir verwenden die beiden benutzerdefinierten Eigenschaften, um die Elemente zu gestalten, indem wir die Umrandung und die Breite für alle Elemente gleichzeitig festlegen:

```css
li {
  width: var(--itemSize);
  border: var(--borderWidth) solid red;
  background-color: yellow;
  margin-bottom: 10px;
}
```

#### Ergebnisse

{{EmbedLiveSample('Registering custom properties with @property', 500, 130)}}

Die Eigenschaft `--itemSize` ist vererbbar; `--borderWidth` ist es nicht. Die Eigenschaften werden auf dem `ol`-Elternteil gesetzt und überschreiben die in ihrer Registrierung standardmäßig definierten Werte. Element eins erbt die Größe, aber nicht die Breite der Umrandung von der OL. Die globalen Schlüsselwörter, die für `.two` deklariert sind, sind für `<length>` gültig und werden daher verwendet. Die Werte in `.three` sind ungültig („large“ ist kein `<length-percentage>` und `3%` ist kein `<length>`). Siehe

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die {{cssxref("var()")}}-Funktion
- {{cssxref("@property")}}-At-Regel
- [Verwendung von CSS-Benutzerdefinierten Eigenschaften (Variablen)](/de/docs/Web/CSS/Guides/Cascading_variables/Using_custom_properties) Leitfaden
- [Registrieren von CSS-Benutzerdefinierten Eigenschaften](/de/docs/Web/CSS/Guides/Properties_and_values_API/Registering_properties) Leitfaden
- [CSS-Benutzerdefinierte Eigenschaften für Kaskadenvariablen](/de/docs/Web/CSS/Guides/Cascading_variables) Modul
