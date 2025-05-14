---
title: Native Messaging
slug: Mozilla/Add-ons/WebExtensions/Native_messaging
l10n:
  sourceCommit: e488eba036b2fee56444fd579c3759ef45ff2ca8
---

{{AddonSidebar}}

**Native Messaging** ermöglicht es einer Erweiterung, Nachrichten mit einer nativen Anwendung auszutauschen, die auf dem Computer des Benutzers installiert ist. Das Native Messaging unterstützt die Erweiterungen, ohne zusätzliche Zugriffe über das Web.

Passwortmanager: Die native Anwendung verwaltet, speichert und verschlüsselt Passwörter. Danach kommuniziert die native Anwendung mit der Erweiterung, um Webformulare auszufüllen.

Native Messaging ermöglicht es Erweiterungen auch, auf Ressourcen zuzugreifen, die nicht über WebExtension-APIs zugänglich sind (z. B. bestimmte Hardware).

Die native Anwendung wird nicht vom Browser installiert oder verwaltet. Sie wird über die Installationstechniken des zugrunde liegenden Betriebssystems installiert. Erstellen Sie eine JSON-Datei namens "Host Manifest" oder "App Manifest". Installieren Sie die JSON-Datei an einem definierten Ort. Die App-Manifest-Datei wird beschreiben, wie der Browser mit der nativen Anwendung verbunden werden kann.

Die Erweiterung muss im `manifest.json`-File die Berechtigung `"nativeMessaging"` [permission](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions) oder [optionale Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/optional_permissions) anfordern. Außerdem muss die native Anwendung der Erweiterung die Erlaubnis erteilen, indem die ID im `"allowed_extensions"`-Feld des App-Manifests enthalten ist.

Nach der Installation kann die Erweiterung JSON-Nachrichten mit der nativen Anwendung austauschen. Verwenden Sie dafür eine Reihe von Funktionen der {{WebExtAPIRef("runtime")}} API. Auf der Seite der nativen App werden Nachrichten über den Standard-Eingang (`stdin`) empfangen und über den Standard-Ausgang (`stdout`) gesendet.

![Anwendungsablauf: Die JSON-Datei der nativen App befindet sich auf dem Computer des Benutzers und liefert Ressourceninformationen an die native Anwendung. Die Lese- und Schreibfunktionen der nativen Anwendung interagieren mit den Laufzeitereignissen der Browser-Erweiterung.](native-messaging.png)

Die Unterstützung für Native Messaging in Erweiterungen ist größtenteils mit Chrome kompatibel, mit zwei Hauptunterschieden:

- Das App-Manifest listet `allowed_extensions` als ein Array von App-IDs auf, während Chrome `allowed_origins` als ein Array von `"chrome-extension"` URLs auflistet.
- Das App-Manifest wird an einem anderen Ort gespeichert [im Vergleich zu Chrome](https://developer.chrome.com/docs/apps/nativeMessaging/#native-messaging-host-location).

Es gibt ein komplettes Beispiel im [`native-messaging` Verzeichnis](https://github.com/mdn/webextensions-examples/tree/main/native-messaging) des `webextensions-examples` Repositories auf GitHub. Der größte Teil des Beispielcodes in diesem Artikel stammt aus diesem Beispiel.

## Einrichtung

### Erweiterungsmanifest

Eine Erweiterung, die mit einer nativen Anwendung kommuniziert:

- Setzen Sie die `"nativeMessaging"` [permission](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions) oder [optionale Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/optional_permissions) im [`manifest.json`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json) File.
- Geben Sie Ihre Add-on-ID explizit an. Verwenden Sie den [`browser_specific_settings`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_specific_settings) Manifest-Schlüssel. (Das Manifest der App wird die Menge der Erweiterungen identifizieren, die eine Verbindung zu den IDs zulässt).

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
> Wenn Sie optionale Berechtigungen verwenden, überprüfen Sie, ob die Berechtigung erteilt wurde und fordern Sie gegebenenfalls die Berechtigung vom Benutzer mit der {{WebExtAPIRef("permissions")}} API an, bevor Sie mit der nativen Anwendung kommunizieren.

### App-Manifest

Das App-Manifest beschreibt dem Browser, wie es mit der nativen Anwendung verbunden werden kann.

Das App-Manifest muss zusammen mit der nativen Anwendung installiert werden. Der Browser liest und validiert App-Manifest-Dateien, installiert oder verwaltet sie jedoch nicht. Das Sicherheitsmodell für das Installieren und Aktualisieren dieser Dateien ist viel eher wie das für native Anwendungen als das für Erweiterungen, die WebExtension-APIs verwenden.

Für Details zur Syntax und zum Speicherort von nativen App-Manifests siehe [Native Manifests](/de/docs/Mozilla/Add-ons/WebExtensions/Native_manifests).

Hier ist ein Beispiel für ein Manifest für die `"ping_pong"`-Anwendung:

```json
{
  "name": "ping_pong",
  "description": "Example host for native messaging",
  "path": "/path/to/native-messaging/app/ping_pong.py",
  "type": "stdio",
  "allowed_extensions": ["ping_pong@example.org"]
}
```

Dies erlaubt es der Erweiterung mit der ID `"ping_pong@example.org"`, eine Verbindung herzustellen, indem der Name `"ping_pong"` in die relevante {{WebExtAPIRef("runtime")}} API-Funktion übergeben wird. Die Anwendung selbst befindet sich unter `"/path/to/native-messaging/app/ping_pong.py"`.

> [!NOTE]
> Chrome identifiziert erlaubte Erweiterungen mit einem anderen Schlüssel: `allowed_origins`, unter Verwendung der ID der WebExtension. Siehe [Chrome-Dokumentation für weitere Details](https://developer.chrome.com/docs/apps/nativeMessaging/#native-messaging-host) und [Chrome-Inkompatibilitäten unten](#chrome-inkompatibilitäten).

### Windows-Einrichtung

Als Beispiel können Sie auch auf [die README zum native messaging extension auf GitHub](https://github.com/SphinxKnight/webextensions-examples/tree/master/native-messaging#windows-setup) verweisen. Wenn Sie Ihre lokale Einrichtung überprüfen möchten, nachdem Sie dieses Repository auf einer Windows-Maschine geforkt haben, können Sie `check_config_win.py` ausführen, um einige Probleme zu beheben.

#### App-Manifest

Im oben genannten Beispiel ist die native Anwendung ein Python-Skript. Es kann schwierig sein, Windows dazu zu bringen, Python-Skripte auf diese Weise zuverlässig auszuführen. Eine Alternative besteht darin, eine `.bat` Datei bereitzustellen und von dort aus im Manifest der Anwendung darauf zu verweisen:

```json
{
  "name": "ping_pong",
  "description": "Example host for native messaging",
  "path": "c:\\path\\to\\native-messaging\\app\\ping_pong_win.bat",
  "type": "stdio",
  "allowed_extensions": ["ping_pong@example.org"]
}
```

(Siehe obenstehende Notiz zur [Chrome-Kompatibilität](#chrome-inkompatibilitäten) bezüglich des `allowed_extensions` Schlüssels und seines Gegenstücks in Chrome).

Datei dann das Python-Skript aufruft:

```bash
@echo off

python -u "c:\\path\\to\\native-messaging\\app\\ping_pong.py"
```

#### Registrierung

Der Browser findet die Erweiterung anhand von Registrierungsschlüsseln, die sich an einem spezifischen Ort befinden. Sie müssen diese entweder programmatisch mit Ihrer endgültigen Anwendung oder manuell hinzufügen, wenn Sie das Beispiel von GitHub verwenden. Für mehr Details, siehe [Manifest-Standort](/de/docs/Mozilla/Add-ons/WebExtensions/Native_manifests#manifest_location).

Betrachten Sie weiterhin das `ping_pong` Beispiel, wenn Sie Firefox verwenden (siehe [diese Seite für Chrome](https://developer.chrome.com/docs/apps/nativeMessaging/#native-messaging-host-location)), sollte einer der beiden Registrierungseinträge erstellt werden, damit das Messaging funktioniert:

- `HKEY_CURRENT_USER\Software\Mozilla\NativeMessagingHosts\ping_pong`
- `HKEY_LOCAL_MACHINE\Software\Mozilla\NativeMessagingHosts\ping_pong`

Der Standardwert für den Schlüssel sollte den Pfad zum _Anwendungs_-Manifest enthalten: z. B. `C:\Users\<myusername>\webextensions-examples\native-messaging\app\ping_pong.json`.

> [!NOTE]
> Wenn Sie Ihre Arbeit auf das Beispiel auf GitHub stützen, lesen Sie bitte [diesen Teil der README-Datei](https://github.com/SphinxKnight/webextensions-examples/tree/master/native-messaging#windows-setup) und überprüfen Sie die Ausgabe von `check_config_win.py` bevor Sie die WebExtension in Ihrem Browser installieren.

## Nachrichten austauschen

Unter Berücksichtigung der oben beschriebenen Einrichtung kann eine Erweiterung JSON-Nachrichten mit einer nativen Anwendung austauschen.

### Erweiterungsseite

Native Messaging kann nicht direkt in Inhalts-Skripten verwendet werden. Sie müssen [es indirekt über Hintergrund-Skripte machen](/de/docs/Mozilla/Add-ons/WebExtensions/Content_scripts#communicating_with_background_scripts).

Es gibt hier zwei Muster: **Verbindungsbasiertes Messaging** und **Verbindungsloses Messaging**.

#### Verbindungsbasiertes Messaging

Mit diesem Muster rufen Sie {{WebExtAPIRef("runtime.connectNative()")}} auf und übergeben den Namen der Anwendung (der Wert der `"name"` Eigenschaft im App-Manifest). Dies startet die Anwendung, wenn sie noch nicht läuft, und gibt ein {{WebExtAPIRef("runtime.Port")}} Objekt an die Erweiterung zurück.

Zwei Argumente werden an die native App übergeben, wenn sie startet:

- Der vollständige Pfad zum App-Manifest.
- (neu in Firefox 55) die ID (wie sie im [browser_specific_settings](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_specific_settings) `manifest.json` Schlüssel angegeben ist) des Add-ons, das sie gestartet hat.

> [!NOTE]
> Chrome behandelt die übergebenen Argumente anders:
>
> - Auf Linux und Mac gibt Chrome _ein_ Argument weiter: den Ursprung der Erweiterung, die es gestartet hat (in der Form `chrome-extension://[extensionID]`). Dies ermöglicht es der App, die Erweiterung zu identifizieren.
> - Auf Windows gibt Chrome _zwei_ Argumente weiter: das erste ist der Ursprung der Erweiterung und das zweite ist ein Handle zum nativen Fenster von Chrome, das die App gestartet hat.

Die Anwendung bleibt aktiv, bis die Erweiterung `Port.disconnect()` aufruft oder die Seite, die damit verbunden ist, geschlossen wird.

Um Nachrichten mit `Port` zu senden, rufen Sie deren `postMessage()` Funktion auf und übergeben die zu sendende JSON-Nachricht. Um Nachrichten mit `Port` zu empfangen, fügen Sie den Listener mit deren `onMessage.addListener()` Funktion hinzu.

Hier ist ein Beispiel für ein Hintergrund-Skript, das eine Verbindung zur `"ping_pong"` App herstellt, Nachrichten von ihr hört und ihr dann eine `"ping"` Nachricht sendet, wann immer der Benutzer die Browser-Aktion klickt:

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
- optional, einen Callback.

Für jede Nachricht wird eine neue Instanz der App erstellt. Die App übergibt beim Start zwei Argumente:

- der vollständige Pfad zum App-Manifest
- (neu in Firefox 55) die ID (wie sie im [browser_specific_settings](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_specific_settings) manifest.json Schlüssel angegeben ist) des Add-ons, das sie gestartet hat.

Die erste von der App gesendete Nachricht wird als Antwort auf den `sendNativeMessage()` Aufruf behandelt und an den Callback übergeben.

Hier ist das obige Beispiel, neu geschrieben um `runtime.sendNativeMessage()` zu verwenden:

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

Auf der Seite der Anwendung verwenden Sie den Standard-Eingang, um Nachrichten zu empfangen, und den Standard-Ausgang, um sie zu senden.

Jede Nachricht wird im JSON-Format serialisiert, UTF-8 kodiert und wird von einem unsignierten 32-Bit-Wert eingeleitet, der die Nachrichtenlänge in nativer Byte-Reihenfolge enthält.

Die maximale Größe einer einzelnen Nachricht von der Anwendung beträgt 1 MB. Die maximale Größe einer an die Anwendung gesendeten Nachricht beträgt 4 GB.

Sie können schnell mit diesem NodeJS Code, `nm_nodejs.mjs`, beginnen, Nachrichten zu senden und zu empfangen:

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

In Python 3 müssen die empfangenen Binärdaten in einen String dekodiert werden. Der Inhalt, der an das Add-on zurückgesendet werden soll, muss mit einem struct in Binärdaten kodiert werden:

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

Wenn Sie mit `runtime.connectNative()` eine Verbindung zur nativen Anwendung hergestellt haben, bleibt sie aktiv, bis die Erweiterung `Port.disconnect()` aufruft oder die Seite, die damit verbunden ist, geschlossen wird. Wenn Sie die native Anwendung gestartet haben, indem Sie `runtime.sendNativeMessage()` gesendet haben, wird sie nach Empfang der Nachricht und dem Versenden einer Antwort geschlossen.

Um die native Anwendung zu schließen:

- Auf \*nix-Systemen wie macOS und Linux sendet der Browser `SIGTERM` an die native Anwendung und anschließend `SIGKILL`, nachdem die Anwendung die Möglichkeit hatte, sich ordnungsgemäß zu beenden. Diese Signale propagieren sich zu allen Unterprozessen, es sei denn, sie brechen in eine neue Prozessgruppe aus.
- Unter Windows setzt der Browser den Prozess der nativen Anwendung in ein [Job-Objekt](https://learn.microsoft.com/en-us/windows/win32/procthread/job-objects) und beendet dieses. Wenn die native Anwendung zusätzliche Prozesse startet und diese nach dem Beenden der nativen Anwendung geöffnet bleiben sollen, muss die native Anwendung den zusätzlichen Prozess mit dem [`CREATE_BREAKAWAY_FROM_JOB`](https://learn.microsoft.com/en-us/windows/win32/procthread/process-creation-flags) Flag starten, z. B. indem sie `CreateProcess` verwendet.

## Fehlerbehebung

Wenn etwas schiefgeht, überprüfen Sie die [Browser-Konsole](https://extensionworkshop.com/documentation/develop/debugging/#viewing_log_output). Wenn die native Anwendung irgendeine Ausgabe an stderr sendet, leitet der Browser diese an die Browser-Konsole weiter. Wenn Sie es bis zum Start der nativen Anwendung geschafft haben, sehen Sie alle Fehlermeldungen, die sie ausgibt.

Wenn es Ihnen nicht gelungen ist, die Anwendung auszuführen, sollten Sie eine Fehlermeldung sehen, die Ihnen einen Hinweis auf das Problem gibt.

```plain
"No such native application <name>"
```

- Überprüfen Sie, ob der Name, der an `runtime.connectNative()` übergeben wird, mit dem Namen im App-Manifest übereinstimmt
- macOS/Linux: überprüfen Sie, ob der Name des App-Manifests `<name>.json` ist.
- macOS/Linux: überprüfen Sie den Speicherort der Manifest-Datei der nativen Anwendung, wie im [referenzierten natives Manifest](/de/docs/Mozilla/Add-ons/WebExtensions/Native_manifests#macos) beschrieben.
- Windows: überprüfen Sie, ob der Registrierungsschlüssel an der richtigen Stelle ist und ob sein Name mit dem Namen im App-Manifest übereinstimmt.
- Windows: überprüfen Sie, ob der im Registrierungsschlüssel angegebene Pfad auf das App-Manifest verweist.

  ```plain
  "Error: Invalid application <name>"
  ```

- Überprüfen Sie, ob der Name der Anwendung keine ungültigen Zeichen enthält.

  ```plain
  "'python' is not recognized as an internal or external command, ..."
  ```

- Windows: Wenn Ihre Anwendung ein Python-Skript ist, prüfen Sie, ob Python installiert ist und ob Ihr Pfad dafür eingerichtet ist.

  ```plain
  "File at path <path> does not exist, or is not executable"
  ```

- Wenn Sie dies sehen, wurde das App-Manifest erfolgreich gefunden.
- Prüfen Sie, ob der "path" im Manifest der App korrekt ist.
- Windows: Überprüfen Sie, ob Sie die Pfadtrennzeichen richtig maskiert haben (`"c:\\path\\to\\file"`).
- Prüfen Sie, ob die App an dem Ort ist, auf den durch die `"path"` Eigenschaft im Manifest der App verwiesen wird.
- Prüfen Sie, ob die App ausführbar ist.

  ```plain
  "This extension does not have permission to use native application <name>"
  ```

- Überprüfen Sie, ob der `"allowed_extensions"` Schlüssel im App-Manifest die Add-on-ID enthält.

  ```plain
      "TypeError: browser.runtime.connectNative is not a function"
  ```

- Überprüfen Sie, ob die Erweiterung die `"nativeMessaging"` Berechtigung hat.

  ```plain
  "[object Object]       NativeMessaging.jsm:218"
  ```

- Es gab ein Problem beim Starten der Anwendung.

## Chrome-Inkompatibilitäten

Es gibt eine Reihe von Unterschieden zwischen Browsern, die das Native Messaging in Web-Erweiterungen betreffen, einschließlich der an die native App übergebenen Argumente, des Speicherorts der Manifest-Datei usw.
Diese Unterschiede werden in [Chrome-Inkompatibilitäten > Native Messaging](/de/docs/Mozilla/Add-ons/WebExtensions/Chrome_incompatibilities#native_messaging) diskutiert.
