---
title: runtime.connectNative()
slug: Mozilla/Add-ons/WebExtensions/API/runtime/connectNative
l10n:
  sourceCommit: 09109b6f9444d22215ba330ec1e64e73980b2a6c
---

Verbindet die Erweiterung mit einer nativen Anwendung auf dem Computer des Benutzers. Dies nimmt den Namen einer nativen Anwendung als Parameter. Es startet die native Anwendung und gibt ein {{WebExtAPIRef("runtime.Port")}}-Objekt an den Aufrufer zurück. Der Aufrufer kann dann den `Port` verwenden, um Nachrichten mit der nativen Anwendung auszutauschen, indem er `Port.postMessage()` und `port.onMessage` nutzt. Die native Anwendung läuft, bis sie sich selbst beendet, der Aufrufer `Port.disconnect()` aufruft, oder die Seite, die den `Port` erstellt hat, zerstört wird. Sobald der `Port` getrennt ist, gibt der Browser dem Prozess einige Sekunden Zeit, um sich reibungslos zu beenden, und beendet ihn dann, falls er nicht beendet wurde.

Für weitere Informationen siehe [Native Messaging](/de/docs/Mozilla/Add-ons/WebExtensions/Native_messaging).

## Syntax

```js-nolint
let port = browser.runtime.connectNative(
  application // string
)
```

### Parameter

- `application`
  - : `string`. Der Name der nativen Anwendung, zu der verbunden werden soll. Dies muss mit der "name"-Eigenschaft in der [Manifestdatei der nativen Anwendung](/de/docs/Mozilla/Add-ons/WebExtensions/Native_messaging#app_manifest) übereinstimmen.

### Rückgabewert

Ein {{WebExtAPIRef('runtime.Port')}}-Objekt. Der Port, den der Aufrufer verwenden kann, um Nachrichten mit der nativen Anwendung auszutauschen.

## Beispiele

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

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf Chromiums [`chrome.runtime`](https://developer.chrome.com/docs/extensions/reference/api/runtime#method-connectNative) API. Diese Dokumentation ist von [`runtime.json`](https://chromium.googlesource.com/chromium/src/+/master/extensions/common/api/runtime.json) im Chromium-Code abgeleitet.
