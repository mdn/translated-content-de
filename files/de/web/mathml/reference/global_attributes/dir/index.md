---
title: dir
slug: Web/MathML/Reference/Global_attributes/dir
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Das **`dir`** [globale Attribut](/de/docs/Web/MathML/Reference/Global_attributes) ist ein {{Glossary("Enumerated", "enumeriertes")}} Attribut, das die Leserichtung des MathML-Elements angibt.

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

- `ltr`, was _left to right_ (von links nach rechts) bedeutet und zur Darstellung mathematischer Ausdrücke von links nach rechts verwendet wird (z.B. englischer oder marokkanischer Stil);
- `rtl`, was _right to left_ (von rechts nach links) bedeutet und zur Darstellung mathematischer Ausdrücke von rechts nach links verwendet wird (z.B. Maghreb- oder Machrek-Stil);

> [!NOTE]
>
> - Dieses Attribut kann von der CSS-Eigenschaft {{ cssxref("direction") }} überschrieben werden, wenn eine CSS-Seite aktiv ist und das Element diese Eigenschaften unterstützt.
> - Da die Leserichtung der Mathematik semantisch mit ihrem Inhalt und nicht mit ihrer Darstellung zusammenhängt, wird empfohlen, dass Webentwickler möglichst dieses Attribut anstelle der zugehörigen CSS-Eigenschaften verwenden. Auf diese Weise werden die Formeln auch in einem Browser, der CSS nicht unterstützt oder bei dem CSS deaktiviert ist, korrekt angezeigt.
> - Das `dir`-Attribut wird verwendet, um die Leserichtung von mathematischen Formeln festzulegen, die im arabischsprachigen Raum oft von rechts nach links ist. Allerdings betten von rechts nach links geschriebene Sprachen häufig mathematische Inhalte ein, die von links nach rechts geschrieben sind. Daher wird das `auto`-Schlüsselwort des `dir`-Attributs in HTML nicht erkannt und standardmäßig setzt das [User-Agent-Stylesheet](/de/docs/Web/CSS/Guides/Cascade/Introduction#user-agent_stylesheets) die `direction`-Eigenschaft auf dem [`math`](/de/docs/Web/MathML/Reference/Element/math)-Element zurück.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Alle [globalen Attribute](/de/docs/Web/MathML/Reference/Global_attributes).
- {{cssxref("direction")}}
- Das HTML [`dir`](/de/docs/Web/HTML/Reference/Global_attributes/dir) globale Attribut
