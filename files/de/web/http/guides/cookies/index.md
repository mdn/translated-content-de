---
title: Verwendung von HTTP-Cookies
slug: Web/HTTP/Guides/Cookies
l10n:
  sourceCommit: 972c6cc542e271e4c00def9465d7a0cc81011378
---

Ein **Cookie** (auch bekannt als Web-Cookie oder Browser-Cookie) ist ein kleines Datenelement, das ein Server an den Webbrowser eines Benutzers sendet. Der Browser kann Cookies speichern, neue erstellen, vorhandene verändern und bei späteren Anfragen an denselben Server zurücksenden. Cookies ermöglichen es Webanwendungen, begrenzte Datenmengen zu speichern und Zustandsinformationen zu merken; standardmäßig ist das HTTP-Protokoll [zustandslos](/de/docs/Web/HTTP/Guides/Overview#http_is_stateless_but_not_sessionless).

In diesem Artikel werden wir die Hauptverwendungszwecke von Cookies erkunden, bewährte Methoden für ihren Einsatz erklären und ihre Privatsphären- und Sicherheitsimplikationen betrachten.

## Wofür Cookies verwendet werden

Typischerweise nutzt der Server den Inhalt von HTTP-Cookies, um festzustellen, ob verschiedene Anfragen vom gleichen Browser/Benutzer kommen, und gibt dann eine personalisierte oder generische Antwort, wie es erforderlich ist. Folgendes beschreibt ein einfaches Benutzereinlog-System:

1. Der Benutzer sendet Anmeldeinformationen an den Server, zum Beispiel über die Formularübermittlung.
2. Wenn die Anmeldeinformationen korrekt sind, aktualisiert der Server die Benutzeroberfläche, um anzuzeigen, dass der Benutzer angemeldet ist, und antwortet mit einem Cookie, das eine Sitzungs-ID enthält, die den Anmeldezustand im Browser speichert.
3. Später wechselt der Benutzer auf eine andere Seite derselben Website. Der Browser sendet das Cookie mit der Sitzungs-ID zusammen mit der entsprechenden Anfrage, um anzuzeigen, dass er noch denkt, der Benutzer sei angemeldet.
4. Der Server überprüft die Sitzungs-ID und, wenn sie noch gültig ist, sendet er dem Benutzer eine personalisierte Version der neuen Seite. Wenn sie nicht gültig ist, wird die Sitzungs-ID gelöscht, und dem Benutzer wird eine generische Version der Seite angezeigt (oder möglicherweise eine "Zugriff verweigert"-Meldung, und er wird gebeten, sich erneut anzumelden).

![visuelle Darstellung der obigen Beschreibung des Anmelde-Systems](/shared-assets/images/diagrams/http/cookies/cookie-basic-example.png)

Cookies werden hauptsächlich für drei Zwecke verwendet:

- **Sitzungsverwaltung**: Benutzer-Anmeldestatus, Warenkorbinhalte, Spielergebnisse oder andere benutzersitzungsbezogene Details, die der Server speichern muss.
- **Personalisierung**: Benutzerpräferenzen wie Anzeigesprache und UI-Thema.
- **Nachverfolgung**: Aufzeichnung und Analyse des Benutzerverhaltens.

### Datenspeicherung

In den frühen Tagen des Webs, als es keine andere Option gab, wurden Cookies für allgemeine client-seitige Datenspeicherungszwecke verwendet. Moderne Speicher-APIs werden jetzt empfohlen, wie zum Beispiel die [Web Storage API](/de/docs/Web/API/Web_Storage_API) (`localStorage` und `sessionStorage`) und [IndexedDB](/de/docs/Web/API/IndexedDB_API).

Sie sind speziell für Speicherzwecke konzipiert, senden niemals Daten an den Server und haben nicht die Nachteile, die mit der Verwendung von Cookies für die Speicherung verbunden sind:

- Browser sind im Allgemeinen auf eine maximale Anzahl von Cookies pro Domain beschränkt (unterschiedlich je nach Browser, im Allgemeinen in den Hunderten) und eine maximale Größe pro Cookie (in der Regel 4KB). Speicher-APIs können größere Datenmengen speichern.
- Cookies werden mit jeder Anfrage gesendet, was die Leistung verschlechtern kann (zum Beispiel bei langsamen mobilen Datenverbindungen), insbesondere wenn Sie viele Cookies gesetzt haben.

> [!NOTE]
> Um gespeicherte Cookies (und andere Speicher, die eine Webseite verwendet) anzuzeigen, können Sie den [Storage Inspector](https://firefox-source-docs.mozilla.org/devtools-user/storage_inspector/index.html) in Firefox Developer Tools oder das [Application panel](https://developer.chrome.com/docs/devtools/progressive-web-apps) in Chrome Developer Tools verwenden.

## Erstellen, Entfernen und Aktualisieren von Cookies

Nach Erhalt einer HTTP-Anfrage kann ein Server eine oder mehrere {{HTTPHeader("Set-Cookie")}}-Header mit der Antwort senden, von denen jeder ein separates Cookie setzt. Ein Cookie wird gesetzt, indem ein Name-Wert-Paar angegeben wird, wie folgt:

```http
Set-Cookie: <cookie-name>=<cookie-value>
```

Die folgende HTTP-Antwort weist den empfangenden Browser an, ein Paar von Cookies zu speichern:

```http
HTTP/2.0 200 OK
Content-Type: text/html
Set-Cookie: yummy_cookie=chocolate
Set-Cookie: tasty_cookie=strawberry

[page content]
```

> [!NOTE]
> Erfahren Sie, wie der `Set-Cookie`-Header in verschiedenen serverseitigen Sprachen/Frameworks verwendet wird: [PHP](https://www.php.net/manual/en/function.setcookie.php), [Node.js](https://nodejs.org/docs/latest-v19.x/api/http.html#responsesetheadername-value), [Python](https://docs.python.org/3/library/http.cookies.html), [Ruby on Rails](https://api.rubyonrails.org/classes/ActionDispatch/Cookies.html).

Wenn eine neue Anfrage gestellt wird, sendet der Browser normalerweise zuvor gespeicherte Cookies für die aktuelle Domain mit einem {{HTTPHeader("Cookie")}}-HTTP-Header zurück an den Server:

```http
GET /sample_page.html HTTP/2.0
Host: www.example.org
Cookie: yummy_cookie=chocolate; tasty_cookie=strawberry
```

### Entfernung: Definition der Lebensdauer eines Cookies

Sie können ein Ablaufdatum oder einen Zeitraum angeben, nach dem das Cookie gelöscht werden soll und nicht mehr gesendet wird. Abhängig von den Attributen, die im {{HTTPHeader("Set-Cookie")}}-Header festgelegt sind, wenn die Cookies erstellt werden, können sie entweder _dauerhafte_ oder _Sitzungs_-Cookies sein:

- Dauerhafte Cookies werden nach dem im `Expires`-Attribut angegebenen Datum gelöscht:

  ```http
  Set-Cookie: id=a3fWa; Expires=Thu, 31 Oct 2021 07:28:00 GMT;
  ```

  oder nach dem im `Max-Age`-Attribut angegebenen Zeitraum:

  ```http
  Set-Cookie: id=a3fWa; Max-Age=2592000
  ```

  > [!NOTE]
  > `Expires` gibt es schon länger als `Max-Age`, jedoch ist `Max-Age` weniger fehleranfällig und hat Vorrang, wenn beide gesetzt sind. Der Grundgedanke dahinter ist, dass, wenn Sie ein `Expires`-Datum und eine Uhrzeit festlegen, diese relativ zum Client sind, auf dem das Cookie gesetzt wird. Wenn der Server auf eine andere Zeit eingestellt ist, könnten Fehler auftreten.

- _Sitzungs_-Cookies — Cookies ohne ein `Max-Age`- oder `Expires`-Attribut – werden gelöscht, wenn die aktuelle Sitzung endet. Der Browser definiert, wann die "aktuelle Sitzung" endet, und einige Browser verwenden _Sitzungswiederherstellung_ beim Neustart. Dies kann dazu führen, dass Sitzungs-Cookies unbegrenzt lange bestehen bleiben.

  > [!NOTE]
  > Wenn Ihre Website Benutzer authentifiziert, sollte sie Sitzungs-Cookies neu generieren und erneut senden, selbst wenn sie bereits existieren, wann immer sich ein Benutzer authentifiziert. Dieser Ansatz hilft, [Sitzungsmanipulation](https://owasp.org/www-community/attacks/Session_fixation) Angriffe zu verhindern, bei denen ein Dritter die Sitzung eines Benutzers wiederverwenden kann.

Um ein Cookie sofort zu entfernen, setzen Sie es erneut mit demselben Namen, Pfad und Domain (falls angegeben) und setzen Sie sein `Expires`-Attribut auf ein Datum in der Vergangenheit oder sein `Max-Age`-Attribut auf `0` oder negativ. Dies weist den Browser an, das Cookie sofort zu löschen. Zum Beispiel:

```http
Set-Cookie: id=a3fWa; Max-Age=0
```

Sie können auch alle mit einer registrierbaren Domain verbundenen Cookies mit dem {{httpheader("Clear-Site-Data")}}-Antwort-Header löschen. Zum Beispiel würde der folgende Header von `https://foo.example.com/` alle von `example.com` und all seinen Subdomains, wie `all.bar.example.com` gesendeten Cookies löschen.

```http
Clear-Site-Data: "cookies"
```

Es gibt einige Techniken, die darauf abzielen, Cookies nach deren Löschung wiederherzustellen. Diese sind als "Zombie"-Cookies bekannt. Diese Techniken verstoßen gegen die Prinzipien der Benutzer-[Privatsphäre](#privatsphäre_und_nachverfolgung) und -kontrolle, können gegen [Datenschutzgesetze](#cookie-bezogene_regelungen) verstoßen und könnten eine Website, die sie verwendet, rechtlich haftbar machen.

### Aktualisierung von Cookie-Werten

Um ein Cookie per HTTP zu aktualisieren, kann der Server einen {{HTTPHeader("Set-Cookie")}}-Header mit dem bestehenden Namen und einem neuen Wert des Cookies senden. Zum Beispiel:

```http
Set-Cookie: id=new-value
```

Es gibt mehrere Gründe, warum Sie dies tun möchten, zum Beispiel wenn ein Benutzer seine Präferenzen aktualisiert hat und die Anwendung die Änderungen in client-seitigen Daten widerspiegeln möchte (Sie könnten dies auch mit einem client-seitigen Speichermechanismus wie [Web Storage](/de/docs/Web/API/Web_Storage_API) tun).

#### Aktualisieren von Cookies über JavaScript

Im Browser können Sie neue Cookies über JavaScript mit der [`Document.cookie`](/de/docs/Web/API/Document/cookie)-Eigenschaft oder der asynchronen [Cookie Store API](/de/docs/Web/API/Cookie_Store_API) erstellen. Beachten Sie, dass alle unten stehenden Beispiele `Document.cookie` verwenden, da es die am weitesten verbreitete und etablierte Option ist.

```js
document.cookie = "yummy_cookie=chocolate";
document.cookie = "tasty_cookie=strawberry";
```

Sie können auch auf bestehende Cookies zugreifen und neue Werte für sie festlegen:

```js
console.log(document.cookie);
// logs "yummy_cookie=chocolate; tasty_cookie=strawberry"

document.cookie = "yummy_cookie=blueberry";

console.log(document.cookie);
// logs "tasty_cookie=strawberry; yummy_cookie=blueberry"
```

Aus Sicherheitsgründen können Sie Cookie-Werte nicht ändern, indem Sie einen aktualisierten `Cookie`-Header direkt beim Initiieren einer Anfrage senden, z.B. über [`fetch()`](/de/docs/Web/API/Window/fetch) oder [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest).

Es gibt gute Gründe, warum Sie JavaScript nicht erlauben sollten, Cookies überhaupt zu ändern. Sie können verhindern, dass JavaScript auf ein Cookie zugreift, indem Sie das [`HttpOnly`](/de/docs/Web/HTTP/Reference/Headers/Set-Cookie#httponly)-Attribut während der Erstellung angeben. Siehe den [Sicherheits](#sicherheit)-Abschnitt für weitere Details.

## Sicherheit

Wenn Sie Informationen in Cookies speichern, sind standardmäßig alle Cookie-Werte für den Endbenutzer sichtbar und können von ihm geändert werden. Sie möchten wirklich nicht, dass Ihre Cookies missbraucht werden — zum Beispiel von schlechten Akteuren abgerufen/geändert oder an Domains gesendet werden, an die sie nicht gesendet werden sollten. Die potenziellen Konsequenzen können von ärgerlich — Apps funktionieren nicht oder verhalten sich seltsam — bis katastrophal reichen. Ein Krimineller könnte zum Beispiel eine Sitzungs-ID stehlen und sie verwenden, um ein Cookie zu setzen, das es so aussehen lässt, als ob er als jemand anderes angemeldet ist, und so die Kontrolle über deren Bank- oder E-Commerce-Konto erlangen.

Sie können Ihre Cookies auf verschiedene Weise sichern, die in diesem Abschnitt überprüft werden.

### Zugriff auf Ihre Cookies blockieren

Sie können sicherstellen, dass Cookies sicher gesendet werden und nicht von ungewollten Parteien oder Skripten abgerufen werden, auf eine von zwei Arten: mit dem `Secure`-Attribut und dem `HttpOnly`-Attribut:

```http
Set-Cookie: id=a3fWa; Expires=Thu, 21 Oct 2021 07:28:00 GMT; Secure; HttpOnly
```

- Ein Cookie mit dem `Secure`-Attribut wird nur an den Server mit einer verschlüsselten Anfrage über das HTTPS-Protokoll gesendet. Es wird niemals mit ungesichertem HTTP gesendet (außer auf localhost), was bedeutet, dass [Manipulatoren in der Mitte (MITM)](/de/docs/Web/Security/Attacks/MITM) Angreifer nicht leicht darauf zugreifen können. Unsichere Seiten (mit `http:` in der URL) können keine Cookies mit dem `Secure`-Attribut setzen. Allerdings sollten Sie nicht annehmen, dass `Secure` jeglichen Zugriff auf sensible Informationen in Cookies verhindert. Zum Beispiel könnte jemand mit Zugang zur Festplatte des Clients (oder JavaScript, wenn das `HttpOnly`-Attribut nicht gesetzt ist) die Informationen lesen und ändern.

- Ein Cookie mit dem `HttpOnly`-Attribut kann nicht durch JavaScript, zum Beispiel über [`Document.cookie`](/de/docs/Web/API/Document/cookie), abgerufen werden; es kann nur erreicht werden, wenn es den Server erreicht. Cookies, die Benutzersitzungen aufrechterhalten, sollten zum Beispiel das `HttpOnly`-Attribut gesetzt haben — es wäre wirklich unsicher, sie JavaScript zur Verfügung zu stellen. Diese Vorsichtsmaßnahme hilft, Cross-Site-Scripting ([XSS](/de/docs/Web/Security/Attacks/XSS)) Angriffe zu mildern.

> [!NOTE]
> Abhängig von der Anwendung möchten Sie möglicherweise einen undurchsichtigen Bezeichner verwenden, den der Server nachschlägt, anstatt sensible Informationen direkt in Cookies zu speichern, oder alternative Authentifizierungs/Vertraulichkeitsmechanismen wie [JSON Web Tokens](https://www.jwt.io/) untersuchen.

### Definieren, wo Cookies gesendet werden

Die `Domain`- und `Path`-Attribute definieren den _Geltungsbereich_ eines Cookies: an welche URLs die Cookies gesendet werden.

- Das `Domain`-Attribut gibt an, welcher Server ein Cookie empfangen kann. Wenn angegeben, sind Cookies auf dem angegebenen Server und seinen Subdomains verfügbar. Wenn Sie zum Beispiel `Domain=mozilla.org` von `mozilla.org` setzen, sind die Cookies auf dieser Domain und Subdomains wie `developer.mozilla.org` verfügbar.

  ```http
  Set-Cookie: id=a3fWa; Expires=Thu, 21 Oct 2021 07:28:00 GMT; Secure; HttpOnly; Domain=mozilla.org
  ```

  Wenn der `Set-Cookie`-Header kein `Domain`-Attribut spezifiziert, sind die Cookies auf dem Server verfügbar, der es setzt, _aber nicht auf seinen Subdomains_. Daher ist das Angeben von `Domain` weniger restriktiv als das Weglassen.
  Beachten Sie, dass ein Server das `Domain`-Attribut nur auf seine eigene Domain oder eine übergeordnete Domain setzen kann, nicht auf eine Subdomain oder eine andere Domain.
  So könnte zum Beispiel ein Server mit der Domain `foo.example.com` das Attribut auf `example.com` oder `foo.example.com` setzen, aber nicht auf `bar.foo.example.com` oder `elsewhere.com` (die Cookies würden dennoch an Subdomains wie `bar.foo.example.com` _gesendet_).
  Weitere Details finden Sie unter [Ungültige Domains](/de/docs/Web/HTTP/Reference/Headers/Set-Cookie#invalid_domains).

- Das `Path`-Attribut gibt einen URL-Pfad an, der in der angeforderten URL vorhanden sein muss, um den `Cookie`-Header zu senden. Zum Beispiel:

  ```http
  Set-Cookie: id=a3fWa; Expires=Thu, 21 Oct 2021 07:28:00 GMT; Secure; HttpOnly; Path=/docs
  ```

  Das `%x2F` ("/") Zeichen wird als Verzeichnistrennzeichen betrachtet, und Unterverzeichnisse stimmen ebenfalls überein. Wenn Sie zum Beispiel `Path=/docs` festlegen, stimmen diese Anforderungspfade überein:
  - `/docs`
  - `/docs/`
  - `/docs/Web/`
  - `/docs/Web/HTTP`

  Aber diese Anforderungspfade nicht:
  - `/`
  - `/docsets`
  - `/fr/docs`

  > [!NOTE]
  > Das `path`-Attribut ermöglicht es Ihnen zu steuern, welche Cookies der Browser basierend auf den verschiedenen Teilen einer Website sendet.
  > Es ist nicht als Sicherheitsmaßnahme gedacht und [schützt nicht](/de/docs/Web/API/Document/cookie#security) gegen unbefugtes Lesen des Cookies von einem anderen Pfad.

### Kontrolle von Drittanbieter-Cookies mit `SameSite`

Das [`SameSite`](/de/docs/Web/HTTP/Reference/Headers/Set-Cookie#samesitesamesite-value) Attribut ermöglicht es Servern zu spezifizieren, ob/wann Cookies mit standortübergreifenden Anfragen gesendet werden — d.h. [Drittanbieter-Cookies](/de/docs/Web/Privacy/Guides/Third-party_cookies). Standortübergreifende Anfragen sind Anfragen, bei denen die {{Glossary("Site", "Site")}} (die registrierbare Domain) und/oder das Schema (http oder https) nicht mit der Site übereinstimmen, die der Benutzer gerade besucht. Dies schließt Anfragen ein, die gesendet werden, wenn Links auf anderen Sites angeklickt werden, um zu Ihrer Site zu navigieren, und jede Anfrage, die von eingebetteten Drittanbieter-Inhalten gesendet wird.

`SameSite` hilft, das Auslaufen von Informationen zu verhindern, bewahrt die Benutzer-[Privatsphäre](#privatsphäre_und_nachverfolgung) und bietet einen gewissen Schutz vor {{Glossary("CSRF", "Cross-Site Request Forgery")}}-Angriffen. Es hat drei mögliche Werte: `Strict`, `Lax` und `None`:

- `Strict` bewirkt, dass der Browser das Cookie nur als Antwort auf Anfragen sendet, die von der Ursprungs-Site des Cookies stammen. Dies sollte verwendet werden, wenn Sie Cookies haben, die sich auf Funktionen beziehen, die immer hinter einer anfänglichen Navigation liegen, wie z.B. Authentifizierung oder das Speichern von Warenkorbinformationen.

  ```http
  Set-Cookie: cart=110045_77895_53420; SameSite=Strict
  ```

  > [!NOTE]
  > Cookies, die für sensible Informationen verwendet werden, sollten auch eine kurze [Lebensdauer](#removal_defining_the_lifetime_of_a_cookie) haben.

- `Lax` ist ähnlich, außer dass der Browser das Cookie auch sendet, wenn der Benutzer zur Ursprungs-Site des Cookies _navigiert_ (auch wenn der Benutzer von einer anderen Site kommt). Dies ist nützlich für Cookies, die die Anzeige einer Site beeinflussen — zum Beispiel könnten Sie Partnerproduktinformationen zusammen mit einem Affiliate-Link auf Ihrer Website haben. Wenn auf diesen Link geklickt wird, um zur Partnerseite zu gelangen, möchte sie möglicherweise ein Cookie setzen, das angibt, dass der Affiliate-Link geklickt wurde, was ein Belohnungsbanner anzeigt und einen Rabatt gewährt, wenn das Produkt gekauft wird.

  ```http
  Set-Cookie: affiliate=e4rt45dw; SameSite=Lax
  ```

- `None` gibt an, dass Cookies sowohl bei von der Quelle ausgehenden als auch bei standortübergreifenden Anfragen gesendet werden. Dies ist nützlich, wenn Sie Cookies zusammen mit Anfragen senden möchten, die von Dritten-Inhalten auf anderen Sites gemacht werden, z.B. Anbieter von Werbetechnologie oder Analysen. Beachten Sie, dass wenn `SameSite=None` gesetzt ist, das auch das `Secure`-Attribut gesetzt sein muss — `SameSite=None` erfordert einen _sicheren Kontext_.

  ```http
  Set-Cookie: widget_session=7yjgj57e4n3d; SameSite=None; Secure; HttpOnly
  ```

Wenn kein `SameSite`-Attribut gesetzt ist, wird das Cookie standardmäßig als `Lax` behandelt.

### Cookie-Präfixe

Aufgrund des Designs des Cookie-Mechanismus kann ein Server nicht bestätigen, dass ein Cookie von einem sicheren Ursprung gesetzt wurde oder sogar feststellen, _wo_ ein Cookie ursprünglich gesetzt wurde.

Eine Anwendung auf einer Subdomain kann ein Cookie mit dem `Domain`-Attribut setzen, das den Zugriff auf dieses Cookie auf alle anderen Subdomains ermöglicht. Dieser Mechanismus kann in einem [Session-Fixation-Angriff](https://owasp.org/www-community/attacks/Session_fixation) missbraucht werden.

Als eine [Defense-in-Depth-Maßnahme](<https://en.wikipedia.org/wiki/Defense_in_depth_(computing)>) können Sie _Cookie-Präfixe_ verwenden, um spezifische Einschränkungen für die Attribute eines Cookies in unterstützenden Benutzeragenten zu verhängen. Alle Cookie-Präfixe beginnen mit einem Doppel-Underscore (`__`) und enden mit einem Bindestrich (`-`). Vier Präfixe sind verfügbar:

- **`__Secure-`**: Cookies mit Namen, die mit `__Secure-` beginnen, müssen mit dem `Secure`-Attribut von einer sicheren Seite (HTTPS) gesetzt werden.
- **`__Host-`**: Cookies mit Namen, die mit `__Host-` beginnen, müssen mit dem `Secure`-Attribut von einer sicheren Seite (HTTPS) gesetzt werden. Zusätzlich dürfen sie kein `Domain`-Attribut spezifiziert haben, und das `Path`-Attribut muss auf `/` gesetzt sein. Dies garantiert, dass solche Cookies nur an den Host gesendet werden, der sie gesetzt hat, und nicht an einen anderen Host auf der Domain. Es garantiert auch, dass sie hostweit gesetzt sind und auf keinem Pfad auf diesem Host überschrieben werden können. Diese Kombination ergibt ein Cookie, das so nahe wie möglich daran ist, den Ursprung als Sicherheitsgrenze zu behandeln.
- **`__Http-`**: Cookies mit Namen, die mit `__Http-` beginnen, müssen mit dem `Secure`-Flag von einer sicheren Seite (HTTPS) gesetzt werden und zusätzlich muss das `HttpOnly`-Attribut gesetzt sein, um zu beweisen, dass sie über den `Set-Cookie`-Header gesetzt wurden (sie können nicht über JavaScript-Funktionen wie [`Document.cookie`](/de/docs/Web/API/Document/cookie) oder die [Cookie Store API](/de/docs/Web/API/Cookie_Store_API) gesetzt oder geändert werden).
- **`__Host-Http-`**: Cookies mit Namen, die mit `__Host-Http-` beginnen, müssen mit dem `Secure`-Flag von einer sicheren Seite (HTTPS) gesetzt werden und müssen das `HttpOnly`-Attribut gesetzt haben, um zu beweisen, dass sie über den `Set-Cookie`-Header gesetzt wurden. Zusätzlich unterliegen sie denselben Beschränkungen wie Cookies mit `__Host-`-Präfix. Diese Kombination ergibt ein Cookie, das so nahe wie möglich daran ist, den Ursprung als Sicherheitsgrenze zu behandeln, während gleichzeitig sichergestellt wird, dass Entwickler und Serverbetreiber wissen, dass sein Geltungsbereich auf HTTP-Anfragen beschränkt ist.

Der Browser wird Cookies mit diesen Präfixen ablehnen, die ihre Einschränkungen nicht einhalten. Da der Anwendungsserver nur auf einen bestimmten Cookienamen überprüft, wenn er feststellt, ob der Benutzer authentifiziert ist oder ein CSRF-Token korrekt ist, wirkt dies effektiv als Verteidigungsmaßnahme gegen [Session Fixation](https://owasp.org/www-community/attacks/Session_fixation).

> [!NOTE]
> Auf dem Server _muss_ die Webanwendung auf den vollständigen Namen des Cookies einschließlich des Präfixes überprüfen. Benutzeragenten _entfernen nicht_ das Präfix vom Cookie, bevor es in einem {{HTTPHeader("Cookie")}}-Header einer Anfrage gesendet wird.

Weitere Informationen zu Cookie-Präfixen und dem aktuellen Stand der Browser-Unterstützung finden Sie im [Präfix-Abschnitt des Set-Cookie-Referenzartikels](/de/docs/Web/HTTP/Reference/Headers/Set-Cookie#cookie_prefixes).

## Privatsphäre und Nachverfolgung

Früher haben wir darüber gesprochen, wie das `SameSite`-Attribut verwendet werden kann, um zu kontrollieren, wann Drittanbieter-Cookies gesendet werden können, und dass dies dazu beitragen kann, die Privatsphäre des Benutzers zu wahren. Privatsphäre ist ein sehr wichtiger Aspekt beim Erstellen von Websites, der, wenn er richtig gemacht wird, Vertrauen bei Ihren Benutzern aufbauen kann. Wenn er schlecht ausgeführt wird, kann er dieses Vertrauen vollständig untergraben und alle möglichen anderen Probleme verursachen.

Drittanbieter-Cookies können von in Sites eingebetteten Drittanbieter-Inhalten über {{htmlelement("iframe")}}s gesetzt werden. Sie haben viele legitime Verwendungen, einschließlich der gemeinsamen Nutzung von Benutzerprofilinformationen, der Zählung von Anzeigen-Impressions oder dem Sammeln von Analysen über verschiedene verwandte Domains hinweg.

Drittanbieter-Cookies können jedoch auch verwendet werden, um unangenehme, invasive Benutzererfahrungen zu schaffen. Ein Drittanbieter-Server kann ein Profil des Browserverlaufs und -verhaltens eines Benutzers basierend auf Cookies erstellen, die ihm von demselben Browser beim Zugriff auf mehrere Sites gesendet werden. Das klassische Beispiel ist, wenn Sie auf einer Site nach Produktinformationen suchen und dann überall im Web von Anzeigen für ähnliche Produkte verfolgt werden.

Browser-Hersteller wissen, dass Benutzer dieses Verhalten nicht mögen, und haben daher alle begonnen, Drittanbieter-Cookies standardmäßig zu blockieren oder zumindest Pläne gemacht, in diese Richtung zu gehen. Drittanbieter-Cookies (oder einfach nur Tracking-Cookies) können auch durch andere Browser-Einstellungen oder -Erweiterungen blockiert werden.

> [!NOTE]
> Das Blockieren von Cookies kann dazu führen, dass einige Drittanbieter-Komponenten (wie Widgets sozialer Medien) nicht wie beabsichtigt funktionieren. Da Browser weitere Einschränkungen für Drittanbieter-Cookies auferlegen, sollten Entwickler beginnen, nach Wegen zu suchen, ihre Abhängigkeit von ihnen zu reduzieren.

Siehe unseren Artikel über [Drittanbieter-Cookies](/de/docs/Web/Privacy/Guides/Third-party_cookies) für detaillierte Informationen zu Drittanbieter-Cookies, den damit verbundenen Problemen und welche Alternativen verfügbar sind. Siehe unsere [Privatsphäre](/de/docs/Web/Privacy)-Startseite für weitere Informationen zur Privatsphäre im Allgemeinen.

## Cookie-bezogene Regelungen

Gesetzgebungen oder Vorschriften, die die Verwendung von Cookies abdecken, umfassen:

- Die [Allgemeine Datenschutzverordnung](https://gdpr.eu/) (GDPR) in der Europäischen Union
- Die ePrivacy-Richtlinie in der EU
- Das California Consumer Privacy Act

Diese Vorschriften haben eine globale Reichweite. Sie gelten für jede Website im _World Wide_ Web, die von Benutzern aus diesen Rechtskreisen (die EU und Kalifornien, mit dem Hinweis, dass das Gesetz von Kalifornien nur auf Unternehmen mit einem Bruttoumsatz von über 25 Millionen USD anwendbar ist, unter anderem Dinge) aufgerufen werden.

Diese Vorschriften beinhalten Anforderungen wie:

- Benutzer darüber zu informieren, dass Ihre Site Cookies verwendet.
- Den Benutzern die Möglichkeit zu geben, den Erhalt einiger oder aller Cookies abzulehnen.
- Den Benutzern zu ermöglichen, den Großteil Ihres Dienstes zu nutzen, ohne Cookies zu erhalten.

Es kann andere Vorschriften geben, die die Verwendung von Cookies in Ihrem Gebiet regeln. Die Verantwortung liegt bei Ihnen, diese Vorschriften zu kennen und einzuhalten. Es gibt Unternehmen, die "Cookie-Banner"-Code anbieten, der Ihnen hilft, diesen Vorschriften nachzukommen.

> [!NOTE]
> Unternehmen sollten die Arten von Cookies offenlegen, die sie auf ihren Seiten verwenden, um Transparenz zu gewährleisten und den Vorschriften zu entsprechen. Siehe zum Beispiel [Googles Hinweis zu den Arten von Cookies, die es verwendet](https://policies.google.com/technologies/cookies#types-of-cookies) und Mozillas [Websites, Communications & Cookies Privacy Notice](https://www.mozilla.org/en-US/privacy/websites/#cookies).

## Siehe auch

- Verwandte HTTP-Header: {{HTTPHeader("Set-Cookie")}}, {{HTTPHeader("Cookie")}}
- Verwandte JavaScript-APIs: [`Document.cookie`](/de/docs/Web/API/Document/cookie), [`Navigator.cookieEnabled`](/de/docs/Web/API/Navigator/cookieEnabled), [Cookie Store API](/de/docs/Web/API/Cookie_Store_API)
- [Drittanbieter-Cookies](/de/docs/Web/Privacy/Guides/Third-party_cookies)
- [Cookie-Spezifikation: RFC 6265](https://datatracker.ietf.org/doc/html/rfc6265)
- [Cookies, die DSGVO und die ePrivacy-Richtlinie](https://gdpr.eu/cookies/)
