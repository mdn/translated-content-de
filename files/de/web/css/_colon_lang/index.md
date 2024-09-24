---
title: ":lang()"
slug: Web/CSS/:lang
l10n:
  sourceCommit: 4ecbac9e89961a132c1e7f5493ec94f60dcb1ee4
---

{{CSSRef}}

Die **`:lang()`** [CSS](/de/docs/Web/CSS) [Pseudoklasse](/de/docs/Web/CSS/Pseudo-classes) selektiert Elemente basierend auf der Sprache, in der sie bestimmt wurden.

{{EmbedInteractiveExample("pages/tabbed/pseudo-class-function-lang.html", "tabbed-shorter")}}

> [!NOTE]
> In HTML wird die Sprache durch eine Kombination aus dem [`lang`](/de/docs/Web/HTML/Global_attributes#lang)-Attribut, dem {{HTMLElement("meta")}}-Element und möglicherweise durch Informationen aus dem Protokoll (wie HTTP-Header) bestimmt. Für andere Dokumenttypen können es andere Methoden zur Bestimmung der Sprache geben.

## Syntax

### Formale Syntax

```plain
:lang(<language-code> [,<language-code> ]*)
  /* ... */
}
```

### Parameter

- `<language-code>`
  - : Eine durch Kommas getrennte Liste von einem oder mehreren {{cssxref("&lt;string&gt;")}}s, die ein Element mit einem Sprachwert gemäß [BCP 47](https://www.rfc-editor.org/info/bcp47)-Sprachcodes ansprechen.
    Die Übereinstimmung bei Sprachbereichen ist nicht case-sensitiv.

## Beschreibung

Beim Auswählen von Sprachen gibt es eine implizite Wildcard-Übereinstimmung, sodass `:lang(de-DE)` mit `de-DE`, `de-DE-1996`, `de-Latn-DE`, `de-Latf-DE` und `de-Latn-DE-1996` übereinstimmen wird.
Bei expliziter Verwendung von Wildcards muss eine vollständige Übereinstimmung eines Sprach-Subtags vorhanden sein, daher ist `:lang("*-F*")` ungültig, aber `:lang("*-Fr")` ist gültig.

## Beispiele

### Übereinstimmen von Kindern einer bestimmten Sprache

In diesem Beispiel wird die `:lang()`-Pseudoklasse verwendet, um die Eltern von Zitatelementen ({{htmlElement("q")}}) mit [Kind-Kombinatoren](/de/docs/Web/CSS/Child_combinator) zu selektieren. Beachten Sie, dass dies nicht die einzige Möglichkeit ist, dies zu tun, und dass die beste Methode von der Art des Dokuments abhängt. Beachten Sie auch, dass {{glossary("Unicode")}}-Werte verwendet werden, um einige der speziellen Anführungszeichensymbole anzugeben.

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

Das folgende Beispiel zeigt, wie mehrere Sprachen durch Angabe einer kommagetrennten Liste von Sprachcodes übereinstimmen. Es ist auch möglich, einen Wildcard zu verwenden, um Sprachen innerhalb eines bestimmten Sprachbereichs abzugleichen.

```css hidden
p {
  margin: 0;
}
```

#### CSS

```css
/* Übereinstimmt mit nl und de */
:lang("nl", "de") {
  color: green;
}

/* Auslassen von Anführungszeichen & Groß-/Kleinschreibung-inegalen Übereinstimmung */
:lang(EN, FR) {
  color: blue;
}

/* Wildcard-Abgleich eines Sprachbereichs */
:lang("*-Latn") {
  color: red;
}
```

#### HTML

```html
<p lang="nl">Dit is een Nederlandse paragraaf.</p>
<p lang="de">Dies ist ein deutscher Satz.</p>
<p lang="en">This is an English sentence.</p>
<p lang="en-GB">Übereinstimmung des Sprachbereichs von Englisch.</p>
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

- Die {{cssxref(":dir")}} Pseudoklasse, die anhand der Textrichtung übereinstimmt
- HTML [`lang`](/de/docs/Web/HTML/Global_attributes#lang) Attribut
- HTML [`translate`](/de/docs/Web/HTML/Global_attributes#translate) Attribut
- {{RFC(5646, "Tags for Identifying Languages (also known as BCP 47)")}}
