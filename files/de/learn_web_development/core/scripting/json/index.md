---
title: Arbeiten mit JSON
short-title: JSON
slug: Learn_web_development/Core/Scripting/JSON
l10n:
  sourceCommit: 48d220a8cffdfd5f088f8ca89724a9a92e34d8c0
---

{{PreviousMenuNext("Learn_web_development/Core/Scripting/Network_requests","Learn_web_development/Core/Scripting/Debugging_JavaScript", "Learn_web_development/Core/Scripting")}}

JavaScript Object Notation (JSON) ist ein standardisiertes textbasiertes Format zur Darstellung von strukturierten Daten, das auf der Syntax von JavaScript-Objekten basiert. Es wird häufig zum Übertragen von Daten in Webanwendungen verwendet (z. B. zum Senden von Daten vom Server an den Client, damit diese auf einer Webseite angezeigt werden können, oder umgekehrt). Sie werden es häufig antreffen, daher geben wir Ihnen in diesem Artikel alles, was Sie brauchen, um mit JSON in JavaScript zu arbeiten, einschließlich des Parsens von JSON, damit Sie auf die darin enthaltenen Daten zugreifen können, und der Erstellung von JSON.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>Kenntnisse in <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a> und den <a href="/de/docs/Learn_web_development/Core/Styling_basics">Grundlagen von CSS</a>, Vertrautheit mit den JavaScript-Grundlagen, die in den vorherigen Lektionen behandelt wurden.</td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Was JSON ist — ein sehr häufig verwendetes Datenformat, das auf JavaScript-Objektsyntax basiert.</li>
          <li>Dass JSON auch Arrays enthalten kann.</li>
          <li>JSON mithilfe von in den Web-APIs verfügbaren Mechanismen als JavaScript-Objekt abrufen (zum Beispiel mit <code>Response.json()</code> in der Fetch API).</li>
          <li>Werte innerhalb von JSON-Daten mit Klammer- und Punktsyntax abrufen.</li>
          <li>Konvertieren zwischen Objekten und Text mit <code>JSON.parse()</code> und <code>JSON.stringify()</code>.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Nein, wirklich, was ist JSON?

{{Glossary("JSON", "JSON")}} ist ein textbasiertes Datenformat, das der JavaScript-Objektsyntax folgt.
Es stellt strukturierte Daten als Zeichenfolge dar, was nützlich ist, wenn Sie Daten über ein Netzwerk übertragen möchten.
Obwohl es der Syntax von JavaScript-Objektliteralen sehr ähnlich sieht, kann es unabhängig von JavaScript verwendet werden. Viele Programmierumgebungen bieten die Möglichkeit, JSON zu lesen (parsen) und zu erzeugen.
In JavaScript werden die Methoden zum Parsen und Erstellen von JSON vom [`JSON`](/de/docs/Web/JavaScript/Reference/Global_Objects/JSON)-Objekt bereitgestellt.

> [!NOTE]
> Das Konvertieren einer Zeichenkette in ein natives Objekt wird als _Deserialisierung_ bezeichnet, während das Konvertieren eines nativen Objekts in eine Zeichenkette, damit es über das Netzwerk übertragen werden kann, als _Serialisierung_ bezeichnet wird.

Eine JSON-Zeichenkette kann in einer eigenen Datei gespeichert werden, die im Grunde nur eine Textdatei mit der Erweiterung `.json` und einem {{Glossary("MIME_type", "MIME-Typ")}} von `application/json` ist.

### JSON-Struktur

Wie oben beschrieben, ist JSON eine Zeichenkette, deren Format sehr dem Format von JavaScript-Objektliteralen ähnelt.
Das Folgende ist eine gültige JSON-Zeichenkette, die ein Objekt darstellt.
Achten Sie darauf, dass es auch ein gültiges JavaScript-Objektliteral ist — nur mit einigen [Syntaxbeschränkungen](#json-syntaxbeschränkungen).

```json
{
  "squadName": "Super hero squad",
  "homeTown": "Metro City",
  "formed": 2016,
  "secretBase": "Super tower",
  "active": true,
  "members": [
    {
      "name": "Molecule Man",
      "age": 29,
      "secretIdentity": "Dan Jukes",
      "powers": ["Radiation resistance", "Turning tiny", "Radiation blast"]
    },
    {
      "name": "Madame Uppercut",
      "age": 39,
      "secretIdentity": "Jane Wilson",
      "powers": [
        "Million tonne punch",
        "Damage resistance",
        "Superhuman reflexes"
      ]
    },
    {
      "name": "Eternal Flame",
      "age": 1000000,
      "secretIdentity": "Unknown",
      "powers": [
        "Immortality",
        "Heat Immunity",
        "Inferno",
        "Teleportation",
        "Interdimensional travel"
      ]
    }
  ]
}
```

Wenn Sie dieses JSON in Ihrem JavaScript-Programm als Zeichenfolge laden, können Sie es in ein normales Objekt parsen und dann auf die darin enthaltenen Daten mit der gleichen Punkt-/Klammernotation zugreifen, die wir im Artikel [JavaScript-Objektgrundlagen](/de/docs/Learn_web_development/Core/Scripting/Object_basics) betrachtet haben.
Zum Beispiel:

```js
superHeroes.homeTown;
superHeroes.members[1].powers[2];
```

1. Zuerst haben wir den Variablennamen — `superHelden`.
2. Innerhalb von diesem möchten wir auf die Eigenschaft `members` zugreifen, also verwenden wir `.members`.
3. `members` enthält ein Array, das mit Objekten gefüllt ist. Wir möchten auf das zweite Objekt im Array zugreifen, also verwenden wir `[1]`.
4. Innerhalb dieses Objekts möchten wir auf die Eigenschaft `powers` zugreifen, also verwenden wir `.powers`.
5. In der `powers`-Eigenschaft befindet sich ein Array, das die Superkräfte des ausgewählten Helden enthält. Wir möchten die dritte, also verwenden wir `[2]`.

Der Hauptpunkt ist, dass es wirklich nichts Besonderes beim Arbeiten mit JSON gibt; nachdem Sie es in ein JavaScript-Objekt geparst haben, arbeiten Sie damit genauso, wie Sie mit einem Objekt arbeiten würden, das mit der gleichen Objektsyntax deklariert wurde.

> [!NOTE]
> Wir haben das oben gesehene JSON in unserer Variablen eines Beispiels [JSONTest.html](https://mdn.github.io/learning-area/javascript/oojs/json/JSONTest.html) verfügbar gemacht (siehe den [Quellcode](https://github.com/mdn/learning-area/blob/main/javascript/oojs/json/JSONTest.html)).
> Versuchen Sie, dies zu laden und dann auf Daten in der Variablen über die JavaScript-Konsole Ihres Browsers zuzugreifen.

### Arrays als JSON

Oben haben wir erwähnt, dass JSON-Text im Grunde aussieht wie ein JavaScript-Objekt innerhalb einer Zeichenfolge.
Wir können auch Arrays zu/von JSON konvertieren. Das nachstehende Beispiel ist vollkommen gültiges JSON:

```json
[
  {
    "name": "Molecule Man",
    "age": 29,
    "secretIdentity": "Dan Jukes",
    "powers": ["Radiation resistance", "Turning tiny", "Radiation blast"]
  },
  {
    "name": "Madame Uppercut",
    "age": 39,
    "secretIdentity": "Jane Wilson",
    "powers": [
      "Million tonne punch",
      "Damage resistance",
      "Superhuman reflexes"
    ]
  }
]
```

Sie müssen auf Array-Elemente (in ihrer geparsten Version) zugreifen, indem Sie mit einem Array-Index beginnen, zum Beispiel `superHelden[0].powers[0]`.

JSON kann auch eine einzelne primitive enthalten. Zum Beispiel `29`, `"Dan Jukes"` oder `true` sind alle gültige JSON.

### JSON-Syntaxbeschränkungen

Wie bereits erwähnt, ist jedes JSON ein gültiges JavaScript-Literal (Objekt, Array, Zahl usw.). Das Umgekehrte stimmt jedoch nicht – nicht alle JavaScript-Objektliterale sind gültiges JSON.

- JSON kann nur _serialisierbare_ Datentypen enthalten. Das bedeutet:
  - Bei Primitiven kann JSON String-Literale, Zahlenliterale, `true`, `false` und `null` enthalten. Bemerkenswerterweise kann es `undefined`, `NaN` oder `Infinity` nicht enthalten.
  - Bei Nicht-Primitiven kann JSON Objektliterale und Arrays enthalten, jedoch keine Funktionen oder andere Objekttypen wie `Date`, `Set` und `Map`. Die in JSON enthaltenen Objekte und Arrays müssen ferner gültige JSON-Datentypen enthalten.
- Strings müssen in Anführungszeichen eingeschlossen sein, nicht in Einzelanführungszeichen.
- Zahlen müssen in Dezimalnotation geschrieben werden.
- Jede Eigenschaft eines Objekts muss in der Form `"Schlüssel": Wert` vorliegen. Eigenschaftsnamen müssen String-Literale sein, die in Anführungszeichen eingeschlossen sind. Besondere JavaScript-Syntax, wie Methoden, ist nicht erlaubt, da Methoden Funktionen sind, und Funktionen sind keine gültigen JSON-Datentypen.
- Objekte und Arrays dürfen keine [nachgestellten Kommas](/de/docs/Web/JavaScript/Reference/Trailing_commas) enthalten.
- Kommentare sind in JSON nicht erlaubt.

Schon ein einziges falsch platziertes Komma oder Doppelpunkt kann eine JSON-Datei ungültig machen und dazu führen, dass sie fehlschlägt.
Sie sollten Vorsicht walten lassen, um alle Daten zu validieren, die Sie verwenden möchten (obwohl computererzeugtes JSON weniger wahrscheinlich Fehler enthält, solange das Erzeugerprogramm korrekt arbeitet).
Sie können JSON mit einer Anwendung wie [JSONLint](https://jsonlint.com/) oder [JSON-validate](https://json-validate.com) validieren.

## Aktives Lernen: Arbeiten durch ein JSON-Beispiel

Lassen Sie uns also ein Beispiel durchgehen, um zu zeigen, wie wir einige JSON-formatierte Daten auf einer Website nutzen könnten.

### Erste Schritte

Erstellen Sie zu Beginn lokale Kopien unserer Dateien [heroes.html](https://github.com/mdn/learning-area/blob/main/javascript/oojs/json/heroes.html) und [style.css](https://github.com/mdn/learning-area/blob/main/javascript/oojs/json/style.css).
Letztere enthält etwas einfachen CSS, um unsere Seite zu gestalten, während die erstere sehr einfaches HTML für den Body enthält, plus ein {{HTMLElement("script")}}-Element, um den JavaScript-Code zu enthalten, den wir in dieser Übung schreiben werden:

```html-nolint
<header>
...
</header>

<section>
...
</section>

<script>
...
</script>
```

Wir haben unsere JSON-Daten auf unserem GitHub unter <https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json> verfügbar gemacht.

Wir werden das JSON in unser Skript laden und einige coole DOM-Manipulationen verwenden, um es anzuzeigen, so wie es hier aussieht:

![Bild eines Dokuments mit dem Titel "Super hero squad" (in einer eleganten Schriftart) und dem Untertitel "Hometown: Metro City // Formed: 2016". Drei Spalten unter der Überschrift sind mit "Molecule Man", "Madame Uppercut" und "Eternal Flame" betitelt. Jede Spalte listet den geheimen Identitätsnamen, das Alter und die Superkräfte des Helden auf.](json-superheroes.png)

### Oberste Funktionsebene

Die oberste Funktion sieht so aus:

```js
async function populate() {
  const requestURL =
    "https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json";
  const request = new Request(requestURL);

  const response = await fetch(request);
  const superHeroes = await response.json();

  populateHeader(superHeroes);
  populateHeroes(superHeroes);
}
```

Um das JSON zu erhalten, verwenden wir eine API namens [Fetch](/de/docs/Web/API/Fetch_API).
Diese API ermöglicht es uns, Netzwerk-Anfragen zu stellen, um Ressourcen von einem Server über JavaScript abzurufen (z. B. Bilder, Text, JSON oder sogar HTML-Snippets), was bedeutet, dass wir kleine Inhaltsbereiche aktualisieren können, ohne die gesamte Seite neu laden zu müssen.

In unserer Funktion verwenden die ersten vier Zeilen die Fetch API, um das JSON vom Server abzurufen:

- Wir deklarieren die Variable `requestURL`, um die GitHub-URL zu speichern
- Wir verwenden die URL, um ein neues [`Request`](/de/docs/Web/API/Request)-Objekt zu initialisieren.
- Wir führen die Netzwerk-Anfrage mit der Funktion [`fetch()`](/de/docs/Web/API/Window/fetch) durch, und dies gibt ein [`Response`](/de/docs/Web/API/Response)-Objekt zurück
- Wir rufen die Antwort als JSON ab, indem wir die Funktion [`json()`](/de/docs/Web/API/Response/json) des `Response`-Objekts verwenden.

> [!NOTE]
> Die `fetch()` API ist **asynchron**. Sie können sich im Detail über asynchrone Funktionen in unserem [Asynchrones JavaScript Modul](/de/docs/Learn_web_development/Extensions/Async_JS) informieren, aber vorerst sei gesagt, dass wir das Schlüsselwort {{jsxref("Statements/async_function", "async")}} vor den Namen der Funktion setzen müssen, die die Fetch API verwendet, und das Schlüsselwort {{jsxref("Operators/await", "await")}} vor die Aufrufe von asynchronen Funktionen.

Nach dem Ganzen enthält die Variable `superHelden` das JavaScript-Objekt, das auf dem JSON basiert. Wir übergeben dieses Objekt dann an zwei Funktionsaufrufe — der erste füllt den `<header>` mit den richtigen Daten, während der zweite eine Informationskarte für jeden Helden im Team erstellt und in den `<section>` einfügt.

### Den Header ausfüllen

Nachdem wir die JSON-Daten abgerufen und in ein JavaScript-Objekt umgewandelt haben, lassen Sie uns diese verwenden, indem wir die beiden Funktionen schreiben, die wir oben erwähnt haben. Zuerst fügen Sie die folgende Funktionsdefinition unter dem vorherigen Code hinzu:

```js
function populateHeader(obj) {
  const header = document.querySelector("header");
  const myH1 = document.createElement("h1");
  myH1.textContent = obj.squadName;
  header.appendChild(myH1);

  const myPara = document.createElement("p");
  myPara.textContent = `Hometown: ${obj.homeTown} // Formed: ${obj.formed}`;
  header.appendChild(myPara);
}
```

Hier erstellen wir zuerst ein {{HTMLElement("Heading_Elements", "h1")}}-Element mit [`createElement()`](/de/docs/Web/API/Document/createElement), setzen dessen [`textContent`](/de/docs/Web/API/Node/textContent), um der `squadName`-Eigenschaft des Objekts zu entsprechen, und hängen es dann an den Header mit [`appendChild()`](/de/docs/Web/API/Node/appendChild) an. Dann führen wir einen sehr ähnlichen Vorgang mit einem Absatz durch: Erstellen Sie ihn, setzen Sie seinen Textinhalt und fügen ihn dem Header hinzu. Der einzige Unterschied besteht darin, dass sein Text auf ein [Template Literal](/de/docs/Web/JavaScript/Reference/Template_literals) gesetzt wird, das sowohl die `homeTown`- als auch `formed`-Eigenschaften des Objekts enthält.

### Erstellen der Helden-Informationskarten

Fügen Sie als nächstes die folgende Funktion am Ende des Codes hinzu, die die Heldenkarten erstellt und anzeigt:

```js
function populateHeroes(obj) {
  const section = document.querySelector("section");
  const heroes = obj.members;

  for (const hero of heroes) {
    const myArticle = document.createElement("article");
    const myH2 = document.createElement("h2");
    const myPara1 = document.createElement("p");
    const myPara2 = document.createElement("p");
    const myPara3 = document.createElement("p");
    const myList = document.createElement("ul");

    myH2.textContent = hero.name;
    myPara1.textContent = `Secret identity: ${hero.secretIdentity}`;
    myPara2.textContent = `Age: ${hero.age}`;
    myPara3.textContent = "Superpowers:";

    const superPowers = hero.powers;
    for (const power of superPowers) {
      const listItem = document.createElement("li");
      listItem.textContent = power;
      myList.appendChild(listItem);
    }

    myArticle.appendChild(myH2);
    myArticle.appendChild(myPara1);
    myArticle.appendChild(myPara2);
    myArticle.appendChild(myPara3);
    myArticle.appendChild(myList);

    section.appendChild(myArticle);
  }
}
```

Zuerst speichern wir die `members`-Eigenschaft des JavaScript-Objekts in einer neuen Variable. Dieses Array enthält mehrere Objekte, die die Informationen für jeden Helden enthalten.

Als nächstes verwenden wir eine [for...of Schleife](/de/docs/Learn_web_development/Core/Scripting/Loops#the_for...of_loop), um jedes Objekt im Array durchzugehen. Für jedes einzelne:

1. Erstellen Sie mehrere neue Elemente: ein `<article>`, ein `<h2>`, drei `<p>`s und ein `<ul>`.
2. Setzen Sie das `<h2>` so, dass es den aktuellen Helden `name` enthält.
3. Füllen Sie die drei Absätze mit ihrem `secretIdentity`, `age` und einer Zeile, die "Superpowers:" sagt, um die Informationen in der Liste einzuführen.
4. Speichern Sie die `powers`-Eigenschaft in einer weiteren neuen Konstante namens `superPowers` — dies enthält ein Array, das die Superkräfte des aktuellen Helden auflistet.
5. Verwenden Sie eine weitere `for...of` Schleife, um die aktuellen Superkräfte des Helden zu durchlaufen — für jede erstellen wir ein `<li>`-Element, setzen die Superkraft da hinein, und setzen dann das `listItem` mit `appendChild()` in das `<ul>` Element (`myList`).
6. Das allerletzte, was wir tun, ist, `<h2>`, `<p>`s und `<ul>` innerhalb des `<article>` (`myArticle`) hinzuzufügen, und dann das `<article>` innerhalb des `<section>`. Die Reihenfolge, in der Dinge hinzugefügt werden, ist wichtig, da dies die Reihenfolge ist, in der sie im HTML angezeigt werden.

> [!NOTE]
> Wenn Sie Probleme haben, das Beispiel zum Laufen zu bringen, versuchen Sie, sich unseren [heroes-finished.html](https://github.com/mdn/learning-area/blob/main/javascript/oojs/json/heroes-finished.html) Quellcode (sehen Sie sich auch die [live Version](https://mdn.github.io/learning-area/javascript/oojs/json/heroes-finished.html) an.)

> [!NOTE]
> Wenn Sie Schwierigkeiten haben, der Punkt-/Klammernotation zu folgen, die wir verwenden, um auf das JavaScript-Objekt zuzugreifen, kann es hilfreich sein, die [superheroes.json](https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json)-Datei in einer anderen Registerkarte oder Ihrem Texteditor geöffnet zu haben und sich darauf zu beziehen, während Sie unseren JavaScript-Code betrachten.
> Sie sollten auch auf unseren Artikel [JavaScript-Objektgrundlagen](/de/docs/Learn_web_development/Core/Scripting/Object_basics) zurückgreifen, um weitere Informationen zur Punkt- und Klammernotation zu erhalten.

### Aufruf der obersten Funktion

Schließlich müssen wir unsere oberste `populate()`-Funktion aufrufen:

```js
populate();
```

## Konvertieren zwischen Objekten und Text

Das obige Beispiel war einfach, was den Zugriff auf das JavaScript-Objekt betrifft, weil wir die Netzwerk-Antwort direkt in ein JavaScript-Objekt umgewandelt haben, indem wir `response.json()` benutzt haben.

Aber manchmal haben wir nicht so viel Glück — manchmal erhalten wir eine rohe JSON-Zeichenkette und müssen sie selbst in ein Objekt umwandeln. Und wenn wir ein JavaScript-Objekt über das Netzwerk senden wollen, müssen wir es vor dem Senden in JSON (eine Zeichenkette) umwandeln. Zum Glück sind diese beiden Probleme im Webentwicklung so häufig, dass ein eingebautes [JSON](/de/docs/Web/JavaScript/Reference/Global_Objects/JSON)-Objekt in Browsern verfügbar ist, das die folgenden zwei Methoden enthält:

- [`parse()`](/de/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse): Akzeptiert eine JSON-Zeichenkette als Parameter und gibt das entsprechende JavaScript-Objekt zurück.
- [`stringify()`](/de/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify): Akzeptiert ein Objekt als Parameter und gibt die äquivalente JSON-Zeichenkette zurück.

Sie können den ersten in unserem Beispiel [heroes-finished-json-parse.html](https://mdn.github.io/learning-area/javascript/oojs/json/heroes-finished-json-parse.html) sehen (sehen Sie sich den [Quellcode](https://github.com/mdn/learning-area/blob/main/javascript/oojs/json/heroes-finished-json-parse.html) an) — dieses tut genau das gleiche wie das zuvor entwickelte Beispiel, außer dass:

- Wir die Antwort als Text statt als JSON abrufen, indem wir die Methode [`text()`](/de/docs/Web/API/Response/text) der Antwort verwenden
- Wir dann `parse()` verwenden, um den Text in ein JavaScript-Objekt zu konvertieren.

Das entscheidende Code-Snippet ist hier:

```js
async function populate() {
  const requestURL =
    "https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json";
  const request = new Request(requestURL);

  const response = await fetch(request);
  const superHeroesText = await response.text();

  const superHeroes = JSON.parse(superHeroesText);
  populateHeader(superHeroes);
  populateHeroes(superHeroes);
}
```

Wie Sie vielleicht vermuten, funktioniert `stringify()` in die entgegengesetzte Richtung. Versuchen Sie, die folgenden Zeilen einzeln in die JavaScript-Konsole Ihres Browsers einzugeben, um sie in Aktion zu sehen:

```js
let myObj = { name: "Chris", age: 38 };
myObj;
let myString = JSON.stringify(myObj);
myString;
```

Hier erstellen wir ein JavaScript-Objekt, überprüfen, was es enthält, konvertieren es dann mit `stringify()` in eine JSON-Zeichenkette — speichern den Rückgabewert in einer neuen Variablen — und überprüfen es dann erneut.

## Testen Sie Ihr Wissen!

Sie haben das Ende dieses Artikels erreicht, aber können Sie sich an die wichtigsten Informationen erinnern? Sie finden einige weitere Tests, um zu überprüfen, ob Sie diese Informationen behalten haben, bevor Sie weitermachen — siehe [Testen Sie Ihr Wissen: JSON](/de/docs/Learn_web_development/Core/Scripting/Test_your_skills/JSON).

## Zusammenfassung

In dieser Lektion haben wir Ihnen die Verwendung von JSON in Ihren Programmen vorgestellt, einschließlich der Erstellung und des Parsens von JSON sowie des Zugriffs auf Daten, die in JSON gespeichert sind. Im nächsten Artikel werden wir uns praktische Techniken zur Debuggung von JavaScript und zur Fehlerbehandlung ansehen.

## Siehe auch

- [JSON-Referenz](/de/docs/Web/JavaScript/Reference/Global_Objects/JSON)
- [Übersicht über die Fetch API](/de/docs/Web/API/Fetch_API)
- [Verwendung von Fetch](/de/docs/Web/API/Fetch_API/Using_Fetch)
- [HTTP-Anforderungsmethoden](/de/docs/Web/HTTP/Reference/Methods)

{{PreviousMenuNext("Learn_web_development/Core/Scripting/Network_requests","Learn_web_development/Core/Scripting/Debugging_JavaScript", "Learn_web_development/Core/Scripting")}}
