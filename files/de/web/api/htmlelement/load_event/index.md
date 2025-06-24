---
title: "HTMLElement: load-Ereignis"
short-title: load
slug: Web/API/HTMLElement/load_event
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{APIRef}}

Das **`load`**-Ereignis wird für Elemente ausgelöst, die eine Ressource enthalten, wenn die Ressource erfolgreich geladen wurde. Derzeit umfasst die Liste der unterstützten HTML-Elemente: {{HTMLElement("body")}}, {{HTMLElement("embed")}}, {{HTMLElement("iframe")}}, {{HTMLElement("img")}}, {{HTMLElement("link")}}, {{HTMLElement("object")}}, {{HTMLElement("script")}}, {{HTMLElement("style")}} und {{HTMLElement("track")}}.

> [!NOTE]
> Das `load`-Ereignis auf [`HTMLBodyElement`](/de/docs/Web/API/HTMLBodyElement#event_handlers) ist tatsächlich ein Alias für das [`window.onload`](/de/docs/Web/API/Window/load_event)-Ereignis. Daher wird das `load`-Ereignis nur auf dem `<body>`-Element ausgelöst, wenn alle Ressourcen des Dokuments geladen oder fehlgeschlagen sind. Zur Klarheit wird jedoch empfohlen, den Ereignishandler direkt an das `window`-Objekt zu binden, anstatt an `HTMLBodyElement`.

Dieses Ereignis ist nicht abbruchfähig und löst keine Ereignisblase aus.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignishandler-Eigenschaft.

```js-nolint
addEventListener("load", (event) => { })

onload = (event) => { }
```

## Ereignistyp

Ein generisches [`Event`](/de/docs/Web/API/Event).

## Beispiele

Dieses Beispiel gibt auf dem Bildschirm aus, wann immer das {{HtmlElement("img")}}-Element seine Ressource erfolgreich lädt.

### HTML

```html
<img
  id="image"
  src="/shared-assets/images/examples/favicon144.png"
  alt="MDN logo"
  width="72" />
<div><button>Reload</button></div>
```

### JavaScript

```js
const image = document.getElementById("image");
image.onload = () => {
  document.body.appendChild(document.createElement("div")).textContent =
    "loaded!";
};

document.querySelector("button").addEventListener("click", reload);

function reload() {
  image.src = "/shared-assets/images/examples/favicon144.png";
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
  - Fenster: [`load`](/de/docs/Web/API/Window/load_event) Ereignis
  - Fenster: [`error`](/de/docs/Web/API/Window/error_event) Ereignis
