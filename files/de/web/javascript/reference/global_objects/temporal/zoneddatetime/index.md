---
title: Temporal.ZonedDateTime
slug: Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime
l10n:
  sourceCommit: d0b9cef0713eb263934a98e94202b97c143204a4
---

{{JSRef}}{{SeeCompatTable}}

Das **`Temporal.ZonedDateTime`**-Objekt repräsentiert ein Datum und eine Uhrzeit mit einer Zeitzone. Es wird grundsätzlich als Kombination aus einem [Instant](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/Instant), einer Zeitzone und einem Kalendersystem dargestellt.

## Beschreibung

Ein `ZonedDateTime` fungiert als Brücke zwischen einer genauen Zeit und einer Wand-Uhrzeit: es repräsentiert gleichzeitig einen Moment in der Geschichte (wie ein {{jsxref("Temporal.Instant")}}) und eine lokale Wand-Uhrzeit (wie ein {{jsxref("Temporal.PlainDateTime")}}). Dies geschieht durch das Speichern des Moments, der Zeitzone und des Kalendersystems. Die Zeitzone wird verwendet, um zwischen dem Moment und der lokalen Zeit zu konvertieren, und das Kalendersystem wird verwendet, um die lokale Zeit zu interpretieren.

`ZonedDateTime` ist die einzige `Temporal`-Klasse, die zeitzonenbewusst ist. Die Hinzufügung einer Zeitzone bewirkt, dass `ZonedDateTime`-Objekte wichtige Verhaltensunterschiede gegenüber {{jsxref("Temporal.PlainDateTime")}}-Objekten haben. Das bedeutet, dass Sie nicht mehr davon ausgehen können, dass "die Zeit 1 Minute danach" jeden Tag gleich ist oder dass ein Tag 24 Stunden hat. Im schlimmsten Fall kann ein ganzer Tag im lokalen Kalender fehlen. Unten bieten wir einen kurzen Überblick über Zeitzonen und Offsets und wie sie die Umrechnung zwischen UTC-Zeit und lokaler Zeit beeinflussen.

### Zeitzonen und Offsets

Alle Zeiten in JavaScript haben einen goldenen Standard: die UTC-Zeit, die sich kontinuierlich und gleichmäßig mit dem Fortschritt der physischen Zeit erhöht. Im Gegensatz dazu sind Benutzer mehr an ihrer lokalen Zeit interessiert, die sie auf ihren Kalendern und Uhren ablesen. Der Prozess der Umrechnung zwischen UTC-Zeit und lokaler Zeit beinhaltet ein Zeitzonen-_Offset_, das wie folgt berechnet wird:

```plain
local time = UTC time + offset
```

Zum Beispiel, wenn die UTC-Zeit 1970-01-01T00:00:00 ist, und das Offset "-05:00" lautet, dann ist die lokale Zeit:

```plain
1970-01-01T00:00:00 + -05:00 = 1969-12-31T19:00:00
```

Indem diese lokale Zeit mit dem Offset versehen wird, wird diese Zeit als "1969-12-31T19:00:00-05:00" ausgedrückt und kann nun eindeutig als ein Moment in der Geschichte verstanden werden.

Um das Offset zu kennen, benötigen wir zwei Informationen: die _Zeitzone_ und den _Moment_. Die Zeitzone ist eine Region auf der Erde, in der das gleiche Offset zu allen Zeiten verwendet wird. Zwei Uhren in derselben Zeitzone werden immer zur gleichen Zeit die gleiche Uhrzeit anzeigen, aber das Offset ist nicht unbedingt konstant: Das bedeutet, dass sich die Uhrenzeiten abrupt ändern können. Dies geschieht häufig während der Übergänge zur Sommerzeit, wo das Offset um eine Stunde verändert wird, was zweimal im Jahr passiert. Offsets können sich auch dauerhaft durch politische Veränderungen ändern, z.B. wenn ein Land die Zeitzonen wechselt.

Die Zeitzonen werden in der [IANA Time Zone Database](https://www.iana.org/time-zones) gespeichert. Jede IANA-Zeitzone hat:

- Einen _primären Zeitzonen-Identifier_, der die Zeitzone eindeutig identifiziert. Er bezieht sich in der Regel auf ein geografisches Gebiet, das durch eine Stadt verankert ist (z.B. `Europe/Paris` oder `Africa/Kampala`), kann aber auch Einzel-Offset-Zeitzonen wie `UTC` (ein konstantes `+00:00`-Offset) oder `Etc/GMT+5` (aus historischen Gründen ein negatives Offset `-05:00`) benennen. Aus historischen Gründen ist der primäre Name für die UTC-Zeitzone `UTC`, obwohl er in IANA `Etc/UTC` ist.
- Eine _Zeitzonendefinition_ in Form einer Tabelle, die UTC-Datum-/Uhrzeitbereiche (einschließlich zukünftiger Bereiche) spezifischen Offsets zuordnet.
- Null oder mehr _nicht-primäre Zeitzonen-Identifier_, die Aliase des primären Zeitzonen-Identifiers sind. Diese sind in der Regel historische Namen, die nicht mehr verwendet werden, aber aus Kompatibilitätsgründen beibehalten werden. Weitere Informationen finden Sie unten.

Als Eingabe werden benannte Identifier ohne Beachtung der Groß- und Kleinschreibung abgeglichen. Intern werden sie in ihrer bevorzugten Schreibweise gespeichert, und nicht-primäre Identifier werden _nicht_ in ihren primären Identifier umgewandelt.

> [!NOTE]
> Wenn Sie den Zeitzonennamen festlegen, möchten Sie ihn selten auf `"UTC"` setzen. `ZonedDateTime` ist zur Anzeige für Benutzer gedacht, aber kein Mensch lebt in der "UTC"-Zeitzone. Wenn Sie die Zeitzone zum Zeitpunkt der Erstellung nicht kennen, aber die Wand-Uhrzeit kennen, verwenden Sie ein {{jsxref("Temporal.PlainDateTime")}}. Wenn Sie den genauen Moment kennen, verwenden Sie ein {{jsxref("Temporal.Instant")}}.

Wenn eine `Temporal`-API einen _Zeitzonen-Identifier_ akzeptiert, akzeptiert sie zusätzlich zu primären Zeitzonen-Identifiern und nicht-primären Zeitzonen-Identifiern auch einen _Offset-Zeitzonen-Identifier_, der in derselben Form wie das Offset ist, jedoch ist Präzision auf Minutenbasis nicht zulässig. Beispielsweise sind `+05:30`, `-08`, `+0600` alle gültige Offset-Identifier. Intern werden Offset-Identifier in der Form `±HH:mm` gespeichert.

> [!NOTE]
> Vermeiden Sie die Verwendung von Offset-Identifikatoren, wenn Sie stattdessen eine benannte Zeitzone verwenden können. Selbst wenn eine Region immer nur ein einzelnes Offset verwendet hat, ist es besser, den benannten Identifier zu verwenden, um sich vor zukünftigen politischen Änderungen des Offsets zu schützen.
>
> Wenn eine Region (oder früher) mehrere Offsets verwendet hat, ist die Verwendung ihrer benannten Zeitzone noch wichtiger. Dies liegt daran, dass `Temporal.ZonedDateTime` Methoden wie `add` oder `with` verwenden kann, um neue Instanzen zu erstellen, die einem anderen Moment entsprechen. Wenn diese abgeleiteten Instanzen einem Moment entsprechen, der ein anderes Offset verwendet (zum Beispiel nach einem Übergang zur Sommerzeit), sind Ihre Berechnungen möglicherweise eine falsche lokale Zeit. Die Verwendung einer benannten Zeitzone stellt sicher, dass lokale Daten und Zeiten immer für das korrekte Offset für diesen Moment angepasst werden.

Der Einfachheit halber, wenn Sie einen Zeitzonen-Identifier für `Temporal`-APIs wie `Temporal.ZonedDateTime.prototype.withTimeZone()` und die `timeZoneId`-Option von `Temporal.ZonedDateTime.from()` angeben, können Sie ihn in einigen anderen Formen angeben:

- Als eine andere `ZonedDateTime`-Instanz, deren `timeZoneId` verwendet wird.
- Als [RFC 9557-String](#rfc_9557_format) mit einer Zeitzonenanmerkung, deren Zeitzonen-Identifier verwendet wird.
- Als ISO 8601 / RFC 3339-String mit einem Offset, dessen Offset als Offset-Identifikator verwendet wird; oder, falls `Z` verwendet wird, wird die Zeitzone `"UTC"` verwendet. Diese Nutzung wird im Allgemeinen nicht empfohlen, da, wie oben diskutiert, Offset-Identifikatoren nicht in der Lage sind, andere `Temporal.ZonedDateTime`-Instanzen sicher über einen Offset-Übergang hinweg abzuleiten, wie wenn die Sommerzeit beginnt oder endet. Erwägen Sie stattdessen, einfach `Temporal.Instant` zu verwenden oder die tatsächliche benannte Zeitzone des Benutzers zu ermitteln.

Die IANA-Zeitzonendatenbank ändert sich von Zeit zu Zeit, normalerweise um neue Zeitzonen als Reaktion auf politische Änderungen hinzuzufügen. In seltenen Fällen werden jedoch IANA-Zeitzonen-Identifier umbenannt, um aktualisierte englische Übersetzungen eines Stadtnamens zu übernehmen oder um veraltete Namenskonventionen zu aktualisieren. Zum Beispiel, hier sind einige bemerkenswerte Namensänderungen:

| Aktueller IANA-Haupt-Identifier  | Alter, jetzt nicht primärer Identifier |
| -------------------------------- | -------------------------------------- |
| `America/Argentina/Buenos_Aires` | `America/Buenos_Aires`                 |
| `Asia/Kolkata`                   | `Asia/Calcutta`                        |
| `Asia/Ho_Chi_Minh`               | `Asia/Saigon`                          |
| `Europe/Kyiv`                    | `Europe/Kiev`                          |

Historisch gesehen verursachten diese Umbenennungen Probleme für Programmierer, weil die Unicode [CLDR-Datenbank](https://github.com/unicode-org/cldr-json/blob/main/cldr-json/cldr-bcp47/bcp47/timezone.json) (eine von Browsern verwendete Bibliothek zur Bereitstellung von Zeitzonen-Identifikatoren und -Daten) IANA-Umbenennungen aus [Stabilitätsgründen](https://unicode.org/reports/tr35/#Time_Zone_Identifiers) nicht befolgte. Infolgedessen berichteten einige Browser wie Chrome und Safari über die veralteten CLDR-Identifikatoren, während andere Browser wie Firefox die Standardeinstellungen von CLDR überschrieben und die aktuellen Haupt-Identifikatoren gemeldet haben.

Mit der Einführung von Temporal ist dieses Verhalten nun standardisierter:

- [CLDR-Daten](https://github.com/unicode-org/cldr-json/blob/main/cldr-json/cldr-bcp47/bcp47/timezone.json) enthalten jetzt ein `"_iana"`-Attribut, das den aktuellsten Identifier angibt, wenn der ältere, stabile Identifier umbenannt wurde. Browser können dieses neue Attribut verwenden, um Anrufern aktuelle Identifier bereitzustellen.
- Zeitzonen-Identifier, die vom Programmierer bereitgestellt werden, werden niemals durch einen Alias ersetzt. Zum Beispiel, wenn der Anrufer `Asia/Calcutta` oder `Asia/Kolkata` als Identifizierer-Eingabe für `Temporal.ZonedDateTime.from()` bereitstellt, dann wird im resultierenden Instanz-`timeZoneId` derselbe Identifizierer zurückgegeben. Beachten Sie, dass die Groß-/Kleinschreibung der Ausgaben normalisiert wird, um mit IANA übereinzustimmen, sodass `ASIA/calCuTTa` als Eingabe eine `timeZoneId` von `Asia/Calcutta` als Ausgabe erzeugt.
- Wenn ein Zeitzonen-Identifier nicht vom Anrufer bereitgestellt wird, sondern stattdessen vom System selbst bezogen wird (zum Beispiel, wenn `Temporal.Now.timeZoneId()` verwendet wird), werden moderne Identifier in allen Browsern zurückgegeben. Für Städte-Umbenennungen gibt es eine Verzögerung von zwei Jahren, bevor diese system-bereitgestellten Identifikatoren-APIs den neuen Namen anzeigen, wodurch anderen Komponenten (wie einem Node-Server) Zeit gegeben wird, ihre Kopien der IANA-Datenbank zu aktualisieren, um den neuen Namen zu erkennen.

Beachten Sie, dass die Zuweisung der primären Identifikatoren den Ländercode bewahrt: Zum Beispiel verzeichnet die IANA-Datenbank `Atlantic/Reykjavik` als Alias für `Africa/Abidjan`, aber weil sie unterschiedlichen Ländern (Island und Côte d'Ivoire bzw.) entsprechen, werden sie als verschiedene primäre Identifikatoren behandelt.

Diese Standardisierung gilt auch außerhalb von `Temporal`. Zum Beispiel, die `timeZone`-Option, die von {{jsxref("Intl/DateTimeFormat/resolvedOptions", "Intl.DateTimeFormat.prototype.resolvedOptions()")}} zurückgegeben wird, wird auch nie durch einen Alias ersetzt, obwohl Browser diese Identifikatoren traditionell vor der Standardisierung durch Temporal kanonisiert haben. Andererseits werden {{jsxref("Intl/Locale/getTimeZones", "Intl.Locale.prototype.getTimeZones()")}} und {{jsxref("Intl.supportedValuesOf()")}} (`timeZone`-Option) den aktuellsten Identifier zurückgeben, während einige Browser früher den alten, nicht primären Identifier zurückgegeben haben.

### RFC 9557 Format

`ZonedDateTime`-Objekte können unter Verwendung des [RFC 9557](https://datatracker.ietf.org/doc/html/rfc9557) Formats serialisiert und geparst werden, einer Erweiterung des [ISO 8601 / RFC 3339](https://datatracker.ietf.org/doc/html/rfc3339) Formats. Der String hat folgendes Format (Leerzeichen sind nur zur Lesbarkeit hinzugefügt und sollten im eigentlichen String nicht vorhanden sein):

```plain
YYYY-MM-DD T HH:mm:ss.sssssssss Z/±HH:mm:ss.sssssssss [time_zone_id] [u-ca=calendar_id]
```

- `YYYY`
  - : Entweder eine vierstellige Zahl oder eine sechsstellige Zahl mit einem `+` oder `-` Zeichen.
- `MM`
  - : Eine zweistellige Zahl von `01` bis `12`.
- `DD`
  - : Eine zweistellige Zahl von `01` bis `31`. Die `YYYY`, `MM` und `DD` Komponenten können durch `-` oder nichts getrennt werden.
- `T` {{optional_inline}}
  - : Der Datum-Uhrzeit-Separator, der `T`, `t`, oder ein Leerzeichen sein kann. Vorhanden, wenn und nur wenn `HH` vorhanden ist.
- `HH` {{optional_inline}}
  - : Eine zweistellige Zahl von `00` bis `23`. Standard ist `00`.
- `mm` {{optional_inline}}
  - : Eine zweistellige Zahl von `00` bis `59`. Standard ist `00`.
- `ss.sssssssss` {{optional_inline}}
  - : Eine zweistellige Zahl von `00` bis `59`. Kann optional von einem `.` oder `,` gefolgt sein und einer bis neun Stellen. Standard ist `00`. Die `HH`, `mm` und `ss` Komponenten können durch `:` oder nichts getrennt werden. Sie können entweder nur `ss` weglassen oder sowohl `ss` als auch `mm`, sodass die Zeit eine von drei Formen haben kann: `HH`, `HH:mm`, oder `HH:mm:ss.sssssssss`.
- `Z/±HH:mm:ss.sssssssss` {{optional_inline}}
  - : Entweder der UTC-Indikator `Z` oder `z`, oder ein Offset von UTC in der Form `+` oder `-`, gefolgt vom gleichen Format wie die Zeitkomponente. Beachten Sie, dass Präzision auf Minutenbasis möglicherweise von anderen Systemen nicht unterstützt wird. Wenn weggelassen, wird das Offset aus dem Zeitzonen-Identifikator abgeleitet. Wenn vorhanden, dann muss die Zeit ebenfalls bereitgestellt werden. `Z` ist nicht dasselbe wie `+00:00`: Ersteres bedeutet, dass die Zeit in UTC-Form angegeben ist, unabhängig vom Zeitzonen-Identifier, während Letzteres bedeutet, dass die Zeit in lokaler Zeit angegeben ist, die zufällig UTC+0 ist, und wird über die `offset`-Option gegen den Zeitzonen-Identifier validiert.
- `[time_zone_id]`
  - : Ersetzen Sie `time_zone_id` durch den Zeitzonen-Identifier (benannt oder Offset) wie oben beschrieben. Kann ein _Kritismus-Flag_ haben, indem der Identifier mit `!` vorangestellt wird: z.B. `[!America/New_York]`. Dieses Flag weist andere Systeme im Allgemeinen darauf hin, dass es nicht ignoriert werden kann, wenn sie es nicht unterstützen. Beachten Sie, dass es für `Temporal.ZonedDateTime.from()` erforderlich ist: Wenn es weggelassen wird, wird ein `RangeError` ausgelöst. Wenn Sie ISO 8601 / RFC 3339 Strings ohne Zeitzonen-Identifikator-Anmerkungen parsen möchten, verwenden Sie {{jsxref("Temporal/Instant/from", "Temporal.Instant.from()")}} stattdessen.
- `[u-ca=calendar_id]` {{optional_inline}}
  - : Ersetzen Sie `calendar_id` durch den zu verwendenden Kalender. Kann ein _Kritismus-Flag_ haben, indem der Schlüssel mit `!` vorangestellt wird: z.B. `[!u-ca=iso8601]`. Dieses Flag weist andere Systeme im Allgemeinen darauf hin, dass es nicht ignoriert werden kann, wenn sie es nicht unterstützen. Der `Temporal`-Parser wird einen Fehler auslösen, wenn die Anmerkungen zwei oder mehr Kalenderanmerkungen enthalten und eine davon kritisch ist. Der Standard ist `[u-ca=iso8601]`. Beachten Sie, dass das `YYYY-MM-DD` immer als ISO 8601 Kalenderdatum interpretiert und dann in den angegebenen Kalender konvertiert wird.

Als Eingabe werden andere Anmerkungen im `[key=value]`-Format ignoriert und dürfen das Kritismus-Flag nicht haben.

Beim Serialisieren können Sie die Bruchteilssekundenstellen, ob das Offset/Zeitzonen-ID/Kalender-ID angezeigt wird, und ob ein Kritismus-Flag für die Anmerkungen hinzugefügt wird, konfigurieren.

### Mehrdeutigkeit und Lücken bei der Umwandlung von lokaler Zeit in UTC-Zeit

Angesichts einer Zeitzone ist die Umrechnung von UTC in lokale Zeit unkompliziert: Sie erhalten zuerst das Offset unter Verwendung des Zeitzonennamens und des Moments und addieren dann das Offset zum Moment. Das Gegenteil ist nicht wahr: Die Umrechnung von lokaler Zeit in UTC, ohne explizites Offset, ist mehrdeutig, weil eine lokale Zeit null, einer oder vielen UTC-Zeiten entsprechen kann. Betrachten Sie die häufigste Ursache: Übergänge zur Sommerzeit. Nehmen Sie New York als Beispiel. Sein Standard-Offset ist UTC-5, aber während der Sommerzeit werden alle Uhren um eine Stunde vorgestellt, sodass das Offset UTC-4 wird. In den USA finden die Übergänge um 2:00 Uhr Ortszeit statt, sodass diese beiden Übergangstage betrachtet werden sollten:

| UTC-Zeit             | New York-Zeit             |
| -------------------- | ------------------------- |
| 2024-03-10T06:58:00Z | 2024-03-10T01:58:00-05:00 |
| 2024-03-10T06:59:00Z | 2024-03-10T01:59:00-05:00 |
| 2024-03-10T07:00:00Z | 2024-03-10T03:00:00-04:00 |
| ---                  | ---                       |
| 2024-11-03T05:58:00Z | 2024-11-03T01:58:00-04:00 |
| 2024-11-03T05:59:00Z | 2024-11-03T01:59:00-04:00 |
| 2024-11-03T06:00:00Z | 2024-11-03T01:00:00-05:00 |

Wie Sie sehen können, verschwindet im März eine Stunde aus der lokalen Zeit, und im November gibt es zwei Stunden mit der gleichen Wand-Uhrzeit. Angenommen, wir haben ein `PlainDateTime` gespeichert, das "2024-03-10T02:05:00" sagt, und wir wollen es in der `America/New_York` Zeitzone interpretieren, es wird keine Zeit geben, die dem entspricht, während ein `PlainDateTime`, das "2024-11-03T01:05:00" sagt, zwei verschiedenen Momenten entsprechen kann.

Bei der Erstellung eines `ZonedDateTime` aus einer lokalen Zeit (mit {{jsxref("Temporal/ZonedDateTime/from", "Temporal.ZonedDateTime.from()")}}, {{jsxref("Temporal/ZonedDateTime/with", "Temporal.ZonedDateTime.prototype.with()")}}, {{jsxref("Temporal/PlainDateTime/toZonedDateTime", "Temporal.PlainDateTime.prototype.toZonedDateTime()")}}) ist das Verhalten bei Mehrdeutigkeit und Lücken über die `disambiguation`-Option konfigurierbar:

- `earlier`
  - : Wenn es zwei mögliche Momente gibt, wählen Sie den früheren. Wenn es eine Lücke gibt, gehen Sie um die Dauer der Lücke zurück.
- `later`
  - : Wenn es zwei mögliche Momente gibt, wählen Sie den späteren. Wenn es eine Lücke gibt, gehen Sie um die Dauer der Lücke vorwärts.
- `compatible` (Standard)
  - : Gleiches Verhalten wie {{jsxref("Date")}}: Verwenden Sie `later` für Lücken und `earlier` für Mehrdeutigkeiten.
- `reject`
  - : Werfen Sie einen `RangeError`, wann immer es eine Mehrdeutigkeit oder eine Lücke gibt.

Es gibt mehrere Fälle, in denen es keine Mehrdeutigkeit bei der Erstellung eines `ZonedDateTime` gibt:

- Wenn die Zeit in UTC über das `Z` Offset angegeben ist.
- Wenn das Offset explizit angegeben und verwendet wird (siehe unten).

### Offset-Mehrdeutigkeit

Wir haben bereits demonstriert, wie Mehrdeutigkeit entstehen kann, wenn man eine lokale Zeit in einer Zeitzone interpretiert, ohne ein explizites Offset anzugeben. Wenn Sie jedoch ein explizites Offset angeben, entsteht ein weiterer Konflikt: zwischen dem angegebenen Offset und dem berechneten Offset aus der Zeitzone und der lokalen Zeit. Dies ist ein unvermeidbares reales Problem: Wenn Sie eine Zeit in der Zukunft mit einem vorhergesagten Offset speichern, kann sich die Zeitzonendefinition ändern, bevor diese Zeit kommt, aufgrund politischer Gründe. Zum Beispiel, angenommen, wir setzen 2018 eine Erinnerung für die Zeit `2019-12-23T12:00:00-02:00[America/Sao_Paulo]` (was eine Sommerzeit ist; Brasilien befindet sich auf der südlichen Hemisphäre, daher tritt die Sommerzeit im Oktober ein und endet im Februar). Aber bevor diese Zeit kommt, beschließt Brasilien Anfang 2019, die Sommerzeit nicht mehr zu beachten, sodass das tatsächliche Offset `-03:00` wird. Sollte die Erinnerung jetzt noch um 12:00 Uhr ausgelöst werden (unter Beibehaltung der lokalen Zeit), oder sollte sie um 11:00 Uhr unter Beibehaltung der exakten Zeit ausgelöst werden?

Beim Erstellen eines `ZonedDateTime` mit {{jsxref("Temporal/ZonedDateTime/from", "Temporal.ZonedDateTime.from()")}} oder beim Aktualisieren mit der {{jsxref("Temporal/ZonedDateTime/with", "with()")}}-Methode ist das Verhalten bei Offset-Mehrdeutigkeit über die `offset`-Option konfigurierbar:

- `use`
  - : Verwenden Sie das Offset, um die genaue Zeit zu berechnen. Diese Option "verwendet" das Offset bei der Bestimmung des Moments, der durch den String repräsentiert wird, der derselbe Moment ist, der ursprünglich berechnet wurde, als wir die Zeit gespeichert haben, selbst wenn sich das Offset zu diesem Moment geändert hat. Der Zeitzonen-Identifier wird weiterhin verwendet, um das (möglicherweise aktualisierte) Offset zu ermitteln und dieses Offset zu verwenden, um die genaue Zeit in lokale Zeit umzuwandeln.
- `ignore`
  - : Verwenden Sie den Zeitzonen-Identifier, um das Offset erneut zu berechnen, wobei das im String angegebene Offset ignoriert wird. Diese Option behält die gleiche lokale Zeit bei, wie ursprünglich berechnet, als wir die Zeit gespeichert haben, kann aber einem anderen Moment entsprechen. Beachten Sie, dass diese Option dieselbe Mehrdeutigkeit der lokalen Zeitinterpretation verursachen kann, wie oben demonstriert, die mit der `disambiguation`-Option gelöst wird.
- `reject`
  - : Werfen Sie einen `RangeError`, wann immer es einen Konflikt zwischen dem Offset und dem Zeitzonen-Identifier gibt. Dies ist der Standard für {{jsxref("Temporal/ZonedDateTime/from", "Temporal.ZonedDateTime.from()")}}.
- `prefer`
  - : Verwenden Sie das Offset, wenn es gültig ist, andernfalls berechnen Sie das Offset aus dem Zeitzonen-Identifier. Dies ist der Standard für {{jsxref("Temporal/ZonedDateTime/with", "Temporal.ZonedDateTime.prototype.with()")}} (siehe die Methode für weitere Details). Dies unterscheidet sich von `ignore`, weil im Fall von Mehrdeutigkeit der lokalen Zeit das Offset zur Lösung verwendet wird, anstatt der `disambiguation`-Option.

Beachten Sie, dass das `Z` Offset nicht `+00:00` bedeutet; es wird immer unabhängig von der Zeitzone als gültig betrachtet. Die Zeit wird als UTC-Zeit interpretiert, und der Zeitzonen-Identifier wird dann verwendet, um sie in lokale Zeit zu konvertieren. Mit anderen Worten, `Z` erzwingt dasselbe Verhalten wie die `ignore`-Option, und seine Ergebnisse können niemals mehrdeutig sein.

> [!NOTE]
> Obwohl {{jsxref("Temporal/Instant/from", "Temporal.Instant.from()")}} auch einen [RFC 9557](#rfc_9557_format) String in derselben Form akzeptiert, gibt es keine Mehrdeutigkeit, da er immer den Zeitzonen-Identifier ignoriert und nur das Offset liest.

## Konstruktor

- {{jsxref("Temporal/ZonedDateTime/ZonedDateTime", "Temporal.ZonedDateTime()")}} {{experimental_inline}}
  - : Erstellt ein neues `Temporal.ZonedDateTime`-Objekt durch direktes Bereitstellen der zugrunde liegenden Daten.

## Statische Methoden

- {{jsxref("Temporal/ZonedDateTime/compare", "Temporal.ZonedDateTime.compare()")}} {{experimental_inline}}
  - : Gibt eine Zahl (-1, 0 oder 1) zurück, die angibt, ob die erste Datum-Uhrzeit vor, gleichzeitig oder nach der zweiten Datum-Uhrzeit kommt. Entspricht dem Vergleich der {{jsxref("Temporal/ZonedDateTime/epochNanoseconds", "epochNanoseconds")}} der beiden Datum-Uhrzeiten.
- {{jsxref("Temporal/ZonedDateTime/from", "Temporal.ZonedDateTime.from()")}} {{experimental_inline}}
  - : Erstellt ein neues `Temporal.ZonedDateTime`-Objekt aus einem anderen `Temporal.ZonedDateTime`-Objekt, einem Objekt mit Datums-, Zeit- und Zeitzoneneigenschaften oder einem [RFC 9557](#rfc_9557_format) String.

## Instanzeigenschaften

Diese Eigenschaften sind auf `Temporal.ZonedDateTime.prototype` definiert und werden von allen `Temporal.ZonedDateTime`-Instanzen geteilt.

- {{jsxref("Temporal/ZonedDateTime/calendarId", "Temporal.ZonedDateTime.prototype.calendarId")}} {{experimental_inline}}
  - : Gibt einen String zurück, der den [Kalender](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars) repräsentiert, der verwendet wird, um das interne ISO 8601 Datum zu interpretieren.
- {{jsxref("Object/constructor", "Temporal.ZonedDateTime.prototype.constructor")}}
  - : Die Konstruktionsfunktion, die das Instanzobjekt erstellt hat. Für `Temporal.ZonedDateTime`-Instanzen ist der Anfangswert die {{jsxref("Temporal/ZonedDateTime/ZonedDateTime", "Temporal.ZonedDateTime()")}}-Konstruktor.
- {{jsxref("Temporal/ZonedDateTime/day", "Temporal.ZonedDateTime.prototype.day")}} {{experimental_inline}}
  - : Gibt eine positive ganze Zahl zurück, die den 1-basierten Tag-Index im Monat dieses Datums darstellt, was dieselbe Tagesnummer ist, die Sie in einem Kalender sehen würden. [Kalender](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars)-abhängig. Beginnt im Allgemeinen bei 1 und ist kontinuierlich, aber nicht immer.
- {{jsxref("Temporal/ZonedDateTime/dayOfWeek", "Temporal.ZonedDateTime.prototype.dayOfWeek")}} {{experimental_inline}}
  - : Gibt eine positive ganze Zahl zurück, die den 1-basierten Tag-Index in der Woche dieses Datums darstellt. Tage in einer Woche werden sequentiell von `1` bis {{jsxref("Temporal/ZonedDateTime/daysInWeek", "daysInWeek")}} nummeriert, wobei jede Zahl ihrem Namen zugeordnet wird. [Kalender](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars)-abhängig. 1 stellt normalerweise Montag im Kalender dar, auch wenn Lokale, die den Kalender verwenden, einen anderen Tag als den ersten Tag der Woche betrachten können (siehe {{jsxref("Intl/Locale/getWeekInfo", "Intl.Locale.prototype.getWeekInfo()")}}).
- {{jsxref("Temporal/ZonedDateTime/dayOfYear", "Temporal.ZonedDateTime.prototype.dayOfYear")}} {{experimental_inline}}
  - : Gibt eine positive ganze Zahl zurück, die den 1-basierten Tag-Index im Jahr dieses Datums darstellt. Der erste Tag dieses Jahres ist `1`, und der letzte Tag ist der {{jsxref("Temporal/ZonedDateTime/daysInYear", "daysInYear")}}. [Kalender](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars)-abhängig.
- {{jsxref("Temporal/ZonedDateTime/daysInMonth", "Temporal.ZonedDateTime.prototype.daysInMonth")}} {{experimental_inline}}
  - : Gibt eine positive ganze Zahl zurück, die die Anzahl der Tage im Monat dieses Datums darstellt. [Kalender](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars)-abhängig.
- {{jsxref("Temporal/ZonedDateTime/daysInWeek", "Temporal.ZonedDateTime.prototype.daysInWeek")}} {{experimental_inline}}
  - : Gibt eine positive ganze Zahl zurück, die die Anzahl der Tage in der Woche dieses Datums darstellt. [Kalender](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars)-abhängig. Für den ISO 8601 Kalender sind es immer 7, aber in anderen Kalendersystemen kann es von Woche zu Woche unterschiedlich sein.
- {{jsxref("Temporal/ZonedDateTime/daysInYear", "Temporal.ZonedDateTime.prototype.daysInYear")}} {{experimental_inline}}
  - : Gibt eine positive ganze Zahl zurück, die die Anzahl der Tage im Jahr dieses Datums darstellt. [Kalender](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars)-abhängig. Für den ISO 8601 Kalender sind es 365 oder 366 in einem Schaltjahr.
- {{jsxref("Temporal/ZonedDateTime/epochMilliseconds", "Temporal.ZonedDateTime.prototype.epochMilliseconds")}} {{experimental_inline}}
  - : Gibt eine ganze Zahl zurück, die die Anzahl der Millisekunden seit dem Unix-Epoch (Mitternacht am Anfang des 1. Januar 1970, UTC) bis zu diesem Moment darstellt. Entspricht der Teilung von `epochNanoseconds` durch `1e6` und dem Abrunden des Ergebnisses.
- {{jsxref("Temporal/ZonedDateTime/epochNanoseconds", "Temporal.ZonedDateTime.prototype.epochNanoseconds")}} {{experimental_inline}}
  - : Gibt einen {{jsxref("BigInt")}} zurück, der die Anzahl der Nanosekunden seit dem Unix-Epoch (Mitternacht am Anfang des 1. Januar 1970, UTC) bis zu diesem Moment darstellt.
- {{jsxref("Temporal/ZonedDateTime/era", "Temporal.ZonedDateTime.prototype.era")}} {{experimental_inline}}
  - : Gibt einen kalender-spezifischen Kleinbuchstaben-String zurück, der die Ära dieses Datums darstellt, oder `undefined`, wenn der Kalender keine Ären verwendet (z.B. ISO 8601). `era` und `eraYear` zusammen identifizieren ein Jahr in einem Kalender eindeutig, auf die gleiche Weise wie `year`. [Kalender](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars)-abhängig. Für Gregorianisch ist es entweder `"gregory"` oder `"gregory-inverse"`.
- {{jsxref("Temporal/ZonedDateTime/eraYear", "Temporal.ZonedDateTime.prototype.eraYear")}} {{experimental_inline}}
  - : Gibt eine nicht-negative ganze Zahl zurück, die das Jahr dieses Datums innerhalb der Ära darstellt, oder `undefined`, wenn der Kalender keine Ären verwendet (z.B. ISO 8601). Der Jahr-Index beginnt normalerweise bei 1 (häufiger) oder 0, und Jahre in einer Ära können mit der Zeit abnehmen (z.B. Gregorianisches BCE). `era` und `eraYear` zusammen identifizieren ein Jahr in einem Kalender eindeutig, auf die gleiche Weise wie `year`. [Kalender](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars)-abhängig.
- {{jsxref("Temporal/ZonedDateTime/hour", "Temporal.ZonedDateTime.prototype.hour")}} {{experimental_inline}}
  - : Gibt eine ganze Zahl von 0 bis 23 zurück, die die Stundenkomponente dieser Zeit darstellt.
- {{jsxref("Temporal/ZonedDateTime/hoursInDay", "Temporal.ZonedDateTime.prototype.hoursInDay")}} {{experimental_inline}}
  - : Gibt eine positive ganze Zahl zurück, die die Anzahl der Stunden im Tag dieses Datums in der Zeitzone darstellt. Es können mehr oder weniger als 24 sein im Falle von Offset-Änderungen wie Sommerzeit.
- {{jsxref("Temporal/ZonedDateTime/inLeapYear", "Temporal.ZonedDateTime.prototype.inLeapYear")}} {{experimental_inline}}
  - : Gibt einen boolean zurück, der angibt, ob dieses Datum in einem Schaltjahr liegt. Ein Schaltjahr ist ein Jahr mit mehr Tagen (aufgrund eines Schalttages oder -monats) als ein normales Jahr. [Kalender](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars)-abhängig.
- {{jsxref("Temporal/ZonedDateTime/microsecond", "Temporal.ZonedDateTime.prototype.microsecond")}} {{experimental_inline}}
  - : Gibt eine ganze Zahl von 0 bis 999 zurück, die die Mikrosekunden (10<sup>-6</sup> Sekunde) Komponente dieser Zeit darstellt.
- {{jsxref("Temporal/ZonedDateTime/millisecond", "Temporal.ZonedDateTime.prototype.millisecond")}} {{experimental_inline}}
  - : Gibt eine ganze Zahl von 0 bis 999 zurück, die die Millisekunden (10<sup>-3</sup> Sekunde) Komponente dieser Zeit darstellt.
- {{jsxref("Temporal/ZonedDateTime/minute", "Temporal.ZonedDateTime.prototype.minute")}} {{experimental_inline}}
  - : Gibt eine ganze Zahl von 0 bis 59 zurück, die die Minutenkomponente dieser Zeit darstellt.
- {{jsxref("Temporal/ZonedDateTime/month", "Temporal.ZonedDateTime.prototype.month")}} {{experimental_inline}}
  - : Gibt eine positive ganze Zahl zurück, die den 1-basierten Monat-Index im Jahr dieses Datums darstellt. Der erste Monat dieses Jahres ist `1`, und der letzte Monat ist der {{jsxref("Temporal/ZonedDateTime/monthsInYear", "monthsInYear")}}. [Kalender](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars)-abhängig. Beachten Sie, dass im Gegensatz zu {{jsxref("Date.prototype.getMonth()")}} der Index 1-basiert ist. Wenn der Kalender Schaltmonate hat, kann der Monat mit dem gleichen {{jsxref("Temporal/ZonedDateTime/monthCode", "monthCode")}} unterschiedliche `month`-Indizes für verschiedene Jahre haben.
- {{jsxref("Temporal/ZonedDateTime/monthCode", "Temporal.ZonedDateTime.prototype.monthCode")}} {{experimental_inline}}
  - : Gibt einen kalender-spezifischen String zurück, der den Monat dieses Datums darstellt. [Kalender](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars)-abhängig. In der Regel ist es `M` plus eine zweistellige Monatsnummer. Für Schaltmonate ist es der vorherige Monatscode gefolgt von `L`. Falls der Schaltmonat der erste Monat des Jahres ist, ist der Code `M00L`.
- {{jsxref("Temporal/ZonedDateTime/monthsInYear", "Temporal.ZonedDateTime.prototype.monthsInYear")}} {{experimental_inline}}
  - : Gibt eine positive ganze Zahl zurück, die die Anzahl der Monate im Jahr dieses Datums darstellt. [Kalender](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars)-abhängig. Für den ISO 8601 Kalender sind es immer 12, aber in anderen Kalendersystemen kann es abweichen.
- {{jsxref("Temporal/ZonedDateTime/nanosecond", "Temporal.ZonedDateTime.prototype.nanosecond")}} {{experimental_inline}}
  - : Gibt eine ganze Zahl von 0 bis 999 zurück, die die Nanosekunden (10<sup>-9</sup> Sekunde) Komponente dieser Zeit darstellt.
- {{jsxref("Temporal/ZonedDateTime/offset", "Temporal.ZonedDateTime.prototype.offset")}} {{experimental_inline}}
  - : Gibt einen String zurück, der das [Offset](#zeitzonen_und_offsets) verwendet, um den internen Moment zu interpretieren, in der Form `±HH:mm` (oder `±HH:mm:ss.sssssssss` mit so viel Subminute-Präzision wie nötig).
- {{jsxref("Temporal/ZonedDateTime/offsetNanoseconds", "Temporal.ZonedDateTime.prototype.offsetNanoseconds")}} {{experimental_inline}}
  - : Gibt eine ganze Zahl zurück, die das [Offset](#zeitzonen_und_offsets) verwendet, um den internen Moment zu interpretieren, als eine Anzahl von Nanosekunden (positiv oder negativ).
- {{jsxref("Temporal/ZonedDateTime/second", "Temporal.ZonedDateTime.prototype.second")}} {{experimental_inline}}
  - : Gibt eine ganze Zahl von 0 bis 59 zurück, die die Sekundenkomponente dieser Zeit darstellt.
- {{jsxref("Temporal/ZonedDateTime/timeZoneId", "Temporal.ZonedDateTime.prototype.timeZoneId")}} {{experimental_inline}}
  - : Gibt einen String zurück, der den [Zeitzonen-Identifier](#zeitzonen_und_offsets) verwendet, um den internen Moment zu interpretieren. Es verwendet den gleichen String, der bei der Erstellung des `Temporal.ZonedDateTime`-Objekts verwendet wurde, welcher entweder ein IANA-Zeitzonenname oder ein festes Offset ist.
- {{jsxref("Temporal/ZonedDateTime/weekOfYear", "Temporal.ZonedDateTime.prototype.weekOfYear")}} {{experimental_inline}}
  - : Gibt eine positive ganze Zahl zurück, die den 1-basierten Wochen-Index im {{jsxref("Temporal/ZonedDateTime/yearOfWeek", "yearOfWeek")}} dieses Datums darstellt, oder `undefined`, wenn der Kalender kein gut definiertes Wochensystem hat. Die erste Woche des Jahres ist `1`. [Kalender](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars)-abhängig. Beachten Sie, dass für ISO 8601 die ersten und letzten Tage des Jahres der letzten Woche des vorherigen Jahres oder der ersten Woche des nächsten Jahres zugeschrieben werden können.
- {{jsxref("Temporal/ZonedDateTime/year", "Temporal.ZonedDateTime.prototype.year")}} {{experimental_inline}}
  - : Gibt eine ganze Zahl zurück, die die Anzahl der Jahre dieses Datums relativ zum Beginn eines kalender-spezifischen Epoch-Jahres darstellt. [Kalender](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars)-abhängig. Normalerweise ist Jahr 1 entweder das erste Jahr der letzten Ära oder das ISO 8601 Jahr `0001`. Wenn die Epoche in der Jahresmitte ist, wird dieses Jahr den gleichen Wert vor und nach dem Startdatum der Ära haben.
- {{jsxref("Temporal/ZonedDateTime/yearOfWeek", "Temporal.ZonedDateTime.prototype.yearOfWeek")}} {{experimental_inline}}
  - : Gibt eine ganze Zahl zurück, die das Jahr angibt, das mit der {{jsxref("Temporal/ZonedDateTime/weekOfYear", "weekOfYear")}} dieses Datums paarig ist, oder `undefined`, wenn der Kalender kein gut definiertes Wochensystem hat. [Kalender](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars)-abhängig. Normalerweise ist dies das Jahr des Datums, aber für ISO 8601 können die ersten und letzten Tage des Jahres der letzten Woche des vorherigen Jahres oder der ersten Woche des nächsten Jahres zugeschrieben werden, was dazu führt, dass sich das `yearOfWeek` um 1 unterscheidet.
- `Temporal.ZonedDateTime.prototype[Symbol.toStringTag]`
  - : Der Anfangswert der [`[Symbol.toStringTag]`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag) Eigenschaft ist der String `"Temporal.ZonedDateTime"`. Diese Eigenschaft wird in {{jsxref("Object.prototype.toString()")}} verwendet.

## Instanzmethoden

- {{jsxref("Temporal/ZonedDateTime/add", "Temporal.ZonedDateTime.prototype.add()")}} {{experimental_inline}}
  - : Gibt ein neues `Temporal.ZonedDateTime`-Objekt zurück, das diesen Datum-Uhrzeit um eine angegebene Dauer (in einer Form konvertierbar von {{jsxref("Temporal/Duration/from", "Temporal.Duration.from()")}}) nach vorne verschoben darstellt.
- {{jsxref("Temporal/ZonedDateTime/equals", "Temporal.ZonedDateTime.prototype.equals()")}} {{experimental_inline}}
  - : Gibt `true` zurück, wenn diese Datum-Uhrzeit im Wert mit einer anderen Datum-Uhrzeit gleichwertig ist (in einer Form konvertierbar von {{jsxref("Temporal/ZonedDateTime/from", "Temporal.ZonedDateTime.from()")}}), und `false` sonst. Sie werden sowohl nach ihren Moment-Werten, Zeitzonen und ihren Kalendern verglichen, sodass zwei Datum-Uhrzeiten aus verschiedenen Kalendern oder Zeitzonen als gleich von {{jsxref("Temporal/ZonedDateTime/compare", "Temporal.ZonedDateTime.compare()")}} betrachtet werden können, aber nicht von `equals()`.
- {{jsxref("Temporal/ZonedDateTime/getTimeZoneTransition", "Temporal.ZonedDateTime.prototype.getTimeZoneTransition()")}} {{experimental_inline}}
  - : Gibt ein `Temporal.ZonedDateTime`-Objekt zurück, das den ersten Moment nach oder vor diesem Moment darstellt, bei dem sich das UTC-Offset der Zeitzone ändert, oder `null`, wenn es keinen solchen Übergang gibt. Dies ist nützlich, um die Offset-Regeln einer Zeitzone herauszufinden, wie ihr Sommerzeitmuster.
- {{jsxref("Temporal/ZonedDateTime/round", "Temporal.ZonedDateTime.prototype.round()")}} {{experimental_inline}}
  - : Gibt ein neues `Temporal.ZonedDateTime`-Objekt zurück, das diesen Datum-Uhrzeit auf die angegebene Einheit gerundet darstellt.
- {{jsxref("Temporal/ZonedDateTime/since", "Temporal.ZonedDateTime.prototype.since()")}} {{experimental_inline}}
  - : Gibt ein neues {{jsxref("Temporal.Duration")}}-Objekt zurück, das die Dauer von einer anderen Datum-Uhrzeit (in einer Form konvertierbar von {{jsxref("Temporal/ZonedDateTime/from", "Temporal.ZonedDateTime.from()")}}) zu dieser Datum-Uhrzeit darstellt. Die Dauer ist positiv, wenn die andere Datum-Uhrzeit vor dieser Datum-Uhrzeit ist, und negativ, wenn danach.
- {{jsxref("Temporal/ZonedDateTime/startOfDay", "Temporal.ZonedDateTime.prototype.startOfDay()")}} {{experimental_inline}}
  - : Gibt ein `Temporal.ZonedDateTime`-Objekt zurück, das den ersten Moment dieses Datums in der Zeitzone darstellt. Es hat normalerweise eine Uhrzeit von `00:00:00`, kann aber anders sein, wenn Mitternacht aufgrund von Offset-Änderungen nicht existiert, in diesem Fall wird die der erste existierende Zeitpunkt zurückgegeben.
- {{jsxref("Temporal/ZonedDateTime/subtract", "Temporal.ZonedDateTime.prototype.subtract()")}} {{experimental_inline}}
  - : Gibt ein neues `Temporal.ZonedDateTime`-Objekt zurück, das diesen Datum-Uhrzeit um eine angegebene Dauer (in einer Form konvertierbar von {{jsxref("Temporal/Duration/from", "Temporal.Duration.from()")}}) zurückwärts verschoben darstellt.
- {{jsxref("Temporal/ZonedDateTime/toInstant", "Temporal.ZonedDateTime.prototype.toInstant()")}} {{experimental_inline}}
  - : Gibt ein neues {{jsxref("Temporal.Instant")}}-Objekt zurück, das den Moment dieser Datum-Uhrzeit darstellt.
- {{jsxref("Temporal/ZonedDateTime/toJSON", "Temporal.ZonedDateTime.prototype.toJSON()")}} {{experimental_inline}}
  - : Gibt einen String zurück, der diesen Datum-Uhrzeit in demselben [RFC 9557 Format](#rfc_9557_format) wie der Aufruf von {{jsxref("Temporal/ZonedDateTime/toString", "toString()")}} darstellt. Soll implizit durch {{jsxref("JSON.stringify()")}} aufgerufen werden.
- {{jsxref("Temporal/ZonedDateTime/toLocaleString", "Temporal.ZonedDateTime.prototype.toLocaleString()")}} {{experimental_inline}}
  - : Gibt einen String mit einer sprachspezifischen Darstellung dieser Datum-Uhrzeit zurück.
- {{jsxref("Temporal/ZonedDateTime/toPlainDate", "Temporal.ZonedDateTime.prototype.toPlainDate()")}} {{experimental_inline}}
  - : Gibt ein neues {{jsxref("Temporal.PlainDate")}}-Objekt zurück, das das Datumsstück dieser Datum-Uhrzeit darstellt.
- {{jsxref("Temporal/ZonedDateTime/toPlainDateTime", "Temporal.ZonedDateTime.prototype.toPlainDateTime()")}} {{experimental_inline}}
  - : Gibt ein neues {{jsxref("Temporal.PlainDateTime")}}-Objekt zurück, das das Datums- und Uhrzeitstück dieser Datum-Uhrzeit darstellt. Nur die Zeitzoneninformationen werden entfernt.
- {{jsxref("Temporal/ZonedDateTime/toPlainTime", "Temporal.ZonedDateTime.prototype.toPlainTime()")}} {{experimental_inline}}
  - : Gibt ein neues {{jsxref("Temporal.PlainTime")}}-Objekt zurück, das das Uhrzeitstück dieser Datum-Uhrzeit darstellt.
- {{jsxref("Temporal/ZonedDateTime/toString", "Temporal.ZonedDateTime.prototype.toString()")}} {{experimental_inline}}
  - : Gibt einen String zurück, der diese Datum-Uhrzeit im [RFC 9557 Format](#rfc_9557_format) darstellt.
- {{jsxref("Temporal/ZonedDateTime/until", "Temporal.ZonedDateTime.prototype.until()")}} {{experimental_inline}}
  - : Gibt ein neues {{jsxref("Temporal.Duration")}}-Objekt zurück, das die Dauer von dieser Datum-Uhrzeit zu einer anderen Datum-Uhrzeit (in einer Form konvertierbar von {{jsxref("Temporal/ZonedDateTime/from", "Temporal.ZonedDateTime.from()")}}) darstellt. Die Dauer ist positiv, wenn die andere Datum-Uhrzeit nach dieser Datum-Uhrzeit liegt, und negativ, wenn davor.
- {{jsxref("Temporal/ZonedDateTime/valueOf", "Temporal.ZonedDateTime.prototype.valueOf()")}} {{experimental_inline}}
  - : Wirft einen {{jsxref("TypeError")}}, der verhindert, dass `Temporal.ZonedDateTime`-Instanzen [implizit zu primitiven Werten umgewandelt](/de/docs/Web/JavaScript/Data_structures#primitive_coercion) werden, wenn sie in arithmetischen oder Vergleichsoperationen verwendet werden.
- {{jsxref("Temporal/ZonedDateTime/with", "Temporal.ZonedDateTime.prototype.with()")}} {{experimental_inline}}
  - : Gibt ein neues `Temporal.ZonedDateTime`-Objekt zurück, das diesen Datum-Uhrzeit mit einigen Feldern darstellt, die durch neue Werte ersetzt wurden.
- {{jsxref("Temporal/ZonedDateTime/withCalendar", "Temporal.ZonedDateTime.prototype.withCalendar()")}} {{experimental_inline}}
  - : Gibt ein neues `Temporal.ZonedDateTime`-Objekt zurück, das diesen Datum-Uhrzeit im neuen Kalendersystem interpretiert darstellt.
- {{jsxref("Temporal/ZonedDateTime/withPlainTime", "Temporal.ZonedDateTime.prototype.withPlainTime()")}} {{experimental_inline}}
  - : Gibt ein neues `Temporal.ZonedDateTime`-Objekt zurück, das diesen Datum-Uhrzeit mit dem Zeitteil vollständig durch die neue Zeit ersetzt darstellt (in einer Form konvertierbar von {{jsxref("Temporal/PlainTime/from", "Temporal.PlainTime.from()")}})
- {{jsxref("Temporal/ZonedDateTime/withTimeZone", "Temporal.ZonedDateTime.prototype.withTimeZone()")}} {{experimental_inline}}
  - : Gibt ein neues `Temporal.ZonedDateTime`-Objekt zurück, das denselben Moment wie diese Datum-Uhrzeit darstellt, aber in der neuen Zeitzone.

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
