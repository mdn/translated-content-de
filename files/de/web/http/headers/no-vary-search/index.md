---
title: No-Vary-Search
slug: Web/HTTP/Headers/No-Vary-Search
l10n:
  sourceCommit: 442db82028668b17b888ee439468ae2ac9d589a5
---

{{HTTPSidebar}}{{SeeCompatTable}}

Der HTTP-**`No-Vary-Search`**-{{Glossary("response_header", "Response-Header")}} spezifiziert eine Reihe von Regeln, die definieren, wie die Abfrageparameter einer URL das Cache-Matching beeinflussen. Diese Regeln bestimmen, ob dieselbe URL mit unterschiedlichen URL-Parametern als separate Einträge im Browser-Cache gespeichert werden sollte.

Dies ermöglicht es dem Browser, bestehende Ressourcen trotz nicht übereinstimmender URL-Parameter wiederzuverwenden, um die Kosten des erneuten Abrufens der Ressource zu vermeiden, wenn derselbe Inhalt zurückgegeben wird.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Headertyp</th>
      <td>{{Glossary("Response_header", "Response-Header")}}</td>
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
  - : Gibt an, dass URLs nicht als separate Einträge zwischengespeichert werden, wenn _die Reihenfolge_, in der Parameter in der URL angezeigt werden, der einzige Unterschied ist. Das Vorhandensein anderer Parameter _wird_ dazu führen, dass URLs separat zwischengespeichert werden.
- `params` {{optional_inline}}
  - : Entweder ein boolescher Wert oder eine Liste von Zeichenfolgen:
    - Als boolescher Wert (`params`) zeigt es an, dass URLs, die sich nur durch ihre Parameter unterscheiden, nicht als separate Einträge zwischengespeichert werden.
    - Eine innere Liste von leerzeichengetrennten Zeichenfolgen (`params=("param1" "param2")`).
      Gibt an, dass URLs, die sich nur durch die aufgeführten Parameter unterscheiden, nicht als separate Einträge zwischengespeichert werden.
      Das Vorhandensein anderer Parameter _wird_ dazu führen, dass sie separat zwischengespeichert werden.
- `except` {{optional_inline}}
  - : Eine innere Liste von leerzeichengetrennten Zeichenfolgen (`except=("param1" "param2")`).
    Gibt an, dass URLs, die sich nur durch die aufgelisteten Parameter unterscheiden, _werden_ separat zwischengespeichert.
    Eine boolesche `params`-Direktive muss enthalten sein, damit sie wirksam wird (`params, except=("param1" "param2")`).
    Das Vorhandensein anderer Parameter, die nicht in der `except=`-Liste enthalten sind, _wird_ nicht dazu führen, dass URLs separat zwischengespeichert werden.

## Beschreibung

### Beziehung zur Speculation Rules API

Die [Speculation Rules API](/de/docs/Web/API/Speculation_Rules_API) unterstützt die Verwendung des `No-Vary-Search`-Headers, um eine vorhandene vorab heruntergeladene oder vorgeladene Seite für unterschiedliche URL-Parameter wiederzuverwenden — wenn sie im `No-Vary-Search`-Header enthalten sind.

> [!WARNING]
> Es muss besondere Sorgfalt walten, wenn `No-Vary-Search` mit Prerendering verwendet wird, da die Seite möglicherweise zunächst mit unterschiedlichen URL-Parametern vorgeladen wird. `No-Vary-Search` wird für URL-Parameter verwendet, die dieselbe Ressource vom Server liefern, aber vom Client aus verschiedenen Gründen verwendet werden (Client-seitige Rendering, UTM-Parameter für die Analyse, etc.). Da das anfängliche Prerendern für unterschiedliche URL-Parameter erfolgen kann, sollte jeder Code, der von ihnen abhängt, erst nach Aktivierung des Prerenderns ausgeführt werden.

Die Speculation Rules API kann auch ein `expects_no_vary_search` Feld enthalten, welches dem Browser angibt, welcher `No-Vary-Search` Wert erwartet wird (falls vorhanden) für Dokumente, die Prerender- oder Prefetch-Anfragen über die Spekulationsregeln erhalten. Der Browser kann dies nutzen, um im Voraus zu bestimmen, ob es sinnvoller ist, auf ein bestehendes Prefetch/Prerender zu warten, oder eine neue Abrufanfrage zu starten, wenn die Spekulationsregel übereinstimmt. Siehe das ["expects_no_vary_search"-Beispiel](/de/docs/Web/HTML/Element/script/type/speculationrules#expects_no_vary_search_example) für eine Erklärung, wie dies verwendet werden kann.

## Beispiele

### Zulassen, dass Antworten von URLs mit unterschiedlich geordneten Parametern mit demselben Cache-Eintrag übereinstimmen

Wenn Sie zum Beispiel eine Suchseite haben, die ihre Suchkriterien in URL-Parametern speichert und nicht garantieren können, dass die Parameter jedes Mal in derselben Reihenfolge zur URL hinzugefügt werden, können Sie Antworten von URLs, die bis auf die Reihenfolge der Parameter identisch sind, mit demselben Cache-Eintrag übereinstimmen lassen, indem Sie `key-order` verwenden:

```http
No-Vary-Search: key-order
```

Wenn dieser Header zu den zugehörigen Antworten hinzugefügt wird, würden die folgenden URLs bei der Cache-Suche als gleichwertig betrachtet:

```plain
https://search.example.com?a=1&b=2&c=3
https://search.example.com?b=2&a=1&c=3
```

Das Vorhandensein unterschiedlicher URL-Parameter wird jedoch dazu führen, dass diese URLs separat zwischengespeichert werden. Zum Beispiel:

```plain
https://search.example.com?a=1&b=2&c=3
https://search.example.com?b=2&a=1&c=3&d=4
```

Die untenstehenden Beispiele veranschaulichen, wie Sie steuern können, welche Parameter im Kontext des Cache-Matchings ignoriert werden.

### Zulassen, dass Antworten von URLs mit einem anderen Parameter mit demselben Cache-Eintrag übereinstimmen

Betrachten Sie einen Fall, in dem eine Benutzerverzeichnis-Startseite, `/users`, bereits zwischengespeichert wurde. Ein `id`-Parameter könnte verwendet werden, um Informationen zu einem bestimmten Benutzer anzuzeigen, zum Beispiel `/users?id=345`. Ob diese URL für Cache-Matching-Zwecke als identisch betrachtet werden sollte, hängt vom Verhalten der Anwendung ab:

- Wenn dieser Parameter die Wirkung hat, eine komplett neue Seite mit den Informationen für den angegebenen Benutzer zu laden, sollte die Antwort von dieser URL separat zwischengespeichert werden.
- Wenn dieser Parameter die Wirkung hat, den angegebenen Benutzer auf derselben Seite hervorzuheben und vielleicht ein Ausziehpanel zeigt, das deren Daten anzeigt, wäre es besser, wenn der Browser die zwischengespeicherte Antwort für `/users` verwendet. Dies könnte zu Leistungsverbesserungen beim Laden der Benutzerseiten führen.

Wenn Ihre Anwendung wie das zweite oben beschriebene Beispiel funktioniert, könnten Sie sowohl `/users` als auch `/users?id=345` für Cache-Zwecke als identisch behandeln lassen, indem Sie einen `No-Vary-Search`-Header wie folgt verwenden:

```http
No-Vary-Search: params=("id")
```

> [!NOTE]
> Wenn ein Parameter mit `params` vom Cache-Schlüssel ausgeschlossen wird, wird er ignoriert, unabhängig davon, an welcher Stelle er in der Parameterliste erscheint, wenn er in der URL enthalten ist.

### Zulassen, dass Antworten von URLs mit mehreren unterschiedlichen Parametern mit demselben Cache-Eintrag übereinstimmen

Angenommen, Sie hatten auch URL-Parameter, die die Liste der Benutzer auf der Seite in aufsteigender oder absteigender alphabetischer Reihenfolge sortierten und die Sprache für die Anzeige der UI-Strings festlegten, zum Beispiel `/users?id=345&order=asc&lang=fr`.

Sie könnten den Browser dazu bringen, all diese bei der Cache-Matching-Betrachtung zu ignorieren, wie folgt:

```http
No-Vary-Search: params=("id" "order" "lang")
```

> [!NOTE]
> Als [strukturierte Felder](https://www.rfc-editor.org/rfc/rfc8941) sollte das Array von Parametern, wie oben gezeigt, als leerzeichengetrennte, in Anführungszeichen gesetzte Zeichenfolgen und nicht als durch Kommas getrennt formatiert sein, was Entwickler möglicherweise mehr gewohnt sind.

Wenn Sie möchten, dass der Browser alle von ihnen _und_ alle anderen, die möglicherweise vorhanden sind, bei der Cache-Matching-Betrachtung ignoriert, könnten Sie die boolesche Form von `params` verwenden:

```http
No-Vary-Search: params
```

### Spezifizieren von Parametern, die _Cache-Matching-Fehlschläge_ verursachen

Angenommen, die App verhält sich anders und `/users` verweist auf die Haupt-Benutzerverzeichnis-Landing-Page und `/users?id=345` verweist auf eine völlig separate Detailseite für einen bestimmten Benutzer. In diesem Fall möchten Sie, dass der Browser alle oben genannten Parameter für das Cache-Matching ignoriert, _außer_ für `id`, dessen Vorhandensein den Browser dazu bringen würde, den `/users` Cache-Eintrag nicht zuzuordnen und `/users?id=345` vom Server anzufordern.

Dies kann wie folgt erreicht werden:

```http
No-Vary-Search: params, except=("id")
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [HTTP Caching: Vary](/de/docs/Web/HTTP/Caching#vary) und {{HTTPHeader("Vary")}}-Header
