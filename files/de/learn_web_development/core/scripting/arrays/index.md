---
title: Arrays
slug: Learn_web_development/Core/Scripting/Arrays
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{LearnSidebar}}

{{PreviousMenuNext("Learn_web_development/Core/Scripting/Useful_string_methods", "Learn_web_development/Core/Scripting/Silly_story_generator", "Learn_web_development/Core/Scripting")}}

In dieser Lektion betrachten wir Arrays – eine clevere Möglichkeit, eine Liste von Datenelementen unter einem einzigen Variablennamen zu speichern. Hier zeigen wir, warum dies nützlich ist, und erkunden dann, wie man ein Array erstellt, Elemente darin abruft, hinzufügt und entfernt und noch mehr.

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
          <li>Modifizieren von Array-Werten mit <code>myArray[x] = y</code>.</li>
          <li>Manipulation von Arrays mithilfe gängiger Eigenschaften und Methoden wie <code>length</code>, <code>push()</code>, <code>pop()</code>, <code>join()</code> und <code>split()</code>.</li>
          <li>Erweiterte Array-Methoden wie <code>forEach()</code>, <code>map()</code> und <code>filter()</code>.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Was ist ein Array?

Arrays werden im Allgemeinen als "listenähnliche Objekte" beschrieben; im Grunde genommen sind sie einzelne Objekte, die mehrere Werte in einer Liste speichern. Array-Objekte können in Variablen gespeichert und ähnlich behandelt werden wie jeder andere Wertetyp, mit dem Unterschied, dass wir auf jeden Wert innerhalb der Liste einzeln zugreifen können und nützliche und effiziente Dinge mit der Liste machen können, wie sie zu durchlaufen und dieselbe Aktion auf jeden Wert anzuwenden. Vielleicht haben wir eine Reihe von Produktartikeln und deren Preise in einem Array gespeichert und möchten alle durchlaufen und auf einer Rechnung ausdrucken, während wir alle Preise zusammenzählen und den Gesamtpreis am Ende ausdrucken.

Ohne Arrays müssten wir jedes Element in einer separaten Variablen speichern und dann den Code, der das Drucken und Addieren übernimmt, für jedes Element separat aufrufen. Dies wäre viel länger zu schreiben, weniger effizient und fehleranfälliger. Wenn wir 10 Artikel zur Rechnung hinzufügen wollten, wäre das bereits ärgerlich, aber was ist mit 100 Artikeln oder 1000? Wir werden später in dem Artikel auf dieses Beispiel zurückkommen.

Wie in den vorherigen Artikeln lernen wir die Grundlagen von Arrays, indem wir einige Beispiele in die [Browser-Entwicklerkonsole](/de/docs/Learn_web_development/Howto/Tools_and_setup/What_are_browser_developer_tools) eingeben.

## Arrays erstellen

Arrays bestehen aus eckigen Klammern und Elementen, die durch Kommata getrennt sind.

1. Angenommen, wir möchten eine Einkaufsliste in einem Array speichern. Fügen Sie den folgenden Code in die Konsole ein:

   ```js
   const shopping = ["bread", "milk", "cheese", "hummus", "noodles"];
   console.log(shopping);
   ```

2. Im obigen Beispiel ist jedes Element eine Zeichenfolge, aber in einem Array können wir verschiedene Datentypen speichern — Zeichenfolgen, Zahlen, Objekte und sogar andere Arrays. Wir können auch Datentypen in einem einzigen Array mischen — wir müssen uns nicht darauf beschränken, nur Zahlen in einem Array zu speichern und in einem anderen nur Zeichenfolgen. Zum Beispiel:

   ```js
   const sequence = [1, 1, 2, 3, 5, 8, 13];
   const random = ["tree", 795, [0, 1, 2]];
   ```

3. Bevor Sie fortfahren, erstellen Sie ein paar Beispiel-Arrays.

## Die Länge eines Arrays herausfinden

Sie können die Länge eines Arrays (wie viele Elemente darin vorhanden sind) auf genau die gleiche Weise herausfinden, wie Sie die Länge (in Zeichen) einer Zeichenfolge ermitteln — indem Sie die {{jsxref("Array.prototype.length","length")}}-Eigenschaft verwenden. Probieren Sie Folgendes aus:

```js
const shopping = ["bread", "milk", "cheese", "hummus", "noodles"];
console.log(shopping.length); // 5
```

## Zugreifen auf und Modifizieren von Array-Elementen

Elemente in einem Array werden nummeriert, beginnend bei null. Diese Nummer wird als der _Index_ des Elements bezeichnet. Das erste Element hat also den Index 0, das zweite hat den Index 1 und so weiter. Sie können auf einzelne Elemente im Array mit der Klammernotation zugreifen und den Index des Elements angeben, auf die gleiche Weise, wie Sie auf die [Buchstaben in einem String zugreifen](/de/docs/Learn_web_development/Core/Scripting/Useful_string_methods#retrieving_a_specific_string_character).

1. Geben Sie Folgendes in Ihre Konsole ein:

   ```js
   const shopping = ["bread", "milk", "cheese", "hummus", "noodles"];
   console.log(shopping[0]);
   // returns "bread"
   ```

2. Sie können auch ein Element in einem Array ändern, indem Sie einem einzelnen Array-Element einen neuen Wert zuweisen. Probieren Sie dies aus:

   ```js
   const shopping = ["bread", "milk", "cheese", "hummus", "noodles"];
   shopping[0] = "tahini";
   console.log(shopping);
   // shopping will now return [ "tahini", "milk", "cheese", "hummus", "noodles" ]
   ```

   > [!NOTE]
   > Wir haben es schon einmal gesagt, aber nur zur Erinnerung – JavaScript beginnt die Indizierung von Arrays bei null!

3. Beachten Sie, dass ein Array innerhalb eines Arrays als mehrdimensionales Array bezeichnet wird. Sie können auf ein Element in einem Array, das sich selbst in einem anderen Array befindet, zugreifen, indem Sie zwei Sätze von eckigen Klammern verketten. Um beispielsweise auf eines der Elemente im Array zuzugreifen, das das dritte Element im `random`-Array ist (siehe vorheriger Abschnitt), könnten wir so etwas tun:

   ```js
   const random = ["tree", 795, [0, 1, 2]];
   random[2][2];
   ```

4. Versuchen Sie, einige weitere Änderungen an Ihren Array-Beispielen vorzunehmen, bevor Sie fortfahren. Spielen Sie ein wenig herum und sehen Sie, was funktioniert und was nicht.

## Den Index von Elementen in einem Array finden

Wenn Sie den Index eines Elements nicht kennen, können Sie die {{jsxref("Array.prototype.indexOf()","indexOf()")}}-Methode verwenden. Die `indexOf()`-Methode nimmt ein Element als Argument und gibt entweder den Index des Elements oder `-1` zurück, wenn sich das Element nicht im Array befindet:

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

Die neue Länge des Arrays wird zurückgegeben, wenn der Methodenaufruf abgeschlossen ist. Wenn Sie die neue Array-Länge in einer Variablen speichern möchten, könnten Sie etwas so tun:

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

Um das erste Element eines Arrays zu entfernen, verwenden Sie {{jsxref("Array.prototype.shift()","shift()")}}:

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

In diesem Aufruf von `splice()` gibt das erste Argument an, wo das Entfernen von Elementen beginnt, und das zweite Argument gibt an, wie viele Elemente entfernt werden sollen. So können Sie mehr als ein Element entfernen:

```js
const cities = ["Manchester", "Liverpool", "Edinburgh", "Carlisle"];
const index = cities.indexOf("Liverpool");
if (index !== -1) {
  cities.splice(index, 2);
}
console.log(cities); // [ "Manchester", "Carlisle" ]
```

## Auf jedes Element zugreifen

Sehr oft werden Sie auf jedes Element im Array zugreifen wollen. Dies können Sie mit der {{jsxref("statements/for...of","for...of")}}-Anweisung tun:

```js
const birds = ["Parrot", "Falcon", "Owl"];

for (const bird of birds) {
  console.log(bird);
}
```

Manchmal werden Sie dasselbe für jedes Element in einem Array tun wollen, sodass Sie ein Array erhalten, das die geänderten Elemente enthält. Dies können Sie mit {{jsxref("Array.prototype.map()","map()")}} tun. Der folgende Code nimmt ein Array von Zahlen und verdoppelt jede Zahl:

```js
function double(number) {
  return number * 2;
}
const numbers = [5, 2, 7, 6];
const doubled = numbers.map(double);
console.log(doubled); // [ 10, 4, 14, 12 ]
```

Wir geben `map()` eine Funktion, und `map()` ruft die Funktion einmal für jedes Element im Array auf und übergibt das Element. Anschließend fügt es den Rückgabewert jedes Funktionsaufrufs zu einem neuen Array hinzu und gibt schließlich das neue Array zurück.

Manchmal möchten Sie ein neues Array erstellen, das nur die Elemente im ursprünglichen Array enthält, die einem bestimmten Test entsprechen. Dies können Sie mit {{jsxref("Array.prototype.filter()","filter()")}} tun. Der folgende Code nimmt ein Array von Zeichenfolgen und gibt ein Array zurück, das nur die Zeichenfolgen enthält, die länger als 8 Zeichen sind:

```js
function isLong(city) {
  return city.length > 8;
}
const cities = ["London", "Liverpool", "Totnes", "Edinburgh"];
const longer = cities.filter(isLong);
console.log(longer); // [ "Liverpool", "Edinburgh" ]
```

Wie `map()` geben wir der `filter()`-Methode eine Funktion, und `filter()` ruft diese Funktion für jedes Element im Array auf und übergibt das Element. Wenn die Funktion `true` zurückgibt, wird das Element zu einem neuen Array hinzugefügt. Schließlich gibt es das neue Array zurück.

## Umwandeln zwischen Strings und Arrays

Oft werden Sie vor dem Problem stehen, dass einige Rohdaten in einer langen Zeichenfolge enthalten sind, und Sie möchten die nützlichen Elemente in eine nützlichere Form separatieren und dann Dinge damit tun, wie sie in einer Datentabelle anzuzeigen. Dazu können wir die {{jsxref("String.prototype.split()","split()")}}-Methode verwenden. In ihrer einfachsten Form nimmt sie einen einzigen Parameter, das Zeichen, an dem Sie die Zeichenfolge trennen möchten, und gibt die Zeichenfolgen zwischen dem Trennzeichen als Elemente in einem Array zurück.

> [!NOTE]
> Okay, das ist technisch gesehen eine String-Methode, keine Array-Methode, aber wir haben sie hier mit Arrays eingefügt, da sie hier gut passt.

1. Spielen wir damit, um zu sehen, wie es funktioniert. Erstellen Sie zuerst eine Zeichenfolge in Ihrer Konsole:

   ```js
   const data = "Manchester,London,Liverpool,Birmingham,Leeds,Carlisle";
   ```

2. Teilen Sie sie jetzt bei jedem Komma:

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

4. Sie können auch den umgekehrten Weg mit der {{jsxref("Array.prototype.join()","join()")}}-Methode gehen. Versuchen Sie Folgendes:

   ```js
   const commaSeparated = cities.join(",");
   commaSeparated;
   ```

5. Eine andere Möglichkeit, ein Array in eine Zeichenfolge umzuwandeln, ist die Verwendung der {{jsxref("Array.prototype.toString()","toString()")}}-Methode. `toString()` ist möglicherweise einfacher als `join()`, da es keinen Parameter benötigt, aber begrenzender. Bei `join()` können Sie verschiedene Trennzeichen angeben, während `toString()` immer ein Komma verwendet. (Versuchen Sie, Schritt 4 mit einem anderen Zeichen als einem Komma auszuführen.)

   ```js
   const dogNames = ["Rocket", "Flash", "Bella", "Slugger"];
   dogNames.toString(); // Rocket,Flash,Bella,Slugger
   ```

## Aktives Lernen: Diese Produkte drucken

Lassen Sie uns zu dem Beispiel zurückkehren, das wir bereits beschrieben haben — Produktnamen und Preise auf einer Rechnung ausdrucken, dann die Preise summieren und sie unten ausdrucken. In dem editierbaren Beispiel unten gibt es Kommentare mit Nummern — jeder von ihnen markiert eine Stelle, an der Sie etwas zum Code hinzufügen müssen. Sie sind wie folgt:

1. Unter dem Kommentar `// number 1` befinden sich eine Anzahl von Zeichenfolgen, von denen jede einen Produktnamen und einen Preis enthält, getrennt durch einen Doppelpunkt. Wir möchten, dass Sie dies in ein Array umwandeln und es in einem Array namens `products` speichern.
2. Unter dem Kommentar `// number 2` beginnen Sie eine `for...of()`-Schleife, um jedes Element im `products`-Array zu durchlaufen.
3. Unter dem Kommentar `// number 3` möchten wir, dass Sie eine Codezeile schreiben, die das aktuelle Array-Element (`name:price`) in zwei separate Elemente aufteilt, eines enthält nur den Namen und das andere nur den Preis. Wenn Sie nicht sicher sind, wie das geht, konsultieren Sie den Artikel über [nützliche Zeichenfolgenmethoden](/de/docs/Learn_web_development/Core/Scripting/Useful_string_methods) für Hilfe oder besser noch den Abschnitt [Umwandeln zwischen Strings und Arrays](#umwandeln_zwischen_strings_und_arrays) in diesem Artikel.
4. Im Rahmen der obigen Codezeile möchten Sie auch den Preis von einer Zeichenfolge in eine Zahl umwandeln. Wenn Sie sich nicht erinnern können, wie das geht, schauen Sie sich den [ersten Zeichenfolgenartikel](/de/docs/Learn_web_development/Core/Scripting/Strings#numbers_vs._strings) an.
5. Es gibt eine Variable namens `total`, die oben im Code erstellt und mit dem Wert 0 versehen wird. Innerhalb der Schleife (unter `// number 4`) möchten wir, dass Sie eine Zeile hinzufügen, die den aktuellen Elementpreis zu diesem Gesamtwert in jeder Iteration der Schleife addiert, sodass am Ende des Codes die korrekte Gesamtsumme auf die Rechnung gedruckt wird. Sie könnten einen [Zuweisungsoperator](/de/docs/Learn_web_development/Core/Scripting/Math#assignment_operators) dafür benötigen.
6. Wir möchten, dass Sie die Zeile direkt unter `// number 5` so ändern, dass die Variable `itemText` gleich "aktueller Elementname — $aktueller Elementpreis" ist, zum Beispiel "Schuhe — $23.99" in jedem Fall, sodass die korrekten Informationen für jedes Element auf die Rechnung gedruckt werden. Dies ist einfach eine Zeichenfolgenverkettung, die Ihnen bekannt sein sollte.
7. Schließlich müssen Sie unter dem Kommentar `// number 6` eine `}` hinzufügen, um das Ende der `for...of()`-Schleife zu kennzeichnen.

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

## Aktives Lernen: Top 5 Suchanfragen

Eine gute Verwendung für Array-Methoden wie {{jsxref("Array.prototype.push()","push()")}} und {{jsxref("Array.prototype.pop()","pop()")}} ist, wenn Sie ein Protokoll von aktuell aktiven Elementen in einer Web-App pflegen. In einer animierten Szene zum Beispiel könnten Sie ein Array von Objekten haben, das die aktuell angezeigten Hintergrundgrafiken darstellt, und Sie möchten vielleicht nur 50 auf einmal anzeigen, aus Leistungsgründen oder um ein Überladen zu vermeiden. Wenn neue Objekte erstellt und dem Array hinzugefügt werden, können ältere aus dem Array gelöscht werden, um die gewünschte Anzahl zu halten.

In diesem Beispiel zeigen wir eine viel einfachere Verwendung — hier geben wir Ihnen eine gefälschte Suchseite mit einem Suchfeld. Die Idee ist, dass beim Eingeben von Begriffen ins Suchfeld die letzten 5 vorherigen Suchbegriffe in der Liste angezeigt werden. Wenn die Anzahl der Begriffe über 5 steigt, wird jeder neue Begriff nach oben hinzugefügt, die letzte Suche wird in diesem Fall gelöscht, sodass immer die 5 letzten Begriffe angezeigt werden.

> [!NOTE]
> In einer echten Such-App könnten Sie wahrscheinlich auf die vorherigen Suchbegriffe klicken, um zu den vorherigen Suchen zurückzukehren, und sie würde tatsächliche Suchergebnisse anzeigen! Wir halten es einfach nur zu Demonstrationszwecken simpel.

Um die App zu vervollständigen, müssen Sie:

1. Eine Zeile unter dem Kommentar `// number 1` hinzufügen, die den aktuellen Wert aus der Such-Eingabe an den Anfang des Arrays hinzufügt. Dieser kann mit `searchInput.value` abgerufen werden.
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

Sie haben das Ende dieses Artikels erreicht, aber können Sie sich an die wichtigsten Informationen erinnern? Sie können einige weitere Tests finden, um zu überprüfen, ob Sie diese Informationen vor dem Weitermachen behalten haben — siehe [Testen Sie Ihre Fähigkeiten: Arrays](/de/docs/Learn_web_development/Core/Scripting/Test_your_skills:_Arrays).

## Fazit

Nach der Lektüre dieses Artikels sind wir sicher, dass Sie zustimmen werden, dass Arrays ziemlich nützlich erscheinen; Sie werden sie überall in JavaScript sehen, oft in Verbindung mit Schleifen, um dieselbe Aktion auf jedes Element in einem Array anzuwenden. Wir werden Ihnen später im Modul alles über Schleifen beibringen.

Im nächsten Artikel geben wir Ihnen eine Herausforderung, um Ihr Verständnis der vorhergehenden Artikel zu testen.

## Siehe auch

- [Indizierte Sammlungen](/de/docs/Web/JavaScript/Guide/Indexed_collections)
  - : Ein fortgeschrittener Leitfaden zu Arrays und ihren Verwandten, den typisierten Arrays.
- {{jsxref("Array")}}
  - : Die `Array`-Objektreferenzseite — für einen detaillierten Referenzleitfaden zu den auf dieser Seite besprochenen Funktionen und vielen mehr.
- [Aside: Intro zu Arrays](https://v2.scrimba.com/the-frontend-developer-career-path-c0j/~06e?via=mdn), Scrimba <sup>_MDN Curriculumspartner_</sup>
  - : Eine interaktive Lektion, die eine Einführung in Arrays bietet.

{{PreviousMenuNext("Learn_web_development/Core/Scripting/Useful_string_methods", "Learn_web_development/Core/Scripting/Silly_story_generator", "Learn_web_development/Core/Scripting")}}
