---
title: CORS-Fehler
slug: Web/HTTP/CORS/Errors
l10n:
  sourceCommit: ef46a4ac6bfec3e33c9209244e7cb1a9206165d6
---

{{HTTPSidebar}}

[Cross-Origin Resource Sharing](/de/docs/Web/HTTP/CORS) ({{Glossary("CORS")}}) ist ein Standard, der es einem Server ermöglicht, die [Same-Origin-Policy](/de/docs/Web/Security/Same-origin_policy) zu lockern. Dies wird verwendet, um explizit einige Cross-Origin-Anfragen zuzulassen, während andere abgelehnt werden. Zum Beispiel könnte es notwendig sein, bestimmte Einschränkungen zu lockern, wenn eine Website einen eingebetteten Dienst anbietet. Die Einrichtung einer solchen CORS-Konfiguration ist nicht unbedingt einfach und kann einige Herausforderungen mit sich bringen. Auf diesen Seiten werden wir einige häufige CORS-Fehlermeldungen und deren Behebung untersuchen.

Wenn die CORS-Konfiguration nicht korrekt eingerichtet ist, zeigt die Browser-Konsole einen Fehler wie `"Cross-Origin Request Blocked: The Same Origin Policy disallows reading the remote resource at $somesite"` an, was darauf hinweist, dass die Anfrage aufgrund eines Verstoßes gegen die CORS-Sicherheitsregeln blockiert wurde. Dies muss jedoch nicht unbedingt ein Einrichtungsfehler sein. Es ist möglich, dass die Anfrage tatsächlich absichtlich von der Webanwendung des Nutzers und dem externen Dienst abgelehnt wird. Sollte der Endpunkt jedoch verfügbar sein sollen, ist eine Fehlersuche erforderlich, um Erfolg zu haben.

## Identifizierung des Problems

Um das zugrunde liegende Problem mit der CORS-Konfiguration zu verstehen, müssen Sie herausfinden, welche Anfrage fehlerhaft ist und warum. Diese Schritte können Ihnen dabei helfen:

1. Navigieren Sie zu der betreffenden Website oder Web-App und öffnen Sie die [Entwicklerwerkzeuge](https://firefox-source-docs.mozilla.org/devtools-user/index.html).
2. Versuchen Sie nun, die fehlgeschlagene Transaktion zu reproduzieren, und überprüfen Sie die [Konsole](https://firefox-source-docs.mozilla.org/devtools-user/web_console/index.html), um zu sehen, ob eine CORS-Verletzungsfehlermeldung angezeigt wird. Diese wird wahrscheinlich so aussehen:

![Firefox-Konsole zeigt CORS-Fehler](cors-error2.png)

Der Text der Fehlermeldung wird ungefähr folgendermaßen aussehen:

```plain
Cross-Origin Request Blocked: The Same Origin Policy disallows
reading the remote resource at https://some-url-here. (Reason:
additional information here).
```

> [!NOTE]
> Aus Sicherheitsgründen sind Details darüber, was bei einer CORS-Anfrage schiefgelaufen ist, _nicht für JavaScript-Code verfügbar_. Der gesamte Code weiß nur, dass ein Fehler aufgetreten ist. Der einzige Weg, um festzustellen, was genau schiefgelaufen ist, besteht darin, die Konsole des Browsers nach Details zu durchsuchen.

## CORS-Fehlermeldungen

Die Konsole von Firefox zeigt Nachrichten in ihrer Konsole an, wenn Anfragen aufgrund von CORS fehlschlagen. Ein Teil des Fehlers ist eine "Reason"-Nachricht, die zusätzlichen Einblick gibt, was schiefgelaufen ist. Die Reason-Nachrichten sind unten aufgelistet; klicken Sie auf die Nachricht, um einen Artikel zu öffnen, der den Fehler detaillierter erklärt und mögliche Lösungen bietet.

- [Reason: CORS disabled](/de/docs/Web/HTTP/CORS/Errors/CORSDisabled)
- [Reason: CORS request did not succeed](/de/docs/Web/HTTP/CORS/Errors/CORSDidNotSucceed)
- [Reason: CORS header 'Origin' cannot be added](/de/docs/Web/HTTP/CORS/Errors/CORSOriginHeaderNotAdded)
- [Reason: CORS request external redirect not allowed](/de/docs/Web/HTTP/CORS/Errors/CORSExternalRedirectNotAllowed)
- [Reason: CORS request not http](/de/docs/Web/HTTP/CORS/Errors/CORSRequestNotHttp)
- [Reason: CORS header 'Access-Control-Allow-Origin' missing](/de/docs/Web/HTTP/CORS/Errors/CORSMissingAllowOrigin)
- [Reason: CORS header 'Access-Control-Allow-Origin' does not match 'xyz'](/de/docs/Web/HTTP/CORS/Errors/CORSAllowOriginNotMatchingOrigin)
- [Reason: Credential is not supported if the CORS header 'Access-Control-Allow-Origin' is '\*'](/de/docs/Web/HTTP/CORS/Errors/CORSNotSupportingCredentials)
- [Reason: Did not find method in CORS header 'Access-Control-Allow-Methods'](/de/docs/Web/HTTP/CORS/Errors/CORSMethodNotFound)
- [Reason: expected 'true' in CORS header 'Access-Control-Allow-Credentials'](/de/docs/Web/HTTP/CORS/Errors/CORSMIssingAllowCredentials)
- [Reason: CORS preflight channel did not succeed](/de/docs/Web/HTTP/CORS/Errors/CORSPreflightDidNotSucceed)
- [Reason: invalid token 'xyz' in CORS header 'Access-Control-Allow-Methods'](/de/docs/Web/HTTP/CORS/Errors/CORSInvalidAllowMethod)
- [Reason: invalid token 'xyz' in CORS header 'Access-Control-Allow-Headers'](/de/docs/Web/HTTP/CORS/Errors/CORSInvalidAllowHeader)
- [Reason: missing token 'xyz' in CORS header 'Access-Control-Allow-Headers' from CORS preflight channel](/de/docs/Web/HTTP/CORS/Errors/CORSMissingAllowHeaderFromPreflight)
- [Reason: Multiple CORS header 'Access-Control-Allow-Origin' not allowed](/de/docs/Web/HTTP/CORS/Errors/CORSMultipleAllowOriginNotAllowed)

## Siehe auch

- Glossar: {{Glossary("CORS")}}
- [CORS-Einführung](/de/docs/Web/HTTP/CORS)
- [Serverseitige CORS-Einstellungen](/de/docs/Web/HTTP/CORS)
- [CORS-fähiges Bild](/de/docs/Web/HTML/CORS_enabled_image)
- [CORS-Einstellungen-Attribute](/de/docs/Web/HTML/Attributes/crossorigin)
