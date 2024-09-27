---
title: Refresh
slug: Web/HTTP/Headers/Refresh
l10n:
  sourceCommit: cbbe2e84fbf84f6af2d889bb44dd7e0521a18469
---

{{HTTPSidebar}}

Der **`Refresh`**-Antwortheader veranlasst einen Webbrowser, die Seite entweder zu aktualisieren oder umzuleiten, nachdem eine festgelegte Zeit vergangen ist, seit die Seite vollständig geladen wurde. Er ist genau äquivalent zur Verwendung des [`<meta http-equiv="refresh" content="...">`](/de/docs/Web/HTML/Element/meta#http-equiv) in HTML.

> [!NOTE]
> Auch wenn er in der HTTP-Antwort vorhanden ist, wird der `Refresh`-Header trotzdem von der HTML-Lademechanik verarbeitet und findet nach HTTP- oder JavaScript-Weiterleitungen statt. Siehe [Reihenfolge der Weiterleitungspriorität](/de/docs/Web/HTTP/Redirections#order_of_precedence) für weitere Informationen.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>[Antwortheader](/de/docs/Glossary/Response_header)</td>
    </tr>
    <tr>
      <th scope="row">[Verbotener Headername](/de/docs/Glossary/Forbidden_header_name)</th>
      <td>nein</td>
    </tr>
  </tbody>
</table>

## Syntax

```http
Refresh: <time>
Refresh: <time>, url=<url>
Refresh: <time>; url=<url>
```

- `<time>`
  - : Eine nicht-negative Anzahl von Sekunden, nach denen die Seite aktualisiert werden soll. Bruchteile werden erkannt, aber ignoriert; Sie sollten nur ganze Zahlen angeben.
- `<url>` {{optional_inline}}
  - : Wenn vorhanden, wird der Browser zur angegebenen URL weiterleiten, anstatt mit der aktuellen URL zu aktualisieren. Diese URL kann in Anführungszeichen stehen oder nicht. Das Präfix `url=` ist nicht case-sensitiv und optional.

## Beispiele

Dieser Header veranlasst den Browser, die Seite 5 Sekunden nachdem sie vollständig geladen wurde (das heißt, nach dem [`load`](/de/docs/Web/API/Window/load_event)-Ereignis) zu aktualisieren:

```http
Refresh: 5
```

Dieser Header veranlasst den Browser, 5 Sekunden nachdem die Seite vollständig geladen wurde, zur Startseite weiterzuleiten:

```http
Refresh: 5; url=https://example.com/
```

Siehe das [`http-equiv="refresh"`](/de/docs/Web/HTML/Element/meta#refresh) Attribut in der HTML-Referenz für wichtige Informationen über die Zugänglichkeit von automatischen Weiterleitungen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{htmlelement("meta")}}
- [Weiterleitungen in HTTP](/de/docs/Web/HTTP/Redirections)
