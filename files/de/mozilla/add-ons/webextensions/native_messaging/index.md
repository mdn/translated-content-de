---
title: Native Messaging
slug: Mozilla/Add-ons/WebExtensions/Native_messaging
l10n:
  sourceCommit: d7143e171b5f18fb37a686a7d4947db417fd74f3
---

{{AddonSidebar}}

**Native Messaging** ermöglicht es einer Erweiterung, Nachrichten mit einer nativen Anwendung auf dem Computer des Benutzers auszutauschen. Das Native Messaging dient den Erweiterungen, ohne zusätzliche Zugriffe über das Web zu benötigen.

Passwortmanager: Die native Anwendung verwaltet, speichert und verschlüsselt Passwörter. Anschließend kommuniziert die native Anwendung mit der Erweiterung, um Webformulare auszufüllen.

Native Messaging ermöglicht es auch Erweiterungen, auf Ressourcen zuzugreifen, die über WebExtension-APIs nicht zugänglich sind (z.B. bestimmte Hardware).

Die native Anwendung wird nicht vom Browser installiert oder verwaltet. Die native Anwendung wird mit den Installationsmechanismen des zugrunde liegenden Betriebssystems installiert. Erstellen Sie eine JSON-Datei, die als "Host Manifest" oder "App Manifest" bezeichnet wird. Installieren Sie die JSON-Datei an einem definierten Ort. Die App-Manifestdatei beschreibt, wie der Browser eine Verbindung zur nativen Anwendung herstellen kann.

Die Erweiterung muss die `"nativeMessaging"` [Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions) oder [optionale Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/optional_permissions) in der `manifest.json`-Datei anfordern. Außerdem muss die native Anwendung der Erweiterung die Erlaubnis erteilen, indem sie die ID im Feld `"allowed_extensions"` des App Manifests einfügt.

Nach der Installation kann die Erweiterung JSON-Nachrichten mit der nativen Anwendung austauschen. Verwenden Sie eine Reihe von Funktionen in der {{WebExtAPIRef("runtime")}} API. Auf der nativen App-Seite werden Nachrichten mit Standardeingabe (`stdin`) empfangen und mit Standardausgabe (`stdout`) gesendet.

![Ablauf der Anwendung: die JSON-Datei der nativen App befindet sich auf dem Computer des Benutzers und liefert Ressourceninformationen an die native Anwendung. Die Lese- und Schreibfunktionen der nativen Anwendung interagieren mit den Laufzeitereignissen der Browsererweiterung.](native-messaging.png)

Die Unterstützung von Native Messaging in Erweiterungen ist größtenteils mit Chrome kompatibel, mit zwei wesentlichen Unterschieden:

- Das App Manifest listet `allowed_extensions` als ein Array von App-IDs auf, während Chrome `allowed_origins` als ein Array von `"chrome-extension"`-URLs auflistet.
- Das App Manifest wird an einem anderen Ort gespeichert [im Vergleich zu Chrome](https://developer.chrome.com/docs/apps/nativeMessaging/#native-messaging-host-location).

Ein komplettes Beispiel finden Sie im ["`native-messaging`"-Verzeichnis](https://github.com/mdn/webextensions-examples/tree/main/native-messaging) des `"webextensions-examples"`-Repositorys auf GitHub. Der meiste Beispielcode in diesem Artikel stammt aus diesem Beispiel.

## Einrichtung

### Erweiterungsmanifest

Erweiterung, die mit einer nativen Anwendung kommuniziert:

- Setzen Sie die `"nativeMessaging"` [Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions) oder [optionale Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/optional_permissions) in der [`manifest.json`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json) Datei.
- Geben Sie Ihre Add-on-ID explizit an. Verwenden Sie den Manifest-Schlüssel [`browser_specific_settings`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_specific_settings). (Das Manifest der App wird den Satz von Erweiterungen identifizieren, die das Verbinden mit den IDs erlauben).

Beispiel `manifest.json` Datei:

```json
{
  "description": "Native messaging example add-on",
  "manifest_version": 2,
  "name": "Native messaging example",
  "version": "1.0",
  "icons": {
    "48": "icons/message.svg"
  },

  "browser_specific_settings": {
    "gecko": {
      "id": "ping_pong@example.org",
      "strict_min_version": "50.0"
    }
  },

  "background": {
    "scripts": ["background.js"]
  },

  "browser_action": {
    "default_icon": "icons/message.svg"
  },

  "permissions": ["nativeMessaging"]
}
```

> [!NOTE]
> Chrome unterstützt den Schlüssel [browser_specific_settings](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_specific_settings) nicht. Sie müssen ein anderes Manifest ohne diesen Schlüssel verwenden, um ein entsprechendes WebExtension in Chrome zu installieren. Siehe [Chrome-Inkompatibilitäten unten](#than_text,_mode.).

> [!NOTE]
> Wenn Sie eine optionale Berechtigung verwenden, stellen Sie sicher, dass die Berechtigung erteilt wurde, und fordern Sie gegebenenfalls die Berechtigung des Benutzers mit der {{WebExtAPIRef("permissions")}} API an, bevor Sie mit der nativen Anwendung kommunizieren.

### App Manifest

Das App Manifest beschreibt dem Browser, wie er eine Verbindung zur nativen Anwendung herstellen kann.

Die App Manifest-Datei muss zusammen mit der nativen Anwendung installiert werden. Der Browser liest und validiert App Manifest-Dateien, installiert oder verwaltet sie jedoch nicht. Das Sicherheitsmodell für die Installation und Aktualisierung dieser Dateien ähnelt eher dem für native Anwendungen als dem für Erweiterungen, die WebExtension-APIs verwenden.

Für Details zur Syntax und dem Ort des nativen App Manifests, siehe [Native Manifeste](/de/docs/Mozilla/Add-ons/WebExtensions/Native_manifests).

Zum Beispiel, hier ist ein Manifest für die `"ping_pong"` native Anwendung:

```json
{
  "name": "ping_pong",
  "description": "Example host for native messaging",
  "path": "/path/to/native-messaging/app/ping_pong.py",
  "type": "stdio",
  "allowed_extensions": ["ping_pong@example.org"]
}
```

Dies ermöglicht der Erweiterung mit der ID `"ping_pong@example.org"` die Verbindung herzustellen, indem der Name `"ping_pong"` an die entsprechende {{WebExtAPIRef("runtime")}} API-Funktion übergeben wird. Die Anwendung selbst befindet sich unter `"/path/to/native-messaging/app/ping_pong.py"`.

> [!NOTE]
> Chrome identifiziert erlaubte Erweiterungen mit einem anderen Schlüssel: `allowed_origins`, indem die ID der WebExtension verwendet wird. Weitere Einzelheiten finden Sie [in der Chrome-Dokumentation](https://developer.chrome.com/docs/apps/nativeMessaging/#native-messaging-host) und siehe [Chrome-Inkompatibilitäten unten](#than_text,_mode.).

### Einrichtung für Windows

Beispielsweise können Sie auch die [README zur Native Messaging Erweiterung auf GitHub](https://github.com/SphinxKnight/webextensions-examples/tree/master/native-messaging#windows-setup) referenzieren. Wenn Sie Ihre lokale Einrichtung überprüfen möchten, nachdem Sie dieses Repository auf einer Windows-Maschine geklont haben, können Sie `check_config_win.py` ausführen, um einige Probleme zu beheben.

#### App Manifest

Im obigen Beispiel ist die native Anwendung ein Python-Skript. Es kann schwierig sein, Windows dazu zu bringen, Python-Skripte auf diese Weise zuverlässig auszuführen, daher ist eine Alternative, eine `.bat` Datei bereitzustellen und von dort aus auf das Manifest der Anwendung zu verlinken:

```json
{
  "name": "ping_pong",
  "description": "Example host for native messaging",
  "path": "c:\\path\\to\\native-messaging\\app\\ping_pong_win.bat",
  "type": "stdio",
  "allowed_extensions": ["ping_pong@example.org"]
}
```

(Siehe Hinweis oben zur [Chrome-Kompatibilität](#than_text,_mode.) bezüglich des Schlüssels `allowed_extensions` und dessen Pendant in Chrome).

Die Batch-Datei ruft dann das Python-Skript auf:

```bash
@echo off

python -u "c:\\path\\to\\native-messaging\\app\\ping_pong.py"
```

#### Registrierung

Der Browser findet die Erweiterung basierend auf den in der Registrierung an einem bestimmten Ort befindlichen Schlüsseln. Sie müssen diese entweder programmgesteuert mit Ihrer endgültigen Anwendung oder manuell hinzufügen, wenn Sie das Beispiel von GitHub verwenden. Für weitere Details siehe [Manifestort](/de/docs/Mozilla/Add-ons/WebExtensions/Native_manifests#manifest_location).

Am Beispiel vom `ping_pong`, falls Firefox verwendet wird (siehe [diese Seite für Chrome](https://developer.chrome.com/docs/apps/nativeMessaging/#native-messaging-host-location)), sollten eine der beiden Registrierungseinträge erstellt werden, damit das Messaging funktioniert:

- `HKEY_CURRENT_USER\Software\Mozilla\NativeMessagingHosts\ping_pong`
- `HKEY_LOCAL_MACHINE\Software\Mozilla\NativeMessagingHosts\ping_pong`

Der Standardwert für den Schlüssel sollte der Pfad zum _Anwendungs_-Manifest sein: z.B. `C:\Users\<meinBenutzername>\webextensions-examples\native-messaging\app\ping_pong.json`.

> [!NOTE]
> Wenn Sie Ihre Arbeit auf das Beispiel auf GitHub stützen, lesen Sie bitte [diesen Teil der README](https://github.com/SphinxKnight/webextensions-examples/tree/master/native-messaging#windows-setup) und überprüfen Sie die Ausgabe von `check_config_win.py`, bevor Sie die WebExtension in Ihrem Browser installieren.

## Nachrichtenaustausch

Mit der obigen Einrichtung kann eine Erweiterung JSON-Nachrichten mit einer nativen Anwendung austauschen.

### Erweiterungsseite

Native Messaging kann nicht direkt in Inhalts-Skripts verwendet werden. Sie müssen [es indirekt über Hintergrundskripts erledigen](/de/docs/Mozilla/Add-ons/WebExtensions/Content_scripts#communicating_with_background_scripts).

Es gibt hier zwei Muster, die verwendet werden: **Verbindungsbasiertes Messaging** und **Verbindungsloses Messaging**.

#### Verbindungsbasiertes Messaging

Bei diesem Muster rufen Sie {{WebExtAPIRef("runtime.connectNative()")}} auf und übergeben den Namen der Anwendung (den Wert der `"name"`-Eigenschaft im Manifest der App). Dadurch wird die Anwendung gestartet, wenn sie nicht bereits läuft, und ein {{WebExtAPIRef("runtime.Port")}}-Objekt an die Erweiterung zurückgegeben.

Zwei Argumente werden der nativen App beim Starten übergeben:

- Der vollständige Pfad zum App Manifest.
- (neu in Firefox 55) die ID (wie in den [browser_specific_settings](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_specific_settings) angegeben) der Erweiterung, die sie gestartet hat.

> [!NOTE]
> Chrome behandelt die übergebenen Argumente anders:
>
> - Unter Linux und Mac übergibt Chrome _ein_ Argument: den Ursprung der Erweiterung, die sie gestartet hat (in der Form `chrome-extension://[extensionID]`). Dies ermöglicht es der App, die Erweiterung zu identifizieren.
> - Unter Windows übergibt Chrome _zwei_ Argumente: das erste ist der Ursprung der Erweiterung, das zweite ist ein Handle zum Chrome-Native-Fenster, das die App gestartet hat.

Die Anwendung bleibt laufen, bis die Erweiterung `Port.disconnect()` aufruft oder die Seite, die die Verbindung hergestellt hat, geschlossen wird.

Um Nachrichten mit `Port` zu senden, rufen Sie dessen `postMessage()`-Funktion auf und übergeben die zu sendende JSON-Nachricht. Um Nachrichten mit `Port` zu empfangen, fügen Sie den Listener mit seiner `onMessage.addListener()`-Funktion hinzu.

Hier ist ein Beispiel für ein Hintergrundskript, das eine Verbindung zur `"ping_pong"`-App herstellt, Nachrichten von ihr empfängt und eine `"ping"`-Nachricht sendet, wann immer der Benutzer auf die Browseraktion klickt:

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

#### Verbindungsloses Messaging

Bei diesem Muster rufen Sie {{WebExtAPIRef("runtime.sendNativeMessage()")}} auf und übergeben es:

- den Namen der Anwendung
- die zu sendende JSON-Nachricht
- optional einen Rückruf.

Eine neue Instanz der App wird für jede Nachricht erstellt. Die App übergibt beim Starten zwei Argumente:

- den vollständigen Pfad zum App Manifest
- (neu in Firefox 55) die ID (wie in den [browser_specific_settings](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_specific_settings) angegeben) der Erweiterung, die sie gestartet hat.

Die erste Nachricht, die von der App gesendet wird, wird als Antwort auf den `sendNativeMessage()`-Aufruf behandelt und an den Rückruf weitergeleitet.

Hier ist das obige Beispiel, neu geschrieben zur Verwendung von `runtime.sendNativeMessage()`:

```js
function onResponse(response) {
  console.log(`Received ${response}`);
}

function onError(error) {
  console.log(`Error: ${error}`);
}

/*
On a click on the browser action, send the app a message.
*/
browser.browserAction.onClicked.addListener(() => {
  console.log("Sending:  ping");
  let sending = browser.runtime.sendNativeMessage("ping_pong", "ping");
  sending.then(onResponse, onError);
});
```

### App-Seite

Auf der Anwendungsseite verwenden Sie die Standardeingabe, um Nachrichten zu empfangen, und die Standardausgabe, um sie zu senden.

Jede Nachricht wird im JSON-Format serialisiert, UTF-8-codiert und wird von einem 32-Bit-Unsigned-Wert begleitet, der die Nachrichtenlänge in nativer Byte-Reihenfolge enthält.

Die maximale Größe einer einzelnen Nachricht von der Anwendung beträgt 1 MB. Die maximale Größe einer Nachricht, die an die Anwendung gesendet wird, beträgt 4 GB.

Mit diesem NodeJS-Code, `nm_nodejs.mjs`, können Sie schnell mit dem Senden und Empfangen von Nachrichten beginnen:

```js
#!/usr/bin/env -S /full/path/to/node

import fs from "node:fs/promises";

async function getMessage() {
  const header = new Uint32Array(1);
  await readFullAsync(1, header);
  const message = await readFullAsync(header[0]);
  return message;
}

async function readFullAsync(length, buffer = new Uint8Array(65536)) {
  const data = [];
  while (data.length < length) {
    const input = await fs.open("/dev/stdin");
    const { bytesRead } = await input.read({ buffer });
    await input.close();
    if (bytesRead === 0) {
      break;
    }
    data.push(...buffer.subarray(0, bytesRead));
  }
  return new Uint8Array(data);
}

async function sendMessage(message) {
  const header = new Uint32Array([message.length]);
  const stdout = await fs.open(`/proc/${process.pid}/fd/1`, "w");
  await stdout.write(header);
  await stdout.write(message);
  await stdout.close();
}

while (true) {
  try {
    const message = await getMessage();
    await sendMessage(message);
  } catch (e) {
    console.error(e);
    process.exit(1);
  }
}
```

Hier ist ein weiteres Beispiel, geschrieben in Python. Es hört auf Nachrichten von der Erweiterung. Beachten Sie, dass die Datei unter Linux ausführbar sein muss. Wenn die Nachricht `"ping"` lautet, antwortet sie mit einer Nachricht `"pong"`.

Dies ist die Python 2 Version:

```python
#!/usr/bin/env -S python2 -u

# Note that running python with the `-u` flag is required on Windows,
# in order to ensure that stdin and stdout are opened in binary, rather
# than text, mode.

import json
import sys
import struct

# Read a message from stdin and decode it.
def get_message():
    raw_length = sys.stdin.read(4)
    if not raw_length:
        sys.exit(0)
    message_length = struct.unpack('=I', raw_length)[0]
    message = sys.stdin.read(message_length)
    return json.loads(message)

# Encode a message for transmission, given its content.
def encode_message(message_content):
    # https://docs.python.org/3/library/json.html#basic-usage
    # To get the most compact JSON representation, you should specify
    # (',', ':') to eliminate whitespace.
    # We want the most compact representation because the browser rejects
    # messages that exceed 1 MB.
    encoded_content = json.dumps(message_content, separators=(',', ':'))
    encoded_length = struct.pack('=I', len(encoded_content))
    return {'length': encoded_length, 'content': encoded_content}

# Send an encoded message to stdout.
def send_message(encoded_message):
    sys.stdout.write(encoded_message['length'])
    sys.stdout.write(encoded_message['content'])
    sys.stdout.flush()

while True:
    message = get_message()
    if message == "ping":
        send_message(encode_message("pong"))
```

In Python 3 müssen die empfangenen Binärdaten in eine Zeichenkette dekodiert werden. Der Inhalt, der an das Addon zurückgesendet wird, muss unter Verwendung einer Struktur in Binärdaten kodiert werden:

```python
#!/usr/bin/env -S python3 -u

# Note that running python with the `-u` flag is required on Windows,
# in order to ensure that stdin and stdout are opened in binary, rather
# than text, mode.

import sys
import json
import struct

# Read a message from stdin and decode it.
def getMessage():
    rawLength = sys.stdin.buffer.read(4)
    if len(rawLength) == 0:
        sys.exit(0)
    messageLength = struct.unpack('@I', rawLength)[0]
    message = sys.stdin.buffer.read(messageLength).decode('utf-8')
    return json.loads(message)

# Encode a message for transmission,
# given its content.
def encodeMessage(messageContent):
    # https://docs.python.org/3/library/json.html#basic-usage
    # To get the most compact JSON representation, you should specify
    # (',', ':') to eliminate whitespace.
    # We want the most compact representation because the browser rejects # messages that exceed 1 MB.
    encodedContent = json.dumps(messageContent, separators=(',', ':')).encode('utf-8')
    encodedLength = struct.pack('@I', len(encodedContent))
    return {'length': encodedLength, 'content': encodedContent}

# Send an encoded message to stdout
def sendMessage(encodedMessage):
    sys.stdout.buffer.write(encodedMessage['length'])
    sys.stdout.buffer.write(encodedMessage['content'])
    sys.stdout.buffer.flush()

while True:
    receivedMessage = getMessage()
    if receivedMessage == "ping":
        sendMessage(encodeMessage("pong"))
```

## Die native Anwendung schließen

Wenn Sie mit `runtime.connectNative()` eine Verbindung zur nativen Anwendung hergestellt haben, bleibt diese so lange laufen, bis die Erweiterung `Port.disconnect()` aufruft oder die Seite, die die Verbindung hergestellt hat, geschlossen wird. Wenn Sie die native Anwendung mit `runtime.sendNativeMessage()` gestartet haben, wird sie geschlossen, nachdem sie die Nachricht erhalten und eine Antwort gesendet hat.

Um die native Anwendung zu schließen:

- Auf \*nix-Systemen wie macOS und Linux sendet der Browser `SIGTERM` an die native Anwendung und danach `SIGKILL`, nachdem die Anwendung die Möglichkeit hatte, sauber zu beenden. Diese Signale werden an alle Unterprozesse weitergegeben, sofern sie sich nicht in eine neue Prozessgruppe lösen.
- Auf Windows setzt der Browser den Prozess der nativen Anwendung in ein [Job-Objekt](https://learn.microsoft.com/de-de/windows/win32/procthread/job-objects) und beendet den Job. Wenn die native Anwendung zusätzliche Prozesse startet und diese nach dem Beenden der nativen Anwendung weiterhin geöffnet bleiben sollen, muss die native Anwendung den zusätzlichen Prozess mit dem [`CREATE_BREAKAWAY_FROM_JOB`](https://learn.microsoft.com/de-de/windows/win32/procthread/process-creation-flags)-Flag starten, z. B. mit `CreateProcess`.

## Fehlerbehebung

Wenn etwas schief geht, überprüfen Sie die [Browserkonsole](https://extensionworkshop.com/documentation/develop/debugging/#viewing_log_output). Wenn die native Anwendung irgendeine Ausgabe an stderr sendet, leitet der Browser sie zur Browserkonsole um. Wenn Sie es geschafft haben, die native Anwendung zu starten, sehen Sie alle Fehlermeldungen, die sie ausgibt.

Wenn Sie es nicht geschafft haben, die Anwendung auszuführen, sollten Sie eine Fehlermeldung sehen, die Ihnen einen Hinweis auf das Problem gibt.

![](9-9c8d7bc.md)

- Überprüfen Sie, ob der Name, der an `runtime.connectNative()` übergeben wurde, mit dem Namen im App Manifest übereinstimmt.
- macOS/Linux: Überprüfen Sie, dass der Name des App Manifests `<name>.json` ist.
- macOS/Linux: Überprüfen Sie den Speicherort der Manifestdatei der nativen Anwendung, wie [hier](/de/docs/Mozilla/Add-ons/WebExtensions/Native_manifests#mac_os_x) erwähnt.
- Windows: Überprüfen Sie, dass der Registrierungsschlüssel am richtigen Ort ist und dass sein Name mit dem Namen im App Manifest übereinstimmt.
- Windows: Überprüfen Sie, dass der im Registrierungsschlüssel angegebene Pfad auf das App Manifest verweist.

  ```plain
  "Error: Invalid application <name>"
  ```

- Überprüfen Sie, dass der Name der Anwendung keine ungültigen Zeichen enthält.

  ```plain
  "'python' is not recognized as an internal or external command, ..."
  ```

- Windows: Wenn Ihre Anwendung ein Python-Skript ist, überprüfen Sie, dass Sie Python installiert haben und Ihr Pfad dafür eingerichtet ist.

  ```plain
  "File at path <path> does not exist, or is not executable"
  ```

- Wenn Sie dies sehen, wurde das App Manifest erfolgreich gefunden.
- Überprüfen Sie, dass der "path" im Manifest der App korrekt ist.
- Windows: Überprüfen Sie, dass Sie die Pfadtrenner escapet haben (`"c:\\path\\to\\file"`).
- Überprüfen Sie, dass sich die App an dem Standort befindet, der durch die `"path"`-Eigenschaft im Manifest der App angegeben ist.
- Überprüfen Sie, dass die App ausführbar ist.

  ```plain
  "This extension does not have permission to use native application <name>"
  ```

- Überprüfen Sie, dass der Schlüssel `"allowed_extensions"` im App Manifest die ID des Add-ons enthält.

  ```plain
      "TypeError: browser.runtime.connectNative is not a function"
  ```

- Überprüfen Sie, dass die Erweiterung die `"nativeMessaging"`-Berechtigung hat.

  ```plain
  "[object Object]       NativeMessaging.jsm:218"
  ```

- Es gab ein Problem beim Starten der Anwendung.

## Chrome-Inkompatibilitäten

Es gibt eine Reihe von Unterschieden zwischen Browsern, die sich auf das Native Messaging in WebExtensions auswirken, einschließlich der an die native App übergebenen Argumente und des Speicherorts der Manifestdatei usw. Diese Unterschiede werden in [Chrome-Inkompatibilitäten > Native Messaging](/de/docs/Mozilla/Add-ons/WebExtensions/Chrome_incompatibilities#native_messaging) erörtert.
