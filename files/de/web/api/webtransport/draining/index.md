---
title: "WebTransport: draining-Eigenschaft"
short-title: draining
slug: Web/API/WebTransport/draining
l10n:
  sourceCommit: 3064cbe8212ea919874fb21120a89657afccba25
---

{{APIRef("WebTransport API")}}{{SecureContext_Header}} {{AvailableInWorkers}}

Die schreibgeschützte Eigenschaft **`draining`** des Interfaces [`WebTransport`](/de/docs/Web/API/WebTransport) gibt ein {{jsxref("Promise")}} zurück, das erfüllt wird, wenn der Server angibt, dass die Transportsitzung vor dem Schließen mit dem Leeren beginnen soll.

## Wert

Ein {{jsxref("Promise")}}, das zu `undefined` aufgelöst wird.

## Beschreibung

Eine Sitzung wechselt in den Zustand _draining_, wenn dies vom Server signalisiert wird.
Dieses Signal kann gesendet werden, wenn die Sitzung (und möglicherweise die zugrunde liegende Verbindung) bald beendet werden soll, beispielsweise weil der Server die Last auf Backend-Instanzen verteilt, eine maximale Sitzungsdauer durchsetzt oder sogar neu startet.
Das Leeren ist nur eine Aufforderung: Beide Endpunkte können die Sitzung weiterhin verwenden und neue Streams öffnen oder Datagramme senden. Es wird jedoch erwartet, dass die Anwendung ihre Arbeit abschließt und die Sitzung bald schließt.

Eine Webanwendung kann das `draining`-Promise verwenden, um die erwartete Beendigung vorsorglich und geordnet zu behandeln.
Sie kann beispielsweise die aktuelle Aufgabe an einem natürlichen Haltepunkt abschließen und eine neue Sitzung öffnen, um die Arbeit fortzusetzen.

Das zurückgegebene Promise wird erstellt, wenn das `WebTransport`-Objekt erstellt wird, und wird erfüllt, wenn die Sitzung in den Zustand draining wechselt.
Der Zugriff auf dieses Promise oder das Warten darauf löst keine Aktion aus; es ermöglicht lediglich, Maßnahmen zu ergreifen, wenn die Sitzung mit dem Leeren beginnt, ähnlich wie beim Lauschen auf ein Ereignis.

## Beispiele

### Beim Leeren zu einem neuen Transport migrieren

In diesem Beispiel definieren wir zunächst eine Funktion `initTransport()`, die eine Verbindung erstellt und wartet, bis sie verwendet werden kann:

```js
const url = "https://example.com:4999/wt";

async function initTransport(url) {
  // Initialize transport connection
  const transport = new WebTransport(url);

  // The connection can be used once ready fulfills
  await transport.ready;

  return transport;
}

let transport = await initTransport(url);
```

Anschließend definieren wir eine Funktion `migrateOnDraining()`, die darauf wartet, dass der Server angibt, dass die Sitzung mit dem Leeren beginnen soll.
Sie erstellt einen neuen Transport, gibt ihn zurück und schließt außerdem den alten Transport.

```js
async function migrateOnDraining(url, oldTransport) {
  // Promise fulfills when signaled by server
  await oldTransport.draining;

  // Open a replacement session so the ongoing feed isn't interrupted
  const newTransport = await initTransport(url);

  // Switch to sending further data on newTransport instead of oldTransport
  // …

  // The old session is no longer needed once the new one is in use
  oldTransport.close();

  return newTransport;
}

// Not awaited: settles when draining starts
migrateOnDraining(url, transport).then((newTransport) => {
  transport = newTransport;
});
```

Beachten Sie, dass wir die Sitzung oben zwar schließen, wenn das Leeren signalisiert wird, wir aber dennoch den Fall behandeln müssten, dass die Sitzung durch einen anderen Mechanismus geschlossen wird.
Dieser Code wartet auf das von [`WebTransport.closed`](/de/docs/Web/API/WebTransport/closed) zurückgegebene Promise und protokolliert, ob die Sitzung geordnet oder unerwartet geschlossen wurde.

```js
async function watchForClose(transport) {
  try {
    const { closeCode, reason } = await transport.closed;
    console.log(`Session closed gracefully (code ${closeCode}): ${reason}`);
  } catch (error) {
    // The session can close abruptly, without draining being signaled first
    console.error(`Session closed unexpectedly: ${error}`);
  }
}

watchForClose(transport);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebTransport verwenden](https://developer.chrome.com/docs/capabilities/web-apis/webtransport)
- [WebSockets API](/de/docs/Web/API/WebSockets_API)
- [Streams API](/de/docs/Web/API/Streams_API)
- [WebTransport über HTTP/3](https://datatracker.ietf.org/doc/html/draft-ietf-webtrans-http3/)
