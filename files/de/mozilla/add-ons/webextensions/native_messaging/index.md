---
title: Native messaging
slug: Mozilla/Add-ons/WebExtensions/Native_messaging
l10n:
  sourceCommit: 710372d69095aaeadfba6c892f3e39ed63df4c54
---

**Native messaging** ermöglicht einer Erweiterung, Nachrichten mit einer nativen Anwendung auszutauschen, die auf dem Computer des Benutzers installiert ist. Die native Nachrichtenübermittlung dient den Erweiterungen, ohne zusätzliche Zugriffe über das Web.

Passwortmanager: Die native Anwendung verwaltet, speichert und verschlüsselt Passwörter. Anschließend kommuniziert die native Anwendung mit der Erweiterung, um Webformulare auszufüllen.

Die native Nachrichtenübermittlung ermöglicht es Erweiterungen auch, auf Ressourcen zuzugreifen, die über die WebExtension-APIs nicht zugänglich sind (z. B. spezielle Hardware).

Die native Anwendung wird nicht vom Browser installiert oder verwaltet. Die native Anwendung wird unter Verwendung der Installationsmechanismen des zugrunde liegenden Betriebssystems installiert. Erstellen Sie eine JSON-Datei, die als "Host-Manifest" oder "App-Manifest" bezeichnet wird. Installieren Sie die JSON-Datei an einem definierten Ort. Die App-Manifestdatei beschreibt, wie der Browser eine Verbindung zur nativen Anwendung herstellen kann.

Die Erweiterung muss in der `manifest.json`-Datei die `"nativeMessaging"` [Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions) oder [optionale Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/optional_permissions) anfordern. Außerdem muss die native Anwendung der Erweiterung die Berechtigung erteilen, indem die ID im Feld `"allowed_extensions"` des App-Manifests aufgenommen wird.

Nach der Installation kann die Erweiterung JSON-Nachrichten mit der nativen Anwendung austauschen. Verwenden Sie einen Satz von Funktionen in der {{WebExtAPIRef("runtime")}} API. Auf der Seite der nativen App werden Nachrichten mit der Standardeingabe (`stdin`) empfangen und mit der Standardausgabe (`stdout`) gesendet.

![Anwendungsfluss: Die JSON-Datei der nativen App befindet sich auf dem Computer des Benutzers und bietet der nativen Anwendung Ressourceninformationen. Die Lese- und Schreibfunktionen der nativen Anwendung interagieren mit den Laufzeitereignissen der Browsererweiterung.](native-messaging.png)

Die Unterstützung für native Nachrichtenübermittlung in Erweiterungen ist größtenteils mit Chrome kompatibel, mit zwei Hauptunterschieden:

- Das App-Manifest listet `allowed_extensions` als ein Array von App-IDs auf, während Chrome `allowed_origins` als ein Array von `"chrome-extension"` URLs aufführt.
- Das App-Manifest wird an einem anderen Ort gespeichert [im Vergleich zu Chrome](https://developer.chrome.com/docs/apps/nativeMessaging/#native-messaging-host-location).

Ein vollständiges Beispiel befindet sich im [`native-messaging` Verzeichnis](https://github.com/mdn/webextensions-examples/tree/main/native-messaging) des `webextensions-examples` Repositorys auf GitHub. Der meiste Beispielcode in diesem Artikel stammt aus diesem Beispiel.

## Einrichtung

### Erweiterungsmanifest

Erweiterung, die mit einer nativen Anwendung kommuniziert:

- Setzen Sie die `"nativeMessaging"` [Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions) oder [optionale Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/optional_permissions) im [`manifest.json`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json) Datei.
- Geben Sie Ihre Add-on-ID explizit an. Verwenden Sie den [`browser_specific_settings`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_specific_settings) Manifest-Schlüssel. (Das Manifest der App wird die Menge der Erweiterungen identifizieren, die das Verbinden zu den IDs erlauben).

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
> Chrome unterstützt den [browser_specific_settings](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_specific_settings) Schlüssel nicht. Sie müssen ein anderes Manifest ohne diesen Schlüssel verwenden, um eine gleichwertige WebExtension auf Chrome zu installieren. Siehe [Chrome-Inkompatibilitäten unten](#chrome-inkompatibilitäten).

> [!NOTE]
> Wenn Sie optionale Berechtigungen verwenden, prüfen Sie, ob die Berechtigung erteilt wurde und fordern Sie, falls erforderlich, die Berechtigung vom Benutzer mit der {{WebExtAPIRef("permissions")}} API an, bevor Sie mit der nativen Anwendung kommunizieren.

### App-Manifest

Das App-Manifest beschreibt dem Browser, wie es mit der nativen Anwendung verbunden werden kann.

Die App-Manifestdatei muss zusammen mit der nativen Anwendung installiert werden. Der Browser liest und validiert App-Manifestdateien, installiert oder verwaltet sie jedoch nicht. Das Sicherheitsmodell für wann und wie diese Dateien installiert und aktualisiert werden ist dem für native Anwendungen weit ähnlicher als dem für Erweiterungen, die WebExtension-APIs verwenden.

Für Details zur Syntax und zum Speicherort des nativen App-Manifests siehe [Native Manifeste](/de/docs/Mozilla/Add-ons/WebExtensions/Native_manifests).

Hier ist zum Beispiel ein Manifest für die `"ping_pong"` native Anwendung:

```json
{
  "name": "ping_pong",
  "description": "Example host for native messaging",
  "path": "/path/to/native-messaging/app/ping_pong.py",
  "type": "stdio",
  "allowed_extensions": ["ping_pong@example.org"]
}
```

Dies erlaubt der Erweiterung, deren ID `"ping_pong@example.org"` ist, eine Verbindung herzustellen, indem sie den Namen `"ping_pong"` in die relevante {{WebExtAPIRef("runtime")}} API-Funktion eingibt. Die Anwendung selbst befindet sich unter `"/path/to/native-messaging/app/ping_pong.py"`.

> [!NOTE]
> Chrome identifiziert erlaubte Erweiterungen mit einem anderen Schlüssel: `allowed_origins`, unter Verwendung der ID der WebExtension. Siehe [Chrome-Dokumentation für mehr Details](https://developer.chrome.com/docs/apps/nativeMessaging/#native-messaging-host) und siehe [Chrome-Inkompatibilitäten unten](#chrome-inkompatibilitäten).

### Windows-Einrichtung

Als Beispiel können Sie auch [die Readme zur nativen Messaging-Erweiterung auf GitHub](https://github.com/SphinxKnight/webextensions-examples/tree/master/native-messaging#windows-setup) konsultieren. Wenn Sie Ihre lokale Einrichtung prüfen möchten, nachdem Sie dieses Repository auf einer Windows-Maschine geforkt haben, können Sie `check_config_win.py` ausführen, um einige Probleme zu beheben.

#### App-Manifest

Im obigen Beispiel ist die native Anwendung ein Python-Skript. Es kann schwierig sein, Windows dazu zu bringen, Python-Skripte auf diese Weise zuverlässig auszuführen. Eine Alternative ist, eine `.bat` Datei bereitzustellen und im Manifest der Anwendung darauf zu verlinken:

```json
{
  "name": "ping_pong",
  "description": "Example host for native messaging",
  "path": "c:\\path\\to\\native-messaging\\app\\ping_pong_win.bat",
  "type": "stdio",
  "allowed_extensions": ["ping_pong@example.org"]
}
```

(Siehe Hinweis oben zur [Chrome-Kompatibilität](#chrome-inkompatibilitäten) bezüglich des `allowed_extensions` Schlüssels und seines Gegenstücks in Chrome).

Die Batch-Datei ruft dann das Python-Skript auf:

```bash
@echo off

python -u "c:\\path\\to\\native-messaging\\app\\ping_pong.py"
```

#### Registrierung

Der Browser findet die Erweiterung basierend auf Registrierungsschlüsseln, die sich an einem bestimmten Ort befinden. Sie müssen sie entweder programmatisch mit Ihrer endgültigen Anwendung oder manuell hinzufügen, wenn Sie das Beispiel von GitHub verwenden. Für mehr Details, siehe [Manifest-Speicherort](/de/docs/Mozilla/Add-ons/WebExtensions/Native_manifests#manifest_location).

Anhand des `ping_pong` Beispiels sollten, wenn Sie Firefox verwenden (siehe [diese Seite für Chrome](https://developer.chrome.com/docs/apps/nativeMessaging/#native-messaging-host-location)), eine der beiden Registrierungseinträge für das Messaging erstellt sein:

- `HKEY_CURRENT_USER\Software\Mozilla\NativeMessagingHosts\ping_pong`
- `HKEY_LOCAL_MACHINE\Software\Mozilla\NativeMessagingHosts\ping_pong`

Der Standardwert für den Schlüssel sollte der Pfad zum _Anwendungs_-Manifest sein: z.B. `C:\Users\<myusername>\webextensions-examples\native-messaging\app\ping_pong.json`.

> [!NOTE]
> Wenn Sie Ihr Werk auf dem Beispiel auf GitHub basieren, lesen Sie bitte [diesen Teil der Readme](https://github.com/SphinxKnight/webextensions-examples/tree/master/native-messaging#windows-setup) und prüfen Sie die Ausgabe von `check_config_win.py`, bevor Sie die WebExtension in Ihrem Browser installieren.

## Nachrichtenaustausch

Angesichts der obigen Einrichtung kann eine Erweiterung JSON-Nachrichten mit einer nativen Anwendung austauschen.

### Erweiterungsebene

Native Nachrichtenübermittlung kann nicht direkt in Inhaltsskripts verwendet werden. Sie müssen [sie indirekt über Hintergrundskripts ausführen](/de/docs/Mozilla/Add-ons/WebExtensions/Content_scripts#communicating_with_background_scripts).

Hier gibt es zwei Muster zu verwenden: **verbindungsbasierte Nachrichtenübermittlung** und **verbindungslose Nachrichtenübermittlung**.

#### Verbindungsbasierte Nachrichtenübermittlung

Mit diesem Muster rufen Sie {{WebExtAPIRef("runtime.connectNative()")}} auf, indem Sie den Namen der Anwendung (den Wert der `"name"` Eigenschaft im App-Manifest) übergeben. Dies startet die Anwendung, falls sie noch nicht läuft, und gibt ein {{WebExtAPIRef("runtime.Port")}} Objekt an die Erweiterung zurück.

Zwei Argumente werden an die native App übergeben, wenn sie startet:

- Der vollständige Pfad zum App-Manifest.
- (neu in Firefox 55) die ID (wie im [browser_specific_settings](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_specific_settings) `manifest.json` Schlüssel angegeben) des Add-ons, das es gestartet hat.

> [!NOTE]
> Chrome behandelt die übergebenen Argumente anders:
>
> - Auf Linux und Mac gibt Chrome _ein_ Argument weiter: den Ursprung der Erweiterung, die es gestartet hat (in der Form `chrome-extension://[extensionID]`). Dies ermöglicht es der App, die Erweiterung zu identifizieren.
> - Auf Windows gibt Chrome _zwei_ Argumente weiter: das erste ist der Ursprung der Erweiterung, und das zweite ist ein Handle zum nativen Chrome-Fenster, das die App gestartet hat.

Die Anwendung bleibt in Betrieb, bis die Erweiterung `Port.disconnect()` aufruft oder die Seite, die die Verbindung hergestellt hat, geschlossen wird.

Um Nachrichten mit `Port` zu senden, rufen Sie dessen `postMessage()` Funktion auf und übergeben die zu sendende JSON-Nachricht. Um Nachrichten mit `Port` zu empfangen, fügen Sie den Listener mit seiner `onMessage.addListener()` Funktion hinzu.

Hier ist ein Beispiel für ein Hintergrundskript, das eine Verbindung mit der `"ping_pong"` App herstellt, Nachrichten von ihr empfängt und dann eine `"ping"` Nachricht sendet, wann immer der Benutzer die Browser-Aktion anklickt:

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

> [!CALLOUT]
> Um mehr über das Debuggen von Hintergrundskripts und das Anzeigen von Konsolenausgaben zu erfahren, siehe [Debugging von Hintergrundskripts](https://extensionworkshop.com/documentation/develop/debugging/#debugging-background-scripts) im Extension Workshop.

#### Verbindungslose Nachrichtenübermittlung

Mit diesem Muster rufen Sie {{WebExtAPIRef("runtime.sendNativeMessage()")}} auf und übergeben es:

- den Namen der Anwendung
- die zu sendende JSON-Nachricht
- optional einen Rückruf.

Für jede Nachricht wird eine neue Instanz der App erstellt. Die App übergibt zwei Argumente, wenn sie startet:

- der vollständige Pfad zum App-Manifest
- (neu in Firefox 55) die ID (wie im [browser_specific_settings](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_specific_settings) manifest.json Schlüssel angegeben) des Add-ons, das es gestartet hat.

Die erste Nachricht, die von der App gesendet wird, wird als Antwort auf den `sendNativeMessage()` Aufruf behandelt und in den Rückruf übergeben.

Hier ist das obige Beispiel, umgeschrieben zur Verwendung von `runtime.sendNativeMessage()`:

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

### App-Ebene

Auf der Anwendungsseite verwenden Sie die Standardeingabe, um Nachrichten zu empfangen, und die Standardausgabe, um sie zu senden.

Jede Nachricht wird mit JSON serialisiert, UTF-8-kodiert und wird mit einem 32-Bit-Wert vorangehen, der die Nachrichtenlänge in der nativen Byte-Reihenfolge enthält.

Die maximale Größe einer einzelnen Nachricht von der Anwendung beträgt 1 MB. Die maximale Größe einer Nachricht, die an die Anwendung gesendet wird, beträgt 4 GB.

Sie können schnell mit dem Senden und Empfangen von Nachrichten mit diesem Node.js-Code, `nm_nodejs.mjs`, beginnen:

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

Hier ist ein weiteres Beispiel in Python. Es hört auf Nachrichten von der Erweiterung. Beachten Sie, dass die Datei auf Linux ausführbar sein muss. Wenn die Nachricht `"ping"` lautet, antwortet sie mit einer Nachricht `"pong"`.

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

In Python 3 müssen die empfangenen Binärdaten in eine Zeichenkette dekodiert werden. Der Inhalt, der an das Addon zurückgesendet werden soll, muss in Binärdaten unter Verwendung einer Struktur kodiert werden:

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

Wenn Sie die native Anwendung mit `runtime.connectNative()` verbunden haben, bleibt sie in Betrieb, bis die Erweiterung `Port.disconnect()` aufruft oder die Seite, die die Verbindung hergestellt hat, geschlossen wird. Wenn Sie die native Anwendung durch Senden von `runtime.sendNativeMessage()` gestartet haben, wird sie geschlossen, nachdem sie die Nachricht erhalten hat und eine Antwort gesendet wurde.

Um die native Anwendung zu schließen:

- Bei \*nix Systemen wie macOS und Linux sendet der Browser `SIGTERM` an die native Anwendung und danach `SIGKILL`, nachdem die Anwendung die Möglichkeit hatte, ordnungsgemäß zu beenden. Diese Signale propagieren sich an alle Unterprozesse, es sei denn, sie lösen sich in eine neue Prozessgruppe auf.
- Unter Windows legt der Browser den Prozess der nativen Anwendung in ein [Job-Objekt](https://learn.microsoft.com/en-us/windows/win32/procthread/job-objects) und beendet den Job. Wenn die native Anwendung zusätzliche Prozesse startet und möchte, dass diese nach Beendigung der nativen Anwendung geöffnet bleiben, muss die native Anwendung den zusätzlichen Prozess mit dem [`CREATE_BREAKAWAY_FROM_JOB`](https://learn.microsoft.com/en-us/windows/win32/procthread/process-creation-flags) Flag starten, z. B. durch Verwendung von `CreateProcess`.

## Fehlerbehebung

Wenn etwas schiefgeht, prüfen Sie die [Browser-Konsole](https://extensionworkshop.com/documentation/develop/debugging/#viewing_log_output). Wenn die native Anwendung irgendeine Ausgabe an stderr sendet, leitet der Browser sie an die Browser-Konsole um. Wenn Sie es bis zum Start der nativen Anwendung geschafft haben, sehen Sie alle von ihr ausgegebenen Fehlermeldungen.

Wenn Sie es nicht geschafft haben, die Anwendung auszuführen, sollten Sie eine Fehlermeldung sehen, die Ihnen einen Hinweis auf das Problem gibt.

```plain
"No such native application <name>"
```

- Überprüfen Sie, ob der Name, der an `runtime.connectNative()` übergeben wurde, mit dem Namen im App-Manifest übereinstimmt.
- macOS/Linux: Überprüfen Sie, dass der Name des App-Manifests `<name>.json` ist.
- macOS/Linux: Überprüfen Sie den Speicherort der Manifestdatei der nativen Anwendung, wie im [Referenz zu nativen Manifesten](/de/docs/Mozilla/Add-ons/WebExtensions/Native_manifests#macos) erwähnt.
- Windows: Prüfen Sie, ob der Registrierungsschlüssel am richtigen Ort ist und ob sein Name mit dem Namen im App-Manifest übereinstimmt.
- Windows: Prüfen Sie, dass der im Registrierungsschlüssel angegebene Pfad auf das App-Manifest verweist.

  ```plain
  "Error: Invalid application <name>"
  ```

- Überprüfen Sie, dass der Name der Anwendung keine ungültigen Zeichen enthält.

  ```plain
  "'python' is not recognized as an internal or external command, ..."
  ```

- Windows: Wenn Ihre Anwendung ein Python-Skript ist, überprüfen Sie, ob Python installiert ist und Ihr Pfad dafür eingerichtet ist.

  ```plain
  "File at path <path> does not exist, or is not executable"
  ```

- Wenn Sie dies sehen, wurde das App-Manifest erfolgreich gefunden.
- Überprüfen Sie, ob der "path" im Manifest der App korrekt ist.
- Windows: Prüfen Sie, ob Sie die Pfadtrennzeichen richtig escapet haben (`"c:\\path\\to\\file"`).
- Überprüfen Sie, ob die App sich an dem im `"path"`-Eigenschaft des App-Manifests angegebenen Ort befindet.
- Überprüfen Sie, ob die App ausführbar ist.

  ```plain
  "This extension does not have permission to use native application <name>"
  ```

- Überprüfen Sie, dass der `"allowed_extensions"` Schlüssel im App-Manifest die ID des Add-ons enthält.

  ```plain
      "TypeError: browser.runtime.connectNative is not a function"
  ```

- Prüfen Sie, ob die Erweiterung die `"nativeMessaging"` Berechtigung hat.

  ```plain
  "[object Object]       NativeMessaging.jsm:218"
  ```

- Es gab ein Problem beim Starten der Anwendung.

## Chrome-Inkompatibilitäten

Es gibt eine Anzahl von Unterschieden zwischen Browsern, die die native Nachrichtenübermittlung in Web-Erweiterungen beeinflussen, einschließlich der Argumente, die an die native App übergeben werden, des Speicherorts der Manifestdatei usw.
Diese Unterschiede werden in [Chrome-Inkompatibilitäten > Native Messaging](/de/docs/Mozilla/Add-ons/WebExtensions/Chrome_incompatibilities#native_messaging) besprochen.
