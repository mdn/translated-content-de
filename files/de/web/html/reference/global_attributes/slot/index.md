---
title: HTML slot globales Attribut
short-title: slot
slug: Web/HTML/Reference/Global_attributes/slot
l10n:
  sourceCommit: 0754cd805a8e010d2e3a2a065f634a3bcf358252
---

Das **`slot`**-[globale Attribut](/de/docs/Web/HTML/Reference/Global_attributes) weist einem Element einen Slot in einem [Shadow-DOM](/de/docs/Web/API/Web_components/Using_shadow_DOM)-Schattenbaum zu: Ein Element mit einem `slot`-Attribut wird dem Slot zugewiesen, der durch das {{HTMLElement("slot")}}-Element erstellt wurde, dessen [`name`](/de/docs/Web/HTML/Reference/Elements/slot#name)-Attributswert mit dem `slot`-Attributswert übereinstimmt. Sie können mehrere Elemente demselben Slot zuweisen, indem Sie denselben Slotnamen verwenden. Elemente ohne ein `slot`-Attribut werden dem unbenannten Slot zugewiesen, falls einer existiert.

Für Beispiele siehe unseren [Leitfaden zu Vorlagen und Slots verwenden](/de/docs/Web/API/Web_components/Using_templates_and_slots).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- HTML [globale Attribute](/de/docs/Web/HTML/Reference/Global_attributes)
- HTML {{HTMLElement("slot")}}-Element
- HTML {{HTMLElement("template")}}-Element
- CSS {{CSSXref("::slotted")}}-Pseudoelement
- [CSS-Scoping](/de/docs/Web/CSS/CSS_scoping)-Modul
- [Webkomponenten](/de/docs/Web/API/Web_components)
