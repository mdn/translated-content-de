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
<!-- Marokkanischer Stil -->
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

<!-- Maghreb/Machrek-Stil -->
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

- `ltr`, was _von links nach rechts_ bedeutet und verwendet wird, um mathematische Ausdrücke von links nach rechts darzustellen (z. B. im englischen oder marokkanischen Stil);
- `rtl`, was _von rechts nach links_ bedeutet und verwendet wird, um mathematische Ausdrücke von rechts nach links darzustellen (z. B. im Maghreb- oder Machrek-Stil);

> [!NOTE]
>
> - Dieses Attribut kann durch die CSS-Eigenschaft {{ cssxref("direction") }} überschrieben werden, wenn eine CSS-Seite aktiv ist und das Element diese Eigenschaften unterstützt.
> - Da die Richtungsabhängigkeit der Mathematik semantisch mit ihrem Inhalt und nicht mit ihrer Darstellung zusammenhängt, wird empfohlen, dass Webentwickler dieses Attribut anstelle der verwandten CSS-Eigenschaften verwenden, wann immer dies möglich ist. Auf diese Weise werden die Formeln auch in einem Browser korrekt angezeigt, der CSS nicht unterstützt oder CSS deaktiviert hat.
> - Das `dir`-Attribut wird verwendet, um die Richtung von Mathematikformeln festzulegen, die im arabischsprachigen Raum häufig von rechts nach links ausgerichtet sind. Allerdings betten in von rechts nach links geschriebenen Sprachen häufig mathematische Inhalte ein, die von links nach rechts geschrieben werden. Folglich wird das `auto`-Schlüsselwort des HTML `dir`-Attributs nicht erkannt und standardmäßig setzt das [User-Agent-Stylesheet](/de/docs/Web/CSS/Cascade#user-agent_stylesheets) die Richtungs-Eigenschaft auf dem [`math`](/de/docs/Web/MathML/Element/math)-Element zurück.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Alle [globalen Attribute](/de/docs/Web/MathML/Global_attributes).
- {{cssxref("direction")}}
- Das HTML [`dir`](/de/docs/Web/HTML/Global_attributes#dir) globale Attribut
