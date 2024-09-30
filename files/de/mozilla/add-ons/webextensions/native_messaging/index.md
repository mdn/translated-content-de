---
title: Native messaging
slug: Mozilla/Add-ons/WebExtensions/Native_messaging
l10n:
  sourceCommit: d7143e171b5f18fb37a686a7d4947db417fd74f3
---

{{AddonSidebar}}

**Native Messaging** ermöglicht einer Erweiterung, Nachrichten mit einer auf dem Computer des Nutzers installierten nativen Anwendung auszutauschen. Das Native Messaging bedient die Erweiterungen ohne zusätzliche Zugriffe über das Web.

Passwort-Manager: Die native Anwendung verwaltet, speichert und verschlüsselt Passwörter. Dann kommuniziert die native Anwendung mit der Erweiterung, um Webformulare auszufüllen.

Native Messaging ermöglicht es Erweiterungen auch, auf Ressourcen zuzugreifen, die über WebExtension-APIs nicht zugänglich sind (z.B. spezielle Hardware).

Die native Anwendung wird nicht vom Browser installiert oder verwaltet. Die native Anwendung wird mithilfe der Installationstechnologie des zugrunde liegenden Betriebssystems installiert. Erstellen Sie eine JSON-Datei namens "Host-Manifest" oder "App-Manifest". Installieren Sie die JSON-Datei an einem festgelegten Ort. Die App-Manifest-Datei beschreibt, wie der Browser mit der nativen Anwendung verbinden kann.

Die Erweiterung muss die `"nativeMessaging"`-[Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions) oder [optionale Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/optional_permissions) in der `manifest.json` Datei anfordern. Außerdem muss die native Anwendung der Erweiterung die Berechtigung erteilen, indem die ID im `"allowed_extensions"`-Feld des App-Manifests aufgenommen wird.

Nach der Installation kann die Erweiterung JSON-Nachrichten mit der nativen Anwendung austauschen. Verwenden Sie dazu einen Satz von Funktionen in der {{WebExtAPIRef("runtime")}} API. Auf der Seite der nativen Anwendung werden Nachrichten über die Standardeingabe (`stdin`) empfangen und über die Standardausgabe (`stdout`) gesendet.

![Anwendungsablauf: Die JSON-Datei der nativen App befindet sich auf dem Computer des Benutzers und bietet Ressourceninformationen für die native Anwendung. Die Lese- und Schreibfunktionen der nativen Anwendung interagieren mit den Laufzeitereignissen der Browsererweiterung.](native-messaging.png)

Die Unterstützung für Native Messaging in Erweiterungen ist größtenteils mit Chrome kompatibel, mit zwei Hauptunterschieden:

- Das App-Manifest listet `allowed_extensions` als ein Array von App-IDs auf, während Chrome `allowed_origins` als ein Array von `"chrome-extension"` URLs auflistet.
- Das App-Manifest wird an einem anderen Ort gespeichert als [bei Chrome](https://developer.chrome.com/docs/apps/nativeMessaging/#native-messaging-host-location).

Es gibt ein vollständiges Beispiel im Verzeichnis ["`native-messaging`" auf GitHub](https://github.com/mdn/webextensions-examples/tree/main/native-messaging) im Repository `"webextensions-examples"`. Der größte Teil des im Artikel gezeigten Beispielcodes stammt aus diesem Beispiel.

## Einrichtung

### Erweiterungs-Manifest

Erweiterung, die mit einer nativen Anwendung kommuniziert:

- Setzen Sie die `"nativeMessaging"`-[Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions) oder [optionale Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/optional_permissions) in der [`manifest.json`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json) Datei.
- Spezifizieren Sie Ihre Add-on-ID explizit. Verwenden Sie den [`browser_specific_settings`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_specific_settings) Manifest-Schlüssel. (Das Manifest der App wird das Set von Erweiterungen identifizieren, das Verbindungen zu den IDs erlaubt).

Beispiel für eine `manifest.json`-Datei:

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
> Chrome unterstützt den [browser_specific_settings](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_specific_settings) Schlüssel nicht. Sie müssen ein anderes Manifest ohne diesen Schlüssel verwenden, um eine äquivalente WebExtension in Chrome zu installieren. Siehe [Chrome-Unterschiede unten](#than_text,_mode.).

> [!NOTE]
> Bei Verwendung von optionalen Berechtigungen prüfen Sie, ob die Berechtigung erteilt wurde, und fordern Sie bei Bedarf die Berechtigung vom Nutzer über die {{WebExtAPIRef("permissions")}} API an, bevor Sie mit der nativen Anwendung kommunizieren.

### App-Manifest

Das App-Manifest beschreibt dem Browser, wie es sich mit der nativen Anwendung verbinden kann.

Die App-Manifestdatei muss zusammen mit der nativen Anwendung installiert werden. Der Browser liest und validiert App-Manifestdateien, installiert oder verwaltet sie jedoch nicht. Das Sicherheitsmodell, wann und wie diese Dateien installiert und aktualisiert werden, ähnelt eher dem von nativen Anwendungen als dem von Erweiterungen, die WebExtension-APIs verwenden.

Einzelheiten zur Syntax und dem Standort des nativen App-Manifests finden Sie unter [Native Manifests](/de/docs/Mozilla/Add-ons/WebExtensions/Native_manifests).

Zum Beispiel hier ein Manifest für die `"ping_pong"` native Anwendung:

```json
{
  "name": "ping_pong",
  "description": "Example host for native messaging",
  "path": "/path/to/native-messaging/app/ping_pong.py",
  "type": "stdio",
  "allowed_extensions": ["ping_pong@example.org"]
}
```

Dies ermöglicht es der Erweiterung, deren ID `"ping_pong@example.org"` ist, sich zu verbinden, indem der Name `"ping_pong"` in die entsprechende {{WebExtAPIRef("runtime")}} API-Funktion übergeben wird. Die Anwendung selbst befindet sich unter `"/path/to/native-messaging/app/ping_pong.py"`.

> [!NOTE]
> Chrome identifiziert erlaubte Erweiterungen mit einem anderen Schlüssel: `allowed_origins`, wobei die ID der WebExtension verwendet wird. Weitere Details finden Sie in der [Chrome-Dokumentation](https://developer.chrome.com/docs/apps/nativeMessaging/#native-messaging-host) und siehe [Chrome-Unterschiede unten](#than_text,_mode.).

### Windows-Einrichtung

Als Beispiel können Sie auch die [readme zur Native Messaging-Erweiterung auf GitHub](https://github.com/SphinxKnight/webextensions-examples/tree/master/native-messaging#windows-setup) heranziehen. Wenn Sie Ihr lokales Setup überprüfen möchten, nachdem Sie dieses Repository auf einem Windows-Rechner geforkt haben, können Sie `check_config_win.py` ausführen, um einige Probleme zu beheben.

#### App-Manifest

Im obigen Beispiel ist die native Anwendung ein Python-Skript. Es kann schwierig sein, Windows dazu zu bringen, Python-Skripte zuverlässig auf diese Weise auszuführen. Eine Alternative ist, eine `.bat`-Datei bereitzustellen und auf diese im Manifest der Anwendung zu verweisen:

```json
{
  "name": "ping_pong",
  "description": "Example host for native messaging",
  "path": "c:\\path\\to\\native-messaging\\app\\ping_pong_win.bat",
  "type": "stdio",
  "allowed_extensions": ["ping_pong@example.org"]
}
```

(Siehe Hinweis oben zur [Chrome-Kompatibilität](#than_text,_mode.) bezüglich des `allowed_extensions`-Schlüssels und dessen Gegenstück in Chrome).

Die Batch-Datei ruft dann das Python-Skript auf:

```bash
@echo off

python -u "c:\\path\\to\\native-messaging\\app\\ping_pong.py"
```

#### Registrierung

Der Browser findet die Erweiterung basierend auf Registrierungs-Schlüsseln, die sich an einem bestimmten Ort befinden. Sie müssen diese entweder programmatisch mit Ihrer endgültigen Anwendung hinzufügen oder manuell, wenn Sie das Beispiel von GitHub verwenden. Weitere Details finden Sie unter [Standort des Manifests](/de/docs/Mozilla/Add-ons/WebExtensions/Native_manifests#manifest_location).

Im `ping_pong`-Beispiel sollte, falls Sie Firefox verwenden (siehe [diese Seite für Chrome](https://developer.chrome.com/docs/apps/nativeMessaging/#native-messaging-host-location)), einer der beiden Registrierungseinträge erstellt werden, damit das Messaging funktioniert:

- `HKEY_CURRENT_USER\Software\Mozilla\NativeMessagingHosts\ping_pong`
- `HKEY_LOCAL_MACHINE\Software\Mozilla\NativeMessagingHosts\ping_pong`

Der Standardwert für den Schlüssel sollte der Pfad zum _Anwendungs_-Manifest sein: z.B. `C:\Users\<meinusername>\webextensions-examples\native-messaging\app\ping_pong.json`.

> [!NOTE]
> Wenn Sie Ihre Arbeit auf dem auf GitHub befindlichen Beispiel basieren, lesen Sie bitte [diesen Teil der readme](https://github.com/SphinxKnight/webextensions-examples/tree/master/native-messaging#windows-setup) und überprüfen Sie die Ausgabe von `check_config_win.py`, bevor Sie die WebExtension in Ihrem Browser installieren.

## Nachrichten austauschen

Mit der obigen Einrichtung kann eine Erweiterung JSON-Nachrichten mit einer nativen Anwendung austauschen.

### Erweiterungsseite

Native Messaging kann nicht direkt in Inhalts-Skripten verwendet werden. Sie müssen [es indirekt über Hintergrund-Skripte tun](/de/docs/Mozilla/Add-ons/WebExtensions/Content_scripts#communicating_with_background_scripts).

Es gibt zwei Muster, die hier verwendet werden: **Verbindungsbasiertes Messaging** und **Verbindungsloses Messaging**.

#### Verbindungsbasiertes Messaging

Bei diesem Muster rufen Sie {{WebExtAPIRef("runtime.connectNative()")}} auf und übergeben den Namen der Anwendung (den Wert der `"name"`-Eigenschaft im App-Manifest). Dies startet die Anwendung, wenn sie nicht bereits ausgeführt wird, und gibt ein {{WebExtAPIRef("runtime.Port")}} Objekt an die Erweiterung zurück.

Zwei Argumente werden an die native App beim Start übergeben:

- Der vollständige Pfad zum App-Manifest.
- (neu in Firefox 55) die ID (wie in den [browser_specific_settings](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_specific_settings) angegeben) des Add-ons, das sie gestartet hat.

> [!NOTE]
> Chrome behandelt die übergebenen Argumente anders:
>
> - Unter Linux und Mac gibt Chrome _ein_ Argument weiter: den Ursprung der Erweiterung, die sie gestartet hat (in der Form `chrome-extension://[extensionID]`). Dies ermöglicht es der App, die Erweiterung zu identifizieren.
> - Unter Windows gibt Chrome _zwei_ Argumente weiter: das erste ist der Ursprung der Erweiterung, und das zweite ist ein Handle auf das Chrome-native Fenster, das die App gestartet hat.

Die Anwendung bleibt solange aktiv, bis die Erweiterung `Port.disconnect()` aufruft oder die Seite, die die Verbindung aufgebaut hat, geschlossen wird.

Um Nachrichten mithilfe von `Port` zu senden, rufen Sie dessen `postMessage()` Funktion auf und übergeben die zu sendende JSON-Nachricht. Um Nachrichten mit `Port` zu empfangen, fügen Sie den Listener mit seiner `onMessage.addListener()` Funktion hinzu.

Hier ist ein Beispiel für ein Hintergrund-Skript, das eine Verbindung mit der `"ping_pong"`-App herstellt, Nachrichten von ihr empfängt und jedes Mal, wenn der Nutzer auf die Browseraktion klickt, eine `"ping"`-Nachricht sendet:

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

Bei diesem Muster rufen Sie {{WebExtAPIRef("runtime.sendNativeMessage()")}} auf, und übergeben:

- den Namen der Anwendung
- die zu sendende JSON-Nachricht
- optional einen Rückruf.

Für jede Nachricht wird eine neue Instanz der App erstellt. Die App übergibt beim Start zwei Argumente:

- den vollständigen Pfad zum App-Manifest
- (neu in Firefox 55) die ID (wie im Schlüssel [browser_specific_settings](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_specific_settings) manifest.json angegeben) des Add-ons, das sie gestartet hat.

Die erste Nachricht, die von der App gesendet wird, wird als Antwort auf den `sendNativeMessage()`-Aufruf behandelt und in den Rückruf übergeben.

Hier ist das obige Beispiel umgeschrieben unter Verwendung von `runtime.sendNativeMessage()`:

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

Auf der Seite der Anwendung verwenden Sie die Standardeingabe, um Nachrichten zu empfangen, und die Standardausgabe, um sie zu senden.

Jede Nachricht wird als JSON serialisiert, in UTF-8 kodiert und wird von einem unsigned 32-Bit-Wert begleitet, der die Nachrichtenlänge in nativer Byte-Reihenfolge enthält.

Die maximale Größe einer einzelnen Nachricht von der Anwendung beträgt 1 MB. Die maximale Größe einer an die Anwendung gesendeten Nachricht beträgt 4 GB.

Sie können schnell mit dem Senden und Empfangen von Nachrichten beginnen, indem Sie diesen NodeJS-Code verwenden, `nm_nodejs.mjs`:

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

Hier ist ein weiteres Beispiel, das in Python geschrieben ist. Es lauscht auf Nachrichten von der Erweiterung. Beachten Sie, dass die Datei unter Linux ausführbar sein muss. Wenn die Nachricht `"ping"` ist, antwortet sie mit einer Nachricht `"pong"`.

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

In Python 3 müssen die empfangenen Binärdaten in einen String dekodiert werden. Der Inhalt, der zurück an das Add-on gesendet werden soll, muss mithilfe eines Structs in Binärdaten kodiert werden:

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

## Schließen der nativen Anwendung

Wenn Sie die Verbindung zur nativen Anwendung mit `runtime.connectNative()` hergestellt haben, bleibt sie aktiv, bis die Erweiterung `Port.disconnect()` aufruft oder die Seite, die die Verbindung aufgebaut hat, geschlossen wird. Wenn Sie die native Anwendung durch Senden von `runtime.sendNativeMessage()` gestartet haben, wird sie geschlossen, nachdem sie die Nachricht empfangen und eine Antwort gesendet hat.

Um die native Anwendung zu schließen:

- Auf \*nix-Systemen wie macOS und Linux sendet der Browser `SIGTERM` an die native Anwendung, dann `SIGKILL`, nachdem die Anwendung die Möglichkeit hatte, sich ordnungsgemäß zu beenden. Diese Signale werden auf alle Unterprozesse übertragen, es sei denn, sie lösen sich in eine neue Prozessgruppe auf.
- Auf Windows legt der Browser den Prozess der nativen Anwendung in ein [Job-Objekt](https://learn.microsoft.com/en-us/windows/win32/procthread/job-objects) und beendet den Job. Wenn die native Anwendung zusätzliche Prozesse startet und möchte, dass diese nach dem Beenden der nativen Anwendung geöffnet bleiben, muss die native Anwendung den zusätzlichen Prozess mit dem [`CREATE_BREAKAWAY_FROM_JOB`](https://learn.microsoft.com/en-us/windows/win32/procthread/process-creation-flags) Flag starten, beispielsweise durch die Verwendung von `CreateProcess`.

## Fehlersuche

Wenn etwas schiefgeht, überprüfen Sie die [Browser-Konsole](https://extensionworkshop.com/documentation/develop/debugging/#viewing_log_output). Wenn die native Anwendung irgendeine Ausgabe an stderr sendet, leitet der Browser diese an die Browser-Konsole weiter. Wenn Sie es geschafft haben, die native Anwendung zu starten, sehen Sie alle Fehlermeldungen, die sie ausgibt.

Wenn Sie die Anwendung noch nicht ausführen konnten, sollten Sie eine Fehlermeldung erhalten, die Ihnen einen Hinweis auf das Problem gibt.

```plain
"No such native application <name>"
```

- Überprüfen Sie, ob der Name, der an `runtime.connectNative()` übergeben wird, mit dem im App-Manifest übereinstimmt.
- macOS/Linux: Überprüfen Sie, ob der Name des App-Manifests `<name>.json` ist.
- macOS/Linux: Überprüfen Sie den Speicherort der Manifestdatei der nativen Anwendung wie [hier erwähnt](/de/docs/Mozilla/Add-ons/WebExtensions/Native_manifests#mac_os_x).
- Windows: Überprüfen Sie, dass der Registrierungsschlüssel am richtigen Ort ist und dass sein Name mit dem im App-Manifest übereinstimmt.
- Windows: Überprüfen Sie, dass der im Registrierungsschlüssel angegebene Pfad zum App-Manifest zeigt.

  ```plain
  "Error: Invalid application <name>"
  ```

- Überprüfen Sie, dass der Name der Anwendung keine ungültigen Zeichen enthält.

  ```plain
  "'python' is not recognized as an internal or external command, ..."
  ```

- Windows: Wenn Ihre Anwendung ein Python-Skript ist, überprüfen Sie, ob Python installiert ist und der Pfad dafür eingerichtet ist.

  ```plain
  "File at path <path> does not exist, or is not executable"
  ```

- Wenn Sie dies sehen, wurde das App-Manifest erfolgreich gefunden.
- Überprüfen Sie, ob der "path" im Manifest der App korrekt ist.
- Windows: Überprüfen Sie, dass Sie die Pfadtrennzeichen richtig escapet haben (`"c:\\path\\to\\file"`).
- Überprüfen Sie, dass die App am im `"path"` Attribut im Manifest der App genannten Ort befindet.
- Überprüfen Sie, dass die App ausführbar ist.

  ```plain
  "This extension does not have permission to use native application <name>"
  ```

- Überprüfen Sie, dass der `"allowed_extensions"`-Schlüssel im App-Manifest die ID des Add-ons enthält.

  ```plain
      "TypeError: browser.runtime.connectNative is not a function"
  ```

- Überprüfen Sie, ob die Erweiterung die `"nativeMessaging"` Berechtigung hat.

  ```plain
  "[object Object]       NativeMessaging.jsm:218"
  ```

- Es gab ein Problem beim Starten der Anwendung.

## Chrome-Unterschiede

Es gibt eine Reihe von Unterschieden zwischen Browsern, die sich auf das Native Messaging bei Web Extensions auswirken, einschließlich der Argumente, die an die native App übergeben werden, des Standorts der Manifestdatei usw.
Diese Unterschiede werden in [Chrome-Inkompatibilitäten > Native Messaging](/de/docs/Mozilla/Add-ons/WebExtensions/Chrome_incompatibilities#native_messaging) diskutiert.
