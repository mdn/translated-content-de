---
title: runtime.onMessageExternal
slug: Mozilla/Add-ons/WebExtensions/API/runtime/onMessageExternal
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{AddonSidebar}}

Verwenden Sie dieses Ereignis, um Nachrichten von anderen Erweiterungen oder Webseiten zu empfangen.

Standardmäßig kann eine Erweiterung Nachrichten von jeder anderen Erweiterung empfangen. Der Manifest-Schlüssel [`externally_connectable`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/externally_connectable) kann jedoch verwendet werden, um die Kommunikation auf bestimmte Erweiterungen zu beschränken und die Kommunikation mit Webseiten zu ermöglichen.

Um eine Nachricht zu senden, die vom `onMessageExternal`-Listener empfangen wird, verwenden Sie {{WebExtAPIRef("runtime.sendMessage()")}} und übergeben Sie die ID des Empfängers im Parameter `extensionId`.

Zusammen mit der Nachricht selbst wird dem Listener folgendes übergeben:

- ein `sender`-Objekt, das Details über den Absender der Nachricht enthält
- eine `sendResponse`-Funktion, die der Listener verwenden kann, um eine Antwort an den Absender zu senden.

Diese API kann nicht in einem Content-Skript verwendet werden.

## Syntax

```js-nolint
browser.runtime.onMessageExternal.addListener()
browser.runtime.onMessageExternal.removeListener(listener)
browser.runtime.onMessageExternal.hasListener(listener)
```

Ereignisse haben drei Funktionen:

- `addListener(listener)`
  - : Fügt diesem Ereignis einen Listener hinzu.
- `removeListener(listener)`
  - : Beendet das Zuhören auf dieses Ereignis. Das Argument `listener` ist der zu entfernende Listener.
- `hasListener(listener)`
  - : Überprüft, ob ein `listener` für dieses Ereignis registriert ist. Gibt `true` zurück, wenn es zuhört, andernfalls `false`.

## addListener-Syntax

### Parameter

- `listener`

  - : Die Funktion, die aufgerufen wird, wenn dieses Ereignis eintritt. Der Funktion werden folgende Argumente übergeben:

    - `message`
      - : `object`. Die Nachricht selbst. Dies ist ein JSON-fähiges Objekt.
    - `sender`
      - : Ein {{WebExtAPIRef('runtime.MessageSender')}}-Objekt, das den Absender der Nachricht darstellt.
    - `sendResponse`

      - : Eine Funktion, die höchstens einmal aufgerufen wird, um eine Antwort auf die Nachricht zu senden. Die Funktion nimmt ein einzelnes Argument, welches ein JSON-fähiges Objekt sein kann. Dieses Argument wird an den Nachrichtenabsender zurückgegeben.

        Wenn Sie mehr als einen `onMessageExternal`-Listener im gleichen Dokument haben, dann darf nur einer eine Antwort senden.

        Um eine Antwort synchron zu senden, rufen Sie `sendResponse` auf, bevor die Listener-Funktion zurückkehrt. Um eine Antwort asynchron zu senden, tun Sie eines der folgenden:

        - Behalten Sie eine Referenz zum `sendResponse`-Argument und geben Sie `true` aus der Listener-Funktion zurück. Sie können dann `sendResponse` aufrufen, nachdem die Listener-Funktion zurückgekehrt ist.
        - Geben Sie ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) aus der Listener-Funktion zurück und lösen Sie das Versprechen, wenn die Antwort bereit ist.

## Browser-Kompatibilität

{{Compat}}

## Beispiele

In diesem Beispiel sendet die Erweiterung "blue\@mozilla.org" eine Nachricht an die Erweiterung "red\@mozilla.org":

```js
// sender: browser.runtime.id === "blue@mozilla.org"

// Send a message to the extension whose ID is "red@mozilla.org"
browser.runtime.sendMessage("red@mozilla.org", "my message");
```

```js
// recipient: browser.runtime.id === "red@mozilla.org"

function handleMessage(message, sender) {
  // check that the message is from "blue@mozilla.org"
  if (sender.id === "blue@mozilla.org") {
    // process message
  }
}

browser.runtime.onMessageExternal.addListener(handleMessage);
```

{{WebExtExamples}}

> [!NOTE]
> Diese API basiert auf der Chromium-API [`chrome.runtime`](https://developer.chrome.com/docs/extensions/reference/api/runtime#event-onMessageExternal). Diese Dokumentation ist aus [`runtime.json`](https://chromium.googlesource.com/chromium/src/+/master/extensions/common/api/runtime.json) im Chromium-Code abgeleitet.
