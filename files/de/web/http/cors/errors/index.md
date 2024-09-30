---
title: CORS-Fehler
slug: Web/HTTP/CORS/Errors
l10n:
  sourceCommit: ef46a4ac6bfec3e33c9209244e7cb1a9206165d6
---

{{HTTPSidebar}}

[Cross-Origin Resource Sharing](/de/docs/Web/HTTP/CORS) ([CORS](/de/docs/Glossary/CORS)) ist ein Standard, der es einem Server ermöglicht, die [Same-Origin-Policy](/de/docs/Web/Security/Same-origin_policy) zu lockern. Dies wird verwendet, um einige Cross-Origin-Anfragen explizit zuzulassen und andere abzulehnen. Wenn eine Website beispielsweise einen einbettbaren Dienst anbietet, kann es notwendig sein, bestimmte Einschränkungen zu lockern. Die Einrichtung einer solchen CORS-Konfiguration ist nicht unbedingt einfach und kann einige Herausforderungen mit sich bringen. Auf diesen Seiten schauen wir uns einige häufige CORS-Fehlermeldungen an und wie man diese beheben kann.

Wenn die CORS-Konfiguration nicht korrekt eingerichtet ist, zeigt die Browser-Konsole eine Fehlermeldung wie `"Cross-Origin Request Blocked: The Same Origin Policy disallows reading the remote resource at $somesite"` an, die darauf hinweist, dass die Anfrage aufgrund einer Verletzung der CORS-Sicherheitsregeln blockiert wurde. Dies muss jedoch nicht unbedingt ein Einrichtungsfehler sein. Es ist möglich, dass die Anfrage tatsächlich absichtlich durch die Webanwendung des Benutzers und den entfernten externen Dienst nicht zugelassen wird. Sollten die Endpunkte jedoch verfügbar sein, ist eine Fehlersuche erforderlich, um erfolgreich zu sein.

## Identifizierung des Problems

Um das zugrunde liegende Problem mit der CORS-Konfiguration zu verstehen, müssen Sie herausfinden, welche Anfrage fehlerhaft ist und warum. Diese Schritte können Ihnen dabei helfen:

1. Navigieren Sie zur betreffenden Website oder Webanwendung und öffnen Sie die [Entwicklerwerkzeuge](https://firefox-source-docs.mozilla.org/devtools-user/index.html).
2. Versuchen Sie nun, die fehlgeschlagene Transaktion zu reproduzieren, und überprüfen Sie die [Konsole](https://firefox-source-docs.mozilla.org/devtools-user/web_console/index.html), ob eine CORS-Verletzungsfehlermeldung angezeigt wird. Diese wird wahrscheinlich folgendermaßen aussehen:

![Firefox-Konsole zeigt CORS-Fehler](cors-error2.png)

Der Text der Fehlermeldung wird wahrscheinlich dem folgenden ähnlich sein:

```plain
Cross-Origin Request Blocked: The Same Origin Policy disallows
reading the remote resource at https://some-url-here. (Reason:
additional information here).
```

> [!NOTE]
> Aus Sicherheitsgründen sind Details darüber, was bei einer CORS-Anfrage schiefgelaufen ist, _nicht im JavaScript-Code verfügbar_. Der Code weiß nur, dass ein Fehler aufgetreten ist. Der einzige Weg, herauszufinden, was genau schiefgelaufen ist, besteht darin, die Konsole des Browsers auf Details zu überprüfen.

## CORS-Fehlermeldungen

Die Konsole von Firefox zeigt Nachrichten in ihrer Konsole an, wenn Anfragen aufgrund von CORS fehlschlagen. Ein Teil des Fehlermeldungstextes ist eine "Grund"-Nachricht, die zusätzlichen Einblick gibt, was schiefgelaufen ist. Die Grundnachrichten sind unten aufgelistet; klicken Sie auf die Nachricht, um einen Artikel zu öffnen, der den Fehler genauer erklärt und mögliche Lösungen bietet.

- [Grund: CORS deaktiviert](/de/docs/Web/HTTP/CORS/Errors/CORSDisabled)
- [Grund: CORS-Anfrage war nicht erfolgreich](/de/docs/Web/HTTP/CORS/Errors/CORSDidNotSucceed)
- [Grund: CORS-Header 'Origin' kann nicht hinzugefügt werden](/de/docs/Web/HTTP/CORS/Errors/CORSOriginHeaderNotAdded)
- [Grund: Externe Weiterleitung der CORS-Anfrage nicht erlaubt](/de/docs/Web/HTTP/CORS/Errors/CORSExternalRedirectNotAllowed)
- [Grund: CORS-Anfrage nicht http](/de/docs/Web/HTTP/CORS/Errors/CORSRequestNotHttp)
- [Grund: CORS-Header 'Access-Control-Allow-Origin' fehlt](/de/docs/Web/HTTP/CORS/Errors/CORSMissingAllowOrigin)
- [Grund: CORS-Header 'Access-Control-Allow-Origin' stimmt nicht mit 'xyz' überein](/de/docs/Web/HTTP/CORS/Errors/CORSAllowOriginNotMatchingOrigin)
- [Grund: Berechtigung wird nicht unterstützt, wenn der CORS-Header 'Access-Control-Allow-Origin' '\*' ist](/de/docs/Web/HTTP/CORS/Errors/CORSNotSupportingCredentials)
- [Grund: Methode wurde im CORS-Header 'Access-Control-Allow-Methods' nicht gefunden](/de/docs/Web/HTTP/CORS/Errors/CORSMethodNotFound)
- [Grund: erwartetes 'true' im CORS-Header 'Access-Control-Allow-Credentials'](/de/docs/Web/HTTP/CORS/Errors/CORSMIssingAllowCredentials)
- [Grund: CORS-Vorablaufkanal war nicht erfolgreich](/de/docs/Web/HTTP/CORS/Errors/CORSPreflightDidNotSucceed)
- [Grund: ungültiges Token 'xyz' im CORS-Header 'Access-Control-Allow-Methods'](/de/docs/Web/HTTP/CORS/Errors/CORSInvalidAllowMethod)
- [Grund: ungültiges Token 'xyz' im CORS-Header 'Access-Control-Allow-Headers'](/de/docs/Web/HTTP/CORS/Errors/CORSInvalidAllowHeader)
- [Grund: fehlendes Token 'xyz' im CORS-Header 'Access-Control-Allow-Headers' aus dem CORS-Vorablaufkanal](/de/docs/Web/HTTP/CORS/Errors/CORSMissingAllowHeaderFromPreflight)
- [Grund: Mehrere CORS-Header 'Access-Control-Allow-Origin' nicht erlaubt](/de/docs/Web/HTTP/CORS/Errors/CORSMultipleAllowOriginNotAllowed)

## Siehe auch

- Glossar: [CORS](/de/docs/Glossary/CORS)
- [Einführung in CORS](/de/docs/Web/HTTP/CORS)
- [Serverseitige CORS-Einstellungen](/de/docs/Web/HTTP/CORS)
- [CORS-fähiges Bild](/de/docs/Web/HTML/CORS_enabled_image)
- [CORS-Einstellungsattribute](/de/docs/Web/HTML/Attributes/crossorigin)
