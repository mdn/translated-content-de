---
title: Arrays
slug: Learn_web_development/Core/Scripting/Arrays
l10n:
  sourceCommit: 6a5c619dfad295ca9a9d317a4088908cfd33e686
---

{{PreviousMenuNext("Learn_web_development/Core/Scripting/Useful_string_methods", "Learn_web_development/Core/Scripting/Silly_story_generator", "Learn_web_development/Core/Scripting")}}

In dieser Lektion betrachten wir Arrays — eine elegante Möglichkeit, eine Liste von Datenobjekten unter einem einzigen Variablennamen zu speichern. Wir untersuchen, warum das nützlich ist, dann erkunden wir, wie man ein [Array](/de/docs/Web/JavaScript/Reference/Global_Objects/Array) erstellt, speichert, Eigenschaften und Methoden wie `length`, `push()`, `pop()`, `join()` und `split()` verwendet, um Elemente in einem Array abzurufen, hinzuzufügen oder zu entfernen, und vieles mehr.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>Ein Verständnis für <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a> und die <a href="/de/docs/Learn_web_development/Core/Styling_basics">Grundlagen von CSS</a>, sowie Vertrautheit mit grundlegenden Datentypen wie Zahlen und Strings, die in früheren Lektionen behandelt wurden.</td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Was ein Array ist — eine Struktur, die eine Liste von Variablen enthält.</li>
          <li>Die Syntax von Arrays — <code>[a, b, c]</code> und die Zugriffssyntax, <code>myArray[x]</code>.</li>
          <li>Modifizieren von Array-Werten mit <code>myArray[x] = y</code>.</li>
          <li>Array-Manipulation mit häufig verwendeten Eigenschaften und Methoden wie <code>length</code>, <code>push()</code>, <code>pop()</code>, <code>join()</code> und <code>split()</code>.</li>
          <li>Erweiterte Array-Methoden wie <code>forEach()</code>, <code>map()</code> und <code>filter()</code>.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Was ist ein Array?

Arrays werden allgemein als "listenartige Objekte" beschrieben; im Grunde sind sie einzelne Objekte, die mehrere Werte in einer Liste enthalten. Array-Objekte können in Variablen gespeichert und ähnlich wie jeder andere Werttyp behandelt werden. Der Unterschied besteht darin, dass wir auf jeden Wert in der Liste individuell zugreifen und sehr nützliche und effiziente Dinge mit der Liste tun können, wie zum Beispiel sie durchlaufen und für jeden Wert dasselbe tun. Vielleicht haben wir eine Reihe von Produktartikeln und deren Preise in einem Array gespeichert und wollen sie alle durchlaufen und auf einer Rechnung ausdrucken, während die Gesamtsumme aller Preise berechnet und am Ende der Gesamtsumme ausgegeben wird.

Ohne Arrays müssten wir jeden Artikel in einer separaten Variablen speichern und dann den Code, der das Drucken und Addieren durchführt, für jeden Artikel separat aufrufen. Das wäre mühsamer zu schreiben, weniger effizient und fehleranfälliger. Wenn wir 10 Artikel zu der Rechnung hinzufügen müssten, wäre das bereits ärgerlich, aber was ist mit 100 Artikeln oder 1000? Wir werden später in diesem Artikel auf dieses Beispiel zurückkommen.

Wie in früheren Artikeln, lernen wir die Grundlagen von Arrays kennen, indem wir einige Beispiele in die [Browser-Entwicklerkonsole](/de/docs/Learn_web_development/Howto/Tools_and_setup/What_are_browser_developer_tools) eingeben.

> [!NOTE]
> Scrimbas [Aside: Intro to arrays](https://scrimba.com/the-frontend-developer-career-path-c0j/~06e?via=mdn) scrim <sup>[_MDN learning partner_](/de/docs/MDN/Writing_guidelines/Learning_content#partner_links_and_embeds)</sup> bietet eine hilfreiche interaktive Einführung in Arrays mit Beispieldurchgängen und einer Herausforderung, um Ihr Wissen zu testen.

## Arrays erstellen

Arrays bestehen aus eckigen Klammern und Elementen, die durch Kommas getrennt sind.

1. Angenommen, wir wollen eine Einkaufsliste in einem Array speichern. Fügen Sie den folgenden Code in die Konsole ein:

   ```js
   const shopping = ["bread", "milk", "cheese", "hummus", "noodles"];
   console.log(shopping);
   ```

2. In dem obigen Beispiel ist jedes Element ein String, aber in einem Array können wir verschiedene Datentypen speichern — Strings, Zahlen, Objekte und sogar andere Arrays. Wir können auch Datentypen in einem Array mischen — wir müssen uns nicht darauf beschränken, in einem Array nur Zahlen und in einem anderen nur Strings zu speichern. Zum Beispiel:

   ```js
   const sequence = [1, 1, 2, 3, 5, 8, 13];
   const random = ["tree", 795, [0, 1, 2]];
   ```

3. Bevor Sie fortfahren, erstellen Sie ein paar Beispiel-Arrays.

## Die Länge eines Arrays ermitteln

Sie können die Länge eines Arrays (wie viele Elemente darin sind) genau so ermitteln, wie Sie die Länge (in Zeichen) eines Strings ermitteln — indem Sie die {{jsxref("Array.prototype.length","length")}}-Eigenschaft verwenden. Probieren Sie Folgendes aus:

```js
const shopping = ["bread", "milk", "cheese", "hummus", "noodles"];
console.log(shopping.length); // 5
```

## Zugriff auf Array-Elemente und deren Modifikation

Arrays sind [indizierte Sammlungen](/de/docs/Web/JavaScript/Guide/Indexed_collections). Elemente in einem Array sind nummeriert, beginnend bei Null. Diese Zahl wird als _Index_ des Elements bezeichnet. Also hat das erste Element den Index 0, das zweite den Index 1 und so weiter. Sie können auf einzelne Elemente im Array mit der Klammernotation zugreifen und dabei den Index des Elements angeben, ähnlich wie Sie auf die Buchstaben in einem String zugegriffen haben.

1. Geben Sie Folgendes in Ihre Konsole ein:

   ```js
   const shopping = ["bread", "milk", "cheese", "hummus", "noodles"];
   console.log(shopping[0]);
   // returns "bread"
   ```

2. Sie können auch ein Element in einem Array ändern, indem Sie einem einzelnen Array-Element einen neuen Wert zuweisen. Probieren Sie Folgendes aus:

   ```js
   const shopping = ["bread", "milk", "cheese", "hummus", "noodles"];
   shopping[0] = "tahini";
   console.log(shopping);
   // shopping will now return [ "tahini", "milk", "cheese", "hummus", "noodles" ]
   ```

   > [!NOTE]
   > Wir haben es schon einmal gesagt, aber nur zur Erinnerung — JavaScript beginnt mit dem Indizieren von Arrays bei Null!

3. Beachten Sie, dass ein Array innerhalb eines Arrays als mehrdimensionales Array bezeichnet wird. Sie können auf ein Element in einem Array zugreifen, das sich selbst in einem anderen Array befindet, indem Sie zwei Klammerpaare miteinander verketten. Um beispielsweise auf eines der Elemente im Array zuzugreifen, das das dritte Element im `random`-Array ist (siehe vorheriger Abschnitt), könnten Sie so etwas tun:

   ```js
   const random = ["tree", 795, [0, 1, 2]];
   random[2][2];
   ```

4. Versuchen Sie, einige weitere Änderungen an Ihren Array-Beispielen vorzunehmen, bevor Sie weitermachen. Spielen Sie ein wenig herum und sehen Sie, was funktioniert und was nicht.

## Den Index von Elementen in einem Array finden

Wenn Sie den Index eines Elements nicht kennen, können Sie die Methode {{jsxref("Array.prototype.indexOf()","indexOf()")}} verwenden.
Die Methode `indexOf()` nimmt ein Element als Argument und gibt entweder den Index des Elements oder `-1` zurück, wenn sich das Element nicht im Array befindet:

```js
const birds = ["Parrot", "Falcon", "Owl"];
console.log(birds.indexOf("Owl")); //  2
console.log(birds.indexOf("Rabbit")); // -1
```

## Elemente hinzufügen

Um ein oder mehrere Elemente am Ende eines Arrays hinzuzufügen, können wir {{jsxref("Array.prototype.push()","push()")}} verwenden. Beachten Sie, dass Sie eines oder mehrere Elemente angeben müssen, die Sie am Ende Ihres Arrays hinzufügen möchten.

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

Die Methode `pop()` gibt das entfernte Element zurück. Um dieses Element in einer neuen Variablen zu speichern, könnten Sie Folgendes tun:

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

Wenn Sie den Index eines Elements kennen, können Sie es mithilfe von {{jsxref("Array.prototype.splice()","splice()")}} aus dem Array entfernen:

```js
const cities = ["Manchester", "Liverpool", "Edinburgh", "Carlisle"];
const index = cities.indexOf("Liverpool");
if (index !== -1) {
  cities.splice(index, 1);
}
console.log(cities); // [ "Manchester", "Edinburgh", "Carlisle" ]
```

Bei diesem Aufruf von `splice()` gibt das erste Argument an, wo das Entfernen von Elementen beginnen soll, und das zweite Argument gibt an, wie viele Elemente entfernt werden sollen. So können Sie mehr als ein Element entfernen:

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

Manchmal möchten Sie dasselbe für jedes Element in einem Array tun und damit ein Array mit den geänderten Elementen erhalten. Dies können Sie mit {{jsxref("Array.prototype.map()","map()")}} tun. Der folgende Code nimmt ein Array von Zahlen und verdoppelt jede Zahl:

```js
function double(number) {
  return number * 2;
}
const numbers = [5, 2, 7, 6];
const doubled = numbers.map(double);
console.log(doubled); // [ 10, 4, 14, 12 ]
```

Wir geben eine Funktion an das `map()`, und `map()` ruft die Funktion einmal für jedes Element im Array auf und übergibt das Element. Es fügt dann den Rückgabewert aus jedem Funktionsaufruf zu einem neuen Array hinzu und gibt schließlich das neue Array zurück.

Manchmal möchten Sie ein neues Array erstellen, das nur die Elemente im ursprünglichen Array enthält, die einem bestimmten Test entsprechen. Das können Sie mit {{jsxref("Array.prototype.filter()","filter()")}} tun. Der folgende Code nimmt ein Array von Strings und gibt ein Array zurück, das nur die Strings enthält, die länger als acht Zeichen sind:

```js
function isLong(city) {
  return city.length > 8;
}
const cities = ["London", "Liverpool", "Totnes", "Edinburgh"];
const longer = cities.filter(isLong);
console.log(longer); // [ "Liverpool", "Edinburgh" ]
```

Wie `map()` geben wir eine Funktion an die `filter()`-Methode, und `filter()` ruft diese Funktion für jedes Element im Array auf und übergibt das Element. Wenn die Funktion `true` zurückgibt, wird das Element zu einem neuen Array hinzugefügt. Schließlich gibt es das neue Array zurück.

## Umwandlung zwischen Strings und Arrays

Häufig werden Sie mit Rohdaten konfrontiert, die in einem langen String enthalten sind, und Sie möchten die nützlichen Elemente in eine nützlichere Form trennen und sie dann bearbeiten, wie sie in einer Datentabelle anzeigen. Dazu können wir die Methode {{jsxref("String.prototype.split()","split()")}} verwenden. In ihrer einfachsten Form nimmt sie einen einzigen Parameter, das Zeichen, bei dem Sie den String trennen möchten, und gibt die Teilstrings zwischen dem Trennzeichen als Elemente in einem Array zurück.

> [!NOTE]
> Okay, dies ist technisch gesehen eine String-Methode, keine Array-Methode, aber wir haben sie hier eingefügt, da sie hier gut passt.

1. Lassen Sie uns damit herumspielen, um zu sehen, wie es funktioniert. Erstellen Sie zuerst einen String in Ihrer Konsole:

   ```js
   const data = "Manchester,London,Liverpool,Birmingham,Leeds,Carlisle";
   ```

2. Lassen Sie uns nun den String bei jedem Komma teilen:

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

4. Sie können auch den umgekehrten Weg gehen, indem Sie die Methode {{jsxref("Array.prototype.join()","join()")}} verwenden. Probieren Sie Folgendes aus:

   ```js
   const commaSeparated = cities.join(",");
   commaSeparated;
   ```

5. Eine andere Möglichkeit, ein Array in einen String zu konvertieren, ist die Verwendung der Methode {{jsxref("Array.prototype.toString()","toString()")}}. `toString()` ist möglicherweise einfacher als `join()`, da es keinen Parameter benötigt, aber es ist auch eingeschränkter. Mit `join()` können Sie verschiedene Trennzeichen angeben, während `toString()` immer ein Komma verwendet. (Versuchen Sie, Schritt 4 mit einem anderen Zeichen als einem Komma auszuführen.)

   ```js
   const dogNames = ["Rocket", "Flash", "Bella", "Slugger"];
   dogNames.toString(); // Rocket,Flash,Bella,Slugger
   ```

## Aktives Lernen: Diese Produkte drucken

Kommen wir auf das Beispiel zurück, das wir früher beschrieben haben — die Namen und Preise von Produkten auf einer Rechnung ausdrucken, dann die Preise addieren und sie unten ausdrucken. Im bearbeitbaren Beispiel unten befinden sich Kommentare mit Nummern — jeder von ihnen markiert eine Stelle, an der Sie dem Code etwas hinzufügen müssen. Sie sind wie folgt:

1. Unter dem Kommentar `// number 1` sind einige Strings, jeder enthält einen Produktnamen und einen Preis, getrennt durch einen Doppelpunkt. Wir möchten, dass Sie dies in ein Array umwandeln und es in einem Array namens `products` speichern.
2. Unter dem Kommentar `// number 2` starten Sie eine `for...of()`-Schleife, um jedes Element im `products`-Array zu durchlaufen.
3. Unter dem Kommentar `// number 3` möchten wir, dass Sie eine Zeile Code schreiben, die das aktuelle Array-Element (`name:price`) in zwei separate Elemente aufteilt, eines, das nur den Namen und eines, das nur den Preis enthält. Wenn Sie sich nicht sicher sind, wie Sie dies tun können, konsultieren Sie den Artikel [Nützliche String-Methoden](/de/docs/Learn_web_development/Core/Scripting/Useful_string_methods) für einige Hilfestellungen oder, noch besser, sehen Sie sich den Abschnitt [Umwandlung zwischen Strings und Arrays](#umwandlung_zwischen_strings_und_arrays) in diesem Artikel an.
4. Als Teil der obigen Zeile Code möchten Sie auch den Preis von einem String in eine Zahl umwandeln. Wenn Sie sich nicht erinnern können, wie das geht, schauen Sie sich den [ersten Artikel über Strings](/de/docs/Learn_web_development/Core/Scripting/Strings#numbers_vs._strings) an.
5. Es gibt eine Variable namens `total`, die am Anfang des Codes erstellt und auf 0 gesetzt wird. Innerhalb der Schleife (unter `// number 4`) möchten wir, dass Sie eine Zeile hinzufügen, die den aktuellen Preis des Elements in jeder Iteration der Schleife zu dieser Gesamtsumme addiert, sodass am Ende des Codes die richtige Gesamtsumme auf der Rechnung gedruckt wird. Sie benötigen möglicherweise einen [Zuweisungsoperator](/de/docs/Learn_web_development/Core/Scripting/Math#assignment_operators) dafür.
6. Wir möchten, dass Sie die Zeile direkt unter `// number 5` ändern, sodass die Variable `itemText` gleich "aktueller Artikelname — $aktueller Artikelpreis" ist, beispielsweise "Shoes — $23.99" in jedem Fall, sodass die korrekten Informationen für jeden Artikel auf der Rechnung gedruckt werden. Dies ist einfach eine einfache Zeichenfolgenverknüpfung, die Ihnen vertraut sein sollte.
7. Schließlich müssen Sie unter dem Kommentar `// number 6` eine `}` hinzufügen, um das Ende der `for...of()`-Schleife zu markieren.

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

## Aktives Lernen: Top 5 Suchen

Ein guter Einsatzzweck für Array-Methoden wie {{jsxref("Array.prototype.push()","push()")}} und {{jsxref("Array.prototype.pop()","pop()")}} ist, wenn Sie eine Aufzeichnung der aktuell aktiven Elemente in einer Web-App pflegen. In einer animierten Szene könnten Sie beispielsweise ein Array von Objekten haben, die die aktuell angezeigten Hintergrundgrafiken darstellen, und Sie möchten möglicherweise nur 50 gleichzeitig anzeigen, aus Leistungs- oder Unübersichtlichkeitsgründen. Wenn neue Objekte erstellt und zum Array hinzugefügt werden, können ältere aus dem Array gelöscht werden, um die gewünschte Anzahl zu halten.

In diesem Beispiel zeigen wir einen viel einfacheren Einsatz — hier geben wir Ihnen eine gefälschte Suchseite mit einer Suchbox. Die Idee ist, dass bei der Eingabe von Begriffen in das Suchfeld die Top-5-Suchbegriffe in der Liste angezeigt werden. Wenn die Anzahl der Begriffe über 5 steigt, beginnt der letzte Begriff jedes Mal gelöscht zu werden, wenn ein neuer Begriff an der Spitze hinzugefügt wird, sodass immer die letzten 5 Begriffe angezeigt werden.

> [!NOTE]
> In einer echten Such-App könnten Sie wahrscheinlich auf die vorherigen Suchbegriffe klicken, um zu vorherigen Suchanfragen zurückzukehren, und es würden tatsächliche Suchergebnisse angezeigt! Wir halten es für jetzt einfach.

Um die App abzuschließen, müssen Sie:

1. Fügen Sie eine Zeile unter dem Kommentar `// number 1` hinzu, die den momentan in das Suchfeld eingegebenen Wert zum Anfang des Arrays hinzufügt. Dieser kann mit `searchInput.value` abgerufen werden.
2. Fügen Sie eine Zeile unter dem Kommentar `// number 2` hinzu, die den Wert entfernt, der sich momentan am Ende des Arrays befindet.

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

Sie haben das Ende dieses Artikels erreicht, aber können Sie sich an die wichtigsten Informationen erinnern? Sie finden einige weitere Tests, um zu überprüfen, ob Sie sich diese Informationen gemerkt haben, bevor Sie fortfahren — siehe [Testen Sie Ihr Wissen: Arrays](/de/docs/Learn_web_development/Core/Scripting/Test_your_skills/Arrays).

## Fazit

Nachdem Sie diesen Artikel gelesen haben, sind wir sicher, dass Sie zustimmen, dass Arrays ziemlich nützlich sind; Sie werden sie überall in JavaScript antreffen, oft in Verbindung mit Schleifen, um dieselbe Aufgabe für jedes Element in einem Array auszuführen. Wir werden Ihnen später im Modul alles über Schleifen beibringen.

Im nächsten Artikel geben wir Ihnen eine Herausforderung, um Ihr Verständnis der vorhergehenden Artikel zu testen.

## Siehe auch

- {{jsxref("Array")}}
  - : Die `Array`-Objekt-Referenzseite bietet einen detaillierten Leitfaden zu den auf dieser Seite diskutierten Funktionen und vielen anderen `Array`-Funktionen.

{{PreviousMenuNext("Learn_web_development/Core/Scripting/Useful_string_methods", "Learn_web_development/Core/Scripting/Silly_story_generator", "Learn_web_development/Core/Scripting")}}
