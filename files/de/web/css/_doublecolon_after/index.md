---
title: "::after"
slug: Web/CSS/::after
l10n:
  sourceCommit: c8ff2398fa61950fe46f2d9155a105c125bfea83
---

{{CSSRef}}

In CSS erstellt **`::after`** ein [Pseudoelement](/de/docs/Web/CSS/Pseudo-elements), das das letzte Kind des ausgewählten Elements ist. Es wird häufig verwendet, um mit der {{CSSxRef("content")}}-Eigenschaft kosmetische Inhalte zu einem Element hinzuzufügen. Es ist standardmäßig inline.

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

> [!NOTE]
> Die von `::before` und `::after` generierten Pseudoelemente sind Inline-Boxen, die so erzeugt werden, als wären sie unmittelbare Kinder des Elements, auf das sie angewendet werden, oder des "ursprünglichen Elements", und können daher nicht auf _{{Glossary("replaced_elements", "ersetzte Elemente")}}_, wie z.B. {{htmlelement("img")}}, angewendet werden, deren Inhalte ersetzt werden und nicht von den Stilen des aktuellen Dokuments betroffen sind.

## Syntax

```css-nolint
::after {
  content: /* value */;
  /* properties */
}
```

Wenn die [`content`](/de/docs/Web/CSS/content)-Eigenschaft nicht angegeben wird, einen ungültigen Wert hat oder `normal` oder `none` als Wert hat, dann wird das `::after`-Pseudoelement nicht gerendert. Es verhält sich, als ob `display: none` gesetzt ist.

> [!NOTE]
> CSS führte die Notation `::after` (mit zwei Doppelpunkten) ein, um [Pseudoklassen](/de/docs/Web/CSS/Pseudo-classes) von [Pseudoelementen](/de/docs/Web/CSS/Pseudo-elements) zu unterscheiden. Aus Gründen der Abwärtskompatibilität akzeptieren Browser auch `:after`, das früher eingeführt wurde.

## Barrierefreiheit

Die Verwendung eines `::after` Pseudoelements zum Hinzufügen von Inhalten wird nicht empfohlen, da es nicht zuverlässig für Screenreader zugänglich ist.

## Beispiele

### Grundlegende Verwendung

Lassen Sie uns zwei Klassen erstellen: Eine für langweilige Absätze und eine für aufregende. Wir können diese Klassen verwenden, um Pseudoelemente an das Ende von Absätzen hinzuzufügen.

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

Wir können Text oder Bilder in der {{CSSxRef("content")}}-Eigenschaft fast nach Belieben gestalten.

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

Dieses Beispiel verwendet `::after` in Verbindung mit dem [`attr()`](/de/docs/Web/CSS/attr)-CSS-Ausdruck und einem `data-descr` [benutzerdefinierten Datenattribut](/de/docs/Web/HTML/Global_attributes/data-*), um Tooltips zu erstellen. Kein JavaScript erforderlich!

Wir können auch Tastaturbenutzer mit dieser Technik unterstützen, indem wir ein `tabindex` von `0` hinzufügen, um jedes `span` über die Tastatur fokussierbar zu machen, und einen CSS `:focus`-Selektor verwenden. Dies zeigt, wie flexibel `::before` und `::after` sein können, auch wenn für das zugänglichste Erlebnis ein semantisches Disclosure-Widget, das auf andere Weise erstellt wurde (z.B. mit [details und summary](/de/docs/Web/HTML/Element/details)-Elementen), wahrscheinlich angemessener ist.

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
