---
title: Composite-Operation
slug: Glossary/Composite_operation
l10n:
  sourceCommit: ad9776a6cf53eaf570ac0515402247e82ecefcfe
---

In CSS ist der Wert einer Eigenschaft in einer CSS-Regel der _zugrundeliegende Wert_ dieser Eigenschaft, und der Wert derselben Eigenschaft in einem [Keyframe](/de/docs/Web/CSS/Reference/At-rules/@keyframes) ist ihr _Effektwert_.

Eine **Composite-Operation** ist die spezifische Operation, die verwendet wird, um einen Effektwert mit einem zugrundeliegenden Wert zu kombinieren, um den endgültigen Keyframe-Effektwert zu erzeugen. Es gibt drei Arten von Composite-Operationen:

- **replace**: Der Effektwert ersetzt den zugrundeliegenden Wert. Der endgültige Effektwert ist in diesem Fall der ursprüngliche Effektwert selbst.
- **add**: Der Effektwert wird zum zugrundeliegenden Wert hinzugefügt.
- **accumulate**: Der Effektwert wird mit dem zugrundeliegenden Wert kombiniert.

> [!NOTE]
> Composite-Operationen in CSS gelten nur für Animationen.

## Siehe auch

- [`animation-composition`](/de/docs/Web/CSS/Reference/Properties/animation-composition)
- [`KeyframeEffect.composite`](/de/docs/Web/API/KeyframeEffect/composite)
