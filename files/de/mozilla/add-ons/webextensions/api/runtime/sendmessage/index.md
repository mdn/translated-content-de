---
title: runtime.sendMessage()
slug: Mozilla/Add-ons/WebExtensions/API/runtime/sendMessage
l10n:
  sourceCommit: 09109b6f9444d22215ba330ec1e64e73980b2a6c
---

Sendet eine einzelne Nachricht an Ereignis-Listener innerhalb Ihrer Erweiterung oder einer anderen Erweiterung.

Wenn Sie an Ihre eigene Erweiterung senden, lassen Sie das Argument `extensionId` weg. Das {{WebExtAPIRef('runtime.onMessage')}}-Ereignis wird auf jeder Seite Ihrer Erweiterung ausgelöst, mit Ausnahme des Frames, der `runtime.sendMessage` aufgerufen hat.

Wenn Sie an eine andere Erweiterung senden, geben Sie das Argument `extensionId` an, das auf die ID der anderen Erweiterung gesetzt ist. {{WebExtAPIRef('runtime.onMessageExternal')}} wird in der anderen Erweiterung ausgelöst. Standardmäßig kann Ihre Erweiterung Nachrichten mit sich selbst und jeder anderen Erweiterung (definiert durch `extensionId`) austauschen. Der [`externally_connectable`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/externally_connectable)-Manifest-Schlüssel kann jedoch verwendet werden, um die Kommunikation auf bestimmte Erweiterungen zu beschränken.

Erweiterungen können mit dieser Methode keine Nachrichten an Inhalts-Skripte senden. Um Nachrichten an Inhalts-Skripte zu senden, verwenden Sie {{WebExtAPIRef('tabs.sendMessage')}}.

Dies ist eine asynchrone Funktion, die ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) zurückgibt.

> [!NOTE]
> Sie können auch einen [verbindungsbasierten Ansatz für den Nachrichtenaustausch](/de/docs/Mozilla/Add-ons/WebExtensions/Content_scripts#connection-based_messaging) verwenden.

## Syntax

```js-nolint
let sending = browser.runtime.sendMessage(
  extensionId,             // optional string
  message,                 // any
  options                  // optional object
)
```

### Parameter

- `extensionId` {{optional_inline}}
  - : `string`. Die ID der Erweiterung, an die die Nachricht gesendet werden soll. Geben Sie dies an, um die Nachricht an eine andere Erweiterung zu senden. Wenn der beabsichtigte Empfänger eine ID explizit mit dem [browser_specific_settings](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_specific_settings)-Schlüssel in der manifest.json festgelegt hat, sollte `extensionId` diesen Wert haben. Andernfalls sollte es die ID haben, die für den beabsichtigten Empfänger generiert wurde.

    Wenn `extensionId` weggelassen wird, wird die Nachricht an Ihre Erweiterung gesendet.

- `message`
  - : `any`. Ein Objekt, das strukturiert kopierbar serialisiert werden kann (siehe [Datenkopieralgorithmus](/de/docs/Mozilla/Add-ons/WebExtensions/Chrome_incompatibilities#data_cloning_algorithm)).
- `options` {{optional_inline}}
  - : `object`.
    - `includeTlsChannelId` {{optional_inline}}
      - : `boolean`. Ob die TLS-Kanal-ID in {{WebExtAPIRef('runtime.onMessageExternal')}} für Prozesse, die auf das Verbindungsevent lauschen, übergeben wird.

        Diese Option wird nur in Chromium-basierten Browsern unterstützt.

Abhängig von den übergebenen Argumenten ist diese API manchmal mehrdeutig. Die folgenden Regeln werden angewendet:

- **Wenn ein Argument übergeben wird**, ist es die zu sendende Nachricht, und die Nachricht wird intern gesendet.
- **Wenn zwei Argumente übergeben werden:**
  - Die Argumente werden als `(message, options)` interpretiert, und die Nachricht wird intern gesendet, wenn das zweite Argument eine der folgenden Optionen ist:
    1. ein gültiges `options`-Objekt (das bedeutet, es ist ein Objekt, das nur die vom Browser unterstützten Eigenschaften von `options` enthält)
    2. null
    3. undefined

  - andernfalls werden die Argumente als `(extensionId, message)` interpretiert. Die Nachricht wird an die durch `extensionId` identifizierte Erweiterung gesendet.

- **Wenn drei Argumente übergeben werden**, werden die Argumente als `(extensionId, message, options)` interpretiert. Die Nachricht wird an die durch `extensionId` identifizierte Erweiterung gesendet.

Beachten Sie, dass vor Firefox 55 die Regeln im Fall von zwei Argumenten anders waren. Nach den alten Regeln wurde, wenn das erste Argument ein String war, es als `extensionId` behandelt, und die Nachricht war das zweite Argument. Das bedeutete, wenn Sie `sendMessage()` mit Argumenten wie `("my-message", {})` aufriefen, dann würde es eine leere Nachricht an die durch "my-message" identifizierte Erweiterung senden. Nach den neuen Regeln würden Sie mit diesen Argumenten die Nachricht "my-message" intern senden, mit einem leeren options-Objekt.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise). Wenn der Empfänger eine Antwort gesendet hat, wird dieses Promise mit der Antwort erfüllt. Andernfalls wird es ohne Argumente erfüllt. Wenn beim Verbindungsaufbau zur Erweiterung ein Fehler auftritt, wird das Promise mit einer Fehlermeldung abgelehnt.

## Beispiele

Hier ist ein Inhalts-Skript, das eine Nachricht an das Hintergrundskript sendet, wenn der Benutzer auf das Inhaltsfenster klickt. Die Nachrichtennutzlast ist `{greeting: "Greeting from the content script"}`, und der Sender erwartet auch, eine Antwort zu erhalten, die in der Funktion `handleResponse` verarbeitet wird:

```js
// content-script.js

function handleResponse(message) {
  console.log(`Message from the background script: ${message.response}`);
}

function handleError(error) {
  console.log(`Error: ${error}`);
}

function notifyBackgroundPage(e) {
  const sending = browser.runtime.sendMessage({
    greeting: "Greeting from the content script",
  });
  sending.then(handleResponse, handleError);
}

window.addEventListener("click", notifyBackgroundPage);
```

Das entsprechende Hintergrundskript sieht so aus:

```js
// background-script.js
function handleMessage(request, sender, sendResponse) {
  console.log(`A content script sent a message: ${request.greeting}`);
  sendResponse({ response: "Response from background script" });
}

browser.runtime.onMessage.addListener(handleMessage);
```

> [!NOTE]
> Anstelle der Verwendung von `sendResponse()` ist es der empfohlene Ansatz für Firefox-Add-ons, ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) zurückzugeben.
> Beispiele zur Verwendung eines Promise finden Sie im [Beispiele-Abschnitt](/de/docs/Mozilla/Add-ons/WebExtensions/API/runtime/onMessage#examples) des {{WebExtAPIRef('runtime.onMessage')}}-Listeners.

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf der [`chrome.runtime`](https://developer.chrome.com/docs/extensions/reference/api/runtime#method-sendMessage) API von Chromium. Diese Dokumentation stammt von [`runtime.json`](https://chromium.googlesource.com/chromium/src/+/master/extensions/common/api/runtime.json) im Chromium-Code.
