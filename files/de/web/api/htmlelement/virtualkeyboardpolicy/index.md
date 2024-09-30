---
title: "HTMLElement: virtualKeyboardPolicy Eigenschaft"
short-title: virtualKeyboardPolicy
slug: Web/API/HTMLElement/virtualKeyboardPolicy
l10n:
  sourceCommit: c7e432ec4c970b0b63741101bacce148804138e4
---

{{APIRef("VirtualKeyboard API")}}{{SeeCompatTable}}

Die **`virtualKeyboardPolicy`**-Eigenschaft des [`HTMLElement`](/de/docs/Web/API/HTMLElement)-Interfaces erhält und setzt einen String, der das Verhalten der virtuellen Bildschirmtastatur auf Geräten wie Tablets, Mobiltelefonen oder anderen Geräten angibt, bei denen möglicherweise keine Hardware-Tastatur verfügbar ist, wenn der Inhalt des Elements bearbeitbar ist (zum Beispiel bei einem {{htmlelement("input")}}- oder {{htmlelement("textarea")}}-Element oder einem Element mit dem [`contenteditable`](/de/docs/Web/HTML/Global_attributes/contenteditable)-Attribut).

Es spiegelt den Wert des globalen HTML-Attributs [`virtualkeyboardpolicy`](/de/docs/Web/HTML/Global_attributes/virtualkeyboardpolicy) wider.

## Wert

Ein aufgezählter Wert; mögliche Werte sind:

- `"auto"` oder ein leerer String (`""`)
  - : Der Browser zeigt die virtuelle Tastatur automatisch an, wenn der Benutzer auf das Element tippt oder es fokussiert.
- `"manual"`
  - : Der Browser zeigt die virtuelle Tastatur nicht automatisch an: Das Ein- und Ausblenden der virtuellen Tastatur wird manuell durch das Skript gesteuert.

## Beispiele

Das folgende Beispiel zeigt, wie das Verhalten der virtuellen Bildschirmtastatur über Skript gesteuert werden kann:

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

- [`virtualkeyboardpolicy`](/de/docs/Web/HTML/Global_attributes#virtualkeyboardpolicy) HTML-Globalattribut
