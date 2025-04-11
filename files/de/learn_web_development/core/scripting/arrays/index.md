---
title: Arrays
slug: Learn_web_development/Core/Scripting/Arrays
l10n:
  sourceCommit: 48d220a8cffdfd5f088f8ca89724a9a92e34d8c0
---

{{PreviousMenuNext("Learn_web_development/Core/Scripting/Useful_string_methods", "Learn_web_development/Core/Scripting/Silly_story_generator", "Learn_web_development/Core/Scripting")}}

In dieser Lektion betrachten wir Arrays — eine elegante Methode, um eine Liste von Datenelementen unter einem einzigen Variablennamen zu speichern. Hier betrachten wir, warum dies nützlich ist, und erkunden dann, wie man ein Array erstellt, Elemente, die in einem Array gespeichert sind, abruft, hinzufügt und entfernt, und mehr.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>Ein Verständnis von <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a> und den <a href="/de/docs/Learn_web_development/Core/Styling_basics">Grundlagen von CSS</a>. Vertrautheit mit grundlegenden Datentypen wie Zahlen und Zeichenfolgen, wie in früheren Lektionen behandelt.</td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Was ein Array ist — eine Struktur, die eine Liste von Variablen hält.</li>
          <li>Die Syntax von Arrays — <code>[a, b, c]</code> und die Zugriffssyntax, <code>myArray[x]</code>.</li>
          <li>Ändern von Array-Werten mit <code>myArray[x] = y</code>.</li>
          <li>Manipulation von Arrays mit allgemeinen Eigenschaften und Methoden wie <code>length</code>, <code>push()</code>, <code>pop()</code>, <code>join()</code> und <code>split()</code>.</li>
          <li>Erweiterte Array-Methoden wie <code>forEach()</code>, <code>map()</code> und <code>filter()</code>.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Was ist ein Array?

Arrays werden im Allgemeinen als "list-ähnliche Objekte" beschrieben; sie sind im Grunde einzelne Objekte, die mehrere Werte in einer Liste enthalten. Array-Objekte können in Variablen gespeichert und ähnlich wie jeder andere Typ von Wert behandelt werden, mit dem Unterschied, dass wir jeden Wert in der Liste einzeln abrufen und mit der Liste super nützliche und effiziente Dinge tun können, wie z.B. sie durchlaufen und für jeden Wert dasselbe tun. Vielleicht haben wir eine Serie von Produktelementen und deren Preise in einem Array gespeichert, und wollen sie alle durchlaufen und auf einer Rechnung ausdrucken, während wir alle Preise zusammenzählen und den Gesamtpreis am Ende ausdrucken.

Ohne Arrays müssten wir jedes Element in einer separaten Variablen speichern und dann den Code, der das Drucken und Hinzufügen macht, separat für jedes Element aufrufen. Dies wäre viel länger, weniger effizient und fehleranfälliger auszuführen. Wenn wir 10 Artikel zur Rechnung hinzufügen müssten, wäre das schon ärgerlich, aber was wäre mit 100 Artikeln oder 1000? Wir werden später im Artikel zu diesem Beispiel zurückkehren.

Wie in früheren Artikeln werden wir die wirklichen Grundlagen von Arrays lernen, indem wir einige Beispiele in die [Entwicklungskonsole des Browsers](/de/docs/Learn_web_development/Howto/Tools_and_setup/What_are_browser_developer_tools) eingeben.

## Arrays erstellen

Arrays bestehen aus eckigen Klammern und durch Kommas getrennten Elementen.

1. Angenommen, wir möchten eine Einkaufsliste in einem Array speichern. Fügen Sie den folgenden Code in die Konsole ein:

   ```js
   const shopping = ["bread", "milk", "cheese", "hummus", "noodles"];
   console.log(shopping);
   ```

2. Im obigen Beispiel ist jedes Element eine Zeichenfolge, aber in einem Array können wir verschiedene Datentypen speichern — Zeichenfolgen, Zahlen, Objekte und sogar andere Arrays. Wir können auch Datentypen in einem einzelnen Array mischen — wir müssen uns nicht darauf beschränken, nur Zahlen in einem Array zu speichern und in einem anderen nur Zeichenfolgen. Zum Beispiel:

   ```js
   const sequence = [1, 1, 2, 3, 5, 8, 13];
   const random = ["tree", 795, [0, 1, 2]];
   ```

3. Erstellen Sie vor dem Fortfahren einige Beispiel-Arrays.

## Die Länge eines Arrays ermitteln

Sie können die Länge eines Arrays (wie viele Elemente darin sind) auf genau dieselbe Weise herausfinden, wie Sie die Länge (in Zeichen) einer Zeichenfolge herausfinden — indem Sie die Eigenschaft {{jsxref("Array.prototype.length","length")}} verwenden. Versuchen Sie Folgendes:

```js
const shopping = ["bread", "milk", "cheese", "hummus", "noodles"];
console.log(shopping.length); // 5
```

## Zugriff auf und Ändern von Array-Elementen

Elemente in einem Array sind nummeriert, beginnend bei null. Diese Nummer wird als der _Index_ des Elements bezeichnet. Das erste Element hat also den Index 0, das zweite den Index 1 und so weiter. Sie können auf einzelne Elemente im Array mit Notation in eckigen Klammern und Angabe des Index des Elements zugreifen, auf dieselbe Weise, wie Sie auf [die Buchstaben in einer Zeichenfolge zugegriffen haben](/de/docs/Learn_web_development/Core/Scripting/Useful_string_methods#retrieving_a_specific_string_character).

1. Geben Sie Folgendes in Ihre Konsole ein:

   ```js
   const shopping = ["bread", "milk", "cheese", "hummus", "noodles"];
   console.log(shopping[0]);
   // returns "bread"
   ```

2. Sie können ein Element in einem Array auch ändern, indem Sie einem einzelnen Array-Element einen neuen Wert zuweisen. Versuchen Sie dies:

   ```js
   const shopping = ["bread", "milk", "cheese", "hummus", "noodles"];
   shopping[0] = "tahini";
   console.log(shopping);
   // shopping will now return [ "tahini", "milk", "cheese", "hummus", "noodles" ]
   ```

   > [!NOTE]
   > Wir haben es schon einmal gesagt, aber zur Erinnerung — JavaScript beginnt Arrays bei null zu indizieren!

3. Beachten Sie, dass ein Array innerhalb eines Arrays ein mehrdimensionales Array genannt wird. Sie können auf ein Element innerhalb eines Arrays zugreifen, das sich wiederum in einem anderen Array befindet, indem Sie zwei Sätze von eckigen Klammern zusammen verketten. Um beispielsweise auf eines der Elemente innerhalb des Arrays zuzugreifen, das das dritte Element im `random` Array ist (siehe vorherigen Abschnitt), könnten wir so etwas tun:

   ```js
   const random = ["tree", 795, [0, 1, 2]];
   random[2][2];
   ```

4. Versuchen Sie, einige weitere Änderungen an Ihren Array-Beispielen vorzunehmen, bevor Sie weitergehen. Probieren Sie ein wenig herum und sehen Sie, was funktioniert und was nicht.

## Den Index von Elementen in einem Array finden

Wenn Sie den Index eines Elements nicht kennen, können Sie die Methode {{jsxref("Array.prototype.indexOf()","indexOf()")}} verwenden. Die `indexOf()`-Methode nimmt ein Element als Argument und gibt entweder den Index des Elements oder `-1` zurück, wenn das Element nicht im Array ist:

```js
const birds = ["Parrot", "Falcon", "Owl"];
console.log(birds.indexOf("Owl")); //  2
console.log(birds.indexOf("Rabbit")); // -1
```

## Elemente hinzufügen

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

In diesem Aufruf von `splice()` gibt das erste Argument an, wo mit dem Entfernen von Elementen begonnen werden soll, und das zweite Argument gibt an, wie viele Elemente entfernt werden sollen. So können Sie mehr als ein Element entfernen:

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

Manchmal möchten Sie das Gleiche mit jedem Element in einem Array tun, was zu einem Array mit den geänderten Elementen führt. Dies können Sie mit {{jsxref("Array.prototype.map()","map()")}} tun. Der folgende Code nimmt ein Array von Zahlen und verdoppelt jede Zahl:

```js
function double(number) {
  return number * 2;
}
const numbers = [5, 2, 7, 6];
const doubled = numbers.map(double);
console.log(doubled); // [ 10, 4, 14, 12 ]
```

Wir geben eine Funktion an `map()`, und `map()` ruft die Funktion einmal für jedes Element im Array auf und übergibt das Element. Dann fügt es den Rückgabewert aus jedem Funktionsaufruf zu einem neuen Array hinzu und gibt schließlich das neue Array zurück.

Manchmal möchten Sie ein neues Array erstellen, das nur die Elemente im Originalarray enthält, die einem bestimmten Test entsprechen. Dies können Sie mit {{jsxref("Array.prototype.filter()","filter()")}} tun. Der folgende Code nimmt ein Array von Zeichenfolgen und gibt ein Array zurück, das nur die Zeichenfolgen enthält, die länger als 8 Zeichen sind:

```js
function isLong(city) {
  return city.length > 8;
}
const cities = ["London", "Liverpool", "Totnes", "Edinburgh"];
const longer = cities.filter(isLong);
console.log(longer); // [ "Liverpool", "Edinburgh" ]
```

Wie bei `map()` geben wir eine Funktion an die `filter()`-Methode, und `filter()` ruft diese Funktion für jedes Element im Array auf und übergibt das Element. Wenn die Funktion `true` zurückgibt, wird das Element zu einem neuen Array hinzugefügt. Schließlich gibt es das neue Array zurück.

## Umwandlung zwischen Zeichenfolgen und Arrays

Oft erhalten Sie einige Rohdaten, die in einer langen Zeichenfolge enthalten sind, und Sie möchten die nützlichen Artikel in eine nützlichere Form trennen und dann Dinge mit ihnen tun, wie sie in einer Datentabelle anzeigen. Dafür können wir die Methode {{jsxref("String.prototype.split()","split()")}} verwenden. In ihrer einfachsten Form nimmt sie einen einzelnen Parameter, das Zeichen, bei dem Sie die Zeichenfolge trennen möchten, und gibt die Teilzeichenfolgen zwischen dem Trennzeichen als Elemente in einem Array zurück.

> [!NOTE]
> Okay, das ist technisch gesehen eine Zeichenfolgenmethode, keine Array-Methode, aber wir haben es bei Arrays hinzugefügt, da es hier gut passt.

1. Spielen Sie damit herum, um zu sehen, wie es funktioniert. Erstellen Sie zuerst eine Zeichenfolge in Ihrer Konsole:

   ```js
   const data = "Manchester,London,Liverpool,Birmingham,Leeds,Carlisle";
   ```

2. Jetzt trennen wir sie bei jedem Komma:

   ```js
   const cities = data.split(",");
   cities;
   ```

3. Schließlich versuchen Sie, die Länge Ihres neuen Arrays zu finden und einige Elemente daraus abzurufen:

   ```js
   cities.length;
   cities[0]; // the first item in the array
   cities[1]; // the second item in the array
   cities[cities.length - 1]; // the last item in the array
   ```

4. Sie können auch den umgekehrten Weg gehen und die Methode {{jsxref("Array.prototype.join()","join()")}} verwenden. Versuchen Sie Folgendes:

   ```js
   const commaSeparated = cities.join(",");
   commaSeparated;
   ```

5. Eine andere Möglichkeit, ein Array in eine Zeichenfolge umzuwandeln, ist die Verwendung der Methode {{jsxref("Array.prototype.toString()","toString()")}}. `toString()` ist möglicherweise einfacher als `join()`, da es keinen Parameter benötigt, aber auch eingeschränkter ist. Mit `join()` können Sie verschiedene Trennzeichen angeben, während `toString()` immer ein Komma verwendet. (Versuchen Sie, Schritt 4 mit einem anderen Zeichen als einem Komma auszuführen.)

   ```js
   const dogNames = ["Rocket", "Flash", "Bella", "Slugger"];
   dogNames.toString(); // Rocket,Flash,Bella,Slugger
   ```

## Aktives Lernen: Drucken dieser Produkte

Lassen Sie uns zu dem Beispiel zurückkehren, das wir zuvor beschrieben haben — Produktnamen und -preise auf einer Rechnung drucken, dann die Preise summieren und sie unten ausdrucken. Im bearbeitbaren Beispiel unten gibt es Kommentare, die Zahlen enthalten — jeder von ihnen markiert eine Stelle, an der Sie dem Code etwas hinzufügen müssen. Sie sind wie folgt:

1. Unter dem Kommentar `// Nummer 1` befinden sich eine Anzahl von Zeichenfolgen, jede enthält einen Produktnamen und einen Preis, getrennt durch einen Doppelpunkt. Wir hätten gerne, dass Sie dies in ein Array umwandeln und es in einem Array namens `products` speichern.
2. Unter dem Kommentar `// Nummer 2` beginnen Sie eine `for...of()` Schleife, um jedes Element im `products`-Array durchzugehen.
3. Unter dem Kommentar `// Nummer 3` möchten wir, dass Sie eine Codezeile schreiben, die das aktuelle Array-Element (`name:price`) in zwei separate Elemente aufteilt, eines, das nur den Namen enthält, und eines, das nur den Preis enthält. Wenn Sie sich nicht sicher sind, wie das geht, konsultieren Sie den [Artikel über nützliche Zeichenfolgenmethoden](/de/docs/Learn_web_development/Core/Scripting/Useful_string_methods) oder, noch besser, sehen Sie sich den Abschnitt [Umwandlung zwischen Zeichenfolgen und Arrays](#umwandlung_zwischen_zeichenfolgen_und_arrays) in diesem Artikel an.
4. Als Teil der vorherigen Codezeile möchten Sie auch den Preis von einer Zeichenfolge in eine Zahl konvertieren. Wenn Sie sich nicht erinnern können, wie das geht, lesen Sie den [ersten Zeichenfolgen-Artikel](/de/docs/Learn_web_development/Core/Scripting/Strings#numbers_vs._strings).
5. Es gibt eine Variable namens `total`, die oben im Code erstellt und mit dem Wert 0 initialisiert wird. Innerhalb der Schleife (unter `// Nummer 4`) möchten wir, dass Sie eine Zeile hinzufügen, die den aktuellen Elementpreis in jeder Schleifeniteration zu dieser Gesamtzahl hinzufügt, sodass am Ende des Codes die richtige Gesamtsumme auf die Rechnung gedruckt wird. Sie könnten einen [Zuweisungsoperator](/de/docs/Learn_web_development/Core/Scripting/Math#assignment_operators) benötigen, um dies zu tun.
6. Wir möchten, dass Sie die Zeile direkt unter `// Nummer 5` ändern, sodass die Variable `itemText` gleich "aktueller Elementname — $aktueller Elementpreis" ist, zum Beispiel "Schuhe — $23.99" in jedem Fall, sodass die korrekten Informationen für jedes Element auf die Rechnung gedruckt werden. Das ist einfach eine einfache Zeichenfolgenverknüpfung, die Ihnen bekannt sein sollte.
7. Schließlich müssen Sie unter dem Kommentar `// Nummer 6` ein `}` hinzufügen, um das Ende der `for...of()` Schleife zu markieren.

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

Eine gute Verwendung für Array-Methoden wie {{jsxref("Array.prototype.push()","push()")}} und {{jsxref("Array.prototype.pop()","pop()")}} ist, wenn Sie einen Datensatz von derzeit aktiven Elementen in einer Web-App verwalten. In einer animierten Szene könnten Sie beispielsweise ein Array von Objekten haben, die die aktuell angezeigten Hintergrundgrafiken darstellen, und Sie möchten vielleicht aus Leistungs- oder Unordnungsgründen jeweils nur 50 anzeigen. Wenn neue Objekte erstellt und dem Array hinzugefügt werden, können ältere aus dem Array gelöscht werden, um die gewünschte Anzahl beizubehalten.

In diesem Beispiel zeigen wir Ihnen eine viel einfachere Anwendung — hier geben wir Ihnen eine gefälschte Suchseite mit einem Suchfeld. Die Idee ist, dass, wenn Begriffe in das Suchfeld eingegeben werden, die Top 5 vorherigen Suchbegriffe in der Liste angezeigt werden. Wenn die Anzahl der Begriffe 5 übersteigt, beginnt jeder neue Begriff, der oben hinzugefügt wird, den letzten Begriff zu löschen, sodass immer die 5 vorherigen Begriffe angezeigt werden.

> [!NOTE]
> In einer echten Such-App können Sie wahrscheinlich auf die vorherigen Suchbegriffe klicken, um zu vorherigen Suchen zurückzukehren, und es würde echte Suchergebnisse anzeigen! Wir halten es gerade einfach.

Um die App abzuschließen, müssen Sie:

1. Eine Zeile unter dem Kommentar `// Nummer 1` hinzufügen, die den aktuellen Wert, der in das Sucheingabefeld eingegeben wurde, an den Anfang des Arrays hinzufügt. Dies kann durch `searchInput.value` abgerufen werden.
2. Eine Zeile unter dem Kommentar `// Nummer 2` hinzufügen, die den Wert entfernt, der sich derzeit am Ende des Arrays befindet.

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

## Testen Sie Ihr Wissen!

Sie haben das Ende dieses Artikels erreicht, aber können Sie sich an die wichtigsten Informationen erinnern? Sie können einige weitere Tests finden, um zu prüfen, ob Sie diese Informationen behalten haben, bevor Sie weitermachen — sehen Sie sich [Testen Sie Ihr Wissen: Arrays](/de/docs/Learn_web_development/Core/Scripting/Test_your_skills/Arrays) an.

## Fazit

Nachdem Sie diesen Artikel durchgelesen haben, sind wir sicher, dass Sie zustimmen werden, dass Arrays ziemlich nützlich erscheinen; Sie werden sie überall in JavaScript antreffen, oft in Verbindung mit Schleifen, um dasselbe mit jedem Element in einem Array zu tun. Wir werden Ihnen später im Modul alles über Schleifen beibringen.

Im nächsten Artikel geben wir Ihnen eine Herausforderung, um Ihr Verständnis der vorhergehenden Artikel zu testen.

## Siehe auch

- [Indizierte Sammlungen](/de/docs/Web/JavaScript/Guide/Indexed_collections)
  - : Ein Leitfaden auf fortgeschrittenem Niveau zu Arrays und ihren Verwandten, den typisierten Arrays.
- {{jsxref("Array")}}
  - : Die Referenzseite des `Array`-Objekts — für eine detaillierte Anleitung zu den in dieser Seite besprochenen Funktionen und vielen weiteren.
- [Aside: Intro to arrays](https://scrimba.com/the-frontend-developer-career-path-c0j/~06e?via=mdn), Scrimba <sup>_MDN Lernpartner_</sup>
  - : Eine interaktive Lektion, die eine Einführung in Arrays bietet.

{{PreviousMenuNext("Learn_web_development/Core/Scripting/Useful_string_methods", "Learn_web_development/Core/Scripting/Silly_story_generator", "Learn_web_development/Core/Scripting")}}
