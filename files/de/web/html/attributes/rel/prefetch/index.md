---
title: rel=prefetch
slug: Web/HTML/Attributes/rel/prefetch
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{HTMLSidebar}}

Das **`prefetch`**-Schlüsselwort für das [`rel`](/de/docs/Web/HTML/Element/link#rel)-Attribut des {{HTMLElement("link")}}-Elements bietet Browsern einen Hinweis, dass der Nutzer die Zielressource für zukünftige Navigationen wahrscheinlich benötigen wird. Der Browser kann daher die Benutzererfahrung verbessern, indem er die Ressource proaktiv abruft und zwischenspeichert. `<link rel="prefetch">` wird für Navigationsressourcen derselben Website oder für Unterressourcen verwendet, die von Seiten derselben Website genutzt werden.

Das Ergebnis wird auf der Festplatte im HTTP-Cache gespeichert. Deshalb ist es nützlich, Unterressourcen vorzuholen, auch wenn sie nicht von der aktuellen Seite verwendet werden. Sie könnten es auch nutzen, um das nächste Dokument vorzufolgen, das der Nutzer auf der Website wahrscheinlich besuchen wird. Allerdings müssen Sie daher vorsichtig mit Headern sein – bestimmte [Cache-Control](/de/docs/Web/HTTP/Reference/Headers/Cache-Control)-Header könnten das Vorladen blockieren (zum Beispiel `no-cache` oder `no-store`).

> [!NOTE]
> Aufgrund solcher Einschränkungen wird empfohlen, stattdessen die [Speculation Rules API](/de/docs/Web/API/Speculation_Rules_API) für Dokumentenvorabrufe zu verwenden, wo sie unterstützt wird.

`<link rel="prefetch">` ist funktionell äquivalent zu einem [`fetch()`](/de/docs/Web/API/Window/fetch)-Aufruf mit der Option `priority: "low"`, außer dass ersteres im Allgemeinen eine noch niedrigere Priorität hat und ein [`Sec-Purpose: prefetch`](/de/docs/Web/HTTP/Reference/Headers/Sec-Purpose)-Header auf die Anfrage gesetzt wird. Beachten Sie, dass Browser im Allgemeinen Vorlade-Ressourcen eine höhere Priorität als Vorabruf-Ressourcen geben (z.B. angefordert via [`<link rel="preload">`](/de/docs/Web/HTML/Attributes/rel/preload)) – die aktuelle Seite ist wichtiger als die nächste.

Die Fetch-Anfrage für eine `prefetch`-Operation führt zu einer HTTP-Anfrage, die den HTTP-Header [`Sec-Purpose: prefetch`](/de/docs/Web/HTTP/Reference/Headers/Sec-Purpose) enthält. Ein Server könnte diesen Header verwenden, um die Cache-Zeitüberschreitungen für die Ressourcen zu ändern oder eine andere spezielle Verarbeitung vorzunehmen. Die Anfrage enthält auch den {{HTTPHeader("Sec-Fetch-Dest")}}-Header mit dem Wert `empty`.

Der {{HTTPHeader("Accept")}}-Header in der Anfrage entspricht dem Wert, der für normale Navigationsanfragen verwendet wird. Dies ermöglicht es dem Browser, die passenden zwischengespeicherten Ressourcen nach der Navigation zu finden.

## Beispiele

### Einfaches Prefetch

```js
<link rel="prefetch" href="main.js" />
```

### Navigation und Subressourcen-Prefetches

Prefetching kann verwendet werden, um sowohl HTML als auch Unterressourcen für eine mögliche nächste Navigation abzurufen. Ein häufiges Anwendungsbeispiel ist eine Website-Startseite, die "schwerere" Ressourcen abruft, die vom Rest der Website verwendet werden.

```html
<link rel="prefetch" href="/app/style.css" />
<link rel="prefetch" href="/landing-page" />
```

### Die Auswirkungen von Cache-Partitionierung

Viele Browser implementieren jetzt eine Form der [Cache-Partitionierung](https://developer.chrome.com/blog/http-cache-partitioning), die `<link rel="prefetch">` für Ressourcen nutzlos macht, die für die Nutzung durch verschiedene Top-Level-Websites vorgesehen sind. Dies schließt das Hauptdokument ein, wenn die Navigation über die Website hinausgeht. Zum Beispiel wäre das folgende Prefetch:

```html
<link rel="prefetch" href="https://news.example/article" />
```

von `https://aggregator.example/` aus nicht zugänglich.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Speculative loading](/de/docs/Web/Performance/Guides/Speculative_loading) für einen Vergleich zwischen `<link rel="prefetch">` und anderen ähnlichen Leistungsverbesserungsfunktionen.
