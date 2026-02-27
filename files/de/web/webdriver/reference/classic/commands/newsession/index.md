---
title: Neue Sitzung
short-title: Neue Sitzung
slug: Web/WebDriver/Reference/Classic/Commands/NewSession
l10n:
  sourceCommit: ffd9f9be1372d988194c6c3a539dedf20ee1b71c
---

Der _Neue Sitzung_ [Befehl](/de/docs/Web/WebDriver/Reference/Classic/Commands) der [WebDriver](/de/docs/Web/WebDriver) API erstellt eine neue WebDriver-Sitzung mit dem Browser. Die im Antwortobjekt zurückgegebene Sitzungskennung wird für alle nachfolgenden Befehle benötigt.

## Syntax

| Methode                                            | URI-Vorlage |
| -------------------------------------------------- | ----------- |
| [`POST`](/de/docs/Web/HTTP/Reference/Methods/POST) | `/session`  |

### Nutzlast

- `capabilities`
  - : Wird verwendet, um die Funktionen zu definieren, die der Treiber bei der Erstellung einer neuen Sitzung erfüllen muss. Siehe [Capabilities](/de/docs/Web/WebDriver/Reference/Classic/Capabilities#list_of_capabilities) für verfügbare Optionen.

### Antwort

Die Antwortnutzlast ist ein JSON-Objekt mit:

- `sessionId`
  - : Die eindeutige Kennung der Sitzung.
- `capabilities`
  - : Die ausgehandelten Fähigkeiten der Sitzung.

### Fehler

- Sitzung nicht erstellt
  - : Eine neue Sitzung konnte nicht erstellt werden.

## Beispiele

### Eine neue Sitzung starten

Mit einem auf `localhost:4444` laufenden WebDriver-Server startet der folgende Befehl eine neue WebDriver-Sitzung, die Firefox als Browser anfordert:

```bash
curl -i -H "Content-Type: application/json" -d '{"capabilities": {"alwaysMatch": {"browserName": "firefox"}}}' http://localhost:4444/session
```

Die Ausgabe wird ähnlich wie die folgende aussehen, wobei `27c8437e-5e42-43f9-a26f-2db0fd509ec1` die eindeutige Kennung dieser Sitzung ist:

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

- [Capabilities](/de/docs/Web/WebDriver/Reference/Classic/Capabilities)
