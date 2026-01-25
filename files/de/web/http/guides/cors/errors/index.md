---
title: CORS-Fehler
slug: Web/HTTP/Guides/CORS/Errors
l10n:
  sourceCommit: 06e6e54baef7032c4e81ca93291fde0a0585de8b
---

[Cross-Origin Resource Sharing](/de/docs/Web/HTTP/Guides/CORS) ({{Glossary("CORS", "CORS")}}) ist ein Standard, der es einem Server ermöglicht, die [Same-Origin-Policy](/de/docs/Web/Security/Defenses/Same-origin_policy) zu lockern. Dies wird verwendet, um einige Cross-Origin-Anfragen explizit zuzulassen, während andere abgelehnt werden. Zum Beispiel könnte es notwendig sein, bestimmte Beschränkungen zu lockern, wenn eine Seite einen einbettbaren Dienst bietet. Das Einrichten einer solchen CORS-Konfiguration ist nicht unbedingt einfach und kann einige Herausforderungen mit sich bringen. Auf diesen Seiten werden wir einige häufige CORS-Fehlermeldungen und deren Behebung betrachten.

Wenn die CORS-Konfiguration nicht korrekt eingerichtet ist, wird die Browser-Konsole einen Fehler anzeigen wie zum Beispiel `"Cross-Origin Request Blocked: The Same Origin Policy disallows reading the remote resource at [some site]"`, was darauf hinweist, dass die Anfrage aufgrund eines Verstoßes gegen die CORS-Sicherheitsregeln blockiert wurde. Dies muss jedoch nicht unbedingt ein Einrichtungsfehler sein. Es ist möglich, dass die Anfrage tatsächlich absichtlich durch die Webanwendung des Benutzers und den externen Dienst blockiert wird. Soll jedoch der Endpunkt verfügbar sein, ist eine Fehlersuche notwendig, um erfolgreich zu sein.

## Identifizierung eines CORS-Problems

Um das zugrunde liegende Problem mit der CORS-Konfiguration zu verstehen, müssen Sie herausfinden, welche Anfrage fehlerhaft ist und warum. Diese Schritte können Ihnen dabei helfen:

1. Navigieren Sie zur betreffenden Website oder Web-App und öffnen Sie die [Entwickler-Tools](https://firefox-source-docs.mozilla.org/devtools-user/index.html).
2. Versuchen Sie nun, die fehlerhafte Transaktion zu reproduzieren und überprüfen Sie die [Konsole](https://firefox-source-docs.mozilla.org/devtools-user/web_console/index.html), ob Sie eine CORS-Fehlermeldung sehen. Diese könnte in etwa so aussehen:

![Firefox-Konsole zeigt CORS-Fehler](cors-error2.png)

Der Text der Fehlermeldung wird in etwa folgendermaßen lauten:

```plain
Cross-Origin Request Blocked: The Same Origin Policy disallows
reading the remote resource at https://some-url-here. (Reason:
additional information here).
```

> [!NOTE]
> Aus Sicherheitsgründen sind spezifische Details darüber, was bei einer CORS-Anfrage schiefgelaufen ist, _nicht im JavaScript-Code verfügbar_. Der Code weiß nur, dass ein Fehler aufgetreten ist. Um zu bestimmen, was genau schiefgelaufen ist, müssen Sie die Details in der Konsole des Browsers nachschlagen.

## CORS-Fehlermeldungen

Die Konsole von Firefox zeigt Nachrichten an, wenn Anfragen aufgrund von CORS fehlschlagen. Ein Teil des Fehlertests ist eine "Reason"-Nachricht, die zusätzliche Einsicht bietet, was schiefgelaufen ist. Die Grundnachrichten sind unten aufgelistet; klicken Sie auf die Nachricht, um einen Artikel zu öffnen, der den Fehler im Detail erklärt und mögliche Lösungen bietet.

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
- [Einführung in CORS](/de/docs/Web/HTTP/Guides/CORS)
- [Server-seitige CORS-Einstellungen](/de/docs/Web/HTTP/Guides/CORS)
- [CORS-fähiges Bild](/de/docs/Web/HTML/How_to/CORS_enabled_image)
- [CORS-Einstellungsattribute](/de/docs/Web/HTML/Reference/Attributes/crossorigin)
