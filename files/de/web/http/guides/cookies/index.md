---
title: Verwendung von HTTP-Cookies
slug: Web/HTTP/Guides/Cookies
l10n:
  sourceCommit: cb8143261f5cd54788285574ab0c427ba3f01a04
---

{{HTTPSidebar}}

Ein **Cookie** (auch bekannt als Web-Cookie oder Browser-Cookie) ist ein kleines Datenstück, das ein Server an den Webbrowser eines Nutzers sendet. Der Browser kann Cookies speichern, neue Cookies erstellen, bestehende ändern und sie mit späteren Anfragen an denselben Server zurücksenden. Cookies ermöglichen es Webanwendungen, begrenzte Datenmengen zu speichern und Zustandsinformationen zu merken; standardmäßig ist das HTTP-Protokoll [zustandslos](/de/docs/Web/HTTP/Guides/Overview#http_is_stateless_but_not_sessionless).

In diesem Artikel werden wir die Hauptverwendungen von Cookies untersuchen, bewährte Praktiken für ihre Verwendung erklären und ihre Datenschutz- und Sicherheitsimplikationen betrachten.

## Wofür Cookies verwendet werden

Typischerweise verwendet der Server den Inhalt von HTTP-Cookies, um festzustellen, ob unterschiedliche Anfragen vom gleichen Browser/Nutzer stammen, und gibt dann eine personalisierte oder generische Antwort aus, wie es angemessen ist. Das folgende beschreibt ein einfaches Benutzeranmeldesystem:

1. Der Nutzer sendet Anmeldeinformationen an den Server, beispielsweise über ein Formular.
2. Wenn die Anmeldeinformationen korrekt sind, aktualisiert der Server die Benutzeroberfläche, um anzuzeigen, dass der Benutzer angemeldet ist, und antwortet mit einem Cookie, das eine Sitzungs-ID enthält und den Anmeldestatus im Browser speichert.
3. Zu einem späteren Zeitpunkt bewegt sich der Nutzer auf eine andere Seite derselben Site. Der Browser sendet das Cookie mit der Sitzungs-ID zusammen mit der entsprechenden Anfrage, um anzuzeigen, dass er weiterhin denkt, dass der Nutzer angemeldet ist.
4. Der Server überprüft die Sitzungs-ID und, falls sie noch gültig ist, sendet dem Benutzer eine personalisierte Version der neuen Seite. Falls sie nicht gültig ist, wird die Sitzungs-ID gelöscht und dem Benutzer wird eine generische Version der Seite gezeigt (oder möglicherweise eine Nachricht "Zugriff verweigert" und er wird gebeten, sich erneut anzumelden).

![visuelle Darstellung der oben beschriebenen Anmeldesystembeschreibung](cookie-basic-example.png)

Cookies werden hauptsächlich für drei Zwecke verwendet:

- **Sitzungsmanagement**: Benutzeranmeldestatus, Warenkorbinhalte, Spielergebnisse oder andere sitzungsbezogene Details, die der Server sich merken muss.
- **Personalisierung**: Benutzereinstellungen wie Anzeigesprache und UI-Thema.
- **Verfolgung**: Aufzeichnung und Analyse des Benutzerverhaltens.

### Datenspeicherung

In den Frühzeiten des Webs, als es keine andere Möglichkeit gab, wurden Cookies zur allgemeinen clientseitigen Datenspeicherung verwendet. Heutzutage werden moderne Speicher-APIs empfohlen, beispielsweise die [Web Storage API](/de/docs/Web/API/Web_Storage_API) (`localStorage` und `sessionStorage`) und [IndexedDB](/de/docs/Web/API/IndexedDB_API).

Sie sind für die Speicherung konzipiert, senden niemals Daten an den Server und bergen nicht die anderen Nachteile, die mit der Verwendung von Cookies zur Speicherung verbunden sind:

- Browser sind generell auf eine maximale Anzahl von Cookies pro Domain beschränkt (variiert je nach Browser, generell in den Hunderten), und auf eine maximale Größe pro Cookie (in der Regel 4KB). Speicher-APIs können größere Datenmengen speichern.
- Cookies werden mit jeder Anfrage gesendet, was die Leistung verschlechtern kann (zum Beispiel bei langsamen mobilen Datenverbindungen), insbesondere wenn Sie viele Cookies gesetzt haben.

> [!NOTE]
> Um gespeicherte Cookies (und andere Speicher, die eine Webseite verwendet) zu sehen, können Sie den [Storage Inspector](https://firefox-source-docs.mozilla.org/devtools-user/storage_inspector/index.html) in den Firefox Developer Tools oder das [Application-Panel](https://developer.chrome.com/docs/devtools/progressive-web-apps) in den Chrome Developer Tools verwenden.

## Erstellen, Entfernen und Aktualisieren von Cookies

Nach Erhalt einer HTTP-Anfrage kann ein Server mit der Antwort ein oder mehrere {{HTTPHeader("Set-Cookie")}} Header senden, von denen jeder ein separates Cookie setzt. Ein Cookie wird festgelegt, indem ein Name-Werte-Paar wie folgt angegeben wird:

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
> Erfahren Sie, wie Sie den `Set-Cookie` Header in verschiedenen serverseitigen Sprachen/Frameworks verwenden: [PHP](https://www.php.net/manual/en/function.setcookie.php), [Node.js](https://nodejs.org/docs/latest-v19.x/api/http.html#responsesetheadername-value), [Python](https://docs.python.org/3/library/http.cookies.html), [Ruby on Rails](https://api.rubyonrails.org/classes/ActionDispatch/Cookies.html).

Wenn eine neue Anfrage erstellt wird, sendet der Browser normalerweise die zuvor gespeicherten Cookies für die aktuelle Domain mit der Anfrage im {{HTTPHeader("Cookie")}} HTTP-Header zurück an den Server:

```http
GET /sample_page.html HTTP/2.0
Host: www.example.org
Cookie: yummy_cookie=chocolate; tasty_cookie=strawberry
```

### Entfernung: Lebensdauer eines Cookies definieren

Sie können ein Ablaufdatum oder eine Zeitspanne angeben, nach der das Cookie gelöscht und nicht mehr gesendet werden sollte. Je nach den Attributen, die im {{HTTPHeader("Set-Cookie")}} Header festgelegt sind, wenn die Cookies erstellt werden, können sie entweder _permanent_ oder _sitzungsbasiert_ sein:

- Permanente Cookies werden nach dem im `Expires`-Attribut angegebenen Datum gelöscht:

  ```http
  Set-Cookie: id=a3fWa; Expires=Thu, 31 Oct 2021 07:28:00 GMT;
  ```

  oder nach der im `Max-Age`-Attribut angegebenen Dauer:

  ```http
  Set-Cookie: id=a3fWa; Max-Age=2592000
  ```

  > **Hinweis:** `Expires` ist länger verfügbar als `Max-Age`, jedoch ist `Max-Age` weniger fehleranfällig und hat Vorrang, wenn beide gesetzt sind. Der Grund hierfür ist, dass wenn Sie ein `Expires` Datum und Zeit setzen, diese relativ zum Client sind, auf dem das Cookie gesetzt wird. Wenn der Server auf eine andere Zeit eingestellt ist, könnte dies Fehler verursachen.

- _Sitzungs-Cookies_ — Cookies ohne `Max-Age` oder `Expires` Attribut – werden gelöscht, wenn die aktuelle Sitzung endet. Der Browser definiert, wann die "aktuelle Sitzung" endet, und einige Browser verwenden _Sitzungswiederherstellung_ beim Neustart. Dies kann dazu führen, dass Sitzungscookies unbegrenzt bestehen bleiben.

  > [!NOTE]
  > Wenn Ihre Webseite Benutzer authentifiziert, sollte sie Sitzungscookies regenerieren und erneut senden, auch solche, die bereits existieren, wann immer sich ein Benutzer authentifiziert. Dieser Ansatz hilft, [Sitzungs-Fixierungsangriffe](/de/docs/Web/Security/Types_of_attacks#session_fixation) zu verhindern, bei denen ein Dritter die Sitzung eines Benutzers wiederverwenden kann.

Es gibt einige Techniken, die darauf abzielen, Cookies nach ihrer Löschung wiederherzustellen. Diese werden als "Zombie"-Cookies bezeichnet. Diese Techniken verstoßen gegen die Prinzipien des Benutzer-[Datenschutzes](#datenschutz_und_verfolgung) und der Kontrolle, können gegen [Datenschutzbestimmungen](#cookie-bezogene_vorschriften) verstoßen und könnten eine Website, die sie verwendet, rechtlichen Risiken aussetzen.

### Aktualisieren von Cookie-Werten

Um ein Cookie über HTTP zu aktualisieren, kann der Server einen {{HTTPHeader("Set-Cookie")}} Header mit dem Namen und einem neuen Wert des bestehenden Cookies senden. Zum Beispiel:

```http
Set-Cookie: id=new-value
```

Es gibt mehrere Gründe, warum Sie dies tun möchten, zum Beispiel wenn ein Benutzer seine Präferenzen aktualisiert hat und die Anwendung die Änderungen in den clientseitigen Daten widerspiegeln möchte (Sie könnten dies auch mit einem clientseitigen Speichermedium wie [Web Storage](/de/docs/Web/API/Web_Storage_API) tun).

#### Aktualisieren von Cookies über JavaScript

Im Browser können Sie neue Cookies über JavaScript mit der [`Document.cookie`](/de/docs/Web/API/Document/cookie) Eigenschaft oder der asynchronen [Cookie Store API](/de/docs/Web/API/Cookie_Store_API) erstellen. Beachten Sie, dass alle folgenden Beispiele `Document.cookie` verwenden, da dies die am weitesten unterstützte/etablierte Option ist.

```js
document.cookie = "yummy_cookie=chocolate";
document.cookie = "tasty_cookie=strawberry";
```

Sie können auch auf bestehende Cookies zugreifen und neue Werte für sie setzen, sofern das [`HttpOnly`](/de/docs/Web/HTTP/Reference/Headers/Set-Cookie#httponly) Attribut nicht auf ihnen gesetzt ist (d.h. im `Set-Cookie` Header, der es erstellt hat):

```js
console.log(document.cookie);
// logs "yummy_cookie=chocolate; tasty_cookie=strawberry"

document.cookie = "yummy_cookie=blueberry";

console.log(document.cookie);
// logs "tasty_cookie=strawberry; yummy_cookie=blueberry"
```

Beachten Sie, dass Sie aus Sicherheitsgründen Cookie-Werte nicht ändern können, indem Sie beim Initiieren einer Anfrage direkt einen aktualisierten `Cookie` Header senden, d.h. über [`fetch()`](/de/docs/Web/API/Window/fetch) oder [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest). Beachten Sie, dass es auch gute Gründe gibt, warum Sie JavaScript nicht erlauben sollten, Cookies zu ändern — d.h. `HttpOnly` bei der Erstellung setzen. Sehen Sie den Abschnitt [Sicherheit](#sicherheit) für weitere Details.

## Sicherheit

Wenn Sie Informationen in Cookies speichern, sind standardmäßig alle Cookie-Werte für den Endbenutzer sichtbar und können von ihm geändert werden. Sie möchten wirklich nicht, dass Ihre Cookies missbraucht werden — beispielsweise von bösartigen Akteuren aufgerufen/geändert oder an Domains gesendet werden, an die sie nicht gesendet werden sollten. Die potenziellen Konsequenzen können von ärgerlich — Apps funktionieren nicht oder zeigen seltsames Verhalten — bis hin zu katastrophal reichen. Ein Krimineller könnte beispielsweise eine Sitzungs-ID stehlen und sie verwenden, um ein Cookie zu setzen, das so aussieht, als wären sie als jemand anderes angemeldet, und dabei die Kontrolle über deren Bank- oder E-Commerce-Konto übernehmen.

Sie können Ihre Cookies auf verschiedene Weise sichern, die in diesem Abschnitt geprüft werden.

### Blockieren Sie den Zugriff auf Ihre Cookies

Sie können sicherstellen, dass Cookies sicher gesendet werden und nicht von unbeabsichtigten Parteien oder Skripten aufgerufen werden, auf zwei Arten: mit dem `Secure` Attribut und dem `HttpOnly` Attribut:

```http
Set-Cookie: id=a3fWa; Expires=Thu, 21 Oct 2021 07:28:00 GMT; Secure; HttpOnly
```

- Ein Cookie mit dem `Secure` Attribut wird nur mit einer verschlüsselten Anfrage über das HTTPS-Protokoll an den Server gesendet. Es wird niemals mit ungesichertem HTTP gesendet (außer auf localhost), was bedeutet, dass {{Glossary("MitM", "Man-in-the-Middle")}} Angreifer nicht so leicht darauf zugreifen können. Unsichere Sites (mit `http:` in der URL) können keine Cookies mit dem `Secure` Attribut setzen. Gehen Sie jedoch nicht davon aus, dass `Secure` den gesamten Zugriff auf sensible Informationen in Cookies verhindert. Zum Beispiel kann jemand mit Zugriff auf die Festplatte des Clients (oder auf JavaScript, wenn das `HttpOnly` Attribut nicht gesetzt ist) die Informationen lesen und ändern.

- Ein Cookie mit dem `HttpOnly` Attribut kann nicht von JavaScript aufgerufen werden, beispielsweise mit [`Document.cookie`](/de/docs/Web/API/Document/cookie); es kann nur aufgerufen werden, wenn es den Server erreicht. Cookies, die Benutzersitzungen aufrechterhalten, sollten beispielsweise das `HttpOnly` Attribut gesetzt haben — es wäre wirklich unsicher, sie JavaScript zugänglich zu machen. Diese Vorsichtsmaßnahme hilft, Cross-Site-Scripting ([XSS](/de/docs/Web/Security/Types_of_attacks#cross-site_scripting_xss)) Angriffen entgegenzuwirken.

> [!NOTE]
> Abhängig von der Anwendung möchten Sie möglicherweise einen undurchsichtigen Bezeichner verwenden, den der Server nachschlägt, anstatt sensible Informationen direkt in Cookies zu speichern, oder alternative Authentifizierungs-/Vertraulichkeitsmechanismen untersuchen, wie [JSON Web Tokens](https://jwt.io/).

### Definieren, wohin Cookies gesendet werden

Die Attribute `Domain` und `Path` definieren den _Geltungsbereich_ eines Cookies: an welche URLs die Cookies gesendet werden.

- Das `Domain` Attribut gibt an, welcher Server ein Cookie empfangen kann. Wenn angegeben, sind Cookies auf dem angegebenen Server und seinen Subdomains verfügbar. Zum Beispiel, wenn Sie `Domain=mozilla.org` von `mozilla.org` setzen, sind Cookies auf dieser Domain und Subdomains wie `developer.mozilla.org` verfügbar.

  ```http
  Set-Cookie: id=a3fWa; Expires=Thu, 21 Oct 2021 07:28:00 GMT; Secure; HttpOnly; Domain=mozilla.org
  ```

  Wenn der `Set-Cookie` Header kein `Domain` Attribut spezifiziert, sind die Cookies auf dem Server verfügbar, der sie setzt, _aber nicht auf dessen Subdomains_. Daher ist die Angabe von `Domain` weniger restriktiv als das Weglassen. Beachten Sie, dass ein Server das `Domain` Attribut nur auf seine eigene Domain oder eine übergeordnete Domain setzen kann, nicht auf eine Subdomain oder eine andere Domain. Ein Server mit der Domain `foo.example.com` könnte das Attribut also auf `example.com` oder `foo.example.com` setzen, aber nicht auf `bar.foo.example.com` oder `elsewhere.com` (die Cookies würden jedoch immer noch an Subdomains wie `bar.foo.example.com` _gesendet_).

- Das `Path` Attribut gibt einen URL-Pfad an, der in der angeforderten URL existieren muss, um den `Cookie` Header zu senden. Zum Beispiel:

  ```http
  Set-Cookie: id=a3fWa; Expires=Thu, 21 Oct 2021 07:28:00 GMT; Secure; HttpOnly; Path=/docs
  ```

  Das `%x2F` ("/") Zeichen wird als Verzeichnis-Trennzeichen angesehen, und Unterverzeichnisse stimmen ebenfalls überein. Zum Beispiel, wenn Sie `Path=/docs` setzen, stimmen diese Anforderungs-Pfade überein:

  - `/docs`
  - `/docs/`
  - `/docs/Web/`
  - `/docs/Web/HTTP`

  Aber diese Anforderungs-Pfade nicht:

  - `/`
  - `/docsets`
  - `/fr/docs`

### Kontrolle von Drittanbieter-Cookies mit `SameSite`

Das [`SameSite`](/de/docs/Web/HTTP/Reference/Headers/Set-Cookie#samesitesamesite-value) Attribut ermöglicht es Servern, anzugeben, ob/wann Cookies mit Anfragen von Drittanbietern gesendet werden — d.h. [Drittanbieter-Cookies](/de/docs/Web/Privacy/Guides/Third-party_cookies). Anfragen von Drittanbietern sind Anfragen, bei denen die {{Glossary("Site", "Site")}} (die registrierbare Domain) und/oder das Schema (http oder https) nicht mit der Site übereinstimmen, die der Benutzer derzeit besucht. Dies umfasst Anfragen, die gesendet werden, wenn Links auf anderen Sites angeklickt werden, um zu Ihrer Site zu navigieren, sowie alle Anfragen, die von eingebetteten Drittanbieter-Inhalten gesendet werden.

`SameSite` hilft, den Informationsabfluss zu verhindern, die Nutzer[datenschutz](#datenschutz_und_verfolgung) zu wahren und bietet einen gewissen Schutz gegen {{Glossary("CSRF", "Cross-Site-Request-Forgery")}} Angriffe. Es nimmt drei mögliche Werte an: `Strict`, `Lax` und `None`:

- `Strict` bewirkt, dass der Browser das Cookie nur als Antwort auf Anfragen sendet, die von der Ursprungs-Site des Cookies stammen. Dies sollte verwendet werden, wenn Sie Cookies haben, die sich auf Funktionen beziehen, die immer hinter einer anfänglichen Navigation stehen werden, wie z.B. Authentifizierung oder Speicherung von Warenkorbinformationen.

  ```http
  Set-Cookie: cart=110045_77895_53420; SameSite=Strict
  ```

  > [!NOTE]
  > Cookies, die für sensible Informationen verwendet werden, sollten ebenfalls eine kurze [Lebensdauer](#removal_defining_the_lifetime_of_a_cookie) haben.

- `Lax` ist ähnlich, außer dass der Browser das Cookie auch sendet, wenn der Benutzer zur Ursprungs-Site des Cookies _navigiert_ (auch wenn der Benutzer von einer anderen Site kommt). Dies ist nützlich für Cookies, die die Anzeige einer Site beeinflussen — beispielsweise könnten Sie Partnerproduktinformationen zusammen mit einem Affiliate-Link auf Ihrer Website haben. Wenn dieser Link zur Partner-Website gefolgt wird, möchten sie möglicherweise ein Cookie setzen, das angibt, dass der Affiliate-Link gefolgt wurde, was ein Belohnungsbanner anzeigt und einen Rabatt bietet, wenn das Produkt gekauft wird.

  ```http
  Set-Cookie: affiliate=e4rt45dw; SameSite=Lax
  ```

- `None` gibt an, dass Cookies sowohl bei originären als auch bei Anfragen von Drittanbietern gesendet werden. Dies ist nützlich, wenn Sie Cookies zusammen mit Anfragen senden möchten, die von Drittanbieter-Inhalten in anderen Sites eingebettet sind, beispielsweise Ad-Tech- oder Analyseanbieter. Beachten Sie, dass wenn `SameSite=None` gesetzt ist, auch das `Secure` Attribut gesetzt sein muss — `SameSite=None` erfordert einen _sichereren Kontext_.

  ```http
  Set-Cookie: widget_session=7yjgj57e4n3d; SameSite=None; Secure; HttpOnly
  ```

Wenn kein `SameSite` Attribut gesetzt ist, wird das Cookie standardmäßig als `Lax` behandelt.

### Cookie-Präfixe

Aufgrund des Designs des Cookie-Mechanismus kann ein Server nicht bestätigen, dass ein Cookie von einem sicheren Ursprung gesetzt wurde oder sogar feststellen, _wo_ ein Cookie ursprünglich gesetzt wurde.

Eine anfällige Anwendung auf einer Subdomain kann ein Cookie mit dem `Domain` Attribut setzen, was Zugriff auf dieses Cookie auf allen anderen Subdomains gewährt. Dieser Mechanismus kann in einem _Sitzungs-Fixierungsangriff_ missbraucht werden. Siehe [Sitzungs-Fixierung](/de/docs/Web/Security/Types_of_attacks#session_fixation) für primäre Abwehrmethoden.

Als [Verteidigungsmaßnahme] in der Tiefe](<https://en.wikipedia.org/wiki/Defense_in_depth_(computing)>) können Sie jedoch _Cookie-Präfixe_ verwenden, um bestimmte Fakten über das Cookie zu behaupten. Zwei Präfixe sind verfügbar:

- `__Host-`: Wenn ein Cookie-Name dieses Präfix hat, wird es nur in einem {{HTTPHeader("Set-Cookie")}} Header akzeptiert, wenn es auch mit dem `Secure` Attribut markiert ist, von einem sicheren Ursprung gesendet wurde, _kein_ `Domain` Attribut beinhaltet und das `Path` Attribut auf `/` gesetzt ist. Mit anderen Worten, das Cookie ist _domain-locked_.
- `__Secure-`: Wenn ein Cookie-Name dieses Präfix hat, wird es nur in einem {{HTTPHeader("Set-Cookie")}} Header akzeptiert, wenn es mit dem `Secure` Attribut markiert ist und von einem sicheren Ursprung gesendet wurde. Dies ist schwächer als das `__Host-` Präfix.

Der Browser wird Cookies mit diesen Präfixen ablehnen, die nicht ihren Einschränkungen entsprechen. Dies stellt sicher, dass von Subdomains erstellte Cookies mit Präfixen entweder auf eine Subdomain beschränkt sind oder vollständig ignoriert werden. Da der Anwendungsserver nur nach einem spezifischen Cookie-Namen sucht, wenn er bestimmt, ob der Benutzer authentifiziert ist oder ein CSRF-Token korrekt ist, wirkt dies effektiv als Schutzmaßnahme gegen Sitzungs-Fixierung.

> [!NOTE]
> Auf dem Server _muss_ die Webanwendung nach dem vollständigen Cookie-Namen einschließlich des Präfixes suchen. Benutzeragenten _entfernen_ das Präfix nicht vor dem Senden im {{HTTPHeader("Cookie")}} Header einer Anfrage.

Weitere Informationen über Cookie-Präfixe und den aktuellen Stand der Browserunterstützung finden Sie im [Präfixe-Abschnitt des Set-Cookie-Referenzartikels](/de/docs/Web/HTTP/Reference/Headers/Set-Cookie#cookie_prefixes).

## Datenschutz und Verfolgung

Weiter oben haben wir darüber gesprochen, wie das `SameSite` Attribut verwendet werden kann, um zu steuern, wann Cookies von Drittanbietern gesendet werden, und dass dies helfen kann, die Privatsphäre der Benutzer zu wahren. Datenschutz ist eine sehr wichtige Überlegung beim Erstellen von Websites, die, wenn sie richtig gemacht werden, Vertrauen mit Ihren Benutzern aufbauen können. Wenn sie schlecht gemacht sind, kann dies das Vertrauen vollständig untergraben und alle Arten von anderen Problemen verursachen.

Drittanbieter-Cookies können von Drittanbieter-Inhalten gesetzt werden, die über {{htmlelement("iframe")}}s in Sites eingebettet sind. Sie haben viele legitime Verwendungen, einschließlich des Teilens von Benutzerprofilinformationen, des Zählens von Anzeigenimpressionen oder des Sammelns von Analysen über verschiedene verwandte Domains.

Allerdings können Drittanbieter-Cookies auch verwendet werden, um unheimliche, invasive Benutzererfahrungen zu schaffen. Ein Drittanbieter-Server kann anhand von Cookies, die von demselben Browser beim Zugriff auf mehrere Sites gesendet werden, ein Profil des Browsing-Verlaufs und der Gewohnheiten eines Benutzers erstellen. Das klassische Beispiel ist, wenn Sie auf einer Site nach Produktinformationen suchen und dann im gesamten Web von Anzeigen für ähnliche Produkte verfolgt werden, wo immer Sie hingehen.

Browseranbieter wissen, dass Nutzer dieses Verhalten nicht mögen, und haben daher alle damit begonnen, standardmäßig Drittanbieter-Cookies zu blockieren, oder zumindest Pläne in diese Richtung gemacht. Drittanbieter-Cookies (oder auch nur Tracking-Cookies) können auch durch andere Browsereinstellungen oder Erweiterungen blockiert werden.

> [!NOTE]
> Das Blockieren von Cookies kann dazu führen, dass einige Drittanbieterkomponenten (wie Social-Media-Widgets) nicht wie vorgesehen funktionieren. Da Browser weitere Einschränkungen für Drittanbieter-Cookies auferlegen, sollten Entwickler beginnen, nach Möglichkeiten zu suchen, ihre Abhängigkeit von ihnen zu verringern.

Siehe unseren Artikel [Drittanbieter-Cookies](/de/docs/Web/Privacy/Guides/Third-party_cookies) für detaillierte Informationen zu Drittanbieter-Cookies, den damit verbundenen Problemen und verfügbaren Alternativen. Siehe unsere [Privatsphäre](/de/docs/Web/Privacy) Startseite für weitere Informationen zur Privatsphäre im Allgemeinen.

## Cookie-bezogene Vorschriften

Gesetze oder Vorschriften, die die Verwendung von Cookies regeln, umfassen:

- Die [Allgemeine Datenschutzverordnung (GDPR)](https://gdpr.eu/) in der Europäischen Union
- Die Datenschutzrichtlinie für elektronische Kommunikation in der EU
- Das Kalifornische Gesetz zum Schutz der Privatsphäre von Verbrauchern

Diese Vorschriften haben eine globale Reichweite. Sie gelten für jede Site im _World Wide_ Web, auf die Benutzer aus diesen Gerichtsbarkeiten zugreifen (die EU und Kalifornien, mit dem Vorbehalt, dass das kalifornische Gesetz nur auf Unternehmen mit einem Bruttoumsatz von über 25 Millionen USD anwendbar ist, unter anderem).

Diese Vorschriften umfassen Anforderungen wie:

- Benutzer darüber zu informieren, dass Ihre Site Cookies verwendet.
- Benutzern die Möglichkeit zu geben, den Empfang einiger oder aller Cookies abzulehnen.
- Benutzern die Nutzung des Hauptteils Ihres Dienstes ohne den Empfang von Cookies zu ermöglichen.

Es kann auch andere Vorschriften geben, die die Verwendung von Cookies in Ihrem Gebiet regeln. Sie sind verpflichtet, diese Vorschriften zu kennen und einzuhalten. Es gibt Unternehmen, die "Cookie-Banner"-Code anbieten, der Ihnen hilft, diese Vorschriften einzuhalten.

> [!NOTE]
> Unternehmen sollten die Cookie-Typen, die sie auf ihren Websites verwenden, zu Transparenzzwecken und zur Einhaltung von Vorschriften offenlegen. Zum Beispiel, siehe [Googles Hinweis zu den verwendeten Cookie-Typen](https://policies.google.com/technologies/cookies#types-of-cookies) und Mozillas [Hinweis zu Websites, Kommunikation & Cookie-Datenschutz](https://www.mozilla.org/de/privacy/websites/#cookies).

## Siehe auch

- Verwandte HTTP-Header: {{HTTPHeader("Set-Cookie")}}, {{HTTPHeader("Cookie")}}
- Verwandte JavaScript-APIs: [`Document.cookie`](/de/docs/Web/API/Document/cookie), [`Navigator.cookieEnabled`](/de/docs/Web/API/Navigator/cookieEnabled), [Cookie Store API](/de/docs/Web/API/Cookie_Store_API)
- [Drittanbieter-Cookies](/de/docs/Web/Privacy/Guides/Third-party_cookies)
- [Cookie-Spezifikation: RFC 6265](https://datatracker.ietf.org/doc/html/rfc6265)
- [Cookies, die GDPR und die Datenschutzrichtlinie für elektronische Kommunikation](https://gdpr.eu/cookies/)
