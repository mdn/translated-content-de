---
title: ::after
slug: Web/CSS/::after
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

In CSS erstellt **`::after`** ein [Pseudoelement](/de/docs/Web/CSS/Pseudo-elements), das das letzte Kind des ausgewählten Elements ist. Es wird häufig verwendet, um einem Element mit der {{CSSxRef("content")}}-Eigenschaft kosmetischen Inhalt hinzuzufügen. Standardmäßig ist es inline.

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

Das `::after`-Pseudoelement ist ein Inline-Block, der als unmittelbares Kind des Elements erstellt wird, mit dem es verknüpft ist, oder des "ursprünglichen Elements". Es wird häufig verwendet, um einem Element über die {{CSSxRef("content")}}-Eigenschaft kosmetischen Inhalt hinzuzufügen, wie z.B. Symbole, Anführungszeichen oder andere Dekorationen.

`::after`-Pseudoelemente können nicht auf _{{Glossary("replaced_elements", "ersetzte Elemente")}}_ angewendet werden, wie etwa {{htmlelement("img")}}, deren Inhalt von externen Quellen bestimmt wird und nicht von den Stilen des aktuellen Dokuments beeinflusst wird.

Ein `::after`-Pseudoelement mit einem {{cssxref("display")}}-Wert von `list-item` verhält sich wie ein Listenelement und kann daher ein {{cssxref("::marker")}}-Pseudoelement erzeugen, genau wie ein {{htmlelement("li")}}-Element.

Wenn die [`content`](/de/docs/Web/CSS/content)-Eigenschaft nicht angegeben, einen ungültigen Wert hat oder `normal` oder `none` als Wert hat, dann wird das `::after`-Pseudoelement nicht gerendert. Es verhält sich, als wäre `display: none` gesetzt.

> [!NOTE]
> Die [Selectors Level 3](https://drafts.csswg.org/selectors-3/#gen-content)-Spezifikation führte die Doppelpunkt-Notation `::after` ein, um [Pseudoklassen](/de/docs/Web/CSS/Pseudo-classes) von [Pseudoelementen](/de/docs/Web/CSS/Pseudo-elements) zu unterscheiden. Browser akzeptieren auch die Einführung der Einzelpunktnotation `:after` aus CSS2.

Standardmäßig teilen `::before` und `::after` Pseudoelemente denselben Stapelkontext wie ihr übergeordnetes Element. Wenn kein {{cssxref("z-index")}} explizit gesetzt ist, erscheint der von `::after` generierte Inhalt über dem von `::before` generierten Inhalt, weil `::after` später im DOM-Fluss gerendert wird.

## Barrierefreiheit

Die Verwendung eines `::after`-Pseudoelements zur Hinzufügung von Inhalt wird nicht empfohlen, da dieser für Screenreader nicht zuverlässig zugänglich ist.

## Beispiele

### Grundlegende Verwendung

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

Wir können Text oder Bilder in der {{CSSxRef("content")}}-Eigenschaft so gestalten, wie wir möchten.

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

Dieses Beispiel verwendet `::after` in Verbindung mit dem [`attr()`](/de/docs/Web/CSS/attr)-CSS-Ausdruck und einem `data-description` [benutzerdefinierten Datensatzattribut](/de/docs/Web/HTML/Reference/Global_attributes/data-*), um Tooltips zu erstellen. Es wird kein JavaScript benötigt!

Wir können auch Tastaturnutzer mit dieser Technik unterstützen, indem wir jedem `span` einen `tabindex` von `0` hinzufügen, um sie tastaturfokussierbar zu machen, und einen CSS-`:focus`-Selektor verwenden. Dies zeigt, wie flexibel `::before` und `::after` sein können, obwohl für die zugänglichste Erfahrung ein semantisches Erweiterungs-Widget, das auf andere Weise erstellt wurde (wie mit [details und summary](/de/docs/Web/HTML/Reference/Elements/details)-Elementen), wahrscheinlich besser geeignet ist.

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
  color: #00f;
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
  color: #000000;
  font-size: 14px;
  z-index: 1;
}
```

#### Ergebnis

{{EmbedLiveSample('Tooltips', 450, 120)}}

### `::after::marker` geschachtelte Pseudoelemente

Das `::after::marker` [geschachtelte Pseudoelement](/de/docs/Web/CSS/Pseudo-elements#nesting_pseudo-elements) wählt den Listen-{{CSSxRef("::marker")}} eines `::after`-Pseudoelements aus, das selbst ein Listenelement ist, d.h. dessen {{CSSxRef("display")}}-Eigenschaft auf `list-item` gesetzt ist.

In dieser Demo erzeugen wir zusätzliche Listenelemente vor und nach einem Navigationsmenü in der Liste, indem wir `::before` und `::after` verwenden (indem wir sie auf `display: list-item` setzen, damit sie sich wie Listenelemente verhalten). Dann verwenden wir `ul::before::marker` und `ul::after::marker`, um ihre Listenmarkierungen in einer anderen Farbe darzustellen.

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
  font-family: Arial, Helvetica, sans-serif;
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

Während die Listenpunkte der drei Navigationselemente generiert werden, weil sie `<li>`-Elemente sind, wurden "Start" und "End" über Pseudoelemente eingefügt, und `::marker` wird verwendet, um deren Punkte zu gestalten.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{CSSxRef("::before")}}
- {{CSSxRef("content")}}
