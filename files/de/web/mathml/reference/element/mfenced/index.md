---
title: <mfenced>
slug: Web/MathML/Reference/Element/mfenced
l10n:
  sourceCommit: ca6052779ddca9f6d99665f12c39aa2d85d85733
---

{{Non-standard_Header}}

Das **`<mfenced>`** [MathML](/de/docs/Web/MathML)-Element bietet die Möglichkeit, benutzerdefinierte öffnende und schließende Klammern (wie Klammern) und Trennzeichen (wie Kommas oder Semikolons) zu einem Ausdruck hinzuzufügen.

> [!NOTE]
> Historisch wurde das `<mfenced>`-Element als Kurzform für das Schreiben von eingefassten Ausdrücken definiert und ist gleichbedeutend mit einer erweiterten Form, die {{MathMLElement("mrow")}}- und {{MathMLElement("mo")}}-Elemente beinhaltet. Heutzutage wird empfohlen, diese äquivalente Form zu verwenden.

## Attribute

Die Attribute dieses Elements umfassen die [globalen MathML-Attribute](/de/docs/Web/MathML/Reference/Global_attributes).

- `close`
  - : Ein String für das schließende Trennzeichen. Der Standardwert ist `")"` und jeglicher Leerraum wird entfernt.
- `open`
  - : Ein String für das öffnende Trennzeichen. Der Standardwert ist `"("` und jeglicher Leerraum wird entfernt.
- `separators`
  - : Eine Folge von null oder mehr Zeichen, die für verschiedene Trennzeichen verwendet werden sollen, optional durch Leerraum getrennt, der ignoriert wird. Der Standardwert ist ",". Durch die Angabe von mehr als einem Zeichen ist es möglich, unterschiedliche Trennzeichen für jedes Argument im Ausdruck festzulegen. Wenn es zu viele Trennzeichen gibt, wird der gesamte Überschuss ignoriert. Wenn es zu wenige Trennzeichen im Ausdruck gibt, wird das zuletzt angegebene Trennzeichen wiederholt.

## Beispiele

### Das letzte Trennzeichen wird wiederholt (`,`)

```css hidden
html,
body {
  height: 100%;
}

body {
  display: grid;
  place-items: center;
  font-size: 2rem;
}
```

```html
<math display="block">
  <mfenced open="{" close="}" separators=";;,">
    <mi>a</mi>
    <mi>b</mi>
    <mi>c</mi>
    <mi>d</mi>
    <mi>e</mi>
  </mfenced>
</math>
```

Beispielhafte Darstellung:

![{a;b;c,d,e}](mfenced-repeated.svg)

Darstellung in Ihrem Browser:

{{ EmbedLiveSample('mfenced_example1', 700, 200, "", "") }}

### Der gesamte Überschuss wird ignoriert (`,`)

```css hidden
html,
body {
  height: 100%;
}

body {
  display: grid;
  place-items: center;
  font-size: 2rem;
}
```

```html
<math display="block">
  <mfenced open="[" close="]" separators="||||,">
    <mi>a</mi>
    <mi>b</mi>
    <mi>c</mi>
    <mi>d</mi>
    <mi>e</mi>
  </mfenced>
</math>
```

Beispielhafte Darstellung:

![[a|b|c|d|e]](mfenced-ignored.svg)

Darstellung in Ihrem Browser:

{{ EmbedLiveSample('mfenced_example1', 700, 200, "", "") }}

## Technische Zusammenfassung

<table class="properties">
  <tr>
    <th scope="row">
      <a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles">Implizierte ARIA-Rolle</a>
    </th>
    <td>
      Keine
    </td>
  </tr>
</table>

## Spezifikationen

Das `<mfenced>`-Element ist in keiner browserorientierten Spezifikation definiert, aber Sie können eine Beschreibung in [MathML 4](https://w3c.github.io/mathml/#presm_mfenced) finden.

## Browser-Kompatibilität

{{Compat}}
