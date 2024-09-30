---
title: Spekulatives Laden
slug: Web/Performance/Speculative_loading
l10n:
  sourceCommit: 0a9c10fc67901972221dc7b3d006334fbfa73dce
---

{{QuickLinksWithSubPages("Web/Performance")}}

**Spekulatives Laden** bezieht sich auf die Praxis, Navigationsaktionen (wie DNS-Abrufe, Resource-Abrufe oder das Rendern von Dokumenten) auszuführen, bevor die zugehörigen Seiten tatsächlich besucht werden, basierend auf Vorhersagen, welche Seiten der Benutzer als nächstes höchstwahrscheinlich besuchen wird.

Diese Vorhersagen können von Entwicklern bereitgestellt werden (z. B. Listen der beliebtesten Ziele auf ihrer Website) oder von Browser-Heuristiken bestimmt werden (z. B. basierend auf beliebten Websites in der Verlauf der Benutzer). Wenn sie erfolgreich eingesetzt werden, können solche Technologien die Leistung erheblich verbessern, indem sie Seiten schneller oder in manchen Fällen sofort verfügbar machen.

Diese Seite gibt einen Überblick über verfügbare Technologien zum spekulativen Laden und wann sie zur Leistungsverbesserung eingesetzt werden können und sollten.

## Mechanismen zum spekulativen Laden

Es gibt mehrere Mechanismen für spekulatives Laden:

- **Prefetching** beinhaltet das Abrufen einiger oder aller Ressourcen, die zum Rendern eines Dokuments (oder eines Teils eines Dokuments) benötigt werden, bevor sie benötigt werden, sodass, wenn die Zeit zum Rendern kommt, das Rendering wesentlich schneller erfolgen kann.
- **Prerendering** geht einen Schritt weiter und rendert den Inhalt tatsächlich vor, um ihn bei Bedarf zu zeigen. Je nachdem, wie dies gemacht wird, kann dies zu einer sofortigen Navigation von der alten zur neuen Seite führen.
- **Preconnecting** beinhaltet das Beschleunigen zukünftiger Ladevorgänge von einem bestimmten Herkunftsort, indem proaktiv ein Teil oder der gesamte Verbindungshandshake (d.h. DNS + TCP + TLS) durchgeführt wird.

> [!NOTE]
> Die obigen Beschreibungen sind allgemeiner Natur. Was genau Browser tun, um Prefetching und Prerendering zu erreichen, hängt von den verwendeten Funktionen ab. Genaue Funktionsbeschreibungen finden Sie im Abschnitt [Funktionen zum spekulativen Laden](#funktionen_zum_spekulativen_laden) unten.

## Wie wird spekulatives Laden erreicht?

Spekulatives Laden wird auf zwei Hauptarten erreicht.

Erstens werden einige Browser automatisch Seiten prerendern, basierend auf verschiedenen Heuristiken, um automatische Leistungsverbesserungen zu bieten. Wie dies genau gemacht wird, hängt von der Browser-Implementierung ab. Chrome beispielsweise rendert Seiten automatisch vor, wenn übereinstimmende Zeichenfolgen in die Adressleiste getippt werden — wenn es mit hoher Wahrscheinlichkeit davon ausgeht, dass Sie diese Seite besuchen werden (siehe [Ansicht der Adressleisten-Vorhersagen in Chrome](https://developer.chrome.com/docs/web-platform/prerender-pages#view_chromes_address_bar_predictions) für weitere Details). Darüber hinaus kann es automatisch Ergebnisseiten von Suchmaschinen prerendern, wenn Suchbegriffe in die Adressleiste eingetippt werden, und das Suchmaschine dies anweist. Es verwendet dazu den gleichen Mechanismus wie die [Speculation Rules API](/de/docs/Web/API/Speculation_Rules_API).

Zweitens gibt es mehrere Plattform-Funktionen, die Entwickler verwenden können, um Anweisungen zu geben, welches spekulative Laden der Browser ausführen soll. Diese werden im nächsten Abschnitt behandelt.

## Funktionen zum spekulativen Laden

### `<link rel="preconnect">`

[`<link rel="preconnect">`](/de/docs/Web/HTML/Attributes/rel/preconnect) bietet einen Hinweis an Browser, dass der Benutzer wahrscheinlich Ressourcen vom angegebenen Ursprung benötigt, und daher kann der Browser die Leistung durch proaktives Initiieren einer Verbindung zu diesem Ursprung wahrscheinlich verbessern. Unterstützende Browser werden proaktiv einen Teil oder den gesamten Verbindungshandshake (d.h. DNS + TCP + TLS) durchführen.

Zum Beispiel:

```html
<link rel="preconnect" href="https://example.com" />
```

`<link rel="preconnect">` wird allgemein in Browsern unterstützt und bietet einen Vorteil für zukünftige Cross-Origin HTTP-Anfragen, Navigationen oder Subressourcen. Es bringt keinen Vorteil bei gleich-origin-Anfragen, da die Verbindung bereits offen ist.

Wenn eine Seite Verbindungen zu vielen Drittanbieter-Domänen herstellen muss, kann das Vorverbinden aller kontraproduktiv sein. Der `<link rel="preconnect">`-Hinweis wird am besten nur für die kritischsten Verbindungen verwendet. Für die anderen verwenden Sie einfach `<link rel="dns-prefetch">`, um Zeit beim ersten Schritt — der DNS-Abfrage — zu sparen.

Sie können Preconnect auch als HTTP-[Link](/de/docs/Web/HTTP/Headers/Link)-Header implementieren, beispielsweise:

```http
Link: <https://example.com>; rel="preconnect"
```

### `<link rel="dns-prefetch">`

[`<link rel="dns-prefetch">`](/de/docs/Web/HTML/Attributes/rel/dns-prefetch) bietet einen Hinweis an Browser, dass der Benutzer wahrscheinlich Ressourcen vom angegebenen Ursprung benötigt, und daher kann der Browser die Leistung durch proaktive DNS-Auflösung für diesen Ursprung verbessern. Es ist identisch mit `<link rel="preconnect">`, außer dass es sich nur um den DNS-Teil handelt.

Auch hier ist die Unterstützung durch Browser weit verbreitet, und es bringt keinen Vorteil bei gleich-origin-Anfragen, da die Verbindung bereits offen ist.

Zum Beispiel:

```html
<link rel="dns-prefetch" href="https://example.com" />
```

> [!NOTE]
> Lesen Sie [Using dns-prefetch](/de/docs/Web/Performance/dns-prefetch) für weitere Details.

### `<link rel="preload">`

[`<link rel="preload">`](/de/docs/Web/HTML/Attributes/rel/preload) bietet einen Hinweis an Browser, welche Ressourcen auf _der aktuellen Seite_ von hoher Priorität sind, damit sie heruntergeladen werden können, sobald der Browser das {{htmlelement("link")}}-Element (oder die Elemente) im {{htmlelement("head")}} der Seite sieht.

Zum Beispiel:

```html
<link rel="preload" href="main.js" as="script" />
<!-- CORS-enabled preload -->
<link
  rel="preload"
  href="https://www.example.com/fonts/cicle_fina-webfont.woff2"
  as="font"
  type="font/woff2"
  crossorigin />
```

Das Ergebnis wird in einem pro Dokument gespeicherten Cache im Speicher behalten. Wenn Sie etwas vorladen, das Ihre aktuelle Seite nicht als Subressource verwendet, ist dies im Allgemeinen eine Verschwendung von Ressourcen, obwohl das Ergebnis den HTTP-Cache auffüllen könnte, wenn dies durch Header erlaubt ist.

Sie können Preload auch als HTTP-[Link](/de/docs/Web/HTTP/Headers/Link)-Header implementieren, beispielsweise:

```http
Link: <https://www.example.com/fonts/cicle_fina-webfont.woff2>; rel="preload"
```

Die Browser-Unterstützung für `<link rel="preload">`/`<link rel="modulepreload">` ist in modernen Browsern weit verbreitet.

### `<link rel="modulepreload">`

[`<link rel="modulepreload">`](/de/docs/Web/HTML/Attributes/rel/modulepreload) bietet einen Hinweis an Browser, welche JavaScript-Module auf _der aktuellen Seite_ von hoher Priorität sind, damit diese frühzeitig heruntergeladen werden können.

Zum Beispiel:

```js
<link rel="modulepreload" href="main.js" />
```

Es handelt sich um eine spezialisierte Version von `<link rel="preload">` für [JavaScript-Module](/de/docs/Web/JavaScript/Guide/Modules), die im Grunde auf die gleiche Weise funktioniert. Es gibt jedoch einige Unterschiede:

- Der Browser weiß, dass die Ressource ein JavaScript-Modul ist, da das `as`-Attribut nicht benötigt wird, und er kann die richtigen Anmeldemodi verwenden, um Doppelladen zu vermeiden.
- Anstatt es nur herunterzuladen und in einem Cache zu speichern, lädt der Browser es herunter und analysiert und kompiliert es direkt in die In-Memory-Modulkarte.
- Der Browser kann dies auch automatisch für Modulabhängigkeiten tun.

### `<link rel="prefetch">`

[`<link rel="prefetch">`](/de/docs/Web/HTML/Attributes/rel/prefetch) bietet einen Hinweis an Browser, dass der Benutzer wahrscheinlich die Zielressource für zukünftige Navigationen benötigt, und daher kann der Browser die Benutzererfahrung wahrscheinlich durch proaktives Abrufen und Zwischenspeichern der Ressource verbessern. `<link rel="prefetch">` wird für Navigationen und Subressourcen verwendet, die von Seiten desselben Standorts verwendet werden.

Zum Beispiel:

```js
<link rel="prefetch" href="main.js" />
```

Prefetching kann verwendet werden, um sowohl HTML als auch Subressourcen für eine mögliche nächste Navigation abzurufen. Ein häufiges Anwendungsbeispiel ist das Vorladen von "schwergewichtigeren" Ressourcen, die vom Rest der Website genutzt werden, während eine einfache Zielseite geladen wird.

```html
<link rel="prefetch" href="/app/style.css" />
<link rel="prefetch" href="/landing-page" />
```

Das Ergebnis wird im HTTP-Cache auf der Festplatte gespeichert. Daher ist es nützlich, Subressourcen vorzuladen, auch wenn sie von der aktuellen Seite nicht verwendet werden. Sie können es auch verwenden, um das nächste Dokument vorzuholen, das der Benutzer wahrscheinlich auf der Website besucht. Allerdings müssen Sie aufgrund der Speicherung im Cache mit den Headern vorsichtig sein — zum Beispiel könnten bestimmte [Cache-Control](/de/docs/Web/HTTP/Headers/Cache-Control)-Header das Prefetching blockieren (z.B. `no-cache` oder `no-store`).

Viele Browser implementieren jetzt eine Form der [Cache-Partitionierung](https://developer.chrome.com/blog/http-cache-partitioning), was `<link rel="prefetch">` unbrauchbar macht für Ressourcen, die auf verschiedenen Top-Level-Websites verwendet werden sollen. Dies schließt das Hauptdokument bei Navigieren über Websites hinweg ein. Zum Beispiel wäre das folgende Prefetch:

```html
<link rel="prefetch" href="https://news.example/article" />
```

Von `https://aggregator.example/` nicht zugänglich.

> **Hinweis:** `<link rel="prefetch">` ist funktional gleichwertig mit einem [`fetch()`](/de/docs/Web/API/Window/fetch)-Aufruf mit der Option `priority: "low"` darauf gesetzt, außer dass ersteres im Allgemeinen eine noch niedrigere Priorität hat und ein [`Sec-Purpose: prefetch`](/de/docs/Web/HTTP/Headers/Sec-Purpose)-Header in der Anfrage gesetzt wird.

> [!NOTE]
> Die Abrufanfrage für eine `prefetch`-Operation resultiert in einem HTTP-Request, der den HTTP-Header [`Sec-Purpose: prefetch`](/de/docs/Web/HTTP/Headers/Sec-Purpose) enthält. Ein Server könnte diesen Header verwenden, um die Cache-Zeitüberschreitungen für die Ressourcen zu ändern oder eine andere spezielle Behandlung durchzuführen.
> Die Anfrage wird auch den {{HTTPHeader("Sec-Fetch-Dest")}}-Header mit dem Wert `empty` enthalten.
> Der {{HTTPHeader("Accept")}}-Header in der Anfrage wird den Wert für normale Navigationsanfragen verwenden. Dies ermöglicht es dem Browser, die passenden gecachten Ressourcen nach der Navigation zu finden.
> Wenn eine Antwort zurückgegeben wird, wird sie mit der Anfrage im HTTP-Cache gespeichert.

### `<link rel="prerender">` {{deprecated_inline}}{{non-standard_inline}}

> [!NOTE]
> Diese Technologie war nur in Chrome verfügbar und wird nun als veraltet angesehen. Sie sollten stattdessen die [Speculation Rules API](/de/docs/Web/API/Speculation_Rules_API) verwenden, die diese ersetzt.

[`<link rel="prerender">`](/de/docs/Web/HTML/Attributes/rel/prerender) bietet einen Hinweis an Browser, dass der Nutzer die Zielressource für die nächste Navigation benötigen könnte, und daher könnte der Browser die Leistung durch Prerendering der Ressource verbessern. `prerender` wird für zukünftige Navigationen, nur gleich-origin, verwendet und macht daher Sinn für Multi-Page-Anwendungen (MPAs), nicht für Single-Page-Anwendungen (SPAs).

Zum Beispiel:

```html
<link rel="prerender" href="/next-page" />
```

Es wird das referenzierte Dokument abrufen, dann alle verknüpften Ressourcen, die statisch auffindbar sind, ebenfalls abrufen und sie im HTTP-Cache mit einer fünfminütigen Zeitüberschreitung auf der Festplatte speichern. Eine Ausnahme bilden Subressourcen, die über JavaScript geladen werden — diese findet es nicht. Es hat auch andere Probleme — wie `<link rel="prefetch">` kann es auch durch [Cache-Control](/de/docs/Web/HTTP/Headers/Cache-Control)-Header blockiert und durch Browser-[Cache-Partitionierung](https://developer.chrome.com/blog/http-cache-partitioning) für Ressourcen, die auf verschiedenen Top-Level-Seiten verwendet werden sollen, unbrauchbar gemacht werden.

### Speculation Rules API

Die [Speculation Rules API](/de/docs/Web/API/Speculation_Rules_API) wird verwendet, um eine Reihe von Regeln festzulegen, die bestimmen, welche zukünftigen Dokumente vom Browser vorgeladen oder gerendert werden sollten. Diese Regeln werden als JSON-Strukturen innerhalb von Inline-Elementen [`<script type="speculationrules">`](/de/docs/Web/HTML/Element/script/type/speculationrules) und externen Textdateien bereitgestellt, die durch den {{httpheader("Speculation-Rules")}}-Antwort-Header referenziert werden.

## Wann sollten Sie jede Funktion verwenden?

Die folgende Tabelle fasst die oben detaillierten Funktionen zusammen und gibt Hinweise darauf, wann jede Funktion verwendet werden sollte.

| Funktionen zum spekulativen Laden                                                     | Zweck                                                    | Wann Sie sie verwenden sollten                                                                                                                                                                                                                                                                                                                                                                                                          |
| ------------------------------------------------------------------------------------- | -------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [`<link rel="preconnect">`](/de/docs/Web/HTML/Attributes/rel/preconnect)           | Aufwärmen von Cross-Origin-Verbindungen                  | Verwenden Sie es für Ihre kritischsten Cross-Origin-Verbindungen, um Leistungsverbesserungen beim Verbinden zu ihnen zu bieten.                                                                                                                                                                                                                                                                                                        |
| [`<link rel="dns-prefetch">`](/de/docs/Web/HTML/Attributes/rel/dns-prefetch)       | Aufwärmen von Cross-Origin-Verbindungen                  | Verwenden Sie es für alle Ihre Cross-Origin-Verbindungen, um kleine Leistungsverbesserungen beim Verbinden zu ihnen zu bieten.                                                                                                                                                                                                                                                                                                           |
| [`<link rel="preload">`](/de/docs/Web/HTML/Attributes/rel/preload)                 | Hochprioritäres Laden von Subressourcen auf der aktuellen Seite | Verwenden Sie es, um hochprioritäre Ressourcen auf der aktuellen Seite schneller zu laden, für strategische Leistungsverbesserungen. Laden Sie nicht alles vor, sonst werden Sie den Vorteil nicht sehen. Es gibt auch einige andere interessante Verwendungen — siehe [Preload: What Is It Good For?](https://www.smashingmagazine.com/2016/02/preload-what-is-it-good-for/) in Smashing Magazine (2016)                                                              |
| [`<link rel="modulepreload">`](/de/docs/Web/HTML/Attributes/rel/modulepreload)     | Hochprioritäres Laden von JavaScript-Modulen auf der aktuellen Seite | Verwenden Sie es, um hochprioritäre JavaScript-Module vorzuladen, um strategische Leistungsverbesserungen zu erzielen.                                                                                                                                                                                                                                                                                                                    |
| [`<link rel="prefetch">`](/de/docs/Web/HTML/Attributes/rel/prefetch)               | Vorab-Aufüllen des HTTP-Caches                           | Verwenden Sie es, um Ressourcen für zukünftige Navigationen oder Subressourcen, die auf diesen Seiten verwendet werden, vorzubringen. Verwendet HTTP-Cache und hat daher eine Reihe von Problemen mit Dokumentvorladungen, wie möglicher Blockierung durch [Cache-Control](/de/docs/Web/HTTP/Headers/Cache-Control)-Header. Verwenden Sie stattdessen die [Speculation Rules API](/de/docs/Web/API/Speculation_Rules_API) für Dokumentvorladungen, wo unterstützt. |
| [`<link rel="prerender">`](/de/docs/Web/HTML/Attributes/rel/prerender)             | Vorbereitung für die nächste Navigation                  | Veraltet; Sie sollten dies nicht verwenden. Verwenden Sie stattdessen [Speculation Rules API](/de/docs/Web/API/Speculation_Rules_API)-Prerender, wo es unterstützt wird.                                                                                                                                                                                                                                                           |
| [Speculation Rules API](/de/docs/Web/API/Speculation_Rules_API)-Prefetch           | Vorbereitung für die nächste Navigation                  | Verwenden Sie es, um gleiche oder übergreifende zukünftige Navigationsdokumente vorzubringen. Breite Nutzung wird empfohlen, wo unterstützt; überprüfen Sie, ob die Seiten [sicher vorzubringen](/de/docs/Web/API/Speculation_Rules_API#unsafe_prefetching) sind. Es verarbeitet keine Subressourcen-Vorladungen; dafür müssen Sie `<link rel="prefetch">` verwenden.                                                                        |
| [Speculation Rules API](/de/docs/Web/API/Speculation_Rules_API)-Prerender          | Vorbereitung für die nächste Navigation                  | Verwenden Sie es, um zukünftige Navigationsressourcen gleicher Herkunft vorzuladen, für nahezu sofortige Navigationen. Verwenden Sie es auf hochprioritären Seiten, wo es unterstützt wird; überprüfen Sie, ob die Seiten [sicher vorzuladen](/de/docs/Web/API/Speculation_Rules_API#unsafe_prerendering) sind.                                                                                                                                                      |

## Siehe auch

- [Seiten in Chrome prerendern für sofortige Seitenübergänge](https://developer.chrome.com/docs/web-platform/prerender-pages) auf developer.chrome.com (2023)
