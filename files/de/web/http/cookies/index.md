---
title: Verwendung von HTTP-Cookies
slug: Web/HTTP/Cookies
l10n:
  sourceCommit: 392ce991114e55e2187510b640ab545d09258a16
---

{{HTTPSidebar}}

Ein **Cookie** (auch bekannt als Web-Cookie oder Browser-Cookie) ist ein kleines Datenstück, das ein Server an den Webbrowser eines Benutzers sendet. Der Browser kann Cookies speichern, neue Cookies erstellen, bestehende ändern und sie bei späteren Anfragen an denselben Server zurücksenden. Cookies ermöglichen es Webanwendungen, begrenzte Datenmengen zu speichern und Statusinformationen zu speichern; standardmäßig ist das HTTP-Protokoll [zustandslos](/de/docs/Web/HTTP/Overview#http_is_stateless_but_not_sessionless).

In diesem Artikel werden wir die Hauptverwendungen von Cookies untersuchen, bewährte Methoden für ihre Verwendung erklären und ihre Datenschutz- und Sicherheitsimplikationen betrachten.

## Wofür Cookies verwendet werden

Typischerweise verwendet der Server den Inhalt von HTTP-Cookies, um festzustellen, ob verschiedene Anfragen von demselben Browser/Benutzer stammen, und gibt dann eine personalisierte oder generische Antwort, wie es angemessen ist. Folgendes beschreibt ein sehr einfaches Benutzeranmeldesystem:

1. Der Benutzer sendet Anmeldeinformationen an den Server, z.B. über ein Formular.
2. Wenn die Anmeldeinformationen korrekt sind, aktualisiert der Server die Benutzeroberfläche, um anzuzeigen, dass der Benutzer angemeldet ist, und antwortet mit einem Cookie, das eine Sitzungs-ID enthält, die ihren Anmeldestatus im Browser aufzeichnet.
3. Später wechselt der Benutzer zu einer anderen Seite auf derselben Website. Der Browser sendet das Cookie mit der Sitzungs-ID zusammen mit der entsprechenden Anfrage, um anzuzeigen, dass er immer noch denkt, der Benutzer sei angemeldet.
4. Der Server überprüft die Sitzungs-ID und, wenn sie noch gültig ist, sendet er dem Benutzer eine personalisierte Version der neuen Seite. Wenn sie ungültig ist, wird die Sitzungs-ID gelöscht, und dem Benutzer wird eine generische Version der Seite (oder vielleicht eine "Zugriff verweigert"-Nachricht) angezeigt und er wird gebeten, sich erneut anzumelden.

![Visuelle Darstellung der oben beschriebenen Anmeldesystembeschreibung](cookie-basic-example.png)

Cookies werden hauptsächlich für drei Zwecke verwendet:

- **Sitzungsmanagement**: Anmeldestatus des Benutzers, Warenkorb-Inhalt, Spielstände oder sonstige sitzungsbezogene Details, die der Server sich merken muss.
- **Personalisierung**: Benutzervorlieben wie Anzeigesprache und UI-Thema.
- **Verfolgung**: Aufzeichnen und Analysieren des Benutzerverhaltens.

### Datenspeicherung

In den frühen Tagen des Webs, als es keine andere Option gab, wurden Cookies für allgemeine Datenschutzzwecke auf Client-Seite verwendet. Modernere Speicher-APIs werden jetzt empfohlen, zum Beispiel die [Web Storage API](/de/docs/Web/API/Web_Storage_API) (`localStorage` und `sessionStorage`) und [IndexedDB](/de/docs/Web/API/IndexedDB_API).

Diese sind auf Speicherung ausgelegt, senden keine Daten an den Server und vermeiden andere Nachteile der Verwendung von Cookies für die Speicherung:

- Browser sind normalerweise auf eine maximale Anzahl von Cookies pro Domain beschränkt (variiert je nach Browser, allgemein in den Hunderten) und auf eine maximale Größe pro Cookie (normalerweise 4 KB). Speicher-APIs können größere Datenmengen speichern.
- Cookies werden mit jeder Anfrage gesendet, was die Leistung verschlechtern kann (zum Beispiel bei langsamen mobilen Datenverbindungen), insbesondere wenn Sie viele Cookies gesetzt haben.

> [!NOTE]
> Um gespeicherte Cookies (und andere Speicherarten, die eine Webseite verwendet) zu sehen, können Sie den [Storage Inspector](https://firefox-source-docs.mozilla.org/devtools-user/storage_inspector/index.html) in den Firefox Developer Tools oder das [Application Panel](https://developer.chrome.com/docs/devtools/progressive-web-apps) in den Chrome Developer Tools verwenden.

## Erstellen, Entfernen und Aktualisieren von Cookies

Nachdem ein HTTP-Request empfangen wurde, kann ein Server ein oder mehrere {{HTTPHeader("Set-Cookie")}} Header mit der Antwort senden, von denen jeder ein separates Cookie setzt. Ein einfaches Cookie wird durch Angabe eines Namens-Wert-Paares wie folgt gesetzt:

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
> Erfahren Sie, wie Sie den `Set-Cookie`-Header in verschiedenen serverseitigen Sprachen/Frameworks verwenden: [PHP](https://www.php.net/manual/en/function.setcookie.php), [Node.JS](https://nodejs.org/dist/latest-v14.x/docs/api/http.html#http_response_setheader_name_value), [Python](https://docs.python.org/3/library/http.cookies.html), [Ruby on Rails](https://api.rubyonrails.org/classes/ActionDispatch/Cookies.html).

Wenn eine neue Anfrage erstellt wird, sendet der Browser normalerweise zuvor gespeicherte Cookies für die aktuelle Domain innerhalb eines {{HTTPHeader("Cookie")}} HTTP-Headers zurück an den Server:

```http
GET /sample_page.html HTTP/2.0
Host: www.example.org
Cookie: yummy_cookie=choco; tasty_cookie=strawberry
```

### Entfernen: Definieren der Lebensdauer eines Cookies

Sie können ein Ablaufdatum oder einen Zeitraum festlegen, nach dem das Cookie gelöscht und nicht mehr gesendet werden soll. Abhängig von den Attributen, die innerhalb des {{HTTPHeader("Set-Cookie")}} Headers beim Erstellen der Cookies gesetzt werden, können sie entweder _permanente_ oder _Sitzungs_-Cookies sein:

- Permanente Cookies werden nach dem im `Expires`-Attribut angegebenen Datum gelöscht:

  ```http
  Set-Cookie: id=a3fWa; Expires=Thu, 31 Oct 2021 07:28:00 GMT;
  ```

  oder nach dem im `Max-Age`-Attribut angegebenen Zeitraum:

  ```http
  Set-Cookie: id=a3fWa; Max-Age=2592000
  ```

  > **Hinweis:** `Expires` ist länger verfügbar als `Max-Age`, jedoch ist `Max-Age` weniger fehleranfällig und hat Vorrang, wenn beide gesetzt sind. Der Grund dafür ist, dass wenn Sie ein `Expires`-Datum und eine Uhrzeit festlegen, diese relativ zum Client sind, auf dem das Cookie gesetzt wird. Wenn der Server auf eine andere Zeit eingestellt ist, kann dies zu Fehlern führen.

- _Sitzungs_-Cookies — Cookies ohne `Max-Age` oder `Expires`-Attribut – werden gelöscht, wenn die aktuelle Sitzung endet. Der Browser definiert, wann die "aktuelle Sitzung" endet, und einige Browser verwenden beim Neustart eine _Sitzungswiederherstellung_. Dies kann dazu führen, dass Sitzungscookies unbegrenzt bestehen bleiben.

  > [!NOTE]
  > Wenn Ihre Site Benutzer authentifiziert, sollte sie die Sitzungscookies neu generieren und erneut senden, auch wenn diese bereits existieren, wann immer sich ein Benutzer authentifiziert. Dieser Ansatz hilft, [Sitzungsfixierungs-Angriffe](/de/docs/Web/Security/Types_of_attacks#session_fixation) zu verhindern, bei denen ein Dritter die Sitzung eines Benutzers wiederverwenden kann.

Es gibt einige Techniken, die darauf abzielen, Cookies nach ihrer Löschung wiederherzustellen. Diese werden als "Zombie"-Cookies bezeichnet. Diese Techniken verletzen die Prinzipien des Benutzerdatenschutzes und der Kontrolle, können möglicherweise Datenschutzbestimmungen verletzen und könnten eine Website, die sie verwendet, rechtlichen Risiken aussetzen.

### Aktualisieren von Cookie-Werten

Um ein Cookie über HTTP zu aktualisieren, kann der Server einen {{HTTPHeader("Set-Cookie")}} Header mit dem vorhandenen Cookie-Namen und einem neuen Wert senden. Zum Beispiel:

```http
Set-Cookie: id=new-value
```

Es gibt mehrere Gründe, warum Sie dies tun möchten, zum Beispiel, wenn ein Benutzer seine Einstellungen aktualisiert hat und die Anwendung die Änderungen in clientseitiger Daten widerspiegeln möchte (Sie könnten dies auch mit einem clientseitigen Speichermedium wie [Web Storage](/de/docs/Web/API/Web_Storage_API) tun).

#### Aktualisieren von Cookies über JavaScript

Im Browser können Sie neue Cookies über JavaScript mit der [`Document.cookie`](/de/docs/Web/API/Document/cookie) Eigenschaft oder der asynchronen [Cookie Store API](/de/docs/Web/API/Cookie_Store_API) erstellen. Beachten Sie, dass alle unten stehenden Beispiele `Document.cookie` verwenden, da es die am weitesten unterstützte/etablierte Option ist.

```js
document.cookie = "yummy_cookie=choco";
document.cookie = "tasty_cookie=strawberry";
```

Sie können auch vorhandene Cookies zugreifen und neue Werte für sie setzen, vorausgesetzt, das [`HttpOnly`](/de/docs/Web/HTTP/Headers/Set-Cookie#httponly) -Attribut ist nicht auf ihnen gesetzt (d.h. im `Set-Cookie`-Header, der es erstellt hat):

```js
console.log(document.cookie);
// logs "yummy_cookie=choco; tasty_cookie=strawberry"

document.cookie = "yummy_cookie=blueberry";

console.log(document.cookie);
// logs "tasty_cookie=strawberry; yummy_cookie=blueberry"
```

Beachten Sie, dass Sie aus Sicherheitsgründen Cookie-Werte nicht durch Senden eines aktualisierten `Cookie`-Headers direkt bei der Initiierung einer Anfrage ändern können, d.h. über [`fetch()`](/de/docs/Web/API/Window/fetch) oder [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest). Beachten Sie, dass es auch gute Gründe gibt, warum Sie JavaScript nicht erlauben sollten, Cookies zu ändern — d.h., setzen Sie `HttpOnly` bei der Erstellung. Weitere Informationen finden Sie im Abschnitt [Sicherheit](#sicherheit).

## Sicherheit

Wenn Sie Informationen in Cookies speichern, sind standardmäßig alle Cookie-Werte für den Endbenutzer sichtbar und können von ihm geändert werden. Sie wollen wirklich nicht, dass Ihre Cookies missbraucht werden — zum Beispiel von böswilligen Akteuren aufgerufen/verändert werden oder an Domains gesendet werden, wo sie nicht gesendet werden sollten. Die potenziellen Konsequenzen reichen von ärgerlich — unvollständig funktionierende Anwendungen oder seltsames Verhalten — bis hin zu katastrophal. Ein Krimineller könnte zum Beispiel eine Sitzungs-ID stehlen und ein Cookie setzen, das ihn so aussehen lässt, als ob er als jemand anderes angemeldet ist, und somit die Kontrolle über dessen Bank- oder E-Commerce-Konto übernimmt.

Sie können Ihre Cookies auf verschiedene Weise sichern, die in diesem Abschnitt überprüft werden.

### Blockieren des Zugriffs auf Ihre Cookies

Sie können sicherstellen, dass Cookies sicher gesendet werden und nicht von unbeabsichtigten Parteien oder Skripten zugänglich sind, indem Sie das `Secure`-Attribut und das `HttpOnly`-Attribut verwenden:

```http
Set-Cookie: id=a3fWa; Expires=Thu, 21 Oct 2021 07:28:00 GMT; Secure; HttpOnly
```

- Ein Cookie mit dem `Secure`-Attribut wird nur mit einer verschlüsselten Anfrage über das HTTPS-Protokoll an den Server gesendet. Es wird nie mit ungesichertem HTTP (außer auf localhost) gesendet, was bedeutet, dass [Man-in-the-Middle](/de/docs/Glossary/MitM) Angreifer nicht leicht darauf zugreifen können. Unsichere Sites (mit `http:` in der URL) können keine Cookies mit dem `Secure`-Attribut setzen. Allerdings sollten Sie nicht davon ausgehen, dass `Secure` den Zugriff auf sensible Informationen in Cookies vollständig verhindert. Beispielsweise kann jemand mit Zugriff auf die Festplatte des Clients (oder JavaScript, wenn das `HttpOnly`-Attribut nicht gesetzt ist) die Informationen lesen und ändern.

- Ein Cookie mit dem `HttpOnly`-Attribut kann nicht von JavaScript geändert werden, zum Beispiel durch [`Document.cookie`](/de/docs/Web/API/Document/cookie); es kann nur geändert werden, wenn es den Server erreicht. Cookies, die Benutzersitzungen aufrechterhalten, sollten zum Beispiel das `HttpOnly`-Attribut haben — es wäre wirklich unsicher, sie JavaScript zugänglich zu machen. Diese Vorsichtsmaßnahme hilft, [cross-site scripting](/de/docs/Web/Security/Types_of_attacks#cross-site_scripting_xss) (XSS) Angriffe abzumildern.

> [!NOTE]
> Abhängig von der Anwendung sollten Sie möglicherweise einen undurchsichtigen Bezeichner verwenden, auf den der Server zugreift, anstatt sensible Informationen direkt in Cookies zu speichern, oder alternative Authentifizierungs-/Geheimhaltungsmechanismen wie [JSON Web Tokens](https://jwt.io/) untersuchen.

### Definieren, wohin Cookies gesendet werden

Die Attribute `Domain` und `Path` definieren den _Geltungsbereich_ eines Cookies: an welche URLs die Cookies gesendet werden.

- Das `Domain`-Attribut gibt an, welcher Server ein Cookie erhalten kann. Wenn es festgelegt ist, sind Cookies auf dem angegebenen Server und seinen Subdomains verfügbar. Zum Beispiel, wenn Sie `Domain=mozilla.org` von `mozilla.org` setzen, sind Cookies auf dieser Domain und Unterdomänen wie `developer.mozilla.org` verfügbar.

  ```http
  Set-Cookie: id=a3fWa; Expires=Thu, 21 Oct 2021 07:28:00 GMT; Secure; HttpOnly; Domain=mozilla.org
  ```

  Wenn der `Set-Cookie`-Header kein `Domain`-Attribut spezifiziert, sind die Cookies auf dem Server verfügbar, der es setzt, _aber nicht auf seinen Unterdomänen_. Daher ist das Festlegen von `Domain` weniger restriktiv, als es wegzulassen.
  Beachten Sie, dass ein Server das `Domain`-Attribut nur auf seine eigene Domain oder eine übergeordnete Domain setzen kann, nicht auf eine Unterdomäne oder eine andere Domain.
  Ein Server mit der Domain `foo.example.com` könnte das Attribut z.B. auf `example.com` oder `foo.example.com` setzen, aber nicht auf `bar.foo.example.com` oder `elsewhere.com` (die Cookies würden jedoch weiterhin _an_ Unterdomänen wie `bar.foo.example.com` gesendet).
  Weitere Details finden Sie unter [Ungültige Domains](/de/docs/Web/HTTP/Headers/Set-Cookie#invalid_domains).

- Das `Path`-Attribut zeigt einen URL-Pfad, der in der angeforderten URL vorhanden sein muss, um den `Cookie`-Header zu senden. Zum Beispiel:

  ```http
  Set-Cookie: id=a3fWa; Expires=Thu, 21 Oct 2021 07:28:00 GMT; Secure; HttpOnly; Path=/docs
  ```

  Das Zeichen `%x2F` ("/") wird als Verzeichnis-Trennzeichen betrachtet, und Unterverzeichnisse stimmen ebenfalls überein. Zum Beispiel, wenn Sie `Path=/docs` setzen, entsprechen diese Anforderungspfade:

  - `/docs`
  - `/docs/`
  - `/docs/Web/`
  - `/docs/Web/HTTP`

  Aber diese Anforderungspfade nicht:

  - `/`
  - `/docsets`
  - `/fr/docs`

### Steuerung von Drittanbieter-Cookies mit `SameSite`

Das [`SameSite`](/de/docs/Web/HTTP/Headers/Set-Cookie#samesitesamesite-value)-Attribut ermöglicht es Servern anzugeben, ob/wann Cookies mit Cross-Site-Anfragen gesendet werden — d.h. [Drittanbieter-Cookies](/de/docs/Web/Privacy/Third-party_cookies). Cross-Site-Anfragen sind Anfragen, bei denen die [Website](/de/docs/Glossary/Site) (die registrierbare Domain) und/oder das Schema (http oder https) nicht mit der Website übereinstimmen, die der Benutzer gerade besucht. Dies umfasst Anfragen, die gesendet werden, wenn auf Links auf anderen Websites geklickt wird, um zu Ihrer Website zu navigieren, und jede Anfrage, die von eingebetteten Drittanbieter-Inhalten gesendet wird.

`SameSite` hilft das Austreten von Informationen zu verhindern, die Privatsphäre des Benutzers zu wahren und bietet einen gewissen Schutz gegen [Cross-Site Request Forgery](/de/docs/Glossary/CSRF) Angriffe. Es hat drei mögliche Werte: `Strict`, `Lax` und `None`:

- `Strict` führt dazu, dass der Browser das Cookie nur als Antwort auf Anfragen sendet, die von der Ursprungsseite des Cookies stammen. Dies sollte verwendet werden, wenn Sie Cookies haben, die sich auf Funktionen beziehen, die immer hinter einer initialen Navigation stehen, wie z.B. Authentifizierung oder Speicherung von Warenkorbinformationen.

  ```http
  Set-Cookie: cart=110045_77895_53420; SameSite=Strict
  ```

  > [!NOTE]
  > Cookies, die für sensible Informationen verwendet werden, sollten auch eine kurze [Lebensdauer](#removal_defining_the_lifetime_of_a_cookie) haben.

- `Lax` ist ähnlich, außer dass der Browser das Cookie auch sendet, wenn der Benutzer _zur Ursprungsseite des Cookies navigiert_ (auch wenn der Benutzer von einer anderen Seite kommt). Dies ist nützlich für Cookies, die die Anzeige einer Seite beeinflussen — zum Beispiel könnten Sie Partnerproduktinformationen zusammen mit einem Affiliate-Link auf Ihrer Website haben. Wenn dieser Link zur Partnerwebsite gefolgt wird, möchten diese möglicherweise ein Cookie setzen, das angibt, dass der Affiliate-Link gefolgt wurde, was ein Belohnungsbanner anzeigt und einen Rabatt bietet, wenn das Produkt gekauft wird.

  ```http
  Set-Cookie: affiliate=e4rt45dw; SameSite=Lax
  ```

- `None` spezifiziert, dass Cookies bei Anfragen sowohl von der Ursprungsseite als auch von der Cross-Site gesendet werden. Dies ist nützlich, wenn Sie Cookies zusammen mit Anfragen senden möchten, die von Drittanbieter-Inhalten stammen, die in andere Websites eingebettet sind, zum Beispiel Ad-Tech- oder Analyseanbieter. Beachten Sie, dass wenn `SameSite=None` festgelegt ist, das `Secure`-Attribut ebenfalls gesetzt werden muss — `SameSite=None` erfordert einen _sicheren Kontext_.

  ```http
  Set-Cookie: widget_session=7yjgj57e4n3d; SameSite=None; Secure; HttpOnly
  ```

Wenn kein `SameSite`-Attribut gesetzt ist, wird das Cookie standardmäßig als `Lax` behandelt.

### Cookie-Präfixe

Aufgrund des Designs des Cookie-Mechanismus kann ein Server nicht bestätigen, dass ein Cookie von einer sicheren Quelle gesetzt wurde oder sogar _wo_ ein Cookie ursprünglich gesetzt wurde.

Eine anfällige Anwendung auf einer Unterdomäne kann ein Cookie mit dem `Domain`-Attribut setzen, das den Zugriff auf dieses Cookie auf alle anderen Unterdomänen gewährt. Dieser Mechanismus kann in einem _Sitzungsfixierungs_-Angriff ausgenutzt werden. Siehe [Sitzungsfixierung](/de/docs/Web/Security/Types_of_attacks#session_fixation) für primäre Abwehrmethoden.

Als [Verteidigungs-in-der-Tiefe-Maßnahme](https://en.wikipedia.org/wiki/Defense_in_depth_(computing)) können Sie jedoch _Cookie-Präfixe_ verwenden, um bestimmte Fakten über das Cookie zu behaupten. Zwei Präfixe sind verfügbar:

- `__Host-`: Wenn ein Cookie-Name dieses Präfix hat, wird es in einem {{HTTPHeader("Set-Cookie")}} Header nur akzeptiert, wenn es auch mit dem `Secure`-Attribut versehen ist, von einer sicheren Quelle gesendet wurde, _kein_ `Domain`-Attribut enthält und das `Path`-Attribut auf `/` gesetzt ist. Mit anderen Worten, das Cookie ist _domain-lock_.
- `__Secure-`: Wenn ein Cookie-Name dieses Präfix hat, wird es in einem {{HTTPHeader("Set-Cookie")}} Header nur akzeptiert, wenn es mit dem `Secure`-Attribut versehen ist und von einer sicheren Quelle gesendet wurde. Dies ist schwächer als das `__Host-` Präfix.

Der Browser wird Cookies mit diesen Präfixen ablehnen, die nicht ihren Beschränkungen entsprechen. Dies stellt sicher, dass von Unterdomänen erstellte Cookies mit Präfixen entweder auf eine Unterdomäne beschränkt sind oder vollständig ignoriert werden. Da die Anwendung auf dem Server nur nach einem bestimmten Cookie-Namen prüft, wenn sie feststellt, ob der Benutzer authentifiziert ist oder ein CSRF-Token korrekt ist, wirkt dies effektiv als Abwehrmaßnahme gegen Sitzungsfixierung.

> [!NOTE]
> Auf dem Server _muss_ die Webanwendung nach dem vollständigen Cookie-Namen einschließlich des Präfixes suchen. Benutzeragenten _strippen das Präfix nicht_ vom Cookie, bevor sie es in einem {{HTTPHeader("Cookie")}} Header einer Anfrage senden.

Weitere Informationen zu Cookie-Präfixen und dem aktuellen Stand der Browser-Unterstützung finden Sie im [Präfix-Abschnitt des Set-Cookie Referenzartikels](/de/docs/Web/HTTP/Headers/Set-Cookie#cookie_prefixes).

## Datenschutz und Verfolgung

Früher haben wir darüber gesprochen, wie das `SameSite`-Attribut verwendet werden kann, um zu steuern, wann Drittanbieter-Cookies gesendet werden, und dass dies dazu beitragen kann, die Privatsphäre des Benutzers zu wahren. Privatsphäre ist eine sehr wichtige Überlegung beim Erstellen von Websites, denn wenn sie richtig gemacht wird, kann das Vertrauen der Benutzer aufgebaut werden. Wenn es schlecht gemacht wird, kann es dieses Vertrauen völlig zerstören und alle möglichen anderen Probleme verursachen.

Drittanbieter-Cookies können von Drittanbieter-Inhalten gesetzt werden, die in Sites über {{htmlelement("iframe")}} eingebettet sind. Sie haben viele legitime Verwendungen, darunter die Weitergabe von Benutzerprofilinformationen, das Zählen von Anzeigenaufrufen oder das Sammeln von Analysen über verschiedene verwandte Domains.

Allerdings können Drittanbieter-Cookies auch verwendet werden, um gruselige, invasive Benutzererlebnisse zu schaffen. Ein Drittanbieter-Server kann ein Profil über den Browserverlauf und die Gewohnheiten eines Benutzers erstellen, basierend auf Cookies, die ihm vom selben Browser gesendet werden, wenn er auf mehrere Sites zugreift. Das klassische Beispiel ist, wenn Sie auf einer Site nach Produktinformationen suchen und dann überall im Internet von Anzeigen für ähnliche Produkte verfolgt werden.

Browser-Anbieter wissen, dass Benutzer dieses Verhalten nicht mögen, und als Ergebnis haben alle angefangen, Drittanbieter-Cookies standardmäßig zu blockieren oder zumindest Pläne in diese Richtung gemacht. Drittanbieter-Cookies (oder einfach nur Tracking-Cookies) können auch durch andere Browsereinstellungen oder Erweiterungen blockiert werden.

> [!NOTE]
> Das Blockieren von Cookies kann dazu führen, dass einige Drittanbieter-Komponenten (wie Social-Media-Widgets) nicht wie beabsichtigt funktionieren. Da Browser weitere Beschränkungen für Drittanbieter-Cookies auferlegen, sollten Entwickler beginnen, nach Möglichkeiten zu suchen, ihre Abhängigkeit von ihnen zu reduzieren.

Für detaillierte Informationen über Drittanbieter-Cookies, die damit verbundenen Probleme und welche Alternativen verfügbar sind, siehe unseren Artikel zu [Drittanbieter-Cookies](/de/docs/Web/Privacy/Third-party_cookies). Weitere Informationen zu Datenschutz im Allgemeinen finden Sie auf unserer [Privacy](/de/docs/Web/Privacy) Startseite.

## Cookie-bezogene Vorschriften

Gesetze oder Vorschriften, die die Verwendung von Cookies abdecken, umfassen:

- Die [Datenschutz-Grundverordnung](https://gdpr.eu/) (GDPR) in der Europäischen Union
- Die ePrivacy-Richtlinie in der EU
- Das kalifornische Datenschutzgesetz (CCPA)

Diese Vorschriften haben globale Reichweite. Sie gelten für jede Site im _World Wide_ Web, auf die Benutzer aus diesen Rechtsordnungen zugreifen (der EU und Kalifornien, mit dem Vorbehalt, dass das kalifornische Gesetz nur für Einrichtungen mit einem Bruttoeinkommen von über 25 Millionen USD gilt, unter anderem).

Diese Vorschriften umfassen Anforderungen wie:

- Benutzer darauf hinweisen, dass Ihre Site Cookies verwendet.
- Benutzern die Möglichkeit geben, den Empfang von einigen oder allen Cookies abzulehnen.
- Benutzern erlauben, den Großteil Ihres Dienstes ohne den Empfang von Cookies zu nutzen.

Es kann weitere Vorschriften geben, die die Verwendung von Cookies in Ihrer Region regeln. Die Verantwortung liegt bei Ihnen zu wissen, welche Vorschriften gelten, und diese einzuhalten. Es gibt Unternehmen, die "Cookie-Banner"-Code anbieten, der Ihnen hilft, diese Vorschriften einzuhalten.

> [!NOTE]
> Unternehmen sollten die Arten von Cookies offenlegen, die sie auf ihren Sites verwenden, um Transparenz herzustellen und den Vorschriften zu entsprechen. Ein Beispiel hierfür ist [Googles Hinweis zu den Arten von Cookies, die es verwendet](https://policies.google.com/technologies/cookies#types-of-cookies) und Mozillas [Hinweis zur Privatsphäre von Websites, Kommunikation & Cookies](https://www.mozilla.org/en-US/privacy/websites/#cookies).

## Siehe auch

- Verwandte HTTP-Header: {{HTTPHeader("Set-Cookie")}}, {{HTTPHeader("Cookie")}}
- Verwandte JavaScript-APIs: [`Document.cookie`](/de/docs/Web/API/Document/cookie), [`Navigator.cookieEnabled`](/de/docs/Web/API/Navigator/cookieEnabled), [Cookie Store API](/de/docs/Web/API/Cookie_Store_API)
- [Drittanbieter-Cookies](/de/docs/Web/Privacy/Third-party_cookies)
- [Cookie-Spezifikation: RFC 6265](https://datatracker.ietf.org/doc/html/rfc6265)
- [Cookies, die GDPR und die ePrivacy-Richtlinie](https://gdpr.eu/cookies/)
