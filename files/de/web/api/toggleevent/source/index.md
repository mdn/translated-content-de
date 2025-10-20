---
title: "ToggleEvent: source-Eigenschaft"
short-title: source
slug: Web/API/ToggleEvent/source
l10n:
  sourceCommit: bb55d1b729e6d8fd2eea3f1f9b402f6788a6d1d9
---

{{APIRef("Popover API")}}

Die **`source`** schreibgeschützte Eigenschaft der [`ToggleEvent`](/de/docs/Web/API/ToggleEvent)-Schnittstelle ist eine [`Element`](/de/docs/Web/API/Element)-Objektinstanz, die das HTML-Popover-Steuerelement darstellt, das das Umschalten ausgelöst hat.

## Wert

Eine [`Element`](/de/docs/Web/API/Element)-Objektinstanz oder `null`, wenn das Popover nicht durch ein Steuerelement aktiviert wurde.

## Beschreibung

Ein {{htmlelement("button")}}-Element kann als Popover-Steuerelement festgelegt werden, indem die [`id`](/de/docs/Web/HTML/Reference/Global_attributes/id) des Popover-Elements in seinem [`commandfor`](/de/docs/Web/HTML/Reference/Elements/button#commandfor)- oder [`popovertarget`](/de/docs/Web/HTML/Reference/Elements/button#popovertarget)-Attribut angegeben wird (wenn die Schaltfläche mit `<input type="button">` spezifiziert wird, funktioniert nur das `popovertarget`-Attribut).

Wenn das [`toggle`](/de/docs/Web/API/HTMLElement/toggle_event)-Ereignis auf dem Popover ausgelöst wird, enthält die `source`-Eigenschaft des `ToggleEvent`-Ereignisobjekts einen Verweis auf die Popover-Steuerschaltfläche, die das Umschalten ausgelöst hat. Dies ist nützlich, um bei der Reaktion auf das `toggle`-Ereignis je nach auslösendem Steuerelement unterschiedlichen Code auszuführen (siehe ein [Beispiel](#basic_source_usage)).

Bevor die `source`-Eigenschaft verfügbar war, mussten Entwickler die Funktionalität des `command`-Attributs von Grund auf neu implementieren, um eine ähnliche Kennung bereitzustellen, und diese dann mit JavaScript überwachen, um zu wissen, welche Schaltfläche das Popover aufgerufen hat. Zusätzlich bestand die Gefahr, dass solche JavaScript-Aufgaben das Anzeigen oder Verbergen des Popovers blockierten. Das `toggle`-Ereignis ist asynchron und vermeidet daher dieses Problem.

Wenn das Popover nicht durch eine Steuerschaltfläche aktiviert wurde — zum Beispiel, wenn das Popover durch eine JavaScript-Methode wie [`HTMLElement.togglePopover()`](/de/docs/Web/API/HTMLElement/togglePopover) gesteuert wird — gibt die `source`-Eigenschaft `null` zurück.

## Beispiele

### Grundlegende Verwendung der `source`-Eigenschaft

Dieses Demo zeigt, wie man die `source`-Eigenschaft verwendet, um eine unterschiedliche Aktion je nach verwendeter Steuerschaltfläche zum Schließen eines Popovers auszuführen.

#### HTML

Unser Markup enthält ein `<button>`, ein {{htmlelement("p")}} und ein {{htmlelement("div")}}-Element. Das `<div>` ist als [`auto` Popover](/de/docs/Web/API/Popover_API/Using#auto_state_and_light_dismiss) definiert, und die Schaltfläche ist als Steuerung zum Anzeigen des Popovers mithilfe der [`commandfor`](/de/docs/Web/HTML/Reference/Elements/button#commandfor)- und [`command`](/de/docs/Web/HTML/Reference/Elements/button#command)-Attribute festgelegt.

Das Popover enthält eine Überschrift, die den Benutzer fragt, ob er einen Cookie möchte, und zwei Schaltflächen, mit denen er eine Antwort "ja" oder "nein" auswählen kann. Jede dieser Schaltflächen ist als Steuerung zum Verbergen des Popovers definiert.

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

In unserem Skript beginnen wir mit dem Erfassen von Referenzen zu den "ja" und "nein" Schaltflächen, dem Popover und dem Ausgabe-`<p>`.

```js live-sample___toggleevent-source
const yesBtn = document.getElementById("yes");
const noBtn = document.getElementById("no");
const popover = document.getElementById("popover");
const output = document.getElementById("output");
```

Wir fügen dann eine Funktionsprüfung hinzu, um zu erkennen, ob das HTML-`command`-Attribut unterstützt wird und ob die `source`-Eigenschaft unterstützt wird. Wenn eines der beiden nicht unterstützt wird, geben wir eine entsprechende Nachricht an das Ausgabe-`<p>` aus. Wenn beide unterstützt werden, fügen wir einen [`toggle`](/de/docs/Web/API/HTMLElement/toggle_event)-Ereignislistener zum Popover hinzu. Bei Auslösung wird überprüft, ob die "ja"- oder "nein"-Schaltfläche zum Umschalten (Verbergen) des Popovers verwendet wurde; in jedem Fall wird eine entsprechende Nachricht im Ausgabe-`<p>` ausgegeben.

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
