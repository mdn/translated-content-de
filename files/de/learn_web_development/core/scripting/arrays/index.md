---
title: Arrays
slug: Learn_web_development/Core/Scripting/Arrays
l10n:
  sourceCommit: 8e844812a111634228a58c4f21f81b8f616f7169
---

{{PreviousMenuNext("Learn_web_development/Core/Scripting/Useful_string_methods", "Learn_web_development/Core/Scripting/Silly_story_generator", "Learn_web_development/Core/Scripting")}}

In dieser Lektion betrachten wir Arrays — eine elegante Möglichkeit, eine Liste von Datenelementen unter einem einzelnen Variablennamen zu speichern. Wir schauen uns an, warum dies nützlich ist, und erkunden, wie man ein [array](/de/docs/Web/JavaScript/Reference/Global_Objects/Array) erstellt, Elemente abrufen, hinzufügen und entfernen kann, die in einem Array gespeichert sind, und mehr.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>Ein Verständnis von <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a> und den <a href="/de/docs/Learn_web_development/Core/Styling_basics">Grundlagen von CSS</a>. Vertrautheit mit grundlegenden Datentypen wie Zahlen und Zeichenfolgen, wie in vorherigen Lektionen behandelt.</td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Was ein Array ist — eine Struktur, die eine Liste von Variablen hält.</li>
          <li>Die Syntax von Arrays — <code>[a, b, c]</code> und die Zugriffssyntax, <code>myArray[x]</code>.</li>
          <li>Ändern von Array-Werten mit <code>myArray[x] = y</code>.</li>
          <li>Array-Manipulation mit allgemeinen Eigenschaften und Methoden wie <code>length</code>, <code>push()</code>, <code>pop()</code>, <code>join()</code> und <code>split()</code>.</li>
          <li>Erweiterte Array-Methoden wie <code>forEach()</code>, <code>map()</code> und <code>filter()</code>.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Was ist ein Array?

Arrays werden allgemein als "listenartige Objekte" beschrieben; sie sind im Grunde einzelne Objekte, die mehrere Werte in einer Liste enthalten. Array-Objekte können in Variablen gespeichert und ähnlich wie jede andere Art von Wert behandelt werden, mit dem Unterschied, dass wir auf jeden Wert in der Liste individuell zugreifen können und äußerst nützliche und effiziente Dinge mit der Liste tun können, wie zum Beispiel durch sie zu schleifen und dieselbe Aktion auf jeden Wert anzuwenden. Vielleicht haben wir eine Serie von Produktartikeln und ihren Preisen in einem Array gespeichert, und wir möchten durch alle durchlaufen und sie auf einer Rechnung ausdrucken, während wir alle Preise zusammenzählen und den Gesamtpreis unten ausdrucken.

Hätten wir keine Arrays, müssten wir jeden Artikel in einer separaten Variablen speichern und den Code, der das Drucken und Hinzufügen durchführt, separat für jeden Artikel aufrufen. Dies wäre länger zu schreiben, weniger effizient und fehleranfälliger. Wenn wir 10 Artikel zur Rechnung hinzufügen müssten, wäre das bereits ärgerlich, aber was ist mit 100 Artikeln oder 1000? Wir werden später im Artikel auf dieses Beispiel zurückkommen.

Wie in vorherigen Artikeln, lassen Sie uns die grundlegenden Grundlagen von Arrays lernen, indem wir einige Beispiele in die [Browser-Entwicklerkonsole](/de/docs/Learn_web_development/Howto/Tools_and_setup/What_are_browser_developer_tools) eingeben.

> [!NOTE]
> Scrimba's [Aside: Intro to arrays](https://scrimba.com/the-frontend-developer-career-path-c0j/~06e?via=mdn) Schaubild <sup>[_MDN Lernpartner_](/de/docs/MDN/Writing_guidelines/Learning_content#partner_links_and_embeds)</sup> bietet eine nützliche interaktive Einführung in Arrays mit Beispiel-Durchgängen und einer Herausforderung, um Ihr Wissen zu testen.

## Arrays erstellen

Arrays bestehen aus eckigen Klammern und Elementen, die durch Kommas getrennt sind.

1. Angenommen, wir wollen eine Einkaufsliste in einem Array speichern. Fügen Sie den folgenden Code in die Konsole ein:

   ```js
   const shopping = ["bread", "milk", "cheese", "hummus", "noodles"];
   console.log(shopping);
   ```

2. Im obigen Beispiel ist jedes Element eine Zeichenkette, aber in einem Array können wir verschiedene Datentypen speichern — Zeichenketten, Zahlen, Objekte und sogar andere Arrays. Wir können auch Datentypen in einem einzigen Array mischen — wir müssen uns nicht darauf beschränken, nur Zahlen in einem Array zu speichern und in einem anderen nur Zeichenketten. Zum Beispiel:

   ```js
   const sequence = [1, 1, 2, 3, 5, 8, 13];
   const random = ["tree", 795, [0, 1, 2]];
   ```

3. Erstellen Sie, bevor Sie fortfahren, einige Beispiel-Arrays.

## Die Länge eines Arrays herausfinden

Sie können die Länge eines Arrays (wie viele Elemente es enthält) genau so herausfinden, wie Sie die Länge (in Zeichen) einer Zeichenkette herausfinden — indem Sie die {{jsxref("Array.prototype.length","length")}}-Eigenschaft verwenden. Versuchen Sie Folgendes:

```js
const shopping = ["bread", "milk", "cheese", "hummus", "noodles"];
console.log(shopping.length); // 5
```

## Auf Elemente in einem Array zugreifen und diese ändern

Arrays sind [indizierte Sammlungen](/de/docs/Web/JavaScript/Guide/Indexed_collections). Elemente in einem Array sind nummeriert, beginnend bei null. Diese Nummer wird als Index des Elements bezeichnet. Das erste Element hat also den Index 0, das zweite den Index 1 und so weiter. Sie können auf einzelne Elemente im Array mit der eckigen Klammernotation und dem Index zugreifen, ähnlich wie Sie [die Buchstaben in einer Zeichenkette](/de/docs/Learn_web_development/Core/Scripting/Useful_string_methods#retrieving_a_specific_string_character) abgerufen haben.

1. Geben Sie Folgendes in Ihre Konsole ein:

   ```js
   const shopping = ["bread", "milk", "cheese", "hummus", "noodles"];
   console.log(shopping[0]);
   // returns "bread"
   ```

2. Sie können auch ein Element in einem Array ändern, indem Sie einem einzelnen Array-Element einen neuen Wert zuweisen. Versuchen Sie dies:

   ```js
   const shopping = ["bread", "milk", "cheese", "hummus", "noodles"];
   shopping[0] = "tahini";
   console.log(shopping);
   // shopping will now return [ "tahini", "milk", "cheese", "hummus", "noodles" ]
   ```

   > [!NOTE]
   > Wir haben dies bereits gesagt, aber zur Erinnerung — JavaScript beginnt mit dem Indexieren von Arrays bei null!

3. Beachten Sie, dass ein Array innerhalb eines Arrays als mehrdimensionales Array bezeichnet wird. Sie können auf ein Element in einem Array zugreifen, das sich selbst in einem anderen Array befindet, indem Sie zwei Sätze von eckigen Klammern miteinander verketten. Um beispielsweise auf eines der Elemente in dem Array zuzugreifen, das das dritte Element im `random`-Array (siehe vorherigen Abschnitt) ist, könnten wir so etwas tun:

   ```js
   const random = ["tree", 795, [0, 1, 2]];
   random[2][2];
   ```

4. Versuchen Sie, einige weitere Änderungen an Ihren Array-Beispielen vorzunehmen, bevor Sie fortfahren. Spielen Sie ein bisschen herum und sehen Sie, was funktioniert und was nicht.

## Den Index von Elementen in einem Array finden

Wenn Sie den Index eines Elements nicht kennen, können Sie die Methode {{jsxref("Array.prototype.indexOf()","indexOf()")}} verwenden.
Die `indexOf()`-Methode nimmt ein Element als Argument und gibt entweder den Index des Elements oder `-1` zurück, wenn sich das Element nicht im Array befindet:

```js
const birds = ["Parrot", "Falcon", "Owl"];
console.log(birds.indexOf("Owl")); //  2
console.log(birds.indexOf("Rabbit")); // -1
```

## Elemente hinzufügen

Um ein oder mehrere Elemente am Ende eines Arrays hinzuzufügen, können wir {{jsxref("Array.prototype.push()","push()")}} verwenden. Beachten Sie, dass Sie ein oder mehrere Elemente, die Sie am Ende Ihres Arrays hinzufügen möchten, angeben müssen.

```js
const cities = ["Manchester", "Liverpool"];
cities.push("Cardiff");
console.log(cities); // [ "Manchester", "Liverpool", "Cardiff" ]
cities.push("Bradford", "Brighton");
console.log(cities); // [ "Manchester", "Liverpool", "Cardiff", "Bradford", "Brighton" ]
```

Die neue Länge des Arrays wird zurückgegeben, wenn der Methodenaufruf abgeschlossen ist. Wenn Sie die neue Array-Länge in einer Variablen speichern möchten, könnten Sie so etwas tun:

```js
const cities = ["Manchester", "Liverpool"];
const newLength = cities.push("Bristol");
console.log(cities); // [ "Manchester", "Liverpool", "Bristol" ]
console.log(newLength); // 3
```

Um ein Element am Anfang des Arrays hinzuzufügen, verwenden Sie {{jsxref("Array.prototype.unshift()","unshift()")}}:

```js
const cities = ["Manchester", "Liverpool"];
cities.unshift("Edinburgh");
console.log(cities); // [ "Edinburgh", "Manchester", "Liverpool" ]
```

## Elemente entfernen

Um das letzte Element aus dem Array zu entfernen, verwenden Sie {{jsxref("Array.prototype.pop()","pop()")}}.

```js
const cities = ["Manchester", "Liverpool"];
cities.pop();
console.log(cities); // [ "Manchester" ]
```

Die `pop()`-Methode gibt das entfernte Element zurück. Um dieses Element in einer neuen Variablen zu speichern, könnten Sie dies tun:

```js
const cities = ["Manchester", "Liverpool"];
const removedCity = cities.pop();
console.log(removedCity); // "Liverpool"
```

Um das erste Element aus einem Array zu entfernen, verwenden Sie {{jsxref("Array.prototype.shift()","shift()")}}:

```js
const cities = ["Manchester", "Liverpool"];
cities.shift();
console.log(cities); // [ "Liverpool" ]
```

Wenn Sie den Index eines Elements kennen, können Sie es mit {{jsxref("Array.prototype.splice()","splice()")}} aus dem Array entfernen:

```js
const cities = ["Manchester", "Liverpool", "Edinburgh", "Carlisle"];
const index = cities.indexOf("Liverpool");
if (index !== -1) {
  cities.splice(index, 1);
}
console.log(cities); // [ "Manchester", "Edinburgh", "Carlisle" ]
```

In diesem Aufruf von `splice()` gibt das erste Argument an, wo mit dem Entfernen von Elementen begonnen werden soll, und das zweite Argument gibt an, wie viele Elemente entfernt werden sollen. Auf diese Weise können mehr als ein Element entfernt werden:

```js
const cities = ["Manchester", "Liverpool", "Edinburgh", "Carlisle"];
const index = cities.indexOf("Liverpool");
if (index !== -1) {
  cities.splice(index, 2);
}
console.log(cities); // [ "Manchester", "Carlisle" ]
```

## Auf jedes Element zugreifen

Sehr oft möchten Sie auf jedes Element im Array zugreifen. Sie können dies mit der {{jsxref("statements/for...of","for...of")}}-Anweisung tun:

```js
const birds = ["Parrot", "Falcon", "Owl"];

for (const bird of birds) {
  console.log(bird);
}
```

Manchmal möchten Sie dieselbe Aktion auf jedes Element in einem Array anwenden und bleiben dann mit einem Array zurück, das die geänderten Elemente enthält. Sie können dies mit {{jsxref("Array.prototype.map()","map()")}} tun. Der folgende Code nimmt ein Array von Zahlen und verdoppelt jede Zahl:

```js
function double(number) {
  return number * 2;
}
const numbers = [5, 2, 7, 6];
const doubled = numbers.map(double);
console.log(doubled); // [ 10, 4, 14, 12 ]
```

Wir übergeben eine Funktion an `map()`, und `map()` ruft die Funktion einmal für jedes Element im Array auf und übergibt dabei das Element. Dann fügt es den Rückgabewert jedes Funktionsaufrufs zu einem neuen Array hinzu und gibt schließlich das neue Array zurück.

Manchmal möchten Sie ein neues Array erstellen, das nur die Elemente im ursprünglichen Array enthält, die einem bestimmten Test entsprechen. Dies können Sie mit {{jsxref("Array.prototype.filter()","filter()")}} tun. Der folgende Code nimmt ein Array von Zeichenfolgen und gibt ein Array zurück, das nur die Zeichenfolgen enthält, die länger als 8 Zeichen sind:

```js
function isLong(city) {
  return city.length > 8;
}
const cities = ["London", "Liverpool", "Totnes", "Edinburgh"];
const longer = cities.filter(isLong);
console.log(longer); // [ "Liverpool", "Edinburgh" ]
```

Wie bei `map()` übergeben wir eine Funktion an die `filter()`-Methode, und `filter()` ruft diese Funktion für jedes Element im Array auf und übergibt dabei das Element. Wenn die Funktion `true` zurückgibt, wird das Element zu einem neuen Array hinzugefügt. Schließlich wird das neue Array zurückgegeben.

## Konvertieren zwischen Zeichenketten und Arrays

Oftmals werden Sie mit einigen rohen Daten in einer langen Zeichenkette präsentiert, und Sie möchten die nützlichen Elemente in eine nützlichere Form trennen und dann Dinge damit tun, wie sie in einer Datentabelle anzeigen. Um dies zu tun, können wir die {{jsxref("String.prototype.split()","split()")}}-Methode verwenden. In ihrer einfachsten Form nimmt diese einen einzelnen Parameter, das Zeichen, an dem Sie die Zeichenkette trennen möchten, und gibt die Teilzeichenfolgen zwischen den Trennzeichen als Elemente in einem Array zurück.

> [!NOTE]
> Nun, technisch gesehen ist dies eine Zeichenkettenmethode, keine Array-Methode, aber wir haben sie zu den Arrays hinzugefügt, da sie hier gut passt.

1. Lassen Sie uns ein wenig damit spielen, um zu sehen, wie es funktioniert. Erstellen Sie zuerst eine Zeichenkette in Ihrer Konsole:

   ```js
   const data = "Manchester,London,Liverpool,Birmingham,Leeds,Carlisle";
   ```

2. Lassen Sie uns nun die Zeichenkette an jedem Komma trennen:

   ```js
   const cities = data.split(",");
   cities;
   ```

3. Versuchen Sie schließlich, die Länge Ihres neuen Arrays herauszufinden und einige Elemente daraus abzurufen:

   ```js
   cities.length;
   cities[0]; // the first item in the array
   cities[1]; // the second item in the array
   cities[cities.length - 1]; // the last item in the array
   ```

4. Sie können auch den umgekehrten Weg gehen und die {{jsxref("Array.prototype.join()","join()")}}-Methode verwenden. Versuchen Sie Folgendes:

   ```js
   const commaSeparated = cities.join(",");
   commaSeparated;
   ```

5. Eine andere Möglichkeit, ein Array in eine Zeichenkette zu konvertieren, ist die {{jsxref("Array.prototype.toString()","toString()")}}-Methode. `toString()` ist möglicherweise einfacher als `join()`, da es keinen Parameter benötigt, aber eingeschränkter. Mit `join()` können Sie verschiedene Trennzeichen angeben, während `toString()` immer ein Komma verwendet. (Versuchen Sie, Schritt 4 mit einem anderen Zeichen als einem Komma durchzuführen.)

   ```js
   const dogNames = ["Rocket", "Flash", "Bella", "Slugger"];
   dogNames.toString(); // Rocket,Flash,Bella,Slugger
   ```

## Diese Produkte drucken

Jetzt sind Sie dran. In dieser Übung kehren Sie zu dem früher beschriebenen Beispiel zurück — dem Drucken von Produktnamen und -preisen auf einer Rechnung, Berechnen der Preise und Ausdrucken des Gesamtbetrags am Ende. Folgen Sie den unten stehenden Schritten, um die Logik zu implementieren.

1. Klicken Sie auf **"Play"** im folgenden Codeblock, um das Beispiel im MDN Playground zu bearbeiten.
2. Unter dem Kommentar `// Part 1` befinden sich einige Zeichenketten, die jeweils einen Produktnamen und einen Preis enthalten, die durch einen Doppelpunkt getrennt sind. Bitte heben Sie die Auskommentierung auf und wandeln Sie diese in ein Array namens `products` um.
3. Unter dem Kommentar `// Part 2` beginnen Sie eine `for...of()`-Schleife, um jedes Element im `products`-Array zu durchlaufen.
4. Unter dem Kommentar `// Part 3` möchten wir, dass Sie eine Zeile Code schreiben, die das aktuelle Array-Element (`name:price`) in zwei separate Elemente aufteilt, eins mit dem Namen und eins mit dem Preis. Wenn Sie sich nicht sicher sind, wie dies geht, konsultieren Sie den Artikel über [nützliche Zeichenkettenmethoden](/de/docs/Learn_web_development/Core/Scripting/Useful_string_methods) für Hilfe oder noch besser die Sektion im Artikel über [Konvertieren zwischen Zeichenketten und Arrays](#konvertieren_zwischen_zeichenketten_und_arrays).
5. Als Teil der oben genannten Codezeile möchten Sie auch, dass Sie den Preis von einer Zeichenkette in eine Zahl konvertieren. Wenn Sie sich nicht mehr erinnern, wie dies geht, werfen Sie einen Blick auf den [ersten Strings-Artikel](/de/docs/Learn_web_development/Core/Scripting/Strings#numbers_vs._strings).
6. Es gibt eine Variable namens `total`, die am Anfang des Codes erstellt wird und den Wert `0` erhält. Innerhalb der Schleife (unter `// Part 4`) möchten wir, dass Sie eine Zeile hinzufügen, die den Preis des aktuellen Elements bei jedem Durchlauf der Schleife zu diesem Gesamtwert hinzufügt, sodass am Ende des Codes der korrekte Gesamtbetrag auf die Rechnung gedruckt wird. Sie benötigen möglicherweise einen [Zuweisungsoperator](/de/docs/Learn_web_development/Core/Scripting/Math#assignment_operators), um dies zu tun.
7. Wir möchten, dass Sie die nächste Zeile nach `// Part 5` ändern, sodass die Variable `itemText` gleich "aktueller Artikelname — $ aktueller Artikelpreis" gesetzt wird, zum Beispiel "Schuhe — $23.99" in jedem Fall, sodass die korrekten Informationen für jedes Element auf die Rechnung gedruckt werden. Dies ist eine grundlegende Zeichenkettenverknüpfung, die Ihnen vertraut sein sollte, wenn Sie das Lernmaterial bisher verfolgt haben.
8. Schließlich müssen Sie unter dem Kommentar `// Part 6` ein `}` hinzufügen, um das Ende der `for...of()`-Schleife zu markieren.

Wenn Sie einen Fehler machen, können Sie Ihre Arbeit mit der Schaltfläche _Reset_ im MDN Playground löschen. Wenn Sie wirklich feststecken, können Sie die Lösung unterhalb der Live-Ausgabe anzeigen.

```html hidden live-sample___arrays-1
<h2>Live output</h2>

<div class="output">
  <ul></ul>

  <p></p>
</div>
```

```css hidden live-sample___arrays-1
.output {
  min-height: 100px;
}
```

```js live-sample___arrays-1
const list = document.querySelector(".output ul");
const totalBox = document.querySelector(".output p");
let total = 0;
list.textContent = "";
totalBox.textContent = "";
// Part 1
// ("Underpants:6.99");
// ("Socks:5.99");
// ("T-shirt:14.99");
// ("Trousers:31.99");
// ("Shoes:23.99");

// Part 2

// Part 3

// Part 4

// Part 5
let itemText = 0;

const listItem = document.createElement("li");
listItem.textContent = itemText;
list.appendChild(listItem);

// Part 6

totalBox.textContent = "Total: $" + total.toFixed(2);
```

{{ EmbedLiveSample("arrays-1", "100%", 200) }}

<details>
<summary>Klicken Sie hier, um die Lösung anzuzeigen</summary>

Ihr fertiges JavaScript sollte so aussehen:

```js
const list = document.querySelector(".output ul");
const totalBox = document.querySelector(".output p");
let total = 0;
list.textContent = "";
totalBox.textContent = "";

const products = [
  "Underpants:6.99",
  "Socks:5.99",
  "T-shirt:14.99",
  "Trousers:31.99",
  "Shoes:23.99",
];

for (const product of products) {
  const subArray = product.split(":");
  const name = subArray[0];
  const price = Number(subArray[1]);
  total += price;
  const itemText = `${name} — $${price}`;

  const listItem = document.createElement("li");
  listItem.textContent = itemText;
  list.appendChild(listItem);
}

totalBox.textContent = `Total: $${total.toFixed(2)}`;
```

</details>

## Speicherung der letzten 5 Suchanfragen

Lassen Sie uns eine andere Übung vervollständigen, um die Praxis am Laufen zu halten.

Eine gute Verwendung für Array-Methoden wie {{jsxref("Array.prototype.push()","push()")}} und {{jsxref("Array.prototype.pop()","pop()")}} besteht darin, einen Datensatz von aktuell aktiven Elementen in einer Web-App zu pflegen. In einer animierten Szene könnten Sie beispielsweise ein Array von Objekten haben, die die derzeit angezeigten Hintergrundgrafiken darstellen, und Sie möchten möglicherweise gleichzeitig nur 50 anzeigen, aus Leistungs- oder Unübersichtlichkeitsgründen. Während neue Objekte erstellt und dem Array hinzugefügt werden, können ältere aus dem Array gelöscht werden, um die gewünschte Anzahl beizubehalten.

In diesem Beispiel zeigen wir Ihnen eine viel einfachere Anwendung — hier geben wir Ihnen eine gefälschte Suchseite mit einer Suchbox. Die Idee ist, dass, wenn Begriffe in die Suchbox eingegeben werden, die obersten 5 vorherigen Suchbegriffe in der Liste angezeigt werden. Wenn die Anzahl der Begriffe 5 überschreitet, beginnt der letzte Begriff jedes Mal gelöscht zu werden, wenn ein neuer Begriff oben hinzugefügt wird, sodass immer die 5 vorherigen Begriffe angezeigt werden.

> [!NOTE]
> In einer echten Suchanwendung könnten Sie wahrscheinlich auf die vorherigen Suchbegriffe klicken, um zu früheren Suchanfragen zurückzukehren, und es würden tatsächliche Suchergebnisse angezeigt! Wir halten es für den Moment einfach.

Um das Beispiel abzuschließen, müssen Sie:

1. Klicken Sie auf **"Play"** im folgenden Codeblock, um das Beispiel im MDN Playground zu bearbeiten.
2. Fügen Sie eine Zeile unter dem Kommentar `// Part 1` hinzu, die den aktuellen Wert, der in das Suchfeld eingegeben wurde, am Anfang des Arrays hinzufügt. Dieser Wert kann mit `searchInput.value` abgerufen werden.
3. Fügen Sie eine Zeile unter dem Kommentar `// Part 2` hinzu, die den Wert entfernt, der sich derzeit am Ende des Arrays befindet.

Wenn Sie einen Fehler machen, können Sie Ihre Arbeit mit der Schaltfläche _Reset_ im MDN Playground löschen. Wenn Sie wirklich feststecken, können Sie die Lösung unterhalb der Live-Ausgabe anzeigen.

```html hidden live-sample___arrays-2
<div class="output">
  <label for="search-box">Enter a search term: </label>
  <input id="search-box" type="search" />
  <button>Search</button>

  <ul></ul>
</div>
```

```css hidden live-sample___arrays-2
.output {
  margin: 1rem;
}
```

```js live-sample___arrays-2
const list = document.querySelector(".output ul");
const searchInput = document.querySelector(".output input");
const searchBtn = document.querySelector(".output button");

list.textContent = "";

const myHistory = [];
const MAX_HISTORY = 5;

searchBtn.addEventListener("click", () => {
  // we will only allow a term to be entered if the search input isn't empty
  if (searchInput.value !== "") {
    // Part 1

    // empty the list so that we don't display duplicate entries
    // the display is regenerated every time a search term is entered.
    list.textContent = "";

    // loop through the array, and display all the search terms in the list
    for (const itemText of myHistory) {
      const listItem = document.createElement("li");
      listItem.textContent = itemText;
      list.appendChild(listItem);
    }

    // If the array length is 5 or more, remove the oldest search term
    if (myHistory.length >= MAX_HISTORY) {
      // Part 2
    }

    // empty the search input and focus it, ready for the next term to be entered
    searchInput.value = "";
    searchInput.focus();
  }
});
```

{{ EmbedLiveSample("arrays-2", "100%", 200) }}

<details>
<summary>Klicken Sie hier, um die Lösung anzuzeigen</summary>

Ihr fertiges JavaScript sollte so aussehen:

```js
const list = document.querySelector(".output ul");
const searchInput = document.querySelector(".output input");
const searchBtn = document.querySelector(".output button");

list.textContent = "";

const myHistory = [];
const MAX_HISTORY = 5;

searchBtn.addEventListener("click", () => {
  // we will only allow a term to be entered if the search input isn't empty
  if (searchInput.value !== "") {
    myHistory.unshift(searchInput.value);

    // empty the list so that we don't display duplicate entries
    // the display is regenerated every time a search term is entered.
    list.textContent = "";

    // loop through the array, and display all the search terms in the list
    for (const itemText of myHistory) {
      const listItem = document.createElement("li");
      listItem.textContent = itemText;
      list.appendChild(listItem);
    }

    // If the array length is 5 or more, remove the oldest search term
    if (myHistory.length >= MAX_HISTORY) {
      myHistory.pop();
    }

    // empty the search input and focus it, ready for the next term to be entered
    searchInput.value = "";
    searchInput.focus();
  }
});
```

</details>

## Testen Sie Ihre Fähigkeiten!

Sie haben das Ende dieses Artikels erreicht, aber können Sie sich an die wichtigsten Informationen erinnern? Sie finden einige weitere Tests, um zu überprüfen, ob Sie diese Informationen behalten haben, bevor Sie fortfahren — siehe [Testen Sie Ihre Fähigkeiten: Arrays](/de/docs/Learn_web_development/Core/Scripting/Test_your_skills/Arrays).

## Fazit

Nachdem Sie diesen Artikel durchgelesen haben, werden Sie sicherlich zustimmen, dass Arrays ziemlich nützlich erscheinen; Sie werden sie überall in JavaScript antreffen, oft in Verbindung mit Schleifen, um dieselbe Aktion auf jedes Element in einem Array auszuführen. Später im Modul werden wir Ihnen alles über Schleifen beibringen.

Im nächsten Artikel bieten wir Ihnen eine Herausforderung, um Ihr Verständnis der vorhergehenden Artikel zu testen.

## Siehe auch

- {{jsxref("Array")}}
  - : Die `Array` Objekt-Referenzseite bietet einen detaillierten Leitfaden zu den auf dieser Seite besprochenen Funktionen und vielen anderen `Array` Funktionen.

{{PreviousMenuNext("Learn_web_development/Core/Scripting/Useful_string_methods", "Learn_web_development/Core/Scripting/Silly_story_generator", "Learn_web_development/Core/Scripting")}}
