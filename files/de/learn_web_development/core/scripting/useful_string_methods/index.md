---
title: Nützliche String-Methoden
short-title: String methods
slug: Learn_web_development/Core/Scripting/Useful_string_methods
l10n:
  sourceCommit: 5fad0829b5070d04993a57af8c276f5e35da3ed2
---

{{LearnSidebar}}{{PreviousMenuNext("Learn_web_development/Core/Scripting/Strings", "Learn_web_development/Core/Scripting/Arrays", "Learn_web_development/Core/Scripting")}}

Nachdem wir uns die Grundlagen von Strings angeschaut haben, lassen Sie uns einen Gang höher schalten und überlegen, welche nützlichen Operationen wir mit eingebauten Methoden auf Strings ausführen können. Zum Beispiel können wir die Länge eines Text-Strings ermitteln, Strings verbinden und trennen, ein Zeichen in einem String durch ein anderes ersetzen und mehr.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>Verständnis von <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a> und den <a href="/de/docs/Learn_web_development/Core/Styling_basics">Grundlagen von CSS</a>. Kenntnisse über die <a href="/de/docs/Learn_web_development/Core/Scripting/Strings">String-Grundlagen</a>.</td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
          String-Manipulation mit häufig verwendeten Eigenschaften und Methoden, die in JavaScript eingebaut sind.
      </td>
    </tr>
  </tbody>
</table>

## Strings als Objekte

Die meisten Werte können in JavaScript wie Objekte verwendet werden. Wenn Sie beispielsweise einen String erstellen, indem Sie

```js
const string = "This is my string";
```

verwenden, ist die Variable selbst zwar kein Objekt, verfügt jedoch über eine Vielzahl von Eigenschaften und Methoden, da sie beim Zugriff auf Eigenschaften wie ein Objekt verwendet werden kann. Sie können dies erkennen, wenn Sie die {{jsxref("String")}}-Objektseite besuchen und die Liste an der Seite ansehen!

**Machen Sie sich keine Sorgen, bevor Ihr Kopf schmilzt!** Sie müssen nicht alle diese Möglichkeiten kennen, wenn Sie anfangen zu lernen. Aber einige werden Sie möglicherweise häufig verwenden, die wir hier anschauen werden.

Lassen Sie uns einige Beispiele in die [Entwicklertools des Browsers](/de/docs/Learn_web_development/Howto/Tools_and_setup/What_are_browser_developer_tools) eingeben.

## Die Länge eines Strings ermitteln

Dies ist einfach — Sie verwenden die {{jsxref("String.prototype.length", "length")}}-Eigenschaft. Versuchen Sie, die folgenden Zeilen einzugeben:

```js
const browserType = "mozilla";
browserType.length;
```

Dies sollte die Zahl 7 zurückgeben, da "mozilla" aus 7 Zeichen besteht. Dies ist aus vielen Gründen nützlich; zum Beispiel könnten Sie die Längen einer Reihe von Namen ermitteln, um sie nach Länge anzuzeigen, oder einen Benutzer darauf hinweisen, dass ein von ihm in ein Formularfeld eingegebener Benutzername zu lang ist, wenn er eine bestimmte Länge überschreitet.

## Ein bestimmtes Zeichen in einem String abrufen

Sie können ein beliebiges Zeichen in einem String mit **Klammern-Notation** abrufen — das bedeutet, dass Sie eckige Klammern (`[]`) am Ende Ihres Variablennamens verwenden. Innerhalb der eckigen Klammern geben Sie die Nummer des Zeichens an, das Sie abrufen möchten. Um zum Beispiel den ersten Buchstaben abzurufen, tun Sie dies:

```js
browserType[0];
```

Denken Sie daran: Computer zählen ab 0, nicht 1!

Um das letzte Zeichen eines _beliebigen_ Strings abzurufen, könnten wir die folgende Zeile verwenden, indem wir diese Technik mit der oben erwähnten `length`-Eigenschaft kombinieren:

```js
browserType[browserType.length - 1];
```

Die Länge des Strings "mozilla" beträgt 7, aber da die Zählung bei 0 beginnt, befindet sich das letzte Zeichen an Position 6; `length-1` liefert uns das letzte Zeichen.

## Überprüfen, ob ein String eine Teilzeichenkette enthält

Manchmal möchten Sie feststellen, ob eine kleinere Zeichenkette in einer größeren vorhanden ist (wir sprechen allgemein davon, _ob eine Teilzeichenkette in einem String vorhanden ist_). Dies kann mit der {{jsxref("String.prototype.includes()", "includes()")}}-Methode erledigt werden, die einen einzelnen {{Glossary("parameter", "Parameter")}} — die zu suchende Teilzeichenkette — entgegennimmt.

Es gibt `true` zurück, wenn der String die Teilzeichenkette enthält, und `false` andernfalls.

```js
const browserType = "mozilla";

if (browserType.includes("zilla")) {
  console.log("Found zilla!");
} else {
  console.log("No zilla here!");
}
```

Oft möchten Sie wissen, ob ein String mit einer bestimmten Teilzeichenkette beginnt oder endet. Dies ist ein so häufiges Bedürfnis, dass es dafür zwei spezielle Methoden gibt: {{jsxref("String.prototype.startsWith()", "startsWith()")}} und {{jsxref("String.prototype.endsWith()", "endsWith()")}}:

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

## Die Position einer Teilzeichenkette in einem String finden

Sie können die Position einer Teilzeichenkette in einem größeren String mit der {{jsxref("String.prototype.indexOf()", "indexOf()")}}-Methode finden. Diese Methode nimmt zwei {{Glossary("parameter", "Parameter")}} entgegen – die Teilzeichenkette, die Sie suchen möchten, und einen optionalen Parameter, der den Startpunkt der Suche angibt.

Wenn der String die Teilzeichenkette enthält, gibt `indexOf()` den Index des ersten Vorkommens der Teilzeichenkette zurück. Wenn der String die Teilzeichenkette nicht enthält, gibt `indexOf()` `-1` zurück.

```js
const tagline = "MDN - Resources for developers, by developers";
console.log(tagline.indexOf("developers")); // 20
```

Beginnt bei `0`, wenn Sie die Anzahl der Zeichen (einschließlich der Leerzeichen) vom Anfang des Strings zählen, befindet sich das erste Vorkommen der Teilzeichenkette `"developers"` an Index `20`.

```js
console.log(tagline.indexOf("x")); // -1
```

Dies wiederum liefert `-1`, da das Zeichen `x` im String nicht vorhanden ist.

Jetzt, da Sie wissen, wie Sie das erste Vorkommen einer Teilzeichenkette finden, wie können Sie nachfolgenden Vorkommen finden? Sie können dies tun, indem Sie der Methode als zweiten Parameter einen Wert übergeben, der größer ist als der Index des vorherigen Vorkommens.

```js
const firstOccurrence = tagline.indexOf("developers");
const secondOccurrence = tagline.indexOf("developers", firstOccurrence + 1);

console.log(firstOccurrence); // 20
console.log(secondOccurrence); // 35
```

Hier teilen wir der Methode mit, dass sie die Teilzeichenkette `"developers"` ab Index `21` (`firstOccurrence + 1`) suchen soll, und sie liefert den Index `35` zurück.

## Einen Ausschnitt aus einem String extrahieren

Sie können einen Ausschnitt aus einem String mithilfe der {{jsxref("String.prototype.slice()", "slice()")}}-Methode extrahieren. Sie übergeben:

- den Index, an dem mit dem Extrahieren begonnen werden soll
- den Index, an dem das Extrahieren beendet werden soll. Dies ist exklusiv, was bedeutet, dass das Zeichen an diesem Index nicht im extrahierten String enthalten ist.

Beispiel:

```js
const browserType = "mozilla";
console.log(browserType.slice(1, 4)); // "ozi"
```

Das Zeichen an Index `1` ist `"o"` und das Zeichen an Index 4 ist `"l"`. So extrahieren wir alle Zeichen, beginnend mit `"o"` und endend direkt vor `"l"`, was uns `"ozi"` ergibt.

Wenn Sie wissen, dass Sie alle verbleibenden Zeichen in einem String nach einem bestimmten Zeichen extrahieren möchten, müssen Sie den zweiten Parameter nicht angeben. Stattdessen müssen Sie nur die Zeichenposition angeben, ab der Sie die verbleibenden Zeichen im String extrahieren möchten. Probieren Sie Folgendes aus:

```js
browserType.slice(2); // "zilla"
```

Dies liefert `"zilla"` — der Grund dafür ist, dass die Zeichenposition 2 der Buchstabe `"z"` ist. Da Sie keinen zweiten Parameter angegeben haben, wurde die Teilzeichenkette, die zurückgegeben wurde, aus allen verbleibenden Zeichen im String gebildet.

> **Note:** `slice()` hat auch andere Optionen; studieren Sie die {{jsxref("String.prototype.slice()", "slice()")}}-Seite, um herauszufinden, was Sie noch erfahren können.

## Groß- und Kleinschreibung ändern

Die String-Methoden {{jsxref("String.prototype.toLowerCase()", "toLowerCase()")}} und {{jsxref("String.prototype.toUpperCase()", "toUpperCase()")}} nehmen einen String und konvertieren alle Zeichen in Klein- bzw. Großbuchstaben. Dies kann nützlich sein, wenn Sie beispielsweise alle vom Benutzer eingegebenen Daten vor dem Speichern in einer Datenbank normalisieren möchten.

Versuchen wir, die folgenden Zeilen einzugeben, um zu sehen, was passiert:

```js
const radData = "My NaMe Is MuD";
console.log(radData.toLowerCase());
console.log(radData.toUpperCase());
```

## Teile eines Strings aktualisieren

Sie können eine Teilzeichenkette in einem String durch eine andere Teilzeichenkette mit der {{jsxref("String.prototype.replace()", "replace()")}}-Methode ersetzen.

In diesem Beispiel geben wir zwei Parameter an — den String, den wir ersetzen möchten, und den String, durch den wir ihn ersetzen möchten:

```js
const browserType = "mozilla";
const updated = browserType.replace("moz", "van");

console.log(updated); // "vanilla"
console.log(browserType); // "mozilla"
```

Beachten Sie, dass `replace()`, wie viele String-Methoden, den String, mit dem es aufgerufen wurde, nicht ändert, sondern einen neuen String zurückgibt. Wenn Sie die ursprüngliche Variable `browserType` aktualisieren möchten, müssten Sie Folgendes tun:

```js
let browserType = "mozilla";
browserType = browserType.replace("moz", "van");

console.log(browserType); // "vanilla"
```

Außerdem beachten Sie, dass wir jetzt `browserType` mit `let` und nicht mit `const` deklarieren müssen, da wir es neu zuweisen.

Seien Sie sich bewusst, dass `replace()` in dieser Form nur das erste Vorkommen der Teilzeichenkette ändert. Wenn Sie alle Vorkommen ändern möchten, können Sie {{jsxref("String.prototype.replaceAll()", "replaceAll()")}} verwenden:

```js
let quote = "To be or not to be";
quote = quote.replaceAll("be", "code");

console.log(quote); // "To code or not to code"
```

## Aktive Lernbeispiele

In diesem Abschnitt geben wir Ihnen die Möglichkeit, selbst String-Manipulationscode zu schreiben. In jeder der folgenden Übungen haben wir ein Array von Strings und eine Schleife, die jeden Wert im Array verarbeitet und ihn in einer Aufzählungsliste anzeigt. Sie müssen jetzt weder Arrays noch Schleifen verstehen — diese werden in zukünftigen Artikeln erklärt. Alles, was Sie in jedem Fall tun müssen, ist den Code zu schreiben, der die Strings im gewünschten Format ausgibt.

Jedes Beispiel enthält einen "Zurücksetzen"-Button, den Sie verwenden können, um den Code zurückzusetzen, wenn Sie einen Fehler machen und ihn nicht wieder zum Laufen bringen können, und einen "Lösung anzeigen"-Button, den Sie drücken können, wenn Sie wirklich stecken bleiben.

### Grußnachrichten filtern

In der ersten Übung beginnen wir einfach: Wir haben ein Array von Grußkartennachrichten, aber wir möchten sie sortieren, um nur die Weihnachtsnachrichten aufzulisten. Wir möchten, dass Sie einen Bedingungstest im Inneren der `if ()`-Struktur ausfüllen, um jeden String zu testen und nur dann in die Liste aufzunehmen, wenn es sich um eine Weihnachtsnachricht handelt.

Überlegen Sie, wie Sie testen könnten, ob die Nachricht in jedem Fall eine Weihnachtsnachricht ist. Welcher String ist in all diesen Nachrichten vorhanden, und welche Methode könnten Sie verwenden, um zu testen, ob er vorhanden ist?

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

### Groß- und Kleinschreibung korrigieren

In dieser Übung haben wir die Namen von Städten im Vereinigten Königreich, aber die Groß- und Kleinschreibung ist völlig durcheinander geraten. Wir möchten, dass Sie sie ändern, sodass sie alle kleingeschrieben sind, außer dem ersten Buchstaben, der groß geschrieben sein soll. Eine gute Methode, dies zu tun, ist:

1. Konvertieren Sie den gesamten String, der in der Variable `city` enthalten ist, in Kleinbuchstaben und speichern Sie ihn in einer neuen Variable.
2. Erfassen Sie den ersten Buchstaben des Strings in dieser neuen Variablen und speichern Sie ihn in einer weiteren Variablen.
3. Verwenden Sie diese neueste Variable als Teilzeichenkette, um den ersten Buchstaben des kleingeschriebenen Strings durch den großgeschriebenen ersten Buchstaben des kleingeschriebenen Strings zu ersetzen. Speichern Sie das Ergebnis dieser Ersetzung in einer weiteren neuen Variablen.
4. Ändern Sie den Wert der `result`-Variable so, dass er dem Endergebnis entspricht, nicht der `city`.

> [!NOTE]
> Ein Hinweis — die Parameter der String-Methoden müssen keine String-Literale sein; sie können auch Variablen sein oder sogar Variablen, an die eine Methode aufgerufen wird.

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

In dieser letzten Übung enthält das Array eine Reihe von Strings, die Informationen über Bahnhöfe im Norden Englands enthalten. Die Strings sind Datenitems, die den dreibuchstabigen Bahnhofscode, gefolgt von einigen maschinenlesbaren Daten, gefolgt von einem Semikolon und dem menschenlesbaren Bahnhofsname enthalten. Zum Beispiel:

```plain
MAN675847583748sjt567654;Manchester Piccadilly
```

Wir wollen den Bahnhofscode und den Namen extrahieren und sie in einem String mit der folgenden Struktur zusammenfügen:

```plain
MAN: Manchester Piccadilly
```

Wir empfehlen, es folgendermaßen zu machen:

1. Extrahieren Sie den dreibuchstabigen Bahnhofscode und speichern Sie ihn in einer neuen Variablen.
2. Finden Sie die Zeichenindexnummer des Semikolons.
3. Extrahieren Sie den menschenlesbaren Bahnhofsname mithilfe der Semikolon-Zeichenindexnummer als Bezugspunkt und speichern Sie ihn in einer neuen Variablen.
4. Verketten Sie die beiden neuen Variablen und ein String-Literal, um den endgültigen String zu erstellen.
5. Ändern Sie den Wert der `result`-Variable in den endgültigen String, nicht den `station`.

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

Sie haben das Ende dieses Artikels erreicht, aber können Sie sich die wichtigsten Informationen merken? Sie können einige weitere Tests finden, um zu überprüfen, dass Sie diese Informationen behalten haben, bevor Sie fortfahren — siehe [Testen Sie Ihre Fähigkeiten: Strings](/de/docs/Learn_web_development/Core/Scripting/Test_your_skills/Strings).

## Fazit

Es lässt sich nicht leugnen, dass es sehr wichtig ist, in der Programmierung mit Wörtern und Sätzen umgehen zu können — insbesondere in JavaScript, da es bei Websites darum geht, mit Menschen zu kommunizieren. Dieser Artikel hat Ihnen die Grundlagen vermittelt, die Sie zur Manipulation von Strings benötigen. Dies sollte Ihnen nützlich sein, wenn Sie sich mit komplexeren Themen in der Zukunft beschäftigen. Als nächstes werden wir uns den letzten großen Datentyp ansehen, auf den wir uns kurzfristig konzentrieren müssen — Arrays.

{{PreviousMenuNext("Learn_web_development/Core/Scripting/Strings", "Learn_web_development/Core/Scripting/Arrays", "Learn_web_development/Core/Scripting")}}
