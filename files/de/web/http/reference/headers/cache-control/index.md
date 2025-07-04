---
title: Cache-Control header
short-title: Cache-Control
slug: Web/HTTP/Reference/Headers/Cache-Control
l10n:
  sourceCommit: ad5b5e31f81795d692e66dadb7818ba8b220ad15
---

Der HTTP-Header **`Cache-Control`** enthält _Direktiven_ (Anweisungen) in sowohl Anfragen als auch Antworten, die das [Caching](/de/docs/Web/HTTP/Guides/Caching) in Browsern und gemeinsamen Caches (z.B. Proxies, CDNs) steuern.

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
        {{Glossary("CORS-safelisted_response_header", "CORS-safelisted Response-Header")}}
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

- Caching-Direktiven sind nicht case-sensitiv. Es wird jedoch Kleinbuchstaben empfohlen, da einige Implementierungen keine Großbuchstabenschrift erkennen.
- Mehrere Direktiven sind erlaubt und müssen durch Kommas getrennt werden (z.B. `Cache-control: max-age=180, public`).
- Einige Direktiven haben ein optionales Argument. Wenn ein Argument bereitgestellt wird, wird es durch ein Gleichheitszeichen (`=`) vom Direktivnamen getrennt. Typischerweise sind Argumente für die Direktiven Ganzzahlen und daher nicht in Anführungszeichen eingeschlossen (z.B. `Cache-control: max-age=12`).

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

In diesem Abschnitt werden die in diesem Dokument verwendeten Begriffe definiert, von denen einige aus der Spezifikation stammen.

- (HTTP-)Cache
  - : Implementation, die Anfragen und Antworten für die Wiederverwendung bei nachfolgenden Anfragen hält. Es kann entweder ein gemeinsamer Cache oder ein privater Cache sein.
- Gemeinsamer Cache
  - : Cache, der zwischen dem Ursprungserver und Klienten existiert (z.B. Proxy, CDN). Er speichert eine einzelne Antwort und verwendet sie mit mehreren Benutzern — daher sollten Entwickler vermeiden, personalisierte Inhalte im gemeinsamen Cache zu speichern.
- Privater Cache
  - : Cache, der im Klienten existiert. Er wird auch _lokaler Cache_ oder _Browsercache_ genannt. Er kann personalisierte Inhalte für einen einzelnen Benutzer speichern und wiederverwenden.
- Antwort speichern
  - : Eine Antwort in Caches speichern, wenn die Antwort gecacht werden kann. Jedoch wird die gecachte Antwort nicht immer unverändert wiederverwendet. (Normalerweise bedeutet "cache", eine Antwort zu speichern.)
- Antwort wiederverwenden
  - : Gecachte Antworten für nachfolgende Anfragen wiederverwenden.
- Antwort revalidieren
  - : Den Ursprungserver fragen, ob die gespeicherte Antwort noch [aktuell](/de/docs/Web/HTTP/Guides/Caching#fresh_and_stale_based_on_age) ist. Normalerweise erfolgt die Revalidierung durch eine bedingte Anfrage.
- Aktuelle Antwort
  - : Zeigt an, dass die Antwort [aktuell](/de/docs/Web/HTTP/Guides/Caching#fresh_and_stale_based_on_age) ist. Dies bedeutet normalerweise, dass die Antwort für nachfolgende Anfragen wiederverwendet werden kann, abhängig von den Anfragedirektiven.
- Veraltete Antwort
  - : Zeigt an, dass die Antwort eine [veraltete Antwort](/de/docs/Web/HTTP/Guides/Caching#fresh_and_stale_based_on_age) ist. Dies bedeutet normalerweise, dass die Antwort nicht unverändert wiederverwendet werden kann. Cache-Speicher ist nicht verpflichtet, veraltete Antworten sofort zu entfernen, da eine Revalidierung die Antwort wieder von veraltet zu [aktuell](/de/docs/Web/HTTP/Guides/Caching#fresh_and_stale_based_on_age) ändern könnte.
- Alter
  - : Die Zeit seit der Generierung einer Antwort. Sie ist ein Kriterium dafür, ob eine Antwort [aktuell oder veraltet](/de/docs/Web/HTTP/Guides/Caching#fresh_and_stale_based_on_age) ist.

## Direktiven

In diesem Abschnitt werden Direktiven aufgelistet, die sich auf das Caching auswirken — sowohl Antwortdirektiven als auch Anfragedirektiven.

### Antwortdirektiven

#### `max-age`

Die `max-age=N`-Antwortdirektive gibt an, dass die Antwort _N_ Sekunden nach ihrer Generierung [aktuell](/de/docs/Web/HTTP/Guides/Caching#fresh_and_stale_based_on_age) bleibt.

```http
Cache-Control: max-age=604800
```

Gibt an, dass Caches diese Antwort speichern und für nachfolgende Anfragen wiederverwenden können, solange sie [aktuell](/de/docs/Web/HTTP/Guides/Caching#fresh_and_stale_based_on_age) ist.

Beachten Sie, dass `max-age` nicht die verstrichene Zeit ist, seit die Antwort empfangen wurde, sondern die verstrichene Zeit, seit die Antwort auf dem Ursprungserver generiert wurde.
Wenn der andere Cache(s) — auf dem Netzwerkpfad, den die Antwort genommen hat — die Antwort für 100 Sekunden speichert (angezeigt durch das `Alter`-Antwort-Header-Feld), würde der Browser-Cache 100 Sekunden von seiner [Aktualitätslebensdauer](/de/docs/Web/HTTP/Guides/Caching#fresh_and_stale_based_on_age) abziehen.

Wenn der Wert von `max-age` negativ ist (zum Beispiel `-1`) oder kein ganzzahliger Wert ist (zum Beispiel `3599,99`), dann ist das Caching-Verhalten nicht spezifiziert. Caches wird empfohlen, den Wert so zu behandeln, als ob er `0` wäre (dies ist in dem Abschnitt [Berechnung der Aktualitätslebensdauer](https://httpwg.org/specs/rfc9111.html#calculating.freshness.lifetime) der HTTP-Spezifikation vermerkt).

```http
Cache-Control: max-age=604800
Age: 100
```

#### `s-maxage`

Die `s-maxage`-Antwortdirektive gibt an, wie lange die Antwort in einem gemeinsamen Cache [aktuell](/de/docs/Web/HTTP/Guides/Caching#fresh_and_stale_based_on_age) bleibt.
Die `s-maxage`-Direktive wird von privaten Caches ignoriert und überschreibt den Wert, der von der `max-age`-Direktive oder dem `Expires`-Header für gemeinsame Caches angegeben wird, falls vorhanden.

```http
Cache-Control: s-maxage=604800
```

#### `no-cache`

Die `no-cache`-Antwortdirektive gibt an, dass die Antwort in Caches gespeichert werden kann, aber die Antwort muss mit dem Ursprungserver validiert werden, bevor sie bei jeder Wiederverwendung verwendet wird, selbst wenn der Cache vom Ursprungserver getrennt ist.

```http
Cache-Control: no-cache
```

Wenn Sie möchten, dass Caches beim Wiederverwenden von gespeicherten Inhalten immer nach Inhaltsupdates suchen, ist `no-cache` die zu verwendende Direktive. Sie erreicht dies, indem sie von Caches verlangt, jede Anfrage mit dem Ursprungserver zu revalidieren.

Beachten Sie, dass `no-cache` nicht "nicht cachen" bedeutet. `no-cache` erlaubt es Caches, eine Antwort zu speichern, erfordert aber, dass sie sie vor der Wiederverwendung revalidieren. Wenn der Sinn von "nicht cachen", den Sie möchten, tatsächlich "nicht speichern" ist, dann ist `no-store` die zu verwendende Direktive.

#### `must-revalidate`

Die `must-revalidate`-Antwortdirektive gibt an, dass die Antwort in Caches gespeichert und verwendet werden kann, solange sie [aktuell](/de/docs/Web/HTTP/Guides/Caching#fresh_and_stale_based_on_age) ist. Wenn die Antwort [veraltet](/de/docs/Web/HTTP/Guides/Caching#fresh_and_stale_based_on_age) wird, muss sie vor der Wiederverwendung mit dem Ursprungserver validiert werden.

Typischerweise wird `must-revalidate` mit `max-age` verwendet.

```http
Cache-Control: max-age=604800, must-revalidate
```

HTTP erlaubt es Caches, [veraltete Antworten](/de/docs/Web/HTTP/Guides/Caching#fresh_and_stale_based_on_age) wiederzuverwenden, wenn sie vom Ursprungserver getrennt sind. `must-revalidate` ist eine Möglichkeit, dies zu verhindern - entweder wird die gespeicherte Antwort mit dem Ursprungserver revalidiert oder eine 504 (Gateway Timeout)-Antwort wird generiert.

#### `proxy-revalidate`

Die `proxy-revalidate`-Antwortdirektive ist das Äquivalent zu `must-revalidate`, aber speziell nur für gemeinsame Caches.

#### `no-store`

Die `no-store`-Antwortdirektive gibt an, dass kein Cache jeglicher Art (privat oder gemeinsam) diese Antwort speichern sollte.

```http
Cache-Control: no-store
```

#### `private`

Die `private`-Antwortdirektive gibt an, dass die Antwort nur in einem privaten Cache (z.B. lokalen Caches in Browsern) gespeichert werden kann.

```http
Cache-Control: private
```

Sie sollten die `private`-Direktive für benutzerpersonalisierte Inhalte hinzufügen, insbesondere für Antworten, die nach dem Login empfangen werden und für Sitzungen, die über Cookies verwaltet werden.

Wenn Sie vergessen, `private` zu einer Antwort mit personalisierten Inhalten hinzuzufügen, kann diese Antwort in einem gemeinsamen Cache gespeichert werden und am Ende für mehrere Benutzer wiederverwendet werden, was zu einem Leck von persönlichen Informationen führen kann.

#### `public`

Die `public`-Antwortdirektive gibt an, dass die Antwort in einem gemeinsamen Cache gespeichert werden kann. Antworten für Anfragen mit `Authorization`-Header-Feldern dürfen nicht in einem gemeinsamen Cache gespeichert werden; die `public`-Direktive wird jedoch dazu führen, dass solche Antworten in einem gemeinsamen Cache gespeichert werden.

```http
Cache-Control: public
```

Im Allgemeinen, wenn Seiten unter Basic Auth oder Digest Auth stehen, sendet der Browser Anfragen mit dem `Authorization`-Header. Das bedeutet, dass die Antwort für eingeschränkte Benutzer (die Konten haben) kontrolliert wird und grundsätzlich nicht im gemeinsamen Cache gespeichert werden kann, selbst wenn sie `max-age` hat.

Sie können die `public`-Direktive verwenden, um diese Einschränkung aufzuheben.

```http
Cache-Control: public, max-age=604800
```

Beachten Sie, dass `s-maxage` oder `must-revalidate` diese Einschränkung ebenfalls aufheben.

Wenn eine Anfrage keinen `Authorization`-Header hat oder Sie bereits `s-maxage` oder `must-revalidate` in der Antwort verwenden, müssen Sie `public` nicht verwenden.

#### `must-understand`

Die `must-understand`-Antwortdirektive gibt an, dass ein Cache die Antwort nur speichern sollte, wenn er die Anforderungen für das Caching basierend auf dem Statuscode versteht.

`must-understand` sollte mit `no-store` für Fallback-Verhalten gekoppelt werden.

```http
Cache-Control: must-understand, no-store
```

Wenn ein Cache `must-understand` nicht unterstützt, wird es ignoriert. Wenn `no-store` ebenfalls vorhanden ist, wird die Antwort nicht gespeichert.

Wenn ein Cache `must-understand` unterstützt, speichert es die Antwort mit Verständnis der Cache-Anforderungen basierend auf ihrem Statuscode.

#### `no-transform`

Einige Zwischeninstanzen transformieren Inhalte aus verschiedenen Gründen. Zum Beispiel konvertieren einige Bilder, um die Übertragungsgröße zu reduzieren. In einigen Fällen ist dies für den Inhaltsanbieter unerwünscht.

`no-transform` gibt an, dass keine Zwischeninstanz (unabhängig davon, ob sie einen Cache implementiert) die Antwortinhalte transformieren sollte.

#### `immutable`

Die `immutable`-Antwortdirektive gibt an, dass die Antwort nicht aktualisiert wird, solange sie [aktuell](/de/docs/Web/HTTP/Guides/Caching#fresh_and_stale_based_on_age) ist.

```http
Cache-Control: public, max-age=604800, immutable
```

Eine moderne Best Practice für statische Ressourcen ist es, Versionen/Hashes in ihre URLs einzuschließen, während man die Ressourcen niemals modifiziert - sondern stattdessen, wenn nötig, die Ressourcen mit neueren Versionen zu aktualisieren, die neue Versionsnummern/Hashes haben, so dass sich ihre URLs unterscheiden. Das wird als **cache-busting**-Muster bezeichnet.

```html
<script src="https://example.com/react.0.0.0.js"></script>
```

Wenn ein Benutzer den Browser neu lädt, sendet der Browser bedingte Anfragen zur Validierung an den Ursprungserver. Aber es ist nicht notwendig, diese Art von statischen Ressourcen auch dann zu revalidieren, wenn ein Benutzer den Browser neu lädt, weil sie niemals modifiziert werden.
`immutable` teilt einem Cache mit, dass die Antwort während ihrer [Aktualität](/de/docs/Web/HTTP/Guides/Caching#fresh_and_stale_based_on_age) unveränderlich ist und vermeidet solche unnötigen bedingten Anfragen an den Server.

Wenn Sie ein cache-busting-Muster für Ressourcen verwenden und sie auf eine lange `max-age` anwenden, können Sie auch `immutable` hinzufügen, um Revalidierung zu vermeiden.

#### `stale-while-revalidate`

Die `stale-while-revalidate`-Antwortdirektive gibt an, dass der Cache eine veraltete Antwort wiederverwenden könnte, während er sie zu einem Cache revalidiert.

```http
Cache-Control: max-age=604800, stale-while-revalidate=86400
```

Im obigen Beispiel ist die Antwort für 7 Tage (604800s) [aktuell](/de/docs/Web/HTTP/Guides/Caching#fresh_and_stale_based_on_age).
Nach 7 Tagen wird sie [veraltet](/de/docs/Web/HTTP/Guides/Caching#fresh_and_stale_based_on_age), aber der Cache darf sie für Anfragen verwenden, die am folgenden Tag (86400s) gemacht werden, vorausgesetzt, dass sie die Antwort im Hintergrund revalidieren.

Revalidierung wird den Cache wieder [aktuell](/de/docs/Web/HTTP/Guides/Caching#fresh_and_stale_based_on_age) machen, so dass es für Klienten den Anschein hat, dass sie während dieses Zeitraums immer [aktuell](/de/docs/Web/HTTP/Guides/Caching#fresh_and_stale_based_on_age) war — was effektiv die Latenzstrafe der Revalidierung vor ihnen verbirgt.

Wenn während dieses Zeitraums keine Anfrage gestellt wurde, wird der Cache [veraltet](/de/docs/Web/HTTP/Guides/Caching#fresh_and_stale_based_on_age) und die nächste Anfrage wird normal revalidiert.

#### `stale-if-error`

Die `stale-if-error`-Antwortdirektive gibt an, dass der Cache eine [veraltete Antwort](/de/docs/Web/HTTP/Guides/Caching#fresh_and_stale_based_on_age) wiederverwenden kann, wenn ein Upstream-Server einen Fehler generiert oder wenn der Fehler lokal generiert wird. Hier wird ein Fehler als jede Antwort mit einem Statuscode von 500, 502, 503 oder 504 betrachtet.

```http
Cache-Control: max-age=604800, stale-if-error=86400
```

Im obigen Beispiel ist die Antwort für 7 Tage (604800s) [aktuell](/de/docs/Web/HTTP/Guides/Caching#fresh_and_stale_based_on_age). Danach wird sie [veraltet](/de/docs/Web/HTTP/Guides/Caching#fresh_and_stale_based_on_age), kann jedoch bei Auftreten eines Fehlers für einen weiteren Tag (86400s) verwendet werden.

Nachdem die `stale-if-error`-Periode vorübergeht, erhält der Klient jeden generierten Fehler.

### Anfragedirektiven

#### `no-cache`

Die `no-cache`-Anfrage-Direktive fordert Caches auf, die Antwort mit dem Ursprungserver zu validieren, bevor sie wiederverwendet wird.

```http
Cache-Control: no-cache
```

`no-cache` ermöglicht es Klienten, die aktuellste Antwort anzufordern, auch wenn der Cache eine [aktuelle](/de/docs/Web/HTTP/Guides/Caching#fresh_and_stale_based_on_age) Antwort hat.

Browser fügen Anfragen normalerweise `no-cache` hinzu, wenn Benutzer eine Seite **erneut laden**.

#### `no-store`

Die `no-store`-Anfrage-Direktive erlaubt einem Klienten, Caches zu bitten, die Anfrage und die entsprechende Antwort nicht zu speichern — selbst wenn die Antwort des Ursprungservers gespeichert werden könnte.

```http
Cache-Control: no-store
```

#### `max-age`

Die `max-age=N`-Anfrage-Direktive gibt an, dass der Klient eine gespeicherte Antwort, die auf dem Ursprungserver innerhalb von _N_ Sekunden generiert wurde, erlaubt — wobei _N_ jede nicht-negative Ganzzahl (einschließlich `0`) sein kann.

```http
Cache-Control: max-age=10800
```

Im obigen Fall, wenn die Antwort mit `Cache-Control: max-age=10800` vor mehr als 3 Stunden generiert wurde (berechnet aus `max-age` und dem `Age`-Header), könnte der Cache diese Antwort nicht wiederverwenden.

Viele Browser verwenden diese Direktive für das **erneute Laden**, wie unten erläutert.

```http
Cache-Control: max-age=0
```

`max-age=0` ist ein Workaround für `no-cache`, da viele alte (HTTP/1.0) Cache-Implementierungen `no-cache` nicht unterstützen. Kürzlich verwenden Browser immer noch `max-age=0` beim "erneuten Laden" — aus Gründen der Rückwärtskompatibilität — und alternativ `no-cache`, um ein "Zwangsneuladen" zu erzwingen.

Wenn der `max-age`-Wert negativ ist (zum Beispiel, `-1`) oder keine Ganzzahl (zum Beispiel, `3599,99`), ist das Caching-Verhalten nicht spezifiziert. Caches werden ermutigt, den Wert zu behandeln, als ob er `0` wäre.

#### `max-stale`

Die `max-stale=N`-Anfrage-Direktive gibt an, dass der Klient eine gespeicherte Antwort, die innerhalb _N_ Sekunden [veraltet](/de/docs/Web/HTTP/Guides/Caching#fresh_and_stale_based_on_age) ist, erlaubt.
Wenn kein Wert für _N_ angegeben ist, akzeptiert der Klient eine veraltete Antwort jeglichen Alters.

```http
Cache-Control: max-stale=3600
```

Zum Beispiel gibt eine Anfrage mit dem obigen Header an, dass der Browser eine veraltete Antwort aus dem Cache akzeptieren wird, die innerhalb der letzten Stunde abgelaufen ist.

Klienten können diesen Header verwenden, wenn der Ursprungserver ausgefallen oder zu langsam ist und können gecachte Antworten von Caches akzeptieren, selbst wenn diese etwas älter sind.

Beachten Sie, dass die meisten großen Browser keine Anfragen mit `max-stale` unterstützen.

#### `min-fresh`

Die `min-fresh=N`-Anfrage-Direktive gibt an, dass der Klient eine gespeicherte Antwort, die für mindestens _N_ Sekunden [aktuell](/de/docs/Web/HTTP/Guides/Caching#fresh_and_stale_based_on_age) ist, erlaubt.

```http
Cache-Control: min-fresh=600
```

Im obigen Fall, wenn die Antwort mit `Cache-Control: max-age=3600` vor 51 Minuten in Caches gespeichert wurde, könnte der Cache diese Antwort nicht wiederverwenden.

Klienten können diesen Header verwenden, wenn der Benutzer erfordert, dass die Antwort nicht nur [aktuell](/de/docs/Web/HTTP/Guides/Caching#fresh_and_stale_based_on_age) ist, sondern auch erfordert, dass sie für einen bestimmten Zeitraum nicht aktualisiert wird.

Beachten Sie, dass die meisten großen Browser keine Anfragen mit `min-fresh` unterstützen.

#### `no-transform`

Gleiche Bedeutung wie `no-transform` für eine Antwort, aber für eine Anfrage.

#### `only-if-cached`

Der Klient gibt an, dass eine bereits im Cache befindliche Antwort zurückgegeben werden soll. Wenn ein Cache eine gespeicherte Antwort hat, auch eine veraltete, wird sie zurückgegeben. Wenn keine gecachte Antwort verfügbar ist, wird eine [504 Gateway Timeout](/de/docs/Web/HTTP/Reference/Status/504)-Antwort zurückgegeben.

#### `stale-if-error`

Die `stale-if-error`-Anfrage-Direktive gibt an, dass der Browser daran interessiert ist, veraltete Inhalte bei Fehlern von jedem Zwischenserver für einen bestimmten Ursprung zu empfangen.
Dies wird von keinem Browser unterstützt (siehe [Browser-Kompatibilität](#browser-kompatibilität)).

## Anwendungsfälle

### Speicherung verhindern

Wenn Sie nicht möchten, dass eine Antwort in Caches gespeichert wird, verwenden Sie die `no-store`-Direktive.

```http
Cache-Control: no-store
```

Beachten Sie, dass `no-cache` bedeutet "es kann gespeichert werden, aber nicht ohne Validierung wiederverwenden" — daher ist es nicht dazu da, die Speicherung einer Antwort zu verhindern.

```http example-bad
Cache-Control: no-cache
```

Theoretisch, wenn Direktiven im Widerspruch stehen, sollte die restriktivste Direktive beachtet werden. Das folgende Beispiel ist also im Grunde bedeutungslos, da `private`, `no-cache`, `max-age=0` und `must-revalidate` mit `no-store` in Konflikt stehen.

```http example-bad
# conflicted
Cache-Control: private, no-cache, no-store, max-age=0, must-revalidate

# equivalent to
Cache-Control: no-store
```

### Caching von statischen Ressourcen mit "Cache Busting"

Wenn Sie statische Ressourcen mit Versions- und Hashing-Mechanismen erstellen, ist das Hinzufügen einer Version/eines Hashes zum Dateinamen oder zur Abfragezeichenfolge eine gute Möglichkeit, das Caching zu verwalten.

Zum Beispiel:

```html
<!-- index.html -->
<script src="/assets/react.min.js"></script>
<img src="/assets/hero.png" width="900" height="400" />
```

Die React-Bibliotheksversion ändert sich, wenn Sie die Bibliothek aktualisieren, und `hero.png` ändert sich ebenfalls, wenn Sie das Bild bearbeiten. Daher sind sie schwer mit `max-age` im Cache zu speichern.

In einem solchen Fall könnten Sie die Caching-Bedürfnisse ansprechen, indem Sie eine spezifisch nummerierte Version der Bibliothek verwenden und den Hash des Bildes in seine URL aufnehmen.

```html
<!-- index.html -->
<script src="/assets/react.0.0.0min.js"></script>
<img src="/assets/hero.png?hash=deadbeef" width="900" height="400" />
```

Sie können einen langen `max-age`-Wert und `immutable` hinzufügen, da der Inhalt sich nie ändern wird.

```http
# /assets/*
Cache-Control: max-age=31536000, immutable
```

Wenn Sie die Bibliothek aktualisieren oder das Bild bearbeiten, sollte neuer Inhalt eine neue URL haben, und Caches werden nicht wiederverwendet. Das wird als "Cache Busting"-Muster bezeichnet.

Verwenden Sie `no-cache`, um sicherzustellen, dass die HTML-Antwort selbst nicht gecacht wird. `no-cache` könnte eine Revalidierung verursachen, und der Klient wird korrekt eine neue Version der HTML-Antwort und statische Ressourcen empfangen.

```http
# /index.html
Cache-Control: no-cache
```

Hinweis: Wenn `index.html` unter Basic Authentication oder Digest Authentication kontrolliert wird, werden Dateien unter `/assets` nicht im gemeinsamen Cache gespeichert. Wenn `/assets/`-Dateien für die Speicherung im gemeinsamen Cache geeignet sind, benötigen Sie auch eine der folgenden `public`, `s-maxage` oder `must-revalidate`.

### Immer aktuelle Inhalte

Für Inhalte, die dynamisch generiert werden oder die statisch, aber häufig aktualisiert werden, möchten Sie, dass ein Benutzer immer die aktuellste Version erhält.

Wenn Sie keinen `Cache-Control`-Header hinzufügen, weil die Antwort nicht zum Cachen vorgesehen ist, könnte das zu einem unerwarteten Ergebnis führen. Cache-Speicher dürfen sie heuristisch cachen — also wenn Sie Anforderungen an das Caching haben, sollten Sie diese immer explizit im `Cache-Control`-Header angeben.

Das Hinzufügen von `no-cache` zur Antwort führt zur Revalidierung mit dem Server, so dass Sie jedes Mal eine [aktuelle](/de/docs/Web/HTTP/Guides/Caching#fresh_and_stale_based_on_age) Antwort servieren können — oder wenn der Klient bereits eine neue hat, einfach `304 Not Modified` antworten.

```http
Cache-Control: no-cache
```

Die meisten HTTP/1.0-Caches unterstützen keine `no-cache`-Direktiven, daher wurde historisch gesehen `max-age=0` als Workaround verwendet. Aber nur `max-age=0` könnte dazu führen, dass eine [veraltete Antwort](/de/docs/Web/HTTP/Guides/Caching#fresh_and_stale_based_on_age) wiederverwendet wird, wenn Caches vom Ursprungserver getrennt sind. `must-revalidate` behandelt dies. Das ist der Grund, warum das folgende Beispiel gleichbedeutend mit `no-cache` ist.

```http
Cache-Control: max-age=0, must-revalidate
```

Aber jetzt können Sie einfach `no-cache` verwenden.

### Löschen eines bereits gespeicherten Caches

Es gibt keine Cache-Direktiven zum Löschen von bereits gespeicherten Antworten aus Caches auf \_Zwischen_servern.

Stellen Sie sich vor, dass Klienten/Caches eine [aktuelle](/de/docs/Web/HTTP/Guides/Caching#fresh_and_stale_based_on_age) Antwort für einen Pfad speichern, ohne eine Anfragereise zum Server. Es gibt nichts, was ein Server für diesen Pfad tun könnte.

[`Clear-Site-Data: cache`](/de/docs/Web/HTTP/Reference/Headers/Clear-Site-Data#cache) kann verwendet werden, um jede gespeicherte Antwort für eine Site im Browsercache zu löschen, verwenden Sie dies also mit Vorsicht.
Beachten Sie, dass dies nicht die geteilten oder Zwischen-Caches betrifft.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [HTTP-Caching](/de/docs/Web/HTTP/Guides/Caching)
- [Caching-Tutorial für Web-Autoren und Webmasters](https://www.mnot.net/cache_docs/)
- [Caching Best Practices & Max-Age Gotchas](https://jakearchibald.com/2016/caching-best-practices/)
- [Cache-Control für Zivilisten](https://csswizardry.com/2019/03/cache-control-for-civilians/)
- [RFC 9111 – HTTP Caching](https://httpwg.org/specs/rfc9111.html)
- [RFC 5861 – HTTP Cache-Control-Erweiterungen für veraltete Inhalte](https://httpwg.org/specs/rfc5861.html)
- [RFC 8246 – HTTP Unveränderliche Antworten](https://httpwg.org/specs/rfc8246.html)
