---
title: Einführung in das DOM-Scripting
short-title: DOM scripting
slug: Learn_web_development/Core/Scripting/DOM_scripting
l10n:
  sourceCommit: 952d0a3a076d16f0cf7566040e5cbe059996138d
---

{{PreviousMenuNext("Learn_web_development/Core/Scripting/Test_your_skills/Object_basics","Learn_web_development/Core/Scripting/Image_gallery", "Learn_web_development/Core/Scripting")}}

Beim Schreiben von Webseiten und Apps möchten Sie häufig die Dokumentstruktur auf irgendeine Weise ändern. Dies wird üblicherweise durch das Manipulieren des Document Object Model (DOM) über eine Reihe von integrierten Browser-APIs zum Steuern von HTML und Stil-Informationen erreicht. In diesem Artikel werden wir Sie in das **DOM-Scripting** einführen.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>Ein Verständnis von <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a> und den <a href="/de/docs/Learn_web_development/Core/Styling_basics">Grundlagen von CSS</a>, Vertrautheit mit den Grundlagen von JavaScript, wie in vorherigen Lektionen behandelt.</td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Was das DOM ist — die interne Darstellung der HTML-Struktur des Dokuments durch den Browser als Hierarchie von Objekten.</li>
          <li>Die wichtigen Teile eines Webbrowsers, wie sie in JavaScript dargestellt werden — <code>Navigator</code>, <code>Window</code> und <code>Document</code>.</li>
          <li>Wie DOM-Knoten relativ zueinander im DOM-Baum existieren — Wurzel, Eltern, Kind, Geschwister und Nachkomme.</li>
          <li>Referenzen zu DOM-Knoten erhalten, neue Knoten erstellen, Knoten und Attribute hinzufügen und entfernen.</li>
          <li>Manipulieren von CSS-Stilen mit JavaScript.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Die wichtigen Teile eines Webbrowsers

Webbrowser sind sehr komplexe Softwarestücke mit vielen beweglichen Teilen, von denen viele nicht von einem Webentwickler mit JavaScript gesteuert oder manipuliert werden können. Sie könnten denken, dass solche Einschränkungen eine schlechte Sache sind, aber Browser sind aus guten Gründen gesperrt, hauptsächlich im Zusammenhang mit der Sicherheit. Stellen Sie sich vor, wenn eine Website auf Ihre gespeicherten Passwörter oder andere sensible Informationen zugreifen könnte und sich als Sie bei Websites anmelden würde?

Trotz der Einschränkungen geben uns Web-APIs weiterhin Zugriff auf viele Funktionen, die es uns ermöglichen, viele Dinge mit Webseiten zu tun. Es gibt ein paar wirklich offensichtliche Teile, auf die Sie regelmäßig in Ihrem Code verweisen werden — betrachten Sie das folgende Diagramm, das die Hauptteile eines Browsers darstellt, die direkt am Ansehen von Webseiten beteiligt sind:

![Wichtige Teile des Webbrowsers; das Dokument ist die Webseite. Das Fenster umfasst das gesamte Dokument und auch den Tab. Der Navigator ist der Browser, der das Fenster (das das Dokument enthält) und alle anderen Fenster umfasst.](document-window-navigator.png)

- Das **Fenster** repräsentiert den Browser-Tab, in den eine Webseite geladen wird; dies wird in JavaScript durch das [`Window`](/de/docs/Web/API/Window)-Objekt dargestellt. Mithilfe der Methoden, die auf diesem Objekt verfügbar sind, können Sie Dinge wie die Größe des Fensters zurückgeben (siehe [`Window.innerWidth`](/de/docs/Web/API/Window/innerWidth) und [`Window.innerHeight`](/de/docs/Web/API/Window/innerHeight)), das in dieses Fenster geladene Dokument manipulieren, datenbankspezifische Daten auf der Client-Seite speichern (zum Beispiel mithilfe einer lokalen Datenbank oder eines anderen Speichermediums), einen [Event-Handler](/de/docs/Learn_web_development/Core/Scripting/Events) an das aktuelle Fenster anhängen und mehr tun.
- Der **Navigator** repräsentiert den Zustand und die Identität des Browsers, wie er im Web existiert. In JavaScript wird dies durch das [`Navigator`](/de/docs/Web/API/Navigator)-Objekt repräsentiert. Sie können dieses Objekt verwenden, um Dinge wie die bevorzugte Sprache des Benutzers oder einen Medienstream von der Webcam des Benutzers abzurufen.
- Das **Dokument** (dargestellt durch das DOM in Browsern) ist die eigentliche Seite, die in das Fenster geladen wird, und wird in JavaScript durch das [`Document`](/de/docs/Web/API/Document)-Objekt dargestellt. Sie können dieses Objekt verwenden, um Informationen über das HTML und CSS zurückzugeben und zu bearbeiten, die das Dokument umfassen. Beispielsweise können Sie eine Referenz zu einem Element im DOM erhalten, dessen Textinhalt ändern, ihm neue Stile zuweisen, neue Elemente erstellen und sie dem aktuellen Element als Kinder hinzufügen oder es sogar ganz löschen.

In diesem Artikel konzentrieren wir uns hauptsächlich darauf, das Dokument zu manipulieren, aber wir werden auch einige andere nützliche Dinge zeigen.

## Das Document Object Model

Lassen Sie uns eine kurze Zusammenfassung des Document Object Model (DOM) bereitstellen, das wir zuvor im Kurs bereits behandelt haben. Das derzeit in jedem Ihrer Browser-Tabs geladene Dokument wird durch ein DOM repräsentiert. Dies ist eine "Baumstruktur"-Darstellung, die vom Browser erstellt wird und es ermöglicht, auf die HTML-Struktur mit Programmiersprachen leicht zuzugreifen — zum Beispiel verwendet der Browser es selbst, um Styling und andere Informationen auf die richtigen Elemente anzuwenden, während eine Seite gerendert wird, und Entwickler wie Sie können das DOM mit JavaScript manipulieren, nachdem die Seite gerendert wurde.

> [!NOTE]
> Scrimba's [The Document Object Model](https://scrimba.com/learn-javascript-c0v/~0g?via=mdn) <sup>[_MDN Lernpartner_](/de/docs/MDN/Writing_guidelines/Learning_content#partner_links_and_embeds)</sup> bietet eine praktische Einführung in den Begriff "DOM" und was er bedeutet.

Wir haben eine Beispielseite bei [dom-example.html](https://github.com/mdn/learning-area/blob/main/javascript/apis/document-manipulation/dom-example.html) erstellt ([sehen Sie sie sich auch live an](https://mdn.github.io/learning-area/javascript/apis/document-manipulation/dom-example.html)). Versuchen Sie, dies in Ihrem Browser zu öffnen — es ist eine sehr einfache Seite, die ein {{htmlelement("section")}}-Element enthält, in dem Sie ein Bild und einen Absatz mit einem Link darin finden können. Der HTML-Quellcode sieht so aus:

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

![Baumstruktur-Darstellung des Document Object Model: Der oberste Knoten ist der Doctype und das HTML-Element. Kinderknoten des HTML umfassen Kopf und Körper. Jedes Kindelement ist ein Zweig. Alle Texte, sogar Leerzeichen, werden ebenfalls angezeigt.](dom-screenshot.png)

> [!NOTE]
> Dieses DOM-Baumdiagramm wurde mit Ian Hickson's [Live DOM viewer](https://software.hixie.ch/utilities/js/live-dom-viewer/) erstellt.

Jeder Eintrag im Baum wird als **Knoten** bezeichnet. Sie können im obigen Diagramm sehen, dass einige Knoten Elemente repräsentieren (identifiziert als `HTML`, `HEAD`, `META` und so weiter) und andere Text (identifiziert als `#text`). Es gibt [andere Arten von Knoten](/de/docs/Web/API/Node/nodeType), aber dies sind die Hauptarten, auf die Sie stoßen werden.

Knoten werden auch durch ihre Position im Baum relativ zu anderen Knoten bezeichnet:

- **Wurzelknoten**: Der oberste Knoten im Baum, der im Fall von HTML immer der `HTML`-Knoten ist (andere Markup-Vokabulare wie SVG und benutzerdefiniertes XML haben unterschiedliche Wurzelelemente).
- **Kindknoten**: Ein Knoten _direkt_ innerhalb eines anderen Knotens. Zum Beispiel ist `IMG` ein Kind von `SECTION` im obigen Beispiel.
- **Nachkommensknoten**: Ein Knoten _irgendwo_ innerhalb eines anderen Knotens. Zum Beispiel ist `IMG` ein Kind von `SECTION` im obigen Beispiel und es ist auch ein Nachkomme. `IMG` ist kein Kind von `BODY`, da es zwei Ebenen darunter im Baum liegt, aber es ist ein Nachkomme von `BODY`.
- **Elternknoten**: Ein Knoten, der einen anderen Knoten in sich hat. Zum Beispiel ist `BODY` der Elternknoten von `SECTION` im obigen Beispiel.
- **Geschwisterknoten**: Knoten, die auf derselben Ebene unter demselben Elternknoten im DOM-Baum sitzen. Zum Beispiel sind `IMG` und `P` Geschwister im obigen Beispiel.

Es ist nützlich, sich mit dieser Terminologie vertraut zu machen, bevor man mit dem DOM arbeitet, da viele der Codebegriffe, auf die Sie stoßen werden, sie verwenden. Sie werden ihnen auch in CSS begegnen (zum Beispiel Nachkommauswahl, Kinderauswahl).

## Einige grundlegende DOM-Manipulationen durchführen

Um mit dem Lernen über DOM-Manipulation zu beginnen, starten wir mit einem praktischen Beispiel.

1. Nehmen Sie eine lokale Kopie der [dom-example.html Seite](https://github.com/mdn/learning-area/blob/main/javascript/apis/document-manipulation/dom-example.html) und dem [Bild](https://github.com/mdn/learning-area/blob/main/javascript/apis/document-manipulation/dinosaur.png), die dazu gehört.
2. Fügen Sie ein `<script></script>`-Element direkt über dem schließenden `</body>`-Tag hinzu.
3. Um ein Element innerhalb des DOM zu manipulieren, müssen Sie es zuerst auswählen und eine Referenz darauf in einer Variablen speichern. Fügen Sie in Ihrem Skriptelement die folgende Zeile hinzu:

   ```js
   const link = document.querySelector("a");
   ```

4. Nun, da wir die Elementreferenz in einer Variablen gespeichert haben, können wir beginnen, sie mit den verfügbaren Eigenschaften und Methoden zu manipulieren (diese sind auf Schnittstellen wie [`HTMLAnchorElement`](/de/docs/Web/API/HTMLAnchorElement) im Fall des {{htmlelement("a")}}-Elements, seiner allgemeineren Elternschnittstelle [`HTMLElement`](/de/docs/Web/API/HTMLElement) und [`Node`](/de/docs/Web/API/Node) definiert — das alle Knoten in einem DOM repräsentiert). Zunächst ändern wir den Text innerhalb des Links, indem wir den Wert der Eigenschaft [`Node.textContent`](/de/docs/Web/API/Node/textContent) aktualisieren. Fügen Sie die folgende Zeile unter der vorherigen hinzu:

   ```js
   link.textContent = "Mozilla Developer Network";
   ```

5. Wir sollten auch die URL ändern, auf die der Link verweist, damit er beim Klicken nicht an die falsche Stelle führt. Fügen Sie die folgende Zeile, wiederum am Ende, hinzu:

   ```js
   link.href = "https://developer.mozilla.org";
   ```

Beachten Sie, dass es, wie bei vielen Dingen in JavaScript, viele Möglichkeiten gibt, ein Element auszuwählen und eine Referenz darauf in einer Variablen zu speichern. [`Document.querySelector()`](/de/docs/Web/API/Document/querySelector) ist der empfohlene moderne Ansatz. Es ist praktisch, weil es Ihnen ermöglicht, Elemente mit CSS-Selektoren zu auswählen. Der obige `querySelector()`-Aufruf wird das erste {{htmlelement("a")}}-Element im Dokument auswählen. Wenn Sie mehrere Elemente auswählen und Dinge mit ihnen tun möchten, können Sie [`Document.querySelectorAll()`](/de/docs/Web/API/Document/querySelectorAll) verwenden, das alle Elemente im Dokument auswählt, die mit dem Selektor übereinstimmen, und Referenzen zu einem [Array](/de/docs/Learn_web_development/Core/Scripting/Arrays)-ähnlichen Objekt namens [`NodeList`](/de/docs/Web/API/NodeList) speichert.

Es gibt ältere Methoden zum Erhalten von Elementreferenzen, wie:

- [`Document.getElementById()`](/de/docs/Web/API/Document/getElementById), das ein Element mit einem gegebenen `id`-Attributwert auswählt, z.B. `<p id="myId">Mein Absatz</p>`. Die ID wird der Funktion als Parameter übergeben, z.B. `const elementRef = document.getElementById('myId')`.
- [`Document.getElementsByTagName()`](/de/docs/Web/API/Document/getElementsByTagName), das ein array-ähnliches Objekt zurückgibt, das alle Elemente auf der Seite eines bestimmten Typs enthält, z.B. `<p>`s, `<a>`s usw. Der Elementtyp wird der Funktion als Parameter übergeben, z.B. `const elementRefArray = document.getElementsByTagName('p')`.

Diese funktionieren besser in älteren Browsern als die modernen Methoden wie `querySelector()`, sind aber nicht so praktisch. Sehen Sie, welche anderen Sie finden können!

### Erstellen und Platzieren neuer Knoten

Das Obige hat Ihnen einen kleinen Vorgeschmack auf das gegeben, was Sie tun können, aber lassen Sie uns weiter gehen und sehen, wie wir neue Elemente erstellen können.

1. Gehen wir zurück zu unserem aktuellen Beispiel und holen uns zunächst eine Referenz auf unser {{htmlelement("section")}}-Element — fügen Sie den folgenden Code am Ende Ihres vorhandenen Skripts hinzu (tun Sie dasselbe mit den anderen Zeilen):

   ```js
   const sect = document.querySelector("section");
   ```

2. Nun erstellen wir einen neuen Absatz mit [`Document.createElement()`](/de/docs/Web/API/Document/createElement) und geben ihm etwas Textinhalt auf die gleiche Weise wie zuvor:

   ```js
   const para = document.createElement("p");
   para.textContent = "We hope you enjoyed the ride.";
   ```

3. Sie können den neuen Absatz nun am Ende des Abschnitts mit [`Node.appendChild()`](/de/docs/Web/API/Node/appendChild) anhängen:

   ```js
   sect.appendChild(para);
   ```

4. Schließlich für diesen Teil, lassen Sie uns einen Textknoten zu dem Absatz hinzufügen, in dem der Link sitzt, um den Satz schön abzurunden. Zuerst erstellen wir den Textknoten mit [`Document.createTextNode()`](/de/docs/Web/API/Document/createTextNode):

   ```js
   const text = document.createTextNode(
     " — the premier source for web development knowledge.",
   );
   ```

5. Nun holen wir uns eine Referenz auf den Absatz, in dem der Link sitzt, und fügen den Textknoten hinzu:

   ```js
   const linkPara = document.querySelector("p");
   linkPara.appendChild(text);
   ```

Das ist das meiste, was Sie zum Hinzufügen von Knoten zum DOM benötigen — Sie werden viel Gebrauch von diesen Methoden machen, wenn Sie dynamische Schnittstellen erstellen (wir werden später einige Beispiele ansehen).

### Verschieben und Entfernen von Elementen

Es kann Zeiten geben, in denen Sie Knoten verschieben oder sie ganz aus dem DOM löschen möchten. Dies ist durchaus möglich.

Wenn wir den Absatz mit dem Link darin an die Unterseite des Abschnitts verschieben wollten, könnten wir dies tun:

```js
sect.appendChild(linkPara);
```

Dies bewegt den Absatz nach unten zur Unterseite des Abschnitts. Sie hätten vielleicht gedacht, dass es eine zweite Kopie davon machen würde, aber das ist nicht der Fall — `linkPara` ist eine Referenz auf die eine und einzige Kopie dieses Absatzes. Wenn Sie eine Kopie machen und diese ebenfalls hinzufügen möchten, müssten Sie stattdessen [`Node.cloneNode()`](/de/docs/Web/API/Node/cloneNode) verwenden.

Das Entfernen eines Knotens ist ebenfalls recht einfach, zumindest wenn Sie eine Referenz auf den zu entfernenden Knoten und seinen Elternteil haben. In unserem aktuellen Fall verwenden wir einfach [`Node.removeChild()`](/de/docs/Web/API/Node/removeChild), so:

```js
sect.removeChild(linkPara);
```

Wenn Sie einen Knoten basierend nur auf einer Referenz zu sich selbst entfernen möchten, was recht häufig vorkommt, können Sie [`Element.remove()`](/de/docs/Web/API/Element/remove) verwenden:

```js
linkPara.remove();
```

Diese Methode wird in älteren Browsern nicht unterstützt. Sie haben keine Methode, um einem Knoten zu sagen, dass er sich selbst entfernen soll, so dass Sie Folgendes tun müssten:

```js
linkPara.parentNode.removeChild(linkPara);
```

Versuchen Sie, die obigen Zeilen zu Ihrem Code hinzuzufügen.

### Manipulieren von Styles

Es ist möglich, CSS-Stile auf verschiedene Arten über JavaScript zu manipulieren.

Zunächst können Sie eine Liste aller Stile erhalten, die einem Dokument angehängt sind, indem Sie [`Document.styleSheets`](/de/docs/Web/API/Document/styleSheets) verwenden, das ein array-ähnliches Objekt mit [`CSSStyleSheet`](/de/docs/Web/API/CSSStyleSheet)-Objekten zurückgibt. Sie können dann nach Belieben Stile hinzufügen/entfernen. Wir werden allerdings nicht weiter auf diese Funktionen eingehen, da sie eine etwas archaische und schwierige Art darstellen, Stile zu manipulieren. Es gibt viel einfachere Wege.

Der erste Weg ist, direkt Inline-Stile auf die Elemente anzuwenden, die Sie dynamisch stylen möchten. Dies geschieht mit der [`HTMLElement.style`](/de/docs/Web/API/HTMLElement/style)-Eigenschaft, welche Inline-Stilinformationen für jedes Element im Dokument enthält. Sie können Eigenschaften dieses Objekts festlegen, um die Stile eines Elements direkt zu aktualisieren.

1. Fügen Sie als Beispiel die folgenden Zeilen zu unserem laufenden Beispiel hinzu:

   ```js
   para.style.color = "white";
   para.style.backgroundColor = "black";
   para.style.padding = "10px";
   para.style.width = "250px";
   para.style.textAlign = "center";
   ```

2. Laden Sie die Seite neu, und Sie werden sehen, dass die Stile auf den Absatz angewendet wurden. Wenn Sie sich diesen Absatz in Ihrem Browser im [Page Inspector/DOM-Inspektor](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/index.html) ansehen, werden Sie sehen, dass diese Zeilen tatsächlich Inline-Stile zum Dokument hinzufügen:

   ```html
   <p
     style="color: white; background-color: black; padding: 10px; width: 250px; text-align: center;">
     We hope you enjoyed the ride.
   </p>
   ```

> [!NOTE]
> Beachten Sie, wie die JavaScript-Property-Versionen der CSS-Stile in {{Glossary("camel_case", "lower camel case")}} geschrieben sind, während die CSS-Versionen durch Kebab-Cases ({{Glossary("kebab_case", "kebab-case")}}) getrennt sind (z.B. `backgroundColor` im Vergleich zu `background-color`). Achten Sie darauf, dass Sie diese nicht verwechseln, sonst funktioniert es nicht.

Es gibt eine andere übliche Methode, um Stile dynamisch auf Ihr Dokument anzuwenden, nämlich die Stile in einem separaten Stylesheet zu schreiben und diese Stile mit dem Hinzufügen/Entfernen eines Klassennamens zu referenzieren.

1. Löschen Sie die vorherigen fünf Zeilen, die Sie zum JavaScript hinzugefügt haben.
2. Fügen Sie das folgende in Ihren HTML-{{htmlelement("head")}} ein:

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

3. Um diesen Klassennamen zu Ihrem Element hinzuzufügen, verwenden Sie die [`classList`](/de/docs/Web/API/Element/classList)-`add()`-Methode des Elements:

   ```js
   para.classList.add("highlight");
   ```

4. Laden Sie Ihre Seite neu, und Sie werden keine Änderungen sehen — das CSS wird immer noch auf den Absatz angewendet, allerdings diesmal durch Zuweisen einer Klasse, die mit unserer CSS-Regel ausgewählt wird, nicht als Inline-CSS-Stile.

Welche Methode Sie wählen, hängt von Ihnen ab; beide haben ihre Vor- und Nachteile. Die erste Methode erfordert weniger Einrichtung und ist gut für einfache Verwendungen, während die zweite Methode puristischer ist (kein Mischen von CSS und JavaScript, keine Inline-Stile, die als schlechte Praxis gelten). Wenn Sie beginnen, größere und komplexere Apps zu erstellen, werden Sie wahrscheinlich die zweite Methode mehr verwenden, aber es liegt wirklich an Ihnen.

An diesem Punkt haben wir noch nichts wirklich Nützliches getan! Es macht keinen Sinn, JavaScript zu verwenden, um statische Inhalte zu erstellen — Sie könnten diese genauso gut in Ihr HTML schreiben und kein JavaScript verwenden. Es ist komplexer als HTML, und die Erstellung Ihrer Inhalte mit JavaScript hat auch andere Probleme, die damit verbunden sind (wie dass sie von Suchmaschinen nicht gelesen werden können).

Im nächsten Abschnitt werden wir einen praktischeren Einsatz von DOM-APIs betrachten.

> [!NOTE]
> Sie können unsere [fertige Version der dom-example.html](https://github.com/mdn/learning-area/blob/main/javascript/apis/document-manipulation/dom-example-manipulated.html) Demo auf GitHub finden ([sehen Sie sie sich auch live an](https://mdn.github.io/learning-area/javascript/apis/document-manipulation/dom-example-manipulated.html)).

## Erstellung einer dynamischen Einkaufsliste

In dieser Übung möchten wir, dass Sie eine dynamische Einkaufsliste erstellen, die es Ihnen ermöglicht, Elemente mithilfe eines Formulareingabefelds und eines Buttons hinzuzufügen. Wenn Sie ein Element eingeben und auf den Button klicken:

- Sollte das Element in der Liste erscheinen.
- Jedes Element sollte einen Button haben, der gedrückt werden kann, um das Element von der Liste zu entfernen.
- Das Eingabefeld sollte geleert und fokussiert werden, bereit für die Eingabe eines weiteren Elements.

Die fertige Demo wird ungefähr so aussehen wie das folgende — probieren Sie es aus, bevor Sie es selbst erstellen!

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

Um die Übung abzuschließen, folgen Sie den untenstehenden Schritten und stellen Sie sicher, dass die Liste sich wie beschrieben verhält.

1. Zu Beginn laden Sie eine Kopie unserer [shopping-list.html](https://github.com/mdn/learning-area/blob/main/javascript/apis/document-manipulation/shopping-list.html) Ausgangsdatei herunter und machen Sie eine Kopie davon irgendwo. Sie werden sehen, dass es etwas minimales CSS, ein div mit einem Label, einer Eingabe und einem Button sowie eine leere Liste und ein {{htmlelement("script")}} Element enthält. Alle Ihre Ergänzungen werden Sie im Skript machen.
2. Erstellen Sie drei Variablen, die Referenzen auf die Liste ({{htmlelement("ul")}}), {{htmlelement("input")}}, und {{htmlelement("button")}} Elemente halten.
3. Erstellen Sie eine [Funktion](/de/docs/Learn_web_development/Core/Scripting/Functions), die in Reaktion auf das Klicken des Buttons ausgeführt wird.
4. Speichern Sie innerhalb des Funktionskörpers den aktuellen [Wert](/de/docs/Web/API/HTMLInputElement/value) des Eingabeelements in einer Variablen.
5. Leerzeichen Sie als nächstes das Eingabeelement, indem Sie den Wert auf einen leeren String setzen — `""`.
6. Erstellen Sie drei neue Elemente — einen Listeneintrag ({{htmlelement('li')}}), {{htmlelement('span')}}, und {{htmlelement('button')}} — und speichern Sie sie in Variablen.
7. Fügen Sie den Span und den Button als Kindelemente des Listeneintrags hinzu.
8. Setzen Sie den Textinhalt des Span auf den zuvor gespeicherten Eingabefeldwert und den Textinhalt des Buttons auf 'Löschen'.
9. Fügen Sie den Listeneintrag als Kind der Liste hinzu.
10. Bringen Sie einen Event-Handler an den Löschbutton an, der bei Klick das gesamte Listenelement (`<li>...</li>`) löscht.
11. Verwenden Sie schließlich die [`focus()`](/de/docs/Web/API/HTMLElement/focus) Methode, um das Eingabeelement zu fokussieren, bereit für die Eingabe des nächsten Einkaufslistenelements.

## Zusammenfassung

Wir haben das Ende unserer Studie zur Dokument- und DOM-Manipulation erreicht. An diesem Punkt sollten Sie verstehen, was die wichtigen Teile eines Webbrowsers in Bezug auf die Steuerung von Dokumenten und anderen Aspekten der Web-Erfahrung des Benutzers sind. Am wichtigsten ist, dass Sie verstehen sollten, was das Document Object Model ist und wie man es manipuliert, um nützliche Funktionalitäten zu erstellen.

## Siehe auch

- Es gibt viele weitere Funktionen, die Sie verwenden können, um Ihre Dokumente zu manipulieren. Sehen Sie sich einige unserer Referenzen an und entdecken Sie, was Sie entdecken können:
  - [`Document`](/de/docs/Web/API/Document)
  - [`Window`](/de/docs/Web/API/Window)
  - [`Node`](/de/docs/Web/API/Node)
  - [`HTMLElement`](/de/docs/Web/API/HTMLElement), [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement), [`HTMLImageElement`](/de/docs/Web/API/HTMLImageElement) usw.
- [DOM Scripting](https://explainers.dev/dom-scripting/), explainers.dev

{{PreviousMenuNext("Learn_web_development/Core/Scripting/Test_your_skills/Object_basics","Learn_web_development/Core/Scripting/Image_gallery", "Learn_web_development/Core/Scripting")}}
