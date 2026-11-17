---
title: HTTP-Cookies verwenden
slug: Web/HTTP/Guides/Cookies
l10n:
  sourceCommit: 0a0fab4b331a0bbe414933e9ca71568e5ff1dffa
---

Ein **Cookie** (auch Web-Cookie oder Browser-Cookie genannt) ist ein kleines Datenpaket, das ein Server an den Webbrowser eines Benutzers sendet. Der Browser kann Cookies speichern, neue Cookies erstellen, vorhandene Cookies ändern und sie bei späteren Anfragen an denselben Server zurücksenden. Cookies ermöglichen es Webanwendungen, begrenzte Datenmengen zu speichern und sich Zustandsinformationen zu merken; standardmäßig ist das HTTP-Protokoll [zustandslos](/de/docs/Web/HTTP/Guides/Overview#http_is_stateless_but_not_sessionless).

In diesem Artikel betrachten wir die wichtigsten Verwendungszwecke von Cookies, erläutern bewährte Verfahren für ihren Einsatz und gehen auf ihre Auswirkungen auf Datenschutz und Sicherheit ein.

## Wofür Cookies verwendet werden

Normalerweise verwendet der Server den Inhalt von HTTP-Cookies, um festzustellen, ob verschiedene Anfragen vom selben Browser oder Benutzer stammen. Anschließend sendet er je nach Ergebnis eine personalisierte oder eine allgemeine Antwort. Das folgende Beispiel beschreibt ein einfaches System zur Benutzeranmeldung:

1. Der Benutzer sendet seine Anmeldedaten an den Server, beispielsweise durch das Absenden eines Formulars.
2. Wenn die Anmeldedaten korrekt sind, aktualisiert der Server die Benutzeroberfläche, um anzuzeigen, dass der Benutzer angemeldet ist. Er antwortet mit einem Cookie, das eine Sitzungs-ID enthält, anhand derer der Anmeldestatus im Browser festgehalten wird.
3. Später wechselt der Benutzer zu einer anderen Seite derselben Website. Der Browser sendet das Cookie mit der Sitzungs-ID zusammen mit der entsprechenden Anfrage, um anzuzeigen, dass der Benutzer seiner Kenntnis nach weiterhin angemeldet ist.
4. Der Server überprüft die Sitzungs-ID und sendet dem Benutzer, sofern sie noch gültig ist, eine personalisierte Version der neuen Seite. Ist sie ungültig, wird die Sitzungs-ID gelöscht und dem Benutzer wird eine allgemeine Version der Seite angezeigt (oder möglicherweise eine Meldung, dass der Zugriff verweigert wurde, verbunden mit der Aufforderung, sich erneut anzumelden).

![Grafische Darstellung des oben beschriebenen Anmeldesystems](/shared-assets/images/diagrams/http/cookies/cookie-basic-example.png)

Cookies werden hauptsächlich für drei Zwecke verwendet:

- **Sitzungsverwaltung**: Anmeldestatus, Warenkorbinhalt, Spielstände oder andere Angaben zu einer Benutzersitzung, die sich der Server merken muss.
- **Personalisierung**: Benutzereinstellungen wie Anzeigesprache und Design der Benutzeroberfläche.
- **Tracking**: Aufzeichnung und Analyse des Benutzerverhaltens.

### Datenspeicherung

In der Anfangszeit des Webs wurden Cookies mangels Alternativen zur allgemeinen clientseitigen Datenspeicherung verwendet. Heute werden dafür moderne Speicher-APIs empfohlen, beispielsweise die [Web Storage API](/de/docs/Web/API/Web_Storage_API) (`localStorage` und `sessionStorage`) und [IndexedDB](/de/docs/Web/API/IndexedDB_API).

Diese APIs sind für die Datenspeicherung konzipiert, senden niemals Daten an den Server und haben nicht die weiteren Nachteile, die Cookies bei der Datenspeicherung mit sich bringen:

- Browser begrenzen in der Regel die Anzahl der Cookies pro Domain (je nach Browser meist auf einige Hundert) und die Größe einzelner Cookies (üblicherweise auf 4 KB). Speicher-APIs können größere Datenmengen speichern.
- Cookies werden bei jeder Anfrage mitgesendet und können daher die Leistung beeinträchtigen, beispielsweise bei langsamen mobilen Datenverbindungen. Das gilt besonders, wenn viele Cookies gesetzt sind.

> [!NOTE]
> Um gespeicherte Cookies und andere von einer Webseite verwendete Speicherbereiche anzuzeigen, können Sie den [Storage Inspector](https://firefox-source-docs.mozilla.org/devtools-user/storage_inspector/index.html) in den Firefox-Entwicklerwerkzeugen oder das [Application-Panel](https://developer.chrome.com/docs/devtools/progressive-web-apps) in den Chrome-Entwicklerwerkzeugen verwenden.

## Cookies erstellen, entfernen und aktualisieren

Nach dem Empfang einer HTTP-Anfrage kann ein Server in seiner Antwort einen oder mehrere {{HTTPHeader("Set-Cookie")}}-Header senden, von denen jeder ein eigenes Cookie setzt. Ein Cookie wird festgelegt, indem ein Name-Wert-Paar angegeben wird:

```http
Set-Cookie: <cookie-name>=<cookie-value>
```

Die folgende HTTP-Antwort weist den empfangenden Browser an, zwei Cookies zu speichern:

```http
HTTP/2.0 200 OK
Content-Type: text/html
Set-Cookie: yummy_cookie=chocolate
Set-Cookie: tasty_cookie=strawberry

[page content]
```

> [!NOTE]
> Informationen zur Verwendung des `Set-Cookie`-Headers in verschiedenen serverseitigen Sprachen und Frameworks finden Sie hier: [PHP](https://www.php.net/manual/en/function.setcookie.php), [Node.js](https://nodejs.org/docs/latest-v19.x/api/http.html#responsesetheadername-value), [Python](https://docs.python.org/3/library/http.cookies.html), [Ruby on Rails](https://api.rubyonrails.org/classes/ActionDispatch/Cookies.html).

Bei einer neuen Anfrage sendet der Browser zuvor gespeicherte Cookies für die aktuelle Domain normalerweise in einem {{HTTPHeader("Cookie")}}-HTTP-Header an den Server zurück:

```http
GET /sample_page.html HTTP/2.0
Host: www.example.org
Cookie: yummy_cookie=chocolate; tasty_cookie=strawberry
```

### Cookies entfernen: die Lebensdauer eines Cookies festlegen

Sie können ein Ablaufdatum oder einen Zeitraum festlegen, nach dem das Cookie gelöscht und nicht mehr gesendet werden soll. Je nachdem, welche Attribute beim Erstellen der Cookies im {{HTTPHeader("Set-Cookie")}}-Header gesetzt werden, handelt es sich um _dauerhafte_ Cookies oder _Sitzungs-Cookies_:

- Dauerhafte Cookies werden nach dem im Attribut `Expires` angegebenen Datum gelöscht:

  ```http
  Set-Cookie: id=a3fWa; Expires=Thu, 31 Oct 2021 07:28:00 GMT;
  ```

  Oder nach dem im Attribut `Max-Age` angegebenen Zeitraum:

  ```http
  Set-Cookie: id=a3fWa; Max-Age=2592000
  ```

  > [!NOTE]
  > `Expires` ist schon länger verfügbar als `Max-Age`. `Max-Age` ist jedoch weniger fehleranfällig und hat Vorrang, wenn beide Attribute gesetzt sind. Der Grund dafür ist, dass sich ein mit `Expires` festgelegtes Datum und eine entsprechende Uhrzeit auf den Client beziehen, auf dem das Cookie gesetzt wird. Weicht die Zeit des Servers davon ab, kann dies zu Fehlern führen.

- _Sitzungs-Cookies_ – Cookies ohne `Max-Age`- oder `Expires`-Attribut – werden gelöscht, wenn die aktuelle Sitzung endet. Der Browser bestimmt, wann die „aktuelle Sitzung“ endet. Einige Browser stellen Sitzungen beim Neustart wieder her. Dadurch können Sitzungs-Cookies unbegrenzt bestehen bleiben.

  > [!NOTE]
  > Wenn Ihre Website Benutzer authentifiziert, sollte sie bei jeder Authentifizierung Sitzungs-Cookies neu erzeugen und senden – auch dann, wenn bereits welche vorhanden sind. So lassen sich [Session-Fixation](https://community.owasp.org/attacks/Session_fixation)-Angriffe verhindern, bei denen Dritte die Sitzung eines Benutzers wiederverwenden können.

Um ein Cookie sofort zu entfernen, setzen Sie es erneut mit demselben Namen, Path und Domain (sofern angegeben) und setzen sein `Expires`-Attribut auf ein Datum in der Vergangenheit oder sein `Max-Age`-Attribut auf `0` oder einen negativen Wert. Dadurch wird der Browser angewiesen, das Cookie sofort zu löschen. Zum Beispiel:

```http
Set-Cookie: id=a3fWa; Max-Age=0
```

Mit dem Antwort-Header {{httpheader("Clear-Site-Data")}} können Sie außerdem alle Cookies löschen, die einer registrierbaren Domain zugeordnet sind.
Beispielsweise würde der folgende, von `https://foo.example.com/` gesendete Header alle Cookies löschen, die von `example.com` und sämtlichen Subdomains wie `all.bar.example.com` gesendet werden.

```http
Clear-Site-Data: "cookies"
```

Es gibt Techniken, mit denen gelöschte Cookies wiederhergestellt werden sollen. Diese werden als „Zombie-Cookies“ bezeichnet. Solche Techniken verstoßen gegen die Grundsätze des [Datenschutzes](#datenschutz_und_tracking) und der Benutzerkontrolle, können gegen [Datenschutzvorschriften](#vorschriften_zu_cookies) verstoßen und Betreiber einer Website, die sie einsetzt, rechtlichen Risiken aussetzen.

### Cookie-Werte aktualisieren

Um ein Cookie über HTTP zu aktualisieren, kann der Server einen {{HTTPHeader("Set-Cookie")}}-Header mit dem Namen des vorhandenen Cookies und einem neuen Wert senden. Zum Beispiel:

```http
Set-Cookie: id=new-value
```

Dafür gibt es verschiedene Gründe. Beispielsweise könnte ein Benutzer seine Einstellungen geändert haben und die Anwendung möchte diese Änderungen in den clientseitigen Daten berücksichtigen. Dafür könnten Sie auch einen clientseitigen Speichermechanismus wie [Web Storage](/de/docs/Web/API/Web_Storage_API) verwenden.

#### Cookies über JavaScript aktualisieren

Im Browser können Sie mit JavaScript neue Cookies erstellen, indem Sie die Eigenschaft [`Document.cookie`](/de/docs/Web/API/Document/cookie) oder die asynchrone [Cookie Store API](/de/docs/Web/API/Cookie_Store_API) verwenden. Beachten Sie, dass alle folgenden Beispiele `Document.cookie` verwenden, da diese Option am breitesten unterstützt wird und am längsten etabliert ist.

```js
document.cookie = "yummy_cookie=chocolate";
document.cookie = "tasty_cookie=strawberry";
```

Sie können auch auf vorhandene Cookies zugreifen und ihnen neue Werte zuweisen:

```js
console.log(document.cookie);
// logs "yummy_cookie=chocolate; tasty_cookie=strawberry"

document.cookie = "yummy_cookie=blueberry";

console.log(document.cookie);
// logs "tasty_cookie=strawberry; yummy_cookie=blueberry"
```

Aus Sicherheitsgründen können Sie Cookie-Werte nicht ändern, indem Sie beim Auslösen einer Anfrage direkt einen aktualisierten `Cookie`-Header senden, beispielsweise über [`fetch()`](/de/docs/Web/API/Window/fetch) oder [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest).

Es gibt gute Gründe, JavaScript das Ändern von Cookies grundsätzlich nicht zu erlauben. Sie können verhindern, dass JavaScript auf ein Cookie zugreift, indem Sie beim Erstellen das Attribut [`HttpOnly`](/de/docs/Web/HTTP/Reference/Headers/Set-Cookie#httponly) angeben. Weitere Einzelheiten finden Sie im Abschnitt [Sicherheit](#sicherheit).

## Sicherheit

Wenn Sie Informationen in Cookies speichern, sind standardmäßig alle Cookie-Werte für den Endbenutzer sichtbar und können von ihm geändert werden. Ihre Cookies sollten keinesfalls missbraucht werden können – etwa indem Angreifer darauf zugreifen oder sie ändern oder indem sie an Domains gesendet werden, für die sie nicht bestimmt sind. Die möglichen Folgen reichen von ärgerlich – Anwendungen funktionieren nicht oder verhalten sich seltsam – bis katastrophal. Kriminelle könnten beispielsweise eine Sitzungs-ID stehlen und damit ein Cookie setzen, das sie als eine andere angemeldete Person erscheinen lässt. So könnten sie die Kontrolle über deren Bank- oder E-Commerce-Konto übernehmen.

Sie können Ihre Cookies auf verschiedene Arten absichern. Diese werden in diesem Abschnitt erläutert.

### Zugriff auf Ihre Cookies beschränken

Sie können auf zwei Arten sicherstellen, dass Cookies sicher gesendet werden und nicht für unbefugte Dritte oder Skripte zugänglich sind: mit den Attributen `Secure` und `HttpOnly`:

```http
Set-Cookie: id=a3fWa; Expires=Thu, 21 Oct 2021 07:28:00 GMT; Secure; HttpOnly
```

- Ein Cookie mit dem Attribut `Secure` wird nur bei verschlüsselten Anfragen über das HTTPS-Protokoll an den Server gesendet. Es wird niemals über ungesichertes HTTP gesendet (außer bei localhost; Safari unterstützt diese Ausnahme jedoch nicht). Dadurch können [Manipulator-in-the-Middle (MITM)](/de/docs/Web/Security/Attacks/MITM)-Angreifer nicht ohne Weiteres darauf zugreifen. Unsichere Websites (mit `http:` in der URL) können keine Cookies mit dem Attribut `Secure` setzen. Gehen Sie jedoch nicht davon aus, dass `Secure` jeden Zugriff auf sensible Informationen in Cookies verhindert. Beispielsweise kann jemand mit Zugriff auf die Festplatte des Clients die Informationen lesen und ändern. Dasselbe gilt für JavaScript, wenn das Attribut `HttpOnly` nicht gesetzt ist.

- Auf ein Cookie mit dem Attribut `HttpOnly` kann JavaScript nicht zugreifen, beispielsweise über [`Document.cookie`](/de/docs/Web/API/Document/cookie). Es kann nur auf dem Server ausgelesen werden. Cookies, die Benutzersitzungen aufrechterhalten, sollten beispielsweise das Attribut `HttpOnly` haben – sie für JavaScript zugänglich zu machen, wäre sehr unsicher. Diese Vorsichtsmaßnahme hilft, Cross-Site-Scripting-Angriffe ([XSS](/de/docs/Web/Security/Attacks/XSS)) einzudämmen.

> [!NOTE]
> Je nach Anwendung sollten Sie erwägen, statt sensibler Informationen direkt in Cookies eine opake Kennung zu speichern, die der Server nachschlägt. Sie können auch alternative Mechanismen für Authentifizierung und Vertraulichkeit wie [JSON Web Tokens](https://www.jwt.io/) prüfen.

### Festlegen, wohin Cookies gesendet werden

Die Attribute `Domain` und `Path` definieren den _Geltungsbereich_ eines Cookies: an welche URLs es gesendet wird.

- Das Attribut `Domain` gibt an, welcher Server ein Cookie empfangen kann. Wenn es gesetzt ist, sind Cookies auf dem angegebenen Server und seinen Subdomains verfügbar. Wenn Sie beispielsweise von `mozilla.org` aus `Domain=mozilla.org` setzen, sind die Cookies auf dieser Domain und auf Subdomains wie `developer.mozilla.org` verfügbar.

  ```http
  Set-Cookie: id=a3fWa; Expires=Thu, 21 Oct 2021 07:28:00 GMT; Secure; HttpOnly; Domain=mozilla.org
  ```

  Wenn der `Set-Cookie`-Header kein `Domain`-Attribut angibt, sind die Cookies auf dem Server verfügbar, der sie setzt, _aber nicht auf dessen Subdomains_. `Domain` anzugeben ist daher weniger restriktiv, als es wegzulassen.
  Beachten Sie, dass ein Server für das Attribut `Domain` nur seine eigene Domain oder eine übergeordnete Domain angeben kann, nicht jedoch eine Subdomain oder eine andere Domain.
  Ein Server mit der Domain `foo.example.com` könnte das Attribut beispielsweise auf `example.com` oder `foo.example.com` setzen, aber nicht auf `bar.foo.example.com` oder `elsewhere.com`. Die Cookies würden allerdings dennoch an Subdomains wie `bar.foo.example.com` _gesendet_.
  Weitere Einzelheiten finden Sie unter [Ungültige Domains](/de/docs/Web/HTTP/Reference/Headers/Set-Cookie#invalid_domains).

- Das Attribut `Path` gibt einen URL-Pfad an, der in der angefragten URL enthalten sein muss, damit der `Cookie`-Header gesendet wird. Zum Beispiel:

  ```http
  Set-Cookie: id=a3fWa; Expires=Thu, 21 Oct 2021 07:28:00 GMT; Secure; HttpOnly; Path=/docs
  ```

  Das Zeichen `%x2F` („/“) gilt als Verzeichnistrennzeichen; Unterverzeichnisse stimmen ebenfalls überein. Wenn Sie beispielsweise `Path=/docs` setzen, stimmen diese Anfragepfade überein:
  - `/docs`
  - `/docs/`
  - `/docs/Web/`
  - `/docs/Web/HTTP`

  Diese Anfragepfade stimmen dagegen nicht überein:
  - `/`
  - `/docsets`
  - `/fr/docs`

  > [!NOTE]
  > Mit dem Attribut `path` können Sie steuern, welche Cookies der Browser abhängig von den verschiedenen Bereichen einer Website sendet.
  > Es ist nicht als Sicherheitsmaßnahme gedacht und [schützt nicht](/de/docs/Web/API/Document/cookie#security) davor, dass ein Cookie unbefugt über einen anderen Pfad ausgelesen wird.

### Cookies von Drittanbietern mit `SameSite` steuern

Mit dem Attribut [`SameSite`](/de/docs/Web/HTTP/Reference/Headers/Set-Cookie#samesitesamesite-value) können Server festlegen, ob und wann Cookies bei Cross-Site-Anfragen gesendet werden – also [Cookies von Drittanbietern](/de/docs/Web/Privacy/Guides/Third-party_cookies). Bei Cross-Site-Anfragen stimmen die {{Glossary("Site", "Website")}} (die registrierbare Domain) und/oder das Schema (http oder https) nicht mit der Website überein, die der Benutzer gerade besucht. Dazu gehören Anfragen, die beim Anklicken von Links auf anderen Websites zur Navigation auf Ihre Website gesendet werden, sowie alle Anfragen, die eingebettete Inhalte von Drittanbietern senden.

`SameSite` hilft, die unbeabsichtigte Weitergabe von Informationen zu verhindern, den [Datenschutz](#datenschutz_und_tracking) der Benutzer zu wahren und einen gewissen Schutz vor {{Glossary("CSRF", "Cross-Site-Request-Forgery")}}-Angriffen zu bieten. Das Attribut kann drei Werte annehmen: `Strict`, `Lax` und `None`:

- `Strict` bewirkt, dass der Browser das Cookie nur bei Anfragen sendet, die von der Ursprungswebsite des Cookies ausgehen. Dies sollte für Cookies verwendet werden, die Funktionen betreffen, auf die erst nach einer anfänglichen Navigation zugegriffen wird, etwa Authentifizierung oder die Speicherung von Warenkorbinformationen.

  ```http
  Set-Cookie: cart=110045_77895_53420; SameSite=Strict
  ```

  > [!NOTE]
  > Cookies, die für sensible Informationen verwendet werden, sollten außerdem eine kurze [Lebensdauer](#removal_defining_the_lifetime_of_a_cookie) haben.

- `Lax` verhält sich ähnlich. Der Browser sendet das Cookie jedoch auch, wenn der Benutzer zur Ursprungswebsite des Cookies _navigiert_ (selbst wenn er von einer anderen Website kommt). Dies ist für Cookies nützlich, die die Darstellung einer Website beeinflussen. Beispielsweise könnten auf Ihrer Website Informationen zu einem Partnerprodukt zusammen mit einem Affiliate-Link stehen. Wenn jemand diesem Link zur Website des Partners folgt, könnte diese ein Cookie setzen, das den Besuch über den Affiliate-Link festhält, ein Prämienbanner anzeigt und beim Kauf des Produkts einen Rabatt gewährt.

  ```http
  Set-Cookie: affiliate=e4rt45dw; SameSite=Lax
  ```

- `None` legt fest, dass Cookies sowohl bei Anfragen von der Ursprungswebsite als auch bei Cross-Site-Anfragen gesendet werden. Dies ist nützlich, wenn Sie Cookies bei Anfragen mitsenden möchten, die von auf anderen Websites eingebetteten Drittanbieterinhalten ausgehen, beispielsweise von Anbietern für Werbetechnologie oder Analysen. Beachten Sie: Wenn `SameSite=None` gesetzt ist, muss auch das Attribut `Secure` gesetzt sein – `SameSite=None` erfordert einen _sicheren Kontext_.

  ```http
  Set-Cookie: widget_session=7yjgj57e4n3d; SameSite=None; Secure; HttpOnly
  ```

Wenn kein `SameSite`-Attribut gesetzt ist, behandeln manche Browser das Cookie standardmäßig als `Lax`.

### Cookie-Präfixe

Aufgrund der Funktionsweise von Cookies kann ein Server nicht bestätigen, dass ein Cookie von einem sicheren Ursprung gesetzt wurde, oder auch nur feststellen, _wo_ es ursprünglich gesetzt wurde.

Eine Anwendung auf einer Subdomain kann ein Cookie mit dem Attribut `Domain` setzen und es damit auf allen anderen Subdomains zugänglich machen. Dieser Mechanismus kann für einen [Session-Fixation](https://community.owasp.org/attacks/Session_fixation)-Angriff missbraucht werden.

Als [zusätzliche Schutzmaßnahme](<https://en.wikipedia.org/wiki/Defense_in_depth_(computing)>) können Sie _Cookie-Präfixe_ verwenden, um bei unterstützenden User-Agents bestimmte Einschränkungen für die Attribute eines Cookies durchzusetzen. Alle Cookie-Präfixe beginnen mit einem doppelten Unterstrich (`__`) und enden mit einem Bindestrich (`-`). Es gibt vier Präfixe:

- **`__Secure-`**: Cookies, deren Namen mit `__Secure-` beginnen, müssen von einer sicheren Seite (HTTPS) mit dem Attribut `Secure` gesetzt werden.
- **`__Host-`**: Cookies, deren Namen mit `__Host-` beginnen, müssen von einer sicheren Seite (HTTPS) mit dem Attribut `Secure` gesetzt werden. Außerdem dürfen sie kein `Domain`-Attribut haben, und das Attribut `Path` muss auf `/` gesetzt sein. Dadurch wird gewährleistet, dass solche Cookies nur an den Host gesendet werden, der sie gesetzt hat, und an keinen anderen Host derselben Domain. Es wird außerdem gewährleistet, dass sie für den gesamten Host gelten und auf keinem Pfad dieses Hosts überschrieben werden können. Mit dieser Kombination kommt ein Cookie der Behandlung des Ursprungs als Sicherheitsgrenze so nahe wie möglich.
- **`__Http-`**: Cookies, deren Namen mit `__Http-` beginnen, müssen von einer sicheren Seite (HTTPS) mit dem Attribut `Secure` gesetzt werden. Zusätzlich muss das Attribut `HttpOnly` gesetzt sein, um nachzuweisen, dass sie über den `Set-Cookie`-Header gesetzt wurden. Sie können nicht über JavaScript-Funktionen wie [`Document.cookie`](/de/docs/Web/API/Document/cookie) oder die [Cookie Store API](/de/docs/Web/API/Cookie_Store_API) gesetzt oder geändert werden.
- **`__Host-Http-`**: Cookies, deren Namen mit `__Host-Http-` beginnen, müssen von einer sicheren Seite (HTTPS) mit dem Attribut `Secure` gesetzt werden. Außerdem muss das Attribut `HttpOnly` gesetzt sein, um nachzuweisen, dass sie über den `Set-Cookie`-Header gesetzt wurden. Zusätzlich unterliegen sie denselben Einschränkungen wie Cookies mit dem Präfix `__Host-`. Mit dieser Kombination kommt ein Cookie der Behandlung des Ursprungs als Sicherheitsgrenze so nahe wie möglich. Gleichzeitig ist für Entwickler und Serverbetreiber erkennbar, dass sein Geltungsbereich auf HTTP-Anfragen beschränkt ist.

Der Browser lehnt Cookies mit diesen Präfixen ab, wenn sie die jeweiligen Einschränkungen nicht erfüllen. Da der Anwendungsserver bei der Prüfung, ob ein Benutzer authentifiziert oder ein CSRF-Token korrekt ist, nur nach einem bestimmten Cookie-Namen sucht, bietet dies einen wirksamen Schutz vor [Session-Fixation](https://community.owasp.org/attacks/Session_fixation).

> [!NOTE]
> Die Webanwendung _muss_ auf dem Server den vollständigen Cookie-Namen einschließlich des Präfixes prüfen. User-Agents entfernen das Präfix _nicht_, bevor sie das Cookie im {{HTTPHeader("Cookie")}}-Header einer Anfrage senden.

Weitere Informationen zu Cookie-Präfixen und zum aktuellen Stand der Browser-Unterstützung finden Sie im [Abschnitt über Präfixe im Referenzartikel zu Set-Cookie](/de/docs/Web/HTTP/Reference/Headers/Set-Cookie#cookie_prefixes).

## Datenschutz und Tracking

Weiter oben haben wir besprochen, wie sich mit dem Attribut `SameSite` steuern lässt, wann Cookies von Drittanbietern gesendet werden, und wie dies zum Schutz der Privatsphäre der Benutzer beitragen kann. Datenschutz ist bei der Entwicklung von Websites sehr wichtig: Wenn Sie ihn ernst nehmen, können Sie Vertrauen bei Ihren Benutzern aufbauen. Andernfalls können Sie dieses Vertrauen vollständig verlieren und zahlreiche weitere Probleme verursachen.

Cookies von Drittanbietern können durch Inhalte von Drittanbietern gesetzt werden, die über {{htmlelement("iframe")}}-Elemente in Websites eingebettet sind. Sie haben viele legitime Verwendungszwecke, darunter die Weitergabe von Benutzerprofilinformationen, das Zählen von Anzeigenimpressionen und das Sammeln von Analysedaten über verschiedene zusammengehörige Domains hinweg.

Cookies von Drittanbietern können jedoch auch für aufdringliche, unangenehme Benutzererfahrungen verwendet werden. Ein Drittanbieter-Server kann anhand der Cookies, die derselbe Browser beim Besuch mehrerer Websites an ihn sendet, ein Profil des Browserverlaufs und der Gewohnheiten eines Benutzers erstellen. Ein klassisches Beispiel: Sie suchen auf einer Website nach Informationen zu einem Produkt und sehen anschließend überall im Web Werbung für ähnliche Produkte.

Einige Browser blockieren Cookies von Drittanbietern standardmäßig. Cookies von Drittanbietern (oder speziell Tracking-Cookies) können auch durch andere Browsereinstellungen oder Erweiterungen blockiert werden.

> [!NOTE]
> Das Blockieren von Cookies kann dazu führen, dass einige Komponenten von Drittanbietern, beispielsweise Social-Media-Widgets, nicht wie vorgesehen funktionieren. Da Browser Cookies von Drittanbietern zunehmend einschränken, sollten Entwickler nach Möglichkeiten suchen, ihre Abhängigkeit davon zu verringern.

Ausführliche Informationen zu Cookies von Drittanbietern, den damit verbundenen Problemen und verfügbaren Alternativen finden Sie in unserem Artikel [Cookies von Drittanbietern](/de/docs/Web/Privacy/Guides/Third-party_cookies). Weitere Informationen zum Datenschutz allgemein finden Sie auf unserer Übersichtsseite [Datenschutz](/de/docs/Web/Privacy).

## Vorschriften zu Cookies

Zu den Gesetzen und Vorschriften, die die Verwendung von Cookies regeln, gehören:

- Die [Datenschutz-Grundverordnung](https://gdpr.eu/) (DSGVO) in der Europäischen Union
- Die ePrivacy-Richtlinie der EU
- Der California Consumer Privacy Act

Diese Vorschriften haben weltweite Auswirkungen. Sie gelten für jede Website im _World Wide_ Web, auf die Benutzer aus den jeweiligen Rechtsräumen zugreifen (der EU und Kalifornien, wobei das kalifornische Gesetz unter anderem nur für Unternehmen mit einem Bruttoumsatz von mehr als 25 Millionen US-Dollar gilt).

Diese Vorschriften enthalten Anforderungen wie:

- Benutzer darüber zu informieren, dass Ihre Website Cookies verwendet.
- Benutzern zu ermöglichen, den Empfang einiger oder aller Cookies abzulehnen.
- Benutzern zu ermöglichen, den Großteil Ihres Dienstes auch ohne Cookies zu nutzen.

Möglicherweise gelten an Ihrem Standort weitere Vorschriften für die Verwendung von Cookies. Es liegt in Ihrer Verantwortung, diese Vorschriften zu kennen und einzuhalten. Es gibt Unternehmen, die Code für „Cookie-Banner“ anbieten, um Ihnen bei der Einhaltung der Vorschriften zu helfen.

> [!NOTE]
> Unternehmen sollten aus Transparenzgründen und zur Einhaltung der Vorschriften offenlegen, welche Arten von Cookies sie auf ihren Websites verwenden. Beispiele sind [Googles Hinweise zu den verwendeten Cookie-Arten](https://policies.google.com/technologies/cookies#types-of-cookies) und Mozillas [Datenschutzhinweise zu Websites, Kommunikation und Cookies](https://www.mozilla.org/en-US/privacy/websites/#cookies).

## Siehe auch

- Zugehörige HTTP-Header: {{HTTPHeader("Set-Cookie")}}, {{HTTPHeader("Cookie")}}
- Zugehörige JavaScript-APIs: [`Document.cookie`](/de/docs/Web/API/Document/cookie), [`Navigator.cookieEnabled`](/de/docs/Web/API/Navigator/cookieEnabled), [Cookie Store API](/de/docs/Web/API/Cookie_Store_API)
- [Cookies von Drittanbietern](/de/docs/Web/Privacy/Guides/Third-party_cookies)
- [Cookie-Spezifikation: RFC 6265](https://datatracker.ietf.org/doc/html/rfc6265)
- [Cookies, die DSGVO und die ePrivacy-Richtlinie](https://gdpr.eu/cookies/)
