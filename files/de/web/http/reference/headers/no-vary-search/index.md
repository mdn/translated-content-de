---
title: No-Vary-Search
slug: Web/HTTP/Reference/Headers/No-Vary-Search
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{HTTPSidebar}}{{SeeCompatTable}}

Der HTTP **`No-Vary-Search`** {{Glossary("response_header", "Antwort-Header")}} legt eine Reihe von Regeln fest, die definieren, wie die Abfrageparameter einer URL das Cache-Matching beeinflussen. Diese Regeln bestimmen, ob dieselbe URL mit unterschiedlichen URL-Parametern als separate Einträge im Browser-Cache gespeichert werden soll.

Dies ermöglicht es dem Browser, vorhandene Ressourcen trotz nicht übereinstimmender URL-Parameter wiederzuverwenden, um das erneute Abrufen der Ressource zu vermeiden, wenn derselbe Inhalt zurückgegeben wird.

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
  - : Gibt an, dass URLs nicht als separate Einträge zwischengespeichert werden, wenn _nur_ die Reihenfolge, in der die Parameter in der URL erscheinen, unterschiedlich ist. Die Anwesenheit anderer Parameter _wird_ jedoch dazu führen, dass URLs separat zwischengespeichert werden.
- `params` {{optional_inline}}
  - : Entweder ein Boolean oder eine Liste von Strings:
    - Als Boolean (`params`), bedeutet es, dass URLs, die sich nur durch ihre Parameter unterscheiden, nicht als separate Einträge zwischengespeichert werden.
    - Eine innere Liste von durch Leerzeichen getrennten Strings (`params=("param1" "param2")`).
      Gibt an, dass URLs, die sich nur durch die aufgelisteten Parameter unterscheiden, nicht als separate Einträge zwischengespeichert werden. Die Anwesenheit anderer Parameter _wird_ dazu führen, dass sie separat zwischengespeichert werden.
- `except` {{optional_inline}}
  - : Eine innere Liste von durch Leerzeichen getrennten Strings (`except=("param1" "param2")`).
    Gibt an, dass URLs, die sich nur durch die aufgelisteten Parameter unterscheiden, _als separate Einträge_ zwischengespeichert werden. Eine `params`-Boolean-Direktive muss vorhanden sein, damit es wirksam wird (`params, except=("param1" "param2")`). Die Anwesenheit anderer Parameter, die nicht in der `except=` Liste enthalten sind, _wird nicht_ dazu führen, dass URLs als separate Einträge im Cache gespeichert werden.

## Beschreibung

### Beziehung zur Speculation Rules API

Die [Speculation Rules API](/de/docs/Web/API/Speculation_Rules_API) unterstützt die Verwendung des `No-Vary-Search` Headers, um eine vorhandene vorab geladene oder prerenderte Seite für unterschiedliche URL-Parameter wiederzuverwenden, wenn diese im `No-Vary-Search` Header enthalten sind.

> [!WARNING]
> Besondere Vorsicht ist geboten, wenn `No-Vary-Search` mit Prerendering verwendet wird, da die Seite anfänglich mit unterschiedlichen URL-Parametern prerendert werden kann. `No-Vary-Search` wird für URL-Parameter verwendet, die die gleiche Ressource vom Server liefern, aber aus verschiedenen Gründen vom Client verwendet werden (Client-seitiges Rendering, UTM-Parameter für Analysezwecke, etc.). Da das anfängliche Prerendering für unterschiedliche URL-Parameter sein kann, sollte jeder Code, der davon abhängt, erst nach der Prerendering-Aktivierung ausgeführt werden.

Die Speculation Rules API kann auch ein `expects_no_vary_search`-Feld enthalten, das dem Browser mitteilt, welchen `No-Vary-Search`-Wert (falls vorhanden) er für Dokumente erwartet, die er über Spekulationsregeln für prefetch/prerender Anfragen erhält. Der Browser kann dies verwenden, um im Voraus zu bestimmen, ob es nützlicher ist, auf ein vorhandenes prefetch/prerender zu warten, oder einen neuen Fetch-Anfrage zu starten, wenn die Spekulationsregel übereinstimmt. Sehen Sie sich das ["expects_no_vary_search" Beispiel](/de/docs/Web/HTML/Element/script/type/speculationrules#expects_no_vary_search_example) an, um zu erfahren, wie dies verwendet werden kann.

## Beispiele

### Zulassen, dass Antworten von URLs mit unterschiedlich geordneten Parametern dem gleichen Cache-Eintrag entsprechen

Wenn Sie zum Beispiel eine Suchseite haben, die ihre Suchkriterien in URL-Parametern speichert, und Sie nicht garantieren können, dass die Parameter jedes Mal in derselben Reihenfolge zur URL hinzugefügt werden, können Sie Antworten von URLs zulassen, die identisch sind, mit Ausnahme der Reihenfolge der Parameter, um dem gleichen Cache-Eintrag zu entsprechen, indem Sie `key-order` verwenden:

```http
No-Vary-Search: key-order
```

Wenn dieser Header zu den zugehörigen Antworten hinzugefügt wird, würden die folgenden URLs als äquivalent behandelt, wenn im Cache gesucht wird:

```plain
https://search.example.com?a=1&b=2&c=3
https://search.example.com?b=2&a=1&c=3
```

Das Vorhandensein unterschiedlicher URL-Parameter wird jedoch dazu führen, dass diese URLs separat zwischengespeichert werden. Beispielsweise:

```plain
https://search.example.com?a=1&b=2&c=3
https://search.example.com?b=2&a=1&c=3&d=4
```

Die folgenden Beispiele veranschaulichen, wie Sie steuern können, welche Parameter im Zusammenhang mit dem Cache-Matching ignoriert werden.

### Zulassen, dass Antworten von URLs mit einem unterschiedlichen Param dem gleichen Cache-Eintrag entsprechen

Betrachten Sie den Fall, in dem eine Benutzerverzeichnis-Startseite, `/users`, bereits zwischengespeichert wurde. Ein `id`-Parameter könnte verwendet werden, um Informationen zu einem bestimmten Benutzer anzuzeigen, zum Beispiel `/users?id=345`. Ob diese URL für Cache-Matching-Zwecke als identisch betrachtet werden sollte, hängt vom Verhalten der Anwendung ab:

- Wenn dieser Parameter die Wirkung hat, eine völlig neue Seite zu laden, die die Informationen für den angegebenen Benutzer enthält, sollte die Antwort von dieser URL separat zwischengespeichert werden.
- Wenn dieser Parameter die Wirkung hat, den angegebenen Benutzer auf derselben Seite hervorzuheben und möglicherweise ein herausziehbares Panel zu zeigen, dass ihre Daten anzeigt, dann wäre es besser für den Browser, die zwischengespeicherte Antwort für `/users` zu verwenden. Dies könnte Leistungsvorteile beim Laden der Benutzerseiten mit sich bringen.

Wenn Ihre Anwendung sich wie das oben beschriebene zweite Beispiel verhält, könnten Sie sowohl `/users` als auch `/users?id=345` als identisch für Cachenzwecke behandeln, indem Sie einen `No-Vary-Search`-Header wie folgt verwenden:

```http
No-Vary-Search: params=("id")
```

> [!NOTE]
> Wenn ein Parameter mit `params` von dem Cache-Schlüssel ausgeschlossen wird, wird er bei seiner Aufnahme in die URL für die Zwecke des Cache-Matchings ignoriert, unabhängig davon, wo er in der Parameterliste erscheint.

### Zulassen, dass Antworten von URLs mit mehreren unterschiedlichen Parametern dem gleichen Cache-Eintrag entsprechen

Angenommen, Sie hatten auch URL-Parameter, die die Liste der Benutzer auf der Seite in aufsteigender oder absteigender alphabetischer Reihenfolge sortierten und die Sprache festlegen, in der die UI-Strings angezeigt werden sollen, zum Beispiel `/users?id=345&order=asc&lang=fr`.

Sie könnten den Browser dazu bringen, all diese bei der Berücksichtigung des Cache-Matchings zu ignorieren, wie folgt:

```http
No-Vary-Search: params=("id" "order" "lang")
```

> [!NOTE]
> Als ein [strukturiertes Feld](https://www.rfc-editor.org/rfc/rfc8941) sollten die Parameter durch Leerzeichen getrennte, zitierte Strings sein — wie oben gezeigt — und nicht durch Kommata getrennte, an die Entwickler möglicherweise gewöhnt sind.

Wenn Sie wollten, dass der Browser alle von ihnen _und_ alle anderen, die bei Cache-Matching vorhanden sein könnten, ignoriert, könnten Sie die boolesche Form von `params` verwenden:

```http
No-Vary-Search: params
```

### Angeben von Parametern, die _keine_ Cache-Matches verursachen

Angenommen, die App würde sich anders verhalten, wobei `/users` auf die Hauptseite des Benutzerverzeichnisses verweisen würde, und `/users?id=345` auf eine völlig separate Detailseite für einen bestimmten Benutzer. In diesem Fall möchten Sie, dass der Browser alle oben genannten Parameter für Cache-Matching-Zwecke ignoriert, _außer_ `id`, dessen Vorhandensein den Browser dazu bringen würde, den Cache-Eintrag für `/users` nicht abzustimmen und `/users?id=345` vom Server anzufordern.

Dies kann wie folgt erreicht werden:

```http
No-Vary-Search: params, except=("id")
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [HTTP-Caching: Vary](/de/docs/Web/HTTP/Guides/Caching#vary) und {{HTTPHeader("Vary")}} Header
