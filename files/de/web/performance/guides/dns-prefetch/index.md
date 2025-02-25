---
title: Verwenden von dns-prefetch
slug: Web/Performance/Guides/dns-prefetch
l10n:
  sourceCommit: 31ff21cf5f083a3258fc04267d54b1fb72224ff6
---

**`DNS-prefetch`** ist ein Versuch, Domainnamen aufzulösen, bevor Ressourcen angefordert werden. Dies könnte eine später geladene Datei oder ein Linkziel sein, dem ein Benutzer folgen möchte.

## Warum dns-prefetch verwenden?

Wenn ein Browser eine Ressource von einem (dritten) Server anfordert, muss der Domänenname des [Cross-Origin](/de/docs/Web/HTTP/CORS) zu einer IP-Adresse aufgelöst werden, bevor der Browser die Anfrage stellen kann. Dieser Vorgang wird als DNS-Auflösung bezeichnet. Während DNS-Caching helfen kann, diese Latenz zu verringern, kann die DNS-Auflösung erhebliche Latenz zu den Anfragen hinzufügen. Für Websites, die Verbindungen zu vielen Dritten herstellen, kann diese Latenz die Ladeleistung erheblich reduzieren.

`dns-prefetch` hilft Entwicklern, die Latenz der DNS-Auflösung zu verbergen. Das [HTML-`<link>`-Element](/de/docs/Web/HTML/Element/link) bietet diese Funktionalität über einen Wert des [`rel`-Attributes](/de/docs/Web/HTML/Attributes/rel) von `dns-prefetch`. Die [Cross-Origin](/de/docs/Web/HTTP/CORS) Domäne wird dann im [href-Attribut](/de/docs/Web/HTML/Attributes) angegeben:

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

Sie sollten `dns-prefetch`-Hinweise im [`<head>`-Element](/de/docs/Web/HTML/Element/head) platzieren, wann immer Ihre Seite Ressourcen auf Cross-Origin-Domains referenziert, aber es gibt einige Dinge, die Sie beachten sollten.

## Bewährte Praktiken

Es gibt 3 Hauptpunkte, die zu beachten sind:

**Erstens** ist `dns-prefetch` nur für DNS-Abfragen auf [Cross-Origin](/de/docs/Web/HTTP/CORS) Domains effektiv, vermeiden Sie also, es auf Ihre eigene Seite oder Domäne zu richten. Das liegt daran, dass die IP hinter der Domäne Ihrer Seite bereits aufgelöst wurde, bevor der Browser den Hinweis sieht.

**Zweitens** ist es auch möglich, `dns-prefetch` (und andere Ressourcenhinweise) als [HTTP-Header](/de/docs/Web/HTTP/Headers) zu spezifizieren, indem das [HTTP-Link-Feld](/de/docs/Web/HTTP/Headers/Link) verwendet wird:

```http
Link: <https://fonts.googleapis.com/>; rel=dns-prefetch
```

**Drittens**, während `dns-prefetch` nur eine DNS-Abfrage durchführt, stellt [`preconnect`](/de/docs/Web/HTML/Attributes/rel/preconnect) eine Verbindung zu einem Server her. Dieser Prozess umfasst die DNS-Auflösung, sowie die Herstellung der TCP-Verbindung und die Durchführung des {{Glossary("TLS", "TLS")}} Handshakes—wenn eine Seite über HTTPS bereitgestellt wird. Die Verwendung von `preconnect` bietet die Möglichkeit, die wahrgenommene Latenz von [Cross-Origin-Anfragen](/de/docs/Web/HTTP/CORS) weiter zu reduzieren. Sie können es als [HTTP-Header](/de/docs/Web/HTTP/Headers) verwenden, indem das [HTTP-Link-Feld](/de/docs/Web/HTTP/Headers/Link) verwendet wird:

```http
Link: <https://fonts.googleapis.com/>; rel=preconnect
```

oder über das [HTML-`<link>`-Element](/de/docs/Web/HTML/Element/link):

```html
<link rel="preconnect" href="https://fonts.googleapis.com/" crossorigin />
```

> [!NOTE]
> Falls eine Seite Verbindungen zu vielen Drittanbieter-Domains herstellen muss, ist es kontraproduktiv, sie alle vorzuverbinden. Der `preconnect`-Hinweis sollte nur für die wichtigsten Verbindungen verwendet werden. Für die anderen verwenden Sie einfach `<link rel="dns-prefetch">`, um Zeit bei dem ersten Schritt — der DNS-Abfrage — zu sparen.

Die Logik hinter dem Kombinieren dieser Hinweise ist, dass die Unterstützung für dns-prefetch besser ist als für preconnect. Browser, die preconnect nicht unterstützen, profitieren dennoch, indem sie auf dns-prefetch zurückfallen. Da dies eine HTML-Funktion ist, ist sie sehr fehlertolerant. Wenn ein nicht unterstützender Browser auf einen dns-prefetch-Hinweis oder einen anderen Ressourcenhinweis trifft, wird Ihre Seite nicht unterbrochen. Sie erhalten einfach nicht die Vorteile, die es bietet.

Einige Ressourcen wie Schriften werden im anonymen Modus geladen. In solchen Fällen sollten Sie das [crossorigin-Attribut](/de/docs/Web/HTML/Attributes/crossorigin) mit dem preconnect-Hinweis setzen. Wenn Sie es weglassen, wird der Browser nur die DNS-Abfrage durchführen.

## Siehe auch

- [`<link>`](/de/docs/Web/HTML/Element/link)
- [HTML-Attribut: rel](/de/docs/Web/HTML/Attributes/rel)
- [HTML rel-Attribut: preconnect](/de/docs/Web/HTML/Attributes/rel/preconnect)
- [crossorigin](/de/docs/Web/HTML/Attributes/crossorigin)
- [Cross-Origin Resource Sharing (CORS)](/de/docs/Web/HTTP/CORS)
- [HTTP-Header](/de/docs/Web/HTTP/Headers)
- [HTTP-Header Link](/de/docs/Web/HTTP/Headers/Link)
