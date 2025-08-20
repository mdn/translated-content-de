---
title: Strict-Transport-Security header
short-title: Strict-Transport-Security
slug: Web/HTTP/Reference/Headers/Strict-Transport-Security
l10n:
  sourceCommit: 886f2641ae90a70858c5e7d0d20959c70ee44d9d
---

Der HTTP-**`Strict-Transport-Security`**-{{Glossary("response_header", "Antwort-Header")}} (oft als {{Glossary("HSTS", "HSTS")}} abgekürzt) informiert Browser darüber, dass der {{Glossary("host", "Host")}} nur über HTTPS aufgerufen werden sollte und dass alle zukünftigen Versuche, auf ihn über HTTP zuzugreifen, automatisch auf HTTPS umgestellt werden sollten.
Außerdem lässt der Browser bei zukünftigen Verbindungen zum Host nicht zu, dass der Benutzer Sicherheitsfehler, wie z. B. ein ungültiges Zertifikat, umgeht.
HSTS identifiziert einen Host nur durch seinen Domainnamen.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Response_header", "Antwort-Header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_request_header", "Verbotener Anforderungs-Header")}}</th>
      <td>Nein</td>
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
  - : Die Zeit in Sekunden, während der der Browser sich merken soll, dass ein Host nur über HTTPS aufgerufen werden darf.
- `includeSubDomains` {{optional_inline}}
  - : Wenn diese Direktive angegeben wird, gilt die HSTS-Richtlinie auch für alle Subdomains der Domain des Hosts.
- `preload` {{optional_inline}} {{non-standard_inline}}
  - : Siehe [Preloading Strict Transport Security](#vorladen_von_strict_transport_security) für Details. Bei Verwendung von `preload` muss die `max-age`-Direktive mindestens `31536000` (1 Jahr) betragen, und die `includeSubDomains`-Direktive muss vorhanden sein.

## Beschreibung

Der `Strict-Transport-Security`-Header teilt dem Browser mit, dass alle Verbindungen zum Host über HTTPS erfolgen müssen.
Obwohl es sich um einen Antwort-Header handelt, beeinflusst er nicht, wie der Browser die aktuelle Antwort verarbeitet, sondern wie er zukünftige Anforderungen durchführt.

Wenn eine HTTPS-Antwort den `Strict-Transport-Security`-Header enthält, fügt der Browser den Domainnamen des Hosts zu seiner persistenten Liste von HSTS-Hosts hinzu.
Wenn der Domainname bereits in der Liste enthalten ist, werden die Ablaufzeit und die `includeSubDomains`-Direktive aktualisiert.
Der Host wird nur durch seinen Domainnamen identifiziert. Eine IP-Adresse kann kein HSTS-Host sein.
HSTS gilt für alle Ports des Hosts, unabhängig davon, welcher Port für die Anfrage verwendet wurde.

Vor dem Laden einer `http`-URL prüft der Browser den Domainnamen gegen seine HSTS-Hostliste.
Wenn der Domainname eine nicht case-sensitive Übereinstimmung für einen HSTS-Host ist oder eine Subdomain eines solchen Hosts, der `includeSubDomains` angegeben hat,
ersetzt der Browser das URL-Schema durch `https`.
Wenn die URL Port 80 angibt, ändert der Browser ihn in 443.
Jede andere explizite Portnummer bleibt unverändert, und der Browser verbindet sich zu diesem Port mit HTTPS.

Wenn beim Verbinden zu einem HSTS-Host eine TLS-Warnung oder ein Fehler auftritt, wie ein ungültiges Zertifikat,
bietet der Browser dem Benutzer keine Möglichkeit, die Fehlermeldung zu umgehen oder weiterzuklicken, was die Absicht der strikten Sicherheit untergraben würde.

> [!NOTE]
> Der Host muss den `Strict-Transport-Security`-Header nur über HTTPS senden, nicht über unsicheres HTTP.
> Browser ignorieren den Header, wenn er über HTTP gesendet wird, um zu verhindern, dass ein [Manipulator-in-der-Mitte (MITM)](/de/docs/Web/Security/Attacks/MITM)
> den Header manipuliert, um vorzeitig abzulaufen oder ihn für einen Host hinzuzufügen, der HTTPS nicht unterstützt.

### Ablauf

Jedes Mal, wenn der Browser einen `Strict-Transport-Security`-Header empfängt, aktualisiert er die HSTS-Ablaufzeit des Hosts, indem er `max-age` zur aktuellen Zeit hinzufügt.
Die Verwendung eines festen Werts für `max-age` kann verhindern, dass HSTS abläuft, da jede nachfolgende Antwort das Ablaufdatum weiter in die Zukunft verschiebt.

Wenn der `Strict-Transport-Security`-Header in einer Antwort von einem Host fehlt, der zuvor einen gesendet hat, bleibt der vorherige Header bis zu dessen Ablaufzeit wirksam.

Um HSTS zu deaktivieren, setzen Sie `max-age=0`.
Dies hat erst dann eine Wirkung, wenn der Browser eine sichere Anfrage stellt und den Antwort-Header empfängt.
Designbedingt kann HSTS nicht über unsicheres HTTP deaktiviert werden.

### Subdomains

Die `includeSubDomains`-Direktive weist den Browser an, die HSTS-Richtlinie einer Domain auch auf ihre Subdomains anzuwenden.
Eine HSTS-Richtlinie für `secure.example.com` mit `includeSubDomains` gilt auch für `login.secure.example.com`
und `admin.login.secure.example.com`. Sie gilt jedoch nicht für `example.com` oder `insecure.example.com`.

Jeder Subdomain-Host sollte `Strict-Transport-Security`-Header in seine Antworten einschließen, selbst wenn die
Hauptdomain `includeSubDomains` verwendet, da ein Browser möglicherweise einen Subdomain-Host kontaktiert, bevor er die Hauptdomain erreicht.
Zum Beispiel, wenn `example.com` den HSTS-Header mit `includeSubDomains` enthält, aber alle vorhandenen Links
direkt zu `www.example.com` führen, wird der Browser den HSTS-Header von `example.com` nie sehen.
Deshalb sollte `www.example.com` auch HSTS-Header senden.

Der Browser speichert die HSTS-Richtlinie für jede Domain und Subdomain unabhängig von der `includeSubDomains`-Direktive.
Wenn sowohl `example.com` als auch `login.example.com` HSTS-Header senden, speichert der Browser zwei separate HSTS-Richtlinien,
und sie können unabhängig ablaufen. Wenn `example.com` `includeSubDomains` verwendete, bleibt `login.example.com` abgedeckt,
wenn eine der Richtlinien abläuft.

Wenn `max-age=0` ist, hat `includeSubDomains` keinen Effekt, da die Domain, die `includeSubDomains` angegeben hat,
sofort aus der HSTS-Hostliste gelöscht wird; dies löscht nicht die separaten HSTS-Richtlinien für jede Subdomain.

### Unsichere HTTP-Anfragen

Wenn der Host unsichere HTTP-Anfragen akzeptiert, sollte er mit einer permanenten Weiterleitung (z. B. Statuscode {{HTTPStatus("301")}})
antworten und eine `https`-URL im {{HTTPHeader("Location")}}-Header angeben.
Die Weiterleitung darf den `Strict-Transport-Security`-Header nicht enthalten, da die Anfrage unsicheres HTTP verwendet hat,
aber der Header muss nur über HTTPS gesendet werden.
Nachdem der Browser der Weiterleitung gefolgt ist und eine neue Anfrage über HTTPS gemacht hat, sollte die Antwort
den `Strict-Transport-Security`-Header enthalten, um sicherzustellen, dass zukünftige Versuche, eine `http`-URL zu laden,
sofort HTTPS verwenden, ohne dass eine Weiterleitung erforderlich ist.

Eine Schwäche von HSTS ist, dass es nicht wirksam wird, bis der Browser mindestens eine sichere Verbindung zum Host hergestellt hat
und den `Strict-Transport-Security`-Header empfangen hat.
Wenn der Browser eine unsichere `http`-URL lädt, bevor er weiß, dass der Host ein HSTS-Host ist, ist die erste Anfrage
anfällig für Netzwerkangriffe.
[Preloading](#vorladen_von_strict_transport_security) mildert dieses Problem.

### Beispiel-Szenario für Strict Transport Security

1. Zu Hause besucht der Benutzer `http://example.com/` zum ersten Mal.
2. Da das URL-Schema `http` lautet und der Browser es nicht in seiner HSTS-Hostliste hat, erfolgt die Verbindung über unsicheres HTTP.
3. Der Server antwortet mit einem `301 Moved Permanently`-Redirect zu `https://example.com/`.
4. Der Browser macht eine neue Anfrage, diesmal über HTTPS.
5. Die über HTTPS erhobene Antwort enthält den Header:

   ```http
   Strict-Transport-Security: max-age=31536000; includeSubDomains
   ```

   Der Browser merkt sich `example.com` als HSTS-Host und dass `includeSubDomains` angegeben wurde.

6. Ein paar Wochen später ist der Benutzer am Flughafen und entscheidet sich, das kostenlose Wi-Fi zu nutzen. Aber unwissentlich verbinden sie sich mit einem betrügerischen Zugangspunkt auf dem Laptop eines Angreifers.
7. Der Benutzer öffnet `http://login.example.com/`. Da der Browser sich `example.com` als HSTS-Host merkt und die `includeSubDomains`-Direktive verwendet wurde, verwendet der Browser HTTPS.
8. Der Angreifer fängt die Anfrage mit einem betrügerischen HTTPS-Server ab, hat jedoch kein gültiges Zertifikat für die Domain.
9. Der Browser zeigt einen Fehler mit ungültigem Zertifikat an und erlaubt dem Benutzer nicht, ihn zu umgehen, wodurch verhindert wird, dass sie ihr Passwort an den Angreifer übermitteln.

### Vorladen von Strict Transport Security

Google pflegt einen [HSTS-Vorlade-Service](https://hstspreload.org/).
Durch das Befolgen der Richtlinien und das erfolgreiche Einreichen Ihrer Domain können Sie sicherstellen, dass Browser nur über sichere Verbindungen mit Ihrer Domain verbinden.
Obwohl der Dienst von Google gehostet wird, verwenden alle Browser diese Vorladeliste.
Es ist jedoch nicht Teil der HSTS-Spezifikation und sollte nicht als offiziell angesehen werden.

- Informationen zur HSTS-Vorladeliste in Chrome: https://www.chromium.org/hsts/
- Konsultation der Firefox HSTS-Vorladeliste: [nsSTSPreloadList.inc](https://searchfox.org/firefox-main/source/security/manager/ssl/nsSTSPreloadList.inc)

## Beispiele

### Verwendung von Strict-Transport-Security

Alle aktuellen und zukünftigen Subdomains werden für eine `max-age` von 1 Jahr über HTTPS aufgerufen.
Dies blockiert den Zugriff auf Seiten oder Subdomains, die nur über HTTP bereitgestellt werden können.

```http
Strict-Transport-Security: max-age=31536000; includeSubDomains
```

Obwohl ein `max-age` von 1 Jahr für eine Domain akzeptabel ist, wird ein Wert von zwei Jahren empfohlen, wie unter https://hstspreload.org erläutert.

Im folgenden Beispiel wird `max-age` auf 2 Jahre gesetzt und mit `preload` versehen, was notwendig ist für die Aufnahme in die HSTS-Vorladelisten aller großen Webbrowser wie Chromium, Edge und Firefox.

```http
Strict-Transport-Security: max-age=63072000; includeSubDomains; preload
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Funktionen, die auf sichere Kontexte beschränkt sind](/de/docs/Web/Security/Secure_Contexts/features_restricted_to_secure_contexts)
- [HTTP Strict Transport Security has landed!](https://blog.sidstamm.com/2010/08/http-strict-transport-security-has.html) auf blog.sidstamm.com (2010)
- [HTTP Strict Transport Security (force HTTPS)](https://hacks.mozilla.org/2010/08/firefox-4-http-strict-transport-security-force-https/) auf hacks.mozilla.org (2010)
- [HTTP Strict Transport Security](https://cheatsheetseries.owasp.org/cheatsheets/HTTP_Strict_Transport_Security_Cheat_Sheet.html) Cheat Sheet auf owasp.org
- [HTTP Strict Transport Security](https://en.wikipedia.org/wiki/HTTP_Strict_Transport_Security) auf Wikipedia
- [HSTS Preload Service](https://hstspreload.org/)
