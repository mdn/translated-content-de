---
title: runtime.onUserScriptMessage
slug: Mozilla/Add-ons/WebExtensions/API/runtime/onUserScriptMessage
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{AddonSidebar}}

Verwenden Sie dieses Ereignis, um Nachrichten zu empfangen, die von einer der Erweiterung [`USER_SCRIPT`-Welten](/de/docs/Mozilla/Add-ons/WebExtensions/API/userScripts/ExecutionWorld) gesendet wurden.

In Firefox erfordert dieses Ereignis die Berechtigung [`userScripts`](/de/docs/Mozilla/Add-ons/WebExtensions/API/userScripts#permissions). In Chrome ist das Ereignis immer vorhanden, auch in Erweiterungen, die die Berechtigung `userScripts` nicht deklarieren.

Ein Benutzer-Skript kann nur Nachrichten mit {{WebExtAPIRef('runtime.sendMessage')}} von einer `USER_SCRIPT`-Welt senden, die mit {{WebExtAPIRef('userScripts.configureWorld()')}} konfiguriert wurde und bei der `messaging` auf `true` gesetzt ist.

Zusammen mit der Nachricht wird dem Listener folgendes übergeben:

- ein `sender`-Objekt mit Details über den Absender der Nachricht.
- eine `sendResponse`-Funktion, die der Listener verwenden kann, um eine Antwort an den Absender zu senden.

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
  - : Stoppt das Lauschen dieses Ereignisses. Das `listener`-Argument ist der zu entfernende Listener.
- `hasListener(listener)`
  - : Überprüft, ob ein `listener` für dieses Ereignis registriert ist. Gibt `true` zurück, wenn er lauscht, andernfalls `false`.

## Syntax von addListener

### Parameter

- `listener`

  - : Die Funktion, die aufgerufen wird, wenn dieses Ereignis eintritt. Der Funktion werden diese Argumente übergeben:

    - `message`
      - : `object`. Die Nachricht. Dies ist ein JSON-fähiges Objekt.
    - `sender`
      - : Ein {{WebExtAPIRef('runtime.MessageSender')}}-Objekt, das den Absender der Nachricht darstellt.
    - `sendResponse`

      - : Eine Funktion, die maximal einmal aufgerufen wird, um eine Antwort auf die Nachricht zu senden. Die Funktion nimmt ein Argument, das jedes JSON-fähige Objekt sein kann. Dieses Argument wird an den Absender der Nachricht zurückgegeben.

        Wenn Sie mehr als einen `onUserScriptMessage`-Listener im selben Dokument haben, kann nur einer eine Antwort senden.

        Um eine Antwort synchron zu senden, rufen Sie `sendResponse` auf, bevor die Listener-Funktion zurückkehrt. Um eine Antwort asynchron zu senden, tun Sie eines der Folgenden:

        - Behalten Sie eine Referenz auf das `sendResponse`-Argument und geben Sie `true` aus der Listener-Funktion zurück. Sie können dann `sendResponse` aufrufen, nachdem die Listener-Funktion zurückgegeben hat.
        - Geben Sie ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) aus der Listener-Funktion zurück und lösen Sie das Versprechen ein, wenn die Antwort bereit ist.

## Beispiele

In diesem Beispiel sendet ein Benutzer-Skript in einer `USER_SCRIPT`-Welt mit der ID `myScriptWorld` eine Nachricht an die Erweiterung, die es registriert hat:

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
