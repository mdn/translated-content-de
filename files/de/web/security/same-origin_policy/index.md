---
title: Same-Origin-Policy
slug: Web/Security/Same-origin_policy
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{QuickLinksWithSubpages("/de/docs/Web/Security")}}

Die **Same-Origin-Policy** ist ein kritischer Sicherheitsmechanismus, der einschränkt, wie ein Dokument oder Skript, das von einem {{Glossary("origin", "Origin")}} geladen wurde, mit einer Ressource von einem anderen Origin interagieren kann.

Sie hilft, potenziell bösartige Dokumente zu isolieren und mögliche Angriffsvektoren zu reduzieren. Zum Beispiel verhindert sie, dass eine bösartige Website im Internet JS in einem Browser ausführt, um Daten von einem Drittanbieter-Webmail-Dienst (bei dem der Benutzer angemeldet ist) oder einem Unternehmens-Intranet (das durch das Fehlen einer öffentlichen IP-Adresse vor direktem Zugang durch den Angreifer geschützt ist) zu lesen und diese Daten an den Angreifer weiterzuleiten.

## Definition eines Origin

Zwei URLs haben denselben _Origin_, wenn das {{Glossary("protocol", "Protokoll")}}, der {{Glossary("port", "Port")}} (falls angegeben) und der {{Glossary("host", "Host")}} für beide identisch sind. Dies wird oft als "scheme/host/port tuple" oder einfach "tuple" bezeichnet. (Ein "Tuple" ist eine Menge von Elementen, die zusammen ein Ganzes bilden — eine generische Form für Doppel/Tripel/Quadruple/Quintuple/etc.)

Die folgende Tabelle zeigt Beispiele für Origin-Vergleiche mit der URL `http://store.company.com/dir/page.html`:

| URL                                               | Ergebnis        | Grund                                                        |
| ------------------------------------------------- | --------------- | ------------------------------------------------------------ |
| `http://store.company.com/dir2/other.html`        | Gleiches Origin | Nur der Pfad unterscheidet sich                              |
| `http://store.company.com/dir/inner/another.html` | Gleiches Origin | Nur der Pfad unterscheidet sich                              |
| `https://store.company.com/page.html`             | Unterschiedlich | Unterschiedliches Protokoll                                  |
| `http://store.company.com:81/dir/page.html`       | Unterschiedlich | Unterschiedlicher Port (`http://` ist standardmäßig Port 80) |
| `http://news.company.com/dir/page.html`           | Unterschiedlich | Unterschiedlicher Host                                       |

### Geerbte Origins

Skripte, die von Seiten mit einer `about:blank` oder [`javascript:` URL](/de/docs/Web/URI/Reference/Schemes/javascript) ausgeführt werden, erben den Origin des Dokuments, das diese URL enthält, da diese Arten von URLs keine Informationen über einen Origin-Server enthalten.

Zum Beispiel wird `about:blank` oft als URL für neue, leere Popup-Fenster verwendet, in die das übergeordnete Skript Inhalte schreibt (z. B. über den [`Window.open()`](/de/docs/Web/API/Window/open)-Mechanismus). Wenn dieses Popup auch JavaScript enthält, würde dieses Skript denselben Origin erben wie das Skript, das es erstellt hat.

`data:` URLs erhalten einen neuen, leeren Sicherheitskontext.

### Datei-Origins

Moderne Browser behandeln den Origin von Dateien, die mit dem `file:///`-Schema geladen werden, normalerweise als _opake Origins_.
Das bedeutet, dass wenn eine Datei andere Dateien aus demselben Ordner (beispielsweise) einbindet, nicht angenommen wird, dass sie vom selben Origin stammen, und dies kann {{Glossary("CORS", "CORS")}}-Fehler auslösen.

Beachten Sie, dass die [URL-Spezifikation](https://url.spec.whatwg.org/#origin) besagt, dass der Origin von Dateien implementierungsabhängig ist, und einige Browser könnten Dateien im gleichen Verzeichnis oder Unterverzeichnis als gleiches Origin betrachten, obwohl dies [Sicherheitsimplikationen](https://www.mozilla.org/en-US/security/advisories/mfsa2019-21/#CVE-2019-11730) haben kann.

## Änderung des Origins

> [!WARNING]
> Der hier beschriebene Ansatz (bei dem der [`document.domain`](/de/docs/Web/API/Document/domain)-Setter verwendet wird) ist veraltet, da er die Sicherheitsmechanismen der Same-Origin-Policy untergräbt und das Origin-Modell in Browsern verkompliziert, was zu Interoperabilitätsproblemen und Sicherheitslücken führt.

Eine Seite kann ihren eigenen Origin ändern, allerdings mit einigen Einschränkungen. Ein Skript kann den Wert von [`document.domain`](/de/docs/Web/API/Document/domain) auf seine aktuelle Domäne oder eine Oberdomäne seiner aktuellen Domäne setzen. Wird es auf eine Oberdomäne der aktuellen Domäne gesetzt, wird die kürzere Oberdomäne für Same-Origin-Prüfungen verwendet.

Zum Beispiel, nehmen wir an, ein Skript aus dem Dokument unter `http://store.company.com/dir/other.html` führt Folgendes aus:

```js
document.domain = "company.com";
```

Danach kann die Seite die Same-Origin-Prüfung mit `http://company.com/dir/page.html` bestehen (vorausgesetzt, `http://company.com/dir/page.html` setzt sein `document.domain` auf `"company.com"`, um anzuzeigen, dass dies erlaubt ist - siehe [`document.domain`](/de/docs/Web/API/Document/domain) für mehr). Allerdings könnte `company.com` **nicht** `document.domain` auf `othercompany.com` setzen, da dies keine Oberdomäne von `company.com` ist.

Die Portnummer wird vom Browser separat geprüft. Jeder Aufruf von `document.domain`, einschließlich `document.domain = document.domain`, setzt die Portnummer auf `null`. Daher kann man **nicht** `company.com:8080` dazu bringen, mit `company.com` zu kommunizieren, indem man nur `document.domain = "company.com"` im Ersten setzt. Es muss in beiden gesetzt werden, sodass ihre Portnummern beide `null` sind.

Der Mechanismus hat einige Einschränkungen. Zum Beispiel wird er einen `SecurityError` [`DOMException`](/de/docs/Web/API/DOMException) werfen, wenn die [`document-domain`](/de/docs/Web/HTTP/Reference/Headers/Permissions-Policy/document-domain) [`Permissions-Policy`](/de/docs/Web/HTTP/Reference/Headers/Permissions-Policy) aktiviert ist oder das Dokument sich in einem sandboxed [`<iframe>`](/de/docs/Web/HTML/Element/iframe) befindet, und die Änderung des Origins auf diese Weise beeinflusst nicht die Origin-Prüfungen, die von vielen Web-APIs verwendet werden (z.B. [`localStorage`](/de/docs/Web/API/Window/localStorage), [`indexedDB`](/de/docs/Web/API/IndexedDB_API), [`BroadcastChannel`](/de/docs/Web/API/BroadcastChannel), [`SharedWorker`](/de/docs/Web/API/SharedWorker)). Eine ausführlichere Liste von Fehlerfällen finden Sie in [Document.domain > Failures](/de/docs/Web/API/Document/domain#failures).

> [!NOTE]
> Wenn Sie `document.domain` verwenden, um einem Unterdomain den Zugriff auf seine übergeordnete Domain zu ermöglichen, müssen Sie `document.domain` in sowohl der übergeordneten Domain als auch der Unterdomain auf denselben Wert setzen. Dies ist notwendig, selbst wenn dies bedeutet, die übergeordnete Domain auf ihren ursprünglichen Wert zurückzusetzen. Das Versäumnis, dies zu tun, kann zu Berechtigungsfehlern führen.

## Cross-Origin-Netzwerkzugriff

Die Same-Origin-Policy steuert die Interaktionen zwischen zwei verschiedenen Origins, z.B. wenn Sie [`fetch()`](/de/docs/Web/API/Window/fetch) oder ein {{htmlelement("img")}}-Element verwenden. Diese Interaktionen werden in der Regel in drei Kategorien unterteilt:

- Cross-Origin-_Writes_ sind in der Regel erlaubt. Beispiele sind Links, Weiterleitungen und Formularübermittlungen. Einige HTTP-Anfragen erfordern [Preflights](/de/docs/Web/HTTP/Guides/CORS#preflighted_requests).
- Cross-Origin-_Embeddings_ sind in der Regel erlaubt. (Beispiele sind unten aufgeführt.)
- Cross-Origin-_Reads_ sind in der Regel verboten, aber der Lesezugriff wird oft durch Embedding geleakt. Zum Beispiel können Sie die Abmessungen eines eingebetteten Bildes, die Aktionen eines eingebetteten Skripts oder die [Verfügbarkeit einer eingebetteten Ressource](https://bugzil.la/629094) lesen.

Hier sind einige Beispiele für Ressourcen, die Cross-Origin eingebettet werden können:

- JavaScript mit `<script src="…"></script>`. Fehlerdetails für Syntaxfehler sind nur für Same-Origin-Skripte verfügbar.
- CSS, angewendet mit `<link rel="stylesheet" href="…">`. Aufgrund der entspannten Syntaxregeln von CSS erfordert Cross-Origin-CSS einen korrekten `Content-Type`-Header. Browser blockieren das Laden von Stylesheets, wenn es ein Cross-Origin-Load ist, bei dem der MIME-Typ falsch ist und die Ressource nicht mit einem gültigen CSS-Konstrukt beginnt.
- Bilder, die von {{htmlelement("img")}} angezeigt werden.
- Medien, die von {{htmlelement("video")}} und {{htmlelement("audio")}} abgespielt werden.
- Externe Ressourcen eingebettet mit {{htmlelement("object")}} und {{htmlelement("embed")}}.
- Schriftarten, die mit {{cssxref("@font-face")}} angewendet werden. Einige Browser erlauben Cross-Origin-Schriftarten, andere erfordern Same-Origin.
- Alles, was durch {{htmlelement("iframe")}} eingebettet wird. Seiten können den {{HTTPHeader("X-Frame-Options")}}-Header verwenden, um Cross-Origin-Framing zu verhindern.

### Anleitung zur Erlaubnis von Cross-Origin-Zugriff

Verwenden Sie [CORS](/de/docs/Web/HTTP/Guides/CORS), um Cross-Origin-Zugriff zu erlauben. CORS ist ein Teil von {{Glossary("HTTP", "HTTP")}}, der es Servern ermöglicht, andere Hosts zu spezifizieren, von denen ein Browser das Laden von Inhalten erlauben sollte.

### Anleitung zur Blockierung von Cross-Origin-Zugriff

- Um Cross-Origin-Schreibzugriffe zu verhindern, prüfen Sie ein nicht erratbares Token in der Anfrage — bekannt als ein [Cross-Site Request Forgery (CSRF)](https://owasp.org/www-community/attacks/csrf) Token. Sie müssen Cross-Origin-Lesezugriffe auf Seiten verhindern, die dieses Token erfordern.
- Um Cross-Origin-Lesezugriffe auf eine Ressource zu verhindern, stellen Sie sicher, dass sie nicht eingebettet werden kann. Es ist oft notwendig, das Einbetten zu verhindern, da das Einbetten einer Ressource immer einige Informationen darüber leakt.
- Um Cross-Origin-Embeddings zu verhindern, stellen Sie sicher, dass Ihre Ressource nicht als eines der oben aufgeführten einbettbaren Formate interpretiert werden kann. Browser respektieren möglicherweise nicht den `Content-Type`-Header. Wenn Sie zum Beispiel ein `<script>`-Tag auf ein HTML-Dokument verweisen, versucht der Browser, das HTML als JavaScript zu analysieren. Wenn Ihre Ressource kein Einstiegspunkt zu Ihrer Website ist, können Sie auch ein CSRF-Token verwenden, um das Einbetten zu verhindern.

## Cross-Origin-Skript-API-Zugriff

JavaScript-APIs wie [`iframe.contentWindow`](/de/docs/Web/API/HTMLIFrameElement/contentWindow), [`window.parent`](/de/docs/Web/API/Window/parent), [`window.open`](/de/docs/Web/API/Window/open) und [`window.opener`](/de/docs/Web/API/Window/opener) ermöglichen es Dokumenten, direkt aufeinander zu verweisen. Wenn zwei Dokumente nicht denselben Origin haben, bieten diese Verweise nur sehr begrenzten Zugriff auf [`Window`](/de/docs/Web/API/Window) und [`Location`](/de/docs/Web/API/Location)-Objekte, wie in den nächsten beiden Abschnitten beschrieben.

Um zwischen Dokumenten von verschiedenen Origins zu kommunizieren, verwenden Sie [`window.postMessage`](/de/docs/Web/API/Window/postMessage).

Spezifikation: [HTML Living Standard § Cross-origin objects](https://html.spec.whatwg.org/multipage/browsers.html#cross-origin-objects).

### Window

Der folgende Cross-Origin-Zugriff auf diese `Window`-Eigenschaften ist erlaubt:

| Methoden                                                    |
| ----------------------------------------------------------- |
| [`window.blur`](/de/docs/Web/API/Window/blur)               |
| [`window.close`](/de/docs/Web/API/Window/close)             |
| [`window.focus`](/de/docs/Web/API/Window/focus)             |
| [`window.postMessage`](/de/docs/Web/API/Window/postMessage) |

| Attribute                                             |                      |
| ----------------------------------------------------- | -------------------- |
| [`window.closed`](/de/docs/Web/API/Window/closed)     | Nur lesbar.          |
| [`window.frames`](/de/docs/Web/API/Window/frames)     | Nur lesbar.          |
| [`window.length`](/de/docs/Web/API/Window/length)     | Nur lesbar.          |
| [`window.location`](/de/docs/Web/API/Window/location) | Lese/Schreibzugriff. |
| [`window.opener`](/de/docs/Web/API/Window/opener)     | Nur lesbar.          |
| [`window.parent`](/de/docs/Web/API/Window/parent)     | Nur lesbar.          |
| [`window.self`](/de/docs/Web/API/Window/self)         | Nur lesbar.          |
| [`window.top`](/de/docs/Web/API/Window/top)           | Nur lesbar.          |
| [`window.window`](/de/docs/Web/API/Window/window)     | Nur lesbar.          |

Einige Browser erlauben den Zugriff auf mehr Eigenschaften als die obigen.

### Location

Der folgende Cross-Origin-Zugriff auf `Location`-Eigenschaften ist erlaubt:

| Methoden                                                |
| ------------------------------------------------------- |
| [`location.replace`](/de/docs/Web/API/Location/replace) |

| Attribute                                         |                 |
| ------------------------------------------------- | --------------- |
| [`location.href`](/de/docs/Web/API/Location/href) | Nur schreibbar. |

Einige Browser erlauben den Zugriff auf mehr Eigenschaften als die obigen.

## Cross-Origin-Datenspeicherzugriff

Der Zugriff auf im Browser gespeicherte Daten wie [Web Storage](/de/docs/Web/API/Web_Storage_API) und [IndexedDB](/de/docs/Web/API/IndexedDB_API) ist durch Origins getrennt. Jeder Origin erhält seinen eigenen separaten Speicher, und JavaScript in einem Origin kann nicht auf den Speicher eines anderen Origins zugreifen.

{{Glossary("Cookie", "Cookies")}} verwenden eine separate Definition von Origins. Eine Seite kann ein Cookie für ihre eigene Domäne oder eine beliebige übergeordnete Domäne setzen, solange die übergeordnete Domäne kein öffentlicher Suffix ist. Firefox und Chrome verwenden die [Public Suffix List](https://publicsuffix.org/), um zu bestimmen, ob eine Domäne ein öffentlicher Suffix ist. Wenn Sie ein Cookie setzen, können Sie seine Verfügbarkeit durch die Flags `Domain`, `Path`, `Secure` und `HttpOnly` einschränken. Wenn Sie ein Cookie lesen, können Sie nicht sehen, von wo es gesetzt wurde. Selbst wenn Sie nur sichere https-Verbindungen verwenden, könnte jedes Cookie, das Sie sehen, über eine unsichere Verbindung gesetzt worden sein.

## Siehe auch

- [Same Origin Policy bei W3C](https://www.w3.org/Security/wiki/Same_Origin_Policy)
- [Same-origin policy bei web.dev](https://web.dev/articles/same-origin-policy)
- {{httpheader("Cross-Origin-Resource-Policy")}}
- {{httpheader("Cross-Origin-Embedder-Policy")}}
