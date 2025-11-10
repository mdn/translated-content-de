---
title: Verwendung von HTTP-Cookies
slug: Web/HTTP/Guides/Cookies
l10n:
  sourceCommit: cd0ac3ad401c47d7c854d2e30d65af5934a8f657
---

Ein **Cookie** (auch bekannt als Web-Cookie oder Browser-Cookie) ist ein kleines Datenstück, das ein Server an den Webbrowser eines Nutzers sendet. Der Browser kann Cookies speichern, neue erstellen, bestehende ändern und mit späteren Anfragen an denselben Server zurücksenden. Cookies ermöglichen es Web-Anwendungen, begrenzte Datenmengen zu speichern und Statusinformationen zu merken; standardmäßig ist das HTTP-Protokoll [zustandslos](/de/docs/Web/HTTP/Guides/Overview#http_is_stateless_but_not_sessionless).

In diesem Artikel werden wir die Hauptanwendungen von Cookies erkunden, bewährte Praktiken für ihre Verwendung erklären und ihre Datenschutz- und Sicherheitsimplikationen betrachten.

## Wofür Cookies verwendet werden

Normalerweise verwendet der Server den Inhalt von HTTP-Cookies, um zu bestimmen, ob verschiedene Anfragen vom selben Browser/Nutzer stammen, und gibt dann, sofern angemessen, eine personalisierte oder generische Antwort aus. Die folgende Beschreibung beschreibt ein grundlegendes Benutzeranmeldesystem:

1. Der Benutzer sendet Anmeldeinformationen an den Server, zum Beispiel durch Absenden eines Formulars.
2. Falls die Anmeldeinformationen korrekt sind, aktualisiert der Server die Benutzeroberfläche, um anzuzeigen, dass der Benutzer angemeldet ist, und antwortet mit einem Cookie, das eine Sitzungs-ID enthält, die den Anmeldestatus im Browser protokolliert.
3. Später wechselt der Benutzer zu einer anderen Seite auf derselben Website. Der Browser sendet das Cookie mit der Sitzungs-ID zusammen mit der entsprechenden Anfrage, um anzuzeigen, dass er denkt, der Benutzer sei noch angemeldet.
4. Der Server überprüft die Sitzungs-ID und sendet dem Benutzer, falls sie noch gültig ist, eine personalisierte Version der neuen Seite. Ist sie nicht gültig, wird die Sitzungs-ID gelöscht und dem Benutzer wird eine generische Version der Seite angezeigt (oder eventuell eine "Zugriff verweigert"-Nachricht mit der Aufforderung, sich erneut anzumelden).

![Visuelle Darstellung der obigen Beschreibung des Anmeldesystems](/shared-assets/images/diagrams/http/cookies/cookie-basic-example.png)

Cookies werden hauptsächlich für drei Zwecke verwendet:

- **Sitzungsmanagement**: Benutzeranmeldestatus, Inhalte des Warenkorbs, Spielstände oder andere benutzersitzungsbezogene Details, die der Server merken muss.
- **Personalisierung**: Benutzereinstellungen wie Anzeigesprache und UI-Thema.
- **Verfolgung**: Aufzeichnung und Analyse des Benutzerverhaltens.

### Datenspeicherung

In den Anfängen des Webs, als es keine anderen Optionen gab, wurden Cookies für allgemeine clientseitige Datenspeicherzwecke verwendet. Moderne Speicher-APIs werden jetzt empfohlen, zum Beispiel die [Web Storage API](/de/docs/Web/API/Web_Storage_API) (`localStorage` und `sessionStorage`) und [IndexedDB](/de/docs/Web/API/IndexedDB_API).

Diese wurden mit Blick auf Speicherung entwickelt, senden keine Daten an den Server und haben nicht die anderen Nachteile der Verwendung von Cookies für die Speicherung:

- Browser sind in der Regel auf eine maximale Anzahl von Cookies pro Domain beschränkt (variiert je nach Browser, in der Regel in den Hunderten) und eine maximale Größe pro Cookie (normalerweise 4KB). Speicher-APIs können größere Datenmengen speichern.
- Cookies werden bei jeder Anfrage mitgesendet, was die Leistung verschlechtern kann (zum Beispiel bei langsamen mobilen Datenverbindungen), insbesondere wenn viele Cookies gesetzt sind.

> [!NOTE]
> Um gespeicherte Cookies (und andere Speicher, die eine Webseite verwendet) zu sehen, können Sie den [Storage Inspector](https://firefox-source-docs.mozilla.org/devtools-user/storage_inspector/index.html) in den Firefox Developer Tools oder das [Application-Panel](https://developer.chrome.com/docs/devtools/progressive-web-apps) in den Chrome Developer Tools verwenden.

## Erstellen, Entfernen und Aktualisieren von Cookies

Nach Erhalt einer HTTP-Anfrage kann ein Server eine oder mehrere {{HTTPHeader("Set-Cookie")}}-Header mit der Antwort senden, von denen jeder ein separates Cookie festlegt. Ein Cookie wird durch die Angabe eines Name-Wert-Paares wie folgt festgelegt:

```http
Set-Cookie: <cookie-name>=<cookie-value>
```

Die folgende HTTP-Antwort weist den empfangenden Browser an, ein Paar Cookies zu speichern:

```http
HTTP/2.0 200 OK
Content-Type: text/html
Set-Cookie: yummy_cookie=chocolate
Set-Cookie: tasty_cookie=strawberry

[page content]
```

> [!NOTE]
> Finden Sie heraus, wie Sie den `Set-Cookie`-Header in verschiedenen serverseitigen Sprachen/Frameworks verwenden: [PHP](https://www.php.net/manual/en/function.setcookie.php), [Node.js](https://nodejs.org/docs/latest-v19.x/api/http.html#responsesetheadername-value), [Python](https://docs.python.org/3/library/http.cookies.html), [Ruby on Rails](https://api.rubyonrails.org/classes/ActionDispatch/Cookies.html).

Wenn eine neue Anfrage gestellt wird, sendet der Browser üblicherweise zuvor gespeicherte Cookies für die aktuelle Domain innerhalb eines {{HTTPHeader("Cookie")}} HTTP-Headers an den Server zurück:

```http
GET /sample_page.html HTTP/2.0
Host: www.example.org
Cookie: yummy_cookie=chocolate; tasty_cookie=strawberry
```

### Entfernung: Das definieren der Lebensdauer eines Cookies

Sie können ein Ablaufdatum oder eine Zeitspanne angeben, nach der das Cookie gelöscht und nicht mehr gesendet werden soll. Abhängig von den im {{HTTPHeader("Set-Cookie")}}-Header gesetzten Attributen können die Cookies entweder _dauerhaft_ oder _Sitzungs_-Cookies sein:

- Dauerhafte Cookies werden nach dem im `Expires`-Attribut angegebenen Datum gelöscht:

  ```http
  Set-Cookie: id=a3fWa; Expires=Thu, 31 Oct 2021 07:28:00 GMT;
  ```

  oder nach der im `Max-Age`-Attribut angegebenen Zeitspanne:

  ```http
  Set-Cookie: id=a3fWa; Max-Age=2592000
  ```

  > [!NOTE]
  > `Expires` ist schon länger verfügbar als `Max-Age`, jedoch ist `Max-Age` weniger fehleranfällig und hat Vorrang, wenn beide gesetzt sind. Der Grund dafür ist, dass wenn Sie ein `Expires` Datum und Uhrzeit setzen, sie relativ zum Client sind, auf dem das Cookie gesetzt wird. Wenn der Server auf eine andere Zeit eingestellt ist, kann das zu Fehlern führen.

- _Sitzungs_-Cookies — Cookies ohne `Max-Age` oder `Expires`-Attribut – werden gelöscht, wenn die aktuelle Sitzung endet. Der Browser definiert, wann die "aktuelle Sitzung" endet, und einige Browser verwenden _Sitzungswiederherstellung_ beim Neustart. Dies kann dazu führen, dass Sitzungscookies unbegrenzt lange bestehen bleiben.

  > [!NOTE]
  > Falls Ihre Seite Benutzer authentifiziert, sollte sie Sitzungscookies regenerieren und erneut senden, auch solche, die bereits vorhanden sind, wann immer ein Benutzer sich authentifiziert. Dieser Ansatz hilft, [Session Fixation](https://owasp.org/www-community/attacks/Session_fixation) Angriffe zu verhindern, bei denen eine Drittpartei die Sitzung eines Benutzers wiederverwenden kann.

Um ein Cookie sofort zu entfernen, setzen Sie das Cookie erneut mit demselben Namen, Pfad und Domain (falls angegeben), und setzen Sie sein `Expires`-Attribut auf ein Datum in der Vergangenheit oder sein `Max-Age`-Attribut auf `0` oder negativ. Dies weist den Browser an, das Cookie sofort zu löschen. Zum Beispiel:

```http
Set-Cookie: id=a3fWa; Max-Age=0
```

Sie können auch alle mit einer registrierbaren Domain verbundenen Cookies über den {{httpheader("Clear-Site-Data")}} Antwortheader löschen.
Zum Beispiel würde der folgende Header, gesendet von `https://foo.example.com/`, alle von `example.com` und all seinen Subdomains, wie `all.bar.example.com`, gesendeten Cookies löschen.

```http
Clear-Site-Data: "cookies"
```

Es gibt einige Techniken, die darauf abzielen, Cookies wiederherzustellen, nachdem sie gelöscht wurden. Diese sind als "Zombie"-Cookies bekannt. Diese Techniken verletzen die Prinzipien des Benutzer-[Datenschutzes](#datenschutz_und_verfolgung) und der Kontrolle, könnten [Datenschutzbestimmungen](#cookie-bezogene_regelungen) verletzen und könnten eine Website, die sie verwendet, rechtlichen Risiken aussetzen.

### Cookie-Werte aktualisieren

Um ein Cookie über HTTP zu aktualisieren, kann der Server einen {{HTTPHeader("Set-Cookie")}}-Header mit dem bestehenden Cookienamen und einem neuen Wert senden. Zum Beispiel:

```http
Set-Cookie: id=new-value
```

Es gibt mehrere Gründe, warum Sie dies tun könnten, zum Beispiel, wenn ein Benutzer seine Präferenzen aktualisiert hat und die Anwendung die Änderungen in den clientseitigen Daten widerspiegeln möchte (Sie könnten dies auch mit einem clientseitigen Speichermedium wie [Web Storage](/de/docs/Web/API/Web_Storage_API) tun).

#### Aktualisieren von Cookies über JavaScript

Im Browser können Sie neue Cookies über JavaScript mit der [`Document.cookie`](/de/docs/Web/API/Document/cookie) Eigenschaft oder der asynchronen [Cookie Store API](/de/docs/Web/API/Cookie_Store_API) erstellen. Beachten Sie, dass alle untenstehenden Beispiele `Document.cookie` verwenden, da es die am weitesten unterstützte/etablierte Option ist.

```js
document.cookie = "yummy_cookie=chocolate";
document.cookie = "tasty_cookie=strawberry";
```

Sie können auch auf bestehende Cookies zugreifen und neue Werte für sie setzen:

```js
console.log(document.cookie);
// logs "yummy_cookie=chocolate; tasty_cookie=strawberry"

document.cookie = "yummy_cookie=blueberry";

console.log(document.cookie);
// logs "tasty_cookie=strawberry; yummy_cookie=blueberry"
```

Aus Sicherheitsgründen können Sie Cookie-Werte nicht ändern, indem Sie einen aktualisierten `Cookie`-Header direkt senden, wenn Sie eine Anfrage initiieren, zum Beispiel, über [`fetch()`](/de/docs/Web/API/Window/fetch) oder [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest).

Es gibt gute Gründe, warum Sie JavaScript überhaupt nicht erlauben sollten, Cookies zu ändern. Sie können JavaScript daran hindern, auf ein Cookie zuzugreifen, indem Sie das [`HttpOnly`](/de/docs/Web/HTTP/Reference/Headers/Set-Cookie#httponly) Attribut bei dessen Erstellung angeben. Siehe den [Sicherheitsabschnitt](#sicherheit) für weitere Details.

## Sicherheit

Wenn Sie Informationen in Cookies speichern, sind standardmäßig alle Cookie-Werte für den Endnutzer sichtbar und können von ihm geändert werden. Sie möchten nicht, dass Ihre Cookies missbraucht werden — zum Beispiel von böswilligen Akteuren abgerufen/verändert oder an Domänen gesendet, an die sie nicht gesendet werden sollten. Die potenziellen Konsequenzen können von ärgerlich — Apps, die nicht funktionieren oder seltsames Verhalten zeigen — bis hin zu katastrophal reichen. Ein Krimineller könnte beispielsweise eine Sitzungs-ID stehlen und diese nutzen, um ein Cookie zu setzen, das den Anschein erweckt, als wäre er als jemand anderes eingeloggt, und so die Kontrolle über dessen Bank- oder E-Commerce-Konto zu übernehmen.

Sie können Ihre Cookies auf verschiedene Weise sichern, die in diesem Abschnitt überprüft werden.

### Zugriff auf Ihre Cookies blockieren

Sie können sicherstellen, dass Cookies sicher gesendet und nicht von unbeabsichtigten Parteien oder Skripten abgerufen werden, indem Sie entweder das `Secure`-Attribut oder das `HttpOnly`-Attribut verwenden:

```http
Set-Cookie: id=a3fWa; Expires=Thu, 21 Oct 2021 07:28:00 GMT; Secure; HttpOnly
```

- Ein Cookie mit dem `Secure`-Attribut wird nur mit einer verschlüsselten Anfrage über das HTTPS-Protokoll an den Server gesendet. Es wird nie mit unsicherem HTTP gesendet (außer auf localhost), was bedeutet, dass {{Glossary("MitM", "Man-in-the-Middle")}} Angreifer nicht einfach darauf zugreifen können. Unsichere Seiten (mit `http:` in der URL) können keine Cookies mit dem `Secure`-Attribut setzen. Jedoch sollten Sie nicht davon ausgehen, dass `Secure` alle Zugriffe auf sensible Informationen in Cookies verhindert. Zum Beispiel kann jemand mit Zugriff auf die Festplatte des Clients (oder JavaScript, wenn das `HttpOnly`-Attribut nicht gesetzt ist) die Informationen lesen und ändern.

- Ein Cookie mit dem `HttpOnly`-Attribut kann nicht durch JavaScript, beispielweise über [`Document.cookie`](/de/docs/Web/API/Document/cookie), abgerufen werden; es kann nur erreicht werden, wenn es den Server erreicht. Cookies, die Benutzersitzungen aufrechterhalten, sollten zum Beispiel das `HttpOnly`-Attribut setzen — es wäre wirklich unsicher, sie JavaScript zur Verfügung zu stellen. Diese Vorsichtsmaßnahme hilft, Cross-Site-Scripting ([XSS](/de/docs/Web/Security/Attacks/XSS)) Angriffe zu mildern.

> [!NOTE]
> Je nach Anwendung möchten Sie möglicherweise einen undurchsichtigen Bezeichner verwenden, den der Server nachschlägt, anstatt sensible Informationen direkt in Cookies zu speichern, oder alternative Authentifizierungs-/Vertraulichkeitsmechanismen wie [JSON Web Tokens](https://www.jwt.io/) untersuchen.

### Definieren, wohin Cookies gesendet werden

Die Attribute `Domain` und `Path` definieren den _Geltungsbereich_ eines Cookies: Welche URLs die Cookies gesendet werden.

- Das `Domain`-Attribut spezifiziert, welcher Server ein Cookie empfangen kann. Falls angegeben, ist das Cookie auf dem angegebenen Server und dessen Subdomains verfügbar. Zum Beispiel, wenn Sie `Domain=mozilla.org` von `mozilla.org` setzen, ist das Cookie auf dieser Domain und deren Subdomains verfügbar, wie `developer.mozilla.org`.

  ```http
  Set-Cookie: id=a3fWa; Expires=Thu, 21 Oct 2021 07:28:00 GMT; Secure; HttpOnly; Domain=mozilla.org
  ```

  Falls der `Set-Cookie`-Header kein `Domain`-Attribut spezifiziert, ist das Cookie auf dem Server verfügbar, der es setzt, _aber nicht auf seinen Subdomains_. Daher ist das Spezifizieren von `Domain` weniger restriktiv als das Weglassen.
  Beachten Sie, dass ein Server das `Domain`-Attribut nur seiner eigenen Domain oder einer übergeordneten Domain setzen kann, nicht jedoch einer Subdomain oder einer anderen Domain.
  Beispielsweise könnte ein Server mit Domain `foo.example.com` das Attribut auf `example.com` oder `foo.example.com` setzen, aber nicht auf `bar.foo.example.com` oder `elsewhere.com` (die Cookies werden jedoch trotzdem _an_ Subdomains wie `bar.foo.example.com` gesendet).
  Siehe [ungültige Domänen](/de/docs/Web/HTTP/Reference/Headers/Set-Cookie#invalid_domains) für weitere Details.

- Das `Path`-Attribut gibt einen URL-Pfad an, der in der angeforderten URL vorhanden sein muss, um den `Cookie`-Header zu senden. Zum Beispiel:

  ```http
  Set-Cookie: id=a3fWa; Expires=Thu, 21 Oct 2021 07:28:00 GMT; Secure; HttpOnly; Path=/docs
  ```

  Der `%x2F` ("/") Charakter wird als Verzeichnistrenner betrachtet und Subdirectories entsprechend gematcht. Zum Beispiel, wenn Sie `Path=/docs` setzen, passen folgende Anforderungspfade:
  - `/docs`
  - `/docs/`
  - `/docs/Web/`
  - `/docs/Web/HTTP`

  Aber folgende Anforderungspfade passen nicht:
  - `/`
  - `/docsets`
  - `/fr/docs`

  > [!NOTE]
  > Das `path`-Attribut ermöglicht es Ihnen zu kontrollieren, welche Cookies der Browser basierend auf den verschiedenen Teilen einer Website sendet.
  > Es ist nicht als Sicherheitsmaßnahme gedacht und [schützt nicht](/de/docs/Web/API/Document/cookie#security) gegen unbefugtes Auslesen des Cookies von einem anderen Pfad.

### Steuerung von Drittanbieter-Cookies mit `SameSite`

Das [`SameSite`](/de/docs/Web/HTTP/Reference/Headers/Set-Cookie#samesitesamesite-value)-Attribut lässt Server angeben, ob/wann Cookies mit Cross-Site-Anfragen gesendet werden — d.h. [Drittanbieter-Cookies](/de/docs/Web/Privacy/Guides/Third-party_cookies). Cross-Site-Anfragen sind Anfragen, bei denen die {{Glossary("Site", "Site")}} (die registrierbare Domain) und/oder das Schema (http oder https) nicht der Site entsprechen, die der Benutzer derzeit besucht. Dies umfasst Anfragen, die gesendet werden, wenn Links auf anderen Sites geklickt werden, um zu Ihrer Site zu navigieren, und alle Anfragen, die von eingebetteten Drittanbieter-Inhalten gesendet werden.

`SameSite` hilft, das Auslaufen von Informationen zu verhindern, die Benutzer-[Privatsphäre](#datenschutz_und_verfolgung) zu bewahren und bietet einen gewissen Schutz gegen {{Glossary("CSRF", "Cross-Site-Request-Forgery")}} Angriffe. Es hat drei mögliche Werte: `Strict`, `Lax` und `None`:

- `Strict` führt dazu, dass der Browser das Cookie nur als Antwort auf Anfragen sendet, die von der Ursprungs-Site des Cookies stammen. Dies sollte verwendet werden, wenn Sie Cookies im Zusammenhang mit Funktionen haben, die immer hinter einer anfänglichen Navigation stehen, wie Authentifizierung oder Speicherung von Warenkorbinformationen.

  ```http
  Set-Cookie: cart=110045_77895_53420; SameSite=Strict
  ```

  > [!NOTE]
  > Cookies, die für sensible Informationen verwendet werden, sollten auch eine kurze [Lebensdauer](#removal_defining_the_lifetime_of_a_cookie) haben.

- `Lax` ist ähnlich, außer dass der Browser das Cookie auch sendet, wenn der Benutzer _zur_ Ursprungs-Site des Cookies _navigiert_ (auch wenn der Benutzer von einer anderen Site kommt). Dies ist nützlich für Cookies, die die Anzeige einer Site beeinflussen — zum Beispiel könnten Sie Produktinformationen von Partnern zusammen mit einem Affiliate-Link auf Ihrer Website haben. Wenn dieser Link zu der Partner-Website geführt wird, möchten sie möglicherweise ein Cookie setzen, das angibt, dass der Affiliate-Link gefolgt wurde, was ein Belohnungsbanner anzeigt und einen Rabatt bietet, falls das Produkt gekauft wird.

  ```http
  Set-Cookie: affiliate=e4rt45dw; SameSite=Lax
  ```

- `None` gibt an, dass Cookies sowohl bei Ursprung- als auch bei Cross-Site-Anfragen gesendet werden. Dies ist nützlich, wenn Sie Cookies zusammen mit Anfragen von Drittanbieter-Inhalten senden möchten, die in andere Sites eingebettet sind, zum Beispiel Ad-Tech- oder Analytik-Anbieter. Beachten Sie, dass wenn `SameSite=None` gesetzt ist, auch das `Secure`-Attribut gesetzt werden muss — `SameSite=None` erfordert einen _sicheren Kontext_.

  ```http
  Set-Cookie: widget_session=7yjgj57e4n3d; SameSite=None; Secure; HttpOnly
  ```

Wenn kein `SameSite`-Attribut gesetzt ist, wird das Cookie standardmäßig als `Lax` behandelt.

### Cookie-Präfixe

Aufgrund des Designs des Cookie-Mechanismus kann ein Server nicht bestätigen, dass ein Cookie von einem sicheren Ursprungsort gesetzt wurde oder sogar wo ein Cookie ursprünglich gesetzt wurde.

Eine Anwendung auf einer Subdomain kann ein Cookie mit dem `Domain`-Attribut setzen, das Zugriff auf dieses Cookie auf allen anderen Subdomains gibt. Dieser Mechanismus kann bei einem [Session Fixation](https://owasp.org/www-community/attacks/Session_fixation) Angriff missbraucht werden.

Als [Verteidigung in der Tiefe Maßnahme](<https://en.wikipedia.org/wiki/Defense_in_depth_(computing)>) können Sie _Cookie-Präfixe_ verwenden, um spezifische Einschränkungen für die Attribute eines Cookies in unterstützenden User-Agents vorzuschreiben. Alle Cookie-Präfixe beginnen mit einem Doppelstrich (`__`) und enden mit einem Bindestrich (`-`). Vier Präfixe sind verfügbar:

- **`__Secure-`**: Cookies mit Namen, die mit `__Secure-` beginnen, müssen mit dem `Secure`-Attribut durch eine sichere Seite (HTTPS) gesetzt werden.
- **`__Host-`**: Cookies mit Namen, die mit `__Host-` beginnen, müssen mit dem `Secure`-Attribut durch eine sichere Seite (HTTPS) gesetzt werden. Zusätzlich dürfen sie kein `Domain`-Attribut spezifiziert haben und das `Path`-Attribut muss auf `/` gesetzt werden. Dies garantiert, dass solche Cookies nur an den Host gesendet werden, der sie gesetzt hat, und nicht an irgendeinen anderen Host auf der Domain. Es garantiert auch, dass sie hostweit gesetzt sind und auf keinem Pfad auf diesem Host überschrieben werden können. Diese Kombination ergibt ein Cookie, das so nah wie möglich daran ist, den Ursprung als Sicherheitsgrenze zu behandeln.
- **`__Http-`**: Cookies mit Namen, die mit `__Http-` beginnen, müssen mit dem `Secure`-Flag durch eine sichere Seite (HTTPS) gesetzt werden und zusätzlich muss das `HttpOnly`-Attribut gesetzt sein, um zu beweisen, dass sie über den `Set-Cookie`-Header gesetzt wurden (sie können nicht oder modifiziert werden über JavaScript-Funktionen wie [`Document.cookie`](/de/docs/Web/API/Document/cookie) oder die [Cookie Store API](/de/docs/Web/API/Cookie_Store_API)).
- **`__Host-Http-`**: Cookies mit Namen, die mit `__Host-Http-` beginnen, müssen mit dem `Secure`-Flag durch eine sichere Seite (HTTPS) gesetzt werden und müssen das `HttpOnly`-Attribut gesetzt haben, um zu beweisen, dass sie über den `Set-Cookie`-Header gesetzt wurden. Zusätzlich haben sie auch die gleichen Einschränkungen wie `__Host-`-geprefixed Cookies. Diese Kombination ergibt ein Cookie, das so nah wie möglich daran ist, den Ursprung als Sicherheitsgrenze zu behandeln und gleichzeitig sicherzustellen, dass Entwickler und Serverbetreiber wissen، dass sein Umfang auf HTTP-Anfragen beschränkt ist.

Der Browser lehnt Cookies mit diesen Präfixen ab, die nicht ihren Einschränkungen entsprechen. Während der Anwendungsserver nur auf einen spezifischen Cookienamen prüft, wenn er feststellt, ob der Benutzer authentifiziert ist oder ein CSRF-Token korrekt ist, ist dies ein effektives Abwehrmaß gegen [Session Fixation](https://owasp.org/www-community/attacks/Session_fixation).

> [!NOTE]
> Auf dem Server _muss_ die Web-Anwendung den vollständigen Cookienamen einschließlich des Präfixes überprüfen. Benutzer-Agents _strippen_ das Präfix nicht vom Cookie, bevor es in einem Anfrage-{{HTTPHeader("Cookie")}}-Header gesendet wird.

Für mehr Informationen über Cookie-Präfixe und den aktuellen Stand der Browserunterstützung, siehe den [Präfixe-Abschnitt des Set-Cookie-Referenzartikels](/de/docs/Web/HTTP/Reference/Headers/Set-Cookie#cookie_prefixes).

## Datenschutz und Verfolgung

Früher haben wir darüber gesprochen, wie das `SameSite`-Attribut verwendet werden kann, um zu kontrollieren, wann Drittanbieter-Cookies gesendet werden, und dass dies helfen kann, die Privatsphäre der Benutzer zu wahren. Datenschutz ist eine sehr wichtige Überlegung beim Erstellen von Websites, die, wenn sie richtig gemacht wird, Vertrauen bei Ihren Benutzern aufbauen kann. Wenn es schlecht gemacht wird, kann es dieses Vertrauen völlig untergraben und alle möglichen anderen Probleme verursachen.

Drittanbieter-Cookies können durch Drittanbieter-Inhalte auf Webseiten über {{htmlelement("iframe")}}s gesetzt werden. Sie haben viele legitime Nutzungszwecke wie das Teilen von Benutzerprofilinformationen, das Zählen von Anzeigenimpressionen oder das Sammeln von Analysen über verschiedene verwandte Domains.

Jedoch können Drittanbieter-Cookies auch verwendet werden, um unheimliche, invasive Benutzererlebnisse zu schaffen. Ein Drittanbieter-Server kann ein Profil des Browserverlaufs und der Gewohnheiten eines Benutzers basierend auf Cookies erstellen, die ihm vom selben Browser beim Zugriff auf mehrere Sites gesendet werden. Ein klassisches Beispiel ist, wenn Sie auf einer Website nach Produktinformationen suchen und dann im gesamten Web von Anzeigen für ähnliche Produkte verfolgt werden, wohin Sie auch gehen.

Browseranbieter wissen, dass Benutzer dieses Verhalten nicht mögen, und infolgedessen haben alle begonnen, Drittanbieter-Cookies standardmäßig zu blockieren oder zumindest Pläne gemacht, in diese Richtung zu gehen. Drittanbieter-Cookies (oder einfach Tracking-Cookies) können auch durch andere Browsereinstellungen oder Erweiterungen blockiert werden.

> [!NOTE]
> Das Blockieren von Cookies kann dazu führen, dass einige Drittanbieter-Komponenten (wie Social-Media-Widgets) nicht wie beabsichtigt funktionieren. Da Browser weitere Einschränkungen bezüglich Drittanbieter-Cookies festlegen, sollten Entwickler damit beginnen, Wege zu finden, ihre Abhängigkeit von ihnen zu reduzieren.

Siehe unseren [Drittanbieter-Cookies](/de/docs/Web/Privacy/Guides/Third-party_cookies) Artikel für detaillierte Informationen über Drittanbieter-Cookies, die mit ihnen verbundenen Probleme und welche Alternativen verfügbar sind. Weitere Informationen über Datenschutz im Allgemeinen finden Sie auf unserer [Datenschutz](/de/docs/Web/Privacy) Landing Page.

## Cookie-bezogene Regelungen

Gesetze oder Regelungen, die die Nutzung von Cookies betreffen, umfassen:

- Die [Datenschutz-Grundverordnung](https://gdpr.eu/) (DSGVO) in der Europäischen Union
- Die ePrivacy-Richtlinie in der EU
- Der California Consumer Privacy Act

Diese Regelungen haben globale Reichweite. Sie gelten für jede Website im _World Wide_ Web, auf die Nutzer aus diesen Rechtsgebieten zugreifen (die EU und Kalifornien, mit der Einschränkung, dass das kalifornische Gesetz nur für Entitäten mit einem Bruttoumsatz über 25 Millionen US-Dollar, unter anderem, gilt).

Diese Regelungen beinhalten Anforderungen wie:

- Benutzer darüber zu informieren, dass Ihre Website Cookies verwendet.
- Den Benutzern die Möglichkeit geben, den Erhalt einiger oder aller Cookies abzulehnen.
- Den Benutzern ermöglichen, den Großteil Ihres Dienstes ohne den Erhalt von Cookies zu nutzen.

Es kann andere Regelungen geben, die die Nutzung von Cookies in Ihrer Region regeln. Es liegt an Ihnen, diese Regelungen zu kennen und einzuhalten. Es gibt Unternehmen, die "Cookie-Banner"-Code anbieten, der Ihnen hilft, diese Regelungen zu beachten.

> [!NOTE]
> Unternehmen sollten die Arten von Cookies, die sie auf ihren Websites verwenden, zu Transparenzzwecken und zur Einhaltung von Regelungen offenlegen. Zum Beispiel, siehe [Googles Hinweis über die Arten von Cookies, die es verwendet](https://policies.google.com/technologies/cookies#types-of-cookies) und Mozillas [Websites, Communications & Cookies Privacy Notice](https://www.mozilla.org/en-US/privacy/websites/#cookies).

## Siehe auch

- Verwandte HTTP-Header: {{HTTPHeader("Set-Cookie")}}, {{HTTPHeader("Cookie")}}
- Verwandte JavaScript-APIs: [`Document.cookie`](/de/docs/Web/API/Document/cookie), [`Navigator.cookieEnabled`](/de/docs/Web/API/Navigator/cookieEnabled), [Cookie Store API](/de/docs/Web/API/Cookie_Store_API)
- [Drittanbieter-Cookies](/de/docs/Web/Privacy/Guides/Third-party_cookies)
- [Cookie-Spezifikation: RFC 6265](https://datatracker.ietf.org/doc/html/rfc6265)
- [Cookies, die DSGVO und die ePrivacy-Richtlinie](https://gdpr.eu/cookies/)
