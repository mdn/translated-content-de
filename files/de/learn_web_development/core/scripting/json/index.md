---
title: Arbeiten mit JSON
short-title: JSON
slug: Learn_web_development/Core/Scripting/JSON
l10n:
  sourceCommit: 65692fd4d256d5647749b7c7005dcf53d425a533
---

{{PreviousMenuNext("Learn_web_development/Core/Scripting/Network_requests","Learn_web_development/Core/Scripting/Test_your_skills/JSON", "Learn_web_development/Core/Scripting")}}

JavaScript Object Notation (JSON) ist ein standardisiertes textbasiertes Format zur Darstellung von strukturierten Daten, das auf der JavaScript-Objektsyntax basiert. Es wird häufig zum Übertragen von Daten in Webanwendungen verwendet (z. B. um Daten vom Server an den Client zu senden, damit sie auf einer Webseite angezeigt werden können, oder umgekehrt). Sie werden oft darauf stoßen, daher geben wir Ihnen in diesem Artikel alles, was Sie benötigen, um mit JSON in JavaScript zu arbeiten, einschließlich der Verarbeitung von JSON, damit Sie auf Daten darin zugreifen können, und des Erstellens von JSON.

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
          <li>Was JSON ist — ein sehr häufig verwendetes Datenformat, das auf der JavaScript-Objektsyntax basiert.</li>
          <li>Dass JSON auch Arrays enthalten kann.</li>
          <li>JSON als JavaScript-Objekt mit Mechanismen in den Web-APIs abrufen (z. B. <code>Response.json()</code> in der Fetch-API).</li>
          <li>Werte innerhalb von JSON-Daten mit Klammer- und Punktnotation abrufen.</li>
          <li>Konvertieren von Objekten in Text und umgekehrt mit <code>JSON.parse()</code> und <code>JSON.stringify()</code>.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Nein, wirklich, was ist JSON?

{{Glossary("JSON", "JSON")}} ist ein textbasiertes Datenformat, das der JavaScript-Objektsyntax folgt.
Es stellt strukturierte Daten als Zeichenfolge dar, was nützlich ist, wenn Sie Daten über ein Netzwerk übertragen möchten.
Auch wenn es der JavaScript-Objektliteral-Syntax sehr ähnlich sieht, kann es unabhängig von JavaScript verwendet werden. Viele Programmierumgebungen bieten die Möglichkeit, JSON zu lesen (parsen) und zu erzeugen.
In JavaScript werden die Methoden zum Parsen und Erzeugen von JSON durch das [`JSON`](/de/docs/Web/JavaScript/Reference/Global_Objects/JSON)-Objekt bereitgestellt.

> [!NOTE]
> Das Konvertieren einer Zeichenfolge in ein natives Objekt wird _Deserialisierung_ genannt, während das Konvertieren eines nativen Objekts in eine Zeichenfolge, damit es über das Netzwerk übertragen werden kann, _Serialisierung_ genannt wird.

Eine JSON-Zeichenfolge kann in einer eigenen Datei gespeichert werden, die im Grunde nur eine Textdatei mit der Erweiterung `.json` und einem {{Glossary("MIME_type", "MIME-Typ")}} von `application/json` ist.

### JSON-Struktur

Wie oben beschrieben, ist JSON eine Zeichenfolge, deren Format der JavaScript-Objektliteral-Formatierung sehr ähnlich ist.
Das folgende ist eine gültige JSON-Zeichenfolge, die ein Objekt darstellt.
Beachten Sie, dass es sich auch um ein gültiges JavaScript-Objektliteral handelt — nur mit einigen zusätzlichen [Syntaxbeschränkungen](#json-syntaxbeschränkungen).

<!-- cSpell:ignore tonne -->

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

Wenn Sie dieses JSON in Ihr JavaScript-Programm als Zeichenfolge laden, können Sie es in ein normales Objekt parsen und dann die Daten darin mit der gleichen Punkt-/Klammernotation abrufen, die wir im Artikel [JavaScript-Objekt-Grundlagen](/de/docs/Learn_web_development/Core/Scripting/Object_basics) behandelt haben.
Beispiel:

```js
superHeroes.homeTown;
superHeroes.members[1].powers[2];
```

1. Zuerst haben wir den Variablennamen — `superHeroes`.
2. Darin möchten wir auf die Eigenschaft `members` zugreifen, also verwenden wir `.members`.
3. `members` enthält ein Array, das mit Objekten gefüllt ist. Wir möchten auf das zweite Objekt im Array zugreifen, daher verwenden wir `[1]`.
4. Innerhalb dieses Objekts möchten wir auf die Eigenschaft `powers` zugreifen, daher verwenden wir `.powers`.
5. Innerhalb der Eigenschaft `powers` befindet sich ein Array, das die Superkräfte des ausgewählten Helden enthält. Wir möchten die dritte, also verwenden wir `[2]`.

Die wichtigste Erkenntnis ist, dass es eigentlich nichts Besonderes an der Arbeit mit JSON gibt; nachdem Sie es in ein JavaScript-Objekt geparst haben, arbeiten Sie damit genauso, wie Sie es mit einem Objekt tun würden, das mit der gleichen Objektliteralsyntax deklariert wurde.

> [!NOTE]
> Wir haben das oben gezeigte JSON in unserer [JSONTest.html](https://mdn.github.io/learning-area/javascript/oojs/json/JSONTest.html) Beispiel verfügbar gemacht (siehe den [Quellcode](https://github.com/mdn/learning-area/blob/main/javascript/oojs/json/JSONTest.html)).
> Versuchen Sie, dies zu laden, und greifen Sie dann über die JavaScript-Konsole Ihres Browsers auf die Daten innerhalb der Variablen zu.

### Arrays als JSON

Oben erwähnten wir, dass JSON-Text im Grunde wie ein JavaScript-Objekt innerhalb einer Zeichenfolge aussieht.
Wir können auch Arrays zu/von JSON konvertieren. Das folgende Beispiel ist völlig gültiges JSON:

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

JSON kann auch ein einzelnes primitives Element enthalten. Zum Beispiel sind `29`, `"Dan Jukes"` oder `true` alle gültiges JSON.

### JSON-Syntaxbeschränkungen

Wie bereits erwähnt, ist jedes JSON ein gültiges JavaScript-Literal (Objekt, Array, Zahl usw.). Das Gegenteil ist jedoch nicht wahr — nicht alle JavaScript-Objektliterals sind gültiges JSON.

- JSON kann nur _serialisierbare_ Datentypen enthalten. Das bedeutet:
  - Bei primitiven Datentypen kann JSON Zeichenfolgenliterale, Zahlenliterale, `true`, `false` und `null` enthalten. Auffallend ist, dass es `undefined`, `NaN` oder `Infinity` nicht enthalten kann.
  - Bei Nicht-Primitiven kann JSON Objektliterale und Arrays enthalten, aber keine Funktionen oder andere Objekttypen wie `Date`, `Set` und `Map`. Die Objekte und Arrays in JSON müssen weiterhin gültige JSON-Datentypen enthalten.
- Zeichenfolgen müssen in doppelte Anführungszeichen eingeschlossen werden, nicht in einfache.
- Zahlen müssen in Dezimalschreibweise geschrieben werden.
- Jede Eigenschaft eines Objekts muss in der Form `"key": value` sein. Eigenschaftsnamen müssen Zeichenfolgenliterale sein, die in doppelte Anführungszeichen eingeschlossen sind. Spezielle JavaScript-Syntax wie Methoden ist nicht erlaubt, da Methoden Funktionen sind und Funktionen keine gültigen JSON-Datentypen sind.
- Objekte und Arrays dürfen keine [trailing commas](/de/docs/Web/JavaScript/Reference/Trailing_commas) enthalten.
- Kommentare sind in JSON nicht erlaubt.

Selbst ein einziges falsch platziertes Komma oder Doppelpunkt kann eine JSON-Datei ungültig machen und sie zum Scheitern bringen.
Sie sollten darauf achten, alle Daten, die Sie verwenden möchten, zu validieren (obwohl computergeneriertes JSON weniger wahrscheinlich Fehler enthält, solange das Generatorprogramm korrekt funktioniert).
Sie können JSON mit einer Anwendung wie [JSONLint](https://jsonlint.com/) oder [JSON-validate](https://www.json-validate.com/) validieren.

> [!NOTE]
> Nachdem Sie diesen Abschnitt gelesen haben, möchten Sie Ihre Kenntnisse vielleicht auch mit Scrimbas [JSON-Überprüfung](https://scrimba.com/frontend-path-c0j/~0lt?via=mdn) <sup>[_MDN Lernpartner_](/de/docs/MDN/Writing_guidelines/Learning_content#partner_links_and_embeds)</sup> interaktivem Tutorial vertiefen, das einige nützliche Hinweise zur grundlegenden JSON-Syntax und zur Anzeige von JSON-Anfragedaten in den Devtools Ihres Browsers bietet.

## Durcharbeiten eines JSON-Beispiels

Lassen Sie uns nun ein Beispiel durchgehen, wie wir einige JSON-formatierte Daten auf einer Website nutzen könnten.

### Einstieg

Erstellen Sie zunächst lokale Kopien unserer [heroes.html](https://github.com/mdn/learning-area/blob/main/javascript/oojs/json/heroes.html) und [style.css](https://github.com/mdn/learning-area/blob/main/javascript/oojs/json/style.css) Dateien.
Letztere enthält einfache CSS zur Gestaltung unserer Seite, während die erstere einen sehr einfachen HTML-Body sowie ein {{HTMLElement("script")}}-Element enthält, das den JavaScript-Code enthält, den wir in dieser Übung schreiben werden:

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

Wir haben unsere JSON-Daten auf unserem GitHub unter <https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json> bereitgestellt.

Wir werden das JSON in unser Skript laden und einige clevere DOM-Manipulationen verwenden, um es anzuzeigen, so wie hier:

![Bild eines Dokuments mit dem Titel "Super hero squad" (in einer eleganten Schriftart) und dem Untertitel "Hometown: Metro City // Formed: 2016". Drei darunter liegende Spalten sind mit "Molecule Man", "Madame Uppercut" und "Eternal Flame" betitelt. Jede Spalte listet den geheimen Identitätsnamen, das Alter und die Superkräfte des Helden auf.](json-superheroes.png)

### Funktion der obersten Ebene

Die Funktion der obersten Ebene sieht so aus:

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
Diese API ermöglicht es uns, Netzwerk-Anfragen zu senden, um Ressourcen von einem Server über JavaScript abzurufen (z. B. Bilder, Text, JSON, sogar HTML-Snippets), was bedeutet, dass wir kleine Inhaltsbereiche aktualisieren können, ohne die gesamte Seite neu laden zu müssen.

In unserer Funktion verwenden die ersten vier Zeilen die Fetch API, um das JSON vom Server abzurufen:

- Wir deklarieren die Variable `requestURL`, um die GitHub-URL zu speichern
- Wir verwenden die URL, um ein neues [`Request`](/de/docs/Web/API/Request)-Objekt zu initialisieren.
- Wir machen die Netzwerk-Anfrage mit der Funktion [`fetch()`](/de/docs/Web/API/Window/fetch), und dies gibt ein [`Response`](/de/docs/Web/API/Response)-Objekt zurück
- Wir rufen die Antwort als JSON mit der Funktion [`json()`](/de/docs/Web/API/Response/json) des `Response`-Objekts ab.

> [!NOTE]
> Die `fetch()`-API ist **asynchron**. Sie können mehr über asynchrone Funktionen in unserem [Asynchrones JavaScript-Modul](/de/docs/Learn_web_development/Extensions/Async_JS) erfahren, aber vorerst sagen wir nur, dass wir das Schlüsselwort {{jsxref("Statements/async_function", "async")}} vor den Namen der Funktion, die die Fetch API verwendet, und das Schlüsselwort {{jsxref("Operators/await", "await")}} vor den Aufrufen von asynchronen Funktionen hinzufügen müssen.

Nach all dem wird die Variable `superHeroes` das JavaScript-Objekt basierend auf dem JSON enthalten. Wir übergeben dann dieses Objekt an zwei Funktionsaufrufe — der erste füllt den `<header>` mit den richtigen Daten, während der zweite eine Informationskarte für jeden Helden im Team erstellt und sie in die `<section>` einfügt.

### Den Header ausfüllen

Jetzt, da wir die JSON-Daten abgerufen und in ein JavaScript-Objekt konvertiert haben, wollen wir sie nutzen, indem wir die beiden Funktionen schreiben, die wir oben erwähnt haben. Fügen Sie zuerst die folgende Funktionsdefinition unter dem vorherigen Code hinzu:

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

Hier erstellen wir zuerst ein {{HTMLElement("Heading_Elements", "h1")}}-Element mit [`createElement()`](/de/docs/Web/API/Document/createElement), setzen seinen [`textContent`](/de/docs/Web/API/Node/textContent) auf den `squadName`-Eigenschaft des Objekts und hängen ihn dann mit [`appendChild()`](/de/docs/Web/API/Node/appendChild) an den Header an. Dann führen wir eine sehr ähnliche Operation mit einem Absatz durch: Erstellen Sie ihn, setzen Sie seinen Textinhalt und hängen Sie ihn an den Header an. Der einzige Unterschied besteht darin, dass sein Text auf ein [Template Literal](/de/docs/Web/JavaScript/Reference/Template_literals) gesetzt wird, das sowohl die `homeTown`- als auch die `formed`-Eigenschaft des Objekts enthält.

### Erstellen der Heldeninformationskarten

Fügen Sie nun die folgende Funktion am Ende des Codes hinzu, die die Superheldenkarten erstellt und anzeigt:

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

Als nächstes verwenden wir eine [`for...of`-Schleife](/de/docs/Learn_web_development/Core/Scripting/Loops#the_for...of_loop), um jedes Objekt im Array zu durchlaufen. Für jedes tun wir Folgendes:

1. Wir erstellen mehrere neue Elemente: ein `<article>`, ein `<h2>`, drei `<p>`s und ein `<ul>`.
2. Setzen Sie das `<h2>` auf den Namen des aktuellen Helden.
3. Füllen Sie die drei Absätze mit ihren `secretIdentity`, `age` und einer Zeile mit der Aufschrift "Superpowers:", um die Informationen in der Liste einzuleiten.
4. Speichern Sie die `powers`-Eigenschaft in einer weiteren neuen Konstante namens `superPowers` — diese enthält ein Array, das die Superkräfte des aktuellen Helden auflistet.
5. Verwenden Sie eine weitere `for...of`-Schleife, um die Superkräfte des aktuellen Helden durchzugehen — für jede erstellen wir ein `<li>`-Element, geben die Superkraft hinein, und dann platzieren wir das `listItem` mit `appendChild()` in der `<ul>`-Element (`myList`).
6. Das allerletzte, was wir tun, ist, den `<h2>`, die `<p>`s und das `<ul>` innerhalb des `<article>` (`myArticle`) anzuhängen, dann das `<article>` innerhalb der `<section>` anzuhängen. Die Reihenfolge, in der die Dinge angehängt werden, ist wichtig, da dies die Reihenfolge ist, in der sie im HTML angezeigt werden.

> [!NOTE]
> Wenn Sie Schwierigkeiten haben, das Beispiel zum Laufen zu bringen, versuchen Sie, auf unseren [heroes-finished.html](https://github.com/mdn/learning-area/blob/main/javascript/oojs/json/heroes-finished.html) Quellcode zu verweisen (siehe es auch [live laufen](https://mdn.github.io/learning-area/javascript/oojs/json/heroes-finished.html)).

> [!NOTE]
> Wenn Sie Schwierigkeiten haben, der Punkt-/Klammernotation zu folgen, die wir verwenden, um auf das JavaScript-Objekt zuzugreifen, kann es hilfreich sein, die [superheroes.json](https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json) Datei in einem anderen Tab oder Ihrem Texteditor geöffnet zu haben und darauf zurückzugreifen, während Sie sich unseren JavaScript ansehen.
> Sie sollten auch auf unseren Artikel [JavaScript-Objekt-Grundlagen](/de/docs/Learn_web_development/Core/Scripting/Object_basics) zurückgreifen, um mehr über Punkt- und Klammernotation zu erfahren.

### Die Funktion der obersten Ebene aufrufen

Zuletzt müssen wir unsere `populate()`-Funktion der obersten Ebene aufrufen:

```js
populate();
```

## Konvertieren zwischen Objekten und Text

Das obige Beispiel war in Bezug auf den Zugriff auf das JavaScript-Objekt einfach, weil wir die Netzwerkanantwort direkt in ein JavaScript-Objekt mithilfe von `response.json()` umgewandelt haben.

Aber manchmal haben wir nicht so viel Glück — manchmal erhalten wir eine rohe JSON-Zeichenfolge und müssen sie selbst in ein Objekt umwandeln. Und wenn wir ein JavaScript-Objekt über das Netzwerk senden möchten, müssen wir es vor dem Senden in JSON (eine Zeichenfolge) umwandeln. Glücklicherweise sind diese beiden Probleme in der Webentwicklung so häufig, dass in Browsern ein eingebautes [JSON](/de/docs/Web/JavaScript/Reference/Global_Objects/JSON)-Objekt verfügbar ist, das die folgenden beiden Methoden enthält:

- [`parse()`](/de/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse): Nimmt eine JSON-Zeichenfolge als Parameter an und gibt das entsprechende JavaScript-Objekt zurück.
- [`stringify()`](/de/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify): Nimmt ein Objekt als Parameter an und gibt die entsprechende JSON-Zeichenfolge zurück.

Sie können das erste in Aktion in unserem [heroes-finished-json-parse.html](https://mdn.github.io/learning-area/javascript/oojs/json/heroes-finished-json-parse.html) Beispiel sehen (sehen Sie sich den [Quellcode](https://github.com/mdn/learning-area/blob/main/javascript/oojs/json/heroes-finished-json-parse.html) an) — dies tut genau dasselbe wie das Beispiel, das wir zuvor erstellt haben, außer dass:

- wir die Antwort als Text anstelle von JSON abrufen, indem wir die [`text()`](/de/docs/Web/API/Response/text) Methode der Antwort aufrufen
- wir dann `parse()` verwenden, um den Text in ein JavaScript-Objekt umzuwandeln.

Der Schlüssel-Code-Schnipsel ist hier:

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

Wie Sie vielleicht erraten haben, funktioniert `stringify()` in umgekehrter Weise. Versuchen Sie, die folgenden Zeilen nacheinander in die JavaScript-Konsole Ihres Browsers einzugeben, um sie in Aktion zu sehen:

```js
let myObj = { name: "Chris", age: 38 };
myObj;
let myString = JSON.stringify(myObj);
myString;
```

Hier erstellen wir ein JavaScript-Objekt, überprüfen, was es enthält, konvertieren es mit `stringify()` in eine JSON-Zeichenfolge — speichern den Rückgabewert in einer neuen Variablen — und überprüfen es dann erneut.

## Zusammenfassung

In dieser Lektion haben wir Ihnen die Verwendung von JSON in Ihren Programmen vorgestellt, einschließlich der Erstellung und Analyse von JSON und wie Sie auf darin gespeicherte Daten zugreifen können. Im nächsten Artikel geben wir Ihnen einige Tests, mit denen Sie überprüfen können, wie gut Sie die Informationen verstanden und behalten haben.

## Siehe auch

- [JSON-Referenz](/de/docs/Web/JavaScript/Reference/Global_Objects/JSON)
- [Fetch API-Übersicht](/de/docs/Web/API/Fetch_API)
- [Fetch verwenden](/de/docs/Web/API/Fetch_API/Using_Fetch)
- [HTTP-Anforderungsmethoden](/de/docs/Web/HTTP/Reference/Methods)

{{PreviousMenuNext("Learn_web_development/Core/Scripting/Network_requests","Learn_web_development/Core/Scripting/Test_your_skills/JSON", "Learn_web_development/Core/Scripting")}}
