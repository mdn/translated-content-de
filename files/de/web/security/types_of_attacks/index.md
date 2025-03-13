---
title: Arten von Angriffen
slug: Web/Security/Types_of_attacks
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{QuickLinksWithSubpages("/de/docs/Web/Security")}}

Dieser Artikel beschreibt verschiedene Arten von Sicherheitsangriffen und Techniken zu deren Abwehr.

## Clickjacking

[Clickjacking](/de/docs/Web/Security/Attacks/Clickjacking) ist die Praxis, einen Benutzer dazu zu verleiten, auf einen Link, Button usw. zu klicken, das etwas anderes ist als das, was der Benutzer denkt. Dies kann beispielsweise verwendet werden, um Anmeldeinformationen zu stehlen oder um die unwissentliche Erlaubnis des Benutzers zu erlangen, ein Schadprogramm zu installieren. (Clickjacking wird manchmal als "Benutzeroberflächen-Neugestaltung" bezeichnet, obwohl dies ein Missbrauch des Begriffs "Neugestaltung" ist.)

## Cross-Site-Scripting (XSS)

Cross-Site-Scripting (XSS) ist ein Sicherheitsangriff, der es einem Angreifer ermöglicht, schädlichen clientseitigen Code in eine Website einzuschleusen. Dieser Code wird von den Opfern ausgeführt und ermöglicht den Angreifern, Zugriffskontrollen zu umgehen und Benutzer zu imitieren. Laut dem Open Web Application Security Project war XSS [die siebthäufigste Schwachstelle von Webanwendungen](https://owasp.org/www-project-top-ten/2017/Top_10) im Jahr 2017.

Diese Angriffe gelingen, wenn die Webanwendung nicht genügend Validierung oder Kodierung einsetzt. Der Browser des Benutzers kann das schädliche Skript nicht als unzuverlässig erkennen und gewährt ihm daher Zugriff auf alle Cookies, Sitzungstoken oder andere sensible, seitenbezogene Informationen oder erlaubt dem schädlichen Skript, den {{Glossary("HTML", "HTML")}}-Inhalt umzuschreiben.

Cross-Site-Scripting-Angriffe treten normalerweise auf, wenn 1) Daten über eine nicht vertrauenswürdige Quelle (meistens eine Webanfrage) in eine Webanwendung gelangen oder 2) dynamischer Inhalt an einen Webbenutzer gesendet wird, ohne auf schädlichen Inhalt überprüft zu werden.

Der schädliche Inhalt umfasst oft {{Glossary("JavaScript", "JavaScript")}}, aber manchmal auch HTML, Flash oder anderen Code, den der Browser ausführen kann. Die Vielzahl von Angriffen, die auf XSS basieren, ist nahezu unbegrenzt, aber sie umfassen häufig das Übertragen privater Daten wie Cookies oder anderer Sitzungsinformationen an den Angreifer, das Weiterleiten des Opfers zu einer vom Angreifer kontrollierten Webseite oder das Ausführen anderer schädlicher Operationen auf dem Rechner des Benutzers unter dem Deckmantel der verwundbaren Site.

XSS-Angriffe können in drei Kategorien eingeteilt werden: gespeichert (auch persistent genannt), reflektiert (auch nicht permanent genannt) oder DOM-basiert.

- Gespeicherte XSS-Angriffe
  - : Das eingespritzte Skript wird dauerhaft auf den Zielservern gespeichert. Das Opfer ruft dann dieses schädliche Skript vom Server ab, wenn der Browser eine Datenanfrage sendet.
- Reflektierte XSS-Angriffe
  - : Wenn ein Benutzer dazu verleitet wird, auf einen schädlichen Link zu klicken, ein speziell gestaltetes Formular abzusenden oder eine schädliche Website zu besuchen, gelangt der eingespritzte Code zur anfälligen Website. Der Webserver reflektiert das eingespritzte Skript zurück an den Browser des Benutzers, etwa in einer Fehlermeldung, einem Suchergebnis oder einer anderen Antwort, die Daten enthält, die als Teil der Anfrage an den Server gesendet wurden. Der Browser führt den Code aus, da er annimmt, dass die Antwort von einem "vertrauenswürdigen" Server stammt, mit dem der Benutzer bereits interagiert hat.
- DOM-basierte XSS-Angriffe
  - : Die Nutzlast wird als Ergebnis der Modifizierung der DOM-Umgebung (im Browser des Opfers) ausgeführt, die vom ursprünglichen clientseitigen Skript verwendet wird. Das bedeutet, dass sich die Seite selbst nicht ändert, aber der clientseitige Code, der in der Seite enthalten ist, aufgrund der schädlichen Änderungen an der DOM-Umgebung unerwartet ausgeführt wird.

## Cross-Site-Request-Forgery (CSRF)

CSRF (manchmal auch XSRF genannt) ist eine verwandte Klasse von Angriffen. Der Angreifer veranlasst den Browser des Benutzers, ohne dessen Zustimmung oder Wissen eine Anfrage an das Backend der Website zu senden. Ein Angreifer kann eine XSS-Nutzlast verwenden, um einen CSRF-Angriff zu starten.

Wikipedia nennt ein gutes Beispiel für CSRF. In dieser Situation fügt jemand ein Bild ein, das eigentlich kein Bild ist (zum Beispiel in einem ungefilterten Chat oder Forum), sondern tatsächlich eine Anfrage an den Server Ihrer Bank zum Abheben von Geld ist:

```html
<img
  src="https://bank.example.com/withdraw?account=bob&amount=1000000&for=mallory" />
```

Wenn Sie nun in Ihr Bankkonto eingeloggt sind und Ihre Cookies noch gültig sind (und keine andere Validierung erfolgt), überweisen Sie Geld, sobald Sie das HTML laden, das dieses Bild enthält. Für Endpunkte, die eine POST-Anfrage erfordern, ist es möglich, programmgesteuert einen \<form>-Submit auszulösen (vielleicht in einem unsichtbaren `<iframe>`), wenn die Seite geladen wird:

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

Es gibt einige Techniken, die eingesetzt werden sollten, um dies zu verhindern:

- GET-Endpunkte sollten idempotent sein—Aktionen, die eine Änderung bewirken und keine Daten abrufen, sollten das Senden einer POST- (oder einer anderen HTTP-Methode-)Anfrage erfordern. POST-Endpunkte sollten nicht austauschbar GET-Anfragen mit Parametern im Query-String akzeptieren.
- Ein sitzungs-eindeutiges CSRF-Token sollte vom Server an den Browser bereitgestellt werden. Dieses Token kann dann immer dann eingefügt werden, wenn ein Formular vom Browser gesendet wird (in einem versteckten Eingabefeld im `<form>`-Element). Für alle nicht-GET-Anfragen, die das Potenzial haben, eine Aktion auszuführen, vergleicht der Server das gesendete Token mit dem gespeicherten Wert für die Sitzung. Wenn es eine Diskrepanz gibt, wird die Anfrage abgebrochen.
- Diese Methode des Schutzes beruht darauf, dass ein Angreifer das dem Benutzer zugewiesene CSRF-Token nicht vorhersagen kann. Das Token sollte bei der Anmeldung neu generiert werden.
- Cookies, die für sensible Aktionen verwendet werden (wie Sitzungscookies), sollten eine kurze Lebensdauer mit dem [`SameSite`-Attribut](/de/docs/Web/HTTP/Guides/Cookies#controlling_third-party_cookies_with_samesite) haben, das auf `Strict` oder `Lax` gesetzt ist. In unterstützenden Browsern wird dies sicherstellen, dass das Sitzungscookie nicht mit standortübergreifenden Anfragen gesendet wird und die Anfrage effektiv nicht authentifiziert beim Anwendungsserver ist.
- Sowohl CSRF-Tokens als auch `SameSite`-Cookies sollten eingesetzt werden. Dies stellt sicher, dass alle Browser geschützt sind und bietet Schutz in Situationen, in denen `SameSite`-Cookies nicht helfen können (wie bei Angriffen von einem separaten Subdomain).

Weitere Tipps zur Prävention finden Sie im OWASP CSRF Prevention Cheat Sheet.

## Man-in-the-Middle (MitM)

Eine dritte Partei fängt den Datenverkehr zwischen einem Webserver und einem Client (Browser) ab und gibt sich als Webserver aus, um Daten (wie Login-Daten oder Kreditkarteninformationen) zu erfassen. Der Datenverkehr wird möglicherweise mit Änderungen weitergeleitet. Offene WLAN-Netzwerke sind typische Mittel zur Durchführung dieses Angriffs.

## Session Hijacking

Session Hijacking besteht darin, Zugriff auf die authentifizierte Sitzung eines Benutzers zu erlangen und sie zu missbrauchen. Dies kann geschehen, indem ein Cookie für eine bestehende Sitzung gestohlen wird oder indem der Benutzer (oder sein Browser) dazu gebracht wird, ein Cookie mit einer vorher festgelegten Sitzungs-ID zu setzen.

Exfiltrationswege können durch den Einsatz einer strikten Content-Security-Policy eingeschränkt werden.

### Session Fixation

Eine dritte Partei kann die Sitzungskennung eines Benutzers bestimmen (d.h. durch Lesen oder Setzen) und daher mit dem Server als dieser Benutzer interagieren. Cookies zu stehlen, ist eine Möglichkeit, dies zu tun.

Erinnern Sie sich daran, dass eine Subdomain wie application.example.com ein Cookie setzen kann, das mit Anfragen an example.com oder andere Subdomains gesendet wird, indem das `Domain`-Attribut gesetzt wird:

```http
Set-Cookie: CSRF=e8b667; Secure; Domain=example.com
```

Wenn eine verwundbare Anwendung auf einer Subdomain verfügbar ist, kann dieser Mechanismus bei einem Session Fixation-Angriff missbraucht werden. Wenn der Benutzer eine Seite auf der übergeordneten Domain (oder einer anderen Subdomain) besucht, kann die Anwendung den bestehenden Wert im Cookie des Benutzers vertrauen. Dies könnte einem Angreifer ermöglichen, CSRF-Schutz zu umgehen oder eine Sitzung zu kapern, nachdem der Benutzer sich anmeldet. Alternativ, wenn die übergeordnete Domain {{Glossary("HSTS", "HTTP Strict-Transport-Security")}} nicht verwendet und `includeSubdomains` gesetzt ist, könnte ein Benutzer, der einem aktiven MitM unterliegt (möglicherweise verbunden mit einem offenen WLAN-Netzwerk), eine Antwort mit einem Set-Cookie-Header von einer nicht existierenden Subdomain erhalten. Das Endergebnis wäre dasselbe, wobei der Browser das illegitime Cookie speichert und es an alle anderen Seiten unter example.com sendet.

Session Fixation sollte in erster Linie durch Neugenerieren von Session-Cookie-Werten bei der Authentifizierung des Benutzers (selbst wenn bereits ein Cookie existiert) und durch das Verknüpfen eines CSRF-Tokens mit dem Benutzer verhindert werden.

### Session Side-Jacking

### Browser Hijacking Malware
