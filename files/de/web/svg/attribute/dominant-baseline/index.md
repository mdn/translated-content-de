---
title: dominant-baseline
slug: Web/SVG/Attribute/dominant-baseline
l10n:
  sourceCommit: 892a7fb41030e07dfd8daaa57d874239be1ecc8a
---

{{SVGRef}}

Das **`dominant-baseline`**-Attribut gibt die dominante Grundlinie an, welche die Grundlinie ist, die verwendet wird, um den Text und die Inline-Inhalte der Box auszurichten. Es zeigt außerdem die Standard-Grundlinie jeder Box an, die in der Grundlinienausrichtung im Kontextrahmen der Box beteiligt ist.

Es wird verwendet, um eine skalierte Grundlinientabelle zu bestimmen oder neu zu bestimmen. Eine skalierte Grundlinientabelle ist ein zusammengesetzter Wert mit drei Komponenten:

1. ein Grundlinienkennzeichen für die dominante Grundlinie,
2. eine Grundlinientabelle und
3. eine Grundlinientabellenschriftgröße.

Einige Werte der Eigenschaft bestimmen alle drei Werte neu. Andere legen nur die Schriftgröße der Grundlinientabelle neu fest. Wenn der Anfangswert `auto` ein unerwünschtes Ergebnis liefert, kann dieses Attribut verwendet werden, um die gewünschte skalierte Grundlinientabelle explizit festzulegen.

Wenn in der Nominalschrift keine Grundlinientabelle vorhanden ist oder wenn die Grundlinientabelle keinen Eintrag für die gewünschte Grundlinie enthält, kann der Browser Heuristiken verwenden, um die Position der gewünschten Grundlinie zu bestimmen.

> [!NOTE]
> Als Präsentationsattribut hat `dominant-baseline` auch ein entsprechendes CSS-Attribut: {{cssxref("dominant-baseline")}}. Wenn beide angegeben sind, hat die CSS-Eigenschaft Vorrang.

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

## Hinweise zur Verwendung

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

    Wenn der {{SVGAttr("writing-mode")}} horizontal ist, hat die Komponente der dominanten Grundlinie den Wert `alphabetic`. Andernfalls, wenn der {{SVGAttr("writing-mode")}} vertikal ist, hat die Komponente der dominanten Grundlinie den Wert `central`.

    Wenn diese Eigenschaft auf einem {{SVGElement("tspan")}}, {{SVGElement("tref")}} oder {{SVGElement("textPath")}}-Element auftritt, bleiben die dominante Grundlinie und die Komponenten der Grundlinientabelle gleich wie die des übergeordneten Textelements.

    Wenn der berechnete {{SVGAttr("baseline-shift")}}-Wert die Grundlinie tatsächlich verschiebt, wird die Schriftgrößenkomponente der Grundlinientabelle auf den Wert des {{SVGAttr("font-size")}}-Attributs des Elements gesetzt, auf dem das `dominant-baseline`-Attribut vorkommt. Andernfalls bleibt die Schriftgrößenkomponente der Grundlinientabelle dieselbe wie die des Elements.

    Wenn kein übergeordnetes Textelement vorhanden ist, wird der Wert der skalierten Grundlinientabelle wie oben für {{SVGElement("text")}}-Elemente konstruiert.

- `use-script` {{deprecated_inline}}
  - : Die dominante Grundlinie und die Komponenten der Grundlinientabelle werden durch die Bestimmung des vorherrschenden Skripts der Zeichendateninhalte festgelegt. Der {{SVGAttr("writing-mode")}}, ob horizontal oder vertikal, wird verwendet, um die entsprechenden Grundlinientabellen auszuwählen, und die dominante Grundlinie wird verwendet, um die Grundlinientabelle auszuwählen, die dieser Grundlinie entspricht. Die Schriftgrößenkomponente der Grundlinientabelle wird auf den Wert des {{SVGAttr("font-size")}}-Attributs des Elements festgelegt, auf dem das `dominant-baseline`-Attribut vorkommt.
- `no-change` {{deprecated_inline}}
  - : Die dominante Grundlinie, die Grundlinientabelle und die Schriftgrößenkomponente der Grundlinientabelle bleiben mit der des übergeordneten Textelements identisch.
- `reset-size` {{deprecated_inline}}
  - : Die dominante Grundlinie und die Grundlinientabelle bleiben gleich, aber die Schriftgrößenkomponente der Grundlinientabelle wird auf den Wert des {{SVGAttr("font-size")}}-Attributs dieses Elements geändert. Dadurch wird die Grundlinientabelle für die aktuelle {{SVGAttr("font-size")}} neu skaliert.
- `ideographic`
  - : Das Grundlinienkennzeichen für die dominante Grundlinie wird auf `ideographic` gesetzt, die abgeleitete Grundlinientabelle wird unter Verwendung der `ideographic`-Grundlinientabelle aus der Schriftart konstruiert, und die Schriftgrößenkomponente der Grundlinientabelle wird auf den Wert des {{SVGAttr("font-size")}}-Attributs dieses Elements geändert.
- `alphabetic`
  - : Das Grundlinienkennzeichen für die dominante Grundlinie wird auf `alphabetic` gesetzt, die abgeleitete Grundlinientabelle wird unter Verwendung der `alphabetic`-Grundlinientabelle aus der Schriftart konstruiert, und die Schriftgrößenkomponente der Grundlinientabelle wird auf den Wert des {{SVGAttr("font-size")}}-Attributs dieses Elements geändert.
- `hanging`
  - : Das Grundlinienkennzeichen für die dominante Grundlinie wird auf `hanging` gesetzt, die abgeleitete Grundlinientabelle wird unter Verwendung der `hanging`-Grundlinientabelle aus der Schriftart konstruiert, und die Schriftgrößenkomponente der Grundlinientabelle wird auf den Wert des {{SVGAttr("font-size")}}-Attributs dieses Elements geändert.
- `mathematical`
  - : Das Grundlinienkennzeichen für die dominante Grundlinie wird auf `mathematical` gesetzt, die abgeleitete Grundlinientabelle wird unter Verwendung der `mathematical`-Grundlinientabelle aus der Schriftart konstruiert, und die Schriftgrößenkomponente der Grundlinientabelle wird auf den Wert des {{SVGAttr("font-size")}}-Attributs dieses Elements geändert.
- `central`
  - : Das Grundlinienkennzeichen für die dominante Grundlinie wird auf `central` gesetzt. Die abgeleitete Grundlinientabelle wird aus den definierten Grundlinien in einer Grundlinientabelle der Schriftart konstruiert. Diese Schriftgrundlinientabelle wird unter Verwendung der folgenden Prioritätsreihenfolge der Grundlinientabellennamen ausgewählt: `ideographic`, `alphabetic`, `hanging`, `mathematical`. Die Schriftgrößenkomponente der Grundlinientabelle wird auf den Wert des {{SVGAttr("font-size")}}-Attributs dieses Elements geändert.
- `middle`
  - : Das Grundlinienkennzeichen für die dominante Grundlinie wird auf `middle` gesetzt. Die abgeleitete Grundlinientabelle wird aus den definierten Grundlinien in einer Grundlinientabelle der Schriftart konstruiert. Diese Schriftgrundlinientabelle wird unter Verwendung der folgenden Prioritätsreihenfolge der Grundlinientabellennamen ausgewählt: `alphabetic`, `ideographic`, `hanging`, `mathematical`. Die Schriftgrößenkomponente der Grundlinientabelle wird auf den Wert des {{SVGAttr("font-size")}}-Attributs dieses Elements geändert.
- `text-after-edge`
  - : Das Grundlinienkennzeichen für die dominante Grundlinie wird auf `text-after-edge` gesetzt. Die abgeleitete Grundlinientabelle wird aus den definierten Grundlinien in einer Grundlinientabelle der Schriftart konstruiert. Die Wahl der Schriftgrundlinientabelle aus den Grundlinientabellen in der Schrift ist browserabhängig. Die Schriftgrößenkomponente der Grundlinientabelle wird auf den Wert des {{SVGAttr("font-size")}}-Attributs dieses Elements geändert.
- `text-before-edge`
  - : Das Grundlinienkennzeichen für die dominante Grundlinie wird auf `text-before-edge` gesetzt. Die abgeleitete Grundlinientabelle wird aus den definierten Grundlinien in einer Grundlinientabelle der Schriftart konstruiert. Die Wahl der Grundlinientabelle aus den Schriftgrundlinientabellen ist browserabhängig. Die Schriftgrößenkomponente der Grundlinientabelle wird auf den Wert des {{SVGAttr("font-size")}}-Attributs dieses Elements geändert.
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

- CSS {{cssxref('dominant-baseline')}}-Eigenschaft
