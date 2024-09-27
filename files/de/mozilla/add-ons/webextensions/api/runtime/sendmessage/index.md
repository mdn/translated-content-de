---
title: runtime.sendMessage()
slug: Mozilla/Add-ons/WebExtensions/API/runtime/sendMessage
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{AddonSidebar}}

Sendet eine einzelne Nachricht an Ereignis-Listener innerhalb Ihrer Erweiterung oder einer anderen Erweiterung.

Wenn Sie an Ihre eigene Erweiterung senden, lassen Sie das Argument `extensionId` weg. Das {{WebExtAPIRef('runtime.onMessage')}}-Ereignis wird auf jeder Seite Ihrer Erweiterung ausgelöst, außer in dem Frame, der `runtime.sendMessage` aufgerufen hat.

Wenn Sie an eine andere Erweiterung senden, fügen Sie das Argument `extensionId` mit der ID der anderen Erweiterung hinzu. {{WebExtAPIRef('runtime.onMessageExternal')}} wird in der anderen Erweiterung ausgelöst. Standardmäßig kann Ihre Erweiterung Nachrichten mit sich selbst und einer anderen Erweiterung (definiert durch `extensionId`) austauschen. Jedoch kann der [`externally_connectable`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/externally_connectable) Manifest-Schlüssel verwendet werden, um die Kommunikation auf bestimmte Erweiterungen zu beschränken.

Erweiterungen können mit dieser Methode keine Nachrichten an Inhaltsskripte senden. Um Nachrichten an Inhaltsskripte zu senden, verwenden Sie {{WebExtAPIRef('tabs.sendMessage')}}.

Dies ist eine asynchrone Funktion, die ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) zurückgibt.

> [!NOTE]
> Sie können auch einen [verbindungsbasierten Ansatz zum Nachrichtenaustausch verwenden](/de/docs/Mozilla/Add-ons/WebExtensions/Content_scripts#connection-based_messaging).

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

  - : `string`. Die ID der Erweiterung, an die die Nachricht gesendet werden soll. Fügen Sie dies hinzu, um die Nachricht an eine andere Erweiterung zu senden. Wenn der beabsichtigte Empfänger eine ID explizit mit dem [browser_specific_settings](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_specific_settings)-Schlüssel in manifest.json festgelegt hat, sollte `extensionId` diesen Wert haben. Andernfalls sollte es die für den beabsichtigten Empfänger generierte ID sein.

    Wird `extensionId` weggelassen, wird die Nachricht an Ihre Erweiterung gesendet.

- `message`
  - : `any`. Ein Objekt, das strukturiert klonserialisiert werden kann (siehe [Datenklon-Algorithmus](/de/docs/Mozilla/Add-ons/WebExtensions/Chrome_incompatibilities#data_cloning_algorithm)).
- `options` {{optional_inline}}

  - : `object`.

    - `includeTlsChannelId` {{optional_inline}}

      - : `boolean`. Ob die TLS-Kanal-ID in {{WebExtAPIRef('runtime.onMessageExternal')}} für Prozesse übergeben wird, die auf das Verbindungsereignis hören.

        Diese Option wird nur in Chromium-basierten Browsern unterstützt.

Je nach den gegebenen Argumenten ist diese API manchmal mehrdeutig. Die folgenden Regeln werden verwendet:

- **wenn ein Argument angegeben ist**, ist es die Nachricht, die gesendet werden soll, und die Nachricht wird intern gesendet.
- **wenn zwei Argumente angegeben sind:**

  - Die Argumente werden interpretiert als `(message, options)`, und die Nachricht wird intern gesendet, wenn das zweite Argument eines der folgenden ist:

    1. ein gültiges `options`-Objekt (d.h. es handelt sich um ein Objekt, das nur die Eigenschaften von `options` enthält, die der Browser unterstützt)
    2. null
    3. undefined

  - andernfalls werden die Argumente als `(extensionId, message)` interpretiert. Die Nachricht wird an die durch `extensionId` identifizierte Erweiterung gesendet.

- **wenn drei Argumente angegeben sind**, werden die Argumente als `(extensionId, message, options)` interpretiert. Die Nachricht wird an die durch `extensionId` identifizierte Erweiterung gesendet.

Beachten Sie, dass vor Firefox 55 die Regeln im 2-Argument-Fall unterschiedlich waren. Nach den alten Regeln, wenn das erste Argument eine Zeichenfolge war, wurde es als `extensionId` behandelt, mit der Nachricht als zweites Argument. Dies bedeutete, dass wenn Sie `sendMessage()` mit Argumenten wie `("my-message", {})` aufgerufen haben, es eine leere Nachricht an die durch "my-message" identifizierte Erweiterung senden würde. Nach den neuen Regeln würden Sie mit diesen Argumenten die Nachricht "my-message" intern senden, mit einem leeren Optionsobjekt.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise). Wenn der Empfänger eine Antwort gesendet hat, wird dieses mit der Antwort erfüllt. Andernfalls wird es ohne Argumente erfüllt. Wenn ein Fehler beim Verbinden mit der Erweiterung auftritt, wird das Promise mit einer Fehlermeldung abgelehnt.

## Browser-Kompatibilität

{{Compat}}

## Beispiele

Hier ist ein Inhaltsskript, das beim Klicken des Benutzers auf das Inhaltsfenster eine Nachricht an das Hintergrundskript sendet. Die Nachrichten-Nutzlast ist `{greeting: "Greeting from the content script"}`, und der Absender erwartet auch, eine Antwort zu erhalten, die in der Funktion `handleResponse` behandelt wird:

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

Das entsprechende Hintergrundskript sieht folgendermaßen aus:

```js
// background-script.js
function handleMessage(request, sender, sendResponse) {
  console.log(`A content script sent a message: ${request.greeting}`);
  sendResponse({ response: "Response from background script" });
}

browser.runtime.onMessage.addListener(handleMessage);
```

> [!NOTE]
> Anstatt `sendResponse()` zu verwenden, wird die Rückgabe eines [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) als empfohlener Ansatz für Firefox-Add-ons angesehen. Beispiele, die ein Promise verwenden, finden Sie im [Beispielabschnitt](/de/docs/Mozilla/Add-ons/WebExtensions/API/runtime/onMessage#examples) des {{WebExtAPIRef('runtime.onMessage')}}-Listeners.

{{WebExtExamples}}

> [!NOTE]
> Diese API basiert auf Chromium's [`chrome.runtime`](https://developer.chrome.com/docs/extensions/reference/api/runtime#method-sendMessage) API. Diese Dokumentation ist aus [`runtime.json`](https://chromium.googlesource.com/chromium/src/+/master/extensions/common/api/runtime.json) im Chromium-Code abgeleitet.
