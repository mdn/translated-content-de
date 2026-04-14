---
title: session.new-Befehl
short-title: session.new
slug: Web/WebDriver/Reference/BiDi/Modules/session/new
l10n:
  sourceCommit: c09036bf0ea2f0b6e322dfdeee64b26ab53e2797
---

Der `session.new` [Befehl](/de/docs/Web/WebDriver/Reference/BiDi/Modules#commands) des [`session`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/session)-Moduls erstellt eine neue BiDi-Sitzung mit dem Browser.

Da dieser Befehl verwendet wird, um eine neue Sitzung zu erstellen, wird er ohne eine bereits aktive Sitzung ausgeführt. (Im BiDi wird ein solcher Befehl als statischer Befehl bezeichnet.)

> [!NOTE]
> Eine auf diese Weise erstellte Sitzung ist nur über WebSocket zugänglich und kann nicht mit den klassischen WebDriver-HTTP-Befehlen verwaltet werden.

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
  - : Ein Objekt, das die angeforderten Funktionen für die Sitzung angibt. Es kann die folgenden Felder enthalten:
    - `alwaysMatch` {{optional_inline}}
      - : Ein Objekt, das die angeforderten Funktionen spezifiziert, die alle vom Browser erfüllt werden müssen, um die Sitzung zu erstellen.
        Wenn der Browser nicht alle angeforderten Funktionen in diesem Objekt erfüllen kann, wird die Sitzung nicht erstellt.
    - `firstMatch` {{optional_inline}}
      - : Ein Array von Objekten, von denen jedes eine alternative Menge von angeforderten Funktionen für die Sitzungserstellung spezifiziert.
        Der Browser versucht die Sätze in der angegebenen Reihenfolge und erstellt eine Sitzung mit dem ersten, bei dem alle angeforderten Funktionen erfüllt werden können.
        Wenn der Browser alle angeforderten Funktionen in keinem der Sätze erfüllen kann, wird die Sitzung nicht erstellt.

Die Objekte `alwaysMatch` und `firstMatch` können die folgenden Funktionen umfassen:

- `acceptInsecureCerts` {{optional_inline}}
  - : Ein boolescher Wert, der steuert, ob nicht vertrauenswürdige TLS-Zertifikate (zum Beispiel selbstsigniert oder abgelaufen) für die Dauer der Sitzung akzeptiert werden.
- `browserName` {{optional_inline}}
  - : Ein String, der den Namen des Browsers angibt, der verwendet werden soll (zum Beispiel `"firefox"` oder `"chrome"`).
- `browserVersion` {{optional_inline}}
  - : Ein String, der die zu verwendende Browserversion angibt (zum Beispiel `"120.0"`).
- `platformName` {{optional_inline}}
  - : Ein String, der das zu verwendende Betriebssystem angibt (zum Beispiel `"windows"`, `"mac"`, `"android"` oder `"linux"`).
- `proxy` {{optional_inline}}
  - : Ein Objekt, das die Proxy-Konfiguration angibt, die der Browser für Netzwerkanfragen verwenden soll.
- `unhandledPromptBehavior` {{optional_inline}}
  - : Ein Objekt, das das Standardverhalten beschreibt, wenn ein Benutzeraufforderungsdialog (wie `alert`, `confirm` oder `prompt`) während eines Befehls auftritt.

### Rückgabewert

Die folgenden Felder im `result`-Objekt der Antwort beschreiben die Eigenschaften der erstellten Sitzung:

- `sessionId`
  - : Ein String, der die eindeutige Kennung für die neu erstellte Sitzung enthält.
- `capabilities`
  - : Ein Objekt, das die vereinbarten und aktiven Fähigkeiten der Sitzung beschreibt. Es beinhaltet die folgenden Felder:
    - [`acceptInsecureCerts`](/de/docs/Web/WebDriver/Reference/Capabilities/acceptInsecureCerts)
      - : Ein boolescher Wert, der angibt, ob nicht vertrauenswürdige TLS-Zertifikate (zum Beispiel selbstsigniert oder abgelaufen) für die Dauer der Sitzung akzeptiert werden.
    - `browserName`
      - : Ein String, der den Namen des Browsers enthält.
    - `browserVersion`
      - : Ein String, der die Version des Browsers enthält.
    - `platformName`
      - : Ein String, der den Namen des Betriebssystems enthält.
    - `setWindowRect`
      - : Ein boolescher Wert, der angibt, ob das Browserfenster mithilfe des [Set Window Rect](/de/docs/Web/WebDriver/Reference/Classic/Commands/SetWindowRect)-Befehls in der Größe geändert und verschoben werden kann.
    - `userAgent`
      - : Ein String, der die User-Agent-Zeichenfolge des Browsers enthält (zum Beispiel `"Mozilla/5.0 (X11; Linux x86_64; rv:130.0) Gecko/20100101 Firefox/130.0"`).
    - `proxy` {{optional_inline}}
      - : Ein Objekt, das die aktive Proxy-Konfiguration beschreibt. Ein leeres Objekt (`{}`) zeigt an, dass kein Proxy konfiguriert ist.
    - `unhandledPromptBehavior` {{optional_inline}}
      - : Ein Objekt, das das Standardverhalten beschreibt, wenn ein Benutzeraufforderungsdialog (wie `alert`, `confirm` oder `prompt`) während eines Befehls auftritt. Dieses Feld ist nur vorhanden, wenn es im `capabilities`-Parameter angegeben ist.
    - [`webSocketUrl`](/de/docs/Web/WebDriver/Reference/Capabilities/webSocketUrl) {{optional_inline}}
      - : Ein String, der die WebSocket-URL für die Sitzung enthält.

Der Browser kann auch herstellerspezifische Fähigkeiten zurückgeben, die mit einem Browser-Identifier (zum Beispiel `moz:buildID` für Firefox) versehen sind.

### Fehler

- Sitzung nicht erstellt
  - : Es existiert bereits eine Sitzung oder der Browser kann keine neue Sitzung erstellen (zum Beispiel, weil eine angeforderte Fähigkeit nicht erfüllt werden kann).

## Beispiele

### Erstellen einer Sitzung mit Standardfähigkeiten

Mit einer etablierten WebDriver BiDi-Verbindung senden Sie die folgende Nachricht, um eine neue Sitzung mit Standardfähigkeiten zu erstellen:

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

Um einen bestimmten Browser zu verlangen und unsichere Zertifikate mithilfe von `alwaysMatch` zu akzeptieren, senden Sie die folgende Nachricht:

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

### Versuch, eine Sitzung zu erstellen, wenn bereits eine besteht

In Browsern, die keine mehreren Sitzungen unterstützen (z.B. Firefox), führt das Senden von `session.new`, wenn bereits eine Sitzung aktiv ist, zu einer Fehlerantwort:

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
