---
title: runtime.onUserScriptMessage
slug: Mozilla/Add-ons/WebExtensions/API/runtime/onUserScriptMessage
l10n:
  sourceCommit: 814f49dc14eb8c8a15c6c3bdc6c83d24ed865cdf
---

{{AddonSidebar}}

Verwenden Sie dieses Ereignis, um Nachrichten zu empfangen, die von einer der Erweiterungen in den [`USER_SCRIPT`-Welten](/de/docs/Mozilla/Add-ons/WebExtensions/API/userScripts/ExecutionWorld) gesendet werden.

In Firefox erfordert dieses Ereignis die Berechtigung [`userScripts`](/de/docs/Mozilla/Add-ons/WebExtensions/API/userScripts#permissions). In Chrome ist das Ereignis immer verfügbar, auch in Erweiterungen, die keine `userScripts`-Berechtigung angeben.

Ein Userscript kann nur Nachrichten senden, indem es {{WebExtAPIRef('runtime.sendMessage')}} aus einer `USER_SCRIPT`-Welt verwendet, die mit `messaging` auf `true` konfiguriert ist durch {{WebExtAPIRef('userScripts.configureWorld()')}}.

Zusammen mit der Nachricht wird dem Listener Folgendes übergeben:

- ein `sender`-Objekt mit Details über den Absender der Nachricht.
- eine `sendResponse`-Funktion, die der Listener verwenden kann, um eine Antwort an den Absender zurückzusenden.

## Syntax

```js-nolint
browser.runtime.onUserScriptMessage.addListener(listener)
browser.runtime.onUserScriptMessage.removeListener(listener)
browser.runtime.onUserScriptMessage.hasListener(listener)
```

Ereignisse haben drei Funktionen:

- `addListener(listener)`
  - : Fügt diesem Ereignis einen Listener hinzu.
- `removeListener(listener)`
  - : Hört auf, auf dieses Ereignis zu lauschen. Das `listener`-Argument ist der zu entfernende Listener.
- `hasListener(listener)`
  - : Überprüft, ob ein `listener` für dieses Ereignis registriert ist. Gibt `true` zurück, wenn es lauscht, andernfalls `false`.

## addListener-Syntax

### Parameter

- `listener`

  - : Die Funktion, die aufgerufen wird, wenn dieses Ereignis eintritt. Der Funktion werden diese Argumente übergeben:

    - `message`
      - : `object`. Die Nachricht. Dies ist ein JSON-serialisierbares Objekt.
    - `sender`
      - : Ein {{WebExtAPIRef('runtime.MessageSender')}}-Objekt, das den Absender der Nachricht repräsentiert.
    - `sendResponse`

      - : Eine Funktion, die höchstens einmal aufgerufen wird, um eine Antwort auf die Nachricht zu senden. Die Funktion nimmt ein Argument, das ein JSON-serialisierbares Objekt ist. Dieses Argument wird an den Nachrichtenabsender zurückgegeben.

        Wenn Sie mehr als einen `onUserScriptMessage`-Listener im selben Dokument haben, kann nur einer eine Antwort senden.

        Um synchron eine Antwort zu senden, rufen Sie `sendResponse` auf, bevor die Listener-Funktion zurückkehrt. Um eine Antwort asynchron zu senden, tun Sie eine der folgenden Dinge:

        - Behalten Sie eine Referenz auf das `sendResponse`-Argument und geben Sie `true` von der Listener-Funktion zurück. Sie können dann `sendResponse` aufrufen, nachdem die Listener-Funktion zurückgekehrt ist.
        - Geben Sie ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) von der Listener-Funktion zurück und lösen Sie das Versprechen, wenn die Antwort bereit ist.

## Beispiele

In diesem Beispiel sendet ein Userscript in einer `USER_SCRIPT`-Welt mit der ID `myScriptWorld` eine Nachricht an die Erweiterung, die sie registriert hat:

```js
// The user script
// Send a message to the extension that registered the user script
browser.runtime.sendMessage("my message");
```

```js
// The extension that registered the user script

function handleMessage(message, sender) {
  // check that the message originated from "myScriptWorld" world
  if (sender.userScriptWorldId === "myScriptWorld") {
    // process message
    console.log(message);
  }
}

browser.runtime.onUserScriptMessage.addListener(handleMessage);
```

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}
