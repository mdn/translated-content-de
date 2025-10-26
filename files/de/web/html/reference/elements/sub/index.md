---
title: "<sub>: Das Subscript-Element"
slug: Web/HTML/Reference/Elements/sub
l10n:
  sourceCommit: b9acb5397cf8e07966b1757a857e5000a009b04e
---

Das **`<sub>`** [HTML](/de/docs/Web/HTML)-Element spezifiziert Inline-Text, der aus rein typografischen Gründen als Subscript angezeigt werden soll. Subscripts werden typischerweise mit einer abgesenkten Grundlinie und kleinerem Text dargestellt.

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

Dieses Element umfasst nur die [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes).

## Verwendungshinweise

Das `<sub>`-Element sollte nur aus typografischen Gründen verwendet werden, um die Position des Textes gemäß typografischen Konventionen oder Standards zu ändern, und nicht nur für Präsentations- oder Darstellungszwecke.

Beispielsweise wäre es unangemessen, `<sub>` zu verwenden, um den Namen eines Unternehmens zu gestalten, welches eine veränderte Grundlinie in seinem [Wortmarke](https://en.wikipedia.org/wiki/Wordmark) verwendet; stattdessen sollte CSS verwendet werden. Sie könnten beispielsweise die {{cssxref("vertical-align")}}-Eigenschaft mit einer Deklaration wie `vertical-align: sub` oder, um die Baseline-Verschiebung genauer zu steuern, `vertical-align: -25%` verwenden.

Geeignete Anwendungsfälle für `<sub>` umfassen (sind aber nicht unbedingt auf Folgendes beschränkt):

- Markierung von Fußnotennummern. Siehe [Fußnotennummern](#fußnotennummern) für ein Beispiel.
- Markierung des Subscripts in mathematischen Variablennummern (obwohl Sie auch erwägen könnten, eine [MathML](/de/docs/Web/MathML)-Formel hierfür zu verwenden). Siehe [Variable Subscripts](#variable_subscriptions).
- Bezeichnung der Anzahl von Atomen eines bestimmten Elements innerhalb einer chemischen Formel (wie der beste Freund eines jeden Entwicklers, C<sub>8</sub>H<sub>10</sub>N<sub>4</sub>O<sub>2</sub>, auch bekannt als "Koffein"). Siehe [Chemische Formeln](#chemische_formeln).

## Beispiele

### Fußnotennummern

Traditionelle Fußnoten werden durch Zahlen gekennzeichnet, die im Subscript dargestellt werden. Dies ist ein üblicher Anwendungsfall für `<sub>`:

```html
<p>
  According to the computations by Nakamura, Johnson, and Mason<sub>1</sub> this
  will result in the complete annihilation of both particles.
</p>
```

#### Ergebnis

{{EmbedLiveSample("Footnote_numbers", 650, 80)}}

### Variable Subscriptions

In der Mathematik werden Familien von Variablen, die sich auf dasselbe Konzept beziehen (wie Entfernungen entlang derselben Achse), mit demselben Variablennamen und einem folgenden Subscript dargestellt. Zum Beispiel:

```html-nolint
<p>
  The horizontal coordinates' positions along the X-axis are represented as
  <var>x<sub>1</sub></var> … <var>x<sub>n</sub></var>.
</p>
```

#### Ergebnis

{{EmbedLiveSample("Variable_subscripts", 650, 80)}}

### Chemische Formeln

Beim Schreiben einer chemischen Formel, wie H<sub>2</sub>O, wird die Anzahl von Atomen eines bestimmten Elements innerhalb des beschriebenen Moleküls durch eine subscripte Zahl dargestellt; im Fall von Wasser zeigt die subscripte "2" an, dass zwei Atome Wasserstoff im Molekül vorhanden sind.

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
        <a href="/de/docs/Web/HTML/Guides/Content_categories"
          >Inhaltskategorien</a
        >
      </th>
      <td>
        <a href="/de/docs/Web/HTML/Guides/Content_categories#flow_content"
          >Fließender Inhalt</a
        >,
        <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content"
          >Phrasierungsinhalt</a
        >, wahrnehmbarer Inhalt.
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubter Inhalt</th>
      <td>
        <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content"
          >Phrasierungsinhalt</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Tag-Weglassung</th>
      <td>Keine, sowohl das öffnende als auch das schließende Tag sind erforderlich.</td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Eltern</th>
      <td>
        Jedes Element, das
        <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content"
          >Phrasierungsinhalt</a
        > akzeptiert.
      </td>
    </tr>
    <tr>
      <th scope="row">Implizierte ARIA-Rolle</th>
      <td>
        <code
          ><a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/structural_roles#structural_roles_with_html_equivalents">subscript</a
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

- Das {{HTMLElement("sup")}} HTML-Element, das Superscript erzeugt. Beachten Sie, dass Sie `sup` und `sub` nicht gleichzeitig verwenden können: Sie müssen [MathML](/de/docs/Web/MathML) verwenden, um sowohl ein Superscript direkt über einem Subscript neben dem chemischen Symbol eines Elements zu erzeugen, welches seine Ordnungszahl und seine Kernladungszahl darstellt.
- Die [`<msub>`](/de/docs/Web/MathML/Reference/Element/msub), [`<msup>`](/de/docs/Web/MathML/Reference/Element/msup) und [`<msubsup>`](/de/docs/Web/MathML/Reference/Element/msubsup) MathML-Elemente.
- Die CSS {{cssxref("vertical-align")}}-Eigenschaft.
