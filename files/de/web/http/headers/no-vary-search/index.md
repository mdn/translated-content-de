---
title: No-Vary-Search
slug: Web/HTTP/Headers/No-Vary-Search
l10n:
  sourceCommit: 8fcc8b5aae5d641223e3c644615b5c01b747cbe2
---

{{HTTPSidebar}}{{SeeCompatTable}}

Der HTTP-**`No-Vary-Search`**-{{Glossary("response_header", "Antwort-Header")}} gibt eine Reihe von Regeln an, die definieren, wie die Abfrageparameter einer URL das Cache-Matching beeinflussen. Diese Regeln bestimmen, ob dieselbe URL mit unterschiedlichen URL-Parametern als separate Browser-Cache-Einträge gespeichert werden sollte.

Dies ermöglicht es dem Browser, vorhandene Ressourcen wiederzuverwenden, trotz nicht übereinstimmender URL-Parameter, um die Kosten eines erneuten Abrufs der Ressource zu vermeiden, wenn derselbe Inhalt zurückgegeben wird.

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
  - : Gibt an, dass URLs nicht als separate Einträge im Cache gespeichert werden, wenn _die Reihenfolge_, in der die Parameter in der URL erscheinen, der einzige Unterschied ist. Das Vorhandensein anderer Parameter _wird_ dazu führen, dass URLs separat zwischengespeichert werden.
- `params` {{optional_inline}}
  - : Entweder ein Boolean oder eine Liste von Zeichenfolgen:
    - Als Boolean (`params`) gibt es an, dass sich unterscheidende URLs nur durch ihre Parameter nicht als separate Einträge im Cache gespeichert werden.
    - Eine innere Liste von durch Leerzeichen getrennten Zeichenfolgen (`params=("param1" "param2")`).
      Gibt an, dass URLs, die sich nur durch die aufgelisteten Parameter unterscheiden, nicht als separate Einträge zwischengespeichert werden.
      Das Vorhandensein anderer Parameter _wird_ dazu führen, dass sie separat zwischengespeichert werden.
- `except` {{optional_inline}}
  - : Eine innere Liste von durch Leerzeichen getrennten Zeichenfolgen (`except=("param1" "param2")`).
    Gibt an, dass URLs, die sich nur durch die aufgelisteten Parameter unterscheiden, _werden_ als separate Einträge zwischengespeichert.
    Eine `params`-Boolean-Direktive muss enthalten sein, damit es wirksam wird (`params, except=("param1" "param2")`).
    Das Vorhandensein anderer Parameter, die nicht in der `except=`-Liste sind, _wird nicht_ dazu führen, dass URLs als separate Einträge zwischengespeichert werden.

## Beschreibung

### Beziehung zur Speculation-Rules-API

Die [Speculation-Rules-API](/de/docs/Web/API/Speculation_Rules_API) unterstützt die Verwendung des `No-Vary-Search`-Headers, um eine vorhandene vorab geladene oder vorgeladene Seite für unterschiedliche URL-Parameter wiederzuverwenden, wenn diese im `No-Vary-Search`-Header enthalten sind.

> [!WARNING]
> Beim Einsatz von Prerender mit `No-Vary-Search` ist besondere Vorsicht geboten, da die Seite möglicherweise anfänglich mit unterschiedlichen URL-Parametern vorgeladen wird. `No-Vary-Search` wird für URL-Parameter verwendet, die dieselbe Ressource vom Server liefern, jedoch aus verschiedenen Gründen vom Client verwendet werden (Client-seitiges Rendering, UTM-Parameter für die Analyse-Messung, etc.). Da das anfängliche Prerendering für unterschiedliche URL-Parameter erfolgen kann, sollte jeglicher Code, der davon abhängt, erst nach der Prerender-Aktivierung ausgeführt werden.

Die Speculation-Rules-API kann auch ein `expects_no_vary_search`-Feld enthalten, das dem Browser angibt, welcher `No-Vary-Search`-Wert (falls vorhanden) für Dokumente erwartet wird, für die er Prefetch/Prerender-Anfragen über Spekulationsregeln erhält. Der Browser kann dies nutzen, um im Voraus zu bestimmen, ob es nützlicher ist, auf ein vorhandenes Prefetch/Prerender zu warten oder eine neue Fetch-Anfrage zu starten, wenn die Spekulationsregel erfüllt ist. Siehe das ["expects_no_vary_search"-Beispiel](/de/docs/Web/HTML/Element/script/type/speculationrules#expects_no_vary_search_example) zur Erklärung, wie dies genutzt werden kann.

## Beispiele

### Erlauben, dass Antworten von URLs mit unterschiedlich geordneten Parametern denselben Cache-Eintrag erfüllen

Wenn Sie beispielsweise eine Suchseite haben, die ihre Suchkriterien in URL-Parametern speichert, und Sie können nicht garantieren, dass die Parameter jedes Mal in der gleichen Reihenfolge zur URL hinzugefügt werden, können Sie es erlauben, dass Antworten von URLs, die bis auf die Reihenfolge der Parameter identisch sind, denselben Cache-Eintrag mittels `key-order` erfüllen:

```http
No-Vary-Search: key-order
```

Wenn dieser Header den zugehörigen Antworten hinzugefügt wird, werden die folgenden URLs bei der Cache-Suche als gleichwertig behandelt:

```plain
https://search.example.com?a=1&b=2&c=3
https://search.example.com?b=2&a=1&c=3
```

Das Vorhandensein verschiedener URL-Parameter wird jedoch dazu führen, dass diese URLs separat zwischengespeichert werden. Zum Beispiel:

```plain
https://search.example.com?a=1&b=2&c=3
https://search.example.com?b=2&a=1&c=3&d=4
```

Die nachfolgenden Beispiele zeigen, wie zu steuern ist, welche Parameter im Kontext des Cache-Matchings ignoriert werden.

### Erlauben, dass Antworten von URLs mit einem anderen Parameter denselben Cache-Eintrag erfüllen

Betrachten Sie einen Fall, in dem eine Benutzerverzeichnis-Landingpage, `/users`, bereits zwischengespeichert wurde. Ein `id`-Parameter könnte verwendet werden, um Informationen zu einem bestimmten Benutzer anzuzeigen, beispielsweise `/users?id=345`. Ob diese URL für Cache-Matching-Zwecke als identisch betrachtet werden sollte, hängt vom Verhalten der Anwendung ab:

- Wenn dieser Parameter die Wirkung hat, eine völlig neue Seite zu laden, die die Informationen für den angegebenen Benutzer enthält, sollte die Antwort von dieser URL separat zwischengespeichert werden.
- Wenn dieser Parameter die Wirkung hat, den angegebenen Benutzer auf derselben Seite hervorzuheben und möglicherweise ein Pullout-Panel anzeigt, das deren Daten zeigt, wäre es besser, wenn der Browser die zwischengespeicherte Antwort für `/users` verwenden würde. Dies könnte Leistungsvorteile beim Laden der Benutzerseiten bringen.

Wenn sich Ihre Anwendung wie im zweiten Beispiel oben verhält, könnten Sie sowohl `/users` als auch `/users?id=345` so behandeln lassen, dass sie für Caching-Zwecke identisch sind, indem Sie einen `No-Vary-Search`-Header verwenden wie folgt:

```http
No-Vary-Search: params=("id")
```

> [!NOTE]
> Wenn ein Parameter mit `params` aus dem Cache-Schlüssel ausgeschlossen wird, wird er bei Vorhandensein in der URL für die Zwecke des Cache-Matchings ignoriert, unabhängig davon, wo er in der Parameterliste erscheint.

### Erlauben, dass Antworten von URLs mit mehreren unterschiedlichen Parametern denselben Cache-Eintrag erfüllen

Angenommen, Sie hatten auch URL-Parameter, die die Liste von Benutzern auf der Seite in aufsteigender oder absteigender alphabetischer Reihenfolge sortierten und die Sprache festlegten, in der die UI-Zeichenfolgen angezeigt wurden, beispielsweise `/users?id=345&order=asc&lang=fr`.

Sie könnten den Browser veranlassen, alle diese zu ignorieren, wenn es um Cache-Matching geht, wie folgt:

```http
No-Vary-Search: params=("id" "order" "lang")
```

> [!NOTE]
> Als [strukturierte Felder](https://www.rfc-editor.org/rfc/rfc8941) sollte das Array von Parametern aus durch Leerzeichen getrennten, in Anführungszeichen stehenden Zeichenfolgen bestehen, wie oben gezeigt, und nicht durch Kommas getrennt, was Entwicklern möglicherweise geläufiger ist.

Wenn Sie wollten, dass der Browser alle von ihnen _und_ andere, die möglicherweise vorhanden sind, beim Cache-Matching ignoriert, könnten Sie die boolesche Form von `params` verwenden:

```http
No-Vary-Search: params
```

### Angeben von Parametern, die _tatsächlich_ Cache-Matching-Fehler verursachen

Angenommen, die App verhält sich anders, sodass `/users` auf die Hauptverzeichnis-Landingpage verweist und `/users?id=345` auf eine völlig separate Detailseite für einen bestimmten Benutzer. In diesem Fall möchten Sie, dass der Browser alle oben genannten Parameter beim Cache-Matching ignoriert, _außer_ `id`, dessen Vorhandensein den Browser dazu veranlassen würde, den Cache-Eintrag von `/users` nicht zu matchen und `/users?id=345` vom Server anzufordern.

Dies kann wie folgt erreicht werden:

```http
No-Vary-Search: params, except=("id")
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [HTTP-Caching: Vary](/de/docs/Web/HTTP/Caching#vary) und {{HTTPHeader("Vary")}}-Header
