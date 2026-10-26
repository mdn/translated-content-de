---
title: "Element: input-Ereignis"
short-title: input
slug: Web/API/Element/input_event
l10n:
  sourceCommit: 195b87dbb0e63aab27700b606fc96c4cd7982f64
---

{{APIRef("UI Events")}}

Das **`input`**-Ereignis wird ausgelöst, wenn sich der `value` eines {{HTMLElement("input")}}-, {{HTMLElement("select")}}- oder {{HTMLElement("textarea")}}-Elements unmittelbar durch eine Benutzeraktion ändert, etwa durch die Eingabe in ein Textfeld oder das Aktivieren eines Kontrollkästchens.

Das Ereignis gilt auch für Elemente mit aktiviertem [`contenteditable`](/de/docs/Web/API/HTMLElement/contentEditable) und für jedes Element, wenn [`designMode`](/de/docs/Web/API/Document/designMode) aktiviert ist. Bei `contenteditable` und `designMode` ist das Ereignisziel der _Editing Host_. Wenn diese Eigenschaften für mehrere Elemente gelten, ist der Editing Host das nächstgelegene Vorfahrenelement, dessen übergeordnetes Element nicht bearbeitbar ist.

## Syntax

Verwenden Sie den Ereignisnamen in [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener):

```js-nolint
addEventListener("input", (event) => { })
```

Alternativ können Sie der [Ereignishandler-Eigenschaft](/de/docs/Web/API/Document_Object_Model/Events#using_onevent_properties) der Schnittstelle einen Wert zuweisen:

```js-nolint
oninput = (event) => { }
```

## Ereignistyp

Ein [`InputEvent`](/de/docs/Web/API/InputEvent). Erbt von [`UIEvent`](/de/docs/Web/API/UIEvent).

{{InheritanceDiagram("InputEvent")}}

> [!NOTE]
> Für {{htmlelement("textarea")}}- und {{htmlelement("input")}}-Elemente, die Texteingaben akzeptieren (`type=text`, `type=tel` usw.), ist die Schnittstelle [`InputEvent`](/de/docs/Web/API/InputEvent); für andere Elemente ist sie [`Event`](/de/docs/Web/API/Event).

## Beschreibung

Bei `<input>`-Elementen mit `type=checkbox` oder `type=radio` sollte das `input`-Ereignis jedes Mal ausgelöst werden, wenn ein Benutzer das Steuerelement umschaltet. In der Vergangenheit war dies jedoch nicht immer der Fall. Prüfen Sie die Kompatibilität oder verwenden Sie für Elemente dieser Typen stattdessen das [`change`](/de/docs/Web/API/HTMLElement/change_event)-Ereignis.

Bei Steuerelementen für Texteingaben wird das `input`-Ereignis ausgelöst, während der Benutzer den Wert bearbeitet. Anders verhält es sich beim [`change`](/de/docs/Web/API/HTMLElement/change_event)-Ereignis: Es wird erst ausgelöst, wenn der Wert übernommen wird, beispielsweise wenn das Steuerelement den Fokus verliert.

Bei `<select>`-Elementen, die als Listenfelder angezeigt werden (zum Beispiel `<select size="3">`), kann die Auswahl einer Option mit der Maus den `value` bereits ändern, während die Maustaste noch gedrückt ist. Die Ereignisse `input` und `change` werden jedoch erst beim Loslassen der Maustaste ausgelöst, nicht bei jeder zwischenzeitlichen Auswahl. Wenn der Benutzer vor dem Loslassen der Maustaste zu einer anderen Option und wieder zur ursprünglichen Auswahl zieht, werden die Auswahländerungen während dieser Bewegung möglicherweise gemeldet oder auch nicht; das Verhalten unterscheidet sich je nach Browser.

Im Allgemeinen wird erwartet, dass nur vom Benutzer ausgelöste Wertänderungen, einschließlich automatischem Ausfüllen, ein `input`-Ereignis auslösen. Manche Änderungen am Wert eines Steuerelements lösen überhaupt kein `input`-Ereignis aus, zum Beispiel:

- Das programmgesteuerte Setzen des Werts, etwa durch eine Zuweisung an `value` eines Elements oder an `selectedIndex` eines `<select>`-Elements.
- Das Ändern der Kindelemente eines Steuerelements auf eine Weise, die seinen Wert verändert, etwa durch das Entfernen des ausgewählten `<option>`-Elements aus einem `<select>`-Element.
- Das Ändern von Attributen eines Steuerelements, sodass der Browser dessen Wert anpasst, etwa durch eine Änderung von `min` oder `max` eines Range-Inputs, durch die sein aktueller Wert außerhalb der neuen Grenzen liegt.
- Das Zurücksetzen eines Formulars, wodurch nur ein [`reset`](/de/docs/Web/API/HTMLFormElement/reset_event)-Ereignis ausgelöst wird.
- Das Wiederherstellen gespeicherter Formularwerte durch den Browser bei der Navigation im Verlauf. Welche Steuerelemente ihre Werte zurückerhalten, kann sich je nach Browser unterscheiden.
- Das Löschen eines nicht bearbeiteten, automatisch ausgefüllten Benutzernamens und Passworts durch Chrome, wenn die Anmeldedaten nicht mehr verfügbar sind, beispielsweise weil sich der Benutzer nach dem automatischen Ausfüllen von Chrome abgemeldet hat.

## Beispiele

Dieses Beispiel protokolliert den Wert jedes Mal, wenn Sie den Wert des {{HtmlElement("input")}}-Elements ändern.

### HTML

```html
<input placeholder="Enter some text" name="name" />
<p id="values"></p>
```

### JavaScript

```js
const input = document.querySelector("input");
const log = document.getElementById("values");

input.addEventListener("input", updateValue);

function updateValue(e) {
  log.textContent = e.target.value;
}
```

### Ergebnis

{{EmbedLiveSample("Examples")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Verwandte Ereignisse
  - [`beforeinput`](/de/docs/Web/API/Element/beforeinput_event)
  - [`change`](/de/docs/Web/API/HTMLElement/change_event)
  - [`invalid`](/de/docs/Web/API/HTMLInputElement/invalid_event)
