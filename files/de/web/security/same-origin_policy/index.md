---
title: Same-origin policy
slug: Web/Security/Same-origin_policy
l10n:
  sourceCommit: 9df96dcad40bf97f66b317ef6b6bbe64444569eb
---

{{QuickLinksWithSubpages("/de/docs/Web/Security")}}

Die **Same-Origin-Policy** ist ein kritischer Sicherheitsmechanismus, der einschränkt, wie ein Dokument oder Skript, das von einem [origin](/de/docs/Glossary/origin) geladen wurde, mit einer Ressource von einem anderen Ursprung interagieren kann.

Sie hilft, potenziell schädliche Dokumente zu isolieren und mögliche Angriffspunkte zu reduzieren. Zum Beispiel verhindert sie, dass eine bösartige Website im Internet JavaScript in einem Browser ausführen kann, um Daten von einem Drittanbieter-Webmail-Dienst (bei dem der Benutzer angemeldet ist) oder einem Unternehmensintranet (das durch das Fehlen einer öffentlichen IP-Adresse vor direktem Zugriff durch den Angreifer geschützt ist) zu lesen und diese Daten an den Angreifer weiterzuleiten.

## Definition eines Ursprungs

Zwei URLs haben denselben _Ursprung_, wenn das [Protokoll](/de/docs/Glossary/protocol), der [Port](/de/docs/Glossary/port) (falls angegeben) und der [Host](/de/docs/Glossary/host) für beide gleich sind. Dies kann als "scheme/host/port tuple" oder einfach "tuple" bezeichnet werden. (Ein "Tuple" ist eine Menge von Elementen, die zusammen ein Ganzes bilden — eine generische Form für Doppel/Tripel/Quadruple/Quintuple/etc.)

Die folgende Tabelle gibt Beispiele für Ursprungsvergleiche mit der URL `http://store.company.com/dir/page.html`:

| URL                                               | Ergebnis          | Grund                                                        |
| ------------------------------------------------- | ----------------- | ------------------------------------------------------------ |
| `http://store.company.com/dir2/other.html`        | Gleicher Ursprung | Nur der Pfad unterscheidet sich                              |
| `http://store.company.com/dir/inner/another.html` | Gleicher Ursprung | Nur der Pfad unterscheidet sich                              |
| `https://store.company.com/page.html`             | Unterschiedlich   | Unterschiedliches Protokoll                                  |
| `http://store.company.com:81/dir/page.html`       | Unterschiedlich   | Unterschiedlicher Port (`http://` ist standardmäßig Port 80) |
| `http://news.company.com/dir/page.html`           | Unterschiedlich   | Unterschiedlicher Host                                       |

### Geerbte Ursprünge

Skripte, die von Seiten mit einer `about:blank` oder [`javascript:` URL](/de/docs/Web/URI/Schemes/javascript) ausgeführt werden, erben den Ursprung des Dokuments, das diese URL enthält, da diese Arten von URLs keine Informationen über einen Ursprungsserver enthalten.

Zum Beispiel wird `about:blank` oft als URL neuer, leerer Popup-Fenster verwendet, in die das übergeordnete Skript Inhalte schreibt (z.B. über den [`Window.open()`](/de/docs/Web/API/Window/open)-Mechanismus). Wenn dieses Popup auch JavaScript enthält, würde dieses Skript denselben Ursprung wie das erzeugende Skript erben.

`data:` URLs erhalten einen neuen, leeren Sicherheitskontext.

### Dateiuhrsprüngen

Moderne Browser behandeln den Ursprung von Dateien, die mit dem `file:///` Schema geladen werden, in der Regel als _undurchsichtige Ursprünge_.
Das bedeutet, dass wenn eine Datei andere Dateien aus demselben Ordner einbindet (zum Beispiel), sie nicht zwingend als vom selben Ursprung betrachtet werden und [CORS](/de/docs/Glossary/CORS)-Fehler verursachen können.

Beachten Sie, dass die [URL-Spezifikation](https://url.spec.whatwg.org/#origin) besagt, dass der Ursprung von Dateien implementierungsabhängig ist, und einige Browser könnten Dateien im selben Verzeichnis oder Unterverzeichnis als vom gleichen Ursprung behandeln, obwohl dies [Sicherheitsimplikationen](https://www.mozilla.org/en-US/security/advisories/mfsa2019-21/#CVE-2019-11730) hat.

## Ursprung ändern

> [!WARNING]
> Der hier beschriebene Ansatz (Verwenden des [`document.domain`](/de/docs/Web/API/Document/domain) Setters) ist veraltet, da er die Sicherheitsvorkehrungen der Same-Origin-Policy untergräbt und das Ursprungsmodell in Browsern kompliziert, was zu Interoperabilitätsproblemen und Sicherheitslücken führen kann.

Eine Seite kann ihren eigenen Ursprung ändern, mit einigen Einschränkungen. Ein Skript kann den Wert von [`document.domain`](/de/docs/Web/API/Document/domain) auf seine aktuelle Domain oder eine Superdomain seiner aktuellen Domain setzen. Wenn es auf eine Superdomain der aktuellen Domain gesetzt wird, wird die kürzere Superdomain für Same-Origin-Prüfungen verwendet.

Beispielsweise nimmt man an, dass ein Skript aus dem Dokument bei `http://store.company.com/dir/other.html` das Folgende ausführt:

```js
document.domain = "company.com";
```

Danach kann die Seite die Same-Origin-Prüfung mit `http://company.com/dir/page.html` bestehen (vorausgesetzt `http://company.com/dir/page.html` setzt sein `document.domain` auf `"company.com"`, um anzuzeigen, dass es dies zulässt - siehe [`document.domain`](/de/docs/Web/API/Document/domain) für mehr). Jedoch könnte `company.com` **nicht** `document.domain` auf `othercompany.com` setzen, da dies keine Superdomain von `company.com` ist.

Die Portnummer wird separat vom Browser überprüft. Jeder Aufruf von `document.domain`, einschließlich `document.domain = document.domain`, bewirkt, dass die Portnummer mit `null` überschrieben wird. Daher kann man **nicht** `company.com:8080` mit `company.com` kommunizieren lassen, indem man nur `document.domain = "company.com"` im Ersten setzt. Es muss in beiden gesetzt werden, damit ihre Portnummern beide `null` sind.

Der Mechanismus hat einige Einschränkungen. Zum Beispiel wird ein `SecurityError` [`DOMException`](/de/docs/Web/API/DOMException) ausgelöst, wenn die [`document-domain`](/de/docs/Web/HTTP/Headers/Permissions-Policy/document-domain) [`Permissions-Policy`](/de/docs/Web/HTTP/Headers/Permissions-Policy) aktiviert ist oder wenn das Dokument in einem sandboxed [`<iframe>`](/de/docs/Web/HTML/Element/iframe) ist, und die Änderung des Ursprungs auf diese Weise beeinflusst nicht die Ursprungsüberprüfungen, die von vielen Web-APIs verwendet werden (z.B. [`localStorage`](/de/docs/Web/API/Window/localStorage), [`indexedDB`](/de/docs/Web/API/IndexedDB_API), [`BroadcastChannel`](/de/docs/Web/API/BroadcastChannel), [`SharedWorker`](/de/docs/Web/API/SharedWorker)). Eine umfassendere Liste der Fehlerfälle finden Sie in [Document.domain > Failures](/de/docs/Web/API/Document/domain#failures).

> [!NOTE]
> Wenn Sie `document.domain` verwenden, um einem Subdomain den Zugriff auf seinen Parent zu ermöglichen, müssen Sie `document.domain` auf denselben _Wert_ sowohl in der übergeordneten Domain als auch in der Subdomain setzen. Dies ist notwendig, selbst wenn dies bedeutet, den Ursprung in die ursprüngliche Einstellung zurückzusetzen. Versäumnis, dies zu tun, kann zu Berechtigungsfehlern führen.

## Netzwerkanfragen über Origin-Grenzen hinweg

Die Same-Origin-Policy kontrolliert Interaktionen zwischen zwei verschiedenen Ursprüngen, wie z.B. wenn `fetch()` oder ein {{htmlelement("img")}}-Element verwendet wird. Diese Interaktionen werden typischerweise in drei Kategorien unterteilt:

- Cross-Origin _Writes_ sind typischerweise erlaubt. Beispiele sind Links, Redirects und Formularübermittlungen. Einige HTTP-Anfragen erfordern [preflight](/de/docs/Web/HTTP/CORS#preflighted_requests).
- Cross-Origin _Embedding_ ist typischerweise erlaubt. (Beispiele sind unten aufgelistet.)
- Cross-Origin _Reads_ sind typischerweise nicht erlaubt, aber Lesezugriff wird oft durch Embedding geleakt. Zum Beispiel können Sie die Dimensionen eines eingebetteten Bildes, die Aktionen eines eingebetteten Skripts oder die [Verfügbarkeit einer eingebetteten Ressource](https://bugzil.la/629094) lesen.

Hier sind einige Beispiele von Ressourcen, die Cross-Origin eingebettet werden können:

- JavaScript mit `<script src="…"></script>`. Fehlerdetails für Syntaxfehler sind nur für Same-Origin-Skripte verfügbar.
- CSS, angewendet mit `<link rel="stylesheet" href="…">`. Aufgrund der entspannten Syntaxregeln von CSS erfordert Cross-Origin-CSS einen korrekten `Content-Type`-Header. Browser blockieren Stylesheet-Loads, wenn es ein Cross-Origin-Load ist, bei dem der MIME-Typ falsch ist und die Ressource nicht mit einem gültigen CSS-Konstrukt beginnt.
- Bilder angezeigt durch {{htmlelement("img")}}.
- Medien abgespielt durch {{htmlelement("video")}} und {{htmlelement("audio")}}.
- Externe Ressourcen eingebettet mit {{htmlelement("object")}} und {{htmlelement("embed")}}.
- Schriften angewendet mit {{cssxref("@font-face")}}. Einige Browser erlauben Cross-Origin-Schriften, andere erfordern Same-Origin.
- Alles, was durch {{htmlelement("iframe")}} eingebettet ist. Seiten können den {{HTTPHeader("X-Frame-Options")}}-Header verwenden, um Cross-Origin-Framing zu verhindern.

### Anleitung zur Erlaubnis von Cross-Origin-Zugriff

Verwenden Sie [CORS](/de/docs/Web/HTTP/CORS), um Cross-Origin-Zugriff zu erlauben. CORS ist ein Teil von [HTTP](/de/docs/Glossary/HTTP), der Servern erlaubt, andere Hosts anzugeben, von denen aus ein Browser Inhalte laden darf.

### Anleitung zum Blockieren von Cross-Origin-Zugriff

- Um Cross-Origin-Writes zu verhindern, prüfen Sie ein nicht erratbares Token in der Anfrage — bekannt als [Cross-Site Request Forgery (CSRF)](https://owasp.org/www-community/attacks/csrf)-Token. Sie müssen Cross-Origin-Reads von Seiten verhindern, die dieses Token erfordern.
- Um Cross-Origin-Reads einer Ressource zu verhindern, stellen Sie sicher, dass sie nicht einbettbar ist. Es ist oft notwendig, das Einbetten zu verhindern, da das Einbetten einer Ressource immer einige Informationen darüber preisgibt.
- Um Cross-Origin-Embeds zu verhindern, stellen Sie sicher, dass Ihre Ressource nicht als eines der oben aufgeführten einbettbaren Formate interpretiert werden kann. Browser respektieren möglicherweise den `Content-Type`-Header nicht. Zum Beispiel, wenn Sie ein `<script>`-Tag auf ein HTML-Dokument zeigen, wird der Browser versuchen, das HTML als JavaScript zu parsen. Wenn Ihre Ressource kein Einstiegspunkt Ihrer Website ist, können Sie auch ein CSRF-Token verwenden, um das Einbetten zu verhindern.

## Cross-Origin Skript-API-Zugriff

JavaScript-APIs wie [`iframe.contentWindow`](/de/docs/Web/API/HTMLIFrameElement/contentWindow), [`window.parent`](/de/docs/Web/API/Window/parent), [`window.open`](/de/docs/Web/API/Window/open) und [`window.opener`](/de/docs/Web/API/Window/opener) erlauben es Dokumenten, sich direkt aufeinander zu beziehen. Wenn zwei Dokumente nicht denselben Ursprung haben, bieten diese Verweise nur sehr eingeschränkten Zugriff auf [`Window`](/de/docs/Web/API/Window) und [`Location`](/de/docs/Web/API/Location)-Objekte, wie in den nächsten beiden Abschnitten beschrieben.

Um zwischen Dokumenten aus verschiedenen Ursprüngen zu kommunizieren, verwenden Sie [`window.postMessage`](/de/docs/Web/API/Window/postMessage).

Spezifikation: [HTML Living Standard § Cross-origin objects](https://html.spec.whatwg.org/multipage/browsers.html#cross-origin-objects).

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

### Ort

Der folgende Cross-Origin-Zugriff auf `Location`-Eigenschaften ist erlaubt:

| Methoden                                                |
| ------------------------------------------------------- |
| [`location.replace`](/de/docs/Web/API/Location/replace) |

| Attribute                                         |                |
| ------------------------------------------------- | -------------- |
| [`location.href`](/de/docs/Web/API/Location/href) | Nur schreiben. |

Einige Browser erlauben den Zugriff auf mehr Eigenschaften als die oben genannten.

## Cross-Origin-Datenspeicherzugriff

Der Zugriff auf im Browser gespeicherte Daten wie [Web Storage](/de/docs/Web/API/Web_Storage_API) und [IndexedDB](/de/docs/Web/API/IndexedDB_API) ist nach Ursprung getrennt. Jeder Ursprung erhält seinen eigenen separaten Speicher, und JavaScript in einem Ursprung kann nicht auf den Speicher eines anderen Ursprungs lesen oder schreiben.

[Cookies](/de/docs/Glossary/Cookie) verwenden eine separate Definition von Ursprüngen. Eine Seite kann ein Cookie für ihre eigene Domain oder eine übergeordnete Domain setzen, solange die übergeordnete Domain nicht ein öffentlicher Suffix ist. Firefox und Chrome verwenden die [Public Suffix List](https://publicsuffix.org/), um festzustellen, ob eine Domain ein öffentlicher Suffix ist. Wenn Sie ein Cookie setzen, können Sie seine Verfügbarkeit mithilfe der `Domain`, `Path`, `Secure` und `HttpOnly` Flags einschränken. Wenn Sie ein Cookie lesen, können Sie nicht sehen, von wo es gesetzt wurde. Auch wenn Sie nur sichere https-Verbindungen verwenden, könnte jedes Cookie, das Sie sehen, über eine unsichere Verbindung gesetzt worden sein.

## Siehe auch

- [Same Origin Policy bei W3C](https://www.w3.org/Security/wiki/Same_Origin_Policy)
- [Same-origin policy bei web.dev](https://web.dev/articles/same-origin-policy)
- {{httpheader("Cross-Origin-Resource-Policy")}}
- {{httpheader("Cross-Origin-Embedder-Policy")}}
