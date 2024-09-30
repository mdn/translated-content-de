---
title: "HTMLElement: load Ereignis"
short-title: load
slug: Web/API/HTMLElement/load_event
l10n:
  sourceCommit: e9e2ec643ac69c132f31427a0b586ab2cf83ed58
---

{{APIRef}}

Das **`load`** Ereignis wird für Elemente ausgelöst, die eine Ressource enthalten, wenn die Ressource erfolgreich geladen wurde. Zu den derzeit unterstützten HTML-Elementen gehören: {{HTMLElement("body")}}, {{HTMLElement("embed")}}, {{HTMLElement("iframe")}}, {{HTMLElement("img")}}, {{HTMLElement("link")}}, {{HTMLElement("object")}}, {{HTMLElement("script")}}, {{HTMLElement("style")}} und {{HTMLElement("track")}}.

> [!NOTE]
> Das `load` Ereignis auf dem [`HTMLBodyElement`](/de/docs/Web/API/HTMLBodyElement#event_handlers) ist tatsächlich ein Alias für das [`window.onload`](/de/docs/Web/API/Window/load_event) Ereignis. Daher wird das `load` Ereignis am `<body>` Element nur ausgelöst, wenn alle Ressourcen des Dokuments geladen oder fehlgeschlagen sind. Aus Klarheitsgründen wird empfohlen, den Ereignishandler direkt an das `window` Objekt anzuhängen, anstatt an `HTMLBodyElement`.

Dieses Ereignis kann nicht abgebrochen werden und propagiert nicht.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignis-Handler-Eigenschaft.

```js
elt.addEventListener("load", (event) => { ... });
// or
elt.onload = (event) => { ... };
```

## Ereignistyp

Ein generisches [`Event`](/de/docs/Web/API/Event).

## Beispiele

Dieses Beispiel gibt eine Meldung auf dem Bildschirm aus, wenn das {{HtmlElement("img")}} Element seine Ressource erfolgreich lädt.

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

  - Window: [`load`](/de/docs/Web/API/Window/load_event) Ereignis
  - Window: [`error`](/de/docs/Web/API/Window/error_event) Ereignis
