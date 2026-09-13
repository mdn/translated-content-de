---
title: Verwendung von HTTP-Cookies
slug: Web/HTTP/Guides/Cookies
l10n:
  sourceCommit: 487e626006534b7f5ddcecb833f5a5aa007c3059
---

Ein **Cookie** (auch als Web-Cookie oder Browser-Cookie bekannt) ist ein kleines Datenstück, das ein Server an den Webbrowser eines Nutzers sendet. Der Browser kann Cookies speichern, neue Cookies erstellen, vorhandene ändern und sie mit späteren Anfragen an denselben Server zurücksenden. Cookies ermöglichen es Webanwendungen, begrenzte Datenmengen zu speichern und Zustandsinformationen zu merken; das HTTP-Protokoll ist standardmäßig [zustandslos](/de/docs/Web/HTTP/Guides/Overview#http_is_stateless_but_not_sessionless).

In diesem Artikel werden wir die Hauptverwendungszwecke von Cookies untersuchen, bewährte Praktiken für deren Verwendung erklären und ihre Datenschutz- und Sicherheitsimplikationen betrachten.

## Wofür Cookies verwendet werden

Typischerweise verwendet der Server den Inhalt von HTTP-Cookies, um festzustellen, ob verschiedene Anfragen vom selben Browser/Nutzer stammen, und gibt dann eine personalisierte oder generische Antwort aus, wie es angebracht ist. Der folgende Abschnitt beschreibt ein einfaches Benutzeranmeldungssystem:

1. Der Benutzer sendet Anmeldeinformationen an den Server, zum Beispiel über ein Formular.
2. Wenn die Anmeldeinformationen korrekt sind, aktualisiert der Server die Benutzeroberfläche, um anzuzeigen, dass der Benutzer angemeldet ist, und antwortet mit einem Cookie, das eine Sitzungs-ID enthält, die den Anmeldestatus im Browser aufzeichnet.
3. Zu einem späteren Zeitpunkt wechselt der Benutzer zu einer anderen Seite auf derselben Website. Der Browser sendet das Cookie mit der Sitzungs-ID zusammen mit der entsprechenden Anfrage, um anzuzeigen, dass er weiterhin denkt, dass der Benutzer angemeldet ist.
4. Der Server überprüft die Sitzungs-ID und, falls sie noch gültig ist, sendet dem Benutzer eine personalisierte Version der neuen Seite. Wenn sie nicht gültig ist, wird die Sitzungs-ID gelöscht und dem Benutzer wird eine generische Version der Seite angezeigt (oder möglicherweise eine "Zugriff verweigert"-Nachricht und er wird aufgefordert, sich erneut anzumelden).

![visuelle Darstellung der oben beschriebenen Anmelde-Systembeschreibung](/shared-assets/images/diagrams/http/cookies/cookie-basic-example.png)

Cookies werden hauptsächlich für drei Zwecke verwendet:

- **Sitzungsverwaltung**: Benutzeranmeldestatus, Inhalte des Warenkorbs, Spielergebnisse oder andere sitzungsbezogene Details, die der Server sich merken muss.
- **Personalisierung**: Benutzereinstellungen wie Anzeigesprache und UI-Thema.
- **Tracking**: Aufzeichnung und Analyse des Nutzerverhaltens.

### Datenspeicherung

In den frühen Tagen des Webs, als es keine andere Möglichkeit gab, wurden Cookies für allgemeine Zwecke der clientseitigen Datenspeicherung verwendet. Heutzutage werden moderne Speicher-APIs empfohlen, wie die [Web Storage API](/de/docs/Web/API/Web_Storage_API) (`localStorage` und `sessionStorage`) und [IndexedDB](/de/docs/Web/API/IndexedDB_API).

Diese sind für die Speicherung konzipiert, senden niemals Daten an den Server und haben nicht die Nachteile, die mit der Verwendung von Cookies zur Speicherung einhergehen:

- Browser sind in der Regel auf eine maximale Anzahl von Cookies pro Domain (je nach Browser verschieden, im Allgemeinen in der Größenordnung von Hunderten) und eine maximale Größe pro Cookie (normalerweise 4KB) beschränkt. Speicher-APIs können größere Datenmengen speichern.
- Cookies werden mit jeder Anfrage gesendet, was die Leistung beeinträchtigen kann (zum Beispiel bei langsamen mobilen Datenverbindungen), besonders wenn viele Cookies gesetzt sind.

> [!NOTE]
> Um gespeicherte Cookies (und andere Speicher, die eine Webseite verwendet) zu sehen, können Sie den [Speicherinspektor](https://firefox-source-docs.mozilla.org/devtools-user/storage_inspector/index.html) in den Firefox-Entwicklertools oder das [Anwendungsfeld](https://developer.chrome.com/docs/devtools/progressive-web-apps) in den Chrome-Entwicklertools verwenden.

## Erstellen, Entfernen und Aktualisieren von Cookies

Nachdem eine HTTP-Anfrage eingegangen ist, kann ein Server einen oder mehrere {{HTTPHeader("Set-Cookie")}} Header mit der Antwort senden, von denen jeder ein separates Cookie setzt. Ein Cookie wird durch die Angabe eines Name-Wert-Paares wie folgt gesetzt:

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
> Erfahren Sie, wie Sie den `Set-Cookie`-Header in verschiedenen serverseitigen Sprachen/Frameworks verwenden: [PHP](https://www.php.net/manual/en/function.setcookie.php), [Node.js](https://nodejs.org/docs/latest-v19.x/api/http.html#responsesetheadername-value), [Python](https://docs.python.org/3/library/http.cookies.html), [Ruby on Rails](https://api.rubyonrails.org/classes/ActionDispatch/Cookies.html).

Bei einer neuen Anfrage sendet der Browser normalerweise zuvor gespeicherte Cookies für die aktuelle Domain im {{HTTPHeader("Cookie")}} HTTP-Header zurück an den Server:

```http
GET /sample_page.html HTTP/2.0
Host: www.example.org
Cookie: yummy_cookie=chocolate; tasty_cookie=strawberry
```

### Entfernung: Lebensdauer eines Cookies definieren

Sie können ein Ablaufdatum oder einen Zeitraum festlegen, nach dem das Cookie gelöscht und nicht mehr gesendet werden soll. Abhängig von den Attributen, die im {{HTTPHeader("Set-Cookie")}} Header beim Erstellen der Cookies festgelegt werden, können sie entweder _permanente_ oder _Sitzungs-Cookies_ sein:

- Permanente Cookies werden nach dem im `Expires` Attribut angegebenen Datum gelöscht:

  ```http
  Set-Cookie: id=a3fWa; Expires=Thu, 31 Oct 2021 07:28:00 GMT;
  ```

  oder nach dem im `Max-Age` Attribut angegebenen Zeitraum:

  ```http
  Set-Cookie: id=a3fWa; Max-Age=2592000
  ```

  > [!NOTE]
  > `Expires` ist länger verfügbar als `Max-Age`, jedoch ist `Max-Age` weniger fehleranfällig und hat Vorrang, wenn beide gesetzt sind. Der Grund dafür ist, dass bei der Festlegung eines `Expires`-Datums und einer Zeit diese relativ zum Client sind, auf dem das Cookie gesetzt wird. Wenn der Server auf einen anderen Zeitpunkt eingestellt ist, könnte dies zu Fehlern führen.

- _Sitzungs-Cookies_ – Cookies ohne ein `Max-Age` oder `Expires`-Attribut – werden gelöscht, wenn die aktuelle Sitzung endet. Der Browser definiert, wann die "aktuelle Sitzung" endet, und einige Browser verwenden _Sitzungswiederherstellung_ beim Neustart. Dies kann dazu führen, dass Sitzungs-Cookies unbegrenzt bestehen bleiben.

  > [!NOTE]
  > Wenn Ihre Website Benutzer authentifiziert, sollte sie Sitzungs-Cookies neu generieren und erneut senden, selbst wenn diese bereits vorhanden sind, wann immer sich ein Benutzer authentifiziert. Dieser Ansatz hilft, [Session Fixation](https://owasp.org/www-community/attacks/Session_fixation) Angriffe zu verhindern, bei denen ein Dritter die Sitzung eines Benutzers wiederverwenden kann.

Um ein Cookie sofort zu entfernen, setzen Sie das Cookie erneut mit demselben Namen, Pfad und derselben Domain (falls angegeben), und setzen Sie das `Expires`-Attribut auf ein Datum in der Vergangenheit oder das `Max-Age`-Attribut auf `0` oder negativ. Dies weist den Browser an, das Cookie sofort zu löschen. Zum Beispiel:

```http
Set-Cookie: id=a3fWa; Max-Age=0
```

Sie können auch alle mit einer registrierbaren Domain verknüpften Cookies mithilfe des {{httpheader("Clear-Site-Data")}} Antwort-Headers löschen.
Zum Beispiel: Der folgende Header, der von `https://foo.example.com/` gesendet wird, würde alle Cookies löschen, die von `example.com` und allen seinen Subdomains gesendet werden, wie `all.bar.example.com`.

```http
Clear-Site-Data: "cookies"
```

Es gibt einige Techniken, die darauf ausgelegt sind, Cookies nach ihrer Löschung wiederherzustellen. Diese werden als "Zombie"-Cookies bezeichnet. Diese Techniken verstoßen gegen die Prinzipien des Benutzer-[Datenschutzes](#datenschutz_und_tracking) und der Kontrolle, können gegen [Datenschutzbestimmungen](#cookie-bezogene_vorschriften) verstoßen und könnten eine Website, die sie verwendet, rechtlich haftbar machen.

### Aktualisieren von Cookie-Werten

Um ein Cookie über HTTP zu aktualisieren, kann der Server einen {{HTTPHeader("Set-Cookie")}} Header mit dem Namen des vorhandenen Cookies und einem neuen Wert senden. Zum Beispiel:

```http
Set-Cookie: id=new-value
```

Es gibt mehrere Gründe, warum Sie dies tun könnten, zum Beispiel wenn ein Benutzer seine Einstellungen aktualisiert hat und die Anwendung die Änderungen in den clientseitigen Daten widerspiegeln möchte (dies könnte auch über einen clientseitigen Speichermechanismus wie [Web Storage](/de/docs/Web/API/Web_Storage_API) erfolgen).

#### Aktualisieren von Cookies über JavaScript

Im Browser können Sie neue Cookies über JavaScript mit der [`Document.cookie`](/de/docs/Web/API/Document/cookie) Eigenschaft oder der asynchronen [Cookie Store API](/de/docs/Web/API/Cookie_Store_API) erstellen. Beachten Sie, dass alle untenstehenden Beispiele `Document.cookie` verwenden, da es die am weitesten unterstützte/etablierte Option ist.

```js
document.cookie = "yummy_cookie=chocolate";
document.cookie = "tasty_cookie=strawberry";
```

Sie können auch auf vorhandene Cookies zugreifen und neue Werte für sie festlegen:

```js
console.log(document.cookie);
// logs "yummy_cookie=chocolate; tasty_cookie=strawberry"

document.cookie = "yummy_cookie=blueberry";

console.log(document.cookie);
// logs "tasty_cookie=strawberry; yummy_cookie=blueberry"
```

Aus Sicherheitsgründen können Sie Cookie-Werte nicht ändern, indem Sie einen aktualisierten `Cookie`-Header direkt senden, wenn eine Anfrage initiiert wird, zum Beispiel über [`fetch()`](/de/docs/Web/API/Window/fetch) oder [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest).

Es gibt gute Gründe, warum Sie JavaScript nicht erlauben sollten, Cookies überhaupt zu ändern. Sie können verhindern, dass JavaScript auf ein Cookie zugreift, indem Sie das [`HttpOnly`](/de/docs/Web/HTTP/Reference/Headers/Set-Cookie#httponly) Attribut bei seiner Erstellung angeben. Weitere Details finden Sie im Abschnitt [Sicherheit](#sicherheit).

## Sicherheit

Wenn Sie Informationen in Cookies speichern, sind standardmäßig alle Cookie-Werte für den Endnutzer sichtbar und können von ihm geändert werden. Sie möchten wirklich nicht, dass Ihre Cookies zweckentfremdet werden – zum Beispiel von schlechten Akteuren darauf zugegriffen/verändert oder an Domains gesendet werden, an die sie nicht gesendet werden sollten. Die potenziellen Folgen können von ärgerlich – Anwendungen funktionieren nicht oder zeigen seltsames Verhalten – bis katastrophal reichen. Ein Krimineller könnte zum Beispiel eine Sitzungs-ID stehlen und sie verwenden, um ein Cookie zu setzen, das vorgibt, dass er als jemand anderes angemeldet ist, und dabei die Kontrolle über deren Bank- oder E-Commerce-Konto übernehmen.

Sie können Ihre Cookies auf verschiedene Arten schützen, die in diesem Abschnitt überprüft werden.

### Blockieren Sie den Zugriff auf Ihre Cookies

Sie können sicherstellen, dass Cookies sicher gesendet werden und nicht von unbeabsichtigten Parteien oder Skripten auf zwei Arten darauf zugegriffen wird: mit dem `Secure`-Attribut und dem `HttpOnly`-Attribut:

```http
Set-Cookie: id=a3fWa; Expires=Thu, 21 Oct 2021 07:28:00 GMT; Secure; HttpOnly
```

- Ein Cookie mit dem `Secure`-Attribut wird nur mit einer verschlüsselten Anfrage über das HTTPS-Protokoll an den Server gesendet. Es wird niemals mit unsicherem HTTP gesendet (außer auf localhost, obwohl diese Ausnahme von Safari nicht unterstützt wird), was bedeutet, dass [Man-in-the-Middle (MITM)](/de/docs/Web/Security/Attacks/MITM) Angreifer nicht einfach darauf zugreifen können. Unsichere Websites (mit `http:` in der URL) können keine Cookies mit dem `Secure`-Attribut setzen. Nehmen Sie jedoch nicht an, dass `Secure` den gesamten Zugriff auf sensible Informationen in Cookies verhindert. Zum Beispiel kann jemand, der Zugriff auf die Festplatte des Clients hat (oder JavaScript, wenn das `HttpOnly`-Attribut nicht gesetzt ist), die Informationen lesen und ändern.

- Ein Cookie mit dem `HttpOnly`-Attribut kann nicht von JavaScript, zum Beispiel mit [`Document.cookie`](/de/docs/Web/API/Document/cookie), sondern nur dann zugegriffen werden, wenn es den Server erreicht. Cookies, die Benutzersitzungen beibehalten, sollten zum Beispiel das `HttpOnly`-Attribut gesetzt haben – es wäre sehr unsicher, diese für JavaScript verfügbar zu machen. Diese Vorsichtsmaßnahme hilft, Cross-Site Scripting ([XSS](/de/docs/Web/Security/Attacks/XSS)) Angriffe zu mildern.

> [!NOTE]
> Abhängig von der Anwendung möchten Sie möglicherweise einen opaken Bezeichner verwenden, den der Server nachschlagen kann, anstatt sensible Informationen direkt in Cookies zu speichern, oder alternative Authentifizierungs-/Vertraulichkeitsmechanismen wie [JSON Web Tokens](https://www.jwt.io/) untersuchen.

### Definieren Sie, wohin Cookies gesendet werden

Die `Domain`- und `Path`-Attribute definieren den _Geltungsbereich_ eines Cookies: Welche URLs die Cookies gesendet werden.

- Das `Domain`-Attribut gibt an, welcher Server ein Cookie empfangen kann. Wenn angegeben, sind Cookies auf dem angegebenen Server und seinen Subdomains verfügbar. Zum Beispiel, wenn Sie `Domain=mozilla.org` von `mozilla.org` setzen, sind Cookies auf dieser Domain und Subdomains wie `developer.mozilla.org` verfügbar.

  ```http
  Set-Cookie: id=a3fWa; Expires=Thu, 21 Oct 2021 07:28:00 GMT; Secure; HttpOnly; Domain=mozilla.org
  ```

  Wenn der `Set-Cookie`-Header kein `Domain`-Attribut angibt, sind die Cookies auf dem Server, der es setzt, _aber nicht auf seinen Subdomains_ verfügbar. Daher ist das Angeben von `Domain` weniger restriktiv, als es zu weglassen.
  Beachten Sie, dass ein Server das `Domain`-Attribut nur auf seine eigene Domain oder eine übergeordnete Domain, nicht auf eine Subdomain oder eine andere Domain setzen kann.
  Ein Server mit der Domain `foo.example.com` könnte also das Attribut auf `example.com` oder `foo.example.com` setzen, aber nicht auf `bar.foo.example.com` oder `elsewhere.com` (die Cookies würden jedoch _weiterhin_ an Subdomains wie `bar.foo.example.com` gesendet).
  Weitere Informationen finden Sie unter [Ungültige Domains](/de/docs/Web/HTTP/Reference/Headers/Set-Cookie#invalid_domains).

- Das `Path`-Attribut gibt einen URL-Pfad an, der in der angeforderten URL vorhanden sein muss, um den `Cookie`-Header zu senden. Zum Beispiel:

  ```http
  Set-Cookie: id=a3fWa; Expires=Thu, 21 Oct 2021 07:28:00 GMT; Secure; HttpOnly; Path=/docs
  ```

  Das `%x2F` ("/")-Zeichen wird als Verzeichnistrenner betrachtet, und Unterverzeichnisse stimmen ebenfalls überein. Zum Beispiel, wenn Sie `Path=/docs` setzen, stimmen diese Anforderungspfade überein:
  - `/docs`
  - `/docs/`
  - `/docs/Web/`
  - `/docs/Web/HTTP`

  Aber diese Anforderungspfade stimmen nicht überein:
  - `/`
  - `/docsets`
  - `/fr/docs`

  > [!NOTE]
  > Das `path`-Attribut ermöglicht es Ihnen, zu steuern, welche Cookies der Browser basierend auf den verschiedenen Teilen einer Seite sendet.
  > Es ist nicht als Sicherheitsmaßnahme gedacht und [schützt nicht](/de/docs/Web/API/Document/cookie#security) vor unautorisierter Lesung des Cookies von einem anderen Pfad.

### Kontrolle von Drittanbieter-Cookies mit `SameSite`

Das [`SameSite`](/de/docs/Web/HTTP/Reference/Headers/Set-Cookie#samesitesamesite-value) Attribut ermöglicht es Servern zu spezifizieren, wann Cookies mit Cross-Site-Anfragen gesendet werden sollen – also [Drittanbieter-Cookies](/de/docs/Web/Privacy/Guides/Third-party_cookies). Cross-Site-Anfragen sind Anfragen, bei denen die {{Glossary("Site", "Site")}} (die registrierbare Domain) und/oder das Schema (http oder https) nicht mit der Site übereinstimmen, die der Benutzer gerade besucht. Dazu gehören Anfragen, die gesendet werden, wenn auf Links auf anderen Sites geklickt wird, um zu Ihrer Site zu navigieren, und jede Anfrage, die von eingebetteten Inhalten Dritter gesendet wird.

`SameSite` hilft, Informationsverluste zu verhindern, die Privatsphäre der Nutzer zu wahren und bietet einen gewissen Schutz gegen {{Glossary("CSRF", "Cross-Site-Request-Forgery")}} Angriffe. Es nimmt drei mögliche Werte an: `Strict`, `Lax` und `None`:

- `Strict` bewirkt, dass der Browser das Cookie nur als Antwort auf Anfragen sendet, die von der Ursprungsseite des Cookies stammen. Dies sollte verwendet werden, wenn Sie Cookies in Bezug auf Funktionalitäten haben, die immer hinter einer anfänglichen Navigation stehen werden, wie etwa Authentifizierung oder die Speicherung von Warenkorbinformationen.

  ```http
  Set-Cookie: cart=110045_77895_53420; SameSite=Strict
  ```

  > [!NOTE]
  > Cookies, die für sensible Informationen verwendet werden, sollten auch eine kurze [Lebensdauer](#removal_defining_the_lifetime_of_a_cookie) haben.

- `Lax` ist ähnlich, außer dass der Browser das Cookie auch sendet, wenn der Benutzer zur Ursprungsseite des Cookies _navigiert_ (auch wenn der Benutzer von einer anderen Site kommt). Dies ist nützlich für Cookies, die die Anzeige einer Site betreffen – zum Beispiel könnten Sie Partnerproduktinformationen zusammen mit einem Affiliate-Link auf Ihrer Website haben. Wenn dieser Link zur Partnerwebsite gefolgt wird, möchte dieser möglicherweise ein Cookie setzen, das besagt, dass der Affiliate-Link gefolgt wurde, was ein Belohnungsbanner anzeigt und einen Rabatt gewährt, wenn das Produkt erworben wird.

  ```http
  Set-Cookie: affiliate=e4rt45dw; SameSite=Lax
  ```

- `None` gibt an, dass Cookies sowohl bei ursprungs- als auch bei Cross-Site-Anfragen gesendet werden. Dies ist nützlich, wenn Sie Cookies zusammen mit Anfragen senden möchten, die von Drittanbieter-Inhalten auf anderen Sites eingebettet sind, wie z. B. Anbieter von Technologien oder Analysen. Beachten Sie, dass, wenn `SameSite=None` festgelegt ist, auch das `Secure`-Attribut gesetzt sein muss – `SameSite=None` erfordert einen _sicheren Kontext_.

  ```http
  Set-Cookie: widget_session=7yjgj57e4n3d; SameSite=None; Secure; HttpOnly
  ```

Wenn kein `SameSite`-Attribut gesetzt ist, wird das Cookie standardmäßig als `Lax` behandelt.

### Cookie-Präfixe

Wegen des Designs des Cookie-Mechanismus kann ein Server nicht bestätigen, dass ein Cookie von einem sicheren Ursprung gesetzt wurde oder sogar _wo_ ein Cookie ursprünglich gesetzt wurde.

Eine Anwendung auf einer Subdomain kann ein Cookie mit dem `Domain`-Attribut setzen, was den Zugriff auf dieses Cookie auf allen anderen Subdomains ermöglicht. Dieser Mechanismus kann bei einem [Session Fixation](https://owasp.org/www-community/attacks/Session_fixation) Angriff missbraucht werden.

As a [defense-in-depth measure](<https://en.wikipedia.org/wiki/Defense_in_depth_(computing)>), you can use _cookie prefixes_ to impose specific restrictions on a cookie's attributes in supporting user agents. All cookie prefixes start with a double-underscore (`__`) and end in a dash (`-`). Four prefixes are available:

- **`__Secure-`**: Cookies with names starting with `__Secure-` must be set with the `Secure` attribute by a secure page (HTTPS).
- **`__Host-`**: Cookies with names starting with `__Host-` must be set with the `Secure` attribute by a secure page (HTTPS). In addition, they must not have a `Domain` attribute specified, and the `Path` attribute must be set to `/`. This guarantees that such cookies are only sent to the host that set them, and not to any other host on the domain. It also guarantees that they are set host-wide and cannot be overridden on any path on that host. This combination yields a cookie that is as close as can be to treating the origin as a security boundary.
- **`__Http-`**: Cookies with names starting with `__Http-` must be set with the `Secure` flag by a secure page (HTTPS) and in addition must have the `HttpOnly` attribute set to prove that they were set via the `Set-Cookie` header (they can't be set or modified via JavaScript features such as [`Document.cookie`](/de/docs/Web/API/Document/cookie) or the [Cookie Store API](/de/docs/Web/API/Cookie_Store_API)).
- **`__Host-Http-`**: Cookies with names starting with `__Host-Http-` must be set with the `Secure` flag by a secure page (HTTPS) and must have the `HttpOnly` attribute set to prove that they were set via the `Set-Cookie` header. In addition, they also have the same restrictions as `__Host-`-prefixed cookies. This combination yields a cookie that is as close as can be to treating the origin as a security boundary while at the same time ensuring developers and server operators know that its scope is limited to HTTP requests.

The browser will reject cookies with these prefixes that don't comply with their restrictions. As the application server only checks for a specific cookie name when determining if the user is authenticated or a CSRF token is correct, this effectively acts as a defense measure against [session fixation](https://owasp.org/www-community/attacks/Session_fixation).

> [!NOTE]
> Auf dem Server _muss_ die Webanwendung nach dem vollständigen Cookienamen einschließlich des Präfixes suchen. Benutzeragenten _entfernen nicht_ das Präfix vom Cookie, bevor es in einem Anforderungs-{{HTTPHeader("Cookie")}}-Header gesendet wird.

Weitere Informationen zu Cookie-Präfixen und dem aktuellen Stand der Browserunterstützung finden Sie im [Präfixe-Abschnitt des Set-Cookie-Referenzartikels](/de/docs/Web/HTTP/Reference/Headers/Set-Cookie#cookie_prefixes).

## Datenschutz und Tracking

Zuvor haben wir darüber gesprochen, wie das `SameSite`-Attribut verwendet werden kann, um zu kontrollieren, wann Drittanbieter-Cookies gesendet werden, und dass dies dazu beitragen kann, die Privatsphäre der Benutzer zu wahren. Datenschutz ist eine sehr wichtige Überlegung beim Erstellen von Websites, die bei korrekter Durchführung das Vertrauen Ihrer Nutzer stärken können. Wenn es schlecht gemacht wird, kann es dieses Vertrauen völlig untergraben und alle möglichen anderen Probleme verursachen.

Drittanbieter-Cookies können von Drittanbietern stammen, die in Sites über {{htmlelement("iframe")}}s eingebettet sind. Sie haben viele legitime Verwendungen, darunter das Teilen von Benutzerprofilinformationen, das Zählen von Anzeigenaufrufen oder das Sammeln von Analysen über verschiedene verwandte Domains hinweg.

Drittanbieter-Cookies können jedoch auch genutzt werden, um unheimliche, invasive Benutzererlebnisse zu schaffen. Ein Drittanbieter-Server kann ein Profil des Browserverlaufs und der Gewohnheiten eines Nutzers basierend auf Cookies erstellen, die von demselben Browser beim Aufrufen mehrerer Sites an ihn gesendet werden. Das klassische Beispiel ist, wenn Sie auf einer Website nach Produktinformationen suchen und dann von Anzeigen für ähnliche Produkte verfolgt werden, egal wo Sie hingehen.

Browserhersteller wissen, dass Nutzer dieses Verhalten nicht mögen, und haben daher alle begonnen, Drittanbieter-Cookies standardmäßig zu blockieren, oder zumindest Pläne gemacht, in diese Richtung zu gehen. Drittanbieter-Cookies (oder einfach Tracking-Cookies) können auch durch andere Browsereinstellungen oder -erweiterungen blockiert werden.

> [!NOTE]
> Das Blockieren von Cookies kann dazu führen, dass einige Drittanbieter-Komponenten (wie soziale Medien-Widgets) nicht wie geplant funktionieren. Da Browser weitere Einschränkungen für Drittanbieter-Cookies auferlegen, sollten Entwickler damit beginnen, Wege zu finden, um ihre Abhängigkeit von ihnen zu reduzieren.

Lesen Sie unseren Artikel zu [Drittanbieter-Cookies](/de/docs/Web/Privacy/Guides/Third-party_cookies) für detaillierte Informationen über Drittanbieter-Cookies, die mit ihnen verbundenen Probleme und welche Alternativen verfügbar sind. Sehen Sie sich unsere [Datenschutz](/de/docs/Web/Privacy)-Landingpage für weitere Informationen zum Datenschutz im Allgemeinen an.

## Cookie-bezogene Vorschriften

Gesetze oder Vorschriften, die die Verwendung von Cookies betreffen, umfassen:

- Die [Allgemeine Datenschutzverordnung](https://gdpr.eu/) (GDPR) in der Europäischen Union
- Die ePrivacy-Richtlinie in der EU
- Das kalifornische Verbraucher-Datenschutzgesetz

Diese Vorschriften haben globale Reichweite. Sie gelten für jede Site im _World Wide_ Web, auf die Nutzer aus diesen Gerichtsbarkeiten zugreifen (der EU und Kalifornien, mit der Einschränkung, dass das kalifornische Gesetz nur für Entitäten mit Bruttoeinnahmen von über 25 Millionen USD gilt, sowie anderen Anforderungen).

Diese Vorschriften umfassen Anforderungen wie:

- Benutzer darüber zu informieren, dass Ihre Website Cookies verwendet.
- Den Benutzern die Möglichkeit zu geben, den Empfang einiger oder aller Cookies abzulehnen.
- Es den Benutzern zu ermöglichen, den Großteil Ihres Dienstes ohne den Empfang von Cookies zu nutzen.

Es kann andere Vorschriften geben, die die Verwendung von Cookies in Ihrem Wohnsitzland regeln. Es liegt in Ihrer Verantwortung, diese Vorschriften zu kennen und einzuhalten. Es gibt Unternehmen, die "Cookie-Banner"-Code anbieten, der Ihnen hilft, diese Vorschriften einzuhalten.

> [!NOTE]
> Unternehmen sollten die Arten von Cookies angeben, die sie auf ihren Websites verwenden, um Transparenzzwecke zu erfüllen und Vorschriften einzuhalten. Siehe zum Beispiel [Googles Mitteilung zu den von ihm verwendeten Cookie-Typen](https://policies.google.com/technologies/cookies#types-of-cookies) und Mozillas [Hinweis zu Datenschutz, Websites, Kommunikation & Cookies](https://www.mozilla.org/en-US/privacy/websites/#cookies).

## Siehe auch

- Verwandte HTTP-Header: {{HTTPHeader("Set-Cookie")}}, {{HTTPHeader("Cookie")}}
- Verwandte JavaScript-APIs: [`Document.cookie`](/de/docs/Web/API/Document/cookie), [`Navigator.cookieEnabled`](/de/docs/Web/API/Navigator/cookieEnabled), [Cookie Store API](/de/docs/Web/API/Cookie_Store_API)
- [Drittanbieter-Cookies](/de/docs/Web/Privacy/Guides/Third-party_cookies)
- [Cookie-Spezifikation: RFC 6265](https://datatracker.ietf.org/doc/html/rfc6265)
- [Cookies, die DSGVO und die ePrivacy-Richtlinie](https://gdpr.eu/cookies/)
