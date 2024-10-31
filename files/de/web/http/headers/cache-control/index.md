---
title: Cache-Control
slug: Web/HTTP/Headers/Cache-Control
l10n:
  sourceCommit: 92b03e46cef6be37de60799363e3e33e3415b491
---

{{HTTPSidebar}}

Der HTTP-Header **`Cache-Control`** enthält _Direktiven_ (Anweisungen) sowohl in Anfragen als auch in Antworten, die das [Caching](/de/docs/Web/HTTP/Caching) in Browsern und gemeinsam genutzten Caches (z. B. Proxies, CDNs) steuern.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Headertyp</th>
      <td>
        {{Glossary("Request_header", "Request header")}},
        {{Glossary("Response_header", "Response header")}}
      </td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_header_name", "Verbotener Headername")}}</th>
      <td>Nein</td>
    </tr>
    <tr>
      <th scope="row">
        {{Glossary("CORS-safelisted_response_header", "CORS-safelisted response header")}}
      </th>
      <td>Ja</td>
    </tr>
  </tbody>
</table>

## Syntax

Cache-Direktiven folgen diesen Regeln:

- Cache-Direktiven sind Groß- und Kleinschreibung unempfindlich. Trotzdem wird Kleinschreibung empfohlen, da einige Implementierungen Großbuchstaben nicht erkennen.
- Mehrere Direktiven sind erlaubt und müssen durch Kommas getrennt werden (z.B. `Cache-control: max-age=180, public`).
- Einige Direktiven haben ein optionales Argument. Wenn ein Argument angegeben wird, wird es durch ein Gleichheitszeichen (`=`) vom Direktiven-Namen getrennt. Typischerweise sind Argumente für die Direktiven Ganzzahlen und sind daher nicht in Anführungszeichen eingeschlossen (z.B. `Cache-control: max-age=12`).

### Cache-Direktiven

Die folgende Tabelle listet die Standard-`Cache-Control`-Direktiven auf:

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

Hinweis: Überprüfen Sie die [Kompatibilitätstabelle](#browser-kompatibilität) für deren Unterstützung; Benutzeragenten, die sie nicht erkennen, sollten sie ignorieren.

## Vokabular

Dieser Abschnitt definiert die in diesem Dokument verwendeten Begriffe, von denen einige aus der Spezifikation stammen.

- (HTTP) Cache
  - : Implementierung, die Anfragen und Antworten speichert, um sie bei nachfolgenden Anfragen wiederzuverwenden. Es kann sich entweder um einen gemeinsamen Cache oder einen privaten Cache handeln.
- Gemeinsamer Cache
  - : Ein Cache, der zwischen dem Ursprungsserver und den Clients existiert (z.B. Proxy, CDN). Es speichert eine einzige Antwort und verwendet sie mit mehreren Benutzern erneut, daher sollten Entwickler vermeiden, personalisierte Inhalte im gemeinsamen Cache zu speichern.
- Privater Cache
  - : Ein Cache, der im Client existiert. Es wird auch als _lokaler Cache_ oder _Browser-Cache_ bezeichnet. Es kann personalisierte Inhalte für einen einzelnen Benutzer speichern und wiederverwenden.
- Antwort speichern
  - : Eine Antwort in Caches speichern, wenn die Antwort cachebar ist. Jedoch wird die zwischengespeicherte Antwort nicht immer unverändert wiederverwendet. (Normalerweise bedeutet "cache" das Speichern einer Antwort.)
- Antwort wiederverwenden
  - : Zwischengespeicherte Antworten für nachfolgende Anfragen wiederverwenden.
- Antwort erneut validieren
  - : Den Ursprungsserver fragen, ob die gespeicherte Antwort immer noch [frisch](/de/docs/Web/HTTP/Caching#fresh_and_stale_based_on_age) ist. Normalerweise wird die erneute Validierung durch eine bedingte Anfrage durchgeführt.
- Frische Antwort
  - : Weist darauf hin, dass die Antwort [frisch](/de/docs/Web/HTTP/Caching#fresh_and_stale_based_on_age) ist. Dies bedeutet normalerweise, dass die Antwort für nachfolgende Anfragen wiederverwendet werden kann, je nach Anfragedirektiven.
- Abgestandene Antwort
  - : Weist darauf hin, dass die Antwort eine [abgestandene Antwort](/de/docs/Web/HTTP/Caching#fresh_and_stale_based_on_age) ist. Dies bedeutet normalerweise, dass die Antwort nicht unverändert wiederverwendet werden kann. Der Cache-Speicher muss abgestandene Antworten nicht sofort entfernen, da die erneute Validierung die Antwort von abgestanden zu [frisch](/de/docs/Web/HTTP/Caching#fresh_and_stale_based_on_age) ändern könnte.
- Alter
  - : Die Zeit seit der Erzeugung einer Antwort. Es ist ein Kriterium dafür, ob eine Antwort [frisch oder abgestanden](/de/docs/Web/HTTP/Caching#fresh_and_stale_based_on_age) ist.

## Direktiven

Dieser Abschnitt listet Direktiven auf, die das Caching beeinflussen – sowohl Antwort- als auch Anfragedirektiven.

### Antwort-Direktiven

#### `max-age`

Die `max-age=N` Antwort-Direktive gibt an, dass die Antwort bis zu _N_ Sekunden nach der Erzeugung der Antwort [frisch](/de/docs/Web/HTTP/Caching#fresh_and_stale_based_on_age) bleibt.

```http
Cache-Control: max-age=604800
```

Dieser gibt an, dass Caches diese Antwort speichern und für nachfolgende Anfragen wiederverwenden können, solange sie [frisch](/de/docs/Web/HTTP/Caching#fresh_and_stale_based_on_age) ist.

Beachten Sie, dass `max-age` nicht die verstrichene Zeit seit dem Empfang der Antwort ist, sondern die verstrichene Zeit seit der Erzeugung der Antwort auf dem Ursprungsserver. Wenn also der andere Cache – auf der Netzwerkroute, die von der Antwort genommen wird – die Antwort für 100 Sekunden speichert (angegeben mit dem `Age` Antwort-Header-Feld), würde der Browser-Cache 100 Sekunden von seiner [Frischelebensdauer](/de/docs/Web/HTTP/Caching#fresh_and_stale_based_on_age) abziehen.

Wenn der `max-age` Wert negativ ist (zum Beispiel `-1`) oder keine Ganzzahl ist (zum Beispiel `3599.99`), dann ist das Caching-Verhalten nicht spezifiziert. Caches werden ermutigt, den Wert so zu behandeln, als wäre er `0` (dies wird im Abschnitt [Berechnung der Frischelebensdauer](https://httpwg.org/specs/rfc9111.html#calculating.freshness.lifetime) der HTTP-Spezifikation angemerkt).

```http
Cache-Control: max-age=604800
Age: 100
```

#### `s-maxage`

Die `s-maxage` Antwort-Direktive gibt an, wie lange die Antwort in einem gemeinsamen Cache [frisch](/de/docs/Web/HTTP/Caching#fresh_and_stale_based_on_age) bleibt. Die `s-maxage`-Direktive wird von privaten Caches ignoriert und überschreibt den Wert, der durch die `max-age`-Direktive oder den `Expires`-Header für gemeinsame Caches angegeben wird, wenn diese vorhanden sind.

```http
Cache-Control: s-maxage=604800
```

#### `no-cache`

Die `no-cache` Antwort-Direktive gibt an, dass die Antwort in Caches gespeichert werden kann, aber die Antwort muss vor jeder Wiederverwendung mit dem Ursprungsserver validiert werden, selbst wenn der Cache vom Ursprungsserver getrennt ist.

```http
Cache-Control: no-cache
```

Wenn Sie möchten, dass Caches immer auf Inhaltsupdates prüfen, während sie gespeicherte Inhalte wiederverwenden, ist `no-cache` die Direktive zur Verwendung. Dies geschieht, indem Caches dazu verpflichtet werden, jede Anfrage mit dem Ursprungsserver erneut zu validieren.

Beachten Sie, dass `no-cache` nicht "nicht cachen" bedeutet. `no-cache` erlaubt es Caches, eine Antwort zu speichern, erfordert jedoch, dass sie vor der Wiederverwendung erneut validiert wird. Wenn das Gespür von "nicht cachen", das Sie möchten, tatsächlich "nicht speichern" ist, dann ist `no-store` die Direktive, die verwendet werden sollte.

#### `must-revalidate`

Die `must-revalidate` Antwort-Direktive gibt an, dass die Antwort in Caches gespeichert und wiederverwendet werden kann, solange sie [frisch](/de/docs/Web/HTTP/Caching#fresh_and_stale_based_on_age) ist. Wenn die Antwort [abgestanden](/de/docs/Web/HTTP/Caching#fresh_and_stale_based_on_age) wird, muss sie vor der Wiederverwendung mit dem Ursprungsserver validiert werden.

Typischerweise wird `must-revalidate` mit `max-age` verwendet.

```http
Cache-Control: max-age=604800, must-revalidate
```

HTTP erlaubt es Caches, [abgestandene Antworten](/de/docs/Web/HTTP/Caching#fresh_and_stale_based_on_age) wiederzuverwenden, wenn sie vom Ursprungsserver getrennt sind. `must-revalidate` verhindert, dass dies geschieht - entweder wird die gespeicherte Antwort mit dem Ursprungsserver erneut validiert oder eine 504 (Gateway Timeout) Antwort wird erzeugt.

#### `proxy-revalidate`

Die `proxy-revalidate` Antwort-Direktive ist gleichwertig zu `must-revalidate`, gilt jedoch nur für gemeinsam genutzte Caches.

#### `no-store`

Die `no-store` Antwort-Direktive gibt an, dass keine Caches jeglicher Art (privat oder geteilt) diese Antwort speichern sollten.

```http
Cache-Control: no-store
```

#### `private`

Die `private` Antwort-Direktive gibt an, dass die Antwort nur in einem privaten Cache (z.B. lokale Caches in Browsern) gespeichert werden kann.

```http
Cache-Control: private
```

Sie sollten die `private` Direktive für benutzerpersonalisierte Inhalte hinzufügen, insbesondere für Antworten, die nach der Anmeldung erhalten werden, und für Sitzungen, die über Cookies verwaltet werden.

Wenn Sie vergessen, `private` zu einer Antwort mit personalisierten Inhalten hinzuzufügen, dann kann diese Antwort in einem gemeinsamen Cache gespeichert und für mehrere Benutzer wiederverwendet werden, was dazu führen kann, dass persönliche Informationen durchsickern.

#### `public`

Die `public` Antwort-Direktive gibt an, dass die Antwort in einem gemeinsamen Cache gespeichert werden kann. Antworten auf Anfragen mit `Authorization` Header-Feldern dürfen nicht in einem gemeinsamen Cache gespeichert werden; jedoch wird die `public` Direktive dazu führen, dass solche Antworten in einem gemeinsamen Cache gespeichert werden.

```http
Cache-Control: public
```

Im Allgemeinen senden Browser Anfragen mit dem `Authorization` Header, wenn Seiten unter Basisauthentifizierung oder Digest Authentifizierung stehen. Dies bedeutet, dass die Antwort für eingeschränkte Benutzer (die Konten haben) zugangsgesteuert ist und grundsätzlich nicht gemeinsam zwischenspeicherbar ist, selbst wenn sie `max-age` enthält.

Sie können die `public` Direktive verwenden, um diese Einschränkung aufzuheben.

```http
Cache-Control: public, max-age=604800
```

Beachten Sie, dass `s-maxage` oder `must-revalidate` auch diese Einschränkung aufheben.

Wenn eine Anfrage keinen `Authorization` Header hat oder Sie bereits `s-maxage` oder `must-revalidate` in der Antwort verwenden, dann brauchen Sie `public` nicht zu verwenden.

#### `must-understand`

Die `must-understand` Antwort-Direktive gibt an, dass ein Cache die Antwort nur dann speichern sollte, wenn er die Anforderungen zum Zwischenspeichern basierend auf dem Statuscode versteht.

`must-understand` sollte mit `no-store` für ein Fallback-Verhalten gekoppelt werden.

```http
Cache-Control: must-understand, no-store
```

Wenn ein Cache `must-understand` nicht unterstützt, wird es ignoriert. Wenn `no-store` ebenfalls vorhanden ist, wird die Antwort nicht gespeichert.

Wenn ein Cache `must-understand` unterstützt, speichert es die Antwort mit einem Verständnis der Anforderungen an den Cache basierend auf dessen Statuscode.

#### `no-transform`

Einige Zwischeninstanzen transformieren Inhalte aus verschiedenen Gründen. Beispielsweise konvertieren einige Bilder, um die Übertragungsgröße zu reduzieren. In einigen Fällen ist dies für den Inhaltsanbieter unerwünscht.

`no-transform` gibt an, dass eine Zwischeninstanz (unabhängig davon, ob sie einen Cache implementiert) die Antwortinhalte nicht transformieren sollte.

#### `immutable`

Die `immutable` Antwort-Direktive gibt an, dass die Antwort nicht aktualisiert wird, während sie [frisch](/de/docs/Web/HTTP/Caching#fresh_and_stale_based_on_age) ist.

```http
Cache-Control: public, max-age=604800, immutable
```

Eine moderne Best Practice für statische Ressourcen ist es, Versionen/Hashes in ihre URLs einzufügen, während die Ressourcen niemals geändert werden - sondern stattdessen, wenn nötig, die Ressourcen mit neueren Versionen aktualisiert werden, die neue Versionsnummern/Hashes haben, sodass ihre URLs unterschiedlich sind. Das wird als das **Cache-Busting**-Muster bezeichnet.

```html
<script src="https://example.com/react.0.0.0.js"></script>
```

Wenn ein Benutzer den Browser neu lädt, sendet der Browser bedingte Anfragen zur Validierung an den Ursprungsserver. Aber es ist nicht notwendig, solche Arten von statischen Ressourcen auch dann erneut zu validieren, wenn ein Benutzer den Browser neu lädt, da sie niemals geändert werden.
`immutable` teilt einem Cache mit, dass die Antwort unveränderlich ist, solange sie [frisch](/de/docs/Web/HTTP/Caching#fresh_and_stale_based_on_age) ist, und vermeidet diese Arten von unnötigen bedingten Anfragen an den Server.

Wenn Sie ein Cache-Busting-Muster für Ressourcen verwenden und diese auf eine lange `max-age` anwenden, können Sie auch `immutable` hinzufügen, um die erneute Validierung zu vermeiden.

#### `stale-while-revalidate`

Die `stale-while-revalidate` Antwort-Direktive gibt an, dass der Cache eine abgestandene Antwort erneut verwenden könnte, während er sie zu einem Cache revalidiert.

```http
Cache-Control: max-age=604800, stale-while-revalidate=86400
```

Im obigen Beispiel ist die Antwort [frisch](/de/docs/Web/HTTP/Caching#fresh_and_stale_based_on_age) für 7 Tage (604800s). Nach 7 Tagen wird sie [abgestanden](/de/docs/Web/HTTP/Caching#fresh_and_stale_based_on_age), aber der Cache darf sie für alle Anfragen am folgenden Tag (86400s) wiederverwenden, vorausgesetzt, er validiert die Antwort im Hintergrund.

Die erneute Validierung macht den Cache wieder [frisch](/de/docs/Web/HTTP/Caching#fresh_and_stale_based_on_age), sodass es den Clients als durchgehend [frisch](/de/docs/Web/HTTP/Caching#fresh_and_stale_based_on_age) während dieser Periode erscheint - was die Latenzstrafe der erneuten Validierung praktisch vor ihnen verbirgt.

Wenn während dieser Periode keine Anfrage auftritt, wird der Cache [abgestanden](/de/docs/Web/HTTP/Caching#fresh_and_stale_based_on_age) und die nächste Anfrage wird normal revalidiert.

#### `stale-if-error`

Die `stale-if-error` Antwort-Direktive gibt an, dass der Cache eine [abgestandene Antwort](/de/docs/Web/HTTP/Caching#fresh_and_stale_based_on_age) wiederverwenden kann, wenn ein Upstream-Server einen Fehler erzeugt oder wenn der Fehler lokal erzeugt wird. Hier wird ein Fehler als jede Antwort mit einem Statuscode von 500, 502, 503 oder 504 betrachtet.

```http
Cache-Control: max-age=604800, stale-if-error=86400
```

Im obigen Beispiel ist die Antwort [frisch](/de/docs/Web/HTTP/Caching#fresh_and_stale_based_on_age) für 7 Tage (604800s). Danach wird sie [abgestanden](/de/docs/Web/HTTP/Caching#fresh_and_stale_based_on_age), kann aber für einen zusätzlichen Tag (86400s) bei Auftreten eines Fehlers verwendet werden.

Nach Ablauf der stale-if-error-Periode erhält der Client jeden erzeugten Fehler.

### Anfrage-Direktiven

#### `no-cache`

Die `no-cache` Anfragedirektive fordert Caches auf, die Antwort mit dem Ursprungsserver vor der Wiederverwendung zu validieren.

```http
Cache-Control: no-cache
```

`no-cache` erlaubt Clients, die aktuellste Antwort anzufordern, auch wenn der Cache eine [frische](/de/docs/Web/HTTP/Caching#fresh_and_stale_based_on_age) Antwort hat.

Browser fügen Anfragen normalerweise `no-cache` hinzu, wenn Benutzer eine Seite **stark neu laden**.

#### `no-store`

Die `no-store` Anfragedirektive erlaubt einem Client zu verlangen, dass Caches die Anfrage und die entsprechende Antwort nicht speichern — selbst wenn die Antwort des Ursprungsservers gespeichert werden könnte.

```http
Cache-Control: no-store
```

#### `max-age`

Die `max-age=N` Anfragedirektive gibt an, dass der Client eine gespeicherte Antwort akzeptiert, die auf dem Ursprungsserver innerhalb von _N_ Sekunden erzeugt wurde — wobei _N_ jede nicht negative Ganzzahl (einschließlich `0`) sein kann.

```http
Cache-Control: max-age=10800
```

Im obigen Fall, falls die Antwort mit `Cache-Control: max-age=10800` mehr als 3 Stunden zuvor erzeugt wurde (berechnet ab `max-age` und dem `Age` Header), könnte der Cache diese Antwort nicht erneut verwenden.

Viele Browser verwenden diese Direktive zum **Neuladen**, wie unten erklärt.

```http
Cache-Control: max-age=0
```

`max-age=0` ist ein Workaround für `no-cache`, weil viele alte (HTTP/1.0) Cache-Implementierungen `no-cache` nicht unterstützen. Kürzlich verwenden Browser immer noch `max-age=0` beim "Neuladen" — aus Gründen der Rückwärtskompatibilität — und verwenden alternativ `no-cache`, um ein "starkes Neuladen" zu verursachen.

Wenn der `max-age` Wert negativ ist (zum Beispiel `-1`) oder keine Ganzzahl ist (zum Beispiel `3599.99`), dann ist das Caching-Verhalten nicht spezifiziert. Caches werden ermutigt, den Wert so zu behandeln, als wäre er `0`.

#### `max-stale`

Die `max-stale=N` Anfragedirektive gibt an, dass der Client eine gespeicherte Antwort akzeptiert, die innerhalb von _N_ Sekunden [abgestanden](/de/docs/Web/HTTP/Caching#fresh_and_stale_based_on_age) ist. Wenn kein _N_ Wert spezifiziert ist, akzeptiert der Client eine abgestandene Antwort jeden Alters.

```http
Cache-Control: max-stale=3600
```

Zum Beispiel gibt eine Anfrage mit dem obigen Header an, dass der Browser eine abgestandene Antwort aus dem Cache akzeptiert, die innerhalb der letzten Stunde abgelaufen ist.

Clients können diesen Header verwenden, wenn der Ursprungsserver nicht erreichbar oder zu langsam ist und zwischengespeicherte Antworten auch dann akzeptieren, wenn sie etwas älter sind.

Beachten Sie, dass die wichtigsten Browser keine Anfragen mit `max-stale` unterstützen.

#### `min-fresh`

Die `min-fresh=N` Anfragedirektive gibt an, dass der Client eine gespeicherte Antwort akzeptiert, die mindestens _N_ Sekunden [frisch](/de/docs/Web/HTTP/Caching#fresh_and_stale_based_on_age) ist.

```http
Cache-Control: min-fresh=600
```

Im obigen Fall, wenn die Antwort mit `Cache-Control: max-age=3600` vor 51 Minuten in Caches gespeichert wurde, konnte der Cache diese Antwort nicht erneut verwenden.

Clients können diesen Header verwenden, wenn der Benutzer erfordert, dass die Antwort nicht nur [frisch](/de/docs/Web/HTTP/Caching#fresh_and_stale_based_on_age) ist, sondern auch verlangt, dass sie für einen bestimmten Zeitraum nicht aktualisiert wird.

Beachten Sie, dass die wichtigsten Browser keine Anfragen mit `min-fresh` unterstützen.

#### `no-transform`

Gleiche Bedeutung, die `no-transform` für eine Antwort hat, aber für eine Anfrage.

#### `only-if-cached`

Der Client gibt an, dass eine bereits zwischengespeicherte Antwort zurückgegeben werden sollte. Wenn ein Cache eine gespeicherte Antwort hat, selbst eine abgestandene, wird sie zurückgegeben. Wenn keine zwischengespeicherte Antwort verfügbar ist, wird eine [504 Gateway Timeout](/de/docs/Web/HTTP/Status/504) Antwort zurückgegeben.

## Anwendungsfälle

### Speichern verhindern

Wenn Sie nicht möchten, dass eine Antwort in Caches gespeichert wird, verwenden Sie die `no-store` Direktive.

```http
Cache-Control: no-store
```

Beachten Sie, dass `no-cache` "es kann gespeichert werden, aber nicht ohne Validierung wiederverwenden" bedeutet – es ist also nicht dafür gedacht, eine Antwort vom Speichern abzuhalten.

```http example-bad
Cache-Control: no-cache
```

Theoretisch, wenn Direktiven in Konflikt stehen, sollte die restriktivste Direktive beachtet werden. Das untenstehende Beispiel ist also im Grunde bedeutungslos, weil `private`, `no-cache`, `max-age=0` und `must-revalidate` mit `no-store` in Konflikt stehen.

```http example-bad
# conflicted
Cache-Control: private, no-cache, no-store, max-age=0, must-revalidate

# equivalent to
Cache-Control: no-store
```

### Caching statischer Assets mit "Cache-Busting"

Wenn Sie statische Assets mit Versions-/Hashmechanismen erstellen, ist das Hinzufügen einer Version/eines Hashs zu Dateinamen oder Anforderungszeichenfolgen eine gute Möglichkeit, das Caching zu verwalten.

Zum Beispiel:

```html
<!-- index.html -->
<script src="/assets/react.min.js"></script>
<img src="/assets/hero.png" width="900" height="400" />
```

Die React-Bibliotheksversion ändert sich, wenn Sie die Bibliothek aktualisieren, und `hero.png` ändert sich auch, wenn Sie das Bild bearbeiten. Diese sind daher schwer in einem Cache mit `max-age` zu speichern.

In einem solchen Fall könnten Sie die Caching-Anforderungen adressieren, indem Sie eine bestimmte, nummerierte Version der Bibliothek verwenden und den Hash des Bildes in seine URL einfügen.

```html
<!-- index.html -->
<script src="/assets/react.0.0.0min.js"></script>
<img src="/assets/hero.png?hash=deadbeef" width="900" height="400" />
```

Sie können einen langen `max-age` Wert und `immutable` hinzufügen, weil sich der Inhalt niemals ändern wird.

```http
# /assets/*
Cache-Control: max-age=31536000, immutable
```

Wenn Sie die Bibliothek aktualisieren oder das Bild bearbeiten, sollte neuer Inhalt eine neue URL haben und Caches werden nicht wiederverwendet. Das wird als das "Cache-Busting"-Muster bezeichnet.

Verwenden Sie `no-cache`, um sicherzustellen, dass die HTML-Antwort selbst nicht zwischengespeichert wird. `no-cache` könnte zur erneuten Validierung führen, und der Client wird korrekt eine neue Version der HTML-Antwort und statische Assets erhalten.

```http
# /index.html
Cache-Control: no-cache
```

Hinweis: Wenn `index.html` unter Basisauthentifizierung oder Digest Authentifizierung kontrolliert wird, werden die Dateien unter `/assets` nicht im gemeinsam genutzten Cache gespeichert. Wenn `/assets/`-Dateien für die Speicherung in einem gemeinsam genutzten Cache geeignet sind, benötigen Sie außerdem eine von `public`, `s-maxage` oder `must-revalidate`.

### Immer aktuelle Inhalte

Für Inhalte, die dynamisch erzeugt werden oder die statisch sind, aber häufig aktualisiert werden, möchten Sie, dass ein Benutzer immer die aktuellste Version erhält.

Wenn Sie keinen `Cache-Control` Header hinzufügen, weil die Antwort nicht für das Zwischenspeichern gedacht ist, könnte dies zu einem unerwarteten Ergebnis führen. Die Cache-Speicherung darf sie heuristisch zwischenspeichern – wenn Sie also Anforderungen an das Caching haben, sollten Sie diese immer explizit im `Cache-Control` Header angeben.

Das Hinzufügen von `no-cache` zur Antwort führt zur erneuten Validierung des Servers, sodass Sie jedes Mal eine [frische](/de/docs/Web/HTTP/Caching#fresh_and_stale_based_on_age) Antwort bereitstellen können – oder, wenn der Client bereits eine neue hat, einfach mit `304 Not Modified` antworten.

```http
Cache-Control: no-cache
```

Die meisten HTTP/1.0 Caches unterstützen `no-cache` Direktiven nicht, daher wurde historisch `max-age=0` als Workaround verwendet. Aber nur `max-age=0` könnte dazu führen, dass eine [abgestandene Antwort](/de/docs/Web/HTTP/Caching#fresh_and_stale_based_on_age) wiederverwendet wird, wenn Caches vom Ursprungsserver getrennt sind. `must-revalidate` adressiert dies. Deshalb ist das untenstehende Beispiel gleich seinem `no-cache`.

```http
Cache-Control: max-age=0, must-revalidate
```

Aber jetzt können Sie einfach `no-cache` verwenden.

### Ein bereits gespeichertes Cache leeren

Leider gibt es keine Cache-Direktiven zum Leeren bereits gespeicherter Antworten in Caches.

Stellen Sie sich vor, dass Clients/Caches eine [frische](/de/docs/Web/HTTP/Caching#fresh_and_stale_based_on_age) Antwort für einen Pfad speichern, ohne dass ein Anfrageflug zum Server erfolgt. Es gibt nichts, was ein Server für diesen Pfad tun könnte.

Alternativ kann `Clear-Site-Data` einen Browser-Cache für eine Site löschen. Aber seien Sie vorsichtig: Das löscht jede gespeicherte Antwort für eine Site – und nur in Browsern, nicht für einen gemeinsam genutzten Cache.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [HTTP-Caching](/de/docs/Web/HTTP/Caching)
- [Caching Tutorial für Webautoren und Webmaster](https://www.mnot.net/cache_docs/)
- [Best Practices für Caching und Max-Age-Fallen](https://jakearchibald.com/2016/caching-best-practices/)
- [Cache-Control für Zivilisten](https://csswizardry.com/2019/03/cache-control-for-civilians/)
- [RFC 9111 – HTTP-Caching](https://httpwg.org/specs/rfc9111.html)
- [RFC 5861 – HTTP-Cache-Control Erweiterungen für abgestandene Inhalte](https://httpwg.org/specs/rfc5861.html)
- [RFC 8246 – HTTP Unveränderliche Antworten](https://httpwg.org/specs/rfc8246.html)
