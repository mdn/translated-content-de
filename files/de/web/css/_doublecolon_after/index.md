---
title: "::after"
slug: Web/CSS/::after
l10n:
  sourceCommit: 4d51a212bfda5ce9978d162caf5532d155f7eb0a
---

{{CSSRef}}

Im CSS erstellt **`::after`** ein [Pseudoelement](/de/docs/Web/CSS/Pseudo-elements), das das letzte Kind des ausgewählten Elements ist. Es wird häufig verwendet, um ein Element mit der {{CSSxRef("content")}}-Eigenschaft kosmetisch zu ergänzen. Standardmäßig ist es inline.

{{EmbedInteractiveExample("pages/tabbed/pseudo-element-after.html", "tabbed-standard")}}

> [!NOTE]
> Die durch `::before` und `::after` erzeugten Pseudoelemente sind Inline-Boxen, die so generiert werden, als wären sie unmittelbare Kinder des Elements, auf das sie angewendet werden, des sogenannten "auslösenden Elements". Daher können sie nicht auf _[ersetzte Elemente](/de/docs/Web/CSS/Replaced_element)_ wie {{htmlelement("img")}} angewendet werden, deren Inhalte ersetzt und nicht durch die Stile des aktuellen Dokuments beeinflusst werden.

## Syntax

```css-nolint
::after {
  content: /* value */;
  /* properties */
}
```

Wenn die [`content`](/de/docs/Web/CSS/content)-Eigenschaft nicht angegeben ist, einen ungültigen Wert hat oder `normal` oder `none` als Wert enthält, wird das `::after`-Pseudoelement nicht gerendert. Es verhält sich so, als wäre `display: none` gesetzt.

> [!NOTE]
> CSS führte die Notation `::after` (mit zwei Doppelpunkten) ein, um [Pseudoklassen](/de/docs/Web/CSS/Pseudo-classes) von [Pseudoelementen](/de/docs/Web/CSS/Pseudo-elements) zu unterscheiden. Aus Gründen der Rückwärtskompatibilität akzeptieren Browser auch die ältere Syntax `:after`.

## Barrierefreiheit

Die Verwendung eines `::after`-Pseudoelements zur Inhaltsergänzung wird nicht empfohlen, da der Inhalt für Screenreader nicht zuverlässig zugänglich ist.

## Beispiele

### Grundlegende Nutzung

Lassen Sie uns zwei Klassen erstellen: eine für langweilige Absätze und eine für aufregende. Diese Klassen können verwendet werden, um Pseudoelemente an das Ende von Absätzen hinzuzufügen.

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

Wir können Texte oder Bilder in der {{CSSxRef("content")}}-Eigenschaft nahezu beliebig gestalten.

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

In diesem Beispiel wird `::after` zusammen mit dem [`attr()`](/de/docs/Web/CSS/attr)-CSS-Ausdruck und einem `data-descr`-[benutzerdefinierten Datenattribut](/de/docs/Web/HTML/Global_attributes/data-*), zur Erstellung von Tooltips verwendet. Es wird kein JavaScript benötigt!

Wir können auch Tastaturnutzer mit dieser Technik unterstützen, indem wir ein `tabindex` von `0` hinzufügen, um jedes `span` per Tastatur fokussierbar zu machen, und einen CSS-`:focus`-Selektor verwenden. Dies zeigt die Flexibilität von `::before` und `::after`, obwohl für die zugänglichste Erfahrung ein semantisches Offenlegungs-Widget, das auf eine andere Weise erstellt wurde (z. B. mit [details- und summary-](/de/docs/Web/HTML/Element/details)-Elementen), wahrscheinlich angemessener ist.

#### HTML

```html
<p>
  Here we have some
  <span tabindex="0" data-descr="collection of words and punctuation">
    text
  </span>
  with a few
  <span tabindex="0" data-descr="small popups that appear when hovering">
    tooltips</span
  >.
</p>
```

#### CSS

```css
span[data-descr] {
  position: relative;
  text-decoration: underline;
  color: #00f;
  cursor: help;
}

span[data-descr]:hover::after,
span[data-descr]:focus::after {
  content: attr(data-descr);
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

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{CSSxRef("::before")}}
- {{CSSxRef("content")}}
