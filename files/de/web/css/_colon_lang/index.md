---
title: ":lang()"
slug: Web/CSS/:lang
l10n:
  sourceCommit: 33a12980eb49cc795a41f15ec7a0181270ad3048
---

{{CSSRef}}

Die **`:lang()`** [CSS](/de/docs/Web/CSS) [Pseudoklasse](/de/docs/Web/CSS/Pseudo-classes) ermöglicht es, Elemente basierend auf der festgestellten Sprache zu selektieren.

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
> In HTML wird die Sprache durch eine Kombination aus dem [`lang`](/de/docs/Web/HTML/Global_attributes/lang)-Attribut, dem {{HTMLElement("meta")}}-Element und eventuell durch Informationen aus dem Protokoll (wie HTTP-Header) bestimmt. Für andere Dokumenttypen können andere Methoden zur Bestimmung der Sprache verwendet werden.

## Syntax

### Formale Syntax

```plain
:lang(<language-code> [,<language-code> ]*)
  /* ... */
}
```

### Parameter

- `<language-code>`
  - : Eine durch Kommas getrennte Liste von einem oder mehreren {{cssxref("&lt;string&gt;")}}s, die ein Element mit einem Sprachwert gemäß der [BCP 47](https://www.rfc-editor.org/info/bcp47)-Sprachcodes ansprechen. Das Matching nach Sprachbereich ist nicht groß-/kleinschreibungssensitiv.

## Beschreibung

Beim Auswählen von Sprachen gibt es ein implizites Wildcard-Matching, sodass `:lang(de-DE)` sowohl `de-DE` als auch `de-DE-1996`, `de-Latn-DE`, `de-Latf-DE` und `de-Latn-DE-1996` abdeckt.
Das explizite Verwenden von Wildcards muss ein vollständiges Matching eines Sprachsubtags beinhalten, daher ist `:lang("*-F*")` ungültig, aber `:lang("*-Fr")` ist gültig.

## Beispiele

### Übereinstimmung von Kindern einer bestimmten Sprache

In diesem Beispiel wird die `:lang()` Pseudoklasse verwendet, um die Eltern von Quote-Elementen ({{htmlElement("q")}}) mit [Kind-Kombinatoren](/de/docs/Web/CSS/Child_combinator) zu selektieren. Beachten Sie, dass dies nicht die einzige Methode zur Erreichung dieses Ziels ist und die beste Methode vom Dokumenttyp abhängt. Beachten Sie auch, dass {{Glossary("Unicode", "Unicode")}}-Werte verwendet werden, um einige der speziellen Anführungszeichen zu spezifizieren.

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

Das folgende Beispiel zeigt, wie mehrere Sprachen durch Bereitstellung einer durch Kommas getrennten Liste von Sprachcodes selektiert werden können.
Es ist auch möglich, ein Wildcard zu verwenden, um Sprachen in einem bestimmten Sprachbereich zu selektieren.

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
- HTML [`lang`](/de/docs/Web/HTML/Global_attributes/lang)-Attribut
- HTML [`translate`](/de/docs/Web/HTML/Global_attributes/translate)-Attribut
- {{RFC(5646, "Tags for Identifying Languages (auch bekannt als BCP 47)")}}
