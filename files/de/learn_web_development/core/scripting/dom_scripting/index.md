---
title: Einführung in DOM-Scripting
slug: Learn_web_development/Core/Scripting/DOM_scripting
l10n:
  sourceCommit: ef472690cc383fc77d7aa53ddec036b5efa3b526
---

{{LearnSidebar}}

{{PreviousMenuNext("Learn_web_development/Core/Scripting/Object_basics","Learn_web_development/Core/Scripting/Network_requests", "Learn_web_development/Core/Scripting")}}

Beim Schreiben von Webseiten und Apps ist eine der häufigsten Aufgaben die Änderung der Dokumentstruktur. Dies erfolgt normalerweise durch Manipulation des Document Object Model (DOM) über eine Reihe von integrierten Browser-APIs zur Steuerung von HTML- und Styling-Informationen. In diesem Artikel werden wir Sie in das **DOM-Scripting** einführen.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>Ein Verständnis von <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a> und den <a href="/de/docs/Learn_web_development/Core/Styling_basics">Grundlagen von CSS</a>, Vertrautheit mit den JavaScript-Grundlagen, wie sie in früheren Lektionen behandelt wurden.</td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Was das DOM ist — die interne Repräsentation des HTML-Struktur eines Dokuments im Browser als Hierarchie von Objekten.</li>
          <li>Die wichtigen Teile eines Webbrowsers, wie sie in JavaScript repräsentiert werden — <code>Navigator</code>, <code>Window</code>, und <code>Document</code>.</li>
          <li>Wie DOM-Knoten relativ zueinander im DOM-Baum existieren — Wurzel, Elternteil, Kind, Geschwister und Nachkomme.</li>
          <li>Referenzen auf DOM-Knoten erhalten, neue Knoten erstellen, Knoten und Attribute hinzufügen und entfernen.</li>
          <li>Manipulation von CSS-Stilen mit JavaScript.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Die wichtigen Teile eines Webbrowsers

Webbrowser sind sehr komplexe Softwareteile mit vielen beweglichen Teilen, von denen viele nicht von einem Webentwickler mit JavaScript gesteuert oder manipuliert werden können. Sie könnten denken, dass solche Einschränkungen negativ sind, aber Browser sind aus guten Gründen gesperrt, die sich meist um Sicherheit drehen. Stellen Sie sich vor, eine Website könnte auf Ihre gespeicherten Passwörter oder andere sensible Informationen zugreifen und sich in Websites einloggen, als wären Sie es selbst?

Trotz der Einschränkungen geben Web-APIs uns immer noch Zugang zu vielen Funktionen, die es uns ermöglichen, eine Vielzahl von Dingen mit Webseiten zu tun. Es gibt einige sehr offensichtliche Dinge, auf die Sie regelmäßig in Ihrem Code verweisen werden — betrachten Sie das folgende Diagramm, das die Hauptteile eines Browsers darstellt, die direkt an der Anzeige von Webseiten beteiligt sind:

![Wichtige Teile eines Webbrowsers; das Dokument ist die Webseite. Das Fenster umfasst das gesamte Dokument und auch den Tab. Der Navigator ist der Browser, der das Fenster (das das Dokument umfasst) und alle anderen Fenster umfasst.](document-window-navigator.png)

- Das Fenster ist der Browsertab, in dem eine Webseite geladen wird; dies wird in JavaScript durch das [`Window`](/de/docs/Web/API/Window)-Objekt dargestellt. Mithilfe von Methoden, die auf diesem Objekt verfügbar sind, können Sie Dinge tun wie die Größe des Fensters zurückgeben (siehe [`Window.innerWidth`](/de/docs/Web/API/Window/innerWidth) und [`Window.innerHeight`](/de/docs/Web/API/Window/innerHeight)), das Dokument manipulieren, das in dieses Fenster geladen ist, oder client-seitige datenspezifische Dokumente speichern (zum Beispiel unter Verwendung einer lokalen Datenbank oder anderer Speichermethoden), einen [Ereignis-Handler](/de/docs/Learn_web_development/Core/Scripting/Events) an das aktuelle Fenster anhängen und mehr.
- Der Navigator repräsentiert den Zustand und die Identität des Browsers (d. h. die Benutzer-Agent) wie er im Web existiert. In JavaScript wird dies durch das [`Navigator`](/de/docs/Web/API/Navigator)-Objekt dargestellt. Sie können dieses Objekt verwenden, um Dinge wie die bevorzugte Sprache des Benutzers abzurufen, einen Medienstream von der Webcam des Benutzers usw.
- Das Dokument (vertreten durch das DOM in Browsern) ist die eigentliche Seite, die in das Fenster geladen wurde, und wird in JavaScript durch das [`Document`](/de/docs/Web/API/Document)-Objekt dargestellt. Sie können dieses Objekt verwenden, um Informationen zu HTML und CSS, die das Dokument ausmachen, zurückzugeben und zu manipulieren, zum Beispiel auf ein Element im DOM zuzugreifen, seinen Textinhalt zu ändern, neue Stile darauf anzuwenden, neue Elemente zu erstellen und sie als Kinder dem aktuellen Element hinzuzufügen oder es sogar ganz zu löschen.

In diesem Artikel werden wir uns hauptsächlich auf die Manipulation des Dokuments konzentrieren, aber wir zeigen auch einige andere nützliche Dinge.

## Das Document Object Model

Lassen Sie uns eine kurze Zusammenfassung über das Document Object Model (DOM) geben, das wir bereits im Kurs betrachtet haben. Das Dokument, das derzeit in einem Ihrer Browsertabs geladen ist, wird durch ein DOM dargestellt. Dies ist eine "Baumstruktur"-Darstellung, die vom Browser erstellt wird und es ermöglicht, die HTML-Struktur leicht mit Programmiersprachen zuzugreifen — zum Beispiel verwendet der Browser es selbst, um Styling und andere Informationen auf die richtigen Elemente anzuwenden, wenn er eine Seite rendert, und Entwickler wie Sie können das DOM mit JavaScript manipulieren, nachdem die Seite gerendert wurde.

Wir haben eine Beispielseite unter [dom-example.html](https://github.com/mdn/learning-area/blob/main/javascript/apis/document-manipulation/dom-example.html) erstellt ([sehen Sie sich diese auch live an](https://mdn.github.io/learning-area/javascript/apis/document-manipulation/dom-example.html)). Versuchen Sie, dies in Ihrem Browser zu öffnen — es ist eine sehr einfache Seite, die ein {{htmlelement("section")}}-Element enthält, in dem sich ein Bild und ein Absatz mit einem Link befinden. Der HTML-Quellcode sieht folgendermaßen aus:

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
        alt="A red Tyrannosaurus Rex: A two legged dinosaur standing upright like a human, with small arms, and a large head with lots of sharp teeth." />
      <p>
        Here we will add a link to the
        <a href="https://www.mozilla.org/">Mozilla homepage</a>
      </p>
    </section>
  </body>
</html>
```

Das DOM hingegen sieht folgendermaßen aus:

![Baumstruktur Darstellung des Document Object Model: Der oberste Knoten ist der Doctype und das HTML-Element. Kindknoten des HTML sind Kopf und Körper. Jedes Kindelement ist ein Zweig. Auch alle Texte, einschließlich Leerzeichen, werden angezeigt.](dom-screenshot.png)

> [!NOTE]
> Dieses DOM-Baumdiagramm wurde mit Ian Hicksons [Live DOM viewer](https://software.hixie.ch/utilities/js/live-dom-viewer/) erstellt.

Jeder Eintrag im Baum wird als **Knoten** bezeichnet. Sie können im obigen Diagramm sehen, dass einige Knoten Elemente darstellen (identifiziert als `HTML`, `HEAD`, `META` und so weiter) und andere Text darstellen (identifiziert als `#text`). Es gibt [auch andere Knotentypen](/de/docs/Web/API/Node/nodeType), aber dies sind die Haupttypen, denen Sie begegnen werden.

Knoten werden auch anhand ihrer Position im Baum relativ zu anderen Knoten bezeichnet:

- **Wurzelknoten**: Der oberste Knoten im Baum, der im Fall von HTML immer der `HTML`-Knoten ist (andere Markup-Vokabularien wie SVG und benutzerdefinierte XML haben unterschiedliche Wurzelelemente).
- **Kindknoten**: Ein Knoten _direkt_ innerhalb eines anderen Knotens. Zum Beispiel ist `IMG` ein Kind von `SECTION` im obigen Beispiel.
- **Nachkommenknoten**: Ein Knoten _immer_ innerhalb eines anderen Knotens. Zum Beispiel ist `IMG` ein Kind von `SECTION` im obigen Beispiel und es ist auch ein Nachkomme. `IMG` ist kein Kind von `BODY`, da es zwei Ebenen darunter liegt, aber es ist ein Nachkomme von `BODY`.
- **Elternknoten**: Ein Knoten, der einen anderen Knoten innerhalb von sich hat. Zum Beispiel ist `BODY` der Elternknoten von `SECTION` im obigen Beispiel.
- **Geschwisterknoten**: Knoten, die auf derselben Ebene unter demselben Elternknoten im DOM-Baum sitzen. Zum Beispiel sind `IMG` und `P` Geschwister im obigen Beispiel.

Es ist nützlich, sich mit dieser Terminologie vertraut zu machen, bevor Sie mit dem DOM arbeiten, da eine Reihe der von Ihnen verwendeten Codebegriffe auf ihnen basieren. Sie werden ihnen auch in CSS begegnen (z. B. Nachkommensselektor, Kindselektor).

## Aktives Lernen: Grundlagen der DOM-Manipulation

Um mit dem Lernen über die DOM-Manipulation zu beginnen, lassen Sie uns mit einem praktischen Beispiel beginnen.

1. Nehmen Sie eine lokale Kopie der [dom-example.html Seite](https://github.com/mdn/learning-area/blob/main/javascript/apis/document-manipulation/dom-example.html) und des [Bildes](https://github.com/mdn/learning-area/blob/main/javascript/apis/document-manipulation/dinosaur.png), das dazu gehört.
2. Fügen Sie ein `<script></script>`-Element direkt über dem schließenden `</body>`-Tag hinzu.
3. Um ein Element innerhalb des DOMs zu manipulieren, müssen Sie es zuerst auswählen und eine Referenz darauf in einer Variablen speichern. Fügen Sie in Ihrem Skriptelement die folgende Zeile hinzu:

   ```js
   const link = document.querySelector("a");
   ```

4. Jetzt, da wir die Elementreferenz in einer Variablen gespeichert haben, können wir beginnen, sie mit den verfügbaren Eigenschaften und Methoden zu manipulieren (diese sind auf Schnittstellen wie [`HTMLAnchorElement`](/de/docs/Web/API/HTMLAnchorElement) im Fall des {{htmlelement("a")}}-Elements, seiner allgemeineren übergeordneten Schnittstelle [`HTMLElement`](/de/docs/Web/API/HTMLElement) und [`Node`](/de/docs/Web/API/Node) — die alle Knoten in einem DOM darstellt — definiert). Lassen Sie uns zunächst den Text innerhalb des Links ändern, indem wir den Wert der [`Node.textContent`](/de/docs/Web/API/Node/textContent)-Eigenschaft aktualisieren. Fügen Sie die folgende Zeile unter der vorherigen hinzu:

   ```js
   link.textContent = "Mozilla Developer Network";
   ```

5. Wir sollten auch die URL des Links ändern, damit er nicht an den falschen Ort gelangt, wenn darauf geklickt wird. Fügen Sie die folgende Zeile erneut am Ende hinzu:

   ```js
   link.href = "https://developer.mozilla.org";
   ```

Beachten Sie, dass es, wie bei vielen Dingen in JavaScript, viele Möglichkeiten gibt, ein Element auszuwählen und eine Referenz darauf in einer Variablen zu speichern. [`Document.querySelector()`](/de/docs/Web/API/Document/querySelector) ist die empfohlene moderne Methode. Es ist praktisch, weil es Ihnen erlaubt, Elemente mit CSS-Selektoren auszuwählen. Der obige `querySelector()`-Aufruf wird das erste im Dokument erscheinende {{htmlelement("a")}}-Element auswählen. Wenn Sie mehrere Elemente auswählen und etwas damit tun möchten, können Sie [`Document.querySelectorAll()`](/de/docs/Web/API/Document/querySelectorAll) verwenden, das jedes Element im Dokument auswählt, das den Selektor erfüllt, und Referenzen darauf in einem [Array](/de/docs/Learn_web_development/Core/Scripting/Arrays)-ähnlichen Objekt namens [`NodeList`](/de/docs/Web/API/NodeList) speichert.

Es gibt ältere Methoden, um Elementreferenzen zu erhalten, wie:

- [`Document.getElementById()`](/de/docs/Web/API/Document/getElementById), das ein Element mit einem gegebenen `id`-Attributwert auswählt, z. B. `<p id="myId">Mein Absatz</p>`. Die ID wird der Funktion als Parameter übergeben, d. h. `const elementRef = document.getElementById('myId')`.
- [`Document.getElementsByTagName()`](/de/docs/Web/API/Document/getElementsByTagName), das ein Array-ähnliches Objekt zurückgibt, das alle Elemente auf der Seite eines gegebenen Typs enthält, zum Beispiel `<p>`s, `<a>`s usw. Der Elementtyp wird der Funktion als Parameter übergeben, d. h. `const elementRefArray = document.getElementsByTagName('p')`.

Diese beiden funktionieren besser in älteren Browsern als die modernen Methoden wie `querySelector()`, sind aber nicht so praktisch. Schauen Sie nach, welche andere Sie finden können!

### Erstellen und Platzieren neuer Knoten

Das Obige hat Ihnen einen kleinen Vorgeschmack auf das gegeben, was Sie tun können, aber lassen Sie uns weitergehen und sehen, wie wir neue Elemente erstellen können.

1. Kehren wir zum aktuellen Beispiel zurück, lassen Sie uns mit dem Abrufen einer Referenz auf unser {{htmlelement("section")}}-Element beginnen — fügen Sie den folgenden Code am Ende Ihres bestehenden Skripts hinzu (tun Sie dasselbe für die anderen Zeilen):

   ```js
   const sect = document.querySelector("section");
   ```

2. Lassen Sie uns jetzt einen neuen Absatz mit [`Document.createElement()`](/de/docs/Web/API/Document/createElement) erstellen und ihm auf dieselbe Weise wie zuvor einen Textinhalt geben:

   ```js
   const para = document.createElement("p");
   para.textContent = "We hope you enjoyed the ride.";
   ```

3. Sie können den neuen Absatz nun am Ende des Abschnitts mit [`Node.appendChild()`](/de/docs/Web/API/Node/appendChild) anheften:

   ```js
   sect.appendChild(para);
   ```

4. Schließlich, für diesen Teil, fügen wir dem Absatz, in dem sich der Link befindet, einen Textknoten hinzu, um den Satz schön abzurunden. Zuerst erstellen wir den Textknoten mit [`Document.createTextNode()`](/de/docs/Web/API/Document/createTextNode):

   ```js
   const text = document.createTextNode(
     " — the premier source for web development knowledge.",
   );
   ```

5. Nun holen wir uns eine Referenz auf den Absatz, in dem sich der Link befindet, und hängen den Textknoten daran an:

   ```js
   const linkPara = document.querySelector("p");
   linkPara.appendChild(text);
   ```

Das ist das meiste, was Sie zum Hinzufügen von Knoten zum DOM benötigen — Sie werden diese Methoden häufig verwenden, wenn Sie dynamische Schnittstellen erstellen (wir werden uns später einige Beispiele ansehen).

### Verschieben und Entfernen von Elementen

Es kann vorkommen, dass Sie Knoten verschieben oder sie ganz aus dem DOM löschen möchten. Dies ist durchaus möglich.

Wenn wir den Absatz mit dem Link darin an das Ende des Abschnitts verschieben wollten, könnten wir dies tun:

```js
sect.appendChild(linkPara);
```

Dies verschiebt den Absatz an das Ende des Abschnitts. Sie könnten gedacht haben, dass er eine zweite Kopie davon erstellt, aber das ist nicht der Fall — `linkPara` ist eine Referenz auf die einzige Kopie dieses Absatzes. Wenn Sie eine Kopie erstellen und diese ebenfalls hinzufügen wollten, müssten Sie stattdessen [`Node.cloneNode()`](/de/docs/Web/API/Node/cloneNode) verwenden.

Einen Knoten zu entfernen ist ebenfalls ziemlich einfach, zumindest wenn Sie eine Referenz auf den zu entfernenden Knoten und seinen Elternknoten haben. In unserem aktuellen Fall verwenden wir einfach [`Node.removeChild()`](/de/docs/Web/API/Node/removeChild), so:

```js
sect.removeChild(linkPara);
```

Wenn Sie einen Knoten basierend auf einer Referenz zu sich selbst entfernen möchten, was recht häufig vorkommt, können Sie [`Element.remove()`](/de/docs/Web/API/Element/remove) verwenden:

```js
linkPara.remove();
```

Diese Methode wird in älteren Browsern nicht unterstützt. Sie haben keine Methode, um einem Knoten zu sagen, dass er sich selbst entfernen soll, sodass Sie Folgendes tun müssten:

```js
linkPara.parentNode.removeChild(linkPara);
```

Versuchen Sie, die obigen Zeilen zu Ihrem Code hinzuzufügen.

### Stilmanipulation

Es ist möglich, CSS-Stile über JavaScript auf verschiedene Weise zu manipulieren.

Zu Beginn können Sie eine Liste aller Stylesheets abrufen, die an ein Dokument angehängt sind, indem Sie [`Document.stylesheets`](/de/docs/Web/API/Document/stylesheets) verwenden, das ein Array-ähnliches Objekt mit [`CSSStyleSheet`](/de/docs/Web/API/CSSStyleSheet)-Objekten zurückgibt. Sie können dann Styles hinzufügen/entfernen. Wir werden jedoch nicht weiter auf diese Funktionen eingehen, da sie eine etwas archaische und schwierige Methode darstellen, um Stil zu manipulieren. Es gibt viel einfachere Möglichkeiten.

Die erste Methode besteht darin, Inline-Stile direkt auf Elemente aufzubringen, die Sie dynamisch stylen möchten. Dies geschieht mit der [`HTMLElement.style`](/de/docs/Web/API/HTMLElement/style)-Eigenschaft, die Inline-Styling-Informationen für jedes Element im Dokument enthält. Sie können Eigenschaften dieses Objekts setzen, um Elementstile direkt zu aktualisieren.

1. Fügen Sie beispielsweise diese Zeilen zu unserem laufenden Beispiel hinzu:

   ```js
   para.style.color = "white";
   para.style.backgroundColor = "black";
   para.style.padding = "10px";
   para.style.width = "250px";
   para.style.textAlign = "center";
   ```

2. Laden Sie die Seite neu, und Sie werden sehen, dass die Stile auf den Absatz angewendet wurden. Wenn Sie sich diesen Absatz in Ihrem Browser- [Page Inspector/DOM inspector](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/index.html) ansehen, werden Sie sehen, dass diese Zeilen tatsächlich Inline-Stile zum Dokument hinzufügen:

   ```html
   <p
     style="color: white; background-color: black; padding: 10px; width: 250px; text-align: center;">
     We hope you enjoyed the ride.
   </p>
   ```

> [!NOTE]
> Beachten Sie, wie die JavaScript-Versionen der CSS-Stile im {{Glossary("camel_case", "Kamel-Schreibstil")}} geschrieben sind, während die CSS-Versionen durch Bindestriche getrennt sind ({{Glossary("kebab_case", "Kebab-Schreibweise")}}) (zum Beispiel `backgroundColor` gegenüber `background-color`). Achten Sie darauf, dass Sie diese nicht verwechseln, da es sonst nicht funktioniert.

Es gibt eine andere übliche Methode, um Stile in Ihrem Dokument dynamisch zu manipulieren, die wir uns jetzt ansehen werden.

1. Löschen Sie die vorherigen fünf Zeilen, die Sie zum JavaScript hinzugefügt haben.
2. Fügen Sie das folgende in Ihr HTML-{{htmlelement("head")}} ein:

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

3. Jetzt wenden wir uns einer sehr nützlichen Methode zur allgemeinen HTML-Manipulation zu — [`Element.setAttribute()`](/de/docs/Web/API/Element/setAttribute) — diese nimmt zwei Argumente, das Attribut, das Sie auf dem Element setzen möchten, und den Wert, auf den Sie es setzen möchten. In diesem Fall werden wir einen Klassennamen highlight auf unseren Absatz setzen:

   ```js
   para.setAttribute("class", "highlight");
   ```

4. Aktualisieren Sie Ihre Seite und Sie werden keine Änderung sehen — die CSS wird immer noch auf den Absatz angewendet, aber diesmal, indem es ihm eine Klasse gibt, die von unserer CSS-Regel ausgewählt wird, nicht als Inline-CSS-Stile.

Welche Methode Sie wählen, liegt bei Ihnen; beide haben ihre Vor- und Nachteile. Die erste Methode erfordert weniger Vorbereitung und ist gut für einfache Anwendungen, während die zweite Methode mehr puristisch ist (kein CSS und JavaScript vermischen, keine Inline-Stile, die als schlechte Praxis angesehen werden). Wenn Sie anfangen, größere und involviertere Apps zu entwickeln, werden Sie wahrscheinlich die zweite Methode mehr verwenden, aber es liegt wirklich an Ihnen.

Bis jetzt haben wir eigentlich noch nichts Nützliches getan! Es hat keinen Sinn, statische Inhalte mit JavaScript zu erstellen - Sie könnten sie genauso gut in Ihr HTML schreiben und kein JavaScript verwenden. Es ist komplexer als HTML, und die Erstellung von Inhalten mit JavaScript hat auch andere damit verbundene Probleme (wie dass sie von Suchmaschinen nicht gelesen werden können).

Im nächsten Abschnitt werden wir uns eine praktischere Verwendung von DOM-APIs ansehen.

> [!NOTE]
> Sie können unsere [fertige Version der dom-example.html](https://github.com/mdn/learning-area/blob/main/javascript/apis/document-manipulation/dom-example-manipulated.html) Demo auf GitHub finden ([sehen Sie sie auch live](https://mdn.github.io/learning-area/javascript/apis/document-manipulation/dom-example-manipulated.html)).

## Aktives Lernen: Eine dynamische Einkaufsliste

In dieser Herausforderung wollen wir ein einfaches Einkaufsliste-Beispiel erstellen, das es Ihnen ermöglicht, Elemente der Liste dynamisch mit einem Formulareingang und einem Button hinzuzufügen. Wenn Sie ein Element in den Input eingeben und den Button drücken:

- Sollte das Element in der Liste erscheinen.
- Jedes Element sollte mit einem Button versehen sein, der gedrückt werden kann, um dieses Element aus der Liste zu löschen.
- Der Input sollte geleert und für die Eingabe eines weiteren Elements fokussiert werden.

Das fertige Demo sieht ungefähr so aus:

![Demo-Layout einer Einkaufsliste. Ein 'meine Einkaufsliste' Header, gefolgt von 'Geben Sie ein neues Element ein' mit einem Eingabefeld und 'Element hinzufügen' Button. Die Liste der bereits hinzugefügten Elemente ist unten, jeweils mit einem entsprechenden Löschbutton.](shopping-list.png)

Um die Übung abzuschließen, folgen Sie den unten stehenden Schritten und stellen Sie sicher, dass sich die Liste wie beschrieben verhält.

1. Laden Sie zu Beginn eine Kopie unserer [shopping-list.html](https://github.com/mdn/learning-area/blob/main/javascript/apis/document-manipulation/shopping-list.html) Startdatei herunter und machen Sie eine Kopie davon irgendwo. Sie werden sehen, dass es ein minimales CSS, ein div mit einem Label, einem Input und einem Button sowie einer leeren Liste und einem {{htmlelement("script")}}-Element gibt. Alle Ihre Ergänzungen machen Sie im Script.
2. Erstellen Sie drei Variablen, die Referenzen auf die Liste ({{htmlelement("ul")}}), das {{htmlelement("input")}} und das {{htmlelement("button")}}-Element halten.
3. Erstellen Sie eine [Funktion](/de/docs/Learn_web_development/Core/Scripting/Functions), die als Reaktion auf das Drücken des Buttons ausgeführt wird.
4. Speichern Sie zu Beginn im Funktionskörper den aktuellen [Wert](/de/docs/Web/API/HTMLInputElement/value) des Eingabeelements in einer Variablen.
5. Leeren Sie als nächstes das Eingabeelement, indem Sie seinen Wert auf einen leeren String setzen — `''`.
6. Erstellen Sie drei neue Elemente — ein Listenelement ({{htmlelement('li')}}), {{htmlelement('span')}} und {{htmlelement('button')}} und speichern Sie diese in Variablen.
7. Hängen Sie den span und den Button als Kinder des Listenelements an.
8. Setzen Sie den Textinhalt des span auf den zuvor gespeicherten Wert des Eingabeelements, und den Textinhalt des Buttons auf 'Löschen'.
9. Fügen Sie das Listenelement als Kind der Liste hinzu.
10. Binden Sie einen Event-Handler an den Lösch-Button, sodass, wenn dieser geklickt wird, das gesamte Listen-Element (`<li>...</li>`) gelöscht wird.
11. Verwenden Sie schließlich die [`focus()`](/de/docs/Web/API/HTMLElement/focus)-Methode, um das Eingabeelement für die Eingabe des nächsten Einkaufslistelements zu fokussieren.

> [!NOTE]
> Wenn Sie wirklich stecken bleiben, schauen Sie sich unsere [fertige Einkaufsliste](https://github.com/mdn/learning-area/blob/main/javascript/apis/document-manipulation/shopping-list-finished.html) an ([sehen Sie sie auch live](https://mdn.github.io/learning-area/javascript/apis/document-manipulation/shopping-list-finished.html)).

## Zusammenfassung

Wir haben das Ende unserer Untersuchung zur Manipulation von Dokumenten und DOM erreicht. An diesem Punkt sollten Sie verstehen, was die wichtigen Teile eines Webbrowsers in Bezug auf die Steuerung von Dokumenten und anderen Aspekten der Weberfahrung des Benutzers sind. Am wichtigsten ist, dass Sie verstehen, was das Document Object Model ist und wie Sie es manipulieren, um nützliche Funktionalitäten zu erstellen.

## Siehe auch

- Es gibt viele weitere Funktionen, die Sie zur Manipulation Ihrer Dokumente verwenden können. Schauen Sie sich einige unserer Referenzen an und entdecken Sie, was Sie finden können:
  - [`Document`](/de/docs/Web/API/Document)
  - [`Window`](/de/docs/Web/API/Window)
  - [`Node`](/de/docs/Web/API/Node)
  - [`HTMLElement`](/de/docs/Web/API/HTMLElement), [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement), [`HTMLImageElement`](/de/docs/Web/API/HTMLImageElement), etc.
- [DOM Scripting](https://explainers.dev/dom-scripting/), explainers.dev

{{PreviousMenuNext("Learn_web_development/Core/Scripting/Object_basics","Learn_web_development/Core/Scripting/Network_requests", "Learn_web_development/Core/Scripting")}}
