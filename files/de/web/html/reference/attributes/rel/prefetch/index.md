---
title: '`rel="prefetch"` HTML-Attributswert'
short-title: prefetch
slug: Web/HTML/Reference/Attributes/rel/prefetch
l10n:
  sourceCommit: bf5017c389132af39b50106cf1763fa7106e87b4
---

Das **`prefetch`** Schlüsselwort für das [`rel`](/de/docs/Web/HTML/Reference/Elements/link#rel) Attribut des {{HTMLElement("link")}} Elements gibt Browsern einen Hinweis, dass der Benutzer die Zielressource wahrscheinlich für zukünftige Navigationen benötigt. Daher kann der Browser die Benutzererfahrung verbessern, indem er die Ressource im Voraus abruft und zwischenspeichert. `<link rel="prefetch">` wird für gleichseitige Navigationsressourcen oder für Teilressourcen verwendet, die von gleichseitigen Seiten genutzt werden.

Das Ergebnis wird im HTTP-Cache auf der Festplatte gespeichert. Deshalb ist es nützlich für das Prefetching von Teilressourcen, auch wenn sie nicht von der aktuellen Seite verwendet werden. Sie könnten es auch verwenden, um das nächste Dokument vorab abzurufen, das der Benutzer wahrscheinlich auf der Website besuchen wird. Dabei sollten Sie jedoch auf die Header achten – zum Beispiel könnten bestimmte [Cache-Control](/de/docs/Web/HTTP/Reference/Headers/Cache-Control) Header das Prefetching blockieren (wie `no-cache` oder `no-store`).

> [!NOTE]
> Aufgrund solcher Einschränkungen wird empfohlen, stattdessen die [Speculation Rules API](/de/docs/Web/API/Speculation_Rules_API) für Dokument-Prefetches zu verwenden, wo sie unterstützt wird.

`<link rel="prefetch">` ist funktional gleichwertig mit einem [`fetch()`](/de/docs/Web/API/Window/fetch) Aufruf mit der Option `priority: "low"`, außer dass ersteres im Allgemeinen eine noch niedrigere Priorität hat und der Anfrage ein [`Sec-Purpose: prefetch`](/de/docs/Web/HTTP/Reference/Headers/Sec-Purpose) Header hinzugefügt wird. Beachten Sie, dass Browser im Allgemeinen Prefetch-Ressourcen gegenüber Preload-Ressourcen (z. B. angefordert über [`<link rel="preload">`](/de/docs/Web/HTML/Reference/Attributes/rel/preload)) eine niedrigere Priorität zuweisen – die aktuelle Seite ist wichtiger als die nächste.

Die Abrufanfrage für eine `prefetch`-Operation führt zu einer HTTP-Anfrage, die den HTTP-Header [`Sec-Purpose: prefetch`](/de/docs/Web/HTTP/Reference/Headers/Sec-Purpose) enthält. Ein Server könnte diesen Header verwenden, um die Cache-Timeouts für die Ressourcen zu ändern oder andere spezielle Handlungen auszuführen.
Die Anfrage wird außerdem den {{HTTPHeader("Sec-Fetch-Dest")}} Header mit dem Wert `empty` enthalten.

Der {{HTTPHeader("Accept")}} Header in der Anfrage wird den Wert verwenden, der für normale Navigationsanfragen verwendet wird. Dies erlaubt es dem Browser, die passenden zwischengespeicherten Ressourcen nach der Navigation zu finden.

## Beispiele

### Einfaches Prefetch

```js
<link rel="prefetch" href="main.js" />
```

### Navigation und Unterressourcen-Prefetches

Prefetching kann verwendet werden, um sowohl HTML als auch Teilressourcen für eine mögliche nächste Navigation abzurufen. Ein häufiges Anwendungsbeispiel ist eine Website-Startseite, die "schwerere" Ressourcen abruft, die vom Rest der Website verwendet werden.

```html
<link rel="prefetch" href="/app/style.css" />
<link rel="prefetch" href="/landing-page" />
```

### Die Auswirkungen der Cache-Partitionierung

Viele Browser implementieren jetzt eine Form von [Cache-Partitionierung](https://developer.chrome.com/blog/http-cache-partitioning), was `<link rel="prefetch">` für Ressourcen, die für verschiedene Top-Level-Websites verwendet werden sollen, nutzlos macht. Dies schließt das Hauptdokument bei der plattformübergreifenden Navigation ein. Zum Beispiel wäre das folgende Prefetch:

```html
<link rel="prefetch" href="https://news.example/article" />
```

Von `https://aggregator.example/` nicht zugänglich.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Spekulatives Laden](/de/docs/Web/Performance/Guides/Speculative_loading) für einen Vergleich von `<link rel="prefetch">` und anderen ähnlichen Leistungsverbesserungsfunktionen.
