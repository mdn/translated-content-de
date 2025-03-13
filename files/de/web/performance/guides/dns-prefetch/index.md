---
title: Verwendung von dns-prefetch
slug: Web/Performance/Guides/dns-prefetch
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

**`DNS-prefetch`** ist ein Versuch, Domainnamen aufzulösen, bevor Ressourcen angefordert werden. Dies könnte eine Datei sein, die später geladen wird, oder ein Linkziel, dem ein Benutzer zu folgen versucht.

## Warum dns-prefetch verwenden?

Wenn ein Browser eine Ressource von einem (Drittanbieter-)Server anfordert, muss der Domainname dieses [CORS-Domains](/de/docs/Web/HTTP/Guides/CORS) in eine IP-Adresse aufgelöst werden, bevor der Browser die Anfrage stellen kann. Dieser Prozess ist als DNS-Auflösung bekannt. Obwohl DNS-Caching helfen kann, diese Latenz zu reduzieren, kann die DNS-Auflösung signifikante Verzögerungen bei Anfragen verursachen. Für Websites, die Verbindungen zu vielen Drittanbietern eröffnen, kann diese Latenz die Ladeleistung erheblich verringern.

`dns-prefetch` hilft Entwicklern, die Latenz bei der DNS-Auflösung zu maskieren. Das [HTML `<link>`-Element](/de/docs/Web/HTML/Element/link) bietet diese Funktionalität über einen [`rel`-Attribut](/de/docs/Web/HTML/Attributes/rel)-Wert von `dns-prefetch`. Die [CORS-Domain](/de/docs/Web/HTTP/Guides/CORS) wird dann im [href-Attribut](/de/docs/Web/HTML/Attributes) angegeben:

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

Sie sollten `dns-prefetch`-Hinweise im [`<head>`-Element](/de/docs/Web/HTML/Element/head) platzieren, wenn Ihre Website Ressourcen auf CORS-Domains referenziert, aber es gibt einige Dinge zu beachten.

## Beste Praktiken

Drei Hauptpunkte sind zu beachten:

**Erstens** ist `dns-prefetch` nur effektiv für DNS-Abfragen auf [CORS-Domains](/de/docs/Web/HTTP/Guides/CORS), daher sollten Sie es vermeiden, Ihre eigene Site oder Domain zu verwenden. Der Grund dafür ist, dass die IP hinter der Domain Ihrer Website bereits aufgelöst wurde, wenn der Browser den Hinweis sieht.

**Zweitens** ist es auch möglich, `dns-prefetch` (und andere Ressourcenhinweise) als [HTTP-Header](/de/docs/Web/HTTP/Reference/Headers) durch das [HTTP-Link-Feld](/de/docs/Web/HTTP/Reference/Headers/Link) zu spezifizieren:

```http
Link: <https://fonts.googleapis.com/>; rel=dns-prefetch
```

**Drittens** führt `dns-prefetch` nur eine DNS-Abfrage durch, während [`preconnect`](/de/docs/Web/HTML/Attributes/rel/preconnect) eine Verbindung zu einem Server herstellt. Dieser Prozess umfasst die DNS-Auflösung, die Einrichtung der TCP-Verbindung und das Durchführen des {{Glossary("TLS", "TLS")}}-Handshakes — wenn eine Website über HTTPS bereitgestellt wird. Die Verwendung von `preconnect` bietet die Möglichkeit, die wahrgenommene Latenz von [CORS-Anfragen](/de/docs/Web/HTTP/Guides/CORS) weiter zu verringern. Sie können es als [HTTP-Header](/de/docs/Web/HTTP/Reference/Headers) durch das [HTTP-Link-Feld](/de/docs/Web/HTTP/Reference/Headers/Link) verwenden:

```http
Link: <https://fonts.googleapis.com/>; rel=preconnect
```

oder über das [HTML `<link>`-Element](/de/docs/Web/HTML/Element/link):

```html
<link rel="preconnect" href="https://fonts.googleapis.com/" crossorigin />
```

> [!NOTE]
> Wenn eine Seite Verbindungen zu vielen Drittanbieter-Domains herstellen muss, ist das Pre-Connecting aller Domains kontraproduktiv. Der `preconnect`-Hinweis eignet sich am besten nur für die kritischsten Verbindungen. Für die anderen verwenden Sie einfach `<link rel="dns-prefetch">`, um beim ersten Schritt Zeit zu sparen — der DNS-Abfrage.

Die Logik hinter der Kombination dieser Hinweise liegt darin, dass die Unterstützung für dns-prefetch besser ist als die Unterstützung für preconnect. Browser, die preconnect nicht unterstützen, erhalten dennoch einen gewissen Vorteil, indem sie auf dns-prefetch zurückgreifen. Da dies eine HTML-Funktion ist, ist sie sehr fehlertolerant. Wenn ein Browser, der dns-prefetch oder einen anderen Ressourcenhinweis nicht unterstützt, auf einen Hinweis stößt, wird Ihre Website nicht unterbrochen. Sie erhalten einfach nicht die Vorteile, die sie bietet.

Einige Ressourcen wie Schriftarten werden im anonymen Modus geladen. In solchen Fällen sollten Sie das [crossorigin](/de/docs/Web/HTML/Attributes/crossorigin)-Attribut mit dem preconnect-Hinweis setzen. Wenn Sie es weglassen, führt der Browser nur die DNS-Abfrage durch.

## Siehe auch

- [`<link>`](/de/docs/Web/HTML/Element/link)
- [HTML-Attribut: rel](/de/docs/Web/HTML/Attributes/rel)
- [HTML rel-Attribut: preconnect](/de/docs/Web/HTML/Attributes/rel/preconnect)
- [crossorigin](/de/docs/Web/HTML/Attributes/crossorigin)
- [Cross-Origin Resource Sharing (CORS)](/de/docs/Web/HTTP/Guides/CORS)
- [HTTP-Header](/de/docs/Web/HTTP/Reference/Headers)
- [HTTP-Header Link](/de/docs/Web/HTTP/Reference/Headers/Link)
