---
title: "HTMLIFrameElement: loading-Eigenschaft"
short-title: loading
slug: Web/API/HTMLIFrameElement/loading
l10n:
  sourceCommit: 8db892b3e7ca294621898441e7db2481e0e6d939
---

{{APIRef("HTML DOM")}}

Die **`loading`**-Eigenschaft der Schnittstelle [`HTMLIFrameElement`](/de/docs/Web/API/HTMLIFrameElement) ist ein String, der dem Browser einen Hinweis darauf gibt, ob das [iframe](/de/docs/Web/HTML/Reference/Elements/iframe) sofort beim Laden der Seite oder erst bei Bedarf geladen werden soll.

Dies kann verwendet werden, um das Laden der Inhalte des Dokuments zu optimieren.
Iframes, die beim Laden der Seite sichtbar sind, können sofort (eifrig) heruntergeladen werden, während Iframes, die bei anfänglichem Seitenladen wahrscheinlich außerhalb des Bildschirms liegen, verzögert heruntergeladen werden können, kurz bevor sie im {{Glossary("visual_viewport", "visuellen Viewport")}} des Fensters erscheinen.

## Wert

Ein String, der dem Benutzeragenten einen Hinweis darauf gibt, wie das Laden des iframes am besten geplant werden sollte.
Die möglichen Werte sind:

- `eager`
  - : Laden Sie das iframe, sobald das Element verarbeitet wird.
    Dies ist der Standardwert.
- `lazy`
  - : Laden Sie das iframe, wenn der Browser glaubt, dass es in naher Zukunft benötigt wird.

## Verwendungshinweise

### JavaScript muss aktiviert sein

Das Laden wird nur verzögert, wenn JavaScript aktiviert ist, unabhängig vom Wert dieser Eigenschaft.

Dies ist eine Anti-Tracking-Maßnahme, da es, wenn ein Benutzeragent das verzögerte Laden unterstützt und das Skripting deaktiviert ist, dennoch möglich wäre, die ungefähre Scroll-Position eines Benutzers während einer Sitzung zu verfolgen, indem man iframes strategisch im Markup einer Seite platziert, sodass ein Server verfolgen kann, wie viele angefordert werden und wann.

### Timing des load-Events

Das [`load`](/de/docs/Web/API/Window/load_event)-Event wird ausgelöst, wenn das Dokument vollständig verarbeitet wurde.

Verzögert geladene iframes beeinflussen nicht das Timing des `load`-Events, selbst wenn das iframe im visuellen Viewport ist und daher beim Laden der Seite abgerufen wird.
Alle eifrig geladenen iframes im Dokument müssen abgerufen werden, bevor das `load`-Event ausgelöst werden kann.

## Beispiele

### Grundlegende Verwendung

Das folgende Beispiel zeigt, wie Sie ein verzögert geladenes iframe definieren und dieses dann einem `<div>` im Dokument hinzufügen könnten.
Der Frame würde dann erst geladen, wenn er sichtbar zu werden droht.

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

- Das {{HTMLElement("iframe")}} Element
- [Lernen: Web-Performance](/de/docs/Learn_web_development/Extensions/Performance)
- [Lazy Loading](/de/docs/Web/Performance/Guides/Lazy_loading) im MDN Web Performance Guide
- [Es ist an der Zeit, verzögertes Laden für Offscreen-iframes zu nutzen!](https://web.dev/articles/iframe-lazy-loading) auf web.dev
