---
title: Nützliche String-Methoden
short-title: String methods
slug: Learn_web_development/Core/Scripting/Useful_string_methods
l10n:
  sourceCommit: 6c58c5d4227a031105740b0e85acbc6178223d0a
---

{{LearnSidebar}}{{PreviousMenuNext("Learn_web_development/Core/Scripting/Strings", "Learn_web_development/Core/Scripting/Arrays", "Learn_web_development/Core/Scripting")}}

Nachdem wir uns die Grundlagen von Strings angesehen haben, lassen Sie uns einen Gang höher schalten und darüber nachdenken, welche nützlichen Operationen wir mit eingebauten Methoden an Strings ausführen können, wie z.B. die Länge eines Textstrings finden, Strings zusammenführen und teilen, ein Zeichen in einem String durch ein anderes ersetzen und mehr.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>Verständnis von <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a> und den <a href="/de/docs/Learn_web_development/Core/Styling_basics">Grundlagen von CSS</a>. Kenntnisse der <a href="/de/docs/Learn_web_development/Core/Scripting/Strings">Grundlagen von Strings</a>.</td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
          Manipulation von Strings mit Hilfe von gängigen Eigenschaften und Methoden, die in JavaScript eingebaut sind.
      </td>
    </tr>
  </tbody>
</table>

## Strings als Objekte

Die meisten Werte können in JavaScript so verwendet werden, als wären sie Objekte. Wenn Sie beispielsweise einen String erstellen, indem Sie

```js
const string = "This is my string";
```

obwohl die Variable selbst kein Objekt ist, stehen ihr dennoch aufgrund der Möglichkeit, beim Zugriff auf Eigenschaften als Objekt genutzt zu werden, eine Vielzahl von Eigenschaften und Methoden zur Verfügung. Sie können dies sehen, wenn Sie zur Seite des {{jsxref("String")}} Objekts gehen und die Liste auf der Seite durchsehen!

**Bevor Ihr Gehirn schmilzt, keine Sorge!** Sie müssen die meisten dieser Informationen zu Beginn Ihrer Lernreise nicht unbedingt kennen. Aber es gibt einige Methoden, die Sie möglicherweise häufig verwenden, und die werden wir uns hier ansehen.

Lassen Sie uns einige Beispiele in die [Entwicklerkonsole des Browsers](/de/docs/Learn_web_development/Howto/Tools_and_setup/What_are_browser_developer_tools) eingeben.

## Die Länge eines Strings ermitteln

Das ist einfach — Sie verwenden die {{jsxref("String.prototype.length", "length")}} Eigenschaft. Versuchen Sie die Eingabe der folgenden Zeilen:

```js
const browserType = "mozilla";
browserType.length;
```

Dies sollte die Zahl 7 zurückgeben, da "mozilla" 7 Zeichen lang ist. Das ist aus vielen Gründen nützlich; beispielsweise könnten Sie die Längen einer Reihe von Namen ermitteln, um sie in Längenreihenfolge anzuzeigen, oder einem Benutzer mitteilen, dass ein Benutzername, den er in ein Formularfeld eingegeben hat, zu lang ist, wenn er eine bestimmte Länge überschreitet.

## Ein spezifisches Zeichen im String abrufen

In einem verwandten Punkt können Sie jedes Zeichen in einem String zurückgeben, indem Sie die **eckige Klammern Notation** verwenden — das bedeutet, dass Sie eckige Klammern (`[]`) am Ende Ihres Variablennamens hinzufügen. Innerhalb der eckigen Klammern geben Sie die Nummer des Zeichens an, das Sie zurückgeben möchten, also um beispielsweise den ersten Buchstaben abzurufen, würden Sie dies tun:

```js
browserType[0];
```

Denken Sie daran: Computer zählen ab 0, nicht ab 1!

Um das letzte Zeichen eines _beliebigen_ Strings zu erhalten, könnten wir die folgende Zeile verwenden, indem wir diese Technik mit der `length` Eigenschaft kombinieren, die wir oben betrachtet haben:

```js
browserType[browserType.length - 1];
```

Die Länge des Strings "mozilla" ist 7, aber da die Zählung bei 0 beginnt, ist die Position des letzten Zeichens 6; mit `length-1` erhalten wir das letzte Zeichen.

## Testen, ob ein String ein Substring enthält

Manchmal möchten Sie feststellen, ob ein kleinerer String in einem größeren vorhanden ist (wir sagen im Allgemeinen, _ob ein Substring in einem String_ vorhanden ist). Dies kann mit der Methode {{jsxref("String.prototype.includes()", "includes()")}} erreicht werden, die einen einzelnen {{Glossary("parameter", "Parameter")}} annimmt — den Substring, den Sie suchen möchten.

Sie gibt `true` zurück, wenn der String den Substring enthält, und `false`, wenn nicht.

```js
const browserType = "mozilla";

if (browserType.includes("zilla")) {
  console.log("Found zilla!");
} else {
  console.log("No zilla here!");
}
```

Oft möchten Sie wissen, ob ein String mit einem bestimmten Substring beginnt oder endet. Dies ist ein häufiges Anliegen, weshalb es zwei spezielle Methoden dafür gibt: {{jsxref("String.prototype.startsWith()", "startsWith()")}} und {{jsxref("String.prototype.endsWith()", "endsWith()")}}:

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

Sie können die Position eines Substrings in einem größeren String mit der Methode {{jsxref("String.prototype.indexOf()", "indexOf()")}} finden. Diese Methode nimmt zwei {{Glossary("parameter", "Parameter")}} an – den Substring, den Sie suchen möchten, und einen optionalen Parameter, der den Startpunkt der Suche angibt.

Wenn der String den Substring enthält, gibt `indexOf()` den Index des ersten Vorkommens des Substrings zurück. Wenn der String den Substring nicht enthält, gibt `indexOf()` `-1` zurück.

```js
const tagline = "MDN - Resources for developers, by developers";
console.log(tagline.indexOf("developers")); // 20
```

Beginnend bei `0`, wenn Sie die Anzahl der Zeichen (einschließlich des Leerzeichens) vom Anfang des Strings zählen, ist das erste Vorkommen des Substrings `"developers"` an der Stelle `20`.

```js
console.log(tagline.indexOf("x")); // -1
```

Dies hingegen gibt `-1` zurück, da das Zeichen `x` nicht im String vorhanden ist.

Nun, da Sie wissen, wie Sie das erste Vorkommen eines Substrings finden, wie gehen Sie vor, um nachfolgenden Vorkommen zu finden? Das können Sie tun, indem Sie einen Wert übergeben, der größer ist als der Index des vorherigen Vorkommens, als zweiten Parameter an die Methode.

```js
const firstOccurrence = tagline.indexOf("developers");
const secondOccurrence = tagline.indexOf("developers", firstOccurrence + 1);

console.log(firstOccurrence); // 20
console.log(secondOccurrence); // 35
```

Hier weisen wir die Methode an, nach dem Substring `"developers"` ab dem Index `21` (`firstOccurrence + 1`) zu suchen, und es wird der Index `35` zurückgegeben.

## Extrahieren eines Substrings aus einem String

Sie können einen Substring aus einem String mit der Methode {{jsxref("String.prototype.slice()", "slice()")}} extrahieren. Sie übergeben:

- Den Index, bei dem Sie mit dem Extrahieren beginnen
- Den Index, bei dem Sie das Extrahieren beenden. Dieser Index ist exklusiv, d.h. das Zeichen bei diesem Index wird nicht in den extrahierten Substring aufgenommen.

Zum Beispiel:

```js
const browserType = "mozilla";
console.log(browserType.slice(1, 4)); // "ozi"
```

Das Zeichen an Index `1` ist `"o"`, und das Zeichen an Index 4 ist `"l"`. So extrahieren wir alle Zeichen beginnend bei `"o"` und endend unmittelbar vor `"l"`, was uns `"ozi"` ergibt.

Wenn Sie wissen, dass Sie alle verbleibenden Zeichen in einem String nach einem bestimmten Zeichen extrahieren möchten, müssen Sie den zweiten Parameter nicht angeben. Stattdessen müssen Sie nur die Zeichenposition angeben, von der aus Sie die verbleibenden Zeichen im String extrahieren möchten. Versuchen Sie das Folgende:

```js
browserType.slice(2); // "zilla"
```

Dies gibt `"zilla"` zurück — denn die Zeichenposition 2 ist der Buchstabe `"z"`, und da Sie keinen zweiten Parameter angegeben haben, waren alle verbleibenden Zeichen im String Teil des zurückgegebenen Substrings.

> **Hinweis:** `slice()` hat auch weitere Optionen; studieren Sie die Seite {{jsxref("String.prototype.slice()", "slice()")}}, um herauszufinden, was Sie sonst noch entdecken können.

## Ändern der Groß- und Kleinschreibung

Die String-Methoden {{jsxref("String.prototype.toLowerCase()", "toLowerCase()")}} und {{jsxref("String.prototype.toUpperCase()", "toUpperCase()")}} nehmen einen String und konvertieren alle Zeichen in Klein- bzw. Großbuchstaben. Das kann nützlich sein, wenn Sie beispielsweise alle Benutzerdaten vor dem Speichern in einer Datenbank normalisieren möchten.

Versuchen Sie, die folgenden Zeilen einzugeben, um zu sehen, was passiert:

```js
const radData = "My NaMe Is MuD";
console.log(radData.toLowerCase());
console.log(radData.toUpperCase());
```

## Aktualisieren von Teilen eines Strings

Sie können einen Substring innerhalb eines Strings durch einen anderen Substring ersetzen, indem Sie die Methode {{jsxref("String.prototype.replace()", "replace()")}} verwenden.

In diesem Beispiel geben wir zwei Parameter an — den String, den wir ersetzen möchten, und den String, mit dem wir ihn ersetzen möchten:

```js
const browserType = "mozilla";
const updated = browserType.replace("moz", "van");

console.log(updated); // "vanilla"
console.log(browserType); // "mozilla"
```

Beachten Sie, dass `replace()` wie viele String-Methoden den String, auf dem sie aufgerufen wurde, nicht ändert, sondern einen neuen String zurückgibt. Wenn Sie das ursprüngliche `browserType`-Variable aktualisieren möchten, müssten Sie Folgendes tun:

```js
let browserType = "mozilla";
browserType = browserType.replace("moz", "van");

console.log(browserType); // "vanilla"
```

Beachten Sie auch, dass wir `browserType` jetzt mit `let` und nicht `const` deklarieren müssen, da wir es neu zuweisen.

Seien Sie sich bewusst, dass `replace()` in dieser Form nur das erste Vorkommen des Substrings ändert. Wenn Sie alle Vorkommen ändern möchten, können Sie {{jsxref("String.prototype.replaceAll()", "replaceAll()")}} verwenden:

```js
let quote = "To be or not to be";
quote = quote.replaceAll("be", "code");

console.log(quote); // "To code or not to code"
```

## Aktive Lernbeispiele

In diesem Abschnitt werden wir Ihnen einige Übungen anbieten, um String-Manipulationscode zu schreiben. In jeder Übung unten haben wir ein Array von Strings und eine Schleife, die jeden Wert im Array verarbeitet und in einer Liste mit Aufzählungszeichen anzeigt. Sie müssen Arrays oder Schleifen jetzt nicht verstehen — diese werden in zukünftigen Artikeln erklärt. Alles, was Sie in jedem Fall tun müssen, ist, den Code zu schreiben, der die Strings im gewünschten Format ausgibt.

Jedes Beispiel enthält einen "Zurücksetzen"-Button, den Sie verwenden können, um den Code zurückzusetzen, falls Sie einen Fehler machen und ihn nicht wiederherstellen können, und einen "Lösung anzeigen"-Button, den Sie drücken können, um eine mögliche Antwort zu sehen, wenn Sie wirklich nicht weiterkommen.

### Ausfiltern von Grußbotschaften

In der ersten Übung beginnen wir einfach — wir haben ein Array von Grußkartenbotschaften, aber wir möchten sie sortieren, um nur die Weihnachtsbotschaften aufzulisten. Wir möchten, dass Sie einen Bedingungstest innerhalb der `if ()`-Struktur ausfüllen, um jeden String zu testen und nur dann in der Liste auszugeben, wenn es sich um eine Weihnachtsbotschaft handelt.

Überlegen Sie, wie Sie testen könnten, ob die Nachricht in jedem Fall eine Weihnachtsbotschaft ist. Welcher String ist in all diesen Nachrichten vorhanden, und welche Methode könnten Sie verwenden, um zu testen, ob er vorhanden ist?

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

### Korrektur der Groß- und Kleinschreibung

In dieser Übung haben wir die Namen von Städten im Vereinigten Königreich, aber die Groß- und Kleinschreibung ist völlig durcheinander. Wir möchten, dass Sie sie so ändern, dass sie alle klein geschrieben sind, außer einem großen Anfangsbuchstaben. Eine gute Vorgehensweise dazu wäre:

1. Konvertieren Sie den gesamten String, der in der `city`-Variablen enthalten ist, in Kleinbuchstaben und speichern Sie ihn in einer neuen Variablen.
2. Holen Sie den ersten Buchstaben des Strings in dieser neuen Variablen und speichern Sie ihn in einer anderen Variablen.
3. Ersetzen Sie mit dieser letzten Variablen als Substring den ersten Buchstaben des Kleinbuchstaben-Strings durch den ersten Buchstaben des Kleinbuchstaben-Strings, der nun in Großbuchstaben ist. Speichern Sie das Ergebnis dieses Ersetzungsverfahrens in einer weiteren neuen Variablen.
4. Ändern Sie den Wert der `result`-Variablen so, dass er dem Endergebnis entspricht, nicht `city`.

> [!NOTE]
> Ein Hinweis — die Parameter der String-Methoden müssen keine String-Literale sein; sie können auch Variablen oder sogar Variablen mit einer auf ihnen aufgerufenen Methode sein.

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

In dieser letzten Übung enthält das Array eine Reihe von Strings mit Informationen über Bahnhöfe im Norden Englands. Die Strings sind Datenelemente, die den dreibuchstabigen Stationscode, gefolgt von einigen maschinenlesbaren Daten, gefolgt von einem Semikolon, gefolgt vom menschenlesbaren Stationsnamen enthalten. Zum Beispiel:

```plain
MAN675847583748sjt567654;Manchester Piccadilly
```

Wir möchten den Stationscode und den Namen extrahieren und sie in einem String mit der folgenden Struktur zusammenführen:

```plain
MAN: Manchester Piccadilly
```

Wir empfehlen es so zu tun:

1. Extrahieren Sie den dreibuchstabigen Stationscode und speichern Sie ihn in einer neuen Variablen.
2. Finden Sie die Zeichenindexnummer des Semikolons heraus.
3. Extrahieren Sie den menschenlesbaren Stationsnamen mit der Zeichenindexnummer des Semikolons als Referenzpunkt und speichern Sie ihn in einer neuen Variablen.
4. Verbinden Sie die beiden neuen Variablen und ein String-Literal, um den endgültigen String zu erzeugen.
5. Ändern Sie den Wert der `result`-Variablen auf den endgültigen String, nicht auf den `station`.

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

Sie haben das Ende dieses Artikels erreicht, aber können Sie sich an die wichtigsten Informationen erinnern? Sie können einige weitere Tests finden, um zu überprüfen, ob Sie diese Informationen behalten haben, bevor Sie weitermachen — siehe [Testen Sie Ihre Fähigkeiten: Strings](/de/docs/Learn_web_development/Core/Scripting/Test_your_skills:_Strings).

## Fazit

Sie können nicht ignorieren, dass die Fähigkeit, Wörter und Sätze in der Programmierung zu verwalten, sehr wichtig ist — besonders in JavaScript, da es bei Websites darum geht, mit Menschen zu kommunizieren. Dieser Artikel hat Ihnen die Grundlagen vermittelt, die Sie derzeit über die Manipulation von Strings wissen müssen. Diese sollten Ihnen gut dienen, wenn Sie sich intensiveren Themen in der Zukunft zuwenden. Als Nächstes werden wir den letzten wesentlichen Datentyp betrachten, auf den wir uns kurzfristig konzentrieren müssen – Arrays.

{{PreviousMenuNext("Learn_web_development/Core/Scripting/Strings", "Learn_web_development/Core/Scripting/Arrays", "Learn_web_development/Core/Scripting")}}
