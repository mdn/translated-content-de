---
title: Spekulatives Laden
slug: Web/Performance/Guides/Speculative_loading
l10n:
  sourceCommit: 774d84fbf6e708895c16cf82144233471b54216e
---

**Spekulatives Laden** bezieht sich auf die Praxis, Navigationsaktionen (wie das Abrufen von DNS, das Abrufen von Ressourcen oder das Rendern von Dokumenten) durchzuführen, bevor die zugehörigen Seiten tatsächlich besucht werden. Dies basiert auf Vorhersagen darüber, welche Seiten der Benutzer als nächstes wahrscheinlich besuchen wird.

Diese Vorhersagen können von Entwicklern bereitgestellt werden (zum Beispiel Listen der beliebtesten Ziele auf ihrer Website) oder durch Browser-Heuristiken ermittelt werden (zum Beispiel basierend auf beliebten Seiten in der Benutzerhistorie). Bei erfolgreicher Verwendung können solche Technologien die Leistung erheblich verbessern, indem Seiten schneller oder in manchen Fällen sofort verfügbar gemacht werden.

Diese Seite gibt einen Überblick über verfügbare spekulative Lade-Technologien und wann sie zur Leistungsverbesserung verwendet werden können und sollten.

## Spekulative Lade-Mechanismen

Es gibt mehrere Mechanismen für das spekulative Laden:

- **Prefetching** beinhaltet das Abrufen einiger oder aller Ressourcen, die zum Rendern eines Dokuments (oder eines Teils davon) benötigt werden, bevor sie tatsächlich gebraucht werden. Auf diese Weise kann das Rendern viel schneller erfolgen, wenn der Zeitpunkt kommt, sie anzuzeigen.
- **Prerendering** geht einen Schritt weiter und rendert tatsächlich den Inhalt, der angezeigt werden soll, wenn er benötigt wird. Je nachdem, wie dies getan wird, kann dies zu einer sofortigen Navigation von der alten Seite zur neuen führen.
- **Preconnecting** beinhaltet die Beschleunigung zukünftiger Ladevorgänge von einem bestimmten Ursprung, indem vorsorglich ein Teil oder der gesamte Verbindungs-Handshake (d.h. DNS + TCP + TLS) durchgeführt wird.

> [!NOTE]
> Die obigen Beschreibungen sind allgemeine und generelle Erklärungen. Genau was Browser tun, um Prefetching und Prerendering zu erreichen, hängt von den verwendeten Funktionen ab. Genauere Funktionsbeschreibungen finden Sie im Abschnitt [Spekulative Ladefunktionen](#spekulative_ladefunktionen) unten.

## Wie wird spekulatives Laden erreicht?

Spekulatives Laden wird auf zwei Hauptwegen erreicht.

Erstens werden einige Browser automatisch Seiten basierend auf verschiedenen Heuristiken prerendern, um automatische Leistungsverbesserungen bereitzustellen. Wie genau dies geschieht, hängt von der Browser-Implementierung ab. Chrome zum Beispiel rendert automatisch Seiten vor, wenn übereinstimmende Zeichenfolgen in die Adressleiste eingegeben werden — wenn es eine hohe Zuversicht hat, dass Sie diese Seite besuchen werden (siehe [Anzeigen von Chromes Adressleisten-Vorhersagen](https://developer.chrome.com/docs/web-platform/prerender-pages#view_chromes_address_bar_predictions) für weitere Details). Darüber hinaus kann es Suchergebnisseiten automatisch rendern, wenn Suchbegriffe in die Adressleiste eingegeben werden, wenn es von der Suchmaschine dazu angewiesen wird. Es verwendet dabei den gleichen Mechanismus wie die [Speculation Rules API](/de/docs/Web/API/Speculation_Rules_API).

Zweitens gibt es mehrere Plattformfunktionen, die Entwickler verwenden können, um Anleitungen zu geben, welche spekulativen Ladeaktionen der Browser durchführen soll. Diese werden im nächsten Abschnitt besprochen.

## Spekulative Ladefunktionen

### `<link rel="preconnect">`

[`<link rel="preconnect">`](/de/docs/Web/HTML/Reference/Attributes/rel/preconnect) bietet einen Hinweis für Browser, dass der Benutzer voraussichtlich Ressourcen vom Ursprung der angegebenen Ressource benötigt und daher der Browser die Leistung verbessern kann, indem er vorsorglich eine Verbindung zu diesem Ursprung initiiert. Unterstützende Browser führen vorsorglich einen Teil oder den gesamten Verbindungs-Handshake (d.h. DNS + TCP + TLS) durch.

Zum Beispiel:

```html
<link rel="preconnect" href="https://example.com" />
```

`<link rel="preconnect">` wird von den meisten Browsern unterstützt und bietet einen Vorteil für alle zukünftigen, plattformübergreifenden HTTP-Anfragen, Navigationen oder Subressourcen. Es hat keinen Vorteil bei gleichursprünglichen Anfragen, da die Verbindung bereits offen ist.

Wenn eine Seite Verbindungen zu vielen Drittdomains herstellen muss, kann das Vorher-Verbinden aller kontraproduktiv sein. Der `<link rel="preconnect">`-Hinweis wird am besten nur für die kritischsten Verbindungen verwendet. Für die anderen verwenden Sie einfach `<link rel="dns-prefetch">`, um Zeit beim ersten Schritt — der DNS-Abfrage — zu sparen.

Sie können Preconnect auch als HTTP-`Link`-Header implementieren, zum Beispiel:

```http
Link: <https://example.com>; rel="preconnect"
```

### `<link rel="dns-prefetch">`

[`<link rel="dns-prefetch">`](/de/docs/Web/HTML/Reference/Attributes/rel/dns-prefetch) bietet einen Hinweis für Browser, dass der Benutzer voraussichtlich Ressourcen vom Ursprung der angegebenen Ressource benötigt und daher der Browser die Leistung verbessern kann, indem er vorsorglich eine DNS-Auflösung für diesen Ursprung durchführt. Es ist identisch zu `<link rel="preconnect">`, außer dass es nur den DNS-Teil abwickelt.

Auch hier ist die Browserunterstützung weit verbreitet, und es hat keinen Vorteil bei gleichursprünglichen Anfragen, da die Verbindung bereits offen ist.

Zum Beispiel:

```html
<link rel="dns-prefetch" href="https://example.com" />
```

> [!NOTE]
> Weitere Details finden Sie unter [Verwendung von dns-prefetch](/de/docs/Web/Performance/Guides/dns-prefetch).

### `<link rel="preload">`

[`<link rel="preload">`](/de/docs/Web/HTML/Reference/Attributes/rel/preload) gibt Browsern einen Hinweis, welche Ressourcen auf _der aktuellen Seite_ von hoher Priorität sind, damit sie mit dem Herunterladen beginnen, sobald sie das {{htmlelement("link")}}-Element im {{htmlelement("head")}} der Seite sehen.

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

Das Ergebnis wird in einem pro-Dokument Arbeitsspeicher-Cache gespeichert. Wenn Sie etwas vorladen, das Ihre aktuelle Seite nicht als Subressource verwendet, ist es im Allgemeinen eine Verschwendung von Ressourcen, obwohl das Ergebnis den HTTP-Cache bevölkern kann, wenn die Header es zulassen.

Sie können Preload auch als HTTP-`Link`-Header implementieren, zum Beispiel:

```http
Link: <https://www.example.com/fonts/cicle_fina-webfont.woff2>; rel="preload"
```

Die Browserunterstützung für `<link rel="preload">`/`<link rel="modulepreload">` ist in modernen Browsern weit verbreitet.

### `<link rel="modulepreload">`

[`<link rel="modulepreload">`](/de/docs/Web/HTML/Reference/Attributes/rel/modulepreload) gibt Browsern einen Hinweis, welche JavaScript-Module auf _der aktuellen Seite_ von hoher Priorität sind, sodass sie frühzeitig mit dem Herunterladen beginnen können.

Zum Beispiel:

```html
<link rel="modulepreload" href="main.js" />
```

Es ist eine spezialisierte Version von `<link rel="preload">` für [JavaScript-Module](/de/docs/Web/JavaScript/Guide/Modules) und funktioniert im Wesentlichen auf die gleiche Weise. Es gibt jedoch einige Unterschiede:

- Der Browser weiß, dass die Ressource ein JavaScript-Modul ist, da das `as`-Attribut nicht benötigt wird, und er kann die korrekten Anmeldemoden verwenden, um Doppelfetching zu vermeiden.
- Anstatt es einfach herunterzuladen und im Cache zu speichern, lädt der Browser es herunter, parst es dann und kompiliert es direkt in die In-Memory-Modulkarte.
- Der Browser kann das Gleiche auch automatisch für Modulabhängigkeiten tun.

### `<link rel="prefetch">`

[`<link rel="prefetch">`](/de/docs/Web/HTML/Reference/Attributes/rel/prefetch) bietet einen Hinweis für Browser, dass der Benutzer voraussichtlich die Zielressource für zukünftige Navigationen benötigt und daher der Browser die Benutzererfahrung verbessern kann, indem er die Ressource vorsorglich abruft und im Cache speichert. `<link rel="prefetch">` wird für gleichseitige Navigationsressourcen oder für Subressourcen verwendet, die von gleichseitigen Seiten verwendet werden.

Zum Beispiel:

```html
<link rel="prefetch" href="main.js" />
```

Prefetching kann verwendet werden, um sowohl HTML als auch Subressourcen für eine mögliche nächste Navigation zu holen. Ein häufiger Anwendungsfall ist eine einfache Website-Landingpage, die "schwerwiegendere" Ressourcen abruft, die vom Rest der Seite verwendet werden.

```html
<link rel="prefetch" href="/app/style.css" />
<link rel="prefetch" href="/landing-page" />
```

Das Ergebnis wird im HTTP-Cache auf der Festplatte gespeichert. Deshalb ist es nützlich für das Vorabrufen von Subressourcen, auch wenn sie nicht von der aktuellen Seite verwendet werden. Sie könnten es auch verwenden, um das nächste Dokument vorzuladen, das der Benutzer wahrscheinlich auf der Seite besuchen wird. Sie müssen jedoch vorsichtig mit den Headern sein — zum Beispiel könnten bestimmte [Cache-Control](/de/docs/Web/HTTP/Reference/Headers/Cache-Control)-Header das Vorrufen blockieren (zum Beispiel `no-cache` oder `no-store`).

Viele Browser implementieren mittlerweile eine Form von [Cache-Partitionierung](https://developer.chrome.com/blog/http-cache-partitioning), die `<link rel="prefetch">` unbrauchbar macht für Ressourcen, die für die Verwendung durch verschiedene Top-Level-Seiten gedacht sind. Dies schließt das Hauptdokument ein, wenn es plattformübergreifend navigiert wird. Zum Beispiel wäre das folgende Prefetch:

```html
<link rel="prefetch" href="https://news.example/article" />
```

nicht von `https://aggregator.example/` aus zugänglich.

> [!NOTE]
> `<link rel="prefetch">` ist funktional äquivalent zu einem [`fetch()`](/de/docs/Web/API/Window/fetch)-Aufruf mit der Option `priority: "low"`, mit der Ausnahme, dass das erste im Allgemeinen eine noch niedrigere Priorität hat und es wird ein [`Sec-Purpose: prefetch`](/de/docs/Web/HTTP/Reference/Headers/Sec-Purpose)-Header an der Anfrage gesetzt.

> [!NOTE]
> Die Abrufanfrage für eine `prefetch`-Operation ergibt eine HTTP-Anfrage, die den HTTP-Header [`Sec-Purpose: prefetch`](/de/docs/Web/HTTP/Reference/Headers/Sec-Purpose) enthält. Ein Server könnte diesen Header verwenden, um die Cache-Timeouts für die Ressourcen zu ändern oder eine spezielle Behandlung durchzuführen.
> Die Anfrage wird auch den {{HTTPHeader("Sec-Fetch-Dest")}}-Header enthalten, wobei der Wert auf `empty` gesetzt ist.
> Der {{HTTPHeader("Accept")}}-Header in der Anfrage entspricht dem für normale Navigationsanfragen verwendeten Wert. Dies ermöglicht es dem Browser, die übereinstimmenden gecachten Ressourcen nach der Navigation zu finden.
> Wenn eine Antwort zurückgegeben wird, wird sie mit der Anfrage im HTTP-Cache zwischengespeichert.

### `<link rel="prerender">` {{deprecated_inline}}{{non-standard_inline}}

> [!NOTE]
> Diese Technologie war nur jemals in Chrome verfügbar und ist jetzt veraltet. Stattdessen sollten Sie die [Speculation Rules API](/de/docs/Web/API/Speculation_Rules_API) verwenden, die diese ersetzt.

[`<link rel="prerender">`](/de/docs/Web/HTML/Reference/Attributes/rel/prerender) bietet einen Hinweis für Browser, dass der Benutzer die Zielressource für die nächste Navigation benötigen könnte und daher der Browser die Leistung verbessern kann, indem er die Ressource vorab rendert. `prerender` wird für zukünftige Navigationen verwendet, nur gleichseitig, und ergibt daher Sinn für Mehrseitenanwendungen (MPAs), nicht für Einzelanwendungen (SPAs).

Zum Beispiel:

```html
<link rel="prerender" href="/next-page" />
```

Es wird das referenzierte Dokument abrufen, dann statisch auffindbare verlinkte Ressourcen abrufen und diese auch holen, wobei das Ergebnis im HTTP-Cache auf der Festplatte mit einem Timeout von fünf Minuten gespeichert wird. Die Ausnahme sind Subressourcen, die über JavaScript geladen werden — es findet diese nicht. Es hat auch andere Probleme — wie `<link rel="prefetch">` kann es auch durch [Cache-Control](/de/docs/Web/HTTP/Reference/Headers/Cache-Control)-Header blockiert werden und durch Browser-[Cache-Partitionierung](https://developer.chrome.com/blog/http-cache-partitioning) für Ressourcen, die für die Verwendung durch verschiedene Top-Level-Seiten gedacht sind, unbrauchbar gemacht werden.

### Speculation Rules API

Die [Speculation Rules API](/de/docs/Web/API/Speculation_Rules_API) wird verwendet, um eine Reihe von Regeln zu spezifizieren, die bestimmen, welche zukünftigen Dokumente vom Browser abgerufen oder vorgerendert werden sollen. Diese Regeln werden als JSON-Strukturen innerhalb von eingebetteten [`<script type="speculationrules">`](/de/docs/Web/HTML/Reference/Elements/script/type/speculationrules)-Elementen und externen Textdateien, die durch den {{httpheader("Speculation-Rules")}}-Antwortheader referenziert werden, angegeben.

## Wann sollten Sie jede Funktion verwenden?

Die folgende Tabelle fasst die oben beschriebenen Funktionen zusammen und gibt Empfehlungen, wann jede von ihnen verwendet werden sollte.

| Spekulative Ladefunktionen                                                               | Zweck                                                              | Wann verwenden                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| ---------------------------------------------------------------------------------------- | ------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| [`<link rel="preconnect">`](/de/docs/Web/HTML/Reference/Attributes/rel/preconnect)       | Aufwärmen von plattformübergreifenden Verbindungen                 | Verwenden Sie es für Ihre kritischsten plattformübergreifenden Verbindungen, um Leistungsverbesserungen beim Herstellen der Verbindung zu ermöglichen.                                                                                                                                                                                                                                                                                                                                                                   |
| [`<link rel="dns-prefetch">`](/de/docs/Web/HTML/Reference/Attributes/rel/dns-prefetch)   | Aufwärmen von plattformübergreifenden Verbindungen                 | Verwenden Sie es für alle plattformübergreifenden Verbindungen, um kleine Verbesserungen der Leistung beim Herstellen der Verbindung zu ermöglichen.                                                                                                                                                                                                                                                                                                                                                                     |
| [`<link rel="preload">`](/de/docs/Web/HTML/Reference/Attributes/rel/preload)             | Hochpriorisiertes Laden von Subressourcen der aktuellen Seite      | Verwenden Sie es, um hochpriorisierte Ressourcen auf der aktuellen Seite schneller zu laden, für strategische Leistungsverbesserungen. Laden Sie nicht alles vor, sonst sehen Sie keinen Nutzen. Es gibt auch einige andere interessante Anwendungen — siehe [Preload: What Is It Good For?](https://www.smashingmagazine.com/2016/02/preload-what-is-it-good-for/) auf Smashing Magazine (2016)                                                                                                                         |
| [`<link rel="modulepreload">`](/de/docs/Web/HTML/Reference/Attributes/rel/modulepreload) | Hochpriorisiertes Laden von JavaScript-Modulen der aktuellen Seite | Verwenden Sie es, um hochpriorisierte JavaScript-Module vorab zu laden, für strategische Leistungsverbesserungen.                                                                                                                                                                                                                                                                                                                                                                                                        |
| [`<link rel="prefetch">`](/de/docs/Web/HTML/Reference/Attributes/rel/prefetch)           | Vorab-Befüllung des HTTP-Caches                                    | Verwenden Sie es zum Vorabrufen von gleichseitigen zukünftigen Navigationsressourcen oder Subressourcen, die auf diesen Seiten verwendet werden. Verwendet den HTTP-Cache und hat daher eine Reihe von Problemen mit Dokumenten-Prefetches, wie beispielsweise das Potenzial, durch [Cache-Control](/de/docs/Web/HTTP/Reference/Headers/Cache-Control)-Header blockiert zu werden. Verwenden Sie die [Speculation Rules API](/de/docs/Web/API/Speculation_Rules_API) für Dokumenten-Prefetches, wo sie unterstützt wird. |
| [`<link rel="prerender">`](/de/docs/Web/HTML/Reference/Attributes/rel/prerender)         | Vorbereitung für die nächste Navigation                            | Veraltet; es wird empfohlen, dies nicht zu verwenden. Verwenden Sie stattdessen, wo unterstützt, die [Speculation Rules API](/de/docs/Web/API/Speculation_Rules_API) prerender.                                                                                                                                                                                                                                                                                                                                          |
| [Speculation Rules API](/de/docs/Web/API/Speculation_Rules_API) prefetch                 | Vorbereitung für die nächste Navigation                            | Verwenden Sie es, um gleich- oder plattformübergreifende zukünftige Navigationsdokumente vorzuholen. Breite Nutzung wird empfohlen, wo es unterstützt wird; überprüfen Sie, dass die Seiten [sicher zum Vorabrufen](/de/docs/Web/API/Speculation_Rules_API#unsafe_prefetching) sind. Es behandelt keine Subressourcen-Prefetches; dafür müssen Sie `<link rel="prefetch">` verwenden.                                                                                                                                    |
| [Speculation Rules API](/de/docs/Web/API/Speculation_Rules_API) prerender                | Vorbereitung für die nächste Navigation                            | Verwenden Sie es, um gleichursprüngliche zukünftige Navigationsressourcen vorzubereiten, für beinahe sofortige Navigationen. Verwenden Sie es auf hochprioritären Seiten, wo unterstützt; überprüfen Sie, dass die Seiten [sicher zum Vorrendern](/de/docs/Web/API/Speculation_Rules_API#unsafe_prerendering) sind.                                                                                                                                                                                                      |

## Siehe auch

- [Prerender-Seiten in Chrome für sofortige Seitennavigationen](https://developer.chrome.com/docs/web-platform/prerender-pages) auf developer.chrome.com (2023)
