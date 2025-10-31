---
title: Temporal.ZonedDateTime
slug: Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime
l10n:
  sourceCommit: a4fcf79b60471db6f148fa4ba36f2cdeafbbeb70
---

{{SeeCompatTable}}

Das **`Temporal.ZonedDateTime`**-Objekt repräsentiert ein Datum und eine Uhrzeit mit einer Zeitzone. Es wird grundlegend als eine Kombination aus einem [Instant](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/Instant), einer Zeitzone und einem Kalendersystem dargestellt.

## Beschreibung

Ein `ZonedDateTime` dient als Brücke zwischen einer exakten Zeit und einer Uhrzeit: Es repräsentiert gleichzeitig einen Moment in der Geschichte (wie ein {{jsxref("Temporal.Instant")}}) und eine lokale Uhrzeit (wie ein {{jsxref("Temporal.PlainDateTime")}}). Dies geschieht durch Speicherung des Moments, der Zeitzone und des Kalendersystems. Die Zeitzone wird verwendet, um zwischen dem Moment und der lokalen Zeit zu konvertieren, das Kalendersystem wird verwendet, um die lokale Zeit zu interpretieren.

`ZonedDateTime` ist die einzige `Temporal`-Klasse, die zeitzonenbewusst ist. Die Hinzufügung einer Zeitzone führt dazu, dass `ZonedDateTime`-Objekte wichtiges abweichendes Verhalten im Vergleich zu {{jsxref("Temporal.PlainDateTime")}}-Objekten aufweisen. Nämlich, dass Sie nicht mehr davon ausgehen können "die Zeit 1 Minute später" sei jeden Tag gleich oder dass ein Tag 24 Stunden hat. Im schlimmsten Fall könnte ein ganzer Tag im lokalen Kalender fehlen. Unten bieten wir einen kurzen Überblick über Zeitzonen und Offsets und wie sie die Umwandlung zwischen UTC-Zeit und lokaler Zeit beeinflussen.

### Zeitzonen und Offsets

Alle Zeiten in JavaScript haben einen goldenen Standard: die UTC-Zeit, die kontinuierlich und gleichmäßig fortschreitet, während die physische Zeit voranschreitet. Im Gegensatz dazu sind Benutzer mehr an ihrer lokalen Zeit interessiert, das ist die Zeit, die sie auf ihren Kalendern und Uhren ablesen. Der Prozess der Umwandlung zwischen UTC-Zeit und lokaler Zeit beinhaltet ein Zeitzonen-Offset, der berechnet wird als:

```plain
local time = UTC time + offset
```

Zum Beispiel, wenn die UTC-Zeit 1970-01-01T00:00:00 und das Offset "-05:00" ist, dann ist die lokale Zeit:

```plain
1970-01-01T00:00:00 + -05:00 = 1969-12-31T19:00:00
```

Indem man diese lokale Zeit mit dem Offset versieht, und sie so als "1969-12-31T19:00:00-05:00" ausdrückt, kann sie nun zweifelsfrei als ein Moment in der Geschichte verstanden werden.

Um den Offset zu kennen, benötigen wir zwei Informationen: die _Zeitzone_ und den _Moment_. Die Zeitzone ist eine Region auf der Erde, in der zu allen Zeiten der gleiche Offset verwendet wird. Zwei Uhren in derselben Zeitzone zeigen immer gleichzeitig die gleiche Zeit an, aber der Offset ist nicht unbedingt konstant: das heißt, diese Uhrenzeiten können abrupt wechseln. Dies geschieht häufig während der Zeitumstellung auf Sommer- oder Winterzeit, bei der sich der Offset um eine Stunde ändert, was zweimal im Jahr passiert. Offsets können sich auch dauerhaft aufgrund politischer Änderungen ändern, z. B. wenn ein Land die Zeitzone wechselt.

Die Zeitzonen werden in der [IANA Time Zone Database](https://www.iana.org/time-zones) gespeichert. Jede IANA-Zeitzone hat:

- Einen _primären Zeitzonen-Identifikator_, der die Zeitzone eindeutig identifiziert. Sie bezieht sich normalerweise auf ein geografisches Gebiet, das von einer Stadt verankert ist (z. B. `Europe/Paris` oder `Africa/Kampala`), kann aber auch Einzel-Offset-Zeitzonen wie `UTC` (ein konstanter `+00:00`-Offset) oder `Etc/GMT+5` (die aus historischen Gründen ein negativer Offset `-05:00` ist) bezeichnen. Aus historischen Gründen ist der primäre Name für die UTC-Zeitzone `UTC`, obwohl sie in IANA `Etc/UTC` ist.
- Eine _Zeitzonendefinition_ in Form einer Tabelle, die UTC-Datum/Zeitbereiche (einschließlich zukünftiger Bereiche) bestimmten Offsets zuordnet.
- Null oder mehr _nicht primäre Zeitzonen-Identifikatoren_, die Aliase für den primären Zeitzonen-Identifikator sind. Dies sind normalerweise historische Namen, die nicht mehr verwendet werden, jedoch aus Kompatibilitätsgründen erhalten bleiben. Weitere Informationen finden Sie unten.

Als Input werden benannte Identifikatoren ohne Berücksichtigung der Groß- und Kleinschreibung abgeglichen. Intern werden sie in der bevorzugten Schreibweise gespeichert, und nicht primäre Identifikatoren werden _nicht_ zu ihrem primären Identifikator konvertiert.

> [!NOTE]
> Beim Setzen des Zeitzonennamens sollten Sie selten auf `"UTC"` setzen. `ZonedDateTime` ist dafür gedacht, Benutzern angezeigt zu werden, aber kein Mensch lebt in der "UTC"-Zeitzone. Wenn Sie die Zeitzone zum Zeitpunkt der Erstellung nicht kennen, aber die Uhrzeit kennen, verwenden Sie einen {{jsxref("Temporal.PlainDateTime")}}. Wenn Sie den exakten Moment kennen, verwenden Sie einen {{jsxref("Temporal.Instant")}}.

Wenn eine `Temporal`-API einen _Zeitzonen-Identifikator_ akzeptiert, werden neben primären und nicht primären Zeitzonen-Identifikatoren auch ein _Offset-Zeitzonen-Identifikator_ akzeptiert, der in derselben Form wie das Offset ist, ausgenommen Unterminuten-Genauigkeit ist nicht erlaubt. Zum Beispiel sind `+05:30`, `-08`, `+0600` alles gültige Offset-Identifikatoren. Intern werden Offset-Identifikatoren in der `±HH:mm`-Form gespeichert.

> [!NOTE]
> Vermeiden Sie die Verwendung von Offset-Identifikatoren, wenn es eine benannte Zeitzone gibt, die Sie stattdessen verwenden können. Selbst wenn eine Region immer einen einzigen Offset verwendet hat, ist es besser, den benannten Identifikator zu verwenden, um sich gegen zukünftige politische Änderungen des Offsets abzusichern.
>
> Wenn eine Region mehrere Offsets verwendet (oder verwendet hat), ist es noch wichtiger, ihre benannte Zeitzone zu verwenden. Dies liegt daran, dass `Temporal.ZonedDateTime` Methoden wie `add` oder `with` verwenden kann, um neue Instanzen zu einem anderen Moment zu erstellen. Wenn diese abgeleiteten Instanzen einem Moment entsprechen, der einen anderen Offset verwendet (zum Beispiel nach einer Zeitumstellung), werden Ihre Berechnungen eine falsche lokale Zeit haben. Die Verwendung einer benannten Zeitzone stellt sicher, dass lokale Daten und Zeiten immer für den richtigen Offset für diesen Moment angepasst werden.

Aus Bequemlichkeitsgründen können Sie beim Bereitstellen eines Zeitzonen-Identifikators für `Temporal`-APIs wie `Temporal.ZonedDateTime.prototype.withTimeZone()` und die `timeZoneId`-Option von `Temporal.ZonedDateTime.from()` dies in einigen anderen Formen tun:

- Als eine andere `ZonedDateTime`-Instanz, deren `timeZoneId` verwendet wird.
- Als ein [RFC 9557 String](#rfc_9557-format) mit einer Zeitzonen-Annotation, deren Zeitzonen-Identifikator verwendet wird.
- Als ein ISO 8601 / RFC 3339 String, der ein Offset enthält, dessen Offset als ein Offset-Identifikator verwendet wird; oder bei Verwendung von `Z`, dann wird die `"UTC"`-Zeitzone verwendet. Diese Nutzung wird im Allgemeinen nicht empfohlen, da, wie oben diskutiert, Offset-Identifikatoren nicht in der Lage sind, andere `Temporal.ZonedDateTime`-Instanzen sicher über einen Offset-Übergang wie den Beginn oder das Ende der Sommerzeit abzuleiten. Stattdessen sollten Sie in Erwägung ziehen, einfach `Temporal.Instant` zu verwenden oder die tatsächliche benannte Zeitzone des Benutzers zu ermitteln.

Die IANA-Zeitzonendatenbank ändert sich von Zeit zu Zeit, normalerweise um neue Zeitzonen angesichts politischer Veränderungen hinzuzufügen. In seltenen Fällen werden IANA-Zeitzonen-Identifikatoren jedoch umbenannt, um aktualisierte englische Übersetzungen eines Stadtnamens zu übernehmen oder veraltete Namenskonventionen zu aktualisieren. Zum Beispiel hier sind einige bemerkenswerte Namensänderungen:

| Aktueller IANA-Primär-Identifikator | Alter, jetzt nicht primärer Identifikator |
| ----------------------------------- | ----------------------------------------- |
| `America/Argentina/Buenos_Aires`    | `America/Buenos_Aires`                    |
| `Asia/Kolkata`                      | `Asia/Calcutta`                           |
| `Asia/Ho_Chi_Minh`                  | `Asia/Saigon`                             |
| `Europe/Kyiv`                       | `Europe/Kiev`                             |

Historisch gesehen verursachten diese Umbenennungen Probleme für Programmierer, weil die Unicode [CLDR-Datenbank](https://github.com/unicode-org/cldr/blob/main/common/bcp47/timezone.xml) (eine Bibliothek, auf die sich Browser verlassen, um Zeitzonen-Identifikatoren und Daten bereitzustellen) die Umbenennung von IANA aus [Stabilitätsgründen](https://unicode.org/reports/tr35/#Time_Zone_Identifiers) nicht übernommen hat. Infolgedessen meldeten einige Browser wie Chrome und Safari die veralteten Identifikatoren von CLDR, während andere Browser wie Firefox die Standardwerte von CLDR überschrieben und die aktuellen Primär-Identifikatoren meldeten.

Mit der Einführung von Temporal ist dieses Verhalten jetzt standardisierter:

- [CLDR-Daten](https://github.com/unicode-org/cldr/blob/main/common/bcp47/timezone.xml) enthält jetzt ein `"_iana"` Attribut, das den aktuellsten Identifikator angibt, falls der ältere, stabile Identifikator umbenannt wurde. Browser können dieses neue Attribut verwenden, um Anrufern die aktuellsten Identifikatoren bereitzustellen.
- Zeitzonen-Identifikatoren, die vom Programmierer bereitgestellt werden, werden niemals durch einen Alias ersetzt. Zum Beispiel, wenn der Anrufer `Asia/Calcutta` oder `Asia/Kolkata` als Identifikator-Input für {{jsxref("Temporal/ZonedDateTime/from", "Temporal.ZonedDateTime.from()")}} bereitstellt, dann wird derselbe Identifikator in der resultierenden Instanz {{jsxref("Temporal/ZonedDateTime/timeZoneId", "timeZoneId")}} zurückgegeben. Beachten Sie, dass die Schreibweise von Ausgaben normalisiert wird, um mit IANA übereinzustimmen, sodass `ASIA/calCuTTa` als Input eine {{jsxref("Temporal/ZonedDateTime/timeZoneId", "timeZoneId")}} von `Asia/Calcutta` als Ausgabe erzeugt.
- Wenn ein Zeitzonen-Identifikator nicht von einem Anrufer bereitgestellt, sondern stattdessen aus dem System selbst bezogen wird (z. B. bei Verwendung von {{jsxref("Temporal/Now/timeZoneId", "Temporal.Now.timeZoneId()")}}), werden moderne Identifikatoren in allen Browsern zurückgegeben. Bei Stadtnamenänderungen gibt es eine zweijährige Verzögerung, bevor diese systembasierten Identifikatoren-APIs den neuen Namen zurückgeben, wodurch anderen Komponenten (wie einem Node-Server) Zeit gegeben wird, ihre Kopien der IANA-Datenbank zu aktualisieren, um den neuen Namen zu erkennen.

Beachten Sie, dass die Zuordnung primärer Identifikatoren den Ländercode beibehält: zum Beispiel zeichnet die IANA-Datenbank `Atlantic/Reykjavik` als Alias für `Africa/Abidjan` auf, aber da sie zu unterschiedlichen Ländern gehören (Island und Côte d'Ivoire), werden sie als unterschiedliche primäre Identifikatoren behandelt.

Diese Standardisierung gilt außerhalb von `Temporal` ebenfalls. Zum Beispiel wird die `timeZone`-Option, die von {{jsxref("Intl/DateTimeFormat/resolvedOptions", "Intl.DateTimeFormat.prototype.resolvedOptions()")}} zurückgegeben wird, auch niemals durch einen Alias ersetzt, obwohl Browser diese Identifikatoren vor der Standardisierung durch Temporal traditionell kanonisiert haben. Andererseits geben {{jsxref("Intl/Locale/getTimeZones", "Intl.Locale.prototype.getTimeZones()")}} und {{jsxref("Intl.supportedValuesOf()")}} (`timeZone`-Option) den aktuellsten Identifikator zurück, während einige Browser früher den alten, nicht primären Identifikator zurückgaben.

### RFC 9557-Format

`ZonedDateTime`-Objekte können mithilfe des [RFC 9557](https://datatracker.ietf.org/doc/html/rfc9557)-Formats, einer Erweiterung des [ISO 8601 / RFC 3339](https://datatracker.ietf.org/doc/html/rfc3339)-Formats, serialisiert und geparst werden. Der String hat die folgende Form (Leerzeichen sind nur zur Leserlichkeit und sollten im tatsächlichen String nicht vorhanden sein):

```plain
YYYY-MM-DD T HH:mm:ss.sssssssss Z/±HH:mm [time_zone_id] [u-ca=calendar_id]
```

- `YYYY`
  - : Entweder eine vierstellige Zahl oder eine sechsstellige Zahl mit einem `+` oder `-` Vorzeichen.
- `MM`
  - : Eine zweistellige Zahl von `01` bis `12`.
- `DD`
  - : Eine zweistellige Zahl von `01` bis `31`. Die `YYYY`, `MM` und `DD` Komponenten können durch `-` oder gar nichts getrennt werden.
- `T` {{optional_inline}}
  - : Der datumszeitliche Separator, der `T`, `t` oder ein Leerzeichen sein kann. Nur vorhanden, wenn `HH` vorhanden ist.
- `HH` {{optional_inline}}
  - : Eine zweistellige Zahl von `00` bis `23`. Standardmäßig `00`.
- `mm` {{optional_inline}}
  - : Eine zweistellige Zahl von `00` bis `59`. Standardmäßig `00`.
- `ss.sssssssss` {{optional_inline}}
  - : Eine zweistellige Zahl von `00` bis `59`. Kann optional durch einen `.` oder `,` gefolgt von einer bis neun Ziffern ergänzt werden. Standardmäßig `00`. Die `HH`, `mm` und `ss` Komponenten können durch `:` oder gar nichts getrennt werden. Sie können entweder nur `ss` oder sowohl `ss` als auch `mm` weglassen, so dass die Zeit in einer von drei Formen erscheinen kann: `HH`, `HH:mm`, oder `HH:mm:ss.sssssssss`.
- `Z/±HH:mm` {{optional_inline}}
  - : Entweder der UTC-Designator `Z` oder `z` oder ein Offset von UTC in der Form `+` oder `-` gefolgt von demselben Format wie die Zeitkomponente. Beachten Sie, dass Unterminuten-Genauigkeit (`:ss.sssssssss`) von anderen Systemen möglicherweise nicht unterstützt wird und akzeptiert, aber nie ausgegeben wird. Wenn es weggelassen wird, wird das Offset vom Zeitzonen-Identifikator abgeleitet. Wenn vorhanden, muss auch die Zeit angegeben werden. `Z` ist nicht dasselbe wie `+00:00`: das erste bedeutet, dass die Zeit in UTC-Form festgelegt ist, unabhängig vom Zeitzonen-Identifikator, während das zweite bedeutet, dass die Zeit in Ortszeit angegeben ist, die zufällig UTC+0 entspricht, und wird gegen den Zeitzonen-Identifikator über die [`offset` Option](#offset-uneindeutigkeit) validiert.
- `[time_zone_id]`
  - : Ersetzen Sie `time_zone_id` mit dem Zeitzonen-Identifikator (benannt oder Offset) wie oben beschrieben. Kann ein _kritisches Flag_ haben, indem der Identifikator mit `!` vorangestellt wird: z. B. `[!America/New_York]`. Dieses Flag sagt anderen Systemen im Allgemeinen, dass es nicht ignoriert werden kann, wenn sie es nicht unterstützen. Beachten Sie, dass dies für `Temporal.ZonedDateTime.from()` erforderlich ist: das Fehlen führt zu einem `RangeError`. Wenn Sie ISO 8601 / RFC 3339-Strings ohne Zeitzonen-Identifikator-Annotationen parsen möchten, verwenden Sie {{jsxref("Temporal/Instant/from", "Temporal.Instant.from()")}} stattdessen.
- `[u-ca=calendar_id]` {{optional_inline}}
  - : Ersetzen Sie `calendar_id` mit dem Kalender, der verwendet werden soll. Siehe [`Intl.supportedValuesOf()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/supportedValuesOf#supported_calendar_types) für eine Liste der allgemein unterstützten Kalendertypen. Standardmäßig `[u-ca=iso8601]`. Kann ein _kritisches Flag_ haben, indem der Schlüssel mit `!` vorangestellt wird: z. B. `[!u-ca=iso8601]`. Dieses Flag sagt anderen Systemen im Allgemeinen, dass es nicht ignoriert werden kann, wenn sie es nicht unterstützen. Der `Temporal`-Parser wird einen Fehler werfen, wenn die Annotationen zwei oder mehr Kalender-Annotationen enthalten und eine davon kritisch ist. Beachten Sie, dass das `YYYY-MM-DD` immer als ISO 8601-Kalenderdatum interpretiert und dann in den angegebenen Kalender konvertiert wird.

Als Input werden andere Annotationen im `[key=value]`-Format ignoriert, und sie dürfen nicht das kritische Flag haben.

Beim Serialisieren können Sie die Bruchteile der Sekunden, ob das Offset/Zeitzonen-ID/Kalender-ID angezeigt werden soll, und ob für die Annotationen ein kritisches Flag hinzugefügt werden soll, konfigurieren.

### Uneindeutigkeit und Lücken von lokaler Zeit zu UTC-Zeit

Gibt man eine Zeitzone an, ist die Umwandlung von UTC zur lokalen Zeit unkompliziert: Sie erhalten zuerst das Offset anhand des Zeitzonennamens und des Moments und addieren dann das Offset zum Moment. Umgekehrt gilt dies nicht: Die Umwandlung von lokaler Zeit in UTC-Zeit ohne explizites Offset ist mehrdeutig, da eine lokale Zeit null, einer oder mehreren UTC-Zeiten entsprechen kann. Betrachten Sie die häufigste Ursache: Zeitumstellungen. Nehmen Sie New York als Beispiel. Sein Standard-Offset ist UTC-5, aber während der Sommerzeit werden alle Uhren um eine Stunde vorgestellt, sodass der Offset zu UTC-4 wird. In den USA finden die Übergänge um 2:00 Uhr Ortszeit statt, beachten Sie diese beiden Übergangstage:

| UTC-Zeit             | New Yorker Zeit           |
| -------------------- | ------------------------- |
| 2024-03-10T06:58:00Z | 2024-03-10T01:58:00-05:00 |
| 2024-03-10T06:59:00Z | 2024-03-10T01:59:00-05:00 |
| 2024-03-10T07:00:00Z | 2024-03-10T03:00:00-04:00 |
| ---                  | ---                       |
| 2024-11-03T05:58:00Z | 2024-11-03T01:58:00-04:00 |
| 2024-11-03T05:59:00Z | 2024-11-03T01:59:00-04:00 |
| 2024-11-03T06:00:00Z | 2024-11-03T01:00:00-05:00 |

Wie Sie sehen können, verschwand im März eine Stunde aus der lokalen Zeit, und im November haben wir zwei Stunden, die dieselbe Uhrzeit haben. Angenommen, wir haben einen `PlainDateTime` gespeichert, der sagt "2024-03-10T02:05:00", und wir möchten ihn in der `America/New_York`-Zeitzone interpretieren, gibt es keine Zeit, die ihm entspricht, während ein `PlainDateTime`, der sagt "2024-11-03T01:05:00" zwei verschiedenen Momenten entsprechen kann.

Beim Erstellen eines `ZonedDateTime` aus einer lokalen Zeit (mit {{jsxref("Temporal.ZonedDateTime/from", "Temporal.ZonedDateTime.from()")}}, {{jsxref("Temporal.ZonedDateTime/with", "Temporal.ZonedDateTime.prototype.with()")}}, {{jsxref("Temporal/PlainDateTime/toZonedDateTime", "Temporal.PlainDateTime.prototype.toZonedDateTime()")}}), ist das Verhalten bei Uneindeutigkeit und Lücken mit der `disambiguation`-Option konfigurierbar:

- `earlier`
  - : Wenn es zwei mögliche Momente gibt, wählen Sie den früheren. Wenn es eine Lücke gibt, gehen Sie zurück um die Lückendauer.
- `later`
  - : Wenn es zwei mögliche Momente gibt, wählen Sie den späteren. Wenn es eine Lücke gibt, gehen Sie vor um die Lückendauer.
- `compatible` (Standard)
  - : Gleiches Verhalten wie {{jsxref("Date")}}: verwenden Sie `later` bei Lücken und `earlier` bei Uneindeutigkeiten.
- `reject`
  - : Werfen Sie einen `RangeError`, wann immer es eine Uneindeutigkeit oder eine Lücke gibt.

Es gibt mehrere Fälle, in denen beim Erstellen eines `ZonedDateTime` keine Uneindeutigkeit besteht:

- Wenn die Zeit in UTC über das `Z`-Offset angegeben ist.
- Wenn das Offset explizit angegeben und verwendet wird (siehe unten).

### Offset-Uneindeutigkeit

Wir haben bereits gezeigt, wie Uneindeutigkeit entstehen kann, wenn eine lokale Zeit in einer Zeitzone ohne explizites Offset interpretiert wird. Wenn jedoch ein explizites Offset bereitgestellt wird, entsteht ein weiterer Konflikt: zwischen dem angegebenen Offset und dem aus der Zeitzone und der lokalen Zeit berechneten Offset. Dies ist ein unvermeidbares Problem in der realen Welt: Wenn Sie eine Zeit in der Zukunft mit einem erwarteten Offset speichern, kann die Zeitzonendefinition vor dieser Zeit aufgrund politischer Gründe geändert werden. Zum Beispiel, angenommen, wir stellen 2018 eine Erinnerung auf die Zeit `2019-12-23T12:00:00-02:00[America/Sao_Paulo]` ein (was in der Sommerzeit liegt; Brasilien befindet sich auf der Südhalbkugel, somit beginnt die Sommerzeit im Oktober und endet im Februar). Aber bevor diese Zeit kommt, beschließt Brasilien Anfang 2019, nicht mehr die Sommerzeit zu beobachten, daher wird der tatsächliche Offset `-03:00`. Sollte die Erinnerung nun immer noch um Mittag ausgelöst werden (indem die lokale Zeit beibehalten wird), oder sollte sie um 11:00 Uhr ausgelöst werden (indem die genaue Zeit beibehalten wird)?

Beim Erstellen eines `ZonedDateTime` mit {{jsxref("Temporal/ZonedDateTime/from", "Temporal.ZonedDateTime.from()")}} oder bei dessen Aktualisierung mit der {{jsxref("Temporal/ZonedDateTime/with", "with()")}}-Methode ist das Verhalten bei Offset-Uneindeutigkeit mit der `offset`-Option konfigurierbar:

- `use`
  - : Verwenden Sie das Offset, um die genaue Zeit zu berechnen. Diese Option "verwendet" das Offset, um den durch den String dargestellten Moment zu bestimmen, der derselbe ursprünglich berechnete Moment sein wird, als wir die Zeit gespeichert haben, selbst wenn das Offset zu diesem Moment geändert wurde. Der Zeitzonen-Identifikator wird noch verwendet, um das (möglicherweise aktualisierte) Offset zu erschließen und dieses Offset zu verwenden, um die genaue Zeit in lokale Zeit umzuwandeln.
- `ignore`
  - : Verwenden Sie den Zeitzonen-Identifikator, um das Offset neu zu berechnen, ignorieren Sie das im String angegebene Offset. Diese Option behält dieselbe lokale Zeit bei, die ursprünglich berechnet wurde, als wir die Zeit gespeichert haben, kann aber einem anderen Moment entsprechen. Beachten Sie, dass diese Option dieselbe lokale Zeitinterpretations-Umschließung wie oben gezeigt verursachen kann, die mit der `disambiguation`-Option aufgelöst wird.
- `reject`
  - : Werfen Sie einen `RangeError`, wann immer ein Konflikt zwischen dem Offset und dem Zeitzonen-Identifikator besteht. Dies ist der Standard für {{jsxref("Temporal/ZonedDateTime/from", "Temporal.ZonedDateTime.from()")}}.
- `prefer`
  - : Verwenden Sie das Offset, wenn es gültig ist, berechnen Sie es ansonsten aus dem Zeitzonen-Identifikator. Dies ist der Standard für {{jsxref("Temporal/ZonedDateTime/with", "Temporal.ZonedDateTime.prototype.with()")}} (siehe die Methode für mehr Details). Dies unterscheidet sich von `ignore`, da im Fall eines lokalen Zeituneindeutigkeit das Offset verwendet wird, um es zu lösen, und nicht die `disambiguation`-Option.

Beachten Sie, dass das `Z`-Offset nicht gleich `+00:00` ist. Das `Z`-Offset bedeutet "die Zeit in UTC ist bekannt, aber der Offset zur Ortszeit ist unbekannt", gemäß [RFC 9557](https://www.rfc-editor.org/rfc/rfc9557.html#name-update-to-rfc-3339). Wenn der Zeitstring das `Z`-Offset verwendet, wird die `offset`-Option ignoriert, und das Offset wird aus der Zeitzonen-ID abgeleitet. Andererseits wird das `+00:00`-Offset als ein lokales Zeitoffset interpretiert, das zufällig UTC entspricht und gegen die Zeitzonen-ID validiert wird.

> [!NOTE]
> Obwohl {{jsxref("Temporal/Instant/from", "Temporal.Instant.from()")}} auch einen [RFC 9557](#rfc_9557-format) String in derselben Form akzeptiert, gibt es keine Uneindeutigkeit, da er immer den Zeitzonen-Identifikator ignoriert und nur das Offset liest.

## Konstruktor

- {{jsxref("Temporal/ZonedDateTime/ZonedDateTime", "Temporal.ZonedDateTime()")}} {{experimental_inline}}
  - : Erstellt ein neues `Temporal.ZonedDateTime`-Objekt, indem die zugrunde liegenden Daten direkt bereitgestellt werden.

## Statische Methoden

- {{jsxref("Temporal/ZonedDateTime/compare", "Temporal.ZonedDateTime.compare()")}} {{experimental_inline}}
  - : Gibt eine Zahl (-1, 0 oder 1) zurück, die angibt, ob das erste Datum-Uhrzeit vor, gleich oder nach dem zweiten Datum-Uhrzeit kommt. Entspricht dem Vergleichen der {{jsxref("Temporal/ZonedDateTime/epochNanoseconds", "epochNanoseconds")}} der beiden Datum-Uhrzeiten.
- {{jsxref("Temporal/ZonedDateTime/from", "Temporal.ZonedDateTime.from()")}} {{experimental_inline}}
  - : Erstellt ein neues `Temporal.ZonedDateTime`-Objekt aus einem anderen `Temporal.ZonedDateTime`-Objekt, einem Objekt mit Datums-, Zeit- und Zeitzoneneigenschaften oder einem [RFC 9557](#rfc_9557-format) String.

## Instanz-Eigenschaften

Diese Eigenschaften sind auf `Temporal.ZonedDateTime.prototype` definiert und werden von allen `Temporal.ZonedDateTime`-Instanzen geteilt.

- {{jsxref("Temporal/ZonedDateTime/calendarId", "Temporal.ZonedDateTime.prototype.calendarId")}} {{experimental_inline}}
  - : Gibt einen String zurück, der den [Kalender](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars) repräsentiert, der für die Interpretation des internen ISO 8601-Datums verwendet wird.
- {{jsxref("Object/constructor", "Temporal.ZonedDateTime.prototype.constructor")}}
  - : Die Konstruktorfunktion, die das Instanzobjekt erstellt hat. Für `Temporal.ZonedDateTime`-Instanzen ist der anfängliche Wert der {{jsxref("Temporal/ZonedDateTime/ZonedDateTime", "Temporal.ZonedDateTime()")}} Konstruktor.
- {{jsxref("Temporal/ZonedDateTime/day", "Temporal.ZonedDateTime.prototype.day")}} {{experimental_inline}}
  - : Gibt eine positive Ganzzahl zurück, die den 1-basierten Tagesindex im Monat dieses Datums darstellt, was die gleiche Tageszahl ist, die Sie auf einem Kalender sehen würden. [Kalender](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars)-abhängig. Beginnt im Allgemeinen bei 1 und ist kontinuierlich, aber nicht immer.
- {{jsxref("Temporal/ZonedDateTime/dayOfWeek", "Temporal.ZonedDateTime.prototype.dayOfWeek")}} {{experimental_inline}}
  - : Gibt eine positive Ganzzahl zurück, die den 1-basierten Tagesindex in der Woche dieses Datums darstellt. Tage in einer Woche sind sequentiell von `1` bis {{jsxref("Temporal/ZonedDateTime/daysInWeek", "daysInWeek")}} nummeriert, wobei jede Zahl ihrem Namen zugeordnet ist. [Kalender](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars)-abhängig. 1 repräsentiert normalerweise Montag im Kalender, selbst wenn Orte, die den Kalender verwenden, einen anderen Tag als ersten Tag der Woche betrachten können (siehe {{jsxref("Intl/Locale/getWeekInfo", "Intl.Locale.prototype.getWeekInfo()")}}).
- {{jsxref("Temporal/ZonedDateTime/dayOfYear", "Temporal.ZonedDateTime.prototype.dayOfYear")}} {{experimental_inline}}
  - : Gibt eine positive Ganzzahl zurück, die den 1-basierten Tagesindex im Jahr dieses Datums darstellt. Der erste Tag dieses Jahres ist `1`, und der letzte Tag ist der {{jsxref("Temporal/ZonedDateTime/daysInYear", "daysInYear")}}. [Kalender](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars)-abhängig.
- {{jsxref("Temporal/ZonedDateTime/daysInMonth", "Temporal.ZonedDateTime.prototype.daysInMonth")}} {{experimental_inline}}
  - : Gibt eine positive Ganzzahl zurück, die die Anzahl der Tage im Monat dieses Datums darstellt. [Kalender](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars)-abhängig.
- {{jsxref("Temporal/ZonedDateTime/daysInWeek", "Temporal.ZonedDateTime.prototype.daysInWeek")}} {{experimental_inline}}
  - : Gibt eine positive Ganzzahl zurück, die die Anzahl der Tage in der Woche dieses Datums darstellt. [Kalender](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars)-abhängig. Für den ISO 8601-Kalender sind es immer 7, aber in anderen Kalendersystemen kann es von Woche zu Woche abweichen.
- {{jsxref("Temporal/ZonedDateTime/daysInYear", "Temporal.ZonedDateTime.prototype.daysInYear")}} {{experimental_inline}}
  - : Gibt eine positive Ganzzahl zurück, die die Anzahl der Tage im Jahr dieses Datums darstellt. [Kalender](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars)-abhängig. Für den ISO 8601-Kalender sind es 365 oder 366 in einem Schaltjahr.
- {{jsxref("Temporal/ZonedDateTime/epochMilliseconds", "Temporal.ZonedDateTime.prototype.epochMilliseconds")}} {{experimental_inline}}
  - : Gibt eine Ganzzahl zurück, die die Anzahl der Millisekunden angibt, die seit dem Unix-Epoch (Mitternacht zu Beginn des 1. Januar 1970, UTC) bis zu diesem Moment vergangen sind. Entspricht der Division von `epochNanoseconds` durch `1e6` und der Rundung nach unten des Ergebnisses.
- {{jsxref("Temporal/ZonedDateTime/epochNanoseconds", "Temporal.ZonedDateTime.prototype.epochNanoseconds")}} {{experimental_inline}}
  - : Gibt eine {{jsxref("BigInt")}} zurück, die die Anzahl der Nanosekunden angibt, die seit dem Unix-Epoch (Mitternacht zu Beginn des 1. Januar 1970, UTC) bis zu diesem Moment vergangen sind.
- {{jsxref("Temporal/ZonedDateTime/era", "Temporal.ZonedDateTime.prototype.era")}} {{experimental_inline}}
  - : Gibt einen kalenderabhängigen Kleinbuchstaben-String zurück, der die Epoche dieses Datums darstellt, oder `undefined`, wenn der Kalender keine Epochen verwendet (z.B. ISO 8601). `era` und `eraYear` identifizieren zusammen ein Jahr in einem Kalender eindeutig, genauso wie es `year` tut. [Kalender](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars)-abhängig. Für den gregorianischen Kalender ist es entweder `"gregory"` oder `"gregory-inverse"`.
- {{jsxref("Temporal/ZonedDateTime/eraYear", "Temporal.ZonedDateTime.prototype.eraYear")}} {{experimental_inline}}
  - : Gibt eine nichtnegative Ganzzahl zurück, die das Jahr dieses Datums innerhalb der Epoche darstellt, oder `undefined`, wenn der Kalender keine Epochen verwendet (z.B. ISO 8601). Der Jahr-Index beginnt normalerweise bei 1 (häufiger) oder 0, und Jahre in einer Epoche können mit der Zeit abnehmen (z.B. gregorianisches BCE). `era` und `eraYear` identifizieren zusammen ein Jahr in einem Kalender eindeutig, genauso wie `year` es tut. [Kalender](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars)-abhängig.
- {{jsxref("Temporal/ZonedDateTime/hour", "Temporal.ZonedDateTime.prototype.hour")}} {{experimental_inline}}
  - : Gibt eine Ganzzahl von 0 bis 23 zurück, die die Stundenkomponente dieser Zeit darstellt.
- {{jsxref("Temporal/ZonedDateTime/hoursInDay", "Temporal.ZonedDateTime.prototype.hoursInDay")}} {{experimental_inline}}
  - : Gibt eine positive Ganzzahl zurück, die die Anzahl der Stunden im Tag dieses Datums in der Zeitzone darstellt. Es können weniger oder mehr als 24 bei Offset-Änderungen wie der Sommerzeitumstellung sein.
- {{jsxref("Temporal/ZonedDateTime/inLeapYear", "Temporal.ZonedDateTime.prototype.inLeapYear")}} {{experimental_inline}}
  - : Gibt einen booleschen Wert zurück, der angibt, ob dieses Datum in einem Schaltjahr liegt. Ein Schaltjahr ist ein Jahr, das mehr Tage hat (aufgrund eines Schaltages oder eines Schaltmonats) als ein normales Jahr. [Kalender](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars)-abhängig.
- {{jsxref("Temporal/ZonedDateTime/microsecond", "Temporal.ZonedDateTime.prototype.microsecond")}} {{experimental_inline}}
  - : Gibt eine Ganzzahl von 0 bis 999 zurück, die die Mikrosekunde (10<sup>-6</sup> Sekunde) dieser Zeit darstellt.
- {{jsxref("Temporal/ZonedDateTime/millisecond", "Temporal.ZonedDateTime.prototype.millisecond")}} {{experimental_inline}}
  - : Gibt eine Ganzzahl von 0 bis 999 zurück, die die Millisekunde (10<sup>-3</sup> Sekunde) dieser Zeit darstellt.
- {{jsxref("Temporal/ZonedDateTime/minute", "Temporal.ZonedDateTime.prototype.minute")}} {{experimental_inline}}
  - : Gibt eine Ganzzahl von 0 bis 59 zurück, die die Minutenkomponente dieser Zeit darstellt.
- {{jsxref("Temporal/ZonedDateTime/month", "Temporal.ZonedDateTime.prototype.month")}} {{experimental_inline}}
  - : Gibt eine positive Ganzzahl zurück, die den 1-basierten Monatsindex im Jahr dieses Datums darstellt. Der erste Monat dieses Jahres ist `1`, und der letzte Monat ist der {{jsxref("Temporal/ZonedDateTime/monthsInYear", "monthsInYear")}}. [Kalender](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars)-abhängig. Beachten Sie, dass der Index im Gegensatz zu {{jsxref("Date.prototype.getMonth()")}} 1-basiert ist. Wenn der Kalender Schaltmonate hat, dann kann der Monat mit demselben {{jsxref("Temporal/ZonedDateTime/monthCode", "monthCode")}} unterschiedliche `month`-Indizes für verschiedene Jahre haben.
- {{jsxref("Temporal/ZonedDateTime/monthCode", "Temporal.ZonedDateTime.prototype.monthCode")}} {{experimental_inline}}
  - : Gibt einen kalenderabhängigen String zurück, der den Monat dieses Datums darstellt. [Kalender](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars)-abhängig. Normalerweise ist es `M` plus eine zweistellige Monatszahl. Für Schaltmonate ist es der Code vom vorhergehenden Monat gefolgt von `L`. Wenn der Schaltmonat der erste Monat des Jahres ist, ist der Code `M00L`.
- {{jsxref("Temporal/ZonedDateTime/monthsInYear", "Temporal.ZonedDateTime.prototype.monthsInYear")}} {{experimental_inline}}
  - : Gibt eine positive Ganzzahl zurück, die die Anzahl der Monate im Jahr dieses Datums darstellt. [Kalender](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars)-abhängig. Für den ISO 8601-Kalender sind es immer 12, aber in anderen Kalendersystemen kann es variieren.
- {{jsxref("Temporal/ZonedDateTime/nanosecond", "Temporal.ZonedDateTime.prototype.nanosecond")}} {{experimental_inline}}
  - : Gibt eine Ganzzahl von 0 bis 999 zurück, die die Nanosekunde (10<sup>-9</sup> Sekunde) dieser Zeit darstellt.
- {{jsxref("Temporal/ZonedDateTime/offset", "Temporal.ZonedDateTime.prototype.offset")}} {{experimental_inline}}
  - : Gibt einen String zurück, der das [Offset](#zeitzonen_und_offsets) darstellt, das zur Interpretation des internen Moments verwendet wird, in der Form `±HH:mm` (oder `±HH:mm:ss.sssssssss` mit so viel Unterminuten-Genauigkeit wie nötig).
- {{jsxref("Temporal/ZonedDateTime/offsetNanoseconds", "Temporal.ZonedDateTime.prototype.offsetNanoseconds")}} {{experimental_inline}}
  - : Gibt eine Ganzzahl zurück, die das [Offset](#zeitzonen_und_offsets) darstellt, das zur Interpretation des internen Moments verwendet wird, als Anzahl der Nanosekunden (positiv oder negativ).
- {{jsxref("Temporal/ZonedDateTime/second", "Temporal.ZonedDateTime.prototype.second")}} {{experimental_inline}}
  - : Gibt eine Ganzzahl von 0 bis 59 zurück, die die Sekundenkomponente dieser Zeit darstellt.
- {{jsxref("Temporal/ZonedDateTime/timeZoneId", "Temporal.ZonedDateTime.prototype.timeZoneId")}} {{experimental_inline}}
  - : Gibt einen String zurück, der den [Zeitzonen-Identifikator](#zeitzonen_und_offsets) darstellt, der zur Interpretation des internen Moments verwendet wird. Es verwendet den gleichen String, der bei der Konstruktion des `Temporal.ZonedDateTime`-Objekts verwendet wurde, welcher entweder ein IANA-Zeitzonenname oder ein fester Offset ist.
- {{jsxref("Temporal/ZonedDateTime/weekOfYear", "Temporal.ZonedDateTime.prototype.weekOfYear")}} {{experimental_inline}}
  - : Gibt eine positive Ganzzahl zurück, die den 1-basierten Wochenindex im {{jsxref("Temporal/ZonedDateTime/yearOfWeek", "yearOfWeek")}} dieses Datums darstellt, oder `undefined`, wenn der Kalender kein wohldefiniertes Wochensystem hat. Die erste Woche des Jahres ist `1`. [Kalender](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars)-abhängig. Beachten Sie, dass für ISO 8601 die ersten und letzten Tage des Jahres der letzten Woche des vorherigen Jahres oder der ersten Woche des nächsten Jahres zugeordnet werden können.
- {{jsxref("Temporal/ZonedDateTime/year", "Temporal.ZonedDateTime.prototype.year")}} {{experimental_inline}}
  - : Gibt eine Ganzzahl zurück, die die Anzahl der Jahre dieses Datums relativ zum Beginn eines kalender-spezifischen Epoche-Jahres darstellt. [Kalender](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars)-abhängig. Normalerweise ist Jahr 1 entweder das erste Jahr der letzten Epoche oder das ISO 8601 Jahr `0001`. Wenn der Epochenbeginn in der Mitte des Jahres liegt, hat dieses Jahr denselben Wert vor und nach dem Startdatum der Epoche.
- {{jsxref("Temporal/ZonedDateTime/yearOfWeek", "Temporal.ZonedDateTime.prototype.yearOfWeek")}} {{experimental_inline}}
  - : Gibt eine Ganzzahl zurück, die das Jahr darstellt, das mit der {{jsxref("Temporal/ZonedDateTime/weekOfYear", "weekOfYear")}} dieses Datums gepaart werden soll, oder `undefined`, wenn der Kalender kein wohldefiniertes Wochensystem hat. [Kalender](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars)-abhängig. Normalerweise ist dies das Jahr des Datums, aber für ISO 8601 können die ersten und letzten Tage des Jahres der letzten Woche des vorherigen Jahres oder der ersten Woche des nächsten Jahres zugeordnet werden, wodurch sich `yearOfWeek` um 1 unterscheidet.
- `Temporal.ZonedDateTime.prototype[Symbol.toStringTag]`
  - : Der anfängliche Wert der [`[Symbol.toStringTag]`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag)-Eigenschaft ist der String `"Temporal.ZonedDateTime"`. Diese Eigenschaft wird in {{jsxref("Object.prototype.toString()")}} verwendet.

## Instanz-Methoden

- {{jsxref("Temporal/ZonedDateTime/add", "Temporal.ZonedDateTime.prototype.add()")}} {{experimental_inline}}
  - : Gibt ein neues `Temporal.ZonedDateTime`-Objekt zurück, das diese Datum-Uhrzeit nach vorne um eine gegebene Dauer verschoben darstellt (in einer Form, die von {{jsxref("Temporal/Duration/from", "Temporal.Duration.from()")}} konvertierbar ist).
- {{jsxref("Temporal/ZonedDateTime/equals", "Temporal.ZonedDateTime.prototype.equals()")}} {{experimental_inline}}
  - : Gibt `true` zurück, wenn diese Datum-Uhrzeit gleichwertig im Wert mit einer anderen Datum-Uhrzeit ist (in einer Form, die von {{jsxref("Temporal/ZonedDateTime/from", "Temporal.ZonedDateTime.from()")}} konvertierbar ist), und `false` andernfalls. Sie werden sowohl nach ihren Momentwerten, Zeitzonen als auch ihren Kalendern verglichen, sodass zwei Datum-Uhrzeiten aus verschiedenen Kalendern oder Zeitzonen von {{jsxref("Temporal/ZonedDateTime/compare", "Temporal.ZonedDateTime.compare()")}} als gleich angesehen werden können, aber nicht von `equals()`.
- {{jsxref("Temporal/ZonedDateTime/getTimeZoneTransition", "Temporal.ZonedDateTime.prototype.getTimeZoneTransition()")}} {{experimental_inline}}
  - : Gibt ein `Temporal.ZonedDateTime`-Objekt zurück, das den ersten Moment nach oder vor diesem Moment repräsentiert, an dem sich der UTC-Offset der Zeitzone ändert, oder `null`, wenn es keinen solchen Übergang gibt. Dies ist nützlich, um die Offset-Regeln einer Zeitzone herauszufinden, wie ihr Muster für Sommerzeit.
- {{jsxref("Temporal/ZonedDateTime/round", "Temporal.ZonedDateTime.prototype.round()")}} {{experimental_inline}}
  - : Gibt ein neues `Temporal.ZonedDateTime`-Objekt zurück, das diese Datum-Uhrzeit auf die angegebene Einheit gerundet darstellt.
- {{jsxref("Temporal/ZonedDateTime/since", "Temporal.ZonedDateTime.prototype.since()")}} {{experimental_inline}}
  - : Gibt ein neues {{jsxref("Temporal.Duration")}}-Objekt zurück, das die Dauer von einer anderen Datum-Uhrzeit (in einer Form, die von {{jsxref("Temporal/ZonedDateTime/from", "Temporal.ZonedDateTime.from()")}} konvertierbar ist) zu dieser Datum-Uhrzeit darstellt. Die Dauer ist positiv, wenn die andere Datum-Uhrzeit vor dieser Datum-Uhrzeit ist und negativ, wenn sie nachher ist.
- {{jsxref("Temporal/ZonedDateTime/startOfDay", "Temporal.ZonedDateTime.prototype.startOfDay()")}} {{experimental_inline}}
  - : Gibt ein `Temporal.ZonedDateTime`-Objekt zurück, das den ersten Moment dieses Datums in der Zeitzone darstellt. Es hat normalerweise eine Zeit von `00:00:00`, kann jedoch abweichen, wenn die Mitternacht aufgrund von Offset-Änderungen nicht existiert, in diesem Fall wird die erste existierende Zeit zurückgegeben.
- {{jsxref("Temporal/ZonedDateTime/subtract", "Temporal.ZonedDateTime.prototype.subtract()")}} {{experimental_inline}}
  - : Gibt ein neues `Temporal.ZonedDateTime`-Objekt zurück, das diese Datum-Uhrzeit rückwärts um eine gegebene Dauer verschoben darstellt (in einer Form, die von {{jsxref("Temporal/Duration/from", "Temporal.Duration.from()")}} konvertierbar ist).
- {{jsxref("Temporal/ZonedDateTime/toInstant", "Temporal.ZonedDateTime.prototype.toInstant()")}} {{experimental_inline}}
  - : Gibt ein neues {{jsxref("Temporal.Instant")}}-Objekt zurück, das den Moment dieser Datum-Uhrzeit darstellt.
- {{jsxref("Temporal/ZonedDateTime/toJSON", "Temporal.ZonedDateTime.prototype.toJSON()")}} {{experimental_inline}}
  - : Gibt einen String zurück, der diese Datum-Uhrzeit in demselben [RFC 9557-Format](#rfc_9557-format) wie der Aufruf von {{jsxref("Temporal/ZonedDateTime/toString", "toString()")}} darstellt. Soll implizit von {{jsxref("JSON.stringify()")}} aufgerufen werden.
- {{jsxref("Temporal/ZonedDateTime/toLocaleString", "Temporal.ZonedDateTime.prototype.toLocaleString()")}} {{experimental_inline}}
  - : Gibt einen String mit einer sprachsensitiven Darstellung dieser Datum-Uhrzeit zurück.
- {{jsxref("Temporal/ZonedDateTime/toPlainDate", "Temporal.ZonedDateTime.prototype.toPlainDate()")}} {{experimental_inline}}
  - : Gibt ein neues {{jsxref("Temporal.PlainDate")}}-Objekt zurück, das den Datumsteil dieser Datum-Uhrzeit darstellt.
- {{jsxref("Temporal/ZonedDateTime/toPlainDateTime", "Temporal.ZonedDateTime.prototype.toPlainDateTime()")}} {{experimental_inline}}
  - : Gibt ein neues {{jsxref("Temporal.PlainDateTime")}}-Objekt zurück, das den Datum- und Zeitteil dieser Datum-Uhrzeit darstellt. Nur die Zeitzoneninformationen werden entfernt.
- {{jsxref("Temporal/ZonedDateTime/toPlainTime", "Temporal.ZonedDateTime.prototype.toPlainTime()")}} {{experimental_inline}}
  - : Gibt ein neues {{jsxref("Temporal.PlainTime")}}-Objekt zurück, das den Zeitteil dieser Datum-Uhrzeit darstellt.
- {{jsxref("Temporal/ZonedDateTime/toString", "Temporal.ZonedDateTime.prototype.toString()")}} {{experimental_inline}}
  - : Gibt einen String zurück, der diese Datum-Uhrzeit im [RFC 9557-Format](#rfc_9557-format) darstellt.
- {{jsxref("Temporal/ZonedDateTime/until", "Temporal.ZonedDateTime.prototype.until()")}} {{experimental_inline}}
  - : Gibt ein neues {{jsxref("Temporal.Duration")}}-Objekt zurück, das die Dauer von dieser Datum-Uhrzeit zu einer anderen Datum-Uhrzeit (in einer Form, die von {{jsxref("Temporal/ZonedDateTime/from", "Temporal.ZonedDateTime.from()")}} konvertierbar ist) darstellt. Die Dauer ist positiv, wenn die andere Datum-Uhrzeit nach dieser Datum-Uhrzeit ist und negativ, wenn sie vorher ist.
- {{jsxref("Temporal/ZonedDateTime/valueOf", "Temporal.ZonedDateTime.prototype.valueOf()")}} {{experimental_inline}}
  - : Wirft einen {{jsxref("TypeError")}}, der verhindert, dass `Temporal.ZonedDateTime`-Instanzen [implizit in primitive Datenstrukturen umgewandelt](/de/docs/Web/JavaScript/Guide/Data_structures#primitive_coercion) werden, wenn sie in arithmetischen oder Vergleichsoperationen verwendet werden.
- {{jsxref("Temporal/ZonedDateTime/with", "Temporal.ZonedDateTime.prototype.with()")}} {{experimental_inline}}
  - : Gibt ein neues `Temporal.ZonedDateTime`-Objekt zurück, das diese Datum-Uhrzeit mit einigen Feldern ersetzt durch neue Werte darstellt.
- {{jsxref("Temporal/ZonedDateTime/withCalendar", "Temporal.ZonedDateTime.prototype.withCalendar()")}} {{experimental_inline}}
  - : Gibt ein neues `Temporal.ZonedDateTime`-Objekt zurück, das diese Datum-Uhrzeit im neuen Kalendersystem interpretiert darstellt.
- {{jsxref("Temporal/ZonedDateTime/withPlainTime", "Temporal.ZonedDateTime.prototype.withPlainTime()")}} {{experimental_inline}}
  - : Gibt ein neues `Temporal.ZonedDateTime`-Objekt zurück, das diese Datum-Uhrzeit mit dem Zeitteil vollständig durch die neue Zeit ersetzt darstellt (in einer Form, die von {{jsxref("Temporal/PlainTime/from", "Temporal.PlainTime.from()")}} konvertierbar ist).
- {{jsxref("Temporal/ZonedDateTime/withTimeZone", "Temporal.ZonedDateTime.prototype.withTimeZone()")}} {{experimental_inline}}
  - : Gibt ein neues `Temporal.ZonedDateTime`-Objekt zurück, das denselben Moment wie diese Datum-Uhrzeit, aber in der neuen Zeitzone darstellt.

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
