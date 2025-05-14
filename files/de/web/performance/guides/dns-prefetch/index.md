---
title: Verwendung von dns-prefetch
slug: Web/Performance/Guides/dns-prefetch
l10n:
  sourceCommit: e488eba036b2fee56444fd579c3759ef45ff2ca8
---

**`DNS-prefetch`** ist ein Versuch, Domänennamen aufzulösen, bevor Ressourcen angefordert werden. Das könnte eine Datei sein, die später geladen wird, oder ein Linkziel, das ein Benutzer zu folgen versucht.

## Warum dns-prefetch verwenden?

Wenn ein Browser eine Ressource von einem (Drittanbieter-)Server anfordert, muss der Domänenname dieses [cross-origin](/de/docs/Web/HTTP/Guides/CORS) zunächst in eine IP-Adresse aufgelöst werden, bevor der Browser die Anfrage stellen kann. Dieser Prozess wird als DNS-Auflösung bezeichnet. Obwohl DNS-Caching dazu beitragen kann, diese Latenz zu reduzieren, kann die DNS-Auflösung signifikante Latenz zu Anfragen hinzufügen. Für Websites, die Verbindungen zu vielen Drittanbietern öffnen, kann diese Latenz die Ladeleistung erheblich reduzieren.

`dns-prefetch` hilft Entwicklern, die Latenz der DNS-Resolution zu maskieren. Das [HTML `<link>`-Element](/de/docs/Web/HTML/Reference/Elements/link) bietet diese Funktionalität mittels eines `rel`-Attributwerts von `dns-prefetch`. Die [cross-origin](/de/docs/Web/HTTP/Guides/CORS) Domäne wird dann im [href-Attribut](/de/docs/Web/HTML/Reference/Attributes) angegeben:

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
    <!-- and all other head elements -->
  </head>
  <body>
    <!-- your page content -->
  </body>
</html>
```

Sie sollten `dns-prefetch` Hinweise im [`<head>`-Element](/de/docs/Web/HTML/Reference/Elements/head) platzieren, wann immer Ihre Seite Ressourcen auf cross-origin Domänen referenziert, aber es gibt einige Dinge zu beachten.

## Beste Praktiken

Es gibt drei Hauptpunkte zu beachten:

**Erstens** ist `dns-prefetch` nur effektiv für DNS-Anfragen auf [cross-origin](/de/docs/Web/HTTP/Guides/CORS) Domänen, vermeiden Sie also dessen Verwendung auf Ihrer eigenen Seite oder Domäne. Dies liegt daran, dass die IP-Adresse hinter der Domäne Ihrer Seite bereits aufgelöst wurde, wenn der Browser den Hinweis sieht.

**Zweitens** ist es auch möglich, `dns-prefetch` (und andere Ressourcenhinweise) als [HTTP-Header](/de/docs/Web/HTTP/Reference/Headers) zu spezifizieren, indem das [HTTP Link-Feld](/de/docs/Web/HTTP/Reference/Headers/Link) verwendet wird:

```http
Link: <https://fonts.googleapis.com/>; rel=dns-prefetch
```

**Drittens**, während `dns-prefetch` nur eine DNS-Abfrage durchführt, stellt [`preconnect`](/de/docs/Web/HTML/Reference/Attributes/rel/preconnect) eine Verbindung zu einem Server her. Dieser Prozess umfasst sowohl die DNS-Auflösung, als auch das Herstellen der TCP-Verbindung und das Durchführen des {{Glossary("TLS", "TLS")}} Handshakes—wenn eine Seite über HTTPS bereitgestellt wird. Die Verwendung von `preconnect` bietet die Möglichkeit, die wahrgenommene Latenz von [cross-origin Anfragen](/de/docs/Web/HTTP/Guides/CORS) weiter zu verringern. Sie können es als [HTTP-Header](/de/docs/Web/HTTP/Reference/Headers) verwenden, indem das [HTTP Link-Feld](/de/docs/Web/HTTP/Reference/Headers/Link) benutzt wird:

```http
Link: <https://fonts.googleapis.com/>; rel=preconnect
```

oder über das [HTML `<link>`-Element](/de/docs/Web/HTML/Reference/Elements/link):

```html
<link rel="preconnect" href="https://fonts.googleapis.com/" crossorigin />
```

> [!NOTE]
> Wenn eine Seite Verbindungen zu vielen Drittanbieter-Domänen herstellen muss, ist das Voranschließen aller kontraproduktiv. Der `preconnect` Hinweis ist am besten nur für die kritischsten Verbindungen geeignet. Für die anderen verwenden Sie einfach `<link rel="dns-prefetch">`, um Zeit beim ersten Schritt zu sparen — der DNS-Abfrage.

Die Logik hinter der Kombination dieser Hinweise besteht darin, dass die Unterstützung für dns-prefetch besser ist als die Unterstützung für preconnect. Browser, die preconnect nicht unterstützen, profitieren dennoch, indem sie auf dns-prefetch zurückfallen. Da dies ein HTML-Feature ist, ist es sehr fehlertolerant. Wenn ein nicht unterstützender Browser einen dns-prefetch Hinweis oder einen anderen Ressourcenhinweis trifft, wird Ihre Seite nicht kaputt gehen. Sie erhalten nur nicht die damit verbundenen Vorteile.

Einige Ressourcen, wie Schriftarten, werden im anonymen Modus geladen. In solchen Fällen sollten Sie das [crossorigin](/de/docs/Web/HTML/Reference/Attributes/crossorigin) Attribut mit dem preconnect Hinweis setzen. Wenn Sie es auslassen, wird der Browser nur die DNS-Abfrage ausführen.

## Siehe auch

- [`<link>`](/de/docs/Web/HTML/Reference/Elements/link)
- [HTML-Attribut: rel](/de/docs/Web/HTML/Reference/Attributes/rel)
- [HTML-Rel-Attribut: preconnect](/de/docs/Web/HTML/Reference/Attributes/rel/preconnect)
- [crossorigin](/de/docs/Web/HTML/Reference/Attributes/crossorigin)
- [Cross-Origin Resource Sharing (CORS)](/de/docs/Web/HTTP/Guides/CORS)
- [HTTP-Header](/de/docs/Web/HTTP/Reference/Headers)
- [HTTP-Header Link](/de/docs/Web/HTTP/Reference/Headers/Link)
