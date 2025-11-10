---
title: Gemischter Inhalt
slug: Web/Security/Mixed_content
l10n:
  sourceCommit: ade8d870ed7e18a71dc51fe25aa13d812fb82558
---

Wenn eine Webseite von einem sicheren Ursprung über einen sicheren Kanal wie {{Glossary("HTTPS", "HTTPS")}} geladen wird, ist die Verbindung mit dem Webserver verschlüsselt und somit vor Abhören und Manipulation durch Man-in-the-Middle-Angriffe geschützt. Wenn die sicher geladene Webseite nur Bilder, Skripte und andere Ressourcen enthält, die ebenfalls auf sicheren Ursprüngen gehostet werden, können Nutzer sicher sein, dass die gesamte Seite vor diesen Arten von Angriffen geschützt ist.

"Gemischter Inhalt" bezieht sich auf sicher geladene Webseiten, die Ressourcen verwenden, die über HTTP oder ein anderes unsicheres Protokoll abgerufen werden. Diese Art von Webseite ist potenziell unsicher, da alle unsicher gesendeten Ressourcen angesehen und möglicherweise sensible Informationen offengelegt und/oder von einem Angreifer modifiziert werden können. Skripte sind besonders gefährlich, da sie jeden Aspekt der Seite ändern können, aber alle Arten von Ressourcen tragen ein gewisses Risiko. Beispielsweise können Bilder verändert werden, um dem Benutzer falsche oder irreführende Informationen zu geben oder die scheinbare Funktion eines Buttons zu verändern.

"Gemischte Downloads" beziehen sich auf Ressourcendownloads, die aus einem sicheren Kontext initiiert werden, aber über eine unsichere Verbindung abgerufen werden. Diese bergen die gleichen Risiken wie gemischte Inhalte: Downloads scheinen von einem sicheren Ursprung zu stammen, könnten jedoch unterwegs modifiziert oder angesehen worden sein.

Sie sollten auf Ihrer Website die Nutzung von gemischtem Inhalt und gemischten Downloads vermeiden! Browser mindern die Risiken von gemischtem Inhalt, indem sie Anfragen für Bilder, Videos und Audiodateien automatisch von HTTP auf HTTPS hochstufen und unsichere Anfragen für alle anderen Ressourcentypen blockieren. Sie sollten auch _gemischte Downloads_ standardmäßig blockieren.

## Arten von gemischtem Inhalt

Gemischter Inhalt auf einer Webseite wird in zwei Kategorien unterteilt: "hochstufbarer Inhalt" und "blockierbarer Inhalt". Browser sollten Anfragen nach hochstufbarem Inhalt automatisch von HTTP auf HTTPS hochstufen und Anfragen für den blockierbaren Inhalt blockieren.

Dieser Ansatz stellt sicher, dass alle Inhalte in einem sicheren Kontext entweder über einen sicheren Kanal geladen oder blockiert werden, was für die Benutzer sicherer ist, als eine Mischung aus sicherem und unsicherem Inhalt anzuzeigen, und weniger störend ist, als Webseiten zu zerstören, indem absolut aller unsichere Inhalt blockiert wird.

> [!NOTE]
> Frühere Versionen der Spezifikation unterteilten gemischte Inhalte in die Kategorien "blockierbar" und "optional blockierbar":
>
> - Blockierbare Inhaltstypen, auch als "aktive gemischte Inhalte" bezeichnet, konnten andere Teile der Webseite ändern, wie Skripte und Stylesheets. Das potenzielle Risiko, wenn diese Dateien modifiziert werden, ist sehr hoch, und Browser waren verpflichtet, sie zu blockieren.
> - Optional blockierbare Inhaltstypen, auch bekannt als "passive gemischte Inhalte", konnten keinen anderen Inhalt in der Webseite ändern, wie Bilder, Videos und Audiodateien. Das potenzielle Risiko, diese Dateien zuzulassen, war geringer, sodass Browser sie blockieren oder anzeigen konnten oder die Entscheidung dem Benutzer überlassen konnten.

Der Satz von Ressourcentypen, der "hochstufbaren Inhalt" umfasst, wurde aus dem Satz von "optional blockierbarem" gemischtem Inhalt erstellt. Die Erwartung ist, dass alle neuen Dateitypen als blockierbarer Inhalt definiert werden, und einige hochstufbare Inhalte könnten in Zukunft blockierbar werden.

### Hochstufbarer Inhalt

Hochstufbare Inhaltsanfragen sind solche, bei denen eine unsichere Anfrage automatisch zu einer sicheren Anfrage hochgestuft wird, indem das Ursprungs-Schema von `http` auf `https` geändert wird. Der entfernte Server wird entweder mit der Ressource oder einem Statuscode antworten, der angibt, dass sie nicht gefunden wurde.

Die Ressourcentypen in dieser Kategorie sind solche, bei denen das Blockieren der Anfrage das Risiko birgt, bedeutende Teile des Webs zu zerstören. Sie entsprechen derzeit den gemischten Inhaltstypen, die zuvor "optional blockierbar" waren, da sie immer noch auf einigen Websites verwendet werden.

Die folgenden Elemente sind hochstufbar (außer wenn der URL-Host als IP-Adresse angegeben ist — siehe den folgenden Abschnitt):

- {{HTMLElement("img")}} wo der Ursprung über das `src` Attribut gesetzt wird, einschließlich SVG-Dokumente (aber nicht, wenn Ressourcen mit `srcset` oder `<picture>` gesetzt werden).
- CSS-Bild-Elemente wie: `background-image`, `border-image` usw.
- {{HTMLElement("audio")}} wo der Ursprung mit `src` Attribut gesetzt wird.
- {{HTMLElement("video")}} wo der Ursprung mit `src` Attribut gesetzt wird.
- {{HTMLElement("source")}} wo Video- oder Ursprungsressource gesetzt ist.

### Blockierbarer Inhalt

Blockierbarer Inhalt wird definiert als "alle gemischten Inhalte, die nicht hochstufbar sind".

Dazu gehören HTTP-Anfragen, die durch die folgenden Elemente resultieren (diese Liste ist nicht erschöpfend):

- {{HTMLElement("script")}} wo der Ursprung über das `src` Attribut gesetzt wird.
- {{HTMLElement("link")}} wo der Ursprung im `href` Attribut gesetzt ist und Stylesheets beinhaltet.
- {{HTMLElement("iframe")}} wo der Ursprung über das `src` Attribut gesetzt wird.
- [`fetch()`](/de/docs/Web/API/Window/fetch) Anfragen.
- [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) Anfragen.
- Alle Fälle in CSS, wo ein {{CSSXref("url_value", "&lt;url&gt;")}} Wert verwendet wird ({{cssxref("@font-face")}}, {{cssxref("cursor")}}, {{cssxref("background-image")}} und so weiter).
- {{HTMLElement("object")}} (`data` Attribut).
- [`Navigator.sendBeacon`](/de/docs/Web/API/Navigator/sendBeacon) (`url` Attribut).
- {{HTMLElement("img")}} wo der Ursprung über `srcset` oder `<picture>` gesetzt wird.
- Webfonts.

Anfragen für gemischten Inhalt, die sonst hochgestuft würden, werden blockiert, wenn der Host der URL eine IP-Adresse und kein Domainname ist. Daher wird `<img src="http://example.com/image.png">` hochgestuft, aber `<img src="http://93.184.215.14/image.png">` wird blockiert.

## Beispiele für Anfragen für gemischten Inhalt

Anfragen für gemischten Inhalt sind unsichere Anforderungen nach Ressourcen aus einem [sicheren Kontext](/de/docs/Web/Security/Secure_Contexts):

Die folgenden Beispiele zeigen sichere, unsichere und gemischte Inhaltsanfragen:

- `http://insecure.com` lädt `http://also.insecure.com` — ist keine Anfrage für gemischten Inhalt, da beide Ursprünge unsicher sind.
- `https://secure.com` lädt `http://insecure.com` — ist eine Anfrage für gemischten Inhalt, da die unsichere Ressource `http://insecure.com` in den sicheren Kontext `https://secure.com` geladen wird.
- `http://insecure.com` lädt `https://secure.com` in einem `<iframe>`, das wiederum `http://also.insecure.com` lädt — das Laden von `https://secure.com` in `http://insecure.com` ist keine Anfrage für gemischten Inhalt (es gibt keine Einschränkung beim Laden eines sicheren Kontexts in einen unsicheren Kontext). Das Laden von `http://also.insecure.com` in den sicheren Frame `https://secure.com` ist jedoch eine Anfrage für gemischten Inhalt.
- `https://secure.com` rahmt eine `data:` URL ein, die `http://insecure.com` lädt — das ist eine Anfrage für gemischten Inhalt, da `https://secure.com` (und damit `data:`) sicher geladen wurde und `http://insecure.com` unsicher ist.

Anfragen für gemischten Kontext können auch von sicheren Kontexten wie Plugins oder Arbeitern gestellt werden und werden auf die gleiche Weise hochgestuft/blockiert.

Beachten Sie jedoch, dass Navigationsanfragen von einem sicheren Kontext, die auf unsichere Ziel-Browsing-Kontexte der obersten Ebene abzielen, nicht als gemischter Inhalt angesehen werden, da sie einen neuen Kontext erstellen, der entweder sicher oder unsicher ist, unabhängig von dem Ursprung der Anfrage.

### Laden lokal bereitgestellter gemischter Ressourcen

Lokale Ressourcen gelten als von sicheren Ursprüngen, genau wie HTTPS-Ursprünge. Dazu gehören `file:` URLs und Inhalte, die von Loopback-Adressen wie `http://127.0.0.1/` oder `http://localhost/` abgerufen werden.

Sie können diese Dateien aus sicheren Kontexten laden, und Sie haben weiterhin einen sicheren Kontext. Wenn jedoch eine lokale Datei eine unsichere Ressource über `http:` lädt, wäre dies eine Anfrage für gemischten Inhalt.

Die Unterstützung für das Laden lokaler Inhalte kann im Abschnitt [Browser-Kompatibilität](#browser-kompatibilität) überprüft werden.

## Gemischte Downloads

Ein gemischter Download ist ein Ressourcendownload aus einem sicheren Kontext über eine unsichere Verbindung. Sie sind aus den gleichen Gründen problematisch wie gemischter Inhalt — der Inhalt kann abgefangen und/oder von einem Angreifer modifiziert werden, und es ist für Benutzer nicht offensichtlich, dass dies auf einer sicheren Seite passieren könnte.

Zum Beispiel definiert der folgende Code ein [`<a>`](/de/docs/Web/HTML/Reference/Elements/a#download) Element, das verwendet werden könnte, um die Seite am unsicheren Ursprung `http://example.com/` herunterzuladen. Wenn sich dieser Code auf einer Seite befindet, die über HTTPS bereitgestellt wird, führt das Speichern des Links zu einem gemischten Download.

```html
<a href="http://example.com/" download>Download</a>
```

Erwartungsgemäß blockieren Browser gemischte Downloads, und sichere Websites sollten sie nicht enthalten.

> [!NOTE]
> Browser blockieren häufig gemischte Downloads standardmäßig, informieren aber die Benutzer über das Risiko und erlauben ihnen, den Download zu behalten oder abzubrechen.

## Entwicklerkonsole

Die Entwicklerkonsole zeigt Warnungen an, wenn gemischter Inhalt hochgestuft oder blockiert wird. Diese können verwendet werden, um gemischte Inhalte auf Ihren Websites zu debuggen und zu beheben.

Das folgende Bildschirmfoto zeigt die Konsolenwarnung, wenn ein Bild in Firefox hochgestuft wird (Chrome hat eine ähnliche Warnung).

![Bildschirmfoto der Webkonsole, die eine Hochstufungswarnung für ein gemischtes Inhaltsbild anzeigt.](mixed_content_console_upgradable.png)

In Browserversionen, die immer noch "optional blockierbare" Inhalte anzeigen, wird ein Symbol verwendet, um anzuzeigen, dass gemischter Inhalt im angezeigten Inhalt vorhanden ist, zusammen mit einer Konsolenwarnung. Das folgende Bildschirmfoto zeigt das Symbol und die Konsolenwarnung für Firefox, der gemischten hochstufbaren Inhalt unterstützt.

![Bildschirmfoto der Webkonsole, die eine Anzeige-Warnung für ein gemischtes Inhaltsbild anzeigt.](mixed_content_console_displayed.png)

## Beheben von gemischten Inhaltsproblemen

Die beste Strategie, um Probleme mit gemischtem Inhalt zu vermeiden, besteht darin, alle Inhalte als HTTPS bereitzustellen:

- Stellen Sie alle Inhalte von Ihrer Domain als HTTPS bereit.
- Machen Sie alle Verweise auf Ressourcen, die auf Ihrer Domain gehostet werden, zu relativen Links oder HTTPS-Links, einschließlich bei Downloads.
- Verwenden Sie, sofern verfügbar, bei Ressourcen auf anderen Seiten HTTPS-Versionen.

  Die meisten Websites bieten HTTPS-Versionen von gemeinsam genutzten Ressourcen an. Oft ist der einfachste Ansatz, alle `http://` Links durch `https://` zu ersetzen und dann Tools wie [LinkChecker](https://linkchecker.github.io/linkchecker/) zu verwenden, um zu überprüfen, ob die Links alle funktionieren.

Es gibt mehrere Möglichkeiten, zu überprüfen, ob Ihre Website frei von gemischtem Inhalt ist, einschließlich:

- Navigieren Sie auf Ihrer Seite und überprüfen Sie die [Entwicklerkonsole](#entwicklerkonsole) Ihres Browsers auf Warnungen zu gemischtem Inhalt.
- Deaktivieren Sie alle gemischten Inhalte in Ihrem Browser und testen Sie, ob die Seiten wie erwartet funktionieren. Dies ist der Standard für Safari, aber die meisten Browser unterstützen ein Mechanismus, um alle gemischten Inhalte zu blockieren (siehe [Kompatibilitätsdaten](#browser-kompatibilität)).
- Verwenden Sie einen Desktop-basierten Web-Crawler wie [HTTPSChecker](https://httpschecker.net/how-it-works) oder ein CLI-Tool wie [mcdetect](https://github.com/agis/mcdetect), um Ihre Webseite rekursiv zu überprüfen und Links zu unsicheren Inhalten zu finden.
- Verwenden Sie ein Online-Tool wie [Mixed Content Checker](https://www.crawlcenter.com/mixed-content-checker), um Ihre Seite zu überprüfen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [CSP: `upgrade-insecure-requests`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/upgrade-insecure-requests) stuft alle Anfragen auf HTTPS hoch, einschließlich blockierbarer gemischter Inhalte.
