---
title: "HTMLElement: load-Ereignis"
short-title: load
slug: Web/API/HTMLElement/load_event
l10n:
  sourceCommit: cd2020d95f4b278f3d462aaf88c5ff953e791908
---

{{APIRef}}

Das **`load`**-Ereignis tritt bei Elementen auf, die eine Ressource enthalten, wenn die Ressource erfolgreich geladen wurde. Derzeit umfasst die Liste der unterstützten HTML-Elemente: {{HTMLElement("body")}}, {{HTMLElement("embed")}}, {{HTMLElement("iframe")}}, {{HTMLElement("img")}}, {{HTMLElement("link")}}, {{HTMLElement("object")}}, {{HTMLElement("script")}}, {{HTMLElement("style")}} und {{HTMLElement("track")}}.

> [!NOTE]
> Das `load`-Ereignis auf [`HTMLBodyElement`](/de/docs/Web/API/HTMLBodyElement#event_handlers) ist eigentlich ein Alias für das [`window.onload`](/de/docs/Web/API/Window/load_event) Ereignis. Daher wird das `load`-Ereignis nur auf dem `<body>`-Element ausgelöst, wenn alle Ressourcen des Dokuments geladen oder fehlgeschlagen sind. Aus Gründen der Klarheit wird jedoch empfohlen, den Ereignishandler direkt an das `window`-Objekt anzuhängen, anstatt an `HTMLBodyElement`.

Dieses Ereignis ist nicht stornierbar und löst keine Bubbling aus.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener), oder setzen Sie eine Ereignishandler-Eigenschaft.

```js-nolint
addEventListener("load", (event) => { })

onload = (event) => { }
```

## Ereignistyp

Ein generisches [`Event`](/de/docs/Web/API/Event).

## Beispiele

Dieses Beispiel gibt eine Meldung auf dem Bildschirm aus, wenn das {{HtmlElement("img")}}-Element seine Ressource erfolgreich lädt.

### HTML

```html
<img
  id="image"
  src="/shared-assets/images/examples/favicon144.png"
  alt="MDN logo"
  width="72" />
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

  - Window: [`load`](/de/docs/Web/API/Window/load_event) Ereignis
  - Window: [`error`](/de/docs/Web/API/Window/error_event) Ereignis
