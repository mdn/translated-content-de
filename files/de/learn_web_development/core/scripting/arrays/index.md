---
title: Arrays
slug: Learn_web_development/Core/Scripting/Arrays
l10n:
  sourceCommit: 9d3d642daf9df9ece138fa39972edc5f7d6dcd6b
---

{{PreviousMenuNext("Learn_web_development/Core/Scripting/Test_your_skills/Strings", "Learn_web_development/Core/Scripting/Test_your_skills/Arrays", "Learn_web_development/Core/Scripting")}}

In dieser Lektion betrachten wir Arrays – eine elegante Methode zur Speicherung einer Liste von Datenobjekten unter einem einzigen Variablennamen. Hier sehen wir, warum dies nützlich ist, erkunden dann, wie man ein [array](/de/docs/Web/JavaScript/Reference/Global_Objects/Array) erstellt, Items in einem Array abruft, hinzufügt und entfernt und noch mehr.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>Grundkenntnisse in <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a> und den <a href="/de/docs/Learn_web_development/Core/Styling_basics">Grundlagen von CSS</a>. Vertrautheit mit grundlegenden Datentypen wie Zahlen und Zeichenfolgen, wie in den vorherigen Lektionen behandelt.</td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Was ein Array ist – eine Struktur, die eine Liste von Variablen enthält.</li>
          <li>Die Syntax von Arrays – <code>[a, b, c]</code> und die Zugriffssyntax, <code>myArray[x]</code>.</li>
          <li>Ändern von Array-Werten mit <code>myArray[x] = y</code>.</li>
          <li>Array-Manipulation mit gängigen Eigenschaften und Methoden wie <code>length</code>, <code>push()</code>, <code>pop()</code>, <code>join()</code> und <code>split()</code>.</li>
          <li>Fortgeschrittene Array-Methoden wie <code>forEach()</code>, <code>map()</code> und <code>filter()</code>.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Was ist ein Array?

Arrays werden allgemein als "listenartige Objekte" beschrieben; sie sind im Wesentlichen einzelne Objekte, die mehrere Werte in einer Liste enthalten. Array-Objekte können in Variablen gespeichert und ähnlich wie andere Werttypen behandelt werden, mit dem Unterschied, dass wir auf jeden Wert innerhalb der Liste einzeln zugreifen können und nützliche und effiziente Dinge mit der Liste tun können, z.B. sie durchlaufen und dieselbe Aktion für jeden Wert ausführen. Vielleicht haben wir eine Reihe von Produktobjekten und deren Preisen in einem Array gespeichert und wollen sie alle durchlaufen und auf einer Rechnung ausdrucken, während wir alle Preise zusammenrechnen und den Gesamtpreis unten ausgeben.

Ohne Arrays müssten wir jedes Objekt in einer separaten Variablen speichern und dann den Code, der das Drucken und Addieren übernimmt, für jedes Objekt einzeln aufrufen. Dies wäre viel aufwändiger zu schreiben, weniger effizient und anfälliger für Fehler. Wenn wir 10 Objekte zur Rechnung hinzufügen müssten, wäre es schon ärgerlich, aber was ist mit 100 Objekten oder 1000? Wir kommen später in diesem Artikel zu diesem Beispiel zurück.

Wie bei den vorherigen Artikeln, lassen Sie uns die grundlegenden Grundlagen von Arrays lernen, indem wir einige Beispiele in die [Entwicklerkonsole des Browsers](/de/docs/Learn_web_development/Howto/Tools_and_setup/What_are_browser_developer_tools) eingeben.

> [!NOTE]
> Scrimbas [Aside: Intro to arrays](https://scrimba.com/the-frontend-developer-career-path-c0j/~06e?via=mdn) scrim <sup>[_MDN Lernpartner_](/de/docs/MDN/Writing_guidelines/Learning_content#partner_links_and_embeds)</sup> bietet eine nützliche interaktive Einführung in Arrays mit Beispieldurchgängen und einer Herausforderung, um Ihr Wissen zu testen.

## Erstellen von Arrays

Arrays bestehen aus eckigen Klammern und durch Kommas getrennten Items.

1. Angenommen, wir möchten eine Einkaufsliste in einem Array speichern. Fügen Sie den folgenden Code in die Konsole ein:

   ```js
   const shopping = ["bread", "milk", "cheese", "hummus", "noodles"];
   console.log(shopping);
   ```

2. Im obigen Beispiel ist jedes Item eine Zeichenfolge, aber in einem Array können wir verschiedene Datentypen speichern – Zeichenfolgen, Zahlen, Objekte und sogar andere Arrays. Wir können auch Datentypen in einem einzigen Array mischen – wir müssen uns nicht darauf beschränken, nur Zahlen in einem Array zu speichern und in einem anderen nur Zeichenfolgen. Zum Beispiel:

   ```js
   const sequence = [1, 1, 2, 3, 5, 8, 13];
   const random = ["tree", 795, [0, 1, 2]];
   ```

3. Erstellen Sie vor dem Fortfahren einige Beispiel-Arrays.

## Die Länge eines Arrays ermitteln

Sie können die Länge eines Arrays (wie viele Objekte es enthält) auf genau dieselbe Weise ermitteln, wie Sie die Länge einer Zeichenfolge (in Zeichen) ermitteln – indem Sie die {{jsxref("Array.prototype.length","length")}}-Eigenschaft verwenden. Versuchen Sie Folgendes:

```js
const shopping = ["bread", "milk", "cheese", "hummus", "noodles"];
console.log(shopping.length); // 5
```

## Zugriff auf Array-Items und deren Veränderung

Arrays sind [indizierte Sammlungen](/de/docs/Web/JavaScript/Guide/Indexed_collections). Items in einem Array sind nummeriert, beginnend bei null. Diese Nummer wird als Index des Items bezeichnet. Das erste Item hat also den Index 0, das zweite den Index 1 und so weiter. Sie können auf einzelne Items im Array mit der Klammernotation und dem Index des Items zugreifen, ähnlich wie Sie [auf die Buchstaben in einer Zeichenfolge zugegriffen haben](/de/docs/Learn_web_development/Core/Scripting/Useful_string_methods#retrieving_a_specific_string_character).

1. Geben Sie Folgendes in Ihre Konsole ein:

   ```js
   const shopping = ["bread", "milk", "cheese", "hummus", "noodles"];
   console.log(shopping[0]);
   // returns "bread"
   ```

2. Sie können auch ein Item in einem Array ändern, indem Sie einem einzelnen Array-Item einen neuen Wert zuordnen. Probieren Sie dies:

   ```js
   const shopping = ["bread", "milk", "cheese", "hummus", "noodles"];
   shopping[0] = "tahini";
   console.log(shopping);
   // shopping will now return [ "tahini", "milk", "cheese", "hummus", "noodles" ]
   ```

   > [!NOTE]
   > Wir haben es schon gesagt, aber zur Erinnerung – JavaScript beginnt mit dem Indizieren von Arrays bei null!

3. Beachten Sie, dass ein Array innerhalb eines Arrays als mehrdimensionales Array bezeichnet wird. Sie können auf ein Item innerhalb eines Arrays zugreifen, das sich selbst in einem anderen Array befindet, indem Sie zwei Sätze von eckigen Klammern zusammen verketten. Um zum Beispiel auf eines der Items im Array zuzugreifen, das das dritte Item im `random`-Array ist (siehe vorherigen Abschnitt), könnten wir so etwas machen:

   ```js
   const random = ["tree", 795, [0, 1, 2]];
   random[2][2];
   ```

4. Versuchen Sie, einige weitere Änderungen an Ihren Array-Beispielen vorzunehmen, bevor Sie fortfahren. Spielen Sie ein wenig herum und sehen Sie, was funktioniert und was nicht.

## Den Index von Items in einem Array finden

Wenn Sie den Index eines Items nicht kennen, können Sie die {{jsxref("Array.prototype.indexOf()","indexOf()")}}-Methode verwenden.
Die `indexOf()`-Methode nimmt ein Item als Argument und gibt entweder den Index des Items oder `-1` zurück, wenn das Item nicht im Array enthalten ist:

```js
const birds = ["Parrot", "Falcon", "Owl"];
console.log(birds.indexOf("Owl")); //  2
console.log(birds.indexOf("Rabbit")); // -1
```

## Items hinzufügen

Um ein oder mehrere Items am Ende eines Arrays hinzuzufügen, können wir {{jsxref("Array.prototype.push()","push()")}} verwenden. Beachten Sie, dass Sie eines oder mehrere Items hinzufügen müssen, die Sie dem Ende Ihres Arrays hinzufügen möchten.

```js
const cities = ["Manchester", "Liverpool"];
cities.push("Cardiff");
console.log(cities); // [ "Manchester", "Liverpool", "Cardiff" ]
cities.push("Bradford", "Brighton");
console.log(cities); // [ "Manchester", "Liverpool", "Cardiff", "Bradford", "Brighton" ]
```

Die neue Länge des Arrays wird zurückgegeben, wenn der Methodenaufruf abgeschlossen ist. Wenn Sie die neue Array-Länge in einer Variablen speichern möchten, könnten Sie so etwas tun:

```js
const cities = ["Manchester", "Liverpool"];
const newLength = cities.push("Bristol");
console.log(cities); // [ "Manchester", "Liverpool", "Bristol" ]
console.log(newLength); // 3
```

Um ein Item am Anfang des Arrays hinzuzufügen, verwenden Sie {{jsxref("Array.prototype.unshift()","unshift()")}}:

```js
const cities = ["Manchester", "Liverpool"];
cities.unshift("Edinburgh");
console.log(cities); // [ "Edinburgh", "Manchester", "Liverpool" ]
```

## Items entfernen

Um das letzte Item aus dem Array zu entfernen, verwenden Sie {{jsxref("Array.prototype.pop()","pop()")}}.

```js
const cities = ["Manchester", "Liverpool"];
cities.pop();
console.log(cities); // [ "Manchester" ]
```

Die `pop()`-Methode gibt das entfernte Item zurück. Um dieses Item in einer neuen Variablen zu speichern, könnten Sie dies tun:

```js
const cities = ["Manchester", "Liverpool"];
const removedCity = cities.pop();
console.log(removedCity); // "Liverpool"
```

Um das erste Item aus einem Array zu entfernen, verwenden Sie {{jsxref("Array.prototype.shift()","shift()")}}:

```js
const cities = ["Manchester", "Liverpool"];
cities.shift();
console.log(cities); // [ "Liverpool" ]
```

Wenn Sie den Index eines Items kennen, können Sie es aus dem Array mit {{jsxref("Array.prototype.splice()","splice()")}} entfernen:

```js
const cities = ["Manchester", "Liverpool", "Edinburgh", "Carlisle"];
const index = cities.indexOf("Liverpool");
if (index !== -1) {
  cities.splice(index, 1);
}
console.log(cities); // [ "Manchester", "Edinburgh", "Carlisle" ]
```

In diesem Aufruf von `splice()`, gibt das erste Argument an, wo das Entfernen der Items beginnen soll, und das zweite Argument gibt an, wie viele Items entfernt werden sollen. So können Sie mehr als ein Item entfernen:

```js
const cities = ["Manchester", "Liverpool", "Edinburgh", "Carlisle"];
const index = cities.indexOf("Liverpool");
if (index !== -1) {
  cities.splice(index, 2);
}
console.log(cities); // [ "Manchester", "Carlisle" ]
```

## Zugriff auf jedes Item

Sehr oft möchten Sie auf jedes Item im Array zugreifen. Dies können Sie mit der {{jsxref("statements/for...of","for...of")}}-Anweisung tun:

```js
const birds = ["Parrot", "Falcon", "Owl"];

for (const bird of birds) {
  console.log(bird);
}
```

Manchmal wollen Sie mit jedem Item in einem Array dasselbe tun, wodurch Sie ein Array erhalten, das die veränderten Items enthält. Dies können Sie mit {{jsxref("Array.prototype.map()","map()")}} tun. Der folgende Code nimmt ein Array von Zahlen und verdoppelt jede Zahl:

```js
function double(number) {
  return number * 2;
}
const numbers = [5, 2, 7, 6];
const doubled = numbers.map(double);
console.log(doubled); // [ 10, 4, 14, 12 ]
```

Wir geben der `map()` eine Funktion und `map()` ruft die Funktion einmal für jedes Item im Array auf und übergibt das Item. Es fügt dann den Rückgabewert jedes Funktionsaufrufs zu einem neuen Array hinzu und gibt schließlich das neue Array zurück.

Manchmal möchten Sie ein neues Array erstellen, das nur die Items im ursprünglichen Array enthält, die einem bestimmten Test entsprechen. Dies können Sie mit {{jsxref("Array.prototype.filter()","filter()")}} tun. Der folgende Code nimmt ein Array von Zeichenfolgen und gibt ein Array zurück, das nur die Zeichenfolgen enthält, die länger als 8 Zeichen sind:

```js
function isLong(city) {
  return city.length > 8;
}
const cities = ["London", "Liverpool", "Totnes", "Edinburgh"];
const longer = cities.filter(isLong);
console.log(longer); // [ "Liverpool", "Edinburgh" ]
```

Wie `map()`, übergeben wir eine Funktion an die `filter()`-Methode und `filter()` ruft diese Funktion für jedes Item im Array auf und übergibt das Item. Wenn die Funktion `true` zurückgibt, wird das Item zu einem neuen Array hinzugefügt. Schließlich wird das neue Array zurückgegeben.

## Umwandlung zwischen Zeichenfolgen und Arrays

Oft werden Sie mit einigen Rohdaten in einer langen Zeichenfolge konfrontiert, und Sie möchten die nützlichen Items in eine nützlichere Form bringen und dann Dinge damit tun, wie sie in einer Datentabelle anzuzeigen. Um dies zu tun, können wir die {{jsxref("String.prototype.split()","split()")}}-Methode verwenden. In ihrer einfachsten Form nimmt diese einen einzelnen Parameter, das Zeichen, an dem Sie die Zeichenfolge trennen möchten, und gibt die Teilstrings zwischen dem Separator als Items in einem Array zurück.

> [!NOTE]
> Okay, dies ist technisch gesehen eine Zeichenfolgenmethode, keine Array-Methode, aber wir haben sie mit Arrays zusammengefügt, da sie gut hierher passt.

1. Lassen Sie uns damit spielen, um zu sehen, wie es funktioniert. Zuerst erstellen Sie eine Zeichenfolge in Ihrer Konsole:

   ```js
   const data = "Manchester,London,Liverpool,Birmingham,Leeds,Carlisle";
   ```

2. Jetzt lassen Sie uns sie bei jedem Komma aufteilen:

   ```js
   const cities = data.split(",");
   cities;
   ```

3. Schließlich versuchen Sie die Länge Ihres neuen Arrays zu finden und einige Items daraus abzurufen:

   ```js
   cities.length;
   cities[0]; // the first item in the array
   cities[1]; // the second item in the array
   cities[cities.length - 1]; // the last item in the array
   ```

4. Sie können auch den umgekehrten Weg gehen, indem Sie die {{jsxref("Array.prototype.join()","join()")}}-Methode verwenden. Versuchen Sie Folgendes:

   ```js
   const commaSeparated = cities.join(",");
   commaSeparated;
   ```

5. Eine andere Möglichkeit, ein Array in eine Zeichenfolge umzuwandeln, ist die Verwendung der {{jsxref("Array.prototype.toString()","toString()")}}-Methode. `toString()` ist möglicherweise einfacher als `join()`, da es keinen Parameter nimmt, aber begrenzender. Mit `join()` können Sie verschiedene Separatoren angeben, während `toString()` immer ein Komma verwendet. (Versuchen Sie, Schritt 4 mit einem anderen Zeichen als einem Komma auszuführen.)

   ```js
   const dogNames = ["Rocket", "Flash", "Bella", "Slugger"];
   dogNames.toString(); // Rocket,Flash,Bella,Slugger
   ```

## Diese Produkte ausdrucken

Jetzt sind Sie dran. In dieser Übung kehren Sie zu dem Beispiel zurück, das wir zuvor beschrieben haben – Produktnamen und -preise auf einer Rechnung ausdrucken und dann die Preise summieren und am Ende des Textes ausdrucken. Befolgen Sie die unten stehenden Schritte, um die Logik zu implementieren.

1. Klicken Sie auf **"Play"** im untenstehenden Codeblock, um das Beispiel im MDN Playground zu bearbeiten.
2. Unter dem Kommentar `// Part 1` befinden sich eine Anzahl von Zeichenfolgen, von denen jede einen Produktnamen und Preis enthält, die durch ein Doppelpunkt getrennt sind. Wir möchten, dass Sie diese auskommentieren und in ein Array namens `products` umwandeln.
3. Unter dem Kommentar `// Part 2` beginnen Sie mit einer `for...of()` Schleife, um jedes Item im `products` Array durchzugehen.
4. Unter dem Kommentar `// Part 3` möchten wir, dass Sie eine Zeile Code schreiben, die das aktuelle Array-Element (`name:price`) in zwei separate Items aufteilt, eines mit dem Namen und eines mit dem Preis. Wenn Sie sich nicht sicher sind, wie Sie dies tun sollen, konsultieren Sie den Artikel [Nützliche Zeichenfolgenmethoden](/de/docs/Learn_web_development/Core/Scripting/Useful_string_methods) zur Hilfe oder noch besser, schauen Sie in den Abschnitt [Umwandlung zwischen Zeichenfolgen und Arrays](#umwandlung_zwischen_zeichenfolgen_und_arrays) in diesem Artikel.
5. Als Teil der obigen Codezeile möchten Sie auch den Preis von einer Zeichenfolge in eine Zahl umwandeln. Wenn Sie sich nicht erinnern können, wie das geht, sehen Sie sich den [ersten Zeichenfolgenartikel](/de/docs/Learn_web_development/Core/Scripting/Strings#numbers_vs._strings) an.
6. Es gibt eine Variable namens `total`, die erstellt wird und einen Wert von `0` erhält. Innerhalb der Schleife (unter `// Part 4`) möchten wir, dass Sie eine Zeile hinzufügen, die den Preis des aktuellen Items in jeder Iteration der Schleife zu dieser Gesamtmenge hinzufügt, damit am Ende des Codes der richtige Gesamtbetrag auf die Rechnung gedruckt wird. Möglicherweise benötigen Sie einen [Zuweisungsoperator](/de/docs/Learn_web_development/Core/Scripting/Math#assignment_operators), um dies zu tun.
7. Wir möchten, dass Sie die nächste Zeile nach `// Part 5` ändern, sodass die `itemText`-Variable gleich "aktueller Item-Name — $aktueller Item-Preis" gesetzt wird, z.B. "Schuhe — $23.99" in jedem Fall, sodass die richtigen Informationen für jedes Item auf der Rechnung gedruckt werden. Dies ist eine grundlegende Zeichenfolgen-Verkettung, die Ihnen vertraut sein sollte, wenn Sie dem Lernmaterial bis hierhin gefolgt sind.
8. Schließlich fügen Sie unter dem Kommentar `// Part 6` ein `}` hinzu, um das Ende der `for...of()` Schleife zu markieren.

Wenn Sie einen Fehler machen, können Sie Ihre Arbeit mit der _Zurücksetzen_-Taste im MDN Playground löschen. Wenn Sie wirklich feststecken, können Sie die Lösung unter dem Live-Output anzeigen.

```html hidden live-sample___arrays-1
<h2>Live output</h2>

<div class="output">
  <ul></ul>

  <p></p>
</div>
```

```css hidden live-sample___arrays-1
.output {
  min-height: 100px;
}
```

```js live-sample___arrays-1
const list = document.querySelector(".output ul");
const totalBox = document.querySelector(".output p");
let total = 0;
list.textContent = "";
totalBox.textContent = "";
// Part 1
// "Underpants:6.99",
// "Socks:5.99",
// "T-shirt:14.99",
// "Trousers:31.99",
// "Shoes:23.99",

// Part 2

// Part 3

// Part 4

// Part 5
let itemText = 0;

const listItem = document.createElement("li");
listItem.textContent = itemText;
list.appendChild(listItem);

// Part 6

totalBox.textContent = `Total: $${total.toFixed(2)}`;
```

{{ EmbedLiveSample("arrays-1", "100%", 200) }}

<details>
<summary>Klicken Sie hier, um die Lösung anzuzeigen</summary>

Ihr fertiges JavaScript sollte so aussehen:

```js
const list = document.querySelector(".output ul");
const totalBox = document.querySelector(".output p");
let total = 0;
list.textContent = "";
totalBox.textContent = "";

const products = [
  "Underpants:6.99",
  "Socks:5.99",
  "T-shirt:14.99",
  "Trousers:31.99",
  "Shoes:23.99",
];

for (const product of products) {
  const subArray = product.split(":");
  const name = subArray[0];
  const price = Number(subArray[1]);
  total += price;
  const itemText = `${name} — $${price}`;

  const listItem = document.createElement("li");
  listItem.textContent = itemText;
  list.appendChild(listItem);
}

totalBox.textContent = `Total: $${total.toFixed(2)}`;
```

</details>

## Speichern der letzten 5 Suchanfragen

Lassen Sie uns eine weitere Übung machen, damit die Übung flüssig bleibt.

Eine gute Verwendung für Array-Methoden wie {{jsxref("Array.prototype.push()","push()")}} und {{jsxref("Array.prototype.pop()","pop()")}} ist, wenn Sie einen Verlauf der aktuell aktiven Items in einer Web-App pflegen. In einer animierten Szene könnten Sie zum Beispiel ein Array von Objekten haben, die die aktuell angezeigten Hintergrundgrafiken repräsentieren, und Sie könnten nur 50 gleichzeitig anzeigen wollen, aus Leistungs- oder Ordnungsgründen. Wenn neue Objekte erstellt und dem Array hinzugefügt werden, können ältere aus dem Array gelöscht werden, um die gewünschte Anzahl beizubehalten.

In diesem Beispiel werden wir eine viel einfachere Verwendung zeigen – hier geben wir Ihnen eine gefälschte Suchseite mit einer Suchbox. Die Idee ist, dass, wenn Begriffe in das Suchfeld eingegeben werden, die letzten 5 vorherigen Suchbegriffe in der Liste angezeigt werden. Wenn die Anzahl der Begriffe über 5 geht, beginnt jedes Mal, wenn ein neuer Begriff an den Anfang hinzugefügt wird, der letzte Begriff gelöscht zu werden, sodass immer die letzten 5 Begriffe angezeigt werden.

> [!NOTE]
> In einer echten Suchanwendung könnten Sie wahrscheinlich auf die vorherigen Suchbegriffe klicken, um zu vorherigen Suchvorgängen zurückzukehren, und es würden tatsächliche Suchergebnisse angezeigt! Wir halten es zunächst einfach.

Um das Beispiel zu vervollständigen, müssen Sie:

1. Klicken Sie auf **"Play"** im untenstehenden Codeblock, um das Beispiel im MDN Playground zu bearbeiten.
2. Fügen Sie eine Zeile unter dem Kommentar `// Part 1` hinzu, die den aktuellen Wert, der in das Suchfeld eingegeben wurde, an den Anfang des Arrays hinzufügt. Dies kann mithilfe von `searchInput.value` abgerufen werden.
3. Fügen Sie eine Zeile unter dem Kommentar `// Part 2` hinzu, die den Wert entfernt, der sich derzeit am Ende des Arrays befindet.

Wenn Sie einen Fehler machen, können Sie Ihre Arbeit mit der _Zurücksetzen_-Taste im MDN Playground löschen. Wenn Sie wirklich feststecken, können Sie die Lösung unter dem Live-Output anzeigen.

```html hidden live-sample___arrays-2
<div class="output">
  <label for="search-box">Enter a search term: </label>
  <input id="search-box" type="search" />
  <button>Search</button>

  <ul></ul>
</div>
```

```css hidden live-sample___arrays-2
.output {
  margin: 1rem;
}
```

```js live-sample___arrays-2
const list = document.querySelector(".output ul");
const searchInput = document.querySelector(".output input");
const searchBtn = document.querySelector(".output button");

list.textContent = "";

const myHistory = [];
const MAX_HISTORY = 5;

searchBtn.addEventListener("click", () => {
  // we will only allow a term to be entered if the search input isn't empty
  if (searchInput.value !== "") {
    // Part 1

    // empty the list so that we don't display duplicate entries
    // the display is regenerated every time a search term is entered.
    list.textContent = "";

    // loop through the array, and display all the search terms in the list
    for (const itemText of myHistory) {
      const listItem = document.createElement("li");
      listItem.textContent = itemText;
      list.appendChild(listItem);
    }

    // If the array length is 5 or more, remove the oldest search term
    if (myHistory.length >= MAX_HISTORY) {
      // Part 2
    }

    // empty the search input and focus it, ready for the next term to be entered
    searchInput.value = "";
    searchInput.focus();
  }
});
```

{{ EmbedLiveSample("arrays-2", "100%", 200) }}

<details>
<summary>Klicken Sie hier, um die Lösung anzuzeigen</summary>

Ihr fertiges JavaScript sollte so aussehen:

```js
const list = document.querySelector(".output ul");
const searchInput = document.querySelector(".output input");
const searchBtn = document.querySelector(".output button");

list.textContent = "";

const myHistory = [];
const MAX_HISTORY = 5;

searchBtn.addEventListener("click", () => {
  // we will only allow a term to be entered if the search input isn't empty
  if (searchInput.value !== "") {
    myHistory.unshift(searchInput.value);

    // empty the list so that we don't display duplicate entries
    // the display is regenerated every time a search term is entered.
    list.textContent = "";

    // loop through the array, and display all the search terms in the list
    for (const itemText of myHistory) {
      const listItem = document.createElement("li");
      listItem.textContent = itemText;
      list.appendChild(listItem);
    }

    // If the array length is 5 or more, remove the oldest search term
    if (myHistory.length >= MAX_HISTORY) {
      myHistory.pop();
    }

    // empty the search input and focus it, ready for the next term to be entered
    searchInput.value = "";
    searchInput.focus();
  }
});
```

</details>

## Zusammenfassung

Nachdem Sie diesen Artikel gelesen haben, sind wir sicher, dass Sie zustimmen werden, dass Arrays ziemlich nützlich sind; Sie werden sie überall in JavaScript sehen, oft in Verbindung mit Schleifen, um dasselbe für jedes Item in einem Array zu tun. Wir werden Ihnen später im Modul alles über Schleifen beibringen.

Im nächsten Artikel geben wir Ihnen einige Tests, die Sie verwenden können, um zu überprüfen, wie gut Sie das gelernte Material über Arrays verstanden und behalten haben.

## Siehe auch

- {{jsxref("Array")}}
  - : Die `Array`-Objektreferenzseite bietet eine detaillierte Anleitung zu den auf dieser Seite besprochenen Funktionen und vielen anderen `Array`-Funktionen.

{{PreviousMenuNext("Learn_web_development/Core/Scripting/Test_your_skills/Strings", "Learn_web_development/Core/Scripting/Test_your_skills/Arrays", "Learn_web_development/Core/Scripting")}}
