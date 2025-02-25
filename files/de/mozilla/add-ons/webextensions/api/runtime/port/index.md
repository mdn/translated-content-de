---
title: runtime.Port
slug: Mozilla/Add-ons/WebExtensions/API/runtime/Port
l10n:
  sourceCommit: 814f49dc14eb8c8a15c6c3bdc6c83d24ed865cdf
---

{{AddonSidebar}}

Ein `Port`-Objekt repräsentiert ein Ende einer Verbindung zwischen zwei bestimmten Kontexten, die zum Austausch von Nachrichten verwendet werden können.

Eine Seite initiiert die Verbindung durch die Verwendung einer `connect()`-API. Dies gibt ein `Port`-Objekt zurück. Die andere Seite hört nach Verbindungsversuchen mit einem `onConnect`-Listener. Dieser wird mit einem entsprechenden `Port`-Objekt übergeben.

Sobald beide Seiten `Port`-Objekte haben, können sie Nachrichten mithilfe von `Port.postMessage()` und `Port.onMessage` austauschen. Wenn sie fertig sind, kann jede Seite die Verbindung mit `Port.disconnect()` trennen, was auf der anderen Seite ein `Port.onDisconnect`-Ereignis erzeugt, das es der anderen Seite ermöglicht, alle erforderlichen Aufräumarbeiten durchzuführen.

Ein `Port` kann auch in Reaktion auf verschiedene Ereignisse getrennt werden. Siehe [Lebenszyklus](#lebenszyklus).

Sie können dieses Muster verwenden, um zwischen Folgendem zu kommunizieren:

- Verschiedene Teile Ihrer Erweiterung (zum Beispiel zwischen [Content Scripts](/de/docs/Mozilla/Add-ons/WebExtensions/Content_scripts) und [Background Scripts](/de/docs/Mozilla/Add-ons/WebExtensions/Anatomy_of_a_WebExtension#background_scripts))
- Zwischen Ihrer Erweiterung und einer [nativ auf dem Computer des Benutzers laufenden Anwendung](/de/docs/Mozilla/Add-ons/WebExtensions/Native_messaging).
- Zwischen Ihrer Erweiterung und einer anderen Erweiterung

Verschiedene Verbindungs-APIs müssen für verschiedene Verbindungstypen verwendet werden, wie in der folgenden Tabelle beschrieben.

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
      <td>Background Script zu Content Script</td>
      <td>{{WebExtAPIRef("tabs.connect()")}}</td>
      <td>{{WebExtAPIRef("runtime.onConnect")}}</td>
    </tr>
    <tr>
      <td>Content Script zu Background Script</td>
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
  - : `string`. Der Name des Ports, definiert im {{WebExtAPIRef("runtime.connect()")}} oder {{WebExtAPIRef("tabs.connect()")}}-Aufruf, der ihn erstellt hat. Wenn dieser Port mit einer nativen Anwendung verbunden ist, ist sein Name der Name der nativen Anwendung.
- `disconnect`
  - : `function`. Trennt einen Port. Jede Seite kann dies aufrufen, wenn sie mit dem Port fertig sind. Es wird bewirken, dass `onDisconnect` auf der anderen Seite ausgelöst wird. Dies ist nützlich, wenn die andere Seite einen Status in Bezug auf diesen Port aufrechterhält, der beim Trennen bereinigt werden kann. Wenn dieser Port mit einer nativen Anwendung verbunden ist, schließt diese Funktion die native Anwendung.
- `error`
  - : `object`. Wenn der Port aufgrund eines Fehlers getrennt wurde, wird dies auf ein Objekt mit einer Zeichenfolgeigenschaft `message` gesetzt, die Ihnen mehr Informationen über den Fehler gibt. Siehe `onDisconnect`.
- `onDisconnect`

  - : `object`. Dies enthält die `addListener()`- und `removeListener()`-Funktionen, die allen Ereignissen gemein sind, die mit den WebExtension-APIs erstellt wurden. Listener-Funktionen werden aufgerufen, wenn die andere Seite `Port.disconnect()` aufgerufen hat. Dieses Ereignis wird nur einmal für jeden Port ausgelöst. Der Listener-Funktion wird das `Port`-Objekt übergeben. Wenn der Port aufgrund eines Fehlers getrennt wurde, enthält das `Port`-Argument eine `error`-Eigenschaft mit weiteren Informationen zum Fehler:

    ```js
    port.onDisconnect.addListener((p) => {
      if (p.error) {
        console.log(`Disconnected due to an error: ${p.error.message}`);
      }
    });
    ```

    Beachten Sie, dass in Google Chrome `port.error` nicht unterstützt wird: Verwenden Sie stattdessen {{WebExtAPIRef("runtime.lastError")}}, um die Fehlermeldung zu erhalten.

- `onMessage`
  - : `object`. Dies enthält die `addListener()`- und `removeListener()`-Funktionen, die allen Ereignissen gemein sind, die mit den WebExtension-APIs erstellt wurden. Listener-Funktionen werden aufgerufen, wenn die andere Seite diesem Port eine Nachricht gesendet hat. Dem Listener wird der Wert übergeben, den die andere Seite gesendet hat.
- `postMessage`
  - : `function`. Sendet eine Nachricht an die andere Seite. Dies nimmt ein Argument an, das ein serialisierbarer Wert ist (siehe [Datenklon-Algorithmus](/de/docs/Mozilla/Add-ons/WebExtensions/Chrome_incompatibilities#data_cloning_algorithm)), der die zu sendende Nachricht darstellt. Es wird an jedes Skript geliefert, das auf das `onMessage`-Ereignis des Ports hört, oder an die native Anwendung, wenn dieser Port mit einer nativen Anwendung verbunden ist.
- `sender` {{optional_inline}}
  - : {{WebExtAPIRef('runtime.MessageSender')}}. Enthält Informationen über den Absender der Nachricht. Nur auf Ports vorhanden, die an die {{WebExtAPIRef('runtime.onConnect')}}, {{WebExtAPIRef('runtime.onConnectExternal')}}, oder {{WebExtAPIRef("runtime.onUserScriptConnect")}}-Listener übergeben werden.

## Lebenszyklus

Der Lebenszyklus eines `Port` wird [in den Chrome-Dokumenten](https://developer.chrome.com/docs/extensions/develop/concepts/messaging#port-lifetime) beschrieben.

Es gibt jedoch einen wichtigen Unterschied zwischen Firefox und Chrome, der daraus resultiert, dass die `runtime.connect`- und `tabs.connect`-APIs als Broadcast-Kanäle fungieren. Dies bedeutet, dass es potenziell mehr als einen Empfänger geben kann, was zu Mehrdeutigkeiten führt, wenn einer der Kontexte mit einem `runtime.onConnect`-Aufruf geschlossen wird. In Chrome bleibt ein Port aktiv, solange es noch einen anderen Empfänger gibt. In Firefox schließt sich der Port, wenn einer der Kontexte entladen wird. Mit anderen Worten, die Bedingung für die Trennung,

- Alle Frames, die den Port empfangen haben (über `runtime.onConnect`), sind entladen worden.

die in Chrome gilt, wird ersetzt durch

- _Ein beliebiger_ Frame, der den Port empfangen hat (über `runtime.onConnect`), ist entladen worden.

in Firefox (siehe [Fehler 1465514](https://bugzil.la/1465514)).

## Browser-Kompatibilität

{{Compat}}

## Beispiele

### Verbindung von Content Scripts

Dieses Content Script:

- verbindet sich mit dem Background Script und speichert den `Port` in einer Variablen namens `myPort`.
- hört auf Nachrichten auf `myPort` und protokolliert sie.
- sendet Nachrichten an das Background Script, indem es `myPort` verwendet, wenn der Benutzer auf das Dokument klickt.

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

Das entsprechende Background Script:

- hört auf Verbindungsversuche des Content Scripts.
- wenn es einen Verbindungsversuch erhält:

  - speichert den Port in einer Variablen namens `portFromCS`.
  - sendet dem Content Script eine Nachricht mit dem Port.
  - beginnt, auf Nachrichten zu hören, die über den Port empfangen werden, und protokolliert sie.

- sendet Nachrichten an das Content Script, indem es `portFromCS` verwendet, wenn der Benutzer auf die Browser-Aktion der Erweiterung klickt.

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

#### Mehrere Content Scripts

Wenn Sie mehrere Content Scripts haben, die gleichzeitig kommunizieren, möchten Sie möglicherweise jede Verbindung in einem Array speichern.

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

Dieses Beispiel verbindet sich mit der nativen Anwendung "ping_pong" und beginnt, auf Nachrichten von dieser zu hören. Es sendet der nativen Anwendung auch eine Nachricht, wenn der Benutzer auf ein Browser-Aktionssymbol klickt:

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
> Diese API basiert auf Chromium's [`chrome.runtime`](https://developer.chrome.com/docs/extensions/reference/api/runtime#type-Port) API. Diese Dokumentation ist abgeleitet von [`runtime.json`](https://chromium.googlesource.com/chromium/src/+/master/extensions/common/api/runtime.json) im Chromium-Code.

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
