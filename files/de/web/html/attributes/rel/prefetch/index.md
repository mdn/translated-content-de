---
title: rel=prefetch
slug: Web/HTML/Attributes/rel/prefetch
l10n:
  sourceCommit: cb132bc83b660e51be8959de5336c00b08030104
---

{{HTMLSidebar}}

Das **`prefetch`** Stichwort für das [`rel`](/de/docs/Web/HTML/Element/link#rel) Attribut des {{HTMLElement("link")}} Elements gibt den Browsern einen Hinweis darauf, dass der Benutzer die Zielressource wahrscheinlich für zukünftige Navigationen benötigt. Daher kann der Browser möglicherweise die Benutzererfahrung verbessern, indem er die Ressource vorausschauend abruft und zwischenspeichert. `<link rel="prefetch">` wird für gleichseitige Navigationsressourcen oder für Subressourcen verwendet, die von gleichseitigen Seiten verwendet werden.

Das Ergebnis wird im HTTP-Cache auf der Festplatte gespeichert. Aufgrund dessen ist es nützlich, Subressourcen vorzurufen, auch wenn sie auf der aktuellen Seite nicht verwendet werden. Sie könnten es auch verwenden, um das nächste Dokument vorzuholen, das der Benutzer wahrscheinlich auf der Seite besuchen wird. Allerdings müssen Sie infolgedessen mit den Headern vorsichtig sein — bestimmte [Cache-Control](/de/docs/Web/HTTP/Headers/Cache-Control) Header könnten das Prefetching blockieren (zum Beispiel `no-cache` oder `no-store`).

> [!NOTE]
> Aufgrund solcher Einschränkungen wird empfohlen, stattdessen die [Speculation Rules API](/de/docs/Web/API/Speculation_Rules_API) für Dokument-Prefetchs zu verwenden, wo sie unterstützt wird.

`<link rel="prefetch">` ist funktional gleichwertig mit einem {{domxref("Window/fetch", "fetch()")}} Aufruf, bei dem die Option `priority: "low"` gesetzt ist, außer dass ersterer im Allgemeinen eine noch niedrigere Priorität hat und auf der Anforderung ein [`Sec-Purpose: prefetch`](/de/docs/Web/HTTP/Headers/Sec-Purpose) Header gesetzt wird. Beachten Sie, dass Browser im Allgemeinen Prefetch-Ressourcen eine niedrigere Priorität als Preload-Ressourcen geben werden (zum Beispiel angefordert via [`<link rel="preload">`](/de/docs/Web/HTML/Attributes/rel/preload)) — die aktuelle Seite ist wichtiger als die nächste.

Die Fetch-Anfrage für eine `prefetch` Operation führt zu einer HTTP-Anfrage, die den HTTP-Header [`Sec-Purpose: prefetch`](/de/docs/Web/HTTP/Headers/Sec-Purpose) enthält. Ein Server könnte diesen Header verwenden, um die Cache-Timeouts für die Ressourcen zu ändern oder eine spezielle Behandlung durchzuführen.
Die Anfrage wird auch den {{HTTPHeader("Sec-Fetch-Dest")}} Header mit dem Wert `empty` enthalten.

Der {{HTTPHeader("Accept")}} Header in der Anfrage wird dem Wert für normale Navigationsanfragen entsprechen. Dies ermöglicht es dem Browser, die passenden zwischengespeicherten Ressourcen nach der Navigation zu finden.

## Beispiele

### Einfaches Prefetch

```js
<link rel="prefetch" href="main.js" />
```

### Navigations- und Subressourcen-Prefetches

Prefetching kann verwendet werden, um sowohl HTML als auch Subressourcen für eine mögliche nächste Navigation abzurufen. Ein häufiges Anwendungsbeispiel ist eine einfache Website-Landingpage, die mehr "schwergewichtige" Ressourcen für den Rest der Seite abruft.

```html
<link rel="prefetch" href="/app/style.css" />
<link rel="prefetch" href="/landing-page" />
```

### Die Auswirkungen der Cache-Partitionierung

Viele Browser implementieren jetzt eine Form von [Cache-Partitionierung](https://developer.chrome.com/blog/http-cache-partitioning), die `<link rel="prefetch">` nutzlos für Ressourcen macht, die für die Verwendung durch verschiedene Top-Level-Seiten vorgesehen sind. Dies schließt das Hauptdokument ein, wenn site-übergreifend navigiert wird. Zum Beispiel wäre das folgende Prefetch:

```html
<link rel="prefetch" href="https://news.example/article" />
```

Nicht von `https://aggregator.example/` aus zugänglich.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Spekulatives Laden](/de/docs/Web/Performance/Speculative_loading) für einen Vergleich von `<link rel="prefetch">` und anderen ähnlichen Leistungsverbesserungsfunktionen.
