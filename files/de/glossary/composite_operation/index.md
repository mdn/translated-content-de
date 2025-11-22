---
title: Kombinationsoperation
slug: Glossary/Composite_operation
l10n:
  sourceCommit: 96a73163513476fe49bfba695acedb7622135354
---

In CSS ist der Wert einer Eigenschaft in einer CSS-Regel der _zugrunde liegende Wert_ dieser Eigenschaft, und der Wert dieser gleichen Eigenschaft in einem [Keyframe](/de/docs/Web/CSS/Reference/At-rules/@keyframes) ist ihr _Effektwert_.

Die **Kombinationsoperation** ist die spezifische Operation, die verwendet wird, um einen Effektwert mit einem zugrunde liegenden Wert zu kombinieren, um den endgültigen Effektwert des Keyframes zu erzeugen. Es gibt drei Arten von Kombinationsoperationen:

- **replace**: Der Effektwert ersetzt den zugrunde liegenden Wert. Der endgültige Effektwert ist in diesem Fall der ursprüngliche Effektwert selbst.
- **add**: Der Effektwert wird dem zugrunde liegenden Wert hinzugefügt.
- **accumulate**: Der Effektwert wird mit dem zugrunde liegenden Wert kombiniert.

> [!NOTE]
> Die Kombinationsoperation in CSS gilt nur für Animationen.

## Siehe auch

- {{cssxref("animation-composition")}}
- [`KeyframeEffect.composite`](/de/docs/Web/API/KeyframeEffect/composite)
