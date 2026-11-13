---
title: "WebTransport: Eigenschaft anticipatedConcurrentIncomingBidirectionalStreams"
short-title: anticipatedConcurrentIncomingBidirectionalStreams
slug: Web/API/WebTransport/anticipatedConcurrentIncomingBidirectionalStreams
l10n:
  sourceCommit: e92c5e2a19431051aed74037ec5b0decbbf5ca3d
---

{{APIRef("WebTransport API")}}{{SecureContext_Header}} {{AvailableInWorkers}}

Die Eigenschaft **`anticipatedConcurrentIncomingBidirectionalStreams`** der Schnittstelle [`WebTransport`](/de/docs/Web/API/WebTransport) gibt an, wie viele eingehende bidirektionale Streams die Anwendung voraussichtlich gleichzeitig vom Server offen hält.

## Wert

Eine Ganzzahl zwischen `0` und `65535` oder `null`.

Der Anfangswert stammt aus der Option [`anticipatedConcurrentIncomingBidirectionalStreams`](/de/docs/Web/API/WebTransport/WebTransport#anticipatedconcurrentincomingbidirectionalstreams) des Konstruktors [`WebTransport()`](/de/docs/Web/API/WebTransport/WebTransport). Wenn diese Option nicht gesetzt ist, lautet der Wert `null`.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn die Eigenschaft auf einen Wert außerhalb des Bereichs von `0` bis `65535` gesetzt wird.

## Beschreibung

Ein Server kann nur so viele bidirektionale Streams öffnen, wie der Browser zulässt.
Zu Beginn einer Sitzung erlaubt der Browser dem Server immer, mindestens 100 bidirektionale Streams zu öffnen.

Manche Anwendungen erwarten, dass der Server mehr Streams gleichzeitig offen hält, etwa wenn der Server jede Anfrage an den Client über einen eigenen Stream sendet.
Wenn Sie diese Eigenschaft setzen, teilen Sie dem Browser mit, wie viele Streams zu erwarten sind, damit er sein Limit im Voraus erhöhen kann.
Dadurch werden Verzögerungen vermieden, wenn der Server viele Streams gleichzeitig öffnet: Er muss dann nicht warten, bis der Browser weitere Streams zulässt.
Der Wert ist ein Hinweis. Ihn zu setzen, garantiert nicht, dass der Server so viele Streams öffnen kann.

Der Wert `null` bedeutet, dass die Anwendung keinen Hinweis gibt und der Browser sein Standardlimit verwendet.
Ein Wert unter 100, einschließlich `0`, verringert nicht die Anzahl der Streams, die der Server anfänglich öffnen kann.

Sie können die Eigenschaft auch setzen, nachdem der Transport erstellt wurde.
Der Browser kann den neuen Wert bei späteren Aushandlungen mit dem Server berücksichtigen.

## Beispiele

### Beim Verbindungsaufbau viele Streams erwarten

Dieses Beispiel erstellt zwei Transporte.
Beim ersten wird die Option `anticipatedConcurrentIncomingBidirectionalStreams` nicht gesetzt, daher lautet der Wert der Eigenschaft `null`.

```js
const url = "https://example.com:4999/wt";

const transport = new WebTransport(url);
console.log(transport.anticipatedConcurrentIncomingBidirectionalStreams); // null
```

Beim zweiten wird die Option auf `300` gesetzt. Damit wird dem Browser mitgeteilt, dass die Anwendung erwartet, dass der Server bis zu 300 bidirektionale Streams gleichzeitig offen hält.

```js
const busyTransport = new WebTransport(url, {
  anticipatedConcurrentIncomingBidirectionalStreams: 300,
});
console.log(busyTransport.anticipatedConcurrentIncomingBidirectionalStreams); // 300
```

### Die erwartete Anzahl von Streams ändern

Dieses Beispiel erhöht die erwartete Anzahl von Streams, nachdem die Sitzung bereit ist.
Eine Anwendung könnte dies tun, wenn sie erfährt, dass der Server mehr Streams senden wird als zunächst erwartet.

```js
const transport = new WebTransport("https://example.com:4999/wt", {
  anticipatedConcurrentIncomingBidirectionalStreams: 300,
});
await transport.ready;

// The application now expects the server to open more streams
transport.anticipatedConcurrentIncomingBidirectionalStreams = 600;
console.log(transport.anticipatedConcurrentIncomingBidirectionalStreams); // 600
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`WebTransport.incomingBidirectionalStreams`](/de/docs/Web/API/WebTransport/incomingBidirectionalStreams)
- [`WebTransport.anticipatedConcurrentIncomingUnidirectionalStreams`](/de/docs/Web/API/WebTransport/anticipatedConcurrentIncomingUnidirectionalStreams)
- Konstruktor [`WebTransport()`](/de/docs/Web/API/WebTransport/WebTransport)
- [WebTransport verwenden](https://developer.chrome.com/docs/capabilities/web-apis/webtransport)
