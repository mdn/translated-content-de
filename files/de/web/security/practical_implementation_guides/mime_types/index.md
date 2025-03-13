---
title: MIME-Typ-Verifizierung
slug: Web/Security/Practical_implementation_guides/MIME_types
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{QuickLinksWithSubpages("/de/docs/Web/Security")}}

Der [`X-Content-Type-Options`](/de/docs/Web/HTTP/Reference/Headers/X-Content-Type-Options) Header informiert Browser, keine Skripte und Stylesheets zu laden, es sei denn, der Server gibt den korrekten {{Glossary("MIME_type", "MIME-Typ")}} an.

## Problem

Ohne ordnungsgemäße MIME-Typ-Verifizierung könnten Browser fälschlicherweise Nicht-Skript- und Nicht-Stylesheet-Dateien als Skripte oder Stylesheets erkennen. Dieser Fehler ermöglicht, dass möglicherweise bösartige Dateien über {{htmlelement("script")}} und {{htmlelement("link")}} Elemente als Teil von Cross-Site-Scripting ({{Glossary("Cross-site_scripting", "XSS")}})-Angriffen geladen werden.

## Lösung

Alle Websites müssen den `X-Content-Type-Options` Header mit einem Wert von `nosniff` setzen und geeignete MIME-Typen für die Dateien, die sie bereitstellen, festlegen (d. h. über den [`Content-Type`](/de/docs/Web/HTTP/Reference/Headers/Content-Type) Header).

`nosniff` blockiert eine Anfrage, wenn das Anforderungsziel:

- vom Typ `style` ist und der MIME-Typ nicht `text/css` ist.
- vom Typ `script` ist und der MIME-Typ kein gültiger [JavaScript-MIME-Typ](/de/docs/Web/HTTP/Guides/MIME_types#textjavascript) ist.

## Beispiele

Verhindern Sie, dass Browser fälschlicherweise Nicht-Stylesheets als Stylesheets und Nicht-Skripte als Skripte erkennen:

```http
X-Content-Type-Options: nosniff
```

## Siehe auch

- [MIME-Typen (IANA Medientypen): MIME Sniffing](/de/docs/Web/HTTP/Guides/MIME_types#mime_sniffing)
- [Server-MIME-Typen richtig konfigurieren](/de/docs/Learn_web_development/Extensions/Server-side/Configuring_server_MIME_types)
