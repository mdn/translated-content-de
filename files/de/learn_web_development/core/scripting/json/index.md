---
title: Arbeiten mit JSON
short-title: JSON
slug: Learn_web_development/Core/Scripting/JSON
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{LearnSidebar}}

{{PreviousMenuNext("Learn_web_development/Core/Scripting/Network_requests","Learn_web_development/Core/Scripting/Debugging_JavaScript", "Learn_web_development/Core/Scripting")}}

JavaScript Object Notation (JSON) ist ein standardisiertes, textbasiertes Format zur Darstellung strukturierter Daten, das auf der JavaScript-Objektsyntax basiert. Es wird häufig zum Übertragen von Daten in Webanwendungen verwendet (z.B. wenn Daten vom Server an den Client gesendet werden, damit sie auf einer Webseite angezeigt werden können, oder umgekehrt). Sie werden darauf häufig stoßen, daher geben wir Ihnen in diesem Artikel alles, was Sie benötigen, um mit JSON in JavaScript zu arbeiten, einschließlich des Parsens von JSON, damit Sie auf die darin enthaltenen Daten zugreifen können, und der Erstellung von JSON.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>Ein Verständnis von <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a> und den <a href="/de/docs/Learn_web_development/Core/Styling_basics">Grundlagen von CSS</a>, sowie Vertrautheit mit den JavaScript-Grundlagen, die in den vorherigen Lektionen behandelt wurden.</td>
    </tr>
    <tr>
      <th scope="row">Lernergebnisse:</th>
      <td>
        <ul>
          <li>Was JSON ist – ein sehr häufig verwendetes Datenformat basierend auf der JavaScript-Objektsyntax.</li>
          <li>Dass JSON auch Arrays enthalten kann.</li>
          <li>JSON als JavaScript-Objekt mit in Web-APIs verfügbaren Mechanismen abrufen (z.B. <code>Response.json()</code> in der Fetch API).</li>
          <li>Werte innerhalb von JSON-Daten mit Punkt- und Klammernotation abrufen.</li>
          <li>Konvertieren zwischen Objekten und Text mit <code>JSON.parse()</code> und <code>JSON.stringify()</code>.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Nein, wirklich, was ist JSON?

{{Glossary("JSON", "JSON")}} ist ein textbasiertes Datenformat, das der JavaScript-Objektsyntax folgt.
Es stellt strukturierte Daten als Zeichenfolge dar, was nützlich ist, wenn Sie Daten über ein Netzwerk übertragen möchten.
Obwohl es der JavaScript-Objektliteral-Syntax sehr ähnlich sieht, kann es unabhängig von JavaScript verwendet werden. Viele Programmierumgebungen können JSON lesen (parsen) und generieren.
In JavaScript werden die Methoden zum Parsen und Generieren von JSON durch das [`JSON`](/de/docs/Web/JavaScript/Reference/Global_Objects/JSON)-Objekt bereitgestellt.

> [!NOTE]
> Die Umwandlung einer Zeichenfolge in ein natives Objekt wird _Deserialisierung_ genannt, während die Umwandlung eines nativen Objekts in eine Zeichenfolge, um es über das Netzwerk zu übertragen, _Serialisierung_ genannt wird.

Eine JSON-Zeichenfolge kann in einer eigenen Datei gespeichert werden, die im Grunde nur eine Textdatei mit der Erweiterung `.json` und einem {{Glossary("MIME_type", "MIME-Typ")}} von `application/json` ist.

### JSON-Struktur

Wie oben beschrieben ist JSON eine Zeichenfolge, deren Format dem JavaScript-Objektliteralformat stark ähnelt.
Folgendes ist eine gültige JSON-Zeichenfolge, die ein Objekt darstellt.
Beachten Sie, wie es auch ein gültiges JavaScript-Objektliteral ist – nur mit einigen weiteren [Syntaxbeschränkungen](#json-syntaxbeschränkungen).

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

Wenn Sie dieses JSON in Ihrem JavaScript-Programm als Zeichenfolge laden, können Sie es in ein normales Objekt parsen und dann auf die darin enthaltenen Daten mit der gleichen Punkt-/Klammernotation zugreifen, die wir im Artikel [JavaScript-Objektgrundlagen](/de/docs/Learn_web_development/Core/Scripting/Object_basics) behandelt haben.
Zum Beispiel:

```js
superHeroes.homeTown;
superHeroes.members[1].powers[2];
```

1. Zuerst haben wir den Variablennamen — `superHeroes`.
2. Darin möchten wir auf die `members`-Eigenschaft zugreifen, also verwenden wir `.members`.
3. `members` enthält ein Array, das mit Objekten gefüllt ist. Wir möchten auf das zweite Objekt im Array zugreifen, also verwenden wir `[1]`.
4. In diesem Objekt möchten wir auf die `powers`-Eigenschaft zugreifen, also verwenden wir `.powers`.
5. In der `powers`-Eigenschaft befindet sich ein Array, das die Superkräfte des ausgewählten Helden enthält. Wir möchten die dritte, also verwenden wir `[2]`.

Die Hauptaussage ist, dass an der Arbeit mit JSON wirklich nichts Besonderes ist; nachdem Sie es in ein JavaScript-Objekt geparst haben, arbeiten Sie damit, wie Sie es mit einem Objekt tun würden, das mit derselben Objektliteralsyntax deklariert wurde.

> [!NOTE]
> Wir haben das oben gezeigte JSON in einer Variablen in unserem [JSONTest.html](https://mdn.github.io/learning-area/javascript/oojs/json/JSONTest.html)-Beispiel verfügbar gemacht (siehe den [Quellcode](https://github.com/mdn/learning-area/blob/main/javascript/oojs/json/JSONTest.html)).
> Versuchen Sie, dies zu laden und dann über die JavaScript-Konsole Ihres Browsers auf die Daten innerhalb der Variablen zuzugreifen.

### Arrays als JSON

Oben haben wir erwähnt, dass JSON-Text im Grunde wie ein JavaScript-Objekt innerhalb einer Zeichenkette aussieht.
Wir können auch Arrays in/aus JSON konvertieren. Das folgende Beispiel ist vollkommen gültiges JSON:

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

Das JSON kann auch ein einzelnes einfaches Element enthalten. Zum Beispiel sind `29`, `"Dan Jukes"` oder `true` alle gültige JSON-Werte.

### JSON-Syntaxbeschränkungen

Wie bereits erwähnt, ist jedes JSON ein gültiges JavaScript-Literal (Objekt, Array, Zahl, etc.). Das Umgekehrte gilt jedoch nicht – nicht alle JavaScript-Objektliterale sind gültiges JSON.

- JSON kann nur _serialisierbare_ Datentypen enthalten. Das bedeutet:
  - Für primitive Daten kann JSON Zeichenfolgenliterale, Zahlenliterale, `true`, `false` und `null` enthalten. Bemerkenswerterweise kann es `undefined`, `NaN` oder `Infinity` nicht enthalten.
  - Für nicht-primitive Daten kann JSON Objektliterale und Arrays enthalten, aber keine Funktionen oder andere Objekttypen wie `Date`, `Set` und `Map`. Die Objekte und Arrays in JSON müssen weiterhin gültige JSON-Datentypen enthalten.
- Zeichenfolgen müssen in doppelte Anführungszeichen eingeschlossen werden, nicht in einfache.
- Zahlen müssen in Dezimalschreibweise geschrieben werden.
- Jede Eigenschaft eines Objekts muss in der Form `"Schlüssel": Wert` vorliegen. Eigenschaftsnamen müssen Zeichenfolgenliterale sein, die in doppelte Anführungszeichen eingeschlossen sind. Spezielle JavaScript-Syntax, wie Methoden, ist nicht zulässig, da Methoden Funktionen sind und Funktionen keine gültigen JSON-Datentypen sind.
- Objekte und Arrays dürfen keine [Abschlusskommas](/de/docs/Web/JavaScript/Reference/Trailing_commas) enthalten.
- Kommentare sind in JSON nicht erlaubt.

Schon ein einziges fehlplatziertes Komma oder Doppelpunkt kann eine JSON-Datei ungültig machen und dazu führen, dass sie fehlschlägt.
Sie sollten darauf achten, alle Daten zu validieren, die Sie verwenden möchten (obwohl computergeneriertes JSON weniger wahrscheinlich Fehler enthält, solange das Generatorprogramm korrekt funktioniert).
Sie können JSON mit einer Anwendung wie [JSONLint](https://jsonlint.com/) validieren.

## Aktives Lernen: Durch ein JSON-Beispiel arbeiten

Also, lassen Sie uns ein Beispiel durchgehen, um zu zeigen, wie wir einige JSON-formatierte Daten auf einer Website nutzen könnten.

### Erste Schritte

Zu Beginn erstellen Sie lokale Kopien unserer [heroes.html](https://github.com/mdn/learning-area/blob/main/javascript/oojs/json/heroes.html) und [style.css](https://github.com/mdn/learning-area/blob/main/javascript/oojs/json/style.css) Dateien.
Letztere enthält etwas einfaches CSS, um unsere Seite zu gestalten, während erstere ein sehr einfaches Body-HTML enthält, plus ein {{HTMLElement("script")}}-Element, um den JavaScript-Code zu enthalten, den wir in dieser Übung schreiben werden:

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

Wir werden das JSON in unser Skript laden und einige nette DOM-Manipulationen verwenden, um es anzuzeigen, wie auf diesem Bild:

![Bild eines Dokuments mit dem Titel "Super hero squad" (in einer schicken Schriftart) und dem Untertitel "Hometown: Metro City // Formed: 2016". Drei Spalten unter der Überschrift sind mit "Molecule Man", "Madame Uppercut" und "Eternal Flame" betitelt. Jede Spalte listet den geheimen Identitätsnamen, das Alter und die Superkräfte des Helden auf.](json-superheroes.png)

### Oberste Funktion

Die oberste Funktion sieht so aus:

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
Diese API ermöglicht es uns, Netzwerk-Anfragen zu stellen, um Ressourcen von einem Server über JavaScript abzurufen (z.B. Bilder, Text, JSON, sogar HTML-Schnipsel), was bedeutet, dass wir kleine Inhaltsabschnitte aktualisieren können, ohne die gesamte Seite neu laden zu müssen.

In unserer Funktion verwenden die ersten vier Zeilen die Fetch API, um das JSON vom Server abzurufen:

- Wir deklarieren die Variable `requestURL`, um die GitHub-URL zu speichern
- Wir verwenden die URL, um ein neues [`Request`](/de/docs/Web/API/Request)-Objekt zu initialisieren.
- Wir führen die Netzwerk-Anfrage mit der [`fetch()`](/de/docs/Web/API/Window/fetch)-Funktion durch, und dies gibt ein [`Response`](/de/docs/Web/API/Response)-Objekt zurück
- Wir rufen die Antwort als JSON mit der [`json()`](/de/docs/Web/API/Response/json)-Funktion des Response-Objekts ab.

> [!NOTE]
> Die `fetch()`-API ist **asynchron**. Sie können mehr über asynchrone Funktionen in unserem [Asynchrone JavaScript-Modul](/de/docs/Learn_web_development/Extensions/Async_JS) erfahren, aber für jetzt sagen wir einfach, dass wir das Schlüsselwort {{jsxref("Statements/async_function", "async")}} vor den Namen der Funktion, die die Fetch-API verwendet, und das Schlüsselwort {{jsxref("Operators/await", "await")}} vor die Aufrufe zu allen asynchronen Funktionen hinzufügen müssen.

Nach all dem wird die Variable `superHeroes` das JavaScript-Objekt basierend auf dem JSON enthalten. Wir übergeben dann dieses Objekt an zwei Funktionsaufrufe — der erste füllt das `<header>` mit den richtigen Daten, während der zweite eine Informationskarte für jeden Helden im Team erstellt und sie in den `<section>` einfügt.

### Das Header füllen

Nachdem wir die JSON-Daten abgerufen und in ein JavaScript-Objekt umgewandelt haben, lassen Sie uns sie nutzen, indem wir die zwei Funktionen schreiben, die wir zuvor referenziert haben. Zuerst fügen Sie die folgende Funktionsdefinition unter dem vorherigen Code hinzu:

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

Hier erstellen wir zuerst ein {{HTMLElement("Heading_Elements", "h1")}}-Element mit [`createElement()`](/de/docs/Web/API/Document/createElement), setzen dessen [`textContent`](/de/docs/Web/API/Node/textContent) auf den `squadName`-Eigenschaft des Objekts, und hängen es dann mit [`appendChild()`](/de/docs/Web/API/Node/appendChild) an das Header an. Dann führen wir eine sehr ähnliche Operation mit einem Absatz durch: erstellen, Textinhalt setzen und an das Header anhängen. Der einzige Unterschied besteht darin, dass der Text auf ein [Template Literal](/de/docs/Web/JavaScript/Reference/Template_literals) gesetzt wird, das sowohl die `homeTown` als auch die `formed`-Eigenschaften des Objekts enthält.

### Die Helden-Informationskarten erstellen

Als nächstes fügen Sie die folgende Funktion am Ende des Codes hinzu, die die Superheldenkarten erstellt und anzeigt:

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

Zuerst speichern wir die `members`-Eigenschaft des JavaScript-Objekts in einer neuen Variable. Dieses Array enthält mehrere Objekte, die die Informationen für jeden Helden enthalten.

Als nächstes verwenden wir eine [for...of-Schleife](/de/docs/Learn_web_development/Core/Scripting/Loops#the_for...of_loop), um durch jedes Objekt im Array zu iterieren. Für jedes erstellen wir:

1. Mehrere neue Elemente: ein `<article>`, ein `<h2>`, drei `<p>` und ein `<ul>`.
2. Setzen das `<h2>` auf den `name` des aktuellen Helden.
3. Füllen die drei Absätze mit ihrer `secretIdentity`, `age`, und einer Zeile "Superpowers:", um die Informationen in der Liste einzuleiten.
4. Speichern die `powers`-Eigenschaft in einer weiteren neuen Konstante namens `superPowers` — diese enthält ein Array, das die aktuellen Helden-Superkräfte auflistet.
5. Verwenden eine weitere `for...of`-Schleife, um durch die aktuellen Helden-Superkräfte zu iterieren — für jede von ihnen erstellen wir ein `<li>`-Element, setzen die Superkraft darin, und fügen dann das `listItem` in das `<ul>`-Element (`myList`) mit `appendChild()` ein.
6. Das allerletzte, was wir tun, ist `<h2>`, `<p>`s, und `<ul>` in das `<article>` (`myArticle`) einzufügen und dann das `<article>` in das `<section>` einzufügen. Die Reihenfolge, in der die Dinge eingefügt werden, ist wichtig, da dies die Reihenfolge ist, in der sie im HTML angezeigt werden.

> [!NOTE]
> Wenn Sie Probleme haben, das Beispiel zum Laufen zu bringen, versuchen Sie, sich unseren [heroes-finished.html](https://github.com/mdn/learning-area/blob/main/javascript/oojs/json/heroes-finished.html) Quellcode anzusehen (sehen Sie auch das [live running](https://mdn.github.io/learning-area/javascript/oojs/json/heroes-finished.html).)

> [!NOTE]
> Wenn Sie Schwierigkeiten haben, der von uns verwendeten Punkt-/Klammernotation zu folgen, um auf das JavaScript-Objekt zuzugreifen, kann es hilfreich sein, die [superheroes.json](https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json) Datei in einem anderen Tab oder in Ihrem Texteditor geöffnet zu haben und auf diese zu verweisen, während Sie sich unseren JavaScript-Code ansehen.
> Sie sollten auch auf unseren Artikel über die [JavaScript-Objektgrundlagen](/de/docs/Learn_web_development/Core/Scripting/Object_basics) zurückgreifen, um mehr Informationen über Punkt- und Klammernotation zu erhalten.

### Die oberste Funktion aufrufen

Zum Schluss müssen wir unsere oberste `populate()`-Funktion aufrufen:

```js
populate();
```

## Konvertieren zwischen Objekten und Text

Das obige Beispiel war einfach in Bezug auf den Zugriff auf das JavaScript-Objekt, da wir die Netzwerkantwort direkt in ein JavaScript-Objekt mit `response.json()` umwandelten.

Aber manchmal haben wir nicht so viel Glück — manchmal erhalten wir eine rohe JSON-Zeichenfolge, und wir müssen diese selbst in ein Objekt umwandeln. Und wenn wir ein JavaScript-Objekt über das Netzwerk senden möchten, müssen wir es in JSON (eine Zeichenfolge) umwandeln, bevor wir es senden. Glücklicherweise sind diese beiden Probleme so häufig in der Webentwicklung, dass ein integriertes [JSON](/de/docs/Web/JavaScript/Reference/Global_Objects/JSON)-Objekt in Browsern verfügbar ist, das die folgenden zwei Methoden enthält:

- [`parse()`](/de/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse): Akzeptiert eine JSON-Zeichenfolge als Parameter und gibt das entsprechende JavaScript-Objekt zurück.
- [`stringify()`](/de/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify): Akzeptiert ein Objekt als Parameter und gibt die äquivalente JSON-Zeichenfolge zurück.

Sie können das erste in Aktion in unserem [heroes-finished-json-parse.html](https://mdn.github.io/learning-area/javascript/oojs/json/heroes-finished-json-parse.html) Beispiel (siehe den [Quellcode](https://github.com/mdn/learning-area/blob/main/javascript/oojs/json/heroes-finished-json-parse.html)) sehen — dies macht exakt dasselbe wie das Beispiel, das wir zuvor erstellt haben, außer dass:

- wir die Antwort als Text statt JSON abrufen, indem wir die [`text()`](/de/docs/Web/API/Response/text) Methode der Antwort aufrufen
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

Wie Sie sich vorstellen können, funktioniert `stringify()` umgekehrt. Versuchen Sie, die folgenden Zeilen einzeln in Ihre JavaScript-Konsole des Browsers einzugeben, um es in Aktion zu sehen:

```js
let myObj = { name: "Chris", age: 38 };
myObj;
let myString = JSON.stringify(myObj);
myString;
```

Hier erstellen wir ein JavaScript-Objekt, überprüfen, was es enthält, konvertieren es dann mit `stringify()` in eine JSON-Zeichenfolge — speichern den Rückgabewert in einer neuen Variablen — und überprüfen es dann erneut.

## Testen Sie Ihr Wissen!

Sie haben das Ende dieses Artikels erreicht, aber können Sie sich die wichtigsten Informationen merken? Sie können einige weitere Tests finden, um zu überprüfen, ob Sie diese Informationen behalten haben, bevor Sie weitermachen — siehe [Testen Sie Ihr Wissen: JSON](/de/docs/Learn_web_development/Core/Scripting/Test_your_skills:_JSON).

## Zusammenfassung

In dieser Lektion haben wir Ihnen die Verwendung von JSON in Ihren Programmen vorgestellt, einschließlich der Erstellung und des Parsens von JSON und des Zugriffs auf darin enthaltene Daten. Im nächsten Artikel werden wir uns praktische Techniken zur Fehlerbehebung in JavaScript und zur Fehlerverarbeitung ansehen.

## Siehe auch

- [JSON-Referenz](/de/docs/Web/JavaScript/Reference/Global_Objects/JSON)
- [Übersicht zur Fetch API](/de/docs/Web/API/Fetch_API)
- [Fetch verwenden](/de/docs/Web/API/Fetch_API/Using_Fetch)
- [HTTP-Anforderungsmethoden](/de/docs/Web/HTTP/Reference/Methods)

{{PreviousMenuNext("Learn_web_development/Core/Scripting/Network_requests","Learn_web_development/Core/Scripting/Debugging_JavaScript", "Learn_web_development/Core/Scripting")}}
