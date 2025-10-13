---
title: dominant-baseline
slug: Web/SVG/Reference/Attribute/dominant-baseline
l10n:
  sourceCommit: 7615562a3689a3e23a2b6b623597f4391740a53e
---

Das **`dominant-baseline`** Attribut legt die dominante Grundlinie fest, welche die Grundlinie ist, die verwendet wird, um den Text und den Inline-Inhalt der Box auszurichten. Es gibt auch die Standard-Ausgleichsgrundlinie aller Boxen an, die an der Ausgleichsausrichtung im Ausrichtungskontext der Box teilnehmen.

Es wird verwendet, um eine skalierte Grundlinien-Tabelle zu bestimmen oder neu zu bestimmen. Eine skalierte Grundlinien-Tabelle ist ein zusammengesetzter Wert mit drei Komponenten:

1. einem Grundlinien-Identifikator für die dominante Grundlinie,
2. einer Grundlinien-Tabelle und
3. einer Schriftgröße der Grundlinien-Tabelle.

Einige Werte der Eigenschaft bestimmen alle drei Werte neu; andere stellen nur die Schriftgröße der Grundlinien-Tabelle neu ein. Wenn der Anfangswert, `auto`, ein unerwünschtes Ergebnis liefert, kann diese Eigenschaft verwendet werden, um die gewünschte skalierte Grundlinien-Tabelle explizit festzulegen.

Wenn es keine Grundlinien-Tabelle in der nominalen Schriftart gibt oder wenn die Grundlinien-Tabelle keinen Eintrag für die gewünschte Grundlinie hat, kann der Browser Heuristik verwenden, um die Position der gewünschten Grundlinie zu bestimmen.

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
    bold 14px "Helvetica",
    "Verdana",
    "Arial",
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

## Verwendungsnotizen

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
  - : Wenn diese Eigenschaft auf einem {{SVGElement("text")}}-Element auftritt, hängt der berechnete Wert vom Wert des {{SVGAttr("writing-mode")}}-Attributs ab.

    Wenn der {{SVGAttr("writing-mode")}} horizontal ist, dann ist der Wert der dominant-baseline-Komponente `alphabetic`. Andernfalls, wenn {{SVGAttr("writing-mode")}} vertikal ist, ist der Wert der dominant-baseline-Komponente `central`.

    Wenn diese Eigenschaft auf einem {{SVGElement("tspan")}} oder {{SVGElement("textPath")}}-Element auftritt, bleiben die dominant-baseline und die Grundlinien-Tabelle Komponenten dieselben wie die des übergeordneten Textinhalts-Elements.

    Wenn der berechnete {{SVGAttr("baseline-shift")}}-Wert die Grundlinie tatsächlich verschiebt, wird die Schriftgrößen-Komponente der Grundlinien-Tabelle auf den Wert des {{SVGAttr("font-size")}}-Attributs auf dem Element, auf dem das `dominant-baseline` Attribut vorkommt, gesetzt, andernfalls bleibt die Schriftgrößen-Komponente der Grundlinien-Tabelle dieselbe wie die des Elements.

    Wenn es kein übergeordnetes Textinhalts-Element gibt, wird der skalierte Grundlinien-Tabelle-Wert wie oben für {{SVGElement("text")}}-Elemente konstruiert.

- `use-script` {{deprecated_inline}}
  - : Die dominant-baseline und die Grundlinien-Tabelle Komponenten werden festgelegt, indem das vorherrschende Skript des Zeichendatensatzes bestimmt wird. Der {{SVGAttr("writing-mode")}}, ob horizontal oder vertikal, wird verwendet, um die geeignete Menge an Grundlinien-Tabellen auszuwählen und die dominante Grundlinie wird verwendet, um die Grundlinien-Tabelle auszuwählen, die dieser Grundlinie entspricht. Die Schriftgrößen-Komponente der Grundlinien-Tabelle wird auf den Wert des {{SVGAttr("font-size")}}-Attributs auf dem Element, auf dem das `dominant-baseline` Attribut vorkommt, gesetzt.
- `no-change` {{deprecated_inline}}
  - : Die dominant-baseline, die Grundlinien-Tabelle und die Schriftgrößen-Komponente der Grundlinien-Tabelle bleiben dieselben wie die des übergeordneten Textinhalts-Elements.
- `reset-size` {{deprecated_inline}}
  - : Die dominant-baseline und die Grundlinien-Tabelle bleiben dieselben, aber die Schriftgrößen-Komponente der Grundlinien-Tabelle wird auf den Wert des {{SVGAttr("font-size")}}-Attributs auf diesem Element geändert. Dies skaliert die Grundlinien-Tabelle für die aktuelle {{SVGAttr("font-size")}} neu.
- `ideographic`
  - : Der Grundlinien-Identifikator für die dominant-baseline ist `ideographic`, die abgeleitete Grundlinien-Tabelle wird mit der `ideographic` Grundlinien-Tabelle in der Schriftart konstruiert und die Schriftgrößen-Komponente der Grundlinien-Tabelle wird auf den Wert des {{SVGAttr("font-size")}}-Attributs auf diesem Element geändert.
- `alphabetic`
  - : Der Grundlinien-Identifikator für die dominant-baseline ist `alphabetic`, die abgeleitete Grundlinien-Tabelle wird mit der `alphabetic` Grundlinien-Tabelle in der Schriftart konstruiert und die Schriftgrößen-Komponente der Grundlinien-Tabelle wird auf den Wert des {{SVGAttr("font-size")}}-Attributs auf diesem Element geändert.
- `hanging`
  - : Der Grundlinien-Identifikator für die dominant-baseline ist `hanging`, die abgeleitete Grundlinien-Tabelle wird mit der `hanging` Grundlinien-Tabelle in der Schriftart konstruiert und die Schriftgrößen-Komponente der Grundlinien-Tabelle wird auf den Wert des {{SVGAttr("font-size")}}-Attributs auf diesem Element geändert.
- `mathematical`
  - : Der Grundlinien-Identifikator für die dominant-baseline ist `mathematical`, die abgeleitete Grundlinien-Tabelle wird mit der `mathematical` Grundlinien-Tabelle in der Schriftart konstruiert und die Schriftgrößen-Komponente der Grundlinien-Tabelle wird auf den Wert des {{SVGAttr("font-size")}}-Attributs auf diesem Element geändert.
- `central`
  - : Der Grundlinien-Identifikator für die dominant-baseline ist `central`. Die abgeleitete Grundlinien-Tabelle wird aus den definierten Grundlinien in einer Grundlinien-Tabelle in der Schriftart konstruiert. Diese Schriftart-Grundlinien-Tabelle wird nach der folgenden Prioritätenreihenfolge der Grundlinien-Tabelen-Namen ausgewählt: `ideographic`, `alphabetic`, `hanging`, `mathematical`. Die Schriftgrößen-Komponente der Grundlinien-Tabelle wird auf den Wert des {{SVGAttr("font-size")}}-Attributs auf diesem Element geändert.
- `middle`
  - : Der Grundlinien-Identifikator für die dominant-baseline ist `middle`. Die abgeleitete Grundlinien-Tabelle wird aus den definierten Grundlinien in einer Grundlinien-Tabelle in der Schriftart konstruiert. Diese Schriftart-Grundlinien-Tabelle wird nach der folgenden Prioritätenreihenfolge der Grundlinien-Tabelen-Namen ausgewählt: `alphabetic`, `ideographic`, `hanging`, `mathematical`. Die Schriftgrößen-Komponente der Grundlinien-Tabelle wird auf den Wert des {{SVGAttr("font-size")}}-Attributs auf diesem Element geändert.
- `text-after-edge`
  - : Der Grundlinien-Identifikator für die dominant-baseline ist `text-after-edge`. Die abgeleitete Grundlinien-Tabelle wird aus den definierten Grundlinien in einer Grundlinien-Tabelle in der Schriftart konstruiert. Die Wahl, welche Schriftart-Grundlinien-Tabelle aus den Grundlinien-Tabellen in der Schriftart verwendet wird, ist browserabhängig. Die Schriftgrößen-Komponente der Grundlinien-Tabelle wird auf den Wert des {{SVGAttr("font-size")}}-Attributs auf diesem Element geändert.
- `text-before-edge`
  - : Der Grundlinien-Identifikator für die dominant-baseline ist `text-before-edge`. Die abgeleitete Grundlinien-Tabelle wird aus den definierten Grundlinien in einer Grundlinien-Tabelle in der Schriftart konstruiert. Die Wahl, welche Grundlinien-Tabelle aus den Grundlinien-Tabellen in der Schriftart verwendet wird, ist browserabhängig. Die Schriftgrößen-Komponente der Grundlinien-Tabelle wird auf den Wert des {{SVGAttr("font-size")}}-Attributs auf diesem Element geändert.
- `text-top`
  - : Dieser Wert verwendet den oberen Rand der em-Box als Grundlinie.

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
