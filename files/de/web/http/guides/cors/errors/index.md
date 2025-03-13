---
title: CORS-Fehler
slug: Web/HTTP/Guides/CORS/Errors
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{HTTPSidebar}}

[Cross-Origin Resource Sharing](/de/docs/Web/HTTP/Guides/CORS) ({{Glossary("CORS", "CORS")}}) ist ein Standard, der es einem Server erlaubt, die [Same-Origin-Policy](/de/docs/Web/Security/Same-origin_policy) zu lockern. Dies wird verwendet, um bestimmte Cross-Origin-Anfragen explizit zu erlauben, während andere abgelehnt werden. Wenn eine Webseite beispielsweise einen einbettbaren Dienst anbietet, kann es notwendig sein, bestimmte Beschränkungen zu lockern. Eine solche CORS-Konfiguration einzurichten, ist nicht unbedingt einfach und kann einige Herausforderungen mit sich bringen. In diesen Seiten werden wir einige häufige CORS-Fehlermeldungen betrachten und wie man sie behebt.

Wenn die CORS-Konfiguration nicht korrekt eingerichtet ist, zeigt die Browser-Konsole eine Fehlermeldung wie `"Cross-Origin Request Blocked: The Same Origin Policy disallows reading the remote resource at [some site]"` an, die darauf hinweist, dass die Anfrage aufgrund der Verletzung der CORS-Sicherheitsregeln blockiert wurde. Dies muss jedoch nicht unbedingt ein Einrichtungsfehler sein. Es ist möglich, dass die Anfrage tatsächlich absichtlich von der Webanwendung des Nutzers und dem externen Dienst blockiert wird. Sollte der Endpunkt jedoch verfügbar sein, ist eine Fehlerbehebung erforderlich, um erfolg zu haben.

## Identifikation eines CORS-Problems

Um das zugrunde liegende Problem mit der CORS-Konfiguration zu verstehen, müssen Sie herausfinden, welche Anfrage fehlerhaft ist und warum. Diese Schritte können Ihnen dabei helfen:

1. Navigieren Sie zur betreffenden Website oder Webanwendung und öffnen Sie die [Entwicklerwerkzeuge](https://firefox-source-docs.mozilla.org/devtools-user/index.html).
2. Versuchen Sie nun, die fehlerhafte Transaktion zu reproduzieren, und prüfen Sie die [Konsole](https://firefox-source-docs.mozilla.org/devtools-user/web_console/index.html), ob eine CORS-Verletzungsfehlermeldung angezeigt wird. Diese sieht wahrscheinlich so aus:

![Firefox-Konsole zeigt CORS-Fehler](cors-error2.png)

Der Text der Fehlermeldung wird in etwa wie folgt aussehen:

```plain
Cross-Origin Request Blocked: The Same Origin Policy disallows
reading the remote resource at https://some-url-here. (Reason:
additional information here).
```

> [!NOTE]
> Aus Sicherheitsgründen sind spezifische Informationen darüber, was bei einer CORS-Anfrage schiefgelaufen ist, _für JavaScript-Code nicht verfügbar_. Der Code weiß nur, dass ein Fehler aufgetreten ist. Der einzige Weg, um festzustellen, was genau schiefgelaufen ist, besteht darin, die Einzelheiten in der Konsole des Browsers anzusehen.

## CORS-Fehlermeldungen

Die Konsole von Firefox zeigt Nachrichten in ihrer Konsole an, wenn Anfragen aufgrund von CORS fehlschlagen. Ein Teil des Fehltextes ist eine "Reason"-Nachricht, die zusätzlichen Einblick in das Geschehene bietet. Die Grundmeldungen sind unten aufgelistet; klicken Sie die Nachricht an, um einen Artikel zu öffnen, der den Fehler ausführlicher erklärt und mögliche Lösungen anbietet.

- [Reason: CORS disabled](/de/docs/Web/HTTP/Guides/CORS/Errors/CORSDisabled)
- [Reason: CORS request did not succeed](/de/docs/Web/HTTP/Guides/CORS/Errors/CORSDidNotSucceed)
- [Reason: CORS header 'Origin' cannot be added](/de/docs/Web/HTTP/Guides/CORS/Errors/CORSOriginHeaderNotAdded)
- [Reason: CORS request external redirect not allowed](/de/docs/Web/HTTP/Guides/CORS/Errors/CORSExternalRedirectNotAllowed)
- [Reason: CORS request not http](/de/docs/Web/HTTP/Guides/CORS/Errors/CORSRequestNotHttp)
- [Reason: CORS header 'Access-Control-Allow-Origin' missing](/de/docs/Web/HTTP/Guides/CORS/Errors/CORSMissingAllowOrigin)
- [Reason: CORS header 'Access-Control-Allow-Origin' does not match 'xyz'](/de/docs/Web/HTTP/Guides/CORS/Errors/CORSAllowOriginNotMatchingOrigin)
- [Reason: Credential is not supported if the CORS header 'Access-Control-Allow-Origin' is '\*'](/de/docs/Web/HTTP/Guides/CORS/Errors/CORSNotSupportingCredentials)
- [Reason: Did not find method in CORS header 'Access-Control-Allow-Methods'](/de/docs/Web/HTTP/Guides/CORS/Errors/CORSMethodNotFound)
- [Reason: expected 'true' in CORS header 'Access-Control-Allow-Credentials'](/de/docs/Web/HTTP/Guides/CORS/Errors/CORSMIssingAllowCredentials)
- [Reason: CORS preflight channel did not succeed](/de/docs/Web/HTTP/Guides/CORS/Errors/CORSPreflightDidNotSucceed)
- [Reason: invalid token 'xyz' in CORS header 'Access-Control-Allow-Methods'](/de/docs/Web/HTTP/Guides/CORS/Errors/CORSInvalidAllowMethod)
- [Reason: invalid token 'xyz' in CORS header 'Access-Control-Allow-Headers'](/de/docs/Web/HTTP/Guides/CORS/Errors/CORSInvalidAllowHeader)
- [Reason: missing token 'xyz' in CORS header 'Access-Control-Allow-Headers' from CORS preflight channel](/de/docs/Web/HTTP/Guides/CORS/Errors/CORSMissingAllowHeaderFromPreflight)
- [Reason: Multiple CORS header 'Access-Control-Allow-Origin' not allowed](/de/docs/Web/HTTP/Guides/CORS/Errors/CORSMultipleAllowOriginNotAllowed)

## Siehe auch

- Glossar: {{Glossary("CORS", "CORS")}}
- [CORS Einführung](/de/docs/Web/HTTP/Guides/CORS)
- [Server-seitige CORS-Einstellungen](/de/docs/Web/HTTP/Guides/CORS)
- [CORS-aktiviertes Bild](/de/docs/Web/HTML/CORS_enabled_image)
- [CORS-Einstellungsattribute](/de/docs/Web/HTML/Attributes/crossorigin)
