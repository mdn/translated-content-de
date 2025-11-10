---
title: Spekulative Vorausladung
slug: Web/Performance/Guides/Speculative_loading
l10n:
  sourceCommit: 4a1d696e78d9aa0a3ca571cbc0aab9ba90258235
---

**Spekulative Vorausladung** bezieht sich auf die Praxis, Navigationsaktionen (wie DNS-Abruf, Ressourcenerfassung oder Dokumentenrendering) durchzuführen, bevor die zugehörigen Seiten tatsächlich besucht werden, basierend auf Vorhersagen darüber, welche Seiten der Benutzer als nächstes wahrscheinlich besuchen wird.

Diese Vorhersagen können von Entwicklern bereitgestellt werden (zum Beispiel Listen der beliebtesten Ziele ihrer Website) oder durch Browserheuristiken bestimmt werden (zum Beispiel basierend auf beliebten Seiten in der Browserhistorie des Benutzers). Bei erfolgreicher Verwendung können solche Technologien die Leistung erheblich verbessern, indem Seiten schneller oder in einigen Fällen sofort verfügbar gemacht werden.

Diese Seite gibt einen Überblick über verfügbare Technologien zur spekulativen Vorausladung und wann sie eingesetzt werden können und sollten, um die Leistung zu verbessern.

## Mechanismen der spekulativen Vorausladung

Es gibt mehrere Mechanismen für die spekulative Vorausladung:

- **Prefetching** beinhaltet das Abrufen einiger oder aller Ressourcen, die erforderlich sind, um ein Dokument (oder einen Teil davon) zu rendern, bevor sie benötigt werden, sodass das Rendering wesentlich schneller erfolgen kann, wenn der Zeitpunkt zum Rendern gekommen ist.
- **Prerendering** geht einen Schritt weiter und rendert den Inhalt tatsächlich, sodass er bei Bedarf sofort angezeigt werden kann. Abhängig davon, wie dies durchgeführt wird, kann dies zu einer sofortigen Navigation von der alten zur neuen Seite führen.
- **Preconnecting** beschleunigt zukünftige Ladezeiten von einem bestimmten Ursprung, indem Teile des Verbindungsaufbaus (d.h. DNS + TCP + TLS) vorweggenommen werden.

> [!NOTE]
> Die obigen Beschreibungen sind allgemein gehalten. Was genau Browser tun, um Prefetching und Prerendering zu erreichen, hängt von den verwendeten Funktionen ab. Genauere Funktionsbeschreibungen werden im Abschnitt [Funktionen der spekulativen Vorausladung](#funktionen_der_spekulativen_vorausladung) unten bereitgestellt.

## Wie wird spekulative Vorausladung erreicht?

Spekulative Vorausladung wird auf zwei Hauptwegen erreicht.

Erstens, einige Browser werden Seiten automatisch prerendern basierend auf verschiedenen Heuristiken, um automatische Leistungsverbesserungen zu bieten. Wie genau dies gemacht wird, hängt von der Implementierung des Browsers ab. Chrome beispielsweise prerendert automatisch Seiten, wenn passende Strings in die Adressleiste eingegeben werden — wenn eine hohe Wahrscheinlichkeit besteht, dass Sie diese Seite besuchen (siehe [Anzeigen von Chromes Adressleisten-Vorhersagen](https://developer.chrome.com/docs/web-platform/prerender-pages#view_chromes_address_bar_predictions) für mehr Details). Zusätzlich kann es Suchergebnisseiten automatisch prerendern, wenn Suchbegriffe in die Adressleiste eingegeben werden, wenn dies von der Suchmaschine so angewiesen wird. Es nutzt dabei denselben Mechanismus wie die [Speculation Rules API](/de/docs/Web/API/Speculation_Rules_API).

Zweitens gibt es mehrere Plattformfunktionen, die Entwickler verwenden können, um Anweisungen zu geben, welche spekulative Vorausladung der Browser durchführen soll. Diese werden im nächsten Abschnitt behandelt.

## Funktionen der spekulativen Vorausladung

### `<link rel="preconnect">`

[`<link rel="preconnect">`](/de/docs/Web/HTML/Reference/Attributes/rel/preconnect) bietet einen Hinweis für Browser, dass der Benutzer wahrscheinlich Ressourcen vom Ursprung der angegebenen Ressource benötigt. Daher kann der Browser die Leistung wahrscheinlich verbessern, indem er vorzeitig eine Verbindung zu diesem Ursprung aufbaut. Unterstützende Browser werden einen Teil oder den gesamten Verbindungsaufbau (d.h. DNS + TCP + TLS) vorwegnehmen.

Zum Beispiel:

```html
<link rel="preconnect" href="https://example.com" />
```

`<link rel="preconnect">` wird in den meisten Browsern unterstützt und bietet einen Vorteil für jede zukünftige Cross-Origin-HTTP-Anfrage, Navigation oder Subressource. Es hat keinen Vorteil bei Anfragen gleichen Ursprungs, da die Verbindung bereits offen ist.

Wenn eine Seite Verbindungen zu vielen Drittanbieter-Domains herstellen muss, kann das Vorverbinden aller Verbindungen kontraproduktiv sein. Der `<link rel="preconnect">`-Hinweis sollte am besten nur für die kritischsten Verbindungen verwendet werden. Für die anderen verwenden Sie einfach `<link rel="dns-prefetch">`, um Zeit bei dem ersten Schritt — der DNS-Suche — zu sparen.

Sie können auch Preconnect als HTTP-`Link`-Header implementieren, zum Beispiel:

```http
Link: <https://example.com>; rel="preconnect"
```

### `<link rel="dns-prefetch">`

[`<link rel="dns-prefetch">`](/de/docs/Web/HTML/Reference/Attributes/rel/dns-prefetch) bietet einen Hinweis für Browser, dass der Benutzer wahrscheinlich Ressourcen vom Ursprung der angegebenen Ressource benötigt, und daher könnte der Browser die Leistung verbessern, indem er vorzeitig die DNS-Auflösung für diesen Ursprung durchführt. Es ist identisch mit `<link rel="preconnect">`, außer dass es nur den DNS-Teil behandelt.

Auch hier ist die Unterstützung von Browsern weit verbreitet, und es hat keinen Vorteil bei Anfragen gleichen Ursprungs, da die Verbindung bereits offen ist.

Zum Beispiel:

```html
<link rel="dns-prefetch" href="https://example.com" />
```

> [!NOTE]
> Sehen Sie [Verwendung von dns-prefetch](/de/docs/Web/Performance/Guides/dns-prefetch) für mehr Details.

### `<link rel="preload">`

[`<link rel="preload">`](/de/docs/Web/HTML/Reference/Attributes/rel/preload) bietet einen Hinweis für Browser, welche Ressourcen auf _der aktuellen Seite_ hohe Priorität haben, damit sie frühzeitig mit dem Herunterladen beginnen können, wenn sie das {{htmlelement("link")}}-Element(e) im {{htmlelement("head")}} der Seite sehen.

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

Das Ergebnis wird in einem pro Dokument bestehenden In-Memory-Cache gehalten. Wenn Sie etwas vorladen, das Ihre aktuelle Seite nicht als Subressource nutzt, ist das im Allgemeinen Ressourcenverschwendung, obwohl das Ergebnis möglicherweise den HTTP-Cache auffüllt, wenn die Header es zulassen.

Sie können auch Preload als HTTP-`Link`-Header implementieren, zum Beispiel:

```http
Link: <https://www.example.com/fonts/cicle_fina-webfont.woff2>; rel="preload"
```

Die Unterstützung von Browsern für `<link rel="preload">`/`<link rel="modulepreload">` ist in modernen Browsern weit verbreitet.

### `<link rel="modulepreload">`

[`<link rel="modulepreload">`](/de/docs/Web/HTML/Reference/Attributes/rel/modulepreload) bietet einen Hinweis für Browser, welche JavaScript-Module auf _der aktuellen Seite_ hohe Priorität haben, damit sie frühzeitig mit dem Herunterladen beginnen können.

Zum Beispiel:

```html
<link rel="modulepreload" href="main.js" />
```

Es ist eine spezialisierte Version von `<link rel="preload">` für [JavaScript-Module](/de/docs/Web/JavaScript/Guide/Modules) und funktioniert im Wesentlichen genauso. Es gibt jedoch einige Unterschiede:

- Der Browser weiß, dass die Ressource ein JavaScript-Modul ist, da das `as`-Attribut nicht benötigt wird, und er kann die richtigen Anmeldemodi verwenden, um Doppelabrufe zu vermeiden.
- Anstatt es nur herunterzuladen und im Cache zu speichern, lädt der Browser es herunter, parst es und kompiliert es direkt in die In-Memory-Modulkarte.
- Der Browser kann dasselbe auch automatisch für Modulpakete tun.

### `<link rel="prefetch">`

[`<link rel="prefetch">`](/de/docs/Web/HTML/Reference/Attributes/rel/prefetch) bietet einen Hinweis für Browser, dass der Benutzer die Zielressource für zukünftige Navigationen wahrscheinlich benötigt, und daher kann der Browser die Benutzererfahrung wahrscheinlich verbessern, indem er die Ressource vorab abruft und im Cache speichert. `<link rel="prefetch">` wird für gleichseitige Navigationen oder für Subressourcen verwendet, die von gleichseitigen Seiten genutzt werden.

Zum Beispiel:

```html
<link rel="prefetch" href="main.js" />
```

Prefetching kann verwendet werden, um sowohl HTML als auch Subressourcen für eine mögliche nächste Navigation abzurufen. Ein häufiges Anwendungsbeispiel ist, eine einfache Website-Landingpage zu haben, die schwergewichtigere Ressourcen des restlichen Außenlebens der Website abruft.

```html
<link rel="prefetch" href="/app/style.css" />
<link rel="prefetch" href="/landing-page" />
```

Das Ergebnis wird im HTTP-Cache auf der Festplatte gespeichert. Daher ist es nützlich für die Vorabladen von Subressourcen, selbst wenn sie nicht von der aktuellen Seite verwendet werden. Sie könnten es auch verwenden, um das nächste Dokument vorzusehen, das der Benutzer möglicherweise auf der Website besucht. Allerdings müssen Sie aufgrund dieser Eigenschaft vorsichtig mit den Headern sein — zum Beispiel könnten bestimmte [Cache-Control](/de/docs/Web/HTTP/Reference/Headers/Cache-Control) Header das Prefetching blockieren (zum Beispiel `no-cache` oder `no-store`).

Viele Browser implementieren jetzt eine Form der [Cache-Partitionierung](https://developer.chrome.com/blog/http-cache-partitioning), die `<link rel="prefetch">` für Ressourcen, die für die Nutzung durch verschiedene oberste Seiten gedacht sind, unbrauchbar macht. Dies schließt das Hauptdokument beim Navigieren seitenübergreifend ein. Das folgende Prefetch-Beispiel wäre zum Beispiel nicht von `https://aggregator.example/` erreichbar:

```html
<link rel="prefetch" href="https://news.example/article" />
```

> [!NOTE]
> `<link rel="prefetch">` ist funktional gleichbedeutend mit einem [`fetch()`](/de/docs/Web/API/Window/fetch)-Aufruf, bei dem eine `priority: "low"`-Option gesetzt ist, außer dass die erstere im Allgemeinen eine noch niedrigere Priorität hat, und sie wird einen [`Sec-Purpose: prefetch`](/de/docs/Web/HTTP/Reference/Headers/Sec-Purpose)-Header in der Anfrage gesetzt haben.

> [!NOTE]
> Die Fetch-Anfrage für eine `prefetch`-Operation führt zu einer HTTP-Anfrage, die den HTTP-Header [`Sec-Purpose: prefetch`](/de/docs/Web/HTTP/Reference/Headers/Sec-Purpose) enthält. Ein Server könnte diesen Header verwenden, um die Cache-Zeitüberschreitungen für die Ressourcen zu ändern oder eine andere spezielle Behandlung durchzuführen. Die Anfrage wird auch den {{HTTPHeader("Sec-Fetch-Dest")}}-Header mit dem Wert `empty` enthalten.
> Der {{HTTPHeader("Accept")}}-Header in der Anfrage wird mit dem Wert übereinstimmen, der für normale Navigationsanfragen verwendet wird. Dies ermöglicht es dem Browser, die passenden gecachten Ressourcen nach der Navigation zu finden.
> Wenn eine Antwort zurückgegeben wird, wird sie zusammen mit der Anfrage im HTTP-Cache gespeichert.

### `<link rel="prerender">` {{deprecated_inline}}{{non-standard_inline}}

> [!NOTE]
> Diese Technologie war ausschließlich in Chrome verfügbar und ist jetzt veraltet und [führt keine Prerendering mehr wie der Name vermuten lässt](https://developer.chrome.com/blog/nostate-prefetch). Stattdessen sollten Sie die [Speculation Rules API](/de/docs/Web/API/Speculation_Rules_API) verwenden, die diese Funktion übertrifft.

[`<link rel="prerender">`](/de/docs/Web/HTML/Reference/Attributes/rel/prerender) bietet einen Hinweis für Browser, dass der Benutzer die Zielressource für die nächste Navigation möglicherweise benötigt und daher die Browserleistung wahrscheinlich durch Prerendering der Ressource verbessert werden kann. `prerender` wird für zukünftige Navigationen nur mit gleicher Seite verwendet und eignet sich daher für Mehrseitenanwendungen (MPAs), nicht für Einzelseitenanwendungen (SPAs).

Zum Beispiel:

```html
<link rel="prerender" href="/next-page" />
```

Es wird das referenzierte Dokument abrufen, dann alle statisch auffindbaren Ressourcen ebenfalls abrufen und sie speichern, wobei das Ergebnis im HTTP-Cache auf der Festplatte mit einem Zeitüberschreitung von fünf Minuten gespeichert wird. Die Ausnahme bilden Subressourcen, die über JavaScript geladen werden — diese werden nicht gefunden. Es hat auch andere Probleme — wie `<link rel="prefetch">` kann es auch durch [Cache-Control](/de/docs/Web/HTTP/Reference/Headers/Cache-Control)-Header blockiert werden, und durch [Cache-Partitionierung](https://developer.chrome.com/blog/http-cache-partitioning) unbrauchbar gemacht werden.

### Speculation Rules API

Die [Speculation Rules API](/de/docs/Web/API/Speculation_Rules_API) wird verwendet, um eine Reihe von Regeln festzulegen, die bestimmen, welche zukünftigen Dokumente von dem Browser vorgeladen oder prerendert werden sollen. Diese Regeln werden als JSON-Strukturen in Inline-`<script type="speculationrules">`](/de/docs/Web/HTML/Reference/Elements/script/type/speculationrules)-Elemente und externe Textdateien bereitgestellt, die von der {{httpheader("Speculation-Rules")}}-Antwort-Header referenziert werden.

## Wann sollten Sie jede Funktion verwenden?

Die folgende Tabelle fasst die oben beschriebenen Funktionen zusammen und gibt Anweisungen, wann jede davon verwendet werden sollte.

| Funktionen der spekulativen Vorausladung                                                 | Zweck                                                  | Wann verwenden                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| ---------------------------------------------------------------------------------------- | ------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [`<link rel="preconnect">`](/de/docs/Web/HTML/Reference/Attributes/rel/preconnect)       | Cross-Origin-Verbindungsaufbau                         | Verwenden Sie es für Ihre kritischsten Cross-Origin-Verbindungen, um Leistungsverbesserungen beim Verbindungsaufbau zu erzielen.                                                                                                                                                                                                                                                                                                                                                             |
| [`<link rel="dns-prefetch">`](/de/docs/Web/HTML/Reference/Attributes/rel/dns-prefetch)   | Cross-Origin-Verbindungsaufbau                         | Verwenden Sie es für alle Ihre Cross-Origin-Verbindungen, um kleine Leistungsverbesserungen beim Verbindungsaufbau zu erzielen.                                                                                                                                                                                                                                                                                                                                                              |
| [`<link rel="preload">`](/de/docs/Web/HTML/Reference/Attributes/rel/preload)             | Hochpriorität-Laden von aktuellen Seiten-Subressourcen | Verwenden Sie es, um hochpriorisierte Ressourcen schneller auf der aktuellen Seite zu laden, für strategische Leistungsverbesserungen. Laden Sie nicht alles vor, sonst sehen Sie keinen Nutzen. Es gibt auch einige andere interessante Anwendungsfälle — siehe [Preload: What Is It Good For?](https://www.smashingmagazine.com/2016/02/preload-what-is-it-good-for/) auf Smashing Magazine (2016)                                                                                         |
| [`<link rel="modulepreload">`](/de/docs/Web/HTML/Reference/Attributes/rel/modulepreload) | Hochpriorität-Laden von aktuellen JavaScript-Modulen   | Verwenden Sie es, um hochpriorisierte JavaScript-Module für strategische Leistungsverbesserungen vorzuladen.                                                                                                                                                                                                                                                                                                                                                                                 |
| [`<link rel="prefetch">`](/de/docs/Web/HTML/Reference/Attributes/rel/prefetch)           | Vorfüllung des HTTP-Caches                             | Verwenden Sie es, um gleichseitige zukünftige Navigationsressourcen oder Subressourcen, die auf diesen Seiten verwendet werden, vorzusegen. Verwendet den HTTP-Cache und hat daher eine Reihe von Problemen mit Dokumenteninhalten, wie z.B. ein potenzielles Blockieren durch [Cache-Control](/de/docs/Web/HTTP/Reference/Headers/Cache-Control)-Header. Verwenden Sie stattdessen die [Speculation Rules API](/de/docs/Web/API/Speculation_Rules_API) für Dokumenteninhalte, wo verfügbar. |
| [`<link rel="prerender">`](/de/docs/Web/HTML/Reference/Attributes/rel/prerender)         | Vorbereitung für die nächste Navigation                | Veraltet; es wird nicht empfohlen, dies zu verwenden. Verwenden Sie stattdessen die [Speculation Rules API](/de/docs/Web/API/Speculation_Rules_API) für Prerendering, wenn diese verfügbar ist.                                                                                                                                                                                                                                                                                              |
| [Speculation Rules API](/de/docs/Web/API/Speculation_Rules_API) Prefetch                 | Vorbereitung für die nächste Navigation                | Verwenden Sie es, um gleich- oder seitenübergreifende zukünftige Navigationsdokumente vorzusehen. Eine breite Integration wird empfohlen, wo es unterstützt wird; Stellen Sie sicher, dass die Seiten [sicher vorgeladen werden können](/de/docs/Web/API/Speculation_Rules_API#unsafe_prefetching). Es handhabt keine Subressourceneinhalte; dafür müssen Sie `<link rel="prefetch">` verwenden.                                                                                             |
| [Speculation Rules API](/de/docs/Web/API/Speculation_Rules_API) Prerender                | Vorbereitung für die nächste Navigation                | Verwenden Sie es, um gleich-ursprüngliche zukünftige Navigationsressourcen vorzuladen, für nahezu sofortige Navigationen. Verwenden Sie es auf hochpriorisierten Seiten, wo es unterstützt wird; Stellen Sie sicher, dass die Seiten [sicher vorbereitet werden können](/de/docs/Web/API/Speculation_Rules_API#unsafe_prerendering).                                                                                                                                                         |

## Siehe auch

- [Prerender-Seiten in Chrome für sofortige Seitennavigationen](https://developer.chrome.com/docs/web-platform/prerender-pages) auf developer.chrome.com (2023)
