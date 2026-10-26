---
title: "Element: contextmenu-Ereignis"
short-title: contextmenu
slug: Web/API/Element/contextmenu_event
l10n:
  sourceCommit: 195b87dbb0e63aab27700b606fc96c4cd7982f64
---

{{APIRef("Pointer Events")}}

Das **`contextmenu`**-Ereignis wird ausgelöst, wenn der Benutzer versucht, ein Kontextmenü zu öffnen. Dies geschieht in der Regel durch einen Klick mit der rechten Maustaste oder durch Drücken der Kontextmenütaste.

Im letzteren Fall wird das Kontextmenü links unten am fokussierten Element angezeigt. Handelt es sich bei dem Element um eine Baumansicht, wird es stattdessen links unten an der aktuellen Zeile angezeigt.

Jeder Rechtsklick, dessen Standardverhalten nicht durch Aufrufen der Methode [`preventDefault()`](/de/docs/Web/API/Event/preventDefault) für das Klickereignis verhindert wird, löst ein `contextmenu`-Ereignis am Zielelement aus.

> [!NOTE]
> In Firefox gibt es eine Ausnahme: Wenn Sie beim Rechtsklick die <kbd>Shift</kbd>-Taste gedrückt halten, wird das Kontextmenü angezeigt, ohne dass ein `contextmenu`-Ereignis ausgelöst wird.

## Syntax

Verwenden Sie den Ereignisnamen in [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener):

```js-nolint
addEventListener("contextmenu", (event) => { })
```

Alternativ können Sie ihn der [Event-Handler-Eigenschaft](/de/docs/Web/API/Document_Object_Model/Events#using_onevent_properties) des Interfaces zuweisen:

```js-nolint
oncontextmenu = (event) => { }
```

## Ereignistyp

Ein [`PointerEvent`](/de/docs/Web/API/PointerEvent). Erbt von [`MouseEvent`](/de/docs/Web/API/MouseEvent).

{{InheritanceDiagram("PointerEvent")}}

> [!NOTE]
> In früheren Versionen der Spezifikation war der Ereignistyp für dieses Ereignis ein [`MouseEvent`](/de/docs/Web/API/MouseEvent). Weitere Informationen finden Sie unter [Browser-Kompatibilität](#browser-kompatibilität).

## Beispiele

### Das `contextmenu`-Ereignis abbrechen

In diesem Beispiel wird die Standardaktion des `contextmenu`-Ereignisses mit `preventDefault()` verhindert, wenn das Ereignis am ersten Absatz ausgelöst wird. Daher geschieht bei einem Rechtsklick auf den ersten Absatz nichts, während beim zweiten Absatz das Standardkontextmenü Ihres Browsers angezeigt wird.

> [!NOTE]
> Wenn Sie in Firefox beim Rechtsklick die <kbd>Shift</kbd>-Taste gedrückt halten, wird das Kontextmenü angezeigt, ohne dass das `contextmenu`-Ereignis ausgelöst wird. Das Verhindern des Ereignisses kann die Anzeige des Kontextmenüs daher in diesem Fall nicht unterbinden.

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
