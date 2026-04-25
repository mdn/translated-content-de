---
title: "`:lang()` CSS-Pseudoklasse"
short-title: :lang()
slug: Web/CSS/Reference/Selectors/:lang
l10n:
  sourceCommit: bf90d24ddf56e3f60df25fcbc0d4e3e084004794
---

Die **`:lang()`** [CSS](/de/docs/Web/CSS)-[Pseudoklasse](/de/docs/Web/CSS/Reference/Selectors/Pseudo-classes) selektiert Elemente basierend auf der Sprache, die ihnen zugewiesen ist.

{{InteractiveExample("CSS Demo: :lang()", "tabbed-shorter")}}

```css interactive-example
*:lang(en-US) {
  outline: 2px solid deeppink;
}
```

```html interactive-example
<p lang="en-US">
  Music during road trips and long commutes aren't a problem, but using
  headphones isn't the best thing to do while driving in your car.
</p>

<p lang="pl-PL">
  Gdy widzimy znak z narysowaną czaszką i napisem
  <strong lang="en-US">DANGER</strong> to lepiej nie wchodzić do środka.
</p>
```

> [!NOTE]
> In HTML wird die Sprache durch eine Kombination aus dem [`lang`](/de/docs/Web/HTML/Reference/Global_attributes/lang)-Attribut, dem {{HTMLElement("meta")}}-Element und möglicherweise durch Informationen vom Protokoll (wie HTTP-Header) bestimmt. Für andere Dokumenttypen können andere Methoden zur Bestimmung der Sprache existieren.

## Syntax

```plain
:lang(<language-code> [,<language-code> ]*) {
  /* ... */
}
```

### Parameter

- `<language-code>`
  - : Eine durch Kommas getrennte Liste von einem oder mehreren {{cssxref("&lt;string&gt;")}}s, die Elemente basierend auf den in ihren [`lang`](/de/docs/Web/HTML/Reference/Global_attributes/lang)-Attributen gesetzten {{Glossary("BCP_47_language_tag", "BCP 47-Sprachtags")}} anvisiert.
    Die Übereinstimmung mit dem Sprachbereich ist nicht case-sensitiv.

## Beschreibung

Bei der Auswahl von Sprachen gibt es ein implizites Wildcard-Matching, sodass `:lang(de-DE)` mit `de-DE`, `de-DE-1996`, `de-Latn-DE`, `de-Latf-DE` und `de-Latn-DE-1996` übereinstimmt.
Beim expliziten Einsatz von Wildcards muss ein voller Match eines Sprachsubtags enthalten sein, sodass `:lang("*-F*")` ungültig, aber `:lang("*-Fr")` gültig ist.

## Beispiele

### Übereinstimmung von Kindern mit einer bestimmten Sprache

In diesem Beispiel wird die `:lang()`-Pseudoklasse verwendet, um die Eltern von Blockzitaten ({{htmlElement("q")}}) mithilfe von [Kind-Kombinatoren](/de/docs/Web/CSS/Reference/Selectors/Child_combinator) zu selektieren. Beachten Sie, dass dies nicht die einzige Methode für dieses Vorgehen darstellt und dass die beste Methode vom Dokumenttyp abhängt. Beachten Sie auch, dass {{Glossary("Unicode", "Unicode")}}-Werte verwendet werden, um einige der speziellen Anführungszeichen anzugeben.

#### HTML

```html
<div lang="en">
  <q>This English quote has a <q>nested</q> quote inside.</q>
</div>
<div lang="fr">
  <q>This French quote has a <q>nested</q> quote inside.</q>
</div>
<div lang="de">
  <q>This German quote has a <q>nested</q> quote inside.</q>
</div>
```

#### CSS

```css
:lang(en) > q {
  quotes: "\201C" "\201D" "\2018" "\2019";
}
:lang(fr) > q {
  quotes: "« " " »";
}
:lang(de) > q {
  quotes: "»" "«" "\2039" "\203A";
}
```

#### Ergebnis

{{EmbedLiveSample('Matching_children_of_a_given_language', '', '80')}}

### Übereinstimmung mehrerer Sprachen

Das folgende Beispiel zeigt, wie man mehrere Sprachen durch Angabe einer durch Kommas getrennten Liste von Sprachcodes anvisiert.
Es ist auch möglich, ein Wildcard zu verwenden, um Sprachen innerhalb eines bestimmten Sprachbereichs zu matchen.

```css hidden
p {
  margin: 0;
}
```

#### CSS

```css
/* Matches nl and de */
:lang("nl", "de") {
  color: green;
}

/* Omitting quotes & case-insensitive matching */
:lang(EN, FR) {
  color: blue;
}

/* Wildcard matching a language range */
:lang("*-Latn") {
  color: red;
}
```

#### HTML

```html
<p lang="nl">Dit is een Nederlandse paragraaf.</p>
<p lang="de">Dies ist ein deutscher Satz.</p>
<p lang="en">This is an English sentence.</p>
<p lang="en-GB">Matching the language range of English.</p>
<p lang="fr">Ceci est un paragraphe français.</p>
<p lang="fr-Latn-FR">Ceci est un paragraphe français en latin.</p>
```

#### Ergebnis

{{EmbedLiveSample('Matching_multiple_languages', '', '120')}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die {{cssxref(":dir")}}-Pseudoklasse, die durch Textflussrichtung selektiert
- HTML-Attribute [`lang`](/de/docs/Web/HTML/Reference/Global_attributes/lang)
- HTML-Attribute [`translate`](/de/docs/Web/HTML/Reference/Global_attributes/translate)
- {{Glossary("BCP_47_language_tag", "BCP 47-Sprachtag")}}
