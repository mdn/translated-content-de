---
title: Verwendung von HTTP-Cookies
slug: Web/HTTP/Cookies
l10n:
  sourceCommit: aece74ade419cfba12136025c0c5275b093ab082
---

{{HTTPSidebar}}

Ein **Cookie** (auch bekannt als Web-Cookie oder Browser-Cookie) ist ein kleines Datenstück, das ein Server an den Webbrowser eines Benutzers sendet. Der Browser kann Cookies speichern, neue Cookies erstellen, vorhandene modifizieren und sie mit späteren Anfragen an denselben Server zurücksenden. Cookies ermöglichen es Webanwendungen, begrenzte Mengen an Daten zu speichern und Statusinformationen zu merken; standardmäßig ist das HTTP-Protokoll [zustandslos](/de/docs/Web/HTTP/Overview#http_is_stateless_but_not_sessionless).

In diesem Artikel werden wir die Hauptanwendungen von Cookies untersuchen, bewährte Methoden für ihre Nutzung erläutern sowie ihre Datenschutz- und Sicherheitsimplikationen betrachten.

## Wofür Cookies verwendet werden

Typischerweise verwendet der Server den Inhalt von HTTP-Cookies, um festzustellen, ob verschiedene Anfragen vom selben Browser/Benutzer stammen, und gibt dann eine personalisierte oder allgemeine Antwort aus, wie es angemessen ist. Im Folgenden wird ein sehr einfaches Anmeldesystem für Benutzer beschrieben:

1. Der Benutzer sendet Anmeldeinformationen an den Server, zum Beispiel über die Übermittlung eines Formulars.
2. Sind die Anmeldedaten korrekt, aktualisiert der Server die Benutzeroberfläche, um anzuzeigen, dass der Benutzer angemeldet ist, und antwortet mit einem Cookie, das eine Sitzungs-ID enthält, die den Anmeldestatus im Browser aufzeichnet.
3. Zu einem späteren Zeitpunkt wechselt der Benutzer zu einer anderen Seite auf derselben Webseite. Der Browser sendet das Cookie mit der Sitzungs-ID zusammen mit der entsprechenden Anfrage, um anzuzeigen, dass der Benutzer weiterhin als angemeldet angesehen wird.
4. Der Server überprüft die Sitzungs-ID und sendet dem Benutzer, falls sie noch gültig ist, eine personalisierte Version der neuen Seite. Ist sie nicht gültig, wird die Sitzungs-ID gelöscht, und dem Benutzer wird eine generische Seite angezeigt (oder vielleicht eine "Zugriff verweigert"-Meldung und eine Aufforderung zur erneuten Anmeldung).

![Visuelle Darstellung der obigen Beschreibung des Anmeldesystems](cookie-basic-example.png)

Cookies werden hauptsächlich für drei Zwecke verwendet:

- **Sitzungsverwaltung**: Anmeldestatus des Benutzers, Inhalte des Warenkorbs, Spielergebnisse oder andere sitzungsbezogene Details, die der Server sich merken muss.
- **Personalisierung**: Benutzereinstellungen wie Anzeige-Sprache und UI-Thema.
- **Tracking**: Aufzeichnung und Analyse des Nutzerverhaltens.

### Datenspeicherung

In den frühen Tagen des Webs, als es keine andere Option gab, wurden Cookies für allgemeine Zwecke der clientseitigen Datenspeicherung verwendet. Moderne Speicher-APIs werden jetzt empfohlen, beispielsweise die [Web Storage API](/de/docs/Web/API/Web_Storage_API) (`localStorage` und `sessionStorage`) und [IndexedDB](/de/docs/Web/API/IndexedDB_API).

Sie sind mit dem Fokus auf Speicherung konzipiert, senden niemals Daten an den Server und haben nicht die anderen Nachteile, die die Verwendung von Cookies zur Speicherung mit sich bringt:

- Browser sind im Allgemeinen auf eine maximale Anzahl von Cookies pro Domain beschränkt (unterscheidet sich je nach Browser, generell in den Hunderten) und auf eine maximale Größe pro Cookie (normalerweise 4KB). Speicher-APIs können größere Datenmengen speichern.
- Cookies werden mit jeder Anfrage gesendet, was die Leistung verschlechtern kann (zum Beispiel bei langsamen mobilen Datenverbindungen), insbesondere wenn viele Cookies gesetzt sind.

> [!NOTE]
> Um gespeicherte Cookies (und andere von einer Webseite genutzte Speichermedien) zu sehen, können Sie den [Speicherinspektor](https://firefox-source-docs.mozilla.org/devtools-user/storage_inspector/index.html) in den Firefox Developer Tools oder das [Anwendungsfenster](https://developer.chrome.com/docs/devtools/progressive-web-apps) in den Chrome Developer Tools verwenden.

## Erstellen, Entfernen und Aktualisieren von Cookies

Nach Erhalt einer HTTP-Anfrage kann ein Server eine oder mehrere {{HTTPHeader("Set-Cookie")}}-Header mit der Antwort senden, von denen jeder ein separates Cookie setzt. Ein einfaches Cookie wird gesetzt, indem ein Name-Wert-Paar wie folgt angegeben wird:

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
> Erfahren Sie, wie Sie den `Set-Cookie`-Header in verschiedenen serverseitigen Sprachen/Frameworks verwenden: [PHP](https://www.php.net/manual/en/function.setcookie.php), [Node.JS](https://nodejs.org/dist/latest-v14.x/docs/api/http.html#http_response_setheader_name_value), [Python](https://docs.python.org/3/library/http.cookies.html), [Ruby on Rails](https://api.rubyonrails.org/classes/ActionDispatch/Cookies.html).

Wird eine neue Anfrage gestellt, sendet der Browser normalerweise die zuvor gespeicherten Cookies für die aktuelle Domain mit einem {{HTTPHeader("Cookie")}}-HTTP-Header zurück an den Server:

```http
GET /sample_page.html HTTP/2.0
Host: www.example.org
Cookie: yummy_cookie=chocolate; tasty_cookie=strawberry
```

### Entfernung: Festlegung der Lebensdauer eines Cookies

Sie können ein Ablaufdatum oder einen Zeitraum angeben, nach dem das Cookie gelöscht und nicht mehr gesendet werden soll. Abhängig von den im {{HTTPHeader("Set-Cookie")}}-Header festgelegten Attributen, wenn die Cookies erstellt werden, können sie entweder _dauerhaft_ oder _sitzungsbasiert_ sein:

- Dauerhafte Cookies werden nach dem im `Expires`-Attribut festgelegten Datum gelöscht:

  ```http
  Set-Cookie: id=a3fWa; Expires=Thu, 31 Oct 2021 07:28:00 GMT;
  ```

  oder nach dem im `Max-Age`-Attribut festgelegten Zeitraum:

  ```http
  Set-Cookie: id=a3fWa; Max-Age=2592000
  ```

  > **Hinweis:** `Expires` ist bereits länger verfügbar als `Max-Age`, jedoch ist `Max-Age` weniger fehleranfällig und hat Vorrang, wenn beide gesetzt sind. Der Grund dafür ist, dass beim Setzen eines `Expires`-Datums und einer Zeit diese relativ zum Client sind, auf dem das Cookie gesetzt wird. Wenn der Server auf eine andere Zeit eingestellt ist, könnte dies Fehler verursachen.

- _Sitzungs-Cookies_ – Cookies ohne ein `Max-Age`- oder `Expires`-Attribut – werden gelöscht, wenn die aktuelle Sitzung endet. Der Browser legt fest, wann die "aktuelle Sitzung" endet, und einige Browser verwenden bei einem Neustart die _Sitzungswiederherstellung_. Dadurch können Sitzungs-Cookies unbegrenzt bestehen bleiben.

  > [!NOTE]
  > Wenn Ihre Seite Benutzer authentifiziert, sollte sie Sitzungs-Cookies regenerieren und erneut senden, auch solche, die bereits existieren, wann immer ein Benutzer authentifiziert wird. Dieser Ansatz hilft, [Session-Fixation-Angriffe](/de/docs/Web/Security/Types_of_attacks#session_fixation) zu verhindern, bei denen ein Dritter die Sitzung eines Benutzers wieder verwenden kann.

Es gibt einige Techniken, die darauf abzielen, Cookies nach ihrer Löschung wiederherzustellen. Diese werden als "Zombie"-Cookies bezeichnet. Diese Techniken verletzen die Grundsätze des Benutzer-[Datenschutzes](#datenschutz_und_tracking) und der Kontrolle, können gegen [Datenschutzbestimmungen](#cookie-bezogene_vorschriften) verstoßen und eine Webseite, die sie verwendet, rechtlichen Haftungen aussetzen.

### Aktualisieren von Cookie-Werten

Um ein Cookie über HTTP zu aktualisieren, kann der Server einen {{HTTPHeader("Set-Cookie")}}-Header mit dem Namen des vorhandenen Cookies und einem neuen Wert senden. Zum Beispiel:

```http
Set-Cookie: id=new-value
```

Es gibt mehrere Gründe, warum Sie dies tun möchten, zum Beispiel wenn ein Benutzer seine Präferenzen aktualisiert hat und die Anwendung die Änderungen in den clientseitigen Daten widerspiegeln möchte (Sie könnten dies auch mit einem clientseitigen Speichersystem wie [Web Storage](/de/docs/Web/API/Web_Storage_API) tun).

#### Aktualisieren von Cookies über JavaScript

Im Browser können Sie neue Cookies über JavaScript mit der [`Document.cookie`](/de/docs/Web/API/Document/cookie)-Eigenschaft oder der asynchronen [Cookie Store API](/de/docs/Web/API/Cookie_Store_API) erstellen. Beachten Sie, dass alle unten stehenden Beispiele `Document.cookie` verwenden, da es die am weitesten unterstützte/etablierte Option ist.

```js
document.cookie = "yummy_cookie=chocolate";
document.cookie = "tasty_cookie=strawberry";
```

Sie können auch auf vorhandene Cookies zugreifen und ihnen neue Werte zuweisen, sofern das [`HttpOnly`](/de/docs/Web/HTTP/Headers/Set-Cookie#httponly)-Attribut nicht auf ihnen gesetzt ist (d.h. im `Set-Cookie`-Header, der es erstellt hat):

```js
console.log(document.cookie);
// logs "yummy_cookie=chocolate; tasty_cookie=strawberry"

document.cookie = "yummy_cookie=blueberry";

console.log(document.cookie);
// logs "tasty_cookie=strawberry; yummy_cookie=blueberry"
```

Beachten Sie, dass Sie aus Sicherheitsgründen Cookie-Werte nicht ändern können, indem Sie direkt beim Initiieren einer Anfrage einen aktualisierten `Cookie`-Header senden, z.B. über [`fetch()`](/de/docs/Web/API/Window/fetch) oder [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest). Beachten Sie, dass es auch gute Gründe gibt, warum Sie JavaScript nicht erlauben sollten, Cookies zu ändern – d.h. `HttpOnly` bei Erstellung setzen. Siehe den Abschnitt [Sicherheit](#sicherheit) für mehr Details.

## Sicherheit

Wenn Sie Informationen in Cookies speichern, sind standardmäßig alle Cookie-Werte sichtbar und können vom Endbenutzer geändert werden. Sie möchten wirklich nicht, dass Ihre Cookies missbraucht werden – zum Beispiel von böswilligen Akteuren abgerufen/geändert oder an Domains gesendet werden, an die sie nicht gesendet werden sollten. Die möglichen Folgen können von ärgerlich – Apps, die nicht funktionieren oder seltsames Verhalten zeigen – bis hin zu katastrophal reichen. Ein Krimineller könnte zum Beispiel eine Sitzungs-ID stehlen und diese verwenden, um ein Cookie zu setzen, das es so aussehen lässt, als ob er als jemand anderes angemeldet ist, und dabei die Kontrolle über deren Bank- oder E-Commerce-Konto übernehmen.

Sie können Ihre Cookies auf verschiedene Arten sichern, die in diesem Abschnitt überprüft werden.

### Zugriff auf Ihre Cookies blockieren

Sie können sicherstellen, dass Cookies sicher gesendet werden und nicht von unbefugten Parteien oder Skripten aufgerufen werden, auf zwei Arten: mit dem `Secure`-Attribut und dem `HttpOnly`-Attribut:

```http
Set-Cookie: id=a3fWa; Expires=Thu, 21 Oct 2021 07:28:00 GMT; Secure; HttpOnly
```

- Ein Cookie mit dem `Secure`-Attribut wird nur mit einer verschlüsselten Anfrage über das HTTPS-Protokoll an den Server gesendet. Es wird nie mit ungesichertem HTTP (außer auf localhost) gesendet, was bedeutet, dass {{Glossary("MitM", "Man-in-the-Middle")}}-Angreifer nicht leicht darauf zugreifen können. Unsichere Seiten (mit `http:` in der URL) können keine Cookies mit dem `Secure`-Attribut setzen. Nehmen Sie jedoch nicht an, dass `Secure` jeglichen Zugriff auf sensible Informationen in Cookies vollständig verhindert. Jemand mit Zugriff auf die Festplatte des Clients (oder JavaScript, wenn das `HttpOnly`-Attribut nicht gesetzt ist) kann die Informationen lesen und ändern.

- Ein Cookie mit dem `HttpOnly`-Attribut kann nicht von JavaScript, zum Beispiel mit [`Document.cookie`](/de/docs/Web/API/Document/cookie), aufgerufen werden; es kann nur aufgerufen werden, wenn es den Server erreicht. Cookies, die Benutzersitzungen aufrechterhalten, sollten zum Beispiel das `HttpOnly`-Attribut gesetzt haben – es wäre wirklich unsicher, sie JavaScript zur Verfügung zu stellen. Diese Vorsichtsmaßnahme hilft, Cross-Site-Scripting ([XSS](/de/docs/Web/Security/Types_of_attacks#cross-site_scripting_xss))-Angriffe abzumildern.

> [!NOTE]
> Abhängig von der Anwendung möchten Sie möglicherweise einen opaken Bezeichner verwenden, den der Server nachschlägt, anstatt sensible Informationen direkt in Cookies zu speichern, oder untersuchen Sie alternative Authentifizierungs-/Vertraulichkeitsmechanismen wie [JSON Web Tokens](https://jwt.io/).

### Definieren, wohin Cookies gesendet werden

Die Attribute `Domain` und `Path` definieren den _Geltungsbereich_ eines Cookies: Welche URLs die Cookies gesendet werden.

- Das `Domain`-Attribut gibt an, welcher Server ein Cookie empfangen kann. Falls angegeben, sind Cookies auf dem angegebenen Server und seinen Subdomains verfügbar. Zum Beispiel, wenn Sie `Domain=mozilla.org` von `mozilla.org` setzen, sind Cookies auf dieser Domain und ihren Subdomains wie `developer.mozilla.org` verfügbar.

  ```http
  Set-Cookie: id=a3fWa; Expires=Thu, 21 Oct 2021 07:28:00 GMT; Secure; HttpOnly; Domain=mozilla.org
  ```

  Wenn der `Set-Cookie`-Header kein `Domain`-Attribut angibt, sind die Cookies auf dem Server verfügbar, der sie gesetzt hat, _aber nicht auf seinen Subdomains_. Daher ist das Angeben von `Domain` weniger restriktiv als das Weglassen davon.
  Beachten Sie, dass ein Server das `Domain`-Attribut nur auf seine eigene Domain oder eine übergeordnete Domain setzen kann, nicht auf eine Subdomain oder eine andere Domain.
  So könnte ein Server mit der Domain `foo.example.com` das Attribut beispielsweise auf `example.com` oder `foo.example.com` setzen, aber nicht `bar.foo.example.com` oder `elsewhere.com` (die Cookies würden jedoch immer noch _an die Subdomains wie `bar.foo.example.com` gesendet_).
  Siehe [Ungültige Domains](/de/docs/Web/HTTP/Headers/Set-Cookie#invalid_domains) für mehr Details.

- Das `Path`-Attribut gibt einen URL-Pfad an, der in der angeforderten URL vorhanden sein muss, um den `Cookie`-Header zu senden. Beispielsweise:

  ```http
  Set-Cookie: id=a3fWa; Expires=Thu, 21 Oct 2021 07:28:00 GMT; Secure; HttpOnly; Path=/docs
  ```

  Der `%x2F` ("/")-Charakter wird als Verzeichnistrennzeichen betrachtet, und Unterverzeichnisse stimmen ebenfalls überein. Zum Beispiel, wenn Sie `Path=/docs` setzen, stimmen diese Anforderungspfade überein:

  - `/docs`
  - `/docs/`
  - `/docs/Web/`
  - `/docs/Web/HTTP`

  Aber diese Anforderungspfade nicht:

  - `/`
  - `/docsets`
  - `/fr/docs`

### Steuerung von Drittanbieter-Cookies mit `SameSite`

Das [`SameSite`](/de/docs/Web/HTTP/Headers/Set-Cookie#samesitesamesite-value)-Attribut lässt Server angeben, ob/wann Cookies bei Cross-Site-Anfragen gesendet werden — d.h. [Drittanbieter-Cookies](/de/docs/Web/Privacy/Third-party_cookies). Cross-Site-Anfragen sind Anfragen, bei denen die {{Glossary("Site", "Seite")}} (die registrierbare Domain) und/oder das Schema (http oder https) nicht mit der Seite übereinstimmen, die der Nutzer derzeit besucht. Dazu gehören Anfragen, die gesendet werden, wenn Links auf anderen Seiten angeklickt werden, um auf Ihre Seite zu navigieren, und jede Anfrage, die von eingebettetem Drittanbieter-Inhalt gesendet wird.

`SameSite` hilft, den Informationsaustausch zu verhindern, die Benutzer-[Privatsphäre](#datenschutz_und_tracking) zu wahren und bietet einen gewissen Schutz vor {{Glossary("CSRF", "Cross-Site-Request-Forgery")}}-Angriffen. Es nimmt drei mögliche Werte an: `Strict`, `Lax` und `None`:

- `Strict` bewirkt, dass der Browser das Cookie nur als Antwort auf Anfragen sendet, die von der Ursprungsseite des Cookies stammen. Dies sollte verwendet werden, wenn Sie Cookies verwenden, die sich auf Funktionalitäten beziehen, die immer hinter einer ersten Navigation stehen, wie z.B. Authentifizierung oder die Speicherung von Warenkorbinformationen.

  ```http
  Set-Cookie: cart=110045_77895_53420; SameSite=Strict
  ```

  > [!NOTE]
  > Cookies, die für sensible Informationen verwendet werden, sollten auch eine kurze [Lebensdauer](#removal_defining_the_lifetime_of_a_cookie) haben.

- `Lax` ist ähnlich, außer dass der Browser das Cookie auch sendet, wenn der Benutzer _zur Ursprungsseite des Cookies navigiert_ (auch wenn der Benutzer von einer anderen Website kommt). Dies ist nützlich für Cookies, die die Anzeige einer Website beeinflussen — zum Beispiel könnten Sie Partnerproduktinformationen zusammen mit einem Affiliate-Link auf Ihrer Website haben. Wenn dieser Link auf die Partnerwebsite gefolgt wird, möchten sie möglicherweise ein Cookie setzen, das angibt, dass der Affiliate-Link gefolgt wurde, was ein Belohnungsbanner anzeigt und einen Rabatt gewährt, wenn das Produkt gekauft wird.

  ```http
  Set-Cookie: affiliate=e4rt45dw; SameSite=Lax
  ```

- `None` gibt an, dass Cookies sowohl bei ausgehenden als auch bei Cross-Site-Anfragen gesendet werden. Dies ist nützlich, wenn Sie Cookies zusammen mit Anfragen versenden möchten, die von drittanbieter-inhalten auf anderen Webseiten eingebettet werden, wie zum Beispiel Werbe- oder Analyseanbietern. Beachten Sie, dass, wenn `SameSite=None` gesetzt ist, auch das `Secure`-Attribut gesetzt werden muss — `SameSite=None` erfordert einen _sicheren Kontext_.

  ```http
  Set-Cookie: widget_session=7yjgj57e4n3d; SameSite=None; Secure; HttpOnly
  ```

Wenn kein `SameSite`-Attribut gesetzt ist, wird das Cookie standardmäßig als `Lax` behandelt.

### Cookie-Präfixe

Aufgrund des Designs des Cookie-Mechanismus kann ein Server nicht bestätigen, dass ein Cookie von einem sicheren Ursprung gesetzt wurde oder sogar _wo_ ein Cookie ursprünglich gesetzt wurde.

Eine anfällige Anwendung auf einer Subdomain kann ein Cookie mit dem `Domain`-Attribut setzen, das den Zugriff auf dieses Cookie auf allen anderen Subdomains ermöglicht. Dieser Mechanismus kann bei einem _Session-Fixation_-Angriff missbraucht werden. Siehe [Session-Fixation](/de/docs/Web/Security/Types_of_attacks#session_fixation) für primäre Abhilfemethoden.

Als [Verteidigung-in-der-Tiefe-Maßnahme](<https://en.wikipedia.org/wiki/Defense_in_depth_(computing)>), jedoch, können Sie _Cookie-Präfixe_ verwenden, um bestimmte Fakten über das Cookie zu bestätigen. Zwei Präfixe stehen zur Verfügung:

- `__Host-`: Wenn ein Cookie-Name dieses Präfix hat, wird es in einem {{HTTPHeader("Set-Cookie")}}-Header nur akzeptiert, wenn es auch das `Secure`-Attribut enthält, es von einem sicheren Ursprung gesendet wurde, keinen `Domain`-Attribut hat und das `Path`-Attribut auf `/` setzt. Mit anderen Worten, das Cookie ist _domain-locked_.
- `__Secure-`: Wenn ein Cookie-Name dieses Präfix hat, wird es in einem {{HTTPHeader("Set-Cookie")}}-Header nur akzeptiert, wenn es das `Secure`-Attribut enthält und von einem sicheren Ursprung gesendet wurde. Dies ist schwächer als das `__Host-`-Präfix.

Der Browser lehnt Cookies mit diesen Präfixen ab, die nicht ihren Einschränkungen entsprechen. Dies stellt sicher, dass von Subdomains erstellte Cookies mit Präfixen entweder auf eine Subdomain beschränkt sind oder vollständig ignoriert werden. Da der Anwendungsserver nur auf einen spezifischen Cookie-Namen überprüft, um festzustellen, ob der Benutzer authentifiziert ist oder ein CSRF-Token korrekt ist, dient dies effektiv als Abwehrmaßnahme gegen Session-Fixation.

> [!NOTE]
> Auf dem Server _muss_ die Webanwendung den vollständigen Cookienamen einschließlich des Präfixes überprüfen. Benutzeragenten _streifen das Präfix nicht_ vom Cookie ab, bevor sie es in einem Anfrage-{{HTTPHeader("Cookie")}}-Header senden.

Für mehr Informationen über Cookie-Präfixe und den aktuellen Stand der Browserunterstützung, siehe den [Abschnitt Präfixe des Set-Cookie-Referenzartikels](/de/docs/Web/HTTP/Headers/Set-Cookie#cookie_prefixes).

## Datenschutz und Tracking

Früher haben wir darüber gesprochen, wie das `SameSite`-Attribut verwendet werden kann, um zu kontrollieren, wann Drittanbieter-Cookies gesendet werden, und dass dies helfen kann, die Privatsphäre der Benutzer zu bewahren. Datenschutz ist eine sehr wichtige Überlegung beim Erstellen von Websites, die, wenn sie richtig gemacht werden, das Vertrauen Ihrer Benutzer aufbauen können. Wenn es schlecht gemacht wird, kann es dieses Vertrauen vollständig untergraben und eine Vielzahl anderer Probleme verursachen.

Drittanbieter-Cookies können von fremden Inhalten, die über {{htmlelement("iframe")}}s in Seiten eingebettet sind, gesetzt werden. Sie haben viele legitime Verwendungen, die das Teilen von Nutzerprofilinformationen, das Zählen von Anzeigenimpressionen oder das Sammeln von Analysen über verschiedene verwandte Domains umfassen.

Jedoch können Drittanbieter-Cookies auch verwendet werden, um unheimliche, invasive Benutzererfahrungen zu schaffen. Ein Drittanbieterserver kann ein Profil der Browserhistorie und -gewohnheiten eines Benutzers basierend auf Cookies erstellen, die ihm von demselben Browser beim Zugriff auf mehrere Websites gesendet werden. Das klassische Beispiel ist, wenn Sie auf einer Website nach Produktinformationen suchen und dann von Werbung für ähnliche Produkte überall im Web verfolgt werden.

Browseranbieter wissen, dass Benutzer dieses Verhalten nicht mögen, und als Ergebnis haben alle angefangen, Drittanbieter-Cookies standardmäßig zu blockieren oder zumindest Pläne gemacht, in diese Richtung zu gehen. Drittanbieter-Cookies (oder einfach Tracking-Cookies) können auch von anderen Browsereinstellungen oder Erweiterungen blockiert werden.

> [!NOTE]
> Cookie-Blockierung kann dazu führen, dass einige Drittanbieter-Komponenten (wie soziale Medien-Widgets) nicht wie beabsichtigt funktionieren. Da Browser weitere Einschränkungen für Drittanbieter-Cookies verhängen, sollten Entwickler anfangen, nach Wegen zu suchen, ihre Abhängigkeit von ihnen zu reduzieren.

Siehe unseren Artikel [Drittanbieter-Cookies](/de/docs/Web/Privacy/Third-party_cookies) für detaillierte Informationen zu Drittanbieter-Cookies, den damit verbundenen Problemen und welchen Alternativen es gibt. Siehe unsere [Datenschutz](/de/docs/Web/Privacy)-Landingpage für mehr Informationen zu Datenschutz im Allgemeinen.

## Cookie-bezogene Vorschriften

Gesetze oder Vorschriften, die die Verwendung von Cookies abdecken, umfassen:

- Die [Allgemeine Datenschutzverordnung](https://gdpr.eu/) (GDPR) in der Europäischen Union
- Die Datenschutzrichtlinie in der EU
- Das California Consumer Privacy Act

Diese Vorschriften haben globale Reichweite. Sie gelten für jede Seite im _World Wide_ Web, die von Nutzern aus diesen Rechtsordnungen aufgerufen wird (die EU und Kalifornien, mit der Einschränkung, dass das kalifornische Gesetz nur auf Entitäten mit einem Bruttoumsatz von über 25 Millionen USD, unter anderem, anwendbar ist).

Diese Vorschriften beinhalten Anforderungen wie:

- Benachrichtigung der Benutzer, dass Ihre Seite Cookies verwendet.
- Ermöglichung der Benutzer, den Empfang einiger oder aller Cookies abzulehnen.
- Ermöglichung der Benutzer, den Großteil Ihres Dienstes ohne den Erhalt von Cookies zu nutzen.

Es gibt möglicherweise andere Vorschriften, die die Verwendung von Cookies in Ihrer Region regeln. Es liegt an Ihnen, diese Vorschriften zu kennen und zu befolgen. Es gibt Unternehmen, die "Cookie-Banner"-Code anbieten, der Ihnen hilft, diese Vorschriften einzuhalten.

> [!NOTE]
> Unternehmen sollten die Arten von Cookies, die sie auf ihren Webseiten verwenden, zu Zwecken der Transparenz und zur Einhaltung der Vorschriften offenlegen. Beispielsweise siehe [Googles Hinweis zu den Arten von Cookies, die es verwendet](https://policies.google.com/technologies/cookies#types-of-cookies) und Mozillas [Websites, Communications & Cookies Privacy Notice](https://www.mozilla.org/en-US/privacy/websites/#cookies).

## Siehe auch

- Verwandte HTTP-Header: {{HTTPHeader("Set-Cookie")}}, {{HTTPHeader("Cookie")}}
- Verwandte JavaScript-APIs: [`Document.cookie`](/de/docs/Web/API/Document/cookie), [`Navigator.cookieEnabled`](/de/docs/Web/API/Navigator/cookieEnabled), [Cookie Store API](/de/docs/Web/API/Cookie_Store_API)
- [Drittanbieter-Cookies](/de/docs/Web/Privacy/Third-party_cookies)
- [Cookie-Spezifikation: RFC 6265](https://datatracker.ietf.org/doc/html/rfc6265)
- [Cookies, die GDPR und die Datenschutzrichtlinie](https://gdpr.eu/cookies/)
