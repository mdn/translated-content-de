---
title: "HTMLElement: load-Ereignis"
short-title: load
slug: Web/API/HTMLElement/load_event
l10n:
  sourceCommit: e9e2ec643ac69c132f31427a0b586ab2cf83ed58
---

{{APIRef}}

Das **`load`**-Ereignis wird für Elemente ausgelöst, die eine Ressource enthalten, wenn die Ressource erfolgreich geladen wurde. Aktuell werden die folgenden HTML-Elemente unterstützt: {{HTMLElement("body")}}, {{HTMLElement("embed")}}, {{HTMLElement("iframe")}}, {{HTMLElement("img")}}, {{HTMLElement("link")}}, {{HTMLElement("object")}}, {{HTMLElement("script")}}, {{HTMLElement("style")}} und {{HTMLElement("track")}}.

> [!NOTE]
> Das `load`-Ereignis beim {{domxref("HTMLBodyElement#event_handlers", "HTMLBodyElement")}} ist eigentlich ein Alias für das {{domxref("Window/load_event", "window.onload")}}-Ereignis. Daher wird das `load`-Ereignis am `<body>`-Element nur ausgelöst, wenn alle Ressourcen des Dokuments geladen oder fehlerhaft sind. Aus Gründen der Klarheit wird empfohlen, den Ereignishandler direkt an das `window`-Objekt anzuhängen statt an `HTMLBodyElement`.

Dieses Ereignis kann nicht abgebrochen werden und wird nicht weitergeleitet.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie {{domxref("EventTarget.addEventListener", "addEventListener()")}} oder setzen Sie eine Ereignis-Handler-Eigenschaft.

```js
elt.addEventListener("load", (event) => { ... });
// oder
elt.onload = (event) => { ... };
```

## Ereignistyp

Ein generisches {{domxref("Event")}}.

## Beispiele

Dieses Beispiel gibt eine Meldung auf dem Bildschirm aus, wenn das {{HtmlElement("img")}}-Element seine Ressource erfolgreich lädt.

### HTML

```html
<img id="image" src="favicon144.png" alt="MDN logo" width="72" />
<div><button onclick="reload()">Reload</button></div>
```

### JavaScript

```js
const image = document.getElementById("image");
image.onload = () => {
  document.body.appendChild(document.createElement("div")).textContent =
    "loaded!";
};

function reload() {
  image.src = "favicon144.png";
}
```

### Ergebnis

{{EmbedLiveSample("Example", "100%", "200")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Verwandte Ereignisse

  - Window: {{domxref("Window/load_event", "load")}}-Ereignis
  - Window: {{domxref("Window/error_event", "error")}}-Ereignis
