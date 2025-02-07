---
title: Arrays
slug: Learn_web_development/Core/Scripting/Arrays
l10n:
  sourceCommit: 07d0f18e4b2ad43185bcc98ce99b7080c6411b2a
---

{{LearnSidebar}}

{{PreviousMenuNext("Learn_web_development/Core/Scripting/Useful_string_methods", "Learn_web_development/Core/Scripting/Silly_story_generator", "Learn_web_development/Core/Scripting")}}

In dieser Lektion betrachten wir Arrays – eine clevere Möglichkeit, eine Liste von Datenobjekten unter einem einzigen Variablennamen zu speichern. Wir betrachten, warum dies nützlich ist, und untersuchen, wie man ein Array erstellt, Elemente daraus abruft, hinzufügt und entfernt und mehr.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>Ein grundlegendes Verständnis von <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a> und den <a href="/de/docs/Learn_web_development/Core/Styling_basics">Grundlagen von CSS</a>. Vertrautheit mit grundlegenden Datentypen wie Zahlen und Strings, wie in den vorherigen Lektionen behandelt.</td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Was ein Array ist – eine Struktur, die eine Liste von Variablen enthält.</li>
          <li>Die Syntax von Arrays – <code>[a, b, c]</code> und die Zugriffssyntax, <code>myArray[x]</code>.</li>
          <li>Ändern von Array-Werten mit <code>myArray[x] = y</code>.</li>
          <li>Manipulation von Arrays unter Verwendung gängiger Eigenschaften und Methoden wie <code>length</code>, <code>push()</code>, <code>pop()</code>, <code>join()</code> und <code>split()</code>.</li>
          <li>Fortgeschrittene Array-Methoden wie <code>forEach()</code>, <code>map()</code> und <code>filter()</code>.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Was ist ein Array?

Arrays werden allgemein als „listenartige Objekte“ beschrieben; sie sind im Grunde genommen einzelne Objekte, die mehrere Werte in einer Liste speichern. Array-Objekte können in Variablen gespeichert und ähnlich wie jeder andere Werttyp behandelt werden, mit dem Unterschied, dass wir auf jeden Wert in der Liste einzeln zugreifen können und sehr nützliche und effiziente Dinge mit der Liste tun können, wie z. B. durch sie zu iterieren und denselben Vorgang auf jeden Wert anzuwenden. Vielleicht haben wir eine Reihe von Produkten und deren Preise in einem Array gespeichert, und wir möchten durch die Liste iterieren, um alles auf einer Rechnung auszugeben, die Preise zu summieren und den Gesamtpreis unten anzuzeigen.

Ohne Arrays müssten wir jedes Element in einer separaten Variablen speichern und den Code, der das Ausdrucken und Addieren übernimmt, für jedes Element separat aufrufen. Dies wäre viel länger zu schreiben, weniger effizient und fehleranfälliger. Bei 10 Elementen auf einer Rechnung wäre das schon mühsam, aber wie wäre es bei 100 oder 1000 Elementen? Wir kehren später in diesem Artikel zu diesem Beispiel zurück.

Wie in vorherigen Artikeln lernen wir die Grundlagen von Arrays, indem wir einige Beispiele in die [Browser-Entwicklungstools](/de/docs/Learn_web_development/Howto/Tools_and_setup/What_are_browser_developer_tools) eingeben.

## Arrays erstellen

Arrays bestehen aus eckigen Klammern und Elementen, die durch Kommas getrennt sind.

1. Angenommen, wir möchten eine Einkaufsliste in einem Array speichern. Fügen Sie den folgenden Code in die Konsole ein:

   ```js
   const shopping = ["bread", "milk", "cheese", "hummus", "noodles"];
   console.log(shopping);
   ```

2. Im obigen Beispiel ist jedes Element ein String, aber in einem Array können verschiedene Datentypen gespeichert werden – Strings, Zahlen, Objekte und sogar andere Arrays. Es ist auch möglich, Datentypen in einem einzigen Array zu mischen – wir müssen uns nicht darauf beschränken, nur Zahlen in einem Array und nur Strings in einem anderen zu speichern. Beispiel:

   ```js
   const sequence = [1, 1, 2, 3, 5, 8, 13];
   const random = ["tree", 795, [0, 1, 2]];
   ```

3. Erstellen Sie vor dem Fortfahren einige Beispiel-Arrays.

## Länge eines Arrays ermitteln

Die Länge eines Arrays (wie viele Elemente es enthält) kann auf genau dieselbe Weise ermittelt werden wie die Länge eines Strings (in Zeichen) – mit der {{jsxref("Array.prototype.length","length")}}-Eigenschaft. Probieren Sie Folgendes:

```js
const shopping = ["bread", "milk", "cheese", "hummus", "noodles"];
console.log(shopping.length); // 5
```

## Auf Elemente zugreifen und sie ändern

Elemente in einem Array werden nummeriert, beginnend bei null. Diese Zahl wird als _Index_ des Elements bezeichnet. Das erste Element hat also den Index 0, das zweite den Index 1 und so weiter. Sie können auf einzelne Elemente im Array mit der Notation in eckigen Klammern zugreifen und den Index des Elements angeben, ähnlich wie Sie [auf die Buchstaben in einem String zugegriffen haben](/de/docs/Learn_web_development/Core/Scripting/Useful_string_methods#retrieving_a_specific_string_character).

1. Geben Sie Folgendes in Ihre Konsole ein:

   ```js
   const shopping = ["bread", "milk", "cheese", "hummus", "noodles"];
   console.log(shopping[0]);
   // returns "bread"
   ```

2. Sie können auch ein Element in einem Array ändern, indem Sie einem einzigen Array-Element einen neuen Wert zuweisen. Probieren Sie Folgendes aus:

   ```js
   const shopping = ["bread", "milk", "cheese", "hummus", "noodles"];
   shopping[0] = "tahini";
   console.log(shopping);
   // shopping will now return [ "tahini", "milk", "cheese", "hummus", "noodles" ]
   ```

   > [!NOTE]
   > Wir haben es bereits gesagt, aber hier zur Erinnerung: JavaScript beginnt bei Arrays mit der Indexierung bei null!

3. Beachten Sie, dass ein Array innerhalb eines Arrays ein mehrdimensionales Array genannt wird. Sie können auf ein Element in einem Array zugreifen, das sich selbst in einem anderen Array befindet, indem Sie zwei eckige Klammern zusammen verketten. Um beispielsweise auf eines der Elemente im dritten Element des `random`-Arrays (siehe vorherigen Abschnitt) zuzugreifen, könnten Sie Folgendes tun:

   ```js
   const random = ["tree", 795, [0, 1, 2]];
   random[2][2];
   ```

4. Probieren Sie aus, weitere Änderungen an Ihren Array-Beispielen vorzunehmen, bevor Sie fortfahren. Experimentieren Sie ein wenig und schauen Sie, was funktioniert und was nicht.

## Index von Elementen in einem Array finden

Wenn Sie den Index eines Elements nicht kennen, können Sie die {{jsxref("Array.prototype.indexOf()","indexOf()")}}-Methode verwenden.
Die `indexOf()`-Methode nimmt ein Element als Argument und gibt entweder den Index des Elements oder `-1` zurück, wenn das Element nicht im Array enthalten ist:

```js
const birds = ["Parrot", "Falcon", "Owl"];
console.log(birds.indexOf("Owl")); //  2
console.log(birds.indexOf("Rabbit")); // -1
```

## Elemente hinzufügen

Um ein oder mehrere Elemente an das Ende eines Arrays hinzuzufügen, können wir {{jsxref("Array.prototype.push()","push()")}} verwenden. Beachten Sie, dass Sie ein oder mehrere Elemente angeben müssen, die Sie ans Ende Ihres Arrays hinzufügen möchten.

```js
const cities = ["Manchester", "Liverpool"];
cities.push("Cardiff");
console.log(cities); // [ "Manchester", "Liverpool", "Cardiff" ]
cities.push("Bradford", "Brighton");
console.log(cities); // [ "Manchester", "Liverpool", "Cardiff", "Bradford", "Brighton" ]
```

Die neue Länge des Arrays wird zurückgegeben, wenn der Methodenaufruf abgeschlossen ist. Wenn Sie die neue Array-Länge in einer Variablen speichern möchten, könnten Sie Folgendes tun:

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

Im Aufruf von `splice()` gibt das erste Argument an, wo begonnen werden soll, Elemente zu entfernen, und das zweite Argument gibt an, wie viele Elemente entfernt werden sollen. Es können also mehrere Elemente entfernt werden:

```js
const cities = ["Manchester", "Liverpool", "Edinburgh", "Carlisle"];
const index = cities.indexOf("Liverpool");
if (index !== -1) {
  cities.splice(index, 2);
}
console.log(cities); // [ "Manchester", "Carlisle" ]
```

## Auf jedes Element zugreifen

Sehr häufig möchten Sie auf jedes Element im Array zugreifen. Dies können Sie mit der {{jsxref("statements/for...of","for...of")}}-Anweisung tun:

```js
const birds = ["Parrot", "Falcon", "Owl"];

for (const bird of birds) {
  console.log(bird);
}
```

Manchmal möchten Sie dasselbe mit jedem Element in einem Array machen und ein Array mit den geänderten Elementen erhalten. Dies können Sie mit {{jsxref("Array.prototype.map()","map()")}} tun. Der folgende Code nimmt ein Array von Zahlen und verdoppelt jede Zahl:

```js
function double(number) {
  return number * 2;
}
const numbers = [5, 2, 7, 6];
const doubled = numbers.map(double);
console.log(doubled); // [ 10, 4, 14, 12 ]
```

Wir geben `map()` eine Funktion, und `map()` ruft die Funktion einmal für jedes Element im Array auf und gibt das Element als Argument weiter. Schließlich fügt es den Rückgabewert jedes Funktionsaufrufs zu einem neuen Array hinzu und gibt das neue Array zurück.

Manchmal möchten Sie ein neues Array erstellen, das nur die Elemente des ursprünglichen Arrays enthält, die einem bestimmten Test entsprechen. Dies können Sie mit {{jsxref("Array.prototype.filter()","filter()")}} tun. Der folgende Code nimmt ein Array von Strings und gibt ein Array zurück, das nur die Strings enthält, die länger als 8 Zeichen sind:

```js
function isLong(city) {
  return city.length > 8;
}
const cities = ["London", "Liverpool", "Totnes", "Edinburgh"];
const longer = cities.filter(isLong);
console.log(longer); // [ "Liverpool", "Edinburgh" ]
```

Wie bei `map()` geben wir eine Funktion an die `filter()`-Methode, und `filter()` ruft diese Funktion für jedes Element im Array auf und gibt das Element als Argument weiter. Wenn die Funktion `true` zurückgibt, wird das Element zum neuen Array hinzugefügt. Schließlich wird das neue Array zurückgegeben.

## Konvertierung zwischen Strings und Arrays

Häufig wird Ihnen eine Menge roher Daten in einem langen String präsentiert, und Sie möchten die nützlichen Elemente in eine nützlichere Form extrahieren und dann Dinge damit tun, wie z. B. sie in einer Datentabelle anzeigen. Hierfür können wir die {{jsxref("String.prototype.split()","split()")}}-Methode verwenden. In ihrer einfachsten Form nimmt sie einen einzelnen Parameter, das Zeichen, bei dem der String getrennt werden soll, und gibt die Teilstrings zwischen dem Trennzeichen als Elemente in einem Array zurück.

> [!NOTE]
> Okay, dies ist technisch gesehen eine String-Methode, keine Array-Methode, aber wir haben sie hier eingefügt, da sie hier gut hinpasst.

1. Spielen wir damit, um zu sehen, wie es funktioniert. Erstellen Sie zunächst einen String in Ihrer Konsole:

   ```js
   const data = "Manchester,London,Liverpool,Birmingham,Leeds,Carlisle";
   ```

2. Trennen wir ihn nun bei jedem Komma:

   ```js
   const cities = data.split(",");
   cities;
   ```

3. Zum Schluss versuchen Sie, die Länge Ihres neuen Arrays zu ermitteln und einige Elemente daraus abzurufen:

   ```js
   cities.length;
   cities[0]; // the first item in the array
   cities[1]; // the second item in the array
   cities[cities.length - 1]; // the last item in the array
   ```

4. Sie können auch den umgekehrten Weg mit der {{jsxref("Array.prototype.join()","join()")}}-Methode gehen. Probieren Sie Folgendes:

   ```js
   const commaSeparated = cities.join(",");
   commaSeparated;
   ```

5. Eine andere Möglichkeit, ein Array in einen String zu konvertieren, besteht darin, die {{jsxref("Array.prototype.toString()","toString()")}}-Methode zu verwenden. `toString()` ist wohl einfacher als `join()`, da es keinen Parameter erfordert, aber eingeschränkter ist. Mit `join()` können Sie verschiedene Trennzeichen angeben, während `toString()` immer ein Komma verwendet. (Versuchen Sie es mit einem anderen Zeichen als einem Komma bei Schritt 4.)

   ```js
   const dogNames = ["Rocket", "Flash", "Bella", "Slugger"];
   dogNames.toString(); // Rocket,Flash,Bella,Slugger
   ```

## Aktives Lernen: Diese Produkte ausdrucken

Kehren wir zu dem Beispiel zurück, das wir zuvor beschrieben haben – Produktnamen und Preise auf einer Rechnung auszugeben, dann die Preise zu summieren und sie unten auf der Rechnung auszugeben. Im bearbeitbaren Beispiel unten gibt es Kommentare mit Zahlen – jede davon kennzeichnet eine Stelle, an der Sie etwas zum Code hinzufügen müssen. Sie sind wie folgt:

1. Unter dem Kommentar `// number 1` sind eine Reihe von Strings, die jeweils einen Produktnamen und einen Preis enthalten, getrennt durch einen Doppelpunkt. Wandeln Sie dies in ein Array um und speichern Sie es in einer Variablen namens `products`.
2. Unter dem Kommentar `// number 2` starten Sie eine `for...of()`-Schleife, um jedes Element des `products`-Arrays durchzugehen.
3. Unter dem Kommentar `// number 3` schreiben Sie eine Zeile Code, die das aktuelle Array-Element (`name:price`) in zwei separate Elemente aufteilt, eines mit nur dem Namen und eines mit nur dem Preis. Wenn Sie nicht wissen, wie das geht, sehen Sie sich den Artikel [Nützliche String-Methoden](/de/docs/Learn_web_development/Core/Scripting/Useful_string_methods) an oder noch besser den Abschnitt [Konvertierung zwischen Strings und Arrays](#konvertierung_zwischen_strings_und_arrays) aus diesem Artikel.
4. Konvertieren Sie im Rahmen der obigen Codezeile auch den Preis von einem String in eine Zahl. Wenn Sie sich nicht daran erinnern, wie das geht, schauen Sie sich den [ersten String-Artikel](/de/docs/Learn_web_development/Core/Scripting/Strings#numbers_vs._strings) an.
5. Es gibt eine Variable namens `total`, die oben im Code erstellt und auf 0 gesetzt wird. Innerhalb der Schleife (unter `// number 4`) schreiben Sie eine Zeile, die den Preis des aktuellen Elements in jeder Iteration der Schleife zu dieser Gesamtmenge addiert, sodass am Ende des Codes die korrekte Gesamtsumme auf die Rechnung gedruckt wird. Sie benötigen möglicherweise einen [Zuweisungsoperator](/de/docs/Learn_web_development/Core/Scripting/Math#assignment_operators) dafür.
6. Ändern Sie die Zeile direkt unter `// number 5`, sodass die Variable `itemText` gleich "aktueller Artikelname – $aktueller Artikelpreis" gesetzt wird, z. B. "Schuhe – $23.99", sodass die richtigen Informationen für jedes Element auf der Rechnung angezeigt werden. Dies ist nur einfache String-Konkatenation, die Ihnen bekannt sein sollte.
7. Fügen Sie schließlich unter dem Kommentar `// number 6` ein `}` hinzu, um das Ende der `for...of()`-Schleife zu markieren.

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

## Aktives Lernen: Die Top-5-Suchen

Eine gute Anwendung für Array-Methoden wie {{jsxref("Array.prototype.push()","push()")}} und {{jsxref("Array.prototype.pop()","pop()")}} ist die Verwaltung einer Liste aktuell aktiver Elemente in einer Webanwendung. In einer animierten Szene könnten Sie beispielsweise ein Array von Objekten haben, das die aktuell angezeigten Hintergrundgrafiken repräsentiert, und Sie möchten möglicherweise aus Leistungs- oder Übersichtsgründen nur maximal 50 anzeigen lassen. Wenn neue Objekte erstellt und dem Array hinzugefügt werden, können ältere aus dem Array gelöscht werden, um die gewünschte Anzahl beizubehalten.

In diesem Beispiel zeigen wir eine viel einfachere Anwendung – hier geben wir Ihnen eine gefälschte Suchseite mit einer Suchleiste. Die Idee ist, dass bei der Eingabe von Begriffen in die Suchleiste die letzten fünf Suchbegriffe in der Liste angezeigt werden. Wenn die Anzahl der Begriffe fünf übersteigt, wird jedes Mal, wenn ein neuer Begriff hinzugefügt wird, der letzte Begriff gelöscht, sodass stets die letzten fünf Begriffe angezeigt werden.

> [!NOTE]
> In einer echten Suchanwendung könnten Sie wahrscheinlich auf die vorherigen Suchbegriffe klicken, um diese erneut zu suchen, und es würden tatsächliche Suchergebnisse angezeigt! Wir halten es aber vorerst einfach.

Um die App zu vervollständigen, müssen Sie:

1. Unter dem Kommentar `// number 1` eine Zeile hinzufügen, die den aktuellen Wert, der in das Suchfeld eingegeben wurde, am Anfang des Arrays hinzufügt. Dieser kann mit `searchInput.value` abgerufen werden.
2. Unter dem Kommentar `// number 2` eine Zeile hinzufügen, die den Wert entfernt, der sich derzeit am Ende des Arrays befindet.

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

Sie haben das Ende dieses Artikels erreicht, aber können Sie sich die wichtigsten Informationen merken? Sie finden weitere Tests, um zu überprüfen, ob Sie die Informationen behalten haben, bevor Sie weitermachen – sehen Sie sich [Testen Sie Ihre Fähigkeiten: Arrays](/de/docs/Learn_web_development/Core/Scripting/Test_your_skills:_Arrays) an.

## Fazit

Nach dem Lesen dieses Artikels werden Sie sicher zustimmen, dass Arrays ziemlich nützlich sind; Sie werden sie in JavaScript überall finden, oft in Verbindung mit Schleifen, um dasselbe mit jedem Element in einem Array zu tun. Wir werden Ihnen später im Modul alles über Schleifen beibringen.

Im nächsten Artikel geben wir Ihnen eine Herausforderung, um Ihr Verständnis der bisher behandelten Artikel zu testen.

## Siehe auch

- [Indizierte Sammlungen](/de/docs/Web/JavaScript/Guide/Indexed_collections)
  - : Ein Leitfaden auf fortgeschrittenem Niveau für Arrays und deren Verwandte, die typisierten Arrays.
- {{jsxref("Array")}}
  - : Die Referenzseite zum `Array`-Objekt – für eine detaillierte Referenz zu den in dieser Seite behandelten Funktionen und vielen weiteren.
- [Nebenbei: Einführung in Arrays](https://v2.scrimba.com/the-frontend-developer-career-path-c0j/~06e?via=mdn), Scrimba <sup>_MDN-Lernpartner_</sup>
  - : Eine interaktive Lektion, die eine Einführung in Arrays bietet.

{{PreviousMenuNext("Learn_web_development/Core/Scripting/Useful_string_methods", "Learn_web_development/Core/Scripting/Silly_story_generator", "Learn_web_development/Core/Scripting")}}
