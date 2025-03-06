---
title: <mprescripts>
slug: Web/MathML/Element/mprescripts
l10n:
  sourceCommit: f65f7f6e4fda2cb1bd0e7db17777e2cb20be7d27
---

{{MathMLRef}}

Das **`<mprescripts>`** [MathML](/de/docs/Web/MathML) Element wird innerhalb eines {{ MathMLElement("mmultiscripts") }} Elements verwendet, um den Beginn der Pre-Skript-Elemente anzuzeigen (Indizes und Hochzahlen, die **vor** dem Basisausdruck platziert werden).

## Attribute

Dieses Element unterstützt [globale MathML-Attribute](/de/docs/Web/MathML/Global_attributes).

## Beispiel

Das erste `<mmultiscripts>` Kind-Element wird zum Basisausdruck. Die verbleibenden Kinder werden standardmäßig zu Post-Skript-Elementen (a, b). `<mprescripts>` fungiert als Trennzeichen, und Kinder danach werden zu Pre-Skript-Elementen (c, d).

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
      <a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles">Implizierte ARIA-Rolle</a>
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
- {{ MathMLElement("msup") }} (Hochstellung)
- {{ MathMLElement("msubsup") }} (Index-Hochstellungs-Paar)
