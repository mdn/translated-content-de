---
title: Datums- und Zeitformate in HTML
slug: Web/HTML/Date_and_time_formats
l10n:
  sourceCommit: 5bd9fe2b25c6eee2a14d0406ce7116998fa48c13
---

{{HTMLSidebar}}

Bestimmte HTML-Elemente verwenden Datums- und/oder Zeitwerte. Die Formate der Zeichenfolgen, die diese Werte spezifizieren, werden in diesem Artikel beschrieben.

Elemente, die solche Formate verwenden, umfassen bestimmte Formen des {{HTMLElement("input")}}-Elements, das es dem Benutzer ermöglicht, ein Datum, eine Zeit oder beides auszuwählen oder anzugeben, sowie die {{HTMLElement("ins")}} und {{HTMLElement("del")}}-Elemente, deren [`datetime`](/de/docs/Web/HTML/Element/ins#datetime)-Attribut das Datum oder das Datum und die Uhrzeit angibt, zu der die Einfügung oder Löschung von Inhalten erfolgt ist.

Für `<input>` sind die [`type`](/de/docs/Web/HTML/Element/input#type)-Werte von Eingaben, deren [`value`](/de/docs/Web/HTML/Element/input#value) eine Zeichenfolge darstellt, die ein Datum und/oder eine Zeit repräsentiert:

- [`date`](/de/docs/Web/HTML/Element/input/date)
- [`datetime-local`](/de/docs/Web/HTML/Element/input/datetime-local)
- [`month`](/de/docs/Web/HTML/Element/input/month)
- [`time`](/de/docs/Web/HTML/Element/input/time)
- [`week`](/de/docs/Web/HTML/Element/input/week)

## Beispiele

Bevor wir auf die Feinheiten eingehen, wie Datums- und Zeitzeichenfolgen in HTML geschrieben und geparst werden, finden Sie hier einige Beispiele, die Ihnen eine gute Vorstellung davon geben sollten, wie die häufig verwendeten Datums- und Zeitzeichenfolgen aussehen.

<table class="standard-table">
  <caption>
    Beispiel-HTML-Datums- und Zeitzeichenfolgen
  </caption>
  <thead>
    <tr>
      <th scope="col">Zeichenkette</th>
      <th colspan="2" scope="col">Datum und/oder Zeit</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>2005-06-07</code></td>
      <td>7. Juni 2005</td>
      <td>
        <a href="#date_strings"
          >[Einzelheiten]</a
        >
      </td>
    </tr>
    <tr>
      <td><code>08:45</code></td>
      <td>8:45 Uhr</td>
      <td>
        <a href="#time_strings"
          >[Einzelheiten]</a
        >
      </td>
    </tr>
    <tr>
      <td><code>08:45:25</code></td>
      <td>8:45 Uhr und 25 Sekunden</td>
      <td>
        <a href="#time_strings"
          >[Einzelheiten]</a
        >
      </td>
    </tr>
    <tr>
      <td><code>0033-08-04T03:40</code></td>
      <td>3:40 Uhr am 4. August, Jahr 33</td>
      <td>
        <a
          href="#local_date_and_time_strings"
          >[Einzelheiten]</a
        >
      </td>
    </tr>
    <tr>
      <td><code>1977-04-01T14:00:30</code></td>
      <td>30 Sekunden nach 14:00 Uhr am 1. April 1977</td>
      <td>
        <a
          href="#local_date_and_time_strings"
          >[Einzelheiten]</a
        >
      </td>
    </tr>
    <tr>
      <td><code>1901-01-01T00:00Z</code></td>
      <td>Mitternacht UTC am 1. Januar 1901</td>
      <td>
        <a
          href="#global_date_and_time_strings"
          >[Einzelheiten]</a
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
          >[Einzelheiten]</a
        >
      </td>
    </tr>
  </tbody>
</table>

## Grundlagen

Bevor wir uns die verschiedenen Formate von daten- und zeitbezogenen Zeichenfolgen ansehen, die von HTML-Elementen verwendet werden, ist es hilfreich, einige grundlegende Fakten über die Art und Weise, wie sie definiert sind, zu verstehen. HTML verwendet eine Variation des [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601)-Standards für seine Datums- und Zeitzeichenfolgen. Es lohnt sich, die Beschreibungen der Formate, die Sie verwenden, zu überprüfen, um sicherzustellen, dass Ihre Zeichenfolgen tatsächlich mit HTML kompatibel sind, da die HTML-Spezifikation Algorithmen zum Parsen dieser Zeichenfolgen enthält, die tatsächlich präziser als ISO 8601 sind, sodass es subtile Unterschiede in der erwarteten Darstellung von Datums- und Zeitzeichenfolgen geben kann.

### Zeichensatz

Daten und Zeiten in HTML sind immer Zeichenfolgen, die den [ASCII](/de/docs/Glossary/ASCII)-Zeichensatz verwenden.

### Jahreszahlen

Um das Basisformat für Datumszeichenfolgen in HTML zu vereinfachen, verlangt die Spezifikation, dass alle Jahre nach dem modernen (oder **proleptischen**) [gregorianischen Kalender](https://en.wikipedia.org/wiki/Gregorian_calendar) angegeben werden. Obwohl Benutzeroberflächen die Eingabe von Daten unter Verwendung anderer Kalender zulassen können, verwendet der zugrunde liegende Wert immer den gregorianischen Kalender.

Obwohl der gregorianische Kalender erst im Jahr 1582 erstellt wurde (als Ersatz für den ähnlichen julianischen Kalender), wird er für HTML-Zwecke bis zum Jahr 1 n. Chr. zurückdatiert. Stellen Sie sicher, dass alle älteren Daten dies berücksichtigen.

Für HTML-Daten bestehen Jahreszahlen immer aus mindestens vier Ziffern; Jahre vor dem Jahr 1000 werden mit führenden Nullen (`0`) aufgefüllt, sodass das Jahr 72 als `0072` geschrieben wird. Jahre vor dem Jahr 1 n. Chr. werden nicht unterstützt, daher unterstützt HTML keine Jahre 1 v. Chr. oder früher.

Ein Jahr ist normalerweise 365 Tage lang, außer in **[Schaltjahren](#schaltjahre)**.

#### Schaltjahre

Ein **Schaltjahr** ist jedes Jahr, das durch 400 teilbar ist _oder_ das Jahr ist durch 4 teilbar, aber nicht durch 100. Obwohl das Kalenderjahr normalerweise 365 Tage lang ist, dauert es tatsächlich etwa 365,2422 Tage, bis der Planet Erde eine einzige Umlaufbahn um die Sonne vollendet. Schaltjahre helfen dabei, den Kalender so anzupassen, dass er mit der tatsächlichen Position des Planeten in seiner Umlaufbahn synchronisiert bleibt. Das Hinzufügen eines Tages zum Jahr alle vier Jahre macht das Durchschnittsjahr im Wesentlichen 365,25 Tage lang, was nahe an der korrekten Länge liegt.

Die Anpassungen des Algorithmus (ein Schaltjahr zu nehmen, wenn das Jahr durch 400 teilbar ist, und Schaltjahre zu überspringen, wenn das Jahr durch 100 teilbar ist) helfen, den Durchschnitt noch näher an die korrekte Anzahl von Tagen (365,2425 Tage) heranzuführen. Wissenschaftler fügen manchmal Schaltsekunden zum Kalender hinzu (ernsthaft), um die verbleibenden drei Zehntausendstel eines Tages zu berücksichtigen und um die allmähliche, natürlich auftretende Verlangsamung der Erdrotation auszugleichen.

Während Monat `02`, Februar, normalerweise 28 Tage hat, hat er in Schaltjahren 29 Tage.

### Monate des Jahres

Es gibt 12 Monate im Jahr, nummeriert von 1 bis 12. Sie werden immer durch eine zweistellige ASCII-Zeichenfolge dargestellt, deren Wert von `01` bis `12` reicht. Siehe die Tabelle im Abschnitt [Tage des Monats](#tage_des_monats) für die Monatsnummern und ihre entsprechenden Namen (und Längen in Tagen).

### Tage des Monats

Monatsnummern 1, 3, 5, 7, 8, 10 und 12 sind 31 Tage lang. Monate 4, 6, 9 und 11 sind 30 Tage lang. Monat 2, Februar, ist in den meisten Jahren 28 Tage lang, in Schaltjahren jedoch 29 Tage lang. Dies wird in der folgenden Tabelle detailliert beschrieben.

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

## Wochenzeichenfolgen

Eine Wochenzeichenfolge gibt eine Woche innerhalb eines bestimmten Jahres an. Eine **gültige Wochenzeichenfolge** besteht aus einer gültigen [Jahreszahl](#jahreszahlen), gefolgt von einem Bindestrich-Zeichen (`-`, oder U+002D), dann dem Großbuchstaben `W` (U+0057), gefolgt von einer zweistelligen Wochenzahl des Jahreswerts.

Die Woche des Jahres ist eine zweistellige Zeichenfolge zwischen `01` und `53`. Jede Woche beginnt am Montag und endet am Sonntag. Das bedeutet, dass die ersten Tage des Januars möglicherweise als Teil der vorherigen Kalenderwoche betrachtet werden und die letzten Tage des Dezembers als Teil der folgenden Kalenderwoche. Die erste Woche des Jahres ist die Woche, die den _ersten Donnerstag des Jahres_ enthält. Zum Beispiel war der erste Donnerstag des Jahres 1953 am 1. Januar, sodass diese Woche—beginnend am Montag, den 29. Dezember—als die erste Woche des Jahres gilt. Daher fällt der 30. Dezember 1952 in die Woche `1953-W01`.

Ein Jahr hat 53 Wochen, wenn:

- Der erste Tag des Kalenderjahres (1. Januar) ein Donnerstag ist **oder**
- Der erste Tag des Jahres (1. Januar) ein Mittwoch ist und das Jahr ein [Schaltjahr](#schaltjahre) ist

Alle anderen Jahre haben 52 Wochen.

| Wochenzeichenfolge | Woche und Jahr (Datumsbereich)                   |
| ------------------ | ------------------------------------------------ |
| `2001-W37`         | Woche 37, 2001 (10.-16. September, 2001)         |
| `1953-W01`         | Woche 1, 1953 (29. Dezember, 1952–4. Januar, 1953) |
| `1948-W53`         | Woche 53, 1948 (27. Dezember, 1948–2. Januar, 1949)|
| `1949-W01`         | Woche 1, 1949 (3.–9. Januar, 1949)               |
| `0531-W16`         | Woche 16, 531 (13.–19. April, 531)               |
| `0042-W04`         | Woche 4, 42 (21.–27. Januar, 42)                 |

Beachten Sie, dass sowohl die Jahres- als auch die Wochenzahlen mit führenden Nullen aufgefüllt sind, wobei die Jahreszahl auf vier Ziffern und die Woche auf zwei Ziffern aufgefüllt ist.

## Monatszeichenfolgen

Eine Monatszeichenfolge repräsentiert einen bestimmten Monat in der Zeit, anstatt eines generischen Monats des Jahres. Statt "January" steht eine HTML-Monatszeichenfolge für einen Monat und ein Jahr kombiniert, wie "January 1972".

Eine **gültige Monatszeichenfolge** besteht aus einer gültigen [Jahreszahl](#jahreszahlen) (eine Zeichenkette aus mindestens vier Ziffern), gefolgt von einem Bindestrich-Zeichen (`-`, oder U+002D), gefolgt von einer zweistelligen numerischen [Monatszahl](#monate_des_jahres), wobei `01` für Januar und `12` für Dezember steht.

| Monatszeichenfolge | Monat und Jahr   |
| ------------------ | ---------------- |
| `17310-09`         | September, 17310 |
| `2019-01`          | Januar, 2019     |
| `1993-11`          | November, 1993   |
| `0571-04`          | April, 571       |
| `0001-07`          | Juli, 1 n. Chr.  |

Beachten Sie, dass alle Jahre mindestens vier Zeichen lang sind; Jahre, die weniger als vier Ziffern lang sind, werden mit führenden Nullen aufgefüllt.

## Datumszeichenfolgen

Eine gültige Datumszeichenfolge besteht aus einer [Monatszeichenfolge](#monatszeichenfolgen), gefolgt von einem Bindestrich-Zeichen (`-`, oder U+002D), gefolgt von einem zweistelligen [Tag des Monats](#tage_des_monats).

| Datumszeichenfolge | Volles Datum      |
| ------------------ | ----------------- |
| `1993-11-01`       | 1. November 1993  |
| `1066-10-14`       | 14. Oktober 1066  |
| `0571-04-22`       | 22. April 571     |
| `0062-02-05`       | 5. Februar 62     |

## Zeitzeichenfolgen

Eine Zeitzeichenfolge kann eine Zeit mit Genauigkeit auf die Minute, Sekunde oder Millisekunde angeben. Es ist nicht erlaubt, nur die Stunde oder Minute anzugeben. Eine **gültige Zeitzeichenfolge** besteht mindestens aus einer zweistelligen Stunde, gefolgt von einem Doppelpunkt (`:`, U+003A), dann einer zweistelligen Minute. Optional kann nach der Minute ein weiterer Doppelpunkt und eine zweistellige Anzahl von Sekunden folgen. Millisekunden können optional angegeben werden, indem ein Dezimalpunkt-Zeichen (`.`, U+002E) hinzugefügt wird, gefolgt von einer, zwei oder drei Ziffern.

Es gibt einige zusätzliche grundlegende Regeln:

- Die Stunde wird immer im 24-Stunden-Format angegeben, wobei `00` Mitternacht und 23 Uhr `23` ist. Es sind keine Werte außerhalb des Bereichs `00` – `23` erlaubt.
- Die Minute muss eine zweistellige Zahl zwischen `00` und `59` sein. Werte außerhalb dieses Bereichs sind nicht erlaubt.
- Wenn die Anzahl der Sekunden weggelassen wird (um eine Zeit anzugeben, die nur auf die Minute genau ist), sollte kein Doppelpunkt nach der Anzahl der Minuten folgen.
- Wenn die Anzahl der Sekunden angegeben wird und ganzzahlig ist, darf sie nicht von einem Dezimalpunkt gefolgt werden.
- Wenn ein Bruchteil einer Sekunde angegeben wird, kann er zwischen ein und drei Ziffern lang sein und gibt die Anzahl der Millisekunden an. Er folgt dem Dezimalpunkt, der nach der Sekundenkomponente der Zeitzeichenfolge platziert wird.

| Zeitzeichenfolge  | Zeit                                             |
| ----------------- | ------------------------------------------------ |
| `00:00:30.75`     | 12:00:30,75 Uhr (30,75 Sekunden nach Mitternacht)|
| `12:15`           | 12:15 Uhr                                        |
| `13:44:25`        | 13:44:25 Uhr (25 Sekunden nach 13:44 Uhr)        |

## Lokale Datums- und Zeitzeichenfolgen

Eine gültige [`datetime-local`](/de/docs/Web/HTML/Element/input/datetime-local)-Zeichenfolge besteht aus einer `date`-Zeichenfolge und einer `time`-Zeichenfolge, die mit entweder dem Buchstaben `T` oder einem Leerzeichen verbunden sind. Keine Informationen über die Zeitzone sind in der Zeichenfolge enthalten; das Datum und die Zeit werden als in der lokalen Zeitzone des Benutzers angenommen.

Wenn Sie den [`value`](/de/docs/Web/HTML/Element/input#value) eines `datetime-local`-Inputs setzen, wird die Zeichenfolge **normalisiert** in eine Standardform. Normalisierte `datetime`-Zeichenfolgen verwenden immer den Buchstaben `T`, um das Datum und die Zeit zu trennen, und der Zeitanteil der Zeichenfolge ist so kurz wie möglich. Dies wird erreicht, indem die Sekundeneinheit weggelassen wird, wenn ihr Wert `:00` ist.

<table class="standard-table">
  <caption>
    Beispiele für gültige
    <code>datetime-local</code>
    Zeichenfolgen
  </caption>
  <thead>
    <tr>
      <th scope="col">Datum/Zeit-Zeichenfolge</th>
      <th scope="col">Normalisierte Datum/Zeit-Zeichenfolge</th>
      <th scope="col">Tatsächliches Datum und Zeit</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>1986-01-28T11:38:00.01</code></td>
      <td><code>1986-01-28T11:38:00.01</code></td>
      <td>28. Januar 1986 um 11:38:00,01 Uhr</td>
    </tr>
    <tr>
      <td><code>1986-01-28 11:38:00.010</code></td>
      <td>
        <p><code>1986-01-28T11:38:00.01</code></p>
        <p>
          Beachten Sie, dass nach der Normalisierung diese die gleiche Zeichenfolge
          wie die vorherige <code>datetime-local</code> Zeichenfolge ist. Der Raum
          wurde durch das <code>T</code>-Zeichen ersetzt und die überflüssige
          Null im Bruchteil einer Sekunde wurde entfernt, um die Zeichenfolge
          so kurz wie möglich zu machen.
        </p>
      </td>
      <td>28. Januar 1986 um 11:38:00,01 Uhr</td>
    </tr>
    <tr>
      <td><code>0170-07-31T22:00:00</code></td>
      <td>
        <p><code>0170-07-31T22:00</code></p>
        <p>
          Beachten Sie, dass die normalisierte Form dieses Datums die
          <code>:00</code> weglässt, das die Anzahl der Sekunden null anzeigt,
          weil die Sekunden optional sind, wenn sie null sind, und die
          normalisierte Zeichenfolge die Länge der Zeichenfolge minimiert.
        </p>
      </td>
      <td>31. Juli 170 um 22:00 Uhr</td>
    </tr>
  </tbody>
</table>

## Globale Datums- und Zeitzeichenfolgen

Eine globale Datums- und Zeitzeichenfolge spezifiziert ein Datum und eine Uhrzeit sowie die Zeitzone, in der diese auftreten. Eine **gültige globale Datums- und Zeitzeichenfolge** hat dasselbe Format wie eine [lokale Datums- und Zeitzeichenfolge](#lokale_datums-_und_zeitzeichenfolgen), weist jedoch am Ende eine Zeitzonenzeichenfolge auf, die die Zeit ergänzt.

### Zeichenfolge der Zeitzonenverschiebung

Eine Zeichenfolge der Zeitzonenverschiebung spezifiziert die Verschiebung in entweder einer positiven oder einer negativen Anzahl von Stunden und Minuten von der Standardzeitbasis. Es gibt zwei Standardzeitbasen, die sehr nah beieinander liegen, aber nicht genau gleich sind:

- Für Daten nach der Einrichtung von [Coordinated Universal Time](https://en.wikipedia.org/wiki/Coordinated_Universal_Time) (UTC) in den frühen 1960ern ist die Zeitbasis `Z` und der Offset zeigt die Verschiebung einer bestimmten Zeitzone von der Zeit auf dem Nullmeridian von 0º Länge (der durch das Royal Observatory in Greenwich, England, verläuft) an.
- Für Daten vor UTC wird die Zeitbasis stattdessen in Bezug auf [UT1](https://en.wikipedia.org/wiki/UT1) ausgedrückt, was die zeitgenössische Erdsolartime am Nullmeridian ist.

Die Zeitzonenzeichenfolge wird unmittelbar nach der Zeit in der Datums- und Zeitzeichenfolge angehängt. Sie können `Z` als Zeitzonen-Offsets-Zeichenfolge angeben, um anzugeben, dass die Zeit in UTC angegeben ist. Ansonsten wird die Zeitzonenzeichenfolge wie folgt konstruiert:

1. Ein Zeichen, das das Vorzeichen des Offsets anzeigt: das Pluszeichen (`+`, oder U+002B) für Zeitzonen östlich des Nullmeridians oder das Minuszeichen (`-`, oder U+002D) für Zeitzonen westlich des Nullmeridians.
2. Eine zweistellige Anzahl von Stunden, die die Zeitzone vom Nullmeridian versetzt ist. Dieser Wert muss zwischen `00` und `23` liegen.
3. Ein optionaler Doppelpunkt (`:`) Charakter.
4. Eine zweistellige Anzahl von Minuten nach der Stunde; dieser Wert muss zwischen `00` und `59` liegen.

Obwohl dieses Format Zeitzonen zwischen -23:59 und +23:59 erlaubt, liegt der aktuelle Bereich von Zeitzonenoffsets zwischen -12:00 und +14:00, und keine Zeitzonen sind derzeit von der Stunde mehr als `00`, `30` oder `45` Minuten versetzt. Dies kann sich jederzeit ändern, da Länder ihre Zeitzonen jederzeit und auf jede mögliche Weise ändern können.

<table class="no-markdown">
  <caption>
    Beispiele für gültige globale Datums- und Zeitzeichenfolgen
  </caption>
  <thead>
    <tr>
      <th scope="col">Globale Datums- und Zeitzeichenfolge</th>
      <th scope="col">Tatsächliches globales Datum und Zeit</th>
      <th scope="col">Datum und Zeit am Nullmeridian</th>
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

Aufgrund von Datenaufbewahrungs- und Genauigkeitsfragen möchten Sie sich möglicherweise einiger clientseitiger und serverseitiger Themen bewusst sein.

### Das Y2K38-Problem (oft serverseitig)

JavaScript verwendet Gleitkommazahlen mit doppelter Genauigkeit, um Daten zu speichern, ebenso wie alle Zahlen, was bedeutet, dass JavaScript-Code nicht unter dem Y2K38-Problem leiden wird, es sei denn, Ganzzahlauslosung und Bit-Tricks werden verwendet, weil alle JavaScript-Bit-Operatoren 32-Bit-Zweierkomplement-Ganzzahlen verwenden.

Das Problem liegt auf der Serverseite: Speicherung von Daten größer als 2^31 - 1. Um dieses Problem zu beheben, müssen Sie alle Daten entweder mit unsigned 32-Bit-Ganzzahlen, signed 64-Bit-Ganzzahlen oder Gleitkommazahlen mit doppelter Genauigkeit auf dem Server speichern. Wenn Ihr Server in PHP geschrieben ist, kann die Korrektur so einfach sein wie ein Upgrade auf PHP 8 oder 7 und ein Upgrade Ihrer Hardware auf x86_64 oder IA64. Wenn Sie mit anderer Hardware festsitzen, können Sie versuchen, 64-Bit-Hardware innerhalb einer 32-Bit-virtuellen Maschine zu emulieren, aber die meisten VMs unterstützen diese Art der Virtualisierung nicht, da die Stabilität leiden könnte und die Leistung definitiv erheblich leiden wird.

### Das Y10k-Problem (oft clientseitig)

Auf vielen Servern werden Daten als Zahlen anstelle von Zeichenfolgen gespeichert—Zahlen mit einer festen Größe und agnostisch gegenüber dem Format (abgesehen von der Endianness). Nach dem Jahr 10.000 werden diese Zahlen einfach etwas größer sein als vorher, sodass viele Server keine Probleme mit Formularen sehen werden, die nach dem Jahr 10.000 eingesendet werden.

Das Problem liegt auf der Clientseite: Parsing von Daten mit mehr als 4 Ziffern im Jahr.

```html
<!--midnight of January 1st, 10000: the exact time of Y10K-->
<input type="datetime-local" value="+010000-01-01T05:00" />
```

Es ist so einfach. Bereiten Sie Ihren Code einfach auf eine beliebige Anzahl von Ziffern vor. Bereiten Sie sich nicht nur auf 5 Ziffern vor. Hier ist JavaScript-Code zum programmatischen Setzen des Werts:

```js
function setValue(element, date) {
  const isoString = date.toISOString();
  element.value = isoString.substring(0, isoString.indexOf("T") + 6);
}
```

Warum sich um das Y10k-Problem kümmern, wenn es Jahrhunderte nach Ihrem Tod passieren wird? Genau deshalb, weil Sie bereits tot sein werden, sind die Unternehmen, die Ihre Software nutzen, gezwungen, Ihre Software zu nutzen, ohne dass ein anderer Programmierer das System gut genug kennt, um hereinzukommen und es zu reparieren.

## Siehe auch

- {{HTMLElement("input")}}
- {{HTMLElement("ins")}} und {{HTMLElement("del")}}: siehe das `datetime`-Attribut, das entweder ein Datum oder einen lokalen Zeitpunkt angibt, zu dem der Inhalt eingefügt oder gelöscht wurde
- [Die ISO 8601 Spezifikation](https://www.iso.org/iso-8601-date-and-time-format.html)
- [Zahlen und Daten](/de/docs/Web/JavaScript/Guide/Numbers_and_dates) im [JavaScript Leitfaden](/de/docs/Web/JavaScript/Guide)
- Das JavaScript {{jsxref("Date")}}-Objekt
- Das [`Intl.DateTimeFormat`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat)-Objekt für die Formatierung von Daten und Zeiten für einen bestimmten Ort
