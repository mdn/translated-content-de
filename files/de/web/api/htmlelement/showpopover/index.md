---
title: "HTMLElement: showPopover() Methode"
short-title: showPopover()
slug: Web/API/HTMLElement/showPopover
l10n:
  sourceCommit: 16f4b01129630178d791e66daacadd7474f2508b
---

{{APIRef("Popover API")}}

Die **`showPopover()`** Methode der {{domxref("HTMLElement")}} Schnittstelle zeigt ein {{domxref("Popover_API", "Popover", "", "nocode")}} Element (d.h. eines, das ein gültiges [`popover`](/de/docs/Web/HTML/Global_attributes/popover) Attribut hat) durch Hinzufügen zur {{glossary("Top-Ebene")}} an.

Wenn `showPopover()` bei einem Element mit dem derzeit verborgenen [`popover`](/de/docs/Web/HTML/Global_attributes/popover) Attribut aufgerufen wird, wird ein {{domxref("HTMLElement/beforetoggle_event", "beforetoggle")}} Ereignis ausgelöst, gefolgt vom Anzeigen des Popovers, und dann das {{domxref("HTMLElement/toggle_event", "toggle")}} Ereignis ausgelöst. Wenn das Element bereits angezeigt wird, wird ein Fehler ausgelöst.

## Syntax

```js-nolint
showPopover()
```

### Parameter

Keine.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

- `InvalidStateError` {{domxref("DOMException")}}
  - : Wird ausgelöst, wenn das Popover bereits angezeigt wird.

## Beispiele

Das folgende Beispiel bietet Funktionalität, um ein Popover durch Drücken einer bestimmten Taste auf der Tastatur anzuzeigen.

Zuerst ein wenig HTML:

```html
<div id="mypopover" popover>
  <h2>Hilfe!</h2>

  <p>Sie können die folgenden Befehle verwenden, um die App zu steuern</p>

  <ul>
    <li>Drücken Sie <ins>C</ins>, um Käse zu bestellen</li>
    <li>Drücken Sie <ins>T</ins>, um Tofu zu bestellen</li>
    <li>Drücken Sie <ins>B</ins>, um Speck zu bestellen</li>
    <hr />
    <li>Sagen Sie "Service", um den Roboterkellner zu rufen, um Ihre Bestellung aufzunehmen</li>
    <li>Sagen Sie "Escape", um den Schleudersitz zu aktivieren</li>
  </ul>
</div>
```

Und nun das JavaScript, um die Funktionalität anzuschließen:

```js
const popover = document.getElementById("mypopover");

document.addEventListener("keydown", (event) => {
  if (event.key === "h") {
    popover.showPopover();
  }
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Popover API](/de/docs/Web/API/Popover_API)
