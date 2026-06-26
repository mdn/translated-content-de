---
title: No-Vary-Search header
short-title: No-Vary-Search
slug: Web/HTTP/Reference/Headers/No-Vary-Search
l10n:
  sourceCommit: 87ca9db1ebe56eb20c1f20b91fca43955d8f0e26
---

{{SeeCompatTable}}

Der HTTP-**`No-Vary-Search`**-{{Glossary("response_header", "Response-Header")}} legt eine Reihe von Regeln fest, die definieren, wie sich die Abfrageparameter einer URL auf das Cache-Matching auswirken.
Diese Regeln bestimmen, ob dieselbe URL mit unterschiedlichen URL-Parametern als separate Einträge im Browser-Cache gespeichert werden soll.

Dies ermöglicht es dem Browser, vorhandene Ressourcen trotz nicht übereinstimmender URL-Parameter wiederzuverwenden, um die Kosten einer erneuten Ressourcenanforderung zu vermeiden, wenn derselbe Inhalt zurückgegeben wird.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Response_header", "Response-Header")}}</td>
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
  - : Gibt an, dass URLs nicht als separate Einträge im Cache gespeichert werden, wenn _die Reihenfolge_, in der die Parameter in der URL erscheinen, der einzige Unterschied ist. Das Vorhandensein anderer Parameter _wird_ dazu führen, dass URLs separat im Cache gespeichert werden.
- `params` {{optional_inline}}
  - : Entweder ein Boolean oder eine Liste von Zeichenfolgen:
    - Als Boolean (`params`) gibt es an, dass URLs, die sich nur durch ihre Parameter unterscheiden, nicht als separate Einträge im Cache gespeichert werden.
    - Eine innere Liste von durch Leerzeichen getrennten Zeichenfolgen (`params=("param1" "param2")`).
      Gibt an, dass URLs, die sich nur durch die aufgelisteten Parameter unterscheiden, nicht als separate Einträge im Cache gespeichert werden. Das Vorhandensein anderer Parameter _wird_ dazu führen, dass sie separat im Cache gespeichert werden.
- `except` {{optional_inline}}
  - : Eine innere Liste von durch Leerzeichen getrennten Zeichenfolgen (`except=("param1" "param2")`).
    Gibt an, dass URLs, die sich nur durch die aufgelisteten Parameter unterscheiden, _als_ separate Einträge im Cache gespeichert werden. Eine Boolean-`params`-Direktive muss enthalten sein, damit sie wirksam wird (`params, except=("param1" "param2")`). Das Vorhandensein anderer Parameter, die nicht in der `except=`-Liste enthalten sind, wird _nicht_ dazu führen, dass URLs als separate Einträge im Cache gespeichert werden.

## Beschreibung

### Beziehung zur Speculation Rules API

Die [Speculation Rules API](/de/docs/Web/API/Speculation_Rules_API) unterstützt die Verwendung des `No-Vary-Search`-Headers, um eine bereits vorab geladene oder vorausgerenderte Seite für verschiedene URL-Parameter wiederzuverwenden — sofern sie im `No-Vary-Search`-Header enthalten sind.

> [!WARNING]
> Es ist zusätzliche Vorsicht geboten, wenn `No-Vary-Search` mit dem Prerendering verwendet wird, da die Seite möglicherweise mit unterschiedlichen URL-Parametern vorausgerendert wird. `No-Vary-Search` wird für URL-Parameter verwendet, die vom Server dieselbe Ressource liefern, aber aus verschiedenen Gründen vom Client verwendet werden (Client-seitiges Rendering, UTM-Parameter für die Analytikmessung usw.). Da das initiale Prerendering für unterschiedliche URL-Parameter erfolgen kann, sollte jeglicher Code, der von ihnen abhängt, erst nach der Aktivierung des Prerenderings ausgeführt werden.

Die Speculation Rules API kann auch ein `expects_no_vary_search`-Feld enthalten, das dem Browser anzeigt, welchen erwarteten `No-Vary-Search`-Wert es (falls vorhanden) für Dokumente geben wird, für die es Preload-/Prerender-Anforderungen über die Speculation Rules erhält. Der Browser kann dies nutzen, um im Voraus zu bestimmen, ob es nützlicher ist, auf ein vorhandenes Preload/Prerender zu warten oder eine neue Anfrage zu starten, wenn die Speculation Rule erfüllt ist. Sehen Sie sich das ["expects_no_vary_search"-Beispiel](/de/docs/Web/HTML/Reference/Elements/script/type/speculationrules#expects_no_vary_search_example) an, um zu erfahren, wie dies verwendet werden kann.

## Beispiele

### Erlauben, dass Antworten von URLs mit unterschiedlich angeordneten Parametern den gleichen Cache-Eintrag verwenden

Wenn Sie beispielsweise eine Suchseite haben, die ihre Suchkriterien in URL-Parametern speichert und nicht garantieren können, dass die Parameter jedes Mal in derselben Reihenfolge zur URL hinzugefügt werden, können Sie mithilfe von `key-order` erlauben, dass Antworten von URLs, die lediglich in der Reihenfolge der Parameter unterschiedlich sind, denselben Cache-Eintrag verwenden:

```http
No-Vary-Search: key-order
```

Wenn dieser Header zu den zugehörigen Antworten hinzugefügt wird, würden die folgenden URLs bei der Suche im Cache als gleichwertig behandelt werden:

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

### Erlauben, dass Antworten von URLs mit einem unterschiedlichen Parameter denselben Cache-Eintrag verwenden

Stellen Sie sich vor, eine Benutzerverzeichnis-Startseite, `/users`, wurde bereits im Cache gespeichert. Ein `id`-Parameter könnte verwendet werden, um Informationen zu einem bestimmten Benutzer aufzurufen, zum Beispiel `/users?id=345`. Ob diese URL für Cache-Matching-Zwecke als identisch betrachtet werden soll, hängt vom Verhalten der Anwendung ab:

- Wenn dieser Parameter die Wirkung hat, eine völlig neue Seite mit den Informationen für den angegebenen Benutzer zu laden, sollte die Antwort von dieser URL separat im Cache gespeichert werden.
- Wenn dieser Parameter die Wirkung hat, den angegebenen Benutzer auf derselben Seite hervorzuheben und möglicherweise ein Ausziehfenster anzuzeigen, das ihre Daten zeigt, wäre es besser, wenn der Browser die zwischengespeicherte Antwort für `/users` verwendet. Dies könnte zu Leistungsverbesserungen beim Laden der Benutzerseiten führen.

Wenn Ihre Anwendung so wie im zweiten oben beschriebenen Beispiel funktioniert, können Sie sowohl `/users` als auch `/users?id=345` für Cache-Zwecke als identisch behandeln, indem Sie einen `No-Vary-Search`-Header wie folgt verwenden:

```http
No-Vary-Search: params=("id")
```

> [!NOTE]
> Wenn ein Parameter mithilfe von `params` vom Cache-Schlüssel ausgeschlossen wird, wird er ignoriert, wenn er in der URL enthalten ist, unabhängig davon, wo er in der Parameterliste erscheint.

### Erlauben, dass Antworten von URLs mit mehreren unterschiedlichen Parametern denselben Cache-Eintrag verwenden

Angenommen, Sie haben auch URL-Parameter, die die Liste der Benutzer auf der Seite aufsteigend oder absteigend alphabetisch sortieren und die Sprache angeben, in der die UI-Zeichenfolgen angezeigt werden sollen, zum Beispiel `/users?id=345&order=asc&lang=fr`.

Sie könnten den Browser so einstellen, dass er all diese Parameter ignoriert, wenn er das Cache-Matching prüft:

```http
No-Vary-Search: params=("id" "order" "lang")
```

> [!NOTE]
> Als [strukturiertes Feld](https://www.rfc-editor.org/info/rfc8941/) sollten die Parameter durch Leerzeichen getrennte, zitierte Zeichenfolgen sein — wie oben gezeigt — und nicht durch Kommata getrennt, was Entwicklern möglicherweise vertrauter ist.

Wenn Sie möchten, dass der Browser all diese _und_ alle anderen, die möglicherweise vorhanden sind, beim Cache-Matching ignoriert, könnten Sie die Boolean-Form von `params` verwenden:

```http
No-Vary-Search: params
```

### Angabe von Parametern, die _Cache-Matching-Ausfälle_ verursachen

Angenommen, die App verhält sich anders, wobei `/users` auf die Hauptbenutzerverzeichnis-Startseite verweist und `/users?id=345` auf eine völlig separate Detailseite für einen bestimmten Benutzer. In diesem Fall möchten Sie, dass der Browser alle oben genannten Parameter für Cache-Matching-Zwecke ignoriert, _außer_ `id`, dessen Vorhandensein dazu führen würde, dass der Browser den `/users`-Cache-Eintrag nicht verwendet und `/users?id=345` vom Server anfordert.

Dies kann folgendermaßen erreicht werden:

```http
No-Vary-Search: params, except=("id")
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [HTTP-Caching: Vary](/de/docs/Web/HTTP/Guides/Caching#vary) und {{HTTPHeader("Vary")}}-Header
