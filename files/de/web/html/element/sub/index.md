---
title: "<sub>: Das Subscript-Element"
slug: Web/HTML/Element/sub
l10n:
  sourceCommit: 2efdf13735ef976b441b7f32e50058bc5419c1c3
---

{{HTMLSidebar}}

Das **`<sub>`** [HTML](/de/docs/Web/HTML)-Element definiert eingebundenen Text, der aus rein typografischen Gründen als Subscript dargestellt werden soll. Subscripte werden typischerweise mit einer abgesenkten Grundlinie unter Verwendung kleinerer Schrift gerendert.

{{EmbedInteractiveExample("pages/tabbed/sub.html", "tabbed-shorter")}}

## Attribute

Dieses Element enthält nur die [globalen Attribute](/de/docs/Web/HTML/Global_attributes).

## Verwendungshinweise

Das `<sub>`-Element sollte nur aus typografischen Gründen verwendet werden – das bedeutet, um die Position des Textes zu ändern, um typografische Konventionen oder Standards einzuhalten, und nicht nur zu Präsentations- oder Darstellungszwecken.

Zum Beispiel wäre es nicht angemessen, `<sub>` zu verwenden, um den Namen eines Unternehmens zu stylen, welches veränderte Grundlinien in ihrem [Wortmarke](https://en.wikipedia.org/wiki/Wordmark) verwendet; stattdessen sollte CSS genutzt werden. Beispielsweise könnten Sie die {{cssxref("vertical-align")}}-Eigenschaft mit einer Deklaration wie `vertical-align: sub` verwenden oder, um die Grundlinienverschiebung genauer zu steuern, `vertical-align: -25%`.

Angemessene Anwendungsfälle für `<sub>` umfassen (sind jedoch nicht zwingend darauf beschränkt):

- Markierung von Fußnotennummern. Siehe [Fußnotennummern](#fußnotennummern) für ein Beispiel.
- Markierung des Subscripts in mathematischen Variablennummern (obwohl Sie hierfür auch die Verwendung einer [MathML](/de/docs/Web/MathML)-Formel in Betracht ziehen können). Siehe [Variable Subscripts](#variable_subscripts).
- Bezeichnung der Anzahl von Atomen eines bestimmten Elements in einer chemischen Formel (wie der beste Freund eines jeden Entwicklers: C<sub>8</sub>H<sub>10</sub>N<sub>4</sub>O<sub>2</sub>, auch bekannt als "Koffein"). Siehe [Chemische Formeln](#chemische_formeln).

## Beispiele

### Fußnotennummern

Traditionelle Fußnoten werden mit Nummern dargestellt, die im Subscript gerendert werden. Dies ist ein häufiger Anwendungsfall für `<sub>`:

```html
<p>
  According to the computations by Nakamura, Johnson, and Mason<sub>1</sub> this
  will result in the complete annihilation of both particles.
</p>
```

#### Ergebnis

{{EmbedLiveSample("Footnote_numbers", 650, 80)}}

### Variable Subscripts

In der Mathematik werden Familien von Variablen, die sich auf dasselbe Konzept beziehen (wie Distanzen entlang derselben Achse), durch denselben Variablennamen mit folgendem Subscript dargestellt. Zum Beispiel:

```html-nolint
<p>
  The horizontal coordinates' positions along the X-axis are represented as
  <var>x<sub>1</sub></var> … <var>x<sub>n</sub></var>.
</p>
```

#### Ergebnis

{{EmbedLiveSample("Variable_subscripts", 650, 80)}}

### Chemische Formeln

Beim Schreiben einer chemischen Formel wie H<sub>2</sub>O wird die Anzahl der Atome eines bestimmten Elements innerhalb des beschriebenen Moleküls durch eine subscriptierte Zahl dargestellt; im Fall von Wasser zeigt das Subscript "2" an, dass es zwei Wasserstoffatome im Molekül gibt.

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
        <a href="/de/docs/Web/HTML/Content_categories">Inhaltskategorien</a>
      </th>
      <td>
        <a href="/de/docs/Web/HTML/Content_categories#flow_content">Flussinhalt</a>,
        <a href="/de/docs/Web/HTML/Content_categories#phrasing_content">Phrasierungsinhalt</a>, spürbarer Inhalt.
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubter Inhalt</th>
      <td>
        <a href="/de/docs/Web/HTML/Content_categories#phrasing_content">Phrasierungsinhalt</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>Keine, sowohl der start- als auch der end-Tag sind obligatorisch.</td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Eltern</th>
      <td>
        Jedes Element, das
        <a href="/de/docs/Web/HTML/Content_categories#phrasing_content">Phrasierungsinhalt</a> akzeptiert.
      </td>
    </tr>
    <tr>
      <th scope="row">Implizierte ARIA-Rolle</th>
      <td>
        <code><a href="/de/docs/Web/Accessibility/ARIA/Roles/structural_roles#structural_roles_with_html_equivalents">subscript</a></code>
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

- Das {{HTMLElement("sup")}} HTML-Element, das Hochstellen erzeugt. Beachten Sie, dass Sie `sup` und `sub` nicht gleichzeitig verwenden können: Sie müssen [MathML](/de/docs/Web/MathML) verwenden, um sowohl einen Hochgestellt- als auch einen Tiefgestelltzeichen direkt neben dem chemischen Symbol eines Elements zu erzeugen, um seine Ordnungszahl und Kernzahl darzustellen.
- Die [`<msub>`](/de/docs/Web/MathML/Element/msub), [`<msup>`](/de/docs/Web/MathML/Element/msup), und [`<msubsup>`](/de/docs/Web/MathML/Element/msubsup) MathML-Elemente.
- Die CSS-{{cssxref("vertical-align")}}-Eigenschaft.
