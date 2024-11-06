---
title: Gemischter Inhalt
slug: Web/Security/Mixed_content
l10n:
  sourceCommit: 6d311a5f07c97dbcd7bb9a6d49c2fe820a228659
---

{{QuickLinksWithSubpages("/de/docs/Web/Security")}}

Wenn eine Webseite aus einem sicheren Ursprung über eine sichere Verbindung wie {{Glossary("HTTPS", "HTTPS")}} geladen wird, ist die Verbindung mit dem Webserver verschlüsselt und somit vor Abhören und Manipulation durch Man-in-the-Middle-Angriffe geschützt.
Wenn die sicher geladene Webseite nur Bilder, Skripte und andere Ressourcen enthält, die ebenfalls über sichere Ursprünge gehostet werden, können Benutzer sicher sein, dass die gesamte Seite vor solchen Angriffen geschützt ist.

"Gemischter Inhalt" bezieht sich auf sicher geladene Webseiten, die Ressourcen verwenden, die über HTTP oder ein anderes unsicheres Protokoll abgerufen werden.
Diese Art von Webseite ist potenziell unsicher, da alle unsicher gesendeten Ressourcen eingesehen werden können, möglicherweise sensible Informationen offenlegen und/oder von einem Angreifer manipuliert werden können.
Skripte sind besonders gefährlich, da sie jeden Aspekt der Seite ändern können, aber alle Ressourcentypen bergen ein gewisses Risiko.
Zum Beispiel können Bilder verändert werden, um dem Benutzer falsche oder irreführende Informationen zu geben oder um die scheinbare Funktion eines Buttons zu ändern.

"Gemischte Downloads" beziehen sich auf Ressourcendownloads, die aus einem sicheren Kontext initiiert werden, aber über eine unsichere Verbindung abgerufen werden.
Sie teilen die gleichen Risiken wie gemischter Inhalt: Downloads scheinen von einem sicheren Ursprung zu stammen, könnten jedoch auf dem Weg manipuliert oder eingesehen worden sein.

Sie sollten die Verwendung von gemischtem Inhalt und gemischten Downloads auf Ihren Websites vermeiden!
Browser mindern die Risiken von gemischtem Inhalt, indem sie Anfragen für gemischte Inhalte wie Bilder, Videos und Audio automatisch von HTTP auf HTTPS hochstufen und unsichere Anfragen für alle anderen Ressourcentypen blockieren.
Sie sollten ebenfalls _gemischte Downloads_ standardmäßig blockieren.

## Arten von gemischtem Inhalt

Gemischter Inhalt auf einer Webseite wird in zwei Kategorien unterteilt: "hochstufbarer Inhalt" und "blockierbarer Inhalt".
Browser sollten Anfragen für hochstufbaren Inhalt automatisch von HTTP auf HTTPS hochstufen und Anfragen für blockierbaren Inhalt blockieren.

Dieser Ansatz stellt sicher, dass alle Inhalte in einem sicheren Kontext entweder über einen sicheren Kanal geladen oder blockiert werden, was für Benutzer sicherer ist, als eine Mischung aus sicheren und unsicheren Inhalten anzuzeigen, und weniger störend, als Webseiten zu unterbrechen, indem absolut alle unsicheren Inhalte blockiert werden.

> [!NOTE]
> Frühere Versionen der Spezifikation unterteilten gemischte Inhalte in die Kategorien "blockierbar" und "optional blockierbar":
>
> - Blockierbare Inhaltstypen, auch als "aktive gemischte Inhalte" bezeichnet, waren solche, die andere Teile der Webseite ändern konnten, wie z. B. Skripte und Stylesheets.
>   Das potenzielle Risiko, wenn diese Dateien verändert werden, ist sehr hoch, und Browser mussten sie blockieren.
> - Optional blockierbare Inhaltstypen, auch als "passive gemischte Inhalte" bekannt, waren solche, die keinen anderen Inhalt auf der Webseite ändern konnten, wie z. B. Bilder, Videos und Audiodateien.
>   Das potenzielle Risiko, diese Dateien zuzulassen, war geringer, daher konnten Browser entscheiden, ob sie sie blockieren oder anzeigen, oder die Entscheidung dem Benutzer überlassen.

Die Menge der Ressourcentypen, die "hochstufbaren Inhalt" bilden, wurde von der Menge der "optional blockierbaren" gemischten Inhalte abgeleitet.
Die Erwartung ist, dass alle neuen Dateitypen als blockierbarer Inhalt definiert werden und einige hochstufbare Inhalte in Zukunft blockierbar werden können.

### Hochstufbarer Inhalt

Hochstufbare Inhaltsanfragen sind solche, bei denen eine unsichere Anfrage automatisch zu einer sicheren Anfrage hochgestuft wird, indem das Ursprungsschema von `http` auf `https` geändert wird.
Der entfernte Server wird entweder mit der Ressource antworten oder einen Statuscode zurückgeben, der angibt, dass sie nicht gefunden wurde.

Die Ressourcentypen in dieser Kategorie sind solche, bei denen das Blockieren der Anfrage das Risiko birgt, wesentliche Teile des Webs zu unterbrechen.
Diese entsprechen derzeit den gemischten Inhaltstypen, die zuvor "optional blockierbar" waren, da sie immer noch auf einigen Websites verwendet werden.

Die folgenden Elemente sind hochstufbar (außer wenn der URL-Host als IP-Adresse angegeben ist — siehe den folgenden Abschnitt):

- {{HTMLElement("img")}}, wo der Ursprung über das `src`-Attribut gesetzt wird, einschließlich SVG-Dokumenten (jedoch nicht, wenn Ressourcen mit `srcset` oder `<picture>` gesetzt werden).
- CSS-Bildelemente wie: `background-image`, `border-image`, usw.
- {{HTMLElement("audio")}}, wo der Ursprung mit dem `src`-Attribut gesetzt wird.
- {{HTMLElement("video")}}, wo der Ursprung mit dem `src`-Attribut gesetzt wird.
- {{HTMLElement("source")}}, wo die Video- oder Ursprungsressource gesetzt ist.

### Blockierbarer Inhalt

Blockierbarer Inhalt wird als "alle gemischten Inhalte, die nicht hochstufbar sind" definiert.

Dazu gehören HTTP-Anfragen, die aus den folgenden Elementen resultieren (diese Liste ist nicht erschöpfend):

- {{HTMLElement("script")}}, wo der Ursprung über das `src`-Attribut gesetzt wird
- {{HTMLElement("link")}}, wo der Ursprung im `href`-Attribut gesetzt ist und Stylesheets einschließt
- {{HTMLElement("iframe")}}, wo der Ursprung über das `src`-Attribut gesetzt wird
- [`fetch()`](/de/docs/Web/API/Window/fetch)-Anfragen
- [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest)-Anfragen
- Alle Fälle in CSS, in denen ein {{CSSXref("url_value", "&lt;url&gt;")}}-Wert verwendet wird ({{cssxref("@font-face")}}, {{cssxref("cursor")}}, {{cssxref("background-image")}} und so weiter).
- {{HTMLElement("object")}} (`data`-Attribut)
- [`Navigator.sendBeacon`](/de/docs/Web/API/Navigator/sendBeacon) (`url`-Attribut)
- {{HTMLElement("img")}}, wo der Ursprung über `srcset` oder `<picture>` gesetzt wird.
- Web-Fonts

Gemischte Inhaltsanfragen, die sonst hochgestuft würden, werden blockiert, wenn der URL-Host eine IP-Adresse anstelle eines Domainnamens ist.
So wird `<img src="http://example.com/image.png">` hochgestuft, aber `<img src="http://93.184.215.14/image.png">` wird blockiert.

## Beispiele für gemischte Inhaltsanfragen

Gemischte Inhaltsanfragen sind unsichere Anfragen für Ressourcen aus einem [sicheren Kontext](/de/docs/Web/Security/Secure_Contexts):

Die folgenden Beispiele demonstrieren sichere, unsichere und gemischte Inhaltsanfragen:

- `http://insecure.com` lädt `http://also.insecure.com` — ist keine gemischte Inhaltsanfrage, weil beide Ursprünge unsicher sind.
- `https://secure.com` lädt `http://insecure.com` — ist eine gemischte Inhaltsanfrage, weil die unsichere Ressource `http://insecure.com` in den sicheren Kontext `https://secure.com` geladen wird.
- `http://insecure.com` lädt `https://secure.com` in einem `<iframe>`, das wiederum `http://also.insecure.com` lädt — das Laden von `https://secure.com` in `http://insecure.com` ist keine gemischte Inhaltsanfrage (es gibt keine Einschränkung beim Laden eines sicheren Kontexts in einen unsicheren Kontext).
  Das Laden von `http://also.insecure.com` in das sichere Frame `https://secure.com` ist jedoch eine gemischte Inhaltsanfrage.
- `https://secure.com` rahmt eine `data:`-URL ein, die `http://insecure.com` lädt — dies ist eine gemischte Inhaltsanfrage, da `https://secure.com` (und somit `data:`) sicher geladen wurden und `http://insecure.com` unsicher ist.

Gemischte Inhaltsanfragen können auch aus sicheren Kontexten wie Plugins oder Arbeitern gestellt werden und werden auf dieselbe Weise hochgestuft/blockiert.

Beachten Sie jedoch, dass Navigationsanfragen aus einem sicheren Kontext, die auf unsichere Ziel-Browsing-Kontexte abzielen, nicht als gemischter Inhalt betrachtet werden, da sie einen neuen Kontext erstellen, der unabhängig von der Herkunft der Anfrage entweder sicher oder unsicher sein wird.

### Laden lokal bereitgestellter gemischter Ressourcen

Lokale Ressourcen gelten als aus sicheren Ursprüngen stammend, genau wie HTTPS-Ursprünge.
Dies umfasst `file:`-URLs und Inhalt, der von Loopback-Adressen wie `http://127.0.0.1/` oder `http://localhost/` abgerufen wird.

Sie können diese Dateien aus sicheren Kontexten laden, und Sie haben immer noch einen sicheren Kontext.
Wenn jedoch eine lokale Datei eine unsichere Ressource über `http:` lädt, wäre dies eine gemischte Inhaltsanfrage.

Die Unterstützung für das Laden lokaler Inhalte kann im Abschnitt zur [Browser-Kompatibilität](#browser-kompatibilität) geprüft werden.

## Gemischte Downloads

Ein gemischter Download ist ein Ressourcendownload aus einem sicheren Kontext über eine unsichere Verbindung.
Sie sind aus den gleichen Gründen problematisch wie gemischter Inhalt — die Inhalte können von einem Angreifer abgefangen und/oder manipuliert werden, und es ist für Benutzer nicht offensichtlich, dass dies auf einer sicheren Seite passieren könnte.

Zum Beispiel definiert der folgende Code ein [`<a>`](/de/docs/Web/HTML/Element/a#download)-Element, das verwendet werden könnte, um die Seite am unsicheren Ursprung `http://example.com/` herunterzuladen.
Wenn sich dieser Code auf einer Seite befindet, die über HTTPS bereitgestellt wird, führt das Speichern des Links zu einem gemischten Download.

```html
<a href="http://example.com/" download>Download</a>
```

Browser sollen gemischte Downloads blockieren, und sichere Websites sollten sie nicht enthalten.

> [!NOTE]
> Browser blockieren gemischte Downloads häufig standardmäßig, informieren die Benutzer jedoch über das Risiko und erlauben es ihnen, den Download zu behalten oder abzubrechen.

## Entwicklerkonsole

Die Entwicklerkonsole zeigt Warnungen an, wenn gemischter Inhalt hochgestuft oder blockiert wird.
Diese können genutzt werden, um gemischte Inhalte auf Ihren Websites zu debuggen und zu beheben.

Der folgende Screenshot zeigt die Konsolenwarnung, wenn ein Bild in Firefox hochgestuft wird (Chrome zeigt eine ähnliche Warnung).

![Screenshot der Webkonsole, die eine Upgrade-Warnung für gemischtes Inhaltsbild anzeigt.](mixed_content_console_upgradable.png)

In Browserversionen, die noch "optional blockierbaren" Inhalt anzeigen, wird ein Icon verwendet, um anzuzeigen, dass gemischter Inhalt in dem angezeigten Inhalt vorhanden ist, zusammen mit einer Konsolenwarnung.
Der folgende Screenshot zeigt das Icon und die Konsolenwarnung für Firefox, das die Unterstützung für hochstufbaren gemischten Inhalt beginnt.

![Screenshot der Webkonsole, die eine Anzeigewarnung für gemischtes Inhaltsbild anzeigt.](mixed_content_console_displayed.png)

## Behebung von Problemen mit gemischtem Inhalt

Die beste Strategie, um Probleme mit gemischtem Inhalt zu vermeiden, ist das Bereitstellen aller Inhalte als HTTPS:

- Stellen Sie alle Inhalte von Ihrer Domain als HTTPS bereit.
- Machen Sie alle Verweise auf Ressourcen, die auf Ihrer Domain gehostet werden, zu relativen Links oder HTTPS-Links, einschließlich für Downloads.
- Wenn Sie Ressourcen auf anderen Websites verwenden, nutzen Sie die HTTPS-Versionen, wenn verfügbar.

  Die meisten Websites bieten HTTPS-Versionen ihrer freigegebenen Ressourcen an.
  Oft ist der einfachste Ansatz, alle `http://`-Links durch `https://` zu ersetzen und dann Tools wie [LinkChecker](https://linkchecker.github.io/linkchecker/) zu verwenden, um zu überprüfen, dass alle Links funktionieren.

Es gibt eine Reihe von Möglichkeiten, um sicherzustellen, dass Ihre Website frei von gemischtem Inhalt ist, einschließlich:

- Navigieren Sie auf Ihrer Website und überprüfen Sie die [Entwicklerkonsole](#entwicklerkonsole) Ihres Browsers auf Warnungen zu gemischtem Inhalt.
- Deaktivieren Sie auf Ihrem Browser alle gemischten Inhalte und testen Sie, ob die Seiten wie erwartet funktionieren.
  Dies ist die Standardeinstellung für Safari, aber die meisten Browser unterstützen einige Mechanismen, um alle gemischten Inhalte zu blockieren (siehe [Kompatibilitätsdaten](#browser-kompatibilität)).
- Verwenden Sie einen Desktop-basierten Web-Crawler wie [HTTPSChecker](https://httpschecker.net/how-it-works) oder ein CLI-Tool wie [mcdetect](https://github.com/agis/mcdetect), um Ihre Website rekursiv zu überprüfen und Links zu unsicheren Inhalten zu finden.
- Nutzen Sie ein Online-Tool wie den [Mixed Content Checker](https://www.crawlcenter.com/mixed-content-checker), um Ihre Website zu überprüfen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [CSP: `upgrade-insecure-requests`](/de/docs/Web/HTTP/Headers/Content-Security-Policy/upgrade-insecure-requests) stuft alle Anfragen auf HTTPS hoch, einschließlich blockierbarer gemischter Inhalte
