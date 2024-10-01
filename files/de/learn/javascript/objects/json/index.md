---
title: Arbeiten mit JSON
slug: Learn/JavaScript/Objects/JSON
l10n:
  sourceCommit: d71da812ee94c20658cb1916a123a42254ea545c
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/JavaScript/Objects/Classes_in_JavaScript", "Learn/JavaScript/Objects/Object_building_practice", "Learn/JavaScript/Objects")}}

JavaScript Object Notation (JSON) ist ein standardisiertes textbasiertes Format zur Darstellung strukturierter Daten, basierend auf der JavaScript-Objektsyntax. Es wird häufig für die Übertragung von Daten in Webanwendungen verwendet (z. B. um Daten vom Server an den Client zu senden, damit diese auf einer Webseite angezeigt werden können, oder umgekehrt). Sie werden es ziemlich oft antreffen, daher geben wir Ihnen in diesem Artikel alles, was Sie benötigen, um mit JSON in JavaScript zu arbeiten, einschließlich der Analyse von JSON, damit Sie auf die darin enthaltenen Daten zugreifen können, und der Erstellung von JSON.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Grundkenntnisse in HTML und CSS, Vertrautheit mit den JavaScript-Grundlagen (siehe <a href="/de/docs/Learn/JavaScript/First_steps">Erste Schritte</a> und <a href="/de/docs/Learn/JavaScript/Building_blocks">Bausteine</a>) und Basiswissen in OOJS (siehe <a href="/de/docs/Learn/JavaScript/Objects/Basics">Einführung in Objekte</a>).
      </td>
    </tr>
    <tr>
      <th scope="row">Zielsetzung:</th>
      <td>
        Zu verstehen, wie man mit in JSON gespeicherten Daten arbeitet und eigene JSON-Strings erstellt.
      </td>
    </tr>
  </tbody>
</table>

## Nein, wirklich, was ist JSON?

{{Glossary("JSON", "JSON")}} ist ein textbasiertes Datenformat, das der JavaScript-Objektsyntax folgt und durch [Douglas Crockford](https://en.wikipedia.org/wiki/Douglas_Crockford) popularisiert wurde. Obwohl es der JavaScript-Objektsyntax sehr ähnlich ist, kann es unabhängig von JavaScript verwendet werden, und viele Programmierumgebungen verfügen über die Fähigkeit, JSON zu lesen (zu parsen) und zu erzeugen.

JSON existiert als String — nützlich, wenn Sie Daten über ein Netzwerk übertragen möchten. Es muss in ein natives JavaScript-Objekt umgewandelt werden, wenn Sie auf die Daten zugreifen möchten. Dies ist kein großes Problem — JavaScript bietet ein globales [JSON](/de/docs/Web/JavaScript/Reference/Global_Objects/JSON)-Objekt, das Methoden zum Konvertieren zwischen den beiden bietet.

> [!NOTE]
> Die Umwandlung eines Strings in ein natives Objekt wird als _Deserialisierung_ bezeichnet, während die Umwandlung eines nativen Objekts in einen String, damit es über das Netzwerk übertragen werden kann, als _Serialisierung_ bezeichnet wird.

Ein JSON-String kann in einer eigenen Datei gespeichert werden, die im Grunde nur eine Textdatei mit der Endung `.json` und einem {{Glossary("MIME_type", "MIME-Typ")}} von `application/json` ist.

### JSON-Struktur

Wie oben beschrieben, ist JSON ein String, dessen Format sehr dem JavaScript-Objektliteral-Format ähnelt. Sie können dieselben grundlegenden Datentypen in JSON aufnehmen, die Sie auch in einem standardmäßigen JavaScript-Objekt verwenden können — Strings, Zahlen, Arrays, Booleans und andere Objektliterals. Dies ermöglicht Ihnen, eine Datenhierarchie zu konstruieren, wie folgt:

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

Wenn wir diesen String in ein JavaScript-Programm laden und ihn in eine Variable namens `superHeroes` parsen würden, könnten wir dann auf die darin enthaltenen Daten mithilfe der von uns im Artikel [JavaScript-Objekt-Grundlagen](/de/docs/Learn/JavaScript/Objects/Basics) betrachteten Punkt-/Klammernotation zugreifen. Zum Beispiel:

```js
superHeroes.homeTown;
superHeroes["active"];
```

Um auf Daten weiter unten in der Hierarchie zuzugreifen, müssen Sie die erforderlichen Eigenschaftsnamen und Array-Indizes miteinander verketten. Um beispielsweise auf die dritte Superkraft des zweiten Helden in der Mitgliederliste zuzugreifen, würden Sie Folgendes tun:

```js
superHeroes["members"][1]["powers"][2];
```

1. Zuerst haben wir den Variablennamen — `superHeroes`.
2. Darin möchten wir auf die Eigenschaft `members` zugreifen, also verwenden wir `["members"]`.
3. `members` enthält ein Array, das mit Objekten gefüllt ist. Wir möchten auf das zweite Objekt im Array zugreifen, also verwenden wir `[1]`.
4. In diesem Objekt möchten wir auf die Eigenschaft `powers` zugreifen, also verwenden wir `["powers"]`.
5. In der Eigenschaft `powers` befindet sich ein Array, das die Superkräfte des ausgewählten Helden enthält. Wir möchten die dritte, also verwenden wir `[2]`.

> [!NOTE]
> Wir haben das oben gezeigte JSON in einer Variablen in unserem [JSONTest.html](https://mdn.github.io/learning-area/javascript/oojs/json/JSONTest.html) Beispiel verfügbar gemacht (siehe den [Quellcode](https://github.com/mdn/learning-area/blob/main/javascript/oojs/json/JSONTest.html)). Versuchen Sie es zu laden und dann über die JavaScript-Konsole Ihres Browsers auf Daten innerhalb der Variable zuzugreifen.

### Arrays als JSON

Oben haben wir erwähnt, dass JSON-Text im Grunde wie ein JavaScript-Objekt in einem String aussieht. Wir können auch Arrays zu/von JSON konvertieren. Unten ist auch ein gültiges JSON, zum Beispiel:

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

Das obige ist ein vollkommen gültiges JSON. Sie müssten nur auf Array-Elemente (in seiner geparsten Version) zugreifen, indem Sie mit einem Array-Index beginnen, zum Beispiel `[0]["powers"][0]`.

### Weitere Hinweise

- JSON ist rein ein String mit einem spezifizierten Datenformat — es enthält nur Eigenschaften, keine Methoden.
- JSON erfordert, dass doppelte Anführungszeichen verwendet werden, um Strings und Eigenschaftsnamen herum. Einzelne Anführungszeichen sind nur dann gültig, wenn sie den gesamten JSON-String umgeben.
- Selbst ein einzig fehlplatzierter Komma oder Doppelpunkt kann dazu führen, dass eine JSON-Datei fehlerhaft ist und nicht funktioniert. Sie sollten sorgfältig darauf achten, alle Daten, die Sie verwenden möchten, zu validieren (obwohl computergeneriertes JSON weniger wahrscheinlich Fehler enthält, solange das Erzeugerprogramm korrekt funktioniert). Sie können JSON mit einer Anwendung wie [JSONLint](https://jsonlint.com/) validieren.
- JSON kann tatsächlich die Form eines jeden Datentyps annehmen, der für die Aufnahme in JSON gültig ist, nicht nur Arrays oder Objekte. So wären zum Beispiel ein einzelner String oder eine Zahl gültiges JSON.
- Anders als im JavaScript-Code, in dem Objekteigenschaften unquotiert sein können, dürfen in JSON nur zitierte Strings als Eigenschaften verwendet werden.

## Aktives Lernen: Arbeiten mit einem JSON-Beispiel

Lassen Sie uns also ein Beispiel durchgehen, um zu zeigen, wie wir einige JSON-formatierte Daten auf einer Website nutzen könnten.

### Erste Schritte

Zunächst machen Sie lokale Kopien unserer [heroes.html](https://github.com/mdn/learning-area/blob/main/javascript/oojs/json/heroes.html) und [style.css](https://github.com/mdn/learning-area/blob/main/javascript/oojs/json/style.css) Dateien. Letztere enthält einige einfache CSS-Styles für unsere Seite, während die erste einige sehr einfache HTML im Body enthält, plus ein {{HTMLElement("script")}}-Element, um den JavaScript-Code zu enthalten, den wir in dieser Übung schreiben werden:

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

Unser JSON ist auf unserem GitHub verfügbar unter <https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json>.

Wir werden das JSON in unser Skript laden und einige clevere DOM-Manipulationen verwenden, um es anzuzeigen, so:

![Bild eines Dokuments mit dem Titel "Super hero squad" (in einer eleganten Schriftart) und dem Untertitel "Hometown: Metro City // Gegründet: 2016". Drei Spalten unter der Überschrift tragen die Titel "Molecule Man", "Madame Uppercut" und "Eternal Flame". Jede Spalte listet den geheimen Identitätsnamen, das Alter und die Superkräfte des Helden auf.](json-superheroes.png)

### Obere Funktion

Die Hauptfunktion sieht folgendermaßen aus:

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
Diese API ermöglicht es uns, Netzwerk-Anfragen zu stellen, um Ressourcen von einem Server über JavaScript abzurufen (z. B. Bilder, Text, JSON, sogar HTML-Schnipsel), wodurch wir kleine Inhaltsabschnitte aktualisieren können, ohne die gesamte Seite neu laden zu müssen.

In unserer Funktion verwenden die ersten vier Zeilen die Fetch-API, um das JSON vom Server abzurufen:

- Wir deklarieren die Variable `requestURL`, um die GitHub-URL zu speichern.
- Wir verwenden die URL, um ein neues [`Request`](/de/docs/Web/API/Request) Objekt zu initialisieren.
- Wir machen die Netzwerk-Anfrage mit der Funktion [`fetch()`](/de/docs/Web/API/Window/fetch), und dies gibt ein [`Response`](/de/docs/Web/API/Response) Objekt zurück.
- Wir rufen die Antwort als JSON mit der Funktion [`json()`](/de/docs/Web/API/Response/json) des `Response` Objekts ab.

> [!NOTE]
> Die `fetch()`-API ist **asynchron**. Wir werden viel über asynchrone Funktionen im [nächsten Modul](/de/docs/Learn/JavaScript/Asynchronous) lernen, aber fürs Erste sagen wir einfach, dass wir das Schlüsselwort {{jsxref("Statements/async_function", "async")}} vor den Namen der Funktion hinzufügen müssen, die die Fetch-API verwendet, und das Schlüsselwort {{jsxref("Operators/await", "await")}} vor die Aufrufe aller asynchronen Funktionen stellen müssen.

Nach all dem enthält die Variable `superHeroes` das JavaScript-Objekt, das auf dem JSON basiert. Wir übergeben dann dieses Objekt an zwei Funktionsaufrufe — der erste füllt den `<header>` mit den korrekten Daten, während der zweite eine Informationskarte für jeden Helden im Team erstellt und sie in die `<section>` einfügt.

### Den Kopfbereich bevölkern

Da wir nun die JSON-Daten abgerufen und in ein JavaScript-Objekt umgewandelt haben, machen wir davon Gebrauch, indem wir die zwei Funktionen schreiben, auf die wir oben verwiesen haben. Fügen Sie zunächst die folgende Funktionsdefinition unter dem vorherigen Code ein:

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

Hier erstellen wir zuerst ein {{HTMLElement("Heading_Elements", "h1")}}-Element mit [`createElement()`](/de/docs/Web/API/Document/createElement), setzen dessen [`textContent`](/de/docs/Web/API/Node/textContent) auf den `squadName` Wert des Objekts und fügen es mit [`appendChild()`](/de/docs/Web/API/Node/appendChild) im Header ein. Dann führen wir eine sehr ähnliche Operation mit einem Absatz durch: Wir erstellen ihn, setzen seinen Textinhalt und fügen ihn dem Header hinzu. Der einzige Unterschied besteht darin, dass sein Text als [template literal](/de/docs/Web/JavaScript/Reference/Template_literals) festgelegt ist, der sowohl die `homeTown` als auch die `formed` Eigenschaften des Objekts enthält.

### Erstellen der Informationen zu den Heldenkarten

Fügen Sie als nächstes die folgende Funktion am unteren Ende des Codes hinzu, die die Superhelden-Karten erstellt und anzeigt:

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

Zuerst speichern wir die `members` Eigenschaft des JavaScript-Objekts in einer neuen Variablen. Dieses Array enthält mehrere Objekte, die die Informationen für jeden Helden enthalten.

Als Nächstes verwenden wir eine [for...of Schleife](/de/docs/Learn/JavaScript/Building_blocks/Looping_code#the_for...of_loop), um durch jedes Objekt im Array zu gehen. Für jedes davon:

1. Erzeugen wir mehrere neue Elemente: ein `<article>`, ein `<h2>`, drei `<p>`s und eine `<ul>`.
2. Setzen wir das `<h2>`, damit es den aktuellen Helden `name` enthält.
3. Füllen wir die drei Absätze mit ihren `secretIdentity`, `age` und einer Zeile mit der Aufschrift "Superpowers:" ein, um die Informationen in der Liste einzuführen.
4. Speichern wir die `powers` Eigenschaft in einer weiteren neuen Konstante namens `superPowers` — diese enthält ein Array, das die Superkräfte des aktuellen Helden auflistet.
5. Verwenden wir eine weitere `for...of`-Schleife, um durch die Superkräfte des aktuellen Helden zu schleifen — für jede davon erstellen wir ein `<li>`-Element, setzen die Superkraft hinein und fügen dann das `listItem` mit `appendChild()` in die `<ul>`-Element (`myList`) ein.
6. Das Allerletzte, was wir tun, ist, das `<h2>`, die `<p>`s und die `<ul>` in das `<article>` (`myArticle`) einzufügen, dann das `<article>` in der `<section>`. Die Reihenfolge, in der Dinge angehängt werden, ist wichtig, da dies die Reihenfolge ist, in der sie im HTML angezeigt werden.

> [!NOTE]
> Wenn Sie Schwierigkeiten haben, das Beispiel zum Laufen zu bringen, versuchen Sie, unseren [heroes-finished.html](https://github.com/mdn/learning-area/blob/main/javascript/oojs/json/heroes-finished.html) Quellcode zu konsultieren (siehe es [live laufend](https://mdn.github.io/learning-area/javascript/oojs/json/heroes-finished.html)).

> [!NOTE]
> Wenn Sie Schwierigkeiten haben, der Punkt-/Klammernotation zu folgen, die wir verwenden, um auf das JavaScript-Objekt zuzugreifen, kann es hilfreich sein, die [superheroes.json](https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json) Datei in einem anderen Tab oder Ihrem Texteditor geöffnet zu haben und sich darauf zu beziehen, während Sie unseren JavaScript-Code betrachten.
> Sie sollten auch unseren Artikel [JavaScript-Objekt-Grundlagen](/de/docs/Learn/JavaScript/Objects/Basics) erneut konsultieren, um weitere Informationen zu Punkt- und Klammernotation zu erhalten.

### Aufruf der Hauptfunktion

Zuletzt müssen wir unsere Top-Level-`populate()`-Funktion aufrufen:

```js
populate();
```

## Konvertierung zwischen Objekten und Text

Das obige Beispiel war einfach in Bezug auf den Zugriff auf das JavaScript-Objekt, da wir die Netzwerkantwort direkt in ein JavaScript-Objekt mit `response.json()` umgewandelt haben.

Aber manchmal haben wir nicht so viel Glück — manchmal erhalten wir einen rohen JSON-String und müssen ihn selbst in ein Objekt konvertieren. Und wenn wir ein JavaScript-Objekt über das Netzwerk senden wollen, müssen wir es zu JSON (einem String) konvertieren, bevor wir es senden. Glücklicherweise sind diese beiden Probleme im Web-Entwicklungsbereich so häufig, dass ein integriertes [JSON](/de/docs/Web/JavaScript/Reference/Global_Objects/JSON)-Objekt in Browsern verfügbar ist, das die folgenden zwei Methoden enthält:

- [`parse()`](/de/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse): Akzeptiert einen JSON-String als Parameter und gibt das entsprechende JavaScript-Objekt zurück.
- [`stringify()`](/de/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify): Akzeptiert ein Objekt als Parameter und gibt den äquivalenten JSON-String zurück.

Sie können die erste Methode in Aktion in unserem [heroes-finished-json-parse.html](https://mdn.github.io/learning-area/javascript/oojs/json/heroes-finished-json-parse.html) Beispiel sehen (siehe den [Quellcode](https://github.com/mdn/learning-area/blob/main/javascript/oojs/json/heroes-finished-json-parse.html)) — dies tut genau dasselbe wie das Beispiel, das wir zuvor aufgebaut haben, außer dass:

- wir die Antwort als Text anstelle von JSON abrufen, indem wir die [`text()`](/de/docs/Web/API/Response/text)-Methode der Antwort aufrufen
- wir dann `parse()` verwenden, um den Text in ein JavaScript-Objekt umzuwandeln.

Der zentrale Codeschnipsel ist hier:

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

Wie Sie sich vorstellen können, funktioniert `stringify()` umgekehrt. Versuchen Sie, die folgenden Zeilen einzeln in die JavaScript-Konsole Ihres Browsers einzugeben, um sie in Aktion zu sehen:

```js
let myObj = { name: "Chris", age: 38 };
myObj;
let myString = JSON.stringify(myObj);
myString;
```

Hier erstellen wir ein JavaScript-Objekt, überprüfen dann, was es enthält, konvertieren es dann mit `stringify()` in einen JSON-String — speichern den Rückgabewert in einer neuen Variablen — und überprüfen es dann erneut.

## Testen Sie Ihr Verständnis!

Sie haben das Ende dieses Artikels erreicht, aber können Sie sich an die wichtigsten Informationen erinnern? Sie finden einige weitere Tests, um zu überprüfen, ob Sie diese Informationen behalten haben, bevor Sie mit dem nächsten Modul fortfahren — siehe [Testen Sie Ihr Verständnis: JSON](/de/docs/Learn/JavaScript/Objects/Test_your_skills:_JSON).

## Zusammenfassung

In diesem Artikel haben wir Ihnen einen einfachen Leitfaden zum Arbeiten mit JSON in Ihren Programmen gegeben, einschließlich wie man JSON erstellt und parst und wie man auf die darin befindlichen Daten zugreift. Im nächsten Artikel beginnen wir mit der Betrachtung von objektorientiertem JavaScript.

## Siehe auch

- [JSON Referenz](/de/docs/Web/JavaScript/Reference/Global_Objects/JSON)
- [Fetch API-Übersicht](/de/docs/Web/API/Fetch_API)
- [Fetch verwenden](/de/docs/Web/API/Fetch_API/Using_Fetch)
- [HTTP-Anfragemethoden](/de/docs/Web/HTTP/Methods)
- [Offizielle JSON-Website mit Link zum ECMA-Standard](https://json.org/)

{{PreviousMenuNext("Learn/JavaScript/Objects/Classes_in_JavaScript", "Learn/JavaScript/Objects/Object_building_practice", "Learn/JavaScript/Objects")}}
