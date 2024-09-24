---
title: Verwendung von dns-prefetch
slug: Web/Performance/dns-prefetch
l10n:
  sourceCommit: 857c6f9e7f1a847e7d3466b0d047159f7b345991
---

{{QuickLinksWithSubPages("Web/Performance")}}

**`DNS-prefetch`** ist ein Versuch, Domänennamen aufzulösen, bevor Ressourcen angefordert werden. Dies könnte eine Datei sein, die später geladen wird, oder ein Linkziel, das ein Benutzer zu erreichen versucht.

## Warum dns-prefetch verwenden?

Wenn ein Browser eine Ressource von einem (dritten) Server anfordert, muss der Domänenname dieser [Cross-Origin](/de/docs/Web/HTTP/CORS) zu einer IP-Adresse aufgelöst werden, bevor der Browser die Anforderung stellen kann. Dieser Prozess ist als DNS-Auflösung bekannt. Während DNS-Caching dazu beitragen kann, diese Latenz zu reduzieren, kann die DNS-Auflösung zu erheblichen Verzögerungen bei Anfragen führen. Bei Websites, die Verbindungen zu vielen Drittanbietern herstellen, kann diese Latenz die Ladeleistung erheblich verringern.

`dns-prefetch` hilft Entwicklern, die Latenz der DNS-Auflösung zu verbergen. Das [HTML `<link>`-Element](/de/docs/Web/HTML/Element/link) bietet diese Funktionalität durch einen Wert des [`rel`-Attributs](/de/docs/Web/HTML/Attributes/rel) von `dns-prefetch`. Die [Cross-Origin](/de/docs/Web/HTTP/CORS) Domäne wird dann im [href-Attribut](/de/docs/Web/HTML/Attributes) angegeben:

## Syntax

```html
<link rel="dns-prefetch" href="https://fonts.googleapis.com/" />
```

## Beispiele

```html
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width,initial-scale=1" />
    <link rel="dns-prefetch" href="https://fonts.googleapis.com/" />
    <!-- und alle anderen Kopfelemente -->
  </head>
  <body>
    <!-- Ihr Seiteninhalt -->
  </body>
</html>
```

Sie sollten `dns-prefetch`-Hinweise in das [`<head>`-Element](/de/docs/Web/HTML/Element/head) einfügen, wann immer Ihre Website Ressourcen auf Cross-Origin-Domänen referenziert, aber es gibt einige Punkte zu beachten.

## Beste Praktiken

Es gibt drei Hauptpunkte zu beachten:

**Erstens**, `dns-prefetch` ist nur effektiv für DNS-Lookups auf [Cross-Origin](/de/docs/Web/HTTP/CORS) Domänen, daher vermeiden Sie es, es auf Ihre eigene Website oder Domain zu verweisen. Das liegt daran, dass die IP hinter der Domäne Ihrer Website bereits aufgelöst sein wird, wenn der Browser den Hinweis sieht.

**Zweitens**, es ist auch möglich, `dns-prefetch` (und andere Ressource-Hinweise) als [HTTP-Header](/de/docs/Web/HTTP/Headers) mittels des [HTTP-Link-Feldes](/de/docs/Web/HTTP/Headers/Link) zu spezifizieren:

```http
Link: <https://fonts.googleapis.com/>; rel=dns-prefetch
```

**Drittens**, während `dns-prefetch` nur einen DNS-Lookup durchführt, stellt [`preconnect`](/de/docs/Web/HTML/Attributes/rel/preconnect) eine Verbindung zu einem Server her. Dieser Prozess umfasst die DNS-Auflösung, das Herstellen der TCP-Verbindung und das Durchführen des [TLS](/de/docs/Glossary/TLS)-Handshakes—wenn eine Seite über HTTPS bereitgestellt wird. Die Verwendung von `preconnect` bietet eine Gelegenheit, die wahrgenommene Latenz von [Cross-Origin-Anfragen](/de/docs/Web/HTTP/CORS) weiter zu reduzieren. Sie können es als [HTTP-Header](/de/docs/Web/HTTP/Headers) mithilfe des [HTTP-Link-Feldes](/de/docs/Web/HTTP/Headers/Link) verwenden:

```http
Link: <https://fonts.googleapis.com/>; rel=preconnect
```

oder über das [HTML `<link>`-Element](/de/docs/Web/HTML/Element/link):

```html
<link rel="preconnect" href="https://fonts.googleapis.com/" crossorigin />
```

> [!NOTE]
> Wenn eine Seite Verbindungen zu vielen Drittanbieter-Domänen herstellen muss, ist es kontraproduktiv, all diese vorzuverbinden. Der `preconnect`-Hinweis wird am besten nur für die entscheidendsten Verbindungen verwendet. Für die anderen verwenden Sie einfach `<link rel="dns-prefetch">`, um Zeit beim ersten Schritt zu sparen — dem DNS-Lookup.

Die Logik hinter dem Pairing dieser Hinweise liegt darin, dass die Unterstützung für dns-prefetch besser ist als die Unterstützung für preconnect. Browser, die preconnect nicht unterstützen, profitieren immer noch von einem zusätzlichen Vorteil, indem sie auf dns-prefetch zurückgreifen. Da dies ein HTML-Feature ist, ist es sehr fehlertolerant. Wenn ein nicht unterstützender Browser auf einen dns-prefetch-Hinweis—oder einen anderen Ressource-Hinweis—trifft, wird Ihre Website nicht beschädigt. Sie erhalten nur nicht die Vorteile, die es bietet.

Einige Ressourcen, wie Schriftarten, werden im anonymen Modus geladen. In solchen Fällen sollten Sie das [crossorigin](/de/docs/Web/HTML/Attributes/crossorigin)-Attribut mit dem preconnect-Hinweis setzen. Wenn Sie es weglassen, führt der Browser nur den DNS-Lookup durch.

## Siehe auch

- [\<link>](/de/docs/Web/HTML/Element/link)
- [HTML-Attribut: rel](/de/docs/Web/HTML/Attributes/rel)
- [HTML-Rel-Attribut: preconnect](/de/docs/Web/HTML/Attributes/rel/preconnect)
- [crossorigin](/de/docs/Web/HTML/Attributes/crossorigin)
- [Cross-Origin Resource Sharing (CORS)](/de/docs/Web/HTTP/CORS)
- [HTTP-Header](/de/docs/Web/HTTP/Headers)
- [HTTP-Header-Link](/de/docs/Web/HTTP/Headers/Link)
