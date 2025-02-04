---
title: Temporal.ZonedDateTime
slug: Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime
l10n:
  sourceCommit: 3cecb7942e8b1c5e12b58b2838a2fb8a3f4ef907
---

{{JSRef}}{{SeeCompatTable}}

Das **`Temporal.ZonedDateTime`** Objekt repräsentiert ein Datum und eine Uhrzeit mit einer Zeitzone. Es wird grundsätzlich als Kombination aus einem [instant](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/Instant), einer Zeitzone und einem Kalendersystem dargestellt.

## Beschreibung

Ein `ZonedDateTime` fungiert als Brücke zwischen einer exakten Zeit und einer Uhrzeit: Es stellt gleichzeitig einen Moment in der Geschichte dar (wie ein {{jsxref("Temporal.Instant")}}) und eine lokale, auf dem Kalender basierende Zeit (wie ein {{jsxref("Temporal.PlainDateTime")}}). Dies geschieht, indem das Instant, die Zeitzone und das Kalendersystem gespeichert werden. Die Zeitzone wird verwendet, um zwischen dem Instant und der lokalen Zeit zu konvertieren, und das Kalendersystem wird verwendet, um die lokale Zeit zu interpretieren.

`ZonedDateTime` ist die einzige `Temporal`-Klasse, die sich der Zeitzone bewusst ist. Die Hinzufügung einer Zeitzone bringt bedeutende Verhaltensunterschiede der `ZonedDateTime` Objekte gegenüber {{jsxref("Temporal.PlainDateTime")}} Objekten mit sich. Namentlich können Sie nicht mehr davon ausgehen, dass "die Zeit 1 Minute später" an jedem Tag gleich ist, oder dass ein Tag 24 Stunden hat. Im schlimmsten Fall könnte ein ganzer Tag im lokalen Kalender fehlen. Unten bieten wir einen kurzen Überblick über Zeitzonen und Offsets und wie sie die Umstellung zwischen UTC-Zeit und lokaler Zeit beeinflussen.

### Zeitzonen und Offsets

Alle Zeiten in JavaScript haben einen goldenen Standard: die UTC-Zeit, die sich kontinuierlich und gleichmäßig mit dem Fortschreiten der physischen Zeit erhöht. Im Gegensatz dazu interessieren sich Benutzer mehr für ihre lokale Zeit, die Zeit, die sie auf ihren Kalendern und Uhren sehen. Der Prozess der Umrechnung zwischen UTC-Zeit und lokaler Zeit umfasst einen Zeitzonen-Offset, der wie folgt berechnet wird:

```plain
local time = UTC time + offset
```

Zum Beispiel, wenn die UTC-Zeit 1970-01-01T00:00:00 ist und der Offset "-05:00" ist, dann ist die lokale Zeit:

```plain
1970-01-01T00:00:00 + -05:00 = 1969-12-31T19:00:00
```

Indem Sie diese lokale Zeit mit dem Offset nachstellen, und diese Zeit als "1969-12-31T19:00:00-05:00" ausdrücken, kann sie jetzt unmissverständlich als ein Moment in der Geschichte verstanden werden.

Um den Offset zu kennen, benötigen wir zwei Informationen, die _Zeitzone_ und den _Moment_. Die Zeitzone ist eine Region auf der Erde, in der zu allen Zeiten derselbe Offset verwendet wird. Zwei Uhren in derselben Zeitzone zeigen immer gleichzeitig die gleiche Zeit, aber der Offset ist nicht unbedingt konstant: Das heißt, die Zeiten dieser Uhren können sich abrupt ändern. Dies geschieht häufig während der Sommerzeitumstellungen, bei denen der Offset um eine Stunde geändert wird, was zweimal im Jahr passiert. Offsets können sich auch dauerhaft durch politische Änderungen ändern, z.B. ein Land wechselt die Zeitzone.

Die Zeitzonen sind in der [IANA Time Zone Database](https://www.iana.org/time-zones) gespeichert. Jede IANA-Zeitzone hat:

- Einen _primären Zeitzonen-Identifier_, der die Zeitzone eindeutig identifiziert. Er bezieht sich normalerweise auf ein geografisches Gebiet, das von einer Stadt verankert wird (z.B. `Europe/Paris` oder `Africa/Kampala`), kann aber auch Zeitzonen mit einem einzigen Offset wie `UTC` (ein konsistenter `+00:00` Offset) oder `Etc/GMT+5` (was aus historischen Gründen ein negativer Offset `-05:00` ist) bezeichnen. Aus historischen Gründen ist der primäre Name für die UTC-Zeitzone `UTC`, obwohl er in IANA `Etc/UTC` ist.
- Eine _Zeitzonendefinition_ in Form einer Tabelle, die UTC-Datums-/Zeitbereiche (einschließlich zukünftiger Bereiche) auf spezifische Offsets abbildet.
- Null oder mehr _nicht-primäre Zeitzonen-Identifier_, die Aliase für den primären Zeitzonen-Identifier sind. Diese sind normalerweise historische Namen, die nicht mehr verwendet werden, aber aus Kompatibilitätsgründen erhalten bleiben. Siehe unten für weitere Informationen.

Als Eingabe werden benannte Bezeichnungen fallunempfindlich abgeglichen. Intern werden sie in ihrer bevorzugten Schreibweise gespeichert, und nicht-primäre Bezeichnungen werden _nicht_ in ihre primäre Bezeichnung umgewandelt.

> [!NOTE]
> Wenn Sie den Zeitzonennamen festlegen, möchten Sie ihn selten auf `"UTC"` setzen. `ZonedDateTime` ist dazu gedacht, Benutzern angezeigt zu werden, aber kein Mensch lebt in der "UTC" Zeitzone. Wenn Sie die Zeitzone zum Zeitpunkt der Erstellung nicht kennen, aber die lokale Uhrzeit wissen, verwenden Sie einen {{jsxref("Temporal.PlainDateTime")}}. Wenn Sie den genauen Moment kennen, verwenden Sie einen {{jsxref("Temporal.Instant")}}.

Wenn eine `Temporal`-API einen _Zeitzonen-Identifier_ akzeptiert, akzeptiert sie zusätzlich zu primären Zeitzonen-Identifiern und nicht-primären Zeitzonen-Identifiern auch einen _Offset-Zeitzonen-Identifier_, der dieselbe Form wie der Offset hat, außer dass Unterminuten-Präzision nicht erlaubt ist. Zum Beispiel sind `+05:30`, `-08`, `+0600` alle gültige Offsets. Intern werden die Offset-Bezeichner in der `±HH:mm`-Form gespeichert.

> [!NOTE]
> Vermeiden Sie es, Offset-Bezeichner zu verwenden, wenn Sie stattdessen eine benannte Zeitzone verwenden können. Selbst wenn eine Region immer nur einen Offset verwendet hat, ist es besser, den benannten Identifier zu verwenden, um sich gegen zukünftige politische Änderungen des Offsets zu schützen.
>
> Wenn eine Region mehrere Offsets verwendet (oder verwendet hat), dann ist die Verwendung ihrer benannten Zeitzone noch wichtiger. Dies liegt daran, dass `Temporal.ZonedDateTime` Methoden wie `add` oder `with` verwenden kann, um neue Instanzen zu einem anderen Moment zu erstellen. Wenn diese abgeleiteten Instanzen einem Moment entsprechen, der einen anderen Offset verwendet (z.B. nach einer Sommerzeitumstellung), dann werden Ihre Berechnungen eine inkorrekte lokale Zeit haben. Die Verwendung einer benannten Zeitzone stellt sicher, dass lokale Daten und Zeiten immer für den korrekten Offset zu diesem Zeitpunkt angepasst werden.

Der Einfachheit halber, wenn Sie einen Zeitzonen-Identifier zu `Temporal`-APIs wie `Temporal.ZonedDateTime.prototype.withTimeZone()` und der `timeZoneId`-Option von `Temporal.ZonedDateTime.from()` bereitstellen, können Sie ihn in einigen anderen Formen angeben:

- Als eine andere `ZonedDateTime`-Instanz, deren `timeZoneId` verwendet wird.
- Als ein [RFC 9557 String](#rfc_9557_format) mit einer Zeitzonenannotation, deren Zeitzonen-Identifikator verwendet wird.
- Als ein ISO 8601 / RFC 3339 String, der einen Offset enthält, dessen Offset als Offset-Identifikator verwendet wird; oder, wenn `Z` verwendet wird, wird die `"UTC"`-Zeitzone verwendet. Diese Verwendung wird im Allgemeinen nicht empfohlen, da, wie oben erläutert, Offset-Identifikatoren die Möglichkeit fehlt, andere `Temporal.ZonedDateTime` Instanzen sicher über eine Offset-Übergang wie beim Start oder Ende der Sommerzeit abzuleiten. Betrachten Sie stattdessen nur `Temporal.Instant` zu verwenden oder die tatsächliche benannte Zeitzone des Nutzers abzurufen.

Die IANA-Zeitzonendatenbank ändert sich von Zeit zu Zeit, normalerweise um neue Zeitzonen als Reaktion auf politische Änderungen hinzuzufügen. Allerdings werden IANA-Zeitzonen-Identifier selten umbenannt, um die aktualisierte englische Übersetzung eines Städtenamens wiederzugeben oder um veraltete Namenskonventionen zu aktualisieren. Zum Beispiel hier ein paar bemerkenswerte Namensänderungen:

| Aktueller IANA primärer Identifier | Alter, jetzt nicht primärer Identifier |
| ---------------------------------- | -------------------------------------- |
| `America/Argentina/Buenos_Aires`   | `America/Buenos_Aires`                 |
| `Asia/Kolkata`                     | `Asia/Calcutta`                        |
| `Asia/Ho_Chi_Minh`                 | `Asia/Saigon`                          |
| `Europe/Kyiv`                      | `Europe/Kiev`                          |

Historisch verursachten diese Umbenennungen Probleme für Programmierer, weil die Unicode [CLDR-Datenbank](https://github.com/unicode-org/cldr-json/blob/main/cldr-json/cldr-bcp47/bcp47/timezone.json) (eine von Browsern genutzte Bibliothek zur Bereitstellung von Zeitzonen-Identifikatoren und -Daten) IANAs Umbenennungen aus [Stabilitätsgründen](https://unicode.org/reports/tr35/#Time_Zone_Identifiers) nicht ins Auge fasste. Infolgedessen berichteten einige Browser wie Chrome und Safari die veralteten Identifier von CLDR, während andere Browser wie Firefox die voreingestellten Werte von CLDR überschrieben und die aktuellen primären Identifier meldeten.

Mit der Einführung von Temporal ist dieses Verhalten nun mehr standardisiert:

- [CLDR-Daten](https://github.com/unicode-org/cldr-json/blob/main/cldr-json/cldr-bcp47/bcp47/timezone.json) enthalten nun ein `"_iana"` Attribut, das den neuesten Bezeichner angibt, wenn der ältere, stabile Bezeichner umbenannt wurde. Browser können dieses neue Attribut verwenden, um den Aufrufern aktuelle Identifikationen bereitzustellen.
- Zeitzonen-Identifikatoren, die vom Programmierer bereitgestellt werden, werden niemals durch einen Alias ersetzt. Zum Beispiel, wenn der Aufrufer `Asia/Calcutta` oder `Asia/Kolkata` als Identifikator-Eingabe zu {{jsxref("Temporal/ZonedDateTime/from", "Temporal.ZonedDateTime.from()")}} bereitstellt, wird derselbe Identifier in der resultierenden Instanz's {{jsxref("Temporal/ZonedDateTime/timeZoneId", "timeZoneId")}} zurückgegeben. Beachten Sie, dass die Buchstabengröße der Ausgaben normalisiert wird, um IANA zu entsprechen. Daher erzeugt `ASIA/calCuTTa` als Eingabe eine {{jsxref("Temporal/ZonedDateTime/timeZoneId", "timeZoneId")}} von `Asia/Calcutta` als Ausgabe.
- Wenn ein Zeitzonen-Identifier nicht von einem Aufrufer bereitgestellt wird, sondern stattdessen vom System selbst bezogen wird (z.B. bei der Verwendung von {{jsxref("Temporal/Now/timeZoneId", "Temporal.Now.timeZoneId()")}}), werden moderne Identifier in allen Browsern zurückgegeben. Bei Städtenamenänderungen gibt es eine zweijährige Verzögerung, bevor diese systembereitgestellten Bezeichnungs-APIs den neuen Namen offenlegen, wodurch anderen Komponenten (wie einem Node-Server) Zeit gegeben wird, ihre Kopien der IANA-Datenbank zu aktualisieren, um den neuen Namen zu erkennen.

Beachten Sie, dass die Attribuierung der primären Identifier länderspezifisch bleibt: Zum Beispiel verzeichnet die IANA-Datenbank `Atlantic/Reykjavik` als Alias für `Africa/Abidjan`, aber da sie unterschiedlichen Ländern (Island bzw. Côte d'Ivoire) entsprechen, werden sie als unterschiedliche primäre Identifier behandelt.

Diese Standardisierung gilt auch außerhalb von `Temporal`. Zum Beispiel wird die `timeZone`-Option, die von {{jsxref("Intl/DateTimeFormat/resolvedOptions", "Intl.DateTimeFormat.prototype.resolvedOptions()")}} zurückgegeben wird, auch niemals durch einen Alias ersetzt, obwohl Browser diese Identifier traditionell vor der Standardisierung durch Temporal kanonisiert haben. Andererseits würden {{jsxref("Intl/Locale/getTimeZones", "Intl.Locale.prototype.getTimeZones()")}} und {{jsxref("Intl.supportedValuesOf()")}} (`timeZone`-Option) den aktuellsten Identifier zurückgeben, während einige Browser früher den alten, nicht primären Identifier zurückgaben.

### RFC 9557 Format

`ZonedDateTime` Objekte können mithilfe des [RFC 9557](https://datatracker.ietf.org/doc/html/rfc9557) Formats serialisiert und analysiert werden, einer Erweiterung des [ISO 8601 / RFC 3339](https://datatracker.ietf.org/doc/html/rfc3339) Formats. Der String hat die folgende Form (Leerzeichen sind nur zur Lesbarkeit und sollen im eigentlichen String nicht vorhanden sein):

```plain
YYYY-MM-DD T HH:mm:ss.sssssssss Z/±HH:mm [time_zone_id] [u-ca=calendar_id]
```

- `YYYY`
  - : Entweder eine vierstellige Zahl oder eine sechsstellige Zahl mit einem `+`- oder `-`-Zeichen.
- `MM`
  - : Eine zweistellige Zahl von `01` bis `12`.
- `DD`
  - : Eine zweistellige Zahl von `01` bis `31`. Die `YYYY`, `MM` und `DD` Komponenten können durch `-` oder gar nichts getrennt werden.
- `T` {{optional_inline}}
  - : Der Datums-/Zeit-Trenner, der `T`, `t` oder ein Leerzeichen sein kann. Vorhanden, falls und nur wenn `HH` vorhanden ist.
- `HH` {{optional_inline}}
  - : Eine zweistellige Zahl von `00` bis `23`. Standardmäßig `00`.
- `mm` {{optional_inline}}
  - : Eine zweistellige Zahl von `00` bis `59`. Standardmäßig `00`.
- `ss.sssssssss` {{optional_inline}}
  - : Eine zweistellige Zahl von `00` bis `59`. Kann optional mit einem `.` oder `,` und eins bis neun Ziffern gefolgt werden. Standardmäßig `00`. Die `HH`, `mm` und `ss` Komponenten können durch `:` oder nichts getrennt werden. Sie können entweder nur `ss` oder sowohl `ss` als auch `mm` auslassen, so dass die Zeit in einer der drei Formen sein kann: `HH`, `HH:mm`, oder `HH:mm:ss.sssssssss`.
- `Z/±HH:mm` {{optional_inline}}
  - : Entweder der UTC-Indikator `Z` oder `z`, oder ein Offset von UTC in der Form `+` oder `-`, gefolgt durch dasselbe Format wie die Zeitkomponente. Beachten Sie, dass Unterminuten-Präzision (`:ss.sssssssss`) von anderen Systemen möglicherweise nicht unterstützt wird und akzeptiert, aber nie ausgegeben wird. Falls weggelassen, wird der Offset aus dem Zeitzonen-Identifier abgeleitet. Falls vorhanden, muss dann auch die Zeit bereitgestellt werden. `Z` ist nicht dasselbe wie `+00:00`: Letzteres bedeutet, dass die Zeit in lokaler Zeit angegeben ist, die zufällig UTC+0 ist, und wird gegen den Zeitzonen-Identifier via der [`offset` option](#offset-mehrdeutigkeit) validiert.
- `[time_zone_id]`
  - : Ersetzen Sie `time_zone_id` durch den Zeitzonen-Identifikator (benannt oder Offset) wie oben beschrieben. Kann ein _kritisches Flag_ haben, indem der Identifier mit `!` vorangestellt wird: z.B. `[!America/New_York]`. Dieses Flag sagt anderen Systemen im Allgemeinen, dass es nicht ignoriert werden kann, wenn sie es nicht unterstützen. Beachten Sie, dass es für `Temporal.ZonedDateTime.from()` erforderlich ist: Falls weggelassen, wird ein `RangeError` ausgelöst. Wenn Sie ISO 8601 / RFC 3339 Strings ohne Zeitzonen-Identifier-Annotations analysieren möchten, verwenden Sie {{jsxref("Temporal/Instant/from", "Temporal.Instant.from()")}} stattdessen.
- `[u-ca=calendar_id]` {{optional_inline}}
  - : Ersetzen Sie `calendar_id` durch das zu verwendende Kalendersystem. Kann ein _kritisches Flag_ haben, indem der Schlüssel mit `!` vorangestellt wird: z.B. `[!u-ca=iso8601]`. Dieses Flag sagt anderen Systemen im Allgemeinen, dass es nicht ignoriert werden kann, wenn sie es nicht unterstützen. Der `Temporal`-Parser wird einen Fehler auslösen, wenn die Anmerkungen zwei oder mehr Kalenderanmerkungen enthalten und eine davon kritisch ist. Standardmäßig `[u-ca=iso8601]`. Beachten Sie, dass das `YYYY-MM-DD` stets als ISO 8601 Kalenderdatum interpretiert und dann in das angegebene Kalender konvertiert wird.

Als Eingabe werden andere Anmerkungen im `[key=value]` Format ignoriert und dürfen kein kritisches Flag haben.

Bei der Serialisierung können Sie die Bruchteile der Sekunde, ob der Offset/Zeitzonen-ID/Kalender-ID angezeigt werden soll, und ob für die Anmerkungen ein kritisches Flag hinzugefügt werden soll, konfigurieren.

### Mehrdeutigkeit und Lücken von lokaler Zeit zu UTC-Zeit

Angesichts einer Zeitzone ist die Umstellung von UTC auf lokale Zeit einfach: Zuerst erhält man den Offset mit dem Zeitzonennamen und dem Moment, dann fügt man den Offset zum Moment hinzu. Das Gegenteil ist nicht wahr: Die Umstellung von lokaler Zeit auf UTC ist ohne einen expliziten Offset mehrdeutig, da eine lokale Zeit zu null, einem oder vielen UTC-Zeiten gehören kann. Betrachten Sie die häufigste Ursache: Sommerzeitumstellungen. Nehmen Sie zum Beispiel New York. Sein Standardoffset ist UTC-5, aber während der Sommerzeit werden alle Uhren um eine Stunde vorgestellt, sodass der Offset UTC-4 wird. In den USA erfolgen Übergänge um 2:00 Uhr Ortszeit, also betrachten Sie diese beiden Übergangstage:

| UTC-Zeit             | New Yorker Zeit           |
| -------------------- | ------------------------- |
| 2024-03-10T06:58:00Z | 2024-03-10T01:58:00-05:00 |
| 2024-03-10T06:59:00Z | 2024-03-10T01:59:00-05:00 |
| 2024-03-10T07:00:00Z | 2024-03-10T03:00:00-04:00 |
| ---                  | ---                       |
| 2024-11-03T05:58:00Z | 2024-11-03T01:58:00-04:00 |
| 2024-11-03T05:59:00Z | 2024-11-03T01:59:00-04:00 |
| 2024-11-03T06:00:00Z | 2024-11-03T01:00:00-05:00 |

Wie Sie sehen können, verschwand im März eine Stunde aus der lokalen Zeit, und im November gibt es zwei Stunden, die die gleiche Uhrzeit haben. Angenommen, wir haben ein `PlainDateTime` gespeichert, das "2024-03-10T02:05:00" sagt, und wir wollen es in der `America/New_York`-Zeitzone interpretieren, dann wird es keine Zeit geben, die ihm entspricht, während ein `PlainDateTime`, das "2024-11-03T01:05:00" sagt, zu zwei verschiedenen Momenten gehören kann.

Wenn ein `ZonedDateTime` aus einer lokalen Uhrzeit konstruiert wird (unter Verwendung {{jsxref("Temporal/ZonedDateTime/from", "Temporal.ZonedDateTime.from()")}}, {{jsxref("Temporal/ZonedDateTime/with", "Temporal.ZonedDateTime.prototype.with()")}}, {{jsxref("Temporal/PlainDateTime/toZonedDateTime", "Temporal.PlainDateTime.prototype.toZonedDateTime()")}}), ist das Verhalten für Mehrdeutigkeit und Lücken über die `disambiguation`-Option konfigurierbar:

- `earlier`
  - : Wenn es zwei mögliche Momente gibt, wählen Sie den früheren. Falls es eine Lücke gibt, gehen Sie um die Lückendauer zurück.
- `later`
  - : Wenn es zwei mögliche Momente gibt, wählen Sie den späteren. Falls es eine Lücke gibt, gehen Sie um die Lückendauer vor.
- `compatible` (Standard)
  - : Gleiches Verhalten wie {{jsxref("Date")}}: Verwenden Sie `later` für Lücken und `earlier` für Mehrdeutigkeiten.
- `reject`
  - : Werfen Sie einen `RangeError`, wann immer eine Mehrdeutigkeit oder eine Lücke auftritt.

Es gibt mehrere Fälle, in denen es keine Mehrdeutigkeit beim Konstruieren eines `ZonedDateTime` gibt:

- Falls die Zeit explizit in UTC über den `Z`-Offset angegeben wird.
- Wenn der Offset explizit bereitgestellt und verwendet wird (siehe unten).

### Offset-Mehrdeutigkeit

Wir haben bereits gezeigt, wie Mehrdeutigkeit entstehen kann, wenn eine lokale Zeit in einer Zeitzone interpretiert wird, ohne einen expliziten Offset bereitzustellen. Wenn Sie jedoch einen expliziten Offset angeben, entsteht ein weiterer Konflikt: zwischen dem Offset wie angegeben und dem Offset, wie er aus der Zeitzone und der lokalen Zeit berechnet wird. Dies ist ein unvermeidbares realweltliches Problem: Wenn Sie eine Zeit in der Zukunft speichern, mit einem erwarteten Offset, bevor diese Zeit kommt, könnte sich die Zeitzonendefinition aus politischen Gründen geändert haben. Beispielsweise, angenommen, wir setzen 2018 eine Erinnerung auf die Zeit `2019-12-23T12:00:00-02:00[America/Sao_Paulo]` (das sich in der Sommerzeit befindet; Brasilien ist auf der Südhalbkugel, so dass es im Oktober in die Sommerzeit eintritt und im Februar austritt). Aber bevor diese Zeit kommt, entscheidet Brasilien Anfang 2019, die Sommerzeit nicht mehr zu beachten, so dass der reale Offset `-03:00` wird. Sollte die Erinnerung jetzt immer noch um Mittag ausgelöst werden (die lokale Zeit haltend), oder sollte sie um 11:00 Uhr ausgelöst werden (die genaue Zeit haltend)?

Beim Konstruieren eines `ZonedDateTime` mit {{jsxref("Temporal/ZonedDateTime/from", "Temporal.ZonedDateTime.from()")}} oder beim Aktualisieren mit der {{jsxref("Temporal/ZonedDateTime/with", "with()")}} Methode ist das Verhalten für Offset-Mehrdeutigkeit über die `offset`-Option konfigurierbar:

- `use`
  - : Verwenden Sie den Offset, um die genaue Zeit zu berechnen. Diese Option "verwendet" den Offset, um den durch den String dargestellten Moment zu bestimmen, der derselbe Moment sein wird, der ursprünglich berechnet wurde, als wir die Zeit speicherten, selbst wenn sich der Offset zu dem Moment geändert hat. Der Zeitzonen-Identifier wird weiterhin verwendet, um den (möglicherweise aktualisierten) Offset abzuleiten und verwendet diesen Offset, um die genaue Zeit in die lokale Zeit zu konvertieren.
- `ignore`
  - : Verwenden Sie den Zeitzonen-Identifier, um den Offset neu zu berechnen, und ignorieren Sie den im String angegebenen Offset. Diese Option behält die gleiche lokale Zeit, die ursprünglich berechnet wird, wenn wir die Zeit gespeichert haben, kann jedoch einem anderen Moment entsprechen. Beachten Sie, dass diese Option die gleiche lokale Zeit-Interpretationsmehrdeutigkeit verursachen kann, wie bereits oben demonstriert, die mit der `disambiguation`-Option gelöst wird.
- `reject`
  - : Werfen Sie einen `RangeError`, wann immer es zu einem Konflikt zwischen dem Offset und dem Zeitzonen-Identifier kommt. Dies ist der Standard für {{jsxref("Temporal/ZonedDateTime/from", "Temporal.ZonedDateTime.from()")}}.
- `prefer`
  - : Verwenden Sie den Offset, wenn er gültig ist, andernfalls berechnen Sie den Offset aus dem Zeitzonen-Identifier. Dies ist der Standard für {{jsxref("Temporal/ZonedDateTime/with", "Temporal.ZonedDateTime.prototype.with()")}} (siehe die Methode für mehr Details). Dies ist anders als `ignore`, weil bei lokaler Zeit-Mehrdeutigkeit der Offset verwendet wird, um sie zu lösen, anstatt der `disambiguation`-Option.

Beachten Sie, dass der `Z` Offset nicht `+00:00` bedeutet; er wird immer als gültig angesehen, unabhängig von der Zeitzone. Die Zeit wird als UTC-Zeit interpretiert und der Zeitzonen-Identifier wird dann verwendet, um sie in lokale Zeit zu konvertieren. Mit anderen Worten, `Z` erzwingt das gleiche Verhalten wie die `ignore`-Option und seine Ergebnisse können nie mehrdeutig sein.

> [!NOTE]
> Obwohl {{jsxref("Temporal/Instant/from", "Temporal.Instant.from()")}} auch einen [RFC 9557](#rfc_9557_format) String in derselben Form annimmt, gibt es keine Mehrdeutigkeit, da es immer den Zeitzonen-Identifier ignoriert und nur den Offset liest.

## Konstruktor

- {{jsxref("Temporal/ZonedDateTime/ZonedDateTime", "Temporal.ZonedDateTime()")}} {{experimental_inline}}
  - : Erstellt ein neues `Temporal.ZonedDateTime` Objekt durch direktes Übergeben der zugrundeliegenden Daten.

## Statische Methoden

- {{jsxref("Temporal/ZonedDateTime/compare", "Temporal.ZonedDateTime.compare()")}} {{experimental_inline}}
  - : Gibt eine Zahl (-1, 0 oder 1) zurück, die angibt, ob die erste Datum-Zeit vor, genau gleich oder nach der zweiten Datum-Zeit kommt. Entspricht dem Vergleich der {{jsxref("Temporal/ZonedDateTime/epochNanoseconds", "epochNanoseconds")}} der beiden Datums- und Zeitangaben.
- {{jsxref("Temporal/ZonedDateTime/from", "Temporal.ZonedDateTime.from()")}} {{experimental_inline}}
  - : Erstellt ein neues `Temporal.ZonedDateTime` Objekt aus einem anderen `Temporal.ZonedDateTime` Objekt, einem Objekt mit Datums-, Zeit- und Zeitzonen-Eigenschaften oder einem [RFC 9557](#rfc_9557_format) String.

## Instanz-Eigenschaften

Diese Eigenschaften sind auf `Temporal.ZonedDateTime.prototype` definiert und werden von allen `Temporal.ZonedDateTime` Instanzen geteilt.

- {{jsxref("Temporal/ZonedDateTime/calendarId", "Temporal.ZonedDateTime.prototype.calendarId")}} {{experimental_inline}}
  - : Gibt einen String zurück, der den [Kalender](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars) darstellt, der verwendet wird, um das interne ISO 8601 Datum zu interpretieren.
- {{jsxref("Object/constructor", "Temporal.ZonedDateTime.prototype.constructor")}}
  - : Die Konstruktionsfunktion, die das Instanzobjekt erstellt hat. Für `Temporal.ZonedDateTime` Instanzen ist der Anfangswert der {{jsxref("Temporal/ZonedDateTime/ZonedDateTime", "Temporal.ZonedDateTime()")}} Konstruktor.
- {{jsxref("Temporal/ZonedDateTime/day", "Temporal.ZonedDateTime.prototype.day")}} {{experimental_inline}}
  - : Gibt eine positive Ganzzahl zurück, die den 1-basierten Tagindex im Monat dieses Datums darstellt, der dieselbe Tagesnummer ist, die Sie auf einem Kalender sehen würden. Abhängig vom [Kalender](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars). Allgemein beginnt bei 1 und ist kontinuierlich, aber nicht immer.
- {{jsxref("Temporal/ZonedDateTime/dayOfWeek", "Temporal.ZonedDateTime.prototype.dayOfWeek")}} {{experimental_inline}}
  - : Gibt eine positive Ganzzahl zurück, die den 1-basierten Tagindex der Woche dieses Datums darstellt. Tage in einer Woche sind sequentiell von `1` bis {{jsxref("Temporal/ZonedDateTime/daysInWeek", "daysInWeek")}} nummeriert, wobei jede Zahl ihrem Namen zugeordnet ist. Abhängig vom [Kalender](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars). 1 repräsentiert gewöhnlich Montag im Kalender, selbst wenn Lokalisierungen, die den Kalender verwenden, einen anderen Tag als ersten Tag der Woche betrachten (siehe {{jsxref("Intl/Locale/getWeekInfo", "Intl.Locale.prototype.getWeekInfo()")}}).
- {{jsxref("Temporal/ZonedDateTime/dayOfYear", "Temporal.ZonedDateTime.prototype.dayOfYear")}} {{experimental_inline}}
  - : Gibt eine positive Ganzzahl zurück, die den 1-basierten Tagindex im Jahr dieses Datums darstellt. Der erste Tag dieses Jahres ist `1`, und der letzte Tag ist der {{jsxref("Temporal/ZonedDateTime/daysInYear", "daysInYear")}}. Abhängig vom [Kalender](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars).
- {{jsxref("Temporal/ZonedDateTime/daysInMonth", "Temporal.ZonedDateTime.prototype.daysInMonth")}} {{experimental_inline}}
  - : Gibt eine positive Ganzzahl zurück, die die Anzahl der Tage im Monat dieses Datums darstellt. Abhängig vom [Kalender](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars).
- {{jsxref("Temporal/ZonedDateTime/daysInWeek", "Temporal.ZonedDateTime.prototype.daysInWeek")}} {{experimental_inline}}
  - : Gibt eine positive Ganzzahl zurück, die die Anzahl der Tage in der Woche dieses Datums darstellt. Abhängig vom [Kalender](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars). Für den ISO 8601 Kalender sind es immer 7, aber in anderen Kalendersystemen kann es von Woche zu Woche abweichen.
- {{jsxref("Temporal/ZonedDateTime/daysInYear", "Temporal.ZonedDateTime.prototype.daysInYear")}} {{experimental_inline}}
  - : Gibt eine positive Ganzzahl zurück, die die Anzahl der Tage im Jahr dieses Datums darstellt. Abhängig vom [Kalender](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars). Für den ISO 8601 Kalender sind es 365, oder 366 in einem Schaltjahr.
- {{jsxref("Temporal/ZonedDateTime/epochMilliseconds", "Temporal.ZonedDateTime.prototype.epochMilliseconds")}} {{experimental_inline}}
  - : Gibt eine Ganzzahl zurück, die die Anzahl der Millisekunden darstellt, die seit der Unix-Epoche (Mitternacht am Beginn des 1. Januar 1970, UTC) bis zu diesem Moment vergangen sind. Entspricht der Division von `epochNanoseconds` durch `1e6` und der Abrundung des Ergebnisses.
- {{jsxref("Temporal/ZonedDateTime/epochNanoseconds", "Temporal.ZonedDateTime.prototype.epochNanoseconds")}} {{experimental_inline}}
  - : Gibt ein {{jsxref("BigInt")}} zurück, das die Anzahl der Nanosekunden darstellt, die seit der Unix-Epoche (Mitternacht am Beginn des 1. Januar 1970, UTC) bis zu diesem Moment vergangen sind.
- {{jsxref("Temporal/ZonedDateTime/era", "Temporal.ZonedDateTime.prototype.era")}} {{experimental_inline}}
  - : Gibt einen kalenderabhängigen Kleinbuchstaben-String zurück, der die Ära dieses Datums darstellt, oder `undefined`, wenn der Kalender keine Äras verwendet (z.B. ISO 8601). `era` und `eraYear` zusammen identifizieren ein Jahr in einem Kalender eindeutig, auf die gleiche Weise, wie es `year` tut. Abhängig vom [Kalender](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars). Für Gregorianisch ist es entweder `"gregory"` oder `"gregory-inverse"`.
- {{jsxref("Temporal/ZonedDateTime/eraYear", "Temporal.ZonedDateTime.prototype.eraYear")}} {{experimental_inline}}
  - : Gibt eine nicht-negative Ganzzahl zurück, die das Jahr dieses Datums innerhalb der Ära darstellt, oder `undefined`, wenn der Kalender keine Äras verwendet (z.B. ISO 8601). Der Jahrindex beginnt normalerweise bei 1 (häufiger) oder 0, und Jahre in einer Ära können mit der Zeit abnehmen (z.B. Gregorianisch BCE). `era` und `eraYear` zusammen identifizieren ein Jahr in einem Kalender eindeutig, auf dieselbe Weise, wie `year` es tut. Abhängig vom [Kalender](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars).
