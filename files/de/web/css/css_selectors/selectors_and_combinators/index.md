---
title: CSS-Selektoren und Kombinatoren
slug: Web/CSS/CSS_selectors/Selectors_and_combinators
l10n:
  sourceCommit: 181d86f26c188f8eb0b8a0d7c30efff7997bc20e
---

{{CSSRef}}

CSS-Selektoren werden verwendet, um ein Muster der Elemente zu definieren, die Sie auswählen möchten, um eine Reihe von CSS-Regeln auf die ausgewählten Elemente anzuwenden. Kombinatoren definieren die Beziehung zwischen den Selektoren. Durch die Verwendung verschiedener Selektoren und Kombinatoren können Sie die gewünschten Elemente präzise auswählen und stylen, basierend auf ihrem Typ, ihren Attributen, ihrem Zustand oder ihrer Beziehung zu anderen Elementen.

## Arten von Selektoren

Es gibt über 80 Selektoren und Kombinatoren. CSS-Selektoren können basierend auf dem Typ der Elemente, die sie auswählen können, in die folgenden Kategorien gruppiert werden.

### Grundlegende Selektoren

Der [Typ-Selektor](/de/docs/Web/CSS/Type_selectors) wählt alle Elemente aus, die den angegebenen Knotennamen haben. Zum Beispiel wird `div` alle {{HTMLElement("div")}}-Elemente auswählen und `input` wird jedes {{HTMLElement("input")}}-Element treffen. Der [Universalselektor](/de/docs/Web/CSS/Universal_selectors), dargestellt durch ein Sternchen (`*`), ist ein spezieller Typ-Selektor, der alle Elemente auswählt.

Der [Klassenselektor](/de/docs/Web/CSS/Class_selectors) wählt alle Elemente aus, die das angegebene `class`-Attribut haben, das durch den Klassennamen, vorangestellt mit einem Punkt (`.`), angegeben wird. Zum Beispiel wird `.index` jedes Element treffen, das `class="index"` hat. Der [ID-Selektor](/de/docs/Web/CSS/ID_selectors) wählt ein Element basierend auf dem Wert seines `id`-Attributs aus. Der Selektor ist die `id`, vorangestellt mit einem "Nummernzeichen" (U+0023, `#`). Zum Beispiel wird `#toc` das Element treffen, das `id="toc"` hat. Sowohl [`class`](/de/docs/Web/HTML/Global_attributes/class) als auch [`id`](/de/docs/Web/HTML/Global_attributes/id) sind globale Attribute. Es sollte nur ein Element mit einer gegebenen `id` in einem Dokument geben; aber wenn es mehr als eines gibt, wird der ID-Selektor alle Elemente mit dieser `id` treffen.

Wenn ein Typ- oder Universalselektor mit einem Klassen- oder ID-Selektor kombiniert wird, um einen [zusammengesetzten Selektor](/de/docs/Web/CSS/CSS_selectors/Selector_structure#compound_selector) zu erstellen, muss der Typ- oder Universalselektor dem Klassen- oder ID-Selektor vorangehen.

#### CSS

In diesem Beispiel deklarieren wir vier [einfache Selektoren](/de/docs/Web/CSS/CSS_selectors/Selector_structure#simple_selector) und einen [zusammengesetzten Selektor](/de/docs/Web/CSS/CSS_selectors/Selector_structure#compound_selector) mit den vier grundlegenden Selektortypen wie oben beschrieben.

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

Mit CSS-Kombinatoren können wir Selektoren kombinieren, um DOM-Knoten basierend auf ihrer Beziehung zu anderen Elementen innerhalb des Dokumentknotenbaums auszuwählen. Dieses Kombinieren von Selektoren mit Kombinatoren erzeugt [komplexe Selektoren](/de/docs/Web/CSS/CSS_selectors/Selector_structure#complex_selector).

### Nachfahrkombinator

Der [Nachfahrkombinator](/de/docs/Web/CSS/Descendant_combinator), dargestellt durch ein oder mehrere Leerzeichen, wählt Knoten aus, die Nachfahren des ersten Elements sind. Zum Beispiel wird `div span` alle {{HTMLElement("span")}}-Elemente treffen, die innerhalb eines {{HTMLElement("div")}}-Elements sind.

### Kindkombinator

Der [Kindkombinator](/de/docs/Web/CSS/Child_combinator) ist spezifischer als der Nachfahrkombinator. Dargestellt durch das Größer-als-Zeichen (`>`), wählt der Kindkombinator Knoten aus, die direkte Kinder des ersten Elements sind. Im Vergleich zu unserem vorherigen Beispiel wird `div > span` nur die {{HTMLElement("span")}}-Elemente auswählen, die direkte Kinder eines {{HTMLElement("div")}}-Elements sind.

### Geschwisterkombinator

Zusätzlich zu Nachfahrselektoren ermöglicht CSS auch die Auswahl von Elementen basierend auf ihren Geschwistern. Der [nachfolgende Geschwisterkombinator](/de/docs/Web/CSS/Subsequent-sibling_combinator), dargestellt durch eine Tilde (`~`), wählt Geschwister aus. Angenommen `A ~ B`, werden alle Elemente, die `B` entsprechen, ausgewählt, wenn sie von `A` vorausgegangen werden, vorausgesetzt, sowohl `A` als auch `B` teilen denselben übergeordneten Knoten. Zum Beispiel wird `h2 ~ p` alle {{HTMLElement("p")}}-Elemente treffen, die auf ein {{HTMLElement("Heading_Elements", "h2")}} folgen, unmittelbar oder nicht.

### Nachfolgender Geschwisterkombinator

Der [nachfolgende Geschwisterkombinator](/de/docs/Web/CSS/Next-sibling_combinator), dargestellt durch das Pluszeichen (`+`), ist ähnlich wie der nachfolgende Geschwisterkombinator. Jedoch, angenommen `A + B`, wird es nur `B` treffen, wenn `B` unmittelbar von `A` vorausgegangen wird, wobei beide denselben übergeordneten Knoten teilen. Ergänzend zu unserem vorherigen Beispiel wird `h2 + p` nur das einzelne `<p>`-Element treffen, das _unmittelbar_ auf ein `<h2>`-Element folgt.

### Spaltenkombinator

Es gibt auch einen [Spaltenkombinator](/de/docs/Web/CSS/Column_combinator), dargestellt durch zwei senkrechte Striche (`||`), der, wenn unterstützt, Knoten auswählt, die zu einer Spalte gehören. Zum Beispiel wird `col || td` alle {{HTMLElement("td")}}-Elemente treffen, die zum Bereich der {{HTMLElement("col")}} gehören.

### Namespace-Trenner

Der [Namespace-Trenner](/de/docs/Web/CSS/Namespace_separator) ist ein weiterer Kombinator, der in der Regel zusammen mit der {{CSSXref("@namespace")}}-Regel verwendet wird. Dieser Kombinator wird durch ein einzelnes senkrechtes Zeichen (`|`) dargestellt. Er ermöglicht es, [Typ-Selektoren](/de/docs/Web/CSS/Type_selectors) und den [Universalselektor](/de/docs/Web/CSS/Universal_selectors) auf einen bestimmten Namespace zu beschränken. Zum Beispiel könnte durch die Definition eines Namespace wie `@namespace SVG url('http://www.w3.org/2000/svg');` ein Selektor enthalten sein, der nur auf Elemente abzielt, die in einem SVG-Namespace verschachtelt sind. Die Deklaration `SVG|a` würde Links innerhalb von SVGs und nicht in anderen Teilen des Dokuments treffen. Namespacing kann nützlich sein, um MathML-, SVG- oder andere XML-basierte Inhalte innerhalb Ihres HTML zu adressieren.

#### CSS

In diesem Beispiel deklarieren wir fünf [relative Selektoren](/de/docs/Web/CSS/CSS_selectors/Selector_structure#relative_selector) mit [einfachen Selektoren](/de/docs/Web/CSS/CSS_selectors/Selector_structure#simple_selector), die mit Kombinatoren kombiniert werden.

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

Die oben genannten komplexen Selektoren können auch mit einfachen Selektoren, Kombinatoren und [CSS-Verschachtelung](/de/docs/Web/CSS/CSS_nesting) definiert werden, mit oder ohne den [`&` Verschachtelungsselektor](/de/docs/Web/CSS/Nesting_selector).

#### CSS

In diesem Beispiel replizieren wir dieselben fünf relativen Selektoren mit einfachen Selektoren kombiniert mit Kombinatoren, diesmal aber mit CSS-Verschachtelung.

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

[Attributselektoren](/de/docs/Web/CSS/Attribute_selectors) wählen alle Elemente aus, die je nachdem, wie der Selektor geschrieben ist, entweder das gegebene Attribut haben oder das gegebene Attribut mit einem Teilstring-Wertübereinstimmung. Zum Beispiel wird `[type]` alle Elemente auswählen, die das `type`-Attribut gesetzt haben (auf jeden Wert), und `[type="submit"]` wird `<input type="submit">` und `<button type="submit">` treffen oder jedes Element mit `type="submit"` gesetzt, auch wenn dieses Attribut-Wert-Paar nur auf {{HTMLElement("input")}}- und {{HTMLElement("button")}}-Elementen unterstützt wird. Die Übereinstimmung ist nicht case-sensitiv.

Die Groß-/Kleinschreibung des Attributs hängt von der Sprache ab. Im Allgemeinen, in HTML, wenn ein Attribut {{Glossary("enumerated", "aufgezählt")}} ist, ist der Wert im Selektor nicht case-sensitiv, selbst wenn der Wert nicht einer der aufgezählten Werte ist oder wenn das Attribut kein gültiger Wert für das Element ist, auf dem es gesetzt ist. Für nicht aufgezählte Attribute wie `class`, `id` oder jedes `data-*`-Attribut oder für nicht-HTML-Attribute wie `role` oder `aria-*`-Attribute, ist die Wertübereinstimmung case-sensitiv; die Übereinstimmung kann mit einem nicht case-sensitiven Modifikator (`i`) nicht case-sensitiv gemacht werden.

## Pseudo-Klassen-Selektoren

Das [CSS-Selektoren](/de/docs/Web/CSS/CSS_selectors)-Modul definiert über 60 [Pseudo-Klassen](/de/docs/Web/CSS/Pseudo-classes). Pseudo-Klassen sind [einfache Selektoren](/de/docs/Web/CSS/CSS_selectors/Selector_structure#simple_selector), vorangestellt mit einem Doppelpunkt (`:`), die es ermöglichen, Elemente basierend auf Zustandsinformationen auszuwählen, die nicht im Dokumentenbaum enthalten sind. {{CSSxRef("pseudo-classes")}} können verwendet werden, um ein Element basierend auf seinem _Zustand_ zu stylen. Zum Beispiel zielt der {{cssxref(":target")}} einfache Selektor auf ein Element eines URLs mit einem Fragmentidentifier, und der [`a:visited`](/de/docs/Web/CSS/:visited) [zusammengesetzte Selektor](/de/docs/Web/CSS/CSS_selectors/Selector_structure#compound_selector) trifft alle {{HTMLElement("a")}}-Elemente, die von einem Benutzer besucht wurden.

Die Pseudo-Klassen können als [Anzeigezustand eines Elements](/de/docs/Web/CSS/Pseudo-classes#element_display_state_pseudo-classes), [Eingabe](/de/docs/Web/CSS/Pseudo-classes#input_pseudo-classes), [sprachlich](/de/docs/Web/CSS/Pseudo-classes#linguistic_pseudo-classes), [Standort](/de/docs/Web/CSS/Pseudo-classes#location_pseudo-classes), [Ressourcenzustand](/de/docs/Web/CSS/Pseudo-classes#resource_state_pseudo-classes), [zeitdimensionale](/de/docs/Web/CSS/Pseudo-classes#time-dimensional_pseudo-classes), [Baumstruktur](/de/docs/Web/CSS/Pseudo-classes#tree-structural_pseudo-classes), [Benutzeraktion](/de/docs/Web/CSS/Pseudo-classes#user_action_pseudo-classes) und [funktional](/de/docs/Web/CSS/Pseudo-classes#functional_pseudo-classes) kategorisiert werden.

Mehrere Pseudo-Klassen können kombiniert werden, um [zusammengesetzte Selektoren](/de/docs/Web/CSS/CSS_selectors/Selector_structure#compound_selector) zu erstellen. Wenn eine Pseudo-Klasse mit einem Typ- oder Universalselektor in einem zusammengesetzten Selektor kombiniert wird, muss die Pseudo-Klasse dem Typ- oder Universalselektor folgen, falls vorhanden.

## Pseudo-Element-Selektoren

Nicht alle CSS-Selektoren sind im [CSS-Selektorenmodul](/de/docs/Web/CSS) definiert. CSS-Pseudo-Element-Selektoren werden im [CSS-Pseudo-Elemente](/de/docs/Web/CSS/CSS_pseudo-elements)-Modul definiert.

CSS [Pseudo-Elemente](/de/docs/Web/CSS/Pseudo-elements), vorangestellt mit zwei Doppelpunkten (`::`), repräsentieren Entitäten, die nicht in HTML enthalten sind. Zum Beispiel wählt der einfache {{cssxref("::marker")}}-Selektor Aufzählungszeichen von Listenelementen aus, und der zusammengesetzte Selektor [`p::first-line`](/de/docs/Web/CSS/::first-line) trifft die erste Zeile aller {{HTMLElement("p")}}-Elemente.

## Spezifikationen

{{Specifications}}

Weitere Details zu diesen finden Sie in den Spezifikationstabellen für [Pseudo-Klassen](/de/docs/Web/CSS/Pseudo-classes#specifications) und [Pseudo-Elemente](/de/docs/Web/CSS/Pseudo-elements#specifications).

## Siehe auch

- [Selektorliste](/de/docs/Web/CSS/Selector_list)
- [Struktur von CSS-Selektoren](/de/docs/Web/CSS/CSS_selectors/Selector_structure)
- [Spezifität](/de/docs/Web/CSS/Specificity)
- [CSS-Verschachtelungsmodul](/de/docs/Web/CSS/CSS_nesting)
