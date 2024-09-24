---
title: <mprescripts>
slug: Web/MathML/Element/mprescripts
l10n:
  sourceCommit: 5e756ded4a891e5a147b83b6ead78d23f7e899c9
---

{{MathMLRef}}

Das **`<mprescripts>`** [MathML](/de/docs/Web/MathML)-Element wird innerhalb eines {{ MathMLElement("mmultiscripts") }}-Elements verwendet, um den Beginn der Pre-Script-Elemente (Indices und Hochzahlen, die **vor** dem Basis-Ausdruck platziert werden) anzuzeigen.

## Attribute

Dieses Element unterstützt [globale MathML-Attribute](/de/docs/Web/MathML/Global_attributes).

## Beispiel

Das erste `<mmultiscripts>`-Kindelement wird zu einem Basis-Ausdruck. Die verbleibenden Kinder werden standardmäßig zu Post-Script-Elementen (a, b). `<mprescripts>` fungiert als Trennzeichen, und Kinder danach werden zu Pre-Script-Elementen (c, d).

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

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{ MathMLElement("msub") }} (Subscript)
- {{ MathMLElement("msup") }} (Superscript)
- {{ MathMLElement("msubsup") }} (Subscript-Superscript-Paar)
