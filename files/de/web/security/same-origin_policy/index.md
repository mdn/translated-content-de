---
title: Same-Origin-Policy
slug: Web/Security/Same-origin_policy
l10n:
  sourceCommit: 1a48b6abdd27e168c78edcf04a7a9f6a8e0fdc15
---

{{QuickLinksWithSubpages("/de/docs/Web/Security")}}

Die **Same-Origin-Policy** ist ein kritischer Sicherheitsmechanismus, der einschränkt, wie ein Dokument oder Skript, das von einem {{Glossary("origin")}} geladen wird, mit einer Ressource aus einem anderen Ursprung interagieren kann.

Sie hilft, potenziell bösartige Dokumente zu isolieren, wodurch mögliche Angriffspunkte reduziert werden. Beispielsweise verhindert sie, dass eine bösartige Website im Internet JS in einem Browser ausführt, um Daten aus einem Drittanbieter-Webmail-Dienst (bei dem der Benutzer angemeldet ist) oder einem Unternehmens-Intranet (das durch das Fehlen einer öffentlichen IP-Adresse vor direktem Zugriff des Angreifers geschützt ist) zu lesen und diese Daten an den Angreifer weiterzuleiten.

## Definition eines Ursprungs

Zwei URLs haben den _gleichen Ursprung_, wenn das {{Glossary("protocol")}}, der {{Glossary("port")}} (falls angegeben) und der {{Glossary("host")}} für beide gleich sind. Dies wird oft als "Schema/Host/Port-Tupel" oder einfach "Tupel" bezeichnet. (Ein "Tupel" ist eine Menge von Elementen, die zusammen ein Ganzes bilden – eine generische Form für Doppel/Triple/Quadruple/Quintuple/etc.)

Die folgende Tabelle zeigt Beispiele für Ursprungsvergleiche mit der URL `http://store.company.com/dir/page.html`:

| URL                                               | Ergebnis    | Grund                                             |
| ------------------------------------------------- | ----------- | ------------------------------------------------- |
| `http://store.company.com/dir2/other.html`        | Gleicher Ursprung | Nur der Pfad unterscheidet sich                  |
| `http://store.company.com/dir/inner/another.html` | Gleicher Ursprung | Nur der Pfad unterscheidet sich                  |
| `https://store.company.com/page.html`             | Unterschiedlich | Unterschiedliches Protokoll                      |
| `http://store.company.com:81/dir/page.html`       | Unterschiedlich | Unterschiedlicher Port (`http://` ist standardmäßig Port 80) |
| `http://news.company.com/dir/page.html`           | Unterschiedlich | Unterschiedlicher Host                           |

### Geerbter Ursprung

Skripte, die von Seiten mit einer `about:blank` oder einer [`javascript:` URL](/de/docs/Web/URI/Schemes/javascript) ausgeführt werden, erben den Ursprung des Dokuments, das diese URL enthält, da diese Arten von URLs keine Informationen über einen Ursprungsserver enthalten.

Zum Beispiel wird `about:blank` oft als URL neuer, leerer Popup-Fenster verwendet, in die das übergeordnete Skript Inhalte schreibt (z.B. über den Mechanismus {{domxref("Window.open()")}}). Wenn dieses Popup auch JavaScript enthält, würde dieses Skript den gleichen Ursprung erben wie das Skript, das es erstellt hat.

`data:` URLs erhalten einen neuen, leeren Sicherheitskontext.

### Dateiorsprünge

Moderne Browser behandeln den Ursprung von Dateien, die mit dem `file:///`-Schema geladen werden, normalerweise als _undurchsichtige Ursprünge_.
Das bedeutet, dass, wenn eine Datei andere Dateien aus demselben Ordner einbindet (zum Beispiel), sie nicht als vom gleichen Ursprung stammend betrachtet werden und möglicherweise {{Glossary("CORS")}}-Fehler auslösen.

Beachten Sie, dass die [URL-Spezifikation](https://url.spec.whatwg.org/#origin) besagt, dass der Ursprung von Dateien implementierungsabhängig ist, und einige Browser Dateien im selben Verzeichnis oder Unterverzeichnis als gleichen Ursprung behandeln können, obwohl dies [Sicherheitsimplikationen](https://www.mozilla.org/en-US/security/advisories/mfsa2019-21/#CVE-2019-11730) hat.

## Änderung des Ursprungs

> [!WARNING]
> Der hier beschriebene Ansatz (Verwendung des {{domxref("document.domain")}}-Setters) ist veraltet, da er die von der Same-Origin-Policy gebotenen Sicherheitsmaßnahmen untergräbt und das Ursprungsmodell in Browsern verkompliziert, was zu Interoperabilitätsproblemen und Sicherheitsfehlern führt.

Eine Seite kann ihren eigenen Ursprung ändern, mit einigen Einschränkungen. Ein Skript kann den Wert von {{domxref("document.domain")}} auf seine aktuelle Domäne oder eine Überdomäne seiner aktuellen Domäne setzen. Wenn auf eine Überdomäne der aktuellen Domäne gesetzt, wird die kürzere Überdomäne für Same-Origin-Prüfungen verwendet.

Beispielsweise, nehmen Sie an, ein Skript aus dem Dokument bei `http://store.company.com/dir/other.html` führt das Folgende aus:

```js
document.domain = "company.com";
```

Danach kann die Seite die Same-Origin-Prüfung mit `http://company.com/dir/page.html` bestehen (vorausgesetzt, `http://company.com/dir/page.html` setzt sein `document.domain` auf "`company.com`", um anzuzeigen, dass es dies zulassen möchte - siehe {{domxref("document.domain")}} für mehr). Jedoch könnte `company.com` **nicht** `document.domain` auf `othercompany.com` setzen, da dies keine Überdomäne von `company.com` ist.

Die Portnummer wird vom Browser separat überprüft. Jeder Aufruf von `document.domain`, einschließlich `document.domain = document.domain`, führt dazu, dass die Portnummer mit `null` überschrieben wird. Daher kann man **nicht** `company.com:8080` mit `company.com` kommunizieren lassen, indem man nur `document.domain = "company.com"` im ersten setzt. Es muss in beiden gesetzt werden, sodass ihre Portnummern beide `null` sind.

Der Mechanismus hat einige Einschränkungen. Beispielsweise wirft er ein "`SecurityError`" [`DOMException`](/de/docs/Web/API/DOMException), wenn die [`document-domain`](/de/docs/Web/HTTP/Headers/Permissions-Policy/document-domain) [`Permissions-Policy`](/de/docs/Web/HTTP/Headers/Permissions-Policy) aktiviert ist oder das Dokument in einem sandboxed [`<iframe>`](/de/docs/Web/HTML/Element/iframe) ist, und die Änderung des Ursprungs auf diese Weise wirkt sich nicht auf die Ursprungsprüfungen aus, die von vielen Web-APIs verwendet werden (z.B. [`localStorage`](/de/docs/Web/API/Window/localStorage), [`indexedDB`](/de/docs/Web/API/IndexedDB_API), [`BroadcastChannel`](/de/docs/Web/API/BroadcastChannel), [`SharedWorker`](/de/docs/Web/API/SharedWorker)). Eine umfassendere Liste von Fehlerfällen finden Sie unter [Document.domain > Failures](/de/docs/Web/API/Document/domain#failures).

> [!NOTE]
> Wenn Sie `document.domain` verwenden, um einem Subdomain den Zugriff auf seine übergeordnete Domain zu ermöglichen, müssen Sie `document.domain` auf denselben Wert in sowohl der übergeordneten Domain als auch der Subdomain setzen. Dies ist notwendig, auch wenn dadurch die übergeordnete Domain auf ihren ursprünglichen Wert zurückgesetzt wird. Das Versäumnis, dies zu tun, kann zu Berechtigungsfehlern führen.

## Cross-Origin-Netzwerkzugriff

Die Same-Origin-Policy steuert Interaktionen zwischen zwei verschiedenen Ursprüngen, wie z.B. wenn Sie {{domxref("Window/fetch", "fetch()")}} oder ein {{htmlelement("img")}}-Element verwenden. Diese Interaktionen werden typischerweise in drei Kategorien eingeteilt:

- Cross-Origin **Writes** sind typischerweise erlaubt. Beispiele sind Links, Umleitungen und Formularübermittlungen. Einige HTTP-Anfragen erfordern [Preflight](/de/docs/Web/HTTP/CORS#preflighted_requests).
- Cross-Origin **Embedding** ist typischerweise erlaubt. (Beispiele sind unten aufgeführt.)
- Cross-Origin **Reads** sind typischerweise nicht erlaubt, aber Lesezugriff wird oft durch Einbettung bereitgestellt. Beispielsweise können Sie die Abmessungen eines eingebetteten Bildes, die Aktionen eines eingebetteten Skripts oder die [Verfügbarkeit einer eingebetteten Ressource](https://bugzil.la/629094) lesen.

Hier sind einige Beispiele für Ressourcen, die Cross-Origin eingebettet werden können:

- JavaScript mit `<script src="…"></script>`. Fehlerdetails bei Syntaxfehlern sind nur für gleiche Ursprungs-Skripte verfügbar.
- CSS angewendet mit `<link rel="stylesheet" href="…">`. Aufgrund der entspannten Syntaxregeln von CSS erfordert Cross-Origin CSS einen korrekten `Content-Type`-Header. Browser blockieren Stylesheet-Ladevorgänge, wenn es sich um einen Cross-Origin-Ladevorgang handelt, bei dem der MIME-Typ falsch ist und die Ressource nicht mit einem gültigen CSS-Konstrukt beginnt.
- Bilder, die von {{htmlelement("img")}} angezeigt werden.
- Medien, die von {{htmlelement("video")}} und {{htmlelement("audio")}} abgespielt werden.
- Externe Ressourcen, die mit {{htmlelement("object")}} und {{htmlelement("embed")}} eingebettet sind.
- Schriftarten angewendet mit {{cssxref("@font-face")}}. Einige Browser erlauben Cross-Origin Schriftarten, andere erfordern den gleichen Ursprung.
- Alles, was von {{htmlelement("iframe")}} eingebettet ist. Websites können den {{HTTPHeader("X-Frame-Options")}}-Header verwenden, um Cross-Origin-Framing zu verhindern.

### So ermöglichen Sie Cross-Origin-Zugriff

Verwenden Sie [CORS](/de/docs/Web/HTTP/CORS) um Cross-Origin-Zugriff zu erlauben. CORS ist ein Teil von {{Glossary("HTTP")}}, der es Servern erlaubt, alle anderen Hosts anzugeben, von denen ein Browser das Laden von Inhalten erlauben soll.

### So blockieren Sie Cross-Origin-Zugriff

- Um Cross-Origin _Writes_ zu verhindern, überprüfen Sie ein nicht zu erratendes Token in der Anfrage – bekannt als [Cross-Site Request Forgery (CSRF)](https://owasp.org/www-community/attacks/csrf)-Token. Sie müssen Cross-Origin Lesezugriffe auf Seiten verhindern, die dieses Token erfordern.
- Um Cross-Origin _Reads_ einer Ressource zu verhindern, stellen Sie sicher, dass diese nicht einbettbar ist. Es ist oft notwendig, das Einbetten zu verhindern, da das Einbetten einer Ressource immer einige Informationen darüber preisgibt.
- Um Cross-Origin _Embeds_ zu verhindern, stellen Sie sicher, dass Ihre Ressource nicht als eines der oben aufgeführten einbettbaren Formate interpretiert werden kann. Browser respektieren den `Content-Type`-Header möglicherweise nicht. Wenn Sie zum Beispiel ein `<script>`-Tag auf ein HTML-Dokument verweisen, versucht der Browser, das HTML als JavaScript zu parsen. Wenn Ihre Ressource kein Einstiegspunkt zu Ihrer Seite ist, können Sie auch ein CSRF-Token verwenden, um Einbettungen zu verhindern.

## Cross-Origin-Skript-API-Zugriff

JavaScript-APIs wie {{domxref("HTMLIFrameElement.contentWindow", "iframe.contentWindow")}}, {{domxref("window.parent")}}, {{domxref("window.open")}}, und {{domxref("window.opener")}} erlauben Dokumenten, sich direkt gegenseitig zu referenzieren. Wenn zwei Dokumente nicht den gleichen Ursprung haben, bieten diese Verweise sehr eingeschränkten Zugriff auf {{domxref("Window")}} und {{domxref("Location")}}-Objekte, wie in den nächsten beiden Abschnitten beschrieben.

Um zwischen Dokumenten aus verschiedenen Ursprüngen zu kommunizieren, verwenden Sie {{domxref("window.postMessage")}}.

Spezifikation: [HTML Living Standard § Cross-origin objects](https://html.spec.whatwg.org/multipage/browsers.html#cross-origin-objects).

### Fenster

Der folgende Cross-Origin-Zugriff auf diese `Window`-Eigenschaften ist erlaubt:

| Methoden                          |
| --------------------------------- |
| {{domxref("window.blur")}}        |
| {{domxref("window.close")}}       |
| {{domxref("window.focus")}}       |
| {{domxref("window.postMessage")}} |

| Attribute                      |             |
| ------------------------------ | ----------- |
| {{domxref("window.closed")}}   | Nur-Lese.   |
| {{domxref("window.frames")}}   | Nur-Lese.   |
| {{domxref("window.length")}}   | Nur-Lese.   |
| {{domxref("window.location")}} | Lese/Schreib. |
| {{domxref("window.opener")}}   | Nur-Lese.   |
| {{domxref("window.parent")}}   | Nur-Lese.   |
| {{domxref("window.self")}}     | Nur-Lese.   |
| {{domxref("window.top")}}      | Nur-Lese.   |
| {{domxref("window.window")}}   | Nur-Lese.   |

Einige Browser erlauben den Zugriff auf mehr Eigenschaften als die oben genannten.

### Standort

Der folgende Cross-Origin-Zugriff auf `Location`-Eigenschaften ist erlaubt:

| Methoden                           |
| ---------------------------------- |
| {{domxref("location.replace")}}    |

| Attribute                    |             |
| -----------------------------| ----------- |
| {{domxref("location.href")}} | Schreibgeschützt. |

Einige Browser erlauben den Zugriff auf mehr Eigenschaften als die oben genannten.

## Cross-Origin-Datenspeicherzugriff

Der Zugriff auf im Browser gespeicherte Daten wie [Web Storage](/de/docs/Web/API/Web_Storage_API) und [IndexedDB](/de/docs/Web/API/IndexedDB_API) ist nach Ursprung getrennt. Jeder Ursprung erhält seinen eigenen separaten Speicher, und JavaScript in einem Ursprung kann nicht auf den Speicher eines anderen Ursprungs zugreifen oder diesen beschreiben.

{{glossary("Cookie", "Cookies")}} verwenden eine separate Definition von Ursprüngen. Eine Seite kann ein Cookie für ihre eigene Domäne oder eine übergeordnete Domäne setzen, solange die übergeordnete Domäne kein öffentlicher Suffix ist. Firefox und Chrome verwenden die [Public Suffix List](https://publicsuffix.org/), um festzustellen, ob eine Domäne ein öffentlicher Suffix ist. Beim Setzen eines Cookies können Sie dessen Verfügbarkeit mit den Flags `Domain`, `Path`, `Secure` und `HttpOnly` begrenzen. Wenn Sie ein Cookie lesen, können Sie nicht sehen, von wo es gesetzt wurde. Auch wenn Sie nur sichere https-Verbindungen verwenden, kann jedes sichtbare Cookie mittels einer unsicheren Verbindung gesetzt worden sein.

## Siehe auch

- [Same Origin Policy bei W3C](https://www.w3.org/Security/wiki/Same_Origin_Policy)
- [Same-Origin-Policy bei web.dev](https://web.dev/articles/same-origin-policy)
- {{httpheader("Cross-Origin-Resource-Policy")}}
- {{httpheader("Cross-Origin-Embedder-Policy")}}
