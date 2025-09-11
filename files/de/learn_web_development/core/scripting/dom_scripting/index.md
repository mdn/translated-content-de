---
title: Einführung in DOM-Scripting
short-title: DOM scripting
slug: Learn_web_development/Core/Scripting/DOM_scripting
l10n:
  sourceCommit: 70de3d9dc906d1c7078f7887aa5d870f5c8f2b2e
---

{{PreviousMenuNext("Learn_web_development/Core/Scripting/Test_your_skills/Object_basics","Learn_web_development/Core/Scripting/Network_requests", "Learn_web_development/Core/Scripting")}}

Beim Schreiben von Webseiten und Apps möchten Sie häufig die Dokumentstruktur auf irgendeine Weise ändern. Dies geschieht in der Regel durch Manipulation des Document Object Model (DOM) über eine Reihe integrierter Browser-APIs zur Steuerung von HTML- und Stil-Informationen. In diesem Artikel führen wir Sie in das **DOM-Scripting** ein.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>Ein Verständnis von <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a> und den <a href="/de/docs/Learn_web_development/Core/Styling_basics">Grundlagen von CSS</a>, sowie Vertrautheit mit den JavaScript-Grundlagen, wie sie in den vorherigen Lektionen behandelt wurden.</td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Was das DOM ist — die interne Darstellung der HTML-Struktur des Dokuments als Hierarchie von Objekten im Browser.</li>
          <li>Die wichtigen Teile eines Webbrowsers, wie sie in JavaScript repräsentiert sind — <code>Navigator</code>, <code>Window</code> und <code>Document</code>.</li>
          <li>Wie DOM-Knoten relativ zueinander im DOM-Baum existieren — Wurzel, Elternteil, Kind, Geschwister und Nachkomme.</li>
          <li>Referenzen zu DOM-Knoten bekommen, neue Knoten erstellen, Knoten und Attribute hinzufügen und entfernen.</li>
          <li>CSS-Stile mit JavaScript manipulieren.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Die wichtigen Teile eines Webbrowsers

Webbrowser sind sehr komplexe Softwarestücke mit vielen beweglichen Teilen, von denen viele nicht von einem Webentwickler mit JavaScript kontrolliert oder manipuliert werden können. Vielleicht denken Sie, dass solche Einschränkungen eine schlechte Sache sind, aber Browser sind aus guten Gründen gesperrt, hauptsächlich im Zusammenhang mit der Sicherheit. Stellen Sie sich vor, eine Website könnte auf Ihre gespeicherten Passwörter oder andere sensible Informationen zugreifen und sich in Websites einloggen, als wären Sie es selbst?

Trotz der Einschränkungen bieten Web-APIs uns immer noch Zugang zu einer Vielzahl von Funktionen, die es uns ermöglichen, eine Menge mit Webseiten zu machen. Es gibt einige wirklich offensichtliche Elemente, auf die Sie regelmäßig in Ihrem Code verweisen werden — betrachten Sie das folgende Diagramm, das die Hauptbestandteile eines Browsers darstellt, die direkt am Ansehen von Webseiten beteiligt sind:

![Wichtige Teile des Webbrowsers; das Dokument ist die Webseite. Das Fenster umfasst das gesamte Dokument und auch den Tab. Der Navigator ist der Browser, der das Fenster (das das Dokument umfasst) und alle anderen Fenster enthält.](document-window-navigator.png)

- Das **Fenster** repräsentiert den Browser-Tab, in den eine Webseite geladen wird; dies wird in JavaScript durch das [`Window`](/de/docs/Web/API/Window)-Objekt dargestellt. Mit den verfügbaren Methoden dieses Objekts können Sie Dinge tun wie die Größe des Fensters zurückgeben (siehe [`Window.innerWidth`](/de/docs/Web/API/Window/innerWidth) und [`Window.innerHeight`](/de/docs/Web/API/Window/innerHeight)), das Dokument, das in dieses Fenster geladen wurde, manipulieren, dokumentenspezifische Daten clientseitig speichern (zum Beispiel mit einer lokalen Datenbank oder einem anderen Speichermodul), einen [Event-Handler](/de/docs/Learn_web_development/Core/Scripting/Events) an das aktuelle Fenster anhängen und mehr.
- Der **Navigator** repräsentiert den Zustand und die Identität des Browsers, wie er im Web existiert. In JavaScript wird dies durch das [`Navigator`](/de/docs/Web/API/Navigator)-Objekt dargestellt. Sie können dieses Objekt verwenden, um Dinge wie die bevorzugte Sprache des Benutzers abzurufen, einen Medienstrom von der Webcam des Benutzers usw.
- Das **Dokument** (im Browser durch das DOM dargestellt) ist die eigentliche Seite, die in das Fenster geladen wird, und wird in JavaScript durch das [`Document`](/de/docs/Web/API/Document)-Objekt dargestellt. Sie können dieses Objekt verwenden, um Informationen über das HTML und CSS, aus dem das Dokument besteht, zurückzugeben und zu manipulieren. Beispielsweise können Sie eine Referenz zu einem Element im DOM erhalten, seinen Textinhalt ändern, neue Stile darauf anwenden, neue Elemente erstellen und diese dem aktuellen Element als Kinder hinzufügen oder es sogar ganz löschen.

In diesem Artikel konzentrieren wir uns hauptsächlich auf die Manipulation des Dokuments, aber wir werden auch ein paar andere nützliche Dinge zeigen.

## Das Document Object Model

Lassen Sie uns einen kurzen Rückblick auf das Document Object Model (DOM) geben, das wir auch bereits früher im Kurs betrachtet haben. Das Dokument, das momentan in jedem Ihrer Browser-Tabs geladen ist, wird durch ein DOM dargestellt. Dies ist eine „Baumstruktur“-Darstellung, die vom Browser erstellt wurde und die es ermöglicht, die HTML-Struktur einfach zugänglich zu machen — zum Beispiel verwendet der Browser es selbst, um Stile und andere Informationen auf die richtigen Elemente anzuwenden, wenn er eine Seite rendert, und Entwickler wie Sie können das DOM mit JavaScript manipulieren, nachdem die Seite gerendert wurde.

> [!NOTE]
> Scrimbas [The Document Object Model](https://scrimba.com/learn-javascript-c0v/~0g?via=mdn) <sup>[_MDN learning partner_](/de/docs/MDN/Writing_guidelines/Learning_content#partner_links_and_embeds)</sup> bietet einen praktischen Rundgang durch den Begriff „DOM“ und was er bedeutet.

Wir haben eine Beispielseite unter [dom-example.html](https://github.com/mdn/learning-area/blob/main/javascript/apis/document-manipulation/dom-example.html) erstellt ([sehen Sie sich diese auch live an](https://mdn.github.io/learning-area/javascript/apis/document-manipulation/dom-example.html)). Versuchen Sie diese in Ihrem Browser zu öffnen — es ist eine sehr einfache Seite, die ein {{htmlelement("section")}}-Element enthält, in dem sich ein Bild befindet, sowie ein Absatz mit einem darin enthaltenen Link. Der HTML-Quellcode sieht folgendermaßen aus:

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

Das DOM hingegen sieht folgendermaßen aus:

![Baumstruktur-Darstellung des Document Object Model: Der oberste Knoten ist der Doctype und das HTML-Element. Kindknoten des HTML sind Kopf und Körper. Jedes Kindelement ist ein Zweig. Auch alle Texte, sogar Leerzeichen, werden angezeigt.](dom-screenshot.png)

> [!NOTE]
> Dieses DOM-Baudiagramm wurde mit dem [Live DOM Viewer](https://software.hixie.ch/utilities/js/live-dom-viewer/) von Ian Hickson erstellt.

Jeder Eintrag im Baum wird als **Knoten** bezeichnet. In der obigen Abbildung sehen Sie, dass einige Knoten Elemente darstellen (als `HTML`, `HEAD`, `META` und so weiter identifiziert), während andere Text darstellen (als `#text` identifiziert). Es gibt [auch andere Arten von Knoten](/de/docs/Web/API/Node/nodeType), aber dies sind die Hauptarten, denen Sie begegnen werden.

Knoten werden auch durch ihre Position im Baum relativ zu anderen Knoten bezeichnet:

- **Wurzelknoten**: Der oberste Knoten im Baum, der im Falle von HTML immer der `HTML`-Knoten ist (andere Markup-Vokabulare wie SVG und benutzerdefiniertes XML werden unterschiedliche Wurzelelemente haben).
- **Kindknoten**: Ein Knoten, der _direkt_ in einem anderen Knoten ist. Zum Beispiel ist `IMG` ein Kind von `SECTION` im obigen Beispiel.
- **Nachkommenknoten**: Ein Knoten, der _irgendwo_ in einem anderen Knoten ist. Zum Beispiel ist `IMG` ein Kind von `SECTION` im obigen Beispiel und auch ein Nachkomme. `IMG` ist kein Kind von `BODY`, da es zwei Ebenen darunter im Baum ist, aber es ist ein Nachkomme von `BODY`.
- **Elternknoten**: Ein Knoten, der einen anderen Knoten in sich hat. Zum Beispiel ist `BODY` der Elternknoten von `SECTION` im obigen Beispiel.
- **Geschwisterknoten**: Knoten, die auf derselben Ebene unter demselben Elternknoten im DOM-Baum sitzen. Zum Beispiel sind `IMG` und `P` im obigen Beispiel Geschwister.

Es ist nützlich, sich mit dieser Terminologie vertraut zu machen, bevor man mit dem DOM arbeitet, da eine Reihe von Codebegriffen, auf die Sie stoßen werden, sie verwenden. Sie werden ihnen auch in CSS begegnen (zum Beispiel Nachkommen-Selektor, Kind-Selektor).

## Einige grundlegende DOM-Manipulationen ausführen

Zum Start der Lernreise über DOM-Manipulationen beginnen wir mit einem praktischen Beispiel.

1. Nehmen Sie eine lokale Kopie der [dom-example.html-Seite](https://github.com/mdn/learning-area/blob/main/javascript/apis/document-manipulation/dom-example.html) und des [Bildes](https://github.com/mdn/learning-area/blob/main/javascript/apis/document-manipulation/dinosaur.png), das dazu gehört.
2. Fügen Sie ein `<script></script>`-Element direkt über dem schließenden `</body>`-Tag hinzu.
3. Um ein Element im DOM zu manipulieren, müssen Sie es zuerst auswählen und eine Referenz darauf in einer Variablen speichern. Fügen Sie innerhalb Ihres Script-Elements die folgende Zeile hinzu:

   ```js
   const link = document.querySelector("a");
   ```

4. Jetzt, da wir die Elementreferenz in einer Variablen gespeichert haben, können wir beginnen, sie mit zugehörigen Eigenschaften und Methoden zu manipulieren (diese sind definiert in Schnittstellen wie [`HTMLAnchorElement`](/de/docs/Web/API/HTMLAnchorElement) im Fall des {{htmlelement("a")}}-Elements, seiner allgemeineren Elternschnittstelle [`HTMLElement`](/de/docs/Web/API/HTMLElement) und [`Node`](/de/docs/Web/API/Node) — die alle Knoten in einem DOM darstellt). Ändern wir zunächst den Text im Link, indem wir den Wert der [`Node.textContent`](/de/docs/Web/API/Node/textContent)-Eigenschaft aktualisieren. Fügen Sie die folgende Zeile unter der vorherigen hinzu:

   ```js
   link.textContent = "Mozilla Developer Network";
   ```

5. Wir sollten auch die URL ändern, auf die der Link zeigt, damit er nicht an die falsche Stelle geht, wenn darauf geklickt wird. Fügen Sie die folgende Zeile hinzu, diesmal am unteren Rand:

   ```js
   link.href = "https://developer.mozilla.org";
   ```

Beachten Sie, dass es, wie bei vielen Dingen in JavaScript, viele Möglichkeiten gibt, ein Element auszuwählen und eine Referenz darauf in einer Variablen zu speichern. [`Document.querySelector()`](/de/docs/Web/API/Document/querySelector) ist der empfohlene moderne Ansatz. Es ist praktisch, da es Ihnen ermöglicht, Elemente mit CSS-Selektoren auszuwählen. Der obige `querySelector()`-Aufruf wird das erste in dem Dokument erscheinende {{htmlelement("a")}}-Element auswählen. Wenn Sie viele Elemente auswählen und etwas mit ihnen tun möchten, könnten Sie [`Document.querySelectorAll()`](/de/docs/Web/API/Document/querySelectorAll) verwenden, welches jedes im Dokument gefundene Element auswählt, das mit dem Selektor übereinstimmt, und Referenzen darauf in einem [array](/de/docs/Learn_web_development/Core/Scripting/Arrays)-ähnlichen Objekt speichert, das als [`NodeList`](/de/docs/Web/API/NodeList) bezeichnet wird.

Es gibt ältere Methoden, um Elementreferenzen abzurufen, wie:

- [`Document.getElementById()`](/de/docs/Web/API/Document/getElementById), was ein Element mit einem bestimmten `id`-Attributwert auswählt, z.B. `<p id="myId">Mein Absatz</p>`. Die ID wird als Parameter an die Funktion übergeben, also `const elementRef = document.getElementById('myId')`.
- [`Document.getElementsByTagName()`](/de/docs/Web/API/Document/getElementsByTagName), welches ein array-ähnliches Objekt mit allen Elementen auf der Seite eines bestimmten Typs zurückgibt, z.B. `<p>`s, `<a>`s usw. Der Elementtyp wird als Parameter an die Funktion übergeben, d.h. `const elementRefArray = document.getElementsByTagName('p')`.

Diese beiden arbeiten besser in älteren Browsern als die modernen Methoden wie `querySelector()`, sind jedoch nicht so bequem. Schauen Sie nach, welche weiteren Sie finden können!

### Erstellen und Platzieren neuer Knoten

Das obige gibt Ihnen einen kleinen Vorgeschmack darauf, was Sie tun können, aber lassen Sie uns weitergehen und schauen, wie wir neue Elemente erstellen können.

1. Um beim aktuellen Beispiel weiterzumachen, lassen Sie uns eine Referenz auf unser {{htmlelement("section")}}-Element erhalten — fügen Sie den folgenden Code am Ende Ihres bestehenden Scripts hinzu (machen Sie dasselbe mit den anderen Zeilen):

   ```js
   const sect = document.querySelector("section");
   ```

2. Lassen Sie uns nun einen neuen Absatz mit [`Document.createElement()`](/de/docs/Web/API/Document/createElement) erstellen und ihm etwas Textinhalt geben, wie zuvor:

   ```js
   const para = document.createElement("p");
   para.textContent = "We hope you enjoyed the ride.";
   ```

3. Sie können nun den neuen Absatz am Ende des Abschnitts hinzufügen, indem Sie [`Node.appendChild()`](/de/docs/Web/API/Node/appendChild) verwenden:

   ```js
   sect.appendChild(para);
   ```

4. Schließlich für diesen Teil, fügen wir dem Absatz, in dem sich der Link befindet, einen Textknoten hinzu, um den Satz schön abzurunden. Zuerst erstellen wir den Textknoten mit [`Document.createTextNode()`](/de/docs/Web/API/Document/createTextNode):

   ```js
   const text = document.createTextNode(
     " — the premier source for web development knowledge.",
   );
   ```

5. Jetzt holen wir uns eine Referenz auf den Absatz, in dem sich der Link befindet, und fügen den Textknoten dort an:

   ```js
   const linkPara = document.querySelector("p");
   linkPara.appendChild(text);
   ```

Das ist das meiste, was Sie brauchen, um Knoten zum DOM hinzuzufügen — diese Methoden werden Sie viel nutzen, wenn Sie dynamische Oberflächen erstellen (wir werden später einige Beispiele betrachten).

### Elemente verschieben und entfernen

Es kann Zeiten geben, in denen Sie Knoten verschieben oder sie ganz aus dem DOM löschen möchten. Das ist durchaus möglich.

Wenn wir den Absatz mit dem Link darin an das Ende des Abschnitts verschieben möchten, könnten wir das tun:

```js
sect.appendChild(linkPara);
```

Dies bewegt den Absatz an das Ende des Abschnitts. Vielleicht dachten Sie, dass es eine zweite Kopie davon machen würde, aber das ist nicht der Fall — `linkPara` ist eine Referenz auf die eine einzige Kopie dieses Absatzes. Wenn Sie eine Kopie erstellen und diese ebenfalls hinzufügen möchten, müssten Sie stattdessen [`Node.cloneNode()`](/de/docs/Web/API/Node/cloneNode) verwenden.

Das Entfernen eines Knotens ist ebenfalls ziemlich einfach, zumindest wenn Sie eine Referenz auf den zu entfernenden Knoten und dessen Elternteil haben. In unserem aktuellen Fall verwenden wir einfach [`Node.removeChild()`](/de/docs/Web/API/Node/removeChild), wie folgt:

```js
sect.removeChild(linkPara);
```

Wenn Sie einen Knoten basierend nur auf einer Referenz auf sich selbst entfernen möchten, was ziemlich verbreitet ist, können Sie [`Element.remove()`](/de/docs/Web/API/Element/remove) verwenden:

```js
linkPara.remove();
```

Diese Methode wird in älteren Browsern nicht unterstützt. Sie bieten keine Methode, um einem Knoten zu sagen, dass er sich selbst entfernen soll, also müssten Sie das Folgende tun:

```js
linkPara.parentNode.removeChild(linkPara);
```

Probieren Sie diese Zeilen in Ihren Code einfügen.

### Manipulation von Stilen

Es ist möglich, CSS-Stile über JavaScript auf verschiedene Arten zu manipulieren.

Zunächst können Sie eine Liste aller Stylesheets erhalten, die einem Dokument hinzugefügt wurden, indem Sie [`Document.styleSheets`](/de/docs/Web/API/Document/styleSheets) verwenden; dies gibt ein array-ähnliches Objekt mit [`CSSStyleSheet`](/de/docs/Web/API/CSSStyleSheet)-Objekten zurück. Sie können dann Stile hinzufügen/entfernen, wie gewünscht. Wir werden jedoch nicht weiter auf diese Funktionen eingehen, da sie eine etwas archaische und schwierige Möglichkeit sind, Stile zu manipulieren. Es gibt viel einfachere Methoden.

Die erste Methode besteht darin, direkt Inline-Stile auf Elemente hinzuzufügen, die Sie dynamisch stylen möchten. Dies erfolgt mit der [`HTMLElement.style`](/de/docs/Web/API/HTMLElement/style)-Eigenschaft, die inline Stilinformationen für jedes Element im Dokument enthält. Sie können Eigenschaften dieses Objekts festlegen, um direkt die Stile von Elementen zu aktualisieren.

1. Fügen Sie zum Beispiel diese Zeilen in unser aktuelles Beispiel hinzu:

   ```js
   para.style.color = "white";
   para.style.backgroundColor = "black";
   para.style.padding = "10px";
   para.style.width = "250px";
   para.style.textAlign = "center";
   ```

2. Laden Sie die Seite neu, und Sie werden sehen, dass die Stile auf den Absatz angewendet wurden. Wenn Sie diesen Absatz im [Page Inspector/DOM-Inspector Ihres Browsers](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/index.html) betrachten, werden Sie sehen, dass diese Zeilen tatsächlich Inline-Stile zum Dokument hinzufügen:

   ```html
   <p
     style="color: white; background-color: black; padding: 10px; width: 250px; text-align: center;">
     We hope you enjoyed the ride.
   </p>
   ```

> [!NOTE]
> Beachten Sie, wie die JavaScript-Eigenschaften-Versionen der CSS-Stile in {{Glossary("camel_case", "lower camel case")}} geschrieben sind, während die CSS-Versionen mit Bindestrichen ({{Glossary("kebab_case", "kebab-case")}}) geschrieben werden (z.B. `backgroundColor` versus `background-color`). Stellen Sie sicher, dass Sie diese nicht verwechseln, sonst funktioniert es nicht.

Es gibt eine weitere gängige Methode, um Stile dynamisch zu manipulieren, die darin besteht, die Stile in einem separaten Stylesheet zu schreiben und diese Stile zu referenzieren, indem Sie einen Klassennamen hinzufügen/löschen.

1. Löschen Sie die vorherigen fünf Zeilen, die Sie zum JavaScript hinzugefügt haben.
2. Fügen Sie das folgende innerhalb Ihres HTML-{{htmlelement("head")}} hinzu:

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

3. Um diesen Klassennamen Ihrem Element hinzuzufügen, verwenden Sie die `add()`-Methode der [`classList`](/de/docs/Web/API/Element/classList) des Elements:

   ```js
   para.classList.add("highlight");
   ```

4. Laden Sie Ihre Seite neu, und Sie werden keine Änderung sehen — das CSS wird weiterhin auf den Absatz angewendet, diesmal jedoch durch das Hinzufügen einer Klasse, die von unserer CSS-Regel ausgewählt wird, nicht durch Inline-CSS-Stile.

Welche Methode Sie wählen, bleibt Ihnen überlassen; beide haben ihre Vor- und Nachteile. Die erste Methode erfordert weniger Einrichtung und ist für einfache Anwendungen geeignet, während die zweite Methode puristischer ist (keine Vermischung von CSS und JavaScript, keine Inline-Stile, die als eine schlechte Praxis betrachtet werden). Wenn Sie anfangen, größere und komplexere Apps zu entwickeln, werden Sie wahrscheinlich die zweite Methode mehr verwenden, aber es liegt wirklich an Ihnen.

Bis zu diesem Punkt haben wir wirklich nichts Nützliches gemacht! Es gibt keinen Grund, JavaScript zu verwenden, um statische Inhalte zu erstellen — Sie könnten es auch einfach direkt in Ihr HTML schreiben und JavaScript nicht verwenden. Es ist komplizierter als HTML, und das Erstellen Ihrer Inhalte mit JavaScript hat auch andere damit verbundene Probleme (wie beispielsweise, dass es nicht von Suchmaschinen gelesen werden kann).

Im nächsten Abschnitt betrachten wir eine praktischere Verwendung von DOM-APIs.

> [!NOTE]
> Sie können unsere [fertige Version der dom-example.html](https://github.com/mdn/learning-area/blob/main/javascript/apis/document-manipulation/dom-example-manipulated.html) Demo auf GitHub finden ([sehen Sie diese auch live an](https://mdn.github.io/learning-area/javascript/apis/document-manipulation/dom-example-manipulated.html)).

## Erstellen einer dynamischen Einkaufsliste

In dieser Übung möchten wir, dass Sie eine dynamische Einkaufsliste erstellen, die es Ihnen ermöglicht, Elemente über ein Formulareingabefeld und einen Button hinzuzufügen. Wenn Sie ein Element eintragen und den Button drücken:

- Das Element sollte in der Liste erscheinen.
- Jedes Element sollte einen Button haben, der gedrückt werden kann, um dieses Element von der Liste zu löschen.
- Das Eingabefeld sollte geleert und fokussiert werden, bereit für die Eingabe eines weiteren Elements.

Das fertige Demo wird ungefähr so aussehen wie das folgende — probieren Sie es aus, bevor Sie es bauen!

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

Um die Übung abzuschließen, folgen Sie den untenstehenden Schritten und stellen Sie sicher, dass die Liste sich wie oben beschrieben verhält.

1. Laden Sie zunächst eine Kopie unserer [shopping-list.html](https://github.com/mdn/learning-area/blob/main/javascript/apis/document-manipulation/shopping-list.html) Startdatei herunter und machen Sie irgendwo eine Kopie davon. Sie werden sehen, dass sie ein wenig CSS, ein Div mit einem Label, einem Eingabeelement und einem Button und eine leere Liste sowie ein {{htmlelement("script")}}-Element enthält. Alle Ihre Ergänzungen werden Sie im Script vornehmen.
2. Erstellen Sie drei Variablen, die Referenzen auf die Liste ({{htmlelement("ul")}}), das {{htmlelement("input")}}-Element und den {{htmlelement("button")}} speichern.
3. Erstellen Sie eine [Funktion](/de/docs/Learn_web_development/Core/Scripting/Functions), die als Reaktion auf den Button-Click ausgeführt wird.
4. Speichern Sie innerhalb des Funktionskörpers zunächst den aktuellen [Wert](/de/docs/Web/API/HTMLInputElement/value) des Eingabeelements in einer Variablen.
5. Leeren Sie danach das Eingabefeld, indem Sie seinen Wert auf einen leeren String setzen — `""`.
6. Erstellen Sie drei neue Elemente — ein Listenpunktelement ({{htmlelement('li')}}), ein {{htmlelement('span')}}-Element und ein {{htmlelement('button')}}-Element, und speichern Sie sie in Variablen.
7. Fügen Sie das Span- und das Button-Element als Kinder des Listenpunktelements hinzu.
8. Setzen Sie den Textinhalt des Span-Elements auf den zuvor gespeicherten Wert des Eingabeelements und den Textinhalt des Buttons auf "Löschen".
9. Fügen Sie das Listenpunktelement als Kind der Liste hinzu.
10. Hängen Sie einen Event-Handler an den Lösch-Button an, sodass beim Klicken das gesamte Listenpunktelement (`<li>...</li>`) gelöscht wird.
11. Verwenden Sie schließlich die [`focus()`](/de/docs/Web/API/HTMLElement/focus) Methode, um das Eingabefeld zu fokussieren, bereit für die Eingabe des nächsten Einkaufslistenpunkts.

## Zusammenfassung

Wir haben das Ende unseres Studiums der Dokument- und DOM-Manipulation erreicht. An diesem Punkt sollten Sie verstehen, was die wichtigen Teile eines Webbrowsers in Bezug auf die Steuerung von Dokumenten und anderen Aspekten der Web-Erfahrung des Benutzers sind. Am wichtigsten ist, dass Sie verstehen sollten, was das Document Object Model ist und wie Sie es manipulieren können, um nützliche Funktionalität zu erstellen.

## Siehe auch

- Es gibt viele weitere Funktionen, die Sie zum Manipulieren Ihrer Dokumente verwenden können. Schauen Sie sich einige unserer Referenzen an und sehen Sie, was Sie entdecken können:
  - [`Document`](/de/docs/Web/API/Document)
  - [`Window`](/de/docs/Web/API/Window)
  - [`Node`](/de/docs/Web/API/Node)
  - [`HTMLElement`](/de/docs/Web/API/HTMLElement), [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement), [`HTMLImageElement`](/de/docs/Web/API/HTMLImageElement) usw.
- [DOM Scripting](https://explainers.dev/dom-scripting/), explainers.dev

{{PreviousMenuNext("Learn_web_development/Core/Scripting/Test_your_skills/Object_basics","Learn_web_development/Core/Scripting/Network_requests", "Learn_web_development/Core/Scripting")}}
