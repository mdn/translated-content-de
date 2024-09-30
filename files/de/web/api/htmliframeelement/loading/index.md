---
title: "HTMLIFrameElement: loading-Eigenschaft"
short-title: loading
slug: Web/API/HTMLIFrameElement/loading
l10n:
  sourceCommit: 0c45d0d3ec3e3eeb80fcf2101a30704dae7c8ee9
---

{{APIRef("HTML DOM")}}

Die **`loading`**-Eigenschaft der [`HTMLIFrameElement`](/de/docs/Web/API/HTMLIFrameElement)-Schnittstelle ist ein String, der dem [Benutzeragenten](/de/docs/Glossary/user_agent) einen Hinweis darauf gibt, ob das [iframe](/de/docs/Web/HTML/Element/iframe) sofort beim Laden der Seite oder nur bei Bedarf geladen werden soll.

Dies kann genutzt werden, um das Laden der Inhalte des Dokuments zu optimieren. Iframes, die beim Laden der Seite sichtbar sind, können sofort (eifrig) heruntergeladen werden, während Iframes, die wahrscheinlich außerhalb des Bildschirms sind, beim ersten Laden der Seite langsam geladen werden können – kurz bevor sie im [visuellen Ansichtsfenster](/de/docs/Glossary/visual_viewport) des Fensters erscheinen.

## Wert

Ein String, der dem Benutzeragenten einen Hinweis darauf gibt, wie das Laden des iframes am besten geplant werden kann. Die möglichen Werte sind:

- `eager`
  - : Das iframe wird geladen, sobald das Element verarbeitet wird. Dies ist der Standardwert.
- `lazy`
  - : Das iframe wird geladen, wenn der Browser glaubt, dass es in naher Zukunft benötigt werden könnte.

## Anmerkungen zur Nutzung

### JavaScript muss aktiviert sein

Das Laden wird nur verzögert, wenn JavaScript aktiviert ist, unabhängig vom Wert dieser Eigenschaft.

Dies ist eine Anti-Tracking-Maßnahme, da es für eine Website möglich wäre, die ungefähre Scrollposition eines Benutzers über eine Sitzung hinweg zu verfolgen, indem strategisch Iframes im Markup einer Seite platziert werden, sodass ein Server verfolgen kann, wie viele angefordert werden und wann, wenn ein Benutzeragent Lazy Loading unterstützt, während Skripting deaktiviert ist.

### Zeitpunkt des Ladeereignisses

Das [`load`](/de/docs/Web/API/Window/load_event)-Ereignis wird ausgelöst, wenn das Dokument vollständig verarbeitet wurde.

Langsam geladene Iframes beeinflussen das Timing des `load`-Ereignisses nicht, auch wenn das iframe im visuellen Ansichtsfenster ist und daher beim Laden der Seite abgerufen wird. Alle eifrig geladenen Iframes im Dokument müssen abgerufen werden, bevor das `load`-Ereignis ausgelöst werden kann.

## Beispiele

Das folgende Beispiel zeigt, wie Sie ein langsam geladenes iframe definieren und es dann an ein `<div>` im Dokument anhängen könnten. Der Frame würde dann nur geladen, wenn er gerade sichtbar wird.

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
