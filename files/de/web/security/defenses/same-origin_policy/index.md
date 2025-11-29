---
title: Same-Origin-Policy
slug: Web/Security/Defenses/Same-origin_policy
l10n:
  sourceCommit: 39070892d5d1a5cc55312a0ac10c97f4c339384f
---

Die **Same-Origin-Policy** ist ein kritischer Sicherheitsmechanismus, der einschränkt, wie ein von einem {{Glossary("origin", "origin")}} geladenes Dokument oder Skript mit einer Ressource von einem anderen Ursprung interagieren kann.

Sie hilft, potenziell schädliche Dokumente zu isolieren und reduziert mögliche Angriffsvektoren. Zum Beispiel verhindert sie, dass eine böswillige Website im Internet JavaScript in einem Browser ausführt, um Daten von einem externen Webmail-Dienst (bei dem der Benutzer angemeldet ist) oder einem Unternehmens-Intranet (das durch nicht öffentlichen Zugriff vor direktem Zugriff durch den Angreifer geschützt ist) zu lesen und diese Daten an den Angreifer weiterzuleiten.

## Definition eines Ursprungs

Zwei URLs haben den _gleichen Ursprung_, wenn das {{Glossary("protocol", "Protokoll")}}, der {{Glossary("port", "Port")}} (falls angegeben) und der {{Glossary("host", "Host")}} für beide identisch sind. Dies wird möglicherweise als "Scheme/Host/Port-Tuple" oder einfach als "Tuple" bezeichnet. (Ein "Tuple" ist eine Menge von Elementen, die zusammen ein Ganzes ergeben - eine generische Form für Double/Triple/Quadruple/Quintuple/etc.)

Die folgende Tabelle gibt Beispiele für Herkunftsvergleiche mit der URL `http://store.company.com/dir/page.html`:

| URL                                               | Ergebnis          | Grund                                                        |
| ------------------------------------------------- | ----------------- | ------------------------------------------------------------ |
| `http://store.company.com/dir2/other.html`        | Gleicher Ursprung | Nur der Pfad unterscheidet sich                              |
| `http://store.company.com/dir/inner/another.html` | Gleicher Ursprung | Nur der Pfad unterscheidet sich                              |
| `https://store.company.com/page.html`             | Unterschiedlich   | Unterschiedliches Protokoll                                  |
| `http://store.company.com:81/dir/page.html`       | Unterschiedlich   | Unterschiedlicher Port (`http://` ist standardmäßig Port 80) |
| `http://news.company.com/dir/page.html`           | Unterschiedlich   | Unterschiedlicher Host                                       |

### Geerbte Ursprünge

Skripte, die von Seiten mit einer `about:blank` oder [`javascript:` URL](/de/docs/Web/URI/Reference/Schemes/javascript) ausgeführt werden, erben den Ursprung des Dokuments, das diese URL enthält, da diese Arten von URLs keine Informationen über einen Ursprungsserver enthalten.

Zum Beispiel wird `about:blank` oft als URL für neue, leere Popup-Fenster verwendet, in die das übergeordnete Skript Inhalte schreibt (z.B. über den [`Window.open()`](/de/docs/Web/API/Window/open)-Mechanismus). Wenn dieses Popup auch JavaScript enthält, würde dieses Skript den gleichen Ursprung wie das Skript, das es erstellt hat, erben.

`data:` URLs erhalten einen neuen, leeren Sicherheitskontext.

### Datei-Ursprünge

Moderne Browser behandeln den Ursprung von Dateien, die mit dem `file:///`-Schema geladen werden, normalerweise als _opake Ursprünge_. Das bedeutet, dass, wenn eine Datei andere Dateien aus demselben Ordner (beispielsweise) einbindet, nicht angenommen wird, dass sie vom gleichen Ursprung stammen, und möglicherweise {{Glossary("CORS", "CORS")}}-Fehler auslösen.

Es ist zu beachten, dass die [URL-Spezifikation](https://url.spec.whatwg.org/#origin) festlegt, dass der Ursprung von Dateien implementationsabhängig ist und einige Browser Dateien im gleichen Verzeichnis oder Unterverzeichnis als gleiche Herkunft behandeln können, obwohl dies [Sicherheitsimplikationen](https://www.mozilla.org/en-US/security/advisories/mfsa2019-21/#CVE-2019-11730) hat.

## Ursprung ändern

> [!WARNING]
> Der hier beschriebene Ansatz (Verwendung des Setters [`document.domain`](/de/docs/Web/API/Document/domain)) ist veraltet, da er die durch die Same-Origin-Policy gebotenen Sicherheitsvorkehrungen untergräbt und das Ursprungsmodell in Browsern verkompliziert, was zu Interoperabilitätsproblemen und Sicherheitsfehlern führt.

Eine Seite kann ihren eigenen Ursprung mit einigen Einschränkungen ändern. Ein Skript kann den Wert von [`document.domain`](/de/docs/Web/API/Document/domain) auf seine aktuelle Domain oder eine übergeordnete Domain seiner aktuellen Domain setzen. Wird es auf eine übergeordnete Domain der aktuellen Domain gesetzt, wird die kürzere übergeordnete Domain für Same-Origin-Prüfungen verwendet.

Zum Beispiel, wenn ein Skript aus dem Dokument unter `http://store.company.com/dir/other.html` Folgendes ausführt:

```js
document.domain = "company.com";
```

Anschließend kann die Seite die Same-Origin-Prüfung mit `http://company.com/dir/page.html` bestehen (angenommen, `http://company.com/dir/page.html` setzt seine `document.domain` auf `"company.com"`, um anzuzeigen, dass es dies zulassen möchte - siehe [`document.domain`](/de/docs/Web/API/Document/domain) für mehr). `company.com` könnte jedoch **nicht** `document.domain` auf `othercompany.com` setzen, da dies keine übergeordnete Domain von `company.com` ist.

Die Portnummer wird separat vom Browser überprüft. Jeder Aufruf von `document.domain`, einschließlich `document.domain = document.domain`, führt dazu, dass die Portnummer mit `null` überschrieben wird. Daher kann man nicht `company.com:8080` dazu bringen, mit `company.com` zu kommunizieren, indem man nur `document.domain = "company.com"` im ersten setzt. Es muss in beiden gesetzt werden, damit ihre Portnummern beide `null` sind.

Der Mechanismus hat einige Einschränkungen. Zum Beispiel wird ein `SecurityError` [`DOMException`](/de/docs/Web/API/DOMException) ausgelöst, wenn das Dokument in einem sandboxed [`<iframe>`](/de/docs/Web/HTML/Reference/Elements/iframe) ist, und das Ändern des Ursprungs auf diese Weise beeinflusst nicht die Ursprungsüberprüfungen vieler Web-APIs (z.B. [`localStorage`](/de/docs/Web/API/Window/localStorage), [`indexedDB`](/de/docs/Web/API/IndexedDB_API), [`BroadcastChannel`](/de/docs/Web/API/BroadcastChannel), [`SharedWorker`](/de/docs/Web/API/SharedWorker)). Eine umfassendere Liste von Fehlerfällen finden Sie in [Document.domain > Failures](/de/docs/Web/API/Document/domain#failures).

> [!NOTE]
> Wenn Sie `document.domain` verwenden, um einem Subdomain den Zugriff auf seine übergeordnete Domain zu erlauben, müssen Sie `document.domain` auf den _gleichen Wert_ sowohl in der übergeordneten Domain als auch in der Subdomain setzen. Dies ist selbst dann notwendig, wenn dadurch die übergeordnete Domain auf ihren ursprünglichen Wert zurückgesetzt wird. Ein Versäumnis, dies zu tun, kann zu Berechtigungsfehlern führen.

## Netzwerkzugriff über verschiedene Ursprünge

Die Same-Origin-Policy steuert Interaktionen zwischen zwei verschiedenen Ursprüngen, wie z.B. wenn Sie [`fetch()`](/de/docs/Web/API/Window/fetch) oder ein {{htmlelement("img")}}-Element verwenden. Diese Interaktionen werden typischerweise in drei Kategorien eingeteilt:

- Cross-Origin-_Schreiboperationen_ sind in der Regel erlaubt. Beispiele sind Links, Weiterleitungen und Formularübermittlungen. Einige HTTP-Anfragen erfordern [Preflight](/de/docs/Web/HTTP/Guides/CORS#preflighted_requests).
- Cross-Origin-_Einbindung_ ist typischerweise erlaubt. (Beispiele sind unten aufgeführt.)
- Cross-Origin-_Leseoperationen_ sind in der Regel nicht erlaubt, aber Lesezugriff wird oft durch Einbindung geleakt. Zum Beispiel können Sie die Abmessungen eines eingebetteten Bildes, die Aktionen eines eingebetteten Skripts oder die [Verfügbarkeit einer eingebetteten Ressource](https://bugzil.la/629094) lesen.

Hier sind einige Beispiele für Ressourcen, die Cross-Origin eingebettet werden dürfen:

- JavaScript mit `<script src="…"></script>`. Fehlerdetails für Syntaxfehler sind nur für Skripte mit demselben Ursprung verfügbar.
- CSS, das mit `<link rel="stylesheet" href="…">` angewendet wird. Aufgrund der entspannten Syntaxregeln von CSS erfordert Cross-Origin CSS einen korrekten `Content-Type`-Header. Browser blockieren das Laden von Stylesheets, wenn es sich um ein Cross-Origin-Laden handelt, bei dem der MIME-Typ falsch ist und die Ressource nicht mit einem gültigen CSS-Konstrukt beginnt.
- Bilder, die von {{htmlelement("img")}} angezeigt werden.
- Medien, die von {{htmlelement("video")}} und {{htmlelement("audio")}} wiedergegeben werden.
- Externe Ressourcen, die mit {{htmlelement("object")}} und {{htmlelement("embed")}} eingebettet werden.
- Fonts, die mit {{cssxref("@font-face")}} angewendet werden. Einige Browser erlauben Cross-Origin-Fonts, andere erfordern den gleichen Ursprung.
- Alles, was von {{htmlelement("iframe")}} eingebettet wird. Websites können den {{HTTPHeader("X-Frame-Options")}}-Header verwenden, um Cross-Origin-Framing zu verhindern.

### Anleitung zum Zulassen von Cross-Origin-Zugriff

Verwenden Sie [CORS](/de/docs/Web/HTTP/Guides/CORS), um Cross-Origin-Zugriff zu erlauben. CORS ist ein Teil von {{Glossary("HTTP", "HTTP")}}, der es Servern ermöglicht, andere Hosts zu spezifizieren, von denen ein Browser das Laden von Inhalten erlauben sollte.

### Anleitung zum Blockieren von Cross-Origin-Zugriff

- Um Cross-Origin-Schreibvorgänge zu verhindern, überprüfen Sie ein nicht erratbares Token in der Anfrage - bekannt als [Cross-Site Request Forgery (CSRF)](https://owasp.org/www-community/attacks/csrf)-Token. Sie müssen Cross-Origin-Lesevorgänge von Seiten, die dieses Token erfordern, verhindern.
- Um Cross-Origin-Lesevorgänge einer Ressource zu verhindern, stellen Sie sicher, dass sie nicht einbettbar ist. Es ist oft notwendig, das Einbetten zu verhindern, da das Einbetten einer Ressource immer einige Informationen darüber leakt.
- Um Cross-Origin-Einbettungen zu verhindern, stellen Sie sicher, dass Ihre Ressource nicht als eines der einbettbaren Formate interpretiert werden kann. Browser respektieren den `Content-Type`-Header möglicherweise nicht. Wenn Sie beispielsweise ein `<script>`-Tag auf ein HTML-Dokument verweisen, versucht der Browser, das HTML als JavaScript zu parsen. Wenn Ihre Ressource kein Einstiegspunkt für Ihre Website ist, können Sie auch ein CSRF-Token verwenden, um das Einbetten zu verhindern.

## Zugriff auf Cross-Origin-Skript-APIs

JavaScript-APIs wie [`iframe.contentWindow`](/de/docs/Web/API/HTMLIFrameElement/contentWindow), [`window.parent`](/de/docs/Web/API/Window/parent), [`window.open`](/de/docs/Web/API/Window/open) und [`window.opener`](/de/docs/Web/API/Window/opener) erlauben es Dokumenten, direkt aufeinander zu verweisen. Wenn zwei Dokumente nicht den gleichen Ursprung haben, bieten diese Verweise nur sehr eingeschränkten Zugriff auf [`Window`](/de/docs/Web/API/Window) und [`Location`](/de/docs/Web/API/Location)-Objekte, wie in den folgenden zwei Abschnitten beschrieben.

Um zwischen Dokumenten aus verschiedenen Ursprüngen zu kommunizieren, verwenden Sie [`window.postMessage`](/de/docs/Web/API/Window/postMessage).

Spezifikation: [HTML Living Standard § Cross-origin objects](https://html.spec.whatwg.org/multipage/browsers.html#cross-origin-objects).

### Window

Der folgende Cross-Origin-Zugriff auf diese `Window`-Eigenschaften ist erlaubt:

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

Der folgende Cross-Origin-Zugriff auf `Location`-Eigenschaften ist erlaubt:

| Methoden                                                |
| ------------------------------------------------------- |
| [`location.replace`](/de/docs/Web/API/Location/replace) |

| Attribute                                         |                |
| ------------------------------------------------- | -------------- |
| [`location.href`](/de/docs/Web/API/Location/href) | Nur schreiben. |

Einige Browser erlauben den Zugriff auf mehr Eigenschaften als die oben genannten.

## Zugriff auf Cross-Origin-Datenspeicherung

Der Zugriff auf im Browser gespeicherte Daten wie [Web Storage](/de/docs/Web/API/Web_Storage_API) und [IndexedDB](/de/docs/Web/API/IndexedDB_API) ist nach Ursprüngen getrennt. Jeder Ursprung erhält seinen eigenen separaten Speicher, und JavaScript in einem Ursprung kann nicht auf den Speicher eines anderen Ursprungs zugreifen oder aus diesem lesen.

{{Glossary("Cookie", "Cookies")}} verwenden eine separate Definition von Ursprüngen. Eine Seite kann ein Cookie für ihre eigene Domain oder eine übergeordnete Domain setzen, solange diese übergeordnete Domain keine öffentliche Suffix-Domain ist. Firefox und Chrome verwenden die [Public Suffix List](https://publicsuffix.org/), um zu bestimmen, ob eine Domain ein öffentliches Suffix ist. Wenn Sie ein Cookie setzen, können Sie seine Verfügbarkeit mit den Flags `Domain`, `Path`, `Secure` und `HttpOnly` einschränken. Wenn Sie ein Cookie lesen, können Sie nicht sehen, von wo dieses gesetzt wurde. Selbst wenn Sie nur sichere https-Verbindungen verwenden, könnte jedes von Ihnen sichtbare Cookie über eine unsichere Verbindung gesetzt worden sein.

## Siehe auch

- [Same Origin Policy beim W3C](https://www.w3.org/Security/wiki/Same_Origin_Policy)
- [Same-origin policy bei web.dev](https://web.dev/articles/same-origin-policy)
- {{httpheader("Cross-Origin-Resource-Policy")}}
- {{httpheader("Cross-Origin-Embedder-Policy")}}
