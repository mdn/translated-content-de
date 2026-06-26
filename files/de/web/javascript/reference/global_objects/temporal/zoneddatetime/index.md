---
title: Temporal.ZonedDateTime
slug: Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime
l10n:
  sourceCommit: 87ca9db1ebe56eb20c1f20b91fca43955d8f0e26
---

Das **`Temporal.ZonedDateTime`**-Objekt repräsentiert ein Datum und eine Zeit mit einer Zeitzone. Es wird im Wesentlichen als Kombination aus einem [instant](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/Instant), einer Zeitzone und einem Kalendersystem dargestellt.

## Beschreibung

Ein `ZonedDateTime` fungiert als Brücke zwischen einer exakten Zeit und einer "Wanduhrzeit": Es repräsentiert gleichzeitig einen Moment in der Geschichte (wie ein {{jsxref("Temporal.Instant")}}) und eine lokale, "Wanduhrzeit" (wie ein {{jsxref("Temporal.PlainDateTime")}}). Dies geschieht durch Speichern des Moments, der Zeitzone und des Kalendersystems. Die Zeitzone wird verwendet, um zwischen dem Moment und der lokalen Zeit zu konvertieren, und das Kalendersystem wird verwendet, um die lokale Zeit zu interpretieren.

`ZonedDateTime` ist die einzige `Temporal`-Klasse, die sich der Zeitzone bewusst ist. Die Hinzufügung einer Zeitzone führt dazu, dass `ZonedDateTime`-Objekte wichtige Verhaltensunterschiede zu {{jsxref("Temporal.PlainDateTime")}}-Objekten aufweisen. Nämlich, Sie können nicht mehr davon ausgehen, dass "die Zeit 1 Minute später" jeden Tag gleich ist oder dass ein Tag 24 Stunden hat. Im schlimmsten Fall kann ein ganzer Tag im lokalen Kalender fehlen. Unten bieten wir einen kurzen Überblick über Zeitzonen und Offsets und wie sie die Umwandlung zwischen UTC-Zeit und lokaler Zeit beeinflussen.

### Zeitzonen und Offsets

Alle Zeiten in JavaScript haben einen goldenen Standard: die UTC-Zeit, die kontinuierlich und gleichmäßig zunimmt, während die physikalische Zeit fortschreitet. Im Gegensatz dazu sind Benutzer mehr an ihrer lokalen Zeit interessiert, die Zeit, die sie auf ihren Kalendern und Uhren ablesen. Der Prozess der Umwandlung zwischen UTC-Zeit und lokaler Zeit beinhaltet einen Zeitzonen-_Offset_, der wie folgt berechnet wird:

```plain
local time = UTC time + offset
```

Zum Beispiel, wenn die UTC-Zeit 1970-01-01T00:00:00 ist und der Offset "-05:00" beträgt, dann ist die lokale Zeit:

```plain
1970-01-01T00:00:00 + -05:00 = 1969-12-31T19:00:00
```

Durch Anhängen dieser lokalen Zeit mit dem Offset, also durch Ausdruck dieser Zeit als "1969-12-31T19:00:00-05:00", kann sie nun unmissverständlich als ein Moment in der Geschichte verstanden werden.

Um den Offset zu kennen, benötigen wir zwei Informationen, die _Zeitzone_ und den _Moment_. Die Zeitzone ist eine Region auf der Erde, in der der gleiche Offset zu allen Zeiten verwendet wird. Zwei Uhren in derselben Zeitzone werden immer gleichzeitig die gleiche Zeit anzeigen, aber der Offset ist nicht unbedingt konstant: das heißt, diese Uhrenzeiten können sich abrupt ändern. Dies geschieht häufig während der Sommerzeitumstellung, wenn sich der Offset um eine Stunde ändert, was zweimal im Jahr geschieht. Offsets können sich auch dauerhaft durch politische Veränderungen ändern, z.B. wenn ein Land die Zeitzonen wechselt.

Die Zeitzonen sind in der [IANA-Zeitzonendatenbank](https://www.iana.org/time-zones) gespeichert. Jede IANA-Zeitzone hat:

- Einen _primären Zeitzonenbezeichner_, der die Zeitzone eindeutig identifiziert. Er bezieht sich normalerweise auf einen geografischen Bereich, der durch eine Stadt verankert ist (z.B. `Europe/Paris` oder `Africa/Kampala`), kann aber auch Einzel-Offset-Zeitzonen wie `UTC` (ein konstanter `+00:00` Offset) oder `Etc/GMT+5` bezeichnen (was aus historischen Gründen ein negativer Offset `-05:00` ist). Aus historischen Gründen ist der primäre Name für die UTC-Zeitzone `UTC`, obwohl er in IANA `Etc/UTC` ist.
- Eine _Zeitzonendefinition_ in Form einer Tabelle, die UTC-Datums-/Zeitbereiche (einschließlich zukünftiger Bereiche) auf bestimmte Offsets abbildet.
- Null oder mehr _nicht primäre Zeitzonenbezeichner_, die Aliase für den primären Zeitzonenbezeichner sind. Diese sind normalerweise historische Namen, die nicht mehr verwendet werden, aber aus Kompatibilitätsgründen beibehalten werden. Siehe unten für weitere Informationen.

Die Eingabe benannter Bezeichner erfolgt ohne Berücksichtigung der Groß- und Kleinschreibung. Intern werden sie in ihrer bevorzugten Schreibweise gespeichert, und nicht primäre Bezeichner werden _nicht_ zu ihrem primären Bezeichner konvertiert.

> [!NOTE]
> Wenn Sie den Zeitzonennamen festlegen, möchten Sie ihn selten auf `"UTC"` festlegen. `ZonedDateTime` ist dazu gedacht, Benutzern angezeigt zu werden, aber kein Mensch lebt in der "UTC"-Zeitzone. Wenn Sie die Zeitzone zum Zeitpunkt der Konstruktion nicht kennen, aber die "Wanduhrzeit" kennen, verwenden Sie ein {{jsxref("Temporal.PlainDateTime")}}. Wenn Sie den genauen Moment kennen, verwenden Sie ein {{jsxref("Temporal.Instant")}}.

Wenn eine `Temporal`-API einen _Zeitzonenbezeichner_ akzeptiert, akzeptiert sie neben primären Zeitzonenbezeichnern und nicht primären Zeitzonenbezeichnern auch einen _Offset-Zeitzonenbezeichner_, der in derselben Form wie der Offset ist, außer dass Präzision unter einer Minute nicht erlaubt ist. Zum Beispiel sind `+05:30`, `-08`, `+0600` alle gültige Offset-Bezeichner. Intern werden Offset-Bezeichner in der Form `±HH:mm` gespeichert.

> [!NOTE]
> Vermeiden Sie die Verwendung von Offset-Bezeichnern, wenn es eine benannte Zeitzone gibt, die Sie stattdessen verwenden können. Auch wenn eine Region immer nur einen Offset verwendet hat, ist es besser, den benannten Bezeichner zu verwenden, um sich gegen zukünftige politische Änderungen des Offsets zu wappnen.
>
> Wenn eine Region (oder hat) mehrere Offsets verwendet(e), dann ist die Verwendung ihrer benannten Zeitzone umso wichtiger. Dies liegt daran, dass `Temporal.ZonedDateTime` Methoden wie `add` oder `with` verwenden kann, um neue Instanzen zu einem anderen Moment zu erstellen. Wenn diese abgeleiteten Instanzen einem Moment entsprechen, der einen anderen Offset verwendet (zum Beispiel nach einer Sommerzeitumstellung), dann werden Ihre Berechnungen eine falsche lokale Zeit haben. Die Verwendung einer benannten Zeitzone stellt sicher, dass lokale Daten und Zeiten immer für den korrekten Offset für diesen Moment angepasst werden.

Zur Bequemlichkeit können Sie beim Bereitstellen eines Zeitzonenbezeichners an `Temporal`-APIs wie `Temporal.ZonedDateTime.prototype.withTimeZone()` und die `timeZoneId`-Option von `Temporal.ZonedDateTime.from()` diesen in einigen anderen Formen bereitstellen:

- Als eine andere `ZonedDateTime`-Instanz, deren `timeZoneId` verwendet wird.
- Als eine [RFC 9557-String](#rfc_9557_format) mit einer Zeitzonenanmerkung, deren Zeitzonenbezeichner verwendet wird.
- Als ein ISO 8601 / RFC 3339-String, der einen Offset enthält, dessen Offset als Offset-Bezeichner verwendet wird; oder, wenn `Z` verwendet wird, dann wird die `"UTC"` Zeitzone verwendet. Diese Nutzung wird generell nicht empfohlen, da, wie oben erläutert, Offset-Bezeichner nicht in der Lage sind, andere `Temporal.ZonedDateTime`-Instanzen sicher über einen Offset-Übergang hinweg abzuleiten, wie wenn die Sommerzeit beginnt oder endet. Erwägen Sie stattdessen, einfach `Temporal.Instant` zu verwenden oder die tatsächliche benannte Zeitzone des Benutzers abzurufen.

Die IANA-Zeitzonendatenbank ändert sich von Zeit zu Zeit, normalerweise um neue Zeitzonen als Reaktion auf politische Änderungen hinzuzufügen. Gelegentlich werden IANA-Zeitzonenbezeichner umbenannt, um die aktualisierte englische Übersetzung eines Städtenamens wiederzugeben oder um veraltete Namenskonventionen zu aktualisieren. Zum Beispiel hier sind einige bemerkenswerte Namensänderungen:

| Aktueller IANA primärer Bezeichner | Alter, jetzt nicht primärer Bezeichner |
| ---------------------------------- | -------------------------------------- |
| `America/Argentina/Buenos_Aires`   | `America/Buenos_Aires`                 |
| `Asia/Kolkata`                     | `Asia/Calcutta`                        |
| `Asia/Ho_Chi_Minh`                 | `Asia/Saigon`                          |
| `Europe/Kyiv`                      | `Europe/Kiev`                          |

Historisch gesehen verursachten diese Umbenennungen Probleme für Programmierer, weil die Unicode [CLDR-Datenbank](https://github.com/unicode-org/cldr/blob/main/common/bcp47/timezone.xml) (eine von Browsern verwendete Bibliothek zur Bereitstellung von Zeitzonenbezeichnern und -daten) aus [Stabilitätsgründen](https://unicode.org/reports/tr35/#Time_Zone_Identifiers) iaas Namensänderungen nicht folgte. Infolgedessen berichteten einige Browser wie Chrome und Safari von den veralteten Bezeichnern von CLDR, während andere Browser wie Firefox die Standardeinstellungen von CLDR überschrieben und die aktuellen primären Bezeichner berichteten.

Mit der Einführung von Temporal ist dieses Verhalten jetzt standardisierter:

- [CLDR-Daten](https://github.com/unicode-org/cldr/blob/main/common/bcp47/timezone.xml) enthalten jetzt das `"_iana"`-Attribut, das den aktuellsten Bezeichner angibt, wenn der ältere, stabile Bezeichner umbenannt wurde. Browser können dieses neue Attribut verwenden, um Anrufern aktualisierte Bezeichner bereitzustellen.
- Zeitzonenbezeichner, die vom Programmierer bereitgestellt werden, werden niemals durch einen Alias ersetzt. Zum Beispiel, wenn der Anrufer `Asia/Calcutta` oder `Asia/Kolkata` als Bezeichner für die Eingabe in {{jsxref("Temporal/ZonedDateTime/from", "Temporal.ZonedDateTime.from()")}} bereitstellt, dann wird derselbe Bezeichner im resultierenden Instanz {{jsxref("Temporal/ZonedDateTime/timeZoneId", "timeZoneId")}} zurückgegeben. Beachten Sie, dass die Groß-/Kleinschreibung der Ausgaben normalisiert wird, um mit IANA übereinzustimmen, sodass `ASIA/calCuTTa` als Eingabe einen {{jsxref("Temporal/ZonedDateTime/timeZoneId", "timeZoneId")}} von `Asia/Calcutta` als Ausgabe generiert.
- Wenn ein Zeitzonenbezeichner nicht durch einen Anrufer bereitgestellt wird, sondern stattdessen vom System selbst bezogen wird (zum Beispiel bei der Verwendung von {{jsxref("Temporal/Now/timeZoneId", "Temporal.Now.timeZoneId()")}}), werden moderne Bezeichner in allen Browsern zurückgegeben. Bei Städtenamen-Umbenennungen gibt es eine zweijährige Verzögerung, bevor diese systembereitgestellten Bezeichner-APIs den neuen Namen offenlegen, wodurch anderen Komponenten (wie einem Node-Server) Zeit gegeben wird, ihre Kopien der IANA-Datenbank zu aktualisieren, um den neuen Namen zu erkennen.

Beachten Sie, dass die Zuordnung primärer Bezeichner den Ländercode beibehält: Zum Beispiel zeichnet die IANA-Datenbank `Atlantic/Reykjavik` als Alias für `Africa/Abidjan` auf, aber da sie verschiedenen Ländern (Island und Côte d'Ivoire, bzw.) entsprechen, werden sie als separate primäre Bezeichner behandelt.

Diese Standardisierung gilt auch außerhalb von `Temporal`. Zum Beispiel wird die `timeZone`-Option, die von {{jsxref("Intl/DateTimeFormat/resolvedOptions", "Intl.DateTimeFormat.prototype.resolvedOptions()")}} zurückgegeben wird, ebenfalls niemals durch einen Alias ersetzt, obwohl Browser diese Bezeichner vor der Standardisierung durch Temporal traditionell kanonisierten. Andererseits geben {{jsxref("Intl/Locale/getTimeZones", "Intl.Locale.prototype.getTimeZones()")}} und {{jsxref("Intl.supportedValuesOf()")}} (`timeZone`-Option) den aktuellsten Bezeichner zurück, während einige Browser die alte, nicht primäre Bezeichnung zurückgaben.

### RFC 9557 Format

`ZonedDateTime`-Objekte können im [RFC 9557](https://datatracker.ietf.org/doc/html/rfc9557)-Format serialisiert und geparst werden, eine Erweiterung des [ISO 8601 / RFC 3339](https://datatracker.ietf.org/doc/html/rfc3339)-Formats. Der String hat folgendes Format (Leerzeichen sind nur der Lesbarkeit wegen und sollten im tatsächlichen String nicht vorhanden sein):

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
  - : Der Datums-Zeit-Trenner, der `T`, `t` oder ein Leerzeichen sein kann. Nur vorhanden, wenn `HH` vorhanden ist.
- `HH` {{optional_inline}}
  - : Eine zweistellige Zahl von `00` bis `23`. Standard ist `00`.
- `mm` {{optional_inline}}
  - : Eine zweistellige Zahl von `00` bis `59`. Standard ist `00`.
- `ss.sssssssss` {{optional_inline}}
  - : Eine zweistellige Zahl von `00` bis `59`. Kann optional von einem `.` oder `,` und einer bis neun Ziffern gefolgt werden. Standard ist `00`. Die `HH`, `mm` und `ss` Komponenten können durch `:` oder nichts getrennt werden. Sie können entweder nur `ss` oder sowohl `ss` als auch `mm` weglassen, sodass die Zeit in einer von drei Formen sein kann: `HH`, `HH:mm` oder `HH:mm:ss.sssssssss`.
- `Z/±HH:mm` {{optional_inline}}
  - : Entweder der UTC-Bezeichner `Z` oder `z` oder ein Offset von UTC in der Form `+` oder `-`, gefolgt vom selben Format wie die Zeitkomponente. Beachten Sie, dass Subminuten-Präzision (`:ss.sssssssss`) von anderen Systemen möglicherweise nicht unterstützt wird und akzeptiert ist, aber nie ausgegeben wird. Wenn es weggelassen wird, wird das Offset vom Zeitzonenbekannter abgeleitet. Wenn es vorhanden ist, muss die Zeit auch bereitgestellt werden. `Z` entspricht nicht `+00:00`: Ersteres bedeutet, dass die Zeit unabhängig vom Zeitzonenbekannter in UTC-Form angegeben wird, während Letzteres bedeutet, dass die Zeit in lokaler Zeit angegeben wird, die zufällig UTC+0 ist, und wird gegen den Zeitzonenbekannter durch die [`offset`-Option](#offset-mehrdeutigkeit) validiert.
- `[time_zone_id]`
  - : Ersetzen Sie `time_zone_id` durch den Zeitzonenbezeichner (benannt oder Offset) wie oben beschrieben. Kann ein _kritisches Flag_ haben, indem der Bezeichner mit `!` vorangestellt wird: z.B. `[!America/New_York]`. Dieses Flag signalisiert anderen Systemen im Allgemeinen, dass es nicht ignoriert werden kann, wenn sie es nicht unterstützen. Beachten Sie, dass es für `Temporal.ZonedDateTime.from()` erforderlich ist: Das Weglassen führt zu einem `RangeError`. Wenn Sie ISO 8601 / RFC 3339-Strings ohne Zeitzonenkennungsanmerkungen parsen möchten, verwenden Sie {{jsxref("Temporal/Instant/from", "Temporal.Instant.from()")}} stattdessen.
- `[u-ca=calendar_id]` {{optional_inline}}
  - : Ersetzen Sie `calendar_id` durch den zu verwendenden Kalender. Siehe [`Intl.supportedValuesOf()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/supportedValuesOf#supported_calendar_types) für eine Liste der allgemein unterstützten Kalendertypen. Standard ist `[u-ca=iso8601]`. Kann ein _kritisches Flag_ haben, indem der Schlüssel mit `!` vorangestellt wird: z.B. `[!u-ca=iso8601]`. Dieses Flag signalisiert anderen Systemen im Allgemeinen, dass es nicht ignoriert werden kann, wenn sie es nicht unterstützen. Der `Temporal`-Parser wird einen Fehler auslösen, wenn die Anmerkungen zwei oder mehr Kalenderanmerkungen enthalten und eine davon kritisch ist. Beachten Sie, dass die `YYYY-MM-DD` immer als ISO 8601-Kalenderdatum interpretiert wird und dann in den angegebenen Kalender konvertiert wird.

Als Eingabe werden andere Anmerkungen im Format `[key=value]` ignoriert und dürfen kein kritisches Flag haben.

Beim Serialisieren können Sie die Bruchteile der Sekunden, die Offset-/Zeitzonen-/Kalender-ID, und ob ein kritisches Flag für die Anmerkungen hinzugefügt werden soll, konfigurieren.

### Mehrdeutigkeit und Lücken von lokaler Zeit zu UTC-Zeit

Unter der Annahme einer Zeitzone ist die Umwandlung von UTC in lokale Zeit einfach: Sie ermitteln zuerst den Offset mit dem Zeitzonennamen und dem Moment und addieren dann den Offset zu dem Moment. Das Gegenteil ist nicht der Fall: Eine Umwandlung von lokaler Zeit zu UTC-Zeit, ohne einen expliziten Offset, ist mehrdeutig, da eine lokale Zeit null, einem oder vielen UTC-Zeiten entspricht. Betrachten Sie die häufigste Ursache: Sommerzeitumstellungen. Nehmen wir New York als Beispiel. Sein Standardoffset ist UTC-5, aber während der Normalzeit werden alle Uhren eine Stunde vorgedreht, sodass der Offset UTC-4 wird. In den USA finden die Übergänge um 2:00 Uhr Ortszeit statt, also betrachten Sie diese zwei Übergangstage:

| UTC-Zeit             | New York Zeit             |
| -------------------- | ------------------------- |
| 2024-03-10T06:58:00Z | 2024-03-10T01:58:00-05:00 |
| 2024-03-10T06:59:00Z | 2024-03-10T01:59:00-05:00 |
| 2024-03-10T07:00:00Z | 2024-03-10T03:00:00-04:00 |
| ---                  | ---                       |
| 2024-11-03T05:58:00Z | 2024-11-03T01:58:00-04:00 |
| 2024-11-03T05:59:00Z | 2024-11-03T01:59:00-04:00 |
| 2024-11-03T06:00:00Z | 2024-11-03T01:00:00-05:00 |

Wie Sie sehen, ist im März eine Stunde von der lokalen Zeit verschwunden, und im November gibt es zwei Stunden, die dieselbe Wanduhrzeit haben. Angenommen, wir haben ein `PlainDateTime` gespeichert, das "2024-03-10T02:05:00" sagt, und wir sollen es in der `America/New_York`-Zeitzone interpretieren, wird es keine Zeit geben, die ihm entspricht, während ein `PlainDateTime`, das "2024-11-03T01:05:00" sagt, zwei verschiedenen Momenten entsprechen kann.

Beim Erstellen eines `ZonedDateTime` aus einer lokalen Zeit (mithilfe von {{jsxref("Temporal/ZonedDateTime/from", "Temporal.ZonedDateTime.from()")}}, {{jsxref("Temporal/ZonedDateTime/with", "Temporal.ZonedDateTime.prototype.with()")}}, {{jsxref("Temporal/PlainDateTime/toZonedDateTime", "Temporal.PlainDateTime.prototype.toZonedDateTime()")}}), ist das Verhalten für Mehrdeutigkeit und Lücken über die `disambiguation`-Option konfigurierbar:

- `earlier`
  - : Wenn es zwei mögliche Momente gibt, wählen Sie den früheren. Wenn es eine Lücke gibt, gehen Sie zurück um die Dauer der Lücke.
- `later`
  - : Wenn es zwei mögliche Momente gibt, wählen Sie den späteren. Wenn es eine Lücke gibt, gehen Sie vorwärts um die Dauer der Lücke.
- `compatible` (Standard)
  - : Gleiches Verhalten wie {{jsxref("Date")}}: verwenden Sie `later` für Lücken und `earlier` für Mehrdeutigkeiten.
- `reject`
  - : Werfen Sie einen `RangeError`, wann immer es eine Mehrdeutigkeit oder Lücke gibt.

Es gibt mehrere Fälle, in denen es keine Mehrdeutigkeit gibt, wenn ein `ZonedDateTime` konstruiert wird:

- Wenn die Zeit in UTC über den `Z`-Offset angegeben ist.
- Wenn der Offset explizit bereitgestellt und verwendet wird (siehe unten).

### Offset-Mehrdeutigkeit

Wir haben bereits gezeigt, wie Mehrdeutigkeit durch das Interpretieren einer lokalen Zeit in einer Zeitzone entstehen kann, ohne einen expliziten Offset bereitzustellen. Wenn Sie jedoch einen expliziten Offset bereitstellen, entsteht ein weiterer Konflikt: zwischen dem angegebenen Offset und dem aus der Zeitzone und der lokalen Zeit berechneten Offset. Dies ist ein unvermeidbares reales Problem: Wenn Sie eine Zeit in der Zukunft mit einem vorhergesagten Offset speichern, kann sich die Zeitzonendefinition vor diesem Zeitpunkt aus politischen Gründen ändern. Beispielsweise nehmen wir an, dass wir im Jahr 2018 eine Erinnerung zum Zeitpunkt `2019-12-23T12:00:00-02:00[America/Sao_Paulo]` (was Normalzeit ist; Brasilien liegt auf der Südhalbkugel und tritt im Oktober in die Normalzeit ein und verlässt sie im Februar) einrichten. Aber bevor diese Zeit eintritt, beschließt Brasilien Anfang 2019, die Normalzeit nicht mehr zu beachten, sodass der echte Offset `-03:00` wird. Sollte die Erinnerung jetzt noch um Mittag (mit der Beibehaltung der lokalen Zeit) ausgeführt werden, oder sollte sie um 11:00 Uhr (mit der Beibehaltung der genauen Zeit) ausgeführt werden?

Damit eine Offset-Mehrdeutigkeit besteht, muss ein Zeitstempelstring unter Verwendung anderer IANA-Zeitzonendatenbankregeln geparst werden als die Regeln, die verwendet wurden, als der Zeitstempel ursprünglich generiert wurde. Dies wird niemals passieren, wenn Zeitstempel während derselben Ausführung eines JavaScript-Programms generiert werden, da gemäß der ECMAScript-Spezifikation die IANA-Zeitzonendatenbankregeln während der Lebensdauer eines JavaScript-Programms konsistent sein müssen.

Jedoch kann eine Offset-Mehrdeutigkeit bestehen, wenn ein JavaScript-Programm Zeitstempel parst, die früher gespeichert wurden, wie im oben erwähnten `America/Sao_Paulo`-Beispiel, und die IANA-Zeitzonendatenbank seit der ursprünglichen Generierung des Zeitstempels aktualisiert wurde. Es kann auch vorkommen, wenn Zeitstempel zwischen Computern (oder selten zwischen verschiedenen Software auf demselben Computer!) kommuniziert werden, die unterschiedliche Versionen der IANA-Zeitzonendatenbank verwenden. Die IANA-Zeitzonendatenbank hat auch Build-Optionen (z.B. die Verwendung oder Nichtverwendung veralteter Regeln in `backzone`), die zu Offset-Mehrdeutigkeit führen können, wenn Zeitstempel zwischen Computern mit unterschiedlicher Software ausgetauscht werden, selbst wenn die IANA-Zeitzonendatenbankversion dieselbe ist.

Offset-Mehrdeutigkeit wird selten angetroffen und betrifft fast immer nur Zeitstempel vor 1970 oder Zeitstempel, die Monate oder Jahre in der Zukunft liegen. Aber wenn dieses Problem auftritt, wird standardmäßig ein `RangeError` ausgelöst. Wenn ein `ZonedDateTime` mit {{jsxref("Temporal/ZonedDateTime/from", "Temporal.ZonedDateTime.from()")}} konstruiert oder es mit der {{jsxref("Temporal/ZonedDateTime/with", "with()")}}-Methode aktualisiert wird, können Sie diese Ausnahme vermeiden, indem Sie die `offset`-Option verwenden, um zu entscheiden, ob der Offset oder der Zeitzonenbezeichner "gewinnt":

- `use`
  - : Verwenden Sie den Offset, um die genaue Zeit zu berechnen. Diese Option "verwendet" den Offset, um den Moment zu bestimmen, der durch den Zeitstempelstring beabsichtigt ist, selbst wenn sich der Offset zu diesem Zeitpunkt geändert hat. Der Zeitzonenbezeichner wird dennoch verwendet, um den (möglicherweise aktualisierten) Offset zu bestimmen und diesen Offset zu verwenden, um die genaue Zeit in lokale Zeit zu konvertieren. Im oben genannten Beispiel `2019-12-23T12:00:00-02:00[America/Sao_Paulo]` würde diese Option dazu führen, dass die Erinnerung um 11:00 Uhr Ortszeit ausgeführt wird.
- `ignore`
  - : Ignorieren Sie den im String angegebenen Offset und verwenden Sie den Zeitzonenbezeichner, um den Offset neu zu berechnen. Diese Option behält die gleiche lokale Zeit wie ursprünglich berechnet, als wir die Zeit speicherten, aber sie kann zu einem anderen Moment führen. Beachten Sie, dass durch Ignorieren des Offsets die gleiche [lokale Zeitinterpretationsmehrdeutigkeit](#mehrdeutigkeit_und_lücken_von_lokaler_zeit_zu_utc-zeit) entstehen kann, die mit der `disambiguation`-Option gelöst wird. Im oben genannten Beispiel `2019-12-23T12:00:00-02:00[America/Sao_Paulo]` würde diese Option dazu führen, dass die Erinnerung um 12:00 Uhr Ortszeit ausgeführt wird.
- `reject`
  - : Werfen Sie einen `RangeError`, wenn es einen Konflikt zwischen dem Offset und dem Zeitzonenbezeichner gibt. Dies ist der Standard für {{jsxref("Temporal/ZonedDateTime/from", "Temporal.ZonedDateTime.from()")}}.
- `prefer`
  - : Verwenden Sie den Offset, wenn er gültig ist, berechnen Sie andernfalls den Offset aus dem Zeitzonenbezeichner. Dies ist der Standard für {{jsxref("Temporal/ZonedDateTime/with", "Temporal.ZonedDateTime.prototype.with()")}} (siehe diese Methode für weitere Details). Dies unterscheidet sich von `ignore`, da im Falle einer lokalen Zeitmehrdeutigkeit der Offset verwendet wird, um sie zu lösen, anstatt der `disambiguation`-Option.

Wenn Sie im Voraus wissen, wie Sie die Offset-Mehrdeutigkeit handhaben möchten, sollten Sie die `offset`-Option verwenden, um die standardmäßig geworfenen Ausnahmen zu vermeiden. Zum Beispiel möchte eine Kalenderanwendung wahrscheinlich, dass der Zeitzonenbezeichner "gewinnt", damit wiederkehrende Meetings in der aktuellsten lokalen Zeit für diese Zeitzone angezeigt werden, daher ist `offset: "ignore"` angemessen. Andererseits sollte eine Aufgabenplaner-Anwendung, die eine Aufgabe genau 3 Stunden ab jetzt ausführt, wahrscheinlich `offset: "use"` wählen, da Änderungen der Zeitzonenregeln nicht die Bedeutung von "3 Stunden ab jetzt" ändern sollten.

In einigen Fällen wissen Sie möglicherweise nicht, welche `offset`-Option die richtige ist, ohne die Benutzer um Input zu bitten. In diesen Fällen sollten Sie möglicherweise den `RangeError` abfangen und dann Ihren Benutzer fragen, welche lokale Zeit die richtige ist, und dann das Parsen mit einer anderen `offset`-Option basierend auf der Auswahl des Benutzers erneut versuchen.

Beachten Sie, dass der `Z`-Offset nicht gleich `+00:00` ist. Der `Z`-Offset bedeutet "die Zeit in UTC ist bekannt, aber der Offset zur Ortszeit ist unbekannt", gemäß [RFC 9557](https://www.rfc-editor.org/info/rfc9557/#name-update-to-rfc-3339). Wenn der Zeitstring den `Z`-Offset verwendet, wird die `offset`-Option ignoriert, und der Offset wird vom Zeitzonen-ID abgeleitet. Andererseits wird der `+00:00`-Offset als ein lokaler Zeitoffset interpretiert, der zufällig mit UTC übereinstimmt und gegenüber dem Zeitzonen-ID bestätigt wird.

> [!NOTE]
> Obwohl {{jsxref("Temporal/Instant/from", "Temporal.Instant.from()")}} auch einen [RFC 9557](#rfc_9557_format) String in derselben Form annimmt, gibt es keine Mehrdeutigkeit, da er immer den Zeitzonenbekannter ignoriert und nur den Offset liest.

## Konstruktor

- {{jsxref("Temporal/ZonedDateTime/ZonedDateTime", "Temporal.ZonedDateTime()")}} {{experimental_inline}}
  - : Erstellt ein neues `Temporal.ZonedDateTime`-Objekt durch direktes Bereitstellen der zugrunde liegenden Daten.

## Statische Methoden

- {{jsxref("Temporal/ZonedDateTime/compare", "Temporal.ZonedDateTime.compare()")}}
  - : Gibt eine Zahl (-1, 0 oder 1) zurück, die angibt, ob der erste Datum-Zeit-Punkt vor, gleich oder nach dem zweiten Datum-Zeit-Punkt liegt. Entspricht dem Vergleich der {{jsxref("Temporal/ZonedDateTime/epochNanoseconds", "epochNanoseconds")}} der beiden Datum-Zeit-Punkte.
- {{jsxref("Temporal/ZonedDateTime/from", "Temporal.ZonedDateTime.from()")}}
  - : Erstellt ein neues `Temporal.ZonedDateTime`-Objekt aus einem anderen `Temporal.ZonedDateTime`-Objekt, einem Objekt mit Datum, Zeit und Zeitzoneneigenschaften oder einem [RFC 9557](#rfc_9557_format) String.

## Instanz-Eigenschaften

Diese Eigenschaften sind auf `Temporal.ZonedDateTime.prototype` definiert und werden von allen `Temporal.ZonedDateTime`-Instanzen geteilt.

- {{jsxref("Temporal/ZonedDateTime/calendarId", "Temporal.ZonedDateTime.prototype.calendarId")}}
  - : Gibt einen String zurück, der den [Kalender](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars) verwendet, um das interne ISO 8601-Datum zu interpretieren.
- {{jsxref("Object/constructor", "Temporal.ZonedDateTime.prototype.constructor")}}
  - : Die Konstruktionsfunktion, die das Instanzobjekt erstellt hat. Für `Temporal.ZonedDateTime`-Instanzen ist der anfängliche Wert der {{jsxref("Temporal/ZonedDateTime/ZonedDateTime", "Temporal.ZonedDateTime()")}}-Konstruktor.
- {{jsxref("Temporal/ZonedDateTime/day", "Temporal.ZonedDateTime.prototype.day")}}
  - : Gibt eine positive Ganzzahl zurück, die den 1-basierten Tagesindex im Monat dieses Datums repräsentiert, was die gleiche Tagesnummer ist, die Sie auf einem Kalender sehen würden. [Kalender](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars)-abhängig. Beginnt allgemein bei 1 und ist kontinuierlich, aber nicht immer.
- {{jsxref("Temporal/ZonedDateTime/dayOfWeek", "Temporal.ZonedDateTime.prototype.dayOfWeek")}}
  - : Gibt eine positive Ganzzahl zurück, die den 1-basierten Tagesindex in der Woche dieses Datums repräsentiert. Tage in einer Woche werden der Reihe nach von `1` bis {{jsxref("Temporal/ZonedDateTime/daysInWeek", "daysInWeek")}} nummeriert, wobei jede Zahl ihrem Namen zugeordnet ist. [Kalender](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars)-abhängig. 1 steht in der Regel für Montag im Kalender, selbst wenn Lokale, die den Kalender verwenden, einen anderen Tag als den ersten Tag der Woche betrachten können (siehe {{jsxref("Intl/Locale/getWeekInfo", "Intl.Locale.prototype.getWeekInfo()")}}).
- {{jsxref("Temporal/ZonedDateTime/dayOfYear", "Temporal.ZonedDateTime.prototype.dayOfYear")}}
  - : Gibt eine positive Ganzzahl zurück, die den 1-basierten Tagesindex im Jahr dieses Datums repräsentiert. Der erste Tag dieses Jahres ist `1`, und der letzte Tag ist der {{jsxref("Temporal/ZonedDateTime/daysInYear", "daysInYear")}}. [Kalender](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars)-abhängig.
- {{jsxref("Temporal/ZonedDateTime/daysInMonth", "Temporal.ZonedDateTime.prototype.daysInMonth")}}
  - : Gibt eine positive Ganzzahl zurück, die die Anzahl der Tage im Monat dieses Datums repräsentiert. [Kalender](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars)-abhängig.
- {{jsxref("Temporal/ZonedDateTime/daysInWeek", "Temporal.ZonedDateTime.prototype.daysInWeek")}}
  - : Gibt eine positive Ganzzahl zurück, die die Anzahl der Tage in der Woche dieses Datums repräsentiert. [Kalender](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars)-abhängig. Für den ISO 8601-Kalender sind dies immer 7, aber in anderen Kalendersystemen kann es von Woche zu Woche variieren.
- {{jsxref("Temporal/ZonedDateTime/daysInYear", "Temporal.ZonedDateTime.prototype.daysInYear")}}
  - : Gibt eine positive Ganzzahl zurück, die die Anzahl der Tage im Jahr dieses Datums repräsentiert. [Kalender](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars)-abhängig. Für den ISO 8601-Kalender sind dies 365 oder 366 in einem Schaltjahr.
- {{jsxref("Temporal/ZonedDateTime/epochMilliseconds", "Temporal.ZonedDateTime.prototype.epochMilliseconds")}}
  - : Gibt eine Ganzzahl zurück, die die Anzahl der Millisekunden darstellt, die seit der Unix-Epoche (Mitternacht zu Beginn des 1. Januar 1970, UTC) bis zu diesem Moment verstrichen sind. Entspricht der Division von `epochNanoseconds` durch `1e6` und dem Abrunden des Ergebnisses.
- {{jsxref("Temporal/ZonedDateTime/epochNanoseconds", "Temporal.ZonedDateTime.prototype.epochNanoseconds")}}
  - : Gibt ein {{jsxref("BigInt")}} zurück, das die Anzahl der Nanosekunden darstellt, die seit der Unix-Epoche (Mitternacht zu Beginn des 1. Januar 1970, UTC) bis zu diesem Moment verstrichen sind.
- {{jsxref("Temporal/ZonedDateTime/era", "Temporal.ZonedDateTime.prototype.era")}}
  - : Gibt einen kalenderspezifischen Kleinbuchstabenstring zurück, der die Ära dieses Datums darstellt, oder `undefined`, wenn der Kalender keine Ären verwendet (z.B. ISO 8601). `era` und `eraYear` zusammen identifizieren ein Jahr in einem Kalender eindeutig, auf dieselbe Weise wie `year`. [Kalender](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars)-abhängig. Für Gregorianisch ist es entweder `"ce"` oder `"bce"`.
- {{jsxref("Temporal/ZonedDateTime/eraYear", "Temporal.ZonedDateTime.prototype.eraYear")}}
  - : Gibt eine nicht-negative Ganzzahl zurück, die das Jahr dieses Datums innerhalb der Ära darstellt, oder `undefined`, wenn der Kalender keine Ären verwendet (z.B. ISO 8601). Der Jahresindex beginnt gewöhnlich bei 1 (häufiger) oder 0, und Jahre in einer Ära können mit der Zeit abnehmen (z.B. Gregorianisch v. Chr.). `era` und `eraYear` zusammen identifizieren ein Jahr in einem Kalender eindeutig, auf dieselbe Weise wie `year`. [Kalender](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars)-abhängig.
- {{jsxref("Temporal/ZonedDateTime/hour", "Temporal.ZonedDateTime.prototype.hour")}}
  - : Gibt eine Ganzzahl von 0 bis 23 zurück, die die Stundenkomponente dieser Zeit darstellt.
- {{jsxref("Temporal/ZonedDateTime/hoursInDay", "Temporal.ZonedDateTime.prototype.hoursInDay")}}
  - : Gibt eine positive Ganzzahl zurück, die die Anzahl der Stunden im Tag dieses Datums in der Zeitzone darstellt. Es kann mehr oder weniger als 24 sein, im Falle von Offset-Änderungen wie der Sommerzeit.
- {{jsxref("Temporal/ZonedDateTime/inLeapYear", "Temporal.ZonedDateTime.prototype.inLeapYear")}}
  - : Gibt einen booleschen Wert zurück, der anzeigt, ob dieses Datum in einem Schaltjahr liegt. Ein Schaltjahr ist ein Jahr, das mehr Tage (aufgrund eines Schalttages oder Schaltmonats) als ein gewöhnliches Jahr hat. [Kalender](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars)-abhängig.
- {{jsxref("Temporal/ZonedDateTime/microsecond", "Temporal.ZonedDateTime.prototype.microsecond")}}
  - : Gibt eine Ganzzahl von 0 bis 999 zurück, die die Mikrosekundenkomponente (10<sup>-6</sup> Sekunden) dieser Zeit darstellt.
- {{jsxref("Temporal/ZonedDateTime/millisecond", "Temporal.ZonedDateTime.prototype.millisecond")}}
  - : Gibt eine Ganzzahl von 0 bis 999 zurück, die die Millisekundenkomponente (10<sup>-3</sup> Sekunden) dieser Zeit darstellt.
- {{jsxref("Temporal/ZonedDateTime/minute", "Temporal.ZonedDateTime.prototype.minute")}}
  - : Gibt eine Ganzzahl von 0 bis 59 zurück, die die Minutenkomponente dieser Zeit darstellt.
- {{jsxref("Temporal/ZonedDateTime/month", "Temporal.ZonedDateTime.prototype.month")}}
  - : Gibt eine positive Ganzzahl zurück, die den 1-basierten Monatsindex im Jahr dieses Datums darstellt. Der erste Monat dieses Jahres ist `1`, und der letzte Monat ist der {{jsxref("Temporal/ZonedDateTime/monthsInYear", "monthsInYear")}}. [Kalender](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars)-abhängig. Beachten Sie, dass im Gegensatz zu {{jsxref("Date.prototype.getMonth()")}} der Index 1-basiert ist. Wenn der Kalender Schaltmonate hat, dann kann der Monat mit dem gleichen {{jsxref("Temporal/ZonedDateTime/monthCode", "monthCode")}} unterschiedliche `month`-Indizes für verschiedene Jahre haben.
- {{jsxref("Temporal/ZonedDateTime/monthCode", "Temporal.ZonedDateTime.prototype.monthCode")}}
  - : Gibt einen kalenderspezifischen String zurück, der den Monat dieses Datums darstellt. [Kalender](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars)-abhängig. Normalerweise ist es `M` plus eine zweistellige Monatsnummer. Für Schaltmonate ist es der Code des vorherigen Monats gefolgt von `L`. Wenn der Schaltmonat der erste Monat des Jahres ist, lautet der Code `M00L`.
- {{jsxref("Temporal/ZonedDateTime/monthsInYear", "Temporal.ZonedDateTime.prototype.monthsInYear")}}
  - : Gibt eine positive Ganzzahl zurück, die die Anzahl der Monate im Jahr dieses Datums darstellt. [Kalender](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars)-abhängig. Für den ISO 8601-Kalender sind es immer 12, aber in anderen Kalendersystemen kann es variieren.
- {{jsxref("Temporal/ZonedDateTime/nanosecond", "Temporal.ZonedDateTime.prototype.nanosecond")}}
  - : Gibt eine Ganzzahl von 0 bis 999 zurück, die die Nanosekundenkomponente (10<sup>-9</sup> Sekunden) dieser Zeit darstellt.
- {{jsxref("Temporal/ZonedDateTime/offset", "Temporal.ZonedDateTime.prototype.offset")}}
  - : Gibt einen String zurück, der den [Offset](#zeitzonen_und_offsets) darstellt, der verwendet wird, um den inneren Moment zu interpretieren, in der Form `±HH:mm` (oder `±HH:mm:ss.sssssssss` mit so viel Subminutenpräzision wie nötig).
- {{jsxref("Temporal/ZonedDateTime/offsetNanoseconds", "Temporal.ZonedDateTime.prototype.offsetNanoseconds")}}
  - : Gibt eine Ganzzahl zurück, die den [Offset](#zeitzonen_und_offsets) darstellt, der verwendet wird, um den inneren Moment zu interpretieren, als Anzahl der Nanosekunden (positiv oder negativ).
- {{jsxref("Temporal/ZonedDateTime/second", "Temporal.ZonedDateTime.prototype.second")}}
  - : Gibt eine Ganzzahl von 0 bis 59 zurück, die die Sekundenkomponente dieser Zeit darstellt.
- {{jsxref("Temporal/ZonedDateTime/timeZoneId", "Temporal.ZonedDateTime.prototype.timeZoneId")}}
  - : Gibt einen String zurück, der den [Zeitzonenbezeichner](#zeitzonen_und_offsets) darstellt, der verwendet wird, um den inneren Moment zu interpretieren. Es verwendet den gleichen String, der beim Erstellen des `Temporal.ZonedDateTime`-Objekts verwendet wurde, der entweder ein IANA-Zeitzonenname oder ein fester Offset ist.
- {{jsxref("Temporal/ZonedDateTime/weekOfYear", "Temporal.ZonedDateTime.prototype.weekOfYear")}}
  - : Gibt eine positive Ganzzahl zurück, die den 1-basierten Wochenindex im {{jsxref("Temporal/ZonedDateTime/yearOfWeek", "yearOfWeek")}} dieses Datums darstellt, oder `undefined`, wenn der Kalender kein gut definiertes Wochensystem hat. Die erste Woche des Jahres ist `1`. [Kalender](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars)-abhängig. Beachten Sie, dass für ISO 8601 die ersten und letzten Tage des Jahres der letzten Woche des Vorjahres oder der ersten Woche des nächsten Jahres zugeordnet sein können.
- {{jsxref("Temporal/ZonedDateTime/year", "Temporal.ZonedDateTime.prototype.year")}}
  - : Gibt eine Ganzzahl zurück, die die Anzahl der Jahre dieses Datums relativ zum Beginn des spezifischen Epochejahres des Kalenders darstellt. [Kalender](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars)-abhängig. Normalerweise ist Jahr 1 entweder das erste Jahr der neuesten Ära oder das ISO 8601 Jahr `0001`. Wenn die Epoche in der Mitte des Jahres beginnt, hat dieses Jahr den gleichen Wert vor und nach dem Startdatum der Ära.
- {{jsxref("Temporal/ZonedDateTime/yearOfWeek", "Temporal.ZonedDateTime.prototype.yearOfWeek")}}
  - : Gibt eine Ganzzahl zurück, die das Jahr darstellt, das mit dem {{jsxref("Temporal/ZonedDateTime/weekOfYear", "weekOfYear")}} dieses Datums gepaart werden soll, oder `undefined`, wenn der Kalender kein gut definiertes Wochensystem hat. [Kalender](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars)-abhängig. Normalerweise ist dies das Jahr des Datums, aber für ISO 8601 können die ersten und letzten Tage des Jahres der letzten Woche des Vorjahres oder der ersten Woche des nächsten Jahres zugeordnet sein, was dazu führt, dass sich das `yearOfWeek` um 1 unterscheidet.
- `Temporal.ZonedDateTime.prototype[Symbol.toStringTag]`
  - : Der anfängliche Wert der [`[Symbol.toStringTag]`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag)-Eigenschaft ist der String `"Temporal.ZonedDateTime"`. Diese Eigenschaft wird in {{jsxref("Object.prototype.toString()")}} verwendet.

## Instanzmethoden

- {{jsxref("Temporal/ZonedDateTime/add", "Temporal.ZonedDateTime.prototype.add()")}}
  - : Gibt ein neues `Temporal.ZonedDateTime`-Objekt zurück, das diesen Datum-Zeit-Punkt um eine bestimmte Dauer (in einem Formular, das von {{jsxref("Temporal/Duration/from", "Temporal.Duration.from()")}} konvertierbar ist) nach vorne verschoben darstellt.
- {{jsxref("Temporal/ZonedDateTime/equals", "Temporal.ZonedDateTime.prototype.equals()")}}
  - : Gibt `true` zurück, wenn dieser Datum-Zeit-Punkt in Bezug auf einen anderen Datum-Zeit-Punkt (in einem Formular, das von {{jsxref("Temporal/ZonedDateTime/from", "Temporal.ZonedDateTime.from()")}} konvertierbar ist) wertgleich ist, und `false` andernfalls. Sie werden sowohl anhand ihrer Momentwerte, Zeitzonen und ihrer Kalender verglichen, sodass zwei Datum-Zeit-Punkte aus verschiedenen Kalendern oder Zeitzonen von {{jsxref("Temporal.ZonedDateTime/compare", "Temporal.ZonedDateTime.compare()")}} als gleich angesehen werden können, jedoch nicht von `equals()`.
- {{jsxref("Temporal/ZonedDateTime/getTimeZoneTransition", "Temporal.ZonedDateTime.prototype.getTimeZoneTransition()")}}
  - : Gibt ein `Temporal.ZonedDateTime`-Objekt zurück, das den ersten Moment nach oder vor diesem Moment darstellt, an dem sich der UTC-Offset der Zeitzone ändert, oder `null`, wenn es keinen solchen Übergang gibt. Dies ist nützlich, um die Offset-Regeln einer Zeitzone herauszufinden, wie ihr Sommerzeitmuster.
- {{jsxref("Temporal/ZonedDateTime/round", "Temporal.ZonedDateTime.prototype.round()")}}
  - : Gibt ein neues `Temporal.ZonedDateTime`-Objekt zurück, das diesen Datum-Zeit-Punkt auf die angegebene Einheit gerundet darstellt.
- {{jsxref("Temporal/ZonedDateTime/since", "Temporal.ZonedDateTime.prototype.since()")}}
  - : Gibt ein neues {{jsxref("Temporal.Duration")}}-Objekt zurück, das die Dauer von einem anderen Datum-Zeit-Punkt (in einem Formular, das von {{jsxref("Temporal/ZonedDateTime/from", "Temporal.ZonedDateTime.from()")}} konvertierbar ist) bis zu diesem Datum-Zeit-Punkt darstellt. Die Dauer ist positiv, wenn der andere Datum-Zeit-Punkt vor diesem Datum-Zeit-Punkt liegt, und negativ, wenn danach.
- {{jsxref("Temporal/ZonedDateTime/startOfDay", "Temporal.ZonedDateTime.prototype.startOfDay()")}}
  - : Gibt ein `Temporal.ZonedDateTime`-Objekt zurück, das den ersten Moment dieses Datums in der Zeitzone darstellt. Es hat normalerweise eine Zeit von `00:00:00`, kann jedoch unterschiedlich sein, wenn das Mitternachtszeit wegen Offset-Änderungen nicht existiert, in welchem Fall die erste vorhandene Zeit zurückgegeben wird.
- {{jsxref("Temporal/ZonedDateTime/subtract", "Temporal.ZonedDateTime.prototype.subtract()")}}
  - : Gibt ein neues `Temporal.ZonedDateTime`-Objekt zurück, das diesen Datum-Zeit-Punkt um eine bestimmte Dauer (in einem Formular, das von {{jsxref("Temporal/Duration/from", "Temporal.Duration.from()")}} konvertierbar ist) nach hinten verschoben darstellt.
- {{jsxref("Temporal/ZonedDateTime/toInstant", "Temporal.ZonedDateTime.prototype.toInstant()")}}
  - : Gibt ein neues {{jsxref("Temporal.Instant")}}-Objekt zurück, das den Moment dieses Datum-Zeit-Punktes darstellt.
- {{jsxref("Temporal/ZonedDateTime/toJSON", "Temporal.ZonedDateTime.prototype.toJSON()")}}
  - : Gibt einen String zurück, der diesen Datum-Zeit-Punkt im selben [RFC 9557 Format](#rfc_9557_format) wie beim Aufrufen von {{jsxref("Temporal/ZonedDateTime/toString", "toString()")}} darstellt. Soll implizit von {{jsxref("JSON.stringify()")}} aufgerufen werden.
- {{jsxref("Temporal/ZonedDateTime/toLocaleString", "Temporal.ZonedDateTime.prototype.toLocaleString()")}}
  - : Gibt einen String zurück, der eine sprachabhängige Darstellung dieses Datum-Zeit-Punktes enthält.
- {{jsxref("Temporal/ZonedDateTime/toPlainDate", "Temporal.ZonedDateTime.prototype.toPlainDate()")}}
  - : Gibt ein neues {{jsxref("Temporal.PlainDate")}}-Objekt zurück, das den Datumsanteil dieses Datum-Zeit-Punktes darstellt.
- {{jsxref("Temporal/ZonedDateTime/toPlainDateTime", "Temporal.ZonedDateTime.prototype.toPlainDateTime()")}}
  - : Gibt ein neues {{jsxref("Temporal.PlainDateTime")}}-Objekt zurück, das das Datum und die Zeitanteile dieses Datum-Zeit-Punktes darstellt. Nur die Zeitzoneninformationen werden entfernt.
- {{jsxref("Temporal/ZonedDateTime/toPlainTime", "Temporal.ZonedDateTime.prototype.toPlainTime()")}}
  - : Gibt ein neues {{jsxref("Temporal.PlainTime")}}-Objekt zurück, das den Zeitanteil dieses Datum-Zeit-Punktes darstellt.
- {{jsxref("Temporal/ZonedDateTime/toString", "Temporal.ZonedDateTime.prototype.toString()")}}
  - : Gibt einen String zurück, der diesen Datum-Zeit-Punkt im [RFC 9557 Format](#rfc_9557_format) darstellt.
- {{jsxref("Temporal/ZonedDateTime/until", "Temporal.ZonedDateTime.prototype.until()")}}
  - : Gibt ein neues {{jsxref("Temporal.Duration")}}-Objekt zurück, das die Dauer von diesem Datum-Zeit-Punkt bis zu einem anderen Datum-Zeit-Punkt (in einem Formular, das von {{jsxref("Temporal/ZonedDateTime/from", "Temporal.ZonedDateTime.from()")}} konvertierbar ist) darstellt. Die Dauer ist positiv, wenn der andere Datum-Zeit-Punkt nach diesem Datum-Zeit-Punkt liegt, und negativ, wenn davor.
- {{jsxref("Temporal/ZonedDateTime/valueOf", "Temporal.ZonedDateTime.prototype.valueOf()")}}
  - : Wirft einen {{jsxref("TypeError")}}, der verhindert, dass `Temporal.ZonedDateTime`-Instanzen [implizit in Primitive umgewandelt werden](/de/docs/Web/JavaScript/Guide/Data_structures#primitive_coercion), wenn sie in arithmetischen oder Vergleichsoperationen verwendet werden.
- {{jsxref("Temporal/ZonedDateTime/with", "Temporal.ZonedDateTime.prototype.with()")}}
  - : Gibt ein neues `Temporal.ZonedDateTime`-Objekt zurück, das diesen Datum-Zeit-Punkt mit einigen Feldern darstellt, die durch neue Werte ersetzt wurden.
- {{jsxref("Temporal/ZonedDateTime/withCalendar", "Temporal.ZonedDateTime.prototype.withCalendar()")}}
  - : Gibt ein neues `Temporal.ZonedDateTime`-Objekt zurück, das diesen Datum-Zeit-Punkt im neuen Kalendersystem interpretiert darstellt.
- {{jsxref("Temporal/ZonedDateTime/withPlainTime", "Temporal.ZonedDateTime.prototype.withPlainTime()")}}
  - : Gibt ein neues `Temporal.ZonedDateTime`-Objekt zurück, das diesen Datum-Zeit-Punkt darstellt, wobei der Zeitanteil vollständig durch die neue Zeit ersetzt wurde (in einem Formular, das von {{jsxref("Temporal/PlainTime/from", "Temporal.PlainTime.from()")}} konvertierbar ist).
- {{jsxref("Temporal/ZonedDateTime/withTimeZone", "Temporal.ZonedDateTime.prototype.withTimeZone()")}}
  - : Gibt ein neues `Temporal.ZonedDateTime`-Objekt zurück, das denselben Moment wie dieser Datum-Zeit-Punkt darstellt, aber in der neuen Zeitzone.

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
