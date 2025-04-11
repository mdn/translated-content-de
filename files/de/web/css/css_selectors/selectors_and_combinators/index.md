---
title: CSS-Selektoren und Kombinatoren
slug: Web/CSS/CSS_selectors/Selectors_and_combinators
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{CSSRef}}

CSS-Selektoren werden verwendet, um ein Muster von Elementen zu definieren, die Sie auswählen möchten, um einen Satz von CSS-Regeln auf die ausgewählten Elemente anzuwenden. Kombinatoren definieren die Beziehung zwischen den Selektoren. Mit verschiedenen Selektoren und Kombinatoren können Sie die gewünschten Elemente präzise auswählen und stylen, basierend auf ihrem Typ, ihren Attributen, ihrem Zustand oder ihrer Beziehung zu anderen Elementen.

## Arten von Selektoren

Es gibt über 80 Selektoren und Kombinatoren. CSS-Selektoren können in die folgenden Kategorien gruppiert werden, basierend auf der Art der Elemente, die sie auswählen können.

### Basis-Selektoren

Der [Typ-Selektor](/de/docs/Web/CSS/Type_selectors) wählt alle Elemente aus, die den angegebenen Knotennamen haben. Zum Beispiel wählt `div` alle {{HTMLElement("div")}}-Elemente aus und `input` wird mit jedem {{HTMLElement("input")}}-Element übereinstimmen. Der [Universal-Selektor](/de/docs/Web/CSS/Universal_selectors), der mit einem Sternchen (`*`) bezeichnet wird, ist ein spezieller Typ-Selektor, der alle Elemente auswählt.

Der [Klassen-Selektor](/de/docs/Web/CSS/Class_selectors) wählt alle Elemente aus, die das angegebene `class`-Attribut haben, das durch den Klassennamen gekennzeichnet ist, der mit einem Punkt (`.`) vorangestellt ist. Zum Beispiel wird `.index` mit jedem Element übereinstimmen, das `class="index"` hat. Der [ID-Selektor](/de/docs/Web/CSS/ID_selectors) wählt ein Element basierend auf dem Wert seines `id`-Attributs aus. Der Selektor ist die `id`, die mit einem „Nummernzeichen“ (U+0023, `#`) vorangestellt ist. Zum Beispiel wird `#toc` mit dem Element übereinstimmen, das `id="toc"` hat. Sowohl [`class`](/de/docs/Web/HTML/Reference/Global_attributes/class) als auch [`id`](/de/docs/Web/HTML/Reference/Global_attributes/id) sind globale Attribute. Es sollte nur ein Element mit einer bestimmten `id` in einem Dokument geben; falls es mehr als eines gibt, wird der ID-Selektor alle Elemente mit dieser `id` entdecken.

Wenn ein Typ- oder Universal-Selektor mit einem Klassen- oder ID-Selektor kombiniert wird, um einen [zusammengesetzten Selektor](/de/docs/Web/CSS/CSS_selectors/Selector_structure#compound_selector) zu erstellen, muss der Typ- oder Universal-Selektor dem Klassen- oder ID-Selektor vorausgehen.

#### CSS

In diesem Beispiel deklarieren wir vier [einfache Selektoren](/de/docs/Web/CSS/CSS_selectors/Selector_structure#simple_selector) und einen [zusammengesetzten Selektor](/de/docs/Web/CSS/CSS_selectors/Selector_structure#compound_selector), indem wir die vier grundlegenden Selektortypen verwenden, wie oben beschrieben.

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

Mit CSS-Kombinatoren können wir Selektoren kombinieren, um DOM-Knoten basierend auf ihrer Beziehung zu anderen Elementen innerhalb der Dokument-Knotenstruktur auszuwählen. Dieses Kombinieren von Selektoren mit Kombinatoren erstellt [komplexe Selektoren](/de/docs/Web/CSS/CSS_selectors/Selector_structure#complex_selector).

### Nachfahren-Kombinator

Der [Nachfahren-Kombinator](/de/docs/Web/CSS/Descendant_combinator), der durch ein oder mehrere Leerzeichen bezeichnet wird, wählt Knoten aus, die Nachkommen des ersten Elements sind. Zum Beispiel wird `div span` alle {{HTMLElement("span")}}-Elemente auswählen, die sich innerhalb eines {{HTMLElement("div")}}-Elements befinden.

### Kind-Kombinator

Der [Kind-Kombinator](/de/docs/Web/CSS/Child_combinator) ist spezifischer als der Nachfahren-Kombinator. Er wird durch das Größer-als-Zeichen (`>`) bezeichnet und wählt Knoten aus, die direkte Kinder des ersten Elements sind. Im Vergleich zu unserem vorherigen Beispiel wählt `div > span` nur die {{HTMLElement("span")}}-Elemente aus, die direkte Kinder eines {{HTMLElement("div")}}-Elements sind.

### Nachfolgender-Geschwister-Kombinator

Neben Nachfahren-Selektoren ermöglicht CSS auch die Auswahl von Elementen basierend auf ihren Geschwistern. Der [nachfolgende-Geschwister-Kombinator](/de/docs/Web/CSS/Subsequent-sibling_combinator), dargestellt durch eine Tilde (`~`), wählt Geschwister aus. Angenommen `A ~ B`, werden alle mit `B` übereinstimmenden Elemente ausgewählt, wenn sie von `A` vorausgegangen werden, vorausgesetzt, dass sowohl `A` als auch `B` denselben Elternteil teilen. Zum Beispiel wird `h2 ~ p` alle {{HTMLElement("p")}}-Elemente auswählen, die einem {{HTMLElement("Heading_Elements", "h2")}} folgen, unmittelbar oder nicht.

### Direkt-nachfolgender-Geschwister-Kombinator

Der [direkt-nachfolgende-Geschwister-Kombinator](/de/docs/Web/CSS/Next-sibling_combinator), bezeichnet durch das Plus-Symbol (`+`), ist dem nachfolgenden-Geschwister-Kombinator ähnlich. Allerdings wird in `A + B` nur `B` ausgewählt, wenn `B` unmittelbar `A` folgt, wobei beide denselben Elternteil haben. Anknüpfend an unser vorheriges Beispiel wird `h2 + p` nur das einzelne `<p>`-Element auswählen, das _unmittelbar_ einem `<h2>`-Element folgt.

### Spalten-Kombinator

Es gibt auch einen [Spalten-Kombinator](/de/docs/Web/CSS/Column_combinator), der durch zwei senkrechte Striche (`||`) dargestellt wird und Knoten auswählt, die zu einer Spalte gehören, wenn er unterstützt wird. Zum Beispiel wird `col || td` alle {{HTMLElement("td")}}-Elemente erfassen, die zum Umfang der {{HTMLElement("col")}} gehören.

### Namensraum-Trenner

Der [Namensraum-Trenner](/de/docs/Web/CSS/Namespace_separator) ist ein weiterer Kombinator, der im Allgemeinen in Verbindung mit der {{CSSXref("@namespace")}}-Regel verwendet wird. Dieser Kombinator wird durch ein einzelnes senkrechtes Zeichen (`|`) dargestellt. Er ermöglicht es, [Typ-Selektoren](/de/docs/Web/CSS/Type_selectors) und den [Universal-Selektor](/de/docs/Web/CSS/Universal_selectors) auf einen spezifischen Namensraum zu begrenzen. Zum Beispiel, indem ein Namensraum definiert wird, wie `@namespace SVG url('http://www.w3.org/2000/svg');`, können Sie Selektoren einbeziehen, die nur auf im SVG-Namensraum verschachtelte Elemente abzielen. `SVG|a` würde beispielsweise Links innerhalb von SVGs und nicht diejenigen im Rest des Dokuments erfassen. Namensräume können nützlich sein, um MathML, SVG oder andere XML-basierte Inhalte innerhalb Ihres HTML zu adressieren.

#### CSS

In diesem Beispiel deklarieren wir fünf [relative Selektoren](/de/docs/Web/CSS/CSS_selectors/Selector_structure#relative_selector) unter Verwendung von [einfachen Selektoren](/de/docs/Web/CSS/CSS_selectors/Selector_structure#simple_selector) in Kombination mit Kombinatoren.

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

### Erstellen von komplexen Selektoren mit CSS-Verschachtelung

Die oben beschriebenen komplexen Selektoren können auch mit einfachen Selektoren, Kombinatoren und [CSS-Verschachtelung](/de/docs/Web/CSS/CSS_nesting) definiert werden, mit oder ohne den [`&`-Verschachtelungsselektor](/de/docs/Web/CSS/Nesting_selector).

#### CSS

In diesem Beispiel replizieren wir dieselben fünf relativen Selektoren unter Verwendung einfacher Selektoren, die mit Kombinatoren kombiniert werden, diesmal jedoch mit CSS-Verschachtelung.

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

## Attribut-Selektoren

[Attribut-Selektoren](/de/docs/Web/CSS/Attribute_selectors) wählen alle Elemente aus, die, abhängig davon, wie der Selektor geschrieben ist, entweder das gegebene Attribut aufweisen oder das gegebene Attribut mit einem Teilstringwert-Matching haben.
Zum Beispiel wird `[type]` alle Elemente auswählen, die das `type`-Attribut gesetzt haben (auf einen beliebigen Wert), und `[type="submit"]` wird `<input type="submit">` und `<button type="submit">` oder jedes Element mit `type="submit"` erfassen, obwohl dieses Attribut-Wert-Paar nur auf {{HTMLElement("input")}}- und {{HTMLElement("button")}}-Elementen unterstützt wird. Der Abgleich ist Groß-/Kleinschreibung-unabhängig.

Die Groß-/Kleinschreibungsempfindlichkeit des Attributs hängt von der Sprache ab. Im Allgemeinen ist in HTML, wenn ein Attribut {{Glossary("enumerated", "aufzählbar")}} ist, der Wert im Selektor Groß-/Kleinschreibung-unabhängig, selbst wenn der Wert keiner der aufgezählten Werte ist oder wenn das Attribut keinen gültigen Wert für das Element aufweist, auf dem es gesetzt ist. Für nicht aufgezählte Attribute wie `class`, `id` oder jedes `data-*`-Attribut, oder für nicht-HTML-Attribute wie `role` oder `aria-*`-Attribute ist der Wertabgleich Groß-/Kleinschreibung-empfindlich; der Abgleich kann durch einen Groß-/Kleinschreibung-unabhängigen Modifikator (`i`) unabhängig gemacht werden.

## Pseudo-Klassen-Selektoren

Das [CSS-Selektoren](/de/docs/Web/CSS/CSS_selectors)-Modul definiert über 60 [Pseudo-Klassen](/de/docs/Web/CSS/Pseudo-classes). Pseudo-Klassen sind [einfache Selektoren](/de/docs/Web/CSS/CSS_selectors/Selector_structure#simple_selector), die mit einem Doppelpunkt (`:`) vorangestellt sind und die Auswahl von Elementen basierend auf Zustandsinformationen erlauben, die nicht im Dokumentbaum enthalten sind. {{CSSxRef("pseudo-classes")}} können verwendet werden, um ein Element basierend auf seinem _Zustand_ zu stylen.
Zum Beispiel zielt der {{cssxref(":target")}}-Einfach-Selektor auf ein Element in einer URL mit einem Fragmentidentifikator ab, und der [`a:visited`](/de/docs/Web/CSS/:visited)-[zusammengesetzte Selektor](/de/docs/Web/CSS/CSS_selectors/Selector_structure#compound_selector) stimmt mit allen {{HTMLElement("a")}}-Elementen überein, die von einem Benutzer besucht wurden.

Die Pseudo-Klassen können in Kategorien wie [Elementanzeigezustand](/de/docs/Web/CSS/Pseudo-classes#element_display_state_pseudo-classes), [Eingabe](/de/docs/Web/CSS/Pseudo-classes#input_pseudo-classes), [linguistisch](/de/docs/Web/CSS/Pseudo-classes#linguistic_pseudo-classes), [Ort](/de/docs/Web/CSS/Pseudo-classes#location_pseudo-classes), [Ressourcenzustand](/de/docs/Web/CSS/Pseudo-classes#resource_state_pseudo-classes), [zeitdimensional](/de/docs/Web/CSS/Pseudo-classes#time-dimensional_pseudo-classes), [baumstrukturell](/de/docs/Web/CSS/Pseudo-classes#tree-structural_pseudo-classes), [Benutzeraktion](/de/docs/Web/CSS/Pseudo-classes#user_action_pseudo-classes) und [funktional](/de/docs/Web/CSS/Pseudo-classes#functional_pseudo-classes) unterteilt werden.

Mehrere Pseudo-Klassen können kombiniert werden, um [zusammengesetzte Selektoren](/de/docs/Web/CSS/CSS_selectors/Selector_structure#compound_selector) zu erstellen. Beim Kombinieren einer Pseudo-Klasse in einen zusammengesetzten Selektor mit einem Typ- oder Universal-Selektor muss die Pseudo-Klasse dem Typselektor oder Universal-Selektor folgen, falls vorhanden.

## Pseudo-Element-Selektoren

Nicht alle CSS-Selektoren sind im [CSS-Selektoren-Modul](/de/docs/Web/CSS) definiert. CSS-Pseudo-Element-Selektoren sind im [CSS-Pseudo-Elemente](/de/docs/Web/CSS/CSS_pseudo-elements)-Modul definiert.

CSS-[Pseudo-Elemente](/de/docs/Web/CSS/Pseudo-elements), vorangestellt mit zwei Doppelpunkten (`::`), repräsentieren Einheiten, die nicht in HTML enthalten sind. Zum Beispiel wählt der einfache {{cssxref("::marker")}}-Selektor die Aufzählungszeichen von Listenelementen aus und der zusammengesetzte Selektor [`p::first-line`](/de/docs/Web/CSS/::first-line) trifft auf die erste Zeile aller {{HTMLElement("p")}}-Elemente zu.

## Spezifikationen

{{Specifications}}

Siehe die Spezifikationstabellen für [Pseudo-Klassen](/de/docs/Web/CSS/Pseudo-classes#specifications) und [Pseudo-Elemente](/de/docs/Web/CSS/Pseudo-elements#specifications) für Details dazu.

## Siehe auch

- [Selektorenliste](/de/docs/Web/CSS/Selector_list)
- [CSS-Selektorstruktur](/de/docs/Web/CSS/CSS_selectors/Selector_structure)
- [Spezifität](/de/docs/Web/CSS/CSS_cascade/Specificity)
- [CSS-Verschachtelungsmodule](/de/docs/Web/CSS/CSS_nesting)
