---
title: Same-Origin-Policy
slug: Web/Security/Same-origin_policy
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{QuickLinksWithSubpages("/de/docs/Web/Security")}}

Die **Same-Origin-Policy** ist ein kritischer Sicherheitsmechanismus, der einschränkt, wie ein Dokument oder Skript von einem {{Glossary("origin", "Origin")}} auf eine Ressource aus einem anderen Origin zugreifen kann.

Sie hilft, potenziell bösartige Dokumente zu isolieren und reduziert mögliche Angriffsvektoren. Zum Beispiel verhindert sie, dass eine bösartige Website im Internet JavaScript in einem Browser ausführt, um Daten von einem Drittanbieter-Webmail-Dienst (in den der Benutzer eingeloggt ist) oder einem Firmenintranet (das durch das Fehlen einer öffentlichen IP-Adresse vor direktem Zugriff durch den Angreifer geschützt ist) zu lesen und diese Daten an den Angreifer weiterzuleiten.

## Definition eines Origins

Zwei URLs haben denselben _Origin_, wenn das {{Glossary("protocol", "Protokoll")}}, der {{Glossary("port", "Port")}} (falls angegeben) und der {{Glossary("host", "Host")}} für beide gleich sind. Dies kann als "Scheme/Host/Port-Tupel" oder einfach "Tupel" bezeichnet werden. (Ein "Tupel" ist eine Menge von Elementen, die zusammen ein Ganzes bilden - eine generische Form für Doppel-/Dreifach-/Vierfach-/Fünffach/etc.)

Die folgende Tabelle zeigt Beispiele für Origin-Vergleiche mit der URL `http://store.company.com/dir/page.html`:

| URL                                               | Ergebnis        | Grund                                                        |
| ------------------------------------------------- | --------------- | ------------------------------------------------------------ |
| `http://store.company.com/dir2/other.html`        | Gleiches Origin | Nur der Pfad unterscheidet sich                              |
| `http://store.company.com/dir/inner/another.html` | Gleiches Origin | Nur der Pfad unterscheidet sich                              |
| `https://store.company.com/page.html`             | Fehler          | Unterschiedliches Protokoll                                  |
| `http://store.company.com:81/dir/page.html`       | Fehler          | Unterschiedlicher Port (`http://` ist Port 80 standardmäßig) |
| `http://news.company.com/dir/page.html`           | Fehler          | Unterschiedlicher Host                                       |

### Geerbte Origins

Skripte, die von Seiten mit einer `about:blank` oder einer [`javascript:` URL](/de/docs/Web/URI/Reference/Schemes/javascript) ausgeführt werden, erben den Origin des Dokuments, das diese URL enthält, da diese Arten von URLs keine Informationen über einen Origin-Server enthalten.

Beispielsweise wird `about:blank` oft als URL für neue, leere Popup-Fenster verwendet, in die das übergeordnete Skript Inhalte schreibt (z.B. über den Mechanismus [`Window.open()`](/de/docs/Web/API/Window/open)). Wenn dieses Popup ebenfalls JavaScript enthält, würde dieses Skript denselben Origin erben wie das Skript, das es erstellt hat.

`data:` URLs erhalten einen neuen, leeren Sicherheitskontext.

### Datei-Origins

Moderne Browser behandeln den Origin von Dateien, die mit dem `file:///` Schema geladen werden, normalerweise als _undurchsichtige Origins_.
Das bedeutet, dass, wenn eine Datei andere Dateien aus demselben Ordner (z.B.) einbindet, sie nicht davon ausgehen, dass sie vom selben Origin stammen, und möglicherweise {{Glossary("CORS", "CORS")}}-Fehler verursachen.

Beachten Sie, dass die [URL-Spezifikation](https://url.spec.whatwg.org/#origin) besagt, dass der Origin von Dateien implementationsabhängig ist, und einige Browser können Dateien im gleichen Verzeichnis oder Unterverzeichnis als gleiches Origin behandeln, obwohl dies [Sicherheitsimplikationen](https://www.mozilla.org/en-US/security/advisories/mfsa2019-21/#CVE-2019-11730) hat.

## Änderung des Origin

> [!WARNING]
> Der hier beschriebene Ansatz (die Verwendung des [`document.domain`](/de/docs/Web/API/Document/domain) Setters) ist veraltet, da er die durch die Same-Origin-Policy gebotenen Sicherheitsvorkehrungen untergräbt und das Origin-Modell in Browsern kompliziert, was zu Interoperabilitätsproblemen und Sicherheitsfehlern führt.

Eine Seite kann ihren eigenen Origin ändern, mit einigen Einschränkungen. Ein Skript kann den Wert von [`document.domain`](/de/docs/Web/API/Document/domain) auf seine aktuelle Domain oder eine Superdomain seiner aktuellen Domain setzen. Wenn auf eine Superdomain der aktuellen Domain gesetzt, wird die kürzere Superdomain für Same-Origin-Prüfungen verwendet.

Zum Beispiel, wenn ein Skript aus dem Dokument bei `http://store.company.com/dir/other.html` das Folgende ausführt:

```js
document.domain = "company.com";
```

Danach kann die Seite den Same-Origin-Check mit `http://company.com/dir/page.html` passieren (vorausgesetzt, dass `http://company.com/dir/page.html` sein `document.domain` auf `"company.com"` setzt, um anzuzeigen, dass es dies erlauben möchte - siehe [`document.domain`](/de/docs/Web/API/Document/domain) für mehr). `company.com` könnte jedoch **nicht** `document.domain` auf `othercompany.com` setzen, da dies keine Superdomain von `company.com` ist.

Die Portnummer wird vom Browser separat geprüft. Jeder Aufruf von `document.domain`, einschließlich `document.domain = document.domain`, bewirkt, dass die Portnummer mit `null` überschrieben wird. Daher kann man **nicht** `company.com:8080` dazu bringen, mit `company.com` zu kommunizieren, indem man nur `document.domain = "company.com"` im ersten setzt. Es muss in beiden gesetzt werden, damit ihre Portnummern beide `null` sind.

Der Mechanismus hat einige Einschränkungen. Zum Beispiel wird er ein `SecurityError` [`DOMException`](/de/docs/Web/API/DOMException) auslösen, wenn die [`document-domain`](/de/docs/Web/HTTP/Reference/Headers/Permissions-Policy/document-domain) [`Permissions-Policy`](/de/docs/Web/HTTP/Reference/Headers/Permissions-Policy) aktiviert ist oder das Dokument in einem sandkastenartigen [`<iframe>`](/de/docs/Web/HTML/Element/iframe) ist, und das Ändern des Origin auf diese Weise beeinflusst nicht die Originschecks, die von vielen Web-APIs verwendet werden (z.B. [`localStorage`](/de/docs/Web/API/Window/localStorage), [`indexedDB`](/de/docs/Web/API/IndexedDB_API), [`BroadcastChannel`](/de/docs/Web/API/BroadcastChannel), [`SharedWorker`](/de/docs/Web/API/SharedWorker)). Eine umfassendere Liste von Fehlermöglichkeiten finden Sie in [Document.domain > Failures](/de/docs/Web/API/Document/domain#failures).

> [!NOTE]
> Wenn Sie `document.domain` verwenden, um einem Subdomain den Zugriff auf sein übergeordnetes Domain zu ermöglichen, müssen Sie `document.domain` auf denselben Wert sowohl in der übergeordneten Domain als auch in der Subdomain setzen. Dies ist notwendig, selbst wenn Sie damit die übergeordnete Domain auf ihren ursprünglichen Wert zurücksetzen. Das Versäumnis, dies zu tun, kann zu Berechtigungsfehlern führen.

## Netzwerkzugang zwischen verschiedenen Origins

Die Same-Origin-Policy steuert die Interaktionen zwischen zwei verschiedenen Origins, wie zum Beispiel wenn Sie [`fetch()`](/de/docs/Web/API/Window/fetch) oder ein {{htmlelement("img")}}-Element verwenden. Diese Interaktionen werden typischerweise in drei Kategorien eingeordnet:

- Cross-Origin-_Schreibvorgänge_ sind normalerweise erlaubt. Beispiele sind Links, Umleitungen und Formularübermittlungen. Einige HTTP-Anfragen erfordern [Preflight](/de/docs/Web/HTTP/Guides/CORS#preflighted_requests).
- Cross-Origin-_Einbettungen_ sind normalerweise erlaubt. (Beispiele sind unten aufgelistet.)
- Cross-Origin-_Lesezugriffe_ sind typischerweise nicht erlaubt, aber Lesezugriff wird oft durch Einbettung geleakt. Zum Beispiel können Sie die Abmessungen eines eingebetteten Bildes, die Aktionen eines eingebetteten Skripts oder die [Verfügbarkeit einer eingebetteten Ressource](https://bugzil.la/629094) lesen.

Hier sind einige Beispiele von Ressourcen, die Cross-Origin eingebettet werden können:

- JavaScript mit `<script src="…"></script>`. Fehlermeldungen für Syntaxfehler sind nur für Skripte desselben Origins verfügbar.
- CSS angewendet mit `<link rel="stylesheet" href="…">`. Aufgrund der entspannten Syntaxregeln von CSS erfordert Cross-Origin-CSS einen korrekten `Content-Type`-Header. Browser blockieren Stylesheet-Ladungen, wenn es eine Cross-Origin-Ladung ist, bei der der MIME-Typ falsch ist und die Ressource nicht mit einem gültigen CSS-Konstrukt beginnt.
- Bilder, die durch {{htmlelement("img")}} angezeigt werden.
- Medien, die durch {{htmlelement("video")}} und {{htmlelement("audio")}} abgespielt werden.
- Externe Ressourcen, die mit {{htmlelement("object")}} und {{htmlelement("embed")}} eingebettet werden.
- Schriftarten, die mit {{cssxref("@font-face")}} angewendet werden. Einige Browser erlauben Cross-Origin-Schriftarten, andere erfordern dasselbe Origin.
- Alles, was durch {{htmlelement("iframe")}} eingebettet wird. Websites können den {{HTTPHeader("X-Frame-Options")}}-Header verwenden, um Cross-Origin-Framing zu verhindern.

### Anleitung zum Aktivieren von Cross-Origin-Zugriff

Verwenden Sie [CORS](/de/docs/Web/HTTP/Guides/CORS), um Cross-Origin-Zugriff zu erlauben. CORS ist Teil von {{Glossary("HTTP", "HTTP")}}, das Servern ermöglicht, anzugeben, von welchen anderen Hosts ein Browser das Laden von Inhalten erlauben sollte.

### Anleitung zum Blockieren von Cross-Origin-Zugriff

- Um Cross-Origin-Schreibvorgänge zu verhindern, überprüfen Sie ein schwer zu erratendes Token in der Anfrage - bekannt als [Cross-Site Request Forgery (CSRF)](https://owasp.org/www-community/attacks/csrf)-Token. Sie müssen Cross-Origin-Lesungen von Seiten verhindern, die dieses Token erfordern.
- Um Cross-Origin-Lesezugriffe auf eine Ressource zu verhindern, stellen Sie sicher, dass sie nicht eingebettet werden kann. Oft ist es notwendig, Einbettungen zu verhindern, da das Einbetten einer Ressource immer einige Informationen über sie leakt.
- Um Cross-Origin-Einbettungen zu verhindern, stellen Sie sicher, dass Ihre Ressource nicht als eine der oben aufgelisteten einbettbaren Formate interpretiert werden kann. Browser respektieren möglicherweise nicht den `Content-Type`-Header. Wenn Sie beispielsweise ein `<script>`-Tag auf ein HTML-Dokument richten, wird der Browser versuchen, das HTML als JavaScript zu parsen. Wenn Ihre Ressource kein Einstiegspunkt zu Ihrer Website ist, können Sie auch ein CSRF-Token verwenden, um die Einbettung zu verhindern.

## Zugriff auf Cross-Origin-Skript-APIs

JavaScript-APIs wie [`iframe.contentWindow`](/de/docs/Web/API/HTMLIFrameElement/contentWindow), [`window.parent`](/de/docs/Web/API/Window/parent), [`window.open`](/de/docs/Web/API/Window/open) und [`window.opener`](/de/docs/Web/API/Window/opener) erlauben es Dokumenten, sich direkt aufeinander zu beziehen. Wenn zwei Dokumente nicht denselben Origin haben, bieten diese Referenzen nur sehr begrenzten Zugriff auf [`Window`](/de/docs/Web/API/Window) und [`Location`](/de/docs/Web/API/Location)-Objekte, wie in den nächsten beiden Abschnitten beschrieben.

Um zwischen Dokumenten von verschiedenen Origins zu kommunizieren, verwenden Sie [`window.postMessage`](/de/docs/Web/API/Window/postMessage).

Spezifikation: [HTML Living Standard § Cross-origin objects](https://html.spec.whatwg.org/multipage/browsers.html#cross-origin-objects).

### Window

Der folgende Cross-Origin-Zugriff auf `Window`-Eigenschaften ist erlaubt:

| Methoden                                                    |
| ----------------------------------------------------------- |
| [`window.blur`](/de/docs/Web/API/Window/blur)               |
| [`window.close`](/de/docs/Web/API/Window/close)             |
| [`window.focus`](/de/docs/Web/API/Window/focus)             |
| [`window.postMessage`](/de/docs/Web/API/Window/postMessage) |

| Attribute                                             |                  |
| ----------------------------------------------------- | ---------------- |
| [`window.closed`](/de/docs/Web/API/Window/closed)     | Nur lesbar.      |
| [`window.frames`](/de/docs/Web/API/Window/frames)     | Nur lesbar.      |
| [`window.length`](/de/docs/Web/API/Window/length)     | Nur lesbar.      |
| [`window.location`](/de/docs/Web/API/Window/location) | Lesen/Schreiben. |
| [`window.opener`](/de/docs/Web/API/Window/opener)     | Nur lesbar.      |
| [`window.parent`](/de/docs/Web/API/Window/parent)     | Nur lesbar.      |
| [`window.self`](/de/docs/Web/API/Window/self)         | Nur lesbar.      |
| [`window.top`](/de/docs/Web/API/Window/top)           | Nur lesbar.      |
| [`window.window`](/de/docs/Web/API/Window/window)     | Nur lesbar.      |

Einige Browser erlauben den Zugriff auf mehr Eigenschaften als die oben genannten.

### Location

Der folgende Cross-Origin-Zugriff auf `Location`-Eigenschaften ist erlaubt:

| Methoden                                                |
| ------------------------------------------------------- |
| [`location.replace`](/de/docs/Web/API/Location/replace) |

| Attribute                                         |                 |
| ------------------------------------------------- | --------------- |
| [`location.href`](/de/docs/Web/API/Location/href) | Nur schreibbar. |

Einige Browser erlauben den Zugriff auf mehr Eigenschaften als die oben genannten.

## Zugriff auf Cross-Origin-Datenspeicherung

Der Zugriff auf im Browser gespeicherte Daten wie [Web Storage](/de/docs/Web/API/Web_Storage_API) und [IndexedDB](/de/docs/Web/API/IndexedDB_API) ist nach Origins getrennt. Jeder Origin erhält seinen eigenen separaten Speicher, und JavaScript in einem Origin kann nicht auf den Speicher eines anderen Origins zugreifen oder schreiben.

{{Glossary("Cookie", "Cookies")}} verwenden eine separate Definition von Origins. Eine Seite kann ein Cookie für ihre eigene Domain oder eine übergeordnete Domain setzen, solange die übergeordnete Domain kein öffentlicher Suffix ist. Firefox und Chrome verwenden die [Public Suffix List](https://publicsuffix.org/), um zu bestimmen, ob eine Domain ein öffentlicher Suffix ist. Wenn Sie ein Cookie setzen, können Sie seine Verfügbarkeit mit den Flags `Domain`, `Path`, `Secure` und `HttpOnly` einschränken. Wenn Sie ein Cookie lesen, können Sie nicht sehen, von wo es gesetzt wurde. Selbst wenn Sie nur sichere HTTPS-Verbindungen verwenden, kann jedes Cookie, das Sie sehen, über eine unsichere Verbindung gesetzt worden sein.

## Siehe auch

- [Same Origin Policy bei W3C](https://www.w3.org/Security/wiki/Same_Origin_Policy)
- [Same-origin policy bei web.dev](https://web.dev/articles/same-origin-policy)
- {{httpheader("Cross-Origin-Resource-Policy")}}
- {{httpheader("Cross-Origin-Embedder-Policy")}}
