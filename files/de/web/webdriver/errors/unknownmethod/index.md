---
title: Unbekannte Methode
slug: Web/WebDriver/Errors/UnknownMethod
l10n:
  sourceCommit: ac24a64c0ab26d0185c7b768aca130f490ea8487
---

{{QuickLinksWithSubpages("/de/docs/Web/WebDriver/Errors")}}

Der Fehler **unbekannte Methode** ist ein [WebDriver-Fehler](/de/docs/Web/WebDriver/Errors), der auftritt, wenn der Treiber die verwendete [HTTP-Anfragemethode](/de/docs/Web/HTTP/Methods) für den Endpunkt nicht erkennt.

WebDriver bietet eine weitgehend REST-ähnliche API, und nicht alle Endpunkte in dieser API verfügen über die Methoden `GET`, `POST` und `DELETE`. Dieser Fehler tritt auf, wenn Sie versuchen, einen Endpunkt mit einer HTTP-Anfragemethode aufzurufen, die er nicht unterstützt.

## Beispiele

Der Befehl für eine neue Sitzung bietet einen `POST`-Anfrage-Endpunkt, der es Ihnen ermöglicht, neue WebDriver-Sitzungen zu erstellen:

```bash
% curl -d '{}' http://localhost:4444/session
{"sessionId":"d4605710-5a4e-4d64-a52a-778bb0c31e00","value":{"XULappId":"{ec8030f7-c20a-464f-9b0e-13a3a9e97384}","acceptSslCerts":false,"appBuildId":"20160913030425","browserName":"firefox","browserVersion":"51.0a1","command_id":1,"platform":"LINUX","platformName":"linux","platformVersion":"4.9.0-1-amd64","processId":17474,"proxy":{},"raisesAccessibilityExceptions":false,"rotatable":false,"specificationLevel":0,"takesElementScreenshot":true,"takesScreenshot":true,"version":"51.0a1"}}
```

Es implementiert auch die `DELETE`-Methode zum Beenden einer Sitzung:

```bash
% curl -X DELETE http://localhost:4444/session/d4605710-5a4e-4d64-a52a-778bb0c31e00
{}
```

Es bietet jedoch beispielsweise keine `GET`-Methode, und dies wird folglich einen unbekannten Methodenfehler zurückgeben:

```bash
% curl http://localhost:4444/session/650f9df3-740e-314c-958d-307e41752fae
{"value":{"error":"unknown command","message":"GET /session/650f9df3-740e-314c-958d-307e41752fae did not match a known command","stacktrace":""}}%
```

## Siehe auch

- [Liste der WebDriver-Fehler](/de/docs/Web/WebDriver/Errors)
- [Liste der WebDriver-Befehle](/de/docs/Web/WebDriver/Commands)
