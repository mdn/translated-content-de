---
title: Verwendung von dns-prefetch
slug: Web/Performance/Guides/dns-prefetch
l10n:
  sourceCommit: 4c58f4735f986a91bee1b77e336143630df727a2
---

**`DNS-prefetch`** ist ein Versuch, Domainnamen aufzulösen, bevor Ressourcen angefordert werden. Dies kann eine Datei sein, die später geladen wird, oder ein Linkziel, das ein Benutzer zu erreichen versucht.

## Warum dns-prefetch verwenden?

Wenn ein Browser eine Ressource von einem (Drittanbieter-)Server anfordert, muss der Domainname dieses [cross-origin](/de/docs/Web/HTTP/Guides/CORS) in eine IP-Adresse aufgelöst werden, bevor der Browser die Anfrage stellen kann. Dieser Vorgang wird als DNS-Auflösung bezeichnet. Während DNS-Caching dazu beitragen kann, diese Latenz zu verringern, kann die DNS-Auflösung dennoch signifikante Verzögerungen bei Anfragen verursachen. Für Websites, die Verbindungen zu vielen Drittanbietern herstellen, kann diese Latenz die Ladeleistung erheblich beeinträchtigen.

`dns-prefetch` hilft Entwicklern, die Latenz der DNS-Auflösung zu überdecken. Das [HTML `<link>`-Element](/de/docs/Web/HTML/Reference/Elements/link) bietet diese Funktionalität durch einen Wert des [`rel`-Attributs](/de/docs/Web/HTML/Reference/Attributes/rel) von `dns-prefetch`. Die [cross-origin](/de/docs/Web/HTTP/Guides/CORS)-Domain wird dann im [href-Attribut](/de/docs/Web/HTML/Reference/Attributes) angegeben:

## Syntax

```html
<link rel="dns-prefetch" href="https://fonts.googleapis.com/" />
```

## Beispiele

```html
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width" />
    <link rel="dns-prefetch" href="https://fonts.googleapis.com/" />
    <!-- and all other head elements -->
  </head>
  <body>
    <!-- your page content -->
  </body>
</html>
```

Sie sollten `dns-prefetch`-Hinweise jederzeit im [`<head>`-Element](/de/docs/Web/HTML/Reference/Elements/head) platzieren, wenn Ihre Website Ressourcen auf cross-origin Domains referenziert, aber es gibt einige Dinge zu beachten.

## Beste Praktiken

Es gibt drei Hauptpunkte, die Sie beachten sollten:

**Erstens**, `dns-prefetch` ist nur effektiv für DNS-Abfragen auf [cross-origin](/de/docs/Web/HTTP/Guides/CORS) Domains, daher sollten Sie vermeiden, es auf Ihre Website oder Domain zu verweisen. Dies liegt daran, dass die IP-Adresse Ihrer Website-Domain bereits aufgelöst wurde, wenn der Browser den Hinweis sieht.

**Zweitens**, es ist auch möglich, `dns-prefetch` (und andere Ressourcenhinweise) als [HTTP-Header](/de/docs/Web/HTTP/Reference/Headers) zu spezifizieren, indem das [HTTP-Link-Feld](/de/docs/Web/HTTP/Reference/Headers/Link) verwendet wird:

```http
Link: <https://fonts.googleapis.com/>; rel=dns-prefetch
```

**Drittens**, während `dns-prefetch` nur eine DNS-Abfrage durchführt, stellt [`preconnect`](/de/docs/Web/HTML/Reference/Attributes/rel/preconnect) eine Verbindung zu einem Server her. Dieser Prozess umfasst die DNS-Auflösung sowie das Herstellen der TCP-Verbindung und das Durchführen des {{Glossary("TLS", "TLS")}}-Handshake, wenn eine Website über HTTPS bereitgestellt wird. Die Verwendung von `preconnect` bietet die Möglichkeit, die wahrgenommene Latenz von [cross-origin Anfragen](/de/docs/Web/HTTP/Guides/CORS) weiter zu reduzieren. Sie können es als [HTTP-Header](/de/docs/Web/HTTP/Reference/Headers) verwenden, indem Sie das [HTTP-Link-Feld](/de/docs/Web/HTTP/Reference/Headers/Link) verwenden:

```http
Link: <https://fonts.googleapis.com/>; rel=preconnect
```

oder über das [HTML `<link>`-Element](/de/docs/Web/HTML/Reference/Elements/link):

```html
<link rel="preconnect" href="https://fonts.googleapis.com/" crossorigin />
```

> [!NOTE]
> Wenn eine Seite Verbindungen zu vielen Drittanbieter-Domains herstellen muss, ist es kontraproduktiv, sie alle vorzubinden. Der `preconnect`-Hinweis ist am besten für die kritischsten Verbindungen geeignet. Für die anderen verwenden Sie einfach `<link rel="dns-prefetch">`, um Zeit beim ersten Schritt — der DNS-Abfrage — zu sparen.

Der Gedanke hinter der Kombination dieser Hinweise ist, dass die Unterstützung für dns-prefetch besser ist als die für preconnect. Browser, die preconnect nicht unterstützen, profitieren dennoch, indem sie auf dns-prefetch zurückgreifen. Da dies eine HTML-Funktion ist, ist sie sehr fehlertolerant. Wenn ein nicht unterstützender Browser auf einen dns-prefetch-Hinweis oder einen anderen Ressourcentipp stößt, wird Ihre Website nicht beschädigt. Sie erhalten lediglich nicht die Vorteile, die es bietet.

Einige Ressourcen wie Schriften werden im anonymen Modus geladen. In solchen Fällen sollten Sie das [crossorigin](/de/docs/Web/HTML/Reference/Attributes/crossorigin)-Attribut mit dem preconnect-Hinweis setzen. Wenn Sie es weglassen, führt der Browser nur die DNS-Abfrage durch.

## Siehe auch

- [`<link>`](/de/docs/Web/HTML/Reference/Elements/link)
- [HTML-Attribut: rel](/de/docs/Web/HTML/Reference/Attributes/rel)
- [HTML rel-Attribut: preconnect](/de/docs/Web/HTML/Reference/Attributes/rel/preconnect)
- [crossorigin](/de/docs/Web/HTML/Reference/Attributes/crossorigin)
- [Cross-Origin Resource Sharing (CORS)](/de/docs/Web/HTTP/Guides/CORS)
- [HTTP-Header](/de/docs/Web/HTTP/Reference/Headers)
- [HTTP-Header Link](/de/docs/Web/HTTP/Reference/Headers/Link)
