---
title: Arbeiten mit JSON
slug: Learn/JavaScript/Objects/JSON
l10n:
  sourceCommit: d71da812ee94c20658cb1916a123a42254ea545c
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/JavaScript/Objects/Classes_in_JavaScript", "Learn/JavaScript/Objects/Object_building_practice", "Learn/JavaScript/Objects")}}

JavaScript Object Notation (JSON) ist ein standardisiertes textbasiertes Format zur Darstellung von strukturierten Daten basierend auf der JavaScript-Objektsyntax. Es wird häufig zum Übertragen von Daten in Webanwendungen verwendet (z. B. das Senden von Daten vom Server zum Client, damit diese auf einer Webseite angezeigt werden können, oder umgekehrt). Sie werden es ziemlich oft antreffen, daher geben wir Ihnen in diesem Artikel alles, was Sie benötigen, um mit JSON unter Verwendung von JavaScript zu arbeiten, einschließlich des Parsens von JSON, damit Sie auf darin enthaltene Daten zugreifen können, und der Erstellung von JSON.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Ein grundlegendes Verständnis von HTML und CSS, Vertrautheit mit den JavaScript-Grundlagen (siehe <a href="/de/docs/Learn/JavaScript/First_steps">Erste Schritte</a> und <a href="/de/docs/Learn/JavaScript/Building_blocks">Bausteine</a>) und den OOJS-Grundlagen (siehe <a href="/de/docs/Learn/JavaScript/Objects/Basics">Einführung in Objekte</a>).
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Verstehen, wie man mit in JSON gespeicherten Daten arbeitet und eigene JSON-Strings erstellt.
      </td>
    </tr>
  </tbody>
</table>

## Nein, wirklich, was ist JSON?

[JSON](/de/docs/Glossary/JSON) ist ein textbasiertes Datenformat, das der JavaScript-Objektsyntax folgt und von [Douglas Crockford](https://en.wikipedia.org/wiki/Douglas_Crockford) populär gemacht wurde.
Auch wenn es der JavaScript-Objektliteral-Syntax sehr ähnelt, kann es unabhängig von JavaScript verwendet werden, und viele Programmierumgebungen verfügen über die Fähigkeit, JSON zu lesen (parsen) und zu generieren.

JSON existiert als String — nützlich, wenn Sie Daten über ein Netzwerk übertragen möchten.
Es muss in ein natives JavaScript-Objekt konvertiert werden, wenn Sie auf die Daten zugreifen möchten.
Dies ist kein großes Problem — JavaScript stellt ein globales [JSON](/de/docs/Web/JavaScript/Reference/Global_Objects/JSON) Objekt bereit, das über Methoden für die Konvertierung zwischen den beiden verfügt.

> [!NOTE]
> Die Umwandlung eines Strings in ein natives Objekt wird _Deserialisierung_ genannt, während die Umwandlung eines nativen Objekts in einen String, um es über das Netzwerk zu übertragen, _Serialisierung_ genannt wird.

Ein JSON-String kann in seiner eigenen Datei gespeichert werden, die im Grunde nur eine Textdatei mit der Erweiterung `.json` und einem [MIME-Typ](/de/docs/Glossary/MIME_type) von `application/json` ist.

### JSON-Struktur

Wie oben beschrieben, ist JSON ein String, dessen Format sehr den JavaScript-Objektliteral-Format ähnelt.
Sie können dieselben grundlegenden Datentypen in JSON einbeziehen, wie Sie es in einem Standard-JavaScript-Objekt tun können — Strings, Zahlen, Arrays, Booleans und andere Objektliteralien.
Dies ermöglicht Ihnen, eine Datenhierarchie zu konstruieren, wie folgt:

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

Wenn wir diesen String in ein JavaScript-Programm laden und in einer Variablen namens `superHeroes` parsen würden, könnten wir dann auf die darin enthaltenen Daten mit der gleichen Punkt/Klammer-Notation zugreifen, die wir im Artikel über die [JavaScript-Objekt-Grundlagen](/de/docs/Learn/JavaScript/Objects/Basics) angesehen haben.
Zum Beispiel:

```js
superHeroes.homeTown;
superHeroes["active"];
```

Um auf Daten weiter unten in der Hierarchie zuzugreifen, müssen Sie die benötigten Eigenschaftsnamen und Array-Indizes zusammenkoppeln. Zum Beispiel, um auf die dritte Superkraft des zweiten Helden in der Mitgliederliste zuzugreifen, würden Sie Folgendes tun:

```js
superHeroes["members"][1]["powers"][2];
```

1. Zuerst haben wir den Variablennamen — `superHeroes`.
2. Darin wollen wir auf die Eigenschaft `members` zugreifen, also verwenden wir `["members"]`.
3. `members` enthält ein Array, das mit Objekten gefüllt ist. Wir wollen auf das zweite Objekt im Array zugreifen, also verwenden wir `[1]`.
4. In diesem Objekt wollen wir auf die `powers`-Eigenschaft zugreifen, also verwenden wir `["powers"]`.
5. Innerhalb der `powers`-Eigenschaft befindet sich ein Array, das die Superkräfte des ausgewählten Helden enthält. Wir wollen die dritte, also verwenden wir `[2]`.

> [!NOTE]
> Wir haben das oben gesehene JSON in einer Variablen in unserem [JSONTest.html](https://mdn.github.io/learning-area/javascript/oojs/json/JSONTest.html) Beispiel (siehe den [Quellcode](https://github.com/mdn/learning-area/blob/main/javascript/oojs/json/JSONTest.html)) verfügbar gemacht.
> Versuchen Sie, dies zu laden und dann auf die Daten in der Variablen über die JavaScript-Konsole Ihres Browsers zuzugreifen.

### Arrays als JSON

Oben erwähnten wir, dass JSON-Text im Grunde wie ein JavaScript-Objekt in einem String aussieht.
Wir können auch Arrays zu/von JSON konvertieren. Unten ist ebenfalls gültiges JSON, zum Beispiel:

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

Das oben Genannte ist vollkommen gültiges JSON. Sie würden nur in seiner geparsten Version auf die Array-Elemente zugreifen müssen, indem Sie mit einem Array-Index beginnen, zum Beispiel `[0]["powers"][0]`.

### Weitere Hinweise

- JSON ist rein ein String mit einem spezifizierten Datenformat — es enthält nur Eigenschaften, keine Methoden.
- Bei JSON müssen doppelte Anführungszeichen um Strings und Eigenschaftsnamen verwendet werden.
  Einzelne Anführungszeichen sind nicht gültig außer um den gesamten JSON-String herum.
- Selbst ein einziger falsch gesetzter Komma oder Doppelpunkt kann eine JSON-Datei fehlerhaft machen und nicht funktionieren lassen.
  Sie sollten darauf achten, Daten zu validieren, die Sie verwenden möchten (obwohl computererzeugtes JSON weniger wahrscheinlich Fehler enthält, solange das Erzeugerprogramm korrekt funktioniert).
  Sie können JSON mit einer Anwendung wie [JSONLint](https://jsonlint.com/) validieren.
- JSON kann tatsächlich die Form jedes Datentyps annehmen, der gültig für die Einbeziehung innerhalb JSON ist, nicht nur Arrays oder Objekte.
  Zum Beispiel wäre ein einzelner String oder eine Zahl gültiges JSON.
- Im Gegensatz zu JavaScript-Code, in dem Objekteigenschaften nicht zitiert sein müssen, dürfen in JSON nur zitierte Strings als Eigenschaften verwendet werden.

## Aktives Lernen: Durcharbeiten eines JSON-Beispiels

Also, arbeiten wir ein Beispiel durch, um zu zeigen, wie wir einige JSON-formatierte Daten auf einer Website verwenden könnten.

### Einstieg

Zu Beginn erstellen Sie lokale Kopien unserer [heroes.html](https://github.com/mdn/learning-area/blob/main/javascript/oojs/json/heroes.html) und [style.css](https://github.com/mdn/learning-area/blob/main/javascript/oojs/json/style.css) Dateien.
Letztere enthält einige einfache CSS, um unsere Seite zu stylen, während die erstere etwas sehr einfaches HTML im Body enthält, sowie ein {{HTMLElement("script")}}-Element, um den JavaScript-Code zu enthalten, den wir in dieser Übung schreiben werden:

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

![Bild eines Dokuments mit dem Titel „Superhero-Squad“ (in einer ausgefallenen Schriftart) und dem Untertitel „Hometown: Metro City // Formed: 2016“. Drei Spalten unter der Überschrift sind mit „Molecule Man“, „Madame Uppercut“ und „Eternal Flame“ betitelt. Jede Spalte listet den Geheimidentitätsnamen des Helden, das Alter und die Superkräfte auf.](json-superheroes.png)

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
Diese API ermöglicht es uns, Netzwerk-Anfragen zu machen, um Ressourcen von einem Server über JavaScript abzurufen (z. B. Bilder, Text, JSON, sogar HTML-Schnipsel), was bedeutet, dass wir kleine Inhaltsabschnitte aktualisieren können, ohne die ganze Seite neu laden zu müssen.

In unserer Funktion verwenden die ersten vier Zeilen die Fetch API, um das JSON vom Server abzurufen:

- Wir deklarieren die Variable `requestURL`, um die GitHub-URL zu speichern.
- Wir verwenden die URL, um ein neues [`Request`](/de/docs/Web/API/Request)-Objekt zu initialisieren.
- Wir führen die Netzwerk-Anfrage mit der Funktion [`fetch()`](/de/docs/Web/API/Window/fetch) aus, und dies gibt ein [`Response`](/de/docs/Web/API/Response)-Objekt zurück.
- Wir rufen die Antwort als JSON ab, indem wir die [`json()`](/de/docs/Web/API/Response/json)-Funktion des `Response`-Objekts verwenden.

> [!NOTE]
> Die `fetch()`-API ist **asynchron**. Wir lernen viel über asynchrone Funktionen im [nächsten Modul](/de/docs/Learn/JavaScript/Asynchronous), aber vorerst sagen wir einfach, dass wir das Schlüsselwort {{jsxref("Statements/async_function", "async")}} vor den Namen der Funktion setzen müssen, die die Fetch-API verwendet, und das Schlüsselwort {{jsxref("Operators/await", "await")}} vor die Aufrufe aller asynchronen Funktionen setzen müssen.

Nach all dem enthält die Variable `superHeroes` das JavaScript-Objekt basierend auf dem JSON. Wir übergeben dieses Objekt dann an zwei Funktionsaufrufe — der erste füllt den `<header>` mit den richtigen Daten und der zweite erstellt für jedes Teammitglied eine Informationskarte und fügt sie in den `<section>` ein.

### Den Header füllen

Nachdem wir die JSON-Daten abgerufen und in ein JavaScript-Objekt konvertiert haben, verwenden wir diese, indem wir die beiden oben erwähnten Funktionen schreiben. Fügen Sie zunächst die folgende Funktionsdefinition unter dem vorherigen Code hinzu:

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

Hier erstellen wir zuerst ein {{HTMLElement("Heading_Elements", "h1")}}-Element mit [`createElement()`](/de/docs/Web/API/Document/createElement), setzen sein [`textContent`](/de/docs/Web/API/Node/textContent), um der `squadName`-Eigenschaft des Objekts zu entsprechen, und hängen es dann mit [`appendChild()`](/de/docs/Web/API/Node/appendChild) an den Header an. Wir führen dann eine sehr ähnliche Operation mit einem Paragrafen durch: erstellen Sie ihn, setzen Sie seinen Textinhalt und hängen Sie ihn an den Header an. Der einzige Unterschied besteht darin, dass sein Text auf ein [Template Literal](/de/docs/Web/JavaScript/Reference/Template_literals) eingestellt wird, das sowohl die `homeTown`- als auch die `formed`-Eigenschaft des Objekts enthält.

### Erstellen der Helden-Informationskarten

Fügen Sie als Nächstes die folgende Funktion am Ende des Codes hinzu, welche die Superheldenkarten erstellt und anzeigt:

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

Zu Beginn speichern wir die `members`-Eigenschaft des JavaScript-Objekts in einer neuen Variablen. Dieses Array enthält mehrere Objekte, die die Informationen für jeden Helden enthalten.

Als Nächstes verwenden wir eine [for...of Schleife](/de/docs/Learn/JavaScript/Building_blocks/Looping_code#the_for...of_loop), um durch jedes Objekt im Array zu iterieren. Für jedes:

1. Erstellen wir mehrere neue Elemente: ein `<article>`, ein `<h2>`, drei `<p>`s und ein `<ul>`.
2. Setzen wir das `<h2>` so, dass es den `name` des aktuellen Helden enthält.
3. Füllen wir die drei Absätze mit ihrem `secretIdentity`, `age` und einer Zeile „Superpowers:“, um die Informationen in der Liste einzuführen.
4. Speichern wir die `powers`-Eigenschaft in einer weiteren neuen Konstante namens `superPowers` — diese enthält ein Array, das die Superkräfte des aktuellen Helden auflistet.
5. Verwenden wir eine weitere `for...of` Schleife, um durch die Superkräfte des aktuellen Helden zu iterieren — für jede erstellen wir ein `<li>`-Element, legen die Superkraft hinein und platzieren dann das `listItem` im `<ul>`-Element (`myList`) mithilfe von `appendChild()`.
6. Das allerletzte, was wir tun, ist, die `<h2>`, `<p>`s und `<ul>` in das `<article>` (`myArticle`) einzufügen und dann das `<article>` in den `<section>` einzufügen. Die Reihenfolge, in der die Dinge eingefügt werden, ist wichtig, da dies die Reihenfolge ist, in der sie im HTML dargestellt werden.

> [!NOTE]
> Wenn Sie Schwierigkeiten haben, das Beispiel zum Laufen zu bringen, versuchen Sie, sich unseren [heroes-finished.html](https://github.com/mdn/learning-area/blob/main/javascript/oojs/json/heroes-finished.html) Quellcode zu Hilfe zu nehmen (sehen Sie es [live laufen](https://mdn.github.io/learning-area/javascript/oojs/json/heroes-finished.html) ebenfalls an).

> [!NOTE]
> Wenn Sie Schwierigkeiten haben, der Punkt/Klammer-Notation zu folgen, die wir zum Zugriff auf das JavaScript-Objekt verwenden, kann es helfen, die [superheroes.json](https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json) Datei in einem anderen Tab oder in Ihrem Texteditor geöffnet zu haben und darauf zu verweisen, während Sie unseren JavaScript anschauen.
> Sie sollten auch auf unseren Artikel über [JavaScript-Objekt-Grundlagen](/de/docs/Learn/JavaScript/Objects/Basics) zurückgreifen, um weitere Informationen über Punkt- und Klammernotation zu erhalten.

### Die Top-Level-Funktion aufrufen

Schließlich müssen wir unsere Top-Level-Funktion `populate()` aufrufen:

```js
populate();
```

## Konvertieren zwischen Objekten und Text

Das obige Beispiel war einfach in Bezug auf den Zugriff auf das JavaScript-Objekt, da wir die Netzwerkantwort direkt in ein JavaScript-Objekt mit `response.json()` umgewandelt haben.

Aber manchmal haben wir nicht so viel Glück — manchmal erhalten wir einen rohen JSON-String, und wir müssen ihn selbst in ein Objekt umwandeln. Und wenn wir ein JavaScript-Objekt über das Netzwerk senden möchten, müssen wir es vor dem Senden in JSON (einen String) umwandeln. Glücklicherweise sind diese beiden Probleme so häufig in der Webentwicklung, dass ein integriertes [JSON](/de/docs/Web/JavaScript/Reference/Global_Objects/JSON) Objekt in Browsern verfügbar ist, welches die folgenden zwei Methoden enthält:

- [`parse()`](/de/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse): Akzeptiert einen JSON-String als Parameter und gibt das entsprechende JavaScript-Objekt zurück.
- [`stringify()`](/de/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify): Akzeptiert ein Objekt als Parameter und gibt den äquivalenten JSON-String zurück.

Sie können die erste in Aktion in unserem Beispiel [heroes-finished-json-parse.html](https://mdn.github.io/learning-area/javascript/oojs/json/heroes-finished-json-parse.html) (sehen Sie den [Quellcode](https://github.com/mdn/learning-area/blob/main/javascript/oojs/json/heroes-finished-json-parse.html)) sehen — dies macht genau dasselbe wie das Beispiel, das wir zuvor aufgebaut haben, außer dass:

- wir die Antwort als Text statt als JSON abrufen, indem wir die [`text()`](/de/docs/Web/API/Response/text) Methode der Antwort aufrufen
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

Wie Sie vielleicht vermuten, funktioniert `stringify()` in umgekehrter Richtung. Versuchen Sie, die folgenden Zeilen nacheinander in die JavaScript-Konsole Ihres Browsers einzugeben, um sie in Aktion zu sehen:

```js
let myObj = { name: "Chris", age: 38 };
myObj;
let myString = JSON.stringify(myObj);
myString;
```

Hier erstellen wir ein JavaScript-Objekt, prüfen, was es enthält, konvertieren es dann mit `stringify()` in einen JSON-String — speichern den Rückgabewert in einer neuen Variablen — und überprüfen es dann erneut.

## Testen Sie Ihre Fähigkeiten!

Sie haben das Ende dieses Artikels erreicht, aber können Sie sich an die wichtigsten Informationen erinnern? Sie finden einige weitere Tests, um zu überprüfen, ob Sie diese Informationen behalten haben, bevor Sie weitermachen — siehe [Testen Sie Ihre Fähigkeiten: JSON](/de/docs/Learn/JavaScript/Objects/Test_your_skills:_JSON).

## Zusammenfassung

In diesem Artikel haben wir Ihnen einen einfachen Leitfaden zur Verwendung von JSON in Ihren Programmen gegeben, einschließlich der Erstellung und des Parsens von JSON und des Zugriffs auf darin eingeschlossene Daten. Im nächsten Artikel werden wir beginnen, uns mit objektorientiertem JavaScript zu befassen.

## Siehe auch

- [JSON-Referenz](/de/docs/Web/JavaScript/Reference/Global_Objects/JSON)
- [Übersicht der Fetch API](/de/docs/Web/API/Fetch_API)
- [Verwendung von Fetch](/de/docs/Web/API/Fetch_API/Using_Fetch)
- [HTTP-Anfragemethoden](/de/docs/Web/HTTP/Methods)
- [Offizielle JSON-Website mit Link zum ECMA-Standard](https://json.org/)

{{PreviousMenuNext("Learn/JavaScript/Objects/Classes_in_JavaScript", "Learn/JavaScript/Objects/Object_building_practice", "Learn/JavaScript/Objects")}}
