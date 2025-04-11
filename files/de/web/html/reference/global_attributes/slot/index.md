---
title: slot
slug: Web/HTML/Reference/Global_attributes/slot
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{HTMLSidebar("Global_attributes")}}

Das **`slot`** [globale Attribut](/de/docs/Web/HTML/Reference/Global_attributes) weist einem Element einen Slot in einem [Shadow-DOM](/de/docs/Web/API/Web_components/Using_shadow_DOM)-Shadow-Baum zu: Ein Element mit einem `slot`-Attribut wird dem Slot zugewiesen, der durch das {{HTMLElement("slot")}} Element erstellt wurde, dessen [`name`](/de/docs/Web/HTML/Reference/Elements/slot#name)-Attributswert mit dem Wert des `slot`-Attributs übereinstimmt. Sie können mehrere Elemente demselben Slot zuweisen, indem Sie denselben Slot-Namen verwenden. Elemente ohne ein `slot`-Attribut werden, falls vorhanden, dem unbenannten Slot zugewiesen.

Für Beispiele siehe unseren [Leitfaden zur Verwendung von Templates und Slots](/de/docs/Web/API/Web_components/Using_templates_and_slots).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- HTML [globale Attribute](/de/docs/Web/HTML/Reference/Global_attributes)
- HTML {{HTMLElement("slot")}} Element
- HTML {{HTMLElement("template")}} Element
- CSS {{CSSXref("::slotted")}} Pseudoelement
- [CSS Scoping](/de/docs/Web/CSS/CSS_scoping) Modul
- [Webkomponenten](/de/docs/Web/API/Web_components)
