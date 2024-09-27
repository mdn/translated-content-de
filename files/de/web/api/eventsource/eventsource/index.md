---
title: "EventSource: EventSource()-Konstruktor"
short-title: EventSource()
slug: Web/API/EventSource/EventSource
l10n:
  sourceCommit: d8f04d843dd81ab8cea1cfc0577ae3c5c9b77d5c
---

{{APIRef('WebSockets API')}}

Der **`EventSource()`**
Konstruktor gibt ein neu erstelltes [`EventSource`](/de/docs/Web/API/EventSource) zurück, das eine
entfernte Ressource repräsentiert.

## Syntax

```js-nolint
new EventSource(url)
new EventSource(url, options)
```

### Parameter

- `url`
  - : Ein String, der den Ort der entfernten Ressource repräsentiert, die die Events/Nachrichten bereitstellt.
- `options` {{optional_inline}}

  - : Bietet Optionen zur Konfiguration der neuen Verbindung. Die möglichen Einträge sind:

    - `withCredentials` {{optional_inline}}
      - : Ein boolescher Wert, der standardmäßig `false` ist und angibt,
        ob für CORS Anmeldedaten `include` gesetzt sein sollen.

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
> Sie finden ein vollständiges Beispiel auf GitHub — siehe [Einfaches SSE-Demo mit PHP](https://github.com/mdn/dom-examples/tree/main/server-sent-events).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`EventSource`](/de/docs/Web/API/EventSource)
