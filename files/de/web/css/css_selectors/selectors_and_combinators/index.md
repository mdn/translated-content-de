---
title: CSS-Selektoren und Kombinatoren
slug: Web/CSS/CSS_selectors/Selectors_and_combinators
l10n:
  sourceCommit: 181d86f26c188f8eb0b8a0d7c30efff7997bc20e
---

{{CSSRef}}

CSS-Selektoren werden verwendet, um ein Muster der Elemente zu definieren, die Sie auswählen möchten, um eine Reihe von CSS-Regeln auf die ausgewählten Elemente anzuwenden. Kombinatoren definieren die Beziehung zwischen den Selektoren. Mit verschiedenen Selektoren und Kombinatoren können Sie die gewünschten Elemente präzise auswählen und stylen, basierend auf ihrem Typ, ihren Attributen, ihrem Zustand oder ihrer Beziehung zu anderen Elementen.

## Arten von Selektoren

Es gibt über 80 Selektoren und Kombinatoren. CSS-Selektoren können basierend auf dem Typ der Elemente, die sie auswählen können, in folgende Kategorien gruppiert werden.

### Grundlegende Selektoren

Der [Typsselektor](/de/docs/Web/CSS/Type_selectors) wählt alle Elemente aus, die den angegebenen Knotennamen haben. Beispielsweise wird `div` alle {{HTMLElement("div")}}-Elemente auswählen und `input` wird jedes {{HTMLElement("input")}}-Element auswählen. Der [universelle Selektor](/de/docs/Web/CSS/Universal_selectors), dargestellt durch ein Sternchen (`*`), ist ein spezieller Typsselektor, der alle Elemente auswählt.

Der [Klassenselektor](/de/docs/Web/CSS/Class_selectors) wählt alle Elemente aus, die das angegebene `class`-Attribut haben, gekennzeichnet durch den Klassennamen, der mit einem Punkt (`.`) vorangestellt ist. Zum Beispiel wird `.index` jedes Element auswählen, das `class="index"` hat. Der [ID-Selektor](/de/docs/Web/CSS/ID_selectors) wählt ein Element basierend auf dem Wert seines `id`-Attributs aus. Der Selektor ist die `id`, die durch ein "Nummernzeichen" (U+0023, `#`) vorangestellt ist. Zum Beispiel wird `#toc` das Element auswählen, das `id="toc"` hat. Sowohl [`class`](/de/docs/Web/HTML/Global_attributes/class) als auch [`id`](/de/docs/Web/HTML/Global_attributes/id) sind globale Attribute. Es sollte nur ein Element mit einer bestimmten `id` in einem Dokument geben; gibt es jedoch mehr als eines, wird der ID-Selektor alle Elemente mit dieser `id` auswählen.

Bei der Kombination eines Typen- oder universellen Selektors mit einem Klassen- oder ID-Selektor zur Erstellung eines [zusammengesetzten Selektors](/de/docs/Web/CSS/CSS_selectors/Selector_structure#compound_selector) muss der Typen- oder universelle Selektor dem Klassen- oder ID-Selektor vorangestellt sein.

#### CSS

In diesem Beispiel deklarieren wir vier [einfache Selektoren](/de/docs/Web/CSS/CSS_selectors/Selector_structure#simple_selector) und einen [zusammengesetzten Selektor](/de/docs/Web/CSS/CSS_selectors/Selector_structure#compound_selector) mithilfe der vier grundlegenden Selektortypen, wie oben beschrieben.

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

Mithilfe von CSS-Kombinatoren können wir Selektoren kombinieren, um DOM-Knoten basierend auf ihrer Beziehung zu anderen Elementen innerhalb des Dokumentknotenbaums auszuwählen. Diese Kombination von Selektoren mit Kombinatoren erzeugt [komplexe Selektoren](/de/docs/Web/CSS/CSS_selectors/Selector_structure#complex_selector).

### Nachfahrkombinator

Der [Nachfahrkombinator](/de/docs/Web/CSS/Descendant_combinator), dargestellt mit einem oder mehreren Leerzeichen, wählt Knoten aus, die Nachfahren des ersten Elements sind. Zum Beispiel wird `div span` alle {{HTMLElement("span")}}-Elemente auswählen, die sich innerhalb eines {{HTMLElement("div")}}-Elements befinden.

### Kindkombinator

Der [Kindkombinator](/de/docs/Web/CSS/Child_combinator) ist spezifischer als der Nachfahrkombinator. Dargestellt mit dem Größer-als-Zeichen (`>`), wählt der Kindkombinator Knoten aus, die direkte Kinder des ersten Elements sind. Im Vergleich zu unserem vorherigen Beispiel wird `div > span` nur die {{HTMLElement("span")}}-Elemente auswählen, die direkte Kinder eines {{HTMLElement("div")}}-Elements sind.

### Nachfolgender-Geschwisterkombinator

Zusätzlich zu Nachfahrselektoren ermöglicht CSS auch die Auswahl von Elementen basierend auf ihren Geschwistern. Der [Nachfolgender-Geschwisterkombinator](/de/docs/Web/CSS/Subsequent-sibling_combinator), dargestellt mit einer Tilde (`~`), wählt Geschwister aus. Gegeben `A ~ B`, werden alle Elemente, die `B` entsprechen, ausgewählt, wenn sie von `A` vorausgegangen werden, vorausgesetzt, dass sowohl `A` als auch `B` denselben Elternteil haben. Zum Beispiel wird `h2 ~ p` alle {{HTMLElement("p")}}-Elemente auswählen, die einem {{HTMLElement("Heading_Elements", "h2")}} folgen, unmittelbar oder nicht.

### Nächster-Geschwisterkombinator

Der [Nächster-Geschwisterkombinator](/de/docs/Web/CSS/Next-sibling_combinator), dargestellt durch das Plus-Symbol (`+`), ist dem nachfolgenden Geschwister ähnlich. Allerdings stimmt es nur `B` zu, wenn `B` unmittelbar von `A` vorausgegangen wird, wobei beide denselben Elternteil teilen. Unser vorheriges Beispiel ergänzend, wird `h2 + p` nur das eine `<p>`-Element auswählen, das _unmittelbar_ einem `<h2>`-Element folgt.

### Spaltenkombinator

Es gibt auch einen [Spaltenkombinator](/de/docs/Web/CSS/Column_combinator), dargestellt durch zwei senkrechte Striche (`||`), der, wenn unterstützt, Knoten auswählt, die zu einer Spalte gehören. Zum Beispiel wird `col || td` alle {{HTMLElement("td")}}-Elemente auswählen, die zum Geltungsbereich von {{HTMLElement("col")}} gehören.

### Namespace-Trennzeichen

Der [Namespace-Trennzeichen](/de/docs/Web/CSS/Namespace_separator) ist ein weiterer Kombinator, der allgemein in Verbindung mit der {{CSSXref("@namespace")}}-At-Regel verwendet wird. Dieser Kombinator wird durch ein einzelnes Rohrzeichen (`|`) dargestellt. Er ermöglicht es, [Typen-Selektoren](/de/docs/Web/CSS/Type_selectors) und den [universellen Selektor](/de/docs/Web/CSS/Universal_selectors) auf einen bestimmten Namespace zu beschränken. Zum Beispiel, indem ein Namespace wie `@namespace SVG url('http://www.w3.org/2000/svg');` definiert wird, können Sie Selektoren einfügen, die nur auf Elemente zielen, die in einem SVG-Namespace verschachtelt sind. Die Deklaration `SVG|a` würde Links innerhalb von SVGs treffen und nicht diejenigen im Rest des Dokuments. Das Verwenden von Namespaces kann nützlich sein, um MathML, SVG oder andere auf XML basierende Inhalte innerhalb Ihres HTMLs anzusprechen.

#### CSS

In diesem Beispiel deklarieren wir fünf [relative Selektoren](/de/docs/Web/CSS/CSS_selectors/Selector_structure#relative_selector), indem wir [einfache Selektoren](/de/docs/Web/CSS/CSS_selectors/Selector_structure#simple_selector) mit Kombinatoren kombinieren.

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

### Erstellen komplexer Selektoren mit CSS-Verschachtelung

Die oben genannten komplexen Selektoren können ebenfalls mit einfachen Selektoren, Kombinatoren und [CSS-Verschachtelung](/de/docs/Web/CSS/CSS_nesting) mit oder ohne den [`&`-Verschachtelungsselektor](/de/docs/Web/CSS/Nesting_selector) definiert werden.

#### CSS

In diesem Beispiel replizieren wir dieselben fünf relativen Selektoren mit einfachen Selektoren kombiniert mit Kombinatoren, diesmal jedoch mit CSS-Verschachtelung.

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

[Attributselektoren](/de/docs/Web/CSS/Attribute_selectors) wählen alle Elemente aus, die je nach Schreibweise des Selektors entweder das angegebene Attribut haben oder dieses Attribut mit einem Teilzeichenfolgenwert haben.
Zum Beispiel wird `[type]` alle Elemente auswählen, die das `type`-Attribut (auf irgendeinen Wert) gesetzt haben, und `[type="submit"]` wird `<input type="submit">` und `<button type="submit">` sowie jedes Element mit `type="submit"` auswählen, auch wenn dieses Attribut-Wert-Paar nur auf {{HTMLElement("input")}} und {{HTMLElement("button")}}-Elementen unterstützt wird. Der Vergleich ist nicht fallunterscheidend.

Die Groß-/Kleinschreibungsempfindlichkeit des Attributs hängt von der Sprache ab. Im Allgemeinen ist in HTML, wenn ein Attribut [aufgezählt](/de/docs/Glossary/enumerated) ist, der Wert im Selektor nicht fallunterscheidend, auch wenn der Wert nicht einer der aufgezählten Werte ist oder wenn das Attribut kein gültiger Wert für das Element ist, auf dem es gesetzt ist. Für nicht aufgezählte Attribute wie `class`, `id` oder beliebige `data-*`-Attribute oder für Nicht-HTML-Attribute wie `role` oder `aria-*`-Attribute ist der Wertvergleich fallunterscheidend; der Vergleich kann durch einen Fallunterscheidungs-Modifikator (`i`) nicht fallunterscheidend erfolgen.

## Pseudo-Klassen-Selektoren

Das [CSS-Selektoren](/de/docs/Web/CSS/CSS_selectors)-Modul definiert über 60 [Pseudo-Klassen](/de/docs/Web/CSS/Pseudo-classes). Pseudo-Klassen sind [einfache Selektoren](/de/docs/Web/CSS/CSS_selectors/Selector_structure#simple_selector), die mit einem Doppelpunkt (`:`) präfixiert sind und die Auswahl von Elementen basierend auf Zustandsinformationen ermöglichen, die nicht im Dokumentenbaum enthalten sind. {{CSSxRef("pseudo-classes")}} können verwendet werden, um ein Element basierend auf seinem _Zustand_ zu stylen.
Zum Beispiel zielt der einfache {{cssxref(":target")}}-Selektor auf Elemente einer URL mit einem Fragmentbezeichner ab, und der [`a:visited`](/de/docs/Web/CSS/:visited) [zusammengesetzter Selektor](/de/docs/Web/CSS/CSS_selectors/Selector_structure#compound_selector) trifft auf alle {{HTMLElement("a")}}-Elemente, die von einem Benutzer besucht wurden.

Die Pseudo-Klassen können als [Anzeigestatus des Elements](/de/docs/Web/CSS/Pseudo-classes#element_display_state_pseudo-classes), [Eingabe](/de/docs/Web/CSS/Pseudo-classes#input_pseudo-classes), [linguistisch](/de/docs/Web/CSS/Pseudo-classes#linguistic_pseudo-classes), [Ort](/de/docs/Web/CSS/Pseudo-classes#location_pseudo-classes), [Ressourcenzustand](/de/docs/Web/CSS/Pseudo-classes#resource_state_pseudo-classes), [zeitdimensional](/de/docs/Web/CSS/Pseudo-classes#time-dimensional_pseudo-classes), [baumstrukturell](/de/docs/Web/CSS/Pseudo-classes#tree-structural_pseudo-classes), [Benutzeraktion](/de/docs/Web/CSS/Pseudo-classes#user_action_pseudo-classes) und [funktional](/de/docs/Web/CSS/Pseudo-classes#functional_pseudo-classes) kategorisiert werden.

Mehrere Pseudo-Klassen können kombiniert werden, um [zusammengesetzte Selektoren](/de/docs/Web/CSS/CSS_selectors/Selector_structure#compound_selector) zu erstellen. Beim Kombinieren einer Pseudo-Klasse in einen zusammengesetzten Selektor mit einem Typen- oder universellen Selektor muss die Pseudo-Klasse dem Typen- oder universellen Selektor folgen, falls vorhanden.

## Pseudo-Element-Selektoren

Nicht alle CSS-Selektoren sind im [CSS-Selektoren-Modul](/de/docs/Web/CSS) definiert. CSS-Pseudo-Element-Selektoren sind im [CSS-Pseudo-Elemente](/de/docs/Web/CSS/CSS_pseudo-elements) Modul definiert.

CSS-[Pseudo-Elemente](/de/docs/Web/CSS/Pseudo-elements), mit zwei Doppelpunkten (`::`) präfixiert, repräsentieren Entitäten, die nicht in HTML enthalten sind. Zum Beispiel wählt der einfache {{cssxref("::marker")}}-Selektor Aufzählungszeichen von Listenelementen aus, und der zusammengesetzte Selektor [`p::first-line`](/de/docs/Web/CSS/::first-line) trifft auf die erste Zeile aller {{HTMLElement("p")}}-Elemente.

## Spezifikationen

{{Specifications}}

Sehen Sie sich die Spezifikationstabellen zu [Pseudo-Klassen](/de/docs/Web/CSS/Pseudo-classes#specifications) und [Pseudo-Elementen](/de/docs/Web/CSS/Pseudo-elements#specifications) für Details an.

## Siehe auch

- [Selektorenliste](/de/docs/Web/CSS/Selector_list)
- [CSS-Selektorenstruktur](/de/docs/Web/CSS/CSS_selectors/Selector_structure)
- [Spezifität](/de/docs/Web/CSS/Specificity)
- [CSS-Verschachtelungsmodul](/de/docs/Web/CSS/CSS_nesting)
