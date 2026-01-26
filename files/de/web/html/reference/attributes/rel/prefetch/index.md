---
title: rel="prefetch"
slug: Web/HTML/Reference/Attributes/rel/prefetch
l10n:
  sourceCommit: 8799c26ef12a653ea2ab7d22a958fb46a649ca60
---

Das **`prefetch`** Schlüsselwort für das [`rel`](/de/docs/Web/HTML/Reference/Elements/link#rel)-Attribut des {{HTMLElement("link")}}-Elements bietet einen Hinweis für Browser, dass der Benutzer die Zielressource wahrscheinlich für zukünftige Navigationen benötigt. Daher kann der Browser die Benutzererfahrung wahrscheinlich verbessern, indem er die Ressource vorab abruft und zwischenspeichert. `<link rel="prefetch">` wird für Navigationen innerhalb derselben Seite oder für Unterressourcen, die von Seiten derselben Site verwendet werden, verwendet.

Das Ergebnis wird im HTTP-Cache auf der Festplatte gespeichert. Daher ist es nützlich, Unterressourcen vorab abzurufen, auch wenn sie auf der aktuellen Seite nicht verwendet werden. Sie könnten es auch verwenden, um das nächste Dokument vorab abzurufen, das der Benutzer wahrscheinlich auf der Site besuchen wird. Allerdings müssen Sie vorsichtig mit Headern sein — bestimmte [Cache-Control](/de/docs/Web/HTTP/Reference/Headers/Cache-Control)-Header könnten das Vorabrufen blockieren (z. B. `no-cache` oder `no-store`).

> [!NOTE]
> Aufgrund solcher Einschränkungen wird empfohlen, die [Speculation Rules API](/de/docs/Web/API/Speculation_Rules_API) für Dokumentvorabrufe zu verwenden, wo sie unterstützt wird.

`<link rel="prefetch">` ist funktional äquivalent zu einem [`fetch()`](/de/docs/Web/API/Window/fetch)-Aufruf mit einer `priority: "low"`-Option, wobei ersteres generell eine noch niedrigere Priorität hat und einen [`Sec-Purpose: prefetch`](/de/docs/Web/HTTP/Reference/Headers/Sec-Purpose)-Header bei der Anfrage hat. Beachten Sie, dass Browser im Allgemeinen Vorabruf-Ressourcen eine niedrigere Priorität geben als Vorlade-Ressourcen (z. B. angefordert über [`<link rel="preload">`](/de/docs/Web/HTML/Reference/Attributes/rel/preload)) — die aktuelle Seite ist wichtiger als die nächste.

Der Abruf für eine `prefetch`-Operation führt zu einer HTTP-Anfrage, die den HTTP-Header [`Sec-Purpose: prefetch`](/de/docs/Web/HTTP/Reference/Headers/Sec-Purpose) enthält. Ein Server könnte diesen Header verwenden, um die Cache-Timeouts für die Ressourcen zu ändern oder andere spezielle Handhabungen durchzuführen.
Die Anfrage enthält auch den {{HTTPHeader("Sec-Fetch-Dest")}}-Header mit dem Wert `empty`.

Der {{HTTPHeader("Accept")}}-Header in der Anfrage entspricht dem Wert, der für normale Navigationsanfragen verwendet wird. Dies ermöglicht es dem Browser, die passenden zwischengespeicherten Ressourcen bei der folgenden Navigation zu finden.

## Beispiele

### Grundlegendes Prefetch

```js
<link rel="prefetch" href="main.js" />
```

### Navigation und Unterressourcen-Prefetches

Vorabruf kann verwendet werden, um sowohl HTML als auch Unterressourcen für eine mögliche nächste Navigation abzurufen. Ein häufiges Anwendungsbeispiel ist eine Einstiegsseite einer Website, die schwergewichtigere Ressourcen der restlichen Site abruft.

```html
<link rel="prefetch" href="/app/style.css" />
<link rel="prefetch" href="/landing-page" />
```

### Die Auswirkungen der Cache-Partitionierung

Viele Browser implementieren jetzt eine Form der [Cache-Partitionierung](https://developer.chrome.com/blog/http-cache-partitioning), die `<link rel="prefetch">` für Ressourcen nutzlos macht, die für die Verwendung durch verschiedene Top-Level-Sites vorgesehen sind. Dies schließt das Hauptdokument beim Navigieren über Websites hinweg ein. Beispielsweise wäre der folgende Vorabruf:

```html
<link rel="prefetch" href="https://news.example/article" />
```

nicht zugänglich von `https://aggregator.example/`.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Spekulatives Laden](/de/docs/Web/Performance/Guides/Speculative_loading) für einen Vergleich von `<link rel="prefetch">` und anderen ähnlichen Leistungsverbesserungsmerkmalen.
