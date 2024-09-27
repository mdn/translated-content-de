---
title: Verwendung von HTTP-Cookies
slug: Web/HTTP/Cookies
l10n:
  sourceCommit: 392ce991114e55e2187510b640ab545d09258a16
---

{{HTTPSidebar}}

Ein **Cookie** (auch bekannt als Web-Cookie oder Browser-Cookie) ist ein kleines Datenstück, das ein Server an den Webbrowser eines Benutzers sendet. Der Browser kann Cookies speichern, neue Cookies erstellen, bestehende ändern und sie mit späteren Anfragen an denselben Server zurücksenden. Cookies ermöglichen es Webanwendungen, begrenzte Datenmengen zu speichern und Statusinformationen zu merken; standardmäßig ist das HTTP-Protokoll [zustandslos](/de/docs/Web/HTTP/Overview#http_is_stateless_but_not_sessionless).

In diesem Artikel werden wir die Hauptanwendungen von Cookies untersuchen, bewährte Praktiken für deren Verwendung erklären und ihre Auswirkungen auf Datenschutz und Sicherheit beleuchten.

## Wofür Cookies verwendet werden

Typischerweise verwendet der Server den Inhalt von HTTP-Cookies, um festzustellen, ob verschiedene Anfragen vom selben Browser/Benutzer stammen, und gibt dann entsprechend eine personalisierte oder allgemeine Antwort aus. Im Folgenden wird ein sehr einfaches Benutzer-Anmeldesystem beschrieben:

1. Der Benutzer sendet Anmeldedaten an den Server, zum Beispiel über eine Formularübermittlung.
2. Wenn die Anmeldedaten korrekt sind, aktualisiert der Server die Benutzeroberfläche, um anzuzeigen, dass der Benutzer angemeldet ist, und antwortet mit einem Cookie, das eine Sitzungs-ID enthält, die ihren Anmeldestatus im Browser speichert.
3. Später bewegt sich der Benutzer zu einer anderen Seite auf derselben Website. Der Browser sendet das Cookie mit der Sitzungs-ID zusammen mit der entsprechenden Anfrage, um anzuzeigen, dass er immer noch glaubt, dass der Benutzer angemeldet ist.
4. Der Server überprüft die Sitzungs-ID und, falls sie noch gültig ist, sendet dem Benutzer eine personalisierte Version der neuen Seite. Wenn sie nicht gültig ist, wird die Sitzungs-ID gelöscht und dem Benutzer wird eine allgemeine Version der Seite oder möglicherweise eine "Zugriff verweigert"-Nachricht angezeigt, und der Benutzer wird aufgefordert, sich erneut anzumelden.

![visuelle Darstellung des oben beschriebenen Anmeldesystems](cookie-basic-example.png)

Cookies werden hauptsächlich für drei Zwecke verwendet:

- **Sitzungsverwaltung**: Anmeldestatus des Benutzers, Warenkorbinhalte, Spielstände oder andere sitzungsbezogene Details, die sich der Server merken muss.
- **Personalisierung**: Benutzereinstellungen wie Anzeigesprache und Benutzeroberflächenthema.
- **Tracking**: Aufzeichnung und Analyse des Benutzerverhaltens.

### Datenspeicherung

In den frühen Tagen des Webs, als es keine anderen Optionen gab, wurden Cookies für allgemeine Zwecke der clientseitigen Datenspeicherung verwendet. Moderne Speicher-APIs werden jetzt empfohlen, zum Beispiel die [Web Storage API](/de/docs/Web/API/Web_Storage_API) (`localStorage` und `sessionStorage`) und [IndexedDB](/de/docs/Web/API/IndexedDB_API).

Sie sind für die Speicherung konzipiert, senden niemals Daten an den Server und kommen nicht mit anderen Nachteilen der Verwendung von Cookies für die Speicherung:

- Browser sind typischerweise auf eine maximale Anzahl von Cookies pro Domain begrenzt (unterschiedlich je nach Browser, generell in den Hunderten) und auf eine maximale Größe pro Cookie (in der Regel 4 KB). Speicher-APIs können größere Datenmengen speichern.
- Cookies werden mit jeder Anfrage gesendet, was die Leistung verschlechtern kann (zum Beispiel bei langsamen mobilen Datenverbindungen), insbesondere wenn viele Cookies gesetzt sind.

> [!NOTE]
> Um gespeicherte Cookies (und andere Speicher, die eine Webseite verwendet) zu sehen, können Sie den [Speicherinspektor](https://firefox-source-docs.mozilla.org/devtools-user/storage_inspector/index.html) in den Firefox Developer Tools oder das [Application-Panel](https://developer.chrome.com/docs/devtools/progressive-web-apps) in den Chrome Developer Tools verwenden.

## Erstellen, Entfernen und Aktualisieren von Cookies

Nach dem Empfang einer HTTP-Anfrage kann ein Server eine oder mehrere {{HTTPHeader("Set-Cookie")}} Headers mit der Antwort senden, von denen jeder ein separates Cookie setzt. Ein einfaches Cookie wird gesetzt, indem ein Name-Wert-Paar wie folgt angegeben wird:

```http
Set-Cookie: <cookie-name>=<cookie-value>
```

Die folgende HTTP-Antwort weist den empfangenden Browser an, ein Paar von Cookies zu speichern:

```http
HTTP/2.0 200 OK
Content-Type: text/html
Set-Cookie: yummy_cookie=choco
Set-Cookie: tasty_cookie=strawberry

[page content]
```

> [!NOTE]
> Erfahren Sie, wie der `Set-Cookie` Header in verschiedenen serverseitigen Sprachen/Frameworks verwendet wird: [PHP](https://www.php.net/manual/de/function.setcookie.php), [Node.JS](https://nodejs.org/dist/latest-v14.x/docs/api/http.html#http_response_setheader_name_value), [Python](https://docs.python.org/3/library/http.cookies.html), [Ruby on Rails](https://api.rubyonrails.org/classes/ActionDispatch/Cookies.html).

Wenn eine neue Anfrage gestellt wird, sendet der Browser normalerweise zuvor gespeicherte Cookies für die aktuelle Domain zurück an den Server innerhalb eines {{HTTPHeader("Cookie")}} HTTP-Headers:

```http
GET /sample_page.html HTTP/2.0
Host: www.example.org
Cookie: yummy_cookie=choco; tasty_cookie=strawberry
```

### Entfernung: Festlegung der Lebensdauer eines Cookies

Sie können ein Ablaufdatum oder einen Zeitraum festlegen, nach dem das Cookie gelöscht und nicht mehr gesendet werden soll. Abhängig von den Attributen, die im {{HTTPHeader("Set-Cookie")}} Header beim Erstellen der Cookies gesetzt werden, können sie entweder _permanent_ oder _Sitzungs_-Cookies sein:

- Permanente Cookies werden nach dem im `Expires` Attribut angegebenen Datum gelöscht:

  ```http
  Set-Cookie: id=a3fWa; Expires=Thu, 31 Oct 2021 07:28:00 GMT;
  ```

  oder nach der im `Max-Age` Attribut angegebenen Zeitperiode:

  ```http
  Set-Cookie: id=a3fWa; Max-Age=2592000
  ```

  > **Hinweis:** `Expires` ist länger verfügbar als `Max-Age`, jedoch ist `Max-Age` weniger fehleranfällig und hat Vorrang, wenn beide gesetzt sind. Der Grund dafür ist, dass, wenn Sie ein `Expires` Datum und eine Zeit festlegen, sie relativ zum Client sind, auf dem das Cookie gesetzt wird. Wenn der Server auf eine andere Zeit eingestellt ist, könnte dies zu Fehlern führen.

- _Sitzungs_-Cookies — Cookies ohne ein `Max-Age` oder `Expires` Attribut – werden gelöscht, wenn die aktuelle Sitzung endet. Der Browser definiert, wann die "aktuelle Sitzung" endet, und einige Browser verwenden _Sitzungswiederherstellung_ beim Neustart. Dies kann dazu führen, dass Sitzungs-Cookies unbegrenzt andauern.

  > [!NOTE]
  > Wenn Ihre Seite Benutzer authentifiziert, sollte sie Sitzungs-Cookies regenerieren und erneut senden, auch solche, die bereits existieren, wann immer sich ein Benutzer authentifiziert. Dieser Ansatz hilft, [Session Fixation Angriffe](/de/docs/Web/Security/Types_of_attacks#session_fixation) zu verhindern, bei denen ein Dritter die Sitzung eines Benutzers erneut verwenden kann.

Es gibt einige Techniken, die darauf abzielen, Cookies wiederherzustellen, nachdem sie gelöscht wurden. Diese werden als "Zombie-Cookies" bezeichnet. Diese Techniken verletzen die Grundsätze des Benutzer-[Datenschutzes](#datenschutz_und_tracking) und der Kontrolle, könnten gegen [Datenschutzbestimmungen](#cookie-bezogene_vorschriften) verstoßen und eine Website, die sie verwendet, rechtlichen Risiken aussetzen.

### Aktualisieren von Cookie-Werten

Um ein Cookie über HTTP zu aktualisieren, kann der Server einen {{HTTPHeader("Set-Cookie")}} Header mit dem Namen des bestehenden Cookies und einem neuen Wert senden. Zum Beispiel:

```http
Set-Cookie: id=new-value
```

Es gibt mehrere Gründe, warum Sie dies tun möchten, zum Beispiel wenn ein Benutzer seine Vorlieben aktualisiert hat und die Anwendung möchte, dass die Änderungen in den clientseitigen Daten reflektiert werden (Sie könnten dies auch mit einem clientseitigen Speichermedium wie [Web Storage](/de/docs/Web/API/Web_Storage_API) tun).

#### Aktualisieren von Cookies über JavaScript

Im Browser können Sie neue Cookies über JavaScript erstellen, indem Sie die [`Document.cookie`](/de/docs/Web/API/Document/cookie) Eigenschaft verwenden, oder die asynchrone [Cookie Store API](/de/docs/Web/API/Cookie_Store_API). Beachten Sie, dass alle Beispiele unten `Document.cookie` verwenden, da es die am weitesten unterstützte/etablierte Option ist.

```js
document.cookie = "yummy_cookie=choco";
document.cookie = "tasty_cookie=strawberry";
```

Sie können auch auf bestehende Cookies zugreifen und neue Werte für sie setzen, vorausgesetzt, dass das [`HttpOnly`](/de/docs/Web/HTTP/Headers/Set-Cookie#httponly) Attribut nicht auf ihnen gesetzt ist (d.h. im `Set-Cookie` Header, der es erstellt hat):

```js
console.log(document.cookie);
// logs "yummy_cookie=choco; tasty_cookie=strawberry"

document.cookie = "yummy_cookie=blueberry";

console.log(document.cookie);
// logs "tasty_cookie=strawberry; yummy_cookie=blueberry"
```

Beachten Sie, dass aus Sicherheitsgründen Cookie-Werte nicht durch das Senden eines aktualisierten `Cookie` Headers direkt beim Initiieren einer Anfrage geändert werden können, d.h. über [`fetch()`](/de/docs/Web/API/Window/fetch) oder [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest). Es gibt auch gute Gründe, warum Sie JavaScript nicht erlauben sollten, Cookies zu ändern — d.h. `HttpOnly` bei der Erstellung zu setzen. Weitere Details finden Sie im Abschnitt [Sicherheit](#sicherheit).

## Sicherheit

Wenn Sie Informationen in Cookies speichern, sind standardmäßig alle Cookie-Werte für den Endbenutzer sichtbar und veränderbar. Sie möchten auf jeden Fall vermeiden, dass Ihre Cookies missbraucht werden — zum Beispiel von böswilligen Akteuren abgerufen/verändert oder an Domains gesendet werden, an die sie nicht gesendet werden sollten. Die potenziellen Konsequenzen reichen von ärgerlich — Apps funktionieren nicht oder verhalten sich merkwürdig — bis hin zu katastrophal. Ein Krimineller könnte zum Beispiel eine Sitzungs-ID stehlen und verwenden, um ein Cookie zu setzen, das vorgibt, dass er als jemand anderes angemeldet ist und so die Kontrolle über deren Bank- oder E-Commerce-Konto übernimmt.

Sie können Ihre Cookies auf verschiedene Arten absichern, die in diesem Abschnitt überprüft werden.

### Zugriff auf Ihre Cookies blockieren

Sie können sicherstellen, dass Cookies sicher gesendet werden und nicht von Dritten oder Skripten versehentlich abgerufen werden, indem Sie entweder das `Secure` Attribut oder das `HttpOnly` Attribut verwenden:

```http
Set-Cookie: id=a3fWa; Expires=Thu, 21 Oct 2021 07:28:00 GMT; Secure; HttpOnly
```

- Ein Cookie mit dem `Secure` Attribut wird nur mit einer verschlüsselten Anfrage über das HTTPS-Protokoll an den Server gesendet. Es wird niemals mit ungesichertem HTTP (außer auf localhost) gesendet, was bedeutet, dass [Man-in-the-Middle](/de/docs/Glossary/MitM) Angreifer nicht leicht darauf zugreifen können. Unsichere Seiten (mit `http:` in der URL) können keine Cookies mit dem `Secure` Attribut setzen. Nehmen Sie jedoch nicht an, dass `Secure` jeglichen Zugriff auf sensible Informationen in Cookies verhindert. Zum Beispiel könnte jemand mit Zugriff auf die Festplatte des Clients (oder JavaScript, wenn das `HttpOnly` Attribut nicht gesetzt ist) die Informationen lesen und ändern.

- Ein Cookie mit dem `HttpOnly` Attribut kann nicht durch JavaScript geändert werden, zum Beispiel mithilfe von [`Document.cookie`](/de/docs/Web/API/Document/cookie); es kann nur geändert werden, wenn es den Server erreicht. Cookies, die Benutzersitzungen aufrechterhalten, sollten zum Beispiel das `HttpOnly` Attribut haben — es wäre wirklich unsicher, sie für JavaScript zugänglich zu machen. Diese Vorsichtsmaßnahme hilft, Cross-Site Scripting ([XSS](/de/docs/Web/Security/Types_of_attacks#cross-site_scripting_xss)) Angriffe zu mildern.

> [!NOTE]
> Abhängig von der Anwendung möchten Sie möglicherweise einen undurchsichtigen Bezeichner verwenden, den der Server nachschlägt, anstatt sensible Informationen direkt in Cookies zu speichern, oder alternative Authentifizierungs-/Vertraulichkeitsmechanismen wie [JSON-Web-Tokens](https://jwt.io/) untersuchen.

### Definieren, wohin Cookies gesendet werden

Die `Domain` und `Path` Attribute definieren den _Geltungsbereich_ eines Cookies: zu welchen URLs die Cookies gesendet werden.

- Das `Domain` Attribut gibt an, welcher Server ein Cookie empfangen kann. Wenn angegeben, sind Cookies auf dem angegebenen Server und dessen Subdomains verfügbar. Zum Beispiel, wenn Sie `Domain=mozilla.org` von `mozilla.org` setzen, sind Cookies auf dieser Domain und Subdomains wie `developer.mozilla.org` verfügbar.

  ```http
  Set-Cookie: id=a3fWa; Expires=Thu, 21 Oct 2021 07:28:00 GMT; Secure; HttpOnly; Domain=mozilla.org
  ```

  Wenn der `Set-Cookie` Header kein `Domain` Attribut angibt, sind die Cookies auf dem Server verfügbar, der es setzt, _aber nicht auf seinen Subdomains_. Daher ist die Angabe von `Domain` weniger einschränkend als das Weglassen desselben.
  Beachten Sie, dass ein Server das `Domain` Attribut nur auf seine eigene Domain oder eine übergeordnete Domain und nicht auf eine Subdomain oder eine andere Domain setzen kann.
  Ein Server mit der Domain `foo.example.com` könnte das Attribut also auf `example.com` oder `foo.example.com` setzen, aber nicht auf `bar.foo.example.com` oder `elsewhere.com` (die Cookies würden jedoch immer noch an Subdomains wie `bar.foo.example.com` gesendet werden).
  Siehe [Invalid domains](/de/docs/Web/HTTP/Headers/Set-Cookie#invalid_domains) für weitere Details.

- Das `Path` Attribut gibt einen URL-Pfad an, der existieren muss, um den `Cookie` Header zu senden. Zum Beispiel:

  ```http
  Set-Cookie: id=a3fWa; Expires=Thu, 21 Oct 2021 07:28:00 GMT; Secure; HttpOnly; Path=/docs
  ```

  Das `%x2F` ("/") Zeichen wird als Verzeichnistrenner angesehen und Subverzeichnisse stimmen ebenfalls überein. Zum Beispiel, wenn Sie `Path=/docs` setzen, stimmen folgende Anfragepfade überein:

  - `/docs`
  - `/docs/`
  - `/docs/Web/`
  - `/docs/Web/HTTP`

  Aber folgende Anfragepfade stimmen nicht überein:

  - `/`
  - `/docsets`
  - `/fr/docs`

### Steuerung von Drittanbieter-Cookies mit `SameSite`

Das [`SameSite`](/de/docs/Web/HTTP/Headers/Set-Cookie#samesitesamesite-value) Attribut ermöglicht es Servern festzulegen, ob/wann Cookies bei Cross-Site-Anfragen gesendet werden — also [Drittanbieter-Cookies](/de/docs/Web/Privacy/Third-party_cookies). Cross-Site-Anfragen sind Anfragen, bei denen die [Site](/de/docs/Glossary/Site) (die registrierbare Domain) und/oder das Schema (http oder https) nicht mit der Seite übereinstimmen, die der Benutzer derzeit besucht. Dazu gehören Anfragen, die gesendet werden, wenn auf Links auf anderen Seiten geklickt wird, um zu Ihrer Seite zu navigieren sowie jede Anfrage, die von eingebettetem Drittanbieter-Inhalt gesendet wird.

`SameSite` hilft, Informationslecks zu verhindern, bewahrt die Benutzer-[Privatsphäre](#datenschutz_und_tracking) und bietet einen gewissen Schutz gegen [Cross-Site Request Forgery](/de/docs/Glossary/CSRF) Angriffe. Es nimmt drei mögliche Werte an: `Strict`, `Lax` und `None`:

- `Strict` führt dazu, dass der Browser das Cookie nur als Antwort auf Anfragen sendet, die von der Ursprungsseite des Cookies ausgehen. Dies sollte verwendet werden, wenn Sie Cookies haben, die sich auf Funktionen beziehen, die immer hinter einer ersten Navigation stehen, wie z.B. Authentifizierung oder Speichern von Warenkorbinformationen.

  ```http
  Set-Cookie: cart=110045_77895_53420; SameSite=Strict
  ```

  > [!NOTE]
  > Cookies, die für sensible Informationen verwendet werden, sollten auch eine kurze [Lebensdauer](#removal_defining_the_lifetime_of_a_cookie) haben.

- `Lax` ist ähnlich, außer dass der Browser das Cookie auch sendet, wenn der Benutzer _zu_ der Ursprungsseite des Cookies _navigiert_ (auch wenn der Benutzer von einer anderen Seite kommt). Dies ist nützlich für Cookies, die die Anzeige einer Seite beeinflussen — zum Beispiel könnten Sie auf Ihrer Website Produktinformationen zusammen mit einem Affiliate-Link haben. Wenn dieser Link zum Partnerwebsite verfolgt wird, möchten sie vielleicht ein Cookie setzen, das angibt, dass der Affiliate-Link verfolgt wurde, wodurch ein Belohnungsbanner angezeigt und ein Rabatt gewährt wird, wenn das Produkt gekauft wird.

  ```http
  Set-Cookie: affiliate=e4rt45dw; SameSite=Lax
  ```

- `None` gibt an, dass Cookies sowohl bei ausgehenden als auch bei Cross-Site-Anfragen gesendet werden. Dies ist nützlich, wenn Sie Cookies zusammen mit Anfragen senden möchten, die von Drittanbieter-Inhalten auf anderen Seiten gemacht werden, z.B. für Anbieter von Werbetechnologie oder Analysedienste. Beachten Sie, dass wenn `SameSite=None` gesetzt ist, auch das `Secure` Attribut gesetzt werden muss — `SameSite=None` erfordert einen _sicheren Kontext_.

  ```http
  Set-Cookie: widget_session=7yjgj57e4n3d; SameSite=None; Secure; HttpOnly
  ```

Wenn kein `SameSite` Attribut gesetzt ist, wird das Cookie standardmäßig als `Lax` behandelt.

### Cookie-Präfixe

Aufgrund des Designs des Cookie-Mechanismus kann ein Server nicht bestätigen, dass ein Cookie von einem sicheren Ursprung gesetzt wurde oder sogar woher ein Cookie ursprünglich gesetzt wurde.

Eine anfällige Anwendung auf einer Subdomain kann ein Cookie mit dem `Domain` Attribut setzen, das den Zugriff auf dieses Cookie auf allen anderen Subdomains ermöglicht. Dieser Mechanismus kann in einem _Session Fixation_ Angriff missbraucht werden. Siehe [Session Fixation](/de/docs/Web/Security/Types_of_attacks#session_fixation) für primäre Abhilfemaßnahmen.

Als [Defense-in-Depth-Maßnahme](<https://de.wikipedia.org/wiki/Defence_in_Depth_(Computersicherheit)>), können Sie jedoch _Cookie-Präfixe_ verwenden, um bestimmte Fakten über das Cookie zu behaupten. Zwei Präfixe sind verfügbar:

- `__Host-`: Wenn ein Cookie-Name dieses Präfix hat, wird es in einem {{HTTPHeader("Set-Cookie")}} Header nur akzeptiert, wenn es auch mit dem `Secure` Attribut markiert ist, von einem sicheren Ursprung gesendet wird, _kein_ `Domain` Attribut enthält und das `Path` Attribut auf `/` gesetzt ist. Mit anderen Worten, das Cookie ist _domain-gesperrt_.
- `__Secure-`: Wenn ein Cookie-Name dieses Präfix hat, wird es in einem {{HTTPHeader("Set-Cookie")}} Header nur akzeptiert, wenn es mit dem `Secure` Attribut markiert und von einem sicheren Ursprung gesendet wurde. Dies ist schwächer als das `__Host-` Präfix.

Der Browser wird Cookies mit diesen Präfixen ablehnen, die nicht ihren Einschränkungen entsprechen. Dies stellt sicher, dass auf Subdomains erstellte Cookies mit Präfixen entweder auf eine Subdomain beschränkt oder vollständig ignoriert werden. Da der Anwendungsserver nur auf einen spezifischen Cookie-Namen überprüft, um festzustellen, ob der Benutzer authentifiziert ist oder ein CSRF-Token korrekt ist, wirkt dies effektiv als Abwehrmaßnahme gegen Session Fixation.

> [!NOTE]
> Auf dem Server _muss_ die Webanwendung nach dem vollständigen Cookie-Namen einschließlich Präfix suchen. Benutzeragenten _entfernen_ das Präfix nicht vom Cookie, bevor es in einem {{HTTPHeader("Cookie")}} Header einer Anfrage gesendet wird.

Für weitere Informationen über Cookie-Präfixe und den aktuellen Stand der Browserunterstützung, siehe den [Präfixe Abschnitt des Set-Cookie-Referenzartikels](/de/docs/Web/HTTP/Headers/Set-Cookie#cookie_prefixes).

## Datenschutz und Tracking

Zu Beginn haben wir darüber gesprochen, wie das `SameSite` Attribut verwendet werden kann, um zu kontrollieren, wann Drittanbieter-Cookies gesendet werden, und dass dies dazu beitragen kann, die Benutzer-Privatsphäre zu bewahren. Datenschutz ist eine sehr wichtige Überlegung beim Erstellen von Websites, die, wenn sie richtig durchgeführt wird, das Vertrauen Ihrer Benutzer stärken kann. Wenn es schlecht gemacht wird, kann es dieses Vertrauen vollständig erodieren und alle möglichen anderen Probleme verursachen.

Drittanbieter-Cookies können von eingebetteten Drittanbieter-Inhalten auf Websites über {{htmlelement("iframe")}}s gesetzt werden. Sie haben viele legitime Anwendungen, einschließlich der gemeinsamen Nutzung von Benutzerprofilinformationen, Zählen von Anzeigenimpressionen oder Sammeln von Analysedaten über verschiedene verbundene Domains hinweg.

Allerdings können Drittanbieter-Cookies auch verwendet werden, um beängstigende, invasive Benutzererfahrungen zu schaffen. Ein Drittanbieter-Server kann ein Profil des Browsing-Verhaltens eines Benutzers basierend auf Cookies erstellen, die von demselben Browser beim Zugriff auf mehrere Websites gesendet werden. Das klassische Beispiel ist, wenn Sie nach Produktinformationen auf einer Website suchen und dann überall im Web von Anzeigen für ähnliche Produkte „verfolgt“ werden.

Browseranbieter wissen, dass Benutzer dieses Verhalten nicht mögen, und haben daher alle angefangen, Drittanbieter-Cookies standardmäßig zu blockieren oder zumindest Pläne gemacht, in diese Richtung zu gehen. Drittanbieter-Cookies (oder einfach Tracking-Cookies) können auch durch andere Browsereinstellungen oder Erweiterungen blockiert werden.

> [!NOTE]
> Cookie-Blockierung kann dazu führen, dass einige Drittanbieter-Komponenten (wie Social-Media-Widgets) nicht wie vorgesehen funktionieren. Da Browser weitere Einschränkungen für Drittanbieter-Cookies auferlegen, sollten Entwickler anfangen, nach Wegen zu suchen, ihre Abhängigkeit von ihnen zu reduzieren.

Siehe unseren [Drittanbieter-Cookies](/de/docs/Web/Privacy/Third-party_cookies)-Artikel für detaillierte Informationen über Drittanbieter-Cookies, die damit verbundenen Probleme und welche Alternativen verfügbar sind. Weitere Informationen zum Datenschutz im Allgemeinen finden Sie auf unserer [Datenschutz](/de/docs/Web/Privacy)-Startseite.

## Cookie-bezogene Vorschriften

Gesetzgebungen oder Vorschriften, die die Verwendung von Cookies regeln, umfassen:

- Die [General Data Privacy Regulation](https://gdpr.eu/) (GDPR) in der Europäischen Union
- Die ePrivacy-Richtlinie in der EU
- Der California Consumer Privacy Act

Diese Vorschriften haben weltweite Auswirkungen. Sie gelten für jede Seite im _World Wide_ Web, auf die Benutzer aus diesen Gerichtsbarkeiten zugreifen (der EU und Kalifornien, mit dem Vorbehalt, dass das kalifornische Gesetz nur für Unternehmen mit einem Bruttoumsatz über 25 Millionen USD gilt, unter anderem).

Diese Vorschriften umfassen Anforderungen wie:

- Benutzer darauf hinzuweisen, dass Ihre Seite Cookies verwendet.
- Den Benutzern die Möglichkeit zu geben, den Empfang einiger oder aller Cookies abzulehnen.
- Den Benutzern die Nutzung des größten Teils Ihres Dienstes zu ermöglichen, ohne Cookies zu erhalten.

Es könnte weitere Vorschriften geben, die die Verwendung von Cookies in Ihrem Gebiet regeln. Es liegt in Ihrer Verantwortung, sich über diese Vorschriften zu informieren und deren Regeln einzuhalten. Es gibt Unternehmen, die Code für „Cookie-Banner“ anbieten, der Ihnen hilft, diese Vorschriften einzuhalten.

> [!NOTE]
> Unternehmen sollten die Arten von Cookies, die sie auf ihren Websites verwenden, zum Zwecke der Transparenz und zur Einhaltung der Vorschriften offenlegen. Beispielweise siehe [Googles Hinweis zu den Arten von Cookies, die es verwendet](https://policies.google.com/technologies/cookies#types-of-cookies) und Mozillas [Websites, Communications & Cookies Privacy Notice](https://www.mozilla.org/en-US/privacy/websites/#cookies).

## Siehe auch

- Verwandte HTTP-Header: {{HTTPHeader("Set-Cookie")}}, {{HTTPHeader("Cookie")}}
- Verwandte JavaScript-APIs: [`Document.cookie`](/de/docs/Web/API/Document/cookie), [`Navigator.cookieEnabled`](/de/docs/Web/API/Navigator/cookieEnabled), [Cookie Store API](/de/docs/Web/API/Cookie_Store_API)
- [Drittanbieter-Cookies](/de/docs/Web/Privacy/Third-party_cookies)
- [Cookie-Spezifikation: RFC 6265](https://datatracker.ietf.org/doc/html/rfc6265)
- [Cookies, die DSGVO und die ePrivacy-Richtlinie](https://gdpr.eu/cookies/)
