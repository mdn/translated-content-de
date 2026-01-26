---
title: Mixed Content
slug: Web/Security/Defenses/Mixed_content
l10n:
  sourceCommit: ca26363fcc6fc861103d40ac0205e5c5b79eb2fa
---

Wenn eine Webseite von einem sicheren Ursprung über einen sicheren Kanal wie {{Glossary("HTTPS", "HTTPS")}} geladen wird, ist die Verbindung mit dem Webserver verschlüsselt und somit vor Abhören und Manipulation durch Man-in-the-Middle-Angriffe geschützt.
Wenn die sicher geladene Webseite nur Bilder, Skripte und andere Ressourcen enthält, die ebenfalls auf sicheren Ursprüngen gehostet werden, können Benutzer zuversichtlich sein, dass die gesamte Seite vor diesen Arten von Angriffen sicher ist.

"Mixed Content" bezieht sich auf sicher geladene Webseiten, die Ressourcen verwenden, die über HTTP oder ein anderes unsicheres Protokoll abgerufen werden sollen.
Diese Art von Webseite ist potenziell unsicher, da alle unsicher gesendeten Ressourcen eingesehen werden können, was möglicherweise sensible Informationen offenlegt, und/oder von einem Angreifer modifiziert werden können.
Skripte sind besonders gefährlich, da sie jeden Aspekt der Seite verändern können, aber alle Ressourcentypen bergen ein gewisses Risiko.
Zum Beispiel können Bilder verändert werden, um dem Benutzer falsche oder irreführende Informationen zu geben oder um die scheinbare Funktion eines Buttons zu ändern.

"Mixed Downloads" beziehen sich auf Ressourcen-Downloads, die von einem sicheren Kontext initiiert, aber über eine unsichere Verbindung abgerufen werden.
Diese bergen die gleichen Risiken wie Mixed Content: Downloads scheinen aus einem sicheren Ursprung zu stammen, könnten aber unterwegs modifiziert oder eingesehen worden sein.

Sie sollten die Verwendung von Mixed Content und Mixed Downloads auf Ihren Websites vermeiden!
Browser mindern die Risiken von Mixed Content, indem sie automatisch Image-, Video- und Audio-Mixed Content-Anfragen von HTTP auf HTTPS upgraden und unsichere Anfragen für alle anderen Ressourcentypen blockieren.
Sie sollten auch standardmäßig _mixed downloads_ blockieren.

## Arten von Mixed Content

Mixed Content in einer Webseite wird in zwei Kategorien unterteilt: "upgradable content" und "blockable content".
Browser sollten Anfragen für upgradable Content automatisch von HTTP auf HTTPS upgraden und Anfragen für blockable Content blockieren.

Dieser Ansatz stellt sicher, dass alle Inhalte in einem sicheren Kontext entweder über einen sicheren Kanal geladen oder blockiert werden, was für Benutzer sicherer ist als das Anzeigen einer Mischung aus sicheren und unsicheren Inhalten und weniger störend, als Web-Seiten zu unterbrechen, indem sämtlicher unsicherer Inhalt vollständig blockiert wird.

> [!NOTE]
> Frühere Versionen der Spezifikation unterteilten Mixed Content in "blockable" und "optionally blockable" Kategorien:
>
> - Blockable Content-Typen, auch als "aktive Mixed Content" bezeichnet, waren diejenigen, die andere Teile der Webseite ändern konnten, wie Skripte und Stylesheets.
>   Das potenzielle Risiko, wenn diese Dateien verändert werden, ist sehr hoch, und Browser waren verpflichtet, sie zu blockieren.
> - Optionally Blockable Content-Typen, auch als "passive Mixed Content" bekannt, konnten andere Inhalte der Webseite nicht verändern, wie Bilder, Videos und Audiodateien.
>   Das potenzielle Risiko, diese Dateien zuzulassen, war geringer, sodass Browser wählen konnten, sie zu blockieren oder anzuzeigen oder die Entscheidung dem Benutzer zu überlassen.

Der Satz von Ressourcentypen, der "upgradable content" bildet, wurde aus dem Satz von "optionally blockable" Mixed Content gebildet.
Die Erwartung ist, dass alle neuen Dateitypen als blockable content definiert werden und einige upgradable content in Zukunft blockable werden können.

### Upgradable Content

Upgradable Content-Anfragen sind solche, bei denen eine unsichere Anfrage automatisch in eine sichere Anfrage umgewandelt wird, indem das Ursprungsschema von `http` auf `https` geändert wird.
Der entfernte Server wird entweder mit der Ressource antworten oder einen Statuscode zur Angabe senden, dass sie nicht gefunden wurde.

Die Ressourcentypen in dieser Kategorie sind diejenigen, bei denen das Blockieren der Anfrage das Risiko birgt, bedeutende Teile des Webs zu unterbrechen.
Diese entsprechen derzeit den Mixed Content-Typen, die zuvor "optionally blockable" waren, da diese immer noch auf einigen Websites verwendet werden.

Die folgenden Elemente sind upgradbar (es sei denn, der URL-Host ist als IP-Adresse angegeben — siehe den folgenden Abschnitt):

- {{HTMLElement("img")}} bei dem der Ursprung über das `src` Attribut gesetzt wird, einschließlich SVG-Dokumenten (aber nicht beim Setzen von Ressourcen mit `srcset` oder `<picture>`).
- CSS-Bildelemente wie: `background-image`, `border-image`, etc.
- {{HTMLElement("audio")}} bei dem der Ursprung mit dem `src` Attribut gesetzt wird.
- {{HTMLElement("video")}} bei dem der Ursprung mit dem `src` Attribut gesetzt wird.
- {{HTMLElement("source")}} bei dem das Video oder der Ursprungsressource gesetzt wird.

### Blockable Content

Blockable Content wird als "aller Mixed Content, der nicht upgradbar ist" definiert.

Dies schließt HTTP-Anfragen ein, die sich aus den folgenden Elementen ergeben (diese Liste ist nicht erschöpfend):

- {{HTMLElement("script")}} bei dem der Ursprung über das `src` Attribut gesetzt wird
- {{HTMLElement("link")}} bei dem der Ursprung im `href` Attribut gesetzt wird und Stylesheets einschließt
- {{HTMLElement("iframe")}} bei dem der Ursprung über das `src` Attribut gesetzt wird
- [`fetch()`](/de/docs/Web/API/Window/fetch) Anfragen
- [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) Anfragen
- Alle Fälle in CSS, bei denen ein {{CSSXref("url_value", "&lt;url&gt;")}} Wert verwendet wird ({{cssxref("@font-face")}}, {{cssxref("cursor")}}, {{cssxref("background-image")}}, und so weiter).
- {{HTMLElement("object")}} (`data` Attribut)
- [`Navigator.sendBeacon`](/de/docs/Web/API/Navigator/sendBeacon) (`url` Attribut)
- {{HTMLElement("img")}} bei dem der Ursprung über `srcset` oder `<picture>` gesetzt wird.
- Webfonts

Mixed Content-Anfragen, die ansonsten upgegradet würden, werden blockiert, wenn der Host der URL eine IP-Adresse anstelle eines Domainnamens ist.
Also wird `<img src="http://example.com/image.png">` upgegradet, aber `<img src="http://93.184.215.14/image.png">` wird blockiert.

## Beispiele für Mixed Content-Anfragen

Mixed Content-Anfragen sind unsichere Anfragen nach Ressourcen aus einem [sicheren Kontext](/de/docs/Web/Security/Defenses/Secure_Contexts):

Die folgenden Beispiele zeigen sichere, unsichere und Mixed Content-Anfragen:

- `http://insecure.com` lädt `http://also.insecure.com` — ist keine Mixed Content-Anfrage, da beide Ursprünge unsicher sind.
- `https://secure.com` lädt `http://insecure.com` — ist eine Mixed Content-Anfrage, da die unsichere Ressource `http://insecure.com` in den sicheren Kontext `https://secure.com` geladen wird.
- `http://insecure.com` lädt `https://secure.com` in einem `<iframe>`, das wiederum `http://also.insecure.com` lädt — das Laden von `https://secure.com` in `http://insecure.com` ist keine Mixed Content-Anfrage (es gibt keine Einschränkung beim Laden eines sicheren Kontexts in einen unsicheren Kontext).
  Allerdings ist das Laden von `http://also.insecure.com` in den sicheren Frame `https://secure.com` eine Mixed Content-Anfrage.
- `https://secure.com` framed eine `data:` URL, die `http://insecure.com` lädt — dies ist eine Mixed Content-Anfrage, weil `https://secure.com` (und daher `data:`) sicher geladen wurde und `http://insecure.com` unsicher ist.

Mixed Context-Anfragen können auch von sicheren Kontexten wie Plugins oder Arbeitern gemacht werden und werden auf die gleiche Weise upgegradet/ blockiert.

Beachten Sie jedoch, dass Navigationsanfragen von einem sicheren Kontext, die unsichere Ziel-Top-Level-Browsing-Kontexte anvisieren, nicht als Mixed Content angesehen werden, da sie einen neuen Kontext erzeugen, der entweder sicher oder unsicher ist, unabhängig vom Ursprung der Anfrage.

### Laden von lokal bereitgestellten Mixed-Ressourcen

Lokale Ressourcen gelten als von sicheren Ursprüngen, genau wie HTTPS-Ursprünge.
Dazu gehören `file:` URLs und Inhalte, die von Loopback-Adressen wie `http://127.0.0.1/` oder `http://localhost/` abgerufen werden.

Sie können diese Dateien von sicheren Kontexten aus laden, und Sie haben immer noch einen sicheren Kontext.
Wenn jedoch eine lokale Datei eine unsichere Ressource über `http:` lädt, wäre dies eine Mixed Content-Anfrage.

Die Unterstützung für das Laden lokaler Inhalte kann im Abschnitt [Browser-Kompatibilität](#browser-kompatibilität) überprüft werden.

## Mixed Downloads

Ein Mixed Download ist ein Download einer Ressource aus einem sicheren Kontext über eine unsichere Verbindung.
Diese sind aus den gleichen Gründen problematisch wie Mixed Content — Inhalte können von einem Angreifer abgefangen und/oder modifiziert werden, und es ist für Benutzer nicht ersichtlich, dass dies auf einer sicheren Seite passieren könnte.

Zum Beispiel definiert der folgende Code ein [`<a>`](/de/docs/Web/HTML/Reference/Elements/a#download) Element, das verwendet werden könnte, um die Seite am unsicheren Ursprung `http://example.com/` herunterzuladen.
Wenn dieser Code auf einer Seite ist, die über HTTPS ausgeliefert wird, führt das Speichern des Links zu einem Mixed Download.

```html
<a href="http://example.com/" download>Download</a>
```

Es wird erwartet, dass Browser Mixed Downloads blockieren, und sichere Websites sollten sie nicht enthalten.

> [!NOTE]
> Browser blockieren häufig standardmäßig Mixed Downloads, informieren die Benutzer jedoch über das Risiko und erlauben ihnen, den Download fortzusetzen oder zu verwerfen.

## Entwicklerkonsole

Die Entwicklerkonsole zeigt Warnungen an, wenn Mixed Content upgegradet oder blockiert wird.
Diese können verwendet werden, um Mixed Content-Probleme auf Ihren Websites zu debuggen und zu beheben.

Der untenstehende Screenshot zeigt die Konsolenwarnung, wenn ein Bild in Firefox upgegradet wird (Chrome hat eine ähnliche Warnung).

![Bildschirmfoto der Webkonsole mit Upgrade-Warnung für ein Mixed Content-Bild.](mixed_content_console_upgradable.png)

In Browserversionen, die immer noch "optionally blockable" Content anzeigen, wird ein Icon verwendet, um anzuzeigen, dass es Mixed Content in den angezeigten Inhalten gibt, zusammen mit einer Konsolenwarnung.
Das folgende Screenshot zeigt das Icon und die Konsolenwarnung für Firefox, das Mixed Content-Upgrades unterstützt.

![Bildschirmfoto der Webkonsole mit Anzeige-Warnung für ein Mixed Content-Bild.](mixed_content_console_displayed.png)

## Behebung von Mixed Content-Problemen

Die beste Strategie zur Vermeidung von Mixed Content-Problemen besteht darin, alle Inhalte als HTTPS anzubieten:

- Stellen Sie sicher, dass alle Inhalte von Ihrer Domain als HTTPS bereitgestellt werden.
- Machen Sie alle Verweise auf Ressourcen, die auf Ihrer Domain gehostet werden, zu relativen Links oder HTTPS-Links, einschließlich Downloads.
- Wenn Sie Ressourcen auf anderen Seiten verwenden, nutzen Sie, wenn möglich, HTTPS-Versionen.

  Die meisten Seiten bieten HTTPS-Versionen von gemeinsamen Ressourcen an.
  Oft ist der einfachste Ansatz, alle `http://` Links durch `https://` zu ersetzen und dann Tools wie [LinkChecker](https://linkchecker.github.io/linkchecker/) zu verwenden, um zu überprüfen, dass die Links alle funktionieren.

Es gibt eine Reihe von Möglichkeiten, zu überprüfen, dass Ihre Website frei von Mixed Content ist:

- Besuchen Sie Ihre Seite und prüfen Sie die [Entwicklerkonsole](#entwicklerkonsole) Ihres Browsers auf Warnungen zu Mixed Content.
- Deaktivieren Sie sämtlichen Mixed Content in Ihrem Browser und testen Sie, dass die Seiten wie erwartet funktionieren.
  Dies ist der Standard für Safari, aber die meisten Browser unterstützen irgendeinen Mechanismus zum Blockieren allen Mixed Contents (siehe [Kompatibilitätsdaten](#browser-kompatibilität)).
- Verwenden Sie einen desktopbasierten Webcrawler wie [HTTPSChecker](https://httpschecker.net/how-it-works) oder ein CLI-Tool wie [mcdetect](https://github.com/agis/mcdetect), um Ihre Website rekursiv zu überprüfen und Links zu unsicherem Inhalt zu finden.
- Nutzen Sie ein Online-Tool wie den [Mixed Content Checker](https://www.crawlcenter.com/mixed-content-checker), um Ihre Seite zu überprüfen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [CSP: `upgrade-insecure-requests`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/upgrade-insecure-requests) upgraded alle Anfragen auf HTTPS, einschließlich blockbarem Mixed Content
