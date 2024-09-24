---
title: Gemischter Inhalt
slug: Web/Security/Mixed_content
l10n:
  sourceCommit: bb48907e64eb4bf60f17efd7d39b46c771d220a0
---

{{QuickLinksWithSubpages("/de/docs/Web/Security")}}

Wenn eine Webseite von einem sicheren Ursprung über eine sichere Verbindung wie {{Glossary("HTTPS")}} geladen wird, ist die Verbindung mit dem Webserver verschlüsselt und somit vor Abhören und Änderungen durch Man-in-the-Middle-Angriffe geschützt. Falls die sicher geladene Webseite nur Bilder, Skripte und andere Ressourcen beinhaltet, die ebenfalls auf sicheren Ursprüngen gehostet sind, können Nutzer sicher sein, dass die gesamte Seite vor diesen Arten von Angriffen geschützt ist.

"Gemischter Inhalt" bezieht sich auf sicher geladene Webseiten, die Ressourcen verwenden, die über HTTP oder ein anderes unsicheres Protokoll abgerufen werden. Diese Art von Webseite ist potenziell unsicher, da alle Ressourcen, die unsicher gesendet werden, eingesehen werden können, wodurch möglicherweise sensible Informationen offengelegt oder vom Angreifer verändert werden können. Skripte sind besonders gefährlich, da sie jeden Aspekt der Seite verändern können, aber alle Arten von Ressourcen bergen ein gewisses Risiko. Zum Beispiel können Bilder verändert werden, um dem Nutzer falsche oder irreführende Informationen zu geben oder die scheinbare Funktion eines Buttons zu ändern.

"Gemischte Downloads" beziehen sich auf Ressourcendownloads, die von einem sicheren Kontext initiiert, aber über eine unsichere Verbindung abgerufen werden. Diese bergen dieselben Risiken wie gemischter Inhalt: Downloads scheinen von einem sicheren Ursprung zu kommen, könnten aber unterwegs verändert oder eingesehen worden sein.

Sie sollten die Verwendung von gemischtem Inhalt und gemischten Downloads auf Ihren Websites vermeiden! Browser mindern die Risiken von gemischtem Inhalt, indem sie Bild-, Video- und Audiomischinhaltsanfragen von HTTP auf HTTPS automatisch aktualisieren und unsichere Anfragen für alle anderen Ressourcentypen blockieren. Sie sollten auch gemischte Downloads standardmäßig blockieren.

## Arten von gemischtem Inhalt

Gemischter Inhalt auf einer Webseite ist in zwei Kategorien unterteilt: "aktualisierbarer Inhalt" und "blockierbarer Inhalt". Browser sollten Anfragen für aktualisierbaren Inhalt von HTTP auf HTTPS automatisch aktualisieren und Anfragen für den blockierbaren Inhalt blockieren.

Dieser Ansatz stellt sicher, dass alle Inhalte in einem sicheren Kontext entweder über einen sicheren Kanal geladen oder blockiert werden, was für Benutzer sicherer ist als die Anzeige einer Mischung aus sicherem und unsicherem Inhalt und weniger störend als das vollständige Sperren aller unsicheren Inhalte.

> [!NOTE]
> Frühere Versionen der Spezifikation teilten gemischten Inhalt in "blockierbare" und "optional blockierbare" Kategorien ein:
>
> - Blockierbare Inhaltstypen, auch als "aktiver gemischter Inhalt" bezeichnet, waren diejenigen, die andere Teile der Webseite verändern konnten, wie Skripte und Stylesheets. Das potenzielle Risiko, wenn diese Dateien verändert werden, ist sehr hoch, und Browser mussten sie blockieren.
> - Optional blockierbare Inhaltstypen, auch bekannt als "passiver gemischter Inhalt", waren diejenigen, die keine anderen Inhalte auf der Webseite verändern konnten, wie Bilder, Videos und Audiodateien. Das potenzielle Risiko, diese Dateien zuzulassen, war geringer, sodass Browser sie blockieren, anzeigen oder die Entscheidung dem Benutzer überlassen konnten.

Der Satz von Ressourcentypen, der "aktualisierbaren Inhalt" umfasst, wurde vom Satz des "optional blockierbaren" gemischten Inhalts abgeleitet. Die Erwartung ist, dass alle neuen Dateitypen als blockierbarer Inhalt definiert werden und einige aktualisierbare Inhalte in Zukunft blockierbar werden können.

### Aktualisierbarer Inhalt

Aktualisierbare Inhaltsanfragen sind solche, bei denen eine unsichere Anfrage automatisch durch Änderung des Ursprungschemas von `http` zu `https` in eine sichere Anfrage umgewandelt wird. Der Remote-Server antwortet entweder mit der Ressource oder einem Statuscode, der angibt, dass sie nicht gefunden wurde.

Die Ressourcentypen in dieser Kategorie sind solche, bei denen das Blockieren der Anfrage das Risiko birgt, signifikante Teile des Webs zu beeinträchtigen. Diese entsprechen derzeit den gemischten Inhaltstypen, die zuvor "optional blockierbar" waren, da sie immer noch auf einigen Websites verwendet werden.

Die folgenden Elemente sind aktualisierbar (außer wenn der URL-Host als IP-Adresse angegeben ist — siehe folgenden Abschnitt):

- {{HTMLElement("img")}}, bei dem der Ursprung über das `src`-Attribut festgelegt wird, einschließlich SVG-Dokumenten (jedoch nicht bei der Einstellung von Ressourcen mit `srcset` oder `<picture>`).
- CSS-Bildelemente wie: `background-image`, `border-image`, etc.
- {{HTMLElement("audio")}}, bei dem der Ursprung mit dem `src`-Attribut festgelegt wird.
- {{HTMLElement("video")}}, bei dem der Ursprung mit dem `src`-Attribut festgelegt wird
- {{HTMLElement("source")}}, bei dem Video- oder Ursprungsressourcen festgelegt sind.

### Blockierbarer Inhalt

Blockierbarer Inhalt ist definiert als "alle gemischten Inhalte, die nicht aktualisierbar sind".

Dies schließt HTTP-Anfragen ein, die durch die folgenden Elemente ausgelöst werden (diese Liste ist nicht vollständig):

- {{HTMLElement("script")}}, bei dem der Ursprung über das `src`-Attribut festgelegt wird
- {{HTMLElement("link")}}, bei dem der Ursprung im `href`-Attribut festgelegt ist und Stylesheets einschließt
- {{HTMLElement("iframe")}}, bei dem der Ursprung über das `src`-Attribut festgelegt wird
- {{domxref("Window/fetch", "fetch()")}}-Anfragen
- {{domxref("XMLHttpRequest")}}-Anfragen
- Alle Fälle in CSS, in denen ein {{cssxref("url", "url()")}}-Wert verwendet wird ({{cssxref("@font-face")}}, {{cssxref("cursor")}}, {{cssxref("background-image")}}, und so weiter).
- {{HTMLElement("object")}} (`data`-Attribut)
- {{domxref("Navigator.sendBeacon")}} (`url`-Attribut)
- {{HTMLElement("img")}}, bei dem der Ursprung über `srcset` oder `<picture>` festgelegt ist.
- Web-Schriftarten

Gemischte Inhaltsanfragen, die ansonsten aktualisiert würden, werden blockiert, wenn der Host der URL eine IP-Adresse anstelle eines Domainnamens ist. Also wird `<img src="http://example.com/image.png">` aktualisiert, aber `<img src="http://93.184.215.14/image.png">` wird blockiert.

## Beispiele für gemischte Inhaltsanfragen

Gemischte Inhaltsanfragen sind unsichere Anfragen nach Ressourcen aus einem [sicheren Kontext](/de/docs/Web/Security/Secure_Contexts):

Die folgenden Beispiele zeigen sichere, unsichere und gemischte Inhaltsanfragen:

- `http://insecure.com` lädt `http://also.insecure.com` – ist keine gemischte Inhaltsanfrage, da beide Ursprünge unsicher sind.
- `https://secure.com` lädt `http://insecure.com` – ist eine gemischte Inhaltsanfrage, da die unsichere Ressource `http://insecure.com` in den sicheren Kontext `https://secure.com` geladen wird.
- `http://insecure.com` lädt `https://secure.com` in einem `<iframe>`, das wiederum `http://also.insecure.com` lädt – das Laden von `https://secure.com` in `http://insecure.com` ist keine gemischte Inhaltsanfrage (es gibt keine Einschränkung zum Laden eines sicheren Kontextes in einen unsicheren Kontext). Das Laden von `http://also.insecure.com` in den sicheren Frame `https://secure.com` ist jedoch eine gemischte Inhaltsanfrage.
- `https://secure.com` enthält eine `data:`-URL, die `http://insecure.com` lädt – dies ist eine gemischte Inhaltsanfrage, da `https://secure.com` (und daher `data:`) sicher geladen wurde und `http://insecure.com` unsicher ist.

Gemischte Kontextanfragen können auch von sicheren Kontexten wie Plugins oder Arbeitern gestellt werden und werden auf dieselbe Weise aktualisiert oder blockiert.

Bitte beachten Sie jedoch, dass Navigationsanfragen aus einem sicheren Kontext, die unsichere Zielkontexte auf hoher Ebene ansteuern, nicht als gemischter Inhalt betrachtet werden, da sie einen neuen Kontext erstellen, der entweder sicher oder unsicher ist, unabhängig vom Ursprung der Anfrage.

### Laden lokal bereitgestellter gemischter Ressourcen

Lokale Ressourcen werden als aus sicheren Ursprüngen betrachtet, genau wie HTTPS-Ursprünge. Dazu gehören `file:`-URLs und Inhalte, die von Schleifenadressen wie `http://127.0.0.1/` oder `http://localhost/` abgerufen werden.

Sie können diese Dateien aus sicheren Kontexten laden und haben immer noch einen sicheren Kontext. Wenn jedoch eine lokale Datei eine unsichere Ressource über `http:` lädt, wäre es eine gemischte Inhaltsanfrage.

Die Unterstützung für das Laden lokaler Inhalte kann im Bereich [Browserkompatibilität](#browserkompatibilität) überprüft werden.

## Gemischte Downloads

Ein gemischter Download ist ein Ressourcendownload aus einem sicheren Kontext über eine unsichere Verbindung. Sie sind aus denselben Gründen problematisch wie gemischter Inhalt — Inhalte können von einem Angreifer abgefangen und/oder verändert werden, und es ist für Benutzer nicht offensichtlich, dass dies auf einer sicheren Seite passieren könnte.

Beispielsweise definiert der folgende Code ein [`<a>`](/de/docs/Web/HTML/Element/a#download)-Element, das verwendet werden könnte, um die Seite am unsicheren Ursprung `http://example.com/` herunterzuladen. Wenn sich dieser Code auf einer Seite befindet, die über HTTPS bereitgestellt wird, führt das Speichern des Links zu einem gemischten Download.

```html
<a href="http://example.com/" download>Download</a>
```

Browser sollten gemischte Downloads blockieren, und sichere Seiten sollten diese nicht enthalten.

> [!NOTE]
> Browser blockieren gemischte Downloads häufig standardmäßig, informieren die Nutzer jedoch über das Risiko und erlauben ihnen, den Download beizubehalten oder zu verwerfen.

## Entwicklerkonsole

Die Entwicklerkonsole zeigt Warnungen, wenn gemischter Inhalt aktualisiert oder blockiert wird. Diese können verwendet werden, um gemischten Inhalt auf Ihren Websites zu debuggen und zu beheben.

Der untenstehende Screenshot zeigt die Konsolenwarnung, wenn ein Bild im Firefox aktualisiert wird (Chrome hat eine ähnliche Warnung).

![Screenshot der Web-Konsole mit Upgrade-Warnung für gemischtes Inhaltsbild.](mixed_content_console_upgradable.png)

In Browserversionen, die immer noch "optional blockierbaren" Inhalt anzeigen, wird ein Symbol verwendet, um anzuzeigen, dass gemischter Inhalt im angezeigten Inhalt vorhanden ist, zusammen mit einer Konsolenwarnung. Der untenstehende Screenshot zeigt das Symbol und die Konsolenwarnung für die Unterstützung gemischter Inhalte im Firefox.

![Screenshot der Web-Konsole mit Anzeige-Warnung für gemischtes Inhaltsbild.](mixed_content_console_displayed.png)

## Behebung von gemischten Inhaltsproblemen

Die beste Strategie, um Probleme mit gemischtem Inhalt zu vermeiden, ist, den gesamten Inhalt als HTTPS zu dienen:

- Dienen Sie alle Inhalte von Ihrer Domain als HTTPS.
- Verwandeln Sie alle Verweise auf Ressourcen, die auf Ihrer Domain gehostet sind, in relative Links oder HTTPS-Links, einschließlich für Downloads.
- Wenn Sie Ressourcen auf anderen Seiten verwenden, nutzen Sie HTTPS-Versionen, sofern verfügbar.

  Die meisten Seiten bieten HTTPS-Versionen von gemeinsam genutzten Ressourcen. Oft ist der einfachste Ansatz, alle `http://`-Links durch `https://` zu ersetzen und dann Tools wie [linkchecker](https://linkchecker.github.io/linkchecker/) zu verwenden, um zu überprüfen, ob die Links alle funktionieren.

Es gibt eine Reihe von Möglichkeiten, um zu überprüfen, dass Ihre Webseite frei von gemischtem Inhalt ist, einschließlich:

- Navigieren Sie zu Ihrer Seite und überprüfen Sie die [Entwicklerkonsole](#entwicklerkonsole) Ihres Browsers auf Warnungen bzgl. gemischtem Inhalt.
- Deaktivieren Sie gemischten Inhalt in Ihrem Browser vollständig und testen Sie, dass die Seiten wie erwartet funktionieren. Dies ist bei Safari standardmäßig der Fall, aber die meisten Browser bieten irgendeinen Mechanismus, um gemischten Inhalt zu blockieren (siehe [Kompatibilitätsdaten](#browserkompatibilität)).
- Verwenden Sie einen desktop-basierten Webcrawler wie [HTTPSChecker](https://httpschecker.net/how-it-works) oder ein CLI-Tool wie [mcdetect](https://github.com/agis/mcdetect), um Ihre Webseite rekursiv zu überprüfen und Links zu unsicheren Inhalten zu finden.
- Verwenden Sie ein Online-Tool wie [Mixed Content Checker](https://www.crawlcenter.com/mixed-content-checker), um Ihre Seite zu überprüfen.

## Spezifikationen

{{Specifications}}

## Browserkompatibilität

{{Compat}}

## Siehe auch

- [CSP: `upgrade-insecure-requests`](/de/docs/Web/HTTP/Headers/Content-Security-Policy/upgrade-insecure-requests) aktualisiert alle Anfragen auf HTTPS, einschließlich blockierbarem gemischtem Inhalt.
