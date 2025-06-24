---
title: Nützliche Zeichenfolgenmethoden
short-title: String methods
slug: Learn_web_development/Core/Scripting/Useful_string_methods
l10n:
  sourceCommit: abe8cffb30e5153747bb027cb0b4e532981a093c
---

{{PreviousMenuNext("Learn_web_development/Core/Scripting/Strings", "Learn_web_development/Core/Scripting/Arrays", "Learn_web_development/Core/Scripting")}}

Nachdem wir uns die Grundlagen von Zeichenfolgen angesehen haben, lassen Sie uns einen Gang höher schalten und überlegen, welche nützlichen Operationen wir mit eingebauten Methoden an Zeichenfolgen durchführen können, wie zum Beispiel die Länge einer Textkette zu finden, Zeichenfolgen zu verbinden und aufzuteilen, ein Zeichen in einer Zeichenfolge durch ein anderes zu ersetzen und mehr.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>Ein Verständnis von <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a> und den <a href="/de/docs/Learn_web_development/Core/Styling_basics">Grundlagen von CSS</a>. Kenntnisse der <a href="/de/docs/Learn_web_development/Core/Scripting/Strings">Grundlagen von Zeichenfolgen</a>.</td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
          Zeichenfolgenmanipulation durch Nutzung gängiger Eigenschaften und Methoden, die in JavaScript integriert sind.
      </td>
    </tr>
  </tbody>
</table>

## Zeichenfolgen als Objekte

Die meisten Werte können in JavaScript genutzt werden, als ob sie Objekte wären. Wenn Sie beispielsweise eine Zeichenfolge erstellen, indem Sie

```js
const string = "This is my string";
```

verwenden, ist die Variable selbst zwar kein Objekt, hat jedoch aufgrund ihrer Verwendbarkeit als Objekt beim Zugriff auf Eigenschaften viele Eigenschaften und Methoden zur Verfügung. Dies können Sie sehen, wenn Sie auf die Seite des {{jsxref("String")}}-Objekts gehen und die Liste an der Seite der Seite anschauen!

**Jetzt, bevor Ihr Gehirn anfängt zu schmelzen, keine Sorge!** Sie müssen zu Beginn nicht die meisten davon kennen. Aber es gibt einige, die Sie möglicherweise recht häufig verwenden werden, die wir uns hier ansehen werden.

Lassen Sie uns einige Beispiele in die [Browser-Entwicklungskonsole](/de/docs/Learn_web_development/Howto/Tools_and_setup/What_are_browser_developer_tools) eingeben.

## Die Länge einer Zeichenfolge ermitteln

Das ist einfach — Sie verwenden die {{jsxref("String.prototype.length", "length")}}-Eigenschaft. Versuchen Sie, die folgenden Zeilen einzugeben:

```js
const browserType = "mozilla";
browserType.length;
```

Dies sollte die Zahl 7 zurückgeben, da "mozilla" 7 Zeichen lang ist. Dies ist aus vielen Gründen nützlich; Zum Beispiel möchten Sie vielleicht die Längen einer Reihe von Namen herausfinden, um sie nach Länge anzuzeigen, oder einem Benutzer mitteilen, dass ein Benutzername, den er in ein Formularfeld eingegeben hat, zu lang ist, wenn er über eine bestimmte Länge hinausgeht.

## Ein bestimmtes Zeichen einer Zeichenfolge abrufen

In ähnlicher Weise können Sie ein beliebiges Zeichen innerhalb einer Zeichenfolge zurückgeben, indem Sie die **Klammernotation** verwenden — das bedeutet, dass Sie Klammern (`[]`) an das Ende Ihres Variablennamens anhängen. Innerhalb der Klammern geben Sie die Nummer des Zeichens an, das Sie zurückgeben möchten. Um beispielsweise den ersten Buchstaben abzurufen, würden Sie dies tun:

```js
browserType[0];
```

Denken Sie daran: Computer zählen ab 0, nicht ab 1!

Um das letzte Zeichen einer _beliebigen_ Zeichenfolge abzurufen, könnten wir die folgende Zeile verwenden, indem wir diese Technik mit der oben gezeigten `length`-Eigenschaft kombinieren:

```js
browserType[browserType.length - 1];
```

Die Länge der Zeichenfolge "mozilla" ist 7, aber da das Zählen bei 0 beginnt, befindet sich die Position des letzten Zeichens bei 6. Mit `length-1` erhalten wir das letzte Zeichen.

## Testen, ob eine Zeichenfolge eine Teilzeichenfolge enthält

Manchmal möchten Sie herausfinden, ob eine kleinere Zeichenfolge in einer größeren vorhanden ist (wir sagen allgemein, _ob eine Teilzeichenfolge in einer Zeichenfolge vorhanden ist_). Dies kann mit der Methode {{jsxref("String.prototype.includes()", "includes()")}} erreicht werden, die einen einzigen {{Glossary("parameter", "Parameter")}} benötigt – die Teilzeichenfolge, die Sie suchen möchten.

Sie gibt `true` zurück, wenn die Zeichenfolge die Teilzeichenfolge enthält, und `false` anders.

```js
const browserType = "mozilla";

if (browserType.includes("zilla")) {
  console.log("Found zilla!");
} else {
  console.log("No zilla here!");
}
```

Oft möchten Sie wissen, ob eine Zeichenfolge mit einer bestimmten Teilzeichenfolge beginnt oder endet. Dies ist ein häufig ausreichendes Bedürfnis, dass es zwei spezielle Methoden dafür gibt: {{jsxref("String.prototype.startsWith()", "startsWith()")}} und {{jsxref("String.prototype.endsWith()", "endsWith()")}}:

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

## Die Position einer Teilzeichenfolge in einer Zeichenfolge finden

Sie können die Position einer Teilzeichenfolge innerhalb einer größeren Zeichenfolge mit der Methode {{jsxref("String.prototype.indexOf()", "indexOf()")}} finden. Diese Methode nimmt zwei {{Glossary("parameter", "Parameter")}} – die Teilzeichenfolge, die Sie suchen möchten, und einen optionalen Parameter, der den Startpunkt der Suche angibt.

Wenn die Zeichenfolge die Teilzeichenfolge enthält, gibt `indexOf()` den Index des ersten Vorkommens der Teilzeichenfolge zurück. Wenn die Zeichenfolge die Teilzeichenfolge nicht enthält, gibt `indexOf()` `-1` zurück.

```js
const tagline = "MDN - Resources for developers, by developers";
console.log(tagline.indexOf("developers")); // 20
```

Wenn Sie ab `0` zählen, zählen Sie die Anzahl der Zeichen (einschließlich der Leerzeichen) vom Anfang der Zeichenfolge, befindet sich das erste Vorkommen der Teilzeichenfolge `"developers"` an Index `20`.

```js
console.log(tagline.indexOf("x")); // -1
```

Dies hingegen gibt `-1` zurück, da das Zeichen `x` nicht in der Zeichenfolge vorhanden ist.

Wie finden Sie nun, da Sie wissen, wie Sie das erste Vorkommen einer Teilzeichenfolge finden, die nachfolgenden Vorkommen? Sie können dies tun, indem Sie einen Wert angeben, der größer ist als der Index des vorherigen Vorkommens als zweiten Parameter der Methode.

```js
const firstOccurrence = tagline.indexOf("developers");
const secondOccurrence = tagline.indexOf("developers", firstOccurrence + 1);

console.log(firstOccurrence); // 20
console.log(secondOccurrence); // 35
```

Hier sagen wir der Methode, dass sie nach der Teilzeichenfolge `"developers"` suchen soll, beginnend bei Index `21` (`erstesVorkommen + 1`), und sie gibt den Index `35` zurück.

## Eine Teilzeichenfolge aus einer Zeichenfolge extrahieren

Sie können eine Teilzeichenfolge aus einer Zeichenfolge mit der Methode {{jsxref("String.prototype.slice()", "slice()")}} extrahieren. Sie geben an:

- den Index, bei dem die Extraktion beginnt
- den Index, bei dem die Extraktion endet. Dies ist exklusiv, was bedeutet, dass das Zeichen an diesem Index nicht in der extrahierten Teilzeichenfolge enthalten ist.

Zum Beispiel:

```js
const browserType = "mozilla";
console.log(browserType.slice(1, 4)); // "ozi"
```

Das Zeichen an Index `1` ist `"o"`, und das Zeichen an Index 4 ist `"l"`. Also extrahieren wir alle Zeichen, beginnend bei `"o"` und endend direkt vor `"l"`, was uns `"ozi"` gibt.

Wenn Sie wissen, dass Sie alle verbleibenden Zeichen in einer Zeichenfolge nach einem bestimmten Zeichen extrahieren möchten, müssen Sie nicht den zweiten Parameter angeben. Geben Sie stattdessen nur die Zeichenposition an, von der aus Sie die restlichen Zeichen in einer Zeichenfolge extrahieren möchten. Versuchen Sie Folgendes:

```js
browserType.slice(2); // "zilla"
```

Dies gibt `"zilla"` zurück – das liegt daran, dass die Zeichenposition von 2 der Buchstabe `"z"` ist und weil Sie keinen zweiten Parameter angegeben haben, wurde die zurückgegebene Teilzeichenfolge alle verbleibenden Zeichen in der Zeichenfolge.

> [!NOTE] > `slice()` hat auch andere Optionen; lesen Sie die Seite {{jsxref("String.prototype.slice()", "slice()")}}, um herauszufinden, was Sie noch entdecken können.

## Groß- und Kleinschreibung ändern

Die Methoden {{jsxref("String.prototype.toLowerCase()", "toLowerCase()")}} und {{jsxref("String.prototype.toUpperCase()", "toUpperCase()")}} konvertieren alle Zeichen einer Zeichenfolge jeweils in Klein- oder Großbuchstaben. Dies kann nützlich sein, wenn Sie beispielsweise alle Benutzereingabedaten normalisieren möchten, bevor Sie sie in einer Datenbank speichern.

Lassen Sie uns die folgenden Zeilen eingeben, um zu sehen, was passiert:

```js
const radData = "My NaMe Is MuD";
console.log(radData.toLowerCase());
console.log(radData.toUpperCase());
```

## Teile einer Zeichenfolge aktualisieren

Sie können eine Teilzeichenfolge innerhalb einer Zeichenfolge mit einer anderen Teilzeichenfolge ersetzen, indem Sie die Methode {{jsxref("String.prototype.replace()", "replace()")}} verwenden.

In diesem Beispiel geben wir zwei Parameter an – die Zeichenfolge, die wir ersetzen möchten, und die Zeichenfolge, mit der wir sie ersetzen möchten:

```js
const browserType = "mozilla";
const updated = browserType.replace("moz", "van");

console.log(updated); // "vanilla"
console.log(browserType); // "mozilla"
```

Beachten Sie, dass `replace()`, wie viele Zeichenfolgenmethoden, die Zeichenfolge, auf der es aufgerufen wurde, nicht ändert, sondern eine neue Zeichenfolge zurückgibt. Wenn Sie die ursprüngliche Variable `browserType` aktualisieren möchten, müssten Sie etwas wie dies tun:

```js
let browserType = "mozilla";
browserType = browserType.replace("moz", "van");

console.log(browserType); // "vanilla"
```

Beachten Sie auch, dass wir jetzt `browserType` mit `let` anstelle von `const` deklarieren müssen, da wir es neu zuweisen.

Seien Sie sich bewusst, dass `replace()` in dieser Form nur das erste Vorkommen der Teilzeichenfolge ändert. Wenn Sie alle Vorkommen ändern möchten, können Sie {{jsxref("String.prototype.replaceAll()", "replaceAll()")}} verwenden:

```js
let quote = "To be or not to be";
quote = quote.replaceAll("be", "code");

console.log(quote); // "To code or not to code"
```

## Lernherausforderungen

In diesem Abschnitt werden wir Ihnen die Gelegenheit geben, einige Codes zur Manipulation von Zeichenfolgen zu schreiben. In jeder der nachstehenden Übungen haben wir ein Array von Zeichenfolgen und eine Schleife, die jeden Wert im Array verarbeitet und ihn in einer Liste mit Aufzählungszeichen anzeigt. Sie müssen jetzt nichts über Arrays oder Schleifen verstehen — diese werden in zukünftigen Artikeln erklärt. Alles, was Sie in jedem Fall tun müssen, ist, den Code zu schreiben, der die Zeichenfolgen im gewünschten Format ausgibt.

Öffnen Sie jedes Beispiel im MDN Playground mit der Schaltfläche **"Play"** oben im Live-Beispiel, und folgen Sie dann den Anweisungen, um das Problem zu lösen. Wenn Sie feststecken, können Sie die Lösungen unter dem Live-Beispiel in jedem Fall anzeigen.

Sie können die Schaltfläche "Reset" im MDN Playground verwenden, um den Code zurückzusetzen, wenn Sie einen Fehler machen und ihn nicht wieder zum Laufen bringen können.

### Grußnachrichten filtern

In der ersten Übung beginnen wir einfach — wir haben ein Array von Grußkarten-Nachrichten, aber wir möchten sie sortieren, um nur die Weihnachtsnachrichten aufzulisten. Wir möchten, dass Sie einen bedingten Test im `if ()`-Struktur ausfüllen, um jede Zeichenfolge zu testen und nur dann in der Liste anzuzeigen, wenn sie eine Weihnachtsnachricht ist.

Überlegen Sie, wie Sie testen könnten, ob die Nachricht in jedem Fall eine Weihnachtsnachricht ist. Welche Zeichenfolge ist in all diesen Nachrichten enthalten, und welche Methode könnten Sie verwenden, um zu testen, ob sie vorhanden ist?

```html hidden live-sample___string-methods-1
<ul></ul>
```

```js live-sample___string-methods-1
const list = document.querySelector("ul");
const greetings = [
  "Happy Birthday!",
  "Merry Christmas my love",
  "A happy Christmas to all the family",
  "You\'re all I want for Christmas",
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

Diese Übung zeigt die Namen von Städten im Vereinigten Königreich, aber die Großschreibung ist völlig durcheinander. Wir möchten, dass Sie sie so ändern, dass sie alle in Kleinbuchstaben sind, mit Ausnahme eines großen Anfangsbuchstabens. Eine gute Möglichkeit, dies zu tun, ist:

1. Konvertieren Sie die gesamte Zeichenfolge, die in der Variablen `city` enthalten ist, in Kleinbuchstaben und speichern Sie sie in einer neuen Variablen.
2. Nehmen Sie den ersten Buchstaben der Zeichenfolge in dieser neuen Variablen und speichern Sie ihn in einer anderen Variablen.
3. Verwenden Sie diese letzte Variable als Teilzeichenfolge, um den ersten Buchstaben der Kleinbuchstaben-Zeichenfolge durch den ersten Buchstaben der Kleinbuchstaben-Zeichenfolge, in Großbuchstaben umgewandelt, zu ersetzen. Speichern Sie das Ergebnis dieses Ersetzungsverfahrens in einer weiteren neuen Variablen.
4. Ändern Sie den Wert der `result`-Variablen, um dem Endergebnis zu entsprechen, nicht der `city`.

> [!NOTE]
> Ein Hinweis — die Parameter der Zeichenfolgenmethoden müssen keine Zeichenfolgenliterale sein; sie können auch Variablen oder sogar Variablen mit einer Methode, die darauf aufgerufen wird, sein.

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

### Neue Zeichenfolgen aus alten Teilen erstellen

In dieser letzten Übung enthält das Array Zeichenfolgen mit Informationen über Bahnhöfe im Norden Englands. Die Zeichenfolgen sind Dateneinträge, die den dreibuchstabigen Bahnhofscode, gefolgt von maschinenlesbaren Daten, gefolgt von einem Semikolon und dann dem menschenlesbaren Stationsnamen enthalten. Zum Beispiel:

```plain
MAN675847583748sjt567654;Manchester Piccadilly
```

Wir möchten den Bahnhofscode und Namen extrahieren und sie in einer Zeichenfolge mit folgender Struktur zusammenstellen:

```plain
MAN: Manchester Piccadilly
```

Wir würden empfehlen, es wie folgt zu tun:

1. Extrahieren Sie den dreibuchstabigen Bahnhofscode und speichern Sie ihn in einer neuen Variablen.
2. Finden Sie die Zeichenindexnummer des Semikolons.
3. Extrahieren Sie den menschenlesbaren Stationsnamen unter Verwendung der Semikolon-Zeichenindexnummer als Bezugspunkt und speichern Sie ihn in einer neuen Variablen.
4. Verketten Sie die beiden neuen Variablen und ein Zeichenfolgenliteral, um die endgültige Zeichenfolge zu erstellen.
5. Ändern Sie den Wert der `result`-Variablen auf die endgültige Zeichenfolge, nicht die `station`.

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

Sie haben das Ende dieses Artikels erreicht, aber können Sie sich an die wichtigsten Informationen erinnern? Sie können einige weitere Tests finden, um zu überprüfen, ob Sie diese Informationen behalten haben, bevor Sie fortfahren – siehe [Testen Sie Ihre Fähigkeiten: Zeichenfolgen](/de/docs/Learn_web_development/Core/Scripting/Test_your_skills/Strings).

## Fazit

Sie können nicht vermeiden, dass es im Programmieren sehr wichtig ist, mit Wörtern und Sätzen umgehen zu können – insbesondere in JavaScript, da es bei Websites darum geht, mit Menschen zu kommunizieren. Dieser Artikel hat Ihnen die Grundlagen vermittelt, die Sie derzeit über die Manipulation von Zeichenfolgen wissen müssen. Dies sollte Ihnen gut dienen, während Sie sich mit komplexeren Themen in der Zukunft befassen. Als Nächstes werden wir uns den letzten wichtigen Datentyp ansehen, auf den wir uns kurzfristig konzentrieren müssen – Arrays.

{{PreviousMenuNext("Learn_web_development/Core/Scripting/Strings", "Learn_web_development/Core/Scripting/Arrays", "Learn_web_development/Core/Scripting")}}
