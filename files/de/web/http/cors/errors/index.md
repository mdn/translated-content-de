---
title: CORS-Fehler
slug: Web/HTTP/CORS/Errors
l10n:
  sourceCommit: ef46a4ac6bfec3e33c9209244e7cb1a9206165d6
---

{{HTTPSidebar}}

[Cross-Origin Resource Sharing](/de/docs/Web/HTTP/CORS) ([CORS](/de/docs/Glossary/CORS)) ist ein Standard, der es einem Server ermöglicht, die [Same-Origin-Policy](/de/docs/Web/Security/Same-origin_policy) zu lockern. Dies wird verwendet, um einige bereichsübergreifende Anfragen ausdrücklich zuzulassen, während andere abgelehnt werden. Wenn beispielsweise eine Website einen eingebetteten Dienst anbietet, kann es erforderlich sein, bestimmte Beschränkungen zu lockern. Das Einrichten einer solchen CORS-Konfiguration ist nicht unbedingt einfach und kann einige Herausforderungen mit sich bringen. Auf diesen Seiten werden wir einige häufige CORS-Fehlermeldungen und deren Lösung untersuchen.

Wenn die CORS-Konfiguration nicht korrekt eingerichtet ist, zeigt die Browser-Konsole einen Fehler wie `"Cross-Origin Request Blocked: The Same Origin Policy disallows reading the remote resource at $somesite"` an, was darauf hinweist, dass die Anfrage aufgrund der Verletzung der Sicherheitsregeln von CORS blockiert wurde. Dies muss nicht unbedingt ein Einrichtungsfehler sein. Es ist möglich, dass die Anfrage tatsächlich absichtlich von der Webanwendung des Benutzers und dem externen Dienst blockiert wird. Wenn der Endpunkt jedoch verfügbar sein soll, ist etwas Debugging erforderlich, um erfolgreich zu sein.

## Identifizierung des Problems

Um das zugrunde liegende Problem mit der CORS-Konfiguration zu verstehen, müssen Sie herausfinden, welche Anfrage fehlerhaft ist und warum. Diese Schritte können Ihnen dabei helfen:

1. Navigieren Sie zu der betreffenden Website oder Web-App und öffnen Sie die [Entwicklerwerkzeuge](https://firefox-source-docs.mozilla.org/devtools-user/index.html).
2. Versuchen Sie nun, die fehlgeschlagene Transaktion zu reproduzieren, und prüfen Sie die [Konsole](https://firefox-source-docs.mozilla.org/devtools-user/web_console/index.html), ob Sie eine CORS-Verletzungsfehlermeldung sehen. Diese sieht wahrscheinlich wie folgt aus:

![Firefox-Konsole mit CORS-Fehler](cors-error2.png)

Der Text der Fehlermeldung wird ähnlich wie folgt aussehen:

```plain
Cross-Origin Request Blocked: The Same Origin Policy disallows
reading the remote resource at https://some-url-here. (Reason:
additional information here).
```

> [!NOTE]
> Aus Sicherheitsgründen sind Einzelheiten dazu, was bei einer CORS-Anfrage schiefgelaufen ist, im JavaScript-Code _nicht verfügbar_. Der Code weiß nur, dass ein Fehler aufgetreten ist. Der einzige Weg, um festzustellen, was spezifisch schiefgelaufen ist, besteht darin, die Konsole des Browsers für Details zu prüfen.

## CORS-Fehlermeldungen

Die Konsole von Firefox zeigt Meldungen in ihrer Konsole an, wenn Anfragen aufgrund von CORS fehlschlagen. Ein Teil des Fehlermeldungstextes ist eine "reason" Nachricht, die zusätzlichen Einblick in das Problem gibt. Die Grundnachrichten sind unten aufgeführt; klicken Sie auf die Nachricht, um einen Artikel zu öffnen, der den Fehler ausführlicher erklärt und mögliche Lösungen anbietet.

- [Grund: CORS deaktiviert](/de/docs/Web/HTTP/CORS/Errors/CORSDisabled)
- [Grund: CORS-Anfrage war nicht erfolgreich](/de/docs/Web/HTTP/CORS/Errors/CORSDidNotSucceed)
- [Grund: CORS-Header 'Origin' kann nicht hinzugefügt werden](/de/docs/Web/HTTP/CORS/Errors/CORSOriginHeaderNotAdded)
- [Grund: Externe Weiterleitung von CORS-Anfragen nicht erlaubt](/de/docs/Web/HTTP/CORS/Errors/CORSExternalRedirectNotAllowed)
- [Grund: CORS-Anfrage nicht http](/de/docs/Web/HTTP/CORS/Errors/CORSRequestNotHttp)
- [Grund: CORS-Header 'Access-Control-Allow-Origin' fehlt](/de/docs/Web/HTTP/CORS/Errors/CORSMissingAllowOrigin)
- [Grund: CORS-Header 'Access-Control-Allow-Origin' entspricht nicht 'xyz'](/de/docs/Web/HTTP/CORS/Errors/CORSAllowOriginNotMatchingOrigin)
- [Grund: Anmeldeinformation wird nicht unterstützt, wenn der CORS-Header 'Access-Control-Allow-Origin' '\*' ist](/de/docs/Web/HTTP/CORS/Errors/CORSNotSupportingCredentials)
- [Grund: Methode nicht im CORS-Header 'Access-Control-Allow-Methods' gefunden](/de/docs/Web/HTTP/CORS/Errors/CORSMethodNotFound)
- [Grund: Erwartetes 'true' im CORS-Header 'Access-Control-Allow-Credentials'](/de/docs/Web/HTTP/CORS/Errors/CORSMIssingAllowCredentials)
- [Grund: CORS-Preflight-Kanal war nicht erfolgreich](/de/docs/Web/HTTP/CORS/Errors/CORSPreflightDidNotSucceed)
- [Grund: Ungültiges Token 'xyz' im CORS-Header 'Access-Control-Allow-Methods'](/de/docs/Web/HTTP/CORS/Errors/CORSInvalidAllowMethod)
- [Grund: Ungültiges Token 'xyz' im CORS-Header 'Access-Control-Allow-Headers'](/de/docs/Web/HTTP/CORS/Errors/CORSInvalidAllowHeader)
- [Grund: Fehlendes Token 'xyz' im CORS-Header 'Access-Control-Allow-Headers' aus CORS-Preflight-Kanal](/de/docs/Web/HTTP/CORS/Errors/CORSMissingAllowHeaderFromPreflight)
- [Grund: Mehrfacher CORS-Header 'Access-Control-Allow-Origin' nicht erlaubt](/de/docs/Web/HTTP/CORS/Errors/CORSMultipleAllowOriginNotAllowed)

## Siehe auch

- Glossar: [CORS](/de/docs/Glossary/CORS)
- [CORS-Einführung](/de/docs/Web/HTTP/CORS)
- [Server-seitige CORS-Einstellungen](/de/docs/Web/HTTP/CORS)
- [CORS-fähiges Bild](/de/docs/Web/HTML/CORS_enabled_image)
- [CORS-Einstellungsattribute](/de/docs/Web/HTML/Attributes/crossorigin)
