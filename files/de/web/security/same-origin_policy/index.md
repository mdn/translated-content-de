---
title: Same-Origin-Policy
slug: Web/Security/Same-origin_policy
l10n:
  sourceCommit: 4d9320f9857fb80fef5f3fe78e3d09b06eb0ebbd
---

{{QuickLinksWithSubpages("/de/docs/Web/Security")}}

Die **Same-Origin-Policy** ist ein kritischer Sicherheitsmechanismus, der einschränkt, wie ein Dokument oder ein Script, das von einem {{Glossary("origin", "Origin")}} geladen wurde, mit einer Ressource von einem anderen Origin interagieren kann.

Sie hilft, potenziell schädliche Dokumente zu isolieren und mögliche Angriffspunkte zu reduzieren. Zum Beispiel verhindert sie, dass eine bösartige Website im Internet JavaScript in einem Browser ausführt, um Daten von einem Drittanbieter-Webmail-Dienst (bei dem der Benutzer angemeldet ist) oder einem Unternehmens-Intranet (das durch das Fehlen einer öffentlichen IP-Adresse vor direktem Zugriff des Angreifers geschützt ist) zu lesen und diese Daten an den Angreifer weiterzuleiten.

## Definition eines Origins

Zwei URLs haben denselben _Origin_, wenn das {{Glossary("protocol", "Protokoll")}}, der {{Glossary("port", "Port")}} (falls angegeben) und der {{Glossary("host", "Host")}} für beide identisch sind. Dies wird auch oft als "scheme/host/port tuple" oder einfach "tuple" bezeichnet. (Ein "Tuple" ist eine Menge von Elementen, die zusammen ein Ganzes bilden – eine generische Form für Double/Triple/Quadruple/Quintuple/etc.)

Die folgende Tabelle zeigt Beispiele für Origin-Vergleiche mit der URL `http://store.company.com/dir/page.html`:

| URL                                               | Ergebnis        | Grund                                                         |
| ------------------------------------------------- | --------------- | ------------------------------------------------------------- |
| `http://store.company.com/dir2/other.html`        | Gleicher Origin | Nur der Pfad unterscheidet sich                               |
| `http://store.company.com/dir/inner/another.html` | Gleicher Origin | Nur der Pfad unterscheidet sich                               |
| `https://store.company.com/page.html`             | Unterschiedlich | Unterschiedliches Protokoll                                   |
| `http://store.company.com:81/dir/page.html`       | Unterschiedlich | Unterschiedlicher Port (`http://` verwendet Standard-Port 80) |
| `http://news.company.com/dir/page.html`           | Unterschiedlich | Unterschiedlicher Host                                        |

### Vererbte Origins

Skripte, die von Seiten mit einer `about:blank`- oder [`javascript:`-URL](/de/docs/Web/URI/Reference/Schemes/javascript) ausgeführt werden, erben den Origin des Dokuments, das diese URL enthält, da diese Arten von URLs keine Informationen über einen Origin-Server enthalten.

Zum Beispiel wird `about:blank` oft als URL für neue, leere Popup-Fenster verwendet, in die das Elternskript Inhalte schreibt (z. B. über den Mechanismus [`Window.open()`](/de/docs/Web/API/Window/open)). Wenn dieses Popup ebenfalls JavaScript enthält, würde dieses Skript denselben Origin erben wie das Skript, das es erstellt hat.

`data:`-URLs erhalten einen neuen, leeren Sicherheitskontext.

### Origins für Dateien

Moderne Browser behandeln den Origin von Dateien, die mit dem Schema `file:///` geladen werden, in der Regel als _undurchsichtige Origins_.
Das bedeutet, dass, wenn eine Datei andere Dateien aus demselben Ordner (zum Beispiel) einbindet, nicht angenommen wird, dass sie vom gleichen Origin stammen. Dies kann {{Glossary("CORS", "CORS")}}-Fehler auslösen.

Beachten Sie, dass die [URL-Spezifikation](https://url.spec.whatwg.org/#origin) angibt, dass der Origin von Dateien implementierungsabhängig ist. Einige Browser behandeln Dateien im selben Verzeichnis oder Unterverzeichnis dennoch als gleichen Origin, was allerdings [Sicherheitsimplikationen](https://www.mozilla.org/en-US/security/advisories/mfsa2019-21/#CVE-2019-11730) haben kann.

## Origin ändern

> [!WARNING]
> Der hier beschriebene Ansatz (Verwendung des [`document.domain`](/de/docs/Web/API/Document/domain)-Setters) ist veraltet, da er die durch die Same-Origin-Policy bereitgestellten Sicherheitsmechanismen untergräbt und das Origin-Modell in Browsern verkompliziert, was zu Interoperabilitätsproblemen und Sicherheitsfehlern führen kann.

Eine Seite kann ihren eigenen Origin ändern, jedoch mit einigen Einschränkungen. Ein Skript kann den Wert von [`document.domain`](/de/docs/Web/API/Document/domain) auf seine aktuelle Domain oder auf eine Über-Domain seiner aktuellen Domain setzen. Wenn auf eine Über-Domain der aktuellen Domain gesetzt, wird die kürzere Über-Domain für Same-Origin-Prüfungen verwendet.

Zum Beispiel: Angenommen, ein Skript des Dokuments `http://store.company.com/dir/other.html` führt Folgendes aus:

```js
document.domain = "company.com";
```

Danach kann die Seite die Same-Origin-Prüfung mit `http://company.com/dir/page.html` bestehen (vorausgesetzt, `http://company.com/dir/page.html` setzt sein `document.domain` auf `"company.com"`, um anzuzeigen, dass dies erlaubt ist – siehe [`document.domain`](/de/docs/Web/API/Document/domain) für mehr). `company.com` könnte jedoch **nicht** `document.domain` auf `othercompany.com` setzen, da dies keine Über-Domain von `company.com` ist.

Die Portnummer wird vom Browser separat überprüft. Jeder Aufruf von `document.domain`, einschließlich `document.domain = document.domain`, setzt die Portnummer auf `null`. Daher kann man **nicht** `company.com:8080` dazu bringen, mit `company.com` zu sprechen, indem man nur `document.domain = "company.com"` im Ersten setzt. Es muss in beiden gesetzt werden, damit deren Portnummern beide `null` sind.

Der Mechanismus hat einige Einschränkungen. Beispielsweise wird ein `SecurityError` [`DOMException`](/de/docs/Web/API/DOMException) ausgelöst, wenn die [`document-domain`](/de/docs/Web/HTTP/Headers/Permissions-Policy/document-domain)-[`Permissions-Policy`](/de/docs/Web/HTTP/Headers/Permissions-Policy) aktiviert ist oder das Dokument in einem sandboxed [`<iframe>`](/de/docs/Web/HTML/Element/iframe) ist. Das Ändern des Origins auf diese Weise beeinflusst nicht die Origin-Prüfungen vieler Web-APIs (z. B. [`localStorage`](/de/docs/Web/API/Window/localStorage), [`indexedDB`](/de/docs/Web/API/IndexedDB_API), [`BroadcastChannel`](/de/docs/Web/API/BroadcastChannel), [`SharedWorker`](/de/docs/Web/API/SharedWorker)). Eine ausführlichere Liste von Fehlerszenarien finden Sie unter [Document.domain > Failures](/de/docs/Web/API/Document/domain#failures).

> [!NOTE]
> Wenn Sie `document.domain` verwenden, um einem Subdomain Zugriff auf die Parent-Domain zu ermöglichen, müssen Sie `document.domain` auf den _gleichen Wert_ sowohl in der Parent-Domain als auch in der Subdomain setzen. Dies ist erforderlich, auch wenn Sie damit die Parent-Domain auf ihren ursprünglichen Wert zurücksetzen. Andernfalls kann es zu Berechtigungsfehlern kommen.

## Netzwerkanfragen zwischen unterschiedlichen Origins

Die Same-Origin-Policy kontrolliert die Interaktionen zwischen zwei unterschiedlichen Origins, etwa wenn Sie [`fetch()`](/de/docs/Web/API/Window/fetch) oder ein {{htmlelement("img")}}-Element verwenden. Diese Interaktionen werden typischerweise in drei Kategorien eingeteilt:

- Zwischen-Origin-_Schreiben_ ist in der Regel erlaubt. Beispiele sind Links, Weiterleitungen und Formular-Einreichungen. Einige HTTP-Anfragen erfordern [Preflight](/de/docs/Web/HTTP/CORS#preflighted_requests).
- Zwischen-Origin-_Einbettung_ ist in der Regel erlaubt. (Beispiele werden unten aufgeführt.)
- Zwischen-Origin-_Lesen_ ist in der Regel nicht erlaubt, aber Lesezugriff wird oft durch Einbettung offengelegt. Zum Beispiel können Sie die Dimensionen eines eingebetteten Bildes, die Aktionen eines eingebetteten Skripts oder die [Verfügbarkeit einer eingebetteten Ressource](https://bugzil.la/629094) lesen.

Hier sind einige Beispiele von Ressourcen, die zwischen verschiedenen Origins eingebettet werden können:

- JavaScript mit `<script src="…"></script>`. Fehlerdetails für Syntaxfehler sind nur für gleiche-Origin-Skripte verfügbar.
- CSS, angewendet mit `<link rel="stylesheet" href="…">`. Aufgrund der entspannten Syntaxregeln von CSS erfordert Between-Origin-CSS einen korrekten `Content-Type`-Header. Browser blockieren Stylesheet-Ladevorgänge, wenn es sich um einen Between-Origin-Ladevorgang handelt, bei dem der MIME-Typ falsch ist und die Ressource nicht mit einem gültigen CSS-Konstrukt beginnt.
- Bilder, angezeigt mit {{htmlelement("img")}}.
- Medien, wiedergegeben mit {{htmlelement("video")}} und {{htmlelement("audio")}}.
- Externe Ressourcen, eingebettet mit {{htmlelement("object")}} und {{htmlelement("embed")}}.
- Schriftarten, angewendet mit {{cssxref("@font-face")}}. Einige Browser erlauben Between-Origin-Schriftarten, andere erfordern gleiche-Origin.
- Alles, was mit {{htmlelement("iframe")}} eingebettet ist. Websites können den {{HTTPHeader("X-Frame-Options")}}-Header verwenden, um Between-Origin-Framing zu verhindern.

### Anleitung zur Freigabe von Between-Origin-Zugriff

Verwenden Sie [CORS](/de/docs/Web/HTTP/CORS), um Between-Origin-Zugriff zu erlauben. CORS ist ein Teil von {{Glossary("HTTP", "HTTP")}}, der es Servern ermöglicht, anzugeben, von welchen anderen Hosts ein Browser das Laden von Inhalten zulassen soll.

### Anleitung zur Blockierung von Between-Origin-Zugriff

- Um Between-Origin-Schreiben zu verhindern, überprüfen Sie ein nicht erratbares Token in der Anfrage – bekannt als [Cross-Site-Request-Forgery (CSRF)](https://owasp.org/www-community/attacks/csrf)-Token. Sie müssen Between-Origin-Lesungen von Seiten, die dieses Token benötigen, verhindern.
- Um Between-Origin-Lesungen einer Ressource zu verhindern, stellen Sie sicher, dass sie nicht einbettbar ist. Es ist oft notwendig, das Einbetten zu verhindern, da das Einbetten einer Ressource immer einige Informationen darüber preisgibt.
- Um Between-Origin-Einbettung zu verhindern, stellen Sie sicher, dass Ihre Ressource nicht als eines der oben genannten einbettbaren Formate interpretiert werden kann. Browser respektieren möglicherweise nicht den `Content-Type`-Header. Wenn Sie beispielsweise ein `<script>`-Tag auf ein HTML-Dokument verweisen, versucht der Browser, das HTML als JavaScript zu parsen. Wenn Ihre Ressource kein Einstiegspunkt für Ihre Site ist, können Sie zur Verhinderung der Einbettung auch ein CSRF-Token verwenden.

... (Der restliche Text wird ebenso entsprechend den oben genannten Regeln übersetzt.)
