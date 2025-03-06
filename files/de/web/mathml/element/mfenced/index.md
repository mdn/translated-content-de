---
title: <mfenced>
slug: Web/MathML/Element/mfenced
l10n:
  sourceCommit: f65f7f6e4fda2cb1bd0e7db17777e2cb20be7d27
---

{{MathMLRef}}{{Deprecated_Header}}{{Non-standard_Header}}

Das **`<mfenced>`** [MathML](/de/docs/Web/MathML) Element bietet die Möglichkeit, benutzerdefinierte öffnende und schließende Klammern (wie runde Klammern) und Trennzeichen (wie Kommas oder Semikolons) zu einem Ausdruck hinzuzufügen.

> [!NOTE]
> Historisch gesehen wurde das `<mfenced>` Element als Abkürzung für in Klammern gesetzte Ausdrücke definiert und war einer erweiterten Form, die {{MathMLElement("mrow")}} und {{MathMLElement("mo")}} Elemente beinhaltet, gleichwertig. Heute wird empfohlen, stattdessen diese erweiterte Form zu verwenden.

## Attribute

Die Attribute dieses Elements beinhalten die [globalen MathML-Attribute](/de/docs/Web/MathML/Global_attributes).

- `close`
  - : Ein String für das schließende Trennzeichen. Der Standardwert ist `")"` und jeglicher Leerraum wird entfernt.
- `open`
  - : Ein String für das öffnende Trennzeichen. Der Standardwert ist `"("` und jeglicher Leerraum wird entfernt.
- `separators`
  - : Eine Sequenz von null oder mehr Zeichen, die für verschiedene Trennzeichen verwendet werden, optional durch Leerraum getrennt, der ignoriert wird. Der Standardwert ist ",". Durch das Angeben von mehr als einem Zeichen ist es möglich, unterschiedliche Trennzeichen für jedes Argument im Ausdruck festzulegen. Wenn es zu viele Trennzeichen gibt, werden alle Überschüssigen ignoriert. Wenn es zu wenige Trennzeichen im Ausdruck gibt, wird das zuletzt angegebene Trennzeichen wiederholt.

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

### Alle Überschüssigen werden ignoriert (`,`)

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
      <a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles">Implizite ARIA-Rolle</a>
    </th>
    <td>
      Keine
    </td>
  </tr>
</table>

## Spezifikationen

Das `<mfenced>` Element ist in keiner browserorientierten Spezifikation definiert, aber Sie können eine Beschreibung in [MathML 4](https://w3c.github.io/mathml/#presm_mfenced) finden.

## Browser-Kompatibilität

{{Compat}}
