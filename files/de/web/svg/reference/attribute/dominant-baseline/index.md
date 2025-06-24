---
title: dominant-baseline
slug: Web/SVG/Reference/Attribute/dominant-baseline
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

Das **`dominant-baseline`** Attribut gibt die dominante Grundlinie an, welche die Grundlinie ist, die zum Ausrichten des Textes und der inline-Inhalte des Elements verwendet wird. Es gibt auch die Standardausrichtungsgrundlinie aller Boxen an, die an der Grundlinienaussrichtung im Ausrichtungskontext der Box teilnehmen.

Es wird verwendet, um eine skalierte Grundlinientabelle zu bestimmen oder neu zu bestimmen. Eine skalierte Grundlinientabelle ist ein zusammengesetzter Wert mit drei Komponenten:

1. ein Grundlinien-Bezeichner für die dominante Grundlinie,
2. eine Grundlinientabelle und
3. eine Schriftgröße der Grundlinientabelle.

Einige Werte der Eigenschaft bestimmen alle drei Werte neu. Andere stellen nur die Schriftgröße der Grundlinientabelle neu ein. Wenn der Anfangswert `auto` ein unerwünschtes Ergebnis liefern würde, kann mit dieser Eigenschaft die gewünschte skalierte Grundlinientabelle explizit eingestellt werden.

Wenn es in der verwendeten Schriftart keine Grundlinientabelle gibt oder die Grundlinientabelle keinen Eintrag für die gewünschte Grundlinie enthält, kann der Browser Heuristiken verwenden, um die Position der gewünschten Grundlinie zu bestimmen.

> [!NOTE]
> Als Präsentationsattribut hat `dominant-baseline` auch ein entsprechendes CSS-Attribut: {{cssxref("dominant-baseline")}}. Wenn beide angegeben werden, hat die CSS-Eigenschaft Vorrang.

Sie können dieses Attribut mit den folgenden SVG-Elementen verwenden:

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

## Nutzungshinweise

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

  - : Wenn diese Eigenschaft auf einem {{SVGElement("text")}} Element vorkommt, hängt der berechnete Wert vom Wert des {{SVGAttr("writing-mode")}} Attributs ab.

    Wenn das {{SVGAttr("writing-mode")}} Attribut horizontal ist, dann ist der Wert der Komponente der dominanten Grundlinie `alphabetic`. Ist das {{SVGAttr("writing-mode")}} hingegen vertikal, dann ist der Wert `central`.

    Wenn diese Eigenschaft auf einem {{SVGElement("tspan")}} oder {{SVGElement("textPath")}} Element vorkommt, bleiben die dominante Grundlinie und die Komponenten der Grundlinientabelle dieselben wie die des übergeordneten Textelements.

    Wenn der berechnete {{SVGAttr("baseline-shift")}} Wert tatsächlich die Grundlinie verschiebt, dann wird die Schriftgröße der Grundlinientabelle auf den Wert des {{SVGAttr("font-size")}} Attributs des Elements gesetzt, auf dem das `dominant-baseline` Attribut vorkommt, andernfalls bleibt die Schriftgröße der Grundlinientabelle gleich der des Elements.

    Wenn es kein übergeordnetes Textelement gibt, wird der Wert der skalierten Grundlinientabelle wie oben für {{SVGElement("text")}} Elemente konstruiert.

- `use-script` {{deprecated_inline}}
  - : Die dominante Grundlinie und die Komponenten der Grundlinientabelle werden bestimmt, indem das vorherrschende Skript des Zeicheninhalts ermittelt wird. Das {{SVGAttr("writing-mode")}}, ob horizontal oder vertikal, wird verwendet, um das entsprechende Set von Grundlinientabellen auszuwählen, und die dominante Grundlinie wird verwendet, um die Grundlinientabelle auszuwählen, die dieser Grundlinie entspricht. Die Schriftgröße der Grundlinientabelle wird auf den Wert des {{SVGAttr("font-size")}} Attributs des Elements gesetzt, auf dem das `dominant-baseline` Attribut vorkommt.
- `no-change` {{deprecated_inline}}
  - : Die dominante Grundlinie, die Grundlinientabelle und die Schriftgröße der Grundlinientabelle bleiben gleich wie die des übergeordneten Textelements.
- `reset-size` {{deprecated_inline}}
  - : Die dominante Grundlinie und die Grundlinientabelle bleiben gleich, aber die Schriftgröße der Grundlinientabelle wird auf den Wert des {{SVGAttr("font-size")}} Attributs dieses Elements geändert. Dies skaliert die Grundlinientabelle für die aktuelle {{SVGAttr("font-size")}} neu.
- `ideographic`
  - : Der Grundlinien-Bezeichner für die dominante Grundlinie wird auf `ideographic` gesetzt, die abgeleitete Grundlinientabelle wird mit der `ideographic` Grundlinientabelle der Schriftart erstellt, und die Schriftgröße der Grundlinientabelle wird auf den Wert des {{SVGAttr("font-size")}} Attributs dieses Elements geändert.
- `alphabetic`
  - : Der Grundlinien-Bezeichner für die dominante Grundlinie wird auf `alphabetic` gesetzt, die abgeleitete Grundlinientabelle wird mit der `alphabetic` Grundlinientabelle der Schriftart erstellt, und die Schriftgröße der Grundlinientabelle wird auf den Wert des {{SVGAttr("font-size")}} Attributs dieses Elements geändert.
- `hanging`
  - : Der Grundlinien-Bezeichner für die dominante Grundlinie wird auf `hanging` gesetzt, die abgeleitete Grundlinientabelle wird mit der `hanging` Grundlinientabelle der Schriftart erstellt, und die Schriftgröße der Grundlinientabelle wird auf den Wert des {{SVGAttr("font-size")}} Attributs dieses Elements geändert.
- `mathematical`
  - : Der Grundlinien-Bezeichner für die dominante Grundlinie wird auf `mathematical` gesetzt, die abgeleitete Grundlinientabelle wird mit der `mathematical` Grundlinientabelle der Schriftart erstellt, und die Schriftgröße der Grundlinientabelle wird auf den Wert des {{SVGAttr("font-size")}} Attributs dieses Elements geändert.
- `central`
  - : Der Grundlinien-Bezeichner für die dominante Grundlinie wird auf `central` gesetzt. Die abgeleitete Grundlinientabelle wird aus den definierten Grundlinien in einer Grundlinientabelle der Schriftart erstellt. Diese Grundlinientabelle der Schriftart wird unter Verwendung der folgenden Prioritätenreihenfolge der Grundlinientabellennamen ausgewählt: `ideographic`, `alphabetic`, `hanging`, `mathematical`. Die Schriftgröße der Grundlinientabelle wird auf den Wert des {{SVGAttr("font-size")}} Attributs dieses Elements geändert.
- `middle`
  - : Der Grundlinien-Bezeichner für die dominante Grundlinie wird auf `middle` gesetzt. Die abgeleitete Grundlinientabelle wird aus den definierten Grundlinien in einer Grundlinientabelle der Schriftart erstellt. Diese Grundlinientabelle der Schriftart wird unter Verwendung der folgenden Prioritätenreihenfolge der Grundlinientabellennamen gewählt: `alphabetic`, `ideographic`, `hanging`, `mathematical`. Die Schriftgröße der Grundlinientabelle wird auf den Wert des {{SVGAttr("font-size")}} Attributs dieses Elements geändert.
- `text-after-edge`
  - : Der Grundlinien-Bezeichner für die dominante Grundlinie wird auf `text-after-edge` gesetzt. Die abgeleitete Grundlinientabelle wird aus den definierten Grundlinien in einer Grundlinientabelle der Schriftart erstellt. Die Wahl, welche Grundlinientabelle der Schriftart zu verwenden ist, hängt vom Browser ab. Die Schriftgröße der Grundlinientabelle wird auf den Wert des {{SVGAttr("font-size")}} Attributs dieses Elements geändert.
- `text-before-edge`
  - : Der Grundlinien-Bezeichner für die dominante Grundlinie wird auf `text-before-edge` gesetzt. Die abgeleitete Grundlinientabelle wird aus den definierten Grundlinien in einer Grundlinientabelle der Schriftart erstellt. Die Wahl, welche Grundlinientabelle zu verwenden ist, hängt vom Browser ab. Die Schriftgröße der Grundlinientabelle wird auf den Wert des {{SVGAttr("font-size")}} Attributs dieses Elements geändert.
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

- CSS {{cssxref('dominant-baseline')}} Attribut
