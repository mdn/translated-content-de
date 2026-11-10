---
title: "HTMLElement: load-Ereignis"
short-title: load
slug: Web/API/HTMLElement/load_event
l10n:
  sourceCommit: 7cabe7010a0ccfcf587ddac1571963eba102090d
---

{{APIRef("HTML DOM")}}

Das **`load`**-Ereignis wird für Elemente ausgelöst, die eine Ressource enthalten, sobald die Ressource erfolgreich geladen wurde. Derzeit wird es von folgenden HTML-Elementen unterstützt: {{HTMLElement("embed")}}, {{HTMLElement("iframe")}}, {{HTMLElement("img")}}, {{HTMLElement("link")}}, {{HTMLElement("object")}}, {{HTMLElement("script")}}, {{HTMLElement("style")}} und {{HTMLElement("track")}}.

> [!NOTE]
> Das `load`-Ereignis auf [`HTMLBodyElement`](/de/docs/Web/API/HTMLBodyElement#event_handlers) ist tatsächlich ein Alias für das Ereignis [`window.onload`](/de/docs/Web/API/Window/load_event). Daher wird das `load`-Ereignis auf dem `<body>`-Element erst ausgelöst, wenn alle Ressourcen des Dokuments geladen wurden oder beim Laden ein Fehler aufgetreten ist. Der Klarheit halber wird jedoch empfohlen, den Event-Handler direkt am `window`-Objekt statt an `HTMLBodyElement` zu registrieren.

Dieses Ereignis kann nicht abgebrochen werden und wird nicht durch die DOM-Hierarchie weitergereicht.

## Syntax

Verwenden Sie den Ereignisnamen in [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener):

```js-nolint
addEventListener("load", (event) => { })
```

Alternativ können Sie den Handler der [Event-Handler-Eigenschaft](/de/docs/Web/API/Document_Object_Model/Events#using_onevent_properties) der Schnittstelle zuweisen:

```js-nolint
onload = (event) => { }
```

## Ereignistyp

Ein generisches [`Event`](/de/docs/Web/API/Event).

## Hinweise zur Verwendung

### Umgang mit bereits geladenen Ressourcen

Eine Ressource kann fertig geladen sein, bevor Ihr Skript einen Listener für das `load`-Ereignis registriert. In diesem Fall empfängt der Listener das bereits ausgelöste Ereignis nicht.

Beispielsweise kann ein Bild im HTML geladen werden, während der Browser den Rest des Dokuments noch empfängt und analysiert – bevor er ein nachfolgendes Skript erreicht, das den Listener registriert. Der Listener kann auch zu spät registriert werden, wenn das Skript asynchron oder verzögert geladen wird oder vor der Registrierung des Listeners auf [`DOMContentLoaded`](/de/docs/Web/API/Document/DOMContentLoaded_event) wartet. Bei serverseitig gerendertem HTML mit Frameworks wie React oder Vue kann dasselbe Problem auftreten, da in JSX oder Templates geschriebene Event-Handler in JavaScript-Aufrufe und nicht in HTML-Event-Handler-Attribute kompiliert werden.

Es gibt verschiedene Möglichkeiten, sicherzustellen, dass der Event-Handler so früh wie möglich registriert wird, bevor die Ressource geladen wird. Beispielsweise können Sie ein [HTML-Event-Handler-Attribut](/de/docs/Web/HTML/Reference/Attributes#event_handler_attributes) verwenden, wenn Sie dessen Nachteile in Kauf nehmen möchten. Oder Sie können das gesamte Element dynamisch in JavaScript erstellen und sicherstellen, dass der Event-Listener registriert ist, bevor das Laden beginnt – etwa bevor Sie bei Bildern `src` einen Wert zuweisen.

Alternativ können Sie beim Registrieren des Event-Handlers prüfen, ob die Ressource bereits geladen wurde, und den Handler in diesem Fall sofort aufrufen. Bei einem Bild können Sie nach der Registrierung des Listeners die Eigenschaften [`complete`](/de/docs/Web/API/HTMLImageElement/complete) und [`naturalWidth`](/de/docs/Web/API/HTMLImageElement/naturalWidth) prüfen. `complete` prüft, ob die Anfrage abgeschlossen ist; `naturalWidth > 0` stellt sicher, dass tatsächlich ein Bild geladen wurde.

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

Dieses Beispiel gibt jedes Mal eine Meldung auf dem Bildschirm aus, wenn das {{HtmlElement("img")}}-Element seine Ressource erfolgreich lädt.

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

Das `<img>`-Element des Beispiels enthält im Markup ein `src`-Attribut. Daher kann das Bild geladen werden, bevor der Listener für das `load`-Ereignis registriert wird. Ein Klick auf „reload“ löst den Event-Listener garantiert aus.

{{EmbedLiveSample("examples", "100%", "200")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Verwandte Ereignisse
  - Window: [`load`](/de/docs/Web/API/Window/load_event)-Ereignis
  - Window: [`error`](/de/docs/Web/API/Window/error_event)-Ereignis
