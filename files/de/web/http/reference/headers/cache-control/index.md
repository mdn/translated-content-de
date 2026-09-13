---
title: Cache-Control header
short-title: Cache-Control
slug: Web/HTTP/Reference/Headers/Cache-Control
l10n:
  sourceCommit: 50da788b972b99730b4aeb8fec8fde3bde10975d
---

Der HTTP **`Cache-Control`**-Header enthält _Direktiven_ (Anweisungen) sowohl in Anfragen als auch in Antworten, die das [Caching](/de/docs/Web/HTTP/Guides/Caching) in Browsern und gemeinsamen Caches (z. B. Proxies, CDNs) steuern.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>
        {{Glossary("Request_header", "Anforderungs-Header")}},
        {{Glossary("Response_header", "Antwort-Header")}}
      </td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_request_header", "Verbotener Anforderungs-Header")}}</th>
      <td>Nein</td>
    </tr>
    <tr>
      <th scope="row">
        {{Glossary("CORS-safelisted_response_header", "CORS-safelisted-Antwort-Header")}}
      </th>
      <td>Ja</td>
    </tr>
  </tbody>
</table>

## Syntax

```http
Cache-Control: <directive>, <directive>, ...
```

Cache-Direktiven befolgen diese Regeln:

- Caching-Direktiven sind nicht groß-/kleinschreibungssensitiv. Es wird jedoch Kleinschreibung empfohlen, da einige Implementierungen keine Direktiven in Großbuchstaben erkennen.
- Mehrere Direktiven sind erlaubt und müssen durch Kommas getrennt werden (z. B. `Cache-control: max-age=180, public`).
- Einige Direktiven haben ein optionales Argument. Wenn ein Argument angegeben ist, wird es durch ein Gleichheitszeichen (`=`) vom Namen der Direktive getrennt. Typischerweise sind Argumente für die Direktiven ganze Zahlen und werden daher nicht mit Anführungszeichen umschlossen (z. B. `Cache-control: max-age=12`).

### Cache-Direktiven

Die folgende Tabelle listet die Standard-`Cache-Control`-Direktiven auf:

| Anfrage                             | Antwort                                             |
| ----------------------------------- | --------------------------------------------------- |
| [`max-age`](#max-age)               | [`max-age`](#max-age)                               |
| [`max-stale`](#max-stale)           | -                                                   |
| [`min-fresh`](#min-fresh)           | -                                                   |
| -                                   | [`s-maxage`](#s-maxage)                             |
| [`no-cache`](#no-cache)             | [`no-cache`](#no-cache)                             |
| [`no-store`](#no-store)             | [`no-store`](#no-store)                             |
| [`no-transform`](#no-transform)     | [`no-transform`](#no-transform)                     |
| [`only-if-cached`](#only-if-cached) | -                                                   |
| -                                   | [`must-revalidate`](#must-revalidate)               |
| -                                   | [`proxy-revalidate`](#proxy-revalidate)             |
| -                                   | [`must-understand`](#must-understand)               |
| -                                   | [`private`](#private)                               |
| -                                   | [`public`](#public)                                 |
| -                                   | [`immutable`](#immutable)                           |
| -                                   | [`stale-while-revalidate`](#stale-while-revalidate) |
| [`stale-if-error`](#stale-if-error) | [`stale-if-error`](#stale-if-error)                 |

Hinweis: Überprüfen Sie die [Kompatibilitätstabelle](#browser-kompatibilität) für deren Unterstützung; Benutzeragenten, die sie nicht erkennen, sollten sie ignorieren.

## Vokabular

Dieser Abschnitt definiert die in diesem Dokument verwendeten Begriffe, von denen einige aus der Spezifikation stammen.

- (HTTP) Cache
  - : Implementierung, die Anfragen und Antworten speichert, um sie bei nachfolgenden Anfragen erneut zu verwenden. Es kann sich entweder um einen gemeinsamen Cache oder einen privaten Cache handeln.
- Gemeinsamer Cache
  - : Cache, der zwischen dem Ursprungsserver und den Clients existiert (z. B. Proxy, CDN). Er speichert eine einzelne Antwort und verwendet sie erneut bei mehreren Benutzern – daher sollten Entwickler vermeiden, personalisierte Inhalte im gemeinsamen Cache zu speichern.
- Privater Cache
  - : Cache, der sich im Client befindet. Er wird auch als _lokaler Cache_ oder _Browser-Cache_ bezeichnet. Er kann personalisierte Inhalte für einen einzelnen Benutzer speichern und erneut verwenden.
- Antwort speichern
  - : Eine Antwort in Caches speichern, wenn die Antwort zwischenspeicherbar ist. Die zwischengespeicherte Antwort wird jedoch nicht immer unverändert wiederverwendet. (In der Regel bedeutet "cache", eine Antwort zu speichern.)
- Antwort wiederverwenden
  - : Zwischengespeicherte Antworten für nachfolgende Anfragen wiederverwenden.
- Antwort erneut validieren
  - : Den Ursprungsserver fragen, ob die gespeicherte Antwort noch [frisch](/de/docs/Web/HTTP/Guides/Caching#fresh_and_stale_based_on_age) ist. Normalerweise erfolgt die erneute Validierung über eine bedingte Anfrage.
- Frische Antwort
  - : Gibt an, dass die Antwort [frisch](/de/docs/Web/HTTP/Guides/Caching#fresh_and_stale_based_on_age) ist. Dies bedeutet normalerweise, dass die Antwort für nachfolgende Anfragen wiederverwendet werden kann, abhängig von den Anforderungs-Direktiven.
- Veraltete Antwort
  - : Gibt an, dass die Antwort eine [veraltete Antwort](/de/docs/Web/HTTP/Guides/Caching#fresh_and_stale_based_on_age) ist. Dies bedeutet normalerweise, dass die Antwort nicht unverändert wiederverwendet werden kann. Der Cache muss veraltete Antworten nicht sofort entfernen, da die erneute Validierung die Antwort wieder in eine [frische](/de/docs/Web/HTTP/Guides/Caching#fresh_and_stale_based_on_age) Antwort ändern könnte.
- Alter
  - : Die Zeit, seit eine Antwort generiert wurde. Es ist ein Kriterium dafür, ob eine Antwort [frisch oder veraltet](/de/docs/Web/HTTP/Guides/Caching#fresh_and_stale_based_on_age) ist.

## Direktiven

Dieser Abschnitt listet Direktiven auf, die das Caching beeinflussen – sowohl Antwort- als auch Anforderungs-Direktiven.

### Antwort-Direktiven

#### `max-age`

Die `max-age=N`-Antwort-Direktive gibt an, dass die Antwort _N_ Sekunden nach der Generierung der Antwort [frisch](/de/docs/Web/HTTP/Guides/Caching#fresh_and_stale_based_on_age) bleibt.

```http
Cache-Control: max-age=604800
```

Gibt an, dass Caches diese Antwort speichern und für nachfolgende Anfragen wiederverwenden können, solange sie [frisch](/de/docs/Web/HTTP/Guides/Caching#fresh_and_stale_based_on_age) ist.

Beachten Sie, dass `max-age` nicht die vergangene Zeit seit dem Empfang der Antwort ist; es handelt sich um die vergangene Zeit seit der Generierung der Antwort auf dem Ursprungsserver. Wenn der andere Cache – im Netzwerkpfad, den die Antwort nimmt – die Antwort 100 Sekunden speichert (angezeigt durch das `Age`-Antwort-Header-Feld), würde der Browser-Cache 100 Sekunden von seiner [Frischelebensdauer](/de/docs/Web/HTTP/Guides/Caching#fresh_and_stale_based_on_age) abziehen.

Wenn der `max-age`-Wert negativ ist (zum Beispiel `-1`) oder keine ganze Zahl ist (zum Beispiel `3599.99`), ist das Cache-Verhalten nicht spezifiziert. Caches sollten den Wert behandeln, als ob er `0` wäre (dies ist im Abschnitt zur [Berechnung der Frischelebensdauer](https://httpwg.org/specs/rfc9111.html#calculating.freshness.lifetime) der HTTP-Spezifikation angegeben).

```http
Cache-Control: max-age=604800
Age: 100
```

#### `s-maxage`

Die `s-maxage`-Antwort-Direktive gibt an, wie lange die Antwort in einem gemeinsamen Cache [frisch](/de/docs/Web/HTTP/Guides/Caching#fresh_and_stale_based_on_age) bleibt. Die `s-maxage`-Direktive wird von privaten Caches ignoriert und überschreibt den durch die `max-age`-Direktive oder den `Expires`-Header angegebenen Wert für gemeinsame Caches, sofern vorhanden.

```http
Cache-Control: s-maxage=604800
```

#### `no-cache`

Die `no-cache`-Antwort-Direktive gibt an, dass die Antwort in Caches gespeichert werden kann, aber die Antwort muss mit dem Ursprungsserver vor jeder Wiederverwendung validiert werden, selbst wenn der Cache vom Ursprungsserver getrennt ist.

```http
Cache-Control: no-cache
```

Wenn Sie möchten, dass Caches immer auf Inhaltsaktualisierungen prüfen, während gespeicherte Inhalte wiederverwendet werden, ist `no-cache` die zu verwendende Direktive. Sie tut dies, indem sie Caches dazu zwingt, jede Anfrage mit dem Ursprungsserver zu validieren.

Beachten Sie, dass `no-cache` nicht "nicht zwischenspeichern" bedeutet. `no-cache` erlaubt Caches, eine Antwort zu speichern, erfordert jedoch, dass sie vor der Wiederverwendung validiert wird. Wenn der gemeinte "nicht zwischenspeichern"-Sinn tatsächlich "nicht speichern" ist, dann ist `no-store` die zu verwendende Direktive.

> [!NOTE]
> Die `no-cache`-Direktive garantiert keine Validierung für Verlaufsnavigationen – wie z. B. solche, die über die <kbd>Zurück</kbd>-Taste durchgeführt werden.
> Wenn der vor/zurück-Cache ({{Glossary("bfcache", "bfcache")}}) verwendet wird, stellt der Browser einen Snapshot der Seite wieder her, ohne zu validieren.
> Selbst wenn der bfcache nicht verwendet wird, kann der Browser die zwischengespeicherte Antwort ohne Validierung bereitstellen.
> Dies ist [von der Spezifikation erlaubt](https://httpwg.org/specs/rfc7234.html#history.lists), da Verlaufsnavigationen in der Regel als Wiederherstellen eines Snapshots einer historischen Sitzung und nicht als neue Anfrage für eine zuvor besuchte Seite behandelt werden.

#### `must-revalidate`

Die `must-revalidate`-Antwort-Direktive gibt an, dass die Antwort in Caches gespeichert und wiederverwendet werden kann, solange sie [frisch](/de/docs/Web/HTTP/Guides/Caching#fresh_and_stale_based_on_age) ist. Wenn die Antwort [veraltet](/de/docs/Web/HTTP/Guides/Caching#fresh_and_stale_based_on_age) wird, muss sie vor der Wiederverwendung mit dem Ursprungsserver validiert werden.

Typischerweise wird `must-revalidate` zusammen mit `max-age` verwendet.

```http
Cache-Control: max-age=604800, must-revalidate
```

HTTP erlaubt Caches, [veraltete Antworten](/de/docs/Web/HTTP/Guides/Caching#fresh_and_stale_based_on_age) wiederzuverwenden, wenn sie vom Ursprungsserver getrennt sind. `must-revalidate` verhindert dies - entweder wird die gespeicherte Antwort mit dem Ursprungsserver validiert oder eine 504 (Gateway Timeout) Antwort wird generiert.

> [!NOTE]
> Die `must-revalidate`-Direktive garantiert keine Validierung für Verlaufsnavigationen – wie z. B. solche, die über die <kbd>Zurück</kbd>-Taste durchgeführt werden.
> Wenn der vor/zurück-Cache ({{Glossary("bfcache", "bfcache")}}) verwendet wird, stellt der Browser einen Snapshot der Seite wieder her, ohne zu validieren.
> Selbst wenn der bfcache nicht verwendet wird, kann der Browser die zwischengespeicherte Antwort ohne Validierung bereitstellen.
> Dies ist [von der Spezifikation erlaubt](https://httpwg.org/specs/rfc7234.html#history.lists), da Verlaufsnavigationen in der Regel als Wiederherstellen eines Snapshots einer historischen Sitzung und nicht als neue Anfrage für eine zuvor besuchte Seite behandelt werden.

#### `proxy-revalidate`

Die `proxy-revalidate`-Antwort-Direktive entspricht `must-revalidate`, bezieht sich jedoch speziell nur auf gemeinsame Caches.

#### `no-store`

Die `no-store`-Antwort-Direktive gibt an, dass keine Art von Cache (privat oder gemeinsam) diese Antwort speichern sollte.

```http
Cache-Control: no-store
```

#### `private`

Die `private`-Antwort-Direktive gibt an, dass die Antwort nur in einem privaten Cache (z. B. lokale Caches in Browsern) gespeichert werden kann.

```http
Cache-Control: private
```

Sie sollten die `private`-Direktive für benutzerpersonalisierte Inhalte hinzufügen, insbesondere für Antworten nach dem Einloggen und für Sitzungen, die über Cookies verwaltet werden.

Wenn Sie vergessen, `private` zu einer Antwort mit personalisierten Inhalten hinzuzufügen, kann diese Antwort in einem gemeinsamen Cache gespeichert und für mehrere Benutzer wiederverwendet werden, was zu einem Leck von persönlichen Informationen führen kann.

#### `public`

Die `public`-Antwort-Direktive gibt an, dass die Antwort in einem gemeinsamen Cache gespeichert werden kann. Antworten für Anfragen mit `Authorization`-Header-Feldern dürfen nicht in einem gemeinsamen Cache gespeichert werden; jedoch wird die `public`-Direktive dazu führen, dass solche Antworten in einem gemeinsamen Cache gespeichert werden.

```http
Cache-Control: public
```

Im Allgemeinen, wenn Seiten unter Basis-Auth oder Digest-Auth stehen, sendet der Browser Anfragen mit dem `Authorization`-Header. Das bedeutet, dass die Antwort für eingeschränkte Benutzer (die Konten haben) zugriffsgesteuert ist und grundsätzlich nicht für gemeinsame Caches geeignet ist, selbst wenn sie `max-age` hat.

Sie können die `public`-Direktive verwenden, um diese Einschränkung aufzuheben.

```http
Cache-Control: public, max-age=604800
```

Beachten Sie, dass `s-maxage` oder `must-revalidate` diese Einschränkung auch aufheben.

Wenn eine Anfrage keinen `Authorization`-Header hat oder Sie bereits `s-maxage` oder `must-revalidate` in der Antwort verwenden, müssen Sie `public` nicht verwenden.

#### `must-understand`

Die `must-understand`-Antwort-Direktive gibt an, dass ein Cache die Antwort nur speichern sollte, wenn er die Anforderungen für das Caching basierend auf dem Statuscode versteht.

`must-understand` sollte mit `no-store` für Fallback-Verhalten gekoppelt werden.

```http
Cache-Control: must-understand, no-store
```

Wenn ein Cache `must-understand` nicht unterstützt, wird es ignoriert. Falls `no-store` ebenfalls vorhanden ist, wird die Antwort nicht gespeichert.

Wenn ein Cache `must-understand` unterstützt, speichert es die Antwort mit einem Verständnis der Cache-Anforderungen basierend auf ihrem Statuscode.

#### `no-transform`

Einige Zwischenstellen transformieren Inhalte aus verschiedenen Gründen. Zum Beispiel konvertieren einige Bilder, um die Übertragungsgröße zu reduzieren. In einigen Fällen ist dies für den Inhaltsanbieter unerwünscht.

`no-transform` gibt an, dass keine Zwischenstelle (unabhängig davon, ob sie einen Cache implementiert) den Antwortinhalt transformieren sollte.

#### `immutable`

Die `immutable`-Antwort-Direktive gibt an, dass die Antwort nicht aktualisiert wird, solange sie [frisch](/de/docs/Web/HTTP/Guides/Caching#fresh_and_stale_based_on_age) ist.

```http
Cache-Control: public, max-age=604800, immutable
```

Eine moderne Best Practice für statische Ressourcen besteht darin, Versionen/Hashes in ihre URLs aufzunehmen und die Ressourcen niemals zu ändern – sondern wenn nötig, die Ressourcen mit neueren Versionen zu _aktualisieren_, die neue Versionsnummern/Hashes haben, sodass ihre URLs unterschiedlich sind. Dies wird als **Cache-Busting**-Muster bezeichnet.

```html
<script src="https://example.com/react.0.0.0.js"></script>
```

Wenn ein Benutzer den Browser neu lädt, sendet der Browser bedingte Anfragen zur Validierung an den Ursprungsserver. Es ist jedoch nicht notwendig, diese Art von statischen Ressourcen erneut zu validieren, selbst wenn ein Benutzer den Browser neu lädt, da sie nie modifiziert werden. `immutable` teilt einem Cache mit, dass die Antwort unveränderlich ist, solange sie [frisch](/de/docs/Web/HTTP/Guides/Caching#fresh_and_stale_based_on_age) ist, und vermeidet unnötige bedingte Anfragen an den Server.

Wenn Sie ein Cache-Busting-Muster für Ressourcen verwenden und diese auf ein langes `max-age` anwenden, können Sie auch `immutable` hinzufügen, um eine erneute Validierung zu vermeiden.

#### `stale-while-revalidate`

Die `stale-while-revalidate`-Antwort-Direktive gibt an, dass der Cache eine veraltete Antwort wiederverwenden kann, während er sie im Hintergrund mit einem Cache validiert.

```http
Cache-Control: max-age=604800, stale-while-revalidate=86400
```

Im obigen Beispiel ist die Antwort für 7 Tage (604800s) [frisch](/de/docs/Web/HTTP/Guides/Caching#fresh_and_stale_based_on_age). Nach 7 Tagen wird sie [veraltet](/de/docs/Web/HTTP/Guides/Caching#fresh_and_stale_based_on_age), aber der Cache darf sie für alle Anfragen, die am folgenden Tag (86400s) gestellt werden, wiederverwenden, vorausgesetzt, dass sie im Hintergrund validiert wird.

Eine erneute Validierung macht den Cache wieder [frisch](/de/docs/Web/HTTP/Guides/Caching#fresh_and_stale_based_on_age), sodass es für die Clients so aussieht, als wäre er während dieser Zeit immer [frisch](/de/docs/Web/HTTP/Guides/Caching#fresh_and_stale_based_on_age), was effektiv den Latenzverlust der erneuten Validierung vor ihnen versteckt.

Wenn während dieser Zeit keine Anfragen gestellt werden, wird der Cache [veraltet](/de/docs/Web/HTTP/Guides/Caching#fresh_and_stale_based_on_age) und die nächste Anfrage wird normal validieren.

#### `stale-if-error`

Die `stale-if-error`-Antwort-Direktive gibt an, dass der Cache eine [veraltete Antwort](/de/docs/Web/HTTP/Guides/Caching#fresh_and_stale_based_on_age) wiederverwenden kann, wenn ein Upstream-Server einen Fehler generiert oder wenn der Fehler lokal generiert wird. Hierbei wird ein Fehler als jede Antwort mit einem Statuscode von 500, 502, 503 oder 504 betrachtet.

```http
Cache-Control: max-age=604800, stale-if-error=86400
```

Im obigen Beispiel ist die Antwort für 7 Tage (604800s) [frisch](/de/docs/Web/HTTP/Guides/Caching#fresh_and_stale_based_on_age). Danach wird sie [veraltet](/de/docs/Web/HTTP/Guides/Caching#fresh_and_stale_based_on_age), kann jedoch für einen zusätzlichen Tag (86400s) verwendet werden, wenn ein Fehler auftritt.

Nachdem die `stale-if-error`-Periode abläuft, erhält der Client jeden generierten Fehler.

### Anforderungs-Direktiven

#### `no-cache`

Die `no-cache`-Anforderungs-Direktive fordert Caches auf, die Antwort mit dem Ursprungsserver vor der Wiederverwendung zu validieren.

```http
Cache-Control: no-cache
```

`no-cache` erlaubt es Clients, die aktuellste Antwort anzufordern, selbst wenn der Cache eine [frische](/de/docs/Web/HTTP/Guides/Caching#fresh_and_stale_based_on_age) Antwort hat.

Browser fügen Anfragen in der Regel `no-cache` hinzu, wenn Benutzer eine Seite **erneut laden**.

#### `no-store`

Die `no-store`-Anforderungs-Direktive erlaubt es einem Client, Caches aufzufordern, die Anfrage und die entsprechende Antwort nicht zu speichern – selbst wenn die Ursprungsserver-Antwort zwischenspeicherbar wäre.

```http
Cache-Control: no-store
```

#### `max-age`

Die `max-age=N`-Anforderungs-Direktive gibt an, dass der Client eine zwischengespeicherte Antwort akzeptiert, die innerhalb von _N_ Sekunden auf dem Ursprungsserver generiert wurde, wobei _N_ eine nicht-negative ganze Zahl sein kann (einschließlich `0`).

```http
Cache-Control: max-age=10800
```

Im obigen Fall, wenn die Antwort mit `Cache-Control: max-age=10800` vor mehr als 3 Stunden (berechnet durch `max-age` und den `Age`-Header) generiert wurde, könnte der Cache diese Antwort nicht wiederverwenden.

Viele Browser verwenden diese Direktive für das **Erneutladen**, wie unten erklärt.

```http
Cache-Control: max-age=0
```

`max-age=0` ist ein Workaround für `no-cache`, da viele alte (HTTP/1.0) Cache-Implementierungen `no-cache` nicht unterstützen. Kürzlich verwenden Browser immer noch `max-age=0` in "Erneutladen" – zur Abwärtskompatibilität – und verwenden alternativ `no-cache`, um ein "Erzwingen des Neuladens" zu verursachen.

Wenn der `max-age`-Wert negativ ist (zum Beispiel `-1`) oder keine ganze Zahl ist (zum Beispiel `3599.99`), ist das Cache-Verhalten nicht spezifiziert. Caches sollten den Wert behandeln, als ob er `0` wäre.

> [!NOTE]
> Die `max-age`-Direktive garantiert keine Validierung für Verlaufsnavigationen – wie z. B. solche, die über die <kbd>Zurück</kbd>-Taste durchgeführt werden.
> Wenn der vor/zurück-Cache ({{Glossary("bfcache", "bfcache")}}) verwendet wird, stellt der Browser einen Snapshot der Seite wieder her, ohne zu validieren.
> Selbst wenn der bfcache nicht verwendet wird, kann der Browser die zwischengespeicherte Antwort ohne Validierung bereitstellen.
> Dies ist [von der Spezifikation erlaubt](https://httpwg.org/specs/rfc7234.html#history.lists), da Verlaufsnavigationen in der Regel als Wiederherstellen eines Snapshots einer historischen Sitzung und nicht als neue Anfrage für eine zuvor besuchte Seite behandelt werden.

#### `max-stale`

Die `max-stale=N`-Anforderungs-Direktive gibt an, dass der Client eine zwischengespeicherte Antwort akzeptiert, die innerhalb von _N_ Sekunden [veraltet](/de/docs/Web/HTTP/Guides/Caching#fresh_and_stale_based_on_age) ist.
Wenn kein _N_-Wert angegeben ist, akzeptiert der Client eine veraltete Antwort jeden Alters.

```http
Cache-Control: max-stale=3600
```

Zum Beispiel zeigt eine Anfrage mit dem obigen Header an, dass der Browser eine veraltete Antwort aus dem Cache akzeptiert, die innerhalb der letzten Stunde abgelaufen ist.

Clients können diesen Header verwenden, wenn der Ursprungsserver ausgefallen oder zu langsam ist, und können zwischengespeicherte Antworten aus Caches akzeptieren, auch wenn sie etwas alt sind.

Beachten Sie, dass die Hauptbrowser keine Anfragen mit `max-stale` unterstützen.

#### `min-fresh`

Die `min-fresh=N`-Anforderungs-Direktive gibt an, dass der Client eine zwischengespeicherte Antwort akzeptiert, die für mindestens _N_ Sekunden [frisch](/de/docs/Web/HTTP/Guides/Caching#fresh_and_stale_based_on_age) ist.

```http
Cache-Control: min-fresh=600
```

Im obigen Fall, wenn die Antwort mit `Cache-Control: max-age=3600` vor 51 Minuten in Caches gespeichert wurde, könnte der Cache diese Antwort nicht wiederverwenden.

Clients können diesen Header verwenden, wenn der Benutzer verlangt, dass die Antwort nicht nur [frisch](/de/docs/Web/HTTP/Guides/Caching#fresh_and_stale_based_on_age) ist, sondern auch für einen bestimmten Zeitraum nicht aktualisiert wird.

Beachten Sie, dass die Hauptbrowser keine Anfragen mit `min-fresh` unterstützen.

#### `no-transform`

Hat dieselbe Bedeutung wie `no-transform` für eine Antwort, jedoch für eine Anfrage.

#### `only-if-cached`

Der Client gibt an, dass eine bereits zwischengespeicherte Antwort zurückgegeben werden sollte. Wenn ein Cache eine zwischengespeicherte Antwort hat, auch eine veraltete, wird sie zurückgegeben. Wenn keine zwischengespeicherte Antwort verfügbar ist, wird eine [504 Gateway Timeout](/de/docs/Web/HTTP/Reference/Status/504)-Antwort zurückgegeben.

#### `stale-if-error`

Die `stale-if-error`-Anforderungs-Direktive gibt an, dass der Browser bei einem Fehler von einem Zwischenserver für einen bestimmten Ursprung daran interessiert ist, veraltete Inhalte zu erhalten. Dies wird von keinem Browser unterstützt (siehe [Browser-Kompatibilität](#browser-kompatibilität)).

## Anwendungsfälle

### Verhindern des Speicherns

Wenn Sie nicht möchten, dass eine Antwort in Caches gespeichert wird, verwenden Sie die `no-store`-Direktive.

```http
Cache-Control: no-store
```

Beachten Sie, dass `no-cache` bedeutet "es kann gespeichert werden, aber nicht ohne Validierung wiederverwenden" — also ist es nicht dafür da, das Speichern einer Antwort zu verhindern.

```http example-bad
Cache-Control: no-cache
```

Theoretisch sollte bei Direktivenkonflikten die restriktivste Direktive beachtet werden. Das folgende Beispiel ist also im Grunde bedeutungslos, da `private`, `no-cache`, `max-age=0` und `must-revalidate` im Konflikt mit `no-store` stehen.

```http example-bad
# conflicted
Cache-Control: private, no-cache, no-store, max-age=0, must-revalidate

# equivalent to
Cache-Control: no-store
```

### Caching von statischen Assets mit "Cache-Busting"

Wenn Sie statische Assets mit Versions-/Hashing-Mechanismen erstellen, ist es eine gute Möglichkeit, caching zu verwalten, indem Sie eine Version oder einen Hash zum Dateinamen oder zur Abfragezeichenfolge hinzufügen.

Zum Beispiel:

```html
<!-- index.html -->
<script src="/assets/react.min.js"></script>
<img src="/assets/hero.png" width="900" height="400" />
```

Die React-Bibliotheksversion wird sich ändern, wenn Sie die Bibliothek aktualisieren, und auch `hero.png` wird sich ändern, wenn Sie das Bild bearbeiten. Daher sind diese schwer in einem Cache mit `max-age` zu speichern.

In einem solchen Fall könnten Sie die Cache-Bedürfnisse durch die Verwendung einer spezifischen, nummerierten Version der Bibliothek ansprechen und den Hash des Bildes in seine URL aufnehmen.

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

Wenn Sie die Bibliothek aktualisieren oder das Bild bearbeiten, sollte der neue Inhalt eine neue URL haben, und Caches werden nicht wiederverwendet. Das wird als "Cache-Busting"-Muster bezeichnet.

Verwenden Sie ein `no-cache`, um sicherzustellen, dass die HTML-Antwort selbst nicht zwischengespeichert wird. `no-cache` könnte eine erneute Validierung verursachen, und der Client wird korrekt eine neue Version der HTML-Antwort und statische Assets erhalten.

```http
# /index.html
Cache-Control: no-cache
```

Hinweis: Wenn `index.html` unter Basic Authentication oder Digest Authentication verwaltet wird, werden Dateien unter `/assets` nicht im gemeinsamen Cache gespeichert. Wenn Dateien unter `/assets/` für die Speicherung in einem gemeinsamen Cache geeignet sind, benötigen Sie auch eine der folgenden Direktiven: `public`, `s-maxage` oder `must-revalidate`.

### Immer aktuelle Inhalte

Für Inhalte, die dynamisch generiert werden oder statisch sind, aber häufig aktualisiert werden, möchten Sie, dass ein Benutzer immer die aktuellste Version erhält.

Wenn Sie keinen `Cache-Control`-Header hinzufügen, weil die Antwort nicht zwischengespeichert werden soll, könnte dies zu einem unerwarteten Ergebnis führen. Cache-Speicher dürfen es heuristisch zwischenspeichern – also wenn Sie Anforderungen an das Caching haben, sollten Sie sie immer explizit im `Cache-Control`-Header angeben.

Das Hinzufügen von `no-cache` zur Antwort verursacht eine erneute Validierung beim Server, sodass Sie jedes Mal eine [frische](/de/docs/Web/HTTP/Guides/Caching#fresh_and_stale_based_on_age) Antwort bereitstellen können – oder wenn der Client bereits eine neue hat, einfach `304 Not Modified` antworten.

```http
Cache-Control: no-cache
```

Die meisten HTTP/1.0-Caches unterstützen `no-cache`-Direktiven nicht, daher wurde historisch `max-age=0` als Workaround verwendet. Aber nur `max-age=0` könnte bewirken, dass eine [veraltete Antwort](/de/docs/Web/HTTP/Guides/Caching#fresh_and_stale_based_on_age) wiederverwendet wird, wenn Caches vom Ursprungsserver getrennt sind. `must-revalidate` behebt das. Deshalb ist das folgende Beispiel gleichbedeutend mit `no-cache`.

```http
Cache-Control: max-age=0, must-revalidate
```

Aber jetzt können Sie einfach `no-cache` verwenden.

### Löschen eines bereits gespeicherten Caches

Es gibt keine Cache-Direktiven zum Löschen bereits gespeicherter Antworten aus Caches auf _Zwischen_Servern.

Stellen Sie sich vor, dass Clients/Caches eine [frische](/de/docs/Web/HTTP/Guides/Caching#fresh_and_stale_based_on_age) Antwort für einen Pfad speichern, ohne dass eine Anforderungsrunde beim Server erfolgt. Es gibt nichts, was ein Server für diesen Pfad tun könnte.

[`Clear-Site-Data: cache`](/de/docs/Web/HTTP/Reference/Headers/Clear-Site-Data#cache) kann verwendet werden, um jede gespeicherte Antwort für eine Website im Browser-Cache zu löschen; Verwenden Sie dies daher mit Vorsicht.
Beachten Sie, dass dies keine Auswirkungen auf gemeinsame oder Zwischen-Caches hat.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [HTTP-Caching](/de/docs/Web/HTTP/Guides/Caching)
- [Caching-Tutorial für Webautoren und Webmaster](https://mnot.net/cache_docs/)
- [Caching Best Practices & max-age Gotchas](https://jakearchibald.com/2016/caching-best-practices/)
- [Cache-Control für Zivilisten](https://csswizardry.com/2019/03/cache-control-for-civilians/)
- [RFC 9111 – HTTP-Caching](https://httpwg.org/specs/rfc9111.html)
- [RFC 5861 – HTTP Cache-Control Extensions for Stale Content](https://httpwg.org/specs/rfc5861.html)
- [RFC 8246 – HTTP-Immutable-Responses](https://httpwg.org/specs/rfc8246.html)
