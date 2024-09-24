---
title: dominant-baseline
slug: Web/SVG/Attribute/dominant-baseline
l10n:
  sourceCommit: e295790b3a62baceeb832650e2c0cc9256a23156
---

{{SVGRef}}

Das **`dominant-baseline`** Attribut gibt die dominante Grundlinie an, die verwendet wird, um den Text des Rahmens und die inline-level Inhalte auszurichten. Es legt auch die Standardausrichtungsgrundlinie aller Boxen fest, die an der Grundlinienausrichtung im Ausrichtungszusammenhang der Box teilnehmen.

Es wird verwendet, um eine Skalierte-Grundlinientabelle zu bestimmen oder neu zu bestimmen. Eine skalierte-Grundlinientabelle ist ein zusammengesetzter Wert mit drei Komponenten:

1. ein Grundlinien-Identifikator für die dominante Grundlinie,
2. eine Grundlinientabelle, und
3. eine Grundlinientabelle Schriftgröße.

Einige Werte der Eigenschaft bestimmen alle drei Werte neu. Andere stellen nur die Schriftgröße der Grundlinientabelle wieder her. Wenn der Anfangswert `auto` zu einem unerwünschten Ergebnis führen würde, kann diese Eigenschaft verwendet werden, um die gewünschte skalierte-Grundlinientabelle explizit festzulegen.

Wenn es keine Grundlinientabelle in der nominalen Schriftart gibt oder wenn der Grundlinientabelle ein Eintrag für die gewünschte Grundlinie fehlt, kann der Browser Heuristiken verwenden, um die Position der gewünschten Grundlinie zu bestimmen.

> [!NOTE]
> Als Präsentationsattribut kann `dominant-baseline` als CSS-Eigenschaft verwendet werden. Siehe {{cssxref('dominant-baseline')}} für mehr Informationen.

Dieses Attribut kann mit den folgenden SVG-Elementen verwendet werden:

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

## Nutzungshinweise

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

  - : Wenn diese Eigenschaft auf einem {{SVGElement("text")}}-Element vorkommt, hängt der berechnete Wert vom Wert des {{SVGAttr("writing-mode")}} Attributs ab.

    Wenn der {{SVGAttr("writing-mode")}} horizontal ist, dann ist der Wert des dominanten-Grundlinienkomponenten `alphabetic`. Andernfalls, wenn der {{SVGAttr("writing-mode")}} vertikal ist, dann ist der Wert des dominanten-Grundlinienkomponenten `central`.

    Wenn diese Eigenschaft auf einem {{SVGElement("tspan")}}, {{SVGElement("tref")}}, oder {{SVGElement("textPath")}}-Element vorkommt, bleiben die dominante Grundlinie und die Grundlinientabelle dieselben wie die des übergeordneten Textelementes.

    Wenn der berechnete {{SVGAttr("baseline-shift")}} Wert die Grundlinie tatsächlich verschiebt, wird die Schriftgröße der Grundlinientabelle auf den Wert des {{SVGAttr("font-size")}} Attributs des Elements gesetzt, auf dem das `dominant-baseline` Attribut vorkommt. Ansonsten bleibt die Schriftgröße der Grundlinientabelle dieselbe wie die des Elements.

    Wenn es kein übergeordnetes Textelement gibt, wird der Wert der skalierte-Grundlinientabelle wie oben für {{SVGElement("text")}}-Elemente konstruiert.

- `use-script` {{deprecated_inline}}
  - : Die dominante-Grundlinie und die Grundlinientabelle werden durch Bestimmen des vorherrschenden Skripts der Zeicheninhalt-Laufdaten festgelegt. Der {{SVGAttr("writing-mode")}}, sei es horizontal oder vertikal, wird verwendet, um das entsprechende Set von Grundlinientabellen auszuwählen, und die dominante Grundlinie wird verwendet, um die Grundlinientabelle auszuwählen, die dieser Grundlinie entspricht. Die Schriftgröße der Grundlinientabelle wird auf den Wert des {{SVGAttr("font-size")}} Attributs des Elements gesetzt, auf dem das `dominant-baseline` Attribut vorkommt.
- `no-change` {{deprecated_inline}}
  - : Die dominante-Grundlinie, die Grundlinientabelle und die Schriftgröße der Grundlinientabelle bleiben dieselben wie die des übergeordneten Textelementes.
- `reset-size` {{deprecated_inline}}
  - : Die dominante-Grundlinie und die Grundlinientabelle bleiben gleich, aber die Schriftgröße der Grundlinientabelle wird auf den Wert des {{SVGAttr("font-size")}} Attributs auf diesem Element geändert. Dies skaliert die Grundlinientabelle für die aktuelle {{SVGAttr("font-size")}} neu.
- `ideographic`
  - : Der Grundlinien-Identifikator für die dominante-Grundlinie wird auf `ideographic` gesetzt, die abgeleitete Grundlinientabelle wird unter Verwendung der `ideographic` Grundlinientabelle in der Schriftart konstruiert, und die Schriftgröße der Grundlinientabelle wird auf den Wert des {{SVGAttr("font-size")}} Attributs auf diesem Element geändert.
- `alphabetic`
  - : Der Grundlinien-Identifikator für die dominante-Grundlinie wird auf `alphabetic` gesetzt, die abgeleitete Grundlinientabelle wird unter Verwendung der `alphabetic` Grundlinientabelle in der Schriftart konstruiert, und die Schriftgröße der Grundlinientabelle wird auf den Wert des {{SVGAttr("font-size")}} Attributs auf diesem Element geändert.
- `hanging`
  - : Der Grundlinien-Identifikator für die dominante-Grundlinie wird auf `hanging` gesetzt, die abgeleitete Grundlinientabelle wird unter Verwendung der `hanging` Grundlinientabelle in der Schriftart konstruiert, und die Schriftgröße der Grundlinientabelle wird auf den Wert des {{SVGAttr("font-size")}} Attributs auf diesem Element geändert.
- `mathematical`
  - : Der Grundlinien-Identifikator für die dominante-Grundlinie wird auf `mathematical` gesetzt, die abgeleitete Grundlinientabelle wird unter Verwendung der `mathematical` Grundlinientabelle in der Schriftart konstruiert, und die Schriftgröße der Grundlinientabelle wird auf den Wert des {{SVGAttr("font-size")}} Attributs auf diesem Element geändert.
- `central`
  - : Der Grundlinien-Identifikator für die dominante-Grundlinie wird auf `central` gesetzt. Die abgeleitete Grundlinientabelle wird aus den in einer Grundlinientabelle der Schriftart definierten Grundlinien konstruiert. Diese Schriftart-Grundlinientabelle wird unter Verwendung der folgenden Prioritätenreihenfolge von Grundlinientabellen-Namen ausgewählt: `ideographic`, `alphabetic`, `hanging`, `mathematical`. Die Schriftgröße der Grundlinientabelle wird auf den Wert des {{SVGAttr("font-size")}} Attributs auf diesem Element geändert.
- `middle`
  - : Der Grundlinien-Identifikator für die dominante-Grundlinie wird auf `middle` gesetzt. Die abgeleitete Grundlinientabelle wird aus den in einer Grundlinientabelle der Schriftart definierten Grundlinien konstruiert. Diese Schriftart-Grundlinientabelle wird unter Verwendung der folgenden Prioritätenreihenfolge von Grundlinientabellen-Namen ausgewählt: `alphabetic`, `ideographic`, `hanging`, `mathematical`. Die Schriftgröße der Grundlinientabelle wird auf den Wert des {{SVGAttr("font-size")}} Attributs auf diesem Element geändert.
- `text-after-edge`
  - : Der Grundlinien-Identifikator für die dominante-Grundlinie wird auf `text-after-edge` gesetzt. Die abgeleitete Grundlinientabelle wird aus den in einer Grundlinientabelle der Schriftart definierten Grundlinien konstruiert. Die Wahl, welche Schriftart-Grundlinientabelle aus den Grundlinientabellen in der Schriftart verwendet wird, ist abhängig vom Browser. Die Schriftgröße der Grundlinientabelle wird auf den Wert des {{SVGAttr("font-size")}} Attributs auf diesem Element geändert.
- `text-before-edge`
  - : Der Grundlinien-Identifikator für die dominante-Grundlinie wird auf `text-before-edge` gesetzt. Die abgeleitete Grundlinientabelle wird aus den in einer Grundlinientabelle der Schriftart definierten Grundlinien konstruiert. Die Wahl, welche Grundlinientabelle aus den Grundlinientabellen in der Schriftart verwendet wird, ist abhängig vom Browser. Die Schriftgröße der Grundlinientabelle wird auf den Wert des {{SVGAttr("font-size")}} Attributs auf diesem Element geändert.
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
