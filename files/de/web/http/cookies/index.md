---
title: Verwendung von HTTP-Cookies
slug: Web/HTTP/Cookies
l10n:
  sourceCommit: cb132bc83b660e51be8959de5336c00b08030104
---

{{HTTPSidebar}}

Ein **Cookie** (auch bekannt als Web-Cookie oder Browser-Cookie) ist ein kleines Datenstück, das ein Server an den Webbrowser eines Nutzers sendet. Der Browser kann Cookies speichern, neue Cookies erstellen, vorhandene ändern und sie bei späteren Anfragen an denselben Server zurücksenden. Cookies ermöglichen Webanwendungen die Speicherung begrenzter Datenmengen und das Merken von Statusinformationen; standardmäßig ist das HTTP-Protokoll [zustandslos](/de/docs/Web/HTTP/Overview#http_is_stateless_but_not_sessionless).

In diesem Artikel werden wir die Hauptverwendungen von Cookies erforschen, bewährte Praktiken für ihre Verwendung erklären und ihre Auswirkungen auf Privatsphäre und Sicherheit betrachten.

## Wofür Cookies verwendet werden

Der Server verwendet in der Regel den Inhalt von HTTP-Cookies, um zu bestimmen, ob verschiedene Anfragen vom selben Browser/Nutzer stammen, und gibt dann eine personalisierte oder generische Antwort, je nachdem, was angemessen ist. Im Folgenden wird ein sehr einfaches Anmeldesystem für Nutzer beschrieben:

1. Der Nutzer sendet Anmeldeinformationen an den Server, beispielsweise über ein Formular.
2. Wenn die Anmeldeinformationen korrekt sind, aktualisiert der Server die Benutzeroberfläche, um anzuzeigen, dass der Nutzer angemeldet ist, und antwortet mit einem Cookie, das eine Sitzungs-ID enthält, die den Anmeldestatus des Nutzers im Browser aufzeichnet.
3. Zu einem späteren Zeitpunkt wechselt der Nutzer zu einer anderen Seite auf derselben Site. Der Browser sendet das Cookie mit der Sitzungs-ID zusammen mit der entsprechenden Anfrage, um anzuzeigen, dass er immer noch denkt, der Nutzer sei angemeldet.
4. Der Server überprüft die Sitzungs-ID und, sofern sie noch gültig ist, sendet dem Nutzer eine personalisierte Version der neuen Seite. Ist sie nicht gültig, wird die Sitzungs-ID gelöscht und dem Nutzer wird eine generische Version der Seite angezeigt (oder möglicherweise eine Meldung „Zugriff verweigert“ und die Aufforderung, sich erneut anzumelden).

![Visuelle Darstellung der oben beschriebenen Anmeldesystembeschreibung](cookie-basic-example.png)

Cookies werden hauptsächlich für drei Zwecke verwendet:

- **Sitzungsverwaltung**: Nutzer-Anmeldestatus, Warenkorbinhalte, Spielstände oder andere sitzungsbezogene Details, die der Server sich merken muss.
- **Personalisierung**: Nutzereinstellungen wie Anzeigesprache und Benutzeroberflächenthema.
- **Tracking**: Aufzeichnung und Analyse des Nutzerverhaltens.

### Datenspeicherung

In den frühen Tagen des Webs, als es keine andere Option gab, wurden Cookies für allgemeine Datenspeicherung auf der Client-Seite verwendet. Heute empfohlene Speicher-APIs sind beispielsweise die [Web Storage API](/de/docs/Web/API/Web_Storage_API) (`localStorage` und `sessionStorage`) und [IndexedDB](/de/docs/Web/API/IndexedDB_API).

Diese sind zur Speicherung konzipiert, senden niemals Daten an den Server und haben nicht die anderen Nachteile der Cookie-Nutzung für die Speicherung:

- Browser sind generell auf eine maximale Anzahl an Cookies pro Domain begrenzt (je nach Browser, normalerweise mehrere Hundert), sowie auf eine maximale Größe pro Cookie (zumeist 4 KB). Speicher-APIs können größere Datenmengen speichern.
- Cookies werden bei jeder Anfrage gesendet, was die Leistung beeinträchtigen kann (zum Beispiel bei langsamen mobilen Datenverbindungen), insbesondere wenn viele Cookies gesetzt sind.

> [!NOTE]
> Um gespeicherte Cookies (und andere Speicher, die eine Webseite verwendet) zu sehen, können Sie den [Storage Inspector](https://firefox-source-docs.mozilla.org/devtools-user/storage_inspector/index.html) in den Firefox-Entwicklertools oder das [Application panel](https://developer.chrome.com/docs/devtools/progressive-web-apps) in den Chrome-Entwicklertools verwenden.

## Erstellen, Entfernen und Aktualisieren von Cookies

Nach dem Empfang einer HTTP-Anfrage kann ein Server eine oder mehrere {{HTTPHeader("Set-Cookie")}}-Header mit der Antwort senden, von denen jeder ein separates Cookie setzt. Ein einfaches Cookie wird durch die Angabe eines Namens-Wert-Paares gesetzt, wie folgt:

```http
Set-Cookie: <cookie-name>=<cookie-value>
```

Die folgende HTTP-Antwort weist den empfangenden Browser an, ein Paar Cookies zu speichern:

```http
HTTP/2.0 200 OK
Content-Type: text/html
Set-Cookie: yummy_cookie=choco
Set-Cookie: tasty_cookie=strawberry

[page content]
```

> [!NOTE]
> Erfahren Sie, wie Sie den `Set-Cookie`-Header in verschiedenen serverseitigen Sprachen/Frameworks verwenden: [PHP](https://www.php.net/manual/en/function.setcookie.php), [Node.JS](https://nodejs.org/dist/latest-v14.x/docs/api/http.html#http_response_setheader_name_value), [Python](https://docs.python.org/3/library/http.cookies.html), [Ruby on Rails](https://api.rubyonrails.org/classes/ActionDispatch/Cookies.html).

Bei einer neuen Anfrage sendet der Browser normalerweise zuvor gespeicherte Cookies für die aktuelle Domain zusammen mit der {{HTTPHeader("Cookie")}}-HTTP-Header an den Server zurück:

```http
GET /sample_page.html HTTP/2.0
Host: www.example.org
Cookie: yummy_cookie=choco; tasty_cookie=strawberry
```

### Entfernen: Die Lebensdauer eines Cookies definieren

Sie können ein Ablaufdatum oder einen Zeitraum festlegen, nach dem das Cookie gelöscht werden soll und nicht mehr gesendet wird. Abhängig von den innerhalb des {{HTTPHeader("Set-Cookie")}}-Headers festgelegten Attributen, wenn die Cookies erstellt werden, können sie entweder _dauerhaft_ oder _sitzungsbezogen_ sein:

- Permanente Cookies werden nach dem im `Expires`-Attribut angegebenen Datum gelöscht:

  ```http
  Set-Cookie: id=a3fWa; Expires=Thu, 31 Oct 2021 07:28:00 GMT;
  ```

  oder nach dem im `Max-Age`-Attribut angegebenen Zeitraum:

  ```http
  Set-Cookie: id=a3fWa; Max-Age=2592000
  ```

  > **Hinweis:** Das `Expires`-Attribut ist länger verfügbar als `Max-Age`, allerdings ist `Max-Age` weniger fehleranfällig und hat Vorrang, wenn beide gesetzt sind. Der Grund dafür ist, dass das `Expires`-Datum und die Uhrzeit, wenn es aufgesetzt wird, relativ zum Client sind, auf dem das Cookie gesetzt wird. Wenn der Server auf eine andere Zeit eingestellt ist, könnte dies zu Fehlern führen.

- _Sitzungs-Cookies_ — Cookies ohne `Max-Age`- oder `Expires`-Attribut – werden gelöscht, wenn die aktuelle Sitzung endet. Der Browser definiert, wann die "aktuelle Sitzung" endet, und einige Browser verwenden _Sitzungswiederherstellung_ beim Neustart. Dies kann dazu führen, dass Sitzungscookies unbegrenzt bestehen bleiben.

  > [!NOTE]
  > Wenn Ihre Site Benutzer authentifiziert, sollte sie Sitzungs-Cookies, selbst solche, die bereits existieren, bei jeder authentifizierten Nutzung regenerieren und neu senden. Dieser Ansatz hilft, [Sitzungsfixierungsangriffe](/de/docs/Web/Security/Types_of_attacks#session_fixation) zu verhindern, bei denen eine Drittpartei die Sitzung eines Nutzers wiederverwenden kann.

Es gibt einige Techniken, die darauf ausgelegt sind, Cookies nach ihrer Löschung wiederherzustellen. Diese werden als "Zombie"-Cookies bezeichnet. Diese Techniken verstoßen gegen die Prinzipien der Nutzer[Privatsphäre](#privatsphäre_und_nachverfolgung) und -kontrolle, können gegen [Datenschutzbestimmungen](#cookie-bezogene_bestimmungen) verstoßen und könnten eine Webseite, die diese verwendet, rechtlichen Risiken aussetzen.

### Aktualisieren von Cookie-Werten

Um ein Cookie über HTTP zu aktualisieren, kann der Server einen {{HTTPHeader("Set-Cookie")}}-Header mit dem Namen des vorhandenen Cookies und einem neuen Wert senden. Beispielsweise:

```http
Set-Cookie: id=new-value
```

Es gibt mehrere Gründe, warum Sie dies tun könnten, beispielsweise wenn ein Nutzer seine Präferenzen aktualisiert hat und die Anwendung die Änderungen in den Client-seitigen Daten widerspiegeln möchte (dies könnten Sie auch mit einem Client-seitig Erstellungsmechanismus wie [Web Storage](/de/docs/Web/API/Web_Storage_API) tun).

#### Aktualisieren von Cookies über JavaScript

Im Browser können Sie über JavaScript neue Cookies mit der {{domxref("Document.cookie")}}-Eigenschaft oder die asynchrone {{domxref("Cookie_Store_API", "Cookie Store API", "", "nocode")}}-API erstellen. Hinweis: Alle folgenden Beispiele verwenden `Document.cookie`, da dies die am weitesten unterstützte/etablierte Option ist.

```js
document.cookie = "yummy_cookie=choco";
document.cookie = "tasty_cookie=strawberry";
```

Sie können auch auf vorhandene Cookies zugreifen und ihnen neue Werte zuweisen, vorausgesetzt, das [`HttpOnly`](/de/docs/Web/HTTP/Headers/Set-Cookie#httponly)-Attribut ist nicht darauf gesetzt (d. h. im `Set-Cookie`-Header, der es erstellt hat):

```js
console.log(document.cookie);
// gibt "yummy_cookie=choco; tasty_cookie=strawberry" aus

document.cookie = "yummy_cookie=blueberry";

console.log(document.cookie);
// gibt "tasty_cookie=strawberry; yummy_cookie=blueberry" aus
```

Beachten Sie, dass Sie aus Sicherheitsgründen Cookie-Werte nicht ändern können, indem Sie einen aktualisierten `Cookie`-Header direkt senden, wenn Sie eine Anfrage initiieren, also über {{domxref("Window/fetch", "fetch()")}} oder {{domxref("XMLHttpRequest")}}. Beachten Sie, dass es auch gute Gründe gibt, warum nicht zugelassen werden sollte, dass JavaScript Cookies ändert — z. B. `HttpOnly` bei der Erstellung setzen. Sehen Sie den Abschnitt [Sicherheit](#sicherheit) für mehr Details.

## Sicherheit

Wenn Sie Informationen in Cookies speichern, sind standardmäßig alle Cookie-Werte für den Endbenutzer sichtbar und können von ihm verändert werden. Das letzte, was Sie wollen, ist, dass Ihre Cookies missbraucht werden — beispielsweise von böswilligen Akteuren zugegriffen/geändert werden oder an Domänen gesendet werden, an die sie nicht gesendet werden sollten. Die potenziellen Folgen können von lästig (nicht funktionierende Apps oder sich seltsam verhaltende Apps) bis katastrophal reichen. Ein Krimineller könnte zum Beispiel eine Sitzung-ID stehlen und sie verwenden, um ein Cookie zu setzen, das es so aussehen lässt, als ob er als jemand anderes eingeloggt wäre, und dadurch die Kontrolle über deren Bank- oder E-Commerce-Konto erlangen.

Sie können Ihre Cookies auf verschiedene Arten absichern, die in diesem Abschnitt überprüft werden.

### Zugriff auf Ihre Cookies blockieren

Sie können sicherstellen, dass Cookies sicher gesendet werden und nicht von ungewollten Parteien oder Skripten erreicht werden können, in einer von zwei Möglichkeiten: mit dem `Secure`-Attribut und dem `HttpOnly`-Attribut:

```http
Set-Cookie: id=a3fWa; Expires=Thu, 21 Oct 2021 07:28:00 GMT; Secure; HttpOnly
```

- Ein Cookie mit dem `Secure`-Attribut wird nur mit einer verschlüsselten Anfrage über das HTTPS-Protokoll an den Server gesendet. Es wird niemals mit ungesichertem HTTP gesendet (außer auf localhost), was bedeutet, dass {{Glossary("MitM", "man-in-the-middle")}}-Angreifer keinen leichten Zugriff darauf haben. Unsichere Sites (mit `http:` in der URL) können keine Cookies mit dem `Secure`-Attribut setzen. Nehmen Sie jedoch nicht an, dass `Secure` sämtlichen Zugriff zu sensiblen Informationen in Cookies verhindert. Zum Beispiel kann jemand mit Zugriff auf die Festplatte des Clients (oder JavaScript, wenn das `HttpOnly`-Attribut nicht gesetzt ist) die Informationen lesen und ändern.

- Ein Cookie mit dem `HttpOnly`-Attribut kann nicht von JavaScript verändert werden, zum Beispiel mit {{domxref("Document.cookie")}}; es kann nur dann verändert werden, wenn es den Server erreicht. Cookies, die Benutzersitzungen beibehalten, sollten beispielsweise das `HttpOnly`-Attribut haben — es wäre sehr unsicher, sie für JavaScript zugänglich zu machen. Diese Vorsichtsmaßnahme hilft, Cross-Site-Scripting([XSS](/de/docs/Web/Security/Types_of_attacks#cross-site_scripting_xss))-Angriffe zu mildern.

> [!NOTE]
> Abhängig von der Anwendung möchten Sie vielleicht einen undurchsichtigen Bezeichner verwenden, den der Server nachschlägt, anstatt sensible Informationen direkt in Cookies zu speichern, oder Sie untersuchen alternative Authentifizierungs-/Vertraulichkeitsmechanismen, wie [JSON Web Tokens](https://jwt.io/).

### Festlegen, wohin Cookies gesendet werden

Die Attribute `Domain` und `Path` definieren den _Geltungsbereich_ eines Cookies: an welche URLs die Cookies gesendet werden.

- Das Attribut `Domain` gibt an, welcher Server ein Cookie empfangen kann. Wenn angegeben, sind Cookies auf dem angegebenen Server und seinen Subdomains verfügbar. Zum Beispiel sind, wenn Sie `Domain=mozilla.org` von `mozilla.org` setzen, Cookies auf dieser Domain und Subdomains wie `developer.mozilla.org` verfügbar.

  ```http
  Set-Cookie: id=a3fWa; Expires=Thu, 21 Oct 2021 07:28:00 GMT; Secure; HttpOnly; Domain=mozilla.org
  ```

  Wenn der `Set-Cookie`-Header kein `Domain`-Attribut angibt, sind die Cookies auf dem Server, der sie setzt, _aber nicht auf dessen Subdomains_ verfügbar. Daher ist die Angabe von `Domain` weniger restriktiv, als es wegzulassen.
  Beachten Sie, dass ein Server das `Domain`-Attribut nur auf seine eigene Domain oder eine übergeordnete Domain setzen kann, nicht auf eine Subdomain oder eine andere Domain.
  So kann zum Beispiel ein Server mit der Domain `foo.example.com` das Attribut auf `example.com` oder `foo.example.com` setzen, aber nicht auf `bar.foo.example.com` oder `elsewhere.com` (die Cookies würden jedoch immer noch an Subdomains wie `bar.foo.example.com` gesendet werden).
  Siehe [Invalid domains](/de/docs/Web/HTTP/Headers/Set-Cookie#invalid_domains) für mehr Details.

- Das Attribut `Path` gibt einen URL-Pfad an, der in der angeforderten URL existieren muss, damit der `Cookie`-Header gesendet wird. Zum Beispiel:

  ```http
  Set-Cookie: id=a3fWa; Expires=Thu, 21 Oct 2021 07:28:00 GMT; Secure; HttpOnly; Path=/docs
  ```

  Das `%x2F` ("/")-Zeichen wird als Verzeichnistrenner betrachtet, und Unterverzeichnisse passen ebenfalls. Zum Beispiel stimmt, wenn Sie `Path=/docs` setzen, diese Anfragepfade überein:

  - `/docs`
  - `/docs/`
  - `/docs/Web/`
  - `/docs/Web/HTTP`

  Aber diese Anfragepfade stimmen nicht überein:

  - `/`
  - `/docsets`
  - `/fr/docs`

### Third-Party-Cookies mit `SameSite` steuern

Das [`SameSite`](/de/docs/Web/HTTP/Headers/Set-Cookie#samesitesamesite-value)-Attribut erlaubt es Servern zu spezifizieren, ob oder wann Cookies mit Anfragen von fremden Seiten gesendet werden — also [Third-Party-Cookies](/de/docs/Web/Privacy/Third-party_cookies). Fremdseitige Anfragen sind Anfragen, bei denen die {{Glossary("Site", "Seite")}} (die registrierbare Domain) und/oder das Schema (http oder https) nicht mit der Seite übereinstimmen, die der Nutzer gerade besucht. Dazu gehören Anfragen, die gesendet werden, wenn auf andere Sites geklickt wird, um zu Ihrer Site zu navigieren, und jede Anfrage, die von eingebetteten Drittanbieterinhalten gesendet wird.

`SameSite` hilft, Informationslecks zu verhindern, die Privatsphäre der Nutzer zu schützen und bietet einen gewissen Schutz gegen {{Glossary("CSRF", "Cross-Site-Request-Forgery")}}-Angriffe. Es gibt drei mögliche Werte: `Strict`, `Lax` und `None`:

- `Strict` veranlasst den Browser, das Cookie nur als Antwort auf Anfragen zu senden, die von der Ursprungsseite des Cookies stammen. Dies sollte verwendet werden, wenn Sie Cookies für Funktionalitäten haben, die immer hinter einer initialen Navigation sein werden, wie Authentifizierung oder das Speichern von Warenkorbinformationen.

  ```http
  Set-Cookie: cart=110045_77895_53420; SameSite=Strict
  ```

  > [!NOTE]
  > Cookies, die für sensible Informationen verwendet werden, sollten auch eine kurze [Lebensdauer](#removal_defining_the_lifetime_of_a_cookie) haben.

- `Lax` ist ähnlich, außer dass der Browser das Cookie auch sendet, wenn der Nutzer zur Ursprungsseite des Cookies _navigiert_ (auch wenn der Nutzer von einer anderen Seite kommt). Dies ist nützlich für Cookies, die die Anzeige einer Seite beeinflussen — zum Beispiel könnten Sie Partnerproduktinformationen zusammen mit einem Affiliate-Link auf Ihrer Webseite haben. Wenn dieser Link zum Partner navigiert wird, möchten sie möglicherweise ein Cookie setzen, das angibt, dass der Affiliate-Link gefolgt wurde, was ein Belohnungsbanner anzeigt und einen Rabatt gewährt, wenn das Produkt gekauft wird.

  ```http
  Set-Cookie: affiliate=e4rt45dw; SameSite=Lax
  ```

- `None` gibt an, dass Cookies sowohl bei Ursprungs- als auch bei fremdseitigen Anfragen gesendet werden. Dies ist nützlich, wenn Sie Cookies zusammen mit Anfragen senden möchten, die von fremden Inhalten, die in andere Sites eingebettet sind, gesendet werden, zum Beispiel Werbetechnologie- oder Analyiseanbieter. Beachten Sie, dass, wenn `SameSite=None` gesetzt ist, auch das `Secure`-Attribut gesetzt werden muss — `SameSite=None` erfordert einen _sicheren Kontext_.

  ```http
  Set-Cookie: widget_session=7yjgj57e4n3d; SameSite=None; Secure; HttpOnly
  ```

Wenn kein `SameSite`-Attribut gesetzt ist, wird das Cookie standardmäßig als `Lax` behandelt.

### Cookie-Präfixe

Aufgrund des Designs des Cookie-Mechanismus kann ein Server nicht bestätigen, dass ein Cookie von einem sicheren Ursprung gesetzt wurde oder sogar _woher_ ein Cookie ursprünglich gesetzt wurde.

Eine gefährdete Anwendung in einer Subdomain kann ein Cookie mit dem `Domain`-Attribut setzen, was Zugriff auf das Cookie auf allen anderen Subdomains gewährt. Dieser Mechanismus kann in einem _Session-Fixierungs_ Angriff missbraucht werden. Siehe [Session-Fixierung](/de/docs/Web/Security/Types_of_attacks#session_fixation) für primäre Vermeidungsmethoden.

Als [Sicherheitsmaßnahme in der Tiefe](<https://en.wikipedia.org/wiki/Defense_in_depth_(computing)>), können Sie jedoch _Cookie-Präfixe_ verwenden, um bestimmte Fakten über das Cookie auszudrücken. Es sind zwei Präfixe verfügbar:

- `__Host-`: Wenn ein Cookie-Name dieses Präfix hat, wird es in einem {{HTTPHeader("Set-Cookie")}}-Header nur akzeptiert, wenn es auch das `Secure`-Attribut hat, von einem sicheren Ursprung gesendet wurde, kein `Domain`-Attribut enthält und das `Path`-Attribut auf `/` gesetzt ist. Mit anderen Worten, das Cookie ist _domainbekant_.
- `__Secure-`: Wenn ein Cookie-Name dieses Präfix hat, wird es in einem {{HTTPHeader("Set-Cookie")}}-Header nur akzeptiert, wenn es das `Secure`-Attribut hat und von einem sicheren Ursprung gesendet wurde. Dies ist schwächer als das `__Host-`-Präfix.

Der Browser wird Cookies mit diesen Präfixen ablehnen, die nicht ihren Einschränkungen entsprechen. Dies stellt sicher, dass von Subdomains erstellte Cookies mit Präfixen entweder auf eine Subdomain beschränkt werden oder komplett ignoriert werden. Da die Anwendung auf dem Server nur nach einem spezifischen Cookie-Namen sucht, wenn sie bestimmt, ob der Nutzer authentifiziert ist oder ein CSRF-Token korrekt ist, wirkt das effektiv als Abwehrmaßnahme gegen Session-Fixierung.

> [!NOTE]
> Auf dem Server _muss_ die Webanwendung nach dem vollständigen Cookie-Namen einschließlich des Präfixes suchen. Benutzeragenten _entfernen nicht_ den Präfix vom Cookie, bevor sie es in einem Anfrage-{{HTTPHeader("Cookie")}}-Header senden.

Für mehr Informationen über Cookie-Präfixe und den aktuellen Stand der Unterstützung durch Browser siehe den [Präfixe-Abschnitt des Set-Cookie-Referenzartikels](/de/docs/Web/HTTP/Headers/Set-Cookie#cookie_prefixes).

## Privatsphäre und Nachverfolgung

Früher haben wir darüber gesprochen, wie das `SameSite`-Attribut verwendet werden kann, um zu kontrollieren, wann Third-Party-Cookies gesendet werden, und dass dies den Schutz der Privatsphäre der Nutzer unterstützen kann. Privatsphäre ist eine sehr wichtige Erwägung beim Erstellen von Webseiten, die, wenn gut gemacht, das Vertrauen Ihrer Nutzer stärken kann. Wenn es schlecht gemacht wird, kann es dieses Vertrauen völlig erodieren und allerlei andere Probleme verursachen.

Third-Party-Cookies können von Drittanbieterinhalten, die auf Sites über {{htmlelement("iframe")}}s eingebettet sind, gesetzt werden. Sie haben viele legitime Nutzungen, einschließlich des Teilens von Nutzerprofilinformationen, Zählen von Anzeigenimpressionen oder Sammeln von Analysen über verschiedene verwandte Domains.

Jedoch können Third-Party-Cookies auch verwendet werden, um unheimliche, invasive Nutzererfahrungen zu erstellen. Ein Drittanbieterserver kann basierend auf Cookies, die ihm vom selben Browser gesendet wurden, bei Zugriff auf mehrere Sites, ein Profil des Browserverlaufs und der Gewohnheiten eines Nutzers erstellen. Das klassische Beispiel ist, wenn Sie auf einer Site nach Produktinformationen suchen und dann überall im Internet von Anzeigen für ähnliche Produkte verfolgt werden.

Browseranbieter wissen, dass Nutzer dieses Verhalten nicht mögen, und als Ergebnis haben alle begonnen, standardmäßig Third-Party-Cookies zu blockieren, oder zumindest Pläne gemacht, in diese Richtung zu gehen. Third-Party-Cookies (oder einfach Tracking-Cookies) können auch durch andere Browsereinstellungen oder Erweiterungen blockiert werden.

> [!NOTE]
> Das Blockieren von Cookies kann dazu führen, dass einige Drittanbieterkomponenten (wie soziale Medien-Widgets) nicht wie beabsichtigt funktionieren. Da Browser zunehmend Beschränkungen für Third-Party-Cookies auferlegen, sollten Entwickler beginnen, Wege zu finden, ihre Abhängigkeit davon zu reduzieren.

Sehen Sie unseren Artikel über [Third-Party-Cookies](/de/docs/Web/Privacy/Third-party_cookies) für detaillierte Informationen über Third-Party-Cookies, die Probleme, die mit ihnen verbundenen sind, und welche Alternativen verfügbar sind. Besuchen Sie unsere [Privatsphären-Seite](/de/docs/Web/Privacy) für weitere Informationen über Privatsphäre im Allgemeinen.

## Cookie-bezogene Bestimmungen

Gesetze oder Vorschriften, die die Verwendung von Cookies betreffen, umfassen:

- Die Datenschutz-Grundverordnung (DSGVO) in der Europäischen Union
- Die ePrivacy-Richtlinie in der EU
- Den Datenschutz für Verbraucher in Kalifornien

Diese Vorschriften haben globalen Einfluss. Sie gelten für jede Site im _World Wide_ Web, auf die Nutzer aus diesen Rechtsgebieten zugreifen (die EU und Kalifornien, mit der Einschränkung, dass das kalifornische Gesetz nur für Organisationen mit einem Bruttoumsatz von über 25 Millionen USD gilt, unter anderem).

Diese Vorschriften umfassen Anforderungen wie:

- Die Benutzer darüber zu informieren, dass Ihre Website Cookies verwendet.
- Den Benutzern zu ermöglichen, die Annahme von einigen oder allen Cookies abzulehnen.
- Den Benutzern zu ermöglichen, den Großteil Ihres Dienstes ohne Cookies zu nutzen.

Möglicherweise gibt es andere Vorschriften, die die Verwendung von Cookies in Ihrer Region regeln. Es liegt in Ihrer Verantwortung, diese Vorschriften zu kennen und einzuhalten. Es gibt Unternehmen, die "Cookie-Banner"-Code anbieten, der Ihnen hilft, diese Vorschriften einzuhalten.

> [!NOTE]
> Unternehmen sollten die Arten von Cookies, die sie auf ihren Websites verwenden, zu Transparenzzwecken und zur Einhaltung der Vorschriften offenlegen. Zum Beispiel siehe [Googles Hinweis zu den Arten von Cookies, die es verwendet](https://policies.google.com/technologies/cookies#types-of-cookies) und Mozillas [Websites, Kommunikations- & Cookies-Datenschutzerklärung](https://www.mozilla.org/en-US/privacy/websites/#cookies).

## Siehe auch

- Verwandte HTTP-Header: {{HTTPHeader("Set-Cookie")}}, {{HTTPHeader("Cookie")}}
- Verwandte JavaScript-APIs: {{domxref("Document.cookie")}}, {{domxref("Navigator.cookieEnabled")}}, {{domxref("Cookie_Store_API", "Cookie Store API", "", "nocode")}}
- [Third-Party-Cookies](/de/docs/Web/Privacy/Third-party_cookies)
- [Cookie-Spezifikation: RFC 6265](https://datatracker.ietf.org/doc/html/rfc6265)
- [Cookies, die DSGVO und die ePrivacy-Richtlinie](https://gdpr.eu/cookies/)
