---
title: Arrays
slug: Learn/JavaScript/First_steps/Arrays
l10n:
  sourceCommit: cde9330e9bbaddea72febf44dcc3a7db16fe1a11
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/JavaScript/First_steps/Useful_string_methods", "Learn/JavaScript/First_steps/Silly_story_generator", "Learn/JavaScript/First_steps")}}

Im letzten Artikel dieses Moduls schauen wir uns Arrays an – eine elegante Möglichkeit, eine Liste von Datenobjekten unter einem einzigen Variablennamen zu speichern. Hier betrachten wir, warum dies nützlich ist, untersuchen dann, wie man ein Array erstellt, wie man Elemente in einem Array abrufen, hinzufügen und entfernen kann, und vieles mehr.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Ein grundlegendes Verständnis von HTML und CSS sowie ein
        Verständnis dafür, was JavaScript ist.
      </td>
    </tr>
    <tr>
      <th scope="row">Zielsetzung:</th>
      <td>
        Zu verstehen, was Arrays sind und wie man sie in JavaScript manipuliert.
      </td>
    </tr>
  </tbody>
</table>

## Was ist ein Array?

Arrays werden im Allgemeinen als "listenartige Objekte" beschrieben; sie sind im Wesentlichen einzelne Objekte, die mehrere Werte in einer Liste enthalten. Array-Objekte können in Variablen gespeichert und auf die gleiche Weise behandelt werden wie andere Werttypen, mit dem Unterschied, dass wir auf jeden Wert der Liste einzeln zugreifen und nützliche und effiziente Dinge mit der Liste tun können, wie zum Beispiel durch sie zu schleifen und dasselbe mit jedem Wert zu tun. Vielleicht haben wir eine Reihe von Produktobjekten und deren Preise in einem Array gespeichert, und wir möchten sie alle durchlaufen und auf einer Rechnung ausdrucken und gleichzeitig alle Preise zusammenzählen und den Gesamtpreis am Ende ausdrucken.

Hätten wir keine Arrays, müssten wir jedes Objekt in einer separaten Variablen speichern, dann den Code, der das Drucken und Addieren durchführt, für jedes Objekt separat aufrufen. Das Schreiben wäre viel umfangreicher, weniger effizient und fehleranfälliger. Wenn wir 10 Objekte zur Rechnung hinzufügen müssten, wäre es bereits ärgerlich, aber wie wäre es mit 100 Objekten oder 1000? Auf dieses Beispiel kommen wir später im Artikel zurück.

Wie in vorherigen Artikeln, lernen wir über die Grundlagen von Arrays, indem wir einige Beispiele in die [Browser-Entwicklertools-Konsole](/de/docs/Learn/Common_questions/Tools_and_setup/What_are_browser_developer_tools) eingeben.

## Arrays erstellen

Arrays bestehen aus eckigen Klammern und Elementen, die durch Kommas getrennt sind.

1. Angenommen, wir möchten eine Einkaufsliste in einem Array speichern. Fügen Sie den folgenden Code in die Konsole ein:

   ```js
   const shopping = ["bread", "milk", "cheese", "hummus", "noodles"];
   console.log(shopping);
   ```

2. Im obigen Beispiel ist jedes Element ein String, aber in einem Array können wir verschiedene Datentypen speichern – Strings, Zahlen, Objekte und sogar andere Arrays. Wir können auch Datentypen innerhalb eines einzigen Arrays mischen – wir sind nicht auf die Speicherung von nur Zahlen in einem Array und nur Strings in einem anderen begrenzt. Zum Beispiel:

   ```js
   const sequence = [1, 1, 2, 3, 5, 8, 13];
   const random = ["tree", 795, [0, 1, 2]];
   ```

3. Erstellen Sie einige Beispiel-Arrays, bevor Sie fortfahren.

## Die Länge eines Arrays ermitteln

Sie können die Länge eines Arrays ermitteln (wie viele Elemente es enthält), indem Sie die {{jsxref("Array.prototype.length","length")}}-Eigenschaft nutzen, genau wie Sie die Länge (in Zeichen) eines Strings ermitteln. Versuchen Sie Folgendes:

```js
const shopping = ["bread", "milk", "cheese", "hummus", "noodles"];
console.log(shopping.length); // 5
```

## Zugriff und Änderung von Array-Elementen

Elemente in einem Array werden beginnend mit null nummeriert. Diese Zahl wird als _Index_ des Elements bezeichnet. Das erste Element hat also den Index 0, das zweite den Index 1 und so weiter. Sie können auf einzelne Elemente im Array mit der Klammernotation zugreifen, indem Sie den Index des Elements angeben, genauso wie Sie [den Zugriff auf die Buchstaben in einem String](/de/docs/Learn/JavaScript/First_steps/Useful_string_methods#retrieving_a_specific_string_character) erhalten haben.

1. Geben Sie Folgendes in Ihre Konsole ein:

   ```js
   const shopping = ["bread", "milk", "cheese", "hummus", "noodles"];
   console.log(shopping[0]);
   // returns "bread"
   ```

2. Sie können ein Element in einem Array auch ändern, indem Sie einem einzelnen Array-Element einen neuen Wert zuweisen. Versuchen Sie Folgendes:

   ```js
   const shopping = ["bread", "milk", "cheese", "hummus", "noodles"];
   shopping[0] = "tahini";
   console.log(shopping);
   // shopping will now return [ "tahini", "milk", "cheese", "hummus", "noodles" ]
   ```

   > [!NOTE]
   > Wir haben es bereits gesagt, aber zur Erinnerung — JavaScript beginnt Arrays bei null zu indexieren!

3. Beachten Sie, dass ein Array innerhalb eines Arrays als mehrdimensionales Array bezeichnet wird. Sie können auf ein Element in einem Array zugreifen, das sich selbst in einem anderen Array befindet, indem Sie zwei Sätze von eckigen Klammern hintereinander verknoten. Um zum Beispiel auf eines der Elemente im Array zuzugreifen, das das dritte Element im `random` Array ist (siehe vorherigen Abschnitt), könnten wir so etwas tun:

   ```js
   const random = ["tree", 795, [0, 1, 2]];
   random[2][2];
   ```

4. Versuchen Sie, einige weitere Änderungen an Ihrem Array-Beispiel vorzunehmen, bevor Sie fortfahren. Probieren Sie etwas herum und schauen Sie, was funktioniert und was nicht.

## Den Index von Elementen in einem Array finden

Wenn Sie den Index eines Elements nicht kennen, können Sie die Methode {{jsxref("Array.prototype.indexOf()","indexOf()")}} verwenden. Die `indexOf()`-Methode nimmt ein Element als Argument und gibt entweder dessen Index oder `-1` zurück, wenn das Element nicht im Array enthalten ist:

```js
const birds = ["Parrot", "Falcon", "Owl"];
console.log(birds.indexOf("Owl")); //  2
console.log(birds.indexOf("Rabbit")); // -1
```

## Elemente hinzufügen

Um ein oder mehrere Elemente am Ende eines Arrays hinzuzufügen, können wir {{jsxref("Array.prototype.push()","push()")}} verwenden. Beachten Sie, dass Sie ein oder mehrere hinzuzufügende Elemente als Argument angeben müssen.

```js
const cities = ["Manchester", "Liverpool"];
cities.push("Cardiff");
console.log(cities); // [ "Manchester", "Liverpool", "Cardiff" ]
cities.push("Bradford", "Brighton");
console.log(cities); // [ "Manchester", "Liverpool", "Cardiff", "Bradford", "Brighton" ]
```

Die neue Länge des Arrays wird nach Abschluss des Methodenausdrucks zurückgegeben. Wenn Sie die neue Array-Länge in einer Variablen speichern möchten, könnten Sie Folgendes tun:

```js
const cities = ["Manchester", "Liverpool"];
const newLength = cities.push("Bristol");
console.log(cities); // [ "Manchester", "Liverpool", "Bristol" ]
console.log(newLength); // 3
```

Um ein Element an den Anfang des Arrays hinzuzufügen, verwenden Sie {{jsxref("Array.prototype.unshift()","unshift()")}};

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

Um das erste Element aus einem Array zu entfernen, verwenden Sie {{jsxref("Array.prototype.shift()","shift()")}};

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

In diesem `splice()`-Aufruf gibt das erste Argument an, wo mit dem Entfernen von Elementen begonnen werden soll, und das zweite Argument gibt an, wie viele Elemente entfernt werden sollen. So können Sie mehr als ein Element entfernen:

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

Manchmal möchten Sie dasselbe mit jedem Element in einem Array tun, sodass Sie mit einem Array mit den geänderten Elementen enden. Sie können dies mit {{jsxref("Array.prototype.map()","map()")}} tun. Der folgende Code nimmt ein Array von Zahlen und verdoppelt jede Zahl:

```js
function double(number) {
  return number * 2;
}
const numbers = [5, 2, 7, 6];
const doubled = numbers.map(double);
console.log(doubled); // [ 10, 4, 14, 12 ]
```

Wir geben `map()` eine Funktion, und `map()` ruft die Funktion für jedes Element im Array auf und übergibt das Element. Anschließend wird der Rückgabewert jedes Funktionsaufrufs zu einem neuen Array hinzugefügt, und schließlich wird das neue Array zurückgegeben.

Manchmal möchten Sie ein neues Array erstellen, das nur die Elemente im Original-Array enthält, die einem Test entsprechen. Sie können dies mit {{jsxref("Array.prototype.filter()","filter()")}} tun. Der folgende Code nimmt ein Array von Strings und gibt ein Array zurück, das nur die Strings enthält, die länger als 8 Zeichen sind:

```js
function isLong(city) {
  return city.length > 8;
}
const cities = ["London", "Liverpool", "Totnes", "Edinburgh"];
const longer = cities.filter(isLong);
console.log(longer); // [ "Liverpool", "Edinburgh" ]
```

Wie bei `map()` geben wir der Methode `filter()` eine Funktion, und `filter()` ruft diese Funktion für jedes Element im Array auf und übergibt das Element. Wenn die Funktion `true` zurückgibt, wird das Element zu einem neuen Array hinzugefügt. Schließlich wird das neue Array zurückgegeben.

## Konvertierung zwischen Strings und Arrays

Häufig werden Ihnen Rohdaten in einem großen, langen String präsentiert, und Sie möchten vielleicht die nützlichen Elemente in eine nützlichere Form trennen und dann Dinge damit tun, z. B. sie in einer Datentabelle anzeigen. Um dies zu tun, können wir die {{jsxref("String.prototype.split()","split()")}}-Methode verwenden. In ihrer einfachsten Form nimmt sie ein einzelnes Trennzeichen-Parameter, das Zeichen, bei dem der String getrennt werden soll, und gibt die Teilstrings zwischen dem Trennzeichen als Elemente in einem Array zurück.

> [!NOTE]
> Okay, das ist technisch gesehen eine String-Methode, keine Array-Methode, aber wir haben sie hinzugefügt, weil sie hier gut passt.

1. Spielen wir damit, um zu sehen, wie es funktioniert. Zuerst erstellen Sie einen String in Ihrer Konsole:

   ```js
   const data = "Manchester,London,Liverpool,Birmingham,Leeds,Carlisle";
   ```

2. Teilen wir ihn jetzt bei jedem Komma:

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

4. Sie können auch den umgekehrten Weg gehen, indem Sie die {{jsxref("Array.prototype.join()","join()")}}-Methode verwenden. Versuchen Sie Folgendes:

   ```js
   const commaSeparated = cities.join(",");
   commaSeparated;
   ```

5. Eine weitere Möglichkeit, ein Array in einen String zu konvertieren, ist die {{jsxref("Array.prototype.toString()","toString()")}}-Methode. `toString()` ist wohl einfacher als `join()`, da es keinen Parameter benötigt, aber auch einschränkender. Mit `join()` können Sie verschiedene Trennzeichen angeben, während `toString()` immer ein Komma verwendet. (Versuchen Sie, Schritt 4 mit einem anderen Zeichen als einem Komma auszuführen.)

   ```js
   const dogNames = ["Rocket", "Flash", "Bella", "Slugger"];
   dogNames.toString(); // Rocket,Flash,Bella,Slugger
   ```

## Aktives Lernen: Diese Produkte drucken

Kehren wir zu dem Beispiel zurück, das wir zuvor beschrieben haben – den Druck von Produktnamen und Preisen auf einer Rechnung, dann das Addieren der Preise und deren Druck am Ende. Im editierbaren Beispiel unten befinden sich Kommentare mit Nummern – jeder dieser Punkte kennzeichnet eine Stelle, an der Sie dem Code etwas hinzufügen müssen. Diese sind wie folgt:

1. Unter dem Kommentar `// number 1` befinden sich eine Reihe von Strings, die jeweils einen Produktnamen und Preis, getrennt durch einen Doppelpunkt, enthalten. Wir möchten, dass Sie dies in ein Array umwandeln und in einem Array namens `products` speichern.
2. Unter dem Kommentar `// number 2` beginnen Sie eine `for...of()`-Schleife, um jedes Element im `products`-Array zu durchlaufen.
3. Unter dem Kommentar `// number 3` möchten wir, dass Sie eine Zeile Code schreiben, die das aktuelle Array-Element (`name:price`) in zwei separate Elemente aufteilt, eines, das nur den Namen und eines, das nur den Preis enthält. Wenn Sie sich nicht sicher sind, wie das geht, konsultieren Sie den Artikel [Nützliche String-Methoden](/de/docs/Learn/JavaScript/First_steps/Useful_string_methods) zur Hilfe, oder noch besser, schauen Sie sich den Abschnitt [Konvertierung zwischen Strings und Arrays](#konvertierung_zwischen_strings_und_arrays) dieses Artikels an.
4. Im Rahmen der obigen Codezeile möchten Sie auch den Preis von einem String in eine Zahl umwandeln. Wenn Sie sich nicht erinnern können, wie das geht, schauen Sie sich den [ersten Strings-Artikel](/de/docs/Learn/JavaScript/First_steps/Strings#numbers_vs._strings) an.
5. Es gibt eine Variable namens `total`, die erstellt und oben im Code mit dem Wert 0 initialisiert wird. In der Schleife (unter `// number 4`) möchten wir, dass Sie eine Zeile hinzufügen, die den aktuellen Preis des Elements in jeder Iteration der Schleife zu diesem Gesamtwert hinzufügt, sodass am Ende des Codes der korrekte Gesamtwert auf die Rechnung gedruckt wird. Möglicherweise benötigen Sie einen [Zuweisungsoperator](/de/docs/Learn/JavaScript/First_steps/Math#assignment_operators), um dies zu tun.
6. Wir möchten, dass Sie die Zeile direkt unter `// number 5` so ändern, dass die Variable `itemText` gleich "aktueller Artikelname — $aktueller Artikelpreis" ist, zum Beispiel "Schuhe — $23,99" in jedem Fall, damit die richtigen Informationen für jeden Artikel auf der Rechnung gedruckt werden. Dies ist nur eine einfache String-Verkettung, die Ihnen bekannt sein sollte.
7. Schließlich müssen Sie unter dem Kommentar `// number 6` eine `}` hinzufügen, um das Ende der `for...of()`-Schleife zu markieren.

````html hidden
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

totalBox.textContent = 'Total:

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
````

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

## Aktives Lernen: Top 5 Suchen

Ein guter Einsatz für Array-Methoden wie {{jsxref("Array.prototype.push()","push()")}} und {{jsxref("Array.prototype.pop()","pop()")}} ist, wenn Sie ein Protokoll der derzeit aktiven Objekte in einer Webanwendung führen. In einer animierten Szene könnten Sie beispielsweise ein Array von Objekten haben, die die derzeit angezeigten Hintergrundgrafiken darstellen, und Sie möchten vielleicht nur 50 auf einmal anzeigen, aus Leistungs- oder Übersichtsg

ründen. Während neue Objekte erstellt und zum Array hinzugefügt werden, können ältere aus dem Array gelöscht werden, um die gewünschte Anzahl beizubehalten.

In diesem Beispiel zeigen wir eine viel einfachere Verwendung – hier bieten wir Ihnen eine Beispiel-Suchseite mit einem Suchfeld an. Die Idee ist, dass bei der Eingabe von Begriffen im Suchfeld die Top 5 der vorherigen Suchbegriffe in der Liste angezeigt werden. Wenn die Anzahl der Begriffe 5 übersteigt, wird bei jeder neuen Eingabe am Anfang der letzte Begriff gelöscht, sodass immer die 5 vorherigen Begriffe angezeigt werden.

> [!NOTE]
> In einer echten Suchanwendung könnten Sie wahrscheinlich auf die vorherigen Suchbegriffe klicken, um zu früheren Suchen zurückzukehren, und es würden tatsächliche Suchergebnisse angezeigt werden! Wir halten es vorerst nur einfach.

Um die App zu vervollständigen, benötigen wir von Ihnen:

1. Fügen Sie eine Zeile unter dem Kommentar `// number 1` hinzu, die den aktuellen Wert, der in das Suchfeld eingegeben wurde, an den Anfang des Arrays hinzufügt. Dieser kann mit `searchInput.value` abgerufen werden.
2. Fügen Sie eine Zeile unter dem Kommentar `// number 2` hinzu, die den derzeit am Ende des Arrays befindlichen Wert entfernt.

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

## Testen Sie Ihr Können!

Sie haben das Ende dieses Artikels erreicht, aber können Sie sich die wichtigsten Informationen merken? Sie finden einige weitere Tests, um zu überprüfen, ob Sie diese Informationen behalten haben, bevor Sie weitermachen – siehe [Testen Sie Ihr Können: Arrays](/de/docs/Learn/JavaScript/First_steps/Test_your_skills:_Arrays).

## Fazit

Nach der Lektüre dieses Artikels sind wir sicher, dass Sie zustimmen werden, dass Arrays ziemlich nützlich erscheinen; Sie werden sie überall in JavaScript finden, oft in Verbindung mit Schleifen, um dasselbe mit jedem Element in einem Array zu tun. Wir werden Ihnen alle nützlichen Grundlagen über Schleifen im nächsten Modul beibringen, aber im Moment sollten Sie sich selbst auf die Schulter klopfen und eine wohlverdiente Pause einlegen; Sie haben alle Artikel in diesem Modul durchgearbeitet!

Das Einzige, was noch zu tun bleibt, ist die Bearbeitung der Bewertung dieses Moduls, die Ihr Verständnis der vorhergehenden Artikel testen wird.

## Siehe auch

- [Indizierte Sammlungen](/de/docs/Web/JavaScript/Guide/Indexed_collections) — ein Leitfaden für fortgeschrittene Nutzer zu Arrays und deren Verwandten, den typisierten Arrays.
- {{jsxref("Array")}} — die Referenzseite zum `Array`-Objekt — für einen ausführlichen Referenzleitfaden zu den auf dieser Seite besprochenen Eigenschaften und vielen weiteren.

{{PreviousMenuNext("Learn/JavaScript/First_steps/Useful_string_methods", "Learn/JavaScript/First_steps/Silly_story_generator", "Learn/JavaScript/First_steps")}}
