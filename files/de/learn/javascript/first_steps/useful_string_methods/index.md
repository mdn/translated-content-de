---
title: Nützliche String-Methoden
slug: Learn/JavaScript/First_steps/Useful_string_methods
l10n:
  sourceCommit: bc0d0d1ef796435e969f6d65c7e5d3c08f4023aa
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/JavaScript/First_steps/Strings", "Learn/JavaScript/First_steps/Arrays", "Learn/JavaScript/First_steps")}}

Nun, da wir uns die Grundlagen von Strings angesehen haben, lassen Sie uns einen Gang höher schalten und darüber nachdenken, welche nützlichen Operationen wir mit eingebauten Methoden an Strings durchführen können, wie z. B. die Länge eines Textstrings zu finden, Strings zu verbinden und zu trennen, ein Zeichen in einem String durch ein anderes zu ersetzen und mehr.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Ein grundlegendes Verständnis von HTML und CSS, ein
        Verständnis davon, was JavaScript ist.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Zu verstehen, dass Strings Objekte sind, und zu lernen, wie man einige der
        grundlegenden Methoden verwendet, die auf diesen Objekten verfügbar sind, um Strings zu manipulieren.
      </td>
    </tr>
  </tbody>
</table>

## Strings als Objekte

Die meisten Werte können in JavaScript so verwendet werden, als wären sie Objekte. Wenn Sie einen String erstellen, zum Beispiel durch

```js
const string = "This is my string";
```

obwohl die Variable selbst kein Objekt ist, stehen ihr dennoch viele Eigenschaften und Methoden zur Verfügung, indem sie beim Zugriff auf Eigenschaften als Objekt verwendet werden kann. Sie können dies sehen, wenn Sie zur {{jsxref("String")}} Objektseite gehen und die Liste an der Seite der Seite ansehen!

**Bevor Ihr Gehirn zu schmelzen beginnt, machen Sie sich keine Sorgen!** Sie müssen diese nicht alle zu Beginn Ihrer Lernreise kennen. Aber es gibt einige, die Sie möglicherweise recht häufig verwenden, auf die wir hier einen Blick werfen werden.

Lassen Sie uns einige Beispiele in der [Entwicklerkonsole des Browsers](/de/docs/Learn/Common_questions/Tools_and_setup/What_are_browser_developer_tools) eingeben.

## Die Länge eines Strings finden

Das ist einfach — Sie verwenden die {{jsxref("String.prototype.length", "length")}} Eigenschaft. Versuchen Sie, die folgenden Zeilen einzugeben:

```js
const browserType = "mozilla";
browserType.length;
```

Dies sollte die Zahl 7 zurückgeben, da „mozilla“ 7 Zeichen lang ist. Dies ist aus vielen Gründen nützlich; zum Beispiel könnten Sie die Längen einer Reihe von Namen finden wollen, um sie nach Länge geordnet anzuzeigen, oder einem Benutzer mitteilen, dass ein von ihm in ein Formularfeld eingegebener Benutzername zu lang ist, wenn er eine bestimmte Länge überschreitet.

## Einen bestimmten String-Charakter abrufen

In ähnlicher Weise können Sie jedes Zeichen innerhalb eines Strings zurückgeben, indem Sie die **eckige Klammernotation** verwenden — das bedeutet, dass Sie eckige Klammern (`[]`) am Ende Ihres Variablennamens einschließen. In den eckigen Klammern geben Sie die Nummer des Zeichens an, das Sie zurückgeben möchten. Um beispielsweise den ersten Buchstaben abzurufen, würden Sie dies tun:

```js
browserType[0];
```

Denken Sie daran: Computer zählen ab 0, nicht ab 1!

Um das letzte Zeichen _jedes_ Strings abzurufen, könnten wir die folgende Zeile verwenden, die diese Technik mit der `length`-Eigenschaft kombiniert, die wir oben betrachtet haben:

```js
browserType[browserType.length - 1];
```

Die Länge des Strings „mozilla“ ist 7, aber da das Zählen bei 0 beginnt, ist die Position des letzten Zeichens 6; durch Verwendung von `length-1` erhalten wir das letzte Zeichen.

## Zu überprüfen, ob ein String einen Substring enthält

Manchmal möchten Sie feststellen, ob ein kleinerer String in einem größeren vorhanden ist (wir sagen allgemein, _ob ein Substring in einem String vorhanden ist_). Dies kann mit der {{jsxref("String.prototype.includes()", "includes()")}} Methode geschehen, die einen einzigen [Parameter](/de/docs/Glossary/parameter) erfordert — den Substring, nach dem Sie suchen möchten.

Es gibt `true` zurück, wenn der String den Substring enthält, und `false`, wenn nicht.

```js
const browserType = "mozilla";

if (browserType.includes("zilla")) {
  console.log("Found zilla!");
} else {
  console.log("No zilla here!");
}
```

Oft möchten Sie wissen, ob ein String mit einem bestimmten Substring beginnt oder endet. Dies ist ein häufig genuges Bedürfnis, dass es dafür zwei spezielle Methoden gibt: {{jsxref("String.prototype.startsWith()", "startsWith()")}} und {{jsxref("String.prototype.endsWith()", "endsWith()")}}:

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

Sie können die Position eines Substrings innerhalb eines größeren Strings mit der {{jsxref("String.prototype.indexOf()", "indexOf()")}} Methode finden. Diese Methode nimmt zwei [Parameter](/de/docs/Glossary/parameter) entgegen – den Substring, nach dem Sie suchen möchten, und einen optionalen Parameter, der den Startpunkt der Suche angibt.

Wenn der String den Substring enthält, gibt `indexOf()` den Index des ersten Vorkommens des Substrings zurück. Wenn der String den Substring nicht enthält, gibt `indexOf()` `-1` zurück.

```js
const tagline = "MDN - Resources for developers, by developers";
console.log(tagline.indexOf("developers")); // 20
```

Beginnend bei `0`, wenn Sie die Anzahl der Zeichen (einschließlich des Leerzeichens) vom Anfang des Strings zählen, ist das erste Vorkommen des Substrings `"developers"` bei Index `20`.

```js
console.log(tagline.indexOf("x")); // -1
```

Dies hingegen gibt `-1` zurück, da das Zeichen `x` nicht im String vorhanden ist.

Nun, da Sie wissen, wie Sie das erste Vorkommen eines Substrings finden, wie gehen Sie vor, um nachfolgenden Vorkommen zu finden? Das können Sie tun, indem Sie einen Wert, der größer als der Index des vorherigen Vorkommens ist, als zweiten Parameter zur Methode übergeben.

```js
const firstOccurrence = tagline.indexOf("developers");
const secondOccurrence = tagline.indexOf("developers", firstOccurrence + 1);

console.log(firstOccurrence); // 20
console.log(secondOccurrence); // 35
```

Hier sagen wir der Methode, dass sie nach dem Substring `"developers"` ab Index `21` (`firstOccurrence + 1`) suchen soll, und sie gibt den Index `35` zurück.

## Einen Substring aus einem String extrahieren

Sie können einen Substring aus einem String mit der {{jsxref("String.prototype.slice()", "slice()")}} Methode extrahieren. Sie übergeben:

- den Index, ab dem das Extrahieren beginnen soll
- den Index, an dem das Extrahieren gestoppt werden soll. Dies ist exklusiv, was bedeutet, dass das Zeichen an diesem Index nicht im extrahierten Substring enthalten ist.

Zum Beispiel:

```js
const browserType = "mozilla";
console.log(browserType.slice(1, 4)); // "ozi"
```

Das Zeichen an Index `1` ist `"o"`, und das Zeichen an Index 4 ist `"l"`. Also extrahieren wir alle Zeichen beginnend bei `"o"` und endend kurz vor `"l"`, was uns `"ozi"` ergibt.

Wenn Sie wissen, dass Sie alle verbleibenden Zeichen in einem String nach einem bestimmten Zeichen extrahieren möchten, müssen Sie den zweiten Parameter nicht einschließen. Stattdessen müssen Sie nur die Zeichenposition angeben, ab der Sie die verbleibenden Zeichen in einem String extrahieren möchten. Versuchen Sie Folgendes:

```js
browserType.slice(2); // "zilla"
```

Dies gibt `"zilla"` zurück — dies liegt daran, dass die Zeichenposition von 2 der Buchstabe `"z"` ist und weil Sie keinen zweiten Parameter angegeben haben, war der zurückgegebene Substring alle verbleibenden Zeichen im String.

> **Note:** `slice()` hat auch andere Optionen; studieren Sie die {{jsxref("String.prototype.slice()", "slice()")}} Seite, um zu sehen, was Sie sonst noch herausfinden können.

## Groß- und Kleinschreibung ändern

Die String-Methoden {{jsxref("String.prototype.toLowerCase()", "toLowerCase()")}} und {{jsxref("String.prototype.toUpperCase()", "toUpperCase()")}} nehmen einen String und konvertieren alle Zeichen in Klein- oder Großbuchstaben, jeweils. Dies kann nützlich sein, wenn Sie beispielsweise alle Benutzereingaben normalisieren möchten, bevor Sie sie in einer Datenbank speichern.

Versuchen wir die folgenden Zeilen einzugeben, um zu sehen, was passiert:

```js
const radData = "My NaMe Is MuD";
console.log(radData.toLowerCase());
console.log(radData.toUpperCase());
```

## Teile eines Strings aktualisieren

Sie können einen Substring innerhalb eines Strings mit einem anderen Substring mithilfe der {{jsxref("String.prototype.replace()", "replace()")}} Methode ersetzen.

In diesem Beispiel geben wir zwei Parameter an — den String, den wir ersetzen möchten, und den String, mit dem wir ihn ersetzen möchten:

```js
const browserType = "mozilla";
const updated = browserType.replace("moz", "van");

console.log(updated); // "vanilla"
console.log(browserType); // "mozilla"
```

Beachten Sie, dass `replace()`, wie viele String-Methoden, den aufgerufenen String nicht ändert, sondern einen neuen String zurückgibt. Wenn Sie die ursprüngliche `browserType`-Variable aktualisieren möchten, müssten Sie etwas in der Art tun:

```js
let browserType = "mozilla";
browserType = browserType.replace("moz", "van");

console.log(browserType); // "vanilla"
```

Beachten Sie auch, dass wir nun `browserType` mit `let` und nicht mit `const` deklarieren müssen, da wir es neu zuweisen.

Seien Sie sich bewusst, dass `replace()` in dieser Form nur das erste Vorkommen des Substrings ändert. Wenn Sie alle Vorkommen ändern möchten, können Sie {{jsxref("String.prototype.replaceAll()", "replaceAll()")}} verwenden:

```js
let quote = "To be or not to be";
quote = quote.replaceAll("be", "code");

console.log(quote); // "To code or not to code"
```

## Aktive Lernbeispiele

In diesem Abschnitt laden wir Sie ein, etwas String-Manipulationscode selbst zu schreiben. In jeder untenstehenden Übung haben wir ein Array von Strings und eine Schleife, die jeden Wert im Array verarbeitet und ihn in einer Aufzählungsliste anzeigt. Sie müssen jetzt noch keine Arrays oder Schleifen verstehen — diese werden in zukünftigen Artikeln erklärt. Alles, was Sie in jedem Fall tun müssen, ist, den Code zu schreiben, der die Strings im gewünschten Format ausgibt.

Jedes Beispiel enthält eine "Zurücksetzen"-Schaltfläche, die Sie verwenden können, um den Code zurückzusetzen, falls Sie einen Fehler machen und ihn nicht mehr zum Laufen bringen können, und eine "Lösung anzeigen"-Schaltfläche, die Sie drücken können, um eine mögliche Antwort zu sehen, falls Sie wirklich stecken bleiben.

### Grußnachrichten filtern

In der ersten Übung beginnen wir einfach — wir haben ein Array mit Grußkartennachrichten, aber wir möchten sie sortieren, um nur die Weihnachtsnachrichten aufzulisten. Wir möchten, dass Sie einen bedingten Test innerhalb der `if ()` Struktur ausfüllen, um jeden String zu testen und ihn nur in der Liste zu drucken, wenn es sich um eine Weihnachtsnachricht handelt.

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

In dieser Übung haben wir die Namen von Städten im Vereinigten Königreich, aber die Großschreibung ist völlig durcheinander. Wir möchten, dass Sie sie so ändern, dass sie alle klein geschrieben sind, außer einem Großbuchstaben am Anfang. Ein guter Weg, dies zu tun, ist:

1. Den gesamten in der `city`-Variable enthaltenen String in Kleinbuchstaben konvertieren und in einer neuen Variablen speichern.
2. Den ersten Buchstaben des Strings in dieser neuen Variablen erfassen und in einer weiteren Variablen speichern.
3. Diese neueste Variable als Substring verwenden, um den ersten Buchstaben des Kleinbuchstaben-Strings durch den in Großbuchstaben geänderten ersten Buchstaben des Kleinbuchstaben-Strings zu ersetzen. Speichern Sie das Ergebnis dieses Ersetzungsverfahrens in einer anderen neuen Variablen.
4. Ändern Sie den Wert der `result`-Variable, damit er dem Endergebnis, nicht der `city`, entspricht.

> [!NOTE]
> Ein Tipp — die Parameter der String-Methoden müssen keine String-Literale sein; sie können auch Variablen sein oder sogar Variablen, auf die eine Methode aufgerufen wird.

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

In dieser letzten Übung enthält das Array eine Reihe von Strings mit Informationen über Bahnhöfe im Norden Englands. Die Strings sind Dateneinträge, die den dreibuchstabigen Stationscode, gefolgt von einigen maschinenlesbaren Daten, gefolgt von einem Semikolon, gefolgt von dem menschenlesbaren Stationsnamen enthalten. Zum Beispiel:

```plain
MAN675847583748sjt567654;Manchester Piccadilly
```

Wir möchten den Stationscode und den Namen extrahieren und sie in einem String mit folgender Struktur zusammenfügen:

```plain
MAN: Manchester Piccadilly
```

Wir empfehlen, es so zu machen:

1. Den dreibuchstabigen Stationscode extrahieren und in einer neuen Variablen speichern.
2. Die Zeichensuchnummer des Semikolons finden.
3. Den menschenlesbaren Stationsnamen extrahieren und unter Verwendung der Zeichensuchnummer des Semikolons als Referenzpunkt in einer neuen Variablen speichern.
4. Die beiden neuen Variablen und einen String-Literal verketten, um den endgültigen String zu erstellen.
5. Den Wert der `result`-Variable in den endgültigen String, nicht in die `station`, ändern.

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

Sie haben das Ende dieses Artikels erreicht, aber können Sie sich die wichtigsten Informationen merken? Sie können einige weitere Tests finden, um zu überprüfen, ob Sie diese Informationen behalten haben, bevor Sie weitermachen — siehe [Testen Sie Ihre Fähigkeiten: Strings](/de/docs/Learn/JavaScript/First_steps/Test_your_skills:_Strings).

## Fazit

Es lässt sich nicht leugnen, dass es sehr wichtig ist, Wörter und Sätze im Programmieren handhaben zu können — besonders in JavaScript, da Websites sich darum drehen, mit Menschen zu kommunizieren. Dieser Artikel hat Ihnen die Grundlagen vermittelt, die Sie jetzt über die Manipulation von Strings wissen müssen. Dies sollte Ihnen gute Dienste leisten, wenn Sie in Zukunft komplexere Themen angehen. Als nächstes werden wir uns mit dem letzten wichtigen Datentyp befassen, auf den wir uns kurzfristig konzentrieren müssen — Arrays.

{{PreviousMenuNext("Learn/JavaScript/First_steps/Strings", "Learn/JavaScript/First_steps/Arrays", "Learn/JavaScript/First_steps")}}
