---
title: Strict-Transport-Security header
short-title: Strict-Transport-Security
slug: Web/HTTP/Reference/Headers/Strict-Transport-Security
l10n:
  sourceCommit: ad5b5e31f81795d692e66dadb7818ba8b220ad15
---

Der HTTP-**`Strict-Transport-Security`**-{{Glossary("response_header", "Antwort-Header")}} (oftmals als {{Glossary("HSTS", "HSTS")}} abgekürzt) informiert Browser, dass der {{Glossary("host", "Host")}} nur über HTTPS zugänglich sein sollte und dass zukünftige Zugriffsversuche über HTTP automatisch auf HTTPS aktualisiert werden sollten.
Zusätzlich wird der Browser bei zukünftigen Verbindungen zum Host dem Nutzer nicht gestatten, sichere Verbindungsfehler, wie z. B. ein ungültiges Zertifikat, zu umgehen.
HSTS identifiziert einen Host nur durch seinen Domainnamen.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Response_header", "Antwort-Header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_request_header", "Verbotener Anfrage-Header")}}</th>
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
  - : Die Zeit in Sekunden, die der Browser sich merken soll, dass ein Host nur über HTTPS zu erreichen ist.
- `includeSubDomains` {{optional_inline}}
  - : Wenn diese Direktive angegeben ist, gilt die HSTS-Politik auch für alle Subdomains der Domain des Hosts.
- `preload` {{optional_inline}} {{non-standard_inline}}
  - : Siehe [Preloading Strict Transport Security](#preloading_strict_transport_security) für Details. Bei Verwendung von `preload` muss die `max-age`-Direktive mindestens `31536000` (1 Jahr) betragen und die `includeSubDomains`-Direktive muss vorhanden sein.

## Beschreibung

Der `Strict-Transport-Security`-Header informiert den Browser, dass alle Verbindungen zum Host über HTTPS erfolgen müssen.
Obwohl es sich um einen Antwort-Header handelt, beeinflusst er nicht, wie der Browser die aktuelle Antwort behandelt, sondern
wie er zukünftige Anfragen durchführt.

Wenn eine HTTPS-Antwort den `Strict-Transport-Security`-Header enthält, fügt der Browser den Domainnamen des Hosts
seiner persistierenden Liste von HSTS-Hosts hinzu.
Wenn der Domainname bereits in der Liste ist, werden die Ablaufzeit und die `includeSubDomains`-Direktive aktualisiert.
Der Host wird nur durch seinen Domainnamen identifiziert. Eine IP-Adresse kann kein HSTS-Host sein.
HSTS gilt für alle Ports des Hosts, unabhängig davon, welcher Port für die Anfrage verwendet wurde.

Bevor eine `http`-URL geladen wird, überprüft der Browser den Domainnamen gegen seine HSTS-Host-Liste.
Wenn der Domainname eine nicht unterscheidbare Übereinstimmung für einen HSTS-Host ist oder eine Subdomain von einem ist, der `includeSubDomains` spezifizierte,
dann ersetzt der Browser das URL-Schema durch `https`.
Wenn die URL Port 80 spezifiziert, ändert der Browser diesen in 443.
Jede andere explizite Portnummer bleibt unverändert, und der Browser verbindet sich zu diesem Port unter Verwendung von HTTPS.

Wenn eine TLS-Warnung oder -Fehler, wie z. B. ein ungültiges Zertifikat, beim Verbinden mit einem HSTS-Host auftritt,
bietet der Browser dem Nutzer keine Möglichkeit an, die Fehlermeldung zu umgehen oder "durchzuklicken", was die Absicht der strengen Sicherheit gefährden würde.

> [!NOTE]
> Der Host muss den `Strict-Transport-Security`-Header nur über HTTPS senden, nicht über unsicheres HTTP.
> Browser ignorieren den Header, wenn er über HTTP gesendet wird, um zu verhindern, dass ein [Manipulator-in-the-Middle (MITM)](/de/docs/Web/Security/Attacks/MITM)
> den Header verändert, um ihn vorzeitig ablaufen zu lassen oder ihn für einen Host hinzuzufügen, der HTTPS nicht unterstützt.

### Ablauf

Jedes Mal, wenn der Browser einen `Strict-Transport-Security`-Header erhält, aktualisiert er die Ablaufzeit des Host-HSTS,
indem `max-age` zur aktuellen Zeit addiert wird.
Die Verwendung eines festen Wertes für `max-age` kann verhindern, dass HSTS abläuft, da jede nachfolgende Antwort das Ablaufdatum weiter in die Zukunft verschiebt.

Wenn der `Strict-Transport-Security`-Header in einer Antwort eines Hosts fehlt, die zuvor einen gesendet hatte, bleibt der vorherige Header bis zu seiner Ablaufzeit in Kraft.

Um HSTS zu deaktivieren, setzen Sie `max-age=0`.
Dies tritt nur in Kraft, sobald der Browser eine sichere Anfrage stellt und den Antwort-Header erhält.
Aus Designgründen kann HSTS nicht über unsicheres HTTP deaktiviert werden.

### Subdomains

Die `includeSubDomains`-Direktive weist den Browser an, die HSTS-Politik einer Domain auch auf ihre Subdomains anzuwenden.
Eine HSTS-Politik für `secure.example.com` mit `includeSubDomains` gilt auch für `login.secure.example.com`
und `admin.login.secure.example.com`. Sie gilt jedoch nicht für `example.com` oder `insecure.example.com`.

Jeder Subdomain-Host sollte `Strict-Transport-Security`-Header in seinen Antworten enthalten, auch wenn die
übergeordnete Domain `includeSubDomains` verwendet, da ein Browser möglicherweise Kontakt zu einem Subdomain-Host aufnimmt, bevor die übergeordnete Domain erreicht wird.
Wenn z. B. `example.com` den HSTS-Header mit `includeSubDomains` enthält, aber alle bestehenden Links
direkt zu `www.example.com` führen, wird der Browser nie den HSTS-Header von `example.com` sehen.
Deshalb sollte auch `www.example.com` HSTS-Header senden.

Der Browser speichert die HSTS-Politik für jede Domain und Subdomain unabhängig voneinander, unabhängig von der `includeSubDomains`-Direktive.
Wenn sowohl `example.com` als auch `login.example.com` HSTS-Header senden, speichert der Browser zwei separate HSTS-Politiken,
und sie können unabhängig voneinander ablaufen. Wenn `example.com` `includeSubDomains` verwendet hat, dann bleibt `login.example.com` abgedeckt,
wenn eine der Politiken abläuft.

Wenn `max-age=0` ist, hat `includeSubDomains` keinen Effekt, da die Domain, die `includeSubDomains` spezifiziert hat, sofort aus der HSTS-Host-Liste gelöscht wird; dies löscht jedoch nicht die separaten HSTS-Politiken jeder Subdomain.

### Unsichere HTTP-Anfragen

Wenn der Host unsichere HTTP-Anfragen akzeptiert, sollte er mit einem permanenten Redirect (z. B. Statuscode {{HTTPStatus("301")}})
antworten, der eine `https`-URL im {{HTTPHeader("Location")}}-Header enthält.
Der Redirect darf den `Strict-Transport-Security`-Header nicht enthalten, da die Anfrage unsicheres HTTP verwendet hat,
aber der Header muss nur über HTTPS gesendet werden.
Nachdem der Browser dem Redirect gefolgt ist und eine neue Anfrage über HTTPS gestellt hat, sollte die Antwort
den `Strict-Transport-Security`-Header enthalten, um sicherzustellen, dass zukünftige Versuche, eine `http`-URL zu laden,
sofort HTTPS verwenden, ohne dass ein Redirect erforderlich ist.

Eine Schwäche von HSTS ist, dass es erst in Kraft tritt, nachdem der Browser mindestens einmal eine sichere Verbindung zum Host hergestellt und den `Strict-Transport-Security`-Header erhalten hat.
Wenn der Browser eine unsichere `http`-URL lädt, bevor er weiß, dass der Host ein HSTS-Host ist, ist die erste Anfrage
anfällig für Netzwerkangriffe.
[Preloading](#preloading_strict_transport_security) mildert dieses Problem ab.

### Beispielszenario für Strict Transport Security

1. Zu Hause besucht der Nutzer `http://example.com/` zum ersten Mal.
2. Da das URL-Schema `http` ist und der Browser diesen nicht in seiner HSTS-Host-Liste hat, verwendet die Verbindung unsicheres HTTP.
3. Der Server antwortet mit einem `301 Moved Permanently` Redirect zu `https://example.com/`.
4. Der Browser stellt eine neue Anfrage, diesmal über HTTPS.
5. Die Antwort, die über HTTPS erfolgt, enthält den Header:

   ```http
   Strict-Transport-Security: max-age=31536000; includeSubDomains
   ```

   Der Browser merkt sich `example.com` als HSTS-Host und dass er `includeSubDomains` spezifiziert hat.

6. Ein paar Wochen später ist der Nutzer am Flughafen und beschließt, das kostenlose WLAN zu nutzen. Aber unwissentlich verbindet er sich mit einem bösartigen Zugangspunkt, der auf dem Laptop eines Angreifers läuft.
7. Der Nutzer öffnet `http://login.example.com/`. Da der Browser `example.com` als HSTS-Host erinnert und die `includeSubDomains`-Direktive verwendet wurde, verwendet der Browser HTTPS.
8. Der Angreifer fängt die Anfrage mit einem gefälschten HTTPS-Server ab, hat aber kein gültiges Zertifikat für die Domain.
9. Der Browser zeigt einen ungültigen Zertifikatfehler an und erlaubt es dem Nutzer nicht, diesen zu umgehen, wodurch verhindert wird, dass das Passwort des Nutzers an den Angreifer gelangt.

### Preloading Strict Transport Security

Google pflegt einen [HSTS Preload-Service](https://hstspreload.org/).
Durch das Befolgen der Richtlinien und das erfolgreiche Einreichen Ihrer Domain können Sie sicherstellen, dass Browser nur über sichere Verbindungen zu Ihrer Domain verbinden.
Obwohl der Dienst von Google gehostet wird, verwenden alle Browser diese Preload-Liste.
Es ist jedoch nicht Teil der HSTS-Spezifikation und sollte nicht als offiziell betrachtet werden.

- Informationen zur HSTS-Preload-Liste in Chrome: https://www.chromium.org/hsts/
- Einsichtnahme in die HSTS-Preload-Liste von Firefox: [nsSTSPreloadList.inc](https://searchfox.org/mozilla-central/source/security/manager/ssl/nsSTSPreloadList.inc)

## Beispiele

### Verwendung von Strict-Transport-Security

Alle gegenwärtigen und zukünftigen Subdomains werden für eine `max-age` von 1 Jahr HTTPS sein.
Dies blockiert den Zugriff auf Seiten oder Subdomains, die nur über HTTP bereitgestellt werden können.

```http
Strict-Transport-Security: max-age=31536000; includeSubDomains
```

Obwohl eine `max-age` von 1 Jahr für eine Domain akzeptabel ist, wird ein Wert von zwei Jahren empfohlen, wie auf https://hstspreload.org erklärt.

Im folgenden Beispiel ist `max-age` auf 2 Jahre eingestellt und wird mit `preload` versehen, was für die Aufnahme in alle wichtigen Webbrowser-HSTS-Preload-Listen erforderlich ist, wie Chromium, Edge und Firefox.

```http
Strict-Transport-Security: max-age=63072000; includeSubDomains; preload
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Merkmale, die auf sichere Kontexte beschränkt sind](/de/docs/Web/Security/Secure_Contexts/features_restricted_to_secure_contexts)
- [HTTP Strict Transport Security ist angekommen!](https://blog.sidstamm.com/2010/08/http-strict-transport-security-has.html) auf blog.sidstamm.com (2010)
- [HTTP Strict Transport Security (erzwingt HTTPS)](https://hacks.mozilla.org/2010/08/firefox-4-http-strict-transport-security-force-https/) auf hacks.mozilla.org (2010)
- [HTTP Strict Transport Security](https://cheatsheetseries.owasp.org/cheatsheets/HTTP_Strict_Transport_Security_Cheat_Sheet.html) Cheatsheet auf owasp.org
- [HTTP Strict Transport Security](https://en.wikipedia.org/wiki/HTTP_Strict_Transport_Security) auf Wikipedia
- [HSTS Preload Service](https://hstspreload.org/)
