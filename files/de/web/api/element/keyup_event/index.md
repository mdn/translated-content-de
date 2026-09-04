---
title: "Element: keyup event"
short-title: keyup
slug: Web/API/Element/keyup_event
l10n:
  sourceCommit: 358daf81ac9cf3db999cc8af7aed81ef4ff0c3f6
---

{{APIRef("UI Events")}}

Das **`keyup`** Ereignis wird ausgelöst, wenn eine Taste losgelassen wird.

Die [`keydown`](/de/docs/Web/API/Element/keydown_event) und `keyup` Ereignisse liefern einen Code, der angibt, welche Taste gedrückt wurde, während `keypress` angibt, welches Zeichen eingegeben wurde. Zum Beispiel wird ein kleines "a" sowohl bei `keydown` als auch bei `keyup` als 65 gemeldet, aber als 97 bei `keypress`. Ein großes "A" wird von allen Ereignissen als 65 gemeldet.

Das Ziel eines Tastaturereignisses ist das derzeit fokussierte Element, das die Tastaturaktivität verarbeitet. Dazu gehören: {{HTMLElement("input")}}, {{HTMLElement("textarea")}}, alles, was [`contentEditable`](/de/docs/Web/HTML/Reference/Global_attributes/contenteditable) ist, und alles andere, was mit der Tastatur interagiert werden kann, wie {{HTMLElement("a")}}, {{HTMLElement("button")}}, und {{HTMLElement("summary")}}. Wenn kein geeignetes Element fokussiert ist, ist das Ereignisziel der {{HTMLElement("body")}} oder die Wurzel. Das Ereignis [bubbles](/de/docs/Learn_web_development/Core/Scripting/Event_bubbling). Es kann [`Document`](/de/docs/Web/API/Document) und [`Window`](/de/docs/Web/API/Window) erreichen.

Das Ereignisziel kann zwischen verschiedenen Tastaturereignissen wechseln. Wenn zum Beispiel die <kbd>Tab</kbd>-Taste gedrückt wird, unterscheidet sich das `keydown`-Ziel vom `keyup`-Ziel, weil sich der Fokus geändert hat.

Da das Ereignis ausgelöst wird, nachdem die Taste losgelassen wurde, reflektieren die Modifiziertasten-Eigenschaften ([`ctrlKey`](/de/docs/Web/API/KeyboardEvent/ctrlKey), [`altKey`](/de/docs/Web/API/KeyboardEvent/altKey), [`shiftKey`](/de/docs/Web/API/KeyboardEvent/shiftKey) und [`metaKey`](/de/docs/Web/API/KeyboardEvent/metaKey)) den Zustand nach dem Loslassen. Zum Beispiel ist `ctrlKey` bei einem `keyup`-Ereignis für die <kbd>Control</kbd>-Taste selbst `false`. Wenn eine andere Taste losgelassen wird, während die <kbd>Control</kbd>-Taste weiterhin gedrückt bleibt, ist `ctrlKey` für das `keyup`-Ereignis dieser Taste `true`.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener), oder setzen Sie eine Ereignishandler-Eigenschaft.

```js-nolint
addEventListener("keyup", (event) => { })

onkeyup = (event) => { }
```

## Ereignistyp

Ein [`KeyboardEvent`](/de/docs/Web/API/KeyboardEvent). Erbt von [`UIEvent`](/de/docs/Web/API/UIEvent) und [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("KeyboardEvent")}}

## Beispiele

### addEventListener keyup Beispiel

Dieses Beispiel protokolliert den Wert von [`KeyboardEvent.code`](/de/docs/Web/API/KeyboardEvent/code), wenn Sie eine Taste im {{HtmlElement("input")}}-Element loslassen.

```html
<input placeholder="Click here, then press and release a key." size="40" />
<p id="log"></p>
```

```js
const input = document.querySelector("input");
const log = document.getElementById("log");

input.addEventListener("keyup", logKey);

function logKey(e) {
  log.textContent += ` ${e.code}`;
}
```

{{EmbedLiveSample("addEventListener_keyup_example")}}

### keyup Ereignisse mit IME

Seit Firefox 65 werden die [`keydown`](/de/docs/Web/API/Element/keydown_event) und `keyup` Ereignisse während der {{Glossary("Input_method_editor", "Eingabemethoden-Editor")}} Komposition ausgelöst, um die Kompatibilität zwischen Browsern für CJKT-Benutzer zu verbessern ([Firefox bug 354358](https://bugzil.la/354358)). Um alle `keyup` Ereignisse zu ignorieren, die Teil der Komposition sind, tun Sie Folgendes:

```js
eventTarget.addEventListener("keyup", (event) => {
  if (event.isComposing) {
    return;
  }
  // do something
});
```

> [!NOTE]
> Im Gegensatz zu `keydown` haben `keyup`-Ereignisse keine speziellen [`keyCode`](/de/docs/Web/API/KeyboardEvent/keyCode) Werte für IME-Ereignisse. Jedoch, wie bei `keydown`, kann `compositionstart` _nach_ `keyup` ausgelöst werden, wenn das erste Zeichen eingegeben wird, das den IME öffnet, und `compositionend` kann _vor_ `keyup` ausgelöst werden, wenn das letzte Zeichen eingegeben wird, das den IME schließt. In diesen Fällen ist `isComposing` falsch, selbst wenn das Ereignis Teil der Komposition ist.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`input`](/de/docs/Web/API/Element/input_event)
- [`keydown`](/de/docs/Web/API/Element/keydown_event)
- [`keypress`](/de/docs/Web/API/Element/keypress_event)
