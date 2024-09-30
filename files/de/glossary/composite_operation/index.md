---
title: Composite operation
slug: Glossary/Composite_operation
l10n:
  sourceCommit: 9409e72722add6d1c4baeaf7b262c9b0985c0bcf
---

{{GlossarySidebar}}

Im CSS ist der Wert einer Eigenschaft in einer CSS-Regel der _Grundwert_ dieser Eigenschaft, und der Wert dieser Eigenschaft in einem [Keyframe](/de/docs/Web/CSS/@keyframes) ist ihr _Effektwert_.

**Composite operation** ist die spezifische Operation, die verwendet wird, um einen Effektwert mit einem Grundwert zu kombinieren, um den endgültigen Keyframe-Effektwert zu erzeugen. Es gibt drei Arten von Composite-Operationen:

- **replace**: Der Effektwert ersetzt den Grundwert. Der finale Effektwert ist in diesem Fall der ursprüngliche Effektwert selbst.
- **add**: Der Effektwert wird zum Grundwert hinzugefügt.
- **accumulate**: Der Effektwert wird mit dem Grundwert kombiniert.

> [!NOTE]
> Composite operation im CSS gilt nur für Animationen.

## Siehe auch

- [`animation-composition`](/de/docs/Web/CSS/animation-composition)
- [`KeyframeEffect.composite`](/de/docs/Web/API/KeyframeEffect/composite)
