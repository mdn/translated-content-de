---
title: "HTMLIFrameElement: loading-Eigenschaft"
short-title: loading
slug: Web/API/HTMLIFrameElement/loading
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{APIRef("HTML DOM")}}

Die **`loading`**-Eigenschaft der [`HTMLIFrameElement`](/de/docs/Web/API/HTMLIFrameElement)-Schnittstelle ist ein String, der dem {{Glossary("user_agent", "User-Agent")}} einen Hinweis darauf gibt, ob das [iframe](/de/docs/Web/HTML/Reference/Elements/iframe) sofort beim Laden der Seite oder nur bei Bedarf geladen werden soll.

Dies kann verwendet werden, um das Laden des Inhalts des Dokuments zu optimieren.
Iframes, die sichtbar sind, wenn die Seite geladen wird, können sofort (eager) heruntergeladen werden, während Iframes, die bei der anfänglichen Seitenladung wahrscheinlich außerhalb des Bildschirms sind, verlangsamt (lazy) heruntergeladen werden können – kurz bevor sie im {{Glossary("visual_viewport", "visuellen Viewport")}} des Fensters erscheinen.

## Wert

Ein String, der dem User-Agent einen Hinweis darauf gibt, wie das Laden des Iframes am besten geplant werden sollte.
Die möglichen Werte sind:

- `eager`
  - : Laden Sie das iframe, sobald das Element verarbeitet wird.
    Dies ist der Standard.
- `lazy`
  - : Laden Sie das iframe, wenn der Browser glaubt, dass es in naher Zukunft benötigt wird.

## Nutzungshinweise

### JavaScript muss aktiviert sein

Das Laden wird nur verzögert, wenn JavaScript aktiviert ist, unabhängig vom Wert dieser Eigenschaft.

Dies ist eine Maßnahme zum Schutz vor Tracking, da es bei Unterstützung von Lazy Loading ohne Skripting für eine Website dennoch möglich wäre, die ungefähre Scrollposition eines Benutzers während einer Sitzung zu verfolgen, indem strategisch iframes im Markup der Seite platziert werden, sodass ein Server über die Anzahl der Anfragen und deren Zeitpunkt informiert ist.

### Timing des Ladeereignisses

Das [`load`](/de/docs/Web/API/Window/load_event)-Ereignis wird ausgelöst, wenn das Dokument vollständig verarbeitet ist.

Verzögert geladene Iframes beeinflussen das Timing des `load`-Ereignisses nicht, selbst wenn das iframe im visuellen Viewport ist und daher beim Laden der Seite abgerufen wird.
Alle mit Eifer geladenen Iframes im Dokument müssen abgerufen werden, bevor das `load`-Ereignis ausgelöst werden kann.

## Beispiele

Das folgende Beispiel zeigt, wie Sie ein verzögert geladenes iframe definieren und es dann einem `<div>` im Dokument anhängen können. Der Frame würde dann erst geladen, wenn er sichtbar wird.

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
- [Lernen: Web-Performance](/de/docs/Learn_web_development/Extensions/Performance)
- [Lazy Loading](/de/docs/Web/Performance/Guides/Lazy_loading) im MDN Web-Performance-Leitfaden
- [Es ist Zeit, IFrames, die außerhalb des Bildschirms liegen, verzögert zu laden!](https://web.dev/articles/iframe-lazy-loading) auf web.dev
