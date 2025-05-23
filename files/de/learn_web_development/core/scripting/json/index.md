---
title: Arbeiten mit JSON
short-title: JSON
slug: Learn_web_development/Core/Scripting/JSON
l10n:
  sourceCommit: 0915a5e602d475bd1a1a57d905f0bac1b7ed57b8
---

{{PreviousMenuNext("Learn_web_development/Core/Scripting/Network_requests","Learn_web_development/Core/Scripting/Debugging_JavaScript", "Learn_web_development/Core/Scripting")}}

JavaScript Object Notation (JSON) ist ein standardisiertes textbasiertes Format zur Darstellung von strukturierten Daten, basierend auf der JavaScript-Objektsyntax. Es wird häufig zum Übertragen von Daten in Webanwendungen verwendet (z.B. um einige Daten vom Server an den Client zu senden, damit sie auf einer Webseite angezeigt werden können, oder umgekehrt). Sie werden es oft begegnen, deshalb geben wir Ihnen in diesem Artikel alles, was Sie benötigen, um mit JSON in JavaScript zu arbeiten, einschließlich des Parsens von JSON, um auf die darin enthaltenen Daten zuzugreifen, und der Erstellung von JSON.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>Verständnis von <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a> und den <a href="/de/docs/Learn_web_development/Core/Styling_basics">Grundlagen von CSS</a>, Vertrautheit mit den JavaScript-Grundlagen, wie sie in früheren Lektionen behandelt wurden.</td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Was JSON ist — ein sehr häufig verwendetes Datenformat basierend auf der JavaScript-Objektsyntax.</li>
          <li>Dass JSON auch Arrays enthalten kann.</li>
          <li>Abrufen von JSON als JavaScript-Objekt unter Verwendung von Mechanismen, die in Web-APIs verfügbar sind (zum Beispiel <code>Response.json()</code> in der Fetch-API).</li>
          <li>Zugriff auf Werte innerhalb von JSON-Daten mit Klammer- und Punktnotation.</li>
          <li>Konvertieren zwischen Objekten und Text mit <code>JSON.parse()</code> und <code>JSON.stringify()</code>.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Nein, was ist JSON wirklich?

{{Glossary("JSON", "JSON")}} ist ein textbasiertes Datenformat, das der JavaScript-Objektsyntax folgt. Es stellt strukturierte Daten als Zeichenfolge dar, was nützlich ist, wenn Sie Daten über ein Netzwerk übertragen möchten. Obwohl es der JavaScript-Objektliteral-Syntax sehr ähnlich ist, kann es unabhängig von JavaScript verwendet werden. Viele Programmiersprachen bieten Funktionen zum Lesen (Parsen) und Erzeugen von JSON. In JavaScript werden die Methoden zum Parsen und Erzeugen von JSON vom [`JSON`](/de/docs/Web/JavaScript/Reference/Global_Objects/JSON)-Objekt bereitgestellt.

> [!NOTE]
> Das Umwandeln einer Zeichenkette in ein nativeres Objekt wird als _Deserialisierung_ bezeichnet, während das Umwandeln eines nativen Objekts in eine Zeichenkette, um es über das Netzwerk zu übertragen, als _Serialisierung_ bezeichnet wird.

Eine JSON-Zeichenfolge kann in einer eigenen Datei gespeichert werden, die im Grunde nur eine Textdatei mit einer `.json`-Erweiterung und einem {{Glossary("MIME_type", "MIME-Typ")}} von `application/json` ist.

### JSON-Struktur

Wie oben beschrieben, ist JSON eine Zeichenfolge, deren Format der JavaScript-Objektliteral-Format sehr ähnelt. Das folgende ist eine gültige JSON-Zeichenfolge, die ein Objekt darstellt. Beachten Sie, wie es auch ein gültiger JavaScript-Objektliteral ist - nur mit einigen zusätzlichen [Syntaxeinschränkungen](#json-syntaxeinschränkungen).

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

Wenn Sie dieses JSON in Ihrem JavaScript-Programm als Zeichenfolge laden, können Sie es in ein normales Objekt parsen und dann auf die darin enthaltenen Daten auf dieselbe Weise zugreifen, wie wir es im Artikel [JavaScript-Objekt-Grundlagen](/de/docs/Learn_web_development/Core/Scripting/Object_basics) angesehen haben. Zum Beispiel:

```js
superHeroes.homeTown;
superHeroes.members[1].powers[2];
```

1. Zuerst haben wir den Variablennamen — `superHeroes`.
2. Darin möchten wir auf die `members`-Eigenschaft zugreifen, also verwenden wir `.members`.
3. `members` enthält ein Array, das mit Objekten gefüllt ist. Wir möchten auf das zweite Objekt im Array zugreifen, also verwenden wir `[1]`.
4. In diesem Objekt möchten wir auf die `powers`-Eigenschaft zugreifen, also verwenden wir `.powers`.
5. In der `powers`-Eigenschaft befindet sich ein Array, das die Superkräfte des ausgewählten Helden enthält. Wir möchten das dritte Element, also verwenden wir `[2]`.

Das Wichtigste dabei ist, dass nichts Besonderes in Bezug auf die Arbeit mit JSON ist; nachdem Sie es in ein JavaScript-Objekt geparst haben, arbeiten Sie damit genauso wie mit einem Objekt, das mit derselben Objektliteral-Syntax deklariert wurde.

> [!NOTE]
> Wir haben das oben gezeigte JSON in einer Variablen in unserem [JSONTest.html](https://mdn.github.io/learning-area/javascript/oojs/json/JSONTest.html)-Beispiel verfügbar gemacht (siehe den [Quellcode](https://github.com/mdn/learning-area/blob/main/javascript/oojs/json/JSONTest.html)). Versuchen Sie, dies zu laden und dann über die JavaScript-Konsole Ihres Browsers auf die darin enthaltenen Daten zuzugreifen.

### Arrays als JSON

Oben haben wir erwähnt, dass JSON-Text im Wesentlichen wie ein JavaScript-Objekt innerhalb einer Zeichenkette aussieht. Wir können auch Arrays zu/von JSON konvertieren. Das untenstehende Beispiel ist perfekt gültiges JSON:

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

Sie müssen auf Array-Elemente (in seiner geparsten Version) zugreifen, indem Sie mit einem Array-Index beginnen, z.B. `superHeroes[0].powers[0]`.

Das JSON kann auch eine einzelne Primitive enthalten. Zum Beispiel sind `29`, `"Dan Jukes"` oder `true` alle gültige JSON.

### JSON-Syntaxeinschränkungen

Wie bereits erwähnt, ist jedes JSON ein gültiges JavaScript-Literal (Objekt, Array, Zahl, etc.). Das Gegenteil ist jedoch nicht der Fall - nicht alle JavaScript-Objektliterale sind gültiges JSON.

- JSON kann nur _serialisierbare_ Datentypen enthalten. Das bedeutet:
  - Für Primitive kann JSON Zeichenkettenliterale, Zahlenliterale, `true`, `false` und `null` enthalten. Bemerkenswerterweise kann es `undefined`, `NaN` oder `Infinity` nicht enthalten.
  - Für Nicht-Primitive kann JSON Objektliterale und Arrays enthalten, aber keine Funktionen oder andere Objekttypen, wie `Date`, `Set` und `Map`. Die Objekte und Arrays in JSON müssen weiter gültige JSON-Datentypen enthalten.
- Zeichenketten müssen in doppelten Anführungszeichen eingeschlossen sein, nicht in einfachen Anführungszeichen.
- Zahlen müssen in Dezimalschreibweise geschrieben werden.
- Jede Eigenschaft eines Objekts muss die Form `"key": value` haben. Eigenschaftsnamen müssen Zeichenkettenliterale in doppelten Anführungszeichen sein. Spezielle JavaScript-Syntaxen, wie Methoden, sind nicht erlaubt, weil Methoden Funktionen sind und Funktionen keine gültigen JSON-Datentypen sind.
- Objekte und Arrays dürfen keine [nachgestellten Kommata](/de/docs/Web/JavaScript/Reference/Trailing_commas) enthalten.
- Kommentare sind in JSON nicht erlaubt.

Selbst ein einzelnes fehlplatziertes Komma oder Doppelpunkt kann eine JSON-Datei ungültig machen und dazu führen, dass sie fehlschlägt. Sie sollten darauf achten, alle Daten, die Sie verwenden möchten, zu validieren (obwohl computergeneriertes JSON weniger wahrscheinlich Fehler enthält, solange das Generatorprogramm korrekt arbeitet). Sie können JSON mit einer Anwendung wie [JSONLint](https://jsonlint.com/) oder [JSON-validate](https://www.json-validate.com/) validieren.

> [!NOTE]
> Nachdem Sie diesen Abschnitt gelesen haben, möchten Sie Ihr Lernen möglicherweise mit Scrimbas [JSON-Review](https://scrimba.com/frontend-path-c0j/~0lt?via=mdn) <sup>[_MDN-Lernpartner_](/de/docs/MDN/Writing_guidelines/Learning_content#partner_links_and_embeds)</sup> interaktivem Tutorial ergänzen, das einige nützliche Anleitungen zur grundlegenden JSON-Syntax und zum Anzeigen von JSON-Anfragedaten in den Entwicklungswerkzeugen Ihres Browsers bietet.

## Aktives Lernen: Durcharbeiten eines JSON-Beispiels

Lassen Sie uns also ein Beispiel durchgehen, um zu zeigen, wie wir einige JSON-formatierte Daten auf einer Website nutzen könnten.

### Erste Schritte

Zuerst machen Sie lokale Kopien unserer [heroes.html](https://github.com/mdn/learning-area/blob/main/javascript/oojs/json/heroes.html) und [style.css](https://github.com/mdn/learning-area/blob/main/javascript/oojs/json/style.css) Dateien. Letztere enthält etwas einfaches CSS, um unsere Seite zu gestalten, während die erste ein sehr einfaches Body-HTML sowie ein {{HTMLElement("script")}} Element enthält, um den JavaScript-Code zu enthalten, den wir in dieser Übung schreiben werden:

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

Wir werden das JSON in unser Skript laden und einige raffinierte DOM-Manipulationen verwenden, um es anzuzeigen, wie folgt:

![Bild eines Dokuments mit dem Titel "Super hero squad" (in einer ausgefallenen Schriftart) und dem Untertitel "Hometown: Metro City // Formed: 2016". Drei Spalten unter der Überschrift tragen die Titel "Molecule Man", "Madame Uppercut" und "Eternal Flame". Jede Spalte listet den Namen des Geheimidentitätshelden, das Alter und die Superkräfte auf.](json-superheroes.png)

### Top-Level-Funktion

Die Top-Level-Funktion sieht folgendermaßen aus:

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

Um das JSON zu erhalten, verwenden wir eine API namens [Fetch](/de/docs/Web/API/Fetch_API). Diese API ermöglicht es uns, Netzwerkabfragen zu machen, um Ressourcen von einem Server über JavaScript abzurufen (z.B. Bilder, Text, JSON, sogar HTML-Schnipsel), was bedeutet, dass wir kleine Inhaltsabschnitte aktualisieren können, ohne die gesamte Seite neu laden zu müssen.

In unserer Funktion verwenden die ersten vier Zeilen die Fetch-API, um das JSON vom Server abzurufen:

- Wir deklarieren die Variable `requestURL`, um die GitHub-URL zu speichern.
- Wir verwenden die URL, um ein neues [`Request`](/de/docs/Web/API/Request)-Objekt zu initialisieren.
- Wir machen die Netzwerkabfrage mit der [`fetch()`](/de/docs/Web/API/Window/fetch)-Funktion, und dies gibt ein [`Response`](/de/docs/Web/API/Response)-Objekt zurück.
- Wir rufen die Antwort als JSON mit der [`json()`](/de/docs/Web/API/Response/json)-Funktion des `Response`-Objekts ab.

> [!NOTE]
> Die `fetch()`-API ist **asynchron**. Sie können mehr über asynchrone Funktionen in unserem [Asynchronous JavaScript Module](/de/docs/Learn_web_development/Extensions/Async_JS) erfahren, aber für jetzt sagen wir nur, dass wir das Schlüsselwort {{jsxref("Statements/async_function", "async")}} vor dem Namen der Funktion hinzufügen müssen, die die fetch-API verwendet, und das Schlüsselwort {{jsxref("Operators/await", "await")}} vor den Aufrufen von asynchronen Funktionen.

Nach all dem enthält die Variable `superHeroes` das JavaScript-Objekt, basierend auf dem JSON. Wir übergeben dieses Objekt dann an zwei Funktionsaufrufe - der erste füllt den `<header>` mit den richtigen Daten, während der zweite eine Informationskarte für jeden Helden im Team erstellt und sie in das `<section>` einfügt.

### Den Header ausfüllen

Jetzt, da wir die JSON-Daten abgerufen und in ein JavaScript-Objekt umgewandelt haben, lassen Sie uns sie nutzen, indem wir die beiden Funktionen schreiben, auf die wir oben verwiesen haben. Zuerst fügen Sie die folgende Funktionsdefinition unter dem vorherigen Code hinzu:

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

Hier erstellen wir zuerst ein {{HTMLElement("Heading_Elements", "h1")}} Element mit [`createElement()`](/de/docs/Web/API/Document/createElement), setzen dessen [`textContent`](/de/docs/Web/API/Node/textContent) auf den Wert der `squadName`-Eigenschaft des Objekts, und fügen es dem Header mit [`appendChild()`](/de/docs/Web/API/Node/appendChild) hinzu. Dann machen wir eine sehr ähnliche Operation mit einem Absatz: erstellen, den Textinhalt setzen und ihn dem Header hinzufügen. Der einzige Unterschied ist, dass sein Text auf ein [Template Literal](/de/docs/Web/JavaScript/Reference/Template_literals) gesetzt wird, das sowohl die Eigenschaften `homeTown` als auch `formed` des Objekts enthält.

### Die Informationen zu den Heldenkarten erstellen

Als Nächstes fügen Sie die folgende Funktion am Ende des Codes hinzu, die die Superheldenkarten erstellt und anzeigt:

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

Dann verwenden wir eine [for...of Schleife](/de/docs/Learn_web_development/Core/Scripting/Loops#the_for...of_loop), um durch jedes Objekt im Array zu iterieren. Für jedes erstellen wir:

1. Mehrere neue Elemente: ein `<article>`, ein `<h2>`, drei `<p>`s und eine `<ul>`.
2. Setzen das `<h2>`, um den `name` des aktuellen Helden zu enthalten.
3. Füllen die drei Absätze mit ihrem `secretIdentity`, `age`, und einer Zeile, die "Superkräfte:" sagt, um die Informationen in der Liste einzuführen.
4. Speichern die `powers`-Eigenschaft in einer weiteren neuen Konstante namens `superPowers` — dies enthält ein Array, das die Superkräfte des aktuellen Helden auflistet.
5. Verwenden eine weitere `for...of` Schleife, um durch die Superkräfte des aktuellen Helden zu iterieren — für jede erstellen wir ein `<li>`-Element, setzen die Superkraft darin, und fügen dann das `listItem` dem `<ul>`-Element (`myList`) mit `appendChild()` hinzu.
6. Das Allerletzte, was wir tun, ist, das `<h2>`, die `<p>`s und die `<ul>` in das `<article>` (`myArticle`) einzufügen und das `<article>` in die `<section>` einzufügen. Die Reihenfolge, in der Dinge eingefügt werden, ist wichtig, da dies die Reihenfolge ist, in der sie im HTML angezeigt werden.

> [!NOTE]
> Wenn Sie Schwierigkeiten haben, das Beispiel zum Laufen zu bringen, versuchen Sie, sich unseren [heroes-finished.html](https://github.com/mdn/learning-area/blob/main/javascript/oojs/json/heroes-finished.html) Quellcode anzusehen (siehe es auch [live ausführen](https://mdn.github.io/learning-area/javascript/oojs/json/heroes-finished.html)).

> [!NOTE]
> Wenn Sie Schwierigkeiten haben, der Punkt-/Klammernotation zu folgen, die wir verwenden, um auf das JavaScript-Objekt zuzugreifen, kann es hilfreich sein, die Datei [superheroes.json](https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json) in einem anderen Tab oder Ihrem Texteditor geöffnet zu haben und sich darauf zu beziehen, während Sie unseren JavaScript-Code ansehen. Sie sollten auch zu unserem Artikel [JavaScript-Objekt-Grundlagen](/de/docs/Learn_web_development/Core/Scripting/Object_basics) zurückkehren, um mehr Informationen über Punkt- und Klammernotation zu erhalten.

### Aufrufen der Top-Level-Funktion

Schließlich müssen wir unsere Top-Level-`populate()`-Funktion aufrufen:

```js
populate();
```

## Konvertieren zwischen Objekten und Text

Das obige Beispiel war in Bezug auf den Zugriff auf das JavaScript-Objekt einfach, weil wir die Netzwerkantwort direkt in ein JavaScript-Objekt mit `response.json()` konvertiert haben.

Aber manchmal haben wir nicht so viel Glück - manchmal erhalten wir eine rohe JSON-Zeichenfolge, und wir müssen sie selbst in ein Objekt konvertieren. Und wenn wir ein JavaScript-Objekt über das Netzwerk senden möchten, müssen wir es vor dem Senden in JSON (eine Zeichenfolge) konvertieren. Glücklicherweise sind diese beiden Probleme im Web-Entwicklungsbereich so häufig, dass ein eingebautes [JSON](/de/docs/Web/JavaScript/Reference/Global_Objects/JSON)-Objekt in Browsern verfügbar ist, das die folgenden zwei Methoden enthält:

- [`parse()`](/de/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse): Akzeptiert eine JSON-Zeichenfolge als Parameter und gibt das entsprechende JavaScript-Objekt zurück.
- [`stringify()`](/de/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify): Akzeptiert ein Objekt als Parameter und gibt die entsprechende JSON-Zeichenfolge zurück.

Sie können die erste in unserem [heroes-finished-json-parse.html](https://mdn.github.io/learning-area/javascript/oojs/json/heroes-finished-json-parse.html)-Beispiel (siehe den [Quellcode](https://github.com/mdn/learning-area/blob/main/javascript/oojs/json/heroes-finished-json-parse.html)) im Einsatz sehen - dies macht genau das gleiche wie das Beispiel, das wir zuvor aufgebaut haben, nur dass:

- Wir die Antwort als Text anstelle von JSON abrufen, indem wir die [`text()`](/de/docs/Web/API/Response/text)-Methode der Antwort aufrufen
- Wir dann `parse()` verwenden, um den Text in ein JavaScript-Objekt zu konvertieren.

Der wichtige Codeausschnitt ist hier:

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

Wie Sie sich denken können, funktioniert `stringify()` umgekehrt. Versuchen Sie, die folgenden Zeilen nacheinander in die JavaScript-Konsole Ihres Browsers einzugeben, um es in Aktion zu sehen:

```js
let myObj = { name: "Chris", age: 38 };
myObj;
let myString = JSON.stringify(myObj);
myString;
```

Hier erstellen wir ein JavaScript-Objekt, prüfen, was es enthält, konvertieren es dann mit `stringify()` in eine JSON-Zeichenfolge, speichern den Rückgabewert in einer neuen Variablen, und prüfen es dann erneut.

## Testen Sie Ihre Fähigkeiten!

Sie haben das Ende dieses Artikels erreicht, aber können Sie sich an die wichtigsten Informationen erinnern? Sie können einige weitere Tests finden, um zu überprüfen, ob Sie diese Informationen behalten haben, bevor Sie fortfahren — siehe [Testen Sie Ihre Fähigkeiten: JSON](/de/docs/Learn_web_development/Core/Scripting/Test_your_skills/JSON).

## Zusammenfassung

In dieser Lektion haben wir Ihnen vorgestellt, wie Sie JSON in Ihren Programmen verwenden können, einschließlich der Erstellung und des Parsens von JSON und des Zugriffs auf die darin eingeschlossenen Daten. Im nächsten Artikel werden wir uns praktische Techniken zur Fehlerbehebung in JavaScript und zum Umgang mit Fehlern ansehen.

## Siehe auch

- [JSON-Referenz](/de/docs/Web/JavaScript/Reference/Global_Objects/JSON)
- [Überblick über die Fetch API](/de/docs/Web/API/Fetch_API)
- [Verwenden der Fetch API](/de/docs/Web/API/Fetch_API/Using_Fetch)
- [HTTP-Anfragemethoden](/de/docs/Web/HTTP/Reference/Methods)

{{PreviousMenuNext("Learn_web_development/Core/Scripting/Network_requests","Learn_web_development/Core/Scripting/Debugging_JavaScript", "Learn_web_development/Core/Scripting")}}
