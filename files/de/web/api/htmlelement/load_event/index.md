---
title: "HTMLElement: load-Ereignis"
short-title: load
slug: Web/API/HTMLElement/load_event
l10n:
  sourceCommit: e9e2ec643ac69c132f31427a0b586ab2cf83ed58
---

{{APIRef}}

Das **`load`**-Ereignis wird für Elemente ausgelöst, die eine Ressource enthalten, sobald die Ressource erfolgreich geladen wurde. Derzeit umfasst die Liste der unterstützten HTML-Elemente: {{HTMLElement("body")}}, {{HTMLElement("embed")}}, {{HTMLElement("iframe")}}, {{HTMLElement("img")}}, {{HTMLElement("link")}}, {{HTMLElement("object")}}, {{HTMLElement("script")}}, {{HTMLElement("style")}} und {{HTMLElement("track")}}.

> [!NOTE]
> Das `load`-Ereignis auf [`HTMLBodyElement`](/de/docs/Web/API/HTMLBodyElement#event_handlers) ist eigentlich ein Alias für das [`window.onload`](/de/docs/Web/API/Window/load_event)-Ereignis. Daher wird das `load`-Ereignis auf dem `<body>`-Element erst ausgelöst, wenn alle Ressourcen des Dokuments geladen oder fehlerhaft sind. Aus Gründen der Klarheit wird jedoch empfohlen, dass der Ereignishandler direkt an das `window`-Objekt angehängt wird und nicht an `HTMLBodyElement`.

Dieses Ereignis ist nicht abbrechbar und wird nicht weitergereicht.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignishandlereigenschaft.

```js
elt.addEventListener("load", (event) => { ... });
// or
elt.onload = (event) => { ... };
```

## Ereignistyp

Ein generisches [`Event`](/de/docs/Web/API/Event).

## Beispiele

Dieses Beispiel gibt eine Meldung auf dem Bildschirm aus, wann immer das {{HtmlElement("img")}}-Element seine Ressource erfolgreich lädt.

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

  - Window: [`load`](/de/docs/Web/API/Window/load_event)-Ereignis
  - Window: [`error`](/de/docs/Web/API/Window/error_event)-Ereignis
