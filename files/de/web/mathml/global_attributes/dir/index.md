---
title: dir
slug: Web/MathML/Global_attributes/dir
l10n:
  sourceCommit: a29769d6d10261f771321eb60f3990029c160924
---

{{MathMLRef}}

Das **`dir`** [Globale Attribut](/de/docs/Web/MathML/Global_attributes) ist ein {{Glossary("Enumerated", "Aufgezähltes")}} Attribut, welches die Richtung des MathML-Elements angibt.

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

- `ltr`, was _von links nach rechts_ bedeutet und verwendet wird, um mathematische Ausdrücke von links nach rechts darzustellen (z. B. im englischen oder marokkanischen Stil);
- `rtl`, was _von rechts nach links_ bedeutet und verwendet wird, um mathematische Ausdrücke von rechts nach links darzustellen (z. B. im Maghreb- oder Maschrek-Stil);

> [!NOTE]
>
> - Dieses Attribut kann durch die CSS-Eigenschaft {{ cssxref("direction") }} überschrieben werden, sofern eine CSS-Seite aktiv ist und das Element diese Eigenschaften unterstützt.
> - Da die Richtung von Mathematik semantisch mit ihrem Inhalt und nicht mit ihrer Präsentation zusammenhängt, wird empfohlen, dass Webentwickler dieses Attribut anstelle der zugehörigen CSS-Eigenschaften verwenden, wann immer dies möglich ist. Auf diese Weise werden die Formeln auch in einem Browser, der CSS nicht unterstützt oder CSS deaktiviert hat, korrekt angezeigt.
> - Das `dir`-Attribut wird verwendet, um die Richtung von mathematischen Formeln festzulegen, die im arabischsprachigen Raum oft von rechts nach links verläuft. Allerdings betten Sprachen, die von rechts nach links geschrieben werden, häufig mathematische Inhalte ein, die von links nach rechts geschrieben sind. Folglich wird das `auto`-Schlüsselwort aus dem HTML-`dir`-Attribut nicht erkannt, und standardmäßig setzt das [User-Agent-Stylesheet](/de/docs/Web/CSS/CSS_cascade/Cascade#user-agent_stylesheets) die Richtungs-Eigenschaft auf dem [`math`](/de/docs/Web/MathML/Element/math)-Element zurück.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Alle [globalen Attribute](/de/docs/Web/MathML/Global_attributes).
- {{cssxref("direction")}}
- Das HTML [`dir`](/de/docs/Web/HTML/Global_attributes/dir)-Globale Attribut
