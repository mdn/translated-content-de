---
title: Verwendung von HTTP-Cookies
slug: Web/HTTP/Guides/Cookies
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{HTTPSidebar}}

Ein **Cookie** (auch bekannt als Web-Cookie oder Browser-Cookie) ist ein kleines Datenstück, das ein Server an den Webbrowser eines Benutzers sendet. Der Browser kann Cookies speichern, neue Cookies erstellen, bestehende ändern und sie bei späteren Anfragen an denselben Server zurücksenden. Cookies ermöglichen es Webanwendungen, begrenzte Datenmengen zu speichern und Statusinformationen zu merken; standardmäßig ist das HTTP-Protokoll [zustandslos](/de/docs/Web/HTTP/Guides/Overview#http_is_stateless_but_not_sessionless).

In diesem Artikel werden wir die Hauptverwendungszwecke von Cookies erforschen, bewährte Praktiken für ihre Verwendung erklären und ihre Datenschutz- und Sicherheitsimplikationen betrachten.

## Wofür Cookies verwendet werden

Typischerweise verwendet der Server die Inhalte von HTTP-Cookies, um festzustellen, ob verschiedene Anfragen vom gleichen Browser/Benutzer kommen, und gibt dann eine personalisierte oder generische Antwort aus, wie es angemessen ist. Das Folgende beschreibt ein sehr einfaches Benutzer-Anmeldesystem:

1. Der Benutzer sendet Anmeldedaten an den Server, zum Beispiel über ein Formular.
2. Wenn die Anmeldedaten korrekt sind, aktualisiert der Server die Benutzeroberfläche, um anzuzeigen, dass der Benutzer angemeldet ist, und antwortet mit einem Cookie, das eine Sitzungs-ID enthält, die seinen Anmeldestatus im Browser aufzeichnet.
3. Zu einem späteren Zeitpunkt wechselt der Benutzer zu einer anderen Seite derselben Website. Der Browser sendet das Cookie mit der Sitzungs-ID zusammen mit der entsprechenden Anfrage, um anzuzeigen, dass er immer noch denkt, der Benutzer sei angemeldet.
4. Der Server überprüft die Sitzungs-ID und sendet dem Benutzer eine personalisierte Version der neuen Seite, wenn sie noch gültig ist. Wenn sie nicht gültig ist, wird die Sitzungs-ID gelöscht und dem Benutzer eine generische Version der Seite angezeigt (oder möglicherweise eine "Zugriff verweigert"-Nachricht angezeigt und auffordert, sich erneut anzumelden).

![Visuelle Darstellung der oben beschriebenen Anmeldesystembeschreibung](cookie-basic-example.png)

Cookies werden hauptsächlich für drei Zwecke verwendet:

- **Sitzungsmanagement**: Benutzerauthentifizierungsstatus, Warenkorbinhalte, Spielergebnisse oder andere Details zur Benutzersitzung, die der Server sich merken muss.
- **Personalisierung**: Benutzerpräferenzen wie Spracheinstellungen und UI-Thema.
- **Verfolgung**: Aufzeichnung und Analyse des Benutzerverhaltens.

### Datenspeicherung

In den frühen Tagen des Webs, als es keine andere Option gab, wurden Cookies für allgemeine clientseitige Datenspeicherungszwecke verwendet. Moderne Speicher-APIs werden jetzt empfohlen, wie z.B. die [Web Storage API](/de/docs/Web/API/Web_Storage_API) (`localStorage` und `sessionStorage`) und [IndexedDB](/de/docs/Web/API/IndexedDB_API).

Diese sind für Speicherzwecke konzipiert, senden niemals Daten an den Server und haben nicht die anderen Nachteile, die mit der Verwendung von Cookies für die Speicherung verbunden sind:

- Browser sind im Allgemeinen auf eine maximale Anzahl von Cookies pro Domain beschränkt (variiert je nach Browser, generell in den Hunderten), und eine maximale Größe pro Cookie (normalerweise 4KB). Speicher-APIs können größere Datenmengen speichern.
- Cookies werden mit jeder Anfrage gesendet, was die Leistung verschlechtern kann (zum Beispiel bei langsamen mobilen Datenverbindungen), besonders wenn viele Cookies gesetzt sind.

> [!NOTE]
> Um gespeicherte Cookies (und anderen Speicher, den eine Webseite verwendet) zu sehen, können Sie den [Storage Inspector](https://firefox-source-docs.mozilla.org/devtools-user/storage_inspector/index.html) in den Firefox Developer Tools oder das [Application-Panel](https://developer.chrome.com/docs/devtools/progressive-web-apps) in den Chrome Developer Tools verwenden.

## Erstellen, Entfernen und Aktualisieren von Cookies

Nach dem Empfang einer HTTP-Anfrage kann ein Server ein oder mehrere {{HTTPHeader("Set-Cookie")}}-Header mit der Antwort senden, von denen jeder ein separates Cookie setzt. Ein einfaches Cookie wird durch das Angeben eines Name-Wert-Paars wie folgt gesetzt:

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

Wenn eine neue Anfrage gestellt wird, sendet der Browser normalerweise zuvor gespeicherte Cookies für die aktuelle Domain zurück an den Server innerhalb eines {{HTTPHeader("Cookie")}}-HTTP-Headers:

```http
GET /sample_page.html HTTP/2.0
Host: www.example.org
Cookie: yummy_cookie=chocolate; tasty_cookie=strawberry
```

### Entfernung: die Lebensdauer eines Cookies definieren

Sie können ein Ablaufdatum oder einen Zeitraum angeben, nach dem das Cookie gelöscht und nicht mehr gesendet werden soll. Abhängig von den in den {{HTTPHeader("Set-Cookie")}}-Headern gesetzten Attributen können die Cookies entweder _permanent_ oder _sitzungsbasiert_ sein:

- Permanente Cookies werden nach dem im `Expires`-Attribut angegebenen Datum gelöscht:

  ```http
  Set-Cookie: id=a3fWa; Expires=Thu, 31 Oct 2021 07:28:00 GMT;
  ```

  oder nach dem im `Max-Age`-Attribut angegebenen Zeitraum:

  ```http
  Set-Cookie: id=a3fWa; Max-Age=2592000
  ```

  > **Hinweis:** `Expires` ist länger verfügbar als `Max-Age`, jedoch ist `Max-Age` weniger fehleranfällig und hat Vorrang, wenn beide gesetzt sind. Der Grund dafür ist, dass wenn Sie ein `Expires`-Datum und eine Zeit festlegen, diese relativ zum Client sind, auf dem das Cookie gesetzt wird. Wenn der Server auf eine andere Zeit eingestellt ist, kann dies zu Fehlern führen.

- _Sitzungscookies_ — Cookies ohne ein `Max-Age`- oder `Expires`-Attribut – werden gelöscht, wenn die aktuelle Sitzung endet. Der Browser bestimmt, wann die "aktuelle Sitzung" endet, und einige Browser verwenden _Sitzungswiederherstellung_ beim Neustart. Dies kann dazu führen, dass Sitzungscookies unbefristet bestehen bleiben.

  > [!NOTE]
  > Wenn Ihre Website Benutzer authentifiziert, sollte sie Sitzungscookies regenerieren und erneut senden, auch solche, die bereits existieren, wann immer sich ein Benutzer authentifiziert. Dieser Ansatz hilft, [Session-Fixation-Angriffe](/de/docs/Web/Security/Types_of_attacks#session_fixation) zu verhindern, bei denen Dritte die Benutzersitzung wiederverwenden könnten.

Es gibt einige Techniken, die darauf abzielen, Cookies nach ihrer Löschung wiederherzustellen. Diese sind als "Zombie"-Cookies bekannt. Diese Techniken verletzen die Prinzipien des Benutzer[datenschutzes](#datenschutz_und_verfolgung) und der Kontrolle, können [Datenschutzgesetze](#cookie-bezogene_vorschriften) verletzen und könnten eine Website, die sie verwendet, rechtlichen Risiken aussetzen.

### Cookie-Werte aktualisieren

Um ein Cookie über HTTP zu aktualisieren, kann der Server ein {{HTTPHeader("Set-Cookie")}}-Header mit dem bestehenden Cookie-Namen und einem neuen Wert senden. Zum Beispiel:

```http
Set-Cookie: id=new-value
```

Es gibt mehrere Gründe, warum Sie dies tun könnten, zum Beispiel wenn ein Benutzer seine Präferenzen aktualisiert hat und die Anwendung die Änderungen in den clientseitigen Daten widerspiegeln möchte (Sie könnten dies auch mit einem clientseitigen Speichermechanismus wie [Web Storage](/de/docs/Web/API/Web_Storage_API) tun).

#### Cookies über JavaScript aktualisieren

Im Browser können Sie neue Cookies über JavaScript mit der [`Document.cookie`](/de/docs/Web/API/Document/cookie)-Eigenschaft oder der asynchronen [Cookie Store API](/de/docs/Web/API/Cookie_Store_API) erstellen. Beachten Sie, dass alle untenstehenden Beispiele `Document.cookie` verwenden, da es die am weitesten unterstützte/etablierte Option ist.

```js
document.cookie = "yummy_cookie=chocolate";
document.cookie = "tasty_cookie=strawberry";
```

Sie können auch auf bestehende Cookies zugreifen und neue Werte für sie setzen, vorausgesetzt das [`HttpOnly`](/de/docs/Web/HTTP/Reference/Headers/Set-Cookie#httponly)-Attribut ist nicht auf ihnen gesetzt (d.h. im `Set-Cookie`-Header, der es erstellt hat):

```js
console.log(document.cookie);
// logs "yummy_cookie=chocolate; tasty_cookie=strawberry"

document.cookie = "yummy_cookie=blueberry";

console.log(document.cookie);
// logs "tasty_cookie=strawberry; yummy_cookie=blueberry"
```

Beachteen Sie, dass Sie aus Sicherheitsgründen Cookie-Werte nicht ändern können, indem Sie direkt einen aktualisierten `Cookie`-Header senden, wenn Sie eine Anfrage initiieren, z.B. über [`fetch()`](/de/docs/Web/API/Window/fetch) oder [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest). Beachten Sie, dass es auch gute Gründe gibt, warum Sie JavaScript nicht erlauben sollten, Cookies zu ändern — d.h. `HttpOnly` während der Erstellung zu setzen. Siehe den Abschnitt [Sicherheit](#sicherheit) für weitere Details.

## Sicherheit

Wenn Sie Informationen in Cookies speichern, sind standardmäßig alle Cookie-Werte für den Endbenutzer sichtbar und können von diesem geändert werden. Sie möchten wirklich nicht, dass Ihre Cookies missbraucht werden — z.B. von böswilligen Akteuren zugegriffen/geändert oder an Domains gesendet werden, an die sie nicht gesendet werden sollten. Die potenziellen Auswirkungen können von ärgerlich — Apps, die nicht funktionieren oder sich seltsam verhalten — bis katastrophal reichen. Ein Krimineller könnte beispielsweise eine Sitzungs-ID stehlen und sie verwenden, um ein Cookie zu setzen, das es so aussehen lässt, als sei er als jemand anderes angemeldet, und dabei die Kontrolle über deren Bank- oder E-Commerce-Konto übernehmen.

Sie können Ihre Cookies auf verschiedene Weisen sichern, die in diesem Abschnitt behandelt werden.

### Den Zugriff auf Ihre Cookies blockieren

Sie können sicherstellen, dass Cookies sicher gesendet werden und nicht von unbeabsichtigten Parteien oder Skripten auf zwei Arten zugegriffen wird: mit dem `Secure`-Attribut und dem `HttpOnly`-Attribut:

```http
Set-Cookie: id=a3fWa; Expires=Thu, 21 Oct 2021 07:28:00 GMT; Secure; HttpOnly
```

- Ein Cookie mit dem `Secure`-Attribut wird nur mit einer verschlüsselten Anfrage über das HTTPS-Protokoll an den Server gesendet. Es wird nie mit nicht gesichertem HTTP gesendet (außer auf localhost), was bedeutet, dass {{Glossary("MitM", "Man-in-the-Middle")}}-Angreifer nicht leicht darauf zugreifen können. Unsichere Websites (mit `http:` in der URL) können keine Cookies mit dem `Secure`-Attribut setzen. Sie sollten jedoch nicht davon ausgehen, dass `Secure` jeglichen Zugriff auf sensible Informationen in Cookies verhindert. Zum Beispiel kann jemand mit Zugriff auf die Festplatte des Clients (oder JavaScript, wenn das `HttpOnly`-Attribut nicht gesetzt ist) die Informationen lesen und ändern.

- Ein Cookie mit dem `HttpOnly`-Attribut kann nicht von JavaScript zugegriffen werden, zum Beispiel mit [`Document.cookie`](/de/docs/Web/API/Document/cookie); es kann nur erreicht werden, wenn es den Server erreicht. Cookies, die Benutzersitzungen aufrechterhalten, sollten zum Beispiel das `HttpOnly`-Attribut gesetzt haben — es wäre wirklich unsicher, sie für JavaScript verfügbar zu machen. Dieser Schutz hilft, Cross-Site-Scripting ([XSS](/de/docs/Web/Security/Types_of_attacks#cross-site_scripting_xss)) Angriffe zu mindern.

> [!NOTE]
> Abhängig von der Anwendung möchten Sie möglicherweise eine undurchsichtige Kennung verwenden, die der Server anstelle der Speicherung sensibler Informationen direkt in Cookies nachschlägt, oder alternative Authentifizierungs/Vertraulichkeitsmechanismen wie [JSON Web Tokens](https://jwt.io/) untersuchen.

### Definieren, wohin Cookies gesendet werden

Die `Domain`- und `Path`-Attribute definieren den _Geltungsbereich_ eines Cookies: an welche URLs die Cookies gesendet werden.

- Das `Domain`-Attribut legt fest, welcher Server ein Cookie empfangen kann. Wenn angegeben, sind Cookies auf dem angegebenen Server und seinen Subdomains verfügbar. Zum Beispiel, wenn Sie `Domain=mozilla.org` von `mozilla.org` setzen, sind Cookies auf dieser Domain und Subdomains wie `developer.mozilla.org` verfügbar.

  ```http
  Set-Cookie: id=a3fWa; Expires=Thu, 21 Oct 2021 07:28:00 GMT; Secure; HttpOnly; Domain=mozilla.org
  ```

  Wenn der `Set-Cookie`-Header kein `Domain`-Attribut angibt, sind die Cookies auf dem Server verfügbar, der es setzt, _aber nicht auf dessen Subdomains_. Daher ist das Spezifizieren von `Domain` weniger restriktiv als es wegzulassen.
  Beachten Sie, dass ein Server das `Domain`-Attribut nur auf seine eigene Domain oder eine übergeordnete Domain setzen kann, nicht auf eine Subdomain oder eine andere Domain.
  So könnte ein Server mit der Domain `foo.example.com` das Attribut auf `example.com` oder `foo.example.com` setzen, aber nicht `bar.foo.example.com` oder `elsewhere.com` (die Cookies würden trotzdem _an_ Subdomains wie `bar.foo.example.com` gesendet werden).
  Siehe [Ungültige Domains](/de/docs/Web/HTTP/Reference/Headers/Set-Cookie#invalid_domains) für weitere Details.

- Das `Path`-Attribut gibt einen URL-Pfad an, der in der angeforderten URL vorhanden sein muss, um den `Cookie`-Header zu senden. Zum Beispiel:

  ```http
  Set-Cookie: id=a3fWa; Expires=Thu, 21 Oct 2021 07:28:00 GMT; Secure; HttpOnly; Path=/docs
  ```

  Das `%x2F` ("/")-Zeichen wird als Verzeichnistrenner betrachtet, und Unterverzeichnisse passen ebenfalls. Zum Beispiel, wenn Sie `Path=/docs` setzen, stimmen diese Anforderungswege überein:

  - `/docs`
  - `/docs/`
  - `/docs/Web/`
  - `/docs/Web/HTTP`

  Aber diese Anforderungswege nicht:

  - `/`
  - `/docsets`
  - `/fr/docs`

### Steuerung von Drittanbieter-Cookies mit `SameSite`

Das [`SameSite`](/de/docs/Web/HTTP/Reference/Headers/Set-Cookie#samesitesamesite-value)-Attribut ermöglicht es Servern festzulegen, ob/wann Cookies mit siteübergreifenden Anfragen gesendet werden — d.h. [Drittanbieter-Cookies](/de/docs/Web/Privacy/Guides/Third-party_cookies). Siteübergreifende Anfragen sind Anfragen, bei denen die {{Glossary("Site", "Site")}} (die registrierbare Domain) und/oder das Schema (http oder https) nicht mit der Site übereinstimmen, die der Benutzer derzeit besucht. Dazu gehören Anfragen, die gesendet werden, wenn Links auf anderen Sites geklickt werden, um zu Ihrer Site zu navigieren, und jede Anfrage, die durch eingebettete Drittinhalte gesendet wird.

`SameSite` hilft, das Austreten von Informationen zu verhindern, den Benutzer[datenschutz](#datenschutz_und_verfolgung) zu wahren und bietet einen gewissen Schutz gegen {{Glossary("CSRF", "Cross-Site Request Forgery")}}-Angriffe. Es hat drei mögliche Werte: `Strict`, `Lax` und `None`:

- `Strict` bewirkt, dass der Browser das Cookie nur als Antwort auf Anfragen sendet, die von der Ursprungsseite des Cookies stammen. Dies sollte verwendet werden, wenn Sie Cookies haben, die sich auf Funktionalitäten beziehen, die immer hinter einer anfänglichen Navigation stehen, wie z.B. Authentifizierung oder die Speicherung von Warenkorbinformationen.

  ```http
  Set-Cookie: cart=110045_77895_53420; SameSite=Strict
  ```

  > [!NOTE]
  > Cookies, die für sensible Informationen verwendet werden, sollten auch eine kurze [Lebensdauer](#removal_defining_the_lifetime_of_a_cookie) haben.

- `Lax` ist ähnlich, außer dass der Browser das Cookie auch sendet, wenn der Benutzer _zur Ursprungsseite des Cookies navigiert_ (selbst wenn der Benutzer von einer anderen Seite kommt). Dies ist nützlich für Cookies, die die Anzeige einer Website beeinflussen — zum Beispiel könnten Sie Partnerproduktinformationen zusammen mit einem Partnerlink auf Ihrer Website haben. Wenn dieser Link auf die Partner-Website gefolgt wird, möchten sie möglicherweise ein Cookie setzen, das besagt, dass der Partner-Link gefolgt wurde, was ein Belohnungsbanner anzeigt und einen Rabatt bietet, wenn das Produkt gekauft wird.

  ```http
  Set-Cookie: affiliate=e4rt45dw; SameSite=Lax
  ```

- `None` gibt an, dass Cookies sowohl bei Ursprungs- als auch siteübergreifenden Anfragen gesendet werden. Dies ist nützlich, wenn Sie Cookies mit Anfragen senden möchten, die von Drittanbieter-Inhalten gesendet werden, die in anderen Seiten eingebettet sind, zum Beispiel Ad-Tech- oder Analyse-Anbieter. Beachten Sie, dass wenn `SameSite=None` gesetzt ist, auch das `Secure`-Attribut gesetzt sein muss — `SameSite=None` erfordert einen _sicheren Kontext_.

  ```http
  Set-Cookie: widget_session=7yjgj57e4n3d; SameSite=None; Secure; HttpOnly
  ```

Wenn kein `SameSite`-Attribut gesetzt ist, wird das Cookie standardmäßig als `Lax` behandelt.

### Cookie-Präfixe

Aufgrund des Designs des Cookie-Mechanismus kann ein Server nicht bestätigen, dass ein Cookie von einem sicheren Ursprung gesetzt wurde oder sogar _wo_ ein Cookie ursprünglich gesetzt wurde.

Eine anfällige Anwendung auf einer Subdomain kann ein Cookie mit dem `Domain`-Attribut setzen, was den Zugriff auf dieses Cookie auf allen anderen Subdomains ermöglicht. Dieses Mechanismus kann in einem _Session-Fixation_-Angriff missbraucht werden. Siehe [Session-Fixation](/de/docs/Web/Security/Types_of_attacks#session_fixation) für primäre Abwehrmethoden.

Als [Defense-in-depth Maßnahme](<https://de.wikipedia.org/wiki/Tiefenverteidigung_(Computer)>), jedoch, können Sie _Cookie-Präfixe_ verwenden, um bestimmte Fakten über das Cookie zu bestätigen. Zwei Präfixe sind verfügbar:

- `__Host-`: Wenn ein Cookie-Name dieses Präfix hat, wird es in einem {{HTTPHeader("Set-Cookie")}}-Header nur akzeptiert, wenn es auch das `Secure`-Attribut hat, von einem sicheren Ursprung gesendet wurde, _kein_ `Domain`-Attribut enthält und das `Path`-Attribut auf `/` gesetzt ist. Mit anderen Worten, das Cookie ist _domain-locked_.
- `__Secure-`: Wenn ein Cookie-Name dieses Präfix hat, wird es in einem {{HTTPHeader("Set-Cookie")}}-Header nur akzeptiert, wenn es mit dem `Secure`-Attribut versehen und von einem sicheren Ursprung gesendet wurde. Dies ist schwächer als das `__Host-`-Präfix.

Der Browser wird Cookies mit diesen Präfixen zurückweisen, die nicht ihre Beschränkungen einhalten. Dies stellt sicher, dass von Subdomains erstellte Cookies mit Präfixen entweder auf eine Subdomain beschränkt werden oder vollständig ignoriert werden. Da der Anwendungsserver nur nach einem bestimmten Cookienamen sucht, um zu bestimmen, ob der Benutzer authentifiziert ist oder ein CSRF-Token korrekt ist, wirkt dies effektiv als Abwehrmaßnahme gegen Session-Fixation.

> [!NOTE]
> Auf dem Server _muss_ die Webanwendung den vollständigen Cookienamen einschließlich des Präfixes überprüfen. Benutzeragenten entfernen das Präfix _nicht_ aus dem Cookie, bevor es in einem {{HTTPHeader("Cookie")}}-Header einer Anfrage gesendet wird.

Für weitere Informationen über Cookie-Präfixe und den aktuellen Stand der Browserunterstützung, siehe den [Präfixe-Abschnitt des Artikels zur Set-Cookie-Referenz](/de/docs/Web/HTTP/Reference/Headers/Set-Cookie#cookie_prefixes).

## Datenschutz und Verfolgung

Bereits zu Beginn haben wir darüber gesprochen, wie das `SameSite`-Attribut verwendet werden kann, um zu kontrollieren, wann Drittanbieter-Cookies gesendet werden, und dass dies helfen kann, den Datenschutz der Benutzer zu wahren. Datenschutz ist eine sehr wichtige Überlegung beim Erstellen von Websites, die, wenn sie richtig gemacht werden, Vertrauen bei Ihren Benutzern aufbauen kann. Wenn es schlecht gemacht wird, kann es dieses Vertrauen vollständig erodieren und alle möglichen anderen Probleme verursachen.

Drittanbieter-Cookies können von Drittanbieter-Inhalten gesetzt werden, die über {{htmlelement("iframe")}}s in Seiten eingebettet sind. Sie haben viele legitime Verwendungen, einschließlich der Weitergabe von Benutzerprofilinformationen, der Zählung von Anzeigen-Impressionen oder der Erfassung von Analysen über verschiedene verwandte Domains.

Jedoch können Drittanbieter-Cookies auch verwendet werden, um gruselige, aufdringliche Benutzererlebnisse zu schaffen. Ein Drittanbieter-Server kann ein Profil der Browserhistorie und -gewohnheiten eines Benutzers erstellen, basierend auf den Cookies, die ihm von demselben Browser beim Zugriff auf mehrere Sites gesendet werden. Das klassische Beispiel ist, wenn Sie nach Produktinformationen auf einer Seite suchen und dann im ganzen Web von Anzeigen für ähnliche Produkte verfolgt werden, wo immer Sie hingehen.

Browseranbieter wissen, dass Benutzer dieses Verhalten nicht mögen, und haben daher alle damit begonnen, standardmäßig Drittanbieter-Cookies zu blockieren, oder haben mindestens Pläne gemacht, in diese Richtung zu gehen. Drittanbieter-Cookies (oder einfach Tracking-Cookies) können auch durch andere Browsereinstellungen oder -erweiterungen blockiert werden.

> [!NOTE]
> Das Blockieren von Cookies kann dazu führen, dass einige Drittanbieterkomponenten (wie soziale Medien-Widgets) nicht wie beabsichtigt funktionieren. Da Browser weitere Einschränkungen für Drittanbieter-Cookies auferlegen, sollten Entwickler beginnen, Wege zu finden, ihre Abhängigkeit von ihnen zu verringern.

Lesen Sie unseren Artikel zu [Drittanbieter-Cookies](/de/docs/Web/Privacy/Guides/Third-party_cookies) für detaillierte Informationen zu Drittanbieter-Cookies, den damit verbundenen Problemen und welche Alternativen verfügbar sind. Siehe unsere [Datenschutz](/de/docs/Web/Privacy)-Landingpage für weitere Informationen zum Datenschutz im Allgemeinen.

## Cookie-bezogene Vorschriften

Gesetze oder Vorschriften, die die Verwendung von Cookies abdecken, umfassen:

- Die [Allgemeine Datenschutzverordnung](https://gdpr.eu/) (GDPR) in der Europäischen Union
- Die ePrivacy-Richtlinie in der EU
- Der California Consumer Privacy Act

Diese Vorschriften haben globale Reichweite. Sie gelten für jede Website im _World Wide_ Web, auf die Benutzer aus diesen Regionen zugreifen (die EU und Kalifornien, mit der Einschränkung, dass das kalifornische Gesetz nur für Unternehmen mit einem Bruttoumsatz von über 25 Millionen USD gilt, unter anderem).

Diese Vorschriften umfassen Anforderungen wie:

- Benutzer darüber informieren, dass Ihre Site Cookies verwendet.
- Benutzer die Möglichkeit geben, den Empfang einiger oder aller Cookies abzulehnen.
- Benutzer erlauben, den Großteil Ihres Dienstes ohne den Empfang von Cookies zu nutzen.

Es kann andere Vorschriften geben, die die Verwendung von Cookies in Ihrer Region regeln. Die Last liegt bei Ihnen, diese Vorschriften zu kennen und einzuhalten. Es gibt Unternehmen, die "Cookie-Banner"-Code anbieten, der Ihnen hilft, diese Vorschriften einzuhalten.

> [!NOTE]
> Unternehmen sollten die Arten von Cookies, die sie auf ihren Websites verwenden, aus Transparenzgründen und zur Einhaltung der Vorschriften offenlegen. Zum Beispiel siehe Googles Hinweis zu den Arten von Cookies, die es verwendet: [Google's notice on the types of cookies it uses](https://policies.google.com/technologies/cookies#types-of-cookies) und Mozillas [Websites, Communications & Cookies Privacy Notice](https://www.mozilla.org/en-US/privacy/websites/#cookies).

## Siehe auch

- Verwandte HTTP-Header: {{HTTPHeader("Set-Cookie")}}, {{HTTPHeader("Cookie")}}
- Verwandte JavaScript-APIs: [`Document.cookie`](/de/docs/Web/API/Document/cookie), [`Navigator.cookieEnabled`](/de/docs/Web/API/Navigator/cookieEnabled), [Cookie Store API](/de/docs/Web/API/Cookie_Store_API)
- [Drittanbieter-Cookies](/de/docs/Web/Privacy/Guides/Third-party_cookies)
- [Cookie-Spezifikation: RFC 6265](https://datatracker.ietf.org/doc/html/rfc6265)
- [Cookies, die GDPR und die ePrivacy-Richtlinie](https://gdpr.eu/cookies/)
