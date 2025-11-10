---
title: dominant-baseline
slug: Web/SVG/Reference/Attribute/dominant-baseline
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Das **`dominant-baseline`** Attribut spezifiziert die dominante Basislinie, welche die Basislinie ist, die zum Ausrichten des Textes und der Inline-Inhalte des Rahmens verwendet wird. Es zeigt auch die Standardausrichtungsbasislinie der an der Basislinienaussrichtung im Ausrichtungskontext des Rahmens beteiligten Boxen an.

Es wird verwendet, um eine S-angeglichene-Basislinientabelle zu bestimmen oder neu zu bestimmen. Eine S-angeglichene-Basislinientabelle ist ein zusammengesetzter Wert mit drei Komponenten:

1. einem Basislinienkennzeichner für die dominante Basislinie,
2. einer Basislinientabelle und
3. einer Schriftgröße der Basislinientabelle.

Einige Werte der Eigenschaft bestimmen alle drei Werte neu, andere etablieren nur die Schriftgröße der Basislinientabelle erneut. Wenn der Initialwert `auto` ein unerwünschtes Ergebnis liefern würde, kann dieses Attribut verwendet werden, um die gewünschte S-angeglichene-Basislinientabelle explizit festzulegen.

Falls keine Basislinientabelle in der nominalen Schriftart vorhanden ist oder die Basislinientabelle keinen Eintrag für die gewünschte Basislinie enthält, kann der Browser heuristische Methoden verwenden, um die Position der gewünschten Basislinie zu bestimmen.

> [!NOTE]
> Als Präsentationsattribut hat `dominant-baseline` auch ein Gegenstück in der CSS-Eigenschaft: {{cssxref("dominant-baseline")}}. Wenn beide angegeben sind, hat die CSS-Eigenschaft Vorrang.

Dieses Attribut kann bei folgenden SVG-Elementen verwendet werden:

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

## Hinweise zur Verwendung

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Wert</th>
      <td>
        <code>auto</code>
        <a href="/de/docs/Web/CSS/Guides/Values_and_units/Value_definition_syntax#single_bar">|</a>
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

  - : Wenn diese Eigenschaft auf einem {{SVGElement("text")}}-Element vorkommt, hängt der berechnete Wert vom Wert des {{SVGAttr("writing-mode")}}-Attributs ab.

    Wenn der {{SVGAttr("writing-mode")}} horizontal ist, dann ist der Wert der Komponente dominant-baseline `alphabetic`. Andernfalls, wenn der {{SVGAttr("writing-mode")}} vertikal ist, dann ist der Wert der Komponente dominant-baseline `central`.

    Wenn diese Eigenschaft auf einem {{SVGElement("tspan")}}- oder {{SVGElement("textPath")}}-Element vorkommt, bleiben die Komponenten dominant-baseline und die Basislinientabelle dieselben wie die der übergeordneten Textelemente.

    Wenn der berechnete {{SVGAttr("baseline-shift")}}-Wert tatsächlich die Basislinie verschiebt, dann wird die Komponente der Schriftgröße der Basislinientabelle auf den Wert des {{SVGAttr("font-size")}}-Attributs des Elements gesetzt, auf dem das `dominant-baseline` Attribut vorkommt, ansonsten bleibt die Schriftgröße der Basislinientabelle dieselbe wie bei dem Element.

    Wenn es kein übergeordnetes Textelement gibt, wird der Wert der S-angeglichenen-Basislinientabelle, wie oben beschrieben, für {{SVGElement("text")}}-Elemente konstruiert.

- `use-script` {{deprecated_inline}}
  - : Die Komponenten dominant-baseline und die Basislinientabelle werden durch Bestimmen des vorherrschenden Skripts des Zeicheninhalts festgelegt. Der {{SVGAttr("writing-mode")}}, ob horizontal oder vertikal, wird verwendet, um den entsprechenden Satz von Basislinientabellen auszuwählen, und die dominante Basislinie wird verwendet, um die Basislinientabelle auszuwählen, die dieser Basislinie entspricht. Die Komponente der Schriftgröße der Basislinientabelle wird auf den Wert des {{SVGAttr("font-size")}}-Attributs des Elements gesetzt, auf dem das `dominant-baseline` Attribut vorkommt.
- `no-change` {{deprecated_inline}}
  - : Die Komponenten dominant-baseline, die Basislinientabelle und die Schriftgröße der Basislinientabelle bleiben dieselben wie bei dem übergeordneten Textelement.
- `reset-size` {{deprecated_inline}}
  - : Die Komponenten dominant-baseline und die Basislinientabelle bleiben dieselben, aber die Schriftgröße der Basislinientabelle wird auf den Wert des {{SVGAttr("font-size")}}-Attributs auf diesem Element geändert. Dies skaliert die Basislinientabelle für die aktuelle {{SVGAttr("font-size")}} neu.
- `ideographic`
  - : Der Basenlinienkennzeichner für die dominante Basislinie ist auf `ideographic` gesetzt, die abgeleitete Basislinientabelle wird unter Verwendung der `ideographic` Basislinientabelle in der Schrift konstruiert und die Schriftgröße der Basislinientabelle wird auf den Wert des {{SVGAttr("font-size")}}-Attributs auf diesem Element geändert.
- `alphabetic`
  - : Der Basenlinienkennzeichner für die dominante Basislinie ist auf `alphabetic` gesetzt, die abgeleitete Basislinientabelle wird unter Verwendung der `alphabetic` Basislinientabelle in der Schrift konstruiert und die Schriftgröße der Basislinientabelle wird auf den Wert des {{SVGAttr("font-size")}}-Attributs auf diesem Element geändert.
- `hanging`
  - : Der Basenlinienkennzeichner für die dominante Basislinie ist auf `hanging` gesetzt, die abgeleitete Basislinientabelle wird unter Verwendung der `hanging` Basislinientabelle in der Schrift konstruiert und die Schriftgröße der Basislinientabelle wird auf den Wert des {{SVGAttr("font-size")}}-Attributs auf diesem Element geändert.
- `mathematical`
  - : Der Basenlinienkennzeichner für die dominante Basislinie ist auf `mathematical` gesetzt, die abgeleitete Basislinientabelle wird unter Verwendung der `mathematical` Basislinientabelle in der Schrift konstruiert und die Schriftgröße der Basislinientabelle wird auf den Wert des {{SVGAttr("font-size")}}-Attributs auf diesem Element geändert.
- `central`
  - : Der Basenlinienkennzeichner für die dominante Basislinie ist auf `central` gesetzt. Die abgeleitete Basislinientabelle wird aus den definierten Basislinien in einer Basislinientabelle in der Schrift konstruiert. Diese Schrift-Basislinientabelle wird unter Verwendung der folgenden Prioritätenreihenfolge der Basislinientabellennamen ausgewählt: `ideographic`, `alphabetic`, `hanging`, `mathematical`. Die Schriftgröße der Basislinientabelle wird auf den Wert des {{SVGAttr("font-size")}}-Attributs auf diesem Element geändert.
- `middle`
  - : Der Basenlinienkennzeichner für die dominante Basislinie ist auf `middle` gesetzt. Die abgeleitete Basislinientabelle wird aus den definierten Basislinien in einer Basislinientabelle in der Schrift konstruiert. Diese Schrift-Basislinientabelle wird unter Verwendung der folgenden Prioritätenreihenfolge der Basislinientabellennamen ausgewählt: `alphabetic`, `ideographic`, `hanging`, `mathematical`. Die Schriftgröße der Basislinientabelle wird auf den Wert des {{SVGAttr("font-size")}}-Attributs auf diesem Element geändert.
- `text-after-edge`
  - : Der Basenlinienkennzeichner für die dominante Basislinie ist auf `text-after-edge` gesetzt. Die abgeleitete Basislinientabelle wird aus den definierten Basislinien in einer Basislinientabelle in der Schrift konstruiert. Die Wahl, welche Schrift-Basislinientabelle aus den Basislinientabellen in der Schrift zu verwenden ist, ist browserabhängig. Die Schriftgröße der Basislinientabelle wird auf den Wert des {{SVGAttr("font-size")}}-Attributs auf diesem Element geändert.
- `text-before-edge`
  - : Der Basenlinienkennzeichner für die dominante Basislinie ist auf `text-before-edge` gesetzt. Die abgeleitete Basislinientabelle wird aus den definierten Basislinien in einer Basislinientabelle in der Schrift konstruiert. Die Wahl, welche Basislinientabelle aus den Basislinientabellen in der Schrift zu verwenden ist, ist browserabhängig. Die Schriftgröße der Basislinientabelle wird auf den Wert des {{SVGAttr("font-size")}}-Attributs auf diesem Element geändert.
- `text-top`
  - : Dieser Wert verwendet die Oberseite der em Box als Basislinie.

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
