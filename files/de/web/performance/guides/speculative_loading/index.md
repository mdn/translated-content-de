---
title: Spekulatives Laden
slug: Web/Performance/Guides/Speculative_loading
l10n:
  sourceCommit: 31ff21cf5f083a3258fc04267d54b1fb72224ff6
---

**Spekulatives Laden** bezeichnet die Praxis, Navigationsaktionen (wie DNS-Abrufe, das Abrufen von Ressourcen oder das Rendern von Dokumenten) durchzuführen, bevor die zugehörigen Seiten tatsächlich besucht werden, basierend auf Vorhersagen, welche Seiten der Benutzer als nächstes wahrscheinlich besuchen wird.

Diese Vorhersagen können von Entwicklern bereitgestellt werden (zum Beispiel Listen der beliebtesten Ziele auf ihrer Seite) oder durch Browserheuristiken bestimmt werden (zum Beispiel basierend auf beliebten Seiten in der Benutzerhistorie). Bei erfolgreicher Verwendung können solche Technologien die Leistung erheblich verbessern, indem Seiten schneller, oder in einigen Fällen, sofort verfügbar gemacht werden.

Diese Seite gibt einen Überblick über die verfügbaren Technologien zum spekulativen Laden und wann diese verwendet werden können und sollten, um die Leistung zu verbessern.

## Mechanismen für spekulatives Laden

Es gibt mehrere Mechanismen für spekulatives Laden:

- **Prefetching** beinhaltet das Abrufen einiger oder aller Ressourcen, die zum Rendern eines Dokuments (oder eines Teils eines Dokuments) erforderlich sind, bevor sie benötigt werden, sodass das Rendern viel schneller erfolgen kann, wenn die Zeit dafür gekommen ist.
- **Prerendering** geht einen Schritt weiter und rendert tatsächlich den Inhalt, sodass er bereit ist zur Anzeige, wenn erforderlich. Abhängig davon, wie dies geschieht, kann dies zu einer sofortigen Navigation von der alten Seite zur neuen Seite führen.
- **Preconnecting** beschleunigt zukünftige Ladezeiten von einem bestimmten Ursprung, indem proaktiv ein Teil oder der gesamte Verbindungs-Handshake (d.h. DNS + TCP + TLS) durchgeführt wird.

> [!NOTE]
> Die obigen Beschreibungen sind hochgradig und allgemein gehalten. Was genau Browser tun werden, um Prefetching und Prerendering zu erreichen, hängt von den verwendeten Funktionen ab. Genauere Funktionsbeschreibungen finden Sie im Abschnitt [Funktionen für spekulatives Laden](#funktionen_für_spekulatives_laden) unten.

## Wie wird spekulatives Laden erreicht?

Spekulatives Laden wird auf zwei Hauptwege erreicht.

Erstens werden einige Browser automatisch Seiten prerendern basierend auf verschiedenen Heuristiken, um automatische Leistungsverbesserungen zu bieten. Wie genau dies geschieht, hängt von der Browserumsetzung ab. Chrome prerendert beispielsweise automatisch Seiten, wenn Übereinstimmungen in die Adressleiste eingegeben werden — wenn es eine hohe Sicherheit hat, dass Sie diese Seite besuchen werden (siehe [Anzeigen von Chrome's Adressleisten-Vorhersagen](https://developer.chrome.com/docs/web-platform/prerender-pages#view_chromes_address_bar_predictions) für weitere Details). Zusätzlich kann es Suchergebnisseiten automatisch prerendern, wenn Suchbegriffe in die Adressleiste eingegeben werden, wenn es von der Suchmaschine dazu angewiesen wird. Es benutzt dafür denselben Mechanismus wie die [Speculation Rules API](/de/docs/Web/API/Speculation_Rules_API).

Zweitens gibt es verschiedene Plattformfunktionen, die Entwickler nutzen können, um Anweisungen darüber zu geben, welches spekulative Laden der Browser ausführen soll. Diese werden im nächsten Abschnitt überprüft.

## Funktionen für spekulatives Laden

### `<link rel="preconnect">`

[`<link rel="preconnect">`](/de/docs/Web/HTML/Attributes/rel/preconnect) bietet Browsern einen Hinweis, dass der Benutzer voraussichtlich Ressourcen vom angegebenen Ursprung benötigen wird, und daher kann der Browser die Leistung wahrscheinlich verbessern, indem er proaktiv eine Verbindung zu diesem Ursprung herstellt. Unterstützende Browser werden proaktiv einen Teil oder den gesamten Verbindungs-Handshake durchführen (d.h. DNS + TCP + TLS).

Zum Beispiel:

```html
<link rel="preconnect" href="https://example.com" />
```

`<link rel="preconnect">` wird in vielen Browsern unterstützt und bietet einen Vorteil für jede zukünftige Cross-Origin-HTTP-Anfrage, Navigation oder Subresource. Es hat keinen Nutzen für gleichherkunftsbasierte Anfragen, da die Verbindung bereits geöffnet ist.

Wenn eine Seite Verbindungen zu vielen Drittanbieter-Domains herstellen muss, kann es kontraproduktiv sein, sie alle vorzubinden. Der `<link rel="preconnect">`-Hinweis sollte am besten nur für die wichtigsten Verbindungen genutzt werden. Für die anderen verwenden Sie einfach `<link rel="dns-prefetch">`, um Zeit beim ersten Schritt — dem DNS-Lookup — zu sparen.

Sie können Preconnect auch als HTTP-[Link](/de/docs/Web/HTTP/Headers/Link)-Header implementieren, zum Beispiel:

```http
Link: <https://example.com>; rel="preconnect"
```

### `<link rel="dns-prefetch">`

[`<link rel="dns-prefetch">`](/de/docs/Web/HTML/Attributes/rel/dns-prefetch) bietet den Browsern einen Hinweis darauf, dass der Benutzer wahrscheinlich Ressourcen vom angegebenen Ursprung benötigen wird, und daher kann der Browser die Leistung möglicherweise verbessern, indem er proaktiv die DNS-Auflösung für diesen Ursprung durchführt. Es ist identisch mit `<link rel="preconnect">`, übernimmt jedoch nur den DNS-Teil.

Auch hier ist die Browserunterstützung weit verbreitet und es hat keinen Nutzen für gleichherkunftsbasierte Anfragen, da die Verbindung bereits geöffnet ist.

Zum Beispiel:

```html
<link rel="dns-prefetch" href="https://example.com" />
```

> [!NOTE]
> Siehe [Verwenden von dns-prefetch](/de/docs/Web/Performance/Guides/dns-prefetch) für mehr Details.

### `<link rel="preload">`

[`<link rel="preload">`](/de/docs/Web/HTML/Attributes/rel/preload) bietet den Browsern einen Hinweis darauf, welche Ressourcen _auf der aktuellen Seite_ von hoher Priorität sind, damit sie mit dem Herunterladen beginnen können, sobald sie das {{htmlelement("link")}}-Element in dem {{htmlelement("head")}} der Seite sehen.

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

Das Ergebnis wird in einem pro-Dokument-Speicher zwischengespeichert. Wenn Sie etwas vorladen, das Ihre aktuelle Seite nicht als Subressource verwendet, ist dies in der Regel eine Verschwendung von Ressourcen, obwohl das Ergebnis den HTTP-Cache populieren kann, wenn die Header dies zulassen.

Sie können auch Preload als HTTP-[Link](/de/docs/Web/HTTP/Headers/Link)-Header implementieren, zum Beispiel:

```http
Link: <https://www.example.com/fonts/cicle_fina-webfont.woff2>; rel="preload"
```

Browserunterstützung für `<link rel="preload">`/`<link rel="modulepreload">` ist in modernen Browsern weit verbreitet.

### `<link rel="modulepreload">`

[`<link rel="modulepreload">`](/de/docs/Web/HTML/Attributes/rel/modulepreload) bietet den Browsern einen Hinweis darauf, welche JavaScript-Module _auf der aktuellen Seite_ von hoher Priorität sind, damit sie frühzeitig mit dem Herunterladen beginnen können.

Zum Beispiel:

```js
<link rel="modulepreload" href="main.js" />
```

Es ist eine spezialisierte Version von `<link rel="preload">` für [JavaScript-Module](/de/docs/Web/JavaScript/Guide/Modules) und funktioniert im Grunde genommen auf die gleiche Weise. Es gibt jedoch einige Unterschiede:

- Der Browser weiß, dass die Ressource ein JavaScript-Modul ist, da das `as`-Attribut nicht benötigt wird, und er kann die richtigen Anmeldemodi verwenden, um doppeltes Abrufen zu vermeiden.
- Anstatt es nur herunterzuladen und im Cache zu speichern, lädt der Browser es herunter, analysiert und kompiliert es dann direkt in die In-Memory-Modulkarte.
- Der Browser kann dasselbe auch automatisch für Modulabhängigkeiten tun.

### `<link rel="prefetch">`

[`<link rel="prefetch">`](/de/docs/Web/HTML/Attributes/rel/prefetch) bietet den Browsern einen Hinweis darauf, dass der Benutzer die Zielressource für zukünftige Navigationen wahrscheinlich benötigen wird, und daher kann der Browser die Benutzererfahrung wahrscheinlich verbessern, indem er die Ressource proaktiv abruft und im Cache speichert. `<link rel="prefetch">` wird für gleichseitige Navigationsressourcen oder für Subressourcen verwendet, die von gleichseitigen Seiten genutzt werden.

Zum Beispiel:

```js
<link rel="prefetch" href="main.js" />
```

Prefetching kann verwendet werden, um sowohl HTML als auch Subressourcen für eine mögliche zukünftige Navigation abzurufen. Ein gängiger Anwendungsfall ist eine einfache Website-Landingpage, die "schwergewichtige" Ressourcen abruft, die von der restlichen Website genutzt werden.

```html
<link rel="prefetch" href="/app/style.css" />
<link rel="prefetch" href="/landing-page" />
```

Das Ergebnis wird im HTTP-Cache auf der Festplatte gespeichert. Deshalb ist es sinnvoll, Subressourcen vorzuladen, auch wenn sie von der aktuellen Seite nicht verwendet werden. Sie könnten es auch verwenden, um das nächste Dokument vorzuholen, das der Benutzer wahrscheinlich auf der Website besuchen wird. Allerdings müssen Sie aufgrund dessen vorsichtig mit Headern sein — zum Beispiel könnten bestimmte [Cache-Control](/de/docs/Web/HTTP/Headers/Cache-Control)-Header das Prefetching blockieren (zum Beispiel `no-cache` oder `no-store`).

Viele Browser implementieren jetzt eine Form von [Cache-Partitionierung](https://developer.chrome.com/blog/http-cache-partitioning), was `<link rel="prefetch">` unbrauchbar für Ressourcen macht, die für unterschiedliche Top-Level-Sites gedacht sind. Dies umfasst das Hauptdokument bei der Navigation über Sites hinweg. So wäre zum Beispiel das folgende Prefetch:

```html
<link rel="prefetch" href="https://news.example/article" />
```

Nicht zugänglich von `https://aggregator.example/`.

> **Hinweis:** `<link rel="prefetch">` ist funktionell gleichwertig mit einem [`fetch()`](/de/docs/Web/API/Window/fetch)-Aufruf mit einer `priority: "low"`-Option, außer dass erstere im Allgemeinen eine noch niedrigere Priorität hat und einen [`Sec-Purpose: prefetch`](/de/docs/Web/HTTP/Headers/Sec-Purpose)-Header in der Anfrage hat.

> [!NOTE]
> Die Abrufanfrage für eine `prefetch`-Operation ergibt eine HTTP-Anfrage, die den HTTP-Header [`Sec-Purpose: prefetch`](/de/docs/Web/HTTP/Headers/Sec-Purpose) enthält. Ein Server könnte diesen Header verwenden, um die Cache-Timeouts für die Ressourcen zu ändern oder andere spezielle Handhabungen durchzuführen.
> Die Anfrage wird auch den {{HTTPHeader("Sec-Fetch-Dest")}}-Header mit dem Wert `empty` beinhalten.
> Der {{HTTPHeader("Accept")}}-Header in der Anfrage wird den Wert haben, der für normale Navigationsanfragen verwendet wird. Dies ermöglicht es dem Browser, die übereinstimmenden zwischengespeicherten Ressourcen nach der Navigation zu finden.
> Wenn eine Antwort zurückgegeben wird, wird sie zusammen mit der Anfrage im HTTP-Cache gespeichert.

### `<link rel="prerender">` {{deprecated_inline}}{{non-standard_inline}}

> [!NOTE]
> Diese Technologie war nur in Chrome verfügbar und ist jetzt veraltet. Sie sollten stattdessen die [Speculation Rules API](/de/docs/Web/API/Speculation_Rules_API) verwenden, die diese ersetzt.

[`<link rel="prerender">`](/de/docs/Web/HTML/Attributes/rel/prerender) bietet den Browsern einen Hinweis darauf, dass der Benutzer möglicherweise die Zielressource für die nächste Navigation benötigt, und daher kann der Browser die Leistung wahrscheinlich verbessern, indem er die Ressource prerendert. `prerender` wird für zukünftige Navigationen verwendet, nur auf gleichseitigen, und ergibt deshalb Sinn für Multi-Page-Anwendungen (MPAs), nicht für Single-Page-Anwendungen (SPAs).

Zum Beispiel:

```html
<link rel="prerender" href="/next-page" />
```

Es wird das referenzierte Dokument abrufen, dann alle verknüpften Ressourcen, die statisch auffindbar sind, herunterladen und diese ebenfalls abrufen, wobei das Ergebnis im HTTP-Cache auf der Festplatte mit einem fünfminütigen Timeout gespeichert wird. Die Ausnahme sind Subressourcen, die über JavaScript geladen werden — diese werden nicht gefunden. Es hat auch andere Probleme — wie `<link rel="prefetch">` kann es auch durch [Cache-Control](/de/docs/Web/HTTP/Headers/Cache-Control)-Header blockiert werden, und durch die Browser [Cache-Partitionierung](https://developer.chrome.com/blog/http-cache-partitioning) für Ressourcen, die für verschiedene Top-Level-Sites gedacht sind, nutzlos gemacht werden.

### Speculation Rules API

Die [Speculation Rules API](/de/docs/Web/API/Speculation_Rules_API) wird verwendet, um eine Reihe von Regeln festzulegen, die bestimmen, welche zukünftigen Dokumente vom Browser vorgeladen oder prerendert werden sollen. Diese Regeln werden als JSON-Strukturen innerhalb von Inline-Elementen [`<script type="speculationrules">`](/de/docs/Web/HTML/Element/script/type/speculationrules) und externen Textdateien bereitgestellt, die durch den {{httpheader("Speculation-Rules")}}-Antwortheader referenziert werden.

## Wann sollten Sie welche Funktion verwenden?

Die folgende Tabelle fasst die oben beschriebenen Funktionen zusammen und gibt Hinweise darauf, wann jede einzelne verwendet werden sollte.

| Funktionen für spekulatives Laden                                              | Zweck                                                                | Wann verwenden                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| ------------------------------------------------------------------------------ | -------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [`<link rel="preconnect">`](/de/docs/Web/HTML/Attributes/rel/preconnect)       | Cross-Origin-Verbindungsanwärmung                                    | Verwenden Sie es bei Ihren kritischsten Cross-Origin-Verbindungen, um Leistungsverbesserungen beim Verbinden zu ihnen zu erzielen.                                                                                                                                                                                                                                                                                                                          |
| [`<link rel="dns-prefetch">`](/de/docs/Web/HTML/Attributes/rel/dns-prefetch)   | Cross-Origin-Verbindungsanwärmung                                    | Verwenden Sie es bei all Ihren Cross-Origin-Verbindungen, um kleine Leistungsverbesserungen beim Verbinden zu ihnen zu erzielen.                                                                                                                                                                                                                                                                                                                            |
| [`<link rel="preload">`](/de/docs/Web/HTML/Attributes/rel/preload)             | Laden von Subressourcen mit hoher Priorität der aktuellen Seite      | Verwenden Sie es, um Ressourcen mit hoher Priorität schneller auf der aktuellen Seite zu laden, für strategische Leistungsverbesserungen. Laden Sie nicht alles vor, andernfalls sehen Sie keinen Nutzen. Hat auch einige andere interessante Anwendungen — siehe [Preload: What Is It Good For?](https://www.smashingmagazine.com/2016/02/preload-what-is-it-good-for/) auf Smashing Magazine (2016)                                                       |
| [`<link rel="modulepreload">`](/de/docs/Web/HTML/Attributes/rel/modulepreload) | Laden von JavaScript-Modulen mit hoher Priorität der aktuellen Seite | Verwenden Sie es, um JavaScript-Module mit hoher Priorität vorzuladen, für strategische Leistungsverbesserungen.                                                                                                                                                                                                                                                                                                                                            |
| [`<link rel="prefetch">`](/de/docs/Web/HTML/Attributes/rel/prefetch)           | Vorbereiten des HTTP-Caches                                          | Verwenden Sie es, um gleiche Standortressourcen oder Subressourcen für zukünftige Navigationen vorzuholen. Es nutzt den HTTP-Cache, hat daher einige Probleme mit Dokumenten-Vorausholen, wie zum Beispiel das Potenzial, durch [Cache-Control](/de/docs/Web/HTTP/Headers/Cache-Control)-Header blockiert zu werden. Verwenden Sie die [Speculation Rules API](/de/docs/Web/API/Speculation_Rules_API) für Dokumentenvorausholen, wo dies unterstützt wird. |
| [`<link rel="prerender">`](/de/docs/Web/HTML/Attributes/rel/prerender)         | Vorbereitung für die nächste Navigation                              | Veraltet; es wird empfohlen, diese nicht zu nutzen. Verwenden Sie die [Speculation Rules API](/de/docs/Web/API/Speculation_Rules_API) prerender stattdessen, wo dies unterstützt wird.                                                                                                                                                                                                                                                                      |
| [Speculation Rules API](/de/docs/Web/API/Speculation_Rules_API) prefetch       | Vorbereitung für die nächste Navigation                              | Verwenden Sie es, um gleiche oder übergreifende zukünftige Navigationsdokumente vorzuholen. Breite Nutzung wird empfohlen, wo dies unterstützt wird; überprüfen Sie, dass die Seiten [sicher vorzuholen](/de/docs/Web/API/Speculation_Rules_API#unsafe_prefetching) sind. Es verarbeitet keine Subressourcen-Vorausholen; dafür müssen Sie `<link rel="prefetch">` verwenden.                                                                               |
| [Speculation Rules API](/de/docs/Web/API/Speculation_Rules_API) prerender      | Vorbereitung für die nächste Navigation                              | Verwenden Sie es, um zukünftige gleichherkunftsbasierte Navigationsressourcen vorzuholen, für nahezu sofortige Navigationen. Verwenden Sie es bei hochpriotierten Seiten, wo dies unterstützt wird; überprüfen Sie, dass die Seiten [sicher zu prerendern](/de/docs/Web/API/Speculation_Rules_API#unsafe_prerendering) sind.                                                                                                                                |

## Siehe auch

- [Prerender-Seiten in Chrome für sofortige Seitennavigationen](https://developer.chrome.com/docs/web-platform/prerender-pages) auf developer.chrome.com (2023)
