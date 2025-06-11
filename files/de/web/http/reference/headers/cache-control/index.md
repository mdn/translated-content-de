---
title: Cache-Control header
short-title: Cache-Control
slug: Web/HTTP/Reference/Headers/Cache-Control
l10n:
  sourceCommit: 33bf687d0d38a295815d58350dedee491a17e79f
---

{{HTTPSidebar}}

Der HTTP-Header **`Cache-Control`** enthält _Direktiven_ (Anweisungen) in Anfragen und Antworten, die das [Caching](/de/docs/Web/HTTP/Guides/Caching) in Browsern und gemeinsamen Caches (z.B. Proxies, CDNs) steuern.

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

Cache-Direktiven folgen diesen Regeln:

- Cache-Direktiven sind nicht groß-/kleinschreibungssensitiv. Kleinbuchstaben werden jedoch empfohlen, da einige Implementierungen Großbuchstaben-Direktiven nicht erkennen.
- Mehrere Direktiven sind erlaubt und müssen durch Kommas getrennt werden (z.B. `Cache-control: max-age=180, public`).
- Einige Direktiven haben ein optionales Argument. Wenn ein Argument angegeben wird, wird es durch ein Gleichheitszeichen (`=`) vom Namen der Direktive getrennt. Typischerweise sind die Argumente für die Direktiven Ganzzahlen und sind daher nicht in Anführungszeichen eingeschlossen (z.B. `Cache-control: max-age=12`).

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

Hinweis: Überprüfen Sie die [Kompatibilitätstabelle](#browser-kompatibilität) für die Unterstützung; Nutzeragenten, die diese nicht erkennen, sollten sie ignorieren.

## Begriffsbestimmungen

Dieser Abschnitt definiert die in diesem Dokument verwendeten Begriffe, von denen einige aus der Spezifikation stammen.

- (HTTP)-Cache
  - : Eine Implementierung, die Anfragen und Antworten zur Wiederverwendung bei nachfolgenden Anfragen speichert. Es kann sich entweder um einen gemeinsamen oder einen privaten Cache handeln.
- Gemeinsamer Cache
  - : Ein Cache, der zwischen dem Ursprungsserver und den Clients existiert (z.B. Proxy, CDN). Er speichert eine einzelne Antwort und verwendet sie für mehrere Benutzer wieder — Entwickler sollten daher vermeiden, personalisierte Inhalte im gemeinsamen Cache zu speichern.
- Privater Cache
  - : Ein Cache, der im Client existiert. Er wird auch als _lokaler Cache_ oder _Browser-Cache_ bezeichnet. Er kann personalisierte Inhalte für einen einzelnen Benutzer speichern und wiederverwenden.
- Antwort speichern
  - : Eine Antwort in Caches speichern, wenn die Antwort cachbar ist. Die im Cache gespeicherte Antwort wird jedoch nicht immer wie ursprünglich wiederverwendet. (Normalerweise bedeutet "Cache" das Speichern einer Antwort.)
- Antwort wiederverwenden
  - : Zwischengespeicherte Antworten für nachfolgende Anfragen wiederverwenden.
- Antwort erneut validieren
  - : Den Ursprungsserver fragen, ob die gespeicherte Antwort noch [aktuell](/de/docs/Web/HTTP/Guides/Caching#fresh_and_stale_based_on_age) ist. Normalerweise wird die erneute Validierung über eine Bedingte Anfrage durchgeführt.
- Aktuelle Antwort
  - : Gibt an, dass die Antwort [aktuell](/de/docs/Web/HTTP/Guides/Caching#fresh_and_stale_based_on_age) ist. Dies bedeutet normalerweise, dass die Antwort für nachfolgende Anfragen wiederverwendet werden kann, abhängig von den Anforderungsdirektiven.
- Veraltete Antwort
  - : Gibt an, dass die Antwort eine [veraltete Antwort](/de/docs/Web/HTTP/Guides/Caching#fresh_and_stale_based_on_age) ist. Dies bedeutet normalerweise, dass die Antwort nicht unverändert wiederverwendet werden kann. Cache-Speicher müssen veraltete Antworten nicht sofort entfernen, da eine erneute Validierung die Antwort von veraltet zu [aktuell](/de/docs/Web/HTTP/Guides/Caching#fresh_and_stale_based_on_age) ändern kann.
- Alter
  - : Die Zeit, seit eine Antwort generiert wurde. Es ist ein Kriterium dafür, ob eine Antwort [aktuell oder veraltet](/de/docs/Web/HTTP/Guides/Caching#fresh_and_stale_based_on_age) ist.

## Direktiven

Dieser Abschnitt listet Direktiven auf, die das Caching beeinflussen — sowohl Antwort- als auch Anforderungsdirektiven.

### Antwortdirektiven

#### `max-age`

Die `max-age=N`-Antwort-Direktive gibt an, dass die Antwort [_N_ Sekunden nach der Erzeugung [aktuell](/de/docs/Web/HTTP/Guides/Caching#fresh_and_stale_based_on_age) bleibt.

```http
Cache-Control: max-age=604800
```

Gibt an, dass Caches diese Antwort speichern und für nachfolgende Anfragen wiederverwenden können, solange sie [aktuell](/de/docs/Web/HTTP/Guides/Caching#fresh_and_stale_based_on_age) ist. Beachten Sie, dass `Max-Age` nicht die verstrichene Zeit seit dem Empfang der Antwort ist; es ist die verstrichene Zeit seit der Erzeugung der Antwort auf dem Ursprungsserver. Wenn der andere Cache — auf der Netzwerkroute, die die Antwort genommen hat — die Antwort 100 Sekunden speichert (angezeigt durch das `Alter`-Antwort-Header-Feld), würde der Browser-Cache 100 Sekunden von seiner [Aktualitäts-Zeitspanne](/de/docs/Web/HTTP/Guides/Caching#fresh_and_stale_based_on_age) abziehen.

Wenn der `max-age`-Wert negativ ist (zum Beispiel `-1`) oder keine Ganzzahl (zum Beispiel `3599.99`), ist das Caching-Verhalten nicht spezifiziert. Caches werden ermutigt, den Wert so zu behandeln, als ob er `0` wäre (dies wird im Abschnitt [Berechnung der Aktualitäts-Zeitspanne](https://httpwg.org/specs/rfc9111.html#calculating.freshness.lifetime) der HTTP-Spezifikation erwähnt).

```http
Cache-Control: max-age=604800
Age: 100
```

#### `s-maxage`

Die `s-maxage`-Antwort-Direktive gibt an, wie lange die Antwort im gemeinsamen Cache [aktuell](/de/docs/Web/HTTP/Guides/Caching#fresh_and_stale_based_on_age) bleibt. Die `s-maxage`-Direktive wird von privaten Caches ignoriert und überschreibt den Wert, der durch die `max-age`-Direktive oder den `Expires`-Header für gemeinsame Caches angegeben wird, wenn diese vorhanden sind.

```http
Cache-Control: s-maxage=604800
```

#### `no-cache`

Die `no-cache`-Antwort-Direktive zeigt an, dass die Antwort zwar in Caches gespeichert werden kann, jedoch vor jeder Wiederverwendung mit dem Ursprungsserver validiert werden muss — selbst dann, wenn der Cache vom Ursprungsserver getrennt ist.

```http
Cache-Control: no-cache
```

Möchten Sie, dass Caches bei der Wiederverwendung gespeicherter Inhalte immer nach Inhaltsaktualisierungen suchen, verwenden Sie die Direktive `no-cache`. Dies wird erreicht, indem Caches verlangt wird, jede Anfrage mit dem Ursprungsserver zu validieren.

Beachten Sie, dass `no-cache` nicht "nicht speichern" bedeutet. `no-cache` erlaubt Caches eine Antwort zu speichern, erfordert jedoch deren erneute Validierung vor der Wiederverwendung. Wenn das Verständnis von "nicht speichern", das Sie wollen, tatsächlich "nicht speichern" ist, verwenden Sie die Direktive `no-store`.

#### `must-revalidate`

Die `must-revalidate`-Antwort-Direktive besagt, dass die Antwort in Caches gespeichert werden kann und [aktuell](/de/docs/Web/HTTP/Guides/Caching#fresh_and_stale_based_on_age) wiederverwendet werden kann. Wenn die Antwort [veraltet](/de/docs/Web/HTTP/Guides/Caching#fresh_and_stale_based_on_age) wird, muss sie vor der Wiederverwendung mit dem Ursprungsserver validiert werden.

Normalerweise wird `must-revalidate` mit `max-age` verwendet.

```http
Cache-Control: max-age=604800, must-revalidate
```

HTTP ermöglicht es Caches, [veraltete Antworten](/de/docs/Web/HTTP/Guides/Caching#fresh_and_stale_based_on_age) wiederzuverwenden, wenn sie vom Ursprungsserver getrennt sind. `must-revalidate` verhindert, dass dies geschieht - entweder wird die gespeicherte Antwort mit dem Ursprungsserver revalidiert oder eine 504 (Gateway Timeout)-Antwort wird erzeugt.

#### `proxy-revalidate`

Die `proxy-revalidate`-Antwort-Direktive ist das Äquivalent zu `must-revalidate`, jedoch speziell nur für gemeinsam genutzte Caches.

#### `no-store`

Die `no-store`-Antwort-Direktive gibt an, dass keine Caches jeglicher Art (privat oder gemeinsam) diese Antwort speichern sollen.

```http
Cache-Control: no-store
```

#### `private`

Die `private`-Antwort-Direktive besagt, dass die Antwort nur in einem privaten Cache (z.B. lokalen Caches in Browsern) gespeichert werden kann.

```http
Cache-Control: private
```

Sie sollten die `private`-Direktive für benutzerpersonalisierte Inhalte hinzufügen, insbesondere für Antworten, die nach der Anmeldung oder während Sitzungen per Cookies verwaltet werden, empfangen wurden.

Vergessen Sie nicht, `private` zu einer Antwort mit personalisierten Inhalten hinzuzufügen; andernfalls kann diese Antwort in einem gemeinsamen Cache gespeichert werden und für mehrere Benutzer wiederverwendet werden, was zur Folge haben kann, dass persönliche Informationen preisgegeben werden.

#### `public`

Die `public`-Antwort-Direktive besagt, dass die Antwort in einem gemeinsamen Cache gespeichert werden kann. Antworten für Anfragen mit `Authorization`-Header-Feldern dürfen nicht in einem gemeinsamen Cache gespeichert werden; die `public`-Direktive wird jedoch bewirken, dass solche Antworten in einem gemeinsamen Cache gespeichert werden.

```http
Cache-Control: public
```

Im Allgemeinen, wenn Seiten unter Basic Auth oder Digest Auth stehen, sendet der Browser Anfragen mit dem `Authorization`-Header. Dies bedeutet, dass die Antwort für eingeschränkte Benutzer (die Konten haben) zugangskontrolliert ist und grundsätzlich nicht gemeinsam speicherbar ist, selbst wenn sie ein `max-age` haben.

Sie können die `public`-Direktive verwenden, um diese Einschränkung aufzuheben.

```http
Cache-Control: public, max-age=604800
```

Beachten Sie, dass `s-maxage` oder `must-revalidate` ebenfalls diese Einschränkung aufheben.

Wenn eine Anfrage keinen `Authorization`-Header hat oder wenn bereits `s-maxage` oder `must-revalidate` in der Antwort verwendet wird, dann müssen Sie `public` nicht verwenden.

#### `must-understand`

Die `must-understand`-Antwort-Direktive besagt, dass ein Cache die Antwort nur speichern sollte, wenn er die Anforderungen zum Caching basierend auf dem Statuscode versteht.

`must-understand` sollte mit `no-store` für ein Fallback-Verhalten gekoppelt werden.

```http
Cache-Control: must-understand, no-store
```

Wenn ein Cache `must-understand` nicht unterstützt, wird es ignoriert. Wenn `no-store` ebenfalls vorhanden ist, wird die Antwort nicht gespeichert.

Wenn ein Cache `must-understand` unterstützt, speichert er die Antwort mit Verständnis für Caching-Anforderungen basierend auf seinem Statuscode.

#### `no-transform`

Einige Intermediäre transformieren Inhalte aus verschiedenen Gründen. Beispielsweise konvertieren einige Bilder, um die Übertragungsgröße zu reduzieren. In einigen Fällen ist dies für den Inhaltsanbieter unerwünscht.

`no-transform` deutet an, dass kein Intermediär (unabhängig davon, ob er einen Cache implementiert) die Antwortinhalte transformieren sollte.

#### `immutable`

Die `immutable`-Antwort-Direktive weist darauf hin, dass die Antwort nicht aktualisiert wird, während sie [frisch](/de/docs/Web/HTTP/Guides/Caching#fresh_and_stale_based_on_age) ist.

```http
Cache-Control: public, max-age=604800, immutable
```

Eine moderne Best Practice für statische Ressourcen besteht darin, Versionsnummern oder Hashes in ihre URLs einzufügen, während die Ressourcen nie verändert werden — sondern, wenn nötig, die Ressourcen mit neueren Versionen, die neue Versionsnummern/Hashes haben, zu _aktualisieren_, sodass ihre URLs unterschiedlich sind. Das wird als **Cache-Busting**-Pattern bezeichnet.

```html
<script src="https://example.com/react.0.0.0.js"></script>
```

Wenn ein Benutzer den Browser neu lädt, sendet der Browser bedingte Anfragen zur Validierung an den Ursprungsserver. Aber es ist nicht notwendig, diese Art von statischen Ressourcen neu zu validieren, selbst wenn ein Benutzer den Browser neu lädt, weil sie nie modifiziert werden.
`immutable` sagt einem Cache, dass die Antwort unveränderlich ist, solange sie [frisch](/de/docs/Web/HTTP/Guides/Caching#fresh_and_stale_based_on_age) ist, und vermeidet diese Arten von unnötigen bedingten Anfragen an den Server.

Wenn Sie ein Cache-Busting-Pattern für Ressourcen verwenden und sie mit einer langen `max-age` versehen, können Sie auch `immutable` hinzufügen, um eine Neuvalidierung zu vermeiden.

#### `stale-while-revalidate`

Die `stale-while-revalidate`-Antwort-Direktive gibt an, dass der Cache eine veraltete Antwort wiederverwenden könnte, während er diese zu einem Cache revalidiert.

```http
Cache-Control: max-age=604800, stale-while-revalidate=86400
```

Im obigen Beispiel ist die Antwort [frisch](/de/docs/Web/HTTP/Guides/Caching#fresh_and_stale_based_on_age) für 7 Tage (604.800s).
Nach 7 Tagen wird sie [veraltet](/de/docs/Web/HTTP/Guides/Caching#fresh_and_stale_based_on_age), aber der Cache darf sie für alle Anfragen, die an dem folgenden Tag (86.400s) gemacht werden, wiederverwenden, vorausgesetzt, dass sie die Antwort im Hintergrund revalidieren.

Revalidierung wird den Cache wieder [frisch](/de/docs/Web/HTTP/Guides/Caching#fresh_and_stale_based_on_age) machen, sodass es den Clients erscheint, dass sie während dieser Zeit immer [frisch](/de/docs/Web/HTTP/Guides/Caching#fresh_and_stale_based_on_age) war — daher wird die Latenzstrafe der Revalidierung effektiv vor ihnen verborgen.

Wenn in diesem Zeitraum keine Anfragen aufgetreten sind, wird der Cache [veraltet](/de/docs/Web/HTTP/Guides/Caching#fresh_and_stale_based_on_age) und die nächste Anfrage wird normal revalidiert.

#### `stale-if-error`

Die `stale-if-error`-Antwort-Direktive gibt an, dass der Cache eine [veraltete Antwort](/de/docs/Web/HTTP/Guides/Caching#fresh_and_stale_based_on_age) wiederverwenden kann, wenn ein Upstream-Server einen Fehler generiert oder der Fehler lokal erzeugt wird. Hierbei wird ein Fehler als jede Antwort mit einem Statuscode 500, 502, 503 oder 504 betrachtet.

```http
Cache-Control: max-age=604800, stale-if-error=86400
```

Im obigen Beispiel ist die Antwort [frisch](/de/docs/Web/HTTP/Guides/Caching#fresh_and_stale_based_on_age) für 7 Tage (604.800s). Danach wird sie [veraltet](/de/docs/Web/HTTP/Guides/Caching#fresh_and_stale_based_on_age), kann jedoch für einen weiteren Tag (86.400s) verwendet werden, wenn ein Fehler auftritt.

Nachdem die `stale-if-error`-Periode vorbei ist, erhält der Client jeden generierten Fehler.

### Anfrage-Direktiven

#### `no-cache`

Die `no-cache`-Anforderungsdirektive fordert Caches auf, die Antwort vor der Wiederverwendung mit dem Ursprungsserver zu validieren.

```http
Cache-Control: no-cache
```

`no-cache` ermöglicht es Clients, die aktuellste Antwort zu verlangen, selbst wenn der Cache eine [frische](/de/docs/Web/HTTP/Guides/Caching#fresh_and_stale_based_on_age) Antwort hat.

Browser fügen Anfragen normalerweise `no-cache` hinzu, wenn Benutzer **eine Seite erzwingen** neu laden.

#### `no-store`

Die `no-store`-Anforderungsdirektive erlaubt einem Client, Caches zu bitten, die Speicherung der Anfrage und der entsprechenden Antwort zu unterlassen — selbst wenn die Antwort des Ursprungsservers gespeichert werden könnte.

```http
Cache-Control: no-store
```

#### `max-age`

Die `max-age=N`-Anforderungsdirektive gibt an, dass der Client eine gespeicherte Antwort erlaubt, die innerhalb von _N_ Sekunden auf dem Ursprungsserver erzeugt wurde — wobei _N_ jede nicht-negative Ganzzahl (einschließlich `0`) sein kann.

```http
Cache-Control: max-age=10800
```

Im oben genannten Fall, wenn die Antwort mit `Cache-Control: max-age=10800` vor mehr als 3 Stunden (berechnet anhand `max-age` und des `Alter`-Headers) erzeugt wurde, könnte der Cache diese Antwort nicht wiederverwenden.

Viele Browser verwenden diese Direktive für das **Neuladen**, wie unten erklärt.

```http
Cache-Control: max-age=0
```

`max-age=0` ist ein Workaround für `no-cache`, weil viele alte (HTTP/1.0) Cache-Implementierungen `no-cache` nicht unterstützen. Kürzlich verwenden Browser immer noch `max-age=0` beim "Neuladen" — aus Gründen der Abwärtskompatibilität — und alternativ verwenden sie `no-cache`, um ein "gewaltsames Neuladen" zu verursachen.

Wenn der `max-age`-Wert negativ ist (zum Beispiel `-1`) oder keine Ganzzahl (zum Beispiel `3599.99`), ist das Caching-Verhalten nicht spezifiziert. Caches sind dazu angehalten, den Wert so zu behandeln, als wäre er `0`.

#### `max-stale`

Die `max-stale=N`-Anforderungsdirektive gibt an, dass der Client eine gespeicherte Antwort akzeptiert, die innerhalb von _N_ Sekunden [veraltet](/de/docs/Web/HTTP/Guides/Caching#fresh_and_stale_based_on_age) ist.
Wenn kein _N_-Wert angegeben wird, akzeptiert der Client eine veraltete Antwort jeden Alters.

```http
Cache-Control: max-stale=3600
```

Beispielsweise zeigt eine Anfrage mit dem oben genannten Header an, dass der Browser eine veraltete Antwort aus dem Cache akzeptiert, die innerhalb der letzten Stunde abgelaufen ist.

Clients können diesen Header verwenden, wenn der Ursprungsserver ausgefallen oder zu langsam ist und sie zwischengespeicherte Antworten von Caches akzeptieren können, selbst wenn diese etwas älter sind.

Beachten Sie, dass die gängigen Browser keine Anfragen mit `max-stale` unterstützen.

#### `min-fresh`

Die `min-fresh=N`-Anforderungsdirektive gibt an, dass der Client eine gespeicherte Antwort akzeptiert, die für mindestens _N_ Sekunden [frisch](/de/docs/Web/HTTP/Guides/Caching#fresh_and_stale_based_on_age) ist.

```http
Cache-Control: min-fresh=600
```

Im oben genannten Fall, wenn die Antwort mit `Cache-Control: max-age=3600` seit 51 Minuten im Cache gespeichert ist, könnte der Cache diese Antwort nicht wiederverwenden.

Clients können diesen Header verwenden, wenn der Benutzer verlangt, dass die Antwort nicht nur [frisch](/de/docs/Web/HTTP/Guides/Caching#fresh_and_stale_based_on_age) ist, sondern auch sicherstellt, dass sie für eine gewisse Zeit nicht aktualisiert wird.

Beachten Sie, dass die gängigen Browser keine Anfragen mit `min-fresh` unterstützen.

#### `no-transform`

Die gleiche Bedeutung, die `no-transform` für eine Antwort hat, aber für eine Anfrage.

#### `only-if-cached`

Der Client gibt an, dass eine bereits zwischengespeicherte Antwort zurückgegeben werden soll. Wenn ein Cache eine gespeicherte Antwort hat, selbst eine veraltete, wird sie zurückgegeben. Wenn keine zwischengespeicherte Antwort verfügbar ist, wird eine [504 Gateway Timeout](/de/docs/Web/HTTP/Reference/Status/504)-Antwort zurückgegeben.

#### `stale-if-error`

Die `stale-if-error`-Anforderungsdirektive gibt an, dass der Browser an der Erhaltung von veraltetem Inhalt bei Fehlern von einem Zwischenspeiser interessiert ist.
Dies wird von keinem Browser unterstützt (siehe [Browser-Kompatibilität](#browser-kompatibilität)).

## Anwendungsfälle

### Speicherung verhindern

Wenn Sie nicht möchten, dass eine Antwort in Caches gespeichert wird, verwenden Sie die `no-store`-Direktive.

```http
Cache-Control: no-store
```

Beachten Sie, dass `no-cache` bedeutet "es kann gespeichert werden, aber nicht wiederverwenden, bevor es nicht validiert wurde" — daher ist es nicht dafür gedacht, zu verhindern, dass eine Antwort gespeichert wird.

```http example-bad
Cache-Control: no-cache
```

Theoretisch, wenn Direktiven im Konflikt stehen, sollte die restriktivste Direktive beachtet werden. Daher ist das Beispiel unten im Grunde bedeutungslos, weil `private`, `no-cache`, `max-age=0` und `must-revalidate` mit `no-store` im Konflikt stehen.

```http example-bad
# conflicted
Cache-Control: private, no-cache, no-store, max-age=0, must-revalidate

# equivalent to
Cache-Control: no-store
```

### Caching von statischen Assets mit "Cache-Busting"

Wenn Sie statische Assets mit Versions-/Hashmechanismen aufbauen, ist das Hinzufügen einer Version/eines Hashs zum Dateinamen oder Abfrage-String eine gute Möglichkeit, das Caching zu verwalten.

Zum Beispiel:

```html
<!-- index.html -->
<script src="/assets/react.min.js"></script>
<img src="/assets/hero.png" width="900" height="400" />
```

Die React-Bibliotheks-Version wird sich ändern, wenn Sie die Bibliothek aktualisieren, und `hero.png` wird sich auch ändern, wenn Sie das Bild bearbeiten. Daher ist es schwer, diese Dateien im Cache mit `max-age` zu speichern.

In einem solchen Fall könnten Sie den Caching-Anforderungen gerecht werden, indem Sie eine spezifische, nummerierte Version der Bibliothek verwenden und den Hash des Bildes in dessen URL einfügen.

```html
<!-- index.html -->
<script src="/assets/react.0.0.0min.js"></script>
<img src="/assets/hero.png?hash=deadbeef" width="900" height="400" />
```

Sie können einen langen `max-age`-Wert und `immutable` hinzufügen, weil sich der Inhalt nie ändern wird.

```http
# /assets/*
Cache-Control: max-age=31536000, immutable
```

Wenn Sie die Bibliothek aktualisieren oder das Bild bearbeiten, sollte neuer Inhalt eine neue URL haben, und Caches werden nicht wiederverwendet. Das wird als "Cache-Busting"-Pattern bezeichnet.

Verwenden Sie `no-cache`, um sicherzustellen, dass die HTML-Antwort selbst nicht zwischengespeichert wird. `no-cache` könnte Neuvalidierung bewirken, und der Client erhält korrekt eine neue Version der HTML-Antwort und statischen Ressourcen.

```http
# /index.html
Cache-Control: no-cache
```

Hinweis: Wenn `index.html` unter Basic Authentication oder Digest Authentication verwaltet wird, werden Dateien unter `/assets` nicht im gemeinsamen Cache gespeichert. Wenn `/assets/`-Dateien geeignet sind, um im gemeinsamen Cache gespeichert zu werden, benötigen Sie ebenfalls eine der Optionen `public`, `s-maxage` oder `must-revalidate`.

### Immer aktuelle Inhalte

Für Inhalte, die dynamisch erzeugt werden oder die statisch sind, aber oft aktualisiert werden, möchten Sie, dass ein Benutzer immer die aktuellste Version erhält.

Wenn Sie keinen `Cache-Control`-Header hinzufügen, weil die Antwort nicht zum Caching bestimmt ist, könnte dies unerwartete Ergebnisse verursachen. Der Cache-Speicher darf dies heuristisch zwischenspeichern — daher, wenn Sie Anforderungen für das Caching haben, sollten Sie diese immer explizit im `Cache-Control`-Header angeben.

Das Hinzufügen von `no-cache` zur Antwort bewirkt eine Neuvalidierung auf dem Server, sodass Sie jedes Mal eine [frische](/de/docs/Web/HTTP/Guides/Caching#fresh_and_stale_based_on_age) Antwort liefern können — oder wenn der Client bereits eine neue hat, einfach mit `304 Not Modified` antworten.

```http
Cache-Control: no-cache
```

Die meisten HTTP/1.0-Caches unterstützen keine `no-cache`-Direktiven, daher wurde historisch `max-age=0` als Workaround verwendet. Aber nur `max-age=0` könnte dazu führen, dass eine [veraltete Antwort](/de/docs/Web/HTTP/Guides/Caching#fresh_and_stale_based_on_age) wiederverwendet wird, wenn Caches vom Ursprungsserver getrennt sind. `must-revalidate` löst dieses Problem. Deshalb ist das untenstehende Beispiel gleichbedeutend mit `no-cache`.

```http
Cache-Control: max-age=0, must-revalidate
```

Aber jetzt können Sie einfach `no-cache` verwenden.

### Einen bereits gespeicherten Cache löschen

Es gibt keine Cache-Direktiven zum Löschen bereits gespeicherter Antworten aus _Zwischenspeichern_.

Stellen Sie sich vor, dass Clients/Caches eine [frische](/de/docs/Web/HTTP/Guides/Caching#fresh_and_stale_based_on_age) Antwort für einen Pfad speichern, ohne Anfrageflug zum Server. Es gibt nichts, was ein Server für diesen Pfad tun könnte.

[`Clear-Site-Data: cache`](/de/docs/Web/HTTP/Reference/Headers/Clear-Site-Data#cache) kann verwendet werden, um jede gespeicherte Antwort für eine Seite im Browser-Cache zu löschen, verwenden Sie dies daher mit Bedacht.
Beachten Sie, dass dies nicht die gemeinsame oder zwischengeschaltete Caches beeinflussen wird.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [HTTP-Caching](/de/docs/Web/HTTP/Guides/Caching)
- [Caching-Tutorial für Webautoren und Webmaster](https://www.mnot.net/cache_docs/)
- [Caching-Best-Practices & max-age-Fallstricke](https://jakearchibald.com/2016/caching-best-practices/)
- [Cache-Control für Zivilisten](https://csswizardry.com/2019/03/cache-control-for-civilians/)
- [RFC 9111 – HTTP-Caching](https://httpwg.org/specs/rfc9111.html)
- [RFC 5861 – HTTP-Cache-Control-Erweiterungen für veraltete Inhalte](https://httpwg.org/specs/rfc5861.html)
- [RFC 8246 – HTTP-Immutable-Responses](https://httpwg.org/specs/rfc8246.html)
