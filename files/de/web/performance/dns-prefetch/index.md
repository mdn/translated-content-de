---
title: Verwendung von dns-prefetch
slug: Web/Performance/dns-prefetch
l10n:
  sourceCommit: 857c6f9e7f1a847e7d3466b0d047159f7b345991
---

{{QuickLinksWithSubPages("Web/Performance")}}

**`DNS-prefetch`** ist der Versuch, Domainnamen aufzulösen, bevor Ressourcen angefordert werden. Dies könnte eine später geladene Datei oder ein Linkziel sein, dem ein Benutzer zu folgen versucht.

## Warum dns-prefetch verwenden?

Wenn ein Browser eine Ressource von einem (Drittanbieter-)Server anfordert, muss der Domainname dieses [Cross-Origin](/de/docs/Web/HTTP/CORS) in eine IP-Adresse aufgelöst werden, bevor der Browser die Anforderung ausführen kann. Dieser Prozess ist als DNS-Auflösung bekannt. Während DNS-Caching helfen kann, diese Latenz zu verringern, kann die DNS-Auflösung erhebliche Latenz bei Anforderungen hinzufügen. Für Websites, die Verbindungen zu vielen Drittanbietern herstellen, kann diese Latenz die Ladeleistung erheblich beeinträchtigen.

`dns-prefetch` hilft Entwicklern, die Latenz der DNS-Auflösung zu maskieren. Das [HTML `<link>`-Element](/de/docs/Web/HTML/Element/link) bietet diese Funktionalität durch einen Wert des [`rel`-Attributs](/de/docs/Web/HTML/Attributes/rel) von `dns-prefetch`. Die [Cross-Origin](/de/docs/Web/HTTP/CORS) Domain wird dann im [href-Attribut](/de/docs/Web/HTML/Attributes) angegeben:

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

Sie sollten `dns-prefetch`-Hinweise jederzeit im [`<head>`-Element](/de/docs/Web/HTML/Element/head) platzieren, wenn Ihre Website Ressourcen auf Cross-Origin-Domains referenziert, aber es gibt einige Dinge zu beachten.

## Beste Praktiken

Es gibt 3 Hauptpunkte, die zu beachten sind:

**Erstens** ist `dns-prefetch` nur für DNS-Abfragen auf [Cross-Origin](/de/docs/Web/HTTP/CORS) Domains effektiv, daher vermeiden Sie es, auf Ihre eigene Website oder Domain zu verweisen. Dies liegt daran, dass die IP hinter der Domain Ihrer Website bereits aufgelöst wurde, wenn der Browser den Hinweis sieht.

**Zweitens** ist es auch möglich, `dns-prefetch` (und andere Ressourcenhinweise) als [HTTP-Header](/de/docs/Web/HTTP/Headers) durch Verwendung des [HTTP-Link-Felds](/de/docs/Web/HTTP/Headers/Link) anzugeben:

```http
Link: <https://fonts.googleapis.com/>; rel=dns-prefetch
```

**Drittens**, während `dns-prefetch` nur eine DNS-Abfrage durchführt, stellt [`preconnect`](/de/docs/Web/HTML/Attributes/rel/preconnect) eine Verbindung zu einem Server her. Dieser Prozess umfasst die DNS-Auflösung, sowie die Herstellung der TCP-Verbindung und das Durchführen des [TLS](/de/docs/Glossary/TLS)-Handshakes, wenn eine Website über HTTPS bereitgestellt wird. Die Verwendung von `preconnect` bietet die Möglichkeit, die wahrgenommene Latenzzeit von [Cross-Origin-Anfragen](/de/docs/Web/HTTP/CORS) weiter zu reduzieren. Sie können es als [HTTP-Header](/de/docs/Web/HTTP/Headers) durch das [HTTP-Link-Feld](/de/docs/Web/HTTP/Headers/Link) verwenden:

```http
Link: <https://fonts.googleapis.com/>; rel=preconnect
```

oder über das [HTML `<link>`-Element](/de/docs/Web/HTML/Element/link):

```html
<link rel="preconnect" href="https://fonts.googleapis.com/" crossorigin />
```

> [!NOTE]
> Wenn eine Seite Verbindungen zu vielen Drittanbieter-Domains herstellen muss, ist das Voranstellen all dieser kontraproduktiv. Der `preconnect`-Hinweis eignet sich am besten nur für die kritischsten Verbindungen. Für die anderen verwenden Sie einfach `<link rel="dns-prefetch">`, um Zeit beim ersten Schritt — der DNS-Abfrage — zu sparen.

Die Logik hinter der Kombination dieser Hinweise liegt darin, dass die Unterstützung für dns-prefetch besser ist als die Unterstützung für preconnect. Browser, die preconnect nicht unterstützen, profitieren dennoch etwas, indem sie auf dns-prefetch zurückfallen. Da dies eine HTML-Funktion ist, ist sie sehr fehlertolerant. Wenn ein Browser, der nicht unterstützt wird, auf einen dns-prefetch-Hinweis trifft — oder einen anderen Ressourcenhinweis — geht Ihre Website nicht kaputt. Sie erhalten lediglich nicht die Vorteile, die es bietet.

Einige Ressourcen wie Schriftarten werden im anonymen Modus geladen. In solchen Fällen sollten Sie das [crossorigin](/de/docs/Web/HTML/Attributes/crossorigin)-Attribut mit dem preconnect-Hinweis setzen. Wenn Sie es weglassen, führt der Browser nur die DNS-Abfrage durch.

## Siehe auch

- [\<link>](/de/docs/Web/HTML/Element/link)
- [HTML-Attribut: rel](/de/docs/Web/HTML/Attributes/rel)
- [HTML rel-Attribut: preconnect](/de/docs/Web/HTML/Attributes/rel/preconnect)
- [crossorigin](/de/docs/Web/HTML/Attributes/crossorigin)
- [Cross-Origin Resource Sharing (CORS)](/de/docs/Web/HTTP/CORS)
- [HTTP-Header](/de/docs/Web/HTTP/Headers)
- [HTTP-Header Link](/de/docs/Web/HTTP/Headers/Link)
