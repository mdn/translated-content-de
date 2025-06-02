---
title: Verwendung von HTTP-Cookies
slug: Web/HTTP/Guides/Cookies
l10n:
  sourceCommit: 86fa532a00024e7c85a4c0d6339adce8b1bd9f61
---

{{HTTPSidebar}}

Ein **Cookie** (auch als Web-Cookie oder Browser-Cookie bekannt) ist ein kleines Datenstück, das ein Server an den Webbrowser eines Nutzers sendet. Der Browser kann Cookies speichern, neue Cookies erstellen, vorhandene ändern und sie mit späteren Anfragen an denselben Server zurücksenden. Cookies ermöglichen es Webanwendungen, begrenzte Datenmengen zu speichern und Statusinformationen zu speichern; standardmäßig ist das HTTP-Protokoll [zustandslos](/de/docs/Web/HTTP/Guides/Overview#http_is_stateless_but_not_sessionless).

In diesem Artikel werden wir die Hauptverwendungszwecke von Cookies untersuchen, bewährte Praktiken für ihre Verwendung erklären und ihre Datenschutz- und Sicherheitsimplikationen betrachten.

## Wozu Cookies verwendet werden

In der Regel verwendet der Server die Inhalte von HTTP-Cookies, um zu bestimmen, ob unterschiedliche Anfragen von demselben Browser/Nutzer stammen, und gibt dann eine personalisierte oder generische Antwort, falls erforderlich. Im Folgenden wird ein einfaches Nutzeranmeldesystem beschrieben:

1. Der Nutzer sendet Anmeldedaten an den Server, beispielsweise über ein Formular.
2. Wenn die Anmeldedaten korrekt sind, aktualisiert der Server die Benutzeroberfläche, um anzuzeigen, dass der Nutzer angemeldet ist, und antwortet mit einem Cookie, das eine Sitzungs-ID enthält, die den Anmeldestatus des Nutzers im Browser speichert.
3. Zu einem späteren Zeitpunkt wechselt der Nutzer zu einer anderen Seite auf derselben Website. Der Browser sendet das Cookie mit der Sitzungs-ID zusammen mit der entsprechenden Anfrage, um anzuzeigen, dass er weiterhin denkt, dass der Nutzer angemeldet ist.
4. Der Server überprüft die Sitzungs-ID und, wenn sie noch gültig ist, sendet er dem Nutzer eine personalisierte Version der neuen Seite. Wenn sie nicht mehr gültig ist, wird die Sitzungs-ID gelöscht und dem Nutzer wird eine generische Version der Seite angezeigt (oder möglicherweise eine Nachricht angezeigt, dass der Zugriff verweigert wurde und der Nutzer sich erneut anmelden muss).

![visuelle Darstellung der obigen Beschreibung des Anmeldesystems](cookie-basic-example.png)

Cookies werden hauptsächlich für drei Zwecke verwendet:

- **Sitzungsverwaltung**: Anmeldestatus des Nutzers, Warenkorbinhalte, Spielstände oder andere sitzungsbezogene Informationen, die der Server sich merken muss.
- **Personalisierung**: Benutzereinstellungen wie Anzeigesprache und Design der Benutzeroberfläche.
- **Verfolgung**: Aufzeichnen und Analysieren des Nutzerverhaltens.

### Datenspeicherung

In den frühen Tagen des Webs, als es keine andere Option gab, wurden Cookies für allgemeine Client-seitige Datenspeicherungszwecke verwendet. Moderne Speicher-APIs werden nun empfohlen, beispielsweise die [Web Storage API](/de/docs/Web/API/Web_Storage_API) (`localStorage` und `sessionStorage`) und [IndexedDB](/de/docs/Web/API/IndexedDB_API).

Sie sind mit dem Gedanken an Speicherung entwickelt worden, senden niemals Daten an den Server und haben nicht die anderen Nachteile der Verwendung von Cookies für die Speicherung:

- Browser sind im Allgemeinen auf eine maximale Anzahl von Cookies pro Domain begrenzt (variiert je nach Browser, in der Regel in den Hunderten), und eine maximale Größe pro Cookie (normalerweise 4KB). Speicher-APIs können größere Datenmengen speichern.
- Cookies werden mit jeder Anfrage gesendet, was die Performance verschlechtern kann (zum Beispiel bei langsamen mobilen Datenverbindungen), insbesondere wenn viele Cookies gesetzt sind.

> [!NOTE]
> Um gespeicherte Cookies (und andere von einer Webseite verwendete Speicher) zu sehen, können Sie den [Speicherinspektor](https://firefox-source-docs.mozilla.org/devtools-user/storage_inspector/index.html) in den Firefox Developer Tools oder das [Application-Panel](https://developer.chrome.com/docs/devtools/progressive-web-apps) in den Chrome Developer Tools verwenden.

## Erstellen, Entfernen und Aktualisieren von Cookies

Nach dem Empfang einer HTTP-Anfrage kann ein Server einen oder mehrere {{HTTPHeader("Set-Cookie")}}-Header mit der Antwort senden, von denen jeder ein separates Cookie setzt. Ein Cookie wird durch die Angabe eines Name-Wert-Paares wie folgt festgelegt:

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

Wenn eine neue Anfrage gestellt wird, sendet der Browser normalerweise zuvor gespeicherte Cookies für die aktuelle Domain im {{HTTPHeader("Cookie")}} HTTP-Header zurück an den Server:

```http
GET /sample_page.html HTTP/2.0
Host: www.example.org
Cookie: yummy_cookie=chocolate; tasty_cookie=strawberry
```

### Entfernen: Definieren der Lebensdauer eines Cookies

Sie können ein Ablaufdatum oder einen Zeitraum angeben, nach dem das Cookie gelöscht und nicht mehr gesendet werden sollte. Abhängig von den beim Erstellen der Cookies im {{HTTPHeader("Set-Cookie")}}-Header gesetzten Attributen können sie entweder _permanente_ oder _Sitzungs_-Cookies sein:

- Permanente Cookies werden gelöscht nach dem im `Expires`-Attribut angegebenen Datum:

  ```http
  Set-Cookie: id=a3fWa; Expires=Thu, 31 Oct 2021 07:28:00 GMT;
  ```

  oder nach dem im `Max-Age`-Attribut angegebenen Zeitraum:

  ```http
  Set-Cookie: id=a3fWa; Max-Age=2592000
  ```

  > **Hinweis:** `Expires` ist länger verfügbar als `Max-Age`, jedoch ist `Max-Age` weniger fehleranfällig und hat Vorrang, wenn beide gesetzt sind. Der Grund dafür ist, dass, wenn Sie ein `Expires`-Datum und eine Uhrzeit festlegen, diese relativ zum Client sind, auf dem das Cookie gesetzt wird. Wenn der Server auf eine andere Zeit eingestellt ist, könnte dies zu Fehlern führen.

- _Sitzungs_-Cookies — Cookies ohne `Max-Age` oder `Expires`-Attribut – werden gelöscht, wenn die aktuelle Sitzung endet. Der Browser definiert, wann die "aktuelle Sitzung" endet, und einige Browser verwenden beim Neustart eine _Sitzungswiederherstellung_. Dies kann dazu führen, dass Sitzungscookies auf unbestimmte Zeit bestehen bleiben.

  > [!NOTE]
  > Wenn Ihre Seite Nutzer authentifiziert, sollten Sie Sitzungscookies regenerieren und erneut senden, auch solche, die bereits existieren, wann immer ein Nutzer authentifiziert wird. Dieser Ansatz hilft, [Session-Fixierung](https://owasp.org/www-community/attacks/Session_fixation) Angriffe zu verhindern, bei denen eine dritte Partei die Sitzung eines Nutzers wiederverwenden kann.

Es gibt einige Techniken, die darauf abzielen, Cookies nach ihrer Löschung wiederherzustellen. Diese sind als "Zombie-Cookies" bekannt. Diese Techniken verstoßen gegen die Prinzipien des Nutzer-[Datenschutzes](#datenschutz_und_verfolgung) und der Kontrolle, könnten gegen [Datenschutzgesetze](#cookie-bezogene_vorschriften) verstoßen und könnten eine Website, die sie verwendet, rechtlichen Risiken aussetzen.

### Aktualisieren von Cookie-Werten

Um ein Cookie über HTTP zu aktualisieren, kann der Server einen {{HTTPHeader("Set-Cookie")}}-Header mit dem Namen des vorhandenen Cookies und einem neuen Wert senden. Zum Beispiel:

```http
Set-Cookie: id=new-value
```

Es gibt mehrere Gründe, warum Sie dies möglicherweise tun möchten, zum Beispiel wenn ein Nutzer seine Präferenzen aktualisiert hat und die Anwendung die Änderungen in Client-seitigen Daten widerspiegeln möchte (Sie könnten dies auch mit einem Client-seitigen Speichersystem wie [Web Storage](/de/docs/Web/API/Web_Storage_API) tun).

#### Aktualisieren von Cookies über JavaScript

Im Browser können Sie neue Cookies über JavaScript mithilfe der [`Document.cookie`](/de/docs/Web/API/Document/cookie)-Eigenschaft oder der asynchronen [Cookie Store API](/de/docs/Web/API/Cookie_Store_API) erstellen. Beachten Sie, dass alle untenstehenden Beispiele `Document.cookie` verwenden, da es die am weitesten unterstützte/etablierte Option ist.

```js
document.cookie = "yummy_cookie=chocolate";
document.cookie = "tasty_cookie=strawberry";
```

Sie können auch auf bestehende Cookies zugreifen und neue Werte für sie setzen, vorausgesetzt, das [`HttpOnly`](/de/docs/Web/HTTP/Reference/Headers/Set-Cookie#httponly)-Attribut ist nicht auf ihnen gesetzt (d.h. im `Set-Cookie`-Header, der sie erstellt hat):

```js
console.log(document.cookie);
// logs "yummy_cookie=chocolate; tasty_cookie=strawberry"

document.cookie = "yummy_cookie=blueberry";

console.log(document.cookie);
// logs "tasty_cookie=strawberry; yummy_cookie=blueberry"
```

Beachten Sie, dass Sie aus Sicherheitsgründen keine Cookie-Werte ändern können, indem Sie einen aktualisierten `Cookie`-Header direkt senden, wenn Sie eine Anfrage initiieren, z.B. über [`fetch()`](/de/docs/Web/API/Window/fetch) oder [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest). Beachten Sie, dass es auch gute Gründe gibt, warum JavaScript keine Cookies ändern sollte — d.h. setzen Sie `HttpOnly` bei der Erstellung. Weitere Details finden Sie im [Sicherheits](#sicherheit)-Abschnitt.

## Sicherheit

Wenn Sie Informationen in Cookies speichern, sind standardmäßig alle Cookie-Werte für den Endnutzer sichtbar und können von ihm geändert werden. Sie möchten wirklich nicht, dass Ihre Cookies missbraucht werden — z.B. von böswilligen Akteuren darauf zugegriffen/geändert werden oder an Domains gesendet werden, wo sie nicht gesendet werden sollten. Die potenziellen Folgen können von ärgerlich — Apps funktionieren nicht oder zeigen seltsames Verhalten — bis katastrophal reichen. Ein Verbrecher könnte beispielsweise eine Sitzungs-ID stehlen und damit ein Cookie setzen, das es so aussehen lässt, als wären sie als jemand anderes angemeldet, und damit die Kontrolle über deren Bank- oder E-Commerce-Konto erlangen.

Sie können Ihre Cookies auf verschiedene Weise sichern, die in diesem Abschnitt überprüft werden.

### Blockieren des Zugriffs auf Ihre Cookies

Sie können sicherstellen, dass Cookies sicher gesendet werden und nicht von ungewollten Parteien oder Skripten zugegriffen werden, auf eine von zwei Arten: mit dem `Secure`-Attribut und dem `HttpOnly`-Attribut:

```http
Set-Cookie: id=a3fWa; Expires=Thu, 21 Oct 2021 07:28:00 GMT; Secure; HttpOnly
```

- Ein Cookie mit dem `Secure`-Attribut wird nur mit einer verschlüsselten Anfrage über das HTTPS-Protokoll an den Server gesendet. Es wird nie mit ungesichertem HTTP (außer auf localhost) gesendet, was bedeutet, dass {{Glossary("MitM", "Man-in-the-Middle")}}-Angreifer nicht einfach darauf zugreifen können. Unsichere Seiten (mit `http:` in der URL) können keine Cookies mit dem `Secure`-Attribut setzen. Gehen Sie jedoch nicht davon aus, dass `Secure` den gesamten Zugriff auf sensible Informationen in Cookies verhindert. Zum Beispiel kann jemand, der Zugang zur Festplatte des Clients hat (oder JavaScript, wenn `HttpOnly` nicht gesetzt ist), die Informationen lesen und ändern.

- Ein Cookie mit dem `HttpOnly`-Attribut kann nicht von JavaScript zugegriffen werden, z.B. mit [`Document.cookie`](/de/docs/Web/API/Document/cookie); es kann nur erreicht werden, wenn es den Server erreicht. Cookies, die Nutzersitzungen aufrechterhalten, sollten z.B. das `HttpOnly`-Attribut gesetzt haben — es wäre wirklich unsicher, sie für JavaScript verfügbar zu machen. Diese Vorsicht hilft, Cross-Site-Scripting ([XSS](/de/docs/Web/Security/Attacks/XSS))-Angriffe abzumildern.

> [!NOTE]
> Abhängig von der Anwendung möchten Sie möglicherweise einen undurchsichtigen Bezeichner verwenden, auf den der Server zugreift, anstatt sensible Informationen direkt in Cookies zu speichern, oder alternative Authentifizierungs-/Vertraulichkeitsmechanismen wie [JSON Web Tokens](https://jwt.io/) untersuchen.

### Definieren, wohin Cookies gesendet werden

Die Attribute `Domain` und `Path` definieren den _Anwendungsbereich_ eines Cookies: an welche URLs die Cookies gesendet werden.

- Das `Domain`-Attribut gibt an, welcher Server ein Cookie empfangen kann. Wenn angegeben, sind Cookies auf dem angegebenen Server und seinen Subdomains verfügbar. Wenn Sie zum Beispiel `Domain=mozilla.org` von `mozilla.org` setzen, sind Cookies auf dieser Domain und Subdomains wie `developer.mozilla.org` verfügbar.

  ```http
  Set-Cookie: id=a3fWa; Expires=Thu, 21 Oct 2021 07:28:00 GMT; Secure; HttpOnly; Domain=mozilla.org
  ```

  Wenn der `Set-Cookie`-Header kein `Domain`-Attribut spezifiziert, sind die Cookies auf dem Server verfügbar, der es gesetzt hat, _aber nicht auf seinen Subdomains_. Daher ist die Angabe von `Domain` weniger restriktiv, als sie wegzulassen.
  Beachten Sie, dass ein Server das `Domain`-Attribut nur für seine eigene Domain oder eine übergeordnete Domain setzen kann, nicht für eine Subdomain oder eine andere Domain.
  Ein Server mit der Domain `foo.example.com` könnte das Attribut auf `example.com` oder `foo.example.com` setzen, aber nicht auf `bar.foo.example.com` oder `elsewhere.com` (die Cookies würden allerdings weiterhin _an Subdomains gesendet_, wie `bar.foo.example.com`).
  Weitere Informationen finden Sie unter [Ungültige Domains](/de/docs/Web/HTTP/Reference/Headers/Set-Cookie#invalid_domains).

- Das `Path`-Attribut zeigt einen URL-Pfad an, der in der angeforderten URL existieren muss, um den `Cookie`-Header zu senden. Zum Beispiel:

  ```http
  Set-Cookie: id=a3fWa; Expires=Thu, 21 Oct 2021 07:28:00 GMT; Secure; HttpOnly; Path=/docs
  ```

  Das `%x2F` ("/")-Zeichen wird als Verzeichnistrennzeichen betrachtet, und Unterverzeichnisse passen ebenfalls. Wenn Sie zum Beispiel `Path=/docs` setzen, passen diese Anfragepfade:

  - `/docs`
  - `/docs/`
  - `/docs/Web/`
  - `/docs/Web/HTTP`

  Aber diese Anfragepfade nicht:

  - `/`
  - `/docsets`
  - `/fr/docs`

  > [!NOTE]
  > Das `path`-Attribut lässt Sie festlegen, welche Cookies der Browser basierend auf den verschiedenen Teilen einer Seite sendet.
  > Es ist nicht als Sicherheitsmaßnahme gedacht und [schützt nicht](/de/docs/Web/API/Document/cookie#security) vor unerlaubtem Lesen des Cookies von einem anderen Pfad.

### Kontrolle von Drittanbieter-Cookies mit `SameSite`

Das [`SameSite`](/de/docs/Web/HTTP/Reference/Headers/Set-Cookie#samesitesamesite-value)-Attribut erlaubt es Servern zu spezifizieren, ob/wann Cookies mit Cross-Site-Anfragen gesendet werden — d.h. [Drittanbieter-Cookies](/de/docs/Web/Privacy/Guides/Third-party_cookies). Cross-Site-Anfragen sind Anfragen, bei denen die {{Glossary("Site", "Seite")}} (die registrierbare Domain) und/oder das Schema (http oder https) nicht mit der Seite übereinstimmen, die der Nutzer gerade besucht. Dazu gehören Anfragen, die gesendet werden, wenn auf Links auf anderen Seiten geklickt wird, um zu Ihrer Seite zu navigieren, und jede Anfrage, die von eingebetteten Drittanbieter-Inhalten gesendet wird.

`SameSite` hilft, Informationslecks zu verhindern, bewahrt die [Privatsphäre](#datenschutz_und_verfolgung) der Nutzer und bietet einen gewissen Schutz gegen {{Glossary("CSRF", "Cross-Site Request Forgery")}}-Angriffe. Es nimmt drei mögliche Werte an: `Strict`, `Lax` und `None`:

- `Strict` führt dazu, dass der Browser das Cookie nur als Antwort auf Anfragen sendet, die vom Ursprungsort des Cookies stammen. Dies sollte verwendet werden, wenn Sie Cookies haben, die sich auf Funktionen beziehen, die immer hinter einer anfänglichen Navigation stehen, wie z.B. Authentifizierung oder das Speichern von Warenkorbinformationen.

  ```http
  Set-Cookie: cart=110045_77895_53420; SameSite=Strict
  ```

  > [!NOTE]
  > Cookies, die für sensible Informationen verwendet werden, sollten auch eine kurze [Lebensdauer](#removal_defining_the_lifetime_of_a_cookie) haben.

- `Lax` ist ähnlich, außer dass der Browser das Cookie auch sendet, wenn der Nutzer _zur Ursprungsseite des Cookies navigiert_ (selbst wenn der Nutzer von einer anderen Seite kommt). Dies ist nützlich für Cookies, die die Darstellung einer Seite beeinflussen — zum Beispiel könnten Sie Produktinformationen von Partnern zusammen mit einem Affiliate-Link auf Ihrer Website haben. Wenn dieser Link gefolgt wird, um zur Partner-Website zu gelangen, möchten sie möglicherweise ein Cookie setzen, das besagt, dass der Affiliate-Link gefolgt wurde, was ein Belohnungsbanner anzeigt und einen Rabatt bietet, wenn das Produkt gekauft wird.

  ```http
  Set-Cookie: affiliate=e4rt45dw; SameSite=Lax
  ```

- `None` gibt an, dass Cookies bei sowohl identischen als auch Cross-Site-Anfragen gesendet werden. Dies ist nützlich, wenn Sie Cookies zusammen mit Anfragen senden möchten, die von in andere Seiten eingebetteten Drittanbieter-Inhalten gemacht werden, z.B. Ad-Tech oder Analyseanbieter. Beachten Sie, dass, wenn `SameSite=None` gesetzt ist, das `Secure`-Attribut ebenfalls gesetzt werden muss — `SameSite=None` erfordert einen _sicheren Kontext_.

  ```http
  Set-Cookie: widget_session=7yjgj57e4n3d; SameSite=None; Secure; HttpOnly
  ```

Wenn kein `SameSite`-Attribut gesetzt ist, wird das Cookie standardmäßig als `Lax` behandelt.

### Cookie-Präfixe

Aufgrund des Designs des Cookie-Mechanismus kann ein Server nicht bestätigen, dass ein Cookie von einem sicheren Ursprung gesetzt wurde oder sogar _wo_ ein Cookie ursprünglich gesetzt wurde.

Eine Anwendung auf einer Subdomain kann ein Cookie mit dem `Domain`-Attribut setzen, das den Zugriff auf dieses Cookie auf allen anderen Subdomains erlaubt. Dieser Mechanismus kann in einem [Session-Fixierung](https://owasp.org/www-community/attacks/Session_fixation)-Angriff missbraucht werden.

Als [Abschirmmaßnahme](<https://en.wikipedia.org/wiki/Defense_in_depth_(computing)>) können Sie jedoch _Cookie-Präfixe_ verwenden, um bestimmte Fakten über das Cookie zu bestätigen. Zwei Präfixe sind verfügbar:

- `__Host-`: Wenn ein Cookie-Name dieses Präfix hat, wird es in einem {{HTTPHeader("Set-Cookie")}}-Header nur akzeptiert, wenn es auch mit dem `Secure`-Attribut markiert ist, von einem sicheren Ursprung gesendet wird, _kein_ `Domain`-Attribut enthält und das `Path`-Attribut auf `/` gesetzt ist. Mit anderen Worten, das Cookie ist _domain-locked_.
- `__Secure-`: Wenn ein Cookie-Name dieses Präfix hat, wird es in einem {{HTTPHeader("Set-Cookie")}}-Header nur akzeptiert, wenn es mit dem `Secure`-Attribut markiert ist und von einem sicheren Ursprung gesendet wurde. Dies ist schwächer als das `__Host-`-Präfix.

Der Browser wird Cookies mit diesen Präfixen ablehnen, die nicht ihren Beschränkungen entsprechen. Dies stellt sicher, dass von Subdomains erstellte Cookies mit Präfix entweder auf eine Subdomain beschränkt sind oder komplett ignoriert werden. Da der Anwendungsserver nur auf einen bestimmten Cookie-Namen prüft, wenn er bestimmt, ob der Nutzer authentifiziert ist oder ein CSRF-Token korrekt ist, dient dies effektiv als Verteidigungsmaßnahme gegen [Session-Fixierung](https://owasp.org/www-community/attacks/Session_fixation).

> [!NOTE]
> Auf dem Server _muss_ die Webanwendung auf den vollständigen Cookie-Namen einschließlich Präfix überprüfen. Benutzeragenten _entfernen nicht_ das Präfix vom Cookie, bevor sie es im {{HTTPHeader("Cookie")}}-Header einer Anfrage senden.

Weitere Informationen zu Cookie-Präfixen und dem aktuellen Stand der Browserunterstützung finden Sie im [Präfixe-Abschnitt des Set-Cookie-Referenzartikels](/de/docs/Web/HTTP/Reference/Headers/Set-Cookie#cookie_prefixes).

## Datenschutz und Verfolgung

Früher haben wir darüber gesprochen, wie das `SameSite`-Attribut verwendet werden kann, um zu steuern, wann Drittanbieter-Cookies gesendet werden, und dass dies helfen kann, die Privatsphäre der Nutzer zu bewahren. Datenschutz ist eine sehr wichtige Überlegung beim Erstellen von Websites, die, wenn sie richtig gemacht werden, Vertrauen bei Ihren Nutzern aufbauen können. Wenn es schlecht gemacht wird, kann es dieses Vertrauen vollständig untergraben und alle möglichen anderen Probleme verursachen.

Drittanbieter-Cookies können von Drittanbieter-Inhalten gesetzt werden, die über {{htmlelement("iframe")}}s in Seiten eingebettet sind. Sie haben viele legitime Verwendungszwecke, einschließlich der gemeinsamen Nutzung von Nutzerprofilinformationen, Zählen von Anzeigenaufrufen oder Sammeln von Analysen über unterschiedliche verwandte Domains hinweg.

Drittanbieter-Cookies können jedoch auch verwendet werden, um unangenehme, aufdringliche Nutzererfahrungen zu schaffen. Ein Drittanbieter-Server kann ein Profil des Surfverhaltens und der Gewohnheiten eines Nutzers anhand der Cookies erstellen, die ihm von demselben Browser beim Zugriff auf mehrere Seiten gesendet werden. Das klassische Beispiel ist, wenn Sie auf einer Seite nach Produktinformationen suchen und dann von Werbung für ähnliche Produkte verfolgt werden, wohin Sie auch gehen.

Browseranbieter wissen, dass Nutzer dieses Verhalten nicht mögen, und haben daher alle begonnen, Drittanbieter-Cookies standardmäßig zu blockieren oder haben zumindest Pläne gemacht, in diese Richtung zu gehen. Drittanbieter-Cookies (oder einfach Tracking-Cookies) können auch durch andere Browsereinstellungen oder Erweiterungen blockiert werden.

> [!NOTE]
> Das Blockieren von Cookies kann dazu führen, dass einige Drittanbieter-Komponenten (wie Social-Media-Widgets) nicht wie beabsichtigt funktionieren. Da Browser weitere Einschränkungen für Drittanbieter-Cookies auferlegen, sollten Entwickler nach Möglichkeiten suchen, ihre Abhängigkeit von ihnen zu reduzieren.

Siehe unseren Artikel über [Drittanbieter-Cookies](/de/docs/Web/Privacy/Guides/Third-party_cookies) für ausführliche Informationen zu Drittanbieter-Cookies, den damit verbundenen Problemen und welche Alternativen verfügbar sind. Sehen Sie sich unsere [Datenschutz](/de/docs/Web/Privacy)-Startseite für mehr Informationen zum Datenschutz im Allgemeinen an.

## Cookie-bezogene Vorschriften

Gesetzgebung oder Vorschriften, die die Verwendung von Cookies abdecken, umfassen:

- Die [Allgemeine Datenschutzverordnung](https://gdpr.eu/) (GDPR) in der Europäischen Union
- Die ePrivacy-Richtlinie in der EU
- Das California Consumer Privacy Act

Diese Vorschriften haben weltweite Reichweite. Sie gelten für jede Seite im _World Wide_ Web, auf die Nutzer aus diesen Gerichtsbarkeiten zugreifen (die EU und Kalifornien, mit dem Vorbehalt, dass das kalifornische Gesetz nur für Unternehmen mit einem Bruttoeinkommen von über 25 Millionen USD gilt, unter anderem).

Diese Vorschriften beinhalten Anforderungen wie:

- Nutzer darüber zu informieren, dass Ihre Seite Cookies verwendet.
- Nutzern die Möglichkeit zu geben, das Empfangen einiger oder aller Cookies zu verweigern.
- Nutzern die Möglichkeit zu geben, den Großteil Ihres Dienstes ohne den Empfang von Cookies zu nutzen.

Es kann andere Vorschriften geben, die die Verwendung von Cookies in Ihrer Region regeln. Die Verantwortung liegt bei Ihnen, diese Vorschriften zu kennen und zu befolgen. Es gibt Unternehmen, die "Cookie-Banner"-Code anbieten, der Ihnen hilft, diesen Vorschriften zu entsprechen.

> [!NOTE]
> Unternehmen sollten die Arten von Cookies, die sie auf ihren Seiten verwenden, zu Transparenzzwecken offenlegen und um Vorschriften einzuhalten. Siehe zum Beispiel [Googles Hinweis zu den von ihm verwendeten Cookie-Arten](https://policies.google.com/technologies/cookies#types-of-cookies) und Mozillas [Webseiten-, Kommunikations- und Cookie-Datenschutzerklärung](https://www.mozilla.org/en-US/privacy/websites/#cookies).

## Siehe auch

- Verwandte HTTP-Header: {{HTTPHeader("Set-Cookie")}}, {{HTTPHeader("Cookie")}}
- Verwandte JavaScript-APIs: [`Document.cookie`](/de/docs/Web/API/Document/cookie), [`Navigator.cookieEnabled`](/de/docs/Web/API/Navigator/cookieEnabled), [Cookie Store API](/de/docs/Web/API/Cookie_Store_API)
- [Drittanbieter-Cookies](/de/docs/Web/Privacy/Guides/Third-party_cookies)
- [Cookie-Spezifikation: RFC 6265](https://datatracker.ietf.org/doc/html/rfc6265)
- [Cookies, die DSGVO und die ePrivacy-Richtlinie](https://gdpr.eu/cookies/)
