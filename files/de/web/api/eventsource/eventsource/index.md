---
title: "EventSource: EventSource() Konstruktor"
short-title: EventSource()
slug: Web/API/EventSource/EventSource
l10n:
  sourceCommit: a166ba48ceb8bccb37c67a0a8856b0e5b12e0135
---

{{APIRef("Server Sent Events")}}{{AvailableInWorkers}}

Der **`EventSource()`** Konstruktor gibt eine neu erstellte [`EventSource`](/de/docs/Web/API/EventSource) zurück, die eine entfernte Ressource darstellt.

## Syntax

```js-nolint
new EventSource(url)
new EventSource(url, options)
```

### Parameter

- `url`
  - : Ein String, der den Ort der entfernten Ressource darstellt, die die Ereignisse/Nachrichten bereitstellt.
- `options` {{optional_inline}}

  - : Bietet Optionen zur Konfiguration der neuen Verbindung. Die möglichen Einträge sind:

    - `withCredentials` {{optional_inline}}
      - : Ein boolescher Wert, der standardmäßig auf `false` steht. Er gibt an, ob CORS mit Eingeschlossenen Anmeldeinformationen gesetzt werden soll.

## Beispiele

```js
const evtSource = new EventSource("sse.php");
const eventList = document.querySelector("ul");

evtSource.onmessage = (e) => {
  const newElement = document.createElement("li");

  newElement.textContent = `message: ${e.data}`;
  eventList.appendChild(newElement);
};
```

> [!NOTE]
> Sie können ein vollständiges Beispiel auf GitHub finden — siehe [Einfaches SSE-Demo mit PHP](https://github.com/mdn/dom-examples/tree/main/server-sent-events).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`EventSource`](/de/docs/Web/API/EventSource)
