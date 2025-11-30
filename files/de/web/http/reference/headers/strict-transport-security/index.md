---
title: Strict-Transport-Security header
short-title: Strict-Transport-Security
slug: Web/HTTP/Reference/Headers/Strict-Transport-Security
l10n:
  sourceCommit: ca26363fcc6fc861103d40ac0205e5c5b79eb2fa
---

Der HTTP **`Strict-Transport-Security`** {{Glossary("response_header", "Antwort-Header")}} (oft als {{Glossary("HSTS", "HSTS")}} abgekürzt) informiert Browser darüber, dass der {{Glossary("host", "Host")}} nur über HTTPS aufgerufen werden sollte und dass alle zukünftigen Versuche, ihn über HTTP zu erreichen, automatisch auf HTTPS aktualisiert werden sollten. Zusätzlich wird der Browser bei zukünftigen Verbindungen zum Host dem Benutzer nicht erlauben, sichere Verbindungsfehler, wie ein ungültiges Zertifikat, zu umgehen. HSTS identifiziert einen Host nur anhand seines Domainnamens.

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
  - : Die Zeit, in Sekunden, während der der Browser sich merken soll, dass ein Host nur über HTTPS aufgerufen werden sollte.
- `includeSubDomains` {{optional_inline}}
  - : Wenn diese Direktive angegeben ist, gilt die HSTS-Policy auch für alle Subdomains der Domain des Hosts.
- `preload` {{optional_inline}} {{non-standard_inline}}
  - : Siehe [Preloading Strict Transport Security](#preloading_strict_transport_security) für Details. Wenn `preload` verwendet wird, muss die `max-age` Direktive mindestens `31536000` (1 Jahr) betragen und die `includeSubDomains` Direktive muss vorhanden sein.

## Beschreibung

Der `Strict-Transport-Security` Header informiert den Browser, dass alle Verbindungen zum Host HTTPS verwenden müssen. Obwohl es sich um einen Antwort-Header handelt, beeinflusst er nicht, wie der Browser die aktuelle Antwort behandelt, sondern wie er zukünftige Anfragen durchführt.

Wenn eine HTTPS-Antwort den `Strict-Transport-Security` Header enthält, fügt der Browser den Domainnamen des Hosts zu seiner permanenten Liste von HSTS-Hosts hinzu. Wenn der Domainname bereits in der Liste ist, werden die Ablaufzeit und die `includeSubDomains` Direktive aktualisiert. Der Host wird nur durch seinen Domainnamen identifiziert. Eine IP-Adresse kann kein HSTS-Host sein. HSTS gilt für alle Ports des Hosts, unabhängig davon, welcher Port für die Anfrage verwendet wurde.

Vor dem Laden einer `http` URL überprüft der Browser den Domainnamen gegen seine Liste der HSTS-Hosts. Wenn der Domainname ein nicht fallunterscheidungsrelevantes Match für einen HSTS-Host ist oder eine Subdomain eines solchen Hosts ist, der `includeSubDomains` spezifiziert hat, ersetzt der Browser das URL-Schema mit `https`. Wenn die URL den Port 80 angibt, ändert der Browser dies zu 443. Jede andere explizite Portnummer bleibt unverändert, und der Browser verbindet sich mit diesem Port über HTTPS.

Tritt beim Verbinden zu einem HSTS-Host ein TLS-Warnhinweis oder -Fehler wie ein ungültiges Zertifikat auf, bietet der Browser dem Benutzer keine Möglichkeit, fortzufahren oder die Fehlermeldung zu "überklicken", was die Absicht einer strengen Sicherheit kompromittieren würde.

> [!NOTE]
> Der Host muss den `Strict-Transport-Security` Header nur über HTTPS senden, nicht über unsicheres HTTP. Browser ignorieren den Header, wenn er über HTTP gesendet wird, um zu verhindern, dass ein [Manipulator-in-the-middle (MITM)](/de/docs/Web/Security/Attacks/MITM) den Header vorzeitig ablaufen lässt oder ihn für einen Host hinzufügt, der HTTPS nicht unterstützt.

### Ablauf

Jedes Mal, wenn der Browser einen `Strict-Transport-Security` Header erhält, aktualisiert er die HSTS-Ablaufzeit des Hosts, indem er `max-age` zur aktuellen Zeit addiert. Die Verwendung eines festen Werts für `max-age` kann verhindern, dass HSTS abläuft, da jede nachfolgende Antwort das Ablaufdatum weiter in die Zukunft verschiebt.

Fehlt der `Strict-Transport-Security` Header in einer Antwort von einem Host, der zuvor einen gesendet hat, bleibt der vorherige Header bis zu seiner Ablaufzeit in Kraft.

Um HSTS zu deaktivieren, setzen Sie `max-age=0`. Dies wird erst wirksam, wenn der Browser eine sichere Anfrage stellt und den Antwort-Header erhält. Es ist von Natur aus nicht möglich, HSTS über unsicheres HTTP zu deaktivieren.

### Subdomains

Die `includeSubDomains` Direktive weist den Browser an, die HSTS-Policy einer Domain auch auf ihre Subdomains anzuwenden. Eine HSTS-Policy für `secure.example.com` mit `includeSubDomains` gilt auch für `login.secure.example.com` und `admin.login.secure.example.com`. Aber es gilt nicht für `example.com` oder `insecure.example.com`.

Jeder Subdomain-Host sollte `Strict-Transport-Security` Header in seinen Antworten einschließen, auch wenn die Superdomain `includeSubDomains` verwendet, da ein Browser einen Subdomain-Host kontaktieren könnte, bevor die Superdomain angesprochen wurde. Zum Beispiel, wenn `example.com` den HSTS-Header mit `includeSubDomains` enthält, aber alle existierenden Links direkt zu `www.example.com` führen, wird der Browser den HSTS-Header von `example.com` nie sehen. Daher sollte auch `www.example.com` HSTS-Header senden.

Der Browser speichert die HSTS-Policy für jede Domain und Subdomain unabhängig, ungeachtet der `includeSubDomains` Direktive. Wenn sowohl `example.com` als auch `login.example.com` HSTS-Header senden, speichert der Browser zwei separate HSTS-Policies, und sie können unabhängig voneinander ablaufen. Wenn `example.com` `includeSubDomains` verwendet hat, bleibt `login.example.com` abgedeckt, wenn eine der Policies abläuft.

Wenn `max-age=0` ist, hat `includeSubDomains` keine Wirkung, da die Domain, die `includeSubDomains` spezifiziert hat, sofort aus der HSTS-Hosts-Liste gelöscht wird; dies löscht nicht die separaten HSTS-Policies jeder Subdomain.

### Unsichere HTTP-Anfragen

Wenn der Host unsichere HTTP-Anfragen akzeptiert, sollte er mit einem dauerhaften Redirect (wie Statuscode {{HTTPStatus("301")}}) antworten, der eine `https` URL im {{HTTPHeader("Location")}} Header hat. Der Redirect darf den `Strict-Transport-Security` Header nicht enthalten, da die Anfrage über unsicheres HTTP erfolgte, aber der Header muss nur über HTTPS gesendet werden. Nachdem der Browser den Redirect verfolgt hat und eine neue Anfrage über HTTPS stellt, sollte die Antwort den `Strict-Transport-Security` Header enthalten, um sicherzustellen, dass zukünftige Versuche, eine `http` URL zu laden, sofort HTTPS verwenden, ohne dass ein Redirect erforderlich ist.

Eine Schwachstelle von HSTS ist, dass es erst in Kraft tritt, nachdem der Browser mindestens eine sichere Verbindung zum Host hergestellt hat und den `Strict-Transport-Security` Header erhalten hat. Wenn der Browser eine unsichere `http` URL lädt, bevor er weiß, dass der Host ein HSTS-Host ist, ist die erste Anfrage anfällig für Netzwerkangriffe. [Preloading](#preloading_strict_transport_security) mildert dieses Problem.

### Beispiel-Szenario für Strict Transport Security

1. Zu Hause besucht der Benutzer `http://example.com/` zum ersten Mal.
2. Da das URL-Schema `http` ist und der Browser es nicht in seiner HSTS-Hosts-Liste hat, verwendet die Verbindung unsicheres HTTP.
3. Der Server antwortet mit einem `301 Moved Permanently` Redirect zu `https://example.com/`.
4. Der Browser stellt eine neue Anfrage, diesmal mit HTTPS.
5. Die Antwort, die über HTTPS erfolgt, enthält den Header:

   ```http
   Strict-Transport-Security: max-age=31536000; includeSubDomains
   ```

   Der Browser merkt sich `example.com` als einen HSTS-Host, und dass `includeSubDomains` angegeben wurde.

6. Einige Wochen später ist der Benutzer am Flughafen und beschließt, das kostenlose WLAN zu nutzen. Aber unbewusst verbinden sie sich mit einem betrügerischen Zugangspunkt, der auf dem Laptop eines Angreifers läuft.
7. Der Benutzer öffnet `http://login.example.com/`. Da sich der Browser `example.com` als einen HSTS-Host merkt und die `includeSubDomains` Direktive verwendet wurde, verwendet der Browser HTTPS.
8. Der Angreifer fängt die Anfrage mit einem gefälschten HTTPS-Server ab, hat aber kein gültiges Zertifikat für die Domain.
9. Der Browser zeigt einen ungültigen Zertifikatfehler an und erlaubt dem Benutzer nicht, ihn zu umgehen, was verhindert, dass sie ihr Passwort dem Angreifer geben.

### Preloading Strict Transport Security

Google pflegt einen [HSTS Preload Service](https://hstspreload.org/). Indem Sie die Richtlinien befolgen und Ihre Domain erfolgreich einreichen, können Sie sicherstellen, dass Browser nur über sichere Verbindungen zu Ihrer Domain verbinden werden. Obwohl der Dienst von Google gehostet wird, verwenden alle Browser diese Preload-Liste. Es ist jedoch nicht Teil der HSTS-Spezifikation und sollte nicht als offiziell betrachtet werden.

- Informationen zur HSTS-Preload-Liste in Chrome: https://www.chromium.org/hsts/
- Abfrage der Firefox HSTS-Preload-Liste: [nsSTSPreloadList.inc](https://searchfox.org/firefox-main/source/security/manager/ssl/nsSTSPreloadList.inc)

## Beispiele

### Verwendung von Strict-Transport-Security

Alle gegenwärtigen und zukünftigen Subdomains werden für eine `max-age` von 1 Jahr nur über HTTPS erreichbar sein. Dies blockiert den Zugriff auf Seiten oder Subdomains, die nur über HTTP bedient werden können.

```http
Strict-Transport-Security: max-age=31536000; includeSubDomains
```

Obwohl eine `max-age` von 1 Jahr für eine Domain akzeptabel ist, werden zwei Jahre als empfohlener Wert angegeben, wie auf https://hstspreload.org erklärt.

Im folgenden Beispiel wird `max-age` auf 2 Jahre gesetzt und ist mit `preload` versehen, was für die Aufnahme in die HSTS-Preislisten aller großen Webbrowser erforderlich ist, wie Chromium, Edge und Firefox.

```http
Strict-Transport-Security: max-age=63072000; includeSubDomains; preload
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Features, die auf sichere Kontexte beschränkt sind](/de/docs/Web/Security/Defenses/Secure_Contexts/features_restricted_to_secure_contexts)
- [HTTP Strict Transport Security has landed!](https://blog.sidstamm.com/2010/08/http-strict-transport-security-has.html) auf blog.sidstamm.com (2010)
- [HTTP Strict Transport Security (force HTTPS)](https://hacks.mozilla.org/2010/08/firefox-4-http-strict-transport-security-force-https/) auf hacks.mozilla.org (2010)
- [HTTP Strict Transport Security](https://cheatsheetseries.owasp.org/cheatsheets/HTTP_Strict_Transport_Security_Cheat_Sheet.html) Cheatsheet auf owasp.org
- [HTTP Strict Transport Security](https://en.wikipedia.org/wiki/HTTP_Strict_Transport_Security) auf Wikipedia
- [HSTS Preload Service](https://hstspreload.org/)
