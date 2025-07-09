---
title: Arbeiten mit JSON
short-title: JSON
slug: Learn_web_development/Core/Scripting/JSON
l10n:
  sourceCommit: 6149deb5f4beccdc09549fbf8d1810d9a4dc3462
---

{{PreviousMenuNext("Learn_web_development/Core/Scripting/Network_requests","Learn_web_development/Core/Scripting/Debugging_JavaScript", "Learn_web_development/Core/Scripting")}}

JavaScript Object Notation (JSON) ist ein standardisiertes, textbasiertes Format zur Darstellung von strukturierten Daten basierend auf der JavaScript-Objektsyntax. Es wird häufig zum Übertragen von Daten in Webanwendungen verwendet (z.B. zum Senden von Daten vom Server an den Client, um sie auf einer Webseite anzuzeigen, oder umgekehrt). Sie werden es ziemlich oft antreffen, daher geben wir Ihnen in diesem Artikel alle Informationen, die Sie benötigen, um mit JSON in JavaScript zu arbeiten, einschließlich des Parsens von JSON, damit Sie auf die darin enthaltenen Daten zugreifen können, und der Erstellung von JSON.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>Kenntnisse in <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a> und den <a href="/de/docs/Learn_web_development/Core/Styling_basics">Grundlagen von CSS</a>, Vertrautheit mit den JavaScript-Grundlagen, wie sie in vorherigen Lektionen behandelt wurden.</td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Was JSON ist — ein sehr häufig verwendetes Datenformat basierend auf JavaScript-Objektsyntax.</li>
          <li>Dass JSON auch Arrays enthalten kann.</li>
          <li>JSON als JavaScript-Objekt mithilfe der in Web-APIs verfügbaren Mechanismen abrufen (zum Beispiel <code>Response.json()</code> in der Fetch-API).</li>
          <li>Werte innerhalb von JSON-Daten mit Klammer- und Punktsyntax zugreifen.</li>
          <li>Konvertierung zwischen Objekten und Text mit <code>JSON.parse()</code> und <code>JSON.stringify()</code>.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Nein, wirklich, was ist JSON?

{{Glossary("JSON", "JSON")}} ist ein textbasiertes Datenformat, das der JavaScript-Objektsyntax folgt.
Es stellt strukturierte Daten als String dar, was nützlich ist, wenn Sie Daten über ein Netzwerk übertragen möchten.
Auch wenn es der JavaScript-Objektliteral-Syntax sehr ähnelt, kann es unabhängig von JavaScript verwendet werden. Viele Programmierumgebungen bieten die Möglichkeit, JSON zu lesen (parsen) und zu generieren.
In JavaScript werden die Methoden zum Parsen und Generieren von JSON durch das [`JSON`](/de/docs/Web/JavaScript/Reference/Global_Objects/JSON)-Objekt bereitgestellt.

> [!NOTE]
> Die Umwandlung eines Strings in ein natives Objekt wird _Deserialisierung_ genannt, während die Umwandlung eines nativen Objekts in einen String, damit es über das Netzwerk übertragen werden kann, _Serialisierung_ genannt wird.

Ein JSON-String kann in einer eigenen Datei gespeichert werden, die im Grunde nur eine Textdatei mit der Erweiterung `.json` und einem {{Glossary("MIME_type", "MIME-Typ")}} von `application/json` ist.

### JSON-Struktur

Wie oben beschrieben, ist JSON ein String, dessen Format der JavaScript-Objektliteral-Format sehr ähnlich ist.
Folgendes ist ein gültiger JSON-String, der ein Objekt darstellt.
Beachten Sie, dass es sich auch um ein gültiges JavaScript-Objektliteral handelt — nur mit einigen weiteren [Syntaxeinschränkungen](#json-syntaxeinschränkungen).

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

Wenn Sie dieses JSON in Ihr JavaScript-Programm als String laden, können Sie es in ein normales Objekt parsen und dann die Daten darin mit der gleichen Punkt-/Klammernotation, die wir im Artikel [JavaScript-Objektgrundlehren](/de/docs/Learn_web_development/Core/Scripting/Object_basics) untersucht haben, darauf zugreifen. Zum Beispiel:

```js
superHeroes.homeTown;
superHeroes.members[1].powers[2];
```

1. Zuerst haben wir den Variablennamen — `superHeroes`.
2. Darin wollen wir auf die Eigenschaft `members` zugreifen, also verwenden wir `.members`.
3. `members` enthält ein Array, das mit Objekten gefüllt ist. Wir wollen auf das zweite Objekt im Array zugreifen, also verwenden wir `[1]`.
4. Innerhalb dieses Objekts wollen wir auf die Eigenschaft `powers` zugreifen, also verwenden wir `.powers`.
5. In der Eigenschaft `powers` befindet sich ein Array, das die Superkräfte des ausgewählten Helden enthält. Wir wollen die dritte, also verwenden wir `[2]`.

Das wichtigste Fazit ist, dass es wirklich nichts Besonderes daran gibt, mit JSON zu arbeiten; nachdem Sie es in ein JavaScript-Objekt geparst haben, arbeiten Sie damit, als wäre es ein mit demselben Objektliteral-Syntax deklariertes Objekt.

> [!NOTE]
> Wir haben das oben gezeigte JSON in unserem [JSONTest.html](https://mdn.github.io/learning-area/javascript/oojs/json/JSONTest.html) Beispiel (siehe den [Quellcode](https://github.com/mdn/learning-area/blob/main/javascript/oojs/json/JSONTest.html)) in einer Variablen verfügbar gemacht.
> Versuchen Sie es zu laden und dann Daten innerhalb der Variablen über die JavaScript-Konsole Ihres Browsers abzurufen.

### Arrays als JSON

Oben haben wir erwähnt, dass der JSON-Text im Wesentlichen wie ein JavaScript-Objekt innerhalb eines Strings aussieht.
Wir können auch Arrays von/nach JSON konvertieren. Das untenstehende Beispiel ist völlig gültiges JSON:

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

Das JSON kann auch eine einzelne primitive enthalten. Zum Beispiel sind `29`, `"Dan Jukes"` oder `true` alle gültige JSON.

### JSON-Syntaxeinschränkungen

Wie bereits erwähnt, ist jedes JSON ein gültiges JavaScript-Literal (Objekt, Array, Zahl usw.). Das Gegenteil ist jedoch nicht der Fall — nicht alle JavaScript-Objektliterale sind gültiges JSON.

- JSON kann nur _serialisierbare_ Datentypen enthalten. Das bedeutet:
  - Für primitive Datentypen kann JSON Zeichenfolgenliterale, Zahlenliterale, `true`, `false` und `null` enthalten. Bemerkenswert ist, dass es `undefined`, `NaN` oder `Infinity` nicht enthalten kann.
  - Für nicht primitive Datentypen kann JSON Objektliterale und Arrays enthalten, aber keine Funktionen oder andere Objekttypen, wie `Date`, `Set` und `Map`. Die Objekte und Arrays innerhalb von JSON müssen weitere gültige JSON-Datentypen enthalten.
- Zeichenfolgen müssen in doppelte Anführungszeichen gesetzt werden, nicht in einfache.
- Zahlen müssen dezimal geschrieben sein.
- Jede Eigenschaft eines Objekts muss in der Form `"key": value` sein. Eigenschaftsnamen müssen Zeichenfolgenliterale in doppelten Anführungszeichen sein. Spezielle JavaScript-Syntax wie Methoden sind nicht erlaubt, weil Methoden Funktionen sind und Funktionen sind keine gültigen JSON-Datentypen.
- Objekte und Arrays dürfen keine [trailing commas](/de/docs/Web/JavaScript/Reference/Trailing_commas) enthalten.
- Kommentare sind in JSON nicht erlaubt.

Schon ein einziges falsch platziertes Komma oder Doppelpunkt kann eine JSON-Datei ungültig machen und dazu führen, dass sie fehlschlägt.
Sie sollten darauf achten, die Daten, die Sie verwenden möchten, zu validieren (obwohl computergeneriertes JSON weniger wahrscheinlich Fehler enthält, solange das Generatorprogramm korrekt arbeitet).
Sie können JSON mit einer Anwendung wie [JSONLint](https://jsonlint.com/) oder [JSON-validate](https://www.json-validate.com/) validieren.

> [!NOTE]
> Jetzt, da Sie diesen Abschnitt gelesen haben, möchten Sie Ihr Lernen vielleicht auch mit Scrimba's [JSON review](https://scrimba.com/frontend-path-c0j/~0lt?via=mdn) <sup>[_MDN Lernpartner_](/de/docs/MDN/Writing_guidelines/Learning_content#partner_links_and_embeds)</sup> interaktivem Tutorial ergänzen, das einige nützliche Anleitungen zur grundlegenden JSON-Syntax und zum Anzeigen von JSON-Anfragedaten in den Devtools Ihres Browsers bietet.

## Durcharbeiten eines JSON-Beispiels

Gehen wir also ein Beispiel durch, um zu zeigen, wie wir einige JSON-formatierte Daten auf einer Website nutzen könnten.

### Einstieg

Zunächst machen Sie lokale Kopien unserer [heroes.html](https://github.com/mdn/learning-area/blob/main/javascript/oojs/json/heroes.html) und [style.css](https://github.com/mdn/learning-area/blob/main/javascript/oojs/json/style.css) Dateien.
Letztere enthält einige einfache CSS zur Gestaltung unserer Seite, während die erstere einige sehr einfache Body-HTML enthält, plus ein {{HTMLElement("script")}}-Element, um den JavaScript-Code zu enthalten, den wir in dieser Übung schreiben werden:

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

Wir haben unsere JSON-Daten auf unserem GitHub unter <https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json> verfügbar gemacht.

Wir werden das JSON in unser Skript laden und einige nette DOM-Manipulationen nutzen, um es anzuzeigen, wie folgt:

![Bild eines Dokuments mit dem Titel "Super hero squad" (in einer eleganten Schriftart) und dem Untertitel "Hometown: Metro City // Formed: 2016". Drei Spalten unter der Überschrift tragen die Titel "Molecule Man", "Madame Uppercut" und "Eternal Flame". Jede Spalte listet den Geheimidentitätsnamen des Helden, das Alter und die Superkräfte auf.](json-superheroes.png)

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

Um das JSON zu erhalten, verwenden wir eine API namens [Fetch](/de/docs/Web/API/Fetch_API).
Diese API ermöglicht es uns, Netzwerkabfragen über JavaScript zu tätigen, um Ressourcen von einem Server abzurufen (z.B. Bilder, Text, JSON, sogar HTML-Snippets), was bedeutet, dass wir kleine Inhaltsabschnitte aktualisieren können, ohne die gesamte Seite neu zu laden.

In unserer Funktion verwenden die ersten vier Zeilen die Fetch-API, um das JSON vom Server abzurufen:

- Wir deklarieren die Variable `requestURL` um die GitHub-URL zu speichern.
- Wir verwenden die URL, um ein neues [`Request`](/de/docs/Web/API/Request)-Objekt zu initialisieren.
- Wir tätigen die Netzwerkabfrage mit der [`fetch()`](/de/docs/Web/API/Window/fetch)-Funktion, und dies gibt ein [`Response`](/de/docs/Web/API/Response)-Objekt zurück.
- Wir rufen die Antwort als JSON mit der [`json()`](/de/docs/Web/API/Response/json)-Funktion des `Response`-Objekts ab.

> [!NOTE]
> Die `fetch()` API ist **asynchron**. Sie können in unserem [Asynchrones JavaScript-Modul](/de/docs/Learn_web_development/Extensions/Async_JS) im Detail über asynchrone Funktionen lernen, aber vorerst sagen wir nur, dass wir das Schlüsselwort {{jsxref("Statements/async_function", "async")}} vor dem Namen der Funktion hinzufügen müssen, die die fetch API verwendet, und das Schlüsselwort {{jsxref("Operators/await", "await")}} vor den Aufrufen zu asynchronen Funktionen.

Nach alledem enthält die Variable `superHeroes` das JavaScript-Objekt basierend auf dem JSON. Wir übergeben dieses Objekt dann zwei Funktionsrufen — der erste füllt den `<header>` mit den korrekten Daten, während der zweite eine Informationskarte für jeden Helden im Team erstellt und sie in das `<section>` einfügt.

### Den Header befüllen

Nachdem wir die JSON-Daten abgerufen und in ein JavaScript-Objekt umgewandelt haben, nutzen wir es, indem wir die beiden oben genannten Funktionen schreiben. Fügen Sie zunächst die folgende Funktionsdefinition unter dem vorherigen Code hinzu:

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

Hier erstellen wir zuerst ein {{HTMLElement("Heading_Elements", "h1")}}-Element mit [`createElement()`](/de/docs/Web/API/Document/createElement), setzen dessen [`textContent`](/de/docs/Web/API/Node/textContent) auf den `squadName`-Eigenschaft des Objekts, und hängen es dann an den Header mit [`appendChild()`](/de/docs/Web/API/Node/appendChild) an. Dann führen wir eine sehr ähnliche Operation mit einem Absatz durch: wir erstellen ihn, setzen seinen Textinhalt und hängen ihn an den Header an. Der einzige Unterschied besteht darin, dass sein Text auf ein [Template Literal](/de/docs/Web/JavaScript/Reference/Template_literals) gesetzt wird, das sowohl die `homeTown`- als auch die `formed`-Eigenschaften des Objekts enthält.

### Erstellen der Heldeninformationskarten

Fügen Sie nun die folgende Funktion am unteren Rand des Codes hinzu, die die Superheldenkarten erstellt und anzeigt:

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

Zunächst speichern wir die `members`-Eigenschaft des JavaScript-Objekts in einer neuen Variable. Dieses Array enthält mehrere Objekte, die die Informationen für jeden Helden enthalten.

Als nächstes verwenden wir eine [`for...of` Schleife](/de/docs/Learn_web_development/Core/Scripting/Loops#the_for...of_loop), um durch jedes Objekt im Array zu iterieren. Für jedes Objekt:

1. Erstellen wir mehrere neue Elemente: ein `<article>`, ein `<h2>`, drei `<p>`s und ein `<ul>`.
2. Setzen wir das `<h2>`, um den aktuellen Heldennamen (`name`) zu enthalten.
3. Füllen wir die drei Absätze mit ihrem `secretIdentity`, `age` und einer Zeile mit "Superpowers:", um die Informationen in der Liste einzuleiten.
4. Speichern wir die `powers`-Eigenschaft in einer anderen neuen Konstante namens `superPowers` — diese enthält ein Array, das die Superkräfte des aktuellen Helden auflistet.
5. Verwenden wir eine weitere `for...of`-Schleife, um durch die Superkräfte des aktuellen Helden zu schleifen — für jede erstellen wir ein `<li>`-Element, setzen die Superkraft hinein, und fügen das `listItem` in das `<ul>`-Element (`myList`) mit `appendChild()` ein.
6. Der allerletzte Schritt besteht darin, das `<h2>`, die `<p>`s und das `<ul>` in das `<article>` (`myArticle`) einzufügen, und dann das `<article>` in das `<section>` einzufügen. Die Reihenfolge, in der die Elemente eingefügt werden, ist wichtig, da dies die Reihenfolge ist, in der sie im HTML angezeigt werden.

> [!NOTE]
> Wenn Sie Schwierigkeiten haben, das Beispiel zum Laufen zu bringen, versuchen Sie, auf unser [heroes-finished.html](https://github.com/mdn/learning-area/blob/main/javascript/oojs/json/heroes-finished.html) Quellcode (siehe auch das [live laufende](https://mdn.github.io/learning-area/javascript/oojs/json/heroes-finished.html) Beispiel) zurückzugreifen.

> [!NOTE]
> Wenn Sie Schwierigkeiten haben, der Punkt-/Klammernotation zu folgen, die wir verwenden, um auf das JavaScript-Objekt zuzugreifen, kann es hilfreich sein, die [superheroes.json](https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json) Datei in einem anderen Tab oder Ihrem Texteditor geöffnet zu haben, und darauf zu verweisen, während Sie sich unser JavaScript ansehen.
> Sie sollten auch unseren Artikel [JavaScript-Objektgrundlagen](/de/docs/Learn_web_development/Core/Scripting/Object_basics) für weitere Informationen zu Punkt- und Klammernotation einsehen.

### Aufrufen der Top-Level-Funktion

Schließlich müssen wir unsere Top-Level-`populate()`-Funktion aufrufen:

```js
populate();
```

## Konvertierung zwischen Objekten und Text

Das obige Beispiel war einfach in Bezug auf den Zugriff auf das JavaScript-Objekt, da wir die Netzwerkantwort direkt in ein JavaScript-Objekt mit `response.json()` umgewandelt haben.

Aber manchmal haben wir nicht so viel Glück — manchmal erhalten wir einen rohen JSON-String, und wir müssen ihn selbst in ein Objekt umwandeln. Und wenn wir ein JavaScript-Objekt über das Netzwerk senden möchten, müssen wir es vor dem Senden in JSON (einen String) umwandeln. Glücklicherweise sind diese beiden Probleme in der Webentwicklung so häufig, dass ein eingebautes [JSON](/de/docs/Web/JavaScript/Reference/Global_Objects/JSON)-Objekt in Browsern verfügbar ist, das die folgenden zwei Methoden enthält:

- [`parse()`](/de/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse): Akzeptiert einen JSON-String als Parameter und gibt das entsprechende JavaScript-Objekt zurück.
- [`stringify()`](/de/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify): Akzeptiert ein Objekt als Parameter und gibt den äquivalenten JSON-String zurück.

Sie können die erste Methode in Aktion in unserem [heroes-finished-json-parse.html](https://mdn.github.io/learning-area/javascript/oojs/json/heroes-finished-json-parse.html) Beispiel (siehe den [Quellcode](https://github.com/mdn/learning-area/blob/main/javascript/oojs/json/heroes-finished-json-parse.html)) sehen — es macht genau dasselbe wie das vorher aufgebaute Beispiel, außer dass:

- wir die Antwort als Text anstelle von JSON abrufen, indem wir die [`text()`](/de/docs/Web/API/Response/text)-Methode der Antwort aufrufen
- wir dann `parse()` verwenden, um den Text in ein JavaScript-Objekt zu konvertieren.

Das Schlüssel-Snippet des Codes ist hier:

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

Wie Sie vielleicht erraten haben, funktioniert `stringify()` in die entgegengesetzte Richtung. Versuchen Sie, die folgenden Zeilen einzeln in die JavaScript-Konsole Ihres Browsers einzugeben, um sie in Aktion zu sehen:

```js
let myObj = { name: "Chris", age: 38 };
myObj;
let myString = JSON.stringify(myObj);
myString;
```

Hier erstellen wir ein JavaScript-Objekt, überprüfen, was es enthält, konvertieren es mit `stringify()` in einen JSON-String — speichern den Rückgabewert in einer neuen Variablen — und überprüfen es dann erneut.

## Testen Sie Ihre Fähigkeiten!

Sie haben das Ende dieses Artikels erreicht, aber können Sie sich an die wichtigsten Informationen erinnern? Sie finden einige weitere Tests, um zu überprüfen, ob Sie diese Informationen behalten haben, bevor Sie weitermachen — siehe [Testen Sie Ihre Fähigkeiten: JSON](/de/docs/Learn_web_development/Core/Scripting/Test_your_skills/JSON).

## Zusammenfassung

In dieser Lektion haben wir Ihnen die Verwendung von JSON in Ihren Programmen vorgestellt, einschließlich der Erstellung und des Parsens von JSON und des Zugriffs auf die darin eingeschlossenen Daten. Im nächsten Artikel werden wir auf praktische Techniken zur Fehlerbehebung in JavaScript und zur Fehlerbehandlung eingehen.

## Siehe auch

- [JSON-Referenz](/de/docs/Web/JavaScript/Reference/Global_Objects/JSON)
- [Fetch API Überblick](/de/docs/Web/API/Fetch_API)
- [Verwendung von Fetch](/de/docs/Web/API/Fetch_API/Using_Fetch)
- [HTTP-Anfragemethoden](/de/docs/Web/HTTP/Reference/Methods)

{{PreviousMenuNext("Learn_web_development/Core/Scripting/Network_requests","Learn_web_development/Core/Scripting/Debugging_JavaScript", "Learn_web_development/Core/Scripting")}}
