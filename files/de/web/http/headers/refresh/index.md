---
title: Refresh
slug: Web/HTTP/Headers/Refresh
l10n:
  sourceCommit: cbbe2e84fbf84f6af2d889bb44dd7e0521a18469
---

{{HTTPSidebar}}

Der **`Refresh`** Antwort-Header weist einen Webbrowser an, die Seite entweder zu aktualisieren oder umzuleiten, nachdem eine bestimmte Zeitspanne vergangen ist, nachdem die Seite vollständig geladen wurde. Es ist genau gleichbedeutend mit der Verwendung von [`<meta http-equiv="refresh" content="...">`](/de/docs/Web/HTML/Element/meta#http-equiv) in HTML.

> [!NOTE]
> Obwohl es in der HTTP-Antwort vorhanden ist, wird der `Refresh`-Header dennoch von der HTML-Lademechanik behandelt und tritt nach HTTP- oder JavaScript-Weiterleitungen ein. Siehe [Reihenfolge der Weiterleitungsprioritäten](/de/docs/Web/HTTP/Redirections#order_of_precedence) für weitere Informationen.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Response header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden header name")}}</th>
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
  - : Eine nicht-negative Anzahl von Sekunden, nach der die Seite aktualisiert werden soll. Dezimalstellen werden erkannt, aber ignoriert; es sollten nur ganze Zahlen angegeben werden.
- `<url>` {{optional_inline}}
  - : Wenn vorhanden, wird der Browser zur angegebenen URL umleiten, anstatt die aktuelle URL zu aktualisieren. Diese URL kann in Anführungszeichen oder ohne Anführungszeichen angegeben werden. Das Präfix `url=` ist nicht unterscheidend nach Groß- und Kleinschreibung und optional.

## Beispiele

Dieser Header bewirkt, dass der Browser die Seite 5 Sekunden nach vollständigem Laden der Seite aktualisiert (das heißt, nach dem {{domxref("Window/load_event", "load")}} Ereignis):

```http
Refresh: 5
```

Dieser Header bewirkt, dass der Browser 5 Sekunden nach vollständigem Laden der Seite zur Homepage umleitet:

```http
Refresh: 5; url=https://example.com/
```

Sehen Sie sich das [`http-equiv="refresh"`](/de/docs/Web/HTML/Element/meta#refresh) Attribut im HTML-Referenzdokument für wichtige Informationen zu den Barrierefreiheitseinschränkungen automatischer Umleitungen an.

## Spezifikationen

{{Specifications}}

## Kompatibilität der Browser

{{Compat}}

## Siehe auch

- {{htmlelement("meta")}}
- [Weiterleitungen in HTTP](/de/docs/Web/HTTP/Redirections)
