---
title: Verwendung von HTTP-Cookies
slug: Web/HTTP/Guides/Cookies
l10n:
  sourceCommit: 13ef67a4ffbdb929415dfa1b3d65ab1aa9ebe5da
---

Ein **Cookie** (auch als Web-Cookie oder Browser-Cookie bekannt) ist ein kleines Datenelement, das ein Server an den Webbrowser eines Benutzers sendet. Der Browser kann Cookies speichern, neue Cookies erstellen, bestehende ändern und sie bei späteren Anfragen an denselben Server zurücksenden. Cookies ermöglichen Webanwendungen, begrenzte Datenmengen zu speichern und Zustandsinformationen zu behalten; standardmäßig ist das HTTP-Protokoll [zustandslos](/de/docs/Web/HTTP/Guides/Overview#http_is_stateless_but_not_sessionless).

In diesem Artikel untersuchen wir die wichtigsten Verwendungszwecke von Cookies, erläutern bewährte Verfahren für ihre Verwendung und betrachten ihre Auswirkungen auf Datenschutz und Sicherheit.

## Wofür Cookies verwendet werden

In der Regel verwendet der Server den Inhalt von HTTP-Cookies, um festzustellen, ob verschiedene Anfragen vom selben Browser/Benutzer stammen, und gibt dann je nach Bedarf eine personalisierte oder allgemeine Antwort aus. Im Folgenden wird ein grundlegendes Benutzer-Anmeldesystem beschrieben:

1. Der Benutzer sendet Anmeldedaten an den Server, beispielsweise durch das Absenden eines Formulars.
2. Wenn die Anmeldedaten korrekt sind, aktualisiert der Server die Benutzeroberfläche, um anzuzeigen, dass der Benutzer angemeldet ist, und antwortet mit einem Cookie, das eine Sitzungs-ID enthält, die den Anmeldestatus im Browser speichert.
3. Zu einem späteren Zeitpunkt wechselt der Benutzer zu einer anderen Seite derselben Website. Der Browser sendet das Cookie mit der Sitzungs-ID zusammen mit der entsprechenden Anfrage, um anzuzeigen, dass er weiterhin davon ausgeht, dass der Benutzer angemeldet ist.
4. Der Server prüft die Sitzungs-ID und sendet dem Benutzer, falls sie noch gültig ist, eine personalisierte Version der neuen Seite. Ist sie nicht gültig, wird die Sitzungs-ID gelöscht und dem Benutzer eine allgemeine Version der Seite angezeigt (oder möglicherweise eine Meldung „Zugriff verweigert“ und die Aufforderung, sich erneut anzumelden).

![Visuelle Darstellung der obigen Beschreibung des Anmeldesystems](/shared-assets/images/diagrams/http/cookies/cookie-basic-example.png)

Cookies werden hauptsächlich für drei Zwecke verwendet:

- **Sitzungsverwaltung**: Benutzer-Anmeldestatus, Inhalte von Warenkörben, Spielergebnisse oder andere Details zu Benutzersitzungen, die sich der Server merken muss.
- **Personalisierung**: Benutzereinstellungen wie Anzeigesprache und UI-Theme.
- **Tracking**: Aufzeichnung und Analyse des Benutzerverhaltens.

### Datenspeicherung

In den frühen Tagen des Webs, als es keine andere Möglichkeit gab, wurden Cookies für allgemeine clientseitige Datenspeicherzwecke verwendet. Heute werden moderne Speicher-APIs empfohlen, beispielsweise die [Web Storage API](/de/docs/Web/API/Web_Storage_API) (`localStorage` und `sessionStorage`) und [IndexedDB](/de/docs/Web/API/IndexedDB_API).

Sie wurden für die Speicherung entwickelt, senden niemals Daten an den Server und haben nicht die weiteren Nachteile der Verwendung von Cookies zur Speicherung:

- Browser sind im Allgemeinen auf eine maximale Anzahl von Cookies pro Domain beschränkt (je nach Browser unterschiedlich, im Allgemeinen mehrere Hundert) sowie auf eine maximale Größe pro Cookie (üblicherweise 4 KB). Speicher-APIs können größere Datenmengen speichern.
- Cookies werden mit jeder Anfrage gesendet und können daher die Leistung verschlechtern (beispielsweise bei langsamen mobilen Datenverbindungen), insbesondere wenn Sie viele Cookies gesetzt haben.

> [!NOTE]
> Um gespeicherte Cookies (und andere Speicherbereiche, die eine Webseite verwendet) anzuzeigen, können Sie den [Storage Inspector](https://firefox-source-docs.mozilla.org/devtools-user/storage_inspector/index.html) in den Firefox Developer Tools oder das [Application panel](https://developer.chrome.com/docs/devtools/progressive-web-apps) in den Chrome Developer Tools verwenden.

## Erstellen, Entfernen und Aktualisieren von Cookies

Nach Empfang einer HTTP-Anfrage kann ein Server mit der Antwort einen oder mehrere {{HTTPHeader("Set-Cookie")}}-Header senden, von denen jeder ein separates Cookie setzt. Ein Cookie wird durch die Angabe eines Name-Wert-Paars wie folgt gesetzt:

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

Wenn eine neue Anfrage gestellt wird, sendet der Browser üblicherweise zuvor gespeicherte Cookies für die aktuelle Domain innerhalb eines {{HTTPHeader("Cookie")}}-HTTP-Headers zurück an den Server:

```http
GET /sample_page.html HTTP/2.0
Host: www.example.org
Cookie: yummy_cookie=chocolate; tasty_cookie=strawberry
```

### Entfernen: Lebensdauer eines Cookies definieren

Sie können ein Ablaufdatum oder einen Zeitraum angeben, nach dem das Cookie gelöscht und nicht mehr gesendet werden soll. Abhängig von den Attributen, die bei der Erstellung der Cookies im {{HTTPHeader("Set-Cookie")}}-Header gesetzt werden, können sie entweder _dauerhafte_ oder _Sitzungs_-Cookies sein:

- Dauerhafte Cookies werden nach dem im `Expires`-Attribut angegebenen Datum gelöscht:

  ```http
  Set-Cookie: id=a3fWa; Expires=Thu, 31 Oct 2021 07:28:00 GMT;
  ```

  oder nach dem im `Max-Age`-Attribut angegebenen Zeitraum:

  ```http
  Set-Cookie: id=a3fWa; Max-Age=2592000
  ```

  > [!NOTE]
  > `Expires` ist länger verfügbar als `Max-Age`, jedoch ist `Max-Age` weniger fehleranfällig und hat Vorrang, wenn beide gesetzt sind. Der Grund dafür ist, dass ein gesetztes `Expires`-Datum und eine entsprechende Uhrzeit relativ zum Client sind, auf dem das Cookie gesetzt wird. Ist auf dem Server eine andere Uhrzeit eingestellt, kann dies zu Fehlern führen.

- _Sitzungs_-Cookies — Cookies ohne ein `Max-Age`- oder `Expires`-Attribut – werden gelöscht, wenn die aktuelle Sitzung endet. Der Browser definiert, wann die „aktuelle Sitzung“ endet, und einige Browser verwenden beim Neustart eine _Sitzungswiederherstellung_. Dadurch können Sitzungs-Cookies unbegrenzt bestehen bleiben.

  > [!NOTE]
  > Wenn Ihre Website Benutzer authentifiziert, sollte sie Sitzungs-Cookies bei jeder Benutzerauthentifizierung neu generieren und erneut senden, auch bereits vorhandene. Dieser Ansatz hilft, Angriffe zur [Sitzungsfixierung](https://community.owasp.org/attacks/Session_fixation) zu verhindern, bei denen ein Dritter die Sitzung eines Benutzers wiederverwenden kann.

Um ein Cookie sofort zu entfernen, setzen Sie das Cookie erneut mit demselben Namen, Pfad und derselben Domain (falls angegeben) und setzen Sie sein `Expires`-Attribut auf ein Datum in der Vergangenheit oder sein `Max-Age`-Attribut auf `0` oder einen negativen Wert. Dies weist den Browser an, das Cookie sofort zu löschen. Beispiel:

```http
Set-Cookie: id=a3fWa; Max-Age=0
```

Sie können außerdem alle Cookies löschen, die einer registrierbaren Domain zugeordnet sind, indem Sie den Antwort-Header {{httpheader("Clear-Site-Data")}} verwenden.
Beispielsweise würde der folgende Header, der von `https://foo.example.com/` gesendet wird, alle von `example.com` und allen Subdomains gesendeten Cookies löschen, etwa `all.bar.example.com`.

```http
Clear-Site-Data: "cookies"
```

Es gibt einige Techniken, die dazu dienen, Cookies nach ihrer Löschung erneut zu erstellen. Diese werden als „Zombie“-Cookies bezeichnet. Diese Techniken verstoßen gegen die Grundsätze der [Privatsphäre](#privatsphäre_und_tracking) und Benutzerkontrolle, können gegen [Datenschutzvorschriften](#cookie-bezogene_vorschriften) verstoßen und eine Website, die sie verwendet, rechtlichen Haftungsrisiken aussetzen.

### Cookie-Werte aktualisieren

Um ein Cookie über HTTP zu aktualisieren, kann der Server einen {{HTTPHeader("Set-Cookie")}}-Header mit dem Namen des bestehenden Cookies und einem neuen Wert senden. Beispiel:

```http
Set-Cookie: id=new-value
```

Dafür kann es mehrere Gründe geben, beispielsweise wenn ein Benutzer seine Einstellungen aktualisiert hat und die Anwendung die Änderungen in clientseitigen Daten widerspiegeln möchte (Sie könnten dies auch mit einem clientseitigen Speichermechanismus wie [Web Storage](/de/docs/Web/API/Web_Storage_API) tun).

#### Cookies über JavaScript aktualisieren

Im Browser können Sie mit JavaScript neue Cookies über die Eigenschaft [`Document.cookie`](/de/docs/Web/API/Document/cookie) oder die asynchrone [Cookie Store API](/de/docs/Web/API/Cookie_Store_API) erstellen. Beachten Sie, dass alle folgenden Beispiele `Document.cookie` verwenden, da dies die am weitesten unterstützte/etablierte Option ist.

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

Aus Sicherheitsgründen können Sie Cookie-Werte nicht ändern, indem Sie beim Initiieren einer Anfrage direkt einen aktualisierten `Cookie`-Header senden, beispielsweise über [`fetch()`](/de/docs/Web/API/Window/fetch) oder [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest).

Es gibt gute Gründe, warum Sie JavaScript überhaupt nicht erlauben sollten, Cookies zu ändern. Sie können verhindern, dass JavaScript auf ein Cookie zugreift, indem Sie bei seiner Erstellung das Attribut [`HttpOnly`](/de/docs/Web/HTTP/Reference/Headers/Set-Cookie#httponly) angeben. Weitere Details finden Sie im Abschnitt [Sicherheit](#sicherheit).

## Sicherheit

Wenn Sie Informationen in Cookies speichern, sind standardmäßig alle Cookie-Werte für den Endbenutzer sichtbar und können von ihm geändert werden. Sie möchten wirklich nicht, dass Ihre Cookies missbraucht werden — beispielsweise durch böswillige Akteure abgerufen/verändert oder an Domains gesendet werden, an die sie nicht gesendet werden sollten. Die möglichen Folgen reichen von lästig — Anwendungen funktionieren nicht oder zeigen merkwürdiges Verhalten — bis hin zu katastrophal. Ein Krimineller könnte beispielsweise eine Sitzungs-ID stehlen und sie verwenden, um ein Cookie zu setzen, das den Anschein erweckt, er sei als jemand anderes angemeldet, und dabei die Kontrolle über dessen Bank- oder E-Commerce-Konto übernehmen.

Sie können Ihre Cookies auf verschiedene Arten absichern, die in diesem Abschnitt erläutert werden.

### Zugriff auf Ihre Cookies blockieren

Sie können auf zwei Arten sicherstellen, dass Cookies sicher gesendet und nicht von unbeabsichtigten Parteien oder Skripten abgerufen werden: mit dem Attribut `Secure` und dem Attribut `HttpOnly`:

```http
Set-Cookie: id=a3fWa; Expires=Thu, 21 Oct 2021 07:28:00 GMT; Secure; HttpOnly
```

- Ein Cookie mit dem Attribut `Secure` wird nur mit einer verschlüsselten Anfrage über das HTTPS-Protokoll an den Server gesendet. Es wird niemals mit ungesichertem HTTP gesendet (außer auf localhost, obwohl diese Ausnahme von Safari nicht unterstützt wird), was bedeutet, dass Angreifer mit [Man-in-the-Middle (MITM)](/de/docs/Web/Security/Attacks/MITM)-Angriffen nicht einfach darauf zugreifen können. Unsichere Websites (mit `http:` in der URL) können keine Cookies mit dem Attribut `Secure` setzen. Gehen Sie jedoch nicht davon aus, dass `Secure` jeden Zugriff auf sensible Informationen in Cookies verhindert. Beispielsweise kann jemand mit Zugriff auf die Festplatte des Clients (oder JavaScript, wenn das Attribut `HttpOnly` nicht gesetzt ist) die Informationen lesen und ändern.

- Auf ein Cookie mit dem Attribut `HttpOnly` kann nicht über JavaScript zugegriffen werden, beispielsweise mit [`Document.cookie`](/de/docs/Web/API/Document/cookie); darauf kann nur zugegriffen werden, wenn es den Server erreicht. Cookies, die beispielsweise Benutzersitzungen aufrechterhalten, sollten das Attribut `HttpOnly` gesetzt haben — es wäre sehr unsicher, sie JavaScript verfügbar zu machen. Diese Vorsichtsmaßnahme hilft, Cross-Site-Scripting-Angriffe ([XSS](/de/docs/Web/Security/Attacks/XSS)) abzuschwächen.

> [!NOTE]
> Abhängig von der Anwendung möchten Sie möglicherweise einen opaken Identifikator verwenden, den der Server nachschlägt, statt sensible Informationen direkt in Cookies zu speichern, oder alternative Authentifizierungs-/Vertraulichkeitsmechanismen wie [JSON Web Tokens](https://www.jwt.io/) untersuchen.

### Festlegen, wohin Cookies gesendet werden

Die Attribute `Domain` und `Path` definieren den _Gültigkeitsbereich_ eines Cookies: an welche URLs die Cookies gesendet werden.

- Das Attribut `Domain` gibt an, welcher Server ein Cookie empfangen kann. Falls angegeben, sind Cookies auf dem angegebenen Server und seinen Subdomains verfügbar. Wenn Sie beispielsweise `Domain=mozilla.org` von `mozilla.org` setzen, sind Cookies auf dieser Domain und auf Subdomains wie `developer.mozilla.org` verfügbar.

  ```http
  Set-Cookie: id=a3fWa; Expires=Thu, 21 Oct 2021 07:28:00 GMT; Secure; HttpOnly; Domain=mozilla.org
  ```

  Wenn der `Set-Cookie`-Header kein `Domain`-Attribut angibt, sind die Cookies auf dem Server verfügbar, der sie setzt, _nicht jedoch auf seinen Subdomains_. Daher ist die Angabe von `Domain` weniger restriktiv als das Weglassen.
  Beachten Sie, dass ein Server das Attribut `Domain` nur auf seine eigene Domain oder eine übergeordnete Domain setzen kann, nicht auf eine Subdomain oder eine andere Domain.
  Ein Server mit der Domain `foo.example.com` könnte das Attribut also auf `example.com` oder `foo.example.com` setzen, aber nicht auf `bar.foo.example.com` oder `elsewhere.com` (die Cookies würden dennoch an Subdomains wie `bar.foo.example.com` _gesendet_).
  Weitere Details finden Sie unter [Ungültige Domains](/de/docs/Web/HTTP/Reference/Headers/Set-Cookie#invalid_domains).

- Das Attribut `Path` gibt einen URL-Pfad an, der in der angeforderten URL vorhanden sein muss, damit der `Cookie`-Header gesendet wird. Beispiel:

  ```http
  Set-Cookie: id=a3fWa; Expires=Thu, 21 Oct 2021 07:28:00 GMT; Secure; HttpOnly; Path=/docs
  ```

  Das Zeichen `%x2F` ("/") wird als Verzeichnistrennzeichen betrachtet, und auch Unterverzeichnisse stimmen überein. Wenn Sie beispielsweise `Path=/docs` setzen, stimmen diese Anfragepfade überein:
  - `/docs`
  - `/docs/`
  - `/docs/Web/`
  - `/docs/Web/HTTP`

  Diese Anfragepfade hingegen nicht:
  - `/`
  - `/docsets`
  - `/fr/docs`

  > [!NOTE]
  > Mit dem Attribut `path` können Sie steuern, welche Cookies der Browser basierend auf den verschiedenen Teilen einer Website sendet.
  > Es ist nicht als Sicherheitsmaßnahme gedacht und [schützt nicht](/de/docs/Web/API/Document/cookie#security) vor unbefugtem Lesen des Cookies von einem anderen Pfad aus.

### Cookies von Drittanbietern mit `SameSite` steuern

Das Attribut [`SameSite`](/de/docs/Web/HTTP/Reference/Headers/Set-Cookie#samesitesamesite-value) ermöglicht Servern festzulegen, ob/wann Cookies mit websiteübergreifenden Anfragen gesendet werden — d.h. [Cookies von Drittanbietern](/de/docs/Web/Privacy/Guides/Third-party_cookies). Websiteübergreifende Anfragen sind Anfragen, bei denen die {{Glossary("Site", "Website")}} (die registrierbare Domain) und/oder das Schema (http oder https) nicht mit der Website übereinstimmen, die der Benutzer gerade besucht. Dies umfasst Anfragen, die gesendet werden, wenn auf anderen Websites auf Links geklickt wird, um zu Ihrer Website zu navigieren, sowie jede Anfrage, die durch eingebettete Inhalte von Drittanbietern gesendet wird.

`SameSite` hilft, die Preisgabe von Informationen zu verhindern, die [Privatsphäre](#privatsphäre_und_tracking) der Benutzer zu wahren und einen gewissen Schutz vor Angriffen durch {{Glossary("CSRF", "Cross-Site Request Forgery")}} bereitzustellen. Es akzeptiert drei mögliche Werte: `Strict`, `Lax` und `None`:

- `Strict` bewirkt, dass der Browser das Cookie nur als Antwort auf Anfragen sendet, die von der Ursprungswebsite des Cookies stammen. Dies sollte verwendet werden, wenn Sie Cookies für Funktionen haben, die immer hinter einer anfänglichen Navigation liegen, etwa Authentifizierung oder die Speicherung von Warenkorbinformationen.

  ```http
  Set-Cookie: cart=110045_77895_53420; SameSite=Strict
  ```

  > [!NOTE]
  > Cookies, die für sensible Informationen verwendet werden, sollten außerdem eine kurze [Lebensdauer](#removal_defining_the_lifetime_of_a_cookie) haben.

- `Lax` ist ähnlich, außer dass der Browser das Cookie auch sendet, wenn der Benutzer zur Ursprungswebsite des Cookies _navigiert_ (selbst wenn der Benutzer von einer anderen Website kommt). Dies ist nützlich für Cookies, die die Darstellung einer Website beeinflussen — beispielsweise könnten Sie Produktinformationen eines Partners zusammen mit einem Affiliate-Link auf Ihrer Website haben. Wenn diesem Link zur Partner-Website gefolgt wird, möchte diese möglicherweise ein Cookie setzen, das angibt, dass der Affiliate-Link verwendet wurde, wodurch ein Prämienbanner angezeigt und ein Rabatt gewährt wird, wenn das Produkt gekauft wird.

  ```http
  Set-Cookie: affiliate=e4rt45dw; SameSite=Lax
  ```

- `None` gibt an, dass Cookies sowohl bei Anfragen von der Ursprungswebsite als auch bei websiteübergreifenden Anfragen gesendet werden. Dies ist nützlich, wenn Sie Cookies zusammen mit Anfragen senden möchten, die von in andere Websites eingebetteten Inhalten von Drittanbietern gestellt werden, beispielsweise durch Anbieter von Werbetechnologie oder Analysen. Beachten Sie, dass bei gesetztem `SameSite=None` auch das Attribut `Secure` gesetzt sein muss — `SameSite=None` erfordert einen _sicheren Kontext_.

  ```http
  Set-Cookie: widget_session=7yjgj57e4n3d; SameSite=None; Secure; HttpOnly
  ```

Wenn kein Attribut `SameSite` gesetzt ist, wird das Cookie standardmäßig als `Lax` behandelt.

### Cookie-Präfixe

Aufgrund der Gestaltung des Cookie-Mechanismus kann ein Server nicht bestätigen, dass ein Cookie von einem sicheren Ursprung gesetzt wurde, oder auch nur feststellen, _wo_ ein Cookie ursprünglich gesetzt wurde.

Eine Anwendung auf einer Subdomain kann ein Cookie mit dem Attribut `Domain` setzen, das Zugriff auf dieses Cookie auf allen anderen Subdomains ermöglicht. Dieser Mechanismus kann bei einem Angriff zur [Sitzungsfixierung](https://community.owasp.org/attacks/Session_fixation) missbraucht werden.

Als Maßnahme zur [mehrschichtigen Verteidigung](<https://en.wikipedia.org/wiki/Defense_in_depth_(computing)>) können Sie _Cookie-Präfixe_ verwenden, um in unterstützenden User-Agents bestimmte Einschränkungen für die Attribute eines Cookies durchzusetzen. Alle Cookie-Präfixe beginnen mit zwei Unterstrichen (`__`) und enden mit einem Bindestrich (`-`). Es sind vier Präfixe verfügbar:

- **`__Secure-`**: Cookies mit Namen, die mit `__Secure-` beginnen, müssen von einer sicheren Seite (HTTPS) mit dem Attribut `Secure` gesetzt werden.
- **`__Host-`**: Cookies mit Namen, die mit `__Host-` beginnen, müssen von einer sicheren Seite (HTTPS) mit dem Attribut `Secure` gesetzt werden. Außerdem dürfen sie kein angegebenes Attribut `Domain` haben und das Attribut `Path` muss auf `/` gesetzt sein. Dies stellt sicher, dass solche Cookies nur an den Host gesendet werden, der sie gesetzt hat, und nicht an andere Hosts der Domain. Außerdem stellt es sicher, dass sie hostweit gesetzt werden und auf keinem Pfad dieses Hosts überschrieben werden können. Diese Kombination ergibt ein Cookie, das der Behandlung des Ursprungs als Sicherheitsgrenze so nahe wie möglich kommt.
- **`__Http-`**: Cookies mit Namen, die mit `__Http-` beginnen, müssen von einer sicheren Seite (HTTPS) mit dem Flag `Secure` gesetzt werden und zusätzlich das Attribut `HttpOnly` haben, um nachzuweisen, dass sie über den Header `Set-Cookie` gesetzt wurden (sie können nicht über JavaScript-Funktionen wie [`Document.cookie`](/de/docs/Web/API/Document/cookie) oder die [Cookie Store API](/de/docs/Web/API/Cookie_Store_API) gesetzt oder geändert werden).
- **`__Host-Http-`**: Cookies mit Namen, die mit `__Host-Http-` beginnen, müssen von einer sicheren Seite (HTTPS) mit dem Flag `Secure` gesetzt werden und das Attribut `HttpOnly` haben, um nachzuweisen, dass sie über den Header `Set-Cookie` gesetzt wurden. Außerdem haben sie dieselben Einschränkungen wie Cookies mit dem Präfix `__Host-`. Diese Kombination ergibt ein Cookie, das der Behandlung des Ursprungs als Sicherheitsgrenze so nahe wie möglich kommt und gleichzeitig sicherstellt, dass Entwickler und Serverbetreiber wissen, dass sein Gültigkeitsbereich auf HTTP-Anfragen beschränkt ist.

Der Browser lehnt Cookies mit diesen Präfixen ab, wenn sie deren Einschränkungen nicht entsprechen. Da der Anwendungsserver nur einen bestimmten Cookie-Namen prüft, um festzustellen, ob der Benutzer authentifiziert ist oder ein CSRF-Token korrekt ist, wirkt dies effektiv als Schutzmaßnahme gegen [Sitzungsfixierung](https://community.owasp.org/attacks/Session_fixation).

> [!NOTE]
> Auf dem Server _muss_ die Webanwendung den vollständigen Cookie-Namen einschließlich des Präfixes prüfen. User-Agents _entfernen_ das Präfix nicht aus dem Cookie, bevor sie es im {{HTTPHeader("Cookie")}}-Header einer Anfrage senden.

Weitere Informationen über Cookie-Präfixe und den aktuellen Stand der Browserunterstützung finden Sie im [Abschnitt über Präfixe des Referenzartikels zu Set-Cookie](/de/docs/Web/HTTP/Reference/Headers/Set-Cookie#cookie_prefixes).

## Privatsphäre und Tracking

Zuvor haben wir erläutert, wie das Attribut `SameSite` verwendet werden kann, um zu steuern, wann Cookies von Drittanbietern gesendet werden, und dass dies zur Wahrung der Privatsphäre der Benutzer beitragen kann. Privatsphäre ist bei der Erstellung von Websites eine sehr wichtige Überlegung, die — wenn sie richtig umgesetzt wird — Vertrauen bei Ihren Benutzern aufbauen kann. Bei schlechter Umsetzung kann dieses Vertrauen vollständig zerstört werden und es können allerlei weitere Probleme entstehen.

Cookies von Drittanbietern können durch Inhalte von Drittanbietern gesetzt werden, die über {{htmlelement("iframe")}}s in Websites eingebettet sind. Sie haben viele legitime Anwendungsfälle, darunter die Weitergabe von Benutzerprofilinformationen, das Zählen von Werbeeinblendungen oder das Erfassen von Analysedaten über verschiedene verwandte Domains hinweg.

Cookies von Drittanbietern können jedoch auch verwendet werden, um unangenehme, invasive Benutzererfahrungen zu schaffen. Ein Drittanbieter-Server kann ein Profil des Browserverlaufs und der Gewohnheiten eines Benutzers erstellen, basierend auf Cookies, die ihm von demselben Browser beim Zugriff auf mehrere Websites gesendet werden. Das klassische Beispiel ist, wenn Sie auf einer Website nach Produktinformationen suchen und anschließend überall im Web mit Werbung für ähnliche Produkte verfolgt werden.

Browseranbieter wissen, dass Benutzer dieses Verhalten nicht mögen, und haben daher alle damit begonnen, Cookies von Drittanbietern standardmäßig zu blockieren, oder zumindest Pläne in diese Richtung entwickelt. Cookies von Drittanbietern (oder einfach Tracking-Cookies) können auch durch andere Browsereinstellungen oder Erweiterungen blockiert werden.

> [!NOTE]
> Das Blockieren von Cookies kann dazu führen, dass einige Komponenten von Drittanbietern (etwa Social-Media-Widgets) nicht wie vorgesehen funktionieren. Da Browser weitere Einschränkungen für Cookies von Drittanbietern auferlegen, sollten Entwickler beginnen, nach Möglichkeiten zu suchen, ihre Abhängigkeit von ihnen zu verringern.

Ausführliche Informationen über Cookies von Drittanbietern, die damit verbundenen Probleme und verfügbare Alternativen finden Sie in unserem Artikel [Cookies von Drittanbietern](/de/docs/Web/Privacy/Guides/Third-party_cookies). Weitere Informationen über Privatsphäre im Allgemeinen finden Sie auf unserer Übersichtsseite [Privatsphäre](/de/docs/Web/Privacy).

## Cookie-bezogene Vorschriften

Gesetze oder Vorschriften, die die Verwendung von Cookies abdecken, umfassen:

- die [Datenschutz-Grundverordnung](https://gdpr.eu/) (DSGVO) in der Europäischen Union
- die ePrivacy-Richtlinie in der EU
- den California Consumer Privacy Act

Diese Vorschriften haben globale Reichweite. Sie gelten für jede Website im _World Wide_ Web, auf die Benutzer aus diesen Rechtsräumen zugreifen (der EU und Kalifornien, mit der Einschränkung, dass das kalifornische Gesetz nur für Unternehmen mit einem Bruttoumsatz von über 25 Millionen USD gilt, neben weiteren Voraussetzungen).

Diese Vorschriften umfassen Anforderungen wie:

- Benutzer darüber zu informieren, dass Ihre Website Cookies verwendet.
- Benutzern die Möglichkeit zu geben, den Empfang einiger oder aller Cookies abzulehnen.
- Benutzern zu ermöglichen, den Großteil Ihres Dienstes ohne den Empfang von Cookies zu verwenden.

An Ihrem Standort können weitere Vorschriften gelten, die die Verwendung von Cookies regeln. Es liegt in Ihrer Verantwortung, diese Vorschriften zu kennen und einzuhalten. Es gibt Unternehmen, die Code für „Cookie-Banner“ anbieten, der Ihnen bei der Einhaltung dieser Vorschriften hilft.

> [!NOTE]
> Unternehmen sollten zur Transparenz und zur Einhaltung von Vorschriften die Arten von Cookies offenlegen, die sie auf ihren Websites verwenden. Siehe beispielsweise [Hinweis von Google zu den verwendeten Cookie-Arten](https://policies.google.com/technologies/cookies#types-of-cookies) und Mozillas [Datenschutzhinweis zu Websites, Kommunikation und Cookies](https://www.mozilla.org/en-US/privacy/websites/#cookies).

## Siehe auch

- Verwandte HTTP-Header: {{HTTPHeader("Set-Cookie")}}, {{HTTPHeader("Cookie")}}
- Verwandte JavaScript-APIs: [`Document.cookie`](/de/docs/Web/API/Document/cookie), [`Navigator.cookieEnabled`](/de/docs/Web/API/Navigator/cookieEnabled), [Cookie Store API](/de/docs/Web/API/Cookie_Store_API)
- [Cookies von Drittanbietern](/de/docs/Web/Privacy/Guides/Third-party_cookies)
- [Cookie-Spezifikation: RFC 6265](https://datatracker.ietf.org/doc/html/rfc6265)
- [Cookies, die DSGVO und die ePrivacy-Richtlinie](https://gdpr.eu/cookies/)
