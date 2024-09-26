---
title: Cache-Control
slug: Web/HTTP/Headers/Cache-Control
l10n:
  sourceCommit: caffa587676396f62fed17ba53b16e55b0e8caf3
---

{{HTTPSidebar}}

Das **`Cache-Control`** HTTP-Headerfeld enthält _Direktiven_ (Anweisungen) — sowohl bei Anfragen als auch bei Antworten — die das [Caching](/de/docs/Web/HTTP/Caching) in Browsern und gemeinsamen Caches (z. B. Proxys, CDNs) steuern.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header type</th>
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

- Cache-Direktiven sind nicht case-sensitive. Es wird jedoch empfohlen, sie in Kleinbuchstaben zu schreiben, da einige Implementierungen Großbuchstaben nicht erkennen.
- Mehrere Direktiven sind zulässig und müssen durch Kommas getrennt sein (z. B. `Cache-control: max-age=180, public`).
- Einige Direktiven haben ein optionales Argument. Wenn ein Argument angegeben ist, wird es durch ein Gleichheitszeichen (`=`) vom Namen der Direktive getrennt. Typischerweise sind Argumente für die Direktiven Ganzzahlen und daher nicht in Anführungszeichen eingeschlossen (z. B. `Cache-control: max-age=12`).

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

Hinweis: Überprüfen Sie die [Kompatibilitätstabelle](#/index.html), um deren Unterstützung zu verifizieren; User Agents, die sie nicht erkennen, sollten sie ignorieren.

## Vokabular

Dieser Abschnitt definiert die in diesem Dokument verwendeten Begriffe, von denen einige aus der Spezifikation stammen.

- (HTTP) Cache
  - : Implementierung, die Anfragen und Antworten für die Wiederverwendung bei nachfolgenden Anfragen speichert. Sie kann entweder ein gemeinsamer Cache oder ein privater Cache sein.
- Gemeinsamer Cache
  - : Cache, der zwischen dem Ursprungsserver und den Clients existiert (z. B. Proxy, CDN). Er speichert eine einzige Antwort und verwendet sie erneut bei mehreren Benutzern — Entwickler sollten vermeiden, personalisierte Inhalte im gemeinsamen Cache zu speichern.
- Privater Cache
  - : Cache, der im Client existiert. Er wird auch als _lokaler Cache_ oder _Browser-Cache_ bezeichnet. Er kann personalisierte Inhalte für einen einzelnen Benutzer speichern und wiederverwenden.
- Antwort speichern
  - : Eine Antwort in Caches speichern, wenn die Antwort cachefähig ist. Allerdings wird die zwischengespeicherte Antwort nicht immer unverändert wiederverwendet. (Normalerweise bedeutet „Cache“ die Speicherung einer Antwort.)
- Antwort wiederverwenden
  - : Zwischengespeicherte Antworten für nachfolgende Anfragen wiederverwenden.
- Antwort neu validieren
  - : Den Ursprungsserver fragen, ob die gespeicherte Antwort noch [frisch](/de/docs/Web/HTTP/Caching#fresh_and_stale_based_on_age) ist. In der Regel erfolgt die Neubeurteilung durch eine bedingte Anfrage.
- Frische Antwort
  - : Deutet darauf hin, dass die Antwort [frisch](/de/docs/Web/HTTP/Caching#fresh_and_stale_based_on_age) ist. In der Regel bedeutet dies, dass die Antwort für nachfolgende Anfragen wiederverwendet werden kann, abhängig von Anfrage-Direktiven.
- Veraltete Antwort
  - : Deutet darauf hin, dass die Antwort eine [veraltete Antwort](/de/docs/Web/HTTP/Caching#fresh_and_stale_based_on_age) ist. In der Regel bedeutet dies, dass die Antwort nicht unverändert wiederverwendet werden kann. Der Cache-Speicher ist nicht verpflichtet, veraltete Antworten sofort zu entfernen, da eine Neubeurteilung die Antwort von veraltet zu [frisch](/de/docs/Web/HTTP/Caching#fresh_and_stale_based_on_age) ändern könnte.
- Alter
  - : Die Zeit seit der Erstellung einer Antwort. Sie ist ein Kriterium dafür, ob eine Antwort [frisch oder veraltet](/de/docs/Web/HTTP/Caching#fresh_and_stale_based_on_age) ist.

## Direktiven

Dieser Abschnitt listet Direktiven auf, die das Caching beeinflussen — sowohl Antwort-Direktiven als auch Anfrage-Direktiven.

### Antwort-Direktiven

#### `max-age`

Die `max-age=N` Antwort-Direktive weist darauf hin, dass die Antwort bis _N_ Sekunden nach ihrer Erstellung [frisch](/de/docs/Web/HTTP/Caching#fresh_and_stale_based_on_age) bleibt.

```http
Cache-Control: max-age=604800
```

Dies deutet darauf hin, dass Caches diese Antwort speichern und sie für nachfolgende Anfragen wiederverwenden können, solange sie [frisch](/de/docs/Web/HTTP/Caching#fresh_and_stale_based_on_age) ist.

Beachten Sie, dass `max-age` nicht die verstrichene Zeit seit dem Empfang der Antwort bedeutet; es ist die verstrichene Zeit seit der Erstellung der Antwort auf dem Ursprungsserver.
Wenn der andere Cache(s) — auf dem Netzwerkpfad, den die Antwort genommen hat — die Antwort für 100 Sekunden speichert (angezeigt durch das `Age` Antwort-Headerfeld), würde der Browser-Cache 100 Sekunden von seiner [Frischelebensdauer](/de/docs/Web/HTTP/Caching#fresh_and_stale_based_on_age) abziehen.

Wenn der `max-age` Wert negativ ist (zum Beispiel `-1`) oder kein Ganzzahlwert (zum Beispiel `3599.99`) ist, ist das Caching-Verhalten nicht spezifiziert. Caches wird empfohlen, den Wert so zu behandeln, als wäre er `0` (dies wird im Abschnitt [Berechnung der Frischelebensdauer](https://httpwg.org/specs/rfc9111.html#calculating.freshness.lifetime) der HTTP-Spezifikation erwähnt).

```http
Cache-Control: max-age=604800
Age: 100
```

#### `s-maxage`

Die `s-maxage` Antwort-Direktive gibt an, wie lange die Antwort in einem gemeinsamen Cache [frisch](/de/docs/Web/HTTP/Caching#fresh_and_stale_based_on_age) bleibt.
Die `s-maxage` Direktive wird von privaten Caches ignoriert und überschreibt den durch die `max-age` Direktive oder den `Expires` Header für gemeinsame Caches angegebenen Wert, falls diese vorhanden sind.

```http
Cache-Control: s-maxage=604800
```

#### `no-cache`

Die `no-cache` Antwort-Direktive gibt an, dass die Antwort in Caches gespeichert werden kann, aber die Antwort muss vor jeder Wiederverwendung mit dem Ursprungsserver validiert werden, auch wenn der Cache vom Ursprungsserver getrennt ist.

```http
Cache-Control: no-cache
```

Wenn Sie möchten, dass Caches beim Wiederverwenden gespeicherter Inhalte immer nach Inhaltsaktualisierungen suchen, ist `no-cache` die zu verwendende Direktive. Sie bewirkt dies, indem sie Caches zwingt, jede Anfrage mit dem Ursprungsserver zu validieren.

Beachten Sie, dass `no-cache` nicht bedeutet "nicht speichern". `no-cache` erlaubt Caches, eine Antwort zu speichern, verlangt aber, dass sie vor der Wiederverwendung neu validiert wird. Wenn der Sinn von "nicht speichern", den Sie haben, tatsächlich "nicht gespeichert", dann ist `no-store` die zu verwendende Direktive.

#### `must-revalidate`

Die `must-revalidate` Antwort-Direktive gibt an, dass die Antwort in Caches gespeichert und während sie [frisch](/de/docs/Web/HTTP/Caching#fresh_and_stale_based_on_age) ist, wiederverwendet werden kann. Wenn die Antwort [veraltet](/de/docs/Web/HTTP/Caching#fresh_and_stale_based_on_age) wird, muss sie mit dem Ursprungsserver vor der Wiederverwendung validiert werden.

Typischerweise wird `must-revalidate` mit `max-age` verwendet.

```http
Cache-Control: max-age=604800, must-revalidate
```

HTTP erlaubt es Caches, [veraltete Antworten](/de/docs/Web/HTTP/Caching#fresh_and_stale_based_on_age) wiederzuverwenden, wenn sie von dem Ursprungsserver getrennt sind. `must-revalidate` ist eine Möglichkeit, dies zu verhindern - entweder wird die gespeicherte Antwort mit dem Ursprungsserver neu validiert oder eine 504 (Gateway Timeout) Antwort erzeugt.

#### `proxy-revalidate`

Die `proxy-revalidate` Antwort-Direktive ist das Äquivalent zu `must-revalidate`, jedoch speziell nur für gemeinsame Caches.

#### `no-store`

Die `no-store` Antwort-Direktive gibt an, dass keine Caches irgendeiner Art (privat oder gemeinsam) diese Antwort speichern sollen.

```http
Cache-Control: no-store
```

#### `private`

Die `private` Antwort-Direktive gibt an, dass die Antwort nur in einem privaten Cache (z. B. lokale Caches in Browsern) gespeichert werden darf.

```http
Cache-Control: private
```

Sie sollten die `private` Direktive für benutzerpersonalisierte Inhalte hinzufügen, insbesondere für Antworten, die nach der Anmeldung empfangen werden, und für Sitzungen, die über Cookies verwaltet werden.

Wenn Sie vergessen, `private` zu einer Antwort mit personalisierten Inhalten hinzuzufügen, kann diese Antwort in einem gemeinsamen Cache gespeichert und letztendlich für mehrere Benutzer wiederverwendet werden, was zu einem Leck persönlicher Informationen führen kann.

#### `public`

Die `public` Antwort-Direktive gibt an, dass die Antwort in einem gemeinsamen Cache gespeichert werden kann. Antworten für Anfragen mit `Authorization` Header-Feldern dürfen nicht in einem gemeinsamen Cache gespeichert werden; die `public` Direktive wird jedoch bewirken, dass solche Antworten in einem gemeinsamen Cache gespeichert werden.

```http
Cache-Control: public
```

Im Allgemeinen senden Browser bei Seiten mit Basis-Authentifizierung oder Digest-Authentifizierung Anfragen mit dem `Authorization` Header. Das bedeutet, dass die Antwort für eingeschränkte Benutzer (die Konten haben) zugriffskontrolliert ist und grundsätzlich nicht gemeinsam-cachebar ist, auch wenn es `max-age` hat.

Sie können die `public` Direktive verwenden, um diese Einschränkung aufzuheben.

```http
Cache-Control: public, max-age=604800
```

Beachten Sie, dass `s-maxage` oder `must-revalidate` auch diese Einschränkung aufheben.

Wenn eine Anfrage keinen `Authorization` Header hat oder Sie bereits `s-maxage` oder `must-revalidate` in der Antwort verwenden, dann müssen Sie `public` nicht verwenden.

#### `must-understand`

Die `must-understand` Antwort-Direktive gibt an, dass ein Cache die Antwort nur speichern sollte, wenn er die Anforderungen für das Caching basierend auf dem Statuscode versteht.

`must-understand` sollte mit `no-store` für Fallback-Verhalten gekoppelt werden.

```http
Cache-Control: must-understand, no-store
```

Wenn ein Cache `must-understand` nicht unterstützt, wird es ignoriert. Wenn `no-store` ebenfalls vorhanden ist, wird die Antwort nicht gespeichert.

Wenn ein Cache `must-understand` unterstützt, speichert er die Antwort mit einem Verständnis der Cache-Anforderungen basierend auf ihrem Statuscode.

#### `no-transform`

Einige Vermittler transformieren Inhalte aus verschiedenen Gründen. Zum Beispiel konvertieren einige Bilder, um die Übertragungsgröße zu reduzieren. In einigen Fällen ist dies für den Inhaltsanbieter unerwünscht.

`no-transform` gibt an, dass jeder Vermittler (unabhängig davon, ob er einen Cache implementiert) den Inhalt der Antwort nicht transformieren sollte.

#### `immutable`

Die `immutable` Antwort-Direktive gibt an, dass die Antwort nicht aktualisiert wird, während sie [frisch](/de/docs/Web/HTTP/Caching#fresh_and_stale_based_on_age) ist.

```http
Cache-Control: public, max-age=604800, immutable
```

Eine moderne Best Practice für statische Ressourcen ist es, zugehörige Versionen/Hashes in ihren URLs zu inkludieren, während die Ressourcen niemals modifiziert werden — sondern stattdessen, wenn notwendig, die Ressourcen mit neueren Versionen zu _aktualisieren_, die neue Versionsnummern/Hashes haben, sodass ihre URLs unterschiedlich sind. Das wird als das **Cache-Busting**-Muster bezeichnet.

```html
<script src="https://example.com/react.0.0.0.js"></script>
```

Wenn ein Benutzer den Browser neu lädt, sendet der Browser bedingte Anfragen zur Validierung an den Ursprungsserver. Aber es ist nicht erforderlich, solche Arten von statischen Ressourcen selbst beim Neuladen des Browsers neu zu validieren, da sie nie modifiziert werden.
`immutable` signalisiert einem Cache, dass die Antwort unveränderlich ist, während sie [frisch](/de/docs/Web/HTTP/Caching#fresh_and_stale_based_on_age) ist und vermeidet diese Art von unnötigen bedingten Anfragen an den Server.

Wenn Sie ein Cache-Busting-Muster für Ressourcen verwenden und es auf eine lange `max-age` anwenden, können Sie auch `immutable` hinzufügen, um eine Neubeurteilung zu vermeiden.

#### `stale-while-revalidate`

Die `stale-while-revalidate` Antwort-Direktive gibt an, dass der Cache eine veraltete Antwort wiederverwenden könnte, während er sie zu einem Cache neu validiert.

```http
Cache-Control: max-age=604800, stale-while-revalidate=86400
```

Im obigen Beispiel ist die Antwort [frisch](/de/docs/Web/HTTP/Caching#fresh_and_stale_based_on_age) für 7 Tage (604800s).
Nach 7 Tagen wird sie [veraltet](/de/docs/Web/HTTP/Caching#fresh_and_stale_based_on_age), aber der Cache darf sie für alle Anfragen wiederverwenden, die am folgenden Tag (86400s) gemacht werden, vorausgesetzt, dass sie die Antwort im Hintergrund neu validieren.

Die Neubeurteilung wird den Cache wieder [frisch](/de/docs/Web/HTTP/Caching#fresh_and_stale_based_on_age) machen, sodass es für die Clients scheint, dass es während dieser Zeit immer [frisch](/de/docs/Web/HTTP/Caching#fresh_and_stale_based_on_age) war — effektiv die Latenzstrafe der Neubeurteilung vor ihnen verbergend.

Wenn während dieses Zeitraums keine Anfrage erfolgt ist, wird der Cache [veraltet](/de/docs/Web/HTTP/Caching#fresh_and_stale_based_on_age) und die nächste Anfrage wird normal neu validiert.

#### `stale-if-error`

Die `stale-if-error` Antwort-Direktive gibt an, dass der Cache eine [veraltete Antwort](/de/docs/Web/HTTP/Caching#fresh_and_stale_based_on_age) wiederverwenden kann, wenn ein Fehler von einem Upstream-Server generiert wird oder wenn der Fehler lokal generiert wird. Hier wird jeder Fehler als jede Antwort mit einem Statuscode von 500, 502, 503 oder 504 betrachtet.

```http
Cache-Control: max-age=604800, stale-if-error=86400
```

Im obigen Beispiel ist die Antwort [frisch](/de/docs/Web/HTTP/Caching#fresh_and_stale_based_on_age) für 7 Tage (604800s). Danach wird sie [veraltet](/de/docs/Web/HTTP/Caching#fresh_and_stale_based_on_age), kann aber für einen zusätzlichen Tag (86400s) verwendet werden, wenn ein Fehler auftritt.

Nach Ablauf der stale-if-error-Periode wird der Client jeden erzeugten Fehler erhalten.

### Anfrage-Direktiven

#### `no-cache`

Die `no-cache` Anfrage-Direktive fordert Caches auf, die Antwort mit dem Ursprungsserver vor der Wiederverwendung zu validieren.

```http
Cache-Control: no-cache
```

`no-cache` ermöglicht es Clients, die aktuellste Antwort anzufordern, selbst wenn der Cache eine [frische](/de/docs/Web/HTTP/Caching#fresh_and_stale_based_on_age) Antwort hat.

Browser fügen normalerweise `no-cache` zu Anfragen hinzu, wenn Benutzer eine Seite **erneut laden**.

#### `no-store`

Die `no-store` Anfrage-Direktive erlaubt einem Client, Cache-Speicher zu bitten, Anfrage und entsprechende Antwort nicht zu speichern — selbst wenn die Ursprungsserver-Antwort gespeichert werden könnte.

```http
Cache-Control: no-store
```

#### `max-age`

Die `max-age=N` Anfrage-Direktive gibt an, dass der Client eine gespeicherte Antwort erlaubt, die auf dem Ursprungserver innerhalb von _N_ Sekunden erzeugt wurde — wobei _N_ jede nicht-negative Ganzzahl sein kann (einschließlich `0`).

```http
Cache-Control: max-age=10800
```

Im obigen Fall, wenn die Antwort mit `Cache-Control: max-age=10800` vor mehr als 3 Stunden generiert wurde (berechnet aus `max-age` und dem `Age` Header), könnte der Cache diese Antwort nicht wiederverwenden.

Viele Browser verwenden diese Direktive für **Neuladen**, wie unten erklärt.

```http
Cache-Control: max-age=0
```

`max-age=0` ist ein Workaround für `no-cache`, da viele alte (HTTP/1.0) Cache-Implementierungen `no-cache` nicht unterstützen. Kürzlich verwenden Browser immer noch `max-age=0` beim "Neuladen" — aus Gründen der Abwärtskompatibilität — und alternativ `no-cache`, um ein "Force-Reloading" zu verursachen.

Wenn der `max-age` Wert negativ ist (zum Beispiel `-1`) oder kein Ganzzahlwert (zum Beispiel `3599.99`) ist, ist das Caching-Verhalten nicht spezifiziert. Caches wird empfohlen, den Wert so zu behandeln, als wäre er `0`.

#### `max-stale`

Die `max-stale=N` Anfrage-Direktive gibt an, dass der Client eine gespeicherte Antwort erlaubt, die innerhalb von _N_ Sekunden [veraltet](/de/docs/Web/HTTP/Caching#fresh_and_stale_based_on_age) ist.
Wenn kein _N_ Wert angegeben ist, akzeptiert der Client eine veraltete Antwort beliebigen Alters.

```http
Cache-Control: max-stale=3600
```

Zum Beispiel signalisiert eine Anfrage mit dem obigen Header, dass der Browser eine veraltete Antwort aus dem Cache akzeptiert, die in der letzten Stunde abgelaufen ist.

Clients können diesen Header verwenden, wenn der Ursprungsserver nicht erreichbar oder zu langsam ist und zwischengespeicherte Antworten aus Caches auch dann akzeptieren kann, wenn sie etwas alt sind.

Beachten Sie, dass die meisten Browser Anfragen mit `max-stale` nicht unterstützen.

#### `min-fresh`

Die `min-fresh=N` Anfrage-Direktive gibt an, dass der Client eine gespeicherte Antwort erlaubt, die mindestens für _N_ Sekunden [frisch](/de/docs/Web/HTTP/Caching#fresh_and_stale_based_on_age) ist.

```http
Cache-Control: min-fresh=600
```

Im obigen Fall, wenn die Antwort mit `Cache-Control: max-age=3600` vor 51 Minuten in Caches gespeichert wurde, könnte der Cache diese Antwort nicht wiederverwenden.

Clients können diesen Header verwenden, wenn der Benutzer verlangt, dass die Antwort nicht nur [frisch](/de/docs/Web/HTTP/Caching#fresh_and_stale_based_on_age) ist, sondern auch verlangt, dass sie für einen bestimmten Zeitraum nicht aktualisiert wird.

Beachten Sie, dass die meisten Browser Anfragen mit `min-fresh` nicht unterstützen.

#### `no-transform`

Gleiche Bedeutung wie `no-transform` für eine Antwort, aber für eine Anfrage.

#### `only-if-cached`

Der Client gibt an, dass eine bereits zwischengespeicherte Antwort zurückgegeben werden sollte. Wenn ein Cache eine gespeicherte Antwort hat, selbst eine veraltete, wird sie zurückgegeben. Wenn keine zwischengespeicherte Antwort verfügbar ist, wird eine [504 Gateway Timeout](/de/docs/Web/HTTP/Status/504) Antwort zurückgegeben.

## Anwendungsfälle

### Speicherung verhindern

Wenn Sie nicht möchten, dass eine Antwort in Caches gespeichert wird, verwenden Sie die `no-store` Direktive.

```http
Cache-Control: no-store
```

Beachten Sie, dass `no-cache` bedeutet "es kann gespeichert werden, aber nicht wiederverwenden, bevor es validiert wird" — also ist es nicht dafür gedacht, eine Antwort davon abzuhalten, gespeichert zu werden.

```http example-bad
Cache-Control: no-cache
```

Theoretisch, wenn Direktiven im Konflikt stehen, sollte die restriktivste Direktive beachtet werden. Daher ist das folgende Beispiel im Grunde genommen bedeutungslos, da `private`, `no-cache`, `max-age=0` und `must-revalidate` mit `no-store` in Konflikt stehen.

```http example-bad
# im Konflikt
Cache-Control: private, no-cache, no-store, max-age=0, must-revalidate

# gleichwertig zu
Cache-Control: no-store
```

### Caching von statischen Ressourcen mit "cache busting"

Wenn Sie statische Ressourcen mit Versionierungs-/Hashing-Mechanismen erstellen, ist das Hinzufügen einer Version / eines Hashs zum Dateinamen oder zur Abfragezeichenfolge eine gute Möglichkeit zur Verwaltung des Cachings.

Zum Beispiel:

```html
<!-- index.html -->
<script src="/assets/react.min.js"></script>
<img src="/assets/hero.png" width="900" height="400" />
```

Die Version der React-Bibliothek ändert sich, wenn Sie die Bibliothek aktualisieren, und `hero.png` ändert sich ebenfalls, wenn Sie das Bild bearbeiten. Diese sind also schwierig in einem Cache mit `max-age` zu speichern.

In einem solchen Fall könnten Sie den Caching-Anforderungen durch die Verwendung einer spezifischen, nummerierten Version der Bibliothek gerecht werden und den Hash des Bildes in seine URL einfügen.

```html
<!-- index.html -->
<script src="/assets/react.0.0.0min.js"></script>
<img src="/assets/hero.png?hash=deadbeef" width="900" height="400" />
```

Sie können einen langen `max-age` Wert und `immutable` hinzufügen, weil der Inhalt sich nie ändern wird.

```http
# /assets/*
Cache-Control: max-age=31536000, immutable
```

Wenn Sie die Bibliothek aktualisieren oder das Bild bearbeiten, sollte neuer Inhalt eine neue URL haben, und Caches werden nicht wiederverwendet. Das wird als "Cache Busting"-Muster bezeichnet.

Verwenden Sie ein `no-cache`, um sicherzustellen, dass die HTML-Antwort selbst nicht zwischengespeichert wird. `no-cache` könnte eine Neubeurteilung verursachen, und der Client wird korrekt eine neue Version der HTML-Antwort und der statischen Ressourcen erhalten.

```http
# /index.html
Cache-Control: no-cache
```

Hinweis: Wenn `index.html` unter Basis-Authentifizierung oder Digest-Authentifizierung kontrolliert wird, werden Dateien unter `/assets` nicht im gemeinsamen Cache gespeichert. Wenn Dateien unter `/assets/` geeignet sind, im gemeinsamen Cache gespeichert zu werden, benötigen Sie auch eines der `public`, `s-maxage` oder `must-revalidate`.

### Immer aktuelle Inhalte

Für Inhalte, die dynamisch generiert werden oder statisch sind, aber häufig aktualisiert werden, möchten Sie, dass ein Benutzer immer die aktuellste Version erhält.

Wenn Sie keinen `Cache-Control` Header hinzufügen, weil die Antwort nicht zwischengespeichert werden soll, könnte das zu einem unerwarteten Ergebnis führen. Der Cache-Speicher darf dies heuristisch zwischenspeichern — wenn Sie also Anforderungen an das Caching haben, sollten Sie sie immer explizit in dem `Cache-Control` Header angeben.

Das Hinzufügen von `no-cache` zur Antwort verursacht eine Neubeurteilung mit dem Server, sodass Sie jedes Mal eine [frische](/de/docs/Web/HTTP/Caching#fresh_and_stale_based_on_age) Antwort bereitstellen können — oder wenn der Client bereits eine neue hat, einfach `304 Not Modified` antworten.

```http
Cache-Control: no-cache
```

Die meisten HTTP/1.0-Caches unterstützen keine `no-cache` Direktiven, daher wurde historisch `max-age=0` als Workaround verwendet. Aber nur `max-age=0` könnte eine [veraltete Antwort](/de/docs/Web/HTTP/Caching#fresh_and_stale_based_on_age) verursachen, die wiederverwendet wird, wenn Caches vom Ursprungsserver getrennt sind. `must-revalidate` adressiert dies. Daher ist das folgende Beispiel gleichwertig zu `no-cache`.

```http
Cache-Control: max-age=0, must-revalidate
```

Aber im Moment können Sie einfach `no-cache` verwenden.

### Löschen eines bereits gespeicherten Caches

Leider gibt es keine Cache-Direktiven zum Löschen bereits gespeicherter Antworten aus Caches.

Stellen Sie sich vor, dass Clients/Caches eine [frische](/de/docs/Web/HTTP/Caching#fresh_and_stale_based_on_age) Antwort für einen Pfad speichern, ohne Anfrageflug zum Server. Es gibt nichts, was ein Server für diesen Pfad tun könnte.

Alternativ kann `Clear-Site-Data` einen Browser-Cache für eine Seite löschen. Aber seien Sie vorsichtig: Dies löscht jede gespeicherte Antwort für eine Seite — und nur in Browsern, nicht für einen gemeinsamen Cache.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [HTTP-Caching](/de/docs/Web/HTTP/Caching)
- [Caching-Tutorial für Web-Autoren und Webmaster](https://www.mnot.net/cache_docs/)
- [Caching Best Practices & max-age Stolperfallen](https://jakearchibald.com/2016/caching-best-practices/)
- [Cache-Control für Zivilisten](https://csswizardry.com/2019/03/cache-control-for-civilians/)
- [RFC 9111 – HTTP Caching](https://httpwg.org/specs/rfc9111.html)
- [RFC 5861 – HTTP Cache-Control Erweiterungen für veraltete Inhalte](https://httpwg.org/specs/rfc5861.html)
- [RFC 8246 – HTTP Unveränderliche Antworten](https://httpwg.org/specs/rfc8246.html)
