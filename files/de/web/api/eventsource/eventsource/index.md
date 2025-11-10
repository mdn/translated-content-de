---
title: "EventSource: EventSource() Konstruktor"
short-title: EventSource()
slug: Web/API/EventSource/EventSource
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{APIRef("Server Sent Events")}}{{AvailableInWorkers}}

Der **`EventSource()`**
Konstruktor gibt eine neu erstellte [`EventSource`](/de/docs/Web/API/EventSource) zurück, die eine
entfernte Ressource darstellt.

## Syntax

```js-nolint
new EventSource(url)
new EventSource(url, options)
```

### Parameter

- `url`
  - : Ein String, der den Ort der entfernten Ressource darstellt,
    die die Ereignisse/Nachrichten bereitstellt.
- `options` {{optional_inline}}
  - : Bietet Optionen, um die neue Verbindung zu konfigurieren. Die möglichen Einträge sind:
    - `withCredentials` {{optional_inline}}
      - : Ein boolescher Wert, der standardmäßig auf `false` gesetzt ist, und angibt,
        ob CORS mit `include` Anmeldeinformationen eingerichtet werden soll.

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
> Ein vollständiges Beispiel finden Sie auf GitHub — siehe [Einfaches SSE-Demo mit PHP](https://github.com/mdn/dom-examples/tree/main/server-sent-events).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`EventSource`](/de/docs/Web/API/EventSource)
