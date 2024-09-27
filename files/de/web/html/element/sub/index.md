---
title: "<sub>: Das Subscript-Element"
slug: Web/HTML/Element/sub
l10n:
  sourceCommit: fdd3ac5598c3ddceb71e59949b003936ae99f647
---

{{HTMLSidebar}}

Das **`<sub>`** [HTML](/de/docs/Web/HTML)-Element spezifiziert Inline-Text, der aus rein typografischen Gründen als Subscript angezeigt werden soll. Subscripts werden typischerweise mit einer abgesenkten Basislinie in kleinerer Schriftgröße dargestellt.

{{EmbedInteractiveExample("pages/tabbed/sub.html", "tabbed-shorter")}}

## Attribute

Dieses Element enthält nur die [globalen Attribute](/de/docs/Web/HTML/Global_attributes).

## Nutzungshinweise

Das `<sub>`-Element sollte nur aus typografischen Gründen verwendet werden - das heißt, um die Position des Textes gemäß typografischen Konventionen oder Standards zu ändern, nicht aber nur aus Präsentations- oder Erscheinungsgründen.

Zum Beispiel wäre es nicht angemessen, `<sub>` zu verwenden, um den Namen eines Unternehmens zu stylen, dass in seinem [Wortmarke](https://en.wikipedia.org/wiki/Wordmark) veränderte Basislinien verwendet, stattdessen sollte CSS verwendet werden. Sie können beispielsweise die {{cssxref("vertical-align")}}-Eigenschaft mit einer Deklaration wie `vertical-align: sub` verwenden oder, um die Basislinienverschiebung genauer zu steuern, `vertical-align: -25%`.

Geeignete Anwendungsfälle für `<sub>` sind (aber nicht unbedingt darauf beschränkt):

- Kennzeichnen von Fußnotennummern. Siehe [Fußnotennummern](#fußnotennummern) für ein Beispiel.
- Kennzeichnen des Subscripts bei mathematischen Variablennummern (obwohl Sie in Betracht ziehen könnten, für diesen Fall eine [MathML](/de/docs/Web/MathML)-Formel zu verwenden). Siehe [Variablensubscripts](#variablensubscripts).
- Bezeichnen der Anzahl von Atomen eines bestimmten Elements innerhalb einer chemischen Formel (wie beispielsweise die beste Freundin eines jeden Entwicklers, C

  <sub>8</sub>

  H

  <sub>10</sub>

  N

  <sub>4</sub>

  O

  <sub>2</sub>

  , auch bekannt als "Koffein"). Siehe [Chemische Formeln](#chemische_formeln).

## Beispiele

### Fußnotennummern

Traditionelle Fußnoten werden durch Zahlen gekennzeichnet, die im Subscript dargestellt werden. Dies ist ein häufiger Anwendungsfall für `<sub>`:

```html
<p>
  According to the computations by Nakamura, Johnson, and Mason<sub>1</sub> this
  will result in the complete annihilation of both particles.
</p>
```

#### Ergebnis

{{EmbedLiveSample("Footnote_numbers", 650, 80)}}

### Variablensubscripts

In der Mathematik werden Familien von Variablen, die sich auf dasselbe Konzept beziehen (wie Distanzen entlang derselben Achse), mit demselben Variablennamen und einem nachfolgenden Subscript dargestellt. Zum Beispiel:

```html-nolint
<p>
  The horizontal coordinates' positions along the X-axis are represented as
  <var>x<sub>1</sub></var> … <var>x<sub>n</sub></var>.
</p>
```

#### Ergebnis

{{EmbedLiveSample("Variable_subscripts", 650, 80)}}

### Chemische Formeln

Beim Schreiben einer chemischen Formel, wie H<sub>2</sub>O, wird die Anzahl der Atome eines bestimmten Elements innerhalb des beschriebenen Moleküls durch eine Subscript-Zahl dargestellt; im Fall von Wasser zeigt die subscriptierte "2" an, dass es zwei Wasserstoffatome im Molekül gibt.

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
        >, tastbarer Inhalt.
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
      <td>Keine, sowohl das Start- als auch das End-Tag sind obligatorisch.</td>
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

- Das {{HTMLElement("sup")}} HTML-Element, das Superscript erzeugt. Beachten Sie, dass Sie `sup` und `sub` nicht gleichzeitig verwenden können: Sie müssen [MathML](/de/docs/Web/MathML) verwenden, um sowohl ein Superscript direkt über einem Subscript neben dem chemischen Symbol eines Elements zu erzeugen, das seine Ordnungszahl und seine Kernnummer darstellt.
- Die [`<msub>`](/de/docs/Web/MathML/Element/msub), [`<msup>`](/de/docs/Web/MathML/Element/msup), und [`<msubsup>`](/de/docs/Web/MathML/Element/msubsup) MathML-Elemente.
- Die CSS {{cssxref("vertical-align")}}-Eigenschaft.
