---
title: runtime.Port
slug: Mozilla/Add-ons/WebExtensions/API/runtime/Port
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{AddonSidebar}}

Ein `Port`-Objekt repräsentiert ein Ende einer Verbindung zwischen zwei spezifischen Kontexten, die zum Nachrichtenaustausch verwendet werden kann.

Eine Seite initiiert die Verbindung mit einer `connect()`-API. Dies gibt ein `Port`-Objekt zurück. Die andere Seite überwacht Verbindungsversuche mithilfe eines `onConnect`-Listeners. Dieser erhält ein entsprechendes `Port`-Objekt.

Sobald beide Seiten `Port`-Objekte haben, können sie Nachrichten mit `Port.postMessage()` und `Port.onMessage` austauschen. Wenn sie fertig sind, kann ein Ende die Verbindung mit `Port.disconnect()` trennen, was ein `Port.onDisconnect`-Ereignis am anderen Ende generiert, damit das andere Ende notwendige Aufräumarbeiten durchführen kann.

Ein `Port` kann auch als Reaktion auf verschiedene Ereignisse getrennt werden. Siehe [Lebenszyklus](#lebenszyklus).

Sie können dieses Muster verwenden, um zwischen folgenden Punkten zu kommunizieren:

- verschiedene Teile Ihrer Erweiterung (zum Beispiel zwischen [Content-Scripts](/de/docs/Mozilla/Add-ons/WebExtensions/Content_scripts) und [Hintergrund-Skripten](/de/docs/Mozilla/Add-ons/WebExtensions/Anatomy_of_a_WebExtension#background_scripts))
- zwischen Ihrer Erweiterung und einer [auf dem Computer des Benutzers laufenden nativen Anwendung](/de/docs/Mozilla/Add-ons/WebExtensions/Native_messaging).
- zwischen Ihrer Erweiterung und einer anderen Erweiterung

Für verschiedene Verbindungstypen müssen Sie unterschiedliche Verbindungs-APIs verwenden, wie in der folgenden Tabelle beschrieben.

<table class="fullwidth-table standard-table">
  <thead>
    <tr>
      <th scope="col">Verbindungstyp</th>
      <th scope="col">Verbindungsversuch initiieren</th>
      <th scope="col">Verbindungsversuch handhaben</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Hintergrund-Skript zu Content-Skript</td>
      <td>{{WebExtAPIRef("tabs.connect()")}}</td>
      <td>{{WebExtAPIRef("runtime.onConnect")}}</td>
    </tr>
    <tr>
      <td>Content-Skript zu Hintergrund-Skript</td>
      <td>{{WebExtAPIRef("runtime.connect()")}}</td>
      <td>{{WebExtAPIRef("runtime.onConnect")}}</td>
    </tr>
    <tr>
      <td>Erweiterung zu nativer Anwendung</td>
      <td>{{WebExtAPIRef("runtime.connectNative()")}}</td>
      <td>
        Nicht zutreffend (siehe
        <a href="/de/docs/Mozilla/Add-ons/WebExtensions/Native_messaging"
          >Native Messaging</a
        >).
      </td>
    </tr>
    <tr>
      <td>Erweiterung zu Erweiterung</td>
      <td>{{WebExtAPIRef("runtime.connect()")}}</td>
      <td>{{WebExtAPIRef("runtime.onConnectExternal")}}</td>
    </tr>
  </tbody>
</table>

## Typ

Werte dieses Typs sind Objekte. Sie enthalten die folgenden Eigenschaften:

- `name`
  - : `string`. Der Name des Ports, definiert in dem {{WebExtAPIRef("runtime.connect()")}}- oder {{WebExtAPIRef("tabs.connect()")}}-Aufruf, der ihn erstellt hat. Wenn dieser Port mit einer nativen Anwendung verbunden ist, ist der Name der Name der nativen Anwendung.
- `disconnect`
  - : `function`. Trennt einen Port. Beide Enden können dies aufrufen, wenn sie mit dem Port fertig sind. Dadurch wird am anderen Ende `onDisconnect` ausgelöst. Dies ist nützlich, wenn das andere Ende einen Zustand im Zusammenhang mit diesem Port verwaltet, der bei einer Trennung bereinigt werden kann. Wenn dieser Port mit einer nativen Anwendung verbunden ist, wird diese Anwendung durch diese Funktion geschlossen.
- `error`
  - : `object`. Wenn der Port aufgrund eines Fehlers getrennt wurde, wird dies auf ein Objekt mit einer String-Eigenschaft `message` gesetzt, die Ihnen mehr Informationen über den Fehler gibt. Siehe `onDisconnect`.
- `onDisconnect`

  - : `object`. Dies enthält die `addListener()`- und `removeListener()`-Funktionen, die allen Ereignissen für Erweiterungen gemein sind, die mit WebExtension-APIs erstellt wurden. Listener-Funktionen werden aufgerufen, wenn das andere Ende `Port.disconnect()` aufgerufen hat. Dieses Ereignis wird nur einmal für jeden Port ausgelöst. Der Listener-Funktion wird das `Port`-Objekt übergeben. Wenn der Port aufgrund eines Fehlers getrennt wurde, enthält das `Port`-Argument eine `error`-Eigenschaft, die mehr Informationen über den Fehler bietet:

    ```js
    port.onDisconnect.addListener((p) => {
      if (p.error) {
        console.log(`Disconnected due to an error: ${p.error.message}`);
      }
    });
    ```

    Beachten Sie, dass in Google Chrome `port.error` nicht unterstützt wird: Verwenden Sie stattdessen {{WebExtAPIRef("runtime.lastError")}}, um die Fehlermeldung zu erhalten.

- `onMessage`
  - : `object`. Dies enthält die `addListener()`- und `removeListener()`-Funktionen, die allen Ereignissen für Erweiterungen gemein sind, die mit WebExtension-APIs erstellt wurden. Listener-Funktionen werden aufgerufen, wenn das andere Ende diesem Port eine Nachricht gesendet hat. Dem Listener wird der Wert übergeben, den das andere Ende gesendet hat.
- `postMessage`
  - : `function`. Sendet eine Nachricht an das andere Ende. Dies erfordert ein Argument, das einen serialisierbaren Wert darstellt (siehe [Datenklon-Algorithmus](/de/docs/Mozilla/Add-ons/WebExtensions/Chrome_incompatibilities#data_cloning_algorithm)), der die zu sendende Nachricht repräsentiert. Diese wird an jedes Skript übermittelt, das das `onMessage`-Ereignis des Ports überwacht, oder an die native Anwendung, wenn dieser Port mit einer nativen Anwendung verbunden ist.
- `sender` {{optional_inline}}
  - : {{WebExtAPIRef('runtime.MessageSender')}}. Enthält Informationen über den Absender der Nachricht. Diese Eigenschaft ist nur bei Ports vorhanden, die an `onConnect`/`onConnectExternal`-Listener übergeben werden.

## Lebenszyklus

Der Lebenszyklus eines `Port` wird [in den Chrome-Dokumentationen](https://developer.chrome.com/docs/extensions/develop/concepts/messaging#port-lifetime) beschrieben.

Es gibt jedoch einen wichtigen Unterschied zwischen Firefox und Chrome, der darauf zurückzuführen ist, dass die `runtime.connect` und `tabs.connect`-APIs Broadcast-Kanäle sind. Das bedeutet, dass es möglicherweise mehr als einen Empfänger gibt, was zu Mehrdeutigkeiten führt, wenn einer der Kontexte mit einem `runtime.onConnect`-Aufruf geschlossen wird. In Chrome bleibt ein Port aktiv, solange es einen anderen Empfänger gibt. In Firefox wird der Port geschlossen, wenn einer der Kontexte entladen wird. Mit anderen Worten, die Bedingung für die Trennung,

- Alle Frames, die den Port erhalten haben (via `runtime.onConnect`), wurden entladen.

die in Chrome gilt, wird in Firefox ersetzt durch

- _Jeder_ Frame, der den Port erhalten hat (via `runtime.onConnect`), wurde entladen.

( siehe [bug 1465514](https://bugzil.la/1465514)).

## Browser-Kompatibilität

{{Compat}}

## Beispiele

### Verbindung von Content-Scripts

Dieses Content-Skript:

- verbindet sich mit dem Hintergrund-Skript und speichert den `Port` in einer Variablen namens `myPort`.
- lauscht auf Nachrichten auf `myPort` und protokolliert sie.
- sendet Nachrichten an das Hintergrund-Skript, indem `myPort` verwendet wird, wenn der Benutzer das Dokument anklickt.

```js
// content-script.js

let myPort = browser.runtime.connect({ name: "port-from-cs" });
myPort.postMessage({ greeting: "hello from content script" });

myPort.onMessage.addListener((m) => {
  console.log("In content script, received message from background script: ");
  console.log(m.greeting);
});

document.body.addEventListener("click", () => {
  myPort.postMessage({ greeting: "they clicked the page!" });
});
```

Das entsprechende Hintergrund-Skript:

- lauscht auf Verbindungsversuche vom Content-Skript.
- wenn es einen Verbindungsversuch erhält:

  - speichert den Port in einer Variablen namens `portFromCS`.
  - sendet dem Content-Skript eine Nachricht über den Port.
  - beginnt Nachrichten zu überwachen, die über den Port empfangen werden, und protokolliert sie.

- sendet Nachrichten an das Content-Skript, indem `portFromCS` verwendet wird, wenn der Benutzer auf die Browseraktion der Erweiterung klickt.

```js
// background-script.js

let portFromCS;

function connected(p) {
  portFromCS = p;
  portFromCS.postMessage({ greeting: "hi there content script!" });
  portFromCS.onMessage.addListener((m) => {
    console.log("In background script, received message from content script");
    console.log(m.greeting);
  });
}

browser.runtime.onConnect.addListener(connected);

browser.browserAction.onClicked.addListener(() => {
  portFromCS.postMessage({ greeting: "they clicked the button!" });
});
```

#### Mehrere Content-Scripts

Wenn Sie mehrere Content-Scripts haben, die gleichzeitig kommunizieren, möchten Sie möglicherweise jede Verbindung in einem Array speichern.

```js
// background-script.js

let ports = [];

function connected(p) {
  ports[p.sender.tab.id] = p;
  // …
}

browser.runtime.onConnect.addListener(connected);

browser.browserAction.onClicked.addListener(() => {
  ports.forEach((p) => {
    p.postMessage({ greeting: "they clicked the button!" });
  });
});
```

### Verbindung zu nativen Anwendungen

Dieses Beispiel verbindet sich mit der nativen Anwendung "ping_pong" und beginnt, Nachrichten von ihr zu empfangen. Es sendet auch eine Nachricht an die native Anwendung, wenn der Benutzer auf ein Browser-Aktionssymbol klickt:

```js
/*
On startup, connect to the "ping_pong" app.
*/
let port = browser.runtime.connectNative("ping_pong");

/*
Listen for messages from the app.
*/
port.onMessage.addListener((response) => {
  console.log(`Received: ${response}`);
});

/*
On a click on the browser action, send the app a message.
*/
browser.browserAction.onClicked.addListener(() => {
  console.log("Sending:  ping");
  port.postMessage("ping");
});
```

{{WebExtExamples}}

> [!NOTE]
> Diese API basiert auf der Chromium-API [`chrome.runtime`](https://developer.chrome.com/docs/extensions/reference/api/runtime#type-Port). Diese Dokumentation ist aus [`runtime.json`](https://chromium.googlesource.com/chromium/src/+/master/extensions/common/api/runtime.json) im Chromium-Code abgeleitet.

<!--
// Copyright 2015 The Chromium Authors. All rights reserved.
//
// Redistribution and use in source and binary forms, with or without
// modification, are permitted provided that the following conditions are
// met:
//
//    * Redistributions of source code must retain the above copyright
//      notice, this list of conditions and the following disclaimer.
//    * Redistributions in binary form must reproduce the above
//      copyright notice, this list of conditions and the following disclaimer
//      in the documentation and/or other materials provided with the
//      distribution.
//    * Neither the name of Google Inc. nor the names of its
//      contributors may be used to endorse or promote products derived from
//      this software without specific prior written permission.
//
// THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
// "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
// LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
// A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
// OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
// SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
// LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
// DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
// THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
// (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
// OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
-->
