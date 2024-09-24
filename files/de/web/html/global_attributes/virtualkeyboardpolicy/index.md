---
title: virtualkeyboardpolicy
slug: Web/HTML/Global_attributes/virtualkeyboardpolicy
l10n:
  sourceCommit: 96e73ab4d1fdb714a6a6516821b3206d83909046
---

{{HTMLSidebar("Global_attributes")}}{{SeeCompatTable}}

Das **`virtualkeyboardpolicy`** [globale Attribut](/de/docs/Web/HTML/Global_attributes) ist ein enumeriertes Attribut. Wenn es auf einem Element angegeben ist, dessen Inhalt bearbeitbar ist (zum Beispiel ein {{htmlelement("input")}}- oder {{htmlelement("textarea")}}-Element oder ein Element mit dem [`contenteditable`](/de/docs/Web/HTML/Global_attributes/contenteditable)-Attribut gesetzt), steuert es das Verhalten der Bildschirmtastatur auf Geräten wie Tablets, Mobiltelefonen oder anderen Geräten, auf denen möglicherweise keine Hardwaretastatur verfügbar ist.

Das Attribut muss einen der folgenden Werte annehmen:

- `auto` oder eine _leere Zeichenfolge_, die die Bildschirmtastatur automatisch anzeigt, wenn das Element fokussiert oder angetippt wird.
- `manual`, das den Fokus und das Antippen des Elements vom Zustand der Bildschirmtastatur entkoppelt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Alle [globalen Attribute](/de/docs/Web/HTML/Global_attributes)
- {{domxref("HTMLElement.contentEditable")}} und {{domxref("HTMLElement.isContentEditable")}}
- {{domxref("VirtualKeyboard_API", "Die VirtualKeyboard API", "", "nocode")}}
