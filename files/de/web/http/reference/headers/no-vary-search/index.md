---
title: No-Vary-Search header
short-title: No-Vary-Search
slug: Web/HTTP/Reference/Headers/No-Vary-Search
l10n:
  sourceCommit: ad5b5e31f81795d692e66dadb7818ba8b220ad15
---

{{SeeCompatTable}}

Der HTTP **`No-Vary-Search`** {{Glossary("response_header", "Antwort-Header")}} spezifiziert eine Reihe von Regeln, die definieren, wie die Abfrageparameter einer URL das Cache-Matching beeinflussen. Diese Regeln bestimmen, ob die gleiche URL mit unterschiedlichen URL-Parametern als separate Browser-Cache-Einträge gespeichert werden soll.

Dies ermöglicht es dem Browser, vorhandene Ressourcen trotz nicht übereinstimmender URL-Parameter wiederzuverwenden, um die Kosten für das erneute Abrufen der Ressource zu vermeiden, wenn derselbe Inhalt zurückgegeben wird.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Response_header", "Antwort-Header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_request_header", "Verbotener Anfrage-Header")}}</th>
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
  - : Gibt an, dass URLs nicht als separate Einträge im Cache gespeichert werden, wenn _die Reihenfolge_, in der Parameter in der URL erscheinen, der einzige Unterschied ist. Das Vorhandensein anderer Parameter _wird_ jedoch dazu führen, dass URLs separat im Cache gespeichert werden.
- `params` {{optional_inline}}
  - : Entweder ein Boolean oder eine Liste von Zeichenfolgen:
    - Als Boolean (`params`) zeigt es an, dass URLs, die sich nur durch ihre Parameter unterscheiden, nicht als separate Einträge im Cache gespeichert werden.
    - Eine innere Liste von durch Leerzeichen getrennten Zeichenfolgen (`params=("param1" "param2")`).
      Gibt an, dass URLs, die sich nur durch die aufgeführten Parameter unterscheiden, nicht als separate Einträge im Cache gespeichert werden. Das Vorhandensein anderer Parameter _wird_ jedoch dazu führen, dass sie separat im Cache gespeichert werden.
- `except` {{optional_inline}}
  - : Eine innere Liste von durch Leerzeichen getrennten Zeichenfolgen (`except=("param1" "param2")`).
    Gibt an, dass URLs, die sich nur durch die aufgeführten Parameter unterscheiden, _als separate Einträge_ im Cache gespeichert werden. Eine Boolean-Direktive `params` muss enthalten sein, damit sie wirksam wird (`params, except=("param1" "param2")`). Das Vorhandensein anderer Parameter, die nicht in der `except=` Liste stehen, _wird nicht_ dazu führen, dass URLs als separate Einträge im Cache gespeichert werden.

## Beschreibung

### Beziehung zur Speculation Rules API

Die [Speculation Rules API](/de/docs/Web/API/Speculation_Rules_API) unterstützt die Nutzung des `No-Vary-Search` Headers, um eine vorhandene vorab geladene oder prerendered-Seite für verschiedene URL-Parameter wiederzuverwenden, wenn sie im `No-Vary-Search` Header enthalten sind.

> [!WARNING]
> Bei der Verwendung von Prerender mit `No-Vary-Search` muss besondere Vorsicht walten, da die Seite anfänglich mit unterschiedlichen URL-Parametern prerendered sein kann. `No-Vary-Search` wird für URL-Parameter verwendet, die dieselbe Ressource vom Server liefern, aber vom Client aus verschiedenen Gründen verwendet werden (Client-seitiges Rendering, UTM-Parameter zur Analyse-Messung etc.). Da das initiale Prerender für unterschiedliche URL-Parameter erfolgen kann, sollte jeglicher Code, der von diesen abhängt, erst nach der Aktivierung des Prerenders ausgeführt werden.

Die Speculation Rules API kann auch ein `expects_no_vary_search` Feld beinhalten, das dem Browser angibt, welcher `No-Vary-Search` Wert für Dokumente erwartet wird, die er als Vorab-/Prerender-Anfragen über die Spekulationsregeln erhält. Der Browser kann dies nutzen, um im Voraus zu bestimmen, ob es sinnvoller ist, auf ein bestehendes Vorab-/Prerender zu warten, oder eine neue Abruf-Anfrage zu starten, wenn die Spekulationsregel erfüllt ist. Siehe das ["expects_no_vary_search" Beispiel](/de/docs/Web/HTML/Reference/Elements/script/type/speculationrules#expects_no_vary_search_example) für eine Erklärung, wie dies verwendet werden kann.

## Beispiele

### Erlauben von Antworten von URLs mit unterschiedlich angeordneten Parametern, dass sie demselben Cache-Eintrag entsprechen

Wenn Sie beispielsweise eine Suchseite haben, die ihre Suchkriterien in URL-Parametern speichert, und nicht garantieren können, dass die Parameter in der gleichen Reihenfolge zur URL hinzugefügt werden, können Sie Antworten von URLs, die bis auf die Reihenfolge der Parameter identisch sind, erlauben, demselben Cache-Eintrag zu entsprechen, indem Sie `key-order` verwenden:

```http
No-Vary-Search: key-order
```

Wenn dieser Header zu den zugehörigen Antworten hinzugefügt wird, würden die folgenden URLs als gleichwertig bei der Suche im Cache behandelt werden:

```plain
https://search.example.com?a=1&b=2&c=3
https://search.example.com?b=2&a=1&c=3
```

Das Vorhandensein unterschiedlicher URL-Parameter wird jedoch dazu führen, dass diese URLs separat im Cache gespeichert werden. Zum Beispiel:

```plain
https://search.example.com?a=1&b=2&c=3
https://search.example.com?b=2&a=1&c=3&d=4
```

Die folgenden Beispiele veranschaulichen, wie man steuert, welche Parameter im Kontext des Cache-Matchings ignoriert werden.

### Erlauben von Antworten von URLs mit einem unterschiedlichen Param, dass sie demselben Cache-Eintrag entsprechen

Betrachten Sie einen Fall, in dem eine Startseite des Benutzerverzeichnisses, `/users`, bereits im Cache ist. Ein `id`-Parameter könnte verwendet werden, um Informationen über einen bestimmten Benutzer anzuzeigen, zum Beispiel `/users?id=345`. Ob diese URL als identisch für Cache-Matching-Zwecke angesehen wird, hängt vom Verhalten der Anwendung ab:

- Wenn dieser Parameter dazu führt, dass eine vollständig neue Seite mit den Informationen für den angegebenen Benutzer geladen wird, dann sollte die Antwort von dieser URL separat im Cache gespeichert werden.
- Wenn dieser Parameter dazu führt, dass der angegebene Benutzer auf derselben Seite hervorgehoben wird und vielleicht ein ausklappbares Fenster erscheint, das seine Daten anzeigt, wäre es besser, wenn der Browser die zwischengespeicherte Antwort für `/users` verwendet. Dies könnte zu Leistungsverbesserungen beim Laden der Benutzerseiten führen.

Wenn Ihre Anwendung sich wie im zweiten oben beschriebenen Beispiel verhält, könnten Sie sowohl `/users` als auch `/users?id=345` über einen `No-Vary-Search` Header so als identisch für Cache-Zwecke betrachten lassen:

```http
No-Vary-Search: params=("id")
```

> [!NOTE]
> Wenn ein Parameter vom Cache-Schlüssel mit `params` ausgeschlossen wird, wird er, falls er in der URL enthalten ist, für die Zwecke des Cache-Matchings ignoriert, unabhängig davon, wo er in der Parameterliste erscheint.

### Erlauben von Antworten von URLs mit mehreren unterschiedlichen Parametern, dass sie demselben Cache-Eintrag entsprechen

Angenommen, Sie hätten auch URL-Parameter, die die Liste der Benutzer auf der Seite in aufsteigender oder absteigender alphabetischer Reihenfolge sortieren und die Sprache angeben, um die UI-Zeichenfolgen anzuzeigen, zum Beispiel `/users?id=345&order=asc&lang=fr`.

Sie könnten den Browser dazu bringen, all diese bei der Betrachtung des Cache-Matchings zu ignorieren, wie folgt:

```http
No-Vary-Search: params=("id" "order" "lang")
```

> [!NOTE]
> Als [strukturierte Felder](https://www.rfc-editor.org/rfc/rfc8941) sollten die Parameter durch Leerzeichen getrennte, zitierte Zeichenfolgen sein — wie oben gezeigt — und nicht durch Kommas getrennt, wie Entwickler möglicherweise eher gewohnt sind.

Wenn Sie möchten, dass der Browser all dies _und_ alle anderen, die möglicherweise vorhanden sein könnten, beim Cache-Matching ignoriert, könnten Sie die boolesche Form von `params` verwenden:

```http
No-Vary-Search: params
```

### Spezifizieren von Parametern, die _Cache-Matching-Verfehlungen_ verursachen

Angenommen, die App verhält sich anders und `/users` zeigt auf die Hauptseite des Benutzerverzeichnisses und `/users?id=345` zeigt auf eine völlig separate Detailseite für einen bestimmten Benutzer. In diesem Fall möchten Sie, dass der Browser alle oben genannten Parameter für Cache-Matching-Zwecke ignoriert, _außer_ `id`, dessen Vorhandensein dazu führen würde, dass der Browser den `/users` Cache-Eintrag nicht zuordnet und `/users?id=345` vom Server anfordert.

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
