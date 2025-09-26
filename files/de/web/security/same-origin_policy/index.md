---
title: Same-Origin-Policy
slug: Web/Security/Same-origin_policy
l10n:
  sourceCommit: 9584088475846ff014dadddf8f6eff25c0796bbb
---

Die **Same-Origin-Policy** ist ein kritischer Sicherheitsmechanismus, der einschränkt, wie ein von einem {{Glossary("origin", "Origin")}} geladenes Dokument oder Skript mit einer Ressource eines anderen Origin interagieren kann.

Er hilft, potenziell bösartige Dokumente zu isolieren und mögliche Angriffspunkte zu reduzieren. Zum Beispiel verhindert er, dass eine bösartige Website im Internet JS in einem Browser ausführt, um Daten von einem Drittanbieter-Webmail-Service (bei dem der Benutzer angemeldet ist) oder einem Unternehmensintranet (das vor direktem Zugriff durch den Angreifer geschützt ist, da es keine öffentliche IP-Adresse hat) zu lesen und diese Daten an den Angreifer weiterzuleiten.

## Definition eines Origin

Zwei URLs haben denselben _Origin_, wenn das {{Glossary("protocol", "Protokoll")}}, der {{Glossary("port", "Port")}} (falls angegeben) und der {{Glossary("host", "Host")}} für beide gleich sind. Dies wird oft als "Scheme/Host/Port-Tupel" oder einfach "Tupel" bezeichnet. (Ein "Tupel" ist eine Gruppe von Elementen, die zusammen eine Einheit bilden – eine allgemeine Form für Doppel/Triple/Vierfach/Vierfach/usw.)

Die folgende Tabelle gibt Beispiele für Origin-Vergleiche mit der URL `http://store.company.com/dir/page.html`:

| URL                                               | Ergebnis                 | Grund                                                        |
| ------------------------------------------------- | ------------------------ | ------------------------------------------------------------ |
| `http://store.company.com/dir2/other.html`        | Gleicher Origin          | Nur der Pfad unterscheidet sich                              |
| `http://store.company.com/dir/inner/another.html` | Gleicher Origin          | Nur der Pfad unterscheidet sich                              |
| `https://store.company.com/page.html`             | Unterschiedlicher Origin | Unterschiedliches Protokoll                                  |
| `http://store.company.com:81/dir/page.html`       | Unterschiedlicher Origin | Unterschiedlicher Port (`http://` ist standardmäßig Port 80) |
| `http://news.company.com/dir/page.html`           | Unterschiedlicher Origin | Unterschiedlicher Host                                       |

### Geerbte Origins

Skripte, die von Seiten mit einer `about:blank` oder [`javascript:` URL](/de/docs/Web/URI/Reference/Schemes/javascript) ausgeführt werden, erben den Origin des Dokuments, das diese URL enthält, da diese Arten von URLs keine Informationen über einen Origin-Server enthalten.

Zum Beispiel wird `about:blank` oft als URL für neue, leere Pop-up-Fenster verwendet, in die das übergeordnete Skript Inhalte schreibt (z. B. über den [`Window.open()`](/de/docs/Web/API/Window/open)-Mechanismus). Wenn dieses Popup auch JavaScript enthält, würde dieses Skript denselben Origin erben wie das Skript, das es erstellt hat.

`data:` URLs erhalten einen neuen, leeren Sicherheitskontext.

### Datei-Origins

Moderne Browser behandeln in der Regel den Origin von Dateien, die mit dem `file:///`-Schema geladen werden, als _undurchsichtige Origins_.
Das bedeutet, dass, wenn eine Datei andere Dateien aus demselben Ordner einbindet, sie nicht als vom selben Origin angenommen werden und möglicherweise {{Glossary("CORS", "CORS")}}-Fehler ausgelöst werden.

Beachten Sie, dass die [URL-Spezifikation](https://url.spec.whatwg.org/#origin) angibt, dass der Origin von Dateien implementierungsabhängig ist, und einige Browser Dateien im gleichen Verzeichnis oder Unterverzeichnis als gleichen Origin betrachten können, auch wenn dies [Sicherheitsimplikationen](https://www.mozilla.org/en-US/security/advisories/mfsa2019-21/#CVE-2019-11730) hat.

## Änderung des Origin

> [!WARNING]
> Die hier beschriebene Methode (Verwendung des [`document.domain`](/de/docs/Web/API/Document/domain)-Setters) ist veraltet, da sie die durch die Same-Origin-Policy bereitgestellten Sicherheitsmechanismen untergräbt und das Origin-Modell in Browsern kompliziert, was zu Interoperabilitätsproblemen und Sicherheitslücken führt.

Eine Seite kann ihren eigenen Origin ändern, jedoch mit einigen Einschränkungen. Ein Skript kann den Wert von [`document.domain`](/de/docs/Web/API/Document/domain) auf seine aktuelle Domain oder eine Superdomain seiner aktuellen Domain setzen. Wenn es auf eine Superdomain der aktuellen Domain gesetzt wird, wird die kürzere Superdomain für Same-Origin-Prüfungen verwendet.

Zum Beispiel, nehmen wir an, ein Skript aus dem Dokument unter `http://store.company.com/dir/other.html` führt Folgendes aus:

```js
document.domain = "company.com";
```

Danach kann die Seite die Same-Origin-Prüfung mit `http://company.com/dir/page.html` bestehen (vorausgesetzt, `http://company.com/dir/page.html` setzt sein `document.domain` auf `"company.com"`, um anzuzeigen, dass es dies zulassen möchte - siehe [`document.domain`](/de/docs/Web/API/Document/domain) für mehr). `company.com` könnte jedoch **nicht** `document.domain` auf `othercompany.com` setzen, da dies keine Superdomain von `company.com` ist.

Die Portnummer wird vom Browser separat geprüft. Jeder Aufruf von `document.domain`, einschließlich `document.domain = document.domain`, verursacht, dass die Portnummer mit `null` überschrieben wird. Daher kann man **nicht** `company.com:8080` dazu bringen, mit `company.com` zu kommunizieren, indem man nur `document.domain = "company.com"` im ersten setzt. Es muss in beiden gesetzt werden, damit ihre Portnummern beide `null` sind.

Der Mechanismus hat einige Einschränkungen. Zum Beispiel wird er einen `SecurityError` [`DOMException`](/de/docs/Web/API/DOMException) auslösen, wenn das Dokument in einem sandboxed [`<iframe>`](/de/docs/Web/HTML/Reference/Elements/iframe) ist, und die Änderung des Origin auf diese Weise beeinflusst nicht die Origin-Prüfungen, die von vielen Web-APIs verwendet werden (z. B. [`localStorage`](/de/docs/Web/API/Window/localStorage), [`indexedDB`](/de/docs/Web/API/IndexedDB_API), [`BroadcastChannel`](/de/docs/Web/API/BroadcastChannel), [`SharedWorker`](/de/docs/Web/API/SharedWorker)). Eine detailliertere Liste von Fehlerfällen finden Sie unter [Document.domain > Failures](/de/docs/Web/API/Document/domain#failures).

> [!NOTE]
> Wenn Sie `document.domain` verwenden, um einem Subdomain Zugriff auf sein Parent zu gewähren, müssen Sie `document.domain` auf den _gleichen Wert_ sowohl im Parent-Domain als auch im Subdomain setzen. Dies ist notwendig, selbst wenn Sie dadurch die Parent-Domain auf ihren ursprünglichen Wert zurücksetzen. Ein Versäumnis dessen kann zu Berechtigungsfehlern führen.

## Netzwerk-Zugriff über unterschiedliche Origins

Die Same-Origin-Policy kontrolliert Interaktionen zwischen zwei verschiedenen Origins, wie wenn Sie [`fetch()`](/de/docs/Web/API/Window/fetch) oder ein {{htmlelement("img")}}-Element verwenden. Diese Interaktionen werden typischerweise in drei Kategorien eingeteilt:

- Cross-Origin _Writes_ sind in der Regel erlaubt. Beispiele sind Links, Weiterleitungen und Formularübermittlungen. Einige HTTP-Anfragen erfordern [Preflight](/de/docs/Web/HTTP/Guides/CORS#preflighted_requests).
- Cross-Origin _Embedding_ ist in der Regel erlaubt. (Beispiele sind unten aufgeführt.)
- Cross-Origin _Reads_ sind in der Regel nicht erlaubt, aber Lesezugriff wird oft durch Einbettung geleakt. Zum Beispiel können Sie die Dimensionen eines eingebetteten Bildes, die Aktionen eines eingebetteten Skripts oder die [Verfügbarkeit einer eingebetteten Ressource](https://bugzil.la/629094) lesen.

Hier sind einige Beispiele für Ressourcen, die Cross-Origin eingebettet werden können:

- JavaScript mit `<script src="…"></script>`. Fehlermeldungen für Syntaxfehler sind nur für same-origin Skripte verfügbar.
- CSS angewendet mit `<link rel="stylesheet" href="…">`. Aufgrund der entspannten Syntaxregeln von CSS erfordert Cross-Origin-CSS einen korrekten `Content-Type`-Header. Browser blockieren das Laden von Stylesheets, wenn es sich um ein Cross-Origin-Load handelt, bei dem der MIME-Typ falsch ist und die Ressource nicht mit einem gültigen CSS-Konstrukt beginnt.
- Bilder angezeigt durch {{htmlelement("img")}}.
- Medien abgespielt durch {{htmlelement("video")}} und {{htmlelement("audio")}}.
- Externe Ressourcen eingebettet mit {{htmlelement("object")}} und {{htmlelement("embed")}}.
- Schriften angewendet mit {{cssxref("@font-face")}}. Einige Browser erlauben Cross-Origin-Schriften, andere erfordern Same-Origin.
- Alles, was mit {{htmlelement("iframe")}} eingebettet wird. Websites können den {{HTTPHeader("X-Frame-Options")}} Header verwenden, um Cross-Origin-Framing zu verhindern.

### Anleitung zur Erlaubnis von Cross-Origin-Zugriff

Verwenden Sie [CORS](/de/docs/Web/HTTP/Guides/CORS), um Cross-Origin-Zugriff zu erlauben. CORS ist ein Teil von {{Glossary("HTTP", "HTTP")}}, der es Servern ermöglicht anzugeben, welche anderen Hosts das Laden von Inhalten durch den Browser erlauben sollten.

### Anleitung zur Blockierung von Cross-Origin-Zugriff

- Um Cross-Origin Writes zu verhindern, überprüfen Sie ein nicht erratbares Token in der Anfrage — bekannt als [Cross-Site Request Forgery (CSRF)](https://owasp.org/www-community/attacks/csrf) Token. Sie müssen Cross-Origin Reads von Seiten verhindern, die dieses Token erfordern.
- Um Cross-Origin Reads einer Ressource zu verhindern, stellen Sie sicher, dass sie nicht eingebettet werden kann. Es ist oft notwendig, das Einbetten zu verhindern, da das Einbetten einer Ressource immer einige Informationen darüber leakt.
- Um Cross-Origin Embeds zu verhindern, stellen Sie sicher, dass Ihre Ressource nicht als eines der oben aufgeführten einbettbaren Formate interpretiert werden kann. Browser können den `Content-Type` Header möglicherweise nicht respektieren. Wenn Sie zum Beispiel ein `<script>`-Tag auf ein HTML-Dokument zeigen, wird der Browser versuchen, das HTML als JavaScript zu parsen. Wenn Ihre Ressource kein Einstiegspunkt zu Ihrer Site ist, können Sie auch ein CSRF-Token verwenden, um das Einbetten zu verhindern.

## Cross-Origin-Skript-API-Zugriff

JavaScript-APIs wie [`iframe.contentWindow`](/de/docs/Web/API/HTMLIFrameElement/contentWindow), [`window.parent`](/de/docs/Web/API/Window/parent), [`window.open`](/de/docs/Web/API/Window/open) und [`window.opener`](/de/docs/Web/API/Window/opener) erlauben Dokumenten, sich direkt zu referenzieren. Wenn zwei Dokumente nicht denselben Origin haben, bieten diese Referenzen nur sehr begrenzten Zugriff auf [`Window`](/de/docs/Web/API/Window) und [`Location`](/de/docs/Web/API/Location)-Objekte, wie in den nächsten zwei Abschnitten beschrieben.

Um zwischen Dokumenten aus verschiedenen Origins zu kommunizieren, verwenden Sie [`window.postMessage`](/de/docs/Web/API/Window/postMessage).

Spezifikation: [HTML Living Standard § Cross-Origin-Objekte](https://html.spec.whatwg.org/multipage/browsers.html#cross-origin-objects).

### Fenster

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

### Standort

Der folgende Cross-Origin-Zugriff auf `Location`-Eigenschaften ist erlaubt:

| Methoden                                                |
| ------------------------------------------------------- |
| [`location.replace`](/de/docs/Web/API/Location/replace) |

| Attribute                                         |                       |
| ------------------------------------------------- | --------------------- |
| [`location.href`](/de/docs/Web/API/Location/href) | Nur schreibgeschützt. |

Einige Browser erlauben den Zugriff auf mehr Eigenschaften als die oben genannten.

## Zugriff auf Cross-Origin-Datenspeicherung

Der Zugriff auf im Browser gespeicherte Daten wie [Web Storage](/de/docs/Web/API/Web_Storage_API) und [IndexedDB](/de/docs/Web/API/IndexedDB_API) ist nach Origin getrennt. Jeder Origin erhält seinen eigenen separaten Speicher, und JavaScript in einem Origin kann nicht aus dem Speicher eines anderen Origins lesen oder in ihn schreiben.

{{Glossary("Cookie", "Cookies")}} verwenden eine separate Definition von Origins. Eine Seite kann ein Cookie für ihre eigene Domain oder eine übergeordnete Domain setzen, solange die übergeordnete Domain kein öffentliche Suffix ist. Firefox und Chrome verwenden die [Public Suffix List](https://publicsuffix.org/), um zu bestimmen, ob eine Domain ein öffentliches Suffix ist. Wenn Sie ein Cookie setzen, können Sie seine Verfügbarkeit mit den `Domain`, `Path`, `Secure` und `HttpOnly` Flags einschränken. Wenn Sie ein Cookie lesen, können Sie nicht sehen, von wo es gesetzt wurde. Selbst wenn Sie nur sichere https-Verbindungen verwenden, kann jedes Cookie, das Sie sehen, über eine unsichere Verbindung gesetzt worden sein.

## Siehe auch

- [Same Origin Policy bei W3C](https://www.w3.org/Security/wiki/Same_Origin_Policy)
- [Same-Origin-Policy bei web.dev](https://web.dev/articles/same-origin-policy)
- {{httpheader("Cross-Origin-Resource-Policy")}}
- {{httpheader("Cross-Origin-Embedder-Policy")}}
