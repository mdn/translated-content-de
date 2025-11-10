---
title: Native Messaging
slug: Mozilla/Add-ons/WebExtensions/Native_messaging
l10n:
  sourceCommit: 09109b6f9444d22215ba330ec1e64e73980b2a6c
---

**Native Messaging** ermöglicht einer Erweiterung den Nachrichtenaustausch mit einer nativen Anwendung, die auf dem Computer des Nutzers installiert ist. Das Native Messaging bedient die Erweiterungen ohne zusätzliche Zugriffe über das Web.

Passwort-Manager: Die native Anwendung verwaltet, speichert und verschlüsselt Passwörter. Dann kommuniziert die native Anwendung mit der Erweiterung, um Webformulare auszufüllen.

Native Messaging ermöglicht es Erweiterungen auch, auf Ressourcen zuzugreifen, die über die WebExtension-APIs nicht zugänglich sind (z. B. bestimmter Hardware).

Die native Anwendung wird nicht durch den Browser installiert oder verwaltet. Die native Anwendung wird unter Verwendung der Installationsmechanismen des zugrunde liegenden Betriebssystems installiert. Erstellen Sie eine JSON-Datei, die als "Host-Manifest" oder "App-Manifest" bezeichnet wird. Installieren Sie die JSON-Datei an einem definierten Ort. Die App-Manifest-Datei beschreibt, wie der Browser eine Verbindung zu der nativen Anwendung herstellen kann.

Die Erweiterung muss die `"nativeMessaging"` [Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions) oder [optionale Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/optional_permissions) in der `manifest.json`-Datei anfordern. Außerdem muss die native Anwendung der Erweiterung die Erlaubnis erteilen, indem sie die ID im `"allowed_extensions"`-Feld des App-Manifests einfügt.

Nach der Installation kann die Erweiterung JSON-Nachrichten mit der nativen Anwendung austauschen. Verwenden Sie eine Reihe von Funktionen in der {{WebExtAPIRef("runtime")}} API. Auf der nativen App-Seite werden Nachrichten über Standardeingabe (`stdin`) empfangen und über Standardausgabe (`stdout`) gesendet.

![Anwendungsablauf: die native App-JSON-Datei befindet sich auf dem Computer des Nutzers und stellt der nativen Anwendung Ressourceninformationen zur Verfügung. Die Lese- und Schreibfunktionen der nativen Anwendung interagieren mit den Laufzeitereignissen der Browsererweiterung.](native-messaging.png)

Die Unterstützung von Native Messaging in Erweiterungen ist größtenteils kompatibel mit Chrome, mit zwei Hauptunterschieden:

- Das App-Manifest listet `allowed_extensions` als ein Array von App-IDs auf, während Chrome `allowed_origins` als ein Array von `"chrome-extension"` URLs auflistet.
- Das App-Manifest wird an einem anderen Ort gespeichert [im Vergleich zu Chrome](https://developer.chrome.com/docs/apps/nativeMessaging/#native-messaging-host-location).

Ein vollständiges Beispiel finden Sie im [`native-messaging` Verzeichnis](https://github.com/mdn/webextensions-examples/tree/main/native-messaging) des `webextensions-examples` Repositories auf GitHub. Der Großteil des Beispielcodes in diesem Artikel stammt aus diesem Beispiel.

## Einrichtung

### Erweiterung Manifest

Erweiterung, die mit einer nativen Anwendung kommuniziert:

- Setzen Sie die `"nativeMessaging"` [Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions) oder [optionale Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/optional_permissions) in der [`manifest.json`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json) Datei.
- Geben Sie Ihre Add-on-ID explizit an. Verwenden Sie den Manifest-Schlüssel [`browser_specific_settings`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_specific_settings). (Das Manifest der App wird die Menge der Erweiterungen identifizieren, die das Verbinden mit den IDs erlauben).

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
> Chrome unterstützt den [browser_specific_settings](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_specific_settings) Schlüssel nicht. Sie müssen ein anderes Manifest ohne diesen Schlüssel verwenden, um eine äquivalente WebExtension auf Chrome zu installieren. Siehe [Chrome-Inkompatibilitäten unten](#chrome-inkompatibilitäten).

> [!NOTE]
> Wenn Sie die optionale Berechtigung verwenden, überprüfen Sie, ob die Berechtigung erteilt wurde und, falls erforderlich, fordern Sie mit der {{WebExtAPIRef("permissions")}} API die Berechtigung vom Nutzer an, bevor Sie mit der nativen Anwendung kommunizieren.

### App Manifest

Das App-Manifest beschreibt dem Browser, wie er eine Verbindung zu der nativen Anwendung herstellen kann.

Die App-Manifest-Datei muss zusammen mit der nativen Anwendung installiert werden. Der Browser liest und validiert App-Manifest-Dateien, installiert oder verwaltet sie jedoch nicht. Das Sicherheitsmodell dafür, wann und wie diese Dateien installiert und aktualisiert werden, ähnelt viel mehr dem für native Anwendungen als dem für Erweiterungen, die WebExtension-APIs nutzen.

Weitere Details zur Syntax und zum Standort nativer App-Manifeste finden Sie unter [Native Manifeste](/de/docs/Mozilla/Add-ons/WebExtensions/Native_manifests).

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

Dies ermöglicht die Verbindung der Erweiterung, deren ID `"ping_pong@example.org"` ist, indem der Name `"ping_pong"` in die relevante {{WebExtAPIRef("runtime")}} API-Funktion übergeben wird. Die Anwendung selbst befindet sich unter `"/path/to/native-messaging/app/ping_pong.py"`.

> [!NOTE]
> Chrome identifiziert zulässige Erweiterungen mit einem anderen Schlüssel: `allowed_origins`, unter Verwendung der ID der WebExtension. Weitere Details finden Sie in der [Chrome-Dokumentation](https://developer.chrome.com/docs/apps/nativeMessaging/#native-messaging-host) und sehen Sie [Chrome-Inkompatibilitäten unten](#chrome-inkompatibilitäten).

### Windows-Einrichtung

Als Beispiel können Sie auch auf [die README zur Native Messaging-Erweiterung auf GitHub](https://github.com/SphinxKnight/webextensions-examples/tree/master/native-messaging#windows-setup) verweisen. Wenn Sie nach dem Forken dieses Repositories auf einem Windows-Rechner Ihre lokale Einrichtung überprüfen möchten, können Sie `check_config_win.py` ausführen, um einige Probleme zu beheben.

#### App Manifest

In dem obigen Beispiel ist die native Anwendung ein Python-Skript. Es kann schwierig sein, Windows dazu zu bringen, Python-Skripte auf diese Weise zuverlässig auszuführen, daher bietet sich eine `.bat`-Datei an und das Verlinken dieser von dem Anwendungsmanifest:

```json
{
  "name": "ping_pong",
  "description": "Example host for native messaging",
  "path": "c:\\path\\to\\native-messaging\\app\\ping_pong_win.bat",
  "type": "stdio",
  "allowed_extensions": ["ping_pong@example.org"]
}
```

(Siehe die oben stehende Anmerkung zur [Chrome-Kompatibilität](#chrome-inkompatibilitäten) bezüglich des `allowed_extensions` Schlüssels und seines Pendants in Chrome).

Die Batch-Datei ruft dann das Python-Skript auf:

```bash
@echo off

python -u "c:\\path\\to\\native-messaging\\app\\ping_pong.py"
```

#### Registrierung

Der Browser findet die Erweiterung basierend auf Registrierungsschlüsseln, die sich an einem bestimmten Ort befinden. Sie müssen diese entweder programmgesteuert mit Ihrer endgültigen Anwendung hinzufügen oder manuell, wenn Sie das Beispiel von GitHub verwenden. Weitere Details finden Sie unter [Manifest-Standort](/de/docs/Mozilla/Add-ons/WebExtensions/Native_manifests#manifest_location).

Mit dem `ping_pong` Beispiel fortfahrend, sollte einer der beiden Registrierungseinträge erstellt werden, damit die Nachrichtenübermittlung funktioniert:

- `HKEY_CURRENT_USER\Software\Mozilla\NativeMessagingHosts\ping_pong`
- `HKEY_LOCAL_MACHINE\Software\Mozilla\NativeMessagingHosts\ping_pong`

Der Standardwert für den Schlüssel sollte der Pfad zum _Anwendungs_-Manifest sein: z. B. `C:\Users\<meinbenutzername>\webextensions-examples\native-messaging\app\ping_pong.json`.

> [!NOTE]
> Wenn Sie Ihre Arbeit auf dem Beispiel, das auf GitHub zu finden ist, stützen, lesen Sie bitte [diesen Teil der README](https://github.com/SphinxKnight/webextensions-examples/tree/master/native-messaging#windows-setup) und überprüfen Sie die Ausgabe von `check_config_win.py`, bevor Sie die WebExtension in Ihrem Browser installieren.

## Nachrichten austauschen

Angenommen, das obige Setup ist erledigt, kann eine Erweiterung JSON-Nachrichten mit einer nativen Anwendung austauschen.

### Erweiterungsseite

Native Messaging kann nicht direkt in Inhalts-Skripten verwendet werden. Sie müssen [es indirekt über Hintergrundskripte tun](/de/docs/Mozilla/Add-ons/WebExtensions/Content_scripts#communicating_with_background_scripts).

Es gibt zwei Muster, die hier verwendet werden können: **Verbindungsbasiertes Messaging** und **Verbindungsfreies Messaging**.

#### Verbindungsbasiertes Messaging

Bei diesem Muster rufen Sie {{WebExtAPIRef("runtime.connectNative()")}} auf, übergeben den Namen der Anwendung (den Wert der `"name"` Eigenschaft im Manifest der App). Dies startet die Anwendung, falls sie noch nicht läuft, und gibt ein {{WebExtAPIRef("runtime.Port")}} Objekt an die Erweiterung zurück.

Zwei Argumente werden an die native App übergeben, wenn sie startet:

- Der vollständige Pfad zum App-Manifest.
- (neu in Firefox 55) die ID (wie im [browser_specific_settings](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_specific_settings) `manifest.json` Schlüssel angegeben) des Add-ons, das sie gestartet hat.

> [!NOTE]
> Chrome behandelt die übergebenen Argumente anders:
>
> - Auf Linux und Mac übergibt Chrome _ein_ Argument: den Ursprung der Erweiterung, die sie gestartet hat (in der Form `chrome-extension://[extensionID]`). Dies ermöglicht es der App, die Erweiterung zu identifizieren.
> - Auf Windows übergibt Chrome _zwei_ Argumente: das erste ist der Ursprung der Erweiterung und das zweite ist ein Handle zum nativen Fenster von Chrome, das die App gestartet hat.

Die Anwendung bleibt in Betrieb, bis die Erweiterung `Port.disconnect()` aufruft oder die Seite, die damit verbunden ist, geschlossen wird.

Um Nachrichten mit `Port` zu senden, rufen Sie seine Funktion `postMessage()` auf und übergeben die zu sendende JSON-Nachricht. Um Nachrichten mit `Port` zu empfangen, fügen Sie den Listener mit seiner Funktion `onMessage.addListener()` hinzu.

Hier ist ein Beispiel für ein Hintergrundskript, das eine Verbindung mit der `"ping_pong"` App herstellt, Nachrichten von ihr empfängt und dann jedes Mal, wenn der Nutzer die Browseraktion anklickt, eine `"ping"` Nachricht sendet:

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

#### Verbindungsfreies Messaging

Bei diesem Muster rufen Sie {{WebExtAPIRef("runtime.sendNativeMessage()")}} auf, übergeben:

- den Namen der Anwendung
- die zu sendende JSON-Nachricht
- optional, einen Rückruf.

Für jede Nachricht wird eine neue Instanz der App erstellt. Die App übergibt zwei Argumente, wenn sie startet:

- der vollständige Pfad zum App-Manifest
- (neu in Firefox 55) die ID (wie im [browser_specific_settings](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_specific_settings) manifest.json Schlüssel angegeben) des Add-ons, das sie gestartet hat.

Die erste Nachricht, die von der App gesendet wird, wird als Antwort auf den `sendNativeMessage()` Aufruf behandelt und in den Rückruf übergeben.

Hier ist das obige Beispiel nochmals, diesmal mit `runtime.sendNativeMessage()`:

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

### App Seite

Auf der Anwendungsseite verwenden Sie Standardeingaben, um Nachrichten zu empfangen, und Standardausgaben, um sie zu senden.

Jede Nachricht wird mit JSON serialisiert, UTF-8 codiert und mit einem 32-Bit-Wert in nativer Byte-Reihenfolge versehen, der die Nachrichtenlänge enthält.

Die maximale Größe einer einzelnen Nachricht von der Anwendung beträgt 1 MB. Die maximale Größe einer Nachricht, die an die Anwendung gesendet wird, beträgt 4 GB.

Sie können schnell damit beginnen, Nachrichten zu senden und zu empfangen, indem Sie diesen NodeJS-Code, `nm_nodejs.mjs`, verwenden:

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

Hier ist ein weiteres Beispiel, geschrieben in Python. Es hört auf Nachrichten von der Erweiterung. Beachten Sie, dass die Datei unter Linux ausführbar sein muss. Wenn die Nachricht `"ping"` ist, dann antwortet es mit einer Nachricht `"pong"`.

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

In Python 3 müssen die empfangenen Binärdaten in einen String dekodiert werden. Der Inhalt, der an das Addon zurückgesendet werden soll, muss mit einer Struktur in Binärdaten kodiert werden:

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

Wenn Sie die native Anwendung mit `runtime.connectNative()` verbunden haben, bleibt sie in Betrieb, bis die Erweiterung `Port.disconnect()` aufruft oder die Seite, die damit verbunden ist, geschlossen wird. Wenn Sie die native Anwendung durch das Senden von `runtime.sendNativeMessage()` gestartet haben, wird sie geschlossen, nachdem sie die Nachricht erhalten und eine Antwort gesendet hat.

Um die native Anwendung zu schließen:

- Auf \*nix-Systemen wie macOS und Linux sendet der Browser `SIGTERM` an die native Anwendung und dann `SIGKILL`, nachdem die Anwendung die Gelegenheit hatte, sich ordentlich zu schließen. Diese Signale werden an alle Unterprozesse propagiert, es sei denn, sie brechen in eine neue Prozessgruppe aus.
- Auf Windows platziert der Browser den Prozess der nativen Anwendung in einem [Job-Objekt](https://learn.microsoft.com/en-us/windows/win32/procthread/job-objects) und beendet den Job. Wenn die native Anwendung zusätzliche Prozesse startet und möchte, dass sie geöffnet bleiben, nachdem die native Anwendung beendet wurde, dann muss die native Anwendung den zusätzlichen Prozess mit dem [`CREATE_BREAKAWAY_FROM_JOB`](https://learn.microsoft.com/en-us/windows/win32/procthread/process-creation-flags) Flag starten, z. B. durch Verwendung von `CreateProcess`.

## Fehlerbehebung

Wenn etwas schiefgeht, überprüfen Sie die [Browser-Konsole](https://extensionworkshop.com/documentation/develop/debugging/#viewing_log_output). Wenn die native Anwendung irgendeine Ausgabe an stderr sendet, wird der Browser es zur Browser-Konsole umleiten. Wenn Sie es bis zum Start der nativen Anwendung geschafft haben, sehen Sie alle von ihr ausgegebenen Fehlermeldungen.

Wenn es Ihnen nicht gelungen ist, die Anwendung auszuführen, sollten Sie eine Fehlermeldung sehen, die Ihnen einen Hinweis auf das Problem gibt.

```plain
"No such native application <name>"
```

- Überprüfen Sie, dass der Name, der an `runtime.connectNative()` übergeben wird, mit dem Namen im App-Manifest übereinstimmt.
- macOS/Linux: Überprüfen Sie, dass der Name des App-Manifests `<name>.json` lautet.
- macOS/Linux: Überprüfen Sie den Ort der Manifestdatei der nativen Anwendung, wie in der [Referenz der nativen Manifeste](/de/docs/Mozilla/Add-ons/WebExtensions/Native_manifests#macos) erwähnt.
- Windows: Überprüfen Sie, dass der Registrierungsschlüssel an der richtigen Stelle ist und dass sein Name mit dem Namen im App-Manifest übereinstimmt.
- Windows: Überprüfen Sie, dass der im Registrierungsschlüssel angegebene Pfad auf das App-Manifest verweist.

  ```plain
  "Error: Invalid application <name>"
  ```

- Überprüfen Sie, dass der Name der Anwendung keine ungültigen Zeichen enthält.

  ```plain
  "'python' is not recognized as an internal or external command, ..."
  ```

- Windows: Wenn Ihre Anwendung ein Python-Skript ist, stellen Sie sicher, dass Python installiert ist und Ihr Pfad dafür eingerichtet ist.

  ```plain
  "File at path <path> does not exist, or is not executable"
  ```

- Wenn Sie das sehen, dann wurde das App-Manifest erfolgreich gefunden.
- Überprüfen Sie, dass der "path" im App-Manifest korrekt ist.
- Windows: Überprüfen Sie, dass Sie die Pfadtrennzeichen escaped haben (`"c:\\path\\to\\file"`).
- Überprüfen Sie, dass die App am Ort ist, auf den die `"path"` Eigenschaft im App-Manifest verweist.
- Überprüfen Sie, dass die App ausführbar ist.

  ```plain
  "This extension does not have permission to use native application <name>"
  ```

- Überprüfen Sie, dass der `"allowed_extensions"` Schlüssel im App-Manifest die ID des Add-ons enthält.

  ```plain
      "TypeError: browser.runtime.connectNative is not a function"
  ```

- Überprüfen Sie, dass die Erweiterung die `"nativeMessaging"` Berechtigung hat.

  ```plain
  "[object Object]       NativeMessaging.jsm:218"
  ```

- Es gab ein Problem beim Starten der Anwendung.

## Chrome-Inkompatibilitäten

Es gibt mehrere Unterschiede zwischen Browsern, die das Native Messaging in Web-Erweiterungen betreffen, einschließlich der an die native Anwendung übergebenen Argumente, des Speicherorts der Manifest-Datei usw. Diese Unterschiede werden in [Chrome-Inkompatibilitäten > Native Messaging](/de/docs/Mozilla/Add-ons/WebExtensions/Chrome_incompatibilities#native_messaging) diskutiert.
