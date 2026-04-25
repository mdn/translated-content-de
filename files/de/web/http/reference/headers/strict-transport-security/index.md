---
title: Strict-Transport-Security header
short-title: Strict-Transport-Security
slug: Web/HTTP/Reference/Headers/Strict-Transport-Security
l10n:
  sourceCommit: b3fde0a56d53ae5f48ed287338771a93826709c4
---

Der HTTP **`Strict-Transport-Security`** {{Glossary("response_header", "Antwort-Header")}} (oft abgekürzt als {{Glossary("HSTS", "HSTS")}}) informiert Browser, dass der {{Glossary("host", "Host")}} nur über HTTPS erreichbar sein sollte, und dass alle zukünftigen Versuche, ihn über HTTP zu erreichen, automatisch auf HTTPS umgestellt werden sollen. Zusätzlich wird der Browser bei zukünftigen Verbindungen zum Host dem Nutzer nicht erlauben, Sicherheitsfehler, wie ein ungültiges Zertifikat, zu umgehen. HSTS identifiziert einen Host nur durch seinen Domainnamen.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Response_header", "Antwort-Header")}}</td>
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
  - : Die Zeit in Sekunden, während der der Browser sich merken soll, dass ein Host nur über HTTPS aufgerufen werden soll.
- `includeSubDomains` {{optional_inline}}
  - : Wenn diese Direktive angegeben ist, gilt die HSTS-Richtlinie auch für alle Subdomains der Domain des Hosts.
- `preload` {{optional_inline}} {{non-standard_inline}}
  - : Siehe [Preloading Strict Transport Security](#preloading_strict_transport_security) für Details. Bei Verwendung von `preload` muss die `max-age`-Direktive mindestens `31536000` (1 Jahr) betragen, und die `includeSubDomains`-Direktive muss vorhanden sein.

## Beschreibung

Der `Strict-Transport-Security`-Header informiert den Browser, dass alle Verbindungen zum Host über HTTPS erfolgen müssen. Obwohl es sich um einen Antwort-Header handelt, beeinflusst er nicht, wie der Browser die aktuelle Antwort behandelt, sondern wie er zukünftige Anfragen durchführt.

Wenn eine HTTPS-Antwort den `Strict-Transport-Security`-Header enthält, fügt der Browser den Domainnamen des Hosts seiner persistenten Liste von HSTS-Hosts hinzu. Wenn der Domainname bereits in der Liste ist, werden die Ablaufzeit und die `includeSubDomains`-Direktive aktualisiert. Der Host wird nur durch seinen Domainnamen identifiziert. Eine IP-Adresse kann kein HSTS-Host sein. HSTS gilt für alle Ports des Hosts, unabhängig davon, welcher Port für die Anfrage verwendet wurde.

Bevor eine `http`-URL geladen wird, prüft der Browser den Domainnamen gegen seine HSTS-Hostliste. Wenn der Domainname ein Groß-/Kleinschreibung-unabhängiges Match für einen HSTS-Host ist oder eine Subdomain von einem ist, der `includeSubDomains` angegeben hat, ersetzt der Browser das URL-Schema durch `https`. Wenn die URL Port 80 angibt, ändert der Browser es auf 443. Jeder andere explizite Port bleibt unverändert, und der Browser verbindet sich zu diesem Port über HTTPS.

Wenn beim Verbinden zu einem HSTS-Host eine TLS-Warnung oder ein Fehler, wie ein ungültiges Zertifikat, auftritt, bietet der Browser dem Nutzer keine Möglichkeit, fortzufahren oder die Fehlermeldung zu umgehen, was den Zweck der strengen Sicherheit kompromittieren würde.

> [!NOTE]
> Der Host muss den `Strict-Transport-Security`-Header nur über HTTPS senden, nicht über unsicheres HTTP. Browser ignorieren den Header, wenn er über HTTP gesendet wird, um einen [Man-in-the-Middle (MITM)](/de/docs/Web/Security/Attacks/MITM) daran zu hindern, den Header zu manipulieren, um vorzeitig abzulaufen oder ihn für einen Host hinzuzufügen, der HTTPS nicht unterstützt.

### Ablauf

Jedes Mal, wenn der Browser einen `Strict-Transport-Security`-Header erhält, aktualisiert er die HSTS-Ablaufzeit des Hosts, indem er `max-age` zur aktuellen Zeit hinzufügt. Die Verwendung eines festen Wertes für `max-age` kann verhindern, dass HSTS abläuft, da jede nachfolgende Antwort die Ablaufzeit weiter in die Zukunft verschiebt.

Wenn der `Strict-Transport-Security`-Header in einer Antwort eines Hosts fehlt, der zuvor einen gesendet hat, bleibt der vorherige Header bis zu seiner Ablaufzeit in Kraft.

Um HSTS zu deaktivieren, setzen Sie `max-age=0`. Dies tritt erst in Kraft, nachdem der Browser eine sichere Anfrage stellt und den Antwort-Header empfängt. Durch Design können Sie HSTS nicht über unsicheres HTTP deaktivieren.

### Subdomains

Die `includeSubDomains`-Direktive weist den Browser an, die HSTS-Richtlinie einer Domain auch auf ihre Subdomains anzuwenden. Eine HSTS-Richtlinie für `secure.example.com` mit `includeSubDomains` gilt auch für `login.secure.example.com` und `admin.login.secure.example.com`. Aber sie gilt nicht für `example.com` oder `insecure.example.com`.

Jeder Subdomain-Host sollte `Strict-Transport-Security`-Header in seine Antworten einfügen, auch wenn die Superdomain `includeSubDomains` verwendet, weil ein Browser möglicherweise einen Subdomain-Host vor der Superdomain kontaktiert. Beispielsweise, wenn `example.com` den HSTS-Header mit `includeSubDomains` enthält, aber alle vorhandenen Links direkt zu `www.example.com` gehen, sieht der Browser niemals den HSTS-Header von `example.com`. Daher sollte `www.example.com` auch HSTS-Header senden.

Der Browser speichert die HSTS-Richtlinie für jede Domain und Subdomain unabhängig, unabhängig von der `includeSubDomains`-Direktive. Wenn sowohl `example.com` als auch `login.example.com` HSTS-Header senden, speichert der Browser zwei separate HSTS-Richtlinien, und sie können unabhängig voneinander ablaufen. Wenn `example.com` `includeSubDomains` verwendet hat, bleibt `login.example.com` abgedeckt, wenn eine der Richtlinien abläuft.

Wenn `max-age=0`, hat `includeSubDomains` keine Wirkung, da die Domain, die `includeSubDomains` spezifiziert hat, sofort aus der HSTS-Hostliste gelöscht wird; dies löscht nicht die separaten HSTS-Richtlinien jeder Subdomain.

### Unsichere HTTP-Anfragen

Wenn der Host unsichere HTTP-Anfragen akzeptiert, sollte er mit einem permanenten Redirect (wie Statuscode {{HTTPStatus("301")}}) antworten, wobei die URL `https` im {{HTTPHeader("Location")}}-Header enthalten ist. Der Redirect darf den `Strict-Transport-Security`-Header nicht enthalten, da die Anfrage unsicheres HTTP verwendet hat, aber der Header muss nur über HTTPS gesendet werden. Nachdem der Browser dem Redirect gefolgt ist und eine neue Anfrage mit HTTPS gestellt hat, sollte die Antwort den `Strict-Transport-Security`-Header enthalten, um sicherzustellen, dass zukünftige Versuche, eine `http`-URL zu laden, sofort HTTPS verwenden, ohne einen Redirect zu erfordern.

Eine Schwäche von HSTS ist, dass es erst wirksam wird, nachdem der Browser mindestens eine sichere Verbindung zum Host aufgebaut und den `Strict-Transport-Security`-Header empfangen hat. Wenn der Browser vor der Kenntnis, dass der Host ein HSTS-Host ist, eine unsichere `http`-URL lädt, ist die anfängliche Anfrage anfällig für Netzwerkangriffe. [Preloading](#preloading_strict_transport_security) mildert dieses Problem.

### Beispiel-Szenario für Strict Transport Security

1. Zu Hause besucht der Nutzer `http://example.com/` zum ersten Mal.
2. Da das URL-Schema `http` ist und der Browser es nicht in seiner HSTS-Hostliste hat, erfolgt die Verbindung über unsicheres HTTP.
3. Der Server antwortet mit einem `301 Moved Permanently` Redirect zu `https://example.com/`.
4. Der Browser stellt eine neue Anfrage, diesmal unter Verwendung von HTTPS.
5. Die Antwort, die über HTTPS erfolgt, enthält den Header:

   ```http
   Strict-Transport-Security: max-age=31536000; includeSubDomains
   ```

   Der Browser merkt sich `example.com` als HSTS-Host, und dass es `includeSubDomains` spezifiziert hat.

6. Einige Wochen später ist der Nutzer am Flughafen und beschließt, das kostenlose Wi-Fi zu nutzen. Ohne es zu wissen, verbinden sie sich jedoch mit einem betrügerischen Zugangspunkt, der auf einem Laptop eines Angreifers läuft.
7. Der Nutzer öffnet `http://login.example.com/`. Da sich der Browser `example.com` als HSTS-Host gemerkt hat und die `includeSubDomains`-Direktive verwendet wurde, verwendet der Browser HTTPS.
8. Der Angreifer fängt die Anfrage mit einem gefälschten HTTPS-Server ab, hat jedoch kein gültiges Zertifikat für die Domain.
9. Der Browser zeigt einen ungültigen Zertifikatsfehler an und erlaubt es dem Nutzer nicht, diesen zu umgehen, wodurch verhindert wird, dass sie ihr Passwort dem Angreifer geben.

### Preloading Strict Transport Security

Google betreibt einen [HSTS-Preload-Dienst](https://hstspreload.org/). Durch das Befolgen der Richtlinien und das erfolgreiche Einreichen Ihrer Domain können Sie sicherstellen, dass Browser nur über sichere Verbindungen auf Ihre Domain zugreifen werden. Während der Dienst von Google gehostet wird, verwenden alle Browser diese Preload-Liste. Es ist jedoch nicht Teil der HSTS-Spezifikation und sollte nicht als offiziell betrachtet werden.

- Informationen zur HSTS-Preload-Liste in Chrome: https://www.chromium.org/hsts/
- Konsultation der Firefox HSTS-Preload-Liste: [nsSTSPreloadList.inc](https://searchfox.org/firefox-main/source/security/manager/ssl/nsSTSPreloadList.inc)

## Beispiele

### Verwendung von Strict-Transport-Security

Alle gegenwärtigen und zukünftigen Subdomains werden für eine `max-age` von 1 Jahr über HTTPS sein. Dies blockiert den Zugriff auf Seiten oder Subdomains, die nur über HTTP bereitgestellt werden können.

```http
Strict-Transport-Security: max-age=31536000; includeSubDomains
```

Ein `max-age` von 1 Jahr ist der minimale Wert, der für das HSTS-Preloading akzeptiert wird. Im folgenden Beispiel wird ein Wert von 2 Jahren verwendet, was der Wert ist, der im Beispiel-Header auf https://hstspreload.org gezeigt wird.

Im folgenden Beispiel ist `max-age` auf 2 Jahre gesetzt und mit `preload` versehen, was für die Aufnahme in die HSTS-Preload-Listen aller großen Webbrowser wie Chromium, Edge und Firefox notwendig ist.

```http
Strict-Transport-Security: max-age=63072000; includeSubDomains; preload
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Features eingeschränkt auf sichere Kontexte](/de/docs/Web/Security/Defenses/Secure_Contexts/features_restricted_to_secure_contexts)
- [HTTP Strict Transport Security ist gestartet!](https://blog.sidstamm.com/2010/08/http-strict-transport-security-has.html) auf blog.sidstamm.com (2010)
- [HTTP Strict Transport Security (force HTTPS)](https://hacks.mozilla.org/2010/08/firefox-4-http-strict-transport-security-force-https/) auf hacks.mozilla.org (2010)
- [HTTP Strict Transport Security](https://cheatsheetseries.owasp.org/cheatsheets/HTTP_Strict_Transport_Security_Cheat_Sheet.html) Cheat Sheet auf owasp.org
- [HTTP Strict Transport Security](https://en.wikipedia.org/wiki/HTTP_Strict_Transport_Security) auf Wikipedia
- [HSTS-Preload-Dienst](https://hstspreload.org/)
