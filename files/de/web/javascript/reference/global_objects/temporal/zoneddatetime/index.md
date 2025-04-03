---
title: Temporal.ZonedDateTime
slug: Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{JSRef}}{{SeeCompatTable}}

Das **`Temporal.ZonedDateTime`** Objekt repräsentiert ein Datum und eine Uhrzeit mit einer Zeitzone. Es wird grundlegend als eine Kombination aus einem [Instant](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/Instant), einer Zeitzone und einem Kalendersystem dargestellt.

## Beschreibung

Ein `ZonedDateTime` fungiert als Brücke zwischen einer exakten Zeit und einer Wandzeituhrzeit: Es repräsentiert gleichzeitig einen Moment in der Geschichte (wie ein {{jsxref("Temporal.Instant")}}) und eine lokale Wandzeituhrzeit (wie ein {{jsxref("Temporal.PlainDateTime")}}). Dies wird erreicht, indem es den Moment, die Zeitzone und das Kalendersystem speichert. Die Zeitzone wird verwendet, um zwischen dem Moment und der lokalen Zeit zu konvertieren, und das Kalendersystem wird verwendet, um die lokale Zeit zu interpretieren.

`ZonedDateTime` ist die einzige `Temporal`-Klasse, die zeitzonenbewusst ist. Die Hinzufügung einer Zeitzone führt dazu, dass `ZonedDateTime` Objekte signifikante Verhaltensunterschiede zu {{jsxref("Temporal.PlainDateTime")}} Objekten aufweisen. Insbesondere können Sie nicht mehr davon ausgehen, dass "die Zeit 1 Minute später" an jedem Tag gleich ist oder dass ein Tag 24 Stunden hat. Im schlimmsten Fall kann ein ganzer Tag im lokalen Kalender fehlen. Nachfolgend bieten wir eine kurze Übersicht über Zeitzonen und Offsets und wie sie die Umwandlung zwischen UTC-Zeit und lokaler Zeit beeinflussen.

### Zeitzonen und Offsets

Alle Zeiten in JavaScript haben einen goldenen Standard: die UTC-Zeit, die kontinuierlich und gleichmäßig mit dem Fortschreiten der physischen Zeit zunimmt. Demgegenüber sind Benutzer stärker an ihrer lokalen Zeit interessiert, das ist die Zeit, die sie auf ihren Kalendern und Uhren ablesen. Der Prozess der Umwandlung zwischen UTC-Zeit und lokaler Zeit beinhaltet ein _Zeitzonen-Offset_, welches wie folgt berechnet wird:

```plain
local time = UTC time + offset
```

Zum Beispiel, wenn die UTC-Zeit 1970-01-01T00:00:00 beträgt und das Offset "-05:00" ist, dann ist die lokale Zeit:

```plain
1970-01-01T00:00:00 + -05:00 = 1969-12-31T19:00:00
```

Indem wir diese lokale Zeit mit dem Offset suffixieren und diese Zeit somit als "1969-12-31T19:00:00-05:00" ausdrücken, kann sie nun unmissverständlich als ein Moment in der Geschichte verstanden werden.

Um das Offset zu kennen, benötigen wir zwei Informationen: die _Zeitzone_ und den _Moment_. Die Zeitzone ist ein Bereich auf der Erde, in dem immer das gleiche Offset verwendet wird. Zwei Uhren in derselben Zeitzone zeigen immer gleichzeitig die gleiche Zeit an, aber das Offset ist nicht unbedingt konstant: das heißt, diese Zeiten können sich abrupt ändern. Dies kommt häufig bei Sommerzeitumstellungen vor, bei denen sich das Offset um eine Stunde ändert, was zweimal jährlich geschieht. Offsets können sich auch dauerhaft aufgrund politischer Veränderungen ändern, z. B. bei einem Wechsel einer Zeitzone durch ein Land.

Die Zeitzonen sind in der [IANA Time Zone Database](https://www.iana.org/time-zones) gespeichert. Jede IANA-Zeitzone hat:

- Einen _primären Zeitzonen-Identifikator_, der die Zeitzone eindeutig identifiziert. Er verweist in der Regel auf ein geografisches Gebiet, das durch eine Stadt verankert ist (z. B. `Europe/Paris` oder `Africa/Kampala`), kann aber auch Einzeloffset-Zeitzonen wie `UTC` (ein konsistentes `+00:00` Offset) oder `Etc/GMT+5` (das aus historischen Gründen ein negatives Offset `-05:00` ist) bezeichnen. Aus historischen Gründen ist der primäre Name der UTC-Zeitzone `UTC`, obwohl er in IANA `Etc/UTC` ist.
- Eine _Zeitzonendefinition_ in Form einer Tabelle, die UTC-Daten-/Zeitbereiche (einschließlich zukünftiger Bereiche) bestimmten Offsets zuordnet.
- Null oder mehr _nicht-primäre Zeitzonen-Identifikatoren_, die Aliase des primären Zeitzonen-Identifikators sind. Diese sind in der Regel historische Namen, die nicht mehr verwendet werden, aber aus Kompatibilitätsgründen beibehalten werden. Weitere Informationen dazu siehe unten.

Als Eingabe werden benannte Identifikatoren nicht abhängig von der Groß-/Kleinschreibung abgeglichen. Intern werden sie in ihrer bevorzugten Schreibweise gespeichert, und nicht-primäre Identifikatoren werden _nicht_ in ihren primären Identifikator umgewandelt.

> [!NOTE]
> Wenn Sie den Namen der Zeitzone setzen, sollten Sie ihn selten auf `"UTC"` setzen. `ZonedDateTime` ist dazu gedacht, Benutzern angezeigt zu werden, aber kein Mensch lebt in der "UTC"-Zeitzone. Wenn Sie die Zeitzone zur Konstruktion nicht kennen, aber die Wandzeituhrzeit wissen, verwenden Sie einen {{jsxref("Temporal.PlainDateTime")}}. Wenn Sie den genauen Moment kennen, verwenden Sie einen {{jsxref("Temporal.Instant")}}.

Wenn eine `Temporal`-API einen _Zeitzonen-Identifikator_ akzeptiert, akzeptiert sie neben primären Zeitzonen-Identifikatoren und nicht-primären Zeitzonen-Identifikatoren auch einen _Offset-Zeitzonen-Identifikator_, der die gleiche Form wie das Offset hat, außer dass eine subminütige Genauigkeit nicht erlaubt ist. Beispielsweise sind `+05:30`, `-08`, `+0600` alle gültige Offset-Identifikatoren. Intern werden Offset-Identifikatoren in der `±HH:mm` Form gespeichert.

> [!NOTE]
> Vermeiden Sie die Verwendung von Offset-Identifikatoren, wenn Sie stattdessen eine benannte Zeitzone verwenden können. Selbst wenn eine Region immer ein einziges Offset verwendet hat, ist es besser, den benannten Identifikator zu verwenden, um sich gegen zukünftige politische Änderungen des Offsets abzusichern.
>
> Wenn eine Region mehrere Offsets verwendet (oder verwendet hat), dann ist die Verwendung ihrer benannten Zeitzone noch wichtiger. Dies liegt daran, dass `Temporal.ZonedDateTime` Methoden wie `add` oder `with` verwenden kann, um neue Instanzen zu einem anderen Moment zu erstellen. Wenn diese abgeleiteten Instanzen einem Moment entsprechen, der ein anderes Offset verwendet (zum Beispiel nach einem Sommerzeitübergang), dann führen Ihre Berechnungen zu einer falschen lokalen Zeit. Die Verwendung einer benannten Zeitzone stellt sicher, dass lokale Daten und Zeiten immer für das richtige Offset für diesen Moment angepasst werden.

Zur Bequemlichkeit können Sie bei der Angabe eines Zeitzonen-Identifikators an `Temporal`-APIs wie `Temporal.ZonedDateTime.prototype.withTimeZone()` und der `timeZoneId`-Option von `Temporal.ZonedDateTime.from()` diesen in einigen anderen Formen angeben:

- Als eine andere `ZonedDateTime`-Instanz, deren `timeZoneId` verwendet wird.
- Als eine [RFC 9557-Zeichenkette](#rfc_9557_formatierung) mit einer Zeitzonenannotation, deren Zeitzonen-Identifikator verwendet wird.
- Als eine ISO 8601 / RFC 3339-Zeichenkette, die ein Offset enthält, dessen Offset als Offset-Identifikator verwendet wird; oder, wenn `Z` verwendet wird, dann wird die `"UTC"`-Zeitzone verwendet. Diese Verwendung wird im Allgemeinen nicht empfohlen, da Offset-Identifikatoren, wie oben diskutiert, nicht die Fähigkeit haben, andere `Temporal.ZonedDateTime`-Instanzen sicher über einen Offset-Übergang hinweg abzuleiten, wie wenn die Sommerzeit beginnt oder endet. Stattdessen sollten Sie einfach `Temporal.Instant` verwenden oder die tatsächliche benannte Zeitzone des Benutzers abrufen.

Die IANA-Zeitzonendatenbank ändert sich von Zeit zu Zeit, meist um neue Zeitzonen aufgrund politischer Änderungen hinzuzufügen. In seltenen Fällen werden jedoch IANA-Zeitzonen-Identifikatoren umbenannt, um die aktualisierte englische Übersetzung eines Stadtnamens anzupassen oder veraltete Benennungskonventionen zu aktualisieren. Nachfolgend einige bemerkenswerte Namensänderungen:

| Aktueller IANA-Haupt-Identifikator | Alter, jetzt nicht-primärer Identifikator |
| ---------------------------------- | ----------------------------------------- |
| `America/Argentina/Buenos_Aires`   | `America/Buenos_Aires`                    |
| `Asia/Kolkata`                     | `Asia/Calcutta`                           |
| `Asia/Ho_Chi_Minh`                 | `Asia/Saigon`                             |
| `Europe/Kyiv`                      | `Europe/Kiev`                             |

Historisch gesehen verursachten diese Umbenennungen Probleme für Programmierer, da die Unicode [CLDR-Datenbank](https://github.com/unicode-org/cldr-json/blob/main/cldr-json/cldr-bcp47/bcp47/timezone.json) (eine von Browsern genutzte Bibliothek zur Bereitstellung von Zeitzonen-Identifikatoren und -Daten) aus Stabilitätsgründen IANAs Umbenennungen nicht folgte. Infolgedessen meldeten einige Browser wie Chrome und Safari die veralteten Bezeichner der CLDR, während andere Browser wie Firefox die Standardwerte der CLDR überschrieben und die aktuellsten primären Bezeichner meldeten.

Mit der Einführung von Temporal ist dieses Verhalten nun standardisierter:

- [CLDR-Daten](https://github.com/unicode-org/cldr-json/blob/main/cldr-json/cldr-bcp47/bcp47/timezone.json) enthalten nun ein `"_iana"` Attribut, das den aktuellsten Bezeichner anzeigt, falls der ältere, stabile Bezeichner umbenannt wurde. Browser können dieses neue Attribut verwenden, um Anrufern aktuelle Bezeichner bereitzustellen.
- Zeitzonen-Identifikatoren, die vom Programmierer bereitgestellt werden, werden niemals mit einem Alias ausgetauscht. Zum Beispiel, wenn der Anrufer `Asia/Calcutta` oder `Asia/Kolkata` als Identifikatoreingabe für {{jsxref("Temporal/ZonedDateTime/from", "Temporal.ZonedDateTime.from()")}} bereitstellt, dann wird derselbe Bezeichner in der resultierenden Instanz's {{jsxref("Temporal.ZonedDateTime/timeZoneId", "timeZoneId")}} zurückgegeben. Beachten Sie, dass die Groß-/Kleinschreibung der Ausgaben an IANA angepasst wird, so dass `ASIA/calCuTTa` als Eingabe eine {{jsxref("Temporal.ZonedDateTime/timeZoneId", "timeZoneId")}} von `Asia/Calcutta` als Ausgangsresultat erzeugt.
- Wenn ein Zeitzonen-Identifikator nicht von einem Anrufer bereitgestellt, sondern stattdessen vom System selbst bezogen wird (z. B. bei Verwendung von {{jsxref("Temporal/Now/timeZoneId", "Temporal.Now.timeZoneId()")}}), werden in allen Browsern moderne Bezeichner zurückgegeben. Bei Stadtnamensänderungen gibt es eine Verzögerung von zwei Jahren, bevor diese systemseitig bereitgestellten Identifikator-APIs den neuen Namen freigeben, wodurch anderen Komponenten (wie einem Node-Server) Zeit gegeben wird, ihre Kopien der IANA-Datenbank für die Erkennung des neuen Namens zu aktualisieren.

Beachten Sie, dass die Attribution primärer Bezeichner den Ländercode beibehält: Zum Beispiel zeichnet die IANA-Datenbank `Atlantic/Reykjavik` als Alias für `Africa/Abidjan` auf, aber da sie verschiedenen Ländern (Island beziehungsweise Côte d'Ivoire) entsprechen, werden sie als unterschiedliche primäre Bezeichner behandelt.

Diese Standardisierung gilt auch außerhalb von `Temporal`. Zum Beispiel wird die `timeZone`-Option, die von {{jsxref("Intl/DateTimeFormat/resolvedOptions", "Intl.DateTimeFormat.prototype.resolvedOptions()")}} zurückgegeben wird, auch niemals mit einem Alias ersetzt, obwohl Browser diese Bezeichner traditionell vor der Standardisierung durch Temporal kanonisiert haben. Andererseits geben {{jsxref("Intl/Locale/getTimeZones", "Intl.Locale.prototype.getTimeZones()")}} und {{jsxref("Intl.supportedValuesOf()")}} (`timeZone` Option) den aktuellsten Bezeichner zurück, während einige Browser früher den alten, nicht-primären Bezeichner zurückgaben.

### RFC 9557 Formatierung

`ZonedDateTime` Objekte können unter Verwendung des [RFC 9557](https://datatracker.ietf.org/doc/html/rfc9557) Formats, einer Erweiterung des [ISO 8601 / RFC 3339](https://datatracker.ietf.org/doc/html/rfc3339) Formats, serialisiert und geparst werden. Die Zeichenkette hat folgendes Format (Leerzeichen sind nur zur besseren Lesbarkeit und sollten in der eigentlichen Zeichenkette nicht vorhanden sein):

```plain
YYYY-MM-DD T HH:mm:ss.sssssssss Z/±HH:mm [time_zone_id] [u-ca=calendar_id]
```

- `YYYY`
  - : Entweder eine vierstellige Zahl oder eine sechsstellige Zahl mit einem `+` oder `-` Zeichen.
- `MM`
  - : Eine zweistellige Zahl von `01` bis `12`.
- `DD`
  - : Eine zweistellige Zahl von `01` bis `31`. Die `YYYY`, `MM`, und `DD` Komponenten können mit `-` oder ohne Zeichen getrennt werden.
- `T` {{optional_inline}}
  - : Der Datum-Uhrzeit-Trenner, welcher `T`, `t`, oder ein Leerzeichen sein kann. Nur vorhanden, wenn `HH` vorhanden ist.
- `HH` {{optional_inline}}
  - : Eine zweistellige Zahl von `00` bis `23`. Standardmäßig `00`.
- `mm` {{optional_inline}}
  - : Eine zweistellige Zahl von `00` bis `59`. Standardmäßig `00`.
- `ss.sssssssss` {{optional_inline}}
  - : Eine zweistellige Zahl von `00` bis `59`. Kann optional von einem `.` oder `,` und eins bis neun Ziffern gefolgt werden. Standardmäßig `00`. Die `HH`, `mm`, und `ss` Komponenten können durch `:` oder ohne Trennzeichen getrennt werden. Sie können entweder nur `ss` oder sowohl `ss` als auch `mm` auslassen, sodass die Zeit in einer von drei Formen vorliegen kann: `HH`, `HH:mm`, oder `HH:mm:ss.sssssssss`.
- `Z/±HH:mm` {{optional_inline}}
  - : Entweder der UTC Bezeichner `Z` oder `z`, oder ein Offset von UTC in der Form `+` oder `-` gefolgt vom gleichen Format wie die Zeitkomponente. Beachten Sie, dass subminütige Präzision (`:ss.sssssssss`) von anderen Systemen möglicherweise nicht unterstützt wird und akzeptiert wird, aber niemals ausgegeben wird. Wenn ausgelassen, wird das Offset aus dem Zeitzonen-Identifikator abgeleitet. Wenn vorhanden, muss auch die Zeit angegeben werden. `Z` ist nicht dasselbe wie `+00:00`: Ersteres bedeutet, dass die Zeit in UTC-Form unabhängig vom Zeitzonen-Identifikator angegeben wird, während Letzteres bedeutet, dass die Zeit in lokaler Zeit angegeben wird, die zufällig UTC+0 ist und gegen den Zeitzonen-Identifikator mithilfe der [`offset` Option](#offset-mehrdeutigkeit) validiert wird.
- `[time_zone_id]`
  - : Ersetzen Sie `time_zone_id` durch den Zeitzonen-Identifikator (benannt oder Offset) wie oben beschrieben. Kann ein _kritisches Flag_ durch Voranstellen des Identifikators mit `!` haben: z. B. `[!America/New_York]`. Dieses Flag teilt anderen Systemen allgemein mit, dass es nicht ignoriert werden kann, wenn sie es nicht unterstützen. Beachten Sie, dass es für `Temporal.ZonedDateTime.from()` erforderlich ist: das Auslassen führt zu einem `RangeError`. Wenn Sie ISO 8601 / RFC 3339-Zeichenkette ohne Zeitzonen-Identifikator-Annotationen parsen möchten, verwenden Sie {{jsxref("Temporal.Instant/from", "Temporal.Instant.from()")}} stattdessen.
- `[u-ca=calendar_id]` {{optional_inline}}
  - : Ersetzen Sie `calendar_id` durch den zu verwendenden Kalender. Kann ein _kritisches Flag_ durch Voranstellen des Schlüssels mit `!` haben: z. B. `[!u-ca=iso8601]`. Dieses Flag teilt anderen Systemen allgemein mit, dass es nicht ignoriert werden kann, wenn sie es nicht unterstützen. Der `Temporal`-Parser wird einen Fehler auslösen, wenn die Annotationen zwei oder mehr Kalender-Anmerkungen enthalten und eine davon kritisch ist. Standardmäßig `[u-ca=iso8601]`. Beachten Sie, dass `YYYY-MM-DD` immer als ein ISO 8601-Kalenderdatum interpretiert und dann zum angegebenen Kalender konvertiert wird.

Als Eingabe werden andere Annotationen im `[key=value]` Format ignoriert, und sie dürfen das kritische Flag nicht haben.

Beim Serialisieren können Sie die Bruchteile der Sekunden, ob das Offset/Zeitzonen-ID/Kalender-ID angezeigt werden und ob ein kritisches Flag für die Annotationen hinzugefügt wird, konfigurieren.

### Mehrdeutigkeit und Lücken von lokaler Zeit zu UTC-Zeit

Angenommen eine Zeitzone, ist die Umwandlung von UTC zu lokaler Zeit einfach: Sie erhalten zuerst das Offset unter Verwendung des Zeitzonennamens und des Moments, addieren dann das Offset zum Moment. Umgekehrt ist dies nicht wahr: Die Umwandlung von lokaler Zeit zu UTC-Zeit ohne explizites Offset ist mehrdeutig, da eine lokale Zeit null, einer oder vielen UTC-Zeitpunkten entsprechen kann. Betrachten Sie die häufigste Ursache: Zeitumstellungen. Nehmen Sie New York als Beispiel. Sein Standard-Offset ist UTC-5, aber während der Sommerzeit werden alle Uhren um eine Stunde vorgestellt, sodass das Offset zu UTC-4 wird. In den USA erfolgen die Umstellungen um 2:00 Uhr Ortszeit, betrachten Sie also diese beiden Umstellungsdaten:

| UTC-Zeit             | New Yorker Zeit           |
| -------------------- | ------------------------- |
| 2024-03-10T06:58:00Z | 2024-03-10T01:58:00-05:00 |
| 2024-03-10T06:59:00Z | 2024-03-10T01:59:00-05:00 |
| 2024-03-10T07:00:00Z | 2024-03-10T03:00:00-04:00 |
| ---                  | ---                       |
| 2024-11-03T05:58:00Z | 2024-11-03T01:58:00-04:00 |
| 2024-11-03T05:59:00Z | 2024-11-03T01:59:00-04:00 |
| 2024-11-03T06:00:00Z | 2024-11-03T01:00:00-05:00 |

Wie Sie sehen können, verschwand im März eine Stunde aus der lokalen Zeit, und im November haben wir zwei Stunden, die die gleiche Wandzeituhrzeit haben. Angenommen, wir speicherten ein `PlainDateTime`, das "2024-03-10T02:05:00" angibt, und wir wollen es in der `America/New_York` Zeitzone interpretieren, wird es keine Zeit geben, die ihm entspricht, während ein `PlainDateTime`, das "2024-11-03T01:05:00" angibt, zwei verschiedenen Momenten entsprechen kann.

Wenn ein `ZonedDateTime` von einer lokalen Zeit konstruiert wird (unter Verwendung von {{jsxref("Temporal/ZonedDateTime/from", "Temporal.ZonedDateTime.from()")}}, {{jsxref("Temporal/ZonedDateTime/with", "Temporal.ZonedDateTime.prototype.with()")}}, {{jsxref("Temporal/PlainDateTime/toZonedDateTime", "Temporal.PlainDateTime.prototype.toZonedDateTime()")}}), ist das Verhalten für Mehrdeutigkeit und Lücken über die `disambiguation`-Option konfigurierbar:

- `earlier`
  - : Wenn es zwei mögliche Momente gibt, wählen Sie den früheren. Wenn es eine Lücke gibt, gehen Sie um die Dauer der Lücke zurück.
- `later`
  - : Wenn es zwei mögliche Momente gibt, wählen Sie den späteren. Wenn es eine Lücke gibt, gehen Sie um die Dauer der Lücke vorwärts.
- `compatible` (Standard)
  - : Gleiches Verhalten wie {{jsxref("Date")}}: Verwenden Sie `later` für Lücken und `earlier` für Mehrdeutigkeiten.
- `reject`
  - : Lösen Sie einen `RangeError` aus, wann immer es eine Mehrdeutigkeit oder eine Lücke gibt.

Es gibt mehrere Fälle, in denen keine Mehrdeutigkeit bei der Konstruktion eines `ZonedDateTime` vorliegt:

- Wenn die Zeit durch das `Z` Offset in UTC angegeben ist.
- Wenn das Offset explizit bereitgestellt und verwendet wird (siehe unten).

### Offset-Mehrdeutigkeit

Wir haben bereits demonstriert, wie Mehrdeutigkeit entstehen kann, wenn eine lokale Zeit in einer Zeitzone interpretiert wird, ohne ein explizites Offset bereitzustellen. Wenn Sie jedoch ein explizites Offset bereitstellen, entsteht ein weiterer Konflikt: zwischen dem angegebenen Offset und dem aus der Zeitzone und der lokalen Zeit berechneten Offset. Dies ist ein unvermeidbares realweltliches Problem: Wenn Sie eine Zeit in der Zukunft speichern, mit einem erwarteten Offset, dann kann die Zeitzonendefinition vor diesem Zeitpunkt aufgrund politischer Gründe geändert werden. Zum Beispiel, angenommen, wir setzen 2018 eine Erinnerung auf die Zeit `2019-12-23T12:00:00-02:00[America/Sao_Paulo]` (was eine Sommerzeit ist; Brasilien befindet sich auf der südlichen Hemisphäre, so dass es im Oktober die Sommerzeit beginnt und im Februar endet). Aber bevor diese Zeit eintritt, beschließt Brasilien Anfang 2019, die Sommerzeit nicht mehr zu beachten, sodass das tatsächliche Offset `-03:00` wird. Sollte die Erinnerung nun immer noch um Mittag (nach der lokalen Zeit) ausgelöst werden, oder sollte sie um 11:00 Uhr (nach der exakten Zeit) ausgelöst werden?

Wenn ein `ZonedDateTime` mit {{jsxref("Temporal/ZonedDateTime/from", "Temporal.ZonedDateTime.from()")}} konstruiert oder mit der {{jsxref("Temporal/ZonedDateTime/with", "with()")}} Methode aktualisiert wird, ist das Verhalten für Offset-Mehrdeutigkeit über die `offset`-Option konfigurierbar:

- `use`
  - : Verwenden Sie das Offset, um die exakte Zeit zu berechnen. Diese Option "verwendet" das Offset, um den durch die Zeichenkette repräsentierten Moment zu bestimmen, der derselbe Moment ist, der ursprünglich berechnet wurde, als wir die Zeit speicherten, selbst wenn das Offset bei diesem Moment geändert wurde. Der Zeitzonen-Identifikator wird weiterhin verwendet, um das (möglicherweise aktualisierte) Offset zu ermitteln und dieses Offset zu verwenden, um die exakte Zeit in lokale Zeit umzuwandeln.
- `ignore`
  - : Verwenden Sie den Zeitzonen-Identifikator, um das Offset neu zu berechnen, ignorieren Sie das in der Zeichenkette angegebene Offset. Diese Option behält die gleiche lokale Zeit bei, die ursprünglich berechnet wurde, als wir die Zeit speicherten, kann aber einem anderen Moment entsprechen. Beachten Sie, dass diese Option die gleiche lokale Zeitinteroperations-Mehrdeutigkeit verursachen kann, wie oben gezeigt, die mit der `disambiguation`-Option gelöst wird.
- `reject`
  - : Lösen Sie einen `RangeError` aus, wann immer es einen Konflikt zwischen dem Offset und dem Zeitzonen-Identifikator gibt. Dies ist die Standardeinstellung für {{jsxref("Temporal/ZonedDateTime/from", "Temporal.ZonedDateTime.from()")}}.
- `prefer`
  - : Verwenden Sie das Offset, wenn es gültig ist, andernfalls berechnen Sie das Offset aus dem Zeitzonen-Identifikator. Dies ist die Standardeinstellung für {{jsxref("Temporal/ZonedDateTime/with", "Temporal.ZonedDateTime.prototype.with()")}} (siehe die Methode für weitere Details). Dies unterscheidet sich von `ignore`, da im Falle einer lokalen Zeitinteroperations-Mehrdeutigkeit das Offset zur Lösung herangezogen wird und nicht die `disambiguation`-Option.

Beachten Sie, dass das `Z` Offset nicht dasselbe ist wie `+00:00`. Das `Z` Offset bedeutet "die Zeit in UTC ist bekannt, aber das Offset zur lokalen Zeit ist nicht bekannt", gemäß [RFC 9557](https://www.rfc-editor.org/rfc/rfc9557.html#name-update-to-rfc-3339). Wenn die Zeitzeichenkette das `Z` Offset verwendet, wird die `offset`-Option ignoriert und das Offset wird aus der Zeitzonen-ID abgeleitet. Auf der anderen Seite wird das `+00:00` Offset als ein lokales Zeitoffset interpretiert, das zufällig mit UTC übereinstimmt und gegen die Zeitzonen-ID validiert wird.

> [!NOTE]
> Obwohl {{jsxref("Temporal/Instant/from", "Temporal.Instant.from()")}} ebenfalls eine [RFC 9557](#rfc_9557_formatierung) Zeichenkette in derselben Form annimmt, gibt es keine Mehrdeutigkeit, da es immer den Zeitzonen-Identifikator ignoriert und nur das Offset liest.

## Konstruktor

- {{jsxref("Temporal/ZonedDateTime/ZonedDateTime", "Temporal.ZonedDateTime()")}} {{experimental_inline}}
  - : Erstellt ein neues `Temporal.ZonedDateTime` Objekt, indem die zugrunde liegenden Daten direkt bereitgestellt werden.

## Statische Methoden

- {{jsxref("Temporal/ZonedDateTime/compare", "Temporal.ZonedDateTime.compare()")}} {{experimental_inline}}
  - : Gibt eine Zahl (-1, 0 oder 1) zurück, die angibt, ob die erste Datum-Uhrzeit vor, gleich oder nach der zweiten Datum-Uhrzeit liegt. Entspricht dem Vergleich der {{jsxref("Temporal.ZonedDateTime/epochNanoseconds", "epochNanoseconds")}} der beiden Datum-Uhrzeiten.
- {{jsxref("Temporal/ZonedDateTime/from", "Temporal.ZonedDateTime.from()")}} {{experimental_inline}}
  - : Erstellt ein neues `Temporal.ZonedDateTime` Objekt aus einem anderen `Temporal.ZonedDateTime` Objekt, einem Objekt mit Datum-, Uhrzeit- und Zeitzoneneigenschaften oder einem [RFC 9557](#rfc_9557_formatierung)-Zeichenkette.

## Instanz-Eigenschaften

Diese Eigenschaften sind auf `Temporal.ZonedDateTime.prototype` definiert und werden von allen `Temporal.ZonedDateTime` Instanzen geteilt.

- {{jsxref("Temporal/ZonedDateTime/calendarId", "Temporal.ZonedDateTime.prototype.calendarId")}} {{experimental_inline}}
  - : Gibt eine Zeichenkette zurück, die den [Kalender](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars) repräsentiert, der verwendet wird, um das interne ISO 8601-Datum zu interpretieren.
- {{jsxref("Object/constructor", "Temporal.ZonedDateTime.prototype.constructor")}}
  - : Die Konstruktionsfunktion, die das Instanzobjekt erstellt hat. Für `Temporal.ZonedDateTime` Instanzen ist der anfängliche Wert der {{jsxref("Temporal/ZonedDateTime/ZonedDateTime", "Temporal.ZonedDateTime()")}} Konstruktor.
- {{jsxref("Temporal/ZonedDateTime/day", "Temporal.ZonedDateTime.prototype.day")}} {{experimental_inline}}
  - : Gibt einen positiven Ganzwert zurück, der den 1-basierten Tag des Monats dieser Datumsangabe darstellt, der dieselbe Tageszahl ist, die Sie auf einem Kalender sehen würden. [Kalender](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars)-abhängig. In der Regel beginnt diese bei 1 und ist kontinuierlich, aber nicht immer.
- {{jsxref("Temporal/ZonedDateTime/dayOfWeek", "Temporal.ZonedDateTime.prototype.dayOfWeek")}} {{experimental_inline}}
  - : Gibt einen positiven Ganzwert zurück, der den 1-basierten Tag der Woche dieser Datumsangabe darstellt. Die Tage in einer Woche werden von `1` bis {{jsxref("Temporal/ZonedDateTime/daysInWeek", "daysInWeek")}} nummeriert, wobei jede Zahl ihrem Namen entspricht. [Kalender](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars)-abhängig. 1 steht meistens für Montag im Kalender, selbst wenn Lokalisierungen, die den Kalender nutzen, einen anderen Tag als den ersten Tag der Woche betrachten (siehe {{jsxref("Intl/Locale/getWeekInfo", "Intl.Locale.prototype.getWeekInfo()")}}).
- {{jsxref("Temporal/ZonedDateTime/dayOfYear", "Temporal.ZonedDateTime.prototype.dayOfYear")}} {{experimental_inline}}
  - : Gibt einen positiven Ganzwert zurück, der den 1-basierten Tag des Jahres dieser Datumsangabe darstellt. Der erste Tag dieses Jahres ist `1`, und der letzte Tag ist der {{jsxref("Temporal/ZonedDateTime/daysInYear", "daysInYear")}}. [Kalender](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars)-abhängig.
- {{jsxref("Temporal/ZonedDateTime/daysInMonth", "Temporal.ZonedDateTime.prototype.daysInMonth")}} {{experimental_inline}}
  - : Gibt einen positiven Ganzwert zurück, der die Anzahl der Tage im Monat dieses Datums darstellt. [Kalender](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars)-abhängig.
- {{jsxref("Temporal/ZonedDateTime/daysInWeek", "Temporal.ZonedDateTime.prototype.daysInWeek")}} {{experimental_inline}}
  - : Gibt einen positiven Ganzwert zurück, der die Anzahl der Tage in der Woche dieses Datums darstellt. [Kalender](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars)-abhängig. Für den ISO 8601-Kalender beträgt dies immer 7, aber in anderen Kalendersystemen kann sie von Woche zu Woche unterschiedlich sein.
- {{jsxref("Temporal/ZonedDateTime/daysInYear", "Temporal.ZonedDateTime.prototype.daysInYear")}} {{experimental_inline}}
  - : Gibt einen positiven Ganzwert zurück, der die Anzahl der Tage im Jahr dieses Datums darstellt. [Kalender](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars)-abhängig. Für den ISO 8601-Kalender beträgt dies 365 oder 366 in einem Schaltjahr.
- {{jsxref("Temporal/ZonedDateTime/epochMilliseconds", "Temporal.ZonedDateTime.prototype.epochMilliseconds")}} {{experimental_inline}}
  - : Gibt einen Ganzwert zurück, der die Anzahl der Millisekunden seit dem Unix-Epochenbeginn (Mitternacht zu Beginn des 1. Januar 1970, UTC) bis zu diesem Moment darstellt. Entspricht der Division von `epochNanoseconds` durch `1e6` und dem Abrunden des Ergebnisses.
- {{jsxref("Temporal/ZonedDateTime/epochNanoseconds", "Temporal.ZonedDateTime.prototype.epochNanoseconds")}} {{experimental_inline}}
  - : Gibt ein {{jsxref("BigInt")}} zurück, das die Anzahl der Nanosekunden darstellt, die seit dem Unix-Epochenbeginn (Mitternacht zu Beginn des 1. Januar 1970, UTC) bis zu diesem Moment vergangen sind.
- {{jsxref("Temporal/ZonedDateTime/era", "Temporal.ZonedDateTime.prototype.era")}} {{experimental_inline}}
  - : Gibt eine kalenderabhängige Kleinbuchstaben-Zeichenkette zurück, die die Ära dieses Datums darstellt oder `undefined`, wenn der Kalender keine Ären verwendet (z. B. ISO 8601). `era` und `eraYear` identifizieren zusammen ein Jahr in einem Kalender eindeutig, ähnlich wie `year`. [Kalender](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars)-abhängig. Für den gregorianischen Kalender lautet sie entweder `"gregory"` oder `"gregory-inverse"`.
- {{jsxref("Temporal/ZonedDateTime/eraYear", "Temporal.ZonedDateTime.prototype.eraYear")}} {{experimental_inline}}
  - : Gibt einen nicht-negativen Ganzwert zurück, der das Jahr dieses Datums innerhalb der Ära darstellt oder `undefined`, wenn der Kalender keine Ären verwendet (z. B. ISO 8601). Der Jahrindex beginnt normalerweise bei 1 (häufiger) oder 0, und Jahre in einer Ära können mit der Zeit abnehmen (z. B. gregorianischer BCE). `era` und `eraYear` identifizieren zusammen ein Jahr in einem Kalender eindeutig, ähnlich wie `year`. [Kalender](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars)-abhängig.
- {{jsxref("Temporal/ZonedDateTime/hour", "Temporal.ZonedDateTime.prototype.hour")}} {{experimental_inline}}
  - : Gibt einen Ganzwert von 0 bis 23 zurück, der die Stundenkomponente dieser Uhrzeit darstellt.
- {{jsxref("Temporal/ZonedDateTime/hoursInDay", "Temporal.ZonedDateTime.prototype.hoursInDay")}} {{experimental_inline}}
  - : Gibt einen positiven Ganzwert zurück, der die Anzahl der Stunden im Tag dieses Datums in der Zeitzone darstellt. Es können mehr oder weniger als 24 sein im Falle von Offset-Änderungen wie Sommerzeit.
- {{jsxref("Temporal/ZonedDateTime/inLeapYear", "Temporal.ZonedDateTime.prototype.inLeapYear")}} {{experimental_inline}}
  - : Gibt einen booleschen Wert zurück, der anzeigt, ob dieses Datum in einem Schaltjahr liegt. Ein Schaltjahr ist ein Jahr, das mehr Tage (aufgrund eines Schalttages oder Schaltmonat) als ein gewöhnliches Jahr hat. [Kalender](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars)-abhängig.
- {{jsxref("Temporal/ZonedDateTime/microsecond", "Temporal.ZonedDateTime.prototype.microsecond")}} {{experimental_inline}}
  - : Gibt einen Ganzwert von 0 bis 999 zurück, der die Mikrosekundenkomponente (10<sup>-6</sup> Sekunde) dieser Zeit darstellt.
- {{jsxref("Temporal/ZonedDateTime/millisecond", "Temporal.ZonedDateTime.prototype.millisecond")}} {{experimental_inline}}
  - : Gibt einen Ganzwert von 0 bis 999 zurück, der die Millisekundenkomponente (10<sup>-3</sup> Sekunde) dieser Zeit darstellt.
- {{jsxref("Temporal/ZonedDateTime/minute", "Temporal.ZonedDateTime.prototype.minute")}} {{experimental_inline}}
  - : Gibt einen Ganzwert von 0 bis 59 zurück, der die Minutenkomponente dieser Zeit darstellt.
- {{jsxref("Temporal/ZonedDateTime/month", "Temporal.ZonedDateTime.prototype.month")}} {{experimental_inline}}
  - : Gibt einen positiven Ganzwert zurück, der den 1-basierten Monatsindex im Jahr dieses Datums darstellt. Der erste Monat dieses Jahres ist `1`, und der letzte Monat ist der {{jsxref("Temporal/ZonedDateTime/monthsInYear", "monthsInYear")}}. [Kalender](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars)-abhängig. Beachten Sie, dass im Gegensatz zu {{jsxref("Date.prototype.getMonth()")}} der Index 1-basiert ist. Wenn der Kalender Schaltmonate enthält, kann der Monat mit demselben {{jsxref("Temporal/ZonedDateTime/monthCode", "monthCode")}} unterschiedliche `month` Indizes für unterschiedliche Jahre haben.
- {{jsxref("Temporal/ZonedDateTime/monthCode", "Temporal.ZonedDateTime.prototype.monthCode")}} {{experimental_inline}}
  - : Gibt eine kalenderabhängige Zeichenkette zurück, die den Monat dieses Datums darstellt. [Kalender](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars)-abhängig. Gewöhnlich ist es `M` plus eine zweistellige Monatsnummer. Bei Schaltmonaten ist es der Code des vorherigen Monats gefolgt von `L`. Wenn der Schaltmonat der erste Monat des Jahres ist, lautet der Code `M00L`.
- {{jsxref("Temporal/ZonedDateTime/monthsInYear", "Temporal.ZonedDateTime.prototype.monthsInYear")}} {{experimental_inline}}
  - : Gibt einen positiven Ganzwert zurück, der die Anzahl der Monate im Jahr dieses Datums darstellt. [Kalender](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars)-abhängig. Für den ISO 8601-Kalender beträgt dies immer 12, aber in anderen Kalendersystemen kann sie unterschiedlich sein.
- {{jsxref("Temporal/ZonedDateTime/nanosecond", "Temporal.ZonedDateTime.prototype.nanosecond")}} {{experimental_inline}}
  - : Gibt einen Ganzwert von 0 bis 999 zurück, der die Nanosekundenkomponente (10<sup>-9</sup> Sekunde) dieser Zeit darstellt.
- {{jsxref("Temporal/ZonedDateTime/offset", "Temporal.ZonedDateTime.prototype.offset")}} {{experimental_inline}}
  - : Gibt eine Zeichenkette zurück, die das [Offset](#zeitzonen_und_offsets) repräsentiert, das verwendet wird, um den internen Moment zu interpretieren, in der Form `±HH:mm` (oder `±HH:mm:ss.sssssssss` mit so viel subminütiger Präzision wie nötig).
- {{jsxref("Temporal/ZonedDateTime/offsetNanoseconds", "Temporal.ZonedDateTime.prototype.offsetNanoseconds")}} {{experimental_inline}}
  - : Gibt einen Ganzwert zurück, der das [Offset](#zeitzonen_und_offsets) repräsentiert, das verwendet wird, um den internen Moment zu interpretieren, als Anzahl von Nanosekunden (positiv oder negativ).
- {{jsxref("Temporal/ZonedDateTime/second", "Temporal.ZonedDateTime.prototype.second")}} {{experimental_inline}}
  - : Gibt einen Ganzwert von 0 bis 59 zurück, der die Sekundenkomponente dieser Zeit darstellt.
- {{jsxref("Temporal/ZonedDateTime/timeZoneId", "Temporal.ZonedDateTime.prototype.timeZoneId")}} {{experimental_inline}}
  - : Gibt eine Zeichenkette zurück, die den [Zeitzonen-Identifikator](#zeitzonen_und_offsets) repräsentiert, der verwendet wird, um den internen Moment zu interpretieren. Es verwendet die gleiche Zeichenkette, die beim Konstruieren des `Temporal.ZonedDateTime` Objekts verwendet wurde, which is entweder ein IANA-Zeitzonenname oder ein festes Offset.
- {{jsxref("Temporal/ZonedDateTime/weekOfYear", "Temporal.ZonedDateTime.prototype.weekOfYear")}} {{experimental_inline}}
  - : Gibt einen positiven Ganzwert zurück, der den 1-basierten Wochenindex im {{jsxref("Temporal.ZonedDateTime/yearOfWeek", "yearOfWeek")}} dieses Datums darstellt, oder `undefined`, wenn der Kalender kein gut definiertes Wochensystem hat. Die erste Woche des Jahres ist `1`. [Kalender](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars)-abhängig. Beachten Sie, dass der erste und letzte Tag des Jahres für ISO 8601 möglicherweise der letzten Woche des Vorjahres oder der ersten Woche des nächsten Jahres zugeordnet werden kann.
- {{jsxref("Temporal/ZonedDateTime/year", "Temporal.ZonedDateTime.prototype.year")}} {{experimental_inline}}
  - : Gibt einen Ganzwert zurück, der die Anzahl der Jahre dieses Datums relativ zum Beginn eines kalender-spezifischen Epochejahres darstellt. [Kalender](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars)-abhängig. Normalerweise ist das Jahr 1 entweder das erste Jahr der jüngsten Epoche oder das ISO 8601-Jahr `0001`. Wenn die Epoche in der Mitte des Jahres liegt, wird dieses Jahr vor und nach dem Startdatum der Epoche denselben Wert haben.
- {{jsxref("Temporal/ZonedDateTime/yearOfWeek", "Temporal.ZonedDateTime.prototype.yearOfWeek")}} {{experimental_inline}}
  - : Gibt einen Ganzwert zurück, der das Jahr darstellt, das mit der {{jsxref("Temporal.ZonedDateTime/weekOfYear", "weekOfYear")}} dieses Datums gepaart werden soll, oder `undefined`, wenn der Kalender kein gut definiertes Wochensystem hat. [Kalender](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars)-abhängig. Üblicherweise ist dies das Jahr des Datums, aber für ISO 8601 können die ersten und letzten Tage des Jahres der letzten Woche des Vorjahres oder der ersten Woche des nächsten Jahres zugeordnet werden, was dazu führt, dass sich das `yearOfWeek` um 1 unterscheidet.
- `Temporal.ZonedDateTime.prototype[Symbol.toStringTag]`
  - : Der anfängliche Wert der [`[Symbol.toStringTag]`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag) Eigenschaft ist die Zeichenkette `"Temporal.ZonedDateTime"`. Diese Eigenschaft wird in {{jsxref("Object.prototype.toString()")}} verwendet.

## Instanz-Methoden

- {{jsxref("Temporal/ZonedDateTime/add", "Temporal.ZonedDateTime.prototype.add()")}} {{experimental_inline}}
  - : Gibt ein neues `Temporal.ZonedDateTime` Objekt zurück, das diese Datum-Uhrzeit um eine gegebene Dauer vorgerückt darstellt (in einer Form, die durch {{jsxref("Temporal/Duration/from", "Temporal.Duration.from()")}} konvertierbar ist).
- {{jsxref("Temporal/ZonedDateTime/equals", "Temporal.ZonedDateTime.prototype.equals()")}} {{experimental_inline}}
  - : Gibt `true` zurück, wenn diese Datum-Uhrzeit gleichwertig zu einer anderen Datum-Uhrzeit ist (in einer Form, die durch {{jsxref("Temporal/ZonedDateTime/from", "Temporal.ZonedDateTime.from()")}} konvertierbar ist), und `false` andernfalls. Sie werden sowohl durch ihre Momentwerte, Zeitzonen und ihre Kalender verglichen, sodass zwei Datum-Uhrzeiten aus unterschiedlichen Kalendern oder Zeitzonen als gleichwertig durch {{jsxref("Temporal/ZonedDateTime/compare", "Temporal.ZonedDateTime.compare()")}} betrachtet werden können, aber nicht durch `equals()`.
- {{jsxref("Temporal/ZonedDateTime/getTimeZoneTransition", "Temporal.ZonedDateTime.prototype.getTimeZoneTransition()")}} {{experimental_inline}}
  - : Gibt ein `Temporal.ZonedDateTime` Objekt zurück, das den ersten Moment nach oder vor diesem Moment darstellt, bei dem sich das UTC-Offset der Zeitzone ändert, oder `null`, wenn es keinen solchen Übergang gibt. Dies ist nützlich, um die Offset-Regeln einer Zeitzone herauszufinden, wie z. B. ihr Muster der Sommerzeit.
- {{jsxref("Temporal/ZonedDateTime/round", "Temporal.ZonedDateTime.prototype.round()")}} {{experimental_inline}}
  - : Gibt ein neues `Temporal.ZonedDateTime` Objekt zurück, das diese Datum-Uhrzeit auf die gegebene Einheit gerundet darstellt.
- {{jsxref("Temporal/ZonedDateTime/since", "Temporal.ZonedDateTime.prototype.since()")}} {{experimental_inline}}
  - : Gibt ein neues {{jsxref("Temporal.Duration")}} Objekt zurück, das die Dauer von einer anderen Datum-Uhrzeit (in einer Form, die durch {{jsxref("Temporal/ZonedDateTime/from", "Temporal.ZonedDateTime.from()")}} konvertierbar ist) bis zu dieser Datum-Uhrzeit darstellt. Die Dauer ist positiv, wenn die andere Datum-Uhrzeit vor dieser Datum-Uhrzeit liegt, und negativ, wenn sie danach liegt.
- {{jsxref("Temporal/ZonedDateTime/startOfDay", "Temporal.ZonedDateTime.prototype.startOfDay()")}} {{experimental_inline}}
  - : Gibt ein `Temporal.ZonedDateTime` Objekt zurück, das den ersten Moment dieses Datums in der Zeitzone darstellt. Normalerweise hat es eine Uhrzeit von `00:00:00`, kann aber anders sein, wenn Mitternacht aufgrund von Offset-Änderungen nicht existiert. In diesem Fall wird die erste existierende Uhrzeit zurückgegeben.
- {{jsxref("Temporal/ZonedDateTime/subtract", "Temporal.ZonedDateTime.prototype.subtract()")}} {{experimental_inline}}
  - : Gibt ein neues `Temporal.ZonedDateTime` Objekt zurück, das diese Datum-Uhrzeit um eine gegebene Dauer zurückbewegt darstellt (in einer Form, die durch {{jsxref("Temporal/Duration/from", "Temporal.Duration.from()")}} konvertierbar ist).
- {{jsxref("Temporal/ZonedDateTime/toInstant", "Temporal.ZonedDateTime.prototype.toInstant()")}} {{experimental_inline}}
  - : Gibt ein neues {{jsxref("Temporal.Instant")}} Objekt zurück, das den Moment dieser Datum-Uhrzeit darstellt.
- {{jsxref("Temporal/ZonedDateTime/toJSON", "Temporal.ZonedDateTime.prototype.toJSON()")}} {{experimental_inline}}
  - : Gibt eine Zeichenkette zurück, die diese Datum-Uhrzeit in demselben [RFC 9557 Format](#rfc_9557_formatierung) wie bei einem Aufruf von {{jsxref("Temporal/ZonedDateTime/toString", "toString()")}} darstellt. Soll implizit von {{jsxref("JSON.stringify()")}} aufgerufen werden.
- {{jsxref("Temporal/ZonedDateTime/toLocaleString", "Temporal.ZonedDateTime.prototype.toLocaleString()")}} {{experimental_inline}}
  - : Gibt eine Zeichenkette mit einer sprachsensitiven Darstellung dieser Datum-Uhrzeit zurück.
- {{jsxref("Temporal/ZonedDateTime/toPlainDate", "Temporal.ZonedDateTime.prototype.toPlainDate()")}} {{experimental_inline}}
  - : Gibt ein neues {{jsxref("Temporal.PlainDate")}} Objekt zurück, das den Datumsanteil dieser Datum-Uhrzeit darstellt.
- {{jsxref("Temporal/ZonedDateTime/toPlainDateTime", "Temporal.ZonedDateTime.prototype.toPlainDateTime()")}} {{experimental_inline}}
  - : Gibt ein neues {{jsxref("Temporal.PlainDateTime")}} Objekt zurück, das die Datums- und Zeitanteile dieser Datum-Uhrzeit darstellt. Nur die Zeitzoneninformationen werden entfernt.
- {{jsxref("Temporal/ZonedDateTime/toPlainTime", "Temporal.ZonedDateTime.prototype.toPlainTime()")}} {{experimental_inline}}
  - : Gibt ein neues {{jsxref("Temporal.PlainTime")}} Objekt zurück, das den Zeitanteil dieser Datum-Uhrzeit darstellt.
- {{jsxref("Temporal/ZonedDateTime/toString", "Temporal.ZonedDateTime.prototype.toString()")}} {{experimental_inline}}
  - : Gibt eine Zeichenkette zurück, die diese Datum-Uhrzeit in dem [RFC 9557 Format](#rfc_9557_formatierung) darstellt.
- {{jsxref("Temporal/ZonedDateTime/until", "Temporal.ZonedDateTime.prototype.until()")}} {{experimental_inline}}
  - : Gibt ein neues {{jsxref("Temporal.Duration")}} Objekt zurück, das die Dauer von dieser Datum-Uhrzeit bis zu einer anderen Datum-Uhrzeit (in einer Form, die durch {{jsxref("Temporal/ZonedDateTime/from", "Temporal.ZonedDateTime.from()")}} konvertierbar ist) darstellt. Die Dauer ist positiv, wenn die andere Datum-Uhrzeit nach dieser Datum-Uhrzeit liegt, und negativ, wenn sie davor liegt.
- {{jsxref("Temporal/ZonedDateTime/valueOf", "Temporal.ZonedDateTime.prototype.valueOf()")}} {{experimental_inline}}
  - : Löst einen {{jsxref("TypeError")}} aus, welcher verhindert, dass `Temporal.ZonedDateTime` Instanzen [implizit in Primitive konvertiert](/de/docs/Web/JavaScript/Guide/Data_structures#primitive_coercion) werden, wenn sie in arithmetischen oder Vergleichsoperationen verwendet werden.
- {{jsxref("Temporal/ZonedDateTime/with", "Temporal.ZonedDateTime.prototype.with()")}} {{experimental_inline}}
  - : Gibt ein neues `Temporal.ZonedDateTime` Objekt zurück, das diese Datum-Uhrzeit mit einigen durch neue Werte ersetzten Feldern darstellt.
- {{jsxref("Temporal/ZonedDateTime/withCalendar", "Temporal.ZonedDateTime.prototype.withCalendar()")}} {{experimental_inline}}
  - : Gibt ein neues `Temporal.ZonedDateTime` Objekt zurück, das diese Datum-Uhrzeit interpretiert im neuen Kalendersystem darstellt.
- {{jsxref("Temporal/ZonedDateTime/withPlainTime", "Temporal.ZonedDateTime.prototype.withPlainTime()")}} {{experimental_inline}}
  - : Gibt ein neues `Temporal.ZonedDateTime` Objekt zurück, das diese Datum-Uhrzeit mit dem Zeitanteil vollständig durch die neue Zeit ersetzt darstellt (in einer Form, die durch {{jsxref("Temporal/PlainTime/from", "Temporal.PlainTime.from()")}} konvertierbar ist)
- {{jsxref("Temporal/ZonedDateTime/withTimeZone", "Temporal.ZonedDateTime.prototype.withTimeZone()")}} {{experimental_inline}}
  - : Gibt ein neues `Temporal.ZonedDateTime` Objekt zurück, das denselben Moment wie diese Datum-Uhrzeit, aber in der neuen Zeitzone darstellt.

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
