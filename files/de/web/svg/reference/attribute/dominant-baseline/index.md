---
title: dominant-baseline
slug: Web/SVG/Reference/Attribute/dominant-baseline
l10n:
  sourceCommit: 70285e396b5c97675e90b85d573be42078e0168e
---

Das **`dominant-baseline`** Attribut gibt die dominante Basislinie an, die verwendet wird, um den Text und Inhalte auf Inline-Ebene einer Box auszurichten. Es zeigt auch die Standardausrichtungsbasislinie aller Boxen an, die an der Basislinienaussrichtung im Ausrichtungskontext der Box teilnehmen.

Es wird verwendet, um eine skalierte Basislinientabelle zu bestimmen oder neu zu bestimmen. Eine skalierte Basislinientabelle ist ein zusammengesetzter Wert mit drei Komponenten:

1. einem Basislinien-Identifikator für die dominante Basislinie,
2. einer Basislinientabelle und
3. einer Schriftgröße der Basislinientabelle.

Einige Werte der Eigenschaft bestimmen alle drei Werte neu. Andere stellen nur die Schriftgröße der Basislinientabelle wieder her. Wenn der Initialwert `auto` ein unerwünschtes Ergebnis liefert, kann diese Eigenschaft verwendet werden, um die gewünschte skalierte Basislinientabelle explizit festzulegen.

Falls es keine Basislinientabelle in der nominalen Schriftart gibt oder die Basislinientabelle keinen Eintrag für die gewünschte Basislinie enthält, kann der Browser heuristische Methoden verwenden, um die Position der gewünschten Basislinie zu bestimmen.

> [!NOTE]
> Als Präsentationsattribut hat `dominant-baseline` auch ein entsprechendes CSS-Property: {{cssxref("dominant-baseline")}}. Wenn beide angegeben sind, hat die CSS-Eigenschaft Vorrang.

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
        <a href="/de/docs/Web/CSS/CSS_values_and_units/Value_definition_syntax#single_bar">|</a>
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

    Wenn der {{SVGAttr("writing-mode")}} horizontal ist, ist der Wert der Komponenten der dominanten Basislinie `alphabetic`. Andernfalls, wenn der {{SVGAttr("writing-mode")}} vertikal ist, ist der Wert der Komponenten der dominanten Basislinie `central`.

    Wenn diese Eigenschaft auf einem {{SVGElement("tspan")}} oder {{SVGElement("textPath")}} Element auftritt, bleiben die dominante Basislinie und die Komponenten der Basislinientabelle dieselben wie bei dem übergeordneten Textelement.

    Wenn der berechnete {{SVGAttr("baseline-shift")}} Wert tatsächlich die Basislinie verschiebt, wird die Schriftgröße der Basislinientabelle auf den Wert des {{SVGAttr("font-size")}} Attributs des Elements gesetzt, auf dem das `dominant-baseline` Attribut auftritt, andernfalls bleibt die Schriftgröße der Basislinientabelle dieselbe wie die des Elements.

    Wenn es kein übergeordnetes Textelement gibt, wird der Wert der skalierten Basislinientabelle wie oben für {{SVGElement("text")}} Elemente konstruiert.

- `use-script` {{deprecated_inline}}
  - : Die dominante Basislinie und die Komponenten der Basislinientabelle werden bestimmt, indem das vorherrschende Skript des Zeichendateninhalts bestimmt wird. Der {{SVGAttr("writing-mode")}}, ob horizontal oder vertikal, wird verwendet, um den passenden Satz von Basislinientabellen auszuwählen, und die dominante Basislinie wird verwendet, um die Basislinientabelle auszuwählen, die dieser Basislinie entspricht. Die Schriftgröße der Basislinientabelle wird auf den Wert des {{SVGAttr("font-size")}} Attributs des Elements gesetzt, auf dem das `dominant-baseline` Attribut auftritt.
- `no-change` {{deprecated_inline}}
  - : Die dominante Basislinie, die Basislinientabelle und die Schriftgröße der Basislinientabelle bleiben dieselben wie die des übergeordneten Textelements.
- `reset-size` {{deprecated_inline}}
  - : Die dominante Basislinie und die Basislinientabelle bleiben dieselben, aber die Schriftgröße der Basislinientabelle wird auf den Wert des {{SVGAttr("font-size")}} Attributs dieses Elements geändert. Dies skaliert die Basislinientabelle neu für die aktuelle {{SVGAttr("font-size")}}.
- `ideographic`
  - : Der Basislinien-Identifikator für die dominante Basislinie wird auf `ideographic` gesetzt, die abgeleitete Basislinientabelle wird unter Verwendung der `ideographic` Basislinientabelle in der Schriftart konstruiert und die Schriftgröße der Basislinientabelle wird auf den Wert des {{SVGAttr("font-size")}} Attributs dieses Elements geändert.
- `alphabetic`
  - : Der Basislinien-Identifikator für die dominante Basislinie wird auf `alphabetic` gesetzt, die abgeleitete Basislinientabelle wird unter Verwendung der `alphabetic` Basislinientabelle in der Schriftart konstruiert und die Schriftgröße der Basislinientabelle wird auf den Wert des {{SVGAttr("font-size")}} Attributs dieses Elements geändert.
- `hanging`
  - : Der Basislinien-Identifikator für die dominante Basislinie wird auf `hanging` gesetzt, die abgeleitete Basislinientabelle wird unter Verwendung der `hanging` Basislinientabelle in der Schriftart konstruiert und die Schriftgröße der Basislinientabelle wird auf den Wert des {{SVGAttr("font-size")}} Attributs dieses Elements geändert.
- `mathematical`
  - : Der Basislinien-Identifikator für die dominante Basislinie wird auf `mathematical` gesetzt, die abgeleitete Basislinientabelle wird unter Verwendung der `mathematical` Basislinientabelle in der Schriftart konstruiert und die Schriftgröße der Basislinientabelle wird auf den Wert des {{SVGAttr("font-size")}} Attributs dieses Elements geändert.
- `central`
  - : Der Basislinien-Identifikator für die dominante Basislinie wird auf `central` gesetzt. Die abgeleitete Basislinientabelle wird aus den definierten Basislinien in einer Basislinientabelle in der Schriftart konstruiert. Diese Schriftbasislinientabelle wird unter Verwendung der folgenden Prioritätsreihenfolge von Basislinientabellennamen ausgewählt: `ideographic`, `alphabetic`, `hanging`, `mathematical`. Die Schriftgröße der Basislinientabelle wird auf den Wert des {{SVGAttr("font-size")}} Attributs dieses Elements geändert.
- `middle`
  - : Der Basislinien-Identifikator für die dominante Basislinie wird auf `middle` gesetzt. Die abgeleitete Basislinientabelle wird aus den definierten Basislinien in einer Basislinientabelle in der Schriftart konstruiert. Diese Schriftbasislinientabelle wird unter Verwendung der folgenden Prioritätsreihenfolge von Basislinientabellennamen ausgewählt: `alphabetic`, `ideographic`, `hanging`, `mathematical`. Die Schriftgröße der Basislinientabelle wird auf den Wert des {{SVGAttr("font-size")}} Attributs dieses Elements geändert.
- `text-after-edge`
  - : Der Basislinien-Identifikator für die dominante Basislinie wird auf `text-after-edge` gesetzt. Die abgeleitete Basislinientabelle wird aus den definierten Basislinien in einer Basislinientabelle in der Schriftart konstruiert. Die Wahl, welche Schriftbasislinientabelle aus den Basislinientabellen in der Schriftart verwendet wird, ist vom Browser abhängig. Die Schriftgröße der Basislinientabelle wird auf den Wert des {{SVGAttr("font-size")}} Attributs dieses Elements geändert.
- `text-before-edge`
  - : Der Basislinien-Identifikator für die dominante Basislinie wird auf `text-before-edge` gesetzt. Die abgeleitete Basislinientabelle wird aus den definierten Basislinien in einer Basislinientabelle in der Schriftart konstruiert. Die Wahl, welche Basislinientabelle aus den Basislinientabellen in der Schriftart verwendet wird, ist vom Browser abhängig. Die Schriftgröße der Basislinientabelle wird auf den Wert des {{SVGAttr("font-size")}} Attributs dieses Elements geändert.
- `text-top`
  - : Dieser Wert verwendet die Oberseite der Em-Box als Basislinie.

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
