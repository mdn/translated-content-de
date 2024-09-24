---
title: "::after"
slug: Web/CSS/::after
l10n:
  sourceCommit: 4cb569f768ec9529724f8fb06539f2903a583a41
---

{{CSSRef}}

In CSS erzeugt **`::after`** ein [Pseudoelement](/de/docs/Web/CSS/Pseudo-elements), das das letzte Kind des ausgewählten Elements ist. Es wird häufig verwendet, um mit der {{CSSxRef("content")}}-Eigenschaft kosmetische Inhalte zu einem Element hinzuzufügen. Standardmäßig ist es inline.

{{EmbedInteractiveExample("pages/tabbed/pseudo-element-after.html", "tabbed-standard")}}

> [!NOTE]
> Die durch `::before` und `::after` generierten Pseudoelemente sind Inline-Boxen, die so erzeugt werden, als ob sie unmittelbare Kinder des Elements wären, auf dem sie angewendet werden, oder des "ursprünglichen Elements". Daher können sie nicht auf _[ersetzte Elemente](/de/docs/Web/CSS/Replaced_element)_, wie {{htmlelement("img")}}, angewendet werden, deren Inhalte ersetzt werden und nicht von den Stilen des aktuellen Dokuments betroffen sind.

## Syntax

```css-nolint
::after {
  content: /* value */;
  /* properties */
}
```

Wenn die [`content`](/de/docs/Web/CSS/content)-Eigenschaft nicht angegeben ist, einen ungültigen Wert hat oder den Wert `normal` oder `none` hat, wird das `::after`-Pseudoelement nicht dargestellt. Es verhält sich, als wäre `display: none` gesetzt.

> [!NOTE]
> CSS führte die `::after`-Notation (mit zwei Doppelpunkten) ein, um [Pseudoklassen](/de/docs/Web/CSS/Pseudo-classes) von [Pseudoelementen](/de/docs/Web/CSS/Pseudo-elements) zu unterscheiden. Aus Gründen der Rückwärtskompatibilität akzeptieren Browser auch `:after`, das früher eingeführt wurde.

## Barrierefreiheit

Die Verwendung eines `::after`-Pseudoelements, um Inhalte hinzuzufügen, wird nicht empfohlen, da es für Bildschirmlesegeräte nicht zuverlässig zugänglich ist.

## Beispiele

### Einfache Verwendung

Erstellen wir zwei Klassen: eine für langweilige Absätze und eine für spannende. Wir können diese Klassen verwenden, um Pseudoelemente am Ende von Absätzen hinzuzufügen.

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
  color: green;
}

.boring-text::after {
  content: " <- BORING";
  color: red;
}
```

#### Ergebnis

{{EmbedLiveSample('Simple_usage', 500, 150)}}

### Dekoratives Beispiel

Wir können Text oder Bilder in der {{CSSxRef("content")}}-Eigenschaft nahezu beliebig gestalten.

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

In diesem Beispiel wird `::after` zusammen mit dem [`attr()`](/de/docs/Web/CSS/attr)-CSS-Ausdruck und einem `data-descr` [benutzerdefinierten Datenattribut](/de/docs/Web/HTML/Global_attributes/data-*), um Tooltips zu erstellen. Kein JavaScript erforderlich!

Wir können auch Tastaturnutzer mit dieser Technik unterstützen, indem wir jedem `span` einen `tabindex` von `0` hinzufügen, um es mit der Tastatur fokussierbar zu machen, und einen CSS-`:focus`-Selektor verwenden. Dies zeigt, wie flexibel `::before` und `::after` sein können, obwohl für das barrierefreiste Erlebnis ein semantisches Disclosure-Widget, das auf andere Weise erstellt wurde (z.B. mit [details und summary](/de/docs/Web/HTML/Element/details)-Elementen), wahrscheinlich angemessener ist.

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
