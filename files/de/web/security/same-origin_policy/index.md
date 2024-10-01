---
title: Same-Origin-Policy
slug: Web/Security/Same-origin_policy
l10n:
  sourceCommit: 9df96dcad40bf97f66b317ef6b6bbe64444569eb
---

{{QuickLinksWithSubpages("/de/docs/Web/Security")}}

Die **Same-Origin-Policy** ist ein kritischer Sicherheitsmechanismus, der einschränkt, wie ein Dokument oder Skript, das von einem {{Glossary("origin", "Origin")}} geladen wird, mit einer Ressource von einem anderen Origin interagieren kann.

Sie hilft, potenziell bösartige Dokumente zu isolieren und reduziert mögliche Angriffsvektoren. Zum Beispiel verhindert sie, dass eine bösartige Website im Internet JavaScript in einem Browser ausführt, um Daten von einem Drittanbieter-Webmail-Dienst (bei dem der Benutzer angemeldet ist) oder einem Unternehmensintranet (das durch fehlende öffentliche IP-Adresse vor direktem Zugriff durch den Angreifer geschützt ist) zu lesen und diese Daten an den Angreifer weiterzuleiten.

## Definition eines Origin

Zwei URLs haben denselben _Origin_, wenn das {{Glossary("protocol", "Protokoll")}}, der {{Glossary("port", "Port")}} (falls angegeben) und der {{Glossary("host", "Host")}} für beide gleich sind. Dies wird auch als "scheme/host/port tuple" oder einfach "tuple" bezeichnet. (Ein "Tuple" ist eine Menge von Elementen, die zusammen ein Ganzes bilden — eine generische Form für Doppel-/Dreifach-/Vierfach-/Fünfach/usw.)

Die folgende Tabelle gibt Beispiele für Origin-Vergleiche mit der URL `http://store.company.com/dir/page.html`:

| URL                                               | Ergebnis        | Grund                                                        |
| ------------------------------------------------- | --------------- | ------------------------------------------------------------ |
| `http://store.company.com/dir2/other.html`        | Gleicher Origin | Nur der Pfad unterscheidet sich                              |
| `http://store.company.com/dir/inner/another.html` | Gleicher Origin | Nur der Pfad unterscheidet sich                              |
| `https://store.company.com/page.html`             | Unterschiedlich | Unterschiedliches Protokoll                                  |
| `http://store.company.com:81/dir/page.html`       | Unterschiedlich | Unterschiedlicher Port (`http://` ist standardmäßig Port 80) |
| `http://news.company.com/dir/page.html`           | Unterschiedlich | Unterschiedlicher Host                                       |

### Geerbte Origins

Skripte, die von Seiten mit einem `about:blank` oder [`javascript:` URL](/de/docs/Web/URI/Schemes/javascript) ausgeführt werden, erben den Origin des Dokuments, das diese URL enthält, da diese Arten von URLs keine Informationen über einen Origin-Server enthalten.

Zum Beispiel wird `about:blank` häufig als URL neuer, leerer Popup-Fenster verwendet, in die das übergeordnete Skript Inhalt schreibt (z. B. über den Mechanismus [`Window.open()`](/de/docs/Web/API/Window/open)). Wenn dieses Popup auch JavaScript enthält, würde dieses Skript denselben Origin erben wie das Skript, das es erstellt hat.

`data:` URLs erhalten einen neuen, leeren Sicherheitskontext.

### File Origins

Moderne Browser behandeln den Origin von Dateien, die mit dem `file:///` Schema geladen werden, normalerweise als _opake Origins_. Dies bedeutet, dass, wenn eine Datei andere Dateien aus demselben Ordner einbezieht, sie nicht als vom selben Origin kommend angenommen werden und {{Glossary("CORS", "CORS")}} Fehler auslösen können.

Beachten Sie, dass die [URL-Spezifikation](https://url.spec.whatwg.org/#origin) angibt, dass der Origin von Dateien implementationsabhängig ist und einige Browser Dateien im selben Verzeichnis oder Unterverzeichnis als gleichwertig behandeln können, obwohl dies [Sicherheitsimplikationen](https://www.mozilla.org/en-US/security/advisories/mfsa2019-21/#CVE-2019-11730) hat.

## Änderung des Origin

> [!WARNING]
> Die hier beschriebene Methode (die Verwendung des Setzers [`document.domain`](/de/docs/Web/API/Document/domain)) ist veraltet, da sie die Sicherheitsvorkehrungen der Same-Origin-Policy untergräbt und das Origin-Modell in Browsern verkompliziert, was zu Interoperabilitätsproblemen und Sicherheitslücken führt.

Eine Seite kann ihren eigenen Origin ändern, jedoch mit einigen Einschränkungen. Ein Skript kann den Wert von [`document.domain`](/de/docs/Web/API/Document/domain) auf seinen aktuellen Domainnamen oder einen übergeordneten Domainnamen seiner aktuellen Domain setzen. Wenn es auf einen übergeordneten Domainnamen der aktuellen Domain gesetzt wird, wird der kürzere übergeordnete Domainname für Same-Origin-Prüfungen verwendet.

Angenommen, ein Skript im Dokument unter `http://store.company.com/dir/other.html` führt Folgendes aus:

```js
document.domain = "company.com";
```

Danach kann die Seite die Same-Origin-Prüfung mit `http://company.com/dir/page.html` bestehen (vorausgesetzt, `http://company.com/dir/page.html` setzt sein `document.domain` auf `"company.com"`, um anzuzeigen, dass es dies zulassen möchte - siehe [`document.domain`](/de/docs/Web/API/Document/domain) für mehr). `company.com` könnte jedoch **nicht** `document.domain` auf `othercompany.com` setzen, da dies kein übergeordneter Domainname von `company.com` ist.

Die Portnummer wird vom Browser separat geprüft. Jede Anweisung zu `document.domain`, einschließlich `document.domain = document.domain`, setzt die Portnummer auf `null`. Daher kann man **nicht** `company.com:8080` nur durch Setzen von `document.domain = "company.com"` bei der ersten sprechen lassen. Es muss in beiden gesetzt werden, damit ihre Portnummern beide `null` sind.

Der Mechanismus hat einige Einschränkungen. Zum Beispiel wird ein `SecurityError` [`DOMException`](/de/docs/Web/API/DOMException) ausgelöst, wenn die [`document-domain`](/de/docs/Web/HTTP/Headers/Permissions-Policy/document-domain) [`Permissions-Policy`](/de/docs/Web/HTTP/Headers/Permissions-Policy) aktiviert ist oder das Dokument in einem sandboxed [`<iframe>`](/de/docs/Web/HTML/Element/iframe) vorliegt, und die Änderung des Origins auf diese Weise beeinflusst nicht die Origin-Prüfungen, die von vielen Web-APIs verwendet werden (z. B. [`localStorage`](/de/docs/Web/API/Window/localStorage), [`indexedDB`](/de/docs/Web/API/IndexedDB_API), [`BroadcastChannel`](/de/docs/Web/API/BroadcastChannel), [`SharedWorker`](/de/docs/Web/API/SharedWorker)). Eine ausführlichere Liste der Fehlerfälle finden Sie in [Document.domain > Failures](/de/docs/Web/API/Document/domain#failures).

> [!NOTE]
> Wenn Sie `document.domain` verwenden, um einem Subdomain den Zugriff auf seine Eltern-Domain zu erlauben, müssen Sie `document.domain` in beiden, der Eltern-Domain und der Subdomain, auf denselben Wert setzen. Dies ist notwendig, auch wenn Sie die Eltern-Domain damit auf ihren ursprünglichen Wert zurücksetzen. Tun Sie dies nicht, kann es zu Berechtigungsfehlern kommen.

## Netzwerkzugriff über Origin-Grenzen hinweg

Die Same-Origin-Policy steuert Interaktionen zwischen zwei verschiedenen Origins, wie z. B. wenn Sie [`fetch()`](/de/docs/Web/API/Window/fetch) oder ein {{htmlelement("img")}}-Element verwenden. Diese Interaktionen sind typischerweise in drei Kategorien unterteilt:

- Cross-Origin _Schreibaktionen_ sind typischerweise erlaubt. Beispiele sind Links, Weiterleitungen und Formularübermittlungen. Einige HTTP-Anfragen erfordern [Preflight](/de/docs/Web/HTTP/CORS#preflighted_requests).
- Cross-Origin _Einbettungen_ sind typischerweise erlaubt. (Beispiele sind unten aufgeführt.)
- Cross-Origin _Lesezugriffe_ sind typischerweise nicht erlaubt, aber Lesezugriff wird oft durch Einbettung offengelegt. Zum Beispiel können Sie die Abmessungen eines eingebetteten Bildes, die Aktionen eines eingebetteten Skripts oder die [Verfügbarkeit einer eingebetteten Ressource](https://bugzil.la/629094) lesen.

Hier sind einige Beispiele für Ressourcen, die Cross-Origin eingebettet werden können:

- JavaScript mit `<script src="…"></script>`. Fehlerdetails für Syntaxfehler sind nur für gleichwertige Skripte verfügbar.
- CSS angewendet mit `<link rel="stylesheet" href="…">`. Aufgrund der entspannten Syntaxregeln von CSS erfordert Cross-Origin CSS einen korrekten `Content-Type` Header. Browser blockieren Stylesheet-Ladevorgänge, wenn es sich um einen Cross-Origin-Ladevorgang handelt, bei dem der MIME-Typ falsch und die Ressource nicht mit einer gültigen CSS-Konstruktion beginnt.
- Bilder, die durch {{htmlelement("img")}} angezeigt werden.
- Medien abgespielt durch {{htmlelement("video")}} und {{htmlelement("audio")}}.
- Externe Ressourcen eingebettet mit {{htmlelement("object")}} und {{htmlelement("embed")}}.
- Schriftarten, die mit {{cssxref("@font-face")}} angewendet werden. Einige Browser erlauben Cross-Origin-Schriftarten, andere erfordern den gleichen Origin.
- Alles, was mit {{htmlelement("iframe")}} eingebettet wird. Websites können den {{HTTPHeader("X-Frame-Options")}} Header verwenden, um das Cross-Origin-Framing zu verhindern.

### So erlauben Sie die Cross-Origin-Zugriffe

Verwenden Sie [CORS](/de/docs/Web/HTTP/CORS), um Cross-Origin-Zugriffe zu erlauben. CORS ist ein Teil von {{Glossary("HTTP", "HTTP")}}, der es Servern ermöglicht, bestimmte Hosts anzugeben, von denen der Browser das Laden von Inhalten erlauben soll.

### So blockieren Sie die Cross-Origin-Zugriffe

- Um Cross-Origin-Schreibvorgänge zu verhindern, überprüfen Sie ein unerratbares Token in der Anfrage — bekannt als [Cross-Site Request Forgery (CSRF)](https://owasp.org/www-community/attacks/csrf) Token. Sie müssen Cross-Origin-Lesezugriffe von Seiten verhindern, die dieses Token erfordern.
- Um Cross-Origin-Lesezugriffe einer Ressource zu verhindern, stellen Sie sicher, dass diese nicht eingebettet werden kann. Es ist oft notwendig, die Einbettung zu verhindern, weil das Einbetten einer Ressource immer einige Informationen darüber offenlegt.
- Um Cross-Origin-Einbettungen zu verhindern, stellen Sie sicher, dass Ihre Ressource nicht als eines der oben aufgeführten einbettbaren Formate interpretiert werden kann. Browser respektieren möglicherweise nicht den `Content-Type` Header. Zum Beispiel, wenn Sie ein `<script>`-Tag auf ein HTML-Dokument verweisen lassen, wird der Browser versuchen, das HTML als JavaScript zu parsen. Wenn Ihre Ressource kein Einstiegspunkt zu Ihrer Website ist, können Sie auch ein CSRF-Token verwenden, um die Einbettung zu verhindern.

## Zugriff auf Cross-Origin-Skript-APIs

JavaScript-APIs wie [`iframe.contentWindow`](/de/docs/Web/API/HTMLIFrameElement/contentWindow), [`window.parent`](/de/docs/Web/API/Window/parent), [`window.open`](/de/docs/Web/API/Window/open) und [`window.opener`](/de/docs/Web/API/Window/opener) erlauben Dokumenten, sich gegenseitig direkt zu referenzieren. Wenn zwei Dokumente nicht den gleichen Origin haben, bieten diese Referenzen nur einen sehr eingeschränkten Zugriff auf [`Window`](/de/docs/Web/API/Window) und [`Location`](/de/docs/Web/API/Location) Objekte, wie in den nächsten zwei Abschnitten beschrieben.

Um zwischen Dokumenten aus verschiedenen Origins zu kommunizieren, verwenden Sie [`window.postMessage`](/de/docs/Web/API/Window/postMessage).

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

## Zugriff auf Datenspeicherung über Origin-Grenzen hinweg

Der Zugriff auf im Browser gespeicherte Daten wie [Webspeicher](/de/docs/Web/API/Web_Storage_API) und [IndexedDB](/de/docs/Web/API/IndexedDB_API) ist nach Origins getrennt. Jeder Origin erhält seinen eigenen separaten Speicher, und JavaScript in einem Origin kann nicht auf den Speicher eines anderen Origins lesen oder schreiben.

{{Glossary("Cookie", "Cookies")}} verwenden eine separate Definition von Origins. Eine Seite kann ein Cookie für ihre eigene Domain oder eine übergeordnete Domain setzen, solange die übergeordnete Domain kein öffentlicher Suffix ist. Firefox und Chrome verwenden die [Public Suffix List](https://publicsuffix.org/), um zu bestimmen, ob eine Domain ein öffentlicher Suffix ist. Wenn Sie ein Cookie setzen, können Sie dessen Verfügbarkeit mit den Flags `Domain`, `Path`, `Secure` und `HttpOnly` einschränken. Wenn Sie ein Cookie lesen, können Sie nicht sehen, woher es gesetzt wurde. Selbst wenn Sie nur sichere https-Verbindungen verwenden, kann jedes von Ihnen gesehene Cookie über eine unsichere Verbindung gesetzt worden sein.

## Siehe auch

- [Same Origin Policy bei W3C](https://www.w3.org/Security/wiki/Same_Origin_Policy)
- [Same-Origin-Policy bei web.dev](https://web.dev/articles/same-origin-policy)
- {{httpheader("Cross-Origin-Resource-Policy")}}
- {{httpheader("Cross-Origin-Embedder-Policy")}}
