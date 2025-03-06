---
title: Temporal.ZonedDateTime
slug: Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime
l10n:
  sourceCommit: 3dbbefa32758e2a1ca9a37c2788370c06aae2738
---

{{JSRef}}{{SeeCompatTable}}

Das **`Temporal.ZonedDateTime`**-Objekt stellt ein Datum und eine Uhrzeit mit einer Zeitzone dar. Es ist grundsätzlich als eine Kombination aus einem [Sofortbild](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/Instant), einer Zeitzone und einem Kalendersystem dargestellt.

## Beschreibung

Ein `ZonedDateTime` fungiert als Brücke zwischen einer exakten Zeit und einer Wand-Uhr-Zeit: Es repräsentiert gleichzeitig einen Moment in der Geschichte (wie ein {{jsxref("Temporal.Instant")}}) und eine lokale, an der Wand ablesbare Zeit (wie ein {{jsxref("Temporal.PlainDateTime")}}). Dies geschieht, indem der Moment, die Zeitzone und das Kalendersystem gespeichert werden. Die Zeitzone wird verwendet, um zwischen dem Moment und der lokalen Zeit zu konvertieren, und das Kalendersystem wird verwendet, um die lokale Zeit zu interpretieren.

`ZonedDateTime` ist die einzige `Temporal`-Klasse, die eine Zeitzone berücksichtigt. Das Hinzufügen einer Zeitzone führt dazu, dass `ZonedDateTime`-Objekte bedeutende Verhaltensunterschiede zu {{jsxref("Temporal.PlainDateTime")}}-Objekten aufweisen. Insbesondere kann man nicht mehr davon ausgehen, dass "die Zeit 1 Minute später" jeden Tag gleich ist oder dass ein Tag 24 Stunden hat. Im schlimmsten Fall kann ein ganzer Tag im lokalen Kalender fehlen. Unten bieten wir einen kurzen Überblick über Zeitzonen und -versätze sowie deren Auswirkungen auf die Umwandlung zwischen UTC-Zeit und lokaler Zeit.

### Zeitzonen und Versätze

Alle Zeiten in JavaScript haben einen goldenen Standard: die UTC-Zeit, die kontinuierlich und gleichmäßig fortschreitet, während die physische Zeit fortschreitet. Im Gegensatz dazu sind Benutzer mehr an ihrer lokalen Zeit interessiert, was die Zeit ist, die sie auf ihren Kalendern und Uhren ablesen. Der Prozess der Umwandlung zwischen UTC-Zeit und lokaler Zeit beinhaltet einen Zeitzonen-Offset, der wie folgt berechnet wird:

```plain
local time = UTC time + offset
```

Zum Beispiel, wenn die UTC-Zeit 1970-01-01T00:00:00 ist und der Versatz "-05:00" beträgt, dann ist die lokale Zeit:

```plain
1970-01-01T00:00:00 + -05:00 = 1969-12-31T19:00:00
```

Durch das Anhängen dieses lokalen Zeitpunkts an den Versatz und das Ausdrücken dieser Zeit als "1969-12-31T19:00:00-05:00" kann sie nun eindeutig als ein bestimmter Moment in der Geschichte verstanden werden.

Um den Versatz zu kennen, benötigen wir zwei Informationen: die _Zeitzone_ und das _Sofortbild_. Die Zeitzone ist eine Region auf der Erde, in der jederzeit derselbe Versatz verwendet wird. Zwei Uhren in derselben Zeitzone zeigen immer gleichzeitig dieselbe Zeit an, aber der Versatz ist nicht unbedingt konstant: Das bedeutet, dass sich die Zeiten dieser Uhren abrupt ändern können. Dies geschieht häufig während der Zeitumstellung von Sommerzeit, bei der der Versatz zweimal im Jahr um eine Stunde wechselt. Versätze können sich auch aufgrund politischer Änderungen dauerhaft ändern, z. B. durch das Wechseln eines Landes der Zeitzone.

Die Zeitzonen sind in der [IANA-Zeitzonen-Datenbank](https://www.iana.org/time-zones) gespeichert. Jede IANA-Zeitzone hat:

- Einen _primären Zeitzonen-Bezeichner_, der die Zeitzone eindeutig identifiziert. Er bezieht sich normalerweise auf ein geografisches Gebiet, das von einer Stadt verankert wird (z. B. `Europe/Paris` oder `Africa/Kampala`), kann aber auch einzeln versetzte Zeitzonen wie `UTC` (ein einheitlicher `+00:00` Versatz) oder `Etc/GMT+5` (was aus historischen Gründen ein negativer Versatz `-05:00` ist) bezeichnen. Aus historischen Gründen ist der primäre Name für die UTC-Zeitzone `UTC`, obwohl es in IANA `Etc/UTC` ist.
- Eine _Zeitzonen-Definition_ in Form einer Tabelle, die UTC-Datums-/Zeitraumbereiche (einschließlich zukünftiger Bereiche) bestimmten Versätzen zuordnet.
- Null oder mehr _nicht-primäre Zeitzonen-Bezeichner_, die Aliase für den primären Zeitzonen-Bezeichner sind. Dies sind normalerweise historische Namen, die nicht mehr verwendet werden, aber aus Kompatibilitätsgründen beibehalten werden. Weitere Informationen finden Sie unten.

Als Eingabe werden benannte Bezeichner ohne Berücksichtigung der Groß- und Kleinschreibung abgeglichen. Intern werden sie in ihrer bevorzugten Schreibweise gespeichert, und nicht-primäre Bezeichner werden _nicht_ in ihren primären Bezeichner umgewandelt.

> [!NOTE]
> Wenn Sie den Namen der Zeitzone festlegen, möchten Sie selten, dass er auf `"UTC"` gesetzt wird. `ZonedDateTime` ist vorgesehen, um Benutzern angezeigt zu werden, aber kein Mensch lebt in der "UTC"-Zeitzone. Wenn Sie die Zeitzone zum Zeitpunkt der Erstellung nicht kennen, aber die an der Wand ablesbare Zeit kennen, verwenden Sie ein {{jsxref("Temporal.PlainDateTime")}}. Wenn Sie das genaue Sofortbild kennen, verwenden Sie ein {{jsxref("Temporal.Instant")}}.

Wenn eine `Temporal`-API einen _Zeitzonen-Bezeichner_ akzeptiert, akzeptiert sie zusätzlich zu primären und nicht-primären Zeitzonen-Bezeichnern auch einen _Offset-Zeitzonen-Bezeichner_, der in derselben Form wie der Offset ist, jedoch ist eine subminute Präzision nicht erlaubt. Zum Beispiel sind `+05:30`, `-08`, `+0600` alle gültige Offset-Bezeichner. Intern werden Offset-Bezeichner im Format `±HH:mm` gespeichert.

> [!NOTE]
> Vermeiden Sie die Verwendung von Offset-Bezeichnern, wenn es eine benannte Zeitzone gibt, die Sie stattdessen verwenden können. Auch wenn ein Gebiet stets einen einheitlichen Offset verwendet hat, ist es besser, den benannten Bezeichner zu verwenden, um zukünftige politische Änderungen des Offsets abzusichern.
>
> Wenn ein Gebiet mehrere Offsets verwendet (oder verwendet hat), ist die Verwendung seiner benannten Zeitzone umso wichtiger. Dies liegt daran, dass `Temporal.ZonedDateTime` Methoden wie `add` oder `with` verwenden kann, um neue Instanzen zu einem anderen Moment zu erstellen. Wenn diese abgeleiteten Instanzen einem Moment entsprechen, der einen anderen Offset verwendet (zum Beispiel nach einem Übergang zur Sommerzeit), dann haben Ihre Berechnungen eine falsche lokale Zeit. Die Verwendung einer benannten Zeitzone stellt sicher, dass lokale Daten und Zeiten immer für den richtigen Offset für diesen Moment angepasst werden.

Für mehr Komfort können Sie beim Bereitstellen eines Zeitzonen-Bezeichners für `Temporal`-APIs wie `Temporal.ZonedDateTime.prototype.withTimeZone()` und die `timeZoneId`-Option von `Temporal.ZonedDateTime.from()` den Bezeichner in einigen anderen Formen angeben:

- Als eine andere `ZonedDateTime`-Instanz, deren `timeZoneId` verwendet wird.
- Als eine [RFC 9557-Zeichenfolge](#rfc_9557-format) mit einer Zeitzonen-Annotation, deren Zeitzonen-Bezeichner verwendet wird.
- Als eine ISO 8601 / RFC 3339-Zeichenfolge, die einen Offset enthält, dessen Offset als Offset-Bezeichner verwendet wird; oder wenn `Z` verwendet wird, wird die Zeitzone `"UTC"` verwendet. Diese Verwendung wird im Allgemeinen nicht empfohlen, da wie oben diskutiert, Offset-Bezeichner nicht in der Lage sind, sicher andere `Temporal.ZonedDateTime`-Instanzen über einen Offset-Übergang hinweg abzuleiten, wie z. B. wenn die Sommerzeit beginnt oder endet. Überlegen Sie stattdessen, nur `Temporal.Instant` zu verwenden oder die tatsächliche benannte Zeitzone des Benutzers zu ermitteln.

Die IANA-Zeitzonen-Datenbank ändert sich von Zeit zu Zeit, normalerweise, um neue Zeitzonen hinzuzufügen, die auf politische Änderungen reagieren. In seltenen Fällen werden jedoch IANA-Zeitzonen-Bezeichner umbenannt, um die aktualisierte englische Übersetzung eines Städtenamens abzugleichen oder veraltete Namenskonventionen zu aktualisieren. Zum Beispiel sind hier einige bemerkenswerte Namensänderungen:

| Aktueller IANA-Primer-Bezeichner | Alter, nun nicht-primer Bezeichner |
| -------------------------------- | ---------------------------------- |
| `America/Argentina/Buenos_Aires` | `America/Buenos_Aires`             |
| `Asia/Kolkata`                   | `Asia/Calcutta`                    |
| `Asia/Ho_Chi_Minh`               | `Asia/Saigon`                      |
| `Europe/Kyiv`                    | `Europe/Kiev`                      |

Historisch gesehen verursachten diese Umbenennungen Probleme für Programmierer, weil die Unicode [CLDR-Datenbank](https://github.com/unicode-org/cldr-json/blob/main/cldr-json/cldr-bcp47/bcp47/timezone.json) (eine von Browsern verwendete Bibliothek, um Zeitzonen-Bezeichner und Daten zu liefern) aus Stabilitätsgründen nicht den Umbenennungen von IANA folgte. Infolgedessen berichteten einige Browser wie Chrome und Safari CLDRs veraltete Bezeichner, während andere Browser wie Firefox CLDRs Standardeinstellungen überschrieben und die aktuellen primären Bezeichner meldeten.

Mit der Einführung von Temporal wird dieses Verhalten nun stärker standardisiert:

- [CLDR-Daten](https://github.com/unicode-org/cldr-json/blob/main/cldr-json/cldr-bcp47/bcp47/timezone.json) enthalten jetzt ein `"_iana"`-Attribut, das den aktuellsten Bezeichner anzeigt, wenn der ältere, stabile Bezeichner umbenannt wurde. Browser können dieses neue Attribut verwenden, um Anrufern aktuelle Bezeichner bereitzustellen.
- Zeitzonen-Bezeichner, die vom Programmierer bereitgestellt werden, werden niemals in einen Alias umgewandelt. Zum Beispiel, wenn der Anrufer `Asia/Calcutta` oder `Asia/Kolkata` als Bezeichnereingabe für {{jsxref("Temporal/ZonedDateTime/from", "Temporal.ZonedDateTime.from()")}} bereitstellt, dann wird derselbe Bezeichner in der resultierenden Instanz als {{jsxref("Temporal/ZonedDateTime/timeZoneId", "timeZoneId")}} zurückgegeben. Beachten Sie, dass die Groß- und Kleinschreibung der Ausgaben normalisiert wird, um mit IANA übereinzustimmen, sodass `ASIA/calCuTTa` als Eingabe eine {{jsxref("Temporal/ZonedDateTime/timeZoneId", "timeZoneId")}} von `Asia/Calcutta` als Ausgabe erzeugt.
- Wenn ein Zeitzonen-Bezeichner nicht von einem Anrufer angegeben, sondern stattdessen vom System selbst bezogen wird (zum Beispiel bei der Verwendung von {{jsxref("Temporal/Now/timeZoneId", "Temporal.Now.timeZoneId()")}}), werden in allen Browsern moderne Bezeichner zurückgegeben. Bei Umbenennungen von Städten gibt es eine Verzögerung von zwei Jahren, bevor diese systembezogenen Bezeichner-APIs den neuen Namen offenlegen, wodurch anderen Komponenten (wie einem Node-Server) Zeit gegeben wird, ihre Kopien der IANA-Datenbank zu aktualisieren, um den neuen Namen zu erkennen.

Beachten Sie, dass die Zuordnung von primären Bezeichnern den Ländercode beibehält: Zum Beispiel zeichnet die IANA-Datenbank `Atlantic/Reykjavik` als Alias für `Africa/Abidjan` auf, aber weil sie unterschiedlichen Ländern entsprechen (Island bzw. Côte d'Ivoire), werden sie als verschiedene primäre Bezeichner betrachtet.

Diese Standardisierung gilt auch außerhalb von `Temporal`. Zum Beispiel wird die `timeZone`-Option, die von {{jsxref("Intl/DateTimeFormat/resolvedOptions", "Intl.DateTimeFormat.prototype.resolvedOptions()")}} zurückgegeben wird, ebenfalls nie mit einem Alias ersetzt, obwohl Browser traditionell diese Bezeichner vor der Standardisierung durch Temporal kanonisiert haben. Andererseits gibt {{jsxref("Intl/Locale/getTimeZones", "Intl.Locale.prototype.getTimeZones()")}} und {{jsxref("Intl.supportedValuesOf()")}} (`timeZone`-Option) den aktuellsten Bezeichner zurück, während einige Browser früher den alten, nicht-primary Bezeichner zurückgaben.

### RFC 9557-Format

`ZonedDateTime`-Objekte können im [RFC 9557](https://datatracker.ietf.org/doc/html/rfc9557)-Format serialisiert und geparst werden, einer Erweiterung des [ISO 8601 / RFC 3339](https://datatracker.ietf.org/doc/html/rfc3339)-Formats. Die Zeichenfolge hat die folgende Form (Leerzeichen sind nur zur besseren Lesbarkeit und sollten in der tatsächlichen Zeichenfolge nicht vorhanden sein):

```plain
YYYY-MM-DD T HH:mm:ss.sssssssss Z/±HH:mm [time_zone_id] [u-ca=calendar_id]
```

- `YYYY`
  - : Entweder eine vierstellige Zahl oder eine sechsstellige Zahl mit einem `+` oder `-`-Zeichen.
- `MM`
  - : Eine zweistellige Zahl von `01` bis `12`.
- `DD`
  - : Eine zweistellige Zahl von `01` bis `31`. Die `YYYY`, `MM`- und `DD`-Komponenten können durch `-` oder nichts getrennt werden.
- `T` {{optional_inline}}
  - : Der Datum-Zeit-Separator, der entweder `T`, `t` oder ein Leerzeichen sein kann. Nur vorhanden, wenn `HH` vorhanden ist.
- `HH` {{optional_inline}}
  - : Eine zweistellige Zahl von `00` bis `23`. Standardwert ist `00`.
- `mm` {{optional_inline}}
  - : Eine zweistellige Zahl von `00` bis `59`. Standardwert ist `00`.
- `ss.sssssssss` {{optional_inline}}
  - : Eine zweistellige Zahl von `00` bis `59`. Kann optional von einem `.` oder `,` gefolgt und eins bis neun Ziffern haben. Standardwert ist `00`. Die `HH`, `mm` und `ss`-Komponenten können durch `:` oder nichts getrennt werden. Sie können entweder nur `ss` oder sowohl `ss` als auch `mm` weglassen, sodass die Zeit eine von drei Formen haben kann: `HH`, `HH:mm` oder `HH:mm:ss.sssssssss`.
- `Z/±HH:mm` {{optional_inline}}
  - : Entweder der UTC-Bezeichner `Z` oder `z`, oder ein Offset von UTC in der Form `+` oder `-`, gefolgt vom gleichen Format wie die Zeitkomponente. Beachten Sie, dass Subminute-Präzision (`:ss.sssssssss`) von anderen Systemen möglicherweise nicht unterstützt wird, und sie wird akzeptiert, aber niemals ausgegeben. Wenn es weggelassen wird, wird der Offset aus dem Zeitzonen-Bezeichner abgeleitet. Wenn er vorhanden ist, muss auch die Zeit angegeben werden. `Z` ist nicht dasselbe wie `+00:00`: Ersteres bedeutet, dass die Zeit unabhängig vom Zeitzonen-Bezeichner in UTC-Form gegeben wird, während letzteres bedeutet, dass die Zeit in lokaler Zeit angegeben wird, die zufällig UTC+0 ist, und die gegen den Zeitzonen-Bezeichner über die [`offset`-Option](#offset-mehrdeutigkeit) validiert wird.
- `[time_zone_id]`
  - : Ersetzen Sie `time_zone_id` durch den Zeitzonen-Bezeichner (benannt oder als Offset) wie oben beschrieben. Kann ein _kritisches Flag_ haben, indem dem Bezeichner mit `!` voransteht: z. B., `[!America/New_York]`. Dieses Flag sagt anderen Systemen im Allgemeinen, dass es nicht ignoriert werden kann, wenn sie es nicht unterstützen. Beachten Sie, dass es für `Temporal.ZonedDateTime.from()` erforderlich ist: Das Weglassen führt zu einem `RangeError`. Wenn Sie ISO 8601 / RFC 3339-Zeichenfolgen ohne Zeitzonen-Bezeichner-Anmerkungen analysieren möchten, verwenden Sie stattdessen {{jsxref("Temporal/Instant/from", "Temporal.Instant.from()")}}.
- `[u-ca=calendar_id]` {{optional_inline}}
  - : Ersetzen Sie `calendar_id` durch den Kalender, der verwendet werden soll. Kann ein _kritisches Flag_ haben, indem dem Schlüssel mit `!` voransteht: z. B., `[!u-ca=iso8601]`. Dieses Flag sagt anderen Systemen im Allgemeinen, dass es nicht ignoriert werden kann, wenn sie es nicht unterstützen. Der `Temporal`-Parser wirft einen Fehler, wenn die Anmerkungen zwei oder mehr Kalenderanmerkungen enthalten und eine von ihnen kritisch ist. Standardwert ist `[u-ca=iso8601]`. Beachten Sie, dass das `YYYY-MM-DD` immer als ISO 8601-Kalenderdatum interpretiert und dann in den angegebenen Kalender umgewandelt wird.

Als Eingabe werden andere Anmerkungen im Format `[key=value]` ignoriert, und sie dürfen kein kritisches Flag haben.

Beim Serialisieren können Sie die Bruchteile der Sekunden, ob der Offset/Zeitzonen-ID/Kalender-ID angezeigt wird und ob für die Anmerkungen ein kritisches Flag hinzugefügt wird, konfigurieren.

### Mehrdeutigkeit und Lücken von lokaler zu UTC-Zeit

Angesichts einer Zeitzone ist die Umwandlung von UTC- zu lokaler Zeit einfach: Sie erhalten zuerst den Offset mit dem Zeitzonennamen und dem Moment, dann fügen Sie den Offset dem Moment hinzu. Umgekehrt ist es nicht wahr: Die Umwandlung von lokaler zu UTC-Zeit, ohne einen expliziten Offset, ist mehrdeutig, da eine lokale Zeit null, einem oder mehreren UTC-Zeiten entsprechen kann. Betrachten wir die häufigste Ursache: Zeitumstellungen für die Sommerzeit. Nehmen wir New York als Beispiel. Sein Standardoffset ist UTC-5, aber während der Sommerzeit werden alle Uhren um eine Stunde vorgestellt, sodass der Offset UTC-4 beträgt. In den USA treten Übergänge um 2:00 Uhr Ortszeit auf, betrachten Sie daher diese beiden Übergangstage:

| UTC-Zeit             | New Yorker Zeit           |
| -------------------- | ------------------------- |
| 2024-03-10T06:58:00Z | 2024-03-10T01:58:00-05:00 |
| 2024-03-10T06:59:00Z | 2024-03-10T01:59:00-05:00 |
| 2024-03-10T07:00:00Z | 2024-03-10T03:00:00-04:00 |
| ---                  | ---                       |
| 2024-11-03T05:58:00Z | 2024-11-03T01:58:00-04:00 |
| 2024-11-03T05:59:00Z | 2024-11-03T01:59:00-04:00 |
| 2024-11-03T06:00:00Z | 2024-11-03T01:00:00-05:00 |

Wie Sie sehen können, ist im März eine Stunde in der lokalen Zeit verschwunden, und im November haben wir zwei Stunden, die dieselbe Wand-Uhr-Zeit haben. Angenommen, wir haben ein `PlainDateTime` gespeichert, der "2024-03-10T02:05:00" angibt, und wir möchten ihn in der `America/New_York` Zeitzone interpretieren, es wird keine Zeit geben, die dem entspricht, während ein `PlainDateTime`, der "2024-11-03T01:05:00" angibt, zwei unterschiedlichen Momenten entsprechen kann.

Beim Erstellen eines `ZonedDateTime` aus einer lokalen Zeit (mit {{jsxref("Temporal/ZonedDateTime/from", "Temporal.ZonedDateTime.from()")}}, {{jsxref("Temporal/ZonedDateTime/with", "Temporal.ZonedDateTime.prototype.with()")}}, {{jsxref("Temporal/PlainDateTime/toZonedDateTime", "Temporal.PlainDateTime.prototype.toZonedDateTime()")}}) ist das Verhalten für Mehrdeutigkeit und Lücken über die `disambiguation`-Option konfigurierbar:

- `earlier`
  - : Wenn es zwei mögliche Momente gibt, wählen Sie den früheren. Wenn es eine Lücke gibt, gehen Sie zurück um die Lückendauer.
- `later`
  - : Wenn es zwei mögliche Momente gibt, wählen Sie den späteren. Wenn es eine Lücke gibt, gehen Sie vorwärts um die Lückendauer.
- `compatible` (Standard)
  - : Gleiches Verhalten wie {{jsxref("Date")}}: Verwenden Sie `later` für Lücken und `earlier` für Mehrdeutigkeiten.
- `reject`
  - : Werfen Sie einen `RangeError`, wann immer es eine Mehrdeutigkeit oder eine Lücke gibt.

Es gibt mehrere Fälle, in denen es keine Mehrdeutigkeit gibt, wenn ein `ZonedDateTime` erstellt wird:

- Wenn die Zeit im UTC-Format durch den `Z`-Versatz angegeben ist.
- Wenn der Versatz explizit bereitgestellt und verwendet wird (siehe unten).

### Offset-Mehrdeutigkeit

Wir haben bereits demonstriert, wie Mehrdeutigkeit daraus entsteht, eine lokale Zeit in einer Zeitzone zu interpretieren, ohne einen expliziten Offset anzugeben. Wenn Sie jedoch einen expliziten Offset angeben, entsteht ein weiterer Konflikt: zwischen dem angegebenen Offset und dem Versatz, wie er aus der Zeitzone und der lokalen Zeit berechnet wird. Dies ist ein unvermeidbares Problem in der realen Welt: Wenn Sie eine Zeit in der Zukunft speichern, mit einem erwarteten Offset, dann kann sich vor dieser Zeit die Definition der Zeitzone aufgrund politischer Änderungen ändern. Zum Beispiel, nehmen wir an, im Jahr 2018 haben wir eine Erinnerung um die Zeit `2019-12-23T12:00:00-02:00[America/Sao_Paulo]` gesetzt (was eine Sommerzeit ist; Brasilien befindet sich auf der Südhalbkugel, sodass es im Oktober in die Sommerzeit eintritt und im Februar austritt). Aber bevor diese Zeit kommt, entscheidet Brasilien Anfang 2019, die Sommerzeit nicht mehr zu beachten, sodass der tatsächliche Offset `-03:00` wird. Sollte die Erinnerung jetzt immer noch mittags (um die lokale Zeit beizubehalten) oder um 11:00 Uhr (um die genaue Zeit beizubehalten) ausgelöst werden?

Beim Erstellen eines `ZonedDateTime` mit {{jsxref("Temporal/ZonedDateTime/from", "Temporal.ZonedDateTime.from()")}} oder beim Aktualisieren mit der Methode {{jsxref("Temporal/ZonedDateTime/with", "with()")}} ist das Verhalten bei Offset-Mehrdeutigkeiten über die `offset`-Option konfigurierbar:

- `use`
  - : Verwenden Sie den Offset, um die genaue Zeit zu berechnen. Diese Option "verwendet" den Offset, um den von der Zeichenfolge repräsentierten Moment zu bestimmen, der derselbe ursprüngliche Moment sein wird, der berechnet wurde, als wir die Zeit gespeichert haben, selbst wenn sich der Offset zu diesem Zeitpunkt geändert hat. Der Zeitzonen-Bezeichner wird danach verwendet, um den (möglicherweise aktualisierten) Offset zu ermitteln und diesen Offset zu verwenden, um die genaue Zeit in lokale Zeit umzuwandeln.
- `ignore`
  - : Ignorieren Sie den in der Zeichenfolge angegebenen Offset und berechnen Sie den Offset anhand des Zeitzonen-Bezeichners neu. Diese Option behält die gleiche lokale Zeit bei, wie sie ursprünglich berechnet wurde, als wir die Zeit gespeichert haben, kann jedoch einem anderen Moment entsprechen. Beachten Sie, dass diese Option dieselbe lokale Zeit-Interpretationsmehrdeutigkeit verursachen kann, wie oben gezeigt, die mithilfe der `disambiguation`-Option aufgelöst wird.
- `reject`
  - : Werfen Sie einen `RangeError`, wenn es einen Konflikt zwischen dem Offset und dem Zeitzonen-Bezeichner gibt. Dies ist die Standardeinstellung für {{jsxref("Temporal/ZonedDateTime/from", "Temporal.ZonedDateTime.from()")}}.
- `prefer`
  - : Verwenden Sie den Offset, wenn er gültig ist, ansonsten berechnen Sie den Offset aus dem Zeitzonen-Bezeichner. Dies ist die Standardeinstellung für {{jsxref("Temporal/ZonedDateTime/with", "Temporal.ZonedDateTime.prototype.with()")}} (siehe Methode für mehr Details). Dies unterscheidet sich von `ignore`, da im Fall einer lokalen Zeit-Mehrdeutigkeit der Offset verwendet wird, um dies zu lösen, anstatt der `disambiguation`-Option.

Beachten Sie, dass der `Z`-Offset nicht `+00:00` bedeutet; er wird immer als gültig betrachtet, unabhängig von der Zeitzone. Die Zeit wird als UTC-Zeit interpretiert und der Zeitzonen-Bezeichner wird dann verwendet, um sie in lokale Zeit umzuwandeln. Mit anderen Worten, `Z` erzwingt dasselbe Verhalten wie die `ignore`-Option und seine Ergebnisse können nie mehrdeutig sein.

> [!NOTE]
> Obwohl {{jsxref("Temporal/Instant/from", "Temporal.Instant.from()")}} auch eine [RFC 9557](#rfc_9557-format)-Zeichenfolge in derselben Form annimmt, gibt es keine Mehrdeutigkeit, da sie immer den Zeitzonen-Bezeichner ignorieren und nur den Offset lesen.

## Konstruktor

- {{jsxref("Temporal/ZonedDateTime/ZonedDateTime", "Temporal.ZonedDateTime()")}} {{experimental_inline}}
  - : Erstellt ein neues `Temporal.ZonedDateTime`-Objekt durch direkte Bereitstellung der zugrunde liegenden Daten.

## Statische Methoden

- {{jsxref("Temporal/ZonedDateTime/compare", "Temporal.ZonedDateTime.compare()")}} {{experimental_inline}}
  - : Gibt eine Zahl (-1, 0 oder 1) zurück, welche angibt, ob die erste Zeit vor, gleich oder nach der zweiten Zeit ist. Entspricht dem Vergleich der {{jsxref("Temporal/ZonedDateTime/epochNanoseconds", "epochNanoseconds")}} der beiden Zeiten.
- {{jsxref("Temporal/ZonedDateTime/from", "Temporal.ZonedDateTime.from()")}} {{experimental_inline}}
  - : Erstellt ein neues `Temporal.ZonedDateTime`-Objekt aus einem anderen `Temporal.ZonedDateTime`-Objekt, einem Objekt mit Datums-, Uhrzeit- und Zeitzoneneigenschaften oder einer [RFC 9557](#rfc_9557-format)-Zeichenfolge.

## Instanzeigenschaften

Diese Eigenschaften sind auf `Temporal.ZonedDateTime.prototype` definiert und werden von allen `Temporal.ZonedDateTime`-Instanzen gemeinsam genutzt.

- {{jsxref("Temporal/ZonedDateTime/calendarId", "Temporal.ZonedDateTime.prototype.calendarId")}} {{experimental_inline}}
  - : Gibt eine Zeichenfolge zurück, die den [Kalender](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars) repräsentiert, der verwendet wird, um das interne ISO 8601-Datum zu interpretieren.
- {{jsxref("Object/constructor", "Temporal.ZonedDateTime.prototype.constructor")}}
  - : Die Konstrukturfunktion, die das Instanzobjekt erstellt hat. Für `Temporal.ZonedDateTime`-Instanzen ist der Anfangswert der {{jsxref("Temporal/ZonedDateTime/ZonedDateTime", "Temporal.ZonedDateTime()")}}-Konstruktor.
- {{jsxref("Temporal/ZonedDateTime/day", "Temporal.ZonedDateTime.prototype.day")}} {{experimental_inline}}
  - : Gibt eine positive ganze Zahl zurück, die den auf einer 1 basierenden Tagesindex des Monats dieses Datums darstellt, der die gleiche Tagesnummer ist, die Sie auf einem Kalender sehen würden. [Kalender](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars)-abhängig. Beginnt im Allgemeinen bei 1 und ist kontinuierlich, aber nicht immer.
- {{jsxref("Temporal/ZonedDateTime/dayOfWeek", "Temporal.ZonedDateTime.prototype.dayOfWeek")}} {{experimental_inline}}
  - : Gibt eine positive ganze Zahl zurück, die den auf einer 1 basierenden Tagesindex der Woche dieses Datums darstellt. Tage in einer Woche werden sequenziell von `1` bis {{jsxref("Temporal/ZonedDateTime/daysInWeek", "daysInWeek")}} nummeriert, wobei jede Zahl ihrem Namen entspricht. [Kalender](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars)-abhängig. 1 repräsentiert gewöhnlich Montag im Kalender, auch wenn Lokalisierungen, die den Kalender verwenden, einen anderen Tag als den ersten Tag der Woche betrachten könnten (siehe {{jsxref("Intl/Locale/getWeekInfo", "Intl.Locale.prototype.getWeekInfo()")}}).
- {{jsxref("Temporal/ZonedDateTime/dayOfYear", "Temporal.ZonedDateTime.prototype.dayOfYear")}} {{experimental_inline}}
  - : Gibt eine positive ganze Zahl zurück, die den auf einer 1 basierenden Tagesindex des Jahres dieses Datums darstellt. Der erste Tag dieses Jahres ist `1`, und der letzte Tag ist der {{jsxref("Temporal/ZonedDateTime/daysInYear", "daysInYear")}}. [Kalender](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars)-abhängig.
- {{jsxref("Temporal/ZonedDateTime/daysInMonth", "Temporal.ZonedDateTime.prototype.daysInMonth")}} {{experimental_inline}}
  - : Gibt eine positive ganze Zahl zurück, die die Anzahl der Tage im Monat dieses Datums darstellt. [Kalender](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars)-abhängig.
- {{jsxref("Temporal/ZonedDateTime/daysInWeek", "Temporal.ZonedDateTime.prototype.daysInWeek")}} {{experimental_inline}}
  - : Gibt eine positive ganze Zahl zurück, die die Anzahl der Tage in der Woche dieses Datums darstellt. [Kalender](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars)-abhängig. Für den ISO 8601-Kalender sind es immer 7 Tage, aber in anderen Kalendersystemen kann es von Woche zu Woche unterschiedlich sein.
- {{jsxref("Temporal/ZonedDateTime/daysInYear", "Temporal.ZonedDateTime.prototype.daysInYear")}} {{experimental_inline}}
  - : Gibt eine positive ganze Zahl zurück, die die Anzahl der Tage im Jahr dieses Datums darstellt. [Kalender](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars)-abhängig. Für den ISO 8601-Kalender sind es 365 Tage, oder 366 in einem Schaltjahr.
- {{jsxref("Temporal/ZonedDateTime/epochMilliseconds", "Temporal.ZonedDateTime.prototype.epochMilliseconds")}} {{experimental_inline}}
  - : Gibt eine Ganzzahl zurück, die die Anzahl der Millisekunden darstellt, die seit dem Unix-Epoch (Mitternacht, zu Beginn des 1. Januar 1970, UTC) bis zum aktuellen Moment vergangen sind. Entspricht der Teilung von `epochNanoseconds` durch `1e6` und dem Runden des Ergebnisses.
- {{jsxref("Temporal/ZonedDateTime/epochNanoseconds", "Temporal.ZonedDateTime.prototype.epochNanoseconds")}} {{experimental_inline}}
  - : Gibt eine {{jsxref("BigInt")}} zurück, die die Anzahl der Nanosekunden darstellt, die seit dem Unix-Epoch (Mitternacht, zu Beginn des 1. Januar 1970, UTC) bis zum aktuellen Moment vergangen sind.
- {{jsxref("Temporal/ZonedDateTime/era", "Temporal.ZonedDateTime.prototype.era")}} {{experimental_inline}}
  - : Gibt eine kalender-spezifische, kleingeschriebene Zeichenfolge zurück, die die Ära dieses Datums darstellt, oder `undefined`, wenn der Kalender keine Ären verwendet (z. B. ISO 8601). `era` und `eraYear` identifizieren gemeinsam ein Jahr in einem Kalender eindeutig, genauso wie es `year` tut. [Kalender](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars)-abhängig. Für den gregorianischen Kalender ist es entweder `"gregory"` oder `"gregory-inverse"`.
- {{jsxref("Temporal/ZonedDateTime/eraYear", "Temporal.ZonedDateTime.prototype.eraYear")}} {{experimental_inline}}
  - : Gibt eine nicht negative ganze Zahl zurück, die das Jahr dieses Datums innerhalb der Ära darstellt, oder `undefined`, wenn der Kalender keine Ären verwendet (z. B. ISO 8601). Der Jahresindex beginnt normalerweise bei 1 (häufiger) oder 0, und Jahre in einer Ära können mit der Zeit abnehmen (z. B. Gregorianisch VZ). `era` und `eraYear` identifizieren gemeinsam ein Jahr in einem Kalender eindeutig, genauso wie es `year` tut. [Kalender](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars)-abhängig.
- {{jsxref("Temporal/ZonedDateTime/hour", "Temporal.ZonedDateTime.prototype.hour")}} {{experimental_inline}}
  - : Gibt eine ganze Zahl von 0 bis 23 zurück, die die Stundenkomponente dieser Zeit darstellt.
- {{jsxref("Temporal/ZonedDateTime/hoursInDay", "Temporal.ZonedDateTime.prototype.hoursInDay")}} {{experimental_inline}}
  - : Gibt eine positive ganze Zahl zurück, die die Anzahl der Stunden im Tag dieses Datums in der Zeitzone darstellt. Es kann mehr oder weniger als 24 sein im Falle von Offset-Änderungen wie der Sommerzeit.
- {{jsxref("Temporal/ZonedDateTime/inLeapYear", "Temporal.ZonedDateTime.prototype.inLeapYear")}} {{experimental_inline}}
  - : Gibt einen boolean zurück, der angibt, ob dieses Datum in einem Schaltjahr liegt. Ein Schaltjahr ist ein Jahr, das mehr Tage hat (aufgrund eines Schalttages oder Schaltmonats) als ein gewöhnliches Jahr. [Kalender](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars)-abhängig.
- {{jsxref("Temporal/ZonedDateTime/microsecond", "Temporal.ZonedDateTime.prototype.microsecond")}} {{experimental_inline}}
  - : Gibt eine ganze Zahl von 0 bis 999 zurück, die die Mikrosekunde (10<sup>-6</sup> Sekunde) Komponente dieser Zeit darstellt.
- {{jsxref("Temporal/ZonedDateTime/millisecond", "Temporal.ZonedDateTime.prototype.millisecond")}} {{experimental_inline}}
  - : Gibt eine ganze Zahl von 0 bis 999 zurück, die die Millisekunde (10<sup>-3</sup> Sekunde) Komponente dieser Zeit darstellt.
- {{jsxref("Temporal/ZonedDateTime/minute", "Temporal.ZonedDateTime.prototype.minute")}} {{experimental_inline}}
  - : Gibt eine ganze Zahl von 0 bis 59 zurück, die die Minutenkomponente dieser Zeit darstellt.
- {{jsxref("Temporal/ZonedDateTime/month", "Temporal.ZonedDateTime.prototype.month")}} {{experimental_inline}}
  - : Gibt eine positive ganze Zahl zurück, die den auf einer 1 basierenden Monatsindex des Jahres dieses Datums darstellt. Der erste Monat dieses Jahres ist `1`, und der letzte Monat ist {{jsxref("Temporal/ZonedDateTime/monthsInYear", "monthsInYear")}}. [Kalender](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars)-abhängig. Beachten Sie, dass im Gegensatz zu {{jsxref("Date.prototype.getMonth()")}}, der Index auf 1 basiert. Wenn der Kalender Schaltmonate hat, dann kann der Monat mit dem gleichen {{jsxref("Temporal/ZonedDateTime/monthCode", "monthCode")}} unterschiedliche `month`-Indizes für verschiedene Jahre haben.
- {{jsxref("Temporal/ZonedDateTime/monthCode", "Temporal.ZonedDateTime.prototype.monthCode")}} {{experimental_inline}}
  - : Gibt eine kalender-spezifische Zeichenfolge zurück, die den Monat dieses Datums darstellt. [Kalender](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars)-abhängig. Normalerweise ist es `M` plus eine zweistellige Monatsnummer. Für Schaltmonate ist es der Code des vorherigen Monats, gefolgt von `L`. Wenn der Schaltmonat der erste Monat des Jahres ist, ist der Code `M00L`.
- {{jsxref("Temporal/ZonedDateTime/monthsInYear", "Temporal.ZonedDateTime.prototype.monthsInYear")}} {{experimental_inline}}
  - : Gibt eine positive ganze Zahl zurück, die die Anzahl der Monate im Jahr dieses Datums darstellt. [Kalender](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars)-abhängig. Für den ISO 8601-Kalender beträgt dies immer 12, aber in anderen Kalendersystemen kann dies unterschiedlich sein.
- {{jsxref("Temporal/ZonedDateTime/nanosecond", "Temporal.ZonedDateTime.prototype.nanosecond")}} {{experimental_inline}}
  - : Gibt eine ganze Zahl von 0 bis 999 zurück, die die Nanosekunde (10<sup>-9</sup> Sekunde) Komponente dieser Zeit darstellt.
- {{jsxref("Temporal/ZonedDateTime/offset", "Temporal.ZonedDateTime.prototype.offset")}} {{experimental_inline}}
  - : Gibt eine Zeichenfolge zurück, die den [Versatz](#zeitzonen_und_versätze) darstellt, der verwendet wird, um den internen Moment zu interpretieren, in der Form `±HH:mm` (oder `±HH:mm:ss.sssssssss` mit so viel subminute Präzision wie nötig).
- {{jsxref("Temporal/ZonedDateTime/offsetNanoseconds", "Temporal.ZonedDateTime.prototype.offsetNanoseconds")}} {{experimental_inline}}
  - : Gibt eine ganze Zahl zurück, die den [Versatz](#zeitzonen_und_versätze) darstellt, der verwendet wird, um den internen Moment zu interpretieren, als eine Anzahl von Nanosekunden (positiv oder negativ).
- {{jsxref("Temporal/ZonedDateTime/second", "Temporal.ZonedDateTime.prototype.second")}} {{experimental_inline}}
  - : Gibt eine ganze Zahl von 0 bis 59 zurück, die die Sekundenkomponente dieser Zeit darstellt.
- {{jsxref("Temporal/ZonedDateTime/timeZoneId", "Temporal.ZonedDateTime.prototype.timeZoneId")}} {{experimental_inline}}
  - : Gibt eine Zeichenfolge zurück, die den [Zeitzonen-Bezeichner](#zeitzonen_und_versätze) darstellt, der verwendet wird, um den internen Moment zu interpretieren. Es verwendet den gleichen String, der beim Erstellen des `Temporal.ZonedDateTime`-Objekts verwendet wurde, entweder ein IANA-Zeitzonenname oder ein fester Offset.
- {{jsxref("Temporal/ZonedDateTime/weekOfYear", "Temporal.ZonedDateTime.prototype.weekOfYear")}} {{experimental_inline}}
  - : Gibt eine positive ganze Zahl zurück, die den auf einer 1 basierenden Wochenindex im {{jsxref("Temporal/ZonedDateTime/yearOfWeek", "yearOfWeek")}} dieses Datums darstellt, oder `undefined`, wenn der Kalender kein gut definiertes Wochensystem hat. Die erste Woche des Jahres ist `1`. [Kalender](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars)-abhängig. Beachten Sie, dass für ISO 8601 die ersten und letzten Tage des Jahres zur letzten Woche des vorherigen Jahres oder zur ersten Woche des nächsten Jahres zählen können.
- {{jsxref("Temporal/ZonedDateTime/year", "Temporal.ZonedDateTime.prototype.year")}} {{experimental_inline}}
  - : Gibt eine ganze Zahl zurück, die die Anzahl der Jahre dieses Datums relativ zum Beginn eines kalender-spezifischen Epochjahres darstellt. [Kalender](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars)-abhängig. Normalerweise ist das Jahr 1 entweder das erste Jahr der letzten Ära oder das ISO 8601-Jahr `0001`. Wenn die Epoche in der Mitte des Jahres liegt, hat dieses Jahr denselben Wert vor und nach dem Startdatum der Ära.
- {{jsxref("Temporal/ZonedDateTime/yearOfWeek", "Temporal.ZonedDateTime.prototype.yearOfWeek")}} {{experimental_inline}}
  - : Gibt eine ganze Zahl zurück, die das Jahr darstellt, das mit der {{jsxref("Temporal/ZonedDateTime/weekOfYear", "weekOfYear")}} dieses Datums gepaart werden soll, oder `undefined`, wenn der Kalender kein gut definiertes Wochensystem hat. [Kalender](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars)-abhängig. Normalerweise ist dies das Jahr des Datums, aber für ISO 8601 können die ersten und letzten Tage des Jahres zur letzten Woche des vorherigen Jahres oder zur ersten Woche des nächsten Jahres gezählt werden, sodass sich das `yearOfWeek` um 1 unterscheiden kann.
- `Temporal.ZonedDateTime.prototype[Symbol.toStringTag]`
  - : Der Anfangswert der [`[Symbol.toStringTag]`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag) Eigenschaft ist die Zeichenfolge `"Temporal.ZonedDateTime"`. Diese Eigenschaft wird in {{jsxref("Object.prototype.toString()")}} verwendet.

## Instanzmethoden

- {{jsxref("Temporal/ZonedDateTime/add", "Temporal.ZonedDateTime.prototype.add()")}} {{experimental_inline}}
  - : Gibt ein neues `Temporal.ZonedDateTime`-Objekt zurück, das diese Datum-Zeit nach vorn verschoben um eine gegebene Dauer (in einer Form, die von {{jsxref("Temporal/Duration/from", "Temporal.Duration.from()")}} konvertierbar ist) darstellt.
- {{jsxref("Temporal/ZonedDateTime/equals", "Temporal.ZonedDateTime.prototype.equals()")}} {{experimental_inline}}
  - : Gibt `true` zurück, wenn diese Datum-Zeit in Wert zu einer anderen Datum-Zeit gleichwertig ist (in einer Form, die von {{jsxref("Temporal/ZonedDateTime/from", "Temporal.ZonedDateTime.from()")}} konvertierbar ist), und `false` ansonsten. Sie werden sowohl durch ihre Momentwerte, Zeitzonen als auch durch ihre Kalender verglichen, sodass zwei Datum-Zeiten aus verschiedenen Kalendern oder Zeitzonen als gleich durch {{jsxref("Temporal/ZonedDateTime/compare", "Temporal.ZonedDateTime.compare()")}} betrachtet werden können, aber nicht durch `equals()`.
- {{jsxref("Temporal/ZonedDateTime/getTimeZoneTransition", "Temporal.ZonedDateTime.prototype.getTimeZoneTransition()")}} {{experimental_inline}}
  - : Gibt ein `Temporal.ZonedDateTime`-Objekt zurück, das den ersten Moment nach oder vor diesem Moment darstellt, bei dem sich der UTC-Offset der Zeitzone ändert, oder `null`, wenn es keinen solchen Übergang gibt. Dies ist nützlich, um die Offset-Regeln einer Zeitzone zu ermitteln, z. B. ihr Sommerzeitmuster.
- {{jsxref("Temporal/ZonedDateTime/round", "Temporal.ZonedDateTime.prototype.round()")}} {{experimental_inline}}
  - : Gibt ein neues `Temporal.ZonedDateTime`-Objekt zurück, das diese Datum-Zeit, gerundet auf die gegebene Einheit, darstellt.
- {{jsxref("Temporal/ZonedDateTime/since", "Temporal.ZonedDateTime.prototype.since()")}} {{experimental_inline}}
  - : Gibt ein neues {{jsxref("Temporal.Duration")}}-Objekt zurück, das die Dauer von einer anderen Datum-Zeit (in einer Form, die von {{jsxref("Temporal/ZonedDateTime/from", "Temporal.ZonedDateTime.from()")}} konvertierbar ist) zu dieser Datum-Zeit darstellt. Die Dauer ist positiv, wenn die andere Datum-Zeit vor dieser Datum-Zeit ist und negativ, wenn danach.
- {{jsxref("Temporal/ZonedDateTime/startOfDay", "Temporal.ZonedDateTime.prototype.startOfDay()")}} {{experimental_inline}}
  - : Gibt ein `Temporal.ZonedDateTime`-Objekt zurück, das den ersten Moment dieses Datums in der Zeitzone darstellt. Es hat normalerweise eine Zeit von `00:00:00`, aber kann anders sein, wenn Mitternacht aufgrund von Offset-Änderungen nicht existiert, in welchem Fall die erste existierende Zeit zurückgegeben wird.
- {{jsxref("Temporal/ZonedDateTime/subtract", "Temporal.ZonedDateTime.prototype.subtract()")}} {{experimental_inline}}
  - : Gibt ein neues `Temporal.ZonedDateTime`-Objekt zurück, das diese Datum-Zeit, rückwärts verschoben um eine gegebene Dauer (in einer Form, die von {{jsxref("Temporal/Duration/from", "Temporal.Duration.from()")}} konvertierbar ist), darstellt.
- {{jsxref("Temporal/ZonedDateTime/toInstant", "Temporal.ZonedDateTime.prototype.toInstant()")}} {{experimental_inline}}
  - : Gibt ein neues {{jsxref("Temporal.Instant")}}-Objekt zurück, das den Moment dieser Datum-Zeit darstellt.
- {{jsxref("Temporal/ZonedDateTime/toJSON", "Temporal.ZonedDateTime.prototype.toJSON()")}} {{experimental_inline}}
  - : Gibt eine Zeichenfolge zurück, die diese Datum-Zeit im gleichen [RFC 9557-Format](#rfc_9557-format) darstellt wie ein Aufruf von {{jsxref("Temporal/ZonedDateTime/toString", "toString()")}}. Soll implizit von {{jsxref("JSON.stringify()")}} aufgerufen werden.
- {{jsxref("Temporal/ZonedDateTime/toLocaleString", "Temporal.ZonedDateTime.prototype.toLocaleString()")}} {{experimental_inline}}
  - : Gibt eine Zeichenfolge zurück, die eine sprachsensitiv Darstellung dieser Datum-Zeit bietet.
- {{jsxref("Temporal/ZonedDateTime/toPlainDate", "Temporal.ZonedDateTime.prototype.toPlainDate()")}} {{experimental_inline}}
  - : Gibt ein neues {{jsxref("Temporal.PlainDate")}}-Objekt zurück, das den Datumsanteil dieser Datum-Zeit darstellt.
- {{jsxref("Temporal/ZonedDateTime/toPlainDateTime", "Temporal.ZonedDateTime.prototype.toPlainDateTime()")}} {{experimental_inline}}
  - : Gibt ein neues {{jsxref("Temporal.PlainDateTime")}}-Objekt zurück, das den Datum- und Zeitanteil dieser Datum-Zeit darstellt. Nur die Zeitzoneninformationen werden entfernt.
- {{jsxref("Temporal/ZonedDateTime/toPlainTime", "Temporal.ZonedDateTime.prototype.toPlainTime()")}} {{experimental_inline}}
  - : Gibt ein neues {{jsxref("Temporal.PlainTime")}}-Objekt zurück, das den Zeitanteil dieser Datum-Zeit darstellt.
- {{jsxref("Temporal/ZonedDateTime/toString", "Temporal.ZonedDateTime.prototype.toString()")}} {{experimental_inline}}
  - : Gibt eine Zeichenfolge zurück, die diese Datum-Zeit im [RFC 9557-Format](#rfc_9557-format) darstellt.
- {{jsxref("Temporal/ZonedDateTime/until", "Temporal.ZonedDateTime.prototype.until()")}} {{experimental_inline}}
  - : Gibt ein neues {{jsxref("Temporal.Duration")}}-Objekt zurück, das die Dauer von dieser Datum-Zeit zu einer anderen Datum-Zeit (in einer Form, die von {{jsxref("Temporal/ZonedDateTime/from", "Temporal.ZonedDateTime.from()")}} konvertierbar ist) darstellt. Die Dauer ist positiv, wenn die andere Datum-Zeit nach dieser Datum-Zeit ist und negativ, wenn davor.
- {{jsxref("Temporal/ZonedDateTime/valueOf", "Temporal.ZonedDateTime.prototype.valueOf()")}} {{experimental_inline}}
  - : Wirft einen {{jsxref("TypeError")}}, der verhindert, dass `Temporal.ZonedDateTime`-Instanzen [implizit in primitive Werte umgewandelt werden](/de/docs/Web/JavaScript/Guide/Data_structures#primitive_coercion) wenn sie in arithmetischen oder Vergleichsoperationen verwendet werden.
- {{jsxref("Temporal/ZonedDateTime/with", "Temporal.ZonedDateTime.prototype.with()")}} {{experimental_inline}}
  - : Gibt ein neues `Temporal.ZonedDateTime`-Objekt zurück, das diese Datum-Zeit mit einigen durch neue Werte ersetzten Feldern darstellt.
- {{jsxref("Temporal/ZonedDateTime/withCalendar", "Temporal.ZonedDateTime.prototype.withCalendar()")}} {{experimental_inline}}
  - : Gibt ein neues `Temporal.ZonedDateTime`-Objekt zurück, das diese Datum-Zeit im neuen Kalendersystem interpretiert darstellt.
- {{jsxref("Temporal/ZonedDateTime/withPlainTime", "Temporal.ZonedDateTime.prototype.withPlainTime()")}} {{experimental_inline}}
  - : Gibt ein neues `Temporal.ZonedDateTime`-Objekt zurück, das diese Datum-Zeit darstellt, wobei der Zeitanteil vollständig durch die neue Zeit ersetzt wird (in einer Form, die von {{jsxref("Temporal/PlainTime/from", "Temporal.PlainTime.from()")}} konvertierbar ist).
- {{jsxref("Temporal/ZonedDateTime/withTimeZone", "Temporal.ZonedDateTime.prototype.withTimeZone()")}} {{experimental_inline}}
  - : Gibt ein neues `Temporal.ZonedDateTime`-Objekt zurück, das denselben Moment darstellt wie diese Datum-Zeit, jedoch in der neuen Zeitzone.

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
