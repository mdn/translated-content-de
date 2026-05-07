---
title: "`session.status`-Befehl"
short-title: status
slug: Web/WebDriver/Reference/BiDi/Modules/session/status
l10n:
  sourceCommit: 421a9c26127cf11e33e72184b14656c9d406294d
---

Der `session.status` [Befehl](/de/docs/Web/WebDriver/Reference/BiDi/Modules#commands) des [`session`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/session) Moduls gibt Informationen darüber zurück, ob der Browser in der Lage ist, neue BiDi-Sitzungen zu erstellen, und kann zusätzlich beliebige Metainformationen enthalten.

Da dieser Befehl verwendet wird, um den Status des Browsers vor dem Erstellen einer neuen Sitzung zu überprüfen, wird er ohne eine bereits aktive Sitzung ausgeführt. (In BiDi wird ein solcher Befehl als statischer Befehl bezeichnet.)

## Syntax

```json-nolint
{
  "method": "session.status",
  "params": {}
}
```

### Parameter

Keine. Sie müssen jedoch das `params`-Feld einschließen und auf ein leeres Objekt (`{}`) setzen.

### Rückgabewert

Die folgenden Felder im `result`-Objekt der Antwort beschreiben den aktuellen Status des Browsers:

- `ready`
  - : Ein Boolean, der anzeigt, ob der Browser bereit ist, neue Sitzungen zu erstellen.
    - `true`
      - : Der Browser ist bereit, eine neue Sitzung zu erstellen.
    - `false`
      - : Der Browser kann keine neuen Sitzungen akzeptieren, weil er bereits eine aktive Sitzung hat oder sich in einem Zustand befindet, in dem das Erstellen einer Sitzung fehlschlagen würde.
- `message`
  - : Ein String mit Informationen über den aktuellen Status des Browsers.

## Beispiele

### Überprüfung des Browserstatus vor dem Erstellen einer Sitzung

Mit einer [WebDriver BiDi Verbindung](/de/docs/Web/WebDriver/How_to/Create_BiDi_connection) hergestellt, senden Sie die folgende Nachricht, um zu überprüfen, ob der Browser bereit ist, eine neue Sitzung zu erstellen:

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

Falls der Browser bereits eine aktive Sitzung hat, könnte die Antwort wie folgt aussehen:

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
