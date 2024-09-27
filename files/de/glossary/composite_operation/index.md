---
title: Composite operation
slug: Glossary/Composite_operation
l10n:
  sourceCommit: 9409e72722add6d1c4baeaf7b262c9b0985c0bcf
---

{{GlossarySidebar}}

Im CSS ist der Wert einer Eigenschaft in einer CSS-Regel der _zugrundeliegende Wert_ dieser Eigenschaft, und der Wert dieser gleichen Eigenschaft in einem [Keyframe](/de/docs/Web/CSS/@keyframes) ist ihr _Effektwert_.

Die **Composite operation** ist die spezifische Operation, die verwendet wird, um einen Effektwert mit einem zugrundeliegenden Wert zu kombinieren, um den endgültigen Keyframe-Effektwert zu erhalten. Es gibt drei Arten von Composite-Operationen:

- **replace**: Der Effektwert ersetzt den zugrundeliegenden Wert. Der endgültige Effektwert ist in diesem Fall der ursprüngliche Effektwert selbst.
- **add**: Der Effektwert wird zum zugrundeliegenden Wert hinzugefügt.
- **accumulate**: Der Effektwert wird mit dem zugrundeliegenden Wert kombiniert.

> [!NOTE]
> Composite operation im CSS gilt nur für Animationen.

## Siehe auch

- [`animation-composition`](/de/docs/Web/CSS/animation-composition)
- [`KeyframeEffect.composite`](/de/docs/Web/API/KeyframeEffect/composite)
