---
title: "<sub>: Das Subskript-Element"
slug: Web/HTML/Element/sub
l10n:
  sourceCommit: 8b02826c79b090b5af0d68ae1ef39f932a66a7f1
---

{{HTMLSidebar}}

Das **`<sub>`** [HTML](/de/docs/Web/HTML)-Element spezifiziert Inline-Text, der aus rein typografischen Gründen als Subskript angezeigt werden soll. Subskripte werden typischerweise mit einer abgesenkten Grundlinie in kleinerer Schrift dargestellt.

{{InteractiveExample("HTML Demo: &lt;sub&gt;", "tabbed-shorter")}}

```html interactive-example
<p>
  Almost every developer's favorite molecule is
  C<sub>8</sub>H<sub>10</sub>N<sub>4</sub>O<sub>2</sub>, also known as
  "caffeine."
</p>
```

```css interactive-example
p {
  font:
    1rem "Fira Sans",
    sans-serif;
}
```

## Attribute

Dieses Element enthält nur die [globalen Attribute](/de/docs/Web/HTML/Global_attributes).

## Nutzungshinweise

Das `<sub>`-Element sollte nur aus typografischen Gründen verwendet werden, d. h. um die Position des Textes zu ändern, um typografische Konventionen oder Standards zu erfüllen, nicht nur aus visuellen Präsentationsgründen.

Zum Beispiel wäre es nicht angemessen, `<sub>` zu verwenden, um den Namen eines Unternehmens zu stylen, das in seinem [Wortmarke](https://en.wikipedia.org/wiki/Wordmark) veränderte Grundlinien verwendet; stattdessen sollte CSS verwendet werden. Zum Beispiel könnte man die {{cssxref("vertical-align")}}-Eigenschaft mit einer Deklaration wie `vertical-align: sub` verwenden oder, um den Basisschub genauer zu steuern, `vertical-align: -25%`.

Angemessene Anwendungsfälle für `<sub>` beinhalten (aber sind nicht unbedingt darauf beschränkt):

- Das Auszeichnen von Fußnotennummern. Siehe [Fußnotennummern](#fußnotennummern) für ein Beispiel.
- Das Auszeichnen des Subskripts bei mathematischen Variablennummern (obwohl Sie auch in Erwägung ziehen können, eine [MathML](/de/docs/Web/MathML)-Formel dafür zu verwenden). Siehe [Variable Subskripte](#variable_subskripte).
- Die Kennzeichnung der Anzahl von Atomen eines bestimmten Elements in einer chemischen Formel (wie z.B. der beste Freund jedes Entwicklers, C<sub>8</sub>H<sub>10</sub>N<sub>4</sub>O<sub>2</sub>, auch bekannt als "Koffein"). Siehe [Chemische Formeln](#chemische_formeln).

## Beispiele

### Fußnotennummern

Traditionelle Fußnoten werden durch Zahlen dargestellt, die als Subskript gerendert werden. Dies ist ein häufiger Anwendungsfall für `<sub>`:

```html
<p>
  According to the computations by Nakamura, Johnson, and Mason<sub>1</sub> this
  will result in the complete annihilation of both particles.
</p>
```

#### Ergebnis

{{EmbedLiveSample("Footnote_numbers", 650, 80)}}

### Variable Subskripte

In der Mathematik werden verwandte Variablenfamilien, die zum gleichen Konzept gehören (wie Entfernungen entlang derselben Achse), mit demselben Variablennamen mit einem folgenden Subskript dargestellt. Zum Beispiel:

```html-nolint
<p>
  The horizontal coordinates' positions along the X-axis are represented as
  <var>x<sub>1</sub></var> … <var>x<sub>n</sub></var>.
</p>
```

#### Ergebnis

{{EmbedLiveSample("Variable_subscripts", 650, 80)}}

### Chemische Formeln

Wenn Sie eine chemische Formel schreiben, wie z.B. H<sub>2</sub>O, wird die Anzahl der Atome eines bestimmten Elements in dem beschriebenen Molekül durch eine subskriptierte Zahl dargestellt; im Fall von Wasser zeigt das subskriptierte "2" an, dass es zwei Atome Wasserstoff im Molekül gibt.

Ein weiteres Beispiel:

```html
<p>
  Almost every developer's favorite molecule is
  C<sub>8</sub>H<sub>10</sub>N<sub>4</sub>O<sub>2</sub>, which is commonly known
  as "caffeine."
</p>
```

#### Ergebnis

{{EmbedLiveSample("Chemical_formulas", 650, 120)}}

## Technische Zusammenfassung

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/de/docs/Web/HTML/Content_categories"
          >Inhaltskategorien</a
        >
      </th>
      <td>
        <a href="/de/docs/Web/HTML/Content_categories#flow_content"
          >Flussinhalt</a
        >,
        <a href="/de/docs/Web/HTML/Content_categories#phrasing_content"
          >Phrasierungsinhalt</a
        >, greifbarer Inhalt.
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubter Inhalt</th>
      <td>
        <a href="/de/docs/Web/HTML/Content_categories#phrasing_content"
          >Phrasierungsinhalt</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>Keine, sowohl der Start- als auch der End-Tag sind obligatorisch.</td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Eltern</th>
      <td>
        Jedes Element, das
        <a href="/de/docs/Web/HTML/Content_categories#phrasing_content"
          >Phrasierungsinhalt</a
        > akzeptiert.
      </td>
    </tr>
    <tr>
      <th scope="row">Implizite ARIA-Rolle</th>
      <td>
        <code
          ><a href="/de/docs/Web/Accessibility/ARIA/Roles/structural_roles#structural_roles_with_html_equivalents">subscript</a
          ></code
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubte ARIA-Rollen</th>
      <td>Beliebige</td>
    </tr>
    <tr>
      <th scope="row">DOM-Schnittstelle</th>
      <td>[`HTMLElement`](/de/docs/Web/API/HTMLElement)</td>
    </tr>
  </tbody>
</table>

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Das {{HTMLElement("sup")}} HTML-Element, das einen Superskript erzeugt. Beachten Sie, dass Sie `sup` und `sub` nicht gleichzeitig verwenden können: Sie müssen [MathML](/de/docs/Web/MathML) verwenden, um sowohl einen Superskript direkt über einem Subskript neben dem chemischen Symbol eines Elements zu erzeugen, das seine Ordnungszahl und seine Kernzahl darstellt.
- Die [`<msub>`](/de/docs/Web/MathML/Element/msub), [`<msup>`](/de/docs/Web/MathML/Element/msup) und [`<msubsup>`](/de/docs/Web/MathML/Element/msubsup) MathML-Elemente.
- Die CSS-Eigenschaft {{cssxref("vertical-align")}}.
