---
title: Gemischte Inhalte
slug: Web/Security/Defenses/Mixed_content
l10n:
  sourceCommit: 39070892d5d1a5cc55312a0ac10c97f4c339384f
---

Wenn eine Webseite von einem sicheren Ursprung über einen sicheren Kanal wie {{Glossary("HTTPS", "HTTPS")}} geladen wird, ist die Verbindung mit dem Webserver verschlüsselt und somit vor Abhören und Manipulation durch Man-in-the-Middle-Angriffe geschützt.
Wenn die sicher geladene Webseite nur Bilder, Skripte und andere Ressourcen umfasst, die ebenfalls auf sicheren Ursprüngen gehostet werden, können Benutzer sicher sein, dass die gesamte Seite vor diesen Arten von Angriffen geschützt ist.

"Gemischte Inhalte" beziehen sich auf sicher geladene Webseiten, die Ressourcen verwenden, die über HTTP oder ein anderes unsicheres Protokoll abgerufen werden.
Diese Art von Webseiten ist potenziell unsicher, da alle unsicher gesendeten Ressourcen eingesehen werden können, wodurch möglicherweise sensible Informationen preisgegeben oder von einem Angreifer verändert werden können.
Skripte sind besonders gefährlich, da sie jeden Aspekt der Seite ändern können, aber alle Arten von Ressourcen bergen ein gewisses Risiko.
Beispielsweise können Bilder manipuliert werden, um dem Benutzer falsche oder irreführende Informationen zu geben oder um die scheinbare Funktion einer Schaltfläche zu ändern.

"Gemischte Downloads" beziehen sich auf Ressourcen-Downloads, die von einem sicheren Kontext aus initiiert werden, aber über eine unsichere Verbindung abgerufen werden.
Sie bergen dieselben Risiken wie gemischte Inhalte: Downloads scheinen von einem sicheren Ursprung zu stammen, könnten aber unterwegs verändert oder eingesehen worden sein.

Sie sollten gemischte Inhalte und gemischte Downloads auf Ihren Websites vermeiden!
Browser verringern die Risiken gemischter Inhalte, indem sie Anfragen für gemischte Inhalte von Bildern, Videos und Audios von HTTP auf HTTPS automatisch aktualisieren und unsichere Anfragen für alle anderen Ressourcentypen blockieren.
Sie sollten auch _gemischte Downloads_ standardmäßig blockieren.

## Arten von gemischten Inhalten

Gemischte Inhalte auf einer Webseite werden in zwei Kategorien unterteilt: "aktualisierbare Inhalte" und "blockierbare Inhalte".
Browser sollten Anfragen für aktualisierbare Inhalte von HTTP auf HTTPS automatisch aktualisieren und Anfragen für die blockierbaren Inhalte blockieren.

Dieser Ansatz stellt sicher, dass alle Inhalte in einem sicheren Kontext entweder über einen sicheren Kanal geladen oder blockiert werden, was für Benutzer sicherer ist als die Anzeige einer Mischung aus sicheren und unsicheren Inhalten und weniger störend als das vollständige Blockieren aller unsicheren Inhalte, wodurch Webseiten unbrauchbar werden könnten.

> [!NOTE]
> Frühere Versionen der Spezifikation unterteilten gemischte Inhalte in die Kategorien "blockierbar" und "optional blockierbar":
>
> - Blockierbare Inhaltstypen, auch als "aktive gemischte Inhalte" bezeichnet, waren solche, die andere Teile der Webseite ändern konnten, wie Skripte und Stylesheets.
>   Das potenzielle Risiko, wenn diese Dateien verändert werden, ist sehr hoch, und Browser wurden verpflichtet, diese zu blockieren.
> - Optional blockierbare Inhaltstypen, auch als "passive gemischte Inhalte" bekannt, konnten andere Inhalte auf der Webseite nicht ändern, wie Bilder, Videos und Audiodateien.
>   Das potenzielle Risiko, diese Dateien zuzulassen, war geringer, sodass Browser diese blockieren, anzeigen oder die Entscheidung dem Benutzer überlassen konnten.

Die Menge an Ressourcentypen, die "aktualisierbare Inhalte" umfassen, wurde aus der Kategorie der "optional blockierbaren" gemischten Inhalte übernommen.
Die Erwartung ist, dass jede neue Art von Datei als blockierbarer Inhalt definiert wird und einige aktualisierbare Inhalte in Zukunft blockierbar werden könnten.

### Aktualisierbare Inhalte

Aktualisierbare Inhalte sind Anfragen, bei denen eine unsichere Anfrage automatisch in eine sichere Anfrage aktualisiert wird, indem das Ursprungsschema von `http` auf `https` geändert wird.
Der Remote-Server antwortet entweder mit der Ressource oder einem Statuscode, der anzeigt, dass sie nicht gefunden wurde.

Die Ressourcentypen in dieser Kategorie sind solche, bei denen das Blockieren der Anfrage riskieren würde, wesentliche Teile des Webs zu unterbrechen.
Diese entsprechen derzeit den gemischten Inhaltstypen, die zuvor "optional blockierbar" waren, da sie immer noch auf einigen Websites genutzt werden.

Die folgenden Elemente sind aktualisierbar (außer wenn der URL-Host als IP-Adresse angegeben ist – siehe den folgenden Abschnitt):

- {{HTMLElement("img")}} bei dem der Ursprung über das `src` Attribut gesetzt ist, einschließlich SVG-Dokumente (aber nicht beim Setzen von Ressourcen mit `srcset` oder `<picture>`).
- CSS-Bildelemente wie: `background-image`, `border-image`, etc.
- {{HTMLElement("audio")}} bei dem der Ursprung mit dem `src` Attribut gesetzt ist.
- {{HTMLElement("video")}} bei dem der Ursprung mit dem `src` Attribut gesetzt ist.
- {{HTMLElement("source")}} bei dem das Video- oder Ursprungsressource gesetzt ist.

### Blockierbare Inhalte

Blockierbare Inhalte werden als "alle gemischten Inhalte, die nicht aktualisierbar sind" definiert.

Dazu gehören HTTP-Anfragen, die von den folgenden Elementen resultieren (diese Liste ist nicht erschöpfend):

- {{HTMLElement("script")}} bei dem der Ursprung über das `src` Attribut gesetzt ist
- {{HTMLElement("link")}} bei dem der Ursprung im `href` Attribut gesetzt ist und Stylesheets einschließt
- {{HTMLElement("iframe")}} bei dem der Ursprung über das `src` Attribut gesetzt ist
- [`fetch()`](/de/docs/Web/API/Window/fetch) Anfragen
- [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) Anfragen
- Alle Fälle in CSS, wo ein {{CSSXref("url_value", "&lt;url&gt;")}} Wert verwendet wird ({{cssxref("@font-face")}}, {{cssxref("cursor")}}, {{cssxref("background-image")}}, usw.).
- {{HTMLElement("object")}} (`data` Attribut)
- [`Navigator.sendBeacon`](/de/docs/Web/API/Navigator/sendBeacon) (`url` Attribut)
- {{HTMLElement("img")}} bei dem der Ursprung mit `srcset` oder `<picture>` gesetzt ist.
- Web-Fonts

Gemischte Inhaltsanfragen, die andernfalls aktualisiert würden, werden blockiert, wenn der Host der URL eine IP-Adresse anstelle eines Domainnamens ist.
So wird `<img src="http://example.com/image.png">` aktualisiert, aber `<img src="http://93.184.215.14/image.png">` wird blockiert.

## Beispiele für gemischte Inhaltsanfragen

Gemischte Inhaltsanfragen sind unsichere Anfragen nach Ressourcen von einem [sicheren Kontext](/de/docs/Web/Security/Defenses/Secure_Contexts):

Die folgenden Beispiele zeigen sichere, unsichere und gemischte Inhaltsanfragen:

- `http://insecure.com` lädt `http://also.insecure.com` – ist keine gemischte Inhaltsanfrage, da beide Ursprünge unsicher sind.
- `https://secure.com` lädt `http://insecure.com` – ist eine gemischte Inhaltsanfrage, da die unsichere Ressource `http://insecure.com` in den sicheren Kontext `https://secure.com` geladen wird.
- `http://insecure.com` lädt `https://secure.com` in einem `<iframe>`, welches wiederum `http://also.insecure.com` lädt – das Laden von `https://secure.com` in `http://insecure.com` ist keine gemischte Inhaltsanfrage (es gibt keine Einschränkung beim Laden eines sicheren Kontexts in einen unsicheren Kontext).
  Allerdings ist das Laden von `http://also.insecure.com` in den sicheren Rahmen `https://secure.com` eine gemischte Inhaltsanfrage.
- `https://secure.com` rahmt eine `data:` URL ein, die `http://insecure.com` lädt – dies ist eine gemischte Inhaltsanfrage, da `https://secure.com` (und somit `data:`) sicher geladen wurde und `http://insecure.com` unsicher ist.

Gemischte Kontextanfragen können auch aus sicheren Kontexten wie Plugins oder Arbeitern gesendet werden und werden auf die gleiche Weise aktualisiert/blockiert.

Zu beachten ist jedoch, dass Navigationsanfragen aus einem sicheren Kontext, die auf unsichere, zielende, oberste Browsing-Kontexte abzielen, nicht als gemischte Inhalte betrachtet werden, da sie einen neuen Kontext erschaffen, der entweder sicher oder unsicher ist, unabhängig von der Herkunft der Anfrage.

### Laden lokal bereitgestellter gemischter Ressourcen

Lokale Ressourcen werden wie HTTPS-Ursprünge als sichere Ursprünge betrachtet.
Dies umfasst `file:` URLs und Inhalte, die über Loopback-Adressen wie `http://127.0.0.1/` oder `http://localhost/` zugegriffen werden.

Sie können diese Dateien aus sicheren Kontexten laden, und Sie haben weiterhin einen sicheren Kontext.
Wenn jedoch eine lokale Datei eine unsichere Ressource über `http:` lädt, wäre dies eine gemischte Inhaltsanfrage.

Die Unterstützung für das Laden lokaler Inhalte kann im Abschnitt [Browser-Kompatibilität](#browser-kompatibilität) überprüft werden.

## Gemischte Downloads

Ein gemischter Download ist ein Ressourcen-Download von einem sicheren Kontext über eine unsichere Verbindung.
Sie sind aus denselben Gründen wie gemischte Inhalte problematisch — Inhalte können von einem Angreifer abgefangen und/oder verändert werden, und es ist für Benutzer nicht offensichtlich, dass dies auf einer sicheren Website passieren könnte.

Zum Beispiel definiert der folgende Code ein [`<a>`](/de/docs/Web/HTML/Reference/Elements/a#download)-Element, das verwendet werden könnte, um die Seite am unsicheren Ursprung `http://example.com/` herunterzuladen.
Wenn dieser Code sich auf einer Seite befindet, die über HTTPS bereitgestellt wird, führt das Speichern des Links zu einem gemischten Download.

```html
<a href="http://example.com/" download>Download</a>
```

Von Browsern wird erwartet, dass sie gemischte Downloads blockieren, und sichere Websites sollten diese nicht enthalten.

> [!NOTE]
> Browser blockieren häufig standardmäßig gemischte Downloads, informieren Benutzer über das Risiko und erlauben ihnen, den Download fortzusetzen oder abzubrechen.

## Entwicklerkonsole

Die Entwicklerkonsole zeigt Warnungen an, wenn gemischte Inhalte aktualisiert oder blockiert werden.
Diese können verwendet werden, um gemischte Inhalte auf Ihrer Webseite zu debuggen und zu beheben.

Der folgende Bildschirm zeigt die Konsolenwarnung, wenn ein Bild in Firefox aktualisiert wird (Chrome hat eine ähnliche Warnung).

![Bildschirmfoto der Web-Konsole mit Upgrade-Warnung für gemischte Inhaltsbilder.](mixed_content_console_upgradable.png)

In Browserversionen, die immer noch "optional blockierbare" Inhalte anzeigen, wird ein Symbol verwendet, um anzuzeigen, dass es gemischte Inhalte in den angezeigten Inhalten gibt, zusammen mit einer Konsolenwarnung.
Das folgende Bildschirmfoto zeigt das Symbol und die Konsolenwarnung für Firefox, das das Update von gemischten Inhalten unterstützt.

![Bildschirmfoto der Web-Konsole mit Anzeige-Warnung für gemischte Inhaltsbilder.](mixed_content_console_displayed.png)

## Behebung von gemischten Inhaltsproblemen

Die beste Strategie, um Probleme mit gemischten Inhalten zu vermeiden, besteht darin, alle Inhalte als HTTPS bereitzustellen:

- Bereitstellung aller Inhalte Ihrer Domain als HTTPS.
- Machen Sie alle Referenzen zu Ressourcen, die auf Ihrer Domain gehostet werden, zu relativen Links oder HTTPS-Links, einschließlich für Downloads.
- Wenn Sie Ressourcen auf anderen Sites verwenden, nutzen Sie die HTTPS-Versionen, falls verfügbar.

  Die meisten Sites bieten HTTPS-Versionen von geteilten Ressourcen an.
  Oft ist der einfachste Ansatz, alle `http://` Links durch `https://` zu ersetzen und dann Tools wie [LinkChecker](https://linkchecker.github.io/linkchecker/) zu verwenden, um zu überprüfen, dass alle Links funktionieren.

Es gibt verschiedene Möglichkeiten, um zu überprüfen, ob Ihre Seite frei von gemischten Inhalten ist:

- Navigieren Sie auf Ihrer Website und überprüfen Sie die [Entwicklerkonsole](#entwicklerkonsole) Ihres Browsers auf Warnungen zu gemischten Inhalten.
- Deaktivieren Sie alle gemischten Inhalte in Ihrem Browser und testen Sie, ob die Seiten wie erwartet funktionieren.
  Dies ist der Standard für Safari, aber die meisten Browser unterstützen irgendeinen Mechanismus zum Blockieren aller gemischten Inhalte (siehe [Kompatibilitätsdaten](#browser-kompatibilität)).
- Verwenden Sie einen Desktop-basierten Webcrawler wie [HTTPSChecker](https://httpschecker.net/how-it-works) oder ein CLI-Tool wie [mcdetect](https://github.com/agis/mcdetect), um Ihre Website rekursiv zu überprüfen und Links zu unsicheren Inhalten zu finden.
- Verwenden Sie ein Online-Tool wie [Mixed Content Checker](https://www.crawlcenter.com/mixed-content-checker) um Ihre Seite zu überprüfen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [CSP: `upgrade-insecure-requests`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/upgrade-insecure-requests) aktualisiert alle Anfragen auf HTTPS, einschließlich blockierbarer gemischter Inhalte
