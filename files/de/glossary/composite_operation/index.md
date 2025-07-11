---
title: Composite-Operation
slug: Glossary/Composite_operation
l10n:
  sourceCommit: 2547f622337d6cbf8c3794776b17ed377d6aad57
---

Im CSS ist der Wert einer Eigenschaft in einer CSS-Regel der _unterliegende Wert_ dieser Eigenschaft, während der Wert derselben Eigenschaft in einer [Keyframe](/de/docs/Web/CSS/@keyframes) sein _Effektwert_ ist.

Die **Composite-Operation** ist die spezifische Operation, die verwendet wird, um einen Effektwert mit einem unterliegenden Wert zu kombinieren, um den endgültigen Keyframe-Effektwert zu erzeugen. Es gibt drei Arten von Composite-Operationen:

- **replace**: Der Effektwert ersetzt den unterliegenden Wert. Der endgültige Effektwert ist in diesem Fall der ursprüngliche Effektwert selbst.
- **add**: Der Effektwert wird zum unterliegenden Wert hinzugefügt.
- **accumulate**: Der Effektwert wird mit dem unterliegenden Wert kombiniert.

> [!NOTE]
> Composite-Operation im CSS gilt nur für Animationen.

## Siehe auch

- [`animation-composition`](/de/docs/Web/CSS/animation-composition)
- [`KeyframeEffect.composite`](/de/docs/Web/API/KeyframeEffect/composite)
