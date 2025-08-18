---
title: Arbeiten mit JSON
short-title: JSON
slug: Learn_web_development/Core/Scripting/JSON
l10n:
  sourceCommit: 9d3d642daf9df9ece138fa39972edc5f7d6dcd6b
---

{{PreviousMenuNext("Learn_web_development/Core/Scripting/Network_requests","Learn_web_development/Core/Scripting/Test_your_skills/JSON", "Learn_web_development/Core/Scripting")}}

JavaScript Object Notation (JSON) ist ein standardisiertes textbasiertes Format zur Darstellung von strukturierten Daten, das auf der JavaScript-Objektsyntax basiert. Es wird häufig zum Übertragen von Daten in Webanwendungen verwendet (z. B. zum Senden von Daten vom Server an den Client, damit diese auf einer Webseite angezeigt werden können, oder umgekehrt). Sie werden häufig darauf stoßen, daher geben wir Ihnen in diesem Artikel alle Informationen, die Sie benötigen, um mit JSON unter Verwendung von JavaScript zu arbeiten, einschließlich der Analyse von JSON, damit Sie auf die darin enthaltenen Daten zugreifen können, und der Erstellung von JSON.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>Ein Verständnis von <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a> und den <a href="/de/docs/Learn_web_development/Core/Styling_basics">Grundlagen von CSS</a>, sowie Vertrautheit mit den JavaScript-Grundlagen, die in den vorherigen Lektionen behandelt wurden.</td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Was JSON ist — ein sehr häufig verwendetes Datenformat, das auf JavaScript-Objektsyntax basiert.</li>
          <li>Dass JSON auch Arrays enthalten kann.</li>
          <li>Abrufen von JSON als JavaScript-Objekt mit Mechanismen, die in Web-APIs verfügbar sind (zum Beispiel <code>Response.json()</code> in der Fetch-API).</li>
          <li>Zugriff auf Werte innerhalb von JSON-Daten mit Klammer- und Punktnotation.</li>
          <li>Konvertierung zwischen Objekten und Text mit <code>JSON.parse()</code> und <code>JSON.stringify()</code>.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Nein, wirklich, was ist JSON?

{{Glossary("JSON", "JSON")}} ist ein textbasiertes Datenformat, das der JavaScript-Objektsyntax folgt.
Es stellt strukturierte Daten als eine Zeichenkette dar, was nützlich ist, wenn Sie Daten über ein Netzwerk übertragen möchten.
Obwohl es der JavaScript-Objektliteral-Syntax sehr ähnlich ist, kann es unabhängig von JavaScript verwendet werden. Viele Programmierumgebungen verfügen über die Fähigkeit, JSON zu lesen (zu parsen) und zu erzeugen.
In JavaScript werden die Methoden zur Analyse und Erzeugung von JSON durch das [`JSON`](/de/docs/Web/JavaScript/Reference/Global_Objects/JSON)-Objekt bereitgestellt.

> [!NOTE]
> Die Umwandlung eines Strings in ein natives Objekt wird als _Deserialisierung_ bezeichnet, während die Umwandlung eines nativen Objekts in einen String, sodass es über das Netzwerk übertragen werden kann, als _Serialisierung_ bezeichnet wird.

Ein JSON-String kann in einer eigenen Datei gespeichert werden, die im Grunde genommen nur eine Textdatei mit der Erweiterung `.json` und einem {{Glossary("MIME_type", "MIME-Typ")}} von `application/json` ist.

### JSON-Struktur

Wie oben beschrieben, ist JSON eine Zeichenkette, deren Format der JavaScript-Objektliteral-Format sehr ähnlich ist.
Das folgende ist eine gültige JSON-Zeichenkette, die ein Objekt darstellt.
Beachten Sie, dass es sich auch um ein gültiges JavaScript-Objektliteral handelt — nur mit einigen weiteren [Syntaxeinschränkungen](#json-syntaxeinschränkungen).

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

Wenn Sie diese JSON in Ihrem JavaScript-Programm als String laden, können Sie sie in ein normales Objekt umwandeln und dann auf die darin enthaltenen Daten mit derselben Punkt-/Klammernotation zugreifen, die wir im Artikel [JavaScript-Objekt-Grundlagen](/de/docs/Learn_web_development/Core/Scripting/Object_basics) behandelt haben.
Zum Beispiel:

```js
superHeroes.homeTown;
superHeroes.members[1].powers[2];
```

1. Zuerst haben wir den Variablennamen — `superHeroes`.
2. Darin möchten wir auf die Eigenschaft `members` zugreifen, also verwenden wir `.members`.
3. `members` enthält ein Array, das mit Objekten gefüllt ist. Wir möchten auf das zweite Objekt innerhalb des Arrays zugreifen, daher verwenden wir `[1]`.
4. In diesem Objekt möchten wir auf die Eigenschaft `powers` zugreifen, also verwenden wir `.powers`.
5. In der Eigenschaft `powers` befindet sich ein Array, das die Superkräfte des ausgewählten Helden enthält. Wir möchten die dritte, also verwenden wir `[2]`.

Die wichtigste Erkenntnis ist, dass es wirklich nichts Besonderes bei der Arbeit mit JSON gibt; nachdem Sie es in ein JavaScript-Objekt analysiert haben, arbeiten Sie damit genauso, wie Sie es mit einem Objekt tun würden, das unter Verwendung derselben Objektliteral-Syntax deklariert wurde.

> [!NOTE]
> Wir haben das oben gesehene JSON in unserer [JSONTest.html](https://mdn.github.io/learning-area/javascript/oojs/json/JSONTest.html)-Beispiel in einer Variablen verfügbar gemacht (siehe den [Quellcode](https://github.com/mdn/learning-area/blob/main/javascript/oojs/json/JSONTest.html)).
> Versuchen Sie, es zu laden und dann auf die Daten innerhalb der Variablen über die JavaScript-Konsole Ihres Browsers zuzugreifen.

### Arrays als JSON

Oben haben wir erwähnt, dass JSON-Text im Wesentlichen wie ein JavaScript-Objekt innerhalb einer Zeichenkette aussieht.
Wir können auch Arrays zu/von JSON konvertieren. Das folgende Beispiel ist ein perfektes gültiges JSON:

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

Sie müssen auf Array-Elemente (in ihrer geparsten Version) zugreifen, indem Sie mit einem Array-Index beginnen, zum Beispiel `superHeroes[0].powers[0]`.

Das JSON kann auch eine einzelne primitive enthalten. Zum Beispiel sind `29`, `"Dan Jukes"` oder `true` alle gültige JSON.

### JSON-Syntaxeinschränkungen

Wie bereits erwähnt, ist jedes JSON ein gültiges JavaScript-Literal (Objekt, Array, Zahl usw.). Das Umgekehrte gilt jedoch nicht — nicht alle JavaScript-Objektliterale sind gültiges JSON.

- JSON kann nur _serialisierbare_ Datentypen enthalten. Das bedeutet:
  - Bei Primitiven kann JSON Zeichenfolgenliterale, Zahlenliterale, `true`, `false` und `null` enthalten. Bemerkenswerterweise kann es `undefined`, `NaN` oder `Infinity` nicht enthalten.
  - Bei Nicht-Primitiven kann JSON Objektliterale und Arrays enthalten, aber keine Funktionen oder andere Objekttypen wie `Date`, `Set` und `Map`. Die Objekte und Arrays in JSON müssen weiterhin gültige JSON-Datentypen enthalten.
- Zeichenfolgen müssen in doppelte Anführungszeichen gesetzt werden, nicht in einfache Anführungszeichen.
- Zahlen müssen im Dezimalsystem geschrieben werden.
- Jede Eigenschaft eines Objekts muss in der Form `"key": value` vorliegen. Eigenschaftsnamen müssen Zeichenfolgenliterale sein, die in doppelte Anführungszeichen gesetzt sind. Spezielle JavaScript-Syntax, wie Methoden, sind nicht erlaubt, da Methoden Funktionen sind und Funktionen keine gültigen JSON-Datentypen sind.
- Objekte und Arrays dürfen keine [nachgestellten Kommata](/de/docs/Web/JavaScript/Reference/Trailing_commas) enthalten.
- Kommentare sind in JSON nicht erlaubt.

Selbst ein einziges fehlplatziertes Komma oder Doppelpunkt kann eine JSON-Datei ungültig machen und dazu führen, dass sie fehlschlägt.
Sie sollten sorgfältig darauf achten, jegliche Daten zu validieren, die Sie verwenden möchten (obwohl computergeneriertes JSON weniger wahrscheinlich Fehler enthält, solange das Generierungsprogramm korrekt funktioniert).
Sie können JSON mit einer Anwendung wie [JSONLint](https://jsonlint.com/) oder [JSON-validate](https://www.json-validate.com/) validieren.

> [!NOTE]
> Nachdem Sie diesen Abschnitt gelesen haben, möchten Sie Ihr Lernen möglicherweise auch mit Scrimbas [JSON-Überprüfung](https://scrimba.com/frontend-path-c0j/~0lt?via=mdn) <sup>[_MDN-Lernpartner_](/de/docs/MDN/Writing_guidelines/Learning_content#partner_links_and_embeds)</sup> interaktivem Tutorial ergänzen, das einige nützliche Anleitungen zur grundlegenden JSON-Syntax und zum Anzeigen von JSON-Anfragedaten in den Entwickler-Tools Ihres Browsers bietet.

## Durchgehen eines JSON-Beispiels

Lassen Sie uns nun ein Beispiel durchgehen, um zu zeigen, wie wir einige JSON-formatierte Daten auf einer Website nutzen könnten.

### Starten

Erstellen Sie zunächst lokale Kopien unserer [heroes.html](https://github.com/mdn/learning-area/blob/main/javascript/oojs/json/heroes.html) und [style.css](https://github.com/mdn/learning-area/blob/main/javascript/oojs/json/style.css) Dateien.
Letztere enthält etwas einfaches CSS, um unsere Seite zu stylen, während die erste etwas sehr simples HTML für den Body sowie ein {{HTMLElement("script")}}-Element enthält, um den JavaScript-Code zu speichern, den wir in dieser Übung schreiben werden:

```html-nolint
<header>
...
</header>

<section>
...
</section>

<script>
// JavaScript goes here
</script>
```

Wir haben unsere JSON-Daten auf unserem GitHub verfügbar gemacht, unter <https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json>.

Wir werden das JSON in unser Skript laden und einige raffinierte DOM-Manipulationen verwenden, um es anzuzeigen, wie hier:

![Bild eines Dokuments mit dem Titel "Super hero squad" (in einer ausgefallenen Schriftart) und Untertitel "Heimatstadt: Metro City // Gegründet: 2016". Drei Spalten unter der Überschrift sind mit "Molecule Man", "Madame Uppercut" und "Eternal Flame" betitelt. Jede Spalte listet den geheimen Identitätsnamen, das Alter und die Superkräfte des Helden auf.](json-superheroes.png)

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
Diese API ermöglicht es uns, Netzwerk-Anfragen zu stellen, um Ressourcen von einem Server über JavaScript abzurufen (zum Beispiel Bilder, Text, JSON, sogar HTML-Schnipsel), was bedeutet, dass wir kleine Abschnitte von Inhalten aktualisieren können, ohne die gesamte Seite neu laden zu müssen.

In unserer Funktion verwenden die ersten vier Zeilen die Fetch-API, um das JSON vom Server abzurufen:

- wir deklarieren die Variable `requestURL`, um die GitHub-URL zu speichern
- wir verwenden die URL, um ein neues [`Request`](/de/docs/Web/API/Request)-Objekt zu initialisieren.
- wir führen die Netzwerk-Anfrage mit der [`fetch()`](/de/docs/Web/API/Window/fetch)-Funktion durch, und dies gibt ein [`Response`](/de/docs/Web/API/Response)-Objekt zurück
- wir rufen die Antwort als JSON ab, indem wir die [`json()`](/de/docs/Web/API/Response/json)-Funktion des `Response`-Objekts verwenden.

> [!NOTE]
> Die `fetch()` API ist **asynchron**. Sie können mehr über asynchrone Funktionen in unserem [Asynchronous JavaScript Modul](/de/docs/Learn_web_development/Extensions/Async_JS) erfahren, aber vorerst sagen wir nur, dass wir das Schlüsselwort {{jsxref("Statements/async_function", "async")}} vor dem Namen der Funktion hinzufügen müssen, die die fetch API verwendet, und das Schlüsselwort {{jsxref("Operators/await", "await")}} vor die Aufrufe jeder asynchronen Funktion hinzufügen müssen.

Nach alledem enthält die Variable `superHeroes` das JavaScript-Objekt, das auf dem JSON basiert. Wir übergeben dieses Objekt dann an zwei Funktionsaufrufe — der erste füllt das `<header>` mit den korrekten Daten, während der zweite eine Informationskarte für jeden Helden im Team erstellt und sie in das `<section>` einfügt.

### Füllen des Headers

Nachdem wir die JSON-Daten abgerufen und in ein JavaScript-Objekt umgewandelt haben, lassen Sie uns es mit den zwei Funktionen nutzen, auf die wir oben verwiesen haben. Fügen Sie zunächst die folgende Funktionsdefinition unter dem vorherigen Code hinzu:

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

Hier erstellen wir zuerst ein {{HTMLElement("Heading_Elements", "h1")}}-Element mit [`createElement()`](/de/docs/Web/API/Document/createElement), setzen sein [`textContent`](/de/docs/Web/API/Node/textContent) auf den Wert der `squadName`-Eigenschaft des Objekts und hängen es dann mit [`appendChild()`](/de/docs/Web/API/Node/appendChild) an den Header an. Wir führen dann eine sehr ähnliche Operation mit einem Absatz aus: Wir erstellen ihn, setzen seinen Textinhalt und hängen ihn an den Header an. Der einzige Unterschied besteht darin, dass sein Textinhalt ein [Template-Literal](/de/docs/Web/JavaScript/Reference/Template_literals) ist, das sowohl die `homeTown`- als auch die `formed`-Eigenschaft des Objekts enthält.

### Erstellen der Helden-Informationskarten

Fügen Sie als nächstes die folgende Funktion am unteren Ende des Codes hinzu, die die Superheldenkarten erstellt und anzeigt:

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

Zunächst speichern wir die `members`-Eigenschaft des JavaScript-Objekts in einer neuen Variable. Dieses Array enthält mehrere Objekte, die die Informationen für jeden Helden enthalten.

Als nächstes verwenden wir eine [`for...of`-Schleife](/de/docs/Learn_web_development/Core/Scripting/Loops#the_for...of_loop), um jedes Objekt im Array zu durchlaufen. Für jedes davon:

1. Erstellen wir mehrere neue Elemente: ein `<article>`, ein `<h2>`, drei `<p>`s und ein `<ul>`.
2. Setzen wir das `<h2>`, um den aktuellen `name` der Helden zu enthalten.
3. Füllen wir die drei Absätze mit ihren `secretIdentity`, `age` und einer Zeile "Superpowers:", um die Informationen in der Liste einzuführen.
4. Speichern wir die `powers`-Eigenschaft in einer weiteren neuen Konstante namens `superPowers` — diese enthält ein Array, das die aktuellen Superkräfte des Helden auflistet.
5. Verwenden wir eine weitere `for...of`-Schleife, um die aktuellen Superkräfte des Helden durchzugehen — für jede erstellen wir ein `<li>`-Element, setzen die Superkraft hinein und setzen das `listItem` innerhalb des `<ul>`-Elements (`myList`) mit `appendChild()`.
6. Das letzte, was wir tun, ist das Anhängen des `<h2>`, der `<p>`s und des `<ul>` innerhalb des `<article>` (`myArticle`), und dann Anhängen des `<article>` innerhalb des `<section>`. Die Reihenfolge, in der Dinge angehängt werden, ist wichtig, da dies die Reihenfolge ist, in der sie im HTML angezeigt werden.

> [!NOTE]
> Wenn Sie Schwierigkeiten haben, das Beispiel zum Laufen zu bringen, versuchen Sie, auf unseren [heroes-finished.html](https://github.com/mdn/learning-area/blob/main/javascript/oojs/json/heroes-finished.html) Quellcode zu verweisen (sehen Sie es auch [live laufen](https://mdn.github.io/learning-area/javascript/oojs/json/heroes-finished.html)).

> [!NOTE]
> Wenn Sie Schwierigkeiten haben, der Punkt-/Klammernotation zu folgen, die wir verwenden, um auf das JavaScript-Objekt zuzugreifen, kann es hilfreich sein, die [superheroes.json](https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json) Datei in einem anderen Tab oder Texteditor geöffnet zu haben und darauf zu verweisen, während Sie auf unser JavaScript schauen.
> Sie sollten auch auf unseren Artikel [JavaScript-Objekt-Grundlagen](/de/docs/Learn_web_development/Core/Scripting/Object_basics) zurückgreifen, um mehr Informationen über Punkt- und Klammernotation zu erhalten.

### Aufruf der Top-Level-Funktion

Schließlich müssen wir unsere Top-Level-`populate()`-Funktion aufrufen:

```js
populate();
```

## Konvertierung zwischen Objekten und Text

Das obige Beispiel war in Bezug auf den Zugriff auf das JavaScript-Objekt einfach, da wir die Netzwerkantwort direkt in ein JavaScript-Objekt mit `response.json()` konvertiert haben.

Aber manchmal haben wir nicht so viel Glück — manchmal erhalten wir einen rohen JSON-String, und wir müssen ihn selbst in ein Objekt umwandeln. Und wenn wir ein JavaScript-Objekt über das Netzwerk senden möchten, müssen wir es in JSON (einen String) konvertieren, bevor wir es senden. Zum Glück sind diese beiden Probleme so häufig in der Webentwicklung, dass ein eingebautes [JSON](/de/docs/Web/JavaScript/Reference/Global_Objects/JSON)-Objekt in Browsern verfügbar ist, das die folgenden zwei Methoden enthält:

- [`parse()`](/de/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse): Akzeptiert eine JSON-Zeichenkette als Parameter und gibt das entsprechende JavaScript-Objekt zurück.
- [`stringify()`](/de/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify): Akzeptiert ein Objekt als Parameter und gibt die äquivalente JSON-Zeichenkette zurück.

Sie können die erste in Aktion in unserem [heroes-finished-json-parse.html](https://mdn.github.io/learning-area/javascript/oojs/json/heroes-finished-json-parse.html) Beispiel sehen (siehe den [Quellcode](https://github.com/mdn/learning-area/blob/main/javascript/oojs/json/heroes-finished-json-parse.html)) — dies tut genau dasselbe wie das Beispiel, das wir zuvor aufgebaut haben, außer dass:

- wir die Antwort als Text anstelle von JSON abrufen, indem wir die [`text()`](/de/docs/Web/API/Response/text) Methode der Antwort aufrufen
- wir dann `parse()` verwenden, um den Text in ein JavaScript-Objekt zu konvertieren.

Der entscheidende Code-Schnipsel ist hier:

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

Wie Sie sich möglicherweise denken können, funktioniert `stringify()` in umgekehrter Richtung. Versuchen Sie, die folgenden Zeilen nacheinander in die JavaScript-Konsole Ihres Browsers einzugeben, um sie in Aktion zu sehen:

```js
let myObj = { name: "Chris", age: 38 };
myObj;
let myString = JSON.stringify(myObj);
myString;
```

Hier erstellen wir ein JavaScript-Objekt, überprüfen, was es enthält, konvertieren es in einen JSON-String mit `stringify()` — speichern den Rückgabewert in einer neuen Variable — und überprüfen es dann erneut.

## Zusammenfassung

In dieser Lektion haben wir Ihnen vorgestellt, wie Sie JSON in Ihren Programmen verwenden, einschließlich wie Sie JSON erstellen und parsen und wie Sie auf die darin eingeschlossenen Daten zugreifen können. Im nächsten Artikel geben wir Ihnen einige Tests, die Sie verwenden können, um zu überprüfen, wie gut Sie all diese Informationen verstanden und behalten haben.

## Siehe auch

- [JSON-Referenz](/de/docs/Web/JavaScript/Reference/Global_Objects/JSON)
- [Übersicht über die Fetch API](/de/docs/Web/API/Fetch_API)
- [Fetch verwenden](/de/docs/Web/API/Fetch_API/Using_Fetch)
- [HTTP-Anfragemethoden](/de/docs/Web/HTTP/Reference/Methods)

{{PreviousMenuNext("Learn_web_development/Core/Scripting/Network_requests","Learn_web_development/Core/Scripting/Test_your_skills/JSON", "Learn_web_development/Core/Scripting")}}
