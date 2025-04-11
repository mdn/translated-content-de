---
title: Mixed Content
slug: Web/Security/Mixed_content
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{QuickLinksWithSubpages("/de/docs/Web/Security")}}

Wenn eine Webseite von einem sicheren Ursprung über einen sicheren Kanal wie {{Glossary("HTTPS", "HTTPS")}} geladen wird, ist die Verbindung mit dem Webserver verschlüsselt und somit vor Abhören und Manipulation durch Man-in-the-Middle-Angriffe geschützt.
Wenn die sicher geladene Webseite nur Bilder, Skripte und andere Ressourcen enthält, die ebenfalls von sicheren Ursprüngen gehostet werden, können die Benutzer sicher sein, dass die gesamte Seite vor solchen Angriffen geschützt ist.

"Mixed Content" bezieht sich auf sicher geladene Webseiten, die Ressourcen verwenden, die über HTTP oder ein anderes unsicheres Protokoll abgerufen werden.
Diese Art von Webseiten ist potenziell unsicher, weil alle unsicher gesendeten Ressourcen angesehen werden können, was möglicherweise sensible Informationen preisgibt, und/oder von einem Angreifer modifiziert werden können.
Skripte sind besonders gefährlich, weil sie jeden Aspekt der Seite ändern können, aber alle Arten von Ressourcen bergen ein gewisses Risiko.
Zum Beispiel können Bilder modifiziert werden, um dem Benutzer falsche oder irreführende Informationen zu geben oder die scheinbare Funktion eines Buttons zu ändern.

"Gemischte Downloads" beziehen sich auf Ressourcendownloads, die von einem sicheren Kontext aus initiiert, aber über eine unsichere Verbindung abgerufen werden.
Diese teilen dieselben Risiken wie Mixed Content: Downloads scheinen von einem sicheren Ursprung zu stammen, könnten jedoch auf dem Weg modifiziert oder angesehen worden sein.

Vermeiden Sie die Verwendung von Mixed Content und gemischten Downloads auf Ihren Websites!
Browser mildern die Risiken von Mixed Content ab, indem sie Anfragen für gemischte Inhalte wie Bilder, Videos und Audios von HTTP auf HTTPS automatisch upgraden und unsichere Anfragen für alle anderen Ressourcentypen blockieren.
Sie sollten standardmäßig auch _gemischte Downloads_ blockieren.

## Arten von Mixed Content

Mixed Content auf einer Webseite wird in zwei Kategorien unterteilt: "Upgradefähige Inhalte" und "Blockierbare Inhalte".
Browser sollten Anfragen für upgradefähige Inhalte automatisch von HTTP auf HTTPS upgraden und Anfragen für blockierbare Inhalte blockieren.

Dieser Ansatz stellt sicher, dass alle Inhalte in einem sicheren Kontext entweder über einen sicheren Kanal geladen oder blockiert werden, was für Benutzer sicherer ist als die Anzeige einer Mischung aus sicheren und unsicheren Inhalten und weniger störend ist als das vollständige Blockieren aller unsicheren Inhalte.

> [!NOTE]
> Frühere Versionen der Spezifikation unterteilten Mixed Content in die Kategorien „blockierbar“ und „optional blockierbar“:
>
> - Blockierbare Inhaltstypen, auch als "aktive Mixed Content" bezeichnet, waren solche, die andere Teile der Webseite ändern konnten, wie Skripte und Stylesheets.
>   Wenn diese Dateien modifiziert werden, besteht ein sehr hohes Risiko, und die Browser mussten sie blockieren.
> - Optional blockierbare Inhaltstypen, auch bekannt als "passive Mixed Content", waren solche, die keinen anderen Inhalt auf der Webseite ändern konnten, wie Bilder, Videos und Audiodateien.
>   Das potenzielle Risiko der Zulassung dieser Dateien war geringer, sodass Browser entscheiden konnten, ob sie diese blockieren oder anzeigen oder die Entscheidung dem Benutzer überlassen.

Die Menge der Ressourcentypen, die „upgradefähige Inhalte“ umfassen, wurde aus der Menge der „optional blockierbaren“ Mixed-Content-Inhalte abgeleitet.
Die Erwartung ist, dass alle neuen Dateitypen als blockierbare Inhalte definiert werden, und einige upgradefähige Inhalte könnten in Zukunft blockierbar werden.

### Upgradefähige Inhalte

Anfragen für upgradefähige Inhalte sind solche, bei denen eine unsichere Anfrage automatisch in eine sichere Anfrage umgewandelt wird, indem das Ursprungsschema von `http` auf `https` geändert wird.
Der Remote-Server wird entweder mit der Ressource oder einem Statuscode antworten, der anzeigt, dass sie nicht gefunden wurde.

Die Ressourcentypen in dieser Kategorie sind solche, bei denen das Blockieren der Anfrage das Risiko birgt, erhebliche Teile des Webs zu beeinträchtigen.
Diese entsprechen derzeit den Mixed-Content-Typen, die zuvor "optional blockierbar" waren, da sie immer noch auf einigen Websites verwendet werden.

Die folgenden Elemente sind upgradefähig (außer wenn der URL-Host als IP-Adresse angegeben wird – siehe den folgenden Abschnitt):

- {{HTMLElement("img")}} wobei der Ursprung über das `src`-Attribut gesetzt wird, einschließlich SVG-Dokumenten (aber nicht beim Setzen von Ressourcen mit `srcset` oder `<picture>`).
- CSS-Bildelemente wie: `background-image`, `border-image`, usw.
- {{HTMLElement("audio")}} wobei der Ursprung mit dem `src`-Attribut gesetzt wird.
- {{HTMLElement("video")}} wobei der Ursprung mit dem `src`-Attribut gesetzt wird.
- {{HTMLElement("source")}} wobei das Video oder die Ursprungsressource gesetzt wird.

### Blockierbare Inhalte

Blockierbare Inhalte werden als "alle Mixed Content, die nicht upgradefähig sind" definiert.

Dies schließt HTTP-Anfragen ein, die aus den folgenden Elementen resultieren (diese Liste ist nicht vollständig):

- {{HTMLElement("script")}} wobei der Ursprung über das `src`-Attribut gesetzt wird
- {{HTMLElement("link")}} wobei der Ursprung im `href`-Attribut gesetzt wird, und beinhaltet Stylesheets
- {{HTMLElement("iframe")}} wobei der Ursprung über das `src`-Attribut gesetzt wird
- [`fetch()`](/de/docs/Web/API/Window/fetch) Anfragen
- [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) Anfragen
- Alle Fälle in CSS, bei denen ein {{CSSXref("url_value", "&lt;url&gt;")}}-Wert verwendet wird ({{cssxref("@font-face")}}, {{cssxref("cursor")}}, {{cssxref("background-image")}}, usw.).
- {{HTMLElement("object")}} (`data`-Attribut)
- [`Navigator.sendBeacon`](/de/docs/Web/API/Navigator/sendBeacon) (`url`-Attribut)
- {{HTMLElement("img")}} wobei der Ursprung über `srcset` oder `<picture>` gesetzt wird.
- Webschriften

Mixed-Content-Anfragen, die ansonsten hochgestuft würden, werden blockiert, wenn der Host der URL eine IP-Adresse anstelle eines Domainnamens ist.
Also `<img src="http://example.com/image.png">` wird hochgestuft, aber `<img src="http://93.184.215.14/image.png">` wird blockiert.

## Beispiele für Mixed Content-Anfragen

Mixed Content-Anfragen sind unsichere Anfragen nach Ressourcen aus einem [sicheren Kontext](/de/docs/Web/Security/Secure_Contexts):

Die folgenden Beispiele demonstrieren sichere, unsichere und Mixed Content-Anfragen:

- `http://insecure.com` lädt `http://also.insecure.com` — ist keine Mixed Content-Anfrage, da beide Ursprünge unsicher sind.
- `https://secure.com` lädt `http://insecure.com` — ist eine Mixed Content-Anfrage, weil die unsichere Ressource `http://insecure.com` in den sicheren Kontext `https://secure.com` geladen wird.
- `http://insecure.com` lädt `https://secure.com` in einem `<iframe>`, das wiederum `http://also.insecure.com` lädt — das Laden von `https://secure.com` in `http://insecure.com` ist keine Mixed Content-Anfrage (es gibt keine Einschränkung beim Laden eines sicheren Kontextes in einen unsicheren Kontext).
  Das Laden von `http://also.insecure.com` in den sicheren Frame `https://secure.com` ist jedoch eine Mixed Content-Anfrage.
- `https://secure.com` bettet eine `data:`-URL ein, die `http://insecure.com` lädt — dies ist eine Mixed Content-Anfrage, da `https://secure.com` (und damit `data:`) sicher geladen wurden und `http://insecure.com` unsicher ist.

Mixed-Content-Anfragen können auch aus sicheren Kontexten wie Plugins oder Workern gestellt werden und werden auf dieselbe Weise hochgestuft/blockiert.

Beachten Sie jedoch, dass Navigationsanfragen aus einem sicheren Kontext, die unsichere Ziel-Browsing-Kontexte der obersten Ebene anvisieren, nicht als Mixed Content angesehen werden, da sie einen neuen Kontext erstellen, der entweder sicher oder unsicher ist, unabhängig vom Ursprung der Anfrage.

### Laden von lokal bereitgestellten gemischten Ressourcen

Lokale Ressourcen werden als von sicheren Ursprüngen betrachtet, genau wie HTTPS-Ursprünge.
Dies umfasst `file:`-URLs und Inhalte, die von Loopback-Adressen wie `http://127.0.0.1/` oder `http://localhost/` zugegriffen werden.

Sie können diese Dateien aus sicheren Kontexten laden und Sie werden weiterhin einen sicheren Kontext haben.
Wenn jedoch eine lokale Datei eine unsichere Ressource über `http:` lädt, wäre es eine Mixed Content-Anfrage.

Die Unterstützung für das Laden lokaler Inhalte kann im Abschnitt [Browser-Kompatibilität](#browser-kompatibilität) überprüft werden.

## Gemischte Downloads

Ein gemischter Download ist ein Ressourcendownload von einem sicheren Kontext über eine unsichere Verbindung.
Sie sind problematisch aus den gleichen Gründen wie Mixed Content – Inhalte können von einem Angreifer abgefangen und/oder modifiziert werden, und es ist für Benutzer nicht offensichtlich, dass dies auf einer sicheren Website passieren könnte.

Zum Beispiel definiert der folgende Code ein [`<a>`](/de/docs/Web/HTML/Reference/Elements/a#download)-Element, das verwendet werden könnte, um die Seite am unsicheren Ursprung `http://example.com/` herunterzuladen.
Wenn sich dieser Code auf einer Seite befindet, die über HTTPS bereitgestellt wird, führt das Speichern des Links zu einem gemischten Download.

```html
<a href="http://example.com/" download>Download</a>
```

Erwartet wird, dass Browser gemischte Downloads blockieren, und sichere Websites sollten sie nicht einbeziehen.

> [!NOTE]
> Browser blockieren gemischte Downloads häufig standardmäßig, informieren jedoch die Benutzer über das Risiko und erlauben ihnen, den Download zu behalten oder zu verwerfen.

## Entwicklerkonsole

Die Entwicklerkonsole zeigt Warnungen an, wenn Mixed Content hochgestuft oder blockiert wird.
Diese können verwendet werden, um Mixed Content in Ihren Websites zu debuggen und zu beheben.

Der unten stehende Screenshot zeigt die Konsolenwarnung, wenn ein Bild in Firefox hochgestuft wird (Chrome hat eine ähnliche Warnung).

![Screenshot der Webkonsole, die eine Upgrade-Warnung für Mixed Content-Bild anzeigt.](mixed_content_console_upgradable.png)

In Browserversionen, die noch "optional blockierbare" Inhalte anzeigen, wird ein Symbol verwendet, um anzugeben, dass es gemischte Inhalte in den angezeigten Inhalten gibt, zusammen mit einer Konsolenwarnung.
Der folgende Screenshot zeigt das Symbol und die Konsolenwarnung für Firefox, das die Unterstützung für upgradefähige Mixed Content begonnen hat.

![Screenshot der Webkonsole, die eine Anzeige von Warnungen für gemischte Inhaltsbilder anzeigt.](mixed_content_console_displayed.png)

## Behebung von Mixed Content-Problemen

Die beste Strategie zur Vermeidung von Problemen mit Mixed Content ist, alle Inhalte als HTTPS bereitzustellen:

- Stellen Sie alle Inhalte von Ihrer Domain als HTTPS bereit.
- Machen Sie alle Verweise auf Ressourcen, die auf Ihrer Domain gehostet werden, zu relativen Links oder HTTPS-Links, einschließlich für Downloads.
- Wenn Sie Ressourcen auf anderen Websites verwenden, verwenden Sie HTTPS-Versionen, falls verfügbar.

  Die meisten Seiten bieten HTTPS-Versionen von gemeinsam genutzten Ressourcen.
  Oft ist es der einfachste Ansatz, alle `http://` Links durch `https://` zu ersetzen und dann Tools wie [LinkChecker](https://linkchecker.github.io/linkchecker/) zu verwenden, um zu überprüfen, ob alle Links funktionieren.

Es gibt mehrere Möglichkeiten, um sicherzustellen, dass Ihre Seite frei von Mixed Content ist:

- Navigieren Sie auf Ihre Seite und überprüfen Sie die [Entwicklerkonsole](#entwicklerkonsole) Ihres Browsers auf Mixed Content-Warnungen.
- Deaktivieren Sie allen Mixed Content in Ihrem Browser und testen Sie, ob Seiten wie erwartet funktionieren.
  Dies ist der Standard für Safari, aber die meisten Browser unterstützen einen Mechanismus zum Blockieren aller Mixed Content (siehe [Kompatibilitätsdaten](#browser-kompatibilität)).
- Verwenden Sie einen Desktop-basierten Web-Crawler wie [HTTPSChecker](https://httpschecker.net/how-it-works) oder ein CLI-Tool wie [mcdetect](https://github.com/agis/mcdetect), um Ihre Website rekursiv zu überprüfen und Links zu unsicherem Inhalt zu finden.
- Verwenden Sie ein Online-Tool wie [Mixed Content Checker](https://www.crawlcenter.com/mixed-content-checker), um Ihre Seite zu überprüfen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [CSP: `upgrade-insecure-requests`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/upgrade-insecure-requests) stuft alle Anfragen einschließlich blockierbarer Mixed Content auf HTTPS hoch.
