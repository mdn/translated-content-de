---
title: "HTMLElement: virtualKeyboardPolicy-Eigenschaft"
short-title: virtualKeyboardPolicy
slug: Web/API/HTMLElement/virtualKeyboardPolicy
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{APIRef("VirtualKeyboard API")}}{{SeeCompatTable}}

Die **`virtualKeyboardPolicy`**-Eigenschaft des [`HTMLElement`](/de/docs/Web/API/HTMLElement)-Interfaces ermittelt und setzt einen String, der das Verhalten der virtuellen On-Screen-Tastatur auf Geräten wie Tablets, Mobiltelefonen oder anderen Geräten angibt, bei denen möglicherweise keine Hardwaretastatur verfügbar ist, wenn die Inhalte des Elements bearbeitbar sind (zum Beispiel, wenn es sich um ein {{htmlelement("input")}}- oder {{htmlelement("textarea")}}-Element handelt oder ein Element mit dem [`contenteditable`](/de/docs/Web/HTML/Reference/Global_attributes/contenteditable)-Attribut, das gesetzt ist).

Es spiegelt den Wert des globalen HTML-Attributs [`virtualkeyboardpolicy`](/de/docs/Web/HTML/Reference/Global_attributes/virtualkeyboardpolicy) wider.

## Wert

Ein enumerierter Wert; mögliche Werte sind:

- `"auto"` oder ein leerer String (`""`)
  - : Der Browser zeigt die virtuelle Tastatur automatisch an, wenn der Benutzer das Element antippt oder fokussiert.
- `"manual"`
  - : Der Browser zeigt die virtuelle Tastatur nicht automatisch an: Das Anzeigen/Verbergen der virtuellen Tastatur wird manuell durch das Skript gesteuert.

## Beispiele

Das folgende Beispiel zeigt, wie das Verhalten der virtuellen On-Screen-Tastatur über ein Skript gesteuert werden kann:

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

- [`virtualkeyboardpolicy`](/de/docs/Web/HTML/Reference/Global_attributes/virtualkeyboardpolicy) globales HTML-Attribut
