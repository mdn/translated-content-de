---
title: Cache-Control header
short-title: Cache-Control
slug: Web/HTTP/Reference/Headers/Cache-Control
l10n:
  sourceCommit: fd4cf672d03417a8a391a74db10dfda3cb1e8443
---

Der HTTP-Header **`Cache-Control`** enthält _Anweisungen_ (Instruktionen) in Anfragen und Antworten, die das [Caching](/de/docs/Web/HTTP/Guides/Caching) in Browsern und gemeinsamen Caches (z. B. Proxies, CDNs) steuern.

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
        {{Glossary("CORS-safelisted_response_header", "CORS-sicherer Antwort-Header")}}
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

- Caching-Direktiven sind nicht case-sensitiv. Es wird jedoch Kleinbuchstaben empfohlen, da manche Implementierungen Großbuchstaben-Direktiven nicht erkennen.
- Mehrere Direktiven sind zulässig und müssen durch Kommas getrennt werden (z. B. `Cache-control: max-age=180, public`).
- Einige Direktiven haben ein optionales Argument. Wenn ein Argument bereitgestellt wird, wird es durch ein Gleichheitszeichen (`=`) vom Direktiven-Namen getrennt. Typischerweise sind Argumente für die Direktiven Ganzzahlen und daher nicht in Anführungszeichen eingeschlossen (z. B. `Cache-control: max-age=12`).

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

Hinweis: Prüfen Sie die [Kompatibilitätstabelle](#browser-kompatibilität) für deren Unterstützung; Benutzeragenten, die sie nicht erkennen, sollten sie ignorieren.

## Vokabular

Dieser Abschnitt definiert die in diesem Dokument verwendeten Begriffe, von denen einige aus der Spezifikation stammen.

- (HTTP) Cache
  - : Implementierung, die Anfragen und Antworten speichert, um sie bei folgenden Anfragen wiederzuverwenden. Es kann entweder ein gemeinsamer Cache oder ein privater Cache sein.
- Gemeinsamer Cache
  - : Cache, der zwischen dem Ursprungs-Server und den Clients existiert (z. B. Proxy, CDN). Er speichert eine einzelne Antwort und wiederverwendet sie für mehrere Benutzer – daher sollten Entwickler vermeiden, personalisierte Inhalte im gemeinsamen Cache zu speichern.
- Privater Cache
  - : Cache, der beim Client existiert. Er wird auch als _lokaler Cache_ oder _Browser-Cache_ bezeichnet. Er kann personalisierte Inhalte für einen einzelnen Benutzer speichern und wiederverwenden.
- Antwort speichern
  - : Eine Antwort in Caches speichern, wenn die Antwort cachefähig ist. Jedoch wird die zwischengespeicherte Antwort nicht immer unverändert wiederverwendet. (Normalerweise bedeutet "Cache" das Speichern einer Antwort.)
- Antwort wiederverwenden
  - : Zwischengespeicherte Antworten für nachfolgende Anfragen wiederverwenden.
- Antwort erneut validieren
  - : Den Ursprungs-Server fragen, ob die gespeicherte Antwort noch [aktuell](/de/docs/Web/HTTP/Guides/Caching#fresh_and_stale_based_on_age) ist. Üblicherweise wird die Revalidierung durch eine bedingte Anfrage durchgeführt.
- Aktuelle Antwort
  - : Zeigt an, dass die Antwort [aktuell](/de/docs/Web/HTTP/Guides/Caching#fresh_and_stale_based_on_age) ist. Dies bedeutet normalerweise, dass die Antwort für nachfolgende Anfragen wiederverwendet werden kann, abhängig von den Anforderungs-Direktiven.
- Abgelaufene Antwort
  - : Zeigt an, dass die Antwort eine [abgelaufene Antwort](/de/docs/Web/HTTP/Guides/Caching#fresh_and_stale_based_on_age) ist. Dies bedeutet normalerweise, dass die Antwort nicht unverändert wiederverwendet werden kann. Cache-Speicher müssen abgelaufene Antworten nicht sofort entfernen, da die Revalidierung die Antwort wieder von abgelaufen zu [aktuell](/de/docs/Web/HTTP/Guides/Caching#fresh_and_stale_based_on_age) ändern könnte.
- Alter
  - : Die Zeit, die seit der Erstellung einer Antwort vergangen ist. Es ist ein Kriterium dafür, ob eine Antwort [aktuell oder abgelaufen](/de/docs/Web/HTTP/Guides/Caching#fresh_and_stale_based_on_age) ist.

## Direktiven

Dieser Abschnitt führt Direktiven auf, die das Caching beeinflussen – sowohl Antwort- als auch Anfragendirektiven.

### Antwort-Direktiven

#### `max-age`

Die `max-age=N` Antwort-Direktive gibt an, dass die Antwort _N_ Sekunden nach ihrer Erstellung [aktuell](/de/docs/Web/HTTP/Guides/Caching#fresh_and_stale_based_on_age) bleibt.

```http
Cache-Control: max-age=604800
```

Gibt an, dass Caches diese Antwort speichern und für nachfolgende Anfragen wiederverwenden können, solange sie [aktuell](/de/docs/Web/HTTP/Guides/Caching#fresh_and_stale_based_on_age) ist.

Beachten Sie, dass `max-age` nicht die seit dem Empfang der Antwort vergangene Zeit ist; es ist die seit der Erstellung der Antwort auf dem Ursprungs-Server vergangene Zeit.
Wenn der andere Cache(s) – auf dem vom Netzwerk genommenen Weg der Antwort – die Antwort für 100 Sekunden speichert (angegeben durch das `Age`-Antwortheaderfeld), würde der Browser-Cache 100 Sekunden von seiner [Aktualitätsdauer](/de/docs/Web/HTTP/Guides/Caching#fresh_and_stale_based_on_age) abziehen.

Wenn der `max-age`-Wert negativ ist (zum Beispiel `-1`) oder keine Ganzzahl ist (zum Beispiel `3599.99`), dann ist das Caching-Verhalten nicht spezifiziert. Caches werden ermutigt, den Wert zu behandeln, als ob er `0` wäre (dies ist in der [Berechnung der Aktualitätsdauer](https://httpwg.org/specs/rfc9111.html#calculating.freshness.lifetime) Abschnitt der HTTP-Spezifikation angegeben).

```http
Cache-Control: max-age=604800
Age: 100
```

#### `s-maxage`

Die `s-maxage` Antwort-Direktive gibt an, wie lange die Antwort in einem gemeinsamen Cache [aktuell](/de/docs/Web/HTTP/Guides/Caching#fresh_and_stale_based_on_age) bleibt.
Die `s-maxage` Direktive wird von privaten Caches ignoriert und überschreibt den durch die `max-age`-Direktive oder den `Expires`-Header angegebenen Wert für gemeinsame Caches, falls vorhanden.

```http
Cache-Control: s-maxage=604800
```

#### `no-cache`

Die `no-cache` Antwort-Direktive gibt an, dass die Antwort in Caches gespeichert werden darf, aber die Antwort vor jeder Wiederverwendung mit dem Ursprungs-Server validiert werden muss, auch wenn der Cache vom Ursprungs-Server getrennt ist.

```http
Cache-Control: no-cache
```

Wenn Sie möchten, dass Caches bei der Wiederverwendung gespeicherter Inhalte immer nach Inhaltsaktualisierungen suchen, ist `no-cache` die zu verwendende Direktive. Sie erreicht dies, indem sie von Caches verlangt, jede Anfrage mit dem Ursprungs-Server zu validieren.

Beachten Sie, dass `no-cache` nicht "nicht cachen" bedeutet. `no-cache` erlaubt es Caches, eine Antwort zu speichern, erfordert jedoch, dass sie vor der Wiederverwendung validiert wird. Wenn das Gefühl von "nicht cachen", das Sie wünschen, tatsächlich "nicht speichern" ist, dann ist `no-store` die zu verwendende Direktive.

#### `must-revalidate`

Die `must-revalidate` Antwort-Direktive gibt an, dass die Antwort in Caches gespeichert und während ihrer [Aktualität](/de/docs/Web/HTTP/Guides/Caching#fresh_and_stale_based_on_age) wiederverwendet werden kann. Wenn die Antwort [abgelaufen](/de/docs/Web/HTTP/Guides/Caching#fresh_and_stale_based_on_age) wird, muss sie vor der Wiederverwendung mit dem Ursprungs-Server validiert werden.

Typischerweise wird `must-revalidate` mit `max-age` verwendet.

```http
Cache-Control: max-age=604800, must-revalidate
```

HTTP erlaubt es Caches, [abgelaufene Antworten](/de/docs/Web/HTTP/Guides/Caching#fresh_and_stale_based_on_age) zu wiederverwenden, wenn sie vom Ursprungs-Server getrennt sind. `must-revalidate` ist eine Möglichkeit, dies zu verhindern - entweder wird die gespeicherte Antwort mit dem Ursprungs-Server validiert oder eine 504 (Gateway Timeout) Antwort wird generiert.

#### `proxy-revalidate`

Die `proxy-revalidate` Antwort-Direktive ist das Äquivalent zu `must-revalidate`, jedoch speziell nur für gemeinsame Caches.

#### `no-store`

Die `no-store` Antwort-Direktive gibt an, dass Caches jeglicher Art (privat oder geteilt) diese Antwort nicht speichern sollten.

```http
Cache-Control: no-store
```

#### `private`

Die `private` Antwort-Direktive gibt an, dass die Antwort nur in einem privaten Cache (z. B. lokale Caches in Browsern) gespeichert werden kann.

```http
Cache-Control: private
```

Sie sollten die `private` Direktive für benutzerpersonalisierte Inhalte hinzufügen, insbesondere für Antworten, die nach dem Login empfangen wurden und für Sitzungen, die über Cookies verwaltet werden.

Wenn Sie vergessen, `private` zu einer Antwort mit personalisierten Inhalten hinzuzufügen, kann diese Antwort in einem gemeinsamen Cache gespeichert und für mehrere Benutzer wiederverwendet werden, was dazu führen kann, dass persönliche Informationen durchgesickert werden.

#### `public`

Die `public` Antwort-Direktive gibt an, dass die Antwort in einem gemeinsamen Cache gespeichert werden kann. Antworten für Anfragen mit `Authorization`-Headerfeldern dürfen nicht in einem gemeinsamen Cache gespeichert werden; jedoch wird die `public` Direktive dazu führen, dass solche Antworten in einem gemeinsamen Cache gespeichert werden.

```http
Cache-Control: public
```

Im Allgemeinen, wenn Seiten unter Basic Auth oder Digest Auth stehen, sendet der Browser Anfragen mit dem `Authorization`-Header. Dies bedeutet, dass die Antwort für eingeschränkte Benutzer (die Konten haben) zugangsgeschützt ist und grundsätzlich nicht im gemeinsamen Cache speicherbar ist, auch wenn sie `max-age` hat.

Sie können die `public` Direktive verwenden, um diese Beschränkung aufzuheben.

```http
Cache-Control: public, max-age=604800
```

Beachten Sie, dass `s-maxage` oder `must-revalidate` ebenfalls diese Beschränkung aufheben.

Wenn eine Anfrage keinen `Authorization`-Header hat oder Sie bereits `s-maxage` oder `must-revalidate` in der Antwort verwenden, benötigen Sie nicht `public`.

#### `must-understand`

Die `must-understand` Antwort-Direktive gibt an, dass ein Cache die Antwort nur speichern sollte, wenn er die Anforderungen des Caching basierend auf dem Statuscode versteht.

`must-understand` sollte mit `no-store` für ein Rückfallverhalten gekoppelt werden.

```http
Cache-Control: must-understand, no-store
```

Wenn ein Cache `must-understand` nicht unterstützt, wird es ignoriert. Wenn `no-store` auch vorhanden ist, wird die Antwort nicht gespeichert.

Wenn ein Cache `must-understand` unterstützt, speichert er die Antwort mit einem Verständnis der Caching-Anforderungen basierend auf seinem Statuscode.

#### `no-transform`

Einige Vermittler transformieren Inhalte aus verschiedenen Gründen. Beispielsweise konvertieren einige Bilder, um die Übertragungsgröße zu reduzieren. In einigen Fällen ist dies für den Inhaltsanbieter unerwünscht.

`no-transform` gibt an, dass kein Vermittler (unabhängig davon, ob er einen Cache implementiert oder nicht) den Antwortinhalt transformieren sollte.

#### `immutable`

Die `immutable` Antwort-Direktive gibt an, dass die Antwort während ihrer [Aktualität](/de/docs/Web/HTTP/Guides/Caching#fresh_and_stale_based_on_age) nicht aktualisiert wird.

```http
Cache-Control: public, max-age=604800, immutable
```

Ein modernes Best Practice für statische Ressourcen ist, Version/Hashes in ihre URLs einzufügen, jedoch nie die Ressourcen zu modifizieren – stattdessen, wenn nötig, _dieses_ mit neueren Versionen zu aktualisieren, die neue Versionsnummern/Hashes haben, so dass ihre URLs unterschiedlich sind. Das wird als **Cache-Busting**-Muster bezeichnet.

```html
<script src="https://example.com/react.0.0.0.js"></script>
```

Wenn ein Benutzer den Browser neu lädt, sendet der Browser bedingte Anfragen zur Validierung an den Ursprungs-Server. Aber es ist nicht notwendig, solche Arten von statischen Ressourcen zu revalidieren, selbst wenn ein Benutzer den Browser neu lädt, da sie nie modifiziert werden.
`immutable` teilt einem Cache mit, dass die Antwort unveränderlich ist, während sie [aktuell](/de/docs/Web/HTTP/Guides/Caching#fresh_and_stale_based_on_age) ist und vermeidet solche Arten von unnötigen bedingten Anfragen an den Server.

Wenn Sie ein Cache-Busting-Muster für Ressourcen verwenden und dies auf eine lange `max-age` anwenden, können Sie auch `immutable` hinzufügen, um die Revalidierung zu vermeiden.

#### `stale-while-revalidate`

Die `stale-while-revalidate` Antwort-Direktive gibt an, dass der Cache eine abgelaufene Antwort wiederverwenden könnte, während er sie zu einem Cache revalidiert.

```http
Cache-Control: max-age=604800, stale-while-revalidate=86400
```

Im obigen Beispiel ist die Antwort für 7 Tage (604800s) [aktuell](/de/docs/Web/HTTP/Guides/Caching#fresh_and_stale_based_on_age).
Nach 7 Tagen wird sie [abgelaufen](/de/docs/Web/HTTP/Guides/Caching#fresh_and_stale_based_on_age), aber der Cache darf sie für alle Anfragen, die am folgenden Tag (86400s) gestellt werden, wiederverwenden, vorausgesetzt, sie revalidieren die Antwort im Hintergrund.

Die Revalidierung wird den Cache wieder [aktuell](/de/docs/Web/HTTP/Guides/Caching#fresh_and_stale_based_on_age) machen, so dass es den Clients erscheint, dass er während dieser Zeit immer [aktuell](/de/docs/Web/HTTP/Guides/Caching#fresh_and_stale_based_on_age) war - effektiv das Latenzübel der Revalidierung von ihnen verbergend.

Wenn in diesem Zeitraum keine Anfrage gestellt wurde, wurde der Cache [abgelaufen](/de/docs/Web/HTTP/Guides/Caching#fresh_and_stale_based_on_age) und die nächste Anfrage wird normal revalidiert.

#### `stale-if-error`

Die `stale-if-error` Antwort-Direktive gibt an, dass der Cache eine [abgelaufene Antwort](/de/docs/Web/HTTP/Guides/Caching#fresh_and_stale_based_on_age) wiederverwenden kann, wenn ein Upstream-Server einen Fehler generiert oder wenn der Fehler lokal generiert wird. Hier wird ein Fehler als jede Antwort mit einem Statuscode von 500, 502, 503 oder 504 angesehen.

```http
Cache-Control: max-age=604800, stale-if-error=86400
```

Im obigen Beispiel ist die Antwort für 7 Tage (604800s) [aktuell](/de/docs/Web/HTTP/Guides/Caching#fresh_and_stale_based_on_age). Danach wird sie [abgelaufen](/de/docs/Web/HTTP/Guides/Caching#fresh_and_stale_based_on_age), kann jedoch bei einem Fehler für einen zusätzlichen Tag (86400s) verwendet werden.

Nach Ablauf der `stale-if-error` Periode empfängt der Client jeden generierten Fehler.

### Anforderungs-Direktiven

#### `no-cache`

Die `no-cache` Anforderungs-Direktive fordert Caches auf, die Antwort mit dem Ursprungs-Server vor der Wiederverwendung zu validieren.

```http
Cache-Control: no-cache
```

`no-cache` ermöglicht es Clients, die aktuellste Antwort anzufordern, selbst wenn der Cache eine [aktuelle](/de/docs/Web/HTTP/Guides/Caching#fresh_and_stale_based_on_age) Antwort hat.

Browser fügen Anfragen normalerweise `no-cache` hinzu, wenn Benutzer eine Seite **zwangsweise neu laden**.

#### `no-store`

Die `no-store` Anforderungs-Direktive ermöglicht es einem Client, dass Caches davon absehen, die Anfrage und die entsprechende Antwort zu speichern – selbst wenn die Antwort des Ursprungs-Servers hätte gespeichert werden können.

```http
Cache-Control: no-store
```

#### `max-age`

Die `max-age=N` Anforderungs-Direktive gibt an, dass der Client eine gespeicherte Antwort erlaubt, die auf dem Ursprungs-Server innerhalb von _N_ Sekunden erstellt wurde – wobei _N_ eine nicht-negative Ganzzahl (einschließlich `0`) sein kann.

```http
Cache-Control: max-age=10800
```

Im obigen Fall, wenn die Antwort mit `Cache-Control: max-age=10800` vor mehr als 3 Stunden (berechnet aus `max-age` und dem `Age` Header) generiert wurde, könnte der Cache diese Antwort nicht wiederverwenden.

Viele Browser verwenden diese Direktive für das **Neuladen**, wie unten erklärt.

```http
Cache-Control: max-age=0
```

`max-age=0` ist ein Workaround für `no-cache`, weil viele alte (HTTP/1.0) Cache-Implementierungen `no-cache` nicht unterstützen. Kürzlich verwenden Browser immer noch `max-age=0` beim "Neuladen" – aus Gründen der Abwärtskompatibilität – und alternativ `no-cache`, um ein "erzwungenes Neu Laden" auszulösen.

Wenn der `max-age` Wert negativ ist (zum Beispiel `-1`) oder keine Ganzzahl ist (zum Beispiel `3599.99`), ist das Caching-Verhalten nicht spezifiziert. Caches werden ermutigt, den Wert zu behandeln, als ob er `0` wäre.

#### `max-stale`

Die `max-stale=N` Anforderungs-Direktive gibt an, dass der Client eine gespeicherte Antwort, die innerhalb von _N_ Sekunden [abgelaufen](/de/docs/Web/HTTP/Guides/Caching#fresh_and_stale_based_on_age) ist, erlaubt.
Wenn kein _N_-Wert angegeben ist, akzeptiert der Client eine abgelaufene Antwort jeden Alters.

```http
Cache-Control: max-stale=3600
```

Zum Beispiel zeigt eine Anfrage mit dem obigen Header an, dass der Browser eine abgelaufene Antwort aus dem Cache akzeptiert, die innerhalb der letzten Stunde abgelaufen ist.

Clients können diesen Header verwenden, wenn der Ursprungs-Server ausgefallen ist oder zu langsam ist und sie zwischengespeicherte Antworten von Caches akzeptieren können, selbst wenn diese etwas alt sind.

Beachten Sie, dass die großen Browser Anfragen mit `max-stale` nicht unterstützen.

#### `min-fresh`

Die `min-fresh=N` Anforderungs-Direktive gibt an, dass der Client eine gespeicherte Antwort, die für mindestens _N_ Sekunden [aktuell](/de/docs/Web/HTTP/Guides/Caching#fresh_and_stale_based_on_age) ist, erlaubt.

```http
Cache-Control: min-fresh=600
```

Im obigen Fall, wenn die Antwort mit `Cache-Control: max-age=3600` vor 51 Minuten in Caches gespeichert wurde, könnte der Cache diese Antwort nicht wiederverwenden.

Clients können diesen Header verwenden, wenn der Benutzer erfordert, dass die Antwort nicht nur [aktuell](/de/docs/Web/HTTP/Guides/Caching#fresh_and_stale_based_on_age) ist, sondern auch erfordert, dass sie für einen Zeitraum nicht aktualisiert wird.

Beachten Sie, dass die großen Browser Anfragen mit `min-fresh` nicht unterstützen.

#### `no-transform`

Dieselbe Bedeutung, die `no-transform` für eine Antwort hat, aber stattdessen für eine Anfrage.

#### `only-if-cached`

Der Client gibt an, dass eine bereits zwischengespeicherte Antwort zurückgegeben werden soll. Wenn ein Cache eine gespeicherte Antwort hat, auch eine abgelaufene, wird sie zurückgegeben. Wenn keine zwischengespeicherte Antwort verfügbar ist, wird eine [504 Gateway Timeout](/de/docs/Web/HTTP/Reference/Status/504) Antwort zurückgegeben.

#### `stale-if-error`

Die `stale-if-error` Anforderungs-Direktive gibt an, dass der Browser daran interessiert ist, veraltete Inhalte bei Fehlern von einem Zwischenserver für einen bestimmten Ursprung zu erhalten.
Dies wird von keinem Browser unterstützt (siehe [Browser-Kompatibilität](#browser-kompatibilität)).

## Anwendungsfälle

### Speicherung verhindern

Wenn Sie nicht möchten, dass eine Antwort in Caches gespeichert wird, verwenden Sie die `no-store` Direktive.

```http
Cache-Control: no-store
```

Beachten Sie, dass `no-cache` bedeutet, "es kann gespeichert werden, aber nicht wiederverwenden, bevor es validiert wird" – es ist also nicht zum Verhindern des Speicherns einer Antwort.

```http example-bad
Cache-Control: no-cache
```

Theoretisch, wenn Direktiven im Konflikt stehen, sollte die restriktivste Direktive beachtet werden. Daher ist das folgende Beispiel im Wesentlichen bedeutungslos, da `private`, `no-cache`, `max-age=0` und `must-revalidate` mit `no-store` in Konflikt stehen.

```http example-bad
# conflicted
Cache-Control: private, no-cache, no-store, max-age=0, must-revalidate

# equivalent to
Cache-Control: no-store
```

### Caching von statischen Assets mit „Cache Busting“

Wenn Sie statische Assets mit einer Versionierung/Hashing-Mechanismen erstellen, ist es eine gute Möglichkeit, eine Version/Hash zum Dateinamen oder zur Abfragezeichenfolge hinzuzufügen, um das Caching zu verwalten.

Zum Beispiel:

```html
<!-- index.html -->
<script src="/assets/react.min.js"></script>
<img src="/assets/hero.png" width="900" height="400" />
```

Die React-Bibliotheksversion ändert sich, wenn Sie die Bibliothek aktualisieren, und `hero.png` ändert sich auch, wenn Sie das Bild bearbeiten. Daher sind diese schwer in einem Cache mit `max-age` zu speichern.

In einem solchen Fall könnten Sie den Caching-Bedürfnissen gerecht werden, indem Sie eine bestimmte, nummerierte Version der Bibliothek verwenden und den Hash des Bildes in seiner URL einfügen.

```html
<!-- index.html -->
<script src="/assets/react.0.0.0min.js"></script>
<img src="/assets/hero.png?hash=deadbeef" width="900" height="400" />
```

Sie können einen langen `max-age` Wert und `immutable` hinzufügen, da der Inhalt nie geändert wird.

```http
# /assets/*
Cache-Control: max-age=31536000, immutable
```

Wenn Sie die Bibliothek aktualisieren oder das Bild bearbeiten, sollten neue Inhalte eine neue URL haben, und Caches werden nicht wiederverwendet. Das wird als "Cache Busting"-Muster bezeichnet.

Verwenden Sie `no-cache`, um sicherzustellen, dass die HTML-Antwort selbst nicht zwischengespeichert wird. `no-cache` könnte eine Revalidierung verursachen, und der Client erhält korrekt eine neue Version der HTML-Antwort und statische Assets.

```http
# /index.html
Cache-Control: no-cache
```

Hinweis: Wenn `index.html` unter der Grundauthentifizierung oder Digest-Authentifizierung kontrolliert wird, werden Dateien unter `/assets` nicht im gemeinsamen Cache gespeichert. Wenn `/assets/` Dateien geeignet sind, um in einem gemeinsamen Cache gespeichert zu werden, benötigen Sie auch eine von `public`, `s-maxage` oder `must-revalidate`.

### Immer aktuelle Inhalte

Für Inhalte, die dynamisch generiert werden oder die statisch, aber häufig aktualisiert sind, möchten Sie, dass ein Benutzer immer die aktuellste Version erhält.

Wenn Sie keinen `Cache-Control` Header hinzufügen, weil die Antwort nicht zum Zwischenspeichern vorgesehen ist, könnte das ein unerwartetes Ergebnis verursachen. Der Cache-Speicher darf ihn heuristisch cachen – wenn Sie also Anforderungen zum Caching haben, sollten Sie diese immer explizit im `Cache-Control`-Header angeben.

Das Hinzufügen von `no-cache` zur Antwort verursacht eine Revalidierung zum Server, so dass Sie jedes Mal eine [aktuelle](/de/docs/Web/HTTP/Guides/Caching#fresh_and_stale_based_on_age) Antwort liefern können – oder wenn der Client bereits eine neue hat, einfach `304 Not Modified` antworten.

```http
Cache-Control: no-cache
```

Die meisten HTTP/1.0 Caches unterstützen keine `no-cache` Direktiven, daher wurde historisch `max-age=0` als Workaround verwendet. Aber nur `max-age=0` könnte dazu führen, dass eine [abgelaufene Antwort](/de/docs/Web/HTTP/Guides/Caching#fresh_and_stale_based_on_age) wiederverwendet wird, wenn Caches vom Ursprungs-Server getrennt sind. `must-revalidate` adressiert das. Deshalb ist das folgende Beispiel mit `no-cache` gleichwertig.

```http
Cache-Control: max-age=0, must-revalidate
```

Aber jetzt können Sie einfach `no-cache` verwenden.

### Einen bereits gespeicherten Cache löschen

Es gibt keine Cache-Direktiven zum Löschen bereits gespeicherter Antworten aus _Zwischen_-Servern.

Stellen Sie sich vor, dass Clients/Caches eine [aktuelle](/de/docs/Web/HTTP/Guides/Caching#fresh_and_stale_based_on_age) Antwort für einen Pfad speichern, ohne dass eine Anfrage beim Server eingeht. Es gibt nichts, was ein Server für diesen Pfad tun könnte.

[`Clear-Site-Data: cache`](/de/docs/Web/HTTP/Reference/Headers/Clear-Site-Data#cache) kann verwendet werden, um jede gespeicherte Antwort für eine Website im Browser-Cache zu löschen, verwenden Sie dies also mit Vorsicht.
Beachten Sie, dass dies keine Auswirkungen auf gemeinsame oder Zwischen-Caches hat.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [HTTP-Caching](/de/docs/Web/HTTP/Guides/Caching)
- [Caching Tutorial für Web-Autoren und Webmeister](https://www.mnot.net/cache_docs/)
- [Caching Best Practices & Max-Age Tücken](https://jakearchibald.com/2016/caching-best-practices/)
- [Cache-Control für Zivilisten](https://csswizardry.com/2019/03/cache-control-for-civilians/)
- [RFC 9111 – HTTP-Caching](https://httpwg.org/specs/rfc9111.html)
- [RFC 5861 – HTTP Cache-Control-Erweiterungen für abgelaufene Inhalte](https://httpwg.org/specs/rfc5861.html)
- [RFC 8246 – HTTP Unveränderliche Antworten](https://httpwg.org/specs/rfc8246.html)
