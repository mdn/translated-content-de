---
title: Cache-Steuerung
slug: Web/HTTP/Headers/Cache-Control
l10n:
  sourceCommit: caffa587676396f62fed17ba53b16e55b0e8caf3
---

{{HTTPSidebar}}

Das **`Cache-Control`** HTTP-Header-Feld enthält _Direktiven_ (Anweisungen) — sowohl in Anfragen als auch in Antworten — die das [Caching](/de/docs/Web/HTTP/Caching) in Browsern und gemeinsamen Caches (z.B. Proxies, CDNs) steuern.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>
        {{Glossary("Request header")}},
        {{Glossary("Response header")}}
      </td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden header name")}}</th>
      <td>nein</td>
    </tr>
    <tr>
      <th scope="row">
        {{Glossary("CORS-safelisted response header")}}
      </th>
      <td>ja</td>
    </tr>
  </tbody>
</table>

## Syntax

Cache-Direktiven folgen diesen Regeln:

- Cache-Direktiven sind nicht case-sensitive. Es wird jedoch empfohlen, Kleinbuchstaben zu verwenden, da einige Implementierungen Großbuchstaben-Direktiven nicht erkennen.
- Mehrere Direktiven sind erlaubt und müssen durch Kommas getrennt werden (z.B. `Cache-control: max-age=180, public`).
- Einige Direktiven haben ein optionales Argument. Wenn ein Argument angegeben wird, wird es durch ein Gleichheitszeichen (`=`) vom Direktivnamen getrennt. Typischerweise sind Argumente für die Direktiven Ganzzahlen und daher nicht in Anführungszeichen gesetzt (z.B. `Cache-control: max-age=12`).

### Cache-Direktiven

Die folgende Tabelle listet die standardmäßigen `Cache-Control`-Direktiven auf:

| Anfrage            | Antwort                  |
| ------------------ | ------------------------ |
| `max-age`          | `max-age`                |
| `max-stale`        | -                        |
| `min-fresh`        | -                        |
| -                  | `s-maxage`               |
| `no-cache`         | `no-cache`               |
| `no-store`         | `no-store`               |
| `no-transform`     | `no-transform`           |
| `only-if-cached`   | -                        |
| -                  | `must-revalidate`        |
| -                  | `proxy-revalidate`       |
| -                  | `must-understand`        |
| -                  | `private`                |
| -                  | `public`                 |
| -                  | `immutable`              |
| -                  | `stale-while-revalidate` |
| `stale-if-error`   | `stale-if-error`         |

Hinweis: Überprüfen Sie die [Kompatibilitätstabelle](#browser-kompatibilität) für ihre Unterstützung; User Agents, die sie nicht erkennen, sollten sie ignorieren.

## Vokabular

Dieser Abschnitt definiert die in diesem Dokument verwendeten Begriffe, einige davon stammen aus der Spezifikation.

- (HTTP) Cache
  - : Implementierung, die Anfragen und Antworten für die Wiederverwendung in nachfolgenden Anfragen speichert. Es kann entweder ein gemeinsamer Cache oder ein privater Cache sein.
- Gemeinsamer Cache
  - : Cache, der zwischen dem Ursprungsserver und Clients besteht (z.B. Proxy, CDN). Er speichert eine einzelne Antwort und verwendet sie mit mehreren Benutzern wieder — daher sollten Entwickler vermeiden, personalisierte Inhalte im gemeinsamen Cache zu speichern.
- Privater Cache
  - : Cache, der sich im Client befindet. Er wird auch als _lokaler Cache_ oder _Browser-Cache_ bezeichnet. Er kann personalisierte Inhalte für einen einzelnen Benutzer speichern und wiederverwenden.
- Antwort speichern
  - : Eine Antwort in Caches speichern, wenn die Antwort cachefähig ist. Allerdings wird die gespeicherte Antwort nicht immer so wiederverwendet, wie sie ist. (Normalerweise bedeutet "cache", eine Antwort zu speichern.)
- Antwort wiederverwenden
  - : Gespeicherte Antworten für nachfolgende Anfragen wiederverwenden.
- Antwort erneut validieren
  - : Den Ursprungsserver fragen, ob die gespeicherte Antwort noch [frisch](/de/docs/Web/HTTP/Caching#fresh_and_stale_based_on_age) ist. In der Regel erfolgt die Revalidierung durch eine bedingte Anfrage.
- Frische Antwort
  - : Gibt an, dass die Antwort [frisch](/de/docs/Web/HTTP/Caching#fresh_and_stale_based_on_age) ist. Dies bedeutet normalerweise, dass die Antwort für nachfolgende Anfragen wiederverwendet werden kann, abhängig von Anfrage-Direktiven.
- Veraltete Antwort
  - : Gibt an, dass die Antwort eine [veraltete Antwort](/de/docs/Web/HTTP/Caching#fresh_and_stale_based_on_age) ist. Das bedeutet normalerweise, dass die Antwort nicht unverändert wiederverwendet werden kann. Cache-Speicher ist nicht verpflichtet, veraltete Antworten sofort zu entfernen, da eine Revalidierung die Antwort von veraltet zu [frisch](/de/docs/Web/HTTP/Caching#fresh_and_stale_based_on_age) ändern könnte.
- Alter
  - : Die Zeit, die seit der Generierung einer Antwort vergangen ist. Es ist ein Kriterium dafür, ob eine Antwort [frisch oder veraltet](/de/docs/Web/HTTP/Caching#fresh_and_stale_based_on_age) ist.

## Direktiven

In diesem Abschnitt werden Direktiven aufgelistet, die das Caching beeinflussen — sowohl Antwort-Direktiven als auch Anfrage-Direktiven.

### Antwort-Direktiven

#### `max-age`

Die `max-age=N` Antwort-Direktive gibt an, dass die Antwort [frisch](/de/docs/Web/HTTP/Caching#fresh_and_stale_based_on_age) bleibt, bis _N_ Sekunden nach der Generierung der Antwort vergangen sind.

```http
Cache-Control: max-age=604800
```

Gibt an, dass Caches diese Antwort speichern und für nachfolgende Anfragen verwenden können, solange sie [frisch](/de/docs/Web/HTTP/Caching#fresh_and_stale_based_on_age) ist.

Beachten Sie, dass `max-age` nicht die verstrichene Zeit seit dem Empfang der Antwort ist; es ist die verstrichene Zeit seit der Generierung der Antwort auf dem Ursprungsserver.
Wenn der andere Cache(s) — auf der vom Antwort genutzten Netzwerkroute — die Antwort für 100 Sekunden speichert (angezeigt durch das `Age` Antwort-Header-Feld), würde der Browser-Cache 100 Sekunden von seiner [Frischelebensdauer](/de/docs/Web/HTTP/Caching#fresh_and_stale_based_on_age) abziehen.

Wenn der `max-age`-Wert negativ ist (zum Beispiel `-1`) oder keine ganze Zahl ist (zum Beispiel `3599.99`), dann ist das Caching-Verhalten nicht spezifiziert. Caches werden ermutigt, den Wert so zu behandeln, als wäre er `0` (dies wird im Abschnitt [Berechnung der Frischelebensdauer](https://httpwg.org/specs/rfc9111.html#calculating.freshness.lifetime) der HTTP-Spezifikation notiert).

```http
Cache-Control: max-age=604800
Age: 100
```

#### `s-maxage`

Die `s-maxage` Antwort-Direktive gibt an, wie lange die Antwort in einem gemeinsamen Cache [frisch](/de/docs/Web/HTTP/Caching#fresh_and_stale_based_on_age) bleibt.
Die `s-maxage` Direktive wird von privaten Caches ignoriert und überschreibt den von der `max-age` Direktive oder dem `Expires` Header für gemeinsame Caches angegebenen Wert, falls diese vorhanden sind.

```http
Cache-Control: s-maxage=604800
```

#### `no-cache`

Die `no-cache` Antwort-Direktive gibt an, dass die Antwort in Caches gespeichert werden kann, aber die Antwort vor jeder Wiederverwendung beim Ursprungsserver validiert werden muss, selbst wenn der Cache vom Ursprungsserver getrennt ist.

```http
Cache-Control: no-cache
```

Wenn Sie möchten, dass Caches gespeicherte Inhalte bei der Nutzung immer auf Aktualisierungen überprüfen, verwenden Sie `no-cache`. Dies wird erreicht, indem Caches angewiesen werden, jede Anfrage mit dem Ursprungsserver zu revalidieren.

Beachten Sie, dass `no-cache` nicht "nicht cachen" bedeutet. `no-cache` erlaubt es Caches, eine Antwort zu speichern, erfordert aber, sie vor der Wiederverwendung zu revalidieren. Wenn das, was Sie unter "nicht cachen" verstehen, tatsächlich "nicht speichern" meint, dann ist `no-store` die Direktive, die Sie verwenden sollten.

#### `must-revalidate`

Die `must-revalidate` Antwort-Direktive gibt an, dass die Antwort in Caches gespeichert und während sie [frisch](/de/docs/Web/HTTP/Caching#fresh_and_stale_based_on_age) ist, wiederverwendet werden kann. Wenn die Antwort [veraltet](/de/docs/Web/HTTP/Caching#fresh_and_stale_based_on_age) wird, muss sie vor der Wiederverwendung mit dem Ursprungsserver validiert werden.

Typischerweise wird `must-revalidate` zusammen mit `max-age` verwendet.

```http
Cache-Control: max-age=604800, must-revalidate
```

HTTP erlaubt es Caches, [veraltete Antworten](/de/docs/Web/HTTP/Caching#fresh_and_stale_based_on_age) wiederzuverwenden, wenn sie vom Ursprungsserver getrennt sind. `must-revalidate` ist eine Möglichkeit, dies zu verhindern - entweder wird die gespeicherte Antwort mit dem Ursprungsserver revalidiert oder eine 504 (Gateway Timeout) Antwort wird generiert.

#### `proxy-revalidate`

Die `proxy-revalidate` Antwort-Direktive ist das Äquivalent von `must-revalidate`, jedoch speziell nur für gemeinsame Caches.

#### `no-store`

Die `no-store` Antwort-Direktive gibt an, dass keine Caches irgendeiner Art (privat oder gemeinsam) diese Antwort speichern sollten.

```http
Cache-Control: no-store
```

#### `private`

Die `private` Antwort-Direktive gibt an, dass die Antwort nur in einem privaten Cache (z.B. lokale Caches in Browsern) gespeichert werden kann.

```http
Cache-Control: private
```

Sie sollten die `private` Direktive für benutzerpersonalisierte Inhalte hinzufügen, insbesondere für Antworten, die nach dem Einloggen empfangen werden, und für Sitzungen, die über Cookies verwaltet werden.

Wenn Sie vergessen, `private` zu einer Antwort mit personalisierten Inhalten hinzuzufügen, kann diese Antwort in einem gemeinsamen Cache gespeichert und für mehrere Benutzer wiederverwendet werden, was dazu führen kann, dass persönliche Informationen durchsickern.

#### `public`

Die `public` Antwort-Direktive gibt an, dass die Antwort in einem gemeinsamen Cache gespeichert werden kann. Antworten für Anfragen mit `Authorization` Header-Feldern dürfen nicht in einem gemeinsamen Cache gespeichert werden; jedoch wird die `public` Direktive dazu führen, dass solche Antworten in einem gemeinsamen Cache gespeichert werden.

```http
Cache-Control: public
```

Im Allgemeinen, wenn Seiten unter Basic Auth oder Digest Auth sind, sendet der Browser Anfragen mit dem `Authorization`-Header. Das bedeutet, dass die Antwort für eingeschränkte Benutzer (die Konten haben) zugangskontrolliert ist und grundsätzlich nicht gemeinsam gecacht werden darf, selbst wenn sie `max-age` hat.

Sie können die `public` Direktive verwenden, um diese Beschränkung aufzuheben.

```http
Cache-Control: public, max-age=604800
```

Beachten Sie, dass `s-maxage` oder `must-revalidate` ebenfalls diese Beschränkung aufheben.

Wenn eine Anfrage keinen `Authorization`-Header hat oder Sie bereits `s-maxage` oder `must-revalidate` in der Antwort verwenden, müssen Sie `public` nicht verwenden.

#### `must-understand`

Die `must-understand` Antwort-Direktive gibt an, dass ein Cache die Antwort nur speichern soll, wenn er die Anforderungen für das Caching basierend auf dem Statuscode versteht.

`must-understand` sollte mit `no-store` für ein Fallback-Verhalten gekoppelt werden.

```http
Cache-Control: must-understand, no-store
```

Wenn ein Cache `must-understand` nicht unterstützt, wird es ignoriert. Wenn `no-store` ebenfalls vorhanden ist, wird die Antwort nicht gespeichert.

Wenn ein Cache `must-understand` unterstützt, speichert er die Antwort mit dem Verständnis der Cache-Anforderungen basierend auf dessen Statuscode.

#### `no-transform`

Einige Zwischeninstanzen transformieren Inhalte aus verschiedenen Gründen. Beispielsweise konvertieren einige Bilder, um die Übertragungsgröße zu reduzieren. In einigen Fällen ist dies für den Inhaltsanbieter unerwünscht.

`no-transform` gibt an, dass jede Zwischeninstanz (unabhängig davon, ob sie einen Cache implementiert oder nicht) die Antwortinhalte nicht transformieren sollte.

#### `immutable`

Die `immutable` Antwort-Direktive gibt an, dass die Antwort nicht aktualisiert wird, solange sie [frisch](/de/docs/Web/HTTP/Caching#fresh_and_stale_based_on_age) ist.

```http
Cache-Control: public, max-age=604800, immutable
```

Eine moderne Best Practice für statische Ressourcen ist es, Versionen/Hashwerte in ihre URLs einzuschließen, während die Ressourcen nie modifiziert werden — sondern stattdessen, wenn nötig, die Ressourcen mit neueren Versionen aktualisieren, die neue Versionsnummern/Hashwerte haben, sodass ihre URLs unterschiedlich sind. Dies wird als **Cache-Busting**-Muster bezeichnet.

```html
<script src="https://example.com/react.0.0.0.js"></script>
```

Wenn ein Benutzer den Browser neu lädt, sendet der Browser bedingte Anfragen zur Validierung an den Ursprungsserver. Aber es ist nicht notwendig, solche statischen Ressourcen selbst dann zu revalidieren, wenn ein Benutzer den Browser neu lädt, da sie nie modifiziert werden.
`immutable` teilt einem Cache mit, dass die Antwort unveränderlich ist, während sie [frisch](/de/docs/Web/HTTP/Caching#fresh_and_stale_based_on_age) ist, und vermeidet solche unnötigen bedingten Anfragen an den Server.

Wenn Sie ein Cache-Busting-Muster für Ressourcen verwenden und sie auf einen langen `max-age` anwenden, können Sie auch `immutable` hinzufügen, um die Revalidierung zu vermeiden.

#### `stale-while-revalidate`

Die `stale-while-revalidate` Antwort-Direktive gibt an, dass der Cache eine veraltete Antwort wiederverwenden könnte, während er sie zu einem Cache revalidiert.

```http
Cache-Control: max-age=604800, stale-while-revalidate=86400
```

Im obigen Beispiel ist die Antwort 7 Tage lang [frisch](/de/docs/Web/HTTP/Caching#fresh_and_stale_based_on_age) (604800 Sekunden).
Nach 7 Tagen wird sie [veraltet](/de/docs/Web/HTTP/Caching#fresh_and_stale_based_on_age), aber der Cache darf sie für alle Anfragen wiederverwenden, die an dem folgenden Tag (86400 Sekunden) gemacht werden, vorausgesetzt, dass sie die Antwort im Hintergrund revalidieren.

Die Revalidierung wird den Cache wieder [frisch](/de/docs/Web/HTTP/Caching#fresh_and_stale_based_on_age) machen, sodass es für die Clients so erscheint, als wäre er die ganze Zeit [frisch](/de/docs/Web/HTTP/Caching#fresh_and_stale_based_on_age) gewesen — wodurch effektiv die Latenzstrafe der Revalidierung vor ihnen verborgen wird.

Wenn während dieses Zeitraums keine Anfrage durchgeführt wurde, wird der Cache [veraltet](/de/docs/Web/HTTP/Caching#fresh_and_stale_based_on_age) und die nächste Anfrage revalidiert normal.

#### `stale-if-error`

Die `stale-if-error` Antwort-Direktive gibt an, dass der Cache eine [veraltete Antwort](/de/docs/Web/HTTP/Caching#fresh_and_stale_based_on_age) wiederverwenden kann, wenn ein Zwischenserver einen Fehler erzeugt oder wenn der Fehler lokal entsteht. Ein Fehler wird hier als jede Antwort mit einem Statuscode von 500, 502, 503 oder 504 betrachtet.

```http
Cache-Control: max-age=604800, stale-if-error=86400
```

Im obigen Beispiel ist die Antwort 7 Tage [frisch](/de/docs/Web/HTTP/Caching#fresh_and_stale_based_on_age) (604800s). Danach wird sie [veraltet](/de/docs/Web/HTTP/Caching#fresh_and_stale_based_on_age), kann aber für einen zusätzlichen Tag (86400s) verwendet werden, wenn ein Fehler auftritt.

Nach dem Ablauf des stale-if-error-Zeitraums erhält der Client jeden generierten Fehler.

### Anfrage-Direktiven

#### `no-cache`

Die `no-cache` Anfrage-Direktive fordert Caches auf, die Antwort mit dem Ursprungsserver zu validieren, bevor sie wiederverwendet wird.

```http
Cache-Control: no-cache
```

`no-cache` ermöglicht es Clients, die aktuellste Antwort anzufordern, selbst wenn der Cache bereits eine [frische](/de/docs/Web/HTTP/Caching#fresh_and_stale_based_on_age) Antwort hat.

Browser fügen Anfragen normalerweise `no-cache` hinzu, wenn Benutzer eine Seite **zwangserneuern**.

#### `no-store`

Die `no-store` Anfrage-Direktive erlaubt einem Client, Caches zu bitten, darauf zu verzichten, die Anfrage und die entsprechende Antwort zu speichern — selbst wenn die Antwort des Ursprungsservers gespeichert werden könnte.

```http
Cache-Control: no-store
```

#### `max-age`

Die `max-age=N` Anfrage-Direktive gibt an, dass der Client eine gespeicherte Antwort zulässt, die innerhalb von _N_ Sekunden auf dem Ursprungsserver generiert wurde — wobei _N_ eine beliebige nicht negative ganze Zahl sein kann (einschließlich `0`).

```http
Cache-Control: max-age=10800
```

Im obigen Fall, wenn die Antwort mit `Cache-Control: max-age=10800` vor mehr als 3 Stunden generiert wurde (berechnet aus `max-age` und dem `Age`-Header), kann der Cache diese Antwort nicht wiederverwenden.

Viele Browser verwenden diese Direktive für **Neuladungen**, wie unten beschrieben.

```http
Cache-Control: max-age=0
```

`max-age=0` ist eine Umgehungslösung für `no-cache`, weil viele alte (HTTP/1.0) Cache-Implementierungen `no-cache` nicht unterstützen. Kürzlich verwenden Browser immer noch `max-age=0` beim "Neuladen" — für Rückwärtskompatibilität — und alternativ `no-cache`, um ein "zwangserneuern" zu verursachen.

Wenn der `max-age`-Wert negativ ist (zum Beispiel `-1`) oder keine ganze Zahl ist (zum Beispiel `3599.99`), ist das Caching-Verhalten nicht spezifiziert. Caches werden ermutigt, den Wert so zu behandeln, als wäre er `0`.

#### `max-stale`

Die `max-stale=N` Anfrage-Direktive gibt an, dass der Client eine gespeicherte Antwort zulässt, die innerhalb von _N_ Sekunden [veraltet](/de/docs/Web/HTTP/Caching#fresh_and_stale_based_on_age) ist.
Wenn kein _N_ Wert angegeben ist, akzeptiert der Client eine veraltete Antwort jeden Alters.

```http
Cache-Control: max-stale=3600
```

Zum Beispiel zeigt eine Anfrage mit dem obigen Header an, dass der Browser eine veraltete Antwort aus dem Cache akzeptiert, die innerhalb der letzten Stunde abgelaufen ist.

Clients können diesen Header verwenden, wenn der Ursprungsserver ausgefallen ist oder zu langsam ist und sie können Antworten aus Caches akzeptieren, selbst wenn sie etwas älter sind.

Beachten Sie, dass die wichtigsten Browser keine Anfragen mit `max-stale` unterstützen.

#### `min-fresh`

Die `min-fresh=N` Anfrage-Direktive gibt an, dass der Client eine gespeicherte Antwort zulässt, die mindestens _N_ Sekunden lang [frisch](/de/docs/Web/HTTP/Caching#fresh_and_stale_based_on_age) ist.

```http
Cache-Control: min-fresh=600
```

Im obigen Fall, wenn die Antwort mit `Cache-Control: max-age=3600` vor 51 Minuten in Caches gespeichert wurde, kann der Cache diese Antwort nicht wiederverwenden.

Clients können diesen Header verwenden, wenn der Benutzer verlangt, dass die Antwort nicht nur [frisch](/de/docs/Web/HTTP/Caching#fresh_and_stale_based_on_age) ist, sondern auch für eine gewisse Zeit nicht aktualisiert wird.

Beachten Sie, dass die wichtigsten Browser keine Anfragen mit `min-fresh` unterstützen.

#### `no-transform`

Bedeutet dasselbe wie `no-transform` für eine Antwort, jedoch für eine Anfrage.

#### `only-if-cached`

Der Client gibt an, dass eine bereits im Cache gespeicherte Antwort zurückgegeben werden soll. Wenn ein Cache eine gespeicherte Antwort hat, selbst eine veraltete, wird sie zurückgegeben. Wenn keine zwischengespeicherte Antwort verfügbar ist, wird eine [504 Gateway Timeout](/de/docs/Web/HTTP/Status/504) Antwort zurückgegeben.

## Anwendungsfälle

### Verhindern des Speicherns

Wenn Sie nicht möchten, dass eine Antwort in Caches gespeichert wird, verwenden Sie die `no-store` Direktive.

```http
Cache-Control: no-store
```

Beachten Sie, dass `no-cache` bedeutet "es kann gespeichert werden, aber nicht ohne Validierung wiederverwenden" – es ist also nicht dafür gedacht, eine Antwort nicht zu speichern.

```http example-bad
Cache-Control: no-cache
```

Theoretisch sollte bei widersprüchlichen Direktiven die restriktivste beachtet werden. Das folgende Beispiel ist also im Grunde bedeutungslos, weil `private`, `no-cache`, `max-age=0` und `must-revalidate` im Widerspruch zu `no-store` stehen.

```http example-bad
# widersprüchlich
Cache-Control: private, no-cache, no-store, max-age=0, must-revalidate

# entspricht
Cache-Control: no-store
```

### Caching von statischen Assets mit "Cache-Busting"

Wenn Sie statische Assets mit Versionierungs-/Hashing-Mechanismen erstellen, ist das Hinzufügen einer Version/eines Hashes zum Dateinamen oder zur Abfragezeichenfolge eine gute Möglichkeit, das Caching zu verwalten.

Zum Beispiel:

```html
<!-- index.html -->
<script src="/assets/react.min.js"></script>
<img src="/assets/hero.png" width="900" height="400" />
```

Die Version der React-Bibliothek wird sich ändern, wenn Sie die Bibliothek aktualisieren, und `hero.png` wird sich auch ändern, wenn Sie das Bild bearbeiten. Diese sind also schwer im Cache mit `max-age` zu speichern.

In einem solchen Fall könnten Sie die Caching-Bedürfnisse adressieren, indem Sie eine spezifische, nummerierte Version der Bibliothek verwenden und den Hash des Bildes in seine URL einschließen.

```html
<!-- index.html -->
<script src="/assets/react.0.0.0min.js"></script>
<img src="/assets/hero.png?hash=deadbeef" width="900" height="400" />
```

Sie können einen langen `max-age` Wert und `immutable` hinzufügen, weil sich die Inhalte nie ändern werden.

```http
# /assets/*
Cache-Control: max-age=31536000, immutable
```

Wenn Sie die Bibliothek aktualisieren oder das Bild bearbeiten, sollten neue Inhalte eine neue URL haben, und Caches werden nicht wiederverwendet. Dies wird als "Cache-Busting" Muster bezeichnet.

Verwenden Sie `no-cache`, um sicherzustellen, dass die HTML-Antwort selbst nicht gecacht wird. `no-cache` könnte eine Revalidierung verursachen, und der Client erhält korrekt eine neue Version der HTML-Antwort und der statischen Assets.

```http
# /index.html
Cache-Control: no-cache
```

Hinweis: Wenn `index.html` unter Basic Authentifizierung oder Digest Authentifizierung steht, werden Dateien unter `/assets` nicht im gemeinsamen Cache gespeichert. Wenn `/assets/`-Dateien geeignet sind, im gemeinsamen Cache gespeichert zu werden, benötigen Sie zusätzlich eines von `public`, `s-maxage` oder `must-revalidate`.

### Immer aktuelle Inhalte

Für Inhalte, die dynamisch erzeugt werden oder die statisch sind, aber häufig aktualisiert werden, wollen Sie, dass ein Benutzer immer die aktuellste Version erhält.

Wenn Sie kein `Cache-Control` Header hinzufügen, weil die Antwort nicht gecacht werden soll, könnte das zu einem unerwarteten Ergebnis führen. Cache-Speicher dürfen sie heuristisch cachen — also wenn Sie irgendwelche Anforderungen an das Caching haben, sollten Sie diese immer ausdrücklich im `Cache-Control` Header angeben.

Das Hinzufügen von `no-cache` zur Antwort verursacht eine Revalidierung beim Server, sodass Sie jedes Mal eine [frische](/de/docs/Web/HTTP/Caching#fresh_and_stale_based_on_age) Antwort servieren — oder wenn der Client bereits eine neue hat, einfach mit `304 Not Modified` antworten.

```http
Cache-Control: no-cache
```

Die meisten HTTP/1.0 Caches unterstützen die `no-cache` Direktiven nicht, daher wurde historisch `max-age=0` als Umgehungslösung verwendet. Aber nur `max-age=0` könnte dazu führen, dass eine [veraltete Antwort](/de/docs/Web/HTTP/Caching#fresh_and_stale_based_on_age) wiederverwendet wird, wenn Caches vom Ursprungsserver getrennt sind. `must-revalidate` behandelt das. Deshalb ist das folgende Beispiel gleichbedeutend mit `no-cache`.

```http
Cache-Control: max-age=0, must-revalidate
```

Aber jetzt können Sie einfach `no-cache` verwenden.

### Löschen eines bereits gespeicherten Caches

Leider gibt es keine Cache-Direktiven zum Löschen bereits gespeicherter Antworten aus Caches.

Stellen Sie sich vor, dass Clients/Caches eine [frische](/de/docs/Web/HTTP/Caching#fresh_and_stale_based_on_age) Antwort für einen Pfad speichern, ohne dass eine Anfrage an den Server erfolgt. Es gibt nichts, was ein Server für diesen Pfad tun könnte.

Alternativ kann `Clear-Site-Data` einen Browser-Cache für eine Site löschen. Aber Vorsicht: Das löscht jede gespeicherte Antwort für eine Seite — und nur in Browsern, nicht für einen gemeinsamen Cache.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [HTTP-Caching](/de/docs/Web/HTTP/Caching)
- [Caching-Tutorial für Webautoren und Webmaster](https://www.mnot.net/cache_docs/)
- [Caching Best Practices & Max-Age Gotchas](https://jakearchibald.com/2016/caching-best-practices/)
- [Cache-Control für Zivilisten](https://csswizardry.com/2019/03/cache-control-for-civilians/)
- [RFC 9111 – HTTP Caching](https://httpwg.org/specs/rfc9111.html)
- [RFC 5861 – HTTP Cache-Control Erweiterungen für veraltete Inhalte](https://httpwg.org/specs/rfc5861.html)
- [RFC 8246 – HTTP Unveränderliche Antworten](https://httpwg.org/specs/rfc8246.html)
