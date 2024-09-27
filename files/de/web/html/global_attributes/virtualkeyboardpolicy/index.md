---
title: virtualkeyboardpolicy
slug: Web/HTML/Global_attributes/virtualkeyboardpolicy
l10n:
  sourceCommit: 96e73ab4d1fdb714a6a6516821b3206d83909046
---

{{HTMLSidebar("Global_attributes")}}{{SeeCompatTable}}

Das **`virtualkeyboardpolicy`** [globale Attribut](/de/docs/Web/HTML/Global_attributes) ist ein enumeriertes Attribut. Wenn es auf einem Element angegeben ist, dessen Inhalt bearbeitbar ist (zum Beispiel ein {{htmlelement("input")}}- oder {{htmlelement("textarea")}}-Element oder ein Element mit dem [`contenteditable`](/de/docs/Web/HTML/Global_attributes/contenteditable) Attribut), steuert es das Verhalten der virtuellen Bildschirmtastatur auf Geräten wie Tablets, Mobiltelefonen oder anderen Geräten, auf denen möglicherweise keine Hardwaretastatur verfügbar ist.

Das Attribut muss einen der folgenden Werte annehmen:

- `auto` oder ein _leerer String_, wodurch die virtuelle Tastatur automatisch angezeigt wird, wenn das Element fokussiert oder angetippt wird.
- `manual`, wodurch der Fokus und das Tippen auf das Element von dem Zustand der virtuellen Tastatur entkoppelt wird.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Alle [globalen Attribute](/de/docs/Web/HTML/Global_attributes)
- [`HTMLElement.contentEditable`](/de/docs/Web/API/HTMLElement/contentEditable) und [`HTMLElement.isContentEditable`](/de/docs/Web/API/HTMLElement/isContentEditable)
- [Die VirtualKeyboard-API](/de/docs/Web/API/VirtualKeyboard_API)
