---
title: "HTMLIFrameElement: loading-Eigenschaft"
short-title: loading
slug: Web/API/HTMLIFrameElement/loading
l10n:
  sourceCommit: 0c45d0d3ec3e3eeb80fcf2101a30704dae7c8ee9
---

{{APIRef("HTML DOM")}}

Die **`loading`**-Eigenschaft des {{domxref("HTMLIFrameElement")}}-Interfaces ist ein String, der dem {{Glossary("user agent")}} einen Hinweis darauf gibt, ob das [iframe](/de/docs/Web/HTML/Element/iframe) sofort beim Laden der Seite oder erst bei Bedarf geladen werden soll.

Dies kann verwendet werden, um das Laden der Inhalte des Dokuments zu optimieren. Iframes, die beim Laden der Seite sichtbar sind, können sofort (eifrig) heruntergeladen werden, während Iframes, die bei der anfänglichen Seitenlade möglicherweise außerhalb des Bildschirms sind, verzögert – kurz bevor sie im {{Glossary("visual viewport")}} des Fensters erscheinen – heruntergeladen werden können.

## Wert

Ein String, der dem User Agent einen Hinweis darauf gibt, wie das Laden des iframes am besten geplant werden sollte.
Die möglichen Werte sind:

- `eager`
  - : Lädt das iframe, sobald das Element verarbeitet wird.
    Dies ist der Standardwert.
- `lazy`
  - : Lädt das iframe, wenn der Browser der Meinung ist, dass es bald benötigt wird.

## Verwendungshinweise

### JavaScript muss aktiviert sein

Das Laden wird nur verzögert, wenn JavaScript aktiviert ist, unabhängig vom Wert dieser Eigenschaft.

Dies ist eine Maßnahme gegen das Verfolgen, da es bei Unterstützung der verzögerten Ladezeit durch den User Agent möglich wäre, die ungefähre Scrollposition eines Benutzers während einer Sitzung zu verfolgen, indem Iframes strategisch im Seitenmarkup platziert werden, sodass ein Server verfolgen kann, wie viele angefordert werden und wann.

### Zeitpunkt des Ladeereignisses

Das {{domxref("Window.load_event", "load")}}-Ereignis wird ausgelöst, wenn das Dokument vollständig verarbeitet wurde.

Verzögert geladene Iframes beeinflussen den Zeitpunkt des `load`-Ereignisses nicht, selbst wenn das iframe sich im visual viewport befindet und daher beim Seitenaufruf abgerufen wird. Alle eifrig geladenen Iframes im Dokument müssen abgerufen werden, bevor das `load`-Ereignis ausgelöst werden kann.

## Beispiele

Das folgende Beispiel zeigt, wie ein verzögert geladenes iframe definiert und dann einem `<div>` im Dokument hinzugefügt werden kann. Der Rahmen wird dann erst geladen, wenn er kurz davor ist, sichtbar zu werden.

```js
// Define iframe with lazy loading
const iframe = document.createElement("iframe");
iframe.src = "https://example.com";
iframe.width = 320;
iframe.height = 240;
iframe.loading = "lazy";

// Add to div element with class named frameDiv
const frameDiv = document.querySelector("div.frameDiv");
frameDiv.appendChild(iframe);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Das {{HTMLElement("iframe")}}-Element
- [Web-Performance](/de/docs/Learn/Performance) im MDN Lernbereich
- [Lazy Loading](/de/docs/Web/Performance/Lazy_loading) im MDN-Web-Performance-Leitfaden
- [It's time to lazy-load offscreen iframes!](https://web.dev/articles/iframe-lazy-loading) auf web.dev
