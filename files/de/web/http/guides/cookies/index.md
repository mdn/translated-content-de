---
title: Verwendung von HTTP-Cookies
slug: Web/HTTP/Guides/Cookies
l10n:
  sourceCommit: f5fd4776d1c0cd6e4cffc9649f7c4f44badb7ae2
---

Ein **Cookie** (auch bekannt als Web-Cookie oder Browser-Cookie) ist ein kleines Datenstück, das ein Server an den Webbrowser eines Benutzers sendet. Der Browser kann Cookies speichern, neue Cookies erstellen, vorhandene Cookies ändern und sie mit späteren Anfragen zurück an denselben Server senden. Cookies ermöglichen es Webanwendungen, begrenzte Datenmengen zu speichern und Zustandsinformationen zu merken; standardmäßig ist das HTTP-Protokoll [zustandslos](/de/docs/Web/HTTP/Guides/Overview#http_is_stateless_but_not_sessionless).

In diesem Artikel werden wir die Hauptverwendungen von Cookies untersuchen, bewährte Praktiken für ihre Verwendung erklären und ihre Datenschutz- und Sicherheitsimplikationen betrachten.

## Wofür Cookies verwendet werden

Typischerweise verwendet der Server den Inhalt von HTTP-Cookies, um festzustellen, ob verschiedene Anfragen vom selben Browser/Benutzer stammen, und gibt dann eine personalisierte oder generische Antwort, wie es passend ist. Folgendes beschreibt ein einfaches Benutzersign-in-System:

1. Der Benutzer sendet Anmeldeinformationen an den Server, beispielsweise über ein Formular.
2. Wenn die Anmeldeinformationen korrekt sind, aktualisiert der Server die Benutzeroberfläche, um anzuzeigen, dass der Benutzer angemeldet ist, und gibt ein Cookie mit einer Sitzungs-ID aus, die ihren Anmeldestatus im Browser aufzeichnet.
3. Später bewegt sich der Benutzer zu einer anderen Seite auf derselben Website. Der Browser sendet das Cookie mit der Sitzungs-ID zusammen mit der entsprechenden Anfrage, um anzuzeigen, dass er weiterhin denkt, dass der Benutzer angemeldet ist.
4. Der Server überprüft die Sitzungs-ID und, falls sie noch gültig ist, sendet der Server dem Benutzer eine personalisierte Version der neuen Seite. Wenn sie nicht gültig ist, wird die Sitzungs-ID gelöscht und dem Benutzer wird eine generische Version der Seite angezeigt (oder möglicherweise eine "Zugriff verweigert"-Nachricht angezeigt und es wird aufgefordert, sich erneut anzumelden).

![visuelle Darstellung der obigen Beschreibung des Anmeldesystems](/shared-assets/images/diagrams/http/cookies/cookie-basic-example.png)

Cookies werden hauptsächlich für drei Zwecke verwendet:

- **Sitzungsverwaltung**: Benutzersign-in-Status, Warenkorbinhalte, Spielergebnisse oder andere benutzersitzungsbezogene Details, die der Server sich merken muss.
- **Personalisierung**: Benutzereinstellungen wie Anzeige der Sprache und des UI-Themas.
- **Nachverfolgung**: Aufzeichnen und Analysieren des Benutzerverhaltens.

### Datenspeicherung

In den frühen Tagen des Webs, als es keine andere Möglichkeit gab, wurden Cookies für allgemeine clientseitige Datenspeicherungszwecke verwendet. Moderne Speicher-APIs werden jetzt empfohlen, beispielsweise die [Web Storage API](/de/docs/Web/API/Web_Storage_API) (`localStorage` und `sessionStorage`) und [IndexedDB](/de/docs/Web/API/IndexedDB_API).

Sie sind für die Speicherung konzipiert, senden niemals Daten an den Server und haben nicht die anderen Nachteile, die mit der Verwendung von Cookies für die Speicherung verbunden sind:

- Browser haben in der Regel eine maximale Anzahl von Cookies pro Domain (variiert je nach Browser, in der Regel in den Hundertern) und eine maximale Größe pro Cookie (normalerweise 4KB). Speicher-APIs können größere Datenmengen speichern.
- Cookies werden mit jeder Anfrage gesendet, was die Leistung verschlechtern kann (zum Beispiel bei langsamen mobilen Datenverbindungen), insbesondere wenn viele Cookies gesetzt sind.

> [!NOTE]
> Um gespeicherte Cookies (und anderen Speicher, den eine Webseite verwendet) zu sehen, können Sie den [Storage Inspector](https://firefox-source-docs.mozilla.org/devtools-user/storage_inspector/index.html) in den Firefox Developer Tools oder das [Application Panel](https://developer.chrome.com/docs/devtools/progressive-web-apps) in den Chrome Developer Tools verwenden.

## Erstellen, Entfernen und Aktualisieren von Cookies

Nach dem Empfang einer HTTP-Anfrage kann ein Server mit der Antwort einen oder mehrere {{HTTPHeader("Set-Cookie")}} Header senden, wobei jeder ein separates Cookie setzt. Ein Cookie wird durch Spezifizieren eines Name-Wert-Paares gesetzt, wie folgt:

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
> Finden Sie heraus, wie Sie den `Set-Cookie` Header in verschiedenen serverseitigen Sprachen/Frameworks verwenden: [PHP](https://www.php.net/manual/de/function.setcookie.php), [Node.js](https://nodejs.org/docs/latest-v19.x/api/http.html#responsesetheadername-value), [Python](https://docs.python.org/3/library/http.cookies.html), [Ruby on Rails](https://api.rubyonrails.org/classes/ActionDispatch/Cookies.html).

Wenn eine neue Anfrage gestellt wird, sendet der Browser normalerweise zuvor gespeicherte Cookies für die aktuelle Domain zurück an den Server innerhalb eines {{HTTPHeader("Cookie")}} HTTP-Headers:

```http
GET /sample_page.html HTTP/2.0
Host: www.example.org
Cookie: yummy_cookie=chocolate; tasty_cookie=strawberry
```

### Entfernung: Definieren der Lebensdauer eines Cookies

Sie können ein Ablaufdatum oder eine Zeitspanne angeben, nach der das Cookie gelöscht und nicht mehr gesendet werden soll. Abhängig von den im {{HTTPHeader("Set-Cookie")}} Header gesetzten Attributen, als die Cookies erstellt wurden, können sie entweder _permanent_ oder _Sitzungs_-Cookies sein:

- Permanente Cookies werden nach dem im `Expires`-Attribut angegebenen Datum gelöscht:

  ```http
  Set-Cookie: id=a3fWa; Expires=Thu, 31 Oct 2021 07:28:00 GMT;
  ```

  oder nach der im `Max-Age`-Attribut angegebenen Periode:

  ```http
  Set-Cookie: id=a3fWa; Max-Age=2592000
  ```

  > [!NOTE]
  > `Expires` ist länger verfügbar als `Max-Age`, jedoch ist `Max-Age` weniger fehleranfällig und hat Vorrang, wenn beide gesetzt sind. Der Grund für diese Regelung liegt darin, dass das Setzen eines `Expires`-Datums und einer Uhrzeit relativ zum Client erfolgt, auf dem das Cookie gesetzt wird. Wenn die Serverzeit eine andere ist, könnte dies zu Fehlern führen.

- _Sitzungs_-Cookies — Cookies ohne ein `Max-Age`- oder `Expires`-Attribut – werden gelöscht, wenn die aktuelle Sitzung endet. Der Browser definiert, wann die "aktuelle Sitzung" endet, und einige Browser verwenden _Sitzungs-Wiederherstellung_ beim Neustarten. Dies kann dazu führen, dass Sitzungscookies unendlich lange bestehen.

  > [!NOTE]
  > Wenn Ihre Website Benutzer authentifiziert, sollte sie Sitzungs-Cookies neu generieren und erneut senden, auch solche, die bereits existieren, wann immer sich ein Benutzer authentifiziert. Dieser Ansatz hilft, [Sitzungsfixierungsangriffe](https://owasp.org/www-community/attacks/Session_fixation) zu verhindern, bei denen eine dritte Partei die Sitzung eines Benutzers erneut nutzen kann.

Es gibt einige Techniken, die darauf abzielen, Cookies nach deren Löschung wiederherzustellen. Diese werden "Zombie"-Cookies genannt. Diese Techniken verletzen die Prinzipien des Benutzer-[Datenschutzes](#datenschutz_und_nachverfolgung) und der Kontrolle, können gegen [Datenschutzbestimmungen](#cookie-bezogene_vorschriften) verstoßen und eine Website, die sie verwendet, rechtlich angreifbar machen.

### Aktualisieren von Cookie-Werten

Um ein Cookie über HTTP zu aktualisieren, kann der Server einen {{HTTPHeader("Set-Cookie")}} Header mit dem bestehenden Cookie-Namen und einem neuen Wert senden. Zum Beispiel:

```http
Set-Cookie: id=new-value
```

Es gibt mehrere Gründe, warum Sie dies tun möchten, z. B. wenn ein Benutzer seine Einstellungen aktualisiert hat und die Anwendung die Änderungen in clientseitigen Daten widerspiegeln möchte (Sie könnten dies auch mit einem clientseitigen Speichermechanismus wie [Web Storage](/de/docs/Web/API/Web_Storage_API) tun).

#### Aktualisieren von Cookies über JavaScript

Im Browser können Sie über JavaScript neue Cookies mit der [`Document.cookie`](/de/docs/Web/API/Document/cookie)-Eigenschaft oder der asynchronen [Cookie Store API](/de/docs/Web/API/Cookie_Store_API) erstellen. Beachten Sie, dass alle nachstehenden Beispiele `Document.cookie` verwenden, da dies die am weitesten unterstützte/etablierte Option ist.

```js
document.cookie = "yummy_cookie=chocolate";
document.cookie = "tasty_cookie=strawberry";
```

Sie können auch auf vorhandene Cookies zugreifen und ihnen neue Werte zuweisen, vorausgesetzt, das [`HttpOnly`](/de/docs/Web/HTTP/Reference/Headers/Set-Cookie#httponly)-Attribut ist nicht auf ihnen gesetzt (d.h. im `Set-Cookie`-Header, der es erstellt hat):

```js
console.log(document.cookie);
// logs "yummy_cookie=chocolate; tasty_cookie=strawberry"

document.cookie = "yummy_cookie=blueberry";

console.log(document.cookie);
// logs "tasty_cookie=strawberry; yummy_cookie=blueberry"
```

Beachten Sie, dass Sie aus Sicherheitsgründen Cookie-Werte nicht ändern können, indem Sie direkt einen aktualisierten `Cookie`-Header bei der Einleitung einer Anfrage senden, z. B. über [`fetch()`](/de/docs/Web/API/Window/fetch) oder [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest). Beachten Sie, dass es auch gute Gründe gibt, warum Sie JavaScript das Ändern von Cookies nicht erlauben sollten — z. B. `HttpOnly` während der Erstellung setzen. Siehe den [Sicherheitsabschnitt](#sicherheit) für weitere Details.

## Sicherheit

Wenn Sie Informationen in Cookies speichern, sind standardmäßig alle Cookie-Werte für den Endbenutzer sichtbar und können von ihm geändert werden. Sie möchten wirklich nicht, dass Ihre Cookies missbraucht werden — beispielsweise von böswilligen Akteuren abgerufen/geändert oder an Domains gesendet werden, an die sie nicht gesendet werden sollten. Die möglichen Folgen reichen von ärgerlich — Apps, die nicht funktionieren oder sich seltsam verhalten — bis katastrophal. Ein Krimineller könnte zum Beispiel eine Sitzungs-ID stehlen und sie verwenden, um ein Cookie zu setzen, das es aussehen lässt, als ob er als jemand anderes angemeldet ist, um in der Folge die Kontrolle über deren Bank- oder E-Commerce-Konto zu erhalten.

Sie können Ihre Cookies auf verschiedene Weise sichern, die in diesem Abschnitt untersucht werden.

### Blockieren des Zugriffs auf Ihre Cookies

Sie können sicherstellen, dass Cookies sicher gesendet werden und nicht von ungewollten Parteien oder Skripten abgerufen werden können, auf zwei Arten: mit dem `Secure`-Attribut und dem `HttpOnly`-Attribut:

```http
Set-Cookie: id=a3fWa; Expires=Thu, 21 Oct 2021 07:28:00 GMT; Secure; HttpOnly
```

- Ein Cookie mit dem `Secure`-Attribut wird nur mit einer verschlüsselten Anfrage über das HTTPS-Protokoll an den Server gesendet. Es wird nie mit ungesichertem HTTP gesendet (außer auf dem lokalen Host), was bedeutet, dass {{Glossary("MitM", "Man-in-the-Middle")}}-Angreifer es nicht leicht abrufen können. Unsichere Websites (mit `http:` in der URL) können keine Cookies mit dem `Secure`-Attribut setzen. Angenommen, `Secure` verhindert nicht alle Zugriffe auf vertrauliche Informationen in Cookies. Zum Beispiel kann jemand mit Zugriff auf die Festplatte des Clients (oder auf JavaScript, wenn das `HttpOnly`-Attribut nicht gesetzt ist) die Informationen lesen und ändern.

- Ein Cookie mit dem `HttpOnly`-Attribut kann nicht von JavaScript abgerufen werden, beispielsweise durch die Verwendung von [`Document.cookie`](/de/docs/Web/API/Document/cookie); es ist nur zugänglich, wenn es den Server erreicht. Cookies, die Benutzersitzungen speichern, sollten beispielsweise das `HttpOnly`-Attribut haben — es wäre wirklich unsicher, sie für JavaScript verfügbar zu machen. Diese Vorsichtsmaßnahme hilft, Cross-Site-Scripting-Angriffe ([XSS](/de/docs/Web/Security/Attacks/XSS)) zu mindern.

> [!NOTE]
> Abhängig von der Anwendung möchten Sie möglicherweise ein undurchsichtiges Identifizierungsmerkmal verwenden, das der Server abruft, anstatt vertrauliche Informationen direkt in Cookies zu speichern, oder alternative Authentifizierungs-/Vertraulichkeitsmechanismen wie [JSON Web Tokens](https://www.jwt.io/) untersuchen.

### Definieren, wohin Cookies gesendet werden

Die Attribute `Domain` und `Path` definieren den _Geltungsbereich_ eines Cookies: welche URLs die Cookies erhalten.

- Das `Domain`-Attribut gibt an, welcher Server ein Cookie erhalten kann. Wenn es spezifiziert ist, sind Cookies auf dem angegebenen Server und seinen Subdomains verfügbar. Wenn Sie beispielsweise `Domain=mozilla.org` von `mozilla.org` setzen, sind Cookies auf dieser Domain und Subdomains wie `developer.mozilla.org` verfügbar.

  ```http
  Set-Cookie: id=a3fWa; Expires=Thu, 21 Oct 2021 07:28:00 GMT; Secure; HttpOnly; Domain=mozilla.org
  ```

  Wenn der `Set-Cookie`-Header kein `Domain`-Attribut spezifiziert, sind die Cookies auf dem Server verfügbar, der sie setzt, _aber nicht auf seinen Subdomains_. Daher ist das Spezifizieren von `Domain` weniger restriktiv, als es wegzulassen.
  Beachten Sie, dass ein Server das `Domain`-Attribut nur auf seine eigene Domain oder eine übergeordnete Domain setzen kann, nicht auf eine Subdomain oder eine andere Domain.
  Ein Server mit der Domain `foo.example.com` könnte das Attribut also auf `example.com` oder `foo.example.com` setzen, aber nicht auf `bar.foo.example.com` oder `elsewhere.com` (die Cookies würden trotzdem an Subdomains wie `bar.foo.example.com` gesendet).
  Weitere Details finden Sie unter [Ungültige Domains](/de/docs/Web/HTTP/Reference/Headers/Set-Cookie#invalid_domains).

- Das `Path`-Attribut gibt an, dass ein URL-Pfad in der angeforderten URL vorhanden sein muss, um den `Cookie`-Header zu senden. Beispielsweise:

  ```http
  Set-Cookie: id=a3fWa; Expires=Thu, 21 Oct 2021 07:28:00 GMT; Secure; HttpOnly; Path=/docs
  ```

  Das `%x2F` ("/")-Zeichen wird als Verzeichnistrenner betrachtet, und Unterverzeichnisse stimmen ebenfalls überein. Wenn Sie beispielsweise `Path=/docs` setzen, stimmen diese Anforderungspfade überein:
  - `/docs`
  - `/docs/`
  - `/docs/Web/`
  - `/docs/Web/HTTP`

  Aber diese Anforderungspfade stimmen nicht überein:
  - `/`
  - `/docsets`
  - `/fr/docs`

  > [!NOTE]
  > Das `path`-Attribut ermöglicht Ihnen die Kontrolle darüber, welche Cookies der Browser basierend auf den verschiedenen Teilen einer Website sendet.
  > Es ist nicht als Sicherheitsmaßnahme gedacht und [schützt nicht](/de/docs/Web/API/Document/cookie#security) vor unautorisiertem Lesen des Cookies von einem anderen Pfad.

### Kontrolle von Drittanbieter-Cookies mit `SameSite`

Das [`SameSite`](/de/docs/Web/HTTP/Reference/Headers/Set-Cookie#samesitesamesite-value) Attribut ermöglicht es Servern anzugeben, ob/wann Cookies mit Cross-Site-Anfragen gesendet werden — z. B. [Drittanbieter-Cookies](/de/docs/Web/Privacy/Guides/Third-party_cookies). Cross-Site-Anfragen sind Anfragen, bei denen die {{Glossary("Site", "Site")}} (die registrierbare Domain) und/oder das Schema (http oder https) nicht mit der Site übereinstimmen, die der Benutzer derzeit besucht. Dies umfasst Anfragen, die gesendet werden, wenn auf andere Sites geklickt wird, um zu Ihrer Site zu navigieren, und alle Anfragen, die von eingebetteten Drittanbieter-Inhalten gesendet werden.

`SameSite` hilft, Informationslecks zu verhindern, die Privatsphäre der Benutzer zu bewahren und bietet einen gewissen Schutz vor {{Glossary("CSRF", "Cross-Site Request Forgery")}}-Angriffen. Es nimmt drei mögliche Werte an: `Strict`, `Lax` und `None`:

- `Strict` bewirkt, dass der Browser das Cookie nur als Antwort auf Anfragen sendet, die vom Ursprung der Cookies stammen. Dies sollte verwendet werden, wenn Sie Cookies haben, die sich auf Funktionen beziehen, die immer hinter einer ersten Navigation stehen, z. B. Authentifizierung oder das Speichern von Warenkorbinformationen.

  ```http
  Set-Cookie: cart=110045_77895_53420; SameSite=Strict
  ```

  > [!NOTE]
  > Cookies, die für sensible Informationen verwendet werden, sollten auch eine kurze [Lebensdauer](#removal_defining_the_lifetime_of_a_cookie) haben.

- `Lax` ist ähnlich, außer dass der Browser das Cookie auch sendet, wenn der Benutzer zur Ursprungsseite der Cookies _navigiert_ (auch wenn der Benutzer von einer anderen Seite kommt). Dies ist nützlich für Cookies, die die Anzeige einer Site beeinflussen — zum Beispiel könnten Sie Produktinformationen eines Partners zusammen mit einem Affiliate-Link auf Ihrer Website haben. Wenn dieser Link zu der Partner-Website folgt, möchten sie möglicherweise ein Cookie setzen, das anzeigt, dass der Affiliate-Link gefolgt wurde, was ein Belohnungsbanner anzeigt und einen Rabatt gewährt, wenn das Produkt gekauft wird.

  ```http
  Set-Cookie: affiliate=e4rt45dw; SameSite=Lax
  ```

- `None` gibt an, dass Cookies bei sowohl ursprünglichen als auch Cross-Site-Anfragen gesendet werden. Dies ist nützlich, wenn Sie Cookies zusammen mit Anfragen senden möchten, die von Drittanbieter-Inhalten gemacht werden, die in anderen Websites eingebettet sind, z. B. Ad-Tech- oder Analyseanbieter. Beachten Sie, dass, wenn `SameSite=None` gesetzt ist, dann auch das `Secure`-Attribut gesetzt werden muss — `SameSite=None` erfordert einen _sicheren Kontext_.

  ```http
  Set-Cookie: widget_session=7yjgj57e4n3d; SameSite=None; Secure; HttpOnly
  ```

Wenn kein `SameSite`-Attribut gesetzt ist, wird das Cookie standardmäßig als `Lax` behandelt.

### Cookie-Präfixe

Aufgrund des Designs des Cookie-Mechanismus kann ein Server nicht bestätigen, dass ein Cookie von einem sicheren Ursprung gesetzt wurde oder sogar _woher_ ein Cookie ursprünglich gesetzt wurde.

Eine Anwendung auf einer Subdomain kann ein Cookie mit dem `Domain`-Attribut setzen, das den Zugriff auf dieses Cookie auf allen anderen Subdomains ermöglicht. Dieser Mechanismus kann bei einem [Sitzungsfixierungsangriff](https://owasp.org/www-community/attacks/Session_fixation) missbraucht werden.

Als [Verteidigungsmaßnahme](<https://de.wikipedia.org/wiki/Tiefenverteidigung_(Computing)>) können Sie jedoch _Cookie-Präfixe_ verwenden, um bestimmte Fakten über das Cookie zu bestätigen. Zwei Präfixe sind verfügbar:

- `__Host-`: Wenn ein Cookie-Name dieses Präfix hat, wird es in einem {{HTTPHeader("Set-Cookie")}} Header nur akzeptiert, wenn es auch mit dem `Secure`-Attribut markiert ist, von einem sicheren Ursprung gesendet wurde, _kein_ `Domain`-Attribut enthält und das `Path`-Attribut auf `/` gesetzt ist. Mit anderen Worten, das Cookie ist _domain-gesperrt_.
- `__Secure-`: Wenn ein Cookie-Name dieses Präfix hat, wird es in einem {{HTTPHeader("Set-Cookie")}} Header nur akzeptiert, wenn es mit dem `Secure`-Attribut markiert ist und von einem sicheren Ursprung gesendet wurde. Dies ist schwächer als das `__Host-` Präfix.

Der Browser wird Cookies mit diesen Präfixen ablehnen, die nicht ihren Einschränkungen entsprechen. Dies stellt sicher, dass von Subdomains erstellte Cookies mit Präfixen entweder auf eine Subdomain beschränkt sind oder vollständig ignoriert werden. Da der Anwendungsserver beim Ermitteln, ob der Benutzer authentifiziert ist, nur einen bestimmten Cookie-Namen überprüft oder ein CSRF-Token korrekt ist, wirkt dies effektiv als Verteidigungsmaßnahme gegen [Sitzungsfixierung](https://owasp.org/www-community/attacks/Session_fixation).

> [!NOTE]
> Auf dem Server muss die Webanwendung den vollständigen Cookie-Namen einschließlich des Präfixes überprüfen. Benutzeragenten entfernen das Präfix _nicht_ vor dem Senden in einem Anfrage-{{HTTPHeader("Cookie")}}-Header.

Weitere Informationen zu Cookie-Präfixen und dem aktuellen Stand der Browserunterstützung finden Sie im [Präfixe-Abschnitt des Set-Cookie-Referenzartikels](/de/docs/Web/HTTP/Reference/Headers/Set-Cookie#cookie_prefixes).

## Datenschutz und Nachverfolgung

Früher haben wir darüber gesprochen, wie das `SameSite`-Attribut verwendet werden kann, um zu steuern, wann Drittanbieter-Cookies gesendet werden, und dass dies zur Wahrung der Privatsphäre der Benutzer beitragen kann. Datenschutz ist eine sehr wichtige Überlegung beim Erstellen von Websites, die, wenn sie richtig gemacht werden, das Vertrauen Ihrer Benutzer aufbauen kann. Wenn es schlecht gemacht wird, kann es dieses Vertrauen völlig zerstören und alle möglichen anderen Probleme verursachen.

Drittanbieter-Cookies können von Drittanbieter-Inhalten gesetzt werden, die in Sites via {{htmlelement("iframe")}}s eingebettet sind. Sie haben viele legitime Verwendungszwecke einschließlich Teilen von Benutzerprofilinformationen, Zählen von Anzeigenimpressionen oder Sammeln von Analysen über verschiedene verwandte Domains hinweg.

Allerdings können Drittanbieter-Cookies auch für gruselige, aufdringliche Benutzererfahrungen genutzt werden. Ein Drittanbieter-Server kann ein Profil des Surfverhaltens und der Vorlieben eines Benutzers basierend auf Cookies erstellen, die ihm vom selben Browser beim Zugriff auf mehrere Sites gesendet werden. Das klassische Beispiel ist, wenn Sie nach Produktinformationen auf einer Seite suchen und dann von Werbung für ähnliche Produkte auf allen von Ihnen besuchten Websites verfolgt werden.

Browser-Anbieter wissen, dass Benutzer dieses Verhalten nicht mögen, und haben daher alle begonnen, Drittanbieter-Cookies standardmäßig zu blockieren oder zumindest Pläne in diese Richtung gemacht. Drittanbieter-Cookies (oder einfach nur Tracking-Cookies) können auch durch andere Browser-Einstellungen oder Erweiterungen blockiert werden.

> [!NOTE]
> Cookie-Blockierung kann dazu führen, dass einige Drittanbieter-Komponenten (wie Social Media Widgets) nicht wie beabsichtigt funktionieren. Da Browser weitere Einschränkungen bei Drittanbieter-Cookies auferlegen, sollten Entwickler anfangen, nach Möglichkeiten zu suchen, ihre Abhängigkeit von ihnen zu reduzieren.

Weitere Informationen über Drittanbieter-Cookies, die damit verbundenen Probleme und die verfügbaren Alternativen finden Sie in unserem Artikel [Drittanbieter-Cookies](/de/docs/Web/Privacy/Guides/Third-party_cookies). Weitere Informationen zum Thema Datenschutz im Allgemeinen finden Sie auf unserer [Privacy](/de/docs/Web/Privacy) Übersichtsseite.

## Cookie-bezogene Vorschriften

Gesetze oder Vorschriften, die den Gebrauch von Cookies regeln, umfassen:

- Die [Datenschutz-Grundverordnung](https://gdpr.eu/) (DSGVO) in der Europäischen Union
- Die ePrivacy-Richtlinie in der EU
- Der California Consumer Privacy Act

Diese Vorschriften haben eine globale Reichweite. Sie gelten für jede Website im _World Wide_ Web, auf die Benutzer aus diesen Rechtsordnungen zugreifen (die EU und Kalifornien, mit dem Vorbehalt, dass das kalifornische Gesetz nur für Unternehmen mit einem Bruttoeinkommen von über 25 Millionen USD gilt, unter anderem).

Diese Vorschriften umfassen Anforderungen wie:

- Benachrichtigen der Benutzer, dass Ihre Site Cookies verwendet.
- Den Benutzern die Möglichkeit geben, das Empfangen von einigen oder allen Cookies abzulehnen.
- Den Benutzern ermöglichen, den Großteil Ihrer Dienstleistung ohne das Empfangen von Cookies zu nutzen.

Es kann andere Vorschriften geben, die die Verwendung von Cookies an Ihrem Standort regeln. Es liegt in Ihrer Verantwortung, diese Vorschriften zu kennen und einzuhalten. Es gibt Unternehmen, die "Cookie-Banner"-Code anbieten, der Ihnen hilft, diese Vorschriften einzuhalten.

> [!NOTE]
> Unternehmen sollten aus Gründen der Transparenz und zur Einhaltung von Vorschriften die Arten von Cookies bekanntgeben, die sie auf ihren Websites verwenden. Weitere Informationen finden Sie beispielsweise in [Googles Hinweis zu den verwendeten Cookie-Arten](https://policies.google.com/technologies/cookies#types-of-cookies) und Mozillas [Websites, Kommunikation & Cookies Datenschutzhinweis](https://www.mozilla.org/de/privacy/websites/#cookies).

## Siehe auch

- Verwandte HTTP-Header: {{HTTPHeader("Set-Cookie")}}, {{HTTPHeader("Cookie")}}
- Verwandte JavaScript-APIs: [`Document.cookie`](/de/docs/Web/API/Document/cookie), [`Navigator.cookieEnabled`](/de/docs/Web/API/Navigator/cookieEnabled), [Cookie Store API](/de/docs/Web/API/Cookie_Store_API)
- [Drittanbieter-Cookies](/de/docs/Web/Privacy/Guides/Third-party_cookies)
- [Cookie-Spezifikation: RFC 6265](https://datatracker.ietf.org/doc/html/rfc6265)
- [Cookies, die DSGVO und die ePrivacy-Richtlinie](https://gdpr.eu/cookies/)
