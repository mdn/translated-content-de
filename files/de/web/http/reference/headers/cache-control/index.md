---
title: Cache-Control
slug: Web/HTTP/Reference/Headers/Cache-Control
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{HTTPSidebar}}

Der HTTP **`Cache-Control`** Header enthält _Direktiven_ (Anweisungen) in sowohl Anfragen als auch Antworten, die das [Caching](/de/docs/Web/HTTP/Guides/Caching) in Browsern und gemeinsam genutzten Caches (z.B. Proxies, CDNs) steuern.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Headertyp</th>
      <td>
        {{Glossary("Request_header", "Request-Header")}},
        {{Glossary("Response_header", "Response-Header")}}
      </td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_request_header", "Verbotener Request-Header")}}</th>
      <td>Nein</td>
    </tr>
    <tr>
      <th scope="row">
        {{Glossary("CORS-safelisted_response_header", "CORS-safelisted Response-Header")}}
      </th>
      <td>Ja</td>
    </tr>
  </tbody>
</table>

## Syntax

Cache-Direktiven folgen diesen Regeln:

- Caching-Direktiven sind nicht case-sensitiv. Es wird jedoch empfohlen, Kleinbuchstaben zu verwenden, da einige Implementierungen Großbuchstabendirektiven nicht erkennen.
- Mehrere Direktiven sind erlaubt und müssen durch Kommas getrennt werden (z.B. `Cache-control: max-age=180, public`).
- Einige Direktiven haben ein optionales Argument. Wenn ein Argument angegeben wird, wird es durch ein Gleichheitszeichen (`=`) vom Namen der Direktive getrennt. Typischerweise sind Argumente für die Direktiven ganze Zahlen und daher nicht in Anführungszeichen eingeschlossen (z.B. `Cache-control: max-age=12`).

### Cache-Direktiven

Die folgende Tabelle listet die standardmäßigen `Cache-Control` Direktiven auf:

| Anfrage          | Antwort                  |
| ---------------- | ------------------------ |
| `max-age`        | `max-age`                |
| `max-stale`      | -                        |
| `min-fresh`      | -                        |
| -                | `s-maxage`               |
| `no-cache`       | `no-cache`               |
| `no-store`       | `no-store`               |
| `no-transform`   | `no-transform`           |
| `only-if-cached` | -                        |
| -                | `must-revalidate`        |
| -                | `proxy-revalidate`       |
| -                | `must-understand`        |
| -                | `private`                |
| -                | `public`                 |
| -                | `immutable`              |
| -                | `stale-while-revalidate` |
| `stale-if-error` | `stale-if-error`         |

Hinweis: Prüfen Sie die [Kompatibilitätstabelle](#browser-kompatibilität) für deren Unterstützung; Benutzeragenten, die sie nicht erkennen, sollten sie ignorieren.

## Vokabular

Dieser Abschnitt definiert die in diesem Dokument verwendeten Begriffe, von denen einige aus der Spezifikation stammen.

- (HTTP)-Cache
  - : Implementierung, die Anfragen und Antworten zum Wiederverwenden bei nachfolgenden Anfragen speichert. Es kann entweder ein gemeinsam genutzter Cache oder ein privater Cache sein.
- Gemeinsamer Cache
  - : Cache, der zwischen dem ursprünglichen Server und den Clients existiert (z.B. Proxy, CDN). Er speichert eine einzelne Antwort und verwendet sie mit mehreren Benutzern wieder - daher sollten Entwickler vermeiden, personalisierte Inhalte zu speichern, die im gemeinsam genutzten Cache gecached werden sollen.
- Privater Cache
  - : Cache, der im Client existiert. Er wird auch _lokaler Cache_ oder _Browser-Cache_ genannt. Er kann personalisierte Inhalte für einen einzelnen Benutzer speichern und wiederverwenden.
- Antwort speichern
  - : Eine Antwort in Caches speichern, wenn die Antwort cachebar ist. Die gecachte Antwort wird jedoch nicht immer unverändert wiederverwendet. (Üblicherweise bedeutet "cache" das Speichern einer Antwort.)
- Antwort wiederverwenden
  - : Gespeicherte Antworten für nachfolgende Anfragen wiederverwenden.
- Antwort revalidieren
  - : Den ursprünglichen Server fragen, ob die gespeicherte Antwort noch [frisch](/de/docs/Web/HTTP/Guides/Caching#fresh_and_stale_based_on_age) ist. Üblicherweise erfolgt die Revalidierung durch eine bedingte Anfrage.
- Frische Antwort
  - : Gibt an, dass die Antwort [frisch](/de/docs/Web/HTTP/Guides/Caching#fresh_and_stale_based_on_age) ist. Dies bedeutet normalerweise, dass die Antwort für nachfolgende Anfragen wiederverwendet werden kann, abhängig von den Anfragedirektiven.
- Abgestandene Antwort
  - : Gibt an, dass die Antwort eine [abgestandene Antwort](/de/docs/Web/HTTP/Guides/Caching#fresh_and_stale_based_on_age) ist. Dies bedeutet normalerweise, dass die Antwort nicht unverändert wiederverwendet werden kann. Cache-Speicher sind nicht verpflichtet, abgestandene Antworten sofort zu entfernen, da die Revalidierung die Antwort von abgestanden zu wieder [frisch](/de/docs/Web/HTTP/Guides/Caching#fresh_and_stale_based_on_age) ändern könnte.
- Alter
  - : Die Zeit seit einer Antwort generiert wurde. Es ist ein Kriterium dafür, ob eine Antwort [frisch oder abgestanden](/de/docs/Web/HTTP/Guides/Caching#fresh_and_stale_based_on_age) ist.

## Direktiven

Dieser Abschnitt listet Direktiven auf, die das Caching beeinflussen - sowohl Antwortdirektiven als auch Anfragedirektiven.

### Antwortdirektiven

#### `max-age`

Die `max-age=N` Antwortdirektive gibt an, dass die Antwort [frisch](/de/docs/Web/HTTP/Guides/Caching#fresh_and_stale_based_on_age) bleibt bis _N_ Sekunden nach der Generierung der Antwort.

```http
Cache-Control: max-age=604800
```

Gibt an, dass Caches diese Antwort speichern und für nachfolgende Anfragen wiederverwenden können, solange sie [frisch](/de/docs/Web/HTTP/Guides/Caching#fresh_and_stale_based_on_age) ist.

Beachten Sie, dass `max-age` nicht die vergangene Zeit seit dem Empfang der Antwort ist; es ist die vergangene Zeit seit der Generierung der Antwort auf dem ursprünglichen Server.
Wenn also der andere Cache(s) - auf dem Netzwerkweg, den die Antwort genommen hat - die Antwort für 100 Sekunden speichert (angegeben durch das `Age` Antwort-Header-Feld), würde der Browser-Cache 100 Sekunden von seiner [Frischheitslebensdauer](/de/docs/Web/HTTP/Guides/Caching#fresh_and_stale_based_on_age) abziehen.

Wenn der `max-age` Wert negativ ist (zum Beispiel `-1`) oder kein Integer ist (zum Beispiel `3599.99`), dann ist das Caching-Verhalten nicht spezifiziert. Caches sollten den Wert so behandeln, als ob er `0` wäre (dies wird im Abschnitt [Berechnung der Frischheitsdauer](https://httpwg.org/specs/rfc9111.html#calculating.freshness.lifetime) der HTTP-Spezifikation erläutert).

```http
Cache-Control: max-age=604800
Age: 100
```

#### `s-maxage`

Die `s-maxage` Antwortdirektive gibt an, wie lange die Antwort in einem gemeinsamen Cache [frisch](/de/docs/Web/HTTP/Guides/Caching#fresh_and_stale_based_on_age) bleibt.
Die `s-maxage` Direktive wird von privaten Caches ignoriert und überschreibt den durch die `max-age` Direktive oder den `Expires`-Header angegebenen Wert für gemeinsame Caches, falls vorhanden.

```http
Cache-Control: s-maxage=604800
```

#### `no-cache`

Die `no-cache` Antwortdirektive gibt an, dass die Antwort in Caches gespeichert werden kann, die Antwort jedoch mit dem ursprünglichen Server validiert werden muss, bevor sie jedes Mal wiederverwendet wird, auch wenn der Cache keine Verbindung zum ursprünglichen Server hat.

```http
Cache-Control: no-cache
```

Wenn Sie möchten, dass Caches beim Wiederverwenden gespeicherter Inhalte immer nach inhaltlichen Aktualisierungen prüfen, ist `no-cache` die zu verwendende Direktive. Sie tut dies, indem sie von Caches verlangt, jede Anfrage mit dem ursprünglichen Server zu revalidieren.

Beachten Sie, dass `no-cache` nicht "nicht cachen" bedeutet. `no-cache` erlaubt es Caches, eine Antwort zu speichern, erfordert jedoch, dass sie vor der Wiederverwendung revalidiert wird. Wenn der Sinn von "nicht cachen", den Sie wünschen, tatsächlich "nicht speichern" ist, dann ist `no-store` die richtige Direktive.

#### `must-revalidate`

Die `must-revalidate` Antwortdirektive gibt an, dass die Antwort in Caches gespeichert werden kann und wiederverwendet werden kann, solange sie [frisch](/de/docs/Web/HTTP/Guides/Caching#fresh_and_stale_based_on_age) ist. Wenn die Antwort [abgestanden](/de/docs/Web/HTTP/Guides/Caching#fresh_and_stale_based_on_age) wird, muss sie vor der Wiederverwendung mit dem ursprünglichen Server validiert werden.

Typischerweise wird `must-revalidate` mit `max-age` verwendet.

```http
Cache-Control: max-age=604800, must-revalidate
```

HTTP ermöglicht es Caches, [abgestandene Antworten](/de/docs/Web/HTTP/Guides/Caching#fresh_and_stale_based_on_age) wiederzuverwenden, wenn sie keine Verbindung zum ursprünglichen Server haben. `must-revalidate` ist eine Möglichkeit, dies zu verhindern - entweder wird die gespeicherte Antwort mit dem ursprünglichen Server revalidiert oder es wird eine 504 (Gateway Timeout) Antwort generiert.

#### `proxy-revalidate`

Die `proxy-revalidate` Antwortdirektive ist gleichbedeutend mit `must-revalidate`, gilt jedoch speziell nur für gemeinsame Caches.

#### `no-store`

Die `no-store` Antwortdirektive gibt an, dass keine Caches irgendeiner Art (privat oder gemeinsam) diese Antwort speichern sollten.

```http
Cache-Control: no-store
```

#### `private`

Die `private` Antwortdirektive gibt an, dass die Antwort nur in einem privaten Cache (z.B. lokale Caches in Browsern) gespeichert werden kann.

```http
Cache-Control: private
```

Sie sollten die `private` Direktive für benutzerspezifische Inhalte hinzufügen, insbesondere für Antworten, die nach dem Login und bei Sitzungen, die über Cookies verwaltet werden, erhalten werden.

Wenn Sie vergessen, `private` zu einer Antwort mit personalisierten Inhalten hinzuzufügen, dann kann diese Antwort in einem gemeinsamen Cache gespeichert und letztendlich für mehrere Benutzer wiederverwendet werden, was dazu führen kann, dass persönliche Informationen durchsickern.

#### `public`

Die `public` Antwortdirektive gibt an, dass die Antwort in einem gemeinsamen Cache gespeichert werden kann. Antworten für Anfragen mit `Authorization` Header-Feldern dürfen nicht in einem gemeinsamen Cache gespeichert werden; jedoch führt die `public` Direktive dazu, dass solche Antworten in einem gemeinsamen Cache gespeichert werden.

```http
Cache-Control: public
```

Im Allgemeinen, wenn Seiten unter Basic Auth oder Digest Auth stehen, sendet der Browser Anfragen mit dem `Authorization` Header. Das bedeutet, dass die Antwort zugangskontrolliert für eingeschränkte Benutzer (die Konten haben) ist und grundsätzlich nicht im gemeinsamen Cache gespeichert wird, selbst wenn sie `max-age` hat.

Sie können die `public` Direktive verwenden, um diese Einschränkung aufzuheben.

```http
Cache-Control: public, max-age=604800
```

Beachten Sie, dass `s-maxage` oder `must-revalidate` diese Einschränkung ebenfalls aufheben.

Wenn eine Anfrage keinen `Authorization` Header hat oder Sie bereits `s-maxage` oder `must-revalidate` in der Antwort verwenden, dann müssen Sie `public` nicht verwenden.

#### `must-understand`

Die `must-understand` Antwortdirektive zeigt an, dass ein Cache die Antwort nur speichern sollte, wenn er die Anforderungen zum Caching auf Basis des Statuscodes versteht.

`must-understand` sollte mit `no-store` für ein Fallback-Verhalten gekoppelt werden.

```http
Cache-Control: must-understand, no-store
```

Wenn ein Cache `must-understand` nicht unterstützt, wird es ignoriert. Wenn `no-store` ebenfalls vorhanden ist, wird die Antwort nicht gespeichert.

Wenn ein Cache `must-understand` unterstützt, speichert er die Antwort mit einem Verständnis der Cache-Anforderungen basierend auf ihrem Statuscode.

#### `no-transform`

Einige Intermediäre transformieren Inhalte aus verschiedenen Gründen. Beispielsweise konvertieren einige Bilder, um die Übertragungsgröße zu reduzieren. In einigen Fällen ist dies für den Inhaltsprovider unerwünscht.

`no-transform` gibt an, dass kein Intermediär (unabhängig davon, ob er einen Cache implementiert) die Antwortinhalte transformieren sollte.

#### `immutable`

Die `immutable` Antwortdirektive gibt an, dass die Antwort nicht aktualisiert wird, solange sie [frisch](/de/docs/Web/HTTP/Guides/Caching#fresh_and_stale_based_on_age) ist.

```http
Cache-Control: public, max-age=604800, immutable
```

Eine moderne Best Practice für statische Ressourcen ist es, Version/Hashes in ihre URLs zu inkludieren, um die Ressourcen nie zu modifizieren - sondern, wenn nötig, die Ressourcen mit neueren Versionen zu _aktualisieren_, die neue Versionsnummern/Hashes enthalten, sodass ihre URLs unterschiedlich sind. Das wird als **Cache-Busting**-Muster bezeichnet.

```html
<script src="https://example.com/react.0.0.0.js"></script>
```

Wenn ein Benutzer den Browser neu lädt, sendet der Browser bedingte Anfragen zur Validierung an den ursprünglichen Server. Es ist jedoch nicht notwendig, diese Arten von statischen Ressourcen zu revalidieren, selbst wenn ein Benutzer den Browser neu lädt, weil sie nie verändert werden.
`immutable` teilt einem Cache mit, dass die Antwort unveränderlich ist, solange sie [frisch](/de/docs/Web/HTTP/Guides/Caching#fresh_and_stale_based_on_age) ist, und vermeidet diese Art von unnötigen bedingten Anfragen an den Server.

Wenn Sie ein Cache-Busting-Muster für Ressourcen verwenden und sie auf ein langes `max-age` anwenden, können Sie auch `immutable` hinzufügen, um die Revalidierung zu vermeiden.

#### `stale-while-revalidate`

Die `stale-while-revalidate` Antwortdirektive gibt an, dass der Cache eine abgestandene Antwort wiederverwenden könnte, während er sie zu einem Cache revalidiert.

```http
Cache-Control: max-age=604800, stale-while-revalidate=86400
```

Im obigen Beispiel ist die Antwort für 7 Tage (604800s) [frisch](/de/docs/Web/HTTP/Guides/Caching#fresh_and_stale_based_on_age).
Nach 7 Tagen wird sie [abgestanden](/de/docs/Web/HTTP/Guides/Caching#fresh_and_stale_based_on_age), aber der Cache darf sie für alle Anfragen wiederverwenden, die am folgenden Tag (86400s) gestellt werden, vorausgesetzt, dass sie die Antwort im Hintergrund revalidieren.

Die Revalidierung wird den Cache wieder [frisch](/de/docs/Web/HTTP/Guides/Caching#fresh_and_stale_based_on_age) machen, sodass es den Clients erscheint, dass sie während dieses Zeitraums immer [frisch](/de/docs/Web/HTTP/Guides/Caching#fresh_and_stale_based_on_age) war - effektiv wird die Latenzstrafe der Revalidierung vor ihnen verborgen.

Wenn während dieses Zeitraums keine Anfrage stattfand, wurde der Cache [abgestanden](/de/docs/Web/HTTP/Guides/Caching#fresh_and_stale_based_on_age) und die nächste Anfrage wird normal revalidiert werden.

#### `stale-if-error`

Die `stale-if-error` Antwortdirektive gibt an, dass der Cache eine [abgestandene Antwort](/de/docs/Web/HTTP/Guides/Caching#fresh_and_stale_based_on_age) wiederverwenden kann, wenn ein Upstream-Server einen Fehler generiert oder wenn der Fehler lokal generiert wird. Hier wird ein Fehler als jede Antwort mit einem Statuscode von 500, 502, 503 oder 504 betrachtet.

```http
Cache-Control: max-age=604800, stale-if-error=86400
```

Im obigen Beispiel ist die Antwort für 7 Tage (604800s) [frisch](/de/docs/Web/HTTP/Guides/Caching#fresh_and_stale_based_on_age). Danach wird sie [abgestanden](/de/docs/Web/HTTP/Guides/Caching#fresh_and_stale_based_on_age), kann aber für einen zusätzlichen Tag (86400s) verwendet werden, wenn ein Fehler auftritt.

Nachdem der `stale-if-error` Zeitraum verstrichen ist, erhält der Client jeden generierten Fehler.

### Anfragedirektiven

#### `no-cache`

Die `no-cache` Anfragedirektive fordert Caches auf, die Antwort vor der Wiederverwendung mit dem ursprünglichen Server zu validieren.

```http
Cache-Control: no-cache
```

`no-cache` erlaubt es Clients, die aktuellste Antwort anzufordern, selbst wenn der Cache eine [frische](/de/docs/Web/HTTP/Guides/Caching#fresh_and_stale_based_on_age) Antwort hat.

Browser fügen Anfragen normalerweise `no-cache` hinzu, wenn Benutzer eine Seite **zwangsweise neu laden**.

#### `no-store`

Die `no-store` Anfragedirektive erlaubt einem Client zu verlangen, dass Caches die Anfrage und die entsprechende Antwort nicht speichern - selbst wenn die Antwort des ursprünglichen Servers gespeichert werden könnte.

```http
Cache-Control: no-store
```

#### `max-age`

Die `max-age=N` Anfragedirektive gibt an, dass der Client eine gespeicherte Antwort erlaubt, die innerhalb von _N_ Sekunden auf dem ursprünglichen Server generiert wird - wobei _N_ jede nicht-negative ganze Zahl sein kann (einschließlich `0`).

```http
Cache-Control: max-age=10800
```

Im obigen Fall, wenn die Antwort mit `Cache-Control: max-age=10800` vor mehr als 3 Stunden generiert wurde (berechnet aus `max-age` und dem `Age` Header), könnte der Cache diese Antwort nicht wiederverwenden.

Viele Browser verwenden diese Direktive zum **Neuladen**, wie unten erklärt.

```http
Cache-Control: max-age=0
```

`max-age=0` ist ein Workaround für `no-cache`, da viele alte (HTTP/1.0) Cache-Implementierungen `no-cache` nicht unterstützen. Kürzlich verwenden Browser immer noch `max-age=0` in "Neuladen" - aus Gründen der Rückwärtskompatibilität - und verwenden alternativ `no-cache`, um ein "Zwangsneuladen" zu verursachen.

Wenn der `max-age` Wert negativ ist (zum Beispiel `-1`) oder kein Integer ist (zum Beispiel `3599.99`), dann ist das Caching-Verhalten nicht spezifiziert. Caches sollten den Wert so behandeln, als ob er `0` wäre.

#### `max-stale`

Die `max-stale=N` Anfragedirektive gibt an, dass der Client eine gespeicherte Antwort erlaubt, die innerhalb von _N_ Sekunden [abgestanden](/de/docs/Web/HTTP/Guides/Caching#fresh_and_stale_based_on_age) ist.
Wenn kein _N_-Wert angegeben ist, akzeptiert der Client eine abgestandene Antwort beliebigen Alters.

```http
Cache-Control: max-stale=3600
```

Ein Beispiel: Eine Anfrage mit dem obigen Header gibt an, dass der Browser eine abgestandene Antwort aus dem Cache akzeptiert, die innerhalb der letzten Stunde abgelaufen ist.

Clients können diesen Header verwenden, wenn der ursprüngliche Server ausgefallen ist oder zu langsam ist, und es können gecachte Antworten von den Caches akzeptiert werden, selbst wenn sie ein wenig veraltet sind.

Beachten Sie, dass die Hauptbrowser keine Anfragen mit `max-stale` unterstützen.

#### `min-fresh`

Die `min-fresh=N` Anfragedirektive gibt an, dass der Client eine gespeicherte Antwort erlaubt, die mindestens _N_ Sekunden [frisch](/de/docs/Web/HTTP/Guides/Caching#fresh_and_stale_based_on_age) ist.

```http
Cache-Control: min-fresh=600
```

Im obigen Fall, wenn die Antwort mit `Cache-Control: max-age=3600` vor 51 Minuten in Caches gespeichert wurde, könnte der Cache diese Antwort nicht wiederverwenden.

Clients können diesen Header verwenden, wenn der Benutzer erfordert, dass die Antwort nicht nur [frisch](/de/docs/Web/HTTP/Guides/Caching#fresh_and_stale_based_on_age) ist, sondern auch erfordert, dass sie für einen Zeitraum nicht aktualisiert wird.

Beachten Sie, dass die Hauptbrowser keine Anfragen mit `min-fresh` unterstützen.

#### `no-transform`

Gleiche Bedeutung, die `no-transform` für eine Antwort hat, aber für eine Anfrage statt.

#### `only-if-cached`

Der Client gibt an, dass eine bereits im Cache gespeicherte Antwort zurückgegeben werden soll. Wenn ein Cache eine gespeicherte Antwort hat, auch eine abgestandene, wird sie zurückgegeben. Wenn keine gecachte Antwort verfügbar ist, wird eine [504 Gateway Timeout](/de/docs/Web/HTTP/Reference/Status/504) Antwort zurückgegeben.

## Anwendungsfälle

### Verhindern des Speicherns

Wenn Sie nicht möchten, dass eine Antwort in Caches gespeichert wird, verwenden Sie die `no-store` Direktive.

```http
Cache-Control: no-store
```

Beachten Sie, dass `no-cache` bedeutet, "es kann gespeichert werden, aber nicht wiederverwenden vor der Validierung" - daher ist es nicht dafür gedacht, zu verhindern, dass eine Antwort gespeichert wird.

```http example-bad
Cache-Control: no-cache
```

Theoretisch, wenn Direktiven im Widerspruch stehen, sollte die restriktivste Direktive beachtet werden. Das untenstehende Beispiel ist im Grunde bedeutungslos, da `private`, `no-cache`, `max-age=0` und `must-revalidate` mit `no-store` in Konflikt stehen.

```http example-bad
# conflicted
Cache-Control: private, no-cache, no-store, max-age=0, must-revalidate

# equivalent to
Cache-Control: no-store
```

### Caching von statischen Assets mit "Cache Busting"

Wenn Sie statische Assets mit Versionierungs-/Hash-Mechanismen erstellen, ist das Hinzufügen einer Version/eines Hashs zum Dateinamen oder zur Abfragezeichenfolge eine gute Möglichkeit, das Caching zu verwalten.

Zum Beispiel:

```html
<!-- index.html -->
<script src="/assets/react.min.js"></script>
<img src="/assets/hero.png" width="900" height="400" />
```

Die Version der React-Bibliothek wird sich ändern, wenn Sie die Bibliothek aktualisieren, und `hero.png` wird sich ebenfalls ändern, wenn Sie das Bild bearbeiten. Daher ist es schwierig, sie in einem Cache mit `max-age` zu speichern.

In einem solchen Fall könnten Sie die Caching-Anforderungen erfüllen, indem Sie eine bestimmte, nummerierte Version der Bibliothek verwenden und den Hash des Bildes in seiner URL einschließen.

```html
<!-- index.html -->
<script src="/assets/react.0.0.0min.js"></script>
<img src="/assets/hero.png?hash=deadbeef" width="900" height="400" />
```

Sie können einen langen `max-age` Wert und `immutable` hinzufügen, weil sich der Inhalt nie ändern wird.

```http
# /assets/*
Cache-Control: max-age=31536000, immutable
```

Wenn Sie die Bibliothek aktualisieren oder das Bild bearbeiten, sollte neuer Inhalt eine neue URL haben und Caches werden nicht wiederverwendet. Das wird als "Cache Busting"-Muster bezeichnet.

Verwenden Sie ein `no-cache`, um sicherzustellen, dass die HTML-Antwort selbst nicht gecached wird. `no-cache` könnte eine Revalidierung verursachen, und der Client erhält korrekt eine neue Version der HTML-Antwort und statischer Assets.

```http
# /index.html
Cache-Control: no-cache
```

Hinweis: Wenn `index.html` unter Basis-Authentifizierung oder Digest-Authentifizierung kontrolliert wird, werden Dateien unter `/assets` nicht im gemeinsamen Cache gespeichert. Wenn `/assets/` Dateien für das Speichern in einem gemeinsamen Cache geeignet sind, benötigen Sie auch eine der `public`, `s-maxage` oder `must-revalidate`.

### Immer aktuelle Inhalte

Für Inhalte, die dynamisch generiert werden oder statisch sind, aber oft aktualisiert werden, möchten Sie, dass ein Benutzer immer die aktuellste Version erhält.

Wenn Sie keinen `Cache-Control` Header hinzufügen, weil die Antwort nicht gecached werden soll, könnte dies ein unerwartetes Ergebnis verursachen. Cache-Speicher dürfen es heuristisch cachen - daher sollten Sie, wenn Sie Anforderungen an das Caching haben, diese immer explizit im `Cache-Control` Header angeben.

Durch Hinzufügen von `no-cache` zur Antwort wird eine Revalidierung zum Server veranlasst, sodass Sie jedes Mal eine [frische](/de/docs/Web/HTTP/Guides/Caching#fresh_and_stale_based_on_age) Antwort bereitstellen können - oder wenn der Client bereits eine neue hat, antworten Sie einfach `304 Not Modified`.

```http
Cache-Control: no-cache
```

Die meisten HTTP/1.0 Caches unterstützen keine `no-cache` Direktiven, daher wurde historisch `max-age=0` als Workaround verwendet. Aber nur `max-age=0` könnte eine [abgestandene Antwort](/de/docs/Web/HTTP/Guides/Caching#fresh_and_stale_based_on_age) wiederverwendet werden, wenn Caches von dem ursprünglichen Server getrennt wurden. `must-revalidate` adressiert dies. Daher ist das untenstehende Beispiel gleichbedeutend mit `no-cache`.

```http
Cache-Control: max-age=0, must-revalidate
```

Aber jetzt können Sie einfach `no-cache` verwenden.

### Löschen eines bereits gespeicherten Caches

Es gibt keine Cache-Direktiven zum Löschen von bereits gespeicherten Antworten von Caches auf \_Zwischen_servern.

Stellen Sie sich vor, dass Clients/Caches eine [frische](/de/docs/Web/HTTP/Guides/Caching#fresh_and_stale_based_on_age) Antwort für einen Pfad speichern, ohne dass eine Anfrage an den Server gesendet wird. Es gibt nichts, was ein Server für diesen Pfad tun könnte.

[`Clear-Site-Data: cache`](/de/docs/Web/HTTP/Reference/Headers/Clear-Site-Data#cache) kann verwendet werden, um jede gespeicherte Antwort für eine Website im Browser-Cache zu löschen, daher verwenden Sie dies mit Vorsicht.
Beachten Sie, dass dies keine Auswirkungen auf geteilte oder Zwischen-Caches hat.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [HTTP-Caching](/de/docs/Web/HTTP/Guides/Caching)
- [Caching-Tutorial für Web-Autoren und Webmaster](https://www.mnot.net/cache_docs/)
- [Caching Best Practices & Max-Age-Gotchas](https://jakearchibald.com/2016/caching-best-practices/)
- [Cache-Control für Zivilisten](https://csswizardry.com/2019/03/cache-control-for-civilians/)
- [RFC 9111 – HTTP Caching](https://httpwg.org/specs/rfc9111.html)
- [RFC 5861 – HTTP Cache-Control Erweiterungen für abgestandene Inhalte](https://httpwg.org/specs/rfc5861.html)
- [RFC 8246 – HTTP Unveränderliche Antworten](https://httpwg.org/specs/rfc8246.html)
