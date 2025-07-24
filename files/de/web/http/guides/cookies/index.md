---
title: Verwendung von HTTP-Cookies
slug: Web/HTTP/Guides/Cookies
l10n:
  sourceCommit: 99d723c4f77d7f537292a07dd7b5e5c13cb610da
---

Ein **Cookie** (auch bekannt als Web-Cookie oder Browser-Cookie) ist ein kleines Datenfragment, das ein Server an den Webbrowser eines Benutzers sendet. Der Browser kann Cookies speichern, neue Cookies erstellen, vorhandene ändern und sie bei späteren Anfragen an denselben Server zurücksenden. Cookies ermöglichen es Webanwendungen, begrenzte Datenmengen zu speichern und Statusinformationen zu merken; standardmäßig ist das HTTP-Protokoll [zustandslos](/de/docs/Web/HTTP/Guides/Overview#http_is_stateless_but_not_sessionless).

In diesem Artikel werden wir die Hauptverwendung von Cookies untersuchen, bewährte Praktiken für ihre Verwendung erklären und ihre Datenschutz- und Sicherheitsimplikationen betrachten.

## Wofür Cookies verwendet werden

Normalerweise verwendet der Server den Inhalt von HTTP-Cookies, um festzustellen, ob verschiedene Anfragen von demselben Browser/Benutzer stammen, und gibt dann eine personalisierte oder generische Antwort aus. Das Folgende beschreibt ein einfaches Benutzersign-in-System:

1. Der Benutzer sendet Anmeldeinformationen an den Server, zum Beispiel über ein Formular.
2. Wenn die Anmeldeinformationen korrekt sind, aktualisiert der Server die Benutzeroberfläche, um anzuzeigen, dass der Benutzer angemeldet ist, und antwortet mit einem Cookie, das eine Sitzungs-ID enthält, die den Anmeldestatus im Browser speichert.
3. Später wechselt der Benutzer zu einer anderen Seite derselben Website. Der Browser sendet das Cookie mit der Sitzungs-ID zusammen mit der entsprechenden Anfrage, um anzuzeigen, dass er immer noch glaubt, dass der Benutzer angemeldet ist.
4. Der Server prüft die Sitzungs-ID und sendet dem Benutzer bei Gültigkeit eine personalisierte Version der neuen Seite. Ist sie nicht gültig, wird die Sitzungs-ID gelöscht und dem Benutzer eine generische Version der Seite angezeigt (oder möglicherweise eine "Zugriff verweigert"-Nachricht und eine erneute Aufforderung zur Anmeldung).

![visuelle Darstellung der obigen Beschreibung des Sign-in-Systems](cookie-basic-example.png)

Cookies werden hauptsächlich für drei Zwecke verwendet:

- **Sitzungsverwaltung**: Anmeldestatus des Benutzers, Warenkorbinhalte, Spielstände oder andere sitzungsbezogene Details, die der Server sich merken muss.
- **Personalisierung**: Benutzerpräferenzen wie Anzeigesprache und UI-Design.
- **Verfolgung**: Aufzeichnung und Analyse des Benutzerverhaltens.

### Datenspeicherung

In den Anfangstagen des Webs, als es keine anderen Optionen gab, wurden Cookies für allgemeine Zwecke zur Datenspeicherung auf der Clientseite verwendet. Moderne Speicher-APIs werden jetzt empfohlen, zum Beispiel die [Web Storage API](/de/docs/Web/API/Web_Storage_API) (`localStorage` und `sessionStorage`) und [IndexedDB](/de/docs/Web/API/IndexedDB_API).

Sie sind für die Speicherung konzipiert, senden nie Daten an den Server und haben nicht die Nachteile, die mit der Verwendung von Cookies für die Speicherung einhergehen:

- Browser sind im Allgemeinen auf eine maximale Anzahl von Cookies pro Domain beschränkt (variiert je nach Browser, in der Regel in den Hunderten) und eine maximale Größe pro Cookie (normalerweise 4KB). Speicher-APIs können größere Datenmengen speichern.
- Cookies werden mit jeder Anfrage gesendet, was die Leistung verschlechtern kann (zum Beispiel bei langsamen mobilen Datenverbindungen), besonders wenn viele Cookies gesetzt sind.

> [!NOTE]
> Um gespeicherte Cookies (und andere Speicher, die eine Webseite verwendet) zu sehen, können Sie den [Speicherinspektor](https://firefox-source-docs.mozilla.org/devtools-user/storage_inspector/index.html) in den Firefox-Entwicklertools oder das [Anwendungsbedienfeld](https://developer.chrome.com/docs/devtools/progressive-web-apps) in den Chrome-Entwicklertools verwenden.

## Erstellen, Entfernen und Aktualisieren von Cookies

Nach Erhalt einer HTTP-Anfrage kann ein Server eine oder mehrere {{HTTPHeader("Set-Cookie")}}-Header mit der Antwort senden, von denen jeder ein separates Cookie setzt. Ein Cookie wird durch Angabe eines Name-Wert-Paares wie folgt gesetzt:

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
> Erfahren Sie, wie der `Set-Cookie`-Header in verschiedenen serverseitigen Sprachen/Frameworks verwendet wird: [PHP](https://www.php.net/manual/en/function.setcookie.php), [Node.js](https://nodejs.org/docs/latest-v19.x/api/http.html#responsesetheadername-value), [Python](https://docs.python.org/3/library/http.cookies.html), [Ruby on Rails](https://api.rubyonrails.org/classes/ActionDispatch/Cookies.html).

Wenn eine neue Anfrage gestellt wird, sendet der Browser normalerweise zuvor gespeicherte Cookies für die aktuelle Domain mit einem {{HTTPHeader("Cookie")}}-HTTP-Header zurück an den Server:

```http
GET /sample_page.html HTTP/2.0
Host: www.example.org
Cookie: yummy_cookie=chocolate; tasty_cookie=strawberry
```

### Entfernen: Zeitraum eines Cookies definieren

Sie können ein Ablaufdatum oder einen Zeitraum angeben, nach dem das Cookie gelöscht werden soll und nicht mehr gesendet wird. Je nach den im {{HTTPHeader("Set-Cookie")}}-Header gesetzten Attributen können die Cookies _permanent_ oder _sitzungsabhängig_ sein:

- Permanente Cookies werden nach dem im `Expires`-Attribut angegebenen Datum gelöscht:

  ```http
  Set-Cookie: id=a3fWa; Expires=Thu, 31 Oct 2021 07:28:00 GMT;
  ```

  oder nach dem im `Max-Age`-Attribut angegebenen Zeitraum:

  ```http
  Set-Cookie: id=a3fWa; Max-Age=2592000
  ```

  > [!NOTE]
  > `Expires` ist schon länger verfügbar als `Max-Age`, jedoch ist `Max-Age` weniger fehleranfällig und hat Vorrang, wenn beide gesetzt sind. Der Grund dafür ist, dass das Setzen eines `Expires`-Datums und einer Uhrzeit relativ zu dem Client ist, auf dem das Cookie gesetzt wird. Wenn der Server auf eine andere Zeit eingestellt ist, kann dies zu Fehlern führen.

- _Sitzungs-Cookies_ — Cookies ohne `Max-Age` oder `Expires`-Attribut – werden gelöscht, wenn die aktuelle Sitzung endet. Der Browser definiert, wann die "aktuelle Sitzung" endet, und einige Browser verwenden _Sitzungswiederherstellung_ beim Neustart. Dies kann dazu führen, dass Sitzungscookies unbegrenzt bestehen bleiben.

  > [!NOTE]
  > Wenn Ihre Seite Benutzer authentifiziert, sollte sie Sitzungscookies, auch bereits bestehende, bei jeder Authentifizierung eines Benutzers neu generieren und zurücksenden. Dieser Ansatz hilft, [Sitzungsfixierung](https://owasp.org/www-community/attacks/Session_fixation)-Angriffe zu verhindern, bei denen ein Dritter die Sitzung eines Benutzers wiederverwenden kann.

Es gibt einige Techniken, die darauf ausgelegt sind, Cookies nach ihrer Löschung neu zu erstellen. Diese werden als "Zombie-Cookies" bezeichnet. Diese Techniken verstoßen gegen die Prinzipien des Nutzer-[Datenschutzes](#datenschutz_und_verfolgung) und der Kontrolle, könnten gegen [Datenschutzbestimmungen](#cookie-bezogene_vorschriften) verstoßen und eine Website, die sie verwendet, rechtlichen Risiken aussetzen.

### Aktualisieren von Cookie-Werten

Um ein Cookie über HTTP zu aktualisieren, kann der Server einen {{HTTPHeader("Set-Cookie")}}-Header mit dem bestehenden Cookie-Namen und einem neuen Wert senden. Zum Beispiel:

```http
Set-Cookie: id=new-value
```

Es gibt mehrere Gründe, warum Sie dies tun könnten, zum Beispiel, wenn ein Benutzer seine Präferenzen aktualisiert hat und die Anwendung die Änderungen in clientseitigen Daten widerspiegeln möchte (Sie könnten dies auch mit einem clientseitigen Speichermodell wie [Web Storage](/de/docs/Web/API/Web_Storage_API) tun).

#### Aktualisieren von Cookies über JavaScript

Im Browser können Sie neue Cookies über JavaScript mit der [`Document.cookie`](/de/docs/Web/API/Document/cookie)-Eigenschaft oder der asynchronen [Cookie Store API](/de/docs/Web/API/Cookie_Store_API) erstellen. Beachten Sie, dass alle unten stehenden Beispiele `Document.cookie` verwenden, da es die am weitesten unterstützte/etablierte Option ist.

```js
document.cookie = "yummy_cookie=chocolate";
document.cookie = "tasty_cookie=strawberry";
```

Sie können auch auf bestehende Cookies zugreifen und neue Werte für sie festlegen, sofern das [`HttpOnly`](/de/docs/Web/HTTP/Reference/Headers/Set-Cookie#httponly)-Attribut nicht auf ihnen gesetzt ist (d.h. im `Set-Cookie`-Header, der es zuvor erstellt hat):

```js
console.log(document.cookie);
// logs "yummy_cookie=chocolate; tasty_cookie=strawberry"

document.cookie = "yummy_cookie=blueberry";

console.log(document.cookie);
// logs "tasty_cookie=strawberry; yummy_cookie=blueberry"
```

Beachten Sie, dass Sie zu Sicherheitszwecken Cookie-Werte nicht durch Senden eines aktualisierten `Cookie`-Headers direkt ändern können, wenn Sie eine Anfrage senden, d.h. über [`fetch()`](/de/docs/Web/API/Window/fetch) oder [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest). Beachten Sie, dass es auch gute Gründe gibt, warum Sie JavaScript nicht erlauben sollten, Cookies zu ändern – d.h. `HttpOnly` während der Erstellung setzen. Weitere Details finden Sie im Abschnitt [Sicherheit](#sicherheit).

## Sicherheit

Wenn Sie Informationen in Cookies speichern, sind standardmäßig alle Cookie-Werte für den Endbenutzer sichtbar und können von ihm geändert werden. Sie möchten wirklich nicht, dass Ihre Cookies missbraucht werden – zum Beispiel von böswilligen Akteuren aufgerufen/angepasst oder an Domänen gesendet werden, zu denen sie nicht gesendet werden sollten. Die möglichen Konsequenzen reichen von ärgerlich – Apps funktionieren nicht oder zeigen seltsames Verhalten – bis katastrophal. Ein Krimineller könnte zum Beispiel eine Sitzungs-ID stehlen und sie verwenden, um ein Cookie zu setzen, das den Anschein erweckt, als sei er als jemand anderes angemeldet, und so die Kontrolle über dessen Bank- oder E-Commerce-Konto zu übernehmen.

Sie können Ihre Cookies auf verschiedene Arten sichern, die in diesem Abschnitt überprüft werden.

### Sperren Sie den Zugriff auf Ihre Cookies

Sie können sicherstellen, dass Cookies sicher gesendet und nicht von unbeabsichtigten Parteien oder Skripten zugänglich sind, auf zwei Arten: mit dem `Secure`-Attribut und dem `HttpOnly`-Attribut:

```http
Set-Cookie: id=a3fWa; Expires=Thu, 21 Oct 2021 07:28:00 GMT; Secure; HttpOnly
```

- Ein Cookie mit dem `Secure`-Attribut wird nur mit einer verschlüsselten Anfrage über das HTTPS-Protokoll an den Server gesendet. Es wird nie mit ungesichertem HTTP gesendet (außer auf localhost), was bedeutet, dass {{Glossary("MitM", "Man-in-the-Middle")}}-Angreifer nicht einfach darauf zugreifen können. Unsichere Seiten (mit `http:` in der URL) können keine Cookies mit dem `Secure`-Attribut setzen. Gehen Sie jedoch nicht davon aus, dass `Secure` allen Zugriff auf sensible Informationen in Cookies verhindert. Zum Beispiel kann jemand mit Zugriff auf die Festplatte des Clients (oder JavaScript, falls das `HttpOnly`-Attribut nicht gesetzt ist) die Informationen lesen und ändern.

- Ein Cookie mit dem `HttpOnly`-Attribut kann nicht von JavaScript aus aufgerufen werden, zum Beispiel unter Nutzung von [`Document.cookie`](/de/docs/Web/API/Document/cookie); es kann nur aufgerufen werden, wenn es den Server erreicht. Cookies, die Benutzersitzungen persistent halten, sollten zum Beispiel das `HttpOnly`-Attribut gesetzt haben – es wäre wirklich unsicher, sie JavaScript zugänglich zu machen. Diese Vorsichtsmaßnahme hilft, Cross-Site-Scripting-([XSS](/de/docs/Web/Security/Attacks/XSS))-Angriffe zu mindern.

> [!NOTE]
> Abhängig von der Anwendung möchten Sie möglicherweise eine opake Kennung verwenden, die der Server nachschlägt, anstatt sensible Informationen direkt in Cookies zu speichern, oder alternative Authentifizierungs-/Vertraulichkeitsmechanismen wie [JSON Web Tokens](https://www.jwt.io/) untersuchen.

### Definieren, wohin Cookies gesendet werden

Die `Domain`- und `Path`-Attribute definieren den _Geltungsbereich_ eines Cookies: Welche URLs die Cookies gesendet werden.

- Das `Domain`-Attribut gibt an, welcher Server ein Cookie erhalten kann. Wenn es angegeben wird, sind Cookies auf dem angegebenen Server und seinen Subdomains verfügbar. Beispielsweise, wenn Sie `Domain=mozilla.org` von `mozilla.org` setzen, sind Cookies auf dieser Domain und Subdomains wie `developer.mozilla.org` verfügbar.

  ```http
  Set-Cookie: id=a3fWa; Expires=Thu, 21 Oct 2021 07:28:00 GMT; Secure; HttpOnly; Domain=mozilla.org
  ```

  Wenn der `Set-Cookie`-Header kein `Domain`-Attribut angibt, sind die Cookies auf dem Server verfügbar, der es gesetzt hat, _aber nicht auf seinen Subdomains_. Das Angeben von `Domain` ist daher weniger restriktiv als es wegzulassen.
  Beachten Sie, dass ein Server das `Domain`-Attribut nur auf seine eigene Domain oder eine übergeordnete Domain setzen kann, nicht auf eine Subdomain oder eine andere Domain.
  So könnte ein Server mit der Domain `foo.example.com` das Attribut auf `example.com` oder `foo.example.com` setzen, aber nicht auf `bar.foo.example.com` oder `elsewhere.com` (die Cookies würden jedoch trotzdem an Subdomains wie `bar.foo.example.com` gesendet).
  Siehe [Ungültige Domains](/de/docs/Web/HTTP/Reference/Headers/Set-Cookie#invalid_domains) für weitere Details.

- Das `Path`-Attribut gibt einen URL-Pfad an, der in der angeforderten URL vorhanden sein muss, um den `Cookie`-Header zu senden. Zum Beispiel:

  ```http
  Set-Cookie: id=a3fWa; Expires=Thu, 21 Oct 2021 07:28:00 GMT; Secure; HttpOnly; Path=/docs
  ```

  Das `%x2F` ("/")-Zeichen wird als Verzeichnistrennzeichen betrachtet, und Unterverzeichnisse stimmen ebenfalls überein. Zum Beispiel, wenn Sie `Path=/docs` setzen, stimmen diese Anforderungspfade überein:
  - `/docs`
  - `/docs/`
  - `/docs/Web/`
  - `/docs/Web/HTTP`

  Aber diese Anforderungspfade stimmen nicht überein:
  - `/`
  - `/docsets`
  - `/fr/docs`

  > [!NOTE]
  > Das `path`-Attribut lässt Sie steuern, welche Cookies der Browser basierend auf den verschiedenen Teilen einer Seite sendet.
  > Es ist nicht als Sicherheitsmaßnahme gedacht und [schützt nicht](/de/docs/Web/API/Document/cookie#security) gegen unbefugtes Lesen des Cookies von einem anderen Pfad.

### Steuerung von Drittanbieter-Cookies mit `SameSite`

Das [`SameSite`](/de/docs/Web/HTTP/Reference/Headers/Set-Cookie#samesitesamesite-value)-Attribut lässt Server angeben, ob/wann Cookies mit Cross-Site-Anfragen gesendet werden — d.h. [Drittanbieter-Cookies](/de/docs/Web/Privacy/Guides/Third-party_cookies). Cross-Site-Anfragen sind Anfragen, bei denen die {{Glossary("Site", "Site")}} (die registrierbare Domain) und/oder das Schema (http oder https) nicht mit der aktuell besuchten Site übereinstimmen. Dies schließt Anfragen ein, die gesendet werden, wenn auf andere Seiten zu Ihrer Seite geklickt wird, und jede Anfrage, die von eingebettetem Drittanbieterinhalt gesendet wird.

`SameSite` hilft, das Austreten von Informationen zu verhindern, den Benutzer-[Datenschutz](#datenschutz_und_verfolgung) zu wahren und bietet bis zu einem gewissen Grad Schutz gegen {{Glossary("CSRF", "cross-site request forgery")}}-Angriffe. Es hat drei mögliche Werte: `Strict`, `Lax` und `None`:

- `Strict` veranlasst den Browser, das Cookie nur als Antwort auf Anfragen zu senden, die von der Ursprungsseite des Cookies stammen. Dies sollte verwendet werden, wenn Sie Cookies für Funktionen haben, die immer hinter einer initialen Navigation stehen, wie Authentifizierung oder das Speichern von Warenkorbinformationen.

  ```http
  Set-Cookie: cart=110045_77895_53420; SameSite=Strict
  ```

  > [!NOTE]
  > Cookies, die für sensible Informationen verwendet werden, sollten auch eine kurze [Lebensdauer](#removal_defining_the_lifetime_of_a_cookie) haben.

- `Lax` ist ähnlich, außer dass der Browser das Cookie auch sendet, wenn der Benutzer _zur Ursprungsseite des Cookies navigiert_ (auch wenn der Benutzer von einer anderen Seite kommt). Dies ist nützlich für Cookies, die die Anzeige einer Seite beeinflussen – zum Beispiel könnten Sie Partnerproduktinformationen zusammen mit einem Affiliatelink auf Ihrer Website haben. Wenn dieser Link auf die Partner-Website gefolgt wird, möchten sie möglicherweise ein Cookie setzen, das besagt, dass der Affiliatelink gefolgt wurde, was ein Belohnungsbanner anzeigt und einen Rabatt bietet, wenn das Produkt gekauft wird.

  ```http
  Set-Cookie: affiliate=e4rt45dw; SameSite=Lax
  ```

- `None` gibt an, dass Cookies sowohl bei Ursprungs- als auch bei Cross-Site-Anfragen gesendet werden. Dies ist nützlich, wenn Sie Cookies mit Anfragen senden möchten, die von in andere Seiten eingebetteten Drittanbieterinhalten gesendet werden, z.B. Anbieter von Ad-Tech oder Analysediensten. Beachten Sie, dass, wenn `SameSite=None` gesetzt ist, auch das `Secure`-Attribut gesetzt werden muss — `SameSite=None` erfordert einen _sicheren Kontext_.

  ```http
  Set-Cookie: widget_session=7yjgj57e4n3d; SameSite=None; Secure; HttpOnly
  ```

Wenn kein `SameSite`-Attribut gesetzt ist, wird das Cookie standardmäßig als `Lax` behandelt.

### Cookie-Präfixe

Aufgrund des Designs des Cookie-Mechanismus kann ein Server nicht bestätigen, dass ein Cookie von einem sicheren Ursprung gesetzt wurde oder sogar _wo_ ein Cookie ursprünglich gesetzt wurde.

Eine Anwendung auf einer Subdomain kann ein Cookie mit dem `Domain`-Attribut setzen, das Zugriff auf dieses Cookie auf allen anderen Subdomains gibt. Dieser Mechanismus kann in einem [Sitzungsfixierungsangriff](https://owasp.org/www-community/attacks/Session_fixation) missbraucht werden.

Als [Tiefenverteidigung](<https://de.wikipedia.org/wiki/Defense_in_depth_(computing)>) können Sie jedoch _Cookie-Präfixe_ verwenden, um bestimmte Fakten über das Cookie zu behaupten. Zwei Präfixe sind verfügbar:

- `__Host-`: Wenn ein Cookie-Name dieses Präfix hat, wird es nur in einem {{HTTPHeader("Set-Cookie")}}-Header akzeptiert, wenn es auch mit dem `Secure`-Attribut markiert ist, von einem sicheren Ursprung gesendet wurde, _kein_ `Domain`-Attribut enthält und das `Path`-Attribut auf `/` gesetzt ist. Mit anderen Worten, das Cookie ist _domänengebunden_.
- `__Secure-`: Wenn ein Cookie-Name dieses Präfix hat, wird es nur in einem {{HTTPHeader("Set-Cookie")}}-Header akzeptiert, wenn es mit dem `Secure`-Attribut markiert und von einem sicheren Ursprung gesendet wurde. Dies ist schwächer als das `__Host-`-Präfix.

Der Browser wird Cookies mit diesen Präfixen ablehnen, die nicht ihren Einschränkungen entsprechen. Dies stellt sicher, dass von Subdomains erstellte Cookies mit Präfixen entweder auf eine Subdomain beschränkt sind oder vollständig ignoriert werden. Da der Anwendungsserver nur auf einen bestimmten Cookienamen prüft, wenn er bestimmt, ob der Benutzer authentifiziert ist oder ein CSRF-Token korrekt ist, fungiert dies faktisch als Schutzmaßnahme gegen [Sitzungsfixierungsangriffe](https://owasp.org/www-community/attacks/Session_fixation).

> [!NOTE]
> Auf dem Server _muss_ die Webanwendung den vollständigen Namen des Cookies inklusive des Präfixes prüfen. Benutzeragenten _entfernen_ das Präfix vor dem Senden in einem {{HTTPHeader("Cookie")}}-Header einer Anfrage nicht.

Weitere Informationen zu Cookie-Präfixen und dem aktuellen Stand der Unterstützung durch Browser finden Sie im [Präfixe-Abschnitt des Set-Cookie-Referenzartikels](/de/docs/Web/HTTP/Reference/Headers/Set-Cookie#cookie_prefixes).

## Datenschutz und Verfolgung

Früher haben wir darüber gesprochen, wie das `SameSite`-Attribut verwendet werden kann, um zu steuern, wann Drittanbieter-Cookies gesendet werden, und dass dies helfen kann, den Benutzer-Datenschutz zu wahren. Datenschutz ist eine sehr wichtige Überlegung beim Erstellen von Websites, die, wenn sie richtig gemacht wird, das Vertrauen Ihrer Benutzer aufbauen kann. Wenn es schlecht gemacht wird, kann es dieses Vertrauen vollständig erodieren und alle Arten von weiteren Problemen verursachen.

Drittanbieter-Cookies können von Drittanbieterinhalten gesetzt werden, die über {{htmlelement("iframe")}}s in Seiten eingebettet sind. Sie haben viele legitime Verwendungszwecke, wie das Teilen von Benutzerprofilinformationen, das Zählen von Anzeigeneinblendungen oder das Sammeln von Analysen über verschiedene verwandte Domains.

Drittanbieter-Cookies können jedoch auch verwendet werden, um gruselige, invasive Benutzererlebnisse zu schaffen. Ein Drittanbieter-Server kann ein Profil der Browserverläufe und -gewohnheiten eines Benutzers basierend auf Cookies erstellen, die vom selben Browser beim Zugriff auf mehrere Sites gesendet werden. Das klassische Beispiel ist, wenn Sie Produkthinweise auf einer Seite suchen und dann überall im Web von Anzeigen für ähnliche Produkte verfolgt werden.

Browserhersteller wissen, dass Nutzer dieses Verhalten nicht mögen, und haben daher begonnen, Drittanbieter-Cookies standardmäßig zu blockieren oder zumindest Pläne angekündigt, in diese Richtung zu gehen. Drittanbieter-Cookies (oder nur Tracking-Cookies) können auch durch andere Browsereinstellungen oder Erweiterungen blockiert werden.

> [!NOTE]
> Cookie-Blockierung kann dazu führen, dass einige Drittanbieterkomponenten (wie soziale Widgets) nicht wie beabsichtigt funktionieren. Da Browser weitere Einschränkungen für Drittanbieter-Cookies verhängen, sollten Entwickler anfangen, nach Wegen zu suchen, ihre Abhängigkeit von ihnen zu verringern.

Siehe unseren Artikel zu [Drittanbieter-Cookies](/de/docs/Web/Privacy/Guides/Third-party_cookies) für detaillierte Informationen zu Drittanbieter-Cookies, den damit verbundenen Problemen und welche Alternativen verfügbar sind. Weitere Informationen zum Thema Datenschutz im Allgemeinen finden Sie auf unserer [Datenschutz-Startseite](/de/docs/Web/Privacy).

## Cookie-bezogene Vorschriften

Gesetze oder Vorschriften, die die Verwendung von Cookies regeln, umfassen:

- Die [Datenschutz-Grundverordnung](https://gdpr.eu/) (DSGVO) in der Europäischen Union
- Die ePrivacy-Richtlinie in der EU
- Das kalifornische Datenschutzgesetz für Verbraucher

Diese Vorschriften haben eine weltweite Reichweite. Sie gelten für jede Webseite im _World Wide_ Web, die von Nutzern aus diesen Rechtsräumen aufgerufen wird (der EU und Kalifornien, mit dem Vorbehalt, dass das kalifornische Gesetz nur auf Unternehmen mit einem Bruttoumsatz von mehr als 25 Millionen USD zutrifft, unter anderem).

Diese Vorschriften beinhalten Anforderungen wie:

- Benutzer darüber informieren, dass Ihre Seite Cookies verwendet.
- Benutzer die Möglichkeit geben, das Empfangen einiger oder aller Cookies abzulehnen.
- Benutzern ermöglichen, den Großteil Ihres Dienstes ohne Erhalt von Cookies zu nutzen.

Es gibt möglicherweise andere Vorschriften, die die Nutzung von Cookies in Ihrem Gebiet regeln. Es liegt in Ihrer Verantwortung, diese Vorschriften zu kennen und einzuhalten. Es gibt Unternehmen, die „Cookie-Banner“-Code anbieten, der Ihnen bei der Einhaltung dieser Vorschriften hilft.

> [!NOTE]
> Unternehmen sollten die Arten von Cookies, die sie auf ihren Seiten verwenden, zu Transparenzzwecken und zur Einhaltung der Vorschriften offenlegen. Beispielsweise siehe [Googles Hinweis zu den Arten von Cookies, die es verwendet](https://policies.google.com/technologies/cookies#types-of-cookies) und Mozillas [Websites, Kommunikation & Cookies-Datenschutzhinweis](https://www.mozilla.org/en-US/privacy/websites/#cookies).

## Siehe auch

- Verwandte HTTP-Header: {{HTTPHeader("Set-Cookie")}}, {{HTTPHeader("Cookie")}}
- Verwandte JavaScript-APIs: [`Document.cookie`](/de/docs/Web/API/Document/cookie), [`Navigator.cookieEnabled`](/de/docs/Web/API/Navigator/cookieEnabled), [Cookie Store API](/de/docs/Web/API/Cookie_Store_API)
- [Drittanbieter-Cookies](/de/docs/Web/Privacy/Guides/Third-party_cookies)
- [Cookie-Spezifikation: RFC 6265](https://datatracker.ietf.org/doc/html/rfc6265)
- [Cookies, die DSGVO und die ePrivacy-Richtlinie](https://gdpr.eu/cookies/)
