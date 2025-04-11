---
title: :lang()
slug: Web/CSS/:lang
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{CSSRef}}

Die **`:lang()`** [CSS](/de/docs/Web/CSS) [Pseudoklasse](/de/docs/Web/CSS/Pseudo-classes) selektiert Elemente basierend auf der Sprache, die ihnen zugeordnet wird.

{{InteractiveExample("CSS Demo: :lang()", "tabbed-shorter")}}

```css interactive-example
*:lang(en-US) {
  outline: 2px solid deeppink;
}
```

```html interactive-example
<p lang="en-US">
  Music during road trips and long commutes aren’t a problem, but using
  headphones isn’t the best thing to do while driving in your car.
</p>

<p lang="pl-PL">
  Gdy widzimy znak z narysowaną czaszką i napisem
  <strong lang="en-US">DANGER</strong> to lepiej nie wchodzić do środka.
</p>
```

> [!NOTE]
> In HTML wird die Sprache durch eine Kombination des [`lang`](/de/docs/Web/HTML/Reference/Global_attributes/lang)-Attributs, des {{HTMLElement("meta")}}-Elements und möglicherweise durch Informationen aus dem Protokoll (wie HTTP-Header) bestimmt. Für andere Dokumenttypen können andere Methoden zur Bestimmung der Sprache existieren.

## Syntax

### Formale Syntax

```plain
:lang(<language-code> [,<language-code> ]*)
  /* ... */
}
```

### Parameter

- `<language-code>`
  - : Eine kommaseparierte Liste von einem oder mehreren {{cssxref("&lt;string&gt;")}}, die ein Element mit einem Sprachwert gemäß den [BCP 47](https://www.rfc-editor.org/info/bcp47) Sprachcodes anvisiert.
    Das Matching nach Sprachbereich ist nicht auf Groß-/Kleinschreibung empfindlich.

## Beschreibung

Beim Auswählen von Sprachen erfolgt ein implizites Wildcard-Matching, sodass `:lang(de-DE)` mit `de-DE`, `de-DE-1996`, `de-Latn-DE`, `de-Latf-DE` und `de-Latn-DE-1996` übereinstimmt.
Wildcards explizit zu verwenden muss eine vollständige Übereinstimmung eines Sprachsubtags einschließen, sodass `:lang("*-F*")` ungültig ist, aber `:lang("*-Fr")` gültig ist.

## Beispiele

### Übereinstimmung von Kindern einer bestimmten Sprache

In diesem Beispiel wird die `:lang()` Pseudoklasse verwendet, um die Eltern von Quote-Elementen ({{htmlElement("q")}}) mittels [Kindkombinatoren](/de/docs/Web/CSS/Child_combinator) zu selektieren. Beachten Sie, dass dies nicht die einzige Möglichkeit ist, dies zu tun, und dass die beste Methode vom Dokumenttyp abhängt. Beachten Sie auch, dass {{Glossary("Unicode", "Unicode")}}-Werte verwendet werden, um einige der speziellen Anführungszeichen anzugeben.

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

Das folgende Beispiel zeigt, wie man mehrere Sprachen durch Angabe einer kommaseparierten Liste von Sprachcodes übereinstimmen kann.
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

- Die {{cssxref(":dir")}} Pseudoklasse, die nach Textausrichtung selektiert
- HTML [`lang`](/de/docs/Web/HTML/Reference/Global_attributes/lang) Attribut
- HTML [`translate`](/de/docs/Web/HTML/Reference/Global_attributes/translate) Attribut
- {{RFC(5646, "Tags for Identifying Languages (also known as BCP 47)")}}
