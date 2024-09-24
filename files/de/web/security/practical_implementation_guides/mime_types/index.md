---
title: MIME-Typ-Verifizierung
slug: Web/Security/Practical_implementation_guides/MIME_types
l10n:
  sourceCommit: f75b2c86ae4168e59416aed4c7121f222afc201d
---

{{QuickLinksWithSubpages("/de/docs/Web/Security")}}

Der [`X-Content-Type-Options`](/de/docs/Web/HTTP/Headers/X-Content-Type-Options)-Header informiert Browser darüber, Skripte und Stylesheets nur zu laden, wenn der Server den korrekten {{Glossary("MIME_type", "MIME-Typ")}} angibt.

## Problem

Ohne ordnungsgemäße MIME-Typ-Verifizierung könnten Browser fälschlicherweise Dateien, die keine Skripte oder Stylesheets sind, als solche erkennen. Dieser Fehler ermöglicht, dass potenziell bösartige Dateien über {{htmlelement("script")}}- und {{htmlelement("link")}}-Elemente im Rahmen von Cross-Site-Scripting ({{Glossary("Cross-site_scripting", "XSS")}})-Angriffen geladen werden.

## Lösung

Alle Websites müssen den `X-Content-Type-Options`-Header mit dem Wert `nosniff` setzen und geeignete MIME-Typen für die Dateien festlegen, die sie bereitstellen (z. B. über den [`Content-Type`](/de/docs/Web/HTTP/Headers/Content-Type)-Header).

`nosniff` blockiert eine Anfrage, wenn das Ziel der Anfrage:

- vom Typ `style` ist und der MIME-Typ nicht `text/css` ist.
- vom Typ `script` ist und der MIME-Typ kein gültiger [JavaScript-MIME-Typ](/de/docs/Web/HTTP/MIME_types#textjavascript) ist.

## Beispiele

Verhindern Sie, dass Browser fälschlicherweise Nicht-Stylesheets als Stylesheets und Nicht-Skripte als Skripte erkennen:

```http
X-Content-Type-Options: nosniff
```

## Siehe auch

- [MIME-Typen (IANA-Medientypen): MIME-Sniffing](/de/docs/Web/HTTP/MIME_types#mime_sniffing)
- [Server-MIME-Typen ordnungsgemäß konfigurieren](/de/docs/Learn/Server-side/Configuring_server_MIME_types)
