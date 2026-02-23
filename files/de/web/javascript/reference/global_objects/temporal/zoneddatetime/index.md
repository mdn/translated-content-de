---
title: Temporal.ZonedDateTime
slug: Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime
l10n:
  sourceCommit: 3cc665141a834304942e7e2c15745cb766a6b195
---

Das **`Temporal.ZonedDateTime`**-Objekt repräsentiert ein Datum und eine Uhrzeit mit einer Zeitzone. Es wird grundsätzlich als Kombination eines [instants](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/Instant), einer Zeitzone und eines Kalendersystems dargestellt.

## Beschreibung

Ein `ZonedDateTime` fungiert als Brücke zwischen einer exakten Zeit und einer Wand-Uhrzeit: Es repräsentiert gleichzeitig einen Moment in der Geschichte (ähnlich einem {{jsxref("Temporal.Instant")}}) und eine lokale, an der Wand ablesbare Uhrzeit (ähnlich einem {{jsxref("Temporal.PlainDateTime")}}). Dies wird erreicht, indem der Moment, die Zeitzone und das Kalendersystem gespeichert werden. Die Zeitzone wird verwendet, um zwischen dem Moment und der lokalen Zeit zu konvertieren, das Kalendersystem wird genutzt, um die lokale Zeit zu interpretieren.

`ZonedDateTime` ist die einzige `Temporal`-Klasse, die sich der Zeitzone bewusst ist. Das Hinzufügen einer Zeitzone sorgt dafür, dass `ZonedDateTime`-Objekte wichtige Verhaltensunterschiede zu {{jsxref("Temporal.PlainDateTime")}}-Objekten aufweisen. Vor allem kann man nicht mehr davon ausgehen, dass "die Zeit 1 Minute danach" jeden Tag dieselbe ist oder dass ein Tag 24 Stunden hat. Im schlimmsten Fall kann ein ganzer Tag im lokalen Kalender fehlen. Im Folgenden bieten wir einen kurzen Überblick über Zeitzonen und Offsets und wie sie die Umwandlung zwischen UTC-Zeit und lokaler Zeit beeinflussen.

### Zeitzonen und Offsets

Alle Zeiten in JavaScript haben einen goldenen Standard: die UTC-Zeit, die kontinuierlich und gleichmäßig fortschreitet, während physikalische Zeit vergeht. Im Gegensatz dazu interessieren sich die Nutzer mehr für ihre lokale Zeit, die sie auf ihren Kalendern und Uhren ablesen. Der Prozess der Konvertierung zwischen UTC-Zeit und lokaler Zeit umfasst ein Zeitzonen-_Offset_, das wie folgt berechnet wird:

```plain
local time = UTC time + offset
```

Zum Beispiel, wenn die UTC-Zeit 1970-01-01T00:00:00 ist und das Offset "-05:00" beträgt, dann ist die lokale Zeit:

```plain
1970-01-01T00:00:00 + -05:00 = 1969-12-31T19:00:00
```

Indem man diese lokale Zeit mit dem Offset versieht, ausgedrückt als "1969-12-31T19:00:00-05:00", kann sie nun unmissverständlich als ein Moment in der Geschichte verstanden werden.

Um das Offset zu kennen, benötigen wir zwei Informationen, die _Zeitzone_ und den _Moment_. Die Zeitzone ist eine Region auf der Erde, in der das gleiche Offset zu jeder Zeit verwendet wird. Zwei Uhren in derselben Zeitzone zeigen immer gleichzeitig dieselbe Zeit an, aber das Offset ist nicht unbedingt konstant: Das bedeutet, dass die Zeiten dieser Uhren abrupt ändern können. Dies geschieht häufig während der Sommerzeitumstellung, bei der sich das Offset um eine Stunde ändert, was zweimal im Jahr geschieht. Offsets können sich auch dauerhaft aufgrund politischer Veränderungen ändern, zum Beispiel, wenn ein Land die Zeitzone wechselt.

Die Zeitzonen sind in der [IANA Time Zone Database](https://www.iana.org/time-zones) gespeichert. Jede IANA-Zeitzone hat:

- Einen _primären Zeitzonenbezeichner_, der die Zeitzone eindeutig identifiziert. Er bezieht sich normalerweise auf ein geografisches Gebiet, das von einer Stadt verankert ist (z. B. `Europe/Paris` oder `Africa/Kampala`), kann aber auch Einzeloffset-Zeitzonen wie `UTC` (ein konstantes `+00:00` Offset) oder `Etc/GMT+5` bezeichnen (was aus historischen Gründen ein negatives Offset `-05:00` ist). Aus historischen Gründen ist der primäre Name für die UTC-Zeitzone `UTC`, obwohl es in IANA `Etc/UTC` ist.
- Eine _Zeitzonendefinition_ in Form einer Tabelle, die UTC-Datums-/Uhrzeitbereiche (einschließlich zukünftiger Bereiche) auf spezifische Offsets abbildet.
- Null oder mehr _nicht-primäre Zeitzonenbezeichner_, die Aliase für den primären Zeitzonenbezeichner sind. Diese sind normalerweise historische Namen, die nicht mehr verwendet werden, aber aus Kompatibilitätsgründen beibehalten werden. Weitere Informationen finden Sie unten.

Als Eingabe werden benannte Bezeichner ohne Berücksichtigung der Groß-/Kleinschreibung abgeglichen. Intern werden sie in der bevorzugten Schreibweise gespeichert, und nicht-primäre Bezeichner werden _nicht_ in ihren primären Bezeichner umgewandelt.

> [!NOTE]
> Beim Festlegen des Zeitzonennamens möchten Sie selten, dass er auf `"UTC"` gesetzt wird. `ZonedDateTime` ist dazu gedacht, Benutzern angezeigt zu werden, aber kein Mensch lebt in der "UTC"-Zeitzone. Wenn Sie die Zeitzone zur Erstellungszeit nicht kennen, aber die an der Wand ablesbare Uhrzeit wissen, verwenden Sie eine {{jsxref("Temporal.PlainDateTime")}}. Wenn Sie den genauen Moment kennen, verwenden Sie eine {{jsxref("Temporal.Instant")}}.

Wenn eine `Temporal`-API einen _Zeitzonenbezeichner_ akzeptiert, akzeptiert sie neben primären Zeitzonenbezeichnern und nicht-primären Zeitzonenbezeichnern auch einen _Offset-Zeitzonenbezeichner_, der in derselben Form wie das Offset vorliegt, außer dass keine subminutengenaue Präzision erlaubt ist. Zum Beispiel sind `+05:30`, `-08`, `+0600` alle gültige Offset-Bezeichner. Intern werden Offset-Bezeichner in der Form `±HH:mm` gespeichert.

> [!NOTE]
> Vermeiden Sie nach Möglichkeit die Verwendung von Offset-Bezeichnern, wenn es eine benannte Zeitzone gibt, die Sie stattdessen verwenden können. Auch wenn eine Region immer nur ein einziges Offset verwendet hat, ist es besser, den benannten Bezeichner zu verwenden, um gegen zukünftige politische Änderungen des Offsets gewappnet zu sein.
>
> Wenn eine Region mehrere Offsets verwendet oder verwendet hat, ist die Verwendung ihrer benannten Zeitzone sogar noch wichtiger. Dies liegt daran, dass `Temporal.ZonedDateTime` Methoden wie `add` oder `with` verwenden kann, um neue Instanzen zu einem anderen Moment zu erstellen. Wenn diese abgeleiteten Instanzen einem Moment entsprechen, der ein anderes Offset verwendet (zum Beispiel nach einer Sommerzeitumstellung), sind Ihre Berechnungen mit einer inkorrekten lokalen Zeit versehen. Die Verwendung einer benannten Zeitzone stellt sicher, dass lokale Daten und Uhrzeiten jederzeit für das jeweilige Moment korrekt angepasst werden.

Zum Komfort können Sie beim Bereitstellen eines Zeitzonenbezeichners an `Temporal`-APIs wie `Temporal.ZonedDateTime.prototype.withTimeZone()` und die `timeZoneId`-Option von `Temporal.ZonedDateTime.from()` ihn in einigen anderen Formen bereitstellen:

- Als andere `ZonedDateTime`-Instanz, deren `timeZoneId` verwendet wird.
- Als [RFC 9557-String](#rfc_9557-format) mit einer Zeitzonenannotation, deren Zeitzonenbezeichner verwendet wird.
- Als ISO 8601 / RFC 3339-String, der ein Offset enthält, dessen Offset als Offset-Bezeichner verwendet wird; oder, falls `Z` verwendet wird, wird die Zeitzone `"UTC"` verwendet. Diese Nutzung wird im Allgemeinen nicht empfohlen, da Offset-Bezeichner wie oben besprochen die Fähigkeit fehlt, andere `Temporal.ZonedDateTime`-Instanzen sicher über eine Offset-Übergang wie bei Beginn oder Ende der Sommerzeit zu erzeugen. Verwenden Sie stattdessen einfach `Temporal.Instant` oder holen Sie sich die tatsächlich benannte Zeitzone des Benutzers.

Die IANA-Zeitzonendatenbank ändert sich von Zeit zu Zeit, in der Regel um als Antwort auf politische Änderungen neue Zeitzonen hinzuzufügen. Gelegentlich werden jedoch in seltenen Fällen IANA-Zeitzonenbezeichner umbenannt, um aktualisierte englische Übersetzungen eines Stadtnamens zu übernehmen oder veraltete Benennungsgewohnheiten zu aktualisieren. Zum Beispiel sind hier einige bemerkenswerte Namensänderungen:

| Aktueller IANA-Hauptbezeichner   | Alter, nicht mehr primärer Bezeichner |
| -------------------------------- | ------------------------------------- |
| `America/Argentina/Buenos_Aires` | `America/Buenos_Aires`                |
| `Asia/Kolkata`                   | `Asia/Calcutta`                       |
| `Asia/Ho_Chi_Minh`               | `Asia/Saigon`                         |
| `Europe/Kyiv`                    | `Europe/Kiev`                         |

Historisch gesehen verursachten diese Umbenennungen Probleme für Programmierer, weil die Unicode [CLDR-Datenbank](https://github.com/unicode-org/cldr/blob/main/common/bcp47/timezone.xml) (eine Bibliothek, die von Browsern verwendet wird, um Zeitzonenbezeichner und -daten bereitzustellen) IANAs Umbenennung aus [Stabilitätsgründen](https://unicode.org/reports/tr35/#Time_Zone_Identifiers) nicht folgte. Infolgedessen meldeten einige Browser wie Chrome und Safari CLDRs veraltete Bezeichner, während andere Browser wie Firefox CLDRs Vorgaben überstimmten und die neuesten primären Bezeichner meldeten.

Mit der Einführung von Temporal ist dieses Verhalten nun standardisierter:

- [CLDR-Daten](https://github.com/unicode-org/cldr/blob/main/common/bcp47/timezone.xml) enthalten jetzt ein `"_iana"`-Attribut, das den aktuellsten Bezeichner angibt, wenn der ältere, stabile Bezeichner umbenannt wurde. Browser können dieses neue Attribut verwenden, um Anrufern aktuelle Bezeichner bereitzustellen.
- Von Programmierern bereitgestellte Zeitzonenbezeichner werden niemals durch ein Alias ersetzt. Zum Beispiel wird, wenn der Anrufer `Asia/Calcutta` oder `Asia/Kolkata` als Eingabebezeichner zu {{jsxref("Temporal/ZonedDateTime/from", "Temporal.ZonedDateTime.from()")}} bereitstellt, derselbe Bezeichner in der resultierenden Instanz von {{jsxref("Temporal.ZonedDateTime/timeZoneId", "timeZoneId")}} zurückgegeben. Beachten Sie, dass die Schreibweise der Ausgaben normalisiert wird, um mit IANA übereinzustimmen, sodass `ASIA/calCuTTa` als Eingabe einen {{jsxref("Temporal/ZonedDateTime/timeZoneId", "timeZoneId")}} von `Asia/Calcutta` als Ausgabe erzeugt.
- Wenn ein Zeitzonenbezeichner nicht von einem Anrufer bereitgestellt wird, sondern stattdessen vom System selbst bezogen wird (zum Beispiel bei Verwendung von {{jsxref("Temporal/Now/timeZoneId", "Temporal.Now.timeZoneId()")}}), werden moderne Bezeichner in allen Browsern zurückgegeben. Bei Stadtnamenänderungen gibt es eine zweijährige Verzögerung, bevor diese systembereitgestellten Bezeichner-APIs den neuen Namen anzeigen, wodurch anderen Komponenten (wie einem Node-Server) Zeit gegeben wird, ihre Kopien der IANA-Datenbank zu aktualisieren, um den neuen Namen zu erkennen.

Beachten Sie, dass die Zuschreibung von primären Bezeichnern den Ländercode beibehält: Zum Beispiel zeichnet die IANA-Datenbank `Atlantic/Reykjavik` als Alias für `Africa/Abidjan` auf, aber da sie unterschiedlichen Ländern entsprechen (Island und Côte d'Ivoire, respektive), werden sie als unterschiedliche primäre Bezeichner behandelt.

Diese Standardisierung gilt auch außerhalb von `Temporal`. Zum Beispiel wird die `timeZone`-Option, die von {{jsxref("Intl/DateTimeFormat/resolvedOptions", "Intl.DateTimeFormat.prototype.resolvedOptions()")}} zurückgegeben wird, auch niemals durch ein Alias ersetzt, obwohl Browser diese Bezeichner traditionell vor der Standardisierung durch Temporal kanonisiert haben. Andererseits werden {{jsxref("Intl/Locale/getTimeZones", "Intl.Locale.prototype.getTimeZones()")}} und {{jsxref("Intl.supportedValuesOf()")}} (`timeZone`-Option) den aktuellsten Bezeichner zurückgeben, während einige Browser früher den alten, nicht primären Bezeichner zurückgaben.

### RFC 9557-Format

`ZonedDateTime`-Objekte können im [RFC 9557](https://datatracker.ietf.org/doc/html/rfc9557)-Format, einer Erweiterung des [ISO 8601 / RFC 3339](https://datatracker.ietf.org/doc/html/rfc3339)-Formats, serialisiert und geparst werden. Der String hat die folgende Form (Leerzeichen dienen nur der Lesbarkeit und sollten im tatsächlichen String nicht vorhanden sein):

```plain
YYYY-MM-DD T HH:mm:ss.sssssssss Z/±HH:mm [time_zone_id] [u-ca=calendar_id]
```

- `YYYY`
  - : Entweder eine vierstellige Zahl oder eine sechsstellige Zahl mit einem `+` oder `-` Zeichen.
- `MM`
  - : Eine zweistellige Zahl von `01` bis `12`.
- `DD`
  - : Eine zweistellige Zahl von `01` bis `31`. Die `YYYY`-, `MM`- und `DD`-Komponenten können durch `-` oder nichts getrennt werden.
- `T` {{optional_inline}}
  - : Der Datum-Zeit-Trenner, der `T`, `t` oder ein Leerzeichen sein kann. Vorhanden, wenn und nur wenn `HH` vorhanden ist.
- `HH` {{optional_inline}}
  - : Eine zweistellige Zahl von `00` bis `23`. Standardmäßig `00`.
- `mm` {{optional_inline}}
  - : Eine zweistellige Zahl von `00` bis `59`. Standardmäßig `00`.
- `ss.sssssssss` {{optional_inline}}
  - : Eine zweistellige Zahl von `00` bis `59`. Kann optional von einem `.` oder `,` gefolgt und ein bis neun Ziffern sein. Standardmäßig `00`. Die `HH`-, `mm`- und `ss`-Komponenten können durch `:` oder nichts getrennt werden. Man kann entweder nur `ss` oder sowohl `ss` als auch `mm` weglassen, sodass die Zeit eine von drei Formen haben kann: `HH`, `HH:mm` oder `HH:mm:ss.sssssssss`.
- `Z/±HH:mm` {{optional_inline}}
  - : Entweder der UTC-Kennzeichner `Z` oder `z`, oder ein Offset von UTC in Form von `+` oder `-`, gefolgt von demselben Format wie die Zeitkomponente. Beachten Sie, dass subminutengenaue Präzision (`:ss.sssssssss`) von anderen Systemen möglicherweise nicht unterstützt wird und akzeptiert, aber niemals ausgegeben wird. Wenn weggelassen, wird das Offset aus dem Zeitzonenbezeichner abgeleitet. Wenn vorhanden, muss die Zeit ebenfalls bereitgestellt werden. `Z` ist nicht dasselbe wie `+00:00`: ersteres bedeutet, dass die Zeit in UTC-Form unabhängig vom Zeitzonenbezeichner angegeben ist, während letzteres bedeutet, dass die Zeit in lokaler Zeit angegeben wird, die zufällig UTC+0 ist, und anhand des Zeitzonenbezeichners durch die [`offset`-Option](#offset-mehrdeutigkeit) validiert wird.
- `[time_zone_id]`
  - : Ersetzen Sie `time_zone_id` durch den oben beschriebenen Zeitzonenbezeichner (benannt oder Offset). Kann ein _kritisches Flag_ haben, indem der Bezeichner mit `!` vorangestellt wird: z. B. `[!America/New_York]`. Dieses Flag teilt anderen Systemen im Allgemeinen mit, dass es nicht ignoriert werden kann, wenn sie es nicht unterstützen. Beachten Sie, dass es für `Temporal.ZonedDateTime.from()` erforderlich ist: Wenn es weggelassen wird, führt es zu einem `RangeError`. Wenn Sie ISO 8601 / RFC 3339-Strings ohne Zeitzonenbezeichner-Anmerkungen parsen möchten, verwenden Sie {{jsxref("Temporal/Instant/from", "Temporal.Instant.from()")}} stattdessen.
- `[u-ca=calendar_id]` {{optional_inline}}
  - : Ersetzen Sie `calendar_id` durch den zu verwendenden Kalender. Siehe [`Intl.supportedValuesOf()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/supportedValuesOf#supported_calendar_types) für eine Liste von allgemein unterstützten Kalendertypen. Standardmäßig `[u-ca=iso8601]`. Kann ein _kritisches Flag_ haben, indem der Schlüssel mit `!` vorangestellt wird: z. B. `[!u-ca=iso8601]`. Dieses Flag teilt anderen Systemen im Allgemeinen mit, dass es nicht ignoriert werden kann, wenn sie es nicht unterstützen. Der `Temporal`-Parser wirft einen Fehler, wenn die Anmerkungen zwei oder mehr Kalenderanmerkungen enthalten und eine davon kritisch ist. Beachten Sie, dass das `YYYY-MM-DD` immer als ISO 8601-Kalenderdatum interpretiert und dann in den angegebenen Kalender umgewandelt wird.

Als Eingabe werden anderen Anmerkungen im `[key=value]`-Format ignoriert, und sie dürfen nicht das kritische Flag haben.

Beim Serialisieren können Sie die Bruchteilssekundenziffern, ob das Offset/Zeitzonen-ID/Kalender-ID angezeigt wird, und ob ein kritisches Flag für die Anmerkungen hinzugefügt wird, konfigurieren.

### Mehrdeutigkeit und Lücken von lokaler Zeit zu UTC-Zeit

Angenommen, es gibt eine Zeitzone, ist die Umwandlung von UTC in lokale Zeit einfach: Zuerst erhalten Sie das Offset mit dem Zeitzonennamen und dem Moment, dann addieren Sie das Offset zum Moment. Die Umkehrung ist nicht wahr: Die Umwandlung von lokaler Zeit in UTC-Zeit, ohne ein explizites Offset, ist mehrdeutig, weil eine lokale Zeit null, eine oder viele UTC-Zeiten entsprechen kann. Betrachten Sie die häufigste Ursache: Zeitsparzeitumstellungen. Nehmen wir New York als Beispiel an. Sein Standardoffset ist UTC-5, aber während der DST werden alle Uhren um eine Stunde vorgestellt, sodass das Offset zu UTC-4 wird. In den USA erfolgen die Umstellungen um 2:00 Uhr Ortszeit. Betrachten Sie diese beiden Übergangstage:

| UTC-Zeit             | New Yorker Zeit           |
| -------------------- | ------------------------- |
| 2024-03-10T06:58:00Z | 2024-03-10T01:58:00-05:00 |
| 2024-03-10T06:59:00Z | 2024-03-10T01:59:00-05:00 |
| 2024-03-10T07:00:00Z | 2024-03-10T03:00:00-04:00 |
| ---                  | ---                       |
| 2024-11-03T05:58:00Z | 2024-11-03T01:58:00-04:00 |
| 2024-11-03T05:59:00Z | 2024-11-03T01:59:00-04:00 |
| 2024-11-03T06:00:00Z | 2024-11-03T01:00:00-05:00 |

Wie Sie sehen, verschwand im März eine Stunde aus der lokalen Zeit, und im November gab es zwei Stunden mit derselben Wand-Uhrzeit. Angenommen, wir haben ein `PlainDateTime` gespeichert, das "2024-03-10T02:05:00" sagt, und wir wollen es in der `America/New_York`-Zeitzone interpretieren. Es wird keine Zeit geben, die ihr entspricht, während ein `PlainDateTime`, das "2024-11-03T01:05:00" sagt, zwei verschiedenen Momenten entsprechen kann.

Wenn ein `ZonedDateTime` aus einer lokalen Zeit erstellt wird (verwendet {{jsxref("Temporal/ZonedDateTime/from", "Temporal.ZonedDateTime.from()")}}, {{jsxref("Temporal/ZonedDateTime/with", "Temporal.ZonedDateTime.prototype.with()")}}, {{jsxref("Temporal/PlainDateTime/toZonedDateTime", "Temporal.PlainDateTime.prototype.toZonedDateTime()")}}), ist das Verhalten bei Mehrdeutigkeit und Lücken über die `disambiguation`-Option konfigurierbar:

- `earlier`
  - : Wenn es zwei mögliche Momente gibt, wählen Sie den früheren. Wenn es eine Lücke gibt, gehen Sie um die Dauer der Lücke zurück.
- `later`
  - : Wenn es zwei mögliche Momente gibt, wählen Sie den späteren. Wenn es eine Lücke gibt, gehen Sie um die Dauer der Lücke vorwärts.
- `compatible` (Standard)
  - : Gleiches Verhalten wie bei {{jsxref("Date")}}: Verwenden Sie für Lücken das `later`-Verhalten und für Mehrdeutigkeiten das `earlier`-Verhalten.
- `reject`
  - : Werfen Sie einen `RangeError`, wenn es eine Mehrdeutigkeit oder Lücke gibt.

Es gibt mehrere Fälle, in denen keine Mehrdeutigkeit besteht, wenn ein `ZonedDateTime` erstellt wird:

- Wenn die Zeit in UTC über das `Z`-Offset angegeben ist.
- Wenn das Offset explizit bereitgestellt und verwendet wird (siehe unten).

### Offset-Mehrdeutigkeit

Wir haben bereits demonstriert, wie Mehrdeutigkeit entstehen kann, wenn eine lokale Zeit in einer Zeitzone interpretiert wird, ohne ein explizites Offset bereitzustellen. Wenn Sie jedoch ein explizites Offset bereitstellen, entsteht ein weiterer Konflikt: zwischen dem angegebenen Offset und dem aus der Zeitzone und der lokalen Zeit berechneten Offset. Dies ist ein unvermeidliches realweltliches Problem: Wenn Sie eine Zeit in der Zukunft gespeichert haben, mit einem erwarteten Offset, dann kann die Zeitzonendefinition aufgrund von politischen Gründen vor dieser Zeit geändert werden. Angenommen, wir haben 2018 eine Erinnerung zur Zeit `2019-12-23T12:00:00-02:00[America/Sao_Paulo]` (was eine Sommerzeit ist; Brasilien befindet sich auf der südlichen Hemisphäre, daher beginnt die Sommerzeit im Oktober und endet im Februar) gesetzt. Aber bevor diese Zeit kommt, beschließt Brasilien Anfang 2019, die Sommerzeit nicht mehr zu beobachten, sodass das tatsächliche Offset zu `-03:00` wird. Soll die Erinnerung nun noch immer um Mittag ausgelöst werden (um die lokale Zeit beizubehalten), oder soll sie um 11:00 Uhr vormittags (um die ursprüngliche Zeit beizubehalten) ausgelöst werden?

Damit eine Offset-Mehrdeutigkeit besteht, muss ein Zeitstempelstring unter Verwendung anderer IANA-Zeitzonendatenbankregeln geparst werden als die Regeln, die beim ursprünglichen Erstellen des Zeitstempels verwendet wurden. Dies wird niemals passieren, wenn Zeitstempel während derselben Ausführung eines JavaScript-Programms generiert werden, da die ECMAScript-Spezifikation verlangt, dass IANA-Zeitzonendatenbankregeln für die Lebensdauer eines JavaScript-Programms konsistent sein müssen.

Jedoch kann Offset-Mehrdeutigkeit bestehen, wenn ein JavaScript-Programm Zeitstempel parst, die früher gespeichert wurden, wie im obigen Beispiel `America/Sao_Paulo`, und die IANA-Zeitzonendatenbank seit der ursprünglichen Erstellung des Zeitstempels aktualisiert wurde. Es kann auch auftreten, wenn Zeitstempel zwischen Computern (oder, selten, zwischen verschiedenen Software auf demselben Computer!) kommuniziert werden, die unterschiedliche Versionen der IANA-Zeitzonendatenbank verwenden. Die IANA-Zeitzonendatenbank hat auch Build-Optionen (zum Beispiel die Verwendung oder Nichtverwendung veralteter Regeln in `backzone`), die zu Offset-Mehrdeutigkeiten führen können, wenn Zeitstempel zwischen Computern kommuniziert werden, die unterschiedliche Software verwenden, selbst wenn die Version der IANA-Zeitzonendatenbank dieselbe ist.

Offset-Mehrdeutigkeiten werden selten angetroffen und gelten fast immer nur für Zeitstempel vor 1970 oder für Zeitstempel, die Monate oder Jahre in der Zukunft liegen. Aber wenn dieses Problem auftritt, wird standardmäßig ein `RangeError` ausgelöst. Wenn ein `ZonedDateTime` mit {{jsxref("Temporal/ZonedDateTime/from", "Temporal.ZonedDateTime.from()")}} erstellt oder aktualisiert wird, können Sie diese Ausnahme verhindern, indem Sie die `offset`-Option verwenden, um zu entscheiden, ob das Offset oder der Zeitzonenbezeichner "gewinnt":

- `use`
  - : Verwenden Sie das Offset, um die exakte Zeit zu berechnen. Diese Option "verwendet" das Offset, um den Moment zu bestimmen, der durch den Zeitstempelstring beabsichtigt ist, auch wenn sich das Offset zu diesem Moment geändert hat. Der Zeitzonenbezeichner wird immer noch verwendet, um dann das (möglicherweise aktualisierte) Offset abzuleiten und dieses Offset zu verwenden, um die exakte Zeit in lokale Zeit umzuwandeln. Im obigen Beispiel `2019-12-23T12:00:00-02:00[America/Sao_Paulo]` würde diese Option bewirken, dass die Erinnerung um 11:00 Uhr Ortszeit ausgelöst wird.
- `ignore`
  - : Verwenden Sie den Zeitzonenbezeichner, um das Offset neu zu berechnen, und ignorieren Sie das im String angegebene Offset. Diese Option behält die gleiche lokale Zeit bei, wie sie ursprünglich berechnet wurde, als wir die Zeit gespeichert haben. Dies kann jedoch zu einem anderen Moment führen. Beachten Sie, dass durch Ignorieren des Offsets dieselbe [lokale Zeitinterpretationsmehrdeutigkeit](#mehrdeutigkeit_und_lücken_von_lokaler_zeit_zu_utc-zeit) auftreten kann, die mit der `disambiguation`-Option gelöst wird. Im obigen Beispiel `2019-12-23T12:00:00-02:00[America/Sao_Paulo]` würde diese Option bewirken, dass die Erinnerung um 12:00 Uhr Ortszeit ausgelöst wird.
- `reject`
  - : Werfen Sie einen `RangeError`, wenn es einen Konflikt zwischen dem Offset und dem Zeitzonenbezeichner gibt. Dies ist die Standardeinstellung für {{jsxref("Temporal/ZonedDateTime/from", "Temporal.ZonedDateTime.from()")}}.
- `prefer`
  - : Verwenden Sie das Offset, wenn es gültig ist, andernfalls das Offset aus dem Zeitzonenbezeichner berechnen. Dies ist die Standardeinstellung für {{jsxref("Temporal/ZonedDateTime/with", "Temporal.ZonedDateTime.prototype.with()")}} (siehe diese Methode für weitere Einzelheiten). Dies unterscheidet sich von `ignore`, da im Falle einer lokalen Mehrdeutigkeit das Offset verwendet wird, um sie zu lösen, anstatt der `disambiguation`-Option.

Wenn Sie im Voraus wissen, wie Sie mit Offset-Mehrdeutigkeiten umgehen möchten, sollten Sie die `offset`-Option verwenden, um Ausnahmen zu vermeiden, die standardmäßig ausgelöst werden. Beispielsweise möchte eine Kalenderanwendung wahrscheinlich, dass der Zeitzonenbezeichner "gewinnt", damit wiederkehrende Besprechungen in der aktuellsten Ortszeit für diese Zeitzone angezeigt werden. Daher ist `offset: "ignore"` angemessen. Andererseits sollte eine Aufgabenplanungsanwendung, die eine Aufgabe genau 3 Stunden ab jetzt ausführt, wahrscheinlich `offset: "use"` wählen, da Änderungen der Zeitzonenregeln die Bedeutung von "3 Stunden ab jetzt" nicht ändern sollten.

In einigen Fällen wissen Sie möglicherweise nicht, welche `offset`-Option die richtige ist, ohne den Benutzer zu befragen. In diesen Fällen möchten Sie möglicherweise den `RangeError` abfangen und dann Ihren Benutzer fragen, welche lokale Zeit die richtige ist, und dann den Parsing-Vorgang mit einer anderen `offset`-Option entsprechend der Wahl des Benutzers wiederholen.

Beachten Sie, dass das `Z`-Offset nicht mit `+00:00` identisch ist. Das `Z`-Offset bedeutet "die Zeit in UTC ist bekannt, aber das Offset zur lokalen Zeit ist unbekannt", gemäß [RFC 9557](https://www.rfc-editor.org/rfc/rfc9557.html#name-update-to-rfc-3339). Wenn der Zeitstring das `Z`-Offset verwendet, wird die `offset`-Option ignoriert, und das Offset wird aus der Zeitzone-ID abgeleitet. Andererseits wird das `+00:00`-Offset als ein lokales Zeit-Offset interpretiert, das zufällig mit UTC übereinstimmt und anhand der Zeitzone-ID validiert wird.

> [!NOTE]
> Obwohl {{jsxref("Temporal/Instant/from", "Temporal.Instant.from()")}} auch einen [RFC 9557](#rfc_9557-format)-String in derselben Form annimmt, gibt es keine Mehrdeutigkeit, da es den Zeitzonenbezeichner immer ignoriert und nur das Offset liest.

## Konstruktor

- {{jsxref("Temporal/ZonedDateTime/ZonedDateTime", "Temporal.ZonedDateTime()")}} {{experimental_inline}}
  - : Erstellt ein neues `Temporal.ZonedDateTime`-Objekt durch direkte Bereitstellung der zugrunde liegenden Daten.

## Statische Methoden

- {{jsxref("Temporal/ZonedDateTime/compare", "Temporal.ZonedDateTime.compare()")}}
  - : Gibt eine Zahl (-1, 0 oder 1) zurück, die angibt, ob das erste Datum-Uhrzeit vor, gleichzeitig mit oder nach der zweiten Datum-Uhrzeit kommt. Entspricht dem Vergleich der {{jsxref("Temporal/ZonedDateTime/epochNanoseconds", "epochNanoseconds")}} der beiden Datum-Uhrzeiten.
- {{jsxref("Temporal/ZonedDateTime/from", "Temporal.ZonedDateTime.from()")}}
  - : Erstellt ein neues `Temporal.ZonedDateTime`-Objekt aus einem anderen `Temporal.ZonedDateTime`-Objekt, einem Objekt mit Datums-, Zeit- und Zeitzoneneigenschaften oder einem [RFC 9557](#rfc_9557-format)-String.

## Instanz-Eigenschaften

Diese Eigenschaften sind auf `Temporal.ZonedDateTime.prototype` definiert und werden von allen `Temporal.ZonedDateTime`-Instanzen geteilt.

- {{jsxref("Temporal/ZonedDateTime/calendarId", "Temporal.ZonedDateTime.prototype.calendarId")}}
  - : Gibt eine Zeichenkette zurück, die den [Kalender](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars) darstellt, der verwendet wird, um das interne ISO 8601 Datum zu interpretieren.
- {{jsxref("Object/constructor", "Temporal.ZonedDateTime.prototype.constructor")}}
  - : Die Konstruktorfunktion, die das Instanzobjekt erstellt hat. Für `Temporal.ZonedDateTime`-Instanzen ist der Anfangswert der {{jsxref("Temporal/ZonedDateTime/ZonedDateTime", "Temporal.ZonedDateTime()")}}-Konstruktor.
- {{jsxref("Temporal/ZonedDateTime/day", "Temporal.ZonedDateTime.prototype.day")}}
  - : Gibt eine positive ganze Zahl zurück, die den 1-basierten Tagindex im Monat dieses Datums darstellt, was dieselbe Tageszahl ist, die Sie im Kalender sehen würden. [Kalender](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars)-abhängig. Beginnt im Allgemeinen bei 1 und ist fortlaufend, aber nicht immer.
- {{jsxref("Temporal/ZonedDateTime/dayOfWeek", "Temporal.ZonedDateTime.prototype.dayOfWeek")}}
  - : Gibt eine positive ganze Zahl zurück, die den 1-basierten Tagindex in der Woche dieses Datums darstellt. Tage in einer Woche werden sequenziell von `1` bis {{jsxref("Temporal/ZonedDateTime/daysInWeek", "daysInWeek")}} nummeriert, wobei jede Zahl ihrem Namen zugeordnet ist. [Kalender](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars)-abhängig. 1 repräsentiert im Kalender normalerweise Montag, selbst wenn Lokale, die den Kalender verwenden, vielleicht einen anderen Tag als den ersten Tag der Woche betrachten (siehe {{jsxref("Intl/Locale/getWeekInfo", "Intl.Locale.prototype.getWeekInfo()")}}).
- {{jsxref("Temporal/ZonedDateTime/dayOfYear", "Temporal.ZonedDateTime.prototype.dayOfYear")}}
  - : Gibt eine positive ganze Zahl zurück, die den 1-basierten Tagindex im Jahr dieses Datums darstellt. Der erste Tag dieses Jahres ist `1`, und der letzte Tag ist der {{jsxref("Temporal/ZonedDateTime/daysInYear", "daysInYear")}}. [Kalender](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars)-abhängig.
- {{jsxref("Temporal/ZonedDateTime/daysInMonth", "Temporal.ZonedDateTime.prototype.daysInMonth")}}
  - : Gibt eine positive ganze Zahl zurück, die die Anzahl der Tage im Monat dieses Datums darstellt. [Kalender](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars)-abhängig.
- {{jsxref("Temporal/ZonedDateTime/daysInWeek", "Temporal.ZonedDateTime.prototype.daysInWeek")}}
  - : Gibt eine positive ganze Zahl zurück, die die Anzahl der Tage in der Woche dieses Datums darstellt. [Kalender](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars)-abhängig. Für den ISO 8601-Kalender sind dies immer 7, aber in anderen Kalendersystemen kann sie von Woche zu Woche variieren.
- {{jsxref("Temporal/ZonedDateTime/daysInYear", "Temporal.ZonedDateTime.prototype.daysInYear")}}
  - : Gibt eine positive ganze Zahl zurück, die die Anzahl der Tage im Jahr dieses Datums darstellt. [Kalender](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars)-abhängig. Für den ISO 8601-Kalender sind dies 365 oder 366 in einem Schaltjahr.
- {{jsxref("Temporal/ZonedDateTime/epochMilliseconds", "Temporal.ZonedDateTime.prototype.epochMilliseconds")}}
  - : Gibt eine ganze Zahl zurück, die die Anzahl der Millisekunden darstellt, die seit dem Unix-Epoch (Mitternacht zu Beginn des 1. Januar 1970, UTC) bis zu diesem Moment vergangen sind. Entspricht der Division von `epochNanoseconds` durch `1e6` und dem Abrunden des Ergebnisses.
- {{jsxref("Temporal/ZonedDateTime/epochNanoseconds", "Temporal.ZonedDateTime.prototype.epochNanoseconds")}}
  - : Gibt eine {{jsxref("BigInt")}} zurück, die die Anzahl der Nanosekunden darstellt, die seit dem Unix-Epoch (Mitternacht zu Beginn des 1. Januar 1970, UTC) bis zu diesem Moment vergangen sind.
- {{jsxref("Temporal/ZonedDateTime/era", "Temporal.ZonedDateTime.prototype.era")}}
  - : Gibt eine kalenderabhängige Kleinbuchstabenkette zurück, die die Ära dieses Datums darstellt, oder `undefined`, wenn der Kalender keine Ären verwendet (z. B. ISO 8601). `era` und `eraYear` zusammen identifizieren ein Jahr in einem Kalender eindeutig, ebenso wie `year`. [Kalender](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars)-abhängig. Für den Gregorianischen Kalender ist es entweder `"ce"` oder `"bce"`.
- {{jsxref("Temporal/ZonedDateTime/eraYear", "Temporal.ZonedDateTime.prototype.eraYear")}}
  - : Gibt eine nicht-negative ganze Zahl zurück, die das Jahr dieses Datums innerhalb der Ära darstellt, oder `undefined`, wenn der Kalender keine Ären verwendet (z. B. ISO 8601). Der Jahresindex beginnt normalerweise bei 1 (häufiger) oder 0, und Jahre in einer Ära können mit der Zeit abnehmen (z. B. Gregorianisches BCE). `era` und `eraYear` zusammen identifizieren ein Jahr in einem Kalender eindeutig, ebenso wie `year`. [Kalender](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars)-abhängig.
- {{jsxref("Temporal/ZonedDateTime/hour", "Temporal.ZonedDateTime.prototype.hour")}}
  - : Gibt eine ganze Zahl von 0 bis 23 zurück, die die Stundenkomponente dieser Zeit darstellt.
- {{jsxref("Temporal/ZonedDateTime/hoursInDay", "Temporal.ZonedDateTime.prototype.hoursInDay")}}
  - : Gibt eine positive ganze Zahl zurück, die die Anzahl der Stunden im Tag dieses Datums in der Zeitzone darstellt. Sie kann im Fall von Offset-Änderungen wie der Sommerzeit mehr oder weniger als 24 sein.
- {{jsxref("Temporal/ZonedDateTime/inLeapYear", "Temporal.ZonedDateTime.prototype.inLeapYear")}}
  - : Gibt einen booleschen Wert zurück, der angibt, ob dieses Datum in einem Schaltjahr ist. Ein Schaltjahr ist ein Jahr, das mehr Tage hat (aufgrund eines Schalttages oder Schaltmonats) als ein gewöhnliches Jahr. [Kalender](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars)-abhängig.
- {{jsxref("Temporal/ZonedDateTime/microsecond", "Temporal.ZonedDateTime.prototype.microsecond")}}
  - : Gibt eine ganze Zahl von 0 bis 999 zurück, die die Mikrosekundenkomponente (10<sup>-6</sup> Sekunde) dieser Zeit darstellt.
- {{jsxref("Temporal/ZonedDateTime/millisecond", "Temporal.ZonedDateTime.prototype.millisecond")}}
  - : Gibt eine ganze Zahl von 0 bis 999 zurück, die die Millisekundenkomponente (10<sup>-3</sup> Sekunde) dieser Zeit darstellt.
- {{jsxref("Temporal/ZonedDateTime/minute", "Temporal.ZonedDateTime.prototype.minute")}}
  - : Gibt eine ganze Zahl von 0 bis 59 zurück, die die Minutenkomponente dieser Zeit darstellt.
- {{jsxref("Temporal/ZonedDateTime/month", "Temporal.ZonedDateTime.prototype.month")}}
  - : Gibt eine positive ganze Zahl zurück, die den 1-basierten Monatsindex im Jahr dieses Datums darstellt. Der erste Monat dieses Jahres ist `1`, und der letzte Monat ist der {{jsxref("Temporal/ZonedDateTime/monthsInYear", "monthsInYear")}}. [Kalender](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars)-abhängig. Beachten Sie, dass im Gegensatz zu {{jsxref("Date.prototype.getMonth()")}} der Index 1-basiert ist. Wenn der Kalender Schaltmonate hat, kann der Monat mit demselben {{jsxref("Temporal/ZonedDateTime/monthCode", "monthCode")}} in verschiedenen Jahren unterschiedliche Monatsindizes haben.
- {{jsxref("Temporal/ZonedDateTime/monthCode", "Temporal.ZonedDateTime.prototype.monthCode")}}
  - : Gibt eine kalenderabhängige Zeichenkette zurück, die den Monat dieses Datums darstellt. [Kalender](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars)-abhängig. Normalerweise ist es `M` plus einer zweistelligen Monatsnummer. Bei Schaltmonaten handelt es sich um das vorherige Monatscode gefolgt von `L`. Wenn der Schaltmonat der erste Monat des Jahres ist, lautet der Code `M00L`.
- {{jsxref("Temporal/ZonedDateTime/monthsInYear", "Temporal.ZonedDateTime.prototype.monthsInYear")}}
  - : Gibt eine positive ganze Zahl zurück, die die Anzahl der Monate im Jahr dieses Datums darstellt. [Kalender](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars)-abhängig. Für den ISO 8601-Kalender sind dies immer 12, aber in anderen Kalendersystemen kann sich die Anzahl ändern.
- {{jsxref("Temporal/ZonedDateTime/nanosecond", "Temporal.ZonedDateTime.prototype.nanosecond")}}
  - : Gibt eine ganze Zahl von 0 bis 999 zurück, die die Nanosekundenkomponente (10<sup>-9</sup> Sekunde) dieser Zeit darstellt.
- {{jsxref("Temporal/ZonedDateTime/offset", "Temporal.ZonedDateTime.prototype.offset")}}
  - : Gibt eine Zeichenkette zurück, die das [Offset](#zeitzonen_und_offsets) darstellt, das verwendet wird, um den internen Moment zu interpretieren, in der Form von `±HH:mm` (oder `±HH:mm:ss.sssssssss` mit so viel subminutengenaue Präzision wie nötig).
- {{jsxref("Temporal/ZonedDateTime/offsetNanoseconds", "Temporal.ZonedDateTime.prototype.offsetNanoseconds")}}
  - : Gibt eine ganze Zahl zurück, die das [Offset](#zeitzonen_und_offsets) darstellt, das verwendet wird, um den internen Moment zu interpretieren, als Anzahl der Nanosekunden (positiv oder negativ).
- {{jsxref("Temporal/ZonedDateTime/second", "Temporal.ZonedDateTime.prototype.second")}}
  - : Gibt eine ganze Zahl von 0 bis 59 zurück, die die Sekundenkomponente dieser Zeit darstellt.
- {{jsxref("Temporal/ZonedDateTime/timeZoneId", "Temporal.ZonedDateTime.prototype.timeZoneId")}}
  - : Gibt eine Zeichenkette zurück, die den [Zeitzonenbezeichner](#zeitzonen_und_offsets) darstellt, der verwendet wird, um den internen Moment zu interpretieren. Es verwendet denselben string, der beim Erstellen des `Temporal.ZonedDateTime`-Objekts verwendet wird, entweder einen IANA-Zeitzonennamen oder ein festes Offset.
- {{jsxref("Temporal/ZonedDateTime/weekOfYear", "Temporal.ZonedDateTime.prototype.weekOfYear")}}
  - : Gibt eine positive ganze Zahl zurück, die den 1-basierten Wochenindex im {{jsxref("Temporal/ZonedDateTime/yearOfWeek", "yearOfWeek")}} dieses Datums darstellt, oder `undefined`, wenn der Kalender kein klar definiertes Wochensystem hat. Die erste Woche des Jahres ist `1`. [Kalender](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars)-abhängig. Beachten Sie, dass für ISO 8601 die ersten und letzten Tage des Jahres eventuell der letzten Woche des vorherigen Jahres oder der ersten Woche des nächsten Jahres zugeschrieben werden können.
- {{jsxref("Temporal/ZonedDateTime/year", "Temporal.ZonedDateTime.prototype.year")}}
  - : Gibt eine ganze Zahl zurück, die die Anzahl der Jahre dieses Datums relativ zum Beginn eines kalenderspezifischen Epochjahres darstellt. [Kalender](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars)-abhängig. Meistens ist Jahr 1 entweder das erste Jahr der neuesten Ära oder das ISO 8601-Jahr `0001`. Wenn sich die Epoche in der Mitte des Jahres befindet, wird dieses Jahr denselben Wert vor und nach dem Startdatum der Ära haben.
- {{jsxref("Temporal/ZonedDateTime/yearOfWeek", "Temporal.ZonedDateTime.prototype.yearOfWeek")}}
  - : Gibt eine ganze Zahl zurück, die das Jahr darstellt, das mit der {{jsxref("Temporal/ZonedDateTime/weekOfYear", "weekOfYear")}} dieses Datums gepaart werden kann, oder `undefined`, wenn der Kalender kein klar definiertes Wochensystem hat. [Kalender](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars)-abhängig. Meistens ist dies das Jahr des Datums, aber für ISO 8601 können die ersten und letzten Tage des Jahres der letzten Woche des vorherigen Jahres oder der ersten Woche des nächsten Jahres zugeschrieben werden, was dazu führt, dass sich das `yearOfWeek` um 1 unterscheidet.
- `Temporal.ZonedDateTime.prototype[Symbol.toStringTag]`
  - : Der anfängliche Wert der [`[Symbol.toStringTag]`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag)-Eigenschaft ist die Zeichenkette `"Temporal.ZonedDateTime"`. Diese Eigenschaft wird in {{jsxref("Object.prototype.toString()")}} verwendet.

## Instanz-Methoden

- {{jsxref("Temporal/ZonedDateTime/add", "Temporal.ZonedDateTime.prototype.add()")}}
  - : Gibt ein neues `Temporal.ZonedDateTime`-Objekt zurück, das diese Datum-Uhrzeit um eine bestimmte Dauer (in einer Form, die von {{jsxref("Temporal/Duration/from", "Temporal.Duration.from()")}} konvertierbar ist) verschoben darstellt.
- {{jsxref("Temporal/ZonedDateTime/equals", "Temporal.ZonedDateTime.prototype.equals()")}}
  - : Gibt `true` zurück, wenn diese Datum-Uhrzeit im Wert zu einer anderen Datum-Uhrzeit äquivalent ist (in einer Form, die von {{jsxref("Temporal/ZonedDateTime/from", "Temporal.ZonedDateTime.from()")}} konvertierbar ist), und `false` andernfalls. Sie werden sowohl anhand ihrer Momentwerte, Zeitzonen als auch ihrer Kalender verglichen, sodass zwei Datum-Uhrzeiten aus verschiedenen Kalendern oder Zeitzonen von {{jsxref("Temporal/ZonedDateTime/compare", "Temporal.ZonedDateTime.compare()")}} als gleich betrachtet werden können, jedoch nicht von `equals()`.
- {{jsxref("Temporal/ZonedDateTime/getTimeZoneTransition", "Temporal.ZonedDateTime.prototype.getTimeZoneTransition()")}}
  - : Gibt ein `Temporal.ZonedDateTime`-Objekt zurück, das den ersten Moment nach oder vor diesem Moment darstellt, an dem sich das UTC-Offset der Zeitzone ändert, oder `null`, wenn es keine solche Übergang gibt. Dies ist nützlich, um die Offsets-Regeln einer Zeitzone herauszufinden, wie ihr Sommerzeitmuster.
- {{jsxref("Temporal/ZonedDateTime/round", "Temporal.ZonedDateTime.prototype.round()")}}
  - : Gibt ein neues `Temporal.ZonedDateTime`-Objekt zurück, das diese Datum-Uhrzeit auf die angegebene Einheit gerundet darstellt.
- {{jsxref("Temporal/ZonedDateTime/since", "Temporal.ZonedDateTime.prototype.since()")}}
  - : Gibt ein neues {{jsxref("Temporal.Duration")}}-Objekt zurück, das die Dauer von einer anderen Datum-Uhrzeit (in einer Form, die von {{jsxref("Temporal/ZonedDateTime/from", "Temporal.ZonedDateTime.from()")}} konvertierbar ist) bis zu dieser Datum-Uhrzeit darstellt. Die Dauer ist positiv, wenn die andere Datum-Uhrzeit vor dieser Datum-Uhrzeit liegt, und negativ, wenn sie danach liegt.
- {{jsxref("Temporal/ZonedDateTime/startOfDay", "Temporal.ZonedDateTime.prototype.startOfDay()")}}
  - : Gibt ein `Temporal.ZonedDateTime`-Objekt zurück, das den ersten Moment dieses Datums in der Zeitzone darstellt. Es hat normalerweise eine Zeit von `00:00:00`, kann aber unterschiedlich sein, wenn Mitternacht aufgrund von Offset-Änderungen nicht existiert, in diesem Fall wird die erste vorhandene Zeit zurückgegeben.
- {{jsxref("Temporal/ZonedDateTime/subtract", "Temporal.ZonedDateTime.prototype.subtract()")}}
  - : Gibt ein neues `Temporal.ZonedDateTime`-Objekt zurück, das diese Datum-Uhrzeit um eine bestimmte Dauer (in einer Form, die von {{jsxref("Temporal/Duration/from", "Temporal.Duration.from()")}} konvertierbar ist) zurückbewegt darstellt.
- {{jsxref("Temporal/ZonedDateTime/toInstant", "Temporal.ZonedDateTime.prototype.toInstant()")}}
  - : Gibt ein neues {{jsxref("Temporal.Instant")}}-Objekt zurück, das den Moment dieser Datum-Uhrzeit darstellt.
- {{jsxref("Temporal/ZonedDateTime/toJSON", "Temporal.ZonedDateTime.prototype.toJSON()")}}
  - : Gibt eine Zeichenkette zurück, die diese Datum-Uhrzeit im selben [RFC 9557-Format](#rfc_9557-format) darstellt wie das Aufrufen von {{jsxref("Temporal/ZonedDateTime/toString", "toString()")}}. Beabsichtigt, implizit von {{jsxref("JSON.stringify()")}} aufgerufen zu werden.
- {{jsxref("Temporal/ZonedDateTime/toLocaleString", "Temporal.ZonedDateTime.prototype.toLocaleString()")}}
  - : Gibt eine Zeichenkette zurück, die eine sprachsensitiv dargestellte Darstellung dieser Datum-Uhrzeit enthält.
- {{jsxref("Temporal/ZonedDateTime/toPlainDate", "Temporal.ZonedDateTime.prototype.toPlainDate()")}}
  - : Gibt ein neues {{jsxref("Temporal.PlainDate")}}-Objekt zurück, das den Datumsteil dieser Datum-Uhrzeit darstellt.
- {{jsxref("Temporal/ZonedDateTime/toPlainDateTime", "Temporal.ZonedDateTime.prototype.toPlainDateTime()")}}
  - : Gibt ein neues {{jsxref("Temporal.PlainDateTime")}}-Objekt zurück, das die Datums- und Zeitanteile dieser Datum-Uhrzeit darstellt. Nur die Zeitzoneninformationen werden entfernt.
- {{jsxref("Temporal/ZonedDateTime/toPlainTime", "Temporal.ZonedDateTime.prototype.toPlainTime()")}}
  - : Gibt ein neues {{jsxref("Temporal.PlainTime")}}-Objekt zurück, das den Zeitanteil dieser Datum-Uhrzeit darstellt.
- {{jsxref("Temporal/ZonedDateTime/toString", "Temporal.ZonedDateTime.prototype.toString()")}}
  - : Gibt eine Zeichenkette zurück, die diese Datum-Uhrzeit im [RFC 9557-Format](#rfc_9557-format) darstellt.
- {{jsxref("Temporal/ZonedDateTime/until", "Temporal.ZonedDateTime.prototype.until()")}}
  - : Gibt ein neues {{jsxref("Temporal.Duration")}}-Objekt zurück, das die Dauer von dieser Datum-Uhrzeit bis zu einer anderen Datum-Uhrzeit (in einer Form, die von {{jsxref("Temporal/ZonedDateTime/from", "Temporal.ZonedDateTime.from()")}} konvertierbar ist) darstellt. Die Dauer ist positiv, wenn die andere Datum-Uhrzeit später ist, und negativ, wenn sie früher ist.
- {{jsxref("Temporal/ZonedDateTime/valueOf", "Temporal.ZonedDateTime.prototype.valueOf()")}}
  - : Wirft einen {{jsxref("TypeError")}}, der verhindert, dass `Temporal.ZonedDateTime`-Instanzen bei arithmetischen oder Vergleichsoperationen [implizit in primitive Werte konvertiert](/de/docs/Web/JavaScript/Guide/Data_structures#primitive_coercion) werden.
- {{jsxref("Temporal/ZonedDateTime/with", "Temporal.ZonedDateTime.prototype.with()")}}
  - : Gibt ein neues `Temporal.ZonedDateTime`-Objekt zurück, das diese Datum-Uhrzeit darstellt, wobei einige Felder durch neue Werte ersetzt wurden.
- {{jsxref("Temporal/ZonedDateTime/withCalendar", "Temporal.ZonedDateTime.prototype.withCalendar()")}}
  - : Gibt ein neues `Temporal.ZonedDateTime`-Objekt zurück, das diese Datum-Uhrzeit im neuen Kalendersystem interpretiert darstellt.
- {{jsxref("Temporal/ZonedDateTime/withPlainTime", "Temporal.ZonedDateTime.prototype.withPlainTime()")}}
  - : Gibt ein neues `Temporal.ZonedDateTime`-Objekt zurück, das diese Datum-Uhrzeit darstellt, wobei der Zeitanteil vollständig durch die neue Zeit ersetzt wurde (in einer Form, die von {{jsxref("Temporal/PlainTime/from", "Temporal.PlainTime.from()")}} konvertierbar ist).
- {{jsxref("Temporal/ZonedDateTime/withTimeZone", "Temporal.ZonedDateTime.prototype.withTimeZone()")}}
  - : Gibt ein neues `Temporal.ZonedDateTime`-Objekt zurück, das denselben Moment wie diese Datum-Uhrzeit, jedoch in der neuen Zeitzone repräsentiert.

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
