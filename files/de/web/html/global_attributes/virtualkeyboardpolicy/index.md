---
title: virtualkeyboardpolicy
slug: Web/HTML/Global_attributes/virtualkeyboardpolicy
l10n:
  sourceCommit: 96e73ab4d1fdb714a6a6516821b3206d83909046
---

{{HTMLSidebar("Global_attributes")}}{{SeeCompatTable}}

Das **`virtualkeyboardpolicy`** [globale Attribut](/de/docs/Web/HTML/Global_attributes) ist ein Aufzählungsattribut. Wenn es auf einem Element angegeben ist, dessen Inhalt bearbeitbar ist (zum Beispiel bei einem {{htmlelement("input")}} oder {{htmlelement("textarea")}} Element, oder einem Element mit dem [`contenteditable`](/de/docs/Web/HTML/Global_attributes/contenteditable) Attribut), steuert es das Verhalten der virtuellen Tastatur auf Geräten wie Tablets, Handys oder anderen Geräten, auf denen möglicherweise keine Hardware-Tastatur verfügbar ist.

Das Attribut muss einen der folgenden Werte annehmen:

- `auto` oder ein _leerer String_, was die virtuelle Tastatur automatisch anzeigt, wenn das Element fokussiert oder angetippt wird.
- `manual`, was den Fokus und die Berührung des Elements vom Zustand der virtuellen Tastatur entkoppelt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Alle [globalen Attribute](/de/docs/Web/HTML/Global_attributes)
- [`HTMLElement.contentEditable`](/de/docs/Web/API/HTMLElement/contentEditable) und [`HTMLElement.isContentEditable`](/de/docs/Web/API/HTMLElement/isContentEditable)
- [Die VirtualKeyboard API](/de/docs/Web/API/VirtualKeyboard_API)
