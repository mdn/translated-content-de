---
title: No-Vary-Search header
short-title: No-Vary-Search
slug: Web/HTTP/Reference/Headers/No-Vary-Search
l10n:
  sourceCommit: 7f6778934020a9b5b82b4dd8ca79a99bc9950c2a
---

{{SeeCompatTable}}

Der HTTP-**`No-Vary-Search`**-{{Glossary("response_header", "Antwortheader")}} spezifiziert eine Reihe von Regeln, die definieren, wie sich die Abfrageparameter einer URL auf die Cache-Übereinstimmung auswirken.
Diese Regeln bestimmen, ob dieselbe URL mit unterschiedlichen URL-Parametern als separate Cache-Einträge im Browser gespeichert werden sollte.

Dies ermöglicht es dem Browser, vorhandene Ressourcen trotz unpassender URL-Parameter wiederzuverwenden, um die Kosten für das erneute Abrufen der Ressource zu vermeiden, wenn der gleiche Inhalt zurückgegeben wird.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Response_header", "Antwortheader")}}</td>
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
  - : Gibt an, dass URLs nicht als separate Einträge zwischengespeichert werden, wenn nur _die Reihenfolge_ der Parameter in der URL der einzige Unterschied ist.
    Das Vorhandensein anderer Parameter _wird_ dazu führen, dass URLs separat zwischengespeichert werden.
- `params` {{optional_inline}}
  - : Entweder ein boolescher Wert oder eine Liste von Zeichenfolgen:
    - Als boolescher Wert (`params`) gibt es an, dass URLs, die sich nur durch ihre Parameter unterscheiden, nicht als separate Einträge zwischengespeichert werden.
    - Eine innere Liste von leerzeichengetrennten Zeichenfolgen (`params=("param1" "param2")`).
      Gibt an, dass URLs, die sich nur durch die aufgelisteten Parameter unterscheiden, nicht als separate Einträge zwischengespeichert werden.
      Das Vorhandensein anderer Parameter _wird_ dazu führen, dass sie separat zwischengespeichert werden.
- `except` {{optional_inline}}
  - : Eine innere Liste von leerzeichengetrennten Zeichenfolgen (`except=("param1" "param2")`).
    Gibt an, dass URLs, die sich nur durch die aufgelisteten Parameter unterscheiden, _als_ separate Einträge zwischengespeichert _werden_.
    Eine boolesche `params`-Direktive muss enthalten sein, damit sie wirksam wird (`params, except=("param1" "param2")`).
    Das Vorhandensein anderer Parameter, die nicht in der `except=`-Liste stehen, _wird nicht_ dazu führen, dass URLs als separate Einträge zwischengespeichert werden.

## Beschreibung

### Beziehung zur Speculation Rules API

Die [Speculation Rules API](/de/docs/Web/API/Speculation_Rules_API) unterstützt die Verwendung des `No-Vary-Search`-Headers, um eine vorhandene vorab abgerufene oder vorgerenderte Seite für unterschiedliche URL-Parameter wiederzuverwenden — vorausgesetzt, sie sind im `No-Vary-Search`-Header enthalten.

> [!WARNING]
> Bei der Verwendung von Prerendering mit `No-Vary-Search` ist zusätzliche Vorsicht geboten, da die Seite möglicherweise ursprünglich mit unterschiedlichen URL-Parametern vorgerendert wurde. `No-Vary-Search` wird für URL-Parameter verwendet, die vom Server dieselbe Ressource liefern, aber vom Client aus verschiedenen Gründen genutzt werden (Client-seitiges Rendern, UTM-Parameter für die Analyse, etc.). Da das anfängliche Prerendering möglicherweise für verschiedene URL-Parameter erfolgt, sollte jeglicher Code, der davon abhängt, nur nach der Prerender-Aktivierung ausgeführt werden.

Die Speculation Rules API kann auch ein `expects_no_vary_search`-Feld enthalten, das dem Browser angibt, welchen erwarteten `No-Vary-Search`-Wert es gibt (falls vorhanden) für Dokumente, für die Vorabruf-/Vorabrender-Anfragen über die Spekulationsregeln empfangen werden. Der Browser kann dies im Voraus verwenden, um zu bestimmen, ob es nützlicher ist, auf das Abschließen eines vorhandenen Vorabrufs/Vorrenderns zu warten oder eine neue Abrufanfrage zu starten, wenn die Spekulationsregel erfüllt ist. Siehe das ["expects_no_vary_search"-Beispiel](/de/docs/Web/HTML/Reference/Elements/script/type/speculationrules#expects_no_vary_search_example) für eine Erklärung, wie dies verwendet werden kann.

## Beispiele

### Ermöglichen von Antworten von URLs mit unterschiedlich angeordneten Parametern, denselben Cache-Eintrag zu verwenden

Wenn Sie beispielsweise eine Suchseite haben, die ihre Suchkriterien in URL-Parametern speichert, und Sie nicht garantieren können, dass die Parameter jedes Mal in derselben Reihenfolge zur URL hinzugefügt werden, können Sie Antworten von URLs, die bis auf die Reihenfolge der Parameter identisch sind, denselben Cache-Eintrag zuordnen, indem Sie `key-order` verwenden:

```http
No-Vary-Search: key-order
```

Wenn dieser Header zu den zugehörigen Antworten hinzugefügt wird, würden die folgenden URLs bei der Suche im Cache als gleichwertig behandelt:

```plain
https://search.example.com?a=1&b=2&c=3
https://search.example.com?b=2&a=1&c=3
```

Das Vorhandensein verschiedener URL-Parameter führt jedoch dazu, dass diese URLs separat zwischengespeichert werden. Zum Beispiel:

```plain
https://search.example.com?a=1&b=2&c=3
https://search.example.com?b=2&a=1&c=3&d=4
```

Die untenstehenden Beispiele veranschaulichen, wie man steuert, welche Parameter im Kontext der Cache-Übereinstimmung ignoriert werden.

### Ermöglichen von Antworten von URLs mit unterschiedlichen Parametern, denselben Cache-Eintrag zu verwenden

Betrachten Sie den Fall, dass eine Benutzerverzeichnis-Landingpage, `/users`, bereits zwischengespeichert wurde. Ein `id`-Parameter könnte verwendet werden, um Informationen zu einem bestimmten Benutzer aufzurufen, zum Beispiel `/users?id=345`. Ob diese URL im Hinblick auf Cache-Übereinstimmung als identisch betrachtet werden sollte, hängt vom Verhalten der Anwendung ab:

- Wenn dieser Parameter die Wirkung hat, eine völlig neue Seite mit den Informationen für den angegebenen Benutzer zu laden, sollte die Antwort von dieser URL separat zwischengespeichert werden.
- Wenn dieser Parameter die Wirkung hat, den angegebenen Benutzer auf derselben Seite hervorzuheben und möglicherweise ein Ausklappfeld anzuzeigen, das seine Daten anzeigt, wäre es besser, wenn der Browser die zwischengespeicherte Antwort für `/users` verwendet. Dies könnte zu Leistungssteigerungen beim Laden der Benutzerseiten führen.

Wenn Ihre Anwendung sich wie im zweiten obigen Beispiel beschrieben verhält, können Sie bewirken, dass sowohl `/users` als auch `/users?id=345` für Caching-Zwecke als identisch behandelt werden, indem Sie einen `No-Vary-Search`-Header wie folgt verwenden:

```http
No-Vary-Search: params=("id")
```

> [!NOTE]
> Wenn ein Parameter mit `params` vom Cache-Schlüssel ausgeschlossen wird, wird er, selbst wenn er in der URL enthalten ist, für die Zwecke der Cache-Übereinstimmung ignoriert, unabhängig davon, wo er in der Parameterliste erscheint.

### Ermöglichen von Antworten von URLs mit mehreren unterschiedlichen Parametern, denselben Cache-Eintrag zu verwenden

Angenommen, Sie hatten auch URL-Parameter, die die Liste der Benutzer auf der Seite in aufsteigender oder absteigender alphabetischer Reihenfolge sortierten und die Sprache festlegten, in der die UI-Zeichenfolgen angezeigt werden sollen, beispielsweise `/users?id=345&order=asc&lang=fr`.

Sie könnten den Browser dazu bringen, all dies bei der Überlegung der Cache-Übereinstimmung zu ignorieren, wie folgt:

```http
No-Vary-Search: params=("id" "order" "lang")
```

> [!NOTE]
> Als [strukturierte Felder](https://www.rfc-editor.org/rfc/rfc8941) sollten die Parameter leerzeichengetrennte, zitierte Zeichenfolgen sein — wie oben gezeigt — und nicht kommagetrennt, was Entwicklern vielleicht vertrauter ist.

Wenn Sie möchten, dass der Browser all diese _und_ alle anderen, die möglicherweise vorhanden sind, bei der Cache-Übereinstimmung ignoriert, könnten Sie die boolesche Form von `params` verwenden:

```http
No-Vary-Search: params
```

### Spezifizieren von Parametern, die Cache-Übereinstimmungsfehler verursachen

Angenommen, die App verhielt sich anders, wobei `/users` auf die Hauptbenutzerverzeichnis-Landingpage und `/users?id=345` auf eine völlig separate Detailseite für einen bestimmten Benutzer verwies. In diesem Fall möchten Sie, dass der Browser alle oben genannten Parameter für die Cache-Übereinstimmung ignoriert, _außer_ `id`, dessen Vorhandensein dazu führen würde, dass der Browser den `/users`-Cache-Eintrag nicht übereinstimmt und `/users?id=345` vom Server anfordert.

Dies kann wie folgt erreicht werden:

```http
No-Vary-Search: params, except=("id")
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [HTTP-Caching: Vary](/de/docs/Web/HTTP/Guides/Caching#vary) und {{HTTPHeader("Vary")}}-Header
