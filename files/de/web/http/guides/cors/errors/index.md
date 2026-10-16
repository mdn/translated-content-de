---
title: CORS-Fehler
slug: Web/HTTP/Guides/CORS/Errors
l10n:
  sourceCommit: a8b5a77bb154e0c3a124fb4af441d11e4259836e
---

[Cross-Origin Resource Sharing](/de/docs/Web/HTTP/Guides/CORS) ({{Glossary("CORS", "CORS")}}) ist ein Standard, mit dem ein Server die [Same-Origin-Policy](/de/docs/Web/Security/Defenses/Same-origin_policy) lockern kann. Dadurch lassen sich bestimmte Cross-Origin-Anfragen ausdrücklich zulassen und andere ablehnen. Wenn eine Website beispielsweise einen einbettbaren Dienst anbietet, kann es notwendig sein, bestimmte Einschränkungen zu lockern. Eine solche CORS-Konfiguration einzurichten, ist nicht unbedingt einfach und kann einige Herausforderungen mit sich bringen. Auf diesen Seiten betrachten wir einige häufige CORS-Fehlermeldungen und wie Sie die zugrunde liegenden Probleme beheben können.

Wenn die CORS-Konfiguration nicht korrekt eingerichtet ist, zeigt die Browserkonsole einen Fehler wie `"Cross-Origin Request Blocked: The Same Origin Policy disallows reading the remote resource at [some site]"` an. Er weist darauf hin, dass die Anfrage wegen eines Verstoßes gegen die CORS-Sicherheitsregeln blockiert wurde. Das muss allerdings nicht auf einen Konfigurationsfehler hindeuten. Möglicherweise wird die Anfrage von der Webanwendung des Benutzers oder dem externen Dienst absichtlich abgelehnt. Wenn der Endpunkt jedoch verfügbar sein soll, müssen Sie die Ursache untersuchen.

## Ein CORS-Problem erkennen

Um das zugrunde liegende Problem mit der CORS-Konfiguration zu verstehen, müssen Sie herausfinden, welche Anfrage betroffen ist und warum. Die folgenden Schritte können Ihnen dabei helfen:

1. Rufen Sie die betreffende Website oder Webanwendung auf und öffnen Sie die [Entwicklerwerkzeuge](https://firefox-source-docs.mozilla.org/devtools-user/index.html).
2. Versuchen Sie, den fehlgeschlagenen Vorgang zu reproduzieren, und prüfen Sie, ob in der [Konsole](https://firefox-source-docs.mozilla.org/devtools-user/web_console/index.html) eine CORS-Fehlermeldung angezeigt wird. Sie sieht wahrscheinlich etwa so aus:

![Firefox-Konsole mit einem CORS-Fehler](cors-error2.png)

Der Text der Fehlermeldung ähnelt dem folgenden:

```plain
Cross-Origin Request Blocked: The Same Origin Policy disallows
reading the remote resource at https://some-url-here. (Reason:
additional information here).
```

> [!NOTE]
> Aus Sicherheitsgründen sind Einzelheiten darüber, was bei einer CORS-Anfrage schiefgelaufen ist, _für JavaScript-Code nicht verfügbar_. Der Code weiß lediglich, dass ein Fehler aufgetreten ist. Um die genaue Ursache festzustellen, müssen Sie die Details in der Browserkonsole nachlesen.

## Möglichkeiten auf der Client-Seite

Die meisten CORS-Fehler lassen sich nur auf dem Server beheben, da der Server steuert, ob Cross-Origin-Zugriff erlaubt ist. Es gibt jedoch einige Maßnahmen, die Sie auf der Client-Seite ergreifen können:

### Eine Preflight-Anfrage vermeiden

Browser senden unter bestimmten Bedingungen vor der eigentlichen Anfrage eine [Preflight-Anfrage](/de/docs/Web/HTTP/Guides/CORS#preflighted_requests), etwa bei benutzerdefinierten Headern, anderen Methoden als `GET`/`HEAD`/`POST` oder nicht einfachen Inhaltstypen. Wenn der Server Preflight-Anfragen nicht verarbeitet, können Sie Ihre Anfrage so umgestalten, dass sie als [einfache Anfrage](/de/docs/Web/HTTP/Guides/CORS#simple_requests) gilt:

- Verwenden Sie nur die Methoden `GET`, `HEAD` oder `POST`.
- Setzen Sie nur {{Glossary("CORS-safelisted_request_header", "CORS-safelisted request headers")}} (beispielsweise {{HTTPHeader("Accept")}}, {{HTTPHeader("Content-Language")}} oder {{HTTPHeader("Content-Type")}}).
- Verwenden Sie für {{HTTPHeader("Content-Type")}} nur `application/x-www-form-urlencoded`, `multipart/form-data` oder `text/plain`.

Bei einfachen Anfragen entfällt die Preflight-Anfrage vollständig. So vermeiden Sie CORS-Fehler, die mit der Verarbeitung von Preflight-Anfragen zusammenhängen.

### Den Modus `no-cors` für opake Antworten verwenden

Wenn Sie weder den Antwortinhalt noch die Header lesen müssen – beispielsweise beim Senden von Analyse-Beacons oder beim Laden von Ressourcen in einen Cache über einen Service Worker –, können Sie [`mode`](/de/docs/Web/API/Request/mode) in einem [`fetch()`](/de/docs/Web/API/Window/fetch)-Aufruf auf `"no-cors"` setzen:

```js
fetch("https://api.example.com/log", {
  method: "POST",
  mode: "no-cors",
  body: data,
});
```

Die Antwort ist dann [opak](/de/docs/Web/API/Response/type): Ihr Status ist `0`, ihre Header sind leer und ihr Inhalt kann von JavaScript nicht gelesen werden. Das ist beabsichtigt: `no-cors` deaktiviert die CORS-Prüfung, dafür verlieren Sie jeglichen Zugriff auf den Antwortinhalt.

### Einen Proxyserver verwenden

Wenn Sie den Remote-Server nicht kontrollieren und dieser keine CORS-Header setzt, können Sie Anfragen über einen Server leiten, den Sie kontrollieren. Ihr Server ruft die Ressource für Sie ab und gibt sie mit geeigneten CORS-Headern zurück. Dieser Ansatz erhöht die Latenz und schafft eine Abhängigkeit von Ihrem Proxy, funktioniert aber, wenn andere Möglichkeiten nicht zur Verfügung stehen.

## CORS-Fehlermeldungen

Wenn Anfragen aufgrund von CORS fehlschlagen, zeigt Firefox Meldungen in seiner Konsole an. Ein Teil des Fehlertexts ist eine Begründung, die näher erläutert, was schiefgelaufen ist. Die Begründungen sind unten aufgeführt. Klicken Sie auf eine Meldung, um einen Artikel mit einer ausführlicheren Erklärung des Fehlers und möglichen Lösungen zu öffnen.

- [Grund: CORS deaktiviert](/de/docs/Web/HTTP/Guides/CORS/Errors/CORSDisabled)
- [Grund: CORS-Anfrage fehlgeschlagen](/de/docs/Web/HTTP/Guides/CORS/Errors/CORSDidNotSucceed)
- [Grund: CORS-Header 'Origin' kann nicht hinzugefügt werden](/de/docs/Web/HTTP/Guides/CORS/Errors/CORSOriginHeaderNotAdded)
- [Grund: Externe Weiterleitung einer CORS-Anfrage nicht erlaubt](/de/docs/Web/HTTP/Guides/CORS/Errors/CORSExternalRedirectNotAllowed)
- [Grund: CORS-Anfrage verwendet nicht HTTP](/de/docs/Web/HTTP/Guides/CORS/Errors/CORSRequestNotHttp)
- [Grund: CORS-Header 'Access-Control-Allow-Origin' fehlt](/de/docs/Web/HTTP/Guides/CORS/Errors/CORSMissingAllowOrigin)
- [Grund: CORS-Header 'Access-Control-Allow-Origin' stimmt nicht mit 'xyz' überein](/de/docs/Web/HTTP/Guides/CORS/Errors/CORSAllowOriginNotMatchingOrigin)
- [Grund: Anmeldedaten werden nicht unterstützt, wenn der CORS-Header 'Access-Control-Allow-Origin' den Wert '\*' hat](/de/docs/Web/HTTP/Guides/CORS/Errors/CORSNotSupportingCredentials)
- [Grund: Methode im CORS-Header 'Access-Control-Allow-Methods' nicht gefunden](/de/docs/Web/HTTP/Guides/CORS/Errors/CORSMethodNotFound)
- [Grund: 'true' im CORS-Header 'Access-Control-Allow-Credentials' erwartet](/de/docs/Web/HTTP/Guides/CORS/Errors/CORSMissingAllowCredentials)
- [Grund: CORS-Preflight-Anfrage fehlgeschlagen](/de/docs/Web/HTTP/Guides/CORS/Errors/CORSPreflightDidNotSucceed)
- [Grund: Ungültiges Token 'xyz' im CORS-Header 'Access-Control-Allow-Methods'](/de/docs/Web/HTTP/Guides/CORS/Errors/CORSInvalidAllowMethod)
- [Grund: Ungültiges Token 'xyz' im CORS-Header 'Access-Control-Allow-Headers'](/de/docs/Web/HTTP/Guides/CORS/Errors/CORSInvalidAllowHeader)
- [Grund: Token 'xyz' aus der CORS-Preflight-Anfrage fehlt im CORS-Header 'Access-Control-Allow-Headers'](/de/docs/Web/HTTP/Guides/CORS/Errors/CORSMissingAllowHeaderFromPreflight)
- [Grund: Mehrere CORS-Header 'Access-Control-Allow-Origin' sind nicht erlaubt](/de/docs/Web/HTTP/Guides/CORS/Errors/CORSMultipleAllowOriginNotAllowed)

Die meisten CORS-Fehler lassen sich nur auf dem Server beheben, da der Server steuert, ob Cross-Origin-Zugriff erlaubt ist. Es gibt jedoch einige Maßnahmen, die Sie auf der Client-Seite ergreifen können:

### Eine Preflight-Anfrage vermeiden

Browser senden unter bestimmten Bedingungen vor der eigentlichen Anfrage eine [Preflight-Anfrage](/de/docs/Web/HTTP/Guides/CORS#preflighted_requests), etwa bei benutzerdefinierten Headern, anderen Methoden als `GET`/`HEAD`/`POST` oder nicht einfachen Inhaltstypen. Wenn der Server Preflight-Anfragen nicht verarbeitet, können Sie Ihre Anfrage so umgestalten, dass sie als [einfache Anfrage](/de/docs/Web/HTTP/Guides/CORS#simple_requests) gilt:

- Verwenden Sie nur die Methoden `GET`, `HEAD` oder `POST`.
- Setzen Sie nur {{Glossary("CORS-safelisted_request_header", "CORS-safelisted request headers")}} (beispielsweise {{HTTPHeader("Accept")}}, {{HTTPHeader("Content-Language")}} oder {{HTTPHeader("Content-Type")}}).
- Verwenden Sie für {{HTTPHeader("Content-Type")}} nur `application/x-www-form-urlencoded`, `multipart/form-data` oder `text/plain`.

Bei einfachen Anfragen entfällt die Preflight-Anfrage vollständig. So vermeiden Sie CORS-Fehler, die mit der Verarbeitung von Preflight-Anfragen zusammenhängen.

### Den Modus `no-cors` für opake Antworten verwenden

Wenn Sie weder den Antwortinhalt noch die Header lesen müssen – beispielsweise beim Senden von Analyse-Beacons oder beim Laden von Ressourcen in einen Cache über einen Service Worker –, können Sie [`mode`](/de/docs/Web/API/Request/mode) in einem [`fetch()`](/de/docs/Web/API/Window/fetch)-Aufruf auf `"no-cors"` setzen:

```js
fetch("https://api.example.com/log", {
  method: "POST",
  mode: "no-cors",
  body: data,
});
```

Die Antwort ist dann [opak](/de/docs/Web/API/Response/type): Ihr Status ist `0`, ihre Header sind leer und ihr Inhalt kann von JavaScript nicht gelesen werden. Das ist beabsichtigt: `no-cors` deaktiviert die CORS-Prüfung, dafür verlieren Sie jeglichen Zugriff auf den Antwortinhalt.

### Einen Proxyserver verwenden

Wenn Sie den Remote-Server nicht kontrollieren und dieser keine CORS-Header setzt, können Sie Anfragen über einen Server leiten, den Sie kontrollieren. Ihr Server ruft die Ressource für Sie ab und gibt sie mit geeigneten CORS-Headern zurück. Dieser Ansatz erhöht die Latenz und schafft eine Abhängigkeit von Ihrem Proxy, funktioniert aber, wenn andere Möglichkeiten nicht zur Verfügung stehen.

## Siehe auch

- Glossar: {{Glossary("CORS", "CORS")}}
- [Einführung in CORS](/de/docs/Web/HTTP/Guides/CORS)
- [Serverseitige CORS-Einstellungen](/de/docs/Web/HTTP/Guides/CORS)
- [Bild mit aktiviertem CORS](/de/docs/Web/HTML/How_to/CORS_enabled_image)
- [Attribute für CORS-Einstellungen](/de/docs/Web/HTML/Reference/Attributes/crossorigin)
