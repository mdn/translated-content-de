---
title: Arten von Angriffen
slug: Web/Security/Types_of_attacks
l10n:
  sourceCommit: ade8d870ed7e18a71dc51fe25aa13d812fb82558
---

Dieser Artikel beschreibt verschiedene Arten von Sicherheitsangriffen und Techniken zu deren Abmilderung.

## Clickjacking

[Clickjacking](/de/docs/Web/Security/Attacks/Clickjacking) ist die Praxis, einen Benutzer dazu zu verleiten, auf einen Link, Button usw. zu klicken, der etwas anderes ist, als der Benutzer denkt. Dies kann z. B. verwendet werden, um Anmeldedaten zu stehlen oder die unwissentliche Erlaubnis des Benutzers für die Installation eines Schadprogramms zu erhalten. (Clickjacking wird manchmal als "Benutzeroberflächen-Manipulation" bezeichnet, obwohl dies ein Missbrauch des Begriffs "redress" ist.)

## Cross-site scripting (XSS)

Cross-site scripting (XSS) ist ein Sicherheitsangriff, bei dem ein Angreifer bösartigen clientseitigen Code in eine Website injizieren kann. Dieser Code wird von den Opfern ausgeführt und ermöglicht es den Angreifern, Zugriffskontrollen zu umgehen und Benutzer zu imitieren. Laut dem Open Web Application Security Project war XSS die [siebt häufigste Web-Anwendungsschwachstelle](https://owasp.org/www-project-top-ten/2017/Top_10) im Jahr 2017.

Diese Angriffe gelingen, wenn die Web-Anwendung nicht genügend Validierung oder Kodierung einsetzt. Der Browser des Benutzers kann nicht erkennen, dass das bösartige Skript unzuverlässig ist, und gewährt ihm daher Zugriff auf alle Cookies, Sitzungstoken oder andere sensible, site-spezifische Informationen oder lässt das bösartige Skript den {{Glossary("HTML", "HTML")}}-Inhalt umschreiben.

Cross-site scripting-Angriffe treten normalerweise auf, wenn 1) Daten aus einer nicht vertrauenswürdigen Quelle in eine Web-Anwendung gelangen (meistens eine Web-Anfrage) oder 2) dynamischer Inhalt an einen Web-Benutzer gesendet wird, ohne auf bösartigen Inhalt überprüft zu werden.

Der bösartige Inhalt enthält oft {{Glossary("JavaScript", "JavaScript")}}, aber manchmal HTML, Flash oder einen anderen Code, den der Browser ausführen kann. Die Vielzahl der auf XSS basierenden Angriffe ist nahezu grenzenlos, beinhaltet aber häufig die Übertragung privater Daten wie Cookies oder anderer Sitzungsinformationen an den Angreifer, die Umleitung des Opfers auf eine vom Angreifer kontrollierte Webseite oder das Ausführen anderer bösartiger Operationen auf dem Rechner des Benutzers unter dem Vorwand der verwundbaren Site.

XSS-Angriffe können in drei Kategorien unterteilt werden: Stored (auch Persistent genannt), Reflected (auch Nicht-persistent genannt) oder DOM-basiert.

- Stored XSS-Angriffe
  - : Das injizierte Skript wird dauerhaft auf den Zielservern gespeichert. Das Opfer ruft dieses bösartige Skript dann vom Server ab, wenn der Browser eine Datenanforderung sendet.
- Reflected XSS-Angriffe
  - : Wenn ein Benutzer dazu gebracht wird, auf einen bösartigen Link zu klicken, ein speziell erstelltes Formular abzuschicken oder eine bösartige Site zu besuchen, wandert der injizierte Code zur anfälligen Website. Der Webserver reflektiert das injizierte Skript zurück an den Browser des Benutzers, beispielsweise in einer Fehlermeldung, einem Suchergebnis oder einer anderen Antwort, die Daten enthält, die als Teil der Anforderung an den Server gesendet wurden. Der Browser führt den Code aus, weil er annimmt, dass die Antwort von einem "vertrauenswürdigen" Server stammt, mit dem der Benutzer bereits interagiert hat.
- DOM-basierte XSS-Angriffe
  - : Die Nutzlast wird infolge der Modifizierung der DOM-Umgebung (im Browser des Opfers) ausgeführt, die vom ursprünglichen clientseitigen Skript verwendet wird. Das heißt, die Seite selbst ändert sich nicht, aber der clientseitige Code der in der Seite enthalten ist, läuft in unerwarteter Weise aufgrund der bösartigen Modifikationen der DOM-Umgebung.

## Cross-site request forgery (CSRF)

CSRF (manchmal auch XSRF genannt) ist eine verwandte Art des Angriffs. Der Angreifer veranlasst den Browser des Benutzers, eine Anfrage an den Backend der Website auszuführen, ohne dass der Benutzer dem zugestimmt oder davon weiß. Ein Angreifer kann eine XSS-Nutzlast verwenden, um einen CSRF-Angriff zu starten.

Wikipedia erwähnt ein gutes Beispiel für CSRF. In dieser Situation fügt jemand ein Bild ein, das eigentlich kein Bild ist (zum Beispiel in einem ungefilterten Chat oder Forum), sondern tatsächlich eine Anfrage an den Bankserver ist, Geld abzuheben:

```html
<img
  src="https://bank.example.com/withdraw?account=bob&amount=1000000&for=mallory" />
```

Sofern Sie in Ihr Bankkonto eingeloggt sind und Ihre Cookies noch gültig sind (und keine weitere Validierung erfolgt), überweisen Sie Geld, sobald Sie das HTML laden, das dieses Bild enthält. Für Endpunkte, die eine POST-Anfrage erfordern, ist es möglich, eine \<form>-Übermittlung programmgesteuert auszulösen (vielleicht in einem unsichtbaren `<iframe>`), wenn die Seite geladen wird:

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

Es gibt einige Techniken, die angewendet werden sollten, um dies zu verhindern:

- GET-Endpunkte sollten idempotent sein—Aktionen, die eine Änderung bewirken und keine Daten abrufen, sollten das Senden einer POST- (oder anderen HTTP-Methode) Anfrage erforderlich machen. POST-Endpunkte sollten nicht austauschbar GET-Anfragen mit Parametern in der Abfragezeichenfolge akzeptieren.
- Ein sitzungsindividuelles CSRF-Token sollte vom Server an den Browser bereitgestellt werden. Dieses Token kann dann jedes Mal inkludiert werden, wenn ein Formular vom Browser gesendet wird (in einem versteckten Eingabefeld im `<form>`-Element). Für alle nicht-GET-Anfragen, die potenziell eine Aktion ausführen können, vergleicht der Server das gesendete Token mit dem bei der Sitzung gespeicherten Wert. Bei einer Fehlersituation wird die Anforderung abgebrochen.
- Diese Schutzmethode verlässt sich darauf, dass ein Angreifer das dem Benutzer zugewiesene CSRF-Token nicht vorhersagen kann. Das Token sollte bei der Anmeldung neu generiert werden.
- Cookies, die für sensible Aktionen verwendet werden (wie Sitzungscookies), sollten eine kurze Lebensdauer haben und das [`SameSite`-Attribut](/de/docs/Web/HTTP/Guides/Cookies#controlling_third-party_cookies_with_samesite) sollte auf `Strict` oder `Lax` gesetzt werden. In unterstützenden Browsern wird dies sicherstellen, dass das Sitzungscookie nicht zusammen mit standortübergreifenden Anfragen gesendet wird und dass die Anfrage wirksam nicht authentifiziert gegenüber dem Anwendungsserver ist.
- Sowohl CSRF-Tokens als auch `SameSite`-Cookies sollten eingeführt werden. Dies stellt sicher, dass alle Browser geschützt sind, und bietet Schutz, wo `SameSite`-Cookies nicht helfen können (wie bei Angriffen von einer separaten Subdomain).

Weitere Präventionstipps finden Sie im CSRF-Präventions-Cheat-Sheet von OWASP.

## Man-in-the-middle (MitM)

Ein Dritter fängt den Datenverkehr zwischen einem Webserver und einem Client (Browser) ab und gibt sich als Webserver aus, um Daten zu erfassen (wie Anmeldedaten oder Kreditkarteninformationen). Der Datenverkehr wird durchgeleitet, möglicherweise mit Änderungen. Offene Wi-Fi-Netzwerke sind typische Mittel zur Durchführung dieses Angriffs.

## Sitzungshijacking

Sitzungshijacking besteht darin, Zugang zu erlangen und die authentifizierte Sitzung eines Benutzers zu missbrauchen. Dies kann durch das Stehlen eines Cookies für eine bestehende Sitzung geschehen, oder indem der Benutzer (oder deren Browser) dazu gebracht wird, ein Cookie mit einer vorgegebenen Sitzungs-ID zu setzen.

Exfiltrationsmöglichkeiten können durch den Einsatz einer strikten Content-Security-Policy begrenzt werden.

### Sitzungsfixierung

Ein Dritter ist in der Lage, die Sitzungskennung eines Benutzers zu bestimmen (d.h. durch Lesen oder Setzen) und kann daher mit dem Server als dieser Benutzer interagieren. Das Stehlen von Cookies ist eine Möglichkeit, dies zu tun.

Erinnern Sie sich daran, dass eine Subdomain wie application.example.com ein Cookie setzen kann, das mit Anfragen an example.com oder andere Subdomains gesendet wird, indem das `Domain`-Attribut gesetzt wird:

```http
Set-Cookie: CSRF=e8b667; Secure; Domain=example.com
```

Wenn eine anfällige Anwendung auf einer Subdomain verfügbar ist, kann dieser Mechanismus in einem Sitzungsfixierungsangriff ausgenutzt werden. Wenn der Benutzer eine Seite auf der übergeordneten Domain (oder einer anderen Subdomain) besucht, kann die Anwendung den vorhandenen Wert des Cookies des Benutzers vertrauen. Dies könnte einem Angreifer erlauben, den CSRF-Schutz zu umgehen oder eine Sitzung zu kapern, nachdem der Benutzer sich eingeloggt hat.
Alternativ, wenn die übergeordnete Domain keinen {{Glossary("HSTS", "HTTP Strict-Transport-Security")}} mit `includeSubdomains` gesetzt verwendet, könnte ein Benutzer, der einem aktiven MitM-Angriff ausgesetzt ist (vielleicht verbunden mit einem offenen Wi-Fi-Netzwerk), eine Antwort mit einem Set-Cookie-Header von einer nicht existierenden Subdomain serviert bekommen. Das Endergebnis wäre das gleiche, mit dem Browser, der das illegitime Cookie speichert und es an alle anderen Seiten unter example.com sendet.

Sitzungsfixierung sollte in erster Linie durch das Neugenerieren von Sitzungs-Cookie-Werten bei der Authentifizierung des Benutzers gemildert werden (auch wenn bereits ein Cookie existiert) und indem jedes CSRF-Token an den Benutzer gebunden wird.

### Session side-jacking

### Malware zur Browser-Übernahme
