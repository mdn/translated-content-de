---
title: Einführung in das DOM-Scripting
short-title: DOM scripting
slug: Learn_web_development/Core/Scripting/DOM_scripting
l10n:
  sourceCommit: 273e96b5d57d1fe5210756edb145688e0bb04d3b
---

{{PreviousMenuNext("Learn_web_development/Core/Scripting/Test_your_skills/Object_basics","Learn_web_development/Core/Scripting/Image_gallery", "Learn_web_development/Core/Scripting")}}

Beim Schreiben von Webseiten und Apps möchten Sie oft die Dokumentenstruktur in irgendeiner Weise ändern. Dies wird in der Regel durch die Manipulation des Document Object Model (DOM) über eine Reihe von integrierten Browser-APIs zur Steuerung von HTML- und Styling-Informationen erreicht. In diesem Artikel führen wir Sie in das **DOM-Scripting** ein.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>Ein Verständnis von <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a> und den <a href="/de/docs/Learn_web_development/Core/Styling_basics">Grundlagen von CSS</a>, sowie Vertrautheit mit den JavaScript-Grundlagen, wie in früheren Lektionen behandelt.</td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Was das DOM ist – die interne Repräsentation der HTML-Struktur des Dokuments im Browser als Hierarchie von Objekten.</li>
          <li>Die wichtigen Teile eines Webbrowsers, wie sie in JavaScript dargestellt werden — <code>Navigator</code>, <code>Window</code> und <code>Document</code>.</li>
          <li>Wie DOM-Knoten zueinander im DOM-Baum existieren — Wurzel, Elternteil, Kind, Geschwister und Nachkommen.</li>
          <li>Erhalten von Referenzen zu DOM-Knoten, Erstellen neuer Knoten, Hinzufügen und Entfernen von Knoten und Attributen.</li>
          <li>Manipulation von CSS-Stilen mit JavaScript.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Die wichtigen Teile eines Webbrowsers

Webbrowser sind sehr komplexe Softwarestücke mit vielen beweglichen Teilen, von denen viele nicht von einem Webentwickler mit JavaScript gesteuert oder manipuliert werden können. Sie könnten denken, dass solche Einschränkungen eine schlechte Sache sind, aber Browser sind aus guten Gründen gesperrt, die sich meist um Sicherheit drehen. Stellen Sie sich vor, wenn eine Website Zugang zu Ihren gespeicherten Passwörtern oder anderen sensiblen Informationen erhalten und sich als Sie selbst auf Websites einloggen könnte?

Trotz der Einschränkungen bieten Web-APIs dennoch Zugang zu vielen Funktionen, die es uns ermöglichen, eine Vielzahl von Dingen mit Webseiten zu tun. Es gibt ein paar wirklich offensichtliche Teile, auf die Sie regelmäßig in Ihrem Code verweisen — betrachten Sie das folgende Diagramm, das die Hauptteile eines Browsers darstellt, die direkt am Anzeigen von Webseiten beteiligt sind:

![Wichtige Teile des Webbrowsers; das Dokument ist die Webseite. Das Fenster umfasst das gesamte Dokument und auch den Tab. Der Navigator ist der Browser, der das Fenster (das das Dokument umfasst) und alle anderen Fenster einschließt.](document-window-navigator.png)

- Das **window** repräsentiert den Browser-Tab, in den eine Webseite geladen wird; dies wird in JavaScript durch das [`Window`](/de/docs/Web/API/Window)-Objekt dargestellt. Mit den auf diesem Objekt verfügbaren Methoden können Sie Dinge tun wie die Fenstergröße zurückgeben (siehe [`Window.innerWidth`](/de/docs/Web/API/Window/innerWidth) und [`Window.innerHeight`](/de/docs/Web/API/Window/innerHeight)), das in dieses Fenster geladene Dokument manipulieren, datenbezogene Daten auf der Client-Seite speichern (zum Beispiel mit einer lokalen Datenbank oder einem anderen Speichermechanismus), einen [Event-Handler](/de/docs/Learn_web_development/Core/Scripting/Events) an das aktuelle Fenster anhängen und mehr.
- Der **navigator** repräsentiert den Zustand und die Identität des Browsers, wie er im Web existiert. In JavaScript wird dies durch das [`Navigator`](/de/docs/Web/API/Navigator)-Objekt dargestellt. Sie können dieses Objekt verwenden, um Dinge wie die bevorzugte Sprache des Benutzers abzurufen, einen Datenstrom von der Webcam des Benutzers usw.
- Das **document** (repräsentiert durch das DOM in Browsern) ist die eigentliche in das Fenster geladene Seite und wird in JavaScript durch das [`Document`](/de/docs/Web/API/Document)-Objekt dargestellt. Sie können dieses Objekt verwenden, um Informationen zu HTML und CSS, die das Dokument umfassen, abzurufen und zu manipulieren, zum Beispiel eine Referenz zu einem Element im DOM zu erhalten, seinen Textinhalt zu ändern, neue Stile darauf anzuwenden, neue Elemente zu erstellen und sie dem aktuellen Element als Kinder hinzuzufügen oder es sogar vollständig zu löschen.

In diesem Artikel konzentrieren wir uns hauptsächlich auf die Manipulation des Dokuments, aber wir zeigen auch ein paar andere nützliche Dinge.

## Das Document Object Model

Lassen Sie uns einen kurzen Rückblick auf das Document Object Model (DOM) geben, das wir weiter vorne im Kurs bereits betrachtet haben. Das aktuell in jedem Ihrer Browser-Tabs geladene Dokument wird durch ein DOM dargestellt. Dies ist eine „Baumstruktur“-Repräsentation, die vom Browser erstellt wird, um den einfachen Zugriff auf die HTML-Struktur durch Programmiersprachen zu ermöglichen — zum Beispiel nutzt der Browser selbst es, um Styling und andere Informationen auf die richtigen Elemente anzuwenden, während er eine Seite rendert, und Entwickler wie Sie können das DOM mit JavaScript manipulieren, nachdem die Seite gerendert wurde.

> [!NOTE]
> Scrimbas [The Document Object Model](https://scrimba.com/learn-javascript-c0v/~0g?via=mdn) <sup>[_MDN Lernpartner_](/de/docs/MDN/Writing_guidelines/Learning_content#partner_links_and_embeds)</sup> bietet eine praktische Einführung in den Begriff „DOM“ und seine Bedeutung.

Wir haben eine Beispielseite unter [dom-example.html](https://github.com/mdn/learning-area/blob/main/javascript/apis/document-manipulation/dom-example.html) erstellt ([sehen Sie sich dies auch live an](https://mdn.github.io/learning-area/javascript/apis/document-manipulation/dom-example.html)). Versuchen Sie, dies in Ihrem Browser zu öffnen – es handelt sich um eine sehr einfache Seite, die ein {{htmlelement("section")}}-Element enthält, innerhalb dessen sich ein Bild und ein Absatz mit einem Link befinden. Der HTML-Quellcode sieht folgendermaßen aus:

```html
<!doctype html>
<html lang="en-US">
  <head>
    <meta charset="utf-8" />
    <title>Simple DOM example</title>
  </head>
  <body>
    <section>
      <img
        src="dinosaur.png"
        alt="A red Tyrannosaurus Rex: A two legged dinosaur
        standing upright like a human, with small arms, and a
        large head with lots of sharp teeth." />
      <p>
        Here we will add a link to the
        <a href="https://www.mozilla.org/">Mozilla homepage</a>
      </p>
    </section>
  </body>
</html>
```

Das DOM hingegen sieht so aus:

![Baumstruktur-Darstellung des Document Object Model: Der obere Knoten ist der Doctype und das HTML-Element. Kinderknoten des HTML umfassen head und body. Jedes Kindelement ist ein Zweig. Alle Texte, sogar Leerzeichen, werden ebenfalls angezeigt.](dom-screenshot.png)

> [!NOTE]
> Dieses DOM-Baumdiagramm wurde mit Ian Hicksons [Live DOM viewer](https://software.hixie.ch/utilities/js/live-dom-viewer/) erstellt.

Jeder Eintrag im Baum wird als **Knoten** bezeichnet. Sie können im obigen Diagramm sehen, dass einige Knoten Elemente darstellen (identifiziert als `HTML`, `HEAD`, `META` usw.) und andere Text darstellen (identifiziert als `#text`). Es gibt [auch andere Arten von Knoten](/de/docs/Web/API/Node/nodeType), aber dies sind die Haupttypen, denen Sie begegnen werden.

Knoten werden auch nach ihrer Position im Baum relativ zu anderen Knoten bezeichnet:

- **Wurzelknoten**: Der oberste Knoten im Baum, der im Fall von HTML immer der `HTML`-Knoten ist (andere Markup-Sprachen wie SVG und benutzerdefinierte XML haben verschiedene Wurzelelemente).
- **Kindknoten**: Ein Knoten, der _direkt_ innerhalb eines anderen Knotens liegt. Zum Beispiel ist `IMG` ein Kind von `SECTION` im obigen Beispiel.
- **Nachkommenknoten**: Ein Knoten, der sich _irgendwo_ innerhalb eines anderen Knotens befindet. Zum Beispiel ist `IMG` ein Kind von `SECTION` im obigen Beispiel und zugleich ein Nachkomme. `IMG` ist kein Kind von `BODY`, da es zwei Ebenen darunter im Baum liegt, aber es ist ein Nachkomme von `BODY`.
- **Elternknoten**: Ein Knoten, der einen anderen Knoten in sich hat. Zum Beispiel ist `BODY` der Elternknoten von `SECTION` im obigen Beispiel.
- **Geschwisterknoten**: Knoten, die auf derselben Ebene unter demselben Elternknoten im DOM-Baum liegen. Zum Beispiel sind `IMG` und `P` im obigen Beispiel Geschwister.

Es ist nützlich, sich mit dieser Terminologie vertraut zu machen, bevor Sie mit dem DOM arbeiten, da eine Reihe von Begriffen, die Sie im Code finden werden, sie verwenden. Sie begegnen ihnen auch in CSS (zum Beispiel: Nachkommen-Selektor, Kind-Selektor).

## Durchführung grundlegender DOM-Manipulationen

Um mit dem Lernen der DOM-Manipulation zu beginnen, starten wir mit einem praktischen Beispiel.

1. Nehmen Sie eine lokale Kopie der [dom-example.html Seite](https://github.com/mdn/learning-area/blob/main/javascript/apis/document-manipulation/dom-example.html) und des dazugehörigen [Bildes](https://github.com/mdn/learning-area/blob/main/javascript/apis/document-manipulation/dinosaur.png).
2. Fügen Sie ein `<script></script>`-Element direkt über dem abschließenden `</body>`-Tag hinzu.
3. Um ein Element im DOM zu manipulieren, müssen Sie es zunächst auswählen und eine Referenz darauf in einer Variablen speichern. Fügen Sie in Ihrem `script`-Element die folgende Zeile hinzu:

   ```js
   const link = document.querySelector("a");
   ```

4. Nun haben wir die Elementreferenz in einer Variablen gespeichert und können beginnen, sie mithilfe verfügbarer Eigenschaften und Methoden zu manipulieren (diese sind auf Schnittstellen wie [`HTMLAnchorElement`](/de/docs/Web/API/HTMLAnchorElement) im Falle von {{htmlelement("a")}}-Elementen, ihrer allgemeineren Elternschnittstelle [`HTMLElement`](/de/docs/Web/API/HTMLElement) und [`Node`](/de/docs/Web/API/Node) — die alle Knoten in einem DOM darstellt — definiert). Zuerst ändern wir den Text im Link, indem wir den Wert der [`Node.textContent`](/de/docs/Web/API/Node/textContent)-Eigenschaft aktualisieren. Fügen Sie die folgende Zeile unterhalb der vorherigen hinzu:

   ```js
   link.textContent = "Mozilla Developer Network";
   ```

5. Wir sollten auch die URL ändern, auf die der Link zeigt, damit er beim Klicken nicht an die falsche Stelle geht. Fügen Sie die folgende Zeile erneut am Ende hinzu:

   ```js
   link.href = "https://developer.mozilla.org";
   ```

Beachten Sie, dass es, wie bei vielen Dingen in JavaScript, viele Möglichkeiten gibt, ein Element auszuwählen und eine Referenz darauf in einer Variablen zu speichern. [`Document.querySelector()`](/de/docs/Web/API/Document/querySelector) ist der empfohlene moderne Ansatz. Es ist praktisch, weil Sie damit Elemente mithilfe von CSS-Selektoren auswählen können. Der obige `querySelector()`-Aufruf passt das erste im Dokument erscheinende {{htmlelement("a")}}-Element an. Wenn Sie mehrere Elemente auswählen und damit etwas tun möchten, könnten Sie [`Document.querySelectorAll()`](/de/docs/Web/API/Document/querySelectorAll) verwenden, das jedes im Dokument vorkommende Element auswählt, das mit dem Selektor übereinstimmt, und Referenzen darauf in einem [array-](/de/docs/Learn_web_development/Core/Scripting/Arrays)artigen Objekt namens [`NodeList`](/de/docs/Web/API/NodeList) speichert.

Es gibt ältere Methoden zum Abrufen von Elementreferenzen, wie:

- [`Document.getElementById()`](/de/docs/Web/API/Document/getElementById), das ein Element mit einem bestimmten `id`-Attributewert auswählt, z.B. `<p id="myId">Mein Absatz</p>`. Die ID wird als Parameter der Funktion übergeben, d.h. `const elementRef = document.getElementById('myId')`.
- [`Document.getElementsByTagName()`](/de/docs/Web/API/Document/getElementsByTagName), das ein array-ähnliches Objekt mit allen Elementen auf der Seite eines bestimmten Typs zurückgibt, etwa `<p>`s, `<a>`s usw. Der Elementtyp wird der Funktion als Parameter übergeben, d.h. `const elementRefArray = document.getElementsByTagName('p')`.

Diese beiden Methoden funktionieren in älteren Browsern besser als die modernen Methoden wie `querySelector()`, sind aber nicht so praktisch. Schauen Sie sich um und sehen, was Sie sonst noch finden können.

### Erstellen und Platzieren neuer Knoten

Das obige Beispiel hat Ihnen einen kleinen Vorgeschmack darauf gegeben, was Sie tun können, aber gehen wir weiter und schauen, wie wir neue Elemente erstellen können.

1. Gehen Sie zurück zu unserem aktuellen Beispiel. Lassen Sie uns zunächst eine Referenz auf unser {{htmlelement("section")}}-Element erhalten — fügen Sie den folgenden Code am Ende Ihres bestehenden Skripts hinzu (tun Sie dasselbe auch mit den anderen Zeilen):

   ```js
   const sect = document.querySelector("section");
   ```

2. Erstellen Sie nun mit [`Document.createElement()`](/de/docs/Web/API/Document/createElement) einen neuen Absatz und geben ihm Textinhalt in der gleichen Weise wie zuvor:

   ```js
   const para = document.createElement("p");
   para.textContent = "We hope you enjoyed the ride.";
   ```

3. Sie können den neuen Absatz jetzt mit [`Node.appendChild()`](/de/docs/Web/API/Node/appendChild) am Ende der Sektion hinzufügen:

   ```js
   sect.appendChild(para);
   ```

4. Schließlich für diesen Teil, fügen wir einen Textknoten zum Absatz hinzu, in dem der Link enthalten ist, um den Satz schön abzurunden. Zuerst erstellen wir den Textknoten mit [`Document.createTextNode()`](/de/docs/Web/API/Document/createTextNode):

   ```js
   const text = document.createTextNode(
     " — the premier source for web development knowledge.",
   );
   ```

5. Jetzt holen wir uns eine Referenz auf den Absatz, in dem der Link enthalten ist, und fügen den Textknoten hinzu:

   ```js
   const linkPara = document.querySelector("p");
   linkPara.appendChild(text);
   ```

Das ist das meiste, was Sie zum Hinzufügen von Knoten zum DOM benötigen — Sie werden diese Methoden häufig bei der Erstellung dynamischer Benutzeroberflächen verwenden (wir werden uns später ein paar Beispiele ansehen).

### Verschieben und Entfernen von Elementen

Es kann vorkommen, dass Sie Knoten verschieben oder vollständig aus dem DOM löschen möchten. Dies ist durchaus möglich.

Wenn wir den Absatz mit dem enthaltenen Link an das Ende der Sektion verschieben wollten, könnten wir dies tun:

```js
sect.appendChild(linkPara);
```

Dies verschiebt den Absatz an das Ende der Sektion. Sie könnten meinen, es würde eine zweite Kopie davon erstellen, aber das ist nicht der Fall — `linkPara` ist eine Referenz auf die eine und einzige Kopie dieses Absatzes. Wenn Sie eine Kopie erstellen und diese ebenfalls hinzufügen wollten, müssten Sie stattdessen [`Node.cloneNode()`](/de/docs/Web/API/Node/cloneNode) verwenden.

Das Entfernen eines Knotens ist ebenfalls recht einfach, zumindest wenn Sie eine Referenz auf den zu entfernenden Knoten und dessen Elternteil haben. In unserem aktuellen Fall verwenden wir einfach [`Node.removeChild()`](/de/docs/Web/API/Node/removeChild), so:

```js
sect.removeChild(linkPara);
```

Wenn Sie einen Knoten entfernen möchten, der nur auf eine Referenz zu sich selbst basiert, was ziemlich üblich ist, können Sie [`Element.remove()`](/de/docs/Web/API/Element/remove) verwenden:

```js
linkPara.remove();
```

Diese Methode wird in älteren Browsern nicht unterstützt. Sie haben keine Methode, um einem Knoten zu sagen, dass er sich selbst entfernen soll, sodass Sie Folgendes tun müssten:

```js
linkPara.parentNode.removeChild(linkPara);
```

Versuchen Sie, die obigen Zeilen zu Ihrem Code hinzuzufügen.

### Manipulation von Stilen

Es ist möglich, CSS-Stile auf verschiedene Arten über JavaScript zu manipulieren.

Zunächst können Sie eine Liste aller an ein Dokument angeschlossenen Stylesheets mit [`Document.styleSheets`](/de/docs/Web/API/Document/styleSheets) erhalten, das ein array-ähnliches Objekt mit [`CSSStyleSheet`](/de/docs/Web/API/CSSStyleSheet)-Objekten zurückgibt. Sie können dann nach Belieben Stile hinzufügen/entfernen. Wir werden auf diese Funktionen jedoch nicht näher eingehen, da sie eine etwas archaische und schwierige Möglichkeit darstellen, Styles zu manipulieren. Es gibt viel einfachere Möglichkeiten.

Die erste Möglichkeit besteht darin, Inline-Stile direkt auf die Elemente anzuwenden, die Sie dynamisch stylen möchten. Dies geschieht mit der [`HTMLElement.style`](/de/docs/Web/API/HTMLElement/style)-Eigenschaft, die Inline-Styling-Informationen für jedes Element im Dokument enthält. Sie können Eigenschaften dieses Objekts festlegen, um Stile für Elemente direkt zu aktualisieren.

1. Probieren Sie als Beispiel mal aus, diese Zeilen zu unserem laufenden Beispiel hinzuzufügen:

   ```js
   para.style.color = "white";
   para.style.backgroundColor = "black";
   para.style.padding = "10px";
   para.style.width = "250px";
   para.style.textAlign = "center";
   ```

2. Laden Sie die Seite neu, und Sie werden sehen, dass die Stile auf den Absatz angewendet wurden. Wenn Sie sich jenen Absatz im [Page Inspector/DOM inspector](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/index.html) Ihres Browsers ansehen, werden Sie feststellen, dass diese Zeilen tatsächlich Inline-Stile zum Dokument hinzufügen:

   ```html
   <p
     style="color: white; background-color: black; padding: 10px; width: 250px; text-align: center;">
     We hope you enjoyed the ride.
   </p>
   ```

> [!NOTE]
> Beachten Sie, dass die JavaScript-Eigenschaftsvarianten der CSS-Stile in {{Glossary("camel_case", "Lower Camel Case")}} geschrieben sind, während die CSS-Versionen durch Bindestriche getrennt sind ({{Glossary("kebab_case", "Kebab-Case")}}) (z.B. `backgroundColor` gegenüber `background-color`). Stellen Sie sicher, dass Sie diese nicht verwechseln, sonst funktioniert es nicht.

Es gibt eine weitere gängige Möglichkeit, Stile in Ihrem Dokument dynamisch zu manipulieren: Schreiben Sie die Stile in ein separates Stylesheet und verweisen Sie auf diese Stile, indem Sie einen Klassennamen hinzufügen/entfernen.

1. Löschen Sie die vorhergehenden fünf Zeilen, die Sie zum JavaScript hinzugefügt haben.
2. Fügen Sie das Folgende in Ihr HTML-{{htmlelement("head")}} ein:

   ```html
   <style>
     .highlight {
       color: white;
       background-color: black;
       padding: 10px;
       width: 250px;
       text-align: center;
     }
   </style>
   ```

3. Um diesen Klassennamen zu Ihrem Element hinzuzufügen, verwenden Sie die `classList` des Elements und die Methode `add()`:

   ```js
   para.classList.add("highlight");
   ```

4. Aktualisieren Sie die Seite, und Sie werden keine Änderung sehen — die CSS ist immer noch auf den Paragraphen angewendet, aber diesmal, indem ihm eine Klasse gegeben wird, die von unserer CSS-Regel ausgewählt wird, nicht als Inline-CSS-Stile.

Welche Methode Sie wählen, bleibt Ihnen überlassen; beide haben ihre Vor- und Nachteile. Die erste Methode erfordert weniger Einrichtungsschritte und ist gut für einfache Anwendungen geeignet. Die zweite Methode ist mehr puristisch (keine Mischung von CSS und JavaScript, keine Inline-Stile, die als schlechte Praxis angesehen werden). Wenn Sie anfangen, größere und komplexere Anwendungen zu entwickeln, werden Sie wahrscheinlich öfter die zweite Methode verwenden, aber letztlich bleibt es Ihnen überlassen.

An dieser Stelle haben wir noch nichts wirklich Nützliches getan! Es macht keinen Sinn, JavaScript zu nutzen, um statische Inhalte zu erstellen — Sie könnten sie genauso gut direkt in Ihr HTML schreiben und JavaScript nicht verwenden. Es ist komplexer als HTML, und die Erstellung Ihres Inhalts mit JavaScript hat auch andere Probleme (wie zum Beispiel, dass sie nicht von Suchmaschinen gelesen werden können).

Im nächsten Abschnitt betrachten wir eine praktischere Nutzung von DOM-APIs.

> [!NOTE]
> Sie finden unsere [fertige Version des dom-example.html](https://github.com/mdn/learning-area/blob/main/javascript/apis/document-manipulation/dom-example-manipulated.html) Demos auf GitHub ([sehen Sie es sich auch live an](https://mdn.github.io/learning-area/javascript/apis/document-manipulation/dom-example-manipulated.html)).

## Erstellung einer dynamischen Einkaufsliste

In dieser Übung möchten wir, dass Sie eine dynamische Einkaufsliste erstellen, die es Ihnen ermöglicht, Elemente mithilfe eines Formulareingabefeldes und eines Knopfes hinzuzufügen. Nachdem Sie einen Gegenstand in das Eingabefeld eingetippt haben und den Knopf oder die <kbd>Enter</kbd>-Taste gedrückt haben, sollte Folgendes passieren:

- Der Artikel sollte in der Liste erscheinen.
- Jedes Element sollte einen Button neben sich haben, der das Element beim Anklicken aus der Liste entfernt.
- Die Eingabefelder sollten gelöscht und fokussiert werden, damit der nächste Eintrag gemacht werden kann.

Das fertige Demo wird ungefähr wie folgt aussehen — probieren Sie es aus, bevor Sie es bauen!

```html hidden live-sample___dynamic-shopping-list
<h1>My shopping list</h1>

<form>
  <label for="item">Enter a new item:</label>
  <input type="text" name="item" id="item" />
  <button>Add item</button>
</form>

<ul></ul>
```

```css hidden live-sample___dynamic-shopping-list
li {
  margin-bottom: 10px;
}

li button {
  font-size: 12px;
  margin-left: 20px;
}
```

```js hidden live-sample___dynamic-shopping-list
const list = document.querySelector("ul");
const input = document.querySelector("input");
const button = document.querySelector("button");

button.addEventListener("click", (event) => {
  event.preventDefault();

  const myItem = input.value;
  input.value = "";

  const listItem = document.createElement("li");
  const listText = document.createElement("span");
  const listBtn = document.createElement("button");

  listItem.appendChild(listText);
  listText.textContent = myItem;
  listItem.appendChild(listBtn);
  listBtn.textContent = "Delete";
  list.appendChild(listItem);

  listBtn.addEventListener("click", () => {
    list.removeChild(listItem);
  });

  input.focus();
});
```

{{EmbedLiveSample("dynamic-shopping-list", "100%", 300)}}

Um die Übung abzuschließen, folgen Sie den unten stehenden Schritten und stellen Sie sicher, dass sich die Liste wie beschrieben verhält.

1. Laden Sie zunächst eine Kopie unserer [shopping-list.html](https://github.com/mdn/learning-area/blob/main/javascript/apis/document-manipulation/shopping-list.html) Ausgangsdatei herunter und erstellen Sie eine Kopie davon an einem beliebigen Ort. Sie werden sehen, dass sie etwas minimal CSS enthält, ein Formular mit einem Label, Eingabe- und Knopf-Elementen, einer leeren Liste und einem {{htmlelement("script")}}-Element. Alle Ihre Ergänzungen werden Sie innerhalb des Scripts vornehmen.
2. Erstellen Sie drei Variablen, die Referenzen auf die Liste ({{htmlelement("ul")}}), das {{htmlelement("input")}} und das {{htmlelement("button")}}-Element speichern.
3. Erstellen Sie eine [Funktion](/de/docs/Learn_web_development/Core/Scripting/Functions), die als Reaktion auf das Klicken auf den Button ausgeführt wird.
4. Rufen Sie als Erstes im Funktionskörper [`preventDefault()`](/de/docs/Web/API/Event/preventDefault) auf. Da die Eingabe in einem Formularelement eingeschlossen ist, wird durch Drücken der <kbd>Enter</kbd>-Taste das Formular ausgelöst, um es zu übermitteln. Der Aufruf von `preventDefault()` verhindert, dass das Formular die Seite aktualisiert, sodass ein neuer Artikel stattdessen zur Liste hinzugefügt werden kann.
5. Speichern Sie als Nächstes den aktuellen [Wert](/de/docs/Web/API/HTMLInputElement/value) der Eingabe in einer Variablen.
6. Löschen Sie dann das Eingabeelement, indem Sie seinen Wert auf eine leere Zeichenkette (`""`) setzen.
7. Erstellen Sie drei neue Elemente — ein Listenelement ({{htmlelement('li')}}), ein {{htmlelement('span')}} und einen {{htmlelement('button')}} — und speichern Sie sie in Variablen.
8. Fügen Sie das Span- und Button-Element als Kinder des Listenelements hinzu.
9. Setzen Sie den Textinhalt des Span-Elements auf den Eingabewert, den Sie zuvor gespeichert haben, und setzen Sie den Textinhalt des Buttons auf `Delete`.
10. Fügen Sie das Listenelement zur Liste hinzu.
11. Geben Sie einen Event-Handler an den **Delete**-Button, sodass beim Klicken darauf das gesamte Listenelement (`<li>...</li>`) entfernt wird.
12. Verwenden Sie schließlich die [`focus()`](/de/docs/Web/API/HTMLElement/focus)-Methode, um das Eingabeelement zu fokussieren, sodass es bereit ist, den nächsten Einkaufslisteintrag einzugeben.

## Zusammenfassung

Wir haben das Ende unseres Studiums der Dokument- und DOM-Manipulation erreicht. An diesem Punkt sollten Sie verstehen, welche die wichtigen Teile eines Webbrowsers im Hinblick auf die Steuerung von Dokumenten und anderen Aspekten der Web-Erfahrung des Benutzers sind. Am wichtigsten ist, dass Sie wissen, was das Document Object Model ist und wie man es manipulieren kann, um nützliche Funktionalitäten zu erstellen.

## Siehe auch

- Es gibt viele weitere Funktionen, die Sie verwenden können, um Ihre Dokumente zu manipulieren. Schauen Sie sich einige unserer Referenzen an und sehen Sie, was Sie entdecken können:
  - [`Document`](/de/docs/Web/API/Document)
  - [`Window`](/de/docs/Web/API/Window)
  - [`Node`](/de/docs/Web/API/Node)
  - [`HTMLElement`](/de/docs/Web/API/HTMLElement), [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement), [`HTMLImageElement`](/de/docs/Web/API/HTMLImageElement), usw.
- [DOM Scripting](https://explainers.dev/dom-scripting/), explainers.dev

{{PreviousMenuNext("Learn_web_development/Core/Scripting/Test_your_skills/Object_basics","Learn_web_development/Core/Scripting/Image_gallery", "Learn_web_development/Core/Scripting")}}
