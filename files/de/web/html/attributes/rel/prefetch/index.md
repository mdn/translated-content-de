---
title: rel=prefetch
slug: Web/HTML/Attributes/rel/prefetch
l10n:
  sourceCommit: 31ff21cf5f083a3258fc04267d54b1fb72224ff6
---

{{HTMLSidebar}}

Das **`prefetch`** Schlüsselwort für das [`rel`](/de/docs/Web/HTML/Element/link#rel) Attribut des {{HTMLElement("link")}} Elements gibt Browsern einen Hinweis, dass der Benutzer die Zielressource wahrscheinlich für zukünftige Navigationen benötigen wird. Somit kann der Browser die Benutzererfahrung wahrscheinlich verbessern, indem er die Ressource vorbeugend abruft und zwischenspeichert. `<link rel="prefetch">` wird für Navigationen auf derselben Website oder für Unterressourcen verwendet, die von Seiten derselben Website genutzt werden.

Das Ergebnis wird im HTTP-Cache auf der Festplatte gespeichert. Aufgrund dieser Tatsache ist es nützlich, Unterressourcen vorab abzurufen, selbst wenn sie auf der aktuellen Seite nicht verwendet werden. Sie könnten es auch verwenden, um das nächste Dokument, das der Benutzer wahrscheinlich auf der Website besuchen wird, vorab abzurufen. Allerdings müssen Sie daher mit Headern vorsichtig sein — zum Beispiel könnten bestimmte [Cache-Control](/de/docs/Web/HTTP/Headers/Cache-Control) Header das Prefetching blockieren (wie `no-cache` oder `no-store`).

> [!NOTE]
> Aufgrund solcher Einschränkungen wird empfohlen, stattdessen die [Speculation Rules API](/de/docs/Web/API/Speculation_Rules_API) für Dokumenten-Prefetches zu verwenden, wo sie unterstützt wird.

`<link rel="prefetch">` ist funktionell äquivalent zu einem [`fetch()`](/de/docs/Web/API/Window/fetch)-Aufruf mit einer `priority: "low"` Option, außer dass ersteres generell eine noch niedrigere Priorität hat und es einen [`Sec-Purpose: prefetch`](/de/docs/Web/HTTP/Headers/Sec-Purpose) Header auf der Anfrage gesetzt hat. Beachten Sie, dass Browser im Allgemeinen Prefetch-Ressourcen eine niedrigere Priorität geben als Preload-Ressourcen (z.B. angefordert über [`<link rel="preload">`](/de/docs/Web/HTML/Attributes/rel/preload)) — die aktuelle Seite ist wichtiger als die nächste.

Die Fetch-Anfrage für einen `prefetch`-Vorgang resultiert in einer HTTP-Anfrage, die den HTTP-Header [`Sec-Purpose: prefetch`](/de/docs/Web/HTTP/Headers/Sec-Purpose) enthält. Ein Server könnte diesen Header verwenden, um die Cache-Timeouts für die Ressourcen zu ändern oder andere spezielle Behandlungen vorzunehmen. Die Anfrage wird auch den {{HTTPHeader("Sec-Fetch-Dest")}} Header mit dem Wert `empty` enthalten.

Der {{HTTPHeader("Accept")}} Header in der Anfrage wird den Wert verwenden, der für normale Navigationsanfragen verwendet wird. Dadurch kann der Browser die übereinstimmenden zwischengespeicherten Ressourcen nach der Navigation finden.

## Beispiele

### Einfaches Prefetch

```js
<link rel="prefetch" href="main.js" />
```

### Navigation und Unterressourcen-Prefetches

Prefetching kann verwendet werden, um sowohl HTML als auch Unterressourcen für eine mögliche nächste Navigation abzurufen. Ein häufiger Anwendungsfall ist, eine einfache Einstiegsseite einer Website zu haben, die "schwerere" Ressourcen abruft, die vom Rest der Website verwendet werden.

```html
<link rel="prefetch" href="/app/style.css" />
<link rel="prefetch" href="/landing-page" />
```

### Die Auswirkungen der Cache-Partitionierung

Viele Browser implementieren jetzt eine Form der [Cache-Partitionierung](https://developer.chrome.com/blog/http-cache-partitioning), die `<link rel="prefetch">` für Ressourcen nutzlos macht, die für die Verwendung durch verschiedene Top-Level-Sites vorgesehen sind. Dies schließt das Hauptdokument beim Navigieren über verschiedene Seiten ein. Zum Beispiel wäre das folgende Prefetch:

```html
<link rel="prefetch" href="https://news.example/article" />
```

nicht zugänglich von `https://aggregator.example/`.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Spekulatives Laden](/de/docs/Web/Performance/Guides/Speculative_loading) für einen Vergleich von `<link rel="prefetch">` und anderen ähnlichen Leistungsverbesserungsfunktionen.
