---
title: Arbeiten mit JSON
slug: Learn_web_development/Core/Scripting/JSON
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{LearnSidebar}}

{{PreviousMenuNext("Learn_web_development/Core/Scripting/Network_requests","Learn_web_development/Core/Scripting/Debugging_JavaScript", "Learn_web_development/Core/Scripting")}}

JavaScript Object Notation (JSON) ist ein standardisiertes, textbasiertes Format zur Darstellung von strukturierten Daten, das auf der Syntax von JavaScript-Objekten basiert. Es wird häufig zur Datenübertragung in Webanwendungen verwendet (z. B. zum Senden von Daten vom Server an den Client, damit diese auf einer Webseite angezeigt werden können, oder umgekehrt). Sie werden häufig darauf stoßen, daher geben wir Ihnen in diesem Artikel alles, was Sie benötigen, um mit JSON in JavaScript zu arbeiten, einschließlich dem Parsen von JSON, damit Sie auf die darin enthaltenen Daten zugreifen können, und der Erstellung von JSON.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>Ein Verständnis von <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a> und den <a href="/de/docs/Learn_web_development/Core/Styling_basics">Grundlagen von CSS</a>, sowie Vertrautheit mit den JavaScript-Grundlagen, wie sie in den vorherigen Lektionen behandelt wurden.</td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Was JSON ist — ein sehr häufig verwendetes Datenformat, das auf der Syntax von JavaScript-Objekten basiert.</li>
          <li>Dass JSON auch Arrays enthalten kann.</li>
          <li>Abrufen von JSON als JavaScript-Objekt mithilfe von Mechanismen, die in Web-APIs verfügbar sind (zum Beispiel <code>Response.json()</code> in der Fetch-API).</li>
          <li>Zugriff auf Werte innerhalb von JSON-Daten unter Verwendung von Punkt- und Klammer-Syntax.</li>
          <li>Konvertierung zwischen Objekten und Texten mithilfe von <code>JSON.parse()</code> und <code>JSON.stringify()</code>.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Nein, wirklich, was ist JSON?

{{Glossary("JSON", "JSON")}} ist ein textbasiertes Datenformat, das der JavaScript-Objektsyntax folgt und durch [Douglas Crockford](https://en.wikipedia.org/wiki/Douglas_Crockford) popularisiert wurde.
Auch wenn es der Syntax von JavaScript-Objektliteralen sehr ähnlich ist, kann es unabhängig von JavaScript verwendet werden, und viele Programmierumgebungen bieten die Möglichkeit, JSON zu lesen (zu parsen) und zu generieren.

JSON existiert als Zeichenkette — nützlich, wenn Sie Daten über ein Netzwerk übertragen möchten.
Es muss in ein nativeres JavaScript-Objekt umgewandelt werden, wenn Sie auf die Daten zugreifen möchten.
Dies ist kein großes Problem — JavaScript bietet ein globales [JSON](/de/docs/Web/JavaScript/Reference/Global_Objects/JSON)-Objekt, das Methoden zur Konvertierung zwischen den beiden bereitstellt.

> [!NOTE]
> Das Konvertieren einer Zeichenkette in ein natives Objekt wird _Deserialisierung_ genannt, während das Konvertieren eines nativen Objekts in eine Zeichenkette, damit es über das Netzwerk übertragen werden kann, _Serialisierung_ genannt wird.

Eine JSON-Zeichenkette kann in einer eigenen Datei gespeichert werden, die im Grunde genommen nur eine Textdatei mit der Erweiterung `.json` und einem {{Glossary("MIME_type", "MIME-Typ")}} von `application/json` ist.

### JSON-Struktur

Wie oben beschrieben, ist JSON eine Zeichenkette, deren Format sehr dem JavaScript-Objektliteral-Format ähnelt.
Sie können innerhalb von JSON dieselben grundlegenden Datentypen einschließen, die Sie in einem normalen JavaScript-Objekt einfügen können — Zeichenketten, Zahlen, Arrays, Booleans und andere Objektliterale.
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

Wenn wir diese Zeichenkette in ein JavaScript-Programm laden und beispielsweise in eine Variable namens `superHeroes` parsen würden, könnten wir anschließend mit derselben Punkt/Klammer-Schreibweise, die wir im Artikel [JavaScript-Objektgrundlagen](/de/docs/Learn_web_development/Core/Scripting/Object_basics) behandelt haben, auf die darin enthaltenen Daten zugreifen.
Beispielsweise:

```js
superHeroes.homeTown;
superHeroes["active"];
```

Um auf Daten weiter unten in der Hierarchie zuzugreifen, müssen Sie die erforderlichen Eigenschaftsnamen und Array-Indizes miteinander verketten. Zum Beispiel, um auf die dritte Superkraft des zweiten Helden in der Mitgliederliste zuzugreifen, würden Sie Folgendes tun:

```js
superHeroes["members"][1]["powers"][2];
```

1. Zuerst haben wir den Variablennamen — `superHeroes`.
2. Darin möchten wir auf die `members`-Eigenschaft zugreifen, also verwenden wir `["members"]`.
3. `members` enthält ein Array, das von Objekten gefüllt wird. Wir möchten auf das zweite Objekt im Array zugreifen, also verwenden wir `[1]`.
4. In diesem Objekt möchten wir auf die `powers`-Eigenschaft zugreifen, also verwenden wir `["powers"]`.
5. Innerhalb der `powers`-Eigenschaft befindet sich ein Array mit den Superkräften des ausgewählten Helden. Wir möchten die dritte, also verwenden wir `[2]`.

> [!NOTE]
> Wir haben das oben sichtbare JSON in unserer [JSONTest.html](https://mdn.github.io/learning-area/javascript/oojs/json/JSONTest.html)-Beispiel (siehe den [Quellcode](https://github.com/mdn/learning-area/blob/main/javascript/oojs/json/JSONTest.html)) in einer Variablen verfügbar gemacht.
> Versuchen Sie, diese zu laden und dann über die JavaScript-Konsole Ihres Browsers auf die Daten in der Variablen zuzugreifen.

### Arrays als JSON

Oben erwähnten wir, dass JSON-Text im Wesentlichen wie ein JavaScript-Objekt innerhalb einer Zeichenkette aussieht.
Wir können auch Arrays von/nach JSON konvertieren. Das folgende Beispiel ist vollkommen gültiges JSON:

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

- JSON ist rein eine Zeichenkette mit einem festgelegten Datenformat — es enthält nur Eigenschaften, keine Methoden.
- JSON erfordert die Verwendung von doppelt gesetzten Anführungszeichen um Zeichenketten und Eigenschaftsnamen.
  Einzelne Anführungszeichen sind nicht gültig, außer, um die gesamte JSON-Zeichenfolge einzuschließen.
- Selbst ein einziges fehlplatziertes Komma oder Doppelpunkt kann dazu führen, dass eine JSON-Datei falsch wird und nicht funktioniert.
  Sie sollten darauf achten, alle Daten, die Sie verwenden möchten, zu validieren (obwohl computergeneriertes JSON weniger wahrscheinlich Fehler enthält, solange das Erzeugerprogramm korrekt funktioniert).
  Sie können JSON mit einer Anwendung wie [JSONLint](https://jsonlint.com/) validieren.
- JSON kann tatsächlich die Form jedes Datentyps annehmen, der für die Einbeziehung in JSON gültig ist, nicht nur Arrays oder Objekte.
  Ein einzelner String oder eine Zahl wäre also ein gültiges JSON.
- Anders als in JavaScript-Code, in dem Objekteigenschaften unverhüllt sein können, dürfen in JSON nur umhüllte Zeichenketten als Eigenschaften verwendet werden.

## Aktives Lernen: Durchgehen eines JSON-Beispiels

Nun, lassen Sie uns ein Beispiel durchgehen, um zu zeigen, wie wir einige JSON-formatierte Daten auf einer Website verwenden könnten.

### Erste Schritte

Zunächst erstellen Sie lokale Kopien unserer Dateien [heroes.html](https://github.com/mdn/learning-area/blob/main/javascript/oojs/json/heroes.html) und [style.css](https://github.com/mdn/learning-area/blob/main/javascript/oojs/json/style.css).
Letzteres enthält einige einfache CSS, um unsere Seite zu gestalten, während das erste einige sehr einfache body-HTML und ein {{HTMLElement("script")}}-Element enthält, um den JavaScript-Code zu enthalten, den wir in dieser Übung schreiben werden:

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

Wir werden das JSON in unser Skript laden und einige schicke DOM-Manipulationen verwenden, um es anzuzeigen, wie folgt:

![Bild eines Dokuments mit dem Titel "Super hero squad" (in einer schicken Schriftart) und dem Untertitel "Hometown: Metro City // Formed: 2016". Drei Spalten unter der Überschrift sind mit "Molecule Man", "Madame Uppercut" und "Eternal Flame" betitelt. Jede Spalte listet den geheimen Identitätsnamen, das Alter und die Superkräfte des Helden auf.](json-superheroes.png)

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
Diese API ermöglicht es uns, Netzwerk-Anfragen zu stellen, um Ressourcen von einem Server über JavaScript abzurufen (z.B. Bilder, Texte, JSON, sogar HTML-Schnipsel), was bedeutet, dass wir kleine Abschnitte von Inhalten aktualisieren können, ohne die gesamte Seite neu laden zu müssen.

In unserer Funktion nutzen die ersten vier Zeilen die Fetch-API, um das JSON vom Server abzurufen:

- Wir deklarieren die Variable `requestURL`, um die GitHub-URL zu speichern
- wir verwenden die URL, um ein neues [`Request`](/de/docs/Web/API/Request)-Objekt zu initialisieren.
- wir machen die Netzwerk-Anfrage mit der Funktion [`fetch()`](/de/docs/Web/API/Window/fetch), und dies gibt ein [`Response`](/de/docs/Web/API/Response)-Objekt zurück
- wir rufen die Antwort als JSON ab, indem wir die Funktion [`json()`](/de/docs/Web/API/Response/json) des `Response`-Objekts verwenden.

> [!NOTE]
> Die `fetch()`-API ist **asynchron**. Sie können Details zu asynchronen Funktionen in unserem [Asynchronous JavaScript module](/de/docs/Learn_web_development/Extensions/Async_JS) nachlesen, aber für jetzt sagen wir einfach, dass wir das Schlüsselwort {{jsxref("Statements/async_function", "async")}} vor den Namen der Funktion hinzufügen müssen, die die Fetch-API verwendet, und das Schlüsselwort {{jsxref("Operators/await", "await")}} vor die Aufrufe aller asynchronen Funktionen.

Danach wird die Variable `superHeroes` das JavaScript-Objekt enthalten, das auf dem JSON basiert. Wir übergeben dann dieses Objekt an zwei Funktionsaufrufe — der erste füllt den `<header>` mit den richtigen Daten, während der zweite eine Informationskarte für jedes Teammitglied erstellt und diese in die `<section>` einfügt.

### Auffüllen des Headers

Jetzt, da wir die JSON-Daten abgerufen und in ein JavaScript-Objekt umgewandelt haben, nutzen wir sie, indem wir die beiden oben genannten Funktionen schreiben. Fügen Sie zunächst die folgende Funktionsdefinition unterhalb des vorherigen Codes hinzu:

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

Hier erstellen wir zuerst ein {{HTMLElement("Heading_Elements", "h1")}}-Element mit [`createElement()`](/de/docs/Web/API/Document/createElement), setzen dessen [`textContent`](/de/docs/Web/API/Node/textContent) auf den `squadName` der Objekteigenschaft und hängen es dann mit [`appendChild()`](/de/docs/Web/API/Node/appendChild) an den Header an. Anschließend machen wir eine sehr ähnliche Operation mit einem Paragraphen: Wir erstellen ihn, setzen seinen Textinhalt und hängen ihn an den Header an. Der einzige Unterschied besteht darin, dass sein Text auf einem [template literal](/de/docs/Web/JavaScript/Reference/Template_literals) basiert, das sowohl die `homeTown`- als auch die `formed`-Eigenschaften des Objekts enthält.

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

Zunächst speichern wir die `members`-Eigenschaft des JavaScript-Objekts in einer neuen Variable. Dieses Array enthält mehrere Objekte, die die Informationen für jeden Helden enthalten.

Als nächstes verwenden wir eine [for...of Schleife](/de/docs/Learn_web_development/Core/Scripting/Loops#the_for...of_loop), um durch jedes Objekt im Array zu schleifen. Für jedes erstellen wir:

1. Mehrere neue Elemente: ein `<article>`, ein `<h2>`, drei `<p>`, und ein `<ul>`.
2. Setzen das `<h2>`, um den `name` des aktuellen Helden zu enthalten.
3. Füllen die drei Paragraphen mit ihrem `secretIdentity`, `age` und der Zeile "Superpowers:" zur Einführung der Informationen in der Liste.
4. Speichern die `powers`-Eigenschaft in einer weiteren neuen Konstante namens `superPowers` — diese enthält ein Array, das die Superkräfte des aktuellen Helden auflistet.
5. Verwenden eine weitere `for...of` Schleife, um durch die Superkräfte des aktuellen Helden zu schleifen — für jede erstellen wir ein `<li>`-Element, setzen die Superkraft hinein und dann setzen wir das `listItem` in das `<ul>`-Element (`myList`) mittels `appendChild()`.
6. Das Allerletzte, was wir tun, ist das Anhängen des `<h2>`, der `<p>` und der `<ul>` innerhalb des `<article>` (`myArticle`), dann fügen wir das `<article>` innerhalb der `<section>` hinzu. Die Reihenfolge, in der Dinge eingefügt werden, ist wichtig, da dies die Reihenfolge ist, in der sie im HTML dargestellt werden.

> [!NOTE]
> Wenn Sie Schwierigkeiten haben, das Beispiel zum Laufen zu bringen, versuchen Sie, unseren [heroes-finished.html](https://github.com/mdn/learning-area/blob/main/javascript/oojs/json/heroes-finished.html) Quellcode zu beziehen (sehen Sie es auch [live laufen](https://mdn.github.io/learning-area/javascript/oojs/json/heroes-finished.html)).

> [!NOTE]
> Wenn Sie Schwierigkeiten haben, der Punkt-/Klammer-Syntax zu folgen, die wir verwenden, um auf das JavaScript-Objekt zuzugreifen, kann es hilfreich sein, die [superheroes.json](https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json) Datei in einem anderen Tab oder Ihrem Texteditor zu öffnen und darauf zu verweisen, während Sie unseren JavaScript-Code betrachten.
> Sie sollten auch auf unseren [JavaScript-Objektgrundlagen](/de/docs/Learn_web_development/Core/Scripting/Object_basics) Artikel zurückgreifen, um mehr Informationen über Punkt- und Klammer-Syntax zu erhalten.

### Aufruf der Top-Level-Funktion

Schließlich müssen wir unsere oberste `populate()`-Funktion aufrufen:

```js
populate();
```

## Konvertierung zwischen Objekten und Text

Das obige Beispiel war in Bezug auf den Zugriff auf das JavaScript-Objekt einfach, weil wir die Netzwerkantwort direkt in ein JavaScript-Objekt mit `response.json()` umgewandelt haben.

Aber manchmal haben wir nicht so viel Glück — manchmal erhalten wir eine rohe JSON-Zeichenkette, und wir müssen sie selbst in ein Objekt umwandeln. Und wenn wir ein JavaScript-Objekt über das Netzwerk senden möchten, müssen wir es vorher in JSON (eine Zeichenkette) umwandeln. Glücklicherweise sind diese beiden Probleme im Webentwicklung so häufig, dass in Browsern ein eingebautes [JSON](/de/docs/Web/JavaScript/Reference/Global_Objects/JSON) Objekt verfügbar ist, das die folgenden zwei Methoden enthält:

- [`parse()`](/de/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse): Nimmt eine JSON-Zeichenkette als Parameter und liefert das entsprechende JavaScript-Objekt zurück.
- [`stringify()`](/de/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify): Nimmt ein Objekt als Parameter und liefert die äquivalente JSON-Zeichenkette zurück.

Sie können die erste in Aktion in unserem [heroes-finished-json-parse.html](https://mdn.github.io/learning-area/javascript/oojs/json/heroes-finished-json-parse.html) Beispiel sehen (siehe den [Quellcode](https://github.com/mdn/learning-area/blob/main/javascript/oojs/json/heroes-finished-json-parse.html)) — dies macht genau das gleiche wie das Beispiel, das wir zuvor aufgebaut haben, mit der Ausnahme:

- wir rufen die Antwort als Text ab anstatt als JSON, indem wir die [`text()`](/de/docs/Web/API/Response/text) Methode der Antwort aufrufen
- wir verwenden dann `parse()`, um den Text in ein JavaScript-Objekt umzuwandeln.

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

Wie Sie vielleicht vermuten, funktioniert `stringify()` umgekehrt. Versuchen Sie, die folgenden Zeilen nacheinander in die JavaScript-Konsole Ihres Browsers einzugeben, um es in Aktion zu sehen:

```js
let myObj = { name: "Chris", age: 38 };
myObj;
let myString = JSON.stringify(myObj);
myString;
```

Hier erstellen wir ein JavaScript-Objekt, prüfen dann, was es enthält, konvertieren es dann in eine JSON-Zeichenkette mithilfe von `stringify()` — speichern den Rückgabewert in einer neuen Variablen — und prüfen es dann erneut.

## Testen Sie Ihre Fähigkeiten!

Sie haben das Ende dieses Artikels erreicht, aber können Sie sich die wichtigsten Informationen merken? Sie können einige weitere Tests finden, um zu überprüfen, ob Sie diese Informationen behalten haben, bevor Sie weitermachen — siehe [Testen Sie Ihre Fähigkeiten: JSON](/de/docs/Learn_web_development/Core/Scripting/Test_your_skills:_JSON).

## Zusammenfassung

In dieser Lektion haben wir Ihnen vorgestellt, wie Sie JSON in Ihren Programmen verwenden, einschließlich der Erstellung und des Parsens von JSON sowie des Zugriffs auf Daten, die darin eingeschlossen sind. Im nächsten Artikel werden wir uns praktische Techniken zur Fehlerbehebung in JavaScript und zum Umgang mit Fehlern ansehen.

## Siehe auch

- [JSON Referenz](/de/docs/Web/JavaScript/Reference/Global_Objects/JSON)
- [Fetch-API-Übersicht](/de/docs/Web/API/Fetch_API)
- [Verwendung von Fetch](/de/docs/Web/API/Fetch_API/Using_Fetch)
- [HTTP-Anforderungsmethoden](/de/docs/Web/HTTP/Methods)

{{PreviousMenuNext("Learn_web_development/Core/Scripting/Network_requests","Learn_web_development/Core/Scripting/Debugging_JavaScript", "Learn_web_development/Core/Scripting")}}
