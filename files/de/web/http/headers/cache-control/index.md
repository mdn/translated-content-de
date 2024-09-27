---
title: Cache-Control
slug: Web/HTTP/Headers/Cache-Control
l10n:
  sourceCommit: caffa587676396f62fed17ba53b16e55b0e8caf3
---

{{HTTPSidebar}}

Das **`Cache-Control`** HTTP-Headerfeld hält _Anweisungen_ (Instruktionen) – sowohl in Anforderungen als auch in Antworten – die das [Caching](/de/docs/Web/HTTP/Caching) in Browsern und geteilten Caches (z.B. Proxies, CDNs) steuern.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Headertyp</th>
      <td>
        [Request header](/de/docs/Glossary/Request_header),
        [Response header](/de/docs/Glossary/Response_header)
      </td>
    </tr>
    <tr>
      <th scope="row">[Verbotener Headername](/de/docs/Glossary/Forbidden_header_name)</th>
      <td>nein</td>
    </tr>
    <tr>
      <th scope="row">
        [CORS-safelisted response header](/de/docs/Glossary/CORS-safelisted_response_header)
      </th>
      <td>ja</td>
    </tr>
  </tbody>
</table>

## Syntax

Cache-Direktiven folgen diesen Regeln:

- Cache-Direktiven sind nicht case-sensitiv. Trotzdem wird Kleinschreibung empfohlen, da einige Implementierungen Großschreibung nicht erkennen.
- Mehrere Direktiven sind erlaubt und müssen durch Kommata getrennt sein (z.B. `Cache-control: max-age=180, public`).
- Einige Direktiven haben ein optionales Argument. Wenn ein Argument angegeben ist, wird es durch ein Gleichheitszeichen (`=`) vom Direktivnamen getrennt. Typischerweise sind Argumente für die Direktiven ganze Zahlen und sind daher nicht in Anführungszeichen eingeschlossen (z.B. `Cache-control: max-age=12`).

### Cache-Direktiven

Die folgende Tabelle listet die Standard-`Cache-Control`-Direktiven auf:

| Anforderung      | Antwort                  |
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

Hinweis: Prüfen Sie die [Kompatibilitätstabelle](#/index.html) für ihre Unterstützung; User Agents, die sie nicht erkennen, sollten sie ignorieren.

## Vokabular

Dieser Abschnitt definiert die in diesem Dokument verwendeten Begriffe, einige davon stammen aus der Spezifikation.

- (HTTP) Cache
  - : Implementierung, die Anfragen und Antworten speichert, um sie bei nachfolgenden Anfragen wiederzuverwenden. Es kann sich um einen geteilten oder einen privaten Cache handeln.
- Geteilter Cache
  - : Cache, der zwischen dem Ursprungsserver und den Clients existiert (z.B. Proxy, CDN). Er speichert eine einzelne Antwort und verwendet sie für mehrere Nutzer erneut – daher sollten Entwickler vermeiden, personalisierte Inhalte im geteilten Cache zu speichern.
- Privater Cache
  - : Cache, der im Client existiert. Er wird auch als _lokaler Cache_ oder _Browser-Cache_ bezeichnet. Er kann personalisierte Inhalte für einen einzigen Nutzer speichern und wiederverwenden.
- Antwort speichern
  - : Eine Antwort in Caches speichern, wenn die Antwort zwischenspeicherbar ist. Die gespeicherte Antwort wird jedoch nicht immer unverändert wiederverwendet. (Normalerweise bedeutet „cache“ das Speichern einer Antwort.)
- Antwort wiederverwenden
  - : Zwischengespeicherte Antworten für nachfolgende Anfragen wiederverwenden.
- Antwort erneut validieren
  - : Den Ursprungsserver fragen, ob die gespeicherte Antwort noch [aktuell](/de/docs/Web/HTTP/Caching#fresh_and_stale_based_on_age) ist. Normalerweise erfolgt die Validierung durch eine konditionale Anfrage.
- Aktuelle Antwort
  - : Zeigt an, dass die Antwort [aktuell](/de/docs/Web/HTTP/Caching#fresh_and_stale_based_on_age) ist. Das bedeutet normalerweise, dass die Antwort für nachfolgende Anfragen erneut verwendet werden kann, abhängig von den Anforderungsdirektiven.
- Veraltete Antwort
  - : Zeigt an, dass die Antwort eine [veraltete Antwort](/de/docs/Web/HTTP/Caching#fresh_and_stale_based_on_age) ist. Das bedeutet normalerweise, dass die Antwort nicht unverändert wiederverwendet werden kann. Cache-Speicher muss veraltete Antworten nicht sofort entfernen, da eine erneute Validierung die Antwort von „veraltet“ zu „[aktuell](/de/docs/Web/HTTP/Caching#fresh_and_stale_based_on_age)“ ändern könnte.
- Alter
  - : Die Zeit, seit eine Antwort erstellt wurde. Es ist ein Kriterium dafür, ob eine Antwort [aktuell oder veraltet](/de/docs/Web/HTTP/Caching#fresh_and_stale_based_on_age) ist.

## Direktiven

Dieser Abschnitt listet Direktiven auf, die das Caching beeinflussen – sowohl Antwort- als auch Anforderungsdirektiven.

### Antwort-Direktiven

#### `max-age`

Die `max-age=N` Antwort-Direktive zeigt an, dass die Antwort bis zu _N_ Sekunden nach ihrer Erstellung [aktuell](/de/docs/Web/HTTP/Caching#fresh_and_stale_based_on_age) bleibt.

```http
Cache-Control: max-age=604800
```

Zeigt an, dass Caches diese Antwort speichern und für nachfolgende Anfragen erneut verwenden können, solange sie [aktuell](/de/docs/Web/HTTP/Caching#fresh_and_stale_based_on_age) ist.

Beachten Sie, dass `max-age` nicht die verstrichene Zeit ist, seit die Antwort empfangen wurde; es ist die verstrichene Zeit, seit die Antwort auf dem Ursprungsserver erstellt wurde. Wenn der andere Cache – auf der vom Server zurückgelegten Netzroute – die Antwort 100 Sekunden lang speichert (angezeigt über das `Age` Antwort-Headerfeld), würde der Browser-Cache 100 Sekunden von seiner [Frische-Lebensdauer](/de/docs/Web/HTTP/Caching#fresh_and_stale_based_on_age) abziehen.

Wenn der `max-age`-Wert negativ ist (z.B. `-1`) oder keine ganze Zahl ist (z.B. `3599.99`), ist das Caching-Verhalten nicht festgelegt. Caches werden dazu ermutigt, den Wert zu behandeln, als wäre er `0` (dies ist im Abschnitt [Berechnung der Frische-Lebensdauer](https://httpwg.org/specs/rfc9111.html#calculating.freshness.lifetime) der HTTP-Spezifikation vermerkt).

```http
Cache-Control: max-age=604800
Age: 100
```

#### `s-maxage`

Die `s-maxage` Antwort-Direktive gibt an, wie lange die Antwort in einem geteilten Cache [aktuell](/de/docs/Web/HTTP/Caching#fresh_and_stale_based_on_age) bleibt. Die `s-maxage` Direktive wird von privaten Caches ignoriert und überschreibt den durch die `max-age` Direktive oder den `Expires`-Header für geteilte Caches angegebenen Wert, falls diese vorhanden sind.

```http
Cache-Control: s-maxage=604800
```

#### `no-cache`

Die `no-cache` Antwort-Direktive gibt an, dass die Antwort in Caches gespeichert werden kann, die Antwort jedoch vor jeder Wiederverwendung beim Ursprungsserver validiert werden muss, selbst wenn der Cache vom Ursprungsserver getrennt ist.

```http
Cache-Control: no-cache
```

Wenn Sie möchten, dass Caches immer auf Inhaltsaktualisierungen prüfen, während sie gespeicherte Inhalte wieder verwenden, ist `no-cache` die zu verwendende Direktive. Sie erreicht dies, indem sie die Caches zwingt, jede Anfrage beim Ursprungsserver zu validieren.

Beachten Sie, dass `no-cache` nicht „nicht speichern“ bedeutet. `no-cache` erlaubt Caches, eine Antwort zu speichern, erfordert jedoch, dass sie vor der Wiederverwendung validiert wird. Wenn Sie mit „nicht speichern“ tatsächlich „nicht speichern“ meinen, dann ist `no-store` die zu verwendende Direktive.

#### `must-revalidate`

Die `must-revalidate` Antwort-Direktive gibt an, dass die Antwort in Caches gespeichert und während der [aktuell](/de/docs/Web/HTTP/Caching#fresh_and_stale_based_on_age) bleibt, wiederverwendet werden kann. Wenn die Antwort [veraltet](/de/docs/Web/HTTP/Caching#fresh_and_stale_based_on_age) wird, muss sie vor der Wiederverwendung mit dem Ursprungsserver validiert werden.

Typischerweise wird `must-revalidate` zusammen mit `max-age` verwendet.

```http
Cache-Control: max-age=604800, must-revalidate
```

HTTP erlaubt es, Caches [veraltete Antworten](/de/docs/Web/HTTP/Caching#fresh_and_stale_based_on_age) wiederzuverwenden, wenn sie vom Ursprungsserver getrennt sind. `must-revalidate` ist eine Möglichkeit, dies zu verhindern – entweder die gespeicherte Antwort wird mit dem Ursprungsserver validiert oder eine 504 (Gateway Timeout) Antwort wird generiert.

#### `proxy-revalidate`

Die `proxy-revalidate` Antwort-Direktive ist das Äquivalent zu `must-revalidate`, gilt jedoch speziell nur für geteilte Caches.

#### `no-store`

Die `no-store` Antwort-Direktive gibt an, dass alle Arten von Caches (privat oder geteilt) diese Antwort nicht speichern sollten.

```http
Cache-Control: no-store
```

#### `private`

Die `private` Antwort-Direktive gibt an, dass die Antwort nur in einem privaten Cache (z.B. lokale Caches in Browsern) gespeichert werden kann.

```http
Cache-Control: private
```

Sie sollten die `private` Direktive für benutzerpersonalisierte Inhalte hinzufügen, insbesondere für Antworten, die nach dem Einloggen empfangen werden und für Sitzungen, die über Cookies verwaltet werden.

Wenn Sie vergessen, eine `private` Direktive zu einer Antwort mit personalisierten Inhalten hinzuzufügen, dann könnte diese Antwort in einem geteilten Cache gespeichert und für mehrere Benutzer erneut verwendet werden, was dazu führen könnte, dass persönliche Informationen durchgesickert werden.

#### `public`

Die `public` Antwort-Direktive gibt an, dass die Antwort in einem geteilten Cache gespeichert werden kann. Antworten auf Anfragen mit `Authorization` Header-Feldern dürfen nicht in einem geteilten Cache gespeichert werden; jedoch verursacht die `public` Direktive, dass solche Antworten in einem geteilten Cache gespeichert werden.

```http
Cache-Control: public
```

Im Allgemeinen, wenn Seiten unter Basic Auth oder Digest Auth stehen, sendet der Browser Anfragen mit dem `Authorization` Header. Das bedeutet, dass die Antwort für eingeschränkte Benutzer (die Konten haben) zugangsgeschützt ist und grundsätzlich nicht geteilt zwischenspeicherbar ist, selbst wenn sie `max-age` hat.

Sie können die `public` Direktive verwenden, um diese Einschränkung aufzuheben.

```http
Cache-Control: public, max-age=604800
```

Beachten Sie, dass `s-maxage` oder `must-revalidate` ebenfalls diese Einschränkung aufheben.

Wenn eine Anfrage keinen `Authorization` Header hat oder Sie bereits `s-maxage` oder `must-revalidate` in der Antwort verwenden, dann brauchen Sie `public` nicht zu verwenden.

#### `must-understand`

Die `must-understand` Antwort-Direktive zeigt an, dass ein Cache die Antwort nur speichern sollte, wenn er die Anforderungen für das Caching basierend auf dem Statuscode versteht.

`must-understand` sollte mit `no-store` für Fallback-Verhalten gekoppelt werden.

```http
Cache-Control: must-understand, no-store
```

Wenn ein Cache `must-understand` nicht unterstützt, wird es ignoriert. Wenn `no-store` auch vorhanden ist, wird die Antwort nicht gespeichert.

Wenn ein Cache `must-understand` unterstützt, speichert er die Antwort mit Verständnis der Cache-Anforderungen basierend auf ihrem Statuscode.

#### `no-transform`

Einige Zwischenstationen transformieren Inhalte aus verschiedenen Gründen. Zum Beispiel konvertieren einige Bilder, um die Transfergröße zu reduzieren. In einigen Fällen ist dies für den Inhaltsanbieter unerwünscht.

`no-transform` gibt an, dass keine Zwischenstation (unabhängig davon, ob sie einen Cache implementiert) die Antwortinhalte transformieren sollte.

#### `immutable`

Die `immutable` Antwort-Direktive zeigt an, dass die Antwort nicht aktualisiert wird, solange sie [aktuell](/de/docs/Web/HTTP/Caching#fresh_and_stale_based_on_age) ist.

```http
Cache-Control: public, max-age=604800, immutable
```

Eine moderne Best Practice für statische Ressourcen ist, Versionen/Hashes in ihren URLs zu enthalten, während die Ressourcen nie modifiziert werden – sondern stattdessen, wenn nötig, _aktualisiert_ werden, indem neuere Versionen mit neuen Versionsnummern/Hashes erstellt werden, sodass ihre URLs unterschiedlich sind. Das wird als **Cache-Busting**-Muster bezeichnet.

```html
<script src="https://example.com/react.0.0.0.js"></script>
```

Wenn ein Benutzer den Browser neu lädt, sendet der Browser bedingte Anfragen zur Validierung an den Ursprungsserver. Aber es ist nicht notwendig, diese Arten von statischen Ressourcen zu validieren, selbst wenn ein Benutzer den Browser neu lädt, weil sie nie modifiziert werden. `immutable` sagt einem Cache, dass die Antwort unveränderlich ist, solange sie [aktuell](/de/docs/Web/HTTP/Caching#fresh_and_stale_based_on_age) ist und vermeidet solche unnötigen bedingten Anfragen an den Server.

Wenn Sie ein Cache-Busting-Muster für Ressourcen verwenden und ihnen einen langen `max-age` zuweisen, können Sie auch `immutable` hinzufügen, um eine erneute Validierung zu vermeiden.

#### `stale-while-revalidate`

Die `stale-while-revalidate` Antwort-Direktive zeigt an, dass der Cache eine veraltete Antwort wiederverwenden könnte, während er sie im Hintergrund validiert.

```http
Cache-Control: max-age=604800, stale-while-revalidate=86400
```

Im obigen Beispiel ist die Antwort für 7 Tage (604800 s) [aktuell](/de/docs/Web/HTTP/Caching#fresh_and_stale_based_on_age). Nach 7 Tagen wird sie [veraltet](/de/docs/Web/HTTP/Caching#fresh_and_stale_based_on_age), aber der Cache darf sie für Anfragen, die am folgenden Tag (86400 s) gemacht werden, wiederverwenden, sofern sie im Hintergrund validiert wird.

Die Validierung wird den Cache erneut [aktuell](/de/docs/Web/HTTP/Caching#fresh_and_stale_based_on_age) machen, sodass es den Clients so vorkommt, als wäre er während dieser Zeit immer [aktuell](/de/docs/Web/HTTP/Caching#fresh_and_stale_based_on_age) gewesen – und versteckt effektiv die Latenzstrafe der Validierung vor ihnen.

Wenn während dieser Periode keine Anfrage gestellt wurde, wird der Cache [veraltet](/de/docs/Web/HTTP/Caching#fresh_and_stale_based_on_age) und die nächste Anfrage wird normal validiert.

#### `stale-if-error`

Die `stale-if-error` Antwort-Direktive gibt an, dass der Cache eine [veraltete Antwort](/de/docs/Web/HTTP/Caching#fresh_and_stale_based_on_age) verwenden kann, wenn ein upstream Server einen Fehler erzeugt oder wenn der Fehler lokal erzeugt wird. Hierbei wird jeder Antwort mit einem Statuscode von 500, 502, 503 oder 504 als Fehler angesehen.

```http
Cache-Control: max-age=604800, stale-if-error=86400
```

Im obigen Beispiel ist die Antwort für 7 Tage (604800 s) [aktuell](/de/docs/Web/HTTP/Caching#fresh_and_stale_based_on_age). Danach wird sie [veraltet](/de/docs/Web/HTTP/Caching#fresh_and_stale_based_on_age), kann jedoch für einen weiteren Tag (86400 s) verwendet werden, wenn ein Fehler auftritt.

Nach Ablauf der stale-if-error-Periode erhält der Client jeden generierten Fehler.

### Anforderungsdirektiven

#### `no-cache`

Die `no-cache` Anforderungsdirektive fordert Caches auf, die Antwort vor der Wiederverwendung beim Ursprungsserver zu validieren.

```http
Cache-Control: no-cache
```

`no-cache` erlaubt es Clients, die aktuellste Antwort anzufordern, selbst wenn der Cache eine [aktuelle](/de/docs/Web/HTTP/Caching#fresh_and_stale_based_on_age) Antwort hat.

Browser fügen Anfragen normalerweise `no-cache` hinzu, wenn Benutzer eine Seite **erzwingen neu laden**.

#### `no-store`

Die `no-store` Anforderungsdirektive erlaubt es einem Client, anzufordern, dass Caches das Speichern der Anfrage und der zugehörigen Antwort unterlassen – selbst wenn die Antwort des Ursprungsservers gespeichert werden könnte.

```http
Cache-Control: no-store
```

#### `max-age`

Die `max-age=N` Anforderungsdirektive zeigt an, dass der Client eine gespeicherte Antwort zulässt, die innerhalb von _N_ Sekunden auf dem Ursprungsserver erstellt wurde – wobei _N_ eine nicht-negative ganze Zahl (einschließlich `0`) sein kann.

```http
Cache-Control: max-age=10800
```

Im obigen Fall, wenn die Antwort mit `Cache-Control: max-age=10800` älter als 3 Stunden ist (berechnet aus `max-age` und dem `Age` Header), könnte der Cache diese Antwort nicht wiederverwenden.

Viele Browser verwenden diese Direktive zum **Neuladen**, wie unten erklärt.

```http
Cache-Control: max-age=0
```

`max-age=0` ist ein Workaround für `no-cache`, weil viele alte (HTTP/1.0) Cache-Implementierungen `no-cache` nicht unterstützen. Kürzlich verwenden Browser immer noch `max-age=0` zum „Neuladen“ – aus Gründen der Abwärtskompatibilität – und alternativ `no-cache`, um ein „Erzwingen des Neuladens“ zu bewirken.

Wenn der `max-age`-Wert negativ ist (z.B. `-1`) oder keine ganze Zahl ist (z.B. `3599.99`), ist das Caching-Verhalten nicht spezifiziert. Caches werden dazu ermutigt, den Wert wie `0` zu behandeln.

#### `max-stale`

Die `max-stale=N` Anforderungsdirektive zeigt an, dass der Client eine gespeicherte Antwort zulässt, die innerhalb von _N_ Sekunden [veraltet](/de/docs/Web/HTTP/Caching#fresh_and_stale_based_on_age) ist. Wenn kein _N_ Wert angegeben ist, akzeptiert der Client eine veraltete Antwort jeden Alters.

```http
Cache-Control: max-stale=3600
```

Zum Beispiel zeigt eine Anfrage mit dem obigen Header an, dass der Browser eine veraltete Antwort aus dem Cache akzeptiert, die innerhalb der letzten Stunde abgelaufen ist.

Clients können diesen Header verwenden, wenn der Ursprungsserver ausgefallen oder zu langsam ist und können zwischengespeicherte Antworten von Caches akzeptieren, selbst wenn sie etwas älter sind.

Beachten Sie, dass die großen Browser keine Anforderungen mit `max-stale` unterstützen.

#### `min-fresh`

Die `min-fresh=N` Anforderungsdirektive zeigt an, dass der Client eine gespeicherte Antwort zulässt, die mindestens _N_ Sekunden lang [aktuell](/de/docs/Web/HTTP/Caching#fresh_and_stale_based_on_age) ist.

```http
Cache-Control: min-fresh=600
```

Im obigen Fall, wenn die Antwort mit `Cache-Control: max-age=3600` vor 51 Minuten in Caches gespeichert wurde, könnte der Cache diese Antwort nicht wiederverwenden.

Clients können diesen Header verwenden, wenn der Benutzer erfordert, dass die Antwort nicht nur [aktuell](/de/docs/Web/HTTP/Caching#fresh_and_stale_based_on_age) ist, sondern auch für einen Zeitraum nicht aktualisiert wird.

Beachten Sie, dass die großen Browser keine Anforderungen mit `min-fresh` unterstützen.

#### `no-transform`

Hat die gleiche Bedeutung wie `no-transform` für eine Antwort, aber stattdessen für eine Anfrage.

#### `only-if-cached`

Der Client gibt an, dass eine bereits im Cache vorhandene Antwort zurückgegeben werden soll. Wenn ein Cache eine gespeicherte Antwort hat, sogar eine veraltete, wird sie zurückgegeben. Ist keine zwischengespeicherte Antwort verfügbar, wird eine [504 Gateway Timeout](/de/docs/Web/HTTP/Status/504) Antwort zurückgegeben.

## Anwendungsfälle

### Speicherung verhindern

Wenn Sie nicht möchten, dass eine Antwort in Caches gespeichert wird, verwenden Sie die `no-store` Direktive.

```http
Cache-Control: no-store
```

Beachten Sie, dass `no-cache` bedeutet „es kann gespeichert werden, aber nicht wiederverwenden, bevor validiert wird“ – es ist also nicht dafür gedacht, eine Antwort vom Speichern abzuhalten.

```http example-bad
Cache-Control: no-cache
```

Theoretisch, wenn Direktiven im Widerspruch stehen, sollte die restriktivste Direktive geehrt werden. Das folgende Beispiel ist im Grunde genommen bedeutungslos, weil `private`, `no-cache`, `max-age=0` und `must-revalidate` im Widerspruch zu `no-store` stehen.

```http example-bad
# conflicted
Cache-Control: private, no-cache, no-store, max-age=0, must-revalidate

# equivalent to
Cache-Control: no-store
```

### Caching statischer Ressourcen mit "Cache Busting"

Wenn Sie statische Ressourcen mit Versionierungs-/Hashing-Mechanismen erstellen, ist das Hinzufügen einer Version/eines Hashs zum Dateinamen oder zur Abfragezeichenfolge eine gute Methode zur Verwaltung des Cachings.

Zum Beispiel:

```html
<!-- index.html -->
<script src="/assets/react.min.js"></script>
<img src="/assets/hero.png" width="900" height="400" />
```

Die React-Bibliotheksversion wird sich ändern, wenn Sie die Bibliothek aktualisieren, und `hero.png` wird sich auch ändern, wenn Sie das Bild bearbeiten. Daher ist es schwierig, sie in einem Cache mit `max-age` zu speichern.

In einem solchen Fall könnten Sie die Caching-Bedürfnisse durch die Verwendung einer spezifischen, nummerierten Version der Bibliothek ansprechen und den Hash des Bilds in seiner URL einschließen.

```html
<!-- index.html -->
<script src="/assets/react.0.0.0min.js"></script>
<img src="/assets/hero.png?hash=deadbeef" width="900" height="400" />
```

Sie können einen langen `max-age` Wert und `immutable` hinzufügen, weil die Inhalte nie geändert werden.

```http
# /assets/*
Cache-Control: max-age=31536000, immutable
```

Wenn Sie die Bibliothek aktualisieren oder das Bild bearbeiten, sollten neue Inhalte eine neue URL haben, und Caches werden nicht wiederverwendet. Das ist das sogenannte "Cache Busting"-Muster.

Verwenden Sie ein `no-cache`, um sicherzustellen, dass die HTML-Antwort selbst nicht zwischengespeichert wird. `no-cache` könnte eine erneute Validierung verursachen und der Client erhält korrekt eine neue Version der HTML-Antwort und statische Ressourcen.

```http
# /index.html
Cache-Control: no-cache
```

Hinweis: Wenn `index.html` unter Basisauthentifizierung oder Digest Authentifizierung kontrolliert wird, werden Dateien unter `/assets` nicht im geteilten Cache gespeichert. Wenn `/assets/` Dateien geeignet für das Speichern in einem geteilten Cache sind, benötigen Sie auch `public`, `s-maxage` oder `must-revalidate`.

### Immer aktuelle Inhalte

Für Inhalte, die dynamisch erzeugt werden, oder die statisch, aber oft aktualisiert werden, möchten Sie, dass ein Benutzer immer die aktuellste Version erhält.

Wenn Sie keinen `Cache-Control` Header hinzufügen, weil die Antwort nicht zwischengespeichert werden soll, könnte das zu einem unerwarteten Ergebnis führen. Cache-Speicher ist erlaubt, es heuristisch zu speichern – also wenn Sie Anforderungen an das Caching haben, sollten Sie sie immer ausdrücklich im `Cache-Control` Header angeben.

Das Hinzufügen von `no-cache` zur Antwort verursacht eine erneute Validierung beim Server, damit Sie immer eine [aktuelle](/de/docs/Web/HTTP/Caching#fresh_and_stale_based_on_age) Antwort bereitstellen können – oder wenn der Client bereits eine neue hat, einfach `304 Not Modified` antworten.

```http
Cache-Control: no-cache
```

Die meisten HTTP/1.0 Caches unterstützen `no-cache` Direktiven nicht, also wurde historisch `max-age=0` als Workaround verwendet. Aber nur `max-age=0` könnte dazu führen, dass eine [veraltete Antwort](/de/docs/Web/HTTP/Caching#fresh_and_stale_based_on_age) wiederverwendet wird, wenn Caches vom Ursprungsserver getrennt sind. `must-revalidate` behebt das. Deshalb ist das folgende Beispiel gleichbedeutend mit `no-cache`.

```http
Cache-Control: max-age=0, must-revalidate
```

Aber jetzt können Sie einfach `no-cache` verwenden.

### Löschen eines bereits gespeicherten Caches

Leider gibt es keine Cache-Direktiven zum Löschen bereits gespeicherter Antworten aus Caches.

Stellen Sie sich vor, dass Clients/Caches eine [aktuelle](/de/docs/Web/HTTP/Caching#fresh_and_stale_based_on_age) Antwort für einen Pfad speichern, ohne dass eine Anfrage an den Server gesendet wird. Es gibt nichts, was ein Server gegen diesen Pfad tun könnte.

Alternativ kann `Clear-Site-Data` einen Browser-Cache für eine Website löschen. Aber Vorsicht: das löscht jede gespeicherte Antwort für eine Seite – und zwar nur in Browsern, nicht für einen geteilten Cache.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [HTTP-Caching](/de/docs/Web/HTTP/Caching)
- [Caching Tutorial for Web Authors and Webmasters](https://www.mnot.net/cache_docs/)
- [Caching best practices & max-age gotchas](https://jakearchibald.com/2016/caching-best-practices/)
- [Cache-Control for Civilians](https://csswizardry.com/2019/03/cache-control-for-civilians/)
- [RFC 9111 – HTTP Caching](https://httpwg.org/specs/rfc9111.html)
- [RFC 5861 – HTTP Cache-Control Extensions for Stale Content](https://httpwg.org/specs/rfc5861.html)
- [RFC 8246 – HTTP Immutable Responses](https://httpwg.org/specs/rfc8246.html)
