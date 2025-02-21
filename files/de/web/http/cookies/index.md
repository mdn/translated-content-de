---
title: Verwendung von HTTP-Cookies
slug: Web/HTTP/Cookies
l10n:
  sourceCommit: 775df1c62a1cbe555c4374ff9122d4ef15bd6f60
---

{{HTTPSidebar}}

Ein **Cookie** (auch bekannt als Web-Cookie oder Browser-Cookie) ist ein kleines Datenpaket, das ein Server an den Webbrowser eines Nutzers sendet. Der Browser kann Cookies speichern, neue Cookies erstellen, bestehende ändern und bei späteren Anfragen an denselben Server zurücksenden. Cookies ermöglichen es Webanwendungen, begrenzte Datenmengen zu speichern und Statusinformationen zu merken; standardmäßig ist das HTTP-Protokoll [zustandslos](/de/docs/Web/HTTP/Overview#http_is_stateless_but_not_sessionless).

In diesem Artikel werden wir die Hauptverwendungen von Cookies untersuchen, bewährte Praktiken für ihre Nutzung erläutern sowie auf ihre Datenschutz- und Sicherheitsimplikationen eingehen.

## Wofür Cookies verwendet werden

Typischerweise verwendet der Server den Inhalt von HTTP-Cookies, um festzustellen, ob verschiedene Anfragen von demselben Browser/Nutzer stammen, und gibt entsprechend eine personalisierte oder generische Antwort. Im Folgenden wird ein sehr einfaches Benutzeranmeldesystem beschrieben:

1. Der Nutzer sendet Anmeldeinformationen an den Server, beispielsweise über ein Formular.
2. Wenn die Anmeldeinformationen korrekt sind, aktualisiert der Server die Benutzeroberfläche, um anzuzeigen, dass der Nutzer angemeldet ist, und antwortet mit einem Cookie, das eine Sitzungs-ID enthält, die den Anmeldestatus im Browser speichert.
3. Zu einem späteren Zeitpunkt wechselt der Nutzer zu einer anderen Seite auf derselben Website. Der Browser sendet das Cookie mit der Sitzungs-ID zusammen mit der entsprechenden Anfrage, um anzuzeigen, dass der Benutzer weiterhin als angemeldet betrachtet wird.
4. Der Server überprüft die Sitzungs-ID und sendet dem Nutzer, falls sie noch gültig ist, eine personalisierte Version der neuen Seite. Ist sie nicht gültig, wird die Sitzungs-ID gelöscht, und dem Nutzer wird eine generische Version der Seite gezeigt (oder möglicherweise eine "Zugriff verweigert"-Nachricht, und er wird aufgefordert, sich erneut anzumelden).

![visuelle Darstellung des oben beschriebenen Anmeldesystems](cookie-basic-example.png)

Cookies werden hauptsächlich für drei Zwecke verwendet:

- **Sitzungsverwaltung**: Anmeldestatus des Nutzers, Warenkorbinhalte, Spielergebnisse oder andere sitzungsbezogene Details, die der Server speichern muss.
- **Personalisierung**: Benutzereinstellungen wie Anzeigesprache und UI-Thema.
- **Verfolgung**: Aufzeichnung und Analyse des Nutzerverhaltens.

### Datenspeicherung

In den frühen Tagen des Webs, als es keine andere Option gab, wurden Cookies für allgemeine clientseitige Datenspeicherungszwecke verwendet. Moderne Speicher-APIs werden jetzt empfohlen, zum Beispiel die [Web Storage API](/de/docs/Web/API/Web_Storage_API) (`localStorage` und `sessionStorage`) und [IndexedDB](/de/docs/Web/API/IndexedDB_API).

Sie werden für die Speicherung konzipiert, senden niemals Daten an den Server und kommen nicht mit anderen Nachteilen, die die Verwendung von Cookies zur Speicherung mit sich bringt:

- Browser sind im Allgemeinen auf eine maximale Anzahl von Cookies pro Domain beschränkt (variiert je nach Browser, im Allgemeinen im Hunderterbereich), und auf eine maximale Größe pro Cookie (meist 4 KB). Speicher-APIs können größere Datenmengen speichern.
- Cookies werden bei jeder Anfrage gesendet, was die Leistung verschlechtern kann (zum Beispiel bei langsamen mobilen Datenverbindungen), besonders wenn viele Cookies gesetzt sind.

> [!NOTE]
> Um gespeicherte Cookies (und andere Speicher, die eine Webseite verwendet) zu sehen, können Sie den [Speicherinspektor](https://firefox-source-docs.mozilla.org/devtools-user/storage_inspector/index.html) in den Firefox-Entwicklerwerkzeugen oder das [Anwendungsfeld](https://developer.chrome.com/docs/devtools/progressive-web-apps) in den Chrome-Entwicklerwerkzeugen verwenden.

## Erstellen, Entfernen und Aktualisieren von Cookies

Nachdem eine HTTP-Anfrage empfangen wurde, kann ein Server ein oder mehrere {{HTTPHeader("Set-Cookie")}}-Header mit der Antwort senden, von denen jeder ein separates Cookie setzt. Ein einfaches Cookie wird durch die Angabe eines Name-Wert-Paares festgelegt, wie folgt:

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
> Erfahren Sie, wie Sie den `Set-Cookie`-Header in verschiedenen serverseitigen Sprachen/Frameworks verwenden: [PHP](https://www.php.net/manual/de/function.setcookie.php), [Node.js](https://nodejs.org/docs/latest-v19.x/api/http.html#responsesetheadername-value), [Python](https://docs.python.org/3/library/http.cookies.html), [Ruby on Rails](https://api.rubyonrails.org/classes/ActionDispatch/Cookies.html).

Wenn eine neue Anfrage gestellt wird, sendet der Browser normalerweise zuvor gespeicherte Cookies für die aktuelle Domain innerhalb eines {{HTTPHeader("Cookie")}}-HTTP-Headers zurück an den Server:

```http
GET /sample_page.html HTTP/2.0
Host: www.example.org
Cookie: yummy_cookie=chocolate; tasty_cookie=strawberry
```

### Entfernen: Definieren der Lebensdauer eines Cookies

Sie können ein Ablaufdatum oder einen Zeitraum angeben, nach dem das Cookie gelöscht und nicht mehr gesendet werden sollte. Abhängig von den Attributen, die beim Erstellen der Cookies innerhalb des {{HTTPHeader("Set-Cookie")}}-Headers festgelegt wurden, können sie entweder _permanent_ oder _Sitzungscookies_ sein:

- Permanente Cookies werden nach dem im Attribut `Expires` angegebenen Datum gelöscht:

  ```http
  Set-Cookie: id=a3fWa; Expires=Thu, 31 Oct 2021 07:28:00 GMT;
  ```

  oder nach dem im Attribut `Max-Age` festgelegten Zeitraum:

  ```http
  Set-Cookie: id=a3fWa; Max-Age=2592000
  ```

  > **Hinweis:** `Expires` ist länger verfügbar als `Max-Age`, jedoch ist `Max-Age` weniger fehleranfällig und hat Vorrang, wenn beide gesetzt sind. Der Grund dafür ist, dass wenn Sie ein `Expires`-Datum und eine Uhrzeit festlegen, diese relativ zum Client sind, auf dem das Cookie gesetzt wird. Wenn der Server auf eine andere Zeit eingestellt ist, könnte dies zu Fehlern führen.

- _Sitzungscookies_ — Cookies ohne `Max-Age` oder `Expires`-Attribut – werden gelöscht, wenn die aktuelle Sitzung endet. Der Browser definiert, wann die "aktuelle Sitzung" endet, und einige Browser verwenden _Sitzungswiederherstellung_ beim Neustart. Dies kann dazu führen, dass Sitzungscookies unendlich lange anhalten.

  > [!NOTE]
  > Wenn Ihre Website Benutzer authentifiziert, sollte sie Sitzungs-Cookies regenerieren und erneut senden, selbst solche, die bereits existieren, wann immer ein Benutzer authentifiziert wird. Dieser Ansatz hilft, [Session-Fixations-Angriffe](/de/docs/Web/Security/Types_of_attacks#session_fixation) zu verhindern, bei denen Dritte die Sitzung eines Nutzers wiederverwenden können.

Es gibt einige Techniken, die darauf ausgelegt sind, Cookies nach deren Löschung wiederherzustellen. Diese sind als "Zombie"-Cookies bekannt. Diese Techniken verletzen die Prinzipien der Nutzer[privatsphäre](#datenschutz_und_tracking) und -kontrolle, könnten [Datenschutzbestimmungen](#cookie-bezogene_vorschriften) verletzen und eine Webseite, die sie verwendet, rechtlichen Risiken aussetzen.

### Aktualisieren von Cookie-Werten

Um ein Cookie über HTTP zu aktualisieren, kann der Server einen {{HTTPHeader("Set-Cookie")}}-Header mit dem bestehenden Namen des Cookies und einem neuen Wert senden. Zum Beispiel:

```http
Set-Cookie: id=new-value
```

Es gibt mehrere Gründe, warum Sie dies tun könnten, zum Beispiel, wenn ein Nutzer seine Einstellungen aktualisiert hat und die Anwendung diese Änderungen in clientseitigen Daten widerspiegeln soll (Sie könnten dies auch durch einen clientseitigen Speichermechanismus wie [Web Storage](/de/docs/Web/API/Web_Storage_API) tun).

#### Aktualisieren von Cookies über JavaScript

Im Browser können Sie neue Cookies über JavaScript mit der [`Document.cookie`](/de/docs/Web/API/Document/cookie)-Eigenschaft erstellen oder die asynchrone [Cookie Store API](/de/docs/Web/API/Cookie_Store_API) verwenden. Beachten Sie, dass alle untenstehenden Beispiele `Document.cookie` verwenden, da es die am weitesten unterstützte/etablierte Option ist.

```js
document.cookie = "yummy_cookie=chocolate";
document.cookie = "tasty_cookie=strawberry";
```

Sie können auch auf bestehende Cookies zugreifen und neue Werte für sie festlegen, sofern nicht das [`HttpOnly`](/de/docs/Web/HTTP/Headers/Set-Cookie#httponly)-Attribut auf sie gesetzt ist (d. h. im `Set-Cookie`-Header, der es erstellt hat):

```js
console.log(document.cookie);
// logs "yummy_cookie=chocolate; tasty_cookie=strawberry"

document.cookie = "yummy_cookie=blueberry";

console.log(document.cookie);
// logs "tasty_cookie=strawberry; yummy_cookie=blueberry"
```

Beachten Sie, dass Sie aus Sicherheitsgründen Cookie-Werte nicht ändern können, indem Sie direkt beim Initiieren einer Anfrage einen aktualisierten `Cookie`-Header senden, d. h. über [`fetch()`](/de/docs/Web/API/Window/fetch) oder [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest). Beachten Sie, dass es auch gute Gründe gibt, warum Sie JavaScript nicht erlauben sollten, Cookies zu ändern – d. h. `HttpOnly` während der Erstellung setzen. Siehe den Abschnitt [Sicherheit](#sicherheit) für weitere Details.

## Sicherheit

Wenn Sie Informationen in Cookies speichern, sind standardmäßig alle Cookie-Werte für den Endnutzer sichtbar und können von diesem geändert werden. Sie möchten nicht, dass Ihre Cookies missbraucht werden – zum Beispiel von böswilligen Akteuren abgerufen/geändert oder an Domänen gesendet, an die sie nicht gesendet werden sollten. Die potenziellen Folgen können von ärgerlich – Apps, die nicht funktionieren oder seltsames Verhalten zeigen – bis katastrophal reichen. Ein Krimineller könnte beispielsweise eine Sitzungs-ID stehlen und verwenden, um ein Cookie zu setzen, das vorgibt, dass er als jemand anderes angemeldet ist, und dabei die Kontrolle über dessen Bank- oder E-Commerce-Konto zu erlangen.

Sie können Ihre Cookies auf verschiedene Arten sichern, die in diesem Abschnitt besprochen werden.

### Zugriff auf Ihre Cookies blockieren

Sie können sicherstellen, dass Cookies sicher gesendet werden und nicht von ungewollten Parteien oder Skripten abgerufen werden, auf zwei Arten: mit dem `Secure`-Attribut und dem `HttpOnly`-Attribut:

```http
Set-Cookie: id=a3fWa; Expires=Thu, 21 Oct 2021 07:28:00 GMT; Secure; HttpOnly
```

- Ein Cookie mit dem `Secure`-Attribut wird nur mit einer verschlüsselten Anfrage über das HTTPS-Protokoll an den Server gesendet. Es wird niemals mit nicht gesichertem HTTP (außer auf localhost) gesendet, was bedeutet, dass {{Glossary("MitM", "Man-in-the-Middle")}}-Angreifer es nicht leicht erreichen können. Unsichere Seiten (mit `http:` in der URL) können keine Cookies mit dem `Secure`-Attribut setzen. Gehen Sie jedoch nicht davon aus, dass `Secure` alle Zugriffe auf sensible Informationen in Cookies verhindert. Beispielsweise kann jemand mit Zugriff auf die Festplatte des Clients (oder JavaScript, wenn das `HttpOnly`-Attribut nicht gesetzt ist) die Informationen lesen und ändern.

- Ein Cookie mit dem `HttpOnly`-Attribut kann nicht durch JavaScript abgerufen werden, beispielsweise durch die Verwendung von [`Document.cookie`](/de/docs/Web/API/Document/cookie); es kann nur abgerufen werden, wenn es den Server erreicht. Cookies, die Benutzer-Sitzungen fortsetzen, sollten beispielsweise das `HttpOnly`-Attribut gesetzt haben – es wäre wirklich unsicher, sie JavaScript verfügbar zu machen. Diese Vorsichtsmaßnahme hilft, Cross-Site-Scripting ([XSS](/de/docs/Web/Security/Types_of_attacks#cross-site_scripting_xss))-Angriffe zu minimieren.

> [!NOTE]
> Abhängig von der Anwendung sollten Sie möglicherweise einen nicht transparenten Bezeichner verwenden, den der Server nachschlägt, anstatt sensible Informationen direkt in Cookies zu speichern, oder Alternativen für Authentifizierungs-/Vertraulichkeitsmechanismen wie [JSON Web Tokens](https://jwt.io/) untersuchen.

### Definieren, wohin Cookies gesendet werden

Die Attribute `Domain` und `Path` definieren den _Geltungsbereich_ eines Cookies: an welche URLs die Cookies gesendet werden.

- Das `Domain`-Attribut gibt an, welcher Server ein Cookie empfangen kann. Wenn angegeben, sind Cookies auf dem angegebenen Server und seinen Subdomains verfügbar. Wenn Sie beispielsweise `Domain=mozilla.org` von `mozilla.org` setzen, sind Cookies auf dieser Domain und Subdomains wie `developer.mozilla.org` verfügbar.

  ```http
  Set-Cookie: id=a3fWa; Expires=Thu, 21 Oct 2021 07:28:00 GMT; Secure; HttpOnly; Domain=mozilla.org
  ```

  Wenn der `Set-Cookie`-Header kein `Domain`-Attribut angibt, sind die Cookies auf dem Server verfügbar, der sie setzt, _aber nicht auf seinen Subdomains_. Daher ist das Festlegen von `Domain` weniger restriktiv, als es wegzulassen.
  Beachten Sie, dass ein Server das `Domain`-Attribut nur auf seine eigene Domain oder eine übergeordnete Domain setzen kann, nicht jedoch auf eine Subdomain oder eine andere Domain.
  Ein Server mit der Domain `foo.example.com` könnte das Attribut beispielsweise auf `example.com` oder `foo.example.com` setzen, jedoch nicht auf `bar.foo.example.com` oder `elsewhere.com` (die Cookies würden jedoch weiterhin _an_ Subdomains wie `bar.foo.example.com` gesendet).
  Siehe [Ungültige Domänen](/de/docs/Web/HTTP/Headers/Set-Cookie#invalid_domains) für weitere Details.

- Das `Path`-Attribut gibt einen URL-Pfad an, der in der angeforderten URL vorhanden sein muss, um den `Cookie`-Header zu senden. Zum Beispiel:

  ```http
  Set-Cookie: id=a3fWa; Expires=Thu, 21 Oct 2021 07:28:00 GMT; Secure; HttpOnly; Path=/docs
  ```

  Das `%x2F` ("/")-Zeichen wird als Verzeichnistrennzeichen betrachtet, und Unterverzeichnisse passen ebenfalls. Wenn Sie beispielsweise `Path=/docs` setzen, passen diese Anforderungspfade:

  - `/docs`
  - `/docs/`
  - `/docs/Web/`
  - `/docs/Web/HTTP`

  Aber diese Anforderungspfade passen nicht:

  - `/`
  - `/docsets`
  - `/fr/docs`

### Kontrolle von Drittanbieter-Cookies mit `SameSite`

Das [`SameSite`](/de/docs/Web/HTTP/Headers/Set-Cookie#samesitesamesite-value)-Attribut ermöglicht es Servern, anzugeben, ob und wann Cookies mit Cross-Site-Anfragen gesendet werden — d. h. [Drittanbieter-Cookies](/de/docs/Web/Privacy/Guides/Third-party_cookies). Cross-Site-Anfragen sind Anfragen, bei denen die {{Glossary("Site", "Site")}} (die registrierbare Domain) und/oder das Schema (http oder https) nicht mit der Seite übereinstimmen, die der Nutzer derzeit besucht. Dies umfasst Anfragen, die gesendet werden, wenn auf Links auf anderen Seiten geklickt wird, um zu Ihrer Seite zu navigieren, und jede Anfrage, die von eingebetteten Drittanbieter-Inhalten gesendet wird.

`SameSite` hilft, Informationslecks zu verhindern, schützt die Nutzer[privatsphäre](#datenschutz_und_tracking) und bietet einen gewissen Schutz vor {{Glossary("CSRF", "Cross-Site-Request-Forgery")}} Angriffen. Es nimmt drei mögliche Werte an: `Strict`, `Lax` und `None`:

- `Strict` bewirkt, dass der Browser das Cookie nur als Antwort auf Anfragen sendet, die vom Ursprungsort des Cookies stammen. Dies sollte verwendet werden, wenn Sie Cookies haben, die sich auf Funktionen beziehen, die immer hinter einer ersten Navigation liegen werden, wie z. B. Authentifizierung oder Speichern von Warenkorbinformationen.

  ```http
  Set-Cookie: cart=110045_77895_53420; SameSite=Strict
  ```

  > [!NOTE]
  > Cookies, die für sensible Informationen verwendet werden, sollten auch eine kurze [Lebensdauer](#removal_defining_the_lifetime_of_a_cookie) haben.

- `Lax` ist ähnlich, außer dass der Browser das Cookie auch sendet, wenn der Nutzer _zur_ Ursprungsseite des Cookies navigiert (auch wenn der Nutzer von einer anderen Seite kommt). Dies ist nützlich für Cookies, die die Anzeige einer Seite betreffen – beispielsweise könnten Sie Partnerproduktinformationen zusammen mit einem Affiliate-Link auf Ihrer Website haben. Wenn auf diesen Link zum Partner-Website gefolgt wird, möchten sie möglicherweise ein Cookie setzen, das angibt, dass der Affiliate-Link gefolgt wurde, was ein Belohnungsbanner anzeigt und einen Rabatt bietet, wenn das Produkt gekauft wird.

  ```http
  Set-Cookie: affiliate=e4rt45dw; SameSite=Lax
  ```

- `None` gibt an, dass Cookies sowohl bei Ursprungs- als auch bei Cross-Site-Anfragen gesendet werden. Dies ist nützlich, wenn Sie Cookies mit Anfragen enthalten möchten, die von Dritteinhaltsanbietern in andere Seiten eingebettet werden, beispielsweise Werbetechnik- oder Analytikanbieter. Beachten Sie, dass, wenn `SameSite=None` gesetzt ist, das `Secure`-Attribut ebenfalls gesetzt sein muss — `SameSite=None` erfordert einen _sicheren Kontext_.

  ```http
  Set-Cookie: widget_session=7yjgj57e4n3d; SameSite=None; Secure; HttpOnly
  ```

Wenn kein `SameSite`-Attribut gesetzt ist, wird das Cookie standardmäßig als `Lax` behandelt.

### Cookie-Präfixe

Aufgrund des Designs des Cookie-Mechanismus kann ein Server nicht bestätigen, dass ein Cookie von einer sicheren Herkunft gesetzt wurde oder sogar bestimmen, _wo_ ein Cookie ursprünglich gesetzt wurde.

Eine anfällige Anwendung auf einer Subdomain kann ein Cookie mit dem `Domain`-Attribut setzen, was den Zugang zu diesem Cookie auf allen anderen Subdomains ermöglicht. Dieser Mechanismus kann in einem _Session-Fixations-Angriff_ missbraucht werden. Siehe [Session-Fixation](/de/docs/Web/Security/Types_of_attacks#session_fixation) für primäre Präventionsmethoden.

Als [tiefgreifende Verteidigungsmaßnahme](<https://de.wikipedia.org/wiki/Tiefdecke_Verteidigung_(Informatik)>), können Sie jedoch _Cookie-Präfixe_ verwenden, um bestimmte Tatsachen über das Cookie zu behaupten. Es sind zwei Präfixe verfügbar:

- `__Host-`: Wenn ein Cookie-Name dieses Präfix hat, wird es in einem {{HTTPHeader("Set-Cookie")}}-Header nur dann akzeptiert, wenn es auch mit dem `Secure`-Attribut markiert ist, von einer sicheren Herkunft gesendet wurde, _kein_ `Domain`-Attribut enthält und das `Path`-Attribut auf `/` gesetzt ist. Mit anderen Worten ist das Cookie _domain-begrenzt_.
- `__Secure-`: Wenn ein Cookie-Name dieses Präfix hat, wird es in einem {{HTTPHeader("Set-Cookie")}}-Header nur dann akzeptiert, wenn es mit dem `Secure`-Attribut markiert und von einer sicheren Herkunft gesendet wurde. Dies ist schwächer als das `__Host-`-Präfix.

Der Browser lehnt Cookies mit diesen Präfixen ab, die nicht mit ihren Einschränkungen übereinstimmen. Dies stellt sicher, dass Subdomain-erstellte Cookies mit Präfix entweder auf eine Subdomain beschränkt oder vollständig ignoriert werden. Da der Anwendungsserver nur nach einem bestimmten Cookie-Namen sucht, wenn er bestimmt, ob der Benutzer authentifiziert ist oder ein CSRF-Token korrekt ist, wirkt dies effektiv als Verteidigungsmaßnahme gegen Session-Fixation.

> [!NOTE]
> Auf dem Server _muss_ die Webanwendung nach dem vollständigen Cookie-Namen einschließlich des Präfixes suchen. Benutzeragenten _entfernen_ das Präfix nicht aus dem Cookie, bevor sie es in einem Anforderungscookie-Header senden.

Für weitere Informationen über Cookie-Präfixe und den aktuellen Stand der Browserunterstützung, siehe den [Präfix-Abschnitt des Set-Cookie-Referenzartikels](/de/docs/Web/HTTP/Headers/Set-Cookie#cookie_prefixes).

## Datenschutz und Tracking

Vorher haben wir darüber gesprochen, wie das `SameSite`-Attribut verwendet werden kann, um zu kontrollieren, wann Drittanbieter-Cookies gesendet werden, und dass dies helfen kann, die Privatsphäre der Nutzer zu wahren. Privatsphäre ist ein sehr wichtiger Aspekt beim Erstellen von Websites, der, wenn er richtig gemacht wird, Vertrauen bei Ihren Nutzern aufbauen kann. Wenn dies schlecht gemacht wird, kann es dieses Vertrauen vollständig untergraben und alle möglichen anderen Probleme verursachen.

Drittanbieter-Cookies können durch Drittanbieter-Inhalte gesetzt werden, die über {{htmlelement("iframe")}}s in Webseiten eingebettet sind. Sie haben viele legitime Verwendungszwecke, einschließlich der Teilung von Nutzerprofilinformationen, der Zählung von Anzeigenimpressionen oder der Sammlung von Analysen über verschiedene verwandte Domains hinweg.

Jedoch können Drittanbieter-Cookies auch verwendet werden, um unheimliche und invasive Nutzererfahrungen zu schaffen. Ein Drittanbieterserver kann ein Profil der Browserverlauf und -gewohnheiten eines Nutzers basierend auf Cookies erstellen, die von demselben Browser beim Zugriff auf mehrere Webseiten gesendet werden. Das klassische Beispiel ist, wenn Sie auf einer Seite nach Produktinformationen suchen und dann im Web von Anzeigen für ähnliche Produkte verfolgt werden, wo immer Sie hingehen.

Browseranbieter wissen, dass Nutzer dieses Verhalten nicht mögen, weshalb sie alle begonnen haben, Drittanbieter-Cookies standardmäßig zu blockieren oder zumindest Pläne verfolgen, in diese Richtung zu gehen. Drittanbieter-Cookies (oder einfach Tracking-Cookies) können auch durch andere Browsereinstellungen oder Erweiterungen blockiert werden.

> [!NOTE]
> Das Blockieren von Cookies kann dazu führen, dass einige Drittanbieter-Komponenten (wie Social-Media-Widgets) nicht wie beabsichtigt funktionieren. Da Browser weitere Einschränkungen für Drittanbieter-Cookies auferlegen, sollten Entwickler beginnen, Wege zu suchen, ihre Abhängigkeit von ihnen zu verringern.

Siehe unseren Artikel [Drittanbieter-Cookies](/de/docs/Web/Privacy/Guides/Third-party_cookies) für detaillierte Informationen über Drittanbieter-Cookies, die damit verbundenen Probleme und welche Alternativen verfügbar sind. Besuchen Sie unsere [Datenschutz](/de/docs/Web/Privacy) Einstiegsseite für weitere Informationen zum Thema Datenschutz allgemein.

## Cookie-bezogene Vorschriften

Gesetze oder Vorschriften, die die Verwendung von Cookies abdecken, umfassen:

- Die [Datenschutz-Grundverordnung](https://gdpr.eu/) (DSGVO) in der Europäischen Union
- Die ePrivacy-Richtlinie in der EU
- Das California Consumer Privacy Act

Diese Vorschriften haben globale Reichweite. Sie gelten für jede Website im _World Wide_ Web, auf die Nutzer aus diesen Rechtsräumen zugreifen (die EU und Kalifornien, mit der Einschränkung, dass das kalifornische Gesetz nur auf Unternehmen mit einem Bruttoumsatz von über 25 Millionen USD anwendbar ist).

Diese Vorschriften beinhalten Anforderungen wie:

- Nutzer darüber zu informieren, dass Ihre Seite Cookies verwendet.
- Den Nutzern die Möglichkeit zu geben, den Empfang einiger oder aller Cookies abzulehnen.
- Den Nutzern die Möglichkeit zu geben, den Großteil Ihres Dienstes zu nutzen, ohne Cookies zu erhalten.

Es kann andere Vorschriften in Ihrem lokalen Bereich geben, die die Verwendung von Cookies regeln. Es liegt in Ihrer Verantwortung, diese Vorschriften zu kennen und einzuhalten. Es gibt Unternehmen, die Code für "Cookie-Banner" anbieten, um Ihnen bei der Einhaltung dieser Vorschriften zu helfen.

> [!NOTE]
> Unternehmen sollten die Arten von Cookies, die sie auf ihren Seiten verwenden, transparent offenlegen und die Vorschriften einhalten. Beispielsweise finden Sie [Googles Hinweis zu den Arten von Cookies, die es verwendet](https://policies.google.com/technologies/cookies#types-of-cookies) und Mozillas [Websites, Communications & Cookies Datenschutzhinweis](https://www.mozilla.org/en-US/privacy/websites/#cookies).

## Siehe auch

- Verwandte HTTP-Header: {{HTTPHeader("Set-Cookie")}}, {{HTTPHeader("Cookie")}}
- Verwandte JavaScript-APIs: [`Document.cookie`](/de/docs/Web/API/Document/cookie), [`Navigator.cookieEnabled`](/de/docs/Web/API/Navigator/cookieEnabled), [Cookie Store API](/de/docs/Web/API/Cookie_Store_API)
- [Drittanbieter-Cookies](/de/docs/Web/Privacy/Guides/Third-party_cookies)
- [Cookie-Spezifikation: RFC 6265](https://datatracker.ietf.org/doc/html/rfc6265)
- [Cookies, die DSGVO und die ePrivacy-Richtlinie](https://gdpr.eu/cookies/)
