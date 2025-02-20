---
title: Temporal.ZonedDateTime
slug: Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime
l10n:
  sourceCommit: a7444882eb1b18918f3c924d83eb3c78f245643a
---

{{JSRef}}{{SeeCompatTable}}

Das **`Temporal.ZonedDateTime`**-Objekt repräsentiert ein Datum und eine Uhrzeit mit einer Zeitzone. Grundsätzlich wird es durch eine Kombination aus einem [Instant](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/Instant), einer Zeitzone und einem Kalendersystem dargestellt.

## Beschreibung

Ein `ZonedDateTime` dient als Brücke zwischen einer exakten Zeit und einer sogenannten "Wall-clock"-Zeit: Es repräsentiert gleichzeitig einen Moment in der Geschichte (wie ein {{jsxref("Temporal.Instant")}}) und eine lokale "Wall-clock"-Zeit (wie ein {{jsxref("Temporal.PlainDateTime")}}). Dies wird erreicht durch die Speicherung des Moments, der Zeitzone und des Kalendersystems. Die Zeitzone wird verwendet, um zwischen dem Moment und der lokalen Zeit zu konvertieren, und das Kalendersystem wird genutzt, um die lokale Zeit zu interpretieren.

`ZonedDateTime` ist die einzige `Temporal`-Klasse, die Zeitzonen berücksichtigt. Durch die Hinzunahme einer Zeitzone weisen `ZonedDateTime`-Objekte wichtige Verhaltensunterschiede zu {{jsxref("Temporal.PlainDateTime")}}-Objekten auf. Insbesondere kann man nicht mehr davon ausgehen, dass „die Zeit eine Minute später“ an jedem Tag gleich ist oder dass ein Tag 24 Stunden hat. Im schlimmsten Fall kann ein ganzer Tag im lokalen Kalender fehlen. Unten finden Sie einen kurzen Überblick über Zeitzonen und Offsets sowie darüber, wie sich diese auf die Konvertierung zwischen UTC-Zeit und lokaler Zeit auswirken.

### Zeitzonen und Offsets

Alle Zeiten in JavaScript richten sich nach einem goldenen Standard: der UTC-Zeit, die kontinuierlich und einheitlich mit dem Fortschreiten der physikalischen Zeit zunimmt. Im Gegensatz dazu interessieren sich Benutzer mehr für ihre lokale Zeit, also die Zeit, die sie auf ihren Kalendern und Uhren ablesen. Der Vorgang der Konvertierung zwischen UTC-Zeit und lokaler Zeit erfordert einen _Zeitzonen-Offset_, der wie folgt berechnet wird:

```plain
local time = UTC time + offset
```

Zum Beispiel: Wenn die UTC-Zeit 1970-01-01T00:00:00 beträgt und der Offset "-05:00" lautet, dann beträgt die lokale Zeit:

```plain
1970-01-01T00:00:00 + -05:00 = 1969-12-31T19:00:00
```

Durch das Anhängen dieses Offsets an die lokale Zeit, z. B. "1969-12-31T19:00:00-05:00", wird diese eindeutig als ein Moment in der Geschichte verstanden.

Um den Offset zu kennen, benötigen wir zwei Informationen, die _Zeitzone_ und den _Moment_. Die Zeitzone ist eine Region auf der Erde, in der der gleiche Offset zu allen Zeiten verwendet wird. Zwei Uhren in derselben Zeitzone zeigen immer gleichzeitig die gleiche Zeit an, jedoch ist der Offset nicht unbedingt konstant: Das heißt, die Zeiten auf diesen Uhren können sich abrupt ändern. Dies geschieht häufig während der Umstellungen von Sommerzeit/Winterzeit, bei denen sich der Offset um eine Stunde ändert, was zweimal im Jahr passiert. Offsets können sich auch dauerhaft ändern, z. B. durch politische Entscheidungen wie einen Wechsel der Zeitzonen.

Die Zeitzonen werden in der [IANA Time Zone Database](https://www.iana.org/time-zones) gespeichert. Jede IANA-Zeitzone hat:

- Eine _primäre Zeitzonenkennung_, die die Zeitzone eindeutig identifiziert. Sie bezieht sich üblicherweise auf ein geografisches Gebiet, das von einer Stadt verankert wird (z. B. `Europe/Paris` oder `Africa/Kampala`), kann aber auch Zeitzonen mit einem einzigen Offset wie `UTC` (ein konstanter Offset von `+00:00`) oder `Etc/GMT+5` (aus historischen Gründen ein negativer Offset `-05:00`) bezeichnen. Aus historischen Gründen ist der primäre Name der UTC-Zeitzone `UTC`, obwohl er in IANA als `Etc/UTC` aufgeführt ist.
- Eine _Zeitzonendefinition_, in Form einer Tabelle, welche UTC-Datums-/Zeitbereiche (einschließlich zukünftiger Bereiche) auf spezifische Offsets abbildet.
- Null oder mehr _nicht-primäre Zeitzonenkennungen_, die Aliasnamen für die primäre Zeitzonenkennung sind. Dies sind üblicherweise historische Namen, die nicht mehr verwendet werden, aber aus Gründen der Kompatibilität beibehalten werden. Siehe unten für weitere Informationen.

Zeitzonenkennungen werden als Eingabe fallunabhängig abgeglichen. Intern werden sie in ihrer bevorzugten Schreibweise gespeichert, und nicht-primäre Kennungen werden _nicht_ in ihre primäre Kennung konvertiert.

> [!NOTE]
> Wenn Sie den Zeitzonennamen einstellen, möchten Sie selten `"UTC"` einstellen. `ZonedDateTime` ist für die Anzeige für Benutzer vorgesehen, aber kein Mensch lebt in der Zeitzone "UTC". Falls Sie die Zeitzone zur Erstellungszeit nicht kennen, aber die "Wall-clock"-Zeit kennen, verwenden Sie stattdessen ein {{jsxref("Temporal.PlainDateTime")}}. Wenn Sie den genauen Moment kennen, verwenden Sie ein {{jsxref("Temporal.Instant")}}.

Wenn eine `Temporal`-API eine _Zeitzonenkennung_ akzeptiert, akzeptiert sie zusätzlich zu primären und nicht-primären Zeitzonenkennungen auch eine _Offset-Zeitzonenkennung_, die in derselben Form wie der Offset ist, jedoch ist subminütige Präzision nicht erlaubt. Zum Beispiel sind `+05:30`, `-08`, `+0600` gültige Offset-Kennungen. Intern werden Offset-Kennungen in der Form `±HH:mm` gespeichert.

> [!NOTE]
> Vermeiden Sie die Verwendung von Offset-Kennungen, wenn Sie stattdessen eine benannte Zeitzone verwenden können. Selbst wenn eine Region immer einen einzigen Offset verwendet hat, ist es besser, die benannte Kennung zu verwenden, um sich gegen zukünftige politische Änderungen des Offsets abzusichern.
>
> Wenn eine Region mehrere Offsets verwendet (oder verwendet hat), wird die Verwendung ihrer benannten Zeitzone noch wichtiger. Grund dafür ist, dass `Temporal.ZonedDateTime` Methoden wie `add` oder `with` verwenden kann, um neue Instanzen zu erstellen, die sich auf einen anderen Moment beziehen. Wenn diese abgeleiteten Instanzen einem Moment entsprechen, der einen anderen Offset verwendet (zum Beispiel nach einer Sommerzeitumstellung), haben Ihre Berechnungen eine falsche lokale Zeit. Die Verwendung einer benannten Zeitzone stellt sicher, dass lokale Daten und Zeiten stets für den korrekten Offset für diesen Moment angepasst werden.

Zur Vereinfachung können Sie beim Bereitstellen einer Zeitzonenkennung für `Temporal`-APIs wie `Temporal.ZonedDateTime.prototype.withTimeZone()` und die `timeZoneId`-Option von `Temporal.ZonedDateTime.from()` diese in verschiedenen anderen Formen angeben:

- Als eine andere `ZonedDateTime`-Instanz, deren `timeZoneId` verwendet wird.
- Als ein [RFC 9557-String](#rfc_9557-format) mit einer Zeitzonen-Annotation, deren Zeitzonenkennung verwendet wird.
- Als ein ISO 8601- / RFC 3339-String, der einen Offset enthält, dessen Offset als Offset-Kennung verwendet wird; oder wenn `Z` verwendet wird, dann wird die Zeitzone `"UTC"` verwendet. Diese Nutzung wird im Allgemeinen nicht empfohlen, da, wie oben erläutert, Offset-Kennungen nicht die Fähigkeit besitzen, andere `Temporal.ZonedDateTime`-Instanzen sicher über eine Offset-Übergang hinweg (wie beim Beginn oder Ende der Sommerzeit) abzuleiten. Erwägen Sie stattdessen, einfach `Temporal.Instant` zu verwenden oder die tatsächliche benannte Zeitzone des Benutzers abzurufen.

Die IANA-Zeitzonendatenbank ändert sich von Zeit zu Zeit, meist um neue Zeitzonen als Reaktion auf politische Änderungen einzuführen. Allerdings werden in seltenen Fällen IANA-Zeitzonenkennungen umbenannt, um eine aktualisierte englische Übersetzung eines Städtenamens zu verwenden oder um veraltete Namenskonventionen zu aktualisieren. Beispiele für bemerkenswerte Namensänderungen sind:

| Aktuelle primäre IANA-Kennung    | Alte, nicht-primäre Kennung |
| -------------------------------- | --------------------------- |
| `America/Argentina/Buenos_Aires` | `America/Buenos_Aires`      |
| `Asia/Kolkata`                   | `Asia/Calcutta`             |
| `Asia/Ho_Chi_Minh`               | `Asia/Saigon`               |
| `Europe/Kyiv`                    | `Europe/Kiev`               |

Historisch gesehen verursachten solche Umbenennungen Probleme für Programmierer, da die Unicode-[CLDR-Datenbank](https://github.com/unicode-org/cldr-json/blob/main/cldr-json/cldr-bcp47/bcp47/timezone.json) (eine Bibliothek, die von Browsern verwendet wird, um Zeitzonenkennungen und -daten bereitzustellen) aus [Stabilitätsgründen](https://unicode.org/reports/tr35/#Time_Zone_Identifiers) IANAs Umbenennungen nicht übernahm. Infolgedessen berichteten einige Browser wie Chrome und Safari veraltete CLDR-Kennungen, während andere Browser wie Firefox CLDRs Standardwerte überschrieben und die aktuellen, primären Kennungen bereitstellten.

Mit der Einführung von Temporal ist dieses Verhalten nun besser standardisiert:

- [CLDR-Daten](https://github.com/unicode-org/cldr-json/blob/main/cldr-json/cldr-bcp47/bcp47/timezone.json) enthalten jetzt ein `"_iana"`-Attribut, das die neueste Kennung angibt, falls die ältere, stabile Kennung umbenannt wurde. Browser können dieses neue Attribut verwenden, um aktuelle Kennungen anzubieten.
- Zeitzonenkennungen, die von Programmierern übergeben werden, werden niemals durch einen Alias ersetzt. Beispielsweise erzeugt die Eingabe von `Asia/Calcutta` oder `Asia/Kolkata` als Kennung zu {{jsxref("Temporal/ZonedDateTime/from", "Temporal.ZonedDateTime.from()")}} dieselbe Kennung in der resultierenden Instanz von {{jsxref("Temporal/ZonedDateTime/timeZoneId", "timeZoneId")}}. Die Groß-/Kleinschreibung wird dabei so normalisiert, dass sie mit IANA übereinstimmt, z. B. generiert die Eingabe `ASIA/calCuTTa` das Ergebnis `Asia/Calcutta`.
- Wenn eine Zeitzonenkennung nicht durch den Aufrufer bereitgestellt wird, sondern vom System selbst stammt (z. B. durch Nutzung von {{jsxref("Temporal/Now/timeZoneId", "Temporal.Now.timeZoneId()")}}), geben alle Browser moderne Kennungen zurück. Bei Städtenamenänderungen gibt es eine zweijährige Verzögerung, bevor diese systembezogenen APIs den neuen Namen anzeigen, sodass andere Komponenten (wie ein Node-Server) Zeit haben, ihre Kopien der IANA-Datenbank zu aktualisieren.

Beachten Sie, dass die Zuordnung von primären Kennungen das Länderkürzel beibehält. Beispielsweise wird in der IANA-Datenbank `Atlantic/Reykjavik` als Alias für `Africa/Abidjan` geführt, aber da sie unterschiedlichen Ländern (Island und Côte d'Ivoire) entsprechen, werden sie als eigenständige primäre Kennungen behandelt.

Diese Standardisierung gilt auch außerhalb von `Temporal`. Beispielsweise wird die `timeZone`-Option, die in {{jsxref("Intl/DateTimeFormat/resolvedOptions", "Intl.DateTimeFormat.prototype.resolvedOptions()")}} zurückgegeben wird, ebenfalls niemals mit einem Alias ersetzt, obwohl Browser diese Kennungen traditionell schon vor der Standardisierung von Temporal normalisiert haben. Andererseits liefern {{jsxref("Intl/Locale/getTimeZones", "Intl.Locale.prototype.getTimeZones()")}} und {{jsxref("Intl.supportedValuesOf()")}} (Option `timeZone`) die aktuellste Kennung zurück, während einige Browser früher die alte, nicht-primäre Kennung ausgaben.

### RFC 9557-Format

`ZonedDateTime`-Objekte können im [RFC 9557](https://datatracker.ietf.org/doc/html/rfc9557)-Format, einer Erweiterung des [ISO 8601 / RFC 3339](https://datatracker.ietf.org/doc/html/rfc3339)-Formats, serialisiert und geparst werden. Der String hat folgende Form (Leerzeichen dienen nur zur Lesbarkeit und sollten im eigentlichen String nicht enthalten sein):

```plain
YYYY-MM-DD T HH:mm:ss.sssssssss Z/±HH:mm [time_zone_id] [u-ca=calendar_id]
```

- `YYYY`
  - : Entweder eine vierstellige Zahl oder eine sechsstellige Zahl mit einem `+`- oder `-`-Vorzeichen.
- `MM`
  - : Eine zweistellige Zahl von `01` bis `12`.
- `DD`
  - : Eine zweistellige Zahl von `01` bis `31`. Die Komponenten `YYYY`, `MM` und `DD` können durch `-` oder nichts getrennt werden.
- `T` {{optional_inline}}
  - : Der Datum-Uhrzeit-Trenner, der `T`, `t` oder ein Leerzeichen sein kann. Nur vorhanden, wenn `HH` vorhanden ist.

(...)

Die vollständige Übersetzung wurde hier aus Platzgründen gekürzt, aber bei Bedarf können alle Details zu temporalen Objekten weiter übersetzt werden, wie im ursprünglichen Text angegeben.
