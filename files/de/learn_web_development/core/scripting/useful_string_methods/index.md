---
title: Nützliche String-Methoden
short-title: String methods
slug: Learn_web_development/Core/Scripting/Useful_string_methods
l10n:
  sourceCommit: 48d220a8cffdfd5f088f8ca89724a9a92e34d8c0
---

{{PreviousMenuNext("Learn_web_development/Core/Scripting/Strings", "Learn_web_development/Core/Scripting/Arrays", "Learn_web_development/Core/Scripting")}}

Nachdem wir uns mit den Grundlagen von Strings beschäftigt haben, wollen wir nun einen Gang höher schalten und uns überlegen, welche nützlichen Operationen wir mit eingebauten Methoden auf Strings durchführen können, wie das Finden der Länge eines Text-Strings, das Verbinden und Teilen von Strings, das Ersetzen eines Zeichens in einem String durch ein anderes und mehr.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>Ein Verständnis von <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a> und den <a href="/de/docs/Learn_web_development/Core/Styling_basics">Grundlagen von CSS</a>. Kenntnisse über die <a href="/de/docs/Learn_web_development/Core/Scripting/Strings">String-Grundlagen</a>.</td>
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

obwohl die Variable selbst kein Objekt ist, hat sie dennoch eine Vielzahl von Eigenschaften und Methoden, die ihr zur Verfügung stehen, dadurch dass sie beim Zugriff auf Eigenschaften wie ein Objekt verwendbar ist. Sie können dies sehen, wenn Sie auf die Seite des {{jsxref("String")}}-Objekts gehen und die Liste an der Seite der Seite durchsehen!

**Nun, bevor Ihr Gehirn schmilzt, keine Sorge!** Sie müssen sich zu Beginn Ihrer Lernreise wirklich nicht über die meisten dieser Dinge Gedanken machen. Aber es gibt einige, die Sie möglicherweise recht häufig verwenden werden, die wir uns hier ansehen werden.

Lassen Sie uns einige Beispiele in die [Entwicklertools des Browsers](/de/docs/Learn_web_development/Howto/Tools_and_setup/What_are_browser_developer_tools) eingeben.

## Die Länge eines Strings herausfinden

Das ist einfach — Sie verwenden die Eigenschaft {{jsxref("String.prototype.length", "length")}}. Versuchen Sie, die folgenden Zeilen einzugeben:

```js
const browserType = "mozilla";
browserType.length;
```

Dies sollte die Zahl 7 zurückgeben, da "mozilla" 7 Zeichen lang ist. Dies ist aus vielen Gründen nützlich; beispielsweise möchten Sie möglicherweise die Längen einer Reihe von Namen finden, damit Sie diese in der Reihenfolge der Länge anzeigen können, oder einem Benutzer mitteilen, dass ein Benutzername, den er in ein Formularfeld eingegeben hat, zu lang ist, wenn er eine bestimmte Länge überschreitet.

## Ein bestimmtes Zeichen eines Strings abrufen

In einer verwandten Notiz können Sie mit der **eckigen Klammernotation** jedes Zeichen innerhalb eines Strings zurückgeben — das bedeutet, dass Sie am Ende Ihres Variablennamens eckige Klammern (`[]`) einfügen. In den eckigen Klammern geben Sie die Nummer des Zeichens an, das Sie zurückgeben möchten, also tun Sie dies beispielsweise, um den ersten Buchstaben abzurufen:

```js
browserType[0];
```

Denken Sie daran: Computer zählen ab 0, nicht ab 1!

Um das letzte Zeichen eines _beliebigen_ Strings abzurufen, könnten wir die folgende Zeile verwenden, in der wir diese Technik mit der oben genannten `length`-Eigenschaft kombinieren:

```js
browserType[browserType.length - 1];
```

Die Länge des Strings "mozilla" beträgt 7, aber da das Zählen bei 0 beginnt, ist die Position des letzten Zeichens 6; `length-1` bringt uns das letzte Zeichen.

## Prüfen, ob ein String eine Teilzeichenfolge enthält

Manchmal möchten Sie feststellen, ob eine kleinere Zeichenfolge in einer größeren enthalten ist (wir sagen im Allgemeinen, _ob eine Teilzeichenfolge in einem String enthalten ist_). Dies kann mit der Methode {{jsxref("String.prototype.includes()", "includes()")}} durchgeführt werden, die einen einzelnen {{Glossary("parameter", "Parameter")}} benötigt — die Teilzeichenfolge, nach der Sie suchen möchten.

Es gibt `true` zurück, wenn der String die Teilzeichenfolge enthält, und `false`, wenn nicht.

```js
const browserType = "mozilla";

if (browserType.includes("zilla")) {
  console.log("Found zilla!");
} else {
  console.log("No zilla here!");
}
```

Oft möchten Sie wissen, ob ein String mit einer bestimmten Teilzeichenfolge beginnt oder endet. Dies ist ein häufiges Bedürfnis, weshalb es zwei spezielle Methoden dafür gibt: {{jsxref("String.prototype.startsWith()", "startsWith()")}} und {{jsxref("String.prototype.endsWith()", "endsWith()")}}:

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

## Die Position einer Teilzeichenfolge in einem String finden

Sie können die Position einer Teilzeichenfolge innerhalb eines größeren Strings mithilfe der Methode {{jsxref("String.prototype.indexOf()", "indexOf()")}} ermitteln. Diese Methode benötigt zwei {{Glossary("parameter", "Parameter")}} – die Teilzeichenfolge, nach der Sie suchen möchten, und einen optionalen Parameter, der den Startpunkt der Suche angibt.

Enthält der String die Teilzeichenfolge, gibt `indexOf()` den Index des ersten Vorkommens der Teilzeichenfolge zurück. Enthält der String die Teilzeichenfolge nicht, gibt `indexOf()` `-1` zurück.

```js
const tagline = "MDN - Resources for developers, by developers";
console.log(tagline.indexOf("developers")); // 20
```

Wenn Sie ab `0` die Anzahl der Zeichen (einschließlich des Leerzeichens) vom Anfang des Strings an zählen, befindet sich das erste Vorkommen der Teilzeichenfolge `"developers"` an der Position `20`.

```js
console.log(tagline.indexOf("x")); // -1
```

Dies hingegen gibt `-1` zurück, weil das Zeichen `x` im String nicht vorhanden ist.

Nun, da Sie wissen, wie Sie das erste Vorkommen einer Teilzeichenfolge finden, wie finden Sie dann nachfolgende Vorkommen? Das können Sie tun, indem Sie einen Wert übergeben, der größer ist als der Index des vorherigen Vorkommens, als zweiten Parameter der Methode.

```js
const firstOccurrence = tagline.indexOf("developers");
const secondOccurrence = tagline.indexOf("developers", firstOccurrence + 1);

console.log(firstOccurrence); // 20
console.log(secondOccurrence); // 35
```

Hier sagen wir der Methode, dass die Suche nach der Teilzeichenfolge `"developers"` ab dem Index `21` (`firstOccurrence + 1`) beginnen soll, und diese gibt den Index `35` zurück.

## Eine Teilzeichenfolge aus einem String extrahieren

Sie können eine Teilzeichenfolge aus einem String mithilfe der Methode {{jsxref("String.prototype.slice()", "slice()")}} extrahieren. Sie übergeben ihr:

- den Index, an dem die Extraktion beginnen soll
- den Index, an dem die Extraktion aufhören soll. Dieser ist exklusiv, was bedeutet, dass das Zeichen an diesem Index nicht in die extrahierte Teilzeichenfolge eingeschlossen wird.

Zum Beispiel:

```js
const browserType = "mozilla";
console.log(browserType.slice(1, 4)); // "ozi"
```

Das Zeichen an Index `1` ist `"o"`, und das Zeichen an Index 4 ist `"l"`. Wir extrahieren also alle Zeichen beginnend bei `"o"` und endend direkt vor `"l"`, was uns `"ozi"` gibt.

Wenn Sie wissen, dass Sie alle verbleibenden Zeichen in einem String nach einem bestimmten Zeichen extrahieren möchten, müssen Sie den zweiten Parameter nicht angeben. Stattdessen müssen Sie nur die Zeichenposition angeben, von der aus Sie die verbleibenden Zeichen in einem String extrahieren möchten. Versuchen Sie Folgendes:

```js
browserType.slice(2); // "zilla"
```

Dies gibt `"zilla"` zurück — das liegt daran, dass die Zeichenposition 2 der Buchstabe `"z"` ist, und da Sie keinen zweiten Parameter angegeben haben, waren die zurückgegebenen Teilzeichenfolge alle verbleibenden Zeichen im String.

> **Hinweis:** `slice()` hat auch andere Optionen; studieren Sie die Seite {{jsxref("String.prototype.slice()", "slice()")}}, um zu sehen, was Sie sonst noch herausfinden können.

## Groß-/Kleinschreibung ändern

Die String-Methoden {{jsxref("String.prototype.toLowerCase()", "toLowerCase()")}} und {{jsxref("String.prototype.toUpperCase()", "toUpperCase()")}} nehmen einen String und konvertieren alle Zeichen bzw. in Klein- oder Großbuchstaben. Dies kann nützlich sein, wenn Sie zum Beispiel alle Benutzereingaben normalisieren möchten, bevor Sie sie in einer Datenbank speichern.

Versuchen wir, die folgenden Zeilen einzugeben, um zu sehen, was passiert:

```js
const radData = "My NaMe Is MuD";
console.log(radData.toLowerCase());
console.log(radData.toUpperCase());
```

## Teile eines Strings aktualisieren

Sie können eine Teilzeichenfolge in einem String durch eine andere Teilzeichenfolge ersetzen, indem Sie die Methode {{jsxref("String.prototype.replace()", "replace()")}} verwenden.

In diesem Beispiel übergeben wir zwei Parameter — die Zeichenfolge, die wir ersetzen möchten, und die Zeichenfolge, durch die wir sie ersetzen möchten:

```js
const browserType = "mozilla";
const updated = browserType.replace("moz", "van");

console.log(updated); // "vanilla"
console.log(browserType); // "mozilla"
```

Beachten Sie, dass `replace()`, wie viele String-Methoden, die Zeichenfolge, auf der es aufgerufen wurde, nicht ändert, sondern einen neuen String zurückgibt. Wenn Sie die ursprüngliche Variable `browserType` aktualisieren möchten, müssten Sie so etwas tun:

```js
let browserType = "mozilla";
browserType = browserType.replace("moz", "van");

console.log(browserType); // "vanilla"
```

Beachten Sie auch, dass wir `browserType` nun mit `let` und nicht mit `const` deklarieren müssen, da wir es neu zuweisen.

Seien Sie sich bewusst, dass `replace()` in dieser Form nur das erste Vorkommen der Teilzeichenfolge ändert. Wenn Sie alle Vorkommen ändern möchten, können Sie {{jsxref("String.prototype.replaceAll()", "replaceAll()")}} verwenden:

```js
let quote = "To be or not to be";
quote = quote.replaceAll("be", "code");

console.log(quote); // "To code or not to code"
```

## Aktive Lernbeispiele

In diesem Abschnitt werden wir Sie dazu bringen, einige String-Manipulations-Codes zu schreiben. In jeder der folgenden Übungen haben wir ein Array von Strings und eine Schleife, die jeden Wert im Array verarbeitet und ihn in einer Aufzählungsliste anzeigt. Sie müssen derzeit keine Arrays oder Schleifen verstehen — diese werden in zukünftigen Artikeln erklärt. Alles, was Sie in jedem Fall tun müssen, ist den Code zu schreiben, der die Strings im gewünschten Format ausgibt.

Jedes Beispiel verfügt über eine "Zurücksetzen"-Schaltfläche, die Sie verwenden können, um den Code zurückzusetzen, wenn Sie einen Fehler gemacht haben und ihn nicht mehr korrekt zum Laufen bringen können, und eine "Lösung anzeigen"-Schaltfläche, die Sie drücken können, um eine mögliche Antwort zu sehen, wenn Sie wirklich feststecken.

### Grußnachrichten filtern

In der ersten Übung fangen wir einfach an — wir haben ein Array von Grußkartennachrichten, aber wir möchten sie sortieren, um nur die Weihnachtsnachrichten aufzulisten. Wir möchten, dass Sie einen Bedingungstest innerhalb der Struktur `if ()` ausfüllen, um jeden String zu testen und ihn nur in der Liste auszugeben, wenn es sich um eine Weihnachtsnachricht handelt.

Überlegen Sie, wie Sie testen könnten, ob die Nachricht in jedem Fall eine Weihnachtsnachricht ist. Welcher String kommt in all diesen Nachrichten vor, und welche Methode könnten Sie verwenden, um zu testen, ob er vorhanden ist?

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

In dieser Übung haben wir die Namen von Städten im Vereinigten Königreich, aber die Großschreibung ist völlig durcheinander. Wir möchten, dass Sie sie so ändern, dass sie alle klein geschrieben sind, außer einem großen Anfangsbuchstaben. Eine gute Möglichkeit, dies zu tun, ist:

1. Konvertieren Sie den gesamten String, der in der Variablen `city` enthalten ist, in Kleinbuchstaben und speichern Sie ihn in einer neuen Variablen.
2. Greifen Sie auf den ersten Buchstaben des Strings in dieser neuen Variablen zu und speichern Sie ihn in einer anderen Variablen.
3. Verwenden Sie diese neueste Variable als Teilzeichenfolge, um den ersten Buchstaben des Kleinbuchstaben-Strings durch den ersten Buchstaben des Kleinbuchstaben-Strings, der in Großbuchstaben geändert wurde, zu ersetzen. Speichern Sie das Ergebnis dieses Ersetzungsverfahrens in einer weiteren neuen Variablen.
4. Ändern Sie den Wert der Variablen `result` so, dass er dem Endergebnis entspricht, nicht der `city`.

> [!NOTE]
> Ein Hinweis — die Parameter der String-Methoden müssen keine String-Literale sein; sie können auch Variablen sein oder sogar Variablen, auf denen eine Methode aufgerufen wird.

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

In dieser letzten Übung enthält das Array eine Reihe von Strings, die Informationen zu Bahnhöfen im Norden Englands enthalten. Die Strings sind Dateneinträge, die den dreistelligen Bahnhofscode, gefolgt von einigen maschinenlesbaren Daten, gefolgt von einem Semikolon und dem menschenlesbaren Stationsnamen enthalten. Zum Beispiel:

```plain
MAN675847583748sjt567654;Manchester Piccadilly
```

Wir möchten den Bahnhofscode und den Namen extrahieren und sie in einem String mit der folgenden Struktur zusammenfügen:

```plain
MAN: Manchester Piccadilly
```

Wir empfehlen, dies folgendermaßen zu tun:

1. Extrahieren Sie den dreistelligen Bahnhofscode und speichern Sie ihn in einer neuen Variablen.
2. Finden Sie die Zeichennummer des Semikolons.
3. Extrahieren Sie den menschenlesbaren Stationsnamen unter Verwendung der Zeichennummer des Semikolons als Referenzpunkt und speichern Sie ihn in einer neuen Variablen.
4. Verbinden Sie die beiden neuen Variablen und ein String-Literal, um den endgültigen String zu erstellen.
5. Ändern Sie den Wert der Variablen `result` in den endgültigen String, nicht die `station`.

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

Sie haben das Ende dieses Artikels erreicht, aber können Sie sich noch an die wichtigsten Informationen erinnern? Sie können einige weitere Tests finden, um zu überprüfen, dass Sie diese Informationen behalten haben, bevor Sie weitermachen — siehe [Test your skills: Strings](/de/docs/Learn_web_development/Core/Scripting/Test_your_skills/Strings).

## Fazit

Sie können der Tatsache nicht entgehen, dass die Fähigkeit, Wörter und Sätze in der Programmierung zu handhaben, sehr wichtig ist — insbesondere in JavaScript, da es bei Websites darum geht, mit Menschen zu kommunizieren. Dieser Artikel hat Ihnen die Grundlagen vermittelt, die Sie über das Manipulieren von Strings wissen müssen. Dies sollte Ihnen helfen, wenn Sie sich künftig mit komplexeren Themen beschäftigen. Als nächstes werden wir uns den letzten wichtigen Datentypen ansehen, auf den wir uns kurzfristig konzentrieren müssen — Arrays.

{{PreviousMenuNext("Learn_web_development/Core/Scripting/Strings", "Learn_web_development/Core/Scripting/Arrays", "Learn_web_development/Core/Scripting")}}
