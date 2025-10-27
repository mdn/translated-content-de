---
title: "ToggleEvent: source Eigenschaft"
short-title: source
slug: Web/API/ToggleEvent/source
l10n:
  sourceCommit: 2597731017bf54bd583bd533fce1a5fab064b597
---

{{APIRef("Popover API")}}

Die **`source`** schreibgeschützte Eigenschaft des [`ToggleEvent`](/de/docs/Web/API/ToggleEvent) Interfaces ist eine [`Element`](/de/docs/Web/API/Element)-Objektinstanz, die das HTML-Popover-Kontrollelement repräsentiert, das das Umschalten initiiert hat.

## Wert

Eine [`Element`](/de/docs/Web/API/Element)-Objektinstanz oder `null`, wenn das Popover nicht durch ein Kontrollelement aktiviert wurde.

## Beschreibung

Ein {{htmlelement("button")}}-Element kann als Popover-Kontrolle eingerichtet werden, indem die [`id`](/de/docs/Web/HTML/Reference/Global_attributes/id) des Popover-Elements in seinem [`commandfor`](/de/docs/Web/HTML/Reference/Elements/button#commandfor)- oder [`popovertarget`](/de/docs/Web/HTML/Reference/Elements/button#popovertarget)-Attribut angegeben wird (wenn der Button als `<input type="button">` spezifiziert ist, funktioniert nur das `popovertarget`-Attribut).

Wenn das [`toggle`](/de/docs/Web/API/HTMLElement/toggle_event)-Ereignis auf dem Popover ausgelöst wird, enthält die `ToggleEvent`-Ereignisobjekt-Eigenschaft `source` dann einen Verweis auf den Popover-Kontrollbutton, der das Umschalten initiiert hat. Dies ist nützlich, um je nach dem, welches Popover-Kontrollelement es ausgelöst hat, unterschiedlichen Code als Reaktion auf das `toggle`-Ereignis auszuführen (siehe ein [Beispiel](#basic_source_usage)).

Bevor die `source`-Eigenschaft existierte, musste die `command`-Attributfunktionalität manuell in JavaScript neu implementiert werden, um eine ähnliche Identifikation bereitzustellen, und dann musste sie überwacht werden, um zu erkennen, welcher Button das Popover ausgelöst hat. Außerdem bestand die Gefahr, dass solche JavaScript-Aufgaben das Anzeigen oder Ausblenden des Popovers blockieren. Das `toggle`-Ereignis ist asynchron und vermeidet daher dieses Problem.

Wenn das Popover-Element nicht durch einen Kontrollbutton aktiviert wird — zum Beispiel, wenn es mithilfe einer JavaScript-Methode wie [`HTMLElement.togglePopover()`](/de/docs/Web/API/HTMLElement/togglePopover) gesteuert wird — dann ist die `source`-Eigenschaft `null`.

## Beispiele

### Grundlegende Verwendung von `source`

Diese Demo zeigt, wie man die `source`-Eigenschaft benutzt, um je nach dem Kontrollbutton, der das Popover-Element schließt, unterschiedliche Aktionen auszuführen.

#### HTML

Unser Markup enthält einen `<button>`, ein {{htmlelement("p")}}- und ein {{htmlelement("div")}}-Element. Das `<div>` ist als [`auto`-Popover](/de/docs/Web/API/Popover_API/Using#auto_state_and_light_dismiss) festgelegt, und der Button ist als Steuerung zum Anzeigen des Popovers mittels der Attribute [`commandfor`](/de/docs/Web/HTML/Reference/Elements/button#commandfor) und [`command`](/de/docs/Web/HTML/Reference/Elements/button#command) bestimmt. Das Popover enthält eine Überschrift mit der Frage, ob der Benutzer ein Cookie möchte, und zwei Buttons mit den Bezeichnungen **Ja** und **Nein**, die es dem Benutzer ermöglichen eine Antwort auszuwählen. Jeder dieser Buttons ist als Steuerung zum Ausblenden des Popovers festgelegt.

```html live-sample___toggleevent-source
<button commandfor="popover" command="show-popover">
  Select cookie preference
</button>
<p id="output"></p>
<div id="popover" popover="auto">
  <h3>Would you like a cookie?</h3>
  <button id="yes" commandfor="popover" command="hide-popover">Yes</button>
  <button id="no" commandfor="popover" command="hide-popover">No</button>
</div>
```

```css hidden live-sample___toggleevent-source
html {
  font-family: sans-serif;
}

[popover] {
  border: 1px solid grey;
  padding: 10px 20px;
  border-radius: 5px;
}

[popover] h3 {
  margin: 0 0 10px;
}
```

#### JavaScript

In unserem Skript beginnen wir damit, Referenzen zu den Buttons `"yes"` und `"no"`, dem Popover und dem Ausgabeelement `<p>` zu erfassen.

```js live-sample___toggleevent-source
const yesBtn = document.getElementById("yes");
const noBtn = document.getElementById("no");
const popover = document.getElementById("popover");
const output = document.getElementById("output");
```

Wir haben eine Funktionsprüfung für das HTML-`command`-Attribut und die `source`-Eigenschaft hinzugefügt. Wenn eines von beiden im Browser nicht unterstützt wird, drucken wir eine Nachricht im `<p>`-Element. Wenn beides unterstützt wird, fügen wir dem Popover-Element einen [`toggle`](/de/docs/Web/API/HTMLElement/toggle_event)-Ereignislistener hinzu. Wenn das Ereignis ausgelöst wird, prüft der Code, ob der `"yes"`- oder `"no"`-Button verwendet wurde, um das Popover-Element umzuschalten (auszublenden); in jedem Fall wird eine entsprechende Nachricht im Ausgabeelement `<p>` ausgegeben.

```js live-sample___toggleevent-source
if (yesBtn.command === undefined) {
  output.textContent = "Popover control command attribute not supported.";
} else {
  popover.addEventListener("toggle", (event) => {
    if (event.source === undefined) {
      output.textContent = "ToggleEvent.source not supported.";
    } else if (event.source === yesBtn) {
      output.textContent = "Cookie set!";
    } else if (event.source === noBtn) {
      output.textContent = "No cookie set.";
    }
  });
}
```

#### Ergebnis

{{embedlivesample("toggleevent-source", "100%", "100")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Popover API](/de/docs/Web/API/Popover_API)
