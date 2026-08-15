---
title: Mixed Content
slug: Web/Security/Defenses/Mixed_content
l10n:
  sourceCommit: 972c6cc542e271e4c00def9465d7a0cc81011378
---

Wenn eine Webseite von einem sicheren Ursprung über einen sicheren Kanal wie {{Glossary("HTTPS", "HTTPS")}} geladen wird, ist die Verbindung mit dem Webserver verschlüsselt und somit vor Lauschangriffen und Manipulation durch [man in the middle (MITM)](/de/docs/Web/Security/Attacks/MITM) Angriffe geschützt.
Wenn die sicher geladene Webseite nur Bilder, Skripte und andere Ressourcen enthält, die ebenfalls von sicheren Ursprüngen stammen, können Benutzer sicher sein, dass die gesamte Seite vor diesen Arten von Angriffen geschützt ist.

"Mixed Content" bezieht sich auf sicher geladene Webseiten, die Ressourcen nutzen, die über HTTP oder ein anderes unsicheres Protokoll abgerufen werden sollen.
Diese Art von Webseite ist potenziell unsicher, da alle unsicher gesendeten Ressourcen eingesehen werden können, was möglicherweise sensible Informationen preisgibt, und/oder von einem Angreifer modifiziert werden können.
Skripte sind besonders gefährlich, da sie jeden Aspekt der Seite ändern können, aber alle Arten von Ressourcen bergen ein gewisses Risiko.
Zum Beispiel können Bilder verändert werden, um dem Benutzer falsche oder irreführende Informationen zu geben oder um die scheinbare Funktion eines Buttons zu ändern.

"Mixed Downloads" beziehen sich auf Ressourcendownloads, die von einem sicheren Kontext initiiert werden, aber über eine unsichere Verbindung abgerufen werden.
Diese bergen die gleichen Risiken wie Mixed Content: Downloads scheinen von einem sicheren Ursprung zu stammen, könnten jedoch auf dem Weg modifiziert oder eingesehen worden sein.

Sie sollten gemischten Content und gemischte Downloads auf Ihren Websites vermeiden!
Browser mindern die Risiken eines gemischten Inhalts, indem sie Bild-, Video- und Audioanfragen von HTTP auf HTTPS automatisch umstellen und unsichere Anfragen für alle anderen Ressourcentypen blockieren.
Sie sollten auch _gemischte Downloads_ standardmäßig blockieren.

## Arten von Mixed Content

Mixed Content auf einer Webseite wird in zwei Kategorien unterteilt: "aufrüstbarer Inhalt" und "blockierbarer Inhalt".
Browser sollten Anfragen für aufrüstbaren Inhalt automatisch von HTTP auf HTTPS umstellen und Anfragen für blockierbaren Inhalt blockieren.

Dieser Ansatz stellt sicher, dass alle Inhalte in einem sicheren Kontext entweder über einen sicheren Kanal geladen oder blockiert werden, was für Benutzer sicherer ist, als eine Mischung aus sicherem und unsicherem Inhalt anzuzeigen, und weniger störend als Webseiten zu unterbrechen, indem absolut alle unsicheren Inhalte blockiert werden.

> [!NOTE]
> Frühere Versionen der Spezifikation unterteilten Mixed Content in "blockierbare" und "optional blockierbare" Kategorien:
>
> - Blockierbare Inhaltstypen, auch als "aktiver gemischter Inhalt" bezeichnet, waren solche, die andere Teile der Webseite ändern konnten, wie Skripte und Stylesheets.
>   Das potenzielle Risiko, wenn diese Dateien modifiziert werden, ist sehr hoch, und Browser waren verpflichtet, sie zu blockieren.
> - Optional blockierbare Inhaltstypen, auch als "passiver gemischter Inhalt" bekannt, waren solche, die keinen anderen Inhalt auf der Webseite ändern konnten, wie Bilder, Videos und Audiodateien.
>   Das potenzielle Risiko der Zulassung dieser Dateien war geringer, sodass Browser wählen konnten, sie zu blockieren oder anzuzeigen, oder die Entscheidung dem Benutzer zu überlassen.

Die Gruppe der Ressourcentypen, die "aufrüstbarer Inhalt" ausmachen, wurde aus der Gruppe des "optional blockierbaren" gemischten Inhalts abgeleitet.
Die Erwartung ist, dass alle neuen Dateitypen als blockierbarer Inhalt definiert werden, und einige aufrüstbare Inhalte in Zukunft blockierbar werden können.

### Aufrüstbarer Inhalt

Aufrüstbare Inhaltsanfragen sind solche, bei denen eine unsichere Anfrage automatisch in eine sichere Anfrage umgewandelt wird, indem das Ursprungsschema von `http` in `https` geändert wird.
Der entfernte Server antwortet entweder mit der Ressource oder einem Statuscode, der anzeigt, dass sie nicht gefunden wurde.

Die Ressourcentypen in dieser Kategorie sind solche, bei denen das Blockieren der Anfrage das Risiko birgt, bedeutende Teile des Webs zu stören.
Diese entsprechen derzeit den gemischten Inhaltstypen, die zuvor "optional blockierbar" waren, da sie auf einigen Websites noch verwendet werden.

Die folgenden Elemente sind aufrüstbar (außer wenn der URL-Host als IP-Adresse angegeben ist – siehe den folgenden Abschnitt):

- {{HTMLElement("img")}}, bei denen der Ursprung über das `src`-Attribut festgelegt ist, einschließlich SVG-Dokumente (aber nicht, wenn Ressourcen mit `srcset` oder `<picture>` festgelegt werden).
- CSS-Bildelemente wie: `background-image`, `border-image` usw.
- {{HTMLElement("audio")}}, bei denen der Ursprung mit dem `src`-Attribut festgelegt ist.
- {{HTMLElement("video")}}, bei denen der Ursprung mit dem `src`-Attribut festgelegt ist.
- {{HTMLElement("source")}}, bei denen Video- oder Ursprungressourcen festgelegt sind.

### Blockierbarer Inhalt

Blockierbarer Inhalt ist definiert als "alle gemischten Inhalte, die nicht aufrüstbar sind".

Dazu gehören HTTP-Anfragen aus den folgenden Elementen (diese Liste ist nicht vollständig):

- {{HTMLElement("script")}}, bei denen der Ursprung über das `src`-Attribut festgelegt ist.
- {{HTMLElement("link")}}, bei denen der Ursprung im `href`-Attribut festgelegt ist, einschließlich Stylesheets.
- {{HTMLElement("iframe")}}, bei denen der Ursprung über das `src`-Attribut festgelegt ist.
- [`fetch()`](/de/docs/Web/API/Window/fetch)-Anfragen
- [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest)-Anfragen
- Alle Fälle in CSS, in denen ein {{CSSXref("url_value", "&lt;url&gt;")}}-Wert verwendet wird ({{cssxref("@font-face")}}, {{cssxref("cursor")}}, {{cssxref("background-image")}} usw.).
- {{HTMLElement("object")}} (`data`-Attribut)
- [`Navigator.sendBeacon`](/de/docs/Web/API/Navigator/sendBeacon) (`url`-Attribut)
- {{HTMLElement("img")}}, bei denen der Ursprung über `srcset` oder `<picture>` festgelegt ist.
- Webfonts

Gemischte Inhaltsanforderungen, die ansonsten aufgerüstet würden, werden blockiert, wenn der Host der URL eine IP-Adresse statt eines Domainnamens ist.
So wird `<img src="http://example.com/image.png">` aufgerüstet, aber `<img src="http://93.184.215.14/image.png">` wird blockiert.

## Beispiele für gemischte Inhaltsanforderungen

Gemischte Inhaltsanforderungen sind unsichere Anfragen nach Ressourcen aus einem [sicheren Kontext](/de/docs/Web/Security/Defenses/Secure_Contexts):

Die folgenden Beispiele zeigen sichere, unsichere und gemischte Inhaltsanforderungen:

- `http://insecure.com` lädt `http://also.insecure.com` – ist keine gemischte Inhaltsanfrage, weil beide Ursprünge unsicher sind.
- `https://secure.com` lädt `http://insecure.com` – ist eine gemischte Inhaltsanfrage, da die unsichere Ressource `http://insecure.com` in den sicheren Kontext `https://secure.com` geladen wird.
- `http://insecure.com` lädt `https://secure.com` in einem `<iframe>`, das wiederum `http://also.insecure.com` lädt – Das Laden von `https://secure.com` in `http://insecure.com` ist keine gemischte Inhaltsanfrage (es gibt keine Beschränkung für das Laden eines sicheren Kontexts in einen unsicheren Kontext).
  Allerdings ist das Laden von `http://also.insecure.com` in den sicheren Rahmen `https://secure.com` eine gemischte Inhaltsanfrage.
- `https://secure.com` umrahmt eine `data:`-URL, die `http://insecure.com` lädt – dies ist eine gemischte Inhaltsanfrage, da `https://secure.com` (und damit `data:`) sicher geladen wurden und `http://insecure.com` unsicher ist.

Gemischte Kontextanforderungen können auch aus sicheren Kontexten wie Plugins oder Arbeitern gemacht werden und werden auf die gleiche Weise aufgerüstet/blockiert.

Es ist jedoch zu beachten, dass Navigationsanforderungen von einem sicheren Kontext, die auf unsichere Zielnavigationskontexte abzielen, nicht als gemischte Inhalte betrachtet werden, da sie einen neuen Kontext erstellen, der entweder sicher oder unsicher ist, unabhängig vom Ursprung der Anfrage.

### Laden von lokal bereitgestellten gemischten Ressourcen

Lokale Ressourcen gelten als sichere Ursprünge, genauso wie HTTPS-Ursprünge.
Dazu gehören `file:`-URLs und Inhalte, die von Loopback-Adressen wie `http://127.0.0.1/` oder `http://localhost/` abgerufen werden.

Sie können diese Dateien aus sicheren Kontexten laden und Sie werden immer noch einen sicheren Kontext haben.
Wenn jedoch eine lokale Datei eine unsichere Ressource über `http:` lädt, wäre es eine gemischte Inhaltsanfrage.

Die Unterstützung für das Laden lokaler Inhalte kann im Abschnitt [Browser-Kompatibilität](#browser-kompatibilität) überprüft werden.

## Gemischte Downloads

Ein gemischter Download ist ein Ressourcendownload von einem sicheren Kontext über eine unsichere Verbindung.
Diese sind aus den gleichen Gründen wie gemischte Inhalte problematisch – Inhalte könnten abgefangen und/oder modifiziert werden, und es ist für Benutzer nicht offensichtlich, dass dies auf einer sicheren Seite passieren könnte.

Zum Beispiel definiert der folgende Code ein [`<a>`](/de/docs/Web/HTML/Reference/Elements/a#download)-Element, das verwendet werden könnte, um die Seite vom unsicheren Ursprung `http://example.com/` herunterzuladen.
Wenn dieser Code sich auf einer Seite befindet, die über HTTPS bereitgestellt wird, resultiert das Speichern des Links in einem gemischten Download.

```html
<a href="http://example.com/" download>Download</a>
```

Browser sollten gemischte Downloads blockieren, und sichere Websites sollten sie nicht enthalten.

> [!NOTE]
> Browser blockieren gemischte Downloads typischerweise standardmäßig, informieren die Benutzer jedoch über das Risiko und erlauben ihnen, den Download zu behalten oder zu verwerfen.

## Entwicklertools-Konsole

Die Entwicklertools-Konsole zeigt Warnungen, wenn gemischte Inhalte aufgerüstet oder blockiert werden.
Diese können verwendet werden, um gemischte Inhalte auf Ihren Websites zu debuggen und zu beheben.

Der Screenshot unten zeigt die Konsolenwarnung, wenn ein Bild in Firefox aufgerüstet wird (Chrome hat eine ähnliche Warnung).

![Bildschirmfoto der Web-Konsole, die Upgrade-Warnung für gemischtes Inhaltsbild anzeigt.](mixed_content_console_upgradable.png)

In Browser-Versionen, die noch "optional blockierbare" Inhalte anzeigen, wird ein Symbol verwendet, um anzuzeigen, dass es gemischte Inhalte im angezeigten Inhalt gibt, zusammen mit einer Konsolenwarnung.
Der Screenshot unten zeigt das Symbol und die Konsolenwarnung für Firefox, der die Unterstützung von aufrüstbarem gemischten Inhalt startet.

![Bildschirmfoto der Web-Konsole, die Anzeige-Warnung für gemischtes Inhaltsbild anzeigt.](mixed_content_console_displayed.png)

## Behebung von Problemen mit gemischtem Inhalt

Die beste Strategie, um Probleme mit gemischtem Inhalt zu vermeiden, besteht darin, alle Inhalte als HTTPS bereitzustellen:

- Stellen Sie alle Inhalte von Ihrer Domain als HTTPS bereit.
- Machen Sie alle Verweise auf Ressourcen, die auf Ihrer Domain gehostet werden, zu relativen Links oder HTTPS-Links, einschließlich für Downloads.
- Wenn Sie Ressourcen auf anderen Seiten verwenden, nutzen Sie, wenn verfügbar, HTTPS-Versionen.

  Die meisten Seiten bieten HTTPS-Versionen von gemeinsamen Ressourcen an.
  Oft ist der einfachste Ansatz, alle `http://`-Links durch `https://` zu ersetzen und dann Tools wie [LinkChecker](https://linkchecker.github.io/linkchecker/) zu verwenden, um zu überprüfen, dass die Links alle funktionieren.

Es gibt eine Reihe von Möglichkeiten, um zu überprüfen, ob Ihre Seite frei von gemischtem Inhalt ist, darunter:

- Navigieren Sie auf Ihrer Seite und überprüfen Sie die [Entwicklertools-Konsole](#entwicklertools-konsole) Ihres Browsers auf Warnungen bezüglich gemischtem Inhalt.
- Deaktivieren Sie in Ihrem Browser alle gemischten Inhalte und testen Sie, ob Seiten wie erwartet funktionieren.
  Dies ist die Standardeinstellung für Safari, aber die meisten Browser unterstützen einen Mechanismus zum Blockieren aller gemischten Inhalte (siehe [Kompatibilitätsdaten](#browser-kompatibilität)).
- Verwenden Sie einen Desktop-basierten Web-Crawler wie [HTTPSChecker](https://httpschecker.net/how-it-works) oder ein CLI-Tool wie [mcdetect](https://github.com/agis/mcdetect), um Ihre Website rekursiv zu überprüfen und Links zu unsicherem Inhalt zu finden.
- Verwenden Sie ein Online-Tool wie [Mixed Content Checker](https://www.crawlcenter.com/mixed-content-checker) zur Überprüfung Ihrer Seite.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [CSP: `upgrade-insecure-requests`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/upgrade-insecure-requests) stuft alle Anfragen zu HTTPS hoch, einschließlich blockierbare gemischte Inhalte
