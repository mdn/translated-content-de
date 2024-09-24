---
title: No-Vary-Search
slug: Web/HTTP/Headers/No-Vary-Search
l10n:
  sourceCommit: 879e0a9c9d60831afcc7f66ea1b5f43ea0cd4361
---

{{HTTPSidebar}}{{SeeCompatTable}}

Der **`No-Vary-Search`** Response-Header spezifiziert eine Reihe von Regeln, die festlegen, wie die Abfrageparameter einer URL das Cache-Matching beeinflussen. Diese Regeln bestimmen, ob dieselbe URL mit unterschiedlichen URL-Parametern als separate Einträge im Browser-Cache gespeichert werden soll.

> **Note:** [Spekulationsregeln](/de/docs/Web/API/Speculation_Rules_API) können ein Feld `expects_no_vary_search` enthalten, das dem Browser angibt, welchen `No-Vary-Search`-Wert (falls vorhanden) für Dokumente erwartet wird, die mittels der Spekulationsregeln Prefetch/Prerender-Anfragen erhalten. Der Browser kann dies nutzen, um im Voraus zu bestimmen, ob es nützlicher ist, auf einen bestehenden Prefetch/Prerender zu warten oder eine neue Fetch-Anfrage zu starten, wenn die Spekulationsregel übereinstimmt.

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
No-Vary-Search: key-order
No-Vary-Search: params
No-Vary-Search: params=("param1" "param2" "utm_campaign")
No-Vary-Search: params, except=("param1" "param2")
```

## Direktiven

- `key-order`
  - : Ein Boolean. Wenn im Header-Wert enthalten, gibt es an, dass Unterschiede in der Reihenfolge der Parameter bei ansonsten identischen URLs nicht dazu führen, dass sie als separate Einträge zwischengespeichert werden. Unterschiede in den vorhandenen Parametern _werden_ jedoch dazu führen, dass sie separat zwischengespeichert werden.
- `params`
  - : Entweder ein Boolean oder eine Liste von Strings:
    - Wenn im Header-Wert als Boolean enthalten, gibt es an, dass Unterschiede in Parametern bei ansonsten identischen URLs nicht dazu führen, dass sie als separate Einträge zwischengespeichert werden.
    - Wenn im Header-Wert als Liste enthalten, gibt es an, dass das Vorhandensein der spezifisch aufgelisteten Parameter nicht dazu führen wird, dass ansonsten identische URLs als separate Einträge zwischengespeichert werden. Das Vorhandensein anderer Parameter _wird_ dazu führen, dass sie separat zwischengespeichert werden.
- `except`
  - : Eine Liste von Strings. Wenn im Header-Wert enthalten, gibt es an, dass das Vorhandensein der spezifisch aufgelisteten Parameter _dazu führen wird_, dass ansonsten identische URLs als separate Einträge zwischengespeichert werden. Das Vorhandensein anderer Parameter _wird nicht_ dazu führen, dass sie separat zwischengespeichert werden. Eine Boolean-Direktive `params` muss zusammen mit `except` enthalten sein, damit es wirksam wird.

## Beispiele

### Erlauben von Antworten von URLs mit unterschiedlich geordneten Parametern, denselben Cache-Eintrag zu treffen

Wenn Sie zum Beispiel eine Suchseite haben, die ihre Suchkriterien in URL-Parametern speichert, und Sie nicht garantieren können, dass die Parameter jedes Mal in der gleichen Reihenfolge zur URL hinzugefügt werden, können Sie Antworten von URLs, die identisch sind außer in der Reihenfolge der Parameter, erlauben, denselben Cache-Eintrag zu treffen, indem Sie `key-order` verwenden:

```http
No-Vary-Search: key-order
```

Wenn dieser Header zu den zugehörigen Antworten hinzugefügt wird, würden die folgenden URLs als gleichwertig behandelt, wenn der Cache durchsucht wird:

```plain
https://search.example.com?a=1&b=2&c=3
https://search.example.com?b=2&a=1&c=3
```

Das Vorhandensein unterschiedlicher URL-Parameter wird jedoch dazu führen, dass diese URLs separat zwischengespeichert werden. Zum Beispiel:

```plain
https://search.example.com?a=1&b=2&c=3
https://search.example.com?b=2&a=1&c=3&d=4
```

Die untenstehenden Beispiele zeigen, wie gesteuert werden kann, welche Parameter im Kontext von Cache-Matching ignoriert werden.

### Erlauben von Antworten von URLs mit einem unterschiedlichen Parameter, denselben Cache-Eintrag zu treffen

Betrachten Sie einen Fall, in dem eine Benutzerverzeichnis-Landing-Page, `/users`, bereits zwischengespeichert wurde. Ein `id`-Parameter könnte verwendet werden, um Informationen zu einem spezifischen Benutzer anzuzeigen, zum Beispiel `/users?id=345`. Ob diese URL für Cache-Matching-Zwecke als identisch angesehen werden soll, hängt vom Verhalten der Anwendung ab:

- Wenn dieser Parameter die Wirkung hat, eine völlig neue Seite zu laden, die die Informationen für den angegebenen Benutzer enthält, dann sollte die Antwort von dieser URL separat zwischengespeichert werden.
- Wenn dieser Parameter die Wirkung hat, den angegebenen Benutzer auf derselben Seite hervorzuheben und vielleicht ein Ausklappfenster anzuzeigen, in dem seine Daten dargestellt werden, dann wäre es besser für den Browser, die zwischengespeicherte Antwort für `/users` zu verwenden. Dies könnte zu Leistungsverbesserungen beim Laden der Benutzerseiten führen.

Wenn sich Ihre Anwendung wie im zweiten oben beschriebenen Beispiel verhält, könnten Sie sowohl `/users` als auch `/users?id=345` als identisch für Cache-Zwecke behandeln, indem Sie einen `No-Vary-Search`-Header wie folgt verwenden:

```http
No-Vary-Search: params=("id")
```

> [!NOTE]
> Wenn ein Parameter mit `params` aus dem Cache-Schlüssel ausgeschlossen wird, wird er, falls er in der URL enthalten ist, für Cache-Matching-Zwecke ignoriert, unabhängig davon, wo er in der Parameterliste erscheint.

### Erlauben von Antworten von URLs mit mehreren unterschiedlichen Parametern, denselben Cache-Eintrag zu treffen

Nehmen Sie an, Sie hätten auch URL-Parameter, die die Liste der Benutzer auf der Seite in aufsteigender oder absteigender alphabetischer Reihenfolge sortieren und die Sprache angeben, in der die UI-Texte angezeigt werden sollen, zum Beispiel `/users?id=345&order=asc&lang=fr`.

Sie könnten den Browser dazu bringen, all dies bei der Betrachtung des Cache-Matchings zu ignorieren wie folgt:

```http
No-Vary-Search: params=("id" "order" "lang")
```

Wenn Sie wollten, dass der Browser all dies _und_ alle anderen, die eventuell vorhanden sein könnten, beim Cache-Matching ignoriert, könnten Sie die Boolean-Form von `params` verwenden:

```http
No-Vary-Search: params
```

### Angabe von Parametern, die Cache-Match-Verfehlungen verursachen

Angenommen, die App verhält sich anders, wobei `/users` auf die Haupt-Benutzerverzeichnis-Landing-Page verweist und `/users?id=345` auf eine komplett separate Detailseite für einen spezifischen Benutzer. In diesem Fall möchten Sie, dass der Browser alle oben erwähnten Parameter für Cache-Matching-Zwecke ignoriert, _außer_ `id`, dessen Vorhandensein dazu führen würde, dass der Browser den Cache-Eintrag `/users` nicht übereinstimmt und `/users?id=345` vom Server anfordert.

Dies kann wie folgt erreicht werden:

```http
No-Vary-Search: params, except=("id")
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
