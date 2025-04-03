---
title: Arbeiten mit JSON
short-title: JSON
slug: Learn_web_development/Core/Scripting/JSON
l10n:
  sourceCommit: ef523fc421c07b87264eb27393e5a693ed8a9f30
---

{{LearnSidebar}}

{{PreviousMenuNext("Learn_web_development/Core/Scripting/Network_requests","Learn_web_development/Core/Scripting/Debugging_JavaScript", "Learn_web_development/Core/Scripting")}}

JavaScript Object Notation (JSON) ist ein standardisiertes textbasiertes Format zur Darstellung strukturierter Daten, basierend auf der JavaScript-Objektsyntax. Es wird häufig für die Datenübertragung in Webanwendungen verwendet (z. B. zum Senden von Daten vom Server an den Client, damit diese auf einer Webseite angezeigt werden können, oder umgekehrt). Sie werden häufig darauf stoßen, weshalb wir Ihnen in diesem Artikel alles bieten, was Sie benötigen, um mit JSON in JavaScript zu arbeiten, einschließlich JSON-Parsing, um auf die darin enthaltenen Daten zuzugreifen, und das Erstellen von JSON.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>Ein Verständnis von <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a> und den <a href="/de/docs/Learn_web_development/Core/Styling_basics">Grundlagen von CSS</a>, Vertrautheit mit den JavaScript-Grundlagen, wie sie in den vorherigen Lektionen behandelt wurden.</td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Was JSON ist — ein sehr häufig verwendetes Datenformat basierend auf der JavaScript-Objektsyntax.</li>
          <li>Dass JSON auch Arrays enthalten kann.</li>
          <li>Rufen Sie JSON als JavaScript-Objekt mithilfe von in Web-APIs verfügbaren Mechanismen ab (zum Beispiel <code>Response.json()</code> in der Fetch-API).</li>
          <li>Zugriff auf Werte innerhalb von JSON-Daten mithilfe von Klammer- und Punktsyntax.</li>
          <li>Umwandlung zwischen Objekten und Texten mithilfe von <code>JSON.parse()</code> und <code>JSON.stringify()</code>.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Nein, wirklich, was ist JSON?

{{Glossary("JSON", "JSON")}} ist ein textbasiertes Datenformat, das der JavaScript-Objektsyntax folgt.
Es stellt strukturierte Daten als Zeichenfolge dar, was nützlich ist, wenn Sie Daten über ein Netzwerk übertragen möchten.
Obwohl es der JavaScript-Objektliteralsyntax sehr ähnlich ist, kann es unabhängig von JavaScript verwendet werden. Viele Programmierumgebungen verfügen über die Fähigkeit, JSON zu lesen (parsen) und zu generieren.
In JavaScript werden die Methoden zum Parsen und Generieren von JSON durch das [`JSON`](/de/docs/Web/JavaScript/Reference/Global_Objects/JSON)-Objekt bereitgestellt.

> [!NOTE]
> Die Umwandlung einer Zeichenfolge in ein natives Objekt wird _Deserialization_ genannt, während die Umwandlung eines nativen Objekts in eine Zeichenfolge, damit es über das Netzwerk übertragen werden kann, _Serialization_ genannt wird.

Eine JSON-Zeichenfolge kann in einer eigenen Datei gespeichert werden, die im Grunde nur eine Textdatei mit der Erweiterung `.json` und einem {{Glossary("MIME_type", "MIME-Typ")}} von `application/json` ist.

### JSON-Struktur

Wie oben beschrieben, ist JSON eine Zeichenfolge, deren Format dem eines JavaScript-Objektliterals sehr ähnlich ist. Die folgende ist eine gültige JSON-Zeichenfolge, die ein Objekt darstellt. Beachten Sie, wie es auch ein gültiges JavaScript-Objektliteral ist — nur mit einigen weiteren [Syntaxbeschränkungen](#json-syntaxbeschränkungen).

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

Wenn Sie dieses JSON in Ihrem JavaScript-Programm als Zeichenfolge laden, können Sie es in ein normales Objekt parsen und dann auf die darin enthaltenen Daten auf dieselbe Dot-/Klammer-Notation zugreifen, die wir im Artikel zu den [JavaScript-Objektgrundlagen](/de/docs/Learn_web_development/Core/Scripting/Object_basics) behandelt haben. Zum Beispiel:

```js
superHeroes.homeTown;
superHeroes.members[1].powers[2];
```

1. Zuerst haben wir den Variablennamen — `superHeroes`.
2. Innerhalb davon wollen wir auf die Eigenschaft `members` zugreifen, also verwenden wir `.members`.
3. `members` enthält ein mit Objekten gefülltes Array. Wir möchten auf das zweite Objekt innerhalb des Arrays zugreifen, also verwenden wir `[1]`.
4. Innerhalb dieses Objekts möchten wir auf die Eigenschaft `powers` zugreifen, also verwenden wir `.powers`.
5. Innerhalb der Eigenschaft `powers` befindet sich ein Array mit den Superkräften des ausgewählten Helden. Wir möchten die dritte, also verwenden wir `[2]`.

Das wichtigste Fazit ist, dass es eigentlich nichts Besonderes daran gibt, mit JSON zu arbeiten; nachdem Sie es in ein JavaScript-Objekt geparst haben, arbeiten Sie damit, als ob es ein Objekt wäre, das mit derselben Objektsyntax deklariert wurde.

> [!NOTE]
> Wir haben das oben gezeigte JSON in einer Variablen in unserem [JSONTest.html](https://mdn.github.io/learning-area/javascript/oojs/json/JSONTest.html)-Beispiel verfügbar gemacht (sehen Sie sich den [Quellcode](https://github.com/mdn/learning-area/blob/main/javascript/oojs/json/JSONTest.html) an). Versuchen Sie, dies zu laden und dann über die JavaScript-Konsole Ihres Browsers auf die Daten in der Variablen zuzugreifen.

### Arrays als JSON

Oben haben wir erwähnt, dass JSON-Text im Grunde wie ein JavaScript-Objekt innerhalb einer Zeichenfolge aussieht. Wir können auch Arrays zu/von JSON konvertieren. Das unten stehende Beispiel ist vollkommen gültiges JSON:

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

Sie müssen auf Array-Elemente (in seiner geparsten Version) zugreifen, indem Sie mit einem Array-Index beginnen, zum Beispiel `superHeroes[0].powers[0]`.

Das JSON kann auch eine einzelne primitive Zahl enthalten. Zum Beispiel sind `29`, `"Dan Jukes"`, oder `true` alle gültige JSON.

### JSON-Syntaxbeschränkungen

Wie bereits erwähnt, ist jedes JSON ein gültiges JavaScript-Literal (Objekt, Array, Zahl, etc.). Das Umgekehrte ist jedoch nicht wahr — nicht alle JavaScript-Objektliterale sind gültiges JSON.

- JSON kann nur _serialisierbare_ Datentypen enthalten. Das bedeutet:
  - Bei Primitiven kann JSON String-Literale, Zahlen-Literale, `true`, `false` und `null` enthalten. Bemerkenswerterweise kann es `undefined`, `NaN` oder `Infinity` nicht enthalten.
  - Bei Nicht-Primitiven kann JSON Objektliterale und Arrays enthalten, aber keine Funktionen oder andere Objekttypen wie `Date`, `Set` und `Map`. Die Objekte und Arrays innerhalb von JSON müssen weitere gültige JSON-Datentypen enthalten.
- Strings müssen in doppelte Anführungszeichen eingeschlossen werden, nicht in einfache.
- Zahlen müssen in Dezimalnotation geschrieben werden.
- Jede Eigenschaft eines Objekts muss die Form `"key": value` haben. Eigenschaftsnamen müssen String-Literale in doppelten Anführungszeichen sein. Spezielle JavaScript-Syntax, wie Methoden, ist nicht erlaubt, da Methoden Funktionen sind und Funktionen keine gültigen JSON-Datentypen sind.
- Objekte und Arrays dürfen keine [Trailing Commas](/de/docs/Web/JavaScript/Reference/Trailing_commas) enthalten.
- Kommentare sind in JSON nicht erlaubt.

Selbst ein falsch gesetztes Komma oder Doppelpunkt kann eine JSON-Datei ungültig machen und dazu führen, dass sie fehlerhaft wird. Sie sollten darauf achten, alle Daten zu validieren, die Sie verwenden möchten (obwohl computererzeugtes JSON weniger wahrscheinlich Fehler enthält, solange das Generatorprogramm korrekt funktioniert). Sie können JSON mit einer Anwendung wie [JSONLint](https://jsonlint.com/) oder [JSON-validate](https://json-validate.com) validieren.

## Aktives Lernen: Ein JSON-Beispiel durchgehen

Lassen Sie uns nun ein Beispiel durchgehen, um zu zeigen, wie wir einige JSON-formatierte Daten auf einer Webseite verwenden könnten.

### Erste Schritte

Zu Beginn erstellen Sie lokale Kopien unserer [heroes.html](https://github.com/mdn/learning-area/blob/main/javascript/oojs/json/heroes.html) und [style.css](https://github.com/mdn/learning-area/blob/main/javascript/oojs/json/style.css) Dateien. Letztere enthält einige einfache CSS, um unsere Seite zu stylen, während die erstere einfachen HTML-Text im Body-Element und ein {{HTMLElement("script")}}-Element enthält, um den JavaScript-Code zu enthalten, den wir in dieser Übung schreiben werden:

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

Wir werden das JSON in unser Skript laden und einige nette DOM-Manipulationen verwenden, um es anzuzeigen, wie folgt:

![Bild eines Dokuments mit dem Titel "Super hero squad" (in einer schönen Schrift) und dem Untertitel "Hometown: Metro City // Formed: 2016". Drei darunter liegende Spalten tragen die Titel "Molecule Man", "Madame Uppercut" und "Eternal Flame". Jede Spalte listet den geheimen Identitätsnamen des Helden, das Alter und die Superkräfte auf.](json-superheroes.png)

### Top-Level-Funktion

Die Top-Level-Funktion sieht wie folgt aus:

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

Um das JSON abzurufen, verwenden wir eine API namens [Fetch](/de/docs/Web/API/Fetch_API). Diese API ermöglicht es uns, Netzwerk-Anfragen zu stellen, um Ressourcen von einem Server über JavaScript abzurufen (z. B. Bilder, Text, JSON, sogar HTML-Schnippsel), was bedeutet, dass wir kleine Inhaltsabschnitte aktualisieren können, ohne die gesamte Seite neu laden zu müssen.

In unserer Funktion verwenden die ersten vier Zeilen die Fetch-API, um das JSON vom Server abzurufen:

- wir deklarieren die Variable `requestURL`, um die GitHub-URL zu speichern
- wir verwenden die URL, um ein neues [`Request`](/de/docs/Web/API/Request)-Objekt zu initialisieren.
- wir stellen die Netzwerk-Anfrage mit der [`fetch()`](/de/docs/Web/API/Window/fetch)-Funktion, und dies gibt ein [`Response`](/de/docs/Web/API/Response)-Objekt zurück
- wir holen die Antwort als JSON mit der [`json()`](/de/docs/Web/API/Response/json)-Funktion des `Response`-Objekts.

> [!NOTE]
> Die `fetch()`-API ist **asynchron**. Sie können sich in unserem [Asynchronous JavaScript module](/de/docs/Learn_web_development/Extensions/Async_JS) ausführlich über asynchrone Funktionen informieren. Für jetzt sagen wir nur, dass wir vor dem Namen der Funktion, die die Fetch-API verwendet, das Schlüsselwort {{jsxref("Statements/async_function", "async")}} hinzufügen müssen und vor den Aufrufen aller asynchronen Funktionen das Schlüsselwort {{jsxref("Operators/await", "await")}} verwenden müssen.

Nach all dem wird die `superHeroes`-Variable das JavaScript-Objekt basierend auf dem JSON enthalten. Wir übergeben dieses Objekt dann an zwei Funktionsaufrufe — der erste füllt das `<header>` mit den richtigen Daten, während der zweite eine Informationskarte für jeden Helden im Team erstellt und diese in das `<section>` einfügt.

### Das Header füllen

Sobald wir die JSON-Daten abgerufen und in ein JavaScript-Objekt umgewandelt haben, nutzen wir sie, indem wir die zwei oben genannten Funktionen schreiben. Fügen Sie zunächst die folgende Funktionsdefinition unter dem vorherigen Code hinzu:

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

Hier erstellen wir zuerst ein {{HTMLElement("Heading_Elements", "h1")}}-Element mit [`createElement()`](/de/docs/Web/API/Document/createElement), setzen dessen [`textContent`](/de/docs/Web/API/Node/textContent) auf den `squadName`-Eigenschaft des Objekts und hängen es dann mit [`appendChild()`](/de/docs/Web/API/Node/appendChild) an den Header an. Wir führen dann eine sehr ähnliche Operation mit einem Absatz aus: Erstellen, setzen seinen Textinhalt und hängen ihn an den Header an. Der einzige Unterschied besteht darin, dass sein Text auf ein [Template Literal](/de/docs/Web/JavaScript/Reference/Template_literals) gesetzt wird, das sowohl die `homeTown`- als auch die `formed`-Eigenschaft des Objekts enthält.

### Die Helden-Informationskarten erstellen

Fügen Sie als nächstes die folgende Funktion am Ende des Codes hinzu, die die Superhelden-Karten erstellt und anzeigt:

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

Zuerst speichern wir die `members`-Eigenschaft des JavaScript-Objekts in einer neuen Variablen. Dieses Array enthält mehrere Objekte, die die Informationen für jeden Helden enthalten.

Als nächstes verwenden wir eine [for...of Schleife](/de/docs/Learn_web_development/Core/Scripting/Loops#the_for...of_loop), um durch jedes Objekt im Array zu schleifen. Für jedes von ihnen:

1. Erstellen wir mehrere neue Elemente: ein `<article>`, ein `<h2>`, drei `<p>` und ein `<ul>`.
2. Setzen wir das `<h2>`, um den `name` des aktuellen Helden zu enthalten.
3. Füllen wir die drei Absätze mit ihrem `secretIdentity`, `age` und einer Zeile, die "Superkräfte:" sagt, um die Informationen in der Liste einzuleiten.
4. Speichern wir die `powers`-Eigenschaft in einer anderen neuen Konstante namens `superPowers` — dies enthält ein Array, das die Superkräfte des aktuellen Helden auflistet.
5. Verwenden wir eine weitere `for...of`-Schleife, um durch die Superkräfte des aktuellen Helden zu schleifen — für jede von ihnen erstellen wir ein `<li>`-Element, setzen die Superkraft hinein und dann setzen wir das `listItem` in das `<ul>`-Element (`myList`) mit `appendChild()`.
6. Das allerletzte, was wir tun, ist, das `<h2>`, die `<p>`-Elemente und das `<ul>` in das `<article>` (`myArticle`) zu setzen, dann das `<article>` in das `<section>` zu setzen. Die Reihenfolge, in der Dinge eingefügt werden, ist wichtig, da dies die Reihenfolge ist, in der sie in das HTML eingefügt werden.

> [!NOTE]
> Wenn Sie Probleme haben, das Beispiel zum Laufen zu bringen, versuchen Sie, unseren [heroes-finished.html](https://github.com/mdn/learning-area/blob/main/javascript/oojs/json/heroes-finished.html) Quellcode zu verwenden (sehen Sie es sich [live an](https://mdn.github.io/learning-area/javascript/oojs/json/heroes-finished.html) auch).

> [!NOTE]
> Wenn Sie Schwierigkeiten haben, der Dot-/Bracket-Notation zu folgen, die wir verwenden, um auf das JavaScript-Objekt zuzugreifen, kann es hilfreich sein, die [superheroes.json](https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json) Datei in einem anderen Tab oder Ihrem Texteditor geöffnet zu haben, und darauf zu verweisen, während Sie unser JavaScript ansehen. Sie sollten auch auf unseren Artikel zu den [JavaScript-Objektgrundlagen](/de/docs/Learn_web_development/Core/Scripting/Object_basics) zurückgreifen, um mehr Informationen über Punkt- und Klammernotation zu erhalten.

### Die Top-Level-Funktion aufrufen

Schließlich müssen wir unsere Top-Level-Funktion `populate()` aufrufen:

```js
populate();
```

## Umwandlung zwischen Objekten und Texten

Das obige Beispiel war einfach in Bezug auf den Zugriff auf das JavaScript-Objekt, weil wir die Netzwerkantwort direkt in ein JavaScript-Objekt mit Hilfe von `response.json()` umgewandelt haben.

Aber manchmal haben wir nicht so viel Glück — manchmal erhalten wir einen einfachen JSON-String und müssen ihn selbst in ein Objekt umwandeln. Und wenn wir ein JavaScript-Objekt über das Netzwerk senden möchten, müssen wir es vor dem Senden in JSON (eine Zeichenfolge) umwandeln. Glücklicherweise sind diese beiden Probleme so häufig in der Webentwicklung, dass ein eingebautes [JSON](/de/docs/Web/JavaScript/Reference/Global_Objects/JSON)-Objekt in Browsern verfügbar ist, das die folgenden beiden Methoden enthält:

- [`parse()`](/de/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse): Nimmt einen JSON-String als Parameter und gibt das entsprechende JavaScript-Objekt zurück.
- [`stringify()`](/de/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify): Nimmt ein Objekt als Parameter und gibt den entsprechenden JSON-String zurück.

Sie können das erste in unserem Beispiel [heroes-finished-json-parse.html](https://mdn.github.io/learning-area/javascript/oojs/json/heroes-finished-json-parse.html) sehen (sehen Sie sich den [Quellcode](https://github.com/mdn/learning-area/blob/main/javascript/oojs/json/heroes-finished-json-parse.html) an) — dies macht genau das gleiche wie das Beispiel, das wir zuvor aufgebaut haben, außer dass:

- wir die Antwort als Text anstatt als JSON abrufen, indem wir die [`text()`](/de/docs/Web/API/Response/text)-Methode der Antwort aufrufen
- wir dann `parse()` verwenden, um den Text in ein JavaScript-Objekt zu konvertieren.

Das entscheidende Codebeispiel ist hier:

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

Hier erstellen wir ein JavaScript-Objekt, überprüfen, was es enthält, konvertieren es mit `stringify()` in einen JSON-String — speichern den Rückgabewert in einer neuen Variablen — und überprüfen es dann erneut.

## Testen Sie Ihre Fähigkeiten!

Sie haben das Ende dieses Artikels erreicht, aber können Sie sich die wichtigsten Informationen merken? Sie finden einige weitere Tests, um zu überprüfen, ob Sie diese Informationen behalten haben, bevor Sie weitermachen — siehe [Testen Sie Ihre Fähigkeiten: JSON](/de/docs/Learn_web_development/Core/Scripting/Test_your_skills:_JSON).

## Zusammenfassung

In dieser Lektion haben wir Sie in die Verwendung von JSON in Ihren Programmen eingeführt, einschließlich wie man JSON erstellt und parst und wie man auf die darin eingeschlossenen Daten zugreift. Im nächsten Artikel werden wir uns praktische Techniken zum Debuggen von JavaScript und zur Fehlerbehandlung ansehen.

## Siehe auch

- [JSON-Referenz](/de/docs/Web/JavaScript/Reference/Global_Objects/JSON)
- [Fetch-API-Übersicht](/de/docs/Web/API/Fetch_API)
- [Fetch verwenden](/de/docs/Web/API/Fetch_API/Using_Fetch)
- [HTTP-Anforderungsmethoden](/de/docs/Web/HTTP/Reference/Methods)

{{PreviousMenuNext("Learn_web_development/Core/Scripting/Network_requests","Learn_web_development/Core/Scripting/Debugging_JavaScript", "Learn_web_development/Core/Scripting")}}
