---
title: No-Vary-Search
slug: Web/HTTP/Headers/No-Vary-Search
l10n:
  sourceCommit: 879e0a9c9d60831afcc7f66ea1b5f43ea0cd4361
---

{{HTTPSidebar}}{{SeeCompatTable}}

Der **`No-Vary-Search`** Response-Header spezifiziert eine Reihe von Regeln, die definieren, wie sich die Abfrageparameter einer URL auf die Cache-Übereinstimmung auswirken. Diese Regeln bestimmen, ob dieselbe URL mit unterschiedlichen URL-Parametern als separate Browser-Cache-Einträge gespeichert werden sollte.

> **Note:** [Spekulationsregeln](/de-DE/docs/Web/API/Speculation_Rules_API) können ein Feld `expects_no_vary_search` enthalten, das dem Browser anzeigt, welchen erwarteten Wert `No-Vary-Search` (falls vorhanden) Dokumente haben werden, für die er Prefetch/Prerender-Anfragen über die Spekulationsregeln erhält. Der Browser kann dies nutzen, um im Voraus zu entscheiden, ob es nützlicher ist, auf den Abschluss eines bestehenden Prefetch/Prerender zu warten, oder eine neue Abrufanfrage zu starten, wenn die Spekulationsregel zutrifft.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>[Response header](/de/docs/Glossary/Response_header)</td>
    </tr>
    <tr>
      <th scope="row">[Verbotener Headername](/de/docs/Glossary/Forbidden_header_name)</th>
      <td>nein</td>
    </tr>
  </tbody>
</table>

## Syntax

```http
No-Vary-Search: key-order
No-Vary-Search: params
No-Vary-Search: params=("param1" "param2" "utm_campaign")
No-Vary-Search: params, except=("param1" "param2")
```

## Direktiven

- `key-order`
  - : Ein boolean. Wenn im Header-Wert enthalten, zeigt es an, dass Unterschiede in der Reihenfolge der Parameter zwischen ansonsten identischen URLs nicht dazu führen werden, dass sie als separate Einträge gecacht werden. Unterschiede in den vorhandenen Parametern _werden_ dazu führen, dass sie separat gespeichert werden.
- `params`
  - : Entweder ein boolean oder eine Liste von Strings:
    - Wenn als boolean im Header-Wert enthalten, zeigt es an, dass Unterschiede in Parametern zwischen ansonsten identischen URLs nicht dazu führen werden, dass sie als separate Einträge gecacht werden.
    - Wenn als Liste im Header-Wert enthalten, zeigt es an, dass die Anwesenheit der spezifizierten aufgelisteten Parameter nicht dazu führen wird, dass ansonsten identische URLs als separate Einträge gecacht werden. Die Anwesenheit anderer Parameter _wird_ dazu führen, dass sie separat gespeichert werden.
- `except`
  - : Eine Liste von Strings. Wenn im Header-Wert enthalten, zeigt es an, dass die Anwesenheit der spezifizierten aufgelisteten Parameter _wird_ dazu führen, dass ansonsten identische URLs als separate Einträge gecacht werden. Die Anwesenheit anderer Parameter _wird nicht_ dazu führen, dass sie separat gespeichert werden. Eine boolean `params`-Direktive muss zusammen mit `except` enthalten sein, damit sie wirksam wird.

## Beispiele

### Zulassen, dass Antworten von URLs mit unterschiedlich angeordneten Parametern denselben Cache-Eintrag entsprechen

Wenn Sie beispielsweise eine Suchseite haben, die ihre Suchkriterien in URL-Parametern speichert, und Sie nicht garantieren können, dass die Parameter jedes Mal in der gleichen Reihenfolge zur URL hinzugefügt werden, können Sie zulassen, dass Antworten von URLs, die bis auf die Reihenfolge der Parameter identisch sind, denselben Cache-Eintrag verwenden, indem Sie `key-order` verwenden:

```http
No-Vary-Search: key-order
```

Wenn dieser Header den zugehörigen Antworten hinzugefügt wird, würden die folgenden URLs bei der Cachsuche als gleichwertig behandelt:

```plain
https://search.example.com?a=1&b=2&c=3
https://search.example.com?b=2&a=1&c=3
```

Die Anwesenheit unterschiedlicher URL-Parameter wird jedoch dazu führen, dass diese URLs separat gecacht werden. Zum Beispiel:

```plain
https://search.example.com?a=1&b=2&c=3
https://search.example.com?b=2&a=1&c=3&d=4
```

Die folgenden Beispiele veranschaulichen, wie gesteuert werden kann, welche Parameter im Kontext des Cache-Abgleichs ignoriert werden.

### Zulassen, dass Antworten von URLs mit einem unterschiedlichen Parameter denselben Cache-Eintrag entsprechen

Betrachten Sie einen Fall, in dem eine Benutzerverzeichnis-Landingpage, `/users`, bereits im Cache ist. Ein `id`-Parameter könnte verwendet werden, um Informationen zu einem bestimmten Benutzer anzuzeigen, beispielsweise `/users?id=345`. Ob diese URL für Cache-Abgleichszwecke als identisch angesehen werden soll, hängt vom Verhalten der Anwendung ab:

- Wenn dieser Parameter die Auswirkung hat, eine völlig neue Seite mit den Informationen für den spezifizierten Benutzer zu laden, sollte die Antwort von dieser URL separat gecacht werden.
- Wenn dieser Parameter die Auswirkung hat, den spezifizierten Benutzer auf derselben Seite hervorzuheben und möglicherweise ein Ausklapp-Panel anzuzeigen, das seine Daten zeigt, wäre es besser, wenn der Browser die zwischengespeicherte Antwort für `/users` verwendet. Dies könnte zu Leistungsverbesserungen beim Laden der Benutzerseiten führen.

Wenn sich Ihre Anwendung wie im zweiten beschriebenen Beispiel verhält, könnten Sie sowohl `/users` als auch `/users?id=345` für Caching-Zwecke als identisch behandeln mithilfe eines `No-Vary-Search` Headers:

```http
No-Vary-Search: params=("id")
```

> [!NOTE]
> Wenn ein Parameter mithilfe von `params` aus dem Cache-Schlüssel ausgeschlossen ist, wird er, falls er in der URL enthalten ist, für die Cache-Übereinstimmung ignoriert, unabhängig davon, wo er in der Parameterliste erscheint.

### Zulassen, dass Antworten von URLs mit mehreren unterschiedlichen Parametern denselben Cache-Eintrag entsprechen

Angenommen, Sie haben auch URL-Parameter, die die Liste der Benutzer auf der Seite in aufsteigender oder absteigender alphabetischer Reihenfolge sortieren und die Sprache zur Anzeige der UI-Strings angeben, beispielsweise `/users?id=345&order=asc&lang=fr`.

Sie könnten den Browser dazu bringen, alle diese Parameter bei der Cache-Übereinstimmung zu ignorieren:

```http
No-Vary-Search: params=("id" "order" "lang")
```

Wenn Sie möchten, dass der Browser alle diese Parameter _und_ andere, die möglicherweise vorhanden sind, bei der Cache-Übereinstimmung ignoriert, könnten Sie die boolean-Form von `params` verwenden:

```http
No-Vary-Search: params
```

### Spezifizieren von Parametern, die _Cache-Übereinstimmungsmissess_ verursachen

Angenommen, die App verhält sich anders, mit `/users`, das auf die Hauptbenutzerverzeichnis-Landingpage zeigt, und `/users?id=345`, das auf eine völlig separate Detailseite für einen bestimmten Benutzer zeigt. In diesem Fall möchten Sie, dass der Browser alle oben erwähnten Parameter für Cache-Übereinstimmung ignoriert, _außer_ `id`, dessen Anwesenheit dazu führen würde, dass der Browser den `/users` Cache-Eintrag nicht abgleicht und `/users?id=345` vom Server anfordert.

Dies kann folgendermaßen erreicht werden:

```http
No-Vary-Search: params, except=("id")
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
