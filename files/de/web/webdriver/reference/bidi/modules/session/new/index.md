---
title: session.new Befehl
short-title: session.new
slug: Web/WebDriver/Reference/BiDi/Modules/session/new
l10n:
  sourceCommit: f83c12ab41865e0e195dd36ad9cdcad511a36957
---

Der `session.new` [Befehl](/de/docs/Web/WebDriver/Reference/BiDi/Modules#commands) des [`session`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/session) Moduls erstellt eine neue BiDi-Sitzung mit dem Browser.

Da dieser Befehl verwendet wird, um eine neue Sitzung zu erstellen, läuft er ohne eine bereits aktive Sitzung. (In BiDi wird ein solcher Befehl als statischer Befehl bezeichnet.)

> [!NOTE]
> Eine auf diese Weise erstellte Sitzung ist nur über WebSocket zugänglich und kann nicht mit klassischen WebDriver-HTTP-Befehlen verwaltet werden.

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

Das `params` Feld enthält:

- `capabilities`
  - : Ein Objekt, das die angeforderten Funktionen für die Sitzung spezifiziert. Es kann die folgenden Felder umfassen:
    - `alwaysMatch` {{optional_inline}}
      - : Ein Objekt, das die angeforderten Funktionen spezifiziert, die alle vom Browser zur Sitzungserstellung erfüllt werden müssen.
        Wenn der Browser nicht alle angeforderten Funktionen in diesem Objekt erfüllen kann, wird die Sitzung nicht erstellt.
    - `firstMatch` {{optional_inline}}
      - : Ein Array von Objekten, von denen jedes eine alternative Menge angeforderter Funktionen für die Sitzungserstellung spezifiziert.
        Der Browser versucht jede Menge in der angegebenen Reihenfolge und erstellt eine Sitzung mit der ersten, bei der alle angeforderten Funktionen erfüllt werden können.
        Wenn der Browser alle angeforderten Funktionen in keiner der Sätze erfüllen kann, wird die Sitzung nicht erstellt.

Die `alwaysMatch` und `firstMatch` Objekte können die folgenden Funktionen enthalten:

- [`acceptInsecureCerts`](/de/docs/Web/WebDriver/Reference/Capabilities/acceptInsecureCerts) {{optional_inline}}
  - : Ein Boolescher Wert, der angibt, ob nicht vertrauenswürdige TLS-Zertifikate (zum Beispiel selbstsignierte oder abgelaufene) für die Dauer der Sitzung akzeptiert werden.
- `browserName` {{optional_inline}}
  - : Ein String, der den Namen des zu verwendenden Browsers angibt (zum Beispiel, `"firefox"` oder `"chrome"`).
- `browserVersion` {{optional_inline}}
  - : Ein String, der die zu verwendende Browserversion angibt (zum Beispiel, `"120.0"`).
- `platformName` {{optional_inline}}
  - : Ein String, der das Betriebssystem angibt, das verwendet werden soll (zum Beispiel, `"windows"`, `"mac"`, `"android"` oder `"linux"`).
- `proxy` {{optional_inline}}
  - : Ein Objekt, das die Proxy-Konfiguration spezifiziert, die der Browser für Netzwerkanforderungen verwenden soll.
- `unhandledPromptBehavior` {{optional_inline}}
  - : Ein Objekt, das das Standardverhalten spezifiziert, wenn während eines Befehls eine Benutzerabfrage (wie ein `alert`, `confirm` oder `prompt` Dialog) auftritt.

### Rückgabewert

Die folgenden Felder im `result` Objekt der Antwort beschreiben die Eigenschaften der erstellten Sitzung:

- `sessionId`
  - : Ein String, der den eindeutigen Bezeichner für die neu erstellte Sitzung enthält.
- `capabilities`
  - : Ein Objekt, das die ausgehandelten und aktiven Funktionen für die Sitzung beschreibt. Es beinhaltet die folgenden Felder:
    - [`acceptInsecureCerts`](/de/docs/Web/WebDriver/Reference/Capabilities/acceptInsecureCerts)
      - : Ein Boolescher Wert, der angibt, ob nicht vertrauenswürdige TLS-Zertifikate (zum Beispiel selbstsignierte oder abgelaufene) für die Dauer der Sitzung akzeptiert werden.
    - `browserName`
      - : Ein String, der den Namen des Browsers enthält.
    - `browserVersion`
      - : Ein String, der die Version des Browsers enthält.
    - `platformName`
      - : Ein String, der den Namen des Betriebssystems enthält.
    - `setWindowRect`
      - : Ein Boolescher Wert, der angibt, ob das Browserfenster mit dem [Set Window Rect](/de/docs/Web/WebDriver/Reference/Classic/Commands/SetWindowRect) Befehl in der Größe verändert und repositioniert werden kann.
    - `userAgent`
      - : Ein String, der die User-Agent-Zeichenkette des Browsers enthält (zum Beispiel, `"Mozilla/5.0 (X11; Linux x86_64; rv:130.0) Gecko/20100101 Firefox/130.0"`).
    - `proxy` {{optional_inline}}
      - : Ein Objekt, das die aktive Proxy-Konfiguration beschreibt. Ein leeres Objekt (`{}`) zeigt an, dass kein Proxy konfiguriert ist.
    - `unhandledPromptBehavior` {{optional_inline}}
      - : Ein Objekt, das das Standardverhalten beschreibt, wenn während eines Befehls eine Benutzerabfrage (wie ein `alert`, `confirm` oder `prompt` Dialog) auftritt. Dieses Feld ist nur vorhanden, wenn es im `capabilities` Parameter spezifiziert wurde.
    - [`webSocketUrl`](/de/docs/Web/WebDriver/Reference/Capabilities/webSocketUrl) {{optional_inline}}
      - : Ein String, der die WebSocket-URL für die Sitzung enthält.

Der Browser kann auch browserspezifische Funktionen zurückgeben, die mit einem Browser-Bezeichner präfixiert sind (zum Beispiel, `moz:buildID` für Firefox).

### Fehler

- Sitzung nicht erstellt
  - : Eine Sitzung existiert bereits, oder der Browser ist nicht in der Lage, eine neue Sitzung zu erstellen (zum Beispiel, weil eine angeforderte Funktion nicht erfüllt werden kann).

## Beispiele

### Erstellen einer Sitzung mit Standardfunktionen

Bei einer etablierten WebDriver BiDi-Verbindung senden Sie die folgende Nachricht, um eine neue Sitzung mit den Standardfunktionen zu erstellen:

```json
{
  "id": 1,
  "method": "session.new",
  "params": {
    "capabilities": {}
  }
}
```

Der Browser antwortet mit dem Sitzungsbezeichner und den ausgehandelten Funktionen:

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

Um einen bestimmten Browser zu verwenden und unsichere Zertifikate mit `alwaysMatch` zu akzeptieren, senden Sie die folgende Nachricht:

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

Wenn der Browser die angeforderten Funktionen erfüllen kann, antwortet er mit dem Sitzungsbezeichner und den ausgehandelten Funktionen wie folgt:

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

In Browsern, die keine Mehrfachsitzungen unterstützen (z.B. Firefox), führt das Senden von `session.new`, wenn bereits eine Sitzung aktiv ist, zu einer Fehlermeldung:

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
