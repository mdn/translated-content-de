---
title: Einführung in das DOM-Scripting
short-title: DOM scripting
slug: Learn_web_development/Core/Scripting/DOM_scripting
l10n:
  sourceCommit: 4d1f7123363a5f5a42d865791b18f421d02cc893
---

{{PreviousMenuNext("Learn_web_development/Core/Scripting/Test_your_skills/Object_basics","Learn_web_development/Core/Scripting/Image_gallery", "Learn_web_development/Core/Scripting")}}

Beim Schreiben von Webseiten und Apps ist es eine der häufigsten Aktionen, die Dokumentenstruktur auf irgendeine Weise zu ändern. Dies wird üblicherweise durch Manipulation des Document Object Model (DOM) über eine Reihe von integrierten Browser-APIs zum Steuern von HTML- und Stylinginformationen durchgeführt. In diesem Artikel werden wir Ihnen das **DOM-Scripting** vorstellen.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>Ein Verständnis von <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a> und den <a href="/de/docs/Learn_web_development/Core/Styling_basics">Grundlagen von CSS</a>, sowie Vertrautheit mit den JavaScript-Grundlagen, wie in vorherigen Lektionen behandelt.</td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Was das DOM ist — die interne Darstellung der HTML-Struktur des Dokuments durch den Browser als Hierarchie von Objekten.</li>
          <li>Die wichtigen Teile eines Webbrowsers, die in JavaScript dargestellt werden — <code>Navigator</code>, <code>Window</code> und <code>Document</code>.</li>
          <li>Wie DOM-Knoten relativ zueinander im DOM-Baum existieren — Wurzel-, Eltern-, Kind-, Geschwister- und Nachkommenknoten.</li>
          <li>Wie auf DOM-Knoten zugegriffen, neue Knoten erstellt und Knoten sowie Attribute hinzugefügt oder entfernt werden.</li>
          <li>Manipulation von CSS-Stilen mit JavaScript.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Die wichtigen Teile eines Webbrowsers

Webbrowser sind sehr komplizierte Software mit vielen beweglichen Teilen, von denen viele nicht von einem Webentwickler mit JavaScript gesteuert oder manipuliert werden können. Sie könnten denken, dass solche Einschränkungen eine schlechte Sache sind, aber Browser sind aus guten Gründen gesichert, hauptsächlich um die Sicherheit zu gewährleisten. Stellen Sie sich vor, eine Website könnte auf Ihre gespeicherten Passwörter oder andere sensible Informationen zugreifen und sich als Sie bei Websites anmelden?

Trotz der Einschränkungen bieten Web-APIs uns immer noch Zugang zu vielen Funktionalitäten, die es uns ermöglichen, eine Vielzahl von Dingen mit Webseiten zu tun. Es gibt ein paar wirklich offensichtliche Teile, auf die Sie regelmäßig in Ihrem Code verweisen werden — betrachten Sie das folgende Diagramm, das die Hauptbestandteile eines Browsers darstellt, die direkt am Anzeigen von Webseiten beteiligt sind:

![Wichtige Teile eines Webbrowsers; das Dokument ist die Webseite. Das Fenster umfasst das gesamte Dokument und auch den Tab. Der Navigator ist der Browser, der das Fenster (das das Dokument umfasst) und alle anderen Fenster umfasst.](document-window-navigator.png)

- Das **Window** stellt den Browser-Tab dar, in den eine Webseite geladen wird; dies wird in JavaScript durch das [`Window`](/de/docs/Web/API/Window)-Objekt dargestellt. Mit den auf diesem Objekt verfügbaren Methoden können Sie die Größe des Fensters zurückgeben (siehe [`Window.innerWidth`](/de/docs/Web/API/Window/innerWidth) und [`Window.innerHeight`](/de/docs/Web/API/Window/innerHeight)), das Dokument manipulieren, das in diesem Fenster geladen ist, spezifische Daten für dieses Dokument clientseitig speichern (zum Beispiel unter Verwendung einer lokalen Datenbank oder eines anderen Speichers), einen [Ereignis-Handler](/de/docs/Learn_web_development/Core/Scripting/Events) an das aktuelle Fenster anhängen und mehr.
- Der **Navigator** stellt den Zustand und die Identität des Browsers dar, wie er im Web existiert. In JavaScript wird dies durch das [`Navigator`](/de/docs/Web/API/Navigator)-Objekt dargestellt. Sie können dieses Objekt verwenden, um Dinge wie die bevorzugte Sprache des Benutzers oder einen Mediastream von der Webcam des Benutzers abzurufen usw.
- Das **Document** (im Browser durch das DOM dargestellt) ist die tatsächliche Seite, die in das Fenster geladen wird, und wird in JavaScript durch das [`Document`](/de/docs/Web/API/Document)-Objekt dargestellt. Sie können dieses Objekt verwenden, um Informationen über das HTML und CSS zurückzugeben und zu manipulieren, die das Dokument ausmachen. Beispielsweise können Sie eine Referenz zu einem Element im DOM erhalten, seinen Textinhalt ändern, neue Stile darauf anwenden, neue Elemente erstellen und sie dem aktuellen Element als Kind hinzufügen oder es sogar vollständig löschen.

In diesem Artikel konzentrieren wir uns hauptsächlich auf die Manipulation des Dokuments, aber wir zeigen auch einige andere nützliche Aspekte.

## Das Document Object Model

Lassen Sie uns einen kurzen Rückblick auf das Document Object Model (DOM) geben, das wir auch früher im Kurs betrachtet haben. Das Dokument, das derzeit in jedem Ihrer Browser-Tabs geladen ist, wird durch ein DOM dargestellt. Dies ist eine "Baumstruktur"-Darstellung, die vom Browser erstellt wird und es der HTML-Struktur ermöglicht, einfach von Programmiersprachen aus zugänglich zu sein — zum Beispiel verwendet der Browser selbst es, um Stil- und andere Informationen auf die richtigen Elemente anzuwenden, während er eine Seite rendert, und Entwickler wie Sie können das DOM mit JavaScript manipulieren, nachdem die Seite gerendert wurde.

> [!NOTE]
> Scrimbas [The Document Object Model](https://scrimba.com/learn-javascript-c0v/~0g?via=mdn) <sup>[_MDN Lernpartner_](/de/docs/MDN/Writing_guidelines/Learning_content#partner_links_and_embeds)</sup> bietet einen praktischen Überblick über den Begriff "DOM" und was er bedeutet.

Wir haben eine Beispielseite unter [dom-example.html](https://github.com/mdn/learning-area/blob/main/javascript/apis/document-manipulation/dom-example.html) erstellt ([siehe sie auch live](https://mdn.github.io/learning-area/javascript/apis/document-manipulation/dom-example.html)). Versuchen Sie, diese in Ihrem Browser zu öffnen — es ist eine sehr einfache Seite, die ein {{htmlelement("section")}}-Element enthält, in dem sich ein Bild und ein Absatz mit einem darin enthaltenen Link befindet. Der HTML-Quellcode sieht folgendermaßen aus:

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

Das DOM sieht hingegen folgendermaßen aus:

![Baumstruktur-Darstellung des Document Object Model: Der obere Knoten ist der Doctype und das HTML-Element. Kinderknoten von HTML beinhalten head und body. Jedes Kindelement ist ein Ast. Alle Texte, sogar Leerzeichen, werden ebenfalls angezeigt.](dom-screenshot.png)

> [!NOTE]
> Dieses DOM-Baumdiagramm wurde mit Ian Hicksons [Live DOM viewer](https://software.hixie.ch/utilities/js/live-dom-viewer/) erstellt.

Jeder Eintrag im Baum wird als **Knoten** bezeichnet. Sie können im obigen Diagramm sehen, dass einige Knoten Elemente darstellen (identifiziert als `HTML`, `HEAD`, `META` und so weiter) und andere Text darstellen (identifiziert als `#text`). Es gibt [noch andere Knotenarten](/de/docs/Web/API/Node/nodeType), aber dies sind die Hauptarten, auf die Sie stoßen werden.

Knoten werden auch nach ihrer Position im Baum relativ zu anderen Knoten bezeichnet:

- **Wurzelknoten**: Der oberste Knoten im Baum, der im Fall von HTML immer der `HTML`-Knoten ist (andere Markup-Vokabulare wie SVG und benutzerdefiniertem XML haben unterschiedliche Wurzelelemente).
- **Knoten**: Ein Knoten, der _direkt_ in einem anderen Knoten enthalten ist. Beispielsweise ist `IMG` ein Kind von `SECTION` im obigen Beispiel.
- **Nachkommenknoten**: Ein Knoten, der _irgendwo_ in einem anderen Knoten enthalten ist. Beispielsweise ist `IMG` ein Kind von `SECTION` im obigen Beispiel und auch ein Nachkomme. `IMG` ist kein Kind von `BODY`, da es zwei Ebenen darunter im Baum liegt, aber es ist ein Nachkomme von `BODY`.
- **Elternknoten**: Ein Knoten, der einen anderen Knoten in sich enthält. Beispielsweise ist `BODY` der Elternknoten von `SECTION` im obigen Beispiel.
- **Geschwisterknoten**: Knoten, die auf derselben Ebene unter demselben Elternknoten im DOM-Baum liegen. Beispielsweise sind `IMG` und `P` im obigen Beispiel Geschwister.

Es ist nützlich, sich mit dieser Terminologie vertraut zu machen, bevor man mit dem DOM arbeitet, da eine Reihe der Codebegriffe, auf die Sie stoßen werden, diese verwenden. Sie werden ihnen auch in CSS begegnen (zum Beispiel Nachkommen-Selektor, Kind-Selektor).

## Grundlegende DOM-Manipulation

Um mit dem Lernen der DOM-Manipulation zu beginnen, beginnen wir mit einem praktischen Beispiel.

1. Nehmen Sie eine lokale Kopie der [dom-example.html-Seite](https://github.com/mdn/learning-area/blob/main/javascript/apis/document-manipulation/dom-example.html) und des [Bildes](https://github.com/mdn/learning-area/blob/main/javascript/apis/document-manipulation/dinosaur.png), das damit verbunden ist.
2. Fügen Sie ein `<script></script>`-Element direkt über dem schließenden `</body>`-Tag hinzu.
3. Um ein Element im DOM zu manipulieren, müssen Sie es zuerst auswählen und eine Referenz darauf in einer Variablen speichern. Fügen Sie in Ihrem Skriptelement die folgende Zeile hinzu:

   ```js
   const link = document.querySelector("a");
   ```

4. Da wir die Elementreferenz nun in einer Variablen gespeichert haben, können wir beginnen, es mit den dafür verfügbaren Eigenschaften und Methoden zu manipulieren (diese sind auf Schnittstellen wie [`HTMLAnchorElement`](/de/docs/Web/API/HTMLAnchorElement) im Fall des {{htmlelement("a")}}-Elements, seiner allgemeineren übergeordneten Schnittstelle [`HTMLElement`](/de/docs/Web/API/HTMLElement), und [`Node`](/de/docs/Web/API/Node) — die alle Knoten in einem DOM darstellt — definiert). Zuerst ändern wir den Text innerhalb des Links, indem wir den Wert der [`Node.textContent`](/de/docs/Web/API/Node/textContent)-Eigenschaft aktualisieren. Fügen Sie die folgende Zeile unter der vorherigen hinzu:

   ```js
   link.textContent = "Mozilla Developer Network";
   ```

5. Wir sollten auch die URL ändern, auf die der Link zeigt, damit er nicht an die falsche Stelle führt, wenn er angeklickt wird. Fügen Sie die folgende Zeile erneut am Ende hinzu:

   ```js
   link.href = "https://developer.mozilla.org";
   ```

Beachten Sie, dass es, wie bei vielen Dingen in JavaScript, viele Möglichkeiten gibt, ein Element auszuwählen und eine Referenz darauf in einer Variablen zu speichern. [`Document.querySelector()`](/de/docs/Web/API/Document/querySelector) ist der empfohlene moderne Ansatz. Er ist praktisch, weil er es Ihnen ermöglicht, Elemente mit CSS-Selektoren auszuwählen. Der obige `querySelector()`-Aufruf stimmt mit dem ersten {{htmlelement("a")}}-Element überein, das im Dokument erscheint. Wenn Sie mehrere Elemente abgleichen und etwas damit machen möchten, können Sie [`Document.querySelectorAll()`](/de/docs/Web/API/Document/querySelectorAll) verwenden, was alle Elemente im Dokument abgleicht, die mit dem Selektor übereinstimmen, und Referenzen darauf in einem [array](/de/docs/Learn_web_development/Core/Scripting/Arrays)-ähnlichen Objekt namens [`NodeList`](/de/docs/Web/API/NodeList) speichert.

Es gibt ältere Methoden zum Abrufen von Elementreferenzen wie:

- [`Document.getElementById()`](/de/docs/Web/API/Document/getElementById), die ein Element mit einem gegebenen `id`-Attributwert auswählt, z. B. `<p id="myId">Mein Absatz</p>`. Die ID wird der Funktion als Parameter übergeben, d.h. `const elementRef = document.getElementById('myId')`.
- [`Document.getElementsByTagName()`](/de/docs/Web/API/Document/getElementsByTagName), die ein Array-ähnliches Objekt zurückgibt, das alle Elemente einer bestimmten Art auf der Seite enthält, zum Beispiel `<p>`s, `<a>`s usw. Der Elementtyp wird der Funktion als Parameter übergeben, z. B., `const elementRefArray = document.getElementsByTagName('p')`.

Diese beiden funktionieren besser in älteren Browsern als die modernen Methoden wie `querySelector()`, sind aber nicht so praktisch. Schauen Sie nach und sehen Sie, welche anderen Sie finden können!

### Neue Knoten erstellen und platzieren

Das oben Genannte hat Ihnen einen kleinen Vorgeschmack darauf gegeben, was Sie tun können, aber lassen Sie uns weitergehen und sehen, wie wir neue Elemente erstellen können.

1. Kehren wir zum aktuellen Beispiel zurück, beginnen wir damit, eine Referenz auf unser {{htmlelement("section")}}-Element zu erhalten — fügen Sie den folgenden Code am Ende Ihres bestehenden Skripts hinzu (machen Sie dasselbe auch mit den anderen Zeilen):

   ```js
   const sect = document.querySelector("section");
   ```

2. Nun erstellen wir ein neues Paragraphen-Element mit [`Document.createElement()`](/de/docs/Web/API/Document/createElement) und geben ihm etwas Textinhalt auf die gleiche Weise wie zuvor:

   ```js
   const para = document.createElement("p");
   para.textContent = "We hope you enjoyed the ride.";
   ```

3. Sie können nun den neuen Absatz am Ende des Abschnitts mit [`Node.appendChild()`](/de/docs/Web/API/Node/appendChild) anfügen:

   ```js
   sect.appendChild(para);
   ```

4. Schließlich in diesem Teil fügen wir dem Absatz, in dem sich der Link befindet, einen Textknoten hinzu, um den Satz schön abzuschließen. Zuerst erstellen wir den Textknoten mit [`Document.createTextNode()`](/de/docs/Web/API/Document/createTextNode):

   ```js
   const text = document.createTextNode(
     " — the premier source for web development knowledge.",
   );
   ```

5. Jetzt holen wir uns eine Referenz auf den Absatz, in dem sich der Link befindet, und fügen den Textknoten hinzu:

   ```js
   const linkPara = document.querySelector("p");
   linkPara.appendChild(text);
   ```

Das ist das meiste, was Sie zum Hinzufügen von Knoten zum DOM benötigen — Sie werden viel Gebrauch von diesen Methoden machen, wenn Sie dynamische Schnittstellen erstellen (wir werden uns später einige Beispiele ansehen).

### Elemente verschieben und entfernen

Es kann Zeiten geben, in denen Sie Knoten verschieben oder ganz aus dem DOM löschen möchten. Dies ist durchaus möglich.

Wenn wir den Absatz mit dem Link darin an das Ende des Abschnitts verschieben wollten, könnten wir dies tun:

```js
sect.appendChild(linkPara);
```

Dadurch wird der Absatz nach unten an das Ende des Abschnitts verschoben. Sie könnten gedacht haben, dass es eine zweite Kopie davon macht, aber das ist nicht der Fall — `linkPara` ist eine Referenz auf die einzige Kopie dieses Absatzes. Wenn Sie eine Kopie machen und diese ebenfalls hinzufügen wollten, müssten Sie stattdessen [`Node.cloneNode()`](/de/docs/Web/API/Node/cloneNode) verwenden.

Das Entfernen eines Knotens ist ebenfalls ziemlich einfach, zumindest wenn Sie eine Referenz auf den zu entfernenden Knoten und seinen Elternknoten haben. In unserem aktuellen Fall verwenden wir einfach [`Node.removeChild()`](/de/docs/Web/API/Node/removeChild), so:

```js
sect.removeChild(linkPara);
```

Wenn Sie einen Knoten entfernen möchten, basierend nur auf einer Referenz zu ihm selbst, was ziemlich häufig vorkommt, können Sie [`Element.remove()`](/de/docs/Web/API/Element/remove) verwenden:

```js
linkPara.remove();
```

Diese Methode wird von älteren Browsern nicht unterstützt. Sie haben keine Methode, um einem Knoten zu sagen, er solle sich selbst entfernen, daher müssten Sie das Folgende tun:

```js
linkPara.parentNode.removeChild(linkPara);
```

Versuchen Sie, die obigen Zeilen zu Ihrem Code hinzuzufügen.

### Styles manipulieren

Es ist möglich, CSS-Stile auf verschiedene Weise über JavaScript zu manipulieren.

Um zu beginnen, können Sie eine Liste aller Stylesheets erhalten, die an ein Dokument angehängt sind, indem Sie [`Document.styleSheets`](/de/docs/Web/API/Document/styleSheets) verwenden, das ein array-ähnliches Objekt mit [`CSSStyleSheet`](/de/docs/Web/API/CSSStyleSheet)-Objekten zurückgibt. Sie können dann Stile nach Belieben hinzufügen/entfernen. Wir werden jedoch nicht auf diese Funktionen eingehen, da sie ein etwas archaischer und schwieriger Weg sind, Stil zu manipulieren. Es gibt viel einfachere Wege.

Die erste Möglichkeit besteht darin, Inline-Stile direkt auf die Elemente zu setzen, die Sie dynamisch stylen möchten. Dies geschieht mit der [`HTMLElement.style`](/de/docs/Web/API/HTMLElement/style)-Eigenschaft, die Inline-Stilinformationsdaten für jedes Element im Dokument enthält. Sie können Eigenschaften dieses Objekts festlegen, um Elemente-Stile direkt zu aktualisieren.

1. Fügen Sie als Beispiel die folgenden Zeilen zu unserem laufenden Beispiel hinzu:

   ```js
   para.style.color = "white";
   para.style.backgroundColor = "black";
   para.style.padding = "10px";
   para.style.width = "250px";
   para.style.textAlign = "center";
   ```

2. Laden Sie die Seite neu und Sie werden sehen, dass die Stile auf den Absatz angewendet wurden. Wenn Sie sich diesen Absatz im [Page Inspector/DOM-Inspektor](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/index.html) Ihres Browsers ansehen, werden Sie feststellen, dass diese Zeilen tatsächlich Inline-Stile zum Dokument hinzufügen:

   ```html
   <p
     style="color: white; background-color: black; padding: 10px; width: 250px; text-align: center;">
     We hope you enjoyed the ride.
   </p>
   ```

> [!NOTE]
> Beachten Sie, wie die JavaScript-Eigenschaftenversionen der CSS-Stile in {{Glossary("camel_case", "lower camel case")}} geschrieben sind, während die CSS-Versionen im Bindestrich-Stil ({{Glossary("kebab_case", "kebab-case")}}) sind (z. B. `backgroundColor` im Vergleich zu `background-color`). Vergewissern Sie sich, dass Sie diese nicht verwechseln, sonst funktioniert es nicht.

Es gibt eine andere übliche Methode, um Stile auf Ihrem Dokument dynamisch zu manipulieren, nämlich die Stile in einem separaten Stylesheet zu schreiben und diese Stile durch Hinzufügen/Entfernen eines Klassennamens zu referenzieren.

1. Löschen Sie die vorherigen fünf Zeilen, die Sie Ihrem JavaScript hinzugefügt haben.
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

3. Um diesen Klassennamen zu Ihrem Element hinzuzufügen, verwenden Sie die `add()`-Methode der [`classList`](/de/docs/Web/API/Element/classList) des Elements:

   ```js
   para.classList.add("highlight");
   ```

4. Aktualisieren Sie Ihre Seite, und Sie sehen keine Änderung — die CSS wird weiterhin auf den Absatz angewendet, aber dieses Mal, indem ihm eine Klasse gegeben wird, die durch unsere CSS-Regel ausgewählt wird, nicht als Inline-CSS-Stile.

Welche Methode Sie wählen, bleibt Ihnen überlassen; beide haben ihre Vor- und Nachteile. Die erste Methode erfordert weniger Setup und ist gut für einfache Anwendungen, während die zweite Methode puristischer ist (kein Mischen von CSS und JavaScript, keine Inline-Stile, die als schlechte Praxis angesehen werden). Wenn Sie beginnen, größere und komplexere Apps zu entwickeln, werden Sie vermutlich mehr die zweite Methode verwenden, aber es bleibt wirklich Ihnen überlassen.

An diesem Punkt haben wir bis jetzt nichts wirklich Nützliches gemacht! Es gibt keinen Sinn darin, JavaScript zu verwenden, um statische Inhalte zu erstellen — Sie können es genauso gut einfach in Ihr HTML schreiben und JavaScript nicht verwenden. Es ist komplexer als HTML und das Erstellen Ihres Inhalts mit JavaScript hat auch andere damit verbundene Probleme (wie dass es nicht von Suchmaschinen gelesen werden kann).

Im nächsten Abschnitt werden wir uns einen praktischeren Anwendungsfall für DOM-APIs ansehen.

> [!NOTE]
> Sie finden unsere [fertige Version des dom-example.html](https://github.com/mdn/learning-area/blob/main/javascript/apis/document-manipulation/dom-example-manipulated.html) Demos auf GitHub ([siehe sie auch live](https://mdn.github.io/learning-area/javascript/apis/document-manipulation/dom-example-manipulated.html)).

## Erstellen einer dynamischen Einkaufsliste

In dieser Übung möchten wir, dass Sie eine dynamische Einkaufsliste erstellen, die es Ihnen ermöglicht, Elemente mithilfe eines Formulareingabes und eines Buttons hinzuzufügen. Nachdem Sie ein Element im Eingabefeld eingegeben und den Button geklickt oder die <kbd>Eingabe</kbd>-Taste gedrückt haben, sollte Folgendes geschehen:

- Das Element sollte in der Liste erscheinen.
- Jedes Element sollte einen Button erhalten, der gedrückt werden kann, um dieses Element von der Liste zu löschen.
- Jedes Element sollte einen Button daneben haben, der das Element aus der Liste entfernt, wenn er geklickt wird.
- Die Eingabefelder sollten geleert und fokussiert sein, bereit für den nächsten Eintrag.

Die fertige Demo wird in etwa wie das folgende aussehen — probieren Sie es aus, bevor Sie es erstellen!

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

1. Laden Sie zunächst eine Kopie unserer [shopping-list.html](https://github.com/mdn/learning-area/blob/main/javascript/apis/document-manipulation/shopping-list.html) Ausgangsdatei herunter und machen Sie eine Kopie davon irgendwo. Sie werden sehen, dass sie ein minimales CSS, ein Formular mit einem Label, einer Eingabe und einem Button, eine leere Liste und ein {{htmlelement("script")}}-Element enthält. Sie werden alle Ihre Ergänzungen im Skript vornehmen.
2. Erstellen Sie drei Variablen, die Referenzen zur Liste ({{htmlelement("ul")}}), {{htmlelement("input")}} und {{htmlelement("button")}}-Elementen halten.
3. Erstellen Sie eine [Funktion](/de/docs/Learn_web_development/Core/Scripting/Functions), die als Reaktion auf den Button-Klick läuft.
4. Rufen Sie im Funktionskörper zuerst [`preventDefault()`](/de/docs/Web/API/Event/preventDefault) auf. Da die Eingabe in ein Formularelement eingebunden ist, wird durch Drücken der <kbd>Eingabetaste</kbd> das Formular ausgelöst, um zu übermitteln. Der Aufruf von `preventDefault()` wird verhindern, dass das Formular die Seite aktualisiert, damit ein neues Element der Liste hinzugefügt werden kann.
5. Speichern Sie als Nächstes den aktuellen [Wert](/de/docs/Web/API/HTMLInputElement/value) der Eingabe in einer Variablen.
6. Leeren Sie dann das Eingabeelement, indem Sie seinen Wert auf einen leeren String (`""`) setzen.
7. Erstellen Sie drei neue Elemente — ein Listenelement ({{htmlelement('li')}}), ein {{htmlelement('span')}} und ein {{htmlelement('button')}} — und speichern Sie sie in Variablen.
8. Fügen Sie das span und den Button als Kinder des Listenelements hinzu.
9. Setzen Sie den Textinhalt des Spans auf den zuvor gespeicherten Eingabewert und den Textinhalt des Buttons auf `Löschen`.
10. Fügen Sie das Listenelement der Liste hinzu.
11. Hängen Sie einen Ereignis-Handler an den **Löschen**-Button an, so dass beim Anklicken das gesamte Listenelement (`<li>...</li>`) entfernt wird.
12. Verwenden Sie schließlich die [`focus()`](/de/docs/Web/API/HTMLElement/focus)-Methode, um das Eingabeelement zu fokussieren, sodass es bereit ist für die Eingabe des nächsten Einkaufslistelements.

## Zusammenfassung

Wir haben das Ende unserer Untersuchung zur Dokumenten- und DOM-Manipulation erreicht. An diesem Punkt sollten Sie verstehen, was die wichtigen Teile eines Webbrowsers im Hinblick auf die Steuerung von Dokumenten und andere Aspekte der Web-Erfahrung des Benutzers sind. Am wichtigsten ist, dass Sie verstehen, was das Document Object Model ist und wie Sie es manipulieren, um nützliche Funktionen zu erstellen.

## Siehe auch

- Es gibt viele weitere Funktionen, mit denen Sie Ihre Dokumente manipulieren können. Schauen Sie sich einige unserer Referenzen an und sehen Sie, was Sie entdecken können:
  - [`Document`](/de/docs/Web/API/Document)
  - [`Window`](/de/docs/Web/API/Window)
  - [`Node`](/de/docs/Web/API/Node)
  - [`HTMLElement`](/de/docs/Web/API/HTMLElement), [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement), [`HTMLImageElement`](/de/docs/Web/API/HTMLImageElement), etc.
- [DOM Scripting](https://explainers.dev/dom-scripting/), explainers.dev

{{PreviousMenuNext("Learn_web_development/Core/Scripting/Test_your_skills/Object_basics","Learn_web_development/Core/Scripting/Image_gallery", "Learn_web_development/Core/Scripting")}}
