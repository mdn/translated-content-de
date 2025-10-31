---
title: ::after
slug: Web/CSS/::after
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

In CSS erzeugt **`::after`** ein [Pseudo-Element](/de/docs/Web/CSS/Pseudo-elements), das das letzte Kind des ausgewählten Elements ist. Es wird oft verwendet, um mit der {{CSSxRef("content")}}-Eigenschaft kosmetische Inhalte zu einem Element hinzuzufügen. Es ist standardmäßig inline.

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

Das `::after`-Pseudo-Element ist eine Inline-Box, die als unmittelbares Kind des Elements generiert wird, dem sie zugeordnet ist, auch bekannt als "auslösendes Element". Es wird häufig verwendet, um ein Element über die {{CSSxRef("content")}}-Eigenschaft mit kosmetischem Inhalt wie Icons, Anführungszeichen oder sonstigen Verzierungen zu versehen.

`::after`-Pseudo-Elemente können nicht auf _{{Glossary("replaced_elements", "ersetzte Elemente")}}_ wie {{htmlelement("img")}} angewendet werden, deren Inhalt durch externe Ressourcen bestimmt wird und nicht von den Stilen des aktuellen Dokuments beeinflusst wird.

Ein `::after`-Pseudo-Element mit einem {{cssxref("display")}}-Wert von `list-item` verhält sich wie ein Listenelement und kann daher ein {{cssxref("::marker")}}-Pseudo-Element generieren, genau wie ein {{htmlelement("li")}}-Element.

Wenn die [`content`](/de/docs/Web/CSS/Reference/Properties/content)-Eigenschaft nicht angegeben ist, einen ungültigen Wert hat oder als Wert `normal` oder `none` enthält, wird das `::after`-Pseudo-Element nicht gerendert. Es verhält sich, als wäre `display: none` gesetzt.

> [!NOTE]
> Die [Selectors Level 3](https://drafts.csswg.org/selectors-3/#gen-content) Spezifikation hat die Doppelpunkt-Notation `::after` eingeführt, um [Pseudoklassen](/de/docs/Web/CSS/Pseudo-classes) von [Pseudo-Elementen](/de/docs/Web/CSS/Pseudo-elements) zu unterscheiden. Browser akzeptieren auch die in CSS2 eingeführte Einfachpunkt-Notation `:after`.

Standardmäßig teilen `::before` und `::after`-Pseudo-Elemente denselben Stapelkontext wie ihr Elternteil. Wenn kein {{cssxref("z-index")}} ausdrücklich gesetzt ist, erscheint der durch das `::after`-Pseudo-Element generierte Inhalt über dem durch das `::before`-Pseudo-Element generierten Inhalt, da `::after` später im DOM-Fluss gerendert wird.

## Barrierefreiheit

Die Verwendung eines `::after`-Pseudo-Elements zur Hinzufügung von Inhalten wird nicht empfohlen, da sie für Screenreader nicht zuverlässig zugänglich ist.

## Beispiele

### Grundlegende Verwendung

Lassen Sie uns zwei Klassen erstellen: eine für langweilige Absätze und eine für aufregende. Wir können diese Klassen verwenden, um Pseudo-Elemente am Ende von Absätzen hinzuzufügen.

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

Wir können Text oder Bilder in der {{CSSxRef("content")}}-Eigenschaft nahezu beliebig stilisieren.

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

In diesem Beispiel wird `::after` in Verbindung mit dem [`attr()`](/de/docs/Web/CSS/attr)-CSS-Ausdruck und einem `data-description` [benutzerdefinierten Daten-Attribut](/de/docs/Web/HTML/Reference/Global_attributes/data-*), um Tooltips zu erstellen. Kein JavaScript erforderlich!

Wir können mit dieser Technik auch Tastaturnutzer unterstützen, indem wir jedem `span` ein `tabindex` von `0` hinzufügen, um es per Tastatur fokussierbar zu machen, und einen CSS-`:focus`-Selektor verwenden. Dies zeigt, wie flexibel `::before` und `::after` sein können, obwohl für die zugänglichste Erfahrung ein semantisches Offenlegungs-Widget, das auf andere Weise erstellt wurde (zum Beispiel mit den [details und summary](/de/docs/Web/HTML/Reference/Elements/details)-Elementen), wahrscheinlich besser geeignet ist.

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

Das `::after::marker` [verschachtelte Pseudo-Element](/de/docs/Web/CSS/Pseudo-elements#nesting_pseudo-elements) wählt den List {{CSSxRef("::marker")}} eines `::after`-Pseudo-Elements aus, das selbst ein Listenelement ist, das heißt, seine {{CSSxRef("display")}}-Eigenschaft ist auf `list-item` gesetzt.

In diesem Beispiel generieren wir zusätzliche Listenelemente vor und nach einem Listen-Navigationsmenü mit `::before` und `::after` (wir setzen sie auf `display: list-item`, damit sie sich wie Listenelemente verhalten). Wir verwenden dann `ul::before::marker` und `ul::after::marker`, um deren Listenmarker in einer anderen Farbe darzustellen.

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

Während die Listenpunkte der drei Navigationselemente generiert werden, weil sie `<li>`-Elemente sind, wurden "Start" und "Ende" über Pseudo-Elemente eingefügt und `::marker` wird verwendet, um deren Punkte zu stylen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{CSSxRef("::before")}}
- {{CSSxRef("content")}}
