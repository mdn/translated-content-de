---
title: Cache-Control header
short-title: Cache-Control
slug: Web/HTTP/Reference/Headers/Cache-Control
l10n:
  sourceCommit: d15e4dc0a813a9accd0e36b818bdadc8ac3ab413
---

Der HTTP-Header **`Cache-Control`** enthält in Anfragen und Antworten _Direktiven_ (Anweisungen), die das [Caching](/de/docs/Web/HTTP/Guides/Caching) in Browsern und gemeinsam genutzten Caches (z. B. Proxys, CDNs) steuern.

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
        {{Glossary("CORS-safelisted_response_header", "CORS-safelisted Antwort-Header")}}
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

- Caching-Direktiven unterscheiden nicht zwischen Groß- und Kleinschreibung. Dennoch wird Kleinschreibung empfohlen, da einige Implementierungen Direktiven in Großschreibung nicht erkennen.
- Mehrere Direktiven sind zulässig und müssen durch Kommas getrennt werden (z. B. `Cache-control: max-age=180, public`).
- Einige Direktiven haben ein optionales Argument. Wenn ein Argument angegeben wird, wird es durch ein Gleichheitszeichen (`=`) vom Namen der Direktive getrennt. Üblicherweise sind Argumente für Direktiven Ganzzahlen und werden daher nicht in Anführungszeichen gesetzt (z. B. `Cache-control: max-age=12`).

### Cache-Direktiven

Die folgende Tabelle führt die Standarddirektiven von `Cache-Control` auf:

| Anfrage                               | Antwort                                             |
| ------------------------------------- | --------------------------------------------------- |
| [`max-age`](#max-age_2)               | [`max-age`](#max-age)                               |
| [`max-stale`](#max-stale)             | -                                                   |
| [`min-fresh`](#min-fresh)             | -                                                   |
| -                                     | [`s-maxage`](#s-maxage)                             |
| [`no-cache`](#no-cache_2)             | [`no-cache`](#no-cache)                             |
| [`no-store`](#no-store_2)             | [`no-store`](#no-store)                             |
| [`no-transform`](#no-transform_2)     | [`no-transform`](#no-transform)                     |
| [`only-if-cached`](#only-if-cached)   | -                                                   |
| -                                     | [`must-revalidate`](#must-revalidate)               |
| -                                     | [`proxy-revalidate`](#proxy-revalidate)             |
| -                                     | [`must-understand`](#must-understand)               |
| -                                     | [`private`](#private)                               |
| -                                     | [`public`](#public)                                 |
| -                                     | [`immutable`](#immutable)                           |
| -                                     | [`stale-while-revalidate`](#stale-while-revalidate) |
| [`stale-if-error`](#stale-if-error_2) | [`stale-if-error`](#stale-if-error)                 |

Hinweis: Informationen zur Unterstützung finden Sie in der [Kompatibilitätstabelle](#browser-kompatibilität); User-Agents, die diese Direktiven nicht erkennen, sollten sie ignorieren.

## Begriffe

Dieser Abschnitt definiert die in diesem Dokument verwendeten Begriffe, von denen einige aus der Spezifikation stammen.

- (HTTP-)Cache
  - : Eine Implementierung, die Anfragen und Antworten zur Wiederverwendung bei nachfolgenden Anfragen speichert. Sie kann entweder ein gemeinsam genutzter Cache oder ein privater Cache sein.
- Gemeinsam genutzter Cache
  - : Ein Cache, der sich zwischen dem Origin-Server und Clients befindet (z. B. Proxy, CDN). Er speichert eine einzelne Antwort und verwendet sie für mehrere Benutzer wieder — Entwickler sollten daher vermeiden, personalisierte Inhalte im gemeinsam genutzten Cache zu speichern.
- Privater Cache
  - : Ein Cache, der beim Client vorhanden ist. Er wird auch _lokaler Cache_ oder _Browser-Cache_ genannt. Er kann personalisierte Inhalte für einen einzelnen Benutzer speichern und wiederverwenden.
- Antwort speichern
  - : Eine Antwort in Caches speichern, wenn die Antwort cachebar ist. Die zwischengespeicherte Antwort wird jedoch nicht immer unverändert wiederverwendet. (Üblicherweise bedeutet „Cache“, eine Antwort zu speichern.)
- Antwort wiederverwenden
  - : Zwischengespeicherte Antworten für nachfolgende Anfragen wiederverwenden.
- Antwort revalidieren
  - : Den Origin-Server fragen, ob die gespeicherte Antwort noch [aktuell](/de/docs/Web/HTTP/Guides/Caching#fresh_and_stale_based_on_age) ist. Üblicherweise erfolgt die Revalidierung über eine bedingte Anfrage.
- Aktuelle Antwort
  - : Zeigt an, dass die Antwort [aktuell](/de/docs/Web/HTTP/Guides/Caching#fresh_and_stale_based_on_age) ist. Dies bedeutet üblicherweise, dass die Antwort abhängig von den Anfrage-Direktiven für nachfolgende Anfragen wiederverwendet werden kann.
- Veraltete Antwort
  - : Zeigt an, dass die Antwort eine [veraltete Antwort](/de/docs/Web/HTTP/Guides/Caching#fresh_and_stale_based_on_age) ist. Dies bedeutet üblicherweise, dass die Antwort nicht unverändert wiederverwendet werden kann. Cache-Speicher müssen veraltete Antworten nicht sofort entfernen, da eine Revalidierung den Zustand der Antwort wieder von veraltet zu [aktuell](/de/docs/Web/HTTP/Guides/Caching#fresh_and_stale_based_on_age) ändern könnte.
- Alter
  - : Die Zeit seit der Erstellung einer Antwort. Sie ist ein Kriterium dafür, ob eine Antwort [aktuell oder veraltet](/de/docs/Web/HTTP/Guides/Caching#fresh_and_stale_based_on_age) ist.

## Direktiven

Dieser Abschnitt führt Direktiven auf, die das Caching beeinflussen — sowohl Antwort-Direktiven als auch Anfrage-Direktiven.

### Antwort-Direktiven

#### `max-age`

Die Antwort-Direktive `max-age=N` gibt an, dass die Antwort bis _N_ Sekunden nach ihrer Erstellung [aktuell](/de/docs/Web/HTTP/Guides/Caching#fresh_and_stale_based_on_age) bleibt.

```http
Cache-Control: max-age=604800
```

Gibt an, dass Caches diese Antwort speichern und für nachfolgende Anfragen wiederverwenden können, solange sie [aktuell](/de/docs/Web/HTTP/Guides/Caching#fresh_and_stale_based_on_age) ist.

Beachten Sie, dass `max-age` nicht die seit Empfang der Antwort vergangene Zeit bezeichnet; sie bezeichnet die seit der Erstellung der Antwort auf dem Origin-Server vergangene Zeit.
Wenn der oder die anderen Caches — auf dem Netzwerkpfad, den die Antwort genommen hat — die Antwort also 100 Sekunden lang speichern (angegeben durch das Antwort-Header-Feld `Age`), zieht der Browser-Cache 100 Sekunden von ihrer [Aktualitätsdauer](/de/docs/Web/HTTP/Guides/Caching#fresh_and_stale_based_on_age) ab.

Wenn der Wert von `max-age` negativ ist (z. B. `-1`) oder keine Ganzzahl ist (z. B. `3599.99`), ist das Caching-Verhalten nicht spezifiziert. Caches wird empfohlen, den Wert so zu behandeln, als wäre er `0` (dies wird im Abschnitt [Calculating Freshness Lifetime](https://httpwg.org/specs/rfc9111.html#calculating.freshness.lifetime) der HTTP-Spezifikation erwähnt).

```http
Cache-Control: max-age=604800
Age: 100
```

#### `s-maxage`

Die Antwort-Direktive `s-maxage` gibt an, wie lange die Antwort in einem gemeinsam genutzten Cache [aktuell](/de/docs/Web/HTTP/Guides/Caching#fresh_and_stale_based_on_age) bleibt.
Die Direktive `s-maxage` wird von privaten Caches ignoriert und überschreibt für gemeinsam genutzte Caches den durch die Direktive `max-age` oder den Header `Expires` angegebenen Wert, sofern diese vorhanden sind.

```http
Cache-Control: s-maxage=604800
```

#### `no-cache`

Die Antwort-Direktive `no-cache` gibt an, dass die Antwort in Caches gespeichert werden kann, aber vor jeder Wiederverwendung mit dem Origin-Server validiert werden muss, selbst wenn der Cache vom Origin-Server getrennt ist.

```http
Cache-Control: no-cache
```

Wenn Caches beim Wiederverwenden gespeicherter Inhalte stets auf Inhaltsaktualisierungen prüfen sollen, ist `no-cache` die zu verwendende Direktive. Sie erreicht dies, indem sie Caches verpflichtet, jede Anfrage mit dem Origin-Server zu revalidieren.

Beachten Sie, dass `no-cache` nicht „nicht cachen“ bedeutet. `no-cache` erlaubt Caches, eine Antwort zu speichern, verlangt jedoch ihre Revalidierung vor der Wiederverwendung. Wenn mit „nicht cachen“ eigentlich „nicht speichern“ gemeint ist, verwenden Sie die Direktive `no-store`.

> [!NOTE]
> Die Direktive `no-cache` garantiert keine Revalidierung bei Navigationen im Verlauf — etwa bei Verwendung der Schaltfläche <kbd>Zurück</kbd>.
> Wenn der Back/Forward Cache ({{Glossary("bfcache", "bfcache")}}) verwendet wird, stellt der Browser einen Snapshot der Seite ohne Revalidierung wieder her.
> Auch wenn bfcache nicht verwendet wird, kann der Browser die zwischengespeicherte Antwort dennoch ohne Revalidierung bereitstellen.
> Dies ist [durch die Spezifikation erlaubt](https://httpwg.org/specs/rfc7234.html#history.lists), da Navigationen im Verlauf üblicherweise als Wiederherstellung eines Snapshots einer historischen Sitzung und nicht als neue Anfrage für eine zuvor besuchte Seite behandelt werden.

#### `must-revalidate`

Die Antwort-Direktive `must-revalidate` gibt an, dass die Antwort in Caches gespeichert werden und wiederverwendet werden kann, solange sie [aktuell](/de/docs/Web/HTTP/Guides/Caching#fresh_and_stale_based_on_age) ist. Wenn die Antwort [veraltet](/de/docs/Web/HTTP/Guides/Caching#fresh_and_stale_based_on_age) wird, muss sie vor der Wiederverwendung mit dem Origin-Server validiert werden.

Üblicherweise wird `must-revalidate` zusammen mit `max-age` verwendet.

```http
Cache-Control: max-age=604800, must-revalidate
```

HTTP erlaubt Caches, [veraltete Antworten](/de/docs/Web/HTTP/Guides/Caching#fresh_and_stale_based_on_age) wiederzuverwenden, wenn sie vom Origin-Server getrennt sind. `must-revalidate` verhindert dies — entweder wird die gespeicherte Antwort mit dem Origin-Server revalidiert, oder es wird eine 504-Antwort (Gateway Timeout) erzeugt.

> [!NOTE]
> Die Direktive `must-revalidate` garantiert keine Revalidierung bei Navigationen im Verlauf — etwa bei Verwendung der Schaltfläche <kbd>Zurück</kbd>.
> Wenn der Back/Forward Cache ({{Glossary("bfcache", "bfcache")}}) verwendet wird, stellt der Browser einen Snapshot der Seite ohne Revalidierung wieder her.
> Auch wenn bfcache nicht verwendet wird, kann der Browser die zwischengespeicherte Antwort dennoch ohne Revalidierung bereitstellen.
> Dies ist [durch die Spezifikation erlaubt](https://httpwg.org/specs/rfc7234.html#history.lists), da Navigationen im Verlauf üblicherweise als Wiederherstellung eines Snapshots einer historischen Sitzung und nicht als neue Anfrage für eine zuvor besuchte Seite behandelt werden.

#### `proxy-revalidate`

Die Antwort-Direktive `proxy-revalidate` entspricht `must-revalidate`, jedoch ausschließlich für gemeinsam genutzte Caches.

#### `no-store`

Die Antwort-Direktive `no-store` gibt an, dass Caches jeder Art, ob privat oder gemeinsam genutzt, diese Antwort nicht speichern sollen.

```http
Cache-Control: no-store
```

#### `private`

Die Antwort-Direktive `private` gibt an, dass die Antwort nur in einem privaten Cache gespeichert werden kann (z. B. lokalen Caches in Browsern).

```http
Cache-Control: private
```

Sie sollten die Direktive `private` für benutzerpersonalisierte Inhalte hinzufügen, insbesondere für nach einer Anmeldung empfangene Antworten und für über Cookies verwaltete Sitzungen.

Wenn Sie vergessen, einer Antwort mit personalisierten Inhalten `private` hinzuzufügen, kann diese Antwort in einem gemeinsam genutzten Cache gespeichert und für mehrere Benutzer wiederverwendet werden, wodurch personenbezogene Informationen offengelegt werden können.

#### `public`

Die Antwort-Direktive `public` gibt an, dass die Antwort in einem gemeinsam genutzten Cache gespeichert werden kann. Antworten auf Anfragen mit Header-Feldern `Authorization` dürfen nicht in einem gemeinsam genutzten Cache gespeichert werden; die Direktive `public` bewirkt jedoch, dass solche Antworten in einem gemeinsam genutzten Cache gespeichert werden.

```http
Cache-Control: public
```

Im Allgemeinen sendet der Browser bei Seiten unter Basic Auth oder Digest Auth Anfragen mit dem Header `Authorization`. Dies bedeutet, dass die Antwort für eingeschränkte Benutzer mit Konten zugriffsgesteuert ist und grundsätzlich nicht in gemeinsam genutzten Caches gespeichert werden kann, selbst wenn sie `max-age` enthält.

Sie können die Direktive `public` verwenden, um diese Einschränkung aufzuheben.

```http
Cache-Control: public, max-age=604800
```

Beachten Sie, dass auch `s-maxage` oder `must-revalidate` diese Einschränkung aufheben.

Wenn eine Anfrage keinen Header `Authorization` hat oder Sie in der Antwort bereits `s-maxage` oder `must-revalidate` verwenden, müssen Sie `public` nicht verwenden.

#### `must-understand`

Die Antwort-Direktive `must-understand` gibt an, dass ein Cache die Antwort nur speichern soll, wenn er die Anforderungen für das Caching anhand des Statuscodes versteht.

`must-understand` sollte für ein Fallback-Verhalten mit `no-store` kombiniert werden.

```http
Cache-Control: must-understand, no-store
```

Wenn ein Cache `must-understand` nicht unterstützt, wird die Direktive ignoriert. Wenn auch `no-store` vorhanden ist, wird die Antwort nicht gespeichert.

Wenn ein Cache `must-understand` unterstützt, speichert er die Antwort unter Berücksichtigung der Cache-Anforderungen anhand ihres Statuscodes.

#### `no-transform`

Einige Intermediäre transformieren Inhalte aus verschiedenen Gründen. Beispielsweise konvertieren manche Bilder, um die Übertragungsgröße zu verringern. In einigen Fällen ist dies für den Inhaltsanbieter unerwünscht.

`no-transform` gibt an, dass kein Intermediär die Inhalte der Antwort transformieren soll, unabhängig davon, ob er einen Cache implementiert.

#### `immutable`

Die Antwort-Direktive `immutable` gibt an, dass die Antwort nicht aktualisiert wird, solange sie [aktuell](/de/docs/Web/HTTP/Guides/Caching#fresh_and_stale_based_on_age) ist.

```http
Cache-Control: public, max-age=604800, immutable
```

Eine moderne bewährte Praxis für statische Ressourcen besteht darin, Versionsnummern oder Hashes in ihre URLs aufzunehmen und die Ressourcen niemals zu verändern — stattdessen werden die Ressourcen bei Bedarf mit neueren Versionen aktualisiert, die neue Versionsnummern oder Hashes haben, sodass ihre URLs unterschiedlich sind. Dies wird als Muster des **Cache-Busting** bezeichnet.

```html
<script src="https://example.com/react.0.0.0.js"></script>
```

Wenn ein Benutzer den Browser neu lädt, sendet der Browser bedingte Anfragen zur Validierung an den Origin-Server. Für diese Art statischer Ressourcen ist jedoch selbst beim Neuladen des Browsers keine Revalidierung erforderlich, da sie niemals geändert werden.
`immutable` teilt einem Cache mit, dass die Antwort unveränderlich ist, solange sie [aktuell](/de/docs/Web/HTTP/Guides/Caching#fresh_and_stale_based_on_age) ist, und vermeidet diese Art unnötiger bedingter Anfragen an den Server.

Wenn Sie ein Cache-Busting-Muster für Ressourcen verwenden und darauf ein langes `max-age` anwenden, können Sie auch `immutable` hinzufügen, um Revalidierungen zu vermeiden.

#### `stale-while-revalidate`

Die Antwort-Direktive `stale-while-revalidate` gibt an, dass der Cache eine veraltete Antwort wiederverwenden darf, während er sie revalidiert.

```http
Cache-Control: max-age=604800, stale-while-revalidate=86400
```

Im obigen Beispiel ist die Antwort 7 Tage lang (604800 s) [aktuell](/de/docs/Web/HTTP/Guides/Caching#fresh_and_stale_based_on_age).
Nach 7 Tagen wird sie [veraltet](/de/docs/Web/HTTP/Guides/Caching#fresh_and_stale_based_on_age), aber der Cache darf sie für alle Anfragen wiederverwenden, die am folgenden Tag (86400 s) erfolgen, sofern er die Antwort im Hintergrund revalidiert.

Die Revalidierung macht den Cache wieder [aktuell](/de/docs/Web/HTTP/Guides/Caching#fresh_and_stale_based_on_age), sodass es für Clients so erscheint, als wäre er während dieses Zeitraums immer [aktuell](/de/docs/Web/HTTP/Guides/Caching#fresh_and_stale_based_on_age) gewesen — dadurch wird die Latenzeinbuße durch die Revalidierung effektiv verborgen.

Wenn während dieses Zeitraums keine Anfrage erfolgt, wird der Cache [veraltet](/de/docs/Web/HTTP/Guides/Caching#fresh_and_stale_based_on_age), und die nächste Anfrage revalidiert normal.

#### `stale-if-error`

Die Antwort-Direktive `stale-if-error` gibt an, dass der Cache eine [veraltete Antwort](/de/docs/Web/HTTP/Guides/Caching#fresh_and_stale_based_on_age) wiederverwenden kann, wenn ein Upstream-Server einen Fehler erzeugt oder der Fehler lokal erzeugt wird. Hier gilt jede Antwort mit dem Statuscode 500, 502, 503 oder 504 als Fehler.

```http
Cache-Control: max-age=604800, stale-if-error=86400
```

Im obigen Beispiel ist die Antwort 7 Tage lang (604800 s) [aktuell](/de/docs/Web/HTTP/Guides/Caching#fresh_and_stale_based_on_age). Danach wird sie [veraltet](/de/docs/Web/HTTP/Guides/Caching#fresh_and_stale_based_on_age), kann bei Auftreten eines Fehlers jedoch weitere 1 Tag (86400 s) verwendet werden.

Nach Ablauf des Zeitraums für `stale-if-error` erhält der Client jeden erzeugten Fehler.

### Anfrage-Direktiven

#### `no-cache`

Die Anfrage-Direktive `no-cache` fordert Caches auf, die Antwort vor der Wiederverwendung mit dem Origin-Server zu validieren.

```http
Cache-Control: no-cache
```

`no-cache` erlaubt Clients, die aktuellste Antwort anzufordern, selbst wenn der Cache eine [aktuelle](/de/docs/Web/HTTP/Guides/Caching#fresh_and_stale_based_on_age) Antwort besitzt.

Browser fügen Anfragen üblicherweise `no-cache` hinzu, wenn Benutzer eine Seite **zwangsweise neu laden**.

#### `no-store`

Die Anfrage-Direktive `no-store` erlaubt einem Client, anzufordern, dass Caches die Anfrage und die entsprechende Antwort nicht speichern — selbst wenn die Antwort des Origin-Servers gespeichert werden könnte.

```http
Cache-Control: no-store
```

#### `max-age`

Die Anfrage-Direktive `max-age=N` gibt an, dass der Client eine gespeicherte Antwort zulässt, die innerhalb von _N_ Sekunden auf dem Origin-Server erstellt wurde — wobei _N_ eine beliebige nicht negative Ganzzahl einschließlich `0` sein kann.

```http
Cache-Control: max-age=10800
```

Im obigen Fall könnte der Cache diese Antwort nicht wiederverwenden, wenn die Antwort mit `Cache-Control: max-age=10800` vor mehr als 3 Stunden erstellt wurde, berechnet aus `max-age` und dem Header `Age`.

Viele Browser verwenden diese Direktive beim **Neuladen**, wie unten erläutert.

```http
Cache-Control: max-age=0
```

`max-age=0` ist ein Workaround für `no-cache`, da viele alte Cache-Implementierungen (HTTP/1.0) `no-cache` nicht unterstützen. Browser verwenden `max-age=0` weiterhin beim „Neuladen“ aus Gründen der Abwärtskompatibilität und alternativ `no-cache`, um ein „zwangsweises Neuladen“ auszulösen.

Wenn der Wert von `max-age` negativ ist (z. B. `-1`) oder keine Ganzzahl ist (z. B. `3599.99`), ist das Caching-Verhalten nicht spezifiziert. Caches wird empfohlen, den Wert so zu behandeln, als wäre er `0`.

> [!NOTE]
> Die Direktive `max-age` garantiert keine Revalidierung bei Navigationen im Verlauf — etwa bei Verwendung der Schaltfläche <kbd>Zurück</kbd>.
> Wenn der Back/Forward Cache ({{Glossary("bfcache", "bfcache")}}) verwendet wird, stellt der Browser einen Snapshot der Seite ohne Revalidierung wieder her.
> Auch wenn bfcache nicht verwendet wird, kann der Browser die zwischengespeicherte Antwort dennoch ohne Revalidierung bereitstellen.
> Dies ist [durch die Spezifikation erlaubt](https://httpwg.org/specs/rfc7234.html#history.lists), da Navigationen im Verlauf üblicherweise als Wiederherstellung eines Snapshots einer historischen Sitzung und nicht als neue Anfrage für eine zuvor besuchte Seite behandelt werden.

#### `max-stale`

Die Anfrage-Direktive `max-stale=N` gibt an, dass der Client eine gespeicherte Antwort zulässt, die innerhalb von _N_ Sekunden [veraltet](/de/docs/Web/HTTP/Guides/Caching#fresh_and_stale_based_on_age) ist.
Wenn kein Wert für _N_ angegeben wird, akzeptiert der Client eine veraltete Antwort jedes Alters.

```http
Cache-Control: max-stale=3600
```

Beispielsweise gibt eine Anfrage mit dem obigen Header an, dass der Browser eine veraltete Antwort aus dem Cache akzeptiert, die innerhalb der letzten Stunde abgelaufen ist.

Clients können diesen Header verwenden, wenn der Origin-Server nicht verfügbar oder zu langsam ist und sie zwischengespeicherte Antworten aus Caches akzeptieren können, auch wenn diese etwas alt sind.

Beachten Sie, dass die wichtigsten Browser Anfragen mit `max-stale` nicht unterstützen.

#### `min-fresh`

Die Anfrage-Direktive `min-fresh=N` gibt an, dass der Client eine gespeicherte Antwort zulässt, die noch mindestens _N_ Sekunden [aktuell](/de/docs/Web/HTTP/Guides/Caching#fresh_and_stale_based_on_age) ist.

```http
Cache-Control: min-fresh=600
```

Im obigen Fall könnte der Cache diese Antwort nicht wiederverwenden, wenn die Antwort mit `Cache-Control: max-age=3600` vor 51 Minuten in Caches gespeichert wurde.

Clients können diesen Header verwenden, wenn der Benutzer verlangt, dass die Antwort nicht nur [aktuell](/de/docs/Web/HTTP/Guides/Caching#fresh_and_stale_based_on_age) ist, sondern auch für einen bestimmten Zeitraum nicht aktualisiert wird.

Beachten Sie, dass die wichtigsten Browser Anfragen mit `min-fresh` nicht unterstützen.

#### `no-transform`

Hat dieselbe Bedeutung wie `no-transform` für eine Antwort, jedoch stattdessen für eine Anfrage.

#### `only-if-cached`

Der Client gibt an, dass eine bereits zwischengespeicherte Antwort zurückgegeben werden soll. Wenn ein Cache eine gespeicherte Antwort hat, auch eine veraltete, wird sie zurückgegeben. Wenn keine zwischengespeicherte Antwort verfügbar ist, wird eine Antwort [504 Gateway Timeout](/de/docs/Web/HTTP/Reference/Status/504) zurückgegeben.

#### `stale-if-error`

Die Anfrage-Direktive `stale-if-error` gibt an, dass der Browser bei einem Fehler eines beliebigen zwischengeschalteten Servers für einen bestimmten Origin an veralteten Inhalten interessiert ist.
Dies wird von keinem Browser unterstützt (siehe [Browser-Kompatibilität](#browser-kompatibilität)).

## Anwendungsfälle

### Speichern verhindern

Wenn Sie nicht möchten, dass eine Antwort in Caches gespeichert wird, verwenden Sie die Direktive `no-store`.

```http
Cache-Control: no-store
```

Beachten Sie, dass `no-cache` „sie kann gespeichert, aber vor der Wiederverwendung nicht ohne Validierung verwendet werden“ bedeutet — es dient also nicht dazu, das Speichern einer Antwort zu verhindern.

```http example-bad
Cache-Control: no-cache
```

Theoretisch sollte bei widersprüchlichen Direktiven die restriktivste Direktive berücksichtigt werden. Das folgende Beispiel ist daher im Grunde bedeutungslos, da `private`, `no-cache`, `max-age=0` und `must-revalidate` mit `no-store` im Widerspruch stehen.

```http example-bad
# conflicted
Cache-Control: private, no-cache, no-store, max-age=0, must-revalidate

# equivalent to
Cache-Control: no-store
```

### Statische Assets mit „Cache-Busting“ cachen

Wenn Sie statische Assets mit Versions- oder Hashing-Mechanismen erstellen, ist das Hinzufügen einer Version oder eines Hashs zum Dateinamen oder Query-String eine gute Methode zur Verwaltung des Cachings.

Zum Beispiel:

```html
<!-- index.html -->
<script src="/assets/react.min.js"></script>
<img src="/assets/hero.png" width="900" height="400" />
```

Die Version der React-Bibliothek ändert sich, wenn Sie die Bibliothek aktualisieren, und `hero.png` ändert sich ebenfalls, wenn Sie das Bild bearbeiten. Daher lassen sich diese nicht gut mit `max-age` in einem Cache speichern.

In einem solchen Fall können Sie die Caching-Anforderungen erfüllen, indem Sie eine bestimmte nummerierte Version der Bibliothek verwenden und den Hash des Bildes in dessen URL aufnehmen.

```html
<!-- index.html -->
<script src="/assets/react.0.0.0min.js"></script>
<img src="/assets/hero.png?hash=deadbeef" width="900" height="400" />
```

Sie können einen langen Wert für `max-age` und `immutable` hinzufügen, weil sich der Inhalt niemals ändert.

```http
# /assets/*
Cache-Control: max-age=31536000, immutable
```

Wenn Sie die Bibliothek aktualisieren oder das Bild bearbeiten, sollte der neue Inhalt eine neue URL erhalten und Caches werden nicht wiederverwendet. Dies wird als „Cache-Busting“-Muster bezeichnet.

Verwenden Sie `no-cache`, um sicherzustellen, dass die HTML-Antwort selbst nicht aus dem Cache wiederverwendet wird. `no-cache` kann eine Revalidierung verursachen, und der Client erhält korrekt eine neue Version der HTML-Antwort und der statischen Assets.

```http
# /index.html
Cache-Control: no-cache
```

Hinweis: Wenn `index.html` durch Basic Authentication oder Digest Authentication geschützt ist, werden Dateien unter `/assets` nicht im gemeinsam genutzten Cache gespeichert. Wenn Dateien unter `/assets/` für die Speicherung in einem gemeinsam genutzten Cache geeignet sind, benötigen Sie außerdem eine der Direktiven `public`, `s-maxage` oder `must-revalidate`.

### Stets aktuelle Inhalte

Für dynamisch generierte Inhalte oder statische Inhalte, die häufig aktualisiert werden, möchten Sie, dass ein Benutzer stets die aktuellste Version erhält.

Wenn Sie keinen Header `Cache-Control` hinzufügen, weil die Antwort nicht gecacht werden soll, kann dies zu einem unerwarteten Ergebnis führen. Cache-Speicher dürfen sie heuristisch cachen — wenn Sie also Anforderungen an das Caching haben, sollten Sie diese immer explizit im Header `Cache-Control` angeben.

Das Hinzufügen von `no-cache` zur Antwort führt zu einer Revalidierung beim Server, sodass Sie jedes Mal eine [aktuelle](/de/docs/Web/HTTP/Guides/Caching#fresh_and_stale_based_on_age) Antwort bereitstellen können — oder, wenn der Client bereits eine neue Antwort hat, einfach mit `304 Not Modified` antworten können.

```http
Cache-Control: no-cache
```

Die meisten HTTP/1.0-Caches unterstützen keine `no-cache`-Direktiven, daher wurde in der Vergangenheit `max-age=0` als Workaround verwendet. Nur `max-age=0` kann jedoch dazu führen, dass eine [veraltete Antwort](/de/docs/Web/HTTP/Guides/Caching#fresh_and_stale_based_on_age) wiederverwendet wird, wenn Caches vom Origin-Server getrennt sind. `must-revalidate` löst dieses Problem. Deshalb entspricht das folgende Beispiel `no-cache`.

```http
Cache-Control: max-age=0, must-revalidate
```

Mittlerweile können Sie jedoch einfach stattdessen `no-cache` verwenden.

### Einen bereits gespeicherten Cache leeren

Es gibt keine Cache-Direktiven, um bereits gespeicherte Antworten aus Caches auf _zwischengeschalteten_ Servern zu löschen.

Stellen Sie sich vor, dass Clients oder Caches eine [aktuelle](/de/docs/Web/HTTP/Guides/Caching#fresh_and_stale_based_on_age) Antwort für einen Pfad speichern, ohne dass eine Anfrage zum Server gesendet wird. Ein Server kann für diesen Pfad nichts tun.

[`Clear-Site-Data: cache`](/de/docs/Web/HTTP/Reference/Headers/Clear-Site-Data#cache) kann verwendet werden, um jede gespeicherte Antwort für eine Website im Browser-Cache zu löschen; verwenden Sie dies daher mit Vorsicht.
Beachten Sie, dass dies keine gemeinsam genutzten oder zwischengeschalteten Caches betrifft.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [HTTP-Caching](/de/docs/Web/HTTP/Guides/Caching)
- [Caching-Tutorial für Webautoren und Webmaster](https://mnot.net/cache_docs/)
- [Bewährte Praktiken für Caching und Fallstricke bei max-age](https://jakearchibald.com/2016/caching-best-practices/)
- [Cache-Control für Laien](https://csswizardry.com/2019/03/cache-control-for-civilians/)
- [RFC 9111 – HTTP-Caching](https://httpwg.org/specs/rfc9111.html)
- [RFC 5861 – HTTP-Cache-Control-Erweiterungen für veraltete Inhalte](https://httpwg.org/specs/rfc5861.html)
- [RFC 8246 – Unveränderliche HTTP-Antworten](https://httpwg.org/specs/rfc8246.html)
