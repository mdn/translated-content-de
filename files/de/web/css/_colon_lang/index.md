---
title: ":lang()"
slug: Web/CSS/:lang
l10n:
  sourceCommit: 4ecbac9e89961a132c1e7f5493ec94f60dcb1ee4
---

{{CSSRef}}

Die **`:lang()`** [CSS](/de/docs/Web/CSS) [Pseudoklasse](/de/docs/Web/CSS/Pseudo-classes) wählt Elemente basierend auf der Sprache aus, in der sie bestimmt werden.

{{EmbedInteractiveExample("pages/tabbed/pseudo-class-function-lang.html", "tabbed-shorter")}}

> [!NOTE]
> In HTML wird die Sprache durch eine Kombination des [`lang`](/de/docs/Web/HTML/Global_attributes#lang)-Attributs, des {{HTMLElement("meta")}}-Elements und möglicherweise durch Informationen aus dem Protokoll (wie HTTP-Header) bestimmt. Für andere Dokumenttypen können andere Dokumentmethoden zur Bestimmung der Sprache verwendet werden.

## Syntax

### Formale Syntax

```plain
:lang(<language-code> [,<language-code> ]*)
  /* ... */
}
```

### Parameter

- `<language-code>`
  - : Eine kommagetrennte Liste von einem oder mehreren {{cssxref("&lt;string&gt;")}}s, die ein Element mit einem Sprachwert entsprechend den [BCP 47](https://www.rfc-editor.org/info/bcp47) Sprachcodes ansprechen. Das Abgleichen anhand des Sprachbereichs ist nicht zwischen Groß- und Kleinschreibung unterscheidend.

## Beschreibung

Beim Auswählen von Sprachen gibt es ein implizites Wildcard-Matching, daher passt `:lang(de-DE)` zu `de-DE`, `de-DE-1996`, `de-Latn-DE`, `de-Latf-DE` und `de-Latn-DE-1996`.
Die explizite Verwendung von Wildcards muss einen vollständigen Übereinstimmung eines Sprachuntertags beinhalten, daher ist `:lang("*-F*")` ungültig, aber `:lang("*-Fr")` ist gültig.

## Beispiele

### Übereinstimmung von Kindern einer bestimmten Sprache

In diesem Beispiel wird die `:lang()` Pseudoklasse verwendet, um die Eltern von Zitatelementen ({{htmlElement("q")}}) unter Verwendung von [Kind-Kombinatoren](/de/docs/Web/CSS/Child_combinator) abzugleichen. Beachten Sie, dass dies nicht den einzigen Weg illustriert, dies zu tun, und dass die beste Methode von der Art des Dokuments abhängt. Beachten Sie auch, dass [Unicode](/de/docs/Glossary/Unicode)-Werte verwendet werden, um einige der speziellen Anführungszeichenzeichen zu spezifizieren.

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

Das folgende Beispiel zeigt, wie man mehrere Sprachen abgleicht, indem man eine kommagetrennte Liste von Sprachcodes angibt.
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

- Die {{cssxref(":dir")}} Pseudoklasse, die nach der Textausrichtung abgleicht
- HTML [`lang`](/de/docs/Web/HTML/Global_attributes#lang) Attribut
- HTML [`translate`](/de/docs/Web/HTML/Global_attributes#translate) Attribut
- {{RFC(5646, "Tags for Identifying Languages (also known as BCP 47)")}}
