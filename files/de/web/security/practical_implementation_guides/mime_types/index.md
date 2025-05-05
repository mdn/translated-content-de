---
title: MIME-Typ-Verifizierung
slug: Web/Security/Practical_implementation_guides/MIME_types
l10n:
  sourceCommit: ade8d870ed7e18a71dc51fe25aa13d812fb82558
---

Der [`X-Content-Type-Options`](/de/docs/Web/HTTP/Reference/Headers/X-Content-Type-Options)-Header informiert Browser, Skripte und Stylesheets nur dann zu laden, wenn der Server den korrekten {{Glossary("MIME_type", "MIME-Typ")}} angibt.

## Problem

Ohne ordnungsgemäße MIME-Typ-Verifizierung könnten Browser fälschlicherweise Nicht-Skript- und Nicht-Stylesheet-Dateien als Skripte oder Stylesheets erkennen. Dieser Fehler ermöglicht das Laden potenziell schädlicher Dateien über {{htmlelement("script")}} und {{htmlelement("link")}}-Elemente im Rahmen von Cross-Site-Scripting ({{Glossary("Cross-site_scripting", "XSS")}})-Angriffen.

## Lösung

Alle Websites müssen den `X-Content-Type-Options`-Header mit dem Wert `nosniff` setzen und geeignete MIME-Typen für die Dateien angeben, die sie bereitstellen (d.h. über den [`Content-Type`](/de/docs/Web/HTTP/Reference/Headers/Content-Type)-Header).

`nosniff` blockiert eine Anfrage, wenn das Anfragedatum:

- vom Typ `style` ist und der MIME-Typ nicht `text/css` ist.
- vom Typ `script` ist und der MIME-Typ kein gültiger [JavaScript-MIME-Typ](/de/docs/Web/HTTP/Guides/MIME_types#textjavascript) ist.

## Beispiele

Verhindert, dass Browser fälschlicherweise Nicht-Stylesheets als Stylesheets und Nicht-Skripte als Skripte erkennen:

```http
X-Content-Type-Options: nosniff
```

## Siehe auch

- [MIME-Typen (IANA-Medientypen): MIME Sniffing](/de/docs/Web/HTTP/Guides/MIME_types#mime_sniffing)
- [Server-MIME-Typen richtig konfigurieren](/de/docs/Learn_web_development/Extensions/Server-side/Configuring_server_MIME_types)
