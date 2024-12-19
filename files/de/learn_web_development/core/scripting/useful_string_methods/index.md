---
title: Nützliche String-Methoden
slug: Learn_web_development/Core/Scripting/Useful_string_methods
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{LearnSidebar}}{{PreviousMenuNext("Learn_web_development/Core/Scripting/Strings", "Learn_web_development/Core/Scripting/Arrays", "Learn_web_development/Core/Scripting")}}

Nachdem wir uns die Grundlagen von Strings angesehen haben, steigen wir nun in ein höheres Niveau ein und überlegen, welche nützlichen Operationen wir mit eingebauten Methoden an Strings durchführen können, wie z.B. die Länge eines Textstrings zu ermitteln, Strings zu verbinden und zu teilen, ein Zeichen in einem String durch ein anderes zu ersetzen, und mehr.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>Ein Verständnis von <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a> und die <a href="/de/docs/Learn_web_development/Core/Styling_basics">Grundlagen von CSS</a>. Kenntnisse der <a href="/de/docs/Learn_web_development/Core/Scripting/Strings">String-Grundlagen</a>.</td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
          String-Manipulation unter Verwendung der gängigen Eigenschaften und Methoden, die in JavaScript eingebaut sind.
      </td>
    </tr>
  </tbody>
</table>

## Strings als Objekte

Die meisten Werte können in JavaScript so verwendet werden, als ob sie Objekte wären. Wenn Sie beispielsweise einen String erstellen, indem Sie

```js
const string = "This is my string";
```

verwenden, ist die Variable selbst zwar kein Objekt, sie hat jedoch durch die Nutzung als Objekt beim Zugriff auf Eigenschaften eine Vielzahl von Eigenschaften und Methoden zur Verfügung. Sie können dies sehen, wenn Sie die Seite {{jsxref("String")}} aufrufen und die Liste am Seitenrand betrachten!

**Keine Sorge, bevor Ihr Gehirn anfängt zu rauchen!** Sie müssen wirklich nicht die meisten dieser Aspekte gleich zu Beginn Ihrer Lernreise kennen. Aber es gibt einige, die Sie möglicherweise ziemlich oft verwenden werden, und diese werden wir uns hier ansehen.

Lassen Sie uns einige Beispiele in die [Entwicklerkonsole des Browsers](/de/docs/Learn_web_development/Howto/Tools_and_setup/What_are_browser_developer_tools) eingeben.

## Die Länge eines Strings ermitteln

Das ist einfach — Sie verwenden die {{jsxref("String.prototype.length", "length")}}-Eigenschaft. Probieren Sie die folgenden Zeilen aus:

```js
const browserType = "mozilla";
browserType.length;
```

Dies sollte die Zahl 7 zurückgeben, da "mozilla" 7 Zeichen lang ist. Dies ist aus vielen Gründen nützlich; zum Beispiel möchten Sie möglicherweise die Längen einer Reihe von Namen ermitteln, um sie der Länge nach anzuordnen, oder einem Benutzer mitteilen, dass ein von ihm in ein Formularfeld eingegebener Benutzername zu lang ist, wenn er über eine bestimmte Länge hinausgeht.

## Ein bestimmtes Zeichen eines Strings abrufen

In diesem Zusammenhang können Sie jedes Zeichen innerhalb eines Strings zurückgeben, indem Sie die **Klammernotation** verwenden — das bedeutet, dass Sie eckige Klammern (`[]`) am Ende des Variablennamens einfügen. In die eckigen Klammern geben Sie die Nummer des Zeichens ein, das Sie zurückgeben möchten, sodass Sie beispielsweise das erste Zeichen so abrufen:

```js
browserType[0];
```

Denken Sie daran: Computer zählen ab 0, nicht ab 1!

Um das letzte Zeichen eines _beliebigen_ Strings abzurufen, könnten wir die folgende Zeile verwenden und diese Technik mit der `length`-Eigenschaft, die wir oben betrachtet haben, kombinieren:

```js
browserType[browserType.length - 1];
```

Die Länge des Strings "mozilla" beträgt 7, aber da das Zählen bei 0 beginnt, ist die Position des letzten Zeichens 6; die Verwendung von `length-1` gibt uns das letzte Zeichen.

## Testen, ob ein String ein Substring enthält

Manchmal möchten Sie feststellen, ob ein kleinerer String innerhalb eines größeren vorhanden ist (wir sagen im Allgemeinen _ob ein Substring innerhalb eines Strings vorhanden ist_). Dies kann mit der Methode {{jsxref("String.prototype.includes()", "includes()")}} erfolgen, die einen einzigen {{Glossary("parameter", "Parameter")}} benötigt – den Substring, nach dem Sie suchen möchten.

Sie gibt `true` zurück, wenn der String den Substring enthält, und `false` andernfalls.

```js
const browserType = "mozilla";

if (browserType.includes("zilla")) {
  console.log("Found zilla!");
} else {
  console.log("No zilla here!");
}
```

Oftmals möchten Sie wissen, ob ein String mit einem bestimmten Substring beginnt oder endet. Dies ist ein so häufiges Bedürfnis, dass es zwei spezielle Methoden dafür gibt: {{jsxref("String.prototype.startsWith()", "startsWith()")}} und {{jsxref("String.prototype.endsWith()", "endsWith()")}}:

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

Sie können die Position eines Substrings innerhalb eines größeren Strings mit der Methode {{jsxref("String.prototype.indexOf()", "indexOf()")}} finden. Diese Methode benötigt zwei {{Glossary("parameter", "Parameter")}} – den Substring, nach dem Sie suchen möchten, und einen optionalen Parameter, der den Startpunkt der Suche spezifiziert.

Wenn der String den Substring enthält, gibt `indexOf()` den Index des ersten Vorkommens des Substrings zurück. Wenn der String den Substring nicht enthält, gibt `indexOf()` `-1` zurück.

```js
const tagline = "MDN - Resources for developers, by developers";
console.log(tagline.indexOf("developers")); // 20
```

Beginnend bei `0`, wenn Sie vom Anfang des Strings aus die Anzahl der Zeichen (einschließlich des Leerzeichens) zählen, befindet sich das erste Vorkommen des Substrings `"developers"` bei Index `20`.

```js
console.log(tagline.indexOf("x")); // -1
```

Dies wiederum gibt `-1` zurück, weil das Zeichen `x` nicht im String vorhanden ist.

Jetzt, da Sie wissen, wie Sie das erste Vorkommen eines Substrings finden, wie geht man vor, um nachfolgende Vorkommen zu finden? Sie können dies tun, indem Sie als zweiten Parameter einen Wert angeben, der größer als der Index des vorherigen Vorkommens ist.

```js
const firstOccurrence = tagline.indexOf("developers");
const secondOccurrence = tagline.indexOf("developers", firstOccurrence + 1);

console.log(firstOccurrence); // 20
console.log(secondOccurrence); // 35
```

Hier sagen wir der Methode, dass sie den Substring `"developers"` ab Index `21` (`firstOccurrence + 1`) suchen soll, und sie gibt den Index `35` zurück.

## Einen Substring aus einem String extrahieren

Sie können einen Substring aus einem String mit der Methode {{jsxref("String.prototype.slice()", "slice()")}} extrahieren. Sie übergeben ihr:

- den Index, bei dem das Extrahieren beginnt
- den Index, bei dem das Extrahieren endet. Dies ist exklusiv, was bedeutet, dass das Zeichen an diesem Index nicht im extrahierten Substring enthalten ist.

Zum Beispiel:

```js
const browserType = "mozilla";
console.log(browserType.slice(1, 4)); // "ozi"
```

Das Zeichen bei Index `1` ist `"o"`, und das Zeichen bei Index `4` ist `"l"`. Also extrahieren wir alle Zeichen beginnend bei `"o"` und endend unmittelbar vor `"l"`, und erhalten somit `"ozi"`.

Wenn Sie wissen, dass Sie alle verbleibenden Zeichen in einem String nach einem bestimmten Zeichen extrahieren möchten, müssen Sie den zweiten Parameter nicht angeben. Stattdessen müssen Sie nur die Zeichenposition angeben, ab der Sie die verbleibenden Zeichen in einem String extrahieren möchten. Probieren Sie Folgendes aus:

```js
browserType.slice(2); // "zilla"
```

Dies gibt `"zilla"` zurück — das liegt daran, dass die Zeichenposition 2 der Buchstabe `"z"` ist, und da Sie keinen zweiten Parameter angegeben haben, werden alle verbleibenden Zeichen im String zurückgegeben.

> **Note:** `slice()` hat noch weitere Optionen; studieren Sie die {{jsxref("String.prototype.slice()", "slice()")}}-Seite, um zu sehen, was Sie sonst noch herausfinden können.

## Groß- und Kleinschreibung ändern

Die String-Methoden {{jsxref("String.prototype.toLowerCase()", "toLowerCase()")}} und {{jsxref("String.prototype.toUpperCase()", "toUpperCase()")}} nehmen einen String und wandeln alle Zeichen jeweils in Klein- oder Großbuchstaben um. Dies kann nützlich sein, wenn Sie beispielsweise alle Benutzereingaben normalisieren möchten, bevor Sie sie in einer Datenbank speichern.

Lassen Sie uns die folgenden Zeilen eingeben, um zu sehen, was passiert:

```js
const radData = "My NaMe Is MuD";
console.log(radData.toLowerCase());
console.log(radData.toUpperCase());
```

## Teile eines Strings aktualisieren

Sie können ein Substring innerhalb eines Strings durch ein anderes Substring mit der Methode {{jsxref("String.prototype.replace()", "replace()")}} ersetzen.

In diesem Beispiel übergeben wir zwei Parameter — den String, den wir ersetzen möchten, und den String, durch den wir ihn ersetzen möchten:

```js
const browserType = "mozilla";
const updated = browserType.replace("moz", "van");

console.log(updated); // "vanilla"
console.log(browserType); // "mozilla"
```

Beachten Sie, dass `replace()`, wie viele String-Methoden, den String, auf dem es aufgerufen wurde, nicht ändert, sondern einen neuen String zurückgibt. Wenn Sie die ursprüngliche `browserType`-Variable aktualisieren möchten, müssten Sie etwas wie dies tun:

```js
let browserType = "mozilla";
browserType = browserType.replace("moz", "van");

console.log(browserType); // "vanilla"
```

Beachten Sie auch, dass wir `browserType` jetzt mit `let` und nicht `const` deklarieren müssen, da wir sie neu zuweisen.

Beachten Sie, dass `replace()` in dieser Form nur das erste Vorkommen des Substrings ändert. Wenn Sie alle Vorkommen ändern möchten, können Sie {{jsxref("String.prototype.replaceAll()", "replaceAll()")}} verwenden:

```js
let quote = "To be or not to be";
quote = quote.replaceAll("be", "code");

console.log(quote); // "To code or not to code"
```

## Aktive Lernbeispiele

In diesem Abschnitt werden wir Ihnen die Möglichkeit geben, etwas String-Manipulationscode zu schreiben. In jeder unten stehenden Übung haben wir ein Array von Strings und eine Schleife, die jeden Wert im Array verarbeitet und ihn in einer Aufzählungsliste anzeigt. Sie müssen derzeit noch keine Arrays oder Schleifen verstehen — diese werden in zukünftigen Artikeln erklärt. Alles, was Sie in jedem Fall tun müssen, ist, den Code zu schreiben, der die Strings im gewünschten Format ausgibt.

Jedes Beispiel hat eine "Zurücksetzen"-Taste, die Sie verwenden können, um den Code zurückzusetzen, wenn Sie einen Fehler machen und ihn nicht mehr zum Laufen bringen können, sowie eine "Lösung anzeigen"-Taste, die Sie verwenden können, um eine mögliche Antwort zu sehen, wenn Sie wirklich feststecken.

### Filterung von Grußkarten-Nachrichten

In der ersten Übung fangen wir einfach an — wir haben ein Array von Grußkarten-Nachrichten, aber wir möchten sie sortieren, um nur die Weihnachts-Nachrichten aufzulisten. Wir möchten, dass Sie einen bedingten Test innerhalb der `if ()`-Struktur einfügen, um jeden String zu testen und ihn nur dann in die Liste aufzunehmen, wenn es sich um eine Weihnachts-Nachricht handelt.

Überlegen Sie, wie Sie testen könnten, ob es sich bei der Nachricht in jedem Fall um eine Weihnachts-Nachricht handelt. Welcher String ist in all diesen Nachrichten vorhanden, und welche Methode könnten Sie verwenden, um zu testen, ob er vorhanden ist?

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

In dieser Übung haben wir die Namen von Städten im Vereinigten Königreich, aber die Großschreibung ist komplett durcheinander. Wir möchten, dass Sie sie so ändern, dass sie alle kleingeschrieben sind, mit Ausnahme des Anfangsbuchstaben. Eine gute Möglichkeit, dies zu tun, ist:

1. Konvertieren Sie den gesamten String, der in der `city`-Variable enthalten ist, in Kleinbuchstaben und speichern Sie ihn in einer neuen Variablen.
2. Nehmen Sie den ersten Buchstaben des Strings in dieser neuen Variablen und speichern Sie ihn in einer anderen Variablen.
3. Verwenden Sie diese letzte Variable als Substring, ersetzen Sie den ersten Buchstaben des Kleinbuchstaben-Strings durch den ersten Buchstaben des Kleinbuchstaben-Strings, der in Großbuchstaben umgewandelt wurde. Speichern Sie das Ergebnis dieses Ersetzungsverfahrens in einer weiteren neuen Variablen.
4. Ändern Sie den Wert der `result`-Variablen, damit er dem endgültigen Ergebnis entspricht, nicht der `city`.

> [!NOTE]
> Ein Hinweis — die Parameter von String-Methoden müssen keine String-Literale sein; sie können auch Variablen oder sogar Variablen mit einer darauf angewendeten Methode sein.

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

### Neue Strings aus alten Teilen machen

In dieser letzten Übung enthält das Array eine Reihe von Strings mit Informationen über Bahnhöfe im Norden Englands. Die Strings sind Datenelemente, die den dreistelligen Bahnhofscode enthalten, gefolgt von einigen maschinenlesbaren Daten, gefolgt von einem Semikolon, gefolgt vom menschenlesbaren Bahnhofsname. Zum Beispiel:

```plain
MAN675847583748sjt567654;Manchester Piccadilly
```

Wir möchten den Bahnhofscode und den Namen extrahieren und sie in einem String mit folgender Struktur zusammenfügen:

```plain
MAN: Manchester Piccadilly
```

Wir würden empfehlen, es so zu machen:

1. Extrahieren Sie den dreistelligen Bahnhofscode und speichern Sie ihn in einer neuen Variablen.
2. Finden Sie die Zeichenindexnummer des Semikolons.
3. Extrahieren Sie den menschenlesbaren Bahnhofsname unter Verwendung der Zeichenindexnummer des Semikolons als Referenzpunkt und speichern Sie ihn in einer neuen Variablen.
4. Verkettung der beiden neuen Variablen und einer Stringliterale, um den endgültigen String zu bilden.
5. Ändern Sie den Wert der `result`-Variablen in den endgültigen String, nicht den `station`.

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

## Testen Sie Ihr Wissen!

Sie haben das Ende dieses Artikels erreicht, aber können Sie sich an die wichtigsten Informationen erinnern? Sie können einige weitere Tests durchführen, um zu überprüfen, ob Sie diese Informationen behalten haben, bevor Sie weitermachen — siehe [Testen Sie Ihr Wissen: Strings](/de/docs/Learn_web_development/Core/Scripting/Test_your_skills:_Strings).

## Fazit

Sie können der Tatsache nicht entkommen, dass das Bearbeiten von Wörtern und Sätzen in der Programmierung sehr wichtig ist — insbesondere in JavaScript, da Websites hauptsächlich dazu da sind, mit Menschen zu kommunizieren. Dieser Artikel hat Ihnen die Grundlagen vermittelt, die Sie derzeit über die Manipulation von Strings wissen müssen. Dies sollte Ihnen nützlich sein, wenn Sie sich in Zukunft mit komplexeren Themen befassen. Als Nächstes werden wir uns mit dem letzten wichtigen Datentyp befassen, auf den wir uns kurzfristig konzentrieren müssen — Arrays.

{{PreviousMenuNext("Learn_web_development/Core/Scripting/Strings", "Learn_web_development/Core/Scripting/Arrays", "Learn_web_development/Core/Scripting")}}
