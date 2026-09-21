---
title: No-Vary-Search header
short-title: No-Vary-Search
slug: Web/HTTP/Reference/Headers/No-Vary-Search
l10n:
  sourceCommit: d260e0bf3f2ba3091e71ba1a7d0427c7d396e6ac
---

Der HTTP-**`No-Vary-Search`**-{{Glossary("response_header", "Response-Header")}} gibt eine Reihe von Regeln an, die definieren, wie sich die Abfrageparameter einer URL auf den Cache-Abgleich auswirken.
Diese Regeln legen fest, ob dieselbe URL mit unterschiedlichen URL-Parametern als separate Browser-Cache-Einträge gespeichert werden soll.

Dadurch kann der Browser vorhandene Ressourcen trotz nicht übereinstimmender URL-Parameter wiederverwenden, um den Aufwand zu vermeiden, die Ressource erneut abzurufen, wenn derselbe Inhalt zurückgegeben wird.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Response_header", "Response-Header")}}</td>
    </tr>
  </tbody>
</table>

## Syntax

```http
No-Vary-Search: key-order
No-Vary-Search: params
No-Vary-Search: params=("param1" "param2")
No-Vary-Search: params, except=("param1" "param2")
No-Vary-Search: key-order, params, except=("param1" "param2")
```

## Direktiven

- `key-order` {{optional_inline}}
  - : Gibt an, dass der Browser keinen separaten Cache-Eintrag für eine Response erstellen soll, wenn die Reihenfolge, in der Parameter in der URL erscheinen, der einzige Unterschied ist.
- `params` {{optional_inline}}
  - : Entweder ein boolescher Wert oder eine Liste von Strings:
    - Als boolescher Wert (`params`) gibt es an, dass der Browser keine separaten Cache-Einträge für Responses erstellen soll, die sich nur durch das Vorhandensein, die Reihenfolge oder den Wert eines beliebigen Parameters unterscheiden.
    - Als innere Liste von durch Leerzeichen getrennten Strings (`params=("param1" "param2")`) gibt es an, dass der Browser keine separaten Cache-Einträge für Responses erstellen soll, die sich nur durch das Vorhandensein, die Reihenfolge oder den Wert der aufgeführten Parameter unterscheiden.
      Andere Parameter können weiterhin dazu führen, dass die Response separat im Cache gespeichert wird.
- `except` {{optional_inline}}
  - : Eine innere Liste von durch Leerzeichen getrennten Strings (`except=("param1" "param2")`), die die Parameter angibt, für die ein anderer Wert den Browser dazu veranlassen soll, einen separaten Cache-Eintrag zu erstellen.
    Damit sie wirksam wird, muss eine boolesche `params`-Direktive enthalten sein (`params, except=("param1" "param2")`).
    Das Vorhandensein anderer Parameter, die nicht in der Liste `except=` enthalten sind, sollte den Browser nicht dazu veranlassen, einen separaten Cache-Eintrag zu erstellen.

## Beschreibung

Standardmäßig wird eine für eine URL gespeicherte Response nur für eine Anfrage an genau dieselbe URL wiederverwendet.
Jeder Unterschied im Query-String macht daraus eine andere URL: ein anderer Parameterwert, ein zusätzlicher Parameter oder sogar dieselben Parameter in einer anderen Reihenfolge.

Dies ist oft strenger als nötig.
Query-Parameter werden häufig für Dinge verwendet, die die vom Server gesendete Response nicht verändern, etwa Analyse-Tags und Werte, auf die nur clientseitiges JavaScript reagiert.
Eine Seite kann ihren Query-String auch in einer uneinheitlichen Parameterreihenfolge erstellen.
Der Browser kann nicht wissen, was relevant ist, daher ruft er Daten aus dem Netzwerk ab und speichert das Ergebnis im Cache, sobald er einen Query-String sieht, den er zuvor noch nicht angefordert hat.

`No-Vary-Search` bietet dem Server eine Möglichkeit, dem Browser mitzuteilen, ob die Parameterreihenfolge wichtig ist und welche Parameter sich gegebenenfalls auf die zurückgegebene Response auswirken.
Wo die Regeln dies erlauben, kann der Browser dann eine gespeicherte Response für eine URL bereitstellen, die er zuvor nicht abgerufen hat.

### Beziehung zur Speculation Rules API

Die [Speculation Rules API](/de/docs/Web/API/Speculation_Rules_API) unterstützt die Verwendung des `No-Vary-Search`-Headers, um eine vorhandene vorab abgerufene oder vorab gerenderte Seite für unterschiedliche URL-Parameter wiederzuverwenden — sofern diese im `No-Vary-Search`-Header enthalten sind.

> [!WARNING]
> Bei der Verwendung von Prerender mit `No-Vary-Search` ist zusätzliche Vorsicht geboten, da die Seite zunächst mit unterschiedlichen URL-Parametern vorab gerendert werden kann. `No-Vary-Search` wird für URL-Parameter verwendet, die dieselbe Ressource vom Server bereitstellen, aber vom Client aus verschiedenen Gründen verwendet werden (clientseitiges Rendering, UTM-Parameter für Analysedaten usw.). Da das anfängliche Prerendering für unterschiedliche URL-Parameter erfolgen kann, sollte jeglicher Code, der von ihnen abhängt, erst nach der Prerender-Aktivierung ausgeführt werden.

Die Speculation Rules API kann auch ein Feld `expects_no_vary_search` enthalten, das dem Browser angibt, welchen `No-Vary-Search`-Wert er gegebenenfalls für Dokumente erwarten soll, für die er über die Speculation Rules Prefetch-/Prerender-Anfragen erhält. Der Browser kann dies verwenden, um im Voraus zu bestimmen, ob es sinnvoller ist, auf den Abschluss eines vorhandenen Prefetch-/Prerender-Vorgangs zu warten oder eine neue Abrufanfrage zu starten, wenn die Speculation Rule zutrifft. Eine Erklärung dazu, wie dies verwendet werden kann, finden Sie im [Beispiel „expects_no_vary_search“](/de/docs/Web/HTML/Reference/Elements/script/type/speculationrules#expects_no_vary_search_example).

## Beispiele

### Responses von URLs mit unterschiedlich angeordneten Parametern dem gleichen Cache-Eintrag zuordnen

Wenn Sie beispielsweise eine Suchseite haben, die ihre Suchkriterien in URL-Parametern speichert, und Sie nicht garantieren können, dass die Parameter jedes Mal in derselben Reihenfolge zur URL hinzugefügt werden, können Sie Responses von URLs, die bis auf die Reihenfolge der Parameter identisch sind, mithilfe von `key-order` demselben Cache-Eintrag zuordnen:

```http
No-Vary-Search: key-order
```

Wenn dieser Header zu den zugehörigen Responses hinzugefügt wird, würden die folgenden URLs bei der Cache-Suche als gleichwertig behandelt:

```plain
https://search.example.com?a=1&b=2&c=3
https://search.example.com?b=2&a=1&c=3
```

Das Vorhandensein unterschiedlicher URL-Parameter führt jedoch dazu, dass diese URLs separat im Cache gespeichert werden. Zum Beispiel:

```plain
https://search.example.com?a=1&b=2&c=3
https://search.example.com?b=2&a=1&c=3&d=4
```

Die folgenden Beispiele veranschaulichen, wie gesteuert werden kann, welche Parameter im Kontext des Cache-Abgleichs ignoriert werden.

### Responses von URLs mit einem anderen Parameter dem gleichen Cache-Eintrag zuordnen

Betrachten Sie einen Fall, in dem eine Landingpage für ein Benutzerverzeichnis, `/users`, bereits im Cache gespeichert wurde. Ein `id`-Parameter könnte verwendet werden, um Informationen zu einem bestimmten Benutzer anzuzeigen, beispielsweise `/users?id=345`. Ob diese URL für Zwecke des Cache-Abgleichs als identisch betrachtet werden sollte, hängt vom Verhalten der Anwendung ab:

- Wenn dieser Parameter dazu führt, dass eine völlig neue Seite mit den Informationen für den angegebenen Benutzer geladen wird, sollte die Response dieser URL separat im Cache gespeichert werden.
- Wenn dieser Parameter dazu führt, dass der angegebene Benutzer auf derselben Seite hervorgehoben und möglicherweise ein ausklappbares Panel mit dessen Daten angezeigt wird, wäre es besser, wenn der Browser die gecachte Response für `/users` verwendet. Dies könnte die Ladeleistung der Benutzerseiten verbessern.

Wenn sich Ihre Anwendung wie im oben beschriebenen zweiten Beispiel verhält, können Sie bewirken, dass sowohl `/users` als auch `/users?id=345` für Caching-Zwecke als identisch behandelt werden, und zwar mit einem `No-Vary-Search`-Header wie diesem:

```http
No-Vary-Search: params=("id")
```

> [!NOTE]
> Wenn ein Parameter mit `params` vom Cache-Schlüssel ausgeschlossen wird, wird er bei seiner Aufnahme in die URL für Zwecke des Cache-Abgleichs ignoriert, unabhängig davon, an welcher Stelle er in der Parameterliste erscheint.

### Responses von URLs mit mehreren unterschiedlichen Parametern dem gleichen Cache-Eintrag zuordnen

Angenommen, Sie hätten außerdem URL-Parameter, die die Benutzerliste auf der Seite in auf- oder absteigender alphabetischer Reihenfolge sortieren und die Sprache angeben, in der die UI-Strings angezeigt werden sollen, beispielsweise `/users?id=345&order=asc&lang=fr`.

Sie können den Browser dazu veranlassen, all diese beim Cache-Abgleich zu ignorieren:

```http
No-Vary-Search: params=("id" "order" "lang")
```

> [!NOTE]
> Als [strukturiertes Feld](https://www.rfc-editor.org/info/rfc8941/) sollten die Parameter durch Leerzeichen getrennte Strings in Anführungszeichen sein — wie oben gezeigt — und nicht durch Kommas getrennt, wie Entwickler es möglicherweise eher gewohnt sind.

Wenn Sie möchten, dass der Browser beim Cache-Abgleich all diese _und_ alle anderen möglicherweise vorhandenen Parameter ignoriert, können Sie die boolesche Form von `params` verwenden:

```http
No-Vary-Search: params
```

### Parameter angeben, die _doch_ zu fehlenden Cache-Treffern führen

Angenommen, die Anwendung verhielte sich anders: `/users` verweist auf die Landingpage des Hauptbenutzerverzeichnisses und `/users?id=345` auf eine vollständig separate Detailseite für einen bestimmten Benutzer. In diesem Fall möchten Sie, dass der Browser für Zwecke des Cache-Abgleichs alle oben genannten Parameter ignoriert, _außer_ `id`; dessen Vorhandensein würde dazu führen, dass der Browser nicht mit dem Cache-Eintrag für `/users` übereinstimmt und `/users?id=345` vom Server anfordert.

Dies lässt sich folgendermaßen erreichen:

```http
No-Vary-Search: params, except=("id")
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [HTTP-Caching: Vary](/de/docs/Web/HTTP/Guides/Caching#vary) und der {{HTTPHeader("Vary")}}-Header
