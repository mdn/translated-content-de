---
title: "HTMLIFrameElement: loading-Eigenschaft"
short-title: loading
slug: Web/API/HTMLIFrameElement/loading
l10n:
  sourceCommit: 31ff21cf5f083a3258fc04267d54b1fb72224ff6
---

{{APIRef("HTML DOM")}}

Die **`loading`**-Eigenschaft des [`HTMLIFrameElement`](/de/docs/Web/API/HTMLIFrameElement)-Interfaces ist ein String, der dem {{Glossary("user_agent", "User-Agent")}} einen Hinweis darauf gibt, ob das [iframe](/de/docs/Web/HTML/Element/iframe) sofort beim Laden der Seite oder erst bei Bedarf geladen werden soll.

Dies kann verwendet werden, um das Laden der Inhalte des Dokuments zu optimieren. Iframes, die sichtbar sind, wenn die Seite geladen wird, können sofort (eager) heruntergeladen werden, während Iframes, die wahrscheinlich beim ersten Laden der Seite außerhalb des Bildschirms sind, nach Bedarf heruntergeladen werden können — gerade bevor sie im {{Glossary("visual_viewport", "visuellen Viewport")}} des Fensters erscheinen.

## Wert

Ein String, der dem User-Agent einen Hinweis darauf gibt, wie das Laden des iframes am besten geplant werden kann. Die möglichen Werte sind:

- `eager`
  - : Lädt das iframe, sobald das Element verarbeitet wird. Dies ist der Standard.
- `lazy`
  - : Lädt das iframe, wenn der Browser glaubt, dass es wahrscheinlich in naher Zukunft benötigt wird.

## Verwendungshinweise

### JavaScript muss aktiviert sein

Das Laden wird nur verzögert, wenn JavaScript aktiviert ist, unabhängig vom Wert dieser Eigenschaft.

Dies ist eine Anti-Tracking-Maßnahme, da wenn ein User-Agent Lazy Loading beim deaktivierten Scripting unterstützt, es dennoch möglich wäre, die ungefähre Scroll-Position eines Benutzers während einer Sitzung zu verfolgen, indem Iframes strategisch im Markup einer Seite platziert werden, sodass ein Server nachverfolgen kann, wie viele geladen werden und wann.

### Zeitpunkt des Ladeereignisses

Das [`load`](/de/docs/Web/API/Window/load_event)-Ereignis wird ausgelöst, wenn das Dokument vollständig verarbeitet wurde.

Lazy geladene Iframes beeinflussen den Zeitpunkt des `load`-Ereignisses nicht, auch wenn das iframe im visuellen Viewport ist und daher beim Laden der Seite abgerufen wird. Alle eager geladenen Iframes im Dokument müssen abgerufen werden, bevor das `load`-Ereignis ausgelöst werden kann.

## Beispiele

Das folgende Beispiel zeigt, wie Sie ein Lazy-Loaded-iframe definieren und es dann einem `<div>` im Dokument hinzufügen könnten. Der Frame wird dann nur geladen, wenn er gerade sichtbar wird.

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
- [Lazy Loading](/de/docs/Web/Performance/Guides/Lazy_loading) im MDN-Web-Performance-Leitfaden
- [It's time to lazy-load offscreen iframes!](https://web.dev/articles/iframe-lazy-loading) auf web.dev
