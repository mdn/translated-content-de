---
title: dir
slug: Web/MathML/Reference/Global_attributes/dir
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

Das **`dir`** [globale Attribut](/de/docs/Web/MathML/Reference/Global_attributes) ist ein {{Glossary("Enumerated", "Aufzählungsattribut")}}, das die Richtung des MathML-Elements angibt.

## Beispiel

```css hidden
html,
body {
  height: 100%;
}

body {
  display: grid;
  place-items: center;
  font-size: 1.5rem;
}
```

```html
<!-- Moroccan style -->
<math display="block" dir="ltr">
  <msqrt>
    <mi>س</mi>
  </msqrt>
  <mo>=</mo>
  <msup>
    <mn>3</mn>
    <mi>ب</mi>
  </msup>
</math>

<!-- Maghreb/Machrek style -->
<math display="block" dir="rtl">
  <msqrt>
    <mi>س</mi>
  </msqrt>
  <mo>=</mo>
  <msup>
    <mn>٣</mn>
    <mi>ب</mi>
  </msup>
</math>
```

{{ EmbedLiveSample("Example", "", 150) }}

## Syntax

```html-nolint
<math dir="ltr">
<math dir="rtl">
```

### Werte

- `ltr`, was _von links nach rechts_ bedeutet und verwendet wird, um mathematische Ausdrücke von links nach rechts darzustellen (z.B. englischer oder marokkanischer Stil);
- `rtl`, was _von rechts nach links_ bedeutet und verwendet wird, um mathematische Ausdrücke von rechts nach links darzustellen (z.B. Maghreb- oder Machrek-Stil);

> [!NOTE]
>
> - Dieses Attribut kann durch die CSS-Eigenschaft {{ cssxref("direction") }} überschrieben werden, wenn eine CSS-Seite aktiv ist und das Element diese Eigenschaften unterstützt.
> - Da die Richtung von Mathematik semantisch mit ihrem Inhalt und nicht mit ihrer Darstellung verbunden ist, wird empfohlen, dass Webentwickler dieses Attribut anstelle der verwandten CSS-Eigenschaften verwenden, wann immer möglich. Auf diese Weise werden die Formeln korrekt angezeigt, auch in einem Browser, der CSS nicht unterstützt oder bei dem CSS deaktiviert ist.
> - Das `dir`-Attribut wird verwendet, um die Richtung von mathematischen Formeln festzulegen, die oft von rechts nach links in der arabischsprachigen Welt ist. Allerdings betten Sprachen, die von rechts nach links geschrieben werden, oft mathematische Inhalte ein, die von links nach rechts geschrieben sind. Folglich wird das `auto`-Schlüsselwort des HTML-Attributs `dir` nicht erkannt und standardmäßig setzt das [Benutzeragent-Stylesheet](/de/docs/Web/CSS/CSS_cascade/Cascade#user-agent_stylesheets) die `direction`-Eigenschaft auf dem [`math`](/de/docs/Web/MathML/Reference/Element/math)-Element zurück.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Alle [globalen Attribute](/de/docs/Web/MathML/Reference/Global_attributes).
- {{cssxref("direction")}}
- Das HTML-Globale Attribut [`dir`](/de/docs/Web/HTML/Reference/Global_attributes/dir)
