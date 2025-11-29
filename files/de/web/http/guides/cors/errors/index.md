---
title: CORS-Fehler
slug: Web/HTTP/Guides/CORS/Errors
l10n:
  sourceCommit: ad5b5e31f81795d692e66dadb7818ba8b220ad15
---

[Cross-Origin Resource Sharing](/de/docs/Web/HTTP/Guides/CORS) ({{Glossary("CORS", "CORS")}}) ist ein Standard, der es einem Server ermöglicht, die [Same-Origin-Policy](/de/docs/Web/Security/Defenses/Same-origin_policy) zu lockern. Dies wird verwendet, um einige Cross-Origin-Anfragen explizit zuzulassen, während andere abgelehnt werden. Wenn eine Website beispielsweise einen einbettbaren Dienst anbietet, kann es erforderlich sein, bestimmte Einschränkungen zu lockern. Eine solche CORS-Konfiguration einzurichten, ist nicht unbedingt einfach und kann einige Herausforderungen mit sich bringen. Auf diesen Seiten werden wir einige häufige CORS-Fehlermeldungen betrachten und wie man sie beheben kann.

Wenn die CORS-Konfiguration nicht korrekt eingerichtet ist, wird die Browser-Konsole einen Fehler wie `"Cross-Origin Request Blocked: The Same Origin Policy disallows reading the remote resource at [some site]"` anzeigen, der darauf hinweist, dass die Anfrage aufgrund eines Verstoßes gegen die CORS-Sicherheitsregeln blockiert wurde. Dies muss jedoch nicht unbedingt ein Einrichtungsfehler sein. Es ist möglich, dass die Anfrage tatsächlich absichtlich durch die Webanwendung des Nutzers und den externen Dienst verweigert wird. Soll der Endpunkt jedoch zugänglich sein, ist eine Fehlerbehebung erforderlich, um erfolgreich zu sein.

## Identifizierung eines CORS-Problems

Um das zugrunde liegende Problem mit der CORS-Konfiguration zu verstehen, müssen Sie herausfinden, welche Anfrage fehlerhaft ist und warum. Diese Schritte können Ihnen dabei helfen:

1. Navigieren Sie zur betreffenden Website oder Web-App und öffnen Sie die [Entwicklerwerkzeuge](https://firefox-source-docs.mozilla.org/devtools-user/index.html).
2. Versuchen Sie nun, die fehlerhafte Transaktion nachzuvollziehen, und überprüfen Sie die [Konsole](https://firefox-source-docs.mozilla.org/devtools-user/web_console/index.html), ob eine CORS-Verletzungs-Fehlermeldung angezeigt wird. Es wird wahrscheinlich so aussehen:

![Firefox-Konsole zeigt CORS-Fehler](cors-error2.png)

Der Text der Fehlermeldung wird in etwa so sein:

```plain
Cross-Origin Request Blocked: The Same Origin Policy disallows
reading the remote resource at https://some-url-here. (Reason:
additional information here).
```

> [!NOTE]
> Aus Sicherheitsgründen sind Einzelheiten darüber, was bei einer CORS-Anfrage schiefgelaufen ist, _für JavaScript-Code nicht verfügbar_. Der Code weiß nur, dass ein Fehler aufgetreten ist. Der einzige Weg, um festzustellen, was genau schiefgelaufen ist, besteht darin, die Konsole des Browsers nach Details zu durchsuchen.

## CORS-Fehlermeldungen

Die Konsole von Firefox zeigt Meldungen an, wenn Anfragen aufgrund von CORS fehlschlagen. Ein Teil des Fehlertests ist eine "Grund"-Nachricht, die zusätzlichen Einblick in den Fehler gibt. Die Grundnachrichten sind unten aufgelistet; klicken Sie auf die Nachricht, um einen Artikel zu öffnen, der den Fehler detaillierter erklärt und mögliche Lösungen anbietet.

- [Grund: CORS deaktiviert](/de/docs/Web/HTTP/Guides/CORS/Errors/CORSDisabled)
- [Grund: CORS-Anfrage war nicht erfolgreich](/de/docs/Web/HTTP/Guides/CORS/Errors/CORSDidNotSucceed)
- [Grund: CORS-Header 'Origin' kann nicht hinzugefügt werden](/de/docs/Web/HTTP/Guides/CORS/Errors/CORSOriginHeaderNotAdded)
- [Grund: CORS-Anfrage, externe Umleitung nicht erlaubt](/de/docs/Web/HTTP/Guides/CORS/Errors/CORSExternalRedirectNotAllowed)
- [Grund: CORS-Anfrage nicht HTTP](/de/docs/Web/HTTP/Guides/CORS/Errors/CORSRequestNotHttp)
- [Grund: CORS-Header 'Access-Control-Allow-Origin' fehlt](/de/docs/Web/HTTP/Guides/CORS/Errors/CORSMissingAllowOrigin)
- [Grund: CORS-Header 'Access-Control-Allow-Origin' stimmt nicht mit 'xyz' überein](/de/docs/Web/HTTP/Guides/CORS/Errors/CORSAllowOriginNotMatchingOrigin)
- [Grund: Anmeldedaten werden nicht unterstützt, wenn der CORS-Header 'Access-Control-Allow-Origin' auf '\*' gesetzt ist](/de/docs/Web/HTTP/Guides/CORS/Errors/CORSNotSupportingCredentials)
- [Grund: Methode nicht im CORS-Header 'Access-Control-Allow-Methods' gefunden](/de/docs/Web/HTTP/Guides/CORS/Errors/CORSMethodNotFound)
- [Grund: erwartet 'true' im CORS-Header 'Access-Control-Allow-Credentials'](/de/docs/Web/HTTP/Guides/CORS/Errors/CORSMIssingAllowCredentials)
- [Grund: CORS-Preflight-Kanal war nicht erfolgreich](/de/docs/Web/HTTP/Guides/CORS/Errors/CORSPreflightDidNotSucceed)
- [Grund: ungültiges Token 'xyz' im CORS-Header 'Access-Control-Allow-Methods'](/de/docs/Web/HTTP/Guides/CORS/Errors/CORSInvalidAllowMethod)
- [Grund: ungültiges Token 'xyz' im CORS-Header 'Access-Control-Allow-Headers'](/de/docs/Web/HTTP/Guides/CORS/Errors/CORSInvalidAllowHeader)
- [Grund: Fehlendes Token 'xyz' im CORS-Header 'Access-Control-Allow-Headers' vom CORS-Preflight-Kanal](/de/docs/Web/HTTP/Guides/CORS/Errors/CORSMissingAllowHeaderFromPreflight)
- [Grund: Mehrere CORS-Header 'Access-Control-Allow-Origin' nicht erlaubt](/de/docs/Web/HTTP/Guides/CORS/Errors/CORSMultipleAllowOriginNotAllowed)

## Siehe auch

- Glossar: {{Glossary("CORS", "CORS")}}
- [Einführung in CORS](/de/docs/Web/HTTP/Guides/CORS)
- [Server-seitige CORS-Einstellungen](/de/docs/Web/HTTP/Guides/CORS)
- [CORS-aktiviertes Bild](/de/docs/Web/HTML/How_to/CORS_enabled_image)
- [CORS-Einstellung von Attributen](/de/docs/Web/HTML/Reference/Attributes/crossorigin)
