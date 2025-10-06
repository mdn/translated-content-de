---
title: Einführung in das DOM-Scripting
short-title: DOM scripting
slug: Learn_web_development/Core/Scripting/DOM_scripting
l10n:
  sourceCommit: a4eaf35bc1b50903629f0dddb1962341d3bec686
---

{{PreviousMenuNext("Learn_web_development/Core/Scripting/Test_your_skills/Object_basics","Learn_web_development/Core/Scripting/Image_gallery", "Learn_web_development/Core/Scripting")}}

Beim Schreiben von Webseiten und Apps ist eine der häufigsten Aufgaben, die Dokumentstruktur in irgendeiner Weise zu verändern. Dies geschieht in der Regel durch Manipulation des Document Object Model (DOM) über eine Reihe von eingebauten Browser-APIs zur Steuerung von HTML- und Stil-Informationen. In diesem Artikel führen wir Sie in das **DOM-Scripting** ein.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>Ein Verständnis von <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a> und den <a href="/de/docs/Learn_web_development/Core/Styling_basics">Grundlagen von CSS</a>, sowie Vertrautheit mit den JavaScript-Grundlagen, die in früheren Lektionen behandelt wurden.</td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Was das DOM ist — die interne Darstellung der HTML-Struktur des Dokuments als Hierarchie von Objekten im Browser.</li>
          <li>Die wichtigen Teile eines Webbrowsers, wie sie in JavaScript dargestellt werden — <code>Navigator</code>, <code>Window</code> und <code>Document</code>.</li>
          <li>Wie DOM-Knoten relativ zueinander im DOM-Baum existieren — Wurzel, Elternteil, Kind, Geschwister und Nachkommen.</li>
          <li>Wie man Referenzen zu DOM-Knoten erhält, neue Knoten erstellt, Knoten und Attribute hinzufügt und entfernt.</li>
          <li>Wie man CSS-Stile mit JavaScript manipuliert.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Die wichtigen Teile eines Webbrowsers

Web-Browser sind sehr komplizierte Softwarestücke mit vielen beweglichen Teilen, von denen viele nicht von einem Webentwickler mit JavaScript gesteuert oder manipuliert werden können. Sie könnten denken, dass solche Einschränkungen etwas Schlechtes sind, aber Browser sind aus guten Gründen, größtenteils aus Sicherheitsgründen, gesperrt. Stellen Sie sich vor, eine Website könnte Zugang zu Ihren gespeicherten Passwörtern oder anderen sensiblen Informationen erhalten und sich als Sie in Websites einloggen?

Trotz der Einschränkungen geben uns Web-APIs dennoch Zugriff auf viele Funktionen, die uns ermöglichen, eine Vielzahl von Dingen mit Webseiten zu tun. Es gibt einige wirklich offensichtliche Teile, auf die Sie regelmäßig in Ihrem Code zugreifen werden — betrachten Sie das folgende Diagramm, das die Hauptteile eines Browsers darstellt, die direkt in das Betrachten von Webseiten involviert sind:

![Wichtige Teile des Webbrowsers; Das Dokument ist die Webseite. Das Fenster umfasst das gesamte Dokument und auch den Tab. Der Navigator ist der Browser, der das Fenster (welches das Dokument umfasst) und alle anderen Fenster enthält.](document-window-navigator.png)

- Das **Fenster** repräsentiert den Browsertab, in den eine Webseite geladen wird; Dies wird in JavaScript durch das [`Window`](/de/docs/Web/API/Window)-Objekt dargestellt. Mit den auf diesem Objekt verfügbaren Methoden können Sie Dinge wie die Rückgabe der Fenstergröße tun (siehe [`Window.innerWidth`](/de/docs/Web/API/Window/innerWidth) und [`Window.innerHeight`](/de/docs/Web/API/Window/innerHeight)), das in diesem Fenster geladene Dokument manipulieren, spezifische Daten zu diesem Dokument auf der Clientseite speichern (zum Beispiel mit einer lokalen Datenbank oder einem anderen Speichermedium), einen [Ereignishandler](/de/docs/Learn_web_development/Core/Scripting/Events) an das aktuelle Fenster anhängen und mehr.
- Der **Navigator** repräsentiert den Zustand und die Identität des Browsers, wie er im Web existiert. In JavaScript wird dies durch das [`Navigator`](/de/docs/Web/API/Navigator)-Objekt dargestellt. Sie können dieses Objekt verwenden, um Dinge wie die bevorzugte Sprache des Benutzers zu erhalten, einen Medienstream von der Webcam des Benutzers usw.
- Das **Dokument** (im Browser durch das DOM dargestellt) ist die tatsächliche Seite, die im Fenster geladen ist, und wird in JavaScript durch das [`Document`](/de/docs/Web/API/Document)-Objekt dargestellt. Sie können dieses Objekt verwenden, um Informationen über das HTML und CSS, das das Dokument bildet, zurückzugeben und zu manipulieren; Beispielsweise eine Referenz auf ein Element im DOM bekommen, dessen Textinhalt ändern, neue Stile darauf anwenden, neue Elemente erstellen und diese dem aktuellen Element als Kinder hinzufügen oder sogar vollständig löschen.

In diesem Artikel konzentrieren wir uns hauptsächlich auf die Manipulation des Dokuments, aber wir zeigen einige andere nützliche Dinge nebenbei.

## Das Document Object Model

Lassen Sie uns einen kurzen Rückblick auf das Document Object Model (DOM) geben, das wir bereits früher im Kurs betrachtet haben. Das in jedem Ihrer Browsertabs aktuell geladene Dokument wird durch ein DOM dargestellt. Dies ist eine "Baumstruktur"-Darstellung, die vom Browser erstellt wird und es ermöglicht, dass die HTML-Struktur leicht von Programmiersprachen aus zugänglich ist — beispielsweise verwendet der Browser es selbst, um Stile und andere Informationen auf die korrekten Elemente anzuwenden, während er eine Seite rendert, und Entwickler wie Sie können das DOM mit JavaScript nach dem Rendern der Seite manipulieren.

> [!NOTE]
> Scrimbas [The Document Object Model](https://scrimba.com/learn-javascript-c0v/~0g?via=mdn) <sup>[_MDN-Partner für Lernen_](/de/docs/MDN/Writing_guidelines/Learning_content#partner_links_and_embeds)</sup> bietet eine nützliche Einführung in den Begriff "DOM" und dessen Bedeutung.

Wir haben eine Beispielseite unter [dom-example.html](https://github.com/mdn/learning-area/blob/main/javascript/apis/document-manipulation/dom-example.html) erstellt ([siehe auch live](https://mdn.github.io/learning-area/javascript/apis/document-manipulation/dom-example.html)). Versuchen Sie, dies in Ihrem Browser zu öffnen — es ist eine sehr einfache Seite mit einem {{htmlelement("section")}}-Element, in dem Sie ein Bild und einen Absatz mit einem Link darin finden. Der HTML-Quellcode sieht so aus:

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

![Baumstruktur-Darstellung des Document Object Model: Der oberste Knoten ist der Doctype und das HTML-Element. Kindknoten des HTML enthalten head und body. Jedes Kindelement ist ein Zweig. Auch aller Text, sogar Leerzeichen, wird angezeigt.](dom-screenshot.png)

> [!NOTE]
> Dieses DOM-Baumdiagramm wurde mit Ian Hicksons [Live DOM viewer](https://software.hixie.ch/utilities/js/live-dom-viewer/) erstellt.

Jeder Eintrag im Baum wird als **Knoten** bezeichnet. Sie können auf dem obigen Diagramm sehen, dass einige Knoten Elemente darstellen (erkennbar als `HTML`, `HEAD`, `META` usw.) und andere Text (als `#text` erkennbar). Es gibt [auch andere Arten von Knoten](/de/docs/Web/API/Node/nodeType), aber dies sind die Haupttypen, denen Sie begegnen werden.

Knoten werden auch nach ihrer Position im Baum relativ zu anderen Knoten bezeichnet:

- **Wurzelknoten**: Der oberste Knoten im Baum, der im Fall von HTML immer der `HTML`-Knoten ist (andere Markup-Vokabulare wie SVG und benutzerdefiniertes XML haben unterschiedliche Wurzelelemente).
- **Kindknoten**: Ein Knoten _direkt_ innerhalb eines anderen Knotens. Zum Beispiel ist `IMG` ein Kind von `SECTION` im obigen Beispiel.
- **Nachkommensknoten**: Ein Knoten _irgendwo_ innerhalb eines anderen Knotens. Zum Beispiel ist `IMG` ein Kind von `SECTION` im obigen Beispiel und ist auch ein Nachkomme. `IMG` ist kein Kind von `BODY`, da es zwei Ebenen darunter im Baum liegt, aber es ist ein Nachkomme von `BODY`.
- **Elternknoten**: Ein Knoten, der einen anderen Knoten innerhalb hat. Zum Beispiel ist `BODY` der Elternknoten von `SECTION` im obigen Beispiel.
- **Geschwisterknoten**: Knoten, die sich auf derselben Ebene unter demselben Elternknoten im DOM-Baum befinden. Zum Beispiel sind `IMG` und `P` Geschwister im obigen Beispiel.

Es ist nützlich, sich mit dieser Terminologie vertraut zu machen, bevor Sie mit dem DOM arbeiten, da viele der Ihnen begegneten Codebegriffe diese verwenden. Diese werden Ihnen auch in CSS begegnen (z. B. Nachkommenselektor, Kindselektor).

## Einfache DOM-Manipulation durchführen

Um mit der DOM-Manipulation zu beginnen, starten wir mit einem praktischen Beispiel.

1. Erstellen Sie eine lokale Kopie der [dom-example.html-Seite](https://github.com/mdn/learning-area/blob/main/javascript/apis/document-manipulation/dom-example.html) und des dazugehörigen [Bildes](https://github.com/mdn/learning-area/blob/main/javascript/apis/document-manipulation/dinosaur.png).
2. Fügen Sie ein `<script></script>`-Element direkt über dem schließenden `</body>`-Tag ein.
3. Um ein Element im DOM zu manipulieren, müssen Sie es zuerst auswählen und eine Referenz darauf in einer Variablen speichern. Fügen Sie in Ihrem Skriptelement die folgende Zeile hinzu:

   ```js
   const link = document.querySelector("a");
   ```

4. Da wir nun die Elementreferenz in einer Variablen gespeichert haben, können wir beginnen, sie mithilfe von Eigenschaften und Methoden zu manipulieren, die dafür verfügbar sind (diese sind in Schnittstellen wie [`HTMLAnchorElement`](/de/docs/Web/API/HTMLAnchorElement) im Fall von {{htmlelement("a")}}-Elementen, ihrer allgemeineren Elternschnittstelle [`HTMLElement`](/de/docs/Web/API/HTMLElement) und [`Node`](/de/docs/Web/API/Node) definiert — die alle Knoten in einem DOM repräsentiert). Lassen Sie uns zuerst den Text innerhalb des Links ändern, indem wir den Wert der Eigenschaft [`Node.textContent`](/de/docs/Web/API/Node/textContent) aktualisieren. Fügen Sie die folgende Zeile unter die vorherige hinzu:

   ```js
   link.textContent = "Mozilla Developer Network";
   ```

5. Wir sollten auch die URL ändern, auf die der Link zeigt, damit er beim Klicken nicht an den falschen Ort führt. Fügen Sie die folgende Zeile erneut am unteren Ende hinzu:

   ```js
   link.href = "https://developer.mozilla.org";
   ```

Beachten Sie, dass es, wie bei vielen Dingen in JavaScript, viele Möglichkeiten gibt, ein Element auszuwählen und eine Referenz darauf in einer Variablen zu speichern. [`Document.querySelector()`](/de/docs/Web/API/Document/querySelector) ist der empfohlene moderne Ansatz. Es ist praktisch, weil es Ihnen ermöglicht, Elemente mithilfe von CSS-Selektoren auszuwählen. Der obige `querySelector()`-Aufruf wird das erste {{htmlelement("a")}}-Element auswählen, das im Dokument erscheint. Wenn Sie mehrere Elemente auswählen und etwas mit ihnen tun wollten, könnten Sie [`Document.querySelectorAll()`](/de/docs/Web/API/Document/querySelectorAll) verwenden, das jedes Element im Dokument auswählt, das dem Selektor entspricht, und Referenzen darauf in einem [array](/de/docs/Learn_web_development/Core/Scripting/Arrays)-ähnlichen Objekt namens [`NodeList`](/de/docs/Web/API/NodeList) speichert.

Es gibt ältere Methoden zum Greifen von Elementreferenzen, wie:

- [`Document.getElementById()`](/de/docs/Web/API/Document/getElementById), das ein Element mit einem gegebenen `id`-Attributwert auswählt, z. B. `<p id="myId">Mein Paragraf</p>`. Die ID wird an die Funktion als Parameter übergeben, z. B. `const elementRef = document.getElementById('myId')`.
- [`Document.getElementsByTagName()`](/de/docs/Web/API/Document/getElementsByTagName), das ein array-ähnliches Objekt zurückgibt, das alle Elemente auf der Seite eines bestimmten Typs enthält, zum Beispiel `<p>`s, `<a>`s, etc. Der Elementtyp wird an die Funktion als Parameter übergeben, z. B. `const elementRefArray = document.getElementsByTagName('p')`.

Diese beiden funktionieren besser in älteren Browsern als die modernen Methoden wie `querySelector()`, sind jedoch nicht so praktisch. Schauen Sie sich um und sehen Sie, was Sie noch finden können!

### Erstellen und Platzieren neuer Knoten

Das obige hat Ihnen einen kleinen Vorgeschmack auf das gegeben, was Sie tun können, aber lassen Sie uns weitergehen und uns ansehen, wie wir neue Elemente erstellen können.

1. Gehen Sie zurück zu unserem aktuellen Beispiel und beginnen Sie damit, eine Referenz auf unser {{htmlelement("section")}}-Element zu bekommen — fügen Sie den folgenden Code am Ende Ihres existierenden Scripts hinzu (tun Sie das Gleiche auch mit den anderen Zeilen):

   ```js
   const sect = document.querySelector("section");
   ```

2. Erstellen wir nun einen neuen Absatz mithilfe von [`Document.createElement()`](/de/docs/Web/API/Document/createElement) und geben ihm etwas Textinhalt auf die gleiche Weise wie zuvor:

   ```js
   const para = document.createElement("p");
   para.textContent = "We hope you enjoyed the ride.";
   ```

3. Sie können den neuen Absatz jetzt am Ende des Bereichs mithilfe von [`Node.appendChild()`](/de/docs/Web/API/Node/appendChild) anhängen:

   ```js
   sect.appendChild(para);
   ```

4. Schließlich fügen wir einen Textknoten zum Absatz hinzu, in dem sich der Link befindet, um den Satz schön abzuschließen. Erst erstellen wir den Textknoten mit [`Document.createTextNode()`](/de/docs/Web/API/Document/createTextNode):

   ```js
   const text = document.createTextNode(
     " — the premier source for web development knowledge.",
   );
   ```

5. Danach holen wir uns eine Referenz auf den Absatz, in dem sich der Link befindet, und fügen den Textknoten hinzu:

   ```js
   const linkPara = document.querySelector("p");
   linkPara.appendChild(text);
   ```

Das ist das meiste, was Sie brauchen, um Knoten zum DOM hinzuzufügen — Sie werden diese Methoden viel verwenden, wenn Sie dynamische Schnittstellen erstellen (wir werden später einige Beispiele betrachten).

### Verschieben und Entfernen von Elementen

Es kann vorkommen, dass Sie Knoten verschieben oder vollständig aus dem DOM löschen möchten. Dies ist durchaus möglich.

Wenn wir den Absatz mit dem darin befindlichen Link an das Ende des Bereichs verschieben wollten, könnten wir dies tun:

```js
sect.appendChild(linkPara);
```

Dies verschiebt den Absatz nach unten ans Ende des Bereichs. Sie könnten gedacht haben, dass es eine zweite Kopie davon erstellt, aber das ist nicht der Fall — `linkPara` ist eine Referenz auf die einzige Kopie dieses Absatzes. Wenn Sie eine Kopie erstellen und diese auch hinzufügen wollten, müssten Sie stattdessen [`Node.cloneNode()`](/de/docs/Web/API/Node/cloneNode) verwenden.

Das Entfernen eines Knotens ist ebenfalls ziemlich einfach, zumindest wenn Sie eine Referenz auf den zu entfernenden Knoten und dessen Eltern haben. In unserem aktuellen Fall verwenden wir einfach [`Node.removeChild()`](/de/docs/Web/API/Node/removeChild), wie folgt:

```js
sect.removeChild(linkPara);
```

Wenn Sie einen Knoten entfernen möchten, basierend nur auf einer Referenz auf sich selbst, was ziemlich häufig vorkommt, können Sie [`Element.remove()`](/de/docs/Web/API/Element/remove) verwenden:

```js
linkPara.remove();
```

Diese Methode wird in älteren Browsern nicht unterstützt. Sie haben keine Methode, um einem Knoten zu sagen, sich selbst zu entfernen, daher müssten Sie Folgendes tun:

```js
linkPara.parentNode.removeChild(linkPara);
```

Versuchen Sie, die obigen Zeilen zu Ihrem Code hinzuzufügen.

### Manipulation von Stilen

Es ist möglich, CSS-Stile auf verschiedene Weise über JavaScript zu manipulieren.

Zuerst können Sie eine Liste aller Stylesheets erhalten, die mit einem Dokument verbunden sind, indem Sie [`Document.styleSheets`](/de/docs/Web/API/Document/styleSheets) verwenden, das ein array-ähnliches Objekt mit [`CSSStyleSheet`](/de/docs/Web/API/CSSStyleSheet)-Objekten zurückgibt. Sie können dann nach Belieben Stile hinzufügen/entfernen. Wir werden jedoch nicht auf diese Funktionen eingehen, da sie eine etwas archaische und schwierige Methode zur Manipulation von Stilen darstellen. Es gibt viel einfachere Wege.

Der erste Weg ist das Hinzufügen von Inline-Stilen direkt auf die Elemente, die Sie dynamisch stylen möchten. Dies geschieht mit der [`HTMLElement.style`](/de/docs/Web/API/HTMLElement/style)-Eigenschaft, die Inline-Stilinformationen für jedes Element im Dokument enthält. Sie können Eigenschaften dieses Objekts setzen, um Stile direkt zu aktualisieren.

1. Fügen Sie als Beispiel diese Zeilen zu unserem laufenden Beispiel hinzu:

   ```js
   para.style.color = "white";
   para.style.backgroundColor = "black";
   para.style.padding = "10px";
   para.style.width = "250px";
   para.style.textAlign = "center";
   ```

2. Laden Sie die Seite neu und Sie werden sehen, dass die Stile auf den Absatz angewendet wurden. Wenn Sie sich diesen Absatz im [Page Inspector/DOM Inspector](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/index.html) Ihres Browsers ansehen, werden Sie sehen, dass diese Zeilen tatsächlich Inline-Stile zum Dokument hinzufügen:

   ```html
   <p
     style="color: white; background-color: black; padding: 10px; width: 250px; text-align: center;">
     We hope you enjoyed the ride.
   </p>
   ```

> [!NOTE]
> Beachten Sie, wie die JavaScript-Versionen der CSS-Stile in {{Glossary("camel_case", "lower camel case")}} geschrieben sind, während die CSS-Versionen mit Bindestrichen versehen sind ({{Glossary("kebab_case", "kebab-case")}}) (z. B. `backgroundColor` versus `background-color`). Stellen Sie sicher, dass Sie diese nicht verwechseln, da es sonst nicht funktioniert.

Es gibt eine weitere gängige Methode, um Stile auf Ihrem Dokument dynamisch zu manipulieren, nämlich die Stile in einem separaten Stylesheet zu schreiben und diese Stile zu referenzieren, indem Sie einen Klassennamen hinzufügen/entfernen.

1. Löschen Sie die vorherigen fünf Zeilen, die Sie dem JavaScript hinzugefügt haben.
2. Fügen Sie das Folgende in Ihr HTML-{{htmlelement("head")}}-Element ein:

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

3. Um diesen Klassennamen zu Ihrem Element hinzuzufügen, verwenden Sie die `add()`-Methode des [`classList`](/de/docs/Web/API/Element/classList) des Elements:

   ```js
   para.classList.add("highlight");
   ```

4. Laden Sie Ihre Seite neu, und Sie werden keinen Unterschied sehen — der CSS ist weiterhin auf den Absatz angewendet, aber diesmal indem er ihm eine Klasse gibt, die von unserer CSS-Regel ausgewählt wird, nicht als Inline-CSS-Stile.

Welche Methode Sie wählen, bleibt Ihnen überlassen; beide haben ihre Vor- und Nachteile. Die erste Methode benötigt weniger Setup und ist für einfache Anwendungen geeignet, während die zweite Methode puristischer ist (kein Mischen von CSS und JavaScript, keine Inline-Stile, die als schlechte Praxis gelten). Wenn Sie beginnen, größere und komplexere Apps zu erstellen, werden Sie wahrscheinlich die zweite Methode mehr verwenden, aber letztendlich liegt es an Ihnen.

An diesem Punkt haben wir noch nichts wirklich Nützliches getan! Es gibt keinen Grund, JavaScript zu verwenden, um statischen Inhalt zu erstellen — Sie könnten ihn genauso gut in Ihrem HTML schreiben und kein JavaScript verwenden. Es ist komplexer als HTML, und das Erstellen Ihres Inhalts mit JavaScript bringt auch andere

Probleme mit sich (z.B. wird es möglicherweise nicht von Suchmaschinen gelesen).

Im nächsten Abschnitt werden wir uns einen praktischeren Einsatz von DOM-APIs ansehen.

> [!NOTE]
> Sie finden unsere [fertige Version des dom-example.html](https://github.com/mdn/learning-area/blob/main/javascript/apis/document-manipulation/dom-example-manipulated.html)-Demos auf GitHub ([siehe auch live](https://mdn.github.io/learning-area/javascript/apis/document-manipulation/dom-example-manipulated.html)).

## Erstellen einer dynamischen Einkaufsliste

In dieser Übung möchten wir, dass Sie eine dynamische Einkaufsliste erstellen, die es Ihnen ermöglicht, Elemente mithilfe eines Formulareingabe und eines Buttons hinzuzufügen. Wenn Sie ein Element hinzufügen und den Button drücken:

- Sollte das Element in der Liste erscheinen.
- Jedes Element sollte einen Button erhalten, der gedrückt werden kann, um dieses Element von der Liste zu löschen.
- Die Eingabe sollte geleert und fokussiert werden, damit Sie ein weiteres Element eingeben können.

Das fertige Demo sieht ungefähr wie folgt aus — probieren Sie es aus, bevor Sie es erstellen!

```html hidden live-sample___dynamic-shopping-list
<h1>My shopping list</h1>

<div>
  <label for="item">Enter a new item:</label>
  <input type="text" name="item" id="item" />
  <button>Add item</button>
</div>

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

button.addEventListener("click", () => {
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

Um die Übung abzuschließen, folgen Sie den untenstehenden Schritten und stellen Sie sicher, dass sich die Liste wie beschrieben verhält.

1. Laden Sie zunächst eine Kopie unserer [shopping-list.html](https://github.com/mdn/learning-area/blob/main/javascript/apis/document-manipulation/shopping-list.html)-Startdatei herunter und erstellen Sie eine Kopie davon. Sie werden sehen, dass sie einige minimale CSS-Stile enthält, sowie ein `div` mit einem Label, Eingabe und Button und eine leere Liste und {{htmlelement("script")}}-Element. Sie werden alle Ihre Ergänzungen im Skript vornehmen.
2. Erstellen Sie drei Variablen, die Referenzen auf die Liste ({{htmlelement("ul")}}), {{htmlelement("input")}} und {{htmlelement("button")}}-Elemente enthalten.
3. Erstellen Sie eine [Funktion](/de/docs/Learn_web_development/Core/Scripting/Functions), die ausgeführt wird, wenn der Button geklickt wird.
4. Speichern Sie im Funktionskörper zunächst den aktuellen [Wert](/de/docs/Web/API/HTMLInputElement/value) des Eingabeelements in einer Variablen.
5. Leeren Sie anschließend das Eingabeelement, indem Sie dessen Wert auf einen leeren String setzen — `""`.
6. Erstellen Sie drei neue Elemente — ein Listenelement ({{htmlelement('li')}}), {{htmlelement('span')}} und {{htmlelement('button')}} — und speichern Sie diese in Variablen.
7. Fügen Sie das span- und das Button-Element als Kinder des Listenelements hinzu.
8. Setzen Sie den Textinhalt des span-Elements auf den zuvor gespeicherten Wert des Eingabeelements und den Textinhalt des Button-Elements auf 'Löschen'.
9. Fügen Sie das Listenelement als Kind der Liste hinzu.
10. Hängen Sie einen Ereignishandler an den Lösch-Button an, sodass beim Klicken das gesamte Listenelement (`<li>...</li>`) gelöscht wird.
11. Verwenden Sie schließlich die [`focus()`](/de/docs/Web/API/HTMLElement/focus)-Methode, um das Eingabeelement zu fokussieren, bereit für die Eingabe des nächsten Einkaufslistelements.

## Zusammenfassung

Wir sind am Ende unseres Studiums der Dokument- und DOM-Manipulation angelangt. An diesem Punkt sollten Sie verstehen, was die wichtigen Teile eines Webbrowsers im Hinblick auf die Steuerung von Dokumenten und andere Aspekte der Web-Erfahrung des Benutzers sind. Am wichtigsten ist, dass Sie verstehen, was das Document Object Model ist und wie man es manipuliert, um nützliche Funktionen zu erstellen.

## Siehe auch

- Es gibt noch viele weitere Funktionen, die Sie verwenden können, um Ihre Dokumente zu manipulieren. Sehen Sie sich einige unserer Referenzen an und entdecken Sie, was Sie finden können:
  - [`Document`](/de/docs/Web/API/Document)
  - [`Window`](/de/docs/Web/API/Window)
  - [`Node`](/de/docs/Web/API/Node)
  - [`HTMLElement`](/de/docs/Web/API/HTMLElement), [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement), [`HTMLImageElement`](/de/docs/Web/API/HTMLImageElement), etc.
- [DOM Scripting](https://explainers.dev/dom-scripting/), explainers.dev

{{PreviousMenuNext("Learn_web_development/Core/Scripting/Test_your_skills/Object_basics","Learn_web_development/Core/Scripting/Image_gallery", "Learn_web_development/Core/Scripting")}}
