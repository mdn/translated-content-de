---
title: ::after
slug: Web/CSS/Reference/Selectors/::after
l10n:
  sourceCommit: f69b6693212029ce4b9fa0c753729044577af548
---

In CSS erzeugt **`::after`** ein [Pseudoelement](/de/docs/Web/CSS/Reference/Selectors/Pseudo-elements), das das letzte Kind des ausgewählten Elements ist. Es wird oft verwendet, um mit der {{CSSxRef("content")}}-Eigenschaft kosmetische Inhalte zu einem Element hinzuzufügen. Standardmäßig ist es inline.

{{InteractiveExample("CSS Demo: ::after", "tabbed-standard")}}

```css interactive-example
a::after {
  content: " (" attr(href) ")";
}

.dead-link {
  text-decoration: line-through;
}

.dead-link::after {
  content: url("/shared-assets/images/examples/warning.svg");
  display: inline-block;
  width: 12px;
  height: 12px;
}
```

```html interactive-example
<p>
  The sailfish is named for its sail-like dorsal fin and is widely considered
  the fastest fish in the ocean.
  <a href="https://en.wikipedia.org/wiki/Sailfish"
    >You can read more about it here</a
  >.
</p>

<p>
  The red lionfish is a predatory scorpionfish that lives on coral reefs of the
  Indo-Pacific Ocean and more recently in the western Atlantic.
  <a href="" class="dead-link">You can read more about it here</a>.
</p>
```

## Syntax

```css-nolint
::after {
  content: /* value */;
  /* properties */
}
```

## Beschreibung

Das `::after`-Pseudoelement ist eine Inline-Box, die als unmittelbares Kind des Elements, mit dem es verknüpft ist, oder des "auslösenden Elements" erzeugt wird. Es wird häufig verwendet, um über die {{CSSxRef("content")}}-Eigenschaft kosmetische Inhalte zu einem Element hinzuzufügen, wie z.B. Symbole, Anführungszeichen oder andere Verzierungen.

`::after`-Pseudoelemente können nicht auf _{{Glossary("replaced_elements", "ersetzte Elemente")}}_ angewendet werden, wie z.B. {{htmlelement("img")}}, deren Inhalte durch externe Ressourcen bestimmt werden und nicht von den aktuellen Dokumentstilen beeinflusst werden.

Ein `::after`-Pseudoelement mit einem {{cssxref("display")}}-Wert von `list-item` verhält sich wie ein Listenelement und kann daher ein {{cssxref("::marker")}}-Pseudoelement erzeugen, genau wie ein {{htmlelement("li")}}-Element.

Wenn die [`content`](/de/docs/Web/CSS/Reference/Properties/content)-Eigenschaft nicht angegeben ist, einen ungültigen Wert hat oder `normal` oder `none` als Wert hat, wird das `::after`-Pseudoelement nicht gerendert. Es verhält sich, als wäre `display: none` gesetzt.

> [!NOTE]
> Die [Selectors Level 3](https://drafts.csswg.org/selectors-3/#gen-content)-Spezifikation führte die Doppelpunkt-Notation `::after` ein, um [Pseudoklassen](/de/docs/Web/CSS/Reference/Selectors/Pseudo-classes) von [Pseudoelementen](/de/docs/Web/CSS/Reference/Selectors/Pseudo-elements) zu unterscheiden. Browser akzeptieren auch die Einfachpunkt-Notation `:after`, die in CSS2 eingeführt wurde.

Standardmäßig teilen das `::before`- und das `::after`-Pseudoelement denselben Stapelkontext wie ihr übergeordnetes Element. Wenn kein {{cssxref("z-index")}} explizit gesetzt ist, erscheint der vom `::after`-Pseudoelement generierte Inhalt über dem vom `::before`-Pseudoelement generierten Inhalt, da `::after` später im DOM-Fluss gerendert wird.

## Barrierefreiheit

Die Verwendung eines `::after`-Pseudoelements zur Inhaltserstellung wird nicht empfohlen, da es für Bildschirmlesegeräte nicht zuverlässig zugänglich ist.

## Beispiele

### Grundlegende Nutzung

Lassen Sie uns zwei Klassen erstellen: eine für langweilige Absätze und eine für spannende. Wir können diese Klassen verwenden, um Pseudoelemente am Ende von Absätzen hinzuzufügen.

#### HTML

```html
<p class="boring-text">Here is some plain old boring text.</p>
<p>Here is some normal text that is neither boring nor exciting.</p>
<p class="exciting-text">Contributing to MDN is easy and fun.</p>
```

#### CSS

```css
.exciting-text::after {
  content: " <- EXCITING!";
  color: darkgreen;
  font-weight: bolder;
}

.boring-text::after {
  content: " <- BORING";
  color: darkviolet;
  font-weight: bolder;
}
```

#### Ergebnis

{{EmbedLiveSample('Basic_usage', 500, 150)}}

### Dekoratives Beispiel

Wir können den Text oder die Bilder in der {{CSSxRef("content")}}-Eigenschaft auf fast jede gewünschte Weise stylen.

#### HTML

```html
<span class="ribbon">Look at the orange box after this text. </span>
```

#### CSS

```css
.ribbon {
  background-color: #5bc8f7;
}

.ribbon::after {
  content: "This is a fancy orange box.";
  background-color: #ffba10;
  border-color: black;
  border-style: dotted;
}
```

#### Ergebnis

{{EmbedLiveSample('Decorative_example', 450, 20)}}

### Tooltips

Dieses Beispiel verwendet `::after`, in Verbindung mit dem [`attr()`](/de/docs/Web/CSS/Reference/Values/attr)-CSS-Ausdruck und einem `data-description` [benutzerdefinierten Datenattribut](/de/docs/Web/HTML/Reference/Global_attributes/data-*), um Tooltips zu erstellen. Kein JavaScript erforderlich!

Wir können auch Tastaturbenutzer mit dieser Technik unterstützen, indem wir ein `tabindex` von `0` hinzufügen, um jedes `span` tastaturfokussierbar zu machen, und einen CSS-`:focus`-Selektor verwenden. Dies zeigt, wie flexibel `::before` und `::after` sein können, obwohl für die zugänglichste Erfahrung ein semantisches Offenlegungs-Widget, das auf andere Weise erstellt wird (z. B. mit [details und summary](/de/docs/Web/HTML/Reference/Elements/details)-Elementen), wahrscheinlich besser geeignet ist.

#### HTML

```html
<p>
  Here we have some
  <span tabindex="0" data-description="collection of words and punctuation">
    text
  </span>
  with a few
  <span tabindex="0" data-description="small popups that appear when hovering">
    tooltips</span
  >.
</p>
```

#### CSS

```css
span[data-description] {
  position: relative;
  text-decoration: underline;
  color: blue;
  cursor: help;
}

span[data-description]:hover::after,
span[data-description]:focus::after {
  content: attr(data-description);
  position: absolute;
  left: 0;
  top: 24px;
  min-width: 200px;
  border: 1px #aaaaaa solid;
  border-radius: 10px;
  background-color: #ffffcc;
  padding: 12px;
  color: black;
  font-size: 14px;
  z-index: 1;
}
```

#### Ergebnis

{{EmbedLiveSample('Tooltips', 450, 120)}}

### `::after::marker` verschachtelte Pseudoelemente

Das `::after::marker` [verschachtelte Pseudoelement](/de/docs/Web/CSS/Reference/Selectors/Pseudo-elements#nesting_pseudo-elements) wählt das Listen-{{CSSxRef("::marker")}} eines `::after`-Pseudoelements aus, das selbst ein Listenelement ist, d.h. es hat seine {{CSSxRef("display")}}-Eigenschaft auf `list-item` gesetzt.

In diesem Demo generieren wir zusätzliche Listenelemente vor und nach einem Listen-Navigationsmenü mit `::before` und `::after` (und setzen sie auf `display: list-item`, damit sie sich wie Listenelemente verhalten). Dann verwenden wir `ul::before::marker` und `ul::after::marker`, um ihren Listenmarkern eine andere Farbe zu geben.

#### HTML

```html
<ul>
  <li><a href="#">Introduction</a></li>
  <li><a href="#">Getting started</a></li>
  <li><a href="#">Understanding the basics</a></li>
</ul>
```

#### CSS

```css
ul {
  font-size: 1.5rem;
  font-family: "Helvetica", "Arial", sans-serif;
}

ul::before,
ul::after {
  display: list-item;
  color: orange;
}

ul::before {
  content: "Start";
}

ul::after {
  content: "End";
}

ul::before::marker,
ul::after::marker {
  color: red;
}
```

#### Ergebnis

{{EmbedLiveSample('`::after::marker` nested pseudo-elements', 450, 200)}}

Während die Listenpunkte der drei Navigationselemente erzeugt werden, da sie `<li>`-Elemente sind, wurden "Start" und "Ende" über Pseudoelemente eingefügt und `::marker` wird verwendet, um ihre Punkte zu stylen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{CSSxRef("::before")}}
- {{CSSxRef("content")}}
