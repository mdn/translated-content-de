---
title: Arten von Angriffen
slug: Web/Security/Types_of_attacks
l10n:
  sourceCommit: be3f184d89979d413204b8f9cbecfc8dd0e5ecf9
---

{{QuickLinksWithSubpages("/de/docs/Web/Security")}}

Dieser Artikel beschreibt verschiedene Arten von Sicherheitsangriffen und Techniken zu deren Minderung.

## Clickjacking

[Clickjacking](/de/docs/Web/Security/Attacks/Clickjacking) ist die Praxis, einen Benutzer dazu zu verleiten, auf einen Link, Knopf usw. zu klicken, der etwas anderes ist, als was der Benutzer denkt. Dies kann zum Beispiel dazu verwendet werden, Anmeldedaten zu stehlen oder die unwissentliche Erlaubnis des Benutzers zu erhalten, ein Stück Malware zu installieren. (Clickjacking wird manchmal als "Benutzeroberflächen-Manipulation" bezeichnet, obwohl dies eine falsche Verwendung des Begriffs "Manipulation" ist.)

## Cross-Site-Scripting (XSS)

Cross-Site-Scripting (XSS) ist ein Sicherheitsangriff, der es einem Angreifer ermöglicht, in eine Webseite schädlichen clientseitigen Code einzuschleusen. Dieser Code wird von den Opfern ausgeführt und ermöglicht es Angreifern, Zugangskontrollen zu umgehen und Benutzer zu imitieren. Laut dem Open Web Application Security Project war XSS 2017 die [siebt häufigste Schwachstelle bei Webanwendungen](https://owasp.org/www-project-top-ten/2017/Top_10).

Diese Angriffe sind erfolgreich, wenn die Webanwendung nicht genügend Validierung oder Kodierung verwendet. Der Browser des Benutzers kann das bösartige Skript nicht als unzuverlässig erkennen und ermöglicht ihm den Zugriff auf Cookies, Sitzungstokens oder andere sensible, sitzungsbezogene Informationen oder lässt das bösartige Skript das {{Glossary("HTML", "HTML")}}-Inhalt überschreiben.

Cross-Site-Scripting-Angriffe treten normalerweise auf, wenn 1) Daten aus einer nicht vertrauenswürdigen Quelle (meistens eine Webanforderung) in eine Webanwendung gelangen oder 2) dynamische Inhalte an einen Webbenutzer gesendet werden, ohne auf bösartige Inhalte geprüft zu werden.

Der bösartige Inhalt umfasst oft {{Glossary("JavaScript", "JavaScript")}}, manchmal jedoch auch HTML, Flash oder anderen Code, den der Browser ausführen kann. Die Vielfalt der auf XSS basierenden Angriffe ist nahezu unbegrenzt, sie umfassen jedoch häufig das Übermitteln privater Daten wie Cookies oder anderer Sitzungsinformationen an den Angreifer, das Weiterleiten des Opfers zu einer von dem Angreifer kontrollierten Webseite oder das Durchführen anderer bösartiger Operationen auf dem Computer des Benutzers unter dem Deckmantel der verwundbaren Seite.

XSS-Angriffe können in drei Kategorien unterteilt werden: gespeichert (auch persistent genannt), reflektiert (auch nicht-persistent genannt) oder DOM-basiert.

- Gespeicherte XSS-Angriffe
  - : Das injizierte Skript wird dauerhaft auf den Zielservern gespeichert. Das Opfer ruft dieses bösartige Skript dann vom Server ab, wenn der Browser eine Anfrage nach Daten sendet.
- Reflektierte XSS-Angriffe
  - : Wenn ein Benutzer dazu verleitet wird, auf einen bösartigen Link zu klicken, ein speziell gestaltetes Formular abzuschicken oder eine bösartige Webseite zu besuchen, wird der injizierte Code an die verwundbare Webseite gesendet. Der Webserver spiegelt das injizierte Skript an den Browser des Benutzers zurück, beispielsweise in einer Fehlermeldung, einem Suchergebnis oder einer anderen Antwort, die die als Teil der Anfrage an den Server gesendeten Daten enthält. Der Browser führt den Code aus, da er annimmt, dass die Antwort von einem "vertrauenswürdigen" Server stammt, mit dem der Benutzer bereits interagiert hat.
- DOM-basierte XSS-Angriffe
  - : Der Payload wird als Ergebnis der Änderung der DOM-Umgebung (im Browser des Opfers) ausgeführt, die vom ursprünglichen clientseitigen Skript verwendet wird. Das heißt, die Seite selbst ändert sich nicht, aber der in der Seite enthaltene clientseitige Code wird aufgrund der bösartigen Änderungen an der DOM-Umgebung auf unerwartete Weise ausgeführt.

## Cross-Site-Request-Forgery (CSRF)

CSRF (manchmal auch XSRF genannt) ist eine verwandte Klasse von Angriffen. Der Angreifer veranlasst den Browser des Benutzers, eine Anfrage an das Backend der Website zu senden, ohne dass der Benutzer zustimmt oder davon Kenntnis hat. Ein Angreifer kann eine XSS-Nutzlast verwenden, um einen CSRF-Angriff auszuführen.

Wikipedia nennt ein gutes Beispiel für CSRF. In dieser Situation fügt jemand ein Bild ein, das kein echtes Bild ist (zum Beispiel in einem ungefilterten Chat oder Forum), sondern tatsächlich eine Anfrage an den Server Ihrer Bank ist, um Geld abzuheben:

```html
<img
  src="https://bank.example.com/withdraw?account=bob&amount=1000000&for=mallory" />
```

Nun, wenn Sie in Ihrem Bankkonto angemeldet sind und Ihre Cookies noch gültig sind (und es keine weitere Validierung gibt), werden Sie Geld überweisen, sobald Sie das HTML laden, das dieses Bild enthält. Für Endpunkte, die eine POST-Anfrage erfordern, ist es möglich, programmatisch ein `<form>`-Übermittlung auszulösen (vielleicht in einem unsichtbaren `<iframe>`), wenn die Seite geladen wird:

```html
<form action="https://bank.example.com/withdraw" method="POST">
  <input type="hidden" name="account" value="bob" />
  <input type="hidden" name="amount" value="1000000" />
  <input type="hidden" name="for" value="mallory" />
</form>
<script>
  window.addEventListener("DOMContentLoaded", () => {
    document.querySelector("form").submit();
  });
</script>
```

Es gibt einige Techniken, die verwendet werden sollten, um dies zu verhindern:

- GET-Endpunkte sollten idempotent sein – Aktionen, die eine Änderung bewirken und keine Daten abrufen, sollten erfordern, dass eine POST- (oder andere HTTP-Methode) Anfrage gesendet wird. POST-Endpunkte sollten nicht austauschbar GET-Anfragen mit Parametern in der Abfragezeichenfolge akzeptieren.
- Ein sitzungs-einzigartiger CSRF-Token sollte vom Server an den Browser bereitgestellt werden. Dieser Token kann dann immer dann eingeschlossen werden, wenn ein Formular vom Browser gesendet wird (in einem versteckten Eingabefeld im `<form>`-Element). Bei allen Nicht-GET-Anfragen, die potenziell eine Aktion ausführen können, vergleicht der Server den gesendeten Token mit seinem gespeicherten Wert für die Sitzung. Wenn es eine Abweichung gibt, wird die Anfrage abgebrochen.
- Diese Schutzmethode beruht darauf, dass ein Angreifer den dem Benutzer zugewiesenen CSRF-Token nicht vorhersagen kann. Der Token sollte bei der Anmeldung neu generiert werden.
- Cookies, die für sensible Aktionen verwendet werden (wie Sitzungscookies), sollten eine kurze Lebensdauer mit dem [`SameSite`-Attribut](/de/docs/Web/HTTP/Cookies#controlling_third-party_cookies_with_samesite) haben, das auf `Strict` oder `Lax` gesetzt ist. In unterstützenden Browsern stellt dies sicher, dass das Sitzungscookie nicht mit standortübergreifenden Anfragen gesendet wird und dass die Anfrage für den Anwendungsserver effektiv nicht authentifiziert ist.
- Sowohl CSRF-Token als auch `SameSite`-Cookies sollten eingesetzt werden. Dies stellt sicher, dass alle Browser geschützt sind und bietet Schutz, wo `SameSite`-Cookies nicht helfen können (wie Angriffe von einer separaten Subdomain).

Weitere Präventionstipps finden Sie im OWASP CSRF-Präventionsleitfaden.

## Man-in-the-middle (MitM)

Eine dritte Partei fängt den Datenverkehr zwischen einem Webserver und einem Client (Browser) ab und gibt vor, der Webserver zu sein, um Daten (wie Anmeldedaten oder Kreditkarteninformationen) zu erfassen. Der Datenverkehr wird durchgeleitet, möglicherweise mit Änderungen. Offene WLAN-Netzwerke sind typische Mittel zur Ausführung dieses Angriffs.

## Sitzungs-Hijacking

Sitzungs-Hijacking besteht darin, Zugriff auf die authentifizierte Sitzung eines Benutzers zu erlangen und diese zu missbrauchen. Dies kann durch Stehlen eines Cookies für eine bestehende Sitzung geschehen oder indem der Benutzer (oder sein Browser) dazu gebracht wird, ein Cookie mit einer vorherbestimmten Sitzungs-ID zu setzen.

Die Möglichkeiten der Exfiltration können durch den Einsatz einer strengen Content-Security-Policy eingeschränkt werden.

### Sitzungs-Fixierung

Eine dritte Partei kann den Sitzungsbezeichner eines Benutzers (d.h. durch das Lesen oder Setzen) bestimmen und daher mit dem Server als dieser Benutzer interagieren. Das Stehlen von Cookies ist eine Möglichkeit, dies zu tun.

Denken Sie daran, dass eine Subdomain wie application.example.com ein Cookie setzen kann, das mit Anfragen an example.com oder andere Subdomains gesendet wird, indem das `Domain`-Attribut festgelegt wird:

```http
Set-Cookie: CSRF=e8b667; Secure; Domain=example.com
```

Wenn eine anfällige Anwendung auf einer Subdomain verfügbar ist, kann dieser Mechanismus in einem Sitzungs-Fixierungsangriff missbraucht werden. Wenn der Benutzer eine Seite auf der Elterndomain (oder einer anderen Subdomain) besucht, kann die Anwendung den vorhandenen Wert im Cookie des Benutzers vertrauen. Dies könnte einem Angreifer erlauben, den CSRF-Schutz zu umgehen oder eine Sitzung zu kapern, nachdem der Benutzer sich angemeldet hat. Alternativ, wenn die Elterndomain kein {{Glossary("HSTS", "HTTP Strict-Transport-Security")}} mit `includeSubdomains` gesetzt verwendet, könnte ein Benutzer, der einem aktiven MitM (vielleicht verbunden mit einem offenen WLAN-Netzwerk) unterliegt, eine Antwort mit einem Set-Cookie-Header von einer nicht vorhandenen Subdomain erhalten. Das Endergebnis wäre ähnlich, mit dem Browser, der das illegitime Cookie speichert und es an alle anderen Seiten unter example.com sendet.

Sitzungs-Fixierung sollte hauptsächlich dadurch gemildert werden, dass die Werte der Sitzungscookies neu generiert werden, wenn der Benutzer authentifiziert wird (auch wenn ein Cookie bereits existiert) und indem ein CSRF-Token an den Benutzer gebunden wird.

### Sitzung-Sidejacking

### Browser-Hijacking-Malware
