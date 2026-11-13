---
title: "WebTransport: Eigenschaft anticipatedConcurrentIncomingUnidirectionalStreams"
short-title: anticipatedConcurrentIncomingUnidirectionalStreams
slug: Web/API/WebTransport/anticipatedConcurrentIncomingUnidirectionalStreams
l10n:
  sourceCommit: e92c5e2a19431051aed74037ec5b0decbbf5ca3d
---

{{APIRef("WebTransport API")}}{{SecureContext_Header}} {{AvailableInWorkers}}

Die Eigenschaft **`anticipatedConcurrentIncomingUnidirectionalStreams`** der Schnittstelle [`WebTransport`](/de/docs/Web/API/WebTransport) gibt an, wie viele eingehende unidirektionale Streams die Anwendung gleichzeitig vom Server erwartet.

## Wert

Eine Ganzzahl zwischen `0` und `65535` oder `null`.

Der Anfangswert stammt aus der Option [`anticipatedConcurrentIncomingUnidirectionalStreams`](/de/docs/Web/API/WebTransport/WebTransport#anticipatedconcurrentincomingunidirectionalstreams) des Konstruktors [`WebTransport()`](/de/docs/Web/API/WebTransport/WebTransport). Wenn diese Option nicht gesetzt ist, lautet der Wert `null`.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn die Eigenschaft auf einen Wert außerhalb des Bereichs von `0` bis `65535` gesetzt wird.

## Beschreibung

Ein Server kann nur so viele unidirektionale Streams öffnen, wie der Browser zulässt. Zu Beginn einer Sitzung erlaubt der Browser dem Server immer, mindestens 100 unidirektionale Streams zu öffnen.

Manche Anwendungen erwarten, dass der Server mehr als 100 Streams gleichzeitig geöffnet hat, beispielsweise wenn er jedes Spiel-Update oder Mediensegment über einen eigenen Stream sendet. Mit dieser Eigenschaft teilen Sie dem Browser mit, wie viele Streams zu erwarten sind, damit er sein Limit im Voraus erhöhen kann. Das vermeidet Verzögerungen, wenn der Server viele Streams gleichzeitig öffnet, da er nicht warten muss, bis der Browser weitere Streams zulässt. Der Wert dient als Hinweis; seine Festlegung garantiert nicht, dass der Server so viele Streams öffnen kann.

Ein Wert von `null` bedeutet, dass die Anwendung keinen Hinweis gibt und der Browser sein Standardlimit verwendet. Ein Wert unter 100, einschließlich `0`, verringert nicht die Anzahl der Streams, die der Server anfangs öffnen kann.

Sie können die Eigenschaft auch nach dem Erstellen des Transports setzen. Der Browser kann den neuen Wert bei späteren Aushandlungen mit dem Server berücksichtigen.

## Beispiele

### Viele Streams beim Verbindungsaufbau einplanen

Dieses Beispiel erstellt zwei Transports. Beim ersten wird die Option `anticipatedConcurrentIncomingUnidirectionalStreams` nicht gesetzt; daher hat die Eigenschaft den Wert `null`.

```js
const url = "https://example.com:4999/wt";

const transport = new WebTransport(url);
console.log(transport.anticipatedConcurrentIncomingUnidirectionalStreams); // null
```

Beim zweiten wird die Option auf `500` gesetzt. Damit wird dem Browser mitgeteilt, dass die Anwendung erwartet, dass der Server bis zu 500 unidirektionale Streams gleichzeitig geöffnet hat.

```js
const busyTransport = new WebTransport(url, {
  anticipatedConcurrentIncomingUnidirectionalStreams: 500,
});
console.log(busyTransport.anticipatedConcurrentIncomingUnidirectionalStreams); // 500
```

### Die erwartete Anzahl von Streams ändern

Dieses Beispiel erhöht die erwartete Anzahl von Streams, nachdem die Sitzung bereit ist. Eine Anwendung könnte dies tun, wenn sie erfährt, dass der Server mehr Streams senden wird als ursprünglich erwartet.

```js
const transport = new WebTransport("https://example.com:4999/wt", {
  anticipatedConcurrentIncomingUnidirectionalStreams: 500,
});
await transport.ready;

// The application now expects the server to open more streams
transport.anticipatedConcurrentIncomingUnidirectionalStreams = 1000;
console.log(transport.anticipatedConcurrentIncomingUnidirectionalStreams); // 1000
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`WebTransport.incomingUnidirectionalStreams`](/de/docs/Web/API/WebTransport/incomingUnidirectionalStreams)
- [`WebTransport.anticipatedConcurrentIncomingBidirectionalStreams`](/de/docs/Web/API/WebTransport/anticipatedConcurrentIncomingBidirectionalStreams)
- Konstruktor [`WebTransport()`](/de/docs/Web/API/WebTransport/WebTransport)
- [WebTransport verwenden](https://developer.chrome.com/docs/capabilities/web-apis/webtransport)
