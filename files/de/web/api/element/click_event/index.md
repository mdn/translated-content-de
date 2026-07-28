---
title: "Element: click event"
short-title: click
slug: Web/API/Element/click_event
l10n:
  sourceCommit: ac7f589f2471fde8e5ee910a7fbd8a4bff931140
---

{{APIRef("UI Events")}}

Ein Element empfängt ein **`click`**-Ereignis, wenn eines der folgenden Ereignisse eintritt:

- Eine Zeigegeräte-Taste (wie die Primärtaste einer Maus) wird sowohl gedrückt als auch losgelassen, während der Zeiger sich innerhalb des Elements befindet.
- Eine Berührungsgeste wird auf dem Element ausgeführt.
- Jede Benutzerinteraktion, die einem Klick entspricht, wie das Drücken der <kbd>Space</kbd>- oder <kbd>Enter</kbd>-Taste, während das Element fokussiert ist. Beachten Sie, dass dies nur für Elemente mit einem Standard-Tastaturereignis-Handler gilt und daher andere Elemente ausschließt, die durch das Setzen des [`tabindex`](/de/docs/Web/HTML/Reference/Global_attributes/tabindex)-Attributs Fokus erhalten haben.

Wird die Taste auf einem Element gedrückt und der Zeiger bewegt sich außerhalb des Elements, bevor die Taste losgelassen wird, wird das Ereignis auf dem spezifischsten übergeordneten Element ausgelöst, das beide Elemente enthielt.

`click` wird in der Reihenfolge ausgelöst, nachdem sowohl das [`mousedown`](/de/docs/Web/API/Element/mousedown_event) als auch das [`mouseup`](/de/docs/Web/API/Element/mouseup_event) Ereignis ausgelöst wurden.

Das Ereignis ist ein geräteunabhängiges Ereignis – es kann durch Berührung, Tastatur, Maus und jedes andere von unterstützender Technologie bereitgestellte Mechanismus aktiviert werden.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignis-Handler-Property.

```js-nolint
addEventListener("click", (event) => { })

onclick = (event) => { }
```

## Ereignistyp

Ein [`PointerEvent`](/de/docs/Web/API/PointerEvent). Erbt von [`MouseEvent`](/de/docs/Web/API/MouseEvent).

{{InheritanceDiagram("PointerEvent")}}

> [!NOTE]
> In früheren Versionen der Spezifikation war der Ereignistyp für dieses Ereignis ein [`MouseEvent`](/de/docs/Web/API/MouseEvent). Überprüfen Sie die [Browser-Kompatibilität](#browser-kompatibilität) für weitere Informationen.

## Verwendungshinweise

Das [`PointerEvent`](/de/docs/Web/API/PointerEvent)-Objekt, das in den Ereignis-Handler für `click` übergeben wird, hat seine [`detail`](/de/docs/Web/API/UIEvent/detail)-Eigenschaft auf die Anzahl der Male gesetzt, die das [`target`](/de/docs/Web/API/Event/target) angeklickt wurde. Mit anderen Worten, `detail` wird für einen Doppelklick 2, für einen Dreifachklick 3 und so weiter sein. Dieser Zähler wird nach einem kurzen Intervall ohne Klicks zurückgesetzt; die Details, wie lange dieses Intervall ist, können von Browser zu Browser und über Plattformen hinweg variieren. Das Intervall wird wahrscheinlich auch von Benutzereinstellungen beeinflusst; zum Beispiel können Barrierefreiheitsoptionen dieses Intervall verlängern, um es einfacher zu machen, mehrere Klicks mit adaptiven Schnittstellen auszuführen.

## Beispiele

Dieses Beispiel zeigt die Anzahl der aufeinanderfolgenden Klicks auf eine {{HtmlElement("button")}}.

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

Versuchen Sie, schnelle, wiederholte Klicks auf den Button zu machen, um die Klickanzahl zu erhöhen. Wenn Sie eine Pause zwischen den Klicks machen, wird der Zähler zurückgesetzt.

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
