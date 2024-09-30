---
title: Arrays
slug: Learn/JavaScript/First_steps/Arrays
l10n:
  sourceCommit: cde9330e9bbaddea72febf44dcc3a7db16fe1a11
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/JavaScript/First_steps/Useful_string_methods", "Learn/JavaScript/First_steps/Silly_story_generator", "Learn/JavaScript/First_steps")}}

Im letzten Artikel dieses Moduls werden wir uns Arrays ansehen - eine elegante Möglichkeit, eine Liste von Daten unter einem einzigen Variablennamen zu speichern. Hier betrachten wir, warum dies nützlich ist, und erforschen dann, wie man ein Array erstellt, Elemente abruft, hinzufügt und entfernt, die in einem Array gespeichert sind, und mehr.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Ein grundlegendes Verständnis von HTML und CSS, sowie ein
        Verständnis, was JavaScript ist.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Zu verstehen, was Arrays sind und wie man sie in JavaScript manipuliert.
      </td>
    </tr>
  </tbody>
</table>

## Was ist ein Array?

Arrays werden allgemein als "listenartige Objekte" beschrieben; im Grunde sind sie einzelne Objekte, die mehrere Werte in einer Liste enthalten. Array-Objekte können in Variablen gespeichert und ähnlich wie andere Werttypen behandelt werden, mit dem Unterschied, dass wir auf jeden einzelnen Wert innerhalb der Liste zugreifen und super nützliche und effiziente Dinge mit der Liste machen können, wie sie durchlaufen und das gleiche auf jeden Wert anwenden. Vielleicht haben wir eine Serie von Produktartikeln und deren Preise in einem Array gespeichert und möchten sie durchlaufen und auf einer Rechnung ausdrucken, während wir alle Preise zusammenzählen und den Gesamtpreis am Ende ausdrucken.

Ohne Arrays müssten wir jeden Artikel in einer separaten Variablen speichern und den Code, der das Drucken und Hinzufügen übernimmt, für jeden Artikel separat aufrufen. Dies wäre viel länger zu schreiben, weniger effizient und fehleranfälliger. Wenn wir 10 Artikel zur Rechnung hinzufügen müssten, wäre das bereits nervig, aber was ist mit 100 Artikeln oder 1000? Wir werden später im Artikel darauf zurückkommen.

Wie in früheren Artikeln lernen wir die Grundlagen von Arrays, indem wir einige Beispiele in die [Entwicklertools des Browsers](/de/docs/Learn/Common_questions/Tools_and_setup/What_are_browser_developer_tools) eingeben.

## Arrays erstellen

Arrays bestehen aus eckigen Klammern und Elementen, die durch Kommas getrennt sind.

1. Angenommen, wir möchten eine Einkaufsliste in einem Array speichern. Fügen Sie den folgenden Code in die Konsole ein:

   ```js
   const shopping = ["bread", "milk", "cheese", "hummus", "noodles"];
   console.log(shopping);
   ```

2. Im obigen Beispiel ist jedes Element eine Zeichenkette, aber in einem Array können wir verschiedene Datentypen speichern - Zeichenketten, Zahlen, Objekte und sogar andere Arrays. Wir können auch Datentypen in einem einzelnen Array mischen - wir müssen uns nicht darauf beschränken, nur Zahlen in einem Array und in einem anderen nur Zeichenketten zu speichern. Zum Beispiel:

   ```js
   const sequence = [1, 1, 2, 3, 5, 8, 13];
   const random = ["tree", 795, [0, 1, 2]];
   ```

3. Bevor Sie fortfahren, erstellen Sie einige Beispiel-Arrays.

## Die Länge eines Arrays ermitteln

Sie können die Länge eines Arrays (wie viele Elemente darin sind) auf genau die gleiche Weise herausfinden, wie Sie die Länge (in Zeichen) einer Zeichenkette herausfinden - indem Sie die {{jsxref("Array.prototype.length","length")}} Eigenschaft verwenden. Probieren Sie Folgendes aus:

```js
const shopping = ["bread", "milk", "cheese", "hummus", "noodles"];
console.log(shopping.length); // 5
```

## Auf Array-Elemente zugreifen und diese ändern

Elemente in einem Array werden ab null nummeriert. Diese Nummer wird als Index des Elements bezeichnet. Das erste Element hat also den Index 0, das zweite den Index 1 und so weiter. Sie können auf einzelne Elemente im Array mit der Klammernnotation zugreifen und den Index des Elements angeben, auf die gleiche Weise, wie Sie [auf die Buchstaben in einer Zeichenkette zugegriffen haben](/de/docs/Learn/JavaScript/First_steps/Useful_string_methods#retrieving_a_specific_string_character).

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
   > Wir haben es schon einmal gesagt, aber nur zur Erinnerung - JavaScript beginnt Arrays bei null zu indizieren!

3. Beachten Sie, dass ein Array innerhalb eines Arrays als mehrdimensionales Array bezeichnet wird. Sie können auf ein Element in einem Array zugreifen, das sich selbst in einem anderen Array befindet, indem Sie zwei Sätze von eckigen Klammern zusammenketten. Zum Beispiel, um auf eines der Elemente in dem Array zuzugreifen, das das dritte Element im `random` Array ist (siehe vorheriger Abschnitt), könnten wir so etwas tun:

   ```js
   const random = ["tree", 795, [0, 1, 2]];
   random[2][2];
   ```

4. Versuchen Sie, einige weitere Änderungen an Ihren Array-Beispielen vorzunehmen, bevor Sie weitermachen. Spielen Sie ein wenig herum und sehen Sie, was funktioniert und was nicht.

## Finden des Indexes von Elementen in einem Array

Wenn Sie den Index eines Elements nicht kennen, können Sie die Methode {{jsxref("Array.prototype.indexOf()","indexOf()")}} verwenden.
Die `indexOf()` Methode nimmt ein Element als Argument und gibt entweder den Index des Elements zurück oder `-1`, wenn das Element nicht im Array ist:

```js
const birds = ["Parrot", "Falcon", "Owl"];
console.log(birds.indexOf("Owl")); //  2
console.log(birds.indexOf("Rabbit")); // -1
```

## Elemente hinzufügen

Um ein oder mehrere Elemente an das Ende eines Arrays hinzuzufügen, können wir {{jsxref("Array.prototype.push()","push()")}} verwenden. Beachten Sie, dass Sie ein oder mehrere Elemente angeben müssen, die Sie an das Ende Ihres Arrays hinzufügen möchten.

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

In diesem Aufruf von `splice()` gibt das erste Argument an, wo mit dem Entfernen begonnen werden soll, und das zweite Argument gibt an, wie viele Elemente entfernt werden sollen. So können Sie mehr als ein Element entfernen:

```js
const cities = ["Manchester", "Liverpool", "Edinburgh", "Carlisle"];
const index = cities.indexOf("Liverpool");
if (index !== -1) {
  cities.splice(index, 2);
}
console.log(cities); // [ "Manchester", "Carlisle" ]
```

## Zugriff auf jedes Element

Sehr oft möchten Sie auf jedes Element im Array zugreifen. Sie können dies mit der {{jsxref("statements/for...of","for...of")}} Anweisung tun:

```js
const birds = ["Parrot", "Falcon", "Owl"];

for (const bird of birds) {
  console.log(bird);
}
```

Manchmal möchten Sie dasselbe mit jedem Element in einem Array tun und dabei ein Array mit den geänderten Elementen erhalten. Sie können dies mit {{jsxref("Array.prototype.map()","map()")}} tun. Der folgende Code nimmt ein Array von Zahlen und verdoppelt jede Zahl:

```js
function double(number) {
  return number * 2;
}
const numbers = [5, 2, 7, 6];
const doubled = numbers.map(double);
console.log(doubled); // [ 10, 4, 14, 12 ]
```

Wir übergeben `map()` eine Funktion, und `map()` ruft die Funktion einmal für jedes Element im Array auf und übergibt dabei das Element. Anschließend fügt es den Rückgabewert jedes Funktionsaufrufs zu einem neuen Array hinzu und gibt schließlich das neue Array zurück.

Manchmal möchten Sie ein neues Array erstellen, das nur die Elemente aus dem ursprünglichen Array enthält, die einem bestimmten Test entsprechen. Dies können Sie mit {{jsxref("Array.prototype.filter()","filter()")}} tun. Der folgende Code nimmt ein Array von Zeichenketten und gibt ein Array zurück, das nur die Zeichenketten enthält, die länger als 8 Zeichen sind:

```js
function isLong(city) {
  return city.length > 8;
}
const cities = ["London", "Liverpool", "Totnes", "Edinburgh"];
const longer = cities.filter(isLong);
console.log(longer); // [ "Liverpool", "Edinburgh" ]
```

Wie `map()`, übergeben wir `filter()` eine Funktion, und `filter()` ruft diese Funktion für jedes Element im Array auf und übergibt dabei das Element. Wenn die Funktion `true` zurückgibt, wird das Element zu einem neuen Array hinzugefügt. Schließlich gibt es das neue Array zurück.

## Konvertieren zwischen Zeichenketten und Arrays

Oftmals wird man mit Rohdaten in einem langen String konfrontiert, die man in eine nützlichere Form separieren möchte, um mit ihnen zu arbeiten, wie z.B. sie in einer Datentabelle anzuzeigen. Dazu können wir die Methode {{jsxref("String.prototype.split()","split()")}} verwenden. In der einfachsten Form nimmt diese Methode ein einzelnes Trennzeichen-Parameter und gibt die Teilzeichenketten zwischen dem Trennzeichen als Elemente in einem Array zurück.

> [!NOTE]
> Okay, streng genommen ist dies eine Zeichenkettenmethode und keine Array-Methode, aber wir führen sie hier auf, da sie gut zu Arrays passt.

1. Lassen Sie uns damit spielen, um zu sehen, wie es funktioniert. Erstellen Sie zuerst eine Zeichenkette in Ihrer Konsole:

   ```js
   const data = "Manchester,London,Liverpool,Birmingham,Leeds,Carlisle";
   ```

2. Nun teilen wir sie bei jedem Komma:

   ```js
   const cities = data.split(",");
   cities;
   ```

3. Versuchen Sie abschließend, die Länge Ihres neuen Arrays zu ermitteln und einige Elemente daraus abzurufen:

   ```js
   cities.length;
   cities[0]; // the first item in the array
   cities[1]; // the second item in the array
   cities[cities.length - 1]; // the last item in the array
   ```

4. Sie können auch den umgekehrten Weg gehen, indem Sie die Methode {{jsxref("Array.prototype.join()","join()")}} verwenden. Probieren Sie Folgendes aus:

   ```js
   const commaSeparated = cities.join(",");
   commaSeparated;
   ```

5. Eine andere Möglichkeit, ein Array in eine Zeichenkette zu konvertieren, ist die Verwendung der Methode {{jsxref("Array.prototype.toString()","toString()")}}. `toString()` ist letztlich einfacher als `join()`, da es keinen Parameter benötigt, aber eingeschränkter. Mit `join()` können Sie verschiedene Trennzeichen angeben, während `toString()` immer ein Komma verwendet. (Versuchen Sie, Schritt 4 mit einem anderen Zeichen als einem Komma auszuführen.)

   ```js
   const dogNames = ["Rocket", "Flash", "Bella", "Slugger"];
   dogNames.toString(); // Rocket,Flash,Bella,Slugger
   ```

## Aktives Lernen: Diese Produkte drucken

Kehren wir zu dem Beispiel zurück, das wir eingangs beschrieben haben - das Ausdrucken von Produktnamen und -preisen auf einem Rechnungsbeleg und das anschließende Summieren der Preise, um sie am Ende auszudrucken. Im folgenden bearbeitbaren Beispiel gibt es Kommentare, die mit Nummern versehen sind - jeder markiert eine Stelle, an der Sie etwas zum Code hinzufügen müssen. Sie sind wie folgt:

1. Unterhalb des Kommentars `// Nummer 1` befinden sich eine Reihe von Zeichenketten, von denen jede einen Produktnamen und einen Preis enthält, die durch einen Doppelpunkt getrennt sind. Wir möchten, dass Sie daraus ein Array machen und es in einem Array namens `products` speichern.
2. Unterhalb des Kommentars `// Nummer 2`, beginnen Sie eine `for...of()` Schleife, um jedes Element im `products` Array zu durchlaufen.
3. Unterhalb des Kommentars `// Nummer 3` möchten wir, dass Sie eine Codezeile schreiben, die das aktuelle Array-Element (`name:price`) in zwei separate Elemente aufteilt, eines, das nur den Namen enthält und eines, das nur den Preis enthält. Wenn Sie sich nicht sicher sind, wie Sie dies tun sollen, konsultieren Sie den Artikel [Nützliche Zeichenkettenmethoden](/de/docs/Learn/JavaScript/First_steps/Useful_string_methods) oder noch besser den Abschnitt [Konvertierung zwischen Zeichenketten und Arrays](#konvertieren_zwischen_zeichenketten_und_arrays) dieses Artikels.
4. Im Rahmen der obigen Codezeile möchten Sie auch den Preis von einer Zeichenkette in eine Zahl umwandeln. Wenn Sie sich nicht daran erinnern können, wie das geht, schauen Sie sich den [ersten Artikel über Zeichenketten](/de/docs/Learn/JavaScript/First_steps/Strings#numbers_vs._strings) an.
5. Es gibt eine Variable namens `total`, die am Anfang des Codes erstellt und auf 0 gesetzt wird. Innerhalb der Schleife (unterhalb von `// Nummer 4`) möchten wir, dass Sie eine Zeile hinzufügen, die bei jeder Iteration der Schleife den aktuellen Elementpreis zu dieser Gesamtzahl hinzufügt, so dass am Ende des Codes der korrekte Gesamtpreis auf der Rechnung gedruckt wird. Möglicherweise benötigen Sie einen [Zuweisungsoperator](/de/docs/Learn/JavaScript/First_steps/Math#assignment_operators), um dies zu tun.
6. Wir möchten, dass Sie die Zeile direkt unter `// Nummer 5` so ändern, dass die `itemText` Variable auf "current item name — $current item price" gesetzt wird, zum Beispiel "Schuhe — $23.99", damit die korrekten Informationen für jedes Element auf der Rechnung gedruckt werden. Dies ist nur einfache Zeichenkettenverkettung, die Ihnen vertraut sein sollte.
7. Schließlich müssen Sie unter dem Kommentar `// Nummer 6` eine `}` hinzufügen, um das Ende der `for...of()` Schleife zu markieren.

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

Eine gute Verwendung für Array-Methoden wie {{jsxref("Array.prototype.push()","push()")}} und {{jsxref("Array.prototype.pop()","pop()")}} ist, wenn Sie einen aktuellen Datensatz von aktiven Elementen in einer Web-App pflegen. In einer animierten Szene könnte man zum Beispiel ein Array von Objekten haben, die die aktuell angezeigten Hintergrundgrafiken darstellen, und möglicherweise möchte man nur 50 gleichzeitig anzeigen, aus Leistungs- oder Übersichtlichkeitsgründen. Während neue Objekte erstellt und dem Array hinzugefügt werden, können ältere aus dem Array gelöscht werden, um die gewünschte Anzahl beizubehalten.

In diesem Beispiel zeigen wir eine viel einfachere Verwendung - hier geben wir Ihnen eine gefälschte Suchseite mit einem Suchfeld. Die Idee ist, dass, wenn Begriffe in das Suchfeld eingegeben werden, die Top 5 der vorherigen Suchbegriffe in der Liste angezeigt werden. Wenn die Anzahl der Begriffe 5 überschreitet, beginnt der letzte Begriff jedes Mal gelöscht zu werden, wenn ein neuer Begriff oben hinzugefügt wird, so dass immer die 5 vorherigen Begriffe angezeigt werden.

> [!NOTE]
> In einer echten Such-App könnten Sie wahrscheinlich auf die vorherigen Suchbegriffe klicken, um zu vorherigen Suchanfragen zurückzukehren, und es würde tatsächliche Suchergebnisse anzeigen! Wir halten es einfach für den Moment.

Um die App zu vervollständigen, müssen Sie:

1. Fügen Sie eine Zeile unter dem Kommentar `// Nummer 1` hinzu, die den aktuell in das Suchfeld eingegebenen Wert an den Anfang des Arrays hinzufügt. Dieser kann mit `searchInput.value` abgerufen werden.
2. Fügen Sie eine Zeile unter dem Kommentar `// Nummer 2` hinzu, die den Wert entfernt, der sich derzeit am Ende des Arrays befindet.

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

Sie haben das Ende dieses Artikels erreicht, aber können Sie sich die wichtigsten Informationen merken? Sie finden einige weitere Tests, um zu überprüfen, ob Sie diese Informationen behalten haben, bevor Sie weitermachen - siehe [Testen Sie Ihre Fähigkeiten: Arrays](/de/docs/Learn/JavaScript/First_steps/Test_your_skills:_Arrays).

## Fazit

Nachdem Sie diesen Artikel gelesen haben, sind wir sicher, dass Sie zustimmen werden, dass Arrays ziemlich nützlich erscheinen; Sie werden sie überall in JavaScript wiederfinden, oft in Verbindung mit Schleifen, um dasselbe auf jedes Element in einem Array anzuwenden. Wir werden Ihnen alle nützlichen Grundlagen über Schleifen im nächsten Modul beibringen, aber für den Moment sollten Sie sich selbst auf die Schulter klopfen und eine wohlverdiente Pause einlegen; Sie haben alle Artikel in diesem Modul durchgearbeitet!

Das Einzige, was noch zu tun bleibt, ist die Bearbeitung der Bewertung dieses Moduls, die Ihr Verständnis der vorhergehenden Artikel testet.

## Siehe auch

- [Indizierte Sammlungen](/de/docs/Web/JavaScript/Guide/Indexed_collections) — ein fortgeschrittener Leitfaden zu Arrays und ihren Verwandten, den typisierten Arrays.
- {{jsxref("Array")}} — die `Array`-Objekt-Referenzseite — für einen detaillierten Referenzleitfaden zu den auf dieser Seite besprochenen Funktionen und vielen mehr.

{{PreviousMenuNext("Learn/JavaScript/First_steps/Useful_string_methods", "Learn/JavaScript/First_steps/Silly_story_generator", "Learn/JavaScript/First_steps")}}
