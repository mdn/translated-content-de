---
title: Native Messaging
slug: Mozilla/Add-ons/WebExtensions/Native_messaging
l10n:
  sourceCommit: d7143e171b5f18fb37a686a7d4947db417fd74f3
---

{{AddonSidebar}}

**Native Messaging** ermöglicht einer Erweiterung, Nachrichten mit einer nativen Anwendung auszutauschen, die auf dem Computer des Benutzers installiert ist. Das Native Messaging bedient die Erweiterungen ohne zusätzliche Zugriffe über das Web.

Passwort-Manager: Die native Anwendung verwaltet, speichert und verschlüsselt Passwörter. Dann kommuniziert die native Anwendung mit der Erweiterung, um Webformulare auszufüllen.

Native Messaging ermöglicht es Erweiterungen auch, auf Ressourcen zuzugreifen, die über WebExtension-APIs nicht zugänglich sind (z.B. spezielle Hardware).

Die native Anwendung wird nicht vom Browser installiert oder verwaltet. Die native Anwendung wird mithilfe der Installationsmechanismen des zugrunde liegenden Betriebssystems installiert. Erstellen Sie eine JSON-Datei, die als "Host-Manifest" oder "App-Manifest" bezeichnet wird. Installieren Sie die JSON-Datei an einem definierten Ort. Die App-Manifest-Datei beschreibt, wie der Browser eine Verbindung zur nativen Anwendung herstellen kann.

Die Erweiterung muss die Berechtigung `"nativeMessaging"` [Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions) oder [optionale Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/optional_permissions) in der `manifest.json` Datei anfordern. Außerdem muss die native Anwendung der Erweiterung die Berechtigung erteilen, indem sie die ID im Feld `"allowed_extensions"` des App-Manifests einschließt.

Nach der Installation kann die Erweiterung JSON-Nachrichten mit der nativen Anwendung austauschen. Verwenden Sie eine Reihe von Funktionen in der {{WebExtAPIRef("runtime")}} API. Auf der Seite der nativen App werden Nachrichten über Standardeingabe (`stdin`) empfangen und über Standardausgabe (`stdout`) gesendet.

![Anwendungsfluss: Die native App-JSON-Datei befindet sich auf dem Computer des Benutzers und stellt Ressourceninformationen für die native Anwendung bereit. Die Lese- und Schreibfunktionen der nativen Anwendung interagieren mit den Laufzeitereignissen der Browsererweiterung.](native-messaging.png)

Die Unterstützung für Native Messaging in Erweiterungen ist größtenteils mit Chrome kompatibel, mit zwei wesentlichen Unterschieden:

- Das App-Manifest listet `allowed_extensions` als ein Array von App-IDs auf, während Chrome `allowed_origins` als ein Array von `"chrome-extension"` URLs auflistet.
- Das App-Manifest wird an einem anderen Ort [verglichen mit Chrome](https://developer.chrome.com/docs/apps/nativeMessaging/#native-messaging-host-location) gespeichert.

Es gibt ein vollständiges Beispiel im Verzeichnis ["`native-messaging`"](https://github.com/mdn/webextensions-examples/tree/main/native-messaging) des `"webextensions-examples"`-Repositorys auf GitHub. Der größte Teil des Beispielcodes in diesem Artikel stammt aus diesem Beispiel.

## Einrichtung

### Erweiterungsmanifest

Erweiterung, die mit einer nativen Anwendung kommuniziert:

- Setzen Sie die `"nativeMessaging"` [Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions) oder optionale [Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/optional_permissions) in der [`manifest.json`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json) Datei.
- Geben Sie Ihre Add-on-ID explizit an. Verwenden Sie den [`browser_specific_settings`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_specific_settings) Manifestschlüssel. (Das App-Manifest wird die Gruppe von Erweiterungen identifizieren, die erlauben, sich mit den IDs zu verbinden).

Beispiel `manifest.json` Datei:

```json
{
  "description": "Beispiel-Add-on für Native Messaging",
  "manifest_version": 2,
  "name": "Beispiel Native Messaging",
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
> Chrome unterstützt den [browser_specific_settings](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_specific_settings) Schlüssel nicht. Sie müssen ein anderes Manifest ohne diesen Schlüssel verwenden, um eine äquivalente WebExtension in Chrome zu installieren. Siehe [Chrome-Inkompatibilitäten unten](#chrome_incompatibilities).

> [!NOTE]
> Wenn Sie eine optionale Berechtigung verwenden, überprüfen Sie, ob die Berechtigung erteilt wurde, und fordern Sie gegebenenfalls die Erlaubnis des Benutzers mit der {{WebExtAPIRef("permissions")}} API an, bevor Sie mit der nativen Anwendung kommunizieren.

### App-Manifest

Das App-Manifest beschreibt dem Browser, wie es sich mit der nativen Anwendung verbinden kann.

Die App-Manifest-Datei muss zusammen mit der nativen Anwendung installiert werden. Der Browser liest und validiert App-Manifest-Dateien, installiert oder verwaltet sie jedoch nicht. Das Sicherheitsmodell für die Installation und Aktualisierung dieser Dateien ähnelt eher dem für native Anwendungen als dem für Erweiterungen, die WebExtension-APIs verwenden.

Für Details zur Syntax und zum Speicherort von nativen App-Manifesten siehe [Native Manifeste](/de/docs/Mozilla/Add-ons/WebExtensions/Native_manifests).

Zum Beispiel, hier ist ein Manifest für die `"ping_pong"` native Anwendung:

```json
{
  "name": "ping_pong",
  "description": "Beispiel-Host für Native Messaging",
  "path": "/path/to/native-messaging/app/ping_pong.py",
  "type": "stdio",
  "allowed_extensions": ["ping_pong@example.org"]
}
```

Dies erlaubt der Erweiterung, deren ID `"ping_pong@example.org"` ist, sich zu verbinden, indem sie den Namen `"ping_pong"` in die relevante {{WebExtAPIRef("runtime")}} API-Funktion übergibt. Die Anwendung selbst befindet sich unter `"/path/to/native-messaging/app/ping_pong.py"`.

> [!NOTE]
> Chrome identifiziert erlaubte Erweiterungen mit einem anderen Schlüssel: `allowed_origins`, unter Verwendung der ID der WebExtension. Weitere Details finden Sie in der [Chrome-Dokumentation](https://developer.chrome.com/docs/apps/nativeMessaging/#native-messaging-host) und siehe [Chrome-Inkompatibilitäten unten](#chrome_incompatibilities).

### Windows-Einrichtung

Als ein Beispiel können Sie auch auf [die Readme zur Native Messaging-Erweiterung auf GitHub](https://github.com/SphinxKnight/webextensions-examples/tree/master/native-messaging#windows-setup) verweisen. Wenn Sie Ihre lokale Einrichtung überprüfen möchten, nachdem Sie dieses Repository auf einem Windows-Rechner gegabelt haben, können Sie `check_config_win.py` ausführen, um einige Probleme zu beheben.

#### App-Manifest

Im obigen Beispiel ist die native Anwendung ein Python-Skript. Es kann schwierig sein, Windows so einzurichten, dass Python-Skripte in dieser Weise zuverlässig ausgeführt werden, daher kann eine Alternative darin bestehen, eine `.bat` Datei bereitzustellen und darauf im Manifest der Anwendung zu verweisen:

```json
{
  "name": "ping_pong",
  "description": "Beispiel-Host für Native Messaging",
  "path": "c:\\path\\to\\native-messaging\\app\\ping_pong_win.bat",
  "type": "stdio",
  "allowed_extensions": ["ping_pong@example.org"]
}
```

(Siehe den obigen Hinweis zur [Chrome-Kompatibilität](#chrome_incompatibilities) bezüglich des `allowed_extensions` Schlüssels und seines Gegenstücks in Chrome).

Die Batch-Datei ruft dann das Python-Skript auf:

```bash
@echo off

python -u "c:\\path\\to\\native-messaging\\app\\ping_pong.py"
```

#### Registrierung

Der Browser findet die Erweiterung basierend auf Registrierungsschlüsseln, die an einem bestimmten Ort abgelegt sind. Sie müssen sie entweder programmatisch mit Ihrer endgültigen Anwendung hinzufügen oder manuell, wenn Sie das Beispiel von GitHub verwenden. Für weitere Details siehe [Manifest-Ort](/de/docs/Mozilla/Add-ons/WebExtensions/Native_manifests#manifest_location).

Im Beispiel `ping_pong`, wenn Firefox verwendet wird (siehe [diese Seite für Chrome](https://developer.chrome.com/docs/apps/nativeMessaging/#native-messaging-host-location)), sollte einer der beiden Registrierungseinträge erstellt werden, damit das Messaging funktioniert:

- `HKEY_CURRENT_USER\Software\Mozilla\NativeMessagingHosts\ping_pong`
- `HKEY_LOCAL_MACHINE\Software\Mozilla\NativeMessagingHosts\ping_pong`

Der Standardwert für den Schlüssel sollte der Pfad zum _Anwendungs_-Manifest sein: z.B. `C:\Users\<meinBenutzername>\webextensions-examples\native-messaging\app\ping_pong.json`.

> [!NOTE]
> Wenn Sie Ihre Arbeit auf dem Beispiel auf GitHub basieren, lesen Sie bitte [diesen Teil der Readme](https://github.com/SphinxKnight/webextensions-examples/tree/master/native-messaging#windows-setup) und überprüfen Sie die Ausgabe von `check_config_win.py`, bevor Sie die WebExtension in Ihrem Browser installieren.

## Nachrichten austauschen

Bei der obigen Einrichtung kann eine Erweiterung JSON-Nachrichten mit einer nativen Anwendung austauschen.

### Erweiterungsseite

Native Messaging kann nicht direkt in Inhalts-Skripten verwendet werden. Sie müssen [es indirekt über Hintergrundskripte tun](/de/docs/Mozilla/Add-ons/WebExtensions/Content_scripts#communicating_with_background_scripts).

Es gibt zwei Anwendungsfälle: **verbindungsbasiertes Messaging** und **verbindungsloses Messaging**.

#### Verbindungsbasiertes Messaging

Bei diesem Muster rufen Sie {{WebExtAPIRef("runtime.connectNative()")}} auf und übergeben den Namen der Anwendung (den Wert der `"name"` Eigenschaft im App-Manifest). Dies startet die Anwendung, wenn sie nicht bereits läuft, und gibt ein {{WebExtAPIRef("runtime.Port")}} Objekt an die Erweiterung zurück.

Zwei Argumente werden an die native App übergeben, wenn sie startet:

- Der vollständige Pfad zum App-Manifest.
- (neu in Firefox 55) die ID (wie im [browser_specific_settings](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_specific_settings) Schlüssel der `manifest.json` angegeben) des Add-ons, das sie gestartet hat.

> [!NOTE]
> Chrome behandelt die übergebenen Argumente unterschiedlich:
>
> - Unter Linux und Mac übergibt Chrome _ein_ Argument: den Ursprung der Erweiterung, die sie gestartet hat (in der Form `chrome-extension://[extensionID]`). Dies ermöglicht der App, die Erweiterung zu identifizieren.
> - Unter Windows übergibt Chrome _zwei_ Argumente: das erste ist der Ursprung der Erweiterung und das zweite ein Handle zum Chrome-Nativen Fenster, das die App gestartet hat.

Die Anwendung bleibt laufen, bis die Erweiterung `Port.disconnect()` aufruft oder die Seite, die mit ihr verbunden ist, geschlossen wird.

Um Nachrichten mit `Port` zu senden, rufen Sie die Funktion `postMessage()` auf und übergeben die zu sendende JSON-Nachricht. Um Nachrichten mit `Port` zu empfangen, fügen Sie den Listener mit seiner Funktion `onMessage.addListener()` hinzu.

Hier ist ein Beispiel für ein Hintergrundskript, das eine Verbindung mit der `"ping_pong"` App herstellt, auf Nachrichten von ihr hört und dann eine `"ping"` Nachricht sendet, wann immer der Benutzer auf die Browseraktion klickt:

```js
/*
Beim Start wird die Verbindung zur "ping_pong"-App hergestellt.
*/
let port = browser.runtime.connectNative("ping_pong");

/*
Hören Sie auf Nachrichten von der App.
*/
port.onMessage.addListener((response) => {
  console.log(`Empfangen: ${response}`);
});

/*
Beim Klicken auf die Browseraktion wird der App eine Nachricht gesendet.
*/
browser.browserAction.onClicked.addListener(() => {
  console.log("Senden:  ping");
  port.postMessage("ping");
});
```

#### Verbindungsloses Messaging

Bei diesem Muster rufen Sie {{WebExtAPIRef("runtime.sendNativeMessage()")}} auf und übergeben:

- den Namen der Anwendung
- die zu sendende JSON-Nachricht
- optional einen Callback.

Für jede Nachricht wird eine neue Instanz der App erstellt. Die App übergibt beim Start zwei Argumente:

- den vollständigen Pfad zum App-Manifest
- (neu in Firefox 55) die ID (wie im [browser_specific_settings](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_specific_settings) Schlüssel der `manifest.json` angegeben) des Add-ons, das sie gestartet hat.

Die erste Nachricht, die von der App gesendet wird, wird als Antwort auf den `sendNativeMessage()` Aufruf behandelt und wird in den Callback übergeben.

Hier ist das obige Beispiel, neu geschrieben für `runtime.sendNativeMessage()`:

```js
function onResponse(response) {
  console.log(`Empfangen ${response}`);
}

function onError(error) {
  console.log(`Fehler: ${error}`);
}

/*
Beim Klicken auf die Browseraktion wird der App eine Nachricht gesendet.
*/
browser.browserAction.onClicked.addListener(() => {
  console.log("Senden:  ping");
  let sending = browser.runtime.sendNativeMessage("ping_pong", "ping");
  sending.then(onResponse, onError);
});
```

### App-Seite

Auf der Seite der Anwendung verwenden Sie die Standardeingabe, um Nachrichten zu empfangen und die Standardausgabe, um sie zu senden.

Jede Nachricht wird mit JSON serialisiert, UTF-8 kodiert und mit einem 32-Bit-Wert ohne Vorzeichen vorangestellt, der die Nachrichtenlänge in der nativen Byte-Reihenfolge enthält.

Die maximale Größe einer einzelnen Nachricht von der Anwendung beträgt 1 MB. Die maximale Größe einer an die Anwendung gesendeten Nachricht beträgt 4 GB.

Sie können schnell Nachrichten senden und empfangen mit diesem NodeJS-Code, `nm_nodejs.mjs`:

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

Hier ist ein weiteres Beispiel, geschrieben in Python. Es wartet auf Nachrichten von der Erweiterung. Beachten Sie, dass die Datei unter Linux ausführbar sein muss. Wenn die Nachricht `"ping"` lautet, antwortet sie mit einer Nachricht `"pong"`.

Dies ist die Python 2-Version:

```python
#!/usr/bin/env -S python2 -u

# Beachten Sie, dass das Ausführen von Python mit dem `-u` Flag unter Windows erforderlich ist,
# um sicherzustellen, dass stdin und stdout im binären und nicht im Textmodus geöffnet werden.

import json
import sys
import struct

# Lesen Sie eine Nachricht von stdin und decodieren Sie sie.
def get_message():
    raw_length = sys.stdin.read(4)
    if not raw_length:
        sys.exit(0)
    message_length = struct.unpack('=I', raw_length)[0]
    message = sys.stdin.read(message_length)
    return json.loads(message)

# Kodieren Sie eine Nachricht für die Übertragung, basierend auf ihrem Inhalt.
def encode_message(message_content):
    # https://docs.python.org/3/library/json.html#basic-usage
    # Um die kompakteste JSON-Darstellung zu erhalten, sollten Sie
    # (',', ':') angeben, um Leerzeichen zu eliminieren.
    # Wir wollen die kompakteste Darstellung, weil der Browser
    # Nachrichten ablehnt, die 1 MB überschreiten.
    encoded_content = json.dumps(message_content, separators=(',', ':'))
    encoded_length = struct.pack('=I', len(encoded_content))
    return {'length': encoded_length, 'content': encoded_content}

# Senden Sie eine kodierte Nachricht zu stdout.
def send_message(encoded_message):
    sys.stdout.write(encoded_message['length'])
    sys.stdout.write(encoded_message['content'])
    sys.stdout.flush()

while True:
    message = get_message()
    if message == "ping":
        send_message(encode_message("pong"))
```

In Python 3 muss der empfangene Binärdatenstrom in einen String dekodiert werden. Der Inhalt, der an das Add-on zurückgesendet wird, muss unter Verwendung einer Struktur in Binärdaten kodiert werden:

```python
#!/usr/bin/env -S python3 -u

# Beachten Sie, dass das Ausführen von Python mit dem `-u` Flag unter Windows erforderlich ist,
# um sicherzustellen, dass stdin und stdout im binären und nicht im Textmodus geöffnet werden.

import sys
import json
import struct

# Lesen Sie eine Nachricht von stdin und dekodieren Sie sie.
def getMessage():
    rawLength = sys.stdin.buffer.read(4)
    if len(rawLength) == 0:
        sys.exit(0)
    messageLength = struct.unpack('@I', rawLength)[0]
    message = sys.stdin.buffer.read(messageLength).decode('utf-8')
    return json.loads(message)

# Kodieren Sie eine Nachricht für die Übertragung,
# basierend auf ihrem Inhalt.
def encodeMessage(messageContent):
    # https://docs.python.org/3/library/json.html#basic-usage
    # Um die kompakteste JSON-Darstellung zu erhalten, sollten Sie
    # (',', ':') angeben, um Leerzeichen zu eliminieren.
    # Wir wollen die kompakteste Darstellung, weil der Browser
    # Nachrichten ablehnt, die 1 MB überschreiten.
    encodedContent = json.dumps(messageContent, separators=(',', ':')).encode('utf-8')
    encodedLength = struct.pack('@I', len(encodedContent))
    return {'length': encodedLength, 'content': encodedContent}

# Senden Sie eine kodierte Nachricht zu stdout.
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

Wenn Sie mit `runtime.connectNative()` eine Verbindung zur nativen Anwendung hergestellt haben, bleibt diese aktiv, bis die Erweiterung `Port.disconnect()` aufruft oder die Seite, die sich mit ihr verbunden hat, geschlossen wird. Wenn Sie die native Anwendung durch Senden von `runtime.sendNativeMessage()` gestartet haben, wird sie nach Empfang der Nachricht und Senden einer Antwort geschlossen.

Um die native Anwendung zu schließen:

- Auf \*nix-Systemen wie macOS und Linux sendet der Browser `SIGTERM` an die native Anwendung, gefolgt von `SIGKILL`, nachdem die Anwendung die Möglichkeit hatte, sich ordnungsgemäß zu beenden. Diese Signale propagieren zu allen Unterprozessen, es sei denn, sie lösen sich in eine neue Prozessgruppe.
- Auf Windows legt der Browser den Prozess der nativen Anwendung in ein [Job-Objekt](https://learn.microsoft.com/en-us/windows/win32/procthread/job-objects) und beendet das Job-Objekt. Wenn die native Anwendung weitere Prozesse startet und möchte, dass diese nach dem Beenden der nativen Anwendung geöffnet bleiben, muss die native Anwendung den zusätzlichen Prozess mit dem [`CREATE_BREAKAWAY_FROM_JOB`](https://learn.microsoft.com/en-us/windows/win32/procthread/process-creation-flags) Flag starten, z.B. durch Verwendung von `CreateProcess`.

## Fehlerbehebung

Wenn etwas schiefgeht, überprüfen Sie die [Browser-Konsole](https://extensionworkshop.com/documentation/develop/debugging/#viewing_log_output). Falls die native Anwendung Ausgabe an stderr sendet, leitet der Browser diese an die Browser-Konsole weiter. Wenn Sie es also geschafft haben, die native Anwendung zu starten, sehen Sie alle von ihr ausgestoßenen Fehlermeldungen.

Wenn Sie es bisher nicht geschafft haben, die Anwendung auszuführen, sollten Sie eine Fehlermeldung sehen, die Ihnen einen Hinweis auf das Problem gibt.

```plain
"No such native application <name>"
```

- Überprüfen Sie, dass der Name, der an `runtime.connectNative()` übergeben wird, mit dem Namen im App-Manifest übereinstimmt.
- macOS/Linux: Überprüfen Sie, dass der Name des App-Manifests `<name>.json` ist.
- macOS/Linux: Überprüfen Sie den Speicherort der Manifestdatei der nativen Anwendung, wie [hier](/de/docs/Mozilla/Add-ons/WebExtensions/Native_manifests#mac_os_x) erwähnt.
- Windows: Überprüfen Sie, ob der Registrierungsschlüssel an der richtigen Stelle ist und ob sein Name mit dem des App-Manifests übereinstimmt.
- Windows: Überprüfen Sie, ob der im Registrierungsschlüssel angegebene Pfad auf das App-Manifest zeigt.

  ```plain
  "Error: Invalid application <name>"
  ```

- Überprüfen Sie, ob der Name der Anwendung keine ungültigen Zeichen enthält.

  ```plain
  "'python' is not recognized as an internal or external command, ..."
  ```

- Windows: Wenn Ihre Anwendung ein Python-Skript ist, überprüfen Sie, ob Python installiert ist und ob Ihr Pfad dafür eingerichtet ist.

  ```plain
  "File at path <path> does not exist, or is not executable"
  ```

- Wenn Sie dies sehen, dann wurde das App-Manifest erfolgreich gefunden.
- Überprüfen Sie, ob der "path" im Manifest der App korrekt ist.
- Windows: Überprüfen Sie, ob Sie die Pfadtrennzeichen korrekt (`"c:\\path\\to\\file"`) entkommen haben.
- Überprüfen Sie, ob sich die Anwendung an dem im `"path"` Property des App-Manifests angegebenen Ort befindet.
- Überprüfen Sie, ob die App ausführbar ist.

  ```plain
  "This extension does not have permission to use native application <name>"
  ```

- Überprüfen Sie, ob der `"allowed_extensions"` Schlüssel im App-Manifest die ID des Add-ons enthält.

  ```plain
      "TypeError: browser.runtime.connectNative is not a function"
  ```

- Überprüfen Sie, ob die Erweiterung die `"nativeMessaging"` Berechtigung hat.

  ```plain
  "[object Object]       NativeMessaging.jsm:218"
  ```

- Es gab ein Problem, die Anwendung zu starten.

## Chrome-Inkompatibilitäten

Es gibt eine Reihe von Unterschieden zwischen den Browsern, die das Native Messaging in Web-Erweiterungen beeinflussen, einschließlich der an die native App übergebenen Argumente, dem Speicherort der Manifestdatei usw. Diese Unterschiede werden in [Chrome-Inkompatibilitäten > Native Messaging](/de/docs/Mozilla/Add-ons/WebExtensions/Chrome_incompatibilities#native_messaging) behandelt.
