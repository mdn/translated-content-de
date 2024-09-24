---
title: Spekulatives Laden
slug: Web/Performance/Speculative_loading
l10n:
  sourceCommit: e03b13c7e157ec7b7bb02a6c7c4854b862195905
---

{{QuickLinksWithSubPages("Web/Performance")}}

**Spekulatives Laden** bezieht sich auf die Praxis, Navigationsaktionen (wie DNS-Abfragen, Ressourcenerfassung oder Dokumentenrendering) vorzunehmen, bevor die zugehörigen Seiten tatsächlich besucht werden, basierend auf Vorhersagen, welche Seiten der Benutzer höchstwahrscheinlich als nächstes besuchen wird.

Diese Vorhersagen können von Entwicklern bereitgestellt werden (z. B. Listen der beliebtesten Ziele auf ihrer Website) oder durch Browser-Heuristiken bestimmt werden (z. B. basierend auf beliebten Seiten in der Historie des Benutzers). Bei erfolgreichem Einsatz können solche Technologien die Leistung erheblich verbessern, indem Seiten schneller oder in manchen Fällen sogar sofort verfügbar gemacht werden.

Diese Seite gibt einen Überblick über verfügbare spekulative Ladetechnologien und wann sie genutzt werden können und sollten, um die Leistung zu verbessern.

## Mechanismen des spekulativen Ladens

Es gibt mehrere Mechanismen für das spekulative Laden:

- **Prefetching** umfasst das Vorabrufen einiger oder aller Ressourcen, die zum Rendern eines Dokuments (oder eines Teils davon) benötigt werden, sodass das Rendern viel schneller erfolgen kann, wenn es an der Zeit ist.
- **Prerendering** geht einen Schritt weiter und rendert den Inhalt tatsächlich, sodass er bei Bedarf bereitsteht. Je nachdem, wie dies gemacht wird, kann dies zu einer sofortigen Navigation von der alten zur neuen Seite führen.
- **Preconnecting** beschleunigt zukünftige Ladezeiten von einem bestimmten Ursprung, indem es präventiv einen Teil oder das gesamte Verbindungs-Handshake (d.h. DNS + TCP + TLS) durchführt.

> [!NOTE]
> Die obigen Beschreibungen sind allgemeiner Natur. Was Browser genau tun, um Prefetching und Prerendering zu erreichen, hängt von den verwendeten Funktionen ab. Genauere Funktionsbeschreibungen finden Sie im Abschnitt [Funktionen des spekulativen Ladens](#funktionen_des_spekulativen_ladens).

## Wie wird spekulatives Laden erreicht?

Spekulatives Laden wird auf zwei Hauptarten erreicht.

Erstens werden einige Browser Seiten basierend auf verschiedenen Heuristiken automatisch prerendern, um automatische Leistungsverbesserungen zu bieten. Wie genau dies geschieht, hängt von der Implementierung des Browsers ab. Chrome beispielsweise prerendert automatisch Seiten, wenn übereinstimmende Zeichenfolgen in die Adressleiste eingegeben werden und wenn es eine hohe Wahrscheinlichkeit gibt, dass Sie diese Seite besuchen werden (siehe [Adressleisten-Vorhersagen von Chrome anzeigen](https://developer.chrome.com/docs/web-platform/prerender-pages#view_chromes_address_bar_predictions) für weitere Details). Zusätzlich dazu kann es automatisch Suchergebnisseiten prerendern, wenn Suchbegriffe in die Adressleiste eingegeben werden und wenn eine Anweisung durch die Suchmaschine erfolgt. Dies wird mit dem gleichen Mechanismus wie die [Spekulationsregeln API](/de/docs/Web/API/Speculation_Rules_API) erreicht.

Zweitens gibt es mehrere verschiedene Plattformfunktionen, die Entwickler nutzen können, um Anweisungen darüber zu geben, welches spekulative Laden der Browser durchführen soll. Diese werden im nächsten Abschnitt dargestellt.

## Funktionen des spekulativen Ladens

### `<link rel="preconnect">`

[`<link rel="preconnect">`](/de/docs/Web/HTML/Attributes/rel/preconnect) gibt Browsern einen Hinweis darauf, dass der Benutzer wahrscheinlich Ressourcen vom angegebenen Ursprung benötigt, und dass der Browser daher die Leistung verbessern kann, indem eine Verbindung zu diesem Ursprung präventiv initiiert wird. Unterstützende Browser werden präventiv einen Teil oder das gesamte Verbindungs-Handshake (d.h. DNS + TCP + TLS) durchführen.

Zum Beispiel:

```html
<link rel="preconnect" href="https://example.com" />
```

`<link rel="preconnect">` wird in den meisten Browsern unterstützt und bietet Vorteile für jede zukünftige cross-origin HTTP-Anfrage, Navigation oder Unterressource. Es hat keinen Vorteil bei gleich-origin Anfragen, da die Verbindung bereits offen ist.

Wenn eine Seite Verbindungen zu vielen Drittanbieter-Domänen herstellen muss, kann das Vorverbinden aller kontraproduktiv sein. Der `<link rel="preconnect">` Hinweis sollte nur für die kritischsten Verbindungen verwendet werden. Bei den anderen verwenden Sie `<link rel="dns-prefetch">`, um Zeit beim ersten Schritt, dem DNS-Lookup, zu sparen.

Sie können Preconnect auch als HTTP [Link](/de/docs/Web/HTTP/Headers/Link) Header implementieren, zum Beispiel:

```http
Link: <https://example.com>; rel="preconnect"
```

### `<link rel="dns-prefetch">`

[`<link rel="dns-prefetch">`](/de/docs/Web/HTML/Attributes/rel/dns-prefetch) gibt Browsern einen Hinweis darauf, dass der Benutzer wahrscheinlich Ressourcen vom angegebenen Ursprung benötigt, und dass der Browser möglicherweise die Leistung verbessern kann, indem eine DNS-Auflösung für diesen Ursprung präventiv durchgeführt wird. Es ist identisch zu `<link rel="preconnect">`, außer dass es nur den DNS-Teil behandelt.

Auch hier ist Browser-Unterstützung weit verbreitet, und es hat keinen Vorteil bei gleich-origin Anfragen, da die Verbindung bereits offen ist.

Zum Beispiel:

```html
<link rel="dns-prefetch" href="https://example.com" />
```

> [!NOTE]
> Siehe [Verwendung von dns-prefetch](/de/docs/Web/Performance/dns-prefetch) für mehr Details.

### `<link rel="preload">`

[`<link rel="preload">`](/de/docs/Web/HTML/Attributes/rel/preload) gibt den Browsern einen Hinweis darauf, welche Ressourcen auf der _aktuellen Seite_ von hoher Priorität sind, damit diese frühzeitig heruntergeladen werden können, wenn der Browser das {{htmlelement("link")}} Element im {{htmlelement("head")}} der Seite sieht.

Zum Beispiel:

```html
<link rel="preload" href="main.js" as="script" />
<!-- CORS-fähiges Preload -->
<link
  rel="preload"
  href="https://www.example.com/fonts/cicle_fina-webfont.woff2"
  as="font"
  type="font/woff2"
  crossorigin />
```

Das Ergebnis wird in einem pro-Dokument Cache im Speicher gehalten. Wenn Sie etwas preloaden, das Ihre aktuelle Seite nicht als Unterressource verwendet, ist es normalerweise eine Verschwendung von Ressourcen, obwohl das Ergebnis den HTTP-Cache füllen kann, wenn die Header dies erlauben.

Sie können Preload auch als HTTP [Link](/de/docs/Web/HTTP/Headers/Link) Header implementieren, zum Beispiel:

```http
Link: <https://www.example.com/fonts/cicle_fina-webfont.woff2>; rel="preload"
```

Die Unterstützung durch Browser für `<link rel="preload">`/`<link rel="modulepreload">` ist in modernen Browsern weit verbreitet.

### `<link rel="modulepreload">`

[`<link rel="modulepreload">`](/de/docs/Web/HTML/Attributes/rel/modulepreload) gibt den Browsern einen Hinweis darauf, welche JavaScript-Module auf _der aktuellen Seite_ von hoher Priorität sind, damit diese frühzeitig heruntergeladen werden können.

Zum Beispiel:

```js
<link rel="modulepreload" href="main.js" />
```

Es ist eine spezialisierte Version von `<link rel="preload">` für [JavaScript-Module](/de/docs/Web/JavaScript/Guide/Modules) und funktioniert im Wesentlichen auf die gleiche Weise. Allerdings gibt es einige Unterschiede:

- Der Browser weiß, dass die Ressource ein JavaScript-Modul ist, da das `as` Attribut nicht erforderlich ist, und er kann die korrekten Anmeldemodi verwenden, um ein doppeltes Herunterladen zu vermeiden.
- Anstatt es nur herunterzuladen und in einem Cache zu speichern, lädt der Browser es herunter und analysiert und kompiliert es direkt in die In-Memory-Modulkarte.
- Der Browser kann auch das Gleiche für Modulabhängigkeiten automatisch tun.

### `<link rel="prefetch">`

[`<link rel="prefetch">`](/de/docs/Web/HTML/Attributes/rel/prefetch) gibt den Browsern einen Hinweis darauf, dass der Benutzer die Zielressource für zukünftige Navigationen wahrscheinlich benötigt, und dass der Browser daher die Benutzererfahrung verbessern kann, indem er die Ressource präventiv abruft und im Cache speichert. `<link rel="prefetch">` wird für gleichermaßen genutzte Navigationsressourcen oder für Unterressourcen verwendet, die von gleichstandsortigen Seiten genutzt werden.

Zum Beispiel:

```js
<link rel="prefetch" href="main.js" />
```

Prefetching kann verwendet werden, um sowohl HTML- als auch Unterressourcen für eine mögliche nächste Navigation abzurufen. Ein gängiger Anwendungsfall ist es, eine einfache Website-Startseite zu haben, die mehr "schwergewichtige" Ressourcen abruft, die vom Rest der Website genutzt werden.

```html
<link rel="prefetch" href="/app/style.css" />
<link rel="prefetch" href="/landing-page" />
```

Das Ergebnis wird im HTTP-Cache auf der Festplatte gespeichert. Aus diesem Grund ist es nützlich, um Unterressourcen vorab abzuholen, auch wenn sie nicht von der aktuellen Seite verwendet werden. Sie könnten es auch verwenden, um das nächste Dokument, das der Benutzer wahrscheinlich auf der Webseite besucht, vorab abzurufen. Sie müssen jedoch bei den Headern vorsichtig sein — zum Beispiel könnten bestimmte [Cache-Control](/de/docs/Web/HTTP/Headers/Cache-Control) Header das Prefetching blockieren (z.B. `no-cache` oder `no-store`).

Viele Browser implementieren nun eine Form der [Cache-Partitionierung](https://developer.chrome.com/blog/http-cache-partitioning), die `<link rel="prefetch">` unbrauchbar macht für Ressourcen, die für die Verwendung durch verschiedene Top-Level-Sites vorgesehen sind. Dies umfasst das Hauptdokument bei einer standortübergreifenden Navigation. Zum Beispiel wäre der folgende Prefetch nicht zugänglich von `https://aggregator.example/`:

```html
<link rel="prefetch" href="https://news.example/article" />
```

> **Hinweis:** `<link rel="prefetch">` ist funktional äquivalent zu einem {{domxref("Window/fetch", "fetch()")}} Aufruf mit einer `priority: "low"` Option, abgesehen davon, dass erstere eine noch niedrigere Priorität hat und dass ein [`Sec-Purpose: prefetch`](/de/docs/Web/HTTP/Headers/Sec-Purpose) Header für die Anfrage gesetzt wird.

> [!NOTE]
> Die Fetch-Anfrage für eine `prefetch` Operation resultiert in einem HTTP-Request, der den HTTP-Header [`Sec-Purpose: prefetch`](/de/docs/Web/HTTP/Headers/Sec-Purpose) enthält. Ein Server könnte diesen Header verwenden, um die Cache-Zeitlimits für die Ressourcen zu ändern oder andere spezielle Handhabungen durchzuführen.
> Die Anfrage wird auch den {{HTTPHeader("Sec-Fetch-Dest")}} Header mit dem Wert `empty` enthalten.
> Der {{HTTPHeader("Accept")}} Header in der Anfrage entspricht dem Wert, der für normale Navigationsanfragen verwendet wird. Dies ermöglicht es dem Browser, den passenden zwischengespeicherten Ressourcen nach der Navigation zu finden.
> Wenn eine Antwort zurückgegeben wird, wird sie mit der Anfrage im HTTP-Cache gespeichert.

### `<link rel="prerender">` {{deprecated_inline}}{{non-standard_inline}}

> [!NOTE]
> Diese Technologie war nur jemals in Chrome verfügbar und ist nun veraltet. Sie sollten stattdessen die [Spekulationsregeln API](/de/docs/Web/API/Speculation_Rules_API) verwenden, die diese ersetzt.

[`<link rel="prerender">`](/de/docs/Web/HTML/Attributes/rel/prerender) gibt den Browsern einen Hinweis darauf, dass der Benutzer die Zielressource für die nächste Navigation möglicherweise benötigt, und dass der Browser daher die Leistung verbessern kann, indem er die Ressource prerendert. `prerender` wird für zukünftige Navigationen verwendet, nur gleichstandortig, und macht daher für Multi-Page-Anwendungen (MPAs) Sinn, nicht für Single-Page-Anwendungen (SPAs).

Zum Beispiel:

```html
<link rel="prerender" href="/next-page" />
```

Es wird das referenzierte Dokument abrufen und dann alle verknüpften Ressourcen, die statisch auffindbar sind, abrufen und diese auch speichern und das Ergebnis im HTTP-Cache auf der Festplatte mit einem Timeout von fünf Minuten speichern. Eine Ausnahme bilden Unterressourcen, die über JavaScript geladen werden — diese findet es nicht. Es gibt auch andere Probleme — wie `<link rel="prefetch">` kann es auch durch [Cache-Control](/de/docs/Web/HTTP/Headers/Cache-Control) Header blockiert werden und durch die Browser [Cache-Partitionierung](https://developer.chrome.com/blog/http-cache-partitioning) für Ressourcen, die für die Verwendung durch verschiedene Top-Level-Sites bestimmt sind, unnütz gemacht werden.

### Spekulationsregeln API

Die [Spekulationsregeln API](/de/docs/Web/API/Speculation_Rules_API) wird verwendet, um eine Reihe von Regeln festzulegen, die bestimmen, welche zukünftigen Dokumente vom Browser vorab abgerufen oder prerendert werden sollen. Diese Regeln werden als JSON-Strukturen innerhalb von eingebetteten [`<script type="speculationrules">`](/de/docs/Web/HTML/Element/script/type/speculationrules) Elementen und in externen Textdateien, die durch den {{httpheader("Speculation-Rules")}} Response Header referenziert werden, bereitgestellt.

## Wann sollten Sie jede Funktion verwenden?

Die folgende Tabelle fasst die oben dargestellten Funktionen zusammen und gibt Hinweise, wann jede verwendet werden sollte.

| Funktionen für spekulatives Laden                                                 | Zweck                                                    | Wann zu verwenden                                                                                                                                                                                                                                                                                                                                                                                                  |
| --------------------------------------------------------------------------------- | -------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| [`<link rel="preconnect">`](/de/docs/Web/HTML/Attributes/rel/preconnect)       | Wärmen von Cross-Origin-Verbindungen                      | Verwenden Sie es für Ihre kritischsten Cross-Origin-Verbindungen, um Leistungsverbesserungen beim Verbinden zu ihnen zu erzielen.                                                                                                                                                                                                                                                                                    |
| [`<link rel="dns-prefetch">`](/de/docs/Web/HTML/Attributes/rel/dns-prefetch)   | Wärmen von Cross-Origin-Verbindungen                      | Verwenden Sie es für alle Ihre Cross-Origin-Verbindungen, um kleine Leistungsverbesserungen beim Verbinden zu ihnen zu erzielen.                                                                                                                                                                                                                                                                                     |
| [`<link rel="preload">`](/de/docs/Web/HTML/Attributes/rel/preload)             | Laden von Subressourcen der aktuellen Seite mit hoher Priorität | Verwenden Sie es, um Ressourcen mit hoher Priorität schneller auf der aktuellen Seite zu laden, für strategische Leistungsverbesserungen. Laden Sie nicht alles vorab, sonst sehen Sie keinen Nutzen. Hat auch einige andere interessante Verwendungen — siehe [Preload: What Is It Good For?](https://www.smashingmagazine.com/2016/02/preload-what-is-it-good-for/) auf Smashing Magazine (2016)                                                             |
| [`<link rel="modulepreload">`](/de/docs/Web/HTML/Attributes/rel/modulepreload) | Laden von JavaScript-Modulen der aktuellen Seite mit hoher Priorität | Verwenden Sie es, um JavaScript-Module mit hoher Priorität für strategische Leistungsverbesserungen vorab zu laden.                                                                                                                                                                                                                                                                                                 |
| [`<link rel="prefetch">`](/de/docs/Web/HTML/Attributes/rel/prefetch)           | Vorabauffüllen des HTTP-Caches                            | Verwenden Sie es, um gleichstandortige zukünftige Navigationsressourcen oder Unterressourcen, die auf diesen Seiten verwendet werden, vorab zu laden. Verwendet den HTTP-Cache und hat daher eine Reihe von Problemen mit Dokumenten-Prefetches, wie z.B. sie können durch [Cache-Control](/de/docs/Web/HTTP/Headers/Cache-Control) Header blockiert werden. Verwenden Sie stattdessen die [Spekulationsregeln API](/de/docs/Web/API/Speculation_Rules_API) für Dokumenten-Prefetches, wo sie unterstützt wird. |
| [`<link rel="prerender">`](/de/docs/Web/HTML/Attributes/rel/prerender)         | Vorbereitung auf die nächste Navigation                   | Veraltet; Sie werden geraten, dies nicht zu verwenden. Verwenden Sie stattdessen die [Spekulationsregeln API](/de/docs/Web/API/Speculation_Rules_API) Prerender, wo sie unterstützt wird.                                                                                                                                                                                                                       |
| [Spekulationsregeln API](/de/docs/Web/API/Speculation_Rules_API) Prefetch      | Vorbereitung auf die nächste Navigation                   | Verwenden Sie es, um gleich- oder standortübergreifende zukünftige Navigationsdokumente vorab zu laden. Breite Einführung wird empfohlen, wo sie unterstützt wird; Überprüfen Sie, ob die Seiten [sicher zum Vorladen](/de/docs/Web/API/Speculation_Rules_API#unsafe_prefetching) sind. Es handelt keine Unterressourcen-Prefetches; dafür müssen Sie `<link rel="prefetch">` verwenden.                                                     |
| [Spekulationsregeln API](/de/docs/Web/API/Speculation_Rules_API) Prerender     | Vorbereitung auf die nächste Navigation                   | Verwenden Sie es, um gleichstandortige zukünftige Navigationsressourcen vorab zu laden, für fast sofortige Navigationen. Verwenden Sie es auf hochpriorisierten Seiten, wo es unterstützt wird; Überprüfen Sie, ob die Seiten [sicher zum Prerendern](/de/docs/Web/API/Speculation_Rules_API#unsafe_prerendering) sind.                                                                                                                                    |

## Siehe auch

- [Prerender pages in Chrome for instant page navigations](https://developer.chrome.com/docs/web-platform/prerender-pages) auf developer.chrome.com (2023)
