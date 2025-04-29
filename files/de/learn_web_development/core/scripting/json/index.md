---
title: Arbeiten mit JSON
short-title: JSON
slug: Learn_web_development/Core/Scripting/JSON
l10n:
  sourceCommit: a1ac64fa4da965d2a152f08221b1a9aed638fd16
---

{{PreviousMenuNext("Learn_web_development/Core/Scripting/Network_requests","Learn_web_development/Core/Scripting/Debugging_JavaScript", "Learn_web_development/Core/Scripting")}}

JavaScript Object Notation (JSON) ist ein standardisiertes, textbasiertes Format zur Darstellung strukturierter Daten, basierend auf der Syntax von JavaScript-Objekten. Es wird häufig für die Übertragung von Daten in Webanwendungen verwendet (z. B. um Daten vom Server zum Client zu senden, damit diese auf einer Webseite angezeigt werden, oder umgekehrt). Sie werden es häufig antreffen, daher bieten wir Ihnen in diesem Artikel alles, was Sie benötigen, um mit JSON in JavaScript zu arbeiten, einschließlich des Analysierens von JSON, damit Sie auf die darin enthaltenen Daten zugreifen können, und des Erstellens von JSON.

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
          <li>JSON als JavaScript-Objekt über Mechanismen in Web-APIs abrufen (zum Beispiel <code>Response.json()</code> in der Fetch API).</li>
          <li>Werte innerhalb von JSON-Daten mit Klammer- und Punkt-Syntax zugreifen.</li>
          <li>Konvertierung zwischen Objekten und Text mit <code>JSON.parse()</code> und <code>JSON.stringify()</code>.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Nein, wirklich, was ist JSON?

{{Glossary("JSON", "JSON")}} ist ein textbasiertes Datenformat, das der JavaScript-Objektsyntax folgt.
Es stellt strukturierte Daten als Zeichenkette dar, was nützlich ist, wenn Sie Daten über ein Netzwerk übertragen möchten.
Obwohl es der JavaScript-Objektsyntax sehr ähnelt, kann es unabhängig von JavaScript verwendet werden. Viele Programmierumgebungen haben die Fähigkeit, JSON zu lesen (parsen) und zu erzeugen.
In JavaScript werden die Methoden zum Parsen und Generieren von JSON vom [`JSON`](/de/docs/Web/JavaScript/Reference/Global_Objects/JSON)-Objekt bereitgestellt.

> [!NOTE]
> Das Umwandeln eines Strings in ein natives Objekt nennt man _Deserialisierung_, während das Umwandeln eines nativen Objekts in einen String, damit es über das Netzwerk übertragen werden kann, als _Serialisierung_ bezeichnet wird.

Ein JSON-String kann in einer eigenen Datei gespeichert werden, die im Grunde nur eine Textdatei mit der Endung `.json` ist und einen {{Glossary("MIME_type", "MIME-Typ")}} von `application/json` hat.

### JSON-Struktur

Wie oben beschrieben, ist JSON ein String, dessen Format dem eines JavaScript-Objekt-Literals sehr ähnlich ist.
Folgendes ist ein gültiger JSON-String, der ein Objekt darstellt.
Beachten Sie, dass es auch ein gültiges JavaScript-Objektliteral ist — nur mit einigen [Syntax-Einschränkungen](#json-syntaxeinschränkungen).

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

Wenn Sie dieses JSON in Ihrem JavaScript-Programm als String laden, können Sie es in ein normales Objekt parsen und dann die Daten innerhalb dessen mit der gleichen Punkt-/Klammer-Notation zugreifen, die wir im Artikel zu den [JavaScript-Objektgrundlagen](/de/docs/Learn_web_development/Core/Scripting/Object_basics) behandelt haben.
Zum Beispiel:

```js
superHeroes.homeTown;
superHeroes.members[1].powers[2];
```

1. Zuerst haben wir den Variablennamen — `superHeroes`.
2. Innerhalb dieses Objekts wollen wir auf die Eigenschaft `members` zugreifen, daher verwenden wir `.members`.
3. `members` enthält ein Array, das mit Objekten gefüllt ist. Wir möchten auf das zweite Objekt im Array zugreifen, daher verwenden wir `[1]`.
4. In diesem Objekt möchten wir auf die Eigenschaft `powers` zugreifen, daher verwenden wir `.powers`.
5. Innerhalb der Eigenschaft `powers` befindet sich ein Array, das die Superkräfte des ausgewählten Helden enthält. Wir möchten die dritte Superkraft, daher verwenden wir `[2]`.

Das Hauptaugenmerk ist, dass es nichts Besonderes beim Arbeiten mit JSON gibt; nachdem Sie es in ein JavaScript-Objekt geparst haben, arbeiten Sie damit genauso wie mit einem Objekt, das mit derselben Objektliteral-Syntax deklariert wurde.

> [!NOTE]
> Wir haben das oben gesehene JSON in einer Variablen in unserem [JSONTest.html](https://mdn.github.io/learning-area/javascript/oojs/json/JSONTest.html)-Beispiel verfügbar gemacht (siehe den [Quellcode](https://github.com/mdn/learning-area/blob/main/javascript/oojs/json/JSONTest.html)).
> Versuchen Sie, dies zu laden und dann auf Daten innerhalb der Variablen über die JavaScript-Konsole Ihres Browsers zuzugreifen.

### Arrays als JSON

Oben erwähnten wir, dass der JSON-Text im Grunde wie ein JavaScript-Objekt innerhalb eines Strings aussieht.
Wir können auch Arrays in JSON umwandeln und umgekehrt. Das folgende Beispiel ist ein vollkommen gültiges JSON:

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

Sie müssen auf Array-Elemente (in seiner geparsten Version) durch Verwendung eines Array-Indexes zugreifen, zum Beispiel `superHeroes[0].powers[0]`.

JSON kann auch eine einzelne Primitive enthalten. Zum Beispiel sind `29`, `"Dan Jukes"` oder `true` alles gültige JSON.

### JSON-Syntaxeinschränkungen

Wie bereits erwähnt, ist jedes JSON ein gültiges JavaScript-Literal (Objekt, Array, Zahl, etc.). Das Umgekehrte gilt jedoch nicht — nicht alle JavaScript-Objektliterale sind gültiges JSON.

- JSON kann nur _serialisierbare_ Datentypen enthalten. Das bedeutet:
  - Für Primitive kann JSON Zeichenfolgenliterale, Zahlenliterale, `true`, `false` und `null` enthalten. Bemerkenswerterweise kann es `undefined`, `NaN` oder `Infinity` nicht enthalten.
  - Für Nicht-Primitive kann JSON Objektliterale und Arrays enthalten, aber keine Funktionen oder andere Objekttypen wie `Date`, `Set` und `Map`. Die Objekte und Arrays innerhalb von JSON müssen weiterhin gültige JSON-Datentypen enthalten.
- Zeichenfolgen müssen in doppelte Anführungszeichen gesetzt sein, nicht in einfache.
- Zahlen müssen in Dezimalschreibweise geschrieben werden.
- Jede Eigenschaft eines Objekts muss in Form von `"key": value` sein. Eigenschaftsnamen müssen Zeichenfolgenliterale in doppelten Anführungszeichen sein. Spezielle JavaScript-Syntax wie Methoden ist nicht erlaubt, da Methoden Funktionen sind und Funktionen keine gültigen JSON-Datentypen sind.
- Objekte und Arrays dürfen keine [nachgestellten Kommas](/de/docs/Web/JavaScript/Reference/Trailing_commas) enthalten.
- Kommentare sind in JSON nicht erlaubt.

Schon ein einzelnes fehlplatziertes Komma oder Doppelpunkt kann eine JSON-Datei ungültig machen und dazu führen, dass sie fehlschlägt.
Sie sollten darauf achten, alle Daten, die Sie verwenden möchten, zu validieren (obwohl rechnergenerierte JSON weniger wahrscheinlich Fehler enthält, solange das Generatorprogramm korrekt funktioniert).
Sie können JSON mit einer Anwendung wie [JSONLint](https://jsonlint.com/) oder [JSON-validate](https://www.json-validate.com/) validieren.

## Aktives Lernen: Bearbeiten eines JSON-Beispiels

Lassen Sie uns ein Beispiel durchgehen, um zu zeigen, wie wir einige JSON-formatierte Daten auf einer Webseite verwenden könnten.

### Erste Schritte

Zuerst erstellen Sie lokale Kopien unserer [heroes.html](https://github.com/mdn/learning-area/blob/main/javascript/oojs/json/heroes.html) und [style.css](https://github.com/mdn/learning-area/blob/main/javascript/oojs/json/style.css) Dateien.
Letztere enthält einige einfache CSS zur Gestaltung unserer Seite, während erstere etwas sehr einfaches Body-HTML und ein {{HTMLElement("script")}}-Element enthält, um den JavaScript-Code aufzunehmen, den wir in dieser Übung schreiben werden:

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

Wir haben unsere JSON-Daten auf unserem GitHub bereitgestellt, unter <https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json>.

Wir werden das JSON in unser Script laden und einige clevere DOM-Manipulationen verwenden, um es anzuzeigen, wie dieses:

![Bild eines Dokuments mit dem Titel "Super hero squad" (in einer ausgefallenen Schrift) und dem Untertitel "Hometown: Metro City // Formed: 2016". Drei darunter liegende Spalten sind mit "Molecule Man", "Madame Uppercut" und "Eternal Flame" betitelt. Jede Spalte listet den geheimen Identitätsnamen des Helden, das Alter und die Superkräfte auf.](json-superheroes.png)

### Hauptfunktion

Die Hauptfunktion sieht so aus:

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
Diese API ermöglicht es uns, Netzwerkanfragen zu machen, um Ressourcen von einem Server über JavaScript abzurufen (z.B. Bilder, Text, JSON, sogar HTML-Schnipsel), was bedeutet, dass wir kleine Inhalte aktualisieren können, ohne die gesamte Seite neu laden zu müssen.

In unserer Funktion verwenden die ersten vier Zeilen die Fetch-API, um das JSON vom Server abzurufen:

- Wir deklarieren die `requestURL` Variable, um die GitHub-URL zu speichern.
- Wir verwenden die URL, um ein neues [`Request`](/de/docs/Web/API/Request)-Objekt zu initialisieren.
- Wir machen die Netzwerkanfrage, indem wir die [`fetch()`](/de/docs/Web/API/Window/fetch)-Funktion benutzen, und dies gibt ein [`Response`](/de/docs/Web/API/Response)-Objekt zurück.
- Wir holen die Antwort als JSON, indem wir die [`json()`](/de/docs/Web/API/Response/json)-Funktion des `Response`-Objekts verwenden.

> [!NOTE]
> Die `fetch()` API ist **asynchron**. Sie können mehr über asynchrone Funktionen in unserem [Asynchrones JavaScript Modul](/de/docs/Learn_web_development/Extensions/Async_JS) lernen, aber für den Moment sagen wir einfach, dass wir das Schlüsselwort {{jsxref("Statements/async_function", "async")}} vor den Namen der Funktion setzen müssen, die die Fetch API verwendet, und das Schlüsselwort {{jsxref("Operators/await", "await")}} vor die Aufrufe jeder asynchronen Funktion.

Nach all dem enthält die Variable `superHeroes` das JavaScript-Objekt basierend auf dem JSON. Wir übergeben dann dieses Objekt an zwei Funktionsaufrufe — der erste füllt den `<header>` mit den korrekten Daten, während der zweite eine Informationskarte für jeden Helden im Team erstellt und sie in den `<section>` einfügt.

### Header füllen

Nachdem wir die JSON-Daten abgerufen und in ein JavaScript-Objekt umgewandelt haben, verwenden wir sie, indem wir die zwei oben genannten Funktionen schreiben. Fügen Sie zunächst die folgende Funktionsdefinition unter dem vorherigen Code hinzu:

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

Hier erstellen wir zunächst ein {{HTMLElement("Heading_Elements", "h1")}}-Element mit [`createElement()`](/de/docs/Web/API/Document/createElement), setzen seine [`textContent`](/de/docs/Web/API/Node/textContent) auf den Wert der `squadName`-Eigenschaft des Objekts und hängen es dann mit [`appendChild()`](/de/docs/Web/API/Node/appendChild) an den Header an. Wir führen dann einen sehr ähnlichen Vorgang mit einem Paragraphen durch: Erstellen Sie ihn, setzen Sie seinen Textinhalt und hängen Sie ihn an den Header an. Der einzige Unterschied besteht darin, dass sein Text auf ein [Template-Literal](/de/docs/Web/JavaScript/Reference/Template_literals) gesetzt ist, das sowohl die `homeTown`- als auch die `formed`-Eigenschaften des Objekts enthält.

### Erstellen der Helden-Informationskarten

Als nächstes fügen Sie die folgende Funktion am Ende des Codes hinzu, die die Heldenkarten erstellt und anzeigt:

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

Als nächstes verwenden wir eine [for...of Schleife](/de/docs/Learn_web_development/Core/Scripting/Loops#the_for...of_loop), um jedes Objekt im Array zu durchlaufen. Für jedes davon:

1. Erstellen Sie mehrere neue Elemente: ein `<article>`, ein `<h2>`, drei `<p>`s und ein `<ul>`.
2. Setzen Sie das `<h2>` auf den Namen des aktuellen Helden.
3. Füllen Sie die drei Paragraphen mit ihrem `secretIdentity`, `age` und einer Zeile mit "Superpowers:", um die Informationen in der Liste einzuführen.
4. Speichern Sie die `powers`-Eigenschaft in einer weiteren neuen Konstante namens `superPowers` — diese enthält ein Array, das die Superkräfte des aktuellen Helden auflistet.
5. Verwenden Sie eine weitere `for...of` Schleife, um die Superkräfte des aktuellen Helden zu durchlaufen — für jede von ihnen erstellen wir ein `<li>`-Element, fügen die Superkraft darin ein, und fügen dann das `listItem` in das `<ul>></ul>`-Element (`myList`) mit `appendChild()` ein.
6. Das allerletzte, was wir tun, ist, das `<h2>`, `<p>`s und `<ul>` in das `<article>` (`myArticle`) einzufügen, dann das `<article>` in den `<section>` einzufügen. Die Reihenfolge, in der Objekte angefügt werden, ist wichtig, da dies die Reihenfolge ist, in der sie im HTML angezeigt werden.

> [!NOTE]
> Wenn Sie Probleme haben, das Beispiel zum Laufen zu bringen, versuchen Sie, auf unseren [heroes-finished.html](https://github.com/mdn/learning-area/blob/main/javascript/oojs/json/heroes-finished.html) Quellcode zurückzugreifen (sehen Sie es auch [live laufen](https://mdn.github.io/learning-area/javascript/oojs/json/heroes-finished.html)).

> [!NOTE]
> Wenn Sie Schwierigkeiten haben, der Punkt-/Klammer-Notation zu folgen, die wir verwenden, um auf das JavaScript-Objekt zuzugreifen, kann es helfen, die [superheroes.json](https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json) Datei in einem anderen Tab oder Ihrem Texteditor offen zu haben und sie zu konsultieren, während Sie unser JavaScript ansehen.
> Sie sollten auch auf unseren [JavaScript-Objektgrundlagen](/de/docs/Learn_web_development/Core/Scripting/Object_basics) Artikel zurückgreifen, um mehr Informationen über Punkt- und Klammer-Notation zu erhalten.

### Aufrufen der Hauptfunktion

Schließlich müssen wir unsere oberste `populate()`-Funktion aufrufen:

```js
populate();
```

## Konvertierung zwischen Objekten und Text

Das obige Beispiel war einfach in Bezug auf den Zugriff auf das JavaScript-Objekt, weil wir die Netzwerkantwort direkt in ein JavaScript-Objekt umgewandelt haben, indem wir `response.json()` aufgerufen haben.

Aber manchmal haben wir nicht so viel Glück — manchmal erhalten wir einen reinen JSON-String und müssen ihn selbst in ein Objekt umwandeln. Und wenn wir ein JavaScript-Objekt über das Netzwerk senden möchten, müssen wir es vor dem Senden in JSON (einen String) umwandeln. Glücklicherweise sind diese beiden Probleme so verbreitet in der Webentwicklung, dass ein eingebautes [JSON](/de/docs/Web/JavaScript/Reference/Global_Objects/JSON)-Objekt in Browsern verfügbar ist, das die folgenden zwei Methoden enthält:

- [`parse()`](/de/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse): Akzeptiert einen JSON-String als Parameter und gibt das entsprechende JavaScript-Objekt zurück.
- [`stringify()`](/de/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify): Akzeptiert ein Objekt als Parameter und gibt den entsprechenden JSON-String zurück.

Sie können die erste Methode in Aktion in unserem [heroes-finished-json-parse.html](https://mdn.github.io/learning-area/javascript/oojs/json/heroes-finished-json-parse.html) Beispiel sehen (siehe den [Quellcode](https://github.com/mdn/learning-area/blob/main/javascript/oojs/json/heroes-finished-json-parse.html)) — dies macht genau dasselbe wie das Beispiel, das wir zuvor aufgebaut haben, außer dass:

- Wir die Antwort als Text anstatt als JSON abrufen, indem wir die [`text()`](/de/docs/Web/API/Response/text)-Methode der Antwort aufrufen.
- Dann verwenden wir `parse()`, um den Text in ein JavaScript-Objekt umzuwandeln.

Der Schlüsselausschnitt des Codes ist hier:

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

Wie Sie vielleicht vermuten, funktioniert `stringify()` in die entgegengesetzte Richtung. Versuchen Sie, die folgenden Zeilen nacheinander in die JavaScript-Konsole Ihres Browsers einzugeben, um es in Aktion zu sehen:

```js
let myObj = { name: "Chris", age: 38 };
myObj;
let myString = JSON.stringify(myObj);
myString;
```

Hier erstellen wir ein JavaScript-Objekt, überprüfen dann, was es enthält, wandeln es dann mit `stringify()` in einen JSON-String um — speichern den Rückgabewert in einer neuen Variablen — und überprüfen es dann erneut.

## Testen Sie Ihr Können!

Sie haben das Ende dieses Artikels erreicht, aber können Sie sich die wichtigsten Informationen merken? Sie finden einige weitere Tests zur Überprüfung, dass Sie diese Informationen behalten haben, bevor Sie fortfahren — siehe [Testen Sie Ihr Können: JSON](/de/docs/Learn_web_development/Core/Scripting/Test_your_skills/JSON).

## Zusammenfassung

In dieser Lektion haben wir Ihnen vorgestellt, wie Sie JSON in Ihren Programmen verwenden, einschließlich wie Sie JSON erstellen und parsen, und wie Sie auf darin eingeschlossene Daten zugreifen. Im nächsten Artikel werden wir praktische Techniken zur Fehlersuche in JavaScript und zur Fehlerbehandlung behandeln.

## Siehe auch

- [JSON-Referenz](/de/docs/Web/JavaScript/Reference/Global_Objects/JSON)
- [Fetch-API-Übersicht](/de/docs/Web/API/Fetch_API)
- [Fetch verwenden](/de/docs/Web/API/Fetch_API/Using_Fetch)
- [HTTP-Anforderungsmethoden](/de/docs/Web/HTTP/Reference/Methods)

{{PreviousMenuNext("Learn_web_development/Core/Scripting/Network_requests","Learn_web_development/Core/Scripting/Debugging_JavaScript", "Learn_web_development/Core/Scripting")}}
