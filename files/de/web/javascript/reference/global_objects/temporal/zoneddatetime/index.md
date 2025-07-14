---
title: Temporal.ZonedDateTime
slug: Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime
l10n:
  sourceCommit: 46713c7a67d1f06b739d1b541a64c97adf613b7c
---

{{SeeCompatTable}}

Das **`Temporal.ZonedDateTime`** Objekt stellt ein Datum und eine Uhrzeit mit einer Zeitzone dar. Es wird grundsätzlich als Kombination aus einem [Instant](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/Instant), einer Zeitzone und einem Kalendersystem repräsentiert.

## Beschreibung

Ein `ZonedDateTime` fungiert als Brücke zwischen einer exakten Zeit und einer "Wall Clock"-Zeit: Es repräsentiert gleichzeitig einen Moment in der Geschichte (wie ein {{jsxref("Temporal.Instant")}}) und eine lokale "Wall Clock"-Zeit (wie ein {{jsxref("Temporal.PlainDateTime")}}). Dies wird erreicht, indem der Moment, die Zeitzone und das Kalendersystem gespeichert werden. Die Zeitzone wird verwendet, um zwischen dem Moment und der lokalen Zeit zu konvertieren, und das Kalendersystem dient dazu, die lokale Zeit zu interpretieren.

`ZonedDateTime` ist die einzige `Temporal`-Klasse, die einer Zeitzone-bewusst ist. Durch die Hinzufügung einer Zeitzone unterscheiden sich `ZonedDateTime` Objekte in ihrem Verhalten deutlich von {{jsxref("Temporal.PlainDateTime")}} Objekten. Vor allem kann nicht mehr davon ausgegangen werden, dass "die Zeit 1 Minute danach" jeden Tag gleich ist oder dass ein Tag 24 Stunden hat. Im schlimmsten Fall kann ein ganzer Tag im lokalen Kalender fehlen. Unten bieten wir einen kurzen Überblick über Zeitzonen und Offsets und wie sie die Umrechnung zwischen UTC- und Ortszeit beeinflussen.

### Zeitzonen und Offsets

Alle Zeiten in JavaScript haben einen goldenen Standard: die UTC-Zeit, die kontinuierlich und gleichmäßig inkrementiert wird, sobald physische Zeit fortschreitet. Im Gegensatz dazu sind Benutzer mehr an ihrer lokalen Zeit interessiert, die sie auf ihren Kalendern und Uhren ablesen. Der Prozess der Umrechnung zwischen UTC- und Ortszeit beinhaltet ein Zeitzonen-_Offset_, das wie folgt berechnet wird:

```plain
local time = UTC time + offset
```

Zum Beispiel, wenn die UTC-Zeit 1970-01-01T00:00:00 ist und das Offset "-05:00" beträgt, dann ist die lokale Zeit:

```plain
1970-01-01T00:00:00 + -05:00 = 1969-12-31T19:00:00
```

Indem diese Ortszeit mit dem Offset versehen wird, und somit diese Zeit als "1969-12-31T19:00:00-05:00" ausgedrückt wird, kann sie jetzt eindeutig als ein Moment in der Geschichte verstanden werden.

Um das Offset zu kennen, benötigen wir zwei Informationen, die _Zeitzone_ und den _Moment_. Die Zeitzone ist ein Gebiet auf der Erde, in dem dasselbe Offset zu allen Zeiten verwendet wird. Zwei Uhren in derselben Zeitzone zeigen immer gleichzeitig dieselbe Zeit an, aber das Offset ist nicht unbedingt konstant: das heißt, die Zeiten dieser Uhren können sich abrupt ändern. Dies geschieht häufig während der Umstellungen der Sommerzeit, bei denen das Offset um eine Stunde geändert wird, was zweimal im Jahr passiert. Offsets können sich auch dauerhaft ändern aufgrund politischer Änderungen, z.B. wenn ein Land die Zeitzonen wechselt.

Die Zeitzonen sind in der [IANA Time Zone Database](https://www.iana.org/time-zones) gespeichert. Jede IANA-Zeitzone hat:

- Eine _primäre Zeitzonenkennung_, die die Zeitzone eindeutig identifiziert. Sie bezieht sich in der Regel auf ein geografisches Gebiet, das von einer Stadt verankert ist (z.B. `Europe/Paris` oder `Africa/Kampala`), kann aber auch einzeln-offset-Zeitzonen wie `UTC` (ein konstantes `+00:00` Offset) oder `Etc/GMT+5` (aus historischen Gründen ein negatives Offset `-05:00`) bezeichnen. Aus historischen Gründen ist der primäre Name für die UTC-Zeitzone `UTC`, obwohl es in IANA `Etc/UTC` ist.
- Eine _Zeitzonendefinition_ in Form einer Tabelle, die UTC-Datum/Uhrzeit-Bereiche (einschließlich zukünftiger Bereiche) mit spezifischen Offsets verknüpft.
- Null oder mehr _nicht-primäre Zeitzonenkennungen_, die Aliase zur primären Zeitzonenkennung sind. Dies sind in der Regel historische Namen, die nicht mehr in Gebrauch sind, aber aus Kompatibilitätsgründen beibehalten werden. Siehe unten für weitere Informationen.

Als Eingabe werden benannte Kennungen ohne Beachtung der Groß-/Kleinschreibung abgeglichen. Intern werden sie in ihrer bevorzugten Schreibweise gespeichert, und nicht-primäre Kennungen werden _nicht_ in ihre primäre Kennung konvertiert.

> [!NOTE]
> Wenn Sie den Zeitzonennamen einstellen, möchten Sie ihn selten auf `"UTC"` setzen. `ZonedDateTime` soll für Benutzer angezeigt werden, aber kein Mensch lebt in der "UTC"-Zeitzone. Wenn Sie die Zeitzone zum Zeitpunkt der Konstruktion nicht kennen, aber die "Wall Clock"-Zeit kennen, verwenden Sie einen {{jsxref("Temporal.PlainDateTime")}}. Wenn Sie den genauen Moment kennen, verwenden Sie einen {{jsxref("Temporal.Instant")}}.

Wenn eine `Temporal`-API eine _Zeitzonenkennung_ akzeptiert, akzeptiert sie zusätzlich zu primären Zeitzonenkennungen und nicht-primären Zeitzonenkennungen auch eine _Offset-Zeitzonenkennung_, die in derselben Form wie das Offset vorliegt, jedoch ist Subminuten-Genauigkeit nicht erlaubt. Zum Beispiel, `+05:30`, `-08`, `+0600` sind alle gültige Offset-Kennungen. Intern werden Offset-Kennungen im `±HH:mm`-Format gespeichert.

> [!NOTE]
> Vermeiden Sie die Verwendung von Offset-Kennungen, wenn es eine benannte Zeitzone gibt, die Sie stattdessen verwenden können. Auch wenn eine Region immer ein einzelnes Offset verwendet hat, ist es besser, die benannte Kennung zu verwenden, um zukünftige politische Änderungen des Offsets abzusichern.
>
> Wenn eine Region mehrere Offsets verwendet (oder verwendet hat), ist die Verwendung ihrer benannten Zeitzone sogar noch wichtiger. Dies liegt daran, dass `Temporal.ZonedDateTime` Methoden wie `add` oder `with` verwenden kann, um neue Instanzen zu einem anderen Zeitpunkt zu erstellen. Wenn diese abgeleiteten Instanzen einem Moment entsprechen, der ein anderes Offset verwendet (zum Beispiel nach einer Umstellung der Sommerzeit), dann werden Ihre Berechnungen eine falsche lokale Zeit aufweisen. Die Verwendung einer benannten Zeitzone stellt sicher, dass lokale Daten und Zeiten immer für das richtige Offset für diesen Moment angepasst werden.

Zur Bequemlichkeit, wenn Sie einer `Temporal`-API wie `Temporal.ZonedDateTime.prototype.withTimeZone()` und der `timeZoneId`-Option von `Temporal.ZonedDateTime.from()` eine Zeitzonenkennung bereitstellen, können Sie diese in einigen anderen Formen bereitstellen:

- Als eine andere `ZonedDateTime`-Instanz, deren `timeZoneId` verwendet wird.
- Als eine [RFC 9557-Zeichenfolge](#rfc_9557_format) mit einer Zeitzonenanmerkung, deren Zeitzonenkennung verwendet wird.
- Als eine ISO 8601 / RFC 3339-Zeichenfolge, die ein Offset enthält, dessen Offset als Offset-Kennung verwendet wird; oder, wenn `Z` verwendet wird, dann wird die `"UTC"`-Zeitzone verwendet. Diese Nutzung wird im Allgemeinen nicht empfohlen, weil, wie oben erwähnt, Offset-Kennungen die Fähigkeit fehlt, sicher andere `Temporal.ZonedDateTime`-Instanzen über eine Offset-Übergänge zu erzeugen, wie sie beim Beginn oder Ende der Sommerzeit auftreten. Stattdessen sollten Sie `Temporal.Instant` verwenden oder die tatsächliche benannte Zeitzone des Benutzers abrufen.

Die IANA-Zeitzonendatenbank ändert sich von Zeit zu Zeit, in der Regel um neue Zeitzonen im Zuge politischer Veränderungen hinzuzufügen. Gelegentlich werden jedoch IANA-Zeitzonenkennungen umbenannt, um eine aktualisierte englische Übersetzung eines Stadtnamens widerzuspiegeln oder um veraltete Namenskonventionen zu aktualisieren. Zum Beispiel sind hier einige bemerkenswerte Namensänderungen:

| Aktueller IANA-primärer Bezeichner | Alter, jetzt nicht-primärer Bezeichner |
| ---------------------------------- | -------------------------------------- |
| `America/Argentina/Buenos_Aires`   | `America/Buenos_Aires`                 |
| `Asia/Kolkata`                     | `Asia/Calcutta`                        |
| `Asia/Ho_Chi_Minh`                 | `Asia/Saigon`                          |
| `Europe/Kyiv`                      | `Europe/Kiev`                          |

Historisch gesehen, haben diese Umbenennungen Probleme für Programmierer verursacht, weil die Unicode-[CLDR-Datenbank](https://github.com/unicode-org/cldr/blob/main/common/bcp47/timezone.xml) (eine Bibliothek, auf die Browser angewiesen sind, um Zeitzonenkennungen und -daten bereitzustellen) IANAs Umbenennung aus [Stabilitätsgründen](https://unicode.org/reports/tr35/#Time_Zone_Identifiers) nicht folgte. Infolgedessen berichteten einige Browser wie Chrome und Safari die veralteten CLDR-Bezeichner, während andere Browser wie Firefox die Standardwerte von CLDR überschrieben und die aktuellen primären Bezeichner berichteten.

Mit der Einführung von Temporal ist dieses Verhalten nun standardisierter:

- Die [CLDR-Daten](https://github.com/unicode-org/cldr/blob/main/common/bcp47/timezone.xml) enthalten jetzt ein `"_iana"`-Attribut, das den aktuellsten Bezeichner angibt, wenn der ältere stabile Bezeichner umbenannt wurde. Browser können dieses neue Attribut verwenden, um Anrufern aktuelle Bezeichner bereitzustellen.
- Zeitzonenkennungen, die vom Programmierer bereitgestellt werden, werden niemals durch einen Alias ersetzt. Zum Beispiel, wenn der Anrufer `Asia/Calcutta` oder `Asia/Kolkata` als Bezeichnereingabe für {{jsxref("Temporal/ZonedDateTime/from", "Temporal.ZonedDateTime.from()")}} bereitstellt, wird derselbe Bezeichner in der resultierenden Instanz von {{jsxref("Temporal/ZonedDateTime/timeZoneId", "timeZoneId")}} zurückgegeben. Beachten Sie, dass die Groß- und Kleinschreibung der Ausgaben an IANA angepasst wird, so dass `ASIA/calCuTTa` als Eingabe eine {{jsxref("Temporal/ZonedDateTime/timeZoneId", "timeZoneId")}} von `Asia/Calcutta` als Ausgabe erzeugt.
- Wenn eine Zeitzonenkennung nicht vom Anrufer bereitgestellt wird, sondern stattdessen aus dem System selbst stammt (zum Beispiel bei Verwendung von {{jsxref("Temporal/Now/timeZoneId", "Temporal.Now.timeZoneId()")}}), werden in allen Browsern moderne Bezeichner zurückgegeben. Bei Stadtnamenänderungen gibt es eine Übergangszeit von zwei Jahren, bevor diese systembasierten Bezeichner-APIs den neuen Namen freilegen, was anderen Komponenten (wie einem Node-Server) Zeit gibt, ihre Kopien der IANA-Datenbank zu aktualisieren, um den neuen Namen zu erkennen.

Beachten Sie, dass die Zuschreibung primärer Bezeichner den Ländercode beibehält: zum Beispiel zeichnet die IANA-Datenbank `Atlantic/Reykjavik` als Alias für `Africa/Abidjan` auf, aber weil sie verschiedenen Ländern entsprechen (Island bzw. Côte d'Ivoire), werden sie als unterschiedliche primäre Bezeichner behandelt.

Diese Standardisierung gilt auch außerhalb von `Temporal`. Zum Beispiel, die `timeZone`-Option, die von {{jsxref("Intl/DateTimeFormat/resolvedOptions", "Intl.DateTimeFormat.prototype.resolvedOptions()")}} zurückgegeben wird, wird auch nie durch einen Alias ersetzt, obwohl Browser traditionell diese Bezeichner vor der Standardisierung durch Temporal kanonisiert haben. Auf der anderen Seite, {{jsxref("Intl/Locale/getTimeZones", "Intl.Locale.prototype.getTimeZones()")}} und {{jsxref("Intl.supportedValuesOf()")}} (`timeZone` Option) werden den aktuellsten Bezeichner zurückgeben, während einige Browser früher den alten, nicht-primären Bezeichner zurückgegeben haben.

### RFC 9557 Format

`ZonedDateTime` Objekte können unter Verwendung des [RFC 9557](https://datatracker.ietf.org/doc/html/rfc9557) Formats serialisiert und geparst werden, einer Erweiterung des [ISO 8601 / RFC 3339](https://datatracker.ietf.org/doc/html/rfc3339) Formats. Der String hat das folgende Format (Leerzeichen dienen nur der Lesbarkeit und sollten im eigentlichen String nicht vorhanden sein):

```plain
YYYY-MM-DD T HH:mm:ss.sssssssss Z/±HH:mm [time_zone_id] [u-ca=calendar_id]
```

- `YYYY`
  - : Entweder eine vierstellige Zahl, oder eine sechsstellige Zahl mit einem `+` oder `-` Zeichen.
- `MM`
  - : Eine zweistellige Zahl von `01` bis `12`.
- `DD`
  - : Eine zweistellige Zahl von `01` bis `31`. Die `YYYY`, `MM` und `DD` Komponenten können durch `-` oder nichts getrennt werden.
- `T` {{optional_inline}}
  - : Der Datum-Zeit-Trenner, der `T`, `t` oder ein Leerzeichen sein kann. Vorhanden, wenn und nur wenn `HH` vorhanden ist.
- `HH` {{optional_inline}}
  - : Eine zweistellige Zahl von `00` bis `23`. Standardmäßig `00`.
- `mm` {{optional_inline}}
  - : Eine zweistellige Zahl von `00` bis `59`. Standardmäßig `00`.
- `ss.sssssssss` {{optional_inline}}
  - : Eine zweistellige Zahl von `00` bis `59`. Kann optional durch ein `.` oder `,` gefolgt von einer bis neun Ziffern ergänzt werde. Standardmäßig `00`. Die `HH`, `mm` und `ss` Komponenten können durch `:` oder nichts getrennt werden. Sie können entweder nur `ss` oder sowohl `ss` als auch `mm` weglassen, sodass die Uhrzeit in einer von drei Formen vorliegen kann: `HH`, `HH:mm` oder `HH:mm:ss.sssssssss`.
- `Z/±HH:mm` {{optional_inline}}
  - : Entweder der UTC-Kennzeichner `Z` oder `z`, oder ein Offset von UTC in der Form `+` oder `-` gefolgt von demselben Format wie die Zeitkomponente. Beachten Sie, dass Subminuten-genauigkeit (`:ss.sssssssss`) von anderen Systemen möglicherweise nicht unterstützt wird und akzeptiert, aber nie ausgegeben wird. Wenn weggelassen, wird das Offset aus der Zeitzonenkennung abgeleitet. Wenn vorhanden, muss die Zeit ebenfalls bereitgestellt werden. `Z` ist nicht dasselbe wie `+00:00`: ersteres bedeutet, dass die Zeit in UTC-Form angegeben ist, unabhängig von der Zeitzonenkennung, während letzteres bedeutet, dass die Zeit in Ortszeit angegeben wird, die zufällig UTC+0 ist, und gegen die Zeitzonenkennung über die [`offset`-Option](#offset-mehrdeutigkeit) validiert wird.
- `[time_zone_id]`
  - : Ersetzen Sie `time_zone_id` durch die Zeitzonenkennung (benannt oder offset) wie oben beschrieben. Kann ein _kritisches Flag_ haben, indem der Bezeichner mit `!` versehen wird: zum Beispiel `[!America/New_York]`. Dieses Flag sagt anderen Systemen im Allgemeinen, dass es nicht ignoriert werden kann, wenn sie es nicht unterstützen. Beachten Sie, dass es für `Temporal.ZonedDateTime.from()` erforderlich ist: das Weglassen verursacht einen `RangeError`. Wenn Sie ISO 8601 / RFC 3339-Zeichenfolgen ohne Zeitzonenkennung-Parsen möchten, verwenden Sie {{jsxref("Temporal/Instant/from", "Temporal.Instant.from()")}} stattdessen.
- `[u-ca=calendar_id]` {{optional_inline}}
  - : Ersetzen Sie `calendar_id` durch den zu verwendenden Kalender. Siehe [`Intl.supportedValuesOf()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/supportedValuesOf#supported_calendar_types) für eine Liste der häufig unterstützten Kalenderarten. Standardmäßig `[u-ca=iso8601]`. Kann ein _kritisches Flag_ durch Präfixierung des Schlüssels mit `!` haben: zum Beispiel `[!u-ca=iso8601]`. Dieses Flag sagt anderen Systemen im Allgemeinen, dass es nicht ignoriert werden kann, wenn sie es nicht unterstützen. Der `Temporal` Parser wird einen Fehler werfen, wenn die Anmerkungen zwei oder mehr Kalenderanmerkungen enthalten und eine davon kritisch ist. Beachten Sie, dass das `YYYY-MM-DD` immer als ISO 8601-Kalenderdatum interpretiert und dann in den angegebenen Kalender konvertiert wird.

Als Eingabe werden andere Anmerkungen im `[key=value]`-Format ignoriert, und sie dürfen nicht das kritische Flag haben.

Beim Serialisieren können Sie die Bruchsekundenstellen, ob das Offset/die Zeitzonen-ID/der Kalender-ID angezeigt werden soll, und ob ein kritisches Flag für die Anmerkungen hinzugefügt werden soll, konfigurieren.

### Mehrdeutigkeit und Lücken von Ortszeit zu UTC-Zeit

Angenommen eine Zeitzone, ist die Umwandlung von UTC in Ortszeit einfach: Sie erhalten zuerst das Offset, indem Sie den Zeitzonennamen und den Moment verwenden, dann addieren Sie das Offset zum Moment. Das Umgekehrte ist nicht wahr: Die Umwandlung von Ortszeit in UTC-Zeit ohne ein explizites Offset ist mehrdeutig, da eine Ortszeit null, einem oder mehreren UTC-Zeiten entsprechen kann. Betrachten Sie die häufigste Ursache: Umstellungen der Sommerzeit. Nehmen Sie New York zum Beispiel. Sein Standardoffset ist UTC-5, aber während der Sommerzeit werden alle Uhren um eine Stunde vorgestellt, sodass das Offset UTC-4 wird. In den USA erfolgen die Umstellungen um 2:00 Uhr Ortszeit, betrachten Sie daher diese zwei Übergangstage:

| UTC-Zeit             | New York-Zeit             |
| -------------------- | ------------------------- |
| 2024-03-10T06:58:00Z | 2024-03-10T01:58:00-05:00 |
| 2024-03-10T06:59:00Z | 2024-03-10T01:59:00-05:00 |
| 2024-03-10T07:00:00Z | 2024-03-10T03:00:00-04:00 |
| ---                  | ---                       |
| 2024-11-03T05:58:00Z | 2024-11-03T01:58:00-04:00 |
| 2024-11-03T05:59:00Z | 2024-11-03T01:59:00-04:00 |
| 2024-11-03T06:00:00Z | 2024-11-03T01:00:00-05:00 |

Wie Sie sehen können, verschwand im März eine Stunde aus der lokalen Zeit, und im November haben wir zwei Stunden, die dieselbe Wandzeitzone besitzen. Angenommen, wir haben ein `PlainDateTime` gespeichert, das "2024-03-10T02:05:00" sagt, und wir möchten es in der `America/New_York`-Zeitzone interpretieren, es wird keine Zeit geben, die dazu gehört, während ein `PlainDateTime`, das "2024-11-03T01:05:00" sagt, zwei verschiedenen Momenten entsprechen kann.

Beim Erstellen eines `ZonedDateTime` aus einer Ortszeit (unter Verwendung von {{jsxref("Temporal/ZonedDateTime/from", "Temporal.ZonedDateTime.from()")}}, {{jsxref("Temporal/ZonedDateTime/with", "Temporal.ZonedDateTime.prototype.with()")}}, {{jsxref("Temporal/PlainDateTime/toZonedDateTime", "Temporal.PlainDateTime.prototype.toZonedDateTime()")}}), ist das Verhalten bei Mehrdeutigkeit und Lücken über die `disambiguation`-Option konfigurierbar:

- `earlier`
  - : Wenn es zwei mögliche Momente gibt, wählen Sie den früheren. Wenn es eine Lücke gibt, gehen Sie durch die Dauer der Lücke zurück.
- `later`
  - : Wenn es zwei mögliche Momente gibt, wählen Sie den späteren. Wenn es eine Lücke gibt, gehen Sie durch die Dauer der Lücke vorwärts.
- `compatible` (Standard)
  - : Gleiches Verhalten wie {{jsxref("Date")}}: verwenden Sie `later` für Lücken und `earlier` für Mehrdeutigkeiten.
- `reject`
  - : Werfen Sie einen `RangeError`, wann immer es eine Mehrdeutigkeit oder eine Lücke gibt.

Es gibt mehrere Fälle, in denen es keine Mehrdeutigkeit beim Erstellen eines `ZonedDateTime` gibt:

- Wenn die Zeit in UTC durch das `Z`-Offset angegeben wird.
- Wenn das Offset explizit bereitgestellt und verwendet wird (siehe unten).

### Offset-Mehrdeutigkeit

Wir haben bereits demonstriert, wie Mehrdeutigkeit durch die Interpretation einer Ortszeit in einer Zeitzone ohne Angabe eines expliziten Offsets entstehen kann. Wenn Sie jedoch ein explizites Offset angeben, entsteht ein anderer Konflikt: zwischen dem angegebenen Offset und dem aus der Zeitzone und der Ortszeit berechneten Offset. Dies ist ein unvermeidliches Problem in der realen Welt: Wenn Sie eine Zeit in der Zukunft mit einem erwarteten Offset speichern, kann vor dieser Zeit die Zeitzonendefinition aufgrund politischer Gründe geändert werden. Zum Beispiel, nehmen wir an, im Jahr 2018 setzen wir eine Erinnerung auf die Zeit `2019-12-23T12:00:00-02:00[America/Sao_Paulo]` (was eine Sommerzeit ist; Brasilien befindet sich auf der südlichen Hemisphäre und tritt im Oktober ein und im Februar aus der Sommerzeit). Aber vor dieser Zeit, Anfang 2019, entscheidet Brasilien, die Sommerzeit nicht mehr zu beachten, sodass das tatsächliche Offset `-03:00` wird. Soll die Erinnerung nun immer noch um Mittag ausgelöst werden (was die Ortszeit beibehält), oder soll sie um 11:00 Uhr ausgelöst werden (was die exakte Zeit beibehält)?

Bei der Erstellung eines `ZonedDateTime` mit {{jsxref("Temporal/ZonedDateTime/from", "Temporal.ZonedDateTime.from()")}} oder bei der Aktualisierung mit der {{jsxref("Temporal/ZonedDateTime/with", "with()")}}-Methode, ist das Verhalten bei Offset-Mehrdeutigkeit über die `offset`-Option konfigurierbar:

- `use`
  - : Verwenden Sie das Offset, um die exakte Zeit zu berechnen. Diese Option "verwendet" das Offset, um den Moment zu bestimmen, der durch den String repräsentiert wird, welcher derselbe Moment sein wird, wie er ursprünglich berechnet wurde, als wir die Zeit gespeichert haben, selbst wenn das Offset zu diesem Moment sich geändert hat. Die Zeitzonenkennung wird dennoch verwendet, um dann das (möglicherweise aktualisierte) Offset abzuleiten und dieses Offset zu verwenden, um die exakte Zeit in die Ortszeit zu konvertieren.
- `ignore`
  - : Verwenden Sie die Zeitzonenkennung, um das Offset neu zu berechnen, und ignorieren Sie das im String angegebene Offset. Diese Option behält die ursprüngliche Ortszeit bei, die beim Speichern der Zeit berechnet wurde, kann jedoch einem anderen Moment entsprechen. Beachten Sie, dass diese Option die gleiche Ortszeit-Interpretationsmehrdeutigkeit verursachen kann, wie oben gezeigt, die mit der `disambiguation`-Option gelöst wird.
- `reject`
  - : Werfen Sie einen `RangeError`, wann immer es einen Konflikt zwischen dem Offset und der Zeitzonenkennung gibt. Dies ist die Standardeinstellung für {{jsxref("Temporal/ZonedDateTime/from", "Temporal.ZonedDateTime.from()")}}.
- `prefer`
  - : Verwenden Sie das Offset, wenn es gültig ist, andernfalls berechnen Sie das Offset aus der Zeitzonenkennung. Dies ist die Standardeinstellung für {{jsxref("Temporal/ZonedDateTime/with", "Temporal.ZonedDateTime.prototype.with()")}} (siehe die Methode für mehr Details). Dies unterscheidet sich von `ignore`, weil im Fall von lokalem Zeitmehrdeutigkeiten das Offset zur Lösung verwendet wird, anstatt der `disambiguation`-Option.

Beachten Sie, dass das `Z`-Offset nicht gleichbedeutend mit `+00:00` ist. Das `Z`-Offset bedeutet "die Zeit in UTC ist bekannt, aber das Offset zur Ortszeit ist unbekannt", gemäß [RFC 9557](https://www.rfc-editor.org/rfc/rfc9557.html#name-update-to-rfc-3339). Wenn der Zeitstring das `Z`-Offset verwendet, wird die `offset`-Option ignoriert, und das Offset wird aus der Zeitzonenkennung abgeleitet. Andererseits wird das `+00:00`-Offset als ein lokales Zeit-Offset interpretiert, das zufällig UTC entspricht und gegen die Zeitzonenkennung validiert wird.

> [!NOTE]
> Obwohl {{jsxref("Temporal/Instant/from", "Temporal.Instant.from()")}} auch einen [RFC 9557](#rfc_9557_format) String in derselben Form annimmt, gibt es keine Mehrdeutigkeit, weil sie immer die Zeitzonenkennung ignoriert und nur das Offset liest.

## Konstruktor

- {{jsxref("Temporal/ZonedDateTime/ZonedDateTime", "Temporal.ZonedDateTime()")}} {{experimental_inline}}
  - : Erstellt ein neues `Temporal.ZonedDateTime` Objekt, indem direkt die zugrundeliegenden Daten bereitgestellt werden.

## Statische Methoden

- {{jsxref("Temporal/ZonedDateTime/compare", "Temporal.ZonedDateTime.compare()")}} {{experimental_inline}}
  - : Gibt eine Zahl zurück (-1, 0 oder 1), die angibt, ob das erste Datum-Zeit vor, gleich oder nach dem zweiten Datum-Zeit liegt. Entspricht dem Vergleich der {{jsxref("Temporal/ZonedDateTime/epochNanoseconds", "epochNanoseconds")}} der beiden Datum-Zeiten.
- {{jsxref("Temporal/ZonedDateTime/from", "Temporal.ZonedDateTime.from()")}} {{experimental_inline}}
  - : Erstellt ein neues `Temporal.ZonedDateTime` Objekt aus einem anderen `Temporal.ZonedDateTime` Objekt, einem Objekt mit Datum-, Uhrzeit- und Zeitzoneneigenschaften oder einem [RFC 9557](#rfc_9557_format) String.

## Instanz-Eigenschaften

Diese Eigenschaften sind auf `Temporal.ZonedDateTime.prototype` definiert und werden von allen `Temporal.ZonedDateTime` Instanzen geteilt.

- {{jsxref("Temporal/ZonedDateTime/calendarId", "Temporal.ZonedDateTime.prototype.calendarId")}} {{experimental_inline}}
  - : Gibt einen String zurück, der den verwendeten [Kalender](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars) zur Interpretation des internen ISO 8601 Datums repräsentiert.
- {{jsxref("Object/constructor", "Temporal.ZonedDateTime.prototype.constructor")}}
  - : Die Konstruktorfunktion, die das Instanzobjekt erstellt hat. Für `Temporal.ZonedDateTime` Instanzen ist der Anfangswert der {{jsxref("Temporal/ZonedDateTime/ZonedDateTime", "Temporal.ZonedDateTime()")}} Konstruktor.
- {{jsxref("Temporal/ZonedDateTime/day", "Temporal.ZonedDateTime.prototype.day")}} {{experimental_inline}}
  - : Gibt eine positive Ganzzahl zurück, die den 1-basierten Tag-Index im Monat dieses Datums darstellt, dasselbe Tag, das man in einem Kalender sehen würde. [Kalender](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars)-abhängig, beginnt normalerweise bei 1 und ist fortlaufend, aber nicht immer.
- {{jsxref("Temporal/ZonedDateTime/dayOfWeek", "Temporal.ZonedDateTime.prototype.dayOfWeek")}} {{experimental_inline}}
  - : Gibt eine positive Ganzzahl zurück, die den 1-basierten Tag-Index in der Woche dieses Datums darstellt. Tage in einer Woche sind sequentiell von `1` bis {{jsxref("Temporal/ZonedDateTime/daysInWeek", "daysInWeek")}} nummeriert, wobei jede Zahl ihrem Namen zugeordnet ist. [Kalender](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars)-abhängig. 1 steht normalerweise für Montag im Kalender, obwohl bei Kalendern, die verwendet werden, ein anderer Tag als der erste Tag der Woche betrachtet wird (siehe {{jsxref("Intl/Locale/getWeekInfo", "Intl.Locale.prototype.getWeekInfo()")}}).
- {{jsxref("Temporal/ZonedDateTime/dayOfYear", "Temporal.ZonedDateTime.prototype.dayOfYear")}} {{experimental_inline}}
  - : Gibt eine positive Ganzzahl zurück, die den 1-basierten Tag-Index im Jahr dieses Datums darstellt. Der erste Tag dieses Jahres ist `1`, und der letzte Tag ist {{jsxref("Temporal/ZonedDateTime/daysInYear", "daysInYear")}}. [Kalender](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars)-abhängig.
- {{jsxref("Temporal/ZonedDateTime/daysInMonth", "Temporal.ZonedDateTime.prototype.daysInMonth")}} {{experimental_inline}}
  - : Gibt eine positive Ganzzahl zurück, die die Anzahl der Tage im Monat dieses Datums darstellt. [Kalender](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars)-abhängig.
- {{jsxref("Temporal/ZonedDateTime/daysInWeek", "Temporal.ZonedDateTime.prototype.daysInWeek")}} {{experimental_inline}}
  - : Gibt eine positive Ganzzahl zurück, die die Anzahl der Tage in der Woche dieses Datums darstellt. [Kalender](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars)-abhängig. Für den ISO 8601 Kalender ist dies immer 7, aber in anderen Kalendersystemen kann es von Woche zu Woche variieren.
- {{jsxref("Temporal/ZonedDateTime/daysInYear", "Temporal.ZonedDateTime.prototype.daysInYear")}} {{experimental_inline}}
  - : Gibt eine positive Ganzzahl zurück, die die Anzahl der Tage im Jahr dieses Datums darstellt. [Kalender](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars)-abhängig. Für den ISO 8601 Kalender ist dies 365, oder 366 in einem Schaltjahr.
- {{jsxref("Temporal/ZonedDateTime/epochMilliseconds", "Temporal.ZonedDateTime.prototype.epochMilliseconds")}} {{experimental_inline}}
  - : Gibt eine Ganzzahl zurück, welche die Anzahl der Millisekunden darstellt, die seit dem Unix-Epoch (Mitternacht zu Beginn des 1. Januar 1970, UTC) bis zu diesem Moment verstrichen sind. Entspricht der Division von `epochNanoseconds` durch `1e6` und dem Runden des Ergebnisses.
- {{jsxref("Temporal/ZonedDateTime/epochNanoseconds", "Temporal.ZonedDateTime.prototype.epochNanoseconds")}} {{experimental_inline}}
  - : Gibt eine {{jsxref("BigInt")}} zurück, welche die Anzahl der Nanosekunden darstellt, die seit dem Unix-Epoch (Mitternacht zu Beginn des 1. Januar 1970, UTC) bis zu diesem Moment verstrichen sind.
- {{jsxref("Temporal/ZonedDateTime/era", "Temporal.ZonedDateTime.prototype.era")}} {{experimental_inline}}
  - : Gibt einen kalender-spezifischen, kleingeschriebenen String zurück, der die Ära dieses Datums darstellt, oder `undefined`, wenn der Kalender keine Ären verwendet (z.B. ISO 8601). `era` und `eraYear` zusammen identifizieren ein Jahr in einem Kalender eindeutig, genauso wie `year` es tut. [Kalender](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars)-abhängig. Für den gregorianischen Kalender ist es entweder `"gregory"` oder `"gregory-inverse"`.
- {{jsxref("Temporal/ZonedDateTime/eraYear", "Temporal.ZonedDateTime.prototype.eraYear")}} {{experimental_inline}}
  - : Gibt eine nicht-negative Ganzzahl zurück, die das Jahr innerhalb der Ära dieses Datums darstellt, oder `undefined`, wenn der Kalender keine Ären verwendet (z.B. ISO 8601). Der Jahresindex beginnt normalerweise bei 1 (häufiger) oder 0, und Jahre in einer Ära können mit der Zeit abnehmen (z.B. Gregorianischer Kalender vor Christus). `era` und `eraYear` zusammen identifizieren ein Jahr in einem Kalender eindeutig, genauso wie `year` es tut. [Kalender](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars)-abhängig.
- {{jsxref("Temporal/ZonedDateTime/hour", "Temporal.ZonedDateTime.prototype.hour")}} {{experimental_inline}}
  - : Gibt eine Ganzzahl von 0 bis 23 zurück, die die Stundenkomponente dieser Zeit darstellt.
- {{jsxref("Temporal/ZonedDateTime/hoursInDay", "Temporal.ZonedDateTime.prototype.hoursInDay")}} {{experimental_inline}}
  - : Gibt eine positive Ganzzahl zurück, die die Anzahl der Stunden im Tag dieses Datums in der Zeitzone darstellt. Es kann mehr oder weniger als 24 sein im Falle von Offset-Änderungen wie der Sommerzeit.
- {{jsxref("Temporal/ZonedDateTime/inLeapYear", "Temporal.ZonedDateTime.prototype.inLeapYear")}} {{experimental_inline}}
  - : Gibt einen booleschen Wert zurück, der angibt, ob dieses Datum in einem Schaltjahr liegt. Ein Schaltjahr ist ein Jahr, das mehr Tage hat (aufgrund eines Schalttags oder Schaltmonats) als ein normales Jahr. [Kalender](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars)-abhängig.
- {{jsxref("Temporal/ZonedDateTime/microsecond", "Temporal.ZonedDateTime.prototype.microsecond")}} {{experimental_inline}}
  - : Gibt eine Ganzzahl von 0 bis 999 zurück, die die Mikrosekunde (10<sup>-6</sup> Sekunde) Komponente dieser Zeit darstellt.
- {{jsxref("Temporal/ZonedDateTime/millisecond", "Temporal.ZonedDateTime.prototype.millisecond")}} {{experimental_inline}}
  - : Gibt eine Ganzzahl von 0 bis 999 zurück, die die Millisekunde (10<sup>-3</sup> Sekunde) Komponente dieser Zeit darstellt.
- {{jsxref("Temporal/ZonedDateTime/minute", "Temporal.ZonedDateTime.prototype.minute")}} {{experimental_inline}}
  - : Gibt eine Ganzzahl von 0 bis 59 zurück, die die Minutenkomponente dieser Zeit darstellt.
- {{jsxref("Temporal/ZonedDateTime/month", "Temporal.ZonedDateTime.prototype.month")}} {{experimental_inline}}
  - : Gibt eine positive Ganzzahl zurück, die die 1-basierte Monatsindexzahl im Jahr dieses Datums darstellt. Der erste Monat dieses Jahres ist `1`, und der letzte Monat ist {{jsxref("Temporal/ZonedDateTime/monthsInYear", "monthsInYear")}}. [Kalender](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars)-abhängig. Beachten Sie, dass, anders als {{jsxref("Date.prototype.getMonth()")}}, der Index 1-basiert ist. Wenn der Kalender Schaltmonate hat, dann kann der Monat mit demselben {{jsxref("Temporal/ZonedDateTime/monthCode", "monthCode")}} unterschiedliche `month`-Indizes für verschiedene Jahre haben.
- {{jsxref("Temporal/ZonedDateTime/monthCode", "Temporal.ZonedDateTime.prototype.monthCode")}} {{experimental_inline}}
  - : Gibt einen kalender-spezifischen String zurück, der den Monat dieses Datums darstellt. [Kalender](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars)-abhängig. Normalerweise ist es `M` plus einer zweistelligen Monatszahl. Bei Schaltmonaten ist es der Code des vorhergehenden Monats, gefolgt von `L`. Wenn der Schaltmonat der erste Monat des Jahres ist, ist der Code `M00L`.
- {{jsxref("Temporal/ZonedDateTime/monthsInYear", "Temporal.ZonedDateTime.prototype.monthsInYear")}} {{experimental_inline}}
  - : Gibt eine positive Ganzzahl zurück, die die Anzahl der Monate im Jahr dieses Datums darstellt. [Kalender](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars)-abhängig. Für den ISO 8601-Kalender ist das immer 12, aber in anderen Kalendersystemen kann es variieren.
- {{jsxref("Temporal/ZonedDateTime/nanosecond", "Temporal.ZonedDateTime.prototype.nanosecond")}} {{experimental_inline}}
  - : Gibt eine Ganzzahl von 0 bis 999 zurück, die die Nanosekunde (10<sup>-9</sup> Sekunde) Komponente dieser Zeit darstellt.
- {{jsxref("Temporal/ZonedDateTime/offset", "Temporal.ZonedDateTime.prototype.offset")}} {{experimental_inline}}
  - : Gibt einen String zurück, der das [Offset](#zeitzonen_und_offsets) darstellt, das zum Interpretieren des internen Moments verwendet wird, in der Form `±HH:mm` (oder `±HH:mm:ss.sssssssss` mit so viel Subminuten-Präzision wie nötig).
- {{jsxref("Temporal/ZonedDateTime/offsetNanoseconds", "Temporal.ZonedDateTime.prototype.offsetNanoseconds")}} {{experimental_inline}}
  - : Gibt eine Ganzzahl zurück, die das [Offset](#zeitzonen_und_offsets) darstellt, das zum Interpretieren des internen Moments verwendet wird, als Anzahl von Nanosekunden (positiv oder negativ).
- {{jsxref("Temporal/ZonedDateTime/second", "Temporal.ZonedDateTime.prototype.second")}} {{experimental_inline}}
  - : Gibt eine Ganzzahl von 0 bis 59 zurück, die die Sekundenkomponente dieser Zeit darstellt.
- {{jsxref("Temporal/ZonedDateTime/timeZoneId", "Temporal.ZonedDateTime.prototype.timeZoneId")}} {{experimental_inline}}
  - : Gibt einen String zurück, der den [Zeitzonenbezeichner](#zeitzonen_und_offsets) darstellt, der zum Interpretieren des internen Moments verwendet wird. Er nutzt denselben String, der beim Erstellen des `Temporal.ZonedDateTime`-Objekts verwendet wurde, der entweder ein IANA-Zeitzonenname oder ein festes Offset ist.
- {{jsxref("Temporal/ZonedDateTime/weekOfYear", "Temporal.ZonedDateTime.prototype.weekOfYear")}} {{experimental_inline}}
  - : Gibt eine positive Ganzzahl zurück, die die 1-basierte Wochenindexzahl im {{jsxref("Temporal/ZonedDateTime/yearOfWeek", "yearOfWeek")}} dieses Datums darstellt, oder `undefined`, wenn der Kalender kein gut definiertes Wochensystem hat. Die erste Woche des Jahres ist `1`. [Kalender](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars)-abhängig. Beachten Sie, dass im ISO 8601 Kalender die ersten und letzten Tage des Jahres der letzten Woche des vorherigen Jahres oder der ersten Woche des nächsten Jahres zugeschrieben werden können.
- {{jsxref("Temporal/ZonedDateTime/year", "Temporal.ZonedDateTime.prototype.year")}} {{experimental_inline}}
  - : Gibt eine Ganzzahl zurück, die die Anzahl der Jahre dieses Datums relativ zum Beginn eines kalender-spezifischen Epoche-Jahres darstellt. [Kalender](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars)-abhängig. Normalerweise ist Jahr 1 entweder das erste Jahr der neuesten Ära oder das ISO 8601-Jahr `0001`. Wenn die Epoche in der Mitte des Jahres liegt, wird dieses Jahr denselben Wert vor und nach dem Startdatum der Ära haben.
- {{jsxref("Temporal/ZonedDateTime/yearOfWeek", "Temporal.ZonedDateTime.prototype.yearOfWeek")}} {{experimental_inline}}
  - : Gibt eine Ganzzahl zurück, die das Jahr darstellt, das mit dem {{jsxref("Temporal/ZonedDateTime/weekOfYear", "weekOfYear")}} dieses Datums gepaart ist, oder `undefined`, wenn der Kalender kein gut definiertes Wochensystem hat. [Kalender](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars)-abhängig. Normalerweise ist dies das Jahr des Datums, aber für ISO 8601 können die ersten und letzten Tage des Jahres der letzten Woche des vorherigen Jahres oder der ersten Woche des nächsten Jahres zugeordnet werden, wodurch `yearOfWeek` sich um 1 unterscheidet.
- `Temporal.ZonedDateTime.prototype[Symbol.toStringTag]`
  - : Der Anfangswert der [`[Symbol.toStringTag]`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag) Eigenschaft ist der String `"Temporal.ZonedDateTime"`. Diese Eigenschaft wird in {{jsxref("Object.prototype.toString()")}} verwendet.

## Instanz-Methoden

- {{jsxref("Temporal/ZonedDateTime/add", "Temporal.ZonedDateTime.prototype.add()")}} {{experimental_inline}}
  - : Gibt ein neues `Temporal.ZonedDateTime` Objekt zurück, das diese Datum-Zeit um eine gegebene Dauer (in einem Formular, das durch {{jsxref("Temporal/Duration/from", "Temporal.Duration.from()")}} konvertierbar ist) nach vorne bewegt.
- {{jsxref("Temporal/ZonedDateTime/equals", "Temporal.ZonedDateTime.prototype.equals()")}} {{experimental_inline}}
  - : Gibt `true` zurück, wenn diese Datum-Zeit in ihrem Wert zu einer anderen Datum-Zeit (in einem Formular, das durch {{jsxref("Temporal/ZonedDateTime/from", "Temporal.ZonedDateTime.from()")}} konvertierbar ist) gleichwertig ist, und `false` andernfalls. Sie werden sowohl durch ihre Momentwerte, Zeitzonen als auch durch ihre Kalender verglichen, sodass zwei Datum-Zeiten aus verschiedenen Kalendern oder Zeitzonen von {{jsxref("Temporal.ZonedDateTime/compare", "Temporal.ZonedDateTime.compare()")}} als gleich betrachtet werden können, nicht aber von `equals()`.
- {{jsxref("Temporal/ZonedDateTime/getTimeZoneTransition", "Temporal.ZonedDateTime.prototype.getTimeZoneTransition()")}} {{experimental_inline}}
  - : Gibt ein `Temporal.ZonedDateTime`-Objekt zurück, das den ersten Moment nach oder vor diesem Moment darstellt, an dem sich das UTC-Offset der Zeitzone ändert, oder `null`, wenn es keinen solchen Übergang gibt. Dies ist nützlich, um die Off-Regeln einer Zeitzone zu ermitteln, wie z.B. ihr Muster für Sommerzeit.
- {{jsxref("Temporal/ZonedDateTime/round", "Temporal.ZonedDateTime.prototype.round()")}} {{experimental_inline}}
  - : Gibt ein neues `Temporal.ZonedDateTime`-Objekt zurück, das diese Datum-Zeit auf die gegebene Einheit gerundet darstellt.
- {{jsxref("Temporal/ZonedDateTime/since", "Temporal.ZonedDateTime.prototype.since()")}} {{experimental_inline}}
  - : Gibt ein neues {{jsxref("Temporal.Duration")}}-Objekt zurück, das die Dauer von einer anderen Datum-Zeit (in einem Formular, das von {{jsxref("Temporal/ZonedDateTime/from", "Temporal.ZonedDateTime.from()")}} konvertierbar ist) bis zu dieser Datum-Zeit darstellt. Die Dauer ist positiv, wenn die andere Datum-Zeit vor dieser Datum-Zeit liegt, und negativ, wenn nach.
- {{jsxref("Temporal/ZonedDateTime/startOfDay", "Temporal.ZonedDateTime.prototype.startOfDay()")}} {{experimental_inline}}
  - : Gibt ein `Temporal.ZonedDateTime`-Objekt zurück, welches den ersten Moment dieses Tages in der Zeitzone darstellt. Normalerweise hat es eine Uhrzeit von `00:00:00`, kann aber abweichen, wenn der Mitternachtspunkt aufgrund von Offset-Änderungen nicht existiert, in welchem Fall die erste existierende Uhrzeit zurückgegeben wird.
- {{jsxref("Temporal/ZonedDateTime/subtract", "Temporal.ZonedDateTime.prototype.subtract()")}} {{experimental_inline}}
  - : Gibt ein neues `Temporal.ZonedDateTime`-Objekt zurück, das diese Datum-Zeit um eine gegebene Dauer (in einem Formular, das von {{jsxref("Temporal/Duration/from", "Temporal.Duration.from()")}} konvertierbar ist) rückwärts bewegt.
- {{jsxref("Temporal/ZonedDateTime/toInstant", "Temporal.ZonedDateTime.prototype.toInstant()")}} {{experimental_inline}}
  - : Gibt ein neues {{jsxref("Temporal.Instant")}}-Objekt zurück, das den Moment dieser Datum-Zeit darstellt.
- {{jsxref("Temporal/ZonedDateTime/toJSON", "Temporal.ZonedDateTime.prototype.toJSON()")}} {{experimental_inline}}
  - : Gibt einen String zurück, der diese Datum-Zeit im gleichen [RFC 9557 Format](#rfc_9557_format) wie der Aufruf von {{jsxref("Temporal/ZonedDateTime/toString", "toString()")}} darstellt. Soll implizit von {{jsxref("JSON.stringify()")}} aufgerufen werden.
- {{jsxref("Temporal/ZonedDateTime/toLocaleString", "Temporal.ZonedDateTime.prototype.toLocaleString()")}} {{experimental_inline}}
  - : Gibt einen String mit einer sprachsensitiven Darstellung dieser Datum-Zeit zurück.
- {{jsxref("Temporal/ZonedDateTime/toPlainDate", "Temporal.ZonedDateTime.prototype.toPlainDate()")}} {{experimental_inline}}
  - : Gibt ein neues {{jsxref("Temporal.PlainDate")}}-Objekt zurück, das den Datumsanteil dieser Datum-Zeit darstellt.
- {{jsxref("Temporal/ZonedDateTime/toPlainDateTime", "Temporal.ZonedDateTime.prototype.toPlainDateTime()")}} {{experimental_inline}}
  - : Gibt ein neues {{jsxref("Temporal.PlainDateTime")}}-Objekt zurück, das den Datums- und Zeitanteil dieser Datum-Zeit darstellt. Nur die Zeitzoneninformation wird entfernt.
- {{jsxref("Temporal/ZonedDateTime/toPlainTime", "Temporal.ZonedDateTime.prototype.toPlainTime()")}} {{experimental_inline}}
  - : Gibt ein neues {{jsxref("Temporal.PlainTime")}}-Objekt zurück, das den Zeitanteil dieser Datum-Zeit darstellt.
- {{jsxref("Temporal/ZonedDateTime/toString", "Temporal.ZonedDateTime.prototype.toString()")}} {{experimental_inline}}
  - : Gibt einen String zurück, der diese Datum-Zeit im [RFC 9557 Format](#rfc_9557_format) darstellt.
- {{jsxref("Temporal/ZonedDateTime/until", "Temporal.ZonedDateTime.prototype.until()")}} {{experimental_inline}}
  - : Gibt ein neues {{jsxref("Temporal.Duration")}}-Objekt zurück, das die Dauer von dieser Datum-Zeit bis zu einer anderen Datum-Zeit (in einem Formular, das von {{jsxref("Temporal/ZonedDateTime/from", "Temporal.ZonedDateTime.from()")}} konvertierbar ist) darstellt. Die Dauer ist positiv, wenn die andere Datum-Zeit nach dieser Datum-Zeit ist, und negativ wenn davor.
- {{jsxref("Temporal/ZonedDateTime/valueOf", "Temporal.ZonedDateTime.prototype.valueOf()")}} {{experimental_inline}}
  - : Wirft einen {{jsxref("TypeError")}}, der verhindert, dass `Temporal.ZonedDateTime`-Instanzen [implizit in primitive Datentypen konvertiert](/de/docs/Web/JavaScript/Guide/Data_structures#primitive_coercion) werden, wenn sie in arithmetischen oder Vergleichsoperationen verwendet werden.
- {{jsxref("Temporal/ZonedDateTime/with", "Temporal.ZonedDateTime.prototype.with()")}} {{experimental_inline}}
  - : Gibt ein neues `Temporal.ZonedDateTime`-Objekt zurück, das diese Datum-Zeit mit einigen durch neue Werte ersetzten Feldern darstellt.
- {{jsxref("Temporal/ZonedDateTime/withCalendar", "Temporal.ZonedDateTime.prototype.withCalendar()")}} {{experimental_inline}}
  - : Gibt ein neues `Temporal.ZonedDateTime`-Objekt zurück, das diese Datum-Zeit im neuen Kalendersystem interpretiert darstellt.
- {{jsxref("Temporal/ZonedDateTime/withPlainTime", "Temporal.ZonedDateTime.prototype.withPlainTime()")}} {{experimental_inline}}
  - : Gibt ein neues `Temporal.ZonedDateTime`-Objekt zurück, das diese Datum-Zeit mit völlig durch die neue Zeit ersetzten Zeitanteil darstellt (in einer Form, die durch {{jsxref("Temporal/PlainTime/from", "Temporal.PlainTime.from()")}} konvertierbar ist).
- {{jsxref("Temporal/ZonedDateTime/withTimeZone", "Temporal.ZonedDateTime.prototype.withTimeZone()")}} {{experimental_inline}}
  - : Gibt ein neues `Temporal.ZonedDateTime`-Objekt zurück, das denselben Moment wie diese Datum-Zeit, aber in der neuen Zeitzone darstellt.

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
