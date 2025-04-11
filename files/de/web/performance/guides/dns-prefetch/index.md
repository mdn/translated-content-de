---
title: Verwendung von dns-prefetch
slug: Web/Performance/Guides/dns-prefetch
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

**`DNS-prefetch`** ist der Versuch, Domain-Namen aufzulösen, bevor Ressourcen angefordert werden. Dies könnte eine später geladene Datei oder ein Linkziel sein, dem ein Benutzer folgen möchte.

## Warum dns-prefetch verwenden?

Wenn ein Browser eine Ressource von einem (Drittanbieter-)Server anfordert, muss der Domain-Name des [Cross-Origin](/de/docs/Web/HTTP/Guides/CORS) zu einer IP-Adresse aufgelöst werden, bevor der Browser die Anforderung stellen kann. Dieser Vorgang wird als DNS-Auflösung bezeichnet. Während DNS-Caching helfen kann, diese Latenz zu reduzieren, kann die DNS-Auflösung erhebliche Latenz zu Anfragen hinzufügen. Für Websites, die Verbindungen zu vielen Drittanbietern herstellen, kann diese Latenz die Ladeleistung erheblich reduzieren.

`dns-prefetch` hilft Entwicklern, die Latenz der DNS-Auflösung zu maskieren. Das [HTML `<link>`-Element](/de/docs/Web/HTML/Reference/Elements/link) bietet diese Funktionalität durch einen Wert des [`rel`-Attributs](/de/docs/Web/HTML/Reference/Attributes/rel) von `dns-prefetch`. Die [Cross-Origin](/de/docs/Web/HTTP/Guides/CORS)-Domain wird dann im [href-Attribut](/de/docs/Web/HTML/Reference/Attributes) angegeben:

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

Sie sollten `dns-prefetch`-Hinweise jederzeit im [`<head>`-Element](/de/docs/Web/HTML/Reference/Elements/head) platzieren, wenn Ihre Website Ressourcen auf Cross-Origin-Domains verweist, aber es gibt einige Dinge zu beachten.

## Best Practices

Es gibt drei Hauptsachen zu beachten:

**Erstens**, `dns-prefetch` ist nur für DNS-Abfragen auf [Cross-Origin](/de/docs/Web/HTTP/Guides/CORS)-Domains wirksam, daher sollten Sie es vermeiden, es auf Ihre eigene Website oder Domain zu richten. Der Grund dafür ist, dass die IP hinter der Domain Ihrer Website bereits aufgelöst sein wird, wenn der Browser den Hinweis sieht.

**Zweitens**, es ist auch möglich, `dns-prefetch` (und andere Ressourcenhinweise) als [HTTP-Header](/de/docs/Web/HTTP/Reference/Headers) mittels des [HTTP Link-Feldes](/de/docs/Web/HTTP/Reference/Headers/Link) zu spezifizieren:

```http
Link: <https://fonts.googleapis.com/>; rel=dns-prefetch
```

**Drittens**, während `dns-prefetch` nur eine DNS-Abfrage durchführt, stellt [`preconnect`](/de/docs/Web/HTML/Reference/Attributes/rel/preconnect) eine Verbindung zu einem Server her. Dieser Prozess umfasst die DNS-Auflösung sowie die Herstellung der TCP-Verbindung und das Durchführen des {{Glossary("TLS", "TLS")}}-Handshakes—wenn eine Seite über HTTPS bereitgestellt wird. Die Verwendung von `preconnect` bietet die Möglichkeit, die wahrgenommene Latenz von [Cross-Origin-Anfragen](/de/docs/Web/HTTP/Guides/CORS) weiter zu reduzieren. Sie können es als [HTTP-Header](/de/docs/Web/HTTP/Reference/Headers) mithilfe des [HTTP Link-Feldes](/de/docs/Web/HTTP/Reference/Headers/Link) verwenden:

```http
Link: <https://fonts.googleapis.com/>; rel=preconnect
```

oder über das [HTML `<link>`-Element](/de/docs/Web/HTML/Reference/Elements/link):

```html
<link rel="preconnect" href="https://fonts.googleapis.com/" crossorigin />
```

> [!NOTE]
> Wenn eine Seite Verbindungen zu vielen Drittanbieter-Domains herstellen muss, ist das Voranschließen aller kontraproduktiv. Der `preconnect`-Hinweis wird am besten nur für die kritischsten Verbindungen verwendet. Für die anderen verwenden Sie einfach `<link rel="dns-prefetch">`, um Zeit beim ersten Schritt zu sparen—der DNS-Abfrage.

Die Logik hinter dem Paaren dieser Hinweise ist, dass die Unterstützung für dns-prefetch besser ist als die Unterstützung für preconnect. Browser, die preconnect nicht unterstützen, bekommen trotzdem einen gewissen Vorteil, indem sie auf dns-prefetch zurückfallen. Da dies eine HTML-Funktion ist, ist sie sehr fehlertolerant. Wenn ein Browser, der die Funktion nicht unterstützt, auf einen dns-prefetch-Hinweis—oder einen anderen Ressourcenhinweis—stößt, wird Ihre Seite nicht unterbrochen. Sie erhalten nur nicht die Vorteile, die es bietet.

Einige Ressourcen, wie Schriften, werden im anonymen Modus geladen. In solchen Fällen sollten Sie das [crossorigin](/de/docs/Web/HTML/Reference/Attributes/crossorigin)-Attribut mit dem preconnect-Hinweis setzen. Wenn Sie es weglassen, wird der Browser nur die DNS-Abfrage durchführen.

## Siehe auch

- [`<link>`](/de/docs/Web/HTML/Reference/Elements/link)
- [HTML-Attribut: rel](/de/docs/Web/HTML/Reference/Attributes/rel)
- [HTML rel-Attribut: preconnect](/de/docs/Web/HTML/Reference/Attributes/rel/preconnect)
- [crossorigin](/de/docs/Web/HTML/Reference/Attributes/crossorigin)
- [Cross-Origin Resource Sharing (CORS)](/de/docs/Web/HTTP/Guides/CORS)
- [HTTP-Header](/de/docs/Web/HTTP/Reference/Headers)
- [HTTP-Header Link](/de/docs/Web/HTTP/Reference/Headers/Link)
