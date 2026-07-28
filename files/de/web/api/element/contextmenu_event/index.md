---
title: "Element: contextmenu Ereignis"
short-title: contextmenu
slug: Web/API/Element/contextmenu_event
l10n:
  sourceCommit: ac7f589f2471fde8e5ee910a7fbd8a4bff931140
---

{{APIRef("Pointer Events")}}

Das **`contextmenu`**-Ereignis wird ausgelöst, wenn der Benutzer versucht, ein Kontextmenü zu öffnen. Dies wird typischerweise durch das Klicken der rechten Maustaste oder durch Drücken der Kontextmenü-Taste initiiert.

Im letzteren Fall wird das Kontextmenü unten links am fokussierten Element angezeigt, es sei denn, das Element ist ein Baum, in diesem Fall wird das Kontextmenü unten links in der aktuellen Zeile angezeigt.

Jedes Rechtsklick-Ereignis, das nicht deaktiviert wurde (durch Aufruf der Methode [`preventDefault()`](/de/docs/Web/API/Event/preventDefault) des Klick-Ereignisses), führt dazu, dass ein `contextmenu`-Ereignis am Ziel-Element ausgelöst wird.

> [!NOTE]
> Eine Ausnahme in Firefox: Wenn der Benutzer die <kbd>Umschalt</kbd>-Taste gedrückt hält, während er mit der rechten Maustaste klickt, wird das Kontextmenü angezeigt, ohne dass ein `contextmenu`-Ereignis ausgelöst wird.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder legen Sie eine Ereignis-Handler-Eigenschaft fest.

```js-nolint
addEventListener("contextmenu", (event) => { })

oncontextmenu = (event) => { }
```

## Ereignistyp

Ein [`PointerEvent`](/de/docs/Web/API/PointerEvent). Erbt von [`MouseEvent`](/de/docs/Web/API/MouseEvent).

{{InheritanceDiagram("PointerEvent")}}

> [!NOTE]
> In früheren Versionen der Spezifikation war der Ereignistyp für dieses Ereignis ein [`MouseEvent`](/de/docs/Web/API/MouseEvent). Überprüfen Sie die [Browser-Kompatibilität](#browser-kompatibilität) für mehr Informationen.

## Beispiele

### Das `contextmenu`-Ereignis abbrechen

In diesem Beispiel wird die Standardaktion des `contextmenu`-Ereignisses mittels `preventDefault()` abgebrochen, wenn das `contextmenu`-Ereignis beim ersten Absatz ausgelöst wird. Dadurch wird beim Rechtsklick auf den ersten Absatz nichts passieren, während der zweite Absatz das standardmäßige Kontextmenü Ihres Browsers anzeigen wird.

> [!NOTE]
> In Firefox, wenn Sie die <kbd>Umschalt</kbd>-Taste gedrückt halten, während Sie mit der rechten Maustaste klicken, wird das Kontextmenü angezeigt, ohne dass das `contextmenu`-Ereignis ausgelöst wird. Daher verhindert das Abbrechen des Ereignisses nicht die Anzeige des Kontextmenüs.

#### HTML

```html
<p id="noContextMenu">The context menu has been disabled on this paragraph.</p>
<p>But it has not been disabled on this one.</p>
```

#### JavaScript

```js
const noContext = document.getElementById("noContextMenu");

noContext.addEventListener("contextmenu", (e) => {
  e.preventDefault();
});
```

#### Ergebnis

{{EmbedLiveSample("Canceling the contextmenu event")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Lernen: Einführung in Ereignisse](/de/docs/Learn_web_development/Core/Scripting/Events)
- [`auxclick`](/de/docs/Web/API/Element/auxclick_event)
- [`click`](/de/docs/Web/API/Element/click_event)
- [`dblclick`](/de/docs/Web/API/Element/dblclick_event)
- [`mousedown`](/de/docs/Web/API/Element/mousedown_event)
- [`mouseup`](/de/docs/Web/API/Element/mouseup_event)
- [`pointerdown`](/de/docs/Web/API/Element/pointerdown_event)
- [`pointerup`](/de/docs/Web/API/Element/pointerup_event)
