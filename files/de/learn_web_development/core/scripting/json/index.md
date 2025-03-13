---
title: Arbeiten mit JSON
slug: Learn_web_development/Core/Scripting/JSON
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{LearnSidebar}}

{{PreviousMenuNext("Learn_web_development/Core/Scripting/Network_requests","Learn_web_development/Core/Scripting/Debugging_JavaScript", "Learn_web_development/Core/Scripting")}}

JavaScript Object Notation (JSON) ist ein standardisiertes, textbasiertes Format zur Darstellung strukturierter Daten, das auf der JavaScript-Objektsyntax basiert. Es wird häufig zum Übertragen von Daten in Webanwendungen verwendet (z. B. um Daten vom Server zum Client zu senden, sodass sie auf einer Webseite angezeigt werden können, oder umgekehrt). Sie werden es häufig antreffen, deshalb bieten wir Ihnen in diesem Artikel alles, was Sie benötigen, um mit JSON in JavaScript zu arbeiten, einschließlich JSON-Parsing, um auf Daten innerhalb davon zuzugreifen, und JSON-Erstellung.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>Ein Verständnis von <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a> und den <a href="/de/docs/Learn_web_development/Core/Styling_basics">Grundlagen von CSS</a>, Vertrautheit mit den JavaScript-Grundlagen, die in früheren Lektionen behandelt wurden.</td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Was JSON ist – ein sehr häufig verwendetes Datenformat, das auf der JavaScript-Objektsyntax basiert.</li>
          <li>Dass JSON auch Arrays enthalten kann.</li>
          <li>Abrufen von JSON als JavaScript-Objekt mit den in Web-APIs verfügbaren Mechanismen (zum Beispiel <code>Response.json()</code> in der Fetch API).</li>
          <li>Zugriff auf Werte innerhalb von JSON-Daten mit Klammer- und Punktnotation.</li>
          <li>Konvertieren zwischen Objekten und Text mit <code>JSON.parse()</code> und <code>JSON.stringify()</code>.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Nein, wirklich, was ist JSON?

{{Glossary("JSON", "JSON")}} ist ein textbasiertes Datenformat, das der JavaScript-Objektsyntax folgt und von [Douglas Crockford](https://en.wikipedia.org/wiki/Douglas_Crockford) popularisiert wurde.
Obwohl es stark der Syntax von JavaScript-Objektliteralen ähnelt, kann es unabhängig von JavaScript verwendet werden, und viele Entwicklungsumgebungen bieten die Möglichkeit, JSON zu lesen (zu parsen) und zu generieren.

JSON existiert als String – nützlich, wenn Sie Daten über ein Netzwerk übertragen möchten.
Es muss in ein natives JavaScript-Objekt konvertiert werden, wenn Sie auf die Daten zugreifen möchten.
Dies ist kein großes Problem – JavaScript bietet ein globales [JSON](/de/docs/Web/JavaScript/Reference/Global_Objects/JSON)-Objekt, das Methoden zum Konvertieren zwischen den beiden bereitstellt.

> [!NOTE]
> Die Konvertierung eines Strings in ein natives Objekt wird _Deserialisierung_ genannt, während die Konvertierung eines nativen Objekts in einen String, damit er über das Netzwerk übertragen werden kann, _Serialisierung_ genannt wird.

Ein JSON-String kann in einer eigenen Datei gespeichert werden, im Grunde nur eine Textdatei mit der Erweiterung `.json` und einem {{Glossary("MIME_type", "MIME-Typ")}} von `application/json`.

### JSON-Struktur

Wie oben beschrieben, ist JSON ein String, dessen Format sehr an das Format von JavaScript-Objektliteralen erinnert.
Sie können in JSON dieselben grundlegenden Datentypen aufnehmen wie in einem Standard-JavaScript-Objekt – Strings, Zahlen, Arrays, Booleans und andere Objektliterale.
Dies ermöglicht Ihnen den Aufbau einer Datenhierarchie, wie folgt:

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

Wenn wir diesen String in ein JavaScript-Programm laden und in eine Variable namens `superHeroes` parsen würden, könnten wir auf die darin enthaltenen Daten mit derselben Punkt-/Klammernotation zugreifen, die wir im Artikel [JavaScript-Objekt-Grundlagen](/de/docs/Learn_web_development/Core/Scripting/Object_basics) untersucht haben.
Zum Beispiel:

```js
superHeroes.homeTown;
superHeroes["active"];
```

Um auf Daten weiter unten in der Hierarchie zuzugreifen, müssen Sie die erforderlichen Eigenschaftsnamen und Array-Indizes miteinander verknüpfen. Um zum Beispiel auf die dritte Superkraft des zweiten Helden in der Mitgliederliste zuzugreifen, würden Sie Folgendes tun:

```js
superHeroes["members"][1]["powers"][2];
```

1. Zuerst haben wir den Variablennamen – `superHeroes`.
2. Innerhalb davon möchten wir auf die Eigenschaft `members` zugreifen, also verwenden wir `["members"]`.
3. `members` enthält ein Array voller Objekte. Wir möchten auf das zweite Objekt im Array zugreifen, also verwenden wir `[1]`.
4. Innerhalb dieses Objekts möchten wir auf die Eigenschaft `powers` zugreifen, also verwenden wir `["powers"]`.
5. Innerhalb der Eigenschaft `powers` befindet sich ein Array, das die Superkräfte des ausgewählten Helden enthält. Wir möchten die dritte, also verwenden wir `[2]`.

> [!NOTE]
> Wir haben das oben gezeigte JSON in einer Variablen in unserem [JSONTest.html](https://mdn.github.io/learning-area/javascript/oojs/json/JSONTest.html)-Beispiel verfügbar gemacht (siehe den [Quellcode](https://github.com/mdn/learning-area/blob/main/javascript/oojs/json/JSONTest.html)).
> Versuchen Sie, dies zu öffnen und dann über die JavaScript-Konsole Ihres Browsers auf Daten innerhalb der Variablen zuzugreifen.

### Arrays als JSON

Oben haben wir erwähnt, dass JSON-Text im Grunde wie ein JavaScript-Objekt innerhalb eines Strings aussieht.
Wir können auch Arrays in JSON konvertieren und daraus zurückkonvertieren. Das untenstehende Beispiel ist ein völlig gültiges JSON:

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

Sie müssen auf Array-Elemente (in seiner geparsten Version) zugreifen, indem Sie mit einem Array-Index beginnen, zum Beispiel `[0]["powers"][0]`.

### Weitere Hinweise

- JSON ist rein ein String mit einem spezifizierten Datenformat – es enthält nur Eigenschaften, keine Methoden.
- JSON erfordert doppelte Anführungszeichen um Strings und Eigenschaftsnamen.
  Einfache Anführungszeichen sind nur zulässig, wenn sie den gesamten JSON-String umgeben.
- Selbst ein falsch platziertes Komma oder Doppelpunkt kann eine JSON-Datei fehlerhaft machen und nicht funktionieren.
  Sie sollten darauf achten, alle Daten, die Sie verwenden möchten, zu validieren (obwohl computergeneriertes JSON weniger wahrscheinlich Fehler enthält, solange das Generierungsprogramm korrekt funktioniert).
  Sie können JSON mit einer Anwendung wie [JSONLint](https://jsonlint.com/) validieren.
- JSON kann tatsächlich in der Form eines beliebigen Datentyps vorliegen, der für die Aufnahme in JSON gültig ist, nicht nur von Arrays oder Objekten.
  Zum Beispiel wäre ein einzelner String oder eine Zahl gültiges JSON.
- Anders als im JavaScript-Code, in dem Objekt-Eigenschaften unzitiert sein können, dürfen in JSON nur zitierte Strings als Eigenschaften verwendet werden.

## Aktives Lernen: Durcharbeiten eines JSON-Beispiels

Lassen Sie uns ein Beispiel durchgehen, um zu zeigen, wie wir JSON-formatierte Daten auf einer Website nutzen könnten.

### Einstieg

Zunächst machen Sie lokale Kopien unserer [heroes.html](https://github.com/mdn/learning-area/blob/main/javascript/oojs/json/heroes.html) und [style.css](https://github.com/mdn/learning-area/blob/main/javascript/oojs/json/style.css) Dateien.
Letztere enthält einige einfache CSS, um unsere Seite zu gestalten, während die erstere etwas sehr einfaches HTML für den Body enthält, plus ein {{HTMLElement("script")}}-Element, um den JavaScript-Code unterzubringen, den wir in dieser Übung schreiben werden:

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

Wir haben unsere JSON-Daten auf unserem GitHub verfügbar gemacht, unter <https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json>.

Wir werden JSON in unser Skript laden und einige schicke DOM-Manipulationen verwenden, um es anzuzeigen, etwa so:

![Bild eines Dokuments mit dem Titel "Super hero squad" (in einer eleganten Schrift) und dem Untertitel "Hometown: Metro City // Formed: 2016". Drei Spalten unter der Überschrift tragen die Titel "Molecule Man", "Madame Uppercut" und "Eternal Flame". Jede Spalte listet den geheimen Identitätsnamen des Helden, das Alter und die Superkräfte auf.](json-superheroes.png)

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
Diese API ermöglicht es uns, Netzwerkanfragen zu stellen, um Ressourcen von einem Server via JavaScript abzurufen (z. B. Bilder, Text, JSON, sogar HTML-Schnipsel), was bedeutet, dass wir kleine Inhaltsabschnitte aktualisieren können, ohne die gesamte Seite neu laden zu müssen.

In unserer Funktion verwenden die ersten vier Zeilen die Fetch API, um das JSON vom Server abzurufen:

- Wir deklarieren die Variable `requestURL`, um die GitHub-URL zu speichern
- Wir verwenden die URL, um ein neues [`Request`](/de/docs/Web/API/Request)-Objekt zu initialisieren.
- Wir führen die Netzwerkanfrage mit der Funktion [`fetch()`](/de/docs/Web/API/Window/fetch) aus, und dies gibt ein [`Response`](/de/docs/Web/API/Response)-Objekt zurück
- Wir rufen die Antwort als JSON mit der Funktion [`json()`](/de/docs/Web/API/Response/json) des `Response`-Objekts ab.

> [!NOTE]
> Die `fetch()`-API ist **asynchron**. Sie können mehr über asynchrone Funktionen in unserem [Asynchrone JavaScript-Modul](/de/docs/Learn_web_development/Extensions/Async_JS) lernen, aber vorerst sagen wir nur, dass wir das Schlüsselwort {{jsxref("Statements/async_function", "async")}} vor den Namen der Funktion setzen müssen, die die Fetch API verwendet, und das Schlüsselwort {{jsxref("Operators/await", "await")}} vor die Aufrufe aller asynchronen Funktionen setzen müssen.

Nach all dem wird die Variable `superHeroes` das JavaScript-Objekt basierend auf dem JSON enthalten. Wir übergeben dieses Objekt dann zwei Funktionsaufrufen – der erste füllt den `<header>` mit den korrekten Daten, während der zweite eine Informationskarte für jeden Helden im Team erstellt und sie in das `<section>` einfügt.

### Den Header ausfüllen

Nachdem wir die JSON-Daten abgerufen und in ein JavaScript-Objekt konvertiert haben, nutzen wir es, indem wir die beiden oben referenzierten Funktionen schreiben. Fügen Sie zunächst die folgende Funktionsdefinition unter dem vorherigen Code hinzu:

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

Hier erstellen wir zuerst ein {{HTMLElement("Heading_Elements", "h1")}}-Element mit [`createElement()`](/de/docs/Web/API/Document/createElement), setzen dessen [`textContent`](/de/docs/Web/API/Node/textContent) auf die `squadName`-Eigenschaft des Objekts und hängen es dann mit [`appendChild()`](/de/docs/Web/API/Node/appendChild) an den Header an. Wir führen dann eine sehr ähnliche Operation mit einem Absatz durch: Wir erstellen ihn, setzen seinen Textinhalt und fügen ihn dem Header hinzu. Der einzige Unterschied besteht darin, dass sein Text auf eine [Template-Literal](/de/docs/Web/JavaScript/Reference/Template_literals) gesetzt ist, das sowohl die `homeTown`- als auch die `formed`-Eigenschaften des Objekts enthält.

### Erstellen der Helden-Informationskarten

Fügen Sie dann am Ende des Codes die folgende Funktion hinzu, die die Heldenkarten erstellt und anzeigt:

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

Als nächstes verwenden wir eine [for...of-Schleife](/de/docs/Learn_web_development/Core/Scripting/Loops#the_for...of_loop), um jedes Objekt im Array zu durchlaufen. Für jedes einzelne:

1. Erstellen wir mehrere neue Elemente: ein `<article>`, ein `<h2>`, drei `<p>` und ein `<ul>`.
2. Setzen wir das `<h2>`, um den `name` des aktuellen Helden zu enthalten.
3. Füllen wir die drei Absätze mit ihrem `secretIdentity`, `age` und einer Zeile, die "Superpowers:" sagt, um die Informationen in der Liste einzuführen.
4. Speichern wir die `powers`-Eigenschaft in einer weiteren neuen Konstanten namens `superPowers` — diese enthält ein Array, das die Superkräfte des aktuellen Helden auflistet.
5. Verwenden wir eine weitere `for...of`-Schleife, um durch die Superkräfte des aktuellen Helden zu schleifen — für jede erstellen wir ein `<li>`-Element, setzen die Superkraft hinein und setzen dann das `listItem` mit `appendChild()` in das `<ul>`-Element (`myList`).
6. Das Allerletzte, was wir tun, ist, das `<h2>`, die `<p>`s und das `<ul>` in das `<article>` (`myArticle`) einzufügen, und dann `<article>` in `<section>` einzufügen. Die Reihenfolge, in der die Elemente hinzugefügt werden, ist wichtig, da dies die Reihenfolge ist, in der sie im HTML angezeigt werden.

> [!NOTE]
> Wenn Sie Schwierigkeiten haben, das Beispiel zum Laufen zu bringen, versuchen Sie, unseren [heroes-finished.html](https://github.com/mdn/learning-area/blob/main/javascript/oojs/json/heroes-finished.html) Quellcode zu konsultieren (siehe es auch [live](https://mdn.github.io/learning-area/javascript/oojs/json/heroes-finished.html) in Aktion.)

> [!NOTE]
> Wenn Sie Schwierigkeiten haben, die Punkt-/Klammernotation zu verfolgen, die wir verwenden, um auf das JavaScript-Objekt zuzugreifen, kann es hilfreich sein, die [superheroes.json](https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json)-Datei in einem anderen Tab oder Ihrem Texteditor zu öffnen und darauf zu verweisen, während Sie unseren JavaScript-Code betrachten.
> Sie sollten auch unseren Artikel über die [JavaScript-Objekt-Grundlagen](/de/docs/Learn_web_development/Core/Scripting/Object_basics) für weitere Informationen zu Punkt- und Klammernotation heranziehen.

### Aufruf der Top-Level-Funktion

Schließlich müssen wir unsere Top-Level-Funktion `populate()` aufrufen:

```js
populate();
```

## Konvertieren zwischen Objekten und Text

Das obige Beispiel war einfach in Bezug auf den Zugriff auf das JavaScript-Objekt, weil wir die Netzwerkantwort direkt in ein JavaScript-Objekt mit `response.json()` konvertiert haben.

Manchmal haben wir jedoch nicht so viel Glück – manchmal erhalten wir einen rohen JSON-String und müssen ihn selbst in ein Objekt konvertieren. Und wenn wir ein JavaScript-Objekt über das Netzwerk senden möchten, müssen wir es in JSON (einen String) konvertieren, bevor wir es senden. Glücklicherweise sind diese beiden Probleme im Webentwicklungsbereich so häufig, dass ein eingebautes [JSON](/de/docs/Web/JavaScript/Reference/Global_Objects/JSON)-Objekt in Browsern verfügbar ist, das die folgenden beiden Methoden enthält:

- [`parse()`](/de/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse): Akzeptiert einen JSON-String als Parameter und gibt das entsprechende JavaScript-Objekt zurück.
- [`stringify()`](/de/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify): Akzeptiert ein Objekt als Parameter und gibt den äquivalenten JSON-String zurück.

Sie können die erste Methode in Aktion in unserem [heroes-finished-json-parse.html](https://mdn.github.io/learning-area/javascript/oojs/json/heroes-finished-json-parse.html)-Beispiel sehen (siehe den [Quellcode](https://github.com/mdn/learning-area/blob/main/javascript/oojs/json/heroes-finished-json-parse.html)) – dies tut genau das gleiche wie das Beispiel, das wir zuvor aufgebaut haben, außer dass:

- wir die Antwort als Text anstelle von JSON abrufen, indem wir die [`text()`](/de/docs/Web/API/Response/text)-Methode der Antwort aufrufen
- wir dann `parse()` verwenden, um den Text in ein JavaScript-Objekt zu konvertieren.

Der entscheidende Codeausschnitt ist hier:

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

Wie Sie sich vielleicht denken können, funktioniert `stringify()` in die entgegengesetzte Richtung. Versuchen Sie, die folgenden Zeilen nacheinander in die JavaScript-Konsole Ihres Browsers einzugeben, um es in Aktion zu sehen:

```js
let myObj = { name: "Chris", age: 38 };
myObj;
let myString = JSON.stringify(myObj);
myString;
```

Hier erstellen wir ein JavaScript-Objekt, prüfen dann, was es enthält, konvertieren es dann mit `stringify()` in einen JSON-String – speichern den Rückgabewert in einer neuen Variablen – und überprüfen es dann erneut.

## Testen Sie Ihre Fähigkeiten!

Sie haben das Ende dieses Artikels erreicht, aber können Sie sich die wichtigsten Informationen merken? Sie können einige weitere Tests finden, um zu überprüfen, ob Sie diese Informationen behalten haben, bevor Sie weitermachen – siehe [Testen Sie Ihre Fähigkeiten: JSON](/de/docs/Learn_web_development/Core/Scripting/Test_your_skills:_JSON).

## Zusammenfassung

In dieser Lektion haben wir Sie in die Verwendung von JSON in Ihren Programmen eingeführt, einschließlich der Erstellung und des Parsens von JSON und des Zugriffs auf darin gespeicherte Daten. Im nächsten Artikel werden wir uns praktische Techniken zur JavaScript-Fehlerbehebung und Fehlerbehandlung ansehen.

## Siehe auch

- [JSON-Referenz](/de/docs/Web/JavaScript/Reference/Global_Objects/JSON)
- [Fetch API-Überblick](/de/docs/Web/API/Fetch_API)
- [Verwendung von Fetch](/de/docs/Web/API/Fetch_API/Using_Fetch)
- [HTTP-Anforderungsmethoden](/de/docs/Web/HTTP/Reference/Methods)

{{PreviousMenuNext("Learn_web_development/Core/Scripting/Network_requests","Learn_web_development/Core/Scripting/Debugging_JavaScript", "Learn_web_development/Core/Scripting")}}
