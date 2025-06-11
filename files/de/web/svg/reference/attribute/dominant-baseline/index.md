---
title: dominant-baseline
slug: Web/SVG/Reference/Attribute/dominant-baseline
l10n:
  sourceCommit: 636b90011532e3fd2cf9333aaf1754fdc8de7938
---

Das **Attribut `dominant-baseline`** gibt die dominante Grundlinie an, die verwendet wird, um den Text und die Inhalte auf Inline-Ebene des Elements auszurichten. Es zeigt auch die Standardausrichtungsgrundlinie aller Boxen an, die an der Grundlinienausrichtung im Ausrichtungskontext der Box teilnehmen.

Es wird verwendet, um eine skalierte Grundlinientabelle zu bestimmen oder neu zu bestimmen. Eine skalierte Grundlinientabelle ist ein zusammengesetzter Wert mit drei Komponenten:

1. einem Grundlinien-Identifikator für die dominante Grundlinie,
2. einer Grundlinientabelle und
3. einer Grundlinientabellenschriftgröße.

Einige Werte der Eigenschaft bestimmen alle drei Werte neu, andere stellen nur die Schriftgröße der Grundlinientabelle wieder her. Wenn der Anfangswert `auto` ein unerwünschtes Ergebnis liefern würde, kann mit dieser Eigenschaft explizit die gewünschte skalierte Grundlinientabelle festgelegt werden.

Wenn es keine Grundlinientabelle in der nominalen Schriftart gibt oder wenn die Grundlinientabelle keinen Eintrag für die gewünschte Grundlinie enthält, darf der Browser Heuristiken verwenden, um die Position der gewünschten Grundlinie zu bestimmen.

> [!NOTE]
> Als Präsentationsattribut hat `dominant-baseline` auch eine CSS-Eigenschaft als Gegenstück: {{cssxref("dominant-baseline")}}. Wenn beide angegeben sind, hat die CSS-Eigenschaft Vorrang.

Dieses Attribut kann mit den folgenden SVG-Elementen verwendet werden:

- {{SVGElement("text")}}
- {{SVGElement("textPath")}}
- {{SVGElement("tspan")}}

## Beispiel

```css hidden
html,
body,
svg {
  height: 100%;
}

text {
  font:
    bold 14px Verdana,
    Helvetica,
    Arial,
    sans-serif;
}
```

```html
<svg viewBox="0 0 200 120" xmlns="http://www.w3.org/2000/svg">
  <path d="M20,20 L180,20 M20,50 L180,50 M20,80 L180,80" stroke="grey" />

  <text dominant-baseline="auto" x="30" y="20">Auto</text>
  <text dominant-baseline="middle" x="30" y="50">Middle</text>
  <text dominant-baseline="hanging" x="30" y="80">Hanging</text>
</svg>
```

{{EmbedLiveSample("Example", "200", "120")}}

## Anmerkungen zur Verwendung

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Wert</th>
      <td>
        <code>auto</code>
        <a href="/de/docs/Web/CSS/CSS_Values_and_Units/Value_definition_syntax#single_bar">|</a>
        <code>text-bottom</code> | <code>alphabetic</code> |
        <code>ideographic</code> | <code>middle</code> | <code>central</code> |
        <code>mathematical</code> | <code>hanging</code> | <code>text-top</code>
      </td>
    </tr>
    <tr>
      <th scope="row">Standardwert</th>
      <td><code>auto</code></td>
    </tr>
    <tr>
      <th scope="row">Animierbar</th>
      <td>diskret</td>
    </tr>
  </tbody>
</table>

- `auto`

  - : Wenn diese Eigenschaft auf einem {{SVGElement("text")}}-Element auftritt, hängt der berechnete Wert vom Wert des Attributs {{SVGAttr("writing-mode")}} ab.

    Wenn der {{SVGAttr("writing-mode")}} horizontal ist, dann ist der Wert der Komponente der dominanten Grundlinie `alphabetic`. Andernfalls, wenn der {{SVGAttr("writing-mode")}} vertikal ist, dann ist der Wert der Komponente der dominanten Grundlinie `central`.

    Wenn diese Eigenschaft auf einem {{SVGElement("tspan")}}- oder {{SVGElement("textPath")}}-Element auftritt, bleiben die dominante Grundlinie und die Komponenten der Grundlinientabelle dieselben wie bei dem übergeordneten Textinhaltselement.

    Wenn der berechnete Wert {{SVGAttr("baseline-shift")}} die Grundlinie tatsächlich verschiebt, wird die Schriftgröße der Komponente der Grundlinientabelle auf den Wert des Attributs {{SVGAttr("font-size")}} auf dem Element festgelegt, bei dem das `dominant-baseline` Attribut auftritt. Andernfalls bleibt die Schriftgröße der Grundlinientabelle dieselbe wie bei dem Element.

    Wenn es kein übergeordnetes Textinhaltselement gibt, wird der Wert der skalierten Grundlinientabelle wie oben für {{SVGElement("text")}}-Elemente konstruiert.

- `use-script` {{deprecated_inline}}
  - : Die dominante Grundlinie und die Komponenten der Grundlinientabelle werden durch Bestimmung des vorherrschenden Schriftsystems des Zeicheninhalts festgelegt. Der {{SVGAttr("writing-mode")}}, sei es horizontal oder vertikal, wird verwendet, um das geeignete Set von Grundlinientabellen auszuwählen, und die dominante Grundlinie wird verwendet, um die Grundlinientabelle auszuwählen, die dieser Grundlinie entspricht. Die Schriftgröße der Grundlinientabelle wird auf den Wert des Attributs {{SVGAttr("font-size")}} auf dem Element festgelegt, bei dem das `dominant-baseline` Attribut auftritt.
- `no-change` {{deprecated_inline}}
  - : Die dominante Grundlinie, die Grundlinientabelle und die Schriftgröße der Grundlinientabelle bleiben dieselben wie bei dem übergeordneten Textinhaltselement.
- `reset-size` {{deprecated_inline}}
  - : Die dominante Grundlinie und die Grundlinientabelle bleiben dieselben, aber die Schriftgröße der Grundlinientabelle wird auf den Wert des Attributs {{SVGAttr("font-size")}} auf diesem Element geändert. Dies skaliert die Grundlinientabelle für die aktuelle {{SVGAttr("font-size")}}.
- `ideographic`
  - : Der Grundlinien-Identifikator für die dominante Grundlinie wird auf `ideographic` gesetzt, die abgeleitete Grundlinientabelle wird unter Verwendung der `ideographic` Grundlinientabelle in der Schrift erstellt, und die Schriftgröße der Grundlinientabelle wird auf den Wert des Attributs {{SVGAttr("font-size")}} auf diesem Element geändert.
- `alphabetic`
  - : Der Grundlinien-Identifikator für die dominante Grundlinie ist `alphabetic`. Die abgeleitete Grundlinientabelle wird mit der `alphabetic` Grundlinientabelle in der Schrift konstruiert, und die Schriftgröße der Grundlinientabelle wird auf den Wert des Attributs {{SVGAttr("font-size")}} dieses Elements geändert.
- `hanging`
  - : Der Grundlinien-Identifikator für die dominante Grundlinie wird auf `hanging` gesetzt. Die abgeleitete Grundlinientabelle wird mit der `hanging` Grundlinientabelle in der Schrift erstellt, und die Schriftgröße der Grundlinientabelle wird auf den Wert des Attributs {{SVGAttr("font-size")}} auf diesem Element geändert.
- `mathematical`
  - : Der Grundlinien-Identifikator für die dominante Grundlinie wird auf `mathematical` gesetzt. Die abgeleitete Grundlinientabelle wird mit der `mathematical` Grundlinientabelle in der Schrift konstruiert, und die Schriftgröße der Grundlinientabelle wird auf den Wert des Attributs {{SVGAttr("font-size")}} dieses Elements geändert.
- `central`
  - : Der Grundlinien-Identifikator für die dominante Grundlinie ist `central`. Die abgeleitete Grundlinientabelle wird aus den definierten Grundlinien in einer Grundlinientabelle der Schrift erstellt. Diese Grundlinientabelle wird in der folgenden Prioritätsreihenfolge der Grundlinientabellennamen gewählt: `ideographic`, `alphabetic`, `hanging`, `mathematical`. Die Schriftgröße der Grundlinientabelle wird auf den Wert des Attributs {{SVGAttr("font-size")}} auf diesem Element geändert.
- `middle`
  - : Der Grundlinien-Identifikator für die dominante Grundlinie ist `middle`. Die abgeleitete Grundlinientabelle wird aus den definierten Grundlinien in einer Grundlinientabelle der Schrift erstellt. Diese Schriftgrundlinientabelle wird unter Verwendung der folgenden Prioritätsreihenfolge der Grundlinientabellennamen gewählt: `alphabetic`, `ideographic`, `hanging`, `mathematical`. Die Schriftgröße der Grundlinientabelle wird auf den Wert des Attributs {{SVGAttr("font-size")}} auf diesem Element geändert.
- `text-after-edge`
  - : Der Grundlinien-Identifikator für die dominante Grundlinie wird auf `text-after-edge` gesetzt. Die abgeleitete Grundlinientabelle wird aus den definierten Grundlinien in einer Grundlinientabelle der Schrift erstellt. Die Wahl, welche Schriftgrundlinientabelle zu verwenden ist, ist browserabhängig. Die Schriftgröße der Grundlinientabelle wird auf den Wert des Attributs {{SVGAttr("font-size")}} auf diesem Element geändert.
- `text-before-edge`
  - : Der Grundlinien-Identifikator für die dominante Grundlinie wird auf `text-before-edge` gesetzt. Die abgeleitete Grundlinientabelle wird aus den definierten Grundlinien in einer Grundlinientabelle der Schrift erstellt. Die Wahl, welche Grundlinientabelle aus den Grundlinientabellen der Schrift zu verwenden ist, ist browserabhängig. Die Schriftgröße der Grundlinientabelle wird auf den Wert des Attributs {{SVGAttr("font-size")}} auf diesem Element geändert.
- `text-top`
  - : Dieser Wert verwendet die Oberseite der Em-Box als Grundlinie.

### SVG

```html
<svg
  width="400"
  height="300"
  viewBox="0 0 300 300"
  xmlns="http://www.w3.org/2000/svg">
  <!-- Materialization of anchors -->
  <path
    d="M60,20 L60,270
           M30,20 L400,20
           M30,70 L400,70
           M30,120 L400,120
           M30,170 L400,170
           M30,220 L400,220
           M30,270 L400,270"
    stroke="grey" />

  <!-- Anchors in action -->
  <text dominant-baseline="auto" x="70" y="20">auto</text>
  <text dominant-baseline="middle" x="70" y="70">middle</text>
  <text dominant-baseline="hanging" x="70" y="170">hanging</text>
  <text dominant-baseline="mathematical" x="70" y="220">mathematical</text>
  <text dominant-baseline="text-top" x="70" y="270">text-top</text>

  <!-- Materialization of anchors -->
  <circle cx="60" cy="20" r="3" fill="red" />
  <circle cx="60" cy="70" r="3" fill="red" />
  <circle cx="60" cy="120" r="3" fill="red" />
  <circle cx="60" cy="170" r="3" fill="red" />
  <circle cx="60" cy="220" r="3" fill="red" />
  <circle cx="60" cy="270" r="3" fill="red" />

  <style>
    <![CDATA[
      text {
        font: bold 30px Verdana, Helvetica, Arial, sans-serif;
      }
      ]]>
  </style>
</svg>
```

### Ergebnis

{{EmbedLiveSample("Usage_notes", "300", "330")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- CSS {{cssxref('dominant-baseline')}} Eigenschaft
