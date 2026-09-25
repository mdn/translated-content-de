---
title: "HTMLElement: load-Ereignis"
short-title: load
slug: Web/API/HTMLElement/load_event
l10n:
  sourceCommit: d227f4ac374be9efd0d9e502c9ffdb050253eb43
---

{{APIRef("HTML DOM")}}

Das Ereignis **`load`** wird für Elemente ausgelöst, die eine Ressource enthalten, sobald die Ressource erfolgreich geladen wurde. Derzeit unterstützen folgende HTML-Elemente dieses Ereignis: {{HTMLElement("embed")}}, {{HTMLElement("iframe")}}, {{HTMLElement("img")}}, {{HTMLElement("link")}}, {{HTMLElement("object")}}, {{HTMLElement("script")}}, {{HTMLElement("style")}} und {{HTMLElement("track")}}.

> [!NOTE]
> Das Ereignis `load` auf [`HTMLBodyElement`](/de/docs/Web/API/HTMLBodyElement#event_handlers) ist tatsächlich ein Alias für das Ereignis [`window.onload`](/de/docs/Web/API/Window/load_event). Daher wird das Ereignis `load` auf dem Element `<body>` erst ausgelöst, wenn alle Ressourcen des Dokuments geladen wurden oder beim Laden ein Fehler aufgetreten ist. Der Klarheit halber wird jedoch empfohlen, den Event-Handler direkt am Objekt `window` statt an `HTMLBodyElement` zu registrieren.

Dieses Ereignis kann nicht abgebrochen werden und breitet sich nicht nach oben aus.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder legen Sie eine Event-Handler-Eigenschaft fest.

```js-nolint
addEventListener("load", (event) => { })

onload = (event) => { }
```

## Ereignistyp

Ein generisches [`Event`](/de/docs/Web/API/Event).

## Hinweise zur Verwendung

### Umgang mit bereits geladenen Ressourcen

Eine Ressource kann vollständig geladen sein, bevor Ihr Skript einen Listener für das Ereignis `load` registriert. In diesem Fall empfängt der Listener das bereits ausgelöste Ereignis nicht.

Beispielsweise kann ein Bild im HTML geladen werden, während der Browser den Rest des Dokuments noch empfängt und parst – bevor er ein nachfolgendes Skript erreicht, das den Listener registriert. Der Listener kann auch zu spät registriert werden, wenn das Skript asynchron oder verzögert geladen wird oder wenn es vor der Registrierung des Listeners auf [`DOMContentLoaded`](/de/docs/Web/API/Document/DOMContentLoaded_event) wartet. Bei serverseitig gerendertem HTML mit Frameworks wie React oder Vue kann dasselbe Problem auftreten, da in JSX oder Templates geschriebene Event-Handler in JavaScript-Aufrufe und nicht in HTML-Event-Handler-Attribute kompiliert werden.

Es gibt mehrere Möglichkeiten, sicherzustellen, dass der Event-Handler möglichst früh registriert wird, bevor die Ressource geladen wird. Beispielsweise können Sie ein [HTML-Event-Handler-Attribut](/de/docs/Web/HTML/Reference/Attributes#event_handler_attributes) verwenden, sofern Sie dessen unerwünschte Eigenschaften in Kauf nehmen. Alternativ können Sie das gesamte Element dynamisch in JavaScript erstellen und sicherstellen, dass der Event-Listener registriert ist, bevor Sie den Ladevorgang starten (bei Bildern etwa durch Zuweisen eines Werts an `src`).

Sie können auch beim Registrieren des Event-Handlers prüfen, ob die Ressource bereits geladen wurde, und den Handler in diesem Fall sofort aufrufen. Bei einem Bild können Sie nach der Registrierung des Listeners dessen Eigenschaften [`complete`](/de/docs/Web/API/HTMLImageElement/complete) und [`naturalWidth`](/de/docs/Web/API/HTMLImageElement/naturalWidth) prüfen. `complete` zeigt an, dass die Anfrage abgeschlossen ist; `naturalWidth > 0` stellt sicher, dass tatsächlich ein Bild geladen wurde.

```js
const image = document.getElementById("image");
let handled = false;

function handleLoaded() {
  if (handled) return;
  handled = true;
  // Use the loaded image here.
}

image.addEventListener("load", handleLoaded, { once: true });

if (image.complete && image.naturalWidth > 0) {
  handleLoaded();
}
```

## Beispiele

Dieses Beispiel gibt eine Meldung auf dem Bildschirm aus, sobald das Element {{HtmlElement("img")}} seine Ressource erfolgreich geladen hat.

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

Das Element `<img>` im Beispiel enthält im Markup ein Attribut `src`. Daher kann das Bild bereits geladen sein, bevor der Listener für das Ereignis `load` registriert wird. Ein Klick auf „reload“ löst den Event-Listener garantiert aus.

{{EmbedLiveSample("Example", "100%", "200")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Verwandte Ereignisse
  - Window: Ereignis [`load`](/de/docs/Web/API/Window/load_event)
  - Window: Ereignis [`error`](/de/docs/Web/API/Window/error_event)
