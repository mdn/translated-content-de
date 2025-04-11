---
title: Same-Origin-Policy
slug: Web/Security/Same-origin_policy
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{QuickLinksWithSubpages("/de/docs/Web/Security")}}

Die **Same-Origin-Policy** ist ein entscheidender Sicherheitsmechanismus, der einschränkt, wie ein Dokument oder Skript, das von einem {{Glossary("origin", "Ursprung")}} geladen wurde, mit einer Ressource von einem anderen Ursprung interagieren kann.

Sie hilft, potenziell schädliche Dokumente zu isolieren, indem mögliche Angriffspunkte reduziert werden. Zum Beispiel verhindert sie, dass eine bösartige Website im Internet JavaScript in einem Browser ausführt, um Daten von einem Drittanbieter-Webmail-Dienst (bei dem der Benutzer angemeldet ist) oder von einem Unternehmens-Intranet (das durch das Fehlen einer öffentlichen IP-Adresse vor direktem Zugriff durch den Angreifer geschützt ist) zu lesen und diese Daten an den Angreifer weiterzuleiten.

## Definition eines Ursprungs

Zwei URLs haben denselben _Ursprung_, wenn das {{Glossary("protocol", "Protokoll")}}, der {{Glossary("port", "Port")}} (falls angegeben) und der {{Glossary("host", "Host")}} für beide gleich sind. Dies wird oft als "Schema/Host/Port-Tupel" oder einfach "Tupel" bezeichnet. (Ein "Tupel" ist eine Menge von Elementen, die zusammen ein Ganzes bilden – eine generische Form für Doppel/Tripel/Quadruple/Quintuple/usw.)

Die folgende Tabelle gibt Beispiele für Vergleich von Ursprüngen mit der URL `http://store.company.com/dir/page.html`:

| URL                                               | Ergebnis          | Grund                                                    |
| ------------------------------------------------- | ----------------- | -------------------------------------------------------- |
| `http://store.company.com/dir2/other.html`        | Gleicher Ursprung | Nur der Pfad unterscheidet sich                          |
| `http://store.company.com/dir/inner/another.html` | Gleicher Ursprung | Nur der Pfad unterscheidet sich                          |
| `https://store.company.com/page.html`             | Unterschied       | Verschiedenes Protokoll                                  |
| `http://store.company.com:81/dir/page.html`       | Unterschied       | Verschiedener Port (`http://` ist standardmäßig Port 80) |
| `http://news.company.com/dir/page.html`           | Unterschied       | Verschiedener Host                                       |

### Geerbte Ursprünge

Skripte, die von Seiten mit einer `about:blank` oder [`javascript:` URL](/de/docs/Web/URI/Reference/Schemes/javascript) ausgeführt werden, erben den Ursprung des Dokuments, das diese URL enthält, da diese URL-Typen keine Informationen über einen Ursprungsserver enthalten.

Zum Beispiel wird `about:blank` oft als URL für neue, leere Popup-Fenster verwendet, in die das übergeordnete Skript Inhalte schreibt (z. B. über den [`Window.open()`](/de/docs/Web/API/Window/open) Mechanismus). Wenn dieses Popup auch JavaScript enthält, würde dieses Skript denselben Ursprung erben wie das Skript, das es erstellt hat.

`data:` URLs erhalten einen neuen, leeren, Sicherheitskontext.

### Datei-Ursprünge

Moderne Browser behandeln den Ursprung von Dateien, die mit dem `file:///` Schema geladen werden, in der Regel als _unklare Ursprünge_.
Das bedeutet, dass, wenn eine Datei andere Dateien aus demselben Ordner (beispielsweise) einbezieht, sie nicht als vom selben Ursprung angesehen werden und möglicherweise {{Glossary("CORS", "CORS")}} Fehler auslösen.

Beachten Sie, dass die [URL-Spezifikation](https://url.spec.whatwg.org/#origin) besagt, dass der Ursprung von Dateien implementierungsabhängig ist, und einige Browser möglicherweise Dateien im gleichen Verzeichnis oder Unterverzeichnis als gleichartigen Ursprung behandeln, auch wenn dies [Sicherheitsimplikationen](https://www.mozilla.org/en-US/security/advisories/mfsa2019-21/#CVE-2019-11730) hat.

## Änderung des Ursprungs

> [!WARNING]
> Der hier beschriebene Ansatz (unter Verwendung des [`document.domain`](/de/docs/Web/API/Document/domain) Setters) ist veraltet, da er die durch die Same-Origin-Policy bereitgestellten Sicherheitsvorkehrungen untergräbt und das Ursprungsmodell in Browsern kompliziert, was zu Interoperabilitätsproblemen und Sicherheitslücken führt.

Eine Seite kann mit einigen Einschränkungen ihren eigenen Ursprung ändern. Ein Skript kann den Wert von [`document.domain`](/de/docs/Web/API/Document/domain) auf seine aktuelle Domain oder eine Superdomain seiner aktuellen Domain setzen. Wenn es auf eine Superdomain der aktuellen Domain gesetzt ist, wird die kürzere Superdomain für Überprüfungen desselben Ursprungs verwendet.

Beispielsweise, wenn ein Skript aus dem Dokument unter `http://store.company.com/dir/other.html` folgendes ausführt:

```js
document.domain = "company.com";
```

Danach kann die Seite die Überprüfung desselben Ursprungs mit `http://company.com/dir/page.html` bestehen (vorausgesetzt, `http://company.com/dir/page.html` setzt sein `document.domain` auf `"company.com"`, um anzuzeigen, dass es dies zulassen möchte - siehe [`document.domain`](/de/docs/Web/API/Document/domain) für mehr). Allerdings könnte `company.com` **nicht** `document.domain` auf `othercompany.com` setzen, da das keine Superdomain von `company.com` ist.

Die Portnummer wird separat vom Browser überprüft. Jeder Aufruf von `document.domain`, einschließlich `document.domain = document.domain`, bewirkt, dass die Portnummer mit `null` überschrieben wird. Daher **kann** man nicht `company.com:8080` mit `company.com` allein durch das Setzen von `document.domain = "company.com"` im ersten kommunizieren lassen. Es muss in beiden gesetzt werden, damit ihre Portnummern beide `null` sind.

Der Mechanismus hat einige Einschränkungen. Zum Beispiel wird er einen `SecurityError` [`DOMException`](/de/docs/Web/API/DOMException) werfen, wenn das [`document-domain`](/de/docs/Web/HTTP/Reference/Headers/Permissions-Policy/document-domain) [`Permissions-Policy`](/de/docs/Web/HTTP/Reference/Headers/Permissions-Policy) aktiviert ist oder das Dokument in einem sandboxed [`<iframe>`](/de/docs/Web/HTML/Reference/Elements/iframe) ist, und die Änderung des Ursprungs auf diese Weise beeinflusst nicht die Ursprungsüberprüfungen, die von vielen Web-APIs verwendet werden (z. B. [`localStorage`](/de/docs/Web/API/Window/localStorage), [`indexedDB`](/de/docs/Web/API/IndexedDB_API), [`BroadcastChannel`](/de/docs/Web/API/BroadcastChannel), [`SharedWorker`](/de/docs/Web/API/SharedWorker)). Eine umfangreichere Liste von Fehlschlägen finden Sie in [Document.domain > Failures](/de/docs/Web/API/Document/domain#failures).

> [!NOTE]
> Wenn Sie `document.domain` verwenden, um einem Subdomain den Zugriff auf die übergeordnete Domain zu ermöglichen, müssen Sie `document.domain` auf den _gleichen Wert_ sowohl in der übergeordneten Domain als auch in der Subdomain setzen. Dies ist notwendig, auch wenn dadurch die übergeordnete Domain auf ihren ursprünglichen Wert zurückgesetzt wird. Ein Versäumnis dies zu tun, kann zu Berechtigungsfehlern führen.

## Netzwerkzugriff über Ursprungsgrenzen hinweg

Die Same-Origin-Policy steuert Interaktionen zwischen zwei verschiedenen Ursprüngen, wie z.B. wenn Sie [`fetch()`](/de/docs/Web/API/Window/fetch) oder ein {{htmlelement("img")}} Element verwenden. Diese Interaktionen werden typischerweise in drei Kategorien eingeteilt:

- _Schreibzugriffe_ über Ursprungsgrenzen hinweg sind typischerweise erlaubt. Beispiele sind Links, Weiterleitungen und Formularübermittlungen. Einige HTTP-Anfragen erfordern [Preflight](/de/docs/Web/HTTP/Guides/CORS#preflighted_requests).
- _Einbettungen_ über Ursprungsgrenzen hinweg sind typischerweise erlaubt. (Beispiele sind unten aufgeführt.)
- _Lesezugriffe_ über Ursprungsgrenzen hinweg sind typischerweise nicht erlaubt, aber Lesezugriffe werden häufig durch Einbettung geleakt. Beispielsweise können Sie die Abmessungen eines eingebetteten Bildes, die Aktionen eines eingebetteten Skripts oder die [Verfügbarkeit einer eingebetteten Ressource](https://bugzil.la/629094) lesen.

Hier sind einige Beispiele für Ressourcen, die über Ursprungsgrenzen hinweg eingebettet werden können:

- JavaScript mit `<script src="…"></script>`. Fehlermeldungen für Syntaxfehler sind nur für Skripte desselben Ursprungs verfügbar.
- CSS angewendet mit `<link rel="stylesheet" href="…">`. Aufgrund der entspannten Syntaxregeln von CSS erfordert CSS über Ursprungsgrenzen hinweg einen korrekten `Content-Type` Header. Browser blockieren das Laden von Stylesheets, wenn es sich um ein Laden über Ursprungsgrenzen hinweg handelt, wo der MIME-Typ falsch ist und die Ressource nicht mit einem gültigen CSS-Konstrukt beginnt.
- Bilder angezeigt durch {{htmlelement("img")}}.
- Medien abgespielt durch {{htmlelement("video")}} und {{htmlelement("audio")}}.
- Externe Ressourcen eingebettet mit {{htmlelement("object")}} und {{htmlelement("embed")}}.
- Schriftarten angewendet mit {{cssxref("@font-face")}}. Einige Browser erlauben Schriftarten über Ursprungsgrenzen, andere erfordern den gleichen Ursprung.
- Alles eingebettet durch {{htmlelement("iframe")}}. Websites können den {{HTTPHeader("X-Frame-Options")}} Header verwenden, um das Einrahmen über Ursprungsgrenzen zu verhindern.

### Anleitung zur Erlaubnis von Zugriff über Ursprungsgrenzen hinweg

Verwenden Sie [CORS](/de/docs/Web/HTTP/Guides/CORS), um den Zugriff über Ursprungsgrenzen hinweg zu erlauben. CORS ist ein Teil von {{Glossary("HTTP", "HTTP")}}, der es Servern ermöglicht, spezifische andere Hosts anzugeben, von denen ein Browser das Laden von Inhalten erlauben soll.

### Anleitung zur Blockierung des Zugriffs über Ursprungsgrenzen hinweg

- Um Schreibzugriffe über Ursprungsgrenzen hinweg zu verhindern, prüfen Sie ein nicht erratbares Token in der Anfrage – bekannt als [Cross-Site Request Forgery (CSRF)](https://owasp.org/www-community/attacks/csrf) Token. Sie müssen Lesezugriffe auf Seiten verhindern, die dieses Token erfordern.
- Um Lesezugriffe über Ursprungsgrenzen auf eine Ressource zu verhindern, stellen Sie sicher, dass sie nicht eingebettet werden kann. Es ist oft notwendig, das Einbetten zu verhindern, da das Einbetten einer Ressource immer einige Informationen darüber leakt.
- Um Einbettungen über Ursprungsgrenzen hinweg zu verhindern, stellen Sie sicher, dass Ihre Ressource nicht als eines der oben aufgeführten einbettbaren Formate interpretiert werden kann. Browser respektieren möglicherweise nicht den `Content-Type` Header. Beispielsweise, wenn Sie ein `<script>` Tag auf ein HTML-Dokument verweisen, wird der Browser versuchen, das HTML als JavaScript zu interpretieren. Wenn Ihre Ressource kein Einstiegspunkt Ihrer Website ist, können Sie auch ein CSRF-Token verwenden, um das Einbetten zu verhindern.

## Skript-API-Zugriff über Ursprungsgrenzen

JavaScript-APIs wie [`iframe.contentWindow`](/de/docs/Web/API/HTMLIFrameElement/contentWindow), [`window.parent`](/de/docs/Web/API/Window/parent), [`window.open`](/de/docs/Web/API/Window/open), und [`window.opener`](/de/docs/Web/API/Window/opener) ermöglichen es Dokumenten, direkt aufeinander zu verweisen. Wenn zwei Dokumente nicht denselben Ursprung haben, bieten diese Verweise nur sehr eingeschränkten Zugriff auf [`Window`](/de/docs/Web/API/Window) und [`Location`](/de/docs/Web/API/Location) Objekte, wie in den nächsten beiden Abschnitten beschrieben.

Um zwischen Dokumenten von verschiedenen Ursprüngen zu kommunizieren, verwenden Sie [`window.postMessage`](/de/docs/Web/API/Window/postMessage).

Spezifikation: [HTML Living Standard § Cross-origin objects](https://html.spec.whatwg.org/multipage/browsers.html#cross-origin-objects).

### Window

Der folgende Zugriff über Ursprungsgrenzen auf diese `Window` Eigenschaften ist erlaubt:

| Methoden                                                    |
| ----------------------------------------------------------- |
| [`window.blur`](/de/docs/Web/API/Window/blur)               |
| [`window.close`](/de/docs/Web/API/Window/close)             |
| [`window.focus`](/de/docs/Web/API/Window/focus)             |
| [`window.postMessage`](/de/docs/Web/API/Window/postMessage) |

| Attribute                                             |                  |
| ----------------------------------------------------- | ---------------- |
| [`window.closed`](/de/docs/Web/API/Window/closed)     | Nur Lesen.       |
| [`window.frames`](/de/docs/Web/API/Window/frames)     | Nur Lesen.       |
| [`window.length`](/de/docs/Web/API/Window/length)     | Nur Lesen.       |
| [`window.location`](/de/docs/Web/API/Window/location) | Lesen/Schreiben. |
| [`window.opener`](/de/docs/Web/API/Window/opener)     | Nur Lesen.       |
| [`window.parent`](/de/docs/Web/API/Window/parent)     | Nur Lesen.       |
| [`window.self`](/de/docs/Web/API/Window/self)         | Nur Lesen.       |
| [`window.top`](/de/docs/Web/API/Window/top)           | Nur Lesen.       |
| [`window.window`](/de/docs/Web/API/Window/window)     | Nur Lesen.       |

Einige Browser erlauben den Zugriff auf mehr Eigenschaften als die oben genannten.

### Location

Der folgende Zugriff über Ursprungsgrenzen auf `Location` Eigenschaften ist erlaubt:

| Methoden                                                |
| ------------------------------------------------------- |
| [`location.replace`](/de/docs/Web/API/Location/replace) |

| Attribute                                         |                |
| ------------------------------------------------- | -------------- |
| [`location.href`](/de/docs/Web/API/Location/href) | Nur Schreiben. |

Einige Browser erlauben den Zugriff auf mehr Eigenschaften als die oben genannten.

## Zugriff auf Datenspeicherung über Ursprungsgrenzen

Der Zugriff auf im Browser gespeicherte Daten wie [Web Storage](/de/docs/Web/API/Web_Storage_API) und [IndexedDB](/de/docs/Web/API/IndexedDB_API) ist nach Ursprung getrennt. Jeder Ursprung erhält einen eigenen separaten Speicher, und JavaScript in einem Ursprung kann nicht auf den Speicher eines anderen Ursprungs zugreifen oder darin schreiben.

{{Glossary("Cookie", "Cookies")}} verwenden eine separate Definition von Ursprüngen. Eine Seite kann ein Cookie für ihre eigene Domain oder jede übergeordnete Domain setzen, solange die übergeordnete Domain kein öffentlicher Suffix ist. Firefox und Chrome verwenden die [Public Suffix List](https://publicsuffix.org/), um zu bestimmen, ob eine Domain ein öffentlicher Suffix ist. Beim Setzen eines Cookies können Sie dessen Verfügbarkeit mit den Flags `Domain`, `Path`, `Secure` und `HttpOnly` einschränken. Beim Lesen eines Cookies können Sie nicht sehen, woher es gesetzt wurde. Auch wenn Sie nur sichere HTTPS-Verbindungen verwenden, kann jedes Cookie, das Sie sehen, mit einer unsicheren Verbindung gesetzt worden sein.

## Siehe auch

- [Same Origin Policy bei W3C](https://www.w3.org/Security/wiki/Same_Origin_Policy)
- [Same-origin policy bei web.dev](https://web.dev/articles/same-origin-policy)
- {{httpheader("Cross-Origin-Resource-Policy")}}
- {{httpheader("Cross-Origin-Embedder-Policy")}}
