---
title: CORS-Fehler
slug: Web/HTTP/Guides/CORS/Errors
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{HTTPSidebar}}

[Cross-Origin Resource Sharing](/de/docs/Web/HTTP/Guides/CORS) ({{Glossary("CORS", "CORS")}}) ist ein Standard, der einem Server erlaubt, die [Same-Origin-Policy](/de/docs/Web/Security/Same-origin_policy) zu lockern. Dies wird verwendet, um bestimmte plattformübergreifende Anfragen explizit zu erlauben, während andere abgelehnt werden. Wenn eine Website beispielsweise einen einbettbaren Service anbietet, kann es notwendig sein, bestimmte Einschränkungen zu lockern. Die Einrichtung einer solchen CORS-Konfiguration ist nicht unbedingt einfach und kann einige Herausforderungen darstellen. Auf diesen Seiten werden wir einige häufige CORS-Fehlermeldungen und deren Behebung betrachten.

Wenn die CORS-Konfiguration nicht korrekt eingerichtet ist, zeigt die Browser-Konsole einen Fehler wie `"Cross-Origin Request Blocked: The Same Origin Policy disallows reading the remote resource at [some site]"` an, der darauf hinweist, dass die Anfrage aufgrund der Verletzung der CORS-Sicherheitsregeln blockiert wurde. Dies muss jedoch nicht unbedingt ein Einrichtungsfehler sein. Es ist möglich, dass die Anfrage tatsächlich absichtlich durch die Webanwendung des Benutzers und den externen Dienst abgelehnt wird. Wenn der Endpunkt jedoch verfügbar sein soll, ist einige Fehlersuche erforderlich, um erfolgreich zu sein.

## Identifizieren eines CORS-Problems

Um das zugrunde liegende Problem mit der CORS-Konfiguration zu verstehen, müssen Sie herausfinden, welche Anfrage fehlerhaft ist und warum. Diese Schritte können Ihnen dabei helfen:

1. Navigieren Sie zur betreffenden Website oder Webanwendung und öffnen Sie die [Entwickler-Tools](https://firefox-source-docs.mozilla.org/devtools-user/index.html).
2. Versuchen Sie nun, die fehlgeschlagene Transaktion zu reproduzieren, und prüfen Sie die [Konsole](https://firefox-source-docs.mozilla.org/devtools-user/web_console/index.html), ob Sie eine CORS-Verletzungs-Fehlermeldung sehen. Es wird wahrscheinlich wie folgt aussehen:

![Firefox-Konsole zeigt CORS-Fehler](cors-error2.png)

Der Fehlertext wird ungefähr wie folgt aussehen:

```plain
Cross-Origin Request Blocked: The Same Origin Policy disallows
reading the remote resource at https://some-url-here. (Reason:
additional information here).
```

> [!NOTE]
> Aus Sicherheitsgründen sind keine spezifischen Informationen darüber verfügbar, was bei einer CORS-Anfrage schiefgelaufen ist, _im JavaScript-Code_. Der Code weiß lediglich, dass ein Fehler aufgetreten ist. Der einzige Weg, um festzustellen, was genau schiefgelaufen ist, besteht darin, die Details in der Konsole des Browsers zu überprüfen.

## CORS-Fehlermeldungen

Die Konsole von Firefox zeigt Nachrichten in ihrer Konsole an, wenn Anfragen aufgrund von CORS fehlschlagen. Teil des Fehlertextes ist eine "Reason"-Nachricht, die zusätzliche Einblicke darüber bietet, was schiefgelaufen ist. Die Grundnachrichten sind unten aufgelistet; klicken Sie auf die Nachricht, um einen Artikel zu öffnen, der den Fehler detaillierter erklärt und mögliche Lösungen bietet.

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
- [CORS-Einführung](/de/docs/Web/HTTP/Guides/CORS)
- [Server-seitige CORS-Einstellungen](/de/docs/Web/HTTP/Guides/CORS)
- [CORS aktiviertes Bild](/de/docs/Web/HTML/How_to/CORS_enabled_image)
- [CORS Einstellungen-Attribute](/de/docs/Web/HTML/Reference/Attributes/crossorigin)
