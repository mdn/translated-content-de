---
title: <mprescripts>
slug: Web/MathML/Reference/Element/mprescripts
l10n:
  sourceCommit: c263f06fa14ed56153e345006bb459c9df014b98
---

Das **`<mprescripts>`** [MathML](/de/docs/Web/MathML) Element wird innerhalb eines {{ MathMLElement("mmultiscripts") }} Elements verwendet, um den Beginn der Prä-Skript-Elemente (Subskripte und Superskripte, die **vor** dem Basisausdruck platziert werden) anzugeben.

## Attribute

Dieses Element unterstützt [globale MathML-Attribute](/de/docs/Web/MathML/Reference/Global_attributes).

## Beispiel

Das erste `<mmultiscripts>` Kind-Element wird zu einem Basisausdruck. Die verbleibenden Kinder werden standardmäßig zu Post-Skript-Elementen (a, b). `<mprescripts>` fungiert als Trennzeichen, und die Kinder danach werden zu Prä-Skript-Elementen (c, d).

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
      <a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles">Implizite ARIA-Rolle</a>
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

- {{ MathMLElement("msub") }} (Subskript)
- {{ MathMLElement("msup") }} (Superskript)
- {{ MathMLElement("msubsup") }} (Paar aus Subskript-Superskript)
