---
title: Gemischter Inhalt
slug: Web/Security/Mixed_content
l10n:
  sourceCommit: bea339d321513fc6d66d95c8f0305b9387fa57bb
---

{{QuickLinksWithSubpages("/de/docs/Web/Security")}}

Wenn eine Webseite von einer sicheren Quelle über einen sicheren Kanal wie {{Glossary("HTTPS", "HTTPS")}} geladen wird, ist die Verbindung mit dem Webserver verschlüsselt und somit vor Abhören und Veränderung durch Man-in-the-Middle-Angriffe geschützt.
Wenn die sicher geladene Webseite nur Bilder, Skripte und andere Ressourcen enthält, die ebenfalls auf sicheren Quellen gehostet sind, können Benutzer sicher sein, dass die gesamte Seite vor solchen Angriffen geschützt ist.

"Gemischter Inhalt" bezieht sich auf sicher geladene Webseiten, die Ressourcen verwenden, die über HTTP oder ein anderes unsicheres Protokoll abgerufen werden sollen.
Diese Art von Webseite ist potenziell unsicher, da alle unsicher gesendeten Ressourcen eingesehen werden können, möglicherweise sensible Informationen preisgeben und/oder von einem Angreifer verändert werden können.
Skripte sind besonders gefährlich, da sie jeden Aspekt der Seite ändern können, aber alle Arten von Ressourcen bergen ein gewisses Risiko.
Beispielsweise können Bilder verändert werden, um dem Benutzer falsche oder irreführende Informationen zu geben oder die scheinbare Funktion eines Buttons zu ändern.

"Gemischte Downloads" beziehen sich auf Ressourcendownloads, die von einem sicheren Kontext initiiert werden, aber über eine unsichere Verbindung abgerufen werden.
Diese bergen die gleichen Risiken wie gemischter Inhalt: Downloads scheinen von einer sicheren Quelle zu stammen, könnten aber unterwegs verändert oder eingesehen worden sein.

Sie sollten gemischten Inhalt und gemischte Downloads auf Ihren Websites vermeiden!
Browser mindern die Risiken gemischten Inhalts, indem sie Anfragen für gemischte Inhalte für Bilder, Videos und Audios automatisch von HTTP zu HTTPS hochstufen und unsichere Anfragen für alle anderen Ressourcentypen blockieren.
Sie sollten auch gemischte Downloads standardmäßig blockieren.

## Arten von gemischtem Inhalt

Gemischter Inhalt auf einer Webseite wird in zwei Kategorien unterteilt: "hochstufbarer Inhalt" und "blockierbarer Inhalt".
Browser sollten Anfragen für hochstufbaren Inhalt automatisch von HTTP zu HTTPS hochstufen und Anfragen für blockierbaren Inhalt blockieren.

Dieser Ansatz stellt sicher, dass aller Inhalt in einem sicheren Kontext entweder über einen sicheren Kanal geladen oder blockiert wird, was für Benutzer sicherer ist als das Anzeigen einer Mischung aus sicherem und unsicherem Inhalt und weniger störend ist als das vollständige Blockieren aller unsicheren Inhalte.

> [!NOTE]
> Frühere Versionen der Spezifikation teilten den gemischten Inhalt in die Kategorien "blockierbar" und "optional blockierbar":
>
> - Blockierbare Inhaltstypen, auch bekannt als "aktiver gemischter Inhalt", waren solche, die andere Teile der Webseite ändern konnten, wie Skripte und Stylesheets.
>   Das potenzielle Risiko, wenn diese Dateien verändert werden, ist sehr hoch, und Browser mussten sie blockieren.
> - Optional blockierbare Inhaltstypen, auch bekannt als "passiver gemischter Inhalt", waren solche, die keinen anderen Inhalt auf der Webseite ändern konnten, wie Bilder, Videos und Audiodateien.
>   Das potenzielle Risiko, diese Dateien zuzulassen, war niedriger, daher konnten Browser entscheiden, ob sie sie blockieren oder anzeigen, oder die Entscheidung an den Benutzer weitergeben.

Die Menge an Ressourcentypen, die "hochstufbaren Inhalt" umfassen, wurde von der Menge an "optional blockierbarem" gemischtem Inhalt abgeleitet.
Es wird erwartet, dass alle neuen Dateitypen als blockierbarer Inhalt definiert werden und dass einige hochstufbare Inhalte in der Zukunft blockierbar werden könnten.

### Hochstufbarer Inhalt

Hochstufbare Inhaltsanfragen sind solche, bei denen eine unsichere Anfrage automatisch in eine sichere Anfrage hochgestuft wird, indem das Ursprungsschema von `http` zu `https` geändert wird.
Der entfernte Server wird entweder mit der Ressource antworten oder mit einem Statuscode, der anzeigt, dass sie nicht gefunden wurde.

Die Ressourcentypen in dieser Kategorie sind solche, bei denen das Blockieren der Anfrage das Risiko birgt, wesentliche Teile des Webs zu stören.
Diese entsprechen derzeit den gemischten Inhaltstypen, die zuvor als "optional blockierbar" galten, da sie auf einigen Websites noch verwendet werden.

Die folgenden Elemente sind hochstufbar (außer wenn der URL-Host als IP-Adresse angegeben ist – siehe den folgenden Abschnitt):

- {{HTMLElement("img")}} wobei der Ursprung über das `src`-Attribut festgelegt wird, einschließlich SVG-Dokumente (jedoch nicht beim Festlegen von Ressourcen mit `srcset` oder `<picture>`).
- CSS-Bildelemente wie: `background-image`, `border-image`, usw.
- {{HTMLElement("audio")}} wobei der Ursprung mit dem `src`-Attribut festgelegt ist.
- {{HTMLElement("video")}} wobei der Ursprung mit dem `src`-Attribut festgelegt ist.
- {{HTMLElement("source")}} wobei Video- oder Ursprungsressource festgelegt ist.

### Blockierbarer Inhalt

Blockierbarer Inhalt wird als "aller gemischter Inhalt, der nicht hochstufbar ist" definiert.

Dies umfasst HTTP-Anfragen, die von den folgenden Elementen resultieren (diese Liste ist nicht erschöpfend):

- {{HTMLElement("script")}} wobei der Ursprung über das `src`-Attribut festgelegt wird.
- {{HTMLElement("link")}} wobei der Ursprung im `href`-Attribut festgelegt ist und Stylesheets umfasst.
- {{HTMLElement("iframe")}} wobei der Ursprung über das `src`-Attribut festgelegt wird.
- [`fetch()`](/de/docs/Web/API/Window/fetch)-Anfragen
- [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest)-Anfragen
- Alle Fälle in CSS, in denen ein {{cssxref("url", "url()")}}-Wert verwendet wird ({{cssxref("@font-face")}}, {{cssxref("cursor")}}, {{cssxref("background-image")}}, und so weiter).
- {{HTMLElement("object")}} (`data`-Attribut)
- [`Navigator.sendBeacon`](/de/docs/Web/API/Navigator/sendBeacon) (`url`-Attribut)
- {{HTMLElement("img")}} wobei der Ursprung über `srcset` oder `<picture>` festgelegt wird.
- Webfonts

Gemischte Inhaltsanfragen, die sonst hochgestuft würden, werden blockiert, wenn der Host der URL eine IP-Adresse anstelle eines Domainnamens ist.
So wird `<img src="http://example.com/image.png">` hochgestuft, aber `<img src="http://93.184.215.14/image.png">` wird blockiert.

## Beispiele für gemischte Inhaltsanfragen

Gemischte Inhaltsanfragen sind unsichere Anfragen für Ressourcen aus einem [sicheren Kontext](/de/docs/Web/Security/Secure_Contexts):

Die folgenden Beispiele demonstrieren sichere, unsichere und gemischte Inhaltsanfragen:

- `http://insecure.com` lädt `http://also.insecure.com` — ist keine gemischte Inhaltsanfrage, da beide Ursprünge unsicher sind.
- `https://secure.com` lädt `http://insecure.com` — ist eine gemischte Inhaltsanfrage, da die unsichere Ressource `http://insecure.com` in den sicheren Kontext `https://secure.com` geladen wird.
- `http://insecure.com` lädt `https://secure.com` in einem `<iframe>`, das wiederum `http://also.insecure.com` lädt — das Laden von `https://secure.com` in `http://insecure.com` ist keine gemischte Inhaltsanfrage (es gibt keine Einschränkung beim Laden eines sicheren Kontexts in einen unsicheren Kontext).
  Das Laden von `http://also.insecure.com` in den sicheren Rahmen `https://secure.com` ist jedoch eine gemischte Inhaltsanfrage.
- `https://secure.com` rahmt eine `data:`-URL ein, die `http://insecure.com` lädt — dies ist eine gemischte Inhaltsanfrage, da `https://secure.com` (und folglich `data:`) sicher geladen wurden und `http://insecure.com` unsicher ist.

Gemischte Kontextanfragen können auch von sicheren Kontexten wie Plugins oder Arbeitern gemacht werden und werden auf die gleiche Weise hochgestuft/blockiert.

Beachten Sie jedoch, dass Navigationsanfragen aus einem sicheren Kontext, die unsichere Ziel-Browsing-Kontexte der obersten Ebene anvisieren, nicht als gemischter Inhalt betrachtet werden, da sie einen neuen Kontext erstellen, der entweder sicher oder unsicher ist, unabhängig vom Ursprung der Anfrage.

### Laden von lokal bereitgestellten gemischten Ressourcen

Lokale Ressourcen werden als aus sicheren Ursprüngen stammend betrachtet, genau wie HTTPS-Ursprünge.
Dazu gehören `file:`-URLs und Inhalte, auf die über Loopback-Adressen wie `http://127.0.0.1/` oder `http://localhost/` zugegriffen wird.

Sie können diese Dateien aus sicheren Kontexten laden, und Sie werden immer noch einen sicheren Kontext haben.
Wenn jedoch eine lokale Datei eine unsichere Ressource über `http:` lädt, wäre dies eine gemischte Inhaltsanfrage.

Die Unterstützung für das Laden lokaler Inhalte kann im Abschnitt [Browser-Kompatibilität](#browser-kompatibilität) überprüft werden.

## Gemischte Downloads

Ein gemischter Download ist ein Ressourcendownload aus einem sicheren Kontext über eine unsichere Verbindung.
Sie sind aus den gleichen Gründen problematisch wie gemischter Inhalt — Inhalte könnten abgefangen und/oder von einem Angreifer verändert werden, und es ist für Benutzer nicht offensichtlich, dass dies auf einer sicheren Seite passieren könnte.

Zum Beispiel definiert der folgende Code ein [`<a>`](/de/docs/Web/HTML/Element/a#download)-Element, das verwendet werden könnte, um die Seite am unsicheren Ursprung `http://example.com/` herunterzuladen.
Wenn dieser Code sich auf einer Seite befindet, die über HTTPS bereitgestellt wird, führt das Speichern des Links zu einem gemischten Download.

```html
<a href="http://example.com/" download>Download</a>
```

Es wird erwartet, dass Browser gemischte Downloads blockieren, und sichere Seiten sollten sie nicht enthalten.

> [!NOTE]
> Browser blockieren gemischte Downloads normalerweise standardmäßig, informieren Benutzer jedoch über das Risiko und erlauben ihnen, den Download zu behalten oder zu verwerfen.

## Entwicklertoolkonsole

Die Entwicklertoolkonsole zeigt Warnungen an, wenn gemischte Inhalte hochgestuft oder blockiert werden.
Diese können verwendet werden, um gemischte Inhalte auf Ihren Websites zu debuggen und zu beheben.

Der untenstehende Screenshot zeigt die Konsolenwarnung, wenn ein Bild in Firefox (Chrome hat eine ähnliche Warnung) hochgestuft wird.

![Screenshot der Webkonsole, die eine Aufstufungswarnung für ein Bild mit gemischtem Inhalt anzeigt.](mixed_content_console_upgradable.png)

In Browserversionen, die noch "optional blockierbaren" Inhalt anzeigen, wird ein Symbol verwendet, um anzuzeigen, dass gemischter Inhalt im angezeigten Inhalt vorhanden ist, zusammen mit einer Konsolenwarnung.
Der untenstehende Screenshot zeigt das Symbol und die Konsolenwarnung für Firefox, der gemischten Inhalt mit Aufstufungsmöglichkeit unterstützt.

![Screenshot der Webkonsole, die eine Anzeige von Warnungen für ungeschützten Inhalt anzeigt.](mixed_content_console_displayed.png)

## Behebung von Problemen mit gemischtem Inhalt

Die beste Strategie zur Vermeidung von Problemen mit gemischtem Inhalt besteht darin, alle Inhalte als HTTPS bereitzustellen:

- Bereitstellung aller Inhalte Ihrer Domain als HTTPS.
- Machen Sie alle Referenzen zu Ressourcen, die auf Ihrer Domain gehostet werden, zu relativen Links oder HTTPS-Links, einschließlich für Downloads.
- Wenn Sie Ressourcen auf anderen Seiten verwenden, verwenden Sie HTTPS-Versionen, wenn verfügbar.

  Die meisten Seiten bieten HTTPS-Versionen von geteilten Ressourcen an.
  Oft besteht der einfachste Ansatz darin, alle `http://`-Links durch `https://` zu ersetzen und dann Werkzeuge wie [LinkChecker](https://linkchecker.github.io/linkchecker/) zu verwenden, um zu überprüfen, dass alle Links funktionieren.

Es gibt eine Reihe von Möglichkeiten, um sicherzustellen, dass Ihre Seite frei von gemischtem Inhalt ist, einschließlich:

- Navigieren Sie auf Ihrer Seite und überprüfen Sie die [Entwicklerkonsole](#entwicklertoolkonsole) Ihres Browsers auf Warnungen zu gemischtem Inhalt.
- Deaktivieren Sie allen gemischten Inhalt in Ihrem Browser und testen Sie, dass Seiten wie erwartet funktionieren.
  Dies ist die Standardeinstellung für Safari, aber die meisten Browser bieten einen Mechanismus zum Blockieren aller gemischten Inhalte (siehe [Kompatibilitätsdaten](#browser-kompatibilität)).
- Verwenden Sie einen Desktop-basierten Webcrawler wie [HTTPSChecker](https://httpschecker.net/how-it-works) oder ein CLI-Tool wie [mcdetect](https://github.com/agis/mcdetect), um Ihre Website rekursiv zu überprüfen und Links zu unsicheren Inhalten zu finden.
- Verwenden Sie ein Online-Tool wie den [Mixed Content Checker](https://www.crawlcenter.com/mixed-content-checker), um Ihre Seite zu überprüfen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [CSP: `upgrade-insecure-requests`](/de/docs/Web/HTTP/Headers/Content-Security-Policy/upgrade-insecure-requests) stuft alle Anfragen auf HTTPS hoch, einschließlich blockierbarem gemischtem Inhalt
