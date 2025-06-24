---
title: Spekulatives Laden
slug: Web/Performance/Guides/Speculative_loading
l10n:
  sourceCommit: a84b606ffd77c40a7306be6c932a74ab9ce6ab96
---

**Spekulatives Laden** bezieht sich auf die Praxis, Navigationsvorgänge (wie DNS-Abrufe, Ressourcenabrufe oder das Rendern von Dokumenten) durchzuführen, bevor die zugehörigen Seiten tatsächlich besucht werden. Dies basiert auf Vorhersagen, welche Seiten der Benutzer höchstwahrscheinlich als nächstes besuchen wird.

Diese Vorhersagen können von Entwicklern bereitgestellt werden (zum Beispiel durch Listen der beliebtesten Ziele auf ihrer Website) oder durch Browserheuristiken bestimmt werden (zum Beispiel basierend auf beliebten Seiten in der Benutzerhistorie). Wenn diese Technologien erfolgreich eingesetzt werden, können sie die Leistung erheblich verbessern, indem sie Seiten schneller oder in einigen Fällen sogar sofort verfügbar machen.

Diese Seite gibt einen Überblick über verfügbare Technologien zum spekulativen Laden und wann sie verwendet werden können und sollten, um die Leistung zu verbessern.

## Mechanismen des spekulativen Ladens

Es gibt mehrere Mechanismen für spekulatives Laden:

- **Prefetching** umfasst das Abrufen einiger oder aller Ressourcen, die benötigt werden, um ein Dokument (oder einen Teil eines Dokuments) zu rendern, bevor sie benötigt werden, sodass das Rendern viel schneller erreicht werden kann, wenn die Zeit dafür kommt.
- **Prerendering** geht einen Schritt weiter und rendert die Inhalte tatsächlich im Voraus, damit sie bei Bedarf sofort angezeigt werden können. Abhängig von der Umsetzung kann dies zu einer sofortigen Navigation von der alten Seite zur neuen Seite führen.
- **Preconnecting** bezieht sich auf das Beschleunigen zukünftiger Abrufe von einer gegebenen Quelle, indem ein Teil oder das gesamte Verbindungs-Handshake (d.h. DNS + TCP + TLS) präventiv durchgeführt wird.

> [!NOTE]
> Die obigen Beschreibungen sind auf hohem Niveau und allgemein gehalten. Was Browser genau tun, um Prefetching und Prerendering zu erreichen, hängt von den verwendeten Funktionen ab. Genaue Feature-Beschreibungen finden Sie im Abschnitt [Funktionen des spekulativen Ladens](#funktionen_des_spekulativen_ladens) unten.

## Wie wird spekulatives Laden erreicht?

Spekulatives Laden wird auf zwei Hauptarten erreicht.

Zuerst werden einige Browser automatisch Seiten prerendern, basierend auf verschiedenen Heuristiken, um automatische Leistungsverbesserungen zu bieten. Wie dies genau geschieht, hängt von der Browser-Implementierung ab. Chrome zum Beispiel prerendert automatisch Seiten, wenn passende Zeichenfolgen in die Adressleiste eingegeben werden — vorausgesetzt, es besteht eine hohe Wahrscheinlichkeit, dass Sie diese Seite besuchen werden (siehe [Ansicht von Adressleisten-Vorhersagen in Chrome](https://developer.chrome.com/docs/web-platform/prerender-pages#view_chromes_address_bar_predictions) für weitere Details). Darüber hinaus kann es Suchergebnisseiten automatisch prerendern, wenn Suchbegriffe in die Adressleiste eingegeben werden, wenn die Suchmaschine dies so anweist. Es tut dies mit demselben Mechanismus wie die [Speculation Rules API](/de/docs/Web/API/Speculation_Rules_API).

Zweitens gibt es mehrere verschiedene Plattformfunktionen, die Entwickler verwenden können, um Anweisungen bereitzustellen, welche spekulativen Ladevorgänge der Browser durchführen soll. Diese werden im nächsten Abschnitt überprüft.

## Funktionen des spekulativen Ladens

### `<link rel="preconnect">`

[`<link rel="preconnect">`](/de/docs/Web/HTML/Reference/Attributes/rel/preconnect) bietet einen Hinweis für Browser, dass der Benutzer wahrscheinlich Ressourcen vom Ursprungsort der angegebenen Ressource benötigt, und folglich kann der Browser die Leistung wahrscheinlich verbessern, indem er präventiv eine Verbindung zu diesem Ursprung herstellt. Unterstützende Browser werden einen Teil oder das gesamte Verbindungs-Handshake (d.h. DNS + TCP + TLS) präventiv durchführen.

Zum Beispiel:

```html
<link rel="preconnect" href="https://example.com" />
```

`<link rel="preconnect">` wird breit über Browser hinweg unterstützt und bietet einen Vorteil bei jedem zukünftigen cross-origin HTTP-Abruf, bei der Navigation oder bei Subressourcen. Es hat keinen Vorteil bei gleichursprünglichen Abrufen, da die Verbindung bereits geöffnet ist.

Wenn eine Seite Verbindungen zu vielen Drittanbieter-Domänen benötigt, kann es kontraproduktiv sein, all diese zu preconnecten. Der `<link rel="preconnect">`-Hinweis wird am besten nur für die kritischsten Verbindungen verwendet. Für die anderen verwenden Sie einfach `<link rel="dns-prefetch">`, um beim ersten Schritt — dem DNS-Lookup — Zeit zu sparen.

Sie können Preconnect auch als HTTP-Header [`Link`](/de/docs/Web/HTTP/Reference/Headers/Link) implementieren, zum Beispiel:

```http
Link: <https://example.com>; rel="preconnect"
```

### `<link rel="dns-prefetch">`

[`<link rel="dns-prefetch">`](/de/docs/Web/HTML/Reference/Attributes/rel/dns-prefetch) bietet einen Hinweis für Browser, dass der Benutzer wahrscheinlich Ressourcen vom Ursprungsort der angegebenen Ressource benötigt, und folglich kann der Browser die Leistung verbessern, indem er präventiv die DNS-Auflösung für diesen Ursprung durchführt. Es ist identisch mit `<link rel="preconnect">`, außer dass es nur den DNS-Teil behandelt.

Auch hier ist die Unterstützung der Browser weit verbreitet, und es hat keinen Vorteil bei gleichursprünglichen Abrufen, da die Verbindung bereits geöffnet ist.

Zum Beispiel:

```html
<link rel="dns-prefetch" href="https://example.com" />
```

> [!NOTE]
> Siehe [Verwendung von dns-prefetch](/de/docs/Web/Performance/Guides/dns-prefetch) für weitere Details.

### `<link rel="preload">`

[`<link rel="preload">`](/de/docs/Web/HTML/Reference/Attributes/rel/preload) bietet einen Hinweis an Browser, welche Ressourcen auf _der aktuellen Seite_ eine hohe Priorität haben, sodass sie diese frühzeitig herunterladen können, wenn sie die {{htmlelement("link")}}-Elemente im {{htmlelement("head")}} der Seite sehen.

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

Das Ergebnis wird in einem pro-Dokument-Arbeitsspeicher-Cache gespeichert. Wenn Sie etwas vorladen, das Ihre aktuelle Seite nicht als Subressource verwendet, ist es im Allgemeinen eine Verschwendung von Ressourcen, obwohl das Ergebnis den HTTP-Cache möglicherweise auffüllt, wenn es die Header erlauben.

Sie können das Vorladen auch als HTTP-Header [`Link`](/de/docs/Web/HTTP/Reference/Headers/Link) implementieren, zum Beispiel:

```http
Link: <https://www.example.com/fonts/cicle_fina-webfont.woff2>; rel="preload"
```

Die Browserunterstützung für `<link rel="preload">`/`<link rel="modulepreload">` ist bei modernen Browsern weit verbreitet.

### `<link rel="modulepreload">`

[`<link rel="modulepreload">`](/de/docs/Web/HTML/Reference/Attributes/rel/modulepreload) bietet einen Hinweis an Browser, welche JavaScript-Module auf _der aktuellen Seite_ eine hohe Priorität haben, sodass sie diese frühzeitig herunterladen können.

Zum Beispiel:

```js
<link rel="modulepreload" href="main.js" />
```

Es ist eine spezialisierte Version von `<link rel="preload">` für [JavaScript-Module](/de/docs/Web/JavaScript/Guide/Modules) und funktioniert im Wesentlichen auf die gleiche Weise. Es gibt jedoch einige Unterschiede:

- Der Browser weiß, dass die Ressource ein JavaScript-Modul ist, da das `as`-Attribut nicht benötigt wird, und er kann die richtigen Anmeldeinformationen verwenden, um doppelte Abrufe zu vermeiden.
- Anstatt es nur herunterzuladen und im Cache zu speichern, lädt der Browser es herunter und analysiert und kompiliert es direkt in die Speicherkarte des Moduls.
- Der Browser kann automatisch dasselbe für Moduldabhängigkeiten tun.

### `<link rel="prefetch">`

[`<link rel="prefetch">`](/de/docs/Web/HTML/Reference/Attributes/rel/prefetch) bietet einen Hinweis an Browser, dass der Benutzer die Zielressource wahrscheinlich für zukünftige Navigationen benötigt, und daher kann der Browser die Benutzererfahrung verbessern, indem er die Ressource präventiv abruft und im Cache speichert. `<link rel="prefetch">` wird für gleichstandortige Navigationsressourcen oder für Subressourcen verwendet, die von gleichstandortigen Seiten genutzt werden.

Zum Beispiel:

```js
<link rel="prefetch" href="main.js" />
```

Prefetching kann verwendet werden, um sowohl HTML als auch Subressourcen für eine mögliche nächste Navigation zu holen. Ein häufiges Einsatzszenario besteht darin, eine einfache Website-Startseite zu haben, die schwergewichtigere Ressourcen abruft, die vom Rest der Website verwendet werden.

```html
<link rel="prefetch" href="/app/style.css" />
<link rel="prefetch" href="/landing-page" />
```

Das Ergebnis wird im HTTP-Cache auf der Festplatte gespeichert. Daher ist es nützlich für das Vorabrufen von Subressourcen, selbst wenn sie von der aktuellen Seite nicht verwendet werden. Sie könnten es auch nutzen, um das nächste Dokument vorzuholen, das der Benutzer wahrscheinlich auf der Website besucht. Aufgrund dessen müssen Sie jedoch vorsichtig mit den Headern sein — zum Beispiel könnten bestimmte [Cache-Control](/de/docs/Web/HTTP/Reference/Headers/Cache-Control)-Header das Vorholen blockieren (zum Beispiel `no-cache` oder `no-store`).

Viele Browser setzen inzwischen eine Form der [Cache-Partitionierung](https://developer.chrome.com/blog/http-cache-partitioning) um, die `<link rel="prefetch">` für Ressourcen nutzlos macht, die für die Nutzung durch verschiedene Top-Level-Sites bestimmt sind. Dies umfasst das Hauptdokument bei der plattformübergreifenden Navigation. So wäre beispielsweise das folgende Prefetch:

```html
<link rel="prefetch" href="https://news.example/article" />
```

von `https://aggregator.example/` aus nicht zugänglich.

> [!NOTE] > `<link rel="prefetch">` ist funktional äquivalent zu einem [`fetch()`](/de/docs/Web/API/Window/fetch)-Aufruf mit der Option `priority: "low"`, außer dass ersteres im Allgemeinen eine noch niedrigere Priorität haben wird, und es wird ein [`Sec-Purpose: prefetch`](/de/docs/Web/HTTP/Reference/Headers/Sec-Purpose)-Header an der Anfrage gesetzt.

> [!NOTE]
> Die Abrufanforderung für einen `prefetch`-Vorgang führt zu einer HTTP-Anforderung, die den HTTP-Header [`Sec-Purpose: prefetch`](/de/docs/Web/HTTP/Reference/Headers/Sec-Purpose) enthält. Ein Server könnte diesen Header verwenden, um die Cache-Zeitlimits für die Ressourcen zu ändern oder andere spezielle Handhabungen durchzuführen.
> Die Anfrage enthält auch den {{HTTPHeader("Sec-Fetch-Dest")}}-Header mit dem Wert `empty`.
> Der {{HTTPHeader("Accept")}}-Header in der Anfrage entspricht dem für normale Navigationsanforderungen verwendeten Wert. Dies ermöglicht es dem Browser, die passenden gecachten Ressourcen nach der Navigation zu finden.
> Wenn eine Antwort zurückgegeben wird, wird sie mit der Anfrage im HTTP-Cache zwischengespeichert.

### `<link rel="prerender">` {{deprecated_inline}}{{non-standard_inline}}

> [!NOTE]
> Diese Technologie war nur in Chrome verfügbar und ist jetzt abgekündigt. Sie sollten stattdessen die [Speculation Rules API](/de/docs/Web/API/Speculation_Rules_API) verwenden, die dies ersetzt.

[`<link rel="prerender">`](/de/docs/Web/HTML/Reference/Attributes/rel/prerender) bietet einen Hinweis an Browser, dass die Zielressource möglicherweise für die nächste Navigation benötigt wird, und folglich kann der Browser die Leistung verbessern, indem er die Ressource prerendert. `prerender` wird für zukünftige Navigationen verwendet, nur am selben Standort, und macht daher für Multi-Page-Applications (MPAs) Sinn, nicht jedoch für Single-Page-Applications (SPAs).

Zum Beispiel:

```html
<link rel="prerender" href="/next-page" />
```

Es wird das referenzierte Dokument abholen, dann alle verlinkten Ressourcen, die statisch auffindbar sind, auch abholen und in den HTTP-Cache auf der Festplatte mit einem fünfminütigen Timeout speichern. Die Ausnahme sind Subressourcen, die über JavaScript geladen werden — diese findet es nicht. Es gibt auch andere Probleme — wie `<link rel="prefetch">` kann es auch von [Cache-Control](/de/docs/Web/HTTP/Reference/Headers/Cache-Control)-Headern blockiert werden und nutzlos gemacht werden für Ressourcen, die für die Nutzung durch verschiedene Top-Level-Sites gedacht sind, indem Browser [Cache-Partitionierung](https://developer.chrome.com/blog/http-cache-partitioning) eingesetzt wird.

### Speculation Rules API

Die [Speculation Rules API](/de/docs/Web/API/Speculation_Rules_API) wird verwendet, um eine Reihe von Regeln festzulegen, die bestimmen, welche zukünftigen Dokumente vom Browser vorgeladen oder prerendert werden sollen. Diese Regeln werden als JSON-Strukturen in inline-`<script type="speculationrules">`-Elementen und externen Textdateien bereitgestellt, die durch den {{httpheader("Speculation-Rules")}}-Response-Header referenziert werden.

## Wann sollte jede Funktion verwendet werden?

Die folgende Tabelle fasst die oben genannten Funktionen zusammen und gibt Hinweise, wann jede einzelne verwendet werden sollte.

| Funktionen des spekulativen Ladens                                                       | Zweck                                                                  | Wann zu verwenden                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [`<link rel="preconnect">`](/de/docs/Web/HTML/Reference/Attributes/rel/preconnect)       | Cross-origin-Verbindungs-Vorbereitung                                  | Verwenden Sie es bei Ihren kritischsten Cross-Origin-Verbindungen, um Leistungsverbesserungen beim Herstellen einer Verbindung zu ihnen zu bieten.                                                                                                                                                                                                                                                                                                                                 |
| [`<link rel="dns-prefetch">`](/de/docs/Web/HTML/Reference/Attributes/rel/dns-prefetch)   | Cross-origin-Verbindungs-Vorbereitung                                  | Verwenden Sie es bei all Ihren Cross-Origin-Verbindungen, um kleine Leistungsverbesserungen beim Herstellen einer Verbindung zu ihnen zu erzielen.                                                                                                                                                                                                                                                                                                                                 |
| [`<link rel="preload">`](/de/docs/Web/HTML/Reference/Attributes/rel/preload)             | Laden von hochpriorisierten Subressourcen der aktuellen Seite          | Verwenden Sie es, um hochpriorisierte Ressourcen auf der aktuellen Seite schneller zu laden, für strategische Leistungsverbesserungen. Laden Sie nicht alles vor, sonst sehen Sie den Vorteil nicht. Hat auch einige andere interessante Einsatzmöglichkeiten — siehe [Preload: What Is It Good For?](https://www.smashingmagazine.com/2016/02/preload-what-is-it-good-for/) auf Smashing Magazine (2016)                                                                          |
| [`<link rel="modulepreload">`](/de/docs/Web/HTML/Reference/Attributes/rel/modulepreload) | Laden von hochpriorisierten JavaScript-Modulen auf der aktuellen Seite | Verwenden Sie es, um hochpriorisierte JavaScript-Module für strategische Leistungsverbesserungen vorzuholen.                                                                                                                                                                                                                                                                                                                                                                       |
| [`<link rel="prefetch">`](/de/docs/Web/HTML/Reference/Attributes/rel/prefetch)           | Vorabfüllung des HTTP-Caches                                           | Verwenden Sie es, um künftige Navigationsressourcen oder Subressourcen auf denselben Websites vorzuholen. Es verwendet den HTTP-Cache und hat daher viele Probleme mit Dokumenten-Vorabrufen, wie zum Beispiel möglicherweise von [Cache-Control](/de/docs/Web/HTTP/Reference/Headers/Cache-Control)-Headern blockiert zu werden. Verwenden Sie stattdessen die [Speculation Rules API](/de/docs/Web/API/Speculation_Rules_API) zum Dokumenten-Vorabrufen, wo es unterstützt wird. |
| [`<link rel="prerender">`](/de/docs/Web/HTML/Reference/Attributes/rel/prerender)         | Vorbereitung für die nächste Navigation                                | Veraltet; Sie werden angewiesen, dies nicht zu verwenden. Verwenden Sie stattdessen die [Speculation Rules API](/de/docs/Web/API/Speculation_Rules_API)-Prerender, wo es unterstützt wird.                                                                                                                                                                                                                                                                                         |
| [Speculation Rules API](/de/docs/Web/API/Speculation_Rules_API) Prefetch                 | Vorbereitung für die nächste Navigation                                | Verwenden Sie es, um gleichstandortige oder plattformübergreifende zukünftige Navigationsdokumente vorzuholen. Eine breite Anpassung wird empfohlen, wo es unterstützt wird; vergewissern Sie sich, dass die Seiten [sicher vorzuholen](/de/docs/Web/API/Speculation_Rules_API#unsafe_prefetching) sind. Es behandelt keine Subressourcen-Vorabrufe; dafür müssen Sie `<link rel="prefetch">` verwenden.                                                                           |
| [Speculation Rules API](/de/docs/Web/API/Speculation_Rules_API) Prerender                | Vorbereitung für die nächste Navigation                                | Verwenden Sie es, um gleichursprüngliche zukünftige Navigationsressourcen vorzuholen, für nahezu sofortige Navigationen. Verwenden Sie es auf hochpriorisierten Seiten, wo es unterstützt wird; vergewissern Sie sich, dass die Seiten [sicher zu prerendern](/de/docs/Web/API/Speculation_Rules_API#unsafe_prerendering) sind.                                                                                                                                                    |

## Siehe auch

- [Prerender-Seiten in Chrome für sofortige Seitenwechsel](https://developer.chrome.com/docs/web-platform/prerender-pages) auf developer.chrome.com (2023)
