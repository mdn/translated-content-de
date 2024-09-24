---
title: Arrays
slug: Learn/JavaScript/First_steps/Arrays
l10n:
  sourceCommit: cde9330e9bbaddea72febf44dcc3a7db16fe1a11
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/JavaScript/First_steps/Useful_string_methods", "Learn/JavaScript/First_steps/Silly_story_generator", "Learn/JavaScript/First_steps")}}

Im letzten Artikel dieses Moduls werfen wir einen Blick auf Arrays – eine praktische Methode, um eine Liste von Datenelementen unter einem einzelnen Variablennamen zu speichern. Hier schauen wir uns an, warum dies nützlich ist, und erkunden, wie man ein Array erstellt, Elemente darin abruft, hinzufügt und entfernt und vieles mehr.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Grundlegendes Verständnis von HTML und CSS, ein Verständnis dafür, was JavaScript ist.
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

Arrays werden im Allgemeinen als „listenartige Objekte“ beschrieben; im Grunde sind sie einzelne Objekte, die mehrere Werte in einer Liste enthalten. Array-Objekte können in Variablen gespeichert und ähnlich wie andere Wertetypen behandelt werden. Der Unterschied besteht darin, dass wir auf jeden Wert in der Liste einzeln zugreifen können und sehr nützliche und effiziente Dinge mit der Liste tun können, wie z. B. sie zu durchlaufen und dasselbe für jeden Wert zu tun. Vielleicht haben wir eine Reihe von Produktartikeln und deren Preise in einem Array gespeichert und möchten sie alle durchlaufen und auf einer Rechnung ausdrucken, während wir alle Preise zusammenrechnen und den Gesamtpreis unten ausgeben.

Wenn wir keine Arrays hätten, müssten wir jedes Element in einer separaten Variablen speichern und dann den Code, der das Drucken und Addieren durchführt, für jedes Element separat aufrufen. Dies wäre viel länger zu schreiben, weniger effizient und fehleranfälliger. Wenn wir 10 Artikel zur Rechnung hinzufügen müssten, wäre das bereits nervig, aber wie sieht es mit 100 Artikeln oder 1000 aus? Auf dieses Beispiel werden wir später im Artikel zurückkommen.

Wie in früheren Artikeln lernen wir die wirklichen Grundlagen von Arrays, indem wir einige Beispiele in die [Entwicklertools des Browsers](/de/docs/Learn/Common_questions/Tools_and_setup/What_are_browser_developer_tools) eingeben.

## Erstellen von Arrays

Arrays bestehen aus eckigen Klammern und Elementen, die durch Kommas getrennt sind.

1. Angenommen, wir möchten eine Einkaufsliste in einem Array speichern. Fügen Sie den folgenden Code in die Konsole ein:

   ```js
   const shopping = ["bread", "milk", "cheese", "hummus", "noodles"];
   console.log(shopping);
   ```

2. Im obigen Beispiel ist jedes Element ein String, aber in einem Array können wir verschiedene Datentypen speichern – Strings, Zahlen, Objekte und sogar andere Arrays. Wir können auch Datentypen in einem einzigen Array mischen – wir müssen uns nicht darauf beschränken, nur Zahlen in einem Array zu speichern und in einem anderen nur Strings. Zum Beispiel:

   ```js
   const sequence = [1, 1, 2, 3, 5, 8, 13];
   const random = ["tree", 795, [0, 1, 2]];
   ```

3. Bevor Sie fortfahren, erstellen Sie einige Beispiel-Arrays.

## Die Länge eines Arrays ermitteln

Sie können die Länge eines Arrays (wie viele Elemente darin sind) auf genau dieselbe Weise herausfinden, wie Sie die Länge (in Zeichen) eines Strings herausfinden – indem Sie die {{jsxref("Array.prototype.length", "length")}}-Eigenschaft verwenden. Versuchen Sie Folgendes:

```js
const shopping = ["bread", "milk", "cheese", "hummus", "noodles"];
console.log(shopping.length); // 5
```

## Zugriff auf Array-Elemente und deren Änderung

Elemente in einem Array sind nummeriert, beginnend bei null. Diese Zahl wird der _Index_ des Elements genannt. Das erste Element hat also den Index 0, das zweite den Index 1 usw. Sie können auf einzelne Elemente im Array mithilfe der Klammernotation und unter Angabe des Index des Elements zugreifen, genau so, wie Sie auf [Buchstaben in einem String zugegriffen](/de/docs/Learn/JavaScript/First_steps/Useful_string_methods#retrieving_a_specific_string_character) haben.

1. Geben Sie Folgendes in Ihre Konsole ein:

   ```js
   const shopping = ["bread", "milk", "cheese", "hummus", "noodles"];
   console.log(shopping[0]);
   // gibt "bread" zurück
   ```

2. Sie können auch ein Element in einem Array ändern, indem Sie einem einzelnen Array-Element einen neuen Wert zuweisen. Versuchen Sie dies:

   ```js
   const shopping = ["bread", "milk", "cheese", "hummus", "noodles"];
   shopping[0] = "tahini";
   console.log(shopping);
   // shopping wird nun [ "tahini", "milk", "cheese", "hummus", "noodles" ] zurückgeben
   ```

   > [!NOTE]
   > Wir haben es bereits gesagt, aber nur zur Erinnerung – JavaScript beginnt die Indizierung von Arrays bei null!

3. Beachten Sie, dass ein Array innerhalb eines Arrays als mehrdimensionales Array bezeichnet wird. Sie können auf ein Element innerhalb eines Arrays zugreifen, das sich selbst innerhalb eines anderen Arrays befindet, indem Sie zwei Klammerpaare miteinander verketten. Um beispielsweise auf eines der Elemente innerhalb des Arrays zuzugreifen, das das dritte Element innerhalb des `random` Arrays ist (siehe vorheriger Abschnitt), könnten wir so etwas tun:

   ```js
   const random = ["tree", 795, [0, 1, 2]];
   random[2][2];
   ```

4. Versuchen Sie, noch einige Änderungen an Ihren Array-Beispielen vorzunehmen, bevor Sie fortfahren. Spielen Sie ein wenig damit herum und sehen Sie, was funktioniert und was nicht.

## Den Index von Elementen in einem Array finden

Wenn Sie den Index eines Elements nicht kennen, können Sie die {{jsxref("Array.prototype.indexOf()", "indexOf()")}}-Methode verwenden. Die `indexOf()`-Methode nimmt ein Element als Argument und gibt entweder den Index des Elements oder `-1` zurück, wenn das Element nicht im Array ist:

```js
const birds = ["Parrot", "Falcon", "Owl"];
console.log(birds.indexOf("Owl")); // 2
console.log(birds.indexOf("Rabbit")); // -1
```

## Elemente hinzufügen

Um eines oder mehrere Elemente am Ende eines Arrays hinzuzufügen, können wir {{jsxref("Array.prototype.push()", "push()")}} verwenden. Beachten Sie, dass Sie eines oder mehrere Elemente angeben müssen, die Sie an das Ende Ihres Arrays hinzufügen möchten.

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

Um ein Element am Anfang des Arrays hinzuzufügen, verwenden Sie {{jsxref("Array.prototype.unshift()", "unshift()")}}:

```js
const cities = ["Manchester", "Liverpool"];
cities.unshift("Edinburgh");
console.log(cities); // [ "Edinburgh", "Manchester", "Liverpool" ]
```

## Elemente entfernen

Um das letzte Element aus dem Array zu entfernen, verwenden Sie {{jsxref("Array.prototype.pop()", "pop()")}}.

```js
const cities = ["Manchester", "Liverpool"];
cities.pop();
console.log(cities); // [ "Manchester" ]
```

Die `pop()`-Methode gibt das Element zurück, das entfernt wurde. Um dieses Element in einer neuen Variablen zu speichern, könnten Sie dies tun:

```js
const cities = ["Manchester", "Liverpool"];
const removedCity = cities.pop();
console.log(removedCity); // "Liverpool"
```

Um das erste Element aus einem Array zu entfernen, verwenden Sie {{jsxref("Array.prototype.shift()", "shift()")}}:

```js
const cities = ["Manchester", "Liverpool"];
cities.shift();
console.log(cities); // [ "Liverpool" ]
```

Wenn Sie den Index eines Elements kennen, können Sie es mit {{jsxref("Array.prototype.splice()", "splice()")}} aus dem Array entfernen:

```js
const cities = ["Manchester", "Liverpool", "Edinburgh", "Carlisle"];
const index = cities.indexOf("Liverpool");
if (index !== -1) {
  cities.splice(index, 1);
}
console.log(cities); // [ "Manchester", "Edinburgh", "Carlisle" ]
```

In diesem Aufruf von `splice()` sagt das erste Argument, wo das Entfernen von Elementen beginnen soll, und das zweite Argument sagt, wie viele Elemente entfernt werden sollen. So können Sie mehr als ein Element entfernen:

```js
const cities = ["Manchester", "Liverpool", "Edinburgh", "Carlisle"];
const index = cities.indexOf("Liverpool");
if (index !== -1) {
  cities.splice(index, 2);
}
console.log(cities); // [ "Manchester", "Carlisle" ]
```

## Zugriff auf jedes Element

Sehr oft möchten Sie auf jedes Element im Array zugreifen. Sie können dies mit der {{jsxref("statements/for...of", "for...of")}}-Anweisung tun:

```js
const birds = ["Parrot", "Falcon", "Owl"];

for (const bird of birds) {
  console.log(bird);
}
```

Manchmal möchten Sie dasselbe für jedes Element in einem Array tun, sodass Sie ein Array mit den geänderten Elementen erhalten. Sie können dies mit {{jsxref("Array.prototype.map()", "map()")}} tun. Der folgende Code nimmt ein Array von Zahlen und verdoppelt jede Zahl:

```js
function double(number) {
  return number * 2;
}
const numbers = [5, 2, 7, 6];
const doubled = numbers.map(double);
console.log(doubled); // [ 10, 4, 14, 12 ]
```

Wir geben `map()` eine Funktion, und `map()` ruft die Funktion einmal für jedes Element im Array auf und übergibt das Element. Dann fügt es den Rückgabewert von jedem Funktionsaufruf einem neuen Array hinzu und gibt schließlich das neue Array zurück.

Manchmal möchten Sie ein neues Array erstellen, das nur die Elemente des Originalarrays enthält, die einem bestimmten Test entsprechen. Dies können Sie mit {{jsxref("Array.prototype.filter()", "filter()")}} tun. Der folgende Code nimmt ein Array von Strings und gibt ein Array zurück, das nur die Strings enthält, die länger als 8 Zeichen sind:

```js
function isLong(city) {
  return city.length > 8;
}
const cities = ["London", "Liverpool", "Totnes", "Edinburgh"];
const longer = cities.filter(isLong);
console.log(longer); // [ "Liverpool", "Edinburgh" ]
```

Wie `map()` geben wir der `filter()`-Methode eine Funktion, und `filter()` ruft diese Funktion für jedes Element im Array auf und übergibt das Element. Wenn die Funktion `true` zurückgibt, wird das Element einem neuen Array hinzugefügt. Schließlich gibt es das neue Array zurück.

## Konvertieren zwischen Strings und Arrays

Oftmals werden Sie einige Rohdaten in einem langen String erhalten und Sie möchten die nützlichen Elemente in eine nützlichere Form trennen und dann Dinge mit ihnen tun, wie sie in einer Datentabelle anzeigen. Dazu können wir die {{jsxref("String.prototype.split()", "split()")}}-Methode verwenden. In ihrer einfachsten Form nimmt diese einen einzigen Parameter, das Zeichen, an dem Sie den String trennen möchten, und gibt die Teilstrings zwischen dem Separator als Elemente in einem Array zurück.

> [!NOTE]
> Okay, das ist technisch gesehen eine String-Methode, keine Array-Methode, aber wir haben sie hier bei den Arrays einsortiert, da sie gut dazu passt.

1. Lassen Sie uns damit spielen, um zu sehen, wie es funktioniert. Erstellen Sie zuerst einen String in Ihrer Konsole:

   ```js
   const data = "Manchester,London,Liverpool,Birmingham,Leeds,Carlisle";
   ```

2. Jetzt spalten wir es an jedem Komma:

   ```js
   const cities = data.split(",");
   cities;
   ```

3. Schließlich versuchen Sie die Länge Ihres neuen Arrays herauszufinden und einige Elemente daraus abzurufen:

   ```js
   cities.length;
   cities[0]; // das erste Element im Array
   cities[1]; // das zweite Element im Array
   cities[cities.length - 1]; // das letzte Element im Array
   ```

4. Sie können auch den umgekehrten Weg mit der {{jsxref("Array.prototype.join()", "join()")}}-Methode gehen. Versuchen Sie Folgendes:

   ```js
   const commaSeparated = cities.join(",");
   commaSeparated;
   ```

5. Eine andere Möglichkeit, ein Array in einen String zu konvertieren, ist die Verwendung der {{jsxref("Array.prototype.toString()", "toString()")}}-Methode. `toString()` ist in gewisser Weise einfacher als `join()`, da es keinen Parameter benötigt, aber es ist begrenzter. Mit `join()` können Sie verschiedene Separatoren angeben, während `toString()` immer ein Komma verwendet. (Versuchen Sie, Schritt 4 mit einem anderen Zeichen als einem Komma auszuführen.)

   ```js
   const dogNames = ["Rocket", "Flash", "Bella", "Slugger"];
   dogNames.toString(); // Rocket,Flash,Bella,Slugger
   ```

## Active Learning: Drucken dieser Produkte

Lassen Sie uns zu dem Beispiel zurückkehren, das wir zuvor beschrieben haben – Drucken von Produktnamen und Preisen auf einer Rechnung, dann Summieren der Preise und Drucken am Ende. Im editierbaren Beispiel unten gibt es Kommentare mit Zahlen – jeder davon kennzeichnet eine Stelle, an der Sie etwas zum Code hinzufügen müssen. Diese sind wie folgt:

1. Unter dem Kommentar `// number 1` befinden sich eine Anzahl von Strings, von denen jeder einen Produktnamen und einen Preis enthält, getrennt durch einen Doppelpunkt. Wir möchten, dass Sie dies in ein Array umwandeln und es in einem Array namens `products` speichern.
2. Unter dem Kommentar `// number 2` beginnen Sie bitte eine `for...of()` Schleife, um jedes Element im `products` Array durchzugehen.
3. Unter dem Kommentar `// number 3` möchten wir eine Zeile Code, die das aktuelle Array-Element (`name:price`) in zwei separate Elemente aufteilt, eines, das nur den Namen enthält, und eines, das nur den Preis enthält. Wenn Sie sich nicht sicher sind, wie dies geht, konsultieren Sie den Artikel zu [Nützlichen String-Methoden](/de/docs/Learn/JavaScript/First_steps/Useful_string_methods) für einige Hilfe oder noch besser, schauen Sie sich den Abschnitt [Konvertieren zwischen Strings und Arrays](#konvertieren_zwischen_strings_und_arrays) in diesem Artikel an.
4. Als Teil der obigen Codezeile sollten Sie den Preis auch von einem String in eine Zahl umwandeln. Wenn Sie sich nicht erinnern, wie das geht, sehen Sie sich den [ersten Strings Artikel](/de/docs/Learn/JavaScript/First_steps/Strings#numbers_vs._strings) an.
5. Es gibt eine Variable namens `total`, die oben im Code erstellt und auf 0 gesetzt wird. Innerhalb der Schleife (unter `// number 4`) möchten wir, dass Sie eine Zeile hinzufügen, die den aktuellen Artikelpreis bei jeder Iteration der Schleife zu dieser Summe hinzufügt, sodass am Ende des Codes die korrekte Summe auf die Rechnung gedruckt wird. Dafür benötigen Sie möglicherweise einen [Zuweisungsoperator](/de/docs/Learn/JavaScript/First_steps/Math#assignment_operators).
6. Wir möchten, dass Sie die Zeile direkt unter `// number 5` ändern, sodass die `itemText`-Variable mit „aktueller Artikelname – $aktueller Artikelpreis“ gleichgesetzt wird, zum Beispiel „Schuhe – $23.99“ in jedem Fall, sodass die korrekten Informationen zu jedem Element auf der Rechnung gedruckt werden. Dies ist nur eine einfache String-Verkettung, die Ihnen vertraut sein sollte.
7. Schließlich müssen Sie unter dem Kommentar `// number 6` eine `}` hinzufügen, um das Ende der `for...of()` Schleife zu markieren.

```html hidden
<h2>Live-Ausgabe</h2>

<div class="output" style="min-height: 150px;">
  <ul></ul>

  <p></p>
</div>

<h2>Editierbarer Code</h2>

<p class="a11y-label">
  Drücken Sie Esc, um den Fokus von dem Codebereich zu entfernen (Tab fügt ein Tabulatorzeichen ein).
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

## Active Learning: Top 5 Suchanfragen

Eine gute Verwendung für Array-Methoden wie {{jsxref("Array.prototype.push()", "push()")}} und {{jsxref("Array.prototype.pop()", "pop()")}} ist, wenn Sie einen Datensatz von aktuell aktiven Elementen in einer Web-App verwalten. In einer animierten Szene könnten Sie zum Beispiel ein Array von Objekten haben, die die momentan angezeigten Hintergrundgrafiken darstellen, und Sie möchten vielleicht nur 50 gleichzeitig anzeigen, aus Leistungs- oder Aufräumgründen. Wenn neue Objekte erstellt und dem Array hinzugefügt werden, können ältere aus dem Array gelöscht werden, um die gewünschte Anzahl beizubehalten.

In diesem Beispiel werden wir eine viel einfachere Nutzung zeigen – hier geben wir Ihnen eine gefälschte Suchseite mit einem Suchfeld. Die Idee ist, dass, wenn Begriffe in das Suchfeld eingegeben werden, die Top-5-vorherigen Suchbegriffe in der Liste angezeigt werden. Wenn die Anzahl der Begriffe über 5 hinausgeht, beginnt der letzte Begriff jedes Mal gelöscht zu werden, sobald ein neuer Begriff oben hinzugefügt wird, sodass immer die 5 vorherigen Begriffe angezeigt werden.

> [!NOTE]
> In einer echten Such-App könnten Sie wahrscheinlich die vorherigen Suchbegriffe anklicken, um zu vorherigen Suchvorgängen zurückzukehren, und es würden tatsächlich Suchergebnisse angezeigt! Wir halten es vorerst einfach.

Um die App zu vervollständigen, benötigen wir, dass Sie:

1. Fügen Sie eine Zeile unter dem Kommentar `// number 1` hinzu, die den aktuellen Wert, der im Suchfeld eingegeben wurde, am Anfang des Arrays hinzufügt. Dieser kann mit `searchInput.value` abgerufen werden.
2. Fügen Sie eine Zeile unter dem Kommentar `// number 2` hinzu, die den Wert entfernt, der sich derzeit am Ende des Arrays befindet.

```html hidden
<h2>Live-Ausgabe</h2>
<div class="output" style="min-height: 150px;">
  <input type="text" /><button>Suche</button>

  <ul></ul>
</div>

<h2>Editierbarer Code</h2>

<p class="a11y-label">
  Drücken Sie Esc, um den Fokus von dem Codebereich zu entfernen (Tab fügt ein Tabulatorzeichen ein).
</p>

<textarea id="code" class="playable-code" style="height: 370px; width: 95%">
const list = document.querySelector('.output ul');
const searchInput = document.querySelector('.output input');
const searchBtn = document.querySelector('.output button');

list.textContent = "";

const myHistory = [];
const MAX_HISTORY = 5;

searchBtn.onclick = () => {
  // wir erlauben nur die Eingabe eines Begriffs, wenn das Suchfeld nicht leer ist
  if (searchInput.value !== '') {
    // number 1

    // leeren Sie die Liste, sodass keine doppelten Einträge angezeigt werden
    // die Anzeige wird jedes Mal neu generiert, wenn ein Suchbegriff eingegeben wird
    list.textContent = "";

    // durchlaufen Sie das Array und zeigen alle Suchbegriffe in der Liste an
    for (const itemText of myHistory) {
      const listItem = document.createElement('li');
      listItem.textContent = itemText;
      list.appendChild(listItem);
    }

    // Wenn die Array-Länge 5 oder mehr ist, entfernen Sie den ältesten Suchbegriff
    if (myHistory.length >= MAX_HISTORY) {
      // number 2
    }

    // leeren Sie das Suchfeld und fokussieren Sie es, bereit für die Eingabe des nächsten Begriffs
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
  // wir erlauben nur die Eingabe eines Begriffs, wenn das Suchfeld nicht leer ist
  if (searchInput.value !== '') {
    myHistory.unshift(searchInput.value);

    // leeren Sie die Liste, sodass keine doppelten Einträge angezeigt werden
    // die Anzeige wird jedes Mal neu generiert, wenn ein Suchbegriff eingegeben wird
    list.textContent = "";

    // durchlaufen Sie das Array und zeigen alle Suchbegriffe in der Liste an
    for (const itemText of myHistory) {
      const listItem = document.createElement('li');
      listItem.textContent = itemText;
      list.appendChild(listItem);
    }

    // Wenn die Array-Länge 5 oder mehr ist, entfernen Sie den ältesten Suchbegriff
    if (myHistory.length >= MAX_HISTORY) {
      myHistory.pop();
    }

    // leeren Sie das Suchfeld und fokussieren Sie es, bereit für die Eingabe des nächsten Begriffs
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
  // Wir möchten den Zustand nur speichern, wenn der Benutzer-Code angezeigt wird,
  // nicht die Lösung, damit diese nicht über den Benutzer-Code gespeichert wird
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

Sie haben das Ende dieses Artikels erreicht, aber erinnern Sie sich an die wichtigsten Informationen? Sie können einige weitere Tests finden, um zu überprüfen, ob Sie diese Informationen behalten haben, bevor Sie fortfahren – siehe [Testen Sie Ihr Können: Arrays](/de/docs/Learn/JavaScript/First_steps/Test_your_skills:_Arrays).

## Fazit

Nachdem Sie diesen Artikel durchgelesen haben, sind wir sicher, dass Sie zustimmen werden, dass Arrays ziemlich nützlich erscheinen; Sie werden überall in JavaScript auftauchen, oft in Verbindung mit Schleifen, um dasselbe für jedes Element in einem Array zu machen. Wir werden Ihnen alle nützlichen Grundlagen über Schleifen im nächsten Modul beibringen, aber für den Moment sollten Sie sich selbst applaudieren und eine wohlverdiente Pause einlegen; Sie haben alle Artikel in diesem Modul durchgearbeitet!

Das einzige, was noch zu tun ist, ist die Durchführung der Bewertung dieses Moduls, die Ihr Verständnis der vorangegangenen Artikel testet.

## Siehe auch

- [Indizierte Sammlungen](/de/docs/Web/JavaScript/Guide/Indexed_collections) — ein fortgeschrittener Leitfaden zu Arrays und deren Verwandten, den typisierten Arrays.
- {{jsxref("Array")}} — die Referenzseite für das `Array`-Objekt — für einen detaillierten Referenzleitfaden zu den auf dieser Seite besprochenen Funktionen und vielen mehr.

{{PreviousMenuNext("Learn/JavaScript/First_steps/Useful_string_methods", "Learn/JavaScript/First_steps/Silly_story_generator", "Learn/JavaScript/First_steps")}}
