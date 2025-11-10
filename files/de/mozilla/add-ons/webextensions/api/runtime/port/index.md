---
title: runtime.Port
slug: Mozilla/Add-ons/WebExtensions/API/runtime/Port
l10n:
  sourceCommit: 09109b6f9444d22215ba330ec1e64e73980b2a6c
---

Ein `Port`-Objekt repräsentiert ein Ende einer Verbindung zwischen zwei spezifischen Kontexten, die zum Austausch von Nachrichten verwendet werden kann.

Eine Seite initiiert die Verbindung mithilfe der `connect()`-API. Dies gibt ein `Port`-Objekt zurück. Die andere Seite horcht auf Verbindungsversuche mit einem `onConnect`-Listener. Diesem wird ein entsprechendes `Port`-Objekt übergeben.

Sobald beide Seiten über `Port`-Objekte verfügen, können sie Nachrichten mit `Port.postMessage()` und `Port.onMessage` austauschen. Wenn sie fertig sind, kann jede Seite die Verbindung mit `Port.disconnect()` trennen, was ein `Port.onDisconnect`-Ereignis auf der anderen Seite auslöst, so dass die andere Seite alle erforderlichen Aufräumarbeiten durchführen kann.

Ein `Port` kann auch infolge verschiedener Ereignisse getrennt werden. Siehe [Lebenszyklus](#lebenszyklus).

Dieses Muster kann zur Kommunikation zwischen:

- verschiedenen Teilen Ihrer Erweiterung verwendet werden (zum Beispiel zwischen [Inhaltsskripten](/de/docs/Mozilla/Add-ons/WebExtensions/Content_scripts) und [Hintergrundskripten](/de/docs/Mozilla/Add-ons/WebExtensions/Anatomy_of_a_WebExtension#background_scripts))
- zwischen Ihrer Erweiterung und einer [auf dem Computer des Nutzers laufenden nativen Anwendung](/de/docs/Mozilla/Add-ons/WebExtensions/Native_messaging).
- zwischen Ihrer Erweiterung und einer anderen Erweiterung

Sie müssen unterschiedliche Verbindungsschnittstellen-APIs für verschiedene Arten von Verbindungen verwenden, wie in der folgenden Tabelle beschrieben.

<table class="fullwidth-table standard-table">
  <thead>
    <tr>
      <th scope="col">Verbindungstyp</th>
      <th scope="col">Verbindungsversuch initiieren</th>
      <th scope="col">Verbindungsversuch verarbeiten</th>
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
  - : `function`. Trennt einen Port. Jede Seite kann dies aufrufen, wenn sie mit dem Port fertig ist. Dadurch wird `onDisconnect` auf der anderen Seite ausgelöst. Dies ist nützlich, wenn die andere Seite einen Zustand in Bezug auf diesen Port aufrechterhält, der beim Trennen der Verbindung bereinigt werden kann. Wenn dieser Port mit einer nativen Anwendung verbunden ist, wird diese Funktion die native Anwendung schließen.
- `error`
  - : `object`. Wenn der Port aufgrund eines Fehlers getrennt wurde, wird dies auf ein Objekt mit einer String-Eigenschaft `message` gesetzt, das weitere Informationen über den Fehler gibt. Siehe `onDisconnect`.
- `onDisconnect`
  - : `object`. Dies enthält die Funktionen `addListener()` und `removeListener()`, die allen Ereignissen für Erweiterungen, die die WebExtension-APIs verwenden, gemeinsam sind. Listener-Funktionen werden aufgerufen, wenn die andere Seite `Port.disconnect()` aufgerufen hat. Dieses Ereignis wird nur einmal für jeden Port ausgelöst. Der Listener-Funktion wird das `Port`-Objekt übergeben. Wenn der Port aufgrund eines Fehlers getrennt wurde, enthält das `Port`-Argument eine `error`-Eigenschaft, die weitere Informationen über den Fehler gibt:

    ```js
    port.onDisconnect.addListener((p) => {
      if (p.error) {
        console.log(`Disconnected due to an error: ${p.error.message}`);
      }
    });
    ```

    Beachten Sie, dass in Google Chrome `port.error` nicht unterstützt wird: stattdessen verwenden Sie {{WebExtAPIRef("runtime.lastError")}}, um die Fehlermeldung zu erhalten.

- `onMessage`
  - : `object`. Dies enthält die Funktionen `addListener()` und `removeListener()`, die allen Ereignissen für Erweiterungen, die die WebExtension-APIs verwenden, gemeinsam sind. Listener-Funktionen werden aufgerufen, wenn die andere Seite diesem Port eine Nachricht gesendet hat. Der Listener wird der Wert übergeben, den die andere Seite gesendet hat.
- `postMessage`
  - : `function`. Sendet eine Nachricht an die andere Seite. Dies nimmt ein Argument, das einen serialisierbaren Wert darstellt (siehe [Datenduplizierungs-Algorithmus](/de/docs/Mozilla/Add-ons/WebExtensions/Chrome_incompatibilities#data_cloning_algorithm)), der die zu sendende Nachricht repräsentiert. Es wird an jedes Skript übermittelt, das auf das `onMessage`-Ereignis des Ports hört, oder an die native Anwendung, wenn dieser Port mit einer nativen Anwendung verbunden ist.
- `sender` {{optional_inline}}
  - : {{WebExtAPIRef('runtime.MessageSender')}}. Enthält Informationen über den Absender der Nachricht. Nur vorhanden bei Ports, die den `{{WebExtAPIRef('runtime.onConnect')}}`, {{WebExtAPIRef('runtime.onConnectExternal')}} oder `{{WebExtAPIRef("runtime.onUserScriptConnect")}}-Listenern übergeben werden.

## Lebenszyklus

Der Lebenszyklus eines `Port` ist [in den Chrome-Dokumenten](https://developer.chrome.com/docs/extensions/develop/concepts/messaging#port-lifetime) beschrieben.

Es gibt jedoch einen wichtigen Unterschied zwischen Firefox und Chrome, der sich daraus ergibt, dass die `runtime.connect`- und `tabs.connect`-APIs als Broadcast-Kanäle fungieren. Dies bedeutet, dass es möglicherweise mehr als einen Empfänger gibt, was zu Mehrdeutigkeiten führt, wenn einer der Kontexte mit einem `runtime.onConnect`-Aufruf geschlossen wird. In Chrome bleibt ein Port aktiv, solange es einen anderen Empfänger gibt. In Firefox wird der Port geschlossen, wenn einer der Kontexte entladen wird. Mit anderen Worten, die Bedingung zum Trennen der Verbindung,

- Alle Frames, die den Port (über `runtime.onConnect`) empfangen haben, wurden entladen.

was in Chrome gilt, wird durch

- _Irgendein_ Frame, das den Port (über `runtime.onConnect`) empfangen hat, wurde entladen.

in Firefox ersetzt (siehe [Fehler 1465514](https://bugzil.la/1465514)).

## Beispiele

### Verbindung von Inhaltsskripten

Dieses Inhaltsskript:

- verbindet sich mit dem Hintergrundskript und speichert den `Port` in einer Variablen namens `myPort`.
- hört auf Nachrichten auf `myPort` und protokolliert sie.
- sendet Nachrichten an das Hintergrundskript, indem es `myPort` verwendet, wenn der Nutzer auf das Dokument klickt.

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

- horcht auf Verbindungsversuche vom Inhaltsskript.
- wenn es einen Verbindungsversuch erhält:
  - speichert es den Port in einer Variablen namens `portFromCS`.
  - sendet es dem Inhaltsskript eine Nachricht über den Port.
  - beginnt es, auf empfangene Nachrichten über den Port zu hören und protokolliert sie.

- sendet Nachrichten an das Inhaltsskript, indem es `portFromCS` verwendet, wenn der Nutzer auf die Browseraktion der Erweiterung klickt.

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

Wenn Sie gleichzeitig mehrere Inhaltsskripte haben, die kommunizieren, möchten Sie möglicherweise jede Verbindung in einem Array speichern.

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

Dieses Beispiel verbindet sich mit der nativen Anwendung "ping_pong" und beginnt, Nachrichten von ihr zu empfangen. Es sendet der nativen Anwendung auch eine Nachricht, wenn der Nutzer ein Browseraktions-Icon klickt:

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
> Diese API basiert auf Chromium's [`chrome.runtime`](https://developer.chrome.com/docs/extensions/reference/api/runtime#type-Port) API. Diese Dokumentation stammt aus [`runtime.json`](https://chromium.googlesource.com/chromium/src/+/master/extensions/common/api/runtime.json) im Chromium-Code.

<!--
// Urheberrecht 2015 The Chromium Authors. Alle Rechte vorbehalten.
//
// Verteilung und Nutzung in Quell- und Binärformaten, mit oder ohne
// Modifikation, sind unter folgenden Bedingungen gestattet:
//
//    * Weiterverteilungen von Quellcode müssen das oben stehende Urheberrecht
// in dieser Liste der Bedingungen und den folgenden Haftungsausschluss
// enthalten.
//    * Weiterverteilungen im Binärformat müssen das oben stehende
// Urheberrecht, diese Liste der Bedingungen und den folgenden Haftungsausschluss
// in der Dokumentation und/oder anderen Materialien enthalten, die mit der
// Verteilung geliefert werden.
//    * Weder der Name Google Inc. noch die Namen ihrer
// Beiträge dürfen verwendet werden, um Produkte, die aus
// dieser Software abgeleitet sind, zu unterstützen oder zu bewerben ohne
// eine spezifische vorherige schriftliche Genehmigung.
//
// DIESE SOFTWARE WIRD VON DEN URHEBERRECHTSINHABERN UND BEITRAGENDEN
// "WIE BESEHEN" UND JEGLICHE AUSDRÜCKLICHE ODER STILLSCHWEIGENDE
// GARANTIEN, EINSCHLIESSLICH, ABER NICHT BESCHRÄNKT AUF DIE STILLSCHWEIGENDEN
// GARANTIEN DER MARKTGÄNGIGKEIT UND DER EIGNUNG FÜR EINEN BESTIMMTEN ZWECK,
// WERDEN AUSGESCHLOSSEN. IN KEINEM FALL SIND DIE URHEBERRECHTSINHABER
// ODER BEITRAGENDEN HAFTBAR FÜR JEGLICHE DIREKTEN, INDIREKTEN,
// ZUFÄLLIGEN, SPEZIELLEN, EXEMPLARISCHEN ODER FOLGESCHÄDEN
// (EINSCHLIESSLICH, ABER NICHT BESCHRÄNKT AUF DIE BESCHAFFUNG VON
// ERSATZGÜTERN ODER -DIENSTLEISTUNGEN; NUTZUNGSAUSFALL; DATENVERLUST
// ODER ENTGANGENER GEWINN; ODER GESCHÄFTSUNTERBRECHUNG) JEDOCH
// UND UNABHÄNGIG VON DER THEORIE DER HAFTUNG, OB IN VERTRAG, STRIKTER
// HAFTUNG ODER UNERLAUBTER HANDLUNG (EINSCHLIESSLICH FAHRLÄSSIGKEIT)
// DIE AUS DER NUTZUNG DIESER SOFTWARE ENTSTEHEN, SELBST WENN DER
// MÖGLICHKEIT SOLCHER SCHÄDEN HINGEWIESEN WURDE.
-->
