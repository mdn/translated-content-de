---
title: Temporal.ZonedDateTime
slug: Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime
l10n:
  sourceCommit: 9d7d5ef6f5ad2e126d5d29d1fecfc4133659c699
---

{{JSRef}}{{SeeCompatTable}}

Das **`Temporal.ZonedDateTime`** Objekt repräsentiert ein Datum und eine Uhrzeit mit einer Zeitzone. Es wird im Wesentlichen als eine Kombination aus einem [instant](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/Instant), einer Zeitzone und einem Kalendersystem dargestellt.

## Beschreibung

Ein `ZonedDateTime` fungiert als Brücke zwischen einer exakten Zeit und einer Uhrzeit: Es repräsentiert gleichzeitig einen bestimmten Moment in der Geschichte (wie ein {{jsxref("Temporal.Instant")}}) und eine lokale Uhrzeit (wie ein {{jsxref("Temporal.PlainDateTime")}}). Dies wird erreicht, indem der Moment, die Zeitzone und das Kalendersystem gespeichert werden. Die Zeitzone wird verwendet, um zwischen dem Moment und der lokalen Zeit zu konvertieren, und das Kalendersystem wird genutzt, um die lokale Zeit zu interpretieren.

`ZonedDateTime` ist die einzige `Temporal`-Klasse, die zeitzonenbewusst ist. Durch die Hinzufügung einer Zeitzone ergeben sich wichtige Unterschiede im Verhalten von `ZonedDateTime`-Objekten im Vergleich zu {{jsxref("Temporal.PlainDateTime")}}-Objekten. Insbesondere können Sie nicht mehr davon ausgehen, dass "die Zeit eine Minute später" jeden Tag gleich ist oder dass ein Tag 24 Stunden hat. Im schlimmsten Fall kann ein ganzer Tag im lokalen Kalender fehlen. Nachfolgend bieten wir einen kurzen Überblick über Zeitzonen und Offsets und wie sie die Umwandlung zwischen UTC-Zeit und lokaler Zeit beeinflussen.

### Zeitzonen und Offsets

Alle Zeiten in JavaScript haben einen goldenen Standard: die UTC-Zeit, die kontinuierlich und gleichmäßig im Verlauf der physischen Zeit zunimmt. Im Gegensatz dazu sind Benutzer mehr an ihrer lokalen Zeit interessiert, die sie auf ihren Kalendern und Uhren lesen. Der Prozess der Umwandlung zwischen UTC-Zeit und lokaler Zeit beinhaltet einen Zeitzonen-_Offset_, der wie folgt berechnet wird:

```plain
local time = UTC time + offset
```

Zum Beispiel, wenn die UTC-Zeit 1970-01-01T00:00:00 ist und der Offset "-05:00" beträgt, dann ist die lokale Zeit:

```plain
1970-01-01T00:00:00 + -05:00 = 1969-12-31T19:00:00
```

Indem man diese lokale Zeit mit dem Offset versieht und diesen Ausdruck als "1969-12-31T19:00:00-05:00" angibt, kann sie nun eindeutig als ein Moment in der Geschichte verstanden werden.

Um den Offset zu kennen, benötigen wir zwei Informationen, die _Zeitzone_ und den _Moment_. Die Zeitzone ist eine Region auf der Erde, in der immer der gleiche Offset verwendet wird. Zwei Uhren in derselben Zeitzone zeigen immer gleichzeitig die gleiche Zeit, aber der Offset ist nicht unbedingt konstant: Diese Uhrenzeiten können sich abrupt ändern. Dies geschieht häufig während der Sommerzeitwechsel, bei denen sich der Offset um eine Stunde ändert, was zweimal im Jahr passiert. Offsets können sich auch dauerhaft aufgrund politischer Änderungen ändern, z.B. ein Land, das die Zeitzone wechselt.

Die Zeitzonen werden in der [IANA Time Zone Database](https://www.iana.org/time-zones) gespeichert. Jede IANA-Zeitzone hat:

- Einen _primären Zeitzonenkennzeichner_, der die Zeitzone eindeutig identifiziert. Er bezieht sich normalerweise auf ein geografisches Gebiet, das von einer Stadt verankert ist (z.B. `Europe/Paris` oder `Africa/Kampala`), kann aber auch Ein-Offset-Zeitzonen wie `UTC` (ein konstanter `+00:00` Offset) oder `Etc/GMT+5` (aus historischen Gründen ein negativer Offset `-05:00`) kennzeichnen. Aus historischen Gründen ist der primäre Name für die UTC-Zeitzone `UTC`, obwohl er in IANA `Etc/UTC` ist.
- Eine _Zeitzonendefinition_ in Form einer Tabelle, die UTC-Datum/Uhrzeit-Bereiche (einschließlich zukünftiger Bereiche) auf bestimmte Offsets abbildet.
- Null oder mehr _sekundäre Zeitzonenkennzeichner_, die Aliase des primären Zeitzonenkennzeichners sind. Diese sind in der Regel historische Namen, die nicht mehr in Gebrauch sind, aber aus Kompatibilitätsgründen beibehalten werden. Siehe unten für weitere Informationen.

Als Eingabe werden benannte Kennzeichner unveränderlich verglichen. Intern werden sie in ihrer bevorzugten Schreibweise gespeichert, und sekundäre Kennzeichner werden _nicht_ in ihren primären Kennzeichner umgewandelt.

> [!NOTE]
> Wenn Sie den Zeitzonennamen festlegen, möchten Sie selten, dass dieser auf `"UTC"` gesetzt wird. `ZonedDateTime` ist dafür gedacht, Benutzern angezeigt zu werden, aber kein Mensch lebt in der "UTC"-Zeitzone. Wenn Sie die Zeitzone beim Erstellen nicht kennen, aber die lokale Uhrzeit wissen, verwenden Sie ein {{jsxref("Temporal.PlainDateTime")}}. Wenn Sie den genauen Moment kennen, verwenden Sie ein {{jsxref("Temporal.Instant")}}.

Wenn eine `Temporal`-API einen _Zeitzonenkennzeichner_ akzeptiert, akzeptiert sie zusätzlich zu den primären und sekundären Zeitzonenkennzeichnern auch einen _Offset-Zeitzonenkennzeichner_, der in derselben Form wie der Offset ist, mit Ausnahme der subminütigen Präzision, die nicht erlaubt ist. Zum Beispiel sind `+05:30`, `-08`, `+0600` alles gültige Offsets-Kennzeichen. Intern werden Offset-Kennzeichner in der Form `±HH:mm` gespeichert.

> [!NOTE]
> Vermeiden Sie die Verwendung von Offset-Kennzeichnern, wenn es eine benannte Zeitzone gibt, die Sie stattdessen verwenden können. Selbst wenn eine Region immer nur einen einzigen Offset verwendet hat, ist es besser, den benannten Kennzeichner zu verwenden, um sich gegen zukünftige politische Änderungen am Offset zu schützen.
>
> Wenn eine Region mehrere Offsets verwendet (oder verwendet hat), dann ist die Verwendung ihrer benannten Zeitzone umso wichtiger. Dies liegt daran, dass `Temporal.ZonedDateTime` Methoden wie `add` oder `with` verwenden kann, um neue Instanzen zu einem anderen Moment zu erstellen. Wenn diese abgeleiteten Instanzen einem Moment entsprechen, der einen anderen Offset verwendet (zum Beispiel nach einem Sommerzeitwechsel), dann werden Ihre Berechnungen eine falsche lokale Zeit haben. Durch die Verwendung einer benannten Zeitzone wird sichergestellt, dass lokale Daten und Uhrzeiten immer für den richtigen Offset für diesen Moment angepasst werden.

Zur Bequemlichkeit können Sie, wenn Sie einen Zeitzonenkennzeichner an `Temporal`-APIs wie `Temporal.ZonedDateTime.prototype.withTimeZone()` und die `timeZoneId` Option von `Temporal.ZonedDateTime.from()` angeben, ihn in einigen anderen Formen angeben:

- Als eine andere `ZonedDateTime`-Instanz, deren `timeZoneId` verwendet wird.
- Als ein [RFC 9557 String](#rfc_9557_format) mit einer Zeitzonenanmerkung, deren Zeitzonenkennzeichner verwendet wird.
- Als ein ISO 8601 / RFC 3339 String, der einen Offset enthält, dessen Offset als Offset-Kennzeichner verwendet wird; oder, wenn `Z` verwendet wird, wird die Zeitzone `"UTC"` verwendet. Diese Nutzung wird im Allgemeinen nicht empfohlen, da wie oben besprochen, Offset-Kennzeichner nicht die Fähigkeit haben, sicher andere `Temporal.ZonedDateTime` Instanzen über eine Offset-Übergang wie beim Beginn oder Ende der Sommerzeit abzuleiten. Stattdessen sollten Sie einfach `Temporal.Instant` verwenden oder die tatsächlich benannte Zeitzone des Benutzers abrufen.

Die IANA-Zeitzonendatenbank ändert sich von Zeit zu Zeit, normalerweise um neue Zeitzonen hinzuzufügen, die in Reaktion auf politische Änderungen erforderlich sind. In seltenen Fällen werden IANA-Zeitzonenkennzeichner umbenannt, um aktualisierte englische Übersetzungen eines Städtenamens zu berücksichtigen oder um veraltete Namenskonventionen zu aktualisieren. Zum Beispiel gab es hier einige bemerkenswerte Namensänderungen:

| Aktueller IANA-primärer Kennzeichner | Alter, jetzt sekundärer Kennzeichner |
| ------------------------------------ | ------------------------------------ |
| `America/Argentina/Buenos_Aires`     | `America/Buenos_Aires`               |
| `Asia/Kolkata`                       | `Asia/Calcutta`                      |
| `Asia/Ho_Chi_Minh`                   | `Asia/Saigon`                        |
| `Europe/Kyiv`                        | `Europe/Kiev`                        |

Historisch gesehen verursachten diese Umbenennungen Probleme für Programmierer, weil die Unicode [CLDR-Datenbank](https://github.com/unicode-org/cldr-json/blob/main/cldr-json/cldr-bcp47/bcp47/timezone.json) (eine von Browsern verwendete Bibliothek, die Zeitdaten bereitstellt) aus Stabilitätsgründen IANAs Umbenennungen nicht folgte. Infolgedessen berichteten einige Browser wie Chrome und Safari über die veralteten Kennzeichner aus CLDR, während andere Browser wie Firefox CLDRs Standardeinstellungen übersteuerten und die aktuellen primären Kennzeichner berichteten.

Mit der Einführung von Temporal ist dieses Verhalten jetzt standardisierter:

- [CLDR-Daten](https://github.com/unicode-org/cldr-json/blob/main/cldr-json/cldr-bcp47/bcp47/timezone.json) beinhalten nun ein `_iana` Attribut, das den aktuellsten Kennzeichner angibt. Browser können dieses neue Attribut verwenden, um aufrüstungsintensive Kennzeichner für Aufrufer bereitzustellen.
- Zeitzonenkennzeichner, die vom Programmierer bereitgestellt werden, werden niemals durch einen Alias ersetzt. Zum Beispiel, wenn der Aufrufer `Asia/Calcutta` oder `Asia/Kolkata` als Kennzeichner-Eingabe an {{jsxref("Temporal/ZonedDateTime/from", "Temporal.ZonedDateTime.from()")}} liefert, wird derselbe Kennzeichner in der resultierenden Instanz in {{jsxref("Temporal/ZonedDateTime/timeZoneId", "timeZoneId")}} zurückgegeben. Beachten Sie, dass die Buchstabenkonvertierung von Ausgaben normalisiert wird, um IANA zu entsprechen, sodass `ASIA/calCuTTa` als Eingabe eine {{jsxref("Temporal/ZonedDateTime/timeZoneId", "timeZoneId")}} von `Asia/Calcutta` als Ausgabe erzeugt.
- Wenn ein Zeitzonenkennzeichner nicht von einem Anrufer bereitgestellt wird, sondern stattdessen vom System selbst bezogen wird (zum Beispiel bei der Verwendung von {{jsxref("Temporal/Now/timeZoneId", "Temporal.Now.timeZoneId()")}}), werden in allen Browsern moderne Kennzeichner zurückgegeben. Bei Städteumbenennungen gibt es eine zweijährige Verzögerung, bevor diese systembereitgestellten Kennzeichner-APIs den neuen Namen aufdecken, was anderen Komponenten (wie einem Node-Server) Zeit gibt, ihre Kopien der IANA-Datenbank zu aktualisieren, um den neuen Namen zu erkennen.

Beachten Sie, dass die Zuordnung von primären Kennzeichnern den Ländercode beibehält: Zum Beispiel, zeichnet die IANA-Datenbank `Atlantic/Reykjavik` als Alias für `Africa/Abidjan` auf, aber da sie unterschiedlichen Ländern entsprechen (Island bzw. Côte d'Ivoire), werden sie als unterschiedliche primäre Kennzeichner behandelt.

Diese Standardisierung gilt auch außerhalb von `Temporal`. Zum Beispiel wird die `timeZone` Option zurückgegeben von {{jsxref("Intl/DateTimeFormat/resolvedOptions", "Intl.DateTimeFormat.prototype.resolvedOptions()")}} ebenfalls nicht durch einen Alias ersetzt, obwohl Browser traditionell diese Kennzeichner vor der Standardisierung durch Temporal kanonisiert haben. Andererseits werden {{jsxref("Intl/Locale/getTimeZones", "Intl.Locale.prototype.getTimeZones()")}} und {{jsxref("Intl.supportedValuesOf()")}} (`timeZone` Option) den aktuellsten Kennzeichner zurückgeben, während einige Browser früher den alten, nicht primären Kennzeichner zurückgaben.

### RFC 9557 Format

`ZonedDateTime`-Objekte können mithilfe des [RFC 9557](https://datatracker.ietf.org/doc/html/rfc9557)-Formats serialisiert und geparst werden, einer Erweiterung des [ISO 8601 / RFC 3339](https://datatracker.ietf.org/doc/html/rfc3339)-Formats. Der String hat folgende Form (Leerzeichen sind nur zur besseren Lesbarkeit und sollten im tatsächlichen String nicht vorhanden sein):

```plain
YYYY-MM-DD T HH:mm:ss.sssssssss Z/±HH:mm [time_zone_id] [u-ca=calendar_id]
```

- `YYYY`
  - : Entweder eine vierstellige Zahl oder eine sechsstellig Zahl mit einem `+` oder `-` Vorzeichen.
- `MM`
  - : Eine zweistellige Zahl von `01` bis `12`.
- `DD`
  - : Eine zweistellige Zahl von `01` bis `31`. Die Komponenten `YYYY`, `MM` und `DD` können durch `-` oder gar nichts getrennt werden.
- `T` {{optional_inline}}
  - : Der Datum-Uhrzeit-Trenner, der `T`, `t` oder ein Leerzeichen sein kann. Wird nur angezeigt, wenn `HH` vorhanden ist.
- `HH` {{optional_inline}}
  - : Eine zweistellige Zahl von `00` bis `23`. Standardmäßig `00`.
- `mm` {{optional_inline}}
  - : Eine zweistellige Zahl von `00` bis `59`. Standardmäßig `00`.
- `ss.sssssssss` {{optional_inline}}
  - : Eine zweistellige Zahl von `00` bis `59`. Optional gefolgt von einem `.` oder `,` und einer bis neun Ziffern. Standardmäßig `00`. Die Komponenten `HH`, `mm` und `ss` können durch `:` oder gar nichts getrennt werden. Sie können entweder nur `ss` oder sowohl `ss` als auch `mm` weglassen, sodass die Zeit in einer von drei Formen auftreten kann: `HH`, `HH:mm` oder `HH:mm:ss.sssssssss`.
- `Z/±HH:mm` {{optional_inline}}
  - : Entweder der UTC-Bezeichner `Z` oder `z`, oder ein Offset von UTC in der Form `+` oder `-`, gefolgt vom gleichen Format wie die Zeitkomponente. Beachten Sie, dass subminütige Präzision (`:ss.sssssssss`) von anderen Systemen möglicherweise nicht unterstützt wird und akzeptiert, aber niemals ausgegeben wird. Wenn weggelassen, wird der Offset aus dem Zeitzonenkennzeichner abgeleitet. Wenn angegeben, muss auch die Zeit bereitgestellt werden. `Z` ist nicht dasselbe wie `+00:00`: Ersteres bedeutet, dass die Zeit in UTC-Form gegeben ist, unabhängig vom Zeitzonenkennzeichner, während Letzteres bedeutet, dass die Zeit in lokaler Zeit angegeben ist, die zufällig UTC+0 ist, und gegen den Zeitzonenkennzeichner über die [`offset` Option](#offset-mehrdeutigkeit) validiert wird.
- `[time_zone_id]`
  - : Ersetzen Sie `time_zone_id` durch den Zeitzonenkennzeichner (benannt oder Offset) wie oben beschrieben. Kann ein _Kritik-Flag_ haben, indem der Kennzeichner mit `!` vorangestellt wird: z.B., `[!America/New_York]`. Dieses Flag weist andere Systeme im Allgemeinen darauf hin, dass es nicht ignoriert werden kann, wenn sie es nicht unterstützen. Beachten Sie, dass es für `Temporal.ZonedDateTime.from()` erforderlich ist: das Weglassen führt zu einem `RangeError`. Wenn Sie ISO 8601 / RFC 3339-Strings ohne Zeitzonenkennzeichner-Anmerkungen parsen möchten, verwenden Sie {{jsxref("Temporal/Instant/from", "Temporal.Instant.from()")}} stattdessen.
- `[u-ca=calendar_id]` {{optional_inline}}
  - : Ersetzen Sie `calendar_id` durch den zu verwendenden Kalender. Kann ein _Kritik-Flag_ haben, indem der Schlüssel mit `!` vorangestellt wird: z.B., `[!u-ca=iso8601]`. Dieses Flag weist andere Systeme in der Regel darauf hin, dass es nicht ignoriert werden kann, wenn sie es nicht unterstützen. Der `Temporal`-Parser wird einen Fehler auslösen, wenn die Anmerkungen zwei oder mehr Kalenderanmerkungen enthalten und eine davon kritisch ist. Standardmäßig `[u-ca=iso8601]`. Beachten Sie, dass `YYYY-MM-DD` immer als ISO 8601-Kalenderdatum interpretiert und dann in den angegebenen Kalender konvertiert wird.

Als Eingabe werden andere Anmerkungen im `[key=value]`-Format ignoriert und dürfen kein Kritik-Flag haben.

Beim Serialisieren können Sie die Bruchteile der Sekundenziffern konfigurieren, ob der Offset/Zeitzonen-ID/Kalender-ID angezeigt wird und ob ein Kritik-Flag für die Anmerkungen hinzugefügt wird.

### Mehrdeutigkeit und Lücken von lokaler Zeit zu UTC-Zeit

Angesichts einer Zeitzone ist die Umrechnung von UTC in lokale Zeit unkompliziert: Sie erhalten zunächst den Offset unter Verwendung des Zeitzonennamens und des Moments, dann addieren Sie den Offset zum Moment. Das Gegenteil ist nicht der Fall: Die Umrechnung von lokaler Zeit in UTC-Zeit, ohne einen expliziten Offset, ist mehrdeutig, da eine lokale Zeit null, einem oder mehreren UTC-Zeiten entsprechen kann. Betrachten Sie die häufigste Ursache: Sommerzeitübergänge. Nehmen Sie New York als Beispiel. Sein Standard-Offset ist UTC-5, aber während der Sommerzeit werden alle Uhren um eine Stunde vorgestellt, sodass der Offset UTC-4 wird. In den USA erfolgen Übergänge um 2:00 Uhr Ortszeit, betrachten Sie also diese beiden Übergangstage:

| UTC-Zeit             | New York Zeit             |
| -------------------- | ------------------------- |
| 2024-03-10T06:58:00Z | 2024-03-10T01:58:00-05:00 |
| 2024-03-10T06:59:00Z | 2024-03-10T01:59:00-05:00 |
| 2024-03-10T07:00:00Z | 2024-03-10T03:00:00-04:00 |
| ---                  | ---                       |
| 2024-11-03T05:58:00Z | 2024-11-03T01:58:00-04:00 |
| 2024-11-03T05:59:00Z | 2024-11-03T01:59:00-04:00 |
| 2024-11-03T06:00:00Z | 2024-11-03T01:00:00-05:00 |

Wie Sie sehen können, verschwand im März eine Stunde aus der lokalen Zeit, und im November gibt es zwei Stunden mit derselben Wand-Uhrzeit. Angenommen, wir haben ein `PlainDateTime` gespeichert, das "2024-03-10T02:05:00" angibt, und wir möchten es als `America/New_York` Zeitzone interpretieren, es wird keine Zeit geben, die dem entspricht, während ein `PlainDateTime`, das "2024-11-03T01:05:00" angibt, zwei verschiedenen Momenten entsprechen kann.

Beim Erstellen eines `ZonedDateTime` aus einer lokalen Zeit (unter Verwendung von {{jsxref("Temporal/ZonedDateTime/from", "Temporal.ZonedDateTime.from()")}}, {{jsxref("Temporal/ZonedDateTime/with", "Temporal.ZonedDateTime.prototype.with()")}}, {{jsxref("Temporal/PlainDateTime/toZonedDateTime", "Temporal.PlainDateTime.prototype.toZonedDateTime()")}}), ist das Verhalten von Mehrdeutigkeit und Lücken konfigurierbar über die `disambiguation` Option:

- `earlier`
  - : Wenn es zwei mögliche Momente gibt, wählen Sie den früheren. Bei einer Lücke gehen Sie um die Dauer der Lücke zurück.
- `later`
  - : Wenn es zwei mögliche Momente gibt, wählen Sie den späteren. Bei einer Lücke gehen Sie um die Dauer der Lücke nach vorne.
- `compatible` (Standard)
  - : Gleiches Verhalten wie {{jsxref("Date")}}: Verwenden Sie `later` für Lücken und `earlier` für Mehrdeutigkeiten.
- `reject`
  - : Werfen Sie einen `RangeError`, wann immer es eine Mehrdeutigkeit oder eine Lücke gibt.

Es gibt mehrere Fälle, in denen keine Mehrdeutigkeit vorliegt, wenn ein `ZonedDateTime` konstruiert wird:

- Wenn die Zeit in UTC über den `Z` Offset angegeben ist.
- Wenn der Offset explizit angegeben und verwendet wird (siehe unten).

### Offset-Mehrdeutigkeit

Wir haben bereits demonstriert, wie Mehrdeutigkeit bei der Interpretation einer lokalen Zeit in einer Zeitzone, ohne Angabe eines expliziten Offsets, entstehen kann. Wenn Sie jedoch einen expliziten Offset angeben, entsteht ein weiterer Konflikt: zwischen dem angegebenen Offset und dem Offset, der aus der Zeitzone und der lokalen Zeit berechnet wird. Dies ist ein unvermeidliches reales Problem: Wenn Sie eine Zeit in der Zukunft speichern, mit einem vorhergesagten Offset, kann sich die Zeitzonendefinition aufgrund politischer Gründe ändern, bevor diese Zeit eintritt. Zum Beispiel, nehmen wir an, 2018 haben wir eine Erinnerung für die Zeit `2019-12-23T12:00:00-02:00[America/Sao_Paulo]` festgelegt (was eine Sommerzeit ist; Brasilien liegt auf der Südhalbkugel, daher gilt die Sommerzeit ab Oktober und endet im Februar). Aber bevor diese Zeit eintritt, entscheidet Brasilien Anfang 2019, die Sommerzeit nicht mehr zu beobachten, sodass der tatsächliche Offset `-03:00` wird. Sollte die Erinnerung nun immer noch um Mittag ausgelöst werden (beibehalten der lokalen Zeit), oder sollte sie um 11:00 Uhr ausgelöst werden (beibehalten der genauen Zeit)?

Beim Erstellen eines `ZonedDateTime` mit {{jsxref("Temporal/ZonedDateTime/from", "Temporal.ZonedDateTime.from()")}} oder beim Aktualisieren mit der {{jsxref("Temporal/ZonedDateTime/with", "with()")}} Methode ist das Verhalten für Offset-Mehrdeutigkeit konfigurierbar über die `offset` Option:

- `use`
  - : Verwenden Sie den Offset, um die genaue Zeit zu berechnen. Diese Option "verwendet" den Offset bei der Bestimmung des durch die Zeichenkette dargestellten Moments, der derselbe Moment ist, der ursprünglich berechnet wurde, als wir die Zeit gespeichert haben, selbst wenn der Offset zu diesem Moment geändert wurde. Der Zeitzonenkennzeichner wird trotzdem verwendet, um den (möglicherweise aktualisierten) Offset zu ermitteln und diesen Offset verwenden, um die genaue Zeit in lokale Zeit umzurechnen.
- `ignore`
  - : Verwenden Sie den Zeitzonenkennzeichner, um den Offset neu zu berechnen, und ignorieren Sie den in der Zeichenkette angegebenen Offset. Diese Option behält die gleiche lokale Zeit bei, die ursprünglich berechnet wurde, als wir die Zeit gespeichert haben, kann jedoch einem anderen Moment entsprechen. Beachten Sie, dass diese Option dieselbe lokale Zeitinterpretations-Mehrdeutigkeit verursachen kann wie oben demonstriert, die mit der `disambiguation` Option gelöst wird.
- `reject`
  - : Werfen Sie einen `RangeError`, wann immer es einen Konflikt zwischen dem Offset und dem Zeitzonenkennzeichner gibt. Dies ist die Standardeinstellung für {{jsxref("Temporal/ZonedDateTime/from", "Temporal.ZonedDateTime.from()")}}.
- `prefer`
  - : Verwenden Sie den Offset, wenn er gültig ist, berechnen Sie andernfalls den Offset aus dem Zeitzonenkennzeichner. Dies ist die Standardeinstellung für {{jsxref("Temporal/ZonedDateTime/with", "Temporal.ZonedDateTime.prototype.with()")}} (siehe Methode für mehr Details). Dies unterscheidet sich von `ignore`, weil im Fall von lokaler Zeit-Mehrdeutigkeit der Offset verwendet wird, um es zu lösen, anstatt der `disambiguation` Option.

Beachten Sie, dass der `Z` Offset nicht gleichbedeutend mit `+00:00` ist. Der `Z` Offset bedeutet "die Zeit in UTC ist bekannt, aber der Offset zur lokalen Zeit ist unbekannt", gemäß [RFC 9557](https://www.rfc-editor.org/rfc/rfc9557.html#name-update-to-rfc-3339). Wenn die Zeitzeichenkette den `Z` Offset verwendet, wird die `offset` Option ignoriert, und der Offset wird aus dem Zeitzonenkennzeichner abgeleitet. Andererseits wird der `+00:00` Offset als ein lokaler Zeit-Offset interpretiert, der zufällig mit UTC übereinstimmt und gegen den Zeitzonenkennzeichner validiert wird.

> [!NOTE]
> Obwohl {{jsxref("Temporal/Instant/from", "Temporal.Instant.from()")}} auch eine [RFC 9557](#rfc_9557_format) Zeichenkette in der gleichen Form verwendet, gibt es keine Mehrdeutigkeit, weil es den Zeitzonenkennzeichner immer ignoriert und nur den Offset liest.

## Konstruktor

- {{jsxref("Temporal/ZonedDateTime/ZonedDateTime", "Temporal.ZonedDateTime()")}} {{experimental_inline}}
  - : Erstellt ein neues `Temporal.ZonedDateTime` Objekt, indem die zugrunde liegenden Daten direkt bereitgestellt werden.

## Statische Methoden

- {{jsxref("Temporal/ZonedDateTime/compare", "Temporal.ZonedDateTime.compare()")}} {{experimental_inline}}
  - : Gibt eine Zahl (-1, 0 oder 1) zurück, die angibt, ob die erste Datum-Uhrzeit vor, gleich oder nach der zweiten Datum-Uhrzeit kommt. Entspricht dem Vergleich der {{jsxref("Temporal/ZonedDateTime/epochNanoseconds", "epochNanoseconds")}} der beiden Datum-Uhrzeiten.
- {{jsxref("Temporal/ZonedDateTime/from", "Temporal.ZonedDateTime.from()")}} {{experimental_inline}}
  - : Erstellt ein neues `Temporal.ZonedDateTime` Objekt aus einem anderen `Temporal.ZonedDateTime` Objekt, einem Objekt mit Datum, Uhrzeit und Zeitzoneneigenschaften oder einem [RFC 9557](#rfc_9557_format) String.

## Instanz-Eigenschaften

Diese Eigenschaften sind auf `Temporal.ZonedDateTime.prototype` definiert und werden von allen `Temporal.ZonedDateTime` Instanzen geteilt.

- {{jsxref("Temporal/ZonedDateTime/calendarId", "Temporal.ZonedDateTime.prototype.calendarId")}} {{experimental_inline}}
  - : Gibt einen String zurück, der den [Kalender](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars) repräsentiert, der verwendet wird, um das interne ISO 8601 Datum zu interpretieren.
- {{jsxref("Object/constructor", "Temporal.ZonedDateTime.prototype.constructor")}}
  - : Die Konstruktorfunktion, die das Instanzobjekt erstellt hat. Für `Temporal.ZonedDateTime`-Instanzen ist der Anfangswert der {{jsxref("Temporal/ZonedDateTime/ZonedDateTime", "Temporal.ZonedDateTime()")}}-Konstruktor.
- {{jsxref("Temporal/ZonedDateTime/day", "Temporal.ZonedDateTime.prototype.day")}} {{experimental_inline}}
  - : Gibt eine positive Ganzzahl zurück, die den 1-basierten Tagesindex im Monat dieses Datums repräsentiert, der derselbe Tag wäre, den Sie in einem Kalender sehen würden. [Kalender-](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars)-abhängig. Beginnt normalerweise bei 1 und ist kontinuierlich, aber nicht immer.
- {{jsxref("Temporal/ZonedDateTime/dayOfWeek", "Temporal.ZonedDateTime.prototype.dayOfWeek")}} {{experimental_inline}}
  - : Gibt eine positive Ganzzahl zurück, die den 1-basierten Tagesindex in der Woche dieses Datums repräsentiert. Tage in einer Woche werden sequentiell von `1` bis {{jsxref("Temporal/ZonedDateTime/daysInWeek", "daysInWeek")}} nummeriert, wobei jede Nummer ihrem Namen zugeordnet wird. [Kalender-]-abhängig. 1 repräsentiert normalerweise Montag im Kalender, selbst wenn Sprachen, die den Kalender verwenden, einen anderen Tag als ersten Wochentag betrachten können (siehe {{jsxref("Intl/Locale/getWeekInfo", "Intl.Locale.prototype.getWeekInfo()")}}).
- {{jsxref("Temporal/ZonedDateTime/dayOfYear", "Temporal.ZonedDateTime.prototype.dayOfYear")}} {{experimental_inline}}
  - : Gibt eine positive Ganzzahl zurück, die den 1-basierten Tagesindex im Jahr dieses Datums repräsentiert. Der erste Tag dieses Jahres ist `1`, und der letzte Tag ist der {{jsxref("Temporal/ZonedDateTime/daysInYear", "daysInYear")}}. [Kalender-]-abhängig.
- {{jsxref("Temporal/ZonedDateTime/daysInMonth", "Temporal.ZonedDateTime.prototype.daysInMonth")}} {{experimental_inline}}
  - : Gibt eine positive Ganzzahl zurück, die die Anzahl der Tage im Monat dieses Datums repräsentiert. [Kalender-]-abhängig.
- {{jsxref("Temporal/ZonedDateTime/daysInWeek", "Temporal.ZonedDateTime.prototype.daysInWeek")}} {{experimental_inline}}
  - : Gibt eine positive Ganzzahl zurück, die die Anzahl der Tage in der Woche dieses Datums repräsentiert. [Kalender-]-abhängig. Im ISO 8601-Kalender sind dies immer 7, im anderen Kalendersystem kann dies jedoch von Woche zu Woche variieren.
- {{jsxref("Temporal/ZonedDateTime/daysInYear", "Temporal.ZonedDateTime.prototype.daysInYear")}} {{experimental_inline}}
  - : Gibt eine positive Ganzzahl zurück, die die Anzahl der Tage im Jahr dieses Datums repräsentiert. [Kalender-]-abhängig. Im ISO 8601-Kalender sind es 365, oder 366 in einem Schaltjahr.
- {{jsxref("Temporal/ZonedDateTime/epochMilliseconds", "Temporal.ZonedDateTime.prototype.epochMilliseconds")}} {{experimental_inline}}
  - : Gibt eine Ganzzahl zurück, die die Anzahl der Millisekunden repräsentiert, die seit der Unix-Epoche (Mitternacht zu Beginn des 1. Januar 1970, UTC) bis zu diesem Moment vergangen sind. Entspricht der Division von `epochNanoseconds` durch `1e6` und dem Abrunden des Ergebnisses.
- {{jsxref("Temporal/ZonedDateTime/epochNanoseconds", "Temporal.ZonedDateTime.prototype.epochNanoseconds")}} {{experimental_inline}}
  - : Gibt einen {{jsxref("BigInt")}} zurück, der die Anzahl der Nanosekunden repräsentiert, die seit der Unix-Epoche (Mitternacht zu Beginn des 1. Januar 1970, UTC) bis zu diesem Moment vergangen sind.
- {{jsxref("Temporal/ZonedDateTime/era", "Temporal.ZonedDateTime.prototype.era")}} {{experimental_inline}}
  - : Gibt einen kalenderabhängigen Kleinbuchstaben-String zurück, der die Epoche dieses Datums repräsentiert, oder `undefined`, wenn der Kalender keine Epochen verwendet (z.B. ISO 8601). `era` und `eraYear` zusammen identifizieren ein Jahr innerhalb eines Kalenders auf dieselbe Weise, wie `year` es tut. [Kalender-]-abhängig. Für Gregorianisch ist es entweder `"gregory"` oder `"gregory-inverse"`.
- {{jsxref("Temporal/ZonedDateTime/eraYear", "Temporal.ZonedDateTime.prototype.eraYear")}} {{experimental_inline}}
  - : Gibt eine nicht-negative Ganzzahl zurück, die das Jahr dieses Datums innerhalb der Epoche repräsentieren, oder `undefined`, wenn der Kalender keine Epochen verwendet (z.B. ISO 8601). Der Jahrindex beginnt normalerweise bei 1 (häufiger) oder 0, und Jahre in einer Epoche können mit der Zeit abnehmen (z.B. Gregorianisch v. Chr.). `era` und `eraYear` zusammen identifizieren ein Jahr innerhalb eines Kalenders auf dieselbe Weise, wie `year` es tut. [Kalender-]-abhängig.
- {{jsxref("Temporal/ZonedDateTime/hour", "Temporal.ZonedDateTime.prototype.hour")}} {{experimental_inline}}
  - : Gibt eine Ganzzahl von 0 bis 23 zurück, die die Stundenkomponente dieser Zeit repräsentiert.
- {{jsxref("Temporal/ZonedDateTime/hoursInDay", "Temporal.ZonedDateTime.prototype.hoursInDay")}} {{experimental_inline}}
  - : Gibt eine positive Ganzzahl zurück, die die Anzahl der Stunden im Tag dieses Datums in der Zeitzone repräsentiert. Sie kann mehr oder weniger als 24 sein im Fall von Offset-Änderungen, wie der Sommerzeit.
- {{jsxref("Temporal/ZonedDateTime/inLeapYear", "Temporal.ZonedDateTime.prototype.inLeapYear")}} {{experimental_inline}}
  - : Gibt ein boolesches Zeichen zurück, das anzeigt, ob dieses Datum in einem Schaltjahr liegt. Ein Schaltjahr ist ein Jahr, das aufgrund eines Schaltjahres oder eines Schaltmonats mehr Tage hat als ein normales Jahr. [Kalender-]-abhängig.
- {{jsxref("Temporal/ZonedDateTime/microsecond", "Temporal.ZonedDateTime.prototype.microsecond")}} {{experimental_inline}}
  - : Gibt eine Ganzzahl von 0 bis 999 zurück, die die Mikrosekunde (10<sup>-6</sup> Sekunde) Komponente dieser Zeit repräsentiert.
- {{jsxref("Temporal/ZonedDateTime/millisecond", "Temporal.ZonedDateTime.prototype.millisecond")}} {{experimental_inline}}
  - : Gibt eine Ganzzahl von 0 bis 999 zurück, die die Millisekunde (10<sup>-3</sup> Sekunde) Komponente dieser Zeit repräsentiert.
- {{jsxref("Temporal/ZonedDateTime/minute", "Temporal.ZonedDateTime.prototype.minute")}} {{experimental_inline}}
  - : Gibt eine Ganzzahl von 0 bis 59 zurück, die die Minutenkomponente dieser Zeit repräsentiert.
- {{jsxref("Temporal/ZonedDateTime/month", "Temporal.ZonedDateTime.prototype.month")}} {{experimental_inline}}
  - : Gibt eine positive Ganzzahl zurück, die den 1-basierten Monatsindex im Jahr dieses Datums repräsentiert. Der erste Monat dieses Jahres ist `1`, und der letzte Monat ist der {{jsxref("Temporal/ZonedDateTime/monthsInYear", "monthsInYear")}}. [Kalender-]-abhängig. Beachten Sie, dass im Gegensatz zu {{jsxref("Date.prototype.getMonth()")}}, der Index 1-basiert ist. Wenn der Kalender Schaltmonate hat, kann der Monat mit dem gleichen {{jsxref("Temporal/ZonedDateTime/monthCode", "monthCode")}} unterschiedliche `month` Indizes für verschiedene Jahre haben.
- {{jsxref("Temporal/ZonedDateTime/monthCode", "Temporal.ZonedDateTime.prototype.monthCode")}} {{experimental_inline}}
  - : Gibt einen kalenderabhängigen String zurück, der den Monat dieses Datums repräsentiert. [Kalender-]-abhängig. Normalerweise ist es `M` plus eine zweistellige Monatsnummer. In Schaltmonaten ist es der vorherige Monatscode gefolgt von `L`. Wenn der Schaltmonat der erste Monat des Jahres ist, ist der Code `M00L`.
- {{jsxref("Temporal/ZonedDateTime/monthsInYear", "Temporal.ZonedDateTime.prototype.monthsInYear")}} {{experimental_inline}}
  - : Gibt eine positive Ganzzahl zurück, die die Anzahl der Monate im Jahr dieses Datums repräsentiert. [Kalender-]-abhängig. Im ISO 8601-Kalender sind es immer 12, in anderen Kalendersystemen kann es variieren.
- {{jsxref("Temporal/ZonedDateTime/nanosecond", "Temporal.ZonedDateTime.prototype.nanosecond")}} {{experimental_inline}}
  - : Gibt eine Ganzzahl von 0 bis 999 zurück, die die Nanosekunde (10<sup>-9</sup> Sekunde) Komponente dieser Zeit repräsentiert.
- {{jsxref("Temporal/ZonedDateTime/offset", "Temporal.ZonedDateTime.prototype.offset")}} {{experimental_inline}}
  - : Gibt einen String zurück, der den [Offset](#zeitzonen_und_offsets) verwendet, um den internen Moment zu interpretieren, in der Form `±HH:mm` (oder `±HH:mm:ss.sssssssss` mit so subminutiger Präzision wie nötig).
- {{jsxref("Temporal/ZonedDateTime/offsetNanoseconds", "Temporal.ZonedDateTime.prototype.offsetNanoseconds")}} {{experimental_inline}}
  - : Gibt eine Ganzzahl zurück, die den [Offset](#zeitzonen_und_offsets) verwendet, um den internen Moment zu interpretieren, als eine Anzahl von Nanosekunden (positiv oder negativ).
- {{jsxref("Temporal/ZonedDateTime/second", "Temporal.ZonedDateTime.prototype.second")}} {{experimental_inline}}
  - : Gibt eine Ganzzahl von 0 bis 59 zurück, die die Sekundenkomponente dieser Zeit repräsentiert.
- {{jsxref("Temporal/ZonedDateTime/timeZoneId", "Temporal.ZonedDateTime.prototype.timeZoneId")}} {{experimental_inline}}
  - : Gibt einen String zurück, der den [Zeitzonenkennzeichner](#zeitzonen_und_offsets) verwendet, um den internen Moment zu interpretieren. Er verwendet den gleichen String, der beim Erstellen des `Temporal.ZonedDateTime` Objekts verwendet wurde, der entweder ein IANA-Zeitzonenname oder ein fester Offset ist.
- {{jsxref("Temporal/ZonedDateTime/weekOfYear", "Temporal.ZonedDateTime.prototype.weekOfYear")}} {{experimental_inline}}
  - : Gibt eine positive Ganzzahl zurück, die den 1-basierten Wochenindex im {{jsxref("Temporal/ZonedDateTime/yearOfWeek", "yearOfWeek")}} dieses Datums repräsentiert, oder `undefined`, wenn der Kalender kein gut definiertes Wochensystem hat. Die erste Woche des Jahres ist `1`. [Kalender-]-abhängig. Beachten Sie, dass für ISO 8601 die ersten und letzten Tage des Jahres den letzten Tagen des vorherigen Jahres oder der ersten Woche des nächsten Jahres zugeordnet sein können.
- {{jsxref("Temporal/ZonedDateTime/year", "Temporal.ZonedDateTime.prototype.year")}} {{experimental_inline}}
  - : Gibt eine Ganzzahl zurück, die die Anzahl der Jahre dieses Datums relativ zum Start eines kalenderabgegrenzten Epochenjahres repräsentiert. [Kalender-]-abhängig. Normalerweise ist das Jahr 1 entweder das erste Jahr der neuesten Epoche oder das ISO 8601-Jahr `0001`. Wenn die Epoche mitten im Jahr ist, hat dieses Jahr denselben Wert vor und nach dem Startdatum der Epoche.
- {{jsxref("Temporal/ZonedDateTime/yearOfWeek", "Temporal.ZonedDateTime.prototype.yearOfWeek")}} {{experimental_inline}}
  - : Gibt eine Ganzzahl zurück, die das Jahr sein soll, das mit der {{jsxref("Temporal/ZonedDateTime/weekOfYear", "weekOfYear")}} dieses Datums gepaart werden soll, oder `undefined`, wenn der Kalender kein gut definiertes Wochensystem hat. [Kalender-]-abhängig. Normalerweise ist dies das Jahr des Datums, aber für ISO 8601 können die ersten und letzten Tage des Jahres der letzten Woche des vorherigen Jahres oder der ersten Woche des nächsten Jahres zugeordnet werden, was dazu führt, dass sich das `yearOfWeek` um 1 unterscheidet.
- `Temporal.ZonedDateTime.prototype[Symbol.toStringTag]`
  - : Der Anfangswert der [`[Symbol.toStringTag]`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag) Eigenschaft ist der String `"Temporal.ZonedDateTime"`. Diese Eigenschaft wird in {{jsxref("Object.prototype.toString()")}} verwendet.

## Instanzmethoden

- {{jsxref("Temporal/ZonedDateTime/add", "Temporal.ZonedDateTime.prototype.add()")}} {{experimental_inline}}
  - : Gibt ein neues `Temporal.ZonedDateTime`-Objekt zurück, das dieses Datum-Uhrzeit darstellt, das sich um eine bestimmte Dauer (in einer Form, die von {{jsxref("Temporal/Duration/from", "Temporal.Duration.from()")}} konvertiert werden kann) nach vorne bewegt.
- {{jsxref("Temporal/ZonedDateTime/equals", "Temporal.ZonedDateTime.prototype.equals()")}} {{experimental_inline}}
  - : Gibt `true` zurück, wenn diese Datum-Uhrzeit im Wert gleich einer anderen Datum-Uhrzeit ist (in einer Form, die von {{jsxref("Temporal/ZonedDateTime/from", "Temporal.ZonedDateTime.from()")}} konvertiert werden kann), und `false` andernfalls. Sie werden sowohl nach ihren Momentwerten, Zeitzonen und ihren Kalendern verglichen, so dass zwei Datum-Uhrzeiten aus verschiedenen Kalendern oder Zeitzonen von {{jsxref("Temporal/ZonedDateTime/compare", "Temporal.ZonedDateTime.compare()")}} als gleich angesehen werden können, aber nicht von `equals()`.
- {{jsxref("Temporal/ZonedDateTime/getTimeZoneTransition", "Temporal.ZonedDateTime.prototype.getTimeZoneTransition()")}} {{experimental_inline}}
  - : Gibt ein `Temporal.ZonedDateTime`-Objekt zurück, das den ersten Moment nach oder vor diesem Moment darstellt, bei dem sich der UTC-Offset der Zeitzone ändert, oder `null`, wenn es keinen solchen Übergang gibt. Dies ist hilfreich, um die Offset-Regeln einer Zeitzone zu ermitteln, wie z.B. ihr Sommerzeitmuster.
- {{jsxref("Temporal/ZonedDateTime/round", "Temporal.ZonedDateTime.prototype.round()")}} {{experimental_inline}}
  - : Gibt ein neues `Temporal.ZonedDateTime`-Objekt zurück, das dieses Datum-Uhrzeit darstellt, das auf die angegebene Einheit gerundet ist.
- {{jsxref("Temporal/ZonedDateTime/since", "Temporal.ZonedDateTime.prototype.since()")}} {{experimental_inline}}
  - : Gibt ein neues {{jsxref("Temporal.Duration")}}-Objekt zurück, das die Dauer von einer anderen Datum-Uhrzeit (in einer Form, die von {{jsxref("Temporal/ZonedDateTime/from", "Temporal.ZonedDateTime.from()")}} konvertiert werden kann) bis zu dieser Datum-Uhrzeit darstellt. Die Dauer ist positiv, wenn die andere Datum-Uhrzeit vor dieser Datum-Uhrzeit liegt, und negativ, wenn danach.
- {{jsxref("Temporal/ZonedDateTime/startOfDay", "Temporal.ZonedDateTime.prototype.startOfDay()")}} {{experimental_inline}}
  - : Gibt ein `Temporal.ZonedDateTime`-Objekt zurück, das den ersten Moment dieses Datums in der Zeitzone darstellt. Es hat normalerweise eine Zeit von `00:00:00`, kann aber unterschiedlich sein, wenn es aufgrund von Offset-Änderungen um Mitternacht nicht existiert, in welchem Fall die erste existierende Zeit zurückgegeben wird.
- {{jsxref("Temporal/ZonedDateTime/subtract", "Temporal.ZonedDateTime.prototype.subtract()")}} {{experimental_inline}}
  - : Gibt ein neues `Temporal.ZonedDateTime`-Objekt zurück, das dieses Datum-Uhrzeit darstellt, das sich um eine bestimmte Dauer (in einer Form, die von {{jsxref("Temporal/Duration/from", "Temporal.Duration.from()")}} konvertiert werden kann) rückwärts bewegt.
- {{jsxref("Temporal/ZonedDateTime/toInstant", "Temporal.ZonedDateTime.prototype.toInstant()")}} {{experimental_inline}}
  - : Gibt ein neues {{jsxref("Temporal.Instant")}}-Objekt zurück, das den Moment dieser Datum-Uhrzeit darstellt.
- {{jsxref("Temporal/ZonedDateTime/toJSON", "Temporal.ZonedDateTime.prototype.toJSON()")}} {{experimental_inline}}
  - : Gibt einen String zurück, der diese Datum-Uhrzeit im gleichen [RFC 9557 Format](#rfc_9557_format) darstellt, als ob {{jsxref("Temporal/ZonedDateTime/toString", "toString()")}} aufgerufen wird. Soll implizit von {{jsxref("JSON.stringify()")}} aufgerufen werden.
- {{jsxref("Temporal/ZonedDateTime/toLocaleString", "Temporal.ZonedDateTime.prototype.toLocaleString()")}} {{experimental_inline}}
  - : Gibt einen String mit einer sprachensensiblen Darstellung dieser Datum-Uhrzeit zurück.
- {{jsxref("Temporal/ZonedDateTime/toPlainDate", "Temporal.ZonedDateTime.prototype.toPlainDate()")}} {{experimental_inline}}
  - : Gibt ein neues {{jsxref("Temporal.PlainDate")}}-Objekt zurück, das den Datumsanteil dieser Datum-Uhrzeit darstellt.
- {{jsxref("Temporal/ZonedDateTime/toPlainDateTime", "Temporal.ZonedDateTime.prototype.toPlainDateTime()")}} {{experimental_inline}}
  - : Gibt ein neues {{jsxref("Temporal.PlainDateTime")}}-Objekt zurück, das den Datums- und Zeitanteil dieser Datum-Uhrzeit darstellt. Nur die Zeitzoneninformationen werden entfernt.
- {{jsxref("Temporal/ZonedDateTime/toPlainTime", "Temporal.ZonedDateTime.prototype.toPlainTime()")}} {{experimental_inline}}
  - : Gibt ein neues {{jsxref("Temporal.PlainTime")}}-Objekt zurück, das den Zeitanteil dieser Datum-Uhrzeit darstellt.
- {{jsxref("Temporal/ZonedDateTime/toString", "Temporal.ZonedDateTime.prototype.toString()")}} {{experimental_inline}}
  - : Gibt einen String zurück, der diese Datum-Uhrzeit im [RFC 9557 Format](#rfc_9557_format) darstellt.
- {{jsxref("Temporal/ZonedDateTime/until", "Temporal.ZonedDateTime.prototype.until()")}} {{experimental_inline}}
  - : Gibt ein neues {{jsxref("Temporal.Duration")}}-Objekt zurück, das die Dauer von dieser Datum-Uhrzeit bis zu einer anderen Datum-Uhrzeit (in einer Form, die von {{jsxref("Temporal/ZonedDateTime/from", "Temporal.ZonedDateTime.from()")}} konvertiert werden kann) darstellt. Die Dauer ist positiv, wenn die andere Datum-Uhrzeit nach dieser Datum-Uhrzeit liegt, und negativ, wenn davor.
- {{jsxref("Temporal/ZonedDateTime/valueOf", "Temporal.ZonedDateTime.prototype.valueOf()")}} {{experimental_inline}}
  - : Wirft einen {{jsxref("TypeError")}}, der verhindert, dass `Temporal.ZonedDateTime`-Instanzen in [arithmetischen oder Vergleichsoperationen implizit in Primitiven umgewandelt](/de/docs/Web/JavaScript/Guide/Data_structures#primitive_coercion) werden.
- {{jsxref("Temporal/ZonedDateTime/with", "Temporal.ZonedDateTime.prototype.with()")}} {{experimental_inline}}
  - : Gibt ein neues `Temporal.ZonedDateTime`-Objekt zurück, das diese Datum-Uhrzeit darstellt, mit einigen durch neue Werte ersetzten Feldern.
- {{jsxref("Temporal/ZonedDateTime/withCalendar", "Temporal.ZonedDateTime.prototype.withCalendar()")}} {{experimental_inline}}
  - : Gibt ein neues `Temporal.ZonedDateTime`-Objekt zurück, das diese Datum-Uhrzeit interpretiert im neuen Kalendersystem darstellt.
- {{jsxref("Temporal/ZonedDateTime/withPlainTime", "Temporal.ZonedDateTime.prototype.withPlainTime()")}} {{experimental_inline}}
  - : Gibt ein neues `Temporal.ZonedDateTime`-Objekt zurück, das diese Datum-Uhrzeit mit dem vollständig durch die neue Zeit ersetzten Zeitanteil (in einer Form, die von {{jsxref("Temporal/PlainTime/from", "Temporal.PlainTime.from()")}} umgewandelt werden kann) darstellt.
- {{jsxref("Temporal/ZonedDateTime/withTimeZone", "Temporal.ZonedDateTime.prototype.withTimeZone()")}} {{experimental_inline}}
  - : Gibt ein neues `Temporal.ZonedDateTime`-Objekt zurück, das denselben Moment wie diese Datum-Uhrzeit, aber in der neuen Zeitzone repräsentiert.

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
