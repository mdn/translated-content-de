---
title: rel=prefetch
slug: Web/HTML/Attributes/rel/prefetch
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{HTMLSidebar}}

Das Schlüsselwort **`prefetch`** für das [`rel`](/de/docs/Web/HTML/Element/link#rel)-Attribut des {{HTMLElement("link")}}-Elements bietet Browsern einen Hinweis darauf, dass der Nutzer die Zielressource wahrscheinlich für zukünftige Navigationsvorgänge benötigt, und ermöglicht es dem Browser daher, das Benutzererlebnis durch vorzeitiges Abrufen und Zwischenspeichern der Ressource zu verbessern. `<link rel="prefetch">` wird für Navigationsressourcen auf derselben Seite oder für Unterressourcen verwendet, die auf Seiten derselben Seite verwendet werden.

Das Ergebnis wird im HTTP-Cache auf der Festplatte gespeichert. Aus diesem Grund ist es nützlich für das Pre-Fetching von Unterressourcen, auch wenn sie auf der aktuellen Seite nicht verwendet werden. Sie könnten es auch verwenden, um das nächste Dokument vorzuholen, das der Benutzer wahrscheinlich auf der Seite besucht. Allerdings müssen Sie aufgrund dessen mit Headern vorsichtig sein – bestimmte [Cache-Control](/de/docs/Web/HTTP/Reference/Headers/Cache-Control)-Header könnten das Pre-Fetching verhindern (zum Beispiel `no-cache` oder `no-store`).

> [!NOTE]
> Aufgrund solcher Einschränkungen wird empfohlen, stattdessen die [Speculation Rules API](/de/docs/Web/API/Speculation_Rules_API) für Dokument-Prefetches zu verwenden, wo sie unterstützt wird.

`<link rel="prefetch">` ist funktional äquivalent zu einem [`fetch()`](/de/docs/Web/API/Window/fetch)-Aufruf mit der Option `priority: "low"`, außer dass ersteres im Allgemeinen eine noch niedrigere Priorität hat und einen HTTP-Request-Header [`Sec-Purpose: prefetch`](/de/docs/Web/HTTP/Reference/Headers/Sec-Purpose) aufweist. Beachten Sie, dass Browser im Allgemeinen Prefetch-Ressourcen eine niedrigere Priorität zuweisen als Preload-Ressourcen (zum Beispiel angefordert über [`<link rel="preload">`](/de/docs/Web/HTML/Attributes/rel/preload)) – die aktuelle Seite ist wichtiger als die nächste.

Die Abrufanfrage für eine `prefetch`-Operation führt zu einer HTTP-Anfrage, die den HTTP-Header [`Sec-Purpose: prefetch`](/de/docs/Web/HTTP/Reference/Headers/Sec-Purpose) enthält. Ein Server könnte diesen Header verwenden, um die Cache-Timeouts für die Ressourcen zu ändern oder eine andere spezielle Handhabung durchzuführen.
Die Anfrage wird auch den {{HTTPHeader("Sec-Fetch-Dest")}}-Header mit dem Wert `empty` enthalten.

Der {{HTTPHeader("Accept")}}-Header in der Anfrage entspricht dem Wert, der für normale Navigationsanfragen verwendet wird. Dies ermöglicht es dem Browser, die passenden zwischengespeicherten Ressourcen nach der Navigation zu finden.

## Beispiele

### Einfaches Prefetch

```js
<link rel="prefetch" href="main.js" />
```

### Navigation und Unterressourcen-Prefetch

Prefetching kann verwendet werden, um sowohl HTML als auch Unterressourcen für eine mögliche nächste Navigation abzurufen. Ein häufiger Anwendungsfall ist eine Website-Landingpage, die schwerere Ressourcen abruft, die vom Rest der Seite verwendet werden.

```html
<link rel="prefetch" href="/app/style.css" />
<link rel="prefetch" href="/landing-page" />
```

### Die Auswirkungen der Cache-Partitionierung

Viele Browser implementieren jetzt eine Form der [Cache-Partitionierung](https://developer.chrome.com/blog/http-cache-partitioning), die `<link rel="prefetch">` für Ressourcen nutzlos macht, die für die Nutzung durch verschiedene Top-Level-Seiten bestimmt sind. Dies schließt das Hauptdokument beim Navigieren zwischen Websites ein. Zum Beispiel wäre das folgende Prefetch:

```html
<link rel="prefetch" href="https://news.example/article" />
```

nicht von `https://aggregator.example/` aus zugänglich.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Spekulatives Laden](/de/docs/Web/Performance/Guides/Speculative_loading) für einen Vergleich von `<link rel="prefetch">` und anderen ähnlichen Leistungsverbesserungsfunktionen.
