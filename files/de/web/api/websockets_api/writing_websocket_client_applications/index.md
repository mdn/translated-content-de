---
title: Schreiben von WebSocket-Client-Anwendungen
slug: Web/API/WebSockets_API/Writing_WebSocket_client_applications
l10n:
  sourceCommit: 9acc6b610330450a9101a670e0a087781e64ff7d
---

{{DefaultAPISidebar("WebSockets API")}}

In diesem Leitfaden werden wir die Implementierung einer WebSocket-basierten Ping-Anwendung durchgehen. In dieser Anwendung sendet der Client jede Sekunde eine "ping"-Nachricht an den Server, und der Server antwortet mit einer "pong"-Nachricht. Der Client hört auf "pong"-Nachrichten und protokolliert sie, um nachzuverfolgen, wie viele Nachrichtenaustausche stattgefunden haben.

Obwohl dies eine recht minimale Anwendung ist, deckt sie die grundlegenden Punkte ab, die beim Schreiben eines WebSocket-Clients erforderlich sind.

Das vollständige Beispiel finden Sie unter [https://github.com/mdn/dom-examples/tree/main/websockets](https://github.com/mdn/dom-examples/tree/main/websockets). Die Serverseite ist in [Deno](https://deno.com/) geschrieben, daher müssen Sie dieses zuerst installieren, wenn Sie das Beispiel lokal ausführen möchten.

## Erstellen eines `WebSocket`-Objekts

Um mit dem WebSocket-Protokoll zu kommunizieren, müssen Sie ein [`WebSocket`](/de/docs/Web/API/WebSocket)-Objekt erstellen. Sobald Sie dieses Objekt erstellen, wird es versuchen, sich mit dem angegebenen Server zu verbinden.

```js
const wsUri = "ws://127.0.0.1/";
const websocket = new WebSocket(wsUri);
```

Der `WebSocket`-Konstruktor benötigt ein obligatorisches Argument — die URL des WebSocket-Servers, zu dem eine Verbindung hergestellt werden soll. In diesem Fall, da wir den Server lokal ausführen, verwenden wir die localhost-Adresse.

> [!NOTE]
> In diesem Beispiel verwenden wir das `ws`-Protokoll für die Verbindung, weil wir im Beispiel eine Verbindung zu localhost herstellen. In einer realen Anwendung sollten Webseiten mit HTTPS bereitgestellt werden, und die WebSocket-Verbindung sollte `wss` als Protokoll verwenden.

Der Konstruktor nimmt ein weiteres optionales Argument [`protocols`](/de/docs/Web/API/WebSocket/WebSocket#protocols), das es einem einzelnen Server ermöglicht, mehrere Subprotokolle zu implementieren. Wir nutzen dieses Feature in unserem Beispiel nicht.

Der Konstruktor wird einen `SecurityError` werfen, wenn das Ziel keinen Zugriff erlaubt.
Dies kann passieren, wenn Sie versuchen, eine unsichere Verbindung zu verwenden (die meisten {{Glossary("user_agent", "User Agents")}} erfordern jetzt eine sichere Verbindung für alle WebSocket-Verbindungen, es sei denn, sie befinden sich auf demselben Gerät oder möglicherweise im selben Netzwerk).

## Lauschen auf das `open`-Ereignis

Das Erstellen einer `WebSocket`-Instanz startet den Prozess, eine Verbindung zum Server herzustellen. Sobald die Verbindung hergestellt ist, wird das [`open`](/de/docs/Web/API/WebSocket/open_event)-Ereignis ausgelöst, und ab diesem Zeitpunkt kann der Socket Daten übertragen.

Im Beispielcode unten beginnen wir, bei Auslösung des `open`-Ereignisses, jede Sekunde eine "ping"-Nachricht an den Server zu senden, unter Verwendung der [`Window.setInterval()`](/de/docs/Web/API/Window/setInterval) API:

```js
websocket.addEventListener("open", () => {
  log("CONNECTED");
  pingInterval = setInterval(() => {
    log(`SENT: ping: ${counter}`);
    websocket.send("ping");
  }, 1000);
});
```

## Lauschen auf Fehler

Wenn ein Fehler auftritt, während die Verbindung hergestellt wird oder zu einem späteren Zeitpunkt, wird das [`error`](/de/docs/Web/API/WebSocket/error_event)-Ereignis ausgelöst.

Unsere Anwendung unternimmt nichts Spezielles bei Fehlern, aber wir protokollieren ihn:

```js
websocket.addEventListener("error", (e) => {
  log(`ERROR`);
});
```

Bei einem Fehler wird die Verbindung geschlossen und das `close`-Ereignis wird ausgelöst.

## Senden von Nachrichten

Wir haben bereits gesehen, dass wir, sobald die Verbindung hergestellt ist, die [`send()`](/de/docs/Web/API/WebSocket/send)-Methode verwenden können, um Nachrichten an den Server zu senden:

```js
websocket.addEventListener("open", () => {
  log("CONNECTED");
  pingInterval = setInterval(() => {
    log(`SENT: ping: ${counter}`);
    websocket.send("ping");
  }, 1000);
});
```

In unserem Beispiel senden wir Text, aber Sie können auch Binärdaten als [`Blob`](/de/docs/Web/API/Blob), {{jsxref("ArrayBuffer")}}, {{jsxref("TypedArray")}}, oder {{jsxref("DataView")}} senden.

Ein gängiger Ansatz ist die Verwendung von {{Glossary("JSON", "JSON")}}, um serialisierte JavaScript-Objekte als Text zu senden. Zum Beispiel könnte unser Client anstatt nur der Textnachricht "ping" ein serialisiertes Objekt senden, das die Anzahl der bisher ausgetauschten Nachrichten enthält:

```js
const message = {
  iteration: counter,
  content: "ping",
};
websocket.send(JSON.stringify(message));
```

Die `send()`-Methode ist asynchron: sie wartet nicht darauf, dass die Daten übertragen werden, bevor sie zum Aufrufer zurückkehrt. Sie fügt die Daten lediglich ihrem internen Puffer hinzu und beginnt den Übertragungsprozess. Die [`WebSocket.bufferedAmount`](/de/docs/Web/API/WebSocket/bufferedAmount)-Eigenschaft repräsentiert die Anzahl der Bytes, die noch nicht übertragen wurden. Beachten Sie, dass das WebSockets-Protokoll {{Glossary("UTF-8", "UTF-8")}} verwendet, um Text zu kodieren, sodass `bufferedAmount` basierend auf der UTF-8-Kodierung aller gepufferten Textdaten berechnet wird.

## Empfangen von Nachrichten

Um Nachrichten vom Server zu empfangen, lauschen wir auf das [`message`](/de/docs/Web/API/WebSocket/message_event)-Ereignis.

Unser Nachrichtenevent-Handler protokolliert die empfangene Nachricht und erhöht unsere Zählung der Anzahl der Nachrichtenaustausche, die stattgefunden haben:

```js
websocket.addEventListener("message", (e) => {
  log(`RECEIVED: ${e.data}: ${counter}`);
  counter++;
});
```

Der Server kann auch Binärdaten senden, die den Clients als [`Blob`](/de/docs/Web/API/Blob) oder als {{jsxref("ArrayBuffer")}} basierend auf dem Wert der [`WebSocket.binaryType`](/de/docs/Web/API/WebSocket/binaryType)-Eigenschaft zur Verfügung stehen.

Wie wir beim Senden von Nachrichten gesehen haben, kann der Server auch JSON-Zeichenketten senden, die der Client dann in ein Objekt parsen kann:

```js
websocket.addEventListener("message", (e) => {
  const message = JSON.parse(e.data);
  log(`RECEIVED: ${message.iteration}: ${message.content}`);
  counter++;
});
```

## Umgang mit Trennungen

Wenn die Verbindung geschlossen wird, entweder weil der Client oder der Server sie geschlossen hat oder weil ein Fehler aufgetreten ist, wird das [`close`](/de/docs/Web/API/WebSocket/close_event)-Ereignis ausgelöst.

Unsere Anwendung lauscht auf das `close`-Ereignis und bereinigt den Intervall-Timer, wenn es ausgelöst wird:

```js
websocket.addEventListener("close", () => {
  log("DISCONNECTED");
  clearInterval(pingInterval);
});
```

## Arbeiten mit dem bfcache

Der Rückwärts-/Vorwärts-Cache, oder {{Glossary("bfcache", "bfcache")}}, ermöglicht wesentlich schnellere Vorwärts- und Rückwärtsnavigationen zwischen Seiten, die der Nutzer kürzlich besucht hat. Dies geschieht durch das Speichern einer vollständigen Momentaufnahme der Seite, einschließlich des JavaScript-Heap.

Der Browser pausiert und setzt dann die JavaScript-Ausführung fort, wenn eine Seite in den bfcache aufgenommen oder daraus wiederhergestellt wird. Dies bedeutet, dass es nicht immer sicher für den Browser ist, den bfcache für die Seite zu verwenden, abhängig davon, was die Seite gerade tut. Wenn der Browser feststellt, dass es nicht sicher ist, wird die Seite nicht zum bfcache hinzugefügt und der Nutzer erhält nicht den Leistungsvorteil, den dieser bieten kann.

Verschiedene Browser verwenden unterschiedliche Kriterien, um eine Seite zum bfcache hinzuzufügen, und eine offene WebSocket-Verbindung kann verhindern, dass der Browser Ihre Seite zum bfcache hinzufügt. Dies bedeutet, dass es eine gute Praxis ist, Ihre Verbindung zu schließen, wenn der Nutzer mit Ihrer Seite fertig ist. Das beste Ereignis hierfür ist das [`pagehide`](/de/docs/Web/API/Window/pagehide_event)-Ereignis.

Wir tun dies in unserer Beispielanwendung:

```js
window.addEventListener("pagehide", () => {
  if (websocket) {
    log("CLOSING");
    websocket.close();
    websocket = null;
    window.clearInterval(pingInterval);
  }
});
```

Umgekehrt können Sie durch das Lauschen auf das [`pageshow`](/de/docs/Web/API/Window/pageshow_event)-Ereignis die Verbindung nahtlos neu herstellen, wenn die Seite aus dem bfcache wiederhergestellt wird. Im folgenden Beispiel stellen wir die anfängliche Verbindung her, wenn die Seite zum ersten Mal geladen wird, und verbinden uns nur dann neu, wenn die Seite wiederhergestellt wird (Prüfung auf `event.persisted`):

```js
let websocket = null;

function initializeWebSocketListeners(ws) {
  ws.addEventListener("open", () => {
    log("CONNECTED");
    pingInterval = setInterval(() => {
      log(`SENT: ping: ${counter}`);
      ws.send("ping");
    }, 1000);
  });

  ws.addEventListener("close", () => {
    log("DISCONNECTED");
    clearInterval(pingInterval);
  });

  ws.addEventListener("message", (e) => {
    log(`RECEIVED: ${e.data}: ${counter}`);
    counter++;
  });

  ws.addEventListener("error", (e) => {
    log(`ERROR`);
  });
}

window.addEventListener("pageshow", (event) => {
  if (event.persisted) {
    websocket = new WebSocket(wsUri);
    initializeWebSocketListeners(websocket);
  }
});

log("OPENING");
websocket = new WebSocket(wsUri);
initializeWebSocketListeners(websocket);
```

Wenn Sie unser Beispiel ausführen, versuchen Sie zu einer anderen Seite zu navigieren und dann zurück zum Beispiel. In Chrome sollten Sie sehen, dass das Beispiel die Verbindung erneut startet und seinen ursprünglichen Kontext beibehält: es erinnert sich beispielsweise an die Anzahl der ausgetauschten Nachrichten.

Sehen Sie sich den [web.dev-Artikel zum bfcache](https://web.dev/articles/bfcache#close-open-connections) für mehr Kontext zur bfcache-Kompatibilität und der WebSockets API an.

Auf Browsern, die es unterstützen, können Sie [die `notRestoredReasons`-Eigenschaft der Performance API verwenden](/de/docs/Web/API/Performance_API/Monitoring_bfcache_blocking_reasons), um den Grund zu erhalten, warum eine Seite nicht zum bfcache hinzugefügt wurde.

## Sicherheitsüberlegungen

WebSockets sollten nicht in einer gemischten Inhaltsumgebung verwendet werden; das bedeutet, Sie sollten keine unsichere WebSocket-Verbindung von einer Seite öffnen, die über HTTPS geladen wurde, oder umgekehrt.
Die meisten Browser erlauben jetzt nur noch sichere WebSocket-Verbindungen und unterstützen die Verwendung in unsicheren Kontexten nicht mehr.
