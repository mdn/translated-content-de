---
title: "`<sub>` HTML-Tiefstellerelement"
short-title: <sub>
slug: Web/HTML/Reference/Elements/sub
l10n:
  sourceCommit: 599ae8b7ad414e91df473d91983f4ffc5cafabb3
---

Das **`<sub>`** [HTML](/de/docs/Web/HTML)-Element spezifiziert Inline-Text, der aus rein typografischen Gründen als Tiefstellung angezeigt werden soll. Tiefstellungen werden typischerweise mit einer abgesenkten Grundlinie und in kleinerer Schrift dargestellt.

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

## Nutzungshinweise

Das `<sub>`-Element sollte nur aus typografischen Gründen verwendet werden—d.h. um die Position des Textes zu ändern, um typografischen Konventionen oder Standards zu entsprechen, und nicht ausschließlich zu Präsentations- oder Erscheinungszwecken.

Zum Beispiel wäre es nicht angemessen, `<sub>` zu verwenden, um den Namen eines Unternehmens zu stylen, das in seinem [Wortmarke](https://en.wikipedia.org/wiki/Wordmark) veränderte Grundlinien verwendet; stattdessen sollte CSS verwendet werden. Sie könnten z. B. die {{cssxref("vertical-align")}}-Eigenschaft mit einer Deklaration wie `vertical-align: sub` verwenden oder, um die Grundlinienverschiebung präziser zu steuern, `vertical-align: -25%`.

Angemessene Anwendungsfälle für `<sub>` umfassen (sind aber nicht notwendigerweise darauf beschränkt):

- Die Kennzeichnung von Fußnotenzahlen. Siehe [Fußnotenzahlen](#fußnotenzahlen) für ein Beispiel.
- Die Kennzeichnung der Tiefstellung in mathematischen Variablennummern (obwohl Sie hierfür auch eine [MathML](/de/docs/Web/MathML)-Formel in Betracht ziehen könnten). Siehe [Variable Tiefstellungen](#variable_tiefstellungen).
- Die Angabe der Anzahl der Atome eines bestimmten Elements innerhalb einer chemischen Formel (wie etwa jedes Entwicklers bester Freund, C<sub>8</sub>H<sub>10</sub>N<sub>4</sub>O<sub>2</sub>, auch bekannt als "Koffein"). Siehe [Chemische Formeln](#chemische_formeln).

## Beispiele

### Fußnotenzahlen

Traditionelle Fußnoten werden durch Zahlen gekennzeichnet, die in Tiefstellung gerendert werden. Dies ist ein gängiger Anwendungsfall für `<sub>`:

```html
<p>
  According to the computations by Nakamura, Johnson, and Mason<sub>1</sub> this
  will result in the complete annihilation of both particles.
</p>
```

#### Ergebnis

{{EmbedLiveSample("Footnote_numbers", 650, 80)}}

### Variable Tiefstellungen

In der Mathematik werden Familien von Variablen, die mit demselben Konzept verbunden sind (wie Distanzen entlang derselben Achse), durch denselben Variablennamen mit nachfolgender Tiefstellung dargestellt. Zum Beispiel:

```html-nolint
<p>
  The horizontal coordinates' positions along the X-axis are represented as
  <var>x<sub>1</sub></var> … <var>x<sub>n</sub></var>.
</p>
```

#### Ergebnis

{{EmbedLiveSample("Variable_subscripts", 650, 80)}}

### Chemische Formeln

Beim Schreiben einer chemischen Formel, wie H<sub>2</sub>O, wird die Anzahl der Atome eines bestimmten Elements innerhalb des beschriebenen Moleküls durch eine tiefgestellte Zahl dargestellt; im Fall von Wasser zeigt die tiefgestellte "2" an, dass es zwei Wasserstoffatome im Molekül gibt.

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

## Technische Übersicht

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
          >Flussinhalt</a
        >,
        <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content"
          >Phrasierungsinhalt</a
        >, spürbarer Inhalt.
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
      <th scope="row">Tag-Auslassung</th>
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
      <th scope="row">Implizite ARIA-Rolle</th>
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

- Das {{HTMLElement("sup")}} HTML-Element, das Hochstellungen erzeugt. Beachten Sie, dass `sup` und `sub` nicht gleichzeitig verwendet werden können: Sie müssen [MathML](/de/docs/Web/MathML) verwenden, um sowohl eine Hochstellung direkt über einer Tiefstellung neben dem chemischen Symbol eines Elements zu erzeugen, das seine Ordnungszahl und seine Massenzahl darstellt.
- Die [`<msub>`](/de/docs/Web/MathML/Reference/Element/msub), [`<msup>`](/de/docs/Web/MathML/Reference/Element/msup) und [`<msubsup>`](/de/docs/Web/MathML/Reference/Element/msubsup) MathML-Elemente.
- Die CSS {{cssxref("vertical-align")}}-Eigenschaft.
