---
title: CORS-Fehler
slug: Web/HTTP/Guides/CORS/Errors
l10n:
  sourceCommit: 92396cf8979e107c3ac42c2b9fc382013ea1c234
---

[Cross-Origin Resource Sharing](/de/docs/Web/HTTP/Guides/CORS) ({{Glossary("CORS", "CORS")}}) ist ein Standard, der es einem Server erlaubt, die [Same-Origin-Policy](/de/docs/Web/Security/Defenses/Same-origin_policy) zu lockern. Dies wird verwendet, um einige Cross-Origin-Anfragen explizit zuzulassen, während andere abgelehnt werden. Wenn eine Website beispielsweise einen einbettbaren Dienst anbietet, kann es notwendig sein, bestimmte Einschränkungen zu lockern. Das Einrichten einer solchen CORS-Konfiguration ist nicht unbedingt einfach und kann einige Herausforderungen mit sich bringen. Auf diesen Seiten werden wir einige häufige CORS-Fehlermeldungen und deren Lösung betrachten.

Wenn die CORS-Konfiguration nicht korrekt eingerichtet ist, zeigt die Browserkonsole einen Fehler wie `"Cross-Origin Request Blocked: The Same Origin Policy disallows reading the remote resource at [some site]"` an, der angibt, dass die Anfrage aufgrund einer Verletzung der CORS-Sicherheitsregeln blockiert wurde. Dies muss nicht unbedingt ein Einrichtungsfehler sein. Es ist möglich, dass die Anfrage tatsächlich von der Webanwendung des Benutzers und dem externen Dienstleister absichtlich nicht zugelassen wird. Wenn der Endpunkt jedoch zugänglich sein soll, ist eine Fehlerbehebung erforderlich, um erfolgreich zu sein.

## Identifizieren eines CORS-Problems

Um das zugrunde liegende Problem mit der CORS-Konfiguration zu verstehen, müssen Sie herausfinden, welche Anfrage fehlerhaft ist und warum. Diese Schritte können Ihnen dabei helfen:

1. Navigieren Sie zu der betreffenden Website oder Web-App und öffnen Sie die [Developer Tools](https://firefox-source-docs.mozilla.org/devtools-user/index.html).
2. Versuchen Sie nun, die fehlgeschlagene Transaktion zu reproduzieren und überprüfen Sie die [Konsole](https://firefox-source-docs.mozilla.org/devtools-user/web_console/index.html), ob Sie eine CORS-Verletzungs-Fehlermeldung sehen. Es wird wahrscheinlich so aussehen:

![Firefox-Konsole zeigt CORS-Fehler](cors-error2.png)

Der Text der Fehlermeldung wird in etwa wie folgt aussehen:

```plain
Cross-Origin Request Blocked: The Same Origin Policy disallows
reading the remote resource at https://some-url-here. (Reason:
additional information here).
```

> [!NOTE]
> Aus Sicherheitsgründen sind Details darüber, was bei einer CORS-Anfrage schiefgelaufen ist, für JavaScript-Code _nicht verfügbar_. Der Code weiß nur, dass ein Fehler aufgetreten ist. Der einzige Weg, um herauszufinden, was genau schiefgelaufen ist, besteht darin, sich die Details in der Browserkonsole anzusehen.

## Überlegungen auf der Client-Seite

Die meisten CORS-Fehler können nur auf dem Server behoben werden, da der Server steuert, ob Cross-Origin-Zugriff erlaubt ist. Es gibt jedoch einige Dinge, die Sie auf der Client-Seite tun können:

### Vermeiden Sie das Auslösen eines Preflight-Checks

Browser senden eine [Preflight-Anfrage](/de/docs/Web/HTTP/Guides/CORS#preflighted_requests), bevor die tatsächliche Anfrage ausgelöst wird, wenn bestimmte Bedingungen erfüllt sind (benutzerdefinierte Header, Methoden außer `GET`/`HEAD`/`POST` oder nicht einfache Content-Typen). Wenn der Server keine Preflight-Anfragen bearbeitet, können Sie Ihre Anfrage so umstrukturieren, dass sie als [einfache Anfrage](/de/docs/Web/HTTP/Guides/CORS#simple_requests) qualifiziert:

- Verwenden Sie nur die Methoden `GET`, `HEAD` oder `POST`.
- Setzen Sie nur {{Glossary("CORS-safelisted_request_header", "CORS-safelisted request headers")}} (wie z.B. {{HTTPHeader("Accept")}}, {{HTTPHeader("Content-Language")}} oder {{HTTPHeader("Content-Type")}}).
- Verwenden Sie nur `application/x-www-form-urlencoded`, `multipart/form-data` oder `text/plain` für {{HTTPHeader("Content-Type")}}.

Einfache Anfragen umgehen den Preflight-Check vollständig, was eine Klasse von CORS-Fehlern im Zusammenhang mit der Preflight-Bearbeitung vermeidet.

### Verwenden Sie den `no-cors`-Modus für undurchsichtige Antworten

Wenn Sie den Antwortinhalt oder die Header nicht lesen müssen - zum Beispiel beim Senden von Analytics-Beacons oder beim Laden von Ressourcen in einen Cache über einen Service Worker - können Sie den [`mode`](/de/docs/Web/API/Request/mode) auf `"no-cors"` in einem [`fetch()`](/de/docs/Web/API/Window/fetch)-Aufruf setzen:

```js
fetch("https://api.example.com/log", {
  method: "POST",
  mode: "no-cors",
  body: data,
});
```

Die Antwort wird [undurchsichtig](/de/docs/Web/API/Response/type) sein: Ihr Status ist `0`, ihre Header sind leer und ihr Body ist für JavaScript nicht lesbar. Dies ist absichtlich so - `no-cors` deaktiviert die CORS-Prüfung, aber im Gegenzug verlieren Sie jeglichen Zugriff auf den Antwortinhalt.

### Verwenden Sie einen Proxy-Server

Wenn Sie den entfernten Server nicht kontrollieren und dieser keine CORS-Header setzt, können Sie Anfragen über einen Server leiten, den Sie kontrollieren. Ihr Server ruft die Ressource in Ihrem Namen ab und gibt sie mit den entsprechenden CORS-Headern zurück. Dieser Ansatz erhöht die Latenz und führt zu einer Abhängigkeit von Ihrem Proxy, funktioniert aber, wenn andere Optionen nicht verfügbar sind.

## CORS-Fehlermeldungen

Die Konsole von Firefox zeigt Nachrichten in ihrer Konsole an, wenn Anfragen aufgrund von CORS fehlschlagen. Ein Teil des Fehlertextes ist eine "Grund"-Nachricht, die zusätzlichen Einblick in das Problem gibt. Die Grundnachrichten sind unten aufgeführt; klicken Sie auf die Nachricht, um einen Artikel zu öffnen, der den Fehler genauer erklärt und mögliche Lösungen bietet.

- [Grund: CORS deaktiviert](/de/docs/Web/HTTP/Guides/CORS/Errors/CORSDisabled)
- [Grund: CORS-Anfrage war nicht erfolgreich](/de/docs/Web/HTTP/Guides/CORS/Errors/CORSDidNotSucceed)
- [Grund: CORS-Header 'Origin' kann nicht hinzugefügt werden](/de/docs/Web/HTTP/Guides/CORS/Errors/CORSOriginHeaderNotAdded)
- [Grund: Externe Weiterleitung durch CORS-Anfrage nicht erlaubt](/de/docs/Web/HTTP/Guides/CORS/Errors/CORSExternalRedirectNotAllowed)
- [Grund: CORS-Anfrage nicht HTTP](/de/docs/Web/HTTP/Guides/CORS/Errors/CORSRequestNotHttp)
- [Grund: CORS-Header 'Access-Control-Allow-Origin' fehlt](/de/docs/Web/HTTP/Guides/CORS/Errors/CORSMissingAllowOrigin)
- [Grund: CORS-Header 'Access-Control-Allow-Origin' stimmt nicht überein mit 'xyz'](/de/docs/Web/HTTP/Guides/CORS/Errors/CORSAllowOriginNotMatchingOrigin)
- [Grund: Anmeldeinformationen werden nicht unterstützt, wenn der CORS-Header 'Access-Control-Allow-Origin' '\*' ist](/de/docs/Web/HTTP/Guides/CORS/Errors/CORSNotSupportingCredentials)
- [Grund: Methode im CORS-Header 'Access-Control-Allow-Methods' nicht gefunden](/de/docs/Web/HTTP/Guides/CORS/Errors/CORSMethodNotFound)
- [Grund: erwartetes 'true' im CORS-Header 'Access-Control-Allow-Credentials'](/de/docs/Web/HTTP/Guides/CORS/Errors/CORSMIssingAllowCredentials)
- [Grund: CORS-Preflight-Kanal war nicht erfolgreich](/de/docs/Web/HTTP/Guides/CORS/Errors/CORSPreflightDidNotSucceed)
- [Grund: Ungültiges Token 'xyz' im CORS-Header 'Access-Control-Allow-Methods'](/de/docs/Web/HTTP/Guides/CORS/Errors/CORSInvalidAllowMethod)
- [Grund: Ungültiges Token 'xyz' im CORS-Header 'Access-Control-Allow-Headers'](/de/docs/Web/HTTP/Guides/CORS/Errors/CORSInvalidAllowHeader)
- [Grund: Fehlendes Token 'xyz' im CORS-Header 'Access-Control-Allow-Headers' vom CORS-Preflight-Kanal](/de/docs/Web/HTTP/Guides/CORS/Errors/CORSMissingAllowHeaderFromPreflight)
- [Grund: Mehrere CORS-Header 'Access-Control-Allow-Origin' nicht erlaubt](/de/docs/Web/HTTP/Guides/CORS/Errors/CORSMultipleAllowOriginNotAllowed)

Die meisten CORS-Fehler können nur auf dem Server behoben werden, da der Server steuert, ob Cross-Origin-Zugriff erlaubt ist. Es gibt jedoch einige Dinge, die Sie auf der Client-Seite tun können:

### Vermeiden Sie das Auslösen eines Preflight-Checks

Browser senden eine [Preflight-Anfrage](/de/docs/Web/HTTP/Guides/CORS#preflighted_requests), bevor die tatsächliche Anfrage ausgelöst wird, wenn bestimmte Bedingungen erfüllt sind (benutzerdefinierte Header, Methoden außer `GET`/`HEAD`/`POST` oder nicht einfache Content-Typen). Wenn der Server keine Preflight-Anfragen bearbeitet, können Sie Ihre Anfrage so umstrukturieren, dass sie als [einfache Anfrage](/de/docs/Web/HTTP/Guides/CORS#simple_requests) qualifiziert:

- Verwenden Sie nur die Methoden `GET`, `HEAD` oder `POST`.
- Setzen Sie nur {{Glossary("CORS-safelisted_request_header", "CORS-safelisted request headers")}} (wie z.B. {{HTTPHeader("Accept")}}, {{HTTPHeader("Content-Language")}} oder {{HTTPHeader("Content-Type")}}).
- Verwenden Sie nur `application/x-www-form-urlencoded`, `multipart/form-data` oder `text/plain` für {{HTTPHeader("Content-Type")}}.

Einfache Anfragen umgehen den Preflight-Check vollständig, was eine Klasse von CORS-Fehlern im Zusammenhang mit der Preflight-Bearbeitung vermeidet.

### Verwenden Sie den `no-cors`-Modus für undurchsichtige Antworten

Wenn Sie den Antwortinhalt oder die Header nicht lesen müssen — zum Beispiel beim Senden von Analytics-Beacons oder beim Laden von Ressourcen in einen Cache über einen Service Worker — können Sie den [`mode`](/de/docs/Web/API/Request/mode) auf `"no-cors"` in einem [`fetch()`](/de/docs/Web/API/Window/fetch)-Aufruf setzen:

```js
fetch("https://api.example.com/log", {
  method: "POST",
  mode: "no-cors",
  body: data,
});
```

Die Antwort wird [undurchsichtig](/de/docs/Web/API/Response/type) sein: Ihr Status ist `0`, ihre Header sind leer und ihr Body ist für JavaScript nicht lesbar. Dies ist absichtlich so — `no-cors` deaktiviert die CORS-Prüfung, aber im Gegenzug verlieren Sie jeglichen Zugriff auf den Antwortinhalt.

### Verwenden Sie einen Proxy-Server

Wenn Sie den entfernten Server nicht kontrollieren und dieser keine CORS-Header setzt, können Sie Anfragen über einen Server leiten, den Sie kontrollieren. Ihr Server ruft die Ressource in Ihrem Namen ab und gibt sie mit den entsprechenden CORS-Headern zurück. Dieser Ansatz erhöht die Latenz und führt zu einer Abhängigkeit von Ihrem Proxy, funktioniert aber, wenn andere Optionen nicht verfügbar sind.

## Siehe auch

- Glossar: {{Glossary("CORS", "CORS")}}
- [Einführung zu CORS](/de/docs/Web/HTTP/Guides/CORS)
- [Serverseitige CORS-Einstellungen](/de/docs/Web/HTTP/Guides/CORS)
- [CORS-fähiges Bild](/de/docs/Web/HTML/How_to/CORS_enabled_image)
- [CORS-Einstellungsattribute](/de/docs/Web/HTML/Reference/Attributes/crossorigin)
