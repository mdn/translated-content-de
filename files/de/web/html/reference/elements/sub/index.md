---
title: "<sub>: Das Subskript-Element"
slug: Web/HTML/Reference/Elements/sub
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{HTMLSidebar}}

Das **`<sub>`** [HTML](/de/docs/Web/HTML)-Element spezifiziert Inline-Text, der aus rein typografischen Gründen als Subskript dargestellt werden sollte. Subskripte werden typischerweise mit einer tiefergelegten Basislinie und kleinerem Text dargestellt.

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

## Hinweise zur Verwendung

Das `<sub>`-Element sollte ausschließlich aus typografischen Gründen verwendet werden – das heißt, um die Position des Textes zu ändern und typografischen Konventionen oder Standards zu entsprechen, und nicht nur für Präsentations- oder Darstellungszwecke.

Zum Beispiel wäre es nicht angebracht `<sub>` zu verwenden, um den Namen eines Unternehmens zu stylen, das in seinem [Wortmarke](https://en.wikipedia.org/wiki/Wordmark) veränderte Basislinien nutzt; stattdessen sollte CSS verwendet werden. Zum Beispiel könnten Sie die {{cssxref("vertical-align")}}-Eigenschaft mit einer Deklaration wie `vertical-align: sub` oder, um die Basislinienverschiebung präziser zu steuern, `vertical-align: -25%` verwenden.

Geeignete Anwendungsfälle für `<sub>` umfassen (sind aber nicht unbedingt darauf beschränkt):

- Die Kennzeichnung von Fußnotennummern. Siehe [Fußnotennummern](#fußnotennummern) für ein Beispiel.
- Markierung der Indizes bei mathematischen Variablennummern (obwohl Sie in Betracht ziehen könnten, dafür eine [MathML](/de/docs/Web/MathML)-Formel zu verwenden). Siehe [Variable Indizes](#variable_indizes).
- Die Angabe der Anzahl von Atomen eines bestimmten Elements in einer chemischen Formel (wie zum Beispiel der beste Freund jedes Entwicklers, C<sub>8</sub>H<sub>10</sub>N<sub>4</sub>O<sub>2</sub>, allgemein bekannt als "Koffein"). Siehe [Chemische Formeln](#chemische_formeln).

## Beispiele

### Fußnotennummern

Traditionelle Fußnoten werden mit Zahlen gekennzeichnet, die als Subskript dargestellt werden. Dies ist ein häufiger Anwendungsfall für `<sub>`:

```html
<p>
  According to the computations by Nakamura, Johnson, and Mason<sub>1</sub> this
  will result in the complete annihilation of both particles.
</p>
```

#### Ergebnis

{{EmbedLiveSample("Footnote_numbers", 650, 80)}}

### Variable Indizes

In der Mathematik werden Familien von Variablen, die sich auf dasselbe Konzept beziehen (wie Entfernungen entlang derselben Achse), mit demselben Variablennamen mit einem folgenden Index bezeichnet. Zum Beispiel:

```html-nolint
<p>
  The horizontal coordinates' positions along the X-axis are represented as
  <var>x<sub>1</sub></var> … <var>x<sub>n</sub></var>.
</p>
```

#### Ergebnis

{{EmbedLiveSample("Variable_subscripts", 650, 80)}}

### Chemische Formeln

Beim Schreiben einer chemischen Formel, wie H<sub>2</sub>O, wird die Anzahl der Atome eines bestimmten Elements innerhalb des beschriebenen Moleküls durch eine hochgestellte Zahl dargestellt; im Fall von Wasser zeigt das hochgestellte "2", dass es zwei Wasserstoffatome im Molekül gibt.

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
        >, fassbarer Inhalt.
      </td>
    </tr>
    <tr>
      <th scope="row">Zulässiger Inhalt</th>
      <td>
        <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content"
          >Phrasierungsinhalt</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>Keine, sowohl das Start- als auch das End-Tag sind obligatorisch.</td>
    </tr>
    <tr>
      <th scope="row">Zulässige Eltern</th>
      <td>
        Jedes Element, das
        <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content"
          >Phrasierungsinhalt</a
        > akzeptiert.
      </td>
    </tr>
    <tr>
      <th scope="row">Implizite ARIA-Rolle</th>
      <td>
        <code
          ><a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/structural_roles#structural_roles_with_html_equivalents">subscript</a
          ></code
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Zulässige ARIA-Rollen</th>
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

- Das {{HTMLElement("sup")}} HTML-Element, das hochgestellten Text erzeugt. Beachten Sie, dass Sie nicht gleichzeitig `sup` und `sub` verwenden können: Sie müssen [MathML](/de/docs/Web/MathML) verwenden, um sowohl einen Hoch- als auch einen Tiefstapel direkt über einem Subskript neben dem chemischen Symbol eines Elements zu erzeugen, das seine Ordnungszahl und seine Kernzahl darstellt.
- Die [`<msub>`](/de/docs/Web/MathML/Reference/Element/msub), [`<msup>`](/de/docs/Web/MathML/Reference/Element/msup), und [`<msubsup>`](/de/docs/Web/MathML/Reference/Element/msubsup) MathML-Elemente.
- Die CSS {{cssxref("vertical-align")}}-Eigenschaft.
