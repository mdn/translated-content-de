---
title: dir
slug: Web/MathML/Global_attributes/dir
l10n:
  sourceCommit: 34c43aca36f776c824e698dfd07e3ece34cc6f00
---

{{MathMLRef}}

Das **`dir`** [globale Attribut](/de/docs/Web/MathML/Global_attributes) ist ein [enumeriertes](/de/docs/Glossary/Enumerated) Attribut, das die Richtung des MathML-Elements angibt.

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

- `ltr`, was _von links nach rechts_ bedeutet und verwendet wird, um mathematische Ausdrücke von links nach rechts darzustellen (z. B. englischer oder marokkanischer Stil);
- `rtl`, was _von rechts nach links_ bedeutet und verwendet wird, um mathematische Ausdrücke von rechts nach links darzustellen (z. B. Maghreb- oder Machrek-Stil);

> [!NOTE]
>
> - Dieses Attribut kann durch die CSS-Eigenschaft {{ cssxref("direction") }} überschrieben werden, wenn eine CSS-Seite aktiv ist und das Element diese Eigenschaften unterstützt.
> - Da die Richtungsmäßigkeit der Mathematik semantisch mit ihrem Inhalt und nicht mit ihrer Darstellung verbunden ist, wird empfohlen, dass Webentwickler dieses Attribut anstelle der zugehörigen CSS-Eigenschaften verwenden, wenn möglich. So werden die Formeln auch in einem Browser, der CSS nicht unterstützt oder in dem CSS deaktiviert ist, korrekt angezeigt.
> - Das `dir`-Attribut wird verwendet, um die Richtung von mathematischen Formeln festzulegen, die im arabischsprachigen Raum oft von rechts nach links sind. Allerdings betten Sprachen, die von rechts nach links geschrieben werden, häufig mathematische Inhalte ein, die von links nach rechts geschrieben sind. Folglich wird das `auto`-Schlüsselwort des HTML-`dir`-Attributs nicht erkannt, und standardmäßig setzt das [User-Agent-Stylesheet](/de/docs/Web/CSS/Cascade#user-agent_stylesheets) die direction-Eigenschaft auf dem [`math`](/de/docs/Web/MathML/Element/math)-Element zurück.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Alle [globalen Attribute](/de/docs/Web/MathML/Global_attributes).
- {{cssxref("direction")}}
- Das HTML-Globale Attribut [`dir`](/de/docs/Web/HTML/Global_attributes#dir)
