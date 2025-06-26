---
title: Nützliche String-Methoden
short-title: String methods
slug: Learn_web_development/Core/Scripting/Useful_string_methods
l10n:
  sourceCommit: d0ed4906719465102739e604bdb35213fb19f251
---

{{PreviousMenuNext("Learn_web_development/Core/Scripting/Strings", "Learn_web_development/Core/Scripting/Arrays", "Learn_web_development/Core/Scripting")}}

Jetzt, da wir uns die Grundlagen von Strings angesehen haben, lassen Sie uns einen Gang höher schalten und darüber nachdenken, welche nützlichen Operationen wir mit eingebauten Methoden an Strings durchführen können, wie zum Beispiel die Länge einer Textzeichenfolge zu finden, Strings zu verbinden und zu trennen, ein Zeichen in einer Zeichenkette durch ein anderes zu ersetzen und mehr.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>Ein Verständnis von <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a> und den <a href="/de/docs/Learn_web_development/Core/Styling_basics">Grundlagen von CSS</a>. Kenntnis der <a href="/de/docs/Learn_web_development/Core/Scripting/Strings">String-Grundlagen</a>.</td>
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

Die meisten Werte können in JavaScript so verwendet werden, als ob sie Objekte wären. Wenn Sie beispielsweise einen String erstellen, indem Sie

```js
const string = "This is my string";
```

verwenden, ist die Variable selbst zwar kein Objekt, aber sie hat dennoch eine große Anzahl von Eigenschaften und Methoden zur Verfügung, da sie als Objekt verwendet werden kann, wenn man auf Eigenschaften zugreift. Sie können dies sehen, wenn Sie auf die {{jsxref("String")}}-Objektseite gehen und die Liste an der Seite der Seite nach unten schauen!

**Keine Sorge, bevor Ihr Gehirn anfängt zu rauchen!** Sie müssen wirklich nicht über die meisten dieser Dinge früh in Ihrem Lernprozess Bescheid wissen. Aber es gibt einige, die Sie möglicherweise ziemlich oft verwenden werden, die wir uns hier ansehen werden.

Lassen Sie uns einige Beispiele in die [Entwicklertools des Browsers](/de/docs/Learn_web_development/Howto/Tools_and_setup/What_are_browser_developer_tools) eingeben.

## Die Länge eines Strings finden

Das ist einfach — Sie verwenden die {{jsxref("String.prototype.length", "length")}}-Eigenschaft. Versuchen Sie, die folgenden Zeilen einzugeben:

```js
const browserType = "mozilla";
browserType.length;
```

Dies sollte die Zahl 7 zurückgeben, weil "mozilla" 7 Zeichen lang ist. Dies ist aus vielen Gründen nützlich; beispielsweise möchten Sie die Längen einer Reihe von Namen herausfinden, damit Sie sie der Länge nach anzeigen oder dem Benutzer mitteilen können, dass ein Benutzername, den er in ein Formularfeld eingegeben hat, zu lang ist, wenn er eine bestimmte Länge überschreitet.

## Abrufen eines bestimmten String-Zeichens

In ähnlicher Weise können Sie jedes Zeichen in einer Zeichenkette zurückgeben, indem Sie die **eckige Klammernotation** verwenden — das bedeutet, dass Sie eckige Klammern (`[]`) am Ende Ihres Variablennamens einschließen. Innerhalb der eckigen Klammern geben Sie die Zahl des Zeichens an, das Sie zurückgeben möchten, sodass Sie beispielsweise, um den ersten Buchstaben abzurufen, dies tun würden:

```js
browserType[0];
```

Denken Sie daran: Computer zählen ab 0, nicht ab 1!

Um das letzte Zeichen _einer beliebigen_ Zeichenfolge abzurufen, könnten wir die folgende Zeile verwenden, indem wir diese Technik mit der oben betrachteten `length`-Eigenschaft kombinieren:

```js
browserType[browserType.length - 1];
```

Die Länge der Zeichenkette "mozilla" ist 7, aber da die Zählung bei 0 beginnt, befindet sich das letzte Zeichen an Position 6; die Verwendung von `length-1` liefert uns das letzte Zeichen.

## Überprüfen, ob ein String ein Substring enthält

Manchmal möchten Sie herausfinden, ob ein kleinerer String in einem größeren vorhanden ist (wir sagen im Allgemeinen, ob ein Substring in einem String vorhanden ist). Dies kann mit der {{jsxref("String.prototype.includes()", "includes()")}}-Methode erfolgen, die ein einzelnes {{Glossary("parameter", "Parameter")}} — den Substring, den Sie durchsuchen möchten, entgegennimmt.

Sie gibt `true` zurück, wenn die Zeichenkette den Substring enthält, und `false`, wenn dies nicht der Fall ist.

```js
const browserType = "mozilla";

if (browserType.includes("zilla")) {
  console.log("Found zilla!");
} else {
  console.log("No zilla here!");
}
```

Oft möchten Sie wissen, ob eine Zeichenkette mit einem bestimmten Substring beginnt oder endet. Dies ist ein ausreichendes Bedürfnis, dass es zwei spezielle Methoden dafür gibt: {{jsxref("String.prototype.startsWith()", "startsWith()")}} und {{jsxref("String.prototype.endsWith()", "endsWith()")}}:

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

Sie können die Position eines Substrings in einer größeren Zeichenkette mit der {{jsxref("String.prototype.indexOf()", "indexOf()")}}-Methode finden. Diese Methode nimmt zwei {{Glossary("parameter", "Parameter")}} – den Substring, den Sie durchsuchen möchten, und einen optionalen Parameter, der den Startpunkt der Suche angibt.

Wenn der String den Substring enthält, gibt `indexOf()` den Index des ersten Vorkommens des Substrings zurück. Wenn der String den Substring nicht enthält, gibt `indexOf()` `-1` zurück.

```js
const tagline = "MDN - Resources for developers, by developers";
console.log(tagline.indexOf("developers")); // 20
```

Beginnend bei `0`, wenn Sie die Anzahl der Zeichen (einschließlich des Leerzeichens) ab dem Anfang der Zeichenkette zählen, befindet sich das erste Vorkommen des Substrings `"developers"` an Index `20`.

```js
console.log(tagline.indexOf("x")); // -1
```

Dies hingegen gibt `-1` zurück, da der Buchstabe `x` nicht in der Zeichenkette vorhanden ist.

Wenn Sie nun wissen, wie Sie das erste Vorkommen eines Substrings finden, wie gehen Sie vor, um nachfolgende Vorkommen zu finden? Sie können dies tun, indem Sie einen Wert übergeben, der größer als der Index des vorherigen Vorkommens ist, als zweiten Parameter für die Methode.

```js
const firstOccurrence = tagline.indexOf("developers");
const secondOccurrence = tagline.indexOf("developers", firstOccurrence + 1);

console.log(firstOccurrence); // 20
console.log(secondOccurrence); // 35
```

Hier sagen wir der Methode, dass sie den Substring `"developers"` ab Index `21` (`erstes Vorkommen + 1`) durchsuchen soll, und sie gibt den Index `35` zurück.

## Einen Substring aus einem String extrahieren

Sie können einen Substring aus einem String mithilfe der {{jsxref("String.prototype.slice()", "slice()")}}-Methode extrahieren. Sie übergeben:

- den Index, bei dem das Extrahieren beginnen soll
- den Index, bei dem das Extrahieren enden soll. Dieser ist exklusiv, was bedeutet, dass das Zeichen an diesem Index nicht im extrahierten Substring enthalten ist.

Zum Beispiel:

```js
const browserType = "mozilla";
console.log(browserType.slice(1, 4)); // "ozi"
```

Das Zeichen an Index `1` ist `"o"`, und das Zeichen an Index 4 ist `"l"`. Also extrahieren wir alle Zeichen, die bei `"o"` beginnen und direkt vor `"l"` enden, was uns `"ozi"` ergibt.

Wenn Sie wissen, dass Sie alle verbleibenden Zeichen in einer Zeichenkette nach einem bestimmten Zeichen extrahieren möchten, müssen Sie den zweiten Parameter nicht angeben. Stattdessen müssen Sie nur die Zeichenposition angeben, von der aus Sie die verbleibenden Zeichen in einer Zeichenkette extrahieren möchten. Versuchen Sie das Folgende:

```js
browserType.slice(2); // "zilla"
```

Dies gibt `"zilla"` zurück — dies liegt daran, dass sich die Zeichenposition von 2 auf den Buchstaben `"z"` bezieht, und da Sie keinen zweiten Parameter angegeben haben, war der zurückgegebene Substring alle verbleibenden Zeichen in der Zeichenkette.

> [!NOTE] > `slice()` hat auch andere Optionen; studieren Sie die {{jsxref("String.prototype.slice()", "slice()")}}-Seite, um zu sehen, was Sie noch herausfinden können.

## Ändern der Groß-/Kleinschreibung

Die String-Methoden {{jsxref("String.prototype.toLowerCase()", "toLowerCase()")}} und {{jsxref("String.prototype.toUpperCase()", "toUpperCase()")}} nehmen eine Zeichenkette und konvertieren alle Zeichen in Klein- bzw. Großbuchstaben. Dies kann nützlich sein, wenn Sie beispielsweise alle vom Benutzer eingegebenen Daten normalisieren möchten, bevor Sie sie in einer Datenbank speichern.

Lassen Sie uns die folgenden Zeilen eingeben, um zu sehen, was passiert:

```js
const radData = "My NaMe Is MuD";
console.log(radData.toLowerCase());
console.log(radData.toUpperCase());
```

## Aktualisieren von Teilen eines Strings

Sie können einen Substring in einem String durch einen anderen Substring mit der {{jsxref("String.prototype.replace()", "replace()")}}-Methode ersetzen.

In diesem Beispiel geben wir zwei Parameter an — den String, den wir ersetzen möchten, und den String, durch den wir ihn ersetzen möchten:

```js
const browserType = "mozilla";
const updated = browserType.replace("moz", "van");

console.log(updated); // "vanilla"
console.log(browserType); // "mozilla"
```

Beachten Sie, dass `replace()`, wie viele String-Methoden, nicht den String ändert, auf den es aufgerufen wurde, sondern einen neuen String zurückgibt. Wenn Sie die ursprüngliche Variable `browserType` aktualisieren möchten, müssten Sie so etwas tun:

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

## Lernherausforderungen

In diesem Abschnitt lassen wir Sie einige Übungen zur String-Manipulation ausprobieren. In jedem der unten stehenden Übungen haben wir ein Array von Strings und eine Schleife, die jeden Wert im Array verarbeitet und ihn in einer Aufzählungsliste anzeigt. Sie müssen Arrays oder Schleifen jetzt nicht verstehen — diese werden in zukünftigen Artikeln erklärt. Alles, was Sie in jedem Fall tun müssen, ist, den Code zu schreiben, der die Strings in dem gewünschten Format ausgibt.

Öffnen Sie jedes Beispiel im MDN Playground mit dem **"Play"**-Button oben im Live-Beispiel und befolgen Sie die Anweisungen, um das Problem zu lösen. Wenn Sie stecken bleiben, können Sie die Lösungen unter dem Live-Beispiel in jedem Fall anzeigen.

Sie können den „Zurücksetzen“-Button im MDN Playground verwenden, um den Code zurückzusetzen, falls Sie einen Fehler machen und ihn nicht mehr zum Laufen bringen können.

### Filterung von Grußnachrichten

Im ersten Übungsteil beginnen wir einfach — wir haben ein Array von Grußkartenbotschaften, aber wir möchten sie sortieren, um nur die Weihnachtsnachrichten aufzulisten. Wir möchten, dass Sie einen Bedingungstest innerhalb der `if ()`-Struktur ausfüllen, um jede Zeichenkette zu testen und sie nur in der Liste auszugeben, wenn sie eine Weihnachtsnachricht ist.

Überlegen Sie, wie Sie testen könnten, ob die Nachricht in jedem Fall eine Weihnachtsnachricht ist. Welche Zeichenkette ist in all diesen Nachrichten vorhanden, und welche Methode könnten Sie verwenden, um zu testen, ob sie vorhanden ist?

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

Ihr fertiggestellter JavaScript-Code sollte wie folgt aussehen:

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

### Korrektur der Großschreibung

Diese Übung enthält die Namen von Städten im Vereinigten Königreich, aber die Groß-/Kleinschreibung ist völlig durcheinander. Wir möchten, dass Sie sie so ändern, dass sie alle klein geschrieben sind, außer dem ersten Buchstaben, der groß geschrieben sein soll. Eine gute Möglichkeit, dies zu tun, besteht darin:

1. Konvertieren Sie die gesamte Zeichenkette, die in der Variablen `city` enthalten ist, in Kleinbuchstaben und speichern Sie sie in einer neuen Variablen.
2. Holen Sie sich den ersten Buchstaben der Zeichenkette in dieser neuen Variablen und speichern Sie ihn in einer anderen Variablen.
3. Verwenden Sie diese letzte Variable als Substring, um den ersten Buchstaben der Kleinbuchstabenzeichenfolge durch den ersten Buchstaben der Kleinbuchstabenzeichenfolge zu ersetzen, der in Großbuchstaben geändert wurde. Speichern Sie das Ergebnis dieses Ersetzungsverfahrens in einer weiteren neuen Variablen.
4. Ändern Sie den Wert der Variablen `result` so, dass er dem Endergebnis entspricht, nicht dem `city`.

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

Ihr fertiger JavaScript-Code sollte wie folgt aussehen:

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

### Neue Zeichenketten aus alten Teilen erstellen

In dieser letzten Übung enthält das Array Zeichenfolgen mit Informationen über Zugstationen im Norden Englands. Die Zeichenfolgen sind Datenelemente, die den dreistelligen Stationscode enthalten, gefolgt von einigen maschinenlesbaren Daten, gefolgt von einem Semikolon und dann dem menschenlesbaren Stationsnamen. Zum Beispiel:

```plain
MAN675847583748sjt567654;Manchester Piccadilly
```

Wir möchten den Stationscode und den Namen extrahieren und sie zusammen in einer Zeichenkette mit der folgenden Struktur zusammenfügen:

```plain
MAN: Manchester Piccadilly
```

Wir empfehlen, es so zu machen:

1. Extrahieren Sie den dreistelligen Stationscode und speichern Sie ihn in einer neuen Variablen.
2. Finden Sie die Zeichenindexnummer des Semikolons.
3. Extrahieren Sie den menschenlesbaren Stationsnamen unter Verwendung der Zeichenindexnummer des Semikolons als Referenzpunkt und speichern Sie ihn in einer neuen Variablen.
4. Verbinden Sie die beiden neuen Variablen und einen Zeichenfolgenliteralen, um die endgültige Zeichenkette zu erstellen.
5. Ändern Sie den Wert der Variable `result` so, dass sie der endgültigen Zeichenkette entspricht, nicht der `station`.

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

Ihr fertiger JavaScript-Code sollte wie folgt aussehen:

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

## Testen Sie Ihre Fähigkeiten!

Sie haben das Ende dieses Artikels erreicht, aber können Sie sich an die wichtigsten Informationen erinnern? Sie können einige weitere Tests finden, um zu überprüfen, ob Sie diese Informationen behalten haben, bevor Sie fortfahren — siehe [Testen Sie Ihre Fähigkeiten: Strings](/de/docs/Learn_web_development/Core/Scripting/Test_your_skills/Strings).

## Schlussfolgerung

Sie können der Tatsache nicht entkommen, dass es sehr wichtig ist, in der Programmierung mit Worten und Sätzen umzugehen — insbesondere in JavaScript, da es bei Websites darum geht, mit Menschen zu kommunizieren. Dieser Artikel hat Ihnen die Grundlagen vermittelt, die Sie über die Manipulation von Strings momentan wissen müssen. Dies sollte Ihnen gut dienen, wenn Sie in Zukunft komplexere Themen angehen. Als nächstes werden wir uns den letzten großen Datentyp ansehen, auf den wir uns kurzfristig konzentrieren müssen — Arrays.

{{PreviousMenuNext("Learn_web_development/Core/Scripting/Strings", "Learn_web_development/Core/Scripting/Arrays", "Learn_web_development/Core/Scripting")}}
