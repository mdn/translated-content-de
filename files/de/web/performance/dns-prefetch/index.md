---
title: Verwendung von dns-prefetch
slug: Web/Performance/dns-prefetch
l10n:
  sourceCommit: 857c6f9e7f1a847e7d3466b0d047159f7b345991
---

{{QuickLinksWithSubPages("Web/Performance")}}

**`DNS-prefetch`** ist der Versuch, Domänennamen aufzulösen, bevor Ressourcen angefordert werden. Dies könnte eine Datei sein, die später geladen wird, oder ein Linkziel, dem ein Benutzer zu folgen versucht.

## Warum dns-prefetch verwenden?

Wenn ein Browser eine Ressource von einem (Drittanbieter-)Server anfordert, muss der Domänenname dieses [cross-origin](/de/docs/Web/HTTP/CORS)-Servers in eine IP-Adresse aufgelöst werden, bevor der Browser die Anfrage senden kann. Dieser Prozess wird als DNS-Auflösung bezeichnet. Während das DNS-Caching helfen kann, diese Latenz zu reduzieren, kann die DNS-Auflösung dennoch eine erhebliche Latenz zu Anfragen hinzufügen. Für Websites, die Verbindungen zu vielen Drittanbietern herstellen, kann diese Latenz die Ladeleistung erheblich reduzieren.

`dns-prefetch` hilft Entwicklern, die Latenz der DNS-Auflösung zu verbergen. Das [HTML `<link>` Element](/de/docs/Web/HTML/Element/link) bietet diese Funktionalität durch einen [`rel` Attribut](/de/docs/Web/HTML/Attributes/rel)-Wert von `dns-prefetch`. Die [cross-origin](/de/docs/Web/HTTP/CORS) Domäne wird dann im [href Attribut](/de/docs/Web/HTML/Attributes) angegeben:

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

Sie sollten `dns-prefetch`-Hinweise in das [`<head>` Element](/de/docs/Web/HTML/Element/head) einfügen, wenn Ihre Website Ressourcen auf cross-origin Domänen referenziert, aber es gibt einige Dinge zu beachten.

## Beste Praktiken

Es gibt drei Hauptsachen, die zu beachten sind:

**Erstens**, `dns-prefetch` ist nur für DNS-Abfragen auf [cross-origin](/de/docs/Web/HTTP/CORS) Domänen wirksam, daher vermeiden Sie es, es auf Ihre eigene Site oder Domäne zu verweisen. Dies liegt daran, dass die IP hinter der Domäne Ihrer Site bereits aufgelöst worden sein wird, wenn der Browser den Hinweis sieht.

**Zweitens**, es ist auch möglich, `dns-prefetch` (und andere Ressourcenhinweise) als [HTTP-Header](/de/docs/Web/HTTP/Headers) zu spezifizieren, indem das [HTTP Link-Feld](/de/docs/Web/HTTP/Headers/Link) verwendet wird:

```http
Link: <https://fonts.googleapis.com/>; rel=dns-prefetch
```

**Drittens**, während `dns-prefetch` nur eine DNS-Abfrage durchführt, stellt [`preconnect`](/de/docs/Web/HTML/Attributes/rel/preconnect) eine Verbindung zu einem Server her. Dieser Prozess umfasst die DNS-Auflösung sowie die Herstellung der TCP-Verbindung und das Durchführen des [TLS](/de/docs/Glossary/TLS)-Handshakes – wenn eine Site über HTTPS bereitgestellt wird. Die Verwendung von `preconnect` bietet die Möglichkeit, die wahrgenommene Latenz von [cross-origin Anfragen](/de/docs/Web/HTTP/CORS) weiter zu reduzieren. Sie können es als [HTTP-Header](/de/docs/Web/HTTP/Headers) unter Verwendung des [HTTP Link-Felds](/de/docs/Web/HTTP/Headers/Link) verwenden:

```http
Link: <https://fonts.googleapis.com/>; rel=preconnect
```

oder über das [HTML `<link>` Element](/de/docs/Web/HTML/Element/link):

```html
<link rel="preconnect" href="https://fonts.googleapis.com/" crossorigin />
```

> [!NOTE]
> Wenn eine Seite Verbindungen zu vielen Drittanbieterdomänen herstellen muss, ist das Vorabverbinden aller kontraproduktiv. Der `preconnect` Hinweis ist am besten nur für die kritischsten Verbindungen zu verwenden. Für die anderen verwenden Sie einfach `<link rel="dns-prefetch">`, um Zeit beim ersten Schritt zu sparen – der DNS-Abfrage.

Die Logik hinter der Kombination dieser Hinweise liegt darin, dass die Unterstützung für dns-prefetch besser ist als die für preconnect. Browser, die preconnect nicht unterstützen, erhalten dennoch einen zusätzlichen Vorteil, indem sie auf dns-prefetch zurückfallen. Da es sich um eine HTML-Funktion handelt, ist sie sehr fehlertolerant. Wenn ein nicht unterstützender Browser einen dns-prefetch Hinweis oder einen anderen Ressourcenhinweis antrifft, wird Ihre Site nicht beschädigt. Sie erhalten nur nicht die Vorteile, die sie bietet.

Einige Ressourcen wie Schriftarten werden im anonymen Modus geladen. In solchen Fällen sollten Sie das [crossorigin](/de/docs/Web/HTML/Attributes/crossorigin) Attribut mit dem preconnect Hinweis setzen. Wenn Sie es weglassen, wird der Browser nur die DNS-Abfrage durchführen.

## Siehe auch

- [\<link>](/de/docs/Web/HTML/Element/link)
- [HTML Attribut: rel](/de/docs/Web/HTML/Attributes/rel)
- [HTML rel Attribut: preconnect](/de/docs/Web/HTML/Attributes/rel/preconnect)
- [crossorigin](/de/docs/Web/HTML/Attributes/crossorigin)
- [Cross-Origin Resource Sharing (CORS)](/de/docs/Web/HTTP/CORS)
- [HTTP-Header](/de/docs/Web/HTTP/Headers)
- [HTTP Header Link](/de/docs/Web/HTTP/Headers/Link)
