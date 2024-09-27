---
title: rel=prefetch
slug: Web/HTML/Attributes/rel/prefetch
l10n:
  sourceCommit: cb132bc83b660e51be8959de5336c00b08030104
---

{{HTMLSidebar}}

Das **`prefetch`** Schlüsselwort für das [`rel`](/de/docs/Web/HTML/Element/link#rel)-Attribut des {{HTMLElement("link")}}-Elements gibt Browsern einen Hinweis darauf, dass der Benutzer die Zielressource wahrscheinlich für zukünftige Navigationen benötigt. Daher kann der Browser die Benutzererfahrung möglicherweise verbessern, indem er die Ressource vorab abruft und zwischenspeichert. `<link rel="prefetch">` wird für Navigationen auf derselben Seite oder für Teilressourcen verwendet, die von Seiten derselben Website genutzt werden.

Das Ergebnis wird im HTTP-Cache auf der Festplatte gespeichert. Aufgrund dessen ist es nützlich für das Vorababrufen von Teilressourcen, auch wenn diese nicht von der aktuellen Seite verwendet werden. Sie könnten es auch verwenden, um das nächste Dokument, das der Benutzer wahrscheinlich auf der Website besuchen wird, vorab abzurufen. Dabei müssen Sie jedoch Vorsicht bei Headern walten lassen – beispielsweise könnten bestimmte [Cache-Control](/de/docs/Web/HTTP/Headers/Cache-Control)-Header das Vorababrufen blockieren (wie `no-cache` oder `no-store`).

> [!NOTE]
> Aufgrund solcher Einschränkungen wird empfohlen, stattdessen die [Speculation Rules API](/de/docs/Web/API/Speculation_Rules_API) für Dokumenten-Vorababrufe zu verwenden, wo sie unterstützt wird.

`<link rel="prefetch">` ist funktional äquivalent zu einem [`fetch()`](/de/docs/Web/API/Window/fetch)-Aufruf mit der Option `priority: "low"`, außer dass ersteres typischerweise eine noch geringere Priorität hat und es wird ein [`Sec-Purpose: prefetch`](/de/docs/Web/HTTP/Headers/Sec-Purpose)-Header in der Anfrage gesetzt. Beachten Sie, dass Browser im Allgemeinen den Vorababruf-Ressourcen eine niedrigere Priorität zuweisen als Preload-Ressourcen (z.B. angefordert über [`<link rel="preload">`](/de/docs/Web/HTML/Attributes/rel/preload)) – die aktuelle Seite ist wichtiger als die nächste.

Die Fetch-Anfrage für eine `prefetch`-Operation führt zu einer HTTP-Anfrage, die den HTTP-Header [`Sec-Purpose: prefetch`](/de/docs/Web/HTTP/Headers/Sec-Purpose) enthält. Ein Server könnte diesen Header verwenden, um die Cache-Timeouts für die Ressourcen zu ändern oder andere spezielle Handhabungen durchzuführen. Die Anfrage enthält auch den {{HTTPHeader("Sec-Fetch-Dest")}}-Header mit dem Wert auf `empty` gesetzt.

Der {{HTTPHeader("Accept")}}-Header in der Anfrage wird den Wert verwenden, der auch für normale Navigationsanfragen verwendet wird. Dies ermöglicht dem Browser, die passenden zwischengespeicherten Ressourcen nach der Navigation zu finden.

## Beispiele

### Basisvorababruf

```js
<link rel="prefetch" href="main.js" />
```

### Navigation und Vorababrufe von Teilressourcen

Vorababrufe können verwendet werden, um sowohl HTML als auch Teilressourcen für eine mögliche nächste Navigation abzurufen. Ein häufiges Anwendungsbeispiel ist eine einfache Einstiegsseite einer Website, die mehr "schwergewichtige" Ressourcen abruft, die vom Rest der Website verwendet werden.

```html
<link rel="prefetch" href="/app/style.css" />
<link rel="prefetch" href="/landing-page" />
```

### Die Auswirkungen von Cache-Partitionierung

Viele Browser implementieren jetzt eine Form der [Cache-Partitionierung](https://developer.chrome.com/blog/http-cache-partitioning), die `<link rel="prefetch">` unbrauchbar für Ressourcen macht, die für die Nutzung durch verschiedene Top-Level-Sites vorgesehen sind. Dies schließt das Hauptdokument bei der Navigation zwischen Websites ein. Zum Beispiel wäre der folgende Vorababruf:

```html
<link rel="prefetch" href="https://news.example/article" />
```

von `https://aggregator.example/` nicht zugänglich.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Speculative loading](/de/docs/Web/Performance/Speculative_loading) für einen Vergleich von `<link rel="prefetch">` und anderen ähnlichen Leistungsverbesserungsfunktionen.
