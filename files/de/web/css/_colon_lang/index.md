---
title: ":lang()"
slug: Web/CSS/:lang
l10n:
  sourceCommit: 4d51a212bfda5ce9978d162caf5532d155f7eb0a
---

{{CSSRef}}

Die **`:lang()`** [CSS](/de/docs/Web/CSS) [Pseudoklasse](/de/docs/Web/CSS/Pseudo-classes) wählt Elemente basierend auf ihrer bestimmten Sprache aus.

{{EmbedInteractiveExample("pages/tabbed/pseudo-class-function-lang.html", "tabbed-shorter")}}

> [!NOTE]
> In HTML wird die Sprache durch eine Kombination aus dem [`lang`](/de/docs/Web/HTML/Global_attributes/lang)-Attribut, dem {{HTMLElement("meta")}}-Element und möglicherweise durch Informationen aus dem Protokoll (wie HTTP-Header) bestimmt. Für andere Dokumenttypen können andere Methoden zur Bestimmung der Sprache genutzt werden.

## Syntax

### Formale Syntax

```plain
:lang(<language-code> [,<language-code> ]*)
  /* ... */
}
```

### Parameter

- `<language-code>`
  - : Eine durch Komma getrennte Liste von einem oder mehreren {{cssxref("&lt;string&gt;")}}, die ein Element mit einem Sprachwert gemäß [BCP 47](https://www.rfc-editor.org/info/bcp47)-Sprachcodes ansprechen.
    Die Übereinstimmung nach Sprachbereich erfolgt ohne Berücksichtigung der Groß- und Kleinschreibung.

## Beschreibung

Beim Auswählen von Sprachen gibt es ein implizites Wildcard-Matching. So wird `:lang(de-DE)` mit `de-DE`, `de-DE-1996`, `de-Latn-DE`, `de-Latf-DE` und `de-Latn-DE-1996` übereinstimmen.
Das explizite Verwenden von Wildcards erfordert eine vollständige Übereinstimmung eines Sprachsubtags. Daher ist `:lang("*-F*")` ungültig, aber `:lang("*-Fr")` ist gültig.

## Beispiele

### Übereinstimmen von untergeordneten Elementen einer bestimmten Sprache

In diesem Beispiel wird die `:lang()`-Pseudoklasse verwendet, um die Eltern von Zitat-Elementen ({{htmlElement("q")}}) mit [Kindkombinatoren](/de/docs/Web/CSS/Child_combinator) auszuwählen. Beachten Sie, dass dies nicht die einzige Möglichkeit ist, dies zu tun, und dass die beste Methode von der Art des Dokuments abhängt. Beachten Sie außerdem, dass {{Glossary("Unicode", "Unicode")}}-Werte verwendet werden, um einige der speziellen Anführungszeichen zu spezifizieren.

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

### Übereinstimmen mehrerer Sprachen

Das folgende Beispiel zeigt, wie mehrere Sprachen durch eine durch Komma getrennte Liste von Sprachcodes angesprochen werden können.
Es ist auch möglich, Wildcards zu nutzen, um Sprachen in einem bestimmten Sprachbereich abzugleichen.

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

- Die {{cssxref(":dir")}}-Pseudoklasse, die nach der Textausrichtung auswählt
- HTML-Attribut [`lang`](/de/docs/Web/HTML/Global_attributes/lang)
- HTML-Attribut [`translate`](/de/docs/Web/HTML/Global_attributes/translate)
- {{RFC(5646, "Tags for Identifying Languages (also known as BCP 47)")}}
