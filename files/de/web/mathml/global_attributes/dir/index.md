---
title: dir
slug: Web/MathML/Global_attributes/dir
l10n:
  sourceCommit: 56a27a0d3cf032771a715fee27ce5325ba859606
---

{{MathMLRef}}

Das **`dir`** [globale Attribut](/de/docs/Web/MathML/Global_attributes) ist ein {{Glossary("Enumerated", "aufgezähltes")}} Attribut, das die Leserichtung des MathML-Elements angibt.

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

- `ltr`, was _links nach rechts_ bedeutet und verwendet wird, um mathematische Ausdrücke von links nach rechts darzustellen (z.B. englischer oder marokkanischer Stil);
- `rtl`, was _rechts nach links_ bedeutet und verwendet wird, um mathematische Ausdrücke von rechts nach links darzustellen (z.B. Maghreb- oder Machrek-Stil);

> [!NOTE]
>
> - Dieses Attribut kann durch die CSS-Eigenschaft {{ cssxref("direction") }} überschrieben werden, falls eine CSS-Seite aktiv ist und das Element diese Eigenschaften unterstützt.
> - Da die Leserichtung von Mathematik semantisch mit ihrem Inhalt und nicht mit ihrer Präsentation zusammenhängt, wird empfohlen, dass Webentwickler dieses Attribut anstelle der verwandten CSS-Eigenschaften verwenden, wenn möglich. So werden die Formeln auch in einem Browser korrekt angezeigt, der CSS nicht unterstützt oder CSS deaktiviert hat.
> - Das `dir`-Attribut wird verwendet, um die Leserichtung von mathematischen Formeln festzulegen, die im arabischsprachigen Raum oft von rechts nach links erfolgt. Allerdings betten Sprachen, die von rechts nach links geschrieben werden, oft mathematische Inhalte ein, die von links nach rechts geschrieben werden. Folglich wird das `auto`-Schlüsselwort des HTML-`dir`-Attributs nicht erkannt und standardmäßig setzt das [Benutzer-Stylesheet](/de/docs/Web/CSS/Cascade#user-agent_stylesheets) die direction-Eigenschaft auf dem [`math`](/de/docs/Web/MathML/Element/math)-Element zurück.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Alle [globalen Attribute](/de/docs/Web/MathML/Global_attributes).
- {{cssxref("direction")}}
- Das HTML [`dir`](/de/docs/Web/HTML/Global_attributes/dir) globale Attribut
