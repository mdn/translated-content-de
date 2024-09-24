---
title: Datums- und Zeitformate in HTML
slug: Web/HTML/Date_and_time_formats
l10n:
  sourceCommit: d7e274e727920f0f85f14e0bdd18e6e585419a90
---

{{HTMLSidebar}}

Bestimmte HTML-Elemente verwenden Datums- und/oder Zeitwerte. Die Formate der Zeichenketten, die diese Werte festlegen, werden in diesem Artikel beschrieben.

Elemente, die solche Formate verwenden, umfassen bestimmte Formen des {{HTMLElement("input")}}-Elements, mit denen der Benutzer ein Datum, eine Uhrzeit oder beides auswählen oder angeben kann, sowie die {{HTMLElement("ins")}}- und {{HTMLElement("del")}}-Elemente, deren [`datetime`](/de/docs/Web/HTML/Element/ins#datetime)-Attribut das Datum oder Datum und Uhrzeit angibt, zu der die Einfügung oder Löschung von Inhalten erfolgt ist.

Für `<input>` sind die [`type`](/de/docs/Web/HTML/Element/input#type)-Werte von Eingaben, deren [`value`](/de/docs/Web/HTML/Element/input#value) eine Zeichenkette enthält, die ein Datum und/oder eine Uhrzeit darstellt:

- [`date`](/de/docs/Web/HTML/Element/input/date)
- [`datetime-local`](/de/docs/Web/HTML/Element/input/datetime-local)
- [`month`](/de/docs/Web/HTML/Element/input/month)
- [`time`](/de/docs/Web/HTML/Element/input/time)
- [`week`](/de/docs/Web/HTML/Element/input/week)

## Beispiele

Bevor Sie sich mit den Feinheiten befassen, wie Datums- und Zeitzeichenketten in HTML geschrieben und analysiert werden, finden Sie hier einige Beispiele, die Ihnen eine gute Vorstellung davon geben sollten, wie die häufiger verwendeten Datums- und Zeitzeichenformate aussehen.

<table class="standard-table">
  <caption>
    Beispiel für HTML-Datums- und Zeitzeichenketten
  </caption>
  <thead>
    <tr>
      <th scope="col">Zeichenkette</th>
      <th colspan="2" scope="col">Datum und/oder Uhrzeit</th>
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

Bevor Sie sich mit den verschiedenen Formaten von Datums- und zeitbezogenen Zeichenketten befassen, die von HTML-Elementen verwendet werden, ist es hilfreich, einige grundlegende Fakten über ihre Definition zu verstehen. HTML verwendet eine Variante des [ISO 8601](https://de.wikipedia.org/wiki/ISO_8601)-Standards für seine Datums- und Zeitzeichenketten. Es lohnt sich, die Beschreibungen der verwendeten Formate zu überprüfen, um sicherzustellen, dass Ihre Zeichenketten tatsächlich mit HTML kompatibel sind, da die HTML-Spezifikation Algorithmen zum Parsen dieser Zeichenketten enthält, die tatsächlich präziser als ISO 8601 sind, sodass es subtile Unterschiede geben kann, wie Datums- und Zeitzeichenketten aussehen sollen.

### Zeichensatz

Daten und Zeiten in HTML sind immer Zeichenketten, die den {{Glossary("ASCII")}}-Zeichensatz verwenden.

### Jahreszahlen

Um das grundlegende Format für Datumszeichenketten in HTML zu vereinfachen, verlangt die Spezifikation, dass alle Jahre mit dem modernen (oder **proleptischen**) [Gregorianischen Kalender](https://de.wikipedia.org/wiki/Gregorianischer_Kalender) angegeben werden. Während Benutzeroberflächen die Eingabe von Daten mit anderen Kalendern zulassen können, wird der zugrunde liegende Wert immer mit dem Gregorianischen Kalender ausgedrückt.

Obwohl der Gregorianische Kalender erst im Jahr 1582 erstellt wurde (um den ähnlichen Julianischen Kalender zu ersetzen), wird für die Zwecke von HTML der Gregorianische Kalender bis zum Jahr 1 n. Chr. zurückdatiert. Stellen Sie sicher, dass alle älteren Daten dies berücksichtigen.

Für die Zwecke von HTML-Daten sind Jahre immer mindestens vierstellig; Jahre vor dem Jahr 1000 werden mit führenden Nullen ("`0`") aufgefüllt, sodass das Jahr 72 als `0072` geschrieben wird. Jahre vor dem Jahr 1 n. Chr. werden nicht unterstützt, daher unterstützt HTML keine Jahre 1 v. Chr. oder früher.

Ein Jahr ist normalerweise 365 Tage lang, außer in **[Schaltjahren](#schaltjahre)**.

#### Schaltjahre

Ein **Schaltjahr** ist jedes Jahr, das durch 400 _oder_ das Jahr, das durch 4 teilbar, aber nicht durch 100 teilbar ist. Obwohl das Kalenderjahr normalerweise 365 Tage lang ist, dauert es tatsächlich etwa 365,2422 Tage, bis der Planet Erde einen vollständigen Umlauf um die Sonne abgeschlossen hat. Schaltjahre helfen, den Kalender anzupassen, um ihn mit der tatsächlichen Position des Planeten in seiner Umlaufbahn zu synchronisieren. Indem ein Tag alle vier Jahre dem Jahr hinzugefügt wird, beträgt die durchschnittliche Jahreslänge 365,25 Tage, was ungefähr korrekt ist.

Die Anpassungen des Algorithmus (ein Schaltjahr zu nehmen, wenn das Jahr durch 400 teilbar ist, und Schaltjahre zu überspringen, wenn das Jahr durch 100 teilbar ist) tragen dazu bei, den Durchschnitt noch näher zur korrekten Anzahl der Tage (365,2425 Tage) zu bringen. Gelegentlich fügen Wissenschaftler dem Kalender Schaltsekunden hinzu (ernsthaft), um die verbleibenden drei Zehntausendstel eines Tages zu behandeln und um das allmähliche, natürlich auftretende Verlangsamen der Erdrotation auszugleichen.

Während der Monat `02`, Februar, normalerweise 28 Tage hat, hat er in Schaltjahren 29 Tage.

### Monate des Jahres

Es gibt 12 Monate im Jahr, nummeriert von 1 bis 12. Sie werden immer durch eine zweistellige ASCII-Zeichenkette dargestellt, deren Wert von `01` bis `12` reicht. Siehe die Tabelle im Abschnitt [Tage des Monats](#tage_des_monats) für die Monatsnummern und ihre entsprechenden Namen (und Längen in Tagen).

### Tage des Monats

Monatsnummern 1, 3, 5, 7, 8, 10 und 12 sind 31 Tage lang. Monate 4, 6, 9 und 11 sind 30 Tage lang. Monat 2, Februar, ist die meisten Jahre 28 Tage lang, hat jedoch in Schaltjahren 29 Tage. Dies wird in der folgenden Tabelle detailliert beschrieben.

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

## Wochenzeichenketten

Eine Wochenzeichenkette gibt eine Woche innerhalb eines bestimmten Jahres an. Eine **gültige Wochenzeichenkette** besteht aus einer gültigen [Jahreszahl](#jahreszahlen), gefolgt von einem Bindestrich ("`-`", oder U+002D), dann dem Großbuchstaben "`W`" (U+0057), gefolgt von einem zweistelligen Wochenwert des Jahres.

Die Woche des Jahres ist eine zweistellige Zeichenkette zwischen `01` und `53`. Jede Woche beginnt am Montag und endet am Sonntag. Das bedeutet, dass die ersten Tage des Januars Teil des vorherigen Wochenjahres sein können und die letzten Tage des Dezembers Teil des folgenden Wochenjahres sein können. Die erste Woche des Jahres ist die Woche, die den _ersten Donnerstag des Jahres_ enthält. Zum Beispiel: Der erste Donnerstag im Jahr 1953 war am 1. Januar, daher wird diese Woche—beginnend am Montag, den 29. Dezember—als die erste Woche des Jahres angesehen. Dementsprechend fällt der 30. Dezember 1952 in die Woche `1953-W01`.

Ein Jahr hat 53 Wochen, wenn:

- Der erste Kalendertag des Jahres (1. Januar) ein Donnerstag ist **oder**
- Der erste Kalendertag des Jahres (1. Januar) ein Mittwoch ist und das Jahr ein [Schaltjahr](#schaltjahre) ist

Alle anderen Jahre haben 52 Wochen.

| Wochenzeichenkette | Woche und Jahr (Zeitraum)                |
| ------------------ | ---------------------------------------- |
| `2001-W37`         | Woche 37, 2001 (10.-16. September 2001)  |
| `1953-W01`         | Woche 1, 1953 (29. Dezember 1952-4. Januar 1953) |
| `1948-W53`         | Woche 53, 1948 (27. Dezember 1948-2. Januar 1949) |
| `1949-W01`         | Woche 1, 1949 (3.-9. Januar 1949)        |
| `0531-W16`         | Woche 16, 531 (13.-19. April 531)        |
| `0042-W04`         | Woche 4, 42 (21.-27. Januar, 42)         |

Beachten Sie, dass sowohl die Jahres- als auch die Wochennummern mit führenden Nullen gefüllt sind, wobei das Jahr auf vier Ziffern und die Woche auf zwei aufgefüllt wird.

## Monatszeichenketten

Eine Monatszeichenkette repräsentiert einen bestimmten Monat in der Zeit, anstatt eines generischen Monats des Jahres. Das heißt, anstelle "Januar" darzustellen, repräsentiert eine HTML-Monatszeichenkette ein Monat-Jahr-Paar, wie "Januar 1972".

Eine **gültige Monatszeichenkette** besteht aus einer gültigen [Jahreszahl](#jahreszahlen) (eine Zeichenkette von mindestens vier Ziffern), gefolgt von einem Bindestrich ("`-`", U+002D), gefolgt von einer zweistelligen numerischen [Monatsnummer](#monate_des_jahres), wobei `01` für Januar und `12` für Dezember steht.

| Monatszeichenkette | Monat und Jahr     |
| ------------------ | ------------------ |
| `17310-09`         | September, 17310   |
| `2019-01`          | Januar, 2019       |
| `1993-11`          | November, 1993     |
| `0571-04`          | April, 571         |
| `0001-07`          | Juli, 1 n. Chr.    |

Beachten Sie, dass alle Jahre mindestens vier Zeichen lang sind; Jahre, die weniger als vier Ziffern haben, werden mit führenden Nullen gefüllt.

## Datumszeichenketten

Eine gültige Datumszeichenkette besteht aus einer [Monatszeichenkette](#monatszeichenketten), gefolgt von einem Bindestrich ("`-`", oder U+002D), gefolgt von einem zweistelligen [Tag des Monats](#tage_des_monats).

| Datumszeichenkette | Vollständiges Datum |
| ------------------ | ------------------- |
| `1993-11-01`       | 1. November 1993    |
| `1066-10-14`       | 14. Oktober 1066    |
| `0571-04-22`       | 22. April 571       |
| `0062-02-05`       | 5. Februar 62       |

## Zeitzeichenketten

Eine Zeitzeichenkette kann eine Zeit mit Präzision auf die Minute, Sekunde oder bis zur Millisekunde angeben. Nur die Stunde oder Minute anzugeben, ist nicht erlaubt. Eine **gültige Zeitzeichenkette** besteht mindestens aus einer zweistelligen Stunde, gefolgt von einem Doppelpunkt ("`:`", U+003A), dann einer zweistelligen Minute. Optional kann der Minute ein weiterer Doppelpunkt und eine zweistellige Anzahl von Sekunden folgen. Millisekunden können optional angegeben werden, indem ein Dezimalpunktzeichen ("`.`", U+002E) gefolgt von ein, zwei oder drei Ziffern hinzugefügt wird.

Es gibt einige zusätzliche Grundregeln:

- Die Stunde wird immer im 24-Stunden-Format angegeben, wobei `00` Mitternacht und 23 Uhr `23` ist. Keine Werte außerhalb des Bereichs `00` – `23` sind zulässig.
- Die Minute muss eine zweistellige Zahl zwischen `00` und `59` sein. Keine Werte außerhalb dieses Bereichs sind erlaubt.
- Wenn die Anzahl der Sekunden weggelassen wird (um eine Zeit nur bis zur Minute genau anzugeben), sollte kein Doppelpunkt der Minutenanzahl folgen.
- Wenn angegeben, muss der ganzzahlige Teil der Anzahl der Sekunden zwischen `00` und `59` liegen. Sie _können_ keine Schaltsekunden angeben, indem Sie Werte wie `60` oder `61` verwenden.
- Wenn die Anzahl der Sekunden angegeben ist und eine Ganzzahl ist, darf sie nicht von einem Dezimalpunkt gefolgt werden.
- Wenn ein Bruchteil einer Sekunde enthalten ist, kann er von ein bis drei Ziffern lang sein, was die Anzahl der Millisekunden angibt. Er folgt auf den Dezimalpunkt, der nach dem Sekundenanteil der Zeitzeichenkette gesetzt wird.

| Zeitzeichenkette   | Zeit                                          |
| ------------------ | --------------------------------------------- |
| `00:00:30.75`      | 12:00:30.75 Uhr (30.75 Sekunden nach Mitternacht) |
| `12:15`            | 12:15 Uhr                                     |
| `13:44:25`         | 13:44:25 Uhr (25 Sekunden nach 13:44 Uhr)     |

## Lokale Datums- und Zeitzeichenketten

Eine gültige [`datetime-local`](/de/docs/Web/HTML/Element/input/datetime-local)-Zeichenkette besteht aus einer `date`-Zeichenkette und einer `time`-Zeichenkette, die mit entweder dem Buchstaben "`T`" oder einem Leerzeichen getrennt sind. Keine Informationen über die Zeitzone werden in der Zeichenkette enthalten; das Datum und die Zeit wird in der lokalen Zeitzone des Benutzers angenommen.

Wenn Sie den [`value`](/de/docs/Web/HTML/Element/input#value) eines `datetime-local`-Eingabefelds festlegen, wird die Zeichenkette in eine standardisierte Form **normalisiert**. Normalisierte `datetime`-Zeichenketten verwenden immer den Buchstaben "`T`", um das Datum und die Zeit zu trennen, und der Zeitanteil der Zeichenkette ist so kurz wie möglich. Dies wird erreicht, indem der Sekundenanteil weggelassen wird, wenn sein Wert `:00` ist.

<table class="standard-table">
  <caption>
    Beispiele gültiger
    <code>datetime-local</code>
    Zeichenketten
  </caption>
  <thead>
    <tr>
      <th scope="col">Datum/Zeit-Zeichenkette</th>
      <th scope="col">Normalisierte Datum/Zeit-Zeichenkette</th>
      <th scope="col">Tatsächliches Datum und Zeit</th>
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
          Beachten Sie, dass nach der Normalisierung diese Zeichenkette mit der vorherigen
          <code>datetime-local</code> Zeichenkette identisch ist. Das Leerzeichen wurde durch
          den "<code>T</code>"-Charakter ersetzt und die abschließende Null im Bruchteil
          einer Sekunde wurde entfernt, um die Zeichenkette so kurz wie möglich zu machen.
        </p>
      </td>
      <td>28. Januar 1986 um 11:38:00.01 Uhr</td>
    </tr>
    <tr>
      <td><code>0170-07-31T22:00:00</code></td>
      <td>
        <p><code>0170-07-31T22:00</code></p>
        <p>
          Beachten Sie, dass im normalisierten Format dieses Datums das
          "<code>:00</code>" weggelassen wird, da die Anzahl der Sekunden null ist,
          weil die Sekundenoption optional ist, wenn sie null ist, und die normalisierte Zeichenkette
          minimiert die Länge der Zeichenkette.
        </p>
      </td>
      <td>31. Juli 170 um 22:00 Uhr</td>
    </tr>
  </tbody>
</table>

## Globale Datums- und Zeitzeichenketten

Eine globale Datums- und Zeitzeichenkette gibt sowohl ein Datum und eine Zeit als auch die Zeitzone an, in der sie auftritt. Eine **gültige globale Datums- und Zeitzeichenkette** hat dasselbe Format wie eine [lokale Datums- und Zeitzeichenkette](#lokale_datums-_und_zeitzeichenketten), außer dass sie eine Zeitzonenzeichenkette enthält, die nach der Zeit hinzugefügt wird.

### Zeitzonenoffset-Zeichenkette

Eine Zeitzonenoffset-Zeichenkette gibt den Offset in einer positiven oder negativen Anzahl von Stunden und Minuten von der Standardzeitbasis an. Es gibt zwei Standardzeitbasen, die sich sehr ähnlich sind, aber nicht genau gleich:

- Für Daten nach der Einführung der [koordinierten Weltzeit](https://de.wikipedia.org/wiki/Koordinierte_Weltzeit) (UTC) in den frühen 1960er Jahren ist die Zeitbasis `Z` und der Offset gibt den Offset einer bestimmten Zeitzone von der Zeit am Nullmeridian am 0º Längengrad (der durch das Royal Observatory in Greenwich, England geht) an.
- Für Daten vor UTC wird die Zeitbasis stattdessen in Bezug auf [UT1](https://de.wikipedia.org/wiki/UT1) ausgedrückt, die die zeitgenössische Erdzeit am Nullmeridian ist.

Die Zeitzonenzeichenkette wird unmittelbar nach der Zeit der Datums- und Zeitzeichenkette hinzugefügt. Sie können "`Z`" als Zeitzonenoffset-Zeichenkette angeben, um anzuzeigen, dass die Zeit in UTC angegeben ist. Andernfalls wird die Zeitzonenzeichenkette wie folgt konstruiert:

1. Ein Zeichen, das das Vorzeichen des Offsets anzeigt: das Pluszeichen ("`+`", oder U+002B) für Zeitzonen östlich des Nullmeridians oder das Minuszeichen ("`-`", oder U+002D) für Zeitzonen westlich des Nullmeridians.
2. Eine zweistellige Anzahl von Stunden, die die Zeitzone vom Nullmeridian versetzt ist. Dieser Wert muss zwischen `00` und `23` liegen.
3. Ein optionales Doppelpunktzeichen ("`:`").
4. Eine zweistellige Anzahl von Minuten nach der Stunde; dieser Wert muss zwischen `00` und `59` liegen.

Während dieses Format Zeitzonen zwischen -23:59 und +23:59 zulässt, liegt die aktuelle Bandbreite der Zeitzonenoffsets zwischen -12:00 und +14:00, und keine Zeitzonen sind derzeit stündlich um andere als `00`, `30` oder `45` Minuten versetzt. Dies kann sich zu nahezu jeder Zeit ändern, da Länder ihre Zeitzonen jederzeit und auf jede Weise ändern dürfen.

<table class="no-markdown">
  <caption>
    Beispiele gültiger globaler Datums- und Zeitzeichenketten
  </caption>
  <thead>
    <tr>
      <th scope="col">Globale Datums- und Zeitzeichenkette</th>
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
        22. August 1789, eine Zehntelsekunde nach 12:30 PM Eastern Daylight
        Time (EDT)
      </td>
      <td>22. August 1789, eine Zehntelsekunde nach 16:30 Uhr</td>
    </tr>
    <tr>
      <td><code>3755-01-01 00:00+10:00</code></td>
      <td>
        1. Januar 3755, Mitternacht Australian Eastern Standard Time (AEST)
      </td>
      <td>31. Dezember 3754 um 14:00 Uhr</td>
    </tr>
  </tbody>
</table>

## Datumsprobleme

Aufgrund von Problemen bei der Datenspeicherung und Genauigkeit möchten Sie vielleicht vor einigen clientseitigen und serverseitigen Problemen gewappnet sein.

### Das Y2K38-Problem (oft serverseitig)

JavaScript verwendet doppelte Gleitkommagenauigkeit zum Speichern von Daten, wie dies bei allen Zahlen der Fall ist. Das bedeutet, dass JavaScript-Code nicht unter dem Y2K38-Problem leidet, es sei denn, Ganzzahl-Umwandlung/Bit-Tricks werden verwendet, da alle JavaScript-Bit-Operatoren 32-Bit-signierte Zweierkomplement-Ganzzahlen verwenden.

Das Problem liegt auf der Serverseite: Speicherung von Daten, die größer sind als 2^31 - 1. Um dieses Problem zu beheben, müssen Sie alle Daten als unsignierte 32-Bit-Ganzzahlen, signierte 64-Bit-Ganzzahlen oder doppelt-präzise Gleitkommazahlen auf dem Server speichern. Wenn Ihr Server in PHP geschrieben ist, kann die Lösung so einfach sein, wie auf PHP 8 oder 7 zu aktualisieren und Ihre Hardware auf x86_64 oder IA64 zu aktualisieren. Wenn Sie auf andere Hardware angewiesen sind, können Sie versuchen, 64-Bit-Hardware innerhalb einer 32-Bit-Virtual-Maschine zu emulieren, aber die meisten VMs unterstützen diese Art von Virtualisierung nicht, da die Stabilität leiden kann und die Leistung definitiv erheblich leiden wird.

### Das Y10K-Problem (oft clientseitig)

In vielen Servern werden Daten als Zahlen und nicht als Zeichenketten gespeichert—als Zahlen von fester Größe und formatagnostisch (abgesehen von Endianheit). Nach dem Jahr 10.000 sind diese Zahlen einfach etwas größer als zuvor, sodass viele Server nach dem Jahr 10.000 auf keine Probleme stoßen werden, wenn Formulare eingereicht werden.

Das Problem liegt auf der Clientseite: das Parsen von Daten mit mehr als 4 Ziffern im Jahr.

```html
<!-- Mitternacht des 1. Januar 10.000: die genaue Zeit von Y10K -->
<input type="datetime-local" value="+010000-01-01T05:00" />
```

Es ist so einfach. Bereiten Sie Ihren Code einfach auf jede Anzahl von Ziffern vor. Bereiten Sie sich nicht nur auf 5 Ziffern vor. Hier ist ein JavaScript-Code für das programmgesteuerte Setzen des Wertes:

```js
function setValue(element, date) {
  const isoString = date.toISOString();
  element.value = isoString.substring(0, isoString.indexOf("T") + 6);
}
```

Warum sich um das Y10K-Problem kümmern, wenn es Jahrhunderte nach Ihrem Tod passieren wird? Genau, weil Sie bereits tot sein werden, sodass die Unternehmen, die Ihre Software verwenden, mit Ihrer Software allein gelassen werden, ohne einen anderen Codierer, der das System gut genug kennt, um hereinzukommen und es zu reparieren.

## Siehe auch

- {{HTMLElement("input")}}
- {{HTMLElement("ins")}} und {{HTMLElement("del")}}: siehe das `datetime`-Attribut, das entweder ein Datum oder ein lokales Datum und Uhrzeit angibt, zu dem der Inhalt eingefügt oder gelöscht wurde
- [Die ISO 8601 Spezifikation](https://www.iso.org/iso-8601-date-and-time-format.html)
- [Zahlen und Daten](/de/docs/Web/JavaScript/Guide/Numbers_and_dates) im [JavaScript-Leitfaden](/de/docs/Web/JavaScript/Guide)
- Das JavaScript-{{jsxref("Date")}}-Objekt
- Das [`Intl.DateTimeFormat`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat)-Objekt zum Formatieren von Daten und Zeiten für eine gegebene Spracheinstellung
