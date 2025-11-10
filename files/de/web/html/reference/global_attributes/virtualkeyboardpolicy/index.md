---
title: HTML-Attribut globales `virtualkeyboardpolicy`
short-title: virtualkeyboardpolicy
slug: Web/HTML/Reference/Global_attributes/virtualkeyboardpolicy
l10n:
  sourceCommit: 0754cd805a8e010d2e3a2a065f634a3bcf358252
---

{{SeeCompatTable}}

Das **`virtualkeyboardpolicy`** [globale Attribut](/de/docs/Web/HTML/Reference/Global_attributes) ist ein enumeriertes Attribut. Wenn es auf ein Element angewendet wird, dessen Inhalt bearbeitbar ist (zum Beispiel ein {{htmlelement("input")}}- oder {{htmlelement("textarea")}}-Element oder ein Element mit dem Attribut [`contenteditable`](/de/docs/Web/HTML/Reference/Global_attributes/contenteditable)), steuert es das Verhalten der virtuellen Bildschirmtastatur auf Geräten wie Tablets, Mobiltelefonen oder anderen Geräten, bei denen möglicherweise keine Hardware-Tastatur verfügbar ist.

Das Attribut muss einen der folgenden Werte annehmen:

- `auto` oder einen _leeren String_, was die virtuelle Tastatur automatisch zeigt, wenn das Element fokussiert oder angetippt wird.
- `manual`, was den Fokus und das Antippen des Elements vom Zustand der virtuellen Tastatur entkoppelt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Alle [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes)
- [`HTMLElement.contentEditable`](/de/docs/Web/API/HTMLElement/contentEditable) und [`HTMLElement.isContentEditable`](/de/docs/Web/API/HTMLElement/isContentEditable)
- [Die VirtualKeyboard API](/de/docs/Web/API/VirtualKeyboard_API)
