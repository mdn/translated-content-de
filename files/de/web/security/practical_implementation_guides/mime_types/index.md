---
title: MIME-Typ-Verifizierung
slug: Web/Security/Practical_implementation_guides/MIME_types
l10n:
  sourceCommit: 75e254fe894a22724a3d01ef6b20b9848e9f5309
---

{{QuickLinksWithSubpages("/de/docs/Web/Security")}}

Der [`X-Content-Type-Options`](/de/docs/Web/HTTP/Headers/X-Content-Type-Options) Header informiert Browser darüber, keine Skripte und Stylesheets zu laden, es sei denn, der Server gibt den korrekten [MIME-Typ](/de/docs/Glossary/MIME_type) an.

## Problem

Ohne ordnungsgemäße MIME-Typ-Verifizierung könnten Browser nicht-Skript- und nicht-Stylesheet-Dateien fälschlicherweise als Skripte oder Stylesheets erkennen. Dieser Fehler ermöglicht, dass potenziell bösartige Dateien über {{htmlelement("script")}} und {{htmlelement("link")}} Elemente im Rahmen von Cross-Site-Scripting ([XSS](/de/docs/Glossary/Cross-site_scripting)) Angriffen geladen werden.

## Lösung

Alle Websites müssen den `X-Content-Type-Options` Header mit dem Wert `nosniff` setzen und geeignete MIME-Typen für die von ihnen bereitgestellten Dateien festlegen (d.h. über den [`Content-Type`](/de/docs/Web/HTTP/Headers/Content-Type) Header).

`nosniff` blockiert eine Anfrage, wenn das Ziel der Anfrage:

- vom Typ `style` ist und der MIME-Typ nicht `text/css` ist.
- vom Typ `script` ist und der MIME-Typ kein gültiger [JavaScript MIME-Typ](/de/docs/Web/HTTP/Basics_of_HTTP/MIME_types#textjavascript) ist.

## Beispiele

Verhindern Sie, dass Browser nicht-Stylesheets fälschlicherweise als Stylesheets und nicht-Skripte als Skripte erkennen:

```http
X-Content-Type-Options: nosniff
```

## Siehe auch

- [MIME-Typen (IANA Medientypen): MIME-Sniffing](/de/docs/Web/HTTP/Basics_of_HTTP/MIME_types#mime_sniffing)
- [Server-MIME-Typen richtig konfigurieren](/de/docs/Learn/Server-side/Configuring_server_MIME_types)
