---
title: Schreiben von WebSocket-Client-Anwendungen
slug: Web/API/WebSockets_API/Writing_WebSocket_client_applications
l10n:
  sourceCommit: 20c3765ca2538a98ffef564c7eb87df43e2cef94
---

{{DefaultAPISidebar("WebSockets API")}}

In diesem Leitfaden führen wir Sie durch die Implementierung einer auf WebSockets basierenden Ping-Anwendung. In dieser Anwendung sendet der Client jede Sekunde eine "ping"-Nachricht an den Server, und der Server antwortet mit einer "pong"-Nachricht. Der Client hört auf "pong"-Nachrichten und protokolliert diese, um zu verfolgen, wie viele Nachrichten ausgetauscht wurden.

Obwohl dies eine ziemlich minimalistische Anwendung ist, deckt sie die grundlegenden Punkte ab, die beim Schreiben eines WebSocket-Clients zu beachten sind.

Das vollständige Beispiel finden Sie unter [https://github.com/mdn/dom-examples/tree/main/websockets](https://github.com/mdn/dom-examples/tree/main/websockets). Die Serverseite ist in [Deno](https://deno.com/) geschrieben, daher müssen Sie dies zuerst installieren, wenn Sie das Beispiel lokal ausführen möchten.

## Erstellen eines `WebSocket` Objekts

Um mit dem WebSocket-Protokoll zu kommunizieren, müssen Sie ein [`WebSocket`](/de/docs/Web/API/WebSocket) Objekt erstellen. Sobald Sie dieses Objekt erstellen, versucht es, sich mit dem angegebenen Server zu verbinden.

```js
const wsUri = "ws://127.0.0.1/";
const websocket = new WebSocket(wsUri);
```

Der `WebSocket`-Konstruktor erfordert ein obligatorisches Argument – die URL des WebSocket-Servers, mit dem eine Verbindung hergestellt werden soll. In diesem Fall verwenden wir die localhost-Adresse, da wir den Server lokal ausführen.

> [!NOTE]
> In diesem Beispiel verwenden wir das `ws`-Protokoll für die Verbindung, da wir uns im Beispiel mit localhost verbinden. In einer echten Anwendung sollten Webseiten über HTTPS bereitgestellt werden und die WebSocket-Verbindung sollte `wss` als Protokoll verwenden.

Der Konstruktor nimmt ein weiteres optionales Argument [`protocols`](/de/docs/Web/API/WebSocket/WebSocket#protocols), das es einem einzelnen Server ermöglicht, mehrere Subprotokolle zu implementieren. In unserem Beispiel verwenden wir diese Funktion nicht.

Der Konstruktor wirft einen `SecurityError`, wenn das Ziel den Zugriff nicht erlaubt. Dies kann passieren, wenn Sie versuchen, eine unsichere Verbindung zu verwenden (die meisten {{Glossary("user_agent", "User Agents")}} erfordern jetzt eine sichere Verbindung für alle WebSocket-Verbindungen, es sei denn, sie befinden sich auf demselben Gerät oder möglicherweise im selben Netzwerk).

## Lauschen auf das `open` Ereignis

Das Erstellen einer `WebSocket`-Instanz startet den Prozess der Herstellung einer Verbindung zum Server. Sobald die Verbindung hergestellt ist, wird das [`open`](/de/docs/Web/API/WebSocket/open_event) Ereignis ausgelöst, und ab diesem Zeitpunkt kann der Socket Daten übertragen.

Im folgenden Beispielcode senden wir, wenn das `open`-Ereignis ausgelöst wird, jede Sekunde eine "ping"-Nachricht an den Server, unter Verwendung der [`Window.setInterval()`](/de/docs/Web/API/Window/setInterval) API:

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

Wenn beim Herstellen der Verbindung oder zu irgendeinem Zeitpunkt nach deren Herstellung ein Fehler auftritt, wird das [`error`](/de/docs/Web/API/WebSocket/error_event) Ereignis ausgelöst.

Unsere Anwendung führt bei einem Fehler nichts Besonderes aus, aber wir protokollieren ihn:

```js
websocket.addEventListener("error", (e) => {
  log(`ERROR`);
});
```

Bei einem Fehler wird die Verbindung geschlossen und das `close`-Ereignis wird ausgelöst.

## Nachrichten senden

Wir haben bereits gesehen, dass wir, sobald die Verbindung hergestellt ist, die [`send()`](/de/docs/Web/API/WebSocket/send) Methode verwenden können, um Nachrichten an den Server zu senden:

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

Ein häufiger Ansatz ist die Verwendung von {{Glossary("JSON", "JSON")}}, um serialisierte JavaScript-Objekte als Text zu senden. Zum Beispiel könnte unser Client anstelle des einfachen Sendens der Textnachricht "ping" ein serialisiertes Objekt senden, das die Anzahl der bisher ausgetauschten Nachrichten enthält:

```js
const message = {
  iteration: counter,
  content: "ping",
};
websocket.send(JSON.stringify(message));
```

Die `send()` Methode ist asynchron: Sie wartet nicht darauf, dass die Daten übertragen werden, bevor sie zum Aufrufer zurückkehrt. Sie fügt die Daten nur ihrem internen Puffer hinzu und beginnt mit dem Übertragungsprozess. Die [`WebSocket.bufferedAmount`](/de/docs/Web/API/WebSocket/bufferedAmount) Eigenschaft repräsentiert die Anzahl der Bytes, die noch nicht übertragen wurden. Beachten Sie, dass das WebSockets-Protokoll {{Glossary("UTF-8", "UTF-8")}} verwendet, um Text zu codieren, sodass `bufferedAmount` basierend auf der UTF-8-Codierung der gepufferten Textdaten berechnet wird.

## Nachrichten empfangen

Um Nachrichten vom Server zu empfangen, lauschen wir auf das [`message`](/de/docs/Web/API/WebSocket/message_event) Ereignis.

Unser Nachrichtenereignishandler protokolliert die empfangene Nachricht und erhöht unsere Zählung der Anzahl der Nachrichten, die ausgetauscht wurden:

```js
websocket.addEventListener("message", (e) => {
  log(`RECEIVED: ${e.data}: ${counter}`);
  counter++;
});
```

Der Server kann auch Binärdaten senden, die dem Client als [`Blob`](/de/docs/Web/API/Blob) oder als {{jsxref("ArrayBuffer")}}, basierend auf dem Wert der [`WebSocket.binaryType`](/de/docs/Web/API/WebSocket/binaryType) Eigenschaft, angezeigt werden.

Wie wir beim Senden von Nachrichten gesehen haben, kann der Server auch JSON-Strings senden, die der Client dann in ein Objekt parsen kann:

```js
websocket.addEventListener("message", (e) => {
  const message = JSON.parse(e.data);
  log(`RECEIVED: ${message.iteration}: ${message.content}`);
  counter++;
});
```

## Umgang mit Verbindungsunterbrechungen

Wenn die Verbindung geschlossen wird, entweder weil der Client oder der Server sie geschlossen hat oder weil ein Fehler aufgetreten ist, wird das [`close`](/de/docs/Web/API/WebSocket/close_event) Ereignis ausgelöst.

Unsere Anwendung lauscht auf das `close` Ereignis und bereinigt den Intervall-Timer, wenn es ausgelöst wird:

```js
websocket.addEventListener("close", () => {
  log("DISCONNECTED");
  clearInterval(pingInterval);
});
```

## Arbeiten mit dem bfcache

Der Back/Forward Cache oder {{Glossary("bfcache", "bfcache")}} ermöglicht wesentlich schnellere Vor- und Zurück-Navigationen zwischen Seiten, die der Nutzer kürzlich besucht hat. Er tut dies, indem er einen vollständigen Schnappschuss der Seite speichert, einschließlich des JavaScript-Heaps.

Der Browser pausiert und setzt die JavaScript-Ausführung fort, wenn eine Seite in den bfcache aufgenommen oder daraus wiederhergestellt wird. Dies bedeutet, dass es je nachdem, was die Seite tut, nicht immer sicher ist, den bfcache für die Seite zu verwenden. Wenn der Browser feststellt, dass es nicht sicher ist, wird die Seite nicht in den bfcache aufgenommen, und der Benutzer erhält nicht den Leistungsvorteil, den er bieten kann.

Verschiedene Browser verwenden unterschiedliche Kriterien, um eine Seite in den bfcache aufzunehmen, und eine offene WebSocket-Verbindung kann verhindern, dass der Browser Ihre Seite in den bfcache aufnimmt. Dies bedeutet, dass es gute Praxis ist, Ihre Verbindung zu schließen, wenn der Nutzer mit Ihrer Seite fertig ist. Das beste Ereignis dafür ist das [`pagehide`](/de/docs/Web/API/Window/pagehide_event) Ereignis.

Wir tun dies in unserer Beispiel-App:

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

Umgekehrt können Sie durch das Abhören des [`pageshow`](/de/docs/Web/API/Window/pageshow_event) Ereignisses die Verbindung nahtlos wiederherstellen, wenn die Seite aus dem bfcache wiederhergestellt wird. Da das `pageshow`-Ereignis auch beim Laden der Seite ausgelöst wird, kann es auch verwendet werden, um die WebSocket-Verbindung beim ersten Laden der Seite zu starten:

```js
let websocket = null;

window.addEventListener("pageshow", () => {
  log("OPENING");

  websocket = new WebSocket(wsUri);

  websocket.addEventListener("open", () => {
    log("CONNECTED");
    pingInterval = setInterval(() => {
      log(`SENT: ping: ${counter}`);
      websocket.send("ping");
    }, 1000);
  });

  websocket.addEventListener("close", () => {
    log("DISCONNECTED");
    clearInterval(pingInterval);
  });

  websocket.addEventListener("message", (e) => {
    log(`RECEIVED: ${e.data}: ${counter}`);
    counter++;
  });

  websocket.addEventListener("error", (e) => {
    log(`ERROR: ${e.data}`);
  });
});
```

Wenn Sie unser Beispiel ausführen, versuchen Sie, zu einer anderen Seite zu navigieren und dann zum Beispiel zurückzukehren. In Chrome sollten Sie sehen, dass das Beispiel die Verbindung erneut herstellt und seinen ursprünglichen Kontext beibehält: es merkt sich beispielsweise die Anzahl der ausgetauschten Nachrichten.

Siehe den [web.dev-Artikel über den bfcache](https://web.dev/articles/bfcache#close-open-connections) für mehr Kontext zur bfcache-Kompatibilität und der WebSockets-API.

Bei Browsern, die dies unterstützen, können Sie [die `notRestoredReasons` Eigenschaft der Performance API verwenden](/de/docs/Web/API/Performance_API/Monitoring_bfcache_blocking_reasons), um den Grund zu erfahren, warum eine Seite nicht zum bfcache hinzugefügt wurde.

## Sicherheitsüberlegungen

WebSockets sollten nicht in einer gemischten Inhaltsumgebung verwendet werden; das heißt, Sie sollten keine unsichere WebSocket-Verbindung von einer über HTTPS geladenen Seite oder umgekehrt öffnen. Die meisten Browser erlauben jetzt nur sichere WebSocket-Verbindungen und unterstützen keine unsicheren Kontexte mehr.
