---
title: Same-Origin-Policy
slug: Web/Security/Same-origin_policy
l10n:
  sourceCommit: ade8d870ed7e18a71dc51fe25aa13d812fb82558
---

Die **Same-Origin-Policy** ist ein kritischer Sicherheitsmechanismus, der einschränkt, wie ein Dokument oder Skript, das von einem {{Glossary("origin", "Ursprung")}} geladen wird, mit einer Ressource von einem anderen Ursprung interagieren kann.

Er hilft, potenziell schädliche Dokumente zu isolieren und mögliche Angriffspunkte zu reduzieren. Zum Beispiel verhindert er, dass eine bösartige Website im Internet JavaScript in einem Browser ausführt, um Daten von einem Drittanbieter-Webmail-Dienst (bei dem der Benutzer angemeldet ist) oder einem Unternehmens-Intranet (das vor direktem Zugriff durch den Angreifer geschützt ist, da es keine öffentliche IP-Adresse hat) zu lesen und diese Daten an den Angreifer weiterzuleiten.

## Definition eines Ursprungs

Zwei URLs haben denselben _Ursprung_, wenn das {{Glossary("protocol", "Protokoll")}}, der {{Glossary("port", "Port")}} (falls angegeben) und der {{Glossary("host", "Host")}} für beide gleich sind. Dies wird oft als "Schema/Host/Port-Tupel" oder einfach "Tupel" bezeichnet. (Ein "Tupel" ist eine Menge von Elementen, die zusammen ein Ganzes bilden — eine generische Form für Doppel/Dreifach/Vierfach/Fünffach/usw.)

Die folgende Tabelle gibt Beispiele für Ursprungsvergleiche mit der URL `http://store.company.com/dir/page.html`:

| URL                                               | Ergebnis          | Grund                                                        |
| ------------------------------------------------- | ----------------- | ------------------------------------------------------------ |
| `http://store.company.com/dir2/other.html`        | Gleicher Ursprung | Nur der Pfad unterscheidet sich                              |
| `http://store.company.com/dir/inner/another.html` | Gleicher Ursprung | Nur der Pfad unterscheidet sich                              |
| `https://store.company.com/page.html`             | Fehler            | Unterschiedliches Protokoll                                  |
| `http://store.company.com:81/dir/page.html`       | Fehler            | Unterschiedlicher Port (`http://` ist standardmäßig Port 80) |
| `http://news.company.com/dir/page.html`           | Fehler            | Unterschiedlicher Host                                       |

### Geerbte Ursprünge

Von Seiten mit einer `about:blank` oder [`javascript:` URL](/de/docs/Web/URI/Reference/Schemes/javascript) ausgeführte Skripte erben den Ursprung des Dokuments, das diese URL enthält, da diese Arten von URLs keine Informationen über einen Ursprungsserver enthalten.

Zum Beispiel wird `about:blank` oft als URL für neue, leere Popup-Fenster verwendet, in die das übergeordnete Skript Inhalte schreibt (z. B. über den Mechanismus [`Window.open()`](/de/docs/Web/API/Window/open)). Wenn dieses Popup ebenfalls JavaScript enthält, würde dieses Skript denselben Ursprung erben wie das Skript, das es erstellt hat.

`data:` URLs erhalten einen neuen, leeren Sicherheitskontext.

### Dateiorsprünge

Moderne Browser behandeln den Ursprung von Dateien, die mit dem `file:///`-Schema geladen wurden, normalerweise als _undurchsichtige Ursprünge_.
Das bedeutet, dass wenn eine Datei andere Dateien aus demselben Ordner (zum Beispiel) einbezieht, sie nicht als vom selben Ursprung kommend angesehen werden, und es können {{Glossary("CORS", "CORS")}}-Fehler auftreten.

Zu beachten ist, dass die [URL-Spezifikation](https://url.spec.whatwg.org/#origin) besagt, dass der Ursprung von Dateien implementierungsabhängig ist, und einige Browser können Dateien im selben Verzeichnis oder Unterverzeichnis als gleichen Ursprung behandeln, obwohl dies [Sicherheitsimplikationen](https://www.mozilla.org/en-US/security/advisories/mfsa2019-21/#CVE-2019-11730) hat.

## Ursprung ändern

> [!WARNING]
> Die hier beschriebene Vorgehensweise (Verwendung des [`document.domain`](/de/docs/Web/API/Document/domain) Setters) ist veraltet, da sie die von der Same-Origin-Policy bereitgestellten Sicherheitsmaßnahmen untergräbt und das Ursprungsmodell in Browsern kompliziert, was zu Interoperabilitätsproblemen und Sicherheitsfehlern führt.

Eine Seite kann ihren eigenen Ursprung ändern, mit einigen Einschränkungen. Ein Skript kann den Wert von [`document.domain`](/de/docs/Web/API/Document/domain) auf seine aktuelle Domain oder eine Überdomain seiner aktuellen Domain setzen. Wenn es auf eine Überdomain der aktuellen Domain gesetzt wird, wird die kürzere Überdomain für Same-Origin-Überprüfungen verwendet.

Zum Beispiel, nehmen wir an, ein Skript aus dem Dokument unter `http://store.company.com/dir/other.html` führt folgendes aus:

```js
document.domain = "company.com";
```

Danach kann die Seite die Same-Origin-Überprüfung mit `http://company.com/dir/page.html` bestehen (vorausgesetzt, `http://company.com/dir/page.html` setzt sein `document.domain` auf `"company.com"`, um anzugeben, dass dies erlaubt werden soll - siehe [`document.domain`](/de/docs/Web/API/Document/domain) für mehr). `company.com` könnte jedoch **nicht** `document.domain` auf `othercompany.com` setzen, da dies keine Überdomain von `company.com` ist.

Die Portnummer wird von dem Browser separat überprüft. Jeder Aufruf von `document.domain`, einschließlich `document.domain = document.domain`, überschreibt die Portnummer mit `null`. Daher kann man **nicht** `company.com:8080` nur durch das Setzen von `document.domain = "company.com"` im ersten Fall mit `company.com` sprechen lassen. Es muss in beiden gesetzt sein, damit ihre Portnummern beide `null` sind.

Der Mechanismus hat einige Einschränkungen. Zum Beispiel, er wirft einen `SecurityError` [`DOMException`](/de/docs/Web/API/DOMException), wenn die [`document-domain`](/de/docs/Web/HTTP/Reference/Headers/Permissions-Policy/document-domain) [`Permissions-Policy`](/de/docs/Web/HTTP/Reference/Headers/Permissions-Policy) aktiviert ist oder das Dokument in einem sandboxed [`<iframe>`](/de/docs/Web/HTML/Reference/Elements/iframe) ist, und das Ändern des Ursprungs auf diese Weise beeinflusst nicht die von vielen Web-APIs verwendeten Ursprungschecks (z. B. [`localStorage`](/de/docs/Web/API/Window/localStorage), [`indexedDB`](/de/docs/Web/API/IndexedDB_API), [`BroadcastChannel`](/de/docs/Web/API/BroadcastChannel), [`SharedWorker`](/de/docs/Web/API/SharedWorker)). Eine umfassendere Liste von Fehlerfällen finden Sie in [Document.domain > Failures](/de/docs/Web/API/Document/domain#failures).

> [!NOTE]
> Wenn Sie `document.domain` verwenden, um einem Subdomain den Zugriff auf seine übergeordnete Domain zu gewähren, müssen Sie `document.domain` auf denselben Wert sowohl in der übergeordneten Domain als auch in der Subdomain setzen. Dies ist notwendig, selbst wenn durch das Zurücksetzen der übergeordneten Domain auf ihren ursprünglichen Wert. Wenn Sie dies nicht tun, können Berechtigungsfehler auftreten.

## Netzwerkzugriff zwischen unterschiedlichen Ursprüngen

Die Same-Origin-Policy steuert Interaktionen zwischen zwei unterschiedlichen Ursprüngen, wie beim Verwenden von [`fetch()`](/de/docs/Web/API/Window/fetch) oder einem {{htmlelement("img")}}-Element. Diese Interaktionen werden typischerweise in drei Kategorien unterteilt:

- _Schreiben_ zwischen Ursprüngen ist typischerweise erlaubt. Beispiele sind Links, Weiterleitungen und Formularübermittlungen. Einige HTTP-Anfragen erfordern eine [Preflight](/de/docs/Web/HTTP/Guides/CORS#preflighted_requests).
- _Einbetten_ zwischen Ursprüngen ist typischerweise erlaubt. (Beispiele sind unten aufgeführt.)
- _Lesen_ zwischen Ursprüngen ist typischerweise nicht erlaubt, aber der Lesezugriff wird häufig durch Einbettung geleakt. Zum Beispiel können Sie die Dimensionen eines eingebetteten Bildes, die Aktionen eines eingebetteten Skripts oder die [Verfügbarkeit einer eingebetteten Ressource](https://bugzil.la/629094) lesen.

Hier sind einige Beispiele für Ressourcen, die über Ursprünge hinweg eingebettet werden können:

- JavaScript mit `<script src="…"></script>`. Fehlerdetails für Syntaxfehler sind nur für Skripte des gleichen Ursprungs verfügbar.
- CSS, angewandt mit `<link rel="stylesheet" href="…">`. Aufgrund der entspannten Syntaxregeln von CSS erfordert CSS zwischen Ursprüngen einen korrekten `Content-Type`-Header. Browser blockieren das Laden von Stylesheets, wenn es sich um ein Laden zwischen Ursprüngen handelt, bei dem der MIME-Typ falsch ist und die Ressource nicht mit einem gültigen CSS-Konstrukt beginnt.
- Bilder, die durch {{htmlelement("img")}} angezeigt werden.
- Medien, die durch {{htmlelement("video")}} und {{htmlelement("audio")}} abgespielt werden.
- Externe Ressourcen, die mit {{htmlelement("object")}} und {{htmlelement("embed")}} eingebettet werden.
- Schriften, die mit {{cssxref("@font-face")}} angewendet werden. Einige Browser erlauben Schriften zwischen Ursprüngen, andere erfordern den gleichen Ursprung.
- Alles, was durch {{htmlelement("iframe")}} eingebettet wird. Websites können den {{HTTPHeader("X-Frame-Options")}}-Header verwenden, um die Einbettung über Ursprünge hinweg zu verhindern.

### Wie man Zugriff über Ursprünge erlaubt

Verwenden Sie [CORS](/de/docs/Web/HTTP/Guides/CORS), um den Zugriff über Ursprünge hinweg zu erlauben. CORS ist Teil von {{Glossary("HTTP", "HTTP")}}, der es Servern ermöglicht, andere Hosts anzugeben, von denen ein Browser das Laden von Inhalten erlauben soll.

### Wie man Zugriff über Ursprünge blockiert

- Um Schreiben zwischen Ursprüngen zu verhindern, überprüfen Sie ein unvorhersehbares Token in der Anfrage — bekannt als [Cross-Site Request Forgery (CSRF)](https://owasp.org/www-community/attacks/csrf)-Token. Sie müssen das Lesen von Seiten verhindern, die dieses Token erfordern.
- Um das Lesen zwischen Ursprüngen einer Ressource zu verhindern, stellen Sie sicher, dass sie nicht einbettbar ist. Es ist oft notwendig, das Einbetten zu verhindern, da das Einbetten einer Ressource immer einige Informationen darüber leakt.
- Um das Einbetten zwischen Ursprüngen zu verhindern, stellen Sie sicher, dass Ihre Ressource nicht als eines der oben aufgeführten einbettbaren Formate interpretiert werden kann. Browser respektieren möglicherweise nicht den `Content-Type`-Header. Zum Beispiel, wenn Sie ein `<script>`-Tag auf ein HTML-Dokument verweisen, wird der Browser versuchen, das HTML als JavaScript zu parsen. Wenn Ihre Ressource kein Einstiegspunkt Ihrer Website ist, können Sie auch ein CSRF-Token verwenden, um das Einbetten zu verhindern.

## Skript-API-Zugriff zwischen Ursprüngen

JavaScript-APIs wie [`iframe.contentWindow`](/de/docs/Web/API/HTMLIFrameElement/contentWindow), [`window.parent`](/de/docs/Web/API/Window/parent), [`window.open`](/de/docs/Web/API/Window/open) und [`window.opener`](/de/docs/Web/API/Window/opener) erlauben es Dokumenten, sich direkt aufeinander zu beziehen. Wenn zwei Dokumente nicht denselben Ursprung haben, bieten diese Referenzen nur begrenzten Zugriff auf [`Window`](/de/docs/Web/API/Window)- und [`Location`](/de/docs/Web/API/Location)-Objekte, wie in den nächsten beiden Abschnitten beschrieben.

Um zwischen Dokumenten von unterschiedlichen Ursprüngen zu kommunizieren, verwenden Sie [`window.postMessage`](/de/docs/Web/API/Window/postMessage).

Spezifikation: [HTML Living Standard § Cross-origin objects](https://html.spec.whatwg.org/multipage/browsers.html#cross-origin-objects).

### Window

Folgender Zugriff auf `Window`-Eigenschaften zwischen Ursprüngen ist erlaubt:

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

Folgender Zugriff auf `Location`-Eigenschaften zwischen Ursprüngen ist erlaubt:

| Methoden                                                |
| ------------------------------------------------------- |
| [`location.replace`](/de/docs/Web/API/Location/replace) |

| Attribute                                         |                   |
| ------------------------------------------------- | ----------------- |
| [`location.href`](/de/docs/Web/API/Location/href) | Schreibgeschützt. |

Einige Browser erlauben den Zugriff auf mehr Eigenschaften als die oben genannten.

## Datenzugriff über Ursprünge hinweg

Der Zugriff auf im Browser gespeicherte Daten wie [Web Storage](/de/docs/Web/API/Web_Storage_API) und [IndexedDB](/de/docs/Web/API/IndexedDB_API) wird nach Ursprung getrennt. Jeder Ursprung erhält seinen eigenen separaten Speicher, und JavaScript in einem Ursprung kann nicht in den Speicher eines anderen Ursprungs lesen oder schreiben.

{{Glossary("Cookie", "Cookies")}} verwenden eine separate Definition von Ursprüngen. Eine Seite kann ein Cookie für ihre eigene Domain oder eine übergeordnete Domain setzen, solange die übergeordnete Domain nicht ein öffentlicher Suffix ist. Firefox und Chrome verwenden die [Public Suffix List](https://publicsuffix.org/), um zu bestimmen, ob eine Domain ein öffentlicher Suffix ist. Wenn Sie ein Cookie setzen, können Sie seine Verfügbarkeit mit den `Domain`, `Path`, `Secure`, und `HttpOnly`-Flags begrenzen. Wenn Sie ein Cookie lesen, können Sie nicht sehen, von wo es gesetzt wurde. Selbst wenn Sie nur sichere https-Verbindungen verwenden, kann jedes Cookie, das Sie sehen, über eine unsichere Verbindung gesetzt worden sein.

## Siehe auch

- [Same Origin Policy bei W3C](https://www.w3.org/Security/wiki/Same_Origin_Policy)
- [Same-origin policy bei web.dev](https://web.dev/articles/same-origin-policy)
- {{httpheader("Cross-Origin-Resource-Policy")}}
- {{httpheader("Cross-Origin-Embedder-Policy")}}
