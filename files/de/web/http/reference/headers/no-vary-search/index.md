---
title: No-Vary-Search
slug: Web/HTTP/Reference/Headers/No-Vary-Search
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{HTTPSidebar}}{{SeeCompatTable}}

Der HTTP **`No-Vary-Search`** {{Glossary("response_header", "Antwort-Header")}} legt eine Reihe von Regeln fest, die definieren, wie die Abfrageparameter einer URL die Cache-Übereinstimmung beeinflussen. Diese Regeln bestimmen, ob die gleiche URL mit unterschiedlichen URL-Parametern als separate Einträge im Browser-Cache gespeichert werden soll.

Dies ermöglicht es dem Browser, bestehende Ressourcen trotz nicht übereinstimmender URL-Parameter wiederzuverwenden, um die Kosten für das erneute Abrufen der Ressource zu vermeiden, wenn derselbe Inhalt zurückgegeben wird.

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
  - : Gibt an, dass URLs nicht als separate Einträge im Cache gespeichert werden, wenn _die Reihenfolge_, in der die Parameter in der URL erscheinen, der einzige Unterschied ist. Das Vorhandensein anderer Parameter _wird_ jedoch bewirken, dass URLs separat im Cache gespeichert werden.
- `params` {{optional_inline}}
  - : Entweder ein boolescher Wert oder eine Liste von Strings:
    - Als Boolescher Wert (`params`) gibt es an, dass URLs, die sich nur durch ihre Parameter unterscheiden, nicht als separate Einträge im Cache gespeichert werden.
    - Eine innere Liste von durch Leerzeichen getrennten Strings (`params=("param1" "param2")`). Gibt an, dass URLs, die sich nur durch die aufgelisteten Parameter unterscheiden, nicht als separate Einträge im Cache gespeichert werden. Das Vorhandensein anderer Parameter _wird_ bewirken, dass sie separat im Cache gespeichert werden.
- `except` {{optional_inline}}
  - : Eine innere Liste von durch Leerzeichen getrennten Strings (`except=("param1" "param2")`). Gibt an, dass URLs, die sich nur durch die aufgelisteten Parameter unterscheiden, _werden_ als separate Einträge im Cache gespeichert. Eine boolesche `params`-Direktive muss enthalten sein, damit sie wirksam wird (`params, except=("param1" "param2")`). Das Vorhandensein anderer Parameter, die nicht in der `except=`-Liste sind, _wird_ nicht bewirken, dass URLs separat im Cache gespeichert werden.

## Beschreibung

### Beziehung zur Speculation Rules API

Die [Speculation Rules API](/de/docs/Web/API/Speculation_Rules_API) unterstützt die Verwendung des `No-Vary-Search`-Headers, um eine bereits vorab abgerufene oder vorgerenderte Seite für unterschiedliche URL-Parameter wiederzuverwenden — falls sie im `No-Vary-Search`-Header enthalten sind.

> [!WARNING]
> Es ist besondere Sorgfalt erforderlich, wenn `No-Vary-Search` zusammen mit Prerendering verwendet wird, da die Seite möglicherweise anfänglich mit unterschiedlichen URL-Parametern vorgerendert wird. `No-Vary-Search` wird für URL-Parameter verwendet, die dieselbe Ressource vom Server liefern, aber vom Client aus verschiedenen Gründen verwendet werden (Client-seitiges Rendering, UTM-Parameter für die Analyse, etc.). Da das anfängliche Prerendering für unterschiedliche URL-Parameter erfolgen kann, sollte jeglicher Code, der davon abhängig ist, erst nach der Prerender-Aktivierung ausgeführt werden.

Die Speculation Rules API kann auch ein `expects_no_vary_search`-Feld enthalten, das dem Browser anzeigt, welchen `No-Vary-Search`-Wert (falls vorhanden) für Dokumente erwartet wird, für die sie Vorababruf/Vor-Render-Anfragen über die Spekulationsregeln erhält. Der Browser kann dies nutzen, um im Voraus zu bestimmen, ob es nützlicher ist, auf einen bestehenden Vorabruf/Vor-Render zu warten oder eine neue Abrufanfrage zu starten, wenn die Spekulationsregel übereinstimmt. Siehe das [„expects_no_vary_search“-Beispiel](/de/docs/Web/HTML/Reference/Elements/script/type/speculationrules#expects_no_vary_search_example) für eine Erklärung, wie dies verwendet werden kann.

## Beispiele

### Erlauben von Antworten von URLs mit unterschiedlich angeordneten Parametern, um denselben Cache-Eintrag zuzuordnen

Wenn Sie beispielsweise eine Suchseite haben, die ihre Suchkriterien in URL-Parametern speichert und nicht garantieren können, dass die Parameter jedes Mal in derselben Reihenfolge zur URL hinzugefügt werden, können Sie Antworten von URLs, die bis auf die Reihenfolge der Parameter identisch sind, denselben Cache-Eintrag zuordnen lassen, indem Sie `key-order` verwenden:

```http
No-Vary-Search: key-order
```

Wenn dieser Header zu den zugehörigen Antworten hinzugefügt wird, würden die folgenden URLs beim Durchsuchen des Caches als gleichwertig behandelt:

```plain
https://search.example.com?a=1&b=2&c=3
https://search.example.com?b=2&a=1&c=3
```

Das Vorhandensein unterschiedlicher URL-Parameter wird jedoch bewirken, dass diese URLs separat im Cache gespeichert werden. Zum Beispiel:

```plain
https://search.example.com?a=1&b=2&c=3
https://search.example.com?b=2&a=1&c=3&d=4
```

Die unten stehenden Beispiele veranschaulichen, wie Sie steuern können, welche Parameter im Kontext der Cache-Abgleichung ignoriert werden.

### Erlauben von Antworten von URLs mit einem anderen Parameter, um denselben Cache-Eintrag zuzuordnen

Betrachten Sie einen Fall, in dem eine Benutzerverzeichnis-Startseite, `/users`, bereits im Cache gespeichert wurde. Ein `id`-Parameter könnte verwendet werden, um Informationen zu einem bestimmten Benutzer anzuzeigen, beispielsweise `/users?id=345`. Ob diese URL für Cache-Abgleichungszwecke als identisch betrachtet werden soll, hängt vom Verhalten der Anwendung ab:

- Wenn dieser Parameter den Effekt hat, eine völlig neue Seite mit den Informationen für den angegebenen Benutzer zu laden, sollte die Antwort von dieser URL separat im Cache gespeichert werden.
- Wenn dieser Parameter den Effekt hat, den angegebenen Benutzer auf derselben Seite hervorzuheben und möglicherweise ein Ausziehpanel mit deren Daten anzuzeigen, wäre es besser, wenn der Browser die im Cache gespeicherte Antwort für `/users` verwendet. Dies könnte Leistungsverbesserungen beim Laden der Benutzerseiten zur Folge haben.

Wenn Ihre Anwendung wie im zweiten obigen Beispiel funktioniert, könnten Sie bewirken, dass sowohl `/users` als auch `/users?id=345` für Caching-Zwecke als identisch behandelt werden, indem Sie einen `No-Vary-Search`-Header wie folgt verwenden:

```http
No-Vary-Search: params=("id")
```

> [!NOTE]
> Wenn ein Parameter mithilfe von `params` vom Cache-Schlüssel ausgeschlossen wird, wird er ignoriert, wenn er in der URL enthalten ist, unabhängig davon, wo er in der Parameterliste erscheint.

### Erlauben von Antworten von URLs mit mehreren unterschiedlichen Parametern, um denselben Cache-Eintrag zuzuordnen

Angenommen, Sie hatten auch URL-Parameter, die die Liste der Benutzer auf der Seite in aufsteigender oder absteigender alphabetischer Reihenfolge sortierten und die Sprache zum Anzeigen der UI-Zeichenfolgen festlegten, z.B. `/users?id=345&order=asc&lang=fr`.

Sie könnten den Browser veranlassen, alle diese zu ignorieren, wenn die Cache-Abgleichung in Betracht gezogen wird, wie folgt:

```http
No-Vary-Search: params=("id" "order" "lang")
```

> [!NOTE]
> Als [strukturiertes Feld](https://www.rfc-editor.org/rfc/rfc8941) sollten die Parameter als durch Leerzeichen getrennte, in Anführungszeichen stehende Strings — wie oben gezeigt — und nicht als durch Kommas getrennt angegeben werden, an die Entwickler vielleicht eher gewöhnt sind.

Wenn Sie wollten, dass der Browser alle diese _und_ alle anderen ignoriert, die beim Abgleichen des Caches vorhanden sein könnten, könnten Sie die boolesche Form von `params` verwenden:

```http
No-Vary-Search: params
```

### Spezifizieren von Parametern, die _Cache-Abgleichsfehler_ verursachen

Angenommen, die App verhält sich anders, wobei `/users` auf die Haupt-Startseite des Benutzerverzeichnisses verweist und `/users?id=345` auf eine völlig separate Detailseite für einen bestimmten Benutzer verweist. In diesem Fall möchten Sie, dass der Browser alle oben genannten Parameter für Cache-Abgleichszwecke ignoriert, _außer_ für `id`, dessen Vorhandensein dazu führen würde, dass der Browser den `/users`-Cache-Eintrag nicht abgleicht und `/users?id=345` vom Server anfordert.

Dies kann wie folgt erreicht werden:

```http
No-Vary-Search: params, except=("id")
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [HTTP Caching: Vary](/de/docs/Web/HTTP/Guides/Caching#vary) und {{HTTPHeader("Vary")}} Header
