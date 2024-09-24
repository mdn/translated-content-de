---
title: Arten von Angriffen
slug: Web/Security/Types_of_attacks
l10n:
  sourceCommit: 6acc0b4325c55fd77dc578c5bd7fde008cf26310
---

{{QuickLinksWithSubpages("/de/docs/Web/Security")}}

Dieser Artikel beschreibt verschiedene Arten von Sicherheitsangriffen und Techniken zu deren Abmilderung.

## Click-jacking

[Clickjacking](/de/docs/Glossary/Clickjacking) ist die Praxis, einen Benutzer dazu zu verleiten, auf einen Link, eine Schaltfläche usw. zu klicken, die anders ist, als der Benutzer denkt. Dies kann beispielsweise verwendet werden, um Anmeldeinformationen zu stehlen oder die unwissentliche Erlaubnis des Benutzers zu erhalten, ein Stück Malware zu installieren. (Click-jacking wird manchmal als "User Interface Redressing" bezeichnet, obwohl dies ein Missbrauch des Begriffs "Redressing" ist.)

## Cross-Site Scripting (XSS)

Cross-Site Scripting (XSS) ist ein Sicherheitsmangel, der es einem Angreifer ermöglicht, bösartigen clientseitigen Code in eine Website einzufügen. Dieser Code wird von den Opfern ausgeführt und ermöglicht es den Angreifern, Zugriffskontrollen zu umgehen und Benutzer zu imitieren. Laut dem Open Web Application Security Project war XSS im Jahr 2017 die [siebt häufigste Sicherheitslücke in Webanwendungen](https://owasp.org/www-project-top-ten/2017/Top_10).

Diese Angriffe sind erfolgreich, wenn die Webanwendung nicht genügend Validierung oder Kodierung verwendet. Der Browser des Benutzers kann das bösartige Skript nicht als unzuverlässige Quelle erkennen und gibt ihm daher Zugriff auf Cookies, Sitzungstoken oder andere sensible, websitespezifische Informationen oder lässt das bösartige Skript die {{glossary("HTML")}}-Inhalte umschreiben.

Cross-Site Scripting-Angriffe treten normalerweise auf, wenn 1) Daten über eine nicht vertrauenswürdige Quelle (meistens eine Webanfrage) in eine Webanwendung gelangen oder 2) dynamische Inhalte an einen Webbenutzer gesendet werden, ohne auf bösartige Inhalte überprüft zu werden.

Der bösartige Inhalt umfasst oft {{glossary("JavaScript")}}, aber manchmal auch HTML, Flash oder jeglichen anderen Code, den der Browser ausführen kann. Die Vielfalt der auf XSS basierenden Angriffe ist nahezu unbegrenzt, aber sie umfassen häufig die Übertragung privater Daten wie Cookies oder anderer Sitzungsinformationen an den Angreifer, die Weiterleitung des Opfers zu einer vom Angreifer kontrollierten Webseite oder das Durchführen anderer bösartiger Operationen auf dem Rechner des Benutzers im Namen der anfälligen Seite.

XSS-Angriffe können in drei Kategorien unterteilt werden: gespeicherte (auch persistent genannt), reflektierte (auch nicht-persistent genannt) oder DOM-basierte.

- Gespeicherte XSS-Angriffe
  - : Das eingebrachte Skript wird permanent auf den Zielservern gespeichert. Das Opfer ruft dieses bösartige Skript dann vom Server ab, wenn der Browser eine Anfrage für Daten sendet.
- Reflektierte XSS-Angriffe
  - : Wenn ein Benutzer dazu gebracht wird, auf einen bösartigen Link zu klicken, ein speziell gestaltetes Formular abzusenden oder eine bösartige Seite zu besuchen, gelangt der eingebrachte Code zur anfälligen Website. Der Webserver reflektiert das eingebrachte Skript zurück an den Browser des Benutzers, beispielsweise in einer Fehlermeldung, einem Suchergebnis oder einer anderen Antwort, die Daten enthält, die als Teil der Anfrage an den Server gesendet wurden. Der Browser führt den Code aus, weil er davon ausgeht, dass die Antwort von einem "vertrauenswürdigen" Server stammt, mit dem der Benutzer bereits interagiert hat.
- DOM-basierte XSS-Angriffe
  - : Die Nutzlast wird als Ergebnis einer Änderung der DOM-Umgebung ausgeführt (im Browser des Opfers), die vom ursprünglichen clientseitigen Skript verwendet wird. Das heißt, die Seite selbst ändert sich nicht, aber der clientseitige Code auf der Seite wird unerwartet ausgeführt, wegen der bösartigen Änderungen der DOM-Umgebung.

## Cross-Site Request Forgery (CSRF)

CSRF (manchmal auch als XSRF bezeichnet) ist eine verwandte Klasse von Angriffen. Der Angreifer veranlasst den Browser des Benutzers, eine Anfrage an das Backend der Website zu senden, ohne dass der Benutzer davon weiß oder zustimmt. Ein Angreifer kann eine XSS-Nutzlast verwenden, um einen CSRF-Angriff zu starten.

Wikipedia erwähnt ein gutes Beispiel für CSRF. In dieser Situation schließt jemand ein Bild ein, das eigentlich kein Bild ist (zum Beispiel in einem ungefilterten Chat oder Forum), sondern tatsächlich eine Anfrage an den Server Ihrer Bank ist, um Geld abzuheben:

```html
<img
  src="https://bank.example.com/withdraw?account=bob&amount=1000000&for=mallory" />
```

Wenn Sie nun in Ihr Bankkonto eingeloggt sind und Ihre Cookies noch gültig sind (und keine andere Validierung stattfindet), werden Sie Geld überweisen, sobald Sie das HTML laden, das dieses Bild enthält. Für Endpunkte, die eine POST-Anfrage erfordern, ist es möglich, programmatisch einen \<form>-Absenden (vielleicht in einem unsichtbaren \<iframe>) auszulösen, wenn die Seite geladen wird:

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

- GET-Endpunkte sollten idempotent sein—Aktionen, die eine Änderung bewirken und keine Daten abrufen, sollten das Senden einer POST- (oder einer anderen HTTP-Methode) Anfrage erfordern. POST-Endpunkte sollten nicht austauschbar GET-Anfragen mit Parametern im Abfragezeichenfolgen akzeptieren.
- Ein sitzungs-eindeutiges CSRF-Token sollte vom Server an den Browser bereitgestellt werden. Dieses Token kann dann jedes Mal eingebunden werden, wenn ein Formular vom Browser gepostet wird (in einem versteckten Eingabefeld im `<form>`-Element). Bei allen nicht-GET-Anfragen, die das Potenzial haben, eine Aktion auszuführen, vergleicht der Server das gesendete Token mit dem gespeicherten Wert für die Sitzung. Bei einer Abweichung wird die Anfrage abgebrochen.
- Diese Schutzmethode beruht darauf, dass ein Angreifer das dem Benutzer zugewiesene CSRF-Token nicht vorhersagen kann. Das Token sollte beim Anmelden neu generiert werden.
- Cookies, die für sensible Aktionen verwendet werden (wie Sitzungscookies), sollten eine kurze Lebensdauer mit dem [`SameSite`-Attribut](/de/docs/Web/HTTP/Cookies#controlling_third-party_cookies_with_samesite) haben, das auf `Strict` oder `Lax` gesetzt ist. In unterstützenden Browsern wird dies sicherstellen, dass das Sitzungscookie nicht mit Cross-Site-Anfragen gesendet wird und dass die Anfrage effektiv nicht authentifiziert an den Anwendungsserver gesendet wird.
- Sowohl CSRF-Tokens als auch `SameSite`-Cookies sollten eingesetzt werden. Dies stellt sicher, dass alle Browser geschützt sind, und bietet Schutz, wo `SameSite`-Cookies nicht helfen können (z. B. bei Angriffen von einer separaten Subdomain).

Für weitere Präventionstipps siehe das OWASP CSRF Prevention Cheat Sheet.

## Man-in-the-middle (MitM)

Ein Dritter fängt den Datenverkehr zwischen einem Webserver und einem Client (Browser) ab und gibt sich als Webserver aus, um Daten (wie Anmeldeinformationen oder Kreditkarteninformationen) zu erfassen. Der Datenverkehr wird möglicherweise mit Änderungen weitergeleitet. Offene WLAN-Netzwerke sind typische Mittel zur Durchführung dieses Angriffs.

## Session Hijacking

Session Hijacking besteht darin, sich Zugang zu verschaffen und eine authentifizierte Sitzung eines Benutzers zu missbrauchen. Dies kann geschehen, indem ein Cookie für eine bestehende Sitzung gestohlen wird oder indem der Benutzer (oder dessen Browser) dazu gebracht wird, ein Cookie mit einer vordefinierten Sitzungs-ID zu setzen.

Exfiltrationswege können eingeschränkt werden, indem eine strikte Content-Security-Policy angewendet wird.

### Session Fixation

Ein Dritter kann die Sitzungskennung eines Benutzers bestimmen (d. h. indem er sie liest oder setzt) und daher mit dem Server als dieser Benutzer interagieren. Das Stehlen von Cookies ist eine Möglichkeit, dies zu tun.

Denken Sie daran, dass eine Subdomain wie application.example.com ein Cookie setzen kann, das mit Anfragen an example.com oder andere Subdomains gesendet wird, indem das `Domain`-Attribut gesetzt wird:

```http
Set-Cookie: CSRF=e8b667; Secure; Domain=example.com
```

Wenn eine anfällige Anwendung auf einer Subdomain verfügbar ist, kann dieser Mechanismus in einem Session Fixation-Angriff missbraucht werden. Wenn der Benutzer eine Seite auf der Parent-Domain (oder einer anderen Subdomain) besucht, vertraut die Anwendung möglicherweise dem vorhandenen Wert, der im Cookie des Benutzers gesendet wird. Dies könnte einem Angreifer ermöglichen, den CSRF-Schutz zu umgehen oder eine Sitzung zu kapern, nachdem der Benutzer sich eingeloggt hat. Alternativ, wenn die Parent-Domain kein [HTTP Strict-Transport-Security](/de/docs/Glossary/HSTS) mit `includeSubdomains` eingestellt hat, könnte einem Benutzer, der einem aktivem MitM ausgesetzt ist (vielleicht verbunden mit einem offenen WLAN-Netzwerk), eine Antwort mit einem Set-Cookie-Header von einer nicht existierenden Subdomain geliefert werden. Das Endergebnis wäre dasselbe, wobei der Browser das illegitime Cookie speichert und es an alle anderen Seiten unter example.com sendet.

Session Fixation sollte primär durch Regenerieren der Sitzungs-Cookie-Werte beim Authentifizieren des Benutzers (selbst wenn ein Cookie bereits existiert) gemildert werden, und indem jedes CSRF-Token an den Benutzer gebunden wird.

### Session Side-Jacking

### Browser Hijacking Malware
