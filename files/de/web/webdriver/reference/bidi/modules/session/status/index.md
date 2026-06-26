---
title: "`session.status`-Befehl"
short-title: status
slug: Web/WebDriver/Reference/BiDi/Modules/session/status
l10n:
  sourceCommit: 9703f3f0a1ae56e4e40af5505451f96c78495cb9
---

Der `session.status` [Befehl](/de/docs/Web/WebDriver/Reference/BiDi/Modules#commands) des [`session`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/session) Moduls liefert Informationen darüber, ob der Browser in der Lage ist, neue BiDi-Sitzungen zu erstellen. Zudem kann er beliebige Metainformationen enthalten.

Da dieser Befehl verwendet wird, um den Status des Browsers vor der Erstellung einer neuen Sitzung zu überprüfen, wird er ohne eine bereits aktive Sitzung ausgeführt. (In BiDi wird ein solcher Befehl als statischer Befehl bezeichnet.)

## Syntax

```json-nolint
{
  "method": "session.status",
  "params": {}
}
```

### Parameter

Keine. Es muss jedoch das `params`-Feld enthalten und auf ein leeres Objekt (`{}`) gesetzt werden.

### Rückgabewert

Die folgenden Felder im `result`-Objekt der Antwort beschreiben den aktuellen Status des Browsers:

- `message`
  - : Ein String mit Informationen über den aktuellen Status des Browsers.
- `ready`
  - : Ein Boolean, der angibt, ob der Browser bereit ist, neue Sitzungen zu erstellen.
    - `true`: Der Browser ist bereit, eine neue Sitzung zu erstellen.
    - `false`: Der Browser kann keine neuen Sitzungen akzeptieren, da bereits eine aktive Sitzung vorliegt oder der Browser sich in einem Zustand befindet, in dem die Erstellung einer Sitzung fehlschlagen würde.

## Beispiele

### Überprüfen des Browser-Status vor der Erstellung einer Sitzung

Mit einer hergestellten [WebDriver BiDi-Verbindung](/de/docs/Web/WebDriver/How_to/Create_BiDi_connection) senden Sie die folgende Nachricht, um zu prüfen, ob der Browser bereit ist, eine neue Sitzung zu erstellen:

```json
{
  "id": 1,
  "method": "session.status",
  "params": {}
}
```

Wenn der Browser verfügbar ist, antwortet er mit:

```json
{
  "id": 1,
  "type": "success",
  "result": {
    "ready": true,
    "message": ""
  }
}
```

Wenn der Browser bereits eine aktive Sitzung hat, könnte die Antwort wie folgt aussehen:

```json
{
  "id": 1,
  "type": "success",
  "result": {
    "ready": false,
    "message": "Session already started"
  }
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`session.new`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/session/new) Befehl
- [`session.end`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/session/end) Befehl
