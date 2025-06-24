---
title: Verwendung von HTTP-Cookies
slug: Web/HTTP/Guides/Cookies
l10n:
  sourceCommit: a84b606ffd77c40a7306be6c932a74ab9ce6ab96
---

{{HTTPSidebar}}

Ein **Cookie** (auch bekannt als Web-Cookie oder Browser-Cookie) ist ein kleines Datenfragment, das ein Server an den Webbrowser eines Benutzers sendet. Der Browser kann Cookies speichern, neue Cookies erstellen, vorhandene ändern und diese bei späteren Anfragen an denselben Server zurücksenden. Cookies ermöglichen es Webanwendungen, begrenzte Datenmengen zu speichern und Sitzungsinformationen zu behalten; standardmäßig ist das HTTP-Protokoll [zustandslos](/de/docs/Web/HTTP/Guides/Overview#http_is_stateless_but_not_sessionless).

In diesem Artikel werden wir die Hauptverwendungszwecke von Cookies untersuchen, bewährte Methoden für ihren Einsatz erklären und ihre Datenschutz- und Sicherheitsauswirkungen beleuchten.

## Wofür Cookies verwendet werden

In der Regel verwendet der Server die Inhalte von HTTP-Cookies, um zu bestimmen, ob verschiedene Anfragen vom selben Browser/Nutzer stammen, und gibt dann eine personalisierte oder allgemeine Antwort aus, je nach Bedarf. Im Folgenden wird ein einfaches Anmeldesystem für Benutzer beschrieben:

1. Der Benutzer sendet Anmeldedaten an den Server, zum Beispiel über ein Formular.
2. Wenn die Anmeldedaten korrekt sind, aktualisiert der Server die Benutzeroberfläche, um anzuzeigen, dass der Benutzer angemeldet ist, und antwortet mit einem Cookie, das eine Sitzungs-ID enthält, die den Anmeldestatus im Browser speichert.
3. Später wechselt der Benutzer zu einer anderen Seite auf derselben Website. Der Browser sendet das Cookie mit der Sitzungs-ID zusammen mit der entsprechenden Anfrage, um anzuzeigen, dass der Benutzer noch immer angemeldet ist.
4. Der Server überprüft die Sitzungs-ID und, wenn sie noch gültig ist, wird dem Benutzer eine personalisierte Version der neuen Seite gesendet. Wenn sie nicht gültig ist, wird die Sitzungs-ID gelöscht und dem Benutzer wird eine generische Version der Seite gezeigt (oder vielleicht eine "Zugriff verweigert"-Meldung mit der Aufforderung, sich erneut anzumelden).

![Visuelle Darstellung der obigen Beschreibung des Anmeldesystems](cookie-basic-example.png)

Cookies werden hauptsächlich für drei Zwecke verwendet:

- **Sitzungsverwaltung**: Anmeldestatus des Benutzers, Einkaufswageninhalte, Spielstände oder andere sitzungsbezogene Details, die sich der Server merken muss.
- **Personalisierung**: Benutzereinstellungen wie Anzeigesprache und UI-Design.
- **Verfolgung**: Aufzeichnen und Analysieren des Benutzerverhaltens.

### Datenspeicherung

In den frühen Tagen des Web, als es keine andere Möglichkeit gab, wurden Cookies für allgemeine clientseitige Datenspeichereinsätze genutzt. Moderne Speicher-APIs werden jetzt empfohlen, zum Beispiel die [Web Storage API](/de/docs/Web/API/Web_Storage_API) (`localStorage` und `sessionStorage`) und [IndexedDB](/de/docs/Web/API/IndexedDB_API).

Sie sind mit Blick auf die Speicherung konzipiert, senden nie Daten an den Server und bringen nicht die Nachteile mit sich, die das Speichern von Daten in Cookies mit sich bringt:

- Browser sind im Allgemeinen auf eine maximale Anzahl von Cookies pro Domain beschränkt (variiert je nach Browser, im Allgemeinen im dreistelligen Bereich) und eine maximale Größe pro Cookie (in der Regel 4KB). Speicher-APIs können größere Datenmengen speichern.
- Cookies werden mit jeder Anfrage gesendet, was die Performance verschlechtern kann (zum Beispiel bei langsamen mobilen Datenverbindungen), besonders wenn viele Cookies gesetzt sind.

> [!NOTE]
> Um gespeicherte Cookies (und andere von einer Webseite genutzten Speicherformen) zu sehen, können Sie den [Storage Inspector](https://firefox-source-docs.mozilla.org/devtools-user/storage_inspector/index.html) in den Firefox Developer Tools oder das [Application panel](https://developer.chrome.com/docs/devtools/progressive-web-apps) in den Chrome Developer Tools nutzen.

## Erstellen, Entfernen und Aktualisieren von Cookies

Nachdem eine HTTP-Anfrage empfangen wurde, kann ein Server eine oder mehrere {{HTTPHeader("Set-Cookie")}}-Header mit der Antwort senden, von denen jeder ein separates Cookie setzt. Ein Cookie wird gesetzt, indem ein Name-Wert-Paar angegeben wird, wie folgt:

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
> Finden Sie heraus, wie Sie den `Set-Cookie`-Header in verschiedenen serverseitigen Sprachen/Frameworks verwenden: [PHP](https://www.php.net/manual/de/function.setcookie.php), [Node.js](https://nodejs.org/docs/latest-v19.x/api/http.html#responsesetheadername-value), [Python](https://docs.python.org/3/library/http.cookies.html), [Ruby on Rails](https://api.rubyonrails.org/classes/ActionDispatch/Cookies.html).

Wenn eine neue Anfrage gestellt wird, sendet der Browser normalerweise zuvor gespeicherte Cookies für die aktuelle Domain zurück an den Server innerhalb eines {{HTTPHeader("Cookie")}} HTTP-Headers:

```http
GET /sample_page.html HTTP/2.0
Host: www.example.org
Cookie: yummy_cookie=chocolate; tasty_cookie=strawberry
```

### Entfernung: Lebensdauer eines Cookies definieren

Sie können ein Ablaufdatum oder eine Zeitdauer angeben, nach der das Cookie gelöscht werden soll und nicht mehr gesendet wird. Abhängig von den Attributen, die im {{HTTPHeader("Set-Cookie")}}-Header gesetzt sind, wenn die Cookies erstellt werden, handelt es sich entweder um _permanente_ oder _Sitzungs_-Cookies:

- Permanente Cookies werden nach dem im `Expires`-Attribut angegebenen Datum gelöscht:

  ```http
  Set-Cookie: id=a3fWa; Expires=Thu, 31 Oct 2021 07:28:00 GMT;
  ```

  oder nach der im `Max-Age`-Attribut angegebenen Zeitdauer:

  ```http
  Set-Cookie: id=a3fWa; Max-Age=2592000
  ```

  > [!NOTE] > `Expires` ist schon länger verfügbar als `Max-Age`, jedoch ist `Max-Age` weniger fehleranfällig und hat Vorrang, wenn beides gesetzt ist. Der Grund dafür ist, dass beim Setzen eines `Expires`-Datums und -Zeitpunkts, diese relativ zum Client sind, auf dem das Cookie gesetzt wird. Wenn der Server anders eingestellt ist, könnte dies zu Fehlern führen.

- _Sitzungs_-Cookies — Cookies ohne ein `Max-Age`- oder `Expires`-Attribut – werden gelöscht, wenn die aktuelle Sitzung endet. Der Browser definiert, wann die "aktuelle Sitzung" endet, und einige Browser verwenden _Sitzungswiederherstellung_ beim Neustart. Dies kann dazu führen, dass Sitzungscookies unbegrenzt dauern.

  > [!NOTE]
  > Wenn Ihre Website Benutzer authentifiziert, sollte sie Sitzungs-Cookies neu generieren und zurücksenden, auch solche, die bereits existieren, wann immer sich ein Benutzer authentifiziert. Dieser Ansatz hilft, [Session Fixation](https://owasp.org/www-community/attacks/Session_fixation)-Angriffe zu verhindern, bei denen ein Dritter die Sitzung eines Benutzers wiederverwenden kann.

Es gibt einige Techniken, die darauf abzielen, Cookies nach ihrer Löschung wiederherzustellen. Diese sind als "Zombie-Cookies" bekannt. Solche Techniken verletzen die Grundsätze des Benutzer-[Datenschutzes](#datenschutz_und_verfolgung) und der Kontrolle, können gegen [Datenschutzbestimmungen](#cookie-bezogene_vorschriften) verstoßen und eine Website, die sie verwendet, rechtlichen Risiken aussetzen.

### Aktualisieren von Cookie-Werten

Um ein Cookie per HTTP zu aktualisieren, kann der Server einen {{HTTPHeader("Set-Cookie")}}-Header mit dem bestehenden Cookie-Namen und einem neuen Wert senden. Zum Beispiel:

```http
Set-Cookie: id=new-value
```

Es gibt mehrere Gründe, warum Sie dies tun könnten, zum Beispiel, wenn ein Benutzer seine Präferenzen aktualisiert hat und die Anwendung die Änderungen in clientseitigen Daten widerspiegeln möchte (Sie könnten dies auch mit einem clientseitigen Speichermedium wie [Web Storage](/de/docs/Web/API/Web_Storage_API) tun).

#### Cookies über JavaScript aktualisieren

Im Browser können Sie neue Cookies über JavaScript mithilfe der [`Document.cookie`](/de/docs/Web/API/Document/cookie)-Eigenschaft oder der asynchronen [Cookie Store API](/de/docs/Web/API/Cookie_Store_API) erstellen. Beachten Sie, dass alle unten stehenden Beispiele `Document.cookie` verwenden, da dies die am weitesten unterstützte/etablierte Option ist.

```js
document.cookie = "yummy_cookie=chocolate";
document.cookie = "tasty_cookie=strawberry";
```

Sie können auch auf vorhandene Cookies zugreifen und neue Werte für sie setzen, vorausgesetzt, das [`HttpOnly`](/de/docs/Web/HTTP/Reference/Headers/Set-Cookie#httponly)-Attribut ist bei ihnen nicht gesetzt (d.h. im `Set-Cookie`-Header, der sie erstellt hat):

```js
console.log(document.cookie);
// logs "yummy_cookie=chocolate; tasty_cookie=strawberry"

document.cookie = "yummy_cookie=blueberry";

console.log(document.cookie);
// logs "tasty_cookie=strawberry; yummy_cookie=blueberry"
```

Beachten Sie, dass Sie aus Sicherheitsgründen Cookie-Werte nicht durch das Senden eines aktualisierten `Cookie`-Headers direkt ändern können, wenn Sie eine Anfrage initiieren, d.h. über [`fetch()`](/de/docs/Web/API/Window/fetch) oder [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest). Beachten Sie, dass es auch gute Gründe gibt, warum Sie JavaScript nicht erlauben sollten, Cookies zu ändern — d.h. `HttpOnly` bei der Erstellung zu setzen. Weitere Details finden Sie im Abschnitt [Sicherheit](#sicherheit).

## Sicherheit

Wenn Sie Informationen in Cookies speichern, sind standardmäßig alle Cookie-Werte für den Endbenutzer sichtbar und können von ihm geändert werden. Sie sollten wirklich verhindern, dass Ihre Cookies missbraucht werden — zum Beispiel von böswilligen Akteuren zugegriffen/verändert oder an Domains gesendet werden, wo sie nicht gesendet werden sollten. Die potenziellen Konsequenzen können von ärgerlich bis katastrophal reichen. Ein Krimineller könnte zum Beispiel eine Sitzungs-ID stehlen und sie verwenden, um ein Cookie zu setzen, das ihn wie eine andere eingeloggte Person aussehen lässt, während er auf ihr Bank- oder E-Commerce-Konto zugreift.

Sie können Ihre Cookies auf verschiedene Weise sichern, die in diesem Abschnitt überprüft werden.

### Zugriff auf Ihre Cookies blockieren

Sie können sicherstellen, dass Cookies sicher gesendet und nicht von unbeabsichtigten Parteien oder Skripten abgerufen werden, indem Sie entweder das `Secure`-Attribut oder das `HttpOnly`-Attribut verwenden:

```http
Set-Cookie: id=a3fWa; Expires=Thu, 21 Oct 2021 07:28:00 GMT; Secure; HttpOnly
```

- Ein Cookie mit dem `Secure`-Attribut wird nur mit einer verschlüsselten Anfrage über das HTTPS-Protokoll an den Server gesendet. Es wird nie mit ungesichertem HTTP gesendet (außer auf localhost), was bedeutet, dass {{Glossary("MitM", "man-in-the-middle")}}-Angreifer nicht einfach darauf zugreifen können. Unsichere Seiten (mit `http:` in der URL) können keine Cookies mit dem `Secure`-Attribut setzen. Allerdings sollten Sie nicht annehmen, dass `Secure` sämtlichen Zugriff auf sensible Informationen in Cookies verhindert. Zum Beispiel kann jemand, der Zugriff auf die Festplatte des Clients hat (oder JavaScript, wenn das `HttpOnly`-Attribut nicht gesetzt ist), die Informationen lesen und ändern.

- Ein Cookie mit dem `HttpOnly`-Attribut kann von JavaScript, zum Beispiel mit [`Document.cookie`](/de/docs/Web/API/Document/cookie), nicht abgerufen werden; es kann nur abgerufen werden, wenn es den Server erreicht. Cookies, die Benutzersitzungen beibehalten, sollten das `HttpOnly`-Attribut gesetzt haben — es wäre wirklich unsicher, sie für JavaScript zugänglich zu machen. Dieses Vorsichtsmaßnahme hilft, Cross-Site Scripting ([XSS](/de/docs/Web/Security/Attacks/XSS))-Angriffe zu entschärfen.

> [!NOTE]
> Abhängig von der Anwendung könnten Sie ein undurchsichtiges Identifikationsmerkmal verwenden, das der Server nachschlägt, anstatt sensible Informationen direkt in Cookies zu speichern, oder alternative Authentifizierungs-/Vertraulichkeitsmechanismen wie [JSON Web Tokens](https://jwt.io/) untersuchen.

### Festlegen, wohin Cookies gesendet werden

Die Attribute `Domain` und `Path` definieren den _Geltungsbereich_ eines Cookies: an welche URLs die Cookies gesendet werden.

- Das `Domain`-Attribut gibt an, welcher Server ein Cookie empfangen kann. Wenn angegeben, sind Cookies auf dem angegebenen Server und dessen Subdomains verfügbar. Zum Beispiel, wenn Sie `Domain=mozilla.org` von `mozilla.org` setzen, sind Cookies auf dieser Domain und Subdomains wie `developer.mozilla.org` verfügbar.

  ```http
  Set-Cookie: id=a3fWa; Expires=Thu, 21 Oct 2021 07:28:00 GMT; Secure; HttpOnly; Domain=mozilla.org
  ```

  Wenn der `Set-Cookie`-Header kein `Domain`-Attribut angibt, sind die Cookies auf dem Server verfügbar, der sie setzt, _nicht jedoch auf seinen Subdomains_. Somit ist die Angabe des `Domain`-Attributs weniger restriktiv als das Weglassen.
  Beachten Sie, dass ein Server das `Domain`-Attribut nur auf seine eigene Domain oder eine übergeordnete Domain setzen kann, nicht auf eine Subdomain oder eine andere Domain.
  So könnte zum Beispiel ein Server mit der Domain `foo.example.com` das Attribut auf `example.com` oder `foo.example.com` setzen, jedoch nicht auf `bar.foo.example.com` oder `elsewhere.com` (die Cookies würden jedoch _an_ Subdomains wie `bar.foo.example.com` gesendet).
  Weitere Informationen finden Sie unter [Ungültige Domains](/de/docs/Web/HTTP/Reference/Headers/Set-Cookie#invalid_domains).

- Das `Path`-Attribut gibt einen URL-Pfad an, der in der angeforderten URL existieren muss, um den `Cookie`-Header zu senden. Zum Beispiel:

  ```http
  Set-Cookie: id=a3fWa; Expires=Thu, 21 Oct 2021 07:28:00 GMT; Secure; HttpOnly; Path=/docs
  ```

  Das `%x2F` ("/")-Zeichen wird als Verzeichnistrenner betrachtet, und auch Unterverzeichnisse werden übereinstimmend behandelt. Zum Beispiel, wenn Sie `Path=/docs` setzen, entsprechen diese Anfragepfade:

  - `/docs`
  - `/docs/`
  - `/docs/Web/`
  - `/docs/Web/HTTP`

  Aber diese Anfragepfade nicht:

  - `/`
  - `/docsets`
  - `/fr/docs`

  > [!NOTE]
  > Das `path`-Attribut ermöglicht Ihnen die Kontrolle darüber, welche Cookies der Browser je nach den verschiedenen Teilen einer Website sendet.
  > Es ist nicht als Sicherheitsmaßnahme gedacht und [schützt nicht](/de/docs/Web/API/Document/cookie#security) vor unbefugtem Lesen des Cookies von einem anderen Pfad.

### Kontrolle von Drittanbieter-Cookies mit `SameSite`

Das [`SameSite`](/de/docs/Web/HTTP/Reference/Headers/Set-Cookie#samesitesamesite-value)-Attribut erlaubt es Servern zu spezifizieren, ob/wann Cookies bei Anfragen von Drittanbietern gesendet werden — d.h. [Drittanbieter-Cookies](/de/docs/Web/Privacy/Guides/Third-party_cookies). Anfragen von Drittanbietern sind Anfragen, bei denen die {{Glossary("Site", "Seite")}} (die registrierbare Domain) und/oder das Schema (http oder https) nicht mit der Seite übereinstimmen, die der Benutzer aktuell besucht. Dazu gehören Anfragen, die beim Klicken auf Links auf anderen Seiten gesendet werden, um zu Ihrer Seite zu navigieren, sowie alle Anfragen, die von eingebetteten Inhalten von Drittanbietern gesendet werden.

`SameSite` hilft, das Auslaufen von Informationen zu verhindern, den Benutzer-[Datenschutz](#datenschutz_und_verfolgung) zu wahren und bietet einen gewissen Schutz vor {{Glossary("CSRF", "Cross-Site Request Forgery")}}-Angriffen. Es nimmt drei mögliche Werte: `Strict`, `Lax` und `None`:

- `Strict` bewirkt, dass der Browser das Cookie nur auf Anfragen schickt, die von der Ursprungsseite des Cookies stammen. Dies sollte verwendet werden, wenn Sie Cookies haben, die sich auf Funktionen beziehen, die immer hinter einer initialen Navigation sein werden, wie Authentifizierung oder das Speichern von Einkaufswageninformationen.

  ```http
  Set-Cookie: cart=110045_77895_53420; SameSite=Strict
  ```

  > [!NOTE]
  > Cookies, die für sensible Informationen verwendet werden, sollten auch eine kurze [Lebensdauer](#removal_defining_the_lifetime_of_a_cookie) haben.

- `Lax` ist ähnlich, außer dass der Browser das Cookie auch sendet, wenn der Benutzer _zur Ursprungsseite des Cookies navigiert_ (auch wenn der Benutzer von einer anderen Seite kommt). Dies ist nützlich für Cookies, die die Darstellung einer Site betreffen – zum Beispiel könnten Sie Produktinformationen mit einem Partnerprodukt zusammen mit einem Affiliate-Link auf Ihrer Website haben. Wenn dieser Link auf die Partnerwebsite gefolgt wird, möchten sie möglicherweise ein Cookie setzen, das angibt, dass der Affiliate-Link gefolgt wurde, was ein Belohnungsbanner anzeigt und einen Rabatt bietet, wenn das Produkt gekauft wird.

  ```http
  Set-Cookie: affiliate=e4rt45dw; SameSite=Lax
  ```

- `None` gibt an, dass Cookies sowohl bei ursprungs- als auch fremdseitigen Anfragen gesendet werden. Dies ist nützlich, wenn Sie Cookies zusammen mit Anfragen senden möchten, die von eingebettetem Drittanbieter-Inhalt in anderen Seiten gemacht werden, zum Beispiel von Anbietern von Werbetechnologie oder Analysen. Beachten Sie, dass, wenn `SameSite=None` gesetzt ist, auch das `Secure`-Attribut gesetzt werden muss — `SameSite=None` erfordert einen _sicheren Kontext_.

  ```http
  Set-Cookie: widget_session=7yjgj57e4n3d; SameSite=None; Secure; HttpOnly
  ```

Wenn kein `SameSite`-Attribut gesetzt ist, wird das Cookie standardmäßig als `Lax` behandelt.

### Cookie-Präfixe

Aufgrund des Designs des Cookie-Mechanismus kann ein Server nicht bestätigen, dass ein Cookie von einem sicheren Ursprung gesetzt wurde oder sogar feststellen, _wo_ ein Cookie ursprünglich gesetzt wurde.

Eine Anwendung auf einer Subdomain kann ein Cookie mit dem `Domain`-Attribut setzen, was den Zugriff auf dieses Cookie auf alle anderen Subdomains ermöglicht. Dieser Mechanismus kann in einem [Session Fixation](https://owasp.org/www-community/attacks/Session_fixation)-Angriff missbraucht werden.

Als [Defense-in-Depth-Maßnahme](https://de.wikipedia.org/wiki/Tiefenverteidigung), jedoch, können Sie _Cookie-Präfixe_ verwenden, um bestimmte Fakten über das Cookie zu überprüfen. Zwei Präfixe sind verfügbar:

- `__Host-`: Wenn ein Cookie-Name dieses Präfix hat, wird es in einem {{HTTPHeader("Set-Cookie")}}-Header nur akzeptiert, wenn es auch das `Secure`-Attribut hat, von einem sicheren Ursprung gesendet wird, _kein_ `Domain`-Attribut enthält und das `Path`-Attribut auf `/` gesetzt ist. Mit anderen Worten, das Cookie ist _domain-gesperrt_.
- `__Secure-`: Wenn ein Cookie-Name dieses Präfix hat, wird es in einem {{HTTPHeader("Set-Cookie")}}-Header nur akzeptiert, wenn es mit dem `Secure`-Attribut markiert ist und von einem sicheren Ursprung gesendet wird. Dies ist schwächer als das `__Host-`-Präfix.

Der Browser wird Cookies mit diesen Präfixen ablehnen, die nicht mit ihren Einschränkungen übereinstimmen. Dies stellt sicher, dass von einer Subdomain erstellte Cookies mit Präfixen entweder auf eine Subdomain beschränkt sind oder vollständig ignoriert werden. Da der Anwendungserver nur nach einem bestimmten Cookie-Namen sucht, wenn er feststellt, ob der Benutzer authentifiziert ist oder ein CSRF-Token korrekt ist, wirkt dies effektiv als Verteidigungsmaßnahme gegen [Session Fixation](https://owasp.org/www-community/attacks/Session_fixation).

> [!NOTE]
> Auf dem Server _muss_ die Webanwendung den vollständigen Cookie-Namen inklusive des Präfixes überprüfen. Benutzeragenten _entfernen_ das Präfix nicht, bevor sie es in einem {{HTTPHeader("Cookie")}}-Header einer Anfrage senden.

Weitere Informationen zu Cookie-Präfixen und dem aktuellen Stand der Browserunterstützung finden Sie im [Präfix-Abschnitt des Set-Cookie-Referenzartikels](/de/docs/Web/HTTP/Reference/Headers/Set-Cookie#cookie_prefixes).

## Datenschutz und Verfolgung

Wie zuvor erwähnt, kann das `SameSite`-Attribut genutzt werden, um zu kontrollieren, wann Drittanbieter-Cookies gesendet werden, und dies kann dazu beitragen, den Datenschutz der Benutzer zu wahren. Datenschutz ist ein sehr wichtiger Aspekt beim Erstellen von Websites, der bei richtiger Umsetzung das Vertrauen der Benutzer stärken kann. Bei schlechter Umsetzung können Vertrauen und viele weitere Probleme vollständig untergraben werden.

Drittanbieter-Cookies können von Drittanbieter-Inhalten gesetzt werden, die über {{htmlelement("iframe")}}s auf Websites eingebettet sind. Sie haben viele legitime Verwendungen, einschließlich der Weitergabe von Benutzerprofilinformationen, zählen von Anzeigenimpressionen oder das Sammeln von Analysen über verschiedene zusammenhängende Domains.

Allerdings können Drittanbieter-Cookies auch genutzt werden, um gruselige, aufdringliche Benutzererlebnisse zu schaffen. Ein Drittanbieter-Server kann basierend auf Cookies, die ihm von demselben Browser beim Zugriff auf verschiedene Seiten gesendet werden, ein Profil des Browserverlaufs und der Gewohnheiten eines Benutzers erstellen. Das klassische Beispiel ist, wenn Sie auf einer Seite nach Produktinformationen suchen und dann überall im Web von Anzeigen für ähnliche Produkte verfolgt werden.

Browseranbieter wissen, dass Benutzer dieses Verhalten nicht mögen, und haben alle begonnen, Drittanbieter-Cookies standardmäßig zu blockieren oder haben zumindest Pläne in diese Richtung gemacht. Drittanbieter-Cookies (oder einfach nur Tracking-Cookies) können auch durch andere Browsereinstellungen oder Erweiterungen blockiert werden.

> [!NOTE]
> Das Blockieren von Cookies kann dazu führen, dass einige Drittanbieterkomponenten (wie soziale Medien-Widgets) nicht wie beabsichtigt funktionieren. Da Browser weitere Beschränkungen für Drittanbieter-Cookies einführen, sollten Entwickler beginnen, Wege zu finden, ihre Abhängigkeit von diesen zu verringern.

Siehe unseren [Drittanbieter-Cookies](/de/docs/Web/Privacy/Guides/Third-party_cookies)-Artikel für detaillierte Informationen über Drittanbieter-Cookies, die damit zusammenhängenden Probleme und welche Alternativen verfügbar sind. Besuchen Sie unsere [Datenschutz](/de/docs/Web/Privacy)-Seite für mehr Informationen über Datenschutz im Allgemeinen.

## Cookie-bezogene Vorschriften

Gesetzgebung oder Vorschriften, die die Verwendung von Cookies betreffen, umfassen:

- Die [Datenschutz-Grundverordnung](https://gdpr.eu/) (GDPR) in der Europäischen Union
- Die Datenschutzrichtlinie für elektronische Kommunikation in der EU
- Das kalifornische Verbraucherschutzgesetz

Diese Vorschriften haben globale Reichweite. Sie gelten für jede Website im _World Wide_ Web, die von Benutzern aus diesen Rechtsordnungen aufgerufen wird (die EU und Kalifornien, mit dem Vorbehalt, dass das Gesetz in Kalifornien nur auf Unternehmen mit einem Bruttoumsatz von über 25 Millionen USD gilt, unter anderem).

Diese Vorschriften umfassen Anforderungen wie:

- Benutzer informieren, dass Ihre Website Cookies verwendet.
- Benutzern die Möglichkeit geben, den Empfang einiger oder aller Cookies abzulehnen.
- Benutzern erlauben, den Großteil Ihres Dienstes ohne den Empfang von Cookies zu nutzen.

Es könnte andere Vorschriften geben, die die Verwendung von Cookies in Ihrem Gebiet regeln. Die Verantwortung liegt bei Ihnen, diese Vorschriften zu kennen und einzuhalten. Es gibt Unternehmen, die "Cookie-Banner"-Code anbieten, der Ihnen hilft, diesen Vorschriften zu entsprechen.

> [!NOTE]
> Unternehmen sollten die Arten von Cookies offenlegen, die sie auf ihren Websites nutzen, um Transparenzzwecke und zur Einhaltung der Vorschriften. Zum Beispiel sehen Sie sich die [Hinweise von Google zu den von ihm verwendeten Cookie-Typen](https://policies.google.com/technologies/cookies#types-of-cookies) und Mozillas [Websites, Kommunikation & Cookies Datenschutzrichtlinie](https://www.mozilla.org/en-US/privacy/websites/#cookies) an.

## Siehe auch

- Verwandte HTTP-Header: {{HTTPHeader("Set-Cookie")}}, {{HTTPHeader("Cookie")}}
- Verwandte JavaScript-APIs: [`Document.cookie`](/de/docs/Web/API/Document/cookie), [`Navigator.cookieEnabled`](/de/docs/Web/API/Navigator/cookieEnabled), [Cookie Store API](/de/docs/Web/API/Cookie_Store_API)
- [Drittanbieter-Cookies](/de/docs/Web/Privacy/Guides/Third-party_cookies)
- [Cookie-Spezifikation: RFC 6265](https://datatracker.ietf.org/doc/html/rfc6265)
- [Cookies, die DSGVO und die Datenschutzrichtlinie für elektronische Kommunikation](https://gdpr.eu/cookies/)
