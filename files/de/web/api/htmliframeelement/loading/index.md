---
title: "HTMLIFrameElement: loading-Eigenschaft"
short-title: loading
slug: Web/API/HTMLIFrameElement/loading
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{APIRef("HTML DOM")}}

Die **`loading`**-Eigenschaft des [`HTMLIFrameElement`](/de/docs/Web/API/HTMLIFrameElement)-Interfaces ist ein String, der dem {{Glossary("user_agent", "User Agent")}} einen Hinweis darauf gibt, ob das [iframe](/de/docs/Web/HTML/Element/iframe) sofort beim Laden der Seite geladen werden soll oder erst, wenn es benötigt wird.

Dies kann verwendet werden, um die Ladezeit der Inhalte eines Dokuments zu optimieren.
Iframes, die sichtbar sind, wenn die Seite geladen wird, können sofort (eifrig) heruntergeladen werden, während Iframes, die wahrscheinlich bei der initialen Seitenladung außerhalb des Bildschirms sind, verzögert heruntergeladen werden können – kurz bevor sie im {{Glossary("visual_viewport", "visuellen Viewport")}} des Fensters erscheinen.

## Wert

Ein String, der dem User Agent einen Hinweis darauf gibt, wie das Laden des iframes am besten geplant werden kann.
Die möglichen Werte sind:

- `eager`
  - : Lädt das iframe, sobald das Element verarbeitet wird.
    Dies ist der Standardwert.
- `lazy`
  - : Lädt das iframe, wenn der Browser glaubt, dass es in naher Zukunft benötigt wird.

## Anmerkungen zur Nutzung

### JavaScript muss aktiviert sein

Das Laden wird nur verzögert, wenn JavaScript aktiviert ist, unabhängig vom Wert dieser Eigenschaft.

Dies ist eine Maßnahme gegen Tracking, da es für eine Website möglich wäre, die ungefähre Scroll-Position eines Nutzers während einer Sitzung zu verfolgen, indem strategisch iframes im Markup einer Seite platziert werden, sodass ein Server verfolgen kann, wie viele iframes angefordert werden und wann.

### Timing des Lade-Events

Das [`load`](/de/docs/Web/API/Window/load_event)-Event wird ausgelöst, wenn das Dokument vollständig verarbeitet wurde.

Verzögert geladene iframes beeinflussen das Timing des `load`-Events nicht, selbst wenn das iframe im visuellen Viewport ist und daher beim Laden der Seite abgerufen wird.
Alle eifrig geladenen iframes im Dokument müssen abgerufen werden, bevor das `load`-Event ausgelöst werden kann.

## Beispiele

Das folgende Beispiel zeigt, wie ein verzögert geladenes iframe definiert und dann an ein `<div>` im Dokument angehängt werden könnte.
Der Rahmen würde dann erst geladen, wenn er sichtbar wird.

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
- [Lazy loading](/de/docs/Web/Performance/Lazy_loading) im MDN Web-Performance-Leitfaden
- [Es ist an der Zeit, Iframes außerhalb des Bildschirms lazy zu laden!](https://web.dev/articles/iframe-lazy-loading) auf web.dev
