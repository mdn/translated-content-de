---
title: "<sub>: Das Subskript-Element"
slug: Web/HTML/Element/sub
l10n:
  sourceCommit: fdd3ac5598c3ddceb71e59949b003936ae99f647
---

{{HTMLSidebar}}

Das **`<sub>`** [HTML](/de/docs/Web/HTML) Element spezifiziert einen inline Text, der aus rein typografischen Gründen als Subskript dargestellt werden soll. Subskripte werden normalerweise mit einer gesenkten Grundlinie in kleinerer Schriftgröße dargestellt.

{{EmbedInteractiveExample("pages/tabbed/sub.html", "tabbed-shorter")}}

## Attribute

Dieses Element beinhaltet nur die [globalen Attribute](/de/docs/Web/HTML/Global_attributes).

## Verwendungshinweise

Das `<sub>` Element sollte nur aus typografischen Gründen verwendet werden – das heißt, um die Position des Textes zu ändern, um typografischen Konventionen oder Standards zu entsprechen, und nicht nur zu Präsentations- oder Erscheinungszwecken.

Zum Beispiel wäre es unangemessen, `<sub>` zu verwenden, um den Namen eines Unternehmens, das veränderte Grundlinien in seinem [Wortmarke](https://en.wikipedia.org/wiki/Wordmark) verwendet, zu stylen; stattdessen sollte CSS verwendet werden. Sie könnten zum Beispiel die {{cssxref("vertical-align")}}-Eigenschaft mit einer Deklaration wie `vertical-align: sub` oder, um die Grundlinienverschiebung präziser zu steuern, `vertical-align: -25%` verwenden.

Geeignete Anwendungsfälle für `<sub>` umfassen (aber sind nicht notwendigerweise darauf beschränkt):

- Markierung von Fußnotenzahlen. Siehe [Fußnotenzahlen](#fußnotenzahlen) für ein Beispiel.
- Markierung des Subskripts in mathematischen Variablennummern (obwohl Sie hierfür auch eine [MathML](/de/docs/Web/MathML) Formel in Betracht ziehen könnten). Siehe [Variable Subskripte](#variable_subskripte).
- Bezeichnung der Anzahl der Atome eines bestimmten Elements innerhalb einer chemischen Formel (wie zum Beispiel jeder Entwickler's bester Freund, C

  <sub>8</sub>

  H

  <sub>10</sub>

  N

  <sub>4</sub>

  O

  <sub>2</sub>

  , auch bekannt als "Koffein"). Siehe [Chemische Formeln](#chemische_formeln).

## Beispiele

### Fußnotenzahlen

Traditionelle Fußnoten werden durch Zahlen gekennzeichnet, die im Subskript dargestellt werden. Dies ist ein häufig verwendeter Anwendungsfall für `<sub>`:

```html
<p>
  Nach den Berechnungen von Nakamura, Johnson und Mason<sub>1</sub> führt dies zur vollständigen Vernichtung beider Teilchen.
</p>
```

#### Ergebnis

{{EmbedLiveSample("Footnote_numbers", 650, 80)}}

### Variable Subskripte

In der Mathematik werden Familien von Variablen, die sich auf dasselbe Konzept beziehen (wie zum Beispiel Abstände entlang derselben Achse), durch denselben Variablennamen mit einem nachfolgenden Subskript dargestellt. Zum Beispiel:

```html-nolint
<p>
  Die Positionen der horizontalen Koordinaten entlang der X-Achse werden dargestellt als
  <var>x<sub>1</sub></var> … <var>x<sub>n</sub></var>.
</p>
```

#### Ergebnis

{{EmbedLiveSample("Variable_subscripts", 650, 80)}}

### Chemische Formeln

Beim Schreiben einer chemischen Formel, wie H<sub>2</sub>0, wird die Anzahl der Atome eines bestimmten Elements innerhalb des beschriebenen Moleküls durch eine subskribierte Zahl dargestellt. Im Fall von Wasser zeigt das subskribierte "2", dass es zwei Wasserstoffatome im Molekül gibt.

Ein weiteres Beispiel:

```html
<p>
  Fast jeder Entwickler's Lieblingsmolekül ist
  C<sub>8</sub>H<sub>10</sub>N<sub>4</sub>O<sub>2</sub>, das allgemein als
  "Koffein" bekannt ist.
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
          >Fließinhalt</a
        >,
        <a href="/de/docs/Web/HTML/Content_categories#phrasing_content"
          >Phrasing-Inhalt</a
        >, greifbarer Inhalt.
      </td>
    </tr>
    <tr>
      <th scope="row">Zugelassener Inhalt</th>
      <td>
        <a href="/de/docs/Web/HTML/Content_categories#phrasing_content"
          >Phrasing-Inhalt</a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>Keine, sowohl das Anfangs- als auch das End-Tag sind obligatorisch.</td>
    </tr>
    <tr>
      <th scope="row">Zugelassene Eltern</th>
      <td>
        Jedes Element, das
        <a href="/de/docs/Web/HTML/Content_categories#phrasing_content"
          >Phrasing-Inhalt</a
        >
        akzeptiert.
      </td>
    </tr>
    <tr>
      <th scope="row">Implizierte ARIA-Rolle</th>
      <td>
        <code
          ><a href="/de/docs/Web/Accessibility/ARIA/Roles/structural_roles#structural_roles_with_html_equivalents">subscript</a
          ></code
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Zugelassene ARIA-Rollen</th>
      <td>Beliebig</td>
    </tr>
    <tr>
      <th scope="row">DOM-Schnittstelle</th>
      <td>{{domxref("HTMLElement")}}</td>
    </tr>
  </tbody>
</table>

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Das {{HTMLElement("sup")}} HTML Element, das Hochschrift erzeugt. Beachten Sie, dass `sup` und `sub` nicht gleichzeitig verwendet werden können: Sie müssen [MathML](/de/docs/Web/MathML) verwenden, um sowohl ein Hochschrift direkt über einem Subskript neben dem chemischen Symbol eines Elements zu erzeugen, das seine Ordnungszahl und seine Kernladungszahl repräsentiert.
- Die [`<msub>`](/de/docs/Web/MathML/Element/msub), [`<msup>`](/de/docs/Web/MathML/Element/msup), und [`<msubsup>`](/de/docs/Web/MathML/Element/msubsup) MathML Elemente.
- Die CSS {{cssxref("vertical-align")}} Eigenschaft.
