---
title: "`virtualkeyboardpolicy` HTML-Globaleigenschaft"
short-title: virtualkeyboardpolicy
slug: Web/HTML/Reference/Global_attributes/virtualkeyboardpolicy
l10n:
  sourceCommit: 9c70c6ff09189cad43d40e241fbd2fe67349c3c2
---

{{SeeCompatTable}}

Das **`virtualkeyboardpolicy`** [Globaleigenschaft](/de/docs/Web/HTML/Reference/Global_attributes) ist eine enumerierte Eigenschaft. Wenn es auf einem Element angegeben ist, dessen Inhalt bearbeitbar ist (zum Beispiel ein {{htmlelement("input")}} oder {{htmlelement("textarea")}} Element, oder ein Element mit der [`contenteditable`](/de/docs/Web/HTML/Reference/Global_attributes/contenteditable) Eigenschaft gesetzt), steuert es das Verhalten der virtuellen Bildschirmtastatur auf Geräten wie Tablets, Mobiltelefonen oder anderen Geräten, bei denen eine physische Tastatur möglicherweise nicht verfügbar ist.

Die Eigenschaft muss einen der folgenden Werte annehmen:

- `auto` oder ein _leerer String_, was die virtuelle Tastatur automatisch anzeigt, wenn das Element fokussiert oder angetippt wird.
- `manual`, was den Fokus und das Antippen des Elements vom Zustand der virtuellen Tastatur entkoppelt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Alle [Globalen Eigenschaften](/de/docs/Web/HTML/Reference/Global_attributes)
- [`HTMLElement.contentEditable`](/de/docs/Web/API/HTMLElement/contentEditable) und [`HTMLElement.isContentEditable`](/de/docs/Web/API/HTMLElement/isContentEditable)
- [Die VirtualKeyboard API](/de/docs/Web/API/VirtualKeyboard_API)
