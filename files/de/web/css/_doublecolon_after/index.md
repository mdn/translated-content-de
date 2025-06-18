---
title: ::after
slug: Web/CSS/::after
l10n:
  sourceCommit: 24480b04e03f28b38d296bd2c4a36fe1358d0a09
---

{{CSSRef}}

In CSS erzeugt **`::after`** ein [Pseudo-Element](/de/docs/Web/CSS/Pseudo-elements), das das letzte Kind des ausgewählten Elements ist. Es wird häufig verwendet, um ein kosmetisches Element zu einem Element mit der {{CSSxRef("content")}}-Eigenschaft hinzuzufügen. Es ist standardmäßig inline.

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

Das `::after`-Pseudo-Element ist eine Inline-Box, die als direktes Kind des Elements, mit dem es verknüpft ist, oder des "ursprünglichen Elements" generiert wird. Es wird häufig verwendet, um über die {{CSSxRef("content")}}-Eigenschaft kosmetische Elemente wie Symbole, Anführungszeichen oder andere Dekorationen hinzuzufügen.

`::after`-Pseudo-Elemente können nicht auf _{{Glossary("replaced_elements", "ersetzte Elemente")}}_ wie {{htmlelement("img")}} angewendet werden, deren Inhalte durch externe Ressourcen bestimmt werden und nicht durch die Stile des aktuellen Dokuments beeinflusst werden.

Ein `::after`-Pseudo-Element mit einem {{cssxref("display")}}-Wert von `list-item` verhält sich wie ein Listeneintrag und kann daher ein {{cssxref("::marker")}}-Pseudo-Element genauso erzeugen wie ein {{htmlelement("li")}}-Element.

Wenn die [`content`](/de/docs/Web/CSS/content)-Eigenschaft nicht angegeben ist, einen ungültigen Wert hat oder den Wert `normal` oder `none` hat, wird das `::after`-Pseudo-Element nicht gerendert. Es verhält sich, als ob `display: none` gesetzt ist.

> [!NOTE]
> Die [Selectors Level 3](https://drafts.csswg.org/selectors-3/#gen-content)-Spezifikation führte die Doppelpunkt-Notation `::after` ein, um [Pseudo-Klassen](/de/docs/Web/CSS/Pseudo-classes) von [Pseudo-Elementen](/de/docs/Web/CSS/Pseudo-elements) zu unterscheiden. Browser akzeptieren auch die Einzelpunkt-Notation `:after`, die in CSS2 eingeführt wurde.

Standardmäßig teilen `::before` und `::after`-Pseudo-Elemente denselben Stacking-Kontext wie ihr Parent-Element. Wenn kein {{cssxref("z-index")}} explizit gesetzt ist, erscheint der vom `::after`-Pseudo-Element generierte Inhalt über dem des `::before`-Pseudo-Elements, da `::after` später im DOM-Fluss gerendert wird.

## Barrierefreiheit

Die Verwendung eines `::after`-Pseudo-Elements zur Hinzufügung von Inhalten wird nicht empfohlen, da es für Screenreader nicht zuverlässig zugänglich ist.

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

Wir können Text oder Bilder in der {{CSSxRef("content")}}-Eigenschaft fast nach Belieben stylen.

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

Dieses Beispiel verwendet `::after` in Verbindung mit dem [`attr()`](/de/docs/Web/CSS/attr)-CSS-Ausdruck und einem `data-description`-[benutzerdefinierten Datensatz-Attribut](/de/docs/Web/HTML/Reference/Global_attributes/data-*), um Tooltips zu erstellen. Kein JavaScript erforderlich!

Wir können diese Technik auch für Tastaturnutzer unterstützen, indem wir einen `tabindex` von `0` hinzufügen, um jedes `span` tastaturfokussierbar zu machen, und einen CSS-`:focus`-Selektor verwenden. Dies zeigt, wie flexibel `::before` und `::after` sein können, obwohl für das barrierefreiste Erlebnis ein semantisches Offenlegungs-Widget, das auf andere Weise erstellt wurde (z.B. mit [details und summary](/de/docs/Web/HTML/Reference/Elements/details)-Elementen), wahrscheinlich angemessener ist.

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

### `::after::marker` verschachtelte Pseudo-Elemente

Das `::after::marker`-[verschachtelte Pseudo-Element](/de/docs/Web/CSS/Pseudo-elements#nesting_pseudo-elements) wählt den Listen {{CSSxRef("::marker")}} eines `::after`-Pseudo-Elements, das selbst ein Listeneintrag ist, das heißt, es hat die {{CSSxRef("display")}}-Eigenschaft auf `list-item` gesetzt.

In dieser Demo generieren wir zusätzliche Listenelemente vor und nach einem Navigationsmenü in einer Liste mit `::before` und `::after` (indem sie auf `display: list-item` gesetzt werden, damit sie sich wie Listeneinträge verhalten). Wir verwenden dann `ul::before::marker` und `ul::after::marker`, um ihren Listenmarkierungen eine andere Farbe zu geben.

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

Während die Listenpunkte der drei Navigationselemente erzeugt werden, weil sie `<li>`-Elemente sind, wurden "Start" und "Ende" über Pseudo-Elemente eingefügt, und `::marker` wird verwendet, um deren Punkte zu stylen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{CSSxRef("::before")}}
- {{CSSxRef("content")}}
