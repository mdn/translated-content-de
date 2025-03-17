---
title: "<sub>: Das Subskript-Element"
slug: Web/HTML/Element/sub
l10n:
  sourceCommit: c263f06fa14ed56153e345006bb459c9df014b98
---

{{HTMLSidebar}}

Das **`<sub>`** [HTML](/de/docs/Web/HTML) Element spezifiziert Inline-Text, der aus rein typografischen Gründen als Subskript angezeigt werden soll. Subskripte werden normalerweise mit einer abgesenkten Grundlinie unter Verwendung kleinerer Schrift gerendert.

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

Dieses Element umfasst nur die [globalen Attribute](/de/docs/Web/HTML/Global_attributes).

## Anwendungshinweise

Das `<sub>`-Element sollte nur aus typografischen Gründen verwendet werden, d.h. um die Position des Textes zu ändern, um typografischen Konventionen oder Standards zu entsprechen, und nicht nur aus Präsentations- oder Erscheinungsgründen.

Zum Beispiel wäre es unangemessen, `<sub>` zu verwenden, um den Namen eines Unternehmens zu gestalten, das in seinem [Wortmarke](https://en.wikipedia.org/wiki/Wordmark) veränderte Baselines verwendet; stattdessen sollte CSS verwendet werden. Sie könnten zum Beispiel die Eigenschaft {{cssxref("vertical-align")}} mit einer Deklaration wie `vertical-align: sub` oder zur genaueren Kontrolle der Baseline-Verschiebung `vertical-align: -25%` verwenden.

Geeignete Anwendungsfälle für `<sub>` umfassen (sind aber nicht unbedingt beschränkt auf):

- Markierung von Fußnotennummern. Siehe [Fußnotennummern](#fußnotennummern) für ein Beispiel.
- Markierung des Subskripts in mathematischen Variablennummern (Sie könnten dafür auch eine [MathML](/de/docs/Web/MathML) Formel verwenden). Siehe [Variable Subskripte](#variable_subskripte).
- Angabe der Anzahl von Atomen eines bestimmten Elements innerhalb einer chemischen Formel (wie z.B. der beste Freund jedes Entwicklers, C<sub>8</sub>H<sub>10</sub>N<sub>4</sub>O<sub>2</sub>, auch bekannt als "Koffein"). Siehe [Chemische Formeln](#chemische_formeln).

## Beispiele

### Fußnotennummern

Traditionelle Fußnoten werden durch Zahlen dargestellt, die im Subskript gerendert sind. Dies ist ein häufiger Anwendungsfall für `<sub>`:

```html
<p>
  According to the computations by Nakamura, Johnson, and Mason<sub>1</sub> this
  will result in the complete annihilation of both particles.
</p>
```

#### Ergebnis

{{EmbedLiveSample("Footnote_numbers", 650, 80)}}

### Variable Subskripte

In der Mathematik werden Familien von Variablen, die sich auf dasselbe Konzept beziehen (wie Entfernungen entlang derselben Achse), durch denselben Variablennamen mit einem folgenden Subskript dargestellt. Zum Beispiel:

```html-nolint
<p>
  The horizontal coordinates' positions along the X-axis are represented as
  <var>x<sub>1</sub></var> … <var>x<sub>n</sub></var>.
</p>
```

#### Ergebnis

{{EmbedLiveSample("Variable_subscripts", 650, 80)}}

### Chemische Formeln

Beim Schreiben einer chemischen Formel wie H<sub>2</sub>O wird die Anzahl der Atome eines bestimmten Elements innerhalb des beschriebenen Moleküls mit einer subskribierten Zahl dargestellt; im Falle von Wasser zeigt die subskribierte "2" an, dass es zwei Wasserstoffatome im Molekül gibt.

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
          >Fließender Inhalt</a
        >,
        <a href="/de/docs/Web/HTML/Content_categories#phrasing_content"
          >Phrasing-Inhalt</a
        >, fühlbarer Inhalt.
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubter Inhalt</th>
      <td>
        <a href="/de/docs/Web/HTML/Content_categories#phrasing_content"
          >Phrasing-Inhalt</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Tag-Aussparung</th>
      <td>Keine, sowohl das Start- als auch das End-Tag sind obligatorisch.</td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Eltern</th>
      <td>
        Jedes Element, das
        <a href="/de/docs/Web/HTML/Content_categories#phrasing_content"
          >Phrasing-Inhalt</a
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

- Das {{HTMLElement("sup")}} HTML-Element, das Superscript erzeugt. Beachten Sie, dass Sie `sup` und `sub` nicht gleichzeitig verwenden können: Sie müssen [MathML](/de/docs/Web/MathML) verwenden, um ein Superscript direkt über einem Subscript neben dem chemischen Symbol eines Elements darzustellen, das seine Ordnungszahl und seine Kernladungszahl repräsentiert.
- Die [`<msub>`](/de/docs/Web/MathML/Reference/Element/msub), [`<msup>`](/de/docs/Web/MathML/Reference/Element/msup) und [`<msubsup>`](/de/docs/Web/MathML/Reference/Element/msubsup) MathML-Elemente.
- Die CSS-Eigenschaft {{cssxref("vertical-align")}}.
