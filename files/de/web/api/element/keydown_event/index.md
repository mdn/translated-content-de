---
title: "Element: keydown-Ereignis"
short-title: keydown
slug: Web/API/Element/keydown_event
l10n:
  sourceCommit: 195b87dbb0e63aab27700b606fc96c4cd7982f64
---

{{APIRef("UI Events")}}

Das **`keydown`**-Ereignis wird ausgelöst, wenn eine Taste gedrückt wird.

Anders als das veraltete [`keypress`](/de/docs/Web/API/Element/keypress_event)-Ereignis wird das `keydown`-Ereignis für alle Tasten ausgelöst, unabhängig davon, ob sie ein Zeichen erzeugen.

Die Ereignisse `keydown` und [`keyup`](/de/docs/Web/API/Element/keyup_event) liefern einen Code, der angibt, welche Taste gedrückt wurde. `keypress` gibt dagegen an, welches Zeichen eingegeben wurde. Beispielsweise wird ein kleines „a“ von `keydown` und `keyup` als 65 gemeldet, von `keypress` jedoch als 97. Ein großes „A“ wird von allen Ereignissen als 65 gemeldet.

Das Ereignisziel eines Tastaturereignisses ist das Element, das aktuell den Fokus hat und die Tastatureingabe verarbeitet. Dazu gehören {{HTMLElement("input")}}, {{HTMLElement("textarea")}}, alle Elemente, die [`contentEditable`](/de/docs/Web/HTML/Reference/Global_attributes/contenteditable) sind, sowie andere Elemente, mit denen über die Tastatur interagiert werden kann, etwa {{HTMLElement("a")}}, {{HTMLElement("button")}} und {{HTMLElement("summary")}}. Wenn kein geeignetes Element den Fokus hat, ist {{HTMLElement("body")}} oder das Wurzelelement das Ereignisziel. Das Ereignis [steigt im DOM-Baum auf](/de/docs/Learn_web_development/Core/Scripting/Event_bubbling). Es kann [`Document`](/de/docs/Web/API/Document) und [`Window`](/de/docs/Web/API/Window) erreichen.

Das Ereignisziel kann sich zwischen verschiedenen Tastaturereignissen ändern. Wenn beispielsweise die <kbd>Tab</kbd>-Taste gedrückt wird, unterscheidet sich das Ziel von `keydown` vom Ziel von `keyup`, weil sich der Fokus geändert hat.

## Syntax

Verwenden Sie den Ereignisnamen in [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener):

```js-nolint
addEventListener("keydown", (event) => { })
```

Alternativ können Sie ihn der [Event-Handler-Eigenschaft](/de/docs/Web/API/Document_Object_Model/Events#using_onevent_properties) der Schnittstelle zuweisen:

```js-nolint
onkeydown = (event) => { }
```

## Ereignistyp

Ein [`KeyboardEvent`](/de/docs/Web/API/KeyboardEvent). Erbt von [`UIEvent`](/de/docs/Web/API/UIEvent) und [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("KeyboardEvent")}}

## Beispiele

### Beispiel für keydown mit addEventListener

Dieses Beispiel protokolliert den Wert von [`KeyboardEvent.code`](/de/docs/Web/API/KeyboardEvent/code), sobald Sie innerhalb des {{HtmlElement("input")}}-Elements eine Taste drücken.

```html
<input placeholder="Click here, then press down a key." size="40" />
<p id="log"></p>
```

```js
const input = document.querySelector("input");
const log = document.getElementById("log");

input.addEventListener("keydown", logKey);

function logKey(e) {
  log.textContent += ` ${e.code}`;
}
```

{{EmbedLiveSample("addEventListener_keydown_example")}}

### keydown-Ereignisse mit IME

Seit Firefox 65 werden die Ereignisse `keydown` und [`keyup`](/de/docs/Web/API/Element/keyup_event) auch während der Eingabe mit einem {{Glossary("Input_method_editor", "Eingabemethodeneditor")}} ausgelöst, um die browserübergreifende Kompatibilität für CJKT-Benutzer zu verbessern ([Firefox-Bug 354358](https://bugzil.la/354358)). Um alle `keydown`-Ereignisse zu ignorieren, die Teil dieser Eingabe sind, können Sie wie folgt vorgehen (229 ist ein spezieller Wert für `keyCode` bei einem Ereignis, das von einem IME verarbeitet wurde):

```js
eventTarget.addEventListener("keydown", (event) => {
  if (event.isComposing || event.keyCode === 229) {
    return;
  }
  // do something
});
```

> [!NOTE]
> `compositionstart` kann beim Eingeben des ersten Zeichens, das den IME öffnet, _nach_ `keydown` ausgelöst werden. Ebenso kann `compositionend` beim Eingeben des letzten Zeichens, das den IME schließt, _vor_ `keydown` ausgelöst werden. In diesen Fällen ist `isComposing` false, obwohl das Ereignis Teil der Eingabe mit dem IME ist. [`KeyboardEvent.keyCode`](/de/docs/Web/API/KeyboardEvent/keyCode) hat in diesen Fällen jedoch weiterhin den Wert `229`. Daher ist es ratsam, zusätzlich `keyCode` zu prüfen, obwohl es veraltet ist.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`input`](/de/docs/Web/API/Element/input_event)
- [`keypress`](/de/docs/Web/API/Element/keypress_event)
- [`keyup`](/de/docs/Web/API/Element/keyup_event)
