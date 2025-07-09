---
title: "<sub>: Das Subscript-Element"
slug: Web/HTML/Reference/Elements/sub
l10n:
  sourceCommit: 0754cd805a8e010d2e3a2a065f634a3bcf358252
---

Das **`<sub>`** [HTML](/de/docs/Web/HTML)-Element spezifiziert Inline-Text, der aus rein typografischen Gründen als Subscript dargestellt werden soll. Subscripts werden typischerweise mit einer abgesenkten Basislinie und kleinerem Text dargestellt.

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

Dieses Element enthält nur die [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes).

## Verwendungshinweise

Das `<sub>`-Element sollte nur aus typografischen Gründen verwendet werden, das heißt, um die Position des Textes zu ändern, um typografischen Konventionen oder Standards zu entsprechen, statt ausschließlich zu Präsentations- oder Erscheinungszwecken.

Zum Beispiel wäre die Verwendung von `<sub>`, um den Namen eines Unternehmens zu stylen, das veränderte Basislinien in seinem [Wortmarke](https://en.wikipedia.org/wiki/Wordmark) verwendet, nicht geeignet; stattdessen sollte CSS verwendet werden. Zum Beispiel könnten Sie die {{cssxref("vertical-align")}}-Eigenschaft mit einer Deklaration wie `vertical-align: sub` nutzen oder, um den Baselineshift genauer zu kontrollieren, `vertical-align: -25%`.

Angemessene Anwendungsfälle für `<sub>` umfassen (sind aber nicht unbedingt darauf beschränkt):

- Die Markierung von Fußnotennummern. Siehe [Fußnotennummern](#fußnotennummern) für ein Beispiel.
- Die Markierung des Subscripts in mathematischen Variablenzahlen (obwohl Sie hierfür auch eine [MathML](/de/docs/Web/MathML)-Formel in Betracht ziehen können). Siehe [Variable Subscripts](#variable_subscripts).
- Die Angabe der Anzahl der Atome eines bestimmten Elements innerhalb einer chemischen Formel (wie zum Beispiel Koffein, C<sub>8</sub>H<sub>10</sub>N<sub>4</sub>O<sub>2</sub>). Siehe [Chemische Formeln](#chemische_formeln).

## Beispiele

### Fußnotennummern

Traditionelle Fußnoten werden durch Zahlen, die im Subscript gerendert werden, gekennzeichnet. Dies ist ein häufiger Anwendungsfall für `<sub>`:

```html
<p>
  According to the computations by Nakamura, Johnson, and Mason<sub>1</sub> this
  will result in the complete annihilation of both particles.
</p>
```

#### Ergebnis

{{EmbedLiveSample("Footnote_numbers", 650, 80)}}

### Variable Subscripts

In der Mathematik werden Familien von Variablen, die sich auf dasselbe Konzept beziehen (wie Abstände entlang derselben Achse), mit demselben Variablennamen dargestellt, gefolgt von einem Subscript. Zum Beispiel:

```html-nolint
<p>
  The horizontal coordinates' positions along the X-axis are represented as
  <var>x<sub>1</sub></var> … <var>x<sub>n</sub></var>.
</p>
```

#### Ergebnis

{{EmbedLiveSample("Variable_subscripts", 650, 80)}}

### Chemische Formeln

Beim Schreiben einer chemischen Formel, wie H<sub>2</sub>O, wird die Anzahl der Atome eines bestimmten Elements innerhalb des beschriebenen Moleküls durch eine subskriptierte Zahl dargestellt; im Fall von Wasser gibt die subskribierte "2" an, dass es zwei Wasserstoffatome im Molekül gibt.

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
        <a href="/de/docs/Web/HTML/Guides/Content_categories">Inhaltskategorien</a>
      </th>
      <td>
        <a href="/de/docs/Web/HTML/Guides/Content_categories#flow_content">Flussinhalt</a>,
        <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content">Phraseninhalt</a>, greifbarer Inhalt.
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubter Inhalt</th>
      <td>
        <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content">Phraseninhalt</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>Keine, sowohl das Start- als auch das End-Tag sind obligatorisch.</td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Elternteile</th>
      <td>
        Jedes Element, das <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content">Phraseninhalt</a> akzeptiert.
      </td>
    </tr>
    <tr>
      <th scope="row">Implizierte ARIA-Rolle</th>
      <td>
        <code><a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/structural_roles#structural_roles_with_html_equivalents">subscript</a></code>
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubte ARIA-Rollen</th>
      <td>Beliebig</td>
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

- Das {{HTMLElement("sup")}} HTML-Element, das ein Superscript produziert. Beachten Sie, dass Sie `sup` und `sub` nicht gleichzeitig verwenden können: Sie müssen [MathML](/de/docs/Web/MathML) verwenden, um sowohl ein Superscript direkt über einem Subscript neben dem chemischen Symbol eines Elements zu erzeugen, das seine Atom- und Kernzahl darstellt.
- Die [`<msub>`](/de/docs/Web/MathML/Reference/Element/msub), [`<msup>`](/de/docs/Web/MathML/Reference/Element/msup), und [`<msubsup>`](/de/docs/Web/MathML/Reference/Element/msubsup) MathML-Elemente.
- Die CSS-Eigenschaft {{cssxref("vertical-align")}}.
