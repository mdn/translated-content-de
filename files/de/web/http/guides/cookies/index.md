---
title: Verwendung von HTTP-Cookies
slug: Web/HTTP/Guides/Cookies
l10n:
  sourceCommit: b540e82db25e1b5fc7b7093575c5c0931216ca17
---

{{HTTPSidebar}}

Ein **Cookie** (auch bekannt als Web-Cookie oder Browser-Cookie) ist ein kleines Datenstück, das ein Server an den Webbrowser eines Benutzers sendet. Der Browser kann Cookies speichern, neue Cookies erstellen, bestehende ändern und sie mit späteren Anfragen an denselben Server zurücksenden. Cookies ermöglichen es Webanwendungen, begrenzte Datenmengen zu speichern und Zustandsinformationen zu behalten; standardmäßig ist das HTTP-Protokoll [zustandslos](/de/docs/Web/HTTP/Guides/Overview#http_is_stateless_but_not_sessionless).

In diesem Artikel werden wir die Hauptverwendungszwecke von Cookies erkunden, bewährte Praktiken bei ihrer Verwendung erklären und ihre Auswirkungen auf Privatsphäre und Sicherheit betrachten.

## Wofür Cookies verwendet werden

Typischerweise verwendet der Server den Inhalt von HTTP-Cookies, um zu bestimmen, ob verschiedene Anfragen vom selben Browser/Benutzer stammen, und gibt dann entweder eine personalisierte oder generische Antwort, wie es angemessen ist. Folgendes beschreibt ein einfaches Nutzeranmeldesystem:

1. Der Nutzer sendet Anmeldeinformationen an den Server, beispielsweise über ein Formular.
2. Sind die Anmeldedaten korrekt, aktualisiert der Server die Benutzeroberfläche, um anzuzeigen, dass der Nutzer angemeldet ist, und antwortet mit einem Cookie, das eine Sitzungs-ID enthält, die den Anmeldestatus im Browser speichert.
3. Später geht der Nutzer zu einer anderen Seite derselben Website. Der Browser sendet das Cookie mit der Sitzungs-ID zusammen mit der entsprechenden Anfrage, um anzuzeigen, dass er glaubt, der Nutzer sei noch angemeldet.
4. Der Server überprüft die Sitzungs-ID und sendet dem Nutzer eine personalisierte Version der neuen Seite, wenn sie noch gültig ist. Ist sie nicht gültig, wird die Sitzungs-ID gelöscht und dem Nutzer wird eine generische Version der Seite gezeigt (oder möglicherweise eine "Zugriff verweigert"-Nachricht mit der Anforderung, sich erneut anzumelden).

![Visuelle Darstellung des oben beschriebenen Anmeldesystems](cookie-basic-example.png)

Cookies werden hauptsächlich für drei Zwecke verwendet:

- **Sitzungsverwaltung**: Anmeldestatus des Nutzers, Warenkorbinhalte, Spielstände oder andere sitzungsbezogene Details, die der Server speichern muss.
- **Personalisierung**: Benutzereinstellungen wie Anzeigesprache und Benutzeroberflächenthema.
- **Verfolgung**: Aufzeichnung und Analyse des Nutzerverhaltens.

### Datenspeicherung

In den frühen Tagen des Webs, als es keine andere Möglichkeit gab, wurden Cookies für allgemeine clientseitige Datenspeicherung verwendet. Heutzutage werden moderne Speicher-APIs empfohlen, zum Beispiel die [Web Storage API](/de/docs/Web/API/Web_Storage_API) (`localStorage` und `sessionStorage`) und [IndexedDB](/de/docs/Web/API/IndexedDB_API).

Diese sind auf Datenspeicherung ausgelegt, senden niemals Daten an den Server und haben nicht die Nachteile, die die Verwendung von Cookies für die Speicherung mit sich bringt:

- Browser sind im Allgemeinen auf eine maximale Anzahl von Cookies pro Domain begrenzt (variiert je nach Browser, im Allgemeinen in den Hunderten) und auf eine maximale Größe pro Cookie (normalerweise 4KB). Speicher-APIs können größere Datenmengen speichern.
- Cookies werden mit jeder Anfrage gesendet, was die Leistung verschlechtern kann (zum Beispiel bei langsamen mobilen Datenverbindungen), insbesondere wenn viele Cookies gesetzt sind.

> [!NOTE]
> Um gespeicherte Cookies (und andere von einer Webseite verwendete Speicher) zu sehen, können Sie den [Storage Inspector](https://firefox-source-docs.mozilla.org/devtools-user/storage_inspector/index.html) in den Firefox Developer Tools oder den [Application Panel](https://developer.chrome.com/docs/devtools/progressive-web-apps) in den Chrome Developer Tools verwenden.

## Erstellen, Entfernen und Aktualisieren von Cookies

Nachdem ein HTTP-Request empfangen wurde, kann ein Server eine oder mehrere {{HTTPHeader("Set-Cookie")}} Header mit der Antwort senden, von denen jeder ein separates Cookie setzt. Ein Cookie wird durch Angabe eines Name-Wert-Paares gesetzt wie folgt:

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
> Erfahren Sie, wie Sie den `Set-Cookie` Header in verschiedenen serverseitigen Sprachen/Frameworks verwenden können: [PHP](https://www.php.net/manual/en/function.setcookie.php), [Node.js](https://nodejs.org/docs/latest-v19.x/api/http.html#responsesetheadername-value), [Python](https://docs.python.org/3/library/http.cookies.html), [Ruby on Rails](https://api.rubyonrails.org/classes/ActionDispatch/Cookies.html).

Wenn eine neue Anfrage gestellt wird, sendet der Browser normalerweise zuvor gespeicherte Cookies für die aktuelle Domain zurück an den Server innerhalb eines {{HTTPHeader("Cookie")}} HTTP-Headers:

```http
GET /sample_page.html HTTP/2.0
Host: www.example.org
Cookie: yummy_cookie=chocolate; tasty_cookie=strawberry
```

### Entfernung: Definierung der Lebensdauer eines Cookies

Sie können ein Ablaufdatum oder eine Zeitspanne festlegen, nach der das Cookie gelöscht und nicht mehr gesendet werden soll. Abhängig von den im {{HTTPHeader("Set-Cookie")}} Header festgelegten Attributen, wenn die Cookies erstellt werden, können sie entweder _permanente_ oder _Sitzungs-Cookies_ sein:

- Permanente Cookies werden nach dem in dem `Expires`-Attribut angegebenen Datum gelöscht:

  ```http
  Set-Cookie: id=a3fWa; Expires=Thu, 31 Oct 2021 07:28:00 GMT;
  ```

  oder nach der im `Max-Age`-Attribut angegebenen Zeitspanne:

  ```http
  Set-Cookie: id=a3fWa; Max-Age=2592000
  ```

  > **Hinweis:** `Expires` ist länger verfügbar als `Max-Age`, jedoch ist `Max-Age` weniger fehleranfällig und hat Vorrang, wenn beide gesetzt sind. Der Grund dafür ist, dass, wenn Sie ein `Expires`-Datum und eine -Zeit setzen, diese relativ zu dem Client sind, auf dem das Cookie gesetzt wird. Wenn der Server auf eine andere Zeit eingestellt ist, können Fehler auftreten.

- _Sitzungs-Cookies_ — Cookies ohne das `Max-Age` oder `Expires` Attribut – werden gelöscht, wenn die aktuelle Sitzung endet. Der Browser definiert, wann die "aktuelle Sitzung" endet, und einige Browser verwenden _Sitzungswiederherstellung_ beim Neustarten. Dies kann dazu führen, dass Sitzungs-Cookies unbegrenzt bestehen bleiben.

  > [!NOTE]
  > Wenn Ihre Seite Benutzer authentifiziert, sollte sie Sitzungs-Cookies, auch solche, die bereits existieren, erneut generieren und senden, sobald sich ein Benutzer authentifiziert. Dieser Ansatz hilft, [Sitzungsfixierungsangriffe](/de/docs/Web/Security/Types_of_attacks#session_fixation) zu verhindern, bei denen ein Dritter die Sitzung eines Nutzers erneut verwenden kann.

Es gibt einige Techniken, die darauf abzielen, Cookies wiederherzustellen, nachdem sie gelöscht wurden. Diese werden als "Zombie-Cookies" bezeichnet. Diese Techniken verletzen die Prinzipien der Benutzer-[Privatsphäre](#privatsphäre_und_verfolgung) und Kontrolle, könnten [Datenschutzvorschriften](#cookie-bezogene_vorschriften) verletzen und eine Website, die sie verwendet, rechtlichen Risiken aussetzen.

### Aktualisieren von Cookie-Werten

Um ein Cookie über HTTP zu aktualisieren, kann der Server einen {{HTTPHeader("Set-Cookie")}} Header mit dem Namen des bestehenden Cookies und einem neuen Wert senden. Beispielsweise:

```http
Set-Cookie: id=new-value
```

Es gibt mehrere Gründe, warum Sie dies tun möchten, zum Beispiel wenn ein Benutzer seine Präferenzen aktualisiert hat und die Anwendung die Änderungen in clientseitigen Daten widerspiegeln möchte (Sie könnten dies auch mit einem clientseitigen Speichermedium wie [Web Storage](/de/docs/Web/API/Web_Storage_API) tun).

#### Aktualisierung von Cookies über JavaScript

Im Browser können Sie neue Cookies über JavaScript mit der [`Document.cookie`](/de/docs/Web/API/Document/cookie) Eigenschaft oder der asynchronen [Cookie Store API](/de/docs/Web/API/Cookie_Store_API) erstellen. Beachten Sie, dass alle folgenden Beispiele `Document.cookie` verwenden, da es die am weitesten unterstützte/etablierte Option ist.

```js
document.cookie = "yummy_cookie=chocolate";
document.cookie = "tasty_cookie=strawberry";
```

Sie können auch auf bestehende Cookies zugreifen und ihnen neue Werte zuweisen, vorausgesetzt, das [`HttpOnly`](/de/docs/Web/HTTP/Reference/Headers/Set-Cookie#httponly) Attribut ist nicht auf ihnen gesetzt (d.h. im `Set-Cookie` Header, der es erstellt hat):

```js
console.log(document.cookie);
// logs "yummy_cookie=chocolate; tasty_cookie=strawberry"

document.cookie = "yummy_cookie=blueberry";

console.log(document.cookie);
// logs "tasty_cookie=strawberry; yummy_cookie=blueberry"
```

Beachten Sie, dass Sie aus Sicherheitsgründen Cookie-Werte nicht durch das Senden eines aktualisierten `Cookie`-Headers direkt bei einer Anfrage ändern können, z.B. über [`fetch()`](/de/docs/Web/API/Window/fetch) oder [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest). Beachten Sie, dass es auch gute Gründe gibt, warum Sie JavaScript nicht erlauben sollten, Cookies zu ändern — d.h. `HttpOnly` während der Erstellung zu setzen. Siehe den Abschnitt [Sicherheit](#sicherheit) für weitere Details.

## Sicherheit

Wenn Sie Informationen in Cookies speichern, sind standardmäßig alle Cookie-Werte für den Endbenutzer sichtbar und können von ihm geändert werden. Sie möchten nicht, dass Ihre Cookies missbraucht werden, beispielsweise von böswilligen Akteuren auf sie zugegriffen/änderet werden oder an Domains gesendet werden, an die sie nicht gesendet werden sollten. Die potenziellen Konsequenzen können von ärgerlich – Apps, die nicht funktionieren oder sich seltsam verhalten – bis katastrophal reichen. Ein Krimineller könnte beispielsweise eine Sitzungs-ID stehlen und sie nutzen, um ein Cookie zu setzen, das es so aussehen lässt, als wäre er als jemand anderes eingeloggt, und so die Kontrolle über dessen Bank- oder E-Commerce-Konto übernehmen.

Sie können Ihre Cookies auf verschiedene Arten sichern, die in diesem Abschnitt überprüft werden.

### Zugang zu Ihren Cookies blockieren

Sie können sicherstellen, dass Cookies sicher gesendet und nicht von unbeabsichtigten Parteien oder Scripts abgerufen werden können, auf zwei Arten: mit dem `Secure` Attribut und dem `HttpOnly` Attribut:

```http
Set-Cookie: id=a3fWa; Expires=Thu, 21 Oct 2021 07:28:00 GMT; Secure; HttpOnly
```

- Ein Cookie mit dem `Secure` Attribut wird nur mit einer verschlüsselten Anfrage über das HTTPS-Protokoll an den Server gesendet. Es wird nie mit ungesichertem HTTP gesendet (außer auf localhost), was bedeutet, dass {{Glossary("MitM", "Man-in-the-Middle")}} Angreifer nicht leicht darauf zugreifen können. Unsichere Seiten (mit `http:` in der URL) können keine Cookies mit dem `Secure` Attribut setzen. Allerdings sollten Sie nicht davon ausgehen, dass `Secure` alle Zugriffe auf sensible Informationen in Cookies verhindert. Zum Beispiel kann jemand mit Zugriff auf die Festplatte des Clients (oder JavaScript, wenn das `HttpOnly` Attribut nicht gesetzt ist) die Informationen lesen und ändern.

- Ein Cookie mit dem `HttpOnly` Attribut kann nicht durch JavaScript, z.B. mit [`Document.cookie`](/de/docs/Web/API/Document/cookie), abgerufen werden; es kann nur erreicht werden, wenn es den Server erreicht. Cookies, die Benutzersitzungen aufrechterhalten, sollten beispielsweise das `HttpOnly` Attribut gesetzt haben — es wäre wirklich unsicher, sie JavaScript zur Verfügung zu stellen. Diese Vorsichtsmaßnahme hilft, Cross-Site-Scripting ([XSS](/de/docs/Web/Security/Types_of_attacks#cross-site_scripting_xss)) Angriffe zu minimieren.

> [!NOTE]
> Je nach der Anwendung möchten Sie möglicherweise einen undurchsichtigen Bezeichner verwenden, den der Server nachschlägt, anstatt sensible Informationen direkt in Cookies zu speichern, oder alternative Authentifizierungs-/Vertraulichkeitsmechanismen wie [JSON Web Tokens](https://jwt.io/) untersuchen.

### Definieren, wohin Cookies gesendet werden

Die `Domain` und `Path` Attribute definieren den _Geltungsbereich_ eines Cookies: an welche URLs die Cookies gesendet werden.

- Das `Domain` Attribut gibt an, welcher Server ein Cookie empfangen kann. Wenn angegeben, sind Cookies auf dem angegebenen Server und seinen Subdomains verfügbar. Wenn Sie beispielsweise `Domain=mozilla.org` von `mozilla.org` setzen, sind Cookies auf dieser Domain und Subdomains wie `developer.mozilla.org` verfügbar.

  ```http
  Set-Cookie: id=a3fWa; Expires=Thu, 21 Oct 2021 07:28:00 GMT; Secure; HttpOnly; Domain=mozilla.org
  ```

  Wenn der `Set-Cookie` Header kein `Domain` Attribut angibt, sind die Cookies auf dem Server verfügbar, der sie setzt, _aber nicht auf seinen Subdomains_. Daher ist die Angabe von `Domain` weniger restriktiv, als sie wegzulassen.
  Beachten Sie, dass ein Server das `Domain` Attribut nur auf seine eigene Domain oder eine übergeordnete Domain setzen kann, nicht auf eine Subdomain oder eine andere Domain.
  So könnte ein Server mit der Domain `foo.example.com` das Attribut auf `example.com` oder `foo.example.com` setzen, aber nicht auf `bar.foo.example.com` oder `elsewhere.com` (die Cookies würden aber weiterhin an Subdomains wie `bar.foo.example.com` gesendet).
  Details finden Sie unter [Ungültige Domains](/de/docs/Web/HTTP/Reference/Headers/Set-Cookie#invalid_domains).

- Das `Path` Attribut gibt einen URL-Pfad an, der in der angeforderten URL existieren muss, um den `Cookie` Header zu senden. Zum Beispiel:

  ```http
  Set-Cookie: id=a3fWa; Expires=Thu, 21 Oct 2021 07:28:00 GMT; Secure; HttpOnly; Path=/docs
  ```

  Das `%x2F` ("/") Zeichen wird als Verzeichnis-Trenner betrachtet und auch Unterverzeichnisse stimmen überein. Wenn Sie beispielsweise `Path=/docs` setzen, stimmen diese Anforderungs-Pfade überein:

  - `/docs`
  - `/docs/`
  - `/docs/Web/`
  - `/docs/Web/HTTP`

  Aber diese Anforderungs-Pfade nicht:

  - `/`
  - `/docsets`
  - `/fr/docs`

  > [!NOTE]
  > Das `path` Attribut lässt Sie kontrollieren, welche Cookies der Browser basierend auf den verschiedenen Teilen einer Website sendet.
  > Es ist nicht als Sicherheitsmaßnahme gedacht und [schützt nicht](/de/docs/Web/API/Document/cookie#security) gegen unbefugten Zugriff auf das Cookie von einem anderen Pfad.

### Kontrolle von Drittanbieter-Cookies mit `SameSite`

Das [`SameSite`](/de/docs/Web/HTTP/Reference/Headers/Set-Cookie#samesitesamesite-value) Attribut lässt Server angeben, ob/wann Cookies mit Cross-Site-Anfragen gesendet werden — also [Drittanbieter-Cookies](/de/docs/Web/Privacy/Guides/Third-party_cookies). Cross-Site-Anfragen sind Anfragen, bei denen die {{Glossary("Site", "Seite")}} (die registrierbare Domain) und/oder das Schema (http oder https) nicht mit der Seite übereinstimmen, die der Nutzer derzeit besucht. Dazu gehören Anfragen, die gesendet werden, wenn Links auf anderen Seiten angeklickt werden, um zu Ihrer Seite zu navigieren, und jede Anfrage, die von eingebetteten Drittanbieter-Inhalten gesendet wird.

`SameSite` hilft, den Informationsaustritt zu verhindern, die Benutzer-[Privatsphäre](#privatsphäre_und_verfolgung) zu wahren und bietet einen gewissen Schutz vor {{Glossary("CSRF", "Cross-Site-Request-Forgery")}} Angriffen. Es hat drei mögliche Werte: `Strict`, `Lax` und `None`:

- `Strict` veranlasst den Browser, das Cookie nur als Antwort auf Anfragen zu senden, die von der Herkunftsseite des Cookies stammen. Dies sollte verwendet werden, wenn Sie Cookies in Verbindung mit Funktionen haben, die immer hinter einer ersten Navigation stehen, wie z.B. Authentifizierung oder das Speichern von Warenkorbinformationen.

  ```http
  Set-Cookie: cart=110045_77895_53420; SameSite=Strict
  ```

  > [!NOTE]
  > Cookies, die für sensible Informationen verwendet werden, sollten ebenfalls eine kurze [Lebensdauer](#removal_defining_the_lifetime_of_a_cookie) haben.

- `Lax` ist ähnlich, außer dass der Browser das Cookie auch sendet, wenn der Nutzer zur Herkunftsseite des Cookies _navigiert_ (auch wenn der Nutzer von einer anderen Seite kommt). Dies ist nützlich für Cookies, die sich auf die Darstellung einer Seite auswirken — zum Beispiel könnten Sie Produktinformationen eines Partners zusammen mit einem Affiliate-Link auf Ihrer Website haben. Wenn diesem Link zum Partner-Website gefolgt wird, möchten diese möglicherweise ein Cookie setzen, das besagt, dass der Affiliate-Link gefolgt wurde und ein Belohnungsbanner anzeigt sowie einen Rabatt gewährt, wenn das Produkt gekauft wird.

  ```http
  Set-Cookie: affiliate=e4rt45dw; SameSite=Lax
  ```

- `None` gibt an, dass Cookies sowohl bei ursprünglichen als auch bei Cross-Site-Anfragen gesendet werden. Dies ist nützlich, wenn Sie Cookies zusammen mit Anfragen senden möchten, die von in anderen Seiten eingebetteten Drittanbieter-Inhalten gesendet werden, z.B. Ad-Tech oder Analyseanbieter. Beachten Sie, dass, wenn `SameSite=None` gesetzt ist, auch das `Secure` Attribut gesetzt werden muss — `SameSite=None` erfordert einen _sicheren Kontext_.

  ```http
  Set-Cookie: widget_session=7yjgj57e4n3d; SameSite=None; Secure; HttpOnly
  ```

Wenn kein `SameSite` Attribut gesetzt wird, wird das Cookie standardmäßig als `Lax` behandelt.

### Cookie-Präfixe

Aufgrund des Designs des Cookie-Mechanismus kann ein Server nicht bestätigen, dass ein Cookie aus einem sicheren Ursprung gesetzt wurde oder sogar feststellen, _wo_ ein Cookie ursprünglich gesetzt wurde.

Eine verwundbare Anwendung auf einer Subdomain kann ein Cookie mit dem `Domain` Attribut setzen, das diesen Cookie auf allen anderen Subdomains verfügbar macht. Dieser Mechanismus kann in einem _Sitzungsfixierungsangriff_ ausgenutzt werden. Siehe [Sitzungsfixierung](/de/docs/Web/Security/Types_of_attacks#session_fixation) für primäre Abwehrmethoden.

Als eine [Verteidigungsmaßnahme in die Tiefe](<https://en.wikipedia.org/wiki/Defense_in_depth_(computing)>) können Sie jedoch _Cookie-Präfixe_ verwenden, um bestimmte Fakten über das Cookie zu behaupten. Zwei Präfixe sind verfügbar:

- `__Host-`: Wenn ein Cookie-Name dieses Präfix hat, wird es nur in einem {{HTTPHeader("Set-Cookie")}} Header akzeptiert, wenn es auch mit dem `Secure` Attribut markiert ist, von einem sicheren Ursprung gesendet wurde, _kein_ `Domain` Attribut enthält und das `Path` Attribut auf `/` gesetzt ist. Mit anderen Worten, das Cookie ist _domain-locked_.
- `__Secure-`: Wenn ein Cookie-Name dieses Präfix hat, wird es nur in einem {{HTTPHeader("Set-Cookie")}} Header akzeptiert, wenn es mit dem `Secure` Attribut markiert ist und von einem sicheren Ursprung gesendet wurde. Dies ist schwächer als das `__Host-` Präfix.

Der Browser wird Cookies mit diesen Präfixen, die nicht ihren Einschränkungen entsprechen, ablehnen. Dies stellt sicher, dass von Subdomains erstellte Cookies mit Präfixen entweder auf eine Subdomain beschränkt sind oder vollständig ignoriert werden. Da der Anwendungsserver nur auf einen bestimmten Cookie-Namen prüft, wenn er bestimmt, ob der Benutzer authentifiziert ist oder ein CSRF-Token korrekt ist, wirkt dies effektiv als Abwehrmaßnahme gegen Sitzungsfixierung.

> [!NOTE]
> Auf dem Server _muss_ die Webanwendung den vollständigen Cookie-Namen einschließlich des Präfixes überprüfen. Benutzeragenten _entfernen nicht_ das Präfix vom Cookie, bevor sie es in einem {{HTTPHeader("Cookie")}} Header einer Anfrage senden.

Für weitere Informationen zu Cookie-Präfixen und dem aktuellen Stand der Browserunterstützung, siehe den [Präfixe-Abschnitt des Set-Cookie-Referenzartikels](/de/docs/Web/HTTP/Reference/Headers/Set-Cookie#cookie_prefixes).

## Privatsphäre und Verfolgung

Vorher haben wir darüber gesprochen, wie das `SameSite` Attribut verwendet werden kann, um zu steuern, wann Drittanbieter-Cookies gesendet werden, und dass dies dazu beitragen kann, die Benutzerprivatsphäre zu wahren. Privatsphäre ist ein sehr wichtiger Aspekt beim Erstellen von Websites, der, wenn richtig gemacht, Vertrauen bei Ihren Nutzern aufbauen kann. Wenn er schlecht gemacht wird, kann er dieses Vertrauen völlig untergraben und alle Arten von anderen Problemen verursachen.

Drittanbieter-Cookies können durch externe Inhalte gesetzt werden, die in Seiten über {{htmlelement("iframe")}}s eingebettet sind. Sie haben viele legitime Verwendungszwecke, einschließlich der gemeinsamen Nutzung von Benutzerprofileinformationen, das Zählen von Werbeanzeigen oder das Sammeln von Analysedaten über verschiedene verwandte Domains.

Drittanbieter-Cookies können jedoch auch verwendet werden, um unheimliche, eindringliche Benutzererfahrungen zu schaffen. Ein externer Server kann ein Profil des Browserverlaufs und der Gewohnheiten eines Nutzers basierend auf den Cookies erstellen, die durch denselben Browser beim Zugriff auf mehrere Seiten gesendet werden. Das klassische Beispiel ist, wenn Sie auf einer Seite nach Produktinformationen suchen und dann von Anzeigen für ähnliche Produkte überall im Web verfolgt werden.

Browseranbieter wissen, dass Benutzer dieses Verhalten nicht mögen, und infolgedessen haben alle begonnen, Drittanbieter-Cookies standardmäßig zu blockieren oder zumindest Pläne, in diese Richtung zu gehen. Drittanbieter-Cookies (oder einfach Tracking-Cookies) können auch durch andere Browser-Einstellungen oder Erweiterungen blockiert werden.

> [!NOTE]
> Das Blockieren von Cookies kann dazu führen, dass einige Drittanbieter-Komponenten (wie soziale Medien-Widgets) nicht wie vorgesehen funktionieren. Da Browser weitere Einschränkungen für Drittanbieter-Cookies auferlegen, sollten Entwickler beginnen, nach Wegen zu suchen, ihre Abhängigkeit von ihnen zu reduzieren.

Sehen Sie sich unseren [Artikel über Drittanbieter-Cookies](/de/docs/Web/Privacy/Guides/Third-party_cookies) für detaillierte Informationen zu Drittanbieter-Cookies, den damit verbundenen Problemen und den verfügbaren Alternativen an. Besuchen Sie unsere [Privatsphäre](/de/docs/Web/Privacy) Startseite für weitere Informationen zur Privatsphäre im Allgemeinen.

## Cookie-bezogene Vorschriften

Gesetze oder Vorschriften, die die Verwendung von Cookies regeln, schließen ein:

- Die [Datenschutz-Grundverordnung](https://gdpr.eu/) (DSGVO) in der Europäischen Union
- Die ePrivacy-Richtlinie in der EU
- Das kalifornische Verbraucherschutzgesetz

Diese Vorschriften haben globale Reichweite. Sie gelten für jede Seite im _World Wide_ Web, die von Benutzern aus diesen Jurisdiktionen aufgerufen wird (die EU und Kalifornien, mit der Einschränkung, dass Kaliforniens Gesetz nur auf Unternehmen mit einem Bruttoeinkommen von über 25 Millionen USD, unter anderem, anwendbar ist).

Diese Vorschriften beinhalten Anforderungen wie:

- Benutzer darüber zu informieren, dass Ihre Seite Cookies verwendet.
- Den Benutzern zu ermöglichen, das Empfangen einiger oder aller Cookies abzulehnen.
- Den Benutzern zu erlauben, den Großteil Ihres Dienstes ohne den Empfang von Cookies zu nutzen.

Es kann andere Vorschriften geben, die die Verwendung von Cookies an Ihrem Standort regeln. Es liegt in Ihrer Verantwortung, diese Vorschriften zu kennen und einzuhalten. Es gibt Unternehmen, die "Cookie-Banner"-Code bieten, der Ihnen hilft, diese Vorschriften einzuhalten.

> [!NOTE]
> Unternehmen sollten die Arten von Cookies, die sie auf ihren Seiten verwenden, zur Transparenz und zur Einhaltung von Vorschriften offenlegen. Beispielsweise siehe [Googles Anmerkung zu den Arten von Cookies, die es verwendet](https://policies.google.com/technologies/cookies#types-of-cookies) und Mozillas [Datenschutzhinweis zu Websites, Kommunikation und Cookies](https://www.mozilla.org/en-US/privacy/websites/#cookies).

## Siehe auch

- Verwandte HTTP-Header: {{HTTPHeader("Set-Cookie")}}, {{HTTPHeader("Cookie")}}
- Verwandte JavaScript-APIs: [`Document.cookie`](/de/docs/Web/API/Document/cookie), [`Navigator.cookieEnabled`](/de/docs/Web/API/Navigator/cookieEnabled), [Cookie Store API](/de/docs/Web/API/Cookie_Store_API)
- [Drittanbieter-Cookies](/de/docs/Web/Privacy/Guides/Third-party_cookies)
- [Cookie-Spezifikation: RFC 6265](https://datatracker.ietf.org/doc/html/rfc6265)
- [Cookies, die DSGVO und die ePrivacy-Richtlinie](https://gdpr.eu/cookies/)
