---
title: Mixed Content
slug: Web/Security/Mixed_content
l10n:
  sourceCommit: bb48907e64eb4bf60f17efd7d39b46c771d220a0
---

{{QuickLinksWithSubpages("/de/docs/Web/Security")}}

Wenn eine Webseite von einem sicheren Ursprung über einen sicheren Kanal wie {{Glossary("HTTPS", "HTTPS")}} geladen wird, ist die Verbindung mit dem Webserver verschlüsselt und daher vor Abhören und Änderungen durch Man-in-the-Middle-Angriffe geschützt.
Wenn die sicher geladene Webseite nur Bilder, Skripte und andere Ressourcen enthält, die ebenfalls von sicheren Ursprüngen gehostet werden, können die Benutzer sicher sein, dass die gesamte Seite vor diesen Arten von Angriffen geschützt ist.

"Gemischter Inhalt" bezieht sich auf sicher geladene Webseiten, die Ressourcen nutzen, die über HTTP oder ein anderes unsicheres Protokoll abgerufen werden.
Diese Art von Webseite ist potenziell unsicher, da alle unsicher gesendeten Ressourcen eingesehen werden können, möglicherweise sensible Informationen preisgeben und/oder von einem Angreifer modifiziert werden können.
Skripte sind besonders gefährlich, da sie jeden Aspekt der Seite ändern können, aber alle Arten von Ressourcen bergen ein gewisses Risiko.
Beispielsweise können Bilder verändert werden, um dem Benutzer falsche oder irreführende Informationen zu geben oder die scheinbare Funktion eines Buttons zu ändern.

"Gemischte Downloads" beziehen sich auf Ressourcendownloads, die aus einem sicheren Kontext initiiert, aber über eine unsichere Verbindung abgerufen werden.
Diese bergen die gleichen Risiken wie gemischte Inhalte: Downloads scheinen von einem sicheren Ursprung zu kommen, könnten aber während der Übertragung verändert oder eingesehen worden sein.

Sie sollten vermeiden, gemischte Inhalte und gemischte Downloads in Ihren Websites zu verwenden!
Browser mindern die Risiken von gemischtem Inhalt, indem sie Bild-, Video- und Audiogemischte Inhaltsanfragen automatisch von HTTP zu HTTPS hochstufen und unsichere Anfragen für alle anderen Ressourcentypen blockieren.
Sie sollten auch gemischte Downloads standardmäßig blockieren.

## Arten von gemischtem Inhalt

Gemischter Inhalt in einer Webseite wird in zwei Kategorien unterteilt: "hochgradiger Inhalt" und "blockierbarer Inhalt."
Browser sollten Anfragen für hochgradigen Inhalt automatisch von HTTP auf HTTPS hochstufen und Anfragen für den blockierbaren Inhalt blockieren.

Dieser Ansatz stellt sicher, dass aller Inhalt in einem sicheren Kontext entweder über einen sicheren Kanal geladen oder blockiert wird, was für die Benutzer sicherer ist als das Anzeigen einer Mischung aus sicherem und unsicherem Inhalt und weniger disruptiv als das Brechen von Webseiten durch das Blockieren aller unsicheren Inhalte.

> [!NOTE]
> Frühere Versionen der Spezifikation unterteilten gemischte Inhalte in die Kategorien "blockierbar" und "optional blockierbar":
>
> - Blockierbare Inhaltstypen, auch als "aktive gemischte Inhalte" bezeichnet, waren diejenigen, die andere Teile der Webseite ändern konnten, wie Skripte und Stylesheets.
>   Das potenzielle Risiko, wenn diese Dateien geändert werden, ist sehr hoch, und Browser mussten sie blockieren.
> - Optional blockierbare Inhaltstypen, auch als "passive gemischte Inhalte" bekannt, waren diejenigen, die keine anderen Inhalte in der Webseite ändern konnten, wie Bilder, Videos und Audiodateien.
>   Das potenzielle Risiko, diese Dateien zuzulassen, war geringer, sodass Browser wählen konnten, ob sie sie blockieren oder anzeigen oder die Entscheidung dem Benutzer überließen.

Die Menge an Ressourcentypen, die "hochgradigen Inhalt" ausmachen, stammt aus der Menge an "optional blockierbarem" gemischten Inhalt.
Die Erwartung ist, dass alle neuen Dateitypen als blockierbarer Inhalt definiert werden und einige hochgradige Inhalte in Zukunft blockierbar werden könnten.

### Hochgradiger Inhalt

Hochgradige Inhaltsanfragen sind solche, bei denen eine unsichere Anfrage automatisch in eine sichere Anfrage umgewandelt wird, indem das Urschema von `http` zu `https` geändert wird.
Der Remote-Server antwortet entweder mit der Ressource oder einem Statuscode, der angibt, dass sie nicht gefunden wurde.

Die Ressourcentypen in dieser Kategorie sind solche, bei denen das Blockieren der Anfrage das Risiko birgt, große Teile des Webs zu beeinträchtigen.
Diese entsprechen derzeit den gemischten Inhaltstypen, die zuvor "optional blockierbar" waren, da sie immer noch auf einigen Websites verwendet werden.

Die folgenden Elemente sind hochgradig (außer wenn der URL-Host als IP-Adresse angegeben ist – siehe der folgende Abschnitt):

- {{HTMLElement("img")}} wo der Ursprung über das `src`-Attribut gesetzt wird, einschließlich SVG-Dokumenten (aber nicht beim Setzen von Ressourcen mit `srcset` oder `<picture>`).
- CSS-Bildelemente wie: `background-image`, `border-image`, usw.
- {{HTMLElement("audio")}} wo der Ursprung über das `src`-Attribut gesetzt wird.
- {{HTMLElement("video")}} wo der Ursprung über das `src`-Attribut gesetzt wird
- {{HTMLElement("source")}} wo das Video- oder Ursprungsressource gesetzt wird.

### Blockierbarer Inhalt

Blockierbarer Inhalt ist definiert als "alle gemischten Inhalte, die nicht hochgradig sind".

Dies schließt HTTP-Anfragen ein, die aus den folgenden Elementen resultieren (diese Liste ist nicht vollständig):

- {{HTMLElement("script")}} wo der Ursprung über das `src`-Attribut gesetzt wird
- {{HTMLElement("link")}} wo der Ursprung im `href`-Attribut gesetzt wird und Stylesheets beinhaltet
- {{HTMLElement("iframe")}} wo der Ursprung über das `src`-Attribut gesetzt wird
- [`fetch()`](/de/docs/Web/API/Window/fetch)-Anfragen
- [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest)-Anfragen
- Alle Fälle in CSS, in denen ein {{cssxref("url", "url()")}}-Wert verwendet wird ({{cssxref("@font-face")}}, {{cssxref("cursor")}}, {{cssxref("background-image")}}, usw.).
- {{HTMLElement("object")}} (`data`-Attribut)
- [`Navigator.sendBeacon`](/de/docs/Web/API/Navigator/sendBeacon) (`url`-Attribut)
- {{HTMLElement("img")}} wo der Ursprung über `srcset` oder `<picture>` gesetzt wird.
- Web-Schriften

Gemischte Inhaltsanfragen, die ansonsten hochgestuft würden, werden blockiert, wenn der Host der URL eine IP-Adresse statt eines Domainnamens ist.
Also `<img src="http://example.com/image.png">` wird hochgestuft, aber `<img src="http://93.184.215.14/image.png">` wird blockiert.

## Beispiele für gemischte Inhaltsanfragen

Gemischte Inhaltsanfragen sind unsichere Anfragen nach Ressourcen aus einem [sicheren Kontext](/de/docs/Web/Security/Secure_Contexts):

Die folgenden Beispiele demonstrieren sichere, unsichere und gemischte Inhaltsanfragen:

- `http://insecure.com` lädt `http://also.insecure.com` — ist keine gemischte Inhaltsanfrage, weil beide Ursprünge unsicher sind.
- `https://secure.com` lädt `http://insecure.com` — ist eine gemischte Inhaltsanfrage, weil die unsichere Ressource `http://insecure.com` in den sicheren Kontext `https://secure.com` geladen wird.
- `http://insecure.com` lädt `https://secure.com` in einem `<iframe>`, das wiederum `http://also.insecure.com` lädt — das Laden von `https://secure.com` in `http://insecure.com` ist keine gemischte Inhaltsanfrage (es gibt keine Einschränkung für das Laden eines sicheren Kontexts in einen unsicheren Kontext).
  Das Laden von `http://also.insecure.com` in den sicheren Frame `https://secure.com` ist jedoch eine gemischte Inhaltsanfrage.
- `https://secure.com` umrahmt eine `data:`-URL, die `http://insecure.com` lädt — dies ist eine gemischte Inhaltsanfrage, weil `https://secure.com` (und daher `data:`) sicher geladen wurden und `http://insecure.com` unsicher ist.

Gemischte Kontextanfragen können auch aus sicheren Kontexten wie Plugins oder Arbeitern gestellt werden und werden auf die gleiche Weise hochgestuft/blockiert.

Beachten Sie jedoch, dass Navigationsanfragen aus einem sicheren Kontext, die unsichere oberste Browsing-Kontexte als Ziel haben, nicht als gemischter Inhalt angesehen werden, da sie einen neuen Kontext erstellen, der entweder sicher oder unsicher ist, unabhängig vom Ursprung der Anfrage.

### Laden von lokal bereitgestellten gemischten Ressourcen

Lokale Ressourcen werden als sicherer Ursprung betrachtet, genau wie HTTPS-Ursprünge.
Dazu gehören `file:`-URLs und Inhalte, die über Loopback-Adressen wie `http://127.0.0.1/` oder `http://localhost/` abgerufen werden.

Sie können diese Dateien aus sicheren Kontexten laden und Sie haben weiterhin einen sicheren Kontext.
Wenn jedoch eine lokale Datei eine unsichere Ressource über `http:` lädt, wäre dies eine gemischte Inhaltsanfrage.

Die Unterstützung für das Laden von lokalen Inhalten kann im Abschnitt [Browser-Kompatibilität](#browser-kompatibilität) überprüft werden.

## Gemischte Downloads

Ein gemischter Download ist ein Ressourcendownload aus einem sicheren Kontext über eine unsichere Verbindung.
Diese sind aus den gleichen Gründen problematisch wie gemischte Inhalte – Inhalte können von einem Angreifer abgefangen und/oder verändert werden, und es ist für Benutzer nicht offensichtlich, dass dies auf einer sicheren Seite geschehen könnte.

Beispielsweise definiert der folgende Code ein [`<a>`](/de/docs/Web/HTML/Element/a#download)-Element, das verwendet werden könnte, um die Seite am unsicheren Ursprung `http://example.com/` herunterzuladen.
Wenn sich dieser Code auf einer Seite befindet, die über HTTPS bereitgestellt wird, führt das Speichern des Links zu einem gemischten Download.

```html
<a href="http://example.com/" download>Download</a>
```

Es wird erwartet, dass Browser gemischte Downloads blockieren, und sichere Seiten sollten sie nicht enthalten.

> [!NOTE]
> Browser blockieren gemischte Downloads normalerweise standardmäßig, informieren jedoch die Benutzer über das Risiko und erlauben es ihnen, den Download zu behalten oder zu verwerfen.

## Entwicklerkonsole

Die Entwicklerkonsole zeigt Warnungen an, wenn gemischter Inhalt hochgestuft oder blockiert wird.
Diese können genutzt werden, um gemischte Inhalte auf Ihren Websites zu debuggen und zu beheben.

Der folgende Screenshot zeigt die Konsolenwarnung, wenn ein Bild in Firefox hochgestuft wird (Chrome hat eine ähnliche Warnung).

![Screenshot der Webkonsole mit der Aufwertungswarnung für gemischten Inhaltsbild.](mixed_content_console_upgradable.png)

Auf Browserversionen, die immer noch "optional blockierbare" Inhalte anzeigen, wird ein Symbol verwendet, um anzuzeigen, dass sich in den angezeigten Inhalten gemischte Inhalte befinden, zusammen mit einer Konsolenwarnung.
Der folgende Screenshot zeigt das Symbol und die Konsolenwarnung für Firebox, das unterstützte hochgradige gemischte Inhalte zeigt.

![Screenshot der Webkonsole mit der Anzeige-Warnung für gemischtes Inhaltsbild.](mixed_content_console_displayed.png)

## Behebung von Problemen mit gemischten Inhalten

Die beste Strategie, um Probleme mit gemischten Inhalten zu vermeiden, besteht darin, alle Inhalte über HTTPS bereitzustellen:

- Stellen Sie alle Inhalte von Ihrer Domain über HTTPS bereit.
- Machen Sie alle Referenzen zu Ressourcen, die auf Ihrer Domain gehostet werden, zu relativen Links oder HTTPS-Links, einschließlich für Downloads.
- Wenn Sie Ressourcen auf anderen Websites verwenden, verwenden Sie HTTPS-Versionen, falls verfügbar.

  Die meisten Websites bieten HTTPS-Versionen von gemeinsam genutzten Ressourcen an.
  Oft ist der einfachste Ansatz, alle `http://`-Links durch `https://` zu ersetzen und dann Tools wie [linkchecker](https://linkchecker.github.io/linkchecker/) zu verwenden, um zu überprüfen, ob die Links alle funktionieren.

Es gibt eine Reihe von Möglichkeiten, um zu überprüfen, ob Ihre Website frei von gemischten Inhalten ist, einschließlich:

- Navigieren Sie Ihre Website und prüfen Sie die [Entwicklerkonsole](#entwicklerkonsole) Ihres Browsers auf Warnungen zu gemischten Inhalten.
- Deaktivieren Sie alle gemischten Inhalte in Ihrem Browser und testen Sie, ob die Seiten wie erwartet funktionieren.
  Dies ist der Standard für Safari, aber die meisten Browser unterstützen einen Mechanismus zum Blockieren aller gemischten Inhalte (siehe [Kompatibilitätsdaten](#browser-kompatibilität)).
- Verwenden Sie einen desktopbasierten Webcrawler wie [HTTPSChecker](https://httpschecker.net/how-it-works) oder ein CLI-Tool wie [mcdetect](https://github.com/agis/mcdetect), um Ihre Website rekursiv zu überprüfen und Links zu unsicheren Inhalten zu finden.
- Verwenden Sie ein Online-Tool wie den [Mixed Content Checker](https://www.crawlcenter.com/mixed-content-checker), um Ihre Website zu überprüfen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [CSP: `upgrade-insecure-requests`](/de/docs/Web/HTTP/Headers/Content-Security-Policy/upgrade-insecure-requests) stuft alle Anfragen auf HTTPS hoch, einschließlich blockierbarer gemischter Inhalte
