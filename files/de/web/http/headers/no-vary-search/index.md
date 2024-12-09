---
title: No-Vary-Search
slug: Web/HTTP/Headers/No-Vary-Search
l10n:
  sourceCommit: ed041385cf874deec203e820fd415bdcd6f98a19
---

{{HTTPSidebar}}{{SeeCompatTable}}

Der HTTP **`No-Vary-Search`** {{Glossary("response_header", "Antwort-Header")}} gibt eine Reihe von Regeln an, die definieren, wie die Abfrageparameter einer URL das Cache-Matching beeinflussen. Diese Regeln bestimmen, ob die gleiche URL mit unterschiedlichen URL-Parametern als separate Einträge im Browser-Cache gespeichert werden soll.

> [!NOTE]
> Die [Speculation Rules API](/de/docs/Web/API/Speculation_Rules_API) kann ein `expects_no_vary_search` Feld enthalten, das dem Browser anzeigt, welchen `No-Vary-Search` Wert (falls vorhanden) für Dokumente erwartet wird, die es als Vorababruf-/Vorrender-Anfragen über die Spekulationsregeln erhält. Der Browser kann dies verwenden, um im Voraus zu entscheiden, ob es sinnvoller ist, auf einen bestehenden Vorababruf/vorrendering zu warten oder eine neue Abrufanfrage zu starten, wenn die Spekulationsregel übereinstimmt.

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
  - : Gibt an, dass URLs nicht als separate Einträge im Cache gespeichert werden, wenn _die Reihenfolge_, in der Parameter in der URL erscheinen, der einzige Unterschied ist. Die Anwesenheit anderer Parameter wird allerdings dazu führen, dass URLs separat zwischengespeichert werden.
- `params` {{optional_inline}}
  - : Entweder ein Boolean oder eine Liste von Zeichenketten:
    - Als Boolean (`params`) zeigt es an, dass URLs, die sich nur in ihren Parametern unterscheiden, nicht als separate Einträge zwischengespeichert werden.
    - Eine innere Liste von durch Leerzeichen getrennten Zeichenketten (`params=("param1" "param2")`).
      Gibt an, dass URLs, die sich nur durch die aufgeführten Parameter unterscheiden, nicht als separate Einträge zwischengespeichert werden. Die Anwesenheit anderer Parameter wird jedoch dazu führen, dass sie separat zwischengespeichert werden.
- `except` {{optional_inline}}
  - : Eine innere Liste von durch Leerzeichen getrennten Zeichenketten (`except=("param1" "param2")`).
    Gibt an, dass URLs, die sich nur durch die aufgeführten Parameter unterscheiden, _werden_ als separate Einträge zwischengespeichert. Eine `params`-Boolean-Direktive muss hinzugefügt werden, damit sie wirksam wird (`params, except=("param1" "param2")`). Die Anwesenheit anderer Parameter, die nicht in der `except=` Liste sind, wird es nicht verursachen, dass URLs als separate Einträge zwischengespeichert werden.

## Beispiele

### Ermöglichen von Antworten von URLs mit unterschiedlich geordneten Parametern die gleiche Cache-Eintragung zu treffen

Falls Sie zum Beispiel eine Suchseite haben, die ihre Suchkriterien in URL-Parametern speichert, und Sie nicht garantieren können, dass die Parameter jedes Mal in der gleichen Reihenfolge zur URL hinzugefügt werden, können Sie Antworten von URLs erlauben, die identisch sind bis auf die Reihenfolge der Parameter, um die gleiche Cache-Eintragung mit `key-order` zu treffen:

```http
No-Vary-Search: key-order
```

Wenn dieser Header zu den zugehörigen Antworten hinzugefügt wird, würden die folgenden URLs beim Suchen im Cache als gleichwertig behandelt:

```plain
https://search.example.com?a=1&b=2&c=3
https://search.example.com?b=2&a=1&c=3
```

Das Vorhandensein unterschiedlicher URL-Parameter wird jedoch dazu führen, dass diese URLs separat zwischengespeichert werden. Zum Beispiel:

```plain
https://search.example.com?a=1&b=2&c=3
https://search.example.com?b=2&a=1&c=3&d=4
```

Die untenstehenden Beispiele veranschaulichen, wie man steuert, welche Parameter im Kontext des Cache-Matchings ignoriert werden.

### Ermöglichen von Antworten von URLs mit einem unterschiedlichen Parameter die gleiche Cache-Eintragung zu treffen

Betrachten Sie einen Fall, bei dem eine Benutzerverzeichnis-Landingpage, `/users`, bereits zwischengespeichert wurde. Ein `id` Parameter könnte verwendet werden, um Informationen zu einem bestimmten Benutzer abzurufen, zum Beispiel `/users?id=345`. Ob diese URL für Cache-Matching-Zwecke als identisch betrachtet werden sollte, hängt vom Verhalten der Anwendung ab:

- Wenn dieser Parameter die Wirkung hat, eine völlig neue Seite mit den Informationen für den angegebenen Benutzer zu laden, sollte die Antwort dieser URL separat zwischengespeichert werden.
- Wenn dieser Parameter die Wirkung hat, den angegebenen Benutzer auf der gleichen Seite hervorzuheben, und möglicherweise ein herausziehbares Panel mit den Daten anzuzeigen, wäre es besser, wenn der Browser die zwischengespeicherte Antwort für `/users` verwendet. Dies könnte zu Leistungsverbesserungen beim Laden der Benutzerseiten führen.

Wenn Ihre Anwendung sich wie im zweiten oben beschriebenen Beispiel verhält, könnten Sie sowohl `/users` als auch `/users?id=345` für Cache-Zwecke als identisch behandeln, indem Sie einen `No-Vary-Search` Header wie folgt hinzufügen:

```http
No-Vary-Search: params=("id")
```

> [!NOTE]
> Wenn ein Parameter mit `params` vom Cache-Schlüssel ausgeschlossen wird, wird er, wenn er in der URL enthalten ist, für Cache-Matching-Zwecke ignoriert, unabhängig davon, wo er in der Parameterliste erscheint.

### Ermöglichen von Antworten von URLs mit mehreren verschiedenen Parametern die gleiche Cache-Eintragung zu treffen

Angenommen, Sie hatten auch URL-Parameter, die die Liste der Benutzer auf der Seite in aufsteigender oder absteigender alphabetischer Reihenfolge sortierten und die Sprache angaben, in der die UI-Zeichenfolgen angezeigt werden sollten, zum Beispiel `/users?id=345&order=asc&lang=fr`.

Sie könnten den Browser dazu bringen, all diese zu ignorieren, wenn es um das Cache-Matching geht:

```http
No-Vary-Search: params=("id" "order" "lang")
```

Wenn Sie möchten, dass der Browser sie alle _und_ alle anderen vorhandenen ignoriert, die beim Cache-Matching vorhanden sein könnten, können Sie die Boolean-Form von `params` verwenden:

```http
No-Vary-Search: params
```

### Spezifizieren von Parametern, die Cache-Matching-Fehler verursachen

Angenommen, die App verhielt sich anders, mit `/users`, das auf die Hauptbenutzerverzeichnis-Landingpage verweist, und `/users?id=345`, das auf eine völlig separate Detailseite für einen bestimmten Benutzer verweist. In diesem Fall möchten Sie, dass der Browser alle oben genannten Parameter für Cache-Matching-Zwecke ignoriert, _außer_ `id`, dessen Vorhandensein dazu führen würde, dass der Browser den `/users` Cache-Eintrag nicht trifft und `/users?id=345` vom Server anfordert.

Dies kann wie folgt erreicht werden:

```http
No-Vary-Search: params, except=("id")
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [HTTP Caching: Vary](/de/docs/Web/HTTP/Caching#vary) und {{HTTPHeader("Vary")}} Header
