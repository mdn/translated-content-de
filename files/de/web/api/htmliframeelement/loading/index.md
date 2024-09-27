---
title: "HTMLIFrameElement: loading-Eigenschaft"
short-title: loading
slug: Web/API/HTMLIFrameElement/loading
l10n:
  sourceCommit: 0c45d0d3ec3e3eeb80fcf2101a30704dae7c8ee9
---

{{APIRef("HTML DOM")}}

Die **`loading`**-Eigenschaft der [`HTMLIFrameElement`](/de/docs/Web/API/HTMLIFrameElement)-Schnittstelle ist ein Zeichenfolgenwert, der dem [User Agent](/de/docs/Glossary/user_agent) einen Hinweis gibt, ob das [iframe](/de/docs/Web/HTML/Element/iframe) sofort beim Laden der Seite oder nur bei Bedarf geladen werden soll.

Dies kann genutzt werden, um die Ladezeiten der Inhalte des Dokuments zu optimieren. Iframes, die sichtbar sind, wenn die Seite geladen wird, können sofort (eagerly) heruntergeladen werden, während Iframes, die beim ersten Laden der Seite wahrscheinlich außerhalb des Bildschirms sind, verzögert (lazily) heruntergeladen werden können – gerade bevor sie im [visuellen Viewport](/de/docs/Glossary/visual_viewport) des Fensters erscheinen.

## Wert

Ein Zeichenfolgenwert, der dem User Agent einen Hinweis darauf gibt, wie das Laden des iframes am besten geplant werden sollte. Die möglichen Werte sind:

- `eager`
  - : Lädt das iframe, sobald das Element verarbeitet wird. Dies ist der Standardwert.
- `lazy`
  - : Lädt das iframe, wenn der Browser glaubt, dass es in naher Zukunft benötigt wird.

## Nutzungshinweise

### JavaScript muss aktiviert sein

Das Laden wird nur verzögert, wenn JavaScript aktiviert ist, unabhängig vom Wert dieser Eigenschaft.

Dies ist eine Maßnahme gegen Tracking, denn wenn ein User Agent verzögertes Laden unterstützte, während Skripting deaktiviert ist, wäre es einer Webseite dennoch möglich, die ungefähre Scroll-Position eines Benutzers während einer Sitzung zu verfolgen, indem strategisch Iframes in das Markup einer Seite eingefügt werden, sodass ein Server registrieren kann, wie viele angefordert werden und wann.

### Zeitlicher Ablauf des Ladeereignisses

Das [`load`](/de/docs/Web/API/Window/load_event)-Ereignis wird ausgelöst, wenn das Dokument vollständig verarbeitet wurde.

Verzögert geladene Iframes beeinflussen das Timing des `load`-Ereignisses nicht, selbst wenn das iframe im visuellen Viewport ist und daher beim Laden der Seite abgerufen wird. Alle aufwendig geladenen Iframes im Dokument müssen geladen sein, bevor das `load`-Ereignis ausgelöst werden kann.

## Beispiele

Das folgende Beispiel zeigt, wie Sie ein lazy-geladenes iframe definieren und es dann in ein `<div>` im Dokument einfügen könnten. Der Frame würde dann nur geladen, wenn er sichtbar wird.

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
- [Web-Leistung](/de/docs/Learn/Performance) im MDN-Lernbereich
- [Lazy Loading](/de/docs/Web/Performance/Lazy_loading) im MDN-Web-Leistungsleitfaden
- [It's time to lazy-load offscreen iframes!](https://web.dev/articles/iframe-lazy-loading) auf web.dev
