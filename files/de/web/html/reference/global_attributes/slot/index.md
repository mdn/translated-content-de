---
title: "`slot` HTML-Globalattribut"
short-title: slot
slug: Web/HTML/Reference/Global_attributes/slot
l10n:
  sourceCommit: 9c70c6ff09189cad43d40e241fbd2fe67349c3c2
---

Das **`slot`**-[Globalattribut](/de/docs/Web/HTML/Reference/Global_attributes) weist einem Element einen Slot in einem [Shadow DOM](/de/docs/Web/API/Web_components/Using_shadow_DOM) Shadow-Baum zu: Ein Element mit einem `slot`-Attribut wird dem Slot zugeordnet, der durch das {{HTMLElement("slot")}}-Element erstellt wurde, dessen [`name`](/de/docs/Web/HTML/Reference/Elements/slot#name)-Attribut den gleichen Wert wie das `slot`-Attribut besitzt. Sie können mehrere Elemente demselben Slot zuweisen, indem Sie denselben Slot-Namen verwenden. Elemente ohne `slot`-Attribut werden dem unbenannten Slot zugewiesen, sofern dieser existiert.

Beispiele finden Sie in unserem [Leitfaden für die Verwendung von Templates und Slots](/de/docs/Web/API/Web_components/Using_templates_and_slots).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- HTML-[Globalattribute](/de/docs/Web/HTML/Reference/Global_attributes)
- HTML {{HTMLElement("slot")}} Element
- HTML {{HTMLElement("template")}} Element
- CSS {{CSSXref("::slotted")}} Pseudo-Element
- [CSS-Scoping](/de/docs/Web/CSS/Guides/Scoping)-Modul
- [Web-Komponenten](/de/docs/Web/API/Web_components)
