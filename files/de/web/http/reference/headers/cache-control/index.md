---
title: Cache-Control header
short-title: Cache-Control
slug: Web/HTTP/Reference/Headers/Cache-Control
l10n:
  sourceCommit: c53bfa01f3bf436d486f4032c16f592855a2af2c
---

Der HTTP-Header **`Cache-Control`** enthält _Direktiven_ (Anweisungen) in sowohl Anfragen als auch Antworten, die das [Caching](/de/docs/Web/HTTP/Guides/Caching) in Browsern und gemeinsamen Caches (z.B. Proxys, CDNs) steuern.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
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
        {{Glossary("CORS-safelisted_response_header", "CORS-sicherer Response-Header")}}
      </th>
      <td>Ja</td>
    </tr>
  </tbody>
</table>

## Syntax

```http
Cache-Control: <directive>, <directive>, ...
```

Cache-Direktiven folgen diesen Regeln:

- Caching-Direktiven sind nicht zwischen Groß- und Kleinschreibung unterscheidend. Es wird jedoch empfohlen, Kleinbuchstaben zu verwenden, da einige Implementierungen Großbuchstaben-Direktiven nicht erkennen.
- Mehrere Direktiven sind erlaubt und müssen durch Kommata getrennt werden (z.B. `Cache-control: max-age=180, public`).
- Einige Direktiven haben ein optionales Argument. Wenn ein Argument angegeben wird, wird es durch ein Gleichheitszeichen (`=`) vom Direktiven-Namen getrennt. Typischerweise sind die Argumente für die Direktiven Ganzzahlen und sind daher nicht in Anführungszeichen eingeschlossen (z.B. `Cache-control: max-age=12`).

### Cache-Direktiven

Die folgende Tabelle führt die Standard-`Cache-Control`-Direktiven auf:

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

Hinweis: Überprüfen Sie die [Kompatibilitätstabelle](#browser-kompatibilität) auf deren Unterstützung; Benutzeragenten, die sie nicht erkennen, sollten sie ignorieren.

## Vokabular

Dieser Abschnitt definiert die in diesem Dokument verwendeten Begriffe, von denen einige aus der Spezifikation stammen.

- (HTTP) Cache
  - : Implementierung, die Anfragen und Antworten für die Wiederverwendung bei nachfolgenden Anfragen speichert. Es kann entweder ein geteilter Cache oder ein privater Cache sein.
- Geteilter Cache
  - : Ein Cache, der zwischen dem Ursprungsserver und den Clients existiert (z.B. Proxy, CDN). Er speichert eine einzelne Antwort und verwendet sie erneut bei mehreren Nutzern — daher sollten Entwickler vermeiden, personalisierte Inhalte im geteilten Cache zu speichern.
- Privater Cache
  - : Ein Cache, der im Client existiert. Er wird auch als _lokaler Cache_ oder _Browser-Cache_ bezeichnet. Er kann personalisierte Inhalte für einen einzelnen Nutzer speichern und wiederverwenden.
- Antwort speichern
  - : Speichern einer Antwort in Caches, wenn die Antwort zwischenspeicherbar ist. Allerdings wird die zwischengespeicherte Antwort nicht immer unverändert wiederverwendet. (Normalerweise bedeutet "cachen" das Speichern einer Antwort.)
- Antwort wiederverwenden
  - : Wiederverwenden zwischengespeicherter Antworten für nachfolgende Anfragen.
- Antwort erneut validieren
  - : Den Ursprungsserver fragen, ob die gespeicherte Antwort noch [frisch](/de/docs/Web/HTTP/Guides/Caching#fresh_and_stale_based_on_age) ist. Üblicherweise erfolgt die erneute Validierung durch eine bedingte Anfrage.
- Frische Antwort
  - : Zeigt an, dass die Antwort [frisch](/de/docs/Web/HTTP/Guides/Caching#fresh_and_stale_based_on_age) ist. Das bedeutet üblicherweise, dass die Antwort für nachfolgende Anfragen erneut verwendet werden kann, abhängig von den Anfragedirektiven.
- Abgestandene Antwort
  - : Zeigt an, dass die Antwort eine [abgestandene Antwort](/de/docs/Web/HTTP/Guides/Caching#fresh_and_stale_based_on_age) ist. Das bedeutet üblicherweise, dass die Antwort nicht unverändert wiederverwendet werden kann. Cache-Speicher müssen abgestandene Antworten nicht sofort entfernen, da die erneute Validierung die Antwort von abgelaufen zu [frisch](/de/docs/Web/HTTP/Guides/Caching#fresh_and_stale_based_on_age) ändern könnte.
- Alter
  - : Die Zeit seit der Erzeugung einer Antwort. Sie ist ein Kriterium dafür, ob eine Antwort [frisch oder abgestanden](/de/docs/Web/HTTP/Guides/Caching#fresh_and_stale_based_on_age) ist.

## Direktiven

Dieser Abschnitt listet die Direktiven auf, die das Caching beeinflussen — sowohl Antwortdirektiven als auch Anfragedirektiven.

### Antwortdirektiven

#### `max-age`

Die `max-age=N`-Antwortdirektive gibt an, dass die Antwort _N_ Sekunden, nachdem sie generiert wurde, weiterhin [frisch](/de/docs/Web/HTTP/Guides/Caching#fresh_and_stale_based_on_age) bleibt.

```http
Cache-Control: max-age=604800
```

Sie zeigt an, dass Caches diese Antwort speichern und für nachfolgende Anfragen wiederverwenden können, solange sie [frisch](/de/docs/Web/HTTP/Guides/Caching#fresh_and_stale_based_on_age) ist.

Beachten Sie, dass `max-age` nicht die verstrichene Zeit seit dem Empfang der Antwort ist; es ist die verstrichene Zeit seit der Erzeugung der Antwort auf dem Ursprungsserver. Wenn der andere Cache — auf dem Netzwerkpfad der Antwort — die Antwort 100 Sekunden lang speichert (angezeigt durch das `Age`-Antwortfeld), zieht der Browser diese 100 Sekunden von seiner [Frische-Lebenszeit](/de/docs/Web/HTTP/Guides/Caching#fresh_and_stale_based_on_age) ab.

Wenn der Wert von `max-age` negativ ist (zum Beispiel `-1`) oder keine Ganzzahl ist (zum Beispiel `3599.99`), dann ist das Caching-Verhalten nicht spezifiziert. Caches werden ermutigt, den Wert so zu behandeln, als ob er `0` wäre (dies wird im Abschnitt [Berechnung der Frische-Lebenszeit](https://httpwg.org/specs/rfc9111.html#calculating.freshness.lifetime) der HTTP-Spezifikation angemerkt).

```http
Cache-Control: max-age=604800
Age: 100
```

#### `s-maxage`

Die `s-maxage`-Antwortdirektive gibt an, wie lange die Antwort in einem geteilten Cache [frisch](/de/docs/Web/HTTP/Guides/Caching#fresh_and_stale_based_on_age) bleibt. Die `s-maxage`-Direktive wird von privaten Caches ignoriert und überschreibt den durch die `max-age`-Direktive oder den `Expires`-Header angegebenen Wert für geteilte Caches, falls diese vorhanden sind.

```http
Cache-Control: s-maxage=604800
```

#### `no-cache`

Die `no-cache`-Antwortdirektive gibt an, dass die Antwort in Caches gespeichert werden kann, aber die Antwort muss vor jeder Wiederverwendung mit dem Ursprungsserver validiert werden, auch wenn der Cache vom Ursprungsserver getrennt ist.

```http
Cache-Control: no-cache
```

Wenn Sie möchten, dass Caches immer nach Inhaltsaktualisierungen suchen, während gespeicherte Inhalte wiederverwendet werden, ist `no-cache` die zu verwendende Direktive. Sie erzwingt dies, indem sie Caches anweist, jede Anfrage mit dem Ursprungsserver zu validieren.

Beachten Sie, dass `no-cache` nicht "nicht cachen" bedeutet. `no-cache` erlaubt es Caches, eine Antwort zu speichern, erfordert jedoch, dass diese vor der Wiederverwendung erneut validiert wird. Wenn Sie mit "nicht cachen" tatsächlich "nicht speichern" meinen, dann ist `no-store` die Direktive, die verwendet werden sollte.

#### `must-revalidate`

Die `must-revalidate`-Antwortdirektive gibt an, dass die Antwort in Caches gespeichert werden kann und wiederverwendet werden kann, solange sie [frisch](/de/docs/Web/HTTP/Guides/Caching#fresh_and_stale_based_on_age) ist. Wenn die Antwort [abgestanden](/de/docs/Web/HTTP/Guides/Caching#fresh_and_stale_based_on_age) wird, muss sie vor der Wiederverwendung mit dem Ursprungsserver validiert werden.

Typischerweise wird `must-revalidate` zusammen mit `max-age` verwendet.

```http
Cache-Control: max-age=604800, must-revalidate
```

HTTP erlaubt es Caches, [abgestandene Antworten](/de/docs/Web/HTTP/Guides/Caching#fresh_and_stale_based_on_age) wiederzuverwenden, wenn sie vom Ursprungsserver getrennt sind. `must-revalidate` ist eine Möglichkeit, dies zu verhindern - entweder die gespeicherte Antwort wird mit dem Ursprungsserver validiert oder es wird eine 504 (Gateway Timeout) Antwort generiert.

#### `proxy-revalidate`

Die `proxy-revalidate`-Antwortdirektive ist das Äquivalent zu `must-revalidate`, jedoch speziell nur für geteilte Caches.

#### `no-store`

Die `no-store`-Antwortdirektive gibt an, dass keine Caches irgendeiner Art (privat oder geteilt) diese Antwort speichern sollen.

```http
Cache-Control: no-store
```

#### `private`

Die `private`-Antwortdirektive gibt an, dass die Antwort nur in einem privaten Cache (z.B. lokale Caches in Browsern) gespeichert werden darf.

```http
Cache-Control: private
```

Sie sollten die `private`-Direktive für benutzerpersonalisierte Inhalte hinzufügen, insbesondere für Antworten, die nach einem Login empfangen werden und für Sitzungen, die über Cookies verwaltet werden.

Wenn Sie vergessen, `private` zu einer Antwort mit personalisierten Inhalten hinzuzufügen, kann diese Antwort in einem geteilten Cache gespeichert und für mehrere Benutzer wiederverwendet werden, was zu einem Leck von persönlichen Informationen führen kann.

#### `public`

Die `public`-Antwortdirektive gibt an, dass die Antwort in einem geteilten Cache gespeichert werden kann. Antworten auf Anfragen mit `Authorization`-Header-Feldern dürfen in einem geteilten Cache nicht gespeichert werden; jedoch führt die `public`-Direktive dazu, dass solche Antworten in einem geteilten Cache gespeichert werden.

```http
Cache-Control: public
```

Im Allgemeinen senden Browser Anfragen mit dem `Authorization`-Header, wenn Seiten unter Basis-Authentifizierung oder Digest-Authentifizierung stehen. Das bedeutet, dass die Antwort für eingeschränkte Benutzer (die Konten haben) zugangskontrolliert ist und grundsätzlich nicht geteilten Cache-fähig ist, auch wenn sie `max-age` hat.

Sie können die `public`-Direktive verwenden, um diese Einschränkung aufzuheben.

```http
Cache-Control: public, max-age=604800
```

Beachten Sie, dass `s-maxage` oder `must-revalidate` diese Einschränkung auch aufheben.

Wenn eine Anfrage keinen `Authorization`-Header hat oder Sie bereits `s-maxage` oder `must-revalidate` in der Antwort verwenden, brauchen Sie `public` nicht zu verwenden.

#### `must-understand`

Die `must-understand`-Antwortdirektive gibt an, dass ein Cache die Antwort nur speichern sollte, wenn er die Anforderungen für das Caching basierend auf Statuscode versteht.

`must-understand` sollte mit `no-store` für ein Fallback-Verhalten kombiniert werden.

```http
Cache-Control: must-understand, no-store
```

Wenn ein Cache `must-understand` nicht unterstützt, wird es ignoriert. Wenn `no-store` ebenfalls vorhanden ist, wird die Antwort nicht gespeichert.

Wenn ein Cache `must-understand` unterstützt, speichert er die Antwort mit einem Verständnis der Cache-Anforderungen, basierend auf ihrem Statuscode.

#### `no-transform`

Einige Intermediäre wandeln Inhalte aus verschiedenen Gründen um. Zum Beispiel konvertieren einige Bilder, um die Übertragungsgröße zu verringern. In einigen Fällen ist dies für den Inhaltsanbieter unerwünscht.

`no-transform` zeigt an, dass kein Intermediär (unabhängig davon, ob er einen Cache implementiert oder nicht) die Antwortinhalte transformieren sollte.

#### `immutable`

Die `immutable`-Antwortdirektive gibt an, dass die Antwort nicht aktualisiert wird, solange sie [frisch](/de/docs/Web/HTTP/Guides/Caching#fresh_and_stale_based_on_age) ist.

```http
Cache-Control: public, max-age=604800, immutable
```

Eine moderne Best Practice für statische Ressourcen ist es, Versionen/Hashes in ihre URLs aufzunehmen, während die Ressourcen niemals modifiziert werden — sondern stattdessen bei Bedarf die Ressourcen mit neueren Versionen zu aktualisieren, die neue Versionsnummern/Hashes haben, sodass ihre URLs unterschiedlich sind. Das wird als **Cache-Busting**-Muster bezeichnet.

```html
<script src="https://example.com/react.0.0.0.js"></script>
```

Wenn ein Benutzer den Browser neu lädt, sendet der Browser bedingte Anfragen für die Validierung an den Ursprungsserver. Aber es ist nicht notwendig, diese Art von statischen Ressourcen erneut zu validieren, auch wenn ein Benutzer den Browser neu lädt, da sie nie modifiziert werden.
`immutable` teilt einem Cache mit, dass die Antwort unveränderlich ist, solange sie [frisch](/de/docs/Web/HTTP/Guides/Caching#fresh_and_stale_based_on_age) ist, und vermeidet diese Art von unnötigen bedingten Anfragen an den Server.

Wenn Sie ein Cache-Busting-Muster für Ressourcen verwenden und eine lange `max-age` anwenden, können Sie auch `immutable` hinzufügen, um die erneute Validierung zu vermeiden.

#### `stale-while-revalidate`

Die `stale-while-revalidate`-Antwortdirektive gibt an, dass der Cache eine abgestandene Antwort erneut verwenden kann, während sie erneut validiert wird, um in einem Cache zu landen.

```http
Cache-Control: max-age=604800, stale-while-revalidate=86400
```

Im obigen Beispiel ist die Antwort für 7 Tage (604800s) [frisch](/de/docs/Web/HTTP/Guides/Caching#fresh_and_stale_based_on_age).
Nach 7 Tagen wird sie [abgestanden](/de/docs/Web/HTTP/Guides/Caching#fresh_and_stale_based_on_age), aber der Cache darf sie für alle Anfragen, die am folgenden Tag (86400s) gestellt werden, wiederverwenden, vorausgesetzt, sie validieren die Antwort im Hintergrund.

Die erneute Validierung macht den Cache wieder [frisch](/de/docs/Web/HTTP/Guides/Caching#fresh_and_stale_based_on_age), sodass es für Clients so aussieht, als wäre er während dieses Zeitraums immer [frisch](/de/docs/Web/HTTP/Guides/Caching#fresh_and_stale_based_on_age) gewesen — was effektiv die Latenzstrafe der erneuten Validierung für sie verbirgt.

Wenn während dieses Zeitraums keine Anfrage stattgefunden hat, wird der Cache [abgestanden](/de/docs/Web/HTTP/Guides/Caching#fresh_and_stale_based_on_age) und die nächste Anfrage wird normal validiert.

#### `stale-if-error`

Die `stale-if-error`-Antwortdirektive gibt an, dass der Cache eine [abgestandene Antwort](/de/docs/Web/HTTP/Guides/Caching#fresh_and_stale_based_on_age) wiederverwenden kann, wenn ein vorgelagerter Server einen Fehler generiert oder wenn der Fehler lokal generiert wird. Hierbei gilt ein Fehler als jede Antwort mit einem Statuscode von 500, 502, 503 oder 504.

```http
Cache-Control: max-age=604800, stale-if-error=86400
```

Im obigen Beispiel ist die Antwort für 7 Tage (604800s) [frisch](/de/docs/Web/HTTP/Guides/Caching#fresh_and_stale_based_on_age). Danach wird sie [abgestanden](/de/docs/Web/HTTP/Guides/Caching#fresh_and_stale_based_on_age), kann jedoch für einen zusätzlichen Tag (86400s) verwendet werden, wenn ein Fehler auftritt.

Nach dem Ablauf des `stale-if-error`-Zeitraums erhält der Client jeden generierten Fehler.

### Anfragedirektiven

#### `no-cache`

Die `no-cache`-Anfragedirektive fordert Caches auf, die Antwort mit dem Ursprungsserver vor der Wiederverwendung zu validieren.

```http
Cache-Control: no-cache
```

`no-cache` erlaubt es Clients, die aktuellste Antwort anzufordern, auch wenn der Cache eine [frische](/de/docs/Web/HTTP/Guides/Caching#fresh_and_stale_based_on_age) Antwort hat.

Browser fügen Anfragen normalerweise `no-cache` hinzu, wenn Benutzer eine Seite **erzwingend neu laden**.

#### `no-store`

Die `no-store`-Anfragedirektive erlaubt es einem Client, Caches zu bitten, auf die Speicherung der Anfrage und der entsprechenden Antwort zu verzichten — selbst wenn die Antwort des Ursprungsservers gespeichert werden könnte.

```http
Cache-Control: no-store
```

#### `max-age`

Die `max-age=N`-Anfragedirektive gibt an, dass der Client eine gespeicherte Antwort akzeptiert, die innerhalb von _N_ Sekunden auf dem Ursprungsserver generiert wurde — wobei _N_ eine nicht-negative Ganzzahl (einschließlich `0`) sein kann.

```http
Cache-Control: max-age=10800
```

Im obigen Fall, wenn die Antwort mit `Cache-Control: max-age=10800` vor mehr als 3 Stunden generiert wurde (berechnet aus `max-age` und dem `Age`-Header), kann der Cache diese Antwort nicht wiederverwenden.

Viele Browser verwenden diese Direktive für das **Neuladen**, wie unten erläutert.

```http
Cache-Control: max-age=0
```

`max-age=0` ist ein Workaround für `no-cache`, da viele alte (HTTP/1.0) Cache-Implementierungen `no-cache` nicht unterstützen. Kürzlich verwenden Browser immer noch `max-age=0` beim "Neuladen" — aus Gründen der Abwärtskompatibilität — und verwenden alternativ `no-cache`, um ein "erzwingendes Neuladen" zu verursachen.

Wenn der Wert von `max-age` negativ ist (zum Beispiel, `-1`) oder keine Ganzzahl ist (zum Beispiel, `3599.99`), dann ist das Caching-Verhalten nicht spezifiziert. Caches werden ermutigt, den Wert so zu behandeln, als ob er `0` wäre.

#### `max-stale`

Die `max-stale=N`-Anfragedirektive gibt an, dass der Client eine zwischengespeicherte Antwort akzeptiert, die innerhalb von _N_ Sekunden [abgestanden](/de/docs/Web/HTTP/Guides/Caching#fresh_and_stale_based_on_age) ist.
Wenn kein _N_-Wert angegeben ist, akzeptiert der Client eine abgestandene Antwort jeden Alters.

```http
Cache-Control: max-stale=3600
```

Zum Beispiel zeigt eine Anfrage mit dem obigen Header an, dass der Browser eine abgestandene Antwort aus dem Cache akzeptiert, die innerhalb der letzten Stunde abgelaufen ist.

Clients können diesen Header verwenden, wenn der Ursprungsserver nicht verfügbar oder zu langsam ist und zwischengespeicherte Antworten von Caches akzeptieren kann, auch wenn diese etwas älter sind.

Beachten Sie, dass die gängigen Browser Anfragen mit `max-stale` nicht unterstützen.

#### `min-fresh`

Die `min-fresh=N`-Anfragedirektive gibt an, dass der Client eine zwischengespeicherte Antwort akzeptiert, die für mindestens _N_ Sekunden [frisch](/de/docs/Web/HTTP/Guides/Caching#fresh_and_stale_based_on_age) ist.

```http
Cache-Control: min-fresh=600
```

Im obigen Fall würde der Cache die Antwort mit `Cache-Control: max-age=3600` nicht akzeptieren, wenn sie vor 51 Minuten in Caches gespeichert wurde.

Clients können diesen Header verwenden, wenn der Benutzer erfordert, dass die Antwort nicht nur [frisch](/de/docs/Web/HTTP/Guides/Caching#fresh_and_stale_based_on_age) ist, sondern auch erfordert, dass sie für einen bestimmten Zeitraum nicht aktualisiert wird.

Beachten Sie, dass die gängigen Browser Anfragen mit `min-fresh` nicht unterstützen.

#### `no-transform`

Hat dieselbe Bedeutung wie `no-transform` für eine Antwort, jedoch für eine Anfrage.

#### `only-if-cached`

Der Client gibt an, dass eine bereits zwischengespeicherte Antwort zurückgegeben werden sollte. Wenn ein Cache eine gespeicherte Antwort hat, selbst wenn sie veraltet ist, wird sie zurückgegeben. Wenn keine zwischengespeicherte Antwort verfügbar ist, wird eine [504 Gateway Timeout](/de/docs/Web/HTTP/Reference/Status/504) Antwort zurückgegeben.

#### `stale-if-error`

Die `stale-if-error`-Anfragedirektive gibt an, dass der Browser daran interessiert ist, bei einem Fehler von einem beliebigen Zwischenserver für einen bestimmten Ursprungsserver abgestandene Inhalte zu erhalten. Dies wird von keinem Browser unterstützt (siehe [Browser-Kompatibilität](#browser-kompatibilität)).

## Anwendungsfälle

### Verhinderung der Speicherung

Wenn Sie nicht möchten, dass eine Antwort in Caches gespeichert wird, verwenden Sie die `no-store`-Direktive.

```http
Cache-Control: no-store
```

Beachten Sie, dass `no-cache` bedeutet "es kann gespeichert werden, aber nicht wiederverwenden, bevor es validiert wird" — also ist es nicht dafür gedacht, das Speichern einer Antwort zu verhindern.

```http example-bad
Cache-Control: no-cache
```

Theoretisch sollte, wenn Direktiven in Konflikt stehen, die restriktivste Direktive beachtet werden. Das folgende Beispiel ist also im Grunde bedeutungslos, da `private`, `no-cache`, `max-age=0` und `must-revalidate` in Konflikt mit `no-store` stehen.

```http example-bad
# conflicted
Cache-Control: private, no-cache, no-store, max-age=0, must-revalidate

# equivalent to
Cache-Control: no-store
```

### Caching von statischen Assets mit "Cache Busting"

Wenn Sie statische Assets mit Versionierungs-/Hashing-Mechanismen erstellen, ist das Hinzufügen einer Version/eines Hashes zum Dateinamen oder zur Abfragezeichenfolge eine gute Möglichkeit, das Caching zu verwalten.

Zum Beispiel:

```html
<!-- index.html -->
<script src="/assets/react.min.js"></script>
<img src="/assets/hero.png" width="900" height="400" />
```

Die Version der React-Bibliothek ändert sich, wenn Sie die Bibliothek aktualisieren, und `hero.png` ändert sich auch, wenn Sie das Bild bearbeiten. Diese sind also schwer in einem Cache mit `max-age` zu speichern.

In einem solchen Fall könnten Sie die Caching-Anforderungen durch die Verwendung einer bestimmten, nummerierten Version der Bibliothek ansprechen und den Hash des Bildes in seiner URL einfügen.

```html
<!-- index.html -->
<script src="/assets/react.0.0.0min.js"></script>
<img src="/assets/hero.png?hash=deadbeef" width="900" height="400" />
```

Sie können einen langen `max-age`-Wert und `immutable` hinzufügen, da der Inhalt niemals geändert wird.

```http
# /assets/*
Cache-Control: max-age=31536000, immutable
```

Wenn Sie die Bibliothek aktualisieren oder das Bild bearbeiten, sollten neue Inhalte eine neue URL haben, und Caches werden nicht wiederverwendet. Das wird als "Cache-Busting"-Muster bezeichnet.

Verwenden Sie ein `no-cache`, um sicherzustellen, dass die HTML-Antwort selbst nicht zwischengespeichert wird. `no-cache` könnte eine erneute Validierung verursachen, und der Client wird korrekt eine neue Version der HTML-Antwort und der statischen Assets erhalten.

```http
# /index.html
Cache-Control: no-cache
```

Hinweis: Wenn `index.html` unter Basis-Authentifizierung oder Digest-Authentifizierung kontrolliert wird, werden Dateien unter `/assets` nicht im geteilten Cache gespeichert. Wenn `/assets/`-Dateien geeignet sind, um im geteilten Cache gespeichert zu werden, benötigen Sie zusätzlich zu `public`, `s-maxage` oder `must-revalidate`.

### Immer aktuelle Inhalte

Für Inhalte, die dynamisch generiert werden oder die statisch, aber oft aktualisiert sind, möchten Sie, dass ein Nutzer immer die aktuellste Version erhält.

Wenn Sie keinen `Cache-Control`-Header hinzufügen, weil die Antwort nicht zwischengespeichert werden soll, könnte dies zu einem unerwarteten Ergebnis führen. Der Cache-Speicher darf es heuristisch cachen — daher sollten Sie, wenn Sie Anforderungen an das Caching stellen, diese immer explizit im `Cache-Control`-Header angeben.

Das Hinzufügen von `no-cache` zur Antwort verursacht eine erneute Validierung beim Server, sodass Sie jedes Mal eine [frische](/de/docs/Web/HTTP/Guides/Caching#fresh_and_stale_based_on_age) Antwort bereitstellen können — oder wenn der Client bereits eine neue hat, einfach mit `304 Not Modified` antworten.

```http
Cache-Control: no-cache
```

Die meisten HTTP/1.0-Caches unterstützen keine `no-cache`-Direktiven, daher wurde historisch `max-age=0` als Workaround verwendet. Aber nur `max-age=0` könnte eine [abgestandene Antwort](/de/docs/Web/HTTP/Guides/Caching#fresh_and_stale_based_on_age) verursachen, die wiederverwendet wird, wenn Caches vom Ursprungsserver getrennt sind. `must-revalidate` behebt dies. Deshalb ist das folgende Beispiel gleichwertig mit `no-cache`.

```http
Cache-Control: max-age=0, must-revalidate
```

Aber jetzt können Sie einfach `no-cache` verwenden.

### Löschen eines bereits gespeicherten Caches

Es gibt keine Cache-Direktiven, um bereits gespeicherte Antworten aus Caches auf _mittleren_ Servern zu löschen.

Stellen Sie sich vor, dass Clients/Caches eine [frische](/de/docs/Web/HTTP/Guides/Caching#fresh_and_stale_based_on_age) Antwort für einen Pfad speichern, ohne dass eine Anforderungsflug zum Server erfolgt. Es gibt nichts, was ein Server für diesen Pfad tun könnte.

[`Clear-Site-Data: cache`](/de/docs/Web/HTTP/Reference/Headers/Clear-Site-Data#cache) kann verwendet werden, um jede gespeicherte Antwort für eine Seite im Browsercache zu löschen, daher verwenden Sie dies mit Vorsicht.
Beachten Sie, dass dies keine Auswirkungen auf geteilte oder mittlere Caches hat.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [HTTP-Caching](/de/docs/Web/HTTP/Guides/Caching)
- [Caching-Tutorial für Web-Autoren und Webmastern](https://mnot.net/cache_docs/)
- [Caching Best Practices & Max-Age Besonderheiten](https://jakearchibald.com/2016/caching-best-practices/)
- [Cache-Control für Zivilisten](https://csswizardry.com/2019/03/cache-control-for-civilians/)
- [RFC 9111 – HTTP-Caching](https://httpwg.org/specs/rfc9111.html)
- [RFC 5861 – HTTP Cache-Control Extensions für veraltete Inhalte](https://httpwg.org/specs/rfc5861.html)
- [RFC 8246 – HTTP Unveränderliche Antworten](https://httpwg.org/specs/rfc8246.html)
