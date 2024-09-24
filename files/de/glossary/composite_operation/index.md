---
title: Kombinierte Operation
slug: Glossary/Composite_operation
l10n:
  sourceCommit: 9409e72722add6d1c4baeaf7b262c9b0985c0bcf
---

{{GlossarySidebar}}

In CSS ist der Wert einer Eigenschaft in einer CSS-Regel der _grundlegende Wert_ dieser Eigenschaft, und der Wert derselben Eigenschaft in einem [keyframe](/de/docs/Web/CSS/@keyframes) ist ihr _Effektwert_.

**Kombinierte Operation** ist die spezifische Operation, die verwendet wird, um einen Effektwert mit einem grundlegenden Wert zu kombinieren, um den endgültigen Effektwert des Keyframes zu erzeugen. Es gibt drei Arten von kombinierten Operationen:

- **replace**: Der Effektwert ersetzt den grundlegenden Wert. Der endgültige Effektwert ist in diesem Fall der ursprüngliche Effektwert selbst.
- **add**: Der Effektwert wird zum grundlegenden Wert hinzugefügt.
- **accumulate**: Der Effektwert wird mit dem grundlegenden Wert kombiniert.

> [!NOTE]
> Kombinierte Operationen in CSS gelten nur für Animationen.

## Siehe auch

- [`animation-composition`](/de/docs/Web/CSS/animation-composition)
- [`KeyframeEffect.composite`](/de/docs/Web/API/KeyframeEffect/composite)
