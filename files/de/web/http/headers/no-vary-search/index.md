---
title: No-Vary-Search
slug: Web/HTTP/Headers/No-Vary-Search
l10n:
  sourceCommit: cadc98b0f5f2a770c6ab9b1ca0bf31a90378c6df
---

{{HTTPSidebar}}{{SeeCompatTable}}

Der HTTP **`No-Vary-Search`** {{Glossary("response_header", "Antwort-Header")}} legt eine Reihe von Regeln fest, die definieren, wie Abfrageparameter einer URL das Cache-Matching beeinflussen. Diese Regeln bestimmen, ob dieselbe URL mit unterschiedlichen URL-Parametern als separate Browser-Cache-Einträge gespeichert werden sollte.

> [!NOTE]
> Die [Speculation Rules API](/de/docs/Web/API/Speculation_Rules_API) kann ein `expects_no_vary_search`-Feld enthalten, welches dem Browser anzeigt, welcher erwartete `No-Vary-Search`-Wert für Dokumente gelten könnte, die es über die Speculation Rules zum Vorabrufen/Vorabladen erhält. Der Browser kann dies nutzen, um im Voraus zu bestimmen, ob es nützlicher ist, auf ein bestehendes Vorabrufen/Vorabladen zu warten oder eine neue Abrufanfrage zu starten, wenn die Spekulationsregel übereinstimmt.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Response_header", "Antwort-Header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_header_name", "Verbotener Header-Name")}}</th>
      <td>Nein</td>
    </tr>
  </tbody>
</table>

## Syntax

```http
No-Vary-Search: key-order
No-Vary-Search: params
No-Vary-Search: params=("param1" "param2")
No-Vary-Search: params, except=("param1" "param2")
No-Vary-Search: key-order, params, except=("param1")
```

## Direktiven

- `key-order` {{optional_inline}}
  - : Gibt an, dass URLs nicht als separate Einträge gecacht werden, wenn _die Reihenfolge_, in der die Parameter in der URL erscheinen, der einzige Unterschied ist. Das Vorhandensein anderer Parameter wird dazu führen, dass URLs separat gecacht werden.
- `params` {{optional_inline}}
  - : Entweder ein Boolean oder eine Liste von Strings:
    - Als Boolean (`params`) zeigt es an, dass URLs, die sich nur durch ihre Parameter unterscheiden, nicht als separate Einträge gecacht werden.
    - Eine innere Liste von durch Leerzeichen getrennten Strings (`params=("param1" "param2")`). Gibt an, dass URLs, die sich nur durch die aufgelisteten Parameter unterscheiden, nicht als separate Einträge gecacht werden. Das Vorhandensein anderer Parameter wird dazu führen, dass sie separat gecacht werden.
- `except` {{optional_inline}}
  - : Eine innere Liste von durch Leerzeichen getrennten Strings (`except=("param1" "param2")`). Gibt an, dass URLs, die sich nur durch die aufgelisteten Parameter unterscheiden, als separate Einträge gecacht werden. Eine Boolean-`params`-Direktive muss enthalten sein, damit es wirksam wird (`params, except=("param1" "param2")`). Das Vorhandensein anderer Parameter, die nicht in der `except=`-Liste sind, wird nicht dazu führen, dass URLs als separate Einträge gecacht werden.

## Beispiele

### Erlauben, dass Antworten von URLs mit unterschiedlich angeordneten Parametern dieselben Cache-Einträge verwenden

Wenn Sie beispielsweise eine Suchseite haben, die ihre Suchkriterien in URL-Parametern speichert, und Sie nicht garantieren können, dass die Parameter jedes Mal in der gleichen Reihenfolge hinzugefügt werden, können Sie Antworten von URLs, die nur in der Reihenfolge der Parameter identisch sind, erlauben, denselben Cache-Eintrag mit `key-order` zu verwenden:

```http
No-Vary-Search: key-order
```

Wenn dieser Header zu den zugehörigen Antworten hinzugefügt wird, würden die folgenden URLs behandelt, als wären sie im Cache identisch:

```plain
https://search.example.com?a=1&b=2&c=3
https://search.example.com?b=2&a=1&c=3
```

Das Vorhandensein unterschiedlicher URL-Parameter wird jedoch dazu führen, dass diese URLs separat gecacht werden. Zum Beispiel:

```plain
https://search.example.com?a=1&b=2&c=3
https://search.example.com?b=2&a=1&c=3&d=4
```

Die folgenden Beispiele veranschaulichen, wie gesteuert werden kann, welche Parameter im Kontext des Cache-Matchings ignoriert werden.

### Erlauben, dass Antworten von URLs mit einem anderen Parameter denselben Cache-Eintrag verwenden

Betrachten Sie einen Fall, bei dem eine Benutzerverzeichnis-Startseite, `/users`, bereits gecacht wurde. Ein `id`-Parameter könnte verwendet werden, um Informationen zu einem bestimmten Benutzer anzuzeigen, z.B. `/users?id=345`. Ob diese URL für Cache-Matching-Zwecke als identisch betrachtet werden sollte, hängt vom Verhalten der Anwendung ab:

- Wenn dieser Parameter die Wirkung hat, eine völlig neue Seite mit den Informationen für den angegebenen Benutzer zu laden, sollte die Antwort von dieser URL separat gecacht werden.
- Wenn dieser Parameter die Wirkung hat, den angegebenen Benutzer auf derselben Seite hervorzuheben, und eventuell ein ausziehbares Panel anzuzeigen, das deren Daten zeigt, wäre es besser, wenn der Browser die gecachte Antwort für `/users` verwendet. Dies könnte zu Leistungsverbesserungen beim Laden der Benutzerseiten führen.

Wenn Ihre Anwendung wie im zweiten oben beschriebenen Beispiel funktioniert, könnten Sie sowohl `/users` als auch `/users?id=345` für Cache-Zwecke über einen `No-Vary-Search`-Header als identisch behandeln lassen, und zwar so:

```http
No-Vary-Search: params=("id")
```

> [!NOTE]
> Wenn ein Parameter mithilfe von `params` vom Cache-Key ausgeschlossen wird und er in der URL enthalten ist, wird er für Cache-Matching-Zwecke ignoriert, unabhängig davon, wo er in der Parameterliste erscheint.

### Erlauben, dass Antworten von URLs mit mehreren unterschiedlichen Parametern denselben Cache-Eintrag verwenden

Angenommen, Sie haben auch URL-Parameter, die die Liste der Benutzer auf der Seite in aufsteigender oder absteigender alphabetischer Reihenfolge sortieren, und die Sprache für die Anzeige der UI-Strings angeben, beispielsweise `/users?id=345&order=asc&lang=fr`.

Sie könnten den Browser dazu bringen, all diese bei der Betrachtung des Cache-Matchings zu ignorieren, und zwar so:

```http
No-Vary-Search: params=("id" "order" "lang")
```

Wenn Sie wollten, dass der Browser all diese _und_ alle anderen, die möglicherweise vorhanden sind, bei der Cache-Abstimmung ignoriert, könnten Sie die boolesche Form von `params` verwenden:

```http
No-Vary-Search: params
```

### Angabe von Parametern, die tatsächlich Cache-Miss-Matches verursachen

Angenommen, die App verhält sich anders, wobei `/users` auf die Hauptbenutzerverzeichnis-Startseite zeigt und `/users?id=345` auf eine völlig separate Detailseite für einen bestimmten Benutzer. In diesem Fall würden Sie wollen, dass der Browser alle oben genannten Parameter für Cache-Matching-Zwecke ignoriert, _außer_ `id`, dessen Vorhandensein dazu führen würde, dass der Browser den `/users`-Cache-Eintrag nicht findet und `/users?id=345` vom Server anfordert.

Dies kann folgendermaßen erreicht werden:

```http
No-Vary-Search: params, except=("id")
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
