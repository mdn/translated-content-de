---
title: MIME-Typ-Verifizierung
slug: Web/Security/Practical_implementation_guides/MIME_types
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{QuickLinksWithSubpages("/de/docs/Web/Security")}}

Der [`X-Content-Type-Options`](/de/docs/Web/HTTP/Headers/X-Content-Type-Options) Header teilt Browsern mit, dass Skripte und Stylesheets nur geladen werden sollen, wenn der Server den korrekten {{Glossary("MIME_type", "MIME-Typ")}} angibt.

## Problem

Ohne ordnungsgemäße MIME-Typ-Verifizierung könnten Browser Dateien, die keine Skripte oder Stylesheets sind, fälschlicherweise als solche erkennen. Dieser Fehler ermöglicht es, potenziell schädliche Dateien über {{htmlelement("script")}} und {{htmlelement("link")}} Elemente im Rahmen von Cross-Site-Scripting ({{Glossary("Cross-site_scripting", "XSS")}}) Angriffen zu laden.

## Lösung

Alle Websites müssen den `X-Content-Type-Options` Header mit dem Wert `nosniff` setzen und geeignete MIME-Typen für die Dateien festlegen, die sie bereitstellen (d.h. über den [`Content-Type`](/de/docs/Web/HTTP/Headers/Content-Type) Header).

`nosniff` blockiert eine Anfrage, wenn das Ziel der Anfrage:

- vom Typ `style` ist und der MIME-Typ nicht `text/css` ist.
- vom Typ `script` ist und der MIME-Typ kein gültiger [JavaScript MIME-Typ](/de/docs/Web/HTTP/MIME_types#textjavascript) ist.

## Beispiele

Verhindern Sie, dass Browser fälschlicherweise Nicht-Stylesheets als Stylesheets und Nicht-Skripte als Skripte erkennen:

```http
X-Content-Type-Options: nosniff
```

## Siehe auch

- [MIME-Typen (IANA-Medientypen): MIME-Sniffing](/de/docs/Web/HTTP/MIME_types#mime_sniffing)
- [Ordnungsgemäße Konfiguration von Server-MIME-Typen](/de/docs/Learn_web_development/Extensions/Server-side/Configuring_server_MIME_types)
