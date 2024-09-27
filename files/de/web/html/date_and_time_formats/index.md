---
title: Datum- und Zeitformate in HTML
slug: Web/HTML/Date_and_time_formats
l10n:
  sourceCommit: 5bd9fe2b25c6eee2a14d0406ce7116998fa48c13
---

{{HTMLSidebar}}

Bestimmte HTML-Elemente verwenden Datums- und/oder Zeitangaben. Die Formate der Zeichenfolgen, die diese Werte angeben, werden in diesem Artikel beschrieben.

Zu den Elementen, die solche Formate verwenden, gehören bestimmte Formen des {{HTMLElement("input")}}-Elements, die es dem Benutzer ermöglichen, ein Datum, eine Uhrzeit oder beides auszuwählen oder anzugeben, sowie die {{HTMLElement("ins")}}- und {{HTMLElement("del")}}-Elemente, deren [`datetime`](/de/docs/Web/HTML/Element/ins#datetime)-Attribut das Datum oder Datum und Uhrzeit angibt, zu dem das Einfügen oder Löschen von Inhalten erfolgte.

Für `<input>` sind die [`type`](/de/docs/Web/HTML/Element/input#type)-Werte von Eingaben, deren [`value`](/de/docs/Web/HTML/Element/input#value) eine Zeichenfolge enthält, die ein Datum und/oder eine Uhrzeit darstellt:

- [`date`](/de/docs/Web/HTML/Element/input/date)
- [`datetime-local`](/de/docs/Web/HTML/Element/input/datetime-local)
- [`month`](/de/docs/Web/HTML/Element/input/month)
- [`time`](/de/docs/Web/HTML/Element/input/time)
- [`week`](/de/docs/Web/HTML/Element/input/week)

## Beispiele

Bevor wir auf die Feinheiten eingehen, wie Datums- und Zeitstrings in HTML geschrieben und analysiert werden, finden Sie hier einige Beispiele, die Ihnen eine gute Vorstellung davon geben sollen, wie die gebräuchlicheren Datums- und Zeitstring-Formate aussehen.

<table class="standard-table">
  <caption>
    Beispiel HTML-Datums- und Zeitstrings
  </caption>
  <thead>
    <tr>
      <th scope="col">String</th>
      <th colspan="2" scope="col">Datum und/oder Zeit</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>2005-06-07</code></td>
      <td>7. Juni 2005</td>
      <td>
        <a href="#date_strings"
          >[Details]</a
        >
      </td>
    </tr>
    <tr>
      <td><code>08:45</code></td>
      <td>8:45 Uhr</td>
      <td>
        <a href="#time_strings"
          >[Details]</a
        >
      </td>
    </tr>
    <tr>
      <td><code>08:45:25</code></td>
      <td>8:45 Uhr und 25 Sekunden</td>
      <td>
        <a href="#time_strings"
          >[Details]</a
        >
      </td>
    </tr>
    <tr>
      <td><code>0033-08-04T03:40</code></td>
      <td>3:40 Uhr am 4. August 33</td>
      <td>
        <a
          href="#local_date_and_time_strings"
          >[Details]</a
        >
      </td>
    </tr>
    <tr>
      <td><code>1977-04-01T14:00:30</code></td>
      <td>30 Sekunden nach 14:00 Uhr am 1. April 1977</td>
      <td>
        <a
          href="#local_date_and_time_strings"
          >[Details]</a
        >
      </td>
    </tr>
    <tr>
      <td><code>1901-01-01T00:00Z</code></td>
      <td>Mitternacht UTC am 1. Januar 1901</td>
      <td>
        <a
          href="#global_date_and_time_strings"
          >[Details]</a
        >
      </td>
    </tr>
    <tr>
      <td><code>1901-01-01T00:00:01-04:00</code></td>
      <td>
        1 Sekunde nach Mitternacht Eastern Standard Time (EST) am 1. Januar 1901
      </td>
      <td>
        <a
          href="#global_date_and_time_strings"
          >[Details]</a
        >
      </td>
    </tr>
  </tbody>
</table>

## Grundlagen

Bevor auf die verschiedenen Formate von datums- und uhrzeitbezogenen Zeichenfolgen eingegangen wird, die von HTML-Elementen verwendet werden, ist es hilfreich, einige grundlegende Fakten zu verstehen, wie sie definiert sind. HTML verwendet eine Variante des [ISO 8601](https://de.wikipedia.org/wiki/ISO_8601)-Standards für seine Datums- und Uhrzeitzeichenfolgen. Es ist ratsam, die Beschreibungen der von Ihnen verwendeten Formate zu überprüfen, um sicherzustellen, dass Ihre Zeichenfolgen tatsächlich mit HTML kompatibel sind, da die HTML-Spezifikation Algorithmen zum Analysieren dieser Zeichenfolgen enthält, die tatsächlich präziser als ISO 8601 sind, so dass es subtile Unterschiede geben kann, wie Datums- und Zeitzeichenfolgen aussehen sollen.

### Zeichensatz

Datums- und Zeitangaben in HTML sind immer Zeichenfolgen, die das [ASCII](/de/docs/Glossary/ASCII)-Zeichensatz verwenden.

### Jahreszahlen

Um das Grundformat für Datumszeichenfolgen in HTML zu vereinfachen, fordert die Spezifikation, dass alle Jahre unter Verwendung des modernen (oder **proleptischen**) [Gregorianischen Kalenders](https://de.wikipedia.org/wiki/Gregorianischer_Kalender) angegeben werden. Während die Benutzeroberflächen die Eingabe von Daten mit anderen Kalendern zulassen können, verwendet der zugrunde liegende Wert immer den Gregorianischen Kalender.

Obwohl der Gregorianische Kalender erst im Jahr 1582 geschaffen wurde (als Ersatz für den ähnlichen Julianischen Kalender), wird er für HTML-Zwecke bis zum Jahr 1 n. Chr. zurück erweitert. Stellen Sie sicher, dass alle älteren Daten dies berücksichtigen.

Für die Zwecke von HTML-Daten sind Jahre immer mindestens vierstellig; Jahre vor dem Jahr 1000 werden mit führenden Nullen (`0`) aufgefüllt, sodass das Jahr 72 als `0072` geschrieben wird. Jahre vor dem Jahr 1 n. Chr. werden nicht unterstützt, daher unterstützt HTML keine Jahre 1 v. Chr. oder älter.

Ein Jahr ist normalerweise 365 Tage lang, außer in **[Schaltjahren](#schaltjahre)**.

#### Schaltjahre

Ein **Schaltjahr** ist jedes Jahr, das durch 400 _oder_ durch 4 teilbar, aber nicht durch 100 teilbar ist. Obwohl das Kalenderjahr normalerweise 365 Tage lang ist, dauert es tatsächlich etwa 365.2422 Tage, bis der Planet Erde eine einzige Umkreisung der Sonne vollführt. Schaltjahre helfen, den Kalender an die tatsächliche Position des Planeten in seiner Umlaufbahn anzupassen. Ein Tag, der etwa alle vier Jahre hinzugefügt wird, macht das durchschnittliche Jahr effektiv 365,25 Tage lang, was fast korrekt ist.

Die Anpassungen des Algorithmus (ein Schaltjahr, wenn das Jahr durch 400 teilbar ist, und Schaltjahre überspringen, wenn das Jahr durch 100 teilbar ist) helfen, den Durchschnitt noch näher an die korrekte Anzahl von Tagen (365,2425 Tage) zu bringen. Wissenschaftler fügen gelegentlich Schalttage in den Kalender ein, um die verbleibenden drei Zehn-Tausendstelsekunden eines Tages abzudecken und die allmähliche, natürlich auftretende Verlangsamung des Erdrotation zu kompensieren.

Während der Monat `02`, Februar, normalerweise 28 Tage hat, hat er in Schaltjahren 29 Tage.

### Monate des Jahres

Es gibt 12 Monate im Jahr, nummeriert von 1 bis 12. Sie werden immer durch eine zweistellige ASCII-Zeichenkette dargestellt, deren Wert von `01` bis `12` reicht. Siehe die Tabelle im Abschnitt [Tage des Monats](#tage_des_monats) für die Monatsnummern und deren zugehörige Namen (und Längen in Tagen).

### Tage des Monats

Monatsnummern 1, 3, 5, 7, 8, 10 und 12 sind 31 Tage lang. Die Monate 4, 6, 9 und 11 sind 30 Tage lang. Der Monat 2, Februar, ist in den meisten Jahren 28 Tage lang, aber in Schaltjahren 29 Tage lang. Dies wird in der folgenden Tabelle detailliert dargestellt.

<table class="standard-table">
  <caption>
    Die Monate des Jahres und ihre Längen in Tagen
  </caption>
  <thead>
    <tr>
      <th scope="row">Monatsnummer</th>
      <th scope="col">Name (Englisch)</th>
      <th scope="col">Länge in Tagen</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">01</th>
      <td>January</td>
      <td>31</td>
    </tr>
    <tr>
      <th scope="row">02</th>
      <td>February</td>
      <td>28 (29 in Schaltjahren)</td>
    </tr>
    <tr>
      <th scope="row">03</th>
      <td>March</td>
      <td>31</td>
    </tr>
    <tr>
      <th scope="row">04</th>
      <td>April</td>
      <td>30</td>
    </tr>
    <tr>
      <th scope="row">05</th>
      <td>May</td>
      <td>31</td>
    </tr>
    <tr>
      <th scope="row">06</th>
      <td>June</td>
      <td>30</td>
    </tr>
    <tr>
      <th scope="row">07</th>
      <td>July</td>
      <td>31</td>
    </tr>
    <tr>
      <th scope="row">08</th>
      <td>August</td>
      <td>31</td>
    </tr>
    <tr>
      <th scope="row">09</th>
      <td>September</td>
      <td>30</td>
    </tr>
    <tr>
      <th scope="row">10</th>
      <td>October</td>
      <td>31</td>
    </tr>
    <tr>
      <th scope="row">11</th>
      <td>November</td>
      <td>30</td>
    </tr>
    <tr>
      <th scope="row">12</th>
      <td>December</td>
      <td>31</td>
    </tr>
  </tbody>
</table>

## Wochenstrings

Ein Wochenstring spezifiziert eine Woche innerhalb eines bestimmten Jahres. Ein **gültiger Wochenstring** besteht aus einer gültigen [Jahreszahl](#jahreszahlen), gefolgt von einem Bindestrich (`-`, oder U+002D), dann dem Großbuchstaben `W` (U+0057), gefolgt von einer zweistelligen Woche des Jahres.

Die Woche des Jahres ist eine zweistellige Zeichenfolge zwischen `01` und `53`. Jede Woche beginnt am Montag und endet am Sonntag. Das bedeutet, dass es möglich ist, dass die ersten Tage des Januars als Teil der Vorjahr-Woche betrachtet werden und dass die letzten Tage im Dezember als Teil der Folgejahr-Woche angesehen werden. Die erste Woche des Jahres ist die Woche, die den _ersten Donnerstag des Jahres_ enthält. Beispielsweise war der erste Donnerstag im Jahr 1953 am 1. Januar, sodass diese Woche, beginnend am Montag, den 29. Dezember, als die erste Woche des Jahres betrachtet wird. Daher fällt der 30. Dezember 1952 in die Woche `1953-W01`.

Ein Jahr hat 53 Wochen, wenn:

- Der erste Kalendertag des Jahres (1. Januar) ein Donnerstag ist **oder**
- Der erste Tag des Jahres (1. Januar) ist ein Mittwoch und das Jahr ist ein [Schaltjahr](#schaltjahre)

Alle anderen Jahre haben 52 Wochen.

| Wochenstring | Woche und Jahr (Datumsbereich)                      |
| ------------ | --------------------------------------------------- |
| `2001-W37`   | Woche 37, 2001 (10.-16. September 2001)             |
| `1953-W01`   | Woche 1, 1953 (29. Dezember 1952 - 4. Januar 1953)  |
| `1948-W53`   | Woche 53, 1948 (27. Dezember 1948 - 2. Januar 1949) |
| `1949-W01`   | Woche 1, 1949 (3.-9. Januar 1949)                   |
| `0531-W16`   | Woche 16, 531 (13.-19. April 531)                   |
| `0042-W04`   | Woche 4, 42 (21.-27. Januar 42)                     |

Beachten Sie, dass die Jahres- und Wochennummern mit führenden Nullen aufgefüllt sind, wobei das Jahr auf vier Ziffern und die Woche auf zwei Ziffern aufgefüllt wird.

## Monatstrings

Ein Monatstring repräsentiert einen bestimmten Monat in der Zeit und nicht einen generischen Monat des Jahres. Das heißt, anstatt "Januar" darzustellen, repräsentiert ein HTML-Monatstring ein Paar aus Monat und Jahr, wie "Januar 1972".

Ein **gültiger Monatstring** besteht aus einer gültigen [Jahreszahl](#jahreszahlen) (einer Zeichenfolge aus mindestens vier Ziffern), gefolgt von einem Bindestrich (`-`, oder U+002D), gefolgt von einer zweistelligen numerischen [Monatsnummer](#monate_des_jahres), wobei `01` für Januar und `12` für Dezember steht.

| Monatstring | Monat und Jahr  |
| ----------- | --------------- |
| `17310-09`  | September 17310 |
| `2019-01`   | Januar 2019     |
| `1993-11`   | November 1993   |
| `0571-04`   | April 571       |
| `0001-07`   | Juli 1 n. Chr.  |

Beachten Sie, dass alle Jahre mindestens vier Zeichen lang sind; Jahre, die weniger als vier Ziffern lang sind, werden mit führenden Nullen aufgefüllt.

## Datumsstrings

Ein gültiger Datumsstring besteht aus einem [Monatstring](#monatstrings), gefolgt von einem Bindestrich (`-`, oder U+002D), gefolgt von einem zweistelligen [Tag des Monats](#tage_des_monats).

| Datumsstring | Volles Datum     |
| ------------ | ---------------- |
| `1993-11-01` | 1. November 1993 |
| `1066-10-14` | 14. Oktober 1066 |
| `0571-04-22` | 22. April 571    |
| `0062-02-05` | 5. Februar 62    |

## Zeitstrings

Ein Zeitstring kann eine Zeit mit Genauigkeit bis zur Minute, Sekunde oder Millisekunde angeben. Es ist nicht zulässig, nur die Stunde oder Minute anzugeben. Ein **gültiger Zeitstring** besteht mindestens aus einer zweistelligen Stunde, gefolgt von einem Doppelpunkt (`:`, U+003A), dann einer zweistelligen Minute. Die Minute kann optional von einem weiteren Doppelpunkt und einer zweistelligen Anzahl von Sekunden gefolgt werden. Millisekunden können optional durch Hinzufügen eines Dezimalpunktes (`.`, U+002E) gefolgt von einer, zwei oder drei Ziffern angegeben werden.

Es gibt einige zusätzliche Grundregeln:

- Die Stunde wird immer im 24-Stunden-Format angegeben, wobei `00` Mitternacht ist und 23 Uhr `23`. Keine Werte außerhalb des Bereichs `00` – `23` sind erlaubt.
- Die Minute muss eine zweistellige Zahl zwischen `00` und `59` sein. Keine Werte außerhalb dieses Bereichs sind erlaubt.
- Wenn die Anzahl der Sekunden weggelassen wird (um eine Zeit nur bis zur Minute anzugeben), sollte kein Doppelpunkt der Zahl der Minuten folgen.
- Wenn angegeben, muss der ganzzahlige Teil der Anzahl der Sekunden zwischen `00` und `59` liegen. Sie _können_ keine Schaltsekunden angeben, indem Sie Werte wie `60` oder `61` verwenden.
- Wenn die Anzahl der Sekunden angegeben ist und eine Ganzzahl ist, darf sie nicht von einem Dezimalpunkt gefolgt werden.
- Wenn ein Bruchteil einer Sekunde enthalten ist, kann er zwischen ein und drei Ziffern lang sein, was die Anzahl der Millisekunden angibt. Er folgt auf den Dezimalpunkt nach der Sekundenkomponente des Zeitstrings.

| Zeitstring    | Zeit                                              |
| ------------- | ------------------------------------------------- |
| `00:00:30.75` | 12:00:30.75 Uhr (30,75 Sekunden nach Mitternacht) |
| `12:15`       | 12:15 Uhr                                         |
| `13:44:25`    | 13:44:25 Uhr (25 Sekunden nach 13:44 Uhr)         |

## Lokale Datum- und Zeitstrings

Ein gültiger [`datetime-local`](/de/docs/Web/HTML/Element/input/datetime-local)-String besteht aus einem `date`-String und einem `time`-String, die mit einem `T` oder einem Leerzeichen getrennt sind. Keine Informationen über die Zeitzone sind in der Zeichenfolge enthalten; die Datum und Uhrzeit werden in der lokalen Zeitzone des Benutzers angenommen.

Wenn Sie den [`value`](/de/docs/Web/HTML/Element/input#value) eines `datetime-local`-Inputs festlegen, wird die Zeichenfolge in eine **normierte** Standardform umgewandelt. Normierte `datetime`-Strings verwenden immer den Buchstaben `T`, um Datum und Uhrzeit zu trennen, und der Zeitanteil der Zeichenfolge ist so kurz wie möglich. Dies wird erreicht, indem die Sekundenkomponente weggelassen wird, wenn ihr Wert `:00` ist.

<table class="standard-table">
  <caption>
    Beispiele für gültige
    <code>datetime-local</code>
    Zeichenfolgen
  </caption>
  <thead>
    <tr>
      <th scope="col">Datum-/Zeitstring</th>
      <th scope="col">Normierter Datum-/Zeitstring</th>
      <th scope="col">Tatsächliches Datum und Uhrzeit</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>1986-01-28T11:38:00.01</code></td>
      <td><code>1986-01-28T11:38:00.01</code></td>
      <td>28. Januar 1986 um 11:38:00.01 Uhr</td>
    </tr>
    <tr>
      <td><code>1986-01-28 11:38:00.010</code></td>
      <td>
        <p><code>1986-01-28T11:38:00.01</code></p>
        <p>
          Beachten Sie, dass nach der Normierung diese dieselbe Zeichenfolge
          wie die vorherige
          <code>datetime-local</code>-Zeichenfolge darstellt. Das Leerzeichen
          wurde durch das <code>T</code>-Zeichen ersetzt und die nachfolgende
          Null im Sekundenbruchteil wurde entfernt, um die Zeichenfolge so kurz
          wie möglich zu machen.
        </p>
      </td>
      <td>28. Januar 1986 um 11:38:00.01 Uhr</td>
    </tr>
    <tr>
      <td><code>0170-07-31T22:00:00</code></td>
      <td>
        <p><code>0170-07-31T22:00</code></p>
        <p>
          Beachten Sie, dass die normierte Form dieses Datums das
          <code>:00</code> fallen lässt, was die Anzahl der Sekunden auf null
          angibt, weil die Sekunden optional sind, wenn sie null sind, und die
          normierte Zeichenfolge die Länge der Zeichenfolge minimiert.
        </p>
      </td>
      <td>31. Juli 170 um 22:00 Uhr</td>
    </tr>
  </tbody>
</table>

## Globale Datum- und Zeitstrings

Ein globaler Datum- und Zeitstring gibt ein Datum und eine Uhrzeit sowie die Zeitzone an, in der es auftritt. Ein **gültiger globaler Datum- und Zeitstring** ist im gleichen Format wie ein [lokaler Datum- und Zeitstring](#lokale_datum-_und_zeitstrings), außer dass er am Ende, nach der Zeit, eine Zeitzonenzeichenfolge angehängt hat.

### Zeitzone-Versatzzeichenfolge

Eine Zeitzone-Versatzzeichenfolge gibt den Versatz entweder in einer positiven oder einer negativen Anzahl von Stunden und Minuten von der Standardzeitbasis an. Es gibt zwei Standardzeitbasen, die sehr nah beieinander liegen, aber nicht genau gleich sind:

- Für Daten nach der Einführung der [koordinierten Weltzeit](https://de.wikipedia.org/wiki/Koordinierte_Weltzeit) (UTC) in den frühen 1960er Jahren ist die Zeitbasis `Z` und der Versatz gibt den Versatz einer bestimmten Zeitzone von der Zeit am Nullmeridian bei 0º Länge an (der durch das Königliche Observatorium in Greenwich, England, verläuft).
- Für Daten vor UTC wird die Zeitbasis stattdessen in Bezug auf [UT1](https://de.wikipedia.org/wiki/UT1) ausgedrückt, die zeitgenössische Erdensolarzeit am Nullmeridian.

Die Zeitzonenzeichenfolge wird direkt nach der Zeit in der Datum- und Zeitzeichenfolge angehängt. Sie können `Z` als Zeitzonenversatzzeichenfolge angeben, um anzuzeigen, dass die Zeit in UTC angegeben ist. Andernfalls wird die Zeitzonenzeichenfolge wie folgt konstruiert:

1. Ein Zeichen, das das Vorzeichen des Versatzes angibt: das Pluszeichen (`+`, oder U+002B) für Zeitzonen östlich des Nullmeridians oder das Minuszeichen (`-`, oder U+002D) für Zeitzonen westlich des Nullmeridians.
2. Eine zweistellige Anzahl von Stunden, die die Zeitzone vom Nullmeridian versetzt ist. Dieser Wert muss zwischen `00` und `23` liegen.
3. Ein optionales Doppelpunktzeichen (`:`).
4. Eine zweistellige Anzahl von Minuten nach der Stunde; dieser Wert muss zwischen `00` und `59` liegen.

Obwohl dieses Format Zeitzonen zwischen -23:59 und +23:59 ermöglicht, liegt der aktuelle Bereich der Zeitzonenverschiebungen zwischen -12:00 und +14:00, und derzeit werden keine Zeitzonen von der Stunde um etwas anderes als `00`, `30` oder `45` Minuten verschoben. Dies kann sich zu fast jeder Zeit ändern, da Länder jederzeit auf jede Weise mit ihren Zeitzonen manipulieren können, wie sie es für richtig halten.

<table class="no-markdown">
  <caption>
    Beispiele für gültige globale Datum- und Zeitzeichenfolgen
  </caption>
  <thead>
    <tr>
      <th scope="col">Globale Datum- und Zeitzeichenfolge</th>
      <th scope="col">Tatsächliches globales Datum und Uhrzeit</th>
      <th scope="col">Datum und Uhrzeit am Nullmeridian</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>2005-06-07T00:00Z</code></td>
      <td>7. Juni 2005 um Mitternacht UTC</td>
      <td>7. Juni 2005 um Mitternacht</td>
    </tr>
    <tr>
      <td><code>1789-08-22T12:30:00.1-04:00</code></td>
      <td>
        22. August 1789 eine Zehntelsekunde nach 12:30 Uhr Eastern Daylight
        Time (EDT)
      </td>
      <td>22. August 1789 eine Zehntelsekunde nach 16:30 Uhr</td>
    </tr>
    <tr>
      <td><code>3755-01-01 00:00+10:00</code></td>
      <td>
        1. Januar 3755 um Mitternacht Australian Eastern Standard Time (AEST)
      </td>
      <td>31. Dezember 3754 um 14:00 Uhr</td>
    </tr>
  </tbody>
</table>

## Datumsprobleme

Aufgrund von Datenspeicher- und Präzisionsproblemen sollten Sie sich über einige client- und serverseitige Probleme im Klaren sein.

### Das Y2K38-Problem (oft serverseitig)

JavaScript verwendet doppelte Gleitkommazahlen, um Daten zu speichern, wie bei allen Zahlen, was bedeutet, dass JavaScript-Code nicht unter dem Y2K38-Problem leiden wird, es sei denn, Ganzzahl-Zwangsmaßnahmen/Bit-Tricks werden verwendet, da alle JavaScript-Bit-Operatoren 32-Bit-ganzzahlige 2-Komplement-Ganzzahlen verwenden.

Das Problem liegt bei den Server-Seiten der Dinge: Speicherung von Daten größer als 2^31 - 1. Um dieses Problem zu beheben, müssen Sie alle Daten entweder mit unsignierten 32-Bit-Ganzzahlen, signierten 64-Bit-Ganzzahlen oder doppelten Präzisions-Gleitkommazahlen auf dem Server speichern. Wenn Ihr Server in PHP geschrieben ist, kann die Lösung so einfach sein wie ein Upgrade auf PHP 8 oder 7 und ein Upgrade Ihrer Hardware auf x86_64 oder IA64. Wenn Sie mit anderer Hardware feststecken, können Sie versuchen, 64-Bit-Hardware in einer 32-Bit-virtuellen Maschine zu emulieren, aber die meisten VMs unterstützen diese Art der Virtualisierung nicht, da die Stabilität leiden könnte und die Leistung definitiv stark leiden wird.

### Das Y10k-Problem (oft clientseitig)

In vielen Servern werden Daten als Zahlen anstelle von Zeichenfolgen gespeichert - Zahlen von fester Größe und formatagnostisch (abgesehen von der Endianness). Nach dem Jahr 10.000 werden diese Zahlen nur ein wenig größer als früher, sodass viele Server keine Probleme mit Formularen haben werden, die nach dem Jahr 10.000 eingereicht wurden.

Das Problem liegt bei den Client-Seiten der Dinge: das Parsen von Daten mit mehr als 4 Ziffern im Jahr.

```html
<!--midnight of January 1st, 10000: the exact time of Y10K-->
<input type="datetime-local" value="+010000-01-01T05:00" />
```

Es ist so einfach. Bereiten Sie Ihren Code einfach für jede Anzahl von Ziffern vor. Bereiten Sie sich nicht nur auf 5 Ziffern vor. Hier ist der JavaScript-Code für die programmatische Einstellung des Werts:

```js
function setValue(element, date) {
  const isoString = date.toISOString();
  element.value = isoString.substring(0, isoString.indexOf("T") + 6);
}
```

Warum sich um das Y10K-Problem kümmern, wenn es viele Jahrhunderte nach Ihrem Tod passieren wird? Genau aus diesem Grund, weil Sie dann bereits tot sein werden, sodass die Unternehmen, die Ihre Software verwenden, mit Ihrer Software feststecken werden, ohne einen anderen Programmierer, der das System gut genug kennt, um es reparieren zu können.

## Siehe auch

- {{HTMLElement("input")}}
- {{HTMLElement("ins")}} und {{HTMLElement("del")}}: sehen Sie sich das `datetime`-Attribut an, das entweder ein Datum oder ein lokales Datum und Uhrzeit angibt, zu dem der Inhalt eingefügt oder gelöscht wurde
- [Die ISO 8601-Spezifikation](https://www.iso.org/iso-8601-date-and-time-format.html)
- [Zahlen und Daten](/de/docs/Web/JavaScript/Guide/Numbers_and_dates) im [JavaScript-Leitfaden](/de/docs/Web/JavaScript/Guide)
- Das JavaScript-Objekt {{jsxref("Date")}}
- Das [`Intl.DateTimeFormat`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat)-Objekt für das Formatieren von Daten und Zeiten für einen bestimmten Ort
