---
title: rel=prefetch
slug: Web/HTML/Reference/Attributes/rel/prefetch
l10n:
  sourceCommit: 0754cd805a8e010d2e3a2a065f634a3bcf358252
---

Das Schlüsselwort **`prefetch`** für das [`rel`](/de/docs/Web/HTML/Reference/Elements/link#rel) Attribut des {{HTMLElement("link")}} Elements gibt Browsern einen Hinweis darauf, dass der Nutzer die Zielressource für zukünftige Navigationen wahrscheinlich benötigen wird. Daher kann der Browser die Benutzererfahrung verbessern, indem er die Ressource vorausschauend abruft und zwischenspeichert. `<link rel="prefetch">` wird für Navigationen innerhalb derselben Seite oder für Unterressourcen verwendet, die auf derselben Seite verwendet werden.

Das Ergebnis wird im HTTP-Cache auf der Festplatte gehalten. Aufgrund dieser Eigenschaft ist es nützlich für das Vorabladen von Unterressourcen, selbst wenn sie von der aktuellen Seite nicht verwendet werden. Sie könnten es auch verwenden, um das nächste Dokument vorzuladen, das der Benutzer wahrscheinlich auf der Website besuchen wird. Dabei müssen Sie jedoch vorsichtig mit Headern sein — zum Beispiel können bestimmte [Cache-Control](/de/docs/Web/HTTP/Reference/Headers/Cache-Control) Header das Vorladen verhindern (zum Beispiel `no-cache` oder `no-store`).

> [!NOTE]
> Aufgrund solcher Einschränkungen wird empfohlen, für das Vorladen von Dokumenten stattdessen die [Speculation Rules API](/de/docs/Web/API/Speculation_Rules_API) zu verwenden, wo diese unterstützt wird.

`<link rel="prefetch">` ist funktional äquivalent zu einem [`fetch()`](/de/docs/Web/API/Window/fetch) Aufruf mit der Option `priority: "low"`, außer dass ersteres in der Regel eine noch niedrigere Priorität hat und ein [`Sec-Purpose: prefetch`](/de/docs/Web/HTTP/Reference/Headers/Sec-Purpose) Header in der Anfrage gesetzt ist. Beachten Sie, dass Browser im Allgemeinen Vorladressourcen eine niedrigere Priorität als vorgeholte (zum Beispiel angefordert über [`<link rel="preload">`](/de/docs/Web/HTML/Reference/Attributes/rel/preload)) geben — die aktuelle Seite ist wichtiger als die nächste.

Die Fetch-Anfrage für einen `prefetch`-Vorgang führt zu einer HTTP-Anfrage, die den HTTP-Header [`Sec-Purpose: prefetch`](/de/docs/Web/HTTP/Reference/Headers/Sec-Purpose) enthält. Ein Server könnte diesen Header verwenden, um die Cache-Timeouts für die Ressourcen zu ändern oder andere spezielle Handhabungen durchzuführen. Die Anfrage enthält auch den Header {{HTTPHeader("Sec-Fetch-Dest")}} mit dem Wert `empty`.

Der {{HTTPHeader("Accept")}} Header in der Anfrage wird mit dem Wert übereinstimmen, der für normale Navigationsanfragen verwendet wird. Dies ermöglicht es dem Browser, die passenden zwischengespeicherten Ressourcen nach der Navigation zu finden.

## Beispiele

### Einfaches Prefetch

```js
<link rel="prefetch" href="main.js" />
```

### Navigation und Subressourcen-Prefetches

Prefetching kann verwendet werden, um sowohl HTML als auch Unterressourcen für eine mögliche nächste Navigation abzurufen. Ein häufiges Anwendungsbeispiel ist eine Einstiegsseite einer Website, die "schwergewichtigere" Ressourcen abruft, die vom Rest der Seite verwendet werden.

```html
<link rel="prefetch" href="/app/style.css" />
<link rel="prefetch" href="/landing-page" />
```

### Die Auswirkungen der Cache-Partitionierung

Viele Browser implementieren jetzt eine Form der [Cache-Partitionierung](https://developer.chrome.com/blog/http-cache-partitioning), was `<link rel="prefetch">` für Ressourcen, die von verschiedenen Top-Level-Sites verwendet werden sollen, unbrauchbar macht. Dies schließt das Hauptdokument bei der Navigation über Websites hinweg ein. Zum Beispiel wäre das folgende Prefetch:

```html
<link rel="prefetch" href="https://news.example/article" />
```

nicht von `https://aggregator.example/` aus zugänglich.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Speculative loading](/de/docs/Web/Performance/Guides/Speculative_loading) für einen Vergleich von `<link rel="prefetch">` und anderen ähnlichen Leistungsverbesserungsfunktionen.
