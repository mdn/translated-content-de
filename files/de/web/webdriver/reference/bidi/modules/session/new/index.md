---
title: "`session.new`-Befehl"
short-title: new
slug: Web/WebDriver/Reference/BiDi/Modules/session/new
l10n:
  sourceCommit: 421a9c26127cf11e33e72184b14656c9d406294d
---

Der `session.new` [Befehl](/de/docs/Web/WebDriver/Reference/BiDi/Modules#commands) des [`session`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/session)-Moduls erstellt eine neue BiDi-Session mit dem Browser.

Da dieser Befehl verwendet wird, um eine neue Sitzung zu erstellen, läuft er ohne eine bereits aktive Sitzung. (In BiDi wird ein solcher Befehl als statischer Befehl bezeichnet.)

> [!NOTE]
> Eine auf diese Weise erstellte Sitzung ist nur über WebSocket zugänglich und kann nicht mithilfe klassischer WebDriver-HTTP-Befehle verwaltet werden.

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
  - : Ein Objekt, das die angeforderten Funktionen für die Sitzung spezifiziert. Es kann die folgenden Felder enthalten:
    - `alwaysMatch` {{optional_inline}}
      - : Ein Objekt, das die angeforderten Funktionen spezifiziert, die alle vom Browser erfüllt werden müssen, um die Sitzung zu erstellen.
        Wenn der Browser nicht alle angeforderten Funktionen in diesem Objekt erfüllen kann, wird die Sitzung nicht erstellt.
    - `firstMatch` {{optional_inline}}
      - : Ein Array von Objekten, wobei jedes eine alternative Menge von angeforderten Funktionen für die Sitzungserstellung spezifiziert.
        Der Browser versucht, jede Menge in der angegebenen Reihenfolge zu erfüllen, und erstellt eine Sitzung mit der ersten, bei der alle angeforderten Funktionen erfüllt werden können.
        Wenn der Browser keine der angeforderten Funktionen in einer der Mengen erfüllen kann, wird die Sitzung nicht erstellt.

Die `alwaysMatch`- und `firstMatch`-Objekte können folgende Funktionen enthalten:

- `acceptInsecureCerts` {{optional_inline}}
  - : Ein boolescher Wert, der steuert, ob nicht vertrauenswürdige TLS-Zertifikate (z. B. selbstsignierte oder abgelaufene) für die Dauer der Sitzung akzeptiert werden.
- `browserName` {{optional_inline}}
  - : Ein String, der den Namen des Browsers angibt, der verwendet werden soll (z.B. `"firefox"` oder `"chrome"`).
- `browserVersion` {{optional_inline}}
  - : Ein String, der die zu verwendende Browserversion angibt (z.B. `"120.0"`).
- `platformName` {{optional_inline}}
  - : Ein String, der das zu verwendende Betriebssystem angibt (z.B. `"windows"`, `"mac"`, `"android"` oder `"linux"`).
- `proxy` {{optional_inline}}
  - : Ein Objekt, das die Proxy-Konfiguration spezifiziert, die der Browser für Netzwerk-Anfragen verwenden soll.
- `unhandledPromptBehavior` {{optional_inline}}
  - : Ein Objekt, das das Standardverhalten spezifiziert, wenn während eines Befehls eine Benutzeraufforderung (wie ein `alert`, `confirm` oder `prompt` Dialog) auftritt.

### Rückgabewert

Die folgenden Felder im `result`-Objekt der Antwort beschreiben die Eigenschaften der erstellten Sitzung:

- `sessionId`
  - : Ein String, der die eindeutige Kennung für die neu erstellte Sitzung enthält.
- `capabilities`
  - : Ein Objekt, das die Fähigkeiten beschreibt, die ausgehandelt und für die Sitzung aktiv sind. Es umfasst die folgenden Felder:
    - [`acceptInsecureCerts`](/de/docs/Web/WebDriver/Reference/Capabilities/acceptInsecureCerts)
      - : Ein boolescher Wert, der anzeigt, ob nicht vertrauenswürdige TLS-Zertifikate (z. B. selbstsignierte oder abgelaufene) für die Dauer der Sitzung akzeptiert werden.
    - `browserName`
      - : Ein String, der den Namen des Browsers enthält.
    - `browserVersion`
      - : Ein String, der die Version des Browsers enthält.
    - `platformName`
      - : Ein String, der den Namen des Betriebssystems enthält.
    - `setWindowRect`
      - : Ein boolescher Wert, der angibt, ob das Browserfenster mithilfe des [Set Window Rect](/de/docs/Web/WebDriver/Reference/Classic/Commands/SetWindowRect)-Befehls geändert und positioniert werden kann.
    - `userAgent`
      - : Ein String, der den User-Agent-String des Browsers enthält (z.B. `"Mozilla/5.0 (X11; Linux x86_64; rv:130.0) Gecko/20100101 Firefox/130.0"`).
    - `proxy` {{optional_inline}}
      - : Ein Objekt, das die aktive Proxy-Konfiguration beschreibt. Ein leeres Objekt (`{}`) zeigt an, dass kein Proxy konfiguriert ist.
    - `unhandledPromptBehavior` {{optional_inline}}
      - : Ein Objekt, das das Standardverhalten beschreibt, wenn während eines Befehls eine Benutzeraufforderung (wie ein `alert`, `confirm` oder `prompt` Dialog) auftritt. Dieses Feld ist nur vorhanden, wenn im `capabilities`-Parameter angegeben.
    - [`webSocketUrl`](/de/docs/Web/WebDriver/Reference/Capabilities/webSocketUrl) {{optional_inline}}
      - : Ein String, der die WebSocket-URL für die Sitzung enthält.

Der Browser kann auch herstellerspezifische Fähigkeiten zurückgeben, die mit einem Browser-Kennzeichner (z. B. `moz:buildID` für Firefox) versehen sind.

### Fehler

- `session not created`
  - : Eine Sitzung existiert bereits, oder der Browser kann keine neue Sitzung erstellen (z.B. weil eine angeforderte Fähigkeit nicht erfüllt werden kann).

## Beispiele

### Erstellen einer Sitzung mit Standardfunktionen

Bei einer bestehenden WebDriver-BiDi-Verbindung senden Sie die folgende Nachricht, um eine neue Sitzung mit Standardfunktionen zu erstellen:

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

### Erstellen einer Sitzung mit erforderlichen Funktionen

Um einen bestimmten Browser anzufordern und unsichere Zertifikate mit `alwaysMatch` zu akzeptieren, senden Sie die folgende Nachricht:

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

In Browsern, die keine mehreren Sitzungen unterstützen (z.B. Firefox), führt das Senden von `session.new`, wenn bereits eine Sitzung aktiv ist, zu einer Fehlermeldung:

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
