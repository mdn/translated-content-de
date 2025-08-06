---
title: "ToggleEvent: source-Eigenschaft"
short-title: source
slug: Web/API/ToggleEvent/source
l10n:
  sourceCommit: 49ff45bcbfa9a0ebe439338b0a88ea1549386e62
---

{{APIRef("Popover API")}}{{SeeCompatTable}}

Die schreibgeschützte Eigenschaft **`source`** der [`ToggleEvent`](/de/docs/Web/API/ToggleEvent)-Schnittstelle ist eine [`Element`](/de/docs/Web/API/Element)-Objektinstanz, die das HTML-Popover-Steuerelement darstellt, das das Umschalten initiiert hat.

## Wert

Eine [`Element`](/de/docs/Web/API/Element)-Objektinstanz oder `null`, wenn das Popover nicht durch ein Steuerelement aktiviert wurde.

## Beschreibung

Ein {{htmlelement("button")}}-Element kann als Popover-Steuerung festgelegt werden, indem die [`id`](/de/docs/Web/HTML/Reference/Global_attributes/id) des Popover-Elements im [`commandfor`](/de/docs/Web/HTML/Reference/Elements/button#commandfor)- oder [`popovertarget`](/de/docs/Web/HTML/Reference/Elements/button#popovertarget)-Attribut angegeben wird (wenn der Button mit `<input type="button">` spezifiziert wird, funktioniert nur das `popovertarget`-Attribut).

Wenn das [`toggle`](/de/docs/Web/API/HTMLElement/toggle_event)-Ereignis auf dem Popover ausgelöst wird, enthält die `source`-Eigenschaft des `ToggleEvent`-Ereignisobjekts eine Referenz auf den Popover-Steuerungsbutton, der das Umschalten initiiert hat. Dies ist nützlich, um unterschiedlichen Code als Reaktion auf das `toggle`-Ereignis auszuführen, abhängig davon, welches Steuerelement es initiiert hat (siehe ein [Beispiel](#basic_source_usage)).

Bevor die `source`-Eigenschaft verfügbar war, mussten Entwickler die Funktionalität des `command`-Attributs von Grund auf neu implementieren, um eine ähnliche Kennung bereitzustellen, und dann mit JavaScript überwachen, welcher Button das Popover aufgerufen hat. Zusätzlich bestand die Gefahr, dass solche JavaScript-Aufgaben das Anzeigen oder Verbergen des Popovers blockieren. Das `toggle`-Ereignis ist asynchron und vermeidet daher dieses Problem.

Wenn das Popover nicht durch einen Steuer-Button aktiviert wurde – zum Beispiel, wenn das Popover mithilfe einer JavaScript-Methode wie [`HTMLElement.togglePopover()`](/de/docs/Web/API/HTMLElement/togglePopover) gesteuert wird – gibt die `source`-Eigenschaft `null` zurück.

## Beispiele

### Grundlegende Nutzung der `source`-Eigenschaft

Diese Demo zeigt, wie die `source`-Eigenschaft verwendet wird, um je nach dem verwendeten Steuerschalter eine andere Aktion durchzuführen, um ein Popover zu schließen.

#### HTML

Unser Markup enthält ein `<button>`, ein {{htmlelement("p")}} und ein {{htmlelement("div")}}-Element. Das `<div>` ist als [`auto`-Popover](/de/docs/Web/API/Popover_API/Using#auto_state_and_light_dismiss) gekennzeichnet, und der Button ist mit den Attributen [`commandfor`](/de/docs/Web/HTML/Reference/Elements/button#commandfor) und [`command`](/de/docs/Web/HTML/Reference/Elements/button#command) als Steuerung für das Anzeigen des Popovers gekennzeichnet.

Das Popover enthält eine Überschrift, die den Benutzer fragt, ob er einen Keks möchte, und zwei Buttons, die ihm erlauben, "ja" oder "nein" auszuwählen. Jeder dieser Buttons ist als Steuerung zum Verbergen des Popovers festgelegt.

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

In unserem Skript beginnen wir damit, Referenzen auf die "ja" und "nein" Buttons, das Popover und das Ausgabeelement `<p>` zu erhalten.

```js live-sample___toggleevent-source
const yesBtn = document.getElementById("yes");
const noBtn = document.getElementById("no");
const popover = document.getElementById("popover");
const output = document.getElementById("output");
```

Dann fügen wir eine Funktionsüberprüfung hinzu, um zu erkennen, ob das HTML `command`-Attribut und die `source`-Eigenschaft unterstützt werden. Falls eines von beiden nicht unterstützt wird, geben wir eine entsprechende Nachricht im Ausgabeelement `<p>` aus. Falls beide unterstützt werden, fügen wir dem Popover einen [`toggle`](/de/docs/Web/API/HTMLElement/toggle_event)-Ereignislistener hinzu. Beim Auslösen wird überprüft, ob der "ja" oder "nein" Button verwendet wurde, um das Popover umzuschalten (zu verbergen); eine entsprechende Nachricht wird in jedem Fall im Ausgabeelement `<p>` ausgegeben.

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
