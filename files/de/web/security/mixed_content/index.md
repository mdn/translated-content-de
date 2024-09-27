---
title: Mixed content
slug: Web/Security/Mixed_content
l10n:
  sourceCommit: bb48907e64eb4bf60f17efd7d39b46c771d220a0
---

{{QuickLinksWithSubpages("/de/docs/Web/Security")}}

Wenn eine Webseite aus einem sicheren Ursprung über einen sicheren Kanal wie [HTTPS](/de/docs/Glossary/HTTPS) geladen wird, ist die Verbindung mit dem Webserver verschlüsselt und somit vor Abhören und Manipulation durch Man-in-the-Middle-Angriffe geschützt.
Wenn die sicher geladene Webseite nur Bilder, Skripte und andere Ressourcen enthält, die ebenfalls auf sicheren Ursprüngen gehostet werden, können Benutzer sicher sein, dass die gesamte Seite vor diesen Arten von Angriffen geschützt ist.

"Mixed Content" bezieht sich auf sicher geladene Webseiten, die Ressourcen verwenden, die über HTTP oder ein anderes unsicheres Protokoll abgerufen werden sollen.
Diese Art von Webseite ist potenziell unsicher, da alle unsicher gesendeten Ressourcen eingesehen werden können, was möglicherweise sensible Informationen preisgeben könnte, und/oder von einem Angreifer verändert werden können.
Skripte sind besonders gefährlich, da sie jeden Aspekt der Seite verändern können, aber alle Arten von Ressourcen haben ein gewisses Risiko.
Beispielsweise können Bilder manipuliert werden, um dem Benutzer falsche oder irreführende Informationen zu geben oder um die scheinbare Funktion eines Buttons zu ändern.

"Mixed Downloads" beziehen sich auf Ressourcendownloads, die aus einem sicheren Kontext initiiert werden, jedoch über eine unsichere Verbindung abgerufen werden.
Sie teilen die gleichen Risiken wie Mixed Content: Downloads scheinen von einem sicheren Ursprung zu stammen, könnten jedoch auf dem Weg verändert oder eingesehen worden sein.

Sie sollten die Verwendung von Mixed Content und Mixed Downloads auf Ihren Websites vermeiden!
Browser mildern die Risiken von Mixed Content, indem sie Bild-, Video- und Audiowiedergaben automatisch von HTTP auf HTTPS upgraden und unsichere Anfragen für alle anderen Ressourcentypen blockieren.
Sie sollten auch _mixed downloads_ standardmäßig blockieren.

## Arten von Mixed Content

Mixed Content auf einer Webseite wird in zwei Kategorien unterteilt: "Upgradable Content" und "Blockable Content".
Browser sollten Anfragen für upgradbare Inhalte automatisch von HTTP auf HTTPS hochstufen und Anfragen für blockbare Inhalte blockieren.

Dieser Ansatz stellt sicher, dass alle Inhalte in einem sicheren Kontext entweder über einen sicheren Kanal geladen oder blockiert werden, was für Benutzer sicherer ist als das Anzeigen einer Mischung aus sicheren und unsicheren Inhalten, und weniger störend als das Brechen von Webseiten durch Blockieren absolut aller unsicheren Inhalte.

> [!NOTE]
> Frühere Versionen der Spezifikation unterteilten Mixed Content in "blockable" und "optionally blockable" Kategorien:
>
> - Blockierbare Content-Typen, auch bekannt als "aktive Inhalte", waren solche, die andere Teile der Webseite ändern konnten, wie Skripte und Stylesheets.
>   Das potenzielle Risiko, wenn diese Dateien verändert werden, ist sehr hoch, und Browser mussten sie blockieren.
> - Optional blockierbare Content-Typen, auch bekannt als "passive Inhalte", konnten anderen Content auf der Webseite nicht verändern, wie Bilder, Videos und Audiodateien.
>   Das potenzielle Risiko bei der Erlaubnis dieser Dateien war geringer, daher konnten Browser entscheiden, sie zu blockieren oder anzuzeigen oder die Entscheidung dem Benutzer zu überlassen.

Die Menge der Ressourcentypen, die "upgradable content" ausmachen, wurde aus der Menge der "optionally blockable" Mixed Content abgeleitet.
Die Erwartung ist, dass alle neuen Dateitypen als blockable content definiert werden und dass einige upgradable content zukünftig blockable werden könnten.

### Upgradable Content

Upgradable Content-Anfragen sind solche, bei denen eine unsichere Anfrage automatisch in eine sichere Anfrage umgewandelt wird, indem das Ursprungsschema von `http` zu `https` geändert wird.
Der Remote-Server wird entweder mit der Ressource antworten oder mit einem Statuscode, der anzeigt, dass sie nicht gefunden wurde.

Die Ressourcentypen in dieser Kategorie sind solche, bei denen das Blockieren der Anfrage ein Risiko darstellt, bedeutende Teile des Webs zu beeinträchtigen.
Diese entsprechen derzeit den Mixed Content-Typen, die zuvor "optionally blockable" waren, da diese immer noch auf einigen Websites verwendet werden.

Die folgenden Elemente sind upgradable (außer wenn der URL-Host als IP-Adresse angegeben ist – siehe den folgenden Abschnitt):

- {{HTMLElement("img")}}, bei dem der Ursprung über das `src`-Attribut festgelegt wird, einschließlich SVG-Dokumente (aber nicht beim Festlegen von Ressourcen mit `srcset` oder `<picture>`).
- CSS-Bild-Elemente wie: `background-image`, `border-image`, etc.
- {{HTMLElement("audio")}}, bei dem der Ursprung mit dem `src`-Attribut festgelegt wird.
- {{HTMLElement("video")}}, bei dem der Ursprung mit dem `src`-Attribut festgelegt wird.
- {{HTMLElement("source")}}, bei dem die Video- oder Ursprungsressource festgelegt wird.

### Blockable Content

Blockable Content wird als "alle Mixed Content, die nicht upgradable sind" definiert.

Dies schließt HTTP-Anfragen ein, die aus den folgenden Elementen resultieren (diese Liste ist nicht vollständig):

- {{HTMLElement("script")}}, bei dem der Ursprung über das `src`-Attribut festgelegt wird
- {{HTMLElement("link")}}, bei dem der Ursprung im `href`-Attribut festgelegt wird und Stylesheets einschließt
- {{HTMLElement("iframe")}}, bei dem der Ursprung über das `src`-Attribut festgelegt wird
- [`fetch()`](/de/docs/Web/API/Window/fetch)-Anfragen
- [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest)-Anfragen
- Alle Fälle in CSS, in denen ein {{cssxref("url", "url()")}}-Wert verwendet wird ({{cssxref("@font-face")}}, {{cssxref("cursor")}}, {{cssxref("background-image")}} und so weiter).
- {{HTMLElement("object")}} (`data`-Attribut)
- [`Navigator.sendBeacon`](/de/docs/Web/API/Navigator/sendBeacon) (`url`-Attribut)
- {{HTMLElement("img")}}, bei dem der Ursprung über `srcset` oder `<picture>` festgelegt wird.
- Web-Schriftarten

Mixed Content-Anfragen, die ansonsten hochgestuft würden, werden blockiert, wenn der Host der URL eine IP-Adresse anstelle eines Domainnamens ist.
Daher wird `<img src="http://example.com/image.png">` hochgestuft, aber `<img src="http://93.184.215.14/image.png">` wird blockiert.

## Beispiele für Mixed Content-Anfragen

Mixed Content-Anfragen sind unsichere Anfragen nach Ressourcen aus einem [sicheren Kontext](/de/docs/Web/Security/Secure_Contexts):

Die folgenden Beispiele demonstrieren sichere, unsichere und Mixed Content-Anfragen:

- `http://insecure.com` lädt `http://also.insecure.com` — ist keine Mixed Content-Anfrage, weil beide Ursprünge unsicher sind.
- `https://secure.com` lädt `http://insecure.com` — ist eine Mixed Content-Anfrage, weil die unsichere Ressource `http://insecure.com` in den sicheren Kontext `https://secure.com` geladen wird.
- `http://insecure.com` lädt `https://secure.com` in einem `<iframe>`, welches wiederum `http://also.insecure.com` lädt — das Laden von `https://secure.com` in `http://insecure.com` ist keine Mixed Content-Anfrage (es gibt keine Einschränkung beim Laden eines sicheren Kontexts in einen unsicheren Kontext).
  Das Laden von `http://also.insecure.com` in den sicheren Frame `https://secure.com` ist jedoch eine Mixed Content-Anfrage.
- `https://secure.com` rahmt eine `data:`-URL ein, die `http://insecure.com` lädt — dies ist eine Mixed Content-Anfrage, da `https://secure.com` (und daher `data:`) sicher geladen wurde und `http://insecure.com` unsicher ist.

Mixed Context-Anfragen können auch aus sicheren Kontexten wie Plugins oder Workern gestellt werden und werden auf die gleiche Weise hochgestuft/geblockt.

Beachten Sie jedoch, dass Navigationsanfragen aus einem sicheren Kontext, die unsichere obere Browsing-Kontexte anvisieren, nicht als Mixed Content betrachtet werden, da sie einen neuen Kontext erstellen, der entweder sicher oder unsicher ist, unabhängig vom Ursprung der Anfrage.

### Laden von lokal bereitgestellten gemischten Ressourcen

Lokale Ressourcen werden als von sicheren Ursprüngen stammend betrachtet, genau wie HTTPS-Ursprünge.
Dies schließt `datei:`-URLs ein und Inhalte, die von Loopback-Adressen wie `http://127.0.0.1/` oder `http://localhost/` abgerufen werden.

Sie können diese Dateien aus sicheren Kontexten laden und haben dennoch einen sicheren Kontext.
Allerdings wäre es eine Mixed Content-Anfrage, wenn eine lokale Datei eine unsichere Ressource über `http:` lädt.

Die Unterstützung für das Laden lokaler Inhalte kann im Abschnitt [Browser-Kompatibilität](#browser-kompatibilität) überprüft werden.

## Mixed Downloads

Ein Mixed Download ist ein Ressourcendownload aus einem sicheren Kontext über eine unsichere Verbindung.
Sie sind problematisch aus den gleichen Gründen wie Mixed Content — Inhalte können abgefangen und/oder von einem Angreifer verändert werden, und es ist für Benutzer nicht offensichtlich, dass dies auf einer sicheren Seite passieren könnte.

Zum Beispiel definiert der folgende Code ein [`<a>`](/de/docs/Web/HTML/Element/a#download)-Element, das verwendet werden könnte, um die Seite am unsicheren Ursprung `http://example.com/` herunterzuladen.
Wenn sich dieser Code auf einer Seite befindet, die über HTTPS bereitgestellt wird, führt das Speichern des Links zu einem Mixed Download.

```html
<a href="http://example.com/" download>Download</a>
```

Es wird erwartet, dass Browser Mixed Downloads blockieren, und sichere Websites sollten diese nicht einbeziehen.

> [!NOTE]
> Browser blockieren üblichweise Mixed Downloads standardmäßig, informieren jedoch die Benutzer über das Risiko und erlauben es ihnen, den Download zu behalten oder zu verwerfen.

## Entwicklerkonsole

Die Entwicklerkonsole zeigt Warnungen an, wenn Mixed Content hochgestuft oder blockiert wird.
Diese können verwendet werden, um gemischte Inhalte auf Ihren Websites zu debuggen und zu beheben.

Der untenstehende Screenshot zeigt die Konsolenwarnung, wenn ein Bild in Firefox hochgestuft wird (Chrome hat eine ähnliche Warnung).

![Screenshot der Web-Konsole mit Upgrade-Warnung für Mixed Content-Bild.](mixed_content_console_upgradable.png)

Bei Browserversionen, die immer noch "optionally blockable" Inhalte anzeigen, wird ein Icon verwendet, um anzugeben, dass es gemischte Inhalte im angezeigten Content gibt, zusammen mit einer Konsolenwarnung.
Der untenstehende Screenshot zeigt das Icon und die Konsolenwarnung für Firebox, das die Unterstützung für upgradable Mixed Content begann.

![Screenshot der Web-Konsole mit Anzeige-Warnung für Mixed Content-Bild.](mixed_content_console_displayed.png)

## Behebung von Mixed Content-Problemen

Die beste Strategie, um Probleme mit Mixed Content zu vermeiden, besteht darin, den gesamten Content als HTTPS zu servieren:

- Stellen Sie sicher, dass alle Inhalte von Ihrer Domain als HTTPS bereitgestellt werden.
- Machen Sie alle Verweise auf Ressourcen, die auf Ihrer Domain gehostet werden, zu relativen Links oder HTTPS-Links, einschließlich für Downloads.
- Wenn Sie Ressourcen auf anderen Websites verwenden, verwenden Sie HTTPS-Versionen, wenn verfügbar.

  Die meisten Websites bieten HTTPS-Versionen von geteilten Ressourcen an.
  Der einfachste Ansatz besteht oft darin, alle `http://`-Links durch `https://` zu ersetzen und dann Tools wie [linkchecker](https://linkchecker.github.io/linkchecker/) zu verwenden, um zu überprüfen, ob alle Links funktionieren.

Es gibt eine Reihe von Möglichkeiten, zu überprüfen, ob Ihre Website frei von Mixed Content ist, einschließlich:

- Navigieren Sie auf Ihrer Website und überprüfen Sie die [Entwicklerkonsole](#entwicklerkonsole) Ihres Browsers auf Mixed Content-Warnungen.
- Deaktivieren Sie alle Mixed Content in Ihrem Browser und testen Sie, dass die Seiten wie erwartet funktionieren.
  Dies ist der Standard für Safari, aber die meisten Browser unterstützen einige Mechanismen zum Blockieren aller Mixed Content (siehe [Kompatibilitätsdaten](#browser-kompatibilität)).
- Verwenden Sie einen Desktop-basierten Web-Crawler wie [HTTPSChecker](https://httpschecker.net/how-it-works) oder ein CLI-Tool wie [mcdetect](https://github.com/agis/mcdetect), um Ihre Website rekursiv zu überprüfen und Links zu unsicherem Content zu finden.
- Verwenden Sie ein Online-Tool wie [Mixed Content Checker](https://www.crawlcenter.com/mixed-content-checker), um Ihre Website zu überprüfen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [CSP: `upgrade-insecure-requests`](/de/docs/Web/HTTP/Headers/Content-Security-Policy/upgrade-insecure-requests) upgrade alle Anfragen auf HTTPS, einschließlich blockbare Mixed Content.
