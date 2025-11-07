---
title: HTML slot Attribut
short-title: slot
slug: Web/HTML/Reference/Global_attributes/slot
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Das **`slot`** [globale Attribut](/de/docs/Web/HTML/Reference/Global_attributes) weist einem Element einen Slot in einem [Shadow DOM](/de/docs/Web/API/Web_components/Using_shadow_DOM) Shadow-Tree zu: Ein Element mit einem `slot`-Attribut wird dem Slot zugewiesen, der durch das {{HTMLElement("slot")}} Element erstellt wurde und dessen [`name`](/de/docs/Web/HTML/Reference/Elements/slot#name)-Attributswert mit dem Wert dieses `slot`-Attributs übereinstimmt. Sie können mehrere Elemente demselben Slot zuweisen, indem Sie denselben Slot-Namen verwenden. Elemente ohne `slot`-Attribut werden dem namenlosen Slot zugewiesen, falls ein solcher vorhanden ist.

Für Beispiele siehe unseren [Anleitung zur Verwendung von Templates und Slots](/de/docs/Web/API/Web_components/Using_templates_and_slots).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- HTML [globale Attribute](/de/docs/Web/HTML/Reference/Global_attributes)
- HTML {{HTMLElement("slot")}} Element
- HTML {{HTMLElement("template")}} Element
- CSS {{CSSXref("::slotted")}} Pseudoelement
- [CSS Scoping](/de/docs/Web/CSS/Guides/Scoping) Modul
- [Web Components](/de/docs/Web/API/Web_components)
