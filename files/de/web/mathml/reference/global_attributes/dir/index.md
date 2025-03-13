---
title: dir
slug: Web/MathML/Reference/Global_attributes/dir
l10n:
  sourceCommit: c263f06fa14ed56153e345006bb459c9df014b98
---

Das **`dir`**-[globale Attribut](/de/docs/Web/MathML/Reference/Global_attributes) ist ein {{Glossary("Enumerated", "aufzählbares")}} Attribut, das die Richtung des MathML-Elements angibt.

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

- `ltr`, was _von links nach rechts_ bedeutet und verwendet wird, um mathematische Ausdrücke von links nach rechts darzustellen (z.B. im englischen oder marokkanischen Stil);
- `rtl`, was _von rechts nach links_ bedeutet und verwendet wird, um mathematische Ausdrücke von rechts nach links darzustellen (z.B. im maghrebinischen oder maschrikanischen Stil);

> [!NOTE]
>
> - Dieses Attribut kann durch die CSS-Eigenschaft {{ cssxref("direction") }} überschrieben werden, wenn eine CSS-Seite aktiv ist und das Element diese Eigenschaften unterstützt.
> - Da die Richtung der Mathematik semantisch mit ihrem Inhalt und nicht mit ihrer Darstellung zusammenhängt, wird empfohlen, dass Webentwickler dieses Attribut anstelle der zugehörigen CSS-Eigenschaften verwenden, wann immer dies möglich ist. Auf diese Weise werden die Formeln korrekt angezeigt, selbst in einem Browser, der CSS nicht unterstützt oder bei dem CSS deaktiviert ist.
> - Das `dir`-Attribut wird verwendet, um die Richtung von mathematischen Formeln festzulegen, die im arabischsprachigen Raum oft von rechts nach links verlaufen. Allerdings betten Sprachen, die von rechts nach links geschrieben werden, oft mathematische Inhalte ein, die von links nach rechts geschrieben sind. Folglich wird das `auto`-Schlüsselwort aus dem HTML-`dir`-Attribut nicht erkannt und standardmäßig setzt das [User-Agent-Stylesheet](/de/docs/Web/CSS/CSS_cascade/Cascade#user-agent_stylesheets) die Richtungs-Eigenschaft im [`math`](/de/docs/Web/MathML/Reference/Element/math)-Element zurück.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Alle [globalen Attribute](/de/docs/Web/MathML/Reference/Global_attributes).
- {{cssxref("direction")}}
- Das HTML-Globale Attribut [`dir`](/de/docs/Web/HTML/Global_attributes/dir)
