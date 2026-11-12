---
title: "`:lang()`-CSS-Pseudoklasse"
short-title: :lang()
slug: Web/CSS/Reference/Selectors/:lang
l10n:
  sourceCommit: 7484d45816002fbf082a59c5d95c38a1eb2b2e4b
---

Die **`:lang()`**-[CSS](/de/docs/Web/CSS)-[Pseudoklasse](/de/docs/Web/CSS/Reference/Selectors/Pseudo-classes) wählt Elemente anhand der Sprache aus, die für sie ermittelt wurde.

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
> In HTML wird die Sprache anhand einer Kombination aus dem [`lang`](/de/docs/Web/HTML/Reference/Global_attributes/lang)-Attribut, dem {{HTMLElement("meta")}}-Element und möglicherweise Informationen aus dem Protokoll (z. B. HTTP-Headern) bestimmt. Bei anderen Dokumenttypen kann es andere Methoden zur Bestimmung der Sprache geben.

## Syntax

```plain
:lang(<language-code> [,<language-code> ]*) {
  /* ... */
}
```

### Parameter

- `<language-code>`
  - : Eine durch Kommas getrennte Liste aus einem oder mehreren {{cssxref("&lt;string&gt;")}}s, die Elemente anhand der in ihren [`lang`](/de/docs/Web/HTML/Reference/Global_attributes/lang)-Attributen festgelegten {{Glossary("BCP_47_language_tag", "BCP-47-Sprachtags")}} auswählen.
    Beim Abgleich von Sprachbereichen wird die Groß- und Kleinschreibung nicht berücksichtigt.

## Beschreibung

Bei der Auswahl von Sprachen werden Platzhalter implizit berücksichtigt. Daher stimmt `:lang(de-DE)` mit `de-DE`, `de-DE-1996`, `de-Latn-DE`, `de-Latf-DE` und `de-Latn-DE-1996` überein.
Bei der expliziten Verwendung von Platzhaltern muss ein Sprach-Subtag vollständig übereinstimmen. Deshalb ist `:lang("*-F*")` ungültig, `:lang("*-Fr")` dagegen gültig.

## Beispiele

### Kindelemente einer bestimmten Sprache auswählen

In diesem Beispiel wird die Pseudoklasse `:lang()` verwendet, um mithilfe von [Kind-Kombinatoren](/de/docs/Web/CSS/Reference/Selectors/Child_combinator) die Elternelemente von Zitatelementen ({{htmlElement("q")}}) auszuwählen. Dies ist nicht die einzige Möglichkeit. Welche Methode am besten geeignet ist, hängt vom Dokumenttyp ab. Beachten Sie außerdem, dass {{Glossary("Unicode", "Unicode")}}-Werte verwendet werden, um einige der besonderen Anführungszeichen anzugeben.

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

### Mehrere Sprachen auswählen

Das folgende Beispiel zeigt, wie Sie mehrere Sprachen auswählen, indem Sie eine durch Kommas getrennte Liste von Sprachcodes angeben.
Sie können auch einen Platzhalter verwenden, um Sprachen innerhalb eines bestimmten Sprachbereichs auszuwählen.

```css hidden
p {
  margin: 0;
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

#### Ergebnis

{{EmbedLiveSample('Matching_multiple_languages', '', '120')}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die Pseudoklasse {{cssxref(":dir")}}, die Elemente anhand der Textrichtung auswählt
- HTML-Attribut [`lang`](/de/docs/Web/HTML/Reference/Global_attributes/lang)
- HTML-Attribut [`translate`](/de/docs/Web/HTML/Reference/Global_attributes/translate)
- {{Glossary("BCP_47_language_tag", "BCP-47-Sprachtag")}}
