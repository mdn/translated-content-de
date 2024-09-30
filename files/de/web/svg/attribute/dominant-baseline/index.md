---
title: dominant-baseline
slug: Web/SVG/Attribute/dominant-baseline
l10n:
  sourceCommit: e295790b3a62baceeb832650e2c0cc9256a23156
---

{{SVGRef}}

Das **`dominant-baseline`**-Attribut legt die dominante Basislinie fest, die verwendet wird, um den Text und die Inhalte auf Inline-Niveau der Box auszurichten. Es zeigt auch die Standardausrichtungs-Basislinie aller Boxen an, die an der Basisausrichtung im Ausrichtungskontext der Box teilnehmen.

Es wird verwendet, um eine skalierte Basislinientabelle zu bestimmen oder neu zu bestimmen. Eine skalierte Basislinientabelle ist ein zusammengesetzter Wert mit drei Komponenten:

1. einem Basislinienidentifikator für die dominante Basislinie,
2. einer Basistabelle und
3. einer Schriftgröße der Basistabelle.

Einige Werte der Eigenschaft bestimmen alle drei Werte neu. Andere stellen nur die Schriftgröße der Basistabelle wieder her. Wenn der Anfangswert `auto` ein unerwünschtes Ergebnis liefern würde, kann diese Eigenschaft verwendet werden, um die gewünschte skalierte Basislinientabelle ausdrücklich festzulegen.

Wenn es in der nominalen Schriftart keine Basistabelle gibt oder wenn die Basistabelle keinen Eintrag für die gewünschte Basislinie hat, kann der Browser Heuristiken verwenden, um die Position der gewünschten Basislinie zu bestimmen.

> [!NOTE]
> Als Präsentationsattribut kann `dominant-baseline` als CSS-Eigenschaft verwendet werden. Siehe {{cssxref('dominant-baseline')}} für mehr.

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

## Anwendungsnotizen

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

  - : Wenn diese Eigenschaft auf einem {{SVGElement("text")}}-Element vorkommt, hängt der berechnete Wert von dem Wert des {{SVGAttr("writing-mode")}}-Attributs ab.

    Wenn der {{SVGAttr("writing-mode")}} horizontal ist, ist der Wert der dominanten Basislinienkomponente `alphabetic`. Andernfalls, wenn der {{SVGAttr("writing-mode")}} vertikal ist, ist der Wert der dominanten Basislinienkomponente `central`.

    Wenn diese Eigenschaft auf einem {{SVGElement("tspan")}}, {{SVGElement("tref")}} oder {{SVGElement("textPath")}}-Element vorkommt, bleiben die dominante Basislinie und die Basistabellenkomponenten dieselben wie die des übergeordneten Textelement-Inhalts.

    Wenn der berechnete {{SVGAttr("baseline-shift")}}-Wert die Basislinie tatsächlich verschiebt, wird die Schriftgrößenkomponente der Basistabelle auf den Wert des {{SVGAttr("font-size")}}-Attributs für das Element gesetzt, auf dem das `dominant-baseline`-Attribut vorkommt. Andernfalls bleibt die Schriftgrößenkomponente der Basistabelle dieselbe wie die des Elements.

    Wenn es kein übergeordnetes Textelement gibt, wird der skalierte Basislinientabellenwert wie oben für {{SVGElement("text")}}-Elemente konstruiert.

- `use-script` {{deprecated_inline}}
  - : Die dominanten Basislinien- und Basistabellenkomponenten werden durch Bestimmen des vorherrschenden Skripts des Zeichendateninhalts festgelegt. Der {{SVGAttr("writing-mode")}}, ob horizontal oder vertikal, wird verwendet, um den geeigneten Satz von Basistabellen auszuwählen, und die dominante Basislinie wird verwendet, um die Basistabelle auszuwählen, die dieser Basislinie entspricht. Die Schriftgrößenkomponente der Basistabelle wird auf den Wert des {{SVGAttr("font-size")}}-Attributs auf dem Element gesetzt, auf dem das `dominant-baseline`-Attribut vorkommt.
- `no-change` {{deprecated_inline}}
  - : Die dominanten Basislinien-, Basistabellen- und Schriftgrößenkomponenten der Basistabelle bleiben dieselben wie die des übergeordneten Textelement-Inhalts.
- `reset-size` {{deprecated_inline}}
  - : Die dominanten Basislinien- und Basistabellen bleiben dieselben, aber die Schriftgrößenkomponente der Basistabelle wird auf den Wert des {{SVGAttr("font-size")}}-Attributs auf diesem Element geändert. Dies skaliert die Basistabelle für die aktuelle {{SVGAttr("font-size")}} neu.
- `ideographic`
  - : Der Basislinienidentifier für die dominante Basislinie wird auf `ideographic` gesetzt, die abgeleitete Basistabelle wird unter Verwendung der `ideographic`-Basistabelle in der Schrift konstruiert, und die Schriftgrößenkomponente der Basistabelle wird auf den Wert des {{SVGAttr("font-size")}}-Attributs auf diesem Element geändert.
- `alphabetic`
  - : Der Basislinienidentifier für die dominante Basislinie wird auf `alphabetic` gesetzt, die abgeleitete Basistabelle wird unter Verwendung der `alphabetic`-Basistabelle in der Schrift konstruiert, und die Schriftgrößenkomponente der Basistabelle wird auf den Wert des {{SVGAttr("font-size")}}-Attributs auf diesem Element geändert.
- `hanging`
  - : Der Basislinienidentifier für die dominante Basislinie wird auf `hanging` gesetzt, die abgeleitete Basistabelle wird unter Verwendung der `hanging`-Basistabelle in der Schrift konstruiert, und die Schriftgrößenkomponente der Basistabelle wird auf den Wert des {{SVGAttr("font-size")}}-Attributs auf diesem Element geändert.
- `mathematical`
  - : Der Basislinienidentifier für die dominante Basislinie wird auf `mathematical` gesetzt, die abgeleitete Basistabelle wird unter Verwendung der `mathematical`-Basistabelle in der Schrift konstruiert, und die Schriftgrößenkomponente der Basistabelle wird auf den Wert des {{SVGAttr("font-size")}}-Attributs auf diesem Element geändert.
- `central`
  - : Der Basislinienidentifier für die dominante Basislinie wird auf `central` gesetzt. Die abgeleitete Basistabelle wird aus den definierten Basislinien in einer Basistabelle in der Schrift konstruiert. Diese Schrift-Basistabelle wird anhand der folgenden Prioritätenreihenfolge der Basistabellennamen ausgewählt: `ideographic`, `alphabetic`, `hanging`, `mathematical`. Die Schriftgrößenkomponente der Basistabelle wird auf den Wert des {{SVGAttr("font-size")}}-Attributs auf diesem Element geändert.
- `middle`
  - : Der Basislinienidentifier für die dominante Basislinie wird auf `middle` gesetzt. Die abgeleitete Basistabelle wird aus den definierten Basislinien in einer Basistabelle in der Schrift konstruiert. Diese Schrift-Basistabelle wird anhand der folgenden Prioritätenreihenfolge der Basistabellennamen ausgewählt: `alphabetic`, `ideographic`, `hanging`, `mathematical`. Die Schriftgrößenkomponente der Basistabelle wird auf den Wert des {{SVGAttr("font-size")}}-Attributs auf diesem Element geändert.
- `text-after-edge`
  - : Der Basislinienidentifier für die dominante Basislinie wird auf `text-after-edge` gesetzt. Die abgeleitete Basistabelle wird aus den definierten Basislinien in einer Basistabelle in der Schrift konstruiert. Die Wahl, welche Schrift-Basistabelle aus den Basistabellen in der Schrift verwendet wird, hängt vom Browser ab. Die Schriftgrößenkomponente der Basistabelle wird auf den Wert des {{SVGAttr("font-size")}}-Attributs auf diesem Element geändert.
- `text-before-edge`
  - : Der Basislinienidentifier für die dominante Basislinie wird auf `text-before-edge` gesetzt. Die abgeleitete Basistabelle wird aus den definierten Basislinien in einer Basistabelle in der Schrift konstruiert. Die Wahl, welche Basistabelle aus den Basistabellen in der Schrift verwendet wird, hängt vom Browser ab. Die Schriftgrößenkomponente der Basistabelle wird auf den Wert des {{SVGAttr("font-size")}}-Attributs auf diesem Element geändert.
- `text-top`
  - : Dieser Wert verwendet die Oberkante der em-Box als Basislinie.

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
