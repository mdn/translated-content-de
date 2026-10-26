---
title: "Element: click-Ereignis"
short-title: click
slug: Web/API/Element/click_event
l10n:
  sourceCommit: 195b87dbb0e63aab27700b606fc96c4cd7982f64
---

{{APIRef("UI Events")}}

Ein Element empfängt ein **`click`**-Ereignis, wenn einer der folgenden Fälle eintritt:

- Eine Taste eines Zeigegeräts (etwa die primäre Maustaste) wird gedrückt und wieder losgelassen, während sich der Zeiger innerhalb des Elements befindet.
- Auf dem Element wird eine Berührungsgeste ausgeführt.
- Eine Benutzerinteraktion entspricht einem Klick, etwa das Drücken der <kbd>Leertaste</kbd> oder der <kbd>Eingabetaste</kbd>, während das Element fokussiert ist. Dies gilt nur für Elemente mit einem standardmäßigen Handler für Tastaturereignisse. Elemente, die durch Setzen des Attributs [`tabindex`](/de/docs/Web/HTML/Reference/Global_attributes/tabindex) fokussierbar gemacht wurden, sind daher ausgeschlossen.

Wenn die Taste auf einem Element gedrückt und der Zeiger vor dem Loslassen aus dem Element herausbewegt wird, wird das Ereignis auf dem spezifischsten übergeordneten Element ausgelöst, das beide Elemente enthält.

`click` wird ausgelöst, nachdem die Ereignisse [`mousedown`](/de/docs/Web/API/Element/mousedown_event) und [`mouseup`](/de/docs/Web/API/Element/mouseup_event) in dieser Reihenfolge ausgelöst wurden.

Das Ereignis ist geräteunabhängig. Es kann durch Berührung, Tastatur, Maus und andere von assistiven Technologien bereitgestellte Mechanismen ausgelöst werden.

## Syntax

Verwenden Sie den Ereignisnamen in [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener):

```js-nolint
addEventListener("click", (event) => { })
```

Alternativ können Sie ihn der [Event-Handler-Eigenschaft](/de/docs/Web/API/Document_Object_Model/Events#using_onevent_properties) der Schnittstelle zuweisen:

```js-nolint
onclick = (event) => { }
```

## Ereignistyp

Ein [`PointerEvent`](/de/docs/Web/API/PointerEvent). Es erbt von [`MouseEvent`](/de/docs/Web/API/MouseEvent).

{{InheritanceDiagram("PointerEvent")}}

> [!NOTE]
> In früheren Versionen der Spezifikation war der Ereignistyp dieses Ereignisses ein [`MouseEvent`](/de/docs/Web/API/MouseEvent). Weitere Informationen finden Sie unter [Browser-Kompatibilität](#browser-kompatibilität).

## Verwendungshinweise

Die Eigenschaft [`detail`](/de/docs/Web/API/UIEvent/detail) des [`PointerEvent`](/de/docs/Web/API/PointerEvent)-Objekts, das an den Event-Handler für `click` übergeben wird, enthält die Anzahl der Klicks auf das [`target`](/de/docs/Web/API/Event/target). Bei einem Doppelklick hat `detail` also den Wert 2, bei einem Dreifachklick den Wert 3 und so weiter. Dieser Zähler wird zurückgesetzt, wenn für kurze Zeit keine Klicks erfolgen. Die genaue Dauer dieses Zeitraums kann je nach Browser und Plattform variieren. Sie wird wahrscheinlich auch von den Benutzereinstellungen beeinflusst: Barrierefreiheitsoptionen können den Zeitraum beispielsweise verlängern, damit sich mehrere Klicks mit adaptiven Eingabegeräten leichter ausführen lassen.

## Beispiele

Dieses Beispiel zeigt die Anzahl aufeinanderfolgender Klicks auf ein {{HtmlElement("button")}} an.

### HTML

```html
<button>Click</button>
```

### JavaScript

```js
const button = document.querySelector("button");

button.addEventListener("click", (event) => {
  button.textContent = `Click count: ${event.detail}`;
});
```

### Ergebnis

Klicken Sie mehrmals schnell hintereinander auf die Schaltfläche, um die Anzahl zu erhöhen. Wenn Sie zwischen den Klicks eine Pause machen, wird der Zähler zurückgesetzt.

{{EmbedLiveSample("Examples")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Lernen: Einführung in Ereignisse](/de/docs/Learn_web_development/Core/Scripting/Events)
- [`auxclick`](/de/docs/Web/API/Element/auxclick_event)
- [`contextmenu`](/de/docs/Web/API/Element/contextmenu_event)
- [`dblclick`](/de/docs/Web/API/Element/dblclick_event)
- [`mousedown`](/de/docs/Web/API/Element/mousedown_event)
- [`mouseup`](/de/docs/Web/API/Element/mouseup_event)
- [`pointerdown`](/de/docs/Web/API/Element/pointerdown_event)
- [`pointerup`](/de/docs/Web/API/Element/pointerup_event)
