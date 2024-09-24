---
title: Nützliche String-Methoden
slug: Learn/JavaScript/First_steps/Useful_string_methods
l10n:
  sourceCommit: bc0d0d1ef796435e969f6d65c7e5d3c08f4023aa
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/JavaScript/First_steps/Strings", "Learn/JavaScript/First_steps/Arrays", "Learn/JavaScript/First_steps")}}

Nun, da wir die Grundlagen von Strings betrachtet haben, lassen Sie uns einen Gang höher schalten und darüber nachdenken, welche nützlichen Operationen wir mit eingebauten Methoden auf Strings durchführen können, wie z.B. die Länge eines Textstrings zu finden, Strings zu verbinden und zu teilen, ein Zeichen in einem String durch ein anderes zu ersetzen und mehr.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Ein grundlegendes Verständnis von HTML und CSS, ein Verständnis
        dafür, was JavaScript ist.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Zu verstehen, dass Strings Objekte sind, und zu lernen, wie man einige
        der grundlegenden Methoden verwendet, die für diese Objekte zur
        Manipulation von Strings verfügbar sind.
      </td>
    </tr>
  </tbody>
</table>

## Strings als Objekte

Die meisten Werte können in JavaScript so verwendet werden, als ob sie Objekte wären. Wenn Sie einen String erstellen, z.B. durch

```js
const string = "This is my string";
```

obwohl die Variable selbst kein Objekt ist, hat sie dennoch eine große Anzahl von Eigenschaften und Methoden zur Verfügung, indem sie dank der Eigenschaft, als Objekt verwendbar zu sein, beim Zugriff auf Eigenschaften bereitsteht. Sie können dies sehen, wenn Sie auf die Seite des {{jsxref("String")}}-Objekts gehen und die Liste auf der Seite durchsehen!

**Jetzt, bevor Ihr Gehirn zu schmelzen beginnt, keine Sorge!** Am Anfang Ihrer Lernreise müssen Sie wirklich nichts von all diesen Dingen wissen. Aber es gibt einige, die Sie potentiell ziemlich oft verwenden werden, die wir uns hier ansehen werden.

Lassen Sie uns einige Beispiele in die [Entwicklertools des Browsers](/de/docs/Learn/Common_questions/Tools_and_setup/What_are_browser_developer_tools) eingeben.

## Die Länge eines Strings finden

Das ist einfach — Sie verwenden die {{jsxref("String.prototype.length", "length")}}-Eigenschaft. Versuchen Sie, die folgenden Zeilen einzugeben:

```js
const browserType = "mozilla";
browserType.length;
```

Dies sollte die Zahl 7 zurückgeben, weil "mozilla" 7 Zeichen lang ist. Dies ist aus vielen Gründen nützlich; zum Beispiel könnten Sie die Länge einer Serie von Namen herausfinden wollen, um sie in der Reihenfolge ihrer Länge anzuzeigen, oder einem Benutzer mitteilen, dass ein von ihm in ein Formularfeld eingegebener Benutzername zu lang ist, wenn er eine bestimmte Länge überschreitet.

## Abrufen eines bestimmten Zeichens eines Strings

In diesem Zusammenhang können Sie jedes Zeichen innerhalb eines Strings abrufen, indem Sie die **eckige Klammer-Notation** verwenden — das bedeutet, dass Sie eckige Klammern (`[]`) am Ende Ihres Variablennamens einschließen. Innerhalb der eckigen Klammern geben Sie die Nummer des Zeichens ein, das Sie zurückgeben möchten. Um z.B. den ersten Buchstaben abzurufen, würden Sie Folgendes tun:

```js
browserType[0];
```

Denken Sie daran: Computer zählen ab 0, nicht ab 1!

Um das letzte Zeichen eines _beliebigen_ Strings abzurufen, könnten wir die folgende Zeile verwenden, indem wir diese Technik mit der oben betrachteten `length`-Eigenschaft kombinieren:

```js
browserType[browserType.length - 1];
```

Die Länge des Strings "mozilla" ist 7, aber da das Zählen bei 0 beginnt, ist die Position des letzten Zeichens 6; die Verwendung von `length-1` bringt uns zum letzten Zeichen.

## Testen, ob ein String ein Teilstück enthält

Manchmal möchten Sie herausfinden, ob ein kleinerer String in einem größeren vorhanden ist (wir sagen allgemein, ob ein Teilstück in einem String vorhanden ist). Dies kann mit der Methode {{jsxref("String.prototype.includes()", "includes()")}} erreicht werden, die einen einzigen {{glossary("parameter")}} nimmt — das Teilstück, das Sie suchen möchten.

Es gibt `true` zurück, wenn der String das Teilstück enthält, und `false` andernfalls.

```js
const browserType = "mozilla";

if (browserType.includes("zilla")) {
  console.log("Found zilla!");
} else {
  console.log("No zilla here!");
}
```

Oft möchten Sie wissen, ob ein String mit einem bestimmten Teilstück beginnt oder endet. Dies ist ein häufiges Bedürfnis, so dass es dafür zwei spezielle Methoden gibt: {{jsxref("String.prototype.startsWith()", "startsWith()")}} und {{jsxref("String.prototype.endsWith()", "endsWith()")}}:

```js
const browserType = "mozilla";

if (browserType.startsWith("zilla")) {
  console.log("Found zilla!");
} else {
  console.log("No zilla here!");
}
```

```js
const browserType = "mozilla";

if (browserType.endsWith("zilla")) {
  console.log("Found zilla!");
} else {
  console.log("No zilla here!");
}
```

## Die Position eines Teilstücks in einem String finden

Sie können die Position eines Teilstücks innerhalb eines größeren Strings mit der Methode {{jsxref("String.prototype.indexOf()", "indexOf()")}} finden. Diese Methode nimmt zwei {{glossary("parameter", "parameters")}} – das Teilstück, das Sie suchen möchten, und einen optionalen Parameter, der den Startpunkt der Suche angibt.

Wenn der String das Teilstück enthält, gibt `indexOf()` den Index des ersten Vorkommens des Teilstücks zurück. Wenn der String das Teilstück nicht enthält, gibt `indexOf()` `-1` zurück.

```js
const tagline = "MDN - Resources for developers, by developers";
console.log(tagline.indexOf("developers")); // 20
```

Beginnend bei `0`, wenn Sie die Anzahl der Zeichen (einschließlich Leerzeichen) vom Anfang des Strings zählen, befindet sich das erste Vorkommen des Teilstücks `"developers"` bei Index `20`.

```js
console.log(tagline.indexOf("x")); // -1
```

Das hingegen gibt `-1` zurück, da der Buchstabe `x` nicht im String enthalten ist.

Nun, da Sie wissen, wie man das erste Vorkommen eines Teilstücks findet, wie findet man nachfolgende Vorkommen? Das können Sie erreichen, indem Sie der Methode als zweiten Parameter einen Wert übergeben, der größer ist als der Index des vorherigen Vorkommens.

```js
const firstOccurrence = tagline.indexOf("developers");
const secondOccurrence = tagline.indexOf("developers", firstOccurrence + 1);

console.log(firstOccurrence); // 20
console.log(secondOccurrence); // 35
```

Hier sagen wir der Methode, sie solle nach dem Teilstück `"developers"` ab Index `21` (`firstOccurrence + 1`) suchen, und sie gibt den Index `35` zurück.

## Ein Teilstück aus einem String extrahieren

Sie können ein Teilstück aus einem String mit der Methode {{jsxref("String.prototype.slice()", "slice()")}} extrahieren. Sie geben ihm:

- den Index an, bei dem die Extraktion beginnen soll
- den Index, bei dem die Extraktion enden soll. Dies ist exklusiv, das bedeutet, dass das Zeichen an diesem Index nicht im extrahierten Teilstück enthalten ist.

Zum Beispiel:

```js
const browserType = "mozilla";
console.log(browserType.slice(1, 4)); // "ozi"
```

Das Zeichen bei Index `1` ist `"o"`, und das Zeichen bei Index `4` ist `"l"`. Also extrahieren wir alle Zeichen, beginnend bei `"o"` und endend direkt vor `"l"`, was uns `"ozi"` gibt.

Wenn Sie wissen, dass Sie alle verbleibenden Zeichen in einem String nach einem bestimmten Zeichen extrahieren möchten, müssen Sie den zweiten Parameter nicht angeben. Stattdessen müssen Sie nur die Zeichenposition angeben, von der aus Sie die verbleibenden Zeichen in einem String extrahieren möchten. Versuchen Sie folgendes:

```js
browserType.slice(2); // "zilla"
```

Dies gibt `"zilla"` zurück — das liegt daran, dass die Zeichenposition 2 der Buchstabe `"z"` ist und weil Sie keinen zweiten Parameter angegeben haben, wurde das Teilstück, das zurückgegeben wurde, alle verbleibenden Zeichen im String.

> **Note:** `slice()` hat auch andere Optionen; studieren Sie die Seite {{jsxref("String.prototype.slice()", "slice()")}}, um zu sehen, was Sie sonst noch herausfinden können.

## Änderung der Groß- und Kleinschreibung

Die String-Methoden {{jsxref("String.prototype.toLowerCase()", "toLowerCase()")}} und {{jsxref("String.prototype.toUpperCase()", "toUpperCase()")}} nehmen einen String und konvertieren alle Zeichen in Klein- oder Großbuchstaben, jeweils. Dies kann nützlich sein, zum Beispiel wenn Sie alle vom Benutzer eingegebenen Daten normalisieren möchten, bevor Sie sie in einer Datenbank speichern.

Lassen Sie uns versuchen, die folgenden Zeilen einzugeben, um zu sehen, was passiert:

```js
const radData = "My NaMe Is MuD";
console.log(radData.toLowerCase());
console.log(radData.toUpperCase());
```

## Aktualisierung von Teilen eines Strings

Sie können ein Teilstück in einem String durch ein anderes Teilstück mit der Methode {{jsxref("String.prototype.replace()", "replace()")}} ersetzen.

In diesem Beispiel geben wir zwei Parameter – den String, den wir ersetzen möchten, und den String, durch den wir ihn ersetzen möchten:

```js
const browserType = "mozilla";
const updated = browserType.replace("moz", "van");

console.log(updated); // "vanilla"
console.log(browserType); // "mozilla"
```

Beachten Sie, dass `replace()`, wie viele String-Methoden, nicht den String ändert, auf dem es aufgerufen wurde, sondern einen neuen String zurückgibt. Wenn Sie die ursprüngliche Variable `browserType` aktualisieren möchten, müssten Sie so etwas tun:

```js
let browserType = "mozilla";
browserType = browserType.replace("moz", "van");

console.log(browserType); // "vanilla"
```

Ebenso beachten Sie, dass wir jetzt `browserType` mit `let` deklarieren müssen, nicht mit `const`, weil wir es neu zuweisen.

Beachten Sie, dass `replace()` in dieser Form nur das erste Vorkommen des Teilstücks ändert. Wenn Sie alle Vorkommen ändern möchten, können Sie {{jsxref("String.prototype.replaceAll()", "replaceAll()")}} verwenden:

```js
let quote = "To be or not to be";
quote = quote.replaceAll("be", "code");

console.log(quote); // "To code or not to code"
```

## Aktive Lernbeispiele

In diesem Abschnitt werden wir Ihnen die Möglichkeit geben, etwas String-Manipulationscode zu schreiben. In jeder der folgenden Übungen haben wir ein Array von Strings und eine Schleife, die jeden Wert im Array verarbeitet und ihn in einer Liste mit Aufzählungszeichen anzeigt. Sie müssen jetzt nicht mit Arrays oder Schleifen vertraut sein — diese werden in zukünftigen Artikeln erklärt. Alles, was Sie in jedem Fall tun müssen, ist den Code zu schreiben, der die Strings im gewünschten Format ausgibt.

Jedes Beispiel kommt mit einem "Zurücksetzen"-Button, den Sie verwenden können, um den Code zurückzusetzen, wenn Sie einen Fehler gemacht haben und ihn nicht mehr zum Laufen bringen können, und einem "Lösung anzeigen"-Button, den Sie drücken können, um eine mögliche Antwort zu sehen, wenn Sie wirklich feststecken.

### Filtern von Grußnachrichten

In der ersten Übung beginnen wir mit einer einfachen Aufgabe — wir haben ein Array von Grußkartentexten, aber wir möchten sie sortieren, um nur die Weihnachtsnachrichten aufzulisten. Wir möchten, dass Sie einen Bedingungstest innerhalb der `if ()`-Struktur ausfüllen, um jede Zeichenkette zu testen und sie nur in der Liste auszugeben, wenn es sich um eine Weihnachtsnachricht handelt.

Überlegen Sie, wie Sie testen könnten, ob die Nachricht in jedem Fall eine Weihnachtsnachricht ist. Welcher String ist in allen diesen Nachrichten vorhanden, und welche Methode könnten Sie verwenden, um zu testen, ob er vorhanden ist?

```html hidden
<h2>Live output</h2>

<div class="output" style="min-height: 125px;">
  <ul></ul>
</div>

<h2>Editable code</h2>
<p class="a11y-label">
  Press Esc to move focus away from the code area (Tab inserts a tab character).
</p>

<textarea id="code" class="playable-code" style="height: 290px; width: 95%">
const list = document.querySelector('.output ul');
list.textContent = "";
const greetings = ['Happy Birthday!',
                 'Merry Christmas my love',
                 'A happy Christmas to all the family',
                 'You\'re all I want for Christmas',
                 'Get well soon'];

for (const greeting of greetings) {
  // Your conditional test needs to go inside the parentheses
  // in the line below, replacing what's currently there
  if (greeting) {
    const listItem = document.createElement('li');
    listItem.textContent = greeting;
    list.appendChild(listItem);
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
list.textContent = "";
const greetings = [
  'Happy Birthday!',
  'Merry Christmas my love',
  'A happy Christmas to all the family',
  'You\\'re all I want for Christmas',
  'Get well soon',
];

for (const greeting of greetings) {
  // Your conditional test needs to go inside the parentheses
  // in the line below, replacing what's currently there
  if (greeting.includes('Christmas')) {
    const listItem = document.createElement('li');
    listItem.textContent = greeting;
    list.appendChild(listItem);
  }
}`;

let solutionEntry = jsSolution;

textarea.addEventListener("input", updateCode);
window.addEventListener("load", updateCode);

// stop tab key tabbing out of textarea and
// make it write a tab at the caret position instead

textarea.onkeydown = (e) => {
  if (e.code === "Tab") {
    e.preventDefault();
    insertAtCaret("\t");
  }

  if (e.code === "Escape") {
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

{{ EmbedLiveSample('Filtering_greeting_messages', '100%', 600) }}

### Korrektur der Großschreibung

In dieser Übung haben wir die Namen von Städten im Vereinigten Königreich, aber die Groß- und Kleinschreibung ist total durcheinander. Wir möchten, dass Sie sie so ändern, dass sie alle in Kleinbuchstaben sind, außer einem Großbuchstaben am Anfang. Eine gute Möglichkeit, dies zu tun, ist:

1. Konvertieren Sie die gesamte Zeichenkette, die in der Variable `city` enthalten ist, in Kleinbuchstaben und speichern Sie sie in einer neuen Variable.
2. Nehmen Sie den ersten Buchstaben der Zeichenkette in dieser neuen Variable und speichern Sie ihn in einer weiteren Variable.
3. Verwenden Sie diese letzte Variable als Teilstück, um den ersten Buchstaben der Zeichenkette in Kleinbuchstaben durch den ersten Buchstaben der Zeichenkette in Kleinbuchstaben, der in Großbuchstaben geändert wurde, zu ersetzen. Speichern Sie das Ergebnis dieses Ersetzungsverfahrens in einer weiteren neuen Variable.
4. Ändern Sie den Wert der `result`-Variable, damit er dem endgültigen Ergebnis entspricht, nicht `city`.

> [!NOTE]
> Ein Hinweis — die Parameter der String-Methoden müssen keine Zeichenfolgenliterale sein; sie können auch Variablen oder sogar Variablen mit einer auf sie angewandten Methode sein.

```html hidden
<h2>Live output</h2>

<div class="output" style="min-height: 125px;">
  <ul></ul>
</div>

<h2>Editable code</h2>
<p class="a11y-label">
  Press Esc to move focus away from the code area (Tab inserts a tab character).
</p>

<textarea id="code" class="playable-code" style="height: 250px; width: 95%">
const list = document.querySelector('.output ul');
list.textContent = "";
const cities = ['lonDon', 'ManCHESTer', 'BiRmiNGHAM', 'liVERpoOL'];

for (const city of cities) {
  // write your code just below here

  const result = city;
  const listItem = document.createElement('li');
  listItem.textContent = result;
  list.appendChild(listItem);
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

reset.addEventListener("click", function () {
  textarea.value = code;
  userEntry = textarea.value;
  solutionEntry = jsSolution;
  solution.value = "Show solution";
  updateCode();
});

solution.addEventListener("click", function () {
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
list.textContent = "";
const cities = ['lonDon', 'ManCHESTer', 'BiRmiNGHAM', 'liVERpoOL'];

for (const city of cities) {
  // write your code just below here
  const lower = city.toLowerCase();
  const firstLetter = lower.slice(0,1);
  const capitalized = lower.replace(firstLetter,firstLetter.toUpperCase());
  const result = capitalized;
  const listItem = document.createElement('li');
  listItem.textContent = result;
  list.appendChild(listItem);
}`;

let solutionEntry = jsSolution;

textarea.addEventListener("input", updateCode);
window.addEventListener("load", updateCode);

// stop tab key tabbing out of textarea and
// make it write a tab at the caret position instead

textarea.onkeydown = function (e) {
  if (e.code === "Tab") {
    e.preventDefault();
    insertAtCaret("\t");
  }

  if (e.code === "Escape") {
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

textarea.onkeyup = function () {
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

{{ EmbedLiveSample('Fixing_capitalization', '100%', 570) }}

### Neue Strings aus alten Teilen erstellen

In dieser letzten Übung enthält das Array eine Menge Zeichenfolgen mit Informationen über Bahnhöfe im Norden Englands. Die Zeichenfolgen sind Datenelemente, die den dreibuchstabigen Stationscode enthalten, gefolgt von einigen maschinenlesbaren Daten, gefolgt von einem Semikolon, gefolgt vom menschenlesbaren Stationsnamen. Zum Beispiel:

```plain
MAN675847583748sjt567654;Manchester Piccadilly
```

Wir möchten den Stationscode und den Namen extrahieren und sie in einer Zeichenfolge mit folgender Struktur zusammenstellen:

```plain
MAN: Manchester Piccadilly
```

Wir empfehlen, dies folgendermaßen zu tun:

1. Den dreibuchstabigen Stationscode extrahieren und in einer neuen Variablen speichern.
2. Die Zeichenindexnummer des Semikolons finden.
3. Den menschenlesbaren Stationsnamen mit der Zeichenindexnummer des Semikolons als Referenzpunkt extrahieren und in einer neuen Variablen speichern.
4. Die beiden neuen Variablen und eine Zeichenfolgendarstellung zusammenfügen, um die endgültige Zeichenfolge zu erstellen.
5. Den Wert der `result`-Variable auf die endgültige Zeichenfolge ändern, nicht auf `station`.

```html hidden
<h2>Live output</h2>

<div class="output" style="min-height: 125px;">
  <ul></ul>
</div>

<h2>Editable code</h2>
<p class="a11y-label">
  Press Esc to move focus away from the code area (Tab inserts a tab character).
</p>

<textarea id="code" class="playable-code" style="height: 285px; width: 95%">
const list = document.querySelector('.output ul');
list.textContent = "";
const stations = ['MAN675847583748sjt567654;Manchester Piccadilly',
                  'GNF576746573fhdg4737dh4;Greenfield',
                  'LIV5hg65hd737456236dch46dg4;Liverpool Lime Street',
                  'SYB4f65hf75f736463;Stalybridge',
                  'HUD5767ghtyfyr4536dh45dg45dg3;Huddersfield'];

for (const station of stations) {
  // write your code just below here

  const result = station;
  const listItem = document.createElement('li');
  listItem.textContent = result;
  list.appendChild(listItem);
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

reset.addEventListener("click", function () {
  textarea.value = code;
  userEntry = textarea.value;
  solutionEntry = jsSolution;
  solution.value = "Show solution";
  updateCode();
});

solution.addEventListener("click", function () {
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
list.textContent = '';
const stations = ['MAN675847583748sjt567654;Manchester Piccadilly',
                  'GNF576746573fhdg4737dh4;Greenfield',
                  'LIV5hg65hd737456236dch46dg4;Liverpool Lime Street',
                  'SYB4f65hf75f736463;Stalybridge',
                  'HUD5767ghtyfyr4536dh45dg45dg3;Huddersfield'];

for (const station of stations) {
  // write your code just below here
  const code = station.slice(0,3);
  const semiColon = station.indexOf(';');
  const name = station.slice(semiColon + 1);
  const result = \`\${code}: \${name}\`;
  const listItem = document.createElement('li');
  listItem.textContent = result;
  list.appendChild(listItem);
}`;

let solutionEntry = jsSolution;

textarea.addEventListener("input", updateCode);
window.addEventListener("load", updateCode);

// stop tab key tabbing out of textarea and
// make it write a tab at the caret position instead

textarea.onkeydown = function (e) {
  if (e.code === "Tab") {
    e.preventDefault();
    insertAtCaret("\t");
  }

  if (e.code === "Escape") {
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

textarea.onkeyup = function () {
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

{{ EmbedLiveSample('Making_new_strings_from_old_parts', '100%', 600) }}

## Testen Sie Ihre Fähigkeiten!

Sie haben das Ende dieses Artikels erreicht, aber können Sie sich an die wichtigsten Informationen erinnern? Sie können einige weitere Tests finden, um zu überprüfen, ob Sie diese Informationen behalten haben, bevor Sie weitermachen — siehe [Testen Sie Ihre Fähigkeiten: Strings](/de/docs/Learn/JavaScript/First_steps/Test_your_skills:_Strings).

## Fazit

Man kann der Tatsache nicht entkommen, dass die Fähigkeit, mit Wörtern und Sätzen in der Programmierung umzugehen, sehr wichtig ist — besonders in JavaScript, da es bei Websites darum geht, mit Menschen zu kommunizieren. Dieser Artikel hat Ihnen die Grundlagen gegeben, die Sie über die Manipulation von Strings jetzt wissen müssen. Das sollte Ihnen gut dienen, wenn Sie in der Zukunft in komplexere Themen eintauchen. Als nächstes werden wir uns den letzten großen Datentyp ansehen, auf den wir uns kurzfristig konzentrieren müssen — Arrays.

{{PreviousMenuNext("Learn/JavaScript/First_steps/Strings", "Learn/JavaScript/First_steps/Arrays", "Learn/JavaScript/First_steps")}}
