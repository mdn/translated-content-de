---
title: No-Vary-Search header
short-title: No-Vary-Search
slug: Web/HTTP/Reference/Headers/No-Vary-Search
l10n:
  sourceCommit: ee756fd51ccbc4820a4b334aa753648650ad1d51
---

{{HTTPSidebar}}{{SeeCompatTable}}

Der HTTP **`No-Vary-Search`** {{Glossary("response_header", "Antwort-Header")}} spezifiziert eine Reihe von Regeln, die definieren, wie die Abfrageparameter einer URL das Cache-Matching beeinflussen. Diese Regeln diktieren, ob dieselbe URL mit unterschiedlichen URL-Parametern als separate Einträge im Browser-Cache gespeichert werden sollte.

Dies ermöglicht dem Browser die Wiederverwendung bestehender Ressourcen trotz nicht übereinstimmender URL-Parameter, um die Kosten für das erneute Abrufen der Ressource zu vermeiden, wenn derselbe Inhalt zurückgegeben wird.

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
  - : Gibt an, dass URLs nicht als separate Einträge zwischengespeichert werden, wenn _die Reihenfolge_, in der Parameter in der URL erscheinen, der einzige Unterschied ist. Das Vorhandensein anderer Parameter _wird_ dazu führen, dass URLs separat zwischengespeichert werden.
- `params` {{optional_inline}}
  - : Entweder ein Boolescher Wert oder eine Liste von Zeichenfolgen:
    - Als Boolescher Wert (`params`) gibt es an, dass sich unterscheidende URL-Parameter nicht als separate Einträge zwischengespeichert werden.
    - Eine innere Liste von Leerzeichen-getrennten Zeichenfolgen (`params=("param1" "param2")`).
      Gibt an, dass URLs, die sich nur durch die aufgelisteten Parameter unterscheiden, nicht als separate Einträge zwischengespeichert werden.
      Das Vorhandensein anderer Parameter _wird_ dazu führen, dass sie separat zwischengespeichert werden.
- `except` {{optional_inline}}
  - : Eine innere Liste von Leerzeichen-getrennten Zeichenfolgen (`except=("param1" "param2")`).
    Gibt an, dass URLs, die sich nur durch die aufgelisteten Parameter unterscheiden, _als_ separate Einträge zwischengespeichert werden.
    Eine boolesche `params`-Direktive muss enthalten sein, damit es wirksam ist (`params, except=("param1" "param2")`).
    Das Vorhandensein anderer Parameter, die nicht in der `except`-Liste enthalten sind, _wird nicht_ dazu führen, dass URLs als separate Einträge zwischengespeichert werden.

## Beschreibung

### Beziehung zur Spekulationsregeln-API

Die [Speculation Rules API](/de/docs/Web/API/Speculation_Rules_API) unterstützt den Einsatz des `No-Vary-Search`-Headers, um eine vorhandene vorab abgerufene oder -gerenderte Seite trotz unterschiedlicher URL-Parameter wiederzuverwenden — wenn diese im `No-Vary-Search`-Header enthalten sind.

> [!WARNING]
> Bei der Verwendung von Prerender mit `No-Vary-Search` ist besondere Vorsicht geboten, da die Seite möglicherweise zunächst mit unterschiedlichen URL-Parametern vorkonfiguriert ist. `No-Vary-Search` wird für URL-Parameter verwendet, die dieselbe Ressource vom Server liefern, aber aus verschiedenen Gründen vom Client verwendet werden (Client-seitiges Rendering, UTM-Parameter für die Analyse, etc.). Da das initiale Prerender für unterschiedliche URL-Parameter sein kann, sollte jeglicher Code, der von ihnen abhängt, erst nach der Prerender-Aktivierung ausgeführt werden.

Die Spekulationsregeln-API kann auch ein Feld `expects_no_vary_search` enthalten, das dem Browser angibt, welchen erwarteten `No-Vary-Search`-Wert es (sofern vorhanden) für Dokumente haben wird, für die es Vorabrufe/-Renderanforderungen im Rahmen der Spekulationsregeln erhält. Der Browser kann dies nutzen, um im Voraus zu bestimmen, ob es sinnvoller ist, auf das Abschluss eines vorhandenen Vorabrufs/-Renders zu warten oder eine neue Abrufanfrage zu starten, wenn die Spekulationsregel zutrifft. Siehe das ["expects_no_vary_search"-Beispiel](/de/docs/Web/HTML/Reference/Elements/script/type/speculationrules#expects_no_vary_search_example) für eine Erklärung, wie dies genutzt werden kann.

## Beispiele

### Zulassung von Antworten von URLs mit unterschiedlich geordneten Parametern zur Übereinstimmung mit demselben Cache-Eintrag

Wenn Sie beispielsweise eine Suchseite haben, die ihre Suchkriterien in URL-Parametern speichert, und Sie nicht garantieren können, dass die Parameter jedes Mal in derselben Reihenfolge zur URL hinzugefügt werden, können Sie es erlauben, dass Antworten von URLs, die identisch sind, abgesehen von der Reihenfolge der Parameter, mit demselben Cache-Eintrag übereinstimmen, indem Sie `key-order` verwenden:

```http
No-Vary-Search: key-order
```

Wenn dieser Header zu den zugehörigen Antworten hinzugefügt wird, würden die folgenden URLs bei der Cachesuche als gleichwertig behandelt:

```plain
https://search.example.com?a=1&b=2&c=3
https://search.example.com?b=2&a=1&c=3
```

Das Vorhandensein unterschiedlicher URL-Parameter führt jedoch dazu, dass diese URLs separat zwischengespeichert werden. Zum Beispiel:

```plain
https://search.example.com?a=1&b=2&c=3
https://search.example.com?b=2&a=1&c=3&d=4
```

Die folgenden Beispiele veranschaulichen, wie zu steuern ist, welche Parameter im Kontext des Cache-Matchings ignoriert werden.

### Zulassung von Antworten von URLs mit einem anderen Parameter zur Übereinstimmung mit demselben Cache-Eintrag

Betrachten Sie einen Fall, in dem eine Benutzerverzeichnis-Startseite, `/users`, bereits zwischengespeichert wurde. Ein `id`-Parameter könnte verwendet werden, um Informationen zu einem bestimmten Benutzer anzuzeigen, zum Beispiel `/users?id=345`. Ob diese URL für Cache-Matching-Zwecke als identisch angesehen werden sollte, hängt vom Verhalten der Anwendung ab:

- Wenn dieser Parameter die Auswirkung hat, dass eine völlig neue Seite mit den Informationen für den angegebenen Benutzer geladen wird, sollte die Antwort von dieser URL separat zwischengespeichert werden.
- Wenn dieser Parameter die Auswirkung hat, den angegebenen Benutzer auf derselben Seite hervorzuheben und vielleicht ein Ausziehpanel anzuzeigen, das seine Daten darstellt, wäre es besser, dass der Browser die zwischengespeicherte Antwort für `/users` verwendet. Dies könnte Leistungsverbesserungen beim Laden der Benutzerseiten bewirken.

Wenn sich Ihre Anwendung wie im zweiten oben beschriebenen Beispiel verhält, könnten Sie dafür sorgen, dass sowohl `/users` als auch `/users?id=345` für Caching-Zwecke als identisch behandelt werden, mittels eines `No-Vary-Search`-Headers:

```http
No-Vary-Search: params=("id")
```

> [!NOTE]
> Wenn ein Parameter unter Verwendung von `params` aus dem Cache-Schlüssel ausgeschlossen wird, wird er für die Cache-Matching-Zwecke ignoriert, unabhängig davon, wo er in der Parameterliste erscheint, falls er in der URL enthalten ist.

### Zulassung von Antworten von URLs mit unterschiedlichen Parametern zur Übereinstimmung mit demselben Cache-Eintrag

Angenommen, Sie hätten auch URL-Parameter, die die Liste der Benutzer auf der Seite in aufsteigender oder absteigender alphabetischer Reihenfolge sortieren und die Sprache für die Anzeige der UI-Zeichenfolgen angeben, zum Beispiel `/users?id=345&order=asc&lang=fr`.

Sie könnten den Browser dazu bringen, all diese bei der Berücksichtigung des Cache-Matchings zu ignorieren, indem Sie Folgendes tun:

```http
No-Vary-Search: params=("id" "order" "lang")
```

> [!NOTE]
> Als [strukturiertes Feld](https://www.rfc-editor.org/rfc/rfc8941) sollten die Parameter Leerzeichen-getrennte, zitierte Zeichenfolgen sein — wie oben gezeigt — und nicht durch Kommas getrennt, was Entwicklern möglicherweise vertrauter ist.

Wenn Sie wollten, dass der Browser alle und _jede_ andere, die möglicherweise vorhanden sind, ignoriert, wenn das Cache-Matching berücksichtigt wird, könnten Sie die boolesche Form von `params` verwenden:

```http
No-Vary-Search: params
```

### Spezifizierung von Parametern, die _doch_ Cache-Matching-Fehltreffer verursachen

Angenommen, die App hätte ein anderes Verhalten, wobei `/users` auf die Hauptbenutzerverzeichnis-Startseite verweist und `/users?id=345` auf eine völlig separate Detailseite für einen bestimmten Benutzer verweist. In diesem Fall möchten Sie, dass der Browser alle oben genannten Parameter für Cache-Matching-Zwecke ignoriert, _außer_ für `id`, dessen Vorhandensein den Browser dazu veranlassen würde, den Cache-Eintrag für `/users` nicht abzugleichen und `/users?id=345` vom Server anzufordern.

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
