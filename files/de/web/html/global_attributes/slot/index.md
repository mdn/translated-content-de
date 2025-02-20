---
title: slot
slug: Web/HTML/Global_attributes/slot
l10n:
  sourceCommit: cca1e467eab1468f7bd9c7619e30f8e2a8f4177c
---

{{HTMLSidebar("Global_attributes")}}

Das **`slot`** [Globale Attribut](/de/docs/Web/HTML/Global_attributes) weist einem Element einen Slot in einem [Shadow DOM](/de/docs/Web/API/Web_components/Using_shadow_DOM) Shadow-Baum zu: Ein Element mit einem `slot`-Attribut wird dem Slot zugeordnet, der durch das {{HTMLElement("slot")}}-Element erstellt wurde, dessen [`name`](/de/docs/Web/HTML/Element/slot#name)-Attribut dem Wert dieses `slot`-Attributs entspricht. Sie können mehrere Elemente demselben Slot zuordnen, indem Sie denselben Slotnamen verwenden. Elemente ohne `slot`-Attribut werden dem unbenannten Slot zugewiesen, falls einer existiert.

Für Beispiele siehe unseren [Verwendung von Vorlagen und Slots](/de/docs/Web/API/Web_components/Using_templates_and_slots) Leitfaden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- HTML [Globale Attribute](/de/docs/Web/HTML/Global_attributes)
- HTML {{HTMLElement("slot")}}-Element
- HTML {{HTMLElement("template")}}-Element
- CSS {{CSSXref("::slotted")}} Pseudo-Element
- [CSS Scoping](/de/docs/Web/CSS/CSS_scoping) Modul
- [Webkomponenten](/de/docs/Web/API/Web_components)
