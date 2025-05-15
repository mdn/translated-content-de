---
title: Temporal.ZonedDateTime
slug: Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime
l10n:
  sourceCommit: 1b77d85af82183b835cf253e885dca26cba93eb5
---

{{JSRef}}{{SeeCompatTable}}

Das **`Temporal.ZonedDateTime`**-Objekt repräsentiert ein Datum und eine Uhrzeit mit einer Zeitzone. Es wird grundlegend als Kombination aus einem [Instant](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/Instant), einer Zeitzone und einem Kalendersystem dargestellt.

## Beschreibung

Ein `ZonedDateTime` fungiert als Brücke zwischen einer exakten Zeit und einer Wanduhr-Zeit: Es repräsentiert gleichzeitig einen Moment in der Geschichte (wie ein {{jsxref("Temporal.Instant")}}) und eine lokale, Wanduhr-Zeit (wie ein {{jsxref("Temporal.PlainDateTime")}}). Dies wird erreicht, indem der Moment, die Zeitzone und das Kalendersystem gespeichert werden. Die Zeitzone wird verwendet, um zwischen dem Moment und der lokalen Zeit zu konvertieren, und das Kalendersystem wird verwendet, um die lokale Zeit zu interpretieren.

`ZonedDateTime` ist die einzige `Temporal`-Klasse, die zeitzonenbewusst ist. Das Hinzufügen einer Zeitzone führt dazu, dass `ZonedDateTime`-Objekte wichtige Verhaltensunterschiede zu {{jsxref("Temporal.PlainDateTime")}}-Objekten aufweisen. Nämlich können Sie nicht mehr davon ausgehen, dass "die Zeit 1 Minute danach" jeden Tag gleich ist oder dass ein Tag 24 Stunden hat. Im schlimmsten Fall kann ein ganzer Tag im lokalen Kalender fehlen. Unten bieten wir einen kurzen Überblick über Zeitzonen und Offsets und wie sie sich auf die Konvertierung zwischen UTC-Zeit und lokaler Zeit auswirken.

### Zeitzonen und Offsets

Alle Zeiten in JavaScript haben einen goldenen Standard: die UTC-Zeit, die kontinuierlich und gleichmäßig zunimmt, während die physikalische Zeit fortschreitet. Im Gegensatz dazu sind Benutzer mehr an ihrer lokalen Zeit interessiert, die Zeit, die sie auf ihren Kalendern und Uhren ablesen. Der Prozess der Umrechnung zwischen UTC-Zeit und lokaler Zeit beinhaltet ein Zeitzonen-Offset, das wie folgt berechnet wird:

```plain
local time = UTC time + offset
```

Zum Beispiel, wenn die UTC-Zeit 1970-01-01T00:00:00 ist und das Offset ist "-05:00", dann ist die lokale Zeit:

```plain
1970-01-01T00:00:00 + -05:00 = 1969-12-31T19:00:00
```

Durch das Anhängen dieses Offsets an die lokale Zeit und das Ausdrücken dieser Zeit als "1969-12-31T19:00:00-05:00" kann es nun unmissverständlich als Moment in der Geschichte verstanden werden.

Um das Offset zu kennen, benötigen wir zwei Informationen: die _Zeitzone_ und den _Moment_. Die Zeitzone ist eine Region auf der Erde, in der zu allen Zeiten dasselbe Offset verwendet wird. Zwei Uhren in derselben Zeitzone zeigen immer gleichzeitig die gleiche Zeit an, aber das Offset ist nicht unbedingt konstant: Das bedeutet, dass die Zeit dieser Uhren sich abrupt ändern kann. Dies geschieht häufig während der Umstellungen zur Sommerzeit, bei denen sich das Offset um eine Stunde ändert, was zweimal pro Jahr passiert. Offsets können sich auch dauerhaft aufgrund politischer Änderungen ändern, z. B., wenn ein Land die Zeitzonen wechselt.

Die Zeitzonen sind in der [IANA-Zeitzonendatenbank](https://www.iana.org/time-zones) gespeichert. Jede IANA-Zeitzone hat:

- Einen _primären Zeitzonen-Identifikator_, der die Zeitzone eindeutig identifiziert. Er bezieht sich normalerweise auf einen geografischen Bereich, der von einer Stadt verankert ist (z. B. `Europe/Paris` oder `Africa/Kampala`), kann aber auch Zeitzonen mit einem einzigen Offset bezeichnen wie `UTC` (ein konsistentes `+00:00`-Offset) oder `Etc/GMT+5` (das aus historischen Gründen ein negatives Offset `-05:00` ist). Aus historischen Gründen ist der primäre Name der UTC-Zeitzone `UTC`, obwohl es in der IANA `Etc/UTC` ist.
- Eine _Zeitzonendefinition_ in Form einer Tabelle, die UTC-Datum/Zeit-Bereiche (einschließlich zukünftiger Bereiche) spezifischen Offsets zuordnet.
- Null oder mehr _nicht-primäre Zeitzonen-Identifikatoren_, die Aliase für den primären Zeitzonen-Identifikator sind. Diese sind in der Regel historische Namen, die nicht mehr verwendet werden, aber aus Kompatibilitätsgründen erhalten bleiben. Siehe unten für weitere Informationen.

Als Eingabe werden benannte Identifikatoren fallunempfindlich zugeordnet. Intern werden sie in ihrer bevorzugten Schreibweise gespeichert, und nicht-primäre Identifikatoren werden _nicht_ in ihren primären Identifikator umgewandelt.

> [!NOTE]
> Wenn Sie den Zeitzonennamen festlegen, wollen Sie ihn selten auf `"UTC"` setzen. `ZonedDateTime` ist dafür gedacht, Benutzern angezeigt zu werden, aber kein Mensch lebt in der "UTC"-Zeitzone. Wenn Sie die Zeitzone zum Zeitpunkt der Erstellung nicht kennen, aber die Wanduhr-Zeit wissen, verwenden Sie ein {{jsxref("Temporal.PlainDateTime")}}. Wenn Sie den genauen Moment kennen, verwenden Sie ein {{jsxref("Temporal.Instant")}}.

Wenn eine `Temporal`-API einen _Zeitzonen-Identifikator_ akzeptiert, akzeptiert sie zusätzlich zu primären und nicht-primären Zeitzonen-Identifikatoren auch einen _Offset-Zeitzonen-Identifikator_, der in derselben Form wie der Offset ist, außer dass Präzision im Unterminutenbereich nicht erlaubt ist. Zum Beispiel sind `+05:30`, `-08`, `+0600` alle gültigen Offset-Identifikatoren. Intern werden Offset-Identifikatoren in der Form `±HH:mm` gespeichert.

> [!NOTE]
> Vermeiden Sie die Verwendung von Offset-Identifikatoren, wenn es eine benannte Zeitzone gibt, die Sie stattdessen verwenden können. Selbst wenn eine Region immer nur einen einzigen Offset verwendet hat, ist es besser, den benannten Identifikator zu verwenden, um sich gegen zukünftige politische Änderungen des Offsets abzusichern.
>
> Wenn eine Region mehrere Offsets verwendet (oder verwendet hat), ist die Verwendung ihrer benannten Zeitzone noch wichtiger. Denn `Temporal.ZonedDateTime` kann Methoden wie `add` oder `with` verwenden, um neue Instanzen zu erstellen, die zu einem anderen Moment gehören. Wenn diese abgeleiteten Instanzen einem Moment entsprechen, der ein anderes Offset verwendet (zum Beispiel nach einer Zeitumstellung), werden Ihre Berechnungen eine falsche lokale Zeit haben. Die Verwendung einer benannten Zeitzone stellt sicher, dass lokale Daten und Zeiten immer für das richtige Offset zu diesem Moment angepasst werden.

Der Einfachheit halber können Sie beim Bereitstellen eines Zeitzonen-Identifikators zu `Temporal`-APIs wie `Temporal.ZonedDateTime.prototype.withTimeZone()` und der `timeZoneId`-Option von `Temporal.ZonedDateTime.from()` ihn in ein paar anderen Formen bereitstellen:

- Als eine andere `ZonedDateTime`-Instanz, deren `timeZoneId` verwendet wird.
- Als eine [RFC 9557-String](#rfc_9557_format) mit einer Zeitzonen-Annotation, deren Zeitzonen-Identifikator verwendet wird.
- Als eine ISO 8601 / RFC 3339-String, die ein Offset enthält, dessen Offset als Offset-Identifikator verwendet wird; oder, wenn `Z` verwendet wird, dann wird die Zeitzone `"UTC"` verwendet. Diese Verwendung wird im Allgemeinen nicht empfohlen, da, wie oben diskutiert, Offset-Identifikatoren nicht in der Lage sind, sicher andere `Temporal.ZonedDateTime`-Instanzen über eine Offset-Übergang wie bei Beginn oder Ende der Sommerzeit abzuleiten. Stattdessen sollten Sie in Erwägung ziehen, einfach `Temporal.Instant` zu verwenden oder die tatsächliche benannte Zeitzone des Benutzers abzurufen.

Die IANA-Zeitzonendatenbank ändert sich von Zeit zu Zeit, normalerweise um neue Zeitzonen als Reaktion auf politische Änderungen hinzuzufügen. In seltenen Fällen werden jedoch IANA-Zeitzonen-Identifikatoren umbenannt, um aktualisierte englische Übersetzungen eines Stadtnamens zu übernehmen oder veraltete Namenskonventionen zu aktualisieren. Zum Beispiel gab es hier einige bemerkenswerte Namensänderungen:

| Aktueller primärer IANA-Identifikator | Alter, jetzt nicht-primärer Identifikator |
| ------------------------------------- | ----------------------------------------- |
| `America/Argentina/Buenos_Aires`      | `America/Buenos_Aires`                    |
| `Asia/Kolkata`                        | `Asia/Calcutta`                           |
| `Asia/Ho_Chi_Minh`                    | `Asia/Saigon`                             |
| `Europe/Kyiv`                         | `Europe/Kiev`                             |

Historisch gesehen verursachten diese Umbenennungen Probleme für Programmierer, weil die Unicode [CLDR-Datenbank](https://github.com/unicode-org/cldr-json/blob/main/cldr-json/cldr-bcp47/bcp47/timezone.json) (eine von Browsern verwendete Bibliothek zur Bereitstellung von Zeitzonen-Identifikatoren und Daten) IANAs Umbenennung aus [Stabilitätsgründen](https://unicode.org/reports/tr35/#Time_Zone_Identifiers) nicht folgte. Infolgedessen berichteten einige Browser wie Chrome und Safari die veralteten Identifikatoren von CLDR, während andere Browser wie Firefox die Standardeinstellungen von CLDR überschrieben und die aktuellen primären Identifikatoren meldeten.

Mit der Einführung von Temporal wird dieses Verhalten nun standardisiert:

- [CLDR-Daten](https://github.com/unicode-org/cldr-json/blob/main/cldr-json/cldr-bcp47/bcp47/timezone.json) enthalten jetzt ein `"_iana"`-Attribut, das den aktuellsten Identifikator angibt, falls der ältere, stabile Identifikator umbenannt wurde. Browser können dieses neue Attribut verwenden, um Anrufern aktuelle Identifikatoren bereitzustellen.
- Zeitzonen-Identifikatoren, die vom Programmierer bereitgestellt werden, werden niemals durch ein Alias ersetzt. Wenn der Anrufer zum Beispiel `Asia/Calcutta` oder `Asia/Kolkata` als Identifikator-Eingabe zu {{jsxref("Temporal/ZonedDateTime/from", "Temporal.ZonedDateTime.from()")}} bereitstellt, wird derselbe Identifikator in der resultierenden Instanz in {{jsxref("Temporal/ZonedDateTime/timeZoneId", "timeZoneId")}} zurückgegeben. Beachten Sie, dass die Groß- und Kleinschreibung der Ausgaben so normalisiert wird, dass sie mit IANA übereinstimmen, sodass `ASIA/calCuTTa` als Eingabe eine {{jsxref("Temporal/ZonedDateTime/timeZoneId", "timeZoneId")}} von `Asia/Calcutta` als Ausgabe erzeugt.
- Wenn ein Zeitzonen-Identifikator nicht von einem Anrufer bereitgestellt, sondern stattdessen vom System selbst bezogen wird (zum Beispiel bei Verwendung von {{jsxref("Temporal/Now/timeZoneId", "Temporal.Now.timeZoneId()")}}), werden in allen Browsern moderne Identifikatoren zurückgegeben. Bei Stadt-Umbennungen gibt es eine zweijährige Verzögerung, bevor diese systembereitgestellten Identifikator-APIs den neuen Namen anzeigen, wodurch anderen Komponenten (wie einem Node-Server) Zeit gegeben wird, ihre Kopien der IANA-Datenbank zu aktualisieren, um den neuen Namen zu erkennen.

Beachten Sie, dass die Zuordnung der primären Identifikatoren den Ländercode beibehält: Zum Beispiel zeichnet die IANA-Datenbank `Atlantic/Reykjavik` als ein Alias für `Africa/Abidjan` auf, aber da sie unterschiedlichen Ländern entsprechen (Island und Côte d'Ivoire), werden sie als unterschiedliche primäre Identifikatoren behandelt.

Diese Standardisierung gilt auch außerhalb von `Temporal`. Zum Beispiel wird die `timeZone`-Option, die von {{jsxref("Intl/DateTimeFormat/resolvedOptions", "Intl.DateTimeFormat.prototype.resolvedOptions()")}} zurückgegeben wird, auch niemals durch ein Alias ersetzt, obwohl Browser traditionell diese Identifikatoren vor der Standardisierung durch Temporal kanonisiert haben. Andererseits geben {{jsxref("Intl/Locale/getTimeZones", "Intl.Locale.prototype.getTimeZones()")}} und {{jsxref("Intl.supportedValuesOf()")}} (`timeZone`-Option) den aktuellsten Identifikator zurück, während einige Browser früher den alten, nicht-primären Identifikator zurückgaben.

### RFC 9557 Format

`ZonedDateTime`-Objekte können im [RFC 9557](https://datatracker.ietf.org/doc/html/rfc9557)-Format, einer Erweiterung des [ISO 8601 / RFC 3339](https://datatracker.ietf.org/doc/html/rfc3339)-Formats, serialisiert und geparst werden. Der String hat die folgende Form (Leerzeichen dienen nur der Lesbarkeit und sollten im tatsächlichen String nicht vorhanden sein):

```plain
YYYY-MM-DD T HH:mm:ss.sssssssss Z/±HH:mm [time_zone_id] [u-ca=calendar_id]
```

- `YYYY`
  - : Entweder eine vierstellige Zahl oder eine sechsstellige Zahl mit einem `+` oder `-` Zeichen.
- `MM`
  - : Eine zweistellige Zahl von `01` bis `12`.
- `DD`
  - : Eine zweistellige Zahl von `01` bis `31`. Die `YYYY`, `MM` und `DD` Komponenten können durch `-` oder nichts getrennt werden.
- `T` {{optional_inline}}
  - : Der Datum-Uhrzeit-Trenner, der `T`, `t` oder ein Leerzeichen sein kann. Vorhanden, wenn und nur wenn `HH` vorhanden ist.
- `HH` {{optional_inline}}
  - : Eine zweistellige Zahl von `00` bis `23`. Standard ist `00`.
- `mm` {{optional_inline}}
  - : Eine zweistellige Zahl von `00` bis `59`. Standard ist `00`.
- `ss.sssssssss` {{optional_inline}}
  - : Eine zweistellige Zahl von `00` bis `59`. Kann optional von einem `.` oder `,` gefolgt sein und von einer bis neun Ziffern. Standard ist `00`. Die `HH`, `mm` und `ss` Komponenten können durch `:` oder nichts getrennt werden. Sie können entweder nur `ss` oder sowohl `ss` als auch `mm` weglassen, sodass die Zeit in einer von drei Formen sein kann: `HH`, `HH:mm` oder `HH:mm:ss.sssssssss`.
- `Z/±HH:mm` {{optional_inline}}
  - : Entweder der UTC-Bezeichner `Z` oder `z`, oder ein Offset von UTC in der Form `+` oder `-`, gefolgt vom gleichen Format wie die Zeitkomponente. Beachten Sie, dass Präzision im Unterminutenbereich (`:ss.sssssssss`) von anderen Systemen nicht unterstützt werden kann und akzeptiert, aber niemals ausgegeben wird. Wenn weggelassen, wird das Offset aus dem Zeitzonen-Identifikator abgeleitet. Wenn vorhanden, muss die Zeit ebenfalls bereitgestellt werden. `Z` ist nicht dasselbe wie `+00:00`: Ersteres bedeutet, dass die Zeit in UTC-Form angegeben wird, unabhängig vom Zeitzonen-Identifikator, während letzteres bedeutet, dass die Zeit in lokaler Zeit angegeben wird, die zufällig UTC+0 ist, und gegen den Zeitzonen-Identifikator mit der [`offset`-Option](#offset-mehrdeutigkeit) validiert wird.
- `[time_zone_id]`
  - : Ersetzen Sie `time_zone_id` durch den Zeitzonen-Identifikator (benannt oder Offset), wie oben beschrieben. Kann ein _kritisches Flag_ haben, indem dem Identifikator ein `!` vorangestellt wird: z. B. `[!America/New_York]`. Dieses Flag teilt anderen Systemen im Allgemeinen mit, dass es nicht ignoriert werden kann, wenn sie es nicht unterstützen. Beachten Sie, dass es für `Temporal.ZonedDateTime.from()` erforderlich ist: Das Weglassen führt zu einem `RangeError`. Wenn Sie ISO 8601 / RFC 3339-Strings ohne Zeitzonen-Identifikator-Annotationen parsen wollen, verwenden Sie {{jsxref("Temporal/Instant/from", "Temporal.Instant.from()")}} stattdessen.
- `[u-ca=calendar_id]` {{optional_inline}}
  - : Ersetzen Sie `calendar_id` durch den zu verwendenden Kalender. Siehe [`Intl.supportedValuesOf()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/supportedValuesOf#supported_calendar_types) für eine Liste der gängigen unterstützten Kalenderarten. Standardmäßig `[u-ca=iso8601]`. Kann ein _kritisches Flag_ haben, indem dem Schlüssel ein `!` vorangestellt wird: z. B. `[!u-ca=iso8601]`. Dieses Flag teilt anderen Systemen im Allgemeinen mit, dass es nicht ignoriert werden kann, wenn sie es nicht unterstützen. Der `Temporal`-Parser wird einen Fehler auslösen, wenn die Annotationen zwei oder mehr Kalender-Annotationen enthalten und eine davon kritisch ist. Beachten Sie, dass das `YYYY-MM-DD` immer als ISO 8601-Kalenderdatum interpretiert und dann in den angegebenen Kalender umgewandelt wird.

Als Eingabe werden andere Annotationen im `[key=value]`-Format ignoriert, und sie dürfen keine kritische Flagge haben.

Beim Serialisieren können Sie die Gradzahl der Bruchteile von Sekunden, ob das Offset/den Zeitzonen-Identifikator/Kalender-ID angezeigt werden soll, und ob eine kritische Flagge für die Annotationen hinzugefügt werden soll, konfigurieren.

### Mehrdeutigkeit und Lücken von lokaler Zeit zu UTC-Zeit

Bei einer gegebenen Zeitzone ist die Umrechnung von UTC zu lokaler Zeit einfach: Sie erhalten zuerst das Offset unter Verwendung des Zeitzonennamens und des Moments und addieren das Offset zum Moment hinzu. Umgekehrt ist es nicht so: Die Umrechnung von lokaler Zeit zu UTC-Zeit, ohne ein explizites Offset, ist mehrdeutig, da eine lokale Zeit null, einer oder mehreren UTC-Zeiten entsprechen kann. Betrachten Sie die häufigste Ursache: Übergänge zur Sommerzeit. Nehmen wir New York als Beispiel. Sein Standard-Offset ist UTC-5, aber während der Sommerzeit werden alle Uhren um eine Stunde vorgestellt, sodass das Offset UTC-4 wird. In den USA erfolgen die Übergänge um 2:00 Uhr Ortszeit, also betrachten wir diese beiden Übergangstage:

| UTC-Zeit             | New York Zeit             |
| -------------------- | ------------------------- |
| 2024-03-10T06:58:00Z | 2024-03-10T01:58:00-05:00 |
| 2024-03-10T06:59:00Z | 2024-03-10T01:59:00-05:00 |
| 2024-03-10T07:00:00Z | 2024-03-10T03:00:00-04:00 |
| ---                  | ---                       |
| 2024-11-03T05:58:00Z | 2024-11-03T01:58:00-04:00 |
| 2024-11-03T05:59:00Z | 2024-11-03T01:59:00-04:00 |
| 2024-11-03T06:00:00Z | 2024-11-03T01:00:00-05:00 |

Wie Sie sehen können, verschwand im März eine Stunde von der lokalen Zeit und im November haben wir zwei Stunden, die dieselbe Wanduhr-Zeit haben. Angenommen, wir haben ein `PlainDateTime` gespeichert, das "2024-03-10T02:05:00" sagt, und wir wollen es in der `America/New_York`-Zeitzone interpretieren, es wird keine Zeit geben, die es repräsentiert, während ein `PlainDateTime`, das "2024-11-03T01:05:00" sagt, zwei verschiedenen Momenten entsprechen kann.

Wenn ein `ZonedDateTime` aus einer lokalen Zeit erstellt wird (unter Verwendung von {{jsxref("Temporal/ZonedDateTime/from", "Temporal.ZonedDateTime.from()")}}, {{jsxref("Temporal/ZonedDateTime/with", "Temporal.ZonedDateTime.prototype.with()")}}, {{jsxref("Temporal/PlainDateTime/toZonedDateTime", "Temporal.PlainDateTime.prototype.toZonedDateTime()")}}), ist das Verhalten für Mehrdeutigkeit und Lücken über die Option `disambiguation` konfigurierbar:

- `earlier`
  - : Wenn es zwei mögliche Momente gibt, wählen Sie den früheren. Wenn es eine Lücke gibt, gehen Sie um die Dauer der Lücke zurück.
- `later`
  - : Wenn es zwei mögliche Momente gibt, wählen Sie den späteren. Wenn es eine Lücke gibt, gehen Sie um die Dauer der Lücke vorwärts.
- `compatible` (Standard)
  - : Gleiches Verhalten wie {{jsxref("Date")}}: Verwenden Sie `later` für Lücken und `earlier` für Mehrdeutigkeiten.
- `reject`
  - : Löst einen `RangeError` aus, wann immer es eine Mehrdeutigkeit oder eine Lücke gibt.

Es gibt mehrere Fälle, in denen keine Mehrdeutigkeit bei der Erstellung eines `ZonedDateTime` besteht:

- Wenn die Zeit in UTC über das `Z`-Offset angegeben wird.
- Wenn der Offset explizit angegeben und verwendet wird (siehe unten).

### Offset-Mehrdeutigkeit

Wir haben bereits demonstriert, wie Mehrdeutigkeit entstehen kann, wenn eine lokale Zeit in einer Zeitzone interpretiert wird, ohne dass ein explizites Offset bereitgestellt wird. Wenn Sie jedoch ein explizites Offset bereitstellen, entsteht ein weiterer Konflikt: zwischen dem angegebenen Offset und dem Offset, der aus der Zeitzone und der lokalen Zeit berechnet wird. Dies ist ein unvermeidbares Problem in der realen Welt: Wenn Sie eine Zeit in der Zukunft speichern, mit einem erwarteten Offset, dann kann, bevor diese Zeit kommt, die Zeitzonendefinition aufgrund politischer Gründe geändert worden sein. Zum Beispiel, nehmen wir an, wir haben 2018 eine Erinnerung an der Zeit `2019-12-23T12:00:00-02:00[America/Sao_Paulo]` gesetzt (was eine Sommerzeit ist; Brasilien befindet sich auf der südlichen Halbkugel, führt also im Oktober die Sommerzeit ein und beendet sie im Februar). Aber bevor diese Zeit kommt, beschließt Brasilien Anfang 2019, die Sommerzeit nicht mehr zu beachten, sodass das tatsächliche Offset `-03:00` wird. Sollte die Erinnerung jetzt noch um 12 Uhr (Halten der lokalen Zeit) oder um 11 Uhr (Halten der genauen Zeit) ausgelöst werden?

Wenn ein `ZonedDateTime` mit {{jsxref("Temporal/ZonedDateTime/from", "Temporal.ZonedDateTime.from()")}} erstellt oder mit der {{jsxref("Temporal/ZonedDateTime/with", "with()")}}-Methode aktualisiert wird, ist das Verhalten für Offset-Mehrdeutigkeit über die `offset`-Option konfigurierbar:

- `use`
  - : Verwenden Sie das Offset zur Berechnung der genauen Zeit. Diese Option "verwendet" das Offset bei der Bestimmung des Moments, der durch den String repräsentiert wird, und der denselben Moment darstellt, der ursprünglich beim Speichern der Zeit berechnet wurde, selbst wenn das Offset zu diesem Moment geändert wurde. Der Zeitzonen-Identifikator wird weiterhin verwendet, um dann das (möglicherweise aktualisierte) Offset abzuleiten und dieses Offset zu verwenden, um die genaue Zeit in lokale Zeit umzuwandeln.
- `ignore`
  - : Verwenden Sie den Zeitzonen-Identifikator, um das Offset zu re-berechnen, und ignorieren Sie das im String angegebene Offset. Diese Option hält dieselbe lokale Zeit, die ursprünglich berechnet wurde, als wir die Zeit speicherten, kann jedoch einem anderen Moment entsprechen. Beachten Sie, dass diese Option dieselbe lokale Zeit-Interpretations-Mehrdeutigkeit verursachen kann, wie oben demonstriert, die mit der Option `disambiguation` gelöst wird.
- `reject`
  - : Löst einen `RangeError` aus, wann immer es einen Konflikt zwischen dem Offset und dem Zeitzonen-Identifikator gibt. Dies ist der Standard für {{jsxref("Temporal/ZonedDateTime/from", "Temporal.ZonedDateTime.from()")}}.
- `prefer`
  - : Verwenden Sie das Offset, wenn es gültig ist, ansonsten berechnen Sie das Offset aus dem Zeitzonen-Identifikator. Dies ist der Standard für {{jsxref("Temporal/ZonedDateTime/with", "Temporal.ZonedDateTime.prototype.with()")}} (siehe die Methode für weitere Details). Dies ist anders als `ignore`, denn im Fall von lokaler Zeit-Mehrdeutigkeit wird das Offset verwendet, um sie zu lösen und nicht die Option `disambiguation`.

Beachten Sie, dass das `Z`-Offset nicht gleichbedeutend mit `+00:00` ist. Das `Z`-Offset bedeutet "die Zeit in UTC ist bekannt, aber das Offset zur lokalen Zeit ist unbekannt", gemäß [RFC 9557](https://www.rfc-editor.org/rfc/rfc9557.html#name-update-to-rfc-3339). Wenn die Zeitzeichenfolge das `Z`-Offset verwendet, wird die `offset`-Option ignoriert, und das Offset wird aus der Zeitzonen-ID abgeleitet. Andererseits wird das `+00:00`-Offset als ein lokales Zeit-Offset interpretiert, das zufällig mit UTC übereinstimmt und gegen die Zeitzonen-ID validiert wird.

> [!NOTE]
> Obwohl {{jsxref("Temporal/Instant/from", "Temporal.Instant.from()")}} auch einen [RFC 9557](#rfc_9557_format)-String in derselben Form annimmt, gibt es keine Mehrdeutigkeit, weil es immer den Zeitzonen-Identifikator ignoriert und nur das Offset liest.

## Konstruktor

- {{jsxref("Temporal/ZonedDateTime/ZonedDateTime", "Temporal.ZonedDateTime()")}} {{experimental_inline}}
  - : Erstellt ein neues `Temporal.ZonedDateTime`-Objekt, indem die zugrunde liegenden Daten direkt bereitgestellt werden.

## Statische Methoden

- {{jsxref("Temporal/ZonedDateTime/compare", "Temporal.ZonedDateTime.compare()")}} {{experimental_inline}}
  - : Gibt eine Zahl (-1, 0 oder 1) zurück, die anzeigt, ob die erste Datum-Uhrzeit vor, gleich oder nach der zweiten Datum-Uhrzeit liegt. Entspricht dem Vergleich der {{jsxref("Temporal/ZonedDateTime/epochNanoseconds", "epochNanoseconds")}} der beiden Datum-Uhrzeiten.
- {{jsxref("Temporal/ZonedDateTime/from", "Temporal.ZonedDateTime.from()")}} {{experimental_inline}}
  - : Erstellt ein neues `Temporal.ZonedDateTime`-Objekt aus einem anderen `Temporal.ZonedDateTime`-Objekt, einem Objekt mit Datum-, Zeit- und Zeitzoneneigenschaften oder einem [RFC 9557](#rfc_9557_format)-String.

## Instanzeigenschaften

Diese Eigenschaften sind auf `Temporal.ZonedDateTime.prototype` definiert und werden von allen `Temporal.ZonedDateTime`-Instanzen gemeinsam genutzt.

- {{jsxref("Temporal/Zoned
