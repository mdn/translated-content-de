---
title: HTML slot-Attribut (global)
short-title: slot
slug: Web/HTML/Reference/Global_attributes/slot
l10n:
  sourceCommit: 7885271e36e9d2744296c01f400653f63caa6f75
---

{{HTMLSidebar("Global_attributes")}}

Das **`slot`**-[Globale Attribut](/de/docs/Web/HTML/Reference/Global_attributes) weist einem Element einen Slot in einem [Shadow-DOM](/de/docs/Web/API/Web_components/Using_shadow_DOM) Schattenbaum zu: Ein Element mit einem `slot`-Attribut wird dem Slot zugewiesen, der durch das {{HTMLElement("slot")}}-Element erstellt wurde, dessen [`name`](/de/docs/Web/HTML/Reference/Elements/slot#name)-Attributwert mit dem `slot`-Attributwert übereinstimmt. Sie können mehrere Elemente demselben Slot zuweisen, indem Sie denselben Slot-Namen verwenden. Elemente ohne ein `slot`-Attribut werden dem unbenannten Slot zugewiesen, falls ein solcher existiert.

Für Beispiele siehe unseren [Verwendung von Templates und Slots](/de/docs/Web/API/Web_components/Using_templates_and_slots)-Leitfaden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- HTML [globale Attribute](/de/docs/Web/HTML/Reference/Global_attributes)
- HTML {{HTMLElement("slot")}}-Element
- HTML {{HTMLElement("template")}}-Element
- CSS {{CSSXref("::slotted")}}-Pseudo-Element
- [CSS Scoping](/de/docs/Web/CSS/CSS_scoping)-Modul
- [Web Components](/de/docs/Web/API/Web_components)
