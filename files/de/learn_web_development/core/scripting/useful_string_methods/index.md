---
title: Nützliche String-Methoden
short-title: String methods
slug: Learn_web_development/Core/Scripting/Useful_string_methods
l10n:
  sourceCommit: 14acf1aa7885157debdf1b6111f4bd10c064ec60
---

{{PreviousMenuNext("Learn_web_development/Core/Scripting/Strings", "Learn_web_development/Core/Scripting/Arrays", "Learn_web_development/Core/Scripting")}}

Nachdem wir uns nun die Grundlagen von Strings angesehen haben, lassen Sie uns einen Gang höher schalten und darüber nachdenken, welche nützlichen Operationen wir mit eingebauten Methoden auf Strings ausführen können, wie zum Beispiel das Finden der Länge eines Textstrings, das Verbinden und Teilen von Strings, das Ersetzen eines Zeichens in einem String durch ein anderes und mehr.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>Ein Verständnis von <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a> und den <a href="/de/docs/Learn_web_development/Core/Styling_basics">Grundlagen von CSS</a>. Kenntnisse der <a href="/de/docs/Learn_web_development/Core/Scripting/Strings">String-Grundlagen</a>.</td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
          String-Manipulation mit gängigen Eigenschaften und Methoden, die in JavaScript eingebaut sind.
      </td>
    </tr>
  </tbody>
</table>

## Strings als Objekte

Die meisten Werte können in JavaScript so verwendet werden, als wären sie Objekte. Wenn Sie zum Beispiel einen String erstellen, indem Sie

```js
const string = "This is my string";
```

verwenden, ist die Variable selbst zwar kein Objekt, sie hat jedoch aufgrund der Nutzbarkeit als Objekt beim Zugriff auf Eigenschaften eine große Anzahl von Eigenschaften und Methoden zur Verfügung. Das können Sie sehen, wenn Sie die {{jsxref("String")}} Objektseite aufrufen und die Liste an der Seite der Seite anschauen!

**Jetzt, bevor Ihr Gehirn anfängt zu schmelzen, keine Sorge!** Sie müssen wirklich nicht über die meisten von ihnen Bescheid wissen, wenn Sie gerade erst mit Ihrem Lernweg beginnen. Aber es gibt einige, die Sie möglicherweise ziemlich oft verwenden werden, und auf die werden wir hier eingehen.

Lassen Sie uns einige Beispiele in die [Entwickler-Konsole des Browsers](/de/docs/Learn_web_development/Howto/Tools_and_setup/What_are_browser_developer_tools) eingeben.

## Die Länge eines Strings ermitteln

Das ist einfach — Sie verwenden die {{jsxref("String.prototype.length", "length")}} Eigenschaft. Versuchen Sie, die folgenden Zeilen einzugeben:

```js
const browserType = "mozilla";
browserType.length;
```

Das sollte die Zahl 7 zurückgeben, da "mozilla" 7 Zeichen lang ist. Dies ist aus vielen Gründen nützlich; zum Beispiel möchten Sie vielleicht die Längen einer Reihe von Namen herausfinden, um sie der Länge nach anzuzeigen, oder einem Benutzer mitteilen, dass ein von ihm in ein Formularfeld eingegebener Benutzername zu lang ist, wenn er eine bestimmte Länge überschreitet.

## Ein bestimmtes String-Zeichen abrufen

In einem verwandten Zusammenhang können Sie mit der **eckigen Klammer-Notation** ein beliebiges Zeichen innerhalb eines Strings zurückgeben — das bedeutet, dass Sie eckige Klammern (`[]`) am Ende Ihres Variablennamens hinzufügen. Innerhalb der eckigen Klammern geben Sie die Nummer des Zeichens an, das Sie zurückgeben möchten, also zum Beispiel, um den ersten Buchstaben abzurufen, würden Sie das so machen:

```js
browserType[0];
```

Denken Sie daran: Computer zählen ab 0, nicht 1!

Um das letzte Zeichen eines _beliebigen_ Strings abzurufen, könnten wir die folgende Zeile verwenden, indem wir diese Technik mit der `length` Eigenschaft, die wir oben betrachtet habe, kombinieren:

```js
browserType[browserType.length - 1];
```

Die Länge des Strings "mozilla" ist 7, aber da das Zählen bei 0 beginnt, ist die Position des letzten Zeichens 6; mit `length-1` erhalten wir das letzte Zeichen.

## Testen, ob ein String ein Substring enthält

Manchmal möchten Sie herausfinden, ob ein kleinerer String innerhalb eines größeren enthalten ist (wir sagen generell, ob ein Substring innerhalb eines Strings vorhanden ist). Das kann mit der {{jsxref("String.prototype.includes()", "includes()")}} Methode gemacht werden, die einen einzigen {{Glossary("parameter", "Parameter")}} nimmt — den Substring, nach dem Sie suchen möchten.

Es gibt `true` zurück, wenn der String den Substring enthält, und `false` andernfalls.

```js
const browserType = "mozilla";

if (browserType.includes("zilla")) {
  console.log("Found zilla!");
} else {
  console.log("No zilla here!");
}
```

Häufig möchten Sie wissen, ob ein String mit einem bestimmten Substring beginnt oder endet. Dies ist ein häufiges Bedürfnis, weswegen es zwei spezielle Methoden dafür gibt: {{jsxref("String.prototype.startsWith()", "startsWith()")}} und {{jsxref("String.prototype.endsWith()", "endsWith()")}}:

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

## Die Position eines Substrings in einem String finden

Sie können die Position eines Substrings innerhalb eines größeren Strings mit der {{jsxref("String.prototype.indexOf()", "indexOf()")}} Methode finden. Diese Methode nimmt zwei {{Glossary("parameter", "Parameter")}} – den Substring, nach dem Sie suchen möchten, und einen optionalen Parameter, der den Startpunkt der Suche festlegt.

Wenn der String den Substring enthält, gibt `indexOf()` den Index des ersten Vorkommens des Substrings zurück. Wenn der String den Substring nicht enthält, gibt `indexOf()` `-1` zurück.

```js
const tagline = "MDN - Resources for developers, by developers";
console.log(tagline.indexOf("developers")); // 20
```

Beginnend bei `0`, wenn Sie die Anzahl der Zeichen (einschließlich des Leerzeichens) vom Anfang des Strings an zählen, ist das erste Vorkommen des Substrings `"developers"` am Index `20`.

```js
console.log(tagline.indexOf("x")); // -1
```

Dies hingegen gibt `-1` zurück, weil das Zeichen `x` im String nicht vorhanden ist.

Wenn Sie nun wissen, wie man das erste Vorkommen eines Substrings findet, wie finden Sie weitere Vorkommen? Das können Sie tun, indem Sie als zweiten Parameter der Methode einen Wert übergeben, der größer ist als der Index des vorherigen Vorkommens.

```js
const firstOccurrence = tagline.indexOf("developers");
const secondOccurrence = tagline.indexOf("developers", firstOccurrence + 1);

console.log(firstOccurrence); // 20
console.log(secondOccurrence); // 35
```

Hier sagen wir der Methode, dass sie nach dem Substring `"developers"` ab Index `21` (`firstOccurrence + 1`) suchen soll, und sie gibt den Index `35` zurück.

## Einen Substring aus einem String extrahieren

Sie können einen Substring aus einem String mit der {{jsxref("String.prototype.slice()", "slice()")}} Methode extrahieren. Sie übergeben ihr:

- den Index, an dem das Extrahieren beginnen soll
- den Index, an dem das Extrahieren enden soll. Dieser ist exklusiv, was bedeutet, dass das Zeichen an diesem Index nicht in den extrahierten Substring einbezogen wird.

Zum Beispiel:

```js
const browserType = "mozilla";
console.log(browserType.slice(1, 4)); // "ozi"
```

Das Zeichen an Index `1` ist `"o"`, und das Zeichen an Index 4 ist `"l"`. Also extrahieren wir alle Zeichen ab `"o"` und enden direkt vor `"l"`, was uns `"ozi"` gibt.

Wenn Sie wissen, dass Sie alle verbleibenden Zeichen in einem String nach einem bestimmten Zeichen extrahieren möchten, müssen Sie den zweiten Parameter nicht einfügen. Stattdessen müssen Sie nur die Zeichenposition angeben, ab der Sie die verbleibenden Zeichen in einem String extrahieren möchten. Versuchen Sie das Folgende:

```js
browserType.slice(2); // "zilla"
```

Dies gibt `"zilla"` zurück — das liegt daran, dass die Zeichenposition 2 der Buchstabe `"z"` ist, und da Sie keinen zweiten Parameter angegeben haben, wurden alle verbleibenden Zeichen im String als Substring zurückgegeben.

> **Hinweis:** `slice()` hat auch andere Optionen; studieren Sie die {{jsxref("String.prototype.slice()", "slice()")}} Seite, um zu sehen, was Sie sonst noch finden können.

## Ändern der Groß-/Kleinschreibung

Die String-Methoden {{jsxref("String.prototype.toLowerCase()", "toLowerCase()")}} und {{jsxref("String.prototype.toUpperCase()", "toUpperCase()")}} nehmen einen String und konvertieren alle Zeichen in Klein- oder Großbuchstaben, jeweils. Dies kann nützlich sein, wenn Sie beispielsweise alle benutzereingegebenen Daten normalisieren möchten, bevor Sie sie in einer Datenbank speichern.

Versuchen Sie, die folgenden Zeilen einzugeben, um zu sehen, was passiert:

```js
const radData = "My NaMe Is MuD";
console.log(radData.toLowerCase());
console.log(radData.toUpperCase());
```

## Aktualisieren von Teilen eines Strings

Sie können einen Substring innerhalb eines Strings durch einen anderen Substring mit der {{jsxref("String.prototype.replace()", "replace()")}} Methode ersetzen.

In diesem Beispiel geben wir zwei Parameter an — den String, den wir ersetzen möchten, und den String, durch den wir ihn ersetzen möchten:

```js
const browserType = "mozilla";
const updated = browserType.replace("moz", "van");

console.log(updated); // "vanilla"
console.log(browserType); // "mozilla"
```

Beachten Sie, dass `replace()`, wie viele String-Methoden, den String, auf dem es aufgerufen wurde, nicht ändert, sondern einen neuen String zurückgibt. Wenn Sie die ursprüngliche `browserType` Variable aktualisieren möchten, müssten Sie etwas wie das Folgende tun:

```js
let browserType = "mozilla";
browserType = browserType.replace("moz", "van");

console.log(browserType); // "vanilla"
```

Außerdem beachten Sie, dass wir nun `browserType` mit `let` erklären müssen und nicht mit `const`, weil wir es neu zuweisen.

Seien Sie sich bewusst, dass `replace()` in dieser Form nur das erste Vorkommen des Substrings ändert. Wenn Sie alle Vorkommen ändern möchten, können Sie {{jsxref("String.prototype.replaceAll()", "replaceAll()")}} verwenden:

```js
let quote = "To be or not to be";
quote = quote.replaceAll("be", "code");

console.log(quote); // "To code or not to code"
```

## Aktive Lernbeispiele

In diesem Abschnitt werden Sie aufgefordert, selbst etwas Code zur String-Manipulation zu schreiben. In jeder der untenstehenden Übungen haben wir ein Array von Strings und eine Schleife, die jeden Wert im Array verarbeitet und in einer Aufzählungsliste anzeigt. Sie müssen jetzt noch keine Arrays oder Schleifen verstehen — diese werden in zukünftigen Artikeln erklärt. Alles, was Sie in jedem Fall tun müssen, ist, den Code zu schreiben, der die Strings im gewünschten Format ausgibt.

Jedes Beispiel kommt mit einem "Zurücksetzen"-Button, den Sie verwenden können, um den Code zurückzusetzen, wenn Sie einen Fehler gemacht haben und ihn nicht wieder zum Laufen bringen können, und einem "Lösung anzeigen"-Button, den Sie drücken können, um eine mögliche Antwort zu sehen, wenn Sie wirklich feststecken.

### Grußnachrichten filtern

In der ersten Übung beginnen wir einfach — wir haben ein Array von Grußkarten-Nachrichten, aber wir möchten sie sortieren, um nur die Weihnachtsnachrichten aufzulisten. Wir möchten, dass Sie einen Bedingungstest innerhalb der `if ()` Struktur ausfüllen, um jeden String zu testen und ihn nur in der Liste auszugeben, wenn es sich um eine Weihnachtsnachricht handelt.

Überlegen Sie, wie Sie testen könnten, ob die Nachricht in jedem Fall eine Weihnachtsnachricht ist. Welcher String ist in all diesen Nachrichten vorhanden und welche Methode könnten Sie verwenden, um zu testen, ob er vorhanden ist?

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

### Großschreibung korrigieren

In dieser Übung haben wir die Namen von Städten im Vereinigten Königreich, aber die Großschreibung ist total durcheinander. Wir möchten, dass Sie sie so ändern, dass sie alle kleingeschrieben sind, bis auf einen Großbuchstaben am Anfang. Eine gute Methode, dies zu tun, ist:

1. Wandeln Sie den gesamten String in der `city` Variablen in Kleinbuchstaben um und speichern Sie ihn in einer neuen Variablen.
2. Nehmen Sie den ersten Buchstaben des Strings in dieser neuen Variablen und speichern Sie ihn in einer anderen Variablen.
3. Ersetzen Sie mit dieser letzten Variablen als Substring den ersten Buchstaben des Kleinbuchstaben-Strings durch den ersten Buchstaben des Kleinbuchstaben-Strings in Großbuchstaben umgewandelt. Speichern Sie das Ergebnis dieser Ersetzungsverfahren in einer weiteren neuen Variablen.
4. Ändern Sie den Wert der `result` Variablen so, dass er dem endgültigen Ergebnis entspricht, nicht der `city`.

> [!NOTE]
> Ein Hinweis — die Parameter der String-Methoden müssen keine String-Literale sein; sie können auch Variablen oder sogar Variablen mit einer darauf angewendeten Methode sein.

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

### Neue Strings aus alten Teilen machen

In dieser letzten Übung enthält das Array eine Reihe von Strings mit Informationen über Bahnhöfe im Norden Englands. Die Strings sind Datenelemente, die den dreistelligen Stationscode enthalten, gefolgt von einigen maschinenlesbaren Daten, gefolgt von einem Semikolon und dem menschenlesbaren Stationsnamen. Zum Beispiel:

```plain
MAN675847583748sjt567654;Manchester Piccadilly
```

Wir möchten den Stationscode und den Namen extrahieren und sie in einer Zeichenkette mit der folgenden Struktur zusammenfügen:

```plain
MAN: Manchester Piccadilly
```

Wir würden empfehlen, es so zu machen:

1. Extrahieren Sie den dreistelligen Stationscode und speichern Sie ihn in einer neuen Variablen.
2. Finden Sie die Zeichenindexnummer des Semikolons.
3. Extrahieren Sie den menschenlesbaren Stationsnamen mit der Zeichenindexnummer des Semikolons als Bezugspunkt und speichern Sie ihn in einer neuen Variablen.
4. Konkatenieren Sie die beiden neuen Variablen und ein String-Literal, um die endgültige Zeichenkette zu erstellen.
5. Ändern Sie den Wert der `result` Variablen so, dass er der endgültigen Zeichenkette entspricht, nicht der `station`.

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

Sie können nicht leugnen, dass die Fähigkeit, mit Wörtern und Sätzen in der Programmierung umzugehen, sehr wichtig ist — besonders in JavaScript, da es bei Websites darum geht, mit Menschen zu kommunizieren. Dieser Artikel hat Ihnen die Grundlagen vermittelt, die Sie über die Manipulation von Strings im Moment wissen müssen. Dies sollte Ihnen gut dienen, wenn Sie sich in komplexere Themen vertiefen. Als nächstes werden wir uns mit der letzten großen Art von Daten beschäftigen, auf die wir uns kurzfristig konzentrieren müssen — Arrays.

{{PreviousMenuNext("Learn_web_development/Core/Scripting/Strings", "Learn_web_development/Core/Scripting/Arrays", "Learn_web_development/Core/Scripting")}}
