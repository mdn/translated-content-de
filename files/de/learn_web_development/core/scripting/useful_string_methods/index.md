---
title: Nützliche String-Methoden
short-title: String methods
slug: Learn_web_development/Core/Scripting/Useful_string_methods
l10n:
  sourceCommit: a84b606ffd77c40a7306be6c932a74ab9ce6ab96
---

{{PreviousMenuNext("Learn_web_development/Core/Scripting/Strings", "Learn_web_development/Core/Scripting/Arrays", "Learn_web_development/Core/Scripting")}}

Nun, da wir uns die Grundlagen von Strings angesehen haben, gehen wir einen Schritt weiter und betrachten, welche nützlichen Operationen wir mit eingebauten Methoden auf Strings ausführen können, wie das Finden der Länge eines Textstrings, das Verbinden und Teilen von Strings, das Ersetzen eines Zeichens in einem String durch ein anderes und mehr.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>Verständnis von <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a> und den <a href="/de/docs/Learn_web_development/Core/Styling_basics">Grundlagen von CSS</a>. Kenntnisse der <a href="/de/docs/Learn_web_development/Core/Scripting/Strings">String-Grundlagen</a>.</td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
          String-Manipulation mithilfe von gängigen Eigenschaften und Methoden, die in JavaScript eingebaut sind.
      </td>
    </tr>
  </tbody>
</table>

## Strings als Objekte

Die meisten Werte können in JavaScript verwendet werden, als wären sie Objekte. Wenn Sie einen String erstellen, zum Beispiel durch die Verwendung von

```js
const string = "This is my string";
```

obwohl die Variable selbst kein Objekt ist, hat sie dennoch aufgrund ihrer Verwendbarkeit als Objekt beim Zugriff auf Eigenschaften eine Vielzahl von Eigenschaften und Methoden zur Verfügung. Das können Sie sehen, wenn Sie auf die Seite des {{jsxref("String")}}-Objekts gehen und die Liste auf der Seite ansehen!

**Bevor Ihr Gehirn zu rauchen beginnt, keine Angst!** Sie müssen in der frühen Phase Ihres Lernprozesses wirklich nicht die meisten dieser Punkte wissen. Aber es gibt einige, die Sie potenziell oft nutzen werden und die wir hier betrachten.

Lassen Sie uns einige Beispiele in die [Entwicklertools des Browsers](/de/docs/Learn_web_development/Howto/Tools_and_setup/What_are_browser_developer_tools) eingeben.

## Die Länge eines Strings finden

Das ist einfach — Sie verwenden die {{jsxref("String.prototype.length", "length")}}-Eigenschaft. Versuchen Sie, die folgenden Zeilen einzugeben:

```js
const browserType = "mozilla";
browserType.length;
```

Dies sollte die Nummer 7 zurückgeben, weil "mozilla" 7 Zeichen lang ist. Dies ist aus vielen Gründen nützlich; zum Beispiel könnten Sie die Längen von einer Reihe von Namen ermitteln, um sie in Reihenfolge ihrer Länge anzuzeigen, oder einem Benutzer mitteilen, dass ein Benutzername, den er in ein Formularfeld eingegeben hat, zu lang ist, wenn er eine bestimmte Länge überschreitet.

## Ein bestimmtes Zeichen eines Strings abrufen

Im Zusammenhang damit können Sie jedes Zeichen in einem String zurückgeben, indem Sie die **eckige Klammer-Notation** verwenden — das bedeutet, dass Sie am Ende Ihres Variablennamens eckige Klammern (`[]`) hinzufügen. In den eckigen Klammern geben Sie die Nummer des Zeichens an, das Sie zurückgeben möchten. Um also das erste Zeichen abzurufen, würden Sie dies tun:

```js
browserType[0];
```

Denken Sie daran: Computer zählen ab 0, nicht ab 1!

Um das letzte Zeichen eines _beliebigen_ Strings abzurufen, könnten Sie die folgende Zeile verwenden, indem Sie diese Technik mit der oben betrachteten `length`-Eigenschaft kombinieren:

```js
browserType[browserType.length - 1];
```

Die Länge des Strings "mozilla" ist 7, aber da die Zählung bei 0 beginnt, ist die Position des letzten Zeichens 6; `length-1` gibt uns das letzte Zeichen.

## Testen, ob ein String einen Teilstring enthält

Manchmal möchten Sie wissen, ob ein kleinerer String in einem größeren enthalten ist (allgemein sagen wir: _ob ein Teilstring in einem String enthalten ist_). Dies kann mit der Methode {{jsxref("String.prototype.includes()", "includes()")}} geschehen, die einen {{Glossary("parameter", "Parameter")}} benötigt — den Teilstring, den Sie suchen möchten.

Sie gibt `true` zurück, wenn der String den Teilstring enthält, und `false`, wenn nicht.

```js
const browserType = "mozilla";

if (browserType.includes("zilla")) {
  console.log("Found zilla!");
} else {
  console.log("No zilla here!");
}
```

Oftmals möchten Sie wissen, ob ein String mit einem bestimmten Teilstring beginnt oder endet. Dies ist ein häufiges Bedürfnis, sodass es zwei spezielle Methoden dafür gibt: {{jsxref("String.prototype.startsWith()", "startsWith()")}} und {{jsxref("String.prototype.endsWith()", "endsWith()")}}:

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

## Die Position eines Teilstrings in einem String finden

Sie können die Position eines Teilstrings in einem größeren String mit der Methode {{jsxref("String.prototype.indexOf()", "indexOf()")}} finden. Diese Methode nimmt zwei {{Glossary("parameter", "Parameter")}} – den Teilstring, den Sie suchen möchten, und einen optionalen Parameter, der den Startpunkt der Suche angibt.

Wenn der String den Teilstring enthält, gibt `indexOf()` den Index des ersten Vorkommens des Teilstrings zurück. Wenn der String den Teilstring nicht enthält, gibt `indexOf()` `-1` zurück.

```js
const tagline = "MDN - Resources for developers, by developers";
console.log(tagline.indexOf("developers")); // 20
```

Beginnend bei `0`, wenn Sie die Anzahl der Zeichen (einschließlich des Leerzeichens) vom Anfang des Strings zählen, befindet sich das erste Vorkommen des Teilstrings `"developers"` bei Index `20`.

```js
console.log(tagline.indexOf("x")); // -1
```

Dies gibt hingegen `-1` zurück, weil das Zeichen `x` im String nicht vorhanden ist.

Nun, da Sie wissen, wie Sie das erste Vorkommen eines Teilstrings finden, wie können Sie nachfolgende Vorkommen finden? Das können Sie tun, indem Sie als zweiten Parameter einen Wert größer als den Index des vorherigen Vorkommens angeben.

```js
const firstOccurrence = tagline.indexOf("developers");
const secondOccurrence = tagline.indexOf("developers", firstOccurrence + 1);

console.log(firstOccurrence); // 20
console.log(secondOccurrence); // 35
```

Hier sagen wir der Methode, sie solle nach dem Teilstring `"developers"` ab Index `21` (`firstOccurrence + 1`) suchen, und sie liefert den Index `35`.

## Einen Teilstring aus einem String extrahieren

Sie können einen Teilstring aus einem String mithilfe der Methode {{jsxref("String.prototype.slice()", "slice()")}} extrahieren. Sie übergeben:

- den Index, an dem die Extraktion beginnen soll
- den Index, an dem die Extraktion enden soll. Dies ist exklusiv, was bedeutet, dass das Zeichen an diesem Index nicht in den extrahierten Teilstring eingeschlossen ist.

Zum Beispiel:

```js
const browserType = "mozilla";
console.log(browserType.slice(1, 4)); // "ozi"
```

Das Zeichen bei Index `1` ist `"o"`, und das Zeichen bei Index 4 ist `"l"`. Also extrahieren wir alle Zeichen ab `"o"` und enden knapp vor `"l"`, was uns `"ozi"` ergibt.

Wenn Sie wissen, dass Sie alle verbleibenden Zeichen in einem String nach einem bestimmten Zeichen extrahieren möchten, müssen Sie den zweiten Parameter nicht angeben. Stattdessen müssen Sie nur die Zeichenposition angeben, ab der Sie die verbleibenden Zeichen in einem String extrahieren möchten. Versuchen Sie Folgendes:

```js
browserType.slice(2); // "zilla"
```

Dies gibt `"zilla"` zurück — das liegt daran, dass die Zeichenposition 2 der Buchstabe `"z"` ist, und da Sie keinen zweiten Parameter angegeben haben, war der zurückgegebene Teilstring alle verbleibenden Zeichen im String.

> [!NOTE] > `slice()` hat auch andere Optionen; studieren Sie die {{jsxref("String.prototype.slice()", "slice()")}}-Seite, um zu sehen, was Sie sonst noch herausfinden können.

## Groß-/Kleinschreibung ändern

Die String-Methoden {{jsxref("String.prototype.toLowerCase()", "toLowerCase()")}} und {{jsxref("String.prototype.toUpperCase()", "toUpperCase()")}} nehmen einen String und konvertieren alle Zeichen in Klein- bzw. Großbuchstaben. Dies kann nützlich sein, wenn Sie beispielsweise alle benutzereingaben Daten normalisieren möchten, bevor Sie sie in einer Datenbank speichern.

Versuchen wir, die folgenden Zeilen einzugeben, um zu sehen, was passiert:

```js
const radData = "My NaMe Is MuD";
console.log(radData.toLowerCase());
console.log(radData.toUpperCase());
```

## Teile eines Strings aktualisieren

Sie können einen Teilstring in einem String durch einen anderen Teilstring ersetzen, indem Sie die Methode {{jsxref("String.prototype.replace()", "replace()")}} verwenden.

In diesem Beispiel geben wir zwei Parameter an — den String, den wir ersetzen möchten, und den String, mit dem wir ihn ersetzen möchten:

```js
const browserType = "mozilla";
const updated = browserType.replace("moz", "van");

console.log(updated); // "vanilla"
console.log(browserType); // "mozilla"
```

Beachten Sie, dass `replace()`, wie viele String-Methoden, den String, auf dem es aufgerufen wurde, nicht ändert, sondern einen neuen String zurückgibt. Wenn Sie die ursprüngliche `browserType`-Variable aktualisieren möchten, müssten Sie so etwas tun:

```js
let browserType = "mozilla";
browserType = browserType.replace("moz", "van");

console.log(browserType); // "vanilla"
```

Beachten Sie auch, dass wir nun `browserType` mit `let` statt `const` deklarieren müssen, da wir es neu zuweisen.

Seien Sie sich bewusst, dass `replace()` in dieser Form nur das erste Vorkommen des Teilstrings ändert. Wenn Sie alle Vorkommen ändern möchten, können Sie {{jsxref("String.prototype.replaceAll()", "replaceAll()")}} verwenden:

```js
let quote = "To be or not to be";
quote = quote.replaceAll("be", "code");

console.log(quote); // "To code or not to code"
```

## Beispiele für aktives Lernen

In diesem Abschnitt werden wir Sie dazu bringen, etwas String-Manipulationscode zu schreiben. In jeder der unten stehenden Übungen haben wir ein Array von Strings und eine Schleife, die jeden Wert im Array verarbeitet und in einer Aufzählungsliste anzeigt. Sie müssen Arrays oder Schleifen jetzt nicht verstehen — diese werden in zukünftigen Artikeln erklärt. Alles, was Sie in jedem Fall tun müssen, ist den Code zu schreiben, der die Strings im gewünschten Format ausgibt.

Jedes Beispiel kommt mit einer "Zurücksetzen"-Schaltfläche, die Sie verwenden können, um den Code zurückzusetzen, falls Sie einen Fehler machen und ihn nicht mehr zum Laufen bringen, sowie einer "Lösung anzeigen"-Schaltfläche, die Sie drücken können, um eine mögliche Antwort zu sehen, wenn Sie wirklich nicht weiterkommen.

### Grußnachrichten filtern

In der ersten Übung beginnen wir einfach — wir haben ein Array mit Grußkartennachrichten, aber wir möchten sie sortieren, um nur die Weihnachtsnachrichten aufzulisten. Wir möchten Sie dazu bringen, einen Bedingungstest innerhalb der `if ()`-Struktur auszufüllen, um jeden String zu testen und ihn nur in der Liste anzuzeigen, wenn es sich um eine Weihnachtsnachricht handelt.

Denken Sie darüber nach, wie Sie in jedem Fall testen könnten, ob die Nachricht eine Weihnachtsnachricht ist. Welcher String ist in all diesen Nachrichten enthalten, und welche Methode könnten Sie verwenden, um zu testen, ob er enthalten ist?

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

### Groß-/Kleinschreibung korrigieren

In dieser Übung haben wir die Namen von Städten im Vereinigten Königreich, aber die Groß-/Kleinschreibung ist durcheinander. Wir möchten, dass Sie sie so ändern, dass sie alle klein geschrieben sind, außer dem ersten Buchstaben, der groß geschrieben wird. Eine gute Methode, dies zu tun, ist:

1. Den gesamten String, der in der Variablen `city` enthalten ist, in Kleinbuchstaben umwandeln und in einer neuen Variablen speichern.
2. Das erste Zeichen des Strings in dieser neuen Variablen greifen und in einer anderen Variablen speichern.
3. Mit dieser neuesten Variablen als Teilstring das erste Zeichen des Strings in Kleinbuchstaben durch das erste Zeichen des Strings in Kleinbuchstaben, das in einen Großbuchstaben umgewandelt wurde, ersetzen. Das Ergebnis dieses Ersetzungsverfahrens in einer weiteren neuen Variablen speichern.
4. Den Wert der Variablen `result` auf das Endergebnis ändern, nicht auf die `city`.

> [!NOTE]
> Ein Hinweis — die Parameter der String-Methoden müssen keine String-Literale sein; sie können auch Variablen oder sogar Variablen mit einer darauf aufgerufenen Methode sein.

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

In dieser letzten Übung enthält das Array eine Reihe von Strings mit Informationen über Bahnhöfe im Norden Englands. Die Strings sind Datenelemente, die den dreibuchstabigen Bahnhofs-Code, gefolgt von einigen maschinenlesbaren Daten, gefolgt von einem Semikolon und dem menschenlesbaren Bahnhofsnamens enthalten. Zum Beispiel:

```plain
MAN675847583748sjt567654;Manchester Piccadilly
```

Wir möchten den Bahnhofs-Code und den Namen extrahieren und sie in einem String mit folgender Struktur zusammenfügen:

```plain
MAN: Manchester Piccadilly
```

Wir empfehlen, dies folgendermaßen zu tun:

1. Den dreibuchstabigen Bahnhofs-Code extrahieren und in einer neuen Variablen speichern.
2. Die Zeichenindexnummer des Semikolons finden.
3. Den menschenlesbaren Bahnhofsnamens mithilfe der Zeichenindexnummer des Semikolons als Referenzpunkt extrahieren und in einer neuen Variablen speichern.
4. Die beiden neuen Variablen und ein String-Literal zusammenfügen, um den finalen String zu erstellen.
5. Den Wert der Variablen `result` auf den finalen String ändern, nicht auf die `station`.

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

Sie haben das Ende dieses Artikels erreicht, aber können Sie sich die wichtigsten Informationen merken? Sie können einige weitere Tests finden, um zu überprüfen, ob Sie diese Informationen behalten haben, bevor Sie weitermachen — siehe [Testen Sie Ihre Fähigkeiten: Strings](/de/docs/Learn_web_development/Core/Scripting/Test_your_skills/Strings).

## Fazit

Man kann dem nicht entkommen, dass die Fähigkeit, Wörter und Sätze in der Programmierung zu handhaben, sehr wichtig ist — insbesondere in JavaScript, da Websites sich darum drehen, mit Menschen zu kommunizieren. Dieser Artikel hat Ihnen die Grundlagen vermittelt, die Sie zum jetzigen Zeitpunkt über die Manipulation von Strings wissen müssen. Dies sollte Ihnen gut dienen, während Sie in Zukunft in komplexere Themen eintauchen. Als Nächstes betrachten wir den letzten wichtigen Datentyp, auf den wir uns kurzfristig konzentrieren müssen — Arrays.

{{PreviousMenuNext("Learn_web_development/Core/Scripting/Strings", "Learn_web_development/Core/Scripting/Arrays", "Learn_web_development/Core/Scripting")}}
