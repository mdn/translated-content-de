---
title: CORS-Fehler
slug: Web/HTTP/Guides/CORS/Errors
l10n:
  sourceCommit: ca26363fcc6fc861103d40ac0205e5c5b79eb2fa
---

[Cross-Origin Resource Sharing](/de/docs/Web/HTTP/Guides/CORS) ({{Glossary("CORS", "CORS")}}) ist ein Standard, der es einem Server ermöglicht, die [Same-Origin-Policy](/de/docs/Web/Security/Defenses/Same-origin_policy) zu lockern. Dies wird verwendet, um einige Cross-Origin-Anfragen explizit zuzulassen, während andere abgelehnt werden. Wenn eine Website beispielsweise einen eingebetteten Dienst anbietet, kann es notwendig sein, bestimmte Beschränkungen zu lockern. Die Einrichtung einer solchen CORS-Konfiguration ist nicht unbedingt einfach und kann einige Herausforderungen mit sich bringen. Auf diesen Seiten werden wir einige häufige CORS-Fehlermeldungen und deren Lösung untersuchen.

Wenn die CORS-Konfiguration nicht korrekt eingerichtet ist, wird die Browser-Konsole einen Fehler wie `"Cross-Origin Request Blocked: The Same Origin Policy disallows reading the remote resource at [some site]"` anzeigen, der darauf hinweist, dass die Anfrage aufgrund eines Verstoßes gegen die CORS-Sicherheitsregeln blockiert wurde. Dies muss jedoch nicht unbedingt ein Einrichtungsfehler sein. Es ist möglich, dass die Anfrage tatsächlich absichtlich von der Webanwendung des Benutzers und dem externen Remote-Dienst nicht erlaubt wird. Sollte der Endpunkt jedoch verfügbar sein, ist etwas Debugging erforderlich, um erfolgreich zu sein.

## Erkennen eines CORS-Problems

Um das zugrunde liegende Problem mit der CORS-Konfiguration zu verstehen, müssen Sie herausfinden, welche Anfrage fehlerhaft ist und warum. Diese Schritte können Ihnen dabei helfen:

1. Navigieren Sie zur betreffenden Website oder Web-App und öffnen Sie die [Entwicklerwerkzeuge](https://firefox-source-docs.mozilla.org/devtools-user/index.html).
2. Versuchen Sie nun, die fehlgeschlagene Transaktion zu reproduzieren und prüfen Sie die [Konsole](https://firefox-source-docs.mozilla.org/devtools-user/web_console/index.html), ob eine CORS-Verletzungsfehlermeldung angezeigt wird. Sie wird wahrscheinlich so aussehen:

![Firefox-Konsole, die CORS-Fehler zeigt](cors-error2.png)

Der Text der Fehlermeldung wird in etwa so aussehen:

```plain
Cross-Origin Request Blocked: The Same Origin Policy disallows
reading the remote resource at https://some-url-here. (Reason:
additional information here).
```

> [!NOTE]
> Aus Sicherheitsgründen sind spezifische Informationen darüber, was mit einer CORS-Anfrage schiefgelaufen ist, _für JavaScript-Code nicht verfügbar_. Der Code weiß nur, dass ein Fehler aufgetreten ist. Der einzige Weg, um festzustellen, was genau schiefgelaufen ist, besteht darin, die Konsole des Browsers auf Details zu überprüfen.

## CORS-Fehlermeldungen

Die Konsole von Firefox zeigt Nachrichten in ihrer Konsole an, wenn Anfragen aufgrund von CORS fehlschlagen. Ein Teil des Fehlertxtes ist eine "Grund"-Nachricht, die zusätzlichen Einblick bietet, was schiefgelaufen ist. Die Grundnachrichten sind unten aufgeführt; klicken Sie auf die Nachricht, um einen Artikel zu öffnen, der den Fehler im Detail erklärt und mögliche Lösungen bietet.

- [Grund: CORS deaktiviert](/de/docs/Web/HTTP/Guides/CORS/Errors/CORSDisabled)
- [Grund: CORS-Anfrage war nicht erfolgreich](/de/docs/Web/HTTP/Guides/CORS/Errors/CORSDidNotSucceed)
- [Grund: CORS-Header 'Origin' kann nicht hinzugefügt werden](/de/docs/Web/HTTP/Guides/CORS/Errors/CORSOriginHeaderNotAdded)
- [Grund: Externe Umleitung bei CORS-Anfrage nicht erlaubt](/de/docs/Web/HTTP/Guides/CORS/Errors/CORSExternalRedirectNotAllowed)
- [Grund: CORS-Anfrage nicht http](/de/docs/Web/HTTP/Guides/CORS/Errors/CORSRequestNotHttp)
- [Grund: CORS-Header 'Access-Control-Allow-Origin' fehlt](/de/docs/Web/HTTP/Guides/CORS/Errors/CORSMissingAllowOrigin)
- [Grund: CORS-Header 'Access-Control-Allow-Origin' entspricht nicht 'xyz'](/de/docs/Web/HTTP/Guides/CORS/Errors/CORSAllowOriginNotMatchingOrigin)
- [Grund: Anmeldeinformationen werden nicht unterstützt, wenn der CORS-Header 'Access-Control-Allow-Origin' '\*' ist](/de/docs/Web/HTTP/Guides/CORS/Errors/CORSNotSupportingCredentials)
- [Grund: Methode im CORS-Header 'Access-Control-Allow-Methods' nicht gefunden](/de/docs/Web/HTTP/Guides/CORS/Errors/CORSMethodNotFound)
- [Grund: 'true' im CORS-Header 'Access-Control-Allow-Credentials' erwartet](/de/docs/Web/HTTP/Guides/CORS/Errors/CORSMIssingAllowCredentials)
- [Grund: CORS-Preflight-Kanal war nicht erfolgreich](/de/docs/Web/HTTP/Guides/CORS/Errors/CORSPreflightDidNotSucceed)
- [Grund: ungültiges Token 'xyz' im CORS-Header 'Access-Control-Allow-Methods'](/de/docs/Web/HTTP/Guides/CORS/Errors/CORSInvalidAllowMethod)
- [Grund: ungültiges Token 'xyz' im CORS-Header 'Access-Control-Allow-Headers'](/de/docs/Web/HTTP/Guides/CORS/Errors/CORSInvalidAllowHeader)
- [Grund: fehlendes Token 'xyz' im CORS-Header 'Access-Control-Allow-Headers' vom CORS-Preflight-Kanal](/de/docs/Web/HTTP/Guides/CORS/Errors/CORSMissingAllowHeaderFromPreflight)
- [Grund: Mehrfacher CORS-Header 'Access-Control-Allow-Origin' nicht erlaubt](/de/docs/Web/HTTP/Guides/CORS/Errors/CORSMultipleAllowOriginNotAllowed)

## Siehe auch

- Glossar: {{Glossary("CORS", "CORS")}}
- [CORS-Einführung](/de/docs/Web/HTTP/Guides/CORS)
- [Serverseitige CORS-Einstellungen](/de/docs/Web/HTTP/Guides/CORS)
- [CORS-aktiviertes Bild](/de/docs/Web/HTML/How_to/CORS_enabled_image)
- [CORS-Einstellungen Attribute](/de/docs/Web/HTML/Reference/Attributes/crossorigin)
