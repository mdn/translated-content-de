---
title: rel=prefetch
slug: Web/HTML/Attributes/rel/prefetch
l10n:
  sourceCommit: c9dfe0dcc81a7414922637600bf318156bf83387
---

{{HTMLSidebar}}

Das **`prefetch`**-Schlüsselwort für das [`rel`](/de/docs/Web/HTML/Element/link#rel)-Attribut des {{HTMLElement("link")}}-Elements bietet den Browsern einen Hinweis darauf, dass der Benutzer die Zielressource wahrscheinlich für zukünftige Navigationen benötigen wird. Daher kann der Browser die Benutzererfahrung möglicherweise verbessern, indem er die Ressource vorsorglich abruft und zwischenspeichert. `<link rel="prefetch">` wird für gleichseitige Navigationsressourcen oder für Subressourcen verwendet, die von gleichseitigen Seiten genutzt werden.

Das Ergebnis wird im HTTP-Cache auf der Festplatte gespeichert. Aus diesem Grund ist es nützlich, Subressourcen vorab abzurufen, selbst wenn sie von der aktuellen Seite nicht verwendet werden. Sie können es auch verwenden, um das nächste Dokument vorab abzurufen, das der Benutzer wahrscheinlich auf der Website besuchen wird. Sie müssen jedoch vorsichtig mit Headern sein — zum Beispiel könnten bestimmte [Cache-Control](/de/docs/Web/HTTP/Headers/Cache-Control)-Header das Prefetching blockieren (z.B. `no-cache` oder `no-store`).

> [!NOTE]
> Aufgrund solcher Einschränkungen wird empfohlen, stattdessen die [Speculation Rules API](/de/docs/Web/API/Speculation_Rules_API) für Dokument-Prefetches zu verwenden, wo sie unterstützt wird.

`<link rel="prefetch">` ist funktional äquivalent zu einem [`fetch()`](/de/docs/Web/API/Window/fetch)-Aufruf mit der Option `priority: "low"`, außer dass Ersteres allgemein eine noch niedrigere Priorität hat und einen [`Sec-Purpose: prefetch`](/de/docs/Web/HTTP/Headers/Sec-Purpose)-Header auf die Anfrage gesetzt hat. Beachten Sie, dass Browser im Allgemeinen Prefetch-Ressourcen eine niedrigere Priorität als Preload-Ressourcen geben (z.B. angefordert über [`<link rel="preload">`](/de/docs/Web/HTML/Attributes/rel/preload)) — die aktuelle Seite ist wichtiger als die nächste.

Die Abrufanfrage für eine `prefetch`-Operation führt zu einer HTTP-Anfrage, die den HTTP-Header [`Sec-Purpose: prefetch`](/de/docs/Web/HTTP/Headers/Sec-Purpose) enthält. Ein Server könnte diesen Header verwenden, um die Cache-Timeouts für die Ressourcen zu ändern oder andere spezielle Behandlungen vorzunehmen.
Die Anfrage wird auch den {{HTTPHeader("Sec-Fetch-Dest")}}-Header mit dem Wert `empty` enthalten.

Der {{HTTPHeader("Accept")}}-Header in der Anfrage wird den für normale Navigationsanfragen verwendeten Wert übernehmen. Dies ermöglicht es dem Browser, die übereinstimmenden zwischengespeicherten Ressourcen nach der Navigation zu finden.

## Beispiele

### Grundlegendes Prefetch

```js
<link rel="prefetch" href="main.js" />
```

### Navigation und Subresource-Prefetches

Prefetching kann verwendet werden, um sowohl HTML als auch Subressourcen für eine mögliche nächste Navigation abzurufen. Ein häufiges Anwendungsbeispiel ist eine Website-Startseite, die "schwergewichtigere" Ressourcen abruft, die vom Rest der Website verwendet werden.

```html
<link rel="prefetch" href="/app/style.css" />
<link rel="prefetch" href="/landing-page" />
```

### Die Auswirkungen der Cache-Partitionierung

Viele Browser implementieren jetzt eine Form der [Cache-Partitionierung](https://developer.chrome.com/blog/http-cache-partitioning), die `<link rel="prefetch">` für Ressourcen, die für die Verwendung durch verschiedene Top-Level-Seiten bestimmt sind, nutzlos macht. Dies schließt das Hauptdokument beim seitenübergreifenden Navigieren ein. Zum Beispiel wäre das folgende Prefetch:

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
