---
title: CSS-Selektoren und Kombinatoren
short-title: Selektoren und Kombinatoren
slug: Web/CSS/Guides/Selectors/Selectors_and_combinators
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

CSS-Selektoren werden verwendet, um ein Muster der Elemente zu definieren, die Sie auswählen möchten, um eine Reihe von CSS-Regeln auf die ausgewählten Elemente anzuwenden. Kombinatoren definieren die Beziehung zwischen den Selektoren. Mithilfe verschiedener Selektoren und Kombinatoren können Sie präzise die gewünschten Elemente basierend auf ihrem Typ, ihren Attributen, ihrem Zustand oder ihrer Beziehung zu anderen Elementen auswählen und gestalten.

## Arten von Selektoren

Es gibt über 80 Selektoren und Kombinatoren. CSS-Selektoren können basierend auf dem Typ der Elemente, die sie auswählen können, in folgende Kategorien gruppiert werden.

### Basis-Selektoren

Der [Typselektor](/de/docs/Web/CSS/Reference/Selectors/Type_selectors) wählt alle Elemente aus, die den angegebenen Knotennamen haben. Zum Beispiel wählt `div` alle {{HTMLElement("div")}}-Elemente aus und `input` entspricht jedem {{HTMLElement("input")}}-Element. Der [universelle Selektor](/de/docs/Web/CSS/Reference/Selectors/Universal_selectors), dargestellt durch ein Sternchen (`*`), ist ein spezieller Typselektor, der alle Elemente auswählt.

Der [Klassenselektor](/de/docs/Web/CSS/Reference/Selectors/Class_selectors) wählt alle Elemente aus, die das angegebene `class`-Attribut haben, wobei der Klassenname mit einem Punkt (`.`) vorangestellt ist. Zum Beispiel wird `.index` jedem Element entsprechen, das `class="index"` hat. Der [ID-Selektor](/de/docs/Web/CSS/Reference/Selectors/ID_selectors) wählt ein Element basierend auf dem Wert seines `id`-Attributs aus. Der Selektor ist die `id`, die mit einem Doppelkreuz (U+0023, `#`) vorangestellt ist. Zum Beispiel wird `#toc` dem Element entsprechen, das `id="toc"` hat. Sowohl [`class`](/de/docs/Web/HTML/Reference/Global_attributes/class) als auch [`id`](/de/docs/Web/HTML/Reference/Global_attributes/id) sind globale Attribute. Es sollte nur ein Element mit einer gegebenen `id` in einem Dokument vorhanden sein; aber wenn es mehr als eines gibt, wird der ID-Selektor alle Elemente mit dieser `id` auswählen.

Wenn ein Typ- oder universeller Selektor mit einem Klassen- oder ID-Selektor kombiniert wird, um einen [Komplexen Selektor](/de/docs/Web/CSS/Guides/Selectors/Selector_structure#compound_selector) zu erstellen, muss der Typ- oder universelle Selektor dem Klassen- oder ID-Selektor vorausgehen.

#### CSS

In diesem Beispiel deklarieren wir vier [einfache Selektoren](/de/docs/Web/CSS/Guides/Selectors/Selector_structure#simple_selector) und einen [komplexen Selektor](/de/docs/Web/CSS/Guides/Selectors/Selector_structure#compound_selector) unter Verwendung der vier oben beschriebenen grundlegenden Selektor-Typen.

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

Mithilfe von CSS-Kombinatoren können wir Selektoren kombinieren, um DOM-Knoten basierend auf ihrer Beziehung zu anderen Elementen innerhalb des Dokumentknotenbaums auszuwählen. Dieses Kombinieren von Selektoren mit Kombinatoren erzeugt [komplexe Selektoren](/de/docs/Web/CSS/Guides/Selectors/Selector_structure#complex_selector).

### Nachkommen-Kombinator

Der [Nachkommen-Kombinator](/de/docs/Web/CSS/Reference/Selectors/Descendant_combinator), dargestellt durch eines oder mehrere Leerzeichen, wählt Knoten aus, die Nachkommen des ersten Elements sind. Zum Beispiel wird `div span` alle {{HTMLElement("span")}}-Elemente auswählen, die innerhalb eines {{HTMLElement("div")}}-Elements sind.

### Kind-Kombinator

Der [Kind-Kombinator](/de/docs/Web/CSS/Reference/Selectors/Child_combinator) ist spezifischer als der Nachkommen-Kombinator. Dargestellt durch das Größer-als-Zeichen (`>`), wählt der Kind-Kombinator Knoten aus, die direkte Kinder des ersten Elements sind. Im Vergleich zu unserem vorherigen Beispiel wird `div > span` nur die {{HTMLElement("span")}}-Elemente auswählen, die direkte Kinder eines {{HTMLElement("div")}}-Elements sind.

### Nachfolgender-Geschwister-Kombinator

Zusätzlich zu den Nachkommen-Selektoren ermöglicht CSS auch die Auswahl von Elementen basierend auf ihren Geschwistern. Der [nachfolgende-Geschwister-Kombinator](/de/docs/Web/CSS/Reference/Selectors/Subsequent-sibling_combinator), dargestellt durch eine Tilde (`~`), wählt Geschwister aus. Angenommen `A ~ B`, werden alle Elemente, die `B` entsprechen, ausgewählt, wenn sie von `A` vorangegangen werden, vorausgesetzt, sowohl `A` als auch `B` teilen denselben Elternteil. Zum Beispiel wird `h2 ~ p` alle {{HTMLElement("p")}}-Elemente auswählen, die einem {{HTMLElement("Heading_Elements", "h2")}} folgen, sofort oder nicht.

### Direktes-Geschwister-Kombinator

Der [direkte-Geschwister-Kombinator](/de/docs/Web/CSS/Reference/Selectors/Next-sibling_combinator), dargestellt durch das Pluszeichen (`+`), ähnelt dem nachfolgenden-Geschwister-Kombinator. Jedoch, bei `A + B`, wählt es `B` nur aus, wenn `B` unmittelbar von `A` vorangegangen wird, wobei beide denselben Elternteil teilen. Ein Beispiel, bei dem `h2 + p` nur das einzelne `<p>`-Element auswählt, das dem `<h2>`-Element _unmittelbar_ folgt.

### Spalten-Kombinator

Es gibt auch einen [Spalten-Kombinator](/de/docs/Web/CSS/Reference/Selectors/Column_combinator), dargestellt durch zwei senkrechte Striche (`||`), der, wenn unterstützt, Knoten auswählt, die zu einer Spalte gehören. Zum Beispiel wird `col || td` alle {{HTMLElement("td")}}-Elemente auswählen, die zum Geltungsbereich des {{HTMLElement("col")}} gehören.

### Namensraum-Trenner

Der [Namensraum-Trenner](/de/docs/Web/CSS/Reference/Selectors/Namespace_separator) ist ein weiterer Kombinator, der im Allgemeinen in Verbindung mit der {{CSSXref("@namespace")}} at-Regel verwendet wird. Dieser Kombinator wird durch ein einzelnes senkrechtes Strichzeichen (`|`) dargestellt. Er ermöglicht es, [Typselektoren](/de/docs/Web/CSS/Reference/Selectors/Type_selectors) und den [universellen Selektor](/de/docs/Web/CSS/Reference/Selectors/Universal_selectors) auf einen bestimmten Namensraum zu beschränken. Zum Beispiel, durch Definieren eines Namensraums wie `@namespace SVG url('http://www.w3.org/2000/svg');`, können Sie Selektoren einfügen, die nur Elemente im SVG-Namensraum ansprechen. Die Deklaration `SVG|a` würde Links innerhalb von SVGs entsprechen, nicht jedoch jenen im Rest des Dokuments. Namespacing kann nützlich sein, um MathML, SVG oder andere XML-basierte Inhalte innerhalb Ihres HTML gezielt anzusprechen.

#### CSS

In diesem Beispiel deklarieren wir fünf [relative Selektoren](/de/docs/Web/CSS/Guides/Selectors/Selector_structure#relative_selector) unter Verwendung [einfacher Selektoren](/de/docs/Web/CSS/Guides/Selectors/Selector_structure#simple_selector) kombiniert mit Kombinatoren.

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

### Erstellen komplexer Selektoren mit CSS Verschachtelung

Die oben genannten komplexen Selektoren können auch mit einfachen Selektoren, Kombinatoren und [CSS Verschachtelung](/de/docs/Web/CSS/Guides/Nesting) definiert werden, mit oder ohne den [`&` Verschachtelungsselektor](/de/docs/Web/CSS/Reference/Selectors/Nesting_selector).

#### CSS

In diesem Beispiel replizieren wir die gleichen fünf relativen Selektoren unter Verwendung einfacher Selektoren kombiniert mit Kombinatoren, diesmal jedoch mit CSS-Verschachtelung.

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

[Attributselektoren](/de/docs/Web/CSS/Reference/Selectors/Attribute_selectors) wählen alle Elemente aus, die je nach Schreibweise des Selektors entweder das angegebene Attribut haben oder das gegebene Attribut mit einem Teilstring-Wert. Zum Beispiel wird `[type]` alle Elemente auswählen, die das `type`-Attribut gesetzt haben (auf jeden Wert), und `[type="submit"]` wird sowohl `<input type="submit">` als auch `<button type="submit">` oder jedes Element mit `type="submit"` entsprechend, selbst wenn dieses Attribut-Wert-Paar nur auf {{HTMLElement("input")}}- und {{HTMLElement("button")}}-Elementen unterstützt wird. Die Übereinstimmung erfolgt ohne Berücksichtigung der Groß- und Kleinschreibung.

Die Groß-/Kleinschreibung des Attributs hängt von der Sprache ab. Allgemein gilt im HTML, wenn ein Attribut {{Glossary("enumerated", "aufgezählt")}} wird, ist der Wert im Selektor ohne Berücksichtigung der Groß- und Kleinschreibung, selbst wenn der Wert nicht einer der aufgezählten ist oder wenn das Attribut kein gültiger Wert für das Element ist, auf dem es gesetzt ist. Für nicht aufgezählte Attribute, wie `class`, `id` oder jedes `data-*`-Attribut, oder für nicht-HTML-Attribute, wie `role` oder `aria-*`-Attribute, erfolgt die Übereinstimmung unter Berücksichtigung der Groß-/Kleinschreibung; die Übereinstimmung kann mit einem Modifikator ohne Berücksichtigung der Groß-/Kleinschreibung (`i`) gemacht werden.

## Pseudo-Klassen-Selektoren

Das [CSS-Selektoren-Modul](/de/docs/Web/CSS/Guides/Selectors) definiert über 60 [Pseudo-Klassen](/de/docs/Web/CSS/Reference/Selectors/Pseudo-classes). Pseudo-Klassen sind [einfache Selektoren](/de/docs/Web/CSS/Guides/Selectors/Selector_structure#simple_selector), die mit einem Doppelpunkt (`:`) vorangestellt sind und die Auswahl von Elementen basierend auf Zustandsinformationen ermöglichen, die nicht im Dokumentbaum enthalten sind. {{CSSxRef("pseudo-classes")}} können verwendet werden, um ein Element basierend auf seinem _Zustand_ zu stylen. Zum Beispiel zielt der einfache Selektor {{cssxref(":target")}} auf ein Element einer URL mit einem Fragmentkennung ab, und der [`a:visited`](/de/docs/Web/CSS/Reference/Selectors/:visited) [komplexe Selektor](/de/docs/Web/CSS/Guides/Selectors/Selector_structure#compound_selector) entspricht allen {{HTMLElement("a")}}-Elementen, die von einem Benutzer besucht wurden.

Die Pseudo-Klassen können in folgende Kategorien eingeteilt werden: [Element Anzeigezustand](/de/docs/Web/CSS/Reference/Selectors/Pseudo-classes#element_display_state_pseudo-classes), [Eingabe](/de/docs/Web/CSS/Reference/Selectors/Pseudo-classes#input_pseudo-classes), [linguistic](/de/docs/Web/CSS/Reference/Selectors/Pseudo-classes#linguistic_pseudo-classes), [Ort](/de/docs/Web/CSS/Reference/Selectors/Pseudo-classes#location_pseudo-classes), [Ressourcenzustand](/de/docs/Web/CSS/Reference/Selectors/Pseudo-classes#resource_state_pseudo-classes), [zeit-dimensional](/de/docs/Web/CSS/Reference/Selectors/Pseudo-classes#time-dimensional_pseudo-classes), [baum-strukturellen](/de/docs/Web/CSS/Reference/Selectors/Pseudo-classes#tree-structural_pseudo-classes), [Benutzeraktion](/de/docs/Web/CSS/Reference/Selectors/Pseudo-classes#user_action_pseudo-classes), und [Funktional](/de/docs/Web/CSS/Reference/Selectors/Pseudo-classes#functional_pseudo-classes).

Mehrere Pseudo-Klassen können kombiniert werden, um [komplexe Selektoren](/de/docs/Web/CSS/Guides/Selectors/Selector_structure#compound_selector) zu erstellen. Bei der Kombination einer Pseudo-Klasse in einen komplexen Selektor mit einem Typ- oder universellen Selektor muss die Pseudo-Klasse dem Typ-Selektor oder universellen Selektor folgen, falls vorhanden.

## Pseudo-Element-Selektoren

Nicht alle CSS-Selektoren sind im [CSS-Selektoren-Modul](/de/docs/Web/CSS) definiert. CSS-Pseudo-Element-Selektoren sind im [CSS-Pseudo-Elemente-Modul](/de/docs/Web/CSS/Guides/Pseudo-elements) definiert.

CSS [Pseudo-Elemente](/de/docs/Web/CSS/Reference/Selectors/Pseudo-elements), mit zwei Doppelpunkten (`::`) vorangestellt, repräsentieren Entitäten, die nicht in HTML enthalten sind. Zum Beispiel wählt der einfache {{cssxref("::marker")}}-Selektor Aufzählungszeichen der Listenelemente aus, und der komplexe Selektor [`p::first-line`](/de/docs/Web/CSS/Reference/Selectors/::first-line) entspricht der ersten Zeile aller {{HTMLElement("p")}}-Elemente.

## Spezifikationen

{{Specifications}}

Siehe die [Pseudo-Klassen](/de/docs/Web/CSS/Reference/Selectors/Pseudo-classes#specifications) und [Pseudo-Elemente](/de/docs/Web/CSS/Reference/Selectors/Pseudo-elements#specifications) Spezifikationstabellen für Details dazu.

## Siehe auch

- [Selektor-Liste](/de/docs/Web/CSS/Reference/Selectors/Selector_list)
- [CSS-Selektorstruktur](/de/docs/Web/CSS/Guides/Selectors/Selector_structure)
- [Spezifität](/de/docs/Web/CSS/Guides/Cascade/Specificity)
- [CSS-Verschachtelungsmodul](/de/docs/Web/CSS/Guides/Nesting)
