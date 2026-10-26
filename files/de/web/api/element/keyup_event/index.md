---
title: "Element: keyup-Ereignis"
short-title: keyup
slug: Web/API/Element/keyup_event
l10n:
  sourceCommit: 195b87dbb0e63aab27700b606fc96c4cd7982f64
---

{{APIRef("UI Events")}}

Das **`keyup`**-Ereignis wird ausgelöst, wenn eine Taste losgelassen wird.

Die Ereignisse [`keydown`](/de/docs/Web/API/Element/keydown_event) und `keyup` liefern einen Code, der angibt, welche Taste gedrückt wurde, während `keypress` angibt, welches Zeichen eingegeben wurde. Beispielsweise wird ein kleines „a“ von `keydown` und `keyup` als 65 gemeldet, von `keypress` dagegen als 97. Ein großes „A“ wird von allen Ereignissen als 65 gemeldet.

Das Ereignisziel eines Tastaturereignisses ist das aktuell fokussierte Element, das die Tastatureingabe verarbeitet. Dazu gehören {{HTMLElement("input")}}, {{HTMLElement("textarea")}}, alle Elemente, die [`contentEditable`](/de/docs/Web/HTML/Reference/Global_attributes/contenteditable) sind, sowie alle anderen Elemente, mit denen über die Tastatur interagiert werden kann, etwa {{HTMLElement("a")}}, {{HTMLElement("button")}} und {{HTMLElement("summary")}}. Wenn kein geeignetes Element fokussiert ist, ist {{HTMLElement("body")}} oder das Wurzelelement das Ereignisziel. Das Ereignis wird [weitergereicht](/de/docs/Learn_web_development/Core/Scripting/Event_bubbling) und kann [`Document`](/de/docs/Web/API/Document) und [`Window`](/de/docs/Web/API/Window) erreichen.

Das Ereignisziel kann sich zwischen verschiedenen Tastaturereignissen ändern. Beispielsweise unterscheidet sich beim Drücken der <kbd>Tab</kbd>-Taste das Ziel von `keydown` vom Ziel von `keyup`, weil sich der Fokus geändert hat.

Da das Ereignis nach dem Loslassen der Taste ausgelöst wird, geben die Eigenschaften für Modifikatortasten ([`ctrlKey`](/de/docs/Web/API/KeyboardEvent/ctrlKey), [`altKey`](/de/docs/Web/API/KeyboardEvent/altKey), [`shiftKey`](/de/docs/Web/API/KeyboardEvent/shiftKey) und [`metaKey`](/de/docs/Web/API/KeyboardEvent/metaKey)) den Zustand nach dem Loslassen wieder. Beispielsweise ist `ctrlKey` beim `keyup`-Ereignis der <kbd>Control</kbd>-Taste selbst `false`. Wird eine andere Taste losgelassen, während die <kbd>Control</kbd>-Taste weiterhin gedrückt ist, ist `ctrlKey` beim `keyup`-Ereignis dieser anderen Taste `true`.

## Syntax

Verwenden Sie den Ereignisnamen in [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener):

```js-nolint
addEventListener("keyup", (event) => { })
```

Alternativ können Sie ihn der [Event-Handler-Eigenschaft](/de/docs/Web/API/Document_Object_Model/Events#using_onevent_properties) der Schnittstelle zuweisen:

```js-nolint
onkeyup = (event) => { }
```

## Ereignistyp

Ein [`KeyboardEvent`](/de/docs/Web/API/KeyboardEvent). Erbt von [`UIEvent`](/de/docs/Web/API/UIEvent) und [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("KeyboardEvent")}}

## Beispiele

### Beispiel für keyup mit addEventListener

Dieses Beispiel protokolliert den Wert von [`KeyboardEvent.code`](/de/docs/Web/API/KeyboardEvent/code), sobald Sie eine Taste innerhalb des {{HtmlElement("input")}}-Elements loslassen.

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

### keyup-Ereignisse mit IME

Seit Firefox 65 werden die Ereignisse [`keydown`](/de/docs/Web/API/Element/keydown_event) und `keyup` auch während der Eingabe mit einem {{Glossary("Input_method_editor", "Eingabemethoden-Editor")}} ausgelöst, um die browserübergreifende Kompatibilität für CJKT-Benutzer zu verbessern ([Firefox-Bug 354358](https://bugzil.la/354358)). Um alle `keyup`-Ereignisse zu ignorieren, die Teil dieser Eingabe sind, können Sie beispielsweise Folgendes tun:

```js
eventTarget.addEventListener("keyup", (event) => {
  if (event.isComposing) {
    return;
  }
  // do something
});
```

> [!NOTE]
> Anders als `keydown` haben `keyup`-Ereignisse keine besonderen [`keyCode`](/de/docs/Web/API/KeyboardEvent/keyCode)-Werte für IME-Ereignisse. Wie bei `keydown` kann `compositionstart` jedoch _nach_ `keyup` ausgelöst werden, wenn das erste Zeichen eingegeben wird, das den IME öffnet. Ebenso kann `compositionend` _vor_ `keyup` ausgelöst werden, wenn das letzte Zeichen eingegeben wird, das den IME schließt. In diesen Fällen ist `isComposing` `false`, obwohl das Ereignis Teil der Eingabe mit dem IME ist.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`input`](/de/docs/Web/API/Element/input_event)
- [`keydown`](/de/docs/Web/API/Element/keydown_event)
- [`keypress`](/de/docs/Web/API/Element/keypress_event)
