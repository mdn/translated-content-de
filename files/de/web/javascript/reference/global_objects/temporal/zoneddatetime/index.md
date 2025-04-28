---
title: Temporal.ZonedDateTime
slug: Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime
l10n:
  sourceCommit: be1922d62a0d31e4e3441db0e943aed8df736481
---

{{JSRef}}{{SeeCompatTable}}

Das **`Temporal.ZonedDateTime`** Objekt repräsentiert ein Datum und eine Uhrzeit mit einer Zeitzone. Es wird grundsätzlich als Kombination eines [Instants](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/Instant), einer Zeitzone und eines Kalendersystems repräsentiert.

## Beschreibung

Ein `ZonedDateTime` fungiert als Brücke zwischen einer exakten Zeit und einer Uhrzeit nach Sonnenzeit: Es repräsentiert gleichzeitig einen Zeitpunkt in der Geschichte (wie ein {{jsxref("Temporal.Instant")}}) und eine lokale, uhrzeitliche Zeit (wie ein {{jsxref("Temporal.PlainDateTime")}}). Dies geschieht durch Speicherung des Instants, der Zeitzone und des Kalendersystems. Die Zeitzone wird verwendet, um zwischen dem Instant und der lokalen Zeit zu konvertieren, und das Kalendersystem wird verwendet, um die lokale Zeit zu interpretieren.

`ZonedDateTime` ist die einzige `Temporal`-Klasse, die zeitzonenbewusst ist. Die Hinzufügung einer Zeitzone bringt wesentliche Verhaltensunterschiede zwischen `ZonedDateTime`-Objekten und {{jsxref("Temporal.PlainDateTime")}}-Objekten mit sich. Insbesondere können Sie nicht mehr davon ausgehen, dass "die Zeit 1 Minute später" jeden Tag gleich ist, oder dass ein Tag 24 Stunden hat. Im schlimmsten Fall kann ein ganzer Tag im lokalen Kalender fehlen. Unten bieten wir einen schnellen Überblick über Zeitzonen und Offsets und wie sie die Umwandlung zwischen UTC-Zeit und lokaler Zeit beeinflussen.

### Zeitzonen und Offsets

Alle Zeiten in JavaScript haben einen goldenen Standard: die UTC-Zeit, die sich kontinuierlich und gleichmäßig mit dem Fortschreiten der physikalischen Zeit erhöht. Im Gegensatz dazu sind Benutzer mehr an ihrer lokalen Zeit interessiert, die die Zeit ist, die sie auf ihren Kalendern und Uhren sehen. Der Prozess der Umwandlung zwischen UTC-Zeit und lokaler Zeit beinhaltet einen Zeitzonen-Offset, der wie folgt berechnet wird:

```plain
local time = UTC time + offset
```

Beispielsweise, wenn die UTC-Zeit 1970-01-01T00:00:00 beträgt und der Offset "-05:00" ist, dann ist die lokale Zeit:

```plain
1970-01-01T00:00:00 + -05:00 = 1969-12-31T19:00:00
```

Wenn diese lokale Zeit mit dem Offset versehen wird, indem die Zeit als "1969-12-31T19:00:00-05:00" ausgedrückt wird, kann sie nun eindeutig als ein Instant in der Geschichte verstanden werden.

Um den Offset zu kennen, benötigen wir zwei Informationen: die _Zeitzone_ und den _Instant_. Die Zeitzone ist eine Region auf der Erde, in der immer derselbe Offset verwendet wird. Zwei Uhren in derselben Zeitzone zeigen immer zur selben Zeit gleichzeitig die gleiche Zeit an, aber der Offset ist nicht unbedingt konstant: Diese Uhrenzeiten können sich abrupt ändern. Dies geschieht häufig während der Umstellung auf die Sommerzeit, bei der sich der Offset um eine Stunde ändert, was zweimal im Jahr passiert. Offsets können sich auch dauerhaft aufgrund politischer Veränderungen ändern, z. B. wenn ein Land Zeitzonen wechselt.

Die Zeitzonen sind in der [IANA Time Zone Database](https://www.iana.org/time-zones) gespeichert. Jede IANA-Zeitzone hat:

- Einen _primären Zeitzonenbezeichner_, der die Zeitzone eindeutig identifiziert. Er verweist normalerweise auf ein geografisches Gebiet, das von einer Stadt verankert ist (z. B. `Europe/Paris` oder `Africa/Kampala`), kann aber auch eine Einzel-Offset-Zeitzone wie `UTC` (ein konsistenter `+00:00`-Offset) oder `Etc/GMT+5` (historisch bedingt ein negativer Offset `-05:00`) bezeichnen. Aus historischen Gründen lautet der primäre Name für die UTC-Zeitzone `UTC`, obwohl er in IANA `Etc/UTC` ist.
- Eine _Zeitzonendefinition_ in Form einer Tabelle, die UTC-Datums-/Zeitbereiche (einschließlich zukünftiger Bereiche) bestimmten Offsets zuordnet.
- Null oder mehr _nicht-primäre Zeitzonenbezeichner_, die Aliase für den primären Zeitzonenbezeichner sind. Diese sind meist historische Namen, die nicht mehr in Gebrauch sind, aber aus Kompatibilitätsgründen beibehalten werden. Weitere Informationen finden Sie unten.

Als Eingabe werden benannte Bezeichner case-insensitiv abgeglichen. Intern werden sie in ihrer bevorzugten Schreibweise gespeichert, und nicht-primäre Bezeichner werden _nicht_ in ihren primären Bezeichner konvertiert.

> [!NOTE]
> Wenn Sie den Zeitzonennamen festlegen, möchten Sie ihn selten auf `"UTC"` setzen. `ZonedDateTime` ist dazu gedacht, Benutzern angezeigt zu werden, aber kein Mensch lebt in der "UTC"-Zeitzone. Wenn Sie die Zeitzone zum Zeitpunkt der Erstellung nicht kennen, aber die uhrzeitliche Zeit wissen, verwenden Sie ein {{jsxref("Temporal.PlainDateTime")}}. Wenn Sie den exakten Instant kennen, verwenden Sie ein {{jsxref("Temporal.Instant")}}.

Wenn eine `Temporal`-API einen _Zeitzonenbezeichner_ akzeptiert, akzeptiert sie zusätzlich zu primären Zeitzonenbezeichnern und nicht-primären Zeitzonenbezeichnern auch einen _Offset-Zeitzonenbezeichner_, der in derselben Form wie der Offset vorliegt, außer dass eine subminütige Präzision nicht erlaubt ist. Zum Beispiel sind `+05:30`, `-08`, `+0600` alle gültige Offset-Bezeichner. Intern werden Offset-Bezeichner in der `±HH:mm`-Form gespeichert.

> [!NOTE]
> Vermeiden Sie die Verwendung von Offset-Bezeichnern, wenn Sie stattdessen einen benannten Zeitzonenbezeichner verwenden können. Selbst wenn eine Region immer einen einzigen Offset verwendet hat, ist es besser, den benannten Bezeichner zu verwenden, um zukünftige politische Änderungen des Offsets vorzubeugen.
>
> Wenn eine Region mehrere Offsets verwendet (oder verwendet hat), ist die Verwendung der benannten Zeitzone umso wichtiger. Dies liegt daran, dass `Temporal.ZonedDateTime` Methoden wie `add` oder `with` verwenden kann, um neue Instanzen zu einem anderen Instant zu erstellen. Wenn diese abgeleiteten Instanzen einem Instant entsprechen, der einen anderen Offset verwendet (zum Beispiel nach einer Sommerzeitumstellung), dann haben Ihre Berechnungen eine inkorrekte lokale Zeit. Die Verwendung einer benannten Zeitzone stellt sicher, dass lokale Daten und Zeiten immer an den richtigen Offset für diesen Instant angepasst werden.

Zur Bequemlichkeit können Sie einen Zeitzonenbezeichner in `Temporal`-APIs wie `Temporal.ZonedDateTime.prototype.withTimeZone()` und die `timeZoneId`-Option von `Temporal.ZonedDateTime.from()` auf einige andere Arten angeben:

- Als eine andere `ZonedDateTime`-Instanz, dessen `timeZoneId` verwendet wird.
- Als eine [RFC 9557-String](#rfc_9557_format) mit einer Zeitzonenanmerkung, deren Zeitzonenbezeichner verwendet wird.
- Als eine ISO 8601 / RFC 3339-String, die einen Offset enthält, dessen Offset als Offset-Bezeichner verwendet wird; oder, wenn Sie `Z` verwenden, wird stattdessen die Zeitzone `"UTC"` verwendet. Diese Verwendung wird im Allgemeinen nicht empfohlen, da, wie oben erläutert, Offset-Bezeichner die Fähigkeit fehlt, sicher andere `Temporal.ZonedDateTime`-Instanzen über eine Offset-Übergang hinweg abzuleiten, wie bei einer Sommerzeitumstellung. Ziehen Sie stattdessen in Betracht, einfach `Temporal.Instant` zu verwenden oder die tatsächliche benannte Zeitzone des Benutzers abzurufen.

Die IANA-Zeitzonendatenbank ändert sich von Zeit zu Zeit, meistens um neue Zeitzonen hinzuzufügen, die als Reaktion auf politische Änderungen entstanden sind. Auf seltene Gelegenheiten werden IANA-Zeitzonenbezeichner umbenannt, um mit aktualisierten englischen Übersetzungen eines Stadtnamens übereinzustimmen oder um veraltete Namenskonventionen zu aktualisieren. Zum Beispiel hier einige bemerkenswerte Namensänderungen:

| Aktueller IANA-primär Bezeichner | Alter, jetzt nicht-primärer Bezeichner |
| -------------------------------- | -------------------------------------- |
| `America/Argentina/Buenos_Aires` | `America/Buenos_Aires`                 |
| `Asia/Kolkata`                   | `Asia/Calcutta`                        |
| `Asia/Ho_Chi_Minh`               | `Asia/Saigon`                          |
| `Europe/Kyiv`                    | `Europe/Kiev`                          |

Historiell verursachten diese Umbenennungen Probleme für Programmierer, weil die Unicode [CLDR-Datenbank](https://github.com/unicode-org/cldr-json/blob/main/cldr-json/cldr-bcp47/bcp47/timezone.json) (eine Bibliothek, die von Browsern genutzt wird, um Zeitzonenbezeichner und Daten bereitzustellen) IANAs Umbenennungen aus [Stabilitätsgründen](https://unicode.org/reports/tr35/#Time_Zone_Identifiers) nicht folgte. In der Folge berichteten einige Browser wie Chrome und Safari die überholten Bezeichner von CLDR, während andere Browser wie Firefox die Standardeinstellungen von CLDR überschrieben und die aktuellen primären Bezeichner berichteten.

Mit der Einführung von Temporal ist dieses Verhalten nun stärker standardisiert:

- [CLDR-Daten](https://github.com/unicode-org/cldr-json/blob/main/cldr-json/cldr-bcp47/bcp47/timezone.json) enthalten jetzt ein `"_iana"`-Attribut, das den aktuellsten Bezeichner angibt, wenn der ältere, stabile Bezeichner umbenannt wurde. Browser können dieses neue Attribut verwenden, um Anrufern aktuelle Bezeichner bereitzustellen.
- Von Programmierern bereitgestellte Zeitzonenbezeichner werden niemals durch ein Alias ersetzt. Wenn der Anrufer z. B. `Asia/Calcutta` oder `Asia/Kolkata` als Bezeichner an {{jsxref("Temporal/ZonedDateTime/from", "Temporal.ZonedDateTime.from()")}} übergibt, dann wird derselbe Bezeichner in der resultierenden Instanz {{jsxref("Temporal/ZonedDateTime/timeZoneId", "timeZoneId")}} zurückgegeben. Beachten Sie, dass die Ausgabe in der Groß-/Kleinschreibung normalisiert wird, um mit IANA übereinzustimmen, sodass `ASIA/calCuTTa` als Eingabe ein {{jsxref("Temporal/ZonedDateTime/timeZoneId", "timeZoneId")}} von `Asia/Calcutta` als Ausgabe erzeugt.
- Wenn ein Zeitzonenbezeichner nicht von einem Anrufer bereitgestellt wird, sondern stattdessen vom System selbst stammt (zum Beispiel bei Verwendung von {{jsxref("Temporal/Now/timeZoneId", "Temporal.Now.timeZoneId()")}}), werden in allen Browsern moderne Bezeichner zurückgegeben. Bei Stadtnamenänderungen gibt es eine Verzögerung von zwei Jahren, bevor diese systembasierten Bezeichner-APIs den neuen Namen offenlegen, um anderen Komponenten (wie einem Node-Server) Zeit zu geben, ihre Kopien der IANA-Datenbank zu aktualisieren, um den neuen Namen zu erkennen.

Beachten Sie, dass die Zuweisung von primären Bezeichnern den Ländercode beibehält: Zum Beispiel zeichnet die IANA-Datenbank `Atlantic/Reykjavik` als ein Alias für `Africa/Abidjan` auf, aber weil sie zu verschiedenen Ländern gehören (Island und Côte d'Ivoire, jeweils), werden sie als verschiedene primäre Bezeichner behandelt.

Diese Standardisierung gilt auch außerhalb von `Temporal`. Zum Beispiel wird die `timeZone`-Option, die von {{jsxref("Intl/DateTimeFormat/resolvedOptions", "Intl.DateTimeFormat.prototype.resolvedOptions()")}} zurückgegeben wird, ebenfalls nie durch ein Alias ersetzt, obwohl Browser diese Bezeichner traditionell vor der Standardisierung durch Temporal kanonisiert hatten. Andererseits werden {{jsxref("Intl/Locale/getTimeZones", "Intl.Locale.prototype.getTimeZones()")}} und {{jsxref("Intl.supportedValuesOf()")}} (`timeZone` Option) den aktuellsten Bezeichner zurückgeben, während einige Browser früher den alten, nicht-primären Bezeichner zurückgaben.

### RFC 9557 Format

`ZonedDateTime`-Objekte können im [RFC 9557](https://datatracker.ietf.org/doc/html/rfc9557)-Format, einer Erweiterung des [ISO 8601 / RFC 3339](https://datatracker.ietf.org/doc/html/rfc3339)-Formats, serialisiert und geparst werden. Der String hat die folgende Form (Leerzeichen dienen nur der Lesbarkeit und sollten im eigentlichen String nicht vorhanden sein):

```plain
YYYY-MM-DD T HH:mm:ss.sssssssss Z/±HH:mm [time_zone_id] [u-ca=calendar_id]
```

- `YYYY`
  - : Entweder eine vierstellige Zahl oder eine sechsstellige Zahl mit einem `+` oder `-` Zeichen.
- `MM`
  - : Eine zweistellige Zahl von `01` bis `12`.
- `DD`
  - : Eine zweistellige Zahl von `01` bis `31`. Die Komponenten `YYYY`, `MM` und `DD` können durch `-` oder nichts getrennt werden.
- `T` {{optional_inline}}
  - : Der Datums-Zeit-Trenner, der `T`, `t` oder ein Leerzeichen sein kann. Vorhanden, wenn und nur wenn `HH` vorhanden ist.
- `HH` {{optional_inline}}
  - : Eine zweistellige Zahl von `00` bis `23`. Standard ist `00`.
- `mm` {{optional_inline}}
  - : Eine zweistellige Zahl von `00` bis `59`. Standard ist `00`.
- `ss.sssssssss` {{optional_inline}}
  - : Eine zweistellige Zahl von `00` bis `59`. Darf optional von einem `.` oder `,` und einer bis neun Ziffern gefolgt werden. Standard ist `00`. Die Komponenten `HH`, `mm` und `ss` können durch `:` oder nichts getrennt werden. Sie können entweder nur `ss` oder sowohl `ss` als auch `mm` weglassen, sodass die Zeit in einer von drei Formen sein kann: `HH`, `HH:mm` oder `HH:mm:ss.sssssssss`.
- `Z/±HH:mm` {{optional_inline}}
  - : Entweder der UTC-Indikator `Z` oder `z` oder ein Offset von UTC in der Form `+` oder `-`, gefolgt vom gleichen Format wie die Zeitkomponente. Beachten Sie, dass Subminutenpräzision (`:ss.sssssssss`) von anderen Systemen möglicherweise nicht unterstützt wird und akzeptiert, aber nie ausgegeben wird. Wenn sie weggelassen wird, wird der Offset aus dem Zeitzonenbezeichner abgeleitet. Wenn sie vorhanden ist, muss auch die Zeit angegeben werden. `Z` ist nicht dasselbe wie `+00:00`: Ersterer bedeutet, dass die Zeit in UTC-Form angegeben wird, unabhängig vom Zeitzonenbezeichner, während letzterer bedeutet, dass die Zeit in lokaler Zeit, die zufällig UTC+0 ist, angegeben wird und gegen den Zeitzonenbezeichner validiert wird über die [`offset`-Option](#offset-doppeldeutigkeit).
- `[time_zone_id]`
  - : Ersetzen Sie `time_zone_id` durch den Zeitzonenbezeichner (benannt oder Offset), wie oben beschrieben. Darf ein _kritisches Flag_ durch Voranstellen des Bezeichners mit `!` haben, z. B.: `[!America/New_York]`. Dieses Flag besagt im Allgemeinen anderen Systemen, dass es nicht ignoriert werden kann, wenn sie es nicht unterstützen. Beachten Sie, dass es bei `Temporal.ZonedDateTime.from()` erforderlich ist: Das Weglassen führt zu einem `RangeError`. Wenn Sie ISO 8601 / RFC 3339-Strings ohne Zeitzonenbezeichner-Annotationen parsen möchten, verwenden Sie {{jsxref("Temporal/Instant/from", "Temporal.Instant.from()")}}.
- `[u-ca=calendar_id]` {{optional_inline}}
  - : Ersetzen Sie `calendar_id` durch den zu verwendenden Kalender. Darf ein _kritisches Flag_ durch Voranstellen des Schlüssels mit `!` haben, z. B.: `[!u-ca=iso8601]`. Dieses Flag besagt im Allgemeinen anderen Systemen, dass es nicht ignoriert werden kann, wenn sie es nicht unterstützen. Der `Temporal`-Parser wird einen Fehler auslösen, wenn die Anmerkungen zwei oder mehr Kalenderanmerkungen enthalten und eine davon kritisch ist. Standard ist `[u-ca=iso8601]`. Beachten Sie, dass das `YYYY-MM-DD` immer als ISO 8601 Kalenderdatum interpretiert wird und dann in den angegebenen Kalender umgewandelt wird.

Als Eingabe werden andere Anmerkungen im Format `[key=value]` ignoriert, und sie dürfen das kritische Flag nicht haben.

Beim Serialisieren können Sie die Bruchteilssekundenstellen, ob der Offset/Zeitzonen-ID/Kalender-ID angezeigt werden sollen und ob ein kritisches Flag für die Anmerkungen hinzugefügt werden soll, konfigurieren.

### Doppeldeutigkeit und Lücken von lokaler Zeit zur UTC-Zeit

Angesichts einer Zeitzone ist die Umwandlung von UTC in lokale Zeit einfach: Zuerst erhalten Sie den Offset, indem Sie den Zeitzonennamen und den Instant verwenden, und dann addieren Sie den Offset zum Instant. Das Umgekehrte ist nicht wahr: Die Umwandlung von lokaler Zeit in UTC-Zeit ohne einen expliziten Offset ist mehrdeutig, da eine lokale Zeit null, einer oder mehreren UTC-Zeiten entsprechen kann. Betrachten Sie die häufigste Ursache: Sommerzeitumstellungen. Nehmen Sie New York als Beispiel. Sein Standardoffset ist UTC-5, aber während der Sommerzeit werden alle Uhren um eine Stunde vorgestellt, sodass der Offset UTC-4 wird. In den USA finden die Übergänge um 2:00 Uhr Ortszeit statt. Betrachten Sie diese beiden Übergangstage:

| UTC-Zeit             | New York Zeit             |
| -------------------- | ------------------------- |
| 2024-03-10T06:58:00Z | 2024-03-10T01:58:00-05:00 |
| 2024-03-10T06:59:00Z | 2024-03-10T01:59:00-05:00 |
| 2024-03-10T07:00:00Z | 2024-03-10T03:00:00-04:00 |
| ---                  | ---                       |
| 2024-11-03T05:58:00Z | 2024-11-03T01:58:00-04:00 |
| 2024-11-03T05:59:00Z | 2024-11-03T01:59:00-04:00 |
| 2024-11-03T06:00:00Z | 2024-11-03T01:00:00-05:00 |

Wie Sie sehen können, verschwand im März eine Stunde von der lokalen Zeit, und im November gibt es zwei Stunden, die die gleiche Uhrzeit haben. Angenommen, wir haben ein `PlainDateTime` gespeichert, das "2024-03-10T02:05:00" sagt, und wir möchten es in der Zeitzone `America/New_York` interpretieren, dann wird es keine Zeit geben, die ihm entspricht, während ein `PlainDateTime`, das "2024-11-03T01:05:00" sagt, zwei verschiedenen Instants entsprechen kann.

Beim Erstellen eines `ZonedDateTime` aus einer lokalen Zeit (mit {{jsxref("Temporal/ZonedDateTime/from", "Temporal.ZonedDateTime.from()")}}, {{jsxref("Temporal/ZonedDateTime/with", "Temporal.ZonedDateTime.prototype.with()")}}, {{jsxref("Temporal/PlainDateTime/toZonedDateTime", "Temporal.PlainDateTime.prototype.toZonedDateTime()")}}) kann das Verhalten für Doppeldeutigkeiten und Lücken mit der `disambiguation`-Option konfiguriert werden:

- `earlier`
  - : Wenn es zwei mögliche Instants gibt, wählen Sie den früheren. Wenn es eine Lücke gibt, gehen Sie um die Lückendauer zurück.
- `later`
  - : Wenn es zwei mögliche Instants gibt, wählen Sie den späteren. Wenn es eine Lücke gibt, gehen Sie um die Lückendauer vorwärts.
- `compatible` (Standard)
  - : Gleiches Verhalten wie bei {{jsxref("Date")}}: Verwenden Sie `later` für Lücken und `earlier` für Doppeldeutigkeiten.
- `reject`
  - : Löst einen `RangeError` aus, wenn es eine Doppeldeutigkeit oder eine Lücke gibt.

Es gibt mehrere Fälle, in denen es keine Doppeldeutigkeit bei der Erstellung eines `ZonedDateTime` gibt:

- Wenn die Zeit in UTC über den `Z`-Offset angegeben wird.
- Wenn der Offset explizit angegeben und verwendet wird (siehe unten).

### Offset-Doppeldeutigkeit

Wir haben bereits demonstriert, wie Doppeldeutigkeiten aufgrund der Interpretation einer lokalen Zeit in einer Zeitzone ohne Angabe eines expliziten Offsets entstehen können. Wenn jedoch ein expliziter Offset angegeben wird, entsteht ein weiterer Konflikt: zwischen dem angegebenen Offset und dem Offset, der aus der Zeitzone und der lokalen Zeit berechnet wird. Dies ist ein unvermeidliches reales Problem: Wenn Sie eine Zeit in der Zukunft speichern, mit einem voraussichtlichen Offset, dann kann sich die Zeitzonendefinition aufgrund politischer Gründe ändern, bevor diese Zeit erreicht wird. Zum Beispiel, angenommen, wir setzen 2018 eine Erinnerung um die Zeit `2019-12-23T12:00:00-02:00[America/Sao_Paulo]` (was eine Sommerzeit ist; Brasilien ist auf der südlichen Hemisphäre, sodass es im Oktober in die Sommerzeit eintritt und im Februar beendet). Aber bevor diese Zeit kommt, beschließt Brasilien Anfang 2019, die Sommerzeit nicht mehr anzuwenden, sodass der tatsächliche Offset `-03:00` wird. Sollte die Erinnerung jetzt weiterhin um Mittag (Beibehaltung der lokalen Zeit) oder um 11:00 Uhr (Beibehaltung der exakten Zeit) klingeln?

Beim Erstellen eines `ZonedDateTime` mit {{jsxref("Temporal/ZonedDateTime/from", "Temporal.ZonedDateTime.from()")}} oder beim Aktualisieren mit der {{jsxref("Temporal/ZonedDateTime/with", "with()")}} Methode ist das Verhalten bei Offset-Doppeldeutigkeit über die `offset`-Option konfigurierbar:

- `use`
  - : Verwenden Sie den Offset, um die exakte Zeit zu berechnen. Diese Option "verwendet" den Offset beim Bestimmen des durch den String repräsentierten Instants, der derselbe Instant ist, der ursprünglich berechnet wurde, als wir die Zeit speicherten, selbst wenn sich der Offset an diesem Instant geändert hat. Der Zeitzonenbezeichner wird weiterhin verwendet, um den (möglicherweise aktualisierten) Offset zu ermitteln und diesen Offset dann zu verwenden, um die exakte Zeit in lokale Zeit umzuwandeln.
- `ignore`
  - : Verwenden Sie den Zeitzonenbezeichner, um den Offset neu zu berechnen, und ignorieren Sie den im String angegebenen Offset. Diese Option behält die gleiche lokale Zeit wie ursprünglich berechnet, wenn wir die Zeit speicherten, kann aber einem anderen Instant entsprechen. Beachten Sie, dass diese Option dieselbe lokale Zeitinterpretations-Mehrdeutigkeit wie oben demonstriert verursachen kann, die mit der `disambiguation` Option gelöst wird.
- `reject`
  - : Löst einen `RangeError` aus, wann immer es zu einem Konflikt zwischen dem Offset und dem Zeitzonenbezeichner kommt. Dies ist der Standard für {{jsxref("Temporal/ZonedDateTime/from", "Temporal.ZonedDateTime.from()")}}.
- `prefer`
  - : Verwenden Sie den Offset, wenn er gültig ist, andernfalls berechnen Sie den Offset aus dem Zeitzonenbezeichner. Dies ist der Standard für {{jsxref("Temporal/ZonedDateTime/with", "Temporal.ZonedDateTime.prototype.with()")}} (siehe die Methode für weitere Details). Dies ist anders als `ignore`, da im Fall einer Doppeldeutigkeit der lokalen Zeit der Offset zur Lösung verwendet wird anstatt der `disambiguation` Option.

Beachten Sie, dass der `Z`-Offset nicht gleichbedeutend mit `+00:00` ist. Der `Z`-Offset bedeutet "die Zeit in UTC ist bekannt, aber der Offset zur lokalen Zeit ist unbekannt", gemäß [RFC 9557](https://www.rfc-editor.org/rfc/rfc9557.html#name-update-to-rfc-3339). Wenn der Zeitstring den `Z`-Offset verwendet, wird die `offset`-Option ignoriert, und der Offset wird aus der Zeitzonen-ID abgeleitet. Andererseits wird der `+00:00`-Offset als ein Offset der lokalen Zeit interpretiert, der zufällig mit UTC übereinstimmt und gegen die Zeitzonen-ID validiert wird.

> [!NOTE]
> Obwohl {{jsxref("Temporal/Instant/from", "Temporal.Instant.from()")}} ebenfalls einen [RFC 9557](#rfc_9557_format)-String in derselben Form akzeptiert, gibt es keine Doppeldeutigkeit, da es immer den Zeitzonenbezeichner ignoriert und nur den Offset liest.

## Konstruktor

- {{jsxref("Temporal/ZonedDateTime/ZonedDateTime", "Temporal.ZonedDateTime()")}} {{experimental_inline}}
  - : Erstellt ein neues `Temporal.ZonedDateTime`-Objekt, indem die zugrundeliegenden Daten direkt bereitgestellt werden.

## Statische Methoden

- {{jsxref("Temporal/ZonedDateTime/compare", "Temporal.ZonedDateTime.compare()")}} {{experimental_inline}}
  - : Gibt eine Zahl zurück (-1, 0 oder 1), die anzeigt, ob der erste Zeitpunkt vor, gleich oder nach dem zweiten Zeitpunkt liegt. Entspricht dem Vergleich der {{jsxref("Temporal/ZonedDateTime/epochNanoseconds", "epochNanoseconds")}} der beiden Zeitpunkte.
- {{jsxref("Temporal/ZonedDateTime/from", "Temporal.ZonedDateTime.from()")}} {{experimental_inline}}
  - : Erstellt ein neues `Temporal.ZonedDateTime`-Objekt aus einem anderen `Temporal.ZonedDateTime`-Objekt, einem Objekt mit Daten-, Zeit- und Zeitzone-Eigenschaften oder einem [RFC 9557](#rfc_9557_format)-String.

## Instanzeigenschaften

Diese Eigenschaften sind auf `Temporal.ZonedDateTime.prototype` definiert und werden von allen `Temporal.ZonedDateTime`-Instanzen geteilt.

- {{jsxref("Temporal/ZonedDateTime/calendarId", "Temporal.ZonedDateTime.prototype.calendarId")}} {{experimental_inline}}
  - : Gibt einen String zurück, der den [Kalender](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars) repräsentiert, der verwendet wird, um das interne ISO 8601 Datum zu interpretieren.
- {{jsxref("Object/constructor", "Temporal.ZonedDateTime.prototype.constructor")}}
  - : Die Konstruktionsfunktion, die das Instanzobjekt erstellt hat. Für `Temporal.ZonedDateTime`-Instanzen ist der Initialwert der {{jsxref("Temporal/ZonedDateTime/ZonedDateTime", "Temporal.ZonedDateTime()")}} Konstruktor.
- {{jsxref("Temporal/ZonedDateTime/day", "Temporal.ZonedDateTime.prototype.day")}} {{experimental_inline}}
  - : Gibt eine positive Ganzzahl zurück, die den 1-basierten Tagesindex im Monat dieses Datums repräsentiert, was die gleiche Tageszahl ist, die Sie auf einem Kalender sehen würden. [Kalender](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars)-abhängig. Beginnt im Allgemeinen bei 1 und ist durchgehend, aber nicht immer.
- {{jsxref("Temporal/ZonedDateTime/dayOfWeek", "Temporal.ZonedDateTime.prototype.dayOfWeek")}} {{experimental_inline}}
  - : Gibt eine positive Ganzzahl zurück, die den 1-basierten Tagesindex in der Woche dieses Datums repräsentiert. Tage in einer Woche sind nacheinander von `1` bis {{jsxref("Temporal/ZonedDateTime/daysInWeek", "daysInWeek")}} nummeriert, wobei jede Zahl ihrem Namen zugeordnet wird. [Kalender](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars)-abhängig. Im Kalender repräsentiert 1 üblicherweise Montag, auch wenn die Kalender möglicherweise einen anderen Tag als ersten Wochentag betrachten (siehe {{jsxref("Intl/Locale/getWeekInfo", "Intl.Locale.prototype.getWeekInfo()")}}).
- {{jsxref("Temporal/ZonedDateTime/dayOfYear", "Temporal.ZonedDateTime.prototype.dayOfYear")}} {{experimental_inline}}
  - : Gibt eine positive Ganzzahl zurück, die den 1-basierten Tagesindex im Jahr dieses Datums repräsentiert. Der erste Tag dieses Jahres ist `1`, und der letzte Tag ist der {{jsxref("Temporal/ZonedDateTime/daysInYear", "daysInYear")}}. [Kalender](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars)-abhängig.
- {{jsxref("Temporal/ZonedDateTime/daysInMonth", "Temporal.ZonedDateTime.prototype.daysInMonth")}} {{experimental_inline}}
  - : Gibt eine positive Ganzzahl zurück, die die Anzahl der Tage im Monat dieses Datums repräsentiert. [Kalender](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars)-abhängig.
- {{jsxref("Temporal/ZonedDateTime/daysInWeek", "Temporal.ZonedDateTime.prototype.daysInWeek")}} {{experimental_inline}}
  - : Gibt eine positive Ganzzahl zurück, die die Anzahl der Tage in der Woche dieses Datums repräsentiert. [Kalender](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars)-abhängig. Für den ISO 8601 Kalender sind es immer 7, aber in anderen Kalendersystemen kann es von Woche zu Woche unterschiedlich sein.
- {{jsxref("Temporal/ZonedDateTime/daysInYear", "Temporal.ZonedDateTime.prototype.daysInYear")}} {{experimental_inline}}
  - : Gibt eine positive Ganzzahl zurück, die die Anzahl der Tage im Jahr dieses Datums repräsentiert. [Kalender](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars)-abhängig. Für den ISO 8601-Kalender sind es 365, oder 366 in einem Schaltjahr.
- {{jsxref("Temporal/ZonedDateTime/epochMilliseconds", "Temporal.ZonedDateTime.prototype.epochMilliseconds")}} {{experimental_inline}}
  - : Gibt eine Ganzzahl zurück, die die Anzahl der Millisekunden darstellt, die seit dem Unix-Epoch (Mitternacht zu Beginn des 1. Januar 1970, UTC) bis zu diesem Instant vergangen sind. Entspricht der Division von `epochNanoseconds` durch `1e6` und dem Abrunden des Ergebnisses.
- {{jsxref("Temporal/ZonedDateTime/epochNanoseconds", "Temporal.ZonedDateTime.prototype.epochNanoseconds")}} {{experimental_inline}}
  - : Gibt ein {{jsxref("BigInt")}} zurück, das die Anzahl der Nanosekunden darstellt, die seit dem Unix-Epoch (Mitternacht zu Beginn des 1. Januar 1970, UTC) bis zu diesem Instant vergangen sind.
- {{jsxref("Temporal/ZonedDateTime/era", "Temporal.ZonedDateTime.prototype.era")}} {{experimental_inline}}
  - : Gibt einen kalenderspezifischen Kleinbuchstaben-String zurück, der die Epoche dieses Datums repräsentiert, oder `undefined`, wenn der Kalender keine Epochen verwendet (z. B. ISO 8601). `era` und `eraYear` zusammen identifizieren ein Jahr im Kalender eindeutig, auf die gleiche Weise wie `year`. [Kalender](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars)-abhängig. Für Gregorianisch ist es entweder `"gregory"` oder `"gregory-inverse"`.
- {{jsxref("Temporal/ZonedDateTime/eraYear", "Temporal.ZonedDateTime.prototype.eraYear")}} {{experimental_inline}}
  - : Gibt eine nicht-negative Ganzzahl zurück, die das Jahr dieses Datums innerhalb der Epoche repräsentiert, oder `undefined`, wenn der Kalender keine Epochen verwendet (z. B. ISO 8601). Der Jahrindex beginnt normalerweise bei 1 (häufiger) oder 0, und Jahre in einer Epoche können mit der Zeit abnehmen (z. B. Gregorianische v. Chr.). `era` und `eraYear` zusammen identifizieren ein Jahr im Kalender eindeutig, auf die gleiche Weise wie `year`. [Kalender](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars)-abhängig.
- {{jsxref("Temporal/ZonedDateTime/hour", "Temporal.ZonedDateTime.prototype.hour")}} {{experimental_inline}}
  - : Gibt eine Ganzzahl von 0 bis 23 zurück, die die Stundenkomponente dieser Zeit repräsentiert.
- {{jsxref("Temporal/ZonedDateTime/hoursInDay", "Temporal.ZonedDateTime.prototype.hoursInDay")}} {{experimental_inline}}
  - : Gibt eine positive Ganzzahl zurück, die die Anzahl der Stunden des Tages dieses Datums in der Zeitzone repräsentiert. Es können mehr oder weniger als 24 sein im Fall von Offset-Änderungen wie Sommerzeit.
- {{jsxref("Temporal/ZonedDateTime/inLeapYear", "Temporal.ZonedDateTime.prototype.inLeapYear")}} {{experimental_inline}}
  - : Gibt einen booleschen Wert zurück, der angibt, ob dieses Datum in einem Schaltjahr ist. Ein Schaltjahr ist ein Jahr, das mehr Tage (aufgrund eines Schalttags oder Schaltmonat) als ein gewöhnliches Jahr hat. [Kalender](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars)-abhängig.
- {{jsxref("Temporal/ZonedDateTime/microsecond", "Temporal.ZonedDateTime.prototype.microsecond")}} {{experimental_inline}}
  - : Gibt eine Ganzzahl von 0 bis 999 zurück, die die Mikrosekunde (10<sup>-6</sup> Sekunde) Komponente dieser Zeit darstellt.
- {{jsxref("Temporal/ZonedDateTime/millisecond", "Temporal.ZonedDateTime.prototype.millisecond")}} {{experimental_inline}}
  - : Gibt eine Ganzzahl von 0 bis 999 zurück, die die Millisekunde (10<sup>-3</sup> Sekunde) Komponente dieser Zeit darstellt.
- {{jsxref("Temporal/ZonedDateTime/minute", "Temporal.ZonedDateTime.prototype.minute")}} {{experimental_inline}}
  - : Gibt eine Ganzzahl von 0 bis 59 zurück, die die Minutenkomponente dieser Zeit darstellt.
- {{jsxref("Temporal/ZonedDateTime/month", "Temporal.ZonedDateTime.prototype.month")}} {{experimental_inline}}
  - : Gibt eine positive Ganzzahl zurück, die den 1-basierten Monatsindex des Jahres dieses Datums repräsentiert. Der erste Monat dieses Jahres ist `1`, und der letzte Monat ist der {{jsxref("Temporal/ZonedDateTime/monthsInYear", "monthsInYear")}}. [Kalender](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars)-abhängig. Beachten Sie, dass im Gegensatz zu {{jsxref("Date.prototype.getMonth()")}} der Index 1-basiert ist. Wenn der Kalender Schaltmonate hat, dann kann der Monat mit dem gleichen {{jsxref("Temporal/ZonedDateTime/monthCode", "monthCode")}} für verschiedene Jahre unterschiedliche `month`-Indizes haben.
- {{jsxref("Temporal/ZonedDateTime/monthCode", "Temporal.ZonedDateTime.prototype.monthCode")}} {{experimental_inline}}
  - : Gibt einen kalenderspezifischen String zurück, der den Monat dieses Datums repräsentiert. [Kalender](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars)-abhängig. Normalerweise ist es `M` plus einer zweistelligen Monatsnummer. Für Schaltmonate ist es der vorangegangene Monatscode gefolgt von `L`. Wenn der Schaltmonat der erste Monat des Jahres ist, lautet der Code `M00L`.
- {{jsxref("Temporal/ZonedDateTime/monthsInYear", "Temporal.ZonedDateTime.prototype.monthsInYear")}} {{experimental_inline}}
  - : Gibt eine positive Ganzzahl zurück, die die Anzahl der Monate des Jahres dieses Datums repräsentiert. [Kalender](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars)-abhängig. Für den ISO 8601-Kalender sind es immer 12, aber in anderen Kalendersystemen kann es unterschiedlich sein.
- {{jsxref("Temporal/ZonedDateTime/nanosecond", "Temporal.ZonedDateTime.prototype.nanosecond")}} {{experimental_inline}}
  - : Gibt eine Ganzzahl von 0 bis 999 zurück, die die Nanosekunde (10<sup>-9</sup> Sekunde) Komponente dieser Zeit darstellt.
- {{jsxref("Temporal/ZonedDateTime/offset", "Temporal.ZonedDateTime.prototype.offset")}} {{experimental_inline}}
  - : Gibt einen String zurück, der den [Offset](#zeitzonen_und_offsets) darstellt, der zur Interpretation des internen Instants verwendet wird, in der Form `±HH:mm` (oder `±HH:mm:ss.sssssssss` mit so viel Subminutenpräzision wie nötig).
- {{jsxref("Temporal/ZonedDateTime/offsetNanoseconds", "Temporal.ZonedDateTime.prototype.offsetNanoseconds")}} {{experimental_inline}}
  - : Gibt eine Ganzzahl zurück, die den [Offset](#zeitzonen_und_offsets) darstellt, der zur Interpretation des internen Instants verwendet wird, als Anzahl von Nanosekunden (positiv oder negativ).
- {{jsxref("Temporal/ZonedDateTime/second", "Temporal.ZonedDateTime.prototype.second")}} {{experimental_inline}}
  - : Gibt eine Ganzzahl von 0 bis 59 zurück, die die Sekundenkomponente dieser Zeit darstellt.
- {{jsxref("Temporal/ZonedDateTime/timeZoneId", "Temporal.ZonedDateTime.prototype.timeZoneId")}} {{experimental_inline}}
  - : Gibt einen String zurück, der den [Zeitzonenbezeichner](#zeitzonen_und_offsets) darstellt, der zur Interpretation des internen Instants verwendet wird. Es verwendet den gleichen String, der beim Erstellen des `Temporal.ZonedDateTime`-Objekts verwendet wurde, entweder ein IANA-Zeitzonenname oder ein fester Offset.
- {{jsxref("Temporal/ZonedDateTime/weekOfYear", "Temporal.ZonedDateTime.prototype.weekOfYear")}} {{experimental_inline}}
  - : Gibt eine positive Ganzzahl zurück, die den 1-basierten Wochenindex im {{jsxref("Temporal/ZonedDateTime/yearOfWeek", "yearOfWeek")}} dieses Datums repräsentiert, oder `undefined`, wenn der Kalender kein gut definiertes Wochensystem hat. Die erste Woche des Jahres ist `1`. [Kalender](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars)-abhängig. Beachten Sie, dass für ISO 8601 die ersten und letzten Tage des Jahres der letzten Woche des Vorjahres oder der ersten Woche des nächsten Jahres zugeschrieben werden können.
- {{jsxref("Temporal/ZonedDateTime/year", "Temporal.ZonedDateTime.prototype.year")}} {{experimental_inline}}
  - : Gibt eine Ganzzahl zurück, die die Anzahl der Jahre dieses Datums relativ zum Beginn eines kalenderspezifischen Epoche-Jahres darstellt. [Kalender](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars)-abhängig. Üblicherweise ist Jahr 1 entweder das erste Jahr der neuesten Epoche oder das ISO 8601 Jahr `0001`. Wenn die Epoche mitten im Jahr liegt, hat dieses Jahr vor und nach dem Startdatum der Epoche denselben Wert.
- {{jsxref("Temporal/ZonedDateTime/yearOfWeek", "Temporal.ZonedDateTime.prototype.yearOfWeek")}} {{experimental_inline}}
  - : Gibt eine Ganzzahl zurück, die das Jahr angibt, das mit der {{jsxref("Temporal/ZonedDateTime/weekOfYear", "weekOfYear")}} dieses Datums gepaart werden soll, oder `undefined`, wenn der Kalender kein gut definiertes Wochensystem hat. [Kalender](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars)-abhängig. Normalerweise ist dies das Jahr des Datums, aber für ISO 8601 können die ersten und letzten Tage des Jahres der letzten Woche des Vorjahres oder der ersten Woche des folgenden Jahres zugeordnet werden, wodurch sich das `yearOfWeek` um 1 unterscheidet.
- `Temporal.ZonedDateTime.prototype[Symbol.toStringTag]`
  - : Der anfängliche Wert der [`[Symbol.toStringTag]`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag) Eigenschaft ist der String `"Temporal.ZonedDateTime"`. Diese Eigenschaft wird in {{jsxref("Object.prototype.toString()")}} verwendet.

## Instanzmethoden

- {{jsxref("Temporal/ZonedDateTime/add", "Temporal.ZonedDateTime.prototype.add()")}} {{experimental_inline}}
  - : Gibt ein neues `Temporal.ZonedDateTime`-Objekt zurück, das diesen Zeitpunkt um eine gegebene Dauer (in einer Form, die durch {{jsxref("Temporal/Duration/from", "Temporal.Duration.from()")}} konvertierbar ist) verschoben darstellt.
- {{jsxref("Temporal/ZonedDateTime/equals", "Temporal.ZonedDateTime.prototype.equals()")}} {{experimental_inline}}
  - : Gibt `true` zurück, wenn dieser Zeitpunkt im Wert einem anderen Zeitpunkt entspricht (in einer Form, die durch {{jsxref("Temporal/ZonedDateTime/from", "Temporal.ZonedDateTime.from()")}} konvertierbar ist), und `false` andernfalls. Sie werden sowohl nach ihren Instant-Werten, Zeitzonen und ihren Kalendern verglichen, sodass zwei Zeitpunkte aus unterschiedlichen Kalendern oder Zeitzonen als gleich von {{jsxref("Temporal/ZonedDateTime/compare", "Temporal.ZonedDateTime.compare()")}} betrachtet werden können, aber nicht von `equals()`.
- {{jsxref("Temporal/ZonedDateTime/getTimeZoneTransition", "Temporal.ZonedDateTime.prototype.getTimeZoneTransition()")}} {{experimental_inline}}
  - : Gibt ein `Temporal.ZonedDateTime`-Objekt zurück, das den ersten Zeitpunkt nach oder vor diesem Zeitpunkt darstellt, bei dem sich der UTC-Offset der Zeitzone ändert, oder `null`, wenn es keinen solchen Übergang gibt. Dies ist nützlich, um die Offset-Regeln einer Zeitzone zu erfahren, wie zum Beispiel ihre Sommerzeitregelung.
- {{jsxref("Temporal/ZonedDateTime/round", "Temporal.ZonedDateTime.prototype.round()")}} {{experimental_inline}}
  - : Gibt ein neues `Temporal.ZonedDateTime`-Objekt zurück, das diesen Zeitpunkt auf die gegebene Einheit gerundet darstellt.
- {{jsxref("Temporal/ZonedDateTime/since", "Temporal.ZonedDateTime.prototype.since()")}} {{experimental_inline}}
  - : Gibt ein neues {{jsxref("Temporal.Duration")}}-Objekt zurück, das die Dauer von einem anderen Zeitpunkt (in einer Form, die durch {{jsxref("Temporal/ZonedDateTime/from", "Temporal.ZonedDateTime.from()")}} konvertierbar ist) zu diesem Zeitpunkt darstellt. Die Dauer ist positiv, wenn der andere Zeitpunkt vor diesem Zeitpunkt liegt, und negativ, wenn danach.
- {{jsxref("Temporal/ZonedDateTime/startOfDay", "Temporal.ZonedDateTime.prototype.startOfDay()")}} {{experimental_inline}}
  - : Gibt ein `Temporal.ZonedDateTime`-Objekt zurück, das den ersten Zeitpunkt dieses Datums in der Zeitzone darstellt. Es hat normalerweise eine Zeit von `00:00:00`, kann jedoch anders sein, wenn Mitternacht aufgrund von Offset-Änderungen nicht existiert, in diesem Fall wird die erste existierende Zeit zurückgegeben.
- {{jsxref("Temporal/ZonedDateTime/subtract", "Temporal.ZonedDateTime.prototype.subtract()")}} {{experimental_inline}}
  - : Gibt ein neues `Temporal.ZonedDateTime`-Objekt zurück, das diesen Zeitpunkt um eine gegebene Dauer (in einer Form, die durch {{jsxref("Temporal/Duration/from", "Temporal.Duration.from()")}} konvertierbar ist) rückwärts verschoben darstellt.
- {{jsxref("Temporal/ZonedDateTime/toInstant", "Temporal.ZonedDateTime.prototype.toInstant()")}} {{experimental_inline}}
  - : Gibt ein neues {{jsxref("Temporal.Instant")}}-Objekt zurück, das den Instant dieses Datums-Uhrzeit darstellt.
- {{jsxref("Temporal/ZonedDateTime/toJSON", "Temporal.ZonedDateTime.prototype.toJSON()")}} {{experimental_inline}}
  - : Gibt einen String zurück, der diesen Zeitpunkt in demselben [RFC 9557 Format](#rfc_9557_format) wie beim Aufrufen von {{jsxref("Temporal/ZonedDateTime/toString", "toString()")}} darstellt. Soll implizit durch {{jsxref("JSON.stringify()")}} aufgerufen werden.
- {{jsxref("Temporal/ZonedDateTime/toLocaleString", "Temporal.ZonedDateTime.prototype.toLocaleString()")}} {{experimental_inline}}
  - : Gibt einen String mit einer sprachabhängigen Darstellung dieses Zeitpunktes zurück.
- {{jsxref("Temporal/ZonedDateTime/toPlainDate", "Temporal.ZonedDateTime.prototype.toPlainDate()")}} {{experimental_inline}}
  - : Gibt ein neues {{jsxref("Temporal.PlainDate")}}-Objekt zurück, das den Datumsbestandteil dieses Zeitpunktes darstellt.
- {{jsxref("Temporal/ZonedDateTime/toPlainDateTime", "Temporal.ZonedDateTime.prototype.toPlainDateTime()")}} {{experimental_inline}}
  - : Gibt ein neues {{jsxref("Temporal.PlainDateTime")}}-Objekt zurück, das den Datums- und Zeitbestandteil dieses Zeitpunktes darstellt. Nur die Zeitzoneninformationen werden entfernt.
- {{jsxref("Temporal/ZonedDateTime/toPlainTime", "Temporal.ZonedDateTime.prototype.toPlainTime()")}} {{experimental_inline}}
  - : Gibt ein neues {{jsxref("Temporal.PlainTime")}}-Objekt zurück, das den Zeitbestandteil dieser Uhrzeit darstellt.
- {{jsxref("Temporal/ZonedDateTime/toString", "Temporal.ZonedDateTime.prototype.toString()")}} {{experimental_inline}}
  - : Gibt einen String zurück, der diesen Zeitpunkt in dem [RFC 9557 Format](#rfc_9557_format) darstellt.
- {{jsxref("Temporal/ZonedDateTime/until", "Temporal.ZonedDateTime.prototype.until()")}} {{experimental_inline}}
  - : Gibt ein neues {{jsxref("Temporal.Duration")}}-Objekt zurück, das die Dauer von diesem Zeitpunkt zu einem anderen Zeitpunkt (in einer Form, die durch {{jsxref("Temporal/ZonedDateTime/from", "Temporal.ZonedDateTime.from()")}} konvertierbar ist) darstellt. Die Dauer ist positiv, wenn der andere Zeitpunkt nach diesem Zeitpunkt liegt, und negativ, wenn davor.
- {{jsxref("Temporal/ZonedDateTime/valueOf", "Temporal.ZonedDateTime.prototype.valueOf()")}} {{experimental_inline}}
  - : Löst einen {{jsxref("TypeError")}} aus, der verhindert, dass `Temporal.ZonedDateTime`-Instanzen [implizit in primitive Werte konvertiert](/de/docs/Web/JavaScript/Guide/Data_structures#primitive_coercion) werden, wenn sie in arithmetischen oder Vergleichsoperationen verwendet werden.
- {{jsxref("Temporal/ZonedDateTime/with", "Temporal.ZonedDateTime.prototype.with()")}} {{experimental_inline}}
  - : Gibt ein neues `Temporal.ZonedDateTime`-Objekt zurück, das diesen Zeitpunkt mit einigen Feldern darstellt, die durch neue Werte ersetzt wurden.
- {{jsxref("Temporal/ZonedDateTime/withCalendar", "Temporal.ZonedDateTime.prototype.withCalendar()")}} {{experimental_inline}}
  - : Gibt ein neues `Temporal.ZonedDateTime`-Objekt zurück, das diesen Zeitpunkt im neuen Kalendersystem interpretiert darstellt.
- {{jsxref("Temporal/ZonedDateTime/withPlainTime", "Temporal.ZonedDateTime.prototype.withPlainTime()")}} {{experimental_inline}}
  - : Gibt ein neues `Temporal.ZonedDateTime`-Objekt zurück, das diesen Zeitpunkt mit dem Zeitbestandteil darstellt, der vollständig durch die neue Zeit ersetzt wurde (in einer Form, die durch {{jsxref("Temporal/PlainTime/from", "Temporal.PlainTime.from()")}} konvertierbar ist).
- {{jsxref("Temporal/ZonedDateTime/withTimeZone", "Temporal.ZonedDateTime.prototype.withTimeZone()")}} {{experimental_inline}}
  - : Gibt ein neues `Temporal.ZonedDateTime`-Objekt zurück, das denselben Instant wie dieser Zeitpunkt, jedoch in der neuen Zeitzone darstellt.

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
