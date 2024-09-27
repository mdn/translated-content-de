---
title: Arten von Angriffen
slug: Web/Security/Types_of_attacks
l10n:
  sourceCommit: 6acc0b4325c55fd77dc578c5bd7fde008cf26310
---

{{QuickLinksWithSubpages("/de/docs/Web/Security")}}

Dieser Artikel beschreibt verschiedene Arten von Sicherheitsangriffen und Techniken zu deren Abwehr.

## Click-jacking

[Clickjacking](/de/docs/Glossary/Clickjacking) ist die Praxis, einen Benutzer dazu zu verleiten, auf einen Link, eine Schaltfläche usw. zu klicken, der/die etwas anderes ist, als der Benutzer denkt. Dies kann beispielsweise dazu verwendet werden, Anmeldedaten zu stehlen oder die unwissentliche Zustimmung des Benutzers zur Installation von Schadsoftware zu erhalten. (Click-jacking wird manchmal als "Benutzeroberflächen-Manipulation" bezeichnet, obwohl dies ein Missbrauch des Begriffs "Manipulation" ist.)

## Cross-Site-Scripting (XSS)

Cross-Site-Scripting (XSS) ist ein Sicherheitsexploit, der es einem Angreifer ermöglicht, bösartigen Client-seitigen Code in eine Website einzuschleusen. Dieser Code wird von den Opfern ausgeführt und ermöglicht es den Angreifern, Zugriffskontrollen zu umgehen und Benutzer zu imitieren. Laut dem Open Web Application Security Project war XSS die [siebthäufigste Web-App-Schwachstelle](https://owasp.org/www-project-top-ten/2017/Top_10) im Jahr 2017.

Diese Angriffe sind erfolgreich, wenn die Web-App nicht ausreichend Validierung oder Kodierung verwendet. Der Browser des Benutzers kann das bösartige Skript nicht als unzuverlässig erkennen und gewährt ihm daher Zugriff auf Cookies, Session-Tokens oder andere sensible, spezifische Informationen der Seite oder lässt das bösartige Script den [HTML](/de/docs/Glossary/HTML)-Inhalt umschreiben.

Cross-Site-Scripting-Angriffe treten normalerweise auf, wenn 1) Daten durch eine nicht vertrauenswürdige Quelle in eine Web-App gelangen (häufig ein Web-Request) oder 2) dynamischer Inhalt an einen Web-Benutzer gesendet wird, ohne dass er auf bösartigen Inhalt überprüft wird.

Der bösartige Inhalt umfasst häufig [JavaScript](/de/docs/Glossary/JavaScript), aber manchmal auch HTML, Flash oder anderen Code, den der Browser ausführen kann. Die Vielzahl der auf XSS basierenden Angriffe ist nahezu unbegrenzt, umfasst jedoch häufig die Übertragung privater Daten wie Cookies oder anderer Sitzungsinformationen an den Angreifer, die Umleitung des Opfers auf eine vom Angreifer kontrollierte Webseite oder das Ausführen anderer bösartiger Operationen auf dem Computer des Benutzers, getarnt als die anfällige Seite.

XSS-Angriffe können in drei Kategorien unterteilt werden: gespeichert (auch persistent genannt), reflektiert (auch nicht-persistent genannt) oder DOM-basiert.

- Gespeicherte XSS-Angriffe
  - : Das eingespeiste Skript wird dauerhaft auf den Zielservern gespeichert. Das Opfer ruft dieses bösartige Skript dann vom Server ab, wenn der Browser eine Datenanfrage sendet.
- Reflektierte XSS-Angriffe
  - : Wenn ein Benutzer dazu verleitet wird, auf einen bösartigen Link zu klicken, ein speziell gestaltetes Formular einzureichen oder eine bösartige Website zu besuchen, gelangt der eingespeiste Code zur anfälligen Website. Der Web-Server reflektiert das eingespeiste Skript zurück an den Browser des Benutzers, beispielsweise in einer Fehlermeldung, einem Suchergebnis oder einer anderen Antwort, die Daten enthält, die als Teil der Anfrage an den Server gesendet wurden. Der Browser führt den Code aus, weil er annimmt, dass die Antwort von einem „vertrauenswürdigen“ Server stammt, mit dem der Benutzer bereits interagiert hat.
- DOM-basierte XSS-Angriffe
  - : Die Nutzlast wird als Ergebnis der Modifikation der DOM-Umgebung (im Browser des Opfers) ausgeführt, die vom ursprünglichen Client-seitigen Skript verwendet wird. Das heißt, die Seite selbst ändert sich nicht, aber der Client-seitige Code auf der Seite wird auf unerwartete Weise ausgeführt, weil die bösartigen Modifikationen an der DOM-Umgebung vorgenommen wurden.

## Cross-Site Request Forgery (CSRF)

CSRF (manchmal auch XSRF genannt), ist eine verwandte Klasse von Angriffen. Der Angreifer sorgt dafür, dass der Browser des Benutzers eine Anfrage an das Backend der Website ohne Zustimmung oder Wissen des Benutzers durchführt. Ein Angreifer kann eine XSS-Nutzlast verwenden, um einen CSRF-Angriff zu starten.

Wikipedia erwähnt ein gutes Beispiel für CSRF. In dieser Situation fügt jemand ein Bild ein, das eigentlich kein Bild ist (beispielsweise in einem ungefilterten Chat oder Forum), sondern in Wirklichkeit eine Anfrage an den Server Ihrer Bank ist, um Geld abzuheben:

```html
<img
  src="https://bank.example.com/withdraw?account=bob&amount=1000000&for=mallory" />
```

Nun, wenn Sie in Ihr Bankkonto eingeloggt sind und Ihre Cookies noch gültig sind (und es keine weitere Validierung gibt), überweisen Sie Geld, sobald Sie das HTML laden, das dieses Bild enthält. Bei Endpunkten, die eine POST-Anfrage erfordern, ist es möglich, eine `<form>`-Übermittlung (vielleicht in einem unsichtbaren `<iframe>`) auszulösen, wenn die Seite geladen wird:

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

- GET-Endpunkte sollten idempotent sein – Aktionen, die eine Änderung bewirken und keine Daten abrufen, sollten das Senden einer POST (oder anderer HTTP-Methoden-) Anfrage erfordern. POST-Endpunkte sollten nicht austauschbar GET-Anfragen mit Parametern in der Query-Zeichenkette akzeptieren.
- Ein sitzungs-einzigartiges CSRF-Token sollte vom Server an den Browser bereitgestellt werden. Dieses Token kann dann immer dann eingeschlossen werden, wenn ein Formular vom Browser gesendet wird (in einem versteckten Eingabefeld im `<form>`-Element). Bei allen nicht-GET-Anfragen, die das Potenzial haben, eine Aktion durchzuführen, vergleicht der Server das gesendete Token mit seinem gespeicherten Wert für die Sitzung. Wenn es eine Abweichung gibt, wird die Anfrage abgebrochen.
- Diese Methode des Schutzes setzt voraus, dass ein Angreifer das dem Benutzer zugewiesene CSRF-Token nicht vorhersagen kann. Das Token sollte bei der Anmeldung regeneriert werden.
- Cookies, die für sensible Aktionen verwendet werden (wie Sitzungs-Cookies), sollten eine kurze Lebensdauer haben und das [`SameSite`-Attribut](/de/docs/Web/HTTP/Cookies#controlling_third-party_cookies_with_samesite) sollte auf `Strict` oder `Lax` gesetzt sein. In unterstützten Browsern wird dies sicherstellen, dass das Sitzungs-Cookie nicht zusammen mit Cross-Site-Anfragen gesendet wird und dass die Anfrage effektiv nicht authentisiert an den Anwendungsserver übermittelt wird.
- Sowohl CSRF-Tokens als auch `SameSite`-Cookies sollten eingesetzt werden. Dies stellt sicher, dass alle Browser geschützt werden und bietet Schutz dort, wo `SameSite`-Cookies nicht helfen können (wie bei Angriffen von einem separaten Subdomain).

Für weitere Präventionstipps siehe das OWASP CSRF Prevention Cheat Sheet.

## Man-in-the-Middle (MitM)

Ein Dritter fängt den Datenverkehr zwischen einem Webserver und einem Client (Browser) ab und gibt sich als Webserver aus, um Daten (wie Anmeldeinformationen oder Kreditkarteninformationen) zu erfassen. Der Datenverkehr wird möglicherweise mit Änderungen weitergeleitet. Offene WLAN-Netzwerke sind typische Mittel zur Ausführung dieses Angriffs.

## Session Hijacking

Session Hijacking besteht darin, Zugriff auf die authentifizierte Sitzung eines Benutzers zu erlangen und diese zu missbrauchen. Dies kann durch das Stehlen eines Cookies für eine bestehende Sitzung geschehen, oder indem der Benutzer (oder sein Browser) dazu verleitet wird, ein Cookie mit einer vordefinierten Sitzungs-ID zu setzen.

Exfiltrationswege können durch den Einsatz einer strengen Content-Security-Policy begrenzt werden.

### Session Fixation

Ein Dritter ist in der Lage, den Sitzungsbezeichner eines Benutzers zu bestimmen (d.h. ihn zu lesen oder zu setzen) und daher als dieser Benutzer mit dem Server zu interagieren. Das Stehlen von Cookies ist eine Möglichkeit, dies zu tun.

Denken Sie daran, dass eine Subdomain wie application.example.com ein Cookie setzen kann, das mit Anfragen an example.com oder andere Subdomains gesendet wird, indem das `Domain`-Attribut gesetzt wird:

```http
Set-Cookie: CSRF=e8b667; Secure; Domain=example.com
```

Wenn eine anfällige Anwendung auf einer Subdomain verfügbar ist, kann dieser Mechanismus in einem Session-Fixation-Angriff ausgenutzt werden. Wenn der Benutzer eine Seite auf der übergeordneten Domain (oder einer anderen Subdomain) besucht, kann die Anwendung den vorhandenen Wert im Cookie des Benutzers vertrauen. Dies könnte einem Angreifer ermöglichen, CSRF-Schutz zu umgehen oder eine Sitzung nach der Anmeldung des Benutzers zu übernehmen.
Alternativ, wenn die übergeordnete Domäne [HTTP Strict-Transport-Security](/de/docs/Glossary/HSTS) nicht mit `includeSubdomains` gesetzt verwendet, könnte einem Benutzer, der einem aktiven MitM unterliegt (vielleicht verbunden mit einem offenen WLAN-Netzwerk), eine Antwort mit einem Set-Cookie-Header von einer nicht vorhandenen Subdomain serviert werden. Das Endergebnis wäre sehr ähnlich, wobei der Browser das illegitime Cookie speichert und es an alle anderen Seiten unter example.com sendet.

Session Fixation sollte in erster Linie dadurch gemindert werden, dass die Werte des Session-Cookies regeneriert werden, wenn sich der Benutzer authentifiziert (auch wenn bereits ein Cookie existiert) und indem jedes CSRF-Token auf den Benutzer gebunden wird.

### Session Side-Jacking

### Browser-Hijacking-Malware
