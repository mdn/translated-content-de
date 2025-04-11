---
title: virtualkeyboardpolicy
slug: Web/HTML/Reference/Global_attributes/virtualkeyboardpolicy
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{HTMLSidebar("Global_attributes")}}{{SeeCompatTable}}

Das **`virtualkeyboardpolicy`** [globale Attribut](/de/docs/Web/HTML/Reference/Global_attributes) ist ein aufgezähltes Attribut. Wenn es auf einem Element angegeben ist, dessen Inhalt bearbeitbar ist (zum Beispiel ein {{htmlelement("input")}} oder {{htmlelement("textarea")}} Element oder ein Element mit dem [`contenteditable`](/de/docs/Web/HTML/Reference/Global_attributes/contenteditable) Attribut gesetzt), steuert es das Verhalten der virtuellen Bildschirmtastatur auf Geräten wie Tablets, Mobiltelefonen oder anderen Geräten, bei denen eine Hardwaretastatur möglicherweise nicht verfügbar ist.

Das Attribut muss einen der folgenden Werte annehmen:

- `auto` oder ein _leerer String_, was die virtuelle Tastatur automatisch anzeigt, wenn das Element fokussiert oder angetippt wird.
- `manual`, das Fokus und Tippen auf dem Element vom Zustand der virtuellen Tastatur entkoppelt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Alle [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes)
- [`HTMLElement.contentEditable`](/de/docs/Web/API/HTMLElement/contentEditable) und [`HTMLElement.isContentEditable`](/de/docs/Web/API/HTMLElement/isContentEditable)
- [Die VirtualKeyboard API](/de/docs/Web/API/VirtualKeyboard_API)
