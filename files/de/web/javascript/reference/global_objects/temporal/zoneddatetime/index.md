---
title: Temporal.ZonedDateTime
slug: Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime
l10n:
  sourceCommit: 7e14795a6ef2bf5e760c315ce64800dd1cd98c29
---

Das **`Temporal.ZonedDateTime`** Objekt repräsentiert ein Datum und eine Zeit mit einer Zeitzone. Es wird grundsätzlich als Kombination eines [instants](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/Instant), einer Zeitzone und eines Kalendersystems dargestellt.

## Beschreibung

Ein `ZonedDateTime` dient als Brücke zwischen einer exakten Zeit und einer Uhrzeit: Es repräsentiert gleichzeitig einen Moment in der Geschichte (ähnlich wie ein {{jsxref("Temporal.Instant")}}) und eine lokale, kalenderbasierte Zeit (ähnlich wie ein {{jsxref("Temporal.PlainDateTime")}}). Es tut dies, indem es den Moment speichert, die Zeitzone und das Kalendersystem. Die Zeitzone wird verwendet, um zwischen dem Moment und der lokalen Zeit zu konvertieren, und das Kalendersystem wird verwendet, um die lokale Zeit zu interpretieren.

`ZonedDateTime` ist die einzige `Temporal` Klasse, die sich Zeitzonen-bewusst verhält. Die Hinzufügung einer Zeitzone führt zu wichtigen Verhaltensunterschieden gegenüber {{jsxref("Temporal.PlainDateTime")}} Objekten. Insbesondere kann man nicht mehr davon ausgehen, dass "die Zeit 1 Minute später" jeden Tag gleich ist, oder dass ein Tag 24 Stunden hat. Im schlimmsten Fall könnte ein ganzer Tag im lokalen Kalender fehlen. Unten bieten wir einen kurzen Überblick über Zeitzonen und Offsets und wie sie die Umwandlung zwischen UTC-Zeit und lokaler Zeit beeinflussen.

### Zeitzonen und Offsets

Alle Zeiten in JavaScript haben einen goldenen Standard: die UTC-Zeit, die kontinuierlich und gleichmäßig im fortschreitenden physischen Zeitverlauf zunimmt. Im Gegensatz dazu interessieren sich Benutzer mehr für ihre lokale Zeit, die Zeit, die sie auf ihren Kalendern und Uhren ablesen. Der Prozess der Konvertierung zwischen UTC-Zeit und lokaler Zeit beinhaltet ein Zeitzonen-_Offset_, das wie folgt berechnet wird:

```plain
local time = UTC time + offset
```

Zum Beispiel, wenn die UTC-Zeit 1970-01-01T00:00:00 ist, und der Offset "-05:00", dann ist die lokale Zeit:

```plain
1970-01-01T00:00:00 + -05:00 = 1969-12-31T19:00:00
```

Indem man diese lokale Zeit mit dem Offset versieht, indem man diese Zeit als "1969-12-31T19:00:00-05:00" ausdrückt, kann sie nun eindeutig als ein Moment in der Geschichte verstanden werden.

Um den Offset zu kennen, benötigen wir zwei Informationen, die _Zeitzone_ und den _Moment_. Die Zeitzone ist eine Region auf der Erde, in der zu jeder Zeit derselbe Offset verwendet wird. Zwei Uhren in derselben Zeitzone zeigen immer gleichzeitig dieselbe Zeit an, aber der Offset muss nicht konstant sein: Das heißt, die Zeit dieser Uhren kann sich abrupt ändern. Dies passiert häufig während Sommerzeit-Umstellungen, wenn sich der Offset um eine Stunde ändert, was zweimal im Jahr geschieht. Offsets können sich auch aufgrund politischer Änderungen dauerhaft ändern, z. B. wenn ein Land die Zeitzonen wechselt.

Die Zeitzonen sind in der [IANA Time Zone Database](https://www.iana.org/time-zones) gespeichert. Jede IANA-Zeitzone hat:

- Einen _primären Zeitzonenbezeichner_, der die Zeitzone eindeutig identifiziert. Er bezieht sich normalerweise auf ein geografisches Gebiet, das durch eine Stadt verankert ist (z. B. `Europe/Paris` oder `Africa/Kampala`), kann aber auch Zeitzonen mit einfachem Offset wie `UTC` (ein konsistenter `+00:00` Offset) oder `Etc/GMT+5` (was aus historischen Gründen ein negativer Offset `-05:00` ist) bezeichnen. Aus historischen Gründen ist der primäre Name für die UTC-Zeitzone `UTC`, obwohl sie in IANA `Etc/UTC` ist.
- Eine _Zeitzonendefinition_ in Form einer Tabelle, die UTC-Datum/Zeit-Bereiche (einschließlich zukünftiger Bereiche) spezifischen Offsets zuordnet.
- Null oder mehr _nicht-primäre Zeitzonenbezeichner_, die Aliase für den primären Zeitzonenbezeichner sind. Dies sind normalerweise historische Namen, die nicht mehr verwendet werden, aber aus Kompatibilitätsgründen beibehalten werden. Siehe unten für weitere Informationen.

Als Eingabe werden benannte Bezeichner case-insensitiv abgeglichen. Intern werden sie in ihrer bevorzugten Schreibung gespeichert, und nicht-primäre Bezeichner werden _nicht_ in ihren primären Bezeichner umgewandelt.

> [!NOTE]
> Wenn Sie den Zeitzonennamen festlegen, wollen Sie ihn selten auf `"UTC"` setzen. `ZonedDateTime` ist dafür gedacht, Benutzern angezeigt zu werden, aber kein Mensch lebt in der "UTC"-Zeitzone. Wenn Sie die Zeitzone zum Zeitpunkt der Erstellung nicht kennen, aber die kalenderbasierte Zeit wissen, verwenden Sie ein {{jsxref("Temporal.PlainDateTime")}}. Wenn Sie den genauen Moment kennen, verwenden Sie ein {{jsxref("Temporal.Instant")}}.

Wenn eine `Temporal` API einen _Zeitzonenbezeichner_ akzeptiert, akzeptiert sie zusätzlich zu primären Zeitzonenbezeichnern und nicht-primären Zeitzonenbezeichnern auch einen _Offset-Zeitzonenbezeichner_, der dieselbe Form wie der Offset hat, außer dass keine Unterminuten-Präzision erlaubt ist. Zum Beispiel sind `+05:30`, `-08`, `+0600` alle gültige Offset-Bezeichner. Intern werden Offset-Bezeichner in der `±HH:mm` Form gespeichert.

> [!NOTE]
> Vermeiden Sie die Verwendung von Offset-Bezeichnern, wenn Sie stattdessen einen benannten Zeitzonenbezeichner verwenden können. Selbst wenn eine Region immer einen einzigen Offset verwendet hat, ist es besser, den benannten Bezeichner zu verwenden, um sich vor zukünftigen politischen Änderungen des Offsets zu schützen.
>
> Wenn eine Region mehrere Offsets verwendet (oder verwendet hat), ist es umso wichtiger, ihre benannte Zeitzone zu verwenden. Dies liegt daran, dass `Temporal.ZonedDateTime` Methoden wie `add` oder `with` verwenden kann, um neue Instanzen zu einem anderen Moment zu erstellen. Wenn diese abgeleiteten Instanzen einem Moment entsprechen, der einen anderen Offset verwendet (zum Beispiel nach einer Sommerzeit-Umstellung), dann wären Ihre Berechnungen mit einer falschen lokalen Zeit versehen. Die Verwendung einer benannten Zeitzone stellt sicher, dass lokale Daten und Zeiten immer für den richtigen Offset für diesen Moment angepasst werden.

Zur Bequemlichkeit, wenn Sie einen Zeitzonenbezeichner an `Temporal` APIs wie `Temporal.ZonedDateTime.prototype.withTimeZone()` und die `timeZoneId` Option von `Temporal.ZonedDateTime.from()` weitergeben, können Sie ihn in einigen anderen Formen angeben:

- Als eine andere `ZonedDateTime` Instanz, deren `timeZoneId` verwendet wird.
- Als eine [RFC 9557 Zeichenkette](#rfc_9557_format) mit einer Zeitzonenannotation, deren Zeitzonenbezeichner verwendet wird.
- Als eine ISO 8601 / RFC 3339 Zeichenkette mit einem Offset, deren Offset als Offset-Bezeichner verwendet wird; oder, wenn Sie `Z` verwenden, dann wird die `"UTC"` Zeitzone verwendet. Diese Verwendung wird im Allgemeinen nicht empfohlen, da, wie oben erläutert, Offset-Bezeichner nicht die Fähigkeit haben, sicher andere `Temporal.ZonedDateTime` Instanzen über einen Offset-Übergang wie den Beginn oder das Ende der Sommerzeit abzuleiten. Stattdessen sollten Sie einfach `Temporal.Instant` verwenden oder die tatsächliche benannte Zeitzone des Benutzers abrufen.

Die IANA-Zeitzonendatenbank ändert sich von Zeit zu Zeit, meist um neue Zeitzonen als Reaktion auf politische Änderungen hinzuzufügen. Allerdings werden in seltenen Fällen IANA-Zeitzonenbezeichner umbenannt, um aktualisierte englische Übersetzungen eines Stadtnamens zu verwenden oder um veraltete Namenskonventionen zu aktualisieren. Zum Beispiel hier ein paar bemerkenswerte Namensänderungen:

| Aktueller IANA-primärer Bezeichner | Alter, jetzt nicht-primärer Bezeichner |
| ---------------------------------- | -------------------------------------- |
| `America/Argentina/Buenos_Aires`   | `America/Buenos_Aires`                 |
| `Asia/Kolkata`                     | `Asia/Calcutta`                        |
| `Asia/Ho_Chi_Minh`                 | `Asia/Saigon`                          |
| `Europe/Kyiv`                      | `Europe/Kiev`                          |

Historisch gesehen haben diese Umbenennungen Probleme für Programmierer verursacht, weil die Unicode [CLDR-Datenbank](https://github.com/unicode-org/cldr/blob/main/common/bcp47/timezone.xml) (eine Bibliothek, die von Browsern verwendet wird, um Zeitzonenbezeichner und -daten bereitzustellen) aus Stabilitätsgründen nicht den Umbennungen von IANA gefolgt ist (https://unicode.org/reports/tr35/#Time_Zone_Identifiers). Infolgedessen haben einige Browser wie Chrome und Safari veraltete Bezeichner von CLDR gemeldet, während andere Browser wie Firefox die Standardwerte von CLDR überschrieben und die aktualisierten primären Bezeichner gemeldet haben.

Mit der Einführung von Temporal ist dieses Verhalten jetzt mehr standardisiert:

- [CLDR-Daten](https://github.com/unicode-org/cldr/blob/main/common/bcp47/timezone.xml) enthalten jetzt ein `"_iana"` Attribut, das den aktuellsten Bezeichner anzeigt, wenn der ältere, stabile Bezeichner umbenannt wurde. Browser können dieses neue Attribut verwenden, um Anrufern die aktuellen Bezeichner bereitzustellen.
- Zeitzonenbezeichner, die vom Programmierer bereitgestellt werden, werden nie durch einen Alias ersetzt. Zum Beispiel, wenn der Anrufer `Asia/Calcutta` oder `Asia/Kolkata` als den Bezeichner-Eingang für {{jsxref("Temporal/ZonedDateTime/from", "Temporal.ZonedDateTime.from()")}} bereitstellt, wird derselbe Bezeichner in der resultierenden Instanz des {{jsxref("Temporal/ZonedDateTime/timeZoneId", "timeZoneId")}} zurückgegeben. Beachten Sie, dass die Buchstaben im Output normalisiert werden, um IANA zu entsprechen, sodass `ASIA/calCuTTa` als Eingabe eine {{jsxref("Temporal/ZonedDateTime/timeZoneId", "timeZoneId")}} von `Asia/Calcutta` als Ausgabe erzeugt.
- Wenn ein Zeitzonenbezeichner nicht von einem Anrufer bereitgestellt wird, sondern von dem System selbst bezogen wird (zum Beispiel, wenn {{jsxref("Temporal/Now/timeZoneId", "Temporal.Now.timeZoneId()")}} verwendet wird), werden in allen Browsern moderne Bezeichner zurückgegeben. Bei Stadtnamenänderungen gibt es eine zweijährige Lücke, bevor diese systemeigenen Bezeichner-APIs den neuen Namen ausgeben, was anderen Komponenten (wie einem Node-Server) Zeit gibt, ihre Kopien der IANA-Datenbank zu aktualisieren, um den neuen Namen zu erkennen.

Beachten Sie, dass die Zuteilung von primären Bezeichnern den Ländercode beibehält: Zum Beispiel zeichnet die IANA-Datenbank `Atlantic/Reykjavik` als Alias für `Africa/Abidjan` auf, aber da sie verschiedenen Ländern entsprechen (Island und Côte d'Ivoire, jeweils), werden sie als unterschiedliche primäre Bezeichner behandelt.

Diese Standardisierung gilt auch außerhalb von `Temporal`. Zum Beispiel wird die `timeZone` Option, die von {{jsxref("Intl/DateTimeFormat/resolvedOptions", "Intl.DateTimeFormat.prototype.resolvedOptions()")}} zurückgegeben wird, auch nie durch einen Alias ersetzt, obwohl Browser diese Bezeichner vor der Standardisierung durch Temporal traditionell kanonisiert haben. Andererseits geben {{jsxref("Intl/Locale/getTimeZones", "Intl.Locale.prototype.getTimeZones()")}} und {{jsxref("Intl.supportedValuesOf()")}} (`timeZone` Option) die aktuellsten Bezeichner zurück, während einige Browser früher den alten, nicht-primären Bezeichner zurückgegeben haben.

### RFC 9557 Format

`ZonedDateTime` Objekte können im [RFC 9557](https://datatracker.ietf.org/doc/html/rfc9557) Format, einer Erweiterung des [ISO 8601 / RFC 3339](https://datatracker.ietf.org/doc/html/rfc3339) Formats, serialisiert und geparst werden. Die Zeichenkette hat folgende Form (Leerzeichen sind nur zur besseren Lesbarkeit und sollten in der tatsächlichen Zeichenkette nicht vorhanden sein):

```plain
YYYY-MM-DD T HH:mm:ss.sssssssss Z/±HH:mm [time_zone_id] [u-ca=calendar_id]
```

- `YYYY`
  - : Entweder eine vierstellige Zahl oder eine sechsstellige Zahl mit einem `+` oder `-` Zeichen.
- `MM`
  - : Eine zweistellige Zahl von `01` bis `12`.
- `DD`
  - : Eine zweistellige Zahl von `01` bis `31`. Die `YYYY`, `MM`, und `DD` Komponenten können durch `-` oder nichts getrennt werden.
- `T` {{optional_inline}}
  - : Der Datum-Uhrzeit-Trenner, der `T`, `t` oder ein Leerzeichen sein kann. Nur vorhanden, wenn `HH` vorhanden ist.
- `HH` {{optional_inline}}
  - : Eine zweistellige Zahl von `00` bis `23`. Standard ist `00`.
- `mm` {{optional_inline}}
  - : Eine zweistellige Zahl von `00` bis `59`. Standard ist `00`.
- `ss.sssssssss` {{optional_inline}}
  - : Eine zweistellige Zahl von `00` bis `59`. Kann optional von einem `.` oder `,` und einer bis neun Ziffern folgen. Standardwert ist `00`. Die `HH`, `mm`, und `ss` Komponenten können durch `:` oder nichts getrennt werden. Man kann entweder nur `ss` oder sowohl `ss` als auch `mm` weglassen, sodass die Uhrzeit eine von drei Formen haben kann: `HH`, `HH:mm` oder `HH:mm:ss.sssssssss`.
- `Z/±HH:mm` {{optional_inline}}
  - : Entweder der UTC-Bezeichner `Z` oder `z`, oder ein UTC-Offset in der Form `+` oder `-` gefolgt von demselben Format wie die Zeitkomponente. Beachten Sie, dass die Unterminuten-Präzision (`:ss.sssssssss`) von anderen Systemen möglicherweise nicht unterstützt wird und akzeptiert, aber nie ausgegeben wird. Wenn weggelassen, wird der Offset vom Zeitzonenbezeichner abgeleitet. Wenn vorhanden, muss die Zeit ebenfalls angegeben werden. `Z` ist nicht dasselbe wie `+00:00`: Ersteres bedeutet, dass die Zeit in UTC-Form angegeben ist, unabhängig vom Zeitzonenbezeichner, während letzteres bedeutet, dass die Zeit in Ortszeit angegeben ist, die zufällig UTC+0 ist und gegen den Zeitzonenbezeichner über die [`offset` Option](#offset-mehrdeutigkeit) validiert wird.
- `[time_zone_id]`
  - : Ersetzen Sie `time_zone_id` durch den Zeitzonenbezeichner (benannt oder als Offset) wie oben beschrieben. Kann ein _kritisches Flag_ haben, indem der Bezeichner mit `!` vorangestellt wird: z. B. `[!America/New_York]`. Dieses Flag teilt anderen Systemen im Allgemeinen mit, dass es nicht ignoriert werden darf, wenn sie es nicht unterstützen. Beachten Sie, dass es für `Temporal.ZonedDateTime.from()` erforderlich ist: Wenn es weggelassen wird, wird ein `RangeError` verursacht. Wenn Sie ISO 8601 / RFC 3339 Zeichenketten ohne Zeitzonenbezeichner-Annotationen parsen möchten, verwenden Sie {{jsxref("Temporal/Instant/from", "Temporal.Instant.from()")}} stattdessen.
- `[u-ca=calendar_id]` {{optional_inline}}
  - : Ersetzen Sie `calendar_id` durch den zu verwendenden Kalender. Siehe [`Intl.supportedValuesOf()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/supportedValuesOf#supported_calendar_types) für eine Liste der häufig unterstützten Kalendertypen. Standard ist `[u-ca=iso8601]`. Kann ein _kritisches Flag_ haben, indem der Schlüssel mit `!` vorangestellt wird: z. B. `[!u-ca=iso8601]`. Dieses Flag teilt anderen Systemen im Allgemeinen mit, dass es nicht ignoriert werden darf, wenn sie es nicht unterstützen. Der `Temporal` Parser wird einen Fehler werfen, wenn die Annotationen zwei oder mehr Kalenderanmerkungen enthalten und eine davon kritisch ist. Beachten Sie, dass das `YYYY-MM-DD` immer als ISO 8601 Kalenderdatum interpretiert und dann in den angegebenen Kalender umgewandelt wird.

Als Eingabe werden andere Anmerkungen im `[key=value]` Format ignoriert und dürfen nicht das kritische Flag haben.

Beim Serialisieren können Sie die Anzahl der Bruchteilen von Sekunden konfigurieren, ob der Offset/Zeitzonen-ID/Kalender-ID angezeigt wird und ob ein kritisches Flag für die Annotationen hinzugefügt wird.

### Mehrdeutigkeit und Lücken von lokaler Zeit zu UTC-Zeit

Angesichts einer Zeitzone ist die Umwandlung von UTC in Ortszeit einfach: Man erhält zuerst den Offset mithilfe des Zeitzonennamens und des Moments und addiert dann den Offset zum Moment. Umgekehrt gilt dies nicht: Die Umrechnung von Ortszeit in UTC ist ohne einen expliziten Offset mehrdeutig, da eine Ortszeit null, einer oder mehreren UTC-Zeiten entsprechen kann. Betrachten Sie die häufigste Ursache: Sommerzeitumstellungen. Nehmen Sie New York als Beispiel. Sein Standardoffset ist UTC-5, aber während der DST werden alle Uhren um eine Stunde vorgedreht, sodass der Offset UTC-4 wird. In den USA finden Umstellungen um 2:00 Uhr Ortszeit statt, betrachten Sie daher diese beiden Umstellungstage:

| UTC-Zeit             | New York-Zeit             |
| -------------------- | ------------------------- |
| 2024-03-10T06:58:00Z | 2024-03-10T01:58:00-05:00 |
| 2024-03-10T06:59:00Z | 2024-03-10T01:59:00-05:00 |
| 2024-03-10T07:00:00Z | 2024-03-10T03:00:00-04:00 |
| ---                  | ---                       |
| 2024-11-03T05:58:00Z | 2024-11-03T01:58:00-04:00 |
| 2024-11-03T05:59:00Z | 2024-11-03T01:59:00-04:00 |
| 2024-11-03T06:00:00Z | 2024-11-03T01:00:00-05:00 |

Wie Sie sehen können, verschwand im März eine Stunde aus der Ortszeit, und im November gibt es zwei Stunden, die dieselbe Uhrzeit haben. Angenommen, wir hatten ein `PlainDateTime`, das "2024-03-10T02:05:00" sagt, und wir wollen es in der `America/New_York` Zeitzone interpretieren, wird es keine Zeit geben, die ihm entspricht, während ein `PlainDateTime`, das "2024-11-03T01:05:00" sagt, zwei verschiedenen Momenten entsprechen kann.

Wenn ein `ZonedDateTime` aus einer lokalen Zeit konstruiert wird (unter Verwendung von {{jsxref("Temporal/ZonedDateTime/from", "Temporal.ZonedDateTime.from()")}}, {{jsxref("Temporal/ZonedDateTime/with", "Temporal.ZonedDateTime.prototype.with()")}}, {{jsxref("Temporal/PlainDateTime/toZonedDateTime", "Temporal.PlainDateTime.prototype.toZonedDateTime()")}}), kann das Verhalten bei Mehrdeutigkeit und Lücken über die `disambiguation` Option konfiguriert werden:

- `earlier`
  - : Wenn es zwei mögliche Momente gibt, wählen Sie den früheren. Wenn es eine Lücke gibt, weichen Sie um die Lückendauer zurück.
- `later`
  - : Wenn es zwei mögliche Momente gibt, wählen Sie den späteren. Wenn es eine Lücke gibt, weichen Sie um die Lückendauer vor.
- `compatible` (Standard)
  - : Gleiches Verhalten wie bei {{jsxref("Date")}}: Verwenden Sie `later` für Lücken und `earlier` für Mehrdeutigkeiten.
- `reject`
  - : Werfen Sie einen `RangeError`, wann immer eine Mehrdeutigkeit oder eine Lücke besteht.

Es gibt mehrere Fälle, in denen es bei der Konstruktion eines `ZonedDateTime` keine Mehrdeutigkeit gibt:

- Wenn die Zeit in UTC über den `Z` Offset angegeben ist.
- Wenn der Offset explizit angegeben und verwendet wird (siehe unten).

### Offset-Mehrdeutigkeit

Wir haben bereits gezeigt, wie Mehrdeutigkeit entstehen kann, wenn eine Ortszeit in einer Zeitzone interpretiert wird, ohne dass ein expliziter Offset angegeben ist. Wenn jedoch ein expliziter Offset angegeben wird, entsteht ein weiterer Konflikt: zwischen dem wie angegebenen Offset und dem Offset, der aus der Zeitzone und der Ortszeit berechnet wird. Dies ist ein unvermeidbares Realitätsproblem: Wenn Sie eine Zeit in der Zukunft mit einem erwarteten Offset speichern, dann kann sich die Zeitzonendefinition vor diesem Zeitpunkt aufgrund politischer Erwägungen ändern. Nehmen wir an, wir stellen 2018 eine Erinnerung zur Zeit `2019-12-23T12:00:00-02:00[America/Sao_Paulo]` ein (was eine Sommerzeit ist; Brasilien ist auf der südlichen Halbkugel, daher tritt es im Oktober in die DST ein und im Februar aus), aber bevor diese Zeit eintritt, beschließt Brasilien Anfang 2019, die Sommerzeit nicht mehr zu beachten (DST aufzugeben), so dass der reale Offset `-03:00` wird. Sollte die Erinnerung jetzt noch mittags ausgelöst werden (die `local time` beibehalten), oder sollte sie um 11:00 Uhr ausgelöst werden (die `exact time` beibehalten)?

Bei der Konstruktion eines `ZonedDateTime` mit {{jsxref("Temporal/ZonedDateTime/from", "Temporal.ZonedDateTime.from()")}} oder wenn es mit der {{jsxref("Temporal/ZonedDateTime/with", "with()")}} Methode aktualisiert wird, kann das Verhalten für Offset-Mehrdeutigkeit über die `offset` Option konfiguriert werden:

- `use`
  - : Verwenden Sie den Offset, um die genaue Zeit zu berechnen. Diese Option "verwendet" den Offset bei der Bestimmung des Moments, der durch die Zeichenkette repräsentiert wird, was der gleiche Moment sein wird, der ursprünglich berechnet wurde, wenn wir die Zeit gespeichert haben, selbst wenn sich der Offset zu diesem Moment geändert hat. Der Zeitzonenbezeichner wird trotzdem verwendet, um dann den (möglicherweise aktualisierten) Offset zu ermitteln und diesen Offset zu verwenden, um die genaue Zeit in Ortszeit umzuwandeln.
- `ignore`
  - : Verwenden Sie den Zeitzonenbezeichner, um den Offset neu zu berechnen, ignorierend den Offset, der in der Zeichenkette angegeben ist. Diese Option behält dieselbe lokale Zeit bei, die ursprünglich berechnet wurde, als wir die Zeit gespeichert haben, kann jedoch einem unterschiedlichen Moment entsprechen. Beachten Sie, dass diese Option dieselbe lokale Zeitinterpretationsmehrdeutigkeit wie oben demonstriert verursachen kann, die mit der `disambiguation` Option aufgelöst wird.
- `reject`
  - : Werfen Sie einen `RangeError`, wann immer ein Konflikt zwischen dem Offset und dem Zeitzonenbezeichner besteht. Dies ist die Standardoption für {{jsxref("Temporal/ZonedDateTime/from", "Temporal.ZonedDateTime.from()")}}.
- `prefer`
  - : Verwenden Sie den Offset, wenn er gültig ist, andernfalls wird der Offset aus dem Zeitzonenbezeichner berechnet. Dies ist die Standardoption für {{jsxref("Temporal/ZonedDateTime/with", "Temporal.ZonedDateTime.prototype.with()")}} (siehe die Methode für weitere Details). Dies ist anders als `ignore`, da im Fall von lokaler Zeitmehrdeutigkeit der Offset verwendet wird, um ihn zu lösen, anstatt die `disambiguation` Option.

Beachten Sie, dass der `Z` Offset nicht gleich `+00:00` ist. Der `Z` Offset bedeutet "die Zeit in UTC ist bekannt, aber der Offset zur lokalen Zeit ist unbekannt", gemäß [RFC 9557](https://www.rfc-editor.org/rfc/rfc9557.html#name-update-to-rfc-3339). Wenn die Zeitzeichenkette den `Z` Offset verwendet, wird die `offset` Option ignoriert, und der Offset wird aus der Zeitzonen-ID abgeleitet. Andererseits ist der `+00:00` Offset als Einheimzeit-Offset interpretiert, der zufällig mit UTC übereinstimmt und gegen die Zeitzonen-ID validiert wird.

> [!NOTE]
> Obwohl {{jsxref("Temporal/Instant/from", "Temporal.Instant.from()")}} auch eine [RFC 9557](#rfc_9557_format) Zeichenkette in derselben Form verarbeitet, gibt es keine Mehrdeutigkeit, da es immer den Zeitzonenbezeichner ignoriert und nur den Offset liest.

## Konstruktor

- {{jsxref("Temporal/ZonedDateTime/ZonedDateTime", "Temporal.ZonedDateTime()")}} {{experimental_inline}}
  - : Erstellt ein neues `Temporal.ZonedDateTime` Objekt, indem die zu Grunde liegenden Daten direkt bereitgestellt werden.

## Statische Methoden

- {{jsxref("Temporal/ZonedDateTime/compare", "Temporal.ZonedDateTime.compare()")}}
  - : Gibt eine Nummer (-1, 0 oder 1) zurück, die angibt, ob die erste Datum-Uhrzeit vor, gleich der oder nach der zweiten Datum-Uhrzeit kommt. Entspricht dem Vergleich der {{jsxref("Temporal/ZonedDateTime/epochNanoseconds", "epochNanoseconds")}} der beiden Datum-Uhrzeiten.
- {{jsxref("Temporal/ZonedDateTime/from", "Temporal.ZonedDateTime.from()")}}
  - : Erstellt ein neues `Temporal.ZonedDateTime` Objekt aus einem anderen `Temporal.ZonedDateTime` Objekt, einem Objekt mit Datum-, Zeit- und Zeitzoneneigenschaften oder einer [RFC 9557](#rfc_9557_format) Zeichenkette.

## Instanz-Eigenschaften

Diese Eigenschaften sind in `Temporal.ZonedDateTime.prototype` definiert und werden von allen `Temporal.ZonedDateTime` Instanzen geteilt.

- {{jsxref("Temporal/ZonedDateTime/calendarId", "Temporal.ZonedDateTime.prototype.calendarId")}}
  - : Gibt eine Zeichenkette zurück, die den [Kalender](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars) repräsentiert, der zur Interpretation des internen ISO 8601 Datums verwendet wird.
- {{jsxref("Object/constructor", "Temporal.ZonedDateTime.prototype.constructor")}}
  - : Die Konstrukturfunktion, die das Objekt instanziiert hat. Für `Temporal.ZonedDateTime` Instanzen ist der Anfangswert der {{jsxref("Temporal/ZonedDateTime/ZonedDateTime", "Temporal.ZonedDateTime()")}} Konstruktor.
- {{jsxref("Temporal/ZonedDateTime/day", "Temporal.ZonedDateTime.prototype.day")}}
  - : Gibt eine positive Ganzzahl zurück, die den 1-basierten Tagesindex im Monat dieses Datums darstellt, was die gleiche Tageszahl ist, die man auf einem Kalender sehen würde. [Kalender](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars)-abhängig. Beginnt im Allgemeinen bei 1 und ist kontinuierlich, aber nicht immer.
- {{jsxref("Temporal/ZonedDateTime/dayOfWeek", "Temporal.ZonedDateTime.prototype.dayOfWeek")}}
  - : Gibt eine positive Ganzzahl zurück, die den 1-basierten Tagesindex in der Woche dieses Datums darstellt. Tage in einer Woche sind sequentiell von `1` bis {{jsxref("Temporal/ZonedDateTime/daysInWeek", "daysInWeek")}} nummeriert, wobei jede Zahl ihrem Namen zugeordnet ist. [Kalender](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars)-abhängig. 1 repräsentiert normalerweise Montag im Kalender, selbst wenn lokale Gegebenheiten den Kalender möglicherweise einen anderen Tag als ersten Tag der Woche betrachten (siehe {{jsxref("Intl/Locale/getWeekInfo", "Intl.Locale.prototype.getWeekInfo()")}}).
- {{jsxref("Temporal/ZonedDateTime/dayOfYear", "Temporal.ZonedDateTime.prototype.dayOfYear")}}
  - : Gibt eine positive Ganzzahl zurück, die den 1-basierten Tagesindex im Jahr dieses Datums darstellt. Der erste Tag dieses Jahres ist `1`, und der letzte Tag ist der {{jsxref("Temporal/ZonedDateTime/daysInYear", "daysInYear")}}. [Kalender](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars)-abhängig.
- {{jsxref("Temporal/ZonedDateTime/daysInMonth", "Temporal.ZonedDateTime.prototype.daysInMonth")}}
  - : Gibt eine positive Ganzzahl zurück, die die Anzahl der Tage im Monat dieses Datums darstellt. [Kalender](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars)-abhängig.
- {{jsxref("Temporal/ZonedDateTime/daysInWeek", "Temporal.ZonedDateTime.prototype.daysInWeek")}}
  - : Gibt eine positive Ganzzahl zurück, die die Anzahl der Tage in der Woche dieses Datums darstellt. [Kalender](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars)-abhängig. Für den ISO 8601 Kalender ist dies immer 7, aber in anderen Kalendersystemen kann es von Woche zu Woche variieren.
- {{jsxref("Temporal/ZonedDateTime/daysInYear", "Temporal.ZonedDateTime.prototype.daysInYear")}}
  - : Gibt eine positive Ganzzahl zurück, die die Anzahl der Tage im Jahr dieses Datums darstellt. [Kalender](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars)-abhängig. Für den ISO 8601 Kalender ist dies 365 oder 366 in einem Schaltjahr.
- {{jsxref("Temporal/ZonedDateTime/epochMilliseconds", "Temporal.ZonedDateTime.prototype.epochMilliseconds")}}
  - : Gibt eine Ganzzahl zurück, die die Anzahl der Millisekunden darstellt, die seit dem Unix-Epoch (Mitternacht zu Beginn des 1. Januar 1970, UTC) bis zu diesem Moment verstrichen sind. Entspricht der Teilung von `epochNanoseconds` durch `1e6` und der Abrundung des Ergebnisses.
- {{jsxref("Temporal/ZonedDateTime/epochNanoseconds", "Temporal.ZonedDateTime.prototype.epochNanoseconds")}}
  - : Gibt einen {{jsxref("BigInt")}} zurück, der die Anzahl der Nanosekunden darstellt, die seit dem Unix-Epoch (Mitternacht zu Beginn des 1. Januar 1970, UTC) bis zu diesem Moment verstrichen sind.
- {{jsxref("Temporal/ZonedDateTime/era", "Temporal.ZonedDateTime.prototype.era")}}
  - : Gibt eine kalenderabhängige Kleinbuchstabenkette zurück, die die Ära dieses Datums darstellt, oder `undefined`, wenn der Kalender keine Ären verwendet (z.B. ISO 8601). `era` und `eraYear` zusammen identifizieren ein Jahr in einem Kalender eindeutig, auf dieselbe Weise wie `year`. [Kalender](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars)-abhängig. Für Gregorianisch ist es entweder `"gregory"` oder `"gregory-inverse"`.
- {{jsxref("Temporal/ZonedDateTime/eraYear", "Temporal.ZonedDateTime.prototype.eraYear")}}
  - : Gibt eine nicht negative Ganzzahl zurück, die das Jahr dieses Datums innerhalb der Ära darstellt, oder `undefined`, wenn der Kalender keine Ären verwendet (z.B. ISO 8601). Der Jahr-Index beginnt normalerweise bei 1 (häufiger) oder 0, und Jahre in einer Ära können mit der Zeit abnehmen (z.B. Gregorianisch v. Chr.). `era` und `eraYear` zusammen identifizieren ein Jahr in einem Kalender eindeutig, auf dieselbe Weise wie `year`. [Kalender](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars)-abhängig.
- {{jsxref("Temporal/ZonedDateTime/hour", "Temporal.ZonedDateTime.prototype.hour")}}
  - : Gibt eine Ganzzahl von 0 bis 23 zurück, die die Stundenkomponente dieser Zeit darstellt.
- {{jsxref("Temporal/ZonedDateTime/hoursInDay", "Temporal.ZonedDateTime.prototype.hoursInDay")}}
  - : Gibt eine positive Ganzzahl zurück, die die Anzahl der Stunden am Tag dieses Datums in der Zeitzone darstellt. Sie kann im Falle von Offset-Änderungen wie der Sommerzeit mehr oder weniger als 24 sein.
- {{jsxref("Temporal/ZonedDateTime/inLeapYear", "Temporal.ZonedDateTime.prototype.inLeapYear")}}
  - : Gibt einen booleschen Wert zurück, der angibt, ob dieses Datum in einem Schaltjahr liegt. Ein Schaltjahr ist ein Jahr, das mehr Tage hat (aufgrund eines Schalttages oder eines Schaltmonats) als ein gewöhnliches Jahr. [Kalender](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars)-abhängig.
- {{jsxref("Temporal/ZonedDateTime/microsecond", "Temporal.ZonedDateTime.prototype.microsecond")}}
  - : Gibt eine Ganzzahl von 0 bis 999 zurück, die die Mikrosekundenkomponente (10<sup>-6</sup> Sekunden) dieser Zeit darstellt.
- {{jsxref("Temporal/ZonedDateTime/millisecond", "Temporal.ZonedDateTime.prototype.millisecond")}}
  - : Gibt eine Ganzzahl von 0 bis 999 zurück, die die Millisekundenkomponente (10<sup>-3</sup> Sekunden) dieser Zeit darstellt.
- {{jsxref("Temporal/ZonedDateTime/minute", "Temporal.ZonedDateTime.prototype.minute")}}
  - : Gibt eine Ganzzahl von 0 bis 59 zurück, die die Minutenkomponente dieser Zeit darstellt.
- {{jsxref("Temporal/ZonedDateTime/month", "Temporal.ZonedDateTime.prototype.month")}}
  - : Gibt eine positive Ganzzahl zurück, die den 1-basierten Monatsindex im Jahr dieses Datums darstellt. Der erste Monat dieses Jahres ist `1`, und der letzte Monat ist der {{jsxref("Temporal/ZonedDateTime/monthsInYear", "monthsInYear")}}. [Kalender](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars)-abhängig. Beachten Sie, dass im Gegensatz zu {{jsxref("Date.prototype.getMonth()")}}, der Index 1-basiert ist. Wenn der Kalender Schaltmonate hat, dann kann der Monat mit dem gleichen {{jsxref("Temporal/ZonedDateTime/monthCode", "monthCode")}} unterschiedliche `month` Indizes für verschiedene Jahre haben.
- {{jsxref("Temporal/ZonedDateTime/monthCode", "Temporal.ZonedDateTime.prototype.monthCode")}}
  - : Gibt eine kalenderabhängige Zeichenkette zurück, die den Monat dieses Datums darstellt. [Kalender](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars)-abhängig. Normalerweise ist es `M` plus eine zweistellige Monatszahl. Für Schaltmonate ist es der Code des Vormonats, gefolgt von `L`. Wenn der Schaltmonat der erste Monat des Jahres ist, ist der Code `M00L`.
- {{jsxref("Temporal/ZonedDateTime/monthsInYear", "Temporal.ZonedDateTime.prototype.monthsInYear")}}
  - : Gibt eine positive Ganzzahl zurück, die die Anzahl der Monate im Jahr dieses Datums darstellt. [Kalender](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars)-abhängig. Für den ISO 8601 Kalender ist dies immer 12, aber in anderen Kalendersystemen kann es variieren.
- {{jsxref("Temporal/ZonedDateTime/nanosecond", "Temporal.ZonedDateTime.prototype.nanosecond")}}
  - : Gibt eine Ganzzahl von 0 bis 999 zurück, die die Nanosekundenkomponente (10<sup>-9</sup> Sekunden) dieser Zeit darstellt.
- {{jsxref("Temporal/ZonedDateTime/offset", "Temporal.ZonedDateTime.prototype.offset")}}
  - : Gibt eine Zeichenkette zurück, die den [Offset](#zeitzonen_und_offsets) darstellt, der zur Interpretation des internen Moments verwendet wird, in der Form `±HH:mm` (oder `±HH:mm:ss.sssssssss` mit so viel Unterminuten-Präzision wie nötig).
- {{jsxref("Temporal/ZonedDateTime/offsetNanoseconds", "Temporal.ZonedDateTime.prototype.offsetNanoseconds")}}
  - : Gibt eine Ganzzahl zurück, die den [Offset](#zeitzonen_und_offsets) darstellt, der zur Interpretation des internen Moments verwendet wird, als Anzahl der Nanosekunden (positiv oder negativ).
- {{jsxref("Temporal/ZonedDateTime/second", "Temporal.ZonedDateTime.prototype.second")}}
  - : Gibt eine Ganzzahl von 0 bis 59 zurück, die die Sekundenkomponente dieser Zeit darstellt.
- {{jsxref("Temporal/ZonedDateTime/timeZoneId", "Temporal.ZonedDateTime.prototype.timeZoneId")}}
  - : Gibt eine Zeichenkette zurück, die den [Zeitzonenbezeichner](#zeitzonen_und_offsets) darstellt, der zur Interpretation des internen Moments verwendet wird. Es verwendet dieselbe Zeichenkette, die beim Konstruieren des `Temporal.ZonedDateTime` Objekts verwendet wurde, die entweder ein IANA-Zeitzonenname oder ein fester Offset ist.
- {{jsxref("Temporal/ZonedDateTime/weekOfYear", "Temporal.ZonedDateTime.prototype.weekOfYear")}}
  - : Gibt eine positive Ganzzahl zurück, die den 1-basierten Wochenindex im {{jsxref("Temporal/ZonedDateTime/yearOfWeek", "yearOfWeek")}} dieses Datums darstellt, oder `undefined`, wenn der Kalender kein gut definiertes Wochensystem hat. Die erste Woche des Jahres ist `1`. [Kalender](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars)-abhängig. Beachten Sie, dass beim ISO 8601 die ersten und letzten Tage des Jahres der letzten Woche des vorherigen Jahres oder der ersten Woche des nächsten Jahres zugeschrieben werden, wodurch das `yearOfWeek` um 1 abweichen kann.
- {{jsxref("Temporal/ZonedDateTime/year", "Temporal.ZonedDateTime.prototype.year")}}
  - : Gibt eine Ganzzahl zurück, die die Anzahl der Jahre dieses Datums relativ zum Beginn eines kalender-spezifischen Epochenjahres darstellt. [Kalender](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars)-abhängig. Normalerweise ist Jahr 1 entweder das erste Jahr der neuesten Ära oder das ISO 8601 Jahr `0001`. Wenn die Epoche in der Mitte des Jahres liegt, wird das Jahr vor und nach dem Startdatum der Ära denselben Wert aufweisen.
- {{jsxref("Temporal/ZonedDateTime/yearOfWeek", "Temporal.ZonedDateTime.prototype.yearOfWeek")}}
  - : Gibt eine Ganzzahl zurück, die das Jahr angibt, das mit der {{jsxref("Temporal/ZonedDateTime/weekOfYear", "weekOfYear")}} dieses Datums zusammenpassen soll, oder `undefined`, wenn der Kalender kein gut definiertes Wochensystem hat. [Kalender](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars)-abhängig. Normalerweise ist dies das Jahr des Datums, aber für ISO 8601 können die ersten und letzten Tage des Jahres der letzten Woche des vorherigen Jahres oder der ersten Woche des nächsten Jahres zugeschrieben werden, wodurch sich das `yearOfWeek` um 1 unterscheidet.
- `Temporal.ZonedDateTime.prototype[Symbol.toStringTag]`
  - : Der Anfangswert der [`[Symbol.toStringTag]`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag) Eigenschaft ist die Zeichenkette `"Temporal.ZonedDateTime"`. Diese Eigenschaft wird in {{jsxref("Object.prototype.toString()")}} verwendet.

## Instanz-Methoden

- {{jsxref("Temporal/ZonedDateTime/add", "Temporal.ZonedDateTime.prototype.add()")}}
  - : Gibt ein neues `Temporal.ZonedDateTime` Objekt zurück, das diese Datum-Uhrzeit um eine angegebene Dauer (in einer durch {{jsxref("Temporal/Duration/from", "Temporal.Duration.from()")}} umwandelbaren Form) nach vorne verschoben darstellt.
- {{jsxref("Temporal/ZonedDateTime/equals", "Temporal.ZonedDateTime.prototype.equals()")}}
  - : Gibt `true` zurück, wenn diese Datum-Uhrzeit im Wert einer anderen Datum-Uhrzeit (in einer durch {{jsxref("Temporal/ZonedDateTime/from", "Temporal.ZonedDateTime.from()")}} umwandelbaren Form) entspricht, und `false` andernfalls. Sie werden sowohl durch ihre Momentwerte, Zeitzonen als auch ihre Kalender verglichen, sodass zwei Datum-Uhrzeiten aus verschiedenen Kalendern oder Zeitzonen als gleich durch {{jsxref("Temporal/ZonedDateTime/compare", "Temporal.ZonedDateTime.compare()")}} betrachtet werden können, aber nicht durch `equals()`.
- {{jsxref("Temporal/ZonedDateTime/getTimeZoneTransition", "Temporal.ZonedDateTime.prototype.getTimeZoneTransition()")}}
  - : Gibt ein `Temporal.ZonedDateTime` Objekt zurück, das den ersten Moment nach oder vor diesem Moment darstellt, an dem sich das UTC-Offset der Zeitzone ändert, oder `null`, wenn es keinen solchen Übergang gibt. Dies ist nützlich, um die Offset-Regeln einer Zeitzone zu ermitteln, wie ihr Sommerzeitmuster.
- {{jsxref("Temporal/ZonedDateTime/round", "Temporal.ZonedDateTime.prototype.round()")}}
  - : Gibt ein neues `Temporal.ZonedDateTime` Objekt zurück, das diese Datum-Uhrzeit auf die angegebene Einheit gerundet darstellt.
- {{jsxref("Temporal/ZonedDateTime/since", "Temporal.ZonedDateTime.prototype.since()")}}
  - : Gibt ein neues {{jsxref("Temporal.Duration")}} Objekt zurück, das die Dauer von einer anderen Datum-Uhrzeit (in einer durch {{jsxref("Temporal/ZonedDateTime/from", "Temporal.ZonedDateTime.from()")}} umwandelbaren Form) bis zu dieser Datum-Uhrzeit darstellt. Die Dauer ist positiv, wenn die andere Datum-Uhrzeit vor dieser Datum-Uhrzeit liegt, und negativ, wenn sie danach liegt.
- {{jsxref("Temporal/ZonedDateTime/startOfDay", "Temporal.ZonedDateTime.prototype.startOfDay()")}}
  - : Gibt ein `Temporal.ZonedDateTime` Objekt zurück, das den ersten Moment dieses Tages in der Zeitzone darstellt. Es hat normalerweise eine Uhrzeit von `00:00:00`, kann jedoch anders sein, wenn Mitternacht aufgrund von Offset-Änderungen nicht existiert, in welchem Fall die erste existierende Uhrzeit zurückgegeben wird.
- {{jsxref("Temporal/ZonedDateTime/subtract", "Temporal.ZonedDateTime.prototype.subtract()")}}
  - : Gibt ein neues `Temporal.ZonedDateTime` Objekt zurück, dass diese Datum-Uhrzeit um eine angegebene Dauer (in einer durch {{jsxref("Temporal/Duration/from", "Temporal.Duration.from()")}} umwandelbaren Form) rückwärts verschoben darstellt.
- {{jsxref("Temporal/ZonedDateTime/toInstant", "Temporal.ZonedDateTime.prototype.toInstant()")}}
  - : Gibt ein neues {{jsxref("Temporal.Instant")}} Objekt zurück, das den Moment dieser Datum-Uhrzeit darstellt.
- {{jsxref("Temporal/ZonedDateTime/toJSON", "Temporal.ZonedDateTime.prototype.toJSON()")}}
  - : Gibt eine Zeichenkette zurück, die diese Datum-Uhrzeit im gleichen [RFC 9557 Format](#rfc_9557_format) wie {{jsxref("Temporal/ZonedDateTime/toString", "toString()")}} darstellt. Soll implizit durch {{jsxref("JSON.stringify()")}} aufgerufen werden.
- {{jsxref("Temporal/ZonedDateTime/toLocaleString", "Temporal.ZonedDateTime.prototype.toLocaleString()")}}
  - : Gibt eine Zeichenkette mit einer sprachabhängigen Darstellung dieser Datum-Uhrzeit zurück.
- {{jsxref("Temporal/ZonedDateTime/toPlainDate", "Temporal.ZonedDateTime.prototype.toPlainDate()")}}
  - : Gibt ein neues {{jsxref("Temporal.PlainDate")}} Objekt zurück, das den Datumsanteil dieser Datum-Uhrzeit darstellt.
- {{jsxref("Temporal/ZonedDateTime/toPlainDateTime", "Temporal.ZonedDateTime.prototype.toPlainDateTime()")}}
  - : Gibt ein neues {{jsxref("Temporal.PlainDateTime")}} Objekt zurück, das das Datum und die Zeit dieser Datum-Uhrzeit darstellt. Nur die Zeitzoneninformationen werden entfernt.
- {{jsxref("Temporal/ZonedDateTime/toPlainTime", "Temporal.ZonedDateTime.prototype.toPlainTime()")}}
  - : Gibt ein neues {{jsxref("Temporal.PlainTime")}} Objekt zurück, das den Zeitanteil dieser Datum-Uhrzeit darstellt.
- {{jsxref("Temporal/ZonedDateTime/toString", "Temporal.ZonedDateTime.prototype.toString()")}}
  - : Gibt eine Zeichenkette zurück, die diese Datum-Uhrzeit im [RFC 9557 Format](#rfc_9557_format) darstellt.
- {{jsxref("Temporal/ZonedDateTime/until", "Temporal.ZonedDateTime.prototype.until()")}}
  - : Gibt ein neues {{jsxref("Temporal.Duration")}} Objekt zurück, das die Dauer von dieser Datum-Uhrzeit bis zu einer anderen Datum-Uhrzeit (in einer durch {{jsxref("Temporal/ZonedDateTime/from", "Temporal.ZonedDateTime.from()")}} umwandelbaren Form) darstellt. Die Dauer ist positiv, wenn die andere Datum-Uhrzeit nach dieser Datum-Uhrzeit liegt, und negativ, wenn sie davor liegt.
- {{jsxref("Temporal/ZonedDateTime/valueOf", "Temporal.ZonedDateTime.prototype.valueOf()")}}
  - : Wirft einen {{jsxref("TypeError")}}, der verhindert, dass `Temporal.ZonedDateTime` Instanzen [implizit in Primitiven umgewandelt](/de/docs/Web/JavaScript/Guide/Data_structures#primitive_coercion) werden, wenn sie in arithmetischen oder Vergleichsoperationen verwendet werden.
- {{jsxref("Temporal/ZonedDateTime/with", "Temporal.ZonedDateTime.prototype.with()")}}
  - : Gibt ein neues `Temporal.ZonedDateTime` Objekt zurück, das diese Datum-Uhrzeit mit einigen Feldern ersetzt durch neue Werte darstellt.
- {{jsxref("Temporal/ZonedDateTime/withCalendar", "Temporal.ZonedDateTime.prototype.withCalendar()")}}
  - : Gibt ein neues `Temporal.ZonedDateTime` Objekt zurück, das diese Datum-Uhrzeit in dem neuen Kalendersystem interpretiert darstellt.
- {{jsxref("Temporal/ZonedDateTime/withPlainTime", "Temporal.ZonedDateTime.prototype.withPlainTime()")}}
  - : Gibt ein neues `Temporal.ZonedDateTime` Objekt zurück, das diese Datum-Uhrzeit mit dem Zeitanteil vollständig durch die neue Uhrzeit ersetzt darstellt (in einer durch {{jsxref("Temporal/PlainTime/from", "Temporal.PlainTime.from()")}} umwandelbaren Form).
- {{jsxref("Temporal/ZonedDateTime/withTimeZone", "Temporal.ZonedDateTime.prototype.withTimeZone()")}}
  - : Gibt ein neues `Temporal.ZonedDateTime` Objekt zurück, das denselben Moment wie diese Datum-Uhrzeit aber in der neuen Zeitzone darstellt.

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
