---
title: Verwendung von HTTP-Cookies
slug: Web/HTTP/Cookies
l10n:
  sourceCommit: 4d12b3e4f9afb311f2656641260e42c0b6f8f4c6
---

{{HTTPSidebar}}

Ein **Cookie** (auch bekannt als Web-Cookie oder Browser-Cookie) ist ein kleines Datenstück, das ein Server an den Webbrowser eines Benutzers sendet. Der Browser kann Cookies speichern, neue Cookies erstellen, vorhandene ändern und sie bei späteren Anfragen an denselben Server zurücksenden. Cookies ermöglichen es Webanwendungen, begrenzte Datenmengen zu speichern und Zustandsinformationen zu merken; standardmäßig ist das HTTP-Protokoll [zustandslos](/de/docs/Web/HTTP/Overview#http_is_stateless_but_not_sessionless).

In diesem Artikel werden wir die Hauptverwendungen von Cookies untersuchen, bewährte Verfahren für ihre Verwendung erklären und ihre Datenschutz- und Sicherheitsimplikationen betrachten.

## Wofür Cookies verwendet werden

Typischerweise verwendet der Server die Inhalte von HTTP-Cookies, um festzustellen, ob verschiedene Anfragen vom gleichen Browser/Benutzer stammen, und gibt dann je nach Bedarf eine personalisierte oder generische Antwort aus. Im Folgenden wird ein sehr einfaches Benutzeranmeldesystem beschrieben:

1. Der Benutzer sendet Anmeldedaten an den Server, z. B. über die Übermittlung eines Formulars.
2. Wenn die Anmeldedaten korrekt sind, aktualisiert der Server die Benutzeroberfläche, um anzuzeigen, dass der Benutzer angemeldet ist, und antwortet mit einem Cookie, das eine Sitzungs-ID enthält, die seinen Anmeldestatus im Browser speichert.
3. Später wechselt der Benutzer zu einer anderen Seite auf derselben Website. Der Browser sendet das Cookie mit der Sitzungs-ID zusammen mit der entsprechenden Anfrage, um anzuzeigen, dass der Benutzer immer noch angemeldet ist.
4. Der Server überprüft die Sitzungs-ID und sendet dem Benutzer, falls sie noch gültig ist, eine personalisierte Version der neuen Seite. Ist sie nicht gültig, wird die Sitzungs-ID gelöscht und dem Benutzer wird eine generische Version der Seite angezeigt (oder vielleicht eine "Zugriff verweigert"-Nachricht und die Aufforderung, sich erneut anzumelden).

![visuelle Darstellung der oben beschriebenen Anmeldesystembeschreibung](cookie-basic-example.png)

Cookies werden hauptsächlich für drei Zwecke verwendet:

- **Sitzungsmanagement**: Benutzeranmeldestatus, Einkaufswageninhalte, Spielstände oder andere benutzersitzungsbezogene Details, die der Server sich merken muss.
- **Personalisierung**: Benutzereinstellungen wie Anzeige der Sprache und UI-Thema.
- **Verfolgung**: Aufzeichnung und Analyse des Benutzerverhaltens.

### Datenspeicherung

In den frühen Tagen des Internets, als es keine andere Möglichkeit gab, wurden Cookies für allgemeine datenseitige Speicherzwecke verwendet. Moderne Speicher-APIs werden jetzt empfohlen, wie zum Beispiel die [Web Storage API](/de/docs/Web/API/Web_Storage_API) (`localStorage` und `sessionStorage`) und [IndexedDB](/de/docs/Web/API/IndexedDB_API).

Diese sind für die Speicherung ausgelegt, senden niemals Daten an den Server und haben nicht die anderen Nachteile, die mit der Verwendung von Cookies zur Speicherung verbunden sind:

- Browser sind im Allgemeinen auf eine maximale Anzahl von Cookies pro Domain begrenzt (variiert je nach Browser, in der Regel im Hunderterbereich) und eine maximale Größe pro Cookie (normalerweise 4KB). Speicher-APIs können größere Datenmengen speichern.
- Cookies werden mit jeder Anfrage gesendet, was die Leistung verschlechtern kann (z. B. bei langsamen mobilen Datenverbindungen), insbesondere wenn viele Cookies gesetzt sind.

> [!NOTE]
> Um gespeicherte Cookies (und andere Speicher, die eine Webseite verwendet) zu sehen, können Sie den [Storage Inspector](https://firefox-source-docs.mozilla.org/devtools-user/storage_inspector/index.html) in den Firefox-Entwickler-Tools oder das [Application Panel](https://developer.chrome.com/docs/devtools/progressive-web-apps) in den Chrome-Entwickler-Tools verwenden.

## Erstellen, Entfernen und Aktualisieren von Cookies

Nach Erhalt einer HTTP-Anfrage kann ein Server mit der Antwort einen oder mehrere {{HTTPHeader("Set-Cookie")}} Header senden, von denen jeder ein separates Cookie setzt. Ein einfaches Cookie wird durch Angabe eines Namens-Wert-Paares festgelegt, zum Beispiel:

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
> Erfahren Sie, wie Sie den `Set-Cookie` Header in verschiedenen serverseitigen Sprachen/Frameworks verwenden: [PHP](https://www.php.net/manual/en/function.setcookie.php), [Node.js](https://nodejs.org/docs/latest-v19.x/api/http.html#responsesetheadername-value), [Python](https://docs.python.org/3/library/http.cookies.html), [Ruby on Rails](https://api.rubyonrails.org/classes/ActionDispatch/Cookies.html).

Wenn eine neue Anfrage gestellt wird, sendet der Browser normalerweise zuvor gespeicherte Cookies für die aktuelle Domain innerhalb eines {{HTTPHeader("Cookie")}} HTTP-Headers an den Server zurück:

```http
GET /sample_page.html HTTP/2.0
Host: www.example.org
Cookie: yummy_cookie=chocolate; tasty_cookie=strawberry
```

### Entfernung: Die Lebensdauer eines Cookies bestimmen

Sie können ein Ablaufdatum oder einen Zeitraum angeben, nach dem das Cookie gelöscht und nicht mehr gesendet werden soll. Abhängig von den Attributen, die im {{HTTPHeader("Set-Cookie")}} Header beim Erstellen der Cookies festgelegt werden, können sie entweder _permanente_ oder _Sitzungs_-Cookies sein:

- Permanente Cookies werden nach dem im `Expires`-Attribut festgelegten Datum gelöscht:

  ```http
  Set-Cookie: id=a3fWa; Expires=Thu, 31 Oct 2021 07:28:00 GMT;
  ```

  oder nach dem im `Max-Age`-Attribut angegebenen Zeitraum:

  ```http
  Set-Cookie: id=a3fWa; Max-Age=2592000
  ```

  > **Hinweis:** `Expires` ist länger verfügbar als `Max-Age`, jedoch ist `Max-Age` weniger fehleranfällig und hat Vorrang, wenn beide festgelegt sind. Der Grund dafür ist, dass wenn Sie ein `Expires`-Datum und eine Zeit festlegen, diese relativ zum Client sind, auf dem das Cookie gesetzt wird. Wenn der Server auf eine andere Zeit eingestellt ist, könnte dies zu Fehlern führen.

- _Sitzungs_-Cookies – Cookies ohne `Max-Age` oder `Expires`-Attribut – werden gelöscht, sobald die aktuelle Sitzung endet. Der Browser definiert, wann die "aktuelle Sitzung" endet, und einige Browser verwenden _Session-Wiederherstellung_ beim Neustart. Dies kann dazu führen, dass Sitzungscookies auf unbestimmte Zeit bestehen bleiben.

  > [!NOTE]
  > Wenn Ihre Website Benutzer authentifiziert, sollte sie Sitzungs-Cookies regenerieren und erneut senden, auch solche, die bereits existieren, wann immer sich ein Benutzer authentifiziert. Dieser Ansatz hilft, [Sitzungsfixierungsangriffe](/de/docs/Web/Security/Types_of_attacks#session_fixation) zu verhindern, bei denen ein Dritter die Sitzung eines Benutzers wiederverwenden kann.

Es gibt einige Techniken, die darauf abzielen, Cookies nach ihrer Löschung wiederherzustellen. Diese sind als "Zombie"-Cookies bekannt. Diese Techniken verletzen die Prinzipien des Benutzer-[Datenschutzes](#datenschutz_und_tracking) und der Kontrolle, können [Datenschutzbestimmungen](#cookie-bezogene_vorschriften) verletzen und eine Website, die sie verwendet, rechtlichen Risiken aussetzen.

### Aktualisierung von Cookie-Werten

Um ein Cookie über HTTP zu aktualisieren, kann der Server einen {{HTTPHeader("Set-Cookie")}} Header mit dem vorhandenen Namen des Cookies und einem neuen Wert senden. Zum Beispiel:

```http
Set-Cookie: id=new-value
```

Es gibt mehrere Gründe, warum Sie dies tun möchten, beispielsweise wenn ein Benutzer seine Einstellungen aktualisiert hat und die Anwendung die Änderungen in clientseitigen Daten widerspiegeln möchte (dies könnten Sie auch mit einem clientseitigen Speichermedium wie [Web Storage](/de/docs/Web/API/Web_Storage_API) tun).

#### Aktualisieren von Cookies über JavaScript

Im Browser können Sie neue Cookies über JavaScript mit der [`Document.cookie`](/de/docs/Web/API/Document/cookie) Eigenschaft oder der asynchronen [Cookie Store API](/de/docs/Web/API/Cookie_Store_API) erstellen. Beachten Sie, dass alle folgenden Beispiele `Document.cookie` verwenden, da dies die am weitesten unterstützte/etablierte Option ist.

```js
document.cookie = "yummy_cookie=chocolate";
document.cookie = "tasty_cookie=strawberry";
```

Sie können auch auf bestehende Cookies zugreifen und neue Werte für sie festlegen, vorausgesetzt, das [`HttpOnly`](/de/docs/Web/HTTP/Headers/Set-Cookie#httponly)-Attribut ist nicht auf ihnen gesetzt (d. h. im `Set-Cookie`-Header, der es erstellt hat):

```js
console.log(document.cookie);
// logs "yummy_cookie=chocolate; tasty_cookie=strawberry"

document.cookie = "yummy_cookie=blueberry";

console.log(document.cookie);
// logs "tasty_cookie=strawberry; yummy_cookie=blueberry"
```

Beachten Sie, dass Sie aus Sicherheitsgründen keine Cookie-Werte ändern können, indem Sie einen aktualisierten `Cookie` Header direkt beim Initiieren einer Anfrage, z.B. über [`fetch()`](/de/docs/Web/API/Window/fetch) oder [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest), senden. Beachten Sie, dass es auch gute Gründe gibt, warum Sie JavaScript nicht erlauben sollten, Cookies zu ändern — d.h. `HttpOnly` während der Erstellung zu setzen. Siehe den [Sicherheits](#sicherheit)-Abschnitt für weitere Details.

## Sicherheit

Wenn Sie Informationen in Cookies speichern, sind standardmäßig alle Cookie-Werte dem Endbenutzer sichtbar und können von ihm geändert werden. Sie möchten wirklich nicht, dass Ihre Cookies missbraucht werden – zum Beispiel von böswilligen Akteuren zugegriffen oder an Domänen gesendet werden, an die sie nicht gesendet werden sollten. Die möglichen Folgen können von ärgerlich – nicht funktionierende oder seltsam verhaltende Apps – bis hin zu katastrophal reichen. Ein Krimineller könnte beispielsweise eine Sitzungs-ID stehlen und sie verwenden, um ein Cookie zu setzen, das den Eindruck erweckt, dass es so aussieht, als wäre er jemand anderes, um die Kontrolle über deren Bank- oder E-Commerce-Konto zu erlangen.

Sie können Ihre Cookies auf verschiedene Weisen sichern, die in diesem Abschnitt überprüft werden.

### Zugriff auf Ihre Cookies blockieren

Sie können sicherstellen, dass Cookies sicher gesendet werden und nicht von unbeabsichtigten Parteien oder Skripten abgerufen werden, indem Sie das `Secure`-Attribut und das `HttpOnly`-Attribut verwenden:

```http
Set-Cookie: id=a3fWa; Expires=Thu, 21 Oct 2021 07:28:00 GMT; Secure; HttpOnly
```

- Ein Cookie mit dem `Secure`-Attribut wird nur mit einer verschlüsselten Anfrage über das HTTPS-Protokoll an den Server gesendet. Es wird niemals mit ungesichertem HTTP geschickt (ausgenommen auf localhost), was bedeutet, dass {{Glossary("MitM", "Man-in-the-Middle")}}-Angreifer nicht einfach darauf zugreifen können. Unsichere Websites (mit `http:` in der URL) können keine Cookies mit dem `Secure`-Attribut setzen. Allerdings sollten Sie nicht davon ausgehen, dass `Secure` jeglichen Zugriff auf sensible Informationen in Cookies verhindert. Beispielsweise könnte jemand mit Zugriff auf die Festplatte des Clients (oder JavaScript, wenn das `HttpOnly`-Attribut nicht gesetzt ist) die Informationen lesen und ändern.

- Ein Cookie mit dem `HttpOnly`-Attribut kann nicht von JavaScript abgerufen werden, z.B. durch die Verwendung von [`Document.cookie`](/de/docs/Web/API/Document/cookie); es kann nur abgerufen werden, wenn es den Server erreicht. Cookies, die Benutzersitzungen aufrecht erhalten, sollten zum Beispiel das `HttpOnly`-Attribut gesetzt haben – es wäre wirklich unsicher, sie JavaScript zugänglich zu machen. Diese Vorsichtsmaßnahme hilft, Cross-Site-Scripting ([XSS](/de/docs/Web/Security/Types_of_attacks#cross-site_scripting_xss)) Angriffe zu mildern.

> [!NOTE]
> Abhängig von der Anwendung möchten Sie möglicherweise einen intransparenten Bezeichner verwenden, den der Server nachschlägt, anstatt sensible Informationen direkt in Cookies zu speichern, oder alternative Authentifizierungs-/Vertraulichkeits-Mechanismen wie [JSON Web Tokens](https://jwt.io/) untersuchen.

### Definieren, wohin Cookies gesendet werden

Die `Domain`- und `Path`-Attribute definieren den _Bereich_ eines Cookies: An welche URLs die Cookies gesendet werden.

- Das `Domain`-Attribut gibt an, welcher Server ein Cookie erhalten kann. Wenn angegeben, sind Cookies auf dem angegebenen Server und seinen Subdomains verfügbar. Zum Beispiel, wenn Sie `Domain=mozilla.org` von `mozilla.org` setzen, sind Cookies auf dieser Domain und Subdomains wie `developer.mozilla.org` verfügbar.

  ```http
  Set-Cookie: id=a3fWa; Expires=Thu, 21 Oct 2021 07:28:00 GMT; Secure; HttpOnly; Domain=mozilla.org
  ```

  Wenn der `Set-Cookie`-Header kein `Domain`-Attribut angibt, sind die Cookies auf dem Server verfügbar, der es setzt, aber nicht auf dessen Subdomains. Daher ist das Angeben von `Domain` weniger restriktiv, als es wegzulassen.
  Beachten Sie, dass ein Server das `Domain`-Attribut nur auf seine eigene Domain oder eine übergeordnete Domain, aber nicht auf eine Subdomain oder eine andere Domain setzen kann.
  Ein Server mit der Domain `foo.example.com` könnte das Attribut also auf `example.com` oder `foo.example.com` setzen, aber nicht auf `bar.foo.example.com` oder `elsewhere.com` (die Cookies würden allerdings trotzdem an Subdomains wie `bar.foo.example.com` gesendet).
  Siehe [Ungültige Domains](/de/docs/Web/HTTP/Headers/Set-Cookie#invalid_domains) für weitere Details.

- Das `Path`-Attribut gibt einen URL-Pfad an, der in der angeforderten URL vorhanden sein muss, um den `Cookie`-Header zu senden. Zum Beispiel:

  ```http
  Set-Cookie: id=a3fWa; Expires=Thu, 21 Oct 2021 07:28:00 GMT; Secure; HttpOnly; Path=/docs
  ```

  Das `%x2F` ("/")-Zeichen wird als Verzeichnistrenner betrachtet und Unterverzeichnisse passen ebenfalls. Wenn Sie beispielsweise `Path=/docs` setzen, entsprechen diese Anforderungspfade:

  - `/docs`
  - `/docs/`
  - `/docs/Web/`
  - `/docs/Web/HTTP`

  Aber diese Anforderungspfade nicht:

  - `/`
  - `/docsets`
  - `/fr/docs`

### Kontrolle von Drittanbieter-Cookies mit `SameSite`

Das [`SameSite`](/de/docs/Web/HTTP/Headers/Set-Cookie#samesitesamesite-value)-Attribut ermöglicht es Servern festzulegen, ob/wann Cookies mit sitzübergreifenden Anfragen – also [Drittanbieter-Cookies](/de/docs/Web/Privacy/Third-party_cookies) – gesendet werden. Sitzübergreifende Anfragen sind Anfragen, bei denen die {{Glossary("Site", "Site")}} (die registrierbare Domain) und/oder das Schema (http oder https) nicht mit der Site übereinstimmen, die der Benutzer gerade besucht. Dazu gehören Anfragen, die gesendet werden, wenn auf Links auf anderen Sites geklickt wird, um zu Ihrer Site zu navigieren, und jede Anfrage, die von eingebetteten Drittanbieterinhalten gesendet wird.

`SameSite` hilft, Informationslecks zu verhindern, Benutzerdatenschutz zu bewahren und bietet etwas Schutz gegen {{Glossary("CSRF", "Cross-Site-Request-Forgery-(CSRF)")}}-Angriffe. Es nimmt drei mögliche Werte an: `Strict`, `Lax` und `None`:

- `Strict` bewirkt, dass der Browser das Cookie nur als Antwort auf Anfragen sendet, die von der Ursprungsseite des Cookies stammen. Dies sollte verwendet werden, wenn Sie Cookies haben, die sich auf Funktionalitäten beziehen, die immer hinter einer anfänglichen Navigation stehen werden, wie die Authentifizierung oder das Speichern von Einkaufswageninformationen.

  ```http
  Set-Cookie: cart=110045_77895_53420; SameSite=Strict
  ```

  > [!NOTE]
  > Cookies, die für sensible Informationen verwendet werden, sollten auch eine kurze [Lebensdauer](#removal_defining_the_lifetime_of_a_cookie) haben.

- `Lax` ist ähnlich, außer dass der Browser das Cookie auch sendet, wenn der Benutzer _zur Ursprungsseite des Cookies navigiert_ (selbst wenn der Benutzer von einer anderen Site kommt). Dies ist nützlich für Cookies, die die Anzeige einer Site betreffen – zum Beispiel könnten Sie Partnerproduktinformationen zusammen mit einem Affiliate-Link auf Ihrer Website haben. Wenn dieser Link zur Partner-Website gefolgt wird, könnten diese ein Cookie setzen möchten, das besagt, dass der Affiliate-Link gefolgt wurde, was ein Prämienbanner anzeigt und einen Rabatt gewährt, falls das Produkt gekauft wird.

  ```http
  Set-Cookie: affiliate=e4rt45dw; SameSite=Lax
  ```

- `None` gibt an, dass Cookies sowohl bei Ursprungsanfragen als auch bei sitzungsübergreifenden Anfragen gesendet werden. Dies ist nützlich, wenn Sie Cookies mit Anfragen senden möchten, die von Drittanbieterinhalten in andere Sites eingebettet gemacht werden, z.B. Ad-Tech- oder Analyse-Anbietern. Beachten Sie, dass wenn `SameSite=None` gesetzt ist, auch das `Secure`-Attribut gesetzt sein muss – `SameSite=None` erfordert einen _sicheren Kontext_.

  ```http
  Set-Cookie: widget_session=7yjgj57e4n3d; SameSite=None; Secure; HttpOnly
  ```

Wenn kein `SameSite`-Attribut gesetzt ist, wird das Cookie standardmäßig als `Lax` behandelt.

### Cookie-Präfixe

Aufgrund des Designs des Cookie-Mechanismus kann ein Server nicht bestätigen, dass ein Cookie von einem sicheren Ursprung gesetzt wurde oder sogar feststellen, _wo_ ein Cookie ursprünglich gesetzt wurde.

Eine anfällige Anwendung auf einer Subdomain kann ein Cookie mit dem `Domain`-Attribut setzen, das Zugriff auf dieses Cookie auf allen anderen Subdomains gibt. Dieser Mechanismus kann in einem _Session Fixation_-Angriff missbraucht werden. Siehe [Session Fixation](/de/docs/Web/Security/Types_of_attacks#session_fixation) für primäre Gegenmaßnahmen.

Als [Sicherheitsmaßnahme zur Vergrößerung der Tiefe](<https://en.wikipedia.org/wiki/Defense_in_depth_(computing)>) können Sie jedoch _Cookie-Präfixe_ verwenden, um bestimmte Tatsachen über das Cookie zu behaupten. Zwei Präfixe sind verfügbar:

- `__Host-`: Wenn ein Cookie-Name dieses Präfix hat, wird es in einem {{HTTPHeader("Set-Cookie")}} Header nur akzeptiert, wenn es auch mit dem `Secure`-Attribut markiert ist, von einem sicheren Ursprung gesendet wurde, _kein_ `Domain`-Attribut enthält und das `Path`-Attribut auf `/` gesetzt ist. Mit anderen Worten, das Cookie ist _domain-gesperrt_.
- `__Secure-`: Wenn ein Cookie-Name dieses Präfix hat, wird es in einem {{HTTPHeader("Set-Cookie")}} Header nur akzeptiert, wenn es mit dem `Secure`-Attribut markiert ist und von einem sicheren Ursprung gesendet wurde. Dies ist schwächer als das `__Host-` Präfix.

Der Browser lehnt Cookies mit diesen Präfixen ab, die nicht ihren Einschränkungen entsprechen. Dies stellt sicher, dass Subdomain-erstellte Cookies mit Präfixen entweder auf einer Subdomain beschränkt oder komplett ignoriert werden. Da der Applikationsserver nur nach einem bestimmten Cookie-Namen sucht, wenn er feststellt, ob der Benutzer authentifiziert ist oder ob ein CSRF-Token korrekt ist, dient dies effektiv als Schutzmaßnahme gegen Session Fixation.

> [!NOTE]
> Auf dem Server _muss_ die Webanwendung den vollständigen Cookienamen einschließlich Präfix überprüfen. Benutzeragenten _entfernen_ das Präfix nicht aus dem Cookie, bevor sie es in einem {{HTTPHeader("Cookie")}} Header einer Anfrage senden.

Für weitere Informationen über Cookie-Präfixe und den aktuellen Stand der Browserunterstützung siehe den [Präfixe-Abschnitt des Set-Cookie-Referenzartikels](/de/docs/Web/HTTP/Headers/Set-Cookie#cookie_prefixes).

## Datenschutz und Tracking

Zu Beginn haben wir darüber gesprochen, wie das `SameSite`-Attribut verwendet werden kann, um zu kontrollieren, wann Drittanbieter-Cookies gesendet werden, und dass dies dazu beitragen kann, die Privatsphäre der Benutzer zu wahren. Datenschutz ist eine sehr wichtige Überlegung beim Erstellen von Websites, die, wenn sie richtig durchgeführt werden, Vertrauen bei Ihren Benutzern aufbauen können. Wenn es schlecht gemacht wird, kann es dieses Vertrauen vollständig zerstören und alle möglichen anderen Probleme verursachen.

Drittanbieter-Cookies können von Drittanbieterinhalten, die in Sites über {{htmlelement("iframe")}}s eingebettet sind, gesetzt werden. Sie haben viele legitime Verwendungen, einschließlich der Weitergabe von Benutzerprofilinformationen, der Zählung von Anzeigenaufrufen oder der Sammlung von Analysen über verschiedene verwandte Domains hinweg.

Drittanbieter-Cookies können jedoch auch verwendet werden, um gruselige, invasive Benutzererfahrungen zu schaffen. Ein Drittanbieter-Server kann basierend auf Cookies, die ihm von derselben Browsersitzung beim Zugriff auf mehrere Sites gesendet werden, ein Profil des Browserverlaufs und der -gewohnheiten eines Benutzers erstellen. Das klassische Beispiel ist, wenn Sie auf einer Site nach Produktinformationen suchen und dann von Anzeigen für ähnliche Produkte überall im Web verfolgt werden.

Browserhersteller wissen, dass Benutzer dieses Verhalten nicht mögen, und haben daher alle damit begonnen, Drittanbieter-Cookies standardmäßig zu blockieren oder zumindest Pläne in dieser Richtung gemacht. Drittanbieter-Cookies (oder einfach Tracking-Cookies) können auch durch andere Browsereinstellungen oder Erweiterungen blockiert werden.

> [!NOTE]
> Das Blockieren von Cookies kann dazu führen, dass einige Drittanbieterkomponenten (wie Social-Media-Widgets) nicht wie vorgesehen funktionieren. Da Browser zunehmend Einschränkungen für Drittanbieter-Cookies auferlegen, sollten Entwickler beginnen, Wege zu untersuchen, um ihre Abhängigkeit von ihnen zu reduzieren.

Siehe unseren Artikel [Drittanbieter-Cookies](/de/docs/Web/Privacy/Third-party_cookies) für detaillierte Informationen über Drittanbieter-Cookies, die damit verbundenen Probleme und welche Alternativen verfügbar sind. Siehe unsere [Datenschutz](/de/docs/Web/Privacy)-Landeseite für weitere Informationen zum Datenschutz im Allgemeinen.

## Cookie-bezogene Vorschriften

Gesetze oder Vorschriften, die die Verwendung von Cookies regeln, sind:

- Die [Allgemeine Datenschutzverordnung](https://gdpr.eu/) (DSGVO) in der Europäischen Union
- Die ePrivacy-Richtlinie in der EU
- Das kalifornische Verbraucherschutzgesetz

Diese Vorschriften haben weltweite Reichweite. Sie gelten für jede Site im _World Wide_ Web, die von Benutzern aus diesen Rechtsgebieten (der EU und Kalifornien, mit der Einschränkung, dass das kalifornische Gesetz nur für Unternehmen mit einem Bruttoeinkommen von über 25 Millionen USD gilt, unter anderem) aufgerufen wird.

Diese Vorschriften umfassen Anforderungen wie:

- Benachrichtigung der Benutzer, dass Ihre Site Cookies verwendet.
- Den Benutzern die Möglichkeit geben, einige oder alle Cookies abzulehnen.
- Den Benutzern erlauben, einen Großteil Ihres Dienstes ohne den Erhalt von Cookies zu nutzen.

Es kann andere Vorschriften geben, die die Verwendung von Cookies in Ihrer Gegend regeln. Es liegt in Ihrer Verantwortung, diese Vorschriften zu kennen und einzuhalten. Es gibt Unternehmen, die "Cookie-Banner"-Code anbieten, der Ihnen helfen kann, diese Vorschriften zu erfüllen.

> [!NOTE]
> Unternehmen sollten die Arten von Cookies, die sie auf ihren Websites verwenden, offenlegen, um Transparenz zu gewährleisten und Vorschriften zu erfüllen. Zum Beispiel siehe [Googles Hinweis zu den Arten von Cookies, die es verwendet](https://policies.google.com/technologies/cookies#types-of-cookies) und Mozillas [Datenschutzhinweis zu Websites, Kommunikation & Cookies](https://www.mozilla.org/en-US/privacy/websites/#cookies).

## Siehe auch

- Verwandte HTTP-Header: {{HTTPHeader("Set-Cookie")}}, {{HTTPHeader("Cookie")}}
- Verwandte JavaScript-APIs: [`Document.cookie`](/de/docs/Web/API/Document/cookie), [`Navigator.cookieEnabled`](/de/docs/Web/API/Navigator/cookieEnabled), [Cookie Store API](/de/docs/Web/API/Cookie_Store_API)
- [Drittanbieter-Cookies](/de/docs/Web/Privacy/Third-party_cookies)
- [Cookie-Spezifikation: RFC 6265](https://datatracker.ietf.org/doc/html/rfc6265)
- [Cookies, die DSGVO und die ePrivacy-Richtlinie](https://gdpr.eu/cookies/)
