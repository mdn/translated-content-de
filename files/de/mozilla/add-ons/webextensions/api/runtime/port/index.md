---
title: runtime.Port
slug: Mozilla/Add-ons/WebExtensions/API/runtime/Port
l10n:
  sourceCommit: 5c2abb422d26ae422891e699cc083bdd93c5e410
---

{{AddonSidebar}}

Ein `Port`-Objekt repräsentiert ein Ende einer Verbindung zwischen zwei spezifischen Kontexten, die zum Austausch von Nachrichten verwendet werden kann.

Eine Seite initiiert die Verbindung, indem sie eine `connect()`-API verwendet. Diese gibt ein `Port`-Objekt zurück. Die andere Seite wartet auf Verbindungsversuche mit einem `onConnect`-Listener. Dieser wird ein entsprechendes `Port`-Objekt übergeben.

Sobald beide Seiten `Port`-Objekte haben, können sie Nachrichten mithilfe von `Port.postMessage()` und `Port.onMessage` austauschen. Wenn sie fertig sind, kann jede Seite die Verbindung mit `Port.disconnect()` trennen, was ein `Port.onDisconnect`-Ereignis am anderen Ende erzeugt und es dem anderen Ende ermöglicht, notwendige Aufräumarbeiten durchzuführen.

Ein `Port` kann auch in Reaktion auf verschiedene Ereignisse getrennt werden. Siehe [Lebenszyklus](#lebenszyklus).

Sie können dieses Muster verwenden, um zwischen Folgendem zu kommunizieren:

- verschiedenen Teilen Ihrer Erweiterung (z. B. zwischen [Content-Skripten](/de/docs/Mozilla/Add-ons/WebExtensions/Content_scripts) und [Background-Skripten](/de/docs/Mozilla/Add-ons/WebExtensions/Anatomy_of_a_WebExtension#background_scripts))
- zwischen Ihrer Erweiterung und einer [auf dem Computer des Benutzers laufenden nativen Anwendung](/de/docs/Mozilla/Add-ons/WebExtensions/Native_messaging).
- zwischen Ihrer Erweiterung und einer anderen Erweiterung

Sie müssen verschiedene Verbindungs-APIs für verschiedene Arten von Verbindungen verwenden, wie in der Tabelle unten beschrieben.

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
  - : `string`. Der Name des Ports, definiert im Aufruf von {{WebExtAPIRef("runtime.connect()")}} oder {{WebExtAPIRef("tabs.connect()")}}, der ihn erstellt hat. Wenn dieser Port mit einer nativen Anwendung verbunden ist, ist sein Name der Name der nativen Anwendung.
- `disconnect`
  - : `function`. Trennt einen Port. Beide Enden können dies aufrufen, wenn sie mit dem Port fertig sind. Es wird verursachen, dass `onDisconnect` am anderen Ende ausgelöst wird. Dies ist nützlich, wenn das andere Ende einen Zustand in Bezug auf diesen Port beibehält, der bei der Trennung bereinigt werden kann. Wenn dieser Port mit einer nativen Anwendung verbunden ist, wird mit dieser Funktion die native Anwendung geschlossen.
- `error`
  - : `object`. Wenn der Port aufgrund eines Fehlers getrennt wurde, wird dies auf ein Objekt mit einer `message`-Eigenschaft gesetzt, die Ihnen mehr Informationen über den Fehler gibt. Siehe `onDisconnect`.
- `onDisconnect`
  - : `object`. Enthält die Funktionen `addListener()` und `removeListener()`, die allen Ereignissen für Erweiterungen gemeinsam sind, die mit WebExtension-APIs erstellt wurden. Listener-Funktionen werden aufgerufen, wenn das andere Ende `Port.disconnect()` aufgerufen hat. Dieses Ereignis wird nur einmal für jeden Port ausgelöst. Der Listener-Funktion wird das `Port`-Objekt übergeben. Wenn der Port aufgrund eines Fehlers getrennt wurde, enthält das `Port`-Argument eine `error`-Eigenschaft, die mehr Informationen über den Fehler liefert:

    ```js
    port.onDisconnect.addListener((p) => {
      if (p.error) {
        console.log(`Disconnected due to an error: ${p.error.message}`);
      }
    });
    ```

    Beachten Sie, dass in Google Chrome `port.error` nicht unterstützt wird: Verwenden Sie stattdessen {{WebExtAPIRef("runtime.lastError")}}, um die Fehlermeldung zu erhalten.

- `onMessage`
  - : `object`. Enthält die Funktionen `addListener()` und `removeListener()`, die allen Ereignissen für Erweiterungen gemeinsam sind, die mit WebExtension-APIs erstellt wurden. Listener-Funktionen werden aufgerufen, wenn das andere Ende diesem Port eine Nachricht gesendet hat. Der Listener wird der Wert übergeben, den das andere Ende gesendet hat.
- `postMessage`
  - : `function`. Sendet eine Nachricht an das andere Ende. Dies nimmt ein Argument, das ein serialisierbarer Wert ist (siehe [Datenklon-Algorithmus](/de/docs/Mozilla/Add-ons/WebExtensions/Chrome_incompatibilities#data_cloning_algorithm)), der die zu sendende Nachricht repräsentiert. Sie wird an jedes Skript geliefert, das das `onMessage`-Ereignis des Ports abhört, oder an die native Anwendung, wenn dieser Port mit einer nativen Anwendung verbunden ist.
- `sender` {{optional_inline}}
  - : {{WebExtAPIRef('runtime.MessageSender')}}. Enthält Informationen über den Absender der Nachricht. Nur vorhanden bei Ports, die an die {{WebExtAPIRef('runtime.onConnect')}}, {{WebExtAPIRef('runtime.onConnectExternal')}}, oder {{WebExtAPIRef("runtime.onUserScriptConnect")}} Listener übergeben werden.

## Lebenszyklus

Der Lebenszyklus eines `Port` wird [in den Chrome-Dokumenten](https://developer.chrome.com/docs/extensions/develop/concepts/messaging#port-lifetime) beschrieben.

Es gibt jedoch einen wichtigen Unterschied zwischen Firefox und Chrome, der sich daraus ergibt, dass die `runtime.connect`- und `tabs.connect`-APIs Broadcast-Kanäle sind. Dies bedeutet, dass es potenziell mehr als einen Empfänger geben kann, und dies führt zu Mehrdeutigkeiten, wenn einer der Kontexte mit einem `runtime.onConnect`-Aufruf geschlossen wird. In Chrome bleibt ein Port aktiv, solange es noch einen anderen Empfänger gibt. In Firefox wird der Port geschlossen, wenn einer der Kontexte entladen wird. Mit anderen Worten, die Trennungsbedingung,

- Alle Frames, die den Port empfangen haben (über `runtime.onConnect`), sind entladen.

die in Chrome hält, wird in Firefox ersetzt durch

- _Jeder_ Frame, der den Port empfangen hat (über `runtime.onConnect`), ist entladen.

(siehe [Bug 1465514](https://bugzil.la/1465514)).

## Beispiele

### Verbindung von Content-Skripten

Dieses Content-Skript:

- verbindet sich mit dem Hintergrundskript und speichert den `Port` in einer Variable namens `myPort`.
- wartet auf Nachrichten über `myPort` und protokolliert sie.
- sendet Nachrichten an das Hintergrundskript, verwendet `myPort`, wenn der Benutzer in das Dokument klickt.

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

- wartet auf Verbindungsversuche vom Content-Skript.
- wenn es einen Verbindungsversuch erhält:
  - speichert den Port in einer Variablen namens `portFromCS`.
  - sendet dem Content-Skript eine Nachricht unter Verwendung des Ports.
  - beginnt, auf Nachrichten zu lauschen, die über den Port empfangen werden, und protokolliert sie.

- sendet Nachrichten an das Content-Skript, verwendet `portFromCS`, wenn der Benutzer die Browser-Aktion der Erweiterung anklickt.

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

Dieses Beispiel verbindet sich mit der nativen Anwendung "ping_pong" und beginnt, auf Nachrichten von dieser zu hören. Es sendet der nativen Anwendung auch eine Nachricht, wenn der Benutzer ein Browser-Aktionssymbol anklickt:

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

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf der [`chrome.runtime`](https://developer.chrome.com/docs/extensions/reference/api/runtime#type-Port) API von Chromium. Diese Dokumentation stammt aus [`runtime.json`](https://chromium.googlesource.com/chromium/src/+/master/extensions/common/api/runtime.json) im Chromium-Code.

<!--
// Copyright 2015 The Chromium Authors. All rights reserved.
//
// Redistribution and use in source and binary forms, with or without
// modification, are permitted provided that the following conditions are
// met:
//
//    * Redistributions von Quellcode müssen den obigen Copyright-Hinweis,
// diese Liste von Bedingungen und den folgenden Haftungsausschluss
// beibehalten.
//    * Redistributions in binarer Form müssen den obigen
// Copyright-Hinweis, diese Liste von Bedingungen und den folgenden
// Haftungsausschluss in der Dokumentation und/oder anderen Materialien
// beibehalten, die mit der Verteilung geliefert werden.
//    * Weder der Name von Google Inc. noch die Namen seiner
// Mitwirkenden dürfen verwendet werden, um Produkte zu bewerben oder
// zu fördern, die von dieser Software abgeleitet wurden, ohne
// vorherige schriftliche Genehmigung.
//
// DIESE SOFTWARE WIRD VON DEN COPYRIGHT-EIGENTÜMERN UND MITWIRKENDEN
// "WIE BESEHEN" BEREITGESTELLT, UND JEGLICHE AUSDRÜCKLICHEN ODER
// IMPLIZIERTEN GARANTIEN, EINSCHLIESSLICH, ABER NICHT BESCHRÄNKT
// AUF DIE STILLSCHWEIGENDEN GARANTIEN DER MARKTFÄHIGKEIT UND
// EIGNUNG FÜR EINEN BESTIMMTEN ZWECK, WERDEN ABGELEHNT. IN KEINEM
// FALL HAFTEN DIE COPYRIGHT-INHABER ODER MITWIRKENDEN FÜR DIREKTE,
// INDIREKTE, ZUFÄLLIGE, BESONDERE, EXEMPLARISCHE ODER FOLGESCHÄDEN
// (EINSCHLIESSLICH, ABER NICHT BESCHRÄNKT AUF DIE BESCHAFFUNG VON
// ERSATZWAREN ODER -DIENSTEN; NUTZUNGSAUSFALL, DATEN ODER GEWINNE;
// ODER GESCHÄFTSUNTERBRECHUNG) JEDER ART, DIE DURCH DIE NUTZUNG
// DIESER SOFTWARE ENTSTEHEN, SELBST WENN AUF DIE MÖGLICHKEIT SOLCHER
// SCHÄDEN HINGEWIESEN WURDE.
-->
