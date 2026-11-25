---
title: HTML-Attributwert `rel="prefetch"`
short-title: prefetch
slug: Web/HTML/Reference/Attributes/rel/prefetch
l10n:
  sourceCommit: ae56a8405f11aec47a12202a4bf122afc7b781ab
---

Das Schlüsselwort **`prefetch`** für das Attribut [`rel`](/de/docs/Web/HTML/Reference/Elements/link#rel) des Elements {{HTMLElement("link")}} gibt Browsern einen Hinweis darauf, dass der Benutzer die Zielressource wahrscheinlich für spätere Navigationen benötigt. Der Browser kann daher die Benutzererfahrung verbessern, indem er die Ressource vorsorglich abruft und zwischenspeichert. `<link rel="prefetch">` wird für Navigationsressourcen derselben Website oder für Unterressourcen verwendet, die von Seiten derselben Website benötigt werden.

Das Ergebnis wird im HTTP-Cache auf der Festplatte gespeichert. Dadurch eignet sich `prefetch` auch für Unterressourcen, die von der aktuellen Seite nicht verwendet werden. Sie können damit außerdem das nächste Dokument vorab abrufen, das der Benutzer auf der Website wahrscheinlich besuchen wird. Allerdings müssen Sie dabei auf Header achten: Bestimmte [Cache-Control](/de/docs/Web/HTTP/Reference/Headers/Cache-Control)-Header wie `no-cache` oder `no-store` können das Vorabrufen verhindern.

> [!NOTE]
> Aufgrund solcher Einschränkungen empfiehlt es sich, für das Vorabrufen von Dokumenten stattdessen die [Speculation Rules API](/de/docs/Web/API/Speculation_Rules_API) zu verwenden, sofern sie unterstützt wird.

`<link rel="prefetch">` entspricht funktional einem Aufruf von [`fetch()`](/de/docs/Web/API/Window/fetch) mit der Option `priority: "low"`. Allerdings hat `prefetch` im Allgemeinen eine noch niedrigere Priorität, und die Anfrage enthält den Header [`Sec-Purpose: prefetch`](/de/docs/Web/HTTP/Reference/Headers/Sec-Purpose). Browser weisen mit `prefetch` abgerufenen Ressourcen im Allgemeinen eine niedrigere Priorität zu als mit `preload` abgerufenen Ressourcen (etwa über [`<link rel="preload">`](/de/docs/Web/HTML/Reference/Attributes/rel/preload)) – die aktuelle Seite ist wichtiger als die nächste.

Eine `prefetch`-Operation löst eine HTTP-Anfrage aus, die den HTTP-Header [`Sec-Purpose: prefetch`](/de/docs/Web/HTTP/Reference/Headers/Sec-Purpose) enthält. Ein Server kann diesen Header verwenden, um die Cache-Gültigkeitsdauer der Ressourcen anzupassen oder sie anderweitig besonders zu behandeln.
Die Anfrage enthält außerdem den Header {{HTTPHeader("Sec-Fetch-Dest")}} mit dem Wert `empty`.

Der Header {{HTTPHeader("Accept")}} in der Anfrage hat denselben Wert wie bei normalen Navigationsanfragen. So kann der Browser nach der Navigation die passenden zwischengespeicherten Ressourcen finden.

## Beispiele

### Einfaches Vorabrufen

```html
<link rel="prefetch" href="main.js" />
```

### Vorabrufen von Navigations- und Unterressourcen

Mit `prefetch` können sowohl HTML-Dokumente als auch Unterressourcen für eine mögliche nächste Navigation vorab abgerufen werden. Ein häufiger Anwendungsfall ist eine Startseite, die ressourcenintensivere Inhalte vorab abruft, die im übrigen Teil der Website verwendet werden.

```html
<link rel="prefetch" href="/app/style.css" />
<link rel="prefetch" href="/landing-page" />
```

### Auswirkungen der Cache-Partitionierung

Viele Browser implementieren inzwischen eine Form der [Cache-Partitionierung](https://developer.chrome.com/blog/http-cache-partitioning). Dadurch ist `<link rel="prefetch">` für Ressourcen nutzlos, die von anderen Websites auf oberster Ebene verwendet werden sollen. Das gilt auch für das Hauptdokument bei einer Navigation zu einer anderen Website. Der folgende vorab abgerufene Inhalt wäre beispielsweise von `https://aggregator.example/` aus nicht zugänglich:

```html
<link rel="prefetch" href="https://news.example/article" />
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Spekulatives Laden](/de/docs/Web/Performance/Guides/Speculative_loading) für einen Vergleich von `<link rel="prefetch">` mit ähnlichen Funktionen zur Leistungsverbesserung.
