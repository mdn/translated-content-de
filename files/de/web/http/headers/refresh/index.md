---
title: Refresh
slug: Web/HTTP/Headers/Refresh
l10n:
  sourceCommit: cadc98b0f5f2a770c6ab9b1ca0bf31a90378c6df
---

{{HTTPSidebar}}

Der HTTP **`Refresh`** {{Glossary("response_header", "Antwort-Header")}} weist einen Webbrowser an, entweder die Seite zu aktualisieren oder nach einer bestimmten Zeitspanne, nachdem die Seite vollständig geladen wurde, umzuleiten.
Er ist genau gleichwertig mit der Verwendung von [`<meta http-equiv="refresh" content="...">`](/de/docs/Web/HTML/Element/meta#http-equiv) in HTML.

> [!NOTE]
> Auch wenn er in der HTTP-Antwort vorhanden ist, wird der `Refresh`-Header weiterhin vom HTML-Lademechanismus verarbeitet und erfolgt nach HTTP- oder JavaScript-Weiterleitungen. Weitere Informationen finden Sie in der [Reihenfolge der Priorität von Weiterleitungen](/de/docs/Web/HTTP/Redirections#order_of_precedence).

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Headertyp</th>
      <td>{{Glossary("Response_header", "Antwort-Header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_header_name", "Verbotener Headername")}}</th>
      <td>Nein</td>
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
  - : Eine nicht-negative Anzahl von Sekunden, nach denen die Seite aktualisiert werden soll. Bruchteile werden erkannt, aber ignoriert; es sollten nur ganze Zahlen angegeben werden.
- `<url>` {{optional_inline}}
  - : Falls vorhanden, wird der Browser stattdessen zur angegebenen URL umleiten, anstatt mit der aktuellen URL zu aktualisieren. Diese URL kann in Anführungszeichen stehen oder nicht. Das `url=`-Präfix ist nicht case-sensitive und optional.

## Beispiele

### Aktualisierung einer Seite nach einer bestimmten Zeit

Dieser Header bewirkt, dass der Browser die Seite 5 Sekunden nach dem vollständigen Laden (d. h. nach dem [`load`](/de/docs/Web/API/Window/load_event) Ereignis) aktualisiert:

```http
Refresh: 5
```

### Umleitung nach einer bestimmten Zeit

Dieser Header bewirkt, dass der Browser 5 Sekunden nach dem vollständigen Laden der Seite zu einer URL umleitet:

```http
Refresh: 5; url=https://example.com/
```

> [!NOTE]
> Lesen Sie das [`http-equiv="refresh"`](/de/docs/Web/HTML/Element/meta#refresh) Attribut im HTML-Referenz für wichtige Informationen über die Auswirkungen automatischer Weiterleitungen auf die Barrierefreiheit.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{htmlelement("meta")}}
- [Weiterleitungen in HTTP](/de/docs/Web/HTTP/Redirections)
- [Der Refresh-Header ist immer noch bei uns](https://lists.w3.org/Archives/Public/ietf-http-wg/2019JanMar/0197.html) HTTP-Arbeitsgruppennachricht (2019)
