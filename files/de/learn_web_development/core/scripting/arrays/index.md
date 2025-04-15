---
title: Arrays
slug: Learn_web_development/Core/Scripting/Arrays
l10n:
  sourceCommit: 427efbee9e0da53517f45420af87a66a2a6b6e19
---

{{PreviousMenuNext("Learn_web_development/Core/Scripting/Useful_string_methods", "Learn_web_development/Core/Scripting/Silly_story_generator", "Learn_web_development/Core/Scripting")}}

In dieser Lektion betrachten wir Arrays — eine elegante Methode, eine Liste von Datenobjekten unter einem einzigen Variablennamen zu speichern. Wir schauen uns an, warum das nützlich ist, und erforschen, wie man ein Array erstellt, wie man auf die darin gespeicherten Elemente zugreift, sie hinzufügt und entfernt und vieles mehr.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>Grundverständnis von <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a> und den <a href="/de/docs/Learn_web_development/Core/Styling_basics">Grundlagen von CSS</a>. Vertrautheit mit grundlegenden Datentypen wie Zahlen und Zeichenketten, wie sie in vorherigen Lektionen behandelt wurden.</td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Was ein Array ist — eine Struktur, die eine Liste von Variablen enthält.</li>
          <li>Die Syntax von Arrays — <code>[a, b, c]</code> und die Zugriffs-Syntax, <code>myArray[x]</code>.</li>
          <li>Ändern von Array-Werten mit <code>myArray[x] = y</code>.</li>
          <li>Array-Manipulation mit allgemeinen Eigenschaften und Methoden wie <code>length</code>, <code>push()</code>, <code>pop()</code>, <code>join()</code> und <code>split()</code>.</li>
          <li>Fortgeschrittene Array-Methoden wie <code>forEach()</code>, <code>map()</code> und <code>filter()</code>.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Was ist ein Array?

Arrays werden allgemein als "listenartige Objekte" beschrieben; sie sind im Grunde einzelne Objekte, die mehrere Werte in einer Liste speichern. Array-Objekte können in Variablen gespeichert und ähnlich wie andere Wertetypen behandelt werden, mit dem Unterschied, dass wir auf jeden Wert innerhalb der Liste einzeln zugreifen und sehr nützliche und effiziente Operationen mit der Liste durchführen können, wie z. B. durch sie zu schleifen und mit jedem Wert dasselbe zu tun. Vielleicht haben wir eine Reihe von Produktartikeln und deren Preisen in einem Array gespeichert und wollen sie alle durchgehen und auf eine Rechnung drucken, während wir alle Preise addieren und den Gesamtpreis unten ausdrucken.

Ohne Arrays müssten wir jeden Artikel in einer separaten Variablen speichern und den Code, der das Drucken und Addieren übernimmt, für jeden Artikel separat aufrufen. Dies wäre viel aufwändiger zu schreiben, weniger effizient und fehleranfälliger. Wenn wir 10 Artikel zur Rechnung hinzufügen müssten, wäre es schon lästig, aber was ist mit 100 Artikeln oder 1000? Wir werden später in diesem Artikel auf dieses Beispiel zurückkommen.

Wie in früheren Artikeln, lassen Sie uns über die Grundlagen von Arrays lernen, indem wir einige Beispiele in die [Browser-Entwicklerkonsole](/de/docs/Learn_web_development/Howto/Tools_and_setup/What_are_browser_developer_tools) eingeben.

> [!NOTE]
> Scrimbas [Aside: Intro to arrays](https://v2.scrimba.com/the-frontend-developer-career-path-c0j/~06e?via=mdn) Scrim <sup>[_MDN Lernpartner_](/de/docs/MDN/Writing_guidelines/Learning_content#partner_links_and_embeds)</sup> bietet eine nützliche interaktive Einführung in Arrays mit Beispieldurchläufen und einer Herausforderung, um Ihr Wissen zu testen.

## Arrays erstellen

Arrays bestehen aus eckigen Klammern und durch Kommas getrennten Elementen.

1. Angenommen, wir wollen eine Einkaufsliste in einem Array speichern. Fügen Sie den folgenden Code in die Konsole ein:

   ```js
   const shopping = ["bread", "milk", "cheese", "hummus", "noodles"];
   console.log(shopping);
   ```

2. In dem obigen Beispiel ist jedes Element eine Zeichenkette, aber in einem Array können wir verschiedene Datentypen speichern — Zeichenketten, Zahlen, Objekte und sogar andere Arrays. Wir können auch Datentypen in einem einzigen Array mischen — wir müssen uns nicht darauf beschränken, nur Zahlen in einem Array zu speichern und in einem anderen nur Zeichenketten. Zum Beispiel:

   ```js
   const sequence = [1, 1, 2, 3, 5, 8, 13];
   const random = ["tree", 795, [0, 1, 2]];
   ```

3. Erstellen Sie vor dem Fortfahren einige Beispiel-Arrays.

## Die Länge eines Arrays herausfinden

Sie können die Länge eines Arrays (wie viele Elemente es enthält) auf genau die gleiche Weise herausfinden, wie Sie die Länge (in Zeichen) einer Zeichenkette herausfinden — durch die Verwendung der {{jsxref("Array.prototype.length","length")}} Eigenschaft. Versuchen Sie Folgendes:

```js
const shopping = ["bread", "milk", "cheese", "hummus", "noodles"];
console.log(shopping.length); // 5
```

## Auf Array-Elemente zugreifen und sie ändern

Elemente in einem Array sind nummeriert, beginnend bei null. Diese Nummer wird als Index des Elements bezeichnet. Das erste Element hat also den Index 0, das zweite den Index 1 usw. Sie können auf einzelne Elemente im Array mit der Klammernotation und Angabe des Indexes des Elements zugreifen, genauso wie Sie [auf die Buchstaben in einer Zeichenkette zugegriffen haben](/de/docs/Learn_web_development/Core/Scripting/Useful_string_methods#retrieving_a_specific_string_character).

1. Geben Sie Folgendes in Ihre Konsole ein:

   ```js
   const shopping = ["bread", "milk", "cheese", "hummus", "noodles"];
   console.log(shopping[0]);
   // returns "bread"
   ```

2. Sie können auch ein Element in einem Array ändern, indem Sie einem einzelnen Array-Element einen neuen Wert zuweisen. Versuchen Sie Folgendes:

   ```js
   const shopping = ["bread", "milk", "cheese", "hummus", "noodles"];
   shopping[0] = "tahini";
   console.log(shopping);
   // shopping will now return [ "tahini", "milk", "cheese", "hummus", "noodles" ]
   ```

   > [!NOTE]
   > Wir haben es schon früher gesagt, aber als Erinnerung — JavaScript beginnt Arrays bei null zu indizieren!

3. Beachten Sie, dass ein Array innerhalb eines Arrays als mehrdimensionales Array bezeichnet wird. Sie können auf ein Element innerhalb eines Arrays zugreifen, das sich selbst innerhalb eines anderen Arrays befindet, indem Sie zwei Sätze von eckigen Klammern hintereinander verwenden. Zum Beispiel, um auf eines der Elemente innerhalb des Arrays zuzugreifen, das das dritte Element im `random` Array ist (siehe vorheriger Abschnitt), könnten wir so etwas tun:

   ```js
   const random = ["tree", 795, [0, 1, 2]];
   random[2][2];
   ```

4. Versuchen Sie, einige weitere Änderungen an Ihren Array-Beispielen vorzunehmen, bevor Sie fortfahren. Spielen Sie ein wenig herum und sehen Sie, was funktioniert und was nicht.

## Den Index von Elementen in einem Array finden

Wenn Sie den Index eines Elements nicht kennen, können Sie die {{jsxref("Array.prototype.indexOf()","indexOf()")}} Methode verwenden. Die `indexOf()` Methode nimmt ein Element als Argument und gibt entweder den Index des Elements oder `-1` zurück, wenn sich das Element nicht im Array befindet:

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

In diesem Aufruf von `splice()`, sagt das erste Argument, wo mit dem Entfernen von Elementen begonnen werden soll, und das zweite Argument sagt, wie viele Elemente entfernt werden sollen. Sie können also mehr als ein Element entfernen:

```js
const cities = ["Manchester", "Liverpool", "Edinburgh", "Carlisle"];
const index = cities.indexOf("Liverpool");
if (index !== -1) {
  cities.splice(index, 2);
}
console.log(cities); // [ "Manchester", "Carlisle" ]
```

## Auf jedes Element zugreifen

Sehr oft werden Sie auf jedes Element im Array zugreifen wollen. Sie können dies mit der {{jsxref("statements/for...of","for...of")}} Anweisung tun:

```js
const birds = ["Parrot", "Falcon", "Owl"];

for (const bird of birds) {
  console.log(bird);
}
```

Manchmal möchten Sie dasselbe mit jedem Element in einem Array tun, wobei Sie ein Array mit den geänderten Elementen erhalten. Sie können dies mit {{jsxref("Array.prototype.map()","map()")}} tun. Der folgende Code nimmt ein Array von Zahlen und verdoppelt jede Zahl:

```js
function double(number) {
  return number * 2;
}
const numbers = [5, 2, 7, 6];
const doubled = numbers.map(double);
console.log(doubled); // [ 10, 4, 14, 12 ]
```

Wir geben eine Funktion an `map()`, und `map()` ruft die Funktion einmal für jedes Element im Array auf und übergibt das Element. Es fügt dann den Rückgabewert von jedem Funktionsaufruf zu einem neuen Array hinzu und gibt schließlich das neue Array zurück.

Manchmal möchten Sie ein neues Array erstellen, das nur die Elemente im ursprünglichen Array enthält, die einem bestimmten Kriterium entsprechen. Sie können dies mit {{jsxref("Array.prototype.filter()","filter()")}} tun. Der folgende Code nimmt ein Array von Zeichenketten und gibt ein Array zurück, das nur die Zeichenketten enthält, die länger als 8 Zeichen sind:

```js
function isLong(city) {
  return city.length > 8;
}
const cities = ["London", "Liverpool", "Totnes", "Edinburgh"];
const longer = cities.filter(isLong);
console.log(longer); // [ "Liverpool", "Edinburgh" ]
```

Wie bei `map()` geben wir eine Funktion an die `filter()` Methode, und `filter()` ruft diese Funktion für jedes Element im Array auf und übergibt das Element. Wenn die Funktion `true` zurückgibt, wird das Element zu einem neuen Array hinzugefügt. Schließlich gibt es das neue Array zurück.

## Umwandlung zwischen Zeichenketten und Arrays

Oft werden Sie mit einigen Rohdaten in einer langen Zeichenkette konfrontiert, und Sie möchten vielleicht die nützlichen Elemente herausfiltern und in eine nützlichere Form bringen und dann etwas damit machen, wie sie in einer Datentabelle anzeigen. Um dies zu tun, können wir die {{jsxref("String.prototype.split()","split()")}} Methode verwenden. In ihrer einfachsten Form nimmt diese ein einziges Parameter, das Zeichen, an dem Sie die Zeichenkette trennen möchten, und gibt die Teilzeichenketten zwischen dem Trennzeichen als Elemente in einem Array zurück.

> [!NOTE]
> Okay, dies ist technisch gesehen eine Zeichenkettenmethode, keine Array-Methode, aber wir haben sie hier zu den Arrays hinzugefügt, da sie gut passt.

1. Lassen Sie uns damit spielen, um zu sehen, wie es funktioniert. Erstellen Sie zuerst eine Zeichenkette in Ihrer Konsole:

   ```js
   const data = "Manchester,London,Liverpool,Birmingham,Leeds,Carlisle";
   ```

2. Nun lassen Sie uns diese an jedem Komma trennen:

   ```js
   const cities = data.split(",");
   cities;
   ```

3. Versuchen Sie schließlich, die Länge Ihres neuen Arrays zu finden und einige Elemente daraus abzurufen:

   ```js
   cities.length;
   cities[0]; // the first item in the array
   cities[1]; // the second item in the array
   cities[cities.length - 1]; // the last item in the array
   ```

4. Sie können auch den umgekehrten Weg gehen, indem Sie die {{jsxref("Array.prototype.join()","join()")}} Methode verwenden. Versuchen Sie Folgendes:

   ```js
   const commaSeparated = cities.join(",");
   commaSeparated;
   ```

5. Eine andere Möglichkeit, ein Array in eine Zeichenkette umzuwandeln, ist die Verwendung der {{jsxref("Array.prototype.toString()","toString()")}} Methode. `toString()` ist tatsächlich einfacher als `join()`, da es keinen Parameter benötigt, aber eingeschränkter ist. Mit `join()` können Sie unterschiedliche Trennzeichen angeben, während `toString()` immer ein Komma verwendet. (Versuchen Sie Schritt 4 mit einem anderen Zeichen als einem Komma auszuführen.)

   ```js
   const dogNames = ["Rocket", "Flash", "Bella", "Slugger"];
   dogNames.toString(); // Rocket,Flash,Bella,Slugger
   ```

## Aktives Lernen: Diese Produkte drucken

Kommen wir zurück zu dem Beispiel, das wir eingangs erläutert haben — Produktnamen und Preise auf einer Rechnung drucken und dann die Preise addieren und diese am Ende ausdrucken. Im unten editierbaren Beispiel befinden sich Kommentare mit Nummern — jede dieser Stellen markiert einen Punkt, an dem Sie etwas zum Code hinzufügen müssen. Diese sind wie folgt:

1. Unter dem Kommentar `// Nummer 1` befinden sich eine Anzahl von Zeichenketten, jede mit einem Produktnamen und Preis, getrennt durch einen Doppelpunkt. Wir würden möchten, dass Sie dies in ein Array umwandeln und im Array `products` speichern.
2. Unter dem Kommentar `// Nummer 2` starten Sie eine `for...of()` Schleife, um jedes Element im `products` Array zu durchlaufen.
3. Unter dem Kommentar `// Nummer 3` möchten wir, dass Sie eine Codezeile schreiben, die das aktuelle Array-Element (`name:price`) in zwei separate Elemente aufteilt, eines mit nur dem Namen und eines mit nur dem Preis. Wenn Sie sich nicht sicher sind, wie Sie dies tun können, konsultieren Sie den Artikel über [Nützliche Zeichenkettenmethoden](/de/docs/Learn_web_development/Core/Scripting/Useful_string_methods) für Hilfe, oder noch besser, sehen Sie sich den Abschnitt [Umwandlung zwischen Zeichenketten und Arrays](#umwandlung_zwischen_zeichenketten_und_arrays) in diesem Artikel an.
4. Als Teil der obigen Codezeile möchten Sie auch den Preis von einer Zeichenkette in eine Zahl umwandeln. Wenn Sie sich nicht erinnern können, wie Sie dies tun, lesen Sie den [ersten Zeichenkettenartikel](/de/docs/Learn_web_development/Core/Scripting/Strings#numbers_vs._strings).
5. Es gibt eine Variable namens `total`, die am oberen Rand des Codes erstellt und auf 0 gesetzt wird. Innerhalb der Schleife (unter `// Nummer 4`) möchten wir, dass Sie eine Zeile hinzufügen, die den aktuellen Artikelpreis bei jeder Iteration der Schleife zu diesem Gesamtwert hinzufügt, so dass am Ende des Codes der korrekte Gesamtbetrag auf die Rechnung gedruckt wird. Sie benötigen möglicherweise einen [Zuweisungsoperator](/de/docs/Learn_web_development/Core/Scripting/Math#assignment_operators), um dies zu tun.
6. Wir möchten, dass Sie die Zeile direkt unter `// Nummer 5` so ändern, dass die `itemText`-Variable gleich "aktueller Artikelname — $aktueller Artikelpreis" ist, zum Beispiel "Schuhe — $23,99" in jedem Fall, so dass die korrekten Informationen für jeden Artikel auf der Rechnung gedruckt werden. Dies ist nur eine einfache Zeichenkettenverkettung, die Ihnen vertraut sein sollte.
7. Schließlich, unter dem Kommentar `// Nummer 6`, müssen Sie ein `}` hinzufügen, um das Ende der `for...of()` Schleife zu markieren.

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

Eine gute Verwendung für Array-Methoden wie {{jsxref("Array.prototype.push()","push()")}} und {{jsxref("Array.prototype.pop()","pop()")}} ist, wenn Sie ein Protokoll der derzeit aktiven Elemente in einer Webanwendung pflegen. In einer animierten Szene zum Beispiel könnten Sie ein Array von Objekten haben, die die derzeit angezeigten Hintergrundgrafiken darstellen, und Sie möchten vielleicht aus Leistungs- oder Platzgründen gleichzeitig nicht mehr als 50 anzeigen. Während neue Objekte erstellt und dem Array hinzugefügt werden, können ältere aus dem Array entfernt werden, um die gewünschte Anzahl beizubehalten.

In diesem Beispiel zeigen wir eine viel einfachere Verwendung — hier geben wir Ihnen eine gefälschte Suchseite mit einem Suchfeld. Die Idee ist, dass wenn Begriffe in das Suchfeld eingegeben werden, die vorherigen 5 Suchbegriffe in der Liste angezeigt werden. Wenn die Anzahl der Begriffe über 5 hinausgeht, beginnt der letzte Begriff mit dem Hinzufügen eines neuen Begriffs an den Anfang gelöscht zu werden, so dass immer die 5 vorherigen Begriffe angezeigt werden.

> [!NOTE]
> In einer echten Suchanwendung könnten Sie wahrscheinlich auf die vorherigen Suchbegriffe klicken, um zu früheren Suchanfragen zurückzukehren, und es würde tatsächliche Suchergebnisse anzeigen! Wir halten es einfach für jetzt.

Um die App zu vervollständigen, müssen Sie:

1. Fügen Sie eine Zeile unter dem Kommentar `// Nummer 1` hinzu, die den aktuellen Wert, der in das Suchfeld eingegeben wird, an den Anfang des Arrays hinzufügt. Dies kann mit `searchInput.value` abgerufen werden.
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

Sie haben das Ende dieses Artikels erreicht, aber können Sie sich an die wichtigsten Informationen erinnern? Sie können einige weitere Tests finden, um zu überprüfen, ob Sie diese Informationen behalten haben, bevor Sie weitermachen — siehe [Testen Sie Ihre Fähigkeiten: Arrays](/de/docs/Learn_web_development/Core/Scripting/Test_your_skills/Arrays).

## Fazit

Nachdem Sie diesen Artikel gelesen haben, sind wir sicher, dass Sie zustimmen werden, dass Arrays ziemlich nützlich erscheinen; Sie werden sie überall in JavaScript sehen, oft in Verbindung mit Schleifen, um dasselbe mit jedem Element in einem Array zu tun. Wir werden Ihnen später im Modul alles über Schleifen beibringen.

Im nächsten Artikel stellen wir Ihnen eine Herausforderung, um Ihr Verständnis der vorhergehenden Artikel zu testen.

## Siehe auch

- {{jsxref("Array")}}
  - : Die `Array` Objekt-Referenzseite — für eine detaillierte Referenz zu den auf dieser Seite besprochenen Funktionen und viele mehr.

{{PreviousMenuNext("Learn_web_development/Core/Scripting/Useful_string_methods", "Learn_web_development/Core/Scripting/Silly_story_generator", "Learn_web_development/Core/Scripting")}}
