---
title: CSS-Selektoren und Kombinatoren
short-title: Selektoren und Kombinatoren
slug: Web/CSS/Guides/Selectors/Selectors_and_combinators
l10n:
  sourceCommit: 7484d45816002fbf082a59c5d95c38a1eb2b2e4b
---

CSS-Selektoren definieren ein Muster für die Elemente, die Sie auswählen möchten, um CSS-Regeln auf sie anzuwenden. Kombinatoren definieren die Beziehung zwischen den Selektoren. Mit verschiedenen Selektoren und Kombinatoren können Sie die gewünschten Elemente anhand ihres Typs, ihrer Attribute, ihres Zustands oder ihrer Beziehung zu anderen Elementen gezielt auswählen und gestalten.

## Arten von Selektoren

Es gibt über 80 Selektoren und Kombinatoren. CSS-Selektoren lassen sich danach gruppieren, welche Arten von Elementen sie auswählen können.

### Grundlegende Selektoren

Der [Typselektor](/de/docs/Web/CSS/Reference/Selectors/Type_selectors) wählt alle Elemente mit dem angegebenen Knotennamen aus. Beispielsweise wählt `div` alle {{HTMLElement("div")}}-Elemente aus, und `input` trifft auf jedes {{HTMLElement("input")}}-Element zu. Der [Universalselektor](/de/docs/Web/CSS/Reference/Selectors/Universal_selectors), dargestellt durch ein Sternchen (`*`), ist ein spezieller Typselektor, der alle Elemente auswählt.

Der [Klassenselektor](/de/docs/Web/CSS/Reference/Selectors/Class_selectors) wählt alle Elemente mit dem angegebenen `class`-Attribut aus. Er besteht aus dem Klassennamen mit einem vorangestellten Punkt (`.`). Beispielsweise trifft `.index` auf jedes Element mit `class="index"` zu. Der [ID-Selektor](/de/docs/Web/CSS/Reference/Selectors/ID_selectors) wählt ein Element anhand des Werts seines `id`-Attributs aus. Der Selektor besteht aus der `id` mit einem vorangestellten Nummernzeichen (U+0023, `#`). Beispielsweise trifft `#toc` auf das Element mit `id="toc"` zu. Sowohl [`class`](/de/docs/Web/HTML/Reference/Global_attributes/class) als auch [`id`](/de/docs/Web/HTML/Reference/Global_attributes/id) sind globale Attribute. In einem Dokument sollte es nur ein Element mit einer bestimmten `id` geben. Falls mehrere vorhanden sind, trifft der ID-Selektor auf alle Elemente mit dieser `id` zu.

Wenn Sie einen Typ- oder Universalselektor mit einem Klassen- oder ID-Selektor zu einem [zusammengesetzten Selektor](/de/docs/Web/CSS/Guides/Selectors/Selector_structure#compound_selector) kombinieren, muss der Typ- oder Universalselektor vor der Klasse oder ID stehen.

#### HTML

```html
<p class="myClass" id="myId">I match everything.</p>
<p>I match the universal and type selectors only.</p>
```

#### CSS

In diesem Beispiel definieren wir vier [einfache Selektoren](/de/docs/Web/CSS/Guides/Selectors/Selector_structure#simple_selector) und einen [zusammengesetzten Selektor](/de/docs/Web/CSS/Guides/Selectors/Selector_structure#compound_selector) mit den vier oben beschriebenen grundlegenden Selektortypen.

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

#### Ergebnis

{{EmbedLiveSample("Basic selectors", "100%", 120)}}

## Kombinatoren

Mit CSS-Kombinatoren können wir Selektoren verbinden, um DOM-Knoten anhand ihrer Beziehung zu anderen Elementen im Dokumentbaum auszuwählen. Durch diese Verbindung von Selektoren mit Kombinatoren entstehen [komplexe Selektoren](/de/docs/Web/CSS/Guides/Selectors/Selector_structure#complex_selector).

### Nachfahren-Kombinator

Der [Nachfahren-Kombinator](/de/docs/Web/CSS/Reference/Selectors/Descendant_combinator), dargestellt durch ein oder mehrere Leerzeichen, wählt Knoten aus, die Nachfahren des ersten Elements sind. Beispielsweise trifft `div span` auf alle {{HTMLElement("span")}}-Elemente innerhalb eines {{HTMLElement("div")}}-Elements zu.

### Kind-Kombinator

Der [Kind-Kombinator](/de/docs/Web/CSS/Reference/Selectors/Child_combinator) ist spezifischer als der Nachfahren-Kombinator. Er wird durch das Größer-als-Zeichen (`>`) dargestellt und wählt Knoten aus, die direkte Kinder des ersten Elements sind. Im Unterschied zum vorherigen Beispiel trifft `div > span` nur auf {{HTMLElement("span")}}-Elemente zu, die direkte Kinder eines {{HTMLElement("div")}}-Elements sind.

### Kombinator für nachfolgende Geschwisterelemente

Neben Nachfahren können Sie mit CSS auch Elemente anhand ihrer Geschwisterelemente auswählen. Der [Kombinator für nachfolgende Geschwisterelemente](/de/docs/Web/CSS/Reference/Selectors/Subsequent-sibling_combinator), dargestellt durch eine Tilde (`~`), wählt Geschwisterelemente aus. Bei `A ~ B` werden alle Elemente ausgewählt, auf die `B` zutrifft und denen ein Element vorausgeht, auf das `A` zutrifft, sofern beide dasselbe Elternelement haben. Beispielsweise trifft `h2 ~ p` auf alle {{HTMLElement("p")}}-Elemente zu, die auf ein {{HTMLElement("Heading_Elements", "h2")}}-Element folgen – ob unmittelbar oder nicht.

### Kombinator für unmittelbar folgende Geschwisterelemente

Der [Kombinator für unmittelbar folgende Geschwisterelemente](/de/docs/Web/CSS/Reference/Selectors/Next-sibling_combinator), dargestellt durch ein Pluszeichen (`+`), ähnelt dem Kombinator für nachfolgende Geschwisterelemente. Bei `A + B` trifft er jedoch nur auf `B` zu, wenn `B` unmittelbar auf `A` folgt und beide dasselbe Elternelement haben. Bezogen auf das vorherige Beispiel trifft `h2 + p` nur auf das eine `<p>`-Element zu, das _unmittelbar_ auf ein `<h2>`-Element folgt.

### Spalten-Kombinator

Außerdem gibt es einen [Spalten-Kombinator](/de/docs/Web/CSS/Reference/Selectors/Column_combinator), dargestellt durch zwei senkrechte Striche (`||`). Sofern er unterstützt wird, wählt er Knoten aus, die zu einer Spalte gehören. Beispielsweise trifft `col || td` auf alle {{HTMLElement("td")}}-Elemente zu, die zum Geltungsbereich des {{HTMLElement("col")}}-Elements gehören.

### Namensraum-Trennzeichen

Das [Namensraum-Trennzeichen](/de/docs/Web/CSS/Reference/Selectors/Namespace_separator) ist ein weiterer Kombinator, der üblicherweise zusammen mit der {{CSSXref("@namespace")}}-At-Regel verwendet wird. Es wird durch einen einzelnen senkrechten Strich (`|`) dargestellt. Damit lassen sich [Typselektoren](/de/docs/Web/CSS/Reference/Selectors/Type_selectors) und der [Universalselektor](/de/docs/Web/CSS/Reference/Selectors/Universal_selectors) auf einen bestimmten Namensraum beschränken. Wenn Sie beispielsweise einen Namensraum wie `@namespace SVG url('http://www.w3.org/2000/svg');` definieren, können Sie Selektoren verwenden, die ausschließlich Elemente im SVG-Namensraum ansprechen. `SVG|a` würde auf Links innerhalb von SVGs zutreffen, nicht aber auf Links im übrigen Dokument. Namensräume können hilfreich sein, um MathML, SVG oder andere XML-basierte Inhalte in Ihrem HTML gezielt anzusprechen.

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

#### CSS

In diesem Beispiel definieren wir fünf [relative Selektoren](/de/docs/Web/CSS/Guides/Selectors/Selector_structure#relative_selector), indem wir [einfache Selektoren](/de/docs/Web/CSS/Guides/Selectors/Selector_structure#simple_selector) mit Kombinatoren verbinden.

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

#### Ergebnis

{{EmbedLiveSample("Combinators", "100%", 500)}}

### Komplexe Selektoren mit CSS-Verschachtelung erstellen

Die oben gezeigten komplexen Selektoren lassen sich auch mit einfachen Selektoren, Kombinatoren und [CSS-Verschachtelung](/de/docs/Web/CSS/Guides/Nesting) definieren, mit oder ohne den [Verschachtelungsselektor `&`](/de/docs/Web/CSS/Reference/Selectors/Nesting_selector).

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

#### CSS

In diesem Beispiel bilden wir dieselben fünf relativen Selektoren mit einfachen Selektoren und Kombinatoren nach, diesmal jedoch mit CSS-Verschachtelung.

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

#### Ergebnis

{{EmbedLiveSample("creating_complex_selectors_with_css_nesting", "100%", 300)}}

## Attributselektoren

[Attributselektoren](/de/docs/Web/CSS/Reference/Selectors/Attribute_selectors) wählen – je nach Schreibweise des Selektors – alle Elemente aus, die entweder das angegebene Attribut besitzen oder deren Attributwert eine bestimmte Teilzeichenfolge enthält.
Beispielsweise trifft `[type]` auf alle Elemente zu, bei denen das `type`-Attribut gesetzt ist (unabhängig vom Wert). `[type="submit"]` trifft auf `<input type="submit">` und `<button type="submit">` sowie auf jedes andere Element mit `type="submit"` zu, obwohl dieses Attribut-Wert-Paar nur für {{HTMLElement("input")}}- und {{HTMLElement("button")}}-Elemente unterstützt wird. Der Vergleich berücksichtigt die Groß- und Kleinschreibung nicht.

Ob bei einem Attributwert die Groß- und Kleinschreibung berücksichtigt wird, hängt von der Sprache ab. Wenn ein Attribut in HTML {{Glossary("enumerated", "aufgezählte Werte")}} hat, wird beim Vergleich mit dem Wert im Selektor in der Regel die Groß- und Kleinschreibung nicht berücksichtigt. Das gilt auch dann, wenn der Wert nicht zu den aufgezählten Werten gehört oder das Attribut für das betreffende Element nicht gültig ist. Bei Attributen ohne aufgezählte Werte, etwa `class`, `id` oder `data-*`, sowie bei Nicht-HTML-Attributen wie `role` oder `aria-*` wird beim Vergleich die Groß- und Kleinschreibung berücksichtigt. Mit dem Modifikator (`i`) lässt sich dies ändern.

## Pseudoklassen-Selektoren

Das Modul [CSS-Selektoren](/de/docs/Web/CSS/Guides/Selectors) definiert über 60 [Pseudoklassen](/de/docs/Web/CSS/Reference/Selectors/Pseudo-classes). Pseudoklassen sind [einfache Selektoren](/de/docs/Web/CSS/Guides/Selectors/Selector_structure#simple_selector) mit einem vorangestellten Doppelpunkt (`:`). Sie ermöglichen es, Elemente anhand von Zustandsinformationen auszuwählen, die nicht im Dokumentbaum enthalten sind. Mit {{CSSxRef("pseudo-classes")}} können Sie ein Element abhängig von seinem _Zustand_ gestalten.
Beispielsweise spricht der einfache Selektor {{cssxref(":target")}} das Zielelement einer URL mit Fragmentbezeichner an. Der [zusammengesetzte Selektor](/de/docs/Web/CSS/Guides/Selectors/Selector_structure#compound_selector) [`a:visited`](/de/docs/Web/CSS/Reference/Selectors/:visited) trifft auf alle {{HTMLElement("a")}}-Elemente zu, die ein Benutzer bereits besucht hat.

Pseudoklassen lassen sich in Kategorien für den [Anzeigezustand von Elementen](/de/docs/Web/CSS/Reference/Selectors/Pseudo-classes#element_display_state_pseudo-classes), [Eingaben](/de/docs/Web/CSS/Reference/Selectors/Pseudo-classes#input_pseudo-classes), [Sprache](/de/docs/Web/CSS/Reference/Selectors/Pseudo-classes#linguistic_pseudo-classes), [Position](/de/docs/Web/CSS/Reference/Selectors/Pseudo-classes#location_pseudo-classes), den [Ressourcenzustand](/de/docs/Web/CSS/Reference/Selectors/Pseudo-classes#resource_state_pseudo-classes), [zeitliche Aspekte](/de/docs/Web/CSS/Reference/Selectors/Pseudo-classes#time-dimensional_pseudo-classes), die [Baumstruktur](/de/docs/Web/CSS/Reference/Selectors/Pseudo-classes#tree-structural_pseudo-classes), [Benutzeraktionen](/de/docs/Web/CSS/Reference/Selectors/Pseudo-classes#user_action_pseudo-classes) und [funktionale Pseudoklassen](/de/docs/Web/CSS/Reference/Selectors/Pseudo-classes#functional_pseudo-classes) einteilen.

Mehrere Pseudoklassen können zu [zusammengesetzten Selektoren](/de/docs/Web/CSS/Guides/Selectors/Selector_structure#compound_selector) kombiniert werden. Wenn eine Pseudoklasse mit einem Typ- oder Universalselektor zu einem zusammengesetzten Selektor kombiniert wird, muss sie auf den Typ- oder Universalselektor folgen, sofern einer vorhanden ist.

## Pseudoelement-Selektoren

Nicht alle CSS-Selektoren sind im [Modul CSS-Selektoren](/de/docs/Web/CSS) definiert. CSS-Pseudoelement-Selektoren sind im Modul [CSS-Pseudoelemente](/de/docs/Web/CSS/Guides/Pseudo-elements) definiert.

CSS-[Pseudoelemente](/de/docs/Web/CSS/Reference/Selectors/Pseudo-elements) beginnen mit zwei Doppelpunkten (`::`) und stellen Bestandteile dar, die nicht im HTML enthalten sind. Beispielsweise wählt der einfache Selektor {{cssxref("::marker")}} die Aufzählungszeichen von Listeneinträgen aus, während der zusammengesetzte Selektor [`p::first-line`](/de/docs/Web/CSS/Reference/Selectors/::first-line) auf die erste Zeile aller {{HTMLElement("p")}}-Elemente zutrifft.

## Spezifikationen

{{Specifications}}

Weitere Informationen finden Sie in den Spezifikationstabellen zu [Pseudoklassen](/de/docs/Web/CSS/Reference/Selectors/Pseudo-classes#specifications) und [Pseudoelementen](/de/docs/Web/CSS/Reference/Selectors/Pseudo-elements#specifications).

## Siehe auch

- [Selektorliste](/de/docs/Web/CSS/Reference/Selectors/Selector_list)
- [Struktur von CSS-Selektoren](/de/docs/Web/CSS/Guides/Selectors/Selector_structure)
- [Spezifität](/de/docs/Web/CSS/Guides/Cascade/Specificity)
- [Modul CSS-Verschachtelung](/de/docs/Web/CSS/Guides/Nesting)
