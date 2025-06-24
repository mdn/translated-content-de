---
title: runtime.Port
slug: Mozilla/Add-ons/WebExtensions/API/runtime/Port
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{AddonSidebar}}

Ein `Port`-Objekt repräsentiert ein Ende einer Verbindung zwischen zwei spezifischen Kontexten, die zum Austausch von Nachrichten verwendet werden kann.

Eine Seite initiiert die Verbindung, indem sie eine `connect()`-API verwendet. Dies gibt ein `Port`-Objekt zurück. Die andere Seite hört auf Verbindungsversuche mit einem `onConnect` Listener. Dieser wird mit einem entsprechenden `Port`-Objekt übergeben.

Sobald beide Seiten `Port`-Objekte haben, können sie Nachrichten über `Port.postMessage()` und `Port.onMessage` austauschen. Wenn sie fertig sind, kann jede Seite die Verbindung mit `Port.disconnect()` trennen, was ein `Port.onDisconnect`-Ereignis am anderen Ende erzeugt und es dem anderen Ende ermöglicht, alle erforderlichen Aufräumarbeiten durchzuführen.

Ein `Port` kann auch in Reaktion auf verschiedene Ereignisse getrennt werden. Siehe [Lifecycle](#lebenszyklus).

Sie können dieses Muster verwenden, um zwischen folgenden zu kommunizieren:

- verschiedene Teile Ihrer Erweiterung (z. B. zwischen [Inhaltsskripten](/de/docs/Mozilla/Add-ons/WebExtensions/Content_scripts) und [Hintergrundskripten](/de/docs/Mozilla/Add-ons/WebExtensions/Anatomy_of_a_WebExtension#background_scripts))
- zwischen Ihrer Erweiterung und einer [nativen Anwendung, die auf dem Computer des Benutzers läuft](/de/docs/Mozilla/Add-ons/WebExtensions/Native_messaging).
- zwischen Ihrer Erweiterung und einer anderen Erweiterung

Für verschiedene Verbindungen müssen Sie unterschiedliche Verbindungs-APIs verwenden, wie in der Tabelle unten beschrieben.

<table class="fullwidth-table standard-table">
  <thead>
    <tr>
      <th scope="col">Verbindungstyp</th>
      <th scope="col">Verbindungsversuch initiieren</th>
      <th scope="col">Verbindungsversuch behandeln</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Hintergrundskript zu Inhaltsskript</td>
      <td>{{WebExtAPIRef("tabs.connect()")}}</td>
      <td>{{WebExtAPIRef("runtime.onConnect")}}</td>
    </tr>
    <tr>
      <td>Inhaltsskript zu Hintergrundskript</td>
      <td>{{WebExtAPIRef("runtime.connect()")}}</td>
      <td>{{WebExtAPIRef("runtime.onConnect")}}</td>
    </tr>
    <tr>
      <td>Erweiterung zu nativer Anwendung</td>
      <td>{{WebExtAPIRef("runtime.connectNative()")}}</td>
      <td>
        Nicht anwendbar (siehe
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
  - : `string`. Der Name des Ports, definiert in dem {{WebExtAPIRef("runtime.connect()")}} oder {{WebExtAPIRef("tabs.connect()")}} Aufruf, der ihn erstellt hat. Wenn dieser Port mit einer nativen Anwendung verbunden ist, ist sein Name der Name der nativen Anwendung.
- `disconnect`
  - : `function`. Trennt einen Port. Jede Seite kann dies aufrufen, wenn sie mit dem Port fertig ist. Dies wird `onDisconnect` am anderen Ende auslösen. Dies ist nützlich, wenn das andere Ende einen Zustand in Bezug auf diesen Port verwaltet, der bei einer Trennung bereinigt werden kann. Wenn dieser Port mit einer nativen Anwendung verbunden ist, wird diese Funktion die native Anwendung schließen.
- `error`
  - : `object`. Wenn der Port aufgrund eines Fehlers getrennt wurde, wird dies auf ein Objekt mit einer String-Eigenschaft `message` gesetzt, die Ihnen mehr Informationen über den Fehler gibt. Siehe `onDisconnect`.
- `onDisconnect`

  - : `object`. Dies enthält die `addListener()` und `removeListener()` Funktionen, die allen Ereignissen für mit WebExtension APIs erstellte Erweiterungen gemeinsam sind. Listener-Funktionen werden aufgerufen, wenn das andere Ende `Port.disconnect()` aufgerufen hat. Dieses Ereignis wird nur einmal für jeden Port ausgelöst. Der Listener wird das `Port`-Objekt übergeben. Wenn der Port aufgrund eines Fehlers getrennt wurde, enthält das `Port`-Argument eine `error`-Eigenschaft, die weitere Informationen über den Fehler gibt:

    ```js
    port.onDisconnect.addListener((p) => {
      if (p.error) {
        console.log(`Disconnected due to an error: ${p.error.message}`);
      }
    });
    ```

    Beachten Sie, dass in Google Chrome `port.error` nicht unterstützt wird: Stattdessen verwenden Sie {{WebExtAPIRef("runtime.lastError")}}, um die Fehlermeldung zu erhalten.

- `onMessage`
  - : `object`. Dies enthält die `addListener()` und `removeListener()` Funktionen, die allen Ereignissen für mit WebExtension APIs erstellte Erweiterungen gemeinsam sind. Listener-Funktionen werden aufgerufen, wenn das andere Ende diesem Port eine Nachricht gesendet hat. Der Listener wird den Wert übergeben, den das andere Ende gesendet hat.
- `postMessage`
  - : `function`. Sendet eine Nachricht an das andere Ende. Dies erfordert ein Argument, welches einen serialisierbaren Wert darstellt (siehe [Datenklon-Algorithmus](/de/docs/Mozilla/Add-ons/WebExtensions/Chrome_incompatibilities#data_cloning_algorithm)) und die Nachricht repräsentiert, die gesendet werden soll. Sie wird an jedes Skript übermittelt, das auf das `onMessage`-Ereignis des Ports hört, oder an die native Anwendung, wenn dieser Port mit einer nativen Anwendung verbunden ist.
- `sender` {{optional_inline}}
  - : {{WebExtAPIRef('runtime.MessageSender')}}. Enthält Informationen über den Absender der Nachricht. Nur bei Ports vorhanden, die an die {{WebExtAPIRef('runtime.onConnect')}}, {{WebExtAPIRef('runtime.onConnectExternal')}}, oder {{WebExtAPIRef("runtime.onUserScriptConnect")}} Listener übergeben werden.

## Lebenszyklus

Der Lebenszyklus eines `Port` ist [in den Chrome-Dokumenten beschrieben](https://developer.chrome.com/docs/extensions/develop/concepts/messaging#port-lifetime).

Es gibt jedoch einen wichtigen Unterschied zwischen Firefox und Chrome, der darauf beruht, dass die `runtime.connect`- und `tabs.connect`-APIs Broadcast-Kanäle sind. Das bedeutet, dass es potenziell mehr als einen Empfänger geben kann, was zu Mehrdeutigkeiten führt, wenn einer der Kontexte mit einem `runtime.onConnect`-Aufruf geschlossen wird. In Chrome bleibt ein Port so lange aktiv, wie es einen anderen Empfänger gibt. In Firefox wird der Port geschlossen, wenn einer der Kontexte entladen wird. Anders ausgedrückt, die Trennungsbedingung,

- Alle Frames, die den Port erhielten (über `runtime.onConnect`), sind entladen.

die in Chrome gilt, wird in Firefox durch

- _Irgendein_ Frame, der den Port empfing (über `runtime.onConnect`), ist entladen.

ersetzt (siehe [Bug 1465514](https://bugzil.la/1465514)).

## Browser-Kompatibilität

{{Compat}}

## Beispiele

### Verbindung aus Inhaltsskripten aufbauen

Dieses Inhaltsskript:

- verbindet sich mit dem Hintergrundskript und speichert den `Port` in einer Variablen namens `myPort`.
- wartet auf Nachrichten auf `myPort` und protokolliert sie.
- sendet Nachrichten an das Hintergrundskript, unter Verwendung von `myPort`, wenn der Benutzer auf das Dokument klickt.

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

Das entsprechende Hintergrundskript:

- wartet auf Verbindungsversuche des Inhaltsskripts.
- wenn es einen Verbindungsversuch erhält:

  - speichert den Port in einer Variablen namens `portFromCS`.
  - sendet dem Inhaltsskript eine Nachricht mittels des Ports.
  - beginnt, Nachrichten zu empfangen, die auf dem Port empfangen werden, und protokolliert sie.

- sendet Nachrichten an das Inhaltsskript, unter Verwendung von `portFromCS`, wenn der Benutzer auf die Browseraktion der Erweiterung klickt.

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

#### Mehrere Inhaltsskripte

Wenn Sie mehrere Inhaltsskripte haben, die gleichzeitig kommunizieren, möchten Sie vielleicht jede Verbindung in einem Array speichern.

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

### Verbindung zu nativen Anwendungen aufbauen

Dieses Beispiel verbindet sich mit der nativen Anwendung "ping_pong" und beginnt, Nachrichten von ihr zu empfangen. Es sendet auch eine Nachricht an die native Anwendung, wenn der Benutzer auf ein Browseraktionssymbol klickt:

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
> Diese API basiert auf der [`chrome.runtime`](https://developer.chrome.com/docs/extensions/reference/api/runtime#type-Port)-API von Chromium. Diese Dokumentation stammt aus [`runtime.json`](https://chromium.googlesource.com/chromium/src/+/master/extensions/common/api/runtime.json) im Chromium-Code.

<!--
// Copyright 2015 The Chromium Authors. All rights reserved.
//
// Redistribution and use in source and binary forms, with or without
// modification, are permitted provided that the following conditions are
// met:
//
//    * Redistributions of source code must retain the above copyright
// notice, this list of conditions and the following disclaimer.
//    * Redistributions in binary form must reproduce the above
// copyright notice, this list of conditions and the following disclaimer
// in the documentation and/or other materials provided with the
// distribution.
//    * Neither the name of Google Inc. nor the names of its
// contributors may be used to endorse or promote products derived from
// this software without specific prior written permission.
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
