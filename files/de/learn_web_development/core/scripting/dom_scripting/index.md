---
title: Einführung in das DOM-Scripting
short-title: DOM scripting
slug: Learn_web_development/Core/Scripting/DOM_scripting
l10n:
  sourceCommit: 9d3d642daf9df9ece138fa39972edc5f7d6dcd6b
---

{{PreviousMenuNext("Learn_web_development/Core/Scripting/Test_your_skills/Object_basics","Learn_web_development/Core/Scripting/Network_requests", "Learn_web_development/Core/Scripting")}}

Beim Erstellen von Webseiten und Apps ist eine der häufigsten Aufgaben, die Dokumentstruktur in irgendeiner Weise zu ändern. Dies geschieht normalerweise durch Manipulation des Document Object Model (DOM) über eine Reihe von integrierten Browser-APIs zur Steuerung von HTML und Styling-Informationen. In diesem Artikel stellen wir Ihnen das **DOM-Scripting** vor.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>Ein Verständnis von <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a> und den <a href="/de/docs/Learn_web_development/Core/Styling_basics">Grundlagen von CSS</a>, sowie Vertrautheit mit den JavaScript-Grundlagen, wie sie in früheren Lektionen behandelt wurden.</td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Was das DOM ist — die interne Darstellung der HTML-Struktur des Dokuments im Browser als Hierarchie von Objekten.</li>
          <li>Die wichtigen Teile eines Webbrowsers, wie sie in JavaScript dargestellt sind — <code>Navigator</code>, <code>Window</code>, und <code>Document</code>.</li>
          <li>Wie DOM-Knoten relativ zueinander im DOM-Baum existieren — Wurzel, Elternteil, Kind, Geschwister und Nachkomme.</li>
          <li>Erhalten von Referenzen zu DOM-Knoten, Erstellen neuer Knoten, Hinzufügen und Entfernen von Knoten und Attributen.</li>
          <li>Manipulation von CSS-Stilen mit JavaScript.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Die wichtigen Teile eines Webbrowsers

Webbrowser sind sehr komplizierte Softwarepakete mit vielen beweglichen Teilen, von denen viele nicht von einem Webentwickler mit JavaScript gesteuert oder manipuliert werden können. Sie könnten denken, dass solche Einschränkungen eine schlechte Sache sind, aber Browser sind aus guten Gründen abgesichert, die hauptsächlich auf Sicherheit ausgerichtet sind. Stellen Sie sich vor, eine Website könnte auf Ihre gespeicherten Passwörter oder andere sensible Informationen zugreifen und sich als Sie in Webseiten einloggen?

Trotz der Einschränkungen geben uns Web-APIs immer noch Zugriff auf eine Menge Funktionalität, die es uns ermöglicht, viele Dinge mit Webseiten zu tun. Es gibt einige wirklich offensichtliche Aspekte, auf die Sie regelmäßig in Ihrem Code verweisen werden — betrachten Sie das folgende Diagramm, das die Hauptteile eines Browsers darstellt, die direkt beim Betrachten von Webseiten beteiligt sind:

![Wichtige Teile eines Webbrowsers; das Dokument ist die Webseite. Das Fenster enthält das gesamte Dokument und auch den Tab. Der Navigator ist der Browser, der das Fenster (das das Dokument enthält) und alle anderen Fenster umfasst.](document-window-navigator.png)

- Das **Fenster** repräsentiert den Tab des Browsers, in den eine Webseite geladen ist; dies wird in JavaScript durch das [`Window`](/de/docs/Web/API/Window)-Objekt dargestellt. Mit den auf diesem Objekt verfügbaren Methoden können Sie Dinge wie die Größe des Fensters zurückgeben (siehe [`Window.innerWidth`](/de/docs/Web/API/Window/innerWidth) und [`Window.innerHeight`](/de/docs/Web/API/Window/innerHeight)), das in diesem Fenster geladene Dokument manipulieren, datenspezifische Daten clientseitig speichern (zum Beispiel mit einer lokalen Datenbank oder einem anderen Speichermedium), einen [Ereignishandler](/de/docs/Learn_web_development/Core/Scripting/Events) am aktuellen Fenster anhängen und mehr.
- Der **Navigator** repräsentiert den Zustand und die Identität des Browsers, wie er im Web existiert. In JavaScript wird dies durch das [`Navigator`](/de/docs/Web/API/Navigator)-Objekt dargestellt. Sie können dieses Objekt verwenden, um Dinge wie die bevorzugte Sprache des Benutzers oder einen Medienstream von der Webcam des Benutzers abzurufen.
- Das **Dokument** (im Browser durch das DOM dargestellt) ist die eigentliche Seite, die im Fenster geladen ist, und wird in JavaScript durch das [`Document`](/de/docs/Web/API/Document)-Objekt dargestellt. Sie können dieses Objekt verwenden, um Informationen über das HTML und CSS, aus denen das Dokument besteht, zurückzugeben und zu manipulieren, z.B. eine Referenz zu einem Element im DOM zu erhalten, seinen Textinhalt zu ändern, neue Stile darauf anzuwenden, neue Elemente zu erstellen und sie als Kinder dem aktuellen Element hinzuzufügen oder es sogar ganz zu löschen.

In diesem Artikel konzentrieren wir uns hauptsächlich auf die Manipulation des Dokuments, aber wir zeigen noch ein paar andere nützliche Details.

## Das Document Object Model

Lassen Sie uns einen kurzen Rückblick auf das Document Object Model (DOM) geben, das wir auch früher im Kurs betrachtet haben. Das aktuell in jedem Ihrer Browser-Tabs geladene Dokument wird durch ein DOM dargestellt. Dies ist eine "Baumstruktur"-Darstellung, die vom Browser erstellt wird und die es ermöglicht, die HTML-Struktur einfach von Programmiersprachen zuzugreifen — zum Beispiel verwendet der Browser es selbst, um Styling und andere Informationen auf die richtigen Elemente anzuwenden, wenn er eine Seite rendert, und Entwickler wie Sie können das DOM mit JavaScript manipulieren, nachdem die Seite gerendert wurde.

> [!NOTE]
> Scrimbas [The Document Object Model](https://scrimba.com/learn-javascript-c0v/~0g?via=mdn) <sup>[_MDN-Lernpartner_](/de/docs/MDN/Writing_guidelines/Learning_content#partner_links_and_embeds)</sup> bietet eine hilfreiche Einführung in den Begriff "DOM" und erklärt, was er bedeutet.

Wir haben eine Beispielseite unter [dom-example.html](https://github.com/mdn/learning-area/blob/main/javascript/apis/document-manipulation/dom-example.html) erstellt ([sehen Sie es auch live](https://mdn.github.io/learning-area/javascript/apis/document-manipulation/dom-example.html)). Versuchen Sie, diese in Ihrem Browser zu öffnen — es ist eine sehr einfache Seite, die ein {{htmlelement("section")}}-Element enthält, in dem sich ein Bild und ein Absatz mit einem Link darin befinden. Der HTML-Quellcode sieht folgendermaßen aus:

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

![Baumstruktur-Darstellung des Document Object Model: Der oberste Knoten ist der Doctype und das HTML-Element. Kindknoten des HTML sind Kopf und Körper. Jedes Kindelement ist ein Zweig. Auch jeder Text, selbst Leerzeichen, wird angezeigt.](dom-screenshot.png)

> [!NOTE]
> Dieses DOM-Baumbaum-Diagramm wurde mit Ian Hicksons [Live DOM viewer](https://software.hixie.ch/utilities/js/live-dom-viewer/) erstellt.

Jeder Eintrag im Baum wird als **Knoten** bezeichnet. In dem obigen Diagramm sehen Sie, dass einige Knoten Elemente darstellen (identifiziert als `HTML`, `HEAD`, `META` usw.) und andere Text repräsentieren (identifiziert als `#text`). Es gibt [weitere Knotentypen](/de/docs/Web/API/Node/nodeType), aber dies sind die Haupttypen, auf die Sie stoßen werden.

Knoten werden auch nach ihrer Position im Baum relativ zu anderen Knoten benannt:

- **Wurzelknoten**: Der oberste Knoten im Baum, der im Fall von HTML immer der `HTML`-Knoten ist (andere Markup-Vokabulare wie SVG und benutzerdefiniertes XML haben unterschiedliche Wurzelelemente).
- **Kindknoten**: Ein Knoten, der _direkt_ in einem anderen Knoten enthalten ist. Zum Beispiel ist `IMG` ein Kind von `SECTION` im obigen Beispiel.
- **Nachkommensknoten**: Ein Knoten, der _irgendwo_ in einem anderen Knoten enthalten ist. Zum Beispiel ist `IMG` ein Kind von `SECTION` im obigen Beispiel, und es ist auch ein Nachkomme. `IMG` ist kein Kind von `BODY`, da es zwei Ebenen darunter im Baum liegt, aber es ist ein Nachkomme von `BODY`.
- **Elternknoten**: Ein Knoten, der einen anderen Knoten in sich enthält. Zum Beispiel ist `BODY` der Elternknoten von `SECTION` im obigen Beispiel.
- **Geschwisterknoten**: Knoten, die auf der gleichen Ebene unter demselben Elternknoten im DOM-Baum sitzen. Zum Beispiel sind `IMG` und `P` Geschwister im obigen Beispiel.

Es ist nützlich, sich mit dieser Terminologie vertraut zu machen, bevor Sie mit dem DOM arbeiten, da viele der Codebegriffe, auf die Sie stoßen werden, darauf basieren. Sie werden ihnen auch in CSS begegnen (zum Beispiel Nachkomme-Selektor, Kind-Selektor).

## Durchführung einiger grundlegender DOM-Manipulationen

Um mit dem Lernen über DOM-Manipulationen zu beginnen, lassen Sie uns mit einem praktischen Beispiel beginnen.

1. Nehmen Sie eine lokale Kopie der [dom-example.html-Seite](https://github.com/mdn/learning-area/blob/main/javascript/apis/document-manipulation/dom-example.html) und des [Bildes](https://github.com/mdn/learning-area/blob/main/javascript/apis/document-manipulation/dinosaur.png), das dazu gehört.
2. Fügen Sie ein `<script></script>`-Element direkt über dem schließenden `</body>`-Tag hinzu.
3. Um ein Element im DOM zu manipulieren, müssen Sie es zuerst auswählen und eine Referenz darauf in einer Variablen speichern. Fügen Sie in Ihrem Skriptelement die folgende Zeile hinzu:

   ```js
   const link = document.querySelector("a");
   ```

4. Nun, da wir die Elementreferenz in einer Variablen gespeichert haben, können wir damit beginnen, sie mithilfe der darauf verfügbaren Eigenschaften und Methoden zu manipulieren (diese sind in Schnittstellen wie [`HTMLAnchorElement`](/de/docs/Web/API/HTMLAnchorElement) im Fall des {{htmlelement("a")}}-Elements definiert, seiner allgemeineren Eltern-Interface [`HTMLElement`](/de/docs/Web/API/HTMLElement) und [`Node`](/de/docs/Web/API/Node) — die alle Knoten in einem DOM darstellen). Lassen Sie uns zunächst den Text innerhalb des Links ändern, indem wir den Wert der [`Node.textContent`](/de/docs/Web/API/Node/textContent)-Eigenschaft aktualisieren. Fügen Sie die folgende Zeile unter der vorherigen hinzu:

   ```js
   link.textContent = "Mozilla Developer Network";
   ```

5. Wir sollten auch die URL ändern, auf die der Link verweist, damit er beim Klicken nicht an den falschen Ort führt. Fügen Sie die folgende Zeile hinzu, wiederum am Ende:

   ```js
   link.href = "https://developer.mozilla.org";
   ```

Beachten Sie, dass es wie bei vielen Dingen in JavaScript viele Möglichkeiten gibt, ein Element auszuwählen und eine Referenz darauf in einer Variablen zu speichern. [`Document.querySelector()`](/de/docs/Web/API/Document/querySelector) ist der empfohlene moderne Ansatz. Es ist praktisch, da es Ihnen ermöglicht, Elemente mit CSS-Selektoren auszuwählen. Der obige `querySelector()`-Aufruf wählt das erste {{htmlelement("a")}}-Element aus, das im Dokument erscheint. Wenn Sie mehrere Elemente auswählen und etwas damit tun wollten, könnten Sie [`Document.querySelectorAll()`](/de/docs/Web/API/Document/querySelectorAll) verwenden, das jedes Element im Dokument auswählt, das dem Selektor entspricht, und Referenzen darauf in einem [array](/de/docs/Learn_web_development/Core/Scripting/Arrays)-ähnlichen Objekt namens [`NodeList`](/de/docs/Web/API/NodeList) speichert.

Es gibt ältere Methoden, um Elementreferenzen zu erhalten, wie:

- [`Document.getElementById()`](/de/docs/Web/API/Document/getElementById), das ein Element mit einem gegebenen `id`-Attributwert auswählt, z.B. `<p id="myId">Mein Absatz</p>`. Die ID wird der Funktion als Parameter übergeben, i.e., `const elementRef = document.getElementById('myId')`.
- [`Document.getElementsByTagName()`](/de/docs/Web/API/Document/getElementsByTagName), das ein array-ähnliches Objekt zurückgibt, das alle Elemente auf der Seite eines bestimmten Typs enthält, zum Beispiel `<p>`s, `<a>`s usw. Der Elementtyp wird der Funktion als Parameter übergeben, i.e., `const elementRefArray = document.getElementsByTagName('p')`.

Diese beiden arbeiten in älteren Browsern besser als die modernen Methoden wie `querySelector()`, sind aber nicht so praktisch. Schauen Sie, welche anderen Sie finden können!

### Erstellen und Platzieren neuer Knoten

Das Obige hat Ihnen einen kleinen Vorgeschmack darauf gegeben, was Sie tun können, aber lassen Sie uns weiter gehen und sehen, wie wir neue Elemente erstellen können.

1. Kehren Sie zum aktuellen Beispiel zurück und greifen Sie zuerst auf unsere {{htmlelement("section")}}-Element-Referenz zu — fügen Sie den folgenden Code am Ende Ihres vorhandenen Skripts hinzu (tun Sie dies auch mit den anderen Zeilen):

   ```js
   const sect = document.querySelector("section");
   ```

2. Erstellen Sie nun ein neues Absatz-Element mit [`Document.createElement()`](/de/docs/Web/API/Document/createElement) und geben Sie ihm auf die gleiche Weise wie zuvor einen Textinhalt:

   ```js
   const para = document.createElement("p");
   para.textContent = "We hope you enjoyed the ride.";
   ```

3. Sie können den neuen Absatz nun am Ende der Sektion mit [`Node.appendChild()`](/de/docs/Web/API/Node/appendChild) anhängen:

   ```js
   sect.appendChild(para);
   ```

4. Schließlich, für diesen Teil, fügen wir dem Absatz, in dem der Link enthalten ist, einen Textknoten hinzu, um den Satz schön abzurunden. Zuerst erstellen wir den Textknoten mit [`Document.createTextNode()`](/de/docs/Web/API/Document/createTextNode):

   ```js
   const text = document.createTextNode(
     " — the premier source for web development knowledge.",
   );
   ```

5. Jetzt greifen wir auf die Referenz des Absatzes zu, in dem der Link enthalten ist, und hängen den Textknoten daran an:

   ```js
   const linkPara = document.querySelector("p");
   linkPara.appendChild(text);
   ```

Das ist das meiste, was Sie benötigen, um Knoten zum DOM hinzuzufügen — Sie werden diese Methoden oft verwenden, wenn Sie dynamische Schnittstellen erstellen (wir werden uns später einige Beispiele ansehen).

### Elemente verschieben und entfernen

Es kann Zeiten geben, in denen Sie Knoten verschieben oder vollständig aus dem DOM entfernen möchten. Dies ist durchaus möglich.

Wenn wir den Absatz mit dem darin enthaltenen Link an das Ende der Sektion verschieben wollten, könnten wir dies tun:

```js
sect.appendChild(linkPara);
```

Dadurch wird der Absatz an das Ende der Sektion verschoben. Sie könnten gedacht haben, dass es eine zweite Kopie davon erstellt, aber das ist nicht der Fall — `linkPara` ist eine Referenz auf die einzige Kopie dieses Absatzes. Wenn Sie eine Kopie erstellen und diese auch hinzufügen wollten, müssten Sie stattdessen [`Node.cloneNode()`](/de/docs/Web/API/Node/cloneNode) verwenden.

Das Entfernen eines Knotens ist ebenfalls ziemlich einfach, zumindest wenn Sie eine Referenz auf den zu entfernenden Knoten und seinen Elternteil haben. In unserem aktuellen Fall verwenden wir einfach [`Node.removeChild()`](/de/docs/Web/API/Node/removeChild), wie folgt:

```js
sect.removeChild(linkPara);
```

Wenn Sie einen Knoten nur basierend auf einer Referenz auf sich selbst entfernen möchten, was ziemlich häufig vorkommt, können Sie [`Element.remove()`](/de/docs/Web/API/Element/remove) verwenden:

```js
linkPara.remove();
```

Diese Methode wird in älteren Browsern nicht unterstützt. Sie haben keine Methode, um einem Knoten zu sagen, dass er sich selbst entfernen soll, daher müssten Sie Folgendes tun:

```js
linkPara.parentNode.removeChild(linkPara);
```

Versuchen Sie, die obigen Zeilen in Ihren Code aufzunehmen.

### Manipulation von Stilen

Es ist möglich, CSS-Stile über JavaScript auf verschiedene Arten zu manipulieren.

Zu Beginn können Sie eine Liste von allen Stylesheets, die einem Dokument angehangen sind, mit [`Document.styleSheets`](/de/docs/Web/API/Document/styleSheets) erhalten, die ein array-ähnliches Objekt mit [`CSSStyleSheet`](/de/docs/Web/API/CSSStyleSheet) Objekten zurückgibt. Sie können dann Stile nach Belieben hinzufügen oder entfernen. Wir werden jedoch nicht weiter auf diese Funktionen eingehen, da sie eine etwas archaische und schwierige Art sind, Stile zu manipulieren. Es gibt viel einfachere Wege.

Der erste Weg besteht darin, Inline-Stile direkt auf die Elemente zu setzen, die Sie dynamisch stylen möchten. Dies geschieht mit der [`HTMLElement.style`](/de/docs/Web/API/HTMLElement/style)-Eigenschaft, die Inline-Stylinginformationen für jedes Element im Dokument enthält. Sie können Eigenschaften dieses Objekts setzen, um Elementstile direkt zu aktualisieren.

1. Probieren Sie als ein Beispiel aus, diese Zeilen zu unserem laufenden Beispiel hinzuzufügen:

   ```js
   para.style.color = "white";
   para.style.backgroundColor = "black";
   para.style.padding = "10px";
   para.style.width = "250px";
   para.style.textAlign = "center";
   ```

2. Laden Sie die Seite neu, und Sie werden sehen, dass die Stile auf den Absatz angewendet werden. Wenn Sie sich diesen Absatz in Ihrem Browser [Page Inspector/DOM inspector](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/index.html) ansehen, werden Sie sehen, dass diese Zeilen tatsächlich Inline-Stile zum Dokument hinzufügen:

   ```html
   <p
     style="color: white; background-color: black; padding: 10px; width: 250px; text-align: center;">
     We hope you enjoyed the ride.
   </p>
   ```

> [!NOTE]
> Beachten Sie, wie die JavaScript-Verionen der CSS-Stile in {{Glossary("camel_case", "lower camel case")}} geschrieben sind, während die CSS-Versionen mit Bindestrichen ({{Glossary("kebab_case", "kebab-case")}}) geschrieben sind (z.B. `backgroundColor` vs. `background-color`). Stellen Sie sicher, dass Sie diesen Unterschied nicht verwechseln, sonst funktioniert es nicht.

Es gibt eine weitere gängige Methode zur dynamischen Manipulation von Stilen in Ihrem Dokument, die wir uns jetzt ansehen.

1. Löschen Sie die vorherigen fünf Zeilen, die Sie zum JavaScript hinzugefügt haben.
2. Fügen Sie das Folgende in Ihrem HTML {{htmlelement("head")}} hinzu:

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

3. Nun wenden wir uns einer sehr nützlichen Methode zur allgemeinen HTML-Manipulation zu — [`Element.setAttribute()`](/de/docs/Web/API/Element/setAttribute) — diese nimmt zwei Argumente an, das Attribut, das Sie auf dem Element setzen möchten, und den Wert, auf den Sie es setzen möchten. In diesem Fall setzen wir einen Klassennamen von highlight auf unseren Absatz:

   ```js
   para.setAttribute("class", "highlight");
   ```

4. Aktualisieren Sie Ihre Seite und Sie werden keine Änderung sehen — das CSS wird weiterhin auf den Absatz angewendet, aber diesmal, indem ihm eine Klasse zugewiesen wird, die von unserer CSS-Regel ausgewählt wird, nicht als Inline-CSS-Stile.

Welche Methode Sie wählen, liegt bei Ihnen; beide haben ihre Vor- und Nachteile. Die erste Methode erfordert weniger Einrichtung und ist gut für einfache Verwendungen, während die zweite Methode puristischer ist (keine Vermischung von CSS und JavaScript, keine Inline-Stile, die als schlechte Praxis angesehen werden). Wenn Sie anfangen, größere und umfangreichere Apps zu erstellen, werden Sie wahrscheinlich häufiger die zweite Methode verwenden, aber es liegt wirklich an Ihnen.

An diesem Punkt haben wir nichts wirklich Nützliches gemacht! Es gibt keinen Grund, JavaScript zu verwenden, um statische Inhalte zu erstellen — Sie könnten sie genauso gut in Ihr HTML schreiben und kein JavaScript verwenden. Es ist komplexer als HTML, und das Erstellen Ihrer Inhalte mit JavaScript hat auch andere damit verbundene Probleme (wie das Nichtlesbarkeit durch Suchmaschinen).

Im nächsten Abschnitt werden wir uns eine praktischere Verwendung der DOM-APIs ansehen.

> [!NOTE]
> Sie können unsere [fertige Version des dom-example.html](https://github.com/mdn/learning-area/blob/main/javascript/apis/document-manipulation/dom-example-manipulated.html) Demos auf GitHub finden ([sehen Sie es auch live](https://mdn.github.io/learning-area/javascript/apis/document-manipulation/dom-example-manipulated.html)).

## Erstellen einer dynamischen Einkaufsliste

In dieser Übung möchten wir, dass Sie eine dynamische Einkaufsliste erstellen, die es Ihnen ermöglicht, Elemente über ein Formulareingabefeld und eine Schaltfläche hinzuzufügen. Wenn Sie ein Element eingeben und die Schaltfläche drücken:

- Das Element sollte in der Liste erscheinen.
- Jedes Element sollte eine Schaltfläche haben, die gedrückt werden kann, um dieses Element von der Liste zu löschen.
- Das Eingabefeld sollte geleert und fokussiert werden, bereit für die Eingabe eines weiteren Elements.

Das fertige Demo sieht in etwa so aus wie das Folgende — probieren Sie es aus, bevor Sie es erstellen!

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

Um die Übung abzuschließen, folgen Sie den untenstehenden Schritten und stellen Sie sicher, dass die Liste wie beschrieben funktioniert.

1. Laden Sie zunächst eine Kopie unseres [shopping-list.html](https://github.com/mdn/learning-area/blob/main/javascript/apis/document-manipulation/shopping-list.html) Startdatei herunter und machen Sie eine Kopie davon irgendwo. Sie werden sehen, dass sie ein minimales CSS hat, ein div mit einem Label, Eingabefeld und Button, sowie eine leere Liste und {{htmlelement("script")}}-Element. Sie werden alle Ihre Ergänzungen im Skript vornehmen.
2. Erstellen Sie drei Variablen, die Referenzen auf die Liste ({{htmlelement("ul")}}), das {{htmlelement("input")}} und das {{htmlelement("button")}} Element halten.
3. Erstellen Sie eine [Funktion](/de/docs/Learn_web_development/Core/Scripting/Functions), die als Antwort auf das Klicken der Schaltfläche ausgeführt wird.
4. Speichern Sie innerhalb des Funktionskörpers zunächst den aktuellen [Wert](/de/docs/Web/API/HTMLInputElement/value) des Eingabeelements in einer Variablen.
5. Leeren Sie als Nächstes das Eingabeelement, indem Sie seinen Wert auf einen leeren String setzen — `""`.
6. Erstellen Sie drei neue Elemente — ein Listenelement ({{htmlelement('li')}}), {{htmlelement('span')}} und {{htmlelement('button')}}, und speichern Sie sie in Variablen.
7. Hängen Sie das span und die Schaltfläche als Kinder des Listenelements an.
8. Setzen Sie den Textinhalt des spans auf den zuvor gespeicherten Wert des Eingabeelements und den Textinhalt der Schaltfläche auf 'Löschen'.
9. Hängen Sie das Listenelement als Kind der Liste an.
10. Fügen Sie der Löschen-Schaltfläche einen Ereignishandler hinzu, sodass, wenn darauf geklickt wird, das gesamte Listenelement (`<li>...</li>`) gelöscht wird.
11. Verwenden Sie schließlich die [`focus()`](/de/docs/Web/API/HTMLElement/focus)-Methode, um das Eingabeelement für die Eingabe des nächsten Einkaufslistenelements zu fokussieren.

## Zusammenfassung

Wir haben das Ende unserer Studie über Dokumenten- und DOM-Manipulation erreicht. An diesem Punkt sollten Sie verstehen, was die wichtigen Teile eines Webbrowsers in Bezug auf die Steuerung von Dokumenten und anderen Aspekten der Benutzererfahrung im Web sind. Am wichtigsten ist, dass Sie verstehen sollten, was das Document Object Model ist und wie Sie es manipulieren können, um nützliche Funktionalität zu erstellen.

## Siehe auch

- Es gibt noch viele weitere Funktionen, die Sie zur Manipulation Ihrer Dokumente verwenden können. Schauen Sie sich einige unserer Referenzen an und sehen Sie, was Sie entdecken können:
  - [`Document`](/de/docs/Web/API/Document)
  - [`Window`](/de/docs/Web/API/Window)
  - [`Node`](/de/docs/Web/API/Node)
  - [`HTMLElement`](/de/docs/Web/API/HTMLElement), [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement), [`HTMLImageElement`](/de/docs/Web/API/HTMLImageElement) usw.
- [DOM Scripting](https://explainers.dev/dom-scripting/), explainers.dev

{{PreviousMenuNext("Learn_web_development/Core/Scripting/Test_your_skills/Object_basics","Learn_web_development/Core/Scripting/Network_requests", "Learn_web_development/Core/Scripting")}}
