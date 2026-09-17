---
title: Same-Origin-Policy
slug: Web/Security/Defenses/Same-origin_policy
l10n:
  sourceCommit: 13ef67a4ffbdb929415dfa1b3d65ab1aa9ebe5da
---

Die **Same-Origin-Policy** ist ein entscheidender Sicherheitsmechanismus, der einschränkt, wie ein von einem {{Glossary("origin", "Origin")}} geladenes Dokument oder Skript mit einer Ressource von einem anderen Origin interagieren kann.

Sie hilft dabei, potenziell bösartige Dokumente zu isolieren und mögliche Angriffsvektoren zu reduzieren. Beispielsweise verhindert sie, dass eine bösartige Website im Internet JavaScript in einem Browser ausführt, um Daten von einem Webmail-Dienst eines Drittanbieters (bei dem der Benutzer angemeldet ist) oder einem Unternehmens-Intranet (das vor direktem Zugriff durch den Angreifer geschützt ist, da es keine öffentliche IP-Adresse hat) zu lesen und diese Daten an den Angreifer weiterzuleiten.

## Definition eines Origin

Zwei URLs haben denselben _Origin_, wenn {{Glossary("protocol", "Protokoll")}}, {{Glossary("port", "Port")}} (falls angegeben) und {{Glossary("host", "Host")}} bei beiden gleich sind. Dies wird möglicherweise als „Schema/Host/Port-Tupel“ oder einfach als „Tupel“ bezeichnet. (Ein „Tupel“ ist eine Menge von Elementen, die zusammen ein Ganzes bilden – eine allgemeine Form für Doppel-/Dreifach-/Vierfach-/Fünffach-/usw.-Kombinationen.)

Die folgende Tabelle enthält Beispiele für Origin-Vergleiche mit der URL `http://store.company.com/dir/page.html`:

| URL                                               | Ergebnis        | Grund                                                    |
| ------------------------------------------------- | --------------- | -------------------------------------------------------- |
| `http://store.company.com/dir2/other.html`        | Gleicher Origin | Nur der Pfad unterscheidet sich                          |
| `http://store.company.com/dir/inner/another.html` | Gleicher Origin | Nur der Pfad unterscheidet sich                          |
| `https://store.company.com/page.html`             | Fehlgeschlagen  | Anderes Protokoll                                        |
| `http://store.company.com:81/dir/page.html`       | Fehlgeschlagen  | Anderer Port (`http://` verwendet standardmäßig Port 80) |
| `http://news.company.com/dir/page.html`           | Fehlgeschlagen  | Anderer Host                                             |

### Geerbte Origins

Skripte, die von Seiten mit einer `about:blank`- oder einer [`javascript:`-URL](/de/docs/Web/URI/Reference/Schemes/javascript) ausgeführt werden, erben den Origin des Dokuments, das diese URL enthält, da diese URL-Typen keine Informationen über einen Origin-Server enthalten.

Beispielsweise wird `about:blank` häufig als URL neuer, leerer Pop-up-Fenster verwendet, in die das übergeordnete Skript Inhalte schreibt (z. B. über den Mechanismus [`Window.open()`](/de/docs/Web/API/Window/open)). Wenn dieses Pop-up ebenfalls JavaScript enthält, würde dieses Skript denselben Origin wie das Skript erben, das es erstellt hat.

`data:`-URLs erhalten einen neuen, leeren Sicherheitskontext.

### Datei-Origins

Moderne Browser behandeln den Origin von Dateien, die über das Schema `file:///` geladen werden, normalerweise als _opake Origins_.
Das bedeutet: Wenn eine Datei beispielsweise andere Dateien aus demselben Ordner einbindet, wird nicht angenommen, dass sie vom selben Origin stammen, und es können {{Glossary("CORS", "CORS")}}-Fehler ausgelöst werden.

Beachten Sie, dass die [URL-Spezifikation](https://url.spec.whatwg.org/#origin) festlegt, dass der Origin von Dateien implementierungsabhängig ist. Manche Browser behandeln Dateien im selben Verzeichnis oder Unterverzeichnis möglicherweise als gleichen Origin, obwohl dies [Sicherheitsauswirkungen](https://www.mozilla.org/en-US/security/advisories/mfsa2019-21/#CVE-2019-11730) hat.

## Origin ändern

> [!WARNING]
> Der hier beschriebene Ansatz (die Verwendung des Setters von [`document.domain`](/de/docs/Web/API/Document/domain)) ist veraltet, da er die durch die Same-Origin-Policy bereitgestellten Sicherheitsvorkehrungen untergräbt und das Origin-Modell in Browsern komplizierter macht, was zu Interoperabilitätsproblemen und Sicherheitsfehlern führt.

Eine Seite kann ihren eigenen Origin mit einigen Einschränkungen ändern. Ein Skript kann den Wert von [`document.domain`](/de/docs/Web/API/Document/domain) auf seine aktuelle Domain oder eine übergeordnete Domain seiner aktuellen Domain setzen. Wenn er auf eine übergeordnete Domain der aktuellen Domain gesetzt wird, wird die kürzere übergeordnete Domain für Same-Origin-Prüfungen verwendet.

Angenommen, ein Skript aus dem Dokument unter `http://store.company.com/dir/other.html` führt Folgendes aus:

```js
document.domain = "company.com";
```

Danach kann die Seite die Same-Origin-Prüfung mit `http://company.com/dir/page.html` bestehen (vorausgesetzt, `http://company.com/dir/page.html` setzt sein `document.domain` auf `"company.com"`, um anzugeben, dass dies erlaubt werden soll – weitere Informationen finden Sie unter [`document.domain`](/de/docs/Web/API/Document/domain)). `company.com` könnte `document.domain` jedoch **nicht** auf `othercompany.com` setzen, da dies keine übergeordnete Domain von `company.com` ist.

Die Portnummer wird vom Browser separat geprüft. Jeder Aufruf von `document.domain`, einschließlich `document.domain = document.domain`, führt dazu, dass die Portnummer durch `null` ersetzt wird. Daher kann man `company.com:8080` nicht mit `company.com` kommunizieren lassen, indem nur im ersten `document.domain = "company.com"` gesetzt wird. Es muss bei beiden gesetzt werden, sodass ihre Portnummern beide `null` sind.

Der Mechanismus hat einige Einschränkungen. Beispielsweise löst er eine `SecurityError`-[`DOMException`](/de/docs/Web/API/DOMException) aus, wenn sich das Dokument in einem Sandbox-[`<iframe>`](/de/docs/Web/HTML/Reference/Elements/iframe) befindet. Zudem wirkt sich das Ändern des Origin auf diese Weise nicht auf die Origin-Prüfungen aus, die von vielen Web-APIs verwendet werden (z. B. [`localStorage`](/de/docs/Web/API/Window/localStorage), [`indexedDB`](/de/docs/Web/API/IndexedDB_API), [`BroadcastChannel`](/de/docs/Web/API/BroadcastChannel), [`SharedWorker`](/de/docs/Web/API/SharedWorker)). Eine ausführlichere Liste von Fehlerfällen finden Sie unter [Document.domain > Failures](/de/docs/Web/API/Document/domain#failures).

> [!NOTE]
> Wenn Sie `document.domain` verwenden, um einer Subdomain den Zugriff auf ihre übergeordnete Domain zu erlauben, müssen Sie `document.domain` sowohl in der übergeordneten Domain als auch in der Subdomain auf _denselben Wert_ setzen. Dies ist auch dann erforderlich, wenn dadurch die übergeordnete Domain wieder auf ihren ursprünglichen Wert gesetzt wird. Andernfalls können Berechtigungsfehler auftreten.

## Netzwerkzugriff zwischen Origins

Die Same-Origin-Policy steuert Interaktionen zwischen zwei verschiedenen Origins, etwa wenn Sie [`fetch()`](/de/docs/Web/API/Window/fetch) oder ein {{htmlelement("img")}}-Element verwenden. Diese Interaktionen werden üblicherweise in drei Kategorien eingeteilt:

- Origin-übergreifende _Schreibvorgänge_ sind normalerweise erlaubt. Beispiele sind Links, Weiterleitungen und Formularübermittlungen. Einige HTTP-Anfragen erfordern einen [Preflight](/de/docs/Web/HTTP/Guides/CORS#preflighted_requests).
- Origin-übergreifendes _Einbetten_ ist normalerweise erlaubt. (Beispiele sind unten aufgeführt.)
- Origin-übergreifende _Lesevorgänge_ sind normalerweise nicht erlaubt, aber Lesezugriff wird häufig durch Einbetten offengelegt. Beispielsweise können Sie die Abmessungen eines eingebetteten Bildes, die Aktionen eines eingebetteten Skripts oder die [Verfügbarkeit einer eingebetteten Ressource](https://bugzil.la/629094) auslesen.

Hier sind einige Beispiele für Ressourcen, die Origin-übergreifend eingebettet werden können:

- JavaScript mit `<script src="…"></script>`. Fehlerdetails für Syntaxfehler sind nur für Skripte mit demselben Origin verfügbar.
- CSS, das mit `<link rel="stylesheet" href="…">` angewendet wird. Aufgrund der gelockerten Syntaxregeln von CSS erfordert Origin-übergreifendes CSS einen korrekten `Content-Type`-Header. Browser blockieren das Laden von Stylesheets, wenn es sich um einen Origin-übergreifenden Ladevorgang handelt, bei dem der MIME-Typ falsch ist und die Ressource nicht mit einem gültigen CSS-Konstrukt beginnt.
- Bilder, die durch {{htmlelement("img")}} angezeigt werden.
- Medien, die durch {{htmlelement("video")}} und {{htmlelement("audio")}} wiedergegeben werden.
- Externe Ressourcen, die mit {{htmlelement("object")}} und {{htmlelement("embed")}} eingebettet werden.
- Schriftarten, die mit {{cssxref("@font-face")}} angewendet werden. Einige Browser erlauben Origin-übergreifende Schriftarten, andere erfordern denselben Origin.
- Alles, was durch {{htmlelement("iframe")}} eingebettet wird. Websites können den Header {{HTTPHeader("X-Frame-Options")}} verwenden, um Origin-übergreifendes Framing zu verhindern.

### Origin-übergreifenden Zugriff erlauben

Verwenden Sie [CORS](/de/docs/Web/HTTP/Guides/CORS), um Origin-übergreifenden Zugriff zu erlauben. CORS ist ein Teil von {{Glossary("HTTP", "HTTP")}}, mit dem Server beliebige andere Hosts angeben können, von denen ein Browser das Laden von Inhalten erlauben soll.

### Origin-übergreifenden Zugriff blockieren

- Um Origin-übergreifende Schreibvorgänge zu verhindern, prüfen Sie in der Anfrage ein nicht erratbares Token – bekannt als [Cross-Site Request Forgery (CSRF)](https://community.owasp.org/attacks/csrf)-Token. Sie müssen Origin-übergreifende Lesevorgänge von Seiten verhindern, die dieses Token benötigen.
- Um Origin-übergreifende Lesevorgänge einer Ressource zu verhindern, stellen Sie sicher, dass sie nicht eingebettet werden kann. Es ist häufig erforderlich, das Einbetten zu verhindern, da das Einbetten einer Ressource immer einige Informationen über sie preisgibt.
- Um Origin-übergreifende Einbettungen zu verhindern, stellen Sie sicher, dass Ihre Ressource nicht als eines der oben aufgeführten einbettbaren Formate interpretiert werden kann. Browser berücksichtigen den `Content-Type`-Header möglicherweise nicht. Wenn Sie beispielsweise ein `<script>`-Tag auf ein HTML-Dokument verweisen lassen, versucht der Browser, das HTML als JavaScript zu parsen. Wenn Ihre Ressource kein Einstiegspunkt zu Ihrer Website ist, können Sie auch ein CSRF-Token verwenden, um das Einbetten zu verhindern.

## Origin-übergreifender Zugriff auf Skript-APIs

JavaScript-APIs wie [`iframe.contentWindow`](/de/docs/Web/API/HTMLIFrameElement/contentWindow), [`window.parent`](/de/docs/Web/API/Window/parent), [`window.open`](/de/docs/Web/API/Window/open) und [`window.opener`](/de/docs/Web/API/Window/opener) ermöglichen es Dokumenten, direkt aufeinander zu verweisen. Wenn zwei Dokumente nicht denselben Origin haben, bieten diese Verweise, wie in den nächsten beiden Abschnitten beschrieben, nur sehr eingeschränkten Zugriff auf [`Window`](/de/docs/Web/API/Window) und [`Location`](/de/docs/Web/API/Location)-Objekte.

Um zwischen Dokumenten unterschiedlicher Origins zu kommunizieren, verwenden Sie [`window.postMessage`](/de/docs/Web/API/Window/postMessage).

Spezifikation: [HTML Living Standard § Cross-origin objects](https://html.spec.whatwg.org/multipage/browsers.html#cross-origin-objects).

### Window

Der folgende Origin-übergreifende Zugriff auf diese `Window`-Eigenschaften ist erlaubt:

| Methoden                                                    |
| ----------------------------------------------------------- |
| [`window.blur`](/de/docs/Web/API/Window/blur)               |
| [`window.close`](/de/docs/Web/API/Window/close)             |
| [`window.focus`](/de/docs/Web/API/Window/focus)             |
| [`window.postMessage`](/de/docs/Web/API/Window/postMessage) |

| Attribute                                             |                   |
| ----------------------------------------------------- | ----------------- |
| [`window.closed`](/de/docs/Web/API/Window/closed)     | Schreibgeschützt. |
| [`window.frames`](/de/docs/Web/API/Window/frames)     | Schreibgeschützt. |
| [`window.length`](/de/docs/Web/API/Window/length)     | Schreibgeschützt. |
| [`window.location`](/de/docs/Web/API/Window/location) | Lesen/Schreiben.  |
| [`window.opener`](/de/docs/Web/API/Window/opener)     | Schreibgeschützt. |
| [`window.parent`](/de/docs/Web/API/Window/parent)     | Schreibgeschützt. |
| [`window.self`](/de/docs/Web/API/Window/self)         | Schreibgeschützt. |
| [`window.top`](/de/docs/Web/API/Window/top)           | Schreibgeschützt. |
| [`window.window`](/de/docs/Web/API/Window/window)     | Schreibgeschützt. |

Einige Browser erlauben Zugriff auf mehr Eigenschaften als die oben genannten.

### Location

Der folgende Origin-übergreifende Zugriff auf `Location`-Eigenschaften ist erlaubt:

| Methoden                                                |
| ------------------------------------------------------- |
| [`location.replace`](/de/docs/Web/API/Location/replace) |

| Attribute                                         |                |
| ------------------------------------------------- | -------------- |
| [`location.href`](/de/docs/Web/API/Location/href) | Nur Schreiben. |

Einige Browser erlauben Zugriff auf mehr Eigenschaften als die oben genannten.

## Origin-übergreifender Zugriff auf Datenspeicher

Der Zugriff auf im Browser gespeicherte Daten wie [Web Storage](/de/docs/Web/API/Web_Storage_API) und [IndexedDB](/de/docs/Web/API/IndexedDB_API) wird nach Origin getrennt. Jeder Origin erhält seinen eigenen separaten Speicher, und JavaScript in einem Origin kann weder aus dem Speicher eines anderen Origin lesen noch in ihn schreiben.

{{Glossary("Cookie", "Cookies")}} verwenden eine separate Definition von Origins. Eine Seite kann ein Cookie für ihre eigene Domain oder jede übergeordnete Domain setzen, solange die übergeordnete Domain kein öffentliches Suffix ist. Firefox und Chrome verwenden die [Public Suffix List](https://publicsuffix.org/), um zu bestimmen, ob eine Domain ein öffentliches Suffix ist. Beim Setzen eines Cookies können Sie dessen Verfügbarkeit mit den Flags `Domain`, `Path`, `Secure` und `HttpOnly` einschränken. Beim Lesen eines Cookies können Sie nicht erkennen, wo es gesetzt wurde. Selbst wenn Sie ausschließlich sichere HTTPS-Verbindungen verwenden, kann jedes sichtbare Cookie über eine unsichere Verbindung gesetzt worden sein.

## Siehe auch

- [Same Origin Policy bei W3C](https://www.w3.org/Security/wiki/Same_Origin_Policy)
- [Same-Origin-Policy bei web.dev](https://web.dev/articles/same-origin-policy)
- {{httpheader("Cross-Origin-Resource-Policy")}}
- {{httpheader("Cross-Origin-Embedder-Policy")}}
