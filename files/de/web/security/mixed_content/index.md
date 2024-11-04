---
title: Gemischte Inhalte
slug: Web/Security/Mixed_content
l10n:
  sourceCommit: e67d186aaa4be45b02984de3adeed1741239ab8a
---

{{QuickLinksWithSubpages("/de/docs/Web/Security")}}

Wenn eine Webseite von einem sicheren Ursprung über einen sicheren Kanal wie {{Glossary("HTTPS", "HTTPS")}} geladen wird, ist die Verbindung mit dem Webserver verschlüsselt und somit vor Abhören und Manipulation durch Man-in-the-Middle-Angriffe geschützt. Wenn die sicher geladene Webseite nur Bilder, Skripte und andere Ressourcen enthält, die ebenfalls auf sicheren Ursprüngen gehostet sind, können die Benutzer darauf vertrauen, dass die gesamte Seite vor solchen Angriffen sicher ist.

„Gemischte Inhalte“ beziehen sich auf sicher geladene Webseiten, die Ressourcen verwenden, die über HTTP oder ein anderes unsicheres Protokoll abgerufen werden. Diese Art von Webseite ist potenziell unsicher, da alle Ressourcen, die unsicher gesendet werden, eingesehen werden können, was möglicherweise sensible Informationen offenbart, und/oder von einem Angreifer manipuliert werden können. Skripte sind besonders gefährlich, da sie jeden Aspekt der Seite ändern können, aber alle Ressourcentypen bergen ein gewisses Risiko. Zum Beispiel können Bilder geändert werden, um dem Benutzer falsche oder irreführende Informationen zu geben oder die scheinbare Funktion einer Schaltfläche zu ändern.

„Gemischte Downloads“ beziehen sich auf Ressourcendownloads, die von einem sicheren Kontext initiiert, aber über eine unsichere Verbindung abgerufen werden. Diese teilen die gleichen Risiken wie gemischte Inhalte: Downloads scheinen von einem sicheren Ursprung zu kommen, könnten aber auf dem Weg manipuliert oder eingesehen worden sein.

Sie sollten es vermeiden, gemischte Inhalte und gemischte Downloads auf Ihren Websites zu verwenden! Browser mindern die Risiken gemischter Inhalte, indem sie Anfragen nach gemischten Inhalten für Bilder, Videos und Audio automatisch von HTTP auf HTTPS upgraden und unsichere Anfragen für alle anderen Ressourcentypen blockieren. Sie sollten auch _gemischte Downloads_ standardmäßig blockieren.

## Arten von gemischten Inhalten

Gemischte Inhalte auf einer Webseite werden in zwei Kategorien unterteilt: „upgradable content“ und „blockable content“. Browser sollten Anfragen nach upgradefähigen Inhalten automatisch von HTTP auf HTTPS upgraden und Anfragen nach blockierbaren Inhalten blockieren.

Dieser Ansatz stellt sicher, dass alle Inhalte in einem sicheren Kontext entweder über einen sicheren Kanal geladen oder blockiert werden, was für Benutzer sicherer ist, als eine Mischung aus sicheren und unsicheren Inhalten anzuzeigen, und weniger störend ist, als alle unsicheren Inhalte vollständig zu blockieren.

> [!NOTE]
> Frühere Versionen der Spezifikation unterteilten gemischte Inhalte in „blockable“ und „optionally blockable“ Kategorien:
>
> - Blockable Content-Typen, auch als „aktive gemischte Inhalte“ bezeichnet, waren diejenigen, die andere Teile der Webseite ändern konnten, wie Skripte und Stylesheets. Das potenzielle Risiko dieser Dateien, wenn sie modifiziert werden, ist sehr hoch, und Browser mussten sie blockieren.
> - Optionally blockable Content-Typen, auch als „passive gemischte Inhalte“ bekannt, waren diejenigen, die keine anderen Inhalte auf der Webseite ändern konnten, wie Bilder, Videos und Audiodateien. Das potenzielle Risiko, diese Dateien zuzulassen, war geringer, sodass Browser die Wahl hatten, sie zu blockieren oder anzuzeigen, oder die Entscheidung dem Benutzer zu überlassen.

Die Menge der Ressourcentypen, die „upgradable content“ umfassen, wurde aus der Menge der „optionally blockable“ gemischten Inhalte abgeleitet. Die Erwartung ist, dass alle neuen Dateitypen als blockierbare Inhalte definiert werden und einige upgradefähige Inhalte in Zukunft blockierbar werden können.

### Upgradefähige Inhalte

Upgradable Content-Anfragen sind solche, bei denen eine unsichere Anfrage automatisch in eine sichere Anfrage umgewandelt wird, indem das Ursprungsschema von `http` auf `https` geändert wird. Der entfernte Server antwortet entweder mit der Ressource oder einem Statuscode, der anzeigt, dass sie nicht gefunden wurde.

Die Ressourcentypen in dieser Kategorie sind diejenigen, bei denen das Blockieren der Anfrage das Risiko birgt, wesentliche Teile des Webs zu zerstören. Diese entsprechen derzeit den gemischten Inhaltstypen, die zuvor „optionally blockable“ waren, da diese immer noch auf einigen Websites verwendet werden.

Die folgenden Elemente sind upgradefähig (außer wenn der URL-Host als IP-Adresse angegeben ist – siehe den folgenden Abschnitt):

- {{HTMLElement("img")}}, wobei der Ursprung über das `src`-Attribut festgelegt wird, einschließlich SVG-Dokumente (aber nicht beim Festlegen von Ressourcen mit `srcset` oder `<picture>`).
- CSS-Bildelemente wie: `background-image`, `border-image`, etc.
- {{HTMLElement("audio")}}, wobei der Ursprung mit dem `src`-Attribut festgelegt wird.
- {{HTMLElement("video")}}, wobei der Ursprung mit dem `src`-Attribut festgelegt wird.
- {{HTMLElement("source")}}, wobei Video- oder Ursprungressource festgelegt wird.

### Blockierbare Inhalte

Blockable Content wird als „alle gemischten Inhalte, die nicht upgradebar sind“ definiert.

Dies schließt HTTP-Anfragen ein, die aus den folgenden Elementen resultieren (diese Liste ist nicht erschöpfend):

- {{HTMLElement("script")}}, wobei der Ursprung über das `src`-Attribut festgelegt wird
- {{HTMLElement("link")}}, wobei der Ursprung im `href`-Attribut festgelegt wird, einschließlich Stylesheets
- {{HTMLElement("iframe")}}, wobei der Ursprung über das `src`-Attribut festgelegt wird
- [`fetch()`](/de/docs/Web/API/Window/fetch) Anfragen
- [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) Anfragen
- Alle Fälle in CSS, in denen ein {{cssxref("url", "url()")}} Wert verwendet wird ({{cssxref("@font-face")}}, {{cssxref("cursor")}}, {{cssxref("background-image")}}, und so weiter).
- {{HTMLElement("object")}} (`data`-Attribut)
- [`Navigator.sendBeacon`](/de/docs/Web/API/Navigator/sendBeacon) (`url`-Attribut)
- {{HTMLElement("img")}}, wobei der Ursprung mit `srcset` oder `<picture>` festgelegt wird.
- Web-Schriften

Gemischte Inhaltsanfragen, die andernfalls aktualisiert werden würden, werden blockiert, wenn der URL-Host eine IP-Adresse anstelle eines Domainnamens ist. Also wird `<img src="http://example.com/image.png">` aktualisiert, aber `<img src="http://93.184.215.14/image.png">` wird blockiert.

## Beispiele für gemischte Inhaltsanfragen

Gemischte Inhaltsanfragen sind unsichere Anfragen nach Ressourcen aus einem [sicheren Kontext](/de/docs/Web/Security/Secure_Contexts):

Die folgenden Beispiele demonstrieren sichere, unsichere und gemischte Inhaltsanfragen:

- `http://insecure.com` lädt `http://also.insecure.com` — ist keine gemischte Inhaltsanfrage, da beide Ursprünge unsicher sind.
- `https://secure.com` lädt `http://insecure.com` — ist eine gemischte Inhaltsanfrage, weil die unsichere Ressource `http://insecure.com` in den sicheren Kontext `https://secure.com` geladen wird.
- `http://insecure.com` lädt `https://secure.com` in einem `<iframe>`, das wiederum `http://also.insecure.com` lädt — das Laden von `https://secure.com` nach `http://insecure.com` ist keine gemischte Inhaltsanfrage (es gibt keine Einschränkung beim Laden eines sicheren Kontexts in einen unsicheren Kontext). Das Laden von `http://also.insecure.com` in den sicheren Frame `https://secure.com` ist jedoch eine gemischte Inhaltsanfrage.
- `https://secure.com` rahmt eine `data:`-URL ein, die `http://insecure.com` lädt — dies ist eine gemischte Inhaltsanfrage, da `https://secure.com` (und damit `data:`) sicher geladen wurden und `http://insecure.com` unsicher ist.

Gemischte Kontextanfragen können auch von sicheren Kontexten wie Plugins oder Workern gestellt werden und werden auf die gleiche Weise aktualisiert/blockiert.

Beachten Sie jedoch, dass Navigationsanfragen von einem sicheren Kontext, die unsichere Ziel-Top-Level-Browsing-Kontexte ansteuern, nicht als gemischte Inhalte betrachtet werden, da sie einen neuen Kontext schaffen, der entweder sicher oder unsicher ist, unabhängig vom Ursprung der Anfrage.

### Laden von lokal bereitgestellten gemischten Ressourcen

Lokale Ressourcen werden als sichere Ursprünge betrachtet, ebenso wie HTTPS-Ursprünge. Dies schließt `file:`-URLs und Inhalte ein, die von Loopback-Adressen wie `http://127.0.0.1/` oder `http://localhost/` aus zugänglich sind.

Diese Dateien können aus sicheren Kontexten geladen werden und Sie haben immer noch einen sicheren Kontext. Wenn jedoch eine lokale Datei eine unsichere Ressource über `http:` lädt, wäre dies eine gemischte Inhaltsanfrage.

Die Unterstützung für das Laden lokaler Inhalte kann im Abschnitt [Browser-Kompatibilität](#browser-kompatibilität) überprüft werden.

## Gemischte Downloads

Ein gemischter Download ist ein Ressourcendownload aus einem sicheren Kontext über eine unsichere Verbindung. Sie sind aus den gleichen Gründen wie gemischte Inhalte problematisch — Inhalte können von einem Angreifer abgefangen und/oder manipuliert werden, und es ist den Benutzern nicht offensichtlich, dass dies auf einer sicheren Seite passieren könnte.

Zum Beispiel definiert der folgende Code ein [`<a>`](/de/docs/Web/HTML/Element/a#download) Element, das verwendet werden könnte, um die Seite am unsicheren Ursprung `http://example.com/` herunterzuladen. Wenn dieser Code auf einer Seite verwendet wird, die über HTTPS bereitgestellt wird, führt das Speichern des Links zu einem gemischten Download.

```html
<a href="http://example.com/" download>Download</a>
```

Es wird erwartet, dass Browser gemischte Downloads blockieren, und sichere Websites sollten sie nicht enthalten.

> [!NOTE]
> Browser blockieren gemischte Downloads häufig standardmäßig, informieren Benutzer über das Risiko und erlauben ihnen, den Download zu behalten oder zu verwerfen.

## Entwicklerkonsole

Die Entwicklerkonsole zeigt Warnungen an, wenn gemischte Inhalte aktualisiert oder blockiert werden. Diese können verwendet werden, um gemischte Inhalte auf Ihren Websites zu debuggen und zu beheben.

Der Screenshot unten zeigt die Konsolenwarnung, wenn ein Bild in Firefox aktualisiert wird (Chrome hat eine ähnliche Warnung).

![Bildschirmfoto der Webkonsole, die eine Upgrade-Warnung für ein gemischtes Inhaltsbild anzeigt.](mixed_content_console_upgradable.png)

In Browserversionen, die weiterhin „optionally blockable“ Inhalte anzeigen, wird ein Symbol verwendet, um anzuzeigen, dass gemischte Inhalte im angezeigten Inhalt vorhanden sind, zusammen mit einer Konsolenwarnung. Der Screenshot unten zeigt das Symbol und die Konsolenwarnung, wenn Firefox die Unterstützung für upgradefähige gemischte Inhalte beginnt.

![Bildschirmfoto der Webkonsole, die eine Anzeige-Warnung für ein gemischtes Inhaltsbild anzeigt.](mixed_content_console_displayed.png)

## Behebung von gemischten Inhaltsproblemen

Die beste Strategie, um Probleme mit gemischten Inhalten zu vermeiden, besteht darin, alle Inhalte als HTTPS bereitzustellen:

- Stellen Sie alle Inhalte von Ihrer Domain als HTTPS bereit.
- Machen Sie alle Verweise auf Ressourcen, die auf Ihrer Domain gehostet werden, zu relativen Links oder HTTPS-Links, einschließlich für Downloads.
- Wenn Sie Ressourcen auf anderen Websites verwenden, verwenden Sie HTTPS-Versionen, falls verfügbar.

  Die meisten Websites bieten HTTPS-Versionen von freigegebenen Ressourcen an. Oft ist der einfachste Ansatz, alle `http://`-Links durch `https://` zu ersetzen und dann Tools wie [LinkChecker](https://linkchecker.github.io/linkchecker/) zu verwenden, um zu überprüfen, ob alle Links funktionieren.

Es gibt verschiedene Möglichkeiten, um zu überprüfen, dass Ihre Website frei von gemischten Inhalten ist, einschließlich:

- Navigieren Sie durch Ihre Website und überprüfen Sie die [Entwicklerkonsole](#entwicklerkonsole) Ihres Browsers auf Warnungen zu gemischten Inhalten.
- Deaktivieren Sie alle gemischten Inhalte in Ihrem Browser und testen Sie, ob die Seiten wie erwartet funktionieren. Dies ist die Standardeinstellung für Safari, aber die meisten Browser unterstützen irgendeinen Mechanismus zur Blockierung aller gemischten Inhalte (siehe [Kompatibilitätsdaten](#browser-kompatibilität)).
- Verwenden Sie einen Desktop-basierten Web-Crawler wie [HTTPSChecker](https://httpschecker.net/how-it-works) oder ein CLI-Tool wie [mcdetect](https://github.com/agis/mcdetect), um Ihre Website rekursiv zu überprüfen und Links zu unsicheren Inhalten zu finden.
- Verwenden Sie ein Onlinetool wie [Mixed Content Checker](https://www.crawlcenter.com/mixed-content-checker), um Ihre Website zu überprüfen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [CSP: `upgrade-insecure-requests`](/de/docs/Web/HTTP/Headers/Content-Security-Policy/upgrade-insecure-requests) aktualisiert alle Anfragen auf HTTPS, einschließlich blockierbarer gemischter Inhalte
