---
title: Temporal.ZonedDateTime
slug: Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime
l10n:
  sourceCommit: 76c2e04d720aa8260ba7d75788ed96776aac35c6
---

Das **`Temporal.ZonedDateTime`**-Objekt repräsentiert ein Datum und eine Uhrzeit mit einer Zeitzone. Es wird grundsätzlich als Kombination eines [Zeitpunkts](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/Instant), einer Zeitzone und eines Kalendersystems repräsentiert.

## Beschreibung

Ein `ZonedDateTime` fungiert als Brücke zwischen einer exakten Zeit und einer Wanduhrzeit: Es repräsentiert gleichzeitig einen Zeitpunkt in der Geschichte (wie ein {{jsxref("Temporal.Instant")}}) und eine lokale Wanduhrzeit (wie ein {{jsxref("Temporal.PlainDateTime")}}). Dies geschieht durch das Speichern des Zeitpunkts, der Zeitzone und des Kalendersystems. Die Zeitzone wird verwendet, um zwischen dem Zeitpunkt und der lokalen Zeit zu konvertieren, und das Kalendersystem wird zur Interpretation der lokalen Zeit verwendet.

`ZonedDateTime` ist die einzige `Temporal`-Klasse, die Zeitzonen berücksichtigt. Das Hinzufügen einer Zeitzone führt dazu, dass `ZonedDateTime`-Objekte wichtige Verhaltensunterschiede gegenüber {{jsxref("Temporal.PlainDateTime")}}-Objekten aufweisen. Insbesondere können Sie nicht mehr davon ausgehen, dass „die Zeit 1 Minute später“ jeden Tag gleich ist oder dass ein Tag 24 Stunden hat. Im schlimmsten Fall kann ein ganzer Tag im lokalen Kalender fehlen. Im Folgenden bieten wir einen kurzen Überblick über Zeitzonen und Offsets sowie darüber, wie sie die Konvertierung zwischen UTC-Zeit und lokaler Zeit beeinflussen.

### Zeitzonen und Offsets

Alle Zeiten in JavaScript haben einen einheitlichen Standard: die UTC-Zeit, die fortlaufend und gleichmäßig zunimmt, während die physische Zeit verstreicht. Im Gegensatz dazu interessieren sich Benutzer eher für ihre lokale Zeit, also die Zeit, die sie auf ihren Kalendern und Uhren ablesen. Der Prozess der Konvertierung zwischen UTC-Zeit und lokaler Zeit umfasst einen Zeitzonen-_Offset_, der wie folgt berechnet wird:

```plain
local time = UTC time + offset
```

Wenn beispielsweise die UTC-Zeit 1970-01-01T00:00:00 und der Offset `"-05:00"` ist, lautet die lokale Zeit:

```plain
1970-01-01T00:00:00 + -05:00 = 1969-12-31T19:00:00
```

Indem diese lokale Zeit mit dem Offset ergänzt wird und somit als „1969-12-31T19:00:00-05:00“ ausgedrückt wird, kann sie nun eindeutig als Zeitpunkt in der Geschichte verstanden werden.

Um den Offset zu kennen, benötigen wir zwei Informationen: die _Zeitzone_ und den _Zeitpunkt_. Die Zeitzone ist eine Region auf der Erde, in der zu jedem Zeitpunkt derselbe Offset verwendet wird. Zwei Uhren in derselben Zeitzone zeigen gleichzeitig immer dieselbe Zeit an, aber der Offset ist nicht unbedingt konstant: Das heißt, die Zeiten dieser Uhren können sich abrupt ändern. Dies geschieht häufig bei Übergängen zur Sommerzeit, bei denen sich der Offset um eine Stunde ändert, was zweimal im Jahr geschieht. Offsets können sich auch aufgrund politischer Änderungen dauerhaft ändern, beispielsweise wenn ein Land die Zeitzone wechselt.

Die Zeitzonen werden in der [IANA Time Zone Database](https://www.iana.org/time-zones) gespeichert. Jede IANA-Zeitzone hat:

- Einen _primären Zeitzonenbezeichner_, der die Zeitzone eindeutig identifiziert. Er verweist üblicherweise auf ein geografisches Gebiet, das durch eine Stadt verankert ist (z. B. `Europe/Paris` oder `Africa/Kampala`), kann aber auch Zeitzonen mit einem einzigen Offset wie `UTC` (ein konstanter Offset von `+00:00`) oder `Etc/GMT+5` bezeichnen (was aus historischen Gründen einem negativen Offset von `-05:00` entspricht). Aus historischen Gründen lautet der primäre Name für die UTC-Zeitzone `UTC`, obwohl sie in IANA `Etc/UTC` heißt.
- Eine _Zeitzonendefinition_ in Form einer Tabelle, die UTC-Datums-/Uhrzeitbereiche (einschließlich zukünftiger Bereiche) bestimmten Offsets zuordnet.
- Keinen oder mehrere _nicht primäre Zeitzonenbezeichner_, die Aliase des primären Zeitzonenbezeichners sind. Dies sind üblicherweise historische Namen, die nicht mehr verwendet werden, aber aus Kompatibilitätsgründen beibehalten werden. Weitere Informationen finden Sie unten.

Als Eingabe werden benannte Bezeichner unabhängig von Groß- und Kleinschreibung abgeglichen. Intern werden sie in ihrer bevorzugten Groß- und Kleinschreibung gespeichert, und nicht primäre Bezeichner werden _nicht_ in ihren primären Bezeichner konvertiert.

> [!NOTE]
> Beim Festlegen des Zeitzonennamens sollten Sie ihn nur selten auf `"UTC"` setzen. `ZonedDateTime` ist dafür vorgesehen, Benutzern angezeigt zu werden, aber kein Mensch lebt in der Zeitzone „UTC“. Wenn Sie die Zeitzone zur Konstruktionszeit nicht kennen, aber die Wanduhrzeit kennen, verwenden Sie ein {{jsxref("Temporal.PlainDateTime")}}. Wenn Sie den exakten Zeitpunkt kennen, verwenden Sie ein {{jsxref("Temporal.Instant")}}.

Wenn eine `Temporal`-API einen _Zeitzonenbezeichner_ akzeptiert, akzeptiert sie zusätzlich zu primären und nicht primären Zeitzonenbezeichnern auch einen _Offset-Zeitzonenbezeichner_. Dieser hat dieselbe Form wie der Offset, allerdings ist keine Genauigkeit unterhalb von Minuten zulässig. Beispielsweise sind `+05:30`, `-08` und `+0600` alles gültige Offset-Bezeichner. Intern werden Offset-Bezeichner im Format `±HH:mm` gespeichert.

> [!NOTE]
> Vermeiden Sie die Verwendung von Offset-Bezeichnern, wenn Sie stattdessen eine benannte Zeitzone verwenden können. Selbst wenn eine Region immer einen einzelnen Offset verwendet hat, ist es besser, den benannten Bezeichner zu verwenden, um sich gegen zukünftige politische Änderungen des Offsets abzusichern.
>
> Wenn eine Region mehrere Offsets verwendet (oder verwendet hat), ist die Verwendung ihrer benannten Zeitzone noch wichtiger. Dies liegt daran, dass `Temporal.ZonedDateTime` Methoden wie `add` oder `with` verwenden kann, um neue Instanzen zu einem anderen Zeitpunkt zu erzeugen. Wenn diese abgeleiteten Instanzen einem Zeitpunkt entsprechen, der einen anderen Offset verwendet (beispielsweise nach einem Übergang zur Sommerzeit), haben Ihre Berechnungen eine falsche lokale Zeit. Die Verwendung einer benannten Zeitzone stellt sicher, dass lokale Daten und Uhrzeiten stets für den korrekten Offset dieses Zeitpunkts angepasst werden.

Der Einfachheit halber können Sie einen Zeitzonenbezeichner bei der Übergabe an `Temporal`-APIs wie `Temporal.ZonedDateTime.prototype.withTimeZone()` und die Option `timeZoneId` von `Temporal.ZonedDateTime.from()` in einigen weiteren Formen angeben:

- Als eine andere `ZonedDateTime`-Instanz, deren `timeZoneId` verwendet wird.
- Als [RFC-9557-String](#rfc-9557-format) mit einer Zeitzonenannotation, dessen Zeitzonenbezeichner verwendet wird.
- Als ISO-8601-/RFC-3339-String, der einen Offset enthält; dessen Offset wird als Offset-Bezeichner verwendet. Bei Verwendung von `Z` wird hingegen die Zeitzone `"UTC"` verwendet. Diese Verwendung wird im Allgemeinen nicht empfohlen, weil Offset-Bezeichner, wie oben erläutert, nicht die Möglichkeit bieten, andere `Temporal.ZonedDateTime`-Instanzen sicher über einen Offset-Übergang hinweg abzuleiten, etwa beim Beginn oder Ende der Sommerzeit. Ziehen Sie stattdessen in Betracht, einfach `Temporal.Instant` zu verwenden oder die tatsächliche benannte Zeitzone des Benutzers abzurufen.

Die IANA-Zeitzonendatenbank ändert sich von Zeit zu Zeit, üblicherweise, um als Reaktion auf politische Änderungen neue Zeitzonen hinzuzufügen. In seltenen Fällen werden IANA-Zeitzonenbezeichner jedoch umbenannt, um einer aktualisierten englischen Übersetzung eines Stadtnamens zu entsprechen oder veraltete Namenskonventionen zu aktualisieren. Hier sind beispielsweise einige bemerkenswerte Namensänderungen:

| Aktueller primärer IANA-Bezeichner | Alter, jetzt nicht primärer Bezeichner |
| ---------------------------------- | -------------------------------------- |
| `America/Argentina/Buenos_Aires`   | `America/Buenos_Aires`                 |
| `Asia/Kolkata`                     | `Asia/Calcutta`                        |
| `Asia/Ho_Chi_Minh`                 | `Asia/Saigon`                          |
| `Europe/Kyiv`                      | `Europe/Kiev`                          |

Historisch verursachten diese Umbenennungen Probleme für Programmierer, weil die Unicode-[CLDR-Datenbank](https://github.com/unicode-org/cldr/blob/main/common/bcp47/timezone.xml) (eine Bibliothek, die von Browsern zur Bereitstellung von Zeitzonenbezeichnern und -daten verwendet wird) IANAs Umbenennungen aus [Stabilitätsgründen](https://unicode.org/reports/tr35/#Time_Zone_Identifiers) nicht folgte. Daher gaben einige Browser wie Chrome und Safari die veralteten Bezeichner von CLDR zurück, während andere Browser wie Firefox die Standardwerte von CLDR überschrieben und die aktuellen primären Bezeichner zurückgaben.

Mit der Einführung von Temporal ist dieses Verhalten nun stärker standardisiert:

- [CLDR-Daten](https://github.com/unicode-org/cldr/blob/main/common/bcp47/timezone.xml) enthalten jetzt ein Attribut `"_iana"`, das den aktuellsten Bezeichner angibt, wenn der ältere, stabile Bezeichner umbenannt wurde. Browser können dieses neue Attribut verwenden, um Aufrufern aktuelle Bezeichner bereitzustellen.
- Vom Programmierer bereitgestellte Zeitzonenbezeichner werden niemals durch einen Alias ersetzt. Wenn der Aufrufer beispielsweise `Asia/Calcutta` oder `Asia/Kolkata` als Bezeichnereingabe für {{jsxref("Temporal/ZonedDateTime/from", "Temporal.ZonedDateTime.from()")}} bereitstellt, wird derselbe Bezeichner in der {{jsxref("Temporal/ZonedDateTime/timeZoneId", "timeZoneId")}} der resultierenden Instanz zurückgegeben. Beachten Sie, dass die Groß- und Kleinschreibung von Ausgaben zur Übereinstimmung mit IANA normalisiert wird, sodass `ASIA/calCuTTa` als Eingabe eine {{jsxref("Temporal/ZonedDateTime/timeZoneId", "timeZoneId")}} von `Asia/Calcutta` als Ausgabe erzeugt.
- Wenn ein Zeitzonenbezeichner nicht von einem Aufrufer bereitgestellt wird, sondern stattdessen vom System selbst stammt (beispielsweise bei Verwendung von {{jsxref("Temporal/Now/timeZoneId", "Temporal.Now.timeZoneId()")}}), werden in allen Browsern moderne Bezeichner zurückgegeben. Bei Umbenennungen von Städten gibt es eine Verzögerung von zwei Jahren, bevor diese APIs für vom System bereitgestellte Bezeichner den neuen Namen offenlegen. Dadurch erhalten andere Komponenten (wie ein Node-Server) Zeit, ihre Kopien der IANA-Datenbank zu aktualisieren, damit sie den neuen Namen erkennen.

Beachten Sie, dass die Zuordnung primärer Bezeichner den Ländercode bewahrt: Beispielsweise führt die IANA-Datenbank `Atlantic/Reykjavik` als Alias für `Africa/Abidjan` auf, aber da sie unterschiedlichen Ländern entsprechen (Island beziehungsweise Côte d’Ivoire), werden sie als unterschiedliche primäre Bezeichner behandelt.

Diese Standardisierung gilt auch außerhalb von `Temporal`. Beispielsweise wird die Option `timeZone`, die von {{jsxref("Intl/DateTimeFormat/resolvedOptions", "Intl.DateTimeFormat.prototype.resolvedOptions()")}} zurückgegeben wird, ebenfalls niemals durch einen Alias ersetzt, obwohl Browser diese Bezeichner vor der Standardisierung durch Temporal traditionell kanonisiert haben. Andererseits geben {{jsxref("Intl/Locale/getTimeZones", "Intl.Locale.prototype.getTimeZones()")}} und {{jsxref("Intl.supportedValuesOf()")}} (Option `timeZone`) den aktuellsten Bezeichner zurück, während einige Browser früher den alten, nicht primären Bezeichner zurückgaben.

### RFC-9557-Format

`ZonedDateTime`-Objekte können mithilfe des [RFC-9557](https://datatracker.ietf.org/doc/html/rfc9557)-Formats serialisiert und geparst werden, einer Erweiterung des Formats [ISO 8601 / RFC 3339](https://datatracker.ietf.org/doc/html/rfc3339). Der String hat die folgende Form (Leerzeichen dienen nur der Lesbarkeit und sollten im tatsächlichen String nicht vorhanden sein):

```plain
YYYY-MM-DD T HH:mm:ss.sssssssss Z/±HH:mm [time_zone_id] [u-ca=calendar_id]
```

- `YYYY`
  - : Entweder eine vierstellige Zahl oder eine sechsstellige Zahl mit einem `+`- oder `-`-Vorzeichen.
- `MM`
  - : Eine zweistellige Zahl von `01` bis `12`.
- `DD`
  - : Eine zweistellige Zahl von `01` bis `31`. Die Komponenten `YYYY`, `MM` und `DD` können durch `-` oder gar nicht getrennt werden.
- `T` {{optional_inline}}
  - : Das Datum-Uhrzeit-Trennzeichen, das `T`, `t` oder ein Leerzeichen sein kann. Es ist genau dann vorhanden, wenn `HH` vorhanden ist.
- `HH` {{optional_inline}}
  - : Eine zweistellige Zahl von `00` bis `23`. Der Standardwert ist `00`.
- `mm` {{optional_inline}}
  - : Eine zweistellige Zahl von `00` bis `59`. Der Standardwert ist `00`.
- `ss.sssssssss` {{optional_inline}}
  - : Eine zweistellige Zahl von `00` bis `59`. Optional kann darauf ein `.` oder `,` und eine bis neun Ziffern folgen. Der Standardwert ist `00`. Die Komponenten `HH`, `mm` und `ss` können durch `:` oder gar nicht getrennt werden. Sie können entweder nur `ss` oder sowohl `ss` als auch `mm` auslassen, sodass die Zeit eine von drei Formen haben kann: `HH`, `HH:mm` oder `HH:mm:ss.sssssssss`.
- `Z/±HH:mm` {{optional_inline}}
  - : Entweder die UTC-Kennzeichnung `Z` oder `z` oder ein Offset von UTC in der Form `+` oder `-`, gefolgt vom gleichen Format wie die Zeitkomponente. Beachten Sie, dass Genauigkeit unterhalb von Minuten (`:ss.sssssssss`) möglicherweise von anderen Systemen nicht unterstützt wird und zwar akzeptiert, aber niemals ausgegeben wird. Wenn sie weggelassen wird, wird der Offset aus dem Zeitzonenbezeichner abgeleitet. Wenn sie vorhanden ist, muss auch die Zeit angegeben werden. `Z` ist nicht dasselbe wie `+00:00`: Ersteres bedeutet, dass die Zeit unabhängig vom Zeitzonenbezeichner in UTC-Form angegeben wird, während Letzteres bedeutet, dass die Zeit in lokaler Zeit angegeben wird, die zufällig UTC+0 entspricht, und über die [`offset`-Option](#offset-mehrdeutigkeit) gegen den Zeitzonenbezeichner validiert wird.
- `[time_zone_id]`
  - : Ersetzen Sie `time_zone_id` durch den oben beschriebenen Zeitzonenbezeichner (benannt oder Offset). Er kann ein _kritisches Flag_ haben, indem dem Bezeichner `!` vorangestellt wird: beispielsweise `[!America/New_York]`. Dieses Flag teilt anderen Systemen im Allgemeinen mit, dass es nicht ignoriert werden darf, wenn sie es nicht unterstützen. Beachten Sie, dass es für `Temporal.ZonedDateTime.from()` erforderlich ist: Wird es weggelassen, führt dies zu einem `RangeError`. Wenn Sie ISO-8601-/RFC-3339-Strings ohne Zeitzonenbezeichner-Annotationen parsen möchten, verwenden Sie stattdessen {{jsxref("Temporal/Instant/from", "Temporal.Instant.from()")}}.
- `[u-ca=calendar_id]` {{optional_inline}}
  - : Ersetzen Sie `calendar_id` durch den zu verwendenden Kalender. Eine Liste häufig unterstützter Kalendertypen finden Sie unter [`Intl.supportedValuesOf()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/supportedValuesOf#supported_calendar_types). Der Standardwert ist `[u-ca=iso8601]`. Er kann ein _kritisches Flag_ haben, indem dem Schlüssel `!` vorangestellt wird: beispielsweise `[!u-ca=iso8601]`. Dieses Flag teilt anderen Systemen im Allgemeinen mit, dass es nicht ignoriert werden darf, wenn sie es nicht unterstützen. Der `Temporal`-Parser löst einen Fehler aus, wenn die Annotationen zwei oder mehr Kalenderannotation enthalten und eine davon kritisch ist. Beachten Sie, dass `YYYY-MM-DD` immer als ISO-8601-Kalenderdatum interpretiert und anschließend in den angegebenen Kalender konvertiert wird.

Als Eingabe werden andere Annotationen im Format `[key=value]` ignoriert, und sie dürfen nicht das kritische Flag haben.

Beim Serialisieren können Sie die Ziffern für Sekundenbruchteile, die Anzeige des Offset-/Zeitzonenbezeichners-/Kalenderbezeichners sowie das Hinzufügen eines kritischen Flags für die Annotationen konfigurieren.

### Mehrdeutigkeit und Lücken von lokaler Zeit zu UTC-Zeit

Bei gegebener Zeitzone ist die Konvertierung von UTC zu lokaler Zeit unkompliziert: Zuerst wird anhand des Zeitzonennamens und des Zeitpunkts der Offset ermittelt, dann wird der Offset zum Zeitpunkt addiert. Umgekehrt gilt dies nicht: Die Konvertierung von lokaler Zeit zu UTC-Zeit ohne expliziten Offset ist mehrdeutig, da eine lokale Zeit null, einer oder vielen UTC-Zeiten entsprechen kann. Betrachten Sie die häufigste Ursache: Übergänge zur Sommerzeit. Nehmen wir New York als Beispiel. Sein Standardoffset ist UTC-5, aber während der Sommerzeit werden alle Uhren um eine Stunde vorgestellt, sodass der Offset UTC-4 beträgt. In den USA finden Übergänge um 2:00 Uhr Ortszeit statt; betrachten Sie daher diese beiden Übergangstage:

| UTC-Zeit             | New-York-Zeit             |
| -------------------- | ------------------------- |
| 2024-03-10T06:58:00Z | 2024-03-10T01:58:00-05:00 |
| 2024-03-10T06:59:00Z | 2024-03-10T01:59:00-05:00 |
| 2024-03-10T07:00:00Z | 2024-03-10T03:00:00-04:00 |
| ---                  | ---                       |
| 2024-11-03T05:58:00Z | 2024-11-03T01:58:00-04:00 |
| 2024-11-03T05:59:00Z | 2024-11-03T01:59:00-04:00 |
| 2024-11-03T06:00:00Z | 2024-11-03T01:00:00-05:00 |

Wie Sie sehen können, verschwand im März eine Stunde aus der lokalen Zeit, und im November haben wir zwei Stunden mit derselben Wanduhrzeit. Angenommen, wir haben ein `PlainDateTime` gespeichert, das „2024-03-10T02:05:00“ angibt, und möchten es in der Zeitzone `America/New_York` interpretieren. Dann gibt es keine entsprechende Zeit, während ein `PlainDateTime`, das „2024-11-03T01:05:00“ angibt, zwei unterschiedlichen Zeitpunkten entsprechen kann.

Beim Erstellen eines `ZonedDateTime` aus einer lokalen Zeit (mithilfe von {{jsxref("Temporal/ZonedDateTime/from", "Temporal.ZonedDateTime.from()")}}, {{jsxref("Temporal/ZonedDateTime/with", "Temporal.ZonedDateTime.prototype.with()")}}, {{jsxref("Temporal/PlainDateTime/toZonedDateTime", "Temporal.PlainDateTime.prototype.toZonedDateTime()")}}) kann das Verhalten bei Mehrdeutigkeiten und Lücken über die Option `disambiguation` konfiguriert werden:

- `earlier`
  - : Wenn zwei mögliche Zeitpunkte existieren, wählen Sie den früheren. Bei einer Lücke gehen Sie um die Dauer der Lücke zurück.
- `later`
  - : Wenn zwei mögliche Zeitpunkte existieren, wählen Sie den späteren. Bei einer Lücke gehen Sie um die Dauer der Lücke vor.
- `compatible` (Standard)
  - : Dasselbe Verhalten wie {{jsxref("Date")}}: Verwenden Sie `later` für Lücken und `earlier` für Mehrdeutigkeiten.
- `reject`
  - : Löst einen `RangeError` aus, wenn eine Mehrdeutigkeit oder eine Lücke vorliegt.

Es gibt mehrere Fälle, in denen beim Erstellen eines `ZonedDateTime` keine Mehrdeutigkeit besteht:

- Wenn die Zeit über den Offset `Z` in UTC angegeben wird.
- Wenn der Offset explizit angegeben und verwendet wird (siehe unten).

### Offset-Mehrdeutigkeit

Wir haben bereits gezeigt, wie Mehrdeutigkeit bei der Interpretation einer lokalen Zeit in einer Zeitzone entstehen kann, wenn kein expliziter Offset angegeben wird. Wenn Sie jedoch einen expliziten Offset angeben, entsteht ein weiterer Konflikt: zwischen dem angegebenen Offset und dem aus der Zeitzone und der lokalen Zeit berechneten Offset. Dies ist ein unvermeidliches Problem der realen Welt: Wenn Sie eine Zeit in der Zukunft mit einem erwarteten Offset speichern, kann sich die Zeitzonendefinition vor dem Eintreten dieser Zeit aus politischen Gründen geändert haben. Angenommen, wir setzen 2018 eine Erinnerung auf die Zeit `2019-12-23T12:00:00-02:00[America/Sao_Paulo]` (während der Sommerzeit; Brasilien liegt auf der Südhalbkugel, sodass die Sommerzeit dort im Oktober beginnt und im Februar endet). Bevor diese Zeit jedoch eintritt, beschließt Brasilien Anfang 2019, die Sommerzeit nicht mehr zu beachten, sodass der tatsächliche Offset `-03:00` beträgt. Sollte die Erinnerung nun weiterhin mittags ausgelöst werden (die lokale Zeit beibehalten), oder sollte sie um 11:00 Uhr ausgelöst werden (die exakte Zeit beibehalten)?

Damit Offset-Mehrdeutigkeit bestehen kann, muss ein Zeitstempel-String mit anderen Regeln der IANA Time Zone Database geparst werden als den Regeln, die beim ursprünglichen Erzeugen des Zeitstempels verwendet wurden. Dies wird niemals passieren, wenn Zeitstempel während derselben Ausführung eines JavaScript-Programms erzeugt werden, denn die ECMAScript-Spezifikation verlangt, dass die Regeln der IANA Time Zone Database für die Lebensdauer eines JavaScript-Programms konsistent sein müssen.

Offset-Mehrdeutigkeit kann jedoch bestehen, wenn ein JavaScript-Programm Zeitstempel parst, die früher gespeichert wurden, wie im obigen Beispiel `America/Sao_Paulo`, und die IANA Time Zone Database aktualisiert wurde, seit der Zeitstempel ursprünglich erzeugt wurde. Sie kann auch auftreten, wenn Zeitstempel zwischen Computern kommuniziert werden (oder selten zwischen unterschiedlicher Software auf demselben Computer!), die unterschiedliche Versionen der IANA Time Zone Database verwenden. Die IANA Time Zone Database verfügt außerdem über Build-Optionen (beispielsweise die Verwendung oder Nichtverwendung veralteter Regeln in `backzone`), die Offset-Mehrdeutigkeit verursachen können, wenn Zeitstempel zwischen Computern mit unterschiedlicher Software kommuniziert werden, selbst wenn die Version der IANA Time Zone Database identisch ist.

Offset-Mehrdeutigkeit tritt selten auf und betrifft fast immer nur Zeitstempel vor 1970 oder Zeitstempel, die Monate oder Jahre in der Zukunft liegen. Wenn dieses Problem jedoch auftritt, wird standardmäßig ein `RangeError` ausgelöst. Beim Erstellen eines `ZonedDateTime` mit {{jsxref("Temporal/ZonedDateTime/from", "Temporal.ZonedDateTime.from()")}} oder beim Aktualisieren mit der Methode {{jsxref("Temporal/ZonedDateTime/with", "with()")}} können Sie diese Ausnahme verhindern, indem Sie mit der Option `offset` entscheiden, ob der Offset oder der Zeitzonenbezeichner „gewinnt“:

- `use`
  - : Verwenden Sie den Offset, um die exakte Zeit zu berechnen. Diese Option „verwendet“ den Offset, um den durch den Zeitstempel-String beabsichtigten Zeitpunkt zu bestimmen, selbst wenn sich der Offset zu diesem Zeitpunkt geändert hat. Der Zeitzonenbezeichner wird anschließend weiterhin verwendet, um den möglicherweise aktualisierten Offset abzuleiten und diesen Offset zu verwenden, um die exakte Zeit in lokale Zeit umzuwandeln. Im obigen Beispiel `2019-12-23T12:00:00-02:00[America/Sao_Paulo]` würde diese Option bewirken, dass die Erinnerung um 11:00 Uhr Ortszeit ausgelöst wird.
- `ignore`
  - : Verwenden Sie den Zeitzonenbezeichner, um den Offset neu zu berechnen, und ignorieren Sie den im String angegebenen Offset. Diese Option behält dieselbe lokale Zeit bei, die ursprünglich beim Speichern der Zeit berechnet wurde, kann jedoch zu einem anderen Zeitpunkt führen. Beachten Sie, dass durch das Ignorieren des Offsets dieselbe [Mehrdeutigkeit bei der Interpretation lokaler Zeit](#mehrdeutigkeit_und_lücken_von_lokaler_zeit_zu_utc-zeit) entstehen kann, die über die Option `disambiguation` aufgelöst wird. Im obigen Beispiel `2019-12-23T12:00:00-02:00[America/Sao_Paulo]` würde diese Option bewirken, dass die Erinnerung um 12:00 Uhr Ortszeit ausgelöst wird.
- `reject`
  - : Löst einen `RangeError` aus, wenn ein Konflikt zwischen dem Offset und dem Zeitzonenbezeichner besteht. Dies ist der Standardwert für {{jsxref("Temporal/ZonedDateTime/from", "Temporal.ZonedDateTime.from()")}}.
- `prefer`
  - : Verwenden Sie den Offset, wenn er gültig ist; berechnen Sie andernfalls den Offset aus dem Zeitzonenbezeichner. Dies ist der Standardwert für {{jsxref("Temporal/ZonedDateTime/with", "Temporal.ZonedDateTime.prototype.with()")}} (siehe diese Methode für weitere Details). Dies unterscheidet sich von `ignore`, weil bei Mehrdeutigkeit der lokalen Zeit der Offset zur Auflösung verwendet wird und nicht die Option `disambiguation`.

Wenn Sie im Voraus wissen, wie Sie mit Offset-Mehrdeutigkeit umgehen möchten, sollten Sie die Option `offset` verwenden, um standardmäßig ausgelöste Ausnahmen zu vermeiden. Beispielsweise möchte eine Kalenderanwendung wahrscheinlich, dass der Zeitzonenbezeichner „gewinnt“, damit wiederkehrende Besprechungen in der aktuellsten lokalen Zeit für diese Zeitzone angezeigt werden; daher ist `offset: "ignore"` geeignet. Andererseits sollte eine Aufgabenplaner-Anwendung, die eine Aufgabe genau 3 Stunden ab jetzt ausführt, wahrscheinlich `offset: "use"` wählen, weil Änderungen an Zeitzonenregeln die Bedeutung von „3 Stunden ab jetzt“ nicht verändern sollten.

In einigen Fällen wissen Sie möglicherweise nicht, welche `offset`-Option die richtige ist, ohne Eingaben vom Benutzer zu erhalten. In diesen Fällen können Sie den `RangeError` abfangen und dann Ihren Benutzer fragen, welche lokale Zeit die richtige ist, und das Parsen anschließend mit einer anderen `offset`-Option wiederholen, die der Auswahl des Benutzers entspricht.

Beachten Sie, dass der Offset `Z` nicht gleichbedeutend mit `+00:00` ist. Der Offset `Z` bedeutet gemäß [RFC 9557](https://www.rfc-editor.org/info/rfc9557/#name-update-to-rfc-3339): „Die Zeit in UTC ist bekannt, aber der Offset zur lokalen Zeit ist unbekannt.“ Wenn der Zeit-String den Offset `Z` verwendet, wird die Option `offset` ignoriert und der Offset aus der Zeitzonen-ID abgeleitet. Der Offset `+00:00` wird dagegen als lokaler Zeitzonen-Offset interpretiert, der zufällig mit UTC übereinstimmt, und gegen die Zeitzonen-ID validiert.

> [!NOTE]
> Obwohl {{jsxref("Temporal/Instant/from", "Temporal.Instant.from()")}} ebenfalls einen [RFC-9557](#rfc-9557-format)-String in derselben Form akzeptiert, gibt es keine Mehrdeutigkeit, weil der Zeitzonenbezeichner immer ignoriert und nur der Offset gelesen wird.

## Konstruktor

- {{jsxref("Temporal/ZonedDateTime/ZonedDateTime", "Temporal.ZonedDateTime()")}}
  - : Erstellt ein neues `Temporal.ZonedDateTime`-Objekt durch direkte Angabe der zugrunde liegenden Daten.

## Statische Methoden

- {{jsxref("Temporal/ZonedDateTime/compare", "Temporal.ZonedDateTime.compare()")}}
  - : Gibt eine Zahl (-1, 0 oder 1) zurück, die angibt, ob die erste Datum-Uhrzeit vor, gleich oder nach der zweiten Datum-Uhrzeit liegt. Entspricht dem Vergleichen der {{jsxref("Temporal/ZonedDateTime/epochNanoseconds", "epochNanoseconds")}} der beiden Datum-Uhrzeiten.
- {{jsxref("Temporal/ZonedDateTime/from", "Temporal.ZonedDateTime.from()")}}
  - : Erstellt ein neues `Temporal.ZonedDateTime`-Objekt aus einem anderen `Temporal.ZonedDateTime`-Objekt, einem Objekt mit Eigenschaften für Datum, Zeit und Zeitzone oder einem [RFC-9557](#rfc-9557-format)-String.

## Instanzeigenschaften

Diese Eigenschaften sind auf `Temporal.ZonedDateTime.prototype` definiert und werden von allen `Temporal.ZonedDateTime`-Instanzen gemeinsam genutzt.

- {{jsxref("Temporal/ZonedDateTime/calendarId", "Temporal.ZonedDateTime.prototype.calendarId")}}
  - : Gibt einen String zurück, der den zur Interpretation des internen ISO-8601-Datums verwendeten [Kalender](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars) repräsentiert.
- {{jsxref("Object/constructor", "Temporal.ZonedDateTime.prototype.constructor")}}
  - : Die Konstruktorfunktion, die das Instanzobjekt erstellt hat. Für `Temporal.ZonedDateTime`-Instanzen ist der Anfangswert der Konstruktor {{jsxref("Temporal/ZonedDateTime/ZonedDateTime", "Temporal.ZonedDateTime()")}}.
- {{jsxref("Temporal/ZonedDateTime/day", "Temporal.ZonedDateTime.prototype.day")}}
  - : Gibt eine positive Ganzzahl zurück, die den bei 1 beginnenden Tagesindex im Monat dieses Datums repräsentiert, also dieselbe Tagesnummer, die Sie in einem Kalender sehen würden. Abhängig vom [Kalender](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars). Beginnt im Allgemeinen bei 1 und ist fortlaufend, aber nicht immer.
- {{jsxref("Temporal/ZonedDateTime/dayOfWeek", "Temporal.ZonedDateTime.prototype.dayOfWeek")}}
  - : Gibt eine positive Ganzzahl zurück, die den bei 1 beginnenden Tagesindex in der Woche dieses Datums repräsentiert. Tage einer Woche werden fortlaufend von `1` bis {{jsxref("Temporal/ZonedDateTime/daysInWeek", "daysInWeek")}} nummeriert, wobei jede Zahl ihrem Namen entspricht. Abhängig vom [Kalender](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars). 1 repräsentiert im Kalender üblicherweise Montag, selbst wenn Gebietsschemas, die den Kalender verwenden, möglicherweise einen anderen Tag als ersten Wochentag betrachten (siehe {{jsxref("Intl/Locale/getWeekInfo", "Intl.Locale.prototype.getWeekInfo()")}}).
- {{jsxref("Temporal/ZonedDateTime/dayOfYear", "Temporal.ZonedDateTime.prototype.dayOfYear")}}
  - : Gibt eine positive Ganzzahl zurück, die den bei 1 beginnenden Tagesindex im Jahr dieses Datums repräsentiert. Der erste Tag dieses Jahres ist `1`, und der letzte Tag ist {{jsxref("Temporal/ZonedDateTime/daysInYear", "daysInYear")}}. Abhängig vom [Kalender](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars).
- {{jsxref("Temporal/ZonedDateTime/daysInMonth", "Temporal.ZonedDateTime.prototype.daysInMonth")}}
  - : Gibt eine positive Ganzzahl zurück, die die Anzahl der Tage im Monat dieses Datums repräsentiert. Abhängig vom [Kalender](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars).
- {{jsxref("Temporal/ZonedDateTime/daysInWeek", "Temporal.ZonedDateTime.prototype.daysInWeek")}}
  - : Gibt eine positive Ganzzahl zurück, die die Anzahl der Tage in der Woche dieses Datums repräsentiert. Abhängig vom [Kalender](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars). Für den ISO-8601-Kalender ist dies immer 7, kann aber in anderen Kalendersystemen von Woche zu Woche unterschiedlich sein.
- {{jsxref("Temporal/ZonedDateTime/daysInYear", "Temporal.ZonedDateTime.prototype.daysInYear")}}
  - : Gibt eine positive Ganzzahl zurück, die die Anzahl der Tage im Jahr dieses Datums repräsentiert. Abhängig vom [Kalender](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars). Für den ISO-8601-Kalender beträgt sie 365 oder in einem Schaltjahr 366.
- {{jsxref("Temporal/ZonedDateTime/epochMilliseconds", "Temporal.ZonedDateTime.prototype.epochMilliseconds")}}
  - : Gibt eine Ganzzahl zurück, die die Anzahl der seit der Unix-Epoche (Mitternacht zu Beginn des 1. Januar 1970, UTC) bis zu diesem Zeitpunkt verstrichenen Millisekunden repräsentiert. Entspricht dem Teilen von `epochNanoseconds` durch `1e6` und dem Abrunden des Ergebnisses.
- {{jsxref("Temporal/ZonedDateTime/epochNanoseconds", "Temporal.ZonedDateTime.prototype.epochNanoseconds")}}
  - : Gibt ein {{jsxref("BigInt")}} zurück, das die Anzahl der seit der Unix-Epoche (Mitternacht zu Beginn des 1. Januar 1970, UTC) bis zu diesem Zeitpunkt verstrichenen Nanosekunden repräsentiert.
- {{jsxref("Temporal/ZonedDateTime/era", "Temporal.ZonedDateTime.prototype.era")}}
  - : Gibt einen kalenderspezifischen String in Kleinbuchstaben zurück, der die Ära dieses Datums repräsentiert, oder `undefined`, wenn der Kalender keine Ären verwendet (z. B. ISO 8601). `era` und `eraYear` identifizieren gemeinsam ein Jahr in einem Kalender eindeutig, genauso wie `year`. Abhängig vom [Kalender](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars). Für Gregorian ist dies entweder `"ce"` oder `"bce"`.
- {{jsxref("Temporal/ZonedDateTime/eraYear", "Temporal.ZonedDateTime.prototype.eraYear")}}
  - : Gibt eine nicht negative Ganzzahl zurück, die das Jahr dieses Datums innerhalb der Ära repräsentiert, oder `undefined`, wenn der Kalender keine Ären verwendet (z. B. ISO 8601). Der Jahresindex beginnt üblicherweise bei 1 (häufiger) oder 0, und Jahre innerhalb einer Ära können mit der Zeit abnehmen (z. B. Gregorian BCE). `era` und `eraYear` identifizieren gemeinsam ein Jahr in einem Kalender eindeutig, genauso wie `year`. Abhängig vom [Kalender](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars).
- {{jsxref("Temporal/ZonedDateTime/hour", "Temporal.ZonedDateTime.prototype.hour")}}
  - : Gibt eine Ganzzahl von 0 bis 23 zurück, die die Stundenkomponente dieser Zeit repräsentiert.
- {{jsxref("Temporal/ZonedDateTime/hoursInDay", "Temporal.ZonedDateTime.prototype.hoursInDay")}}
  - : Gibt eine positive Ganzzahl zurück, die die Anzahl der Stunden des Tages dieses Datums in der Zeitzone repräsentiert. Bei Offset-Änderungen wie der Sommerzeit kann sie größer oder kleiner als 24 sein.
- {{jsxref("Temporal/ZonedDateTime/inLeapYear", "Temporal.ZonedDateTime.prototype.inLeapYear")}}
  - : Gibt einen booleschen Wert zurück, der angibt, ob dieses Datum in einem Schaltjahr liegt. Ein Schaltjahr ist ein Jahr, das mehr Tage hat als ein gewöhnliches Jahr, etwa aufgrund eines Schalttags oder Schaltmonats. Abhängig vom [Kalender](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars).
- {{jsxref("Temporal/ZonedDateTime/microsecond", "Temporal.ZonedDateTime.prototype.microsecond")}}
  - : Gibt eine Ganzzahl von 0 bis 999 zurück, die die Mikrosekundenkomponente (10<sup>-6</sup> Sekunden) dieser Zeit repräsentiert.
- {{jsxref("Temporal/ZonedDateTime/millisecond", "Temporal.ZonedDateTime.prototype.millisecond")}}
  - : Gibt eine Ganzzahl von 0 bis 999 zurück, die die Millisekundenkomponente (10<sup>-3</sup> Sekunden) dieser Zeit repräsentiert.
- {{jsxref("Temporal/ZonedDateTime/minute", "Temporal.ZonedDateTime.prototype.minute")}}
  - : Gibt eine Ganzzahl von 0 bis 59 zurück, die die Minutenkomponente dieser Zeit repräsentiert.
- {{jsxref("Temporal/ZonedDateTime/month", "Temporal.ZonedDateTime.prototype.month")}}
  - : Gibt eine positive Ganzzahl zurück, die den bei 1 beginnenden Monatsindex im Jahr dieses Datums repräsentiert. Der erste Monat dieses Jahres ist `1`, und der letzte Monat ist {{jsxref("Temporal/ZonedDateTime/monthsInYear", "monthsInYear")}}. Abhängig vom [Kalender](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars). Beachten Sie, dass der Index im Gegensatz zu {{jsxref("Date.prototype.getMonth()")}} bei 1 beginnt. Falls der Kalender Schaltmonate hat, kann der Monat mit demselben {{jsxref("Temporal/ZonedDateTime/monthCode", "monthCode")}} für unterschiedliche Jahre unterschiedliche `month`-Indizes aufweisen.
- {{jsxref("Temporal/ZonedDateTime/monthCode", "Temporal.ZonedDateTime.prototype.monthCode")}}
  - : Gibt einen kalenderspezifischen String zurück, der den Monat dieses Datums repräsentiert. Abhängig vom [Kalender](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars). Üblicherweise ist es `M` plus eine zweistellige Monatsnummer. Für Schaltmonate ist es der Code des vorherigen Monats, gefolgt von `L`. Wenn der Schaltmonat der erste Monat des Jahres ist, lautet der Code `M00L`.
- {{jsxref("Temporal/ZonedDateTime/monthsInYear", "Temporal.ZonedDateTime.prototype.monthsInYear")}}
  - : Gibt eine positive Ganzzahl zurück, die die Anzahl der Monate im Jahr dieses Datums repräsentiert. Abhängig vom [Kalender](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars). Für den ISO-8601-Kalender ist dies immer 12, kann aber in anderen Kalendersystemen unterschiedlich sein.
- {{jsxref("Temporal/ZonedDateTime/nanosecond", "Temporal.ZonedDateTime.prototype.nanosecond")}}
  - : Gibt eine Ganzzahl von 0 bis 999 zurück, die die Nanosekundenkomponente (10<sup>-9</sup> Sekunden) dieser Zeit repräsentiert.
- {{jsxref("Temporal/ZonedDateTime/offset", "Temporal.ZonedDateTime.prototype.offset")}}
  - : Gibt einen String zurück, der den zur Interpretation des internen Zeitpunkts verwendeten [Offset](#zeitzonen_und_offsets) im Format `±HH:mm` repräsentiert (oder `±HH:mm:ss.sssssssss` mit der erforderlichen Genauigkeit unterhalb von Minuten).
- {{jsxref("Temporal/ZonedDateTime/offsetNanoseconds", "Temporal.ZonedDateTime.prototype.offsetNanoseconds")}}
  - : Gibt eine Ganzzahl zurück, die den zur Interpretation des internen Zeitpunkts verwendeten [Offset](#zeitzonen_und_offsets) als Anzahl von Nanosekunden repräsentiert (positiv oder negativ).
- {{jsxref("Temporal/ZonedDateTime/second", "Temporal.ZonedDateTime.prototype.second")}}
  - : Gibt eine Ganzzahl von 0 bis 59 zurück, die die Sekundenkomponente dieser Zeit repräsentiert.
- {{jsxref("Temporal/ZonedDateTime/timeZoneId", "Temporal.ZonedDateTime.prototype.timeZoneId")}}
  - : Gibt einen String zurück, der den zur Interpretation des internen Zeitpunkts verwendeten [Zeitzonenbezeichner](#zeitzonen_und_offsets) repräsentiert. Er verwendet denselben String, der beim Erstellen des `Temporal.ZonedDateTime`-Objekts verwendet wurde und entweder ein IANA-Zeitzonenname oder ein fester Offset ist.
- {{jsxref("Temporal/ZonedDateTime/weekOfYear", "Temporal.ZonedDateTime.prototype.weekOfYear")}}
  - : Gibt eine positive Ganzzahl zurück, die den bei 1 beginnenden Wochenindex im {{jsxref("Temporal/ZonedDateTime/yearOfWeek", "yearOfWeek")}} dieses Datums repräsentiert, oder `undefined`, wenn der Kalender kein wohldefiniertes Wochensystem hat. Die erste Woche des Jahres ist `1`. Abhängig vom [Kalender](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars). Beachten Sie, dass bei ISO 8601 die ersten und letzten wenigen Tage des Jahres der letzten Woche des vorherigen Jahres oder der ersten Woche des nächsten Jahres zugeordnet werden können.
- {{jsxref("Temporal/ZonedDateTime/year", "Temporal.ZonedDateTime.prototype.year")}}
  - : Gibt eine Ganzzahl zurück, die die Anzahl der Jahre dieses Datums relativ zum Beginn eines kalenderspezifischen Epochenjahres repräsentiert. Abhängig vom [Kalender](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars). Üblicherweise ist Jahr 1 entweder das erste Jahr der jüngsten Ära oder das ISO-8601-Jahr `0001`. Wenn die Epoche in der Mitte des Jahres liegt, hat dieses Jahr vor und nach dem Anfangsdatum der Ära denselben Wert.
- {{jsxref("Temporal/ZonedDateTime/yearOfWeek", "Temporal.ZonedDateTime.prototype.yearOfWeek")}}
  - : Gibt eine Ganzzahl zurück, die das Jahr repräsentiert, das mit {{jsxref("Temporal/ZonedDateTime/weekOfYear", "weekOfYear")}} dieses Datums zu kombinieren ist, oder `undefined`, wenn der Kalender kein wohldefiniertes Wochensystem hat. Abhängig vom [Kalender](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars). Üblicherweise ist dies das Jahr des Datums, aber bei ISO 8601 können die ersten und letzten wenigen Tage des Jahres der letzten Woche des vorherigen Jahres oder der ersten Woche des nächsten Jahres zugeordnet werden, wodurch sich `yearOfWeek` um 1 unterscheiden kann.
- `Temporal.ZonedDateTime.prototype[Symbol.toStringTag]`
  - : Der Anfangswert der Eigenschaft [`[Symbol.toStringTag]`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag) ist der String `"Temporal.ZonedDateTime"`. Diese Eigenschaft wird in {{jsxref("Object.prototype.toString()")}} verwendet.

## Instanzmethoden

- {{jsxref("Temporal/ZonedDateTime/add", "Temporal.ZonedDateTime.prototype.add()")}}
  - : Gibt ein neues `Temporal.ZonedDateTime`-Objekt zurück, das diese Datum-Uhrzeit repräsentiert, verschoben um eine angegebene Dauer nach vorn (in einer Form, die durch {{jsxref("Temporal/Duration/from", "Temporal.Duration.from()")}} konvertiert werden kann).
- {{jsxref("Temporal/ZonedDateTime/equals", "Temporal.ZonedDateTime.prototype.equals()")}}
  - : Gibt `true` zurück, wenn diese Datum-Uhrzeit im Wert einer anderen Datum-Uhrzeit entspricht (in einer Form, die durch {{jsxref("Temporal/ZonedDateTime/from", "Temporal.ZonedDateTime.from()")}} konvertiert werden kann), andernfalls `false`. Sie werden sowohl anhand ihrer Zeitpunkte, Zeitzonen als auch ihrer Kalender verglichen. Daher können zwei Datum-Uhrzeiten aus unterschiedlichen Kalendern oder Zeitzonen von {{jsxref("Temporal/ZonedDateTime/compare", "Temporal.ZonedDateTime.compare()")}} als gleich angesehen werden, aber nicht von `equals()`.
- {{jsxref("Temporal/ZonedDateTime/getTimeZoneTransition", "Temporal.ZonedDateTime.prototype.getTimeZoneTransition()")}}
  - : Gibt ein `Temporal.ZonedDateTime`-Objekt zurück, das den ersten Zeitpunkt nach oder vor diesem Zeitpunkt repräsentiert, an dem sich der UTC-Offset der Zeitzone ändert, oder `null`, wenn es keinen solchen Übergang gibt. Dies ist nützlich, um die Offset-Regeln einer Zeitzone zu ermitteln, beispielsweise ihr Sommerzeitmuster.
- {{jsxref("Temporal/ZonedDateTime/round", "Temporal.ZonedDateTime.prototype.round()")}}
  - : Gibt ein neues `Temporal.ZonedDateTime`-Objekt zurück, das diese auf die angegebene Einheit gerundete Datum-Uhrzeit repräsentiert.
- {{jsxref("Temporal/ZonedDateTime/since", "Temporal.ZonedDateTime.prototype.since()")}}
  - : Gibt ein neues {{jsxref("Temporal.Duration")}}-Objekt zurück, das die Dauer von einer anderen Datum-Uhrzeit (in einer Form, die durch {{jsxref("Temporal/ZonedDateTime/from", "Temporal.ZonedDateTime.from()")}} konvertiert werden kann) bis zu dieser Datum-Uhrzeit repräsentiert. Die Dauer ist positiv, wenn die andere Datum-Uhrzeit vor dieser liegt, und negativ, wenn sie danach liegt.
- {{jsxref("Temporal/ZonedDateTime/startOfDay", "Temporal.ZonedDateTime.prototype.startOfDay()")}}
  - : Gibt ein `Temporal.ZonedDateTime`-Objekt zurück, das den ersten Zeitpunkt dieses Datums in der Zeitzone repräsentiert. Es hat üblicherweise die Zeit `00:00:00`, kann jedoch abweichen, wenn Mitternacht aufgrund von Offset-Änderungen nicht existiert; in diesem Fall wird die erste existierende Zeit zurückgegeben.
- {{jsxref("Temporal/ZonedDateTime/subtract", "Temporal.ZonedDateTime.prototype.subtract()")}}
  - : Gibt ein neues `Temporal.ZonedDateTime`-Objekt zurück, das diese Datum-Uhrzeit repräsentiert, verschoben um eine angegebene Dauer zurück (in einer Form, die durch {{jsxref("Temporal/Duration/from", "Temporal.Duration.from()")}} konvertiert werden kann).
- {{jsxref("Temporal/ZonedDateTime/toInstant", "Temporal.ZonedDateTime.prototype.toInstant()")}}
  - : Gibt ein neues {{jsxref("Temporal.Instant")}}-Objekt zurück, das den Zeitpunkt dieser Datum-Uhrzeit repräsentiert.
- {{jsxref("Temporal/ZonedDateTime/toJSON", "Temporal.ZonedDateTime.prototype.toJSON()")}}
  - : Gibt einen String zurück, der diese Datum-Uhrzeit im selben [RFC-9557-Format](#rfc-9557-format) repräsentiert wie ein Aufruf von {{jsxref("Temporal/ZonedDateTime/toString", "toString()")}}. Ist dafür vorgesehen, implizit durch {{jsxref("JSON.stringify()")}} aufgerufen zu werden.
- {{jsxref("Temporal/ZonedDateTime/toLocaleString", "Temporal.ZonedDateTime.prototype.toLocaleString()")}}
  - : Gibt einen String mit einer sprachsensitiven Darstellung dieser Datum-Uhrzeit zurück.
- {{jsxref("Temporal/ZonedDateTime/toPlainDate", "Temporal.ZonedDateTime.prototype.toPlainDate()")}}
  - : Gibt ein neues {{jsxref("Temporal.PlainDate")}}-Objekt zurück, das den Datumsteil dieser Datum-Uhrzeit repräsentiert.
- {{jsxref("Temporal/ZonedDateTime/toPlainDateTime", "Temporal.ZonedDateTime.prototype.toPlainDateTime()")}}
  - : Gibt ein neues {{jsxref("Temporal.PlainDateTime")}}-Objekt zurück, das die Datums- und Uhrzeitteile dieser Datum-Uhrzeit repräsentiert. Nur die Zeitzoneninformationen werden entfernt.
- {{jsxref("Temporal/ZonedDateTime/toPlainTime", "Temporal.ZonedDateTime.prototype.toPlainTime()")}}
  - : Gibt ein neues {{jsxref("Temporal.PlainTime")}}-Objekt zurück, das den Zeitteil dieser Datum-Uhrzeit repräsentiert.
- {{jsxref("Temporal/ZonedDateTime/toString", "Temporal.ZonedDateTime.prototype.toString()")}}
  - : Gibt einen String zurück, der diese Datum-Uhrzeit im [RFC-9557-Format](#rfc-9557-format) repräsentiert.
- {{jsxref("Temporal/ZonedDateTime/until", "Temporal.ZonedDateTime.prototype.until()")}}
  - : Gibt ein neues {{jsxref("Temporal.Duration")}}-Objekt zurück, das die Dauer von dieser Datum-Uhrzeit zu einer anderen Datum-Uhrzeit repräsentiert (in einer Form, die durch {{jsxref("Temporal/ZonedDateTime/from", "Temporal.ZonedDateTime.from()")}} konvertiert werden kann). Die Dauer ist positiv, wenn die andere Datum-Uhrzeit nach dieser Datum-Uhrzeit liegt, und negativ, wenn sie davor liegt.
- {{jsxref("Temporal/ZonedDateTime/valueOf", "Temporal.ZonedDateTime.prototype.valueOf()")}}
  - : Löst einen {{jsxref("TypeError")}} aus, wodurch verhindert wird, dass `Temporal.ZonedDateTime`-Instanzen bei der Verwendung in arithmetischen oder Vergleichsoperationen [implizit in Primitive konvertiert](/de/docs/Web/JavaScript/Guide/Data_structures#primitive_coercion) werden.
- {{jsxref("Temporal/ZonedDateTime/with", "Temporal.ZonedDateTime.prototype.with()")}}
  - : Gibt ein neues `Temporal.ZonedDateTime`-Objekt zurück, das diese Datum-Uhrzeit repräsentiert, wobei einige Felder durch neue Werte ersetzt wurden.
- {{jsxref("Temporal/ZonedDateTime/withCalendar", "Temporal.ZonedDateTime.prototype.withCalendar()")}}
  - : Gibt ein neues `Temporal.ZonedDateTime`-Objekt zurück, das diese Datum-Uhrzeit im neuen Kalendersystem interpretiert repräsentiert.
- {{jsxref("Temporal/ZonedDateTime/withPlainTime", "Temporal.ZonedDateTime.prototype.withPlainTime()")}}
  - : Gibt ein neues `Temporal.ZonedDateTime`-Objekt zurück, das diese Datum-Uhrzeit repräsentiert, deren Zeitteil vollständig durch die neue Zeit ersetzt wurde (in einer Form, die durch {{jsxref("Temporal/PlainTime/from", "Temporal.PlainTime.from()")}} konvertiert werden kann).
- {{jsxref("Temporal/ZonedDateTime/withTimeZone", "Temporal.ZonedDateTime.prototype.withTimeZone()")}}
  - : Gibt ein neues `Temporal.ZonedDateTime`-Objekt zurück, das denselben Zeitpunkt wie diese Datum-Uhrzeit repräsentiert, jedoch in der neuen Zeitzone.

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
