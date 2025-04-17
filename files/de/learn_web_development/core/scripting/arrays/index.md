---
title: Arrays
slug: Learn_web_development/Core/Scripting/Arrays
l10n:
  sourceCommit: 7efe863cf1e5e1b828192093dba1dff1c7d77a5f
---

{{PreviousMenuNext("Learn_web_development/Core/Scripting/Useful_string_methods", "Learn_web_development/Core/Scripting/Silly_story_generator", "Learn_web_development/Core/Scripting")}}

In dieser Lektion betrachten wir Arrays — eine elegante Möglichkeit, eine Liste von Datenobjekten unter einem einzigen Variablennamen zu speichern. Hier schauen wir uns an, warum dies nützlich ist, und erkunden, wie man ein [Array](/de/docs/Web/JavaScript/Reference/Global_Objects/Array) erstellt, Items abruft, hinzufügt und entfernt sowie weitere Themen.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>Ein Verständnis von <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a> und den <a href="/de/docs/Learn_web_development/Core/Styling_basics">Grundlagen von CSS</a>. Vertrautheit mit grundlegenden Datentypen wie Zahlen und Zeichenketten, wie in vorherigen Lektionen behandelt.</td>
    </tr>
    <tr>
      <th scope="row">Lernergebnisse:</th>
      <td>
        <ul>
          <li>Was ein Array ist — eine Struktur, die eine Liste von Variablen hält.</li>
          <li>Die Syntax von Arrays — <code>[a, b, c]</code> und die Zugriffssyntax, <code>myArray[x]</code>.</li>
          <li>Modifizieren von Array-Werten mit <code>myArray[x] = y</code>.</li>
          <li>Array-Manipulation mit üblichen Eigenschaften und Methoden wie <code>length</code>, <code>push()</code>, <code>pop()</code>, <code>join()</code>, und <code>split()</code>.</li>
          <li>Fortgeschrittene Array-Methoden wie <code>forEach()</code>, <code>map()</code>, und <code>filter()</code>.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Was ist ein Array?

Arrays werden allgemein als "listenartige Objekte" beschrieben; sie sind im Grunde genommen einzelne Objekte, die mehrere Werte in einer Liste speichern. Array-Objekte können in Variablen gespeichert und ähnlich wie andere Wertetypen behandelt werden, mit dem Unterschied, dass wir auf jeden Wert in der Liste individuell zugreifen und nützliche und effiziente Dinge mit der Liste machen können, wie z.B. sie durchlaufen und dasselbe mit jedem Wert tun. Vielleicht haben wir eine Reihe von Produktartikeln und deren Preisen, die in einem Array gespeichert sind, und wir möchten sie alle durchlaufen und auf einer Rechnung ausdrucken, während wir alle Preise zusammenzählen und den Gesamtpreis unten ausdrucken.

Hätten wir keine Arrays, müssten wir jeden Artikel in einer separaten Variablen speichern und dann den Code, der das Drucken und Addieren ausführt, für jeden Artikel separat aufrufen. Dies wäre viel länger zu schreiben, weniger effizient und fehleranfälliger. Wenn wir 10 Artikel zur Rechnung hinzufügen müssten, wäre es schon ärgerlich, aber was ist mit 100 Artikeln oder 1000? Wir werden später in diesem Artikel auf dieses Beispiel zurückkommen.

Wie in früheren Artikeln lernen wir die grundlegenden Grundlagen von Arrays kennen, indem wir einige Beispiele in [Browser-Entwicklerkonsole](/de/docs/Learn_web_development/Howto/Tools_and_setup/What_are_browser_developer_tools) eingeben.

> [!NOTE]
> Scrimba's [Aside: Intro to arrays](https://v2.scrimba.com/the-frontend-developer-career-path-c0j/~06e?via=mdn) Scrim <sup>[_MDN-Lernpartner_](/de/docs/MDN/Writing_guidelines/Learning_content#partner_links_and_embeds)</sup> bietet eine nützliche interaktive Einführung in Arrays mit Beispielanleitungen und einer Herausforderung zum Testen Ihres Wissens.

## Arrays erstellen

Arrays bestehen aus eckigen Klammern und durch Kommas getrennten Objekten.

1. Angenommen, wir möchten eine Einkaufsliste in einem Array speichern. Fügen Sie den folgenden Code in die Konsole ein:

   ```js
   const shopping = ["bread", "milk", "cheese", "hummus", "noodles"];
   console.log(shopping);
   ```

2. Im obigen Beispiel ist jedes Item eine Zeichenkette, aber in einem Array können wir verschiedene Datentypen speichern — Zeichenketten, Zahlen, Objekte und sogar andere Arrays. Wir können auch Datentypen in einem einzigen Array mischen — wir müssen uns nicht darauf beschränken, nur Zahlen in einem Array und in einem anderen nur Zeichenketten zu speichern. Zum Beispiel:

   ```js
   const sequence = [1, 1, 2, 3, 5, 8, 13];
   const random = ["tree", 795, [0, 1, 2]];
   ```

3. Bevor Sie fortfahren, erstellen Sie einige Beispiel-Arrays.

## Die Länge eines Arrays ermitteln

Sie können die Länge eines Arrays (wie viele Objekte es enthält) auf genau die gleiche Weise herausfinden, wie Sie die Länge (in Zeichen) einer Zeichenkette ermitteln — durch Verwendung der {{jsxref("Array.prototype.length","length")}} Eigenschaft. Versuchen Sie Folgendes:

```js
const shopping = ["bread", "milk", "cheese", "hummus", "noodles"];
console.log(shopping.length); // 5
```

## Zugriff auf Array-Objekte und deren Modifikation

Arrays sind [indizierte Sammlungen](/de/docs/Web/JavaScript/Guide/Indexed_collections). Objekte in einem Array sind nummeriert, beginnend bei null. Diese Nummer wird als _Index_ des Objekts bezeichnet. Das erste Objekt hat also den Index 0, das zweite den Index 1 und so weiter. Sie können auf einzelne Objekte im Array zugreifen, indem Sie die Klammernotation verwenden und den Index des Objekts angeben, genau wie Sie [auf die Buchstaben in einer Zeichenkette](/de/docs/Learn_web_development/Core/Scripting/Useful_string_methods#retrieving_a_specific_string_character) zugegriffen haben.

1. Geben Sie Folgendes in Ihre Konsole ein:

   ```js
   const shopping = ["bread", "milk", "cheese", "hummus", "noodles"];
   console.log(shopping[0]);
   // returns "bread"
   ```

2. Sie können auch ein Objekt in einem Array ändern, indem Sie einem einzelnen Array-Objekt einen neuen Wert zuweisen. Versuchen Sie dies:

   ```js
   const shopping = ["bread", "milk", "cheese", "hummus", "noodles"];
   shopping[0] = "tahini";
   console.log(shopping);
   // shopping will now return [ "tahini", "milk", "cheese", "hummus", "noodles" ]
   ```

   > [!NOTE]
   > Wir haben es schon einmal gesagt, aber nur zur Erinnerung — JavaScript beginnt Arrays bei null zu indizieren!

3. Beachten Sie, dass ein Array innerhalb eines Arrays als mehrdimensionales Array bezeichnet wird. Sie können auf ein Objekt innerhalb eines Arrays zugreifen, das sich selbst in einem anderen Array befindet, indem Sie zwei Klammerpaare zusammen verketten. Um beispielsweise auf eines der Objekte in dem Array zuzugreifen, das das dritte Objekt im `random` Array (siehe vorheriger Abschnitt) ist, könnten Sie so etwas tun:

   ```js
   const random = ["tree", 795, [0, 1, 2]];
   random[2][2];
   ```

4. Versuchen Sie, einige weitere Änderungen an Ihren Array-Beispielen vorzunehmen, bevor Sie fortfahren. Experimentieren Sie ein wenig und sehen Sie, was funktioniert und was nicht.

## Den Index von Objekten in einem Array ermitteln

Wenn Sie den Index eines Objekts nicht kennen, können Sie die Methode {{jsxref("Array.prototype.indexOf()","indexOf()")}} verwenden.
Die `indexOf()`-Methode nimmt ein Objekt als Argument und gibt entweder den Index des Objekts oder `-1` zurück, wenn das Objekt nicht im Array ist:

```js
const birds = ["Parrot", "Falcon", "Owl"];
console.log(birds.indexOf("Owl")); //  2
console.log(birds.indexOf("Rabbit")); // -1
```

## Objekte hinzufügen

Um ein oder mehrere Objekte am Ende eines Arrays hinzuzufügen, können wir {{jsxref("Array.prototype.push()","push()")}} verwenden. Beachten Sie, dass Sie eines oder mehrere Objekte, die Sie ans Ende Ihres Arrays hinzufügen möchten, einschließen müssen.

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

Um ein Objekt am Anfang des Arrays hinzuzufügen, verwenden Sie {{jsxref("Array.prototype.unshift()","unshift()")}}:

```js
const cities = ["Manchester", "Liverpool"];
cities.unshift("Edinburgh");
console.log(cities); // [ "Edinburgh", "Manchester", "Liverpool" ]
```

## Objekte entfernen

Um das letzte Objekt aus dem Array zu entfernen, verwenden Sie {{jsxref("Array.prototype.pop()","pop()")}}.

```js
const cities = ["Manchester", "Liverpool"];
cities.pop();
console.log(cities); // [ "Manchester" ]
```

Die `pop()`-Methode gibt das entfernte Objekt zurück. Um dieses Objekt in einer neuen Variablen zu speichern, könnten Sie dies tun:

```js
const cities = ["Manchester", "Liverpool"];
const removedCity = cities.pop();
console.log(removedCity); // "Liverpool"
```

Um das erste Objekt aus einem Array zu entfernen, verwenden Sie {{jsxref("Array.prototype.shift()","shift()")}}:

```js
const cities = ["Manchester", "Liverpool"];
cities.shift();
console.log(cities); // [ "Liverpool" ]
```

Wenn Sie den Index eines Objekts kennen, können Sie es mit {{jsxref("Array.prototype.splice()","splice()")}} aus dem Array entfernen:

```js
const cities = ["Manchester", "Liverpool", "Edinburgh", "Carlisle"];
const index = cities.indexOf("Liverpool");
if (index !== -1) {
  cities.splice(index, 1);
}
console.log(cities); // [ "Manchester", "Edinburgh", "Carlisle" ]
```

In diesem Aufruf von `splice()` sagt das erste Argument, wo mit dem Entfernen von Objekten begonnen werden soll, und das zweite Argument sagt, wie viele Objekte entfernt werden sollen. So können Sie mehr als ein Objekt entfernen:

```js
const cities = ["Manchester", "Liverpool", "Edinburgh", "Carlisle"];
const index = cities.indexOf("Liverpool");
if (index !== -1) {
  cities.splice(index, 2);
}
console.log(cities); // [ "Manchester", "Carlisle" ]
```

## Auf jedes Objekt zugreifen

Sehr oft möchten Sie auf jedes Objekt im Array zugreifen. Dies können Sie mit der Anweisung {{jsxref("statements/for...of","for...of")}} tun:

```js
const birds = ["Parrot", "Falcon", "Owl"];

for (const bird of birds) {
  console.log(bird);
}
```

Manchmal möchten Sie dasselbe mit jedem Objekt in einem Array tun, wodurch Sie ein Array mit den geänderten Objekten erhalten. Dies können Sie mit {{jsxref("Array.prototype.map()","map()")}} tun. Der untenstehende Code nimmt ein Array von Zahlen und verdoppelt jede Zahl:

```js
function double(number) {
  return number * 2;
}
const numbers = [5, 2, 7, 6];
const doubled = numbers.map(double);
console.log(doubled); // [ 10, 4, 14, 12 ]
```

Wir übergeben eine Funktion an `map()`, und `map()` ruft die Funktion einmal für jedes Objekt im Array auf, wobei das Objekt übergeben wird. Es fügt dann den Rückgabewert jedes Funktionsaufrufs zu einem neuen Array hinzu und gibt schließlich das neue Array zurück.

Manchmal möchten Sie ein neues Array erstellen, das nur die Objekte im ursprünglichen Array enthält, die einem Test entsprechen. Das können Sie mit {{jsxref("Array.prototype.filter()","filter()")}} tun. Der untenstehende Code nimmt ein Array von Zeichenketten und gibt ein Array zurück, das nur die Zeichenketten enthält, die länger als 8 Zeichen sind:

```js
function isLong(city) {
  return city.length > 8;
}
const cities = ["London", "Liverpool", "Totnes", "Edinburgh"];
const longer = cities.filter(isLong);
console.log(longer); // [ "Liverpool", "Edinburgh" ]
```

Wie bei `map()` übergeben wir eine Funktion an die `filter()`-Methode, und `filter()` ruft diese Funktion für jedes Objekt im Array auf und übergibt das Objekt. Wenn die Funktion `true` zurückgibt, wird das Objekt zu einem neuen Array hinzugefügt. Schließlich gibt sie das neue Array zurück.

## Konvertieren zwischen Zeichenketten und Arrays

Oft erhalten Sie Rohdaten in einer langen Zeichenkette und möchten die nützlichen Objekte in eine nützlichere Form aufteilen und dann Dinge mit ihnen tun, wie sie in einer Datentabelle anzeigen. Dazu können wir die Methode {{jsxref("String.prototype.split()","split()")}} verwenden. In ihrer einfachsten Form nimmt sie ein einzelnes Parameterzeichen, an dem Sie die Zeichenkette aufteilen möchten, und gibt die Teilzeichenketten zwischen dem Trennzeichen als Objekte in einem Array zurück.

> [!NOTE]
> Technisch gesehen ist dies eine Zeichenkettenmethode und keine Array-Methode, aber wir haben sie hier mit aufgenommen, da es gut passt.

1. Lassen Sie uns damit spielen, um zu sehen, wie es funktioniert. Erstellen Sie zuerst eine Zeichenkette in Ihrer Konsole:

   ```js
   const data = "Manchester,London,Liverpool,Birmingham,Leeds,Carlisle";
   ```

2. Jetzt teilen wir sie bei jedem Komma auf:

   ```js
   const cities = data.split(",");
   cities;
   ```

3. Versuchen Sie schließlich, die Länge Ihres neuen Arrays zu ermitteln und einige Objekte daraus abzurufen:

   ```js
   cities.length;
   cities[0]; // the first item in the array
   cities[1]; // the second item in the array
   cities[cities.length - 1]; // the last item in the array
   ```

4. Sie können auch den umgekehrten Weg mithilfe der {{jsxref("Array.prototype.join()","join()")}}-Methode gehen. Versuchen Sie Folgendes:

   ```js
   const commaSeparated = cities.join(",");
   commaSeparated;
   ```

5. Eine andere Möglichkeit, ein Array in eine Zeichenkette zu konvertieren, ist die Verwendung der {{jsxref("Array.prototype.toString()","toString()")}}-Methode. `toString()` ist arguably simpler als `join()` da es keinen Parameter benötigt, aber eingeschränkter. Mit `join()` können Sie unterschiedliche Trennzeichen angeben, während `toString()` immer ein Komma verwendet. (Versuchen Sie, Schritt 4 mit einem anderen Zeichen als einem Komma auszuführen.)

   ```js
   const dogNames = ["Rocket", "Flash", "Bella", "Slugger"];
   dogNames.toString(); // Rocket,Flash,Bella,Slugger
   ```

## Aktives Lernen: Diese Produkte drucken

Kehren wir zu dem Beispiel zurück, das wir zuvor beschrieben haben – Drucken von Produktnamen und Preisen auf einer Rechnung, dann Summieren der Preise und Drucken am unteren Ende. Im bearbeitbaren Beispiel unten gibt es Kommentare mit Zahlen — jeder dieser markiert einen Ort, an dem Sie etwas dem Code hinzufügen müssen. Dies sind die folgenden:

1. Unter dem Kommentar `// number 1` befinden sich eine Anzahl von Zeichenketten, jede enthält einen Produktnamen und Preis getrennt durch einen Doppelpunkt. Sie sollen dies in ein Array umwandeln und es in einem Array namens `products` speichern.
2. Unter dem Kommentar `// number 2` beginnen Sie eine `for...of()`-Schleife, um durch jedes Objekt im `products`-Array zu gehen.
3. Unter dem Kommentar `// number 3` möchten wir, dass Sie eine Codezeile schreiben, die das aktuelle Array-Objekt (`name:price`) in zwei separate Objekte aufteilt, eins nur mit dem Namen und eins nur mit dem Preis. Wenn Sie nicht wissen, wie das geht, schauen Sie in den Artikel [Nützliche Zeichenkettenmethoden](/de/docs/Learn_web_development/Core/Scripting/Useful_string_methods) für Hilfe oder noch besser, schauen Sie sich den Abschnitt [Konvertieren zwischen Zeichenketten und Arrays](#konvertieren_zwischen_zeichenketten_und_arrays) in diesem Artikel an.
4. Im Rahmen der obigen Codezeile sollen Sie den Preis von einer Zeichenkette in eine Zahl umwandeln. Wenn Sie nicht mehr genau wissen, wie das geht, schauen Sie sich den [ersten Zeichenkettenartikel](/de/docs/Learn_web_development/Core/Scripting/Strings#numbers_vs._strings) an.
5. Es gibt eine Variable namens `total`, die oben im Code erstellt und auf 0 gesetzt wird. Innerhalb der Schleife (unter `// number 4`) möchten wir, dass Sie eine Zeile hinzufügen, die in jeder Iteration der Schleife den aktuellen Objektpreis zu dieser Gesamtsumme hinzufügt, sodass am Ende des Codes die korrekte Gesamtsumme auf der Rechnung ausgegeben wird. Sie könnten einen [Zuweisungsoperator](/de/docs/Learn_web_development/Core/Scripting/Math#assignment_operators) dafür benötigen.
6. Wir möchten, dass Sie die Zeile direkt unter `// number 5` ändern, sodass die Variable `itemText` gleich "aktueller Objektname — $aktueller Objektpreis" ist, zum Beispiel "Shoes — $23.99" in jedem Fall, damit die korrekten Informationen zu jedem Objekt auf der Rechnung gedruckt werden. Dies ist nur eine einfache Zeichenketten-Verkettung, die Ihnen vertraut sein sollte.
7. Schließlich müssen Sie unter dem Kommentar `// number 6` ein `}` hinzufügen, um das Ende der `for...of()`-Schleife zu markieren.

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

## Aktives Lernen: Top 5 Suchbegriffe

Eine gute Verwendung für Array-Methoden wie {{jsxref("Array.prototype.push()","push()")}} und {{jsxref("Array.prototype.pop()","pop()")}} ist, wenn Sie einen Datensatz der derzeit aktiven Objekte in einer Web-App führen. In einer animierten Szene könnten Sie zum Beispiel ein Array von Objekten haben, die die aktuell angezeigten Hintergrundgrafiken repräsentieren, und Sie möchten vielleicht nur 50 gleichzeitig anzeigen, aus Leistungs- oder Unübersichtlichkeitsgründen. Wenn neue Objekte erstellt und zum Array hinzugefügt werden, können ältere aus dem Array gelöscht werden, um die gewünschte Anzahl beizubehalten.

In diesem Beispiel zeigen wir Ihnen eine viel einfachere Verwendung — hier geben wir Ihnen eine gefälschte Suchseite, mit einem Suchfeld. Die Idee ist, dass, wenn Begriffe in das Suchfeld eingegeben werden, die letzten 5 vorherigen Suchbegriffe in der Liste angezeigt werden. Wenn die Anzahl der Begriffe über 5 geht, wird der letzte Begriff jedes Mal gelöscht, wenn ein neuer Begriff oben hinzugefügt wird, sodass immer die letzten 5 Begriffe angezeigt werden.

> [!NOTE]
> In einer echten Such-App könnten Sie auf die vorherigen Suchbegriffe klicken, um zu vorherigen Suchen zurückzukehren, und es würden tatsächliche Suchergebnisse angezeigt! Wir halten es für den Moment einfach.

Um die App zu vervollständigen, müssen Sie:

1. Eine Zeile unter dem Kommentar `// number 1` hinzufügen, die den aktuellen Wert, der in das Suchfeld eingegeben wurde, am Anfang des Arrays hinzufügt. Dieser kann mit `searchInput.value` abgerufen werden.
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

Sie haben das Ende dieses Artikels erreicht, aber können Sie sich die wichtigsten Informationen merken? Sie können einige weitere Tests finden, um zu überprüfen, ob Sie diese Informationen behalten haben, bevor Sie fortfahren — siehe [Testen Sie Ihre Fähigkeiten: Arrays](/de/docs/Learn_web_development/Core/Scripting/Test_your_skills/Arrays).

## Fazit

Nach der Durchsicht dieses Artikels sind wir sicher, dass Sie zustimmen werden, dass Arrays ziemlich nützlich erscheinen; Sie werden überall in JavaScript auftauchen, oft in Verbindung mit Schleifen, um dasselbe mit jedem Objekt in einem Array zu tun. Wir werden Ihnen später in diesem Modul alles über Schleifen beibringen.

Im nächsten Artikel geben wir Ihnen eine Herausforderung, um Ihr Verständnis der vorhergehenden Artikel zu testen.

## Siehe auch

- {{jsxref("Array")}}
  - : Die `Array`-Objekt-Referenzseite bietet einen detaillierten Leitfaden zu den auf dieser Seite besprochenen Funktionen und vielen anderen `Array`-Funktionen.

{{PreviousMenuNext("Learn_web_development/Core/Scripting/Useful_string_methods", "Learn_web_development/Core/Scripting/Silly_story_generator", "Learn_web_development/Core/Scripting")}}
