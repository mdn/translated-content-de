---
title: runtime.connect()
slug: Mozilla/Add-ons/WebExtensions/API/runtime/connect
l10n:
  sourceCommit: 09109b6f9444d22215ba330ec1e64e73980b2a6c
---

Stellen Sie eine Verbindung zwischen verschiedenen Kontexten innerhalb der Erweiterung her.

Diese Funktion kann aufgerufen werden:

- in den Inhalts-Skripten einer Erweiterung, um eine Verbindung mit den Hintergrund-Skripten der Erweiterung (oder ähnlich privilegierten Skripten, wie Popup-Skripten oder Optionsseiten-Skripten) herzustellen.
- in den Hintergrund-Skripten einer Erweiterung (oder ähnlich privilegierten Skripten), um eine Verbindung mit einer anderen Erweiterung herzustellen.

Beachten Sie, dass Sie diese Funktion nicht verwenden können, um eine Erweiterung mit ihren Inhalts-Skripten zu verbinden. Verwenden Sie dafür {{WebExtAPIRef('tabs.connect()')}}.

Standardmäßig ermöglicht diese Verbindung der Erweiterung den Nachrichtenaustausch mit sich selbst oder einer anderen Erweiterung (falls `extensionId` angegeben ist). Der [`externally_connectable`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/externally_connectable) Manifest-Schlüssel kann jedoch verwendet werden, um die Kommunikation mit bestimmten Erweiterungen zu beschränken und die Kommunikation mit Websites zu ermöglichen. Verbindungen innerhalb der Erweiterung lösen das {{WebExtAPIRef('runtime.onConnect')}} Ereignis aus, Verbindungen von anderen Erweiterungen oder Webseiten lösen das {{WebExtAPIRef('runtime.onConnectExternal')}} Ereignis aus.

## Syntax

```js-nolint
let port = browser.runtime.connect(
  extensionId, // optional string
  connectInfo  // optional object
)
```

### Parameter

- `extensionId` {{optional_inline}}
  - : `string`. Die ID der Erweiterung, zu der die Verbindung hergestellt werden soll. Wenn das Ziel eine ID explizit mit dem Schlüssel [browser_specific_settings](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_specific_settings) in manifest.json festgelegt hat, sollte `extensionId` diesen Wert haben. Andernfalls sollte es die für das Ziel generierte ID haben.
- `connectInfo` {{optional_inline}}
  - : `object`. Details zur Verbindung:
    - `name` {{optional_inline}}
      - : `string`. Wird in {{WebExtAPIRef("runtime.onConnect")}} übergeben für Prozesse, die auf das Verbindungsevent warten.
    - `includeTlsChannelId` {{optional_inline}}
      - : `boolean`. Ob die TLS-Kanal-ID in {{WebExtAPIRef("runtime.onConnectExternal")}} übergeben wird für Prozesse, die auf das Verbindungsevent warten.

### Rückgabewert

{{WebExtAPIRef('runtime.Port')}}. Port, über den Nachrichten gesendet und empfangen werden können. Das `onDisconnect` Ereignis des Ports wird ausgelöst, wenn die Erweiterung nicht existiert.

## Beispiele

Dieses Inhalts-Skript:

- stellt eine Verbindung zum Hintergrund-Skript her und speichert den `Port` in einer Variablen namens `myPort`.
- hört auf Nachrichten auf `myPort` und protokolliert sie.
- sendet Nachrichten an das Hintergrund-Skript unter Verwendung von `myPort`, wenn der Benutzer auf das Dokument klickt.

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

Das zugehörige Hintergrund-Skript:

- hört auf Verbindungsversuche vom Inhalts-Skript.
- wenn es einen Verbindungsversuch erhält:
  - speichert es den Port in einer Variablen namens `portFromCS`.
  - sendet dem Inhalts-Skript eine Nachricht über den Port.
  - beginnt, Nachrichten zu hören, die auf dem Port empfangen werden, und protokolliert sie.

- sendet Nachrichten an das Inhalts-Skript unter Verwendung von `portFromCS`, wenn der Benutzer auf die Browseraktion der Erweiterung klickt.

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

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf der [`chrome.runtime`](https://developer.chrome.com/docs/extensions/reference/api/runtime#method-connect) API von Chromium. Diese Dokumentation ist abgeleitet von [`runtime.json`](https://chromium.googlesource.com/chromium/src/+/master/extensions/common/api/runtime.json) im Chromium-Code.

<!--
// Copyright 2015 The Chromium Authors. Alle Rechte vorbehalten.
//
// Die Weitergabe und Verwendung in Quell- und Binärformen, mit oder ohne
// Modifikation, ist unter den folgenden Bedingungen erlaubt:
//
//    * Weiterverteilungen des Quellcodes müssen den obigen Urheberrechtshinweis,
// diese Liste der Bedingungen und den folgenden Haftungsausschluss enthalten.
//    * Weiterverteilungen in binärer Form müssen den obigen
// Urheberrechtshinweis, diese Liste der Bedingungen und den folgenden Haftungsausschluss
// in der Dokumentation und/oder anderen Materialien enthalten, die mit der
// Verteilung geliefert werden.
//    * Weder der Name von Google Inc. noch die Namen seiner
// Beitragenden dürfen verwendet werden, um Produkte zu unterstützen oder zu fördern, die aus
// dieser Software abgeleitet sind, ohne spezifische vorherige schriftliche Genehmigung.
//
// DIESE SOFTWARE WIRD VON DEN COPYRIGHTINHABERN UND BEITRAGENDEN
// "WIE BESEHEN" BEREITGESTELLT UND JEGLICHE AUSDRÜCKLICHE ODER STILLSCHWEIGENDE GEWÄHRLEISTUNGEN,
// EINSCHLIESSLICH, ABER NICHT BESCHRÄNKT AUF, DIE STILLSCHWEIGENDEN GEWÄHRLEISTUNGEN DER MARKTGÄNGIGKEIT UND
// EIGNUNG FÜR EINEN BESTIMMTEN ZWECK WERDEN ABGELEHNT. IN KEINEM FALL SOLLEN DIE INHABER DER COPYRIGHTS
// ODER BEITRAGENDEN HAFTBAR GEMACHT WERDEN FÜR JEGLICHE DIREKTEN, INDIREKTEN, ZUFÄLLIGEN,
// SPEZIELLEN, EXEMPLARISCHEN ODER FOLGESCHÄDEN (EINSCHLIESSLICH, ABER NICHT
// BESCHRÄNKT AUF, BESCHAFFUNG VON ERSATZWARE ODER -DIENSTLEISTUNGEN; VERLUST VON
// NUTZUNGSDATEN ODER -GEWINNEN; ODER BETRIEBSUNTERBRECHUNG) JEDOCH
// ENTSTANDEN UND UNABHÄNGIG VON DER HAFTUNGSTHEORIE, OB IN
// VERTRAG, STRENGER HAFTUNG ODER UNERLAUBTER HANDLUNG (EINSCHLIESSLICH
// FAHRLÄSSIGKEIT ODER ANDERWEITIG) IN VERBINDUNG MIT DER VERWENDUNG DIESER
// SOFTWARE, SELBST WENN DER MÖGLICHKEIT EINER SOLCHEN SCHÄDEN GESAGT WURDE.
-->
