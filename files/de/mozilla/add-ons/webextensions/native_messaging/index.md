---
title: Native Messaging
slug: Mozilla/Add-ons/WebExtensions/Native_messaging
l10n:
  sourceCommit: d39f3cabc4e5ee5029d156e3cb3dfad387a3ca26
---

**Native Messaging** ermöglicht einer Erweiterung, Nachrichten mit einer nativen Anwendung auszutauschen, die auf dem Computer des Benutzers installiert ist. Das native Messaging dient den Erweiterungen, ohne dass zusätzliche Zugriffe über das Web erforderlich sind.

Passwortmanager: Die native Anwendung verwaltet, speichert und verschlüsselt Passwörter. Dann kommuniziert die native Anwendung mit der Erweiterung, um Web-Formulare auszufüllen.

Native Messaging ermöglicht es auch Erweiterungen, auf Ressourcen zuzugreifen, die über die WebExtension-APIs nicht zugänglich sind (z. B. bestimmte Hardware).

Die native Anwendung wird nicht vom Browser installiert oder verwaltet. Die native Anwendung wird mithilfe der Installationsmechanismen des zugrunde liegenden Betriebssystems installiert. Erstellen Sie eine JSON-Datei namens "Host-Manifest" oder "App-Manifest". Diese JSON-Datei muss an einem definierten Ort installiert werden. Die App-Manifest-Datei beschreibt, wie der Browser eine Verbindung zur nativen Anwendung herstellen kann.

Die Erweiterung muss die `"nativeMessaging"` [Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions) oder [optionale Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/optional_permissions) in der `manifest.json` Datei anfordern. Ebenso muss die native Anwendung der Erweiterung die Erlaubnis erteilen, indem sie die ID im Feld `"allowed_extensions"` des App-Manifests angibt.

Nach der Installation kann die Erweiterung JSON-Nachrichten mit der nativen Anwendung austauschen. Verwenden Sie dazu eine Reihe von Funktionen in der {{WebExtAPIRef("runtime")}} API. Auf der Seite der nativen App werden Nachrichten mit Standardeingaben (`stdin`) empfangen und mit Standardausgaben (`stdout`) gesendet.

![Anwendungsablauf: Die JSON-Datei der nativen App befindet sich auf dem Computer des Benutzers und stellt der nativen Anwendung Informationen über Ressourcen bereit. Die Lese- und Schreibfunktionen der nativen Anwendung interagieren mit den Laufzeitereignissen der Browser-Erweiterung.](native-messaging.png)

Die Unterstützung für native Messaging in Erweiterungen ist größtenteils mit Chrome kompatibel, mit zwei Hauptunterschieden:

- Das App-Manifest listet `allowed_extensions` als ein Array von App-IDs auf, während Chrome `allowed_origins` als ein Array von `"chrome-extension"` URLs auflistet.
- Das App-Manifest wird an einem anderen Ort gespeichert [verglichen mit Chrome](https://developer.chrome.com/docs/apps/nativeMessaging/#native-messaging-host-location).

Ein komplettes Beispiel finden Sie im [`native-messaging` Verzeichnis](https://github.com/mdn/webextensions-examples/tree/main/native-messaging) des `webextensions-examples` Repositories auf GitHub. Der größte Teil des Beispielcodes in diesem Artikel stammt aus diesem Beispiel.

## Einrichtung

### Erweiterungsmanifest

Die Erweiterung kommuniziert mit einer nativen Anwendung:

- Setzen Sie die `"nativeMessaging"` [Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions) oder [optionale Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/optional_permissions) in der [`manifest.json`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json) Datei.
- Geben Sie die Add-on-ID explizit an. Verwenden Sie den [`browser_specific_settings`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_specific_settings) Manifest-Schlüssel. (Das App-Manifest wird die Menge der Erweiterungen identifizieren, die es ermöglichen, sich mit den IDs zu verbinden).

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
> Wenn Sie optionale Berechtigungen verwenden, überprüfen Sie, ob die Berechtigung erteilt wurde, und fordern Sie gegebenenfalls die Berechtigung vom Benutzer an, indem Sie die {{WebExtAPIRef("permissions")}} API verwenden, bevor Sie mit der nativen Anwendung kommunizieren.

### App-Manifest

Das App-Manifest beschreibt dem Browser, wie er eine Verbindung zur nativen Anwendung herstellen kann.

Die App-Manifest-Datei muss zusammen mit der nativen Anwendung installiert werden. Der Browser liest und validiert App-Manifest-Dateien, installiert oder verwaltet sie jedoch nicht. Das Sicherheitsmodell dafür, wann und wie diese Dateien installiert und aktualisiert werden, ähnelt eher dem für native Anwendungen als dem für Erweiterungen, die über WebExtension-APIs genutzt werden.

Einzelheiten zur Syntax und zum Speicherort nativer App-Manifeste finden Sie unter [Native Manifeste](/de/docs/Mozilla/Add-ons/WebExtensions/Native_manifests).

Als Beispiel finden Sie hier ein Manifest für die `"ping_pong"` native Anwendung:

```json
{
  "name": "ping_pong",
  "description": "Example host for native messaging",
  "path": "/path/to/native-messaging/app/ping_pong.py",
  "type": "stdio",
  "allowed_extensions": ["ping_pong@example.org"]
}
```

Dies ermöglicht es der Erweiterung, deren ID `"ping_pong@example.org"` ist, eine Verbindung herzustellen, indem sie den Namen `"ping_pong"` in die relevante {{WebExtAPIRef("runtime")}} API-Funktion übergibt. Die Anwendung selbst befindet sich unter `"/path/to/native-messaging/app/ping_pong.py"`.

> [!NOTE]
> Chrome identifiziert erlaubte Erweiterungen mit einem anderen Schlüssel: `allowed_origins`, unter Verwendung der ID der WebExtension. Weitere Hinweise entnehmen Sie bitte der [Chrome-Dokumentation](https://developer.chrome.com/docs/apps/nativeMessaging/#native-messaging-host) und siehe [Chrome-Inkompatibilitäten unten](#chrome-inkompatibilitäten).

### Windows-Einrichtung

Als Beispiel können Sie sich auch auf [das Readme zur Native Messaging-Erweiterung auf GitHub](https://github.com/SphinxKnight/webextensions-examples/tree/master/native-messaging#windows-setup) beziehen. Wenn Sie Ihre lokale Einrichtung überprüfen möchten, nachdem Sie dieses Repository auf einem Windows-Rechner geforkt haben, können Sie `check_config_win.py` ausführen, um einige Probleme zu beheben.

#### App-Manifest

Im obigen Beispiel ist die native Anwendung ein Python-Skript. Es kann schwierig sein, Windows Python-Skripte auf diese Weise zuverlässig ausführen zu lassen, daher ist eine Alternative, eine `.bat`-Datei bereitzustellen und auf diese vom Anwendungsmanifest aus zu verlinken:

```json
{
  "name": "ping_pong",
  "description": "Example host for native messaging",
  "path": "c:\\path\\to\\native-messaging\\app\\ping_pong_win.bat",
  "type": "stdio",
  "allowed_extensions": ["ping_pong@example.org"]
}
```

(Siehe oben stehende Hinweise zur [Chrome-Kompatibilität](#chrome-inkompatibilitäten) bezüglich des `allowed_extensions` Schlüssels und seines Gegenstücks in Chrome).

Die Batch-Datei ruft dann das Python-Skript auf:

```bash
@echo off

python -u "c:\\path\\to\\native-messaging\\app\\ping_pong.py"
```

#### Registrierung

Der Browser findet die Erweiterung basierend auf Registrierungsschlüsseln, die an einem bestimmten Ort gespeichert sind. Diese müssen entweder programmgesteuert mit Ihrer fertigen Anwendung hinzugefügt werden oder manuell, wenn Sie das Beispiel von GitHub verwenden. Weitere Einzelheiten finden Sie unter [Manifest-Speicherort](/de/docs/Mozilla/Add-ons/WebExtensions/Native_manifests#manifest_location).

Unter Beibehaltung des `ping_pong`-Beispiels, sollten, wenn Sie Firefox verwenden (siehe [diese Seite für Chrome](https://developer.chrome.com/docs/apps/nativeMessaging/#native-messaging-host-location)), eine der zwei Registrierungseinträge erstellt werden, damit das Messaging funktioniert:

- `HKEY_CURRENT_USER\Software\Mozilla\NativeMessagingHosts\ping_pong`
- `HKEY_LOCAL_MACHINE\Software\Mozilla\NativeMessagingHosts\ping_pong`

Der Standardwert für den Schlüssel sollte der Pfad zum _Anwendungs_- Manifest sein: z.B. `C:\Users\<myusername>\webextensions-examples\native-messaging\app\ping_pong.json`.

> [!NOTE]
> Wenn Sie Ihre Arbeit auf das auf GitHub befindliche Beispiel stützen, lesen Sie bitte [diesen Abschnitt des Readme](https://github.com/SphinxKnight/webextensions-examples/tree/master/native-messaging#windows-setup) und überprüfen Sie die Ausgabe von `check_config_win.py`, bevor Sie die WebExtension in Ihrem Browser installieren.

## Nachrichtenaustausch

Bei der obigen Einrichtung kann eine Erweiterung JSON-Nachrichten mit einer nativen Anwendung austauschen.

### Erweiterungsseite

Native Messaging kann nicht direkt in Inhalts-Skripten verwendet werden. Sie müssen [es indirekt über Hintergrund-Skripte tun](/de/docs/Mozilla/Add-ons/WebExtensions/Content_scripts#communicating_with_background_scripts).

Es gibt zwei Muster, die hier verwendet werden können: **Verbindungsbasiertes Messaging** und **Verbindungsloses Messaging**.

#### Verbindungsbasiertes Messaging

Bei diesem Muster rufen Sie {{WebExtAPIRef("runtime.connectNative()")}} auf und übergeben den Namen der Anwendung (den Wert der `"name"` Eigenschaft im App-Manifest). Dies startet die Anwendung, falls sie noch nicht läuft, und gibt ein {{WebExtAPIRef("runtime.Port")}} Objekt an die Erweiterung zurück.

Zwei Argumente werden an die native App übergeben, wenn sie startet:

- Der vollständige Pfad zum App-Manifest.
- (neu in Firefox 55) die ID (wie in den [browser_specific_settings](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_specific_settings) `manifest.json` Schlüssel angegeben) des Add-ons, das sie gestartet hat.

> [!NOTE]
> Chrome handhabt die übergebenen Argumente anders:
>
> - Unter Linux und Mac übergibt Chrome _ein_ Argument: den Ursprung der Erweiterung, die sie gestartet hat (in der Form `chrome-extension://[extensionID]`). Dies ermöglicht der App, die Erweiterung zu identifizieren.
> - Unter Windows übergibt Chrome _zwei_ Argumente: das erste ist der Ursprung der Erweiterung, das zweite ist ein Handle zum Chrome-Native-Fenster, das die App gestartet hat.

Die Anwendung bleibt in Betrieb, bis die Erweiterung `Port.disconnect()` aufruft oder die Seite, die die Verbindung hergestellt hat, geschlossen wird.

Um Nachrichten über `Port` zu senden, rufen Sie dessen `postMessage()` Funktion auf und übergeben die zu sendende JSON-Nachricht. Um Nachrichten mit `Port` zu empfangen, fügen Sie den Listener mit seiner `onMessage.addListener()` Funktion hinzu.

Hier ist ein Beispiel für ein Hintergrundskript, das eine Verbindung zur `"ping_pong"` App herstellt, Nachrichten von dieser empfängt und dann eine `"ping"` Nachricht sendet, wann immer der Benutzer auf die Browser-Aktion klickt:

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
> Um mehr über das Debugging von Hintergrundskripten und das Anzeigen von Konsolenausgaben zu erfahren, siehe [Debugging von Hintergrundskripten](https://extensionworkshop.com/documentation/develop/debugging/#debugging-background-scripts) auf Extension Workshop.

#### Verbindungsloses Messaging

Bei diesem Muster rufen Sie {{WebExtAPIRef("runtime.sendNativeMessage()")}} auf und übergeben sie:

- den Namen der Anwendung
- die zu sendende JSON-Nachricht
- optional einen Callback.

Für jede Nachricht wird eine neue Instanz der App erstellt. Die App übergibt beim Starten zwei Argumente:

- den vollständigen Pfad zum App-Manifest
- (neu in Firefox 55) die ID (wie in den [browser_specific_settings](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_specific_settings) manifest.json Schlüssel angegeben) des Add-ons, das sie gestartet hat.

Die erste Nachricht, die von der App gesendet wird, wird als Antwort auf den `sendNativeMessage()` Aufruf behandelt und in den Callback übergeben.

Hier ist das obige Beispiel, neu geschrieben, um `runtime.sendNativeMessage()` zu verwenden:

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

Jede Nachricht wird mithilfe von JSON serialisiert, UTF-8 kodiert und ist mit einem vorangestellten unsignierten 32-Bit-Wert versehen, der die Nachrichtenlänge in der nativen Byte-Reihenfolge enthält.

Die maximale Größe einer einzelnen Nachricht von der Anwendung beträgt 1 MB. Die maximale Größe einer Nachricht, die an die Anwendung gesendet wird, beträgt 4 GB.

Sie können schnell mit dem Senden und Empfangen von Nachrichten mit diesem NodeJS-Code, `nm_nodejs.mjs`, beginnen:

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

Hier ist ein weiteres Beispiel in Python geschrieben. Es lauscht Nachrichten von der Erweiterung. Beachten Sie, dass die Datei in Linux ausführbar sein muss. Wenn die Nachricht `"ping"` ist, antwortet sie mit einer Nachricht `"pong"`.

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

In Python 3 müssen die empfangenen Binärdaten in einen String dekodiert werden. Der Inhalt, der an das Addon zurückgesendet werden soll, muss mit einer Strukturierung in Binärdaten kodiert werden:

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

Wenn Sie eine Verbindung zur nativen Anwendung mit `runtime.connectNative()` hergestellt haben, bleibt sie laufend, bis die Erweiterung `Port.disconnect()` aufruft oder die Seite, die die Verbindung hergestellt hat, geschlossen wird. Wenn Sie die native Anwendung durch Senden von `runtime.sendNativeMessage()` gestartet haben, wird sie geschlossen, nachdem sie die Nachricht empfangen und eine Antwort gesendet hat.

Um die native Anwendung zu schließen:

- Auf \*nix-Systemen wie macOS und Linux sendet der Browser `SIGTERM` an die native Anwendung, dann `SIGKILL`, nachdem die Anwendung die Möglichkeit hatte, sich ordnungsgemäß zu beenden. Diese Signale verbreiten sich an alle Unterprozesse, es sei denn, sie lösen sich in eine neue Prozessgruppe auf.
- Auf Windows platziert der Browser den Prozess der nativen Anwendung in ein [Job-Objekt](https://learn.microsoft.com/en-us/windows/win32/procthread/job-objects) und beendet den Job. Wenn die native Anwendung zusätzliche Prozesse startet und möchte, dass sie nach dem Beenden der nativen Anwendung geöffnet bleiben, muss die native Anwendung den zusätzlichen Prozess mit dem [`CREATE_BREAKAWAY_FROM_JOB`](https://learn.microsoft.com/en-us/windows/win32/procthread/process-creation-flags) Flag starten, indem sie `CreateProcess` verwendet.

## Fehlerbehebung

Wenn etwas schiefgeht, überprüfen Sie die [Browser-Konsole](https://extensionworkshop.com/documentation/develop/debugging/#viewing_log_output). Wenn die native Anwendung irgendeine Ausgabe an stderr sendet, leitet der Browser diese an die Browser-Konsole weiter. Wenn Sie es bis zur Ausführung der nativen Anwendung geschafft haben, sehen Sie alle Fehlermeldungen, die sie ausgibt.

Wenn Sie es nicht geschafft haben, die Anwendung auszuführen, sollten Sie eine Fehlermeldung sehen, die Ihnen Hinweise auf das Problem gibt.

```plain
"No such native application <name>"
```

- Überprüfen Sie, ob der an `runtime.connectNative()` übergebene Name mit dem Namen im App-Manifest übereinstimmt.
- macOS/Linux: Überprüfen Sie, dass der Name des App-Manifests `<name>.json` ist.
- macOS/Linux: Überprüfen Sie den Speicherort der Manifestdatei der nativen Anwendung, wie im [Referenzdokument der nativen Manifeste](/de/docs/Mozilla/Add-ons/WebExtensions/Native_manifests#macos) erwähnt.
- Windows: Überprüfen Sie, dass der Registrierungsschlüssel an der richtigen Stelle ist und dass sein Name mit dem im App-Manifest genannten Namen übereinstimmt.
- Windows: Überprüfen Sie, dass der im Registrierungsschlüssel angegebene Pfad auf das App-Manifest verweist.

  ```plain
  "Error: Invalid application <name>"
  ```

- Überprüfen Sie, dass der Name der Anwendung keine ungültigen Zeichen enthält.

  ```plain
  "'python' is not recognized as an internal or external command, ..."
  ```

- Windows: Wenn Ihre Anwendung ein Python-Skript ist, überprüfen Sie, dass Sie Python installiert haben und Ihren Pfad dafür eingerichtet haben.

  ```plain
  "File at path <path> does not exist, or is not executable"
  ```

- Wenn Sie dies sehen, wurde das App-Manifest erfolgreich gefunden.
- Überprüfen Sie, dass der "Pfad" im Manifest der App korrekt ist.
- Windows: Überprüfen Sie, dass Sie die Pfadtrennzeichen escaped haben (`"c:\\path\\to\\file"`).
- Überprüfen Sie, dass sich die App an dem im `"path"`-Eigenschaft des App-Manifests angegebenen Ort befindet.
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

Es gibt eine Reihe von Unterschieden zwischen Browsern, die das native Messaging in Web-Erweiterungen betreffen, einschließlich der an die native App übergebenen Argumente, des Speicherorts der Manifestdatei usw. Diese Unterschiede werden in [Chrome-Inkompatibilitäten > Native Messaging](/de/docs/Mozilla/Add-ons/WebExtensions/Chrome_incompatibilities#native_messaging) erörtert.
