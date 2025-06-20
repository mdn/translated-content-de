---
title: Strict-Transport-Security header
short-title: Strict-Transport-Security
slug: Web/HTTP/Reference/Headers/Strict-Transport-Security
l10n:
  sourceCommit: 7174049d9b2ba4de615e1ca34980433ada4ba2d0
---

{{HTTPSidebar}}

Der HTTP **`Strict-Transport-Security`** {{Glossary("response_header", "Antwort-Header")}} (oftmals als {{Glossary("HSTS", "HSTS")}} abgekürzt) informiert Browser, dass der {{Glossary("host", "Host")}} nur über HTTPS zugegriffen werden sollte und dass alle zukünftigen Zugriffsversuche über HTTP automatisch auf HTTPS aktualisiert werden sollen. Zusätzlich wird der Browser bei zukünftigen Verbindungen zum Host dem Benutzer nicht erlauben, sichere Verbindungsfehler, wie ein ungültiges Zertifikat, zu umgehen. HSTS identifiziert einen Host nur über seinen Domainnamen.

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
  - : Die Zeit in Sekunden, die der Browser sich merken soll, dass ein Host nur über HTTPS zugegriffen werden darf.
- `includeSubDomains` {{optional_inline}}
  - : Falls diese Direktive angegeben ist, gilt die HSTS-Richtlinie auch für alle Subdomains der Domain des Hosts.
- `preload` {{optional_inline}} {{non-standard_inline}}
  - : Siehe [Preloading Strict Transport Security](#preloading_strict_transport_security) für Details. Wenn `preload` verwendet wird, muss die `max-age`-Direktive mindestens `31536000` (1 Jahr) betragen, und die `includeSubDomains`-Direktive muss vorhanden sein.

## Beschreibung

Der `Strict-Transport-Security` Header informiert den Browser, dass alle Verbindungen zum Host über HTTPS erfolgen müssen. Obwohl es sich um einen Antwort-Header handelt, beeinflusst er nicht, wie der Browser die aktuelle Antwort behandelt, sondern wie er zukünftige Anfragen stellt.

Wenn eine HTTPS-Antwort den `Strict-Transport-Security` Header enthält, fügt der Browser den Domainnamen des Hosts seiner persistenten Liste von HSTS-Hosts hinzu. Falls der Domainname bereits in der Liste ist, werden die Ablaufzeit und die `includeSubDomains`-Direktive aktualisiert. Der Host wird ausschließlich anhand seines Domainnamens identifiziert. Eine IP-Adresse kann kein HSTS-Host sein. HSTS gilt für alle Ports des Hosts, unabhängig davon, welcher Port für die Anfrage verwendet wurde.

Bevor eine `http`-URL geladen wird, prüft der Browser den Domainnamen gegen seine Liste von HSTS-Hosts. Wenn der Domainname eine nicht case-sensitive Übereinstimmung mit einem HSTS-Host ist oder eine Subdomain von einem ist, der `includeSubDomains` spezifiziert hat, dann ersetzt der Browser das URL-Schema durch `https`. Wenn die URL Port 80 angibt, ändert der Browser ihn zu 443. Jede andere explizite Portnummer bleibt unverändert, und der Browser stellt die Verbindung zu diesem Port über HTTPS her.

Wenn eine TLS-Warnung oder ein Fehler, wie ein ungültiges Zertifikat, bei der Verbindung zu einem HSTS-Host auftritt, bietet der Browser dem Benutzer keine Möglichkeit, die Fehlernachricht zu umgehen oder zu "überspringen", was die Absicht der strikten Sicherheit untergraben würde.

> [!NOTE]
> Der Host muss den `Strict-Transport-Security` Header nur über HTTPS senden, nicht unsicheres HTTP. Browser ignorieren den Header, wenn er über HTTP gesendet wird, um einen [Man-in-the-Middle (MITM)](/de/docs/Web/Security/Attacks/MITM) Angriff zu verhindern, der den Header manipuliert, um vorzeitig zu verfallen oder ihn für einen Host hinzuzufügen, der HTTPS nicht unterstützt.

### Ablauf

Jedes Mal, wenn der Browser einen `Strict-Transport-Security` Header erhält, aktualisiert er die HSTS-Ablaufzeit des Hosts, indem er `max-age` zur aktuellen Zeit hinzufügt. Die Verwendung eines festen Wertes für `max-age` kann verhindern, dass HSTS abläuft, da jede nachfolgende Antwort die Ablaufzeit weiter in die Zukunft verschiebt.

Wenn der `Strict-Transport-Security` Header in einer Antwort von einem Host fehlt, der zuvor einen gesendet hat, bleibt der vorherige Header bis zu seiner Ablaufzeit in Kraft.

Um HSTS zu deaktivieren, setzen Sie `max-age=0`. Dies wird erst wirksam, wenn der Browser eine sichere Anfrage stellt und den Antwort-Header erhält. Sie können HSTS nicht über unsicheres HTTP deaktivieren.

### Subdomains

Die `includeSubDomains` Direktive weist den Browser an, die HSTS-Richtlinie einer Domain auch auf ihre Subdomains anzuwenden. Eine HSTS-Richtlinie für `secure.example.com` mit `includeSubDomains` gilt auch für `login.secure.example.com` und `admin.login.secure.example.com`. Aber sie gilt nicht für `example.com` oder `insecure.example.com`.

Jeder Subdomain-Host sollte `Strict-Transport-Security` Header in seinen Antworten enthalten, selbst wenn die Superdomain `includeSubDomains` verwendet, da ein Browser möglicherweise einen Subdomain-Host vor der Superdomain kontaktiert. Zum Beispiel, wenn `example.com` den HSTS-Header mit `includeSubDomains` enthält, aber alle bestehenden Links direkt zu `www.example.com` gehen, wird der Browser nie den HSTS-Header von `example.com` sehen. Daher sollte auch `www.example.com` HSTS-Header senden.

Der Browser speichert die HSTS-Richtlinie für jede Domain und Subdomain unabhängig, unabhängig von der `includeSubDomains` Direktive. Wenn sowohl `example.com` als auch `login.example.com` HSTS-Header senden, speichert der Browser zwei separate HSTS-Richtlinien, und sie können unabhängig ablaufen. Wenn `example.com` `includeSubDomains` verwendet hat, bleibt `login.example.com` abgedeckt, falls eine der Richtlinien abläuft.

Wenn `max-age=0`, hat `includeSubDomains` keine Wirkung, da die Domain, die `includeSubDomains` spezifiziert hat, sofort aus der HSTS-Host-Liste gelöscht wird; dies löscht nicht die separaten HSTS-Richtlinien jeder Subdomain.

### Unsichere HTTP-Anfragen

Wenn der Host unsichere HTTP-Anfragen akzeptiert, sollte er mit einer permanenten Weiterleitung (wie Statuscode {{HTTPStatus("301")}}) antworten, die eine `https` URL im {{HTTPHeader("Location")}} Header enthält. Die Weiterleitung sollte den `Strict-Transport-Security` Header nicht enthalten, da die Anfrage unsicheres HTTP verwendet hat, aber der Header muss nur über HTTPS gesendet werden. Nachdem der Browser der Weiterleitung gefolgt ist und eine neue Anfrage mit HTTPS gestellt hat, sollte die Antwort den `Strict-Transport-Security` Header enthalten, um sicherzustellen, dass zukünftige Versuche, eine `http` URL zu laden, sofort HTTPS verwenden, ohne eine Weiterleitung zu erfordern.

Ein Schwachpunkt von HSTS ist, dass es erst wirksam wird, nachdem der Browser mindestens eine sichere Verbindung zum Host hergestellt und den `Strict-Transport-Security` Header erhalten hat. Wenn der Browser eine unsichere `http` URL lädt, bevor er weiß, dass der Host ein HSTS-Host ist, ist die anfängliche Anfrage anfällig für Netzwerkangriffe. Das [Preloading](#preloading_strict_transport_security) mildert dieses Problem.

### Beispiel-Szenario für strenge Transportsicherheit

1. Zu Hause besucht der Benutzer `http://example.com/` zum ersten Mal.
2. Da das URL-Schema `http` ist und der Browser es nicht in seiner HSTS-Host-Liste hat, erfolgt die Verbindung über unsicheres HTTP.
3. Der Server antwortet mit einem `301 Moved Permanently` Redirect zu `https://example.com/`.
4. Der Browser stellt eine neue Anfrage, diesmal über HTTPS.
5. Die Antwort, die über HTTPS erfolgt, enthält den Header:

   ```http
   Strict-Transport-Security: max-age=31536000; includeSubDomains
   ```

   Der Browser merkt sich `example.com` als HSTS-Host und dass `includeSubDomains` angegeben wurde.

6. Einige Wochen später ist der Benutzer am Flughafen und entscheidet sich, das kostenlose Wi-Fi zu nutzen. Aber ohne es zu wissen, stellt er eine Verbindung zu einem bösartigen Zugangspunkt auf dem Laptop eines Angreifers her.
7. Der Benutzer öffnet `http://login.example.com/`. Da der Browser sich `example.com` als HSTS-Host merkt und die `includeSubDomains` Direktive verwendet wurde, verwendet der Browser HTTPS.
8. Der Angreifer interceptiert die Anfrage mit einem gefälschten HTTPS-Server, hat aber kein gültiges Zertifikat für die Domain.
9. Der Browser zeigt einen ungültigen Zertifikatfehler an und erlaubt dem Benutzer nicht, ihn zu umgehen, wodurch das Risiko vermieden wird, dass er sein Passwort an den Angreifer weitergibt.

### Preloading Strict Transport Security

Google betreibt einen [HSTS Preload-Service](https://hstspreload.org/). Indem Sie die Richtlinien befolgen und Ihre Domain erfolgreich einreichen, können Sie sicherstellen, dass Browser nur über sichere Verbindungen zu Ihrer Domain verbinden. Während der Dienst von Google gehostet wird, verwenden alle Browser diese Preload-Liste. Es ist jedoch nicht Teil der HSTS-Spezifikation und sollte nicht als offiziell betrachtet werden.

- Informationen zur HSTS-Preload-Liste in Chrome: https://www.chromium.org/hsts/
- Konsultation der Firefox HSTS-Preload-Liste: [nsSTSPreloadList.inc](https://searchfox.org/mozilla-central/source/security/manager/ssl/nsSTSPreloadList.inc)

## Beispiele

### Verwendung von Strict-Transport-Security

Alle gegenwärtigen und zukünftigen Subdomains werden für `max-age` von 1 Jahr HTTPS sein. Dies blockiert den Zugriff auf Seiten oder Subdomains, die nur über HTTP bereitgestellt werden können.

```http
Strict-Transport-Security: max-age=31536000; includeSubDomains
```

Obwohl ein `max-age` von 1 Jahr für eine Domain akzeptabel ist, wird ein Wert von zwei Jahren empfohlen, wie auf https://hstspreload.org erklärt.

Im folgenden Beispiel ist `max-age` auf 2 Jahre gesetzt und wird mit `preload` ergänzt, was erforderlich ist, um in die HSTS-Preload-Listen aller großen Webbrowser wie Chromium, Edge und Firefox aufgenommen zu werden.

```http
Strict-Transport-Security: max-age=63072000; includeSubDomains; preload
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Funktionen, die auf sichere Kontexte beschränkt sind](/de/docs/Web/Security/Secure_Contexts/features_restricted_to_secure_contexts)
- [HTTP Strict Transport Security ist da!](https://blog.sidstamm.com/2010/08/http-strict-transport-security-has.html) auf blog.sidstamm.com (2010)
- [HTTP Strict Transport Security (Erzwungene HTTPS)](https://hacks.mozilla.org/2010/08/firefox-4-http-strict-transport-security-force-https/) auf hacks.mozilla.org (2010)
- [HTTP Strict Transport Security](https://cheatsheetseries.owasp.org/cheatsheets/HTTP_Strict_Transport_Security_Cheat_Sheet.html) Cheatsheet auf owasp.org
- [HTTP Strict Transport Security](https://en.wikipedia.org/wiki/HTTP_Strict_Transport_Security) auf Wikipedia
- [HSTS Preload-Service](https://hstspreload.org/)
