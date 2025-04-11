---
title: Spekulatives Laden
slug: Web/Performance/Guides/Speculative_loading
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

**Spekulatives Laden** bezieht sich auf die Praxis, Navigationsaktionen (wie DNS-Abfragen, das Abrufen von Ressourcen oder das Rendern von Dokumenten) durchzuführen, bevor die zugehörigen Seiten tatsächlich besucht werden, basierend auf Vorhersagen, welche Seiten der Nutzer wahrscheinlich als nächstes besuchen wird.

Diese Vorhersagen können von Entwicklern bereitgestellt werden (zum Beispiel Listen der beliebtesten Ziele auf ihrer Seite) oder durch Heuristiken des Browsers bestimmt werden (zum Beispiel basierend auf beliebten Seiten in der Chronik des Nutzers). Wenn sie erfolgreich eingesetzt werden, können solche Technologien die Leistung erheblich verbessern, indem sie Seiten schneller oder in manchen Fällen sofort verfügbar machen.

Diese Seite gibt einen Überblick über verfügbare Technologien zum spekulativen Laden und wann sie verwendet werden können und sollten, um die Leistung zu verbessern.

## Mechanismen des spekulativen Ladens

Es gibt mehrere Mechanismen für spekulatives Laden:

- **Prefetching** umfasst das Abrufen einiger oder aller Ressourcen, die zum Rendern eines Dokuments (oder eines Teils eines Dokuments) erforderlich sind, bevor sie benötigt werden, sodass das Rendern viel schneller erreicht werden kann, wenn die Zeit zum Rendern gekommen ist.
- **Prerendering** geht einen Schritt weiter und rendert den Inhalt tatsächlich so, dass er bei Bedarf angezeigt werden kann. Je nachdem, wie dies durchgeführt wird, kann dies zu einer sofortigen Navigation von der alten zur neuen Seite führen.
- **Preconnecting** beinhaltet das Beschleunigen zukünftiger Ladevorgänge von einem bestimmten Ursprung, indem ein Teil oder der gesamte Verbindungshandshake (d.h. DNS + TCP + TLS) proaktiv durchgeführt wird.

> [!NOTE]
> Die obigen Beschreibungen sind allgemeine und hochrangige Erklärungen. Was Browser genau tun, um Prefetching und Prerendering zu erreichen, hängt von den verwendeten Funktionen ab. Genauere Funktionsbeschreibungen finden Sie im Abschnitt [Spekulative Ladefunktionen](#spekulative_ladefunktionen) unten.

## Wie wird spekulatives Laden erreicht?

Spekulatives Laden wird auf zwei Hauptwegen erreicht.

Erstens werden einige Browser automatisch Seiten basierend auf verschiedenen Heuristiken prerendern, um automatische Leistungsverbesserungen zu bieten. Wie genau dies geschieht, hängt von der Implementierung des Browsers ab. Chrome beispielsweise rendert automatisch Seiten, wenn passende Zeichenfolgen in die Adressleiste eingegeben werden — wenn es eine hohe Wahrscheinlichkeit sieht, dass Sie diese Seite besuchen werden (siehe [Anzeigen der Adressleisten-Vorhersagen von Chrome](https://developer.chrome.com/docs/web-platform/prerender-pages#view_chromes_address_bar_predictions) für weitere Details). Darüber hinaus kann es Ergebnisseiten für Suchanfragen automatisch rendern, wenn Suchbegriffe in die Adressleiste eingegeben werden, sofern die Suchmaschine dafür Anweisungen gibt. Es verwendet dazu denselben Mechanismus wie die [Speculation Rules API](/de/docs/Web/API/Speculation_Rules_API).

Zweitens gibt es mehrere verschiedene Plattformfunktionen, die Entwickler verwenden können, um Anweisungen darüber zu geben, welches spekulative Laden der Browser durchführen soll. Diese werden im nächsten Abschnitt überprüft.

## Spekulative Ladefunktionen

### `<link rel="preconnect">`

[`<link rel="preconnect">`](/de/docs/Web/HTML/Reference/Attributes/rel/preconnect) gibt den Browern einen Hinweis darauf, dass der Nutzer wahrscheinlich Ressourcen vom Ursprung der angegebenen Ressource benötigt, und dass der Browser daher möglicherweise die Leistung verbessern kann, indem er eine Verbindung zu diesem Ursprung proaktiv einleitet. Unterstützende Browser werden proaktiv einen Teil oder den gesamten Verbindungshandshake (d.h. DNS + TCP + TLS) durchführen.

Zum Beispiel:

```html
<link rel="preconnect" href="https://example.com" />
```

`<link rel="preconnect">` wird in allen gängigen Browsern unterstützt und wird einen Vorteil bei jeder zukünftigen, cross-origin HTTP-Anfrage, Navigation oder Subressource bieten. Es hat keinen Vorteil bei gleichartigen Anfragen, weil die Verbindung bereits offen ist.

Wenn eine Seite Verbindungen zu vielen Drittanbieter-Domains herstellen muss, kann das Vorabverbinden aller dieser Verbindungen kontraproduktiv sein. Der `<link rel="preconnect">`-Hinweis sollte nur für die kritischsten Verbindungen verwendet werden. Für die anderen verwenden Sie einfach `<link rel="dns-prefetch">`, um Zeit bei dem ersten Schritt zu sparen — der DNS-Abfrage.

Sie können Preconnect auch als HTTP-[Link](/de/docs/Web/HTTP/Reference/Headers/Link)-Header implementieren, zum Beispiel:

```http
Link: <https://example.com>; rel="preconnect"
```

### `<link rel="dns-prefetch">`

[`<link rel="dns-prefetch">`](/de/docs/Web/HTML/Reference/Attributes/rel/dns-prefetch) gibt den Browsern einen Hinweis darauf, dass der Nutzer wahrscheinlich Ressourcen vom Ursprung der angegebenen Ressource benötigt, und dass der Browser daher möglicherweise die Leistung verbessern kann, indem er DNS-Auflösung für diesen Ursprung proaktiv durchführt. Es ist identisch mit `<link rel="preconnect">`, außer dass es nur den DNS-Teil abwickelt.

Auch hier ist die Unterstützung durch die Browser weit verbreitet, und es hat keinen Vorteil bei gleichartigen Anfragen, weil die Verbindung bereits offen ist.

Zum Beispiel:

```html
<link rel="dns-prefetch" href="https://example.com" />
```

> [!NOTE]
> Weitere Details finden Sie unter [Using dns-prefetch](/de/docs/Web/Performance/Guides/dns-prefetch).

### `<link rel="preload">`

[`<link rel="preload">`](/de/docs/Web/HTML/Reference/Attributes/rel/preload) gibt den Browsern einen Hinweis darauf, welche Ressourcen auf _der aktuellen Seite_ hochpriorisiert sind, damit diese frühzeitig heruntergeladen werden können, wenn sie die {{htmlelement("link")}}-Elemente im {{htmlelement("head")}} der Seite sehen.

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

Das Ergebnis wird in einem sog. dokumentenbasierten In-Memory-Cache gespeichert. Wenn Sie etwas vorladen, was Ihre aktuelle Seite nicht als Subressource verwendet, ist es im Allgemeinen eine Verschwendung von Ressourcen, obwohl das Ergebnis den HTTP-Cache besetzen könnte, wenn Header dies erlauben.

Sie können Preload auch als HTTP-[Link](/de/docs/Web/HTTP/Reference/Headers/Link)-Header implementieren, zum Beispiel:

```http
Link: <https://www.example.com/fonts/cicle_fina-webfont.woff2>; rel="preload"
```

Die Unterstützung von Browsern für `<link rel="preload">`/`<link rel="modulepreload">` ist in modernen Browsern weit verbreitet.

### `<link rel="modulepreload">`

[`<link rel="modulepreload">`](/de/docs/Web/HTML/Reference/Attributes/rel/modulepreload) gibt den Browsern einen Hinweis darauf, welche JavaScript-Module auf _der aktuellen Seite_ hochpriorisiert sind, damit diese frühzeitig heruntergeladen werden können.

Zum Beispiel:

```js
<link rel="modulepreload" href="main.js" />
```

Es ist eine spezialisierte Version von `<link rel="preload">` für [JavaScript-Module](/de/docs/Web/JavaScript/Guide/Modules) und funktioniert im Grunde auf dieselbe Weise. Es gibt jedoch einige Unterschiede:

- Der Browser weiß, dass die Ressource ein JavaScript-Modul ist, da das `as`-Attribut nicht benötigt wird, und kann die richtigen Berechtigungsmodi verwenden, um ein doppeltes Herunterladen zu vermeiden.
- Statt es einfach herunterzuladen und in einem Cache zu speichern, lädt der Browser es herunter und analysiert es direkt in die Speicher-Modulkarte.
- Der Browser kann dies auch automatisch für Modulabhängigkeiten tun.

### `<link rel="prefetch">`

[`<link rel="prefetch">`](/de/docs/Web/HTML/Reference/Attributes/rel/prefetch) gibt den Browsern einen Hinweis darauf, dass der Nutzer wahrscheinlich die Zielressource für zukünftige Navigationen benötigt, und dass der Browser daher das Benutzererlebnis verbessern kann, indem er die Ressource proaktiv abruft und im Cache speichert. `<link rel="prefetch">` wird für Same-Site-Navigationsressourcen oder Subressourcen verwendet, die von Same-Site-Seiten genutzt werden.

Zum Beispiel:

```js
<link rel="prefetch" href="main.js" />
```

Prefetching kann verwendet werden, um sowohl HTML- als auch Subressourcen für eine mögliche nächste Navigation abzurufen. Ein häufiges Anwendungsfall ist eine einfache Startseite einer Website, die schwergewichtige Ressourcen lädt, die der Rest der Seite nutzt.

```html
<link rel="prefetch" href="/app/style.css" />
<link rel="prefetch" href="/landing-page" />
```

Das Ergebnis wird im HTTP-Cache auf der Festplatte gespeichert. Deshalb ist es nützlich, Subressourcen vorzulauden, selbst wenn sie von der aktuellen Seite nicht genutzt werden. Sie könnten es auch verwenden, um das nächste Dokument vorzulauden, das der Nutzer wahrscheinlich auf der Seite besuchen wird. Allerdings müssen Sie aufgrund dessen bei den Headers vorsichtig sein — bestimmte [Cache-Control](/de/docs/Web/HTTP/Reference/Headers/Cache-Control)-Header könnten Prefetching blockieren (zum Beispiel `no-cache` oder `no-store`).

Viele Browser implementieren jetzt eine Art von [Cache-Partitionierung](https://developer.chrome.com/blog/http-cache-partitioning), was `<link rel="prefetch">` unbrauchbar für Ressourcen macht, die für die Verwendung von verschiedenen Top-Level-Sites gedacht sind. Dies schließt das Hauptdokument beim Cross-Site-Navigation ein. Zum Beispiel würde der folgende Prefetch:

```html
<link rel="prefetch" href="https://news.example/article" />
```

von `https://aggregator.example/` nicht zugänglich sein.

> **Hinweis:** `<link rel="prefetch">` ist funktional äquivalent zu einem [`fetch()`](/de/docs/Web/API/Window/fetch)-Aufruf mit einer `priority: "low"`-Option, außer dass der ersterer im Allgemeinen eine noch niedrigere Priorität hat und einen [`Sec-Purpose: prefetch`](/de/docs/Web/HTTP/Reference/Headers/Sec-Purpose)-Header in der Anfrage gesetzt hat.

> [!NOTE]
> Die Abrufforderung für eine `prefetch`-Operation ergibt eine HTTP-Anfrage, die den HTTP-Header [`Sec-Purpose: prefetch`](/de/docs/Web/HTTP/Reference/Headers/Sec-Purpose) enthält. Ein Server könnte diesen Header verwenden, um die Cache-Zeitüberschreitungen für die Ressourcen zu ändern oder eine andere spezielle Verarbeitung durchzuführen.
> Die Anfrage wird auch den {{HTTPHeader("Sec-Fetch-Dest")}}-Header mit dem Wert `empty` beinhalten.
> Der {{HTTPHeader("Accept")}}-Header in der Anfrage wird mit dem Wert übereinstimmen, der für normale Navigationsanforderungen verwendet wird. Dies ermöglicht es dem Browser, die passenden gecachten Ressourcen nach der Navigation zu finden.
> Wenn eine Antwort zurückgegeben wird, wird sie zusammen mit der Anfrage im HTTP-Cache gespeichert.

### `<link rel="prerender">` {{deprecated_inline}}{{non-standard_inline}}

> [!NOTE]
> Diese Technologie war nur je in Chrome verfügbar und ist jetzt veraltet. Sie sollten stattdessen die [Speculation Rules API](/de/docs/Web/API/Speculation_Rules_API) verwenden, die dies ersetzt.

[`<link rel="prerender">`](/de/docs/Web/HTML/Reference/Attributes/rel/prerender) bietet einen Hinweis an Browser, dass der Nutzer möglicherweise die Zielressource für die nächste Navigation benötigt, und dass der Browser daher die Leistung verbessern kann, indem er die Ressource prerendern. `prerender` wird für zukünftige Navigationen verwendet, nur für die gleiche Site, und macht daher für Mehrseitenanwendungen (MPAs) Sinn, nicht für Einzelne-Seitenanwendungen (SPAs).

Zum Beispiel:

```html
<link rel="prerender" href="/next-page" />
```

Es wird das referenzierte Dokument abrufen, dann alle statisch auffindbaren verknüpften Ressourcen abrufen und sie auch abrufen und das Ergebnis im HTTP-Cache auf der Festplatte mit einem Timeout von fünf Minuten speichern. Die Ausnahme sind Subressourcen, die über JavaScript geladen werden — diese findet es nicht. Es hat auch andere Probleme — ähnlich wie `<link rel="prefetch">` kann es auch durch [Cache-Control](/de/docs/Web/HTTP/Reference/Headers/Cache-Control)-Header blockiert werden, und wird durch Browser-[Cache-Partitionierung](https://developer.chrome.com/blog/http-cache-partitioning) unbrauchbar für Ressourcen gemacht, die für die Nutzung von verschiedenen Top-Level-Sites gedacht sind.

### Speculation Rules API

Die [Speculation Rules API](/de/docs/Web/API/Speculation_Rules_API) wird verwendet, um eine Reihe von Regeln anzugeben, die bestimmen, welche zukünftigen Dokumente vom Browser vorab abgerufen oder vorgeladen werden sollen. Diese Regeln werden als JSON-Strukturen innerhalb eingebetteter [`<script type="speculationrules">`](/de/docs/Web/HTML/Reference/Elements/script/type/speculationrules)-Elemente und externer Textdateien bereitgestellt, die durch den {{httpheader("Speculation-Rules")}}-Antwort-Header referenziert werden.

## Wann sollten Sie welche Funktion verwenden?

Die folgende Tabelle fasst die oben detaillierten Funktionen zusammen und gibt Hinweise, wann jede einzelne verwendet werden soll.

| Spekulative Ladefunktionen                                                               | Zweck                                                              | Wann verwenden                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| ---------------------------------------------------------------------------------------- | ------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| [`<link rel="preconnect">`](/de/docs/Web/HTML/Reference/Attributes/rel/preconnect)       | Cross-Origin-Verbindungsvorbereitung                               | Verwenden Sie für Ihre wichtigsten Cross-Origin-Verbindungen, um Leistungsverbesserungen beim Verbindungsaufbau zu erzielen.                                                                                                                                                                                                                                                                                                                                                                     |
| [`<link rel="dns-prefetch">`](/de/docs/Web/HTML/Reference/Attributes/rel/dns-prefetch)   | Cross-Origin-Verbindungsvorbereitung                               | Verwenden Sie für alle Ihre Cross-Origin-Verbindungen, um kleine Leistungsverbesserungen beim Verbindungsaufbau zu erzielen.                                                                                                                                                                                                                                                                                                                                                                     |
| [`<link rel="preload">`](/de/docs/Web/HTML/Reference/Attributes/rel/preload)             | Hochpriorisiertes Laden von Subressourcen der aktuellen Seite      | Verwenden Sie es, um hochpriorisierte Ressourcen schneller auf der aktuellen Seite zu laden, für strategische Leistungsverbesserungen. Laden Sie nicht alles vor, sonst werden Sie den Vorteil nicht sehen. Es gibt auch andere interessante Verwendungszwecke — siehe [Preload: What Is It Good For?](https://www.smashingmagazine.com/2016/02/preload-what-is-it-good-for/) auf Smashing Magazine (2016).                                                                                      |
| [`<link rel="modulepreload">`](/de/docs/Web/HTML/Reference/Attributes/rel/modulepreload) | Hochpriorisiertes Laden von JavaScript-Modulen der aktuellen Seite | Verwenden Sie es, um hochpriorisierte JavaScript-Module für strategische Leistungsverbesserungen vorabzuladen.                                                                                                                                                                                                                                                                                                                                                                                   |
| [`<link rel="prefetch">`](/de/docs/Web/HTML/Reference/Attributes/rel/prefetch)           | Vorbefüllen des HTTP-Caches                                        | Verwenden Sie es, um zukünftige Navigationen derselben Seite oder Subressourcen, die auf diesen Seiten verwendet werden, vorzulagern. Es verwendet den HTTP-Cache, hat daher einige Probleme mit dem Vorladen von Dokumenten, z.B. kann es durch [Cache-Control](/de/docs/Web/HTTP/Reference/Headers/Cache-Control)-Header blockiert werden. Verwenden Sie die [Speculation Rules API](/de/docs/Web/API/Speculation_Rules_API) stattdessen, wo es unterstützt wird, für Vorladen von Dokumenten. |
| [`<link rel="prerender">`](/de/docs/Web/HTML/Reference/Attributes/rel/prerender)         | Vorbereitung für die nächste Navigation                            | Veraltet; Sie sollten dies nicht verwenden. Verwenden Sie stattdessen [Speculation Rules API](/de/docs/Web/API/Speculation_Rules_API) prerender, wo es unterstützt wird.                                                                                                                                                                                                                                                                                                                         |
| [Speculation Rules API](/de/docs/Web/API/Speculation_Rules_API) prefetch                 | Vorbereitung für die nächste Navigation                            | Verwenden Sie es, um zukünftige Navigationen derselben oder übergreifenden Sites vorzubereiten. Es wird empfohlen, es weitflächig einzusetzen, wo es unterstützt wird; stellen Sie sicher, dass die Seiten [sicher vorzubeladen](/de/docs/Web/API/Speculation_Rules_API#unsafe_prefetching) sind. Es behandelt keine Subressourcen-Präfetches; dafür müssen Sie `<link rel="prefetch">` verwenden.                                                                                               |
| [Speculation Rules API](/de/docs/Web/API/Speculation_Rules_API) prerender                | Vorbereitung für die nächste Navigation                            | Verwenden Sie es, um zukünftige gleichherkunftsbasierte Navigationsressourcen vorzubearbeiten, um nahezu sofortige Navigationen zu ermöglichen. Verwenden Sie es auf hochpriorisierten Seiten, wo es unterstützt wird; stellen Sie sicher, dass die Seiten [sicher vorzurendern](/de/docs/Web/API/Speculation_Rules_API#unsafe_prerendering) sind.                                                                                                                                               |

## Siehe auch

- [Prerender-Seiten in Chrome für sofortige Seitennavigationen](https://developer.chrome.com/docs/web-platform/prerender-pages) auf developer.chrome.com (2023)
