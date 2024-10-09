---
title: dir
slug: Web/MathML/Global_attributes/dir
l10n:
  sourceCommit: 92447fec056cc89b7f28445851bea0c981fcbc12
---

{{MathMLRef}}

Das **`dir`** [globale Attribut](/de/docs/Web/MathML/Global_attributes) ist ein {{Glossary("Enumerated", "aufzählbares")}} Attribut, das die Richtung der MathML-Elemente angibt.

## Syntax

```html
<!-- Moroccan style -->
<math dir="ltr">
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
<math dir="rtl">
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

### Werte

- `ltr`, was bedeutet _von links nach rechts_ und wird verwendet, um mathematische Ausdrücke von links nach rechts darzustellen (z.B. im englischen oder marokkanischen Stil);
- `rtl`, was bedeutet _von rechts nach links_ und wird verwendet, um mathematische Ausdrücke von rechts nach links darzustellen (z.B. im maghrebinischen oder maschrekischen Stil);

> [!NOTE]
>
> - Dieses Attribut kann durch die CSS-Eigenschaft {{ cssxref("direction") }} überschrieben werden, falls eine CSS-Seite aktiv ist und das Element diese Eigenschaften unterstützt.
> - Da die Richtung von Mathematik semantisch mit ihrem Inhalt und nicht mit ihrer Darstellung verbunden ist, wird empfohlen, dass Webentwickler dieses Attribut anstatt der verwandten CSS-Eigenschaften verwenden, wenn möglich. Auf diese Weise werden die Formeln auch auf einem Browser korrekt angezeigt, der CSS nicht unterstützt oder bei dem CSS deaktiviert ist.
> - Das `dir`-Attribut wird verwendet, um die Richtung von mathematischen Formeln festzulegen, die im arabischsprachigen Raum oft von rechts nach links erfolgt. Jedoch betten Sprachen, die von rechts nach links geschrieben werden, häufig mathematische Inhalte ein, die von links nach rechts geschrieben sind. Folglich wird das `auto`-Schlüsselwort aus dem HTML-`dir`-Attribut nicht erkannt und standardmäßig setzt das [User-Agent-Stylesheet](/de/docs/Web/CSS/Cascade#user-agent_stylesheets) die Direction-Eigenschaft auf dem [`math`](/de/docs/Web/MathML/Element/math)-Element zurück.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Alle [globalen Attribute](/de/docs/Web/MathML/Global_attributes).
- {{cssxref("direction")}}
- Das HTML [`dir`](/de/docs/Web/HTML/Global_attributes/dir) globale Attribut
