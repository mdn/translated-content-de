---
title: rel=prefetch
slug: Web/HTML/Reference/Attributes/rel/prefetch
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{HTMLSidebar}}

Das **`prefetch`**-Schlüsselwort für das [`rel`](/de/docs/Web/HTML/Reference/Elements/link#rel)-Attribut des {{HTMLElement("link")}}-Elements gibt Browsern einen Hinweis darauf, dass der Benutzer die Zielressource wahrscheinlich für zukünftige Navigationen benötigt. Daher kann der Browser die Benutzererfahrung verbessern, indem er die Ressource vorab abruft und zwischenspeichert. `<link rel="prefetch">` wird für Navigationen innerhalb derselben Website oder für Unterressourcen verwendet, die von Seiten derselben Website genutzt werden.

Das Ergebnis wird im HTTP-Cache auf der Festplatte gespeichert. Deshalb ist es nützlich, Unterressourcen vorzuholen, selbst wenn sie nicht auf der aktuellen Seite verwendet werden. Sie könnten es auch verwenden, um das nächste Dokument vorzuladen, das der Benutzer wahrscheinlich auf der Website besuchen wird. Aus diesem Grund müssen Sie jedoch vorsichtig mit Headern umgehen — zum Beispiel könnten bestimmte [Cache-Control](/de/docs/Web/HTTP/Reference/Headers/Cache-Control)-Header das Vorladen blockieren (zum Beispiel `no-cache` oder `no-store`).

> [!NOTE]
> Aufgrund solcher Einschränkungen wird empfohlen, stattdessen die [Speculation Rules API](/de/docs/Web/API/Speculation_Rules_API) für Dokument-Vorladen zu verwenden, wo sie unterstützt wird.

`<link rel="prefetch">` ist funktional äquivalent zu einem [`fetch()`](/de/docs/Web/API/Window/fetch) Aufruf mit der Option `priority: "low"`, außer dass der erstere generell eine noch niedrigere Priorität hat und einen [`Sec-Purpose: prefetch`](/de/docs/Web/HTTP/Reference/Headers/Sec-Purpose)-Header in der Anfrage setzt. Beachten Sie, dass Browser im Allgemeinen Prefetch-Ressourcen eine niedrigere Priorität einräumen als Preload-Ressourcen (z.B. angefordert via [`<link rel="preload">`](/de/docs/Web/HTML/Reference/Attributes/rel/preload)) — die aktuelle Seite ist wichtiger als die nächste.

Die Fetch-Anfrage für eine `prefetch`-Operation führt zu einer HTTP-Anfrage, die den HTTP-Header [`Sec-Purpose: prefetch`](/de/docs/Web/HTTP/Reference/Headers/Sec-Purpose) enthält. Ein Server könnte diesen Header verwenden, um die Cache-Zeitüberschreitungen für die Ressourcen zu ändern oder andere spezielle Handlungen vorzunehmen.
Die Anfrage wird auch den {{HTTPHeader("Sec-Fetch-Dest")}}-Header mit dem Wert `empty` enthalten.

Der {{HTTPHeader("Accept")}}-Header in der Anfrage wird den gleichen Wert wie für normale Navigationsanfragen enthalten. Dies ermöglicht es dem Browser, die passenden, zwischengespeicherten Ressourcen nach der Navigation zu finden.

## Beispiele

### Einfaches Prefetch

```js
<link rel="prefetch" href="main.js" />
```

### Navigation und Unterressourcen-Prefetches

Prefetching kann verwendet werden, um sowohl HTML als auch Unterressourcen für eine mögliche nächste Navigation abzurufen. Ein häufiges Anwendungsbeispiel ist eine Website-Startseite, die „schwergewichtigere“ Ressourcen abruft, die vom Rest der Website verwendet werden.

```html
<link rel="prefetch" href="/app/style.css" />
<link rel="prefetch" href="/landing-page" />
```

### Die Auswirkungen der Cache-Partitionierung

Viele Browser implementieren jetzt eine Form der [Cache-Partitionierung](https://developer.chrome.com/blog/http-cache-partitioning), die `<link rel="prefetch">` für Ressourcen, die für die Nutzung durch verschiedene Top-Level-Websites bestimmt sind, nutzlos macht. Dies schließt das Hauptdokument bei einer Cross-Site-Navigation ein. So würde zum Beispiel der folgende Prefetch:

```html
<link rel="prefetch" href="https://news.example/article" />
```

nicht von `https://aggregator.example/` aus zugänglich sein.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Spekulatives Laden](/de/docs/Web/Performance/Guides/Speculative_loading) für einen Vergleich von `<link rel="prefetch">` und anderen ähnlichen Leistungsverbesserungsfunktionen.
