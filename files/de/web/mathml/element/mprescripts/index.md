---
title: <mprescripts>
slug: Web/MathML/Element/mprescripts
l10n:
  sourceCommit: a9a6b72518fa068991c95e8c1a5ba224533e53ee
---

{{MathMLRef}}

Das **`<mprescripts>`** [MathML](/de/docs/Web/MathML)-Element wird innerhalb eines {{ MathMLElement("mmultiscripts") }}-Elements verwendet, um den Beginn der Pre-Scripts-Elemente anzuzeigen (Indices und Hochzahlen, die **vor** dem Basis-Ausdruck platziert werden).

## Attribute

Dieses Element unterstützt [globale MathML-Attribute](/de/docs/Web/MathML/Global_attributes).

## Beispiel

Das erste `<mmultiscripts>`-Kinder-Element wird ein Basis-Ausdruck. Die restlichen Kinder werden standardmäßig zu Post-Scripts-Elementen (a, b). `<mprescripts>` dient als Trennzeichen, und Kinder danach werden Pre-Scripts-Elemente (c, d).

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

```html-nolint
<math display="block">
  <mmultiscripts>
    <mi>X</mi> <!-- base expression -->
    <mi>a</mi> <!-- post-sub-script -->
    <mi>b</mi> <!-- post-sup-script -->
    <mprescripts />
    <mi>c</mi> <!-- pre-sub-script -->
    <mi>d</mi> <!-- pre-sup-script -->
  </mmultiscripts>
</math>
```

{{ EmbedLiveSample('example', 700, 200, "", "") }}

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

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{ MathMLElement("msub") }} (Index)
- {{ MathMLElement("msup") }} (Hochzahl)
- {{ MathMLElement("msubsup") }} (Index-Hochzahl-Paar)
