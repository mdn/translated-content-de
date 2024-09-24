---
title: CSS-Selektoren und Kombinatoren
slug: Web/CSS/CSS_selectors/Selectors_and_combinators
l10n:
  sourceCommit: 181d86f26c188f8eb0b8a0d7c30efff7997bc20e
---

{{CSSRef}}

CSS-Selektoren werden verwendet, um ein Muster der Elemente zu definieren, die Sie auswählen möchten, um auf die ausgewählten Elemente eine Reihe von CSS-Regeln anzuwenden. Kombinatoren definieren die Beziehung zwischen den Selektoren. Durch die Verwendung verschiedener Selektoren und Kombinatoren können Sie die gewünschten Elemente basierend auf ihrem Typ, ihren Attributen, ihrem Zustand oder ihrer Beziehung zu anderen Elementen präzise auswählen und stylen.

## Arten von Selektoren

Es gibt über 80 Selektoren und Kombinatoren. CSS-Selektoren können in die folgenden Kategorien gruppiert werden, basierend auf dem Typ der Elemente, die sie auswählen können.

### Grundlegende Selektoren

Der [Typselektor](/de/docs/Web/CSS/Type_selectors) wählt alle Elemente aus, die den angegebenen Knotennamen haben. Zum Beispiel wird `div` alle {{HTMLElement("div")}}-Elemente auswählen und `input` jedes {{HTMLElement("input")}}-Element. Der [universelle Selektor](/de/docs/Web/CSS/Universal_selectors), gekennzeichnet durch ein Sternchen (`*`), ist ein spezieller Typselektor, der alle Elemente auswählt.

Der [Klassenselektor](/de/docs/Web/CSS/Class_selectors) wählt alle Elemente aus, die das angegebene `class`-Attribut haben, gekennzeichnet durch den Klassennamen, dem ein Punkt (`.`) vorangestellt ist. Zum Beispiel wird `.index` jedes Element auswählen, das `class="index"` hat. Der [ID-Selektor](/de/docs/Web/CSS/ID_selectors) wählt ein Element basierend auf dem Wert seines `id`-Attributs aus. Der Selektor ist die `id`, der ein "Nummernzeichen" (U+0023, `#`) vorangestellt ist. Zum Beispiel wird `#toc` das Element auswählen, das `id="toc"` hat. Sowohl [`class`](/de/docs/Web/HTML/Global_attributes/class) als auch [`id`](/de/docs/Web/HTML/Global_attributes/id) sind globale Attribute. Es sollte nur ein Element mit einer bestimmten `id` in einem Dokument geben; aber wenn es mehr als eins gibt, wird der ID-Selektor alle Elemente mit dieser `id` auswählen.

Wenn Sie einen Typ- oder universellen Selektor mit einem Klassen- oder ID-Selektor kombinieren, um einen [zusammengesetzten Selektor](/de/docs/Web/CSS/CSS_selectors/Selector_structure#compound_selector) zu erstellen, muss der Typ- oder universelle Selektor der Klasse oder ID vorangehen.

#### CSS

In diesem Beispiel deklarieren wir vier [einfache Selektoren](/de/docs/Web/CSS/CSS_selectors/Selector_structure#simple_selector) und einen [zusammengesetzten Selektor](/de/docs/Web/CSS/CSS_selectors/Selector_structure#compound_selector) unter Verwendung der vier grundlegenden Selektortypen, wie oben beschrieben.

```css
* {
  font-style: italic;
}
p {
  color: red;
}
.myClass {
  text-decoration: underline;
}
#myId {
  font-family: monospace;
}
p.myClass#myId {
  font-size: 1.5rem;
}
```

#### HTML

```html
<p class="myClass" id="myId">I match everything.</p>
<p>I match the universal and type selectors only.</p>
```

#### Ergebnis

{{EmbedLiveSample("Basic selectors", "100%", 120)}}

## Kombinatoren

Mit CSS-Kombinatoren können wir Selektoren kombinieren, um DOM-Knoten basierend auf ihrer Beziehung zu anderen Elementen innerhalb des Dokumentknotenbaums auszuwählen. Diese Kombination von Selektoren mit Kombinatoren erstellt [komplexe Selektoren](/de/docs/Web/CSS/CSS_selectors/Selector_structure#complex_selector).

### Nachfahre-Kombinator

Der [Nachfahre-Kombinator](/de/docs/Web/CSS/Descendant_combinator), gekennzeichnet durch ein oder mehrere Leerzeichen, wählt Knoten aus, die Nachfahren des ersten Elements sind. Zum Beispiel wird `div span` alle {{HTMLElement("span")}}-Elemente auswählen, die sich innerhalb eines {{HTMLElement("div")}}-Elements befinden.

### Kind-Kombinator

Der [Kind-Kombinator](/de/docs/Web/CSS/Child_combinator) ist spezifischer als der Nachfahre-Kombinator. Gekennzeichnet durch das Größer-als-Zeichen (`>`), wählt der Kind-Kombinator Knoten aus, die direkte Kinder des ersten Elements sind. Im Vergleich zu unserem vorherigen Beispiel wird `div > span` nur die {{HTMLElement("span")}}-Elemente auswählen, die direkte Kinder eines {{HTMLElement("div")}}-Elements sind.

### Nachfolgender-Geschwister-Kombinator

Zusätzlich zu Nachfahre-Selektoren ermöglicht CSS auch die Auswahl von Elementen basierend auf ihren Geschwistern. Der [nachfolgende-Geschwister-Kombinator](/de/docs/Web/CSS/Subsequent-sibling_combinator), gekennzeichnet durch eine Tilde (`~`), wählt Geschwister aus. Gegeben `A ~ B`, werden alle Elemente, die `B` entsprechen, ausgewählt, wenn sie von `A` gefolgt werden, wobei beide `A` und `B` dasselbe Elternteil teilen. Zum Beispiel wird `h2 ~ p` alle {{HTMLElement("p")}}-Elemente auswählen, die einem {{HTMLElement("Heading_Elements", "h2")}} folgen, ob unmittelbar oder nicht.

### Direktes-Nachfolgendes-Geschwister-Kombinator

Der [direktes-nachfolgendes-Geschwister-Kombinator](/de/docs/Web/CSS/Next-sibling_combinator), gekennzeichnet durch das Pluszeichen (`+`), ist dem nachfolgenden-Geschwister-Kombinator ähnlich. Allerdings wählt `A + B` nur `B` aus, wenn `B` unmittelbar von `A` gefolgt wird, wobei beide dasselbe Elternteil teilen. Wird unser vorheriges Beispiel abgeändert, wird `h2 + p` nur das eine `<p>`-Element auswählen, das _unmittelbar_ auf ein `<h2>`-Element folgt.

### Spalten-Kombinator

Es gibt auch einen [Spalten-Kombinator](/de/docs/Web/CSS/Column_combinator), gekennzeichnet durch zwei Pipe-Zeichen (`||`), der, wenn unterstützt, Knoten auswählt, die zu einer Spalte gehören. Zum Beispiel wird `col || td` alle {{HTMLElement("td")}}-Elemente auswählen, die zum Bereich der {{HTMLElement("col")}} gehören.

### Namensraum-Trennzeichen

Der [Namensraum-Trennzeichen](/de/docs/Web/CSS/Namespace_separator) ist ein weiterer Kombinator, der im Allgemeinen in Verbindung mit der {{CSSXref("@namespace")}}-At-Regel verwendet wird. Dieser Kombinator wird durch ein einzelnes Pipe-Zeichen (`|`) gekennzeichnet. Er ermöglicht es, [Typselektoren](/de/docs/Web/CSS/Type_selectors) und den [universellen Selektor](/de/docs/Web/CSS/Universal_selectors) auf einen bestimmten Namensraum zu begrenzen. Zum Beispiel können Sie durch die Definition eines Namensraums wie `@namespace SVG url('http://www.w3.org/2000/svg');` Selektoren einfügen, die nur auf Elemente abzielen, die in einem SVG-Namensraum eingebettet sind. Die Deklaration `SVG|a` würde Links innerhalb von SVGs und nicht die im Rest des Dokuments auswählen. Die Namensraumsteuerung kann nützlich sein, um MathML, SVG oder andere XML-basierte Inhalte innerhalb Ihres HTML zu zielen.

#### CSS

In diesem Beispiel deklarieren wir fünf [relative Selektoren](/de/docs/Web/CSS/CSS_selectors/Selector_structure#relative_selector), wobei [einfache Selektoren](/de/docs/Web/CSS/CSS_selectors/Selector_structure#simple_selector) mit Kombinatoren kombiniert werden.

```css
h2 + p ~ p {
  font-style: italic;
}
h2 + p + p {
  color: red;
}
.myClass + p {
  text-decoration: underline;
}
#myId > .myClass {
  outline: 3px dashed red;
}
* > p {
  font-size: 1.1rem;
}
```

#### HTML

```html
<h2 class="myClass" id="myId">
  No selectors match. <span class="myClass">This span has an outline</span> as
  it is both myClass and a child of #myId.
</h2>
<p>The first paragraph is underlined. All the paragraphs are 1.1rem.</p>
<p>
  The second paragraph is red. This and the following paragraphs are italic.
</p>
<p>The third paragraph is NOT red. It is italic and 1.1rem.</p>
<p class="myClass">
  Does not have an outline; this is a sibling of H2, not a child. It is italic
  and 1.1rem.
</p>
```

#### Ergebnis

{{EmbedLiveSample("Combinators", "100%", 500)}}

### Erstellen komplexer Selektoren mit CSS-Nesting

Die oben genannten komplexen Selektoren können auch mit einfachen Selektoren, Kombinatoren und [CSS-Nesting](/de/docs/Web/CSS/CSS_nesting) definiert werden, mit oder ohne den [`&` Verschachtelungsselektor](/de/docs/Web/CSS/Nesting_selector).

#### CSS

In diesem Beispiel replizieren wir dieselben fünf relativen Selektoren, indem wir einfache Selektoren mit Kombinatoren kombinieren, diesmal jedoch mit CSS-Nesting.

```css
h2 {
  & + p {
    & ~ p {
      font-style: italic;
    }
    & + p {
      color: red;
    }
  }
}
.myClass {
  & + p {
    text-decoration: underline;
  }
}
#myId {
  & > .myClass {
    outline: 3px dashed red;
  }
}
* {
  & > p {
    font-size: 1.1rem;
  }
}
```

#### HTML

```html
<h2 class="myClass" id="myId">
  No selectors match. <span class="myClass">This span has an outline</span> as
  it is both myClass and a child of #myId.
</h2>
<p>The first paragraph is underlined. All the paragraphs are 1.1rem.</p>
<p>
  The second paragraph is red. This and the following paragraphs are italic.
</p>
<p>The third paragraph is NOT red. It is italic and 1.1rem.</p>
<p class="myClass">
  Does not have an outline; this is a sibling of H2, not a child. It is italic
  and 1.1rem.
</p>
```

#### Ergebnis

{{EmbedLiveSample("creating_complex_selectors_with_css_nesting", "100%", 300)}}

## Attributselektoren

[Attributselektoren](/de/docs/Web/CSS/Attribute_selectors) wählen alle Elemente aus, die je nachdem, wie der Selektor geschrieben ist, entweder das angegebene Attribut haben oder das angegebene Attribut mit einer Teilzeichenfolgenwert-Übereinstimmung haben.
Zum Beispiel wird `[type]` alle Elemente auswählen, die das `type`-Attribut gesetzt haben (auf jeden beliebigen Wert), und `[type="submit"]` wird `<input type="submit">` und `<button type="submit">` auswählen, oder jedes Element mit `type="submit"` gesetzt, auch wenn dieses Attribut-Wert-Paar nur auf {{HTMLElement("input")}} und {{HTMLElement("button")}}-Elementen unterstützt wird. Die Übereinstimmung ist groß-/kleinschreibungsunabhängig.

Die Groß-/Kleinschreibung des Attributs hängt von der Sprache ab. Generell ist in HTML, wenn ein Attribut {{glossary("enumerated")}} ist, der Wert im Selektor groß-/kleinschreibungsunabhängig, selbst wenn der Wert keiner der aufgezählten Werte ist oder wenn das Attribut kein gültiger Wert für das Element ist, auf dem es gesetzt ist. Für nicht-aufzählbare Attribute, wie `class`, `id` oder jedes `data-*` Attribut, oder für nicht-HTML Attribute, wie `role` oder `aria-*` Attribute, ist die Wertübereinstimmung groß-/kleinschreibungsempfindlich; die Übereinstimmung kann mit einem groß-/kleinschreibungsunabhängigen Modifikator (`i`) groß-/kleinschreibungsunabhängig gemacht werden.

## Pseudo-Klassenselektoren

Das [CSS-Selektoren](/de/docs/Web/CSS/CSS_selectors)-Modul definiert über 60 [Pseudoklassen](/de/docs/Web/CSS/Pseudo-classes). Pseudoklassen sind [einfache Selektoren](/de/docs/Web/CSS/CSS_selectors/Selector_structure#simple_selector), die mit einem Doppelpunkt (`:`) versehen sind und die Auswahl von Elementen basierend auf Zustandsinformationen ermöglichen, die nicht im Dokumentbaum enthalten sind. {{CSSxRef("pseudo-classes")}} können verwendet werden, um ein Element basierend auf seinem _Zustand_ zu stylen.
Zum Beispiel zielt der einfache Selektor {{cssxref(":target")}} auf ein Element mit einer URL, die einen Fragmentbezeichner enthält, und der [`a:visited`](/de/docs/Web/CSS/:visited) [zusammengesetzte Selektor](/de/docs/Web/CSS/CSS_selectors/Selector_structure#compound_selector) wählt alle {{HTMLElement("a")}}-Elemente aus, die von einem Benutzer besucht wurden.

Die Pseudoklassen können in Kategorien wie [Anzeigestatus des Elements](/de/docs/Web/CSS/Pseudo-classes#element_display_state_pseudo-classes), [Eingabe](/de/docs/Web/CSS/Pseudo-classes#input_pseudo-classes), [sprachlich](/de/docs/Web/CSS/Pseudo-classes#linguistic_pseudo-classes), [Ort](/de/docs/Web/CSS/Pseudo-classes#location_pseudo-classes), [Ressourcenzustand](/de/docs/Web/CSS/Pseudo-classes#resource_state_pseudo-classes), [zeitdimensionell](/de/docs/Web/CSS/Pseudo-classes#time-dimensional_pseudo-classes), [Baum-Struktural](/de/docs/Web/CSS/Pseudo-classes#tree-structural_pseudo-classes), [Benutzeraktion](/de/docs/Web/CSS/Pseudo-classes#user_action_pseudo-classes) und [funktional](/de/docs/Web/CSS/Pseudo-classes#functional_pseudo-classes) unterteilt werden.

Mehrere Pseudoklassen können kombiniert werden, um [zusammengesetzte Selektoren](/de/docs/Web/CSS/CSS_selectors/Selector_structure#compound_selector) zu erstellen. Wenn eine Pseudoklasse zu einem zusammengesetzten Selektor mit einem Typ- oder universellen Selektor kombiniert wird, muss die Pseudoklasse dem Typselektor oder universellen Selektor folgen, falls vorhanden.

## Pseudo-Element-Selektoren

Nicht alle CSS-Selektoren sind im [CSS-Selektorenmodul](/de/docs/Web/CSS) definiert. CSS-Pseudoelement-Selektoren sind im [CSS-Pseudo-Elemente](/de/docs/Web/CSS/CSS_pseudo-elements)-Modul definiert.

CSS-[Pseudoelemente](/de/docs/Web/CSS/Pseudo-elements), die mit zwei Doppelpunkten (`::`) versehen sind, repräsentieren Entitäten, die nicht in HTML enthalten sind. Zum Beispiel wählt der einfache {{cssxref("::marker")}}-Selektor Aufzählungszeichen von Listenelementen, und der zusammengesetzte Selektor [`p::first-line`](/de/docs/Web/CSS/::first-line) wählt die erste Zeile aller {{HTMLElement("p")}}-Elemente.

## Spezifikationen

{{Specifications}}

Siehe die Spezifikationstabellen für [Pseudoklassen](/de/docs/Web/CSS/Pseudo-classes#specifications) und [Pseudo-Elemente](/de/docs/Web/CSS/Pseudo-elements#specifications) für Details dazu.

## Siehe auch

- [Selektorenliste](/de/docs/Web/CSS/Selector_list)
- [CSS-Selektorstruktur](/de/docs/Web/CSS/CSS_selectors/Selector_structure)
- [Spezifität](/de/docs/Web/CSS/Specificity)
- [CSS-Nesting-Modul](/de/docs/Web/CSS/CSS_nesting)
