---
title: "Window: Ausschneide-Ereignis"
short-title: ausschneiden
slug: Web/API/Window/cut_event
l10n:
  sourceCommit: cc070123f72376faec06e36622c4fc723a75325f
---

{{APIRef}}

Das **`cut`**-Ereignis wird ausgelöst, wenn der Benutzer eine "Ausschneiden"-Aktion über die Benutzeroberfläche des Browsers initiiert hat.

Das ursprüngliche Ziel dieses Ereignisses ist das {{domxref("Element")}}, das Ziel der Ausschneideaktion war. Sie können auf dieses Ereignis in der {{domxref("Window")}}-Schnittstelle hören, um es in der Capture- oder Bubbling-Phase zu behandeln. Für vollständige Details zu diesem Ereignis sehen Sie bitte die Seite über das [Element: Ausschneide-Ereignis](/de/docs/Web/API/Element/cut_event).

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie {{domxref("EventTarget.addEventListener", "addEventListener()")}}, oder setzen Sie eine Ereignis-Handler-Eigenschaft.

```js
addEventListener("cut", (event) => {});

oncut = (event) => {};
```

## Ereignistyp

Ein {{domxref("ClipboardEvent")}}. Erbt von {{domxref("Event")}}.

{{InheritanceDiagram("ClipboardEvent")}}

## Beispiele

```js
window.addEventListener("cut", (event) => {
  console.log("Ausschneide-Aktion initiiert");
});
```

## Spezifikationen

{{Specifications}}

## Kompatibilität der Browser

{{Compat}}

## Siehe auch

- Verwandte Ereignisse: {{domxref("Window/copy_event", "kopieren")}}, {{domxref("Window/paste_event", "einfügen")}}
- Dieses Ereignis bei {{domxref("Element")}} Zielen: {{domxref("Element/cut_event", "ausschneiden")}}
- Dieses Ereignis bei {{domxref("Document")}} Zielen: {{domxref("Document/cut_event", "ausschneiden")}}
