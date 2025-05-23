---
title: Same-Origin-Policy
slug: Web/Security/Same-origin_policy
l10n:
  sourceCommit: 76fad73c0ae10d227ce77351954ee9a990b97208
---

Die **Same-Origin-Policy** ist ein kritischer Sicherheitsmechanismus, der einschränkt, wie ein Dokument oder Skript, das von einem {{Glossary("origin", "Origin")}} geladen wird, mit einer Ressource von einem anderen Origin interagieren kann.

Sie hilft, potenziell bösartige Dokumente zu isolieren und somit mögliche Angriffspunkte zu reduzieren. Zum Beispiel verhindert sie, dass eine bösartige Website im Internet JavaScript im Browser ausführt, um Daten von einem Drittanbieter-Webmail-Dienst (bei dem der Benutzer angemeldet ist) oder einem Unternehmens-Intranet (das durch das Fehlen einer öffentlichen IP-Adresse vor direktem Zugriff durch den Angreifer geschützt ist) zu lesen und diese Daten an den Angreifer zu übermitteln.

## Definition eines Origin

Zwei URLs haben dasselbe _Origin_, wenn das {{Glossary("protocol", "Protokoll")}}, der {{Glossary("port", "Port")}} (falls angegeben) und der {{Glossary("host", "Host")}} für beide identisch sind. Dies wird oft als "scheme/host/port tuple" oder einfach "Tuple" bezeichnet. (Ein "Tuple" ist eine Menge von Elementen, die zusammen ein Ganzes bilden – eine allgemeine Form für Doppel/Tripel/Vierfach/Fünffach/etc.)

Die folgende Tabelle gibt Beispiele für Origin-Vergleiche mit der URL `http://store.company.com/dir/page.html`:

| URL                                               | Ergebnis        | Grund                                                        |
| ------------------------------------------------- | --------------- | ------------------------------------------------------------ |
| `http://store.company.com/dir2/other.html`        | Gleiches Origin | Nur der Pfad unterscheidet sich                              |
| `http://store.company.com/dir/inner/another.html` | Gleiches Origin | Nur der Pfad unterscheidet sich                              |
| `https://store.company.com/page.html`             | Unterschiedlich | Unterschiedliches Protokoll                                  |
| `http://store.company.com:81/dir/page.html`       | Unterschiedlich | Unterschiedlicher Port (`http://` ist standardmäßig Port 80) |
| `http://news.company.com/dir/page.html`           | Unterschiedlich | Unterschiedlicher Host                                       |

### Geerbte Origins

Skripte, die von Seiten mit einer `about:blank` oder einer [`javascript:` URL](/de/docs/Web/URI/Reference/Schemes/javascript) ausgeführt werden, erben das Origin des Dokuments, das diese URL enthält, da diese Arten von URLs keine Informationen über einen Origin-Server enthalten.

Zum Beispiel wird `about:blank` häufig als URL für neue, leere Popup-Fenster verwendet, in die das übergeordnete Skript Inhalte schreibt (z.B. über den [`Window.open()`](/de/docs/Web/API/Window/open)-Mechanismus). Wenn dieses Popup auch JavaScript enthält, würde dieses Skript dasselbe Origin erben wie das Skript, das es erstellt hat.

`data:` URLs erhalten einen neuen, leeren Sicherheitskontext.

### Datei-Origins

Moderne Browser behandeln das Origin von Dateien, die mit dem Schema `file:///` geladen werden, in der Regel als _opake Origins_.
Das bedeutet, dass, wenn eine Datei andere Dateien aus demselben Ordner (zum Beispiel) einbindet, diese nicht als aus demselben Origin stammend angenommen werden, was zu {{Glossary("CORS", "CORS")}}-Fehlern führen kann.

Beachten Sie, dass die [URL-Spezifikation](https://url.spec.whatwg.org/#origin) besagt, dass das Origin von Dateien implementierungsabhängig ist, und einige Browser Dateien im selben Verzeichnis oder Unterverzeichnis als gleiches Origin behandeln können, obwohl dies [Sicherheitsimplikationen](https://www.mozilla.org/en-US/security/advisories/mfsa2019-21/#CVE-2019-11730) hat.

## Änderung des Origin

> [!WARNING]
> Der hier beschriebene Ansatz (Verwendung des [`document.domain`](/de/docs/Web/API/Document/domain)-Setters) wird als veraltet angesehen, da er die von der Same-Origin-Policy bereitgestellten Sicherheitsvorkehrungen untergräbt und das Origin-Modell in Browsern komplizierter machen, was zu Interoperabilitätsproblemen und Sicherheitsfehlern führen kann.

Eine Seite kann ihr eigenes Origin ändern, jedoch mit einigen Einschränkungen. Ein Skript kann den Wert von [`document.domain`](/de/docs/Web/API/Document/domain) auf seine aktuelle Domain oder eine Überdomain seiner aktuellen Domain setzen. Wenn es auf eine Überdomain der aktuellen Domain gesetzt wird, wird die kürzere Überdomain für Same-Origin-Checks verwendet.

Zum Beispiel, nehmen wir an, ein Skript von dem Dokument unter `http://store.company.com/dir/other.html` führt Folgendes aus:

```js
document.domain = "company.com";
```

Danach kann die Seite den Same-Origin-Check mit `http://company.com/dir/page.html` bestehen (unter der Voraussetzung, dass `http://company.com/dir/page.html` sein `document.domain` auf `"company.com"` setzt, um anzuzeigen, dass es dies erlauben möchte - siehe [`document.domain`](/de/docs/Web/API/Document/domain) für mehr). Jedoch könnte `company.com` **nicht** sein `document.domain` auf `othercompany.com` setzen, da dies keine Überdomain von `company.com` ist.

Die Portnummer wird vom Browser separat überprüft. Jeder Aufruf von `document.domain`, einschließlich `document.domain = document.domain`, führt dazu, dass die Portnummer mit `null` überschrieben wird. Daher kann man **nicht** `company.com:8080` dazu bringen, mit `company.com` zu kommunizieren, indem man nur `document.domain = "company.com"` im ersten setzt. Es muss in beiden gesetzt werden, damit ihre Portnummern beide `null` sind.

Der Mechanismus hat einige Einschränkungen. Zum Beispiel wird er eine `SecurityError` [`DOMException`](/de/docs/Web/API/DOMException) auslösen, wenn das Dokument in einem sandboxed [`<iframe>`](/de/docs/Web/HTML/Reference/Elements/iframe) ist, und die Änderung des Origin auf diese Weise betrifft nicht die Herkunftsprüfungen, die von vielen Web-APIs verwendet werden (z.B. [`localStorage`](/de/docs/Web/API/Window/localStorage), [`indexedDB`](/de/docs/Web/API/IndexedDB_API), [`BroadcastChannel`](/de/docs/Web/API/BroadcastChannel), [`SharedWorker`](/de/docs/Web/API/SharedWorker)). Eine umfassendere Liste von Scheiternszenarien finden Sie in [Document.domain > Failures](/de/docs/Web/API/Document/domain#failures).

> [!NOTE]
> Wenn Sie `document.domain` verwenden, um einem Subdomain den Zugriff auf sein übergeordnetes Domain zu erlauben, müssen Sie `document.domain` auf denselben Wert im übergeordneten Domain und im Subdomain setzen. Dies ist notwendig, selbst wenn dadurch das übergeordnete Domain auf seinen ursprünglichen Wert zurückgesetzt wird. Andernfalls kann es zu Berechtigungsfehlern kommen.

## Netzwerkzugriff zwischen unterschiedlichen Origins

Die Same-Origin-Policy steuert Interaktionen zwischen zwei verschiedenen Origins, zum Beispiel wenn Sie [`fetch()`](/de/docs/Web/API/Window/fetch) oder ein {{htmlelement("img")}}-Element verwenden. Diese Interaktionen werden typischerweise in drei Kategorien eingeteilt:

- Cross-Origin _Schreiben_ sind normalerweise erlaubt. Beispiele sind Links, Umleitungen und Formularübermittlungen. Einige HTTP-Anfragen erfordern [Preflight](/de/docs/Web/HTTP/Guides/CORS#preflighted_requests).
- Cross-Origin _Einbettung_ ist normalerweise erlaubt. (Beispiele sind unten aufgelistet.)
- Cross-Origin _Lesen_ sind normalerweise nicht erlaubt, aber Lesezugriff kann oft durch Einbettung durchgesickert werden. Zum Beispiel können Sie die Dimensionen eines eingebetteten Bildes, die Aktionen eines eingebetteten Skripts oder die [Verfügbarkeit einer eingebetteten Ressource](https://bugzil.la/629094) lesen.

Hier sind einige Beispiele für Ressourcen, die cross-origin eingebettet werden können:

- JavaScript mit `<script src="…"></script>`. Fehlerdetails bei Syntaxfehlern sind nur für Same-Origin-Skripte verfügbar.
- CSS angewendet mit `<link rel="stylesheet" href="…">`. Aufgrund der entspannten Syntaxregeln von CSS erfordert Cross-Origin-CSS einen korrekten `Content-Type` Header. Browser blockieren das Laden von Stylesheets, wenn es sich um ein Cross-Origin-Laden handelt, bei dem der MIME-Typ inkorrekt ist und die Ressource nicht mit einem gültigen CSS-Konstrukt beginnt.
- Bilder dargestellt durch {{htmlelement("img")}}.
- Medien abgespielt von {{htmlelement("video")}} und {{htmlelement("audio")}}.
- Externe Ressourcen eingebettet mit {{htmlelement("object")}} und {{htmlelement("embed")}}.
- Schriften angewendet mit {{cssxref("@font-face")}}. Einige Browser erlauben Cross-Origin-Schriften, andere erfordern Same-Origin.
- Alles, was durch {{htmlelement("iframe")}} eingebettet wird. Websites können den {{HTTPHeader("X-Frame-Options")}} Header verwenden, um Cross-Origin-Framing zu verhindern.

### Anleitung zur Ermöglichung von Cross-Origin-Zugriff

Verwenden Sie [CORS](/de/docs/Web/HTTP/Guides/CORS), um Cross-Origin-Zugriff zu ermöglichen. CORS ist ein Teil von {{Glossary("HTTP", "HTTP")}}, der Servern ermöglicht zu spezifizieren, von welchen anderen Hosts ein Browser das Laden von Inhalten erlauben soll.

### Anleitung zur Blockierung von Cross-Origin-Zugriff

- Um Cross-Origin-Schreiben zu verhindern, prüfen Sie ein unvorhersehbares Token in der Anfrage – bekannt als [Cross-Site Request Forgery (CSRF)](https://owasp.org/www-community/attacks/csrf)-Token. Sie müssen Cross-Origin-Lesen von Seiten, die dieses Token erfordern, verhindern.
- Um Cross-Origin-Lesen einer Ressource zu verhindern, stellen Sie sicher, dass sie nicht einbettbar ist. Es ist oft notwendig, das Einbetten zu verhindern, da das Einbetten einer Ressource immer Informationen darüber preisgibt.
- Um Cross-Origin-Einbettungen zu verhindern, stellen Sie sicher, dass Ihre Ressource nicht als eines der oben genannten einbettbaren Formate interpretiert werden kann. Browser respektieren möglicherweise nicht den `Content-Type` Header. Zum Beispiel, wenn Sie einem `<script>` Tag ein HTML-Dokument zuweisen, wird der Browser versuchen, das HTML als JavaScript zu parsen. Wenn Ihre Ressource kein Einstiegspunkt zu Ihrer Website ist, können Sie auch ein CSRF-Token verwenden, um das Einbetten zu verhindern.

## Cross-Origin-Skript-API-Zugriff

JavaScript-APIs wie [`iframe.contentWindow`](/de/docs/Web/API/HTMLIFrameElement/contentWindow), [`window.parent`](/de/docs/Web/API/Window/parent), [`window.open`](/de/docs/Web/API/Window/open), und [`window.opener`](/de/docs/Web/API/Window/opener) erlauben Dokumenten, sich direkt aufeinander zu beziehen. Wenn zwei Dokumente nicht dasselbe Origin haben, bieten diese Referenzen nur sehr begrenzten Zugriff auf [`Window`](/de/docs/Web/API/Window) und [`Location`](/de/docs/Web/API/Location) Objekte, wie in den nächsten zwei Abschnitten beschrieben.

Um zwischen Dokumenten von verschiedenen Origins zu kommunizieren, verwenden Sie [`window.postMessage`](/de/docs/Web/API/Window/postMessage).

Spezifikation: [HTML Living Standard § Cross-origin objects](https://html.spec.whatwg.org/multipage/browsers.html#cross-origin-objects).

### Window

Folgender Cross-Origin-Zugriff auf diese `Window`-Eigenschaften ist erlaubt:

| Methoden                                                    |
| ----------------------------------------------------------- |
| [`window.blur`](/de/docs/Web/API/Window/blur)               |
| [`window.close`](/de/docs/Web/API/Window/close)             |
| [`window.focus`](/de/docs/Web/API/Window/focus)             |
| [`window.postMessage`](/de/docs/Web/API/Window/postMessage) |

| Attribute                                             |                  |
| ----------------------------------------------------- | ---------------- |
| [`window.closed`](/de/docs/Web/API/Window/closed)     | Nur lesen.       |
| [`window.frames`](/de/docs/Web/API/Window/frames)     | Nur lesen.       |
| [`window.length`](/de/docs/Web/API/Window/length)     | Nur lesen.       |
| [`window.location`](/de/docs/Web/API/Window/location) | Lesen/Schreiben. |
| [`window.opener`](/de/docs/Web/API/Window/opener)     | Nur lesen.       |
| [`window.parent`](/de/docs/Web/API/Window/parent)     | Nur lesen.       |
| [`window.self`](/de/docs/Web/API/Window/self)         | Nur lesen.       |
| [`window.top`](/de/docs/Web/API/Window/top)           | Nur lesen.       |
| [`window.window`](/de/docs/Web/API/Window/window)     | Nur lesen.       |

Einige Browser erlauben den Zugriff auf mehr Eigenschaften als die oben genannten.

### Location

Folgender Cross-Origin-Zugriff auf `Location`-Eigenschaften ist erlaubt:

| Methoden                                                |
| ------------------------------------------------------- |
| [`location.replace`](/de/docs/Web/API/Location/replace) |

| Attribute                                         |                |
| ------------------------------------------------- | -------------- |
| [`location.href`](/de/docs/Web/API/Location/href) | Nur schreiben. |

Einige Browser erlauben den Zugriff auf mehr Eigenschaften als die oben genannten.

## Zugriff auf Cross-Origin-Datenspeicherung

Der Zugriff auf im Browser gespeicherte Daten wie [Web Storage](/de/docs/Web/API/Web_Storage_API) und [IndexedDB](/de/docs/Web/API/IndexedDB_API) ist nach Origin getrennt. Jedes Origin erhält seinen eigenen separaten Speicher, und JavaScript in einem Origin kann nicht in den Speicher eines anderen Origins lesen oder schreiben.

{{Glossary("Cookie", "Cookies")}} verwenden eine separate Definition von Origins. Eine Seite kann ein Cookie für ihre eigene Domain oder jede übergeordnete Domain setzen, solange die übergeordnete Domain kein öffentlicher Suffix ist. Firefox und Chrome verwenden die [Public Suffix List](https://publicsuffix.org/), um festzustellen, ob eine Domain ein öffentlicher Suffix ist. Wenn Sie ein Cookie setzen, können Sie seine Verfügbarkeit mit den Flags `Domain`, `Path`, `Secure` und `HttpOnly` einschränken. Wenn Sie ein Cookie lesen, können Sie nicht sehen, von wo es gesetzt wurde. Selbst wenn Sie nur sichere HTTPS-Verbindungen verwenden, kann ein von Ihnen gesehenes Cookie über eine unsichere Verbindung gesetzt worden sein.

## Siehe auch

- [Same Origin Policy bei W3C](https://www.w3.org/Security/wiki/Same_Origin_Policy)
- [Same-origin policy bei web.dev](https://web.dev/articles/same-origin-policy)
- {{httpheader("Cross-Origin-Resource-Policy")}}
- {{httpheader("Cross-Origin-Embedder-Policy")}}
