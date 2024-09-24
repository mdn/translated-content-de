---
title: ":lang()"
slug: Web/CSS/:lang
l10n:
  sourceCommit: 5026c14bd6d2b6b377289aadac7eceae9282e806
---

{{CSSRef}}

Die **`:lang()`** [CSS](/de/docs/Web/CSS) [Pseudo-Klasse](/de/docs/Web/CSS/Pseudo-classes) wählt Elemente basierend auf der Sprache aus, in der sie bestimmt sind.

{{EmbedInteractiveExample("pages/tabbed/pseudo-class-function-lang.html", "tabbed-shorter")}}

> [!NOTE]
> In HTML wird die Sprache durch eine Kombination des [`lang`](/de/docs/Web/HTML/Global_attributes/lang)-Attributs, des {{HTMLElement("meta")}}-Elements und möglicherweise durch Informationen aus dem Protokoll (wie HTTP-Header) bestimmt. Für andere Dokumenttypen gibt es möglicherweise andere Methoden zur Bestimmung der Sprache.

## Syntax

### Formale Syntax

```plain
:lang(<language-code> [,<language-code> ]*)
  /* ... */
}
```

### Parameter

- `<language-code>`
  - : Eine kommagetrennte Liste von einem oder mehreren {{cssxref("&lt;string&gt;")}}-Werten, die ein Element mit einem Sprachwert gemäß den [BCP 47](https://www.rfc-editor.org/info/bcp47)-Sprachcodes ansprechen.
    Das Matching nach Sprachbereich erfolgt ohne Berücksichtigung der Groß-/Kleinschreibung.

## Beschreibung

Beim Auswählen von Sprachen gibt es implizites Wildcard-Matching, sodass `:lang(de-DE)` `de-DE`, `de-DE-1996`, `de-Latn-DE`, `de-Latf-DE` und `de-Latn-DE-1996` trifft. Das explizite Verwenden von Wildcards muss eine vollständige Übereinstimmung eines Sprachsubtags umfassen, daher ist `:lang("*-F*")` ungültig, aber `:lang("*-Fr")` ist gültig.

## Beispiele

### Übereinstimmung von Kindern einer bestimmten Sprache

In diesem Beispiel wird die `:lang()`-Pseudo-Klasse verwendet, um die Eltern von Zitatelementen ({{htmlElement("q")}}) mit [Kind-Kombinatoren](/de/docs/Web/CSS/Child_combinator) abzugleichen. Beachten Sie, dass dies nicht die einzige Möglichkeit ist, dies zu tun, und dass die beste Methode je nach Dokumenttyp variiert. Beachten Sie auch, dass {{Glossary("Unicode", "Unicode")}}-Werte verwendet werden, um einige der speziellen Anführungszeichen anzugeben.

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

Das folgende Beispiel zeigt, wie man mehrere Sprachen durch Angabe einer kommagetrennten Liste von Sprachcodes abgleicht. Es ist auch möglich, ein Wildcard zu verwenden, um Sprachen in einem bestimmten Sprachbereich abzugleichen.

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

- Die {{cssxref(":dir")}} Pseudo-Klasse, die nach der Richtung des Textes abgleicht
- HTML [`lang`](/de/docs/Web/HTML/Global_attributes/lang)-Attribut
- HTML [`translate`](/de/docs/Web/HTML/Global_attributes/translate)-Attribut
- {{RFC(5646, "Tags for Identifying Languages (also known as BCP 47)")}}
