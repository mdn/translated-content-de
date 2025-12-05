---
title: ::after
slug: Web/CSS/Reference/Selectors/::after
l10n:
  sourceCommit: 1dbba9f7a2c2e35c6e01e8a63159e2aac64b601b
---

In CSS erzeugt **`::after`** ein [Pseudo-Element](/de/docs/Web/CSS/Reference/Selectors/Pseudo-elements), das das letzte Kind des ausgewählten Elements ist. Es wird häufig verwendet, um kosmetische Inhalte mit der {{CSSxRef("content")}}-Eigenschaft zu einem Element hinzuzufügen. Es ist standardmäßig inline.

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

Das `::after` Pseudo-Element ist ein Inline-Block, der als unmittelbares Kind des Elements generiert wird, mit dem es verbunden ist, oder des "ursprünglichen Elements". Es wird häufig verwendet, um kosmetische Inhalte über die {{CSSxRef("content")}}-Eigenschaft zu einem Element hinzuzufügen, wie z.B. Icons, Anführungszeichen oder andere Dekorationen.

`::after` Pseudo-Elemente können nicht auf _{{Glossary("replaced_elements", "ersetzte Elemente")}}_ wie {{htmlelement("img")}} angewendet werden, deren Inhalte durch externe Ressourcen bestimmt werden und nicht von den Stilen des aktuellen Dokuments beeinflusst werden.

Ein `::after` Pseudo-Element mit einem {{cssxref("display")}}-Wert von `list-item` verhält sich wie ein Listenelement und kann daher ein {{cssxref("::marker")}} Pseudo-Element erzeugen, genau wie ein {{htmlelement("li")}}-Element.

Wenn die {{cssxref("content")}} Eigenschaft nicht angegeben ist, einen ungültigen Wert hat oder als Wert `normal` oder `none` hat, wird das `::after` Pseudo-Element nicht dargestellt. Es verhält sich, als wäre `display: none` gesetzt.

> [!NOTE]
> Die [Selectors Level 3](https://drafts.csswg.org/selectors-3/#gen-content) Spezifikation führte die Doppelpunktnotation `::after` ein, um [Pseudo-Klassen](/de/docs/Web/CSS/Reference/Selectors/Pseudo-classes) von [Pseudo-Elementen](/de/docs/Web/CSS/Reference/Selectors/Pseudo-elements) zu unterscheiden. Browser akzeptieren auch die in CSS2 eingeführte Einzelpunktnotation `:after`.

Standardmäßig teilen die `::before` und `::after` Pseudo-Elemente denselben Stacking-Kontext wie ihr übergeordnetes Element. Wenn kein {{cssxref("z-index")}} explizit gesetzt ist, erscheint der generierte Inhalt des `::after` Pseudo-Elements über dem generierten Inhalt des `::before` Pseudo-Elements, da `::after` später im DOM-Flow gerendert wird.

## Barrierefreiheit

Die Verwendung eines `::after` Pseudo-Elements zur Hinzufügung von Inhalten wird nicht empfohlen, da es für Screenreader nicht zuverlässig zugänglich ist.

## Beispiele

### Grundlegende Verwendung

Lassen Sie uns zwei Klassen erstellen: eine für langweilige Absätze und eine für spannende. Wir können diese Klassen verwenden, um Pseudo-Elemente am Ende von Absätzen hinzuzufügen.

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

Wir können Text oder Bilder in der {{CSSxRef("content")}} Eigenschaft fast beliebig gestalten.

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

In diesem Beispiel wird `::after` zusammen mit dem [`attr()`](/de/docs/Web/CSS/Reference/Values/attr) CSS-Ausdruck und einem `data-description` [benutzerdefinierten Datenattribut](/de/docs/Web/HTML/Reference/Global_attributes/data-*), um Tooltips zu erstellen. Kein JavaScript ist erforderlich!

Wir können auch Tastaturnutzer mit dieser Technik unterstützen, indem wir jedem `span` einen `tabindex` von `0` hinzufügen, um die Tastaturfokussierung zu ermöglichen, und einen CSS `:focus` Selektor verwenden. Dies zeigt, wie flexibel `::before` und `::after` sein können, obwohl für die am besten zugängliche Erfahrung ein semantisches Disclosure-Widget, das auf andere Weise erstellt wird (z.B. mit den [details und summary](/de/docs/Web/HTML/Reference/Elements/details) Elementen), wahrscheinlich besser geeignet ist.

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

### `::after::marker` verschachtelte Pseudo-Elemente

Das `::after::marker` [verschachtelte Pseudo-Element](/de/docs/Web/CSS/Reference/Selectors/Pseudo-elements#nesting_pseudo-elements) wählt das Listen-{{CSSxRef("::marker")}} eines `::after` Pseudo-Elements, das selbst ein Listenelement ist, d.h. seine {{CSSxRef("display")}} Eigenschaft auf `list-item` gesetzt ist.

In dieser Demo generieren wir zusätzliche Listenelemente vor und nach einem Listen-Navigationsmenü mit `::before` und `::after` (indem wir sie auf `display: list-item` setzen, damit sie sich wie Listenelemente verhalten). Wir verwenden dann `ul::before::marker` und `ul::after::marker`, um ihren Listenmarkierungen eine andere Farbe zu geben.

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

Während die Listenpunkte der drei Navigationselemente generiert werden, weil sie `<li>` Elemente sind, wurden "Start" und "End" über Pseudo-Elemente eingefügt, und `::marker` wird verwendet, um ihre Punkte zu stylen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{CSSxRef("::before")}}
- {{CSSxRef("content")}}
