---
title: :lang()
slug: Web/CSS/:lang
l10n:
  sourceCommit: e7bc0ed5466f5834641d75d416fa81886cf6b37e
---

Die **`:lang()`** [CSS](/de/docs/Web/CSS) [Pseudoklasse](/de/docs/Web/CSS/Pseudo-classes) wählt Elemente basierend auf der Sprache aus, die ihnen zugeordnet wurde.

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
> In HTML wird die Sprache durch eine Kombination des [`lang`](/de/docs/Web/HTML/Reference/Global_attributes/lang)-Attributs, des {{HTMLElement("meta")}}-Elements und möglicherweise von Protokollinformationen (wie HTTP-Header) bestimmt. Für andere Dokumenttypen können andere Methoden zur Bestimmung der Sprache verwendet werden.

## Syntax

```plain
:lang(<language-code> [,<language-code> ]*) {
  /* ... */
}
```

### Parameter

- `<language-code>`
  - : Eine durch Kommas getrennte Liste von einem oder mehreren {{cssxref("&lt;string&gt;")}}s, die Elemente basierend auf den {{Glossary("BCP_47_language_tag", "BCP 47 Sprach-Tags")}} in ihren [`lang`](/de/docs/Web/HTML/Reference/Global_attributes/lang)-Attributen anvisieren.
    Das Matching der Sprachbereiche erfolgt ohne Berücksichtigung der Groß- und Kleinschreibung.

## Beschreibung

Beim Auswählen von Sprachen erfolgt eine implizite Platzhalterübereinstimmung, daher wird `:lang(de-DE)` mit `de-DE`, `de-DE-1996`, `de-Latn-DE`, `de-Latf-DE` und `de-Latn-DE-1996` übereinstimmen.
Bei expliziter Verwendung von Platzhaltern muss ein vollständiger Abgleich eines Sprachsubtags erfolgen, daher ist `:lang("*-F*")` ungültig, aber `:lang("*-Fr")` ist zulässig.

## Beispiele

### Übereinstimmung von untergeordneten Elementen einer bestimmten Sprache

In diesem Beispiel wird die `:lang()`-Pseudoklasse verwendet, um die Eltern von Zitatelementen ({{htmlElement("q")}}) mit [Kindkombinatoren](/de/docs/Web/CSS/Child_combinator) auszuwählen. Beachten Sie, dass dies nicht die einzige Möglichkeit darstellt, dies zu tun, und dass die beste Methode von der Art des Dokuments abhängt. Beachten Sie auch, dass {{Glossary("Unicode", "Unicode")}}-Werte verwendet werden, um einige der speziellen Anführungszeichen zu spezifizieren.

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

Das folgende Beispiel zeigt, wie mehrere Sprachen durch Bereitstellung einer durch Kommas getrennten Liste von Sprachcodes übereinstimmen können.
Es ist außerdem möglich, mit einem Platzhalter Sprachen in einem bestimmten Sprachbereich abzugleichen.

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

- Die {{cssxref(":dir")}} Pseudoklasse, die nach Textausrichtung übereinstimmt
- HTML [`lang`](/de/docs/Web/HTML/Reference/Global_attributes/lang) Attribut
- HTML [`translate`](/de/docs/Web/HTML/Reference/Global_attributes/translate) Attribut
- {{Glossary("BCP_47_language_tag", "BCP 47 Sprach-Tag")}}
