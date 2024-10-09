---
title: Verwendung von HTTP-Cookies
slug: Web/HTTP/Cookies
l10n:
  sourceCommit: 783ffd9c1cf35421242e028a1b8743cf2b1918dd
---

{{HTTPSidebar}}

Ein **Cookie** (auch Web-Cookie oder Browser-Cookie genannt) ist ein kleines Datenstück, das ein Server an den Webbrowser eines Nutzers sendet. Der Browser kann Cookies speichern, neue Cookies erstellen, bestehende verändern und sie bei späteren Anfragen wieder an den gleichen Server senden. Cookies ermöglichen es Webanwendungen, begrenzte Datenmengen zu speichern und Statusinformationen zu merken; standardmäßig ist das HTTP-Protokoll [zustandslos](/de/docs/Web/HTTP/Overview#http_is_stateless_but_not_sessionless).

In diesem Artikel werden wir die Hauptverwendungen von Cookies erkunden, Best Practices für deren Verwendung erklären und ihre Auswirkungen auf Datenschutz und Sicherheit betrachten.

## Wofür Cookies verwendet werden

Normalerweise nutzt der Server die Inhalte von HTTP-Cookies, um festzustellen, ob verschiedene Anfragen vom gleichen Browser/Nutzer stammen, und gibt dann eine personalisierte oder generische Antwort, wie es angemessen ist. Im Folgenden wird ein sehr einfaches Benutzeranmeldesystem beschrieben:

1. Der Benutzer sendet Anmeldedaten an den Server, beispielsweise über die Übermittlung eines Formulars.
2. Wenn die Anmeldedaten korrekt sind, aktualisiert der Server die Benutzeroberfläche, um anzuzeigen, dass der Benutzer angemeldet ist, und antwortet mit einem Cookie, das eine Sitzungs-ID enthält, welche ihren Anmeldestatus im Browser speichert.
3. Zu einem späteren Zeitpunkt wechselt der Benutzer zu einer anderen Seite auf derselben Website. Der Browser sendet das Cookie mit der Sitzungs-ID zusammen mit der entsprechenden Anfrage, um anzuzeigen, dass er davon ausgeht, dass der Benutzer noch angemeldet ist.
4. Der Server überprüft die Sitzungs-ID und, falls sie noch gültig ist, sendet er dem Benutzer eine personalisierte Version der neuen Seite. Wenn sie nicht mehr gültig ist, wird die Sitzungs-ID gelöscht und der Benutzer sieht eine generische Version der Seite (oder eventuell wird ihm eine "Zugriff verweigert"-Meldung angezeigt und er wird gebeten, sich erneut anzumelden).

![Visuelle Darstellung des oben beschriebenen Anmeldesystems](cookie-basic-example.png)

Cookies werden hauptsächlich für drei Zwecke verwendet:

- **Sitzungsmanagement**: Anmeldestatus des Benutzers, Warenkorbinhalte, Spielergebnisse oder andere benutzersitzungsbezogene Details, die sich der Server merken muss.
- **Personalisierung**: Benutzervorlieben wie Anzeigesprache und UI-Thema.
- **Tracking**: Aufzeichnung und Analyse des Benutzerverhaltens.

### Datenspeicherung

In den frühen Tagen des Webs, als es keine andere Möglichkeit gab, wurden Cookies für allgemeine clientseitige Datenspeicherzwecke verwendet. Moderne Speicher-APIs werden jetzt empfohlen, zum Beispiel die [Web Storage API](/de/docs/Web/API/Web_Storage_API) (`localStorage` und `sessionStorage`) und [IndexedDB](/de/docs/Web/API/IndexedDB_API).

Sie sind zum Speichern ausgelegt, senden keine Daten an den Server und haben nicht die weiteren Nachteile von Cookies als Speicher:

- Browser sind im Allgemeinen auf eine maximale Anzahl von Cookies pro Domain beschränkt (je nach Browser variierend, meistens in den Hunderten) und eine maximale Größe pro Cookie (normalerweise 4KB). Speicher-APIs können größere Datenmengen speichern.
- Cookies werden mit jeder Anfrage gesendet, was die Performance verschlechtern kann (zum Beispiel bei langsamen mobilen Datenverbindungen), insbesondere wenn viele Cookies festgelegt sind.

> [!NOTE]
> Um gespeicherte Cookies (und andere Speicher, die eine Webseite verwendet) zu sehen, können Sie den [Storage Inspector](https://firefox-source-docs.mozilla.org/devtools-user/storage_inspector/index.html) in den Firefox Developer Tools oder das [Anwendungs-Panel](https://developer.chrome.com/docs/devtools/progressive-web-apps) in den Chrome Developer Tools verwenden.

## Erstellen, Entfernen und Aktualisieren von Cookies

Nachdem eine HTTP-Anfrage eingegangen ist, kann ein Server eine oder mehrere {{HTTPHeader("Set-Cookie")}}-Header mit der Antwort senden, wobei jeder einen separaten Cookie festlegt. Ein einfaches Cookie wird durch die Angabe eines Name-Wert-Paares wie folgt festgelegt:

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
> Erfahren Sie, wie Sie den `Set-Cookie`-Header in verschiedenen serverseitigen Sprachen/Frameworks verwenden: [PHP](https://www.php.net/manual/de/function.setcookie.php), [Node.JS](https://nodejs.org/dist/latest-v14.x/docs/api/http.html#http_response_setheader_name_value), [Python](https://docs.python.org/3/library/http.cookies.html), [Ruby on Rails](https://api.rubyonrails.org/classes/ActionDispatch/Cookies.html).

Wenn eine neue Anfrage gestellt wird, sendet der Browser normalerweise zuvor gespeicherte Cookies für die aktuelle Domain an den Server innerhalb eines {{HTTPHeader("Cookie")}}-HTTP-Headers zurück:

```http
GET /sample_page.html HTTP/2.0
Host: www.example.org
Cookie: yummy_cookie=chocolate; tasty_cookie=strawberry
```

### Entfernung: Bestimmen der Lebensdauer eines Cookies

Sie können ein Ablaufdatum oder eine Zeitperiode angeben, nach der das Cookie gelöscht und nicht mehr gesendet werden soll. Je nach den Attributen, die im {{HTTPHeader("Set-Cookie")}}-Header festgelegt sind, als die Cookies erstellt werden, können sie entweder _permanente_ oder _Sitzungs_-Cookies sein:

- Permanente Cookies werden nach dem im `Expires`-Attribut angegebenen Datum gelöscht:

  ```http
  Set-Cookie: id=a3fWa; Expires=Thu, 31 Oct 2021 07:28:00 GMT;
  ```

  oder nach der im `Max-Age`-Attribut angegebenen Zeitspanne:

  ```http
  Set-Cookie: id=a3fWa; Max-Age=2592000
  ```

  > **Hinweis:** `Expires` ist länger verfügbar als `Max-Age`, jedoch ist `Max-Age` weniger fehleranfällig und hat Vorrang, wenn beide gesetzt sind. Der Grund dafür ist, dass beim Setzen eines `Expires`-Datums und einer -Zeit diese relativ zum Client sind, auf dem das Cookie gesetzt wird. Wenn der Server anders eingestellt ist, kann dies zu Fehlern führen.

- _Sitzungs_-Cookies — Cookies ohne ein `Max-Age`- oder `Expires`-Attribut – werden gelöscht, wenn die aktuelle Sitzung endet. Der Browser definiert, wann die "aktuelle Sitzung" endet, und einige Browser verwenden _Sitzungswiederherstellung_ beim Neustart. Dies kann dazu führen, dass Sitzungscookies unbegrenzt gelten.

  > [!NOTE]
  > Wenn Ihre Seite Benutzer authentifiziert, sollte sie Sitzungscookies neu generieren und erneut senden, auch solche, die bereits existieren, wann immer ein Benutzer authentifiziert wird. Dieser Ansatz hilft, [Sitzungsfixierungsangriffe](/de/docs/Web/Security/Types_of_attacks#session_fixation) zu verhindern, bei denen ein Dritter die Sitzung eines Benutzers erneut verwenden kann.

Es gibt einige Techniken, die darauf abzielen, Cookies nach ihrer Löschung wiederherzustellen. Diese werden als "Zombie"-Cookies bezeichnet. Diese Techniken verletzen die Prinzipien des Benutzer-[datenschutzes](#datenschutz_und_verfolgung) und der Kontrolle, können gegen [Datenschutzbestimmungen](#cookie_related_regulations) verstoßen und könnten eine Website, die sie verwendet, rechtlichen Risiken aussetzen.

### Aktualisieren von Cookie-Werten

Um ein Cookie über HTTP zu aktualisieren, kann der Server einen {{HTTPHeader("Set-Cookie")}}-Header mit dem bestehenden Cookie-Namen und einem neuen Wert senden. Zum Beispiel:

```http
Set-Cookie: id=new-value
```

Es gibt mehrere Gründe, warum Sie dies tun könnten, z. B. wenn ein Benutzer seine Präferenzen aktualisiert hat und die Anwendung die Änderungen in den clientseitigen Daten widerspiegeln möchte (Sie könnten dies auch mit einem clientseitigen Speichermedium wie [Web Storage](/de/docs/Web/API/Web_Storage_API) tun).

#### Aktualisieren von Cookies über JavaScript

Im Browser können Sie neue Cookies über JavaScript mit der [`Document.cookie`](/de/docs/Web/API/Document/cookie)-Eigenschaft oder der asynchronen [Cookie Store API](/de/docs/Web/API/Cookie_Store_API) erstellen. Beachten Sie, dass alle untenstehenden Beispiele `Document.cookie` verwenden, da es die am weitesten unterstützte/etablierte Option ist.

```js
document.cookie = "yummy_cookie=chocolate";
document.cookie = "tasty_cookie=strawberry";
```

Sie können auch auf bestehende Cookies zugreifen und neue Werte für sie festlegen, vorausgesetzt, das [`HttpOnly`](/de/docs/Web/HTTP/Headers/Set-Cookie#httponly)-Attribut ist bei ihnen nicht gesetzt (d. h., im `Set-Cookie`-Header, der es erstellt hat):

```js
console.log(document.cookie);
// logs "yummy_cookie=chocolate; tasty_cookie=strawberry"

document.cookie = "yummy_cookie=blueberry";

console.log(document.cookie);
// logs "tasty_cookie=strawberry; yummy_cookie=blueberry"
```

Beachten Sie, dass Sie aus Sicherheitsgründen keine Cookie-Werte ändern können, indem Sie beim Initiieren einer Anfrage direkt einen aktualisierten `Cookie`-Header senden, z. B. über [`fetch()`](/de/docs/Web/API/Window/fetch) oder [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest). Beachten Sie, dass es auch gute Gründe gibt, warum Sie JavaScript nicht erlauben sollten, Cookies zu modifizieren – z. B. setzen Sie `HttpOnly` bei der Erstellung. Weitere Einzelheiten finden Sie im Abschnitt [Sicherheit](#sicherheit).

## Sicherheit

Wenn Sie Informationen in Cookies speichern, sind standardmäßig alle Cookie-Werte für den Endbenutzer sichtbar und veränderbar. Sie möchten wirklich nicht, dass Ihre Cookies missbraucht werden — beispielsweise von böswilligen Akteuren zugegriffen/geändert werden oder an Domains gesendet werden, wo sie nicht gesendet werden sollten. Die potenziellen Konsequenzen können von ärgerlich — Apps funktionieren nicht oder zeigen seltsames Verhalten — bis katastrophal reichen. Ein Krimineller könnte beispielsweise eine Sitzungs-ID stehlen und sie verwenden, um ein Cookie zu setzen, das aussehen lässt, als ob er als jemand anderes angemeldet wäre, und dadurch die Kontrolle über das Bank- oder E-Commerce-Konto dieser Person übernehmen.

Sie können Ihre Cookies auf verschiedene Weisen sichern, die in diesem Abschnitt überprüft werden.

### Blockieren des Zugriffs auf Ihre Cookies

Sie können sicherstellen, dass Cookies sicher gesendet und nicht von ungewollten Parteien oder Skripten abgerufen werden, auf zwei Arten: mit dem `Secure`-Attribut und dem `HttpOnly`-Attribut:

```http
Set-Cookie: id=a3fWa; Expires=Thu, 21 Oct 2021 07:28:00 GMT; Secure; HttpOnly
```

- Ein Cookie mit dem `Secure`-Attribut wird nur mit einer verschlüsselten Anfrage über das HTTPS-Protokoll an den Server gesendet. Es wird nie mit unsicherem HTTP (außer auf localhost) gesendet, was bedeutet, dass {{Glossary("MitM", "Man-in-the-Middle")}}-Angreifer nicht leicht darauf zugreifen können. Unsichere Seiten (mit `http:` in der URL) können keine Cookies mit dem `Secure`-Attribut setzen. Jedoch sollten Sie nicht davon ausgehen, dass `Secure` alle Zugriffe auf sensible Informationen in Cookies verhindert. Beispielsweise kann jemand mit Zugriff auf die Festplatte des Clients (oder JavaScript, wenn das `HttpOnly`-Attribut nicht gesetzt ist) die Informationen lesen und ändern.

- Ein Cookie mit dem `HttpOnly`-Attribut kann nicht von JavaScript geändert werden, z. B. mit [`Document.cookie`](/de/docs/Web/API/Document/cookie); es kann nur geändert werden, wenn es den Server erreicht. Cookies, die Benutzersitzungen aufrechterhalten, sollten beispielsweise das `HttpOnly`-Attribut gesetzt haben — es wäre wirklich unsicher, sie JavaScript zur Verfügung zu stellen. Diese Vorsichtsmaßnahme hilft, Cross-Site Scripting ([XSS](/de/docs/Web/Security/Types_of_attacks#cross-site_scripting_xss))-Angriffe zu mindern.

> [!NOTE]
> Je nach Anwendung möchten Sie vielleicht einen opaken Bezeichner verwenden, den der Server nachschlägt, anstatt sensible Informationen direkt in Cookies zu speichern, oder alternative Authentifizierungs-/Vertraulichkeitsmechanismen wie [JSON Web Tokens](https://jwt.io/) untersuchen.

### Bestimmen, wohin Cookies gesendet werden

Die `Domain`- und `Path`-Attribute definieren den _Geltungsbereich_ eines Cookies: an welche URLs die Cookies gesendet werden.

- Das `Domain`-Attribut gibt an, welcher Server ein Cookie empfangen kann. Wenn angegeben, sind Cookies auf dem angegebenen Server und dessen Subdomains verfügbar. Zum Beispiel, wenn Sie `Domain=mozilla.org` von `mozilla.org` festlegen, sind Cookies auf dieser Domain und Unterdomänen wie `developer.mozilla.org` verfügbar.

  ```http
  Set-Cookie: id=a3fWa; Expires=Thu, 21 Oct 2021 07:28:00 GMT; Secure; HttpOnly; Domain=mozilla.org
  ```

  Wenn der `Set-Cookie`-Header kein `Domain`-Attribut angibt, sind die Cookies auf dem Server verfügbar, der es festlegt, _aber nicht auf seinen Subdomains_. Daher ist die Angabe von `Domain` weniger restriktiv, als es wegzulassen. Beachten Sie, dass ein Server das `Domain`-Attribut nur auf seine eigene Domain oder eine übergeordnete Domain setzen kann, nicht auf eine Subdomain oder eine andere Domain. Ein Server mit der Domain `foo.example.com` könnte das Attribut also auf `example.com` oder `foo.example.com` setzen, aber nicht auf `bar.foo.example.com` oder `elsewhere.com` (die Cookies würden jedoch immer noch an Subdomains wie `bar.foo.example.com` _gesendet_ werden).
  Siehe [Ungültige Domains](/de/docs/Web/HTTP/Headers/Set-Cookie#invalid_domains) für weitere Details.

- Das `Path`-Attribut gibt einen URL-Pfad an, der in der angeforderten URL existieren muss, damit der `Cookie`-Header gesendet wird. Zum Beispiel:

  ```http
  Set-Cookie: id=a3fWa; Expires=Thu, 21 Oct 2021 07:28:00 GMT; Secure; HttpOnly; Path=/docs
  ```

  Das `%x2F` ("/")-Zeichen wird als Verzeichnistrennzeichen betrachtet, und Unterverzeichnisse stimmen ebenfalls überein. Zum Beispiel, wenn Sie `Path=/docs` festlegen, stimmen diese Anforderungspfade überein:

  - `/docs`
  - `/docs/`
  - `/docs/Web/`
  - `/docs/Web/HTTP`

  Aber diese Anforderungspfade stimmen nicht:

  - `/`
  - `/docsets`
  - `/fr/docs`

### Steuerung von Drittanbieter-Cookies mit `SameSite`

Das [`SameSite`](/de/docs/Web/HTTP/Headers/Set-Cookie#samesitesamesite-value)-Attribut lässt Server festlegen, ob/wann Cookies bei siteübergreifenden Anfragen gesendet werden — d. h. [Drittanbieter-Cookies](/de/docs/Web/Privacy/Third-party_cookies). Siteübergreifende Anfragen sind Anfragen, bei denen die {{Glossary("Site", "Site")}} (die registrierbare Domain) und/oder das Schema (http oder https) nicht mit der Site übereinstimmen, die der Benutzer gerade besucht. Dazu gehören Anfragen, die gesendet werden, wenn Links auf anderen Sites angeklickt werden, um auf Ihre Site navigiert zu werden, und jede Anfrage, die durch eingebettete Drittanbieter-Inhalte gesendet wird.

`SameSite` hilft dabei, Informationsleckagen zu verhindern, den Benutzer-[datenschutz](#datenschutz_und_verfolgung) zu bewahren und bietet einen gewissen Schutz gegen {{Glossary("CSRF", "Cross-Site Request Forgery")}}-Angriffe. Es nimmt drei mögliche Werte an: `Strict`, `Lax` und `None`:

- `Strict` sorgt dafür, dass der Browser das Cookie nur als Antwort auf Anfragen sendet, die ihren Ursprung auf der Site des Cookies haben. Dies sollte verwendet werden, wenn Sie Cookies haben, die sich auf Funktionen beziehen, die immer hinter einer ersten Navigation liegen, wie Authentifizierung oder das Speichern von Warenkorbinformationen.

  ```http
  Set-Cookie: cart=110045_77895_53420; SameSite=Strict
  ```

  > [!NOTE]
  > Cookies, die für sensible Informationen verwendet werden, sollten auch eine kurze [Lebensdauer](#removal_defining_the_lifetime_of_a_cookie) haben.

- `Lax` ist ähnlich, außer dass der Browser das Cookie auch sendet, wenn der Benutzer _zur_ Site des Cookies _navigiert_ (auch wenn der Benutzer von einer anderen Site kommt). Dies ist nützlich für Cookies, die die Anzeige einer Site beeinflussen — beispielsweise könnten Sie Partnerproduktinformationen zusammen mit einem Partnerlink auf Ihrer Website haben. Wenn dieser Link zum Partner-Website gefolgt wird, möchten diese vielleicht ein Cookie setzen, das angibt, dass der Partnerlink gefolgt wurde, was ein Belohnungsbanner anzeigt und einen Rabatt bietet, wenn das Produkt gekauft wird.

  ```http
  Set-Cookie: affiliate=e4rt45dw; SameSite=Lax
  ```

- `None` gibt an, dass Cookies sowohl bei Ursprungs- als auch bei Siteübergreifenden-Anfragen gesendet werden. Dies ist nützlich, wenn Sie Cookies zusammen mit Anfragen, die von Drittanbieter-Inhalten eingebettet in andere Sites gemacht werden, senden möchten, z. B. Ad-Tech oder Analysesysteme. Beachten Sie, dass wenn `SameSite=None` eingestellt ist, das `Secure`-Attribut ebenfalls gesetzt werden muss — `SameSite=None` erfordert einen _sicheren Kontext_.

  ```http
  Set-Cookie: widget_session=7yjgj57e4n3d; SameSite=None; Secure; HttpOnly
  ```

Wenn kein `SameSite`-Attribut gesetzt ist, wird das Cookie standardmäßig als `Lax` behandelt.

### Cookie-Präfixe

Aufgrund des Designs des Cookie-Mechanismus kann ein Server nicht bestätigen, dass ein Cookie von einem sicheren Ursprung gesetzt wurde oder auch nur _wo_ ein Cookie ursprünglich gesetzt wurde.

Eine anfällige Anwendung auf einer Subdomain kann ein Cookie mit dem `Domain`-Attribut setzen, das Zugriff auf dieses Cookie auf allen anderen Subdomains gewährt. Dieser Mechanismus kann in einem _Sitzungsfixierungsangriff_ missbraucht werden. Siehe [Sitzungsfixierung](/de/docs/Web/Security/Types_of_attacks#session_fixation) für primäre Gegenmaßnahmen.

Als [Schicht-Ansatz zur Verteidigung](https://de.wikipedia.org/wiki/Tiefenverteidigung) können Sie jedoch _Cookie-Präfixe_ verwenden, um spezifische Fakten über das Cookie zu behaupten. Zwei Präfixe stehen zur Verfügung:

- `__Host-`: Wenn ein Cookie-Name dieses Präfix hat, wird es in einem {{HTTPHeader("Set-Cookie")}}-Header nur akzeptiert, wenn es auch mit dem `Secure`-Attribut markiert ist, von einem sicheren Ursprung gesendet wurde, _kein_ `Domain`-Attribut enthält und das `Path`-Attribut auf `/` gesetzt ist. Mit anderen Worten, das Cookie ist _domain-locked_.
- `__Secure-`: Wenn ein Cookie-Name dieses Präfix hat, wird es in einem {{HTTPHeader("Set-Cookie")}}-Header nur akzeptiert, wenn es mit dem `Secure`-Attribut markiert ist und von einem sicheren Ursprung gesendet wurde. Dies ist schwächer als das `__Host-` Präfix.

Der Browser wird Cookies zurückweisen, die diese Präfixe haben und ihre Einschränkungen nicht erfüllen. Dies stellt sicher, dass von Subdomains erstellte Cookies mit Präfixen entweder auf eine Subdomain beschränkt bleiben oder vollständig ignoriert werden. Da der Anwendungsserver nur nach einem spezifischen Cookie-Namen sucht, wenn festgestellt werden soll, ob der Benutzer authentifiziert ist oder ein CSRF-Token korrekt ist, fungiert dies effektiv als Schutzmaßnahme gegen Sitzungsfixierung.

> [!NOTE]
> Auf dem Server muss die Webanwendung _den vollständigen Cookie-Namen inklusive Präfix überprüfen_. Benutzeragenten _streifen das Präfix nicht_ vom Cookie ab, bevor sie es in einem Anfrage-{{HTTPHeader("Cookie")}}-Header senden.

Weitere Informationen zu Cookie-Präfixen und dem aktuellen Stand der Browser-Unterstützung finden Sie im [Präfixe-Abschnitt des Set-Cookie Referenzartikels](/de/docs/Web/HTTP/Headers/Set-Cookie#cookie_prefixes).

## Datenschutz und Verfolgung

Weiter oben haben wir darüber gesprochen, wie Sie mit dem `SameSite`-Attribut kontrollieren können, wann Drittanbieter-Cookies gesendet werden, und dass dies dazu beitragen kann, den Benutzer-Datenschutz zu bewahren. Datenschutz ist eine sehr wichtige Überlegung beim Erstellen von Websites, die, wenn richtig gemacht, Vertrauen bei Ihren Benutzern aufbauen können. Wenn es schlecht gemacht wird, kann es dieses Vertrauen vollständig untergraben und alle möglichen anderen Probleme verursachen.

Drittanbieter-Cookies können von Drittanbieter-Inhalten gesetzt werden, die in Sites via {{htmlelement("iframe")}}s eingebettet sind. Sie haben viele legitime Verwendungszwecke, einschließlich des Teilens von Benutzerprofildaten, Zählen von Anzeigeneindrücken oder Sammeln von Analysen über verschiedene verwandte Domains hinweg.

Jedoch können Drittanbieter-Cookies auch verwendet werden, um gruselige, aufdringliche Benutzererfahrungen zu schaffen. Ein Drittanbieter-Server kann ein Profil des Browsing-Verlaufs und der Gewohnheiten eines Benutzers basierend auf Cookies erstellen, die ihm vom gleichen Browser beim Zugriff auf mehrere Sites gesendet werden. Das klassische Beispiel ist, wenn Sie auf einer Site nach Produktinformationen suchen und dann von Anzeigen für ähnliche Produkte überall im Web verfolgt werden.

Browseranbieter wissen, dass Benutzer dieses Verhalten nicht mögen, und deshalb haben alle begonnen, Drittanbieter-Cookies standardmäßig zu blockieren oder zumindest Pläne in diese Richtung gemacht. Drittanbieter-Cookies (oder einfach Tracking-Cookies) können auch von anderen Browsereinstellungen oder Erweiterungen blockiert werden.

> [!NOTE]
> Das Blockieren von Cookies kann dazu führen, dass einige Drittanbieter-Komponenten (wie soziale Medien-Widgets) nicht wie vorgesehen funktionieren. Während Browser weitere Einschränkungen für Drittanbieter-Cookies auferlegen, sollten Entwickler anfangen, nach Möglichkeiten zu suchen, ihre Abhängigkeit von ihnen zu reduzieren.

Siehe unseren Artikel zu [Drittanbieter-Cookies](/de/docs/Web/Privacy/Third-party_cookies) für detaillierte Informationen zu Drittanbieter-Cookies, die damit verbundenen Probleme und welche Alternativen verfügbar sind. Weitere Informationen zum Datenschutz im Allgemeinen finden Sie auf unserer [Datenschutz](/de/docs/Web/Privacy)-Einstiegsseite.

## Cookie-bezogene Vorschriften

Gesetze oder Vorschriften, die die Verwendung von Cookies regeln, umfassen:

- Die [General Data Privacy Regulation](https://gdpr.eu/) (GDPR) in der Europäischen Union
- Die ePrivacy-Richtlinie in der EU
- Der California Consumer Privacy Act

Diese Vorschriften haben weltweite Auswirkungen. Sie gelten für jede Site im _World Wide_ Web, auf die Nutzer aus diesen Rechtsordnungen zugreifen (die EU und Kalifornien, mit dem Vorbehalt, dass das kalifornische Gesetz nur für Unternehmen mit einem Bruttoeinkommen über 25 Millionen USD, unter anderem, gilt).

Diese Vorschriften enthalten Anforderungen wie:

- Nutzer darüber zu informieren, dass Ihre Site Cookies verwendet.
- Den Nutzern die Möglichkeit geben, den Empfang von einigen oder allen Cookies abzulehnen.
- Den Nutzern die Nutzung des größten Teils Ihres Dienstes ohne den Empfang von Cookies zu ermöglichen.

Es kann andere Vorschriften geben, die die Verwendung von Cookies in Ihrer Region regeln. Es liegt in Ihrer Verantwortung, diese Vorschriften zu kennen und einzuhalten. Es gibt Unternehmen, die „Cookie-Banner“-Code anbieten, der Ihnen hilft, diese Vorschriften einzuhalten.

> [!NOTE]
> Unternehmen sollten offenlegen, welche Arten von Cookies sie auf ihren Websites verwenden, um Transparenz zu schaffen und die Vorschriften einzuhalten. Sehen Sie sich beispielsweise [Googles Hinweis zu den Arten von Cookies, die es verwendet](https://policies.google.com/technologies/cookies#types-of-cookies) und Mozillas [Datenschutzhinweis zu Websites, Kommunikation & Cookies](https://www.mozilla.org/de/privacy/websites/#cookies) an.

## Siehe auch

- Verwandte HTTP-Header: {{HTTPHeader("Set-Cookie")}}, {{HTTPHeader("Cookie")}}
- Verwandte JavaScript-APIs: [`Document.cookie`](/de/docs/Web/API/Document/cookie), [`Navigator.cookieEnabled`](/de/docs/Web/API/Navigator/cookieEnabled), [Cookie Store API](/de/docs/Web/API/Cookie_Store_API)
- [Drittanbieter-Cookies](/de/docs/Web/Privacy/Third-party_cookies)
- [Cookie-Spezifikation: RFC 6265](https://datatracker.ietf.org/doc/html/rfc6265)
- [Cookies, die DSGVO und die ePrivacy-Richtlinie](https://gdpr.eu/cookies/)
