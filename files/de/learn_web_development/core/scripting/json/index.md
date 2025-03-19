---
title: Arbeiten mit JSON
short-title: JSON
slug: Learn_web_development/Core/Scripting/JSON
l10n:
  sourceCommit: 6c58c5d4227a031105740b0e85acbc6178223d0a
---

{{LearnSidebar}}

{{PreviousMenuNext("Learn_web_development/Core/Scripting/Network_requests","Learn_web_development/Core/Scripting/Debugging_JavaScript", "Learn_web_development/Core/Scripting")}}

JavaScript Object Notation (JSON) ist ein standardisiertes textbasiertes Format zur Darstellung strukturierter Daten, das auf der JavaScript-Objektsyntax basiert. Es wird häufig für die Übertragung von Daten in Webanwendungen verwendet (z.B. um Daten vom Server an den Client zu senden, damit sie auf einer Webseite angezeigt werden können, oder umgekehrt). Sie werden es häufig antreffen, daher geben wir Ihnen in diesem Artikel alles, was Sie benötigen, um mit JSON in JavaScript zu arbeiten, einschließlich dem Parsen von JSON, um auf darin enthaltene Daten zuzugreifen, und dem Erstellen von JSON.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>Ein Verständnis von <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a> und den <a href="/de/docs/Learn_web_development/Core/Styling_basics">Grundlagen von CSS</a>, sowie eine Vertrautheit mit den JavaScript-Grundlagen, die in den vorherigen Lektionen behandelt wurden.</td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Was JSON ist — ein sehr häufig verwendetes Datenformat, das auf der JavaScript-Objektsyntax basiert.</li>
          <li>Dass JSON auch Arrays enthalten kann.</li>
          <li>Abrufen von JSON als JavaScript-Objekt mit Mechanismen, die in Web-APIs verfügbar sind (zum Beispiel <code>Response.json()</code> in der Fetch API).</li>
          <li>Zugriff auf Werte innerhalb von JSON-Daten mit Klammer- und Punktnotation.</li>
          <li>Konvertierung zwischen Objekten und Text mit <code>JSON.parse()</code> und <code>JSON.stringify()</code>.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Nein, wirklich, was ist JSON?

{{Glossary("JSON", "JSON")}} ist ein textbasiertes Datenformat, das der JavaScript-Objektsyntax folgt und von [Douglas Crockford](https://de.wikipedia.org/wiki/Douglas_Crockford) populär gemacht wurde. Obwohl es der Syntax von JavaScript-Objektliteralen stark ähnelt, kann es unabhängig von JavaScript verwendet werden, und viele Programmierumgebungen verfügen über die Fähigkeit, JSON zu lesen (parsen) und zu generieren.

JSON existiert als Zeichenkette — nützlich, wenn Sie Daten über ein Netzwerk übertragen möchten. Es muss in ein natives JavaScript-Objekt konvertiert werden, wenn Sie die Daten zugreifen möchten. Das ist kein großes Problem — JavaScript stellt ein globales [JSON](/de/docs/Web/JavaScript/Reference/Global_Objects/JSON)-Objekt bereit, das Methoden zur Konvertierung zwischen den beiden bietet.

> [!NOTE]
> Die Konvertierung einer Zeichenkette in ein natives Objekt wird als _Deserialisierung_ bezeichnet, während die Konvertierung eines nativen Objekts in eine Zeichenkette, damit es über das Netzwerk übertragen werden kann, als _Serialisierung_ bezeichnet wird.

Eine JSON-Zeichenkette kann in einer eigenen Datei gespeichert werden, die im Grunde nur eine Textdatei mit der Erweiterung `.json` und einem {{Glossary("MIME_type", "MIME-Typ")}} von `application/json` ist.

### JSON-Struktur

Wie oben beschrieben ist JSON eine Zeichenkette, deren Format dem JavaScript-Objektliteralen-Format sehr ähnelt. Sie können in JSON dieselben grundlegenden Datentypen einfügen wie in ein standardmäßiges JavaScript-Objekt — Zeichenketten, Zahlen, Arrays, Booleans und andere Objektliterale. So können Sie eine Datenhierarchie erstellen, wie zum Beispiel:

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

Wenn wir diese Zeichenkette in ein JavaScript-Programm laden und in eine Variable namens `superHeroes` parsen würden, könnten wir anschließend auf die darin enthaltenen Daten mit der Punkt-/Klammer-Notation zugreifen, die wir im Artikel [JavaScript-Objektgrundlagen](/de/docs/Learn_web_development/Core/Scripting/Object_basics) behandelt haben. Zum Beispiel:

```js
superHeroes.homeTown;
superHeroes["active"];
```

Um auf Daten weiter unten in der Hierarchie zuzugreifen, müssen Sie die benötigten Eigenschaftsnamen und Array-Indizes zusammenketteln. Zum Beispiel, um die dritte Superkraft des zweiten Heldens in der Mitgliederliste zu erreichen, würden wir dies tun:

```js
superHeroes["members"][1]["powers"][2];
```

1. Zuerst der Variablenname — `superHeroes`.
2. Darin wollen wir auf die Eigenschaft `members` zugreifen, also verwenden wir `["members"]`.
3. `members` enthält ein Array, das mit Objekten gefüllt ist. Wir möchten auf das zweite Objekt im Array zugreifen, also verwenden wir `[1]`.
4. Innerhalb dieses Objekts wollen wir auf die Eigenschaft `powers` zugreifen, also verwenden wir `["powers"]`.
5. In der Eigenschaft `powers` befindet sich ein Array, das die Superkräfte des ausgewählten Helden enthält. Wir möchten die dritte, also verwenden wir `[2]`.

> [!NOTE]
> Wir haben das oben gesehene JSON in einer Variablen in unserem [JSONTest.html](https://mdn.github.io/learning-area/javascript/oojs/json/JSONTest.html)-Beispiel zur Verfügung gestellt (siehe den [Quellcode](https://github.com/mdn/learning-area/blob/main/javascript/oojs/json/JSONTest.html)).
> Versuchen Sie, dies zu laden und dann Daten innerhalb der Variablen über die JavaScript-Konsole Ihres Browsers aufzurufen.

### Arrays als JSON

Oben haben wir erwähnt, dass JSON-Text im Wesentlichen wie ein JavaScript-Objekt in einer Zeichenkette aussieht. Wir können auch Arrays nach/von JSON konvertieren. Das nachstehende Beispiel ist vollständig gültiges JSON:

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

Sie müssen auf Array-Elemente (in ihrer geparsten Version) zugreifen, indem Sie mit einem Array-Index beginnen, zum Beispiel `[0]["powers"][0]`.

### Weitere Hinweise

- JSON ist rein eine Zeichenkette mit einem spezifizierten Datenformat — es enthält nur Eigenschaften, keine Methoden.
- JSON erfordert, dass doppelte Anführungszeichen um Zeichenketten und Eigenschaftsnamen verwendet werden.
  Einfache Anführungszeichen sind nur gültig, wenn sie die gesamte JSON-Zeichenkette umgeben.
- Bereits ein falsch platzierter Komma oder Doppelpunkt kann dazu führen, dass eine JSON-Datei fehlerhaft wird und nicht funktioniert.
  Sie sollten darauf achten, alle Daten zu validieren, die Sie zu verwenden versuchen (obwohl computererzeugtes JSON weniger wahrscheinlich Fehler enthält, solange das Generatorprogramm korrekt funktioniert).
  Sie können JSON mit einer Anwendung wie [JSONLint](https://jsonlint.com/) validieren.
- JSON kann tatsächlich die Form jedes Datentyps annehmen, der für die Einfügung in JSON gültig ist, nicht nur von Arrays oder Objekten.
  Daher wäre zum Beispiel eine einzelne Zeichenkette oder Zahl gültiges JSON.
- Anders als in JavaScript-Code, bei dem Objekteigenschaften unzitiert sein können, dürfen in JSON nur zitierte Zeichenketten als Eigenschaften verwendet werden.

## Aktives Lernen: Arbeiten mit einem JSON-Beispiel

Also, lassen Sie uns ein Beispiel durchgehen, um zu zeigen, wie wir einige JSON-formatierte Daten auf einer Website verwenden könnten.

### Erste Schritte

Zunächst erstellen Sie lokale Kopien unserer Dateien [heroes.html](https://github.com/mdn/learning-area/blob/main/javascript/oojs/json/heroes.html) und [style.css](https://github.com/mdn/learning-area/blob/main/javascript/oojs/json/style.css). Letztere enthält einige einfache CSS, um unsere Seite zu gestalten, während die erstere etwas sehr einfaches HTML für den Body enthält, plus ein {{HTMLElement("script")}}-Element, um den JavaScript-Code zu enthalten, den wir in dieser Übung schreiben werden:

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

![Bild eines Dokuments mit dem Titel "Super hero squad" (in einer ausgefallenen Schriftart) und Untertitel "Hometown: Metro City // Formed: 2016". Drei Spalten unter der Überschrift sind betitelt "Molecule Man", "Madame Uppercut" und "Eternal Flame", jeweils. Jede Spalte listet den geheimen Identitätsnamen des Helden, das Alter und die Superkräfte auf.](json-superheroes.png)

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

Um das JSON zu erhalten, verwenden wir eine API namens [Fetch](/de/docs/Web/API/Fetch_API). Diese API ermöglicht es uns, Netzwerk-Anfragen zu stellen, um über JavaScript Ressourcen von einem Server abzurufen (z.B. Bilder, Text, JSON, sogar HTML-Schnipsel), was bedeutet, dass wir kleine Abschnitte von Inhalten aktualisieren können, ohne die gesamte Seite neu laden zu müssen.

In unserer Funktion verwenden die ersten vier Zeilen die Fetch API, um das JSON vom Server abzurufen:

- Wir deklarieren die Variable `requestURL`, um die GitHub-URL zu speichern.
- Wir verwenden die URL, um ein neues [`Request`](/de/docs/Web/API/Request)-Objekt zu initialisieren.
- Wir führen die Netzwerk-Anfrage mit der [`fetch()`](/de/docs/Web/API/Window/fetch)-Funktion aus, und das gibt ein [`Response`](/de/docs/Web/API/Response)-Objekt zurück.
- Wir rufen die Antwort als JSON mit der [`json()`](/de/docs/Web/API/Response/json)-Funktion des `Response`-Objekts ab.

> [!NOTE]
> Die `fetch()`-API ist **asynchron**. Sie können mehr über asynchrone Funktionen in unserem [Modul Asynchrones JavaScript](/de/docs/Learn_web_development/Extensions/Async_JS) erfahren, aber für jetzt sagen wir einfach, dass wir das Schlüsselwort {{jsxref("Statements/async_function", "async")}} vor dem Namen der Funktion, die die fetch-API verwendet, hinzufügen müssen, und das Schlüsselwort {{jsxref("Operators/await", "await")}} vor den Anrufen von asynchronen Funktionen hinzufügen müssen.

Nach all dem wird die Variable `superHeroes` das auf JSON basierende JavaScript-Objekt enthalten. Wir übergeben dieses Objekt dann an zwei Funktionsaufrufe — der erste füllt den `<header>` mit den richtigen Daten, während der zweite eine Informationskarte für jeden Helden im Team erstellt und in das `<section>` einfügt.

### Den Header füllen

Da wir die JSON-Daten abgerufen und in ein JavaScript-Objekt konvertiert haben, sollten wir sie nutzen, indem wir die beiden oben genannten Funktionen schreiben. Fügen Sie zuerst die folgende Funktionsdefinition unter dem vorherigen Code hinzu:

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

Hier erstellen wir zuerst ein {{HTMLElement("Heading_Elements", "h1")}}-Element mit [`createElement()`](/de/docs/Web/API/Document/createElement), setzen dessen [`textContent`](/de/docs/Web/API/Node/textContent) auf den `squadName`-Eigenschaft des Objekts und hängen es dann mit [`appendChild()`](/de/docs/Web/API/Node/appendChild) an den Header an. Anschließend führen wir eine sehr ähnliche Operation mit einem Absatz durch: Wir erstellen ihn, setzen seinen Textinhalt und hängen ihn an den Header an. Der einzige Unterschied besteht darin, dass sein Text zu einem [Template Literal](/de/docs/Web/JavaScript/Reference/Template_literals) wird, der sowohl die Eigenschaften `homeTown` als auch `formed` des Objekts enthält.

### Erstellen der Superhelden-Informationskarten

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

Zunächst speichern wir die `members`-Eigenschaft des JavaScript-Objekts in einer neuen Variablen. Dieses Array enthält mehrere Objekte, die die Informationen für jeden Helden beinhalten.

Dann verwenden wir eine [for...of Schleife](/de/docs/Learn_web_development/Core/Scripting/Loops#the_for...of_loop), um durch jedes Objekt im Array zu schleifen. Für jedes einzelne:

1. Erstellen wir mehrere neue Elemente: ein `<article>`, ein `<h2>`, drei `<p>`s und ein `<ul>`.
2. Setzen wir `<h2>` auf den aktuellen `name` des Helden.
3. Füllen wir die drei Absätze mit deren `secretIdentity`, `age` und einer Zeile mit der Aufschrift "Superpowers:", um die Informationen in der Liste einzuführen.
4. Speichern wir die `powers`-Eigenschaft in einer weiteren neuen Konstante namens `superPowers` — diese enthält ein Array, das die aktuellen Superkräfte des Helden auflistet.
5. Verwenden wir eine weitere `for...of`-Schleife, um die aktuellen Superkräfte der Helden zu durchlaufen — für jede davon erstellen wir ein `<li>`-Element, legen die Superkraft darin ab und fügen dann das `listItem` mit `appendChild()` in das `<ul>`-Element (`myList`) ein.
6. Das allerletzte, was wir tun, ist, die `<h2>`, `<p>`s und `<ul>` in das `<article>` (`myArticle`) einzufügen, dann das `<article>` in das `<section>` einfügen. Die Reihenfolge, in der die Dinge eingefügt werden, ist wichtig, da dies die Reihenfolge ist, in der sie im HTML angezeigt werden.

> [!NOTE]
> Wenn Sie Schwierigkeiten haben, das Beispiel zum Laufen zu bringen, versuchen Sie, unseren [heroes-finished.html](https://github.com/mdn/learning-area/blob/main/javascript/oojs/json/heroes-finished.html)-Quellcode zu konsultieren (siehe auch live [ausführend](https://mdn.github.io/learning-area/javascript/oojs/json/heroes-finished.html).)

> [!NOTE]
> Wenn Sie Schwierigkeiten haben, die Punkt-/Klammer-Notation, die wir zur Zugriff auf das JavaScript-Objekt verwenden, zu folgen, kann es hilfreich sein, die [superheroes.json](https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json)-Datei in einem anderen Tab oder Ihrem Texteditor zu öffnen, und sich daran zu orientieren, während Sie sich unseren JavaScript-Code ansehen.
> Sie sollten auch zu unserem [Artikel über JavaScript-Objektgrundlagen](/de/docs/Learn_web_development/Core/Scripting/Object_basics) zurückkehren, um mehr über Punkt- und Klammer-Notation zu erfahren.

### Die Funktion auf oberster Ebene aufrufen

Schließlich müssen wir unsere oberste `populate()`-Funktion aufrufen:

```js
populate();
```

## Konvertierung zwischen Objekten und Text

Das obige Beispiel war einfach in Bezug auf den Zugriff auf das JavaScript-Objekt, weil wir die Netzwerkantwort direkt in ein JavaScript-Objekt umgewandelt haben mit `response.json()`.

Aber manchmal haben wir nicht so viel Glück — manchmal erhalten wir einen rohen JSON-String, und wir müssen ihn selbst in ein Objekt umwandeln. Und wenn wir ein JavaScript-Objekt über das Netzwerk senden wollen, müssen wir es vor dem Senden in JSON (ein String) umwandeln. Glücklicherweise sind diese beiden Probleme so häufig in der Webentwicklung, dass ein integriertes [JSON](/de/docs/Web/JavaScript/Reference/Global_Objects/JSON)-Objekt in Browsern verfügbar ist, das die folgenden zwei Methoden enthält:

- [`parse()`](/de/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse): Akzeptiert eine JSON-Zeichenkette als Parameter und gibt das entsprechende JavaScript-Objekt zurück.
- [`stringify()`](/de/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify): Akzeptiert ein Objekt als Parameter und gibt die entsprechende JSON-Zeichenkette zurück.

Sie können die erste Methode in unserem [heroes-finished-json-parse.html](https://mdn.github.io/learning-area/javascript/oojs/json/heroes-finished-json-parse.html)-Beispiel in Aktion sehen (siehe den [Quellcode](https://github.com/mdn/learning-area/blob/main/javascript/oojs/json/heroes-finished-json-parse.html)) — dies tut genau das gleiche wie das Beispiel, das wir zuvor aufgebaut haben, außer dass:

- wir die Antwort als Text anstatt als JSON abrufen, indem wir die [`text()`](/de/docs/Web/API/Response/text)-Methode der Antwort aufrufen
- wir dann `parse()` verwenden, um den Text in ein JavaScript-Objekt zu konvertieren.

Das Schlüsselcode-Snippet ist hier:

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

Hier erstellen wir ein JavaScript-Objekt, überprüfen, was es enthält, konvertieren es dann mit `stringify()` in eine JSON-Zeichenkette — speichern den Rückgabewert in einer neuen Variable — und überprüfen es erneut.

## Testen Sie Ihre Fähigkeiten!

Sie haben das Ende dieses Artikels erreicht, aber können Sie sich an die wichtigsten Informationen erinnern? Sie können einige weitere Tests finden, um zu überprüfen, ob Sie diese Informationen behalten haben, bevor Sie weitergehen — siehe [Testen Sie Ihre Fähigkeiten: JSON](/de/docs/Learn_web_development/Core/Scripting/Test_your_skills:_JSON).

## Zusammenfassung

In dieser Lektion haben wir Ihnen die Nutzung von JSON in Ihren Programmen vorgestellt, einschließlich wie man JSON erstellt und parst, und wie man auf Daten zugreift, die darin eingeschlossen sind. Im nächsten Artikel werden wir praktische Techniken zur Fehlerbehebung in JavaScript und zur Fehlerbehandlung betrachten.

## Siehe auch

- [JSON-Referenz](/de/docs/Web/JavaScript/Reference/Global_Objects/JSON)
- [Übersicht über die Fetch API](/de/docs/Web/API/Fetch_API)
- [Verwendung von Fetch](/de/docs/Web/API/Fetch_API/Using_Fetch)
- [HTTP-Anforderungsmethoden](/de/docs/Web/HTTP/Reference/Methods)

{{PreviousMenuNext("Learn_web_development/Core/Scripting/Network_requests","Learn_web_development/Core/Scripting/Debugging_JavaScript", "Learn_web_development/Core/Scripting")}}
