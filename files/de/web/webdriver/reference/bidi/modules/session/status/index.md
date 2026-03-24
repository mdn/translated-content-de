---
title: session.status Befehl
short-title: session.status
slug: Web/WebDriver/Reference/BiDi/Modules/session/status
l10n:
  sourceCommit: f83c12ab41865e0e195dd36ad9cdcad511a36957
---

Der `session.status` [Befehl](/de/docs/Web/WebDriver/Reference/BiDi/Modules#commands) des [`session`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/session) Moduls liefert Informationen darüber, ob der Browser in der Lage ist, neue BiDi-Sitzungen zu erstellen, und kann zusätzlich beliebige Meta-Informationen enthalten.

Da dieser Befehl verwendet wird, um den Status des Browsers vor dem Erstellen einer neuen Sitzung zu überprüfen, läuft er ohne eine bereits aktive Sitzung. (In BiDi wird ein solcher Befehl als statischer Befehl bezeichnet.)

## Syntax

```json-nolint
{
  "method": "session.status",
  "params": {}
}
```

### Parameter

Keine. Jedoch müssen Sie das `params` Feld einfügen und auf ein leeres Objekt (`{}`) setzen.

### Rückgabewert

Das `result` Objekt in der Antwort mit den folgenden Feldern:

- `ready`
  - : Ein Boolean, der anzeigt, ob der Browser bereit ist, neue Sitzungen zu erstellen.
    - `true`
      - : Der Browser ist bereit, eine neue Sitzung zu erstellen.
    - `false`
      - : Der Browser kann keine neuen Sitzungen akzeptieren, da er bereits eine aktive Sitzung hat oder sich anderweitig in einem Zustand befindet, in dem eine Sitzungserstellung fehlschlagen würde.
- `message`
  - : Ein String mit Informationen über den aktuellen Status des Browsers.

## Beispiele

### Überprüfung des Browser-Status vor dem Erstellen einer Sitzung

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
