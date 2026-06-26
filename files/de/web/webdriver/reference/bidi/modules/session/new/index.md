---
title: "`session.new`-Befehl"
short-title: new
slug: Web/WebDriver/Reference/BiDi/Modules/session/new
l10n:
  sourceCommit: 9703f3f0a1ae56e4e40af5505451f96c78495cb9
---

Der `session.new`-[Befehl](/de/docs/Web/WebDriver/Reference/BiDi/Modules#commands) des [`session`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/session)-Moduls erstellt eine neue BiDi-Sitzung mit dem Browser.

Da dieser Befehl zum Erstellen einer neuen Sitzung verwendet wird, wird er ohne eine bereits aktive Sitzung ausgeführt. (Ein solcher Befehl wird bei BiDi als statischer Befehl bezeichnet.)

> [!NOTE]
> Eine auf diese Weise erstellte Sitzung ist nur über WebSocket zugänglich und kann nicht mit klassischen WebDriver HTTP-Befehlen verwaltet werden.

## Syntax

```json-nolint
/* With required parameters */
{
  "method": "session.new",
  "params": {
    "capabilities": {}
  }
}

/* With required and optional parameters */
{
  "method": "session.new",
  "params": {
    "capabilities": {
      "alwaysMatch": {
        "acceptInsecureCerts": true,
        "proxy": {
          "proxyType": "manual",
          "httpProxy": "127.0.0.1:80"
        },
        "unhandledPromptBehavior": {
          "default": "accept"
        }
      },
      "firstMatch": [
        {
          "browserName": "firefox",
          "platformName": "mac"
        },
        {
          "browserName": "chrome",
          "platformName": "windows"
        }
      ]
    }
  }
}
```

### Parameter

Das `params`-Feld enthält:

- `capabilities`
  - : Ein Objekt, das die angeforderten Funktionen für die Sitzung angibt. Es kann die folgenden Felder umfassen:
    - [`alwaysMatch`](/de/docs/Web/WebDriver/Reference/Capabilities#alwaysmatch) {{optional_inline}}
      - : Ein Objekt, das die angeforderten Funktionen angibt, die alle vom Browser für die Sitzungserstellung erfüllt werden müssen.
        Wenn der Browser nicht alle angeforderten Funktionen in diesem Objekt erfüllen kann, wird die Sitzung nicht erstellt.
    - [`firstMatch`](/de/docs/Web/WebDriver/Reference/Capabilities#firstmatch) {{optional_inline}}
      - : Ein Array von Objekten, die jeweils einen alternativen Satz angeforderter Funktionen für die Sitzungserstellung angeben.
        Der Browser versucht, jeden Satz in der angegebenen Reihenfolge zu verwenden, und erstellt eine Sitzung mit dem ersten, bei dem alle angeforderten Funktionen erfüllt werden können.
        Wenn der Browser nicht alle angeforderten Funktionen in einem der Sätze erfüllen kann, wird die Sitzung nicht erstellt.

Die `alwaysMatch`- und `firstMatch`-Objekte können die folgenden Funktionen enthalten:

- [`acceptInsecureCerts`](/de/docs/Web/WebDriver/Reference/Capabilities/acceptInsecureCerts) {{optional_inline}}
  - : Ein Boolean, der steuert, ob unzuverlässige TLS-Zertifikate (z. B. selbstsigniert oder abgelaufen) für die Dauer der Sitzung akzeptiert werden.
- `browserName` {{optional_inline}}
  - : Ein String, der den Namen des zu verwendenden Browsers angibt (z. B. `"firefox"` oder `"chrome"`).
- `browserVersion` {{optional_inline}}
  - : Ein String, der die zu verwendende Browserversion angibt (z. B. `"120.0"`).
- `platformName` {{optional_inline}}
  - : Ein String, der das Betriebssystem angibt, das übereinstimmen soll (z. B. `"windows"`, `"mac"`, `"android"` oder `"linux"`).
- `proxy` {{optional_inline}}
  - : Ein Objekt, das die Proxy-Konfiguration angibt, die der Browser für Netzwerk-Anfragen verwenden soll.
- `unhandledPromptBehavior` {{optional_inline}}
  - : Ein Objekt, das das Standardverhalten angibt, wenn während eines Befehls eine Benutzeraufforderung (wie ein `alert`-, `confirm`- oder `prompt`-Dialog) erkannt wird.

### Rückgabewert

Die folgenden Felder im `result`-Objekt der Antwort beschreiben die Eigenschaften der erstellten Sitzung:

- `capabilities`
  - : Ein Objekt, das die ausgehandelten und für die Sitzung aktiven Möglichkeiten beschreibt. Es umfasst die folgenden Felder:
    - [`acceptInsecureCerts`](/de/docs/Web/WebDriver/Reference/Capabilities/acceptInsecureCerts)
      - : Ein Boolean, der angibt, ob unzuverlässige TLS-Zertifikate (z. B. selbstsigniert oder abgelaufen) für die Dauer der Sitzung akzeptiert werden.
    - `browserName`
      - : Ein String, der den Namen des Browsers enthält.
    - `browserVersion`
      - : Ein String, der die Version des Browsers enthält.
    - `platformName`
      - : Ein String, der den Namen des Betriebssystems enthält.
    - `proxy` {{optional_inline}}
      - : Ein Objekt, das die aktive Proxy-Konfiguration beschreibt.
        Ein leeres Objekt (`{}`) gibt an, dass kein Proxy konfiguriert ist.
    - `setWindowRect`
      - : Ein Boolean, der angibt, ob das Browserfenster mithilfe des [Set Window Rect](/de/docs/Web/WebDriver/Reference/Classic/Commands/SetWindowRect)-Befehls in der Größe verändert und neu positioniert werden kann.
    - `unhandledPromptBehavior` {{optional_inline}}
      - : Ein Objekt, das das Standardverhalten beschreibt, wenn während eines Befehls eine Benutzeraufforderung (wie ein `alert`-, `confirm`- oder `prompt`-Dialog) erkannt wird. Dieses Feld ist nur vorhanden, wenn es im `capabilities`-Parameter angegeben wurde.
    - `userAgent`
      - : Ein String, der die User-Agent-Zeichenkette des Browsers enthält (z. B. `"Mozilla/5.0 (X11; Linux x86_64; rv:130.0) Gecko/20100101 Firefox/130.0"`).
    - [`webSocketUrl`](/de/docs/Web/WebDriver/Reference/Capabilities/webSocketUrl) {{optional_inline}}
      - : Ein String, der die WebSocket-URL für die Sitzung enthält.
- `sessionId`
  - : Ein String, der die eindeutige Kennung für die neu erstellte Sitzung enthält.

Der Browser kann auch anbieterbezogene Möglichkeiten zurückgeben, die mit einem Browser-Identifier präfixiert sind (z. B. `moz:buildID` für Firefox).

### Fehler

- `session not created`
  - : Eine Sitzung existiert bereits, oder der Browser kann keine neue Sitzung erstellen (z. B. weil eine angeforderte Möglichkeit nicht erfüllt werden kann).

## Beispiele

### Erstellen einer Sitzung mit Standardfähigkeiten

Nachdem eine WebDriver BiDi-Verbindung hergestellt wurde, senden Sie die folgende Nachricht, um eine neue Sitzung mit Standardfähigkeiten zu erstellen:

```json
{
  "id": 1,
  "method": "session.new",
  "params": {
    "capabilities": {}
  }
}
```

Der Browser antwortet mit der Sitzungskennung und den ausgehandelten Fähigkeiten:

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

### Erstellen einer Sitzung mit erforderlichen Fähigkeiten

Um einen spezifischen Browser zu fordern und unsichere Zertifikate mit `alwaysMatch` zu akzeptieren, senden Sie die folgende Nachricht:

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

Wenn der Browser die angeforderten Fähigkeiten erfüllen kann, antwortet er mit der Sitzungskennung und den ausgehandelten Fähigkeiten wie folgt:

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

### Versuch, eine Sitzung zu erstellen, wenn bereits eine existiert

In Browsern, die keine Mehrfachsitzungen unterstützen (z. B. Firefox), führt das Senden von `session.new`, wenn bereits eine Sitzung aktiv ist, zu einer Fehlermeldung:

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

- [`session.status`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/session/status)-Befehl
- [`session.end`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/session/end)-Befehl
- [Kombinieren von `alwaysMatch` und `firstMatch`](/de/docs/Web/WebDriver/Reference/Capabilities#combining_alwaysmatch_and_firstmatch)
