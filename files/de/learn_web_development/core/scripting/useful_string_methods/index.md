---
title: Nützliche String-Methoden
short-title: String methods
slug: Learn_web_development/Core/Scripting/Useful_string_methods
l10n:
  sourceCommit: 003b6ceec6ecd0a3e36046a8515ab7fbc8dc220d
---

{{PreviousMenuNext("Learn_web_development/Core/Scripting/Strings", "Learn_web_development/Core/Scripting/Test_your_skills/Strings", "Learn_web_development/Core/Scripting")}}

Nachdem wir uns mit den absoluten Grundlagen von Strings befasst haben, lassen Sie uns einen Schritt weitergehen und darüber nachdenken, welche nützlichen Operationen wir mit eingebauten Methoden auf Strings anwenden können, wie zum Beispiel die Länge einer Textzeichenkette zu bestimmen, Strings zu verbinden und zu teilen, ein Zeichen in einem String durch ein anderes zu ersetzen und mehr.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>Ein Verständnis von <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a> und den <a href="/de/docs/Learn_web_development/Core/Styling_basics">Grundlagen von CSS</a>. Kenntnisse über <a href="/de/docs/Learn_web_development/Core/Scripting/Strings">String-Grundlagen</a>.</td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
          String-Manipulation unter Verwendung gewöhnlicher Eigenschaften und Methoden, die in JavaScript eingebaut sind.
      </td>
    </tr>
  </tbody>
</table>

## Strings als Objekte

Die meisten Werte können in JavaScript verwendet werden, als ob sie Objekte wären. Wenn Sie einen String erstellen, zum Beispiel durch die Verwendung von

```js
const string = "This is my string";
```

obwohl die Variable selbst kein Objekt ist, hat sie dennoch eine große Anzahl von Eigenschaften und Methoden, die ihr aufgrund der Nutzung als Objekt beim Zugriff auf Eigenschaften zur Verfügung stehen. Sie können dies sehen, wenn Sie die Seite {{jsxref("String")}} aufrufen und die Liste an der Seite der Seite ansehen!

**Bevor Ihr Gehirn zu schmelzen beginnt, keine Sorge!** Sie müssen sich nicht gleich zu Beginn Ihrer Lernreise mit den meisten dieser Eigenschaften vertraut machen. Aber es gibt einige, die Sie möglicherweise häufig verwenden werden, auf die wir hier eingehen.

Lassen Sie uns einige Beispiele in die [Browser-Entwicklerkonsole](/de/docs/Learn_web_development/Howto/Tools_and_setup/What_are_browser_developer_tools) eingeben.

## Die Länge eines Strings finden

Das ist einfach — Sie verwenden die Eigenschaft {{jsxref("String.prototype.length", "length")}}. Versuchen Sie, die folgenden Zeilen einzugeben:

```js
const browserType = "mozilla";
browserType.length;
```

Dies sollte die Zahl 7 zurückgeben, da "mozilla" 7 Zeichen lang ist. Dies ist aus vielen Gründen nützlich; zum Beispiel könnten Sie die Länge einer Reihe von Namen herausfinden wollen, um sie in der Reihenfolge ihrer Länge anzuzeigen, oder Benutzer darauf hinweisen, dass ein Benutzername, den sie in ein Formularfeld eingegeben haben, zu lang ist, wenn er eine bestimmte Länge überschreitet.

## Ein bestimmtes Zeichen aus einem String abrufen

In verwandtem Zusammenhang können Sie jedes Zeichen innerhalb eines Strings durch die Verwendung der **eckigen Klammern-Notation** zurückgeben — das bedeutet, dass Sie eckige Klammern (`[]`) am Ende des Variablennamens hinzufügen. In den eckigen Klammern geben Sie die Nummer des Zeichens an, das Sie zurückgeben möchten. Um zum Beispiel den ersten Buchstaben abzurufen, würden Sie dies tun:

```js
browserType[0];
```

Denken Sie daran: Computer zählen von 0, nicht von 1!

Um das letzte Zeichen eines _beliebigen_ Strings abzurufen, könnten wir die folgende Zeile verwenden, indem wir diese Technik mit der `length`-Eigenschaft kombinieren, die wir oben betrachtet haben:

```js
browserType[browserType.length - 1];
```

Die Länge des Strings "mozilla" ist 7, aber da das Zählen bei 0 beginnt, ist die Position des letzten Zeichens 6; mit `length-1` erhalten wir das letzte Zeichen.

## Prüfen, ob ein String ein Substring enthält

Manchmal möchten Sie feststellen, ob ein kleinerer String innerhalb eines größeren vorhanden ist (wir sagen allgemein, _ob ein Substring innerhalb eines Strings vorhanden ist_). Dies kann mit der Methode {{jsxref("String.prototype.includes()", "includes()")}} erfolgen, die einen einzelnen {{Glossary("parameter", "Parameter")}} annimmt — den Substring, den Sie suchen möchten.

Er gibt `true` zurück, wenn der String den Substring enthält, und `false` andernfalls.

```js
const browserType = "mozilla";

if (browserType.includes("zilla")) {
  console.log("Found zilla!");
} else {
  console.log("No zilla here!");
}
```

Oft möchten Sie wissen, ob ein String mit einem bestimmten Substring beginnt oder endet. Dies ist ein häufig benötigter Fall, für den es zwei spezielle Methoden gibt: {{jsxref("String.prototype.startsWith()", "startsWith()")}} und {{jsxref("String.prototype.endsWith()", "endsWith()")}}:

```js
const browserType = "mozilla";

if (browserType.startsWith("zilla")) {
  console.log("It starts with zilla!");
} else {
  console.log("It DOESN'T start with zilla!");
}
```

```js
const browserType = "mozilla";

if (browserType.endsWith("zilla")) {
  console.log("It ends with zilla!");
} else {
  console.log("It DOESN'T end with zilla!");
}
```

## Die Position eines Substrings in einem String finden

Sie können die Position eines Substrings innerhalb eines größeren Strings mit der Methode {{jsxref("String.prototype.indexOf()", "indexOf()")}} finden. Diese Methode nimmt zwei {{Glossary("parameter", "Parameter")}} an – den Substring, den Sie suchen möchten, und einen optionalen Parameter, der den Startpunkt der Suche spezifiziert.

Wenn der String den Substring enthält, gibt `indexOf()` den Index des ersten Auftretens des Substrings zurück. Wenn der String den Substring nicht enthält, gibt `indexOf()` `-1` zurück.

```js
const tagline = "MDN - Resources for developers, by developers";
console.log(tagline.indexOf("developers")); // 20
```

Wenn Sie ab `0` die Anzahl der Zeichen (einschließlich Leerzeichen) ab Beginn des Strings zählen, befindet sich das erste Auftreten des Substrings `"developers"` am Index `20`.

```js
console.log(tagline.indexOf("x")); // -1
```

Dies hingegen gibt `-1` zurück, da das Zeichen `x` im String nicht vorhanden ist.

Nun, da Sie wissen, wie Sie das erste Auftreten eines Substrings finden, wie finden Sie die folgenden Vorkommen? Sie können dies tun, indem Sie als zweiten Parameter an die Methode einen Wert übergeben, der größer ist als der Index des vorherigen Vorkommens.

```js
const firstOccurrence = tagline.indexOf("developers");
const secondOccurrence = tagline.indexOf("developers", firstOccurrence + 1);

console.log(firstOccurrence); // 20
console.log(secondOccurrence); // 35
```

Hier sagen wir der Methode, dass sie nach dem Substring `"developers"` ab Index `21` (`firstOccurrence + 1`) suchen soll, und sie gibt den Index `35` zurück.

## Einen Substring aus einem String extrahieren

Sie können einen Substring aus einem String mit der Methode {{jsxref("String.prototype.slice()", "slice()")}} extrahieren. Sie übergeben ihr:

- den Index, bei dem das Extrahieren beginnen soll
- den Index, bei dem das Extrahieren stoppen soll. Dieser ist exklusiv, bedeutet, dass das Zeichen an diesem Index nicht im extrahierten Substring enthalten ist.

Zum Beispiel:

```js
const browserType = "mozilla";
console.log(browserType.slice(1, 4)); // "ozi"
```

Das Zeichen an Index `1` ist `"o"`, und das Zeichen an Index `4` ist `"l"`. Also extrahieren wir alle Zeichen beginnend bei `"o"` bis kurz vor `"l"`, was uns `"ozi"` ergibt.

Wenn Sie wissen, dass Sie alle verbleibenden Zeichen in einem String nach einem bestimmten Zeichen extrahieren möchten, müssen Sie den zweiten Parameter nicht einschließen. Stattdessen müssen Sie nur die Zeichenposition angeben, ab der Sie die verbleibenden Zeichen in einem String extrahieren möchten. Versuchen Sie Folgendes:

```js
browserType.slice(2); // "zilla"
```

Dies gibt `"zilla"` zurück — dies liegt daran, dass die Zeichenposition `2` der Buchstabe `"z"` ist und da Sie keinen zweiten Parameter angegeben haben, wurde der zurückgegebene Substring alle verbleibenden Zeichen im String.

> [!NOTE]
> `slice()` hat auch noch andere Optionen; studieren Sie die {{jsxref("String.prototype.slice()", "slice()")}}-Seite, um herauszufinden, was Sie noch erfahren können.

## Groß- und Kleinschreibung ändern

Die String-Methoden {{jsxref("String.prototype.toLowerCase()", "toLowerCase()")}} und {{jsxref("String.prototype.toUpperCase()", "toUpperCase()")}} nehmen einen String und konvertieren sämtliche Zeichen entweder in Klein- oder Großbuchstaben. Dies kann nützlich sein, wenn zum Beispiel alle Benutzereingaben vor der Speicherung in einer Datenbank normalisiert werden sollen.

Versuchen Sie, die folgenden Zeilen einzugeben, um zu sehen, was passiert:

```js
const radData = "My NaMe Is MuD";
console.log(radData.toLowerCase());
console.log(radData.toUpperCase());
```

## Teile eines Strings aktualisieren

Sie können einen Substring innerhalb eines Strings mit einem anderen Substring durch die Methode {{jsxref("String.prototype.replace()", "replace()")}} ersetzen.

In diesem Beispiel geben wir zwei Parameter an — den String, den wir ersetzen möchten, und den String, mit dem wir ihn ersetzen möchten:

```js
const browserType = "mozilla";
const updated = browserType.replace("moz", "van");

console.log(updated); // "vanilla"
console.log(browserType); // "mozilla"
```

Beachten Sie, dass `replace()`, wie viele String-Methoden, den String, auf dem sie aufgerufen wurde, nicht ändert, sondern einen neuen String zurückgibt. Wenn Sie die ursprüngliche `browserType`-Variable aktualisieren möchten, müssen Sie so etwas tun:

```js
let browserType = "mozilla";
browserType = browserType.replace("moz", "van");

console.log(browserType); // "vanilla"
```

Beachten Sie auch, dass wir jetzt `browserType` mit `let` anstelle von `const` deklarieren müssen, da wir es neu zuweisen.

Seien Sie sich bewusst, dass `replace()` in dieser Form nur das erste Auftreten des Substrings ändert. Wenn Sie alle Vorkommen ändern möchten, können Sie {{jsxref("String.prototype.replaceAll()", "replaceAll()")}} verwenden:

```js
let quote = "To be or not to be";
quote = quote.replaceAll("be", "code");

console.log(quote); // "To code or not to code"
```

## Lernherausforderungen

In diesem Abschnitt geben wir Ihnen die Gelegenheit, selbst einige Codes zur String-Manipulation zu schreiben. In jeder Übung unten haben wir ein Array von Strings und eine Schleife, die jeden Wert im Array verarbeitet und ihn in einer Aufzählungsliste anzeigt. Sie müssen jetzt keine Arrays oder Schleifen verstehen – diese werden in späteren Artikeln erklärt. Alles, was Sie in jedem Fall tun müssen, ist den Code zu schreiben, der die Strings im gewünschten Format ausgibt.

Öffnen Sie jedes Beispiel im MDN Playground mit der **"Play"**-Schaltfläche oben im Live-Beispiel, und folgen Sie dann den Anweisungen, um das Problem zu lösen. Wenn Sie steckenbleiben, können Sie sich die Lösungen unter dem Live-Beispiel in jedem Fall ansehen.

Sie können die "Reset"-Schaltfläche im MDN Playground verwenden, um den Code zurückzusetzen, wenn Sie einen Fehler gemacht haben und ihn nicht mehr zum Laufen bringen können.

### Filterung von Grußbotschaften

In der ersten Übung starten wir einfach — wir haben ein Array von Grußkarten-Nachrichten, aber wir möchten sie sortieren, um nur die Weihnachtsnachrichten aufzulisten. Wir möchten, dass Sie einen bedingten Test innerhalb der `if ()`-Struktur ausfüllen, um jeden String zu testen und ihn nur in der Liste anzuzeigen, wenn er eine Weihnachtsnachricht ist.

Überlegen Sie, wie Sie testen könnten, ob die Nachricht in jedem Fall eine Weihnachtsnachricht ist. Welcher String ist in allen diesen Nachrichten vorhanden, und welche Methode könnten Sie verwenden, um zu testen, ob sie vorhanden ist?

```html hidden live-sample___string-methods-1
<ul></ul>
```

```js live-sample___string-methods-1
const list = document.querySelector("ul");
const greetings = [
  "Happy Birthday!",
  "Merry Christmas my love",
  "A happy Christmas to all the family",
  "You're all I want for Christmas",
  "Get well soon",
];

for (const greeting of greetings) {
  // Your conditional test needs to go inside the parentheses
  // in the line below, replacing what's currently there
  if (greeting) {
    const listItem = document.createElement("li");
    listItem.textContent = greeting;
    list.appendChild(listItem);
  }
}
```

{{ EmbedLiveSample("string-methods-1", "100%", 150) }}

<details>
<summary>Klicken Sie hier, um die Lösung anzuzeigen</summary>

Ihr fertiges JavaScript sollte so aussehen:

```js
const list = document.querySelector("ul");
const greetings = [
  "Happy Birthday!",
  "Merry Christmas my love",
  "A happy Christmas to all the family",
  "You're all I want for Christmas",
  "Get well soon",
];

for (const greeting of greetings) {
  if (greeting.includes("Christmas")) {
    const listItem = document.createElement("li");
    listItem.textContent = greeting;
    list.appendChild(listItem);
  }
}
```

</details>

### Großschreibung korrigieren

Diese Übung zeigt die Namen von Städten im Vereinigten Königreich, aber die Großschreibung ist völlig durcheinander. Wir möchten, dass Sie sie so ändern, dass sie alle kleingeschrieben sind, außer dem ersten Buchstaben, der groß geschrieben sein soll. Eine gute Möglichkeit, dies zu tun, ist:

1. Wandeln Sie den gesamten String, der in der Variablen `city` enthalten ist, in Kleinbuchstaben um und speichern Sie ihn in einer neuen Variable.
2. Holen Sie sich den ersten Buchstaben des Strings in dieser neuen Variablen und speichern Sie ihn in einer anderen Variablen.
3. Verwenden Sie diese neueste Variable als Substring, um den ersten Buchstaben des Kleinbuchstaben-Strings durch den ersten Buchstaben des Kleinbuchstaben-Strings geändert in Großbuchstaben zu ersetzen. Speichern Sie das Ergebnis dieses Ersetzungsverfahrens in einer weiteren neuen Variablen.
4. Ändern Sie den Wert der `result`-Variablen, sodass sie dem Endergebnis, nicht der `city`, entspricht.

> [!NOTE]
> Ein Hinweis — die Parameter der String-Methoden müssen keine String-Literale sein; sie können auch Variablen sein, oder sogar Variablen mit einer darauf aufgerufenen Methode.

```html hidden live-sample___string-methods-2
<ul></ul>
```

```js live-sample___string-methods-2
const list = document.querySelector("ul");
const cities = ["lonDon", "ManCHESTer", "BiRmiNGHAM", "liVERpoOL"];

for (const city of cities) {
  // write your code just below here

  const result = city;
  const listItem = document.createElement("li");
  listItem.textContent = result;
  list.appendChild(listItem);
}
```

{{ EmbedLiveSample("string-methods-2", "100%", 150) }}

<details>
<summary>Klicken Sie hier, um die Lösung anzuzeigen</summary>

Ihr fertiges JavaScript sollte so aussehen:

```js
const list = document.querySelector("ul");
const cities = ["lonDon", "ManCHESTer", "BiRmiNGHAM", "liVERpoOL"];

for (const city of cities) {
  const lower = city.toLowerCase();
  const firstLetter = lower.slice(0, 1);
  const capitalized = lower.replace(firstLetter, firstLetter.toUpperCase());
  const result = capitalized;
  const listItem = document.createElement("li");
  listItem.textContent = result;
  list.appendChild(listItem);
}
```

</details>

### Neue Strings aus alten Teilen erstellen

In dieser letzten Übung enthält das Array Strings mit Informationen über Bahnhöfe im Norden Englands. Die Strings sind Datenelemente, die den dreibuchstabigen Stationscode, gefolgt von einigen maschinenlesbaren Daten, gefolgt von einem Semikolon, gefolgt vom menschenlesbaren Stationsnamen enthalten. Zum Beispiel:

```plain
MAN675847583748sjt567654;Manchester Piccadilly
```

Wir möchten den Stationscode und den Namen extrahieren und sie in einem String mit der folgenden Struktur zusammenstellen:

```plain
MAN: Manchester Piccadilly
```

Wir würden empfehlen, es so zu tun:

1. Extrahieren Sie den dreibuchstabigen Stationscode und speichern Sie ihn in einer neuen Variablen.
2. Finden Sie die Zeichencode-Indexnummer des Semikolons.
3. Extrahieren Sie den menschenlesbaren Stationsnamen unter Verwendung der Zeichencode-Indexnummer des Semikolons als Referenzpunkt und speichern Sie ihn in einer neuen Variablen.
4. Kombinieren Sie die beiden neuen Variablen und ein String-Literal, um den endgültigen String zu erstellen.
5. Ändern Sie den Wert der `result`-Variablen in den endgültigen String, nicht die `station`.

```html hidden live-sample___string-methods-3
<ul></ul>
```

```js live-sample___string-methods-3
const list = document.querySelector("ul");
const stations = [
  "MAN675847583748sjt567654;Manchester Piccadilly",
  "GNF576746573fhdg4737dh4;Greenfield",
  "LIV5hg65hd737456236dch46dg4;Liverpool Lime Street",
  "SYB4f65hf75f736463;Stalybridge",
  "HUD5767ghtyfyr4536dh45dg45dg3;Huddersfield",
];

for (const station of stations) {
  // write your code just below here

  const result = station;
  const listItem = document.createElement("li");
  listItem.textContent = result;
  list.appendChild(listItem);
}
```

{{ EmbedLiveSample("string-methods-3", "100%", 150) }}

<details>
<summary>Klicken Sie hier, um die Lösung anzuzeigen</summary>

Ihr fertiges JavaScript sollte so aussehen:

```js
const list = document.querySelector("ul");
const stations = [
  "MAN675847583748sjt567654;Manchester Piccadilly",
  "GNF576746573fhdg4737dh4;Greenfield",
  "LIV5hg65hd737456236dch46dg4;Liverpool Lime Street",
  "SYB4f65hf75f736463;Stalybridge",
  "HUD5767ghtyfyr4536dh45dg45dg3;Huddersfield",
];

for (const station of stations) {
  const code = station.slice(0, 3);
  const semiColonIndex = station.indexOf(";");
  const name = station.slice(semiColonIndex + 1);
  const result = `${code}: ${name}`;
  const listItem = document.createElement("li");
  listItem.textContent = result;
  list.appendChild(listItem);
}
```

</details>

## Zusammenfassung

Es lässt sich nicht leugnen, dass es sehr wichtig ist, Wörter und Sätze in der Programmierung handhaben zu können — insbesondere in JavaScript, da es bei Websites darum geht, mit Menschen zu kommunizieren. Dieser Artikel hat Ihnen die Grundlagen vermittelt, die Sie derzeit über das Manipulieren von Strings wissen müssen. Dies sollte Ihnen gut dienen, wenn Sie in Zukunft in komplexere Themen eintauchen.

Im nächsten Artikel geben wir Ihnen einige Tests, mit denen Sie prüfen können, wie gut Sie die Informationen über Strings und String-Methoden verstanden und behalten haben.

{{PreviousMenuNext("Learn_web_development/Core/Scripting/Strings", "Learn_web_development/Core/Scripting/Test_your_skills/Strings", "Learn_web_development/Core/Scripting")}}
