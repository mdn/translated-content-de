---
title: No-Vary-Search
slug: Web/HTTP/Headers/No-Vary-Search
l10n:
  sourceCommit: 0795bd3d58d8c2b80b3b3930f565fc19a84b7fa9
---

{{HTTPSidebar}}{{SeeCompatTable}}

Der HTTP-**`No-Vary-Search`**-{{Glossary("response_header", "Antwort-Header")}} gibt eine Reihe von Regeln an, die definieren, wie die Abfrageparameter einer URL das Cache-Matching beeinflussen. Diese Regeln bestimmen, ob dieselbe URL mit unterschiedlichen URL-Parametern als separate Einträge im Browser-Cache gespeichert werden soll.

Dies ermöglicht dem Browser, bestehende Ressourcen trotz nicht übereinstimmender URL-Parameter wiederzuverwenden, um die Kosten für das erneute Abrufen der Ressource zu vermeiden, wenn derselbe Inhalt zurückgegeben wird.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Response_header", "Antwort-Header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_request_header", "Verbotener Anforderungs-Header")}}</th>
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
  - : Gibt an, dass URLs nicht als separate Einträge im Cache gespeichert werden, wenn _die Reihenfolge_, in der Parameter in der URL erscheinen, der einzige Unterschied ist. Das Vorhandensein anderer Parameter _wird_ dazu führen, dass URLs separat gecached werden.
- `params` {{optional_inline}}
  - : Entweder ein Boolean oder eine Liste von Strings:
    - Als Boolean (`params`) zeigt es an, dass URLs, die sich nur durch ihre Parameter unterscheiden, nicht als separate Einträge gecached werden.
    - Eine innere Liste von durch Leerzeichen getrennten Strings (`params=("param1" "param2")`). Gibt an, dass URLs, die sich nur durch die aufgelisteten Parameter unterscheiden, nicht als separate Einträge gecached werden. Das Vorhandensein anderer Parameter _wird_ dazu führen, dass sie separat gecached werden.
- `except` {{optional_inline}}
  - : Eine innere Liste von durch Leerzeichen getrennten Strings (`except=("param1" "param2")`). Gibt an, dass URLs, die sich nur durch die aufgelisteten Parameter unterscheiden, _als separate Einträge_ gecached werden. Eine Boolean-`params`-Direktive muss enthalten sein, damit sie wirksam wird (`params, except=("param1" "param2")`). Das Vorhandensein anderer Parameter, die nicht in der `except=`-Liste sind, _führt nicht_ dazu, dass URLs als separate Einträge gecached werden.

## Beschreibung

### Beziehung zur Speculation Rules API

Die [Speculation Rules API](/de/docs/Web/API/Speculation_Rules_API) unterstützt die Verwendung des `No-Vary-Search`-Headers, um eine vorhandene vorab abgerufene oder prerendered Seite für unterschiedliche URL-Parameter wiederzuverwenden — wenn sie im `No-Vary-Search`-Header enthalten sind.

> [!WARNING]
> Es muss besondere Vorsicht walten gelassen werden, wenn `No-Vary-Search` mit Prerender verwendet wird, da die Seite möglicherweise zunächst mit anderen URL-Parametern prerendered wird. `No-Vary-Search` wird für URL-Parameter verwendet, die dieselbe Ressource vom Server liefern, aber aus verschiedenen Gründen vom Client verwendet werden (Client-seitiges Rendering, UTM-Parameter für Analysen, etc.). Da das initiale Prerendering für unterschiedliche URL-Parameter erfolgen kann, sollte jeder Code, der von ihnen abhängt, nur nach der Prerender-Aktivierung ausgeführt werden.

Die Speculation Rules API kann auch ein `expects_no_vary_search`-Feld enthalten, das dem Browser angibt, welchen `No-Vary-Search`-Wert (falls vorhanden) er für Dokumente, die Vorabruf-/Prerender-Anfragen über die Spekulationsregeln erhalten, erwartet. Der Browser kann dies verwenden, um im Voraus zu bestimmen, ob es nützlicher ist, auf das Abschließen eines vorhandenen Vorabrufs/Prerender zu warten oder eine neue Abrufanfrage zu starten, wenn die Spekulationsregel ausgelöst wird. Siehe das ["expects_no_vary_search"-Beispiel](/de/docs/Web/HTML/Element/script/type/speculationrules#expects_no_vary_search_example) für eine Erklärung, wie dies verwendet werden kann.

## Beispiele

### Zulassen, dass Antworten von URLs mit unterschiedlich geordneten Parametern denselben Cache-Eintrag treffen

Wenn Sie beispielsweise eine Suchseite haben, die ihre Suchkriterien in URL-Parametern speichert, und Sie nicht garantieren können, dass die Parameter jedes Mal in derselben Reihenfolge zur URL hinzugefügt werden, können Sie mit `key-order` zulassen, dass Antworten von URLs, die sich nur durch die Reihenfolge der Parameter unterscheiden, denselben Cache-Eintrag verwenden:

```http
No-Vary-Search: key-order
```

Wenn dieser Header zu den zugehörigen Antworten hinzugefügt wird, würden die folgenden URLs beim Cachen als gleichwertig behandelt:

```plain
https://search.example.com?a=1&b=2&c=3
https://search.example.com?b=2&a=1&c=3
```

Das Vorhandensein unterschiedlicher URL-Parameter wird jedoch dazu führen, dass diese URLs separat gecached werden. Zum Beispiel:

```plain
https://search.example.com?a=1&b=2&c=3
https://search.example.com?b=2&a=1&c=3&d=4
```

Die unten stehenden Beispiele veranschaulichen, wie kontrolliert werden kann, welche Parameter im Kontext des Cache-Matchings ignoriert werden.

### Zulassen, dass Antworten von URLs mit einem unterschiedlichen Parameter denselben Cache-Eintrag treffen

Betrachten Sie einen Fall, in dem eine Benutzerverzeichnis-Startseite, `/users`, bereits gecached wurde. Ein `id`-Parameter könnte verwendet werden, um Informationen zu einem bestimmten Benutzer anzuzeigen, zum Beispiel `/users?id=345`. Ob diese URL für Cache-Matching-Zwecke als identisch angesehen werden sollte, hängt vom Verhalten der Anwendung ab:

- Wenn dieser Parameter die Wirkung hat, eine völlig neue Seite zu laden, die die Informationen für den angegebenen Benutzer enthält, sollte die Antwort von dieser URL separat gecached werden.
- Hat dieser Parameter zur Folge, dass der angegebene Benutzer auf derselben Seite hervorgehoben und eventuell ein ausziehbares Panel mit seinen Daten angezeigt wird, wäre es besser, wenn der Browser die gecachte Antwort für `/users` verwendet. Dies könnte zu Leistungsverbesserungen beim Laden der Benutzerseiten führen.

Wenn Ihre Anwendung sich wie das zweite oben beschriebene Beispiel verhält, könnten Sie sowohl `/users` als auch `/users?id=345` für Cache-Zwecke als identisch behandeln lassen, indem Sie einen `No-Vary-Search`-Header wie folgt verwenden:

```http
No-Vary-Search: params=("id")
```

> [!NOTE]
> Wenn ein Parameter mit `params` von der Cache-Key-Verwendung ausgeschlossen wird, dann wird er in der URL ignoriert, wenn es um Cache-Matching-Zwecke geht, unabhängig davon, wo er in der Parameterliste erscheint.

### Zulassen, dass Antworten von URLs mit mehreren unterschiedlichen Parametern denselben Cache-Eintrag treffen

Angenommen, Sie hatten auch URL-Parameter, die die Liste der Benutzer auf der Seite in aufsteigender oder absteigender alphabetischer Reihenfolge sortieren und die Sprache zur Anzeige der UI-Strings bestimmen, zum Beispiel `/users?id=345&order=asc&lang=fr`.

Sie könnten den Browser dazu bringen, all diese Parameter bei der Cache-Matching-Betrachtung zu ignorieren, so:

```http
No-Vary-Search: params=("id" "order" "lang")
```

> [!NOTE]
> Als [strukturierte Felder](https://www.rfc-editor.org/rfc/rfc8941) sollten die Parameter — wie oben gezeigt — als durch Leerzeichen getrennte, zitierte Strings angegeben werden, und nicht als durch Kommas getrennte Strings, wie Entwickler es möglicherweise gewohnt sind.

Wenn Sie möchten, dass der Browser alle von ihnen _und_ alle anderen, die möglicherweise vorhanden sind, ignoriert, wenn das Cache-Matching durchgeführt wird, könnten Sie die boolesche Form von `params` verwenden:

```http
No-Vary-Search: params
```

### Spezifizieren von Parametern, die _Cache-Matching-Verluste_ verursachen

Angenommen, die App verhält sich anders, mit `/users`, das auf die Haupt-Benutzerverzeichnis-Startseite verweist und `/users?id=345`, das auf eine völlig separate Detailseite für einen bestimmten Benutzer verweist. In diesem Fall möchten Sie, dass der Browser alle oben genannten Parameter für Cache-Matching-Zwecke ignoriert, _außer_ `id`, dessen Vorhandensein dazu führen würde, dass der Browser den `/users`-Cache-Eintrag nicht trifft und `/users?id=345` vom Server anfordert.

Dies kann so erreicht werden:

```http
No-Vary-Search: params, except=("id")
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [HTTP-Caching: Vary](/de/docs/Web/HTTP/Caching#vary) und {{HTTPHeader("Vary")}}-Header
