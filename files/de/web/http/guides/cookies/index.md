---
title: Verwendung von HTTP-Cookies
slug: Web/HTTP/Guides/Cookies
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{HTTPSidebar}}

Ein **Cookie** (auch als Web-Cookie oder Browser-Cookie bekannt) ist ein kleines Datenstück, das ein Server an den Webbrowser eines Nutzers sendet. Der Browser kann Cookies speichern, neue Cookies erstellen, bestehende modifizieren und sie mit späteren Anfragen zurück an denselben Server senden. Cookies ermöglichen es Webanwendungen, begrenzte Datenmengen zu speichern und Zustandsinformationen zu erinnern, denn das HTTP-Protokoll ist von Natur aus [zustandslos](/de/docs/Web/HTTP/Guides/Overview#http_is_stateless_but_not_sessionless).

In diesem Artikel werden wir die Hauptanwendungsgebiete von Cookies erkunden, bewährte Praktiken für ihre Nutzung erklären und ihre Datenschutz- und Sicherheitsimplikationen untersuchen.

## Wofür Cookies verwendet werden

Typischerweise verwendet der Server den Inhalt von HTTP-Cookies, um zu bestimmen, ob unterschiedliche Anfragen von demselben Browser/Nutzer stammen, und gibt dann eine personalisierte oder generische Antwort. Im Folgenden wird ein einfaches Benutzeranmelde-System beschrieben:

1. Der Benutzer sendet Anmeldeinformationen an den Server, z. B. über ein Formular.
2. Sind die Anmeldeinformationen korrekt, aktualisiert der Server die Benutzeroberfläche, um anzuzeigen, dass der Benutzer angemeldet ist, und antwortet mit einem Cookie, das eine Sitzungs-ID enthält und den Anmeldestatus im Browser aufzeichnet.
3. Zu einem späteren Zeitpunkt wechselt der Benutzer auf eine andere Seite derselben Website. Der Browser sendet das Cookie mit der Sitzungs-ID zusammen mit der entsprechenden Anfrage, um anzuzeigen, dass er den Benutzer immer noch als angemeldet betrachtet.
4. Der Server überprüft die Sitzungs-ID und sendet dem Benutzer, falls sie noch gültig ist, eine personalisierte Version der neuen Seite. Ist sie ungültig, wird die Sitzungs-ID gelöscht, und dem Benutzer wird eine generische Version der Seite angezeigt (oder möglicherweise eine "Zugriff verweigert"-Nachricht und eine erneute Anmeldung).

![visuelle Darstellung der obigen Anmelde-Systembeschreibung](cookie-basic-example.png)

Cookies werden hauptsächlich für drei Zwecke verwendet:

- **Sitzungsmanagement**: Anmeldestatus des Benutzers, Inhalte eines Warenkorbs, Spielergebnisse oder andere benutzerbezogene Sitzungsdetails, die der Server sich merken muss.
- **Personalisierung**: Benutzereinstellungen wie Anzeigesprache und UI-Thema.
- **Tracking**: Erfassung und Analyse des Benutzerverhaltens.

### Datenspeicherung

In den frühen Tagen des Webs, als es keine anderen Optionen gab, wurden Cookies für allgemeine clientseitige Datenspeicherungszwecke verwendet. Moderne Speicher-APIs werden jetzt empfohlen, z. B. die [Web Storage API](/de/docs/Web/API/Web_Storage_API) (`localStorage` und `sessionStorage`) und [IndexedDB](/de/docs/Web/API/IndexedDB_API).

Diese sind mit Blick auf die Speicherung konzipiert, senden niemals Daten an den Server und haben nicht die Nachteile, die mit der Verwendung von Cookies für die Speicherung einhergehen:

- Browser sind im Allgemeinen auf eine maximale Anzahl von Cookies pro Domain beschränkt (unterschiedlich je nach Browser, normalerweise im Hunderterbereich) und eine maximale Größe pro Cookie (in der Regel 4KB). Speicher-APIs können größere Datenmengen speichern.
- Cookies werden mit jeder Anfrage gesendet, was die Leistung beeinträchtigen kann (beispielsweise bei langsamen mobilen Datenverbindungen), insbesondere wenn viele Cookies gesetzt sind.

> [!NOTE]
> Um gespeicherte Cookies (und andere Speicher, die eine Webseite nutzt) anzusehen, können Sie den [Storage Inspector](https://firefox-source-docs.mozilla.org/devtools-user/storage_inspector/index.html) in den Firefox Developer Tools oder das [Application Panel](https://developer.chrome.com/docs/devtools/progressive-web-apps) in den Chrome Developer Tools verwenden.

## Erstellen, Entfernen und Aktualisieren von Cookies

Nachdem eine HTTP-Anfrage empfangen wurde, kann ein Server mit der Antwort einen oder mehrere {{HTTPHeader("Set-Cookie")}}-Header senden, von denen jeder ein separates Cookie setzt. Ein Cookie wird durch die Angabe eines Werte-Paars wie folgt gesetzt:

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
> Erfahren Sie, wie Sie den `Set-Cookie`-Header in verschiedenen serverseitigen Sprachen/Frameworks verwenden: [PHP](https://www.php.net/manual/en/function.setcookie.php), [Node.js](https://nodejs.org/docs/latest-v19.x/api/http.html#responsesetheadername-value), [Python](https://docs.python.org/3/library/http.cookies.html), [Ruby on Rails](https://api.rubyonrails.org/classes/ActionDispatch/Cookies.html).

Wenn eine neue Anfrage gestellt wird, sendet der Browser normalerweise vorher gespeicherte Cookies für die aktuelle Domain innerhalb eines {{HTTPHeader("Cookie")}}-HTTP-Headers zurück an den Server:

```http
GET /sample_page.html HTTP/2.0
Host: www.example.org
Cookie: yummy_cookie=chocolate; tasty_cookie=strawberry
```

### Entfernen: Definition der Lebensdauer eines Cookies

Sie können ein Ablaufdatum oder einen Zeitraum angeben, nach dem das Cookie gelöscht und nicht mehr gesendet werden soll. Abhängig von den Attributen, die im {{HTTPHeader("Set-Cookie")}}-Header festgelegt sind, als die Cookies erstellt werden, können sie entweder _dauerhaft_ oder _sitzungsbasiert_ sein:

- Dauerhafte Cookies werden nach dem im `Expires`-Attribut angegebenen Datum gelöscht:

  ```http
  Set-Cookie: id=a3fWa; Expires=Thu, 31 Oct 2021 07:28:00 GMT;
  ```

  oder nach dem im `Max-Age`-Attribut angegebenen Zeitraum:

  ```http
  Set-Cookie: id=a3fWa; Max-Age=2592000
  ```

  > **Hinweis:** `Expires` ist länger verfügbar als `Max-Age`, jedoch ist `Max-Age` weniger fehleranfällig und hat Vorrang, wenn beide gesetzt sind. Der Grund dafür ist, dass, wenn Sie ein `Expires`-Datum und eine Zeit setzen, diese relativ zum Client sind, auf dem das Cookie gesetzt wird. Wenn der Server auf eine andere Zeit eingestellt ist, könnte das zu Fehlern führen.

- _Sitzungscookies_ – Cookies ohne ein `Max-Age`- oder `Expires`-Attribut – werden gelöscht, wenn die aktuelle Sitzung endet. Der Browser definiert, wann die "aktuelle Sitzung" endet, und einige Browser verwenden _Sitzungswiederherstellung_ beim Neustart. Dies kann dazu führen, dass Sitzungscookies unbegrenzt bestehen.

  > [!NOTE]
  > Wenn Ihre Seite Benutzer authentifiziert, sollte sie Sitzungs-Cookies regenerieren und erneut senden, selbst wenn diese bereits existieren, immer dann, wenn sich ein Benutzer authentifiziert. Dieser Ansatz hilft, [Sitzungsfixierungsangriffe](/de/docs/Web/Security/Types_of_attacks#session_fixation) zu verhindern, bei denen ein Dritter die Sitzung eines Benutzers wiederverwenden kann.

Es gibt einige Techniken, die darauf abzielen, Cookies nach ihrer Löschung neu zu erstellen. Diese sind als "Zombie-Cookies" bekannt. Diese Techniken verletzen die Prinzipien der Benutzer[privatsphäre](#datenschutz_und_tracking) und Kontrolle, könnten gegen [Datenschutzbestimmungen](#cookie-bezogene_vorschriften) verstoßen und eine Website in rechtliche Haftung bringen, wenn sie sie verwendet.

### Aktualisieren von Cookie-Werten

Um ein Cookie über HTTP zu aktualisieren, kann der Server einen {{HTTPHeader("Set-Cookie")}}-Header mit dem bestehenden Namen des Cookies und einem neuen Wert senden. Beispielsweise:

```http
Set-Cookie: id=new-value
```

Es gibt mehrere Gründe, warum Sie dies tun möchten, z. B. wenn ein Benutzer seine Präferenzen aktualisiert hat und die Anwendung die Änderungen in Client-seitigen Daten widerspiegeln möchte (Sie könnten dies auch mit einem Client-seitigen Speicher-Mechanismus wie [Web Storage](/de/docs/Web/API/Web_Storage_API) tun).

#### Aktualisieren von Cookies über JavaScript

Im Browser können Sie neue Cookies über JavaScript mit der [`Document.cookie`](/de/docs/Web/API/Document/cookie)-Eigenschaft oder die asynchrone [Cookie Store API](/de/docs/Web/API/Cookie_Store_API) erstellen. Beachten Sie, dass alle untenstehenden Beispiele `Document.cookie` verwenden, da es die am weitesten unterstützte/etablierte Option ist.

```js
document.cookie = "yummy_cookie=chocolate";
document.cookie = "tasty_cookie=strawberry";
```

Sie können auch auf bestehende Cookies zugreifen und ihnen neue Werte zuweisen, vorausgesetzt, das [`HttpOnly`](/de/docs/Web/HTTP/Reference/Headers/Set-Cookie#httponly)-Attribut ist nicht auf ihnen gesetzt (d.h. im `Set-Cookie`-Header, der es erstellt hat):

```js
console.log(document.cookie);
// logs "yummy_cookie=chocolate; tasty_cookie=strawberry"

document.cookie = "yummy_cookie=blueberry";

console.log(document.cookie);
// logs "tasty_cookie=strawberry; yummy_cookie=blueberry"
```

Beachten Sie, dass Sie aus Sicherheitsgründen keine Cookie-Werte ändern können, indem Sie einen aktualisierten `Cookie`-Header direkt senden, wenn Sie eine Anfrage initiieren, d.h. über [`fetch()`](/de/docs/Web/API/Window/fetch) oder [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest). Beachten Sie, dass es auch gute Gründe gibt, warum Sie nicht zulassen sollten, dass JavaScript Cookies modifiziert – das `HttpOnly`-Attribut sollte bei der Erstellung gesetzt werden. Weitere Details finden Sie im Abschnitt [Sicherheit](#sicherheit).

## Sicherheit

Wenn Sie Informationen in Cookies speichern, sind standardmäßig alle Cookie-Werte für den Endbenutzer sichtbar und können von ihm geändert werden. Sie möchten wirklich nicht, dass Ihre Cookies missbraucht werden – z. B. von böswilligen Akteuren abgerufen/verändert werden oder an Domains gesendet werden, wo sie nicht gesendet werden sollten. Die potenziellen Konsequenzen können von ärgerlich (z. B. dass Apps nicht funktionieren oder seltsames Verhalten aufweisen) bis katastrophal reichen. Ein Krimineller könnte z. B. eine Sitzungs-ID stehlen und sie verwenden, um ein Cookie zu setzen, das es so aussehen lässt, als wäre er als jemand anderes eingeloggt, und dabei die Kontrolle über deren Bank- oder E-Commerce-Konto übernehmen.

Sie können Ihre Cookies auf verschiedene Arten absichern, die in diesem Abschnitt überprüft werden.

### Zugriff auf Ihre Cookies blockieren

Sie können sicherstellen, dass Cookies sicher gesendet werden und nicht von nicht beabsichtigten Parteien oder Skripten abgerufen werden, mit dem `Secure`-Attribut und dem `HttpOnly`-Attribut:

```http
Set-Cookie: id=a3fWa; Expires=Thu, 21 Oct 2021 07:28:00 GMT; Secure; HttpOnly
```

- Ein Cookie mit dem `Secure`-Attribut wird nur mit einer verschlüsselten Anfrage über das HTTPS-Protokoll an den Server gesendet. Es wird niemals mit ungesichertem HTTP gesendet (außer auf localhost), was bedeutet, dass {{Glossary("MitM", "Man-in-the-Middle")}}-Angreifer nicht leicht darauf zugreifen können. Unsichere Seiten (mit `http:` in der URL) können keine Cookies mit dem `Secure`-Attribut setzen. Nehmen Sie jedoch nicht an, dass `Secure` den gesamten Zugriff auf sensible Informationen in Cookies verhindert. Zum Beispiel kann jemand, der Zugriff auf die Festplatte des Clients hat (oder JavaScript, wenn das `HttpOnly`-Attribut nicht gesetzt ist) die Informationen lesen und ändern.

- Ein Cookie mit dem `HttpOnly`-Attribut kann nicht von JavaScript aus abgerufen werden, z. B. mit [`Document.cookie`](/de/docs/Web/API/Document/cookie); es kann nur abgerufen werden, wenn es den Server erreicht. Cookies, die Benutzersitzungen erhalten, sollten z. B. das `HttpOnly`-Attribut haben – es wäre wirklich unsicher, sie für JavaScript verfügbar zu machen. Diese Vorsichtsmaßnahme hilft, Cross-Site-Scripting-([XSS](/de/docs/Web/Security/Types_of_attacks#cross-site_scripting_xss))-Angriffe abzumildern.

> [!NOTE]
> Abhängig von der Anwendung möchten Sie möglicherweise einen undurchsichtigen Identifikator verwenden, den der Server nachschlägt, anstatt sensible Informationen direkt in Cookies zu speichern, oder untersuchen Sie alternative Authentifizierungs-/Vertraulichkeitsmechanismen wie [JSON Web Tokens](https://jwt.io/).

### Definieren, wohin Cookies gesendet werden

Die Attribute `Domain` und `Path` definieren den _Geltungsbereich_ eines Cookies: an welche URLs die Cookies gesendet werden.

- Das `Domain`-Attribut gibt an, welcher Server ein Cookie empfangen kann. Wenn angegeben, sind Cookies auf dem angegebenen Server und seinen Subdomains verfügbar. Zum Beispiel, wenn Sie `Domain=mozilla.org` von `mozilla.org` setzen, sind Cookies auf dieser Domain und Subdomains wie `developer.mozilla.org` verfügbar.

  ```http
  Set-Cookie: id=a3fWa; Expires=Thu, 21 Oct 2021 07:28:00 GMT; Secure; HttpOnly; Domain=mozilla.org
  ```

  Wenn der `Set-Cookie`-Header kein `Domain`-Attribut angibt, sind die Cookies auf dem Server verfügbar, der es setzt, aber nicht auf seinen Subdomains. Daher ist die Angabe von `Domain` weniger restriktiv als dessen Weglassen.
  Beachten Sie, dass ein Server das `Domain`-Attribut nur auf seiner eigenen Domain oder einer übergeordneten Domain setzen kann, nicht auf einer Subdomain oder einer anderen Domain.
  Ein Server mit der Domain `foo.example.com` könnte das Attribut auf `example.com` oder `foo.example.com` setzen, aber nicht auf `bar.foo.example.com` oder `elsewhere.com` (die Cookies würden jedoch trotzdem an Subdomains wie `bar.foo.example.com` gesendet werden).
  Siehe [Ungültige Domains](/de/docs/Web/HTTP/Reference/Headers/Set-Cookie#invalid_domains) für mehr Details.

- Das `Path`-Attribut gibt einen URL-Pfad an, der in der angeforderten URL existieren muss, um den `Cookie`-Header zu senden. Zum Beispiel:

  ```http
  Set-Cookie: id=a3fWa; Expires=Thu, 21 Oct 2021 07:28:00 GMT; Secure; HttpOnly; Path=/docs
  ```

  Das `%x2F` ("/") Zeichen wird als Verzeichnis-Trennzeichen betrachtet, und Unterverzeichnisse passen ebenfalls. Zum Beispiel, wenn Sie `Path=/docs` setzen, stimmen diese Anfragepfade überein:

  - `/docs`
  - `/docs/`
  - `/docs/Web/`
  - `/docs/Web/HTTP`

  Aber diese Anfragepfade nicht:

  - `/`
  - `/docsets`
  - `/fr/docs`

### Kontrolle von Drittanbieter-Cookies mit `SameSite`

Das [`SameSite`](/de/docs/Web/HTTP/Reference/Headers/Set-Cookie#samesitesamesite-value)-Attribut erlaubt es Servern anzugeben, ob/wann Cookies mit Cross-Site-Anfragen gesendet werden – d.h. [Drittanbieter-Cookies](/de/docs/Web/Privacy/Guides/Third-party_cookies). Cross-Site-Anfragen sind Anfragen, bei denen die {{Glossary("Site", "Seite")}} (die registrierbare Domain) und/oder das Schema (http oder https) nicht mit der Seite übereinstimmen, die der Benutzer gerade besucht. Dies umfasst Anfragen, die gesendet werden, wenn Links auf anderen Seiten angeklickt werden, um zu Ihrer Seite zu navigieren, und jede Anfrage, die von eingebettetem Drittanbieter-Inhalt gesendet wird.

`SameSite` hilft, Informationsverlust zu verhindern, bewahrt die Benutzer[privatsphäre](#datenschutz_und_tracking) und bietet einen gewissen Schutz vor {{Glossary("CSRF", "Cross-Site-Request-Forgery")}}-Angriffen. Es nimmt drei mögliche Werte an: `Strict`, `Lax` und `None`:

- `Strict` veranlasst den Browser, das Cookie nur als Antwort auf Anfragen zu senden, die von der Ursprungsseite des Cookies ausgehen. Dies sollte verwendet werden, wenn Sie Cookies haben, die sich auf Funktionen beziehen, die immer hinter einer anfänglichen Navigation liegen, wie z. B. Authentifizierung oder das Speichern von Warenkorbinformationen.

  ```http
  Set-Cookie: cart=110045_77895_53420; SameSite=Strict
  ```

  > [!NOTE]
  > Cookies, die für sensible Informationen verwendet werden, sollten ebenfalls eine kurze [Lebensdauer](#removal_defining_the_lifetime_of_a_cookie) haben.

- `Lax` ist ähnlich, außer dass der Browser das Cookie auch sendet, wenn der Benutzer zur Ursprungsseite des Cookies _navigiert_ (selbst wenn der Benutzer von einer anderen Seite kommt). Dies ist nützlich für Cookies, die die Anzeige einer Seite beeinflussen – zum Beispiel könnten Sie auf Ihrer Website Produktinformationen gemeinsam mit einem Partner-Affiliate-Link haben. Wenn diesem Link zum Partner-Website gefolgt wird, möchten diese möglicherweise ein Cookie setzen, das anzeigt, dass der Affiliate-Link gefolgt wurde, was ein Belohnungsbanner anzeigt und einen Rabatt bietet, wenn das Produkt gekauft wird.

  ```http
  Set-Cookie: affiliate=e4rt45dw; SameSite=Lax
  ```

- `None` gibt an, dass Cookies sowohl bei ursprünglichen als auch bei Cross-Site-Anfragen gesendet werden. Dies ist nützlich, wenn Sie Cookies zusammen mit Anfragen senden möchten, die von Drittanbieter-Inhalten, die in anderen Seiten eingebettet sind, gemacht werden, z. B. Anbieter von Werbetechnologien oder Analysen. Beachten Sie, dass, wenn `SameSite=None` gesetzt ist, auch das `Secure`-Attribut gesetzt sein muss – `SameSite=None` erfordert einen _sicheren Kontext_.

  ```http
  Set-Cookie: widget_session=7yjgj57e4n3d; SameSite=None; Secure; HttpOnly
  ```

Wenn kein `SameSite`-Attribut gesetzt ist, wird das Cookie standardmäßig als `Lax` behandelt.

### Cookie-Präfixe

Aufgrund der Gestaltung des Cookie-Mechanismus kann ein Server nicht bestätigen, dass ein Cookie von einem sicheren Ursprung gesetzt wurde oder sogar _wo_ ein Cookie ursprünglich gesetzt wurde.

Eine anfällige Anwendung auf einer Subdomain kann ein Cookie mit dem `Domain`-Attribut setzen, was Zugriff auf dieses Cookie auf allen anderen Subdomains gewährt. Dieser Mechanismus kann in einem _Sitzungsfixierungsangriff_ ausgenutzt werden. Siehe [Sitzungsfixierung](/de/docs/Web/Security/Types_of_attacks#session_fixation) für primäre Abwehrmethoden.

Als [Verteidigungsmaßnahme in der Tiefe](<https://en.wikipedia.org/wiki/Defense_in_depth_(computing)>), können Sie jedoch _Cookie-Präfixe_ verwenden, um spezifische Fakten über das Cookie zu behaupten. Zwei Präfixe sind verfügbar:

- `__Host-`: Wenn ein Cookie-Name dieses Präfix hat, wird es in einem {{HTTPHeader("Set-Cookie")}}-Header nur akzeptiert, wenn es auch mit dem `Secure`-Attribut markiert ist, von einem sicheren Ursprung gesendet wurde, kein `Domain`-Attribut enthält und das `Path`-Attribut auf `/` gesetzt ist. Mit anderen Worten, das Cookie ist _domain-locked_.
- `__Secure-`: Wenn ein Cookie-Name dieses Präfix hat, wird es in einem {{HTTPHeader("Set-Cookie")}}-Header nur akzeptiert, wenn es mit dem `Secure`-Attribut markiert ist und von einem sicheren Ursprung gesendet wurde. Dies ist schwächer als das `__Host-`-Präfix.

Der Browser wird Cookies mit diesen Präfixen ablehnen, die nicht ihren Einschränkungen entsprechen. Dies stellt sicher, dass von Subdomains erstellte Cookies mit Präfixen entweder auf eine Subdomain beschränkt sind oder vollständig ignoriert werden. Da der Anwendungsserver nur nach einem spezifischen Cookie-Namen sucht, um zu bestimmen, ob der Benutzer authentifiziert ist oder ein CSRF-Token korrekt ist, dient dies effektiv als Verteidigungsmaßnahme gegen Sitzungsfixierung.

> [!NOTE]
> Auf dem Server _muss_ die Webanwendung auf den vollständigen Cookie-Namen inklusive Präfix überprüfen. Benutzeragenten _entfernen_ das Präfix nicht aus dem Cookie, bevor sie es in einem {{HTTPHeader("Cookie")}}-Header einer Anfrage senden.

Weitere Informationen zu Cookie-Präfixen und dem aktuellen Stand der Browserunterstützung finden Sie im [Präfixe-Abschnitt des Set-Cookie-Referenzartikels](/de/docs/Web/HTTP/Reference/Headers/Set-Cookie#cookie_prefixes).

## Datenschutz und Tracking

Früher haben wir darüber gesprochen, wie das `SameSite`-Attribut verwendet werden kann, um zu kontrollieren, wann Drittanbieter-Cookies gesendet werden, und dass dies helfen kann, die Benutzerprivatsphäre zu bewahren. Privatsphäre ist ein sehr wichtiges Anliegen beim Erstellen von Webseiten, die, wenn sie richtig umgesetzt wird, das Vertrauen Ihrer Nutzer aufbauen kann. Wenn sie schlecht umgesetzt wird, kann sie dieses Vertrauen völlig untergraben und alle Arten von Problemen verursachen.

Drittanbieter-Cookies können von Drittanbieter-Inhalten gesetzt werden, die in Webseiten über {{htmlelement("iframe")}}s eingebettet sind. Sie haben viele legitime Verwendungen, wie das Teilen von Benutzerprofilinformationen, das Zählen von Werbeeinblendungen oder das Erfassen von Analysen über verschiedene verwandte Domains.

Allerdings können Drittanbieter-Cookies auch verwendet werden, um unangenehme, invasive Benutzererfahrungen zu schaffen. Ein Drittanbieter-Server kann ein Profil des Browserverlaufs und der Gewohnheiten eines Benutzers erstellen, basierend auf Cookies, die ihm von demselben Browser beim Zugriff auf mehrere Seiten gesendet werden. Das klassische Beispiel ist, wenn Sie auf einer Seite nach Produktinformationen suchen und dann im gesamten Web von Anzeigen für ähnliche Produkte verfolgt werden.

Browser-Anbieter wissen, dass Benutzer dieses Verhalten nicht mögen, und haben daher alle begonnen, Drittanbieter-Cookies standardmäßig zu blockieren oder zumindest Pläne gemacht, in diese Richtung zu gehen. Drittanbieter-Cookies (oder einfach Tracking-Cookies) können auch durch andere Browsereinstellungen oder -erweiterungen blockiert werden.

> [!NOTE]
> Das Blockieren von Cookies kann dazu führen, dass einige Drittanbieter-Komponenten (wie Social Media Widgets) nicht wie vorgesehen funktionieren. Da Browser weitere Einschränkungen bei Drittanbieter-Cookies einführen, sollten Entwickler nach Möglichkeiten suchen, ihre Abhängigkeit von ihnen zu verringern.

Siehe unseren [Drittanbieter-Cookies](/de/docs/Web/Privacy/Guides/Third-party_cookies) Artikel für detaillierte Informationen zu Drittanbieter-Cookies, den damit verbundenen Problemen und welche Alternativen verfügbar sind. Siehe unsere [Datenschutz](/de/docs/Web/Privacy) Startseite für mehr Informationen zum Datenschutz im Allgemeinen.

## Cookie-bezogene Vorschriften

Gesetze oder Vorschriften, die die Verwendung von Cookies betreffen, umfassen:

- Die [Allgemeine Datenschutzverordnung](https://gdpr.eu/) (GDPR) in der Europäischen Union
- Die Datenschutzrichtlinie für elektronische Kommunikation in der EU
- Das California Consumer Privacy Act

Diese Vorschriften haben globale Reichweite. Sie gelten für jede Seite im _World Wide_ Web, die von Nutzern aus diesen Jurisdiktionen abgerufen wird (die EU und Kalifornien, mit dem Vorbehalt, dass das kalifornische Gesetz nur für Unternehmen mit einem Bruttoumsatz von über 25 Millionen USD gilt, unter anderem).

Diese Vorschriften beinhalten Anforderungen wie:

- Die Nutzer darüber zu informieren, dass Ihre Seite Cookies verwendet.
- Den Nutzern die Möglichkeit zu geben, den Erhalt einiger oder aller Cookies abzulehnen.
- Den Nutzern zu erlauben, den Großteil Ihres Dienstes ohne den Empfang von Cookies zu nutzen.

Es kann andere Vorschriften geben, die die Verwendung von Cookies in Ihrem Lokalbereich regeln. Es liegt in Ihrer Verantwortung, diese Vorschriften zu kennen und einzuhalten. Es gibt Unternehmen, die "Cookie-Banner"-Code anbieten, der Ihnen hilft, diese Vorschriften einzuhalten.

> [!NOTE]
> Unternehmen sollten die Arten von Cookies, die sie auf ihren Websites verwenden, zur Transparenz und zur Einhaltung von Vorschriften offenlegen. Beispielsweise können Sie [Googles Hinweis zu den von ihnen verwendeten Cookie-Typen](https://policies.google.com/technologies/cookies#types-of-cookies) und Mozillas [Webseiten, Kommunikation & Cookies Datenschutzerklärung](https://www.mozilla.org/en-US/privacy/websites/#cookies) einsehen.

## Siehe auch

- Verwandte HTTP-Header: {{HTTPHeader("Set-Cookie")}}, {{HTTPHeader("Cookie")}}
- Verwandte JavaScript-APIs: [`Document.cookie`](/de/docs/Web/API/Document/cookie), [`Navigator.cookieEnabled`](/de/docs/Web/API/Navigator/cookieEnabled), [Cookie Store API](/de/docs/Web/API/Cookie_Store_API)
- [Drittanbieter-Cookies](/de/docs/Web/Privacy/Guides/Third-party_cookies)
- [Cookie-Spezifikation: RFC 6265](https://datatracker.ietf.org/doc/html/rfc6265)
- [Cookies, die DSGVO und die Datenschutzrichtlinie für elektronische Kommunikation](https://gdpr.eu/cookies/)
