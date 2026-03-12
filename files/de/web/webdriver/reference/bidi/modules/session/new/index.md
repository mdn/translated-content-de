---
title: session.new Befehl
short-title: session.new
slug: Web/WebDriver/Reference/BiDi/Modules/session/new
l10n:
  sourceCommit: fbf733732bf531a1be40a0c646bcbc4b31618476
---

Der `session.new` [Befehl](/de/docs/Web/WebDriver/Reference/BiDi/Modules#commands) des [`session`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/session) Moduls erstellt eine neue BiDi-Sitzung mit dem Browser.

Da dieser Befehl zum Erstellen einer neuen Sitzung verwendet wird, wird er ohne bereits aktive Sitzung ausgeführt. (In BiDi wird ein solcher Befehl als statischer Befehl bezeichnet.)

> [!NOTE]
> Eine so erstellte Sitzung ist nur über WebSocket zugänglich und kann nicht mit den klassischen WebDriver HTTP-Befehlen verwaltet werden.

## Syntax

```json-nolint
{
  "method": "session.new",
  "params": {
    "capabilities": {}
  }
}
```

### Parameter

Das `params`-Feld enthält:

- `capabilities`
  - : Ein Objekt, das die angeforderten Funktionen für die Sitzung angibt. Es kann die folgenden Felder umfassen:
    - `alwaysMatch` {{optional_inline}}
      - : Ein Objekt, das die angeforderten Funktionen angibt, die alle vom Browser für die Sitzungserstellung erfüllt werden müssen.
        Wenn der Browser nicht alle angeforderten Funktionen in diesem Objekt erfüllen kann, wird die Sitzung nicht erstellt.
    - `firstMatch` {{optional_inline}}
      - : Ein Array von Objekten, von denen jedes eine alternative Reihe von angeforderten Funktionen für die Sitzungserstellung angibt.
        Der Browser versucht jede Reihe in der angegebenen Reihenfolge und erstellt eine Sitzung mit der ersten Reihe, bei der alle angeforderten Funktionen erfüllt werden können.
        Wenn der Browser nicht alle angeforderten Funktionen in einer der Reihen erfüllen kann, wird die Sitzung nicht erstellt.

Die `alwaysMatch`- und `firstMatch`-Objekte können die folgenden Funktionen enthalten:

- `acceptInsecureCerts` {{optional_inline}}
  - : Ein boolescher Wert, der angibt, ob nicht vertrauenswürdige TLS-Zertifikate (zum Beispiel selbstsignierte oder abgelaufene) für die Dauer der Sitzung akzeptiert werden.
- `browserName` {{optional_inline}}
  - : Ein String, der den Namen des zu verwendenden Browsers angibt (zum Beispiel `"firefox"` oder `"chrome"`).
- `browserVersion` {{optional_inline}}
  - : Ein String, der die zuzuordnende Browserversion angibt (zum Beispiel `"120.0"`).
- `platformName` {{optional_inline}}
  - : Ein String, der das zuzuordnende Betriebssystem angibt (zum Beispiel `"windows"`, `"mac"`, `"android"` oder `"linux"`).
- `proxy` {{optional_inline}}
  - : Ein Objekt, das die Proxy-Konfiguration angibt, die der Browser für Netzwerk-Anfragen verwenden soll.
- `unhandledPromptBehavior` {{optional_inline}}
  - : Ein Objekt, das das Standardverhalten angibt, wenn während eines Befehls ein Benutzerhinweis (wie ein `alert`, `confirm` oder `prompt` Dialog) auftritt.

### Rückgabewert

Die folgenden Felder im `result`-Objekt der Antwort beschreiben die Eigenschaften der erstellten Sitzung:

- `sessionId`
  - : Ein String, der die eindeutige Kennung für die neu erstellte Sitzung enthält.
- `capabilities`
  - : Ein Objekt, das die ausgehandelten und aktiven Funktionen für die Sitzung beschreibt. Es beinhaltet die folgenden Felder:
    - `acceptInsecureCerts`
      - : Ein boolescher Wert, der angibt, ob nicht vertrauenswürdige TLS-Zertifikate (zum Beispiel selbstsignierte oder abgelaufene) für die Dauer der Sitzung akzeptiert werden.
    - `browserName`
      - : Ein String, der den Namen des Browsers enthält.
    - `browserVersion`
      - : Ein String, der die Version des Browsers enthält.
    - `platformName`
      - : Ein String, der den Namen des Betriebssystems enthält.
    - `setWindowRect`
      - : Ein boolescher Wert, der angibt, ob das Browserfenster mit dem [Set Window Rect](/de/docs/Web/WebDriver/Reference/Classic/Commands/SetWindowRect) Befehl in der Größe verändert und neu positioniert werden kann.
    - `userAgent`
      - : Ein String, der die User-Agent-Zeichenkette des Browsers enthält (zum Beispiel `"Mozilla/5.0 (X11; Linux x86_64; rv:130.0) Gecko/20100101 Firefox/130.0"`).
    - `proxy` {{optional_inline}}
      - : Ein Objekt, das die aktive Proxy-Konfiguration beschreibt. Ein leeres Objekt (`{}`) gibt an, dass kein Proxy konfiguriert ist.
    - `unhandledPromptBehavior` {{optional_inline}}
      - : Ein Objekt, das das Standardverhalten beschreibt, wenn während eines Befehls ein Benutzerhinweis (wie ein `alert`, `confirm` oder `prompt` Dialog) auftritt. Dieses Feld ist nur vorhanden, wenn es im `capabilities`-Parameter angegeben wurde.
    - `webSocketUrl` {{optional_inline}}
      - : Ein String, der die WebSocket-URL für die Sitzung enthält.

Der Browser kann auch herstellerspezifische Funktionen zurückgeben, die mit einem Browserkennzeichen versehen sind (zum Beispiel `moz:buildID` für Firefox).

### Fehler

- session not created
  - : Eine Sitzung ist bereits vorhanden, oder der Browser kann keine neue Sitzung erstellen (zum Beispiel, weil eine angeforderte Funktion nicht erfüllt werden kann).

## Beispiele

### Erstellen einer Sitzung mit Standardfunktionen

Mit einer etablierten WebDriver BiDi-Verbindung senden Sie die folgende Nachricht, um eine neue Sitzung mit Standardfunktionen zu erstellen:

```json
{
  "id": 1,
  "method": "session.new",
  "params": {
    "capabilities": {}
  }
}
```

Der Browser antwortet mit der Sitzungskennung und den ausgehandelten Funktionen:

```json
{
  "id": 1,
  "type": "success",
  "result": {
    "sessionId": "a1b2c3d4-e5f6-7890-abcd-ef1234567890",
    "capabilities": {
      "acceptInsecureCerts": false,
      "browserName": "firefox",
      "browserVersion": "147.0.4",
      "platformName": "mac",
      "setWindowRect": true,
      "userAgent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:147.0) Gecko/20100101 Firefox/147.0",
      "proxy": {}
    }
  }
}
```

### Erstellen einer Sitzung mit erforderlichen Funktionen

Um einen bestimmten Browser zu erfordern und unsichere Zertifikate mit `alwaysMatch` zu akzeptieren, senden Sie die folgende Nachricht:

```json
{
  "id": 1,
  "method": "session.new",
  "params": {
    "capabilities": {
      "alwaysMatch": {
        "browserName": "firefox",
        "acceptInsecureCerts": true
      }
    }
  }
}
```

Wenn der Browser die angeforderten Funktionen erfüllen kann, antwortet er mit der Sitzungskennung und den ausgehandelten Funktionen wie folgt:

```json
{
  "id": 1,
  "type": "success",
  "result": {
    "sessionId": "a1b2c3d4-e5f6-7890-abcd-ef1234567890",
    "capabilities": {
      "acceptInsecureCerts": true,
      "browserName": "firefox",
      "browserVersion": "147.0.4",
      "platformName": "mac",
      "setWindowRect": true,
      "userAgent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:147.0) Gecko/20100101 Firefox/147.0",
      "proxy": {}
    }
  }
}
```

### Versuch, eine Sitzung zu erstellen, wenn bereits eine vorhanden ist

In Browsern, die keine Mehrfachsitzungen unterstützen (z.B. Firefox), führt das Senden von `session.new`, wenn bereits eine Sitzung aktiv ist, zu einer Fehlerantwort:

```json
{
  "type": "error",
  "id": 1,
  "error": "session not created",
  "message": "Maximum number of active sessions",
  "stacktrace": ""
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`session.status`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/session/status) Befehl
- [`session.end`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/session/end) Befehl
