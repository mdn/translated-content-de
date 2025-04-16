---
title: dominant-baseline
slug: Web/SVG/Reference/Attribute/dominant-baseline
l10n:
  sourceCommit: 3c83d88f02f33f4066224e9f624a17dd2a0b0d19
---

Das **`dominant-baseline`** Attribut legt die dominante Basislinie fest, die verwendet wird, um den Text und die Inline-Inhalte des Kastens auszurichten. Es gibt auch die Standardausrichtungsbasislinie aller Kästen an, die an der Basislinienausrichtung im Ausrichtungskontext des Kastens teilnehmen.

Es wird verwendet, um eine skalierte Grundlinientabelle zu bestimmen oder neu zu bestimmen. Eine skalierte Grundlinientabelle ist ein zusammengesetzter Wert mit drei Komponenten:

1. einem Basislinien-Identifikator für die dominante Basislinie,
2. einer Grundlinientabelle und
3. einer Schriftgröße der Grundlinientabelle.

Einige Werte der Eigenschaft bestimmen alle drei Werte neu, andere wiederum stellen nur die Schriftgröße der Grundlinientabelle neu ein. Wenn der Initialwert `auto` ein unerwünschtes Ergebnis liefern würde, kann diese Eigenschaft verwendet werden, um explizit die gewünschte skalierte Basislinientabelle festzulegen.

Wenn es in der nominalen Schrift keine Grundlinientabelle gibt oder wenn der Eintrag für die gewünschte Basislinie in der Grundlinientabelle fehlt, kann der Browser Heuristiken verwenden, um die Position der gewünschten Basislinie zu bestimmen.

> [!NOTE]
> Als Präsentationsattribut hat `dominant-baseline` auch ein entsprechendes CSS-Attribut: {{cssxref("dominant-baseline")}}. Wenn beide angegeben sind, hat die CSS-Eigenschaft Vorrang.

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

## Anwendungshinweise

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

  - : Wenn diese Eigenschaft auf einem {{SVGElement("text")}} Element auftritt, hängt der berechnete Wert vom Wert des {{SVGAttr("writing-mode")}} Attributs ab.

    Wenn der {{SVGAttr("writing-mode")}} horizontal ist, dann ist der Wert der dominanten Basislinienkomponente `alphabetic`. Andernfalls, wenn der {{SVGAttr("writing-mode")}} vertikal ist, ist der Wert der dominanten Basislinienkomponente `central`.

    Wenn diese Eigenschaft auf einem {{SVGElement("tspan")}} oder {{SVGElement("textPath")}} Element auftritt, bleiben die dominante Basislinie und die Komponenten der Grundlinientabelle dieselben wie die des übergeordneten Textelementes.

    Wenn der berechnete {{SVGAttr("baseline-shift")}} Wert tatsächlich die Basislinie verschiebt, wird die Komponente der Schriftgröße der Grundlinientabelle auf den Wert des {{SVGAttr("font-size")}} Attributs des Elements gesetzt, auf dem das `dominant-baseline` Attribut auftritt, andernfalls bleibt die Schriftgröße der Grundlinientabelle dieselbe wie die des Elements.

    Wenn es kein übergeordnetes Textelement gibt, wird der Wert der skalierten Basislinientabelle wie oben für {{SVGElement("text")}} Elemente konstruiert.

- `use-script` {{deprecated_inline}}
  - : Die dominante Basislinie und die Komponenten der Grundlinientabelle werden durch Bestimmung des vorherrschenden Schriftsystems des Zeichendateninhalts festgelegt. Der {{SVGAttr("writing-mode")}}, ob horizontal oder vertikal, wird verwendet, um die entsprechende Menge von Grundlinientabellen auszuwählen und die dominante Basislinie wird verwendet, um die Grundlinientabelle auszuwählen, die dieser Basislinie entspricht. Die Schriftgrößenkomponente der Grundlinientabelle wird auf den Wert des {{SVGAttr("font-size")}} Attributs des Elements gesetzt, auf dem das `dominant-baseline` Attribut auftritt.
- `no-change` {{deprecated_inline}}
  - : Die dominante Basislinie, die Grundlinientabelle und die Schriftgröße der Grundlinientabelle bleiben dieselben wie die des übergeordneten Textelements.
- `reset-size` {{deprecated_inline}}
  - : Die dominante Basislinie und die Grundlinientabelle bleiben dieselben, aber die Schriftgröße der Grundlinientabelle wird auf den Wert des {{SVGAttr("font-size")}} Attributs auf diesem Element geändert. Dies skaliert die Grundlinientabelle für die aktuelle {{SVGAttr("font-size")}} neu.
- `ideographic`
  - : Der Basislinien-Identifikator für die dominante Basislinie wird auf `ideographic` festgelegt, die abgeleitete Grundlinientabelle wird unter Verwendung der `ideographic` Grundlinientabelle in der Schriftart konstruiert und die Schriftgrößenkomponente der Grundlinientabelle wird auf den Wert des {{SVGAttr("font-size")}} Attributs auf diesem Element geändert.
- `alphabetic`
  - : Der Basislinien-Identifikator für die dominante Basislinie wird auf `alphabetic` festgelegt, die abgeleitete Grundlinientabelle wird unter Verwendung der `alphabetic` Grundlinientabelle in der Schriftart konstruiert und die Schriftgrößenkomponente der Grundlinientabelle wird auf den Wert des {{SVGAttr("font-size")}} Attributs auf diesem Element geändert.
- `hanging`
  - : Der Basislinien-Identifikator für die dominante Basislinie wird auf `hanging` festgelegt, die abgeleitete Grundlinientabelle wird unter Verwendung der `hanging` Grundlinientabelle in der Schriftart konstruiert und die Schriftgrößenkomponente der Grundlinientabelle wird auf den Wert des {{SVGAttr("font-size")}} Attributs auf diesem Element geändert.
- `mathematical`
  - : Der Basislinien-Identifikator für die dominante Basislinie wird auf `mathematical` festgelegt, die abgeleitete Grundlinientabelle wird unter Verwendung der `mathematical` Grundlinientabelle in der Schriftart konstruiert und die Schriftgrößenkomponente der Grundlinientabelle wird auf den Wert des {{SVGAttr("font-size")}} Attributs auf diesem Element geändert.
- `central`
  - : Der Basislinien-Identifikator für die dominante Basislinie wird auf `central` festgelegt. Die abgeleitete Grundlinientabelle wird aus den definierten Basislinien in einer Grundlinientabelle in der Schriftart konstruiert. Diese Schrift-Grundlinientabelle wird unter Verwendung der folgenden Prioritätsreihenfolge von Grundlinientabellennamen ausgewählt: `ideographic`, `alphabetic`, `hanging`, `mathematical`. Die Schriftgrößenkomponente der Grundlinientabelle wird auf den Wert des {{SVGAttr("font-size")}} Attributs auf diesem Element geändert.
- `middle`
  - : Der Basislinien-Identifikator für die dominante Basislinie wird auf `middle` festgelegt. Die abgeleitete Grundlinientabelle wird aus den definierten Basislinien in einer Grundlinientabelle in der Schriftart konstruiert. Diese Schrift-Grundlinientabelle wird unter Verwendung der folgenden Prioritätsreihenfolge von Grundlinientabellennamen ausgewählt: `alphabetic`, `ideographic`, `hanging`, `mathematical`. Die Schriftgrößenkomponente der Grundlinientabelle wird auf den Wert des {{SVGAttr("font-size")}} Attributs auf diesem Element geändert.
- `text-after-edge`
  - : Der Basislinien-Identifikator für die dominante Basislinie wird auf `text-after-edge` festgelegt. Die abgeleitete Grundlinientabelle wird aus den definierten Basislinien in einer Grundlinientabelle in der Schriftart konstruiert. Welche Schrift-Grundlinientabelle aus den in der Schriftart vorhandenen Grundlinientabellen verwendet wird, hängt vom Browser ab. Die Schriftgrößenkomponente der Grundlinientabelle wird auf den Wert des {{SVGAttr("font-size")}} Attributs auf diesem Element geändert.
- `text-before-edge`
  - : Der Basislinien-Identifikator für die dominante Basislinie wird auf `text-before-edge` festgelegt. Die abgeleitete Grundlinientabelle wird aus den definierten Basislinien in einer Grundlinientabelle in der Schriftart konstruiert. Welche Grundlinientabelle aus den in der Schriftart vorhandenen Grundlinientabellen verwendet wird, hängt vom Browser ab. Die Schriftgrößenkomponente der Grundlinientabelle wird auf den Wert des {{SVGAttr("font-size")}} Attributs auf diesem Element geändert.
- `text-top`
  - : Dieser Wert verwendet die Oberseite des Em-Kastens als Basislinie.

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

{{Spezifikationen}}

## Browser-Kompatibilität

{{Kompat}}

## Siehe auch

- CSS {{cssxref('dominant-baseline')}} Eigenschaft
