---
title: Arbeiten mit JSON
slug: Learn/JavaScript/Objects/JSON
l10n:
  sourceCommit: d71da812ee94c20658cb1916a123a42254ea545c
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/JavaScript/Objects/Classes_in_JavaScript", "Learn/JavaScript/Objects/Object_building_practice", "Learn/JavaScript/Objects")}}

JavaScript Object Notation (JSON) ist ein standardisiertes textbasiertes Format zur Darstellung strukturierter Daten basierend auf der JavaScript-Objektsyntax. Es wird häufig zur Datenübertragung in Webanwendungen verwendet (z.B. um Daten vom Server an den Client zu senden, damit sie auf einer Webseite angezeigt werden können, oder umgekehrt). Sie werden damit häufig konfrontiert, daher geben wir Ihnen in diesem Artikel alle notwendigen Informationen, um mit JSON in JavaScript zu arbeiten, einschließlich des Parsens von JSON, um Zugriff auf die darin enthaltenen Daten zu erhalten, und der Erstellung von JSON.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Grundlegendes Verständnis von HTML und CSS, Vertrautheit mit JavaScript-Grundlagen (siehe <a href="/de/docs/Learn/JavaScript/First_steps">Erste Schritte</a> und <a href="/de/docs/Learn/JavaScript/Building_blocks">Bausteine</a>) und Grundlagen von OOJS (siehe <a href="/de/docs/Learn/JavaScript/Objects/Basics">Einführung in Objekte</a>).
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Zu verstehen, wie man mit in JSON gespeicherten Daten arbeitet und eigene JSON-Strings erstellt.
      </td>
    </tr>
  </tbody>
</table>

## Wirklich, was ist JSON?

{{glossary("JSON")}} ist ein textbasiertes Datenformat, das der JavaScript-Objektsyntax folgt und von [Douglas Crockford](https://en.wikipedia.org/wiki/Douglas_Crockford) populär gemacht wurde.
Obwohl es stark der JavaScript-Objektliteralsyntax ähnelt, kann es unabhängig von JavaScript verwendet werden, und viele Programmierumgebungen verfügen über die Fähigkeit, JSON zu lesen (parsen) und zu generieren.

JSON existiert als String — nützlich, wenn Sie Daten über ein Netzwerk übertragen möchten.
Es muss in ein natives JavaScript-Objekt konvertiert werden, wenn Sie auf die Daten zugreifen möchten.
Das ist kein großes Problem — JavaScript bietet ein globales [JSON](/de/docs/Web/JavaScript/Reference/Global_Objects/JSON)-Objekt, das Methoden zur Konvertierung zwischen den beiden bereitstellt.

> [!NOTE]
> Die Umwandlung eines Strings in ein natives Objekt wird _Deserialisierung_ genannt, während die Umwandlung eines nativen Objekts in einen String, damit es über das Netzwerk übertragen werden kann, _Serialisierung_ genannt wird.

Ein JSON-String kann in einer eigenen Datei gespeichert werden, die im Grunde nur eine Textdatei mit der Erweiterung `.json` ist und einen {{glossary("MIME type")}} von `application/json` hat.

### JSON-Struktur

Wie oben beschrieben, ist JSON ein String, dessen Format stark der JavaScript-Objektliteralformat ähnelt.
Sie können in JSON dieselben grundlegenden Datentypen einschließen wie in einem Standard-JavaScript-Objekt — Strings, Zahlen, Arrays, Booleans und andere Objektliterale.
Dies ermöglicht Ihnen den Aufbau einer Datenhierarchie, wie folgt:

```json
{
  "squadName": "Superhelden-Team",
  "homeTown": "Metro City",
  "formed": 2016,
  "secretBase": "Super-Turm",
  "active": true,
  "members": [
    {
      "name": "Molekül Mann",
      "age": 29,
      "secretIdentity": "Dan Jukes",
      "powers": ["Strahlungsresistenz", "Winzig werden", "Strahlungsschlag"]
    },
    {
      "name": "Madame Uppercut",
      "age": 39,
      "secretIdentity": "Jane Wilson",
      "powers": [
        "Millionen Tonnen Schlag",
        "Schadensresistenz",
        "Übermenschliche Reflexe"
      ]
    },
    {
      "name": "Ewige Flamme",
      "age": 1000000,
      "secretIdentity": "Unbekannt",
      "powers": [
        "Unsterblichkeit",
        "Hitzeimmunität",
        "Inferno",
        "Teleportation",
        "Interdimensionales Reisen"
      ]
    }
  ]
}
```

Wenn wir diesen String in ein JavaScript-Programm laden und ihn in eine Variable namens `superHeroes` parsen würden, könnten wir die darin enthaltenen Daten mit der gleichen Punkt-/Klammernotation, die wir im Artikel [JavaScript-Objektgrundlagen](/de/docs/Learn/JavaScript/Objects/Basics) besprochen haben, abrufen. Zum Beispiel:

```js
superHeroes.homeTown;
superHeroes["active"];
```

Um auf Daten weiter unten in der Hierarchie zuzugreifen, müssen Sie die erforderlichen Eigenschaftsnamen und Array-Indizes miteinander verketten. Um zum Beispiel die dritte Superkraft des zweiten Helden in der Mitgliederliste abzurufen, würden Sie Folgendes tun:

```js
superHeroes["members"][1]["powers"][2];
```

1. Zuerst haben wir den Variablennamen — `superHeroes`.
2. Innerhalb davon möchten wir auf die `members`-Eigenschaft zugreifen, daher verwenden wir `["members"]`.
3. `members` enthält ein Array, das mit Objekten gefüllt ist. Wir wollen auf das zweite Objekt im Array zugreifen, also verwenden wir `[1]`.
4. Innerhalb dieses Objekts wollen wir auf die `powers`-Eigenschaft zugreifen, also verwenden wir `["powers"]`.
5. Innerhalb der `powers`-Eigenschaft ist ein Array, das die Superkräfte des ausgewählten Helden enthält. Wir wollen die dritte, also verwenden wir `[2]`.

> [!NOTE]
> Wir haben das oben gezeigte JSON in einer Variablen in unserem [JSONTest.html](https://mdn.github.io/learning-area/javascript/oojs/json/JSONTest.html)-Beispiel verfügbar gemacht (siehe den [Quellcode](https://github.com/mdn/learning-area/blob/main/javascript/oojs/json/JSONTest.html)).
> Versuchen Sie, dies zu laden und dann im JavaScript-Konsolentool Ihres Browsers auf Daten innerhalb der Variablen zuzugreifen.

### Arrays als JSON

Wir erwähnten oben, dass JSON-Text im Grunde wie ein JavaScript-Objekt in einem String aussieht.
Wir können auch Arrays zu/von JSON konvertieren. Unten ist ebenfalls ein gültiges JSON, zum Beispiel:

```json
[
  {
    "name": "Molekül Mann",
    "age": 29,
    "secretIdentity": "Dan Jukes",
    "powers": ["Strahlungsresistenz", "Winzig werden", "Strahlungsschlag"]
  },
  {
    "name": "Madame Uppercut",
    "age": 39,
    "secretIdentity": "Jane Wilson",
    "powers": [
      "Millionen Tonnen Schlag",
      "Schadensresistenz",
      "Übermenschliche Reflexe"
    ]
  }
]
```

Das obige ist vollkommen gültiges JSON. Sie müssten einfach nur die Array-Elemente (in seiner geparsten Version) aufrufen, indem Sie mit einem Array-Index beginnen, z.B. `[0]["powers"][0]`.

### Weitere Hinweise

- JSON ist rein ein String mit einem spezifizierten Datenformat — es enthält nur Eigenschaften, keine Methoden.
- JSON erfordert die Verwendung von doppelten Anführungszeichen um Strings und Eigenschaftsnamen. Einzelne Anführungszeichen sind nur gültig, wenn sie den gesamten JSON-String umschließen.
- Selbst ein einziger falsch platzierter Komma oder Doppelpunkt kann eine JSON-Datei fehlerhaft machen und nicht funktionieren.
  Sie sollten darauf achten, alle Daten, die Sie verwenden möchten, zu validieren (obwohl computererzeugtes JSON weniger wahrscheinlich Fehler enthält, solange das Generierungsprogramm korrekt funktioniert).
  Sie können JSON mit einer Anwendung wie [JSONLint](https://jsonlint.com/) validieren.
- JSON kann tatsächlich die Form jedes Datentyps annehmen, der für die Einbeziehung in JSON gültig ist, nicht nur Arrays oder Objekte.
  So wäre zum Beispiel ein einzelner String oder eine Zahl gültiges JSON.
- Anders als in JavaScript-Code, in dem Objekteigenschaften unverzichtbar sein können, dürfen in JSON nur angeführte Strings als Eigenschaften verwendet werden.

## Aktives Lernen: Durch ein JSON-Beispiel arbeiten

Lassen Sie uns an einem Beispiel durcharbeiten, wie wir einige JSON-formatierte Daten auf einer Website verwenden könnten.

### Einstieg

Legen Sie zunächst lokale Kopien unserer [heroes.html](https://github.com/mdn/learning-area/blob/main/javascript/oojs/json/heroes.html) und [style.css](https://github.com/mdn/learning-area/blob/main/javascript/oojs/json/style.css) Dateien an.
Letztere enthält einige einfache CSS zur Gestaltung unserer Seite, während die erstere etwas sehr einfaches HTML für den Body sowie ein {{HTMLElement("script")}}-Element enthält, um den JavaScript-Code, den wir schreiben werden, zu enthalten:

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

Wir haben unsere JSON-Daten auf unserem GitHub unter <https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json> bereitgestellt.

Wir werden das JSON in unser Skript laden und einige pfiffige DOM-Manipulationen verwenden, um es anzuzeigen, so:

![Bild eines Dokuments mit dem Titel "Superhelden-Team" (in einer schicken Schriftart) und dem Untertitel "Herkunft: Metro City // Gegründet: 2016". Drei Spalten unten der Überschrift haben die Titel "Molekül Mann", "Madame Uppercut" und "Ewige Flamme" und jede Spalte listet den geheimen Identitätsnamen, das Alter und die Superkräfte des Helden auf.](json-superheroes.png)

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
Diese API ermöglicht es uns, Netzwerkanfragen zu stellen, um Ressourcen über JavaScript von einem Server abzurufen (z.B. Bilder, Text, JSON, sogar HTML-Schnipsel), was bedeutet, dass wir kleine Abschnitte von Inhalten aktualisieren können, ohne die gesamte Seite neu zu laden.

In unserer Funktion nutzen die ersten vier Zeilen die Fetch-API, um das JSON vom Server abzurufen:

- Wir deklarieren die Variable `requestURL`, um die GitHub-URL zu speichern.
- Wir verwenden die URL, um ein neues {{domxref("Request")}}-Objekt zu initialisieren.
- Wir stellen die Netzwerkanfrage mit der {{domxref("Window/fetch", "fetch()")}}-Funktion, und dies gibt ein {{domxref("Response")}}-Objekt zurück.
- Wir rufen die Antwort als JSON ab, indem wir die {{domxref("Response/json", "json()")}}-Funktion des `Response`-Objekts verwenden.

> [!NOTE]
> Die `fetch()`-API ist **asynchron**. Wir werden viel über asynchrone Funktionen im [nächsten Modul](/de/docs/Learn/JavaScript/Asynchronous) lernen, aber im Moment sagen wir einfach, dass wir das Schlüsselwort {{jsxref("Statements/async_function", "async")}} vor dem Namen der Funktion verwenden müssen, die die Fetch-API verwendet, und das Schlüsselwort {{jsxref("Operators/await", "await")}} vor den Aufrufen von asynchronen Funktionen hinzufügen.

Nach all dem wird die Variable `superHeroes` das JavaScript-Objekt basierend auf dem JSON enthalten. Wir leiten dann dieses Objekt an zwei Funktionsaufrufe weiter — der erste füllt das `<header>` mit den korrekten Daten, während der zweite eine Informationskarte für jeden Helden im Team erstellt und sie in den `<section>`-Bereich einfügt.

### Header ausfüllen

Nachdem wir die JSON-Daten erhalten und in ein JavaScript-Objekt umgewandelt haben, wollen wir sie verwenden, indem wir die beiden oben erwähnten Funktionen schreiben. Fügen Sie zunächst die folgende Funktionsdefinition unterhalb des vorherigen Codes hinzu:

```js
function populateHeader(obj) {
  const header = document.querySelector("header");
  const myH1 = document.createElement("h1");
  myH1.textContent = obj.squadName;
  header.appendChild(myH1);

  const myPara = document.createElement("p");
  myPara.textContent = `Herkunft: ${obj.homeTown} // Gegründet: ${obj.formed}`;
  header.appendChild(myPara);
}
```

Hier erstellen wir zuerst ein {{HTMLElement("Heading_Elements", "h1")}}-Element mit [`createElement()`](/de/docs/Web/API/Document/createElement), setzen dessen [`textContent`](/de/docs/Web/API/Node/textContent) auf den Wert der `squadName`-Eigenschaft des Objekts und hängen es dann mit [`appendChild()`](/de/docs/Web/API/Node/appendChild) an das Header an. Wir führen dann eine sehr ähnliche Operation mit einem Absatz durch: erstellen ihn, setzen seinen Textinhalt und hängen ihn an das Header an. Der einzige Unterschied ist, dass sein Textinhalt auf ein [Template Literal](/de/docs/Web/JavaScript/Reference/Template_literals) gesetzt wird, das sowohl die `homeTown`- als auch die `formed`-Eigenschaft des Objekts enthält.

### Erstellung der Helden-Informationskarten

Fügen Sie als Nächstes die folgende Funktion am Ende des Codes hinzu, die die Heldenkarten erstellt und anzeigt:

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
    myPara1.textContent = `Geheime Identität: ${hero.secretIdentity}`;
    myPara2.textContent = `Alter: ${hero.age}`;
    myPara3.textContent = "Superkräfte:";

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

Zuerst speichern wir die `members`-Eigenschaft des JavaScript-Objekts in einer neuen Variablen. Dieses Array enthält mehrere Objekte, die die Informationen für jeden Helden enthalten.

Als Nächstes verwenden wir eine [for...of-Schleife](/de/docs/Learn/JavaScript/Building_blocks/Looping_code#the_for...of_loop), um durch jedes Objekt im Array zu schleifen. Für jedes dieser Objekte:

1. Wir erstellen mehrere neue Elemente: ein `<article>`, ein `<h2>`, drei `<p>`s und eine `<ul>`.
2. Wir setzen das `<h2>`, um den `name` des aktuellen Helden zu enthalten.
3. Wir füllen die drei Absätze mit deren `secretIdentity`, `age` und einer Zeile ein, die "Superkräfte:" sagt, um die Informationen in der Liste einzuführen.
4. Wir speichern die `powers`-Eigenschaft in einer weiteren neuen Konstante namens `superPowers` — diese enthält ein Array, das die aktuellen Superkräfte des Helden auflistet.
5. Wir verwenden eine weitere `for...of`-Schleife, um durch die aktuellen Superkräfte des Helden zu laufen — für jede erstellen wir ein `<li>`-Element, platzieren die Superkraft darin und fügen dann das `listItem` mit `appendChild()` in das `<ul>`-Element (`myList`) ein.
6. Das allerletzte, was wir tun, ist, das `<h2>`, die `<p>`s und die `<ul>` in das `<article>` (`myArticle`) einzufügen und dann das `<article>` in das `<section>` einzufügen. Die Reihenfolge, in der die Dinge hinzugefügt werden, ist wichtig, da dies die Reihenfolge ist, in der sie im HTML angezeigt werden.

> [!NOTE]
> Falls Sie Schwierigkeiten haben, das Beispiel zum Laufen zu bringen, versuchen Sie, auf unseren [heroes-finished.html](https://github.com/mdn/learning-area/blob/main/javascript/oojs/json/heroes-finished.html) Quellcode zu verweisen (sehen Sie es sich auch [live](https://mdn.github.io/learning-area/javascript/oojs/json/heroes-finished.html) an).

> [!NOTE]
> Wenn Sie Schwierigkeiten haben, die Punkt-/Klammernotation zu befolgen, die wir verwenden, um auf das JavaScript-Objekt zuzugreifen, kann es helfen, die [superheroes.json](https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json)-Datei in einem anderen Tab oder Ihrem Texteditor geöffnet zu haben und sich darauf zu beziehen, während Sie sich unser JavaScript ansehen.
> Sie sollten auch unseren [JavaScript-Objektgrundlagen](/de/docs/Learn/JavaScript/Objects/Basics) Artikel für mehr Informationen zur Punkt- und Klammernotation durchsehen.

### Aufruf der Top-Level-Funktion

Beenden wir, indem wir unsere Top-Level-`populate()`-Funktion aufrufen:

```js
populate();
```

## Umwandlung zwischen Objekten und Text

Das obige Beispiel war einfach in Bezug auf den Zugriff auf das JavaScript-Objekt, weil wir die Netzwerkantwort direkt mit `response.json()` in ein JavaScript-Objekt umgewandelt haben.

Aber manchmal haben wir nicht so viel Glück — manchmal erhalten wir einen rohen JSON-String, und wir müssen ihn selbst in ein Objekt umwandeln. Und wenn wir ein JavaScript-Objekt über das Netzwerk senden möchten, müssen wir es vor dem Senden in JSON (einen String) umwandeln. Zum Glück sind diese beiden Probleme so häufig in der Webentwicklung, dass in Browsern ein integriertes [JSON](/de/docs/Web/JavaScript/Reference/Global_Objects/JSON)-Objekt verfügbar ist, das die folgenden zwei Methoden enthält:

- [`parse()`](/de/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse): Akzeptiert einen JSON-String als Parameter und gibt das entsprechende JavaScript-Objekt zurück.
- [`stringify()`](/de/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify): Akzeptiert ein Objekt als Parameter und gibt den äquivalenten JSON-String zurück.

Sie können die erste im Einsatz in unserem [heroes-finished-json-parse.html](https://mdn.github.io/learning-area/javascript/oojs/json/heroes-finished-json-parse.html)-Beispiel sehen (sehen Sie sich den [Quellcode](https://github.com/mdn/learning-area/blob/main/javascript/oojs/json/heroes-finished-json-parse.html) an) — dies tut genau dasselbe wie das Beispiel, das wir zuvor aufgebaut haben, außer dass:

- Wir rufen die Antwort als Text statt als JSON ab, indem wir die {{domxref("Response/text", "text()")}}-Methode der Antwort aufrufen.
- Wir verwenden dann `parse()`, um den Text in ein JavaScript-Objekt zu konvertieren.

Das Schlüsselfragment des Codes ist hier:

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

Wie Sie vielleicht vermuten, funktioniert `stringify()` genau umgekehrt. Versuchen Sie, die folgenden Zeilen nacheinander in die JavaScript-Konsole Ihres Browsers einzugeben, um es in Aktion zu sehen:

```js
let myObj = { name: "Chris", age: 38 };
myObj;
let myString = JSON.stringify(myObj);
myString;
```

Hier erstellen wir ein JavaScript-Objekt, überprüfen dann, was es enthält, konvertieren es dann mit `stringify()` in einen JSON-String — speichern den Rückgabewert in einer neuen Variablen — und überprüfen es dann erneut.

## Testen Sie Ihr Wissen!

Sie haben das Ende dieses Artikels erreicht, aber können Sie sich die wichtigsten Informationen merken? Sie können einige weitere Tests finden, um zu überprüfen, ob Sie diese Informationen behalten haben, bevor Sie weitermachen — siehe [Testen Sie Ihr Wissen: JSON](/de/docs/Learn/JavaScript/Objects/Test_your_skills:_JSON).

## Zusammenfassung

In diesem Artikel haben wir Ihnen eine einfache Anleitung zur Verwendung von JSON in Ihren Programmen gegeben, einschließlich der Erstellung und des Parsens von JSON und des Zugriffs auf darin gesperrte Daten. Im nächsten Artikel werden wir mit objektorientiertem JavaScript beginnen.

## Siehe auch

- [JSON-Referenz](/de/docs/Web/JavaScript/Reference/Global_Objects/JSON)
- [Fetch API-Übersicht](/de/docs/Web/API/Fetch_API)
- [Fetch verwenden](/de/docs/Web/API/Fetch_API/Using_Fetch)
- [HTTP-Anfragemethoden](/de/docs/Web/HTTP/Methods)
- [Offizielle JSON Website mit Link zum ECMA-Standard](https://json.org/)

{{PreviousMenuNext("Learn/JavaScript/Objects/Classes_in_JavaScript", "Learn/JavaScript/Objects/Object_building_practice", "Learn/JavaScript/Objects")}}
