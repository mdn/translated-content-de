---
title: "HTMLElement: virtualKeyboardPolicy-Eigenschaft"
short-title: virtualKeyboardPolicy
slug: Web/API/HTMLElement/virtualKeyboardPolicy
l10n:
  sourceCommit: 816cc4d4a5a318a23222946b6981bb92b499aebb
---

{{APIRef("VirtualKeyboard API")}}{{SeeCompatTable}}

Die **`virtualKeyboardPolicy`**-Eigenschaft der [`HTMLElement`](/de/docs/Web/API/HTMLElement)-Schnittstelle erhält und setzt einen String, der das Verhalten der virtuellen Bildschirmtastatur auf Geräten wie Tablets, Mobiltelefonen oder anderen Geräten, bei denen eine Hardwaretastatur möglicherweise nicht verfügbar ist, angibt, wenn der Inhalt des Elements bearbeitbar ist (zum Beispiel, es ist ein {{htmlelement("input")}}- oder {{htmlelement("textarea")}}-Element oder ein Element mit dem [`contenteditable`](/de/docs/Web/HTML/Global_attributes/contenteditable)-Attribut).

Sie spiegelt den Wert des HTML-Globalattributs [`virtualkeyboardpolicy`](/de/docs/Web/HTML/Global_attributes/virtualkeyboardpolicy) wider.

## Wert

Ein enumerierter Wert; mögliche Werte sind:

- `"auto"` oder ein leerer String (`""`)
  - : Der Browser zeigt die virtuelle Tastatur automatisch an, wenn der Benutzer auf das Element tippt oder es fokussiert.
- `"manual"`
  - : Der Browser zeigt die virtuelle Tastatur nicht automatisch an: Das Anzeigen/Verbergen der virtuellen Tastatur wird manuell durch das Skript gesteuert.

## Beispiele

Das folgende Beispiel zeigt, wie das Verhalten der virtuellen Bildschirmtastatur über ein Skript gesteuert werden kann:

```js
const element = document.querySelector("input");

// the on-screen virtual keyboard behavior will be controlled by script manually
element.virtualKeyboardPolicy = "manual";
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`virtualkeyboardpolicy`](/de/docs/Web/HTML/Global_attributes/virtualkeyboardpolicy) HTML-Globalattribut
