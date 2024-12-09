---
title: <mfenced>
slug: Web/MathML/Element/mfenced
l10n:
  sourceCommit: 1053ac81eea471efe2f59f7056af830e422abb52
---

{{MathMLRef}}{{Deprecated_Header}}{{Non-standard_Header}}

Das **`<mfenced>`** [MathML](/de/docs/Web/MathML)-Element bietet die Möglichkeit, benutzerdefinierte Öffnungs- und Schließklammern (wie Klammern) und Trennzeichen (wie Kommas oder Semikolons) zu einem Ausdruck hinzuzufügen.

> [!NOTE]
> Historisch gesehen wurde das `<mfenced>`-Element als Abkürzung für die Darstellung von umgrenzten Ausdrücken definiert und war gleichwertig mit einer erweiterten Form, die die Elemente {{MathMLElement("mrow")}} und {{MathMLElement("mo")}} beinhaltete. Heutzutage wird empfohlen, diese erweiterte Form zu verwenden.

## Attribute

Die Attribute dieses Elements umfassen die [globalen MathML-Attribute](/de/docs/Web/MathML/Global_attributes).

- `close`
  - : Ein String für den Schließ-Delimiter. Der Standardwert ist `")"` und alle Leerzeichen werden entfernt.
- `open`
  - : Ein String für den Öffnungs-Delimiter. Der Standardwert ist `"("` und alle Leerzeichen werden entfernt.
- `separators`
  - : Eine Folge von null oder mehr Zeichen, die für verschiedene Trennzeichen verwendet werden, optional getrennt durch Leerzeichen, die ignoriert werden. Der Standardwert ist ",". Durch das Angeben von mehr als einem Zeichen ist es möglich, verschiedene Trennzeichen für jedes Argument im Ausdruck festzulegen. Gibt es zu viele Trennzeichen, wird der gesamte Überschuss ignoriert. Sind zu wenige Trennzeichen im Ausdruck vorhanden, wird das zuletzt angegebene Trennzeichen wiederholt.

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
      <a href="/de/docs/Web/Accessibility/ARIA/Roles">Implizite ARIA-Rolle</a>
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
