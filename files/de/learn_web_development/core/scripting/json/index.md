---
title: Arbeiten mit JSON
short-title: JSON
slug: Learn_web_development/Core/Scripting/JSON
l10n:
  sourceCommit: 9b7353bc49f89ee240edc38faeed8e2eb88a5929
---

{{LearnSidebar}}

{{PreviousMenuNext("Learn_web_development/Core/Scripting/Network_requests","Learn_web_development/Core/Scripting/Debugging_JavaScript", "Learn_web_development/Core/Scripting")}}

JavaScript Object Notation (JSON) ist ein standardisiertes textbasiertes Format zur Darstellung strukturierter Daten, das auf der JavaScript-Objektsyntax basiert. Es wird häufig für die Übertragung von Daten in Webanwendungen verwendet (z. B. das Senden von Daten vom Server an den Client, damit diese auf einer Webseite angezeigt werden können, oder umgekehrt). Sie werden häufig auf JSON stoßen; daher erhalten Sie in diesem Artikel alles, was Sie benötigen, um mit JSON in JavaScript zu arbeiten, einschließlich des Parsens von JSON, um auf die darin enthaltenen Daten zugreifen zu können, und des Erstellens von JSON.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>Ein Verständnis von <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a> und den <a href="/de/docs/Learn_web_development/Core/Styling_basics">Grundlagen von CSS</a>, Vertrautheit mit den JavaScript-Grundlagen, die in den vorherigen Lektionen behandelt wurden.</td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Was JSON ist – ein sehr häufig verwendetes Datenformat basierend auf JavaScript-Objektsyntax.</li>
          <li>Dass JSON auch Arrays enthalten kann.</li>
          <li>Rufen Sie JSON als JavaScript-Objekt mit in Web-APIs verfügbaren Mechanismen ab (zum Beispiel <code>Response.json()</code> in der Fetch API).</li>
          <li>Zugreifen auf Werte innerhalb von JSON-Daten mittels Klammer- und Punkt-Syntax.</li>
          <li>Konvertieren zwischen Objekten und Text mit <code>JSON.parse()</code> und <code>JSON.stringify()</code>.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Nein, wirklich, was ist JSON?

{{Glossary("JSON", "JSON")}} ist ein textbasiertes Datenformat, das der JavaScript-Objektsyntax folgt.
Es stellt strukturierte Daten als Zeichenfolge dar, was nützlich ist, wenn Sie Daten über ein Netzwerk übertragen möchten.
Obwohl es der JavaScript-Objektliteral-Syntax stark ähnelt, kann es unabhängig von JavaScript verwendet werden. Viele Programmierumgebungen bieten die Möglichkeit, JSON zu lesen (parsen) und zu generieren.
In JavaScript werden die Methoden zum Parsen und Generieren von JSON durch das [`JSON`](/de/docs/Web/JavaScript/Reference/Global_Objects/JSON) Objekt bereitgestellt.

> [!NOTE]
> Das Umwandeln einer Zeichenfolge in ein natives Objekt wird als _Deserialisierung_ bezeichnet, während das Umwandeln eines nativen Objekts in eine Zeichenfolge, damit es über das Netzwerk übertragen werden kann, als _Serialisierung_ bezeichnet wird.

Eine JSON-Zeichenfolge kann in einer eigenen Datei gespeichert werden, die im Grunde nur eine Textdatei mit der Erweiterung `.json` und einem {{Glossary("MIME_type", "MIME-Typ")}} von `application/json` ist.

### JSON-Struktur

Wie oben beschrieben, ist JSON eine Zeichenfolge, deren Format der JavaScript-Objektliteral-Syntax sehr ähnlich ist.
Das Folgende ist eine gültige JSON-Zeichenfolge, die ein Objekt darstellt.
Beachten Sie, dass es sich auch um ein gültiges JavaScript-Objektliteral handelt – jedoch mit einigen weiteren [Syntaxbeschränkungen](#json-syntaxbeschränkungen).

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

Wenn Sie dieses JSON in Ihrem JavaScript-Programm als Zeichenfolge laden, können Sie es in ein normales Objekt parsen und dann die darin enthaltenen Daten mit der gleichen Punkt/Klammer-Notation zugreifen, die wir im Artikel [JavaScript-Objektgrundlagen](/de/docs/Learn_web_development/Core/Scripting/Object_basics) behandelt haben.
Zum Beispiel:

```js
superHeroes.homeTown;
superHeroes.members[1].powers[2];
```

1. Zuerst haben wir den Variablennamen — `superHeroes`.
2. Innerhalb davon möchten wir auf die `members`-Eigenschaft zugreifen, also verwenden wir `.members`.
3. `members` enthält ein Array, das von Objekten gefüllt ist. Wir möchten auf das zweite Objekt im Array zugreifen, also verwenden wir `[1]`.
4. In diesem Objekt möchten wir auf die `powers`-Eigenschaft zugreifen, also verwenden wir `.powers`.
5. Innerhalb der `powers`-Eigenschaft befindet sich ein Array, das die Superkräfte des ausgewählten Helden enthält. Wir möchten die dritte, also verwenden wir `[2]`.

Die wichtigste Erkenntnis ist, dass es wirklich nichts Besonderes ist, mit JSON zu arbeiten; nachdem Sie es in ein JavaScript-Objekt geparst haben, arbeiten Sie damit genauso wie mit einem Objekt, das mit der gleichen Objektliteral-Syntax deklariert wurde.

> [!NOTE]
> Wir haben das oben gesehene JSON innerhalb einer Variablen in unserem [JSONTest.html](https://mdn.github.io/learning-area/javascript/oojs/json/JSONTest.html) Beispiel verfügbar gemacht (siehe den [Quellcode](https://github.com/mdn/learning-area/blob/main/javascript/oojs/json/JSONTest.html)).
> Versuchen Sie, dies zu laden und dann auf Daten innerhalb der Variablen über die JavaScript-Konsole Ihres Browsers zuzugreifen.

### Arrays als JSON

Oben erwähnten wir, dass JSON-Text im Grunde wie ein JavaScript-Objekt in einer Zeichenfolge aussieht.
Wir können auch Arrays zu/von JSON konvertieren. Das untenstehende Beispiel ist gültiges JSON:

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

Sie müssen auf Array-Elemente (in seiner geparsten Version) zugreifen, indem Sie mit einem Array-Index starten, zum Beispiel `superHeroes[0].powers[0]`.

Das JSON kann auch ein einziges primitives Element enthalten. Zum Beispiel sind `29`, `"Dan Jukes"` oder `true` alles gültige JSON.

### JSON-Syntaxbeschränkungen

Wie bereits erwähnt, ist jedes JSON ein gültiges JavaScript-Literal (Objekt, Array, Zahl usw.). Das Umgekehrte gilt jedoch nicht – nicht alle JavaScript-Objektliterale sind gültiges JSON.

- JSON kann nur _serialisierbare_ Datentypen enthalten. Das bedeutet:
  - Für primitive Typen kann JSON Zeichenfolgenliterale, Zahlendeklarationen, `true`, `false` und `null` enthalten. Bemerkenswerterweise kann es `undefined`, `NaN` oder `Infinity` nicht enthalten.
  - Für nicht-primitive Typen kann JSON Objektliterale und Arrays enthalten, aber keine Funktionen oder andere Objekttypen wie `Date`, `Set` und `Map`. Die Objekte und Arrays innerhalb von JSON müssen gültige JSON-Datentypen enthalten.
- Zeichenfolgen müssen in Anführungszeichen eingeschlossen werden, nicht in einfache Anführungszeichen.
- Zahlen müssen in Dezimalnotierung geschrieben werden.
- Jede Eigenschaft eines Objekts muss in der Form `"Schlüssel": Wert` vorliegen. Eigenschaftsnamen müssen Zeichenfolgenliterale sein, die in Anführungszeichen eingeschlossen sind. Spezielle JavaScript-Syntax, wie Methoden, ist nicht erlaubt, da Methoden Funktionen sind und Funktionen keine gültigen JSON-Datentypen sind.
- Objekte und Arrays dürfen keine [nachgestellten Kommata](/de/docs/Web/JavaScript/Reference/Trailing_commas) enthalten.
- Kommentare sind in JSON nicht erlaubt.

Selbst ein einzelnes fehlplatziertes Komma oder Doppelpunkt kann eine JSON-Datei ungültig machen und dazu führen, dass sie nicht funktioniert.
Sie sollten darauf achten, die Daten zu validieren, die Sie verwenden möchten (obwohl computergeneriertes JSON weniger wahrscheinlich Fehler enthält, solange das Generatorprogramm korrekt funktioniert).
Sie können JSON mit einer Anwendung wie [JSONLint](https://jsonlint.com/) validieren.

## Aktives Lernen: Durcharbeiten eines JSON-Beispiels

Also, lassen Sie uns ein Beispiel durcharbeiten, um zu zeigen, wie wir einige JSON-formatierte Daten auf einer Webseite verwenden könnten.

### Erste Schritte

Um zu beginnen, erstellen Sie lokale Kopien unserer [heroes.html](https://github.com/mdn/learning-area/blob/main/javascript/oojs/json/heroes.html) und [style.css](https://github.com/mdn/learning-area/blob/main/javascript/oojs/json/style.css) Dateien.
Letztere enthält einige einfache CSS-Anweisungen zum Stylen unserer Seite, während die erstere sehr einfaches HTML enthält, plus ein {{HTMLElement("script")}}-Element, um den JavaScript-Code zu enthalten, den wir in dieser Übung schreiben werden:

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

Wir haben unsere JSON-Daten auf unserem GitHub unter <https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json> zur Verfügung gestellt.

Wir werden das JSON in unser Skript laden und einige clevere DOM-Manipulationen verwenden, um es wie folgt anzuzeigen:

![Bild eines Dokuments mit dem Titel "Super hero squad" (in einer ausgefallenen Schrift) und dem Untertitel "Hometown: Metro City // Formed: 2016". Drei Spalten unter der Überschrift sind mit "Molecule Man", "Madame Uppercut" und "Eternal Flame" betitelt. Jede Spalte listet den geheimen Identitätsnamen, das Alter und die Superkräfte des Helden auf.](json-superheroes.png)

### Top-Level-Funktion

Die Top-Level-Funktion sieht so aus:

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
Diese API ermöglicht es uns, Netzwerkanfragen zu stellen, um Ressourcen von einem Server über JavaScript abzurufen (z. B. Bilder, Text, JSON, sogar HTML-Snippets), was bedeutet, dass wir kleine Inhaltsabschnitte aktualisieren können, ohne die gesamte Seite neu laden zu müssen.

In unserer Funktion verwenden die ersten vier Zeilen die Fetch API, um das JSON vom Server abzurufen:

- Wir deklarieren die Variable `requestURL`, um die GitHub-URL zu speichern
- Wir verwenden die URL, um ein neues [`Request`](/de/docs/Web/API/Request)-Objekt zu initialisieren.
- Wir stellen die Netzwerkanfrage mit der [`fetch()`](/de/docs/Web/API/Window/fetch)-Funktion, und dies gibt ein [`Response`](/de/docs/Web/API/Response)-Objekt zurück
- Wir rufen die Antwort als JSON ab, indem wir die [`json()`](/de/docs/Web/API/Response/json)-Funktion des `Response`-Objekts verwenden.

> [!NOTE]
> Die `fetch()` API ist **asynchron**. Sie können mehr über asynchrone Funktionen im Detail in unserem [Asynchrones JavaScript-Modul](/de/docs/Learn_web_development/Extensions/Async_JS) erfahren, aber fürs Erste, sagen wir nur, dass wir das Schlüsselwort {{jsxref("Statements/async_function", "async")}} vor den Namen der Funktion hinzufügen müssen, die die Fetch-API verwendet, und das Schlüsselwort {{jsxref("Operators/await", "await")}} vor den Aufrufen aller asynchronen Funktionen.

Nach alldem wird die `superHeroes`-Variable das JavaScript-Objekt basierend auf dem JSON enthalten. Wir übergeben dieses Objekt dann an zwei Funktionsaufrufe – der erste füllt den `<header>` mit den richtigen Daten, während der zweite eine Informationskarte für jeden Helden des Teams erstellt und in den `<section>` einfügt.

### Das Header ausfüllen

Jetzt, da wir die JSON-Daten abgerufen und in ein JavaScript-Objekt konvertiert haben, lassen Sie es uns nutzen, indem wir die beiden oben genannten Funktionen schreiben. Zuerst fügen Sie die folgende Funktionsdefinition unter dem vorherigen Code hinzu:

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

Hier erstellen wir zuerst ein {{HTMLElement("Heading_Elements", "h1")}}-Element mit [`createElement()`](/de/docs/Web/API/Document/createElement), setzen dessen [`textContent`](/de/docs/Web/API/Node/textContent) auf den `squadName`-Eigenschaft des Objekts und fügen es dann dem Header mit [`appendChild()`](/de/docs/Web/API/Node/appendChild) hinzu. Danach machen wir eine sehr ähnliche Operation mit einem Absatz: erstellen, seinen Textinhalt setzen und den Header anhängen. Der einzige Unterschied ist, dass sein Text auf eine [Template Literal](/de/docs/Web/JavaScript/Reference/Template_literals) gesetzt wird, die sowohl die `homeTown`- als auch die `formed`-Eigenschaften des Objekts enthält.

### Erstellung der Helden-Informationskarten

Fügen Sie als Nächstes die folgende Funktion am Ende des Codes hinzu, die die Superheldenkarten erstellt und anzeigt:

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

Zunächst speichern wir die `members`-Eigenschaft des JavaScript-Objekts in einer neuen Variablen. Dieses Array enthält mehrere Objekte, die die Informationen für jeden Helden enthalten.

Als nächstes verwenden wir eine [for...of-Schleife](/de/docs/Learn_web_development/Core/Scripting/Loops#the_for...of_loop), um durch jedes Objekt im Array zu schleifen. Für jedes Objekt:

1. Erstellen wir mehrere neue Elemente: ein `<article>`, ein `<h2>`, drei `<p>`s und eine `<ul>`.
2. Setzen wir das `<h2>` so, dass es den aktuellen Helden `name` enthält.
3. Füllen wir die drei Absätze mit ihren `secretIdentity`, `age` und einer Zeile, die "Superpowers:" sagt, um die Informationen in der Liste einzuführen.
4. Speichern wir die `powers`-Eigenschaft in einer anderen neuen Konstante `superPowers` — diese enthält ein Array, das die Superkräfte des aktuellen Helden auflistet.
5. Verwenden wir eine weitere `for...of`-Schleife, um durch die Superkräfte des aktuellen Helden zu schleifen — für jede erstellen wir ein `<li>`-Element, setzen die Superkraft innerhalb davon, und setzen das `listItem` innerhalb des `<ul>`-Elements (`myList`) mit `appendChild()`.
6. Das allerletzte, was wir tun, ist das Anhängen der `<h2>`, `<p>`s und `<ul>` innerhalb des `<article>` (`myArticle`), dann das Anhängen des `<article>` innerhalb des `<section>`. Die Reihenfolge, in der die Dinge angehängt werden, ist wichtig, da dies die Reihenfolge ist, in der sie innerhalb des HTML angezeigt werden.

> [!NOTE]
> Wenn Sie Schwierigkeiten haben, das Beispiel zum Laufen zu bringen, versuchen Sie, sich unseren [heroes-finished.html](https://github.com/mdn/learning-area/blob/main/javascript/oojs/json/heroes-finished.html)-Quellcode anzusehen (siehe es auch [live laufend](https://mdn.github.io/learning-area/javascript/oojs/json/heroes-finished.html)).

> [!NOTE]
> Wenn Sie Schwierigkeiten haben, die Punkt/Klammer-Notation zu verfolgen, die wir verwenden, um auf das JavaScript-Objekt zuzugreifen, kann es hilfreich sein, die [superheroes.json](https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json)-Datei in einem anderen Tab oder Ihrem Texteditor geöffnet zu haben und diese anzusehen, während Sie sich unser JavaScript ansehen.
> Sie sollten auch auf unseren Artikel [JavaScript-Objektgrundlagen](/de/docs/Learn_web_development/Core/Scripting/Object_basics) zurückgreifen, um mehr Informationen zu Punkt und Klammer-Notation zu erhalten.

### Aufruf der Top-Level-Funktion

Zum Schluss müssen wir unsere Top-Level-`populate()`-Funktion aufrufen:

```js
populate();
```

## Konvertieren zwischen Objekten und Text

Das obige Beispiel war in Bezug auf das Zugreifen auf das JavaScript-Objekt einfach, weil wir die Netzwerkantwort direkt in ein JavaScript-Objekt mit `response.json()` konvertiert haben.

Aber manchmal haben wir nicht so viel Glück — manchmal erhalten wir eine rohe JSON-Zeichenfolge, und wir müssen sie selbst in ein Objekt konvertieren. Und wenn wir ein JavaScript-Objekt über das Netzwerk senden möchten, müssen wir es vor dem Senden in JSON (eine Zeichenfolge) konvertieren. Zum Glück sind diese beiden Probleme so häufig in der Webentwicklung, dass ein eingebautes [JSON](/de/docs/Web/JavaScript/Reference/Global_Objects/JSON)-Objekt in Browsern verfügbar ist, das die folgenden zwei Methoden enthält:

- [`parse()`](/de/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse): Akzeptiert eine JSON-Zeichenfolge als Parameter und gibt das entsprechende JavaScript-Objekt zurück.
- [`stringify()`](/de/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify): Akzeptiert ein Objekt als Parameter und gibt die äquivalente JSON-Zeichenfolge zurück.

Sie können die erste Methode in unserem [heroes-finished-json-parse.html](https://mdn.github.io/learning-area/javascript/oojs/json/heroes-finished-json-parse.html)-Beispiel in Aktion sehen (siehe den [Quellcode](https://github.com/mdn/learning-area/blob/main/javascript/oojs/json/heroes-finished-json-parse.html)) — dieses macht genau dasselbe wie das Beispiel, das wir früher erstellt haben, außer dass:

- Wir die Antwort als Text anstelle von JSON abrufen, indem wir die [`text()`](/de/docs/Web/API/Response/text)-Methode der Antwort aufrufen
- Wir dann `parse()` verwenden, um den Text in ein JavaScript-Objekt zu konvertieren.

Der zentrale Codeausschnitt ist hier:

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

Wie Sie vielleicht vermuten, funktioniert `stringify()` in die entgegengesetzte Richtung. Versuchen Sie, die folgenden Zeilen nacheinander in Ihre JavaScript-Konsole des Browsers einzugeben, um es in Aktion zu sehen:

```js
let myObj = { name: "Chris", age: 38 };
myObj;
let myString = JSON.stringify(myObj);
myString;
```

Hier erstellen wir ein JavaScript-Objekt, schauen dann, was es enthält, und konvertieren es dann mit `stringify()` in eine JSON-Zeichenfolge — und speichern den Rückgabewert in einer neuen Variablen — und schauen es erneut an.

## Testen Sie Ihre Fähigkeiten!

Sie haben das Ende dieses Artikels erreicht, aber können Sie sich die wichtigsten Informationen merken? Sie finden einige weitere Tests, um zu prüfen, ob Sie diese Informationen behalten haben, bevor Sie weitermachen – siehe [Testen Sie Ihre Fähigkeiten: JSON](/de/docs/Learn_web_development/Core/Scripting/Test_your_skills:_JSON).

## Zusammenfassung

In dieser Lektion haben wir Sie in die Verwendung von JSON in Ihren Programmen eingeführt, einschließlich der Erstellung und des Parsens von JSON und des Zugriffs auf die darin enthaltenen Daten. Im nächsten Artikel werden wir praktische Techniken zur Fehlersuche in JavaScript und zur Fehlerbehandlung untersuchen.

## Siehe auch

- [JSON-Referenz](/de/docs/Web/JavaScript/Reference/Global_Objects/JSON)
- [Fetch API Überblick](/de/docs/Web/API/Fetch_API)
- [Fetch verwenden](/de/docs/Web/API/Fetch_API/Using_Fetch)
- [HTTP-Anfragemethoden](/de/docs/Web/HTTP/Reference/Methods)

{{PreviousMenuNext("Learn_web_development/Core/Scripting/Network_requests","Learn_web_development/Core/Scripting/Debugging_JavaScript", "Learn_web_development/Core/Scripting")}}
