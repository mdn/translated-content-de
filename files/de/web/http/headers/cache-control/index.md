---
title: Cache-Control
slug: Web/HTTP/Headers/Cache-Control
l10n:
  sourceCommit: 442db82028668b17b888ee439468ae2ac9d589a5
---

{{HTTPSidebar}}

Der HTTP-Header **`Cache-Control`** enthält _Direktiven_ (Anweisungen) in sowohl Anfragen als auch Antworten, die das [Caching](/de/docs/Web/HTTP/Caching) in Browsern und gemeinsamen Caches (z. B. Proxies, CDNs) steuern.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>
        {{Glossary("Request_header", "Anfrage-Header")}},
        {{Glossary("Response_header", "Antwort-Header")}}
      </td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_request_header", "Verbotener Anfrage-Header")}}</th>
      <td>Nein</td>
    </tr>
    <tr>
      <th scope="row">
        {{Glossary("CORS-safelisted_response_header", "CORS-freigegebener Antwort-Header")}}
      </th>
      <td>Ja</td>
    </tr>
  </tbody>
</table>

## Syntax

Cache-Direktiven folgen diesen Regeln:

- Cache-Direktiven sind nicht case-sensitiv. Allerdings wird Kleinschreibung empfohlen, da einige Implementierungen Großbuchstaben möglicherweise nicht erkennen.
- Mehrere Direktiven sind erlaubt und müssen durch Kommas getrennt werden (z. B. `Cache-control: max-age=180, public`).
- Einige Direktiven haben ein optionales Argument. Wenn ein Argument bereitgestellt wird, ist es durch ein Gleichheitszeichen (`=`) vom Direktivenname getrennt. Typischerweise sind Argumente für die Direktiven ganze Zahlen und daher nicht in Anführungszeichen eingeschlossen (z. B. `Cache-control: max-age=12`).

### Cache-Direktiven

Die folgende Tabelle listet die standardmäßigen `Cache-Control`-Direktiven auf:

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

## Begriffsverzeichnis

In diesem Abschnitt werden die in diesem Dokument verwendeten Begriffe definiert, von denen einige aus der Spezifikation stammen.

- (HTTP-) Cache
  - : Implementierung, die Anfragen und Antworten speichert, um sie bei nachfolgenden Anfragen wiederzuverwenden. Es kann sich um einen geteilten Cache oder um einen privaten Cache handeln.
- Geteilter Cache
  - : Ein Cache, der zwischen dem Ursprungsserver und den Clients existiert (z. B. Proxy, CDN). Er speichert eine einzige Antwort und verwendet sie für mehrere Benutzer wieder - Entwickler sollten also vermeiden, personalisierte Inhalte im geteilten Cache zu speichern.
- Privater Cache
  - : Ein Cache, der im Client existiert. Er wird auch als _lokaler Cache_ oder _Browser-Cache_ bezeichnet. Er kann personalisierte Inhalte für einen einzelnen Benutzer speichern und wiederverwenden.
- Antwort speichern
  - : Eine Antwort in Caches speichern, wenn die Antwort cachefähig ist. Allerdings wird die zwischengespeicherte Antwort nicht immer so wiederverwendet, wie sie ist. (In der Regel bedeutet "cache" das Speichern einer Antwort.)
- Antwort wiederverwenden
  - : Zwischengespeicherte Antworten für nachfolgende Anfragen wiederverwenden.
- Antwort erneut validieren
  - : Den Ursprungsserver fragen, ob die gespeicherte Antwort noch [aktuell](/de/docs/Web/HTTP/Caching#fresh_and_stale_based_on_age) ist. In der Regel erfolgt die erneute Validierung durch eine bedingte Anfrage.
- Aktuelle Antwort
  - : Gibt an, dass die Antwort [aktuell](/de/docs/Web/HTTP/Caching#fresh_and_stale_based_on_age) ist. Dies bedeutet normalerweise, dass die Antwort für nachfolgende Anfragen wiederverwendet werden kann, abhängig von den Anfragedirektiven.
- Veraltete Antwort
  - : Gibt an, dass die Antwort eine [veraltete Antwort](/de/docs/Web/HTTP/Caching#fresh_and_stale_based_on_age) ist. Dies bedeutet normalerweise, dass die Antwort nicht so wiedergangsd worden kann, wie sie ist. Ein Cache muss veraltete Antworten nicht sofort entfernen, da eine erneute Validierung die Antwort von veraltet zu [aktuell](/de/docs/Web/HTTP/Caching#fresh_and_stale_based_on_age) ändern könnte.
- Alter
  - : Die Zeit, die seit der Generierung einer Antwort vergangen ist. Sie ist ein Kriterium dafür, ob eine Antwort [aktuell oder veraltet](/de/docs/Web/HTTP/Caching#fresh_and_stale_based_on_age) ist.

## Direktiven

In diesem Abschnitt werden die Direktiven aufgelistet, die sich auf das Caching auswirken – sowohl Antwortdirektiven als auch Anfragedirektiven.

### Antwortdirektiven

#### `max-age`

Die `max-age=N`-Antwortdirektive gibt an, dass die Antwort _N_ Sekunden nach der Generierung [aktuell](/de/docs/Web/HTTP/Caching#fresh_and_stale_based_on_age) bleibt.

```http
Cache-Control: max-age=604800
```

Gibt an, dass Caches diese Antwort speichern und für nachfolgende Anfragen wiederverwenden können, solange sie [aktuell](/de/docs/Web/HTTP/Caching#fresh_and_stale_based_on_age) ist.

Beachten Sie, dass `max-age` nicht die verstrichene Zeit seit Erhalt der Antwort ist, sondern die verstrichene Zeit seit der Generierung der Antwort auf dem Ursprungsserver.
Wenn andere Caches — auf dem Netzweg, der von der Antwort zurückgelegt wurde — die Antwort 100 Sekunden lang speichern (angezeigt durch das `Age`-Antwortheaderfeld), zieht der Browser-Cache 100 Sekunden von seiner [Aktualitätsdauer](/de/docs/Web/HTTP/Caching#fresh_and_stale_based_on_age) ab.

Ist der `max-age`-Wert negativ (z. B. `-1`) oder kein ganzzahliger Wert (z. B. `3599.99`), ist das Caching-Verhalten nicht spezifiziert. Caches wird empfohlen, den Wert so zu behandeln, als wäre er `0` (dies wird im Abschnitt [Calculating Freshness Lifetime](https://httpwg.org/specs/rfc9111.html#calculating.freshness.lifetime) der HTTP-Spezifikation erwähnt).

```http
Cache-Control: max-age=604800
Age: 100
```

#### `s-maxage`

Die `s-maxage`-Antwortdirektive gibt an, wie lange die Antwort [aktuell](/de/docs/Web/HTTP/Caching#fresh_and_stale_based_on_age) in einem geteilten Cache bleibt.
Die `s-maxage`-Direktive wird von privaten Caches ignoriert und überschreibt den durch die `max-age`-Direktive oder den `Expires`-Header für geteilte Caches spezifizierten Wert, falls diese vorhanden sind.

```http
Cache-Control: s-maxage=604800
```

#### `no-cache`

Die `no-cache`-Antwortdirektive gibt an, dass die Antwort in Caches gespeichert werden kann, jedoch muss die Antwort vor jeder Wiederverwendung mit dem Ursprungsserver validiert werden, auch wenn der Cache vom Ursprungsserver getrennt ist.

```http
Cache-Control: no-cache
```

Wenn Sie möchten, dass Caches immer auf Inhaltsaktualisierungen prüfen, während sie gespeicherte Inhalte wiederverwenden, ist `no-cache` die zu verwendende Direktive. Sie tut dies, indem sie Caches zwingt, jede Anfrage mit dem Ursprungsserver zu validieren.

Beachten Sie, dass `no-cache` nicht "nicht cachen" bedeutet. `no-cache` erlaubt Caches, eine Antwort zu speichern, erfordert jedoch, dass sie vor der Wiederverwendung erneut validiert wird. Wenn Sie im Sinne von "nicht cachen" tätig werden möchten, bedeutet dies, dass die Antwort nicht gespeichert werden soll, dann verwenden Sie die `no-store`-Direktive.

#### `must-revalidate`

Die `must-revalidate`-Antwortdirektive gibt an, dass die Antwort in Caches gespeichert und wiederverwendet werden kann, solange sie [aktuell](/de/docs/Web/HTTP/Caching#fresh_and_stale_based_on_age) ist. Wenn die Antwort [veraltet](/de/docs/Web/HTTP/Caching#fresh_and_stale_based_on_age) wird, muss sie vor der Wiederverwendung mit dem Ursprungsserver validiert werden.

Typischerweise wird `must-revalidate` mit `max-age` verwendet.

```http
Cache-Control: max-age=604800, must-revalidate
```

HTTP erlaubt Caches, [veraltete Antworten](/de/docs/Web/HTTP/Caching#fresh_and_stale_based_on_age) wiederzuverwenden, wenn sie vom Ursprungsserver getrennt sind. `must-revalidate` ist eine Möglichkeit, dies zu verhindern - entweder wird die gespeicherte Antwort mit dem Ursprungsserver validiert oder es wird eine 504 (Gateway-Timeout)-Antwort generiert.

#### `proxy-revalidate`

Die `proxy-revalidate`-Antwortdirektive ist das Äquivalent zu `must-revalidate`, gilt jedoch speziell nur für geteilte Caches.

#### `no-store`

Die `no-store`-Antwortdirektive gibt an, dass Caches jeglicher Art (privat oder geteilt) diese Antwort nicht speichern sollten.

```http
Cache-Control: no-store
```

#### `private`

Die `private`-Antwortdirektive gibt an, dass die Antwort nur in einem privaten Cache (z. B. lokale Caches in Browsern) gespeichert werden kann.

```http
Cache-Control: private
```

Sie sollten die `private`-Direktive für benutzerpersonalisierte Inhalte hinzufügen, insbesondere für Antworten, die nach der Anmeldung empfangen wurden und für Sitzungen, die über Cookies verwaltet werden.

Wenn Sie vergessen, `private` zu einer Antwort mit personalisierten Inhalten hinzuzufügen, kann diese in einem geteilten Cache gespeichert und möglicherweise für mehrere Benutzer wiederholt genutzt werden, was zu einem Leck persönlicher Informationen führen kann.

#### `public`

Die `public`-Antwortdirektive gibt an, dass die Antwort in einem geteilten Cache gespeichert werden kann. Antworten auf Anfragen mit `Authorization`-Header-Feldern dürfen nicht in einem geteilten Cache gespeichert werden; die `public`-Direktive wird jedoch dazu führen, dass solche Antworten in einem geteilten Cache gespeichert werden.

```http
Cache-Control: public
```

Im Allgemeinen senden Browser, wenn Seiten unter Basic Auth oder Digest Auth stehen, Anfragen mit dem `Authorization`-Header. Dies bedeutet, dass die Antwort für eingeschränkte Benutzer (die Konten haben) zugriffskontrolliert ist und grundsätzlich nicht geteilt-cachefähig ist, selbst wenn sie `max-age` enthält.

Sie können die `public`-Direktive verwenden, um diese Einschränkung aufzuheben.

```http
Cache-Control: public, max-age=604800
```

Beachten Sie, dass `s-maxage` oder `must-revalidate` diese Einschränkung ebenfalls aufheben.

Wenn eine Anfrage keinen `Authorization`-Header hat oder Sie bereits `s-maxage` oder `must-revalidate` in der Antwort verwenden, müssen Sie `public` nicht verwenden.

#### `must-understand`

Die `must-understand`-Antwortdirektive gibt an, dass ein Cache die Antwort nur speichern sollte, wenn er die Anforderungen für das Caching basierend auf dem Statuscode versteht.

`must-understand` sollte mit `no-store` für das Fallback-Verhalten gekoppelt werden.

```http
Cache-Control: must-understand, no-store
```

Wenn ein Cache `must-understand` nicht unterstützt, wird es ignoriert. Wenn `no-store` ebenfalls vorhanden ist, wird die Antwort nicht gespeichert.

Wenn ein Cache `must-understand` unterstützt, speichert er die Antwort mit dem Verständnis der Caching-Anforderungen basierend auf ihrem Statuscode.

#### `no-transform`

Einige Intermediäre transformieren Inhalte aus verschiedenen Gründen. Beispielsweise konvertieren einige Bilder, um die Übertragungsgröße zu reduzieren. In einigen Fällen ist dies für den Inhaltsanbieter unerwünscht.

`no-transform` gibt an, dass kein Intermediär (unabhängig davon, ob er einen Cache implementiert oder nicht) die Antwortinhalte transformieren sollte.

#### `immutable`

Die `immutable`-Antwortdirektive gibt an, dass die Antwort nicht aktualisiert wird, solange sie [aktuell](/de/docs/Web/HTTP/Caching#fresh_and_stale_based_on_age) ist.

```http
Cache-Control: public, max-age=604800, immutable
```

Eine moderne Best Practice für statische Ressourcen besteht darin, Versionen/Hashes in ihre URLs einzufügen, während die Ressourcen niemals verändert werden — sondern stattdessen, wenn nötig, die Ressourcen mit neueren Versionen zu _aktualisieren_, die neue Versionsnummern/Hashes haben, sodass ihre URLs unterschiedlich sind. Das wird **Cache-Busting**-Muster genannt.

```html
<script src="https://example.com/react.0.0.0.js"></script>
```

Wenn ein Benutzer den Browser neu lädt, sendet der Browser bedingte Anfragen zur Validierung an den Ursprungsserver. Es ist jedoch nicht notwendig, diese Arten von statischen Ressourcen erneut zu validieren, selbst wenn ein Benutzer den Browser neu lädt, da sie nie verändert werden.
`immutable` sagt einem Cache, dass die Antwort unveränderlich ist, solange sie [aktuell](/de/docs/Web/HTTP/Caching#fresh_and_stale_based_on_age) ist, und vermeidet diese unnötigen bedingten Anfragen an den Server.

Wenn Sie für Ressourcen ein Cache-Busting-Muster verwenden und ihnen eine lange `max-age` zuweisen, können Sie auch `immutable` hinzufügen, um die erneute Validierung zu vermeiden.

#### `stale-while-revalidate`

Die `stale-while-revalidate`-Antwortdirektive gibt an, dass der Cache eine veraltete Antwort wiederverwenden könnte, während er sie in einem Cache erneuert.

```http
Cache-Control: max-age=604800, stale-while-revalidate=86400
```

Im obigen Beispiel ist die Antwort für 7 Tage (604800s) [aktuell](/de/docs/Web/HTTP/Caching#fresh_and_stale_based_on_age).
Nach 7 Tagen wird sie [veraltet](/de/docs/Web/HTTP/Caching#fresh_and_stale_based_on_age), aber der Cache darf sie für Anfragen, die am folgenden Tag (86400s) gestellt werden, verwenden, vorausgesetzt, sie validieren die Antwort im Hintergrund erneut.

Die erneute Validierung macht den Cache erneut [aktuell](/de/docs/Web/HTTP/Caching#fresh_and_stale_based_on_age), sodass es den Clients erscheint, als wäre er während dieser Zeit immer [aktuell](/de/docs/Web/HTTP/Caching#fresh_and_stale_based_on_age) gewesen — und effektiv das Latenzproblem der erneuten Validierung für sie versteckt.

Wenn während dieser Zeit keine Anfrage stattfand, wurde der Cache [veraltet](/de/docs/Web/HTTP/Caching#fresh_and_stale_based_on_age) und die nächste Anfrage wird normal neu validiert.

#### `stale-if-error`

Die `stale-if-error`-Antwortdirektive gibt an, dass der Cache eine [veraltete Antwort](/de/docs/Web/HTTP/Caching#fresh_and_stale_based_on_age) wiederverwenden kann, wenn ein upstream-Server einen Fehler generiert oder wenn der Fehler lokal generiert wird. Hierbei wird ein Fehler als jede Antwort mit einem Statuscode von 500, 502, 503 oder 504 betrachtet.

```http
Cache-Control: max-age=604800, stale-if-error=86400
```

Im obigen Beispiel ist die Antwort für 7 Tage (604800s) [aktuell](/de/docs/Web/HTTP/Caching#fresh_and_stale_based_on_age). Danach wird sie [veraltet](/de/docs/Web/HTTP/Caching#fresh_and_stale_based_on_age), kann aber bei einem Fehler für einen zusätzlichen Tag (86400s) verwendet werden.

Nach Ablauf der `stale-if-error`-Periode erhält der Client jeden generierten Fehler.

### Anfragedirektiven

#### `no-cache`

Die `no-cache`-Anfragedirektive fordert Caches auf, die Antwort vor der Wiederverwendung mit dem Ursprungsserver zu validieren.

```http
Cache-Control: no-cache
```

`no-cache` ermöglicht Clients, die aktuellste Antwort anzufordern, selbst wenn der Cache eine [aktuelle](/de/docs/Web/HTTP/Caching#fresh_and_stale_based_on_age) Antwort hat.

Browser fügen Anfragen normalerweise ein `no-cache` hinzu, wenn Benutzer eine Seite **erzwungen neu laden**.

#### `no-store`

Die `no-store`-Anfragedirektive erlaubt es einem Client, Caches aufzufordern, das Anforderung und die entsprechende Antwort nicht zu speichern — selbst, wenn die Antwort des Ursprungsservers gespeichert werden könnte.

```http
Cache-Control: no-store
```

#### `max-age`

Die `max-age=N`-Anfragedirektive gibt an, dass der Client eine gespeicherte Antwort akzeptiert, die auf dem Ursprungsserver innerhalb von _N_ Sekunden generiert wurde — wobei _N_ jede nicht negative ganze Zahl (einschließlich `0`) sein kann.

```http
Cache-Control: max-age=10800
```

Im oben genannten Fall, wenn die Antwort mit `Cache-Control: max-age=10800` vor mehr als 3 Stunden generiert wurde (berechnet aus `max-age` und dem `Age`-Header), könnte der Cache diese Antwort nicht wiederverwenden.

Viele Browser verwenden diese Direktive zum **Neuladen**, wie unten erläutert.

```http
Cache-Control: max-age=0
```

`max-age=0` ist ein Workaround für `no-cache`, da viele alte (HTTP/1.0) Cache-Implementierungen `no-cache` nicht unterstützen. Kürzlich verwenden Browser immer noch `max-age=0` beim "Neuladen" — für die Abwärtskompatibilität — und verwenden alternativ `no-cache`, um ein "erzwungenes Neuladen" zu bewirken.

Wenn der `max-age`-Wert negativ (z. B. `-1`) oder kein ganzzahliger Wert (z. B. `3599.99`) ist, ist das Caching-Verhalten nicht spezifiziert. Es wird empfohlen, den Wert so zu behandeln, als wäre es `0`.

#### `max-stale`

Die `max-stale=N`-Anfragedirektive gibt an, dass der Client eine gespeicherte Antwort akzeptiert, die innerhalb von _N_ Sekunden [veraltet](/de/docs/Web/HTTP/Caching#fresh_and_stale_based_on_age) ist.
Wenn kein _N_-Wert angegeben wird, akzeptiert der Client eine veraltete Antwort jeden Alters.

```http
Cache-Control: max-stale=3600
```

Beispielsweise gibt eine Anfrage mit dem obigen Header an, dass der Browser eine veraltete Antwort aus dem Cache akzeptiert, die innerhalb der letzten Stunde abgelaufen ist.

Clients können diesen Header verwenden, wenn der Ursprungsserver ausgefallen oder zu langsam ist und zwischengespeicherte Antworten von Caches akzeptiert werden können, selbst wenn sie etwas älter sind.

Beachten Sie, dass die großen Browser Anforderungen mit `max-stale` nicht unterstützen.

#### `min-fresh`

Die `min-fresh=N`-Anfragedirektive gibt an, dass der Client eine gespeicherte Antwort akzeptiert, die für mindestens _N_ Sekunden [aktuell](/de/docs/Web/HTTP/Caching#fresh_and_stale_based_on_age) ist.

```http
Cache-Control: min-fresh=600
```

Im obigen Fall, wenn die Antwort mit `Cache-Control: max-age=3600` vor 51 Minuten in Caches gespeichert wurde, könnte der Cache diese Antwort nicht wiederverwenden.

Clients können diesen Header verwenden, wenn der Benutzer erfordert, dass die Antwort nicht nur [aktuell](/de/docs/Web/HTTP/Caching#fresh_and_stale_based_on_age) ist, sondern auch, dass sie für eine gewisse Zeit nicht aktualisiert wird.

Beachten Sie, dass die großen Browser Anforderungen mit `min-fresh` nicht unterstützen.

#### `no-transform`

Bedeutung wie `no-transform` für eine Antwort, jedoch für eine Anfrage.

#### `only-if-cached`

Der Client gibt an, dass eine bereits zwischengespeicherte Antwort zurückgegeben werden soll. Wenn ein Cache eine gespeicherte Antwort hat, selbst eine veraltete, wird sie zurückgegeben. Wenn keine zwischengespeicherte Antwort verfügbar ist, wird eine [504 Gateway Timeout](/de/docs/Web/HTTP/Status/504) Antwort zurückgegeben.

## Anwendungsfälle

### Verhindern des Speicherns

Wenn Sie nicht möchten, dass eine Antwort in Caches gespeichert wird, verwenden Sie die `no-store`-Direktive.

```http
Cache-Control: no-store
```

Beachten Sie, dass `no-cache` bedeutet "es kann gespeichert werden, aber nicht ohne Validierung wiederverwendet werden" — es verhindert nicht, dass eine Antwort gespeichert wird.

```http example-bad
Cache-Control: no-cache
```

Theoretisch sollte bei widersprüchlichen Direktiven die restriktivste Direktive eingehalten werden. Das folgende Beispiel ist also im Grunde bedeutungslos, da `private`, `no-cache`, `max-age=0` und `must-revalidate` `no-store` widersprechen.

```http example-bad
# conflicted
Cache-Control: private, no-cache, no-store, max-age=0, must-revalidate

# equivalent to
Cache-Control: no-store
```

### Caching von statischen Assets mit "Cache-Busting"

Wenn Sie statische Assets mit einer Versions-/Hashing-Mechanik erstellen, ist das Hinzufügen einer Versionsnummer/eines Hashes zum Dateinamen oder zur Abfragezeichenfolge eine gute Möglichkeit, das Caching zu verwalten.

Beispielsweise:

```html
<!-- index.html -->
<script src="/assets/react.min.js"></script>
<img src="/assets/hero.png" width="900" height="400" />
```

Die Version der React-Bibliothek wird sich ändern, wenn Sie die Bibliothek aktualisieren, und auch `hero.png` wird sich ändern, wenn Sie das Bild bearbeiten. Das macht es schwierig, sie mit `max-age` zu cachen.

In einem solchen Fall könnten Sie den Caching-Bedarf adressieren, indem Sie eine spezifische, nummerierte Version der Bibliothek verwenden und den Hash des Bildes in die URL einfügen.

```html
<!-- index.html -->
<script src="/assets/react.0.0.0min.js"></script>
<img src="/assets/hero.png?hash=deadbeef" width="900" height="400" />
```

Sie können einen langen `max-age`-Wert und `immutable` hinzufügen, weil sich der Inhalt niemals ändern wird.

```http
# /assets/*
Cache-Control: max-age=31536000, immutable
```

Wenn Sie die Bibliothek aktualisieren oder das Bild bearbeiten, sollte neuer Inhalt eine neue URL haben, und Caches werden nicht wiederverwendet. Das wird das "Cache-Busting"-Muster genannt.

Verwenden Sie ein `no-cache`, um sicherzustellen, dass die HTML-Antwort selbst nicht zwischengespeichert wird. `no-cache` könnte eine erneute Validierung verursachen, und der Client erhält korrekt eine neue Version der HTML-Antwort und der statischen Assets.

```http
# /index.html
Cache-Control: no-cache
```

Hinweis: Wenn `index.html` unter Basis-Authentifizierung oder Digest-Authentifizierung kontrolliert wird, werden Dateien unter `/assets` nicht im geteilten Cache gespeichert. Wenn `/assets/`-Dateien für die Speicherung im geteilten Cache geeignet sind, benötigen Sie außerdem eines von `public`, `s-maxage` oder `must-revalidate`.

### Immer aktuelle Inhalte

Für Inhalte, die dynamisch generiert werden oder die statisch sind, jedoch häufig aktualisiert werden, möchten Sie, dass ein Benutzer immer die aktuellste Version erhält.

Wenn Sie keinen `Cache-Control`-Header hinzufügen, weil die Antwort nicht gecacht werden soll, könnte das zu einem unerwarteten Ergebnis führen. Es ist erlaubt, Cache-Speicher heuristisch zu cachen — daher sollten Sie, wenn Sie Anforderungen an das Caching haben, diese immer explizit im `Cache-Control`-Header angeben.

Das Hinzufügen von `no-cache` zur Antwort verursacht eine erneute Validierung mit dem Server, sodass Sie jedes Mal eine [aktuelle](/de/docs/Web/HTTP/Caching#fresh_and_stale_based_on_age) Antwort bereitstellen können – oder wenn der Client bereits eine neue hat, einfach `304 Not Modified` zurückgeben.

```http
Cache-Control: no-cache
```

Die meisten HTTP/1.0 Caches unterstützen keine `no-cache`-Direktiven, daher wurde historisch `max-age=0` als Workaround verwendet. Aber nur `max-age=0` könnte zu einer Verwendung einer [veralteten Antwort](/de/docs/Web/HTTP/Caching#fresh_and_stale_based_on_age) führen, wenn Caches vom Ursprungsserver getrennt sind. `must-revalidate` adressiert das. Deshalb ist das folgende Beispiel äquivalent zu `no-cache`.

```http
Cache-Control: max-age=0, must-revalidate
```

Aber jetzt können Sie einfach `no-cache` verwenden.

### Löschen eines bereits gespeicherten Caches

Es gibt keine Cache-Direktiven zum Löschen bereits gespeicherter Antworten auf _intermediären_ Servern.

Stellen Sie sich vor, dass Clients/Caches eine [aktuelle](/de/docs/Web/HTTP/Caching#fresh_and_stale_based_on_age) Antwort für einen Pfad speichern, ohne eine Anfrage an den Server zu senden. Der Server kann nichts gegen diesen Pfad tun.

[`Clear-Site-Data: cache`](/de/docs/Web/HTTP/Headers/Clear-Site-Data#cache) kann verwendet werden, um jede gespeicherte Antwort für eine Seite im Browser-Cache zu löschen, daher verwenden Sie dies mit Vorsicht.
Beachten Sie, dass dies nicht die geteilten oder intermediären Caches betrifft.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [HTTP-Caching](/de/docs/Web/HTTP/Caching)
- [Caching-Tutorial für Web-Autoren und Webmaster](https://www.mnot.net/cache_docs/)
- [Caching Best Practices & Max-Age Gotchas](https://jakearchibald.com/2016/caching-best-practices/)
- [Cache-Control für Zivilisten](https://csswizardry.com/2019/03/cache-control-for-civilians/)
- [RFC 9111 – HTTP-Caching](https://httpwg.org/specs/rfc9111.html)
- [RFC 5861 – HTTP Cache-Control Extensions for Stale Content](https://httpwg.org/specs/rfc5861.html)
- [RFC 8246 – HTTP Immutable Responses](https://httpwg.org/specs/rfc8246.html)
