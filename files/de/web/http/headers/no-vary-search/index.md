---
title: No-Vary-Search
slug: Web/HTTP/Headers/No-Vary-Search
l10n:
  sourceCommit: 879e0a9c9d60831afcc7f66ea1b5f43ea0cd4361
---

{{HTTPSidebar}}{{SeeCompatTable}}

Der **`No-Vary-Search`** Antwort-Header spezifiziert eine Reihe von Regeln, die definieren, wie die Abfrageparameter einer URL das Cache-Matching beeinflussen. Diese Regeln bestimmen, ob dieselbe URL mit unterschiedlichen URL-Parametern als separate Browser-Cache-Einträge gespeichert werden soll.

> **Note:** [Speculation rules](/de/docs/Web/API/Speculation_Rules_API) können ein `expects_no_vary_search` Feld enthalten, das dem Browser anzeigt, welcher erwartete `No-Vary-Search` Wert (falls vorhanden) für Dokumente sein wird, die es über die Spekulationsregeln Prefetch/Prerender-Anfragen erhält. Der Browser kann dies nutzen, um im Voraus zu bestimmen, ob es nützlicher ist, auf einen vorhandenen Prefetch/Prerender zu warten oder eine neue Fetch-Anfrage zu starten, wenn die Spekulationsregel erfüllt ist.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header type</th>
      <td>[Response header](/de/docs/Glossary/Response_header)</td>
    </tr>
    <tr>
      <th scope="row">[Forbidden header name](/de/docs/Glossary/Forbidden_header_name)</th>
      <td>no</td>
    </tr>
  </tbody>
</table>

## Syntax

```http
No-Vary-Search: key-order
No-Vary-Search: params
No-Vary-Search: params=("param1" "param2" "utm_campaign")
No-Vary-Search: params, except=("param1" "param2")
```

## Direktiven

- `key-order`
  - : Ein boolean. Wenn im Header-Wert enthalten, zeigt er an, dass Unterschiede in der Reihenfolge der Parameter zwischen ansonsten identischen URLs nicht dazu führen, dass sie als separate Einträge gecached werden. Unterschiede in den vorhandenen Parametern _werden_ dazu führen, dass sie separat gecached werden.
- `params`
  - : Entweder ein boolean oder eine Liste von Strings:
    - Wenn im Header-Wert als boolean enthalten, zeigt er an, dass Unterschiede in den Parametern zwischen ansonsten identischen URLs nicht dazu führen, dass sie als separate Einträge gecached werden.
    - Wenn im Header-Wert als Liste enthalten, zeigt es an, dass das Vorhandensein der spezifisch aufgelisteten Parameter nicht dazu führen wird, dass ansonsten identische URLs als separate Einträge gecached werden. Das Vorhandensein anderer Parameter _wird_ dazu führen, dass sie separat gecached werden.
- `except`
  - : Eine Liste von Strings. Wenn im Header-Wert enthalten, zeigt es an, dass das Vorhandensein der spezifisch aufgelisteten Parameter dazu führen _wird_, dass ansonsten identische URLs als separate Einträge gecached werden. Das Vorhandensein anderer Parameter _wird_ nicht dazu führen, dass sie separat gecached werden. Eine boolean `params` Direktive muss zusammen mit `except` enthalten sein, damit es wirksam wird.

## Beispiele

### Erlauben von Antworten von URLs mit unterschiedlich geordneten Parametern, um denselben Cache-Eintrag zu treffen

Wenn Sie beispielsweise eine Suchseite haben, die ihre Suchkriterien in URL-Parametern speichert und nicht garantieren können, dass die Parameter jedes Mal in derselben Reihenfolge zur URL hinzugefügt werden, können Sie Antworten von URLs, die bis auf die Reihenfolge der Parameter identisch sind, erlauben, denselben Cache-Eintrag zu treffen, indem Sie `key-order` verwenden:

```http
No-Vary-Search: key-order
```

Wenn dieser Header zu den zugehörigen Antworten hinzugefügt wird, würden die folgenden URLs beim Durchsuchen des Caches als gleichwertig behandelt werden:

```plain
https://search.example.com?a=1&b=2&c=3
https://search.example.com?b=2&a=1&c=3
```

Das Vorhandensein unterschiedlicher URL-Parameter wird jedoch dazu führen, dass diese URLs separat gecached werden. Zum Beispiel:

```plain
https://search.example.com?a=1&b=2&c=3
https://search.example.com?b=2&a=1&c=3&d=4
```

Die untenstehenden Beispiele veranschaulichen, wie Sie kontrollieren können, welche Parameter im Kontext des Cache-Matchings ignoriert werden.

### Erlauben von Antworten von URLs mit unterschiedlichen Parametern, um denselben Cache-Eintrag zu treffen

Betrachten Sie einen Fall, in dem eine Benutzerverzeichnis-Startseite, `/users`, bereits gecached wurde. Ein `id` Parameter könnte verwendet werden, um Informationen zu einem bestimmten Benutzer anzuzeigen, zum Beispiel `/users?id=345`. Ob diese URL für Cache-Matching-Zwecke als identisch angesehen werden sollte, hängt vom Verhalten der Anwendung ab:

- Wenn dieser Parameter die Wirkung hat, eine völlig neue Seite zu laden, die die Informationen für den angegebenen Benutzer enthält, sollte die Antwort von dieser URL separat gecached werden.
- Wenn dieser Parameter die Wirkung hat, den angegebenen Benutzer auf derselben Seite hervorzuheben und möglicherweise ein Ausklappfeld anzuzeigen, das seine Daten anzeigt, wäre es besser, wenn der Browser die gecachte Antwort für `/users` verwendet. Dies könnte zu Leistungsverbesserungen beim Laden der Benutzerseiten führen.

Wenn Ihre Anwendung wie das zweite oben beschriebene Beispiel funktioniert, könnten Sie verursachen, dass sowohl `/users` als auch `/users?id=345` für Cache-Zwecke als identisch behandelt werden, indem Sie einen `No-Vary-Search` Header wie folgt verwenden:

```http
No-Vary-Search: params=("id")
```

> [!NOTE]
> Wenn ein Parameter mit `params` aus dem Cache-Schlüssel ausgeschlossen wird, wird er, wenn er in der URL enthalten ist, für Cache-Matching-Zwecke ignoriert, unabhängig davon, wo er in der Parameterliste erscheint.

### Erlauben von Antworten von URLs mit mehreren unterschiedlichen Parametern, um denselben Cache-Eintrag zu treffen

Angenommen, Sie hatten auch URL-Parameter, die die Liste der Benutzer auf der Seite in aufsteigender oder absteigender alphabetischer Reihenfolge sortieren und die Sprache für die Anzeige der UI-Strings angeben, zum Beispiel `/users?id=345&order=asc&lang=fr`.

Sie könnten den Browser dazu bringen, all diese Parameter bei der Cache-Matching-Berücksichtigung wie folgt zu ignorieren:

```http
No-Vary-Search: params=("id" "order" "lang")
```

Wenn Sie möchten, dass der Browser all diese _und_ alle anderen, die möglicherweise vorhanden sind, bei der Cache-Matching-Berücksichtigung ignoriert, könnten Sie die boolean Form von `params` verwenden:

```http
No-Vary-Search: params
```

### Spezifizieren von Parametern, die Cache-Missing verursachen

Angenommen, die App würde sich anders verhalten, wobei `/users` auf die Hauptbenutzerverzeichnis-Startseite verweist und `/users?id=345` auf eine völlig separate Detailseite für einen bestimmten Benutzer verweist. In diesem Fall möchten Sie, dass der Browser alle oben genannten Parameter für Cache-Matching-Zwecke ignoriert, _außer_ `id`, dessen Vorhandensein dazu führen würde, dass der Browser den `/users` Cache-Eintrag nicht trifft und `/users?id=345` vom Server anfordert.

Dies kann wie folgt erreicht werden:

```http
No-Vary-Search: params, except=("id")
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
