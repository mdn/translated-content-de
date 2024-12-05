---
title: Native Messaging
slug: Mozilla/Add-ons/WebExtensions/Native_messaging
l10n:
  sourceCommit: 3ee0546fc9f8452116d6ef597c450c5fc58a342b
---

{{AddonSidebar}}

**Native Messaging** ermöglicht einer Erweiterung, Nachrichten mit einer nativen Anwendung auszutauschen, die auf dem Computer des Benutzers installiert ist. Der native Nachrichtenaustausch bedient die Erweiterungen ohne zusätzliche Zugriffe über das Web.

Passwortmanager: Die native Anwendung verwaltet, speichert und verschlüsselt Passwörter. Dann kommuniziert die native Anwendung mit der Erweiterung, um Webformulare auszufüllen.

Native Messaging ermöglicht es Erweiterungen auch, auf Ressourcen zuzugreifen, die über WebExtension-APIs nicht zugänglich sind (z.B. bestimmte Hardware).

Die native Anwendung wird nicht vom Browser installiert oder verwaltet. Die native Anwendung wird mithilfe des Installationsmechanismus des zugrunde liegenden Betriebssystems installiert. Erstellen Sie eine JSON-Datei, die als "Host Manifest" oder "App Manifest" bezeichnet wird. Installieren Sie die JSON-Datei an einem definierten Ort. Die App-Manifestdatei beschreibt, wie der Browser eine Verbindung zur nativen Anwendung herstellen kann.

Die Erweiterung muss die Berechtigung `"nativeMessaging"` [anfordern](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions) oder die [optionale Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/optional_permissions) in der `manifest.json` Datei anfordern. Außerdem muss die native Anwendung der Erweiterung die Erlaubnis erteilen, indem sie die ID im Feld `"allowed_extensions"` des App-Manifests einfügt.

Nach der Installation kann die Erweiterung JSON-Nachrichten mit der nativen Anwendung austauschen. Verwenden Sie dazu ein Set an Funktionen in der {{WebExtAPIRef("runtime")}} API. Auf der Seite der nativen App werden Nachrichten über Standardeingabe (`stdin`) empfangen und über Standardausgabe (`stdout`) gesendet.

![Anwendungsfluss: Die JSON-Datei der nativen App befindet sich auf dem Computer des Nutzers und liefert Ressourceninformationen an die native Anwendung. Die Lese- und Schreibfunktionen der nativen Anwendung interagieren mit den Laufzeitevents der Browser-Erweiterung.](native-messaging.png)

Die Unterstützung für Native Messaging in Erweiterungen ist größtenteils kompatibel mit Chrome, allerdings mit zwei Hauptunterschieden:

- Im App-Manifest werden `allowed_extensions` als ein Array von App-IDs aufgeführt, während Chrome `allowed_origins` als ein Array von `"chrome-extension"` URLs aufführt.
- Das App-Manifest wird an einem anderen Ort gespeichert [im Vergleich zu Chrome](https://developer.chrome.com/docs/apps/nativeMessaging/#native-messaging-host-location).

Ein komplettes Beispiel finden Sie im ["`native-messaging`" Verzeichnis](https://github.com/mdn/webextensions-examples/tree/main/native-messaging) des `"webextensions-examples"` Repositories auf GitHub. Der Großteil des Beispielcodes in diesem Artikel stammt aus diesem Beispiel.

## Einrichtung

### Erweiterungsmanifest

Erweiterung, die mit einer nativen Anwendung kommuniziert:

- Setzen Sie die Berechtigung `"nativeMessaging"` [anfordern](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions) oder die [optionale Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/optional_permissions) in der [`manifest.json`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json) Datei.
- Geben Sie Ihre Add-On ID explizit an. Verwenden Sie den Manifest-Schlüssel [`browser_specific_settings`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_specific_settings). (Das Manifest der App wird die Reihe von Erweiterungen identifizieren, die Verbindungen zu den IDs erlauben).

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
> Chrome unterstützt den [browser_specific_settings](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_specific_settings) Schlüssel nicht. Sie müssen ein anderes Manifest ohne diesen Schlüssel verwenden, um eine gleichwertige WebExtension in Chrome zu installieren. Siehe [Chrome-Inkompatibilitäten unten](#chrome-inkompatibilitäten).

> [!NOTE]
> Bei der Verwendung einer optionalen Berechtigung überprüfen Sie, ob die Berechtigung erteilt wurde und fordern Sie, falls erforderlich, die Erlaubnis vom Benutzer über die {{WebExtAPIRef("permissions")}} API an, bevor Sie mit der nativen Anwendung kommunizieren.

### App Manifest

Das App-Manifest beschreibt dem Browser, wie es sich mit der nativen Anwendung verbinden kann.

Die App-Manifestdatei muss zusammen mit der nativen Anwendung installiert werden. Der Browser liest und validiert App-Manifestdateien, installiert oder verwaltet sie jedoch nicht. Das Sicherheitsmodell für die Installation und Aktualisierung dieser Dateien ähnelt viel mehr dem von nativen Anwendungen als dem von Erweiterungen, die WebExtension-APIs verwenden.

Für Details zur Syntax und Location des nativen App-Manifests siehe [Native Manifeste](/de/docs/Mozilla/Add-ons/WebExtensions/Native_manifests).

Hier ist ein Beispiel für ein Manifest der nativen Anwendung `"ping_pong"`:

```json
{
  "name": "ping_pong",
  "description": "Example host for native messaging",
  "path": "/path/to/native-messaging/app/ping_pong.py",
  "type": "stdio",
  "allowed_extensions": ["ping_pong@example.org"]
}
```

Dies erlaubt der Erweiterung mit der ID `"ping_pong@example.org"` die Verbindung, indem der Name `"ping_pong"` in die relevante Funktion der {{WebExtAPIRef("runtime")}} API übergeben wird. Die Anwendung selbst befindet sich unter `"/path/to/native-messaging/app/ping_pong.py"`.

> [!NOTE]
> Chrome identifiziert erlaubte Erweiterungen mit einem anderen Schlüssel: `allowed_origins`, wobei die ID der WebExtension verwendet wird. Beziehen Sie sich auf die [Chrome-Dokumentation für weitere Details](https://developer.chrome.com/docs/apps/nativeMessaging/#native-messaging-host) und siehe [Chrome Inkompatibilitäten unten](#chrome-inkompatibilitäten).

### Windows Einrichtung

Als Beispiel können Sie auch das [Readme zur nativen Messaging-Erweiterung auf GitHub](https://github.com/SphinxKnight/webextensions-examples/tree/master/native-messaging#windows-setup) konsultieren. Wenn Sie Ihre lokale Einrichtung überprüfen möchten, nachdem Sie dieses Repository auf einem Windows-Computer geklont haben, können Sie `check_config_win.py` ausführen, um einige Probleme zu beheben.

#### App Manifest

Im obigen Beispiel ist die native Anwendung ein Python-Skript. Es kann schwierig sein, Windows dazu zu bringen, Python-Skripte zuverlässig auf diese Weise auszuführen, daher ist eine Alternative, eine `.bat` Datei bereitzustellen und diese im Manifest der Anwendung zu verlinken:

```json
{
  "name": "ping_pong",
  "description": "Example host for native messaging",
  "path": "c:\\path\\to\\native-messaging\\app\\ping_pong_win.bat",
  "type": "stdio",
  "allowed_extensions": ["ping_pong@example.org"]
}
```

(Siehe Anmerkung oben zur [Chrome-Kompatibilität](#chrome-inkompatibilitäten) bezüglich des `allowed_extensions` Schlüssels und seines Gegenstücks in Chrome).

Die Batchdatei ruft dann das Python-Skript auf:

```bash
@echo off

python -u "c:\\path\\to\\native-messaging\\app\\ping_pong.py"
```

#### Registrierungsdatenbank

Der Browser findet die Erweiterung basierend auf Registrierungsschlüsseln, die sich an einem bestimmten Ort befinden. Sie müssen entweder programmatisch mit Ihrer Endanwendung oder manuell, wenn Sie das Beispiel von GitHub verwenden, hinzugefügt werden. Für weitere Details siehe [Manifest Location](/de/docs/Mozilla/Add-ons/WebExtensions/Native_manifests#manifest_location).

Im Beispiel `ping_pong`, wenn Sie Firefox verwenden (siehe [diese Seite für Chrome](https://developer.chrome.com/docs/apps/nativeMessaging/#native-messaging-host-location)), sollte einer der beiden Registrierungseinträge für das Messaging erstellt werden:

- `HKEY_CURRENT_USER\Software\Mozilla\NativeMessagingHosts\ping_pong`
- `HKEY_LOCAL_MACHINE\Software\Mozilla\NativeMessagingHosts\ping_pong`

Der Standardwert für den Schlüssel sollte der Pfad zum _Anwendungsmanifest_ sein: z.B. `C:\Users\<meinbenutzername>\webextensions-examples\native-messaging\app\ping_pong.json`.

> [!NOTE]
> Wenn Sie Ihre Arbeit auf dem Beispiel auf GitHub basieren, lesen Sie bitte [diesen Teil des Readme](https://github.com/SphinxKnight/webextensions-examples/tree/master/native-messaging#windows-setup) und überprüfen Sie die Ausgabe von `check_config_win.py`, bevor Sie die WebExtension in Ihrem Browser installieren.

## Nachrichtenaustausch

Angesichts der oben genannten Einrichtung kann eine Erweiterung JSON-Nachrichten mit einer nativen Anwendung austauschen.

### Erweiterungsseite

Native Messaging kann nicht direkt in Inhaltsskripten verwendet werden. Sie müssen [es indirekt über Hintergrundskripte tun](/de/docs/Mozilla/Add-ons/WebExtensions/Content_scripts#communicating_with_background_scripts).

Hier sind zwei Muster zu verwenden: **verbindungsbasiertes Messaging** und **verbindungsloses Messaging**.

#### Verbindungsbasiertes Messaging

Mit diesem Muster rufen Sie {{WebExtAPIRef("runtime.connectNative()")}} auf und übergeben den Namen der Anwendung (den Wert der `"name"` Eigenschaft im App-Manifest). Dies startet die Anwendung, falls sie nicht bereits läuft, und gibt ein {{WebExtAPIRef("runtime.Port")}} Objekt an die Erweiterung zurück.

Zwei Argumente werden an die native Anwendung übergeben, wenn sie startet:

- Der vollständige Pfad zum App-Manifest.
- (neu in Firefox 55) die ID (wie angegeben in den [browser_specific_settings](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_specific_settings) `manifest.json` Schlüssel) des Add-Ons, das es gestartet hat.

> [!NOTE]
> Chrome behandelt die übergebenen Argumente unterschiedlich:
>
> - Unter Linux und Mac übergibt Chrome _ein_ Argument: den Ursprung der Erweiterung, die es gestartet hat (in der Form `chrome-extension://[extensionID]`). Dies ermöglicht der App, die Erweiterung zu identifizieren.
> - Unter Windows übergibt Chrome _zwei_ Argumente: Das erste ist der Ursprung der Erweiterung, und das zweite ist ein Handle zum nativen Fenster von Chrome, das die App gestartet hat.

Die Anwendung bleibt in Betrieb, bis die Erweiterung `Port.disconnect()` aufruft oder die Seite, die die Verbindung hergestellt hat, geschlossen wird.

Um Nachrichten mit `Port` zu senden, rufen Sie dessen `postMessage()` Funktion auf und übergeben die zu sendende JSON-Nachricht. Um Nachrichten mit `Port` zu empfangen, fügen Sie den Listener mit der Funktion `onMessage.addListener()` hinzu.

Hier ist ein Beispiel für ein Hintergrundskript, das eine Verbindung mit der `"ping_pong"` App herstellt, Nachrichten von ihr abhört und jedes Mal eine `"ping"` Nachricht sendet, wenn der Benutzer auf die Browseraktion klickt:

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

Mit diesem Muster rufen Sie {{WebExtAPIRef("runtime.sendNativeMessage()")}} auf und übergeben:

- den Namen der Anwendung
- die zu sendende JSON-Nachricht
- optional, eine Rückruffunktion.

Eine neue Instanz der App wird für jede Nachricht erstellt. Die App übergibt zwei Argumente beim Starten:

- den vollständigen Pfad zum App-Manifest
- (neu in Firefox 55) die ID (wie im [browser_specific_settings](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_specific_settings) `manifest.json` Schlüssel angegeben) des Add-Ons, das es gestartet hat.

Die erste Nachricht, die von der App gesendet wird, wird als Antwort auf den `sendNativeMessage()` Aufruf behandelt und in die Rückruffunktion übergeben.

Hier ist das obige Beispiel, umgeschrieben, um `runtime.sendNativeMessage()` zu verwenden:

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

Auf der Anwendungsseite verwenden Sie Standardeingabe, um Nachrichten zu empfangen, und Standardausgabe, um sie zu senden.

Jede Nachricht wird mit JSON serialisiert, UTF-8-kodiert und eine unsigned 32-Bit-Zahl, die die Nachrichtenlänge in der nativen Byte-Reihenfolge enthält, geht voraus.

Die maximale Größe einer einzelnen Nachricht von der Anwendung beträgt 1 MB. Die maximale Größe einer an die Anwendung gesendeten Nachricht beträgt 4 GB.

Sie können schnell mit dem Senden und Empfangen von Nachrichten mit diesem NodeJS Code, `nm_nodejs.mjs` beginnen:

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
  const header = Buffer.from(new Uint32Array([message.length]).buffer);
  const stdout = process.stdout;
  await stdout.write(header);
  await stdout.write(message);
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

Hier ist ein weiteres Beispiel, geschrieben in Python. Es wartet auf Nachrichten von der Erweiterung. Beachten Sie, dass die Datei auf Linux ausführbar sein muss. Wenn die Nachricht `"ping"` ist, antwortet sie mit einer Nachricht `"pong"`.

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

In Python 3 müssen die empfangenen Binärdaten in einen String dekodiert werden. Der Inhalt, der an das Add-On zurückgesendet wird, muss mithilfe eines Strukturelements in Binärdaten kodiert werden:

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

## Schließen der nativen App

Wenn Sie die Verbindung zur nativen Anwendung mit `runtime.connectNative()` hergestellt haben, bleibt diese in Betrieb, bis die Erweiterung `Port.disconnect()` aufruft oder die Seite, die die Verbindung hergestellt hat, geschlossen wird. Wenn Sie die native Anwendung gestartet haben, indem Sie `runtime.sendNativeMessage()` aufgerufen haben, wird sie geschlossen, nachdem die Nachricht empfangen und eine Antwort gesendet wurde.

Um die native Anwendung zu schließen:

- Auf \*nix-Systemen wie macOS und Linux sendet der Browser `SIGTERM` an die native Anwendung und dann `SIGKILL`, nachdem die Anwendung die Möglichkeit hatte, ordentlich zu beenden. Diese Signale werden an alle untergeordneten Prozesse weitergegeben, es sei denn, sie lösen sich in eine neue Prozessgruppe.
- Unter Windows platziert der Browser den Prozess der nativen Anwendung in ein [Job-Objekt](https://learn.microsoft.com/en-us/windows/win32/procthread/job-objects) und beendet den Job. Wenn die native Anwendung zusätzliche Prozesse startet und möchte, dass diese nach dem Beenden der nativen Anwendung geöffnet bleiben, muss die native Anwendung den zusätzlichen Prozess mit dem [`CREATE_BREAKAWAY_FROM_JOB`](https://learn.microsoft.com/en-us/windows/win32/procthread/process-creation-flags) Flag starten, z.B. durch Verwenden von `CreateProcess`.

## Fehlerbehebung

Wenn etwas schiefgeht, überprüfen Sie die [Browser-Konsole](https://extensionworkshop.com/documentation/develop/debugging/#viewing_log_output). Wenn die native Anwendung eine Ausgabe an stderr sendet, leitet der Browser diese an die Browser-Konsole weiter. Wenn Sie es geschafft haben, die native Anwendung zu starten, sehen Sie alle von ihr ausgegebenen Fehlermeldungen.

Wenn Sie es noch nicht geschafft haben, die Anwendung auszuführen, sollten Sie eine Fehlermeldung sehen, die Ihnen Hinweise auf das Problem gibt.

```plain
"No such native application <name>"
```

- Überprüfen Sie, dass der Name, der an `runtime.connectNative()` übergeben wird, mit dem Namen im App-Manifest übereinstimmt.
- macOS/Linux: überprüfen Sie, dass der Name des App-Manifests `<name>.json` ist.
- macOS/Linux: überprüfen Sie den Speicherort der Manifestdatei der nativen Anwendung, wie [hier](/de/docs/Mozilla/Add-ons/WebExtensions/Native_manifests#mac_os_x) beschrieben.
- Windows: überprüfen Sie, dass der Registrierungsschlüssel an der richtigen Stelle ist und dass sein Name mit dem Namen im App-Manifest übereinstimmt.
- Windows: überprüfen Sie, dass der im Registrierungsschlüssel angegebene Pfad auf das App-Manifest zeigt.

  ```plain
  "Error: Invalid application <name>"
  ```

- Überprüfen Sie, dass der Name der Anwendung keine ungültigen Zeichen enthält.

  ```plain
  "'python' is not recognized as an internal or external command, ..."
  ```

- Windows: Wenn Ihre Anwendung ein Python-Skript ist, überprüfen Sie, dass Python installiert ist und dass Ihr Pfad dafür eingerichtet ist.

  ```plain
  "File at path <path> does not exist, or is not executable"
  ```

- Wenn Sie dies sehen, wurde das App-Manifest erfolgreich gefunden.
- Überprüfen Sie, dass der "path" im App-Manifest korrekt ist.
- Windows: Überprüfen Sie, dass Sie die Pfadtrennzeichen (`"c:\\path\\to\\file"`) korrekt maskiert haben.
- Überprüfen Sie, dass die App sich an dem im "path" im App-Manifest angegebenen Ort befindet.
- Überprüfen Sie, dass die App ausführbar ist.

  ```plain
  "This extension does not have permission to use native application <name>"
  ```

- Überprüfen Sie, dass der `"allowed_extensions"` Schlüssel im App-Manifest die ID des Add-Ons enthält.

  ```plain
      "TypeError: browser.runtime.connectNative is not a function"
  ```

- Überprüfen Sie, dass die Erweiterung die Berechtigung `"nativeMessaging"` hat.

  ```plain
  "[object Object]       NativeMessaging.jsm:218"
  ```

- Es gab ein Problem beim Starten der Anwendung.

## Chrome-Inkompatibilitäten

Es gibt eine Reihe von Unterschieden zwischen Browsern, die den nativen Nachrichtenaustausch in Web-Erweiterungen beeinflussen, einschließlich der an die native App übergebenen Argumente, des Speicherorts der Manifestdatei usw. Diese Unterschiede werden in [Chrome-Inkompatibilitäten > Native Messaging](/de/docs/Mozilla/Add-ons/WebExtensions/Chrome_incompatibilities#native_messaging) diskutiert.
