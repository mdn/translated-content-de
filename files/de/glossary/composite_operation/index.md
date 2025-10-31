---
title: Kompositionsoperation
slug: Glossary/Composite_operation
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

Im CSS ist der Wert einer Eigenschaft in einer CSS-Regel der _zugrunde liegende Wert_ dieser Eigenschaft, und der Wert derselben Eigenschaft in einem [Keyframe](/de/docs/Web/CSS/@keyframes) ist ihr _Effektwert_.

Die **Kompositionsoperation** ist die spezifische Operation, die verwendet wird, um einen Effektwert mit einem zugrunde liegenden Wert zu kombinieren, um den endgültigen Keyframe-Effektwert zu erzeugen. Es gibt drei Arten von Kompositionsoperationen:

- **replace**: Der Effektwert ersetzt den zugrunde liegenden Wert. Der endgültige Effektwert in diesem Fall ist der ursprüngliche Effektwert selbst.
- **add**: Der Effektwert wird dem zugrunde liegenden Wert addiert.
- **accumulate**: Der Effektwert wird mit dem zugrunde liegenden Wert kombiniert.

> [!NOTE]
> Kompositionsoperation im CSS gilt nur für Animationen.

## Siehe auch

- [`animation-composition`](/de/docs/Web/CSS/Reference/Properties/animation-composition)
- [`KeyframeEffect.composite`](/de/docs/Web/API/KeyframeEffect/composite)
