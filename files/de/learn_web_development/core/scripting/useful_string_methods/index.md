---
title: Nützliche String-Methoden
short-title: String methods
slug: Learn_web_development/Core/Scripting/Useful_string_methods
l10n:
  sourceCommit: 9d3d642daf9df9ece138fa39972edc5f7d6dcd6b
---

{{PreviousMenuNext("Learn_web_development/Core/Scripting/Strings", "Learn_web_development/Core/Scripting/Test_your_skills/Strings", "Learn_web_development/Core/Scripting")}}

Nachdem wir uns die Grundlagen von Strings angesehen haben, wollen wir nun einen Gang höher schalten und darüber nachdenken, welche nützlichen Operationen wir mit eingebauten Methoden an Strings durchführen können, wie z.B. die Länge einer Textzeichenkette ermitteln, Strings verbinden und trennen, ein Zeichen in einer Zeichenkette durch ein anderes ersetzen und mehr.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>Ein Verständnis von <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a> und den <a href="/de/docs/Learn_web_development/Core/Styling_basics">Grundlagen von CSS</a>. Kenntnisse der <a href="/de/docs/Learn_web_development/Core/Scripting/Strings">String-Grundlagen</a>.</td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
          Manipulation von Strings mit gängigen Eigenschaften und Methoden, die in JavaScript eingebaut sind.
      </td>
    </tr>
  </tbody>
</table>

## Strings als Objekte

Die meisten Werte können in JavaScript so verwendet werden, als ob sie Objekte wären. Wenn Sie einen String erstellen, zum Beispiel durch die Verwendung von

```js
const string = "This is my string";
```

obwohl die Variable selbst kein Objekt ist, sind dennoch viele Eigenschaften und Methoden verfügbar, da sie beim Zugriff auf Eigenschaften als Objekt nutzbar ist. Sie können dies sehen, wenn Sie die Seite des {{jsxref("String")}}-Objekts besuchen und sich die Liste an der Seite der Seite ansehen!

**Bevor Ihr Kopf zu schmelzen beginnt, keine Sorge!** Sie müssen zu Beginn Ihrer Lernreise nicht über die meisten dieser Dinge Bescheid wissen. Aber es gibt einige, die Sie potenziell häufig verwenden werden, auf die wir hier eingehen.

Lassen Sie uns einige Beispiele in die [Entwicklertools des Browsers](/de/docs/Learn_web_development/Howto/Tools_and_setup/What_are_browser_developer_tools) eingeben.

## Die Länge eines Strings ermitteln

Das ist einfach — Sie verwenden die {{jsxref("String.prototype.length", "length")}}-Eigenschaft. Versuchen Sie, die folgenden Zeilen einzugeben:

```js
const browserType = "mozilla";
browserType.length;
```

Dies sollte die Zahl 7 zurückgeben, da "mozilla" 7 Zeichen lang ist. Dies ist aus vielen Gründen nützlich; zum Beispiel könnten Sie die Längen einer Reihe von Namen ermitteln, um sie der Länge nach anzuzeigen, oder einem Benutzer mitteilen, dass ein eingegebener Benutzername in einem Formularfeld zu lang ist, wenn er eine bestimmte Länge überschreitet.

## Ein bestimmtes Zeichen eines Strings abrufen

In einem verwandten Punkt können Sie jedes Zeichen innerhalb eines Strings mit der **eckigen Klammernotation** zurückgeben — das bedeutet, dass Sie eckige Klammern (`[]`) am Ende Ihres Variablennamens einfügen. In die eckigen Klammern fügen Sie die Nummer des Zeichens ein, das Sie zurückgeben möchten, sodass Sie beispielsweise den ersten Buchstaben so abrufen würden:

```js
browserType[0];
```

Denken Sie daran: Computer zählen ab 0, nicht ab 1!

Um das letzte Zeichen eines _beliebigen_ Strings zurückzugeben, könnten wir die folgende Zeile verwenden, indem wir diese Technik mit der oben betrachteten `length`-Eigenschaft kombinieren:

```js
browserType[browserType.length - 1];
```

Die Länge des Strings "mozilla" ist 7, aber da das Zählen bei 0 beginnt, befindet sich das letzte Zeichen an Position 6; mit `length-1` erhalten wir das letzte Zeichen.

## Testen, ob ein String eine Teilzeichenkette enthält

Manchmal möchten Sie herausfinden, ob eine kleinere Zeichenkette innerhalb einer größeren vorhanden ist (wir sagen allgemein, _ob eine Teilzeichenkette innerhalb eines Strings vorhanden ist_). Dies kann mit der Methode {{jsxref("String.prototype.includes()", "includes()")}} erreicht werden, die einen einzelnen {{Glossary("parameter", "Parameter")}} nimmt — die Teilzeichenkette, nach der Sie suchen möchten.

Sie gibt `true` zurück, wenn der String die Teilzeichenkette enthält, und `false` andernfalls.

```js
const browserType = "mozilla";

if (browserType.includes("zilla")) {
  console.log("Found zilla!");
} else {
  console.log("No zilla here!");
}
```

Oft möchten Sie wissen, ob ein String mit einer bestimmten Teilzeichenkette beginnt oder endet. Dies ist ein häufiges Bedürfnis, sodass es dafür zwei spezielle Methoden gibt: {{jsxref("String.prototype.startsWith()", "startsWith()")}} und {{jsxref("String.prototype.endsWith()", "endsWith()")}}:

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

Sie können die Position einer Teilzeichenkette innerhalb eines größeren Strings mit der Methode {{jsxref("String.prototype.indexOf()", "indexOf()")}} finden. Diese Methode nimmt zwei {{Glossary("parameter", "Parameter")}} – die Teilzeichenkette, nach der Sie suchen möchten, und ein optionaler Parameter, der den Startpunkt der Suche angibt.

Wenn der String die Teilzeichenkette enthält, gibt `indexOf()` den Index des ersten Vorkommens der Teilzeichenkette zurück. Wenn der String die Teilzeichenkette nicht enthält, gibt `indexOf()` `-1` zurück.

```js
const tagline = "MDN - Resources for developers, by developers";
console.log(tagline.indexOf("developers")); // 20
```

Beginnend bei `0`, wenn Sie die Anzahl der Zeichen (einschließlich der Leerzeichen) vom Anfang des Strings zählen, befindet sich das erste Vorkommen der Teilzeichenkette `"developers"` an Index `20`.

```js
console.log(tagline.indexOf("x")); // -1
```

Dies hingegen gibt `-1` zurück, weil das Zeichen `x` nicht im String vorhanden ist.

Jetzt, da Sie wissen, wie Sie das erste Vorkommen einer Teilzeichenkette finden, wie gehen Sie vor, um nachfolgende Vorkommen zu finden? Das können Sie tun, indem Sie einen Wert übergeben, der größer als der Index des vorherigen Vorkommens ist, als zweiten Parameter der Methode.

```js
const firstOccurrence = tagline.indexOf("developers");
const secondOccurrence = tagline.indexOf("developers", firstOccurrence + 1);

console.log(firstOccurrence); // 20
console.log(secondOccurrence); // 35
```

Hier sagen wir der Methode, sie soll nach der Teilzeichenkette `"developers"` ab Index `21` (`firstOccurrence + 1`) suchen, und sie gibt den Index `35` zurück.

## Eine Teilzeichenkette aus einem String extrahieren

Sie können eine Teilzeichenkette aus einem String mit der Methode {{jsxref("String.prototype.slice()", "slice()")}} extrahieren. Sie übergeben:

- den Index, ab dem extrahiert werden soll
- den Index, an dem das Extrahieren gestoppt werden soll. Dies ist exklusiv, was bedeutet, dass das Zeichen an diesem Index nicht in die extrahierte Teilzeichenkette aufgenommen wird.

Zum Beispiel:

```js
const browserType = "mozilla";
console.log(browserType.slice(1, 4)); // "ozi"
```

Das Zeichen an Index `1` ist `"o"`, und das Zeichen an Index 4 ist `"l"`. Also extrahieren wir alle Zeichen beginnend mit `"o"` und endend direkt vor `"l"`, was uns `"ozi"` gibt.

Wenn Sie wissen, dass Sie alle verbleibenden Zeichen in einem String nach einem bestimmten Zeichen extrahieren möchten, müssen Sie den zweiten Parameter nicht angeben. Stattdessen müssen Sie nur die Zeichenposition angeben, ab der Sie die verbleibenden Zeichen in einem String extrahieren möchten. Versuchen Sie Folgendes:

```js
browserType.slice(2); // "zilla"
```

Dies gibt `"zilla"` zurück — das liegt daran, dass die Zeichenposition von 2 der Buchstabe `"z"` ist, und da Sie keinen zweiten Parameter angegeben haben, war die zurückgegebene Teilzeichenkette alle verbleibenden Zeichen im String.

> [!NOTE]
> `slice()` hat auch andere Optionen; studieren Sie die {{jsxref("String.prototype.slice()", "slice()")}}-Seite, um zu sehen, was Sie noch herausfinden können.

## Groß- und Kleinschreibung ändern

Die String-Methoden {{jsxref("String.prototype.toLowerCase()", "toLowerCase()")}} und {{jsxref("String.prototype.toUpperCase()", "toUpperCase()")}} nehmen einen String und konvertieren alle Zeichen in Klein- bzw. Großbuchstaben. Dies kann nützlich sein, wenn Sie beispielsweise alle vom Benutzer eingegebenen Daten normalisieren möchten, bevor sie in einer Datenbank gespeichert werden.

Lassen Sie uns die folgenden Zeilen eingeben, um zu sehen, was passiert:

```js
const radData = "My NaMe Is MuD";
console.log(radData.toLowerCase());
console.log(radData.toUpperCase());
```

## Teile eines Strings aktualisieren

Sie können eine Teilzeichenkette innerhalb eines Strings durch eine andere Teilzeichenkette mit der Methode {{jsxref("String.prototype.replace()", "replace()")}} ersetzen.

In diesem Beispiel übergeben wir zwei Parameter — den String, den wir ersetzen möchten, und den String, durch den wir ihn ersetzen möchten:

```js
const browserType = "mozilla";
const updated = browserType.replace("moz", "van");

console.log(updated); // "vanilla"
console.log(browserType); // "mozilla"
```

Beachten Sie, dass `replace()`, wie viele String-Methoden, den String, auf den es angewendet wurde, nicht ändert, sondern einen neuen String zurückgibt. Wenn Sie die ursprüngliche Variable `browserType` aktualisieren möchten, müssten Sie etwas wie dies tun:

```js
let browserType = "mozilla";
browserType = browserType.replace("moz", "van");

console.log(browserType); // "vanilla"
```

Achten Sie auch darauf, dass wir jetzt `browserType` mit `let` und nicht mit `const` deklarieren müssen, weil wir es neu zuweisen.

Seien Sie sich bewusst, dass `replace()` in dieser Form nur das erste Vorkommen der Teilzeichenkette ändert. Wenn Sie alle Vorkommen ändern möchten, können Sie {{jsxref("String.prototype.replaceAll()", "replaceAll()")}} verwenden:

```js
let quote = "To be or not to be";
quote = quote.replaceAll("be", "code");

console.log(quote); // "To code or not to code"
```

## Lernherausforderungen

In diesem Abschnitt werden wir Sie einige Codezeilen zur String-Manipulation schreiben lassen. In jeder der folgenden Übungen haben wir ein Array von Strings und eine Schleife, die jeden Wert im Array verarbeitet und ihn in einer Aufzählung auflistet. Sie müssen zu diesem Zeitpunkt noch nichts über Arrays oder Schleifen verstehen — diese werden in zukünftigen Artikeln erklärt. Alles, was Sie tun müssen, ist in jedem Fall den Code zu schreiben, der die Strings in dem Format ausgibt, das wir wünschen.

Öffnen Sie jedes Beispiel im MDN Playground mit der **"Play"**-Schaltfläche oben im Live-Beispiel und befolgen Sie dann die Anweisungen, um das Problem zu lösen. Wenn Sie nicht weiterkommen, können Sie die Lösungen unter dem Live-Beispiel in jedem Fall ansehen.

Sie können die "Reset"-Schaltfläche im MDN Playground verwenden, um den Code zurückzusetzen, falls Sie einen Fehler machen und ihn nicht mehr zum Laufen bringen können.

### Grußnachrichten filtern

In der ersten Übung beginnen wir einfach — wir haben ein Array mit Grußkarten-Nachrichten, aber wir möchten sie so sortieren, dass nur die Weihnachtsnachrichten aufgelistet werden. Füllen Sie dazu einen Konditionstest innerhalb der `if ()`-Struktur aus, um jeden String zu testen und ihn nur dann in die Liste aufzunehmen, wenn es sich um eine Weihnachtsnachricht handelt.

Denken Sie darüber nach, wie Sie testen könnten, ob die Nachricht in jedem Fall eine Weihnachtsnachricht ist. Welcher String ist in all diesen Nachrichten enthalten, und welche Methode könnten Sie verwenden, um zu testen, ob er vorhanden ist?

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

Ihr fertiger JavaScript-Code sollte so aussehen:

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

### Groß- und Kleinschreibung korrigieren

Diese Übung enthält die Namen von Städten im Vereinigten Königreich, aber die Groß- und Kleinschreibung ist völlig durcheinander. Wir möchten, dass Sie sie so ändern, dass sie alle klein geschrieben sind, mit Ausnahme eines großen ersten Buchstabens. Eine gute Möglichkeit, dies zu tun, ist:

1. Konvertieren Sie den gesamten String, der in der Variablen `city` enthalten ist, in Kleinbuchstaben und speichern Sie ihn in einer neuen Variablen.
2. Greifen Sie auf den ersten Buchstaben des Strings in dieser neuen Variablen zu und speichern Sie ihn in einer weiteren Variablen.
3. Verwenden Sie diese letzte Variable als Teilzeichenkette, um den ersten Buchstaben des Kleinbuchstaben-Strings durch den ersten Buchstaben des Kleinbuchstaben-Strings, geändert in Großbuchstaben, zu ersetzen. Speichern Sie das Ergebnis dieses Ersetzungsprozesses in einer weiteren neuen Variablen.
4. Ändern Sie den Wert der Variablen `result`, damit sie dem Endergebnis entspricht, nicht der `city`.

> [!NOTE]
> Ein Hinweis — die Parameter der String-Methoden müssen keine String-Literale sein; sie können auch Variablen oder sogar Variablen mit einer Methode, die darauf aufgerufen wird, sein.

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

Ihr fertiger JavaScript-Code sollte so aussehen:

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

In dieser letzten Übung enthält das Array Strings mit Informationen über Bahnhöfe im Norden Englands. Die Strings sind Datenposten, die den dreibuchstabigen Bahnhofscode, gefolgt von einigen maschinenlesbaren Daten, gefolgt von einem Semikolon, gefolgt vom menschenlesbaren Stationsnamen enthalten. Zum Beispiel:

```plain
MAN675847583748sjt567654;Manchester Piccadilly
```

Wir möchten den Bahnhofscode und den Namen extrahieren und sie in einem String mit der folgenden Struktur zusammenfügen:

```plain
MAN: Manchester Piccadilly
```

Wir empfehlen Ihnen, es so zu tun:

1. Extrahieren Sie den dreibuchstabigen Bahnhofscode und speichern Sie ihn in einer neuen Variablen.
2. Finden Sie die Zeichenindexnummer des Semikolons heraus.
3. Extrahieren Sie den menschenlesbaren Stationsnamen anhand der Semikolon-Zeichenindexnummer als Referenzpunkt und speichern Sie ihn in einer neuen Variablen.
4. Verkettung der beiden neuen Variablen und eines String-Literals, um den finalen String zu erzeugen.
5. Ändern Sie den Wert der Variablen `result` auf den finalen String, nicht den `station`.

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

Ihr fertiger JavaScript-Code sollte so aussehen:

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
  const semiColon = station.indexOf(";");
  const name = station.slice(semiColon + 1);
  const result = `${code}: ${name}`;
  const listItem = document.createElement("li");
  listItem.textContent = result;
  list.appendChild(listItem);
}
```

</details>

## Zusammenfassung

Sie können nicht leugnen, dass es sehr wichtig ist, in der Lage zu sein, Worte und Sätze in der Programmierung zu handhaben — insbesondere in JavaScript, da Websites sich darum drehen, mit Menschen zu kommunizieren. Dieser Artikel hat Ihnen die Grundlagen vermittelt, die Sie zum aktuellen Zeitpunkt über das Manipulieren von Strings wissen müssen. Dies sollte Ihnen gute Dienste leisten, während Sie in komplexere Themen eintauchen.

Im nächsten Artikel werden wir Ihnen einige Tests geben, die Sie verwenden können, um zu überprüfen, wie gut Sie die Informationen, die wir Ihnen über Strings und String-Methoden bereitgestellt haben, verstanden und behalten haben.

{{PreviousMenuNext("Learn_web_development/Core/Scripting/Strings", "Learn_web_development/Core/Scripting/Test_your_skills/Strings", "Learn_web_development/Core/Scripting")}}
