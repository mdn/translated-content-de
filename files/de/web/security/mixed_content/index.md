---
title: Mixed Content
slug: Web/Security/Mixed_content
l10n:
  sourceCommit: c2f0a9805bc7cdc12b8565a20050db16cad215e2
---

{{QuickLinksWithSubpages("/de/docs/Web/Security")}}

Wenn eine Webseite von einem sicheren Ursprung über einen sicheren Kanal wie {{Glossary("HTTPS", "HTTPS")}} geladen wird, ist die Verbindung mit dem Webserver verschlüsselt und somit vor Abhören und Änderungen durch Man-in-the-Middle-Angriffe geschützt. Wenn die sicher geladenen Webseiten nur Bilder, Skripte und andere Ressourcen enthalten, die ebenfalls auf sicheren Ursprüngen gehostet sind, können Benutzer sicher sein, dass die gesamte Seite vor diesen Arten von Angriffen geschützt ist.

"Gemischte Inhalte" bezieht sich auf sicher geladene Webseiten, die Ressourcen verwenden, die über HTTP oder ein anderes unsicheres Protokoll abgerufen werden. Diese Art von Webseite ist potenziell unsicher, da alle unsicher versendeten Ressourcen von einem Angreifer eingesehen und möglicherweise verändert werden können. Skripte sind besonders gefährlich, da sie jeden Aspekt der Seite ändern können, aber alle Arten von Ressourcen beinhalten ein gewisses Risiko. Beispielsweise können Bilder modifiziert werden, um dem Benutzer falsche oder irreführende Informationen zu geben oder die scheinbare Funktion eines Buttons zu ändern.

"Gemischte Downloads" beziehen sich auf Ressourcendownloads, die von einem sicheren Kontext initiiert, aber über eine unsichere Verbindung abgerufen werden. Diese haben dieselben Risiken wie gemischte Inhalte: Downloads scheinen von einem sicheren Ursprung zu stammen, können jedoch auf dem Weg modifiziert oder eingesehen worden sein.

Sie sollten vermeiden, gemischte Inhalte und gemischte Downloads auf Ihren Webseiten zu verwenden! Browser mildern die Risiken gemischter Inhalte, indem sie Bild-, Video- und Audiomischinhaltsanfragen automatisch von HTTP auf HTTPS hochstufen und unsichere Anfragen für alle anderen Ressourcentypen blockieren. Sie sollten auch _gemischte Downloads_ standardmäßig blockieren.

## Arten von gemischten Inhalten

Gemischte Inhalte einer Webseite werden in zwei Kategorien unterteilt: "hochgradig aufrüstbare Inhalte" und "blockierbare Inhalte". Browser sollten Anfragen an hochgradig aufrüstbare Inhalte automatisch von HTTP auf HTTPS hochstufen und Anfragen an blockierbare Inhalte blockieren.

Dieser Ansatz stellt sicher, dass alle Inhalte in einem sicheren Kontext entweder über einen sicheren Kanal geladen oder blockiert werden, was für Benutzer sicherer ist, als eine Mischung aus sicheren und unsicheren Inhalten anzuzeigen, und weniger störend, als Webseiten zu brechen, indem absolut alle unsicheren Inhalte blockiert werden.

> [!NOTE]
> Frühere Versionen der Spezifikation unterteilten gemischte Inhalte in die Kategorien "blockierbar" und "optional blockierbar":
>
> - Blockierbare Inhaltstypen, auch als "aktive gemischte Inhalte" bezeichnet, waren solche, die andere Teile der Webseite ändern konnten, wie Skripte und Stylesheets. Das potenzielle Risiko, wenn diese Dateien geändert werden, ist sehr hoch, und Browser waren verpflichtet, sie zu blockieren.
> - Optional blockierbare Inhaltstypen, auch bekannt als "passive gemischte Inhalte", konnten keine anderen Inhalte auf der Webseite ändern, wie Bilder, Videos und Audiodateien. Das potenzielle Risiko, diese Dateien zuzulassen, war geringer, sodass Browser wählen konnten, sie zu blockieren oder anzuzeigen, oder die Entscheidung dem Benutzer zu überlassen.

Die Menge der Ressourcentypen, die "aufstufbare Inhalte" ausmachen, war aus der Menge der "optional blockierbaren" gemischten Inhalte hervorgegangen. Die Erwartung ist, dass alle neuen Dateitypen als blockierbare Inhalte definiert werden und einige hochstufbare Inhalte in Zukunft blockierbar werden können.

### Aufstufbare Inhalte

Aufstufbare Inhaltsanfragen sind solche, bei denen eine unsichere Anfrage automatisch in eine sichere Anfrage hochgestuft wird, indem das Ursprungsschema von `http` auf `https` geändert wird. Der entfernte Server antwortet entweder mit der Ressource oder einem Statuscode, der anzeigt, dass sie nicht gefunden wurde.

Die Ressourcentypen in dieser Kategorie sind solche, bei denen das Blockieren der Anfrage das Risiko birgt, signifikante Teile des Webs zu brechen. Diese entsprechen derzeit den gemischten Inhaltstypen, die zuvor "optional blockierbar" waren, da sie immer noch auf einigen Webseiten verwendet werden.

Die folgenden Elemente sind aufstufbar (außer wenn der URL-Host als IP-Adresse angegeben ist — siehe nächsten Abschnitt):

- {{HTMLElement("img")}}, wenn der Ursprung über das `src`-Attribut festgelegt wird, einschließlich SVG-Dokumenten (jedoch nicht, wenn Ressourcen mit `srcset` oder `<picture>` festgelegt werden).
- CSS-Bildelemente wie: `background-image`, `border-image` usw.
- {{HTMLElement("audio")}}, wenn der Ursprung über das `src`-Attribut festgelegt wird.
- {{HTMLElement("video")}}, wenn der Ursprung über das `src`-Attribut festgelegt wird.
- {{HTMLElement("source")}}, wenn Video- oder Ursprungsressource festgelegt ist.

### Blockierbare Inhalte

Blockierbare Inhalte sind definiert als "alle gemischten Inhalte, die nicht aufstufbar sind".

Dazu gehören HTTP-Anfragen, die von den folgenden Elementen ausgehen (diese Liste ist nicht erschöpfend):

- {{HTMLElement("script")}}, wenn der Ursprung über das `src`-Attribut festgelegt wird.
- {{HTMLElement("link")}}, wenn der Ursprung im `href`-Attribut festgelegt wird, und schließt Stylesheets ein.
- {{HTMLElement("iframe")}}, wenn der Ursprung über das `src`-Attribut festgelegt wird.
- [`fetch()`](/de/docs/Web/API/Window/fetch) Anfragen
- [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) Anfragen
- Alle Fälle in CSS, in denen ein {{CSSXref("url_value", "&lt;url&gt;")}}-Wert verwendet wird ({{cssxref("@font-face")}}, {{cssxref("cursor")}}, {{cssxref("background-image")}} usw.).
- {{HTMLElement("object")}} (`data`-Attribut)
- [`Navigator.sendBeacon`](/de/docs/Web/API/Navigator/sendBeacon) (`url`-Attribut)
- {{HTMLElement("img")}}, wenn der Ursprung über `srcset` oder `<picture>` festgelegt wird.
- Web-Schriftarten

Gemischte Inhaltsanfragen, die ansonsten aufgestuft werden würden, werden blockiert, wenn der Host der URL eine IP-Adresse anstelle eines Domainnamens ist. So wird `<img src="http://example.com/image.png">` hochgestuft, aber `<img src="http://93.184.215.14/image.png">` wird blockiert.

## Beispiele für gemischte Inhaltsanfragen

Gemischte Inhaltsanfragen sind unsichere Anforderungen an Ressourcen aus einem [sicheren Kontext](/de/docs/Web/Security/Secure_Contexts):

Die folgenden Beispiele zeigen sichere, unsichere und gemischte Inhaltsanfragen:

- `http://insecure.com` lädt `http://also.insecure.com` – ist keine gemischte Inhaltsanfrage, da beide Ursprünge unsicher sind.
- `https://secure.com` lädt `http://insecure.com` – ist eine gemischte Inhaltsanfrage, da die unsichere Ressource `http://insecure.com` in den sicheren Kontext `https://secure.com` geladen wird.
- `http://insecure.com` lädt `https://secure.com` in einem `<iframe>`, welches wiederum `http://also.insecure.com` lädt – das Laden von `https://secure.com` in `http://insecure.com` ist keine gemischte Inhaltsanfrage (es gibt keine Einschränkung für das Laden eines sicheren Kontexts in einen unsicheren Kontext). Das Laden von `http://also.insecure.com` in den sicheren Rahmen `https://secure.com` ist jedoch eine gemischte Inhaltsanfrage.
- `https://secure.com` rahmt eine `data:`-URL ein, die `http://insecure.com` lädt – dies ist eine gemischte Inhaltsanfrage, da `https://secure.com` (und damit `data:`) sicher geladen wurden und `http://insecure.com` unsicher ist.

Gemischte Kontextanfragen können auch von sicheren Kontexten wie Plugins oder Arbeitern ausgeführt werden und werden auf die gleiche Weise hochgestuft/blockiert.

Beachten Sie jedoch, dass Navigationsanfragen von einem sicheren Kontext, die sich an unsichere Ziel-Browsing-Kontexte auf oberster Ebene richten, nicht als gemischte Inhalte gelten, da sie einen neuen Kontext schaffen, der unabhängig vom Ursprung der Anfrage sicher oder unsicher sein wird.

### Laden lokal bereitgestellter gemischter Ressourcen

Lokale Ressourcen gelten als sichere Ursprünge, genauso wie HTTPS-Ursprünge. Dazu gehören `file:`-URLs und Inhalte, die von Loopback-Adressen wie `http://127.0.0.1/` oder `http://localhost/` aus zugegriffen werden.

Sie können diese Dateien aus sicheren Kontexten laden, und Sie werden immer noch einen sicheren Kontext haben. Wenn jedoch eine lokale Datei unsichere Ressourcen über `http:` lädt, wäre dies eine gemischte Inhaltsanfrage.

Die Unterstützung für das Laden lokaler Inhalte kann im Abschnitt [Browser-Kompatibilität](#browser-kompatibilität) überprüft werden.

## Gemischte Downloads

Ein gemischter Download ist ein Ressourcendownload aus einem sicheren Kontext über eine unsichere Verbindung. Sie sind problematisch aus den gleichen Gründen wie gemischte Inhalte – Inhalte können abgefangen und/oder von einem Angreifer verändert werden, und es ist für Benutzer nicht offensichtlich, dass dies auf einer sicheren Website geschehen könnte.

Beispielsweise definiert der folgende Code ein [`<a>`](/de/docs/Web/HTML/Element/a#download)-Element, das verwendet werden könnte, um die Seite am unsicheren Ursprung `http://example.com/` herunterzuladen. Wenn sich dieser Code auf einer Seite befindet, die über HTTPS bereitgestellt wird, führt das Speichern des Links zu einem gemischten Download.

```html
<a href="http://example.com/" download>Download</a>
```

Browser werden erwartet, gemischte Downloads zu blockieren, und sichere Seiten sollten diese nicht enthalten.

> [!NOTE]
> Browser blockieren gemischte Downloads üblicherweise standardmäßig, informieren jedoch die Benutzer über das Risiko und erlauben ihnen, den Download beizubehalten oder zu verwerfen.

## Entwicklertools-Konsole

Die Entwicklertools-Konsole zeigt Warnungen an, wenn gemischte Inhalte hochgestuft oder blockiert werden. Diese können verwendet werden, um gemischte Inhalte auf Ihren Webseiten zu debuggen und zu beheben.

Der folgende Screenshot zeigt die Konsolenwarnung, wenn ein Bild in Firefox hochgestuft wird (Chrome hat eine ähnliche Warnung).

![Screenshot der Webkonsole, die eine Hochstufungswarnung für ein gemischtes Inhaltsbild anzeigt.](mixed_content_console_upgradable.png)

In Browser-Versionen, die immer noch "optional blockierbare" Inhalte anzeigen, wird ein Symbol verwendet, das anzeigt, dass es gemischte Inhalte in den angezeigten Inhalten gibt, zusammen mit einer Konsolenwarnung. Der folgende Screenshot zeigt das Symbol und die Konsolenwarnung für Firefox, das die Unterstützung für hochstufbare gemischte Inhalte begann.

![Screenshot der Webkonsole, die eine Anzeige-Warnung für ein gemischtes Inhaltsbild anzeigt.](mixed_content_console_displayed.png)

## Behebung von gemischten Inhaltsproblemen

Die beste Strategie, um Probleme mit gemischten Inhalten zu vermeiden, besteht darin, alle Inhalte als HTTPS bereitzustellen:

- Stellen Sie alle Inhalte von Ihrer Domain als HTTPS bereit.
- Machen Sie alle Verweise auf Ressourcen, die auf Ihrer Domain gehostet werden, zu relativen Links oder HTTPS-Links, einschließlich Downloads.
- Wenn Sie Ressourcen auf anderen Websites verwenden, nutzen Sie HTTPS-Versionen, falls verfügbar.

  Die meisten Websites bieten HTTPS-Versionen von gemeinsamen Ressourcen an. Oft ist der einfachste Ansatz, alle `http://`-Links durch `https://` zu ersetzen und dann Tools wie [LinkChecker](https://linkchecker.github.io/linkchecker/) zu verwenden, um zu überprüfen, ob alle Links funktionieren.

Es gibt mehrere Möglichkeiten zu überprüfen, ob Ihre Seite frei von gemischten Inhalten ist, einschließlich:

- Navigieren Sie auf Ihrer Website und überprüfen Sie die [Entwicklertools-Konsole](#entwicklertools-konsole) Ihres Browsers auf Warnungen zu gemischten Inhalten.
- Deaktivieren Sie alle gemischten Inhalte in Ihrem Browser und testen Sie, ob Seiten wie erwartet funktionieren. Dies ist der Standard für Safari, aber die meisten Browser unterstützen irgendeinen Mechanismus zum Blockieren aller gemischten Inhalte (siehe [Kompatibilitätsdaten](#browser-kompatibilität)).
- Verwenden Sie einen Desktop-basierten Webcrawler wie [HTTPSChecker](https://httpschecker.net/how-it-works) oder ein CLI-Tool wie [mcdetect](https://github.com/agis/mcdetect), um Ihre Website rekursiv zu überprüfen und Links zu unsicheren Inhalten zu finden.
- Verwenden Sie ein Online-Tool wie [Mixed Content Checker](https://www.crawlcenter.com/mixed-content-checker), um Ihre Seite zu überprüfen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [CSP: `upgrade-insecure-requests`](/de/docs/Web/HTTP/Headers/Content-Security-Policy/upgrade-insecure-requests) rüstet alle Anfragen auf HTTPS auf, einschließlich blockierbarer gemischter Inhalte
