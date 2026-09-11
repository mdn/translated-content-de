---
title: Strict-Transport-Security header
short-title: Strict-Transport-Security
slug: Web/HTTP/Reference/Headers/Strict-Transport-Security
l10n:
  sourceCommit: 8b0250d2e2bd4676046dbb441da91f7cefc32507
---

Der HTTP-**`Strict-Transport-Security`**-{{Glossary("response_header", "Response-Header")}} (oft als {{Glossary("HSTS", "HSTS")}} abgekürzt) informiert Browser darüber, dass auf den {{Glossary("host", "Host")}} nur über HTTPS zugegriffen werden soll und dass alle zukünftigen Versuche, über HTTP darauf zuzugreifen, automatisch auf HTTPS umgestellt werden sollen.
Darüber hinaus erlaubt der Browser bei zukünftigen Verbindungen zum Host dem Benutzer nicht, sichere Verbindungsfehler, beispielsweise ein ungültiges Zertifikat, zu umgehen.
HSTS identifiziert einen Host ausschließlich anhand seines Domainnamens.

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
  - : Die Zeit in Sekunden, für die der Browser speichern soll, dass auf einen Host nur über HTTPS zugegriffen werden darf.
- `includeSubDomains` {{optional_inline}}
  - : Wenn diese Direktive angegeben wird, gilt die HSTS-Richtlinie auch für alle Subdomains der Domain des Hosts.
- `preload` {{optional_inline}} {{non-standard_inline}}
  - : Einzelheiten finden Sie unter [Preloading Strict Transport Security](#preloading_von_strict_transport_security). Bei Verwendung von `preload` muss die Direktive `max-age` mindestens `31536000` (1 Jahr) betragen und die Direktive `includeSubDomains` muss vorhanden sein.

## Beschreibung

Der Header `Strict-Transport-Security` informiert den Browser darüber, dass alle Verbindungen zum Host HTTPS verwenden müssen.
Obwohl es sich um einen Response-Header handelt, beeinflusst er nicht, wie der Browser die aktuelle Antwort verarbeitet, sondern wie er zukünftige Anfragen stellt.

Wenn eine HTTPS-Antwort den Header `Strict-Transport-Security` enthält, fügt der Browser den Domainnamen des Hosts seiner persistenten Liste von HSTS-Hosts hinzu.
Wenn der Domainname bereits in der Liste enthalten ist, werden die Ablaufzeit und die Direktive `includeSubDomains` aktualisiert.
Der Host wird nur anhand seines Domainnamens identifiziert. Eine IP-Adresse kann kein HSTS-Host sein.
HSTS gilt für alle Ports des Hosts, unabhängig davon, welcher Port für die Anfrage verwendet wurde.

Bevor eine `http`-URL geladen wird, prüft der Browser den Domainnamen anhand seiner Liste von HSTS-Hosts.
Wenn der Domainname ohne Berücksichtigung der Groß- und Kleinschreibung mit einem HSTS-Host übereinstimmt oder eine Subdomain eines Hosts ist, der `includeSubDomains` angegeben hat,
ersetzt der Browser das URL-Schema durch `https`.
Wenn die URL Port 80 angibt, ändert der Browser ihn in 443.
Jede andere explizite Portnummer bleibt unverändert und der Browser verbindet sich über HTTPS mit diesem Port.

Wenn beim Verbinden mit einem HSTS-Host eine TLS-Warnung oder ein TLS-Fehler auftritt, beispielsweise ein ungültiges Zertifikat,
bietet der Browser dem Benutzer keine Möglichkeit, fortzufahren oder die Fehlermeldung zu „überklicken“, da dies
die Absicht strenger Sicherheit beeinträchtigen würde.

> [!NOTE]
> Der Host muss den Header `Strict-Transport-Security` nur über HTTPS senden, nicht über unsicheres HTTP.
> Browser ignorieren den Header, wenn er über HTTP gesendet wird, um zu verhindern, dass ein [Man-in-the-Middle-Angreifer (MITM)](/de/docs/Web/Security/Attacks/MITM)
> den Header verändert, damit er vorzeitig abläuft, oder ihn für einen Host hinzufügt, der HTTPS nicht unterstützt.

### Ablauf

Jedes Mal, wenn der Browser einen Header `Strict-Transport-Security` empfängt, aktualisiert er die HSTS-Ablaufzeit des Hosts, indem er
`max-age` zur aktuellen Zeit addiert.
Die Verwendung eines festen Werts für `max-age` kann verhindern, dass HSTS abläuft, da jede nachfolgende Antwort die Ablaufzeit weiter in die Zukunft verschiebt.

Wenn der Header `Strict-Transport-Security` in einer Antwort eines Hosts fehlt, der zuvor einen gesendet hat, bleibt der vorherige Header bis zu seiner Ablaufzeit wirksam.

Um HSTS zu deaktivieren, setzen Sie `max-age=0`.
Dies wird erst wirksam, wenn der Browser eine sichere Anfrage stellt und den Response-Header empfängt.
HSTS kann absichtlich nicht über unsicheres HTTP deaktiviert werden.

### Subdomains

Die Direktive `includeSubDomains` weist den Browser an, die HSTS-Richtlinie einer Domain auch auf deren Subdomains anzuwenden.
Eine HSTS-Richtlinie für `secure.example.com` mit `includeSubDomains` gilt auch für `login.secure.example.com`
und `admin.login.secure.example.com`. Sie gilt jedoch nicht für `example.com` oder `insecure.example.com`.

Jeder Subdomain-Host sollte in seinen Antworten `Strict-Transport-Security`-Header enthalten, selbst wenn die
übergeordnete Domain `includeSubDomains` verwendet, da ein Browser einen Subdomain-Host kontaktieren kann, bevor er die übergeordnete Domain kontaktiert.
Wenn beispielsweise `example.com` den HSTS-Header mit `includeSubDomains` enthält, aber alle vorhandenen Links
direkt zu `www.example.com` führen, wird der Browser den HSTS-Header von `example.com` niemals sehen.
Daher sollte auch `www.example.com` HSTS-Header senden.

Der Browser speichert die HSTS-Richtlinie für jede Domain und Subdomain unabhängig von der Direktive `includeSubDomains`.
Wenn sowohl `example.com` als auch `login.example.com` HSTS-Header senden, speichert der Browser zwei separate HSTS-Richtlinien,
die unabhängig voneinander ablaufen können. Wenn `example.com` `includeSubDomains` verwendet hat, bleibt `login.example.com` abgedeckt,
wenn eine der beiden Richtlinien abläuft.

Wenn `max-age=0` ist, hat `includeSubDomains` keine Wirkung, da die Domain, die `includeSubDomains` angegeben hat,
sofort aus der Liste der HSTS-Hosts gelöscht wird; dadurch werden separate HSTS-Richtlinien der einzelnen Subdomains nicht gelöscht.

### Unsichere HTTP-Anfragen

Wenn der Host unsichere HTTP-Anfragen akzeptiert, sollte er mit einer permanenten Weiterleitung antworten (beispielsweise mit dem Statuscode {{HTTPStatus("301")}}),
die eine `https`-URL im Header {{HTTPHeader("Location")}} enthält.
Die Weiterleitung darf den Header `Strict-Transport-Security` nicht enthalten, da die Anfrage unsicheres HTTP verwendet hat,
der Header jedoch nur über HTTPS gesendet werden darf.
Nachdem der Browser der Weiterleitung gefolgt ist und eine neue Anfrage über HTTPS gestellt hat, sollte die Antwort
den Header `Strict-Transport-Security` enthalten, damit zukünftige Versuche, eine `http`-URL zu laden,
sofort HTTPS verwenden, ohne eine Weiterleitung zu benötigen.

Eine Schwäche von HSTS besteht darin, dass es erst wirksam wird, nachdem der Browser mindestens eine sichere Verbindung zum Host hergestellt
und den Header `Strict-Transport-Security` empfangen hat.
Wenn der Browser eine unsichere `http`-URL lädt, bevor bekannt ist, dass der Host ein HSTS-Host ist, ist die erste Anfrage
anfällig für Netzwerkangriffe.
[Preloading](#preloading_von_strict_transport_security) mindert dieses Problem.

### Beispielszenario für Strict Transport Security

1. Zu Hause besucht der Benutzer erstmals `http://example.com/`.
2. Da das URL-Schema `http` ist und der Browser es nicht in seiner Liste von HSTS-Hosts hat, verwendet die Verbindung unsicheres HTTP.
3. Der Server antwortet mit einer Weiterleitung `301 Moved Permanently` zu `https://example.com/`.
4. Der Browser stellt eine neue Anfrage, diesmal über HTTPS.
5. Die über HTTPS erfolgte Antwort enthält den Header:

   ```http
   Strict-Transport-Security: max-age=31536000; includeSubDomains
   ```

   Der Browser merkt sich `example.com` als HSTS-Host und dass `includeSubDomains` angegeben wurde.

6. Einige Wochen später befindet sich der Benutzer am Flughafen und beschließt, das kostenlose WLAN zu verwenden. Unwissentlich verbindet er sich jedoch mit einem bösartigen Access Point, der auf dem Laptop eines Angreifers läuft.
7. Der Benutzer öffnet `http://login.example.com/`. Da sich der Browser `example.com` als HSTS-Host merkt und die Direktive `includeSubDomains` verwendet wurde, verwendet der Browser HTTPS.
8. Der Angreifer fängt die Anfrage mit einem gefälschten HTTPS-Server ab, besitzt jedoch kein gültiges Zertifikat für die Domain.
9. Der Browser zeigt einen Fehler wegen eines ungültigen Zertifikats an und erlaubt dem Benutzer nicht, diesen zu umgehen. Dadurch wird verhindert, dass er dem Angreifer sein Passwort gibt.

### Preloading von Strict Transport Security

Google betreibt [einen HSTS-Preload-Service](https://hstspreload.org/).
Indem Sie die Richtlinien befolgen und Ihre Domain erfolgreich einreichen, können Sie sicherstellen, dass Browser sich mit Ihrer Domain nur über sichere Verbindungen verbinden.
Obwohl der Service von Google gehostet wird, verwenden alle Browser diese Preload-Liste.
Er ist jedoch nicht Teil der HSTS-Spezifikation und sollte nicht als offiziell angesehen werden.

- Informationen zur HSTS-Preload-Liste in Chrome: https://www.chromium.org/hsts/
- Einsichtnahme in die Firefox-HSTS-Preload-Liste: [nsSTSPreloadList.inc](https://searchfox.org/firefox-main/source/security/manager/ssl/nsSTSPreloadList.inc)

## Beispiele

### Verwendung von Strict-Transport-Security

Alle gegenwärtigen und zukünftigen Subdomains verwenden für eine `max-age` von 1 Jahr HTTPS.
Dadurch wird der Zugriff auf Seiten oder Subdomains blockiert, die nur über HTTP bereitgestellt werden können.

```http
Strict-Transport-Security: max-age=31536000; includeSubDomains
```

Eine `max-age` von 1 Jahr ist der Mindestwert, der für HSTS-Preloading akzeptiert wird. Das folgende Beispiel verwendet 2 Jahre; dies ist der Wert, der im Beispiel-Header auf https://hstspreload.org angezeigt wird.

Im folgenden Beispiel wird `max-age` auf 2 Jahre gesetzt und mit `preload` ergänzt, was für die Aufnahme in die HSTS-Preload-Listen aller wichtigen Webbrowser wie Chromium, Edge und Firefox erforderlich ist.

```http
Strict-Transport-Security: max-age=63072000; includeSubDomains; preload
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Auf sichere Kontexte beschränkte Funktionen](/de/docs/Web/Security/Defenses/Secure_Contexts/features_restricted_to_secure_contexts)
- [HTTP Strict Transport Security has landed!](https://blog.sidstamm.com/2010/08/http-strict-transport-security-has.html) auf blog.sidstamm.com (2010)
- [HTTP Strict Transport Security (force HTTPS)](https://hacks.mozilla.org/2010/08/firefox-4-http-strict-transport-security-force-https/) auf hacks.mozilla.org (2010)
- [HTTP Strict Transport Security](https://cheatsheetseries.owasp.org/cheatsheets/HTTP_Strict_Transport_Security_Cheat_Sheet.html)-Cheatsheet auf owasp.org
- [HTTP Strict Transport Security](https://en.wikipedia.org/wiki/HTTP_Strict_Transport_Security) auf Wikipedia
- [HSTS-Preload-Service](https://hstspreload.org/)
