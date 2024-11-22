---
title: Verwendung von HTTP-Cookies
slug: Web/HTTP/Cookies
l10n:
  sourceCommit: 5f76b99045f87349ed030bbd6a3c2e43badb3c22
---

{{HTTPSidebar}}

Ein **Cookie** (auch bekannt als Web-Cookie oder Browser-Cookie) ist ein kleines Datenstück, das ein Server an den Webbrowser eines Benutzers sendet. Der Browser kann Cookies speichern, neue Cookies erstellen, vorhandene ändern und sie mit späteren Anfragen an denselben Server zurücksenden. Cookies ermöglichen es Webanwendungen, begrenzte Datenmengen zu speichern und Statusinformationen zu merken; standardmäßig ist das HTTP-Protokoll [zustandslos](/de/docs/Web/HTTP/Overview#http_is_stateless_but_not_sessionless).

In diesem Artikel werden wir die Hauptverwendungen von Cookies erkunden, bewährte Praktiken für ihren Einsatz erklären und ihre Auswirkungen auf Datenschutz und Sicherheit betrachten.

## Wofür Cookies verwendet werden

Typischerweise nutzt der Server den Inhalt von HTTP-Cookies, um festzustellen, ob verschiedene Anfragen vom selben Browser/Benutzer stammen, und gibt dann eine personalisierte oder generische Antwort aus, wie es angemessen ist. Das Folgende beschreibt ein sehr einfaches Benutzersystem für das Einloggen:

1. Der Benutzer sendet Anmeldedaten an den Server, beispielsweise über ein Formular.
2. Wenn die Anmeldedaten korrekt sind, aktualisiert der Server die Benutzeroberfläche, um anzuzeigen, dass der Benutzer angemeldet ist, und antwortet mit einem Cookie, das eine Sitzungs-ID enthält, die dessen Anmeldestatus im Browser aufzeichnet.
3. Später navigiert der Benutzer zu einer anderen Seite derselben Website. Der Browser sendet das Cookie mit der Sitzungs-ID zusammen mit der entsprechenden Anfrage, um anzuzeigen, dass er weiterhin glaubt, dass der Benutzer angemeldet ist.
4. Der Server überprüft die Sitzungs-ID und sendet dem Benutzer eine personalisierte Version der neuen Seite, wenn sie noch gültig ist. Ist sie nicht gültig, wird die Sitzungs-ID gelöscht und dem Benutzer wird eine generische Version der Seite angezeigt (oder vielleicht eine "Zugriff verweigert"-Nachricht und der Benutzer wird aufgefordert, sich erneut anzumelden).

![visuelle Darstellung der oben beschriebenen Anmeldesystembeschreibung](cookie-basic-example.png)

Cookies werden hauptsächlich für drei Zwecke verwendet:

- **Sitzungsmanagement**: Benutzer-Anmeldestatus, Warenkorbinhalt, Punktestände in Spielen oder alle anderen Sitzungsdetails, die der Server sich merken muss.
- **Personalisierung**: Benutzerpräferenzen wie Anzeigesprache und UI-Thema.
- **Tracking**: Aufzeichnen und Analysieren des Benutzerverhaltens.

### Datenspeicherung

In den frühen Tagen des Webs, als es keine andere Möglichkeit gab, wurden Cookies für allgemeine clientseitige Datenspeicherung verwendet. Moderne Speicher-APIs werden jetzt empfohlen, wie zum Beispiel die [Web Storage API](/de/docs/Web/API/Web_Storage_API) (`localStorage` und `sessionStorage`) und [IndexedDB](/de/docs/Web/API/IndexedDB_API).

Diese sind für die Speicherung ausgelegt, senden niemals Daten an den Server und kommen nicht mit anderen Nachteilen, die die Verwendung von Cookies für die Speicherung mit sich bringt:

- Browser sind im Allgemeinen auf eine maximale Anzahl von Cookies pro Domain beschränkt (variabel je nach Browser, im Allgemeinen im Hunderterbereich) und eine maximale Größe pro Cookie (in der Regel 4KB). Speicher-APIs können größere Datenmengen speichern.
- Cookies werden mit jeder Anfrage gesendet, was die Leistung verschlechtern kann (zum Beispiel bei langsamen mobilen Datenverbindungen), insbesondere wenn viele Cookies gesetzt sind.

> [!NOTE]
> Um gespeicherte Cookies (und andere Speicher, die eine Webseite verwendet) zu sehen, können Sie den [Storage Inspector](https://firefox-source-docs.mozilla.org/devtools-user/storage_inspector/index.html) in den Firefox Developer Tools oder das [Application Panel](https://developer.chrome.com/docs/devtools/progressive-web-apps) in den Chrome Developer Tools verwenden.

## Erstellen, Entfernen und Aktualisieren von Cookies

Nach dem Empfang einer HTTP-Anfrage kann ein Server eine oder mehrere {{HTTPHeader("Set-Cookie")}}-Header mit der Antwort senden, von denen jeder ein separates Cookie setzt. Ein einfaches Cookie wird durch Angabe eines Name-Wert-Paares gesetzt:

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
> Erfahren Sie, wie Sie den `Set-Cookie`-Header in verschiedenen serverseitigen Sprachen/Frameworks verwenden: [PHP](https://www.php.net/manual/en/function.setcookie.php), [Node.js](https://nodejs.org/dist/latest-v14.x/docs/api/http.html#http_response_setheader_name_value), [Python](https://docs.python.org/3/library/http.cookies.html), [Ruby on Rails](https://api.rubyonrails.org/classes/ActionDispatch/Cookies.html).

Wenn eine neue Anfrage gestellt wird, sendet der Browser normalerweise die zuvor gespeicherten Cookies für die aktuelle Domain innerhalb eines {{HTTPHeader("Cookie")}}-HTTP-Headers zurück an den Server:

```http
GET /sample_page.html HTTP/2.0
Host: www.example.org
Cookie: yummy_cookie=chocolate; tasty_cookie=strawberry
```

### Entfernen: Lebensdauer eines Cookies festlegen

Sie können ein Ablaufdatum oder eine Zeitspanne angeben, nach der das Cookie gelöscht und nicht mehr gesendet werden soll. Abhängig von den Attributen, die im {{HTTPHeader("Set-Cookie")}}-Header beim Erstellen der Cookies gesetzt sind, können sie entweder _permanent_ oder _Sitzungs_-Cookies sein:

- Permanente Cookies werden nach dem im `Expires`-Attribut angegebenen Datum gelöscht:

  ```http
  Set-Cookie: id=a3fWa; Expires=Thu, 31 Oct 2021 07:28:00 GMT;
  ```

  oder nach der im `Max-Age`-Attribut angegebenen Periode:

  ```http
  Set-Cookie: id=a3fWa; Max-Age=2592000
  ```

  > **Hinweis:** `Expires` ist länger verfügbar als `Max-Age`, jedoch ist `Max-Age` weniger fehleranfällig und hat Vorrang, wenn beide gesetzt sind. Der Grund dafür ist, dass das relative Setzen eines `Expires`-Datums und einer Uhrzeit zum Zeitpunkt des Clients geschehen. Wenn der Server auf eine andere Zeit eingestellt ist, kann das zu Fehlern führen.

- _Sitzungs_-Cookies – Cookies ohne ein `Max-Age`- oder `Expires`-Attribut – werden gelöscht, wenn die aktuelle Sitzung endet. Der Browser definiert, wann die "aktuelle Sitzung" endet, und einige Browser verwenden _Sitzungswiederherstellung_ beim Neustart. Dies kann dazu führen, dass Sitzungs-Cookies unbegrenzt dauern.

  > [!NOTE]
  > Wenn Ihre Seite Benutzer authentifiziert, sollte sie Sitzungs-Cookies neu generieren und erneut senden, auch bereits vorhandene, wenn sich ein Benutzer authentifiziert. Dieser Ansatz hilft, [Session-Fixation-Angriffe](/de/docs/Web/Security/Types_of_attacks#session_fixation) zu verhindern, bei denen ein Dritter die Session eines Benutzers wiederverwenden kann.

Es gibt einige Techniken, die darauf abzielen, Cookies nach ihrer Löschung wiederherzustellen. Diese sind als "Zombie"-Cookies bekannt. Diese Techniken verstoßen gegen die Prinzipien des Benutzer-[Datenschutzes](#datenschutz_und_tracking) und der Kontrolle, können gegen [Datenschutzbestimmungen](#cookie-bezogene_vorschriften) verstoßen und eine rechtliche Haftung für eine Website darstellen, die sie verwendet.

### Cookie-Werte aktualisieren

Um ein Cookie über HTTP zu aktualisieren, kann der Server einen {{HTTPHeader("Set-Cookie")}}-Header zusammen mit dem bestehenden Cookie-Namen und einem neuen Wert senden. Zum Beispiel:

```http
Set-Cookie: id=new-value
```

Es gibt mehrere Gründe, warum Sie dies tun möchten, z.B. wenn ein Benutzer seine Präferenzen aktualisiert hat und die Anwendung diese Änderungen in den clientseitigen Daten widerspiegeln soll (Sie könnten dies auch mit einem clientseitigen Speichermechanismus wie [Web Storage](/de/docs/Web/API/Web_Storage_API) tun).

#### Cookies per JavaScript aktualisieren

Im Browser können Sie neue Cookies per JavaScript mit der [`Document.cookie`](/de/docs/Web/API/Document/cookie)-Eigenschaft oder der asynchronen [Cookie Store API](/de/docs/Web/API/Cookie_Store_API) erstellen. Beachten Sie, dass alle untenstehenden Beispiele `Document.cookie` verwenden, da es die am weitesten unterstützte/etablierte Option ist.

```js
document.cookie = "yummy_cookie=chocolate";
document.cookie = "tasty_cookie=strawberry";
```

Sie können auch auf bestehende Cookies zugreifen und neue Werte für sie setzen, vorausgesetzt, das [`HttpOnly`](/de/docs/Web/HTTP/Headers/Set-Cookie#httponly)-Attribut ist nicht auf ihnen gesetzt (d.h. im `Set-Cookie`-Header, der es erstellt hat):

```js
console.log(document.cookie);
// logs "yummy_cookie=chocolate; tasty_cookie=strawberry"

document.cookie = "yummy_cookie=blueberry";

console.log(document.cookie);
// logs "tasty_cookie=strawberry; yummy_cookie=blueberry"
```

Beachten Sie, dass Sie aus Sicherheitsgründen Cookie-Werte nicht durch das Senden eines aktualisierten `Cookie`-Headers direkt ändern können, wenn Sie eine Anfrage initiieren, z.B. per [`fetch()`](/de/docs/Web/API/Window/fetch) oder [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest). Beachten Sie, dass es auch gute Gründe gibt, warum Sie JavaScript das Ändern von Cookies nicht erlauben sollten – d.h. `HttpOnly` bei der Erstellung setzen. Siehe den Abschnitt [Sicherheit](#sicherheit) für weitere Details.

## Sicherheit

Wenn Sie Informationen in Cookies speichern, sind per Standard alle Cookie-Werte für den Endbenutzer sichtbar und können von ihm geändert werden. Sie möchten wirklich nicht, dass Ihre Cookies missbraucht werden — z.B. von böswilligen Akteuren aufgerufen/geändert oder an Domänen gesendet werden, wo sie nicht hingehören. Die möglichen Konsequenzen können von ärgerlich – Apps, die nicht funktionieren oder seltsames Verhalten zeigen – bis katastrophal reichen. Ein Krimineller könnte z.B. eine Sitzungs-ID stehlen und sie nutzen, um ein Cookie zu setzen, das es so aussehen lässt, als ob er als jemand anders angemeldet wäre, und dabei die Kontrolle über deren Bank- oder E-Commerce-Konto zu übernehmen.

Sie können Ihre Cookies auf verschiedene Weise sichern, die in diesem Abschnitt überprüft werden.

### Zugriff auf Ihre Cookies blockieren

Sie können sicherstellen, dass Cookies sicher gesendet und nicht von ungewollten Parteien oder Skripten zugänglich gemacht werden, auf eine von zwei Arten: mit dem `Secure`-Attribut und dem `HttpOnly`-Attribut:

```http
Set-Cookie: id=a3fWa; Expires=Thu, 21 Oct 2021 07:28:00 GMT; Secure; HttpOnly
```

- Ein Cookie mit dem `Secure`-Attribut wird nur mit einer verschlüsselten Anfrage über das HTTPS-Protokoll an den Server gesendet. Es wird nie mit nicht gesichertem HTTP gesendet (außer auf localhost), was bedeutet, dass {{Glossary("MitM", "Man-in-the-Middle")}}-Angreifer nur schwer darauf zugreifen können. Unsichere Seiten (mit `http:` in der URL) können keine Cookies mit dem `Secure`-Attribut setzen. Seien Sie jedoch nicht der Annahme, dass `Secure` allen Zugriff auf sensible Informationen in Cookies verhindert. Zum Beispiel kann jemand mit Zugriff auf die Festplatte des Clients (oder JavaScript, wenn das `HttpOnly`-Attribut nicht gesetzt ist) die Informationen lesen und ändern.

- Ein Cookie mit dem `HttpOnly`-Attribut kann nicht von JavaScript aufgerufen werden, zum Beispiel über [`Document.cookie`](/de/docs/Web/API/Document/cookie); es kann nur aufgerufen werden, wenn es den Server erreicht. Cookies, die Benutzersitzungen aufrechterhalten, sollten zum Beispiel das `HttpOnly`-Attribut haben — es wäre wirklich unsicher, sie für JavaScript zugänglich zu machen. Diese Vorsichtsmaßnahme hilft, Cross-Site-Scripting ([XSS](/de/docs/Web/Security/Types_of_attacks#cross-site_scripting_xss)) Angriffe zu mildern.

> [!NOTE]
> Abhängig von der Anwendung möchten Sie vielleicht einen undurchsichtigen Identifikator verwenden, den der Server nachschlägt, anstatt sensible Informationen direkt in Cookies zu speichern, oder alternative Authentifizierungs-/Vertraulichkeitsmechanismen wie [JSON Web Tokens](https://jwt.io/) untersuchen.

### Definieren, an welche Stellen Cookies gesendet werden

Die `Domain`- und `Path`-Attribute definieren den _Bereich_ eines Cookies: an welche URLs die Cookies gesendet werden.

- Das `Domain`-Attribut gibt an, welcher Server ein Cookie erhalten kann. Wenn angegeben, sind Cookies auf dem angegebenen Server und seinen Subdomains verfügbar. Zum Beispiel, wenn Sie `Domain=mozilla.org` von `mozilla.org` setzen, sind Cookies auf dieser Domäne und Subdomains wie `developer.mozilla.org` verfügbar.

  ```http
  Set-Cookie: id=a3fWa; Expires=Thu, 21 Oct 2021 07:28:00 GMT; Secure; HttpOnly; Domain=mozilla.org
  ```

  Wenn der `Set-Cookie`-Header kein `Domain`-Attribut angibt, sind die Cookies auf dem Server verfügbar, der sie setzt, _aber nicht auf seinen Subdomains_. Daher ist das Spezifizieren von `Domain` weniger restriktiv als das Weglassen.
  Beachten Sie, dass ein Server das `Domain`-Attribut nur auf seine eigene Domäne oder eine übergeordnete Domäne setzen kann, nicht auf eine Subdomain oder eine andere Domäne.
  Ein Server mit der Domäne `foo.example.com` könnte also das Attribut auf `example.com` oder `foo.example.com` setzen, aber nicht auf `bar.foo.example.com` oder `elsewhere.com` (die Cookies würden dennoch _an Subdomains wie `bar.foo.example.com` gesendet_).
  Siehe [Ungültige Domänen](/de/docs/Web/HTTP/Headers/Set-Cookie#invalid_domains) für weitere Details.

- Das `Path`-Attribut gibt einen URL-Pfad an, der in der angeforderten URL existieren muss, um den `Cookie`-Header zu senden. Zum Beispiel:

  ```http
  Set-Cookie: id=a3fWa; Expires=Thu, 21 Oct 2021 07:28:00 GMT; Secure; HttpOnly; Path=/docs
  ```

  Das `%x2F` ("/") Zeichen wird als Verzeichnistrenner angesehen, und Unterverzeichnisse passen ebenfalls. Zum Beispiel, wenn Sie `Path=/docs` setzen, passen diese Anfragepfade:

  - `/docs`
  - `/docs/`
  - `/docs/Web/`
  - `/docs/Web/HTTP`

  Aber diese Anfragepfade passen nicht:

  - `/`
  - `/docsets`
  - `/fr/docs`

### Steuerung von Drittanbieter-Cookies mit `SameSite`

Das [`SameSite`](/de/docs/Web/HTTP/Headers/Set-Cookie#samesitesamesite-value) Attribut lässt es zu, dass Server angeben, ob/wann Cookies mit Anfragen von einer anderen Seite gesendet werden — also [Drittanbieter-Cookies](/de/docs/Web/Privacy/Third-party_cookies). Anfragen von einer anderen Seite sind Anfragen, bei denen die {{Glossary("Site", "Seite")}} (die registrierbare Domäne) und/oder das Schema (http oder https) nicht mit der Seite übereinstimmen, die der Benutzer aktuell besucht. Dies beinhaltet Anfragen, die gesendet werden, wenn Links auf anderen Webseiten angeklickt werden, um zu Ihrer Seite zu navigieren, und jede Anfrage, die von eingebettetem Drittanbieterinhalt gesendet wird.

`SameSite` hilft, Lecks von Informationen zu vermeiden, schützt die [Privatsphäre](#datenschutz_und_tracking) des Benutzers und bietet einen gewissen Schutz gegen {{Glossary("CSRF", "Cross-Site-Request-Forgery")}}-Angriffe. Es hat drei mögliche Werte: `Strict`, `Lax` und `None`:

- `Strict` veranlasst den Browser, das Cookie nur als Antwort auf Anfragen zu senden, die von der Ursprungsseite des Cookies stammen. Dies sollte verwendet werden, wenn Sie Cookies im Zusammenhang mit Funktionen haben, die immer hinter einer ersten Navigation sein werden, wie beispielsweise Authentifizierung oder das Speichern von Einkaufswageninformationen.

  ```http
  Set-Cookie: cart=110045_77895_53420; SameSite=Strict
  ```

  > [!NOTE]
  > Cookies, die für sensible Informationen verwendet werden, sollten auch eine kurze [Lebensdauer](#removal_defining_the_lifetime_of_a_cookie) haben.

- `Lax` ist ähnlich, außer dass der Browser das Cookie auch sendet, wenn der Benutzer _zur Ursprungsseite des Cookies navigiert_ (auch wenn der Benutzer von einer anderen Seite kommt). Dies ist nützlich für Cookies, die die Darstellung einer Seite beeinflussen — beispielsweise könnten Sie Informationen zu Partnerprodukten zusammen mit einem Partnerlink auf Ihrer Website haben. Wenn dieser Link zur Partnerwebsite verfolgt wird, möchten sie vielleicht ein Cookie setzen, das besagt, dass der Partnerlink gefolgt wurde, was ein Belohnungsbanner anzeigt und einen Rabatt bietet, wenn das Produkt gekauft wird.

  ```http
  Set-Cookie: affiliate=e4rt45dw; SameSite=Lax
  ```

- `None` gibt an, dass Cookies sowohl bei ursprungsbezogenen als auch bei anfragen von einer anderen Seite gesendet werden. Dies ist nützlich, wenn Sie Cookies mit Anfragen von Drittanbieterinhalten senden möchten, die in andere Seiten eingebettet sind, zum Beispiel Anbieter von Anzeigentechnologie oder Analysen. Beachten Sie, dass wenn `SameSite=None` gesetzt ist, auch das `Secure`-Attribut gesetzt sein muss — `SameSite=None` erfordert einen _sicheren Kontext_.

  ```http
  Set-Cookie: widget_session=7yjgj57e4n3d; SameSite=None; Secure; HttpOnly
  ```

Wenn kein `SameSite`-Attribut gesetzt ist, wird das Cookie standardmäßig als `Lax` behandelt.

### Cookie-Präfixe

Aufgrund des Designs des Cookie-Mechanismus kann ein Server nicht bestätigen, dass ein Cookie von einem sicheren Ursprung gesetzt wurde oder sogar feststellen, _wo_ ein Cookie ursprünglich gesetzt wurde.

Eine anfällige Anwendung auf einer Subdomain kann ein Cookie mit dem `Domain`-Attribut setzen, das Zugriff auf dieses Cookie auf allen anderen Subdomains gibt. Dieser Mechanismus kann in einem _Session-Fixation_-Angriff missbraucht werden. Siehe [Session Fixation](/de/docs/Web/Security/Types_of_attacks#session_fixation) für primäre Schritte zur Abschwächung.

Als [Defense-in-Depth Maßnahme](<https://en.wikipedia.org/wiki/Defense_in_depth_(computing)>), können Sie jedoch _Cookie-Präfixe_ verwenden, um bestimmte Fakten über das Cookie zu behaupten. Zwei Präfixe sind verfügbar:

- `__Host-`: Wenn ein Cookie-Name dieses Präfix hat, wird es in einem {{HTTPHeader("Set-Cookie")}}-Header nur akzeptiert, wenn es auch mit dem `Secure`-Attribut markiert ist, von einem sicheren Ursprung gesendet wurde, _kein_ `Domain`-Attribut enthält und das `Path`-Attribut auf `/` gesetzt ist. Mit anderen Worten ist das Cookie _domain-locked_.
- `__Secure-`: Wenn ein Cookie-Name dieses Präfix hat, wird es in einem {{HTTPHeader("Set-Cookie")}}-Header nur akzeptiert, wenn es mit dem `Secure`-Attribut markiert ist und von einem sicheren Ursprung gesendet wurde. Dies ist schwächer als das `__Host-` Präfix.

Der Browser wird Cookies mit diesen Präfixen ablehnen, die nicht den Einschränkungen entsprechen. Dies stellt sicher, dass Subdomain-erstellte Cookies mit Präfixen entweder auf eine Subdomain beschränkt sind oder vollständig ignoriert werden. Da der Anwendungsserver nur auf einen bestimmten Cookie-Namen überprüft, wenn er feststellt, ob der Benutzer authentifiziert ist oder ein CSRF-Token korrekt ist, agiert dies effektiv als Schutzmaßnahme gegen Session Fixation.

> [!NOTE]
> Auf dem Server _muss_ die Webanwendung auf den vollständigen Cookie-Namen einschließlich des Präfixes prüfen. Benutzeragenten _streichen das Präfix nicht_ aus dem Cookie, bevor es bei einer Anfrage im {{HTTPHeader("Cookie")}}-Header gesendet wird.

Für weitere Informationen zu Cookie-Präfixen und dem aktuellen Stand der Browserunterstützung, siehe den [Präfixe Abschnitt des Set-Cookie Referenzartikels](/de/docs/Web/HTTP/Headers/Set-Cookie#cookie_prefixes).

## Datenschutz und Tracking

Zu Beginn haben wir darüber gesprochen, dass das `SameSite`-Attribut verwendet werden kann, um zu steuern, wann Drittanbieter-Cookies gesendet werden, und dass dies helfen kann, die Privatsphäre der Benutzer zu schützen. Datenschutz ist eine sehr wichtige Überlegung beim Erstellen von Websites, die, wenn sie richtig gemacht wird, Vertrauen mit Ihren Benutzern aufbauen kann. Wenn schlecht ausgeführt, kann es dieses Vertrauen vollständig erodieren und alle möglichen anderen Probleme verursachen.

Drittanbieter-Cookies können von Inhalten von Dritten gesetzt werden, die in Seiten durch {{htmlelement("iframe")}}s eingebettet sind. Sie haben viele legitime Verwendungen, einschließlich des Teilens von Benutzerprofilinformationen, Zählung von Werbeanzeigenimpressionen oder das Sammeln von Analysen über verschiedene verwandte Domänen.

Drittanbieter-Cookies können jedoch auch verwendet werden, um gruselige, invasive Benutzererfahrungen zu schaffen. Ein Drittserver könnte ein Profil des Browserverlaufs und der Gewohnheiten eines Benutzers basierend auf Cookies erstellen, die ihm vom gleichen Browser gesendet werden, wenn auf mehrere Sites zugegriffen wird. Das klassische Beispiel ist, wenn Sie auf einer Seite nach Produktinformationen suchen und dann im gesamten Web von Anzeigen für ähnliche Produkte verfolgt werden, wohin Sie auch gehen.

Die Browseranbieter wissen, dass Benutzer dieses Verhalten nicht mögen, und deshalb haben alle damit begonnen, Drittanbieter-Cookies standardmäßig zu blockieren oder haben zumindest Pläne, in diese Richtung zu gehen. Drittanbieter-Cookies (oder einfach Tracking-Cookies) können auch durch andere Browsereinstellungen oder Erweiterungen blockiert werden.

> [!NOTE]
> Cookie-Blockierung kann dazu führen, dass einige Drittanbieterkomponenten (wie soziale Medien-Widgets) nicht wie beabsichtigt funktionieren. Da Browser weitere Einschränkungen bei Drittanbieter-Cookies auferlegen, sollten Entwickler anfangen, nach Wegen zu suchen, um ihre Abhängigkeit davon zu reduzieren.

Siehe unseren [Drittanbieter-Cookies](/de/docs/Web/Privacy/Third-party_cookies) Artikel für detaillierte Informationen über Drittanbieter-Cookies, die damit verbundenen Probleme und welche Alternativen verfügbar sind. Sehen Sie unsere [Datenschutz](/de/docs/Web/Privacy) Startseite für weitere Informationen über den Datenschutz im Allgemeinen.

## Cookie-bezogene Vorschriften

Gesetze oder Vorschriften, die die Verwendung von Cookies regeln, umfassen:

- Die [Datenschutz-Grundverordnung](https://gdpr.eu/) (DSGVO) in der Europäischen Union
- Die ePrivacy-Richtlinie in der EU
- Das California Consumer Privacy Act

Diese Vorschriften haben globale Reichweite. Sie gelten für jede Seite im _World Wide_ Web, auf die Benutzer aus diesen Rechtsgebieten zugreifen (der EU und Kalifornien, mit der Einschränkung, dass das kalifornische Gesetz nur für Unternehmen mit einem Bruttoumsatz von über 25 Millionen USD gilt, unter anderem).

Diese Vorschriften enthalten Anforderungen wie:

- Benutzer darüber zu informieren, dass Ihre Seite Cookies verwendet.
- Benutzern zu ermöglichen, das Empfangen von einigen oder allen Cookies abzulehnen.
- Benutzern zu ermöglichen, den Großteil Ihres Dienstes zu nutzen, ohne Cookies zu empfangen.

Es kann andere Vorschriften geben, die die Verwendung von Cookies in Ihrer Region regeln. Die Verpflichtung liegt bei Ihnen, diese Vorschriften zu kennen und einzuhalten. Es gibt Unternehmen, die "Cookie-Banner"-Code anbieten, der Ihnen hilft, diesen Vorschriften nachzukommen.

> [!NOTE]
> Unternehmen sollten die Arten von Cookies, die sie auf ihren Websites verwenden, zur Transparenzzwecken und zur Einhaltung der Vorschriften offenlegen. Zum Beispiel siehe [Googles Hinweis zu den Arten von Cookies, die es verwendet](https://policies.google.com/technologies/cookies#types-of-cookies) und Mozillas [Webseiten-, Kommunikations- & Cookie-Datenschutzhinweis](https://www.mozilla.org/en-US/privacy/websites/#cookies).

## Siehe auch

- Verwandte HTTP-Header: {{HTTPHeader("Set-Cookie")}}, {{HTTPHeader("Cookie")}}
- Verwandte JavaScript-APIs: [`Document.cookie`](/de/docs/Web/API/Document/cookie), [`Navigator.cookieEnabled`](/de/docs/Web/API/Navigator/cookieEnabled), [Cookie Store API](/de/docs/Web/API/Cookie_Store_API)
- [Drittanbieter-Cookies](/de/docs/Web/Privacy/Third-party_cookies)
- [Cookie-Spezifikation: RFC 6265](https://datatracker.ietf.org/doc/html/rfc6265)
- [Cookies, die DSGVO und die ePrivacy-Richtlinie](https://gdpr.eu/cookies/)
