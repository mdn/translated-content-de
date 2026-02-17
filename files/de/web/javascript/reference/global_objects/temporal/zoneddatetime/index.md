---
title: Temporal.ZonedDateTime
slug: Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime
l10n:
  sourceCommit: 9b86874b5762b52ce0055f58d561004d1a204ad5
---

Das **`Temporal.ZonedDateTime`** Objekt stellt ein Datum und eine Uhrzeit mit einer Zeitzone dar. Es wird im Wesentlichen als Kombination aus einem [Instant](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/Instant), einer Zeitzone und einem Kalendersystem dargestellt.

## Beschreibung

Ein `ZonedDateTime` dient als Brücke zwischen einer genauen Zeit und einer Wand-Uhrzeit: Es repräsentiert gleichzeitig einen historischen Moment (wie ein {{jsxref("Temporal.Instant")}}) und eine lokale Wand-Uhrzeit (wie ein {{jsxref("Temporal.PlainDateTime")}}). Es speichert dazu den Moment, die Zeitzone und das Kalendersystem. Die Zeitzone wird verwendet, um zwischen dem Moment und der lokalen Zeit zu konvertieren, und das Kalendersystem dient zur Interpretation der lokalen Zeit.

`ZonedDateTime` ist die einzige `Temporal`-Klasse, die sich der Zeitzone bewusst ist. Die Hinzufügung einer Zeitzone führt zu wichtigen Verhaltensunterschieden gegenüber {{jsxref("Temporal.PlainDateTime")}} Objekten. Insbesondere kann man nicht mehr davon ausgehen, dass "die Zeit eine Minute danach" an jedem Tag gleich ist oder dass ein Tag 24 Stunden hat. Im schlimmsten Fall kann ein ganzer Tag aus dem lokalen Kalender fehlen. Unten gibt es einen kurzen Überblick über Zeitzonen und Offsets und wie sie die Umrechnung zwischen UTC-Zeit und lokaler Zeit beeinflussen.

### Zeitzonen und Offsets

Alle Zeiten in JavaScript haben einen goldenen Standard: die UTC-Zeit, die kontinuierlich und gleichmäßig im physischen Zeitverlauf fortschreitet. Im Gegensatz dazu sind Benutzer mehr an ihrer lokalen Zeit interessiert, die sie auf ihren Kalendern und Uhren ablesen. Der Prozess der Umrechnung zwischen UTC-Zeit und lokaler Zeit beinhaltet ein Zeitzonen-Offset, welches berechnet wird als:

```plain
local time = UTC time + offset
```

Beispielsweise, wenn die UTC-Zeit 1970-01-01T00:00:00 ist und der Offset "-05:00" beträgt, dann ist die lokale Zeit:

```plain
1970-01-01T00:00:00 + -05:00 = 1969-12-31T19:00:00
```

Indem man dieser lokalen Zeit den Offset anfügt und sie als "1969-12-31T19:00:00-05:00" ausdrückt, kann sie nun unmissverständlich als Moment in der Geschichte verstanden werden.

Um den Offset zu kennen, benötigen wir zwei Informationen, die _Zeitzone_ und den _Moment_. Die Zeitzone ist eine Region auf der Erde, in der immer derselbe Offset verwendet wird. Zwei Uhren in derselben Zeitzone zeigen immer zur gleichen Zeit dasselbe an, aber der Offset ist nicht unbedingt konstant: Zeiten dieser Uhren können abrupt wechseln. Dies geschieht üblicherweise während der Umstellung auf und von der Sommerzeit, bei der der Offset um eine Stunde geändert wird, was zweimal im Jahr vorkommt. Auch politische Änderungen, z.B. das Wechseln einer Zeitzone eines Landes, können zu dauerhaften Offset-Änderungen führen.

Die Zeitzonen sind in der [IANA Time Zone Database](https://www.iana.org/time-zones) gespeichert. Jede IANA-Zeitzone hat:

- Einen _primären Zeitzonen-Identifier_, der die Zeitzone eindeutig identifiziert. Er bezieht sich in der Regel auf ein geografisches Gebiet, verankert durch eine Stadt (z. B. `Europe/Paris` oder `Africa/Kampala`), kann aber auch Einzel-Offset-Zeitzonen wie `UTC` (ein konstanter `+00:00` Offset) oder `Etc/GMT+5` (welcher aus historischen Gründen ein negativer Offset `-05:00` ist) bezeichnen. Aus historischen Gründen ist der primäre Name für die UTC-Zeitzone `UTC`, obwohl in IANA `Etc/UTC`.
- Eine _Zeitzonendefinition_ in Form einer Tabelle, die UTC-Datum/Zeit-Bereiche (einschließlich zukünftiger Bereiche) spezifischen Offsets zuordnet.
- Null oder mehr _nicht-primäre Zeitzonen-Identifikatoren_, die Aliase des primären Zeitzonen-Identifikators sind. Diese sind normalerweise historische Namen, die nicht mehr verwendet werden, aber aus Gründen der Kompatibilität erhalten bleiben. Siehe unten für weitere Informationen.

Bei der Eingabe werden benannte Identifikatoren ohne Berücksichtigung der Groß- und Kleinschreibung verglichen. Intern werden sie in ihrer bevorzugten Schreibweise gespeichert und nicht-primäre Identifikatoren werden _nicht_ in ihren primären Identifikator umgewandelt.

> [!NOTE]
> Beim Setzen des Zeitzonennamens wollen Sie diesen selten auf `"UTC"` festlegen. `ZonedDateTime` ist dazu gedacht, Benutzern angezeigt zu werden, aber kein Mensch lebt in der Zeitzone "UTC". Wenn Sie die Zeitzone zur Konstruktionszeit nicht kennen, aber die Wand-Uhrzeit, verwenden Sie einen {{jsxref("Temporal.PlainDateTime")}}. Wenn Sie den genauen Moment kennen, verwenden Sie einen {{jsxref("Temporal.Instant")}}.

Wenn eine `Temporal`-API einen _Zeitzonen-Identifier_ akzeptiert, akzeptiert sie neben primären und nicht-primären Zeitzonen-Identifikatoren auch einen _Offset-Zeitzonen-Identifier_, der dieselbe Form wie der Offset hat, außer dass Bruchteile von Minuten nicht erlaubt sind. Zum Beispiel sind `+05:30`, `-08`, `+0600` alle gültige Offset-Identifikatoren. Intern werden Offset-Identifikatoren in der Form `±HH:mm` gespeichert.

> [!NOTE]
> Vermeiden Sie die Verwendung von Offset-Identifikatoren, wenn es eine benannte Zeitzone gibt, die Sie stattdessen verwenden können. Auch wenn eine Region immer einen einzigen Offset verwendet hat, ist es besser, den benannten Identifier zu verwenden, um sich gegen zukünftige politische Änderungen des Offsets abzusichern.
>
> Wenn eine Region mehrere Offsets verwendet (oder verwendet hat), ist die Verwendung ihrer benannten Zeitzone noch wichtiger. Dies liegt daran, dass `Temporal.ZonedDateTime` Methoden wie `add` oder `with` verwenden kann, um neue Instanzen zu erstellen, die einem anderen Moment entsprechen. Wenn diese abgeleiteten Instanzen einem Moment entsprechen, der einen anderen Offset verwendet (zum Beispiel nach einer Sommerzeitumstellung), dann werden Ihre Berechnungen eine falsche lokale Zeit haben. Die Verwendung einer benannten Zeitzone stellt sicher, dass lokale Daten und Zeiten immer auf den richtigen Offset für diesen Moment angepasst werden.

Zur Bequemlichkeit, wenn Sie einen Zeitzonen-Identifier an `Temporal`-APIs wie `Temporal.ZonedDateTime.prototype.withTimeZone()` und die `timeZoneId`-Option von `Temporal.ZonedDateTime.from()` übergeben, können Sie ihn in einigen anderen Formen angeben:

- Als eine andere `ZonedDateTime`-Instanz, deren `timeZoneId` verwendet wird.
- Als eine [RFC 9557 Zeichenkette](#rfc_9557_format) mit einer Zeitzonenanmerkung, deren Zeitzonen-Identifier verwendet wird.
- Als eine ISO 8601 / RFC 3339 Zeichenkette mit einem Offset, dessen Offset als Offset-Identifikator verwendet wird; oder, wenn `Z` verwendet wird, wird die Zeitzone `"UTC"` verwendet. Diese Verwendung wird im Allgemeinen nicht empfohlen, da, wie oben diskutiert, Offset-Identifikatoren die Fähigkeit fehlt, andere `Temporal.ZonedDateTime`-Instanzen sicher über eine Offset-Übergangszeit wie beim Beginn oder Ende der Sommerzeit abzuleiten. Ziehen Sie stattdessen in Betracht, einfach `Temporal.Instant` zu verwenden oder die tatsächliche benannte Zeitzone des Benutzers zu ermitteln.

Die IANA-Zeitzonendatenbank ändert sich von Zeit zu Zeit, normalerweise um neue Zeitzonen als Reaktion auf politische Änderungen hinzuzufügen. Gelegentlich werden jedoch IANA-Zeitzonenbezeichnungen umbenannt, um aktualisierte englische Übersetzungen eines Städtenamens zu reflektieren oder veraltete Benennungen zu aktualisieren. Zum Beispiel gibt es hier einige bemerkenswerte Namensänderungen:

| Aktuelle IANA-Hauptbezeichnung   | Alte, jetzt nicht-primäre Bezeichnung |
| -------------------------------- | ------------------------------------- |
| `America/Argentina/Buenos_Aires` | `America/Buenos_Aires`                |
| `Asia/Kolkata`                   | `Asia/Calcutta`                       |
| `Asia/Ho_Chi_Minh`               | `Asia/Saigon`                         |
| `Europe/Kyiv`                    | `Europe/Kiev`                         |

Historisch verursachten diese Umbenennungen Probleme für Programmierer, da die Unicode [CLDR-Datenbank](https://github.com/unicode-org/cldr/blob/main/common/bcp47/timezone.xml) (eine Bibliothek, auf die sich Browser verlassen, um Zeitzonen-Identifikatoren und Daten bereitzustellen) IANAs Umbenennung nicht für [Stabilitätsgründe](https://unicode.org/reports/tr35/#Time_Zone_Identifiers) folgte. Daher berichteten einige Browser wie Chrome und Safari veraltete Identifikatoren von CLDR, während andere Browser wie Firefox CLDRs Standardeinstellungen überschrieben und die aktuellen primären Identifikatoren meldeten.

Mit der Einführung von Temporal ist dieses Verhalten jetzt stärker standardisiert:

- [CLDR-Daten](https://github.com/unicode-org/cldr/blob/main/common/bcp47/timezone.xml) enthalten jetzt ein `"_iana"`-Attribut, das den aktuellsten Identifikator angibt, falls der ältere, stabile Identifier umbenannt wurde. Browser können dieses neue Attribut verwenden, um aktuelle Identifikatoren an Aufrufer bereitzustellen.
- Die von Programmierern angegebenen Zeitzonenbezeichnungen werden nie durch ein Alias ersetzt. Zum Beispiel, wenn der Anrufer `Asia/Calcutta` oder `Asia/Kolkata` als Identifier-Eingabe an {{jsxref("Temporal/ZonedDateTime/from", "Temporal.ZonedDateTime.from()")}} angibt, wird derselbe Identifier im resultierenden Instanz-{{jsxref("Temporal/ZonedDateTime/timeZoneId", "timeZoneId")}} zurückgegeben. Beachten Sie, dass die Groß- und Kleinschreibung der Ausgaben normalisiert wird, um mit IANA übereinzustimmen, sodass `ASIA/calCuTTa` als Eingabe ein {{jsxref("Temporal/ZonedDateTime/timeZoneId", "timeZoneId")}} von `Asia/Calcutta` als Ausgabe erzeugt.
- Wenn ein Zeitzonen-Identifikator nicht von einem Anrufer bereitgestellt, sondern stattdessen vom System selbst bezogen wird (zum Beispiel bei Verwendung von {{jsxref("Temporal/Now/timeZoneId", "Temporal.Now.timeZoneId()")}}), werden aktuelle Identifikatoren in allen Browsern zurückgegeben. Bei Namensänderungen von Städten gibt es eine zweijährige Verzögerung, bevor diese von Systemen bereitgestellte Identifikatoren-APIs den neuen Namen anzeigen, sodass anderen Komponenten (wie einem Node-Server) Zeit gegeben wird, ihre Kopien der IANA-Datenbank zu aktualisieren, um den neuen Namen zu erkennen.

Anmerkung, dass die Zuschreibung von primären Identifikatoren den Ländercode bewahrt: beispielsweise zeichnet die IANA-Datenbank `Atlantic/Reykjavik` als ein Alias für `Africa/Abidjan` auf, aber da sie verschiedenen Ländern (Island und Côte d’Ivoire, jeweils) entsprechen, werden sie als unterschiedliche primäre Identifikatoren behandelt.

Diese Standardisierung gilt auch außerhalb von `Temporal`. Zum Beispiel wird die `timeZone`-Option, die von {{jsxref("Intl/DateTimeFormat/resolvedOptions", "Intl.DateTimeFormat.prototype.resolvedOptions()")}} zurückgegeben wird, ebenfalls niemals durch ein Alias ersetzt, obwohl Browser diese Identifikatoren traditionell vor der Standardisierung durch Temporal kanonisiert haben. Andererseits werden {{jsxref("Intl/Locale/getTimeZones", "Intl.Locale.prototype.getTimeZones()")}} und {{jsxref("Intl.supportedValuesOf()")}} (`timeZone`-Option) den aktuellsten Identifier zurückgeben, während einige Browser früher den alten, nicht-primären Identifier zurückgaben.

### RFC 9557 Format

`ZonedDateTime` Objekte können im [RFC 9557](https://datatracker.ietf.org/doc/html/rfc9557) Format serialisiert und geparst werden, einer Erweiterung des [ISO 8601 / RFC 3339](https://datatracker.ietf.org/doc/html/rfc3339) Formats. Die Zeichenkette hat folgende Form (Abstände sind nur zur Lesbarkeit und sollten in der tatsächlichen Zeichenkette nicht vorhanden sein):

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
  - : Der Datum-Uhrzeit-Trenner, der `T`, `t` oder ein Leerzeichen sein kann. Nur vorhanden, wenn `HH` vorhanden ist.
- `HH` {{optional_inline}}
  - : Eine zweistellige Zahl von `00` bis `23`. Standardwert ist `00`.
- `mm` {{optional_inline}}
  - : Eine zweistellige Zahl von `00` bis `59`. Standardwert ist `00`.
- `ss.sssssssss` {{optional_inline}}
  - : Eine zweistellige Zahl von `00` bis `59`. Kann optional von einem `.` oder `,` und einer bis neun Ziffern gefolgt werden. Standardwert ist `00`. Die `HH`, `mm` und `ss` Komponenten können durch `:` oder nichts getrennt werden. Man kann entweder nur `ss` oder sowohl `ss` als auch `mm` weglassen, sodass die Uhrzeit eine von drei Formen haben kann: `HH`, `HH:mm` oder `HH:mm:ss.sssssssss`.
- `Z/±HH:mm` {{optional_inline}}
  - : Entweder der UTC-Bezeichner `Z` oder `z`, oder ein Offset von UTC in der Form `+` oder `-`, gefolgt von dem gleichen Format wie die Zeitkomponente. Beachten Sie, dass Subminuten-Präzision (`:ss.sssssssss`) von anderen Systemen möglicherweise nicht unterstützt wird und akzeptiert, aber nie ausgegeben wird. Falls weggelassen, wird der Offset aus dem Zeitzonen-Identifier abgeleitet. Falls vorhanden, muss auch die Zeit bereitgestellt werden. `Z` ist nicht dasselbe wie `+00:00`: Ersteres bedeutet, dass die Zeit in UTC-Form angegeben wird, unabhängig vom Zeitzonen-Identifier, während Letzteres bedeutet, dass die Zeit in lokaler Zeit angegeben wird, die zufällig UTC+0 ist, und gegen den Zeitzonen-Identifier durch die [`offset` Option](#offset-mehrdeutigkeit) validiert wird.
- `[time_zone_id]`
  - : Ersetzen Sie `time_zone_id` durch den Zeitzonen-Identifier (benannt oder als Offset), wie oben beschrieben. Kann einen _kritischen Flag_ haben, indem der Identifier mit `!` vorangestellt wird: z.B. `[!America/New_York]`. Dieses Flag teilt anderen Systemen im Allgemeinen mit, dass es nicht ignoriert werden kann, wenn sie es nicht unterstützen. Beachten Sie, dass es für `Temporal.ZonedDateTime.from()` erforderlich ist: das Weglassen führt zu einem `RangeError`. Wenn Sie ISO 8601 / RFC 3339 Zeichenfolgen ohne Zeitzonen-Identifier-Anmerkungen parsen möchten, verwenden Sie {{jsxref("Temporal/Instant/from", "Temporal.Instant.from()")}} stattdessen.
- `[u-ca=calendar_id]` {{optional_inline}}
  - : Ersetzen Sie `calendar_id` durch den Kalender, der verwendet werden soll. Siehe [`Intl.supportedValuesOf()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/supportedValuesOf#supported_calendar_types) für eine Liste von allgemein unterstützten Kalendertypen. Standard ist `[u-ca=iso8601]`. Kann einen _kritischen Flag_ haben, indem der Schlüssel mit `!` vorangestellt wird: z.B. `[!u-ca=iso8601]`. Dieses Flag teilt anderen Systemen im Allgemeinen mit, dass es nicht ignoriert werden kann, wenn sie es nicht unterstützen. Der `Temporal` Parser wirft einen Fehler, wenn die Anmerkungen zwei oder mehr Kalender-Anmerkungen enthalten und eine davon kritisch ist. Beachten Sie, dass das Datum `YYYY-MM-DD` immer als ISO 8601 Kalenderdatum interpretiert und dann in den angegebenen Kalender umgewandelt wird.

Als Eingabe werden andere Anmerkungen im Format `[key=value]` ignoriert, und sie dürfen nicht das kritische Flag haben.

Beim Serialisieren können Sie die Anzahl der Bruchteilesekunden konfiguriert, ob der Offset/zeitzonen ID/Kalender ID angezeigt werden soll, und ob ein kritisches Flag für die Anmerkungen hinzugefügt werden soll.

### Zweideutigkeiten und Lücken bei der Umwandlung von Lokalzeit zu UTC-Zeit

Angenommen, wir haben eine Zeitzone, ist die Umwandlung von UTC zu Lokalzeit einfach: Sie erhalten zuerst den Offset mit dem Zeitzonennamen und dem Moment, dann addieren Sie den Offset zum Moment. Der umgekehrte Weg ist nicht wahr: Die Umwandlung von Lokalzeit zu UTC-Zeit ohne einen expliziten Offset ist zweideutig, da eine Lokalzeit zu null, einer oder vielen UTC-Zeiten gehören kann. Betrachten Sie den häufigsten Grund: Zeitumstellungen. Nehmen Sie das Beispiel New York. Sein Standard-Offset ist UTC-5, aber während der Sommerzeit werden alle Uhren um eine Stunde vorgestellt, sodass der Offset UTC-4 wird. In den USA erfolgen die Umstellungen um 2:00 Uhr Lokalzeit. Betrachten Sie diese zwei Umstellungstage:

| UTC-Zeit             | New York Zeit             |
| -------------------- | ------------------------- |
| 2024-03-10T06:58:00Z | 2024-03-10T01:58:00-05:00 |
| 2024-03-10T06:59:00Z | 2024-03-10T01:59:00-05:00 |
| 2024-03-10T07:00:00Z | 2024-03-10T03:00:00-04:00 |
| ---                  | ---                       |
| 2024-11-03T05:58:00Z | 2024-11-03T01:58:00-04:00 |
| 2024-11-03T05:59:00Z | 2024-11-03T01:59:00-04:00 |
| 2024-11-03T06:00:00Z | 2024-11-03T01:00:00-05:00 |

Wie Sie sehen können, verschwand im März eine Stunde aus der Lokalzeit, und im November haben wir zwei Stunden mit derselben Wand-Uhrzeit. Angenommen, wir haben ein `PlainDateTime` gespeichert, das "2024-03-10T02:05:00" sagt, und möchten es in der Zeitzone `America/New_York` interpretieren, dann wird es keine Zeit geben, die dem entspricht, während ein `PlainDateTime`, das "2024-11-03T01:05:00" sagt, zwei verschiedenen Momenten entsprechen kann.

Wenn ein `ZonedDateTime` aus einer Lokalzeit (unter Verwendung von {{jsxref("Temporal/ZonedDateTime/from", "Temporal.ZonedDateTime.from()")}}, {{jsxref("Temporal/ZonedDateTime/with", "Temporal.ZonedDateTime.prototype.with()")}}, {{jsxref("Temporal/PlainDateTime/toZonedDateTime", "Temporal.PlainDateTime.prototype.toZonedDateTime()")}}) konstruiert wird, ist das Verhalten für mehrdeutige Fälle und Lücken über die `disambiguation`-Option konfigurierbar:

- `earlier`
  - : Wenn es zwei mögliche Momente gibt, wählen Sie den früheren. Bei einer Lücke, gehen Sie um die Dauer der Lücke zurück.
- `later`
  - : Wenn es zwei mögliche Momente gibt, wählen Sie den späteren. Bei einer Lücke, gehen Sie um die Dauer der Lücke vor.
- `compatible` (Standard)
  - : Selbes Verhalten wie {{jsxref("Date")}}: Verwenden Sie `later` für Lücken und `earlier` für Mehrdeutigkeiten.
- `reject`
  - : Werfen Sie einen `RangeError`, wenn es eine Mehrdeutigkeit oder eine Lücke gibt.

Es gibt mehrere Fälle, in denen es keine Mehrdeutigkeit bei der Konstruktion eines `ZonedDateTime` gibt:

- Wenn die Zeit über den `Z` Offset in UTC angegeben ist.
- Wenn der Offset explizit bereitgestellt und verwendet wird (siehe unten).

### Offset-Mehrdeutigkeit

Wir haben bereits gezeigt, wie Mehrdeutigkeit durch die Interpretation einer Lokalzeit in einer Zeitzone ohne einen expliziten Offset entstehen kann. Wenn Sie jedoch einen expliziten Offset bereitstellen, entsteht ein weiterer Konflikt: zwischen dem angegebenen Offset und dem Offset, der aus der Zeitzone und der Lokalzeit berechnet wird. Dies ist ein unvermeidliches reales Problem: Wenn Sie eine Zeit in der Zukunft speichern, mit einem erwarteten Offset, dann kann sich die Zeitzonendefinition vor dieser Zeit aufgrund politischer Gründe ändern. Zum Beispiel, nehmen wir an, wir haben 2018 eine Erinnerung für die Zeit `2019-12-23T12:00:00-02:00[America/Sao_Paulo]` gesetzt (in der Sommerzeit; Brasilien befindet sich auf der südlichen Halbkugel, sodass es im Oktober auf Sommerzeit umschaltet und im Februar endet). Aber bevor diese Zeit kommt, beschließt Brasilien Anfang 2019, die Sommerzeit nicht mehr zu beachten, sodass der reale Offset `-03:00` wird. Sollte die Erinnerung jetzt immer noch zu Mittag klingeln (lokale Zeit beibehalten) oder um 11:00 Uhr (genaue Zeit beibehalten)?

Damit eine Offset-Mehrdeutigkeit existiert, muss ein Zeitstempel-String mit anderen IANA-Zeitzonen-Datenbankregeln geparst werden als die Regeln, die beim ursprünglichen Erzeugen des Zeitstempels verwendet wurden. Dies wird nie geschehen, wenn Zeitstempel während derselben Ausführung eines JavaScript-Programms generiert werden, da die ECMAScript-Spezifikation erfordert, dass die IANA-Zeitzonen-Datenbankregeln für die Lebensdauer eines JavaScript-Programms konsistent bleiben müssen.

Jedoch kann eine Offset-Mehrdeutigkeit existieren, wenn ein JavaScript-Programm Zeitstempel parst, die zuvor gespeichert wurden, wie im obigen Beispiel `America/Sao_Paulo`, und die IANA-Zeitzonen-Datenbank seit der ursprünglichen Generierung des Zeitstempels aktualisiert wurde. Es kann auch passieren, wenn Zeitstempel zwischen Computern (oder selten zwischen verschiedener Software auf demselben Computer!) kommuniziert werden, die unterschiedliche Versionen der IANA-Zeitzonen-Datenbank verwenden. Die IANA-Zeitzonen-Datenbank hat auch Build-Optionen (zum Beispiel die Verwendung oder Nichtverwendung veralteter Regeln in `backzone`), die bei der Kommunikation von Zeitstempeln zwischen Computern, die unterschiedliche Software verwenden, mit derselben IANA-Zeitzonen-Datenbank-Version zu einer Offset-Mehrdeutigkeit führen können.

Die Offset-Mehrdeutigkeit tritt selten auf und wird fast immer nur Zeitstempel vor 1970 oder für Zeitstempel betreffen, die Monate oder Jahre in der Zukunft liegen. Aber wenn dieses Problem auftritt, wird standardmäßig ein `RangeError` geworfen. Wenn ein `ZonedDateTime` mit {{jsxref("Temporal/ZonedDateTime/from", "Temporal.ZonedDateTime.from()")}} konstruiert oder mit der {{jsxref("Temporal/ZonedDateTime/with", "with()")}} Methode aktualisiert wird, können Sie diese Ausnahme verhindern, indem Sie die `offset`-Option verwenden, um zu entscheiden, ob der Offset oder der Zeitzonen-Identifier "gewinnt":

- `use`
  - : Verwenden Sie den Offset, um die genaue Zeit zu berechnen. Diese Option "verwendet" den Offset, um den durch den Zeitstempel-String beabsichtigten Moment zu bestimmen, auch wenn sich der Offset zu diesem Moment geändert hat. Der Zeitzonen-Identifier wird immer noch verwendet, um dann den (möglicherweise aktualisierten) Offset zu ermitteln und diesen Offset zu verwenden, um die genaue Zeit in Lokalzeit umzurechnen. Im obigen Beispiel `2019-12-23T12:00:00-02:00[America/Sao_Paulo]` würde diese Option dazu führen, dass die Erinnerung um 11:00 Uhr lokaler Zeit klingelt.
- `ignore`
  - : Verwenden Sie den Zeitzonen-Identifier, um den Offset neu zu berechnen, und ignorieren Sie den im String angegebenen Offset. Diese Option behält die ursprünglich gespeicherte Lokalzeit bei, kann jedoch zu einem anderen Moment führen. Beachten Sie, dass durch Ignorieren des Offsets dieselbe [Mehrdeutigkeit bei der Lokalzeitinterpretation](#zweideutigkeiten_und_luecken_bei_der_umwandlung_von_lokalzeit_zu_utc_zeit) auftreten kann, die mit der `disambiguation`-Option gelöst wird. Im obigen Beispiel `2019-12-23T12:00:00-02:00[America/Sao_Paulo]` würde diese Option dazu führen, dass die Erinnerung um 12:00 Uhr lokaler Zeit klingelt.
- `reject`
  - : Werfen Sie einen `RangeError`, wann immer es einen Konflikt zwischen dem Offset und dem Zeitzonen-Identifier gibt. Dies ist der Standard für {{jsxref("Temporal/ZonedDateTime/from", "Temporal.ZonedDateTime.from()")}}.
- `prefer`
  - : Verwenden Sie den Offset, wenn er gültig ist, andernfalls berechnen Sie den Offset aus dem Zeitzonen-Identifier. Dies ist der Standard für {{jsxref("Temporal/ZonedDateTime/with", "Temporal.ZonedDateTime.prototype.with()")}} (sehen Sie sich diese Methode für mehr Details an). Dies ist anders als `ignore`, da im Fall einer Lokalzeit-Mehrdeutigkeit der Offset verwendet wird, um sie zu lösen, anstatt die `disambiguation`-Option.

Wenn Sie im Voraus wissen, wie Sie die Offset-Mehrdeutigkeit handhaben möchten, sollten Sie in Betracht ziehen, die `offset`-Option zu verwenden, um Ausnahmen zu vermeiden, die standardmäßig geworfen werden. Beispielsweise möchte eine Kalenderanwendung wahrscheinlich, dass der Zeitzonen-Identifier "gewinnt", sodass wiederkehrende Meetings in der aktuellsten Lokalzeit für diese Zeitzone angezeigt werden. In diesem Fall ist `offset: "ignore"` angemessen. Auf der anderen Seite sollte eine Aufgabenplaner-Anwendung, die eine Aufgabe exakt 3 Stunden ab jetzt ausführt, wahrscheinlich `offset: "use"` auswählen, da Änderungen der Zeitzonenregeln nicht die Bedeutung von "3 Stunden ab jetzt" ändern sollten.

In einigen Fällen wissen Sie möglicherweise nicht, welche `offset`-Option ohne Input vom Benutzer die richtige ist. In diesen Fällen sollten Sie den `RangeError` abfangen und dann den Benutzer fragen, welche lokale Zeit die richtige ist. Versuchen Sie dann, das Parsen mit einer anderen `offset`-Option entsprechend der Wahl des Benutzers erneut.

Beachten Sie, dass der `Z` Offset nicht gleich `+00:00` ist. Der `Z` Offset bedeutet "die Zeit in UTC ist bekannt, aber der Offset zur Lokalzeit ist unbekannt", gemäß [RFC 9557](https://www.rfc-editor.org/rfc/rfc9557.html#name-update-to-rfc-3339). Wenn der Zeitstring den `Z` Offset verwendet, wird die `offset`-Option ignoriert und der Offset aus der Zeitzonen-ID abgeleitet. Andererseits wird der `+00:00` Offset als ein Lokale-Zeit-Offset interpretiert, der zufällig mit UTC übereinstimmt und gegen die Zeitzonen-ID validiert.

> [!NOTE]
> Obwohl {{jsxref("Temporal/Instant/from", "Temporal.Instant.from()")}} auch eine [RFC 9557](#rfc_9557_format) Zeichenfolge in derselben Form akzeptiert, gibt es keine Zweideutigkeit, da sie immer den Zeitzonen-Identifier ignoriert und nur den Offset liest.

## Konstruktor

- {{jsxref("Temporal/ZonedDateTime/ZonedDateTime", "Temporal.ZonedDateTime()")}} {{experimental_inline}}
  - : Erstellt ein neues `Temporal.ZonedDateTime` Objekt, indem die zugrunde liegenden Daten direkt bereitgestellt werden.

## Statische Methoden

- {{jsxref("Temporal/ZonedDateTime/compare", "Temporal.ZonedDateTime.compare()")}}
  - : Gibt eine Zahl (-1, 0 oder 1) zurück, die anzeigt, ob die erste Datum-Uhrzeit vor, gleichzeitig oder nach der zweiten Datum-Uhrzeit liegt. Äquivalent zum Vergleichen der {{jsxref("Temporal/ZonedDateTime/epochNanoseconds", "epochNanoseconds")}} der beiden Datum-Uhrzeiten.
- {{jsxref("Temporal/ZonedDateTime/from", "Temporal.ZonedDateTime.from()")}}
  - : Erstellt ein neues `Temporal.ZonedDateTime` Objekt aus einem anderen `Temporal.ZonedDateTime` Objekt, einem Objekt mit Datum, Uhrzeit und Zeitzoneneigenschaften oder einer [RFC 9557](#rfc_9557_format) Zeichenkette.

## Instanzeigenschaften

Diese Eigenschaften sind auf `Temporal.ZonedDateTime.prototype` definiert und werden von allen `Temporal.ZonedDateTime` Instanzen geteilt.

- {{jsxref("Temporal/ZonedDateTime/calendarId", "Temporal.ZonedDateTime.prototype.calendarId")}}
  - : Gibt eine Zeichenkette zurück, die den [Kalender](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars) darstellt, der zur Interpretation des internen ISO 8601-Datums verwendet wird.
- {{jsxref("Object/constructor", "Temporal.ZonedDateTime.prototype.constructor")}}
  - : Die Konstruktorfunktion, die das Instanzobjekt erstellt hat. Für `Temporal.ZonedDateTime` Instanzen ist der Anfangswert der {{jsxref("Temporal/ZonedDateTime/ZonedDateTime", "Temporal.ZonedDateTime()")}} Konstruktor.
- {{jsxref("Temporal/ZonedDateTime/day", "Temporal.ZonedDateTime.prototype.day")}}
  - : Gibt eine positive Ganzzahl zurück, die den 1-basierten Tagesindex im Monat dieses Datums darstellt, welcher dieselbe Tagesnummer ist, die Sie in einem Kalender sehen würden. [Kalender](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars)-abhängig. Beginnt im Allgemeinen bei 1 und ist kontinuierlich, aber nicht immer.
- {{jsxref("Temporal/ZonedDateTime/dayOfWeek", "Temporal.ZonedDateTime.prototype.dayOfWeek")}}
  - : Gibt eine positive Ganzzahl zurück, die den 1-basierten Tagesindex in der Woche dieses Datums darstellt. Tage in einer Woche sind von `1` bis {{jsxref("Temporal/ZonedDateTime/daysInWeek", "daysInWeek")}} durchnummeriert, wobei jede Zahl ihrem Namen zugeordnet ist. [Kalender](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars)-abhängig. 1 repräsentiert normalerweise Montag im Kalender, selbst wenn Lokalisierungen, die den Kalender verwenden, möglicherweise einen anderen Tag als den ersten Tag der Woche betrachten (siehe {{jsxref("Intl/Locale/getWeekInfo", "Intl.Locale.prototype.getWeekInfo()")}}).
- {{jsxref("Temporal/ZonedDateTime/dayOfYear", "Temporal.ZonedDateTime.prototype.dayOfYear")}}
  - : Gibt eine positive Ganzzahl zurück, die den 1-basierten Tagesindex im Jahr dieses Datums darstellt. Der erste Tag dieses Jahres ist `1`, und der letzte Tag ist {{jsxref("Temporal/ZonedDateTime/daysInYear", "daysInYear")}}. [Kalender](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars)-abhängig.
- {{jsxref("Temporal/ZonedDateTime/daysInMonth", "Temporal.ZonedDateTime.prototype.daysInMonth")}}
  - : Gibt eine positive Ganzzahl zurück, die die Anzahl der Tage im Monat dieses Datums darstellt. [Kalender](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars)-abhängig.
- {{jsxref("Temporal/ZonedDateTime/daysInWeek", "Temporal.ZonedDateTime.prototype.daysInWeek")}}
  - : Gibt eine positive Ganzzahl zurück, die die Anzahl der Tage in der Woche dieses Datums darstellt. [Kalender](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars)-abhängig. Für den ISO 8601-Kalender sind das immer 7, aber in anderen Kalendersystemen kann es von Woche zu Woche unterschiedlich sein.
- {{jsxref("Temporal/ZonedDateTime/daysInYear", "Temporal.ZonedDateTime.prototype.daysInYear")}}
  - : Gibt eine positive Ganzzahl zurück, die die Anzahl der Tage im Jahr dieses Datums darstellt. [Kalender](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars)-abhängig. Für den ISO 8601-Kalender sind es 365, oder 366 in einem Schaltjahr.
- {{jsxref("Temporal/ZonedDateTime/epochMilliseconds", "Temporal.ZonedDateTime.prototype.epochMilliseconds")}}
  - : Gibt eine Ganzzahl zurück, die die Anzahl der Millisekunden darstellt, die seit dem Unix-Epoch (Mitternacht zu Beginn des 1. Januar 1970, UTC) bis zu diesem Moment vergangen sind. Gleichwertig zur Division von `epochNanoseconds` durch `1e6` und Abrunden des Ergebnisses.
- {{jsxref("Temporal/ZonedDateTime/epochNanoseconds", "Temporal.ZonedDateTime.prototype.epochNanoseconds")}}
  - : Gibt ein {{jsxref("BigInt")}} zurück, das die Anzahl der Nanosekunden darstellt, die seit dem Unix-Epoch (Mitternacht zu Beginn des 1. Januar 1970, UTC) bis zu diesem Moment vergangen sind.
- {{jsxref("Temporal/ZonedDateTime/era", "Temporal.ZonedDateTime.prototype.era")}}
  - : Gibt eine kalender-spezifische Zeichenfolge in Kleinbuchstaben zurück, die die Ära dieses Datums darstellt oder `undefined`, wenn der Kalender keine Ären verwendet (z.B. ISO 8601). `era` und `eraYear` identifizieren zusammen eindeutig ein Jahr in einem Kalender, auf dieselbe Weise wie `year` es tut. [Kalender](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars)-abhängig. Für Gregorianisch ist es entweder `"ce"` oder `"bce"`.
- {{jsxref("Temporal/ZonedDateTime/eraYear", "Temporal.ZonedDateTime.prototype.eraYear")}}
  - : Gibt eine nicht-negative Ganzzahl zurück, die das Jahr dieses Datums innerhalb der Ära darstellt, oder `undefined`, wenn der Kalender keine Ären verwendet (z.B. ISO 8601). Der Jahresindex beginnt normalerweise bei 1 (häufiger) oder 0, und Jahre in einer Ära können mit der Zeit abnehmen (z.B. Gregorianisches BCE). `era` und `eraYear` identifizieren zusammen eindeutig ein Jahr in einem Kalender, auf dieselbe Weise wie `year` es tut. [Kalender](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars)-abhängig.
- {{jsxref("Temporal/ZonedDateTime/hour", "Temporal.ZonedDateTime.prototype.hour")}}
  - : Gibt eine Ganzzahl von 0 bis 23 zurück, die die Stundenkomponente dieser Uhrzeit darstellt.
- {{jsxref("Temporal/ZonedDateTime/hoursInDay", "Temporal.ZonedDateTime.prototype.hoursInDay")}}
  - : Gibt eine positive Ganzzahl zurück, die die Anzahl der Stunden im Tag dieses Datums in der Zeitzone darstellt. Sie kann mehr oder weniger als 24 betragen, im Falle von Offset-Änderungen wie der Sommerzeit.
- {{jsxref("Temporal/ZonedDateTime/inLeapYear", "Temporal.ZonedDateTime.prototype.inLeapYear")}}
  - : Gibt einen Booleschen Wert zurück, der anzeigt, ob dieses Datum in einem Schaltjahr liegt. Ein Schaltjahr ist ein Jahr, das mehr Tage hat (aufgrund eines Schalttages oder eines Schaltmonats) als ein normales Jahr. [Kalender](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars)-abhängig.
- {{jsxref("Temporal/ZonedDateTime/microsecond", "Temporal.ZonedDateTime.prototype.microsecond")}}
  - : Gibt eine Ganzzahl von 0 bis 999 zurück, die die Mikrosekunde (10<sup>-6</sup> Sekunde) Komponente dieser Uhrzeit darstellt.
- {{jsxref("Temporal/ZonedDateTime/millisecond", "Temporal.ZonedDateTime.prototype.millisecond")}}
  - : Gibt eine Ganzzahl von 0 bis 999 zurück, die die Millisekunde (10<sup>-3</sup> Sekunde) Komponente dieser Uhrzeit darstellt.
- {{jsxref("Temporal/ZonedDateTime/minute", "Temporal.ZonedDateTime.prototype.minute")}}
  - : Gibt eine Ganzzahl von 0 bis 59 zurück, die die Minutenkomponente dieser Uhrzeit darstellt.
- {{jsxref("Temporal/ZonedDateTime/month", "Temporal.ZonedDateTime.prototype.month")}}
  - : Gibt eine positive Ganzzahl zurück, die die 1-basierte Monatsindex im Jahr dieses Datums darstellt. Der erste Monat dieses Jahres ist `1`, und der letzte Monat ist {{jsxref("Temporal/ZonedDateTime/monthsInYear", "monthsInYear")}}. [Kalender](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars)-abhängig. Beachten Sie, dass im Gegensatz zu {{jsxref("Date.prototype.getMonth()")}} der Index 1-basiert ist. Wenn der Kalender Schaltmonate hat, dann kann der Monat mit demselben {{jsxref("Temporal/ZonedDateTime/monthCode", "monthCode")}} unterschiedliche `month`-Indizes für verschiedene Jahre haben.
- {{jsxref("Temporal/ZonedDateTime/monthCode", "Temporal.ZonedDateTime.prototype.monthCode")}}
  - : Gibt einen kalender-spezifischen String zurück, der den Monat dieses Datums darstellt. [Kalender](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars)-abhängig. In der Regel ist es `M` plus eine zweistellige Monatsnummer. Bei Schaltmonaten ist es der Code des vorhergehenden Monats gefolgt von `L`. Wenn der Schaltmonat der erste Monat des Jahres ist, ist der Code `M00L`.
- {{jsxref("Temporal/ZonedDateTime/monthsInYear", "Temporal.ZonedDateTime.prototype.monthsInYear")}}
  - : Gibt eine positive Ganzzahl zurück, die die Anzahl der Monate im Jahr dieses Datums darstellt. [Kalender](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars)-abhängig. Für den ISO 8601-Kalender sind das immer 12, aber in anderen Kalendersystemen kann es unterschiedlich sein.
- {{jsxref("Temporal/ZonedDateTime/nanosecond", "Temporal.ZonedDateTime.prototype.nanosecond")}}
  - : Gibt eine Ganzzahl von 0 bis 999 zurück, die die Nanosekunde (10<sup>-9</sup> Sekunde) Komponente dieser Uhrzeit darstellt.
- {{jsxref("Temporal/ZonedDateTime/offset", "Temporal.ZonedDateTime.prototype.offset")}}
  - : Gibt einen String zurück, der den [Offset](#zeitzonen_und_offsets) darstellt, der zur Interpretation des internen Moments verwendet wird, in der Form `±HH:mm` (oder `±HH:mm:ss.sssssssss` mit so viel Subminuten-Präzision wie nötig).
- {{jsxref("Temporal/ZonedDateTime/offsetNanoseconds", "Temporal.ZonedDateTime.prototype.offsetNanoseconds")}}
  - : Gibt eine Ganzzahl zurück, die den [Offset](#zeitzonen_und_offsets) darstellt, der zur Interpretation des internen Moments verwendet wird, als eine Anzahl von Nanosekunden (positiv oder negativ).
- {{jsxref("Temporal/ZonedDateTime/second", "Temporal.ZonedDateTime.prototype.second")}}
  - : Gibt eine Ganzzahl von 0 bis 59 zurück, die die Sekundenkomponente dieser Uhrzeit darstellt.
- {{jsxref("Temporal/ZonedDateTime/timeZoneId", "Temporal.ZonedDateTime.prototype.timeZoneId")}}
  - : Gibt einen String zurück, der den [Zeitzonen-Identifier](#zeitzonen_und_offsets) darstellt, der zur Interpretation des internen Moments verwendet wird. Es verwendet den gleichen String, der beim Erstellen des `Temporal.ZonedDateTime` Objekts verwendet wurde, entweder ein IANA Zeitzonenname oder ein fixer Offset.
- {{jsxref("Temporal/ZonedDateTime/weekOfYear", "Temporal.ZonedDateTime.prototype.weekOfYear")}}
  - : Gibt eine positive Ganzzahl zurück, die die 1-basierte Wochenindex im {{jsxref("Temporal/ZonedDateTime/yearOfWeek", "yearOfWeek")}} dieses Datums darstellt, oder `undefined`, wenn der Kalender kein klar definiertes Wochensystem hat. Die erste Woche des Jahres ist `1`. [Kalender](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars)-abhängig. Beachten Sie, dass für ISO 8601 die ersten und letzten Tage des Jahres der letzten Woche des Vorjahres oder der ersten Woche des folgenden Jahres zugeschrieben werden können.
- {{jsxref("Temporal/ZonedDateTime/year", "Temporal.ZonedDateTime.prototype.year")}}
  - : Gibt eine Ganzzahl zurück, die die Anzahl der Jahre dieses Datums relativ zu dem Start eines kalender-spezifischen Epochenjahres darstellt. [Kalender](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars)-abhängig. In der Regel ist Jahr 1 entweder das erste Jahr der neuesten Ära oder das ISO 8601-Jahr `0001`. Wenn die Epoche in der Mitte des Jahres liegt, hat dieses Jahr denselben Wert vor und nach dem Startdatum der Ära.
- {{jsxref("Temporal/ZonedDateTime/yearOfWeek", "Temporal.ZonedDateTime.prototype.yearOfWeek")}}
  - : Gibt eine Ganzzahl zurück, die das Jahr angibt, das mit der {{jsxref("Temporal/ZonedDateTime/weekOfYear", "weekOfYear")}} dieses Datums gepaart werden soll, oder `undefined`, wenn der Kalender kein klar definiertes Wochensystem hat. [Kalender](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars)-abhängig. In der Regel ist dies das Jahr des Datums, aber für ISO 8601 können die ersten und letzten Tage des Jahres der letzten Woche des Vorjahres oder der ersten Woche des nächsten Jahres zugeschrieben werden, was dazu führt, dass sich das `yearOfWeek` um 1 unterscheidet.
- `Temporal.ZonedDateTime.prototype[Symbol.toStringTag]`
  - : Der Anfangswert der [`[Symbol.toStringTag]`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag) Eigenschaft ist die Zeichenkette `"Temporal.ZonedDateTime"`. Diese Eigenschaft wird in {{jsxref("Object.prototype.toString()")}} verwendet.

## Instanzmethoden

- {{jsxref("Temporal/ZonedDateTime/add", "Temporal.ZonedDateTime.prototype.add()")}}
  - : Gibt ein neues `Temporal.ZonedDateTime` Objekt zurück, das diese Datum-Uhrzeit um eine gegebene Dauer (in einer Form konvertierbar durch {{jsxref("Temporal/Duration/from", "Temporal.Duration.from()")}}) vorwärts bewegt darstellt.
- {{jsxref("Temporal/ZonedDateTime/equals", "Temporal.ZonedDateTime.prototype.equals()")}}
  - : Gibt `true` zurück, wenn diese Datum-Uhrzeit im Wert einem anderen Datum-Uhrzeit entspricht (in einer Form konvertierbar durch {{jsxref("Temporal/ZonedDateTime/from", "Temporal.ZonedDateTime.from()")}}), und `false` ansonsten. Sie werden sowohl nach ihren Momentwerten, Zeitzonen als auch ihren Kalendern verglichen, sodass zwei Datum-Uhrzeiten aus unterschiedlichen Kalendern oder Zeitzonen von {{jsxref("Temporal/ZonedDateTime/compare", "Temporal.ZonedDateTime.compare()")}} als gleich betrachtet werden können, aber nicht von `equals()`.
- {{jsxref("Temporal/ZonedDateTime/getTimeZoneTransition", "Temporal.ZonedDateTime.prototype.getTimeZoneTransition()")}}
  - : Gibt ein `Temporal.ZonedDateTime` Objekt zurück, das den ersten Moment nach oder vor diesem Moment darstellt, an dem sich der UTC-Offset der Zeitzone ändert, oder `null`, wenn es keinen solchen Übergang gibt. Dies ist nützlich, um die Offset-Regeln einer Zeitzone zu ermitteln, wie ihr Sommerzeitmuster.
- {{jsxref("Temporal/ZonedDateTime/round", "Temporal.ZonedDateTime.prototype.round()")}}
  - : Gibt ein neues `Temporal.ZonedDateTime` Objekt zurück, das diese Datum-Uhrzeit auf die gegebene Einheit gerundet darstellt.
- {{jsxref("Temporal/ZonedDateTime/since", "Temporal.ZonedDateTime.prototype.since()")}}
  - : Gibt ein neues {{jsxref("Temporal.Duration")}} Objekt zurück, das die Dauer von einem anderen Datum-Uhrzeit (in einer Form konvertierbar durch {{jsxref("Temporal/ZonedDateTime/from", "Temporal.ZonedDateTime.from()")}}) zu dieser Datum-Uhrzeit darstellt. Die Dauer ist positiv, wenn die andere Datum-Uhrzeit vor dieser Datum-Uhrzeit ist, und negativ, wenn sie danach liegt.
- {{jsxref("Temporal/ZonedDateTime/startOfDay", "Temporal.ZonedDateTime.prototype.startOfDay()")}}
  - : Gibt ein `Temporal.ZonedDateTime` Objekt zurück, das den ersten Moment dieses Datums in der Zeitzone darstellt. Normalerweise hat es eine Zeit von `00:00:00`, kann aber anders sein, wenn Mitternacht aufgrund von Offset-Änderungen nicht existiert, in welchem Fall die erste existierende Zeit zurückgegeben wird.
- {{jsxref("Temporal/ZonedDateTime/subtract", "Temporal.ZonedDateTime.prototype.subtract()")}}
  - : Gibt ein neues `Temporal.ZonedDateTime` Objekt zurück, das diese Datum-Uhrzeit um eine gegebene Dauer (in einer Form konvertierbar durch {{jsxref("Temporal/Duration/from", "Temporal.Duration.from()")}}) rückwärts bewegt darstellt.
- {{jsxref("Temporal/ZonedDateTime/toInstant", "Temporal.ZonedDateTime.prototype.toInstant()")}}
  - : Gibt ein neues {{jsxref("Temporal.Instant")}} Objekt zurück, das den Moment dieser Datum-Uhrzeit darstellt.
- {{jsxref("Temporal/ZonedDateTime/toJSON", "Temporal.ZonedDateTime.prototype.toJSON()")}}
  - : Gibt eine Zeichenkette zurück, die diese Datum-Uhrzeit in demselben [RFC 9557 Format](#rfc_9557_format) darstellt wie bei einem Aufruf von {{jsxref("Temporal/ZonedDateTime/toString", "toString()")}}. Soll implizit von {{jsxref("JSON.stringify()")}} aufgerufen werden.
- {{jsxref("Temporal/ZonedDateTime/toLocaleString", "Temporal.ZonedDateTime.prototype.toLocaleString()")}}
  - : Gibt eine Zeichenkette mit einer sprachsensitiven Darstellung dieser Datum-Uhrzeit zurück.
- {{jsxref("Temporal/ZonedDateTime/toPlainDate", "Temporal.ZonedDateTime.prototype.toPlainDate()")}}
  - : Gibt ein neues {{jsxref("Temporal.PlainDate")}} Objekt zurück, das das Datumsteil dieser Datum-Uhrzeit darstellt.
- {{jsxref("Temporal/ZonedDateTime/toPlainDateTime", "Temporal.ZonedDateTime.prototype.toPlainDateTime()")}}
  - : Gibt ein neues {{jsxref("Temporal.PlainDateTime")}} Objekt zurück, das das Datum und die Uhrzeitteile dieser Datum-Uhrzeit darstellt. Nur die Zeitzoneninformationen werden entfernt.
- {{jsxref("Temporal/ZonedDateTime/toPlainTime", "Temporal.ZonedDateTime.prototype.toPlainTime()")}}
  - : Gibt ein neues {{jsxref("Temporal.PlainTime")}} Objekt zurück, das den Zeiteil dieser Datum-Uhrzeit darstellt.
- {{jsxref("Temporal/ZonedDateTime/toString", "Temporal.ZonedDateTime.prototype.toString()")}}
  - : Gibt eine Zeichenkette zurück, die diese Datum-Uhrzeit im [RFC 9557 Format](#rfc_9557_format) darstellt.
- {{jsxref("Temporal/ZonedDateTime/until", "Temporal.ZonedDateTime.prototype.until()")}}
  - : Gibt ein neues {{jsxref("Temporal.Duration")}} Objekt zurück, das die Dauer von dieser Datum-Uhrzeit zu einer anderen Datum-Uhrzeit (in einer Form konvertierbar durch {{jsxref("Temporal/ZonedDateTime/from", "Temporal.ZonedDateTime.from()")}}) darstellt. Die Dauer ist positiv, wenn die andere Datum-Uhrzeit nach dieser Datum-Uhrzeit ist, und negativ, wenn sie vorher ist.
- {{jsxref("Temporal/ZonedDateTime/valueOf", "Temporal.ZonedDateTime.prototype.valueOf()")}}
  - : Wirft einen {{jsxref("TypeError")}}, was verhindert, dass `Temporal.ZonedDateTime` Instanzen [implizit in primitive Typen konvertiert](/de/docs/Web/JavaScript/Guide/Data_structures#primitive_coercion) werden, wenn sie in arithmetischen oder Vergleichsoperationen verwendet werden.
- {{jsxref("Temporal/ZonedDateTime/with", "Temporal.ZonedDateTime.prototype.with()")}}
  - : Gibt ein neues `Temporal.ZonedDateTime` Objekt zurück, das diese Datum-Uhrzeit mit einigen Feldern, die durch neue Werte ersetzt werden, darstellt.
- {{jsxref("Temporal/ZonedDateTime/withCalendar", "Temporal.ZonedDateTime.prototype.withCalendar()")}}
  - : Gibt ein neues `Temporal.ZonedDateTime` Objekt zurück, das diese Datum-Uhrzeit im neuen Kalendersystem interpretiert darstellt.
- {{jsxref("Temporal/ZonedDateTime/withPlainTime", "Temporal.ZonedDateTime.prototype.withPlainTime()")}}
  - : Gibt ein neues `Temporal.ZonedDateTime` Objekt zurück, das diese Datum-Uhrzeit darstellt, wobei der Zeitteil vollständig durch die neue Zeit ersetzt wird (in einer Form konvertierbar durch {{jsxref("Temporal/PlainTime/from", "Temporal.PlainTime.from()")}})
- {{jsxref("Temporal/ZonedDateTime/withTimeZone", "Temporal.ZonedDateTime.prototype.withTimeZone()")}}
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
