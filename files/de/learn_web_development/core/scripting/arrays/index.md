---
title: Arrays
slug: Learn_web_development/Core/Scripting/Arrays
l10n:
  sourceCommit: 5fad0829b5070d04993a57af8c276f5e35da3ed2
---

{{LearnSidebar}}

{{PreviousMenuNext("Learn_web_development/Core/Scripting/Useful_string_methods", "Learn_web_development/Core/Scripting/Silly_story_generator", "Learn_web_development/Core/Scripting")}}

In dieser Lektion betrachten wir Arrays — eine praktische Möglichkeit, eine Liste von Datenelementen unter einem einzigen Variablennamen zu speichern. Hier sehen wir, warum dies nützlich ist, dann erkunden wir, wie man ein Array erstellt, Elemente darin abruft, hinzufügt und entfernt und vieles mehr.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>Ein Verständnis von <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a> und den <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS-Grundlagen</a>. Vertrautheit mit grundlegenden Datentypen wie Zahlen und Strings, wie in vorherigen Lektionen behandelt.</td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Was ein Array ist — eine Struktur, die eine Liste von Variablen enthält.</li>
          <li>Die Syntax von Arrays — <code>[a, b, c]</code> und die Zugriffssyntax, <code>myArray[x]</code>.</li>
          <li>Ändern von Array-Werten mit <code>myArray[x] = y</code>.</li>
          <li>Array-Manipulation mit häufigen Eigenschaften und Methoden wie <code>length</code>, <code>push()</code>, <code>pop()</code>, <code>join()</code> und <code>split()</code>.</li>
          <li>Erweiterte Array-Methoden wie <code>forEach()</code>, <code>map()</code> und <code>filter()</code>.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Was ist ein Array?

Arrays werden allgemein als "listenartige Objekte" beschrieben; im Grunde sind sie einzelne Objekte, die mehrere Werte in einer Liste speichern. Array-Objekte können in Variablen gespeichert und in ähnlicher Weise wie jeder andere Wert behandelt werden. Der Unterschied besteht darin, dass wir auf jeden Wert in der Liste einzeln zugreifen können und super nützliche und effiziente Dinge mit der Liste tun können, wie zum Beispiel durchlaufen und dasselbe mit jedem Wert machen. Vielleicht haben wir eine Reihe von Produktartikeln und ihre Preise in einem Array gespeichert und möchten alle durchlaufen und sie auf einer Rechnung ausdrucken, während wir alle Preise zusammenzählen und den Gesamtpreis unten ausdrucken.

Ohne Arrays müssten wir jedes Element in einer separaten Variablen speichern und dann den Code, der das Drucken und Hinzufügen übernimmt, für jedes Element separat aufrufen. Dies wäre viel länger zu schreiben, weniger effizient und fehleranfälliger. Wenn wir 10 Elemente auf die Rechnung teilen müssten, wäre das schon ärgerlich, aber was ist mit 100 Elementen oder 1000? Zu diesem Beispiel kehren wir später im Artikel zurück.

Wie in früheren Artikeln sollten wir die Grundlagen von Arrays lernen, indem wir einige Beispiele in die [Entwicklertools des Browsers](/de/docs/Learn_web_development/Howto/Tools_and_setup/What_are_browser_developer_tools) eingeben.

## Erstellen von Arrays

Arrays bestehen aus eckigen Klammern und durch Kommas getrennten Elementen.

1. Angenommen, wir wollen eine Einkaufsliste in einem Array speichern. Fügen Sie den folgenden Code in die Konsole ein:

   ```js
   const shopping = ["bread", "milk", "cheese", "hummus", "noodles"];
   console.log(shopping);
   ```

2. In dem obigen Beispiel ist jedes Element ein String, aber in einem Array können wir verschiedene Datentypen speichern — Strings, Zahlen, Objekte und sogar andere Arrays. Wir können auch Datentypen in einem einzigen Array mischen — wir müssen uns nicht darauf beschränken, nur Zahlen in einem Array und in einem anderen nur Strings zu speichern. Beispielsweise:

   ```js
   const sequence = [1, 1, 2, 3, 5, 8, 13];
   const random = ["tree", 795, [0, 1, 2]];
   ```

3. Erstellen Sie einige Beispielarrays, bevor Sie fortfahren.

## Die Länge eines Arrays ermitteln

Sie können die Länge eines Arrays (wie viele Elemente es enthält) auf genau dieselbe Weise herausfinden, wie Sie die Länge (in Zeichen) eines Strings herausfinden — indem Sie die Eigenschaft {{jsxref("Array.prototype.length","length")}} verwenden. Versuchen Sie Folgendes:

```js
const shopping = ["bread", "milk", "cheese", "hummus", "noodles"];
console.log(shopping.length); // 5
```

## Zugriff auf und Ändern von Array-Elementen

Elemente in einem Array sind nummeriert, beginnend bei null. Diese Nummer wird als _Index_ des Elements bezeichnet. Das erste Element hat also den Index 0, das zweite den Index 1 und so weiter. Sie können auf einzelne Elemente im Array unter Verwendung der Klammernotation zugreifen und den Index des Elements angeben, auf dieselbe Weise, wie Sie [die Buchstaben in einem String](/de/docs/Learn_web_development/Core/Scripting/Useful_string_methods#retrieving_a_specific_string_character) abgerufen haben.

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
   > Wir haben es schon früher gesagt, aber nur zur Erinnerung — JavaScript beginnt mit der Indexierung von Arrays bei null!

3. Beachten Sie, dass ein Array in einem Array als mehrdimensionales Array bezeichnet wird. Sie können auf ein Element innerhalb eines Arrays zugreifen, das sich selbst innerhalb eines anderen Arrays befindet, indem Sie zwei Sätze von eckigen Klammern miteinander verketten. Um beispielsweise auf eines der Elemente im Array zuzugreifen, das das dritte Element im `random`-Array ist (siehe vorheriger Abschnitt), könnten wir so etwas tun:

   ```js
   const random = ["tree", 795, [0, 1, 2]];
   random[2][2];
   ```

4. Versuchen Sie, einige weitere Änderungen an Ihren Array-Beispielen vorzunehmen, bevor Sie fortfahren. Spielen Sie ein wenig herum und sehen Sie, was funktioniert und was nicht.

## Den Index von Elementen in einem Array finden

Wenn Sie den Index eines Elements nicht kennen, können Sie die Methode {{jsxref("Array.prototype.indexOf()","indexOf()")}} verwenden.
Die `indexOf()`-Methode nimmt ein Element als Argument und gibt entweder den Index des Elements oder `-1` zurück, wenn das Element nicht im Array ist:

```js
const birds = ["Parrot", "Falcon", "Owl"];
console.log(birds.indexOf("Owl")); //  2
console.log(birds.indexOf("Rabbit")); // -1
```

## Elemente hinzufügen

Um ein oder mehrere Elemente am Ende eines Arrays hinzuzufügen, können wir {{jsxref("Array.prototype.push()","push()")}} verwenden. Beachten Sie, dass Sie ein oder mehrere Elemente angeben müssen, die Sie am Ende Ihres Arrays hinzufügen möchten.

```js
const cities = ["Manchester", "Liverpool"];
cities.push("Cardiff");
console.log(cities); // [ "Manchester", "Liverpool", "Cardiff" ]
cities.push("Bradford", "Brighton");
console.log(cities); // [ "Manchester", "Liverpool", "Cardiff", "Bradford", "Brighton" ]
```

Die neue Länge des Arrays wird zurückgegeben, wenn der Methodenaufruf abgeschlossen ist. Wenn Sie die neue Array-Länge in einer Variablen speichern möchten, können Sie etwas wie folgt tun:

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

Die `pop()`-Methode gibt das Element zurück, das entfernt wurde. Um dieses Element in einer neuen Variablen zu speichern, können Sie dies tun:

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

Beim Aufruf von `splice()` gibt das erste Argument an, wo das Entfernen von Elementen beginnen soll, und das zweite Argument gibt an, wie viele Elemente entfernt werden sollen. Sie können also mehr als ein Element entfernen:

```js
const cities = ["Manchester", "Liverpool", "Edinburgh", "Carlisle"];
const index = cities.indexOf("Liverpool");
if (index !== -1) {
  cities.splice(index, 2);
}
console.log(cities); // [ "Manchester", "Carlisle" ]
```

## Zugriff auf jedes Element

Sehr oft möchten Sie auf jedes Element im Array zugreifen. Sie können dies mit der Anweisung {{jsxref("statements/for...of","for...of")}} tun:

```js
const birds = ["Parrot", "Falcon", "Owl"];

for (const bird of birds) {
  console.log(bird);
}
```

Manchmal möchten Sie dasselbe mit jedem Element in einem Array tun und haben dann ein Array, das die geänderten Elemente enthält. Sie können dies mit {{jsxref("Array.prototype.map()","map()")}} tun. Der folgende Code nimmt ein Array von Zahlen und verdoppelt jede Zahl:

```js
function double(number) {
  return number * 2;
}
const numbers = [5, 2, 7, 6];
const doubled = numbers.map(double);
console.log(doubled); // [ 10, 4, 14, 12 ]
```

Wir geben eine Funktion an `map()` und `map()` ruft die Funktion einmal für jedes Element im Array auf und übergibt das Element. Dann fügt es den Rückgabewert aus jedem Funktionsaufruf zu einem neuen Array hinzu und gibt schließlich das neue Array zurück.

Manchmal möchten Sie ein neues Array erstellen, das nur die Elemente im Original-Array enthält, die einem bestimmten Test entsprechen. Das können Sie mit {{jsxref("Array.prototype.filter()","filter()")}} tun. Der folgende Code nimmt ein Array von Strings und gibt ein Array zurück, das nur die Strings enthält, die länger als 8 Zeichen sind:

```js
function isLong(city) {
  return city.length > 8;
}
const cities = ["London", "Liverpool", "Totnes", "Edinburgh"];
const longer = cities.filter(isLong);
console.log(longer); // [ "Liverpool", "Edinburgh" ]
```

Wie bei `map()` geben wir eine Funktion an die `filter()`-Methode und `filter()` ruft diese Funktion für jedes Element im Array auf und übergibt das Element. Wenn die Funktion `true` zurückgibt, wird das Element einem neuen Array hinzugefügt. Schließlich gibt es das neue Array zurück.

## Konvertierung zwischen Strings und Arrays

Oft erhalten Sie einige Rohdaten in einem großen, langen String und möchten die nützlichen Elemente in eine nützlichere Form trennen, um dann Dinge damit zu tun, wie z.B. sie in einer Datentabelle anzuzeigen. Dafür können wir die Methode {{jsxref("String.prototype.split()","split()")}} verwenden. In ihrer einfachsten Form nimmt diese einen einzigen Parameter, das Zeichen, bei dem Sie den String trennen möchten, und gibt die Teilstrings zwischen dem Trennzeichen als Elemente in einem Array zurück.

> [!NOTE]
> Okay, technisch gesehen ist dies eine String-Methode, keine Array-Methode, aber wir haben sie hier zu Arrays hinzugefügt, da sie gut dazu passt.

1. Lassen Sie uns damit spielen, um zu sehen, wie es funktioniert. Erstellen Sie zunächst einen String in Ihrer Konsole:

   ```js
   const data = "Manchester,London,Liverpool,Birmingham,Leeds,Carlisle";
   ```

2. Jetzt trennen wir es bei jedem Komma:

   ```js
   const cities = data.split(",");
   cities;
   ```

3. Schließlich versuchen Sie, die Länge Ihres neuen Arrays zu ermitteln und einige Elemente davon abzurufen:

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

5. Eine andere Möglichkeit, ein Array in einen String zu konvertieren, ist die Verwendung der Methode {{jsxref("Array.prototype.toString()","toString()")}}. `toString()` ist arguably einfacher als `join()`, da es keinen Parameter benötigt, aber auch eingeschränkter ist. Mit `join()` können Sie verschiedene Trennzeichen spezifizieren, während `toString()` immer ein Komma verwendet. (Versuchen Sie, Schritt 4 mit einem anderen Zeichen als einem Komma auszuführen.)

   ```js
   const dogNames = ["Rocket", "Flash", "Bella", "Slugger"];
   dogNames.toString(); // Rocket,Flash,Bella,Slugger
   ```

## Aktives Lernen: Diese Produkte drucken

Kehren wir zu dem Beispiel zurück, das wir zuvor beschrieben haben — Produktnamen und Preise auf einer Rechnung drucken, dann die Preise zusammenzählen und sie unten ausdrucken. Im bearbeitbaren Beispiel unten befinden sich Kommentare mit Nummern — jeder dieser markiert eine Stelle, an der Sie dem Code etwas hinzufügen müssen. Diese sind wie folgt:

1. Unter dem Kommentar `// number 1` befinden sich eine Anzahl von Strings, wobei jeder einen Produktnamen und einen Preis enthält, getrennt durch einen Doppelpunkt. Sie sollten dieses in ein Array umwandeln und in einem Array namens `products` speichern.
2. Unter dem Kommentar `// number 2` starten Sie eine `for...of()` Schleife, um jedes Element im `products` Array durchzugehen.
3. Unter dem Kommentar `// number 3` möchten wir, dass Sie eine Codezeile schreiben, die das aktuelle Array-Element (`name:price`) in zwei separate Elemente aufteilt, eines, das nur den Namen enthält und eines, das nur den Preis enthält. Wenn Sie nicht sicher sind, wie das geht, konsultieren Sie den Artikel [Nützliche String-Methoden](/de/docs/Learn_web_development/Core/Scripting/Useful_string_methods) für Hilfe, oder noch besser, schauen Sie sich den Abschnitt [Konvertierung zwischen Strings und Arrays](#konvertierung_zwischen_strings_und_arrays) in diesem Artikel an.
4. Als Teil der obigen Codezeile möchten Sie auch den Preis von einem String in eine Zahl umwandeln. Wenn Sie sich nicht daran erinnern, wie das geht, schauen Sie sich den [ersten Strings-Artikel](/de/docs/Learn_web_development/Core/Scripting/Strings#numbers_vs._strings) an.
5. Es gibt eine Variable namens `total`, die erstellt wird und oben im Code den Wert 0 erhält. Innerhalb der Schleife (unter `// number 4`) möchten wir, dass Sie eine Zeile hinzufügen, die in jeder Iteration der Schleife den aktuellen Artikelpreis zu diesem Total addiert, so dass am Ende des Codes der korrekte Total auf der Rechnung gedruckt wird. Sie könnten einen [Zuweisungsoperator](/de/docs/Learn_web_development/Core/Scripting/Math#assignment_operators) dafür benötigen.
6. Wir möchten, dass Sie die Zeile direkt unter `// number 5` ändern, so dass die `itemText`-Variable in jedem Fall gleich ist "aktueller Artikelname — $aktueller Artikelpreis", zum Beispiel "Schuhe — $23,99", so dass die korrekten Informationen für jeden Artikel auf der Rechnung gedruckt werden. Dies ist nur einfache String-Konkatenation, die Ihnen vertraut sein sollte.
7. Schließlich müssen Sie unter dem Kommentar `// number 6` ein `}` hinzufügen, um das Ende der `for...of()` Schleife zu markieren.

```html hidden
<h2>Live output</h2>

<div class="output" style="min-height: 150px;">
  <ul></ul>

  <p></p>
</div>

<h2>Editable code</h2>

<p class="a11y-label">
  Press Esc to move focus away from the code area (Tab inserts a tab character).
</p>

<textarea id="code" class="playable-code" style="height: 410px;width: 95%">
const list = document.querySelector('.output ul');
const totalBox = document.querySelector('.output p');
let total = 0;
list.textContent = "";
totalBox.textContent = "";
// number 1
                'Underpants:6.99'
                'Socks:5.99'
                'T-shirt:14.99'
                'Trousers:31.99'
                'Shoes:23.99';

// number 2

  // number 3

  // number 4

  // number 5
  let itemText = 0;

  const listItem = document.createElement('li');
  listItem.textContent = itemText;
  list.appendChild(listItem);

// number 6

totalBox.textContent = 'Total: $' + total.toFixed(2);
</textarea>

<div class="playable-buttons">
  <input id="reset" type="button" value="Reset" />
  <input id="solution" type="button" value="Show solution" />
</div>
```

```js hidden
const textarea = document.getElementById("code");
const reset = document.getElementById("reset");
const solution = document.getElementById("solution");
let code = textarea.value;
let userEntry = textarea.value;

function updateCode() {
  eval(textarea.value);
}

reset.addEventListener("click", () => {
  textarea.value = code;
  userEntry = textarea.value;
  solutionEntry = jsSolution;
  solution.value = "Show solution";
  updateCode();
});

solution.addEventListener("click", () => {
  if (solution.value === "Show solution") {
    textarea.value = solutionEntry;
    solution.value = "Hide solution";
  } else {
    textarea.value = userEntry;
    solution.value = "Show solution";
  }
  updateCode();
});

const jsSolution = `const list = document.querySelector('.output ul');
const totalBox = document.querySelector('.output p');
let total = 0;
list.textContent = "";
totalBox.textContent = "";

const products = [
  'Underpants:6.99',
  'Socks:5.99',
  'T-shirt:14.99',
  'Trousers:31.99',
  'Shoes:23.99',
];

for (const product of products) {
  const subArray = product.split(':');
  const name = subArray[0];
  const price = Number(subArray[1]);
  total += price;
  const itemText = \`\${name} — $\${price}\`;

  const listItem = document.createElement('li');
  listItem.textContent = itemText;
  list.appendChild(listItem);
}

totalBox.textContent = \`Total: $\${total.toFixed(2)}\`;`;
let solutionEntry = jsSolution;

textarea.addEventListener("input", updateCode);
window.addEventListener("load", updateCode);

// stop tab key tabbing out of textarea and
// make it write a tab at the caret position instead

textarea.onkeydown = (event) => {
  if (event.code === "Tab") {
    event.preventDefault();
    insertAtCaret("\t");
  }
  if (event.code === "Escape") {
    textarea.blur();
  }
};

function insertAtCaret(text) {
  const scrollPos = textarea.scrollTop;
  let caretPos = textarea.selectionStart;
  const front = textarea.value.substring(0, caretPos);
  const back = textarea.value.substring(
    textarea.selectionEnd,
    textarea.value.length,
  );

  textarea.value = front + text + back;
  caretPos += text.length;
  textarea.selectionStart = caretPos;
  textarea.selectionEnd = caretPos;
  textarea.focus();
  textarea.scrollTop = scrollPos;
}

// Update the saved userCode every time the user updates the text area code

textarea.onkeyup = () => {
  // We only want to save the state when the user code is being shown,
  // not the solution, so that solution is not saved over the user code
  if (solution.value === "Show solution") {
    userEntry = textarea.value;
  } else {
    solutionEntry = textarea.value;
  }
  updateCode();
};
```

```css hidden
html {
  font-family: sans-serif;
}

h2 {
  font-size: 16px;
}

.a11y-label {
  margin: 0;
  text-align: right;
  font-size: 0.7rem;
  width: 98%;
}

body {
  margin: 10px;
  background-color: #f5f9fa;
}
```

{{ EmbedLiveSample('Active_learning_Printing_those_products', '100%', 750) }}

## Aktives Lernen: Die Top 5 Suchanfragen

Eine gute Verwendung für Array-Methoden wie {{jsxref("Array.prototype.push()","push()")}} und {{jsxref("Array.prototype.pop()","pop()")}} ist, wenn Sie eine Aufzeichnung der aktuell aktiven Elemente in einer Webanwendung pflegen. In einer animierten Szene könnten Sie beispielsweise ein Array von Objekten haben, die die derzeit angezeigten Hintergrundgrafiken darstellen, und Sie möchten möglicherweise nur 50 gleichzeitig anzeigen, aus Leistungs- oder Unübersichtlichkeitsgründen. Wenn neue Objekte erstellt und dem Array hinzugefügt werden, können ältere aus dem Array gelöscht werden, um die gewünschte Anzahl beizubehalten.

In diesem Beispiel zeigen wir eine viel einfachere Verwendung — hier geben wir Ihnen eine gefälschte Suchseite mit einem Suchfeld. Die Idee ist, dass bei der Eingabe von Begriffen in das Suchfeld die letzten 5 vorherigen Suchbegriffe in der Liste angezeigt werden. Wenn die Anzahl der Begriffe über 5 hinausgeht, beginnt der letzte Begriff jedes Mal gelöscht zu werden, wenn ein neuer Begriff oben hinzugefügt wird, so dass die letzten 5 Begriffe immer angezeigt werden.

> [!NOTE]
> In einer echten Suchanwendung könnten Sie wahrscheinlich auf die vorherigen Suchbegriffe klicken, um zu vorherigen Suchen zurückzukehren, und es würden tatsächlich Suchergebnisse angezeigt! Wir halten es vorerst einfach.

Um die App abzuschließen, müssen Sie:

1. Eine Zeile unter dem Kommentar `// number 1` hinzufügen, die den aktuellen im Suchfeld eingegebenen Wert an den Anfang des Arrays hinzufügt. Dies kann mit `searchInput.value` abgerufen werden.
2. Eine Zeile unter dem Kommentar `// number 2` hinzufügen, die den Wert entfernt, der sich derzeit am Ende des Arrays befindet.

```html hidden
<h2>Live output</h2>
<div class="output" style="min-height: 150px;">
  <input type="text" /><button>Search</button>

  <ul></ul>
</div>

<h2>Editable code</h2>

<p class="a11y-label">
  Press Esc to move focus away from the code area (Tab inserts a tab character).
</p>

<textarea id="code" class="playable-code" style="height: 370px; width: 95%">
const list = document.querySelector('.output ul');
const searchInput = document.querySelector('.output input');
const searchBtn = document.querySelector('.output button');

list.textContent = "";

const myHistory = [];
const MAX_HISTORY = 5;

searchBtn.onclick = () => {
  // we will only allow a term to be entered if the search input isn't empty
  if (searchInput.value !== '') {
    // number 1

    // empty the list so that we don't display duplicate entries
    // the display is regenerated every time a search term is entered.
    list.textContent = "";

    // loop through the array, and display all the search terms in the list
    for (const itemText of myHistory) {
      const listItem = document.createElement('li');
      listItem.textContent = itemText;
      list.appendChild(listItem);
    }

    // If the array length is 5 or more, remove the oldest search term
    if (myHistory.length >= MAX_HISTORY) {
      // number 2
    }

    // empty the search input and focus it, ready for the next term to be entered
    searchInput.value = '';
    searchInput.focus();
  }
}
</textarea>

<div class="playable-buttons">
  <input id="reset" type="button" value="Reset" />
  <input id="solution" type="button" value="Show solution" />
</div>
```

```css hidden
html {
  font-family: sans-serif;
}

h2 {
  font-size: 16px;
}

.a11y-label {
  margin: 0;
  text-align: right;
  font-size: 0.7rem;
  width: 98%;
}

body {
  margin: 10px;
  background: #f5f9fa;
}
```

```js hidden
const textarea = document.getElementById("code");
const reset = document.getElementById("reset");
const solution = document.getElementById("solution");
let code = textarea.value;
let userEntry = textarea.value;

function updateCode() {
  eval(textarea.value);
}

reset.addEventListener("click", () => {
  textarea.value = code;
  userEntry = textarea.value;
  solutionEntry = jsSolution;
  solution.value = "Show solution";
  updateCode();
});

solution.addEventListener("click", () => {
  if (solution.value === "Show solution") {
    textarea.value = solutionEntry;
    solution.value = "Hide solution";
  } else {
    textarea.value = userEntry;
    solution.value = "Show solution";
  }
  updateCode();
});

const jsSolution = `const list = document.querySelector('.output ul');
const searchInput = document.querySelector('.output input');
const searchBtn = document.querySelector('.output button');

list.textContent = "";

const myHistory = [];
const MAX_HISTORY = 5;

searchBtn.onclick = () => {
  // we will only allow a term to be entered if the search input isn't empty
  if (searchInput.value !== '') {
    myHistory.unshift(searchInput.value);

    // empty the list so that we don't display duplicate entries
    // the display is regenerated every time a search term is entered.
    list.textContent = "";

    // loop through the array, and display all the search terms in the list
    for (const itemText of myHistory) {
      const listItem = document.createElement('li');
      listItem.textContent = itemText;
      list.appendChild(listItem);
    }

    // If the array length is 5 or more, remove the oldest search term
    if (myHistory.length >= MAX_HISTORY) {
      myHistory.pop();
    }

    // empty the search input and focus it, ready for the next term to be entered
    searchInput.value = '';
    searchInput.focus();
  }
}`;
let solutionEntry = jsSolution;

textarea.addEventListener("input", updateCode);
window.addEventListener("load", updateCode);

// stop tab key tabbing out of textarea and
// make it write a tab at the caret position instead

textarea.onkeydown = (event) => {
  if (event.code === "Tab") {
    event.preventDefault();
    insertAtCaret("\t");
  }
  if (event.code === "Escape") {
    textarea.blur();
  }
};

function insertAtCaret(text) {
  const scrollPos = textarea.scrollTop;
  let caretPos = textarea.selectionStart;
  const front = textarea.value.substring(0, caretPos);
  const back = textarea.value.substring(
    textarea.selectionEnd,
    textarea.value.length,
  );

  textarea.value = front + text + back;
  caretPos += text.length;
  textarea.selectionStart = caretPos;
  textarea.selectionEnd = caretPos;
  textarea.focus();
  textarea.scrollTop = scrollPos;
}

// Update the saved userCode every time the user updates the text area code

textarea.onkeyup = () => {
  // We only want to save the state when the user code is being shown,
  // not the solution, so that solution is not saved over the user code
  if (solution.value === "Show solution") {
    userEntry = textarea.value;
  } else {
    solutionEntry = textarea.value;
  }
  updateCode();
};
```

{{ EmbedLiveSample('Active_learning_Top_5_searches', '100%', 700) }}

## Testen Sie Ihre Fähigkeiten!

Sie haben das Ende dieses Artikels erreicht, aber können Sie sich an die wichtigsten Informationen erinnern? Sie finden einige weitere Tests, um zu überprüfen, ob Sie diese Informationen behalten haben, bevor Sie weitermachen — siehe [Testen Sie Ihre Fähigkeiten: Arrays](/de/docs/Learn_web_development/Core/Scripting/Test_your_skills/Arrays).

## Fazit

Nachdem Sie diesen Artikel gelesen haben, werden Sie sicherlich zustimmen, dass Arrays ziemlich nützlich sind; Sie werden sie überall in JavaScript sehen, oft in Verbindung mit Schleifen, um dasselbe mit jedem Element in einem Array zu tun. Wir werden Ihnen später im Modul alles über Schleifen beibringen.

Im nächsten Artikel geben wir Ihnen eine Herausforderung, um Ihr Verständnis der vorherigen Artikel zu testen.

## Siehe auch

- [Indizierte Sammlungen](/de/docs/Web/JavaScript/Guide/Indexed_collections)
  - : Ein fortgeschrittener Leitfaden zu Arrays und ihren Verwandten, den typisierten Arrays.
- {{jsxref("Array")}}
  - : Die `Array`-Objektreferenzseite — für einen ausführlichen Referenzleitfaden zu den in dieser Seite diskutierten Funktionen und vielen mehr.
- [Abgesehen: Einführung in Arrays](https://scrimba.com/the-frontend-developer-career-path-c0j/~06e?via=mdn), Scrimba <sup>_MDN learning partner_</sup>
  - : Eine interaktive Lektion mit einer Einführung in Arrays.

{{PreviousMenuNext("Learn_web_development/Core/Scripting/Useful_string_methods", "Learn_web_development/Core/Scripting/Silly_story_generator", "Learn_web_development/Core/Scripting")}}
