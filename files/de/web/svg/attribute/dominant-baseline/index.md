---
title: dominant-baseline
slug: Web/SVG/Attribute/dominant-baseline
l10n:
  sourceCommit: e295790b3a62baceeb832650e2c0cc9256a23156
---

{{SVGRef}}

Das **`dominant-baseline`** Attribut gibt die dominante Grundlinie an, die verwendet wird, um den Text des Rahmens und den Inhalt auf Inline-Ebene auszurichten. Es zeigt auch die Standardausrichtungsgrundlinie für alle Boxen an, die in einem Ausrichtungskontext der Box an der Grundlinie ausgerichtet sind.

Es wird verwendet, um eine skalierte Grundlinientabelle zu bestimmen oder neu zu bestimmen. Eine skalierte Grundlinientabelle ist ein zusammengesetzter Wert mit drei Komponenten:

1. einem Grundlinien-Identifikator für die dominante Grundlinie,
2. einer Grundlinientabelle und
3. einer Schriftgröße für die Grundlinientabelle.

Einige Werte der Eigenschaft bestimmen alle drei Werte neu. Andere stellen nur die Schriftgröße der Grundlinientabelle wieder her. Wenn der Anfangswert, `auto`, ein unerwünschtes Ergebnis liefern würde, kann diese Eigenschaft verwendet werden, um die gewünschte skalierte Grundlinientabelle explizit einzustellen.

Wenn es keine Grundlinientabelle in der Standard-Schriftart gibt oder die Grundlinientabelle keinen Eintrag für die gewünschte Grundlinie enthält, kann der Browser Heuristiken verwenden, um die Position der gewünschten Grundlinie zu bestimmen.

> [!NOTE]
> Als Präsentationsattribut kann `dominant-baseline` als CSS-Eigenschaft verwendet werden. Siehe {{cssxref('dominant-baseline')}} für mehr.

Sie können dieses Attribut mit den folgenden SVG-Elementen verwenden:

- {{SVGElement("text")}}
- {{SVGElement("textPath")}}
- {{SVGElement("tref")}}
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

## Gebrauchshinweise

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Wert</th>
      <td>
        <code>auto</code>
        <a href="https://www.w3.org/TR/css3-values/#comb-one">|</a>
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

  - : Wenn diese Eigenschaft auf einem {{SVGElement("text")}}-Element auftritt, hängt der berechnete Wert vom Wert des {{SVGAttr("writing-mode")}}-Attributs ab.

    Wenn der {{SVGAttr("writing-mode")}} horizontal ist, dann ist der Wert der Dominant-Baseline-Komponente `alphabetic`. Andernfalls, wenn der {{SVGAttr("writing-mode")}} vertikal ist, dann ist der Wert der Dominant-Baseline-Komponente `central`.

    Wenn diese Eigenschaft auf einem {{SVGElement("tspan")}}, {{SVGElement("tref")}} oder {{SVGElement("textPath")}}-Element auftritt, bleiben die Dominant-Baseline- und die Grundlinientabellenkomponenten dieselben wie die des übergeordneten Textelementinhalts.

    Wenn der berechnete {{SVGAttr("baseline-shift")}}-Wert tatsächlich die Grundlinie verschiebt, dann wird die Komponente der Grundlinientabelle mit der Schriftgröße auf den Wert des {{SVGAttr("font-size")}}-Attributs auf dem Element gesetzt, auf dem das `dominant-baseline` Attribut auftritt, ansonsten bleibt die Schriftgröße der Grundlinientabelle dieselbe wie die des Elements.

    Wenn kein übergeordnetes Textelement existiert, wird der Wert der skalierte Grundlinientabelle wie oben für {{SVGElement("text")}} Elemente konstruiert.

- `use-script` {{deprecated_inline}}
  - : Die Dominant-Baseline- und die Grundlinientabellenkomponenten werden durch Bestimmung des vorherrschenden Schriftsystems des Zeicheninhalts gesetzt. Der {{SVGAttr("writing-mode")}}, ob horizontal oder vertikal, wird verwendet, um die entsprechenden Grundlinientabellen auszuwählen, und die dominante Grundlinie wird verwendet, um die Grundlinientabelle auszuwählen, die dieser Grundlinie entspricht. Die Grundlinientabellenschriftgröße wird auf den Wert des {{SVGAttr("font-size")}}-Attributs auf dem Element gesetzt, auf dem das `dominant-baseline` Attribut auftritt.
- `no-change` {{deprecated_inline}}
  - : Die Dominant-Baseline-, die Grundlinientabelle- und die Grundlinientabelle-Schriftgröße bleiben dieselben wie die des übergeordneten Textinhaltselements.
- `reset-size` {{deprecated_inline}}
  - : Die Dominant-Baseline- und die Grundlinientabelle bleiben dieselben, aber die Schriftgröße der Grundlinientabelle wird auf den Wert des {{SVGAttr("font-size")}} Attributs auf diesem Element geändert. Dies skaliert die Grundlinientabelle für die aktuelle {{SVGAttr("font-size")}} neu.
- `ideographic`
  - : Der Grundlinien-Identifikator für die Dominant-Baseline ist auf `ideographic` gesetzt, die abgeleitete Grundlinientabelle wird unter Verwendung der `ideographic` Grundlinientabelle in der Schrift erstellt und die Schriftgröße der Grundlinientabelle wird auf den Wert des {{SVGAttr("font-size")}} Attributs auf diesem Element geändert.
- `alphabetic`
  - : Der Grundlinien-Identifikator für die Dominant-Baseline ist auf `alphabetic` gesetzt, die abgeleitete Grundlinientabelle wird unter Verwendung der `alphabetic` Grundlinientabelle in der Schrift erstellt und die Schriftgröße der Grundlinientabelle wird auf den Wert des {{SVGAttr("font-size")}} Attributs auf diesem Element geändert.
- `hanging`
  - : Der Grundlinien-Identifikator für die Dominant-Baseline ist auf `hanging` gesetzt, die abgeleitete Grundlinientabelle wird unter Verwendung der `hanging` Grundlinientabelle in der Schrift erstellt und die Schriftgröße der Grundlinientabelle wird auf den Wert des {{SVGAttr("font-size")}} Attributs auf diesem Element geändert.
- `mathematical`
  - : Der Grundlinien-Identifikator für die Dominant-Baseline ist auf `mathematical` gesetzt, die abgeleitete Grundlinientabelle wird unter Verwendung der `mathematical` Grundlinientabelle in der Schrift erstellt und die Schriftgröße der Grundlinientabelle wird auf den Wert des {{SVGAttr("font-size")}} Attributs auf diesem Element geändert.
- `central`
  - : Der Grundlinien-Identifikator für die Dominant-Baseline ist auf `central` gesetzt. Die abgeleitete Grundlinientabelle wird aus den definierten Grundlinien in einer Grundlinientabelle in der Schrift erstellt. Diese Schriftgrundlinientabelle wird unter Verwendung der folgenden Prioritätsreihenfolge von Grundlinientabellennamen ausgewählt: `ideographic`, `alphabetic`, `hanging`, `mathematical`. Die Schriftgröße der Grundlinientabelle wird auf den Wert des {{SVGAttr("font-size")}} Attributs auf diesem Element geändert.
- `middle`
  - : Der Grundlinien-Identifikator für die Dominant-Baseline ist auf `middle` gesetzt. Die abgeleitete Grundlinientabelle wird aus den definierten Grundlinien in einer Grundlinientabelle in der Schrift erstellt. Diese Schriftgrundlinientabelle wird unter Verwendung der folgenden Prioritätsreihenfolge von Grundlinientabellennamen ausgewählt: `alphabetic`, `ideographic`, `hanging`, `mathematical`. Die Schriftgröße der Grundlinientabelle wird auf den Wert des {{SVGAttr("font-size")}} Attributs auf diesem Element geändert.
- `text-after-edge`
  - : Der Grundlinien-Identifikator für die Dominant-Baseline ist auf `text-after-edge` gesetzt. Die abgeleitete Grundlinientabelle wird aus den definierten Grundlinien in einer Grundlinientabelle in der Schrift erstellt. Die Auswahl, welche Schriftgrundlinientabelle verwendet werden soll, ist vom Browser abhängig. Die Schriftgröße der Grundlinientabelle wird auf den Wert des {{SVGAttr("font-size")}} Attributs auf diesem Element geändert.
- `text-before-edge`
  - : Der Grundlinien-Identifikator für die Dominant-Baseline ist auf `text-before-edge` gesetzt. Die abgeleitete Grundlinientabelle wird aus den definierten Grundlinien in einer Grundlinientabelle in der Schrift erstellt. Die Auswahl, welche Grundlinientabelle verwendet werden soll, ist vom Browser abhängig. Die Schriftgröße der Grundlinientabelle wird auf den Wert des {{SVGAttr("font-size")}} Attributs auf diesem Element geändert.
- `text-top`
  - : Dieser Wert verwendet die Oberseite des em-Feldes als Grundlinie.

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

- CSS {{cssxref('dominant-baseline')}}-Eigenschaft
