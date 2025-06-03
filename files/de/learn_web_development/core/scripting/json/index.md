---
title: Arbeiten mit JSON
short-title: JSON
slug: Learn_web_development/Core/Scripting/JSON
l10n:
  sourceCommit: ad2ee21660739777fc8874a93670cd518a6d3fff
---

{{PreviousMenuNext("Learn_web_development/Core/Scripting/Network_requests","Learn_web_development/Core/Scripting/Debugging_JavaScript", "Learn_web_development/Core/Scripting")}}

JavaScript Object Notation (JSON) ist ein standardisiertes textbasiertes Format zur Darstellung strukturierter Daten, das auf der Syntax von JavaScript-Objekten basiert. Es wird häufig für die Übertragung von Daten in Webanwendungen verwendet (z.B. zum Senden von Daten vom Server zum Client, damit sie auf einer Webseite angezeigt werden können oder umgekehrt). Sie werden häufig darauf stoßen, deshalb geben wir Ihnen in diesem Artikel alles, was Sie benötigen, um mit JSON in JavaScript zu arbeiten, einschließlich des Parsens von JSON, um auf die darin enthaltenen Daten zugreifen zu können, und der Erstellung von JSON.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>Ein Verständnis von <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a> und den <a href="/de/docs/Learn_web_development/Core/Styling_basics">Grundlagen von CSS</a>, Vertrautheit mit den Grundlagen von JavaScript, wie sie in den vorherigen Lektionen behandelt wurden.</td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Was JSON ist — ein sehr häufig verwendetes Datenformat, das auf der Syntax von JavaScript-Objekten basiert.</li>
          <li>Dass JSON auch Arrays enthalten kann.</li>
          <li>JSON als JavaScript-Objekt mithilfe von Mechanismen in Web-APIs abrufen (z.B. <code>Response.json()</code> in der Fetch API).</li>
          <li>Zugriff auf Werte innerhalb von JSON-Daten mithilfe von Klammern- und Punkt-Syntax.</li>
          <li>Konvertierung zwischen Objekten und Text mit <code>JSON.parse()</code> und <code>JSON.stringify()</code>.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Nein, wirklich, was ist JSON?

{{Glossary("JSON", "JSON")}} ist ein textbasiertes Datenformat, das der Syntax von JavaScript-Objekten folgt.
Es stellt strukturierte Daten als Zeichenfolge dar, was nützlich ist, wenn Sie Daten über ein Netzwerk übertragen möchten.
Obwohl es sehr der Syntax von JavaScript-Objektliteralen ähnelt, kann es unabhängig von JavaScript verwendet werden. Viele Programmierumgebungen können JSON einlesen (parsen) und erzeugen.
In JavaScript werden die Methoden zum Parsen und Erzeugen von JSON durch das [`JSON`](/de/docs/Web/JavaScript/Reference/Global_Objects/JSON)-Objekt bereitgestellt.

> [!NOTE]
> Die Umwandlung einer Zeichenfolge in ein natives Objekt wird _Deserialisierung_ genannt, während die Umwandlung eines nativen Objekts in eine Zeichenfolge, um es über das Netzwerk zu übertragen, _Serialisierung_ genannt wird.

Eine JSON-Zeichenfolge kann in einer eigenen Datei gespeichert werden, die im Grunde nur eine Textdatei mit der Erweiterung `.json` und einem {{Glossary("MIME_type", "MIME-Typ")}} von `application/json` ist.

### JSON-Struktur

Wie oben beschrieben, ist JSON eine Zeichenfolge, deren Format stark dem Format von JavaScript-Objektliteralen ähnelt.
Das Folgende ist eine gültige JSON-Zeichenfolge, die ein Objekt darstellt.
Beachten Sie, dass es auch ein gültiges JavaScript-Objektliteral ist - nur mit einigen weiteren [Syntaxbeschränkungen](#json-syntax-beschränkungen).

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

Wenn Sie dieses JSON in Ihrem JavaScript-Programm als Zeichenfolge laden, können Sie es in ein normales Objekt parsen und dann auf die darin enthaltenen Daten mit der gleichen Punkt-/Klammernotation zugreifen, die wir im Artikel [JavaScript-Objekt-Grundlagen](/de/docs/Learn_web_development/Core/Scripting/Object_basics) besprochen haben. Zum Beispiel:

```js
superHeroes.homeTown;
superHeroes.members[1].powers[2];
```

1. Zuerst haben wir den Variablennamen — `superHeroes`.
2. Innerhalb davon wollen wir auf die Eigenschaft `members` zugreifen, also verwenden wir `.members`.
3. `members` enthält ein Array, das mit Objekten gefüllt ist. Wir wollen auf das zweite Objekt im Array zugreifen, also verwenden wir `[1]`.
4. Innerhalb dieses Objekts wollen wir auf die Eigenschaft `powers` zugreifen, also verwenden wir `.powers`.
5. Innerhalb der Eigenschaft `powers` befindet sich ein Array, das die Superkräfte des ausgewählten Helden enthält. Wir wollen die dritte, also verwenden wir `[2]`.

Das Wesentliche ist, dass es wirklich nichts Besonderes beim Arbeiten mit JSON gibt; nachdem Sie es in ein JavaScript-Objekt geparst haben, arbeiten Sie damit genauso, wie Sie es mit einem Objekt tun würden, das mit derselben Objektliteral-Syntax deklariert wurde.

> [!NOTE]
> Wir haben das oben gesehene JSON in einer Variable in unserem [JSONTest.html](https://mdn.github.io/learning-area/javascript/oojs/json/JSONTest.html)-Beispiel verfügbar gemacht (siehe den [Quellcode](https://github.com/mdn/learning-area/blob/main/javascript/oojs/json/JSONTest.html)).
> Versuchen Sie, dies zu laden und dann über die JavaScript-Konsole Ihres Browsers auf die Daten innerhalb der Variablen zuzugreifen.

### Arrays als JSON

Oben erwähnten wir, dass JSON-Text im Wesentlichen wie ein JavaScript-Objekt innerhalb einer Zeichenfolge aussieht.
Wir können auch Arrays zu/von JSON konvertieren. Das folgende Beispiel ist vollkommen gültiges JSON:

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

Das JSON kann auch eine einzelne Primitive enthalten. Zum Beispiel sind `29`, `"Dan Jukes"` oder `true` alle gültige JSON.

### JSON-Syntax-Beschränkungen

Wie bereits erwähnt, ist jedes JSON ein gültiges JavaScript-Literal (Objekt, Array, Zahl, etc.). Das Gegenteil gilt jedoch nicht — nicht alle JavaScript-Objektliterale sind gültiges JSON.

- JSON kann nur _serialisierbare_ Datentypen enthalten. Das bedeutet:
  - Für Primitiven kann JSON Zeichenfolgenliterale, Zahlenliterale, `true`, `false` und `null` enthalten. Insbesondere kann es `undefined`, `NaN` oder `Infinity` nicht enthalten.
  - Für Nicht-Primitiven kann JSON Objektliterale und Arrays enthalten, aber keine Funktionen oder andere Objekttypen wie `Date`, `Set` und `Map`. Die Objekte und Arrays innerhalb von JSON müssen außerdem gültige JSON-Datentypen enthalten.
- Zeichenfolgen müssen in doppelte Anführungszeichen gesetzt werden, nicht in einfache.
- Zahlen müssen im Dezimalsystem geschrieben werden.
- Jede Eigenschaft eines Objekts muss in der Form `"key": value` vorliegen. Eigenschaftennamen müssen Zeichenfolgenliterale sein, die in doppelten Anführungszeichen eingeschlossen sind. Spezielle JavaScript-Syntax, wie Methoden, ist nicht erlaubt, da Methoden Funktionen sind und Funktionen keine gültigen JSON-Datentypen sind.
- Objekte und Arrays können keine [anhängenden Kommata](/de/docs/Web/JavaScript/Reference/Trailing_commas) enthalten.
- Kommentare sind in JSON nicht erlaubt.

Schon ein einzelnes fehlplatziertes Komma oder ein Doppelpunkt kann eine JSON-Datei ungültig machen und sie zum Fehlschlagen führen.
Sie sollten darauf achten, die Daten zu validieren, die Sie verwenden möchten (obwohl computererzeugte JSONs weniger wahrscheinlich Fehler enthalten, solange das Erzeugerprogramm korrekt funktioniert).
Sie können JSON mit einer Anwendung wie [JSONLint](https://jsonlint.com/) oder [JSON-validate](https://www.json-validate.com/) validieren.

> [!NOTE]
> Nachdem Sie diesen Abschnitt gelesen haben, möchten Sie vielleicht auch Ihr Wissen mit dem [JSON review](https://scrimba.com/frontend-path-c0j/~0lt?via=mdn) von Scrimba <sup>[_MDN learning partner_](/de/docs/MDN/Writing_guidelines/Learning_content#partner_links_and_embeds)</sup> ergänzen. Das interaktive Tutorial bietet hilfreiche Anleitungen zu grundlegender JSON-Syntax und wie Sie JSON-Anfragedaten in den Entwicklertools Ihres Browsers anzeigen können.

## Aktives Lernen: Durcharbeiten eines JSON-Beispiels

Lassen Sie uns ein Beispiel durcharbeiten, um zu zeigen, wie wir einige JSON-formatierte Daten auf einer Website verwenden könnten.

### Einstieg

Zu Beginn erstellen Sie lokale Kopien unserer [heroes.html](https://github.com/mdn/learning-area/blob/main/javascript/oojs/json/heroes.html) und [style.css](https://github.com/mdn/learning-area/blob/main/javascript/oojs/json/style.css) Dateien.
Letztere enthält ein wenig CSS, um unsere Seite zu gestalten, während die erste einfaches HTML für den Body enthält, plus ein {{HTMLElement("script")}} Element, das den JavaScript-Code enthält, den wir in dieser Übung schreiben werden:

```html-nolint
<header>
...
</header>

<section>
...
</section>

<script>
// JavaScript goes here
</script>
```

Wir haben unsere JSON-Daten auf unserem GitHub verfügbar gemacht, unter <https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json>.

Wir werden das JSON in unser Skript laden und einige geschickte DOM-Manipulation verwenden, um es anzuzeigen, wie hier:

![Bild eines Dokuments mit dem Titel "Superhelden-Team" (in einer auffälligen Schrift) und dem Untertitel "Heimatstadt: Metro City // Gegründet: 2016". Drei Spalten unter der Überschrift sind mit "Molecule Man", "Madame Uppercut" und "Eternal Flame" betitelt. Jede Spalte listet den geheimen Identitätsnamen des Helden, das Alter und die Superkräfte auf.](json-superheroes.png)

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
Diese API ermöglicht es uns, Netzwerk-Anfragen zu stellen, um Ressourcen von einem Server über JavaScript abzurufen (z.B. Bilder, Text, JSON, sogar HTML-Ausschnitte), was bedeutet, dass wir kleine Inhaltsabschnitte aktualisieren können, ohne die gesamte Seite neu laden zu müssen.

In unserer Funktion verwenden die ersten vier Zeilen die Fetch-API, um das JSON vom Server abzurufen:

- Wir deklarieren die Variable `requestURL`, um die GitHub-URL zu speichern
- Wir verwenden die URL, um ein neues [`Request`](/de/docs/Web/API/Request)-Objekt zu initialisieren.
- Wir machen die Netzwerkanfrage mit der [`fetch()`](/de/docs/Web/API/Window/fetch)-Funktion, und dies gibt ein [`Response`](/de/docs/Web/API/Response)-Objekt zurück
- Wir rufen die Antwort als JSON ab, indem wir die [`json()`](/de/docs/Web/API/Response/json)-Funktion des `Response`-Objekts verwenden.

> [!NOTE]
> Die `fetch()` API ist **asynchron**. Sie können mehr über asynchrone Funktionen in unserem [Asynchronous JavaScript module](/de/docs/Learn_web_development/Extensions/Async_JS) erfahren, aber für jetzt wollen wir nur sagen, dass wir das Schlüsselwort {{jsxref("Statements/async_function", "async")}} vor den Namen der Funktion setzen müssen, die die Fetch API verwendet, und das Schlüsselwort {{jsxref("Operators/await", "await")}} vor die Aufrufe asynchroner Funktionen.

Nach all dem enthält die Variable `superHeroes` das JavaScript-Objekt basierend auf dem JSON. Wir übergeben dieses Objekt dann zwei Funktionsaufrufen — der erste füllt den `<header>` mit den korrekten Daten, während der zweite eine Informationskarte für jeden Helden im Team erstellt und sie in das `<section>` einfügt.

### Den Header füllen

Jetzt, da wir die JSON-Daten abgerufen und in ein JavaScript-Objekt konvertiert haben, wollen wir sie durch Schreiben der beiden oben erwähnten Funktionen nutzen. Fügen Sie als Erstes folgende Funktionsdefinition unter dem vorherigen Code hinzu:

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

Hier erstellen wir zuerst ein {{HTMLElement("Heading_Elements", "h1")}} Element mit [`createElement()`](/de/docs/Web/API/Document/createElement), setzen seinen [`textContent`](/de/docs/Web/API/Node/textContent), um der `squadName`-Eigenschaft des Objekts zu entsprechen, und fügen es dann dem Header mit [`appendChild()`](/de/docs/Web/API/Node/appendChild) hinzu. Wir führen dann einen sehr ähnlichen Vorgang mit einem Absatz durch: wir erstellen ihn, setzen seinen Textinhalt und fügen ihn dem Header hinzu. Der einzige Unterschied besteht darin, dass sein Text auf eine [template literal](/de/docs/Web/JavaScript/Reference/Template_literals) gesetzt ist, die sowohl die `homeTown` als auch die `formed` Eigenschaften des Objekts enthält.

### Erstellen der Helden-Informationskarten

Fügen Sie als nächstes die folgende Funktion am Ende des Codes hinzu, die die Superheldenkarten erstellt und anzeigt:

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

Als nächstes verwenden wir eine [for...of Schleife](/de/docs/Learn_web_development/Core/Scripting/Loops#the_for...of_loop), um durch jedes Objekt im Array zu schleifen. Für jedes von ihnen:

1. Erstellen wir mehrere neue Elemente: ein `<article>`, ein `<h2>`, drei `<p>`s und ein `<ul>`.
2. Setzen wir das `<h2>`, um den aktuellen `name` des Helden zu enthalten.
3. Füllen wir die drei Absätze mit ihrem `secretIdentity`, `age` und einer Zeile "Superpowers:" ein, die die Informationen in der Liste einführt.
4. Speichern wir die `powers`-Eigenschaft in einer weiteren neuen Konstante namens `superPowers` — dies enthält ein Array, das die Superkräfte des aktuellen Helden auflistet.
5. Verwenden wir eine weitere `for...of` Schleife, um durch die aktuellen Superkräfte des Helden zu schleifen — für jede von ihnen erstellen wir ein `<li>` Element, setzen die Superkraft hinein, und fügen dann das `listItem` mit `appendChild()` in das `<ul>` Element (`myList`) ein.
6. Das allerletzte, was wir tun, ist, das `<h2>`, die `<p>`s und das `<ul>` im `<article>` (`myArticle`) einzufügen, und dann das `<article>` im `<section>` einzufügen. Die Reihenfolge, in der Dinge eingefügt werden, ist wichtig, da sie die Reihenfolge beeinflusst, in der sie im HTML angezeigt werden.

> [!NOTE]
> Wenn Sie Schwierigkeiten haben, das Beispiel zum Laufen zu bringen, versuchen Sie, unseren [heroes-finished.html](https://github.com/mdn/learning-area/blob/main/javascript/oojs/json/heroes-finished.html) Quellcode (siehe es [live laufend](https://mdn.github.io/learning-area/javascript/oojs/json/heroes-finished.html) auch) zu referenzieren.

> [!NOTE]
> Wenn Sie Schwierigkeiten haben, die Punkt-/Klammernotation zu verfolgen, die wir verwenden, um auf das JavaScript-Objekt zuzugreifen, kann es helfen, die [superheroes.json](https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json) Datei in einem anderen Tab oder Ihrem Texteditor offen zu haben und darauf zu verweisen, während Sie sich unser JavaScript ansehen.
> Sie sollten auch zu unserem Artikel [JavaScript-Objekt-Grundlagen](/de/docs/Learn_web_development/Core/Scripting/Object_basics) zurückgehen für weitere Informationen zur Punkt- und Klammernotation.

### Die oberste Funktion aufrufen

Schließlich müssen wir unsere oberste `populate()` Funktion aufrufen:

```js
populate();
```

## Konvertierung zwischen Objekten und Text

Das obige Beispiel war einfach im Hinblick auf den Zugriff auf das JavaScript-Objekt, weil wir die Netzwerkantwort direkt in ein JavaScript-Objekt mit `response.json()` umgewandelt haben.

Aber manchmal haben wir nicht so viel Glück — manchmal erhalten wir eine rohe JSON-Zeichenfolge, und wir müssen sie selbst in ein Objekt umwandeln. Und wenn wir ein JavaScript-Objekt über das Netzwerk senden wollen, müssen wir es in JSON (eine Zeichenfolge) umwandeln, bevor wir es senden. Glücklicherweise sind diese beiden Probleme in der Webentwicklung so häufig, dass ein integriertes [JSON](/de/docs/Web/JavaScript/Reference/Global_Objects/JSON)-Objekt in Browsern verfügbar ist, das die folgenden zwei Methoden enthält:

- [`parse()`](/de/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse): Akzeptiert eine JSON-Zeichenfolge als Parameter und gibt das entsprechende JavaScript-Objekt zurück.
- [`stringify()`](/de/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify): Akzeptiert ein Objekt als Parameter und gibt die äquivalente JSON-Zeichenfolge zurück.

Sie können die erste davon in Aktion in unserem [heroes-finished-json-parse.html](https://mdn.github.io/learning-area/javascript/oojs/json/heroes-finished-json-parse.html) Beispiel sehen (siehe den [Quellcode](https://github.com/mdn/learning-area/blob/main/javascript/oojs/json/heroes-finished-json-parse.html)) — dies macht genau das gleiche wie das Beispiel, das wir früher aufgebaut haben, außer dass:

- wir die Antwort als Text anstelle von JSON abrufen, indem wir die [`text()`](/de/docs/Web/API/Response/text) Methode der Antwort aufrufen
- wir dann `parse()` verwenden, um den Text in ein JavaScript-Objekt zu konvertieren.

Das wesentliche Code-Snippet ist hier:

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

Wie Sie vielleicht vermuten, funktioniert `stringify()` auf die entgegengesetzte Weise. Versuchen Sie, die folgenden Zeilen nacheinander in die JavaScript-Konsole Ihres Browsers einzugeben, um zu sehen, wie es funktioniert:

```js
let myObj = { name: "Chris", age: 38 };
myObj;
let myString = JSON.stringify(myObj);
myString;
```

Hier erstellen wir ein JavaScript-Objekt, prüfen, was es enthält, konvertieren es dann in eine JSON-Zeichenfolge mit `stringify()` — speichern den Rückgabewert in einer neuen Variablen — und prüfen es dann noch einmal.

## Testen Sie Ihre Fähigkeiten!

Sie haben das Ende dieses Artikels erreicht, aber können Sie sich an die wichtigsten Informationen erinnern? Sie können einige weitere Tests finden, um zu überprüfen, ob Sie diese Informationen behalten haben, bevor Sie weitergehen — siehe [Testen Sie Ihre Fähigkeiten: JSON](/de/docs/Learn_web_development/Core/Scripting/Test_your_skills/JSON).

## Zusammenfassung

In dieser Lektion haben wir Sie in die Verwendung von JSON in Ihren Programmen eingeführt, einschließlich der Erstellung und des Parsens von JSON und des Zugriffs auf die darin gesperrten Daten. Im nächsten Artikel werden wir praktische Techniken zur Fehlerbehebung in JavaScript und zum Umgang mit Fehlern betrachten.

## Siehe auch

- [JSON-Referenz](/de/docs/Web/JavaScript/Reference/Global_Objects/JSON)
- [Fetch API Übersicht](/de/docs/Web/API/Fetch_API)
- [Fetch verwenden](/de/docs/Web/API/Fetch_API/Using_Fetch)
- [HTTP-Anfragemethoden](/de/docs/Web/HTTP/Reference/Methods)

{{PreviousMenuNext("Learn_web_development/Core/Scripting/Network_requests","Learn_web_development/Core/Scripting/Debugging_JavaScript", "Learn_web_development/Core/Scripting")}}
