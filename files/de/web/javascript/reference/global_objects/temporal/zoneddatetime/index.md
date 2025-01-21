---
title: Temporal.ZonedDateTime
slug: Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime
l10n:
  sourceCommit: a4e9bce1e8bac1b845b32536e0e44f335233eab6
---

{{JSRef}}

Das **`Temporal.ZonedDateTime`**-Objekt steht für ein Datum und eine Uhrzeit mit einer Zeitzone. Es wird grundlegend als Kombination aus einem [instant](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/Instant), einer Zeitzone und einem Kalendersystem dargestellt.

## Beschreibung

Ein `ZonedDateTime` fungiert als Brücke zwischen einer exakten Zeit und einer Uhrzeit: Es repräsentiert gleichzeitig einen Moment in der Geschichte (wie ein {{jsxref("Temporal.Instant")}}) und eine lokale Uhrzeit (wie ein {{jsxref("Temporal.PlainDateTime")}}). Dies geschieht durch die Speicherung des Moments, der Zeitzone und des Kalendersystems. Die Zeitzone wird verwendet, um zwischen dem Moment und der lokalen Zeit zu konvertieren, und das Kalendersystem wird verwendet, um die lokale Zeit zu interpretieren.

`ZonedDateTime` ist die einzige `Temporal`-Klasse, die Zeitzonen-bewusst ist. Die Hinzufügung einer Zeitzone führt dazu, dass sich `ZonedDateTime`-Objekte bedeutend anders verhalten als {{jsxref("Temporal.PlainDateTime")}}-Objekte. Man kann nicht mehr davon ausgehen, dass "die Zeit eine Minute später" jeden Tag gleich ist oder dass ein Tag 24 Stunden hat. Im schlimmsten Fall könnte ein ganzer Tag aus dem lokalen Kalender fehlen. Unten bieten wir einen schnellen Überblick über Zeitzonen und Offsets und wie sie die Umwandlung zwischen UTC-Zeit und lokaler Zeit beeinflussen.

### Zeitzonen und Offsets

Alle Zeiten in JavaScript haben einen goldenen Standard: die UTC-Zeit, die kontinuierlich und gleichmäßig zunimmt, während physische Zeit fortschreitet. Benutzer sind im Gegensatz dazu mehr an ihrer lokalen Zeit interessiert, die sie auf ihren Kalendern und Uhren ablesen. Der Vorgang der Umwandlung zwischen UTC-Zeit und lokaler Zeit umfasst ein Zeitzonen-_Offset_, das wie folgt berechnet wird:

```plain
local time = UTC time + offset
```

Wenn zum Beispiel die UTC-Zeit 1970-01-01T00:00:00 ist und das Offset "-05:00", dann ist die lokale Zeit:

```plain
1970-01-01T00:00:00 + -05:00 = 1969-12-31T19:00:00
```

Indem man diese lokale Zeit mit dem Offset verknüpft und diese Zeit als "1969-12-31T19:00:00-05:00" ausdrückt, kann sie nun eindeutig als ein Moment in der Geschichte verstanden werden.

Um das Offset zu kennen, benötigen wir zwei Informationen, die _Zeitzone_ und den _Moment_. Die Zeitzone ist eine Region auf der Erde, in der das gleiche Offset zu allen Zeiten verwendet wird. Zwei Uhren in derselben Zeitzone zeigen immer zur selben Zeit die gleiche Zeit an, aber das Offset ist nicht unbedingt konstant: Das heißt, die Zeit dieser Uhren kann sich abrupt ändern. Dies geschieht häufig während der Umstellung von Sommer- auf Winterzeit, bei der sich das Offset um eine Stunde ändert, was zweimal im Jahr passiert. Offsets können auch dauerhaft durch politische Änderungen geändert werden, z. B. wenn ein Land die Zeitzone wechselt.

Die Zeitzonen sind in der [IANA Time Zone Database](https://www.iana.org/time-zones) gespeichert. Jede IANA-Zeitzone hat:

- Einen _primären Zeitzonen-Identifier_, der die Zeitzone eindeutig identifiziert. Er bezieht sich normalerweise auf ein geografisches Gebiet, das durch eine Stadt verankert ist (z. B. `Europe/Paris` oder `Africa/Kampala`), kann aber auch Zeitzonen mit einem Einzel-Offset wie `UTC` (ein gleichmäßiges Offset von `+00:00`) oder `Etc/GMT+5` bezeichnen (aus historischen Gründen ein negatives Offset `-05:00`). Aus historischen Gründen ist der primäre Name für die UTC-Zeitzone `UTC`, obwohl er in IANA als `Etc/UTC` bezeichnet wird.
- Eine _Zeitzonendefinition_ in Form einer Tabelle, die UTC-Datum/Zeit-Bereiche (einschließlich zukünftiger Bereiche) zu bestimmten Offsets zuordnet.
- Null oder mehr _nicht-primäre Zeitzonen-Identifier_, die Aliase zum primären Zeitzonen-Identifier sind. Dies sind normalerweise historische Namen, die nicht mehr verwendet werden, aber aus Kompatibilitätsgründen beibehalten werden. Siehe unten für mehr Informationen.

Als Eingabe werden benannte Identifier fallunabhängig abgeglichen. Intern werden sie in ihrer bevorzugten Schreibweise gespeichert, und nicht-primäre Identifier _werden nicht_ in ihren primären Identifier umgewandelt.

> [!NOTE]
> Wenn Sie den Namen der Zeitzone setzen, sollten Sie ihn selten auf `"UTC"` setzen. `ZonedDateTime` ist dazu gedacht, dem Benutzer angezeigt zu werden, aber kein Mensch lebt in der "UTC"-Zeitzone. Wenn Sie die Zeitzone zur Zeit der Konstruktion nicht kennen, aber die Uhrzeit kennen, verwenden Sie ein {{jsxref("Temporal.PlainDateTime")}}. Wenn Sie den genauen Moment kennen, verwenden Sie ein {{jsxref("Temporal.Instant")}}.

Wenn eine `Temporal`-API einen _Zeitzonen-Identifier_ akzeptiert, akzeptiert sie zusätzlich zu primären und nicht-primären Zeitzonen-Identifiern auch einen _Offset-Zeitzonen-Identifier_, der in derselben Form wie das Offset vorliegt, außer dass Subminutenpräzision nicht erlaubt ist. Zum Beispiel sind `+05:30`, `-08`, `+0600` alle gültige Offset-Identifier. Intern werden Offset-Identifier im Format `±HH:mm` gespeichert.

> [!NOTE]
> Vermeiden Sie die Verwendung von Offset-Identifiers, wenn Sie stattdessen eine benannte Zeitzone verwenden können. Selbst wenn eine Region immer ein einzelnes Offset verwendet hat, ist es besser, den benannten Identifier zu verwenden, um sich gegen zukünftige politische Änderungen des Offsets abzusichern.
>
> Wenn eine Region mehrere Offsets verwendet (oder verwendet hat), ist es noch wichtiger, ihre benannte Zeitzone zu verwenden. Dies liegt daran, dass `Temporal.ZonedDateTime` Methoden wie `add` oder `with` verwenden kann, um neue Instanzen zu einem anderen Moment zu erstellen. Wenn diese abgeleiteten Instanzen einem Moment entsprechen, der ein anderes Offset verwendet (zum Beispiel nach einer Umstellung zur Sommerzeit), werden Ihre Berechnungen eine falsche Ortszeit haben. Die Verwendung einer benannten Zeitzone stellt sicher, dass lokale Daten und Zeiten immer an das korrekte Offset für diesen Moment angepasst werden.

Aus Bequemlichkeit können Sie beim Bereitstellen eines Zeitzonen-Identifier für `Temporal`-APIs wie `Temporal.ZonedDateTime.prototype.withTimeZone()` und die `timeZoneId`-Option von `Temporal.ZonedDateTime.from()` diesen in verschiedenen Formen bereitstellen:

- Als eine andere `ZonedDateTime`-Instanz, deren `timeZoneId` verwendet wird.
- Als ein [RFC 9557 String](#rfc_9557_format) mit einer Zeitzonenanmerkung, deren Zeitzonen-Identifier verwendet wird.
- Als ISO 8601 / RFC 3339 String, der ein Offset enthält, dessen Offset als Offset-Identifier verwendet wird; oder bei Verwendung von `Z` wird die Zeitzone `"UTC"` verwendet. Diese Verwendung wird in der Regel nicht empfohlen, weil, wie oben besprochen, Offset-Identifier nicht die Fähigkeit haben, andere `Temporal.ZonedDateTime`-Instanzen sicher über eine Offset-Umstellung hinweg abzuleiten, wie bei Beginn oder Ende der Sommerzeit. Stattdessen sollten Sie überlegen, einfach `Temporal.Instant` zu verwenden oder die tatsächliche benannte Zeitzone des Benutzers abzurufen.

Die IANA-Zeitzonendatenbank ändert sich von Zeit zu Zeit, üblicherweise um neue Zeitzonen in Reaktion auf politische Änderungen hinzuzufügen. In seltenen Fällen werden jedoch IANA-Zeitzonen-Ids umbenannt, um aktualisierte englische Übersetzungen eines Stadtnamens zu reflektieren oder um veraltete Namenskonventionen zu aktualisieren. Zum Beispiel hier sind einige bemerkenswerte Namensänderungen:

| Aktueller primärer IANA-Identifier | Alter, jetzt nicht-primärer Identifier |
| ---------------------------------- | -------------------------------------- |
| `America/Argentina/Buenos_Aires`   | `America/Buenos_Aires`                 |
| `Asia/Kolkata`                     | `Asia/Calcutta`                        |
| `Asia/Ho_Chi_Minh`                 | `Asia/Saigon`                          |
| `Europe/Kyiv`                      | `Europe/Kiev`                          |

Historisch gesehen verursachten diese Umbenennungen Probleme für Programmierer, weil die Unicode [CLDR-Datenbank](https://github.com/unicode-org/cldr-json/blob/main/cldr-json/cldr-bcp47/bcp47/timezone.json) (eine Bibliothek, die von Browsern genutzt wird, um Zeitzonen-Identifier und -Daten bereitzustellen) IANAs Umbenennung aus [Stabilitätsgründen](https://unicode.org/reports/tr35/#Time_Zone_Identifiers) nicht folgte. Infolgedessen berichteten einige Browser wie Chrome und Safari die veralteten Identifier von CLDR, während andere Browser wie Firefox CLDRs Standardwerte überstimmten und die aktuellsten primären Identifier meldeten.

Mit der Einführung von Temporal wurde dieses Verhalten nun stärker standardisiert:

- [CLDR-Daten](https://github.com/unicode-org/cldr-json/blob/main/cldr-json/cldr-bcp47/bcp47/timezone.json) enthalten nun ein `"_iana"` Attribut, das den aktuellsten Identifier anzeigt, falls der ältere, stabile Identifier umbenannt wurde. Browser können dieses neue Attribut verwenden, um Anrufern aktuellste Identifier bereitzustellen.
- Zeitzonen-Identifier, die vom Programmierer bereitgestellt werden, werden niemals durch ein Alias ersetzt. Wenn der Anrufer z.B. `Asia/Calcutta` oder `Asia/Kolkata` als Identifier-Eingabe für `Temporal.ZonedDateTime.from()` bereitstellt, wird derselbe Identifier in der resultierenden Instanz `timeZoneId` zurückgegeben. Beachten Sie, dass die Groß-/Kleinschreibung in den Ausgaben normalisiert wird, um IANA zu entsprechen, sodass `ASIA/calCuTTa` als Eingabe einen `timeZoneId` von `Asia/Calcutta` als Ausgabe erzeugt.
- Wenn ein Zeitzonen-Identifier nicht vom Anrufer bereitgestellt, sondern stattdessen vom System selbst abgeleitet wird (z.B. bei der Verwendung von `Temporal.Now.timeZoneId()`), werden moderne Identifier in allen Browsern zurückgegeben. Beachten Sie, dass es bei zukünftigen Stadtumbenennungen eine zweijährige Verzögerung geben wird, bevor diese system-bereitgestellten-Identifier-APIs den neuen Namen zeigen, wodurch anderen Komponenten (wie einem Node-Server) Zeit gegeben wird, ihre Kopien der IANA-Datenbank zu aktualisieren, um den neuen Namen zu erkennen.

Diese Standardisierung gilt auch außerhalb von `Temporal`. Zum Beispiel wird die `timeZone`-Option, die von {{jsxref("Intl/DateTimeFormat/resolvedOptions", "Intl.DateTimeFormat.prototype.resolvedOptions()")}} zurückgegeben wird, ebenfalls nie durch ein Alias ersetzt, obwohl Browser diese Identifier traditionell vor der Standardisierung durch Temporal kanonisierten. Andererseits werden {{jsxref("Intl/Locale/getTimeZones", "Intl.Locale.prototype.getTimeZones()")}} und {{jsxref("Intl.supportedValuesOf()")}} (`timeZone`-Option) den aktuellsten Identifier zurückgeben, während einige Browser früher den alten, nicht-primären Identifier zurückgaben.

### RFC 9557 Format

`ZonedDateTime`-Objekte können durch das [RFC 9557](https://datatracker.ietf.org/doc/html/rfc9557) Format, eine Erweiterung des [ISO 8601 / RFC 3339](https://datatracker.ietf.org/doc/html/rfc3339) Formats, serialisiert und geparst werden. Der String hat die folgende Form (Leerzeichen sind nur zur Lesbarkeit und sollten nicht im tatsächlichen String enthalten sein):

```plain
YYYY-MM-DD T HH:mm:ss.sssssssss Z/±HH:mm:ss.sssssssss [time_zone_id] [u-ca=calendar_id]
```

- `YYYY`
  - : Entweder eine vierstellige Zahl oder eine sechsstellige Zahl mit einem `+` oder `-` Zeichen.
- `MM`
  - : Eine zweistellige Zahl von `01` bis `12`.
- `DD`
  - : Eine zweistellige Zahl von `01` bis `31`. Die `YYYY`, `MM`, und `DD` Komponenten können durch `-` oder nichts getrennt werden.
- `T` {{optional_inline}}
  - : Der Datums-Zeit-Separator, der `T`, `t` oder ein Leerzeichen sein kann. Vorhanden, wenn und nur wenn `HH` vorhanden ist.
- `HH` {{optional_inline}}
  - : Eine zweistellige Zahl von `00` bis `23`. Standardwert ist `00`.
- `mm` {{optional_inline}}
  - : Eine zweistellige Zahl von `00` bis `59`. Standardwert ist `00`.
- `ss.sssssssss` {{optional_inline}}
  - : Eine zweistellige Zahl von `00` bis `59`. Darf optional von einem `.` oder `,` und einem bis neun Ziffern gefolgt werden. Standardwert ist `00`. Die `HH`, `mm`, und `ss` Komponenten können durch `:` oder nichts getrennt werden. Sie können entweder nur `ss` oder sowohl `ss` als auch `mm` weglassen, sodass die Zeit eine der drei Formen haben kann: `HH`, `HH:mm` oder `HH:mm:ss.sssssssss`.
- `Z/±HH:mm:ss.sssssssss` {{optional_inline}}
  - : Entweder der UTC-Bezeichner `Z` oder `z`, oder ein Offset von UTC in der Form `+` oder `-`, gefolgt von demselben Format wie die Zeitkomponente. Beachten Sie, dass Subminuten-Präzision von anderen Systemen möglicherweise nicht unterstützt wird. Wenn weggelassen, wird das Offset aus dem Zeitzonen-Identifier abgeleitet. Wenn vorhanden, muss die Zeit auch angegeben werden. `Z` ist nicht das gleiche wie `+00:00`: erstere bedeutet, dass die Zeit unabhängig vom Zeitzonen-Identifier in UTC-Form angegeben wird, während letztere bedeutet, dass die Zeit in lokaler Zeit angegeben wird, die zufällig UTC+0 ist, und gegen den Zeitzonen-Identifier über die [`offset` Option](#offset-ambiguität) validiert wird.
- `[time_zone_id]`
  - : Ersetze `time_zone_id` durch den Zeitzonen-Identifier (benannt oder Offset) wie oben beschrieben. Kann ein _kritisches Flag_ haben, indem es dem Identifier mit `!` vorangestellt wird: z.B. `[!America/New_York]`. Dieses Flag teilt anderen Systemen allgemein mit, dass es nicht ignoriert werden kann, wenn es nicht unterstützt wird. Beachten Sie, dass es für `Temporal.ZonedDateTime.from()` erforderlich ist: das Weglassen führt zu einem `RangeError`. Wenn Sie ISO 8601 / RFC 3339 Strings ohne Zeitzonen-Identifier-Anmerkungen parsen möchten, verwenden Sie {{jsxref("Temporal/Instant/from", "Temporal.Instant.from()")}} stattdessen.
- `[u-ca=calendar_id]` {{optional_inline}}
  - : Ersetze `calendar_id` durch den Kalender, der verwendet werden soll. Kann ein _kritisches Flag_ haben, indem es dem Schlüssel mit `!` vorangestellt wird: z.B. `[!u-ca=iso8601]`. Dieses Flag teilt anderen Systemen im Allgemeinen mit, dass es nicht ignoriert werden kann, wenn es nicht unterstützt wird. Der `Temporal`-Parser wird einen Fehler auslösen, wenn die Annotationen zwei oder mehr Kalender-Annotationen enthalten und eine davon kritisch ist. Standardwert ist `[u-ca=iso8601]`. Beachten Sie, dass das `YYYY-MM-DD` immer als ISO 8601 Kalenderdatum interpretiert und dann in den angegebenen Kalender umgewandelt wird.

Als Eingabe werden andere Annotationen im `[key=value]` Format ignoriert und dürfen nicht das kritische Flag haben.

Beim Serialisieren können Sie die Bruchteilssekundenstellen, ob das Offset/der Zeitzonen-ID/Kalender-ID angezeigt werden soll, und ob ein kritisches Flag für die Annotationen hinzugefügt werden soll, konfigurieren.

### Ambiguität und Lücken von lokaler Zeit zu UTC-Zeit

Angenommen eine Zeitzone, die Umwandlung von UTC zu lokaler Zeit ist einfach: Sie erhalten zuerst das Offset unter Verwendung des Zeitzonennamens und des Moments, dann addieren Sie das Offset zum Moment. Umgekehrt ist das nicht wahr: Die Umwandlung von lokaler Zeit zu UTC-Zeit ohne ein explizites Offset ist mehrdeutig, weil eine lokale Zeit zu null, einer oder vielen UTC-Zeiten entsprechen kann. Betrachten wir die häufigste Ursache: Übergänge der Sommerzeit. Nehmen wir New York als Beispiel. Sein Standard-Offset ist UTC-5, aber während der Sommerzeit werden alle Uhren um eine Stunde vorgestellt, sodass das Offset UTC-4 wird. In den USA treten die Übergänge um 2:00 Uhr Ortszeit auf, betrachten wir also diese beiden Übergangstage:

| UTC Zeit             | New Yorker Zeit           |
| -------------------- | ------------------------- |
| 2024-03-10T06:58:00Z | 2024-03-10T01:58:00-05:00 |
| 2024-03-10T06:59:00Z | 2024-03-10T01:59:00-05:00 |
| 2024-03-10T07:00:00Z | 2024-03-10T03:00:00-04:00 |
| ---                  | ---                       |
| 2024-11-03T05:58:00Z | 2024-11-03T01:58:00-04:00 |
| 2024-11-03T05:59:00Z | 2024-11-03T01:59:00-04:00 |
| 2024-11-03T06:00:00Z | 2024-11-03T01:00:00-05:00 |

Wie Sie sehen, verschwand im März eine Stunde von der Ortszeit und im November haben wir zwei Stunden, die dieselbe Uhrzeit anzeigen. Angenommen, wir speicherten ein `PlainDateTime`, das sagt "2024-03-10T02:05:00", und wir wollen es in der `America/New_York`-Zeitzone interpretieren, es wird keine Zeit geben, die dem entspricht, während ein `PlainDateTime`, das sagt "2024-11-03T01:05:00" zu zwei verschiedenen Momenten passen kann.

Beim Konstruieren eines `ZonedDateTime` aus einer Ortszeit (unter Verwendung von {{jsxref("Temporal/ZonedDateTime/from", "Temporal.ZonedDateTime.from()")}}, {{jsxref("Temporal/ZonedDateTime/with", "Temporal.ZonedDateTime.prototype.with()")}}, {{jsxref("Temporal/PlainDateTime/toZonedDateTime", "Temporal.PlainDateTime.prototype.toZonedDateTime()")}}), ist das Verhalten für Ambiguität und Lücken über die `disambiguation`-Option konfigurierbar:

- `earlier`
  - : Wenn es zwei mögliche Momente gibt, wählen Sie den früheren. Wenn es eine Lücke gibt, gehen Sie um die Dauer der Lücke zurück.
- `later`
  - : Wenn es zwei mögliche Momente gibt, wählen Sie den späteren. Wenn es eine Lücke gibt, gehen Sie um die Dauer der Lücke nach vorne.
- `compatible` (Standard)
  - : Gleiches Verhalten wie beim {{jsxref("Date")}}: Verwenden Sie `later` für Lücken und `earlier` für Mehrdeutigkeiten.
- `reject`
  - : Werfen Sie einen `RangeError`, wann immer es eine Mehrdeutigkeit oder eine Lücke gibt.

Es gibt mehrere Fälle, in denen keine Mehrdeutigkeit beim Konstruieren eines `ZonedDateTime` besteht:

- Wenn die Zeit in UTC über das `Z`-Offset angegeben ist.
- Wenn das Offset explizit bereitgestellt und verwendet wird (siehe unten).

### Offset-Ambiguität

Wir hatten bereits gezeigt, wie Mehrdeutigkeit bei der Interpretation einer Ortszeit in einer Zeitzone entstehen kann, ohne ein explizites Offset bereitzustellen. Wenn Sie jedoch ein explizites Offset bereitstellen, entsteht ein weiterer Konflikt: zwischen dem angegebenen Offset und dem Offset, das aus der Zeitzone und der Ortszeit berechnet wird. Dies ist ein unvermeidliches reales Problem: Wenn Sie eine Zeit in der Zukunft speichern, mit einem erwarteten Offset, dann könnte sich die Zeitzonendefinition aufgrund politischer Gründe geändert haben, bevor diese Zeit erreicht wird. Angenommen, wir haben 2018 eine Erinnerung an die Zeit `2019-12-23T12:00:00-02:00[America/Sao_Paulo]` festgelegt (was eine Sommerzeit ist; Brasilien ist auf der südlichen Hemisphäre, daher beginnt die Sommerzeit im Oktober und endet im Februar). Aber bevor diese Zeit erreicht wird, beschließt Brasilien Anfang 2019, die Sommerzeit nicht mehr zu beobachten, sodass das tatsächliche Offset `-03:00` wird. Soll die Erinnerung jetzt immer noch um Mittag ausgelöst werden (beibehalten der Ortszeit), oder soll sie um 11:00 Uhr ausgelöst werden (beibehalten der exakten Zeit)?

Beim Konstruieren eines `ZonedDateTime` mit {{jsxref("Temporal/ZonedDateTime/from", "Temporal.ZonedDateTime.from()")}} oder beim Aktualisieren mit der {{jsxref("Temporal/ZonedDateTime/with", "with()")}} Methode ist das Verhalten für Offset-Mehrdeutigkeiten über die `offset`-Option konfigurierbar:

- `use`
  - : Verwenden Sie das Offset, um die genaue Zeit zu berechnen. Diese Option "verwendet" das Offset, wenn sie den Moment bestimmt, der durch den String dargestellt wird, der der gleiche Moment ist, der ursprünglich berechnet wurde, als wir die Zeit gespeichert haben, selbst wenn sich das Offset zu diesem Moment geändert hat. Der Zeitzonen-Identifier wird immer noch verwendet, um dann das (möglicherweise aktualisierte) Offset abzuleiten und diese Offset zu verwenden, um die genaue Zeit zu lokaler Zeit zu konvertieren.
- `ignore`
  - : Verwenden Sie den Zeitzonen-Identifier, um das Offset neu zu berechnen, und ignorieren Sie das im String angegebene Offset. Diese Option hält die gleiche Ortszeit wie ursprünglich berechnet, als wir die Zeit gespeichert haben, kann aber einem anderen Moment entsprechen. Beachten Sie, dass diese Option dieselbe Ambiguität der Ortszeit-Interpretation verursachen kann wie oben demonstriert, die mit der `disambiguation`-Option gelöst wird.
- `reject`
  - : Werfen Sie einen 'RangeError', wann immer es einen Konflikt zwischen dem Offset und dem Zeitzonenausweis gibt. Dies ist der Standard für {{jsxref("Temporal/ZonedDateTime/from", "Temporal.ZonedDateTime.from()")}}.
- `prefer`
  - : Verwenden Sie das Offset, wenn es gültig ist, andernfalls berechnen Sie das Offset aus dem Zeitzonen-Identifier. Dies ist der Standard für {{jsxref("Temporal/ZonedDateTime/with", "Temporal.ZonedDateTime.prototype.with()")}} (siehe die Methode für mehr Details). Dies unterscheidet sich von `ignore`, weil im Falle einer Mehrdeutigkeit der Ortszeit das Offset verwendet wird, um sie zu lösen, anstatt der `disambiguation`-Option.

Beachten Sie, dass das `Z` Offset nicht `+00:00` bedeutet; es wird immer als gültig betrachtet, unabhängig von der Zeitzone. Die Zeit wird als UTC-Zeit interpretiert, und der Zeitzonen-Identifier wird dann verwendet, um sie in lokale Zeit zu konvertieren. Mit anderen Worten, `Z` erzwingt dasselbe Verhalten wie die `ignore`-Option, und seine Ergebnisse können niemals mehrdeutig sein.

> [!NOTE]
> Obwohl {{jsxref("Temporal/Instant/from", "Temporal.Instant.from()")}} auch einen [RFC 9557](#rfc_9557_format) String in derselben Form akzeptiert, gibt es keine Mehrdeutigkeit, da es immer den Zeitzonen-Identifier ignoriert und nur das Offset liest.

## Konstruktor

- {{jsxref("Temporal/ZonedDateTime/ZonedDateTime", "Temporal.ZonedDateTime()")}}
  - : Erstellt ein neues `Temporal.ZonedDateTime`-Objekt, indem die zugrunde liegenden Daten direkt angegeben werden.

## Statische Methoden

- {{jsxref("Temporal/ZonedDateTime/compare", "Temporal.ZonedDateTime.compare()")}}
  - : Gibt eine Zahl (-1, 0 oder 1) zurück, die angibt, ob das erste Datum vor, gleich oder nach dem zweiten Datum liegt. Entspricht dem Vergleich der {{jsxref("Temporal/ZonedDateTime/epochNanoseconds", "epochNanoseconds")}} der beiden Datums-/Uhrzeiten.
- {{jsxref("Temporal/ZonedDateTime/from", "Temporal.ZonedDateTime.from()")}}
  - : Erstellt ein neues `Temporal.ZonedDateTime`-Objekt aus einem anderen `Temporal.ZonedDateTime`-Objekt, einem Objekt mit Datums-, Zeit- und Zeitzonen-Eigenschaften oder einem [RFC 9557](#rfc_9557_format) String.

## Instanzeigenschaften

Diese Eigenschaften sind auf `Temporal.ZonedDateTime.prototype` definiert und werden von allen `Temporal.ZonedDateTime`-Instanzen gemeinsam genutzt.

- {{jsxref("Temporal/ZonedDateTime/calendarId", "Temporal.ZonedDateTime.prototype.calendarId")}}
  - : Gibt einen String zurück, der den [Kalender](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars) darstellt, der verwendet wird, um das interne ISO 8601-Datum zu interpretieren.
- {{jsxref("Object/constructor", "Temporal.ZonedDateTime.prototype.constructor")}}
  - : Die Konstruktorfunktion, die das Instanzobjekt erstellt hat. Für `Temporal.ZonedDateTime`-Instanzen ist der anfängliche Wert der {{jsxref("Temporal/ZonedDateTime/ZonedDateTime", "Temporal.ZonedDateTime()")}} Konstruktor.
- {{jsxref("Temporal/ZonedDateTime/day", "Temporal.ZonedDateTime.prototype.day")}}
  - : Gibt eine positive Ganzzahl zurück, die den 1-basierten Tagesindex im Monat dieses Datums darstellt, der dieselbe Tageszahl ist, die Sie auf einem Kalender sehen würden. [Kalender](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars)-abhängig. Beginnt in der Regel bei 1 und ist kontinuierlich, aber nicht immer.
- {{jsxref("Temporal/ZonedDateTime/dayOfWeek", "Temporal.ZonedDateTime.prototype.dayOfWeek")}}
  - : Gibt eine positive Ganzzahl zurück, die den 1-basierten Tagesindex in der Woche dieses Datums darstellt. Tage in einer Woche sind von `1` bis {{jsxref("Temporal/ZonedDateTime/daysInWeek", "daysInWeek")}} durchnummeriert, wobei jede Zahl ihrem Namen zugeordnet ist. [Kalender](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars)-abhängig. 1 stellt normalerweise Montag im Kalender dar, auch wenn lokale Benutzer des Kalenders einen anderen Tag als ersten Tag der Woche ansehen (siehe {{jsxref("Intl/Locale/getWeekInfo", "Intl.Locale.prototype.getWeekInfo()")}}).
- {{jsxref("Temporal/ZonedDateTime/dayOfYear", "Temporal.ZonedDateTime.prototype.dayOfYear")}}
  - : Gibt eine positive Ganzzahl zurück, die den 1-basierten Tagesindex im Jahr dieses Datums darstellt. Der erste Tag dieses Jahres ist `1`, und der letzte Tag ist der {{jsxref("Temporal/ZonedDateTime/daysInYear", "daysInYear")}}. [Kalender](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars)-abhängig.
- {{jsxref("Temporal/ZonedDateTime/daysInMonth", "Temporal.ZonedDateTime.prototype.daysInMonth")}}
  - : Gibt eine positive Ganzzahl zurück, die die Anzahl der Tage im Monat dieses Datums darstellt. [Kalender](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars)-abhängig.
- {{jsxref("Temporal/ZonedDateTime/daysInWeek", "Temporal.ZonedDateTime.prototype.daysInWeek")}}
  - : Gibt eine positive Ganzzahl zurück, die die Anzahl der Tage in der Woche dieses Datums darstellt. [Kalender](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars)-abhängig. Für den ISO 8601-Kalender ist dies immer 7, aber in anderen Kalendersystemen kann es von Woche zu Woche unterschiedlich sein.
- {{jsxref("Temporal/ZonedDateTime/daysInYear", "Temporal.ZonedDateTime.prototype.daysInYear")}}
  - : Gibt eine positive Ganzzahl zurück, die die Anzahl der Tage im Jahr dieses Datums darstellt. [Kalender](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars)-abhängig. Für den ISO 8601-Kalender ist dies 365, oder 366 in einem Schaltjahr.
- {{jsxref("Temporal/ZonedDateTime/epochMilliseconds", "Temporal.ZonedDateTime.prototype.epochMilliseconds")}}
  - : Gibt eine Ganzzahl zurück, die die Anzahl der Millisekunden darstellt, die seit dem Unix-Epoch (Mitternacht am Beginn des 1. Januar 1970, UTC) bis zu diesem Moment vergangen sind. Entspricht dem Teilen von `epochNanoseconds` durch `1e6` und dem Abrunden des Ergebnisses.
- {{jsxref("Temporal/ZonedDateTime/epochNanoseconds", "Temporal.ZonedDateTime.prototype.epochNanoseconds")}}
  - : Gibt ein {{jsxref("BigInt")}} zurück, welches die Anzahl der Nanosekunden darstellt, die seit dem Unix-Epoch (Mitternacht am Beginn des 1. Januar 1970, UTC) bis zu diesem Moment vergangen sind.
- {{jsxref("Temporal/ZonedDateTime/era", "Temporal.ZonedDateTime.prototype.era")}}
  - : Gibt einen kalenderabhängigen Kleinbuchstaben-String zurück, der die Epoche dieses Datums darstellt, oder `undefined`, wenn der Kalender keine Epochen verwendet (z.B. ISO 8601). `era` und `eraYear` zusammen identifizieren ein Jahr in einem Kalender eindeutig, auf die gleiche Weise wie `year` es tut. [Kalender](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars)-abhängig. Für Gregorianisch ist es entweder `"gregory"` oder `"gregory-inverse"`.
- {{jsxref("Temporal/ZonedDateTime/eraYear", "Temporal.ZonedDateTime.prototype.eraYear")}}
  - : Gibt eine nicht-negative Ganzzahl zurück, die das Jahr dieses Datums innerhalb der Epoche darstellt, oder `undefined`, wenn der Kalender keine Epochen verwendet (z.B. ISO 8601). Der Jahresindex beginnt normalerweise bei 1 (häufiger) oder 0, und die Jahre in einer Epoche können mit der Zeit abnehmen (z.B. Gregorianisch BCE). `era` und `eraYear` zusammen identifizieren ein Jahr in einem Kalender eindeutig, auf die gleiche Weise wie `year` es tut. [Kalender](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars)-abhängig.
- {{jsxref("Temporal/ZonedDateTime/hour", "Temporal.ZonedDateTime.prototype.hour")}}
  - : Gibt eine Ganzzahl von 0 bis 23 zurück, die die Stundenkomponente dieser Zeit darstellt.
- {{jsxref("Temporal/ZonedDateTime/hoursInDay", "Temporal.ZonedDateTime.prototype.hoursInDay")}}
  - : Gibt eine positive Ganzzahl zurück, die die Anzahl der Stunden im Tag dieses Datums in der Zeitzone darstellt. Sie kann mehr oder weniger als 24 betragen im Falle von Offsets-Änderungen wie Sommerzeit.
- {{jsxref("Temporal/ZonedDateTime/inLeapYear", "Temporal.ZonedDateTime.prototype.inLeapYear")}}
  - : Gibt einen booleschen Wert zurück, der angibt, ob dieses Datum in einem Schaltjahr liegt. Ein Schaltjahr ist ein Jahr, das mehr Tage (aufgrund eines Schalttags oder Schalttmonats) als ein normales Jahr hat. [Kalender](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars)-abhängig.
- {{jsxref("Temporal/ZonedDateTime/microsecond", "Temporal.ZonedDateTime.prototype.microsecond")}}
  - : Gibt eine Ganzzahl von 0 bis 999 zurück, die die Mikrosekundenkomponente (10<sup>-6</sup> Sekunde) dieser Zeit darstellt.
- {{jsxref("Temporal/ZonedDateTime/millisecond", "Temporal.ZonedDateTime.prototype.millisecond")}}
  - : Gibt eine Ganzzahl von 0 bis 999 zurück, die die Millisekundenkomponente (10<sup>-3</sup> Sekunde) dieser Zeit darstellt.
- {{jsxref("Temporal/ZonedDateTime/minute", "Temporal.ZonedDateTime.prototype.minute")}}
  - : Gibt eine Ganzzahl von 0 bis 59 zurück, die die Minutenkomponente dieser Zeit darstellt.
- {{jsxref("Temporal/ZonedDateTime/month", "Temporal.ZonedDateTime.prototype.month")}}
  - : Gibt eine positive Ganzzahl zurück, die den 1-basierten Monatsindex im Jahr dieses Datums darstellt. Der erste Monat dieses Jahres ist `1`, und der letzte Monat ist der {{jsxref("Temporal/ZonedDateTime/monthsInYear", "monthsInYear")}}. [Kalender](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars)-abhängig. Beachten Sie, dass im Gegensatz zu {{jsxref("Date.prototype.getMonth()")}}, der Index 1-basiert ist. Wenn der Kalender Schaltmonate hat, kann der Monat mit dem gleichen {{jsxref("Temporal/ZonedDateTime/monthCode", "monthCode")}} unterschiedliche `month`-Indizes für verschiedene Jahre haben.
- {{jsxref("Temporal/ZonedDateTime/monthCode", "Temporal.ZonedDateTime.prototype.monthCode")}}
  - : Gibt einen kalenderabhängigen String zurück, der den Monat dieses Datums darstellt. [Kalender](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars)-abhängig. Es ist normalerweise `M` plus eine zweistellige Monatszahl. Für Schaltmonate ist es der vorherige Monatscode gefolgt von `L`. Wenn der Schaltmonat der erste Monat des Jahres ist, ist der Code `M00L`.
- {{jsxref("Temporal/ZonedDateTime/monthsInYear", "Temporal.ZonedDateTime.prototype.monthsInYear")}}
  - : Gibt eine positive Ganzzahl zurück, die die Anzahl der Monate im Jahr dieses Datums darstellt. [Kalender](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars)-abhängig. Für den ISO 8601-Kalender ist dies immer 12, aber in anderen Kalendersystemen kann es sich unterscheiden.
- {{jsxref("Temporal/ZonedDateTime/nanosecond", "Temporal.ZonedDateTime.prototype.nanosecond")}}
  - : Gibt eine Ganzzahl von 0 bis 999 zurück, die die Nanosekundenkomponente (10<sup>-9</sup> Sekunde) dieser Zeit darstellt.
- {{jsxref("Temporal/ZonedDateTime/offset", "Temporal.ZonedDateTime.prototype.offset")}}
  - : Gibt einen String zurück, der das [Offset](#zeitzonen_und_offsets) darstellt, das verwendet wird, um den internen Moment zu interpretieren, in der Form `±HH:mm` (oder `±HH:mm:ss.sssssssss` mit so viel Subminutenpräzision wie nötig).
- {{jsxref("Temporal/ZonedDateTime/offsetNanoseconds", "Temporal.ZonedDateTime.prototype.offsetNanoseconds")}}
  - : Gibt eine Ganzzahl zurück, die das [Offset](#zeitzonen_und_offsets) darstellt, das verwendet wird, um den internen Moment zu interpretieren, als Anzahl von Nanosekunden (positiv oder negativ).
- {{jsxref("Temporal/ZonedDateTime/second", "Temporal.ZonedDateTime.prototype.second")}}
  - : Gibt eine Ganzzahl von 0 bis 59 zurück, die die Sekundenkomponente dieser Zeit darstellt.
- {{jsxref("Temporal/ZonedDateTime/timeZoneId", "Temporal.ZonedDateTime.prototype.timeZoneId")}}
  - : Gibt einen String zurück, der den [Zeitzonen-Identifier](#zeitzonen_und_offsets) darstellt, der verwendet wird, um den internen Moment zu interpretieren. Es verwendet den gleichen String, der beim Konstruieren des `Temporal.ZonedDateTime`-Objekts verwendet wurde, entweder ein IANA-Zeitzonenname oder ein festes Offset.
- {{jsxref("Temporal/ZonedDateTime/weekOfYear", "Temporal.ZonedDateTime.prototype.weekOfYear")}}
  - : Gibt eine positive Ganzzahl zurück, die den 1-basierten Wochenindex im {{jsxref("Temporal/ZonedDateTime/yearOfWeek", "yearOfWeek")}} dieses Datums darstellt, oder `undefined`, wenn der Kalender kein gut definiertes Wochensystem hat. Die erste Woche des Jahres ist `1`. [Kalender](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars)-abhängig. Beachten Sie, dass für ISO 8601 die ersten und letzten Tage des Jahres auf die letzte Woche des Vorjahres oder die erste Woche des nächsten Jahres zurückgeführt werden können.
- {{jsxref("Temporal/ZonedDateTime/year", "Temporal.ZonedDateTime.prototype.year")}}
  - : Gibt eine Ganzzahl zurück, die die Anzahl der Jahre dieses Datums relativ zum Beginn eines kalenderabhängigen Epoch-Jahres darstellt. [Kalender](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars)-abhängig. Normalerweise ist das Jahr 1 entweder das erste Jahr der letzten Epoche oder das ISO 8601-Jahr `0001`. Wenn die Epoche mitten im Jahr liegt, wird dieses Jahr vor und nach dem Startdatum der Epoche den gleichen Wert haben.
- {{jsxref("Temporal/ZonedDateTime/yearOfWeek", "Temporal.ZonedDateTime.prototype.yearOfWeek")}}
  - : Gibt eine Ganzzahl zurück, um mit dem `{{jsxref("Temporal/ZonedDateTime/weekOfYear", "weekOfYear")}}` dieses Datums zu gepaart werden, oder `undefined`, wenn der Kalender kein gut definiertes Wochensystem hat. [Kalender](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars)-abhängig. In der Regel ist dies das Jahr des Datums, aber für ISO 8601 können die ersten und letzten Tage des Jahres auf die letzte Woche des Vorjahres oder die erste Woche des nächsten Jahres zurückgeführt werden, sodass sich das `yearOfWeek` um 1 unterscheidet.
- `Temporal.ZonedDateTime.prototype[Symbol.toStringTag]`
  - : Der Anfangswert der [`[Symbol.toStringTag]`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag)-Eigenschaft ist der String `"Temporal.ZonedDateTime"`. Diese Eigenschaft wird in {{jsxref("Object.prototype.toString()")}} verwendet.

## Instanzmethoden

- {{jsxref("Temporal/ZonedDateTime/add", "Temporal.ZonedDateTime.prototype.add()")}}
  - : Gibt ein neues `Temporal.ZonedDateTime`-Objekt zurück, das diese Datums-/Uhrzeit um eine angegebene Dauer (in einer Form, die durch {{jsxref("Temporal/Duration/from", "Temporal.Duration.from()")}} umwandelbar ist) vorwärts bewegt darstellt.
- {{jsxref("Temporal/ZonedDateTime/equals", "Temporal.ZonedDateTime.prototype.equals()")}}
  - : Gibt `true` zurück, wenn diese Datums-/Uhrzeit-Wert äquivalent zu einer anderen Datums-/Uhrzeit (in einer Form, die durch {{jsxref("Temporal/ZonedDateTime/from", "Temporal.ZonedDateTime.from()")}} umwandelbar ist) ist, und `false` andernfalls. Sie werden sowohl anhand ihrer Momentwerte, Zeitzonen und ihrer Kalender verglichen, sodass zwei Datums-/Uhrzeiten aus verschiedenen Kalendern oder Zeitzonen von {{jsxref("Temporal/ZonedDateTime/compare", "Temporal.ZonedDateTime.compare()")}} als gleich angesehen werden können, jedoch nicht von `equals()`.
- {{jsxref("Temporal/ZonedDateTime/getTimeZoneTransition", "Temporal.ZonedDateTime.prototype.getTimeZoneTransition()")}}
  - : Gibt ein `Temporal.ZonedDateTime`-Objekt zurück, das den ersten Moment nach oder vor diesem Moment darstellt, bei dem sich das UTC-Offset der Zeitzone ändert, oder `null`, wenn es keinen solchen Übergang gibt. Dies ist nützlich, um die Offset-Regeln einer Zeitzone herauszufinden, wie etwa deren Sommerzeitmuster.
- {{jsxref("Temporal/ZonedDateTime/round", "Temporal.ZonedDateTime.prototype.round()")}}
  - : Gibt ein neues `Temporal.ZonedDateTime`-Objekt zurück, das diese Datums-/Uhrzeit auf die angegebene Einheit gerundet darstellt.
- {{jsxref("Temporal/ZonedDateTime/since", "Temporal.ZonedDateTime.prototype.since()")}}
  - : Gibt ein neues {{jsxref("Temporal.Duration")}}-Objekt zurück, das die Dauer von einer anderen Datums-/Uhrzeit (in einer Form, die durch {{jsxref("Temporal/ZonedDateTime/from", "Temporal.ZonedDateTime.from()")}} umwandelbar ist) zu dieser Datums-/Uhrzeit darstellt. Die Dauer ist positiv, wenn die andere Datums-/Uhrzeit vor dieser Datums-/Uhrzeit liegt, und negativ, wenn nach.
- {{jsxref("Temporal/ZonedDateTime/startOfDay", "Temporal.ZonedDateTime.prototype.startOfDay()")}}
  - : Gibt ein `Temporal.ZonedDateTime`-Objekt zurück, das den ersten Moment dieses Datums in der Zeitzone darstellt. Es hat normalerweise eine Zeit von `00:00:00`, kann aber unterschiedlich sein, wenn Mitternacht aufgrund von Offset-Änderungen nicht existiert, in welchem Fall die erste Zeit, die existiert, zurückgegeben wird.
- {{jsxref("Temporal/ZonedDateTime/subtract", "Temporal.ZonedDateTime.prototype.subtract()")}}
  - : Gibt ein neues `Temporal.ZonedDateTime`-Objekt zurück, das diese Datums-/Uhrzeit um eine angegebene Dauer (in einer Form, die durch {{jsxref("Temporal/Duration/from", "Temporal.Duration.from()")}} umwandelbar ist) rückwärts bewegt darstellt.
- {{jsxref("Temporal/ZonedDateTime/toInstant", "Temporal.ZonedDateTime.prototype.toInstant()")}}
  - : Gibt ein neues {{jsxref("Temporal.Instant")}}-Objekt zurück, das den Moment dieser Datums-/Uhrzeit darstellt.
- {{jsxref("Temporal/ZonedDateTime/toJSON", "Temporal.ZonedDateTime.prototype.toJSON()")}}
  - : Gibt einen String zurück, der diese Datums-/Uhrzeit im gleichen [RFC 9557 Format](#rfc_9557_format) darstellt, wie es durch den Aufruf von {{jsxref("Temporal/ZonedDateTime/toString", "toString()")}} intendiert ist, durch {{jsxref("JSON.stringify()")}} implizit aufgerufen zu werden.
- {{jsxref("Temporal/ZonedDateTime/toLocaleString", "Temporal.ZonedDateTime.prototype.toLocaleString()")}}
  - : Gibt einen String mit einer sprachsensitiven Darstellung dieser Datums-/Uhrzeit zurück.
- {{jsxref("Temporal/ZonedDateTime/toPlainDate", "Temporal.ZonedDateTime.prototype.toPlainDate()")}}
  - : Gibt ein neues {{jsxref("Temporal.PlainDate")}}-Objekt zurück, das den Datumsanteil dieser Datums-/Uhrzeit darstellt.
- {{jsxref("Temporal/ZonedDateTime/toPlainDateTime", "Temporal.ZonedDateTime.prototype.toPlainDateTime()")}}
  - : Gibt ein neues {{jsxref("Temporal.PlainDateTime")}}-Objekt zurück, das die Datums- und Zeitanteile dieser Datums-/Uhrzeit darstellt. Nur die Zeitzoneninformationen werden entfernt.
- {{jsxref("Temporal/ZonedDateTime/toPlainTime", "Temporal.ZonedDateTime.prototype.toPlainTime()")}}
  - : Gibt ein neues {{jsxref("Temporal.PlainTime")}}-Objekt zurück, das den Zeitanteil dieser Datums-/Uhrzeit darstellt.
- {{jsxref("Temporal/ZonedDateTime/toString", "Temporal.ZonedDateTime.prototype.toString()")}}
  - : Gibt einen String zurück, der diese Datums-/Uhrzeit im [RFC 9557 Format](#rfc_9557_format) darstellt.
- {{jsxref("Temporal/ZonedDateTime/until", "Temporal.ZonedDateTime.prototype.until()")}}
  - : Gibt ein neues {{jsxref("Temporal.Duration")}}-Objekt zurück, das die Dauer von dieser Datums-/Uhrzeit zu einer anderen Datums-/Uhrzeit (in einer Form, die durch {{jsxref("Temporal/ZonedDateTime/from", "Temporal.ZonedDateTime.from()")}} umwandelbar ist) darstellt. Die Dauer ist positiv, wenn die andere Datums-/Uhrzeit nach dieser Datums-/Uhrzeit liegt, und negativ, wenn vor.
- {{jsxref("Temporal/ZonedDateTime/valueOf", "Temporal.ZonedDateTime.prototype.valueOf()")}}
  - : Wirft einen {{jsxref("TypeError")}}, was verhindert, dass `Temporal.ZonedDateTime`-Instanzen [implizit in Primitiven umgewandelt](/de/docs/Web/JavaScript/Data_structures#primitive_coercion) werden, wenn sie in arithmetischen oder Vergleichsoperationen verwendet werden.
- {{jsxref("Temporal/ZonedDateTime/with", "Temporal.ZonedDateTime.prototype.with()")}}
  - : Gibt ein neues `Temporal.ZonedDateTime`-Objekt zurück, das diese Datums-/Uhrzeit mit einigen durch neue Werte ersetzten Feldern darstellt.
- {{jsxref("Temporal/ZonedDateTime/withCalendar", "Temporal.ZonedDateTime.prototype.withCalendar()")}}
  - : Gibt ein neues `Temporal.ZonedDateTime`-Objekt zurück, das diese Datums-/Uhrzeit im neuen Kalendersystem interpretiert darstellt.
- {{jsxref("Temporal/ZonedDateTime/withPlainTime", "Temporal.ZonedDateTime.prototype.withPlainTime()")}}
  - : Gibt ein neues `Temporal.ZonedDateTime`-Objekt zurück, das diese Datums-/Uhrzeit mit dem vollständig durch die neue Zeit ersetzten Zeitteil darstellt (in einer Form, die durch {{jsxref("Temporal/PlainTime/from", "Temporal.PlainTime.from()")}} umwandelbar ist).
- {{jsxref("Temporal/ZonedDateTime/withTimeZone", "Temporal.ZonedDateTime.prototype.withTimeZone()")}}
  - : Gibt ein neues `Temporal.ZonedDateTime`-Objekt zurück, das den gleichen Moment wie diese Datums-/Uhrzeit, aber in der neuen Zeitzone darstellt.

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
