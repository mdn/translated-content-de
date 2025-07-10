---
title: Temporal.ZonedDateTime
slug: Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

{{SeeCompatTable}}

Das **`Temporal.ZonedDateTime`** Objekt repräsentiert ein Datum und eine Uhrzeit mit einer Zeitzone. Es wird grundsätzlich als eine Kombination eines [instant](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/Instant), einer Zeitzone und eines Kalendersystems dargestellt.

## Beschreibung

Ein `ZonedDateTime` fungiert als Brücke zwischen einer exakten Zeit und einer "Wanduhrzeit": Es repräsentiert gleichzeitig einen Moment in der Geschichte (wie ein {{jsxref("Temporal.Instant")}}) und eine lokale Wanduhrzeit (wie ein {{jsxref("Temporal.PlainDateTime")}}). Dies geschieht durch das Speichern des Moments, der Zeitzone und des Kalendersystems. Die Zeitzone wird verwendet, um zwischen dem Moment und der lokalen Uhrzeit zu konvertieren, und das Kalendersystem wird verwendet, um die lokale Uhrzeit zu interpretieren.

`ZonedDateTime` ist die einzige `Temporal`-Klasse, die zeitzonenbewusst ist. Die Hinzufügung einer Zeitzone führt zu wichtigen Verhaltensunterschieden zwischen `ZonedDateTime`-Objekten und {{jsxref("Temporal.PlainDateTime")}}-Objekten. Insbesondere kann man nicht mehr davon ausgehen, dass „die Zeit 1 Minute später“ jeden Tag dieselbe ist oder dass ein Tag 24 Stunden hat. Im schlimmsten Fall kann ein ganzer Tag im lokalen Kalender fehlen. Unten bieten wir einen kurzen Überblick über Zeitzonen und Offsets und wie sie die Umwandlung zwischen UTC-Zeit und lokaler Zeit beeinflussen.

### Zeitzonen und Offsets

Alle Zeiten in JavaScript haben einen goldenen Standard: die UTC-Zeit, die kontinuierlich und gleichmäßig zunimmt, während die physische Zeit fortschreitet. Im Gegensatz dazu interessieren sich Benutzer mehr für ihre lokale Zeit, die sie auf ihren Kalendern und Uhren ablesen. Der Prozess der Umwandlung zwischen UTC-Zeit und lokaler Zeit beinhaltet einen Zeitzonen-Offset, der wie folgt berechnet wird:

```plain
local time = UTC time + offset
```

Beispielsweise, wenn die UTC-Zeit 1970-01-01T00:00:00 ist und der Offset "-05:00" beträgt, dann ist die lokale Zeit:

```plain
1970-01-01T00:00:00 + -05:00 = 1969-12-31T19:00:00
```

Indem man diese lokale Zeit mit dem Offset versieht, drückt man diese Zeit als "1969-12-31T19:00:00-05:00" aus und sie kann nun unmissverständlich als ein Moment in der Geschichte verstanden werden.

Um den Offset zu kennen, benötigen wir zwei Informationen, die _Zeitzone_ und den _Moment_. Die Zeitzone ist eine Region auf der Erde, in der immer der gleiche Offset verwendet wird. Zwei Uhren in derselben Zeitzone zeigen immer zur gleichen Zeit die gleiche Uhrzeit an, aber der Offset ist nicht unbedingt konstant: Das heißt, die Uhrzeiten dieser Uhren können sich abrupt ändern. Dies geschieht häufig während der Sommerzeitumstellungen, bei denen sich der Offset um eine Stunde ändert, was zweimal im Jahr passiert. Offsets können sich auch dauerhaft aufgrund politischer Veränderungen ändern, z. B. wenn ein Land die Zeitzone wechselt.

Die Zeitzonen sind in der [IANA Time Zone Database](https://www.iana.org/time-zones) gespeichert. Jede IANA-Zeitzone hat:

- Einen _primären Zeitzonen-Identifikator_, der die Zeitzone eindeutig identifiziert. Er bezieht sich normalerweise auf eine geografische Region, die von einer Stadt geprägt ist (z. B. `Europe/Paris` oder `Africa/Kampala`), kann aber auch einzelne Offset-Zeitzonen bezeichnen wie `UTC` (ein konstanter `+00:00` Offset) oder `Etc/GMT+5` (was aus historischen Gründen ein negativer Offset `-05:00` ist). Aus historischen Gründen ist der primäre Name für die UTC-Zeitzone `UTC`, obwohl er in IANA `Etc/UTC` ist.
- Eine _Zeitzonendefinition_ in Form einer Tabelle, die UTC-Datums-/Uhrzeitbereiche (einschließlich zukünftiger Bereiche) spezifischen Offsets zuordnet.
- Null oder mehr _nicht-primäre Zeitzonen-Identifikatoren_, die Aliasse zum primären Zeitzonen-Identifikator sind. Diese sind normalerweise historische Namen, die nicht mehr in Gebrauch sind, aber aus Kompatibilitätsgründen beibehalten werden. Siehe unten für weitere Informationen.

Als Eingabe werden benannte Identifikatoren fallunempfindlich abgeglichen. Intern werden sie in ihrer bevorzugten Schreibweise gespeichert, und nicht-primäre Identifikatoren werden _nicht_ zum primären Identifikator umgewandelt.

> [!NOTE]
> Wenn Sie den Zeitzonennamen setzen, möchten Sie ihn selten auf `"UTC"` setzen. `ZonedDateTime` ist beabsichtigt, Benutzern angezeigt zu werden, aber kein Mensch lebt in der "UTC"-Zeitzone. Wenn Sie die Zeitzone zum Zeitpunkt der Erstellung nicht kennen, aber die Wanduhrzeit, verwenden Sie einen {{jsxref("Temporal.PlainDateTime")}}. Wenn Sie den genauen Moment kennen, verwenden Sie einen {{jsxref("Temporal.Instant")}}.

Wenn eine `Temporal`-API einen _Zeitzonen-Identifikator_ akzeptiert, akzeptiert sie neben primären und nicht-primären Zeitzonen-Identifikatoren auch einen _Offset-Zeitzonen-Identifikator_, der in der gleichen Form wie der Offset vorliegt, jedoch ohne subminutengenaue Präzision. Beispielsweise sind `+05:30`, `-08`, `+0600` alles gültige Offset-Identifikatoren. Intern werden Offset-Identifikatoren in der Form `±HH:mm` gespeichert.

> [!NOTE]
> Vermeiden Sie die Verwendung von Offset-Identifikatoren, wenn es eine benannte Zeitzone gibt, die Sie stattdessen verwenden können. Auch wenn eine Region immer nur einen einzigen Offset verwendet hat, ist es besser, den benannten Identifikator zu verwenden, um gegen zukünftige politische Änderungen des Offsets geschützt zu sein.
>
> Wenn eine Region mehrere Offsets verwendet (oder verwendet hat), ist die Verwendung ihrer benannten Zeitzone noch wichtiger. Dies liegt daran, dass `Temporal.ZonedDateTime` Methoden wie `add` oder `with` verwenden kann, um neue Instanzen zu erstellen, die einen anderen Moment darstellen. Wenn diese abgeleiteten Instanzen einem Moment entsprechen, der einen anderen Offset verwendet (zum Beispiel nach einem Übergang zur Sommerzeit), sind Ihre Berechnungen in der lokalen Zeit falsch. Die Verwendung einer benannten Zeitzone stellt sicher, dass lokale Daten und Zeiten immer für den jeweiligen Moment an den richtigen Offset angepasst sind.

Der Einfachheit halber, wenn Sie einen Zeitzonen-Identifikator zu `Temporal`-APIs wie `Temporal.ZonedDateTime.prototype.withTimeZone()` und der `timeZoneId`-Option von `Temporal.ZonedDateTime.from()` angeben, können Sie ihn in einigen anderen Formen bereitstellen:

- Als eine andere `ZonedDateTime`-Instanz, deren `timeZoneId` verwendet wird.
- Als eine [RFC 9557-String](#rfc_9557_format) mit einer Zeitzonen-Anmerkung, deren Zeitzonen-Identifikator verwendet wird.
- Als eine ISO 8601 / RFC 3339-String, die einen Offset enthält, dessen Offset als Offset-Identifikator verwendet wird; oder, wenn `Z` verwendet wird, dann wird die `"UTC"` Zeitzone verwendet. Diese Verwendung wird allgemein nicht empfohlen, da, wie oben erwähnt, Offset-Identifikatoren nicht die Möglichkeit haben, andere `Temporal.ZonedDateTime`-Instanzen sicher über einen Offset-Übergang wie beim Beginn oder Ende der Sommerzeit abzuleiten. Stattdessen sollten Sie in Betracht ziehen, einfach `Temporal.Instant` zu verwenden oder die tatsächliche benannte Zeitzone des Benutzers abzurufen.

Die IANA-Zeitzonendatenbank ändert sich von Zeit zu Zeit, normalerweise um neue Zeitzonen als Reaktion auf politische Änderungen hinzuzufügen. In seltenen Fällen werden IANA-Zeitzonen-Identifikatoren jedoch umbenannt, um die aktualisierte englische Übersetzung eines Stadtnamens anzupassen oder um veraltete Namenskonventionen zu aktualisieren. Zum Beispiel hier ein paar bemerkenswerte Namensänderungen:

| Aktueller IANA-primärer Identifikator | Alter, jetzt nicht-primärer Identifikator |
| ------------------------------------- | ----------------------------------------- |
| `America/Argentina/Buenos_Aires`      | `America/Buenos_Aires`                    |
| `Asia/Kolkata`                        | `Asia/Calcutta`                           |
| `Asia/Ho_Chi_Minh`                    | `Asia/Saigon`                             |
| `Europe/Kyiv`                         | `Europe/Kiev`                             |

Historisch gesehen führten diese Umbenennungen zu Problemen für Programmierer, weil die Unicode- [CLDR-Datenbank](https://github.com/unicode-org/cldr-json/blob/main/cldr-json/cldr-bcp47/bcp47/timezone.json) (eine von Browsern verwendete Bibliothek, um Zeitzonen-Identifikatoren und -Daten bereitzustellen) IANAs Umbenennungen aus [Stabilitätsgründen](https://unicode.org/reports/tr35/#Time_Zone_Identifiers) nicht folgte. Infolgedessen meldeten einige Browser, wie Chrome und Safari, veraltete CLDR-Identifikatoren, während andere Browser wie Firefox CLDR-Standardeinstellungen überschrieben und die aktuellen primären Identifikatoren meldeten.

Mit der Einführung von Temporal ist dieses Verhalten nun standardisierter:

- [CLDR-Daten](https://github.com/unicode-org/cldr-json/blob/main/cldr-json/cldr-bcp47/bcp47/timezone.json) enthalten nun ein `"_iana"` Attribut, das den aktuellsten Identifikator angibt, wenn der ältere, stabile Identifikator umbenannt wurde. Browser können dieses neue Attribut verwenden, um aktuelle Identifikatoren für Anrufer bereitzustellen.
- Zeitzonen-Identifikatoren, die vom Programmierer bereitgestellt werden, werden niemals durch einen Alias ersetzt. Beispielsweise, wenn der Anrufer `Asia/Calcutta` oder `Asia/Kolkata` als Identifikator-Eingabe für {{jsxref("Temporal/ZonedDateTime/from", "Temporal.ZonedDateTime.from()")}} bereitstellt, wird derselbe Identifikator in der resultierenden Instanzs {{jsxref("Temporal/ZonedDateTime/timeZoneId", "timeZoneId")}} zurückgegeben. Beachten Sie, dass die Ausgabe in Übereinstimmung mit IANA normalisiert wird, sodass `ASIA/calCuTTa` als Eingabe eine {{jsxref("Temporal/ZonedDateTime/timeZoneId", "timeZoneId")}} von `Asia/Calcutta` als Ausgabe generiert.
- Wenn ein Zeitzonen-Identifikator nicht von einem Anrufer bereitgestellt wird, sondern stattdessen vom System selbst stammt (zum Beispiel bei Verwendung von {{jsxref("Temporal/Now/timeZoneId", "Temporal.Now.timeZoneId()")}}), werden in allen Browsern moderne Identifikatoren zurückgegeben. Bei Stadtnamenänderungen gibt es eine zweijährige Verzögerung, bevor diese systembereitgestellte Identifikator-APIs den neuen Namen freigeben, um anderen Komponenten (wie einem Node-Server) Zeit zu geben, ihre Kopien der IANA-Datenbank zu aktualisieren, um den neuen Namen zu erkennen.

Beachten Sie, dass die Zuordnung primärer Identifikatoren den Ländercode beibehält: Zum Beispiel zeichnet die IANA-Datenbank `Atlantic/Reykjavik` als einen Alias für `Africa/Abidjan` auf, aber da sie verschiedenen Ländern entsprechen (Island bzw. Côte d'Ivoire), werden sie als unterschiedliche primäre Identifikatoren behandelt.

Diese Standardisierung gilt auch außerhalb von `Temporal`. Zum Beispiel wird die `timeZone`-Option, die von {{jsxref("Intl/DateTimeFormat/resolvedOptions", "Intl.DateTimeFormat.prototype.resolvedOptions()")}} zurückgegeben wird, auch niemals durch einen Alias ersetzt, obwohl Browser diese Identifikatoren traditionell vor der Standardisierung durch Temporal kanonisiert haben. Andererseits wird {{jsxref("Intl/Locale/getTimeZones", "Intl.Locale.prototype.getTimeZones()")}} und {{jsxref("Intl.supportedValuesOf()")}} (`timeZone`-Option) den aktuellsten Identifikator zurückgeben, während einige Browser früher den alten, nicht primären Identifikator zurückgaben.

### RFC 9557 Format

`ZonedDateTime`-Objekte können mit dem [RFC 9557](https://datatracker.ietf.org/doc/html/rfc9557) Format, eine Erweiterung des [ISO 8601 / RFC 3339](https://datatracker.ietf.org/doc/html/rfc3339) Formats, serialisiert und geparst werden. Der String hat die folgende Form (Leerzeichen sind nur zur Lesbarkeit und sollten im tatsächlichen String nicht vorhanden sein):

```plain
YYYY-MM-DD T HH:mm:ss.sssssssss Z/±HH:mm [time_zone_id] [u-ca=calendar_id]
```

- `YYYY`
  - : Entweder eine vierstellige Zahl oder eine sechsstellige Zahl mit einem `+` oder `-` Vorzeichen.
- `MM`
  - : Eine zweistellige Zahl von `01` bis `12`.
- `DD`
  - : Eine zweistellige Zahl von `01` bis `31`. Die Komponenten `YYYY`, `MM` und `DD` können durch `-` oder nichts getrennt werden.
- `T` {{optional_inline}}
  - : Der Datum-Uhrzeit-Trenner, der `T`, `t` oder ein Leerzeichen sein kann. Er ist vorhanden, wenn und nur, wenn `HH` vorhanden ist.
- `HH` {{optional_inline}}
  - : Eine zweistellige Zahl von `00` bis `23`. Standardmäßig `00`.
- `mm` {{optional_inline}}
  - : Eine zweistellige Zahl von `00` bis `59`. Standardmäßig `00`.
- `ss.sssssssss` {{optional_inline}}
  - : Eine zweistellige Zahl von `00` bis `59`. Kann optional von einem `.` oder `,` gefolgt werden und einer bis neun Ziffern. Standardmäßig `00`. Die Komponenten `HH`, `mm` und `ss` können durch `:` oder nichts getrennt werden. Sie können entweder nur `ss` oder sowohl `ss` als auch `mm` weglassen, sodass die Zeit eine der drei Formen haben kann: `HH`, `HH:mm` oder `HH:mm:ss.sssssssss`.
- `Z/±HH:mm` {{optional_inline}}
  - : Entweder der UTC-Bezeichner `Z` oder `z`, oder ein Offset von UTC in der Form `+` oder `-` gefolgt vom gleichen Format wie die Zeitkomponente. Beachten Sie, dass subminutengenaue Präzision (`:ss.s.sssss`) von anderen Systemen möglicherweise nicht unterstützt wird und akzeptiert, aber nie ausgegeben wird. Wenn weggelassen, wird der Offset aus dem Zeitzonen-Identifikator abgeleitet. Wenn vorhanden, muss auch die Zeit angegeben werden. `Z` ist nicht das gleiche wie `+00:00`: Ersteres bedeutet, dass die Zeit in UTC-Form gegeben ist, unabhängig vom Zeitzonen-Identifikator, während letzteres bedeutet, dass die Zeit in lokaler Zeit gegeben ist, die zufällig UTC+0 ist, und wird gegen den Zeitzonen-Identifikator über die [`offset` Option](#offset_mehrdeutigkeit) validiert.
- `[time_zone_id]`
  - : Ersetzen Sie `time_zone_id` durch den Zeitzonen-Identifikator (benannt oder offset) wie oben beschrieben. Kann ein _kritisches Flag_ durch Voranstellen des Identifikators mit `!` haben: z. B. `[!America/New_York]`. Dieses Flag sagt anderen Systemen generell, dass es nicht ignoriert werden kann, wenn sie es nicht unterstützen. Beachten Sie, dass es für `Temporal.ZonedDateTime.from()` erforderlich ist: Wenn es weggelassen wird, wird ein `RangeError` ausgelöst. Wenn Sie ISO 8601 / RFC 3339-Strings ohne Zeitzonen-Identifikator-Annotations parsen möchten, verwenden Sie {{jsxref("Temporal/Instant/from", "Temporal.Instant.from()")}} stattdessen.
- `[u-ca=calendar_id]` {{optional_inline}}
  - : Ersetzen Sie `calendar_id` durch den zu verwendenden Kalender. Siehe [`Intl.supportedValuesOf()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/supportedValuesOf#supported_calendar_types) für eine Liste von allgemein unterstützten Kalenderarten. Standardmäßig `[u-ca=iso8601]`. Kann ein _kritisches Flag_ haben, indem der Schlüssel mit `!` vorangestellt wird: z. B. `[!u-ca=iso8601]`. Dieses Flag sagt anderen Systemen generell, dass es nicht ignoriert werden kann, wenn sie es nicht unterstützen. Der `Temporal`-Parser wird einen Fehler auslösen, wenn die Anmerkungen zwei oder mehr Kalenderanmerkungen enthalten und eine davon kritisch ist. Beachten Sie, dass `YYYY-MM-DD` immer als ISO 8601 Kalenderdatum interpretiert und dann in den angegebenen Kalender konvertiert wird.

Als Eingabe werden andere Anmerkungen im `[key=value]` Format ignoriert, und sie dürfen nicht das kritische Flag haben.

Beim Serialisieren können Sie die Anzahl der Sekundenbruchteile, ob der Offset/Zeitzonen-Identifikator/Kalender-Identifikator angezeigt wird, und ob ein kritisches Flag für die Anmerkungen hinzugefügt wird, konfigurieren.

### Mehrdeutigkeit und Lücken von lokaler Zeit zu UTC-Zeit

Angesichts einer Zeitzone ist die Umwandlung von UTC in lokale Zeit einfach: Sie erhalten zuerst den Offset mit dem Zeitzonennamen und dem Moment und addieren den Offset zum Moment. Umgekehrt ist dies nicht wahr: Die Umwandlung von lokaler Zeit in UTC-Zeit, ohne einen expliziten Offset, ist mehrdeutig, da eine lokale Zeit null, einer oder vielen UTC-Zeiten entsprechen kann. Betrachten Sie die häufigste Ursache: Sommerzeitumstellungen. Nehmen Sie New York als Beispiel. Sein Standard-Offset ist UTC-5, aber während der Sommerzeit werden alle Uhren um eine Stunde vorgestellt, sodass sich der Offset auf UTC-4 ändert. In den USA erfolgen die Umstellungen um 2:00 Uhr Ortszeit, daher betrachten Sie diese beiden Übergangstage:

| UTC-Zeit             | New York-Zeit             |
| -------------------- | ------------------------- |
| 2024-03-10T06:58:00Z | 2024-03-10T01:58:00-05:00 |
| 2024-03-10T06:59:00Z | 2024-03-10T01:59:00-05:00 |
| 2024-03-10T07:00:00Z | 2024-03-10T03:00:00-04:00 |
| ---                  | ---                       |
| 2024-11-03T05:58:00Z | 2024-11-03T01:58:00-04:00 |
| 2024-11-03T05:59:00Z | 2024-11-03T01:59:00-04:00 |
| 2024-11-03T06:00:00Z | 2024-11-03T01:00:00-05:00 |

Wie Sie sehen können, verschwand im März eine Stunde aus der Ortszeit, und im November haben wir zwei Stunden mit derselben Wanduhrzeit. Angenommen, wir haben ein `PlainDateTime` gespeichert, das sagt: "2024-03-10T02:05:00", und wir möchten es in der `America/New_York` Zeitzone interpretieren, dann gibt es keine Zeit, die dem entspricht, während ein `PlainDateTime`, das sagt: "2024-11-03T01:05:00" zwei verschiedenen Momenten entsprechen kann.

Beim Erstellen eines `ZonedDateTime` aus einer lokalen Zeit (unter Verwendung von {{jsxref("Temporal.ZonedDateTime/from", "Temporal.ZonedDateTime.from()")}}, {{jsxref("Temporal.ZonedDateTime/with", "Temporal.ZonedDateTime.prototype.with()")}}, {{jsxref("Temporal.PlainDateTime/toZonedDateTime", "Temporal.PlainDateTime.prototype.toZonedDateTime()")}}), ist das Verhalten bei Mehrdeutigkeiten und Lücken über die `disambiguation`-Option konfigurierbar:

- `earlier`
  - : Wenn es zwei mögliche Momente gibt, wählen Sie den früheren. Wenn es eine Lücke gibt, gehen Sie um die Dauer der Lücke zurück.
- `later`
  - : Wenn es zwei mögliche Momente gibt, wählen Sie den späteren. Wenn es eine Lücke gibt, gehen Sie um die Dauer der Lücke vor.
- `compatible` (Standard)
  - : Gleiches Verhalten wie {{jsxref("Date")}}: Verwenden Sie `later` für Lücken und `earlier` für Mehrdeutigkeiten.
- `reject`
  - : Löst einen `RangeError` aus, wann immer es eine Mehrdeutigkeit oder eine Lücke gibt.

Es gibt mehrere Fälle, in denen es keine Mehrdeutigkeit gibt, wenn ein `ZonedDateTime` konstruiert wird:

- Wenn die Zeit in UTC durch den `Z`-Offset angegeben ist.
- Wenn der Offset explizit angegeben und verwendet wird (siehe unten).

### Offset Mehrdeutigkeit

Wir haben bereits gezeigt, wie Mehrdeutigkeiten entstehen können, indem eine lokale Zeit in einer Zeitzone interpretiert wird, ohne einen expliziten Offset bereitzustellen. Wenn Sie jedoch einen expliziten Offset angeben, entsteht ein weiterer Konflikt: zwischen dem angegebenen Offset und dem Offset, der aus der Zeitzone und der Ortszeit berechnet wurde. Dies ist ein unvermeidliches echtes Weltproblem: Wenn Sie eine Zeit in der Zukunft speichern, mit einem erwarteten Offset, dann kann sich die Zeitzonendefinition aufgrund politischer Gründe ändern, bevor diese Zeit kommt. Beispielsweise, nehmen wir an, im Jahr 2018 haben wir eine Erinnerung mit der Zeit `2019-12-23T12:00:00-02:00[America/Sao_Paulo]` (das ist eine Sommerzeit; Brasilien liegt auf der Südhalbkugel, daher tritt es im Oktober in die Sommerzeit ein und verlässt sie im Februar). Aber bevor diese Zeit kommt, beschließt Brasilien Anfang 2019, die Sommerzeit nicht mehr zu beachten, daher wird der reale Offset `-03:00`. Soll die Erinnerung nun immer noch um 12 Uhr losgehen (beibehaltung der Ortszeit) oder soll sie um 11 Uhr losgehen (beibehaltung der exakten Zeit)?

Beim Erstellen eines `ZonedDateTime` mit {{jsxref("Temporal.ZonedDateTime/from", "Temporal.ZonedDateTime.from()")}} oder beim Aktualisieren mit der {{jsxref("Temporal.ZonedDateTime/with", "with()")}} Methode, ist das Verhalten für Offset-Mehrdeutigkeiten über die `offset`-Option konfigurierbar:

- `use`
  - : Verwenden Sie den Offset, um die exakte Zeit zu berechnen. Diese Option "verwendet" den Offset bei der Bestimmung des durch den String repräsentierten Moments, welcher dasselbe Moment sein wird, das ursprünglich berechnet wurde, als wir die Zeit gespeichert haben, selbst wenn sich der Offset zu diesem Moment geändert hat. Der Zeitzonen-Identifikator wird weiterhin verwendet, um den (möglicherweise aktualisierten) Offset abzuleiten und diesen Offset zu verwenden, um die exakte Zeit in Ortszeit umzuwandeln.
- `ignore`
  - : Verwenden Sie den Zeitzonen-Identifikator, um den Offset neu zu berechnen, und ignorieren Sie den im String angegebenen Offset. Diese Option behält dieselbe Ortszeit bei, wie sie ursprünglich berechnet wurde, als wir die Zeit gespeichert haben, kann jedoch einem anderen Moment entsprechen. Beachten Sie, dass diese Option dieselbe Mehrdeutigkeit der Ortszeitinterpretation verursachen kann, wie oben gezeigt, die mit der `disambiguation`-Option gelöst wird.
- `reject`
  - : Löst einen `RangeError` aus, wann immer es einen Konflikt zwischen dem Offset und dem Zeitzonen-Identifikator gibt. Dies ist der Standard für {{jsxref("Temporal.ZonedDateTime/from", "Temporal.ZonedDateTime.from()")}}.
- `prefer`
  - : Verwenden Sie den Offset, wenn er gültig ist, sonst berechnen Sie den Offset aus dem Zeitzonen-Identifikator. Dies ist der Standard für {{jsxref("Temporal.ZonedDateTime/with", "Temporal.ZonedDateTime.prototype.with()")}} (siehe die Methode für mehr Details). Dies ist anders als `ignore`, weil bei Mehrdeutigkeit der Ortszeit der Offset verwendet wird, um sie zu lösen, anstatt der `disambiguation`-Option.

Beachten Sie, dass der `Z`-Offset nicht gleich `+00:00` ist. Der `Z`-Offset bedeutet "die Zeit in UTC ist bekannt, aber der Offset zur Ortszeit ist unbekannt", gemäß [RFC 9557](https://www.rfc-editor.org/rfc/rfc9557.html#name-update-to-rfc-3339). Wenn der Zeitstring den `Z`-Offset verwendet, wird die `offset`-Option ignoriert, und der Offset wird aus dem Zeitzonen-Identifikator abgeleitet. Andererseits wird der `+00:00`-Offset als ein Ortszeit-Offset interpretiert, der zufällig mit UTC übereinstimmt und gegen den Zeitzonen-ID validiert wird.

> [!NOTE]
> Obwohl {{jsxref("Temporal/Instant/from", "Temporal.Instant.from()")}} auch einen [RFC 9557](#rfc_9557_format)-String in derselben Form akzeptiert, gibt es keine Mehrdeutigkeiten, da er immer den Zeitzonen-Identifikator ignoriert und nur den Offset liest.

## Konstruktor

- {{jsxref("Temporal/ZonedDateTime/ZonedDateTime", "Temporal.ZonedDateTime()")}} {{experimental_inline}}
  - : Erstellt ein neues `Temporal.ZonedDateTime`-Objekt durch direktes Bereitstellen der zugrunde liegenden Daten.

## Statische Methoden

- {{jsxref("Temporal/ZonedDateTime/compare", "Temporal.ZonedDateTime.compare()")}} {{experimental_inline}}
  - : Gibt eine Zahl zurück (-1, 0 oder 1), die angibt, ob die erste Datum-Zeit vor, gleich oder nach der zweiten Datum-Zeit liegt. Äquivalent zum Vergleich der {{jsxref("Temporal/ZonedDateTime/epochNanoseconds", "epochNanoseconds")}} der beiden Datum-Zeiten.
- {{jsxref("Temporal/ZonedDateTime/from", "Temporal.ZonedDateTime.from()")}} {{experimental_inline}}
  - : Erstellt ein neues `Temporal.ZonedDateTime`-Objekt aus einem anderen `Temporal.ZonedDateTime`-Objekt, einem Objekt mit Datum, Uhrzeit und Zeitzoneneigenschaften oder einem [RFC 9557](#rfc_9557_format)-String.

## Instanzeigenschaften

Diese Eigenschaften werden auf `Temporal.ZonedDateTime.prototype` definiert und von allen `Temporal.ZonedDateTime`-Instanzen geteilt.

- {{jsxref("Temporal/ZonedDateTime/calendarId", "Temporal.ZonedDateTime.prototype.calendarId")}} {{experimental_inline}}
  - : Gibt einen String zurück, der den [Kalender](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars) repräsentiert, der zum Interpretieren des internen ISO 8601-Datums verwendet wird.
- {{jsxref("Object/constructor", "Temporal.ZonedDateTime.prototype.constructor")}}
  - : Die Konstruktionsfunktion, die das Instanzobjekt erstellt hat. Für `Temporal.ZonedDateTime`-Instanzen ist der Anfangswert der {{jsxref("Temporal/ZonedDateTime/ZonedDateTime", "Temporal.ZonedDateTime()")}}-Konstruktor.
- {{jsxref("Temporal/ZonedDateTime/day", "Temporal.ZonedDateTime.prototype.day")}} {{experimental_inline}}
  - : Gibt eine positive ganze Zahl zurück, die den 1-basierten Tagesindex im Monat dieses Datums darstellt, was die gleiche Tagesnummer ist, die Sie auf einem Kalender sehen würden. [Kalender](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars)-abhängig. Beginnt normalerweise bei 1 und ist kontinuierlich, aber nicht immer.
- {{jsxref("Temporal/ZonedDateTime/dayOfWeek", "Temporal.ZonedDateTime.prototype.dayOfWeek")}} {{experimental_inline}}
  - : Gibt eine positive ganze Zahl zurück, die den 1-basierten Tagesindex in der Woche dieses Datums darstellt. Tage in einer Woche sind fortlaufend von `1` bis {{jsxref("Temporal/ZonedDateTime/daysInWeek", "daysInWeek")}} nummeriert, wobei jede Zahl ihrem Namen entspricht. [Kalender](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars)-abhängig. 1 repräsentiert normalerweise Montag im Kalender, auch wenn Lokalisierungen, die den Kalender verwenden, vielleicht einen anderen Tag als den ersten Tag der Woche betrachten (siehe {{jsxref("Intl/Locale/getWeekInfo", "Intl.Locale.prototype.getWeekInfo()")}}).
- {{jsxref("Temporal/ZonedDateTime/dayOfYear", "Temporal.ZonedDateTime.prototype.dayOfYear")}} {{experimental_inline}}
  - : Gibt eine positive ganze Zahl zurück, die den 1-basierten Tagesindex im Jahr dieses Datums darstellt. Der erste Tag dieses Jahres ist `1`, und der letzte Tag ist der {{jsxref("Temporal/ZonedDateTime/daysInYear", "daysInYear")}}. [Kalender](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars)-abhängig.
- {{jsxref("Temporal/ZonedDateTime/daysInMonth", "Temporal.ZonedDateTime.prototype.daysInMonth")}} {{experimental_inline}}
  - : Gibt eine positive ganze Zahl zurück, die die Anzahl der Tage im Monat dieses Datums darstellt. [Kalender](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars)-abhängig.
- {{jsxref("Temporal/ZonedDateTime/daysInWeek", "Temporal.ZonedDateTime.prototype.daysInWeek")}} {{experimental_inline}}
  - : Gibt eine positive ganze Zahl zurück, die die Anzahl der Tage in der Woche dieses Datums darstellt. [Kalender](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars)-abhängig. Für den ISO 8601 Kalender sind dies immer 7, aber in anderen Kalendersystemen kann dies von Woche zu Woche unterschiedlich sein.
- {{jsxref("Temporal/ZonedDateTime/daysInYear", "Temporal.ZonedDateTime.prototype.daysInYear")}} {{experimental_inline}}
  - : Gibt eine positive ganze Zahl zurück, die die Anzahl der Tage im Jahr dieses Datums darstellt. [Kalender](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars)-abhängig. Für den ISO 8601 Kalender sind dies 365, oder 366 in einem Schaltjahr.
- {{jsxref("Temporal/ZonedDateTime/epochMilliseconds", "Temporal.ZonedDateTime.prototype.epochMilliseconds")}} {{experimental_inline}}
  - : Gibt eine ganze Zahl zurück, die die Zahl der Millisekunden darstellt, die seit dem Unix-Epoch (Mitternacht zu Beginn des 1. Januar 1970, UTC) bis zu diesem Moment vergangen sind. Entspricht dem Teilen von `epochNanoseconds` durch `1e6` und dem Abrunden des Ergebnisses.
- {{jsxref("Temporal/ZonedDateTime/epochNanoseconds", "Temporal.ZonedDateTime.prototype.epochNanoseconds")}} {{experimental_inline}}
  - : Gibt einen {{jsxref("BigInt")}} zurück, der die Zahl der Nanosekunden darstellt, die seit dem Unix-Epoch (Mitternacht zu Beginn des 1. Januar 1970, UTC) bis zu diesem Moment vergangen sind.
- {{jsxref("Temporal/ZonedDateTime/era", "Temporal.ZonedDateTime.prototype.era")}} {{experimental_inline}}
  - : Gibt ein kalenderspezifisches Kleinbuchstaben-String zurück, der die Ära dieses Datums darstellt, oder `undefined`, wenn der Kalender keine Ären verwendet (z. B. ISO 8601). `era` und `eraYear` zusammen identifizieren ein Jahr in einem Kalender eindeutig, auf die gleiche Weise wie `year`. [Kalender](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars)-abhängig. Für Gregorianisch ist es entweder `"gregory"` oder `"gregory-inverse"`.
- {{jsxref("Temporal/ZonedDateTime/eraYear", "Temporal.ZonedDateTime.prototype.eraYear")}} {{experimental_inline}}
  - : Gibt eine nicht-negative ganze Zahl zurück, die das Jahr dieses Datums innerhalb der Ära darstellt, oder `undefined`, wenn der Kalender keine Ären verwendet (z. B. ISO 8601). Der Jahresindex beginnt normalerweise bei 1 (häufiger) oder 0, und Jahre in einer Ära können mit der Zeit abnehmen (z. B. Gregorianisches vor Christus). `era` und `eraYear` zusammen identifizieren ein Jahr in einem Kalender eindeutig, auf die gleiche Weise wie `year`. [Kalender](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars)-abhängig.
- {{jsxref("Temporal/ZonedDateTime/hour", "Temporal.ZonedDateTime.prototype.hour")}} {{experimental_inline}}
  - : Gibt eine ganze Zahl von 0 bis 23 zurück, die die Stundenkomponente dieser Zeit darstellt.
- {{jsxref("Temporal/ZonedDateTime/hoursInDay", "Temporal.ZonedDateTime.prototype.hoursInDay")}} {{experimental_inline}}
  - : Gibt eine positive ganze Zahl zurück, die die Anzahl der Stunden im Tag dieses Datums in der Zeitzone darstellt. Sie kann im Falle von Offset-Änderungen wie Sommerzeit mehr oder weniger als 24 sein.
- {{jsxref("Temporal/ZonedDateTime/inLeapYear", "Temporal.ZonedDateTime.prototype.inLeapYear")}} {{experimental_inline}}
  - : Gibt einen booleschen Wert zurück, der anzeigt, ob dieses Datum in einem Schaltjahr liegt. Ein Schaltjahr ist ein Jahr, das mehr Tage (aufgrund eines Schalttags oder Schaltmonats) als ein normales Jahr hat. [Kalender](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars)-abhängig.
- {{jsxref("Temporal/ZonedDateTime/microsecond", "Temporal.ZonedDateTime.prototype.microsecond")}} {{experimental_inline}}
  - : Gibt eine ganze Zahl von 0 bis 999 zurück, die die Mikrosekunde (10<sup>-6</sup> Sekunde) Komponente dieser Zeit darstellt.
- {{jsxref("Temporal/ZonedDateTime/millisecond", "Temporal.ZonedDateTime.prototype.millisecond")}} {{experimental_inline}}
  - : Gibt eine ganze Zahl von 0 bis 999 zurück, die die Millisekunde (10<sup>-3</sup> Sekunde) Komponente dieser Zeit darstellt.
- {{jsxref("Temporal/ZonedDateTime/minute", "Temporal.ZonedDateTime.prototype.minute")}} {{experimental_inline}}
  - : Gibt eine ganze Zahl von 0 bis 59 zurück, die die Minutekomponente dieser Zeit darstellt.
- {{jsxref("Temporal/ZonedDateTime/month", "Temporal.ZonedDateTime.prototype.month")}} {{experimental_inline}}
  - : Gibt eine positive ganze Zahl zurück, die den 1-basierten Monatsindex im Jahr dieses Datums darstellt. Der erste Monat dieses Jahres ist `1`, und der letzte Monat ist der {{jsxref("Temporal/ZonedDateTime/monthsInYear", "monthsInYear")}}. [Kalender](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars)-abhängig. Beachten Sie, dass anders als {{jsxref("Date.prototype.getMonth()")}}, der Index 1-basiert ist. Wenn der Kalender Schaltmonate hat, kann der Monat mit dem gleichen {{jsxref("Temporal/ZonedDateTime/monthCode", "monthCode")}} unterschiedliche `month`-Indizes für verschiedene Jahre haben.
- {{jsxref("Temporal/ZonedDateTime/monthCode", "Temporal.ZonedDateTime.prototype.monthCode")}} {{experimental_inline}}
  - : Gibt einen kalenderspezifischen String zurück, der den Monat dieses Datums darstellt. [Kalender](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars)-abhängig. Normalerweise ist es `M` plus eine zweistellige Monatszahl. Für Schaltmonate ist es der Code des Vormonats gefolgt von `L`. Wenn der Schaltmonat der erste Monat des Jahres ist, ist der Code `M00L`.
- {{jsxref("Temporal/ZonedDateTime/monthsInYear", "Temporal.ZonedDateTime.prototype.monthsInYear")}} {{experimental_inline}}
  - : Gibt eine positive ganze Zahl zurück, die die Anzahl der Monate im Jahr dieses Datums darstellt. [Kalender](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars)-abhängig. Für den ISO 8601 Kalender sind dies immer 12, aber in anderen Kalendersystemen kann dies variieren.
- {{jsxref("Temporal/ZonedDateTime/nanosecond", "Temporal.ZonedDateTime.prototype.nanosecond")}} {{experimental_inline}}
  - : Gibt eine ganze Zahl von 0 bis 999 zurück, die die Nanosekunde (10<sup>-9</sup> Sekunde) Komponente dieser Zeit darstellt.
- {{jsxref("Temporal/ZonedDateTime/offset", "Temporal.ZonedDateTime.prototype.offset")}} {{experimental_inline}}
  - : Gibt einen String zurück, der den [Offset](#zeitzonen_und_offsets) darstellt, der verwendet wurde, um den internen Moment zu interpretieren, in der Form `±HH:mm` (oder `±HH:mm:ss.sssssssss` mit so viel subminutengenauer Präzision wie nötig).
- {{jsxref("Temporal/ZonedDateTime/offsetNanoseconds", "Temporal.ZonedDateTime.prototype.offsetNanoseconds")}} {{experimental_inline}}
  - : Gibt eine ganze Zahl zurück, die den [Offset](#zeitzonen_und_offsets) darstellt, der verwendet wurde, um den internen Moment zu interpretieren, als eine Zahl von Nanosekunden (positiv oder negativ).
- {{jsxref("Temporal/ZonedDateTime/second", "Temporal.ZonedDateTime.prototype.second")}} {{experimental_inline}}
  - : Gibt eine ganze Zahl von 0 bis 59 zurück, die die Sekundenkomponente dieser Zeit darstellt.
- {{jsxref("Temporal/ZonedDateTime/timeZoneId", "Temporal.ZonedDateTime.prototype.timeZoneId")}} {{experimental_inline}}
  - : Gibt einen String zurück, der den [Zeitzonen-Identifikator](#zeitzonen_und_offsets) darstellt, der verwendet wurde, um den internen Moment zu interpretieren. Es verwendet den gleichen String, der bei der Konstruktion des `Temporal.ZonedDateTime`-Objekts verwendet wurde, entweder ein IANA-Zeitzonename oder ein fester Offset.
- {{jsxref("Temporal/ZonedDateTime/weekOfYear", "Temporal.ZonedDateTime.prototype.weekOfYear")}} {{experimental_inline}}
  - : Gibt eine positive ganze Zahl zurück, die den 1-basierten Wochen-Index im {{jsxref("Temporal/ZonedDateTime/yearOfWeek", "yearOfWeek")}} dieses Datums darstellt, oder `undefined`, wenn der Kalender kein gut definiertes Wochensystem hat. Die erste Woche des Jahres ist `1`. [Kalender](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars)-abhängig. Beachten Sie, dass beim ISO 8601 Kalender die ersten und letzten Tage des Jahres der letzten Woche des Vorjahres oder der ersten Woche des nächsten Jahres zugeordnet sein können.
- {{jsxref("Temporal/ZonedDateTime/year", "Temporal.ZonedDateTime.prototype.year")}} {{experimental_inline}}
  - : Gibt eine ganze Zahl zurück, die die Anzahl der Jahre dieses Datums relativ zum Beginn eines kalenderspezifischen Epochenjahres darstellt. [Kalender](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars)-abhängig. Normalerweise ist Jahr 1 entweder das erste Jahr der neuesten Ära oder das ISO 8601 Jahr `0001`. Wenn die Epoche in der Mitte des Jahres liegt, wird dieses Jahr denselben Wert vor und nach dem Startdatum der Ära haben.
- {{jsxref("Temporal/ZonedDateTime/yearOfWeek", "Temporal.ZonedDateTime.prototype.yearOfWeek")}} {{experimental_inline}}
  - : Gibt eine ganze Zahl zurück, die das Jahr darstellt, das mit der {{jsxref("Temporal/ZonedDateTime/weekOfYear", "weekOfYear")}} dieses Datums gepaart werden soll, oder `undefined`, wenn der Kalender kein gut definiertes Wochensystem hat. [Kalender](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars)-abhängig. Normalerweise ist dies das Jahr des Datums, aber für ISO 8601 können die ersten und letzten Tage des Jahres der letzten Woche des Vorjahres oder der ersten Woche des nächsten Jahres zugeordnet sein, wodurch sich das `yearOfWeek` um 1 unterscheidet.
- `Temporal.ZonedDateTime.prototype[Symbol.toStringTag]`
  - : Der Anfangswert der [`[Symbol.toStringTag]`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag) Eigenschaft ist der String `"Temporal.ZonedDateTime"`. Diese Eigenschaft wird in {{jsxref("Object.prototype.toString()")}} verwendet.

## Instanzmethoden

- {{jsxref("Temporal/ZonedDateTime/add", "Temporal.ZonedDateTime.prototype.add()")}} {{experimental_inline}}
  - : Gibt ein neues `Temporal.ZonedDateTime`-Objekt zurück, das diese Datum-Zeit darstellt, verschoben um eine gegebene Dauer (in einer Form, die von {{jsxref("Temporal/Duration/from", "Temporal.Duration.from()")}} umgewandelt werden kann).
- {{jsxref("Temporal/ZonedDateTime/equals", "Temporal.ZonedDateTime.prototype.equals()")}} {{experimental_inline}}
  - : Gibt `true` zurück, wenn diese Datum-Zeit äquivalent in Wert zu einer anderen Datum-Zeit ist (in einer Form, die von {{jsxref("Temporal/ZonedDateTime/from", "Temporal.ZonedDateTime.from()")}} umgewandelt werden kann), und `false` andernfalls. Sie werden sowohl durch ihre Momentwerte, Zeitzonen und ihre Kalender verglichen, sodass zwei Datum-Zeiten aus verschiedenen Kalendern oder Zeitzonen möglicherweise durch {{jsxref("Temporal.ZonedDateTime/compare", "Temporal.ZonedDateTime.compare()")}} als gleich betrachtet werden, aber nicht durch `equals()`.
- {{jsxref("Temporal/ZonedDateTime/getTimeZoneTransition", "Temporal.ZonedDateTime.prototype.getTimeZoneTransition()")}} {{experimental_inline}}
  - : Gibt ein `Temporal.ZonedDateTime`-Objekt zurück, das den ersten Moment nach oder vor diesem Moment darstellt, an dem sich der UTC-Offset der Zeitzone ändert, oder `null`, wenn es keinen solchen Übergang gibt. Dies ist nützlich, um die Offset-Regeln einer Zeitzone herauszufinden, wie z. B. ihr Sommerzeitmuster.
- {{jsxref("Temporal/ZonedDateTime/round", "Temporal.ZonedDateTime.prototype.round()")}} {{experimental_inline}}
  - : Gibt ein neues `Temporal.ZonedDateTime`-Objekt zurück, das diese Datum-Zeit auf die gegebene Einheit gerundet darstellt.
- {{jsxref("Temporal/ZonedDateTime/since", "Temporal.ZonedDateTime.prototype.since()")}} {{experimental_inline}}
  - : Gibt ein neues {{jsxref("Temporal.Duration")}}-Objekt zurück, das die Dauer von einer anderen Datum-Zeit (in einer Form, die von {{jsxref("Temporal/ZonedDateTime/from", "Temporal.ZonedDateTime.from()")}} umgewandelt werden kann) zu dieser Datum-Zeit darstellt. Die Dauer ist positiv, wenn die andere Datum-Zeit vor dieser Datum-Zeit ist, und negativ, wenn danach.
- {{jsxref("Temporal/ZonedDateTime/startOfDay", "Temporal.ZonedDateTime.prototype.startOfDay()")}} {{experimental_inline}}
  - : Gibt ein `Temporal.ZonedDateTime`-Objekt zurück, das den ersten Moment dieses Datums in der Zeitzone darstellt. Es hat normalerweise eine Zeit von `00:00:00`, kann aber unterschiedlich sein, wenn die Mitternacht aufgrund von Offset-Änderungen nicht existiert, in welchem Fall die erste existierende Zeit zurückgegeben wird.
- {{jsxref("Temporal/ZonedDateTime/subtract", "Temporal.ZonedDateTime.prototype.subtract()")}} {{experimental_inline}}
  - : Gibt ein neues `Temporal.ZonedDateTime`-Objekt zurück, das diese Datum-Zeit darstellt, verschoben um eine gegebene Dauer (in einer Form, die von {{jsxref("Temporal/Duration/from", "Temporal.Duration.from()")}} umgewandelt werden kann).
- {{jsxref("Temporal/ZonedDateTime/toInstant", "Temporal.ZonedDateTime.prototype.toInstant()")}} {{experimental_inline}}
  - : Gibt ein neues {{jsxref("Temporal.Instant")}}-Objekt zurück, das den Moment dieser Datum-Zeit darstellt.
- {{jsxref("Temporal/ZonedDateTime/toJSON", "Temporal.ZonedDateTime.prototype.toJSON()")}} {{experimental_inline}}
  - : Gibt einen String zurück, der diese Datum-Zeit im gleichen [RFC 9557 Format](#rfc_9557_format) wie bei einem Aufruf von {{jsxref("Temporal/ZonedDateTime/toString", "toString()")}} darstellt. Soll implizit durch {{jsxref("JSON.stringify()")}} aufgerufen werden.
- {{jsxref("Temporal/ZonedDateTime/toLocaleString", "Temporal.ZonedDateTime.prototype.toLocaleString()")}} {{experimental_inline}}
  - : Gibt einen String mit einer sprachensensiblen Darstellung dieser Datum-Zeit zurück.
- {{jsxref("Temporal/ZonedDateTime/toPlainDate", "Temporal.ZonedDateTime.prototype.toPlainDate()")}} {{experimental_inline}}
  - : Gibt ein neues {{jsxref("Temporal.PlainDate")}}-Objekt zurück, das den Datumsanteil dieser Datum-Zeit darstellt.
- {{jsxref("Temporal/ZonedDateTime/toPlainDateTime", "Temporal.ZonedDateTime.prototype.toPlainDateTime()")}} {{experimental_inline}}
  - : Gibt ein neues {{jsxref("Temporal.PlainDateTime")}}-Objekt zurück, das den Datums- und Uhrzeitanteil dieser Datum-Zeit darstellt. Nur die Zeitzoneninformationen werden entfernt.
- {{jsxref("Temporal/ZonedDateTime/toPlainTime", "Temporal.ZonedDateTime.prototype.toPlainTime()")}} {{experimental_inline}}
  - : Gibt ein neues {{jsxref("Temporal.PlainTime")}}-Objekt zurück, das den Zeitanteil dieser Datum-Zeit darstellt.
- {{jsxref("Temporal/ZonedDateTime/toString", "Temporal.ZonedDateTime.prototype.toString()")}} {{experimental_inline}}
  - : Gibt einen String zurück, der diese Datum-Zeit im [RFC 9557 Format](#rfc_9557_format) darstellt.
- {{jsxref("Temporal/ZonedDateTime/until", "Temporal.ZonedDateTime.prototype.until()")}} {{experimental_inline}}
  - : Gibt ein neues {{jsxref("Temporal.Duration")}}-Objekt zurück, das die Dauer von dieser Datum-Zeit zu einer anderen Datum-Zeit (in einer Form, die von {{jsxref("Temporal/ZonedDateTime/from", "Temporal.ZonedDateTime.from()")}} umgewandelt werden kann) darstellt. Die Dauer ist positiv, wenn die andere Datum-Zeit nach dieser Datum-Zeit ist, und negativ, wenn davor.
- {{jsxref("Temporal/ZonedDateTime/valueOf", "Temporal.ZonedDateTime.prototype.valueOf()")}} {{experimental_inline}}
  - : Löst einen {{jsxref("TypeError")}} aus, der verhindert, dass `Temporal.ZonedDateTime`-Instanzen [implizit in primitive Datentypen umgewandelt](/de/docs/Web/JavaScript/Guide/Data_structures#primitive_coercion) werden, wenn sie in arithmetischen oder Vergleichsoperationen verwendet werden.
- {{jsxref("Temporal/ZonedDateTime/with", "Temporal.ZonedDateTime.prototype.with()")}} {{experimental_inline}}
  - : Gibt ein neues `Temporal.ZonedDateTime`-Objekt zurück, das diese Datum-Zeit mit einigen durch neue Werte ersetzten Feldern darstellt.
- {{jsxref("Temporal/ZonedDateTime/withCalendar", "Temporal.ZonedDateTime.prototype.withCalendar()")}} {{experimental_inline}}
  - : Gibt ein neues `Temporal.ZonedDateTime`-Objekt zurück, das diese Datum-Zeit im neuen Kalendersystem interpretiert darstellt.
- {{jsxref("Temporal/ZonedDateTime/withPlainTime", "Temporal.ZonedDateTime.prototype.withPlainTime()")}} {{experimental_inline}}
  - : Gibt ein neues `Temporal.ZonedDateTime`-Objekt zurück, das diese Datum-Zeit mit dem vollständig durch die neue Zeit (in einer Form, die von {{jsxref("Temporal/PlainTime/from", "Temporal.PlainTime.from()")}} umgewandelt werden kann) ersetzten Zeitanteil darstellt.
- {{jsxref("Temporal/ZonedDateTime/withTimeZone", "Temporal.ZonedDateTime.prototype.withTimeZone()")}} {{experimental_inline}}
  - : Gibt ein neues `Temporal.ZonedDateTime`-Objekt zurück, das denselben Moment wie diese Datum-Zeit darstellt, aber in der neuen Zeitzone.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Temporal")}}
- {{jsxref("Temporal.Duration")}}
- {{jsxref("Temporal.Instant")}}
- {{jsxref("Temporal.PlainDateTime")}}
- {{jsxref("Temporal.PlainDate")}}
- {{jsxref("Temporal.PlainTime")}}
