---
title: Arbeiten mit JSON
short-title: JSON
slug: Learn_web_development/Core/Scripting/JSON
l10n:
  sourceCommit: 5fad0829b5070d04993a57af8c276f5e35da3ed2
---

{{LearnSidebar}}

{{PreviousMenuNext("Learn_web_development/Core/Scripting/Network_requests","Learn_web_development/Core/Scripting/Debugging_JavaScript", "Learn_web_development/Core/Scripting")}}

JavaScript Object Notation (JSON) ist ein standardisiertes textbasiertes Format zur Darstellung von strukturierten Daten basierend auf der JavaScript-Objektsyntax. Es wird häufig zur Übertragung von Daten in Webanwendungen verwendet (z. B. um Daten vom Server zum Client zu senden, damit sie auf einer Webseite angezeigt werden können, oder umgekehrt). Sie werden oft darauf stoßen, daher geben wir Ihnen in diesem Artikel alles, was Sie benötigen, um mit JSON in JavaScript zu arbeiten, einschließlich der Analyse von JSON, damit Sie auf die Daten darin zugreifen können, und der Erstellung von JSON.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>Ein Verständnis von <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a> und den <a href="/de/docs/Learn_web_development/Core/Styling_basics">Grundlagen von CSS</a>, Vertrautheit mit den Grundlagen von JavaScript, wie sie in früheren Lektionen behandelt wurden.</td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Was JSON ist — ein sehr häufig verwendetes Datenformat basierend auf der JavaScript-Objektsyntax.</li>
          <li>Dass JSON auch Arrays enthalten kann.</li>
          <li>Abrufen von JSON als JavaScript-Objekt mithilfe von Mechanismen in Web-APIs (zum Beispiel <code>Response.json()</code> in der Fetch API).</li>
          <li>Zugreifen auf Werte innerhalb von JSON-Daten mithilfe von Klammer- und Punktnotation.</li>
          <li>Konvertieren zwischen Objekten und Text mit <code>JSON.parse()</code> und <code>JSON.stringify()</code>.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Nein, wirklich, was ist JSON?

{{Glossary("JSON", "JSON")}} ist ein textbasiertes Datenformat, das der JavaScript-Objektsyntax folgt.
Es stellt strukturierte Daten als Zeichenfolge dar, was nützlich ist, wenn Sie Daten über ein Netzwerk übertragen möchten.
Obwohl es der JavaScript-Objektliteralsyntax sehr ähnlich sieht, kann es unabhängig von JavaScript verwendet werden. Viele Programmierumgebungen verfügen über die Möglichkeit, JSON zu lesen (zu parsen) und zu generieren.
In JavaScript werden die Methoden zum Parsen und Generieren von JSON vom [`JSON`](/de/docs/Web/JavaScript/Reference/Global_Objects/JSON)-Objekt bereitgestellt.

> [!NOTE]
> Das Umwandeln einer Zeichenfolge in ein nativen Objekt wird als _Deserialisierung_ bezeichnet, während die Umwandlung eines nativen Objekts in eine Zeichenfolge, damit es über das Netzwerk übertragen werden kann, als _Serialisierung_ bezeichnet wird.

Eine JSON-Zeichenfolge kann in einer eigenen Datei gespeichert werden, die im Grunde nur eine Textdatei mit der Endung `.json` und einem {{Glossary("MIME_type", "MIME-Typ")}} von `application/json` ist.

### JSON-Struktur

Wie oben beschrieben, ist JSON eine Zeichenfolge, deren Format der JavaScript-Objektliteralsyntax sehr ähnlich ist.
Die folgende ist eine gültige JSON-Zeichenfolge, die ein Objekt darstellt.
Beachten Sie, wie es auch ein gültiges JavaScript-Objektliteral ist — nur mit einigen [Syntaxeinschränkungen](#json-syntaxeinschränkungen).

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

Wenn Sie dieses JSON in Ihr JavaScript-Programm als Zeichenfolge laden, können Sie es in ein normales Objekt parsen und dann auf die darin enthaltenen Daten zugreifen, indem Sie die gleiche Punkt-/Klammernotation verwenden, die wir im Artikel [JavaScript-Objektgrundlagen](/de/docs/Learn_web_development/Core/Scripting/Object_basics) behandelt haben.
Zum Beispiel:

```js
superHeroes.homeTown;
superHeroes.members[1].powers[2];
```

1. Zuerst haben wir den Variablennamen — `superHeroes`.
2. Darin wollen wir auf die Eigenschaft `members` zugreifen, also verwenden wir `.members`.
3. `members` enthält ein Array, das mit Objekten gefüllt ist. Wir möchten auf das zweite Objekt im Array zugreifen, also verwenden wir `[1]`.
4. In diesem Objekt möchten wir auf die Eigenschaft `powers` zugreifen, also verwenden wir `.powers`.
5. In der Eigenschaft `powers` befindet sich ein Array, das die Superkräfte des ausgewählten Helden enthält. Wir möchten die dritte davon, also verwenden wir `[2]`.

Der Hauptpunkt ist, dass es wirklich nichts Besonderes im Umgang mit JSON gibt; nachdem Sie es in ein JavaScript-Objekt geparst haben, arbeiten Sie damit genauso, wie Sie es mit einem Objekt tun würden, das mithilfe derselben Objektliteralsyntax deklariert wurde.

> [!NOTE]
> Wir haben das oben gesehene JSON in einer Variablen in unserem [JSONTest.html](https://mdn.github.io/learning-area/javascript/oojs/json/JSONTest.html)-Beispiel verfügbar gemacht (siehe den [Quellcode](https://github.com/mdn/learning-area/blob/main/javascript/oojs/json/JSONTest.html)).
> Versuchen Sie, dies zu laden und dann über die JavaScript-Konsole Ihres Browsers auf Daten innerhalb der Variablen zuzugreifen.

### Arrays als JSON

Oben haben wir erwähnt, dass JSON-Text im Grunde wie ein JavaScript-Objekt innerhalb einer Zeichenfolge aussieht.
Wir können auch Arrays von/nach JSON konvertieren. Das folgende Beispiel ist ein vollkommen gültiges JSON:

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

Das JSON kann auch eine einzelne Primitivwert enthalten. Zum Beispiel sind `29`, `"Dan Jukes"` oder `true` alle gültige JSON.

### JSON-Syntaxeinschränkungen

Wie bereits erwähnt, ist jedes JSON ein gültiges JavaScript-Literal (Objekt, Array, Zahl usw.). Umgekehrt ist dies jedoch nicht der Fall — nicht alle JavaScript-Objektliterale sind gültiges JSON.

- JSON kann nur _serialisierbare_ Datentypen enthalten. Dies bedeutet:
  - Für Primitive kann JSON Zeichenfolgenliterale, Zahlenliterale, `true`, `false` und `null` enthalten. Bemerkenswert ist, dass es `undefined`, `NaN` oder `Infinity` nicht enthalten kann.
  - Für Nicht-Primitive kann JSON Objektliterale und Arrays enthalten, jedoch keine Funktionen oder andere Objekttypen wie `Date`, `Set` und `Map`. Die Objekte und Arrays innerhalb von JSON müssen weiterhin gültige JSON-Datentypen enthalten.
- Zeichenfolgen müssen in doppelte Anführungszeichen gesetzt werden, nicht in einfache.
- Zahlen müssen in Dezimalnotation geschrieben werden.
- Jede Eigenschaft eines Objekts muss in der Form `"key": value` vorliegen. Eigenschaftsnamen müssen Zeichenfolgenliterale sein, die in doppelten Anführungszeichen eingeschlossen sind. Spezielle JavaScript-Syntax, wie Methoden, ist nicht erlaubt, da Methoden Funktionen sind und Funktionen keine gültigen JSON-Datentypen sind.
- Objekte und Arrays dürfen keine [nachgestellten Kommata](/de/docs/Web/JavaScript/Reference/Trailing_commas) enthalten.
- Kommentare sind in JSON nicht erlaubt.

Selbst ein einziges fehlplatziertes Komma oder Doppelpunkt kann eine JSON-Datei ungültig machen und dazu führen, dass sie fehlschlägt.
Sie sollten darauf achten, alle Daten zu validieren, die Sie verwenden möchten (obwohl computererzeugtes JSON weniger wahrscheinlich Fehler enthält, solange das Erzeugerprogramm korrekt funktioniert).
Sie können JSON mit einer Anwendung wie [JSONLint](https://jsonlint.com/) oder [JSON-validate](https://json-validate.com) validieren.

## Aktives Lernen: Durcharbeiten eines JSON-Beispiels

Lassen Sie uns ein Beispiel durchgehen, um zu zeigen, wie wir einige JSON-formatierte Daten auf einer Website nutzen könnten.

### Erste Schritte

Zu Beginn erstellen Sie lokale Kopien unserer [heroes.html](https://github.com/mdn/learning-area/blob/main/javascript/oojs/json/heroes.html)- und [style.css](https://github.com/mdn/learning-area/blob/main/javascript/oojs/json/style.css)-Dateien.
Letztere enthält etwas einfaches CSS, um unsere Seite zu gestalten, während die erste sehr einfaches Body-HTML enthält, plus ein {{HTMLElement("script")}}-Element, um den JavaScript-Code zu enthalten, den wir in dieser Übung schreiben werden:

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

![Bild eines Dokuments mit dem Titel „Super hero squad” (in einer schicken Schriftart) und dem Untertitel „Hometown: Metro City // Formed: 2016”. Drei Spalten unter der Überschrift sind mit „Molecule Man”, „Madame Uppercut” und „Eternal Flame” betitelt. Jede Spalte listet den geheimen Identitätsnamen, das Alter und die Superkräfte des Helden auf.](json-superheroes.png)

### Funktion auf höchster Ebene

Die Funktion auf höchster Ebene sieht folgendermaßen aus:

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
Diese API ermöglicht es uns, Netzwerkanforderungen zu erstellen, um Ressourcen von einem Server über JavaScript abzurufen (z. B. Bilder, Text, JSON oder sogar HTML-Snippets), was bedeutet, dass wir kleine Inhaltsabschnitte aktualisieren können, ohne die gesamte Seite neu laden zu müssen.

In unserer Funktion verwenden die ersten vier Zeilen die Fetch API, um das JSON vom Server abzurufen:

- Wir deklarieren die Variable `requestURL`, um die GitHub-URL zu speichern.
- Wir verwenden die URL, um ein neues [`Request`](/de/docs/Web/API/Request)-Objekt zu initialisieren.
- Wir machen die Netzwerkanfrage mit der [`fetch()`](/de/docs/Web/API/Window/fetch)-Funktion, und dies liefert ein [`Response`](/de/docs/Web/API/Response)-Objekt zurück.
- Wir holen die Antwort als JSON mit der [`json()`](/de/docs/Web/API/Response/json)-Funktion des `Response`-Objekts.

> [!NOTE]
> Die `fetch()`-API ist **asynchron**. Sie können sich in unserem [Asynchronous JavaScript module](/de/docs/Learn_web_development/Extensions/Async_JS) ausführlich über asynchrone Funktionen informieren, aber für den Moment sagen wir einfach, dass wir das Schlüsselwort {{jsxref("Statements/async_function", "async")}} vor den Namen der Funktion, die die fetch API nutzt, setzen müssen und das Schlüsselwort {{jsxref("Operators/await", "await")}} vor die Aufrufe aller asynchronen Funktionen setzen müssen.

Nach all dem enthält die Variable `superHeroes` das JavaScript-Objekt basierend auf dem JSON. Wir übergeben dieses Objekt dann an zwei Funktionsaufrufe — der erste füllt das `<header>` mit den richtigen Daten, während der zweite eine Informationskarte für jeden Helden im Team erstellt und sie in das `<section>` einfügt.

### Auffüllen des Headers

Jetzt, da wir die JSON-Daten abgerufen und in ein JavaScript-Objekt konvertiert haben, nutzen wir es, indem wir die beiden Funktionen schreiben, auf die wir oben verwiesen haben. Fügen Sie zunächst die folgende Funktionsdefinition unter dem vorherigen Code hinzu:

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

Hier erstellen wir zuerst ein {{HTMLElement("Heading_Elements", "h1")}}-Element mit [`createElement()`](/de/docs/Web/API/Document/createElement), setzen seine [`textContent`](/de/docs/Web/API/Node/textContent) auf den Wert der Eigenschaft `squadName` des Objekts und hängen es dann mit [`appendChild()`](/de/docs/Web/API/Node/appendChild) an den Header an. Danach tun wir eine sehr ähnliche Operation mit einem Absatz: erstellen, Textinhalt setzen und an den Header anfügen. Der einzige Unterschied besteht darin, dass sein Text auf ein [Template Literal](/de/docs/Web/JavaScript/Reference/Template_literals) gesetzt wird, das sowohl die `homeTown`- als auch die `formed`-Eigenschaften des Objekts enthält.

### Erstellung der Helden-Informationskarten

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

Zuerst speichern wir die `members`-Eigenschaft des JavaScript-Objekts in einer neuen Variable. Dieses Array enthält mehrere Objekte, die die Informationen für jeden Helden enthalten.

Anschließend verwenden wir eine [for...of-Schleife](/de/docs/Learn_web_development/Core/Scripting/Loops#the_for...of_loop), um durch jedes Objekt im Array zu schleifen. Für jede davon:

1. Erstellen wir mehrere neue Elemente: ein `<article>`, ein `<h2>`, drei `<p>`s und eine `<ul>`.
2. Setzen wir das `<h2>` auf den `name` des aktuellen Helden.
3. Füllen wir die drei Absätze mit ihrer `secretIdentity`, `age` und einer Zeile mit "Superpowers:", um die Informationen in der Liste einzuleiten.
4. Speichern wir die `powers`-Eigenschaft in einer weiteren neuen Konstante namens `superPowers` — dies enthält ein Array, das die aktuellen Superkräfte des Helden auflistet.
5. Verwenden wir eine weitere `for...of`-Schleife, um durch die aktuellen Superkräfte des Helden zu schleifen — für jede von ihnen erstellen wir ein `<li>`-Element, fügen die Superkraft darin ein und setzen dann das `listItem` in das `<ul>`-Element (`myList`) mit `appendChild()`.
6. Der allerletzte Schritt besteht darin, das `<h2>`, die `<p>`s und die `<ul>` in das `<article>` (`myArticle`) einzufügen und dann das `<article>` in das `<section>` einzufügen. Die Reihenfolge, in der Dinge eingefügt werden, ist wichtig, da dies die Reihenfolge ist, in der sie im HTML angezeigt werden.

> [!NOTE]
> Wenn Sie Schwierigkeiten haben, das Beispiel zum Laufen zu bringen, versuchen Sie, unseren [heroes-finished.html](https://github.com/mdn/learning-area/blob/main/javascript/oojs/json/heroes-finished.html) Quellcode zu konsultieren (siehe auch [live ausführen](https://mdn.github.io/learning-area/javascript/oojs/json/heroes-finished.html)).

> [!NOTE]
> Wenn Sie Schwierigkeiten haben, die Punkt/Klammer-Notation zu verstehen, die wir verwenden, um auf das JavaScript-Objekt zuzugreifen, kann es hilfreich sein, die [superheroes.json](https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json) Datei in einem anderen Tab oder Ihrem Texteditor zu öffnen und darauf zu verweisen, während Sie unser JavaScript durchsuchen.
> Sie sollten auch auf unseren Artikel [JavaScript-Objektgrundlagen](/de/docs/Learn_web_development/Core/Scripting/Object_basics) zurückgreifen, um weitere Informationen über die Punkt- und Klammer-Notation zu erhalten.

### Aufruf der Funktion auf höchster Ebene

Zum Schluss müssen wir unsere oberste `populate()`-Funktion aufrufen:

```js
populate();
```

## Konvertierung zwischen Objekten und Text

Das obige Beispiel war in Bezug auf den Zugriff auf das JavaScript-Objekt einfach, da wir die Netzwerkantwort direkt in ein JavaScript-Objekt mit `response.json()` konvertiert haben.

Aber manchmal haben wir nicht so viel Glück — manchmal erhalten wir eine rohe JSON-Zeichenfolge, und wir müssen sie selbst in ein Objekt konvertieren. Und wenn wir ein JavaScript-Objekt über das Netzwerk senden wollen, müssen wir es vor dem Senden in JSON (eine Zeichenfolge) konvertieren. Glücklicherweise sind diese beiden Probleme so häufig in der Webentwicklung, dass in Browsern ein eingebautes [JSON](/de/docs/Web/JavaScript/Reference/Global_Objects/JSON)-Objekt verfügbar ist, das die folgenden zwei Methoden enthält:

- [`parse()`](/de/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse): Nimmt eine JSON-Zeichenfolge als Parameter und gibt das entsprechende JavaScript-Objekt zurück.
- [`stringify()`](/de/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify): Nimmt ein Objekt als Parameter und gibt die äquivalente JSON-Zeichenfolge zurück.

Sie können das erste in Aktion in unserem [heroes-finished-json-parse.html](https://mdn.github.io/learning-area/javascript/oojs/json/heroes-finished-json-parse.html)-Beispiel sehen (siehe den [Quellcode](https://github.com/mdn/learning-area/blob/main/javascript/oojs/json/heroes-finished-json-parse.html)) — dies macht genau dasselbe wie das Beispiel, das wir zuvor aufgebaut haben, außer dass:

- wir die Antwort als Text und nicht als JSON abrufen, indem wir die [`text()`](/de/docs/Web/API/Response/text)-Methode der Antwort aufrufen
- wir dann `parse()` verwenden, um den Text in ein JavaScript-Objekt zu konvertieren.

Das relevante Code-Snippet ist hier:

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

Wie Sie vielleicht vermuten, funktioniert `stringify()` genau in die entgegengesetzte Richtung. Versuchen Sie, die folgenden Zeilen nacheinander in die JavaScript-Konsole Ihres Browsers einzugeben, um es in Aktion zu sehen:

```js
let myObj = { name: "Chris", age: 38 };
myObj;
let myString = JSON.stringify(myObj);
myString;
```

Hier erstellen wir ein JavaScript-Objekt, prüfen, was es enthält, konvertieren es dann mit `stringify()` in eine JSON-Zeichenfolge — speichern den Rückgabewert in einer neuen Variablen — und prüfen es dann erneut.

## Testen Sie Ihre Fähigkeiten!

Sie haben das Ende dieses Artikels erreicht, aber können Sie sich die wichtigsten Informationen merken? Sie finden einige weitere Tests, um zu überprüfen, ob Sie diese Informationen behalten haben, bevor Sie weitermachen — siehe [Testen Sie Ihre Fähigkeiten: JSON](/de/docs/Learn_web_development/Core/Scripting/Test_your_skills/JSON).

## Zusammenfassung

In dieser Lektion haben wir Sie in die Verwendung von JSON in Ihren Programmen eingeführt, einschließlich wie man JSON erstellt und parst und wie man auf Daten zugreift, die darin eingeschlossen sind. Im nächsten Artikel werden wir uns praktische Techniken zum Debuggen von JavaScript und der Fehlerbehandlung ansehen.

## Siehe auch

- [JSON-Referenz](/de/docs/Web/JavaScript/Reference/Global_Objects/JSON)
- [Fetch API-Übersicht](/de/docs/Web/API/Fetch_API)
- [Verwendung von Fetch](/de/docs/Web/API/Fetch_API/Using_Fetch)
- [HTTP-Anforderungsmethoden](/de/docs/Web/HTTP/Reference/Methods)

{{PreviousMenuNext("Learn_web_development/Core/Scripting/Network_requests","Learn_web_development/Core/Scripting/Debugging_JavaScript", "Learn_web_development/Core/Scripting")}}
