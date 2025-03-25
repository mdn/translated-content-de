---
title: Native Messaging
slug: Mozilla/Add-ons/WebExtensions/Native_messaging
l10n:
  sourceCommit: e13b6ffe7c9cb05c6a89fcb3c8fcbc987eb05211
---

{{AddonSidebar}}

**Native Messaging** ermöglicht es einer Erweiterung, Nachrichten mit einer nativen Anwendung auszutauschen, die auf dem Computer des Nutzers installiert ist. Die native Nachrichtenübermittlung dient den Erweiterungen ohne zusätzliche Zugriffe über das Web.

Passwortmanager: Die native Anwendung verwaltet, speichert und verschlüsselt Passwörter. Anschließend kommuniziert die native Anwendung mit der Erweiterung, um Webformulare auszufüllen.

Native Messaging ermöglicht auch, dass Erweiterungen auf Ressourcen zugreifen, die über die WebExtension-APIs nicht zugänglich sind (z.B. bestimmte Hardware).

Die native Anwendung wird nicht vom Browser installiert oder verwaltet. Die native Anwendung wird mithilfe des Installationsmechanismus des zugrunde liegenden Betriebssystems installiert. Erstellen Sie eine JSON-Datei, die als "Host-Manifest" oder "App-Manifest" bezeichnet wird. Installieren Sie die JSON-Datei an einem definierten Ort. Die App-Manifest-Datei beschreibt, wie der Browser eine Verbindung zur nativen Anwendung herstellen kann.

Die Erweiterung muss die `"nativeMessaging"`-[Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions) oder [optionale Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/optional_permissions) in der `manifest.json`-Datei anfordern. Auch die native Anwendung muss der Erweiterung Berechtigung erteilen, indem sie die ID im `"allowed_extensions"`-Feld des App-Manifests einträgt.

Nach der Installation kann die Erweiterung JSON-Nachrichten mit der nativen Anwendung austauschen. Verwenden Sie dazu eine Reihe von Funktionen in der {{WebExtAPIRef("runtime")}}-API. Auf der Seite der nativen App werden Nachrichten über den Standard-Eingang (`stdin`) empfangen und über den Standard-Ausgang (`stdout`) gesendet.

![Anwendungsablauf: Die JSON-Datei der nativen App befindet sich auf dem Computer des Nutzers und stellt der nativen Anwendung Ressourcendaten zur Verfügung. Die Lese- und Schreibfunktionen der nativen Anwendung interagieren mit den Laufzeitereignissen der Browsererweiterung.](native-messaging.png)

Unterstützung für Native Messaging in Erweiterungen ist größtenteils mit Chrome kompatibel, mit zwei Hauptunterschieden:

- Das App-Manifest listet `allowed_extensions` als ein Array von App-IDs auf, während Chrome `allowed_origins` als ein Array von `"chrome-extension"` URLs aufführt.
- Das App-Manifest wird an einem anderen Ort [im Vergleich zu Chrome](https://developer.chrome.com/docs/apps/nativeMessaging/#native-messaging-host-location) gespeichert.

Ein vollständiges Beispiel finden Sie im Verzeichnis [`native-messaging` auf GitHub](https://github.com/mdn/webextensions-examples/tree/main/native-messaging) des `webextensions-examples`-Repositories. Der größte Teil des Beispielcodes in diesem Artikel stammt aus diesem Beispiel.

## Einrichtung

### Erweiterungsmanifest

Erweiterungen, die mit einer nativen Anwendung kommunizieren:

- Setzen Sie die `"nativeMessaging"`-[Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions) oder [optionale Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/optional_permissions) in der [`manifest.json`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json) Datei.
- Geben Sie Ihre Add-on-ID explizit an. Verwenden Sie den [`browser_specific_settings`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_specific_settings) Manifestschlüssel. (Das App-Manifest wird den Satz von Erweiterungen identifizieren, die eine Verbindung zu den IDs ermöglichen).

Beispiel `manifest.json`-Datei:

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
> Chrome unterstützt den [browser_specific_settings](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_specific_settings) Schlüssel nicht. Sie müssen ein anderes Manifest ohne diesen Schlüssel verwenden, um eine äquivalente WebExtension in Chrome zu installieren. Siehe [Chrome-Inkompatibilitäten unten](#chrome_inkompatibilitäten).

> [!NOTE]
> Wenn Sie eine optionale Berechtigung verwenden, überprüfen Sie, ob die Berechtigung erteilt wurde und fordern Sie, falls erforderlich, die Berechtigung vom Nutzer über die {{WebExtAPIRef("permissions")}}-API an, bevor Sie mit der nativen Anwendung kommunizieren.

### App-Manifest

Das App-Manifest beschreibt dem Browser, wie es eine Verbindung zur nativen Anwendung herstellen kann.

Die App-Manifest-Datei muss zusammen mit der nativen Anwendung installiert werden. Der Browser liest und validiert App-Manifest-Dateien, installiert oder verwaltet sie jedoch nicht. Das Sicherheitsmodell für die Installation und Aktualisierung dieser Dateien ähnelt mehr dem für native Anwendungen als dem für Erweiterungen mit WebExtension-APIs.

Details zur Syntax und zum Standort des nativen App-Manifests finden Sie unter [Native Manifests](/de/docs/Mozilla/Add-ons/WebExtensions/Native_manifests).

Zum Beispiel hier ein Manifest für die `"ping_pong"`-native Anwendung:

```json
{
  "name": "ping_pong",
  "description": "Example host for native messaging",
  "path": "/path/to/native-messaging/app/ping_pong.py",
  "type": "stdio",
  "allowed_extensions": ["ping_pong@example.org"]
}
```

Dies ermöglicht es der Erweiterung mit der ID `"ping_pong@example.org"`, eine Verbindung herzustellen, indem der Name `"ping_pong"` in die relevante {{WebExtAPIRef("runtime")}}-API-Funktion übergeben wird. Die Anwendung selbst befindet sich unter `"/path/to/native-messaging/app/ping_pong.py"`.

> [!NOTE]
> Chrome identifiziert erlaubte Erweiterungen mit einem anderen Schlüssel: `allowed_origins`, unter Verwendung der ID der WebExtension. Siehe [Chrome-Dokumentation für mehr Details](https://developer.chrome.com/docs/apps/nativeMessaging/#native-messaging-host) und [Chrome-Inkompatibilitäten unten](#chrome_inkompatibilitäten).

### Windows-Einrichtung

Als Beispiel können Sie auch das [Readme zur Native-Messaging-Erweiterung auf GitHub](https://github.com/SphinxKnight/webextensions-examples/tree/master/native-messaging#windows-setup) heranziehen. Wenn Sie Ihre lokale Einrichtung nach dem Forken dieses Repositories auf einem Windows-Rechner überprüfen möchten, können Sie `check_config_win.py` ausführen, um einige Probleme zu beheben.

#### App-Manifest

Im obigen Beispiel ist die native Anwendung ein Python-Skript. Es kann schwierig sein, Windows dazu zu bringen, Python-Skripte zuverlässig auf diese Weise auszuführen, daher ist eine Alternative, eine `.bat`-Datei bereitzustellen und in der Anwendungsmanifestdatei darauf zu verlinken:

```json
{
  "name": "ping_pong",
  "description": "Example host for native messaging",
  "path": "c:\\path\\to\\native-messaging\\app\\ping_pong_win.bat",
  "type": "stdio",
  "allowed_extensions": ["ping_pong@example.org"]
}
```

(Siehe den Hinweis oben zur [Chrome-Kompatibilität](#chrome_inkompatibilitäten) bezüglich des `allowed_extensions`-Schlüssels und seines Gegenstücks in Chrome).

Die Batch-Datei ruft dann das Python-Skript auf:

```bash
@echo off

python -u "c:\\path\\to\\native-messaging\\app\\ping_pong.py"
```

#### Registry

Der Browser findet die Erweiterung basierend auf Registrierungsschlüsseln, die an einem bestimmten Ort platziert sind. Sie müssen sie entweder programmatisch mit Ihrer endgültigen Anwendung hinzufügen oder manuell, wenn Sie das Beispiel von GitHub verwenden. Weitere Details finden Sie unter [Manifeststandort](/de/docs/Mozilla/Add-ons/WebExtensions/Native_manifests#manifest_location).

Weiter mit dem `ping_pong`-Beispiel, wenn Sie Firefox verwenden (siehe [diese Seite für Chrome](https://developer.chrome.com/docs/apps/nativeMessaging/#native-messaging-host-location)), sollte einer der beiden Registrierungseinträge für die Nachrichtenübermittlung erstellt werden:

- `HKEY_CURRENT_USER\Software\Mozilla\NativeMessagingHosts\ping_pong`
- `HKEY_LOCAL_MACHINE\Software\Mozilla\NativeMessagingHosts\ping_pong`

Der Standardwert für den Schlüssel sollte der Pfad zum _Anwendungs_-Manifest sein: z. B. `C:\Users\<myusername>\webextensions-examples\native-messaging\app\ping_pong.json`.

> [!NOTE]
> Wenn Sie Ihre Arbeit auf dem Beispiel auf GitHub basieren, lesen Sie bitte [diesen Teil des Readmes](https://github.com/SphinxKnight/webextensions-examples/tree/master/native-messaging#windows-setup) und überprüfen Sie die Ausgabe von `check_config_win.py`, bevor Sie die WebExtension in Ihrem Browser installieren.

## Nachrichten austauschen

Angesichts der oben genannten Einrichtung kann eine Erweiterung JSON-Nachrichten mit einer nativen Anwendung austauschen.

### Erweiterungsseite

Native Messaging kann nicht direkt in Inhalts-Skripts verwendet werden. Sie müssen es [indirekt über Hintergrundskripts tun](/de/docs/Mozilla/Add-ons/WebExtensions/Content_scripts#communicating_with_background_scripts).

Es gibt zwei Muster, die Sie hier verwenden können: **verbindungsbasierte Nachrichtenübermittlung** und **verbindungslos Nachrichtenübermittlung**.

#### Verbindungsbasierte Nachrichtenübermittlung

Mit diesem Muster rufen Sie {{WebExtAPIRef("runtime.connectNative()")}} auf und übergeben den Namen der Anwendung (den Wert der `"name"`-Eigenschaft im App-Manifest). Dies startet die Anwendung, wenn sie nicht bereits läuft und gibt ein {{WebExtAPIRef("runtime.Port")}}-Objekt an die Erweiterung zurück.

Zwei Argumente werden an die native App übergeben, wenn sie startet:

- Der vollständige Pfad zum App-Manifest.
- (neu in Firefox 55) die ID (wie im [browser_specific_settings](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_specific_settings) `manifest.json` Schlüssel angegeben) des Add-ons, das sie gestartet hat.

> [!NOTE]
> Chrome behandelt die übergebenen Argumente anders:
>
> - Unter Linux und Mac gibt Chrome _ein_ Argument weiter: den Ursprung der Erweiterung, die sie gestartet hat (in der Form `chrome-extension://[extensionID]`). Dies ermöglicht es der App, die Erweiterung zu identifizieren.
> - Unter Windows gibt Chrome _zwei_ Argumente weiter: das erste ist der Ursprung der Erweiterung, und das zweite ist ein Handle zum nativen Fenster von Chrome, das die App gestartet hat.

Die Anwendung bleibt in Betrieb, bis die Erweiterung `Port.disconnect()` aufruft oder die Seite, die mit ihr verbunden ist, geschlossen wird.

Um Nachrichten mit `Port` zu senden, rufen Sie ihre `postMessage()`-Funktion auf und übergeben die zu sendende JSON-Nachricht. Um auf Nachrichten mittels `Port` zu hören, fügen Sie den Listener mit ihrer `onMessage.addListener()`-Funktion hinzu.

Hier ist ein Beispiel eines Hintergrundskriptes, das eine Verbindung zur `"ping_pong"`-App herstellt, auf Nachrichten von ihr hört und dann eine `"ping"`-Nachricht sendet, wann immer der Benutzer auf die Browser-Aktion klickt:

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

#### Verbindungslos Nachrichtenübermittlung

Mit diesem Muster rufen Sie {{WebExtAPIRef("runtime.sendNativeMessage()")}} auf, indem Sie es übergeben:

- den Namen der Anwendung
- die zu sendende JSON-Nachricht
- optional, einen Callback.

Für jede Nachricht wird eine neue Instanz der App erstellt. Die App erhält beim Starten zwei Argumente:

- den vollständigen Pfad zum App-Manifest
- (neu in Firefox 55) die ID (wie in den [browser_specific_settings](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_specific_settings) manifest.json Schlüssel angegeben) des Add-ons, das es gestartet hat.

Die erste Nachricht, die von der App gesendet wird, wird als Antwort auf den Aufruf von `sendNativeMessage()` behandelt und wird in den Callback eingespeist.

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

Auf der Seite der Anwendung nutzen Sie den Standard-Eingang, um Nachrichten zu empfangen und den Standard-Ausgang, um sie zu senden.

Jede Nachricht wird mit JSON serialisiert, UTF-8 kodiert und wird mit einem vorangestellten 32-Bit-Wert versehen, der die Nachrichtenlänge in der Byte-Reihenfolge des Hostsystems enthält.

Die maximale Größe einer einzelnen Nachricht von der Anwendung beträgt 1 MB. Die maximale Größe einer an die Anwendung gesendeten Nachricht beträgt 4 GB.

Sie können schnell mit dem Senden und Empfangen von Nachrichten mit diesem NodeJS-Code `nm_nodejs.mjs` anfangen:

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

Hier ist ein weiteres Beispiel, das in Python geschrieben ist. Es hört auf Nachrichten von der Erweiterung. Beachten Sie, dass die Datei unter Linux ausführbar sein muss. Wenn die Nachricht `"ping"` lautet, antwortet sie mit einer Nachricht `"pong"`.

Das ist die Python 2 Version:

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

In Python 3 müssen die empfangenen Binärdaten in einen String dekodiert werden. Der Inhalt, der an das Add-On zurückgesendet werden soll, muss unter Verwendung eines Structs in Binärdaten kodiert werden:

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

## Die native App schließen

Wenn Sie sich mit der nativen Anwendung über `runtime.connectNative()` verbunden haben, bleibt sie in Betrieb, bis die Erweiterung `Port.disconnect()` aufruft oder die Seite, die mit ihr verbunden ist, geschlossen wird. Wenn Sie die native Anwendung durch Senden von `runtime.sendNativeMessage()` gestartet haben, wird sie geschlossen, nachdem sie die Nachricht empfangen und eine Antwort gesendet hat.

Um die native Anwendung zu schließen:

- Auf \*nix-Systemen wie macOS und Linux sendet der Browser `SIGTERM` an die native Anwendung, dann `SIGKILL`, nachdem die Anwendung die Möglichkeit hatte, sich ordnungsgemäß zu beenden. Diese Signale werden an alle Unterprozesse weitergegeben, es sei denn, sie trennen sich in eine neue Prozessgruppe.
- Unter Windows platziert der Browser den Prozess der nativen Anwendung in ein [Job-Objekt](https://learn.microsoft.com/en-us/windows/win32/procthread/job-objects) und beendet das Job-Objekt. Wenn die native Anwendung zusätzliche Prozesse startet und diese offen bleiben sollen, nachdem die native Anwendung geschlossen wurde, muss die native Anwendung den zusätzlichen Prozess mit dem [`CREATE_BREAKAWAY_FROM_JOB`](https://learn.microsoft.com/en-us/windows/win32/procthread/process-creation-flags) Flag starten, etwa durch die Verwendung von `CreateProcess`.

## Problemlösung

Wenn etwas schiefgeht, überprüfen Sie die [Browser-Konsole](https://extensionworkshop.com/documentation/develop/debugging/#viewing_log_output). Wenn die native Anwendung eine Ausgabe an stderr sendet, leitet der Browser diese an die Browser-Konsole weiter. Wenn Sie es geschafft haben, die native Anwendung zu starten, sehen Sie alle Fehlernachrichten, die sie ausgibt.

Wenn Sie es nicht geschafft haben, die Anwendung zu starten, sollten Sie eine Fehlermeldung sehen, die Ihnen einen Hinweis auf das Problem gibt.

```plain
"No such native application <name>"
```

- Überprüfen Sie, ob der Name, der an `runtime.connectNative()` übergeben wird, mit dem Namen im App-Manifest übereinstimmt.
- macOS/Linux: Überprüfen Sie, ob der Name des App-Manifests `<name>.json` lautet.
- macOS/Linux: Überprüfen Sie den Standort der Manifestdatei der nativen Anwendung wie [hier](/de/docs/Mozilla/Add-ons/WebExtensions/Native_manifests#macos) angegeben.
- Windows: Überprüfen Sie, ob der Registrierungsschlüssel an der richtigen Stelle ist und ob sein Name mit dem Namen im App-Manifest übereinstimmt.
- Windows: Überprüfen Sie, ob der im Registrierungsschlüssel angegebene Pfad auf das App-Manifest verweist.

  ```plain
  "Error: Invalid application <name>"
  ```

- Überprüfen Sie, ob der Name der Anwendung keine ungültigen Zeichen enthält.

  ```plain
  "'python' is not recognized as an internal or external command, ..."
  ```

- Windows: Wenn Ihre Anwendung ein Python-Skript ist, überprüfen Sie, ob Sie Python installiert haben und Ihr Pfad dafür eingerichtet ist.

  ```plain
  "File at path <path> does not exist, or is not executable"
  ```

- Wenn Sie dies sehen, wurde das App-Manifest erfolgreich gefunden.
- Überprüfen Sie, ob der "path" im App-Manifest korrekt ist.
- Windows: Überprüfen Sie, ob Sie die Pfadtrennzeichen korrekt escaped haben (`"c:\\path\\to\\file"`).
- Überprüfen Sie, ob sich die App am im `"path"`-Property des App-Manifests angegebenen Ort befindet.
- Überprüfen Sie, ob die App ausführbar ist.

  ```plain
  "This extension does not have permission to use native application <name>"
  ```

- Überprüfen Sie, ob der `"allowed_extensions"`-Schlüssel im App-Manifest die ID des Add-ons enthält.

  ```plain
      "TypeError: browser.runtime.connectNative is not a function"
  ```

- Überprüfen Sie, ob die Erweiterung die `"nativeMessaging"`-Berechtigung besitzt.

  ```plain
  "[object Object]       NativeMessaging.jsm:218"
  ```

- Es gab ein Problem beim Starten der Anwendung.

## Chrome Inkompatibilitäten

Es gibt eine Reihe von Unterschieden zwischen Browsern, die sich auf native Messaging in Web Extensions auswirken, einschließlich der an die native App übergebenen Argumente, des Standorts der Manifestdatei usw.
Diese Unterschiede werden in [Chrome Inkompatibilitäten > Native Messaging](/de/docs/Mozilla/Add-ons/WebExtensions/Chrome_incompatibilities#native_messaging) diskutiert.
