---
title: Cache-Control header
short-title: Cache-Control
slug: Web/HTTP/Reference/Headers/Cache-Control
l10n:
  sourceCommit: eff8aa047157f1bd4b1066cae7cc07eab2dcc0dd
---

Der HTTP **`Cache-Control`**-Header enthält _Direktiven_ (Anweisungen) in sowohl Anfragen als auch Antworten, die das [Caching](/de/docs/Web/HTTP/Guides/Caching) in Browsern und geteilten Caches (z.B. Proxys, CDNs) steuern.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>
        {{Glossary("Request_header", "Anfrageheader")}},
        {{Glossary("Response_header", "Antwortheader")}}
      </td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_request_header", "Verbotener Anfrageheader")}}</th>
      <td>Nein</td>
    </tr>
    <tr>
      <th scope="row">
        {{Glossary("CORS-safelisted_response_header", "CORS-aufgelisteter Antwortheader")}}
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

- Caching-Direktiven sind nicht case-sensitiv. Jedoch wird empfohlen, Kleinschreibung zu verwenden, da einige Implementierungen Großbuchstaben-Direktiven nicht erkennen.
- Mehrere Direktiven sind erlaubt und müssen durch Kommas getrennt werden (z.B. `Cache-control: max-age=180, public`).
- Einige Direktiven haben ein optionales Argument. Wenn ein Argument angegeben ist, wird es durch ein Gleichheitszeichen (`=`) vom Direktivnamen getrennt. Typischerweise sind Argumente für die Direktiven Ganzzahlen und sind daher nicht in Anführungszeichen eingeschlossen (z.B. `Cache-control: max-age=12`).

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

Hinweis: Überprüfen Sie die [Kompatibilitätsübersicht](#browser-kompatibilität) bezüglich ihrer Unterstützung; Benutzeragenten, die sie nicht erkennen, sollten sie ignorieren.

## Vokabular

Dieser Abschnitt definiert die in diesem Dokument verwendeten Begriffe, von denen einige aus der Spezifikation stammen.

- (HTTP) Cache
  - : Implementierung, die Anfragen und Antworten speichert, um sie bei nachfolgenden Anfragen wiederzuverwenden. Es kann entweder ein geteilter Cache oder ein privater Cache sein.
- Geteilter Cache
  - : Cache, der zwischen dem Ursprungsserver und den Clients existiert (z.B. Proxy, CDN). Er speichert eine einzelne Antwort und verwendet sie bei mehreren Nutzern wieder – daher sollten Entwickler vermeiden, personalisierte Inhalte im geteilten Cache zu speichern.
- Privater Cache
  - : Cache, der im Client existiert. Er wird auch als _lokaler Cache_ oder _Browser-Cache_ bezeichnet. Er kann personalisierte Inhalte für einen einzelnen Nutzer speichern und wiederverwenden.
- Antwort speichern
  - : Eine Antwort in Caches speichern, wenn die Antwort zwischenspeicherbar ist. Die zwischengespeicherte Antwort wird jedoch nicht immer so wie sie ist wiederverwendet. (Normalerweise bedeutet "cache", eine Antwort zu speichern.)
- Antwort wiederverwenden
  - : Zwischengespeicherte Antworten für nachfolgende Anfragen wiederverwenden.
- Antwort erneut validieren
  - : Den Ursprungsserver fragen, ob die gespeicherte Antwort noch [frisch](/de/docs/Web/HTTP/Guides/Caching#fresh_and_stale_based_on_age) ist. Normalerweise erfolgt die Wiedervalidierung durch eine bedingte Anfrage.
- Frische Antwort
  - : Zeigt an, dass die Antwort [frisch](/de/docs/Web/HTTP/Guides/Caching#fresh_and_stale_based_on_age) ist. Dies bedeutet normalerweise, dass die Antwort für nachfolgende Anfragen wiederverwendet werden kann, abhängig von den Anfragedirektiven.
- Alte Antwort
  - : Zeigt an, dass die Antwort eine [abgestandene](/de/docs/Web/HTTP/Guides/Caching#fresh_and_stale_based_on_age) Antwort ist. Dies bedeutet normalerweise, dass die Antwort nicht so wie sie ist wiederverwendet werden kann. Die Cache-Speicherung muss abgestandene Antworten nicht sofort entfernen, da eine Wiedervalidierung die Antwort von abgestanden zu [frisch](/de/docs/Web/HTTP/Guides/Caching#fresh_and_stale_based_on_age) ändern könnte.
- Alter
  - : Die Zeit seit Erstellung einer Antwort. Sie ist ein Kriterium dafür, ob eine Antwort [frisch oder abgestanden](/de/docs/Web/HTTP/Guides/Caching#fresh_and_stale_based_on_age) ist.

## Direktiven

Dieser Abschnitt listet direktiven auf, die das Caching beeinflussen — sowohl für Antwortdirektiven als auch Anfragedirektiven.

### Antwortdirektiven

#### `max-age`

Die `max-age=N`-Antwortdirektive zeigt an, dass die Antwort _N_ Sekunden nach der Erzeugung der Antwort [frisch](/de/docs/Web/HTTP/Guides/Caching#fresh_and_stale_based_on_age) bleibt.

```http
Cache-Control: max-age=604800
```

Zeigt an, dass Caches diese Antwort speichern und für nachfolgende Anfragen wiederverwenden können, solange sie [frisch](/de/docs/Web/HTTP/Guides/Caching#fresh_and_stale_based_on_age) ist.

Beachten Sie, dass `max-age` nicht die abgelaufene Zeit seit Empfang der Antwort ist; es ist die vergangene Zeit seit der Antworterstellung auf dem Ursprungsserver. Wenn andere Caches — auf dem vom Netzwerk zurückgelegten Weg der Antwort — die Antwort für 100 Sekunden speichern (angezeigt durch das `Age`-Antwortheader-Feld), dann würde der Browser-Cache 100 Sekunden von seiner [Frischezeit](/de/docs/Web/HTTP/Guides/Caching#fresh_and_stale_based_on_age) abziehen.

Wenn der `max-age`-Wert negativ ist (zum Beispiel `-1`) oder keine Ganzzahl (zum Beispiel `3599.99`), dann ist das Caching-Verhalten nicht spezifiziert. Caches werden ermutigt, den Wert so zu behandeln, als ob er `0` wäre (dies wird im Abschnitt [Berechnung der Frischlifetime](https://httpwg.org/specs/rfc9111.html#calculating.freshness.lifetime) der HTTP-Spezifikation erwähnt).

```http
Cache-Control: max-age=604800
Age: 100
```

#### `s-maxage`

Die `s-maxage`-Antwortdirektive gibt an, wie lange die Antwort in einem geteilten Cache [frisch](/de/docs/Web/HTTP/Guides/Caching#fresh_and_stale_based_on_age) bleibt. Die `s-maxage`-Direktive wird von privaten Caches ignoriert und überschreibt den durch die `max-age`-Direktive oder den `Expires`-Header spezifizierten Wert für geteilte Caches, wenn sie vorhanden sind.

```http
Cache-Control: s-maxage=604800
```

#### `no-cache`

Die `no-cache`-Antwortdirektive zeigt an, dass die Antwort in Caches gespeichert werden kann, aber die Antwort mit dem Ursprungsserver vor jeder Wiederverwendung validiert werden muss, selbst wenn der Cache vom Ursprungsserver getrennt ist.

```http
Cache-Control: no-cache
```

Wenn Sie möchten, dass Caches beim Wiederverwenden gespeicherter Inhalte immer nach Aktualisierungen suchen, ist `no-cache` die zu verwendende Direktive. Dies geschieht, indem Caches angewiesen werden, jede Anfrage beim Ursprungsserver erneut zu validieren.

Beachten Sie, dass `no-cache` nicht "nicht cachen" bedeutet. `no-cache` erlaubt Caches, eine Antwort zu speichern, verlangt jedoch von ihnen, sie vor der Wiederverwendung erneut zu validieren. Wenn die von Ihnen gewünschte Bedeutung von "nicht cachen" tatsächlich "nicht speichern" ist, dann ist `no-store` die zu verwendende Direktive.

> [!NOTE]
> Die `no-cache`-Direktive garantiert keine Wiedervalidierung bei Verlauf-Navigationen — wie solche, die mit der <kbd>Zurück</kbd>-Taste durchgeführt werden.
> Wenn der Vorwärts-/Rückwärts-Cache ({{Glossary("bfcache", "bfcache")}}) verwendet wird, stellt der Browser einen Snapshot der Seite wieder her, ohne eine Wiedervalidierung durchzuführen.
> Selbst wenn der bfcache nicht verwendet wird, kann der Browser die zwischengespeicherte Antwort weiterhin ohne Wiedervalidierung bereitstellen.
> Dies ist [durch die Spezifikation erlaubt](https://httpwg.org/specs/rfc7234.html#history.lists), da Verlauf-Navigationen normalerweise als Wiederherstellen eines Snapshots einer historischen Sitzung und nicht als neuer Aufruf einer zuvor besuchten Seite behandelt werden.

Die `must-revalidate`-Antwortdirektive gibt an, dass die Antwort in Caches gespeichert und wiederverwendet werden kann, solange sie [frisch](/de/docs/Web/HTTP/Guides/Caching#fresh_and_stale_based_on_age) ist. Wenn die Antwort [abgestanden](/de/docs/Web/HTTP/Guides/Caching#fresh_and_stale_based_on_age) wird, muss sie vor der Wiederverwendung mit dem Ursprungsserver validiert werden.

Typischerweise wird `must-revalidate` zusammen mit `max-age` verwendet.

```http
Cache-Control: max-age=604800, must-revalidate
```

HTTP erlaubt es Caches, [abgestandene Antworten](/de/docs/Web/HTTP/Guides/Caching#fresh_and_stale_based_on_age) wiederzuverwenden, wenn sie vom Ursprungsserver getrennt sind. `must-revalidate` ist eine Möglichkeit, dies zu verhindern - entweder wird die gespeicherte Antwort mit dem Ursprungsserver erneut validiert oder eine 504 (Gateway Timeout)-Antwort wird generiert.

> [!NOTE]
> Die `must-revalidate`-Direktive garantiert keine Wiedervalidierung bei Verlauf-Navigationen — wie solche, die mit der <kbd>Zurück</kbd>-Taste durchgeführt werden.
> Wenn der Vorwärts-/Rückwärts-Cache ({{Glossary("bfcache", "bfcache")}}) verwendet wird, stellt der Browser einen Snapshot der Seite wieder her, ohne eine Wiedervalidierung durchzuführen.
> Selbst wenn der bfcache nicht verwendet wird, kann der Browser die zwischengespeicherte Antwort weiterhin ohne Wiedervalidierung bereitstellen.
> Dies ist [durch die Spezifikation erlaubt](https://httpwg.org/specs/rfc7234.html#history.lists), da Verlauf-Navigationen normalerweise als Wiederherstellen eines Snapshots einer historischen Sitzung und nicht als neuer Aufruf einer zuvor besuchten Seite behandelt werden.

#### `proxy-revalidate`

Die `proxy-revalidate`-Antwortdirektive ist das Gegenstück zu `must-revalidate`, aber speziell nur für geteilte Caches.

#### `no-store`

Die `no-store`-Antwortdirektive gibt an, dass keine Caches jeglicher Art (privat oder geteilt) diese Antwort speichern sollten.

```http
Cache-Control: no-store
```

#### `private`

Die `private`-Antwortdirektive zeigt an, dass die Antwort nur in einem privaten Cache (z.B. lokale Caches in Browsern) gespeichert werden kann.

```http
Cache-Control: private
```

Sie sollten die `private`-Direktive für benutzerpersonalisierte Inhalte hinzufügen, insbesondere für Antworten, die nach der Anmeldung erhalten wurden, und für Sitzungen, die über Cookies verwaltet werden.

Wenn Sie vergessen, `private` zu einer Antwort mit personalisierten Inhalten hinzuzufügen, könnte diese Antwort im geteilten Cache gespeichert und möglicherweise für mehrere Benutzer wiederverwendet werden, was zu einem Leck von persönlichen Informationen führen kann.

#### `public`

Die `public`-Antwortdirektive zeigt an, dass die Antwort in einem geteilten Cache gespeichert werden kann. Antworten auf Anfragen mit `Authorization`-Header-Feldern dürfen nicht in einem geteilten Cache gespeichert werden; jedoch wird die `public`-Direktive dazu führen, dass solche Antworten in einem geteilten Cache gespeichert werden.

```http
Cache-Control: public
```

Im Allgemeinen senden Browser bei Zugriffen, die durch Basis- oder Digest-Authentifizierung gesichert sind, Anfragen mit dem `Authorization`-Header. Dies bedeutet, dass die Antwort bei eingeschränktem Zugriff (für Benutzer mit Konten) in ihrem Kern nicht für geteilte Caches verfügbar ist, selbst wenn sie `max-age` enthält.

Sie können die `public`-Direktive verwenden, um diese Einschränkung aufzuheben.

```http
Cache-Control: public, max-age=604800
```

Beachten Sie, dass `s-maxage` oder `must-revalidate` diese Einschränkung ebenfalls aufheben.

Wenn eine Anfrage keinen `Authorization`-Header hat, oder Sie bereits `s-maxage` oder `must-revalidate` in der Antwort verwenden, dann brauchen Sie `public` nicht zu verwenden.

#### `must-understand`

Die `must-understand`-Antwortdirektive zeigt an, dass ein Cache die Antwort nur speichern sollte, wenn er die Anforderungen an das Caching basierend auf dem Statuscode versteht.

`must-understand` sollte mit `no-store` für das Fallback-Verhalten gekoppelt werden.

```http
Cache-Control: must-understand, no-store
```

Wenn ein Cache `must-understand` nicht unterstützt, wird es ignoriert. Wenn `no-store` ebenfalls vorhanden ist, wird die Antwort nicht gespeichert.

Wenn ein Cache `must-understand` unterstützt, speichert es die Antwort mit einem Verständnis der Caching-Anforderungen basierend auf dessen Statuscode.

#### `no-transform`

Einige Vermittler transformieren Inhalte aus verschiedenen Gründen. Zum Beispiel konvertieren einige Bilder, um die Übertragungsgröße zu reduzieren. In einigen Fällen ist dies für den Inhaltsanbieter unerwünscht.

`no-transform` gibt an, dass kein Vermittler (egal, ob er einen Cache implementiert oder nicht) die Antwortinhalte transformieren sollte.

#### `immutable`

Die `immutable`-Antwortdirektive gibt an, dass die Antwort nicht aktualisiert wird, solange sie [frisch](/de/docs/Web/HTTP/Guides/Caching#fresh_and_stale_based_on_age) ist.

```http
Cache-Control: public, max-age=604800, immutable
```

Eine moderne bewährte Praxis für statische Ressourcen beinhaltet, Versionsnummern/Hashes in deren URLs zu integrieren, während die Ressourcen niemals geändert werden — stattdessen werden sie bei Bedarf mit neueren Versionen aktualisiert, die neue Versionsnummern/Hashes enthalten, sodass ihre URLs unterschiedlich sind. Das wird als **Cache-Busting**-Muster bezeichnet.

```html
<script src="https://example.com/react.0.0.0.js"></script>
```

Wenn ein Benutzer den Browser neu lädt, sendet der Browser bedingte Anfragen zur Validierung an den Ursprungsserver. Aber es ist nicht notwendig, solche Arten von statischen Ressourcen erneut zu validieren, selbst wenn ein Benutzer den Browser neu lädt, weil sie niemals geändert werden.
`immutable` teilt einem Cache mit, dass die Antwort unveränderlich ist, solange sie [frisch](/de/docs/Web/HTTP/Guides/Caching#fresh_and_stale_based_on_age) ist, und vermeidet solche Arten von unnötigen bedingten Anfragen an den Server.

Wenn Sie ein Cache-Busting-Muster für Ressourcen verwenden und es auf eine lange `max-age` anwenden, können Sie auch `immutable` hinzufügen, um die Wiedervalidierung zu vermeiden.

#### `stale-while-revalidate`

Die `stale-while-revalidate`-Antwortdirektive gibt an, dass der Cache eine abgestandene Antwort wiederverwenden könnte, während er sie im Hintergrund validiert.

```http
Cache-Control: max-age=604800, stale-while-revalidate=86400
```

Im obigen Beispiel ist die Antwort für 7 Tage (604800s) [frisch](/de/docs/Web/HTTP/Guides/Caching#fresh_and_stale_based_on_age).
Nach 7 Tagen wird sie [abgestanden](/de/docs/Web/HTTP/Guides/Caching#fresh_and_stale_based_on_age), aber der Cache darf sie für Anfragen, die im folgenden Tag (86400s) gestellt werden, wiederverwenden, vorausgesetzt, dass sie die Antwort im Hintergrund validieren.

Die Wiedervalidierung wird den Cache wieder [frisch](/de/docs/Web/HTTP/Guides/Caching#fresh_and_stale_based_on_age) machen, sodass es den Clients so erscheint, als wäre sie immer [frisch](/de/docs/Web/HTTP/Guides/Caching#fresh_and_stale_based_on_age) während dieses Zeitraums — effektiv wird die Latenzstrafe der Wiedervalidierung vor ihnen verborgen.

Wenn während dieses Zeitraums keine Anfrage erfolgte, wird der Cache [abgestanden](/de/docs/Web/HTTP/Guides/Caching#fresh_and_stale_based_on_age) und die nächste Anfrage wird normal validiert.

#### `stale-if-error`

Die `stale-if-error`-Antwortdirektive zeigt an, dass der Cache eine [abgestandene Antwort](/de/docs/Web/HTTP/Guides/Caching#fresh_and_stale_based_on_age) wiederverwenden kann, wenn ein upstream Server einen Fehler generiert oder wenn der Fehler lokal generiert wird. Hier wird ein Fehler als jede Antwort mit einem Statuscode von 500, 502, 503 oder 504 betrachtet.

```http
Cache-Control: max-age=604800, stale-if-error=86400
```

Im obigen Beispiel ist die Antwort für 7 Tage (604800s) [frisch](/de/docs/Web/HTTP/Guides/Caching#fresh_and_stale_based_on_age). Danach wird sie [abgestanden](/de/docs/Web/HTTP/Guides/Caching#fresh_and_stale_based_on_age), kann aber für weitere 1 Tag (86400s) verwendet werden, wenn ein Fehler auftritt.

Nach Ablauf des stale-if-error-Zeitraums erhält der Client jeden generierten Fehler.

### Anfrage-Direktiven

#### `no-cache`

Die `no-cache`-Anfragedirektive fordert Caches auf, die Antwort mit dem Ursprungsserver zu validieren, bevor sie wiederverwendet wird.

```http
Cache-Control: no-cache
```

`no-cache` ermöglicht es Clients, die aktuellste Antwort anzufordern, auch wenn der Cache eine [frische](/de/docs/Web/HTTP/Guides/Caching#fresh_and_stale_based_on_age) Antwort hat.

Browser fügen Anfragen normalerweise `no-cache` hinzu, wenn Benutzer eine Seite **erzwungen neu laden**.

#### `no-store`

Die `no-store`-Anfragedirektive erlaubt es einem Client, Caches zu bitten, das Speichern der Anfrage und der entsprechenden Antwort zu vermeiden — selbst wenn die Antwort des Ursprungsservers zwischenspeicherbar wäre.

```http
Cache-Control: no-store
```

#### `max-age`

Die `max-age=N`-Anfragedirektive zeigt an, dass der Client eine gespeicherte Antwort erlaubt, die auf dem Ursprungsserver innerhalb von _N_ Sekunden generiert wurde — wobei _N_ jede nicht negative Ganzzahl (einschließlich `0`) sein kann.

```http
Cache-Control: max-age=10800
```

Im obigen Fall, wenn die Antwort mit `Cache-Control: max-age=10800` vor mehr als 3 Stunden (berechnet aus `max-age` und dem `Age`-Header) generiert wurde, könnte der Cache diese Antwort nicht wiederverwenden.

Viele Browser verwenden diese Direktive für **Neuladen**, wie unten erklärt.

```http
Cache-Control: max-age=0
```

`max-age=0` ist ein Workaround für `no-cache`, weil viele alte (HTTP/1.0) Cache-Implementierungen `no-cache` nicht unterstützen. Kürzlich verwenden Browser immer noch `max-age=0` beim "Neuladen" — aus Gründen der Rückwärtskompatibilität — und alternativ verwenden sie `no-cache` für ein "erzwungenes Neuladen".

Wenn der `max-age`-Wert negativ ist (zum Beispiel `-1`) oder keine Ganzzahl (zum Beispiel `3599.99`), dann ist das Caching-Verhalten nicht spezifiziert. Caches werden ermutigt, den Wert so zu behandeln, als ob er `0` wäre.

> [!NOTE]
> Die `max-age`-Direktive garantiert keine Wiedervalidierung bei Verlauf-Navigationen — wie solche, die mit der <kbd>Zurück</kbd>-Taste durchgeführt werden.
> Wenn der Vorwärts-/Rückwärts-Cache ({{Glossary("bfcache", "bfcache")}}) verwendet wird, stellt der Browser einen Snapshot der Seite wieder her, ohne eine Wiedervalidierung durchzuführen.
> Selbst wenn der bfcache nicht verwendet wird, kann der Browser die zwischengespeicherte Antwort weiterhin ohne Wiedervalidierung bereitstellen.
> Dies ist [durch die Spezifikation erlaubt](https://httpwg.org/specs/rfc7234.html#history.lists), da Verlauf-Navigationen normalerweise als Wiederherstellen eines Snapshots einer historischen Sitzung und nicht als neuer Aufruf einer zuvor besuchten Seite behandelt werden.

#### `max-stale`

Die `max-stale=N`-Anfragedirektive zeigt an, dass der Client eine gespeicherte Antwort erlaubt, die innerhalb von _N_ Sekunden [abgestanden](/de/docs/Web/HTTP/Guides/Caching#fresh_and_stale_based_on_age) ist. Wenn kein _N_-Wert angegeben ist, akzeptiert der Client eine abgestandene Antwort jeden Alters.

```http
Cache-Control: max-stale=3600
```

Zum Beispiel zeigt eine Anfrage mit dem obigen Header an, dass der Browser eine abgestandene Antwort aus dem Cache akzeptiert, die innerhalb der letzten Stunde abgelaufen ist.

Clients können diesen Header verwenden, wenn der Ursprungsserver nicht verfügbar oder zu langsam ist und sie zwischengespeicherte Antworten akzeptieren können, selbst wenn sie ein wenig veraltet sind.

Beachten Sie, dass die meisten großen Browser Anfragen mit `max-stale` nicht unterstützen.

#### `min-fresh`

Die `min-fresh=N`-Anfragedirektive zeigt an, dass der Client eine gespeicherte Antwort erlaubt, die für mindestens _N_ Sekunden [frisch](/de/docs/Web/HTTP/Guides/Caching#fresh_and_stale_based_on_age) ist.

```http
Cache-Control: min-fresh=600
```

Im obigen Fall, wenn die Antwort mit `Cache-Control: max-age=3600` vor 51 Minuten in Caches gespeichert wurde, könnte der Cache diese Antwort nicht wiederverwenden.

Clients können diesen Header verwenden, wenn der Benutzer erfordert, dass die Antwort nicht nur [frisch](/de/docs/Web/HTTP/Guides/Caching#fresh_and_stale_based_on_age) ist, sondern auch, dass sie für eine bestimmte Zeitspanne nicht aktualisiert wird.

Beachten Sie, dass die meisten großen Browser Anfragen mit `min-fresh` nicht unterstützen.

#### `no-transform`

Gleiche Bedeutung wie `no-transform` für eine Antwort, aber stattdessen für eine Anfrage.

#### `only-if-cached`

Der Client gibt an, dass eine bereits zwischengespeicherte Antwort zurückgegeben werden sollte. Wenn ein Cache eine gespeicherte Antwort hat, selbst eine abgestandene, wird sie zurückgegeben. Wenn keine zwischengespeicherte Antwort verfügbar ist, wird eine [504 Gateway Timeout](/de/docs/Web/HTTP/Reference/Status/504)-Antwort zurückgegeben.

#### `stale-if-error`

Die `stale-if-error`-Anfragedirektive zeigt an, dass der Browser daran interessiert ist, abgestandene Inhalte bei einem Fehler von einem beliebigen Zwischensever für einen bestimmten Ursprung zu erhalten. Dies wird von keinem Browser unterstützt (siehe [Browser-Kompatibilität](#browser-kompatibilität)).

## Anwendungsfälle

### Speicherung verhindern

Wenn Sie nicht möchten, dass eine Antwort in Caches gespeichert wird, verwenden Sie die Direktive `no-store`.

```http
Cache-Control: no-store
```

Beachten Sie, dass `no-cache` bedeutet "es kann gespeichert werden, aber nicht wiederverwenden, bevor es validiert wird" — daher ist es nicht dafür gedacht, eine Antwort daran zu hindern, gespeichert zu werden.

```http example-bad
Cache-Control: no-cache
```

Theoretisch sollte bei widersprüchlichen Direktiven die restriktivste Direktive eingehalten werden. Daher ist das folgende Beispiel praktisch bedeutungslos, weil `private`, `no-cache`, `max-age=0` und `must-revalidate` mit `no-store` in Konflikt stehen.

```http example-bad
# conflicted
Cache-Control: private, no-cache, no-store, max-age=0, must-revalidate

# equivalent to
Cache-Control: no-store
```

### Caching statischer Ressourcen mit "Cache-Busting"

Wenn Sie statische Ressourcen mit Versionierungs-/Hashing-Mechanismen erstellen, ist das Hinzufügen einer Versionsnummer/eines Hashs zum Dateinamen oder zum Abfrage-String eine gute Möglichkeit, das Caching zu verwalten.

Zum Beispiel:

```html
<!-- index.html -->
<script src="/assets/react.min.js"></script>
<img src="/assets/hero.png" width="900" height="400" />
```

Die Version der React-Bibliothek wird sich ändern, wenn Sie die Bibliothek aktualisieren, und `hero.png` wird sich auch ändern, wenn Sie das Bild bearbeiten. Daher sind diese schwer in einem Cache mit `max-age` zu speichern.

In einem solchen Fall könnten Sie die Caching-Bedürfnisse durch die Verwendung einer spezifischen, nummerierten Version der Bibliothek adressieren und den Hash des Bildes in seine URL einfügen.

```html
<!-- index.html -->
<script src="/assets/react.0.0.0min.js"></script>
<img src="/assets/hero.png?hash=deadbeef" width="900" height="400" />
```

Sie können einen langen `max-age`-Wert und `immutable` hinzufügen, weil der Inhalt sich nie ändern wird.

```http
# /assets/*
Cache-Control: max-age=31536000, immutable
```

Wenn Sie die Bibliothek aktualisieren oder das Bild bearbeiten, sollten neue Inhalte eine neue URL haben und die Caches werden nicht wiederverwendet. Das wird als "Cache-Busting"-Muster bezeichnet.

Verwenden Sie `no-cache`, um sicherzustellen, dass die HTML-Antwort selbst nicht zwischengespeichert wird. `no-cache` könnte eine Wiedervalidierung verursachen und der Client wird korrekt eine neue Version der HTML-Antwort und der statischen Ressourcen erhalten.

```http
# /index.html
Cache-Control: no-cache
```

Hinweis: Wenn `index.html` unter einer Basis- oder Digest-Authentifizierung kontrolliert wird, werden Dateien unter `/assets` nicht im geteilten Cache gespeichert. Wenn die Dateien unter `/assets/` für die Speicherung in einem geteilten Cache geeignet sind, benötigen Sie außerdem eine der folgenden Direktiven: `public`, `s-maxage` oder `must-revalidate`.

### Immer aktuelle Inhalte

Für Inhalte, die dynamisch generiert werden oder die statisch, aber häufig aktualisiert werden, möchten Sie, dass ein Benutzer immer die aktuellste Version erhält.

Wenn Sie keinen `Cache-Control`-Header hinzufügen, weil die Antwort nicht zwischengespeichert werden soll, könnte das zu einem unerwarteten Ergebnis führen. Die Cache-Speicherung darf es heuristisch zwischenspeichern — daher sollten Sie, wenn Sie Anforderungen an das Caching haben, diese immer explizit im `Cache-Control`-Header angeben.

Das Hinzufügen von `no-cache` zur Antwort verursacht eine Wiedervalidierung mit dem Server, sodass Sie jedes Mal eine [frische](/de/docs/Web/HTTP/Guides/Caching#fresh_and_stale_based_on_age) Antwort bereitstellen können — oder wenn der Client bereits eine neue hat, einfach mit `304 Not Modified` antworten.

```http
Cache-Control: no-cache
```

Die meisten HTTP/1.0-Caches unterstützen `no-cache`-Direktiven nicht, weshalb historisch `max-age=0` als Workaround verwendet wurde. Aber nur `max-age=0` könnte eine [abgestandene Antwort](/de/docs/Web/HTTP/Guides/Caching#fresh_and_stale_based_on_age) wiederverwenden, wenn Caches vom Ursprungsserver getrennt sind. `must-revalidate` adressiert das. Deshalb ist das folgende Beispiel äquivalent zu `no-cache`.

```http
Cache-Control: max-age=0, must-revalidate
```

Aber jetzt können Sie einfach `no-cache` verwenden.

### Löschen eines bereits gespeicherten Caches

Es gibt keine Cache-Direktiven zum Löschen bereits gespeicherter Antworten aus Caches auf _Zwischenservern_.

Stellen Sie sich vor, dass Clients/Caches eine [frische](/de/docs/Web/HTTP/Guides/Caching#fresh_and_stale_based_on_age) Antwort für einen Pfad speichern, ohne Anfrageflug zum Server. Der Server könnte nichts an diesem Pfad ändern.

[`Clear-Site-Data: cache`](/de/docs/Web/HTTP/Reference/Headers/Clear-Site-Data#cache) kann verwendet werden, um jede gespeicherte Antwort für eine Site im Browser-Cache zu löschen, daher verwenden Sie dies mit Vorsicht. Beachten Sie, dass dies keine Auswirkungen auf geteilte oder Zwischen-Caches hat.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Weitere Informationen

- [HTTP-Caching](/de/docs/Web/HTTP/Guides/Caching)
- [Caching-Tutorial für Web-Autoren und Webmasters](https://mnot.net/cache_docs/)
- [Caching Best Practices & Max-Age Gotchas](https://jakearchibald.com/2016/caching-best-practices/)
- [Cache-Control für Zivilisten](https://csswizardry.com/2019/03/cache-control-for-civilians/)
- [RFC 9111 – HTTP-Caching](https://httpwg.org/specs/rfc9111.html)
- [RFC 5861 – HTTP-Cache-Control-Erweiterungen für abgestandene Inhalte](https://httpwg.org/specs/rfc5861.html)
- [RFC 8246 – HTTP Unveränderliche Antworten](https://httpwg.org/specs/rfc8246.html)
