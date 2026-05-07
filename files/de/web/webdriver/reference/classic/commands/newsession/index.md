---
title: Neue Sitzung
short-title: Neue Sitzung
slug: Web/WebDriver/Reference/Classic/Commands/NewSession
l10n:
  sourceCommit: 421a9c26127cf11e33e72184b14656c9d406294d
---

Der _Neue Sitzung_ [Befehl](/de/docs/Web/WebDriver/Reference/Classic/Commands) der [WebDriver](/de/docs/Web/WebDriver) API erstellt eine neue WebDriver-Sitzung mit dem Browser.
Die in der Antwort zurückgegebene Sitzungskennung ist für alle nachfolgenden Befehle erforderlich.

## Syntax

| Methode                                            | URI-Vorlage |
| -------------------------------------------------- | ----------- |
| [`POST`](/de/docs/Web/HTTP/Reference/Methods/POST) | `/session`  |

### Nutzlast

- `capabilities`
  - : Wird verwendet, um die Eigenschaften zu definieren, die der Treiber beim Erstellen einer neuen Sitzung erfüllen muss.
    Siehe [Fähigkeiten](/de/docs/Web/WebDriver/Reference/Capabilities#list_of_capabilities) für verfügbare Optionen.

### Antwort

Die Antwortnutzlast ist ein JSON-Objekt mit:

- `sessionId`
  - : Die eindeutige Kennung der Sitzung.
- `capabilities`
  - : Die ausgehandelten Fähigkeiten der Sitzung.

### Fehler

- `session not created`
  - : Eine neue Sitzung konnte nicht erstellt werden.

## Beispiele

### Starten einer neuen Sitzung

Mit einem WebDriver-Server, der auf `localhost:4444` läuft, startet der folgende Befehl eine neue WebDriver-Sitzung und fordert Firefox als Browser an:

```bash
curl -i -H "Content-Type: application/json" -d '{"capabilities": {"alwaysMatch": {"browserName": "firefox"}}}' http://localhost:4444/session
```

Die Ausgabe wird ähnlich wie folgt aussehen, wobei `27c8437e-5e42-43f9-a26f-2db0fd509ec1` die eindeutige Kennung dieser Sitzung ist:

```http
HTTP/1.1 200 OK
content-type: application/json; charset=utf-8

{"value":{"sessionId":"27c8437e-5e42-43f9-a26f-2db0fd509ec1","capabilities":{"acceptInsecureCerts":false,"browserName":"firefox","browserVersion":"147.0.4","pageLoadStrategy":"normal","platformName":"mac","proxy":{},"setWindowRect":true,"strictFileInteractability":false,"timeouts":{"implicit":0,"pageLoad":300000,"script":30000}}}}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Fähigkeiten](/de/docs/Web/WebDriver/Reference/Capabilities)
