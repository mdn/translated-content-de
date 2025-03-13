---
title: Spekulatives Laden
slug: Web/Performance/Guides/Speculative_loading
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

**Spekulatives Laden** bezieht sich auf die Praxis, Navigationsaktionen (wie das Abrufen von DNS, das Abrufen von Ressourcen oder das Rendern von Dokumenten) durchzuführen, bevor die zugehörigen Seiten tatsächlich besucht werden. Dies geschieht basierend auf Vorhersagen, welche Seiten der Benutzer höchstwahrscheinlich als nächstes besuchen wird.

Diese Vorhersagen können von Entwicklern bereitgestellt werden (zum Beispiel Listen der beliebtesten Ziele auf ihrer Website) oder durch Browser heuristisch ermittelt werden (zum Beispiel basierend auf beliebten Websites in der Historie des Benutzers). Wenn diese Technologien erfolgreich eingesetzt werden, können sie die Leistung erheblich verbessern, indem sie Seiten schneller oder in einigen Fällen sogar sofort verfügbar machen.

Diese Seite gibt einen Überblick über verfügbare Technologien für spekulatives Laden und wann sie eingesetzt werden können und sollten, um die Leistung zu verbessern.

## Mechanismen des spekulativen Ladens

Es gibt mehrere Mechanismen für das spekulative Laden:

- **Prefetching** beinhaltet das Abrufen einiger oder aller Ressourcen, die zum Rendern eines Dokuments (oder eines Teils eines Dokuments) benötigt werden, bevor sie benötigt werden, sodass das Rendering, wenn der Zeitpunkt dafür gekommen ist, viel schneller erreicht werden kann.
- **Prerendering** geht einen Schritt weiter und rendert tatsächlich den Inhalt, der bei Bedarf angezeigt werden soll. Abhängig davon, wie dies durchgeführt wird, kann dies zu einer sofortigen Navigation von der alten zur neuen Seite führen.
- **Preconnecting** beinhaltet das Beschleunigen zukünftiger Ladevorgänge von einer bestimmten Quelle, indem proaktiv ein Teil oder der gesamte Verbindungs-Handshake (d.h. DNS + TCP + TLS) durchgeführt wird.

> [!NOTE]
> Die obigen Beschreibungen sind allgemeine, hochrangige Erklärungen. Was Browser tun, um Prefetching und Prerendering zu erreichen, hängt von den verwendeten Funktionen ab. Genauere Funktionsbeschreibungen finden Sie im Abschnitt [Spekulative Ladefunktionen](#spekulative_ladefunktionen) weiter unten.

## Wie wird spekulatives Laden erreicht?

Spekulatives Laden wird auf zwei Hauptarten erreicht.

Erstens werden einige Browser Seiten automatisch basierend auf verschiedenen Heuristiken prerendern, um automatische Leistungsverbesserungen zu bieten. Wie genau dies geschieht, hängt von der Implementierung des Browsers ab. Chrome zum Beispiel rendert Seiten automatisch, sobald übereinstimmende Zeichenfolgen in die Adressleiste eingegeben werden, wenn eine hohe Sicherheit besteht, dass Sie diese Seite besuchen werden (siehe [Anzeigen von Chromes Adressleisten-Vorhersagen](https://developer.chrome.com/docs/web-platform/prerender-pages#view_chromes_address_bar_predictions) für weitere Details). Zusätzlich kann es Suchergebnisseiten automatisch rendern, wenn Suchbegriffe in die Adressleiste eingegeben werden, sofern dies von der Suchmaschine angewiesen wird. Dies geschieht mit dem gleichen Mechanismus wie die [Speculation Rules API](/de/docs/Web/API/Speculation_Rules_API).

Zweitens gibt es mehrere unterschiedliche Plattformfunktionen, die Entwickler nutzen können, um Anweisungen zu geben, was der Browser spekulativ laden soll. Diese werden im nächsten Abschnitt überprüft.

## Spekulative Ladefunktionen

### `<link rel="preconnect">`

[`<link rel="preconnect">`](/de/docs/Web/HTML/Attributes/rel/preconnect) gibt einen Hinweis an Browser, dass der Benutzer wahrscheinlich Ressourcen vom angegebenen Ursprung benötigt, und dass der Browser daher die Leistung wahrscheinlich verbessern kann, indem er proaktiv eine Verbindung zu diesem Ursprung initiiert. Unterstützende Browser werden proaktiv einen Teil oder den gesamten Verbindungs-Handshake (d.h. DNS + TCP + TLS) durchführen.

Beispiel:

```html
<link rel="preconnect" href="https://example.com" />
```

`<link rel="preconnect">` wird in allen Browsern weitgehend unterstützt und bietet einen Vorteil für alle zukünftigen Cross-Origin HTTP-Anfragen, Navigationen oder Subressourcen. Es hat keinen Nutzen bei Anfragen vom gleichen Ursprung, da die Verbindung bereits offen ist.

Wenn eine Seite Verbindungen zu vielen Drittanbieter-Domains herstellen muss, kann das Preconnecting aller diese Domains kontraproduktiv sein. Der `<link rel="preconnect">` Hinweis sollte am besten nur für die kritischsten Verbindungen verwendet werden. Für die anderen sollten Sie nur `<link rel="dns-prefetch">` verwenden, um Zeit beim ersten Schritt zu sparen – der DNS-Auflösung.

Sie können Preconnect auch als HTTP- [Link](/de/docs/Web/HTTP/Reference/Headers/Link) Header implementieren, zum Beispiel:

```http
Link: <https://example.com>; rel="preconnect"
```

### `<link rel="dns-prefetch">`

[`<link rel="dns-prefetch">`](/de/docs/Web/HTML/Attributes/rel/dns-prefetch) gibt einen Hinweis an Browser, dass der Benutzer wahrscheinlich Ressourcen vom angegebenen Ursprung benötigt, und dass der Browser daher die Leistung verbessern kann, indem er proaktiv die DNS-Auflösung für diesen Ursprung durchführt. Es ist identisch mit `<link rel="preconnect">`, außer dass es nur den DNS-Teil betrifft.

Auch hier ist die Browser-Unterstützung weit verbreitet, und es hat keinen Nutzen bei Anfragen vom gleichen Ursprung, da die Verbindung bereits offen ist.

Beispiel:

```html
<link rel="dns-prefetch" href="https://example.com" />
```

> [!NOTE]
> Siehe [Verwendung von dns-prefetch](/de/docs/Web/Performance/Guides/dns-prefetch) für weitere Details.

### `<link rel="preload">`

[`<link rel="preload">`](/de/docs/Web/HTML/Attributes/rel/preload) gibt einen Hinweis an Browser, welche Ressourcen auf _der aktuellen Seite_ von hoher Priorität sind, sodass es mit dem Herunterladen beginnen kann, sobald es die {{htmlelement("link")}}-Elemente im {{htmlelement("head")}} der Seite sieht.

Beispiel:

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

Das Ergebnis wird in einem pro-Dokument Speicher-Cache gehalten. Wenn Sie etwas vorladen, das Ihre aktuelle Seite nicht als Unterressource verwendet, ist dies im Allgemeinen eine Verschwendung von Ressourcen, obwohl das Ergebnis den HTTP-Cache füllen kann, wenn der Header dies erlaubt.

Sie können Preload auch als HTTP- [Link](/de/docs/Web/HTTP/Reference/Headers/Link) Header implementieren, zum Beispiel:

```http
Link: <https://www.example.com/fonts/cicle_fina-webfont.woff2>; rel="preload"
```

Die Browser-Unterstützung für `<link rel="preload">`/`<link rel="modulepreload">` ist in modernen Browsern weit verbreitet.

### `<link rel="modulepreload">`

[`<link rel="modulepreload">`](/de/docs/Web/HTML/Attributes/rel/modulepreload) gibt einen Hinweis an Browser, welche JavaScript-Module auf _der aktuellen Seite_ von hoher Priorität sind, sodass es mit dem Herunterladen beginnen kann.

Beispiel:

```js
<link rel="modulepreload" href="main.js" />
```

Es ist eine spezialisierte Version von `<link rel="preload">` für [JavaScript-Module](/de/docs/Web/JavaScript/Guide/Modules) und funktioniert im Grunde auf die gleiche Weise. Es gibt jedoch einige Unterschiede:

- Der Browser weiß, dass die Ressource ein JavaScript-Modul ist, da das `as`-Attribut nicht benötigt wird, und er kann die richtigen Berechtigungsmodi verwenden, um doppeltes Abrufen zu vermeiden.
- Anstatt es nur herunterzuladen und im Cache zu speichern, lädt der Browser es herunter, analysiert und kompiliert es dann direkt in die Speicher-Modul-Karte.
- Der Browser kann dies auch automatisch für Modulabhängigkeiten tun.

### `<link rel="prefetch">`

[`<link rel="prefetch">`](/de/docs/Web/HTML/Attributes/rel/prefetch) gibt einen Hinweis an Browser, dass der Benutzer wahrscheinlich die Zielressource für zukünftige Navigationen benötigt, und daher kann der Browser wahrscheinlich die Benutzererfahrung verbessern, indem er die Ressource proaktiv abruft und speichert. `<link rel="prefetch">` wird für Navigationsressourcen derselben Site oder für Unterressourcen verwendet, die von Seiten derselben Site verwendet werden.

Beispiel:

```js
<link rel="prefetch" href="main.js" />
```

Prefetching kann verwendet werden, um sowohl HTML als auch Unterressourcen für eine mögliche nächste Navigation abzurufen. Ein häufiger Anwendungsfall besteht darin, eine einfache Website-Startseite zu haben, die mehr "schwergewichtige" Ressourcen abruft, die vom Rest der Seite verwendet werden.

```html
<link rel="prefetch" href="/app/style.css" />
<link rel="prefetch" href="/landing-page" />
```

Das Ergebnis wird im HTTP-Cache auf der Festplatte gespeichert. Deshalb ist es nützlich, Unterressourcen vorzuholen, selbst wenn sie von der aktuellen Seite nicht verwendet werden. Sie können es auch verwenden, um das nächste Dokument vorzuladen, das der Benutzer wahrscheinlich auf der Website besucht. Sie müssen jedoch mit Headern vorsichtig sein – zum Beispiel könnten bestimmte [Cache-Control](/de/docs/Web/HTTP/Reference/Headers/Cache-Control)-Header das Vorladen blockieren (zum Beispiel `no-cache` oder `no-store`).

Viele Browser implementieren jetzt eine Form der [Cache-Partitionierung](https://developer.chrome.com/blog/http-cache-partitioning), wodurch `<link rel="prefetch">` unbrauchbar für Ressourcen wird, die auf verschiedenen obersten Websites verwendet werden sollen. Dies beinhaltet das Hauptdokument bei der plattformübergreifenden Navigation. Also zum Beispiel, das folgende Prefetch:

```html
<link rel="prefetch" href="https://news.example/article" />
```

Wäre nicht von `https://aggregator.example/` aus zugänglich.

> **Hinweis:** `<link rel="prefetch">` ist funktional äquivalent zu einem [`fetch()`](/de/docs/Web/API/Window/fetch) Aufruf mit einer `priority: "low"` Option darauf gesetzt, außer dass ersteres im Allgemeinen eine noch niedrigere Priorität hat, und es wird ein [`Sec-Purpose: prefetch`](/de/docs/Web/HTTP/Reference/Headers/Sec-Purpose) Header auf der Anfrage gesetzt.

> [!NOTE]
> Die Fetch-Anfrage für eine `prefetch`-Operation resultiert in einer HTTP-Anfrage, die den HTTP-Header [`Sec-Purpose: prefetch`](/de/docs/Web/HTTP/Reference/Headers/Sec-Purpose) enthält. Ein Server könnte diesen Header verwenden, um die Cache-Timeouts für die Ressourcen zu ändern oder andere spezielle Verarbeitungen durchzuführen.
> Die Anfrage wird auch den {{HTTPHeader("Sec-Fetch-Dest")}} Header mit dem Wert `empty` enthalten.
> Der {{HTTPHeader("Accept")}} Header in der Anfrage wird den Wert für normale Navigationsanfragen übereinstimmen. Dies erlaubt dem Browser, die passenden gecachten Ressourcen nach der Navigation zu finden.
> Wenn eine Antwort zurückgegeben wird, wird sie zusammen mit der Anfrage im HTTP-Cache gecacht.

### `<link rel="prerender">` {{deprecated_inline}}{{non-standard_inline}}

> [!NOTE]
> Diese Technologie war nur in Chrome verfügbar und ist jetzt veraltet. Sie sollten stattdessen die [Speculation Rules API](/de/docs/Web/API/Speculation_Rules_API) verwenden, die dies ersetzt.

[`<link rel="prerender">`](/de/docs/Web/HTML/Attributes/rel/prerender) gibt einem Browser einen Hinweis, dass der Benutzer die Zielressource für die nächste Navigation benötigen könnte, und der Browser kann daher die Leistung verbessern, indem er die Ressource prerendert. `prerender` wird für zukünftige Navigationen verwendet, nur für die gleiche Site, und macht daher Sinn für Multi-Page-Anwendungen (MPAs), nicht für Single-Page-Anwendungen (SPAs).

Beispiel:

```html
<link rel="prerender" href="/next-page" />
```

Es wird das referenzierte Dokument abrufen, dann alle verlinkten Ressourcen, die statisch auffindbar sind, und sie ebenfalls abrufen, wobei das Ergebnis im HTTP-Cache auf der Festplatte mit einem Fünf-Minuten-Timeout gespeichert wird. Die Ausnahme sind Unterressourcen, die über JavaScript geladen werden – diese findet es nicht. Es gibt auch andere Probleme – wie `<link rel="prefetch">` kann es auch durch [Cache-Control](/de/docs/Web/HTTP/Reference/Headers/Cache-Control)-Header blockiert werden und durch Browser-[Cache-Partitionierung](https://developer.chrome.com/blog/http-cache-partitioning) unbrauchbar für Ressourcen gemacht werden, die für verschiedene oberste Websites verwendet werden sollen.

### Speculation Rules API

Die [Speculation Rules API](/de/docs/Web/API/Speculation_Rules_API) wird verwendet, um eine Reihe von Regeln anzugeben, die bestimmen, welche zukünftigen Dokumente vom Browser vorgeholt oder prerendert werden sollen. Diese Regeln werden als JSON-Strukturen innerhalb von Inline-[`<script type="speculationrules">`](/de/docs/Web/HTML/Element/script/type/speculationrules)-Elementen und externen Textdateien bereitgestellt, die durch den {{httpheader("Speculation-Rules")}}-Antwortheader referenziert werden.

## Wann sollten Sie welche Funktion verwenden?

Die folgende Tabelle fasst die oben genannten Funktionen zusammen und bietet Anleitungen, wann jede zu verwenden ist.

| Spekulative Ladefunktionen                                                     | Zweck                                                                | Wann zu verwenden                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| ------------------------------------------------------------------------------ | -------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [`<link rel="preconnect">`](/de/docs/Web/HTML/Attributes/rel/preconnect)       | Aufwärmen von Cross-Origin-Verbindungen                              | Verwenden Sie es für Ihre kritischsten Cross-Origin-Verbindungen, um Leistungsverbesserungen beim Verbinden mit ihnen zu erzielen.                                                                                                                                                                                                                                                                                                                                                                                               |
| [`<link rel="dns-prefetch">`](/de/docs/Web/HTML/Attributes/rel/dns-prefetch)   | Aufwärmen von Cross-Origin-Verbindungen                              | Verwenden Sie es für alle Ihre Cross-Origin-Verbindungen, um kleine Leistungsverbesserungen beim Verbinden mit ihnen zu erzielen.                                                                                                                                                                                                                                                                                                                                                                                                |
| [`<link rel="preload">`](/de/docs/Web/HTML/Attributes/rel/preload)             | Laden von Unterressourcen der aktuellen Seite mit hoher Priorität    | Verwenden Sie es, um hochprioritäre Ressourcen schneller auf der aktuellen Seite zu laden, für strategische Leistungsverbesserungen. Laden Sie nicht alles vor, sonst sehen Sie den Nutzen nicht. Dies hat auch einige andere interessante Anwendungen – siehe [Preload: What Is It Good For?](https://www.smashingmagazine.com/2016/02/preload-what-is-it-good-for/) auf Smashing Magazine (2016)                                                                                                                               |
| [`<link rel="modulepreload">`](/de/docs/Web/HTML/Attributes/rel/modulepreload) | Laden von JavaScript-Modulen der aktuellen Seite mit hoher Priorität | Verwenden Sie es, um hochprioritäre JavaScript-Module für strategische Leistungsverbesserungen vorzuladen.                                                                                                                                                                                                                                                                                                                                                                                                                       |
| [`<link rel="prefetch">`](/de/docs/Web/HTML/Attributes/rel/prefetch)           | Vorabfüllen des HTTP-Caches                                          | Verwenden Sie es, um zukünftige Navigationsressourcen oder Unterressourcen, die auf diesen Seiten verwendet werden, für die gleiche Site vorzuholen. Da der HTTP-Cache verwendet wird, gibt es eine Reihe von Problemstellungen mit Dokumentenvorabrufen, wie z.B. das potenzielle Blockieren durch [Cache-Control](/de/docs/Web/HTTP/Reference/Headers/Cache-Control)-Header. Verwenden Sie stattdessen die [Speculation Rules API](/de/docs/Web/API/Speculation_Rules_API) für Dokumentenvorabrufe, wo diese unterstützt wird. |
| [`<link rel="prerender">`](/de/docs/Web/HTML/Attributes/rel/prerender)         | Vorbereitung für die nächste Navigation                              | Veraltet; es wird empfohlen, dies nicht zu verwenden. Verwenden Sie stattdessen die [Speculation Rules API](/de/docs/Web/API/Speculation_Rules_API) prerender, wo diese unterstützt wird.                                                                                                                                                                                                                                                                                                                                        |
| [Speculation Rules API](/de/docs/Web/API/Speculation_Rules_API) prefetch       | Vorbereitung für die nächste Navigation                              | Verwenden Sie es, um same- oder cross-site zukünftige Navigationsdokumente vorzuholen. Breite Einführung wird empfohlen, wo dies unterstützt wird; überprüfen Sie, ob die Seiten [sicher vorgeholt werden können](/de/docs/Web/API/Speculation_Rules_API#unsafe_prefetching). Es behandelt keine Unterressourcenvorholungen; dafür müssen Sie `<link rel="prefetch">` verwenden.                                                                                                                                                 |
| [Speculation Rules API](/de/docs/Web/API/Speculation_Rules_API) prerender      | Vorbereitung für die nächste Navigation                              | Verwenden Sie es, um zukünftige Navigationsressourcen des gleichen Ursprungs vorzuladen, für nahezu sofortige Navigationen. Verwenden Sie es für hochprioritäre Seiten, wo dies unterstützt wird; überprüfen Sie, ob die Seiten [sicher prerendert werden können](/de/docs/Web/API/Speculation_Rules_API#unsafe_prerendering).                                                                                                                                                                                                   |

## Siehe auch

- [Prerender-Seiten in Chrome für sofortige Seitenwechsel](https://developer.chrome.com/docs/web-platform/prerender-pages) auf developer.chrome.com (2023)
