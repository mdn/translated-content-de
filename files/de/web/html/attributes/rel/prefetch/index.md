---
title: rel=prefetch
slug: Web/HTML/Attributes/rel/prefetch
l10n:
  sourceCommit: cb132bc83b660e51be8959de5336c00b08030104
---

{{HTMLSidebar}}

Das **`prefetch`** Schlüsselwort für das [`rel`](/de/docs/Web/HTML/Element/link#rel) Attribut des {{HTMLElement("link")}} Elements gibt Browsern einen Hinweis darauf, dass der Benutzer die Zielressource wahrscheinlich für zukünftige Navigationen benötigt. Der Browser kann die Benutzererfahrung verbessern, indem er die Ressource im Voraus abruft und zwischenspeichert. `<link rel="prefetch">` wird für Navigationen auf derselben Seite oder für Teilressourcen verwendet, die von Seiten derselben Seite genutzt werden.

Das Ergebnis wird im HTTP-Cache auf der Festplatte gespeichert. Aus diesem Grund ist es nützlich, Teilressourcen vorab abzurufen, selbst wenn sie nicht auf der aktuellen Seite verwendet werden. Sie könnten es auch verwenden, um das nächste Dokument vorzubestellen, das der Benutzer wahrscheinlich auf der Website besuchen wird. Sie müssen jedoch bei den Headern vorsichtig sein - bestimmte [Cache-Control](/de/docs/Web/HTTP/Headers/Cache-Control) Header könnten das Vorabladen blockieren (zum Beispiel `no-cache` oder `no-store`).

> [!NOTE]
> Aufgrund solcher Einschränkungen wird empfohlen, stattdessen die [Speculation Rules API](/de/docs/Web/API/Speculation_Rules_API) für das Vorabladen von Dokumenten zu verwenden, wo sie unterstützt wird.

`<link rel="prefetch">` ist funktional äquivalent zu einem [`fetch()`](/de/docs/Web/API/Window/fetch) Aufruf mit einer `priority: "low"` Option, außer dass ersteres im Allgemeinen eine noch niedrigere Priorität hat und ein [`Sec-Purpose: prefetch`](/de/docs/Web/HTTP/Headers/Sec-Purpose) Header in der Anfrage gesetzt ist. Beachten Sie, dass Browser im Allgemeinen Vorabladeressourcen eine niedrigere Priorität als Preload-Ressourcen geben (z.B. angefordert über [`<link rel="preload">`](/de/docs/Web/HTML/Attributes/rel/preload)) — die aktuelle Seite ist wichtiger als die nächste.

Der Abruf für eine `prefetch` Operation führt zu einer HTTP-Anfrage, die den HTTP-Header [`Sec-Purpose: prefetch`](/de/docs/Web/HTTP/Headers/Sec-Purpose) enthält. Ein Server könnte diesen Header verwenden, um die Cache-Timeouts für die Ressourcen zu ändern oder andere spezielle Behandlungen durchzuführen.
Die Anfrage wird auch den {{HTTPHeader("Sec-Fetch-Dest")}} Header mit dem Wert `empty` enthalten.

Der {{HTTPHeader("Accept")}} Header in der Anfrage entspricht dem Wert, der für normale Navigationsanfragen verwendet wird. Dies ermöglicht es dem Browser, die passenden zwischengespeicherten Ressourcen nach der Navigation zu finden.

## Beispiele

### Einfaches Prefetching

```js
<link rel="prefetch" href="main.js" />
```

### Navigation und Teilressourcen-Prefetching

Das Vorabladen kann verwendet werden, um sowohl HTML als auch Teilressourcen für eine mögliche nächste Navigation abzurufen. Ein häufiger Anwendungsfall ist eine einfache Website-Landingpage, die schwerere Ressourcen vorlädt, die vom Rest der Seite verwendet werden.

```html
<link rel="prefetch" href="/app/style.css" />
<link rel="prefetch" href="/landing-page" />
```

### Die Auswirkungen der Cache-Partitionierung

Viele Browser implementieren nun eine Form der [Cache-Partitionierung](https://developer.chrome.com/blog/http-cache-partitioning), was `<link rel="prefetch">` für Ressourcen nutzlos macht, die für verschiedene oberste Websites verwendet werden sollen. Dies schließt das Hauptdokument beim siteübergreifenden Navigieren ein. Zum Beispiel wäre das folgende Prefetch:

```html
<link rel="prefetch" href="https://news.example/article" />
```

Von `https://aggregator.example/` nicht zugänglich.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Spekulatives Laden](/de/docs/Web/Performance/Speculative_loading) für einen Vergleich von `<link rel="prefetch">` und anderen ähnlichen Leistungsverbesserungsfunktionen.
