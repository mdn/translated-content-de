---
title: runtime.Port
slug: Mozilla/Add-ons/WebExtensions/API/runtime/Port
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{AddonSidebar}}

Ein `Port`-Objekt stellt ein Ende einer Verbindung zwischen zwei spezifischen Kontexten dar, das zum Austausch von Nachrichten verwendet werden kann.

Eine Seite initiiert die Verbindung, indem sie eine `connect()`-API verwendet. Dies gibt ein `Port`-Objekt zurück. Die andere Seite wartet mit einem `onConnect`-Listener auf Verbindungsversuche. Dieser wird mit einem entsprechenden `Port`-Objekt übergeben.

Sobald beide Seiten `Port`-Objekte haben, können sie Nachrichten mit `Port.postMessage()` und `Port.onMessage` austauschen. Wenn sie fertig sind, kann jede Seite die Verbindung mit `Port.disconnect()` trennen, was ein `Port.onDisconnect`-Ereignis am anderen Ende erzeugt und es dem anderen Ende ermöglicht, notwendige Aufräumarbeiten durchzuführen.

Ein `Port` kann auch als Reaktion auf verschiedene Ereignisse getrennt werden. Siehe [Lebenszyklus](#lebenszyklus).

Sie können dieses Muster verwenden, um zwischen folgenden zu kommunizieren:

- verschiedenen Teilen Ihrer Erweiterung (zum Beispiel zwischen [Content-Skripten](/de/docs/Mozilla/Add-ons/WebExtensions/Content_scripts) und [Background-Skripten](/de/docs/Mozilla/Add-ons/WebExtensions/Anatomy_of_a_WebExtension#background_scripts))
- Ihrer Erweiterung und einer [nativen Anwendung, die auf dem Computer des Benutzers läuft](/de/docs/Mozilla/Add-ons/WebExtensions/Native_messaging).
- Ihrer Erweiterung und einer anderen Erweiterung

Für verschiedene Arten von Verbindungen müssen unterschiedliche Verbindungs-APIs verwendet werden, wie in der Tabelle unten beschrieben.

<table class="fullwidth-table standard-table">
  <thead>
    <tr>
      <th scope="col">Verbindungstyp</th>
      <th scope="col">Verbindungsversuch initiieren</th>
      <th scope="col">Verbindungsversuch bearbeiten</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Hintergrundskript zu Content-Skript</td>
      <td>{{WebExtAPIRef("tabs.connect()")}}</td>
      <td>{{WebExtAPIRef("runtime.onConnect")}}</td>
    </tr>
    <tr>
      <td>Content-Skript zu Hintergrundskript</td>
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
  - : `string`. Der Name des Ports, definiert im Aufruf von {{WebExtAPIRef("runtime.connect()")}} oder {{WebExtAPIRef("tabs.connect()")}}, der ihn erstellt hat. Wenn dieser Port mit einer nativen Anwendung verbunden ist, ist sein Name der Name der nativen Anwendung.
- `disconnect`
  - : `function`. Trennt einen Port. Entweder kann diese Funktion aufgerufen werden, wenn der Port nicht mehr benötigt wird. Dies führt dazu, dass `onDisconnect` am anderen Ende ausgelöst wird. Dies ist nützlich, wenn das andere Ende einen Zustand beibehält, der sich auf diesen Port bezieht und beim Trennen bereinigt werden kann. Wenn dieser Port mit einer nativen Anwendung verbunden ist, schließt diese Funktion die native Anwendung.
- `error`
  - : `object`. Wenn der Port aufgrund eines Fehlers getrennt wurde, wird dies auf ein Objekt mit einer String-Eigenschaft `message` gesetzt, das mehr Informationen über den Fehler liefert. Siehe `onDisconnect`.
- `onDisconnect`

  - : `object`. Dies enthält die Funktionen `addListener()` und `removeListener()`, die für alle Ereignisse in Erweiterungen, die WebExtension-APIs verwenden, üblich sind. Listener-Funktionen werden aufgerufen, wenn das andere Ende `Port.disconnect()` aufgerufen hat. Dieses Ereignis wird nur einmal für jeden Port ausgelöst. Die Listener-Funktion erhält das `Port`-Objekt. Wenn der Port aufgrund eines Fehlers getrennt wurde, enthält das `Port`-Argument eine `error`-Eigenschaft, die mehr Informationen über den Fehler gibt:

    ```js
    port.onDisconnect.addListener((p) => {
      if (p.error) {
        console.log(`Disconnected due to an error: ${p.error.message}`);
      }
    });
    ```

    Beachten Sie, dass in Google Chrome `port.error` nicht unterstützt wird: stattdessen verwenden Sie {{WebExtAPIRef("runtime.lastError")}}, um die Fehlermeldung zu erhalten.

- `onMessage`
  - : `object`. Dies enthält die Funktionen `addListener()` und `removeListener()`, die für alle Ereignisse in Erweiterungen, die WebExtension-APIs verwenden, üblich sind. Listener-Funktionen werden aufgerufen, wenn das andere Ende diesem Port eine Nachricht gesendet hat. Der Listener erhält den Wert, den das andere Ende gesendet hat.
- `postMessage`
  - : `function`. Sendet eine Nachricht an das andere Ende. Dies nimmt ein Argument an, das ein serialisierbarer Wert ist (siehe [Datenkopieralgorithmus](/de/docs/Mozilla/Add-ons/WebExtensions/Chrome_incompatibilities#data_cloning_algorithm)), der die zu sendende Nachricht darstellt. Es wird an jedes Skript geliefert, das auf das `onMessage`-Ereignis des Ports hört, oder an die native Anwendung, wenn dieser Port mit einer nativen Anwendung verbunden ist.
- `sender` {{optional_inline}}
  - : {{WebExtAPIRef('runtime.MessageSender')}}. Enthält Informationen über den Absender der Nachricht. Diese Eigenschaft ist nur bei Ports vorhanden, die an `onConnect`/`onConnectExternal`-Listener übergeben werden.

## Lebenszyklus

Der Lebenszyklus eines `Port` wird [in den Chrome-Dokumenten](https://developer.chrome.com/docs/extensions/develop/concepts/messaging#port-lifetime) beschrieben.

Es gibt jedoch einen wichtigen Unterschied zwischen Firefox und Chrome, der sich daraus ergibt, dass die `runtime.connect`- und `tabs.connect`-APIs Broadcast-Kanäle sind. Das bedeutet, dass es potenziell mehr als einen Empfänger geben kann, und dies führt zu Unklarheit, wenn einer der Kontexte mit einem `runtime.onConnect`-Aufruf geschlossen wird. In Chrome bleibt ein Port so lange aktiv, wie es einen anderen Empfänger gibt. In Firefox wird der Port geschlossen, wenn einer der Kontexte entladen wird. Mit anderen Worten, die Bedingung für die Trennung,

- Alle Frames, die den Port (über `runtime.onConnect`) empfangen haben, wurden entladen.

die in Chrome gilt, wird in Firefox durch

- _Jeder_ Frame, der den Port (über `runtime.onConnect`) empfangen hat, wurde entladen.

ersetzt (siehe [Fehler 1465514](https://bugzil.la/1465514)).

## Browserkompatibilität

{{Compat}}

## Beispiele

### Verbindung von Content-Skripten

Dieses Content-Skript:

- verbindet sich mit dem Hintergrundskript und speichert den `Port` in einer Variablen namens `myPort`.
- hört auf Nachrichten auf `myPort` und protokolliert sie.
- sendet Nachrichten an das Hintergrundskript, indem es `myPort` verwendet, wenn der Benutzer auf das Dokument klickt.

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

- hört auf Verbindungsversuche vom Content-Skript.
- wenn es einen Verbindungsversuch erhält:

  - speichert den Port in einer Variablen namens `portFromCS`.
  - sendet dem Content-Skript eine Nachricht über den Port.
  - beginnt Nachrichten zu empfangen, die über den Port gesendet werden, und protokolliert sie.

- sendet Nachrichten an das Content-Skript, indem es `portFromCS` verwendet, wenn der Benutzer auf die Browseraktion der Erweiterung klickt.

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

#### Mehrere Content-Skripte

Wenn Sie mehrere Content-Skripte haben, die gleichzeitig kommunizieren, möchten Sie möglicherweise jede Verbindung in einem Array speichern.

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

Dieses Beispiel verbindet sich mit der nativen Anwendung "ping_pong" und beginnt, auf Nachrichten von ihr zu hören. Es sendet der nativen Anwendung auch eine Nachricht, wenn der Benutzer auf ein Browseraktionssymbol klickt:

```js
/*
Beim Start eine Verbindung zur "ping_pong"-App herstellen.
*/
let port = browser.runtime.connectNative("ping_pong");

/*
Auf Nachrichten von der App hören.
*/
port.onMessage.addListener((response) => {
  console.log(`Received: ${response}`);
});

/*
Bei einem Klick auf die Browseraktion der App eine Nachricht senden.
*/
browser.browserAction.onClicked.addListener(() => {
  console.log("Sending:  ping");
  port.postMessage("ping");
});
```

{{WebExtExamples}}

> [!NOTE]
> Diese API basiert auf der [`chrome.runtime`](https://developer.chrome.com/docs/extensions/reference/api/runtime#type-Port)-API von Chromium. Diese Dokumentation ist abgeleitet von [`runtime.json`](https://chromium.googlesource.com/chromium/src/+/master/extensions/common/api/runtime.json) im Chromium-Code.

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