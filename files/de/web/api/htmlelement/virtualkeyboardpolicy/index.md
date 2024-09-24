---
title: "HTMLElement: virtualKeyboardPolicy-Eigenschaft"
short-title: virtualKeyboardPolicy
slug: Web/API/HTMLElement/virtualKeyboardPolicy
l10n:
  sourceCommit: c7e432ec4c970b0b63741101bacce148804138e4
---

{{APIRef("VirtualKeyboard API")}}{{SeeCompatTable}}

Die **`virtualKeyboardPolicy`**-Eigenschaft des {{domxref("HTMLElement")}}-Interfaces ruft eine Zeichenkette ab oder setzt diese, um das Verhalten der virtuellen Bildschirmtastatur auf Geräten wie Tablets, Mobiltelefonen oder anderen Geräten anzugeben, bei denen möglicherweise keine Hardware-Tastatur verfügbar ist, wenn der Inhalt des Elements bearbeitbar ist (zum Beispiel handelt es sich um ein {{htmlelement("input")}}- oder {{htmlelement("textarea")}}-Element oder ein Element mit dem [`contenteditable`](/de/docs/Web/HTML/Global_attributes/contenteditable)-Attribut).

Sie spiegelt den Wert des globalen HTML-Attributs [`virtualkeyboardpolicy`](/de/docs/Web/HTML/Global_attributes/virtualkeyboardpolicy) wider.

## Wert

Ein enumerierter Wert; mögliche Werte sind:

- `"auto"` oder ein leerer String (`""`)
  - : Der Browser zeigt die virtuelle Tastatur automatisch an, wenn der Benutzer das Element antippt oder den Fokus darauf setzt.
- `"manual"`
  - : Der Browser zeigt die virtuelle Tastatur nicht automatisch an: Das Ein- und Ausblenden der virtuellen Tastatur wird manuell über das Skript gesteuert.

## Beispiele

Das folgende Beispiel zeigt, wie man das Verhalten der virtuellen Bildschirmtastatur per Skript steuert:

```js
const element = document.querySelector("input");

// das Verhalten der virtuellen Bildschirmtastatur wird manuell durch das Skript gesteuert
element.virtualKeyboardPolicy = "manual";
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`virtualkeyboardpolicy`](/de/docs/Web/HTML/Global_attributes#virtualkeyboardpolicy) HTML-Globalattribut
