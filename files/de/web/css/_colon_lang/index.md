---
title: :lang()
slug: Web/CSS/:lang
l10n:
  sourceCommit: 63fb4a23cce7f4794cfcef050b1e5378856c9ca8
---

{{CSSRef}}

Die **`:lang()`** [CSS](/de/docs/Web/CSS) [Pseudoklasse](/de/docs/Web/CSS/Pseudo-classes) selektiert Elemente basierend auf der Sprache, in der sie bestimmt wurden.

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
> In HTML wird die Sprache durch eine Kombination des [`lang`](/de/docs/Web/HTML/Reference/Global_attributes/lang)-Attributs, das {{HTMLElement("meta")}}-Element und möglicherweise durch Informationen aus dem Protokoll (wie HTTP-Header) bestimmt. Für andere Dokumenttypen können andere Methoden zur Bestimmung der Sprache existieren.

## Syntax

### Formale Syntax

```plain
:lang(<language-code> [,<language-code> ]*) {
  /* ... */
}
```

### Parameter

- `<language-code>`
  - : Eine durch Kommata getrennte Liste von einem oder mehreren {{cssxref("&lt;string&gt;")}}s, die ein Element mit einem Sprachwert gemäß [BCP 47](https://www.rfc-editor.org/info/bcp47)-Sprachcodes anvisieren.
    Die Übereinstimmung anhand des Sprachbereichs ist nicht groß-/kleinschreibungssensitiv.

## Beschreibung

Beim Selektieren von Sprachen gibt es ein implizites Wildcard-Matching, daher wird `:lang(de-DE)` mit `de-DE`, `de-DE-1996`, `de-Latn-DE`, `de-Latf-DE` und `de-Latn-DE-1996` übereinstimmen.
Die explizite Verwendung von Wildcards muss eine vollständige Übereinstimmung eines Sprachsubtags beinhalten, daher ist `:lang("*-F*")` ungültig, aber `:lang("*-Fr")` ist gültig.

## Beispiele

### Abgleichen von Kindern einer bestimmten Sprache

In diesem Beispiel wird die `:lang()`-Pseudoklasse verwendet, um die Eltern von Zitatelementen ({{htmlElement("q")}}) mithilfe von [Kindkombinatoren](/de/docs/Web/CSS/Child_combinator) abzugleichen. Beachten Sie, dass dies nicht die einzige Möglichkeit darstellt, dies zu tun, und dass die beste Methode von der Art des Dokuments abhängt. Beachten Sie auch, dass {{Glossary("Unicode", "Unicode")}}-Werte verwendet werden, um einige der speziellen Anführungszeichen zu spezifizieren.

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

### Abgleich mehrerer Sprachen

Das folgende Beispiel zeigt, wie mehrere Sprachen durch Bereitstellung einer durch Kommas getrennten Liste von Sprachcodes abgeglichen werden können.
Es ist auch möglich, ein Wildcard zu verwenden, um Sprachen in einem bestimmten Sprachbereich abzugleichen.

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

- Die {{cssxref(":dir")}}-Pseudoklasse, die nach Richtung des Textes selektiert
- HTML [`lang`](/de/docs/Web/HTML/Reference/Global_attributes/lang)-Attribut
- HTML [`translate`](/de/docs/Web/HTML/Reference/Global_attributes/translate)-Attribut
- {{RFC(5646, "Tags for Identifying Languages (also known as BCP 47)")}}
