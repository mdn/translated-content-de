---
title: Arrays
slug: Learn_web_development/Core/Scripting/Arrays
l10n:
  sourceCommit: 594ae0d4ffb6326a9529fe366d30ca633309ee30
---

{{PreviousMenuNext("Learn_web_development/Core/Scripting/Useful_string_methods", "Learn_web_development/Core/Scripting/Silly_story_generator", "Learn_web_development/Core/Scripting")}}

In dieser Lektion betrachten wir Arrays – eine elegante Möglichkeit, eine Liste von Datenobjekten unter einem einzigen Variablennamen zu speichern. Wir schauen uns an, warum dies nützlich ist, und erkunden, wie man ein [Array](/de/docs/Web/JavaScript/Reference/Global_Objects/Array) erstellt, Elemente in einem Array abruft, hinzufügt und entfernt und mehr.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>Ein Verständnis von <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a> und den <a href="/de/docs/Learn_web_development/Core/Styling_basics">Grundlagen von CSS</a>. Vertrautheit mit grundlegenden Datentypen wie Zahlen und Strings, wie in den vorherigen Lektionen behandelt.</td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Was ein Array ist – eine Struktur, die eine Liste von Variablen enthält.</li>
          <li>Die Syntax von Arrays – <code>[a, b, c]</code> und die Zugriffssyntax, <code>myArray[x]</code>.</li>
          <li>Ändern von Array-Werten mit <code>myArray[x] = y</code>.</li>
          <li>Array-Manipulation mit häufigen Eigenschaften und Methoden wie <code>length</code>, <code>push()</code>, <code>pop()</code>, <code>join()</code> und <code>split()</code>.</li>
          <li>Erweiterte Array-Methoden wie <code>forEach()</code>, <code>map()</code> und <code>filter()</code>.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Was ist ein Array?

Arrays werden allgemein als "list-like objects" beschrieben; sie sind im Grunde einzelne Objekte, die mehrere Werte in einer Liste enthalten. Array-Objekte können in Variablen gespeichert und fast genauso behandelt werden wie jeder andere Werttyp, mit dem Unterschied, dass wir jeden Wert in der Liste einzeln abrufen können und super nützliche und effiziente Dinge mit der Liste tun können, wie sie durchlaufen und das Gleiche für jeden Wert tun. Vielleicht haben wir eine Reihe von Produktartikeln und deren Preisen in einem Array gespeichert und wollen sie alle durchlaufen und auf einer Rechnung ausdrucken, während wir alle Preise zusammenzählen und den Gesamtpreis am Ende ausdrucken.

Wenn wir keine Arrays hätten, müssten wir jeden Artikel in einer separaten Variablen speichern und den Code, der das Drucken und Hinzufügen durchführt, für jeden Artikel separat aufrufen. Dies wäre viel länger zu schreiben, weniger effizient und fehleranfälliger. Bei 10 Artikeln, die zur Rechnung hinzugefügt werden müssen, wäre es bereits nervig, aber was ist mit 100 Artikeln oder 1000? Wir werden später im Artikel auf dieses Beispiel zurückkommen.

Wie in früheren Artikeln, lernen wir die wirklichen Grundlagen von Arrays, indem wir einige Beispiele in die [Browser-Entwicklungskonsole](/de/docs/Learn_web_development/Howto/Tools_and_setup/What_are_browser_developer_tools) eingeben.

> [!NOTE]
> Scrimbas [Aside: Intro to arrays](https://scrimba.com/the-frontend-developer-career-path-c0j/~06e?via=mdn) scrim <sup>[_MDN learning partner_](/de/docs/MDN/Writing_guidelines/Learning_content#partner_links_and_embeds)</sup> bietet eine nützliche interaktive Einführung in Arrays mit Beispiel-Walkthroughs und einer Herausforderung, um Ihr Wissen zu testen.

## Erstellen von Arrays

Arrays bestehen aus eckigen Klammern und durch Kommas getrennten Elementen.

1. Angenommen, wir wollen eine Einkaufsliste in einem Array speichern. Fügen Sie den folgenden Code in die Konsole ein:

   ```js
   const shopping = ["bread", "milk", "cheese", "hummus", "noodles"];
   console.log(shopping);
   ```

2. Im obigen Beispiel ist jedes Element ein String, aber in einem Array können wir verschiedene Datentypen speichern – Strings, Zahlen, Objekte und sogar andere Arrays. Wir können auch Datentypen in einem einzigen Array mischen – wir müssen uns nicht darauf beschränken, nur Zahlen in einem Array zu speichern und in einem anderen nur Strings. Zum Beispiel:

   ```js
   const sequence = [1, 1, 2, 3, 5, 8, 13];
   const random = ["tree", 795, [0, 1, 2]];
   ```

3. Bevor Sie fortfahren, erstellen Sie einige Beispiel-Arrays.

## Die Länge eines Arrays herausfinden

Sie können die Länge eines Arrays (wie viele Elemente es enthält) auf genau die gleiche Weise herausfinden, wie Sie die Länge (in Zeichen) eines Strings herausfinden – durch Verwendung der {{jsxref("Array.prototype.length","length")}} Eigenschaft. Versuchen Sie Folgendes:

```js
const shopping = ["bread", "milk", "cheese", "hummus", "noodles"];
console.log(shopping.length); // 5
```

## Zugriff auf Array-Elemente und deren Veränderung

Arrays sind [indexierte Sammlungen](/de/docs/Web/JavaScript/Guide/Indexed_collections). Elemente in einem Array sind nummeriert, beginnend bei Null. Diese Zahl wird _Index_ des Elements genannt. Also hat das erste Element den Index 0, das zweite den Index 1 und so weiter. Sie können einzelne Elemente im Array mit der Klammernotation und dem Angeben des Index des Elements abrufen, auf die gleiche Weise, wie Sie auf die Buchstaben in einem String [zugegriffen](/de/docs/Learn_web_development/Core/Scripting/Useful_string_methods#retrieving_a_specific_string_character) haben.

1. Geben Sie in Ihrer Konsole Folgendes ein:

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
   > Wir haben es schon einmal gesagt, aber nur zur Erinnerung – JavaScript beginnt mit dem Indexieren von Arrays bei null!

3. Beachten Sie, dass ein Array innerhalb eines Arrays als mehrdimensionales Array bezeichnet wird. Sie können auf ein Element innerhalb eines Arrays, das sich selbst in einem anderen Array befindet, zugreifen, indem Sie zwei Sätze von eckigen Klammern miteinander verketten. Um zum Beispiel auf eines der Elemente innerhalb des Arrays zuzugreifen, das das dritte Element im `random`-Array (siehe vorheriger Abschnitt) ist, könnten wir Folgendes tun:

   ```js
   const random = ["tree", 795, [0, 1, 2]];
   random[2][2];
   ```

4. Versuchen Sie, einige weitere Änderungen an Ihren Array-Beispielen vorzunehmen, bevor Sie fortfahren. Spielen Sie ein wenig herum und sehen Sie, was funktioniert und was nicht.

## Den Index von Elementen in einem Array finden

Wenn Sie den Index eines Elements nicht kennen, können Sie die Methode {{jsxref("Array.prototype.indexOf()","indexOf()")}} verwenden.
Die `indexOf()`-Methode nimmt ein Element als Argument und gibt entweder den Index des Elements oder `-1` zurück, wenn das Element nicht im Array enthalten ist:

```js
const birds = ["Parrot", "Falcon", "Owl"];
console.log(birds.indexOf("Owl")); //  2
console.log(birds.indexOf("Rabbit")); // -1
```

## Elemente hinzufügen

Um ein oder mehrere Elemente am Ende eines Arrays hinzuzufügen, können wir {{jsxref("Array.prototype.push()","push()")}} verwenden. Beachten Sie, dass Sie ein oder mehrere Elemente, die Sie hinzufügen möchten, am Ende Ihres Arrays einfügen müssen.

```js
const cities = ["Manchester", "Liverpool"];
cities.push("Cardiff");
console.log(cities); // [ "Manchester", "Liverpool", "Cardiff" ]
cities.push("Bradford", "Brighton");
console.log(cities); // [ "Manchester", "Liverpool", "Cardiff", "Bradford", "Brighton" ]
```

Die neue Länge des Arrays wird zurückgegeben, wenn der Methodenaufruf abgeschlossen ist. Wenn Sie die neue Array-Länge in einer Variablen speichern möchten, könnten Sie etwas wie folgt tun:

```js
const cities = ["Manchester", "Liverpool"];
const newLength = cities.push("Bristol");
console.log(cities); // [ "Manchester", "Liverpool", "Bristol" ]
console.log(newLength); // 3
```

Um ein Element an den Anfang des Arrays hinzuzufügen, verwenden Sie {{jsxref("Array.prototype.unshift()","unshift()")}}:

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

In diesem Aufruf von `splice()` gibt das erste Argument an, von wo aus das Entfernen der Elemente beginnen soll, und das zweite Argument gibt an, wie viele Elemente entfernt werden sollen. So können Sie mehr als ein Element entfernen:

```js
const cities = ["Manchester", "Liverpool", "Edinburgh", "Carlisle"];
const index = cities.indexOf("Liverpool");
if (index !== -1) {
  cities.splice(index, 2);
}
console.log(cities); // [ "Manchester", "Carlisle" ]
```

## Auf alle Elemente zugreifen

Sehr oft möchten Sie auf jedes Element im Array zugreifen. Dies können Sie mit der Anweisung {{jsxref("statements/for...of","for...of")}} tun:

```js
const birds = ["Parrot", "Falcon", "Owl"];

for (const bird of birds) {
  console.log(bird);
}
```

Manchmal möchten Sie jedem Element in einem Array dasselbe tun, sodass Sie ein Array erhalten, das die geänderten Elemente enthält. Dies können Sie mit {{jsxref("Array.prototype.map()","map()")}} tun. Der folgende Code nimmt ein Array von Zahlen und verdoppelt jede Zahl:

```js
function double(number) {
  return number * 2;
}
const numbers = [5, 2, 7, 6];
const doubled = numbers.map(double);
console.log(doubled); // [ 10, 4, 14, 12 ]
```

Wir geben eine Funktion an `map()`, und `map()` ruft die Funktion einmal für jedes Element im Array auf und übergibt das Element. Anschließend fügt es den Rückgabewert jedes Funktionsaufrufs zu einem neuen Array hinzu und gibt schließlich das neue Array zurück.

Manchmal möchten Sie ein neues Array erstellen, das nur die Elemente im ursprünglichen Array enthält, die einem bestimmten Test entsprechen. Dies können Sie mit {{jsxref("Array.prototype.filter()","filter()")}} tun. Der folgende Code nimmt ein Array von Zeichenfolgen und gibt ein Array zurück, das nur die Zeichenfolgen enthält, die länger als 8 Zeichen sind:

```js
function isLong(city) {
  return city.length > 8;
}
const cities = ["London", "Liverpool", "Totnes", "Edinburgh"];
const longer = cities.filter(isLong);
console.log(longer); // [ "Liverpool", "Edinburgh" ]
```

Ähnlich wie bei `map()`, geben wir eine Funktion an die `filter()`-Methode, und `filter()` ruft diese Funktion für jedes Element im Array auf und übergibt das Element. Wenn die Funktion `true` zurückgibt, wird das Element zu einem neuen Array hinzugefügt. Schließlich gibt es das neue Array zurück.

## Konvertieren zwischen Strings und Arrays

Häufig werden Sie mit Rohdaten konfrontiert, die in einem großen langen String enthalten sind, und Sie möchten möglicherweise die nützlichen Elemente in eine nützlichere Form trennen und dann etwas mit ihnen tun, wie sie in einer Datentabelle anzuzeigen. Dazu können wir die {{jsxref("String.prototype.split()","split()")}}-Methode verwenden. In ihrer einfachsten Form nimmt diese einen einzigen Parameter – das Zeichen, an dem Sie den String trennen möchten – und gibt die Teilstrings zwischen dem Trennzeichen als Elemente in einem Array zurück.

> [!NOTE]
> Okay, das ist technisch gesehen eine String-Methode, keine Array-Methode, aber wir haben sie zu den Arrays hinzugefügt, da sie hier gut passt.

1. Lassen Sie uns damit spielen, um zu sehen, wie es funktioniert. Erstellen Sie zuerst einen String in Ihrer Konsole:

   ```js
   const data = "Manchester,London,Liverpool,Birmingham,Leeds,Carlisle";
   ```

2. Lassen Sie uns nun bei jedem Komma trennen:

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

4. Sie können auch den umgekehrten Weg gehen, indem Sie die {{jsxref("Array.prototype.join()","join()")}}-Methode verwenden. Versuchen Sie Folgendes:

   ```js
   const commaSeparated = cities.join(",");
   commaSeparated;
   ```

5. Eine andere Möglichkeit, ein Array in einen String zu konvertieren, ist die Verwendung der {{jsxref("Array.prototype.toString()","toString()")}}-Methode. `toString()` ist wohl einfacher als `join()`, da es keinen Parameter benötigt, aber eingeschränkter. Mit `join()` können Sie verschiedene Trennzeichen angeben, während `toString()` immer ein Komma verwendet. (Versuchen Sie, Schritt 4 mit einem anderen Zeichen als einem Komma auszuführen.)

   ```js
   const dogNames = ["Rocket", "Flash", "Bella", "Slugger"];
   dogNames.toString(); // Rocket,Flash,Bella,Slugger
   ```

## Diese Produkte drucken

Es ist Ihre Aufgabe. Bei dieser Übung kehren Sie zu dem Beispiel zurück, das wir zuvor beschrieben haben – Produktnamen und Preise auf einer Rechnung drucken und dann die Preise zusammenzählen und sie unten ausdrucken. Befolgen Sie die folgenden Schritte, um die Logik dafür umzusetzen.

1. Klicken Sie auf **"Play"** im unten stehenden Codeblock, um das Beispiel im MDN Playground zu bearbeiten.
2. Unter dem Kommentar `// Part 1` befinden sich mehrere Strings, von denen jeder einen Produktnamen und Preis enthält, getrennt durch einen Doppelpunkt. Wir möchten, dass Sie diese auskommentieren und in ein Array namens `products` umwandeln.
3. Unter dem Kommentar `// Part 2` starten Sie eine `for...of()` Schleife, um jedes Element im `products`-Array zu durchlaufen.
4. Unter dem Kommentar `// Part 3` möchten wir, dass Sie eine Codezeile schreiben, die das aktuelle Array-Element (`Name:Preis`) in zwei separate Elemente aufspaltet, eines mit dem Namen und eines mit dem Preis. Wenn Sie nicht wissen, wie das geht, konsultieren Sie den Artikel [Nützliche String-Methoden](/de/docs/Learn_web_development/Core/Scripting/Useful_string_methods) für Hilfe oder, noch besser, sehen Sie sich den Abschnitt [Konvertieren zwischen Strings und Arrays](#konvertieren_zwischen_strings_und_arrays) dieses Artikels an.
5. Im Rahmen der oben genannten Codezeile möchten Sie auch den Preis von einem String in eine Zahl umwandeln. Wenn Sie sich nicht erinnern können, wie das geht, lesen Sie den [ersten String-Artikel](/de/docs/Learn_web_development/Core/Scripting/Strings#numbers_vs._strings).
6. Am Anfang des Codes wird eine Variable namens `total` erstellt und auf `0` gesetzt. Innerhalb der Schleife (unter `// Part 4`) möchten wir, dass Sie eine Zeile hinzufügen, die in jeder Iteration der Schleife den aktuellen Elementpreis zu diesem Gesamtwert hinzufügt, damit am Ende des Codes der richtige Gesamtwert auf der Rechnung gedruckt wird. Möglicherweise benötigen Sie einen [Zuweisungsoperator](/de/docs/Learn_web_development/Core/Scripting/Math#assignment_operators), um dies zu tun.
7. Wir möchten, dass Sie die nächste Zeile nach `// Part 5` ändern, damit die Variable `itemText` gleich "aktueller Elementname – $aktueller Elementpreis" ist, z.B. "Schuhe – $23.99" in jedem Fall, sodass die korrekten Informationen für jedes Element auf der Rechnung gedruckt werden. Dies ist eine grundlegende Zeichenfolgenverkettung, die Ihnen bekannt sein sollte, wenn Sie dem Lernmaterial bisher gefolgt sind.
8. Schließlich müssen Sie unter dem Kommentar `// Part 6` eine `}` hinzufügen, um das Ende der `for...of()` Schleife zu markieren.

Wenn Sie einen Fehler machen, können Sie Ihre Arbeit mit der _Zurücksetzen_-Schaltfläche im MDN Playground leeren. Wenn Sie wirklich feststecken, können Sie die Lösung unter der Live-Ausgabe einsehen.

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
// "Underpants:6.99",
// "Socks:5.99",
// "T-shirt:14.99",
// "Trousers:31.99",
// "Shoes:23.99",

// Part 2

// Part 3

// Part 4

// Part 5
let itemText = 0;

const listItem = document.createElement("li");
listItem.textContent = itemText;
list.appendChild(listItem);

// Part 6

totalBox.textContent = `Total: $${total.toFixed(2)}`;
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

## Die letzten 5 Suchen speichern

Lassen Sie uns eine weitere Übung abschließen, um die Praxis fortzusetzen.

Ein guter Verwendungszweck für Array-Methoden wie {{jsxref("Array.prototype.push()","push()")}} und {{jsxref("Array.prototype.pop()","pop()")}} besteht darin, ein Protokoll der aktuell aktiven Elemente in einer Webanwendung zu pflegen. In einer animierten Szene könnten Sie zum Beispiel ein Array von Objekten haben, das die aktuell angezeigten Hintergrundgrafiken darstellt, und Sie möchten möglicherweise nur 50 gleichzeitig anzeigen, aus Leistungs- oder Unübersichtlichkeitsgründen. Während neue Objekte erstellt und dem Array hinzugefügt werden, können ältere aus dem Array gelöscht werden, um die gewünschte Anzahl beizubehalten.

In diesem Beispiel werden wir eine viel einfachere Nutzung zeigen – hier geben wir Ihnen eine gefälschte Suchseite mit einem Suchfeld. Die Idee ist, dass wenn Begriffe in das Suchfeld eingegeben werden, die obersten 5 vorherigen Suchbegriffe in der Liste angezeigt werden. Wenn die Anzahl der Begriffe über 5 steigt, beginnt jeder neue Begriff, der oben hinzugefügt wird, den letzten Begriff zu löschen, sodass immer die 5 vorherigen Begriffe angezeigt werden.

> [!NOTE]
> In einer echten Suchanwendung könnten Sie wahrscheinlich auf die vorherigen Suchbegriffe klicken, um zu vorherigen Suchvorgängen zurückzukehren, und es würde tatsächlich Suchergebnisse anzeigen! Wir halten es vorerst einfach.

Um das Beispiel abzuschließen, müssen Sie:

1. Klicken Sie auf **"Play"** im unten stehenden Codeblock, um das Beispiel im MDN Playground zu bearbeiten.
2. Fügen Sie eine Zeile unter dem Kommentar `// Part 1` hinzu, die den aktuell in das Suchfeld eingegebenen Wert am Anfang des Arrays hinzufügt. Dieser kann mit `searchInput.value` abgerufen werden.
3. Fügen Sie eine Zeile unter dem Kommentar `// Part 2` hinzu, die den Wert entfernt, der sich derzeit am Ende des Arrays befindet.

Wenn Sie einen Fehler machen, können Sie Ihre Arbeit mit der _Zurücksetzen_-Schaltfläche im MDN Playground leeren. Wenn Sie wirklich feststecken, können Sie die Lösung unter der Live-Ausgabe einsehen.

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

## Testen Sie Ihr Können!

Sie haben das Ende dieses Artikels erreicht, aber können Sie sich die wichtigsten Informationen merken? Sie finden einige weitere Tests, um zu überprüfen, ob Sie diese Informationen behalten haben, bevor Sie weitermachen – siehe [Testen Sie Ihr Können: Arrays](/de/docs/Learn_web_development/Core/Scripting/Test_your_skills/Arrays).

## Fazit

Nachdem Sie diesen Artikel durchgelesen haben, sind wir sicher, dass Sie zustimmen werden, dass Arrays ziemlich nützlich erscheinen; Sie werden sehen, dass sie überall in JavaScript auftauchen, oft in Verbindung mit Schleifen, um dasselbe für jedes Element in einem Array zu tun. Wir werden Ihnen später im Modul alles über Schleifen beibringen.

Im nächsten Artikel geben wir Ihnen eine Herausforderung, um Ihr Verständnis der zuvor behandelten Artikel zu testen.

## Siehe auch

- {{jsxref("Array")}}
  - : Die Referenzseite zum `Array`-Objekt bietet einen detaillierten Leitfaden zu den auf dieser Seite besprochenen Funktionen und vielen anderen `Array`-Funktionen.

{{PreviousMenuNext("Learn_web_development/Core/Scripting/Useful_string_methods", "Learn_web_development/Core/Scripting/Silly_story_generator", "Learn_web_development/Core/Scripting")}}
