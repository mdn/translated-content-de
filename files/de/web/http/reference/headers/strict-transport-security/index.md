---
title: Strict-Transport-Security header
short-title: Strict-Transport-Security
slug: Web/HTTP/Reference/Headers/Strict-Transport-Security
l10n:
  sourceCommit: 972c6cc542e271e4c00def9465d7a0cc81011378
---

Der HTTP **`Strict-Transport-Security`**-{{Glossary("response_header", "Antwortheader")}} (oft abgekürzt als {{Glossary("HSTS", "HSTS")}}) informiert Browser darüber, dass der {{Glossary("host", "Host")}} nur mit HTTPS aufgerufen werden sollte und dass alle zukünftigen Versuche, darauf über HTTP zuzugreifen, automatisch auf HTTPS hochgestuft werden sollten.
Zusätzlich wird der Browser dem Benutzer bei zukünftigen Verbindungen mit dem Host nicht erlauben, Sicherheitsfehler zu umgehen, wie ein ungültiges Zertifikat.
HSTS identifiziert einen Host nur über seinen Domainnamen.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Response_header", "Antwortheader")}}</td>
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
  - : Die Zeit in Sekunden, die der Browser sich merken soll, dass ein Host nur über HTTPS aufgerufen werden darf.
- `includeSubDomains` {{optional_inline}}
  - : Wenn diese Direktive angegeben ist, gilt die HSTS-Richtlinie auch für alle Subdomains der Domain des Hosts.
- `preload` {{optional_inline}} {{non-standard_inline}}
  - : Details siehe [Preloading Strict Transport Security](#preloading_strict_transport_security). Bei Verwendung von `preload` muss die `max-age`-Direktive mindestens `31536000` (1 Jahr) betragen, und die `includeSubDomains`-Direktive muss vorhanden sein.

## Beschreibung

Der `Strict-Transport-Security`-Header informiert den Browser, dass alle Verbindungen zum Host HTTPS verwenden müssen.
Obwohl es sich um einen Antwortheader handelt, beeinflusst es nicht, wie der Browser die aktuelle Antwort behandelt, sondern
wie er zukünftige Anfragen stellt.

Wenn eine HTTPS-Antwort den `Strict-Transport-Security`-Header enthält, fügt der Browser den Domainnamen des Hosts
zu seiner persistenten Liste der HSTS-Hosts hinzu.
Wenn der Domainname bereits in der Liste steht, werden die Ablaufzeit und die `includeSubDomains`-Direktive aktualisiert.
Der Host wird nur über seinen Domainnamen identifiziert. Eine IP-Adresse kann kein HSTS-Host sein.
HSTS gilt für alle Ports des Hosts, unabhängig davon, welcher Port für die Anfrage verwendet wurde.

Vor dem Laden einer `http`-URL überprüft der Browser den Domainnamen gegen seine HSTS-Hostliste.
Wenn der Domainname eine nicht unterscheidende Übereinstimmung für einen HSTS-Host darstellt oder eine Subdomain von einem ist, das `includeSubDomains` angegeben hat,
ersetzt der Browser das URL-Schema durch `https`.
Wenn die URL den Port 80 angibt, ändert der Browser ihn auf 443.
Jede andere explizite Portnummer bleibt unverändert, und der Browser verbindet sich über diesen Port mit HTTPS.

Wenn beim Verbinden mit einem HSTS-Host eine TLS-Warnung oder ein Fehler auftritt, wie ein ungültiges Zertifikat,
bietet der Browser dem Benutzer keine Möglichkeit, fortzufahren oder die Fehlermeldung "durchzuklicken", was die Absicht der strengen Sicherheit beeinträchtigen würde.

> [!NOTE]
> Der Host muss den `Strict-Transport-Security`-Header nur über HTTPS senden, nicht über unsicheres HTTP.
> Browser ignorieren den Header, wenn er über HTTP gesendet wird, um zu verhindern, dass ein [Manipulator in der Mitte (MITM)](/de/docs/Web/Security/Attacks/MITM)
> den Header vorzeitig ablaufen lässt oder ihn für einen Host hinzufügt, der kein HTTPS unterstützt.

### Ablauf

Jedes Mal, wenn der Browser einen `Strict-Transport-Security`-Header empfängt, aktualisiert er die HSTS-Ablaufzeit des Hosts, indem er
`max-age` zur aktuellen Zeit hinzufügt.
Die Verwendung eines festen Wertes für `max-age` kann verhindern, dass HSTS abläuft, da jede nachfolgende Antwort das Ablaufdatum weiter in die Zukunft schiebt.

Wenn der `Strict-Transport-Security`-Header in einer Antwort von einem Host fehlt, der zuvor einen gesendet hat, bleibt der vorherige Header bis zur Ablaufzeit in Kraft.

Um HSTS zu deaktivieren, setzen Sie `max-age=0`.
Dies wird erst wirksam, wenn der Browser eine sichere Anfrage stellt und den Antwortheader empfängt.
Designbedingt können Sie HSTS nicht über unsicheres HTTP deaktivieren.

### Subdomains

Die `includeSubDomains`-Direktive weist den Browser an, die HSTS-Richtlinie einer Domain auch auf ihre Subdomains anzuwenden.
Eine HSTS-Richtlinie für `secure.example.com` mit `includeSubDomains` gilt auch für `login.secure.example.com`
und `admin.login.secure.example.com`. Sie gilt jedoch nicht für `example.com` oder `insecure.example.com`.

Jeder Subdomain-Host sollte `Strict-Transport-Security`-Header in seine Antworten aufnehmen, auch wenn der
Superdomain `includeSubDomains` verwendet, da ein Browser möglicherweise zuerst einen Subdomain-Host kontaktiert.
Zum Beispiel, wenn `example.com` den HSTS-Header mit `includeSubDomains` enthält, aber alle vorhandenen Links
direkt zu `www.example.com` führen, wird der Browser den HSTS-Header von `example.com` nie sehen.
Daher sollte auch `www.example.com` HSTS-Header senden.

Der Browser speichert die HSTS-Richtlinie für jede Domain und Subdomain unabhängig, unabhängig von der `includeSubDomains`-Direktive.
Wenn sowohl `example.com` als auch `login.example.com` HSTS-Header senden, speichert der Browser zwei separate HSTS-Richtlinien,
und diese können unabhängig ablaufen. Wenn `example.com` `includeSubDomains` verwendete, bleibt `login.example.com` abgedeckt,
wenn eine der Richtlinien abläuft.

Wenn `max-age=0`, hat `includeSubDomains` keine Wirkung, da die Domain, die `includeSubDomains` angegeben hat,
sofort aus der HSTS-Hostliste gelöscht wird; dies löscht nicht die separaten HSTS-Richtlinien jeder Subdomain.

### Unsichere HTTP-Anfragen

Wenn der Host unsichere HTTP-Anfragen akzeptiert, sollte er mit einem permanenten Redirect (wie Statuscode {{HTTPStatus("301")}})
antworten, der eine `https`-URL im {{HTTPHeader("Location")}}-Header enthält.
Der Redirect darf den `Strict-Transport-Security`-Header nicht enthalten, da die Anfrage unsicheres HTTP verwendet hat,
der Header muss jedoch nur über HTTPS gesendet werden.
Nachdem der Browser den Redirect verfolgt und eine neue Anfrage über HTTPS gestellt hat, sollte die Antwort
den `Strict-Transport-Security`-Header enthalten, um sicherzustellen, dass zukünftige Versuche, eine `http`-URL zu laden,
sofort HTTPS verwenden, ohne einen Redirect zu erfordern.

Ein Schwachpunkt von HSTS besteht darin, dass es erst wirksam wird, wenn der Browser mindestens eine sichere Verbindung zum Host hergestellt hat
und den `Strict-Transport-Security`-Header empfangen hat.
Wenn der Browser eine unsichere `http`-URL lädt, bevor er weiß, dass der Host ein HSTS-Host ist, ist die erste Anfrage
anfällig für Netzwerkangriffe.
[Preloading](#preloading_strict_transport_security) mildert dieses Problem.

### Beispiel für Szenario mit Strict Transport Security

1. Zu Hause besucht der Benutzer `http://example.com/` zum ersten Mal.
2. Da das URL-Schema `http` ist und der Browser es nicht in seiner HSTS-Hostliste hat, wird die Verbindung über unsicheres HTTP hergestellt.
3. Der Server antwortet mit einem `301 Moved Permanently`-Redirect zu `https://example.com/`.
4. Der Browser stellt eine neue Anfrage, diesmal über HTTPS.
5. Die Antwort, die über HTTPS erfolgt, enthält den Header:

   ```http
   Strict-Transport-Security: max-age=31536000; includeSubDomains
   ```

   Der Browser speichert `example.com` als HSTS-Host und dass `includeSubDomains` angegeben wurde.

6. Einige Wochen später befindet sich der Benutzer am Flughafen und entscheidet sich, das kostenlose WLAN zu nutzen. Ohne es zu wissen, verbindet er sich mit einem Rogue-Access-Point auf dem Laptop eines Angreifers.
7. Der Benutzer öffnet `http://login.example.com/`. Da der Browser `example.com` als HSTS-Host speichert und die `includeSubDomains`-Direktive verwendet wurde, verwendet der Browser HTTPS.
8. Der Angreifer fängt die Anfrage mit einem gefälschten HTTPS-Server ab, verfügt jedoch nicht über ein gültiges Zertifikat für die Domain.
9. Der Browser zeigt einen Fehler für das ungültige Zertifikat an und erlaubt dem Benutzer nicht, diesen zu umgehen, wodurch verhindert wird, dass der Benutzer sein Passwort an den Angreifer weitergibt.

### Preloading Strict Transport Security

Google unterhält [einen HSTS-Preload-Service](https://hstspreload.org/).
Indem Sie den Richtlinien folgen und Ihre Domain erfolgreich einreichen, können Sie sicherstellen, dass Browser nur über sichere Verbindungen zu Ihrer Domain verbinden.
Obwohl der Dienst von Google gehostet wird, verwenden alle Browser diese Preload-Liste.
Es ist jedoch kein Teil der HSTS-Spezifikation und sollte nicht als offiziell betrachtet werden.

- Informationen zur HSTS-Preload-Liste in Chrome: https://www.chromium.org/hsts/
- Einsichtnahme in die Firefox-HSTS-Preload-Liste: [nsSTSPreloadList.inc](https://searchfox.org/firefox-main/source/security/manager/ssl/nsSTSPreloadList.inc)

## Beispiele

### Verwendung von Strict-Transport-Security

Alle gegenwärtigen und zukünftigen Subdomains werden für eine `max-age` von 1 Jahr HTTPS sein.
Dies blockiert den Zugriff auf Seiten oder Subdomains, die nur über HTTP bereitgestellt werden können.

```http
Strict-Transport-Security: max-age=31536000; includeSubDomains
```

Eine `max-age` von 1 Jahr ist der minimale Wert, der für HSTS-Preloading akzeptiert wird. Das folgende Beispiel verwendet 2 Jahre, was der Wert ist, der im Beispielheader auf https://hstspreload.org angezeigt wird.

Im folgenden Beispiel ist `max-age` auf 2 Jahre eingestellt, und es wird mit `preload` versehen, was für die Aufnahme in die HSTS-Preload-Listen aller großen Webbrowser erforderlich ist, wie Chromium, Edge und Firefox.

```http
Strict-Transport-Security: max-age=63072000; includeSubDomains; preload
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Einschränkungen von Features auf sichere Kontexte](/de/docs/Web/Security/Defenses/Secure_Contexts/features_restricted_to_secure_contexts)
- [HTTP Strict Transport Security ist gelandet!](https://blog.sidstamm.com/2010/08/http-strict-transport-security-has.html) auf blog.sidstamm.com (2010)
- [HTTP Strict Transport Security (erzwungenes HTTPS)](https://hacks.mozilla.org/2010/08/firefox-4-http-strict-transport-security-force-https/) auf hacks.mozilla.org (2010)
- [HTTP Strict Transport Security](https://cheatsheetseries.owasp.org/cheatsheets/HTTP_Strict_Transport_Security_Cheat_Sheet.html) Cheatsheet auf owasp.org
- [HTTP Strict Transport Security](https://en.wikipedia.org/wiki/HTTP_Strict_Transport_Security) auf Wikipedia
- [HSTS Preload Service](https://hstspreload.org/)
