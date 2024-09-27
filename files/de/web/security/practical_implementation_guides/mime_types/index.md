---
title: MIME-Type-Verifizierung
slug: Web/Security/Practical_implementation_guides/MIME_types
l10n:
  sourceCommit: 75e254fe894a22724a3d01ef6b20b9848e9f5309
---

{{QuickLinksWithSubpages("/de/docs/Web/Security")}}

Der [`X-Content-Type-Options`](/de/docs/Web/HTTP/Headers/X-Content-Type-Options) Header informiert Browser darüber, Skripte und Stylesheets nur dann zu laden, wenn der Server den korrekten [MIME-Typ](/de/docs/Glossary/MIME_type) angibt.

## Problem

Ohne ordnungsgemäße MIME-Type-Verifizierung könnten Browser irrtümlich Nicht-Skript- und Nicht-Stylesheet-Dateien als Skripte oder Stylesheets erkennen. Dieser Fehler ermöglicht es potenziell schädlichen Dateien, über {{htmlelement("script")}}- und {{htmlelement("link")}}-Elemente als Teil von Cross-Site-Scripting ([XSS](/de/docs/Glossary/Cross-site_scripting)) Angriffen geladen zu werden.

## Lösung

Alle Websites müssen den `X-Content-Type-Options` Header mit einem Wert von `nosniff` setzen und geeignete MIME-Typen für die von ihnen bereitgestellten Dateien festlegen (d.h., über den [`Content-Type`](/de/docs/Web/HTTP/Headers/Content-Type) Header).

`nosniff` blockiert eine Anfrage, wenn das Ziel der Anfrage:

- vom Typ `style` ist und der MIME-Typ nicht `text/css` ist.
- vom Typ `script` ist und der MIME-Typ kein gültiger [JavaScript MIME-Typ](/de/docs/Web/HTTP/Basics_of_HTTP/MIME_types#textjavascript) ist.

## Beispiele

Verhindern Sie, dass Browser Nicht-Stylesheets als Stylesheets und Nicht-Skripte als Skripte irrtümlich erkennen:

```http
X-Content-Type-Options: nosniff
```

## Siehe auch

- [MIME-Typen (IANA Medientypen): MIME-Sniffing](/de/docs/Web/HTTP/Basics_of_HTTP/MIME_types#mime_sniffing)
- [Server-MIME-Typen richtig konfigurieren](/de/docs/Learn/Server-side/Configuring_server_MIME_types)
