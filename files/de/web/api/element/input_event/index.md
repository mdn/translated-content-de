---
title: "Element: input event"
short-title: input
slug: Web/API/Element/input_event
l10n:
  sourceCommit: bd2f9b713de3aad1afd4a8531a5605a16accf091
---

{{APIRef("UI Events")}}

Das **`input`**-Ereignis wird ausgelöst, wenn sich der `value` eines {{HTMLElement("input")}}-, {{HTMLElement("select")}}- oder {{HTMLElement("textarea")}}-Elements als direkte Folge einer Benutzeraktion (z. B. durch Eingabe in ein Textfeld oder Aktivieren eines Kontrollkästchens) geändert hat.

Das Ereignis gilt auch für Elemente mit aktiviertem [`contenteditable`](/de/docs/Web/API/HTMLElement/contentEditable) sowie für jedes Element, wenn [`designMode`](/de/docs/Web/API/Document/designMode) aktiviert ist. Bei `contenteditable` und `designMode` ist das Ereignisziel der _editing host_. Wenn diese Eigenschaften auf mehrere Elemente zutreffen, ist der Editing Host das nächstgelegene Vorgängerelement, dessen übergeordnetes Element nicht bearbeitbar ist.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener), oder setzen Sie eine Ereignishandler-Eigenschaft.

```js-nolint
addEventListener("input", (event) => { })

oninput = (event) => { }
```

## Ereignistyp

Ein [`InputEvent`](/de/docs/Web/API/InputEvent). Erbt von [`UIEvent`](/de/docs/Web/API/UIEvent).

{{InheritanceDiagram("InputEvent")}}

> [!NOTE]
> Für {{htmlelement("textarea")}}- und {{htmlelement("input")}}-Elemente, die Texteingaben akzeptieren (`type=text`, `type=tel` usw.), ist die Schnittstelle [`InputEvent`](/de/docs/Web/API/InputEvent); für andere ist die Schnittstelle [`Event`](/de/docs/Web/API/Event).

## Beschreibung

Bei `<input>`-Elementen mit `type=checkbox` oder `type=radio` sollte das `input`-Ereignis ausgelöst werden, wenn ein Benutzer das Steuerelement umschaltet. Dies war jedoch historisch nicht immer der Fall. Prüfen Sie die Kompatibilität oder verwenden Sie stattdessen das [`change`](/de/docs/Web/API/HTMLElement/change_event)-Ereignis für Elemente dieser Typen.

Bei Text-Steuerelementen wird das `input`-Ereignis ausgelöst, während der Benutzer den Wert bearbeitet. Dies unterscheidet sich vom [`change`](/de/docs/Web/API/HTMLElement/change_event)-Ereignis, das nur ausgelöst wird, wenn der Wert übernommen wird, etwa wenn das Steuerelement den Fokus verliert.

Bei `<select>`-Elementen, die als Listenfelder angezeigt werden (z. B. `<select size="3">`), kann die Auswahl von Optionen mit der Maus den `value` ändern, während die Maustaste noch gedrückt gehalten wird. Die Ereignisse `input` und `change` werden aufgeschoben, bis die Maustaste losgelassen wird, anstatt bei jeder Zwischenauswahl ausgelöst zu werden. Wenn der Benutzer vor dem Loslassen der Taste zu einer anderen Option und wieder zurück zur ursprünglichen Auswahl zieht, werden die Auswahländerungen während des Ziehens möglicherweise gemeldet oder auch nicht; das Verhalten unterscheidet sich zwischen Browsern.

Im Allgemeinen wird erwartet, dass nur vom Benutzer ausgelöste Wertänderungen, einschließlich Autofill, `input` auslösen. Einige Änderungen am Wert eines Steuerelements lösen das `input`-Ereignis überhaupt nicht aus, zum Beispiel:

- Programmgesteuertes Setzen des Werts, etwa durch Zuweisen zu `value` eines Elements oder zu `selectedIndex` eines `<select>`-Elements.
- Ändern der Kindelemente eines Steuerelements auf eine Weise, die seinen Wert ändert, etwa durch Entfernen der ausgewählten `<option>` aus einem `<select>`-Element.
- Ändern der Attribute eines Steuerelements auf eine Weise, die dazu führt, dass der Browser seinen Wert anpasst, etwa durch Ändern von `min` oder `max` einer Bereichseingabe, sodass ihr aktueller Wert außerhalb der neuen Grenzen liegt.
- Zurücksetzen eines Formulars, wodurch nur ein [`reset`](/de/docs/Web/API/HTMLFormElement/reset_event)-Ereignis ausgelöst wird.
- Wiederherstellen gespeicherter Formularwerte durch den Browser während der Verlauf-Navigation. Welche Steuerelemente ihre Werte wiederhergestellt bekommen, kann sich zwischen Browsern unterscheiden.
- Chrome löscht nicht bearbeitete, automatisch ausgefüllte Benutzernamen und Passwörter, wenn die Anmeldedaten nicht mehr verfügbar sind, etwa wenn sich der Benutzer nach dem automatischen Ausfüllen bei Chrome abgemeldet hat.

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
