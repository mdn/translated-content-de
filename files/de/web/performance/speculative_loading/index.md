---
title: Spekulatives Laden
slug: Web/Performance/Speculative_loading
l10n:
  sourceCommit: 0a9c10fc67901972221dc7b3d006334fbfa73dce
---

{{QuickLinksWithSubPages("Web/Performance")}}

**Spekulatives Laden** bezieht sich auf die Praxis, Navigationsaktionen (wie DNS-Abfrage, Laden von Ressourcen oder Rendern von Dokumenten) durchzuführen, bevor die zugehörigen Seiten tatsächlich besucht werden, basierend auf Vorhersagen, welche Seiten der Nutzer als nächstes wahrscheinlich besuchen wird.

Diese Vorhersagen können von Entwicklern bereitgestellt werden (z. B. Listen der beliebtesten Ziele auf ihrer Website) oder durch Browser-Heuristiken bestimmt werden (z. B. basierend auf beliebten Websites im Verlauf des Nutzers). Wenn sie erfolgreich eingesetzt werden, können solche Technologien die Leistung erheblich verbessern, indem sie Seiten schneller oder in einigen Fällen sofort verfügbar machen.

Diese Seite gibt einen Überblick über verfügbare Technologien für spekulatives Laden und wann diese eingesetzt werden können und sollten, um die Leistung zu verbessern.

## Mechanismen des spekulativen Ladens

Es gibt mehrere Mechanismen für spekulatives Laden:

- **Prefetching** beinhaltet das Abrufen einiger oder aller Ressourcen, die zum Rendern eines Dokuments (oder eines Teils davon) erforderlich sind, bevor sie benötigt werden, sodass das Rendern deutlich schneller erfolgen kann, wenn die Zeit zum Rendern gekommen ist.
- **Prerendering** geht noch einen Schritt weiter und rendert den Inhalt tatsächlich im Voraus, sodass er bei Bedarf sofort angezeigt werden kann. Je nach Vorgehensweise kann dies zu einer sofortigen Navigation von der alten zur neuen Seite führen.
- **Preconnecting** beschleunigt zukünftige Ladevorgänge von einem bestimmten Ursprung, indem Teile oder der gesamte Verbindungshandshake (d. h. DNS + TCP + TLS) proaktiv ausgeführt werden.

> [!NOTE]
> Die obigen Beschreibungen sind allgemein gehalten. Was Browser genau tun, um Prefetching und Prerendering zu erreichen, hängt von den verwendeten Funktionen ab. Genauere Funktionsbeschreibungen finden Sie im Abschnitt [Spekulative Ladefunktionen](#spekulative_ladefunktionen) unten.

## Wie wird spekulatives Laden erreicht?

Spekulatives Laden wird hauptsächlich auf zwei Arten erreicht.

Erstens werden einige Browser Seiten automatisch anhand verschiedener Heuristiken vorab rendern, um automatische Leistungsverbesserungen zu bieten. Wie genau dies geschieht, hängt von der Browser-Implementierung ab. Chrome beispielweise rendert Seiten automatisch vor, wenn übereinstimmende Zeichenfolgen in die Adressleiste eingegeben werden — wenn es sehr sicher ist, dass Sie diese Seite besuchen werden (siehe [Anzeigen von Chromes Adressleisten-Vorhersagen](https://developer.chrome.com/docs/web-platform/prerender-pages#view_chromes_address_bar_predictions) für weitere Details). Darüber hinaus rendert es möglicherweise Suchergebnisseiten automatisch vor, wenn Suchbegriffe in die Adressleiste eingegeben werden, wenn es von der Suchmaschine dazu angewiesen wird. Es verwendet dazu denselben Mechanismus wie die [Speculation Rules API](/de/docs/Web/API/Speculation_Rules_API).

Zweitens gibt es mehrere Plattformfunktionen, die Entwickler nutzen können, um Anweisungen dazu zu geben, welches spekulative Laden der Browser durchführen soll. Diese werden im nächsten Abschnitt besprochen.

## Spekulative Ladefunktionen

### `<link rel="preconnect">`

[`<link rel="preconnect">`](/de/docs/Web/HTML/Attributes/rel/preconnect) bietet Brosern einen Hinweis, dass der Nutzer wahrscheinlich Ressourcen vom angegebenen Ursprung benötigt, und daher kann der Browser die Leistung möglicherweise verbessern, indem er proaktiv eine Verbindung zu diesem Ursprung herstellt. Unterstützende Browser führen proaktiv Teile oder den gesamten Verbindungshandshake aus (d. h. DNS + TCP + TLS).

Zum Beispiel:

![Beispielcode für preconnect](0-1c017eae.md)

`<link rel="preconnect">` wird von vielen Browsern unterstützt und bietet einen Vorteil für jede zukünftige Cross-Origin-HTTP-Anfrage, Navigation oder Unterressource. Es hat keinen Vorteil bei Anfragen vom selben Ursprung, da die Verbindung bereits geöffnet ist.

Wenn eine Seite Verbindungen zu vielen Drittanbieterdomänen herstellen muss, kann das Preconnecting aller dieser Domänen kontraproduktiv sein. Der `<link rel="preconnect">`-Hinweis ist am besten für nur die kritischsten Verbindungen geeignet. Für die anderen verwenden Sie einfach `<link rel="dns-prefetch">`, um Zeit beim ersten Schritt — der DNS-Abfrage — zu sparen.

Sie können Preconnect auch als HTTP [Link](/de/docs/Web/HTTP/Headers/Link)-Header implementieren, zum Beispiel:

![Beispielcode für einen HTTP Link-Header](1-12f4e1a6.md)

### `<link rel="dns-prefetch">`

[`<link rel="dns-prefetch">`](/de/docs/Web/HTML/Attributes/rel/dns-prefetch) bietet Browsern einen Hinweis, dass der Nutzer wahrscheinlich Ressourcen vom angegebenen Ursprung benötigt, und daher kann der Browser die Leistung möglicherweise verbessern, indem er proaktiv die DNS-Auflösung für diesen Ursprung durchführt. Es ist identisch zu `<link rel="preconnect">`, behandelt jedoch nur den DNS-Teil.

Auch hier ist der Browser-Support weit verbreitet, und es hat keinen Vorteil bei Anfragen vom selben Ursprung, da die Verbindung bereits geöffnet ist.

Zum Beispiel:

![Beispielcode für dns-prefetch](2-ab6ff58d.md)

> [!NOTE]
> Weitere Details finden Sie unter [Using dns-prefetch](/de/docs/Web/Performance/dns-prefetch).

### `<link rel="preload">`

[`<link rel="preload">`](/de/docs/Web/HTML/Attributes/rel/preload) bietet Browsern einen Hinweis darauf, welche Ressourcen auf der _aktuellen Seite_ eine hohe Priorität haben, sodass sie mit dem Herunterladen dieser Ressourcen beginnen können, wenn sie das {{htmlelement("link")}}-Element in den {{htmlelement("head")}} der Seite sehen.

Zum Beispiel:

![Beispielcode für preload](3-fe014700.md)

Das Ergebnis wird in einem pro-Dokument-In-Memory-Cache gespeichert. Wenn Sie etwas preloaden, was Ihre aktuelle Seite nicht als Unterressource verwendet, ist dies im Allgemeinen eine Verschwendung von Ressourcen, auch wenn das Ergebnis möglicherweise den HTTP-Cache bevölkert, wenn es durch Header erlaubt ist.

Sie können Preload auch als HTTP [Link](/de/docs/Web/HTTP/Headers/Link)-Header implementieren, zum Beispiel:

![Beispielcode für einen HTTP Link-Header](4-2c26bd4b.md)

Der Browser-Support für `<link rel="preload">`/`<link rel="modulepreload">` ist weit verbreitet in modernen Browsern.

### `<link rel="modulepreload">`

[`<link rel="modulepreload">`](/de/docs/Web/HTML/Attributes/rel/modulepreload) bietet Browsern einen Hinweis darauf, welche JavaScript-Module auf der _aktuellen Seite_ eine hohe Priorität haben, sodass sie mit dem Herunterladen dieser Module beginnen können.

Zum Beispiel:

![Beispielcode für modulepreload](5-1da7f0b4.md)

Es ist eine spezialisierte Version von `<link rel="preload">` für [JavaScript-Module](/de/docs/Web/JavaScript/Guide/Modules) und funktioniert grundsätzlich auf die gleiche Weise. Es gibt jedoch einige Unterschiede:

- Der Browser weiß, dass die Ressource ein JavaScript-Modul ist, da das `as`-Attribut nicht benötigt wird, und kann die richtigen Berechtigungsmodi verwenden, um doppeltes Herunterladen zu vermeiden.
- Anstatt es nur herunterzuladen und im Cache zu speichern, lädt der Browser es herunter, analysiert und kompiliert es direkt in die In-Memory-Modulkarte.
- Der Browser kann dies auch automatisch für Moduldabhängigkeiten tun.

### `<link rel="prefetch">`

[`<link rel="prefetch">`](/de/docs/Web/HTML/Attributes/rel/prefetch) bietet Browsern einen Hinweis darauf, dass der Nutzer die Zielressource wahrscheinlich für zukünftige Navigationen benötigt. Daher kann der Browser die Benutzererfahrung wahrscheinlich verbessern, indem er die Ressource proaktiv abruft und im Cache speichert. `<link rel="prefetch">` wird für gleichseitige Navigationsressourcen oder für Unterressourcen verwendet, die von gleichseitigen Seiten genutzt werden.

Zum Beispiel:

![Beispielcode für prefetch](6-ed266622.md)

Prefetching kann verwendet werden, um sowohl HTML als auch Unterressourcen für eine mögliche nächste Navigation abzurufen. Ein häufiges Anwendungsbeispiel ist es, eine einfache Website-Startseite zu haben, die "schwergewichtigere" Ressourcen abruft, die vom Rest der Seite verwendet werden.

![Beispielcode für einen HTTP Link-Header](7-44f77da4.md)

Das Ergebnis wird im HTTP-Cache auf der Festplatte gespeichert. Aus diesem Grund ist es nützlich, Unterressourcen vorzuholen, auch wenn sie nicht von der aktuellen Seite verwendet werden. Sie könnten es auch verwenden, um das nächste Dokument vorzuladen, das der Nutzer wahrscheinlich auf der Website besuchen wird. Sie müssen jedoch vorsichtig mit den Headern sein – bestimmte [Cache-Control](/de/docs/Web/HTTP/Headers/Cache-Control)-Header können Prefetching blockieren (zum Beispiel `no-cache` oder `no-store`).

Viele Browser implementieren derzeit eine Form der [Cache-Partionierung](https://developer.chrome.com/blog/http-cache-partitioning), die `<link rel="prefetch">` für Ressourcen unbrauchbar macht, die für die Nutzung durch verschiedene Top-Level-Sites bestimmt sind. Dies schließt das Hauptdokument beim plattformübergreifenden Navigieren ein. Zum Beispiel würde das folgende Prefetch:

![Beispielcode für einen cross-site prefetch](8-1efd3d81.md)

von `https://aggregator.example/` nicht zugänglich sein.

> **Note:** `<link rel="prefetch">` ist funktional äquivalent zu einem [`fetch()`](/de/docs/Web/API/Window/fetch)-Aufruf mit einer `priority: "low"`-Option, außer dass das erstere im Allgemeinen eine noch niedrigere Priorität hat und es einen [`Sec-Purpose: prefetch`](/de/docs/Web/HTTP/Headers/Sec-Purpose)-Header auf die Anfrage gesetzt hat.

> [!NOTE]
> Die Fetch-Anfrage für einen `prefetch`-Vorgang resultiert in einer HTTP-Anfrage, die den HTTP-Header [`Sec-Purpose: prefetch`](/de/docs/Web/HTTP/Headers/Sec-Purpose) enthält. Ein Server könnte diesen Header verwenden, um die Cache-Zeitüberschreitungen für die Ressourcen zu ändern oder andere spezielle Behandlungen durchzuführen. Die Anfrage wird ebenfalls den {{HTTPHeader("Sec-Fetch-Dest")}}-Header mit dem Wert `empty` enthalten. Der {{HTTPHeader("Accept")}}-Header in der Anfrage wird den für normale Navigationsanfragen verwendeten Wert entsprechen. Dies ermöglicht es dem Browser, die passenden gecachten Ressourcen nach der Navigation zu finden. Wenn eine Antwort zurückgegeben wird, wird sie mit der Anfrage im HTTP-Cache gespeichert.

### `<link rel="prerender">` {{deprecated_inline}}{{non-standard_inline}}

> [!NOTE]
> Diese Technologie war nur jemals in Chrome verfügbar und ist jetzt veraltet. Sie sollten stattdessen die [Speculation Rules API](/de/docs/Web/API/Speculation_Rules_API) verwenden, die diese ersetzt.

[`<link rel="prerender">`](/de/docs/Web/HTML/Attributes/rel/prerender) bietet den Browsern einen Hinweis darauf, dass der Nutzer die Zielressource möglicherweise für die nächste Navigation benötigt, und daher kann der Browser die Leistung wahrscheinlich verbessern, indem er die Ressource vorab rendert. `prerender` wird für zukünftige Navigationen, nur gleichseitig, verwendet und ist insofern sinnvoll für Multi-Page-Anwendungen (MPAs), nicht für Single-Page-Anwendungen (SPAs).

Zum Beispiel:

![Beispielcode für prerender](9-f0b8e4f0.md)

Es wird das referenzierte Dokument abrufen und dann alle verlinkten Ressourcen, die statisch auffindbar sind, abrufen und diese ebenfalls ablegen, wobei das Ergebnis im HTTP-Cache auf der Festplatte mit einer Fünf-Minuten-Zeitüberschreitung gespeichert wird. Die Ausnahme sind Unterressourcen, die über JavaScript geladen werden — diese werden nicht gefunden. Es hat auch andere Probleme — wie `<link rel="prefetch">` kann es auch durch [Cache-Control](/de/docs/Web/HTTP/Headers/Cache-Control)-Header blockiert werden und aufgrund der Browser-[Cache-Partionierung](https://developer.chrome.com/blog/http-cache-partitioning) für Ressourcen, die für die Verwendung durch verschiedene Top-Level-Sites bestimmt sind, unbrauchbar gemacht werden.

### Speculation Rules API

Die [Speculation Rules API](/de/docs/Web/API/Speculation_Rules_API) wird verwendet, um eine Reihe von Regeln zu spezifizieren, die bestimmen, welche zukünftigen Dokumente vom Browser vorgeladen oder vorgerendert werden sollten. Diese Regeln werden als JSON-Strukturen in eingebettete [`<script type="speculationrules">`](/de/docs/Web/HTML/Element/script/type/speculationrules)-Elemente und externe Textdateien eingefügt, die durch den {{httpheader("Speculation-Rules")}}-Response-Header referenziert werden.

## Wann sollten Sie jede Funktion verwenden?

Die folgende Tabelle fasst die oben detaillierten Funktionen zusammen und bietet Anleitungen, wann jede verwendet werden sollte.

| Spekulative Ladefunktionen                                                     | Zweck                                                   | Wann zu verwenden                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| ------------------------------------------------------------------------------ | ------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [`<link rel="preconnect">`](/de/docs/Web/HTML/Attributes/rel/preconnect)       | Vorbereitungen von Cross-Origin-Verbindungen            | Verwenden Sie es für Ihre kritischsten Cross-Origin-Verbindungen, um Leistungsverbesserungen beim Verbinden mit ihnen zu erzielen.                                                                                                                                                                                                                                                                                                                                                      |
| [`<link rel="dns-prefetch">`](/de/docs/Web/HTML/Attributes/rel/dns-prefetch)   | Vorbereitungen von Cross-Origin-Verbindungen            | Verwenden Sie es für alle Ihre Cross-Origin-Verbindungen, um kleine Leistungsverbesserungen beim Verbinden mit ihnen zu erreichen.                                                                                                                                                                                                                                                                                                                                                      |
| [`<link rel="preload">`](/de/docs/Web/HTML/Attributes/rel/preload)             | Hochpriorisiertes Laden aktueller Seitenunterressourcen | Verwenden Sie es, um hochpriorisierte Ressourcen schneller auf der aktuellen Seite zu laden, für strategische Leistungsverbesserungen. Laden Sie nicht alles vor, sonst werden Sie den Nutzen nicht sehen. Es gibt auch einige andere interessante Verwendungen — siehe [Preload: What Is It Good For?](https://www.smashingmagazine.com/2016/02/preload-what-is-it-good-for/) auf Smashing Magazine (2016)                                                                             |
| [`<link rel="modulepreload">`](/de/docs/Web/HTML/Attributes/rel/modulepreload) | Hochpriorisiertes Laden aktueller JavaScript-Module     | Verwenden Sie es, um hochpriorisierte JavaScript-Module vorzuhalten, für strategische Leistungsverbesserungen.                                                                                                                                                                                                                                                                                                                                                                          |
| [`<link rel="prefetch">`](/de/docs/Web/HTML/Attributes/rel/prefetch)           | Vorbefüllen des HTTP-Caches                             | Verwenden Sie es, um gleichseitige zukünftige Navigationsressourcen oder Unterressourcen auf diesen Seiten vorzubefüllen. Verwendet den HTTP-Cache, daher gibt es eine Reihe von Problemen mit Dokumentenvorabrufen, wie beispielsweise die mögliche Blockierung durch [Cache-Control](/de/docs/Web/HTTP/Headers/Cache-Control)-Header. Verwenden Sie stattdessen die [Speculation Rules API](/de/docs/Web/API/Speculation_Rules_API) für Dokumentenvorabrufe, wo sie unterstützt wird. |
| [`<link rel="prerender">`](/de/docs/Web/HTML/Attributes/rel/prerender)         | Vorbereitung für die nächste Navigation                 | Veraltet; Sie werden geraten, dies nicht zu verwenden. Verwenden Sie stattdessen [Speculation Rules API](/de/docs/Web/API/Speculation_Rules_API)-Prerender, wo es unterstützt wird.                                                                                                                                                                                                                                                                                                     |
| [Speculation Rules API](/de/docs/Web/API/Speculation_Rules_API) prefetch       | Vorbereitung für die nächste Navigation                 | Verwenden Sie es, um gleiche oder plattformübergreifende zukünftige Navigationsdokumente vorzubestellen. Eine breite Adoption wird empfohlen, wo es unterstützt wird; prüfen Sie, um sicherzustellen, dass die Seiten [sicher zum Vorabrufen sind](/de/docs/Web/API/Speculation_Rules_API#unsafe_prefetching). Es behandelt keine Vorabrufe von Unterressourcen; dafür müssen Sie `<link rel="prefetch">` verwenden.                                                                    |
| [Speculation Rules API](/de/docs/Web/API/Speculation_Rules_API) prerender      | Vorbereitung für die nächste Navigation                 | Verwenden Sie es, um gleichseitige zukünftige Navigationsressourcen vorzubestellen, für nahezu sofortige Navigationen. Verwenden Sie es auf hochpriorisierten Seiten, wo es unterstützt wird; prüfen Sie, um sicherzustellen, dass die Seiten [sicher zum Vorab-Rendern sind](/de/docs/Web/API/Speculation_Rules_API#unsafe_prerendering).                                                                                                                                              |

## Siehe auch

- [Seiten in Chrome für sofortige Seitenwechsel prerendern](https://developer.chrome.com/docs/web-platform/prerender-pages) auf developer.chrome.com (2023)
