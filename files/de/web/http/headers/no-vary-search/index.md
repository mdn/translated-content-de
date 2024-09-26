---
title: No-Vary-Search
slug: Web/HTTP/Headers/No-Vary-Search
l10n:
  sourceCommit: 879e0a9c9d60831afcc7f66ea1b5f43ea0cd4361
---

{{HTTPSidebar}}{{SeeCompatTable}}

Der **`No-Vary-Search`**-Antwort-Header bestimmt eine Reihe von Regeln, die festlegen, wie die Abfrageparameter einer URL das Cache-Matching beeinflussen. Diese Regeln legen fest, ob dieselbe URL mit unterschiedlichen URL-Parametern als separate Browser-Cache-Einträge gespeichert werden soll.

> **Note:** [Speculation rules](/de/docs/Web/API/Speculation_Rules_API) können ein `expects_no_vary_search`-Feld enthalten, das dem Browser anzeigt, welcher erwartete `No-Vary-Search`-Wert (falls vorhanden) für Dokumente verwendet wird, für die Vorabruf-/Vorabrender-Anfragen über die Spekulationsregeln empfangen werden. Der Browser kann dies nutzen, um im Voraus zu entscheiden, ob es nützlicher ist, auf das Ende eines bestehenden Vorabrufs/Vorabrenderings zu warten oder eine neue Abrufanfrage zu starten, wenn die Spekulationsregel erfüllt ist.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Response header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden header name")}}</th>
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
  - : Ein boolescher Wert. Wenn dieser im Header-Wert enthalten ist, zeigt er an, dass Unterschiede in der Reihenfolge der Parameter zwischen ansonsten identischen URLs nicht dazu führen, dass sie als separate Einträge im Cache gespeichert werden. Unterschiede in den vorhandenen Parametern _werden_ dazu führen, dass sie separat gespeichert werden.
- `params`
  - : Entweder ein boolescher Wert oder eine Liste von Zeichenfolgen:
    - Wenn als boolescher Wert im Header-Wert enthalten, zeigt er an, dass Unterschiede in den Parametern zwischen ansonsten identischen URLs nicht dazu führen, dass sie als separate Einträge im Cache gespeichert werden.
    - Wenn als Liste im Header-Wert enthalten, zeigt er an, dass das Vorhandensein der spezifisch aufgelisteten Parameter nicht dazu führt, dass ansonsten identische URLs als separate Einträge im Cache gespeichert werden. Das Vorhandensein anderer Parameter _wird_ dazu führen, dass sie separat gespeichert werden.
- `except`
  - : Eine Liste von Zeichenfolgen. Wenn im Header-Wert enthalten, zeigt sie an, dass das Vorhandensein der spezifisch aufgelisteten Parameter _wird_ dazu führen, dass ansonsten identische URLs als separate Einträge im Cache gespeichert werden. Das Vorhandensein anderer Parameter _wird nicht_ dazu führen, dass sie separat gespeichert werden. Eine boolesche `params`-Direktive muss zusammen mit `except` enthalten sein, damit es wirksam wird.

## Beispiele

### Erlauben Sie, dass Antworten von URLs mit unterschiedlich geordneten Parametern den gleichen Cache-Eintrag treffen

Wenn Sie beispielsweise eine Suchseite haben, die ihre Suchkriterien in URL-Parametern speichert, und Sie nicht garantieren können, dass die Parameter jedes Mal in der gleichen Reihenfolge zur URL hinzugefügt werden, können Sie Antworten von URLs, die abgesehen von der Reihenfolge der Parameter identisch sind, den gleichen Cache-Eintrag treffen lassen, indem Sie `key-order` verwenden:

```http
No-Vary-Search: key-order
```

Wenn dieser Header zu den zugehörigen Antworten hinzugefügt wird, würden die folgenden URLs bei der Suche im Cache als gleichwertig behandelt:

```plain
https://search.example.com?a=1&b=2&c=3
https://search.example.com?b=2&a=1&c=3
```

Das Vorhandensein unterschiedlicher URL-Parameter wird jedoch dazu führen, dass diese URLs separat im Cache gespeichert werden. Zum Beispiel:

```plain
https://search.example.com?a=1&b=2&c=3
https://search.example.com?b=2&a=1&c=3&d=4
```

Die folgenden Beispiele zeigen, wie gesteuert werden kann, welche Parameter im Kontext des Cache-Matchings ignoriert werden.

### Erlauben Sie, dass Antworten von URLs mit einem unterschiedlichen Parameter den gleichen Cache-Eintrag treffen

Betrachten Sie den Fall, in dem eine Benutzerverzeichnis-Startseite, `/users`, bereits im Cache gespeichert wurde. Ein `id`-Parameter könnte verwendet werden, um Informationen zu einem bestimmten Benutzer anzuzeigen, beispielsweise `/users?id=345`. Ob diese URL als identisch für Cache-Matching-Zwecke angesehen werden sollte, hängt vom Verhalten der Anwendung ab:

- Wenn dieser Parameter die Wirkung hat, eine vollständig neue Seite zu laden, die die Informationen für den angegebenen Benutzer enthält, sollte die Antwort von dieser URL separat im Cache gespeichert werden.
- Wenn dieser Parameter die Wirkung hat, den angegebenen Benutzer auf derselben Seite hervorzuheben und vielleicht ein zusätzliches Panel mit ihren Daten anzuzeigen, wäre es besser, dass der Browser die im Cache gespeicherte Antwort für `/users` verwendet. Dies könnte Leistungsverbesserungen bei der Ladezeit der Benutzerseiten bewirken.

Wenn Ihre Anwendung wie im zweiten beschriebenen Beispiel funktioniert, könnten Sie sowohl `/users` als auch `/users?id=345` für Cache-Zwecke als identisch behandeln, indem Sie einen `No-Vary-Search`-Header wie folgt verwenden:

```http
No-Vary-Search: params=("id")
```

> [!NOTE]
> Wenn ein Parameter bei der Cache-Schlüsselverwendung durch `params` ausgeschlossen wird, wird er, wenn er in der URL enthalten ist, für Cache-Matching-Zwecke ignoriert, unabhängig davon, wo er in der Parameterliste erscheint.

### Erlauben Sie, dass Antworten von URLs mit mehreren unterschiedlichen Parametern den gleichen Cache-Eintrag treffen

Angenommen, Sie hatten auch URL-Parameter, die die Liste der Benutzer auf der Seite in aufsteigender oder absteigender alphabetischer Reihenfolge sortierten und die Sprache festlegten, in der die UI-Zeichenfolgen angezeigt werden sollen, beispielsweise `/users?id=345&order=asc&lang=fr`.

Sie könnten den Browser dazu bringen, all diese Parameter bei der Betrachtung des Cache-Matchings zu ignorieren:

```http
No-Vary-Search: params=("id" "order" "lang")
```

Wenn Sie möchten, dass der Browser all diese _und_ alle anderen, die im Cache-Matching vorhanden sein könnten, ignoriert, können Sie die boolesche Form von `params` verwenden:

```http
No-Vary-Search: params
```

### Bestimmen von Parametern, die Cache-Matching-Fehler verursachen

Angenommen, die App verhält sich anders, wobei `/users` auf die Hauptseite des Benutzerverzeichnisses verweist und `/users?id=345` auf eine vollständig separate Detailseite für einen bestimmten Benutzer. In diesem Fall möchten Sie, dass der Browser alle oben genannten Parameter für das Cache-Matching ignoriert, _ausgenommen_ `id`, dessen Vorhandensein dazu führen würde, dass der Browser den `/users`-Cache-Eintrag nicht findet und `/users?id=345` vom Server anfordert.

Dies kann wie folgt erreicht werden:

```http
No-Vary-Search: params, except=("id")
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
