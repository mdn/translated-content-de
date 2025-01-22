---
title: Temporal.ZonedDateTime
slug: Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime
l10n:
  sourceCommit: 537aeae8ea6f3f080941261af7229dba30f791ac
---

{{JSRef}}

Das **`Temporal.ZonedDateTime`** Objekt stellt ein Datum und eine Uhrzeit mit einer Zeitzone dar. Es wird grundsätzlich als Kombination aus einem [instant](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/Instant), einer Zeitzone und einem Kalendersystem dargestellt.

## Beschreibung

Ein `ZonedDateTime` funktioniert als Brücke zwischen einer genauen Zeit und einer Wanduhrzeit: Es stellt gleichzeitig einen Zeitpunkt in der Geschichte dar (ähnlich wie ein {{jsxref("Temporal.Instant")}}) und eine lokale, Wanduhrzeit (ähnlich wie ein {{jsxref("Temporal.PlainDateTime")}}). Dies geschieht durch das Speichern des Zeitpunkts, der Zeitzone und des Kalendersystems. Die Zeitzone wird verwendet, um zwischen dem Zeitpunkt und der lokalen Zeit zu konvertieren, und das Kalendersystem wird verwendet, um die lokale Zeit zu interpretieren.

`ZonedDateTime` ist die einzige `Temporal`-Klasse, die zeitzonenbewusst ist. Die Hinzufügung einer Zeitzone bewirkt, dass `ZonedDateTime`-Objekte wichtige Verhaltensunterschiede zu {{jsxref("Temporal.PlainDateTime")}}-Objekten aufweisen. So können Sie nicht mehr davon ausgehen, dass "die Zeit 1 Minute später" jeden Tag gleich ist oder dass ein Tag 24 Stunden hat. Im schlimmsten Fall könnte ein ganzer Tag im lokalen Kalender fehlen. Unten bieten wir einen kurzen Überblick über Zeitzonen und Offsets und wie sie die Konvertierung zwischen UTC-Zeit und lokaler Zeit beeinflussen.

### Zeitzonen und Offsets

Alle Zeiten in JavaScript haben einen goldenen Standard: die UTC-Zeit, die kontinuierlich und gleichmäßig zunimmt, während die physische Zeit fortschreitet. Im Gegensatz dazu sind Benutzer mehr an ihrer lokalen Zeit interessiert, die sie auf ihren Kalendern und Uhren ablesen. Der Prozess der Umrechnung zwischen UTC-Zeit und lokaler Zeit beinhaltet einen Zeitzonen-Offset, der wie folgt berechnet wird:

```plain
local time = UTC time + offset
```

Zum Beispiel, wenn die UTC-Zeit 1970-01-01T00:00:00 ist und der Offset "-05:00" beträgt, dann ist die lokale Zeit:

```plain
1970-01-01T00:00:00 + -05:00 = 1969-12-31T19:00:00
```

Indem diese lokale Zeit mit dem Offset versehen wird und somit als "1969-12-31T19:00:00-05:00" ausgedrückt wird, kann sie nun eindeutig als ein Zeitpunkt in der Geschichte verstanden werden.

Um den Offset zu kennen, benötigen wir zwei Informationen: die _Zeitzone_ und den _Zeitpunkt_. Die Zeitzone ist eine Region auf der Erde, in der zu allen Zeiten derselbe Offset verwendet wird. Zwei Uhren in derselben Zeitzone zeigen immer gleichzeitig dieselbe Zeit an, aber der Offset ist nicht unbedingt konstant: Diese Zeiten können sich abrupt ändern. Dies geschieht häufig während der Umstellung auf die Sommerzeit, bei der sich der Offset um eine Stunde ändert, was zweimal im Jahr passiert. Offsets können sich auch dauerhaft aufgrund politischer Veränderungen ändern, z.B. wenn ein Land die Zeitzonen wechselt.

Die Zeitzonen werden in der [IANA Time Zone Database](https://www.iana.org/time-zones) gespeichert. Jede IANA-Zeitzone hat:

- Eine _primäre Zeitzonenkennung_, die die Zeitzone eindeutig identifiziert. Sie bezieht sich normalerweise auf ein geografisches Gebiet, das von einer Stadt verankert wird (z.B. `Europe/Paris` oder `Africa/Kampala`), kann aber auch Zeitzonen mit einem festen Offset wie `UTC` (ein konsistenter `+00:00` Offset) oder `Etc/GMT+5` kennzeichnen (was aus historischen Gründen ein negativer Offset `-05:00` ist). Aus historischen Gründen ist der primäre Name der UTC-Zeitzone `UTC`, obwohl er bei IANA `Etc/UTC` ist.
- Eine _Zeitzonendefinition_ in Form einer Tabelle, die UTC-Datum-/Zeiträume (einschließlich zukünftiger Zeiträume) auf spezifische Offsets abbildet.
- Null oder mehr _nicht-primäre Zeitzonenkennungen_, die Aliase zur primären Zeitzonenkennung sind. Diese sind in der Regel historische Namen, die nicht mehr verwendet werden, aber aus Kompatibilitätsgründen beibehalten werden. Siehe unten für weitere Informationen.

Als Eingabe werden benannte Identifikatoren fallunempfindlich abgeglichen. Intern werden sie in ihrer bevorzugten Schreibweise gespeichert, und nicht-primäre Identifikatoren werden _nicht_ in ihren primären Identifier konvertiert.

> [!NOTE]
> Wenn Sie den Zeitzonennamen festlegen, möchten Sie ihn selten auf `"UTC"` setzen. `ZonedDateTime` soll Benutzern angezeigt werden, aber kein Mensch lebt in der "UTC"-Zeitzone. Wenn Sie die Zeitzone zum Zeitpunkt der Konstruktion nicht wissen, aber die Wanduhrzeit kennen, verwenden Sie eine {{jsxref("Temporal.PlainDateTime")}}. Wenn Sie den genauen Zeitpunkt kennen, verwenden Sie eine {{jsxref("Temporal.Instant")}}.

Wenn eine `Temporal`-API einen _Zeitzonenidentifier_ akzeptiert, neben primären Zeitzonenkennungen und nicht-primären Zeitzonenkennungen, akzeptiert sie auch einen _Offset-Zeitzonenidentifier_, der in derselben Form wie der Offset ist, außer dass keine subminütige Präzision erlaubt ist. Zum Beispiel sind `+05:30`, `-08`, `+0600` alle gültige Offset-Identifikatoren. Intern werden Offset-Identifikatoren in der Form `±HH:mm` gespeichert.

> [!NOTE]
> Vermeiden Sie die Verwendung von Offset-Identifikatoren, wenn es einen benannten Zeitzonen-Identifikator gibt, den Sie stattdessen verwenden können. Selbst wenn eine Region immer nur einen einzelnen Offset verwendet hat, ist es besser, den benannten Identifier zu verwenden, um zukünftige politische Änderungen des Offsets zu vermeiden.
>
> Wenn eine Region mehrere Offsets verwendet (oder verwendet hat), dann ist die Verwendung ihrer benannten Zeitzone noch wichtiger. Dies liegt daran, dass `Temporal.ZonedDateTime` Methoden wie `add` oder `with` verwenden kann, um neue Instanzen zu einem anderen Zeitpunkt zu erstellen. Wenn diese abgeleiteten Instanzen einem Zeitpunkt entsprechen, der einen anderen Offset verwendet (zum Beispiel nach einer Zeitumstellung), dann werden Ihre Berechnungen eine falsche lokale Zeit haben. Die Verwendung einer benannten Zeitzone stellt sicher, dass lokale Daten und Zeiten immer für den richtigen Offset zu diesem Zeitpunkt angepasst werden.

Zur Bequemlichkeit, wenn Sie zu `Temporal`-APIs wie `Temporal.ZonedDateTime.prototype.withTimeZone()` und der `timeZoneId`-Option von `Temporal.ZonedDateTime.from()` einen Zeitzonen-Identifier bereitstellen, können Sie ihn in einigen anderen Formen angeben:

- Als eine andere `ZonedDateTime`-Instanz, deren `timeZoneId` verwendet wird.
- Als eine [RFC 9557-Zeichenkette](#rfc_9557-format) mit einer Zeitzonenanmerkung, deren Zeitzonen-Identifikator verwendet wird.
- Als eine ISO 8601 / RFC 3339-Zeichenkette, die einen Offset enthält, dessen Offset als Offset-Identifikator verwendet wird; oder, wenn `Z` verwendet wird, wird die `"UTC"` Zeitzone verwendet. Diese Verwendung wird allgemein nicht empfohlen, da, wie oben diskutiert, Offset-Identifikatoren die Fähigkeit fehlt, andere `Temporal.ZonedDateTime`-Instanzen sicher über einen Offset-Übergang wie bei Sommerzeitbeginn oder -ende abzuleiten. Ziehen Sie stattdessen in Betracht, einfach `Temporal.Instant` zu verwenden oder die tatsächliche benannte Zeitzone des Benutzers abzurufen.

Die IANA-Zeitzonendatenbank ändert sich von Zeit zu Zeit, in der Regel um neue Zeitzonen in Reaktion auf politische Änderungen hinzuzufügen. Jedoch werden in seltenen Fällen IANA-Zeitzonenkennungen umbenannt, um die aktualisierte englische Übersetzung eines Stadtnamens zu erfüllen oder um veraltete Namenskonventionen zu aktualisieren. Zum Beispiel sind hier einige bemerkenswerte Namensänderungen:

| Aktueller IANA-Primär-Identifier | Alten, jetzt nicht-primärer Identifier |
| -------------------------------- | -------------------------------------- |
| `America/Argentina/Buenos_Aires` | `America/Buenos_Aires`                 |
| `Asia/Kolkata`                   | `Asia/Calcutta`                        |
| `Asia/Ho_Chi_Minh`               | `Asia/Saigon`                          |
| `Europe/Kyiv`                    | `Europe/Kiev`                          |

Historisch gesehen verursachten diese Umbenennungen Probleme für Programmierer, weil die Unicode [CLDR-Datenbank](https://github.com/unicode-org/cldr-json/blob/main/cldr-json/cldr-bcp47/bcp47/timezone.json) (eine Bibliothek, die von Browsern verwendet wird, um Zeitzonenbezeichner und -daten bereitzustellen) IANAs Umbenennungen aus [Stabilitätsgründen](https://unicode.org/reports/tr35/#Time_Zone_Identifiers) nicht folgte. Infolgedessen berichteten einige Browser wie Chrome und Safari veraltete Identifier von CLDR, während andere Browser wie Firefox die CLDR-Standards überschrieben und die aktuellen primären Identifier meldeten.

Mit der Einführung von Temporal ist dieses Verhalten nun stärker standardisiert:

- [CLDR-Daten](https://github.com/unicode-org/cldr-json/blob/main/cldr-json/cldr-bcp47/bcp47/timezone.json) enthalten jetzt ein `"_iana"` Attribut, das auf den aktuellsten Identifier hinweist, wenn der ältere, stabile Identifier umbenannt wurde. Browser können dieses neue Attribut verwenden, um den Aufrufern aktuelle Identifikatoren bereitzustellen.
- Zeitzonen-Identifikatoren, die vom Programmierer bereitgestellt werden, werden niemals durch ein Alias ersetzt. Zum Beispiel, wenn der Anrufer `Asia/Calcutta` oder `Asia/Kolkata` als Identifier-Eingabe zu `Temporal.ZonedDateTime.from()` bereitstellt, dann wird derselbe Identifier in der resultierenden Instanz `timeZoneId` zurückgegeben. Beachten Sie, dass die Groß- und Kleinschreibung der Ausgaben normalisiert wird, um mit IANA übereinzustimmen, sodass `ASIA/calCuTTa` als Eingabe eine `timeZoneId` von `Asia/Calcutta` als Ausgabe erzeugt.
- Wenn ein Zeitzonen-Identifikator nicht von einem Anrufer bereitgestellt wird, sondern stattdessen vom System selbst stammt (zum Beispiel, wenn `Temporal.Now.timeZoneId()` verwendet wird), werden aktuelle Identifikatoren in allen Browsern zurückgegeben. Bei Stadtnamenänderungen gibt es eine zweijährige Verzögerung, bevor diese systemseitig bereitgestellten Identifier-APIs den neuen Namen preisgeben, wodurch anderen Komponenten (wie einem Node-Server) Zeit gegeben wird, ihre Kopien der IANA-Datenbank zu aktualisieren, um den neuen Namen zu erkennen.

Beachten Sie, dass die Zuordnung von primären Identifikatoren den Ländercode beibehält: zum Beispiel zeichnet die IANA-Datenbank `Atlantic/Reykjavik` als Alias für `Africa/Abidjan` auf, aber weil sie unterschiedlichen Ländern (Island und Elfenbeinküste) entsprechen, werden sie als unterschiedliche primäre Identifikatoren behandelt.

Diese Standardisierung gilt auch außerhalb von `Temporal`. Zum Beispiel wird die `timeZone`-Option, die von {{jsxref("Intl/DateTimeFormat/resolvedOptions", "Intl.DateTimeFormat.prototype.resolvedOptions()")}} zurückgegeben wird, auch nicht durch ein Alias ersetzt, obwohl Browser traditionell diese Identifier vor der Standardisierung durch Temporal kanonisiert haben. Andererseits werden {{jsxref("Intl/Locale/getTimeZones", "Intl.Locale.prototype.getTimeZones()")}} und {{jsxref("Intl.supportedValuesOf()")}} (`timeZone`-Option) die aktuellsten Identifikatoren zurückgeben, während einige Browser in der Vergangenheit den alten, nicht-primären Identifier zurückgaben.

### RFC 9557-Format

`ZonedDateTime`-Objekte können im [RFC 9557](https://datatracker.ietf.org/doc/html/rfc9557)-Format, einer Erweiterung des [ISO 8601 / RFC 3339](https://datatracker.ietf.org/doc/html/rfc3339)-Formats, serialisiert und geparst werden. Die Zeichenkette hat die folgende Form (Leerzeichen dienen nur der Lesbarkeit und sollten nicht in der tatsächlichen Zeichenkette vorhanden sein):

```plain
YYYY-MM-DD T HH:mm:ss.sssssssss Z/±HH:mm:ss.sssssssss [time_zone_id] [u-ca=calendar_id]
```

- `YYYY`
  - : Entweder eine vierstellige Zahl oder eine sechsstellige Zahl mit einem `+` oder `-` Zeichen.
- `MM`
  - : Eine zweistellige Zahl von `01` bis `12`.
- `DD`
  - : Eine zweistellige Zahl von `01` bis `31`. Die Komponenten `YYYY`, `MM` und `DD` können durch `-` oder nichts getrennt werden.
- `T` {{optional_inline}}
  - : Der Datum-Zeit-Trenner, der `T`, `t` oder ein Leerzeichen sein kann. Nur vorhanden, wenn `HH` vorhanden ist.
- `HH` {{optional_inline}}
  - : Eine zweistellige Zahl von `00` bis `23`. Standardmäßig `00`.
- `mm` {{optional_inline}}
  - : Eine zweistellige Zahl von `00` bis `59`. Standardmäßig `00`.
- `ss.sssssssss` {{optional_inline}}
  - : Eine zweistellige Zahl von `00` bis `59`. Kann optional von einem `.` oder `,` und einer bis neun Ziffern gefolgt werden. Standardmäßig `00`. Die `HH`, `mm` und `ss` Komponenten können durch `:` oder nichts getrennt werden. Sie können entweder nur `ss` oder sowohl `ss` als auch `mm` weglassen, sodass die Zeit in einer von drei Formen sein kann: `HH`, `HH:mm` oder `HH:mm:ss.sssssssss`.
- `Z/±HH:mm:ss.sssssssss` {{optional_inline}}
  - : Entweder das UTC-Zeichen `Z` oder `z`, oder ein Offset von UTC in der Form `+` oder `-`, gefolgt von demselben Format wie die Zeitkomponente. Beachten Sie, dass subminütige Präzision von anderen Systemen möglicherweise nicht unterstützt wird. Wenn weggelassen, wird der Offset vom Zeitzonen-Identifier abgeleitet. Wenn vorhanden, muss die Zeit ebenfalls bereitgestellt werden. `Z` ist nicht dasselbe wie `+00:00`: ersteres bedeutet, dass die Zeit in UTC-Form angegeben ist, unabhängig vom Zeitzonen-Identifier, während letztere bedeutet, dass die Zeit in lokaler Zeit angegeben ist, die zufällig UTC+0 ist, und anhand des Zeitzonen-Identifiers über die [`offset`-Option](#offset-mehrdeutigkeit) validiert wird.
- `[time_zone_id]`
  - : Ersetzen Sie `time_zone_id` durch den Zeitzonen-Identifier (benannt oder als Offset), wie oben beschrieben. Kann eine _kritische Flagge_ durch Voranstellen des Identifiers mit `!` haben: z.B. `[!America/New_York]`. Diese Flagge teilt anderen Systemen generell mit, dass es nicht ignoriert werden kann, wenn sie es nicht unterstützen. Beachten Sie, dass dies für `Temporal.ZonedDateTime.from()` erforderlich ist: Das Weglassen führt zu einem `RangeError`. Wenn Sie ISO 8601 / RFC 3339-Zeichenfolgen ohne Zeitzonen-Identifier-Anmerkungen parsen möchten, verwenden Sie {{jsxref("Temporal/Instant/from", "Temporal.Instant.from()")}} stattdessen.
- `[u-ca=calendar_id]` {{optional_inline}}
  - : Ersetzen Sie `calendar_id` durch den zu verwendenden Kalender. Kann eine _kritische Flagge_ durch Voranstellen des Schlüssels mit `!` haben: z.B. `[!u-ca=iso8601]`. Diese Flagge teilt anderen Systemen generell mit, dass es nicht ignoriert werden kann, wenn sie es nicht unterstützen. Der `Temporal`-Parser wird einen Fehler auslösen, wenn die Anmerkungen zwei oder mehr Kalenderanmerkungen enthalten und eine von ihnen kritisch ist. Standardmäßig `[u-ca=iso8601]`. Beachten Sie, dass das `YYYY-MM-DD` immer als ISO 8601-Kalenderdatum interpretiert und dann in den angegebenen Kalender konvertiert wird.

Als Eingabe werden andere Anmerkungen im Format `[key=value]` ignoriert, und sie dürfen nicht die kritische Flagge haben.

Beim Serialisieren können Sie die Bruchsekundenziffern, ob der Offset/Zeitzonen-ID/Kalender-ID angezeigt werden soll und ob eine kritische Flagge für die Anmerkungen hinzugefügt werden soll, konfigurieren.

### Mehrdeutigkeit und Lücken von lokaler zu UTC-Zeit

Angenommen, es gibt eine Zeitzone, ist die Umrechnung von UTC zu lokaler Zeit einfach: Sie ermitteln zuerst den Offset anhand des Zeitzonennamens und des Zeitpunkts und addieren dann den Offset zum Zeitpunkt. Das Umgekehrte gilt nicht: Die Umrechnung von lokaler zu UTC-Zeit, ohne einen expliziten Offset, ist mehrdeutig, da eine lokale Zeit null, einer oder vielen UTC-Zeiten entsprechen kann. Betrachten Sie die häufigste Ursache: Sommerzeitumstellungen. Nehmen Sie New York als Beispiel. Sein Standardoffset ist UTC-5, aber während der Sommerzeit werden alle Uhren um eine Stunde vorgestellt, sodass der Offset UTC-4 wird. In den USA erfolgen die Übergänge um 2:00 Uhr Ortszeit, betrachten Sie daher diese beiden Übergangstage:

| UTC-Zeit             | New York-Zeit             |
| -------------------- | ------------------------- |
| 2024-03-10T06:58:00Z | 2024-03-10T01:58:00-05:00 |
| 2024-03-10T06:59:00Z | 2024-03-10T01:59:00-05:00 |
| 2024-03-10T07:00:00Z | 2024-03-10T03:00:00-04:00 |
| ---                  | ---                       |
| 2024-11-03T05:58:00Z | 2024-11-03T01:58:00-04:00 |
| 2024-11-03T05:59:00Z | 2024-11-03T01:59:00-04:00 |
| 2024-11-03T06:00:00Z | 2024-11-03T01:00:00-05:00 |

Wie Sie sehen können, verschwand im März eine Stunde aus der Ortszeit und im November gibt es zwei Stunden mit derselben Wanduhrzeit. Angenommen, wir speicherten eine `PlainDateTime`, die "2024-03-10T02:05:00" sagt, und wollen sie in der `America/New_York` Zeitzone interpretieren, wird es keine Zeit geben, die ihr entspricht, während eine `PlainDateTime`, die "2024-11-03T01:05:00" sagt, zwei verschiedenen Zeitpunkten entsprechen kann.

Beim Konstruieren eines `ZonedDateTime` von einer lokalen Zeit (mit {{jsxref("Temporal/ZonedDateTime/from", "Temporal.ZonedDateTime.from()")}}, {{jsxref("Temporal/ZonedDateTime/with", "Temporal.ZonedDateTime.prototype.with()")}}, {{jsxref("Temporal/PlainDateTime/toZonedDateTime", "Temporal.PlainDateTime.prototype.toZonedDateTime()")}}), ist das Verhalten für Mehrdeutigkeiten und Lücken konfigurierbar über die `disambiguation`-Option:

- `earlier`
  - : Wenn es zwei mögliche Zeitpunkte gibt, wählen Sie den früheren. Wenn es eine Lücke gibt, gehen Sie um die Dauer der Lücke zurück.
- `later`
  - : Wenn es zwei mögliche Zeitpunkte gibt, wählen Sie den späteren. Wenn es eine Lücke gibt, gehen Sie um die Dauer der Lücke vorwärts.
- `compatible` (Standard)
  - : Gleiches Verhalten wie {{jsxref("Date")}}: verwenden Sie `later` für Lücken und `earlier` für Mehrdeutigkeiten.
- `reject`
  - : Werfen Sie einen `RangeError`, wann immer es eine Mehrdeutigkeit oder eine Lücke gibt.

Es gibt mehrere Fälle, in denen es keine Mehrdeutigkeit beim Konstruieren eines `ZonedDateTime` gibt:

- Wenn die Zeit in UTC über den `Z`-Offset spezifiziert wird.
- Wenn der Offset explizit bereitgestellt und verwendet wird (siehe unten).

### Offset-Mehrdeutigkeit

Wir haben bereits demonstriert, wie Mehrdeutigkeiten entstehen können, wenn eine lokale Zeit in einer Zeitzone interpretiert wird, ohne einen expliziten Offset anzugeben. Wenn Sie jedoch einen expliziten Offset angeben, entsteht ein weiterer Konflikt: zwischen dem Offset, wie er angegeben wurde, und dem Offset, der von der Zeitzone und der lokalen Zeit berechnet wird. Dies ist ein unvermeidliches Problem in der realen Welt: Wenn Sie eine Zeit in der Zukunft mit einem erwarteten Offset speichern, könnte sich die Zeitzonendefinition aus politischen Gründen ändern, bevor diese Zeit eintritt. Zum Beispiel: Angenommen, wir setzen 2018 eine Erinnerung für die Zeit `2019-12-23T12:00:00-02:00[America/Sao_Paulo]` (was eine Sommerzeit ist; Brasilien ist in der südlichen Hemisphäre, daher tritt es im Oktober in die DST ein und im Februar aus). Aber bevor diese Zeit eintritt, entscheidet sich Brasilien Anfang 2019, nicht mehr an Sommerzeit zu halten, sodass der tatsächliche Offset `-03:00` wird. Sollte die Erinnerung nun immer noch um Mittag ertönen (die lokale Zeit beibehalten), oder sollte sie um 11:00 Uhr ertönen (die genaue Zeit beibehalten)?

Beim Konstruieren eines `ZonedDateTime` mit {{jsxref("Temporal/ZonedDateTime/from", "Temporal.ZonedDateTime.from()")}} oder beim Aktualisieren mit der {{jsxref("Temporal/ZonedDateTime/with", "with()")}}-Methode, ist das Verhalten für Offset-Mehrdeutigkeit konfigurierbar über die `offset`-Option:

- `use`
  - : Verwenden Sie den Offset, um die genaue Zeit zu berechnen. Diese Option "verwendet" den Offset, um den repräsentierten Zeitpunkt zu bestimmen, was der gleiche Zeitpunkt ist, der ursprünglich berechnet wurde, als wir die Zeit speicherten, auch wenn sich der Offset zu diesem Zeitpunkt geändert hat. Der Zeitzonen-Identifikator wird immer noch verwendet, um den (möglicherweise aktualisierten) Offset zu ermitteln und diesen Offset zur Konvertierung der genauen Zeit in lokale Zeit zu verwenden.
- `ignore`
  - : Verwenden Sie den Zeitzonen-Identifikator, um den Offset neu zu berechnen, und ignorieren Sie den in der Zeichenkette angegebenen Offset. Diese Option behält die ursprünglich berechnete lokale Zeit bei, kann jedoch einem anderen Zeitpunkt entsprechen. Beachten Sie, dass diese Option dieselbe lokale Zeitinterpretations-Mehrdeutigkeit wie oben gezeigt verursachen kann, die mit der `disambiguation`-Option aufgelöst wird.
- `reject`
  - : Werfen Sie einen `RangeError`, wenn es einen Konflikt zwischen dem Offset und dem Zeitzonen-Identifier gibt. Dies ist der Standard für {{jsxref("Temporal/ZonedDateTime/from", "Temporal.ZonedDateTime.from()")}}.
- `prefer`
  - : Verwenden Sie den Offset, wenn er gültig ist, andernfalls berechnen Sie den Offset anhand des Zeitzonen-Identifiers. Dies ist der Standard für {{jsxref("Temporal/ZonedDateTime/with", "Temporal.ZonedDateTime.prototype.with()")}} (siehe die Methode für weitere Details). Dies unterscheidet sich von `ignore`, da im Falle einer lokalen Zeitmehrdeutigkeit der Offset zur Lösung verwendet wird, anstelle der `disambiguation`-Option.

Beachten Sie, dass der `Z`-Offset nicht `+00:00` bedeutet; es wird immer unabhängig von der Zeitzone als gültig angesehen. Die Zeit wird als eine UTC-Zeit interpretiert, und der Zeitzonen-Identifier wird dann zur Umwandlung in lokale Zeit verwendet. Mit anderen Worten erzwingt `Z` dasselbe Verhalten wie die `ignore`-Option und seine Ergebnisse können nie mehrdeutig sein.

> [!NOTE]
> Obwohl {{jsxref("Temporal/Instant/from", "Temporal.Instant.from()")}} auch eine [RFC 9557](#rfc_9557-format)-Zeichenkette in derselben Form akzeptiert, gibt es keine Mehrdeutigkeit, weil es den Zeitzonen-Identifier immer ignoriert und nur den Offset liest.

## Konstruktor

- {{jsxref("Temporal/ZonedDateTime/ZonedDateTime", "Temporal.ZonedDateTime()")}}
  - : Erstellt ein neues `Temporal.ZonedDateTime`-Objekt durch direkte Angabe der zugrunde liegenden Daten.

## Statische Methoden

- {{jsxref("Temporal/ZonedDateTime/compare", "Temporal.ZonedDateTime.compare()")}}
  - : Gibt eine Zahl (-1, 0 oder 1) zurück, die angibt, ob die erste Datum-Uhrzeit vor, gleich oder nach der zweiten Datum-Uhrzeit liegt. Äquivalent zum Vergleich der {{jsxref("Temporal/ZonedDateTime/epochNanoseconds", "epochNanoseconds")}} der beiden Datum-Uhrzeiten.
- {{jsxref("Temporal/ZonedDateTime/from", "Temporal.ZonedDateTime.from()")}}
  - : Erstellt ein neues `Temporal.ZonedDateTime`-Objekt aus einem anderen `Temporal.ZonedDateTime`-Objekt, einem Objekt mit Datum, Uhrzeit und Zeitzoneneigenschaften oder einer [RFC 9557](#rfc_9557-format)-Zeichenkette.

## Instanzeigenschaften

Diese Eigenschaften werden auf `Temporal.ZonedDateTime.prototype` definiert und von allen `Temporal.ZonedDateTime`-Instanzen geteilt.

- {{jsxref("Temporal/ZonedDateTime/calendarId", "Temporal.ZonedDateTime.prototype.calendarId")}}
  - : Gibt eine Zeichenkette zurück, die den [Kalender](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars) darstellt, der zur Interpretation des internen ISO 8601-Datums verwendet wird.
- {{jsxref("Object/constructor", "Temporal.ZonedDateTime.prototype.constructor")}}
  - : Die Konstruktorfunktion, die das Instanzobjekt erstellt hat. Für `Temporal.ZonedDateTime`-Instanzen ist der Anfangswert der {{jsxref("Temporal/ZonedDateTime/ZonedDateTime", "Temporal.ZonedDateTime()")}} Konstruktor.
- {{jsxref("Temporal/ZonedDateTime/day", "Temporal.ZonedDateTime.prototype.day")}}
  - : Gibt eine positive ganze Zahl zurück, die den 1-basierten Tag-Index im Monat dieses Datums darstellt, was der gleiche Tag-Nummer ist, die Sie auf einem Kalender sehen würden. [Kalender](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars)-abhängig. Beginnt in der Regel bei 1 und ist kontinuierlich, aber nicht immer.
- {{jsxref("Temporal/ZonedDateTime/dayOfWeek", "Temporal.ZonedDateTime.prototype.dayOfWeek")}}
  - : Gibt eine positive ganze Zahl zurück, die den 1-basierten Tag-Index in der Woche dieses Datums darstellt. Tage in einer Woche sind sequentiell von `1` bis {{jsxref("Temporal/ZonedDateTime/daysInWeek", "daysInWeek")}} nummeriert, wobei jede Zahl ihrem Namen zugeordnet ist. [Kalender](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars)-abhängig. 1 repräsentiert in der Regel Montag im Kalender, auch wenn Regionen, die den Kalender verwenden, einen anderen Tag als ersten Wochentag betrachten können (siehe {{jsxref("Intl/Locale/getWeekInfo", "Intl.Locale.prototype.getWeekInfo()")}}).
- {{jsxref("Temporal/ZonedDateTime/dayOfYear", "Temporal.ZonedDateTime.prototype.dayOfYear")}}
  - : Gibt eine positive ganze Zahl zurück, die den 1-basierten Tag-Index im Jahr dieses Datums darstellt. Der erste Tag dieses Jahres ist `1`, und der letzte Tag ist der {{jsxref("Temporal/ZonedDateTime/daysInYear", "daysInYear")}}. [Kalender](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars)-abhängig.
- {{jsxref("Temporal/ZonedDateTime/daysInMonth", "Temporal.ZonedDateTime.prototype.daysInMonth")}}
  - : Gibt eine positive ganze Zahl zurück, die die Anzahl der Tage im Monat dieses Datums darstellt. [Kalender](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars)-abhängig.
- {{jsxref("Temporal/ZonedDateTime/daysInWeek", "Temporal.ZonedDateTime.prototype.daysInWeek")}}
  - : Gibt eine positive ganze Zahl zurück, die die Anzahl der Tage in der Woche dieses Datums darstellt. [Kalender](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars)-abhängig. Für den ISO 8601-Kalender sind es immer 7, aber in anderen Kalendersystemen kann es von Woche zu Woche variieren.
- {{jsxref("Temporal/ZonedDateTime/daysInYear", "Temporal.ZonedDateTime.prototype.daysInYear")}}
  - : Gibt eine positive ganze Zahl zurück, die die Anzahl der Tage im Jahr dieses Datums darstellt. [Kalender](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars)-abhängig. Für den ISO 8601-Kalender sind es 365 oder 366 in einem Schaltjahr.
- {{jsxref("Temporal/ZonedDateTime/epochMilliseconds", "Temporal.ZonedDateTime.prototype.epochMilliseconds")}}
  - : Gibt eine Ganzzahl zurück, die die Anzahl der seit dem Unix-Epoch (Mitternacht zu Beginn des 1. Januar 1970, UTC) bis zu diesem Zeitpunkt vergangenen Millisekunden darstellt. Äquivalent zur Teilung von `epochNanoseconds` durch `1e6` und Abrundung des Ergebnisses.
- {{jsxref("Temporal/ZonedDateTime/epochNanoseconds", "Temporal.ZonedDateTime.prototype.epochNanoseconds")}}
  - : Gibt ein {{jsxref("BigInt")}} zurück, das die Anzahl der seit dem Unix-Epoch (Mitternacht zu Beginn des 1. Januar 1970, UTC) bis zu diesem Zeitpunkt vergangenen Nanosekunden darstellt.
- {{jsxref("Temporal/ZonedDateTime/era", "Temporal.ZonedDateTime.prototype.era")}}
  - : Gibt eine kalenderspezifische Kleinbuchstaben-Zeichenfolge zurück, die die Ära dieses Datums darstellt, oder `undefined`, wenn der Kalender keine Ären verwendet (z.B. ISO 8601). `era` und `eraYear` zusammen identifizieren ein Jahr in einem Kalender eindeutig, ebenso wie `year`. [Kalender](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars)-abhängig. Für Gregorianisch ist es entweder `"gregory"` oder `"gregory-inverse"`.
- {{jsxref("Temporal/ZonedDateTime/eraYear", "Temporal.ZonedDateTime.prototype.eraYear")}}
  - : Gibt eine nicht-negative ganze Zahl zurück, die das Jahr dieses Datums innerhalb der Ära darstellt, oder `undefined`, wenn der Kalender keine Ären verwendet (z.B. ISO 8601). Der Jahresindex beginnt normalerweise bei 1 (häufiger) oder 0, und Jahre in einer Ära können mit der Zeit abnehmen (z.B. Gregorianisch v. Chr.). `era` und `eraYear` zusammen identifizieren ein Jahr in einem Kalender eindeutig, ebenso wie `year`. [Kalender](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars)-abhängig.
- {{jsxref("Temporal/ZonedDateTime/hour", "Temporal.ZonedDateTime.prototype.hour")}}
  - : Gibt eine Ganzzahl von 0 bis 23 zurück, die die Stundenkomponente dieser Zeit darstellt.
- {{jsxref("Temporal/ZonedDateTime/hoursInDay", "Temporal.ZonedDateTime.prototype.hoursInDay")}}
  - : Gibt eine positive ganze Zahl zurück, die die Anzahl der Stunden im Tag dieses Datums in der Zeitzone darstellt. Es kann mehr oder weniger als 24 im Falle von Offset-Änderungen wie Sommerzeit sein.
- {{jsxref("Temporal/ZonedDateTime/inLeapYear", "Temporal.ZonedDateTime.prototype.inLeapYear")}}
  - : Gibt einen booleschen Wert zurück, der angibt, ob dieses Datum in einem Schaltjahr liegt. Ein Schaltjahr ist ein Jahr, das mehr Tage hat (aufgrund eines Schalttages oder eines Schaltmonats) als ein gewöhnliches Jahr. [Kalender](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars)-abhängig.
- {{jsxref("Temporal/ZonedDateTime/microsecond", "Temporal.ZonedDateTime.prototype.microsecond")}}
  - : Gibt eine Ganzzahl von 0 bis 999 zurück, die die Mikrosekunde (10<sup>-6</sup> Sekunden) Komponente dieser Zeit darstellt.
- {{jsxref("Temporal/ZonedDateTime/millisecond", "Temporal.ZonedDateTime.prototype.millisecond")}}
  - : Gibt eine Ganzzahl von 0 bis 999 zurück, die die Millisekunde (10<sup>-3</sup> Sekunden) Komponente dieser Zeit darstellt.
- {{jsxref("Temporal/ZonedDateTime/minute", "Temporal.ZonedDateTime.prototype.minute")}}
  - : Gibt eine Ganzzahl von 0 bis 59 zurück, die die Minutenkomponente dieser Zeit darstellt.
- {{jsxref("Temporal/ZonedDateTime/month", "Temporal.ZonedDateTime.prototype.month")}}
  - : Gibt eine positive ganze Zahl zurück, die den 1-basierten Monatsindex im Jahr dieses Datums darstellt. Der erste Monat dieses Jahres ist `1` und der letzte Monat ist der {{jsxref("Temporal/ZonedDateTime/monthsInYear", "monthsInYear")}}. [Kalender](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars)-abhängig. Beachten Sie, dass der Index im Gegensatz zu {{jsxref("Date.prototype.getMonth()")}} 1-basiert ist. Wenn der Kalender Schaltmonate hat, dann kann der Monat mit dem gleichen {{jsxref("Temporal/ZonedDateTime/monthCode", "monthCode")}} unterschiedliche `month`-Indizes für verschiedene Jahre haben.
- {{jsxref("Temporal/ZonedDateTime/monthCode", "Temporal.ZonedDateTime.prototype.monthCode")}}
  - : Gibt eine kalenderspezifische Zeichenkette zurück, die den Monat dieses Datums darstellt. [Kalender](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars)-abhängig. In der Regel ist es `M` plus einer zweistelligen Monatszahl. Für Schaltmonate ist es der vorherige Monatscode gefolgt von `L`. Wenn der Schaltmonat der erste Monat des Jahres ist, lautet der Code `M00L`.
- {{jsxref("Temporal/ZonedDateTime/monthsInYear", "Temporal.ZonedDateTime.prototype.monthsInYear")}}
  - : Gibt eine positive ganze Zahl zurück, die die Anzahl der Monate im Jahr dieses Datums darstellt. [Kalender](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars)-abhängig. Für den ISO 8601-Kalender sind es immer 12, aber in anderen Kalendersystemen kann es unterschiedlich sein.
- {{jsxref("Temporal/ZonedDateTime/nanosecond", "Temporal.ZonedDateTime.prototype.nanosecond")}}
  - : Gibt eine Ganzzahl von 0 bis 999 zurück, die die Nanosekunde (10<sup>-9</sup> Sekunden) Komponente dieser Zeit darstellt.
- {{jsxref("Temporal/ZonedDateTime/offset", "Temporal.ZonedDateTime.prototype.offset")}}
  - : Gibt eine Zeichenfolge zurück, die den [Offset](#zeitzonen_und_offsets) darstellt, der verwendet wird, um den internen Zeitpunkt zu interpretieren, in der Form `±HH:mm` (oder `±HH:mm:ss.sssssssss` mit so viel subminütiger Präzision wie erforderlich).
- {{jsxref("Temporal/ZonedDateTime/offsetNanoseconds", "Temporal.ZonedDateTime.prototype.offsetNanoseconds")}}
  - : Gibt eine Ganzzahl zurück, die den [Offset](#zeitzonen_und_offsets) darstellt, der verwendet wird, um den internen Zeitpunkt zu interpretieren, als eine Anzahl von Nanosekunden (positiv oder negativ).
- {{jsxref("Temporal/ZonedDateTime/second", "Temporal.ZonedDateTime.prototype.second")}}
  - : Gibt eine Ganzzahl von 0 bis 59 zurück, die die Sekundenkomponente dieser Zeit darstellt.
- {{jsxref("Temporal/ZonedDateTime/timeZoneId", "Temporal.ZonedDateTime.prototype.timeZoneId")}}
  - : Gibt eine Zeichenfolge zurück, die den [Zeitzonen-Identifier](#zeitzonen_und_offsets) darstellt, der verwendet wird, um den internen Zeitpunkt zu interpretieren. Er verwendet die gleiche Zeichenkette, die beim Konstruieren des `Temporal.ZonedDateTime`-Objekts verwendet wurde, was entweder ein IANA-Zeitzonenname oder ein fester Offset ist.
- {{jsxref("Temporal/ZonedDateTime/weekOfYear", "Temporal.ZonedDateTime.prototype.weekOfYear")}}
  - : Gibt eine positive ganze Zahl zurück, die den 1-basierten Wochenindex in der {{jsxref("Temporal/ZonedDateTime/yearOfWeek", "yearOfWeek")}} dieses Datums darstellt, oder `undefined`, wenn der Kalender kein gut definiertes Wochensystem hat. Die erste Woche des Jahres ist `1`. [Kalender](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars)-abhängig. Beachten Sie, dass für ISO 8601 die ersten und letzten Tage des Jahres der letzten Woche des vorherigen Jahres oder der ersten Woche des nächsten Jahres zugeschrieben werden können.
- {{jsxref("Temporal/ZonedDateTime/year", "Temporal.ZonedDateTime.prototype.year")}}
  - : Gibt eine Ganzzahl zurück, die die Anzahl der Jahre dieses Datums relativ zum Beginn eines kalenderspezifischen Epoche-Jahres darstellt. [Kalender](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars)-abhängig. In der Regel ist das Jahr 1 entweder das erste Jahr der neuesten Ära oder das ISO 8601-Jahr `0001`. Wenn die Epoche in der Mitte des Jahres liegt, wird dieses Jahr denselben Wert vor und nach dem Startdatum der Ära haben.
- {{jsxref("Temporal/ZonedDateTime/yearOfWeek", "Temporal.ZonedDateTime.prototype.yearOfWeek")}}
  - : Gibt eine Ganzzahl zurück, die das Jahr darstellt, das mit der {{jsxref("Temporal/ZonedDateTime/weekOfYear", "weekOfYear")}} dieses Datums gepaart wird, oder `undefined`, wenn der Kalender kein gut definiertes Wochensystem hat. [Kalender](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars)-abhängig. In der Regel ist dies das Jahr des Datums, aber für ISO 8601 können die ersten und letzten Tage des Jahres der letzten Woche des vorherigen Jahres oder der ersten Woche des nächsten Jahres zugeordnet werden, was dazu führt, dass sich das `yearOfWeek` um 1 unterscheidet.
- `Temporal.ZonedDateTime.prototype[Symbol.toStringTag]`
  - : Der anfängliche Wert der [`[Symbol.toStringTag]`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag)-Eigenschaft ist die Zeichenfolge `"Temporal.ZonedDateTime"`. Diese Eigenschaft wird in {{jsxref("Object.prototype.toString()")}} verwendet.

## Instanzmethoden

- {{jsxref("Temporal/ZonedDateTime/add", "Temporal.ZonedDateTime.prototype.add()")}}
  - : Gibt ein neues `Temporal.ZonedDateTime`-Objekt zurück, das dieses Datum-Uhrzeit um eine angegebene Dauer (in einer Form, die von {{jsxref("Temporal/Duration/from", "Temporal.Duration.from()")}} umgewandelt werden kann) vorwärts bewegt.
- {{jsxref("Temporal/ZonedDateTime/equals", "Temporal.ZonedDateTime.prototype.equals()")}}
  - : Gibt `true` zurück, wenn diese Datum-Uhrzeit in ihrem Wert zu einer anderen Datum-Uhrzeit (in einer Form, die von {{jsxref("Temporal/ZonedDateTime/from", "Temporal.ZonedDateTime.from()")}} umgewandelt werden kann) äquivalent ist, und `false` andernfalls. Sie werden sowohl anhand ihrer Zeitpunkt-Werte, Zeitzonen als auch ihrer Kalendersysteme verglichen, sodass zwei Datum-Uhrzeiten aus verschiedenen Kalendern oder Zeitzonen von {{jsxref("Temporal/ZonedDateTime/compare", "Temporal.ZonedDateTime.compare()")}} als gleich angesehen werden können, aber nicht von `equals()`.
- {{jsxref("Temporal/ZonedDateTime/getTimeZoneTransition", "Temporal.ZonedDateTime.prototype.getTimeZoneTransition()")}}
  - : Gibt ein `Temporal.ZonedDateTime`-Objekt zurück, das den ersten Zeitpunkt nach oder vor diesem Zeitpunkt darstellt, zu dem sich der UTC-Offset der Zeitzone ändert, oder `null`, wenn es keinen solchen Übergang gibt. Dies ist nützlich, um die Offset-Regeln einer Zeitzone herauszufinden, wie z.B. ihr Sommerzeitmuster.
- {{jsxref("Temporal/ZonedDateTime/round", "Temporal.ZonedDateTime.prototype.round()")}}
  - : Gibt ein neues `Temporal.ZonedDateTime`-Objekt zurück, das diese Datum-Uhrzeit auf die gegebene Einheit gerundet darstellt.
- {{jsxref("Temporal/ZonedDateTime/since", "Temporal.ZonedDateTime.prototype.since()")}}
  - : Gibt ein neues {{jsxref("Temporal.Duration")}}-Objekt zurück, das die Dauer von einer anderen Datum-Uhrzeit (in einer Form, die von {{jsxref("Temporal/ZonedDateTime/from", "Temporal.ZonedDateTime.from()")}} umgewandelt werden kann) bis zu dieser Datum-Uhrzeit darstellt. Die Dauer ist positiv, wenn die andere Datum-Uhrzeit vor dieser Datum-Uhrzeit liegt, und negativ, wenn sie danach liegt.
- {{jsxref("Temporal/ZonedDateTime/startOfDay", "Temporal.ZonedDateTime.prototype.startOfDay()")}}
  - : Gibt ein `Temporal.ZonedDateTime`-Objekt zurück, das den ersten Zeitpunkt dieses Tages in der Zeitzone darstellt. Es hat normalerweise eine Zeit von `00:00:00`, kann jedoch unterschiedlich sein, wenn Mitternacht aufgrund von Offset-Änderungen nicht existiert, in welchem Fall die erste existierende Zeit zurückgegeben wird.
- {{jsxref("Temporal/ZonedDateTime/subtract", "Temporal.ZonedDateTime.prototype.subtract()")}}
  - : Gibt ein neues `Temporal.ZonedDateTime`-Objekt zurück, das diese Datum-Uhrzeit um eine angegebene Dauer (in einer Form, die von {{jsxref("Temporal/Duration/from", "Temporal.Duration.from()")}} umgewandelt werden kann) rückwärts bewegt.
- {{jsxref("Temporal/ZonedDateTime/toInstant", "Temporal.ZonedDateTime.prototype.toInstant()")}}
  - : Gibt ein neues {{jsxref("Temporal.Instant")}}-Objekt zurück, das den Zeitpunkt dieser Datum-Uhrzeit darstellt.
- {{jsxref("Temporal/ZonedDateTime/toJSON", "Temporal.ZonedDateTime.prototype.toJSON()")}}
  - : Gibt eine Zeichenkette zurück, die diese Datum-Uhrzeit im gleichen [RFC 9557-Format](#rfc_9557-format) darstellt, als würden Sie {{jsxref("Temporal.ZonedDateTime/toString", "toString()")}} aufrufen. Soll implizit von {{jsxref("JSON.stringify()")}} aufgerufen werden.
- {{jsxref("Temporal/ZonedDateTime/toLocaleString", "Temporal.ZonedDateTime.prototype.toLocaleString()")}}
  - : Gibt eine Zeichenkette mit einer sprachsensitiven Darstellung dieser Datum-Uhrzeit zurück.
- {{jsxref("Temporal/ZonedDateTime/toPlainDate", "Temporal.ZonedDateTime.prototype.toPlainDate()")}}
  - : Gibt ein neues {{jsxref("Temporal.PlainDate")}}-Objekt zurück, das das Datumsteil dieser Datum-Uhrzeit darstellt.
- {{jsxref("Temporal/ZonedDateTime/toPlainDateTime", "Temporal.ZonedDateTime.prototype.toPlainDateTime()")}}
  - : Gibt ein neues {{jsxref("Temporal.PlainDateTime")}}-Objekt zurück, das das Datum- und Uhrzeitteile dieser Datum-Uhrzeit darstellt. Es wird nur die Zeitzoneninformation entfernt.
- {{jsxref("Temporal/ZonedDateTime/toPlainTime", "Temporal.ZonedDateTime.prototype.toPlainTime()")}}
  - : Gibt ein neues {{jsxref("Temporal.PlainTime")}}-Objekt zurück, das den Zeitteil dieser Datum-Uhrzeit darstellt.
- {{jsxref("Temporal/ZonedDateTime/toString", "Temporal.ZonedDateTime.prototype.toString()")}}
  - : Gibt eine Zeichenkette zurück, die diese Datum-Uhrzeit im [RFC 9557-Format](#rfc_9557-format) darstellt.
- {{jsxref("Temporal/ZonedDateTime/until", "Temporal.ZonedDateTime.prototype.until()")}}
  - : Gibt ein neues {{jsxref("Temporal.Duration")}}-Objekt zurück, das die Dauer von dieser Datum-Uhrzeit bis zu einer anderen Datum-Uhrzeit (in einer Form, die von {{jsxref("Temporal/ZonedDateTime/from", "Temporal.ZonedDateTime.from()")}} umgewandelt werden kann) darstellt. Die Dauer ist positiv, wenn die andere Datum-Uhrzeit nach dieser Datum-Uhrzeit liegt, und negativ, wenn sie davor liegt.
- {{jsxref("Temporal/ZonedDateTime/valueOf", "Temporal.ZonedDateTime.prototype.valueOf()")}}
  - : Wirft einen {{jsxref("TypeError")}}, der verhindert, dass `Temporal.ZonedDateTime`-Instanzen [implizit in primitive Datentypen umgewandelt](/de/docs/Web/JavaScript/Data_structures#primitive_coercion) werden, wenn sie in arithmetischen oder Vergleichsoperationen verwendet werden.
- {{jsxref("Temporal/ZonedDateTime/with", "Temporal.ZonedDateTime.prototype.with()")}}
  - : Gibt ein neues `Temporal.ZonedDateTime`-Objekt zurück, das diese Datum-Uhrzeit mit einigen Feldern darstellt, die durch neue Werte ersetzt wurden.
- {{jsxref("Temporal/ZonedDateTime/withCalendar", "Temporal.ZonedDateTime.prototype.withCalendar()")}}
  - : Gibt ein neues `Temporal.ZonedDateTime`-Objekt zurück, das diese Datum-Uhrzeit darstellt, welche im neuen Kalendersystem interpretiert wird.
- {{jsxref("Temporal/ZonedDateTime/withPlainTime", "Temporal.ZonedDateTime.prototype.withPlainTime()")}}
  - : Gibt ein neues `Temporal.ZonedDateTime`-Objekt zurück, das diese Datum-Uhrzeit mit dem Zeitteil vollständig durch die neue Zeit ersetzt darstellt (in einer Form, die von {{jsxref("Temporal/PlainTime/from", "Temporal.PlainTime.from()")}} umgewandelt werden kann).
- {{jsxref("Temporal/ZonedDateTime/withTimeZone", "Temporal.ZonedDateTime.prototype.withTimeZone()")}}
  - : Gibt ein neues `Temporal.ZonedDateTime`-Objekt zurück, das denselben Zeitpunkt wie diese Datum-Uhrzeit, jedoch in der neuen Zeitzone darstellt.

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
