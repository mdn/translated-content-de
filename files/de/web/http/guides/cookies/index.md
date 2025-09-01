---
title: Verwendung von HTTP-Cookies
slug: Web/HTTP/Guides/Cookies
l10n:
  sourceCommit: ac513ee8e865b8de037adee906d10fd888004cce
---

Ein **Cookie** (auch bekannt als Web-Cookie oder Browser-Cookie) ist ein kleines Datenstück, das ein Server an den Webbrowser eines Benutzers sendet. Der Browser kann Cookies speichern, neue Cookies erstellen, vorhandene ändern und sie bei späteren Anfragen an denselben Server zurücksenden. Cookies ermöglichen es Webanwendungen, begrenzte Datenmengen zu speichern und Zustandsinformationen zu merken; standardmäßig ist das HTTP-Protokoll [zustandslos](/de/docs/Web/HTTP/Guides/Overview#http_is_stateless_but_not_sessionless).

In diesem Artikel werden wir die Hauptanwendungen von Cookies untersuchen, bewährte Praktiken für deren Verwendung erläutern und ihre Datenschutz- und Sicherheitsimplikationen betrachten.

## Wofür Cookies verwendet werden

In der Regel verwendet der Server den Inhalt von HTTP-Cookies, um zu bestimmen, ob verschiedene Anfragen vom selben Browser/Benutzer kommen, und gibt dann eine personalisierte oder generische Antwort entsprechend aus. Das folgende Beispiel beschreibt ein einfaches Benutzer-Anmeldesystem:

1. Der Benutzer sendet Anmeldeinformationen an den Server, zum Beispiel durch einen Formularversand.
2. Wenn die Anmeldedaten korrekt sind, aktualisiert der Server die Benutzeroberfläche, um anzuzeigen, dass der Benutzer angemeldet ist, und antwortet mit einem Cookie, das eine Sitzungs-ID enthält, die den Anmeldestatus im Browser speichert.
3. Später wechselt der Benutzer zu einer anderen Seite derselben Website. Der Browser sendet das Cookie mit der Sitzungs-ID zusammen mit der entsprechenden Anfrage, um anzuzeigen, dass der Benutzer noch immer als angemeldet betrachtet wird.
4. Der Server prüft die Sitzungs-ID und sendet dem Benutzer, wenn sie noch gültig ist, eine personalisierte Version der neuen Seite. Ist sie nicht gültig, wird die Sitzungs-ID gelöscht und dem Benutzer wird eine generische Version der Seite angezeigt (oder vielleicht eine Meldung angezeigt, dass der Zugriff verweigert wird und er sich erneut anmelden muss).

![visuelle Darstellung der obigen Beschreibung des Anmeldesystems](/shared-assets/images/diagrams/http/cookies/cookie-basic-example.png)

Cookies werden hauptsächlich für drei Zwecke verwendet:

- **Sitzungsmanagement**: Benutzer-Anmeldestatus, Warenkorbinhalte, Spielergebnisse oder andere sitzungsbezogene Details, die der Server sich merken muss.
- **Personalisierung**: Benutzereinstellungen wie Anzeigesprache und UI-Thema.
- **Verfolgung**: Aufzeichnung und Analyse des Benutzerverhaltens.

### Datenspeicherung

In den frühen Tagen des Webs, als es keine andere Option gab, wurden Cookies für allgemeine clientseitige Datenspeicherzwecke verwendet. Moderne Speicher-APIs werden jetzt empfohlen, wie zum Beispiel die [Web Storage API](/de/docs/Web/API/Web_Storage_API) (`localStorage` und `sessionStorage`) und [IndexedDB](/de/docs/Web/API/IndexedDB_API).

Diese sind mit Blick auf die Speicherung konzipiert, senden nie Daten an den Server und vermeiden andere Nachteile der Verwendung von Cookies zur Speicherung:

- Browser sind in der Regel auf eine maximale Anzahl von Cookies pro Domain beschränkt (variiert je nach Browser, allgemein in den Hunderten) und eine maximale Größe pro Cookie (normalerweise 4 KB). Speicher-APIs können größere Datenmengen speichern.
- Cookies werden bei jeder Anfrage gesendet, was die Leistung verschlechtern kann (z. B. bei langsamen mobilen Datenverbindungen), insbesondere wenn viele Cookies gesetzt sind.

> [!NOTE]
> Um gespeicherte Cookies (und anderen Speicher, den eine Webseite verwendet) zu sehen, können Sie den [Speicher-Inspektor](https://firefox-source-docs.mozilla.org/devtools-user/storage_inspector/index.html) in den Firefox Developer Tools oder das [Anwendungs-Panel](https://developer.chrome.com/docs/devtools/progressive-web-apps) in den Chrome Developer Tools verwenden.

## Erstellen, Entfernen und Aktualisieren von Cookies

Nach dem Empfang einer HTTP-Anfrage kann ein Server mit der Antwort einen oder mehrere {{HTTPHeader("Set-Cookie")}}-Header senden, von denen jeder ein separates Cookie setzt. Ein Cookie wird gesetzt, indem ein Name-Wert-Paar wie folgt spezifiziert wird:

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

Wenn eine neue Anfrage gestellt wird, sendet der Browser normalerweise zuvor gespeicherte Cookies für die aktuelle Domain zurück an den Server innerhalb eines {{HTTPHeader("Cookie")}} HTTP-Headers:

```http
GET /sample_page.html HTTP/2.0
Host: www.example.org
Cookie: yummy_cookie=chocolate; tasty_cookie=strawberry
```

### Entfernung: Definieren der Lebensdauer eines Cookies

Sie können ein Ablaufdatum oder einen Zeitraum festlegen, nach dem das Cookie gelöscht werden und nicht mehr gesendet werden soll. Abhängig von den Attributen, die im {{HTTPHeader("Set-Cookie")}}-Header beim Erstellen der Cookies festgelegt werden, können sie entweder _permanente_ oder _Sitzungs_-Cookies sein:

- Permanente Cookies werden nach dem im `Expires`-Attribut angegebenen Datum gelöscht:

  ```http
  Set-Cookie: id=a3fWa; Expires=Thu, 31 Oct 2021 07:28:00 GMT;
  ```

  oder nach dem im `Max-Age`-Attribut angegebenen Zeitraum:

  ```http
  Set-Cookie: id=a3fWa; Max-Age=2592000
  ```

  > [!NOTE]
  > `Expires` ist länger verfügbar als `Max-Age`, jedoch ist `Max-Age` weniger fehleranfällig und hat Vorrang, wenn beide gesetzt sind. Der Grund dafür ist, dass wenn Sie ein `Expires`-Datum und eine Zeit setzen, diese relativ zu dem Client sind, auf dem das Cookie gesetzt wird. Wenn der Server auf eine andere Zeit eingestellt ist, könnte dies zu Fehlern führen.

- _Sitzungs_-Cookies – Cookies ohne ein `Max-Age`- oder `Expires`-Attribut – werden gelöscht, wenn die aktuelle Sitzung endet. Der Browser definiert, wann die "aktuelle Sitzung" endet, und einige Browser verwenden _Sitzungswiederherstellung_ beim Neustart. Dies kann dazu führen, dass Sitzungscookies unbegrenzt bestehen.

  > [!NOTE]
  > Wenn Ihre Website Benutzer authentifiziert, sollte sie Sitzungs-Cookies auch dann erneuern und erneut senden, wenn sie bereits existieren, wann immer ein Benutzer authentifiziert wird. Dieser Ansatz trägt dazu bei, [Session Fixation](https://owasp.org/www-community/attacks/Session_fixation)-Angriffe zu verhindern, bei denen ein Dritter die Sitzung eines Benutzers wiederverwenden kann.

Es gibt einige Techniken, die darauf abzielen, Cookies neu zu erstellen, nachdem sie gelöscht wurden. Diese sind als "Zombie"-Cookies bekannt. Diese Techniken verstoßen gegen die Grundsätze des Benutzer-[Datenschutzes](#datenschutz_und_tracking) und der Kontrolle, könnten gegen [Datenschutzbestimmungen](#cookie_related_regulations) verstoßen und eine Website, die sie verwendet, rechtlichen Risiken aussetzen.

### Aktualisierung von Cookie-Werten

Um ein Cookie über HTTP zu aktualisieren, kann der Server einen {{HTTPHeader("Set-Cookie")}}-Header mit dem Namen des bestehenden Cookies und einem neuen Wert senden. Zum Beispiel:

```http
Set-Cookie: id=new-value
```

Es gibt mehrere Gründe, warum Sie dies tun möchten, beispielsweise wenn ein Benutzer seine Präferenzen aktualisiert hat und die Anwendung die Änderungen in clientseitigen Daten widerspiegeln möchte (Sie könnten dies auch mit einem clientseitigen Speichermedium wie [Web Storage](/de/docs/Web/API/Web_Storage_API) tun).

#### Aktualisierung von Cookies mittels JavaScript

Im Browser können Sie neue Cookies über JavaScript mit der [`Document.cookie`](/de/docs/Web/API/Document/cookie)-Eigenschaft oder der asynchronen [Cookie Store API](/de/docs/Web/API/Cookie_Store_API) erstellen. Beachten Sie, dass alle untenstehenden Beispiele `Document.cookie` verwenden, da es die am weitesten unterstützte/etablierte Option ist.

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

Aus Sicherheitsgründen können Sie Cookie-Werte nicht ändern, indem Sie einen aktualisierten `Cookie`-Header direkt beim Initiieren einer Anfrage senden, zum Beispiel über [`fetch()`](/de/docs/Web/API/Window/fetch) oder [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest).

Es gibt gute Gründe, JavaScript die Modifikation von Cookies überhaupt nicht zu erlauben. Sie können verhindern, dass JavaScript auf ein Cookie zugreift, indem Sie das [`HttpOnly`](/de/docs/Web/HTTP/Reference/Headers/Set-Cookie#httponly)-Attribut bei dessen Erstellung angeben. Weitere Einzelheiten finden Sie im Abschnitt [Sicherheit](#sicherheit).

## Sicherheit

Wenn Sie Informationen in Cookies speichern, sind standardmäßig alle Cookie-Werte für den Endbenutzer sichtbar und können von ihm geändert werden. Sie möchten wirklich nicht, dass Ihre Cookies missbräuchlich verwendet werden – z.B. von böswilligen Akteuren abgerufen/geändert oder an Domänen gesendet werden, wo sie nicht hingehören. Die möglichen Folgen können von ärgerlich – Apps funktionieren nicht oder verhalten sich merkwürdig – bis katastrophal reichen. Ein Krimineller könnte beispielsweise eine Sitzungs-ID stehlen und sie verwenden, um ein Cookie zu setzen, das es ihm ermöglicht, sich als jemand anderes einzuloggen und die Kontrolle über deren Bank- oder E-Commerce-Konto zu übernehmen.

Sie können Ihre Cookies auf verschiedene Weise sichern, die in diesem Abschnitt überprüft werden.

### Blockieren des Zugriffs auf Ihre Cookies

Sie können sicherstellen, dass Cookies sicher gesendet werden und nicht von unbefugten Parteien oder Skripten zugegriffen werden, auf zwei Arten: mit dem `Secure`-Attribut und dem `HttpOnly`-Attribut:

```http
Set-Cookie: id=a3fWa; Expires=Thu, 21 Oct 2021 07:28:00 GMT; Secure; HttpOnly
```

- Ein Cookie mit dem `Secure`-Attribut wird nur mit einer verschlüsselten Anfrage über das HTTPS-Protokoll an den Server gesendet. Es wird nie mit unsicherem HTTP gesendet (außer auf localhost), was bedeutet, dass {{Glossary("MitM", "Man-in-the-Middle")}}-Angreifer nicht leicht darauf zugreifen können. Unsichere Seiten (mit `http:` in der URL) können keine Cookies mit dem `Secure`-Attribut setzen. Jedoch sollten Sie nicht davon ausgehen, dass `Secure` den gesamten Zugriff auf sensible Informationen in Cookies verhindert. Zum Beispiel kann jemand mit Zugriff auf die Festplatte des Clients (oder JavaScript, wenn das `HttpOnly`-Attribut nicht gesetzt ist) die Informationen lesen und ändern.

- Ein Cookie mit dem `HttpOnly`-Attribut kann nicht von JavaScript zugegriffen werden, zum Beispiel durch die Verwendung von [`Document.cookie`](/de/docs/Web/API/Document/cookie); es kann nur zugegriffen werden, wenn es den Server erreicht. Cookies, die Benutzersitzungen beibehalten, sollten zum Beispiel das `HttpOnly`-Attribut haben — es wäre wirklich unsicher, sie für JavaScript zugänglich zu machen. Diese Vorsichtsmaßnahme hilft, Cross-Site-Scripting ([XSS](/de/docs/Web/Security/Attacks/XSS)) Angriffe zu mindern.

> [!NOTE]
> Abhängig von der Anwendung möchten Sie vielleicht einen undurchsichtigen Bezeichner verwenden, den der Server nachschlägt, anstatt sensible Informationen direkt in Cookies zu speichern, oder alternative Authentifizierungs-/Vertraulichkeitsmechanismen wie [JSON Web Tokens](https://www.jwt.io/) untersuchen.

### Definieren, wo Cookies gesendet werden

Die `Domain`- und `Path`-Attribute definieren den _Geltungsbereich_ eines Cookies: an welche URLs die Cookies gesendet werden.

- Das `Domain`-Attribut gibt an, welcher Server ein Cookie empfangen kann. Wenn angegeben, sind Cookies auf dem angegebenen Server und seinen Subdomains verfügbar. Zum Beispiel, wenn Sie `Domain=mozilla.org` von `mozilla.org` setzen, sind Cookies auf dieser Domain und Subdomains wie `developer.mozilla.org` verfügbar.

  ```http
  Set-Cookie: id=a3fWa; Expires=Thu, 21 Oct 2021 07:28:00 GMT; Secure; HttpOnly; Domain=mozilla.org
  ```

  Wenn der `Set-Cookie`-Header kein `Domain`-Attribut spezifiziert, sind die Cookies auf dem Server, der sie setzt, verfügbar, _nicht aber auf seinen Subdomains_. Daher ist die Angabe von `Domain` weniger einschränkend als deren Weglassen. Beachten Sie, dass ein Server das `Domain`-Attribut nur auf seine eigene Domain oder eine übergeordnete Domain setzen kann, nicht auf eine Subdomain oder irgendeine andere Domain.
  Ein Server mit der Domain `foo.example.com` könnte also das Attribut auf `example.com` oder `foo.example.com` setzen, aber nicht auf `bar.foo.example.com` oder `elsewhere.com` (die Cookies würden trotzdem _an_ Subdomains wie `bar.foo.example.com` gesendet, allerdings).
  Weitere Details finden Sie unter [Ungültige Domains](/de/docs/Web/HTTP/Reference/Headers/Set-Cookie#invalid_domains).

- Das `Path`-Attribut gibt einen URL-Pfad an, der in der angeforderten URL vorhanden sein muss, um den `Cookie`-Header zu senden. Zum Beispiel:

  ```http
  Set-Cookie: id=a3fWa; Expires=Thu, 21 Oct 2021 07:28:00 GMT; Secure; HttpOnly; Path=/docs
  ```

  Das `%x2F` ("/")-Zeichen wird als Verzeichnistrenner betrachtet, und Unterverzeichnisse passen ebenfalls. Zum Beispiel, wenn Sie `Path=/docs` setzen, passen diese Anfragepfade:
  - `/docs`
  - `/docs/`
  - `/docs/Web/`
  - `/docs/Web/HTTP`

  Aber diese Anfragepfade passen nicht:
  - `/`
  - `/docsets`
  - `/fr/docs`

  > [!NOTE]
  > Das `path`-Attribut ermöglicht die Kontrolle darüber, welche Cookies der Browser basierend auf den verschiedenen Teilen einer Website sendet.
  > Es ist nicht als Sicherheitsmaßnahme gedacht und [schützt nicht](/de/docs/Web/API/Document/cookie#security) vor unbefugtem Lesen des Cookies von einem anderen Pfad.

### Kontrolle von Drittanbieter-Cookies mit `SameSite`

Das [`SameSite`](/de/docs/Web/HTTP/Reference/Headers/Set-Cookie#samesitesamesite-value)-Attribut ermöglicht es Servern, anzugeben, ob/wann Cookies bei plattformübergreifenden Anfragen gesendet werden — d.h. [Drittanbieter-Cookies](/de/docs/Web/Privacy/Guides/Third-party_cookies). Plattformübergreifende Anfragen sind Anfragen, bei denen die {{Glossary("Site", "Seite")}} (die registrierbare Domain) und/oder das Schema (http oder https) nicht mit der Seite übereinstimmen, die der Benutzer gerade besucht. Dies schließt Anfragen ein, die gesendet werden, wenn Links auf anderen Seiten geklickt werden, um zu Ihrer Seite zu navigieren, und jede Anfrage, die von eingebetteten Drittanbieter-Inhalten gesendet wird.

`SameSite` hilft dabei, Informationsverluste zu verhindern, den Benutzer-[Datenschutz](#datenschutz_und_tracking) zu wahren und bietet einen gewissen Schutz gegen {{Glossary("CSRF", "Cross-Site Request Forgery")}}-Angriffe. Es nimmt drei mögliche Werte an: `Strict`, `Lax` und `None`:

- `Strict` bewirkt, dass der Browser das Cookie nur als Antwort auf Anfragen sendet, die aus der Ursprungsseite des Cookies stammen. Dies sollte verwendet werden, wenn Sie Cookies haben, die sich auf Funktionen beziehen, die immer hinter einer anfänglichen Navigation liegen, wie z.B. Authentifizierung oder das Speichern von Warenkorbinformationen.

  ```http
  Set-Cookie: cart=110045_77895_53420; SameSite=Strict
  ```

  > [!NOTE]
  > Cookies, die für sensible Informationen verwendet werden, sollten auch eine kurze [Lebensdauer](#removal_defining_the_lifetime_of_a_cookie) haben.

- `Lax` ist ähnlich, außer dass der Browser das Cookie auch sendet, wenn der Benutzer _zur_ Ursprungsseite des Cookies _navigiert_ (auch wenn der Benutzer von einer anderen Seite kommt). Dies ist nützlich für Cookies, die die Anzeige einer Seite beeinflussen — zum Beispiel könnten Sie Partnerproduktinformationen zusammen mit einem Affiliate-Link auf Ihrer Website haben. Wenn dieser Link zur Partnerseite gefolgt wird, möchten diese möglicherweise ein Cookie setzen, das angibt, dass der Affiliate-Link gefolgt wurde, was ein Prämienbanner anzeigt und einen Rabatt gewährt, wenn das Produkt gekauft wird.

  ```http
  Set-Cookie: affiliate=e4rt45dw; SameSite=Lax
  ```

- `None` gibt an, dass Cookies sowohl bei Ursprungs- als auch bei plattformübergreifenden Anfragen gesendet werden. Dies ist nützlich, wenn Sie Cookies mit Anfragen senden möchten, die von Drittanbieter-Inhalten stammen, die in anderen Seiten eingebettet sind, wie z.B. Ad-Tech- oder Analytik-Anbieter. Beachten Sie, dass, wenn `SameSite=None` gesetzt ist, auch das `Secure`-Attribut gesetzt werden muss — `SameSite=None` erfordert einen _sicheren Kontext_.

  ```http
  Set-Cookie: widget_session=7yjgj57e4n3d; SameSite=None; Secure; HttpOnly
  ```

Wenn kein `SameSite`-Attribut gesetzt ist, wird das Cookie standardmäßig als `Lax` behandelt.

### Cookie-Präfixe

Aufgrund des Designs des Cookiemechanismus kann ein Server nicht bestätigen, dass ein Cookie von einem sicheren Ursprung gesetzt wurde oder sogar feststellen, _wo_ ein Cookie ursprünglich gesetzt wurde.

Eine Anwendung auf einer Subdomain kann ein Cookie mit dem `Domain`-Attribut setzen, das Zugriff auf dieses Cookie auf allen anderen Subdomains gewährt. Dieser Mechanismus kann in einem [Session Fixation](https://owasp.org/www-community/attacks/Session_fixation)-Angriff missbraucht werden.

Als [Defense-in-Depth-Maßnahme](<https://en.wikipedia.org/wiki/Defense_in_depth_(computing)>) können Sie _Cookie-Präfixe_ verwenden, um spezifische Einschränkungen für die Attribute eines Cookies in unterstützenden User-Agents aufzuerlegen. Alle Cookie-Präfixe beginnen mit einem Doppel-Unterstrich (`__`) und enden mit einem Bindestrich (`-`). Vier Präfixe sind verfügbar:

- **`__Secure-`**: Cookies mit Namen, die mit `__Secure-` beginnen, müssen mit dem `Secure`-Attribut von einer sicheren Seite (HTTPS) gesetzt werden.
- **`__Host-`**: Cookies mit Namen, die mit `__Host-` beginnen, müssen mit dem `Secure`-Attribut von einer sicheren Seite (HTTPS) gesetzt werden. Darüber hinaus dürfen sie kein `Domain`-Attribut haben, und das `Path`-Attribut muss auf `/` gesetzt sein. Dies garantiert, dass solche Cookies nur an den Host gesendet werden, der sie gesetzt hat, und nicht an irgendeinen anderen Host auf der Domain. Es garantiert auch, dass sie hostweit gesetzt werden und nicht auf irgendeinem Pfad auf diesem Host überschrieben werden können. Diese Kombination ergibt ein Cookie, das so nah wie möglich an die Behandlung des Ursprungs als Sicherheitsgrenze heranreicht.
- **`__Http-`**: Cookies mit Namen, die mit `__Http-` beginnen, müssen mit der `Secure`-Flagge von einer sicheren Seite (HTTPS) gesetzt werden und zusätzlich muss das `HttpOnly`-Attribut gesetzt sein, um zu beweisen, dass sie über den `Set-Cookie`-Header gesetzt wurden (sie können nicht über JavaScript-Funktionen wie [`Document.cookie`](/de/docs/Web/API/Document/cookie) oder die [Cookie Store API](/de/docs/Web/API/Cookie_Store_API) gesetzt oder modifiziert werden).
- **`__Host-Http-`**: Cookies mit Namen, die mit `__Host-Http-` beginnen, müssen mit der `Secure`-Flagge von einer sicheren Seite (HTTPS) gesetzt werden und müssen das `HttpOnly`-Attribut gesetzt haben, um zu beweisen, dass sie über den `Set-Cookie`-Header gesetzt wurden. Darüber hinaus haben sie auch die gleichen Einschränkungen wie `__Host-`-präfixierte Cookies. Diese Kombination ergibt ein Cookie, das so nah wie möglich an die Behandlung des Ursprungs als Sicherheitsgrenze herankommt und gleichzeitig sicherstellt, dass Entwickler und Serverbetreiber wissen, dass sein Anwendungsbereich auf HTTP-Anfragen beschränkt ist.

Der Browser wird Cookies mit diesen Präfixen zurückweisen, die nicht ihren Einschränkungen entsprechen. Da der Anwendungsserver nur auf einen bestimmten Cookienamen überprüft, um festzustellen, ob der Benutzer authentifiziert ist oder ein CSRF-Token korrekt ist, wirkt dies effektiv als Verteidigungsmaßnahme gegen [Session Fixation](https://owasp.org/www-community/attacks/Session_fixation)-Angriffe.

> [!NOTE]
> Auf dem Server _muss_ die Webanwendung den vollständigen Cookienamen einschließlich des Präfixes überprüfen. User Agents _entfernen_ das Präfix _nicht_ aus dem Cookie, bevor es in einem {{HTTPHeader("Cookie")}}-Header einer Anfrage gesendet wird.

Weitere Informationen zu Cookie-Präfixen und dem aktuellen Stand der Browserunterstützung finden Sie im [Praefixe-Abschnitt des Set-Cookie-Referenzartikels](/de/docs/Web/HTTP/Reference/Headers/Set-Cookie#cookie_prefixes).

## Datenschutz und Tracking

Früher haben wir darüber gesprochen, wie das `SameSite`-Attribut verwendet werden kann, um zu kontrollieren, wann Drittanbieter-Cookies gesendet werden, und dass dies dazu beitragen kann, den Datenschutz der Nutzer zu wahren. Der Datenschutz ist eine sehr wichtige Überlegung beim Erstellen von Websites, die bei richtiger Handhabung das Vertrauen der Benutzer gewinnen können. Wenn es schlecht gemacht wird, kann es dieses Vertrauen vollständig untergraben und allerlei andere Probleme verursachen.

Drittanbieter-Cookies können von eingebetteten Drittanbieter-Inhalten in Websites über {{htmlelement("iframe")}}s gesetzt werden. Sie haben viele legitime Verwendungszwecke, einschließlich der gemeinsamen Nutzung von Benutzerprofilinformationen, Zählen von Anzeigenimpressionen oder Sammeln von Analysen über verschiedene verwandte Domains hinweg.

Allerdings können Drittanbieter-Cookies auch verwendet werden, um unangenehme, aufdringliche Benutzererfahrungen zu schaffen. Ein Drittanbieter-Server kann basierend auf Cookies, die ihm vom gleichen Browser beim Zugriff auf mehrere Websites gesendet werden, ein Profil der Surfgewohnheiten und des -verlaufs eines Benutzers erstellen. Das klassische Beispiel ist, wenn Sie nach Produktinformationen auf einer Website suchen und dann von Anzeigen für ähnliche Produkte verfolgt werden, egal wohin Sie im Web gehen.

Browserhersteller wissen, dass Benutzer dieses Verhalten nicht mögen, und haben deshalb alle begonnen, Drittanbieter-Cookies standardmäßig zu blockieren oder planen zumindest, in diese Richtung zu gehen. Drittanbieter-Cookies (oder einfach Tracking-Cookies) können auch durch andere Browsereinstellungen oder Erweiterungen blockiert werden.

> [!NOTE]
> Durch das Blockieren von Cookies können einige Drittanbieter-Komponenten (wie Social Media Widgets) nicht wie beabsichtigt funktionieren. Da Browser weitere Einschränkungen für Drittanbieter-Cookies auferlegen, sollten Entwickler nach Möglichkeiten suchen, ihre Abhängigkeit von ihnen zu reduzieren.

Siehe unseren Artikel zu [Drittanbieter-Cookies](/de/docs/Web/Privacy/Guides/Third-party_cookies) für detaillierte Informationen zu Drittanbieter-Cookies, die damit verbundenen Probleme und welche Alternativen verfügbar sind. Siehe unsere [Datenschutz](/de/docs/Web/Privacy)-Landeseite für weitere Informationen zum Thema Datenschutz im Allgemeinen.

## Cookie-bezogene Vorschriften

Gesetzgebung oder Vorschriften, die die Verwendung von Cookies betreffen, umfassen:

- Die [Allgemeine Datenschutz-Grundverordnung (GDPR)](https://gdpr.eu/) in der Europäischen Union
- Die ePrivacy-Richtlinie in der EU
- Das California Consumer Privacy Act

Diese Vorschriften haben globale Reichweite. Sie gelten für jede Website im _World Wide_ Web, auf die Nutzer aus diesen Rechtsräumen (der EU und Kalifornien, mit der Einschränkung, dass das kalifornische Gesetz nur für Unternehmen mit einem Bruttoumsatz von über 25 Millionen USD gilt, unter anderem) zugreifen.

Diese Vorschriften umfassen Anforderungen wie:

- Die Benachrichtigung der Benutzer, dass Ihre Website Cookies verwendet.
- Ermöglichen der Benutzer, sich gegen den Empfang einiger oder aller Cookies zu entscheiden.
- Ermöglichen der Benutzer, den Großteil Ihrer Dienstleistung ohne den Empfang von Cookies zu nutzen.

Es kann andere Vorschriften geben, die die Verwendung von Cookies in Ihrem Gebiet regeln. Die Verantwortung liegt bei Ihnen, diese Vorschriften zu kennen und zu befolgen. Es gibt Unternehmen, die "Cookie-Banner"-Code anbieten, der Ihnen hilft, diese Vorschriften einzuhalten.

> [!NOTE]
> Unternehmen sollten die Arten von Cookies, die sie auf ihren Websites verwenden, aus Transparenzgründen und zur Einhaltung von Vorschriften offenlegen. Zum Beispiel siehe [Googles Hinweis zu den Arten von Cookies, die es verwendet](https://policies.google.com/technologies/cookies#types-of-cookies) und Mozillas [Websites, Communications & Cookies Privacy Notice](https://www.mozilla.org/en-US/privacy/websites/#cookies).

## Siehe auch

- Verwandte HTTP-Header: {{HTTPHeader("Set-Cookie")}}, {{HTTPHeader("Cookie")}}
- Verwandte JavaScript-APIs: [`Document.cookie`](/de/docs/Web/API/Document/cookie), [`Navigator.cookieEnabled`](/de/docs/Web/API/Navigator/cookieEnabled), [Cookie Store API](/de/docs/Web/API/Cookie_Store_API)
- [Drittanbieter-Cookies](/de/docs/Web/Privacy/Guides/Third-party_cookies)
- [Cookie-Spezifikation: RFC 6265](https://datatracker.ietf.org/doc/html/rfc6265)
- [Cookies, die DSGVO und die ePrivacy-Richtlinie](https://gdpr.eu/cookies/)
