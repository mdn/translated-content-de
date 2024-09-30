---
title: Nützliche String-Methoden
slug: Learn/JavaScript/First_steps/Useful_string_methods
l10n:
  sourceCommit: bc0d0d1ef796435e969f6d65c7e5d3c08f4023aa
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/JavaScript/First_steps/Strings", "Learn/JavaScript/First_steps/Arrays", "Learn/JavaScript/First_steps")}}

Nachdem wir uns die grundlegenden Konzepte von Strings angesehen haben, möchten wir jetzt einen Gang höher schalten und darüber nachdenken, welche nützlichen Operationen wir mit integrierten Methoden auf Strings ausführen können, wie zum Beispiel das Ermitteln der Länge eines Textstrings, das Verbinden und Aufteilen von Strings, das Ersetzen eines Zeichens in einem String durch ein anderes, und mehr.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Ein grundlegendes Verständnis von HTML und CSS, sowie ein
        Verständnis dafür, was JavaScript ist.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Zu verstehen, dass Strings Objekte sind, und lernen, wie man einige der
        grundlegenden Methoden dieser Objekte nutzt, um Strings zu manipulieren.
      </td>
    </tr>
  </tbody>
</table>

## Strings als Objekte

Die meisten Werte können in JavaScript so verwendet werden, als ob sie Objekte wären. Wenn Sie zum Beispiel einen String erstellen, indem Sie

```js
const string = "This is my string";
```

verwenden, hat die Variable selbst zwar kein Objekt, aber dennoch stehen ihr viele Eigenschaften und Methoden zur Verfügung, da sie als Objekt verwendet werden kann, wenn man auf ihre Eigenschaften zugreift. Das können Sie sehen, wenn Sie sich die Seite des {{jsxref("String")}} Objekts ansehen und die Liste an der Seite der Seite durchblättern!

**Keine Sorge, bevor Ihr Gehirn anfängt zu schmelzen!** Sie müssen zu Beginn Ihrer Lernreise nicht über die meisten dieser Dinge Bescheid wissen. Aber es gibt ein paar, die Sie wahrscheinlich ziemlich oft verwenden werden, und die schauen wir uns hier an.

Lassen Sie uns einige Beispiele in die [Entwicklerkonsole des Browsers](/de/docs/Learn/Common_questions/Tools_and_setup/What_are_browser_developer_tools) eingeben.

## Ermitteln der Länge eines Strings

Das ist einfach — Sie verwenden die {{jsxref("String.prototype.length", "length")}} Eigenschaft. Versuchen Sie, die folgenden Zeilen einzugeben:

```js
const browserType = "mozilla";
browserType.length;
```

Dies sollte die Zahl 7 zurückgeben, da "mozilla" 7 Zeichen lang ist. Dies kann aus vielen Gründen nützlich sein; zum Beispiel könnten Sie die Längen einer Reihe von Namen herausfinden wollen, um sie der Länge nach anzuzeigen oder dem Benutzer mitzuteilen, dass ein von ihm in ein Formularfeld eingegebener Benutzername zu lang ist, wenn er eine bestimmte Länge überschreitet.

## Abrufen eines bestimmten String-Zeichens

In ähnlicher Weise können Sie jedes Zeichen innerhalb eines Strings durch Verwendung der **eckigen Klammern Notation** zurückgeben — das bedeutet, Sie fügen eckige Klammern (`[]`) an das Ende Ihres Variablennamens hinzu. In den eckigen Klammern geben Sie die Nummer des Zeichens an, das Sie zurückgeben möchten, wenn Sie zum Beispiel den ersten Buchstaben abrufen möchten, würden Sie dies so tun:

```js
browserType[0];
```

Denken Sie daran: Computer zählen ab 0, nicht ab 1!

Um das letzte Zeichen eines _beliebigen_ Strings abzurufen, könnten wir die folgende Zeile verwenden, indem wir diese Technik mit der `length` Eigenschaft kombinieren, die wir oben betrachtet haben:

```js
browserType[browserType.length - 1];
```

Die Länge des Strings "mozilla" beträgt 7, aber da das Zählen bei 0 beginnt, befindet sich das letzte Zeichen an der Position 6; mit `length-1` erhalten wir das letzte Zeichen.

## Testen, ob ein String eine Teilzeichenfolge enthält

Manchmal möchten Sie herausfinden, ob eine kleinere Zeichenkette in einer größeren vorhanden ist (wir sagen allgemein, ob eine Teilzeichenfolge in einem String vorhanden ist). Dies kann mit der Methode {{jsxref("String.prototype.includes()", "includes()")}} erreicht werden, die nur einen [Parameter](/de/docs/Glossary/parameter) annimmt — die Teilzeichenfolge, nach der Sie suchen möchten.

Sie gibt `true` zurück, wenn der String die Teilzeichenfolge enthält, und `false` andernfalls.

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

## Finden der Position einer Teilzeichenfolge in einem String

Sie können die Position einer Teilzeichenfolge in einem größeren String mit der Methode {{jsxref("String.prototype.indexOf()", "indexOf()")}} finden. Diese Methode nimmt zwei [Parameter](/de/docs/Glossary/parameter) an – die Teilzeichenfolge, nach der gesucht werden soll, und einen optionalen Parameter, der den Ausgangspunkt der Suche angibt.

Wenn die Zeichenfolge die Teilzeichenfolge enthält, gibt `indexOf()` den Index des ersten Vorkommens der Teilzeichenfolge zurück. Wenn die Zeichenfolge die Teilzeichenfolge nicht enthält, gibt `indexOf()` `-1` zurück.

```js
const tagline = "MDN - Resources for developers, by developers";
console.log(tagline.indexOf("developers")); // 20
```

Beginnend bei `0`, wenn Sie die Anzahl der Zeichen (einschließlich der Leerzeichen) vom Anfang der Zeichenfolge an zählen, befindet sich das erste Vorkommen der Teilzeichenfolge `"developers"` bei Index `20`.

```js
console.log(tagline.indexOf("x")); // -1
```

Dies hingegen gibt `-1` zurück, da das Zeichen `x` in der Zeichenfolge nicht vorhanden ist.

Nun, da Sie wissen, wie Sie das erste Vorkommen einer Teilzeichenfolge finden, wie finden Sie nachfolgende Vorkommen? Das können Sie tun, indem Sie der Methode als zweiten Parameter einen Wert übergeben, der größer ist als der Index des vorherigen Vorkommens.

```js
const firstOccurrence = tagline.indexOf("developers");
const secondOccurrence = tagline.indexOf("developers", firstOccurrence + 1);

console.log(firstOccurrence); // 20
console.log(secondOccurrence); // 35
```

Hier sagen wir der Methode, dass sie nach der Teilzeichenfolge `"developers"` ab Index `21` (`firstOccurrence + 1`) suchen soll, und sie gibt den Index `35` zurück.

## Extrahieren einer Teilzeichenfolge aus einem String

Sie können eine Teilzeichenfolge aus einem String extrahieren, indem Sie die Methode {{jsxref("String.prototype.slice()", "slice()")}} verwenden. Sie übergeben ihr:

- den Index, bei dem das Extrahieren beginnen soll
- den Index, bei dem das Extrahieren aufhören soll. Dies ist exklusiv, was bedeutet, dass das Zeichen an diesem Index nicht in der extrahierten Teilzeichenfolge enthalten ist.

Zum Beispiel:

```js
const browserType = "mozilla";
console.log(browserType.slice(1, 4)); // "ozi"
```

Das Zeichen an Index `1` ist `"o"`, und das Zeichen an Index 4 ist `"l"`. Also extrahieren wir alle Zeichen beginnend bei `"o"` und endend direkt vor `"l"` und erhalten `"ozi"`.

Wenn Sie wissen, dass Sie alle restlichen Zeichen in einem String nach einem bestimmten Zeichen extrahieren möchten, müssen Sie den zweiten Parameter nicht einschließen. Stattdessen müssen Sie nur die Zeichenposition angeben, von der an Sie die restlichen Zeichen in einem String extrahieren möchten. Versuchen Sie Folgendes:

```js
browserType.slice(2); // "zilla"
```

Dies gibt `"zilla"` zurück — das liegt daran, dass die Zeichenposition von 2 der Buchstabe `"z"` ist, und da Sie keinen zweiten Parameter angegeben haben, wurden alle restlichen Zeichen in der Zeichenfolge zurückgegeben.

> **Note:** `slice()` hat auch andere Optionen; studieren Sie die Seite {{jsxref("String.prototype.slice()", "slice()")}}, um herauszufinden, was Sie noch herausfinden können.

## Ändern der Groß-/Kleinschreibung

Die Methoden {{jsxref("String.prototype.toLowerCase()", "toLowerCase()")}} und {{jsxref("String.prototype.toUpperCase()", "toUpperCase()")}} übernehmen eine Zeichenkette und konvertieren alle Zeichen in Klein- oder Großbuchstaben. Dies kann nützlich sein, wenn Sie beispielsweise alle Benutzereingaben normalisieren möchten, bevor Sie sie in einer Datenbank speichern.

Versuchen wir, die folgenden Zeilen einzugeben, um zu sehen, was passiert:

```js
const radData = "My NaMe Is MuD";
console.log(radData.toLowerCase());
console.log(radData.toUpperCase());
```

## Aktualisieren von Teilen eines Strings

Sie können eine Teilzeichenfolge in einem String durch eine andere Teilzeichenfolge ersetzen, indem Sie die Methode {{jsxref("String.prototype.replace()", "replace()")}} verwenden.

In diesem Beispiel übergeben wir zwei Parameter — den String, den wir ersetzen möchten, und den String, mit dem wir ihn ersetzen möchten:

```js
const browserType = "mozilla";
const updated = browserType.replace("moz", "van");

console.log(updated); // "vanilla"
console.log(browserType); // "mozilla"
```

Beachten Sie, dass `replace()`, wie viele Methoden für Strings, nicht den String ändert, auf dem es aufgerufen wurde, sondern einen neuen String zurückgibt. Wenn Sie die ursprüngliche `browserType` Variable aktualisieren möchten, müssten Sie Folgendes tun:

```js
let browserType = "mozilla";
browserType = browserType.replace("moz", "van");

console.log(browserType); // "vanilla"
```

Außerdem beachten Sie, dass wir jetzt `browserType` mit `let` und nicht mit `const` deklarieren müssen, da wir es neu zuweisen.

Beachten Sie, dass `replace()` in dieser Form nur das erste Vorkommen der Teilzeichenfolge ändert. Wenn Sie alle Vorkommen ändern möchten, können Sie {{jsxref("String.prototype.replaceAll()", "replaceAll()")}} verwenden:

```js
let quote = "To be or not to be";
quote = quote.replaceAll("be", "code");

console.log(quote); // "To code or not to code"
```

## Aktive Lernbeispiele

In diesem Abschnitt werden wir Sie dazu bringen, selbst etwas String-Manipulationscode zu schreiben. In jeder Übung unten haben wir ein Array von Strings und eine Schleife, die jeden Wert im Array verarbeitet und ihn in einer Aufzählungsliste anzeigt. Sie müssen sich jetzt nicht mit Arrays oder Schleifen auskennen — dies wird in zukünftigen Artikeln erklärt. Alles, was Sie in jedem Fall tun müssen, ist den Code zu schreiben, der die Strings in dem gewünschten Format ausgibt.

Jedes Beispiel kommt mit einem "Zurücksetzen"-Button, den Sie verwenden können, um den Code zurückzusetzen, wenn Sie einen Fehler gemacht haben und es nicht mehr zum Laufen bringen können, und einem "Lösung anzeigen"-Button, den Sie drücken können, um eine mögliche Antwort zu sehen, wenn Sie wirklich nicht weiterkommen.

### Filtern von Grußnachrichten

In der ersten Übung fangen wir einfach an — wir haben ein Array von Grußkarten-Nachrichten, aber wir möchten sie sortieren, um nur die Weihnachtsnachrichten aufzulisten. Wir möchten, dass Sie einen Bedingungstest innerhalb der `if ()` Struktur ausfüllen, um jede Zeichenfolge zu testen und sie nur dann in der Liste zu drucken, wenn es sich um eine Weihnachtsnachricht handelt.

Überlegen Sie, wie Sie testen könnten, ob es sich bei der Nachricht in jedem Fall um eine Weihnachtsnachricht handelt. Welche Zeichenfolge ist in all diesen Nachrichten vorhanden und welche Methode könnten Sie verwenden, um zu testen, ob sie vorhanden ist?

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

### Korrektur der Groß-/Kleinschreibung

In dieser Übung haben wir die Namen von Städten im Vereinigten Königreich, aber die Groß-/Kleinschreibung ist völlig durcheinander. Wir möchten, dass Sie sie so ändern, dass sie alle kleingeschrieben sind, mit Ausnahme des ersten Buchstabens, der großgeschrieben wird. Eine gute Möglichkeit, dies zu tun, besteht darin:

1. Konvertieren Sie den gesamten String, der in der `city` Variable enthalten ist, in Kleinbuchstaben und speichern Sie ihn in einer neuen Variable.
2. Greifen Sie auf den ersten Buchstaben des Strings in dieser neuen Variable zu und speichern Sie ihn in einer weiteren Variable.
3. Ersetzen Sie mit dieser neuesten Variable als Teilzeichenfolge den ersten Buchstaben des klein geschriebenen Strings durch den ersten Buchstaben des klein geschriebenen Strings, der in Großbuchstaben geändert wurde. Speichern Sie das Ergebnis dieses Ersetzungsverfahrens in einer weiteren neuen Variable.
4. Ändern Sie den Wert der `result` Variable, damit er dem endgültigen Ergebnis entspricht, nicht der `city`.

> [!NOTE]
> Ein Hinweis — die Parameter der String-Methoden müssen keine Zeichenfolgenliterale sein; sie können auch Variablen sein, oder sogar Variablen mit einer Methode, die auf ihnen aufgerufen wird.

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

In dieser letzten Übung enthält das Array eine Menge von Strings, die Informationen über Bahnhöfe im Norden Englands enthalten. Die Strings sind Datenelemente, die den dreibuchstabigen Stationscode, gefolgt von einigen maschinenlesbaren Daten, gefolgt von einem Semikolon, gefolgt vom menschenlesbaren Stationsnamen enthalten. Zum Beispiel:

```plain
MAN675847583748sjt567654;Manchester Piccadilly
```

Wir möchten den Stationscode und den Namen extrahieren und sie in einem String mit folgender Struktur zusammenfügen:

```plain
MAN: Manchester Piccadilly
```

Wir empfehlen, dies wie folgt zu tun:

1. Extrahieren Sie den dreibuchstabigen Stationscode und speichern Sie ihn in einer neuen Variable.
2. Finden Sie die Zeichenindexnummer des Semikolons.
3. Extrahieren Sie den menschenlesbaren Stationsnamen unter Verwendung der Zeichenindexnummer des Semikolons als Referenzpunkt und speichern Sie ihn in einer neuen Variable.
4. Verketten Sie die beiden neuen Variablen und ein Zeichenfolgenliteral, um den endgültigen String zu erstellen.
5. Ändern Sie den Wert der `result` Variable auf den endgültigen String, nicht auf die `station`.

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

Sie haben das Ende dieses Artikels erreicht, aber können Sie sich noch an die wichtigsten Informationen erinnern? Sie können einige weitere Tests finden, um zu überprüfen, ob Sie diese Informationen behalten haben, bevor Sie fortfahren — siehe [Testen Sie Ihre Fähigkeiten: Strings](/de/docs/Learn/JavaScript/First_steps/Test_your_skills:_Strings).

## Fazit

Es lässt sich nicht leugnen, dass es sehr wichtig ist, in der Programmierung mit Wörtern und Sätzen umgehen zu können — insbesondere in JavaScript, da Webseiten dazu dienen, mit Menschen zu kommunizieren. Dieser Artikel hat Ihnen die Grundlagen vermittelt, die Sie im Moment über die Manipulation von Strings wissen müssen. Dieses Wissen sollte Ihnen helfen, wenn Sie in Zukunft komplexere Themen angehen. Als Nächstes werden wir den letzten wichtigen Datentyp untersuchen, auf den wir uns kurzfristig konzentrieren müssen — Arrays.

{{PreviousMenuNext("Learn/JavaScript/First_steps/Strings", "Learn/JavaScript/First_steps/Arrays", "Learn/JavaScript/First_steps")}}
