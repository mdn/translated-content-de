---
title: Spekulatives Laden
slug: Web/Performance/Guides/Speculative_loading
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

**Spekulatives Laden** bezieht sich auf die Praxis, Navigationsaktionen (wie DNS-Abrufe, Abrufen von Ressourcen oder Rendern von Dokumenten) durchzuführen, bevor die zugehörigen Seiten tatsächlich aufgerufen werden, basierend auf Vorhersagen darüber, welche Seiten der Benutzer höchstwahrscheinlich als nächstes besuchen wird.

Diese Vorhersagen können von Entwicklern bereitgestellt werden (z. B. Listen der beliebtesten Ziele auf ihrer Website) oder durch Browser-Heuristiken ermittelt werden (z. B. basierend auf beliebten Seiten in der Benutzerhistorie). Wenn diese Technologien erfolgreich eingesetzt werden, können sie die Leistung erheblich verbessern, indem sie Seiten schneller oder in einigen Fällen sofort verfügbar machen.

Diese Seite gibt einen Überblick über verfügbare spekulative Ladetechnologien und wann sie verwendet werden können und sollten, um die Leistung zu verbessern.

## Mechanismen des spekulativen Ladens

Es gibt mehrere Mechanismen für spekulatives Laden:

- **Prefetching** beinhaltet das Abrufen einiger oder aller Ressourcen, die zum Rendern eines Dokuments (oder eines Teils davon) benötigt werden, bevor sie benötigt werden, sodass das Rendern viel schneller erfolgen kann, wenn es an der Zeit ist.
- **Prerendering** geht einen Schritt weiter und rendert den Inhalt tatsächlich so, dass er bei Bedarf sofort angezeigt werden kann. Je nachdem, wie dies erfolgt, kann dies zu einer sofortigen Navigation von der alten zur neuen Seite führen.
- **Preconnecting** umfasst die Beschleunigung zukünftiger Ladezeiten von einer bestimmten Quelle, indem proaktiv ein Teil oder der gesamte Verbindungs-Handshake (d.h. DNS + TCP + TLS) durchgeführt wird.

> [!NOTE]
> Die obigen Beschreibungen sind abstrakt und allgemein. Was genau Browser tun, um Prefetching und Prerendering zu erreichen, hängt von den verwendeten Funktionen ab. Genaue Funktionsbeschreibungen finden Sie im Abschnitt [Spekulative Ladefunktionen](#spekulative_ladefunktionen) unten.

## Wie wird spekulatives Laden erreicht?

Spekulatives Laden wird auf zwei Hauptweisen erreicht.

Erstens, einige Browser werden automatisch Seiten basierend auf verschiedenen Heuristiken prerendern, um automatische Leistungsverbesserungen zu bieten. Wie dies genau erfolgt, hängt von der Implementierung des Browsers ab. Chrome zum Beispiel rendert automatisch Seiten vor, wenn passende Zeichenfolgen in die Adressleiste eingegeben werden — wenn es eine hohe Wahrscheinlichkeit gibt, dass Sie diese Seite besuchen werden (siehe [Anzeige von Chromes Adressleisten-Vorhersagen](https://developer.chrome.com/docs/web-platform/prerender-pages#view_chromes_address_bar_predictions) für weitere Details). Darüber hinaus kann es auch Suchergebnisseiten prerendern, wenn Suchbegriffe in die Adressleiste eingegeben werden und dies von der Suchmaschine angewiesen wird. Dies wird mit demselben Mechanismus wie die [Speculation Rules API](/de/docs/Web/API/Speculation_Rules_API) gemacht.

Zweitens gibt es mehrere verschiedene Plattformfunktionen, die Entwickler verwenden können, um Anweisungen zu geben, welches spekulative Laden sie vom Browser wünschen. Diese werden im nächsten Abschnitt überprüft.

## Spekulative Ladefunktionen

### `<link rel="preconnect">`

[`<link rel="preconnect">`](/de/docs/Web/HTML/Attributes/rel/preconnect) bietet einen Hinweis an Browser, dass der Benutzer wahrscheinlich Ressourcen von der angegebenen Quelle benötigt, und daher kann der Browser die Leistung verbessern, indem er proaktiv eine Verbindung zu dieser Quelle initiiert. Unterstützende Browser führen proaktiv einen Teil oder den gesamten Verbindungs-Handshake (d.h. DNS + TCP + TLS) durch.

Zum Beispiel:

```html
<link rel="preconnect" href="https://example.com" />
```

`<link rel="preconnect">` wird umfassend von Browsern unterstützt und wird jede zukünftige Cross-Origin-HTTP-Anfrage, Navigation oder Unterressource verbessern. Es hat keinen Nutzen für gleichstammige Anfragen, da die Verbindung bereits offen ist.

Wenn eine Seite Verbindungen zu vielen Drittanbieterdomänen herstellen muss, kann es kontraproduktiv sein, alle vorzuverbinden. Der `<link rel="preconnect">`-Hinweis sollte nur für die kritischsten Verbindungen verwendet werden. Für die anderen verwenden Sie einfach `<link rel="dns-prefetch">`, um Zeit beim ersten Schritt zu sparen — dem DNS-Lookup.

Sie können Preconnect auch als HTTP-[Link](/de/docs/Web/HTTP/Reference/Headers/Link)-Header implementieren, zum Beispiel:

```http
Link: <https://example.com>; rel="preconnect"
```

### `<link rel="dns-prefetch">`

[`<link rel="dns-prefetch">`](/de/docs/Web/HTML/Attributes/rel/dns-prefetch) bietet einen Hinweis an Browser, dass der Benutzer wahrscheinlich Ressourcen von der angegebenen Quelle benötigt, und daher kann der Browser die Leistung verbessern, indem er proaktiv die DNS-Auflösung für diese Quelle durchführt. Es ist identisch mit `<link rel="preconnect">`, außer dass es nur den DNS-Teil behandelt.

Auch hier ist die Unterstützung der Browser weit verbreitet, und es hat keinen Nutzen für gleichstammige Anfragen, da die Verbindung bereits offen ist.

Zum Beispiel:

```html
<link rel="dns-prefetch" href="https://example.com" />
```

> [!NOTE]
> Siehe [Verwendung von dns-prefetch](/de/docs/Web/Performance/Guides/dns-prefetch) für weitere Details.

### `<link rel="preload">`

[`<link rel="preload">`](/de/docs/Web/HTML/Attributes/rel/preload) gibt einen Hinweis an Browser, welche Ressourcen auf _der aktuellen Seite_ hohe Priorität haben, sodass er sie frühzeitig herunterladen kann, wenn er die {{htmlelement("link")}}-Elemente im {{htmlelement("head")}} der Seite sieht.

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

Das Ergebnis wird in einem speichereigenen Cache des Dokuments gehalten. Wenn Sie etwas vorladen, was Ihre aktuelle Seite nicht als Unterressource verwendet, ist dies im Allgemeinen eine Verschwendung von Ressourcen, obwohl das Ergebnis den HTTP-Cache füllen kann, wenn die Header dies zulassen.

Sie können Preload auch als HTTP-[Link](/de/docs/Web/HTTP/Reference/Headers/Link)-Header implementieren, zum Beispiel:

```http
Link: <https://www.example.com/fonts/cicle_fina-webfont.woff2>; rel="preload"
```

Browserunterstützung für `<link rel="preload">`/`<link rel="modulepreload">` ist in modernen Browsern weit verbreitet.

### `<link rel="modulepreload">`

[`<link rel="modulepreload">`](/de/docs/Web/HTML/Attributes/rel/modulepreload) gibt einen Hinweis an Browser, welche JavaScript-Module auf _der aktuellen Seite_ hohe Priorität haben, sodass er sie frühzeitig herunterladen kann.

Zum Beispiel:

```js
<link rel="modulepreload" href="main.js" />
```

Es ist eine spezialisierte Version von `<link rel="preload">` für [JavaScript-Module](/de/docs/Web/JavaScript/Guide/Modules) und funktioniert im Wesentlichen auf die gleiche Weise. Es gibt jedoch einige Unterschiede:

- Der Browser weiß, dass die Ressource ein JavaScript-Modul ist, da das `as`-Attribut nicht benötigt wird, und er kann die richtigen Berechtigungsmodi verwenden, um Doppelabrufe zu vermeiden.
- Anstatt es einfach herunterzuladen und in einem Cache zu speichern, lädt der Browser es herunter, parst es dann und kompiliert es direkt in die speichereigene Modullandkarte.
- Der Browser kann dies auch automatisch für Modulabhängigkeiten tun.

### `<link rel="prefetch">`

[`<link rel="prefetch">`](/de/docs/Web/HTML/Attributes/rel/prefetch) bietet einen Hinweis an Browser, dass der Benutzer vermutlich die Zielressource für zukünftige Navigationsvorgänge benötigt, und daher kann der Browser wahrscheinlich die Benutzererfahrung verbessern, indem er die Ressource vorab abruft und zwischenspeichert. `<link rel="prefetch">` wird für gleichseitige Navigationsressourcen oder für Unterressourcen verwendet, die von gleichseitigen Seiten verwendet werden.

Zum Beispiel:

```js
<link rel="prefetch" href="main.js" />
```

Prefetching kann verwendet werden, um sowohl HTML als auch Unterressourcen für eine mögliche nächste Navigation abzurufen. Ein häufiges Anwendungsbeispiel ist eine einfache Landingpage, die "schwerere" Ressourcen abruft, die vom Rest der Seite verwendet werden.

```html
<link rel="prefetch" href="/app/style.css" />
<link rel="prefetch" href="/landing-page" />
```

Das Ergebnis wird im HTTP-Cache auf der Festplatte gehalten. Aufgrund dessen ist es nützlich für das Prefetching von Unterressourcen, selbst wenn sie von der aktuellen Seite nicht genutzt werden. Sie könnten es auch verwenden, um das nächste Dokument, das der Benutzer wahrscheinlich auf der Seite besuchen wird, vorab abzurufen. Sie müssen jedoch vorsichtig mit Headern sein – zum Beispiel könnten bestimmte [Cache-Control](/de/docs/Web/HTTP/Reference/Headers/Cache-Control)-Header das Prefetching blockieren (zum Beispiel `no-cache` oder `no-store`).

Viele Browser implementieren mittlerweile eine Form von [Cache-Partitionierung](https://developer.chrome.com/blog/http-cache-partitioning), was `<link rel="prefetch">` nutzlos für Ressourcen macht, die für die Verwendung durch verschiedene Top-Level-Sites bestimmt sind. Dazu gehört das Hauptdokument beim Navigieren über die Seitengrenzen hinweg. Beispielsweise wäre das folgende Prefetch:

```html
<link rel="prefetch" href="https://news.example/article" />
```

Nicht abrufbar von `https://aggregator.example/`.

> **Hinweis:** `<link rel="prefetch">` ist funktional äquivalent zu einem [`fetch()`](/de/docs/Web/API/Window/fetch)-Aufruf mit einer `priority: "low"`-Option, abgesehen davon, dass ersteres allgemein eine noch niedrigere Priorität hat und es wird ein [`Sec-Purpose: prefetch`](/de/docs/Web/HTTP/Reference/Headers/Sec-Purpose)-Header auf die Anfrage gesetzt.

> [!NOTE]
> Die Abrufanforderung für eine `prefetch`-Operation führt zu einer HTTP-Anforderung, die den HTTP-Header [`Sec-Purpose: prefetch`](/de/docs/Web/HTTP/Reference/Headers/Sec-Purpose) enthält. Ein Server könnte diesen Header verwenden, um die Cache-Timeouts für die Ressourcen zu ändern oder andere spezielle Handlungen vorzunehmen. Die Anforderung wird auch den {{HTTPHeader("Sec-Fetch-Dest")}}-Header mit dem Wert auf `empty` gesetzt enthalten. Der {{HTTPHeader("Accept")}}-Header in der Anforderung wird den mit normalen Navigationsanforderungen verwendeten Wert entsprechen. Dies ermöglicht es dem Browser, die passenden zwischengespeicherten Ressourcen nach der Navigation zu finden. Wenn eine Antwort zurückgegeben wird, wird sie zusammen mit der Anforderung im HTTP-Cache zwischengespeichert.

### `<link rel="prerender">` {{deprecated_inline}} {{non-standard_inline}}

> [!NOTE]
> Diese Technologie war nur jemals in Chrome verfügbar und wird nun nicht mehr unterstützt. Sie sollten stattdessen die [Speculation Rules API](/de/docs/Web/API/Speculation_Rules_API) verwenden, die diese Technologie ersetzt.

[`<link rel="prerender">`](/de/docs/Web/HTML/Attributes/rel/prerender) bietet einen Hinweis an Browser, dass der Benutzer möglicherweise die Zielressource für die nächste Navigation benötigt, und daher kann der Browser wahrscheinlich die Leistung verbessern, indem er die Ressource prerendert. `prerender` wird für zukünftige Navigationsvorgänge verwendet, nur gleichseitig, und macht daher Sinn für multipage Anwendungen (MPAs), nicht für Single-Page Anwendungen (SPAs).

Zum Beispiel:

```html
<link rel="prerender" href="/next-page" />
```

Es wird das referenzierte Dokument abrufen, dann alle verlinkten Ressourcen, die statisch auffindbar sind, und sie ebenfalls abrufen, wobei das Ergebnis im HTTP-Cache auf der Festplatte mit einem fünfminütigen Timeout gespeichert wird. Die Ausnahme sind Unterressourcen, die über JavaScript geladen werden — diese werden nicht gefunden. Es gibt auch andere Probleme – wie `<link rel="prefetch">` kann es auch durch [Cache-Control](/de/docs/Web/HTTP/Reference/Headers/Cache-Control)-Header blockiert werden und durch Browser-[Cache-Partitionierung](https://developer.chrome.com/blog/http-cache-partitioning) nutzlos für Ressourcen, die für verschiedene Top-Level-Sites bestimmt sind, gemacht werden.

### Speculation Rules API

Die [Speculation Rules API](/de/docs/Web/API/Speculation_Rules_API) wird verwendet, um eine Reihe von Regeln festzulegen, die bestimmen, welche zukünftigen Dokumente vom Browser vorgeladen oder prerendert werden sollen. Diese Regeln werden als JSON-Strukturen in eingebauten [`<script type="speculationrules">`](/de/docs/Web/HTML/Element/script/type/speculationrules)-Elementen und externen Textdateien bereitgestellt, die durch den {{httpheader("Speculation-Rules")}}-Antwortheader referenziert werden.

## Wann sollten Sie welche Funktion verwenden?

Die folgende Tabelle fasst die oben beschriebenen Funktionen zusammen und gibt eine Anleitung, wann welche Funktion verwendet werden sollte.

| Spekulative Ladefunktionen                                                     | Zweck                                                                | Wann zu verwenden                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| ------------------------------------------------------------------------------ | -------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [`<link rel="preconnect">`](/de/docs/Web/HTML/Attributes/rel/preconnect)       | Cross-Origin-Verbindungsaufwärmen                                    | Verwenden Sie es für Ihre kritischsten Cross-Origin-Verbindungen, um Leistungsverbesserungen beim Herstellen der Verbindung zu erzielen.                                                                                                                                                                                                                                                                                                                                                |
| [`<link rel="dns-prefetch">`](/de/docs/Web/HTML/Attributes/rel/dns-prefetch)   | Cross-Origin-Verbindungsaufwärmen                                    | Verwenden Sie es für all Ihre Cross-Origin-Verbindungen, um kleine Leistungsverbesserungen beim Herstellen der Verbindung zu erzielen.                                                                                                                                                                                                                                                                                                                                                  |
| [`<link rel="preload">`](/de/docs/Web/HTML/Attributes/rel/preload)             | Hohe Priorität beim Laden von Unterressourcen der aktuellen Seite    | Verwenden Sie es, um Ressourcen mit hoher Priorität schneller auf der aktuellen Seite zu laden, für strategische Leistungsverbesserungen. Laden Sie nicht alles vor, sonst sehen Sie keinen Nutzen. Es hat auch einige andere interessante Verwendungen — siehe [Preload: What Is It Good For?](https://www.smashingmagazine.com/2016/02/preload-what-is-it-good-for/) auf Smashing Magazine (2016).                                                                                    |
| [`<link rel="modulepreload">`](/de/docs/Web/HTML/Attributes/rel/modulepreload) | Hohe Priorität beim Laden von JavaScript-Modulen der aktuellen Seite | Verwenden Sie es, um JavaScript-Module mit hoher Priorität vorab zu laden, für strategische Leistungsverbesserungen.                                                                                                                                                                                                                                                                                                                                                                    |
| [`<link rel="prefetch">`](/de/docs/Web/HTML/Attributes/rel/prefetch)           | Vorausfüllen des HTTP-Cache                                          | Verwenden Sie es, um gleichseitige zukünftige Navigationsressourcen oder Unterressourcen, die auf diesen Seiten verwendet werden, vorab zu laden. Verwendet den HTTP-Cache und hat daher eine Reihe von Problemen mit Dokumentenvorabrufen, wie z. B. Blockierungen durch [Cache-Control](/de/docs/Web/HTTP/Reference/Headers/Cache-Control)-Header. Verwenden Sie die [Speculation Rules API](/de/docs/Web/API/Speculation_Rules_API) für Dokumentenvorabrufe, wo es unterstützt wird. |
| [`<link rel="prerender">`](/de/docs/Web/HTML/Attributes/rel/prerender)         | Vorbereitung für die nächste Navigation                              | Veraltet; es wird empfohlen, dies nicht zu verwenden. Verwenden Sie stattdessen die [Speculation Rules API](/de/docs/Web/API/Speculation_Rules_API) prerender, wo es unterstützt wird.                                                                                                                                                                                                                                                                                                  |
| [Speculation Rules API](/de/docs/Web/API/Speculation_Rules_API) prefetch       | Vorbereitung für die nächste Navigation                              | Verwenden Sie es, um gleichseitige oder seitenübergreifende zukünftige Navigationsdokumente vorab zu laden. Breite Einführung wird empfohlen, wo es unterstützt wird; vergewissern Sie sich, dass die Seiten [sicher zum Vorabladen](/de/docs/Web/API/Speculation_Rules_API#unsafe_prefetching) sind. Es behandelt keine Unterressourcen-Vorabrufe; dafür müssen Sie `<link rel="prefetch">` verwenden.                                                                                 |
| [Speculation Rules API](/de/docs/Web/API/Speculation_Rules_API) prerender      | Vorbereitung für die nächste Navigation                              | Verwenden Sie es, um gleichstammige zukünftige Navigationsressourcen vorab zu laden, für nahezu sofortige Navigationsvorgänge. Verwenden Sie es auf Seiten mit hoher Priorität, wo es unterstützt wird; vergewissern Sie sich, dass die Seiten [sicher zum Prerendern](/de/docs/Web/API/Speculation_Rules_API#unsafe_prerendering) sind.                                                                                                                                                |

## Siehe auch

- [Prerender pages in Chrome for instant page navigations](https://developer.chrome.com/docs/web-platform/prerender-pages) auf developer.chrome.com (2023)
