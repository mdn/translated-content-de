---
title: Strict-Transport-Security header
short-title: Strict-Transport-Security
slug: Web/HTTP/Reference/Headers/Strict-Transport-Security
l10n:
  sourceCommit: 7f6778934020a9b5b82b4dd8ca79a99bc9950c2a
---

Der HTTP **`Strict-Transport-Security`** {{Glossary("response_header", "Response-Header")}} (oft abgekürzt als {{Glossary("HSTS", "HSTS")}}) informiert Browser, dass der {{Glossary("host", "Host")}} nur über HTTPS erreichbar sein sollte und dass alle zukünftigen Versuche, darauf über HTTP zuzugreifen, automatisch auf HTTPS umgestellt werden sollen. Zusätzlich wird der Browser bei zukünftigen Verbindungen zum Host dem Benutzer nicht erlauben, sichere Verbindungsfehler wie ein ungültiges Zertifikat zu umgehen. HSTS identifiziert einen Host nur durch seinen Domainnamen.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Response_header", "Response-Header")}}</td>
    </tr>
  </tbody>
</table>

## Syntax

```http
Strict-Transport-Security: max-age=<expire-time>
Strict-Transport-Security: max-age=<expire-time>; includeSubDomains
Strict-Transport-Security: max-age=<expire-time>; includeSubDomains; preload
```

## Direktiven

- `max-age=<expire-time>`
  - : Die Zeit in Sekunden, für die der Browser sich merken soll, dass ein Host nur über HTTPS zu erreichen ist.
- `includeSubDomains` {{optional_inline}}
  - : Wenn diese Direktive angegeben wird, gilt die HSTS-Richtlinie auch für alle Subdomains der Domain des Hosts.
- `preload` {{optional_inline}} {{non-standard_inline}}
  - : Siehe [Preloading Strict Transport Security](#preloading_strict_transport_security) für Details. Bei Verwendung von `preload` muss die `max-age`-Direktive mindestens `31536000` (1 Jahr) betragen, und die `includeSubDomains`-Direktive muss vorhanden sein.

## Beschreibung

Der `Strict-Transport-Security`-Header informiert den Browser, dass alle Verbindungen zum Host HTTPS verwenden müssen. Obwohl es sich um einen Response-Header handelt, beeinflusst er nicht, wie der Browser die aktuelle Antwort behandelt, sondern wie er zukünftige Anfragen stellt.

Wenn ein HTTPS-Response den `Strict-Transport-Security`-Header enthält, fügt der Browser den Domainnamen des Hosts zu seiner permanenten Liste von HSTS-Hosts hinzu. Wenn der Domainname bereits in der Liste ist, werden die Ablaufzeit und die `includeSubDomains`-Direktive aktualisiert. Der Host wird nur durch seinen Domainnamen identifiziert. Eine IP-Adresse kann kein HSTS-Host sein. HSTS gilt für alle Ports des Hosts, unabhängig davon, welcher Port für die Anfrage verwendet wurde.

Bevor eine `http` URL geladen wird, überprüft der Browser den Domainnamen gegen seine HSTS-Hostliste. Wenn der Domainname für einen HSTS-Host oder eine Subdomain eines solchen, der `includeSubDomains` spezifiziert hat, ohne Berücksichtigung von Groß- und Kleinschreibung übereinstimmt, ersetzt der Browser das URL-Schema durch `https`. Wenn die URL Port 80 spezifiziert, ändert der Browser ihn auf 443. Jede andere explizite Portnummer bleibt unverändert, und der Browser verbindet sich über HTTPS mit diesem Port.

Wenn beim Verbinden zu einem HSTS-Host eine TLS-Warnung oder -Fehler auftritt, wie ein ungültiges Zertifikat, bietet der Browser dem Benutzer keine Möglichkeit, die Fehlermeldung zu umgehen oder auf "Weiter" zu klicken, was die strikte Sicherheit untergraben würde.

> [!NOTE]
> Der Host muss den `Strict-Transport-Security`-Header nur über HTTPS und nicht über unsicheres HTTP senden. Browser ignorieren den Header, wenn er über HTTP gesendet wird, um zu verhindern, dass ein [Angreifer-in-der-Mitte (MITM)](/de/docs/Web/Security/Attacks/MITM) den Header vorzeitig ablaufen lässt oder ihn für einen Host hinzufügt, der HTTPS nicht unterstützt.

### Ablauf

Jedes Mal, wenn der Browser einen `Strict-Transport-Security`-Header empfängt, aktualisiert er die Ablaufzeit des HSTS des Hosts, indem er `max-age` zur aktuellen Zeit hinzufügt. Die Verwendung eines festen Wertes für `max-age` kann verhindern, dass HSTS abläuft, da jede nachfolgende Antwort das Ablaufdatum weiter in die Zukunft verschiebt.

Wenn der `Strict-Transport-Security`-Header in einer Antwort eines Hosts fehlt, der zuvor einen gesendet hat, bleibt der vorherige Header bis zu seiner Ablaufzeit in Kraft.

Um HSTS zu deaktivieren, setzen Sie `max-age=0`. Dies tritt nur in Kraft, wenn der Browser eine sichere Anfrage führt und den Antwort-Header erhält. Ausgestaltungsbedingt können Sie HSTS nicht über unsicheres HTTP deaktivieren.

### Subdomains

Die `includeSubDomains`-Direktive weist den Browser an, die HSTS-Richtlinie einer Domain auch auf deren Subdomains anzuwenden. Eine HSTS-Richtlinie für `secure.example.com` mit `includeSubDomains` gilt auch für `login.secure.example.com` und `admin.login.secure.example.com`. Aber sie gilt nicht für `example.com` oder `insecure.example.com`.

Jeder Subdomain-Host sollte `Strict-Transport-Security` Header in seinen Antworten enthalten, auch wenn die Superdomain `includeSubDomains` verwendet, da ein Browser möglicherweise zuerst einen Subdomain-Host kontaktiert, bevor die Superdomain kontaktiert wird. Wenn zum Beispiel `example.com` den HSTS-Header mit `includeSubDomains` enthält, aber alle existierenden Links direkt auf `www.example.com` zeigen, sieht der Browser nie den HSTS-Header von `example.com`. Deswegen sollte `www.example.com` auch HSTS-Header senden.

Der Browser speichert die HSTS-Richtlinie für jede Domain und Subdomain unabhängig voneinander, unabhängig von der `includeSubDomains`-Direktive. Wenn sowohl `example.com` als auch `login.example.com` HSTS-Header senden, speichert der Browser zwei separate HSTS-Richtlinien, die unabhängig voneinander ablaufen können. Wenn `example.com` `includeSubDomains` verwendet, bleibt `login.example.com` gedeckt, wenn eine der Richtlinien abläuft.

Wenn `max-age=0`, hat `includeSubDomains` keinen Effekt, da die Domain, die `includeSubDomains` spezifiziert hat, sofort aus der HSTS-Hostliste gelöscht wird; dies löscht nicht die separaten HSTS-Richtlinien jeder Subdomain.

### Unsichere HTTP-Anfragen

Wenn der Host unsichere HTTP-Anfragen akzeptiert, sollte er mit einer permanenten Weiterleitung (wie der Statuscode {{HTTPStatus("301")}}) mit einer `https`-URL im {{HTTPHeader("Location")}}-Header antworten. Die Umleitung darf den `Strict-Transport-Security`-Header nicht enthalten, da die Anfrage unsicheres HTTP verwendet hat, aber der Header muss ausschließlich über HTTPS gesendet werden. Nachdem der Browser der Umleitung gefolgt ist und eine neue Anfrage über HTTPS gestellt hat, sollte die Antwort den `Strict-Transport-Security`-Header enthalten, um sicherzustellen, dass zukünftige Versuche, eine `http`-URL zu laden, sofort HTTPS verwenden, ohne eine Umleitung zu erfordern.

Eine Schwäche von HSTS besteht darin, dass es erst in Kraft tritt, wenn der Browser mindestens einmal eine sichere Verbindung zum Host aufgebaut und den `Strict-Transport-Security`-Header empfangen hat. Wenn der Browser eine unsichere `http`-URL lädt, bevor er weiß, dass der Host ein HSTS-Host ist, ist die erste Anfrage anfällig für Netzwerkangriffe. [Preloading](#preloading_strict_transport_security) mildert dieses Problem.

### Beispiel-Szenario für Strict Transport Security

1. Zu Hause besucht der Benutzer `http://example.com/` zum ersten Mal.
2. Da das URL-Schema `http` ist und der Browser es nicht in seiner HSTS-Hostliste hat, verwendet die Verbindung unsicheres HTTP.
3. Der Server antwortet mit einer `301 Moved Permanently` Umleitung zu `https://example.com/`.
4. Der Browser stellt eine neue Anfrage, diesmal über HTTPS.
5. Die Antwort, die über HTTPS erfolgt, enthält den Header:

   ```http
   Strict-Transport-Security: max-age=31536000; includeSubDomains
   ```

   Der Browser merkt sich `example.com` als HSTS-Host, und dass `includeSubDomains` spezifiziert wurde.

6. Einige Wochen später ist der Benutzer am Flughafen und entscheidet sich, das kostenlose WLAN zu nutzen. Aber unbewusst verbindet er sich mit einem schädlichen Zugangspunkt, der auf dem Laptop eines Angreifers läuft.
7. Der Benutzer öffnet `http://login.example.com/`. Da sich der Browser `example.com` als HSTS-Host merkt und die `includeSubDomains`-Direktive verwendet wurde, verwendet der Browser HTTPS.
8. Der Angreifer fängt die Anfrage mit einem gefälschten HTTPS-Server ab, hat aber kein gültiges Zertifikat für die Domain.
9. Der Browser zeigt einen ungültigen Zertifikatsfehler an und erlaubt dem Benutzer nicht, diesen zu umgehen, wodurch verhindert wird, dass er seinem Angreifer sein Passwort gibt.

### Preloading Strict Transport Security

Google betreibt einen [HSTS-Preload-Service](https://hstspreload.org/). Wenn Sie den Richtlinien folgen und Ihre Domain erfolgreich einreichen, können Sie sicherstellen, dass Browser nur über sichere Verbindungen zu Ihrer Domain verbinden. Während der Service von Google gehostet wird, verwenden alle Browser diese Preload-Liste. Es ist jedoch nicht Teil der HSTS-Spezifikation und sollte nicht als offiziell angesehen werden.

- Informationen über die HSTS-Preload-Liste in Chrome: https://www.chromium.org/hsts/
- Konsultation der Firefox-HSTS-Preload-Liste: [nsSTSPreloadList.inc](https://searchfox.org/firefox-main/source/security/manager/ssl/nsSTSPreloadList.inc)

## Beispiele

### Verwendung von Strict-Transport-Security

Alle aktuellen und zukünftigen Subdomains werden für eine `max-age` von 1 Jahr HTTPS sein. Dies blockiert den Zugriff auf Seiten oder Subdomains, die nur über HTTP bereitgestellt werden können.

```http
Strict-Transport-Security: max-age=31536000; includeSubDomains
```

Obwohl eine `max-age` von 1 Jahr für eine Domain akzeptabel ist, wird auf https://hstspreload.org erklärt, dass zwei Jahre der empfohlene Wert sind.

Im folgenden Beispiel wird `max-age` auf 2 Jahre gesetzt und mit `preload` versehen, was für die Aufnahme in die HSTS-Preload-Listen aller wichtigen Webbrowser wie Chromium, Edge und Firefox erforderlich ist.

```http
Strict-Transport-Security: max-age=63072000; includeSubDomains; preload
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Funktionen, die auf sichere Kontexte beschränkt sind](/de/docs/Web/Security/Defenses/Secure_Contexts/features_restricted_to_secure_contexts)
- [HTTP Strict Transport Security has landed!](https://blog.sidstamm.com/2010/08/http-strict-transport-security-has.html) auf blog.sidstamm.com (2010)
- [HTTP Strict Transport Security (force HTTPS)](https://hacks.mozilla.org/2010/08/firefox-4-http-strict-transport-security-force-https/) auf hacks.mozilla.org (2010)
- [HTTP Strict Transport Security](https://cheatsheetseries.owasp.org/cheatsheets/HTTP_Strict_Transport_Security_Cheat_Sheet.html) Cheatsheet auf owasp.org
- [HTTP Strict Transport Security](https://en.wikipedia.org/wiki/HTTP_Strict_Transport_Security) auf Wikipedia
- [HSTS Preload-Service](https://hstspreload.org/)
