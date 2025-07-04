---
title: Verwendung von HTTP-Cookies
slug: Web/HTTP/Guides/Cookies
l10n:
  sourceCommit: ad5b5e31f81795d692e66dadb7818ba8b220ad15
---

Ein **Cookie** (auch bekannt als Web-Cookie oder Browser-Cookie) ist ein kleines Datenfragment, das ein Server an den Webbrowser eines Benutzers sendet. Der Browser kann Cookies speichern, neue Cookies erstellen, vorhandene aktualisieren und sie bei späteren Anfragen an denselben Server zurücksenden. Cookies ermöglichen es Webanwendungen, begrenzte Mengen an Daten zu speichern und Statusinformationen zu merken; das HTTP-Protokoll ist standardmäßig [statuslos](/de/docs/Web/HTTP/Guides/Overview#http_is_stateless_but_not_sessionless).

In diesem Artikel werden wir die Hauptverwendungen von Cookies untersuchen, bewährte Praktiken für ihren Einsatz erklären und ihre Datenschutz- und Sicherheitsimplikationen betrachten.

## Wofür Cookies verwendet werden

Typischerweise verwendet der Server den Inhalt von HTTP-Cookies, um zu bestimmen, ob verschiedene Anfragen vom gleichen Browser/Benutzer stammen und gibt dann eine personalisierte oder generische Antwort, je nach Bedarf. Im Folgenden wird ein einfaches Benutzeranmeldesystem beschrieben:

1. Der Benutzer sendet Anmeldeinformationen an den Server, zum Beispiel durch das Abschicken eines Formulars.
2. Wenn die Anmeldeinformationen korrekt sind, aktualisiert der Server die Benutzeroberfläche, um anzuzeigen, dass der Benutzer angemeldet ist, und antwortet mit einem Cookie, das eine Sitzungs-ID enthält, die den Anmeldestatus im Browser speichert.
3. Zu einem späteren Zeitpunkt wechselt der Benutzer zu einer anderen Seite auf derselben Website. Der Browser sendet das Cookie mit der Sitzungs-ID zusammen mit der entsprechenden Anfrage, um anzuzeigen, dass er noch denkt, der Benutzer sei angemeldet.
4. Der Server überprüft die Sitzungs-ID und, wenn sie noch gültig ist, sendet er dem Benutzer eine personalisierte Version der neuen Seite. Ist sie ungültig, wird die Sitzungs-ID gelöscht und dem Benutzer wird eine generische Version der Seite gezeigt (oder möglicherweise eine Nachricht "Zugang verweigert" angezeigt und um erneute Anmeldung gebeten).

![visuelle Darstellung der oben beschriebenen Anmeldesystembeschreibung](cookie-basic-example.png)

Cookies werden hauptsächlich für drei Zwecke verwendet:

- **Sitzungsverwaltung**: Benutzeranmeldestatus, Einkaufswageninhalte, Spielstände oder sonstige mit der Benutzersitzung zusammenhängende Details, die der Server sich merken muss.
- **Personalisierung**: Benutzerpräferenzen wie Anzeigesprache und UI-Design.
- **Tracking**: Aufzeichnung und Analyse des Benutzerverhaltens.

### Datenspeicherung

In den frühen Tagen des Webs, als es keine andere Möglichkeit gab, wurden Cookies für allgemeine Zwecke der clientseitigen Datenspeicherung verwendet. Moderne Speicher-APIs sind nun zu empfehlen, beispielsweise die [Web Storage API](/de/docs/Web/API/Web_Storage_API) (`localStorage` und `sessionStorage`) und [IndexedDB](/de/docs/Web/API/IndexedDB_API).

Diese sind mit Blick auf die Speicherung entworfen, senden nie Daten an den Server und bringen nicht die Nachteile mit sich, die die Verwendung von Cookies zur Speicherung mit sich bringt:

- Browser sind im Allgemeinen auf eine maximale Anzahl von Cookies pro Domain beschränkt (variiert je nach Browser, im Allgemeinen in den Hunderten), und auf eine maximale Größe pro Cookie (normalerweise 4 KB). Speicher-APIs können größere Datenmengen speichern.
- Cookies werden bei jeder Anfrage gesendet, sodass sie die Leistung verschlechtern können (zum Beispiel bei langsamen mobilen Datenverbindungen), insbesondere wenn Sie viele Cookies gesetzt haben.

> [!NOTE]
> Um gespeicherte Cookies (und andere von einer Webseite genutzte Speicher) zu sehen, können Sie den [Storage Inspector](https://firefox-source-docs.mozilla.org/devtools-user/storage_inspector/index.html) in den Firefox Developer Tools oder das [Application panel](https://developer.chrome.com/docs/devtools/progressive-web-apps) in den Chrome Developer Tools verwenden.

## Erstellen, Entfernen und Aktualisieren von Cookies

Nach dem Empfang einer HTTP-Anfrage kann ein Server eine oder mehrere {{HTTPHeader("Set-Cookie")}}-Header mit der Antwort senden, von denen jeder ein separates Cookie setzt. Ein Cookie wird festgelegt, indem ein Name-Wert-Paar wie folgt angegeben wird:

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
> Erfahren Sie, wie Sie den `Set-Cookie`-Header in verschiedenen serverseitigen Sprachen/Frameworks verwenden: [PHP](https://www.php.net/manual/en/function.setcookie.php), [Node.js](https://nodejs.org/docs/latest-v19.x/api/http.html#responsesetheadername-value), [Python](https://docs.python.org/3/library/http.cookies.html), [Ruby on Rails](https://api.rubyonrails.org/classes/ActionDispatch/Cookies.html).

Wenn eine neue Anfrage erfolgt, sendet der Browser in der Regel zuvor gespeicherte Cookies für die aktuelle Domain in einem {{HTTPHeader("Cookie")}} HTTP-Header zurück an den Server:

```http
GET /sample_page.html HTTP/2.0
Host: www.example.org
Cookie: yummy_cookie=chocolate; tasty_cookie=strawberry
```

### Entfernung: Festlegen der Lebensdauer eines Cookies

Sie können ein Ablaufdatum oder eine Zeitspanne angeben, nach der das Cookie gelöscht und nicht mehr gesendet werden soll. Abhängig von den Attributen, die im {{HTTPHeader("Set-Cookie")}}-Header festgelegt wurden, als die Cookies erstellt wurden, können sie entweder _permanente_ oder _Sitzungscookies_ sein:

- Permanente Cookies werden nach dem im `Expires`-Attribut angegebenen Datum gelöscht:

  ```http
  Set-Cookie: id=a3fWa; Expires=Thu, 31 Oct 2021 07:28:00 GMT;
  ```

  oder nach der im `Max-Age`-Attribut angegebenen Zeitperiode:

  ```http
  Set-Cookie: id=a3fWa; Max-Age=2592000
  ```

  > [!NOTE]
  > `Expires` ist länger verfügbar als `Max-Age`, jedoch ist `Max-Age` weniger fehleranfällig und hat Vorrang, wenn beide gesetzt sind. Der Grund hierfür ist, dass wenn Sie ein `Expires`-Datum und eine Uhrzeit setzen, diese relativ zum Client sind, auf dem das Cookie gesetzt wird. Wenn der Server auf eine andere Uhrzeit eingestellt ist, könnte dies Fehler verursachen.

- _Sitzungscookies_ — Cookies ohne `Max-Age` oder `Expires`-Attribut – werden gelöscht, wenn die aktuelle Sitzung endet. Der Browser definiert, wann die "aktuelle Sitzung" endet, und einige Browser verwenden _Sitzungswiederherstellung_ beim Neustart. Dies kann dazu führen, dass Sitzungscookies unbegrenzt erhalten bleiben.

  > [!NOTE]
  > Wenn Ihre Seite Benutzer authentifiziert, sollte sie Sitzungscookies, auch solche, die bereits existieren, neu generieren und erneut senden, wann immer sich ein Benutzer authentifiziert. Dieser Ansatz hilft, [Session-Fixation](https://owasp.org/www-community/attacks/Session_fixation)-Angriffe zu verhindern, bei denen eine Drittpartei die Sitzung eines Benutzers erneut verwenden kann.

Es gibt einige Techniken, die darauf abzielen, Cookies nach ihrer Löschung neu zu erstellen. Diese werden als "Zombie"-Cookies bezeichnet. Diese Techniken verletzen die Prinzipien des Benutzer-[Datenschutzes](#datenschutz_und_tracking) und der Kontrolle, können gegen [Datenschutzvorschriften](#cookie-bezogene_vorschriften) verstoßen und könnten eine Website, die sie verwendet, rechtlichen Risiken aussetzen.

### Aktualisieren von Cookie-Werten

Um ein Cookie über HTTP zu aktualisieren, kann der Server einen {{HTTPHeader("Set-Cookie")}}-Header mit dem Namen des vorhandenen Cookies und einem neuen Wert senden. Zum Beispiel:

```http
Set-Cookie: id=new-value
```

Es gibt mehrere Gründe, warum Sie dies tun möchten, zum Beispiel wenn ein Benutzer seine Präferenzen aktualisiert hat und die Anwendung die Änderungen in clientseitigen Daten widerspiegeln möchte (Sie könnten dies auch mit einem clientseitigen Speichermedium wie [Web Storage](/de/docs/Web/API/Web_Storage_API) tun).

#### Aktualisieren von Cookies über JavaScript

Im Browser können Sie über JavaScript neue Cookies mithilfe der [`Document.cookie`](/de/docs/Web/API/Document/cookie)-Eigenschaft oder der asynchronen [Cookie Store API](/de/docs/Web/API/Cookie_Store_API) erstellen. Beachten Sie, dass alle untenstehenden Beispiele `Document.cookie` verwenden, da dies die am weitesten unterstützte/etablierte Option ist.

```js
document.cookie = "yummy_cookie=chocolate";
document.cookie = "tasty_cookie=strawberry";
```

Sie können auch auf vorhandene Cookies zugreifen und neue Werte für sie setzen, vorausgesetzt, das [`HttpOnly`](/de/docs/Web/HTTP/Reference/Headers/Set-Cookie#httponly)-Attribut ist nicht auf ihnen gesetzt (d.h. im `Set-Cookie`-Header, der es erstellt hat):

```js
console.log(document.cookie);
// logs "yummy_cookie=chocolate; tasty_cookie=strawberry"

document.cookie = "yummy_cookie=blueberry";

console.log(document.cookie);
// logs "tasty_cookie=strawberry; yummy_cookie=blueberry"
```

Beachten Sie, dass Sie aus Sicherheitsgründen Cookie-Werte nicht direkt ändern können, indem Sie einen aktualisierten `Cookie`-Header senden, wenn Sie eine Anfrage initiieren, z. B. über [`fetch()`](/de/docs/Web/API/Window/fetch) oder [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest). Beachten Sie, dass es auch gute Gründe gibt, warum Sie JavaScript nicht erlauben sollten, Cookies zu ändern — d.h. `HttpOnly` während der Erstellung zu setzen. Weitere Details finden Sie im Abschnitt [Sicherheit](#sicherheit).

## Sicherheit

Wenn Sie Informationen in Cookies speichern, sind standardmäßig alle Cookie-Werte für den Endbenutzer sichtbar und können von ihm geändert werden. Sie möchten wirklich nicht, dass Ihre Cookies missbraucht werden — zum Beispiel von böswilligen Akteuren darauf zugegriffen/verändert oder an Domains gesendet, an die sie nicht gesendet werden sollten. Die potenziellen Konsequenzen können von ärgerlich — Apps, die nicht funktionieren oder seltsames Verhalten zeigen — bis katastrophal reichen. Ein Krimineller könnte zum Beispiel eine Sitzungs-ID stehlen und sie verwenden, um ein Cookie zu setzen, das es ihm ermöglicht, sich als jemand anderes einzuloggen, und so die Kontrolle über deren Bank- oder E-Commerce-Konto zu übernehmen.

Sie können Ihre Cookies auf verschiedene Arten sichern, die in diesem Abschnitt behandelt werden.

### Blockieren des Zugriffs auf Ihre Cookies

Sie können sicherstellen, dass Cookies sicher gesendet und nicht von ungewollten Parteien oder Skripten abgerufen werden, auf zwei Arten: mit dem `Secure`-Attribut und dem `HttpOnly`-Attribut:

```http
Set-Cookie: id=a3fWa; Expires=Thu, 21 Oct 2021 07:28:00 GMT; Secure; HttpOnly
```

- Ein Cookie mit dem `Secure`-Attribut wird nur mit einer verschlüsselten Anfrage über das HTTPS-Protokoll an den Server gesendet. Es wird nie mit unsicherem HTTP (außer auf localhost) gesendet, was bedeutet, dass {{Glossary("MitM", "Man-in-the-Middle")}}-Angreifer nicht leicht darauf zugreifen können. Unsichere Seiten (mit `http:` in der URL) können keine Cookies mit dem `Secure`-Attribut setzen. Gehen Sie jedoch nicht davon aus, dass `Secure` jeglichen Zugriff auf sensible Informationen in Cookies verhindert. Jemand mit Zugriff auf die Festplatte des Clients (oder JavaScript, falls das `HttpOnly`-Attribut nicht gesetzt ist) kann die Informationen zum Beispiel lesen und ändern.

- Ein Cookie mit dem `HttpOnly`-Attribut kann nicht von JavaScript, zum Beispiel über [`Document.cookie`](/de/docs/Web/API/Document/cookie), abgerufen werden; es kann nur abgerufen werden, wenn es den Server erreicht. Cookies, die Benutzersitzungen aufrechterhalten, sollten zum Beispiel das `HttpOnly`-Attribut gesetzt haben — es wäre wirklich unsicher, sie JavaScript verfügbar zu machen. Diese Vorsichtsmaßnahme hilft, Cross-Site-Scripting-([XSS](/de/docs/Web/Security/Attacks/XSS))-Angriffe abzumildern.

> [!NOTE]
> Abhängig von der Anwendung möchten Sie möglicherweise einen undurchsichtigen Bezeichner verwenden, den der Server nachschlägt, anstatt sensible Informationen direkt in Cookies zu speichern, oder alternative Authentifizierungs-/Vertraulichkeitsmechanismen wie [JSON Web Tokens](https://jwt.io/) untersuchen.

### Festlegen, wohin Cookies gesendet werden

Die `Domain`- und `Path`-Attribute definieren den _Umfang_ eines Cookies: an welche URLs die Cookies gesendet werden.

- Das `Domain`-Attribut gibt an, welcher Server ein Cookie empfangen kann. Wenn angegeben, stehen Cookies auf dem angegebenen Server und seinen Subdomains zur Verfügung. Wenn Sie zum Beispiel `Domain=mozilla.org` von `mozilla.org` setzen, stehen Cookies auf dieser Domain und Subdomains wie `developer.mozilla.org` zur Verfügung.

  ```http
  Set-Cookie: id=a3fWa; Expires=Thu, 21 Oct 2021 07:28:00 GMT; Secure; HttpOnly; Domain=mozilla.org
  ```

  Wenn der `Set-Cookie`-Header kein `Domain`-Attribut angibt, stehen die Cookies auf dem Server zur Verfügung, der sie setzt, _aber nicht auf seinen Subdomains_. Das Angeben von `Domain` ist also weniger restriktiv als das Weglassen.
  Beachten Sie, dass ein Server das `Domain`-Attribut nur auf seine eigene Domain oder eine übergeordnete Domain, nicht auf eine Subdomain oder eine andere Domain setzen kann.
  Ein Server mit Domain `foo.example.com` könnte das Attribut also auf `example.com` oder `foo.example.com` setzen, aber nicht auf `bar.foo.example.com` oder `elsewhere.com` (die Cookies würden jedoch _noch an_ Subdomains wie `bar.foo.example.com` gesendet werden).
  Siehe [Ungültige Domains](/de/docs/Web/HTTP/Reference/Headers/Set-Cookie#invalid_domains) für weitere Details.

- Das `Path`-Attribut gibt einen URL-Pfad an, der in der angeforderten URL vorhanden sein muss, um den `Cookie`-Header zu senden. Zum Beispiel:

  ```http
  Set-Cookie: id=a3fWa; Expires=Thu, 21 Oct 2021 07:28:00 GMT; Secure; HttpOnly; Path=/docs
  ```

  Das `%x2F` ("/")-Zeichen wird als Verzeichnistrenner betrachtet, und Unterverzeichnisse stimmen ebenfalls überein. Bei Beispiel, wenn Sie `Path=/docs` setzen, stimmen diese Anforderungspfade überein:
  - `/docs`
  - `/docs/`
  - `/docs/Web/`
  - `/docs/Web/HTTP`

  Aber diese Anforderungspfade stimmen nicht überein:
  - `/`
  - `/docsets`
  - `/fr/docs`

  > [!NOTE]
  > Das `path`-Attribut ermöglicht es Ihnen zu kontrollieren, welche Cookies der Browser basierend auf den verschiedenen Teilen einer Website sendet.
  > Es ist nicht als Sicherheitsmaßnahme gedacht und [schützt nicht](/de/docs/Web/API/Document/cookie#security) vor unbefugtem Lesen des Cookies von einem anderen Pfad.

### Kontrolle von Drittanbieter-Cookies mit `SameSite`

Das [`SameSite`](/de/docs/Web/HTTP/Reference/Headers/Set-Cookie#samesitesamesite-value)-Attribut ermöglicht es Servern anzugeben, ob/wann Cookies mit plattformübergreifenden Anfragen gesendet werden — d.h. [Drittanbieter-Cookies](/de/docs/Web/Privacy/Guides/Third-party_cookies). Plattformübergreifende Anfragen sind Anfragen, bei denen die {{Glossary("Site", "Site")}} (die registrierbare Domain) und/oder das Schema (http oder https) nicht mit der Site übereinstimmen, die der Benutzer gerade besucht. Dazu gehören Anfragen, die gesendet werden, wenn Links auf anderen Sites angeklickt werden, um zu Ihrer Site zu navigieren, und alle Anfragen, die von eingebetteten Drittanbieter-Inhalten gesendet werden.

`SameSite` hilft, Informationslecks zu verhindern, den Benutzer-[Datenschutz](#datenschutz_und_tracking) zu wahren und bietet einen gewissen Schutz gegen {{Glossary("CSRF", "Cross-Site-Request-Forgery")}}-Angriffe. Es kann drei Werttypen annehmen: `Strict`, `Lax` und `None`:

- `Strict` bewirkt, dass der Browser das Cookie nur als Antwort auf Anfragen sendet, die vom Ursprungsort des Cookies stammen. Dies sollte verwendet werden, wenn Sie Cookies haben, die mit Funktionen zu tun haben, die immer hinter einer anfänglichen Navigation stehen werden, wie z. B. Authentifizierung oder das Speichern von Einkaufswageninformationen.

  ```http
  Set-Cookie: cart=110045_77895_53420; SameSite=Strict
  ```

  > [!NOTE]
  > Cookies, die für sensible Informationen verwendet werden, sollten auch eine kurze [Lebensdauer](#removal_defining_the_lifetime_of_a_cookie) haben.

- `Lax` ist ähnlich, außer dass der Browser das Cookie auch sendet, wenn der Benutzer zur Ursprungsseite des Cookies _navigiert_ (selbst wenn der Benutzer von einer anderen Site kommt). Dies ist nützlich für Cookies, die die Anzeige einer Website beeinflussen — zum Beispiel könnten Sie Produktinformationen von Partnern zusammen mit einem Affiliate-Link auf Ihrer Webseite haben. Wenn dieser Link zur Partner-Webseite verfolgt wird, möchten diese möglicherweise ein Cookie setzen, das angibt, dass der Affiliate-Link verfolgt wurde, was ein Belohnungsbanner anzeigt und einen Rabatt bietet, wenn das Produkt gekauft wird.

  ```http
  Set-Cookie: affiliate=e4rt45dw; SameSite=Lax
  ```

- `None` gibt an, dass Cookies bei sowohl Ursprungs- als auch plattformübergreifenden Anfragen gesendet werden. Dies ist nützlich, wenn Sie Cookies zusammen mit Anfragen, die von Drittanbieter-Inhalten, die auf anderen Seiten eingebettet sind, senden möchten, z. B. Ad-Tech oder Analytik-Dienste. Beachten Sie, dass wenn `SameSite=None` gesetzt ist, auch das `Secure`-Attribut gesetzt sein muss — `SameSite=None` erfordert einen _sicheren Kontext_.

  ```http
  Set-Cookie: widget_session=7yjgj57e4n3d; SameSite=None; Secure; HttpOnly
  ```

Wenn kein `SameSite`-Attribut gesetzt ist, wird das Cookie standardmäßig als `Lax` behandelt.

### Cookie-Präfixe

Aufgrund des Designs des Cookie-Mechanismus kann ein Server nicht bestätigen, dass ein Cookie von einem sicheren Ursprung gesetzt wurde oder auch nur feststellen, _wo_ ein Cookie ursprünglich gesetzt wurde.

Eine Anwendung auf einer Subdomain kann ein Cookie mit dem `Domain`-Attribut setzen, was Zugriff auf dieses Cookie auf allen anderen Subdomains ermöglicht. Diese Mechanismus kann bei einem [Session-Fixation](https://owasp.org/www-community/attacks/Session_fixation)-Angriff missbraucht werden.

Als [Verteidigungsmaßnahme in der Tiefe](<https://en.wikipedia.org/wiki/Defense_in_depth_(computing)>) können Sie jedoch _Cookie-Präfixe_ verwenden, um bestimmte Tatsachen über das Cookie zu behaupten. Zwei Präfixe stehen zur Verfügung:

- `__Host-`: Wenn ein Cookie-Name dieses Präfix aufweist, wird es in einem {{HTTPHeader("Set-Cookie")}}-Header nur akzeptiert, wenn es auch mit dem `Secure`-Attribut markiert ist, von einem sicheren Ursprung gesendet wurde, _kein_ `Domain`-Attribut enthält und das `Path`-Attribut auf `/` gesetzt ist. Mit anderen Worten, das Cookie ist _Domain-gebunden_.
- `__Secure-`: Wenn ein Cookie-Name dieses Präfix aufweist, wird es in einem {{HTTPHeader("Set-Cookie")}}-Header nur akzeptiert, wenn es mit dem `Secure`-Attribut markiert ist und von einem sicheren Ursprung gesendet wurde. Dies ist schwächer als das `__Host-`-Präfix.

Der Browser wird Cookies mit diesen Präfixen ablehnen, die nicht mit ihren Einschränkungen übereinstimmen. Dies stellt sicher, dass von Subdomains erstellte Cookies mit Präfixen entweder auf eine Subdomain beschränkt oder vollständig ignoriert werden. Da der Anwendungsserver nur nach einem spezifischen Cookie-Namen sucht, um festzustellen, ob der Benutzer authentifiziert ist oder ein CSRF-Token korrekt ist, funktioniert dies effektiv als Verteidigungsmaßnahme gegen [Session-Fixation](https://owasp.org/www-community/attacks/Session_fixation).

> [!NOTE]
> Auf dem Server _muss_ die Webanwendung nach dem vollständigen Cookie-Namen inklusive Präfix suchen. Benutzeragenten _streifen_ das Präfix nicht vom Cookie ab, bevor sie es im {{HTTPHeader("Cookie")}}-Header einer Anfrage senden.

Für weitere Informationen über Cookie-Präfixe und den aktuellen Stand der Browserunterstützung siehe den [Präfixe-Abschnitt des Set-Cookie-Referenzartikels](/de/docs/Web/HTTP/Reference/Headers/Set-Cookie#cookie_prefixes).

## Datenschutz und Tracking

Weiter oben haben wir darüber gesprochen, wie das `SameSite`-Attribut verwendet werden kann, um zu kontrollieren, wann Drittanbieter-Cookies gesendet werden, und dass dies zum Schutz der Privatsphäre der Benutzer beitragen kann. Der Schutz der Privatsphäre ist eine sehr wichtige Überlegung beim Erstellen von Websites, die bei korrekter Durchführung Vertrauen bei Ihren Benutzern aufbauen können. Wenn es schlecht gemacht wird, kann es jedoch dieses Vertrauen vollständig untergraben und alle möglichen weiteren Probleme verursachen.

Drittanbieter-Cookies können von Drittanbieter-Inhalten, die in Websites über {{htmlelement("iframe")}}s eingebettet sind, gesetzt werden. Sie haben viele legitime Verwendungszwecke, einschließlich der Freigabe von Benutzerprofilinformationen, der Zählung von Anzeigenimpressionen oder der Sammlung von Analysen über verschiedene verwandte Domains.

Drittanbieter-Cookies können jedoch auch verwendet werden, um unangenehme, aufdringliche Benutzererfahrungen zu schaffen. Ein Drittanbieter-Server kann ein Profil des Browserverlaufs und der Gewohnheiten eines Benutzers erstellen, basierend auf Cookies, die ihm von demselben Browser beim Zugriff auf mehrere Sites gesendet werden. Ein klassisches Beispiel ist, wenn Sie nach Produktinformationen auf einer Seite suchen und dann im Internet verfolgt werden von Anzeigen für ähnliche Produkte, wo immer Sie hingehen.

Browseranbieter wissen, dass Benutzer dieses Verhalten nicht mögen, und als Ergebnis haben alle begonnen, Drittanbieter-Cookies standardmäßig zu blockieren oder zumindest Pläne in diese Richtung gemacht. Drittanbieter-Cookies (oder einfach Tracking-Cookies) können auch durch andere Browsereinstellungen oder Erweiterungen blockiert werden.

> [!NOTE]
> Cookie-Blockierung kann dazu führen, dass einige Drittanbieter-Komponenten (wie Social-Media-Widgets) nicht wie beabsichtigt funktionieren. Da Browser weitere Einschränkungen für Drittanbieter-Cookies auferlegen, sollten Entwickler anfangen, nach Möglichkeiten zu suchen, ihre Abhängigkeit von ihnen zu verringern.

Siehe unseren [Artikel über Drittanbieter-Cookies](/de/docs/Web/Privacy/Guides/Third-party_cookies) für ausführliche Informationen über Drittanbieter-Cookies, die damit verbundenen Probleme und welche Alternativen verfügbar sind. Besuchen Sie unsere [Datenschutz-Startseite](/de/docs/Web/Privacy) für weitere Informationen über Datenschutz im Allgemeinen.

## Cookie-bezogene Vorschriften

Gesetze oder Vorschriften, die die Verwendung von Cookies abdecken, umfassen:

- Die [Datenschutz-Grundverordnung](https://gdpr.eu/) (DSGVO) in der Europäischen Union
- Die ePrivacy-Richtlinie in der EU
- Das California Consumer Privacy Act

Diese Vorschriften haben globale Reichweite. Sie gelten für jede Site im _World Wide_ Web, auf die Benutzer aus diesen Gerichtsbarkeiten (der EU und Kalifornien, mit der Einschränkung, dass das kalifornische Gesetz nur für Unternehmen mit einem Bruttoeinkommen von über 25 Millionen USD gilt) zugreifen.

Diese Vorschriften beinhalten Anforderungen wie:

- Den Nutzern mitzuteilen, dass Ihre Site Cookies verwendet.
- Den Nutzern die Möglichkeit zu geben, den Empfang einiger oder aller Cookies abzulehnen.
- Den Nutzern die Möglichkeit zu geben, den Großteil Ihres Dienstes ohne den Empfang von Cookies zu nutzen.

Es kann andere Vorschriften geben, die die Verwendung von Cookies in Ihrem Gebiet regeln. Es liegt in Ihrer Verantwortung, diese Vorschriften zu kennen und einzuhalten. Es gibt Unternehmen, die "Cookie-Banner"-Code anbieten, um Ihnen bei der Einhaltung dieser Vorschriften zu helfen.

> [!NOTE]
> Unternehmen sollten die Arten von Cookies, die sie auf ihren Sites verwenden, zu Transparenzzwecken und zur Einhaltung von Vorschriften offenlegen. Zum Beispiel, siehe [Googles Hinweis zu den Arten von Cookies, die es verwendet](https://policies.google.com/technologies/cookies#types-of-cookies) und Mozillas [Datenschutzhinweis zu Websites, Kommunikation & Cookies](https://www.mozilla.org/en-US/privacy/websites/#cookies).

## Siehe auch

- Verwandte HTTP-Header: {{HTTPHeader("Set-Cookie")}}, {{HTTPHeader("Cookie")}}
- Verwandte JavaScript-APIs: [`Document.cookie`](/de/docs/Web/API/Document/cookie), [`Navigator.cookieEnabled`](/de/docs/Web/API/Navigator/cookieEnabled), [Cookie Store API](/de/docs/Web/API/Cookie_Store_API)
- [Drittanbieter-Cookies](/de/docs/Web/Privacy/Guides/Third-party_cookies)
- [Cookie-Spezifikation: RFC 6265](https://datatracker.ietf.org/doc/html/rfc6265)
- [Cookies, die DSGVO und die ePrivacy-Richtlinie](https://gdpr.eu/cookies/)
