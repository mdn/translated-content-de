---
title: No-Vary-Search header
short-title: No-Vary-Search
slug: Web/HTTP/Reference/Headers/No-Vary-Search
l10n:
  sourceCommit: 5b9e4bb67e5cb4bb2b780e7338a6560463e5a1a7
---

Der HTTP-**`No-Vary-Search`**-{{Glossary("response_header", "Antwort-Header")}} gibt eine Reihe von Regeln an, die definieren, wie die Abfrageparameter einer URL die Cache-Übereinstimmung beeinflussen.
Diese Regeln bestimmen, ob dieselbe URL mit unterschiedlichen URL-Parametern als separate Browsereintrags-Caches gespeichert werden soll.

Dies ermöglicht es dem Browser, bestehende Ressourcen wiederzuverwenden, selbst wenn die URL-Parameter nicht übereinstimmen, um das erneute Abrufen der Ressource zu vermeiden, wenn derselbe Inhalt zurückgegeben wird.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Headertyp</th>
      <td>{{Glossary("Response_header", "Antwort-Header")}}</td>
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
  - : Gibt an, dass URLs nicht als separate Einträge gecached werden, wenn _die Reihenfolge_ der Parameter das einzige Unterscheidungsmerkmal ist.
    Die Anwesenheit anderer Parameter _wird_ dazu führen, dass URLs separat gecached werden.
- `params` {{optional_inline}}
  - : Entweder ein boolescher Wert oder eine Liste von Zeichenfolgen:
    - Als ein boolescher Wert (`params`) zeigt er an, dass sich URLs, die sich nur durch ihre Parameter unterscheiden, nicht als separate Einträge gecached werden.
    - Eine innere Liste von durch Leerzeichen getrennten Zeichenfolgen (`params=("param1" "param2")`).
      Gibt an, dass sich URLs, die sich nur durch die aufgeführten Parameter unterscheiden, nicht als separate Einträge gecached werden.
      Die Anwesenheit anderer Parameter _wird_ dazu führen, dass sie separat gecached werden.
- `except` {{optional_inline}}
  - : Eine innere Liste von durch Leerzeichen getrennten Zeichenfolgen (`except=("param1" "param2")`).
    Gibt an, dass sich URLs, die sich nur durch die aufgeführten Parameter unterscheiden, _als_ separate Einträge gecached werden.
    Eine boolesche `params`-Direktive muss enthalten sein, damit sie wirksam wird (`params, except=("param1" "param2")`).
    Die Anwesenheit von anderen Parametern, die nicht in der `except=`-Liste enthalten sind, _wird_ nicht dazu führen, dass URLs als separate Einträge gecached werden.

## Beschreibung

### Beziehung zur Speculation Rules API

Die [Speculation Rules API](/de/docs/Web/API/Speculation_Rules_API) unterstützt die Verwendung des `No-Vary-Search`-Headers, um eine bestehende vorgeladene oder vorgerenderte Seite für unterschiedliche URL-Parameter wiederzuverwenden — wenn sie im `No-Vary-Search`-Header enthalten sind.

> [!WARNING]
> Besondere Vorsicht ist geboten, wenn Sie Prerendering mit `No-Vary-Search` verwenden, da die Seite möglicherweise initial mit unterschiedlichen URL-Parametern vorgerendert wird. `No-Vary-Search` wird für URL-Parameter verwendet, die dasselbe Material vom Server bereitstellen, jedoch vom Client aus verschiedenen Gründen verwendet werden (Client-seitiges Rendering, UTM-Parameter für Analysezwecke, etc.). Da das anfängliche Prerendering möglicherweise für unterschiedliche URL-Parameter erfolgt, sollte jeglicher Code, der abhängig davon ist, nur nach der Prerender-Aktivierung ausgeführt werden.

Die Speculation Rules API kann auch ein `expects_no_vary_search`-Feld enthalten, das dem Browser anzeigt, welchen `No-Vary-Search`-Wert (falls vorhanden) für Dokumente erwartet wird, die Prefetch/Prerender-Anfragen über die Spekulationsregeln erhalten. Der Browser kann dies nutzen, um im Voraus zu bestimmen, ob es sinnvoller ist, auf das Beenden eines bestehenden Prefetch/Prerenders zu warten oder eine neue Abrufanforderung zu starten, wenn die Spekulationsregel übereinstimmt. Sehen Sie sich das ["expects_no_vary_search"-Beispiel](/de/docs/Web/HTML/Reference/Elements/script/type/speculationrules#expects_no_vary_search_example) für eine Erklärung an, wie dies verwendet werden kann.

## Beispiele

### Ermöglichen, dass Antworten von URLs mit unterschiedlich geordneten Parametern zum selben Cache-Eintrag passen

Wenn Sie beispielsweise eine Suchseite haben, die ihre Suchkriterien in URL-Parametern speichert, und Sie nicht garantieren können, dass die Parameter bei jedem Mal in derselben Reihenfolge zur URL hinzugefügt werden, können Sie Antworten von URLs, die bis auf die Reihenfolge der Parameter identisch sind, mit demselben Cache-Eintrag übereinstimmen lassen, indem Sie `key-order` verwenden:

```http
No-Vary-Search: key-order
```

Wenn dieser Header zu den zugehörigen Antworten hinzugefügt wird, würden die folgenden URLs als äquivalent bei der Suche des Caches behandelt werden:

```plain
https://search.example.com?a=1&b=2&c=3
https://search.example.com?b=2&a=1&c=3
```

Das Vorhandensein unterschiedlicher URL-Parameter jedoch führt dazu, dass diese URLs separat gecached werden. Zum Beispiel:

```plain
https://search.example.com?a=1&b=2&c=3
https://search.example.com?b=2&a=1&c=3&d=4
```

Die folgenden Beispiele zeigen, wie man steuert, welche Parameter im Kontext der Cache-Übereinstimmung ignoriert werden.

### Ermöglichen, dass Antworten von URLs mit unterschiedlichen Parametern zum selben Cache-Eintrag passen

Betrachten wir einen Fall, in dem eine Benutzerverzeichnisseite `/users` bereits gecached wurde. Ein `id`-Parameter könnte verwendet werden, um Informationen zu einem bestimmten Benutzer aufzurufen, z.B. `/users?id=345`. Ob diese URL für Cache-Abgleichszwecke als identisch betrachtet werden sollte, hängt vom Verhalten der Anwendung ab:

- Wenn dieser Parameter die Wirkung hat, eine völlig neue Seite mit den Informationen zum angegebenen Benutzer zu laden, sollte die Antwort von dieser URL separat gecached werden.
- Wenn dieser Parameter die Wirkung hat, den angegebenen Benutzer auf derselben Seite hervorzuheben und möglicherweise ein herausziehbares Panel anzuzeigen, das deren Daten zeigt, wäre es besser, wenn der Browser die gecachte Antwort für `/users` verwendet. Dies könnte zu Leistungsverbesserungen beim Laden der Benutzerseiten führen.

Wenn Ihre Anwendung sich wie im zweiten oben beschriebenen Beispiel verhält, könnten Sie bewirken, dass sowohl `/users` als auch `/users?id=345` für Cache-Zwecke als identisch behandelt werden, indem Sie einen `No-Vary-Search`-Header wie folgt verwenden:

```http
No-Vary-Search: params=("id")
```

> [!NOTE]
> Wenn ein Parameter mit `params` vom Cache-Schlüssel ausgeschlossen wird, wird er, wenn er in der URL enthalten ist, für Cache-Übereinstimmungszwecke ignoriert, unabhängig davon, wo er in der Parameterliste erscheint.

### Ermöglichen, dass Antworten von URLs mit mehreren unterschiedlichen Parametern zum selben Cache-Eintrag passen

Angenommen, Sie hatten auch URL-Parameter, die die Liste der Benutzer auf der Seite in aufsteigender oder absteigender alphabetischer Reihenfolge sortierten und die Sprache für die Anzeige der UI-Strings angaben, beispielsweise `/users?id=345&order=asc&lang=fr`.

Sie könnten den Browser dazu bringen, all dies bei der Berücksichtigung der Cache-Übereinstimmung zu ignorieren:

```http
No-Vary-Search: params=("id" "order" "lang")
```

> [!NOTE]
> Als ein [strukturiertes Feld](https://www.rfc-editor.org/info/rfc8941/) sollten die Parameter durch Leerzeichen getrennte, in Anführungszeichen gesetzte Zeichenfolgen sein — wie oben gezeigt — und nicht durch Kommas getrennt, was Entwicklern möglicherweise vertrauter ist.

Wenn Sie möchten, dass der Browser all diese _und_ alle anderen, die möglicherweise vorhanden sind, bei der Cache-Übereinstimmung ignoriert, könnten Sie die boolesche Form von `params` verwenden:

```http
No-Vary-Search: params
```

### Spezifizieren von Parametern, die _Cache-Übereinstimmungsausfälle verursachen_

Angenommen, die App verhielt sich anders, mit `/users`, die auf die Hauptseite des Benutzerverzeichnisses verweist, und `/users?id=345`, die auf eine völlig separate Detailseite für einen bestimmten Benutzer verweist. In diesem Fall möchten Sie, dass der Browser alle oben genannten Parameter für Cache-Übereinstimmungszwecke ignoriert, _außer_ für `id`, dessen Anwesenheit dazu führen würde, dass der Browser den `/users` Cache-Eintrag nicht übereinstimmen lässt und `/users?id=345` vom Server anfordert.

Dies kann wie folgt erreicht werden:

```http
No-Vary-Search: params, except=("id")
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [HTTP-Caching: Vary](/de/docs/Web/HTTP/Guides/Caching#vary) und den {{HTTPHeader("Vary")}}-Header
