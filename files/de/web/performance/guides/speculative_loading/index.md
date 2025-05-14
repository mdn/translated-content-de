---
title: Spekulatives Laden
slug: Web/Performance/Guides/Speculative_loading
l10n:
  sourceCommit: e488eba036b2fee56444fd579c3759ef45ff2ca8
---

**Spekulatives Laden** bezieht sich auf die Praxis, Navigationsaktionen (wie das Abrufen von DNS, das Herunterladen von Ressourcen oder das Rendern von Dokumenten) durchzuführen, bevor die zugehörigen Seiten tatsächlich besucht werden, basierend auf Vorhersagen, welche Seiten der Nutzer als nächstes am wahrscheinlichsten besuchen wird.

Diese Vorhersagen können von Entwicklern bereitgestellt werden (zum Beispiel Listen der beliebtesten Ziele auf ihrer Seite) oder durch Browser-Heuristiken bestimmt werden (zum Beispiel basierend auf beliebten Seiten in der Verlaufsliste des Nutzers). Wenn diese Technologien erfolgreich eingesetzt werden, können sie die Leistung erheblich verbessern, indem sie Seiten schneller oder in einigen Fällen sogar sofort verfügbar machen.

Dieser Artikel gibt einen Überblick über verfügbare Technologien zum spekulativen Laden und darüber, wann sie eingesetzt werden können und sollten, um die Leistung zu verbessern.

## Mechanismen zum spekulativen Laden

Es gibt mehrere Mechanismen für spekulatives Laden:

- **Prefetching** beinhaltet das Herunterladen aller oder einiger Ressourcen, die zum Rendern eines Dokuments (oder eines Teils eines Dokuments) benötigt werden, bevor sie benötigt werden, sodass beim Rendern das Rendern viel schneller erreicht werden kann.
- **Prerendering** geht einen Schritt weiter und rendert den Inhalt tatsächlich, sodass er bereit ist, angezeigt zu werden, wenn er benötigt wird. Abhängig davon, wie dies durchgeführt wird, kann dies zu einer sofortigen Navigation von der alten Seite zur neuen Seite führen.
- **Preconnecting** beinhaltet die Beschleunigung zukünftiger Ladevorgänge von einem bestimmten Ursprung, indem vorsorglich ein Teil oder der gesamte Verbindungshandschlag (d.h. DNS + TCP + TLS) durchgeführt wird.

> [!NOTE]
> Die obigen Beschreibungen sind auf hoher Ebene und allgemein. Was genau die Browser tun, um Prefetching und Prerendering zu erreichen, hängt von den genutzten Features ab. Genauere Funktionsbeschreibungen finden Sie im Abschnitt [Spekulative Ladefunktionen](#spekulative_ladefunktionen) unten.

## Wie wird spekulatives Laden erreicht?

Spekulatives Laden wird auf zwei Hauptarten erreicht.

Erstens werden einige Browser Seiten automatisch auf Grundlage verschiedener Heuristiken prerendern, um automatische Leistungsverbesserungen zu bieten. Wie genau dies geschieht, hängt von der Browser-Implementierung ab. Chrome zum Beispiel rendert Seiten automatisch vor, wenn übereinstimmende Zeichenfolgen in die Adressleiste eingegeben werden – wenn ein hohes Vertrauen besteht, dass Sie diese Seite besuchen werden (siehe [Vorhersagen der Chromes-Adressenleiste anzeigen](https://developer.chrome.com/docs/web-platform/prerender-pages#view_chromes_address_bar_predictions) für weitere Details). Darüber hinaus kann es automatisch Suchergebnisseiten vorab rendern, wenn Suchbegriffe in die Adressleiste eingegeben werden, wenn dies von der Suchmaschine angewiesen wird. Es verwendet dafür denselben Mechanismus wie die [Spekulationsregeln-API](/de/docs/Web/API/Speculation_Rules_API).

Zweitens gibt es mehrere verschiedene Plattformfunktionen, die Entwickler nutzen können, um Anweisungen darüber zu geben, welches spekulative Laden der Browser ausführen soll. Diese werden im nächsten Abschnitt behandelt.

## Spekulative Ladefunktionen

### `<link rel="preconnect">`

[`<link rel="preconnect">`](/de/docs/Web/HTML/Reference/Attributes/rel/preconnect) bietet einen Hinweis an Browser, dass der Nutzer wahrscheinlich Ressourcen vom Ursprung der angegebenen Ressource benötigt, und daher kann der Browser die Leistung verbessern, indem er vorsorglich eine Verbindung zu diesem Ursprung initiiert. Unterstützende Browser führen vorsorglich einen Teil oder den gesamten Verbindungshandschlag (d.h. DNS + TCP + TLS) durch.

Zum Beispiel:

```html
<link rel="preconnect" href="https://example.com" />
```

`<link rel="preconnect">` wird von vielen Browsern unterstützt und bietet einen Vorteil für jede zukünftige Cross-Origin HTTP-Anfrage, Navigation oder Teilressource. Es hat keinen Vorteil bei gleich-originären Anfragen, da die Verbindung bereits offen ist.

Wenn eine Seite Verbindungen zu vielen Drittanbieter-Domains herstellen muss, kann das Vorherige von allen kontraproduktiv sein. Der `<link rel="preconnect">`-Hinweis wird am besten für nur die kritischsten Verbindungen verwendet. Für die anderen verwenden Sie einfach `<link rel="dns-prefetch">`, um die Zeit für den ersten Schritt — die DNS-Abfrage — zu sparen.

Sie können Preconnect auch als HTTP-Header [`Link`](/de/docs/Web/HTTP/Reference/Headers/Link) implementieren, zum Beispiel:

```http
Link: <https://example.com>; rel="preconnect"
```

### `<link rel="dns-prefetch">`

[`<link rel="dns-prefetch">`](/de/docs/Web/HTML/Reference/Attributes/rel/dns-prefetch) bietet einen Hinweis an Browser, dass der Nutzer wahrscheinlich Ressourcen vom Ursprung der angegebenen Ressource benötigt, und daher kann der Browser die Leistung verbessern, indem er vorsorglich die DNS-Auflösung für diesen Ursprung durchführt. Es ist identisch mit `<link rel="preconnect">`, außer dass es nur den DNS-Teil behandelt.

Auch hier ist die Browserunterstützung weit verbreitet, und es hat keinen Vorteil bei gleich-originären Anfragen, da die Verbindung bereits offen ist.

Zum Beispiel:

```html
<link rel="dns-prefetch" href="https://example.com" />
```

> [!NOTE]
> Siehe [Verwendung von dns-prefetch](/de/docs/Web/Performance/Guides/dns-prefetch) für weitere Details.

### `<link rel="preload">`

[`<link rel="preload">`](/de/docs/Web/HTML/Reference/Attributes/rel/preload) bietet einen Hinweis an Browser, welche Ressourcen auf _der aktuellen Seite_ von hoher Priorität sind, damit sie beginnen können, diese frühzeitig herunterzuladen, wenn sie das {{htmlelement("link")}}-Element in den {{htmlelement("head")}} der Seite sehen.

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

Das Ergebnis wird in einem pro Dokument existierenden, im Speicher gehaltenen Cache gespeichert. Wenn Sie etwas preloaden, das Ihre aktuelle Seite nicht als Teilressource verwendet, ist dies im Allgemeinen eine Verschwendung von Ressourcen, obwohl das Ergebnis den HTTP-Cache füllen kann, wenn die Header dies zulassen.

Sie können Preload auch als HTTP-Header [`Link`](/de/docs/Web/HTTP/Reference/Headers/Link) implementieren, zum Beispiel:

```http
Link: <https://www.example.com/fonts/cicle_fina-webfont.woff2>; rel="preload"
```

Die Browserunterstützung für `<link rel="preload">`/`<link rel="modulepreload">` ist in modernen Browsern weit verbreitet.

### `<link rel="modulepreload">`

[`<link rel="modulepreload">`](/de/docs/Web/HTML/Reference/Attributes/rel/modulepreload) bietet einen Hinweis an Browser, welche JavaScript-Module auf _der aktuellen Seite_ von hoher Priorität sind, damit sie beginnen können, diese frühzeitig herunterzuladen.

Zum Beispiel:

```js
<link rel="modulepreload" href="main.js" />
```

Es ist eine spezialisierte Version von `<link rel="preload">` für [JavaScript-Module](/de/docs/Web/JavaScript/Guide/Modules) und funktioniert im Grunde auf die gleiche Weise. Es gibt jedoch einige Unterschiede:

- Der Browser weiß, dass die Ressource ein JavaScript-Modul ist, da das `as`-Attribut nicht benötigt wird, und er kann die richtigen Berechtigungsmodi verwenden, um Doppelanfragen zu vermeiden.
- Anstatt es nur herunterzuladen und in einem Cache zu speichern, lädt der Browser es herunter und analysiert und kompiliert es dann direkt in die im Speicher gehaltene Modulkarte.
- Der Browser kann dies auch automatisch für Modulabhängigkeiten tun.

### `<link rel="prefetch">`

[`<link rel="prefetch">`](/de/docs/Web/HTML/Reference/Attributes/rel/prefetch) bietet einen Hinweis an Browser, dass der Nutzer die Zielressource für zukünftige Navigationsaktionen wahrscheinlich benötigt. Daher kann der Browser die Nutzererfahrung verbessern, indem er die Ressource vorsorglich herunterlädt und im Cache speichert. `<link rel="prefetch">` wird für gleichseitige Navigationsressourcen oder für Teilressourcen verwendet, die von gleichseitigen Seiten verwendet werden.

Zum Beispiel:

```js
<link rel="prefetch" href="main.js" />
```

Prefetching kann verwendet werden, um sowohl HTML- als auch Unterressourcen für eine mögliche nächste Navigation herunterzuladen. Ein gängiges Anwendungsbeispiel ist es, eine einfache Website-Landingpage zu haben, die mehr "schwergewichtige" Ressourcen lädt, die vom Rest der Website verwendet werden.

```html
<link rel="prefetch" href="/app/style.css" />
<link rel="prefetch" href="/landing-page" />
```

Das Ergebnis wird im HTTP-Cache auf der Festplatte gespeichert. Aus diesem Grund ist es nützlich, um Unterressourcen vorab zu laden, auch wenn sie nicht von der aktuellen Seite verwendet werden. Sie könnten es auch verwenden, um das nächste Dokument vorzulesen, das der Nutzer wahrscheinlich auf der Website besuchen wird. Allerdings müssen Sie aufgrund dessen vorsichtig mit den Headern sein — zum Beispiel könnten bestimmte [Cache-Control](/de/docs/Web/HTTP/Reference/Headers/Cache-Control)-Header das Vorladen blockieren (zum Beispiel `no-cache` oder `no-store`).

Viele Browser implementieren jetzt eine Form der [Cache-Partitionierung](https://developer.chrome.com/blog/http-cache-partitioning), die `<link rel="prefetch">` für Ressourcen nutzlos macht, die von verschiedenen obersten Seiten verwendet werden sollen. Dies schließt das Hauptdokument bei der bereichsübergreifenden Navigation ein. Zum Beispiel wäre das folgende Prefetch:

```html
<link rel="prefetch" href="https://news.example/article" />
```

von `https://aggregator.example/` nicht zugänglich.

> **Hinweis:** `<link rel="prefetch">` ist funktional äquivalent zu einem [`fetch()`](/de/docs/Web/API/Window/fetch)-Aufruf mit der Option `priority: "low"`, außer dass ersteres im Allgemeinen eine noch niedrigere Priorität hat und einen [`Sec-Purpose: prefetch`](/de/docs/Web/HTTP/Reference/Headers/Sec-Purpose)-Header in der Anfrage gesetzt hat.

> [!NOTE]
> Die Abrufanfrage für eine `prefetch`-Operation führt zu einer HTTP-Anfrage, die den HTTP-Header [`Sec-Purpose: prefetch`](/de/docs/Web/HTTP/Reference/Headers/Sec-Purpose) enthält. Ein Server könnte diesen Header verwenden, um die Cache-Zeitüberschreitungen für die Ressourcen zu ändern oder andere spezielle Handlungen durchzuführen.
> Die Anfrage enthält auch den {{HTTPHeader("Sec-Fetch-Dest")}}-Header mit dem auf `empty` gesetzten Wert.
> Der {{HTTPHeader("Accept")}}-Header in der Anfrage entspricht dem für normale Navigationsanfragen verwendeten Wert. Dies ermöglicht es dem Browser, die übereinstimmenden zwischengespeicherten Ressourcen nach der Navigation zu finden.
> Falls eine Antwort zurückgegeben wird, wird sie zusammen mit der Anfrage im HTTP-Cache zwischengespeichert.

### `<link rel="prerender">` {{deprecated_inline}}{{non-standard_inline}}

> [!NOTE]
> Diese Technologie war nur jemals in Chrome verfügbar und ist jetzt veraltet. Stattdessen sollten Sie die [Spekulationsregeln-API](/de/docs/Web/API/Speculation_Rules_API) verwenden, die dies ablöst.

[`<link rel="prerender">`](/de/docs/Web/HTML/Reference/Attributes/rel/prerender) bietet einen Hinweis an Browser, dass der Nutzer die Zielressource für die nächste Navigation benötigen könnte und daher der Browser die Leistung verbessern kann, indem er die Ressource vorab rendert. `prerender` wird für zukünftige Navigationen verwendet, nur gleichseitig, und macht daher Sinn für Multi-Page-Anwendungen (MPAs), nicht für Single-Page-Anwendungen (SPAs).

Zum Beispiel:

```html
<link rel="prerender" href="/next-page" />
```

Es lädt das referenzierte Dokument herunter, dann lädt es alle verknüpften Ressourcen, die statisch auffindbar sind, und speichert sie ebenfalls im HTTP-Cache auf der Festplatte mit einem fünfminütigen Timeout. Die Ausnahme sind Unterressourcen, die über JavaScript geladen werden — diese findet es nicht. Es hat auch andere Probleme — wie `<link rel="prefetch">` kann es auch durch [Cache-Control](/de/docs/Web/HTTP/Reference/Headers/Cache-Control)-Header blockiert werden und durch die Browser-Partitionierung des Caches für Ressourcen, die zur Verwendung verschiedener oberster Seiten vorgesehen sind, nutzlos gemacht werden.

### Spekulationsregeln-API

Die [Spekulationsregeln-API](/de/docs/Web/API/Speculation_Rules_API) wird verwendet, um eine Reihe von Regeln anzugeben, die bestimmen, welche zukünftigen Dokumente vom Browser vorab geholt oder gerendert werden sollen. Diese Regeln werden als JSON-Strukturen innerhalb von eingebetteten [`<script type="speculationrules">`](/de/docs/Web/HTML/Reference/Elements/script/type/speculationrules)-Elementen und externen Textdateien bereitgestellt, die durch den {{httpheader("Speculation-Rules")}}-Antwortheader referenziert werden.

## Wann sollten Sie welche Funktion nutzen?

Die folgende Tabelle fasst die oben genannten Funktionen zusammen und gibt Richtlinien, wann jede genutzt werden sollte.

| Spekulative Ladefunktionen                                                               | Zweck                                                                | Wann zu verwenden                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| ---------------------------------------------------------------------------------------- | -------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [`<link rel="preconnect">`](/de/docs/Web/HTML/Reference/Attributes/rel/preconnect)       | Aufwärmen von Cross-Origin-Verbindungen                              | Verwenden Sie es für Ihre kritischsten Cross-Origin-Verbindungen, um Leistungsverbesserungen beim Herstellen der Verbindungen zu ermöglichen.                                                                                                                                                                                                                                                                                                                                                                 |
| [`<link rel="dns-prefetch">`](/de/docs/Web/HTML/Reference/Attributes/rel/dns-prefetch)   | Aufwärmen von Cross-Origin-Verbindungen                              | Verwenden Sie es für alle Ihre Cross-Origin-Verbindungen, um kleine Leistungsverbesserungen beim Herstellen der Verbindungen zu ermöglichen.                                                                                                                                                                                                                                                                                                                                                                  |
| [`<link rel="preload">`](/de/docs/Web/HTML/Reference/Attributes/rel/preload)             | Laden von aktuellen Seiten-Subressourcen mit hoher Priorität         | Verwenden Sie es, um Ressourcen mit hoher Priorität schneller auf der aktuellen Seite zu laden, für strategische Leistungsverbesserungen. Preloaden Sie nicht alles, ansonsten werden Sie den Vorteil nicht sehen. Es gibt auch einige andere interessante Verwendungen — siehe [Preload: What Is It Good For?](https://www.smashingmagazine.com/2016/02/preload-what-is-it-good-for/) auf Smashing Magazine (2016)                                                                                           |
| [`<link rel="modulepreload">`](/de/docs/Web/HTML/Reference/Attributes/rel/modulepreload) | Laden von JavaScript-Modulen der aktuellen Seite mit hoher Priorität | Verwenden Sie es, um JavaScript-Module mit hoher Priorität vorzuladen, für strategische Leistungsverbesserungen.                                                                                                                                                                                                                                                                                                                                                                                              |
| [`<link rel="prefetch">`](/de/docs/Web/HTML/Reference/Attributes/rel/prefetch)           | Vorab-Populating des HTTP-Caches                                     | Verwenden Sie es, um gleichseitige zukünftige Navigationsressourcen oder Unterressourcen zu laden, die auf diesen Seiten verwendet werden. Verwendet den HTTP-Cache, daher hat es einige Probleme mit Dokumentvorabrufen, wie zum Beispiel möglicherweise blockiert zu werden durch [Cache-Control](/de/docs/Web/HTTP/Reference/Headers/Cache-Control)-Header. Verwenden Sie stattdessen die [Spekulationsregeln-API](/de/docs/Web/API/Speculation_Rules_API) für Dokumentvorabrufe, wo sie unterstützt wird. |
| [`<link rel="prerender">`](/de/docs/Web/HTML/Reference/Attributes/rel/prerender)         | Vorbereitung auf die nächste Navigation                              | Veraltet; es wird empfohlen, dies nicht zu verwenden. Verwenden Sie stattdessen das Prerendering der [Spekulationsregeln-API](/de/docs/Web/API/Speculation_Rules_API), wo es unterstützt wird.                                                                                                                                                                                                                                                                                                                |
| [Spekulationsregeln-API](/de/docs/Web/API/Speculation_Rules_API) Prefetch                | Vorbereitung auf die nächste Navigation                              | Verwenden Sie es, um gleiche oder domainübergreifende zukünftige Navigationsdokumente vorab abzurufen. Eine breite Anwendung wird empfohlen, wo es unterstützt wird; stellen Sie sicher, dass die Seiten [sicher vorab abrufbar](/de/docs/Web/API/Speculation_Rules_API#unsafe_prefetching) sind. Es behandelt keine Unterressourcenvorababrufe; dafür müssen Sie `<link rel="prefetch">` verwenden.                                                                                                          |
| [Spekulationsregeln-API](/de/docs/Web/API/Speculation_Rules_API) Prerender               | Vorbereitung auf die nächste Navigation                              | Verwenden Sie es, um gleichseitige zukünftige Navigationsressourcen für nahezu sofortige Navigationen vorzuladen. Verwenden Sie es auf hochprioritären Seiten, wo es unterstützt wird; stellen Sie sicher, dass die Seiten [sicher vorab gerendert](/de/docs/Web/API/Speculation_Rules_API#unsafe_prerendering) sind.                                                                                                                                                                                         |

## Siehe auch

- [Seiten in Chrome für sofortige Seiten-Navigationen vorab rendern](https://developer.chrome.com/docs/web-platform/prerender-pages) auf developer.chrome.com (2023)
