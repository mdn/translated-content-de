---
title: Mixed Content
slug: Web/Security/Mixed_content
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{QuickLinksWithSubpages("/de/docs/Web/Security")}}

Wenn eine Webseite von einem sicheren Ursprung über einen sicheren Kanal wie {{Glossary("HTTPS", "HTTPS")}} geladen wird, ist die Verbindung mit dem Webserver verschlüsselt und somit vor Abhören und Manipulation durch Man-in-the-Middle-Angriffe geschützt.
Wenn die sicher geladene Webseite nur Bilder, Skripte und andere Ressourcen enthält, die ebenfalls auf sicheren Ursprüngen gehostet werden, können Benutzer sicher sein, dass die gesamte Seite vor diesen Arten von Angriffen geschützt ist.

"Mixed Content" bezieht sich auf sicher geladene Webseiten, die Ressourcen verwenden, die über HTTP oder ein anderes unsicheres Protokoll abgerufen werden sollen.
Diese Art von Webseite ist potenziell unsicher, da alle unsicher gesendeten Ressourcen angesehen werden können, wodurch möglicherweise sensible Informationen offengelegt werden, und/oder von einem Angreifer verändert werden können.
Skripte sind besonders gefährlich, weil sie jeden Aspekt der Seite verändern können, aber alle Arten von Ressourcen bergen ein gewisses Risiko.
Zum Beispiel können Bilder geändert werden, um dem Benutzer falsche oder irreführende Informationen zu geben oder die scheinbare Funktion eines Buttons zu ändern.

"Gemischte Downloads" beziehen sich auf Ressourcendownloads, die von einem sicheren Kontext aus initiiert, aber über eine unsichere Verbindung abgerufen werden.
Diese teilen die gleichen Risiken wie gemischte Inhalte: Downloads scheinen aus einem sicheren Ursprung zu kommen, könnten jedoch während des Transports verändert oder angesehen worden sein.

Sie sollten die Verwendung von gemischten Inhalten und gemischten Downloads auf Ihren Webseiten vermeiden!
Browser mindern die Risiken von gemischten Inhalten, indem sie Bild-, Video- und Audiogemischte Inhaltsanfragen automatisch von HTTP auf HTTPS upgraden und unsichere Anforderungen für alle anderen Ressourcentypen blockieren.
Sie sollten _gemischte Downloads_ standardmäßig ebenfalls blockieren.

## Arten von gemischten Inhalten

Gemischte Inhalte auf einer Webseite werden in zwei Kategorien unterteilt: "upgradable content" und "blockable content".
Browser sollten Anforderungen für upgradable content automatisch von HTTP auf HTTPS upgraden und Anforderungen für blockable content blockieren.

Dieser Ansatz stellt sicher, dass alle Inhalte in einem sicheren Kontext entweder über einen sicheren Kanal geladen oder blockiert werden, was für Benutzer sicherer ist als das Anzeigen einer Mischung aus sicheren und unsicheren Inhalten und weniger störend ist, als wenn absolut alle unsicheren Inhalte blockiert würden.

> [!NOTE]
> Frühere Versionen der Spezifikation unterteilten gemischte Inhalte in die Kategorien "blockable" und "optionally blockable":
>
> - Blockable content types, auch als "active mixed content" bezeichnet, waren solche, die andere Teile der Webseite modifizieren konnten, wie Skripte und Stylesheets.
>   Das potenzielle Risiko, wenn diese Dateien verändert werden, ist sehr hoch, und Browser mussten sie blockieren.
> - Optionally blockable content types, auch bekannt als "passive mixed content", waren solche, die keinen anderen Inhalt auf der Webseite modifizieren konnten, wie Bilder, Videos und Audiodateien.
>   Das potenzielle Risiko, diese Dateien zuzulassen, war geringer, sodass Browser wählen konnten, ob sie sie blockieren oder anzeigen oder die Entscheidung dem Benutzer überlassen.

Die Menge an Ressourcentypen, die "upgradable content" umfasst, wurde von der Menge an "optionally blockable" gemischten Inhalten abgeleitet.
Die Erwartung ist, dass alle neuen Dateitypen als blockable content definiert werden und einige upgradable content in Zukunft blockable werden könnten.

### Upgradable Content

Upgradable content-Anfragen sind solche, bei denen eine unsichere Anfrage automatisch zu einer sicheren Anfrage upgegradet wird, indem das Ursprungsschema von `http` auf `https` geändert wird.
Der entfernte Server antwortet entweder mit der Ressource oder einem Statuscode, der anzeigt, dass sie nicht gefunden wurde.

Die Ressourcentypen in dieser Kategorie sind solche, bei denen das Blockieren der Anfrage das Risiko birgt, bedeutende Teile des Webs zu beeinträchtigen.
Diese entsprechen aktuell den gemischten Inhaltstypen, die zuvor "optionally blockable" waren, da sie immer noch auf einigen Websites verwendet werden.

Die folgenden Elemente sind upgradable (außer wenn der URL-Host als IP-Adresse angegeben ist – siehe nächsten Abschnitt):

- {{HTMLElement("img")}}, wenn der Ursprung über das `src`-Attribut festgelegt wurde, einschließlich SVG-Dokumente (aber nicht, wenn Ressourcen mit `srcset` oder `<picture>` festgelegt werden).
- CSS-Bild-Elemente wie: `background-image`, `border-image`, etc.
- {{HTMLElement("audio")}}, wenn der Ursprung mit dem `src`-Attribut festgelegt wurde.
- {{HTMLElement("video")}}, wenn der Ursprung mit dem `src`-Attribut festgelegt wurde
- {{HTMLElement("source")}}, wenn die Video- oder Ursprungsressource festgelegt wurde.

### Blockable Content

Blockable content wird definiert als "alle gemischten Inhalte, die nicht upgradable sind".

Dies umfasst HTTP-Anfragen, die von den folgenden Elementen resultieren (diese Liste ist nicht abschließend):

- {{HTMLElement("script")}}, wenn der Ursprung über das `src`-Attribut festgelegt wurde
- {{HTMLElement("link")}}, wenn der Ursprung im `href`-Attribut festgelegt wurde, und Stylesheets umfasst
- {{HTMLElement("iframe")}}, wenn der Ursprung über das `src`-Attribut festgelegt wurde
- [`fetch()`](/de/docs/Web/API/Window/fetch) Anfragen
- [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) Anfragen
- Alle Fälle in CSS, in denen ein {{CSSXref("url_value", "&lt;url&gt;")}}-Wert verwendet wird ({{cssxref("@font-face")}}, {{cssxref("cursor")}}, {{cssxref("background-image")}} usw.).
- {{HTMLElement("object")}} (`data`-Attribut)
- [`Navigator.sendBeacon`](/de/docs/Web/API/Navigator/sendBeacon) (`url`-Attribut)
- {{HTMLElement("img")}}, wenn der Ursprung über `srcset` oder `<picture>` festgelegt wurde.
- Web Fonts

Gemischte Inhaltsanfragen, die ansonsten upgegradet würden, werden blockiert, wenn der Host der URL eine IP-Adresse statt eines Domainnamens ist.
Also `<img src="http://example.com/image.png">` wird upgegradet, aber `<img src="http://93.184.215.14/image.png">` wird blockiert.

## Beispiele für gemischte Inhaltsanforderungen

Gemischte Inhaltsanforderungen sind unsichere Anforderungen für Ressourcen aus einem [sicheren Kontext](/de/docs/Web/Security/Secure_Contexts):

Die folgenden Beispiele demonstrieren sichere, unsichere und gemischte Inhaltsanforderungen:

- `http://insecure.com` lädt `http://also.insecure.com` – ist keine gemischte Inhaltsanforderung, da beide Ursprünge unsicher sind.
- `https://secure.com` lädt `http://insecure.com` – ist eine gemischte Inhaltsanforderung, da die unsichere Ressource `http://insecure.com` in den sicheren Kontext `https://secure.com` geladen wird.
- `http://insecure.com` lädt `https://secure.com` in einem `<iframe>`, welches wiederum `http://also.insecure.com` lädt – das Laden von `https://secure.com` in `http://insecure.com` ist keine gemischte Inhaltsanforderung (es gibt keine Einschränkung zum Laden eines sicheren Kontexts in einen unsicheren Kontext).
  Das Laden von `http://also.insecure.com` in den sicheren Frame `https://secure.com` ist jedoch eine gemischte Inhaltsanforderung.
- `https://secure.com` umfasst eine `data:`-URL, die `http://insecure.com` lädt – dies ist eine gemischte Inhaltsanforderung, da `https://secure.com` (und somit `data:`) sicher geladen wurde und `http://insecure.com` unsicher ist.

Gemischte Kontextanforderungen können auch von sicheren Kontexten wie Plugins oder Workern gemacht werden und werden auf die gleiche Weise upgegradet/geblockt.

Beachten Sie jedoch, dass Navigationsanforderungen von einem sicheren Kontext, die unsichere Zielkontexte der obersten Browserebene anvisieren, nicht als gemischte Inhalte angesehen werden, da sie einen neuen Kontext erzeugen, der entweder sicher oder unsicher ist, unabhängig vom Ursprung der Anforderung.

### Laden lokal ausgelieferter gemischter Ressourcen

Lokale Ressourcen werden als sichere Ursprünge betrachtet, ebenso wie HTTPS-Ursprünge.
Dies umfasst `file:`-URLs und Inhalte, die von Loopback-Adressen wie `http://127.0.0.1/` oder `http://localhost/` abgerufen werden.

Sie können diese Dateien aus sicheren Kontexten laden und haben dennoch einen sicheren Kontext.
Wenn jedoch eine lokale Datei eine unsichere Ressource über `http:` lädt, wäre dies eine gemischte Inhaltsanforderung.

Die Unterstützung für das Laden lokaler Inhalte kann im Abschnitt [Browser-Kompatibilität](#browser-kompatibilität) überprüft werden.

## Gemischte Downloads

Ein gemischter Download ist ein Ressourcendownload von einem sicheren Kontext über eine unsichere Verbindung.
Sie sind aus den gleichen Gründen wie gemischte Inhalte problematisch – Inhalte können von einem Angreifer abgefangen und/oder verändert werden, und es ist für Benutzer nicht offensichtlich, dass dies auf einer sicheren Seite passieren könnte.

Zum Beispiel definiert der folgende Code ein [`<a>`](/de/docs/Web/HTML/Element/a#download)-Element, das verwendet werden könnte, um die Seite beim unsicheren Ursprung `http://example.com/` herunterzuladen.
Wenn dieser Code auf einer Seite, die über HTTPS bereitgestellt wird, steht, führt das Speichern des Links zu einem gemischten Download.

```html
<a href="http://example.com/" download>Download</a>
```

Es wird erwartet, dass Browser gemischte Downloads blockieren, und sichere Seiten sollten diese nicht enthalten.

> [!NOTE]
> Browser blockieren gemischte Downloads üblicherweise standardmäßig, informieren jedoch Benutzer über das Risiko und erlauben ihnen, den Download zu behalten oder zu verwerfen.

## Entwicklerkonsole

Die Entwicklerkonsole zeigt Warnungen an, wenn gemischte Inhalte upgegradet oder blockiert werden.
Diese können verwendet werden, um gemischte Inhalte auf Ihren Webseiten zu debuggen und zu beheben.

Der folgende Screenshot zeigt die Konsolenwarnung, wenn ein Bild in Firefox upgegradet wird (Chrome hat eine ähnliche Warnung).

![Screenshot der Webkonsole, die die Upgrade-Warnung für gemischtes Inhaltsbild anzeigt.](mixed_content_console_upgradable.png)

In Browserversionen, die immer noch "optionally blockable"-Inhalte anzeigen, wird ein Symbol verwendet, um anzuzeigen, dass gemischte Inhalte in den angezeigten Inhalten vorhanden sind, zusammen mit einer Konsolenwarnung.
Der Screenshot unten zeigt das Symbol und die Konsolenwarnung für Firefox, das das Upgrading von gemischten Inhalten unterstützt.

![Screenshot der Webkonsole, die die Anzeige-Warnung für gemischtes Inhaltsbild anzeigt.](mixed_content_console_displayed.png)

## Behebung von Problemen mit gemischten Inhalten

Die beste Strategie, um Probleme mit gemischten Inhalten zu vermeiden, besteht darin, alle Inhalte als HTTPS zu liefern:

- Liefern Sie alle Inhalte von Ihrer Domain als HTTPS.
- Machen Sie alle Verweise auf auf Ihrer Domain gehostete Ressourcen zu relativen Links oder HTTPS-Links, einschließlich für Downloads.
- Wenn Ressourcen auf anderen Websites verwendet werden, nutzen Sie, wenn verfügbar, HTTPS-Versionen.

  Die meisten Websites bieten HTTPS-Versionen von gemeinsam genutzten Ressourcen an. Oft ist der einfachste Ansatz, alle `http://`-Links durch `https://` zu ersetzen und dann Tools wie [LinkChecker](https://linkchecker.github.io/linkchecker/) zu verwenden, um zu überprüfen, ob alle Links funktionieren.

Es gibt eine Reihe von Möglichkeiten, um zu überprüfen, dass Ihre Seite frei von gemischten Inhalten ist:

- Navigieren Sie auf Ihrer Website und überprüfen Sie die [Entwicklerkonsole](#entwicklerkonsole) Ihres Browsers auf Warnungen zu gemischten Inhalten.
- Deaktivieren Sie alle gemischten Inhalte in Ihrem Browser und testen Sie, ob die Seiten wie erwartet funktionieren.
  Dies ist der Standard in Safari, aber die meisten Browser unterstützen eine Mechanik zum Blockieren aller gemischten Inhalte (siehe [Kompatibilitätsdaten](#browser-kompatibilität)).
- Verwenden Sie einen desktopbasierten Webcrawler wie [HTTPSChecker](https://httpschecker.net/how-it-works) oder ein CLI-Tool wie [mcdetect](https://github.com/agis/mcdetect), um Ihre Website rekursiv zu überprüfen und Links zu unsicheren Inhalten zu finden.
- Verwenden Sie ein Online-Tool wie den [Mixed Content Checker](https://www.crawlcenter.com/mixed-content-checker), um Ihre Website zu überprüfen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [CSP: `upgrade-insecure-requests`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/upgrade-insecure-requests) aktualisiert alle Anfragen auf HTTPS, einschließlich blockierbarer gemischter Inhalte
