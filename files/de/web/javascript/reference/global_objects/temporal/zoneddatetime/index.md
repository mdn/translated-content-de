---
title: Temporal.ZonedDateTime
slug: Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime
l10n:
  sourceCommit: dcc0db01251aa38433fa326b8938cd2ff5f646e2
---

Das **`Temporal.ZonedDateTime`**-Objekt repräsentiert ein Datum und eine Uhrzeit mit einer Zeitzone. Es wird grundsätzlich als Kombination aus einem [Instant](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/Instant), einer Zeitzone und einem Kalendersystem dargestellt.

## Beschreibung

Ein `ZonedDateTime` fungiert als Brücke zwischen einer exakten Zeit und einer an der Wand angezeigten Uhrzeit: Es repräsentiert gleichzeitig ein historisches Instant (ähnlich wie ein {{jsxref("Temporal.Instant")}}) und eine lokale, an der Wand angezeigte Uhrzeit (ähnlich wie ein {{jsxref("Temporal.PlainDateTime")}}). Dies geschieht, indem das Instant, die Zeitzone und das Kalendersystem gespeichert werden. Die Zeitzone wird verwendet, um zwischen dem Instant und der lokalen Zeit zu konvertieren, und das Kalendersystem wird verwendet, um die lokale Zeit zu interpretieren.

`ZonedDateTime` ist die einzige `Temporal`-Klasse, die sich der Zeitzone bewusst ist. Die Hinzufügung einer Zeitzone führt dazu, dass `ZonedDateTime`-Objekte wichtiges Verhalten von {{jsxref("Temporal.PlainDateTime")}}-Objekten unterscheiden. Nämlich kann man nicht mehr davon ausgehen, dass "die Zeit 1 Minute danach" jeden Tag gleich ist, oder dass ein Tag 24 Stunden hat. Im schlimmsten Fall kann ein ganzer Tag im lokalen Kalender fehlen. Unten bieten wir einen kurzen Überblick über Zeitzonen und Offsets und wie sie die Umwandlung zwischen UTC-Zeit und lokaler Zeit beeinflussen.

### Zeitzonen und Offsets

Alle Zeiten in JavaScript haben einen goldenen Standard: die UTC-Zeit, die sich kontinuierlich und gleichmäßig weiterentwickelt, während die physische Zeit fortschreitet. Im Gegensatz dazu sind Benutzer mehr an ihrer lokalen Zeit interessiert, die die Zeit ist, die sie auf ihren Kalendern und Uhren ablesen. Der Prozess der Umrechnung zwischen UTC-Zeit und lokaler Zeit beinhaltet einen Zeitzonen-Offset, der wie folgt berechnet wird:

```plain
local time = UTC time + offset
```

Zum Beispiel, wenn die UTC-Zeit 1970-01-01T00:00:00 ist und der Offset "-05:00", dann ist die lokale Zeit:

```plain
1970-01-01T00:00:00 + -05:00 = 1969-12-31T19:00:00
```

Indem diese lokale Zeit mit dem Offset versehen wird, sodass sie als "1969-12-31T19:00:00-05:00" ausgedrückt wird, kann sie nun eindeutig als ein Zeitpunkt in der Geschichte verstanden werden.

Um den Offset zu kennen, benötigen wir zwei Informationen, die _Zeitzone_ und das _Instant_. Die Zeitzone ist eine Region auf der Erde, in der immer derselbe Offset verwendet wird. Zwei Uhren in derselben Zeitzone zeigen immer zur selben Zeit an, aber der Offset ist nicht unbedingt konstant; das heißt, diese Uhrenzeiten können sich abrupt ändern. Dies geschieht häufig während der Umstellung auf die Sommerzeit, wenn sich der Offset um eine Stunde ändert, was zweimal im Jahr passiert. Offsets können sich auch dauerhaft aufgrund politischer Änderungen ändern, z.B. wenn ein Land die Zeitzone wechselt.

Die Zeitzonen werden in der [IANA-Zeitzonen-Datenbank](https://www.iana.org/time-zones) gespeichert. Jede IANA-Zeitzone umfasst:

- Ein _primärer Zeitzonenbezeichner_, der die Zeitzone eindeutig identifiziert. Er bezieht sich normalerweise auf ein geografisches Gebiet, das von einer Stadt verankert wird (z.B. `Europe/Paris` oder `Africa/Kampala`), kann jedoch auch Einzel-Offset-Zeitzonen wie `UTC` (ein konstanter `+00:00` Offset) oder `Etc/GMT+5` (aus historischen Gründen ein negativer Offset `-05:00`) bezeichnen. Aus historischen Gründen ist der primäre Name für die UTC-Zeitzone `UTC`, obwohl sie in IANA `Etc/UTC` ist.
- Eine _Zeitzonendefinition_ in Form einer Tabelle, die UTC-Daten-/Zeiträume (einschließlich zukünftiger Bereiche) mit bestimmten Offsets abbildet.
- Null oder mehr _nicht primäre Zeitzonenbezeichner_, die Aliase zum primären Zeitzonenbezeichner sind. Diese sind normalerweise historische Namen, die nicht mehr in Gebrauch sind, aber aus Kompatibilitätsgründen beibehalten werden. Siehe unten für weitere Informationen.

Bei der Eingabe werden benannte Bezeichner ohne Unterscheidung der Groß- und Kleinschreibung abgeglichen. Intern werden sie in ihrer bevorzugten Schreibweise gespeichert, und nicht primäre Bezeichner werden _nicht_ in ihren primären Bezeichner umgewandelt.

> [!NOTE]
> Wenn Sie den Namen der Zeitzone setzen, sollten Sie es selten auf `"UTC"` setzen. `ZonedDateTime` ist für die Anzeige an Benutzer gedacht, aber kein Mensch lebt in der "UTC"-Zeitzone. Wenn Sie die Zeitzone zum Erstellungszeitpunkt nicht kennen, aber die an der Wand angezeigte Zeit kennen, verwenden Sie ein {{jsxref("Temporal.PlainDateTime")}}. Wenn Sie das genaue Instant kennen, verwenden Sie ein {{jsxref("Temporal.Instant")}}.

Wenn eine `Temporal`-API einen _Zeitzonenbezeichner_ akzeptiert, werden neben primären Zeitzonenbezeichnern und nicht primären Zeitzonenbezeichnern auch _Offset-Zeitzonenbezeichner_ akzeptiert, die im gleichen Format wie der Offset vorliegen, jedoch keine Präzision im Minutenbereich erlauben. Zum Beispiel sind `+05:30`, `-08`, `+0600` alle gültige Offset-Bezeichner. Intern werden Offset-Bezeichner im Format `±HH:mm` gespeichert.

> [!NOTE]
> Vermeiden Sie die Verwendung von Offset-Bezeichnern, wenn es stattdessen eine benannte Zeitzone gibt, die Sie verwenden können. Selbst wenn ein Gebiet schon immer einen einzigen Offset verwendet hat, ist es besser, den benannten Bezeichner zu verwenden, um sich gegen zukünftige politische Änderungen des Offsets zu sichern.
>
> Wenn ein Gebiet mehrere Offsets verwendet oder verwendet hat, ist es noch wichtiger, seine benannte Zeitzone zu verwenden. Dies liegt daran, dass `Temporal.ZonedDateTime` Methoden wie `add` oder `with` verwenden kann, um zu einem anderen Instant neue Instanzen zu erstellen. Wenn diese abgeleiteten Instanzen einem Instant entsprechen, der einen anderen Offset verwendet (z.B. nach einem Wechsel der Sommerzeit), dann sind Ihre Berechnungen falsch bezüglich der lokalen Zeit. Die Verwendung einer benannten Zeitzone stellt sicher, dass lokale Daten und Zeiten immer für den richtigen Offset für diesen Instant angepasst werden.

Für den Komfort können Sie beim Angeben eines Zeitzonenbezeichners für `Temporal`-APIs wie `Temporal.ZonedDateTime.prototype.withTimeZone()` und die `timeZoneId`-Option von `Temporal.ZonedDateTime.from()` ihn in einigen anderen Formen angeben:

- Als ein anderes `ZonedDateTime`-Exemplar, dessen `timeZoneId` verwendet wird.
- Als ein [RFC 9557-String](#rfc_9557_format) mit einer Zeitzonenanmerkung, dessen Zeitzonenbezeichner verwendet wird.
- Als ein ISO 8601 / RFC 3339-String, der einen Offset enthält, wobei Ihr Offset als Offset-Bezeichner verwendet wird; oder wenn Sie `Z` verwenden, wird die Zeitzone `"UTC"` verwendet. Diese Verwendung wird im Allgemeinen nicht empfohlen, da Offset-Bezeichner wie oben besprochen, das Potenzial für eine sichere Ableitung anderer `Temporal.ZonedDateTime`-Instanzen über einen Offset-Übergang wie beim Beginn oder Ende der Sommerzeit fehlt. Erwägen Sie stattdessen, einfach `Temporal.Instant` zu verwenden oder die tatsächliche benannte Benutzerzeitzone abzurufen.

Die IANA-Zeitzonendatenbank ändert sich von Zeit zu Zeit, üblicherweise um neue Zeitzonen als Reaktion auf politische Änderungen hinzuzufügen. Jedoch werden selten IANA-Zeitzonenbezeichner umbenannt, um aktualisierte englische Übersetzungen eines Städtenamens abzustimmen oder um veraltete Benennungskonventionen zu aktualisieren. Hier sind ein paar bemerkenswerte Namensänderungen:

| Aktueller IANA primärer Bezeichner | Alter, jetzt nicht primärer Bezeichner |
| ---------------------------------- | -------------------------------------- |
| `America/Argentina/Buenos_Aires`   | `America/Buenos_Aires`                 |
| `Asia/Kolkata`                     | `Asia/Calcutta`                        |
| `Asia/Ho_Chi_Minh`                 | `Asia/Saigon`                          |
| `Europe/Kyiv`                      | `Europe/Kiev`                          |

Historisch gesehen haben diese Umbenennungen Probleme für Programmierer verursacht, da die Unicode- [CLDR-Datenbank](https://github.com/unicode-org/cldr/blob/main/common/bcp47/timezone.xml) (eine Bibliothek, die von Browsern verwendet wird, um Zeitzonenbezeichner und Daten zu liefern) aus Stabilitätsgründen nicht den Umbenennungen von IANA gefolgt ist. Infolgedessen haben einige Browser wie Chrome und Safari die veralteten Bezeichner von CLDR gemeldet, während andere Browser wie Firefox die Standardwerte von CLDR überschrieben und die aktuellen primären Bezeichner gemeldet haben.

Mit der Einführung von Temporal ist dieses Verhalten jetzt stärker standardisiert:

- [CLDR-Daten](https://github.com/unicode-org/cldr/blob/main/common/bcp47/timezone.xml) enthalten jetzt ein `"_iana"`-Attribut, das den aktuellsten Bezeichner angibt, falls der ältere, stabile Bezeichner umbenannt wurde. Browser können dieses neue Attribut verwenden, um Anrufern aktuelle Bezeichner zur Verfügung zu stellen.
- Zeitzonenbezeichner, die vom Programmierer bereitgestellt werden, werden niemals durch einen Alias ersetzt. Beispielsweise wird, wenn der Anrufer `Asia/Calcutta` oder `Asia/Kolkata` als Bezeichner-Input für {{jsxref("Temporal/ZonedDateTime/from", "Temporal.ZonedDateTime.from()")}} angibt, derselbe Bezeichner in der resultierenden Instanz bei {{jsxref("Temporal/ZonedDateTime/timeZoneId", "timeZoneId")}} zurückgegeben. Beachten Sie, dass die Groß- und Kleinschreibung der Ausgaben normiert wird, um mit IANA übereinzustimmen, sodass `ASIA/calCuTTa` als Eingabe ein {{jsxref("Temporal/ZonedDateTime/timeZoneId", "timeZoneId")}} von `Asia/Calcutta` als Ausgabe generiert.
- Wenn ein Zeitzonenbezeichner nicht von einem Anrufer bereitgestellt wird, sondern direkt vom System stammt (zum Beispiel bei Verwendung von {{jsxref("Temporal/Now/timeZoneId", "Temporal.Now.timeZoneId()")}}), werden moderne Bezeichner in allen Browsern zurückgegeben. Bei Städtischerennamen gibt es eine zweijährige Verzögerung, bevor diese Systembereitstellungs-Bezeichner-APIs den neuen Namen anzeigen, um anderen Komponenten (wie einem Node-Server) Zeit zu geben, ihre Kopien der IANA-Datenbank zu aktualisieren, um den neuen Namen zu erkennen.

Beachten Sie, dass die Zuordnung primärer Bezeichner den Ländercode beibehält: Zum Beispiel zeichnet die IANA-Datenbank `Atlantic/Reykjavik` als Alias für `Africa/Abidjan` auf, aber weil sie unterschiedlichen Ländern (Island und Côte d'Ivoire, respektive) entsprechen, werden sie als verschiedene primäre Bezeichner behandelt.

Diese Standardisierung gilt auch außerhalb von `Temporal`. Zum Beispiel wird die `timeZone`-Option, die durch {{jsxref("Intl/DateTimeFormat/resolvedOptions", "Intl.DateTimeFormat.prototype.resolvedOptions()")}} zurückgegeben wird, auch niemals durch einen Alias ersetzt, obwohl Browser diese Bezeichner traditionell vor der Standardisierung durch Temporal kanonisiert haben. Auf der anderen Seite wird {{jsxref("Intl/Locale/getTimeZones", "Intl.Locale.prototype.getTimeZones()")}} und {{jsxref("Intl.supportedValuesOf()")}} (Option `timeZone`) die aktuellsten Bezeichner zurückgeben, während einige Browser früher den alten, nicht primären Bezeichner zurückgegeben haben.

### RFC 9557 Format

`ZonedDateTime`-Objekte können mit dem [RFC 9557](https://datatracker.ietf.org/doc/html/rfc9557)-Format serialisiert und geparst werden, einer Erweiterung des [ISO 8601 / RFC 3339](https://datatracker.ietf.org/doc/html/rfc3339)-Formats. Der String hat folgende Form (Leerzeichen dienen nur der Lesbarkeit und dürfen nicht im tatsächlichen String enthalten sein):

```plain
YYYY-MM-DD T HH:mm:ss.sssssssss Z/±HH:mm [time_zone_id] [u-ca=calendar_id]
```

- `YYYY`
  - : Entweder eine vierstellige Zahl oder eine sechsstellige Zahl mit einem `+` oder `-` Zeichen.
- `MM`
  - : Eine zweistellige Zahl von `01` bis `12`.
- `DD`
  - : Eine zweistellige Zahl von `01` bis `31`. Die `YYYY`, `MM`, und `DD`-Komponenten können durch `-` oder nichts getrennt werden.
- `T` {{optional_inline}}
  - : Der Datums-Zeit-Trennzeichen, der `T`, `t` oder ein Leerzeichen sein kann. Vorhanden, wenn und nur wenn `HH` vorhanden ist.
- `HH` {{optional_inline}}
  - : Eine zweistellige Zahl von `00` bis `23`. Standardmäßig `00`.
- `mm` {{optional_inline}}
  - : Eine zweistellige Zahl von `00` bis `59`. Standardmäßig `00`.
- `ss.sssssssss` {{optional_inline}}
  - : Eine zweistellige Zahl von `00` bis `59`. Kann optional von einem `.` oder `,` und ein bis neun Ziffern gefolgt werden. Standardmäßig `00`. Die `HH`, `mm`, und `ss`-Komponenten können durch `:` oder nichts getrennt werden. Sie können entweder nur `ss` oder sowohl `ss` als auch `mm` weglassen, sodass die Zeit eine von drei Formen haben kann: `HH`, `HH:mm`, oder `HH:mm:ss.sssssssss`.
- `Z/±HH:mm` {{optional_inline}}
  - : Entweder der UTC-Zeichen `Z` oder `z`, oder ein Offset von UTC in der Form `+` oder `-` gefolgt von dem gleichen Format wie die Zeitkomponente. Beachten Sie, dass Präzision im Minutenbereich (`:ss.sssssssss`) von anderen Systemen nicht unterstützt werden kann und akzeptiert, aber nie ausgegeben wird. Wenn weggelassen, wird der Offset aus dem Zeitzonenbezeichner abgeleitet. Wenn vorhanden, muss auch die Zeit bereitgestellt werden. `Z` ist nicht dasselbe wie `+00:00`: Der erstere bedeutet, dass die Zeit in UTC-Form angegeben ist, unabhängig vom Zeitzonenbezeichner, während der letztere bedeutet, dass die Zeit in Ortszeit angegeben ist, die zufällig UTC+0 ist, und gegen den Zeitzonenbezeichner über die [`offset`-Option](#offset-mehrdeutigkeit) validiert wird.
- `[time_zone_id]`
  - : Ersetzen Sie `time_zone_id` durch den Zeitzonenbezeichner (benannt oder Offset) wie oben beschrieben. Kann ein _kritisches Flag_ haben, indem der Bezeichner mit `!` vorangestellt wird: z.B. `[!America/New_York]`. Dieses Flag teilt anderen Systemen im Allgemeinen mit, dass es nicht ignoriert werden kann, wenn sie es nicht unterstützen. Beachten Sie, dass es für `Temporal.ZonedDateTime.from()` erforderlich ist: weglassen führt zu einem `RangeError`. Wenn Sie ISO 8601 / RFC 3339-Strings ohne Zeitzonenbezeichner-Anmerkungen parsen möchten, verwenden Sie {{jsxref("Temporal/Instant/from", "Temporal.Instant.from()")}} stattdessen.
- `[u-ca=calendar_id]` {{optional_inline}}
  - : Ersetzen Sie `calendar_id` durch den zu verwendenden Kalender. Siehe [`Intl.supportedValuesOf()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/supportedValuesOf#supported_calendar_types) für eine Liste der häufig unterstützten Kalendertypen. Standardmäßig `[u-ca=iso8601]`. Kann ein _kritisches Flag_ haben, indem der Schlüssel mit `!` vorangestellt wird: z.B. `[!u-ca=iso8601]`. Dieses Flag teilt anderen Systemen im Allgemeinen mit, dass es nicht ignoriert werden kann, wenn sie es nicht unterstützen. Der `Temporal`-Parser löst einen Fehler aus, wenn die Anmerkungen zwei oder mehr Kalenderanmerkungen enthalten und eine davon kritisch ist. Beachten Sie, dass `YYYY-MM-DD` immer als ISO 8601-Kalendertag interpretiert und dann in den angegebenen Kalender umgewandelt wird.

Als Eingabe werden andere Anmerkungen im Format `[key=value]` ignoriert und dürfen nicht das kritische Flag haben.

Beim Serialisieren können Sie die Bruchteilssekundenziffern, ob Offset-/Zeitzonen-ID/Kalender-ID angezeigt werden soll, und ob ein kritisches Flag für die Anmerkungen hinzugefügt werden soll, konfigurieren.

### Mehrdeutigkeit und Lücken von lokaler Zeit zu UTC

Bei einer gegebenen Zeitzone ist die Umwandlung von UTC-Zeit in Ortszeit einfach: Sie erhalten zuerst den Offset mit dem Zeitzonennamen und dem Instant, und addieren dann den Offset zum Instant. Das Umgekehrte ist allerdings nicht wahr: Die Umwandlung von Ortszeit zu UTC, ohne einen expliziten Offset, ist mehrdeutig, weil eine Ortszeit zu keiner, einer oder vielen UTC-Zeiten korrespondieren kann. Betrachten Sie die häufigste Ursache: Sommerzeit-Umstellungen. Nehmen Sie New York als Beispiel. Der Standard-Offset beträgt UTC-5, aber während der Sommerzeit werden alle Uhren um eine Stunde vorgestellt, sodass der Offset UTC-4 wird. Die Übergänge passieren in den USA um 2:00 Uhr Ortszeit, sodass Sie diese beiden Übergangstage betrachten sollten:

| UTC-Zeit             | New York-Zeit             |
| -------------------- | ------------------------- |
| 2024-03-10T06:58:00Z | 2024-03-10T01:58:00-05:00 |
| 2024-03-10T06:59:00Z | 2024-03-10T01:59:00-05:00 |
| 2024-03-10T07:00:00Z | 2024-03-10T03:00:00-04:00 |
| ---                  | ---                       |
| 2024-11-03T05:58:00Z | 2024-11-03T01:58:00-04:00 |
| 2024-11-03T05:59:00Z | 2024-11-03T01:59:00-04:00 |
| 2024-11-03T06:00:00Z | 2024-11-03T01:00:00-05:00 |

Wie Sie sehen können, ist im März eine Stunde aus der Ortszeit verschwunden, und im November haben wir zwei Stunden, die dieselbe an der Wand angezeigte Uhrzeit haben. Angenommen, wir speichern ein `PlainDateTime`, das "2024-03-10T02:05:00" sagt, und wir wollen es in der `America/New_York`-Zeitzone interpretieren, dann wird es keine Zeit geben, die dazu korrespondiert, während ein `PlainDateTime`, das "2024-11-03T01:05:00" sagt, zwei verschiedenen Instants entsprechen kann.

Wenn ein `ZonedDateTime` aus einer Ortszeit konstruiert wird (using {{jsxref("Temporal.ZonedDateTime/from", "Temporal.ZonedDateTime.from()")}}, {{jsxref("Temporal.ZonedDateTime/with", "Temporal.ZonedDateTime.prototype.with()")}}, {{jsxref("Temporal.PlainDateTime/toZonedDateTime", "Temporal.PlainDateTime.prototype.toZonedDateTime()")}}), ist das Verhalten bei Mehrdeutigkeit und Lücken über die `disambiguation`-Option konfigurierbar:

- `earlier`
  - : Wenn es zwei mögliche Instants gibt, wählen Sie das frühere. Wenn es eine Lücke gibt, gehen Sie um die Dauer der Lücke zurück.
- `later`
  - : Wenn es zwei mögliche Instants gibt, wählen Sie das spätere. Wenn es eine Lücke gibt, gehen Sie um die Dauer der Lücke vorwärts.
- `compatible` (Standard)
  - : Gleiches Verhalten wie {{jsxref("Date")}}: Verwenden Sie `later` für Lücken und `earlier` für Mehrdeutigkeiten.
- `reject`
  - : Lösen Sie einen `RangeError` aus, wann immer es eine Mehrdeutigkeit oder eine Lücke gibt.

Es gibt mehrere Fälle, in denen keine Mehrdeutigkeit bei der Konstruktion eines `ZonedDateTime` besteht:

- Wenn die Zeit in UTC über den `Z`-Offset angegeben ist.
- Wenn der Offset explizit angegeben und verwendet wird (siehe unten).

### Offset-Mehrdeutigkeit

Wir haben bereits gezeigt, wie Mehrdeutigkeit auftreten kann, wenn eine Ortszeit in einer Zeitzone interpretiert wird, ohne einen expliziten Offset bereitzustellen. Wenn Sie jedoch einen expliziten Offset angeben, dann entsteht ein anderer Konflikt: zwischen dem angegebenen Offset und dem aus der Zeitzone und der Ortszeit berechneten Offset. Dies ist ein unvermeidliches reales Problem: Wenn Sie eine Zeit in der Zukunft mit einem erwarteten Offset speichern, kann sich die Zeitzonendefinition aufgrund politischer Gründe ändern, bevor diese Zeit erreicht wird. Zum Beispiel, angenommen, wir haben 2018 eine Erinnerung mit der Zeit `2019-12-23T12:00:00-02:00[America/Sao_Paulo]` (die Sommerzeit ist; Brasilien befindet sich auf der südlichen Hemisphäre, tritt also im Oktober in die Sommerzeit ein und verlässt sie im Februar) festgelegt. Aber bevor diese Zeit erreicht wird, beschließt Brasilien Anfang 2019, die Sommerzeit nicht mehr zu beachten, sodass der reale Offset `-03:00` wird. Soll die Erinnerung jetzt noch um 12 Uhr (Ortszeit beibehalten) ausgelöst werden oder um 11:00 Uhr (exakte Zeit beibehalten)?

Damit Offset-Mehrdeutigkeit existiert, muss ein Zeitstempelstring mit anderen IANA-Zeitzonendatenbankregeln analysiert werden als die Regeln, die beim ursprünglichen Generieren des Zeitstempels verwendet wurden. Dies wird nie geschehen, wenn Zeitstempel im gleichen Verlauf eines JavaScript-Programms erzeugt werden, da die ECMA-Script-Spezifikation vorschreibt, dass die IANA-Zeitzonendatenbankregeln für die Lebensdauer eines JavaScript-Programms konsistent sein müssen.

Allerdings kann Offset-Mehrdeutigkeit existieren, wenn ein JavaScript-Programm Zeitstempel analysiert, die vorher gespeichert wurden, wie im `America/Sao_Paulo`-Beispiel oben, und die IANA-Zeitzonendatenbank seit dem ursprünglichen Erstellen des Zeitstempels aktualisiert wurde. Es kann auch passieren, wenn Zeitstempel zwischen Computern kommuniziert werden (oder selten zwischen verschiedener Software auf demselben Computer!), die unterschiedliche Versionen der IANA-Zeitzonendatenbank verwenden. Die IANA-Zeitzonendatenbank hat auch Build-Optionen (zum Beispiel die Verwendung oder Nichtverwendung veralteter Regeln in `backzone`), die zu Offset-Mehrdeutigkeiten führen können, wenn Zeitstempel zwischen Computern mit unterschiedlicher Software kommuniziert werden, selbst wenn die IANA-Zeitzonendatenbankversion dieselbe ist.

Offset-Mehrdeutigkeit wird selten angetroffen und betrifft fast immer nur Zeitstempel vor 1970 oder für Zeitstempel, die Monate oder Jahre in der Zukunft liegen. Aber wenn dieses Problem auftritt, wird standardmäßig ein `RangeError` ausgelöst. Wenn ein `ZonedDateTime` mit {{jsxref("Temporal/ZonedDateTime/from", "Temporal.ZonedDateTime.from()")}} konstruiert oder es mit der {{jsxref("Temporal.ZonedDateTime/with", "with()")}}-Methode aktualisiert wird, können Sie diese Ausnahme verhindern, indem Sie die `offset`-Option verwenden, um zu entscheiden, ob der Offset oder der Zeitzonenbezeichner "gewinnt":

- `use`
  - : Verwenden Sie den Offset, um die exakte Zeit zu berechnen. Diese Option "verwendet" den Offset, um den vom Zeitstempelstring beabsichtigten Instant zu bestimmen, auch wenn der Offset zu diesem Zeitpunkt geändert wurde. Der Zeitzonenbezeichner wird weiterhin verwendet, um dann den (möglicherweise aktualisierten) Offset abzuleiten und diesen Offset zu verwenden, um die exakte Zeit in Ortszeit umzuwandeln. In dem oben genannten Beispiel `2019-12-23T12:00:00-02:00[America/Sao_Paulo]` würde diese Option dazu führen, dass die Erinnerung um 11:00 Uhr Ortszeit ausgelöst wird.
- `ignore`
  - : Verwenden Sie den Zeitzonenbezeichner, um den Offset neu zu berechnen, und ignorieren Sie den im String angegebenen Offset. Diese Option behält die ursprüngliche Ortszeit bei, aber es kann zu einem anderen Instant führen. Beachten Sie, dass durch das Ignorieren des Offsets dieselbe [Ortszeitinterpretation-Mehrdeutigkeit](#mehrdeutigkeit_und_lücken_von_lokaler_zeit_zu_utc) auftreten kann, die durch die `disambiguation`-Option gelöst wird. In dem oben genannten Beispiel `2019-12-23T12:00:00-02:00[America/Sao_Paulo]` würde diese Option dazu führen, dass die Erinnerung um 12:00 Uhr Ortszeit ausgelöst wird.
- `reject`
  - : Lösen Sie einen `RangeError` aus, wann immer es einen Konflikt zwischen dem Offset und dem Zeitzonenbezeichner gibt. Dies ist der Standard für {{jsxref("Temporal/ZonedDateTime/from", "Temporal.ZonedDateTime.from()")}}.
- `prefer`
  - : Verwenden Sie den Offset, wenn er gültig ist, sonst berechnen Sie den Offset vom Zeitzonenbezeichner. Dies ist die Standardeinstellung für {{jsxref("Temporal/ZonedDateTime/with", "Temporal.ZonedDateTime.prototype.with()")}} (siehe diese Methode für weitere Details). Dies ist anders als `ignore`, denn im Fall der Mehrdeutigkeit der Ortszeit wird der Offset verwendet, um sie zu lösen, anstatt der `disambiguation`-Option.

Wenn Sie im Voraus wissen, wie Sie mit Offset-Mehrdeutigkeiten umgehen möchten, sollten Sie die `offset`-Option verwenden, um Ausnahmen zu vermeiden, die standardmäßig ausgelöst werden. Beispielsweise möchte eine Kalenderanwendung wahrscheinlich, dass der Zeitzonenbezeichner "gewinnt", damit wiederkehrende Meetings in der aktuellsten Ortszeit für diese Zeitzone angezeigt werden; `offset: "ignore"` ist also geeignet. Andererseits sollte eine Task-Planer-Anwendung, die eine Aufgabe genau 3 Stunden später ausführt, wahrscheinlich `offset: "use"` wählen, da Änderungen an Zeitzonenregeln die Bedeutung von "3 Stunden später" nicht ändern sollten.

In einigen Fällen wissen Sie möglicherweise nicht, welche `offset`-Option die richtige ist, ohne Benutzereingaben zu erhalten. In diesen Fällen können Sie überlegen, den `RangeError` abzufangen und dann den Benutzer zu fragen, welche Ortszeit die korrekte ist, und dann das Parsen mit einer anderen `offset`-Option gemäß der Benutzerauswahl erneut versuchen.

Beachten Sie, dass der `Z`-Offset nicht gleichbedeutend mit `+00:00` ist. Der `Z`-Offset bedeutet "die Zeit in UTC ist bekannt, aber der Offset zur Ortszeit ist unbekannt", gemäß [RFC 9557](https://www.rfc-editor.org/rfc/rfc9557.html#name-update-to-rfc-3339). Wenn der Zeitstring den `Z`-Offset verwendet, wird die `offset`-Option ignoriert, und der Offset wird aus der Zeitzonen-ID abgeleitet. Auf der anderen Seite wird der `+00:00`-Offset als ein Ortszeitoffset interpretiert, der zufällig mit UTC übereinstimmt und gegen die Zeitzonen-ID validiert wird.

> [!NOTE]
> Obwohl {{jsxref("Temporal/Instant/from", "Temporal.Instant.from()")}} auch einen [RFC 9557](#rfc_9557_format)-String in derselben Form akzeptiert, gibt es keine Mehrdeutigkeit, da sie immer den Zeitzonenbezeichner ignoriert und nur den Offset liest.

## Konstruktor

- {{jsxref("Temporal/ZonedDateTime/ZonedDateTime", "Temporal.ZonedDateTime()")}} {{experimental_inline}}
  - : Erstellt ein neues `Temporal.ZonedDateTime`-Objekt durch direkte Bereitstellung der zugrunde liegenden Daten.

## Statische Methoden

- {{jsxref("Temporal/ZonedDateTime/compare", "Temporal.ZonedDateTime.compare()")}}
  - : Gibt eine Zahl zurück (-1, 0 oder 1), die angibt, ob die erste Datum-Uhrzeit vor, gleich oder nach der zweiten Datum-Uhrzeit liegt. Entspricht dem Vergleich der {{jsxref("Temporal/ZonedDateTime/epochNanoseconds", "epochNanoseconds")}} der beiden Datum-Uhrzeiten.
- {{jsxref("Temporal/ZonedDateTime/from", "Temporal.ZonedDateTime.from()")}}
  - : Erstellt ein neues `Temporal.ZonedDateTime`-Objekt aus einem anderen `Temporal.ZonedDateTime`-Objekt, einem Objekt mit Datum-, Zeit- und Zeitzoneneigenschaften oder einem [RFC 9557](#rfc_9557_format)-String.

## Instanz-Eigenschaften

Diese Eigenschaften sind auf `Temporal.ZonedDateTime.prototype` definiert und werden von allen `Temporal.ZonedDateTime`-Instanzen gemeinsam genutzt.

- {{jsxref("Temporal/ZonedDateTime/calendarId", "Temporal.ZonedDateTime.prototype.calendarId")}}
  - : Gibt einen String zurück, der den verwendeten [Kalender](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars) repräsentiert, um das interne ISO 8601-Datum zu interpretieren.
- {{jsxref("Object/constructor", "Temporal.ZonedDateTime.prototype.constructor")}}
  - : Die Konstruktionsfunktion, die das Instanzobjekt erstellt hat. Für `Temporal.ZonedDateTime`-Instanzen ist der Anfangswert der {{jsxref("Temporal/ZonedDateTime/ZonedDateTime", "Temporal.ZonedDateTime()")}}-Konstruktor.
- {{jsxref("Temporal/ZonedDateTime/day", "Temporal.ZonedDateTime.prototype.day")}}
  - : Gibt eine positive ganze Zahl zurück, die den 1-basierten Tagindex im Monat dieses Datums darstellt, was dieselbe Tagesnummer ist, die Sie auf einem Kalender sehen würden. [Kalender](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars)-abhängig. Beginnt im Allgemeinen bei 1 und ist kontinuierlich, aber nicht immer.
- {{jsxref("Temporal/ZonedDateTime/dayOfWeek", "Temporal.ZonedDateTime.prototype.dayOfWeek")}}
  - : Gibt eine positive ganze Zahl zurück, die den 1-basierten Tagindex in der Woche dieses Datums darstellt. Tage in einer Woche sind sequentiell von `1` bis {{jsxref("Temporal/ZonedDateTime/daysInWeek", "daysInWeek")}} nummeriert, wobei jede Nummer ihrem Namen entspricht. [Kalender](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars)-abhängig. 1 repräsentiert normalerweise Montag im Kalender, selbst wenn Lokale, die den Kalender verwenden, einen anderen Tag als den ersten Tag der Woche betrachten (siehe {{jsxref("Intl/Locale/getWeekInfo", "Intl.Locale.prototype.getWeekInfo()")}}).
- {{jsxref("Temporal/ZonedDateTime/dayOfYear", "Temporal.ZonedDateTime.prototype.dayOfYear")}}
  - : Gibt eine positive ganze Zahl zurück, die den 1-basierten Tagindex im Jahr dieses Datums darstellt. Der erste Tag dieses Jahres ist `1`, und der letzte Tag ist der {{jsxref("Temporal/ZonedDateTime/daysInYear", "daysInYear")}}. [Kalender](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars)-abhängig.
- {{jsxref("Temporal/ZonedDateTime/daysInMonth", "Temporal.ZonedDateTime.prototype.daysInMonth")}}
  - : Gibt eine positive ganze Zahl zurück, die die Anzahl der Tage im Monat dieses Datums darstellt. [Kalender](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars)-abhängig.
- {{jsxref("Temporal/ZonedDateTime/daysInWeek", "Temporal.ZonedDateTime.prototype.daysInWeek")}}
  - : Gibt eine positive ganze Zahl zurück, die die Anzahl der Tage in der Woche dieses Datums darstellt. [Kalender](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars)-abhängig. Für den ISO 8601-Kalender sind es immer 7, aber in anderen Kalendersystemen kann es von Woche zu Woche unterschiedlich sein.
- {{jsxref("Temporal/ZonedDateTime/daysInYear", "Temporal.ZonedDateTime.prototype.daysInYear")}}
  - : Gibt eine positive ganze Zahl zurück, die die Anzahl der Tage im Jahr dieses Datums darstellt. [Kalender](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars)-abhängig. Für den ISO 8601-Kalender sind es 365 oder 366 in einem Schaltjahr.
- {{jsxref("Temporal/ZonedDateTime/epochMilliseconds", "Temporal.ZonedDateTime.prototype.epochMilliseconds")}}
  - : Gibt eine ganze Zahl zurück, die die Anzahl der Millisekunden darstellt, die seit der Unix-Epoche (Mitternacht am Anfang des 1. Januar 1970, UTC) bis zu diesem Instant verstrichen sind. Entspricht der Division von `epochNanoseconds` durch `1e6` und der Bodenbildung des Ergebnisses.
- {{jsxref("Temporal/ZonedDateTime/epochNanoseconds", "Temporal.ZonedDateTime.prototype.epochNanoseconds")}}
  - : Gibt ein {{jsxref("BigInt")}} zurück, das die Anzahl der Nanosekunden darstellt, die seit der Unix-Epoche (Mitternacht am Anfang des 1. Januar 1970, UTC) bis zu diesem Instant verstrichen sind.
- {{jsxref("Temporal/ZonedDateTime/era", "Temporal.ZonedDateTime.prototype.era")}}
  - : Gibt einen kalenderabhängigen Kleinbuchstaben-String zurück, der die Ära dieses Datums darstellt, oder `undefined`, wenn der Kalender keine Ären verwendet (z.B. ISO 8601). `era` und `eraYear` identifizieren zusammen ein Jahr in einem Kalender eindeutig, genauso wie `year`. [Kalender](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars)-abhängig. Für Gregorianisch ist es entweder `"gregory"` oder `"gregory-inverse"`.
- {{jsxref("Temporal/ZonedDateTime/eraYear", "Temporal.ZonedDateTime.prototype.eraYear")}}
  - : Gibt eine nicht-negative ganze Zahl zurück, die das Jahr dieses Datums innerhalb der Ära darstellt, oder `undefined`, wenn der Kalender keine Ären verwendet (z.B. ISO 8601). Der Jahresindex beginnt normalerweise bei 1 (häufiger) oder 0, und Jahre in einer Ära können mit der Zeit abnehmen (z.B. Gregorianisch v. Chr.). `era` und `eraYear` identifizieren zusammen ein Jahr in einem Kalender eindeutig, genauso wie `year`. [Kalender](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars)-abhängig.
- {{jsxref("Temporal/ZonedDateTime/hour", "Temporal.ZonedDateTime.prototype.hour")}}
  - : Gibt eine ganze Zahl von 0 bis 23 zurück, die die Stundenkomponente dieser Zeit darstellt.
- {{jsxref("Temporal/ZonedDateTime/hoursInDay", "Temporal.ZonedDateTime.prototype.hoursInDay")}}
  - : Gibt eine positive ganze Zahl zurück, die die Anzahl der Stunden im Tag dieses Datums in der Zeitzone darstellt. Bei Offset-Änderungen wie der Sommerzeit kann es mehr oder weniger als 24 sein.
- {{jsxref("Temporal/ZonedDateTime/inLeapYear", "Temporal.ZonedDateTime.prototype.inLeapYear")}}
  - : Gibt einen Booleschen Wert zurück, der angibt, ob dieses Datum in einem Schaltjahr liegt. Ein Schaltjahr ist ein Jahr, das mehr Tage (aufgrund eines Schaltages oder Schaltmonats) als ein normales Jahr hat. [Kalender](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars)-abhängig.
- {{jsxref("Temporal/ZonedDateTime/microsecond", "Temporal.ZonedDateTime.prototype.microsecond")}}
  - : Gibt eine ganze Zahl von 0 bis 999 zurück, die die Mikrosekundenkomponente (10<sup>-6</sup> Sekunden) dieser Zeit darstellt.
- {{jsxref("Temporal/ZonedDateTime/millisecond", "Temporal.ZonedDateTime.prototype.millisecond")}}
  - : Gibt eine ganze Zahl von 0 bis 999 zurück, die die Millisekundenkomponente (10<sup>-3</sup> Sekunden) dieser Zeit darstellt.
- {{jsxref("Temporal/ZonedDateTime/minute", "Temporal.ZonedDateTime.prototype.minute")}}
  - : Gibt eine ganze Zahl von 0 bis 59 zurück, die die Minutenkomponente dieser Zeit darstellt.
- {{jsxref("Temporal/ZonedDateTime/month", "Temporal.ZonedDateTime.prototype.month")}}
  - : Gibt eine positive ganze Zahl zurück, die den 1-basierten Monatsindex im Jahr dieses Datums darstellt. Der erste Monat dieses Jahres ist `1`, und der letzte Monat ist der {{jsxref("Temporal/ZonedDateTime/monthsInYear", "monthsInYear")}}. [Kalender](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars)-abhängig. Beachten Sie, dass im Gegensatz zu {{jsxref("Date.prototype.getMonth()")}} der Index 1-basiert ist. Wenn der Kalender Schaltmonate hat, kann der Monat mit demselben {{jsxref("Temporal/ZonedDateTime/monthCode", "monthCode")}} für verschiedene Jahre unterschiedliche `month`-Indizes haben.
- {{jsxref("Temporal/ZonedDateTime/monthCode", "Temporal.ZonedDateTime.prototype.monthCode")}}
  - : Gibt einen kalenderabhängigen String zurück, der den Monat dieses Datums darstellt. [Kalender](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars)-abhängig. Üblicherweise ist es `M` plus eine zweistellige Monatsnummer. Bei Schaltmonaten ist es der Code des vorherigen Monats, gefolgt von `L`. Wenn der Schaltmonat der erste Monat des Jahres ist, ist der Code `M00L`.
- {{jsxref("Temporal/ZonedDateTime/monthsInYear", "Temporal.ZonedDateTime.prototype.monthsInYear")}}
  - : Gibt eine positive ganze Zahl zurück, die die Anzahl der Monate im Jahr dieses Datums darstellt. [Kalender](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars)-abhängig. Für den ISO 8601-Kalender sind es immer 12, aber in anderen Kalendersystemen kann es variieren.
- {{jsxref("Temporal/ZonedDateTime/nanosecond", "Temporal.ZonedDateTime.prototype.nanosecond")}}
  - : Gibt eine ganze Zahl von 0 bis 999 zurück, die die Nanosekundenkomponente (10<sup>-9</sup> Sekunden) dieser Zeit darstellt.
- {{jsxref("Temporal/ZonedDateTime/offset", "Temporal.ZonedDateTime.prototype.offset")}}
  - : Gibt einen String zurück, der den verwendeten [Offset](#zeitzonen_und_offsets) zur Interpretation des internen Instants im Format `±HH:mm` (oder `±HH:mm:ss.sssssssss` mit so viel Subminute-Präzision wie nötig) darstellt.
- {{jsxref("Temporal/ZonedDateTime/offsetNanoseconds", "Temporal.ZonedDateTime.prototype.offsetNanoseconds")}}
  - : Gibt eine ganze Zahl zurück, die den verwendeten [Offset](#zeitzonen_und_offsets) zur Interpretation des internen Instants als Anzahl von Nanosekunden (positiv oder negativ) darstellt.
- {{jsxref("Temporal/ZonedDateTime/second", "Temporal.ZonedDateTime.prototype.second")}}
  - : Gibt eine ganze Zahl von 0 bis 59 zurück, die die Sekundenkomponente dieser Zeit darstellt.
- {{jsxref("Temporal/ZonedDateTime/timeZoneId", "Temporal.ZonedDateTime.prototype.timeZoneId")}}
  - : Gibt einen String zurück, der den verwendeten [Zeitzonenbezeichner](#zeitzonen_und_offsets) zur Interpretation des internen Instants darstellt. Es wird derselbe String verwendet, der beim Erstellen des `Temporal.ZonedDateTime`-Objekts verwendet wurde, entweder ein IANA-Zeitzonenname oder ein fester Offset.
- {{jsxref("Temporal/ZonedDateTime/weekOfYear", "Temporal.ZonedDateTime.prototype.weekOfYear")}}
  - : Gibt eine positive ganze Zahl zurück, die den 1-basierten Wochenindex im {{jsxref("Temporal/ZonedDateTime/yearOfWeek", "yearOfWeek")}} dieses Datums darstellt, oder `undefined`, wenn der Kalender kein gut definiertes Wochensystem hat. Die erste Woche des Jahres ist `1`. [Kalender](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars)-abhängig. Beachten Sie, dass für ISO 8601 die ersten und letzten Tage des Jahres der letzten Woche des Vorjahres oder der ersten Woche des folgenden Jahres zugeordnet sein können.
- {{jsxref("Temporal/ZonedDateTime/year", "Temporal.ZonedDateTime.prototype.year")}}
  - : Gibt eine ganze Zahl zurück, die die Anzahl der Jahre dieses Datums relativ zum Beginn eines kalenderspezifischen Jahresepoches darstellt. [Kalender](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars)-abhängig. Üblicherweise ist Jahr 1 entweder das erste Jahr der neuesten Ära oder das ISO 8601-Jahr `0001`. Wenn die Epoche in der Mitte des Jahres liegt, hat dieses Jahr denselben Wert sowohl vor als auch nach dem Startdatum der Ära.
- {{jsxref("Temporal/ZonedDateTime/yearOfWeek", "Temporal.ZonedDateTime.prototype.yearOfWeek")}}
  - : Gibt eine ganze Zahl zurück, die das Jahr darstellt, das mit der {{jsxref("Temporal/ZonedDateTime/weekOfYear", "weekOfYear")}} dieses Datums gepaart werden soll, oder `undefined`, wenn der Kalender kein gut definiertes Wochensystem hat. [Kalender](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars)-abhängig. Üblicherweise ist dies das Jahr des Datums, aber für ISO 8601 können die ersten und letzten Tage des Jahres der letzten Woche des Vorjahres oder der ersten Woche des folgenden Jahres zugeordnet sein, wodurch sich das `yearOfWeek` um 1 unterscheidet.
- `Temporal.ZonedDateTime.prototype[Symbol.toStringTag]`
  - : Der Anfangswert der [`[Symbol.toStringTag]`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag)-Eigenschaft ist der String `"Temporal.ZonedDateTime"`. Diese Eigenschaft wird in {{jsxref("Object.prototype.toString()")}} verwendet.

## Instanz-Methoden

- {{jsxref("Temporal/ZonedDateTime/add", "Temporal.ZonedDateTime.prototype.add()")}}
  - : Gibt ein neues `Temporal.ZonedDateTime`-Objekt zurück, das diese Datum-Uhrzeit um eine angegebene Dauer nach vorne verschoben darstellt (in einer Form, die von {{jsxref("Temporal/Duration/from", "Temporal.Duration.from()")}} konvertiert werden kann).
- {{jsxref("Temporal/ZonedDateTime/equals", "Temporal.ZonedDateTime.prototype.equals()")}}
  - : Gibt `true` zurück, wenn diese Datum-Uhrzeit gleichwertig mit einer anderen Datum-Uhrzeit ist (in einer Form, die von {{jsxref("Temporal/ZonedDateTime/from", "Temporal.ZonedDateTime.from()")}} konvertiert werden kann), und `false` andernfalls. Sie werden sowohl nach ihren Instant-Werten, Zeitzonen als auch ihren Kalendern verglichen, sodass zwei Datum-Uhrzeiten aus verschiedenen Kalendern oder Zeitzonen von {{jsxref("Temporal/ZonedDateTime/compare", "Temporal.ZonedDateTime.compare()")}} als gleich betrachtet werden können, aber nicht von `equals()`.
- {{jsxref("Temporal/ZonedDateTime/getTimeZoneTransition", "Temporal.ZonedDateTime.prototype.getTimeZoneTransition()")}}
  - : Gibt ein `Temporal.ZonedDateTime`-Objekt zurück, das den ersten Instant nach oder vor diesem Instant darstellt, bei dem sich der UTC-Offset der Zeitzone ändert, oder `null`, wenn es keinen solchen Übergang gibt. Dies ist nützlich für das Ermitteln der Offset-Regeln einer Zeitzone, wie das Muster der Sommerzeit.
- {{jsxref("Temporal/ZonedDateTime/round", "Temporal.ZonedDateTime.prototype.round()")}}
  - : Gibt ein neues `Temporal.ZonedDateTime`-Objekt zurück, das diese Datum-Uhrzeit auf die angegebene Einheit gerundet darstellt.
- {{jsxref("Temporal/ZonedDateTime/since", "Temporal.ZonedDateTime.prototype.since()")}}
  - : Gibt ein neues {{jsxref("Temporal.Duration")}}-Objekt zurück, das die Dauer von einer anderen Datum-Uhrzeit (in einer Form, die von {{jsxref("Temporal/ZonedDateTime/from", "Temporal.ZonedDateTime.from()")}} konvertiert werden kann) zu dieser Datum-Uhrzeit darstellt. Die Dauer ist positiv, wenn die andere Datum-Uhrzeit vor dieser Datum-Uhrzeit ist, und negativ, wenn danach.
- {{jsxref("Temporal/ZonedDateTime/startOfDay", "Temporal.ZonedDateTime.prototype.startOfDay()")}}
  - : Gibt ein `Temporal.ZonedDateTime`-Objekt zurück, das den ersten Instant dieses Datums in der Zeitzone darstellt. Es hat normalerweise eine Zeit von `00:00:00`, kann aber anders sein, wenn Mitternacht aufgrund von Offset-Änderungen nicht existiert, in welchem Fall die erste existierende Zeit zurückgegeben wird.
- {{jsxref("Temporal/ZonedDateTime/subtract", "Temporal.ZonedDateTime.prototype.subtract()")}}
  - : Gibt ein neues `Temporal.ZonedDateTime`-Objekt zurück, das diese Datum-Uhrzeit um eine angegebene Dauer nach hinten verschoben darstellt (in einer Form, die von {{jsxref("Temporal/Duration/from", "Temporal.Duration.from()")}} konvertiert werden kann).
- {{jsxref("Temporal/ZonedDateTime/toInstant", "Temporal.ZonedDateTime.prototype.toInstant()")}}
  - : Gibt ein neues {{jsxref("Temporal.Instant")}}-Objekt zurück, das den Instant dieser Datum-Uhrzeit darstellt.
- {{jsxref("Temporal/ZonedDateTime/toJSON", "Temporal.ZonedDateTime.prototype.toJSON()")}}
  - : Gibt einen String zurück, der diese Datum-Uhrzeit im gleichen [RFC 9557-Format](#rfc_9557_format) darstellt wie der Aufruf von {{jsxref("Temporal/ZonedDateTime/toString", "toString()")}}. Soll implizit von {{jsxref("JSON.stringify()")}} aufgerufen werden.
- {{jsxref("Temporal/ZonedDateTime/toLocaleString", "Temporal.ZonedDateTime.prototype.toLocaleString()")}}
  - : Gibt einen String mit einer sprachsensitiven Darstellung dieser Datum-Uhrzeit zurück.
- {{jsxref("Temporal/ZonedDateTime/toPlainDate", "Temporal.ZonedDateTime.prototype.toPlainDate()")}}
  - : Gibt ein neues {{jsxref("Temporal.PlainDate")}}-Objekt zurück, das den Datumsanteil dieser Datum-Uhrzeit darstellt.
- {{jsxref("Temporal/ZonedDateTime/toPlainDateTime", "Temporal.ZonedDateTime.prototype.toPlainDateTime()")}}
  - : Gibt ein neues {{jsxref("Temporal.PlainDateTime")}}-Objekt zurück, das den Datums- und Zeitanteil dieser Datum-Uhrzeit darstellt. Nur die Zeitzoneninformationen werden entfernt.
- {{jsxref("Temporal/ZonedDateTime/toPlainTime", "Temporal.ZonedDateTime.prototype.toPlainTime()")}}
  - : Gibt ein neues {{jsxref("Temporal.PlainTime")}}-Objekt zurück, das den Zeitanteil dieser Datum-Uhrzeit darstellt.
- {{jsxref("Temporal/ZonedDateTime/toString", "Temporal.ZonedDateTime.prototype.toString()")}}
  - : Gibt einen String zurück, der diese Datum-Uhrzeit im [RFC 9557-Format](#rfc_9557_format) darstellt.
- {{jsxref("Temporal/ZonedDateTime/until", "Temporal.ZonedDateTime.prototype.until()")}}
  - : Gibt ein neues {{jsxref("Temporal.Duration")}}-Objekt zurück, das die Dauer von dieser Datum-Uhrzeit zu einer anderen Datum-Uhrzeit (in einer Form, die von {{jsxref("Temporal/ZonedDateTime/from", "Temporal.ZonedDateTime.from()")}} konvertiert werden kann) darstellt. Die Dauer ist positiv, wenn die andere Datum-Uhrzeit nach dieser Datum-Uhrzeit ist, und negativ, wenn davor.
- {{jsxref("Temporal/ZonedDateTime/valueOf", "Temporal.ZonedDateTime.prototype.valueOf()")}}
  - : Löst einen {{jsxref("TypeError")}} aus, der verhindert, dass `Temporal.ZonedDateTime`-Instanzen in arithmetischen oder Vergleichsoperationen [implizit in Primitiven konvertiert](/de/docs/Web/JavaScript/Guide/Data_structures#primitive_coercion) werden.
- {{jsxref("Temporal/ZonedDateTime/with", "Temporal.ZonedDateTime.prototype.with()")}}
  - : Gibt ein neues `Temporal.ZonedDateTime`-Objekt zurück, das diese Datum-Uhrzeit mit einigen Feldern ersetzt durch neue Werte darstellt.
- {{jsxref("Temporal/ZonedDateTime/withCalendar", "Temporal.ZonedDateTime.prototype.withCalendar()")}}
  - : Gibt ein neues `Temporal.ZonedDateTime`-Objekt zurück, das diese Datum-Uhrzeit im neuen Kalendersystem interpretiert.
- {{jsxref("Temporal/ZonedDateTime/withPlainTime", "Temporal.ZonedDateTime.prototype.withPlainTime()")}}
  - : Gibt ein neues `Temporal.ZonedDateTime`-Objekt zurück, das diese Datum-Uhrzeit mit dem Zeitanteil vollständig ersetzt durch die neue Zeit darstellt (in einer Form, die von {{jsxref("Temporal/PlainTime/from", "Temporal.PlainTime.from()")}} konvertiert werden kann).
- {{jsxref("Temporal/ZonedDateTime/withTimeZone", "Temporal.ZonedDateTime.prototype.withTimeZone()")}}
  - : Gibt ein neues `Temporal.ZonedDateTime`-Objekt zurück, das denselben Instant wie diese Datum-Uhrzeit, jedoch in der neuen Zeitzone darstellt.

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
