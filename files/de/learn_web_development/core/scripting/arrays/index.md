---
title: Arrays
slug: Learn_web_development/Core/Scripting/Arrays
l10n:
  sourceCommit: 0abb70602b0b3b11a2909c417a03e10eabd607a8
---

{{PreviousMenuNext("Learn_web_development/Core/Scripting/Test_your_skills/Strings", "Learn_web_development/Core/Scripting/Test_your_skills/Arrays", "Learn_web_development/Core/Scripting")}}

In dieser Lektion werden wir uns mit Arrays befassen — eine geschickte Methode, um eine Liste von Daten unter einem einzelnen Variablennamen zu speichern. Wir sehen uns an, warum dies nützlich ist, und erkunden dann, wie man ein [Array](/de/docs/Web/JavaScript/Reference/Global_Objects/Array) erstellt, auf die darin gespeicherten Elemente zugreift, sie hinzufügt und entfernt, und noch mehr.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>Ein Verständnis von <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a> und den <a href="/de/docs/Learn_web_development/Core/Styling_basics">Grundlagen von CSS</a>. Vertrautheit mit grundlegenden Datentypen wie Zahlen und Zeichenfolgen, wie in den vorherigen Lektionen behandelt.</td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Was ein Array ist — eine Struktur, die eine Liste von Variablen enthält.</li>
          <li>Die Syntax von Arrays — <code>[a, b, c]</code> und die Zugriffssyntax, <code>myArray[x]</code>.</li>
          <li>Ändern von Array-Werten mit <code>myArray[x] = y</code>.</li>
          <li>Array-Manipulation mit gängigen Eigenschaften und Methoden wie <code>length</code>, <code>push()</code>, <code>pop()</code>, <code>join()</code> und <code>split()</code>.</li>
          <li>Erweiterte Array-Methoden wie <code>forEach()</code>, <code>map()</code> und <code>filter()</code>.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Was ist ein Array?

Arrays werden allgemein als "listenartige Objekte" beschrieben; im Wesentlichen sind sie einzelne Objekte, die mehrere Werte in einer Liste enthalten. Array-Objekte können in Variablen gespeichert und ähnlich wie andere Werttypen behandelt werden, mit dem Unterschied, dass wir auf jeden Wert in der Liste einzeln zugreifen können und nützliche und effiziente Dinge mit der Liste tun können, wie sie durchlaufen und dasselbe auf jeden Wert anwenden. Vielleicht haben wir eine Reihe von Produktartikeln und deren Preise in einem Array gespeichert, und wir wollen sie alle durchlaufen und auf einer Rechnung ausdrucken, während wir alle Preise zusammenzählen und den Gesamtpreis unten ausgeben.

Ohne Arrays müssten wir jeden Artikel in einer separaten Variablen speichern und den Code, der für das Drucken und Addieren zuständig ist, für jeden Artikel separat aufrufen. Dies wäre viel länger zum Schreiben, weniger effizient und fehleranfälliger. Wenn wir 10 Artikel zur Rechnung hinzufügen müssten, wäre das schon lästig, aber was ist mit 100 Artikel oder 1000? Wir kehren später in diesem Artikel zu diesem Beispiel zurück.

Wie in vorherigen Artikeln, lernen wir die echten Grundlagen von Arrays, indem wir einige Beispiele in die [Entwicklerkonsole des Browsers](/de/docs/Learn_web_development/Howto/Tools_and_setup/What_are_browser_developer_tools) eingeben.

> [!NOTE]
> Scrimbas [Nebenbei: Einführung in Arrays](https://scrimba.com/the-frontend-developer-career-path-c0j/~06e?via=mdn) Scrim <sup>[_MDN Lernpartner_](/de/docs/MDN/Writing_guidelines/Learning_content#partner_links_and_embeds)</sup> bietet eine nützliche interaktive Einführung in Arrays mit Beispielerläuterungen und einer Herausforderung zum Testen Ihres Wissens.

## Erstellen von Arrays

Arrays bestehen aus eckigen Klammern und Elementen, die durch Kommata getrennt sind.

1. Nehmen wir an, wir möchten eine Einkaufsliste in einem Array speichern. Fügen Sie den folgenden Code in die Konsole ein:

   ```js
   const shopping = ["bread", "milk", "cheese", "hummus", "noodles"];
   console.log(shopping);
   ```

2. Im obigen Beispiel ist jedes Element eine Zeichenfolge, aber in einem Array können wir verschiedene Datentypen speichern — Zeichenfolgen, Zahlen, Objekte und sogar andere Arrays. Wir können auch Datentypen in einem einzigen Array mischen — wir müssen uns nicht darauf beschränken, nur Zahlen in einem Array zu speichern und in einem anderen nur Zeichenfolgen. Zum Beispiel:

   ```js
   const sequence = [1, 1, 2, 3, 5, 8, 13];
   const random = ["tree", 795, [0, 1, 2]];
   ```

3. Bevor Sie weitermachen, erstellen Sie einige Beispiel-Arrays.

## Die Länge eines Arrays ermitteln

Sie können die Länge eines Arrays herausfinden (wie viele Elemente es enthält), genau auf die gleiche Weise, wie Sie die Länge einer Zeichenfolge (in Zeichen) herausfinden — indem Sie die {{jsxref("Array.prototype.length","length")}} Eigenschaft verwenden. Versuchen Sie Folgendes:

```js
const shopping = ["bread", "milk", "cheese", "hummus", "noodles"];
console.log(shopping.length); // 5
```

## Zugriff und Modifizierung von Array-Elementen

Arrays sind [indizierte Sammlungen](/de/docs/Web/JavaScript/Guide/Indexed_collections). Elemente in einem Array sind nummeriert, beginnend bei null. Diese Zahl heißt _Index_ des Elements. Das erste Element hat also den Index 0, das zweite den Index 1 usw. Sie können auf einzelne Elemente im Array zugreifen, indem Sie die Klammernotation und den Index des Elements angeben, genauso wie Sie auf die Buchstaben in einer Zeichenfolge zugreifen [konnten](/de/docs/Learn_web_development/Core/Scripting/Useful_string_methods#retrieving_a_specific_string_character).

1. Geben Sie das Folgende in Ihre Konsole ein:

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
   > Wir haben es schon gesagt, aber nur zur Erinnerung — JavaScript beginnt Arrays bei null zu indizieren!

3. Beachten Sie, dass ein Array innerhalb eines Arrays als ein mehrdimensionales Array bezeichnet wird. Sie können auf ein Element innerhalb eines Arrays zugreifen, das sich selbst in einem anderen Array befindet, indem Sie zwei Sätze von eckigen Klammern zusammenkoppeln. Um beispielsweise auf eines der Elemente innerhalb des Arrays zuzugreifen, das das dritte Element im Array `random` ist (siehe vorheriger Abschnitt), könnten wir so etwas tun:

   ```js
   const random = ["tree", 795, [0, 1, 2]];
   random[2][2];
   ```

4. Versuchen Sie, einige weitere Änderungen an Ihren Array-Beispielen vorzunehmen, bevor Sie fortfahren. Experimentieren Sie ein wenig und sehen Sie, was funktioniert und was nicht.

## Den Index von Elementen in einem Array finden

Wenn Sie den Index eines Elements nicht kennen, können Sie die Methode {{jsxref("Array.prototype.indexOf()","indexOf()")}} verwenden. Die `indexOf()` Methode nimmt ein Element als Argument und gibt entweder den Index des Elements zurück oder `-1`, wenn das Element nicht im Array ist:

```js
const birds = ["Parrot", "Falcon", "Owl"];
console.log(birds.indexOf("Owl")); //  2
console.log(birds.indexOf("Rabbit")); // -1
```

## Hinzufügen von Elementen

Um ein oder mehrere Elemente am Ende eines Arrays hinzuzufügen, können wir {{jsxref("Array.prototype.push()","push()")}} verwenden. Beachten Sie, dass Sie ein oder mehrere Elemente, die Sie am Ende Ihres Arrays hinzufügen möchten, einschließen müssen.

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

## Entfernen von Elementen

Um das letzte Element aus dem Array zu entfernen, verwenden Sie {{jsxref("Array.prototype.pop()","pop()")}}.

```js
const cities = ["Manchester", "Liverpool"];
cities.pop();
console.log(cities); // [ "Manchester" ]
```

Die `pop()` Methode gibt das entfernte Element zurück. Um dieses Element in einer neuen Variablen zu speichern, könnten Sie dies tun:

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

Bei diesem Aufruf von `splice()` gibt das erste Argument an, wo mit dem Entfernen von Elementen begonnen werden soll, und das zweite Argument gibt an, wie viele Elemente entfernt werden sollen. So können Sie mehr als ein Element entfernen:

```js
const cities = ["Manchester", "Liverpool", "Edinburgh", "Carlisle"];
const index = cities.indexOf("Liverpool");
if (index !== -1) {
  cities.splice(index, 2);
}
console.log(cities); // [ "Manchester", "Carlisle" ]
```

## Auf alle Elemente zugreifen

Sehr oft möchten Sie auf jedes Element im Array zugreifen. Sie können dies mit der Anweisung {{jsxref("Statements/for...of","for...of")}} tun:

```js
const birds = ["Parrot", "Falcon", "Owl"];

for (const bird of birds) {
  console.log(bird);
}
```

Manchmal möchten Sie dasselbe mit jedem Element in einem Array tun, sodass Sie ein Array mit den geänderten Elementen erhalten. Sie können dies mit {{jsxref("Array.prototype.map()","map()")}} tun. Der folgende Code nimmt ein Array von Zahlen und verdoppelt jede Zahl:

```js
function double(number) {
  return number * 2;
}
const numbers = [5, 2, 7, 6];
const doubled = numbers.map(double);
console.log(doubled); // [ 10, 4, 14, 12 ]
```

Wir geben eine Funktion an `map()`, und `map()` ruft die Funktion einmal für jedes Element im Array auf und übergibt das Element. Dann fügt es den Rückgabewert jedes Funktionsaufrufs einem neuen Array hinzu und gibt schließlich das neue Array zurück.

Manchmal möchten Sie ein neues Array erstellen, das nur die Elemente im Original-Array enthält, die einem bestimmten Test entsprechen. Sie können dies mit {{jsxref("Array.prototype.filter()","filter()")}} tun. Der folgende Code nimmt ein Array von Zeichenfolgen und gibt ein Array zurück, das nur die Zeichenfolgen enthält, die länger als 8 Zeichen sind:

```js
function isLong(city) {
  return city.length > 8;
}
const cities = ["London", "Liverpool", "Totnes", "Edinburgh"];
const longer = cities.filter(isLong);
console.log(longer); // [ "Liverpool", "Edinburgh" ]
```

Wie bei `map()` geben wir eine Funktion an die `filter()` Methode, und `filter()` ruft diese Funktion für jedes Element im Array auf und übergibt das Element. Wenn die Funktion `true` zurückgibt, dann wird das Element einem neuen Array hinzugefügt. Schließlich wird das neue Array zurückgegeben.

## Umwandlung zwischen Zeichenfolgen und Arrays

Oft werden Sie mit einem Rohdatenblock konfrontiert, der in einer langen Zeichenfolge enthalten ist, und möglicherweise möchten Sie die nützlichen Elemente in eine nützlichere Form aufteilen und dann Dinge damit tun, wie sie in einer Datentabelle anzuzeigen. Hierfür können wir die Methode {{jsxref("String.prototype.split()","split()")}} verwenden. In ihrer einfachsten Form nimmt diese einen einzelnen Parameter, das Zeichen, bei dem Sie die Zeichenfolge trennen möchten, und gibt die Teilzeichenfolgen zwischen dem Trennzeichen als Elemente in einem Array zurück.

> [!NOTE]
> Okay, das ist technisch gesehen eine Zeichenfolgenmethode, keine Array-Methode, aber wir haben sie hier bei den Arrays aufgeführt, da sie gut dazu passt.

1. Lassen Sie uns damit herumspielen, um zu sehen, wie es funktioniert. Erstellen Sie zunächst eine Zeichenfolge in Ihrer Konsole:

   ```js
   const data = "Manchester,London,Liverpool,Birmingham,Leeds,Carlisle";
   ```

2. Jetzt lassen Sie uns sie bei jedem Komma trennen:

   ```js
   const cities = data.split(",");
   cities;
   ```

3. Versuchen Sie schließlich, die Länge Ihres neuen Arrays zu ermitteln und einige Elemente daraus abzurufen:

   ```js
   cities.length;
   cities[0]; // the first item in the array
   cities[1]; // the second item in the array
   cities[cities.length - 1]; // the last item in the array
   ```

4. Sie können auch den umgekehrten Weg gehen, indem Sie die Methode {{jsxref("Array.prototype.join()","join()")}} verwenden. Versuchen Sie Folgendes:

   ```js
   const commaSeparated = cities.join(",");
   commaSeparated;
   ```

5. Eine andere Möglichkeit, ein Array in eine Zeichenfolge zu konvertieren, ist die Methode {{jsxref("Array.prototype.toString()","toString()")}}. `toString()` ist arguably simpler als `join()`, da es keinen Parameter benötigt, aber beschränkter ist. Mit `join()` können Sie verschiedene Trennzeichen angeben, während `toString()` immer ein Komma verwendet. (Versuchen Sie, Schritt 4 mit einem anderen Zeichen als einem Komma auszuführen.)

   ```js
   const dogNames = ["Rocket", "Flash", "Bella", "Slugger"];
   dogNames.toString(); // Rocket,Flash,Bella,Slugger
   ```

## Diese Produkte drucken

Jetzt sind Sie dran. In dieser Übung kehren Sie zu dem von uns zuvor beschriebenen Beispiel zurück — das Drucken von Produktnamen und Preisen auf einer Rechnung, dann die Zusammenzählung der Preise und das Ausdrucken am Ende. Befolgen Sie die unten stehenden Schritte, um die Logik zu implementieren.

1. Klicken Sie im untenstehenden Codeblock auf **„Abspielen“**, um das Beispiel im MDN Playground zu bearbeiten.
2. Unterhalb des Kommentars `// Part 1` befinden sich eine Reihe von Zeichenfolgen, von denen jede einen Produktnamen und einen Preis enthält, getrennt durch einen Doppelpunkt. Wir möchten, dass Sie diese auskommentieren und in ein Array namens `products` umwandeln.
3. Unterhalb des Kommentars `// Part 2` starten Sie eine `for...of()` Schleife, um jedes Element im `products` Array durchzugehen.
4. Unterhalb des Kommentars `// Part 3` möchten wir, dass Sie eine Codezeile schreiben, die das aktuelle Array-Element (`name:price`) in zwei separate Elemente aufteilt, eines mit dem Namen und eines mit dem Preis. Wenn Sie nicht sicher sind, wie das geht, ziehen Sie den Artikel zu [nützlichen Zeichenfolgenmethoden](/de/docs/Learn_web_development/Core/Scripting/Useful_string_methods) zurate oder, noch besser, schauen Sie sich den Abschnitt [Umwandlung zwischen Zeichenfolgen und Arrays](#umwandlung_zwischen_zeichenfolgen_und_arrays) in diesem Artikel an.
5. Als Teil der obigen Codezeile möchten Sie auch den Preis von einem Zeichenfolgen- in einen Zahlentyp umwandeln. Wenn Sie sich nicht mehr daran erinnern, wie das geht, schauen Sie im [ersten Artikel über Zeichenfolgen](/de/docs/Learn_web_development/Core/Scripting/Strings#numbers_vs._strings) nach.
6. Es gibt eine Variable namens `total`, die am Anfang des Codes erstellt und auf `0` gesetzt wird. Innerhalb der Schleife (unter `// Part 4`) möchten wir, dass Sie eine Zeile hinzufügen, die den aktuellen Elementpreis in jeder Iteration der Schleife zu dieser Summe hinzufügt, sodass am Ende des Codes die korrekte Summe auf der Rechnung ausgegeben wird. Möglicherweise benötigen Sie hierfür einen [Zuweisungsoperator](/de/docs/Learn_web_development/Core/Scripting/Math#assignment_operators).
7. Wir möchten, dass Sie die nächste Zeile nach `// Part 5` ändern, damit die Variable `itemText` gleich "aktueller Artikelname — $aktueller Artikelpreis" ist, z. B. "Schuhe — $23.99" in jedem Fall, sodass die korrekten Informationen für jedes Item auf der Rechnung gedruckt werden. Dies ist eine grundlegende Zeichenfolgenverknüpfung, die Ihnen bekannt sein sollte, wenn Sie bisher dem Lernmaterial gefolgt sind.
8. Schließlich müssen Sie unterhalb des Kommentars `// Part 6` eine `}` hinzufügen, um das Ende der `for...of()` Schleife zu markieren.

Wenn Sie einen Fehler machen, können Sie Ihre Arbeit mit der Schaltfläche _Zurücksetzen_ im MDN Playground löschen. Wenn Sie wirklich feststecken, können Sie die Lösung unter der Live-Ausgabe anzeigen.

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

Lassen Sie uns, dass Sie eine weitere Übung abschließen, um die Praxis am Laufen zu halten.

Ein guter Anwendungsfall für Array-Methoden wie {{jsxref("Array.prototype.push()","push()")}} und {{jsxref("Array.prototype.pop()","pop()")}} ist, wenn Sie eine Aufzeichnung von derzeit aktiven Elementen in einer Webanwendung führen. In einer animierten Szene beispielsweise könnten Sie ein Array von Objekten haben, die die aktuell angezeigten Hintergrundgrafiken darstellen, und Sie möchten möglicherweise nur 50 gleichzeitig anzeigen, aus Leistungs- oder Unübersichtlichkeitsgründen. Wenn neue Objekte erstellt und dem Array hinzugefügt werden, können ältere aus dem Array gelöscht werden, um die gewünschte Anzahl beizubehalten.

In diesem Beispiel zeigen wir eine viel einfachere Verwendung — hier geben wir Ihnen eine gefälschte Suchseite mit einem Suchfeld. Die Idee besteht darin, dass, wenn Begriffe in das Suchfeld eingegeben werden, die Top 5 vorhergehenden Suchbegriffe in der Liste angezeigt werden. Wenn die Anzahl der Begriffe über 5 geht, beginnt der letzte Begriff bei jedem Hinzufügen eines neuen Begriffs oben gelöscht zu werden, sodass immer die 5 vorhergehenden Begriffe angezeigt werden.

> [!NOTE]
> In einer echten Suchanwendung könnten Sie wahrscheinlich auf die vorherigen Suchbegriffe klicken, um zu früheren Suchen zurückzukehren, und es würden tatsächliche Suchergebnisse angezeigt! Wir halten es jetzt nur einfach.

Um das Beispiel abzuschließen, müssen Sie:

1. Klicken Sie im untenstehenden Codeblock auf **„Abspielen“**, um das Beispiel im MDN Playground zu bearbeiten.
2. Fügen Sie eine Zeile unterhalb des Kommentars `// Part 1` hinzu, die den aktuellen Wert, der in das Suchfeld eingegeben wurde, am Anfang des Arrays hinzufügt. Dieser Wert kann mit `searchInput.value` abgerufen werden.
3. Fügen Sie eine Zeile unterhalb des Kommentars `// Part 2` hinzu, die den Wert entfernt, der sich derzeit am Ende des Arrays befindet.

Wenn Sie einen Fehler machen, können Sie Ihre Arbeit mit der Schaltfläche _Zurücksetzen_ im MDN Playground löschen. Wenn Sie wirklich feststecken, können Sie die Lösung unter der Live-Ausgabe anzeigen.

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

## Zusammenfassung

Nach dem Durchlesen dieses Artikels sind wir sicher, dass Sie zustimmen, dass Arrays ziemlich nützlich erscheinen; Sie werden sie überall in JavaScript sehen, oft in Verbindung mit Schleifen, um dasselbe für jedes Element in einem Array zu tun. Wir werden Ihnen im späteren Verlauf des Moduls alles über Schleifen beibringen.

Im nächsten Artikel geben wir Ihnen einige Tests, mit denen Sie überprüfen können, wie gut Sie das, was wir über Arrays vermittelt haben, verstanden und behalten haben.

## Siehe auch

- {{jsxref("Array")}}
  - : Die `Array` Objekt-Referenzseite bietet einen detaillierten Leitfaden zu den auf dieser Seite diskutierten Funktionen und vielen anderen `Array`-Funktionen.

{{PreviousMenuNext("Learn_web_development/Core/Scripting/Test_your_skills/Strings", "Learn_web_development/Core/Scripting/Test_your_skills/Arrays", "Learn_web_development/Core/Scripting")}}
