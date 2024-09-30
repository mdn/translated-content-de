---
title: Arten von Angriffen
slug: Web/Security/Types_of_attacks
l10n:
  sourceCommit: 6acc0b4325c55fd77dc578c5bd7fde008cf26310
---

{{QuickLinksWithSubpages("/de/docs/Web/Security")}}

Dieser Artikel beschreibt verschiedene Arten von Sicherheitsangriffen und Techniken zu deren Abwehr.

## Click-Jacking

[Click-Jacking](/de/docs/Glossary/Clickjacking) ist die Praxis, einen Benutzer dazu zu bringen, auf einen Link, Button usw. zu klicken, der etwas anderes ist, als der Benutzer denkt. Dies kann beispielsweise dazu verwendet werden, Anmeldedaten zu stehlen oder um die unwissentliche Erlaubnis des Benutzers zu erhalten, ein Stück Schadsoftware zu installieren. (Click-Jacking wird manchmal auch als "Benutzeroberflächen-Neuausrichtung" bezeichnet, obwohl dies ein Missbrauch des Begriffs "Neuausrichtung" ist.)

## Cross-Site-Scripting (XSS)

Cross-Site-Scripting (XSS) ist ein Sicherheitsangriff, der es einem Angreifer ermöglicht, bösartigen clientseitigen Code in eine Website einzufügen. Dieser Code wird von den Opfern ausgeführt und ermöglicht es den Angreifern, Zugangsbeschränkungen zu umgehen und sich als Benutzer auszugeben. Laut dem Open Web Application Security Project war XSS [die siebt häufigste Web-App-Sicherheitslücke](https://owasp.org/www-project-top-ten/2017/Top_10) im Jahr 2017.

Diese Angriffe gelingen, wenn die Web-App nicht ausreichend validiert oder codiert wird. Der Browser des Benutzers kann nicht erkennen, dass das bösartige Skript nicht vertrauenswürdig ist, und gewährt ihm so Zugriff auf Cookies, Sitzungs-Token oder andere sensible sitespezifische Informationen oder erlaubt dem bösartigen Skript, den [HTML](/de/docs/Glossary/HTML)-Inhalt neu zu schreiben.

Cross-Site-Scripting-Angriffe treten normalerweise auf, wenn 1) Daten über eine nicht vertrauenswürdige Quelle in eine Web-App gelangen (häufig eine Web-Anfrage) oder 2) dynamischer Inhalt an einen Web-Benutzer gesendet wird, ohne auf bösartige Inhalte überprüft zu werden.

Der bösartige Inhalt umfasst oft [JavaScript](/de/docs/Glossary/JavaScript), manchmal jedoch auch HTML, Flash oder jeden anderen Code, den der Browser ausführen kann. Die Vielfalt der auf XSS basierenden Angriffe ist nahezu unbegrenzt, aber sie umfassen häufig die Übertragung privater Daten wie Cookies oder anderer Sitzungsinformationen an den Angreifer, die Weiterleitung des Opfers auf eine vom Angreifer kontrollierte Webseite oder das Ausführen anderer bösartiger Operationen auf dem Computer des Benutzers unter dem Deckmantel der anfälligen Seite.

XSS-Angriffe können in drei Kategorien eingeteilt werden: gespeichert (auch persistent genannt), reflektiert (auch nicht-persistent genannt) oder DOM-basiert.

- Gespeicherte XSS-Angriffe
  - : Das injizierte Skript wird dauerhaft auf den Zielservern gespeichert. Das Opfer ruft dann dieses bösartige Skript vom Server ab, wenn der Browser eine Datenanforderung sendet.
- Reflektierte XSS-Angriffe
  - : Wenn ein Benutzer dazu gebracht wird, auf einen bösartigen Link zu klicken, ein speziell gestaltetes Formular abzusenden oder eine bösartige Seite zu besuchen, gelangt der injizierte Code zur anfälligen Website. Der Web-Server reflektiert das injizierte Skript zurück an den Browser des Benutzers, beispielsweise in einer Fehlermeldung, einem Suchergebnis oder einer anderen Antwort, die Daten enthält, die als Teil der Anfrage an den Server gesendet wurden. Der Browser führt den Code aus, da er annimmt, die Antwort stamme von einem "vertrauenswürdigen" Server, mit dem der Benutzer bereits interagiert hat.
- DOM-basierte XSS-Angriffe
  - : Die Nutzlast wird ausgeführt, indem das DOM-Umfeld (im Browser des Opfers) geändert wird, das vom ursprünglichen clientseitigen Skript verwendet wird. Das heißt, die Seite selbst ändert sich nicht, aber der clientseitige Code in der Seite wird aufgrund der bösartigen Änderungen am DOM-Umfeld auf unerwartete Weise ausgeführt.

## Cross-Site-Request-Forgery (CSRF)

CSRF (manchmal auch XSRF genannt) gehört zu einer verwandten Klasse von Angriffen. Der Angreifer veranlasst den Browser des Benutzers, eine Anfrage an das Backend der Website zu senden, ohne die Zustimmung oder das Wissen des Benutzers. Ein Angreifer kann eine XSS-Nutzlast verwenden, um einen CSRF-Angriff zu starten.

Wikipedia erwähnt ein gutes Beispiel für CSRF. In dieser Situation fügt jemand ein Bild ein, das eigentlich kein Bild ist (zum Beispiel in einem ungefilterten Chat oder Forum), sondern tatsächlich eine Anfrage an den Server Ihrer Bank, um Geld abzuheben:

```html
<img
  src="https://bank.example.com/withdraw?account=bob&amount=1000000&for=mallory" />
```

Wenn Sie nun in Ihr Bankkonto eingeloggt sind und Ihre Cookies noch gültig sind (und es keine andere Validierung gibt), überweisen Sie Geld, sobald Sie das HTML laden, das dieses Bild enthält. Für Endpunkte, die eine POST-Anfrage erfordern, ist es möglich, programmatisch einen `<form>`-Abschnitt beim Laden der Seite auszulösen (vielleicht in einem unsichtbaren `<iframe>`):

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

- GET-Endpunkte sollten idempotent sein – Aktionen, die eine Änderung bewirken und keine Daten abrufen, sollten das Senden einer POST- (oder einer anderen HTTP-Methode) Anfrage erfordern. POST-Endpunkte sollten nicht austauschbar GET-Anfragen mit Parametern im Abfrage-String akzeptieren.
- Ein sitzungsbasierter CSRF-Token sollte vom Server an den Browser bereitgestellt werden. Dieser Token kann dann immer dann eingefügt werden, wenn ein Formular vom Browser abgesendet wird (in einem versteckten Eingabefeld im `<form>`-Element). Für alle nicht-GEGET-Anfragen, die möglicherweise eine Aktion durchführen könnten, vergleicht der Server den gesendeten Token mit seinem gespeicherten Wert für die Sitzung. Wenn es eine Abweichung gibt, wird die Anfrage abgebrochen.
- Diese Schutzmethode hängt davon ab, dass ein Angreifer nicht in der Lage ist, den zugewiesenen CSRF-Token des Benutzers vorherzusagen. Der Token sollte bei der Anmeldung neu generiert werden.
- Cookies, die für sensible Aktionen verwendet werden (wie Sitzungscookies), sollten eine kurze Lebensdauer haben und das [`SameSite`-Attribut](/de/docs/Web/HTTP/Cookies#controlling_third-party_cookies_with_samesite) sollte auf `Strict` oder `Lax` gesetzt sein. In unterstützenden Browsern wird sichergestellt, dass das Sitzungscookie nicht zusammen mit Cross-Site-Anfragen gesendet wird und diese das Anwendungsserver effektiv unauthentifiziert machen.
- Sowohl CSRF-Token als auch `SameSite`-Cookies sollten eingesetzt werden. Dadurch werden alle Browser geschützt und es wird Schutz geboten, wo `SameSite`-Cookies nicht helfen können (wie Angriffe von einer separaten Subdomain).

Für weitere Präventionstipps siehe das OWASP CSRF Prevention Cheat Sheet.

## Man-in-the-middle (MitM)

Eine dritte Partei fängt den Datenverkehr zwischen einem Web-Server und einem Client (Browser) ab und gibt sich als Web-Server aus, um Daten (wie Anmeldeinformationen oder Kreditkarteninformationen) zu erfassen. Der Datenverkehr wird eventuell mit Änderungen durchgeleitet. Offene Wi-Fi-Netzwerke sind typische Mittel zur Durchführung dieses Angriffs.

## Sitzungshijacking

Sitzungshijacking besteht darin, Zugriff auf und den Missbrauch einer authentifizierten Sitzung des Benutzers zu erlangen. Dies kann geschehen, indem ein Cookie für eine vorhandene Sitzung gestohlen wird oder der Benutzer (oder sein Browser) dazu gebracht wird, ein Cookie mit einer vorher festgelegten Sitzungs-ID zu setzen.

Exfiltrationsmöglichkeiten können durch den Einsatz einer strikten Content-Security-Policy eingeschränkt werden.

### Sitzungsfixierung

Eine dritte Partei ist in der Lage, den Sitzungsbezeichner eines Benutzers zu bestimmen (z. B. durch Lesen oder Setzen), und kann deshalb mit dem Server als dieser Benutzer interagieren. Das Stehlen von Cookies ist eine Möglichkeit, dies zu tun.

Erinnern Sie sich daran, dass eine Subdomain wie application.example.com ein Cookie setzen kann, das mit Anfragen an example.com oder andere Subdomains gesendet wird, indem das `Domain`-Attribut gesetzt wird:

```http
Set-Cookie: CSRF=e8b667; Secure; Domain=example.com
```

Wenn eine anfällige Anwendung auf einer Subdomain verfügbar ist, kann dieser Mechanismus in einem Sitzungsfixierungsangriff missbraucht werden. Wenn der Benutzer eine Seite auf der übergeordneten Domain (oder einer anderen Subdomain) besucht, könnte die Anwendung den vorhandenen Wert im Cookie des Benutzers vertrauen. Dies könnte einem Angreifer erlauben, CSRF-Schutz zu umgehen oder eine Sitzung zu kapern, nachdem der Benutzer sich anmeldet.
Alternativ, wenn die übergeordnete Domain nicht [HTTP Strict-Transport-Security](/de/docs/Glossary/HSTS) mit `includeSubdomains` verwendet, könnte ein Benutzer, der einem aktiven MitM ausgesetzt ist (möglicherweise aufgrund einer Verbindung zu einem offenen Wi-Fi-Netzwerk), eine Antwort mit einem Set-Cookie-Header von einer nicht existierenden Subdomain erhalten. Das Endergebnis wäre viel das Gleiche, wobei der Browser das illegitime Cookie speichert und mit allen anderen Seiten unter example.com sendet.

Sitzungsfixierung sollte in erster Linie durch Regenerierung von Sitzungs-Cookie-Werten verhindert werden, wenn sich der Benutzer authentifiziert (auch wenn bereits ein Cookie vorhanden ist), und indem ein CSRF-Token an den Benutzer gebunden wird.

### Seitliches Sitzunghijacking

### Malware zur Browser-Entführung
