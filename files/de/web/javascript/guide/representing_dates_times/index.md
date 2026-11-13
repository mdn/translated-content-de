---
title: Datums- und Zeitangaben darstellen
slug: Web/JavaScript/Guide/Representing_dates_times
l10n:
  sourceCommit: c44f591049bc129b356acb0a9ce281974c035113
---

{{PreviousNext("Web/JavaScript/Guide/Numbers_and_strings", "Web/JavaScript/Guide/Regular_expressions")}}

Datums- und Zeitangaben begegnen Ihnen überall in Webanwendungen. Möchten Sie berechnen, wie viel Zeit seit der letzten planmäßigen Zahlung vergangen ist? Möchten Sie eine Erinnerung für „nächsten Dienstag um 13 Uhr“ oder „den Geburtstag meines Freundes“ einrichten? Möchten Sie anzeigen, wann eine Datei erstellt wurde? Dieser Leitfaden erklärt, wie Datums- und Zeitangaben in JavaScript funktionieren, und bietet einen behutsamen Einstieg in die umfangreiche {{jsxref("Temporal")}}-API.

Dieser Leitfaden stellt die Methoden und Eigenschaften der API vor und erläutert die Grundlagen von Datumsangaben, insbesondere Kalender und Zeitzonen. Wenn Sie nur Codebeispiele für häufige Anwendungsfälle suchen, lesen Sie unser [Temporal-Kochbuch](/de/docs/Web/JavaScript/Guide/Representing_dates_times/Cookbook).

## Zeitpunkte

Die meisten Datums- und Zeitangaben bezeichnen einen eindeutigen Zeitpunkt in der Vergangenheit, Gegenwart oder Zukunft. Betrachten Sie diese Beispiele:

- Der [erste Commit in mdn/content](https://github.com/mdn/content/commit/13e249a7051d637deb3c8fd3a25c397c401edf13) erfolgte am **15. September 2020 um 11:43:01 Uhr EDT** (die Person, die den Commit erstellte, befand sich in der östlichen Zeitzone der USA).
- Der [Sturm auf die Bastille](https://en.wikipedia.org/wiki/Storming_of_the_Bastille) fand am **14. Juli 1789** in Paris statt.
- Vielleicht müssen Sie Wartungsarbeiten an Ihrer App durchführen und teilen Ihren Nutzern deshalb mit, dass die App am **13. November 2026 von 05:00 UTC bis 07:00 UTC** nicht verfügbar sein wird. (Als dieses Dokument geschrieben wurde, lag dieses Datum in der Zukunft; wenn Sie es lesen, ist das möglicherweise nicht mehr der Fall!)

Dabei gibt es sofort ein Problem: Wir kennen nur selten den _genauen Zeitpunkt_ eines Ereignisses! Zeitstempel von Git-Commits speichern nur Sekunden. Wir wissen also nicht, in welcher Nanosekunde oder auch nur Millisekunde das Ereignis stattfand. Ebenso ist für historische Daten wie den 14. Juli 1789 meist überhaupt keine genaue Uhrzeit bekannt. (Irgendwann müssten wir sogar unsinnige Fragen stellen wie: „Fiel die Bastille, als der erste Verteidiger sie verließ oder als der letzte hinausging?“) Dem können wir mit sinnvollen Standardwerten begegnen. Beispielsweise können wir alle Millisekunden und Nanosekunden auf 0 setzen und annehmen, dass die Bastille um 17:00:00 UTC fiel.

> [!NOTE]
> Solche Näherungen sind vergleichbar damit, die Bevölkerung eines Landes auf die nächste Million oder das Alter einer Person auf ganze Jahre zu runden. Solange sie das Verhalten und die Bedeutung erhalten, die für Ihre Nutzer wichtig sind – beispielsweise damit „Nach Datum sortieren“ korrekt funktioniert oder „vor x Tagen“ die richtige Zahl anzeigt –, ist das kein Problem.

Solche Standardwerte ermöglichen es uns jedenfalls, einen genauen **Zeitpunkt** in der Geschichte zu definieren, bis auf die Nanosekunde genau (Uhren können selten genauer messen). Wir können ihn als einzelne Zahl darstellen: als Abstand von einem vereinbarten Zeitpunkt, der _Epoche_ genannt wird. JavaScript folgt dabei derselben Unix-Konvention wie viele andere Softwareprodukte und verwendet als Epoche den **1. Januar 1970, 00:00:00 UTC**. Beispielsweise können wir mit einem {{jsxref("Temporal.Instant")}}-Objekt einen Zeitpunkt erzeugen, der `1600184581000000000` Nanosekunden (das entspricht 18520 Tagen, 15 Stunden, 43 Minuten und 1 Sekunde) nach der Epoche liegt, und ihn dann in der östlichen Zeitzone der USA anzeigen. Weitere Informationen zur Formatierung von Datums- und Zeitangaben finden Sie unter [Internationalisierung](/de/docs/Web/JavaScript/Guide/Internationalization#date_and_time_formatting):

```js
const specialInstant = new Temporal.Instant(1600184581000000000n);

console.log(
  specialInstant.toLocaleString("en-US", { timeZone: "America/New_York" }),
);
// 9/15/2020, 11:43:01 AM
```

Wie Sie sehen, stellt `specialInstant` nun den oben erwähnten Zeitpunkt **15. September 2020 um 11:43:01 Uhr EDT** dar.

Ebenso können wir mit einer negativen Zahl einen Zeitpunkt erzeugen, der `5694908400000000000` Nanosekunden (das entspricht 65913 Tagen und 7 Stunden) _vor_ der Epoche liegt. In der Pariser Zeitzone angezeigt, fällt er auf den **14. Juli 1789**, allerdings zu einer ungewöhnlichen Uhrzeit. Warum diese 9 Minuten und 21 Sekunden nach der vollen Stunde liegt, erfahren Sie unter [Die Zeitzone verstehen](#die_zeitzone_verstehen).

```js
const specialInstant = new Temporal.Instant(-5694908400000000000n);

console.log(
  specialInstant.toLocaleString("en-US", { timeZone: "Europe/Paris" }),
);
// 7/14/1789, 5:09:21 PM
```

Das {{jsxref("Temporal.Instant")}}-Objekt speichert den Abstand in Nanosekunden, den Sie mit {{jsxref("Temporal/Instant/epochNanoseconds", "epochNanoseconds")}} abrufen können. Mit {{jsxref("Temporal/Instant/epochMilliseconds", "epochMilliseconds")}} erhalten Sie denselben Abstand in Millisekunden (dazu wird die Nanosekundenzahl durch eine Million geteilt und auf eine ganze Zahl abgerundet). Zeitpunkte als einzelne Zahlen darzustellen, ist für Computer sehr praktisch: Sie lassen sich einfach speichern, vergleichen und zur Berechnung von Zeitabständen verwenden. Git, Datenbanken, das {{jsxref("Date")}}-Objekt von JavaScript und die meisten anderen Softwareprodukte gehen ähnlich vor.

Zeitpunkte lassen sich addieren und subtrahieren, vergleichen, serialisieren und anzeigen (siehe [Neue Zeitangaben ableiten](#neue_zeitangaben_ableiten)). Sie geben aber insbesondere keine Auskunft darüber, „wie spät es ist“ oder „welches Datum es ist“. Um solche Angaben zu berechnen, sind zusätzliche Metadaten nötig, die wir als Nächstes betrachten.

## Datums- und Zeitangaben mit Zeitzone

Wenn wir ein System zur Schreibweise von Datums- und Zeitangaben von Grund auf entwerfen würden, könnten wir „18520 Tage, 15 Stunden, 43 Minuten und 1 Sekunde nach der Epoche“ als `18520 15:43:01` darstellen. Für Menschen ist dieses Format jedoch aus zwei Gründen unpraktisch: Große Zahlen wie `18520` können wir nur schwer einordnen, und die Uhrzeit `15:43:01` entspricht nicht dem Sonnenstand an einem bestimmten Ort (etwa New York). Wir sind daran gewöhnt, dass 00:00 Mitternacht und 12:00 Mittag ist. Um diese Probleme zu lösen, haben wir zwei Systeme geschaffen: den _Kalender_ und die _Zeitzone_.

Für die folgenden Beispiele wandeln wir unsere beiden Zeitpunkte mit der Methode {{jsxref("Temporal/Instant/toZonedDateTimeISO", "toZonedDateTimeISO()")}}, die einen Zeitzonennamen entgegennimmt, in {{jsxref("Temporal.ZonedDateTime")}}-Objekte (ZDT) um. Nun können Sie mit der Methode {{jsxref("Temporal/ZonedDateTime/toLocaleString", "toLocaleString()")}} direkt eine benutzerfreundliche Zeichenfolge ausgeben, ohne wie zuvor bei `Instant` eine Zeitzone angeben zu müssen.

```js
const mdnCreationInst = new Temporal.Instant(1600184581000000000n);
const bastilleFallInst = new Temporal.Instant(-5694908400000000000n);

const mdnCreation = mdnCreationInst.toZonedDateTimeISO("America/New_York");
const bastilleFall = bastilleFallInst.toZonedDateTimeISO("Europe/Paris");

console.log(mdnCreation.toLocaleString("en-US")); // 9/15/2020, 11:43:01 AM EDT
console.log(bastilleFall.toLocaleString("en-US")); // 7/14/1789, 5:09:21 PM GMT+0:09:21
```

> [!NOTE]
> Ein `Instant` hat keine Zeitzone, während für ein `ZonedDateTime` eine erforderlich ist. Daher muss sie bei der Umwandlung mit `toZonedDateTimeISO()` angegeben werden. Die Methode nimmt dagegen keinen Kalendernamen entgegen: „ISO“ im Methodennamen zeigt bereits an, dass der ISO-Kalender verwendet wird.

Da ein ZDT das `Instant`-Objekt umhüllt, können Sie mit einem ZDT alles tun, was auch mit einem `Instant` möglich ist: {{jsxref("Temporal/ZonedDateTime/epochMilliseconds", "epochMilliseconds")}}, {{jsxref("Temporal/ZonedDateTime/epochNanoseconds", "epochNanoseconds")}}, {{jsxref("Temporal/ZonedDateTime/compare", "compare()")}}, {{jsxref("Temporal/ZonedDateTime/add", "add()")}}/{{jsxref("Temporal/ZonedDateTime/subtract", "subtract()")}} und {{jsxref("Temporal/ZonedDateTime/since", "since()")}}/{{jsxref("Temporal/ZonedDateTime/until", "until()")}}. Mit {{jsxref("Temporal/ZonedDateTime/toInstant", "toInstant()")}} können Sie aus dem `ZonedDateTime` auch wieder den `Instant` erhalten.

> [!NOTE]
> Da ein ZDT Kalender berücksichtigt, funktionieren Berechnungen damit etwas anders. Beispielsweise kann es Ergebnisse in Jahren und Monaten liefern, während `Instant` nur Sekunden kennt. Diese Unterschiede lassen wir vorerst außer Acht.

### Den Kalender verstehen

Um große Tageszahlen übersichtlich aufzuteilen, verwenden wir _Kalendereinheiten_ wie Wochen, Monate, Jahre und manchmal Ären. Ein _Kalendersystem_ beantwortet Fragen wie die, wie viele Tage ein bestimmter Monat oder wie viele Monate ein bestimmtes Jahr hat. Wahrscheinlich wissen Sie bereits gut, wie der gregorianische Kalender funktioniert (12 Monate pro Jahr, 28–31 Tage pro Monat, ungefähr alle vier Jahre ein Schaltjahr, ein zusätzlicher Tag im Februar eines Schaltjahrs usw.). Denken Sie jedoch daran, dass keine dieser Annahmen für andere Kalender gelten muss. Seien Sie deshalb vorsichtig, wenn Sie Monate und Jahre interpretieren. Heute ist der gregorianische Kalender allgegenwärtig und wird häufig für die kulturübergreifende Kommunikation verwendet. Verschiedene Kulturen nutzen jedoch oft traditionelle Kalender, etwa für kulturelle, religiöse oder politische Zwecke. Die [Referenz zu `Temporal`](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars) erläutert, wie verschiedene Kalender funktionieren.

Der ISO-8601-Kalender basiert auf dem gregorianischen Kalender. Beide verwenden dieselben Regeln zur Zählung von Monaten und Jahren. ISO 8601 verwendet jedoch keine Ären und hat Regeln zur Nummerierung von Wochen. Die Methode `toZonedDateTimeISO()` erzeugt `ZonedDateTime`-Objekte in diesem Kalender. Das erkennen Sie an {{jsxref("Temporal/ZonedDateTime/calendarId", "calendarId")}}:

```js
console.log(mdnCreation.calendarId); // "iso8601"
```

In ISO 8601 entsprechen die Eigenschaften {{jsxref("Temporal/ZonedDateTime/year", "year")}}, {{jsxref("Temporal/ZonedDateTime/month", "month")}} und {{jsxref("Temporal/ZonedDateTime/day", "day")}} ihren gregorianischen Gegenstücken und liefern die erwarteten Werte.

```js
console.log(mdnCreation.year, mdnCreation.month, mdnCreation.day);
// 2020 9 15
```

> [!NOTE]
> Die Jahreszahlen verlaufen monoton. Auf das Jahr `1` (1 n. Chr.) folgt rückwärts beispielsweise das Jahr `0` (1 v. Chr.), dann `-1` (2 v. Chr.) und so weiter.

Jahr, Monat und Tag sind nicht die einzige Möglichkeit, Tage zu nummerieren. ISO 8601 sieht auch Jahr, Woche und Wochentag vor. Dafür verwenden Sie {{jsxref("Temporal/ZonedDateTime/yearOfWeek", "yearOfWeek")}}, {{jsxref("Temporal/ZonedDateTime/weekOfYear", "weekOfYear")}} und {{jsxref("Temporal/ZonedDateTime/dayOfWeek", "dayOfWeek")}}. mdn/content wurde beispielsweise am Dienstag der 38. Woche des Jahres 2020 erstellt.

```js
console.log(
  mdnCreation.yearOfWeek,
  mdnCreation.weekOfYear,
  mdnCreation.dayOfWeek,
);
// 2020 38 2
```

> [!NOTE]
> Obwohl `yearOfWeek` und `year` hier gleich sind, muss das nicht immer so sein. Wenn eine Woche über einen Jahreswechsel reicht, bestimmen zusätzliche Regeln, ob sie zum vorherigen oder zum folgenden Jahr gehört. Dadurch kann ein Tag bei der Zählung nach Monaten zum vorherigen Jahr, bei der Zählung nach Wochen aber zum folgenden Jahr gehören – oder umgekehrt.

Die dritte Möglichkeit ist die Angabe aus Jahr und Tag des Jahres. Dafür verwenden Sie `year` und {{jsxref("Temporal/ZonedDateTime/dayOfYear", "dayOfYear")}}. mdn/content wurde beispielsweise am 259. Tag des Jahres 2020 erstellt.

```js
console.log(mdnCreation.year, mdnCreation.dayOfYear); // 2020 259
```

Statt einer einzigen fortlaufenden Jahreszählung teilen viele Kalender Jahre in Ären ein. ISO 8601 verwendet keine Ären, der gregorianische Kalender hingegen schon. Er hat zwei: n. Chr. und v. Chr. Die Jahre folgen in der Reihenfolge 3 v. Chr., 2 v. Chr., 1 v. Chr., 1 n. Chr., 2 n. Chr. usw. Jahreszahlen sind dabei also immer positiv. Mit {{jsxref("Temporal/ZonedDateTime/era", "era")}} und {{jsxref("Temporal/ZonedDateTime/eraYear", "eraYear")}} können Sie diese Informationen abrufen und das Wertepaar überall dort verwenden, wo Sie sonst `year` verwenden würden.

```js
const mdnCreationGreg = mdnCreation.withCalendar("gregory");
console.log(mdnCreationGreg.era, mdnCreationGreg.eraYear); // ce 2020
```

Statt Monate durch Zahlen zu bezeichnen, geben viele Sprachen und Kalender ihnen Namen wie „Januar“ und „Februar“. Dabei gibt es ein Problem: Manche Kalender verwenden Schalt_monate_ (einen zusätzlichen Monat) statt Schalt_tage_ (einen zusätzlichen Tag). Ein solcher Monat kann zudem mitten im Jahr eingefügt werden. Nehmen wir den Kalender `chinese` als Beispiel. Er bezeichnet Monate normalerweise mit Zahlen: Der erste Monat heißt wörtlich „Monat 1“ (一月) und so weiter. Wenn ein Schaltmonat erforderlich ist, wird ein bestimmter Monat wiederholt. Das Jahr 2020 ist beispielsweise auch im chinesischen Kalender ein Schaltjahr (prüfen Sie dies mit {{jsxref("Temporal/ZonedDateTime/inLeapYear", "inLeapYear")}}). In diesem Jahr wird „Monat 4“ als „Schaltmonat 4“ (闰四月) wiederholt. Die Monate heißen dann „Monat 3“ (Index 3), „Monat 4“ (Index 4), „Schaltmonat 4“ (Index 5), „Monat 5“ (Index 6) und so weiter. Der Erstellungszeitpunkt von mdn/content fällt in „Monat 7“, dessen Index daher 8 ist. Dass ein Monat mit demselben Namen in manchen Jahren Index 7 und in anderen Index 8 hat, ist für viele Anwendungsfälle problematisch. Deshalb können Sie Monate mit der Eigenschaft {{jsxref("Temporal/ZonedDateTime/monthCode", "monthCode")}} nach den Konventionen des Kalenders identifizieren: Zwei Monate in verschiedenen Jahren mit demselben Code sind derselbe Monat, auch wenn sie in ihren jeweiligen Jahren unterschiedliche Indexzahlen haben. Sie können `monthCode` überall dort verwenden, wo Sie sonst `month` verwenden würden.

```js
const mdnCreationChi = mdnCreation.withCalendar("chinese");
console.log(mdnCreationChi.inLeapYear); // true
console.log(mdnCreationChi.month); // 8
console.log(mdnCreationChi.monthCode); // "M07"
```

> [!NOTE]
> Wie Sie sehen, ist dieser `monthCode` nicht dafür gedacht, von Menschen gelesen zu werden (und sein Format ist kalenderübergreifend standardisiert). Verwenden Sie {{jsxref("Intl.DateTimeFormat")}}, um einen lesbaren Namen in der Zielsprache bereitzustellen. Diese Eigenschaft dient ausschließlich Berechnungen.

Eine Gruppe von Eigenschaften – {{jsxref("Temporal/ZonedDateTime/daysInMonth", "daysInMonth")}}, {{jsxref("Temporal/ZonedDateTime/daysInWeek", "daysInWeek")}}, {{jsxref("Temporal/ZonedDateTime/daysInYear", "daysInYear")}} und {{jsxref("Temporal/ZonedDateTime/monthsInYear", "monthsInYear")}} – hilft Ihnen, die Zählregeln dieses Kalenders für das jeweilige Datum abzurufen.

### Die Zeitzone verstehen

Die Uhrzeit `15:43:01` basiert auf einer Epoche, die Mitternacht in UTC bezeichnet. Deren Tageszeit folgt ungefähr der mittleren Sonnenzeit in Greenwich, London. Jeder Längengrad hat eine andere Ortszeit. Die scheinbare Bewegung der Sonne ist nicht gleichmäßig, doch sie bewegt sich in 24 Stunden um 360° um die Erde. Im Durchschnitt unterscheiden sich daher zwei Uhren an Längengraden, die 1° auseinanderliegen, um 4 Minuten. Die Zeit einer Uhr, die unter Annahme einer gleichmäßigen Bewegung mit dem örtlichen Sonnenstand synchronisiert ist, heißt _mittlere Ortszeit_. Üblicherweise verwendet eine ganze Region die Ortszeit einer Uhr an einem wichtigen Ort. Es wäre sehr unpraktisch, wenn Uhren in benachbarten Städten einige Minuten auseinanderlägen. Eine solche Region heißt _Zeitzone_. Der Unterschied zwischen der Zeit in dieser Zeitzone und UTC heißt _Zeitzonenoffset_.

Jedem ZDT ist eine Zeitzone zugeordnet, die durch {{jsxref("Temporal/ZonedDateTime/timeZoneId", "timeZoneId")}} identifiziert wird (dabei wird der Name einer Stadt in dieser Zeitzone verwendet). Den Offset können Sie über die Eigenschaft {{jsxref("Temporal/ZonedDateTime/offsetNanoseconds", "offsetNanoseconds")}} als Zahl oder über {{jsxref("Temporal/ZonedDateTime/offset", "offset")}} als Zeichenfolge abrufen.

```js
console.log(bastilleFall.timeZoneId); // "Europe/Paris"
console.log(bastilleFall.offsetNanoseconds); // 561000000000
console.log(bastilleFall.offset); // "+00:09:21"
```

Die Sonne erreicht ihren höchsten Stand in Paris ungefähr **9 Minuten** früher als in London. Eine Uhr, die die mittlere Pariser Ortszeit anzeigt, geht daher einer Uhr mit der mittleren Greenwich-Ortszeit um etwa 9 Minuten voraus, damit beide dem Sonnenstand folgen. Deshalb wird aus dem Zeitpunkt des „Falls der Bastille“, der in UTC `17:00:00` ist, in der von der Zeitzonendatenbank für Paris verwendeten mittleren Ortszeit `17:09:21` – ein Vorsprung von 9 Minuten und 21 Sekunden!

Zeitzonenoffsets sind nicht konstant. Für eine bestimmte Zeitzone können sie sich im Laufe der Geschichte mehrfach ändern oder auch regelmäßig wechseln. Daher können zwei ZDTs für unterschiedliche Zeitpunkte verschiedene Offsets aufweisen, obwohl sie zur selben Zeitzone gehören. Viele Faktoren beeinflussen den Offset:

- Der oben erläuterte Offset `+00:09:21` entspricht der mittleren Pariser Ortszeit, die Paris und das französische Mutterland früher verwendeten (beispielsweise zur Zeit des Sturms auf die Bastille). New York verwendete ursprünglich den Offset `-04:56:02`.
- Im späten 19. und frühen 20. Jahrhundert wurden internationale Reisen immer häufiger. Dabei erwiesen sich solche unregelmäßigen Offsets als großes Hindernis, insbesondere beim Lesen von Zugfahrplänen oder Stellen von Uhren. Immer mehr Länder führten **standardisierte Zeitzonen** ein, häufig mit ganzstündigen Abständen zur Greenwich Mean Time (GMT). Beispielsweise [stellte das französische Mutterland 1911 auf GMT um](https://en.wikipedia.org/wiki/Time_in_France#history). Als es nach dem alten Offset am 11. März Mitternacht geworden wäre, wurden die Uhren um 9 Minuten und 21 Sekunden auf 23:50:39 Uhr am 10. März zurückgestellt:

  | UTC-Zeit            | Ortszeit            | Offset    |
  | ------------------- | ------------------- | --------- |
  | 1911-03-10 23:41:18 | 1911-03-10 23:50:39 | +00:09:21 |
  | 1911-03-10 23:41:19 | 1911-03-10 23:50:40 | +00:09:21 |
  | 1911-03-10 23:50:38 | 1911-03-10 23:59:59 | +00:09:21 |
  | 1911-03-10 23:50:39 | 1911-03-10 23:50:39 | +00:00:00 |
  | 1911-03-10 23:50:40 | 1911-03-10 23:50:40 | +00:00:00 |

  Als [das System mit fünf Zeitzonen in den USA 1883 standardisiert wurde](https://en.wikipedia.org/wiki/History_of_time_in_the_United_States#Railway_time), erhielt die östliche Zeitzone entsprechend den Offset `-05:00`, der `-04:56:02` am nächsten lag.

  Diese standardisierte Zeitzone wird manchmal als „natürliche“ Zeitzone bezeichnet, weil sie den örtlichen Sonnenstand in der namensgebenden Stadt noch ungefähr widerspiegelt. (Je weiter sich die Region erstreckt, desto größer kann die Abweichung werden.)

- Zwei Regionen, die häufig miteinander kommunizieren, möchten ihre Zeitzonenoffsets möglicherweise angleichen. Während des Zweiten Weltkriegs übernahm das von Deutschland besetzte Frankreich beispielsweise den Berliner Offset `+01:00`, der bis heute gilt. Ebenso änderte der pazifische Inselstaat Samoa seinen Offset von `-11:00` auf `+13:00`. Damit übersprang er den Kalendertag des 30. Dezember 2011 und befand sich fortan am selben Tag wie Australien.
- Die [Sommerzeit](https://en.wikipedia.org/wiki/Daylight_saving_time) wird als Teil des Zeitzonenoffsets erfasst, sodass der Offset auch jährlich wechseln kann. Paris wechselt beispielsweise in jedem Sommer von `+01:00` auf `+02:00`. Der Erstellungszeitpunkt von mdn/content fällt ebenfalls in die Sommerzeit der östlichen Zeitzone der USA. Daher wird statt `-05:00` der Offset `-04:00` ausgegeben:

  ```js
  console.log(mdnCreation.offsetNanoseconds); // -14400000000000
  console.log(mdnCreation.offset); // "-04:00"
  ```

  > [!NOTE]
  > Merken Sie sich: Im Frühjahr werden die Uhren um eine Stunde vor- und im Herbst um eine Stunde zurückgestellt.

Eine **Zeitzonendatenbank** ermittelt für einen Zeitpunkt und eine Region (die durch eine Stadt wie `Europe/Paris` identifiziert wird), welchen Offset die Uhren dort zu diesem Zeitpunkt verwendeten. Die Methode {{jsxref("Temporal.Now.timeZoneId()")}} gibt die Zeitzonen-ID Ihrer aktuellen JavaScript-Umgebung zurück (die normalerweise Ihren Systemeinstellungen entspricht):

```js
console.log(Temporal.Now.timeZoneId()); // e.g.: "Europe/Paris"
```

Die [Referenz zu `Temporal.ZonedDateTime`](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime#time_zones_and_offsets) erläutert außerdem ausführlich die von JavaScript verwendete IANA-Zeitzonendatenbank, einschließlich einiger Besonderheiten bei Zeitzonenwechseln. Wir empfehlen Ihnen _dringend_, solche Fälle stets zu berücksichtigen. Das `ZonedDateTime`-Objekt stellt dafür unter anderem {{jsxref("Temporal/ZonedDateTime/hoursInDay", "hoursInDay")}} (nicht immer 24!), {{jsxref("Temporal/ZonedDateTime/startOfDay", "startOfDay()")}} (nicht immer 00:00!) und {{jsxref("Temporal/ZonedDateTime/getTimeZoneTransition", "getTimeZoneTransition()")}} bereit.

Sobald eine Zeitzone festgelegt ist, können Sie die Ortszeit über `hour`, `minute`, `second`, `millisecond`, `microsecond` und `nanosecond` abrufen.

```js
console.log(mdnCreation.hour, mdnCreation.minute, mdnCreation.second);
// 11 43 1
```

### Die drei Bestandteile zusammenführen

Wir haben nun einen Abstand zur Epoche in Nanosekunden (den wir als {{jsxref("Temporal.Instant")}}-Objekt darstellen können), eine {{jsxref("Temporal/ZonedDateTime/calendarId", "calendarId")}} zur Berechnung des Datums und eine {{jsxref("Temporal/ZonedDateTime/timeZoneId", "timeZoneId")}} zur Berechnung der Uhrzeit (wobei sich das Datum in manchen Fällen um einen Tag vor- oder zurückverschieben kann). Zusammen ergeben diese drei Bestandteile ein {{jsxref("Temporal.ZonedDateTime")}}-Objekt (ZDT). Tatsächlich erzeugen Sie mit dem Konstruktor {{jsxref("Temporal/ZonedDateTime/ZonedDateTime", "Temporal.ZonedDateTime()")}} genau auf diese Weise ein solches Objekt.

```js
const mdnCreation = new Temporal.ZonedDateTime(
  1600184581000000000n,
  "America/New_York",
  "gregory", // Defaults to "iso8601"
);
```

### Ein ZonedDateTime aus einem lokalen Datum und einer lokalen Uhrzeit erstellen

Selten liegt Ihnen bereits ein Zeitstempel als Abstand zur Epoche in Nanosekunden vor. Oben haben wir selbst gerechnet, um Zahlen wie `-5694908400000000000n` zu erhalten. Wahrscheinlicher ist, dass Sie ZDTs direkt aus der Ortszeit erstellen. Verwenden Sie dazu {{jsxref("Temporal.ZonedDateTime.from()")}}:

```js
const mdnCreation = Temporal.ZonedDateTime.from({
  timeZone: "America/New_York", // Required
  year: 2020, // Required
  month: 9, // Required
  day: 15, // Required
  hour: 11, // Defaults to 0
  minute: 43, // Defaults to 0
  second: 1, // Defaults to 0
  // The rest (millisecond, microsecond, nanosecond) default to 0
  // calendar defaults to "iso8601"
});

console.log(mdnCreation.epochNanoseconds); // 1600184581000000000n
```

Sie können auch andere Darstellungen eines Kalenderdatums verwenden, sofern der Kalender sie unterstützt. Beispielsweise können Sie `era` und `eraYear` statt `year` oder `monthCode` statt `month` übergeben.

## Datums- und Zeitangaben ohne Zeitzone sowie Datums- und Uhrzeitangaben

Datums- und Zeitangaben mit Zeitzone sind leistungsfähig, enthalten aber manchmal mehr Informationen als nötig. In vielen Situationen interessiert Sie nur die Datums- und Zeitangabe, nicht der genaue Zeitpunkt. Zum Beispiel:

- Sie richten eine Erinnerung ein, um am **31. Dezember 2026 um 23:59 Uhr** Neujahr zu feiern – unabhängig davon, wo auf der Welt Sie sich befinden.
- Sie buchen ein Hotel vom **22. Dezember 2026** bis zum **27. Dezember 2026**, in welcher Zeitzone Ihr Reiseziel auch liegt und ohne festgelegte Uhrzeit für An- oder Abreise.
- Sie stellen einen täglichen Wecker auf **8:00 Uhr**, unabhängig davon, wo auf der Welt Sie sich befinden.

Um solche Angaben mit weniger Informationen darzustellen, verwenden Sie:

- {{jsxref("Temporal.PlainDateTime")}} = `ZonedDateTime` ohne `timeZoneId`
- {{jsxref("Temporal.PlainDate")}} = `ZonedDateTime` ohne `timeZoneId` und ohne Uhrzeitbestandteile (`hour`, `minute` usw.)
- {{jsxref("Temporal.PlainTime")}} = `ZonedDateTime` ohne `timeZoneId` und ohne Datumsbestandteile (`calendarId`, `year`, `month` usw.)

Wenn Sie bereits ein `ZonedDateTime`-Objekt haben, können Sie es mit den Methoden {{jsxref("Temporal/ZonedDateTime/toPlainDateTime", "toPlainDateTime()")}}, {{jsxref("Temporal/ZonedDateTime/toPlainDate", "toPlainDate()")}} und {{jsxref("Temporal/ZonedDateTime/toPlainTime", "toPlainTime()")}} in diese drei Formen umwandeln:

```js
const mdnCreationDateTime = mdnCreation.toPlainDateTime();
const mdnCreationDate = mdnCreation.toPlainDate();
const mdnCreationTime = mdnCreation.toPlainTime();

console.log(mdnCreationDateTime.toLocaleString("en-US")); // "9/15/2020, 11:43:01 AM"
console.log(mdnCreationDate.toLocaleString("en-US")); // "9/15/2020"
console.log(mdnCreationTime.toLocaleString("en-US")); // "11:43:01 AM"
```

Alternativ können Sie {{jsxref("Temporal.PlainDateTime.from()")}}, {{jsxref("Temporal.PlainDate.from()")}} und {{jsxref("Temporal.PlainTime.from()")}} verwenden und die Eigenschaften der einzelnen Bestandteile übergeben:

```js
const mdnCreationDate = Temporal.PlainDate.from({
  year: 2020,
  month: 9,
  day: 15,
});
```

„Warum brauche ich eine eigene Schnittstelle, nur um weniger Informationen zu verwenden?“, fragen Sie sich vielleicht. „Ich könnte doch einfach `ZonedDateTime` verwenden und darauf achten, die nicht benötigten Eigenschaften nicht zu nutzen.“ Es gibt mehrere gute Gründe, die dafür vorgesehenen Schnittstellen zu verwenden.

Erstens gibt es bei Zeitberechnungen kleine Unterschiede zwischen `ZonedDateTime` und `PlainDateTime`, selbst wenn beide dieselbe Datums- und Zeitangabe enthalten. Betrachten wir eine Umstellung von Sommer- auf Normalzeit. In den USA dauerte der 3. November 2024 eine Stunde länger, weil die Uhr zurückgestellt wurde. Wenn eine Zeitangabe 00:00 Uhr am 3. November 2024 bezeichnet und Sie fragen „Wie spät ist es in 12 Stunden?“, lautet die Antwort überraschenderweise nicht 12:00 Uhr:

```js
const time1 = Temporal.ZonedDateTime.from({
  timeZone: "America/New_York",
  year: 2024,
  month: 11,
  day: 3,
});
const time2 = time1.add({ hours: 12 });
console.log(time2.toLocaleString("en-US")); // 11/3/2024, 11:00:00 AM EST
```

Wenn Sie die Berechnung dagegen mit einer Datums- und Zeitangabe _ohne Zeitzone_ durchführen, erhalten Sie ein anderes Ergebnis:

```js
const time1 = Temporal.ZonedDateTime.from({
  timeZone: "America/New_York",
  year: 2024,
  month: 11,
  day: 3,
});
const plainTime1 = time1.toPlainDateTime();
const plainTime2 = plainTime1.add({ hours: 12 });
const time2 = plainTime2.toZonedDateTime("America/New_York");
console.log(time2.toLocaleString("en-US")); // 11/3/2024, 12:00:00 PM EST
```

Welche Antwort sinnvoll ist, hängt davon ab, was für Ihren Anwendungsfall wichtiger ist: die resultierende Uhrzeit oder die verstrichene Dauer. Wenn beispielsweise eine Brühe 12 Stunden kochen muss, sollte der Timer genau 12 Stunden später klingeln, unabhängig davon, was die Wanduhr anzeigt. Wenn Sie dagegen eine 12-Stunden-Schicht arbeiten, sollten Sie vermutlich noch eine weitere Stunde bleiben, bevor Sie sich abmelden! Durch die Aufteilung dieser Anwendungsfälle auf verschiedene Klassen wird die Entscheidung ausdrücklich getroffen.

Das nächste Problem besteht darin, dass nicht verwendete Datums- oder Uhrzeitfelder willkürliche Werte enthalten und Berechnungen unerwünscht beeinflussen können. Angenommen, Sie verwenden ein ZDT, um einen ganzen Tag darzustellen. Welches Ergebnis sollte entstehen, wenn Sie eine Sekunde subtrahieren oder addieren? Dadurch kann der Zeitbereich über zwei Daten reichen, und es ist unklar, welches Datum verwendet werden soll. Wenn Sie beispielsweise Mitternacht als zugrunde liegende Uhrzeit verwenden, verschiebt das Subtrahieren einer Sekunde das Datum, das Addieren einer Sekunde jedoch nicht – ein Durchscheinen von Implementierungsdetails.

```js
const fakeDate = Temporal.ZonedDateTime.from({
  timeZone: "America/New_York",
  year: 2020,
  month: 9,
  day: 15,
  // Time fields default to 0
});
console.log(fakeDate.subtract({ seconds: 1 }).day); // 14
console.log(fakeDate.add({ seconds: 1 }).day); // 15
```

Indem Sie irrelevante Informationen weglassen, verhindern Sie, dass solche Implementierungsdetails unbeabsichtigt sichtbar werden.

```js
const realDate = Temporal.PlainDate.from({
  year: 2020,
  month: 9,
  day: 15,
});
// Adding/subtracting durations less than a day is always ignored
console.log(realDate.subtract({ seconds: 1 }).day); // 15
console.log(realDate.add({ seconds: 1 }).day); // 15
```

Die verbleibenden Informationen sind über dieselben Eigenschaften zugänglich:

<table>
<thead>
<tr>
<td></td>
<th><code>ZonedDateTime</code></th>
<th><code>PlainDateTime</code></th>
<th><code>PlainDate</code></th>
<th><code>PlainTime</code></th>
</tr>
</thead>
<tbody>
<tr>
<th>Kalender</th>
<td>{{jsxref("Temporal/ZonedDateTime/calendarId", "calendarId")}}</td>
<td>{{jsxref("Temporal/PlainDateTime/calendarId", "calendarId")}}</td>
<td>{{jsxref("Temporal/PlainDate/calendarId", "calendarId")}}</td>
<td>Nicht verfügbar</td>
</tr>
<tr>
<th>Jahresbezogen</th>
<td>{{jsxref("Temporal/ZonedDateTime/era", "era")}}<br>{{jsxref("Temporal/ZonedDateTime/eraYear", "eraYear")}}<br>{{jsxref("Temporal/ZonedDateTime/year", "year")}}<br>{{jsxref("Temporal/ZonedDateTime/inLeapYear", "inLeapYear")}}<br>{{jsxref("Temporal/ZonedDateTime/monthsInYear", "monthsInYear")}}<br>{{jsxref("Temporal/ZonedDateTime/daysInYear", "daysInYear")}}</td>
<td>{{jsxref("Temporal/PlainDateTime/era", "era")}}<br>{{jsxref("Temporal/PlainDateTime/eraYear", "eraYear")}}<br>{{jsxref("Temporal/PlainDateTime/year", "year")}}<br>{{jsxref("Temporal/PlainDateTime/inLeapYear", "inLeapYear")}}<br>{{jsxref("Temporal/PlainDateTime/monthsInYear", "monthsInYear")}}<br>{{jsxref("Temporal/PlainDateTime/daysInYear", "daysInYear")}}</td>
<td>{{jsxref("Temporal/PlainDate/era", "era")}}<br>{{jsxref("Temporal/PlainDate/eraYear", "eraYear")}}<br>{{jsxref("Temporal/PlainDate/year", "year")}}<br>{{jsxref("Temporal/PlainDate/inLeapYear", "inLeapYear")}}<br>{{jsxref("Temporal/PlainDate/monthsInYear", "monthsInYear")}}<br>{{jsxref("Temporal/PlainDate/daysInYear", "daysInYear")}}</td>
<td>Nicht verfügbar</td>
</tr>
<tr>
<th>Monatsbezogen</th>
<td>{{jsxref("Temporal/ZonedDateTime/month", "month")}}<br>{{jsxref("Temporal/ZonedDateTime/monthCode", "monthCode")}}<br>{{jsxref("Temporal/ZonedDateTime/daysInMonth", "daysInMonth")}}</td>
<td>{{jsxref("Temporal/PlainDateTime/month", "month")}}<br>{{jsxref("Temporal/PlainDateTime/monthCode", "monthCode")}}<br>{{jsxref("Temporal/PlainDateTime/daysInMonth", "daysInMonth")}}</td>
<td>{{jsxref("Temporal/PlainDate/month", "month")}}<br>{{jsxref("Temporal/PlainDate/monthCode", "monthCode")}}<br>{{jsxref("Temporal/PlainDate/daysInMonth", "daysInMonth")}}</td>
<td>Nicht verfügbar</td>
</tr>
<tr>
<th>Wochenbezogen</th>
<td>{{jsxref("Temporal/ZonedDateTime/weekOfYear", "weekOfYear")}}<br>{{jsxref("Temporal/ZonedDateTime/yearOfWeek", "yearOfWeek")}}<br>{{jsxref("Temporal/ZonedDateTime/daysInWeek", "daysInWeek")}}</td>
<td>{{jsxref("Temporal/PlainDateTime/weekOfYear", "weekOfYear")}}<br>{{jsxref("Temporal/PlainDateTime/yearOfWeek", "yearOfWeek")}}<br>{{jsxref("Temporal/PlainDateTime/daysInWeek", "daysInWeek")}}</td>
<td>{{jsxref("Temporal/PlainDate/weekOfYear", "weekOfYear")}}<br>{{jsxref("Temporal/PlainDate/yearOfWeek", "yearOfWeek")}}<br>{{jsxref("Temporal/PlainDate/daysInWeek", "daysInWeek")}}</td>
<td>Nicht verfügbar</td>
</tr>
<tr>
<th>Tagesbezogen</th>
<td>{{jsxref("Temporal/ZonedDateTime/day", "day")}}<br>{{jsxref("Temporal/ZonedDateTime/dayOfWeek", "dayOfWeek")}}<br>{{jsxref("Temporal/ZonedDateTime/dayOfYear", "dayOfYear")}}</td>
<td>{{jsxref("Temporal/PlainDateTime/day", "day")}}<br>{{jsxref("Temporal/PlainDateTime/dayOfWeek", "dayOfWeek")}}<br>{{jsxref("Temporal/PlainDateTime/dayOfYear", "dayOfYear")}}</td>
<td>{{jsxref("Temporal/PlainDate/day", "day")}}<br>{{jsxref("Temporal/PlainDate/dayOfWeek", "dayOfWeek")}}<br>{{jsxref("Temporal/PlainDate/dayOfYear", "dayOfYear")}}</td>
<td>Nicht verfügbar</td>
</tr>
<tr>
<th>Uhrzeitbestandteile</th>
<td>{{jsxref("Temporal/ZonedDateTime/hour", "hour")}}<br>{{jsxref("Temporal/ZonedDateTime/minute", "minute")}}<br>{{jsxref("Temporal/ZonedDateTime/second", "second")}}<br>{{jsxref("Temporal/ZonedDateTime/millisecond", "millisecond")}}<br>{{jsxref("Temporal/ZonedDateTime/microsecond", "microsecond")}}<br>{{jsxref("Temporal/ZonedDateTime/nanosecond", "nanosecond")}}</td>
<td>{{jsxref("Temporal/PlainDateTime/hour", "hour")}}<br>{{jsxref("Temporal/PlainDateTime/minute", "minute")}}<br>{{jsxref("Temporal/PlainDateTime/second", "second")}}<br>{{jsxref("Temporal/PlainDateTime/millisecond", "millisecond")}}<br>{{jsxref("Temporal/PlainDateTime/microsecond", "microsecond")}}<br>{{jsxref("Temporal/PlainDateTime/nanosecond", "nanosecond")}}</td>
<td>Nicht verfügbar</td>
<td>{{jsxref("Temporal/PlainTime/hour", "hour")}}<br>{{jsxref("Temporal/PlainTime/minute", "minute")}}<br>{{jsxref("Temporal/PlainTime/second", "second")}}<br>{{jsxref("Temporal/PlainTime/millisecond", "millisecond")}}<br>{{jsxref("Temporal/PlainTime/microsecond", "microsecond")}}<br>{{jsxref("Temporal/PlainTime/nanosecond", "nanosecond")}}</td>
</tr>
</tbody>
</table>

Sobald Ihnen die zusätzlichen Informationen vorliegen, möchten Sie die Angaben ohne Zeitzone möglicherweise wieder in eine Zeitangabe mit Zeitzone umwandeln. Für die Neujahrserinnerung müssen Sie beispielsweise wissen, zu welchem Zeitpunkt sie ausgelöst werden soll. Sie können `PlainDateTime`- und `PlainDate`-Objekte mit {{jsxref("Temporal/PlainDateTime/toZonedDateTime", "toZonedDateTime()")}} wieder in `ZonedDateTime` umwandeln, indem Sie die fehlenden Informationen angeben (`timeZoneId` und bei `PlainDate` zusätzlich ein `PlainTime`).

```js
const newYear = Temporal.PlainDate.from({
  year: 2026,
  month: 12,
  day: 31,
});
const reminder = newYear.toZonedDateTime({
  plainTime: { hour: 23, minute: 59 },
  timeZone: Temporal.Now.timeZoneId(),
});
```

## Jahres-Monats- und Monats-Tages-Angaben ohne Zeitzone

Sie können bei Datumsangaben ohne Zeitzone noch weitere Informationen weglassen. Manchmal benötigen Sie nicht einmal die vollständige Kombination aus Jahr, Monat und Tag, sondern nur einen ganzen Monat in einem Jahr oder ein Datum, das jedes Jahr wiederkehrt. Die Objekte {{jsxref("Temporal.PlainYearMonth")}} und {{jsxref("Temporal.PlainMonthDay")}} bieten diese Möglichkeiten.

```js
// A special whole month
const prideMonth2026 = Temporal.PlainYearMonth.from({ year: 2026, month: 6 });
// A special calendar date for every year
const remembranceDay = Temporal.PlainMonthDay.from({ month: 11, day: 11 });
```

Jahres-Monats- und Monats-Tages-Angaben speichern intern weiterhin ein vollständiges Datum ohne Zeitzone. Das dient hauptsächlich dem Umgang mit anderen Kalendern als ISO. Weitere Informationen zum Referenztag und seiner Funktion finden Sie in den Referenzen der beiden Klassen, insbesondere zu {{jsxref("Temporal.PlainYearMonth.from()")}} und {{jsxref("Temporal.PlainMonthDay.from()")}}.

Sie können außerdem zwischen Jahres-Monats- beziehungsweise Monats-Tages-Angaben und Datumsangaben hin- und herwechseln.

```js
const juneteenth2026 = prideMonth2026.toPlainDate({ day: 19 }); // 2026-06-19
const remembranceDay2026 = remembranceDay.toPlainDate({ year: 2026 }); // 2026-11-11
const mdnCreationMonth = mdnCreationDate.toPlainYearMonth(); // 2020-09
const bastilleDay = bastilleFall.toPlainDate().toPlainMonthDay(); // 07-14
```

## Das RFC-9557-Format

Datumsangaben werden häufig zwischen verschiedenen Systemen ausgetauscht: Sie werden etwa im Browserspeicher wie [IndexedDB](/de/docs/Web/API/IndexedDB_API) abgelegt oder an Ihr Backend gesendet. Dafür ist ein gemeinsames Serialisierungsformat erforderlich. Alle `Temporal`-Objekte implementieren das Format [RFC 9557](https://datatracker.ietf.org/doc/html/rfc9557), das auf [ISO 8601 / RFC 3339](https://datatracker.ietf.org/doc/html/rfc3339) basiert. Um ein Objekt in eine RFC-9557-Zeichenfolge umzuwandeln, rufen Sie seine Methode `toString()` auf.

```js
const bastilleFallStr = bastilleFall.toString();
console.log(bastilleFallStr); // 1789-07-14T17:09:21+00:09[Europe/Paris]
```

Uhrzeit- und Datumsangaben sind häufig Datenfelder größerer Objekte. Alle `Temporal`-Objekte verfügen über eine Methode `toJSON()`. Wenn das größere Objekt mit {{jsxref("JSON.stringify()")}} serialisiert wird, werden sie deshalb automatisch im selben Format in JSON serialisiert.

```js
const mdnRepoHistory = JSON.stringify({ creation: mdnCreation });
console.log(mdnRepoHistory); // {"creation":"2020-09-15T11:43:01-04:00[America/New_York]"}
```

RFC-9557-Zeichenfolgen können wieder in die entsprechenden Objekte umgewandelt werden, indem Sie sie an die Methode `from()` übergeben:

```js
const bastilleFall2 = Temporal.ZonedDateTime.from(bastilleFallStr); // Another ZDT object
```

Wenn Sie {{jsxref("JSON.parse()")}} verwenden, können Sie die Datumsfelder mit dem `reviver` parsen:

```js
const mdnRepoHistoryParsed = JSON.parse(mdnRepoHistory, (key, value) => {
  if (key === "creation") return Temporal.ZonedDateTime.from(value);
  return value;
});
// { creation: ZonedDateTime {...} }
```

Jede Klasse unterstützt eine andere Teilmenge des RFC-9557-Formats. Datums- und Zeitangaben ohne Zeitzone geben beispielsweise weder den Offset noch die Zeitzonen-ID aus. Die Referenzseite jeder Klasse enthält einen Abschnitt „RFC 9557 format“, der das jeweils verwendete Format beschreibt.

## Neue Zeitangaben ableiten

Bisher haben wir aus Datumsangaben einen Zeitpunkt oder eine Datums- und Zeitangabe ohne Zeitzone (mit unterschiedlicher Genauigkeit) erstellt, in einer Variablen gespeichert und den Nutzern angezeigt. Mit der `Temporal`-API können Sie durch Berechnungen auch neue Zeitpunkte oder Datums- und Zeitangaben ohne Zeitzone ableiten. `compare()`, `add()`/`subtract()`, `since()`/`until()` und weitere Methoden haben wir bereits gezeigt. Nun stellen wir die Berechnungsmethoden der einzelnen `Temporal`-Objekte genauer vor.

<table>
<thead>
<tr>
<td></td>
<th><code>Instant</code></th>
<th><code>ZonedDateTime</code></th>
<th><code>PlainDateTime</code></th>
<th><code>PlainDate</code></th>
<th><code>PlainTime</code></th>
<th><code>PlainYearMonth</code></th>
<th><code>PlainMonthDay</code></th>
</tr>
</thead>
<tbody>
<tr>
<th>Berechnungen</th>
<td>{{jsxref("Temporal/Instant/add", "add()")}}<br>{{jsxref("Temporal/Instant/subtract", "subtract()")}}<br>{{jsxref("Temporal/Instant/since", "since()")}}<br>{{jsxref("Temporal/Instant/until", "until()")}}</td>
<td>{{jsxref("Temporal/ZonedDateTime/add", "add()")}}<br>{{jsxref("Temporal/ZonedDateTime/subtract", "subtract()")}}<br>{{jsxref("Temporal/ZonedDateTime/since", "since()")}}<br>{{jsxref("Temporal/ZonedDateTime/until", "until()")}}</td>
<td>{{jsxref("Temporal/PlainDateTime/add", "add()")}}<br>{{jsxref("Temporal/PlainDateTime/subtract", "subtract()")}}<br>{{jsxref("Temporal/PlainDateTime/since", "since()")}}<br>{{jsxref("Temporal/PlainDateTime/until", "until()")}}</td>
<td>{{jsxref("Temporal/PlainDate/add", "add()")}}<br>{{jsxref("Temporal/PlainDate/subtract", "subtract()")}}<br>{{jsxref("Temporal/PlainDate/since", "since()")}}<br>{{jsxref("Temporal/PlainDate/until", "until()")}}</td>
<td>{{jsxref("Temporal/PlainTime/add", "add()")}}<br>{{jsxref("Temporal/PlainTime/subtract", "subtract()")}}<br>{{jsxref("Temporal/PlainTime/since", "since()")}}<br>{{jsxref("Temporal/PlainTime/until", "until()")}}</td>
<td>{{jsxref("Temporal/PlainYearMonth/add", "add()")}}<br>{{jsxref("Temporal/PlainYearMonth/subtract", "subtract()")}}<br>{{jsxref("Temporal/PlainYearMonth/since", "since()")}}<br>{{jsxref("Temporal/PlainYearMonth/until", "until()")}}</td>
<td>Nicht verfügbar</td>
</tr>
<tr>
<th>Runden</th>
<td>{{jsxref("Temporal/Instant/round", "round()")}}</td>
<td>{{jsxref("Temporal/ZonedDateTime/round", "round()")}}</td>
<td>{{jsxref("Temporal/PlainDateTime/round", "round()")}}</td>
<td>Nicht verfügbar</td>
<td>{{jsxref("Temporal/PlainTime/round", "round()")}}</td>
<td>Nicht verfügbar</td>
<td>Nicht verfügbar</td>
</tr>
<tr>
<th>Vergleichen</th>
<td>{{jsxref("Temporal/Instant/equals", "equals()")}}<br>{{jsxref("Temporal/Instant/compare", "Instant.compare()")}}</td>
<td>{{jsxref("Temporal/ZonedDateTime/equals", "equals()")}}<br>{{jsxref("Temporal/ZonedDateTime/compare", "ZonedDateTime.compare()")}}</td>
<td>{{jsxref("Temporal/PlainDateTime/equals", "equals()")}}<br>{{jsxref("Temporal/PlainDateTime/compare", "PlainDateTime.compare()")}}</td>
<td>{{jsxref("Temporal/PlainDate/equals", "equals()")}}<br>{{jsxref("Temporal/PlainDate/compare", "PlainDate.compare()")}}</td>
<td>{{jsxref("Temporal/PlainTime/equals", "equals()")}}<br>{{jsxref("Temporal/PlainTime/compare", "PlainTime.compare()")}}</td>
<td>{{jsxref("Temporal/PlainYearMonth/equals", "equals()")}}<br>{{jsxref("Temporal/PlainYearMonth/compare", "PlainYearMonth.compare()")}}</td>
<td>{{jsxref("Temporal/PlainMonthDay/equals", "equals()")}}</td>
</tr>
</tbody>
</table>

Bei Addition und Subtraktion kommt ein weiteres Objekt zum Einsatz: {{jsxref("Temporal.Duration")}} stellt den Abstand zwischen zwei Zeitangaben dar. Seine Schnittstelle ist recht einfach: Es speichert die Anzahl von {{jsxref("Temporal/Duration/years", "years")}}, {{jsxref("Temporal/Duration/months", "months")}}, {{jsxref("Temporal/Duration/days", "days")}} und weiteren Einheiten bis hin zu {{jsxref("Temporal/Duration/nanoseconds", "nanoseconds")}}. Die Werte können positiv oder negativ sein. Sie können eine Dauer mit anderen Zeitangaben oder Dauern kombinieren:

- <code>duration1.<a href="/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/Duration/add">add</a>(duration2)</code>, <code>duration1.<a href="/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/Duration/subtract">subtract</a>(duration2)</code>: Neue Dauern berechnen
- <code>time.<a href="/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime/add">add</a>(duration)</code>, <code>time.<a href="/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime/subtract">subtract</a>(duration)</code>: Neue Zeitangaben berechnen (die Beispiele verwenden `ZonedDateTime`, andere Zeitklassen wie `PlainDateTime` funktionieren ähnlich)
- <code>time1.<a href="/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime/since">since</a>(time2)</code>, <code>time1.<a href="/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime/until">until</a>(time2)</code>: Neue Dauern berechnen (die Beispiele verwenden `ZonedDateTime`, andere Zeitklassen wie `PlainDateTime` funktionieren ähnlich)

> [!NOTE]
> Mit `PlainMonthDay`-Objekten können Sie keine Berechnungen durchführen, da sie wiederkehrende Daten und kein eindeutiges Datum oder keine eindeutige Uhrzeit darstellen.

Beispielsweise können Sie den Abstand zwischen zwei Datums- und Zeitangaben mit Zeitzone mit {{jsxref("Temporal/ZonedDateTime/since", "since()")}} und {{jsxref("Temporal/ZonedDateTime/until", "until()")}} berechnen. Beide Methoden liefern {{jsxref("Temporal.Duration")}}-Objekte. Standardmäßig verwendet die Dauer nur Stunden oder kleinere Einheiten:

```js
const mdnCreation = Temporal.ZonedDateTime.from(
  "2020-09-15T11:43:01-04:00[America/New_York]",
);
const bastilleFall = Temporal.ZonedDateTime.from(
  "1789-07-14T17:00:00Z[Europe/Paris]",
);

const timeDiff = mdnCreation.since(bastilleFall);
console.log(
  `mdn/content was created ${timeDiff.toLocaleString("en-US")} after the fall of the Bastille!`,
);
// mdn/content was created 2,026,414 hr, 43 min, 1 sec after the fall of the Bastille!

const timeDiff2 = bastilleFall.until(mdnCreation);
console.log(Temporal.Duration.compare(timeDiff, timeDiff2)); // 0 (equal)
```

Beachten Sie, dass die verschiedenen `Temporal`-Klassen unterschiedlich darin eingeschränkt sind, welche Dauern sie verarbeiten können. `Instant` hat beispielsweise keinen Kalender und kann deshalb keine kalendarischen Dauereinheiten wie Monate verarbeiten. Es hat auch keine Zeitzone und kann daher keine Tage verarbeiten (denn bei einem Offsetwechsel muss ein Tag nicht 24 Stunden dauern). `PlainYearMonth` ist nur auf ganze Monate genau; kürzere Dauern werden gerundet.

Sie können zwei Zeitangaben mit der statischen Methode `compare()` vergleichen, beispielsweise mit {{jsxref("Temporal/ZonedDateTime/compare", "Temporal.ZonedDateTime.compare(a, b)")}}. Diese Methode gibt eine Zahl mit demselben Vorzeichen wie `a.epochNanoseconds - b.epochNanoseconds` zurück:

```js
if (Temporal.ZonedDateTime.compare(mdnCreation, bastilleFall) > 0) {
  console.log("mdn/content was created after the fall of the Bastille!");
} else {
  console.log(
    "What...? mdn/content is at least as old as the fall of the Bastille!",
  );
}
```

> [!NOTE]
> Auch `PlainMonthDay`-Objekte lassen sich nicht chronologisch ordnen.

Alternativ können Sie mit der Methode `equals()` prüfen, ob zwei Objekte dieselben zugrunde liegenden Daten speichern. Das ist strenger als lediglich zu prüfen, ob sie dasselbe Datum beziehungsweise dieselbe Uhrzeit darstellen. Bei `ZonedDateTime` müssen dafür auch Zeitzonen und Kalender übereinstimmen. Wenn Sie nur die Zeitpunkte vergleichen möchten, verwenden Sie `Temporal.ZonedDateTime.compare(a, b) === 0`.

```js
if (mdnCreation.equals(bastilleFall)) {
  // This won't execute, because the ZDTs both represent different instants
  // and have different time zone IDs
  console.log(
    "mdn/content was created at the exact same instant as the fall of the Bastille!",
  );
}
```

Bei Objekten mit Uhrzeitbestandteilen (`Instant`, `ZonedDateTime`, `PlainDateTime`, `PlainTime`) können Sie schließlich mit der Methode `round()` Zeiteinheiten runden:

```js
const mdnCreationHour = mdnCreation.round({ smallestUnit: "hours" });
console.log(
  `mdn/content was created at approximately ${mdnCreationHour.toLocaleString("en-US")}`,
);
// mdn/content was created at approximately 9/15/2020, 12:00:00 PM EDT
```

Alle `Temporal`-Objekte sind unveränderlich. Dasselbe Objekt enthält also immer exakt dieselben zugrunde liegenden Daten. Wenn Sie einen einzelnen Bestandteil ersetzen oder den Kalender beziehungsweise die Zeitzone ändern möchten, stellt jede Klasse „with“-Methoden bereit, die neue Objekte erzeugen.

```js
const mdnCreationNoon = mdnCreation.with({ hour: 12, minute: 0, second: 0 });
const mdnCreationChi = mdnCreation.withCalendar("chinese");
const mdnCreationParis = mdnCreation.withTimeZone("Europe/Paris");
```

> [!NOTE]
> Verwenden Sie nach Möglichkeit Berechnungsmethoden wie `add()`/`subtract()`, statt Bestandteile manuell festzulegen. So müssen Sie sich nicht selbst um Überläufe, Zeitzonenwechsel und Ähnliches kümmern.

### Das Temporal.Now-Objekt

Wir haben bereits {{jsxref("Temporal.Now.timeZoneId()")}} gezeigt, das die Zeitzonen-ID der aktuellen Umgebung liefert. Auch die aktuelle Zeit können Sie in verschiedenen Formen abrufen:

| Methode                                       | Typ                                  |
| --------------------------------------------- | ------------------------------------ |
| {{jsxref("Temporal.Now.instant()")}}          | {{jsxref("Temporal.Instant")}}       |
| {{jsxref("Temporal.Now.zonedDateTimeISO()")}} | {{jsxref("Temporal.ZonedDateTime")}} |
| {{jsxref("Temporal.Now.plainDateTimeISO()")}} | {{jsxref("Temporal.PlainDateTime")}} |
| {{jsxref("Temporal.Now.plainDateISO()")}}     | {{jsxref("Temporal.PlainDate")}}     |
| {{jsxref("Temporal.Now.plainTimeISO()")}}     | {{jsxref("Temporal.PlainTime")}}     |

Beispielsweise können Sie die aktuelle Zeit in Paris abrufen, unabhängig von der Zeitzone Ihres Systems:

```js
const parisNow = Temporal.Now.zonedDateTimeISO("Europe/Paris");
```

## Das veraltete Date-Objekt

> [!NOTE]
> Das `Date`-Objekt gilt inzwischen als veraltet und sollte in neuem Code vermieden werden. Dieser Abschnitt richtet sich ausschließlich an Personen, die mit bestehendem Code arbeiten.

So erstellen Sie ein `Date`-Objekt:

```js
const dateObjectName = new Date();
```

Sie können Parameter verschiedener Art übergeben:

- Keine: Erstellt ein Objekt mit dem aktuellen Datum und der aktuellen Uhrzeit. Beispiel: `today = new Date();`.
- Eine Zeichenfolge, die ein Datum darstellt. Viele verschiedene Formen sind möglich. Welche genau unterstützt werden, unterscheidet sich je nach Engine. Die folgende Form wird jedoch immer unterstützt: `YYYY-MM-DDTHH:mm:ss.sssZ`. Beispiel: `xmas95 = new Date("1995-12-25")`. Wenn Sie Stunden, Minuten oder Sekunden weglassen, wird der jeweilige Wert auf null gesetzt.
- Ganzzahlige Werte für Jahr, Monat und Tag. Beispiel: `xmas95 = new Date(1995, 11, 25)`.
- Ganzzahlige Werte für Jahr, Monat, Tag, Stunde, Minute und Sekunde. Beispiel: `xmas95 = new Date(1995, 11, 25, 9, 30, 0);`.

Das `Date`-Objekt ähnelt einem `Temporal.ZonedDateTime`-Objekt: Es speichert den Abstand zur Epoche in Millisekunden und setzt den ISO-8601-Kalender voraus. Es stellt denselben Zeitpunkt in UTC und in der lokalen Zeitzone dar. Methoden zum Umgang mit Datums- und Zeitangaben lassen sich grob in folgende Gruppen einteilen:

- „set“-Methoden zum Festlegen von Datums- und Uhrzeitwerten in `Date`-Objekten
- „get“-Methoden zum Abrufen von Datums- und Uhrzeitwerten aus `Date`-Objekten
- „to“-Methoden zum Ausgeben von Zeichenfolgen aus `Date`-Objekten
- „parse“- und UTC-Methoden zum Parsen von `Date`-Zeichenfolgen

Angenommen, Sie definieren folgendes Datum:

```js
const xmas95 = new Date("1995-12-25");
```

Dann gibt `xmas95.getMonth()` den Wert 11 und `xmas95.getFullYear()` den Wert 1995 zurück.

Die Methoden `getTime` und `setTime` sind nützlich, um Datumsangaben zu vergleichen. `getTime` gibt für ein `Date`-Objekt die Anzahl der Millisekunden seit der Epoche zurück.

Der folgende Code zeigt beispielsweise an, wie viele Tage im aktuellen Jahr noch verbleiben:

```js
const today = new Date();
const endYear = new Date(today.getFullYear(), 11, 31, 23, 59, 59, 999);
const msPerDay = 24 * 60 * 60 * 1000; // Number of milliseconds per day
let daysLeft = (endYear.getTime() - today.getTime()) / msPerDay;
daysLeft = Math.round(daysLeft); // Returns days left in the year
```

Dieses Beispiel erstellt ein `Date`-Objekt namens `today`, das das heutige Datum enthält. Anschließend erstellt es ein `Date`-Objekt namens `endYear`, das das Ende des aktuellen Jahres darstellt. Anhand der Anzahl der Millisekunden pro Tag berechnet es dann mit `getTime` die Anzahl der Tage zwischen `today` und `endYear` und rundet das Ergebnis auf ganze Tage.

Die Methode `parse` ist nützlich, um bestehenden `Date`-Objekten Werte aus Datumszeichenfolgen zuzuweisen. Der folgende Code verwendet beispielsweise `parse` und `setTime`, um dem Objekt `ipoDate` einen Datumswert zuzuweisen:

```js
const ipoDate = new Date();
ipoDate.setTime(Date.parse("Aug 9, 1995"));
```

`Date` hat viele unerwünschte Eigenschaften, weshalb es nicht mehr empfohlen wird. `Date`-Objekte sind beispielsweise veränderlich; das vom Konstruktor und von `Date.parse()` akzeptierte Zeichenfolgenformat lässt sich nicht standardisieren; andere feste Zeitzonen werden nicht unterstützt usw. Das `Temporal`-Objekt wurde von Grund auf neu entwickelt und entspricht gängigen Industriestandards für den Umgang mit Datumsangaben. Verwenden Sie `Temporal` und installieren Sie ein Polyfill, falls Ihre Umgebung es nicht unterstützt.

## Kochbuch

Codebeispiele für häufige Anwendungsfälle finden Sie in unserem [Temporal-Kochbuch](/de/docs/Web/JavaScript/Guide/Representing_dates_times/Cookbook).

{{PreviousNext("Web/JavaScript/Guide/Numbers_and_strings", "Web/JavaScript/Guide/Regular_expressions")}}
