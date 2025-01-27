---
title: Einführung in DOM-Scripting
slug: Learn_web_development/Core/Scripting/DOM_scripting
l10n:
  sourceCommit: 76d104c2fbc4680d70b548a6de4daabf4ac0cff3
---

{{LearnSidebar}}

{{PreviousMenuNext("Learn_web_development/Core/Scripting/Object_basics","Learn_web_development/Core/Scripting/Network_requests", "Learn_web_development/Core/Scripting")}}

Beim Erstellen von Webseiten und Apps ist es eine der häufigsten Aufgaben, die Dokumentstruktur in irgendeiner Weise zu ändern. Dies wird in der Regel durch die Manipulation des Document Object Model (DOM) über einen Satz eingebauter Browser-APIs durchgeführt, die HTML und Stilinformationen steuern. In diesem Artikel stellen wir Ihnen das **DOM-Scripting** vor.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>Verständnis von <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a> und den <a href="/de/docs/Learn_web_development/Core/Styling_basics">Grundlagen von CSS</a>, sowie Vertrautheit mit den JavaScript-Grundlagen, wie sie in den vorherigen Lektionen behandelt wurden.</td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Was das DOM ist — die interne Darstellung der HTML-Struktur des Dokuments durch den Browser als Hierarchie von Objekten.</li>
          <li>Die wichtigen Teile eines Webbrowsers, wie sie in JavaScript dargestellt werden — <code>Navigator</code>, <code>Window</code> und <code>Document</code>.</li>
          <li>Wie DOM-Knoten relativ zueinander im DOM-Baum existieren — Wurzel, Elternteil, Kind, Geschwister und Nachkomme.</li>
          <li>Holen von Referenzen zu DOM-Knoten, Erstellen neuer Knoten, Hinzufügen und Entfernen von Knoten und Attributen.</li>
          <li>Manipulation von CSS-Stilen mit JavaScript.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Die wichtigen Teile eines Webbrowsers

Webbrowser sind sehr komplexe Programme mit vielen beweglichen Teilen, von denen viele nicht von einem Webentwickler mit JavaScript gesteuert oder manipuliert werden können. Sie könnten denken, dass solche Einschränkungen eine schlechte Sache sind, aber Browser sind aus guten Gründen, die sich hauptsächlich um Sicherheit drehen, gesperrt. Stellen Sie sich vor, eine Website könnte auf Ihre gespeicherten Passwörter oder andere sensible Informationen zugreifen und sich als Sie auf Websites anmelden?

Trotz der Einschränkungen geben uns Web-APIs dennoch Zugang zu vielen Funktionen, die es uns ermöglichen, eine Vielzahl von Dingen mit Webseiten zu tun. Es gibt einige wirklich offensichtliche Teile, auf die Sie regelmäßig in Ihrem Code verweisen werden — betrachten Sie das folgende Diagramm, das die Hauptbestandteile eines Browsers darstellt, die an der Anzeige von Webseiten beteiligt sind:

![Wichtige Teile eines Webbrowsers; das Dokument ist die Webseite. Das Fenster umfasst das gesamte Dokument und auch den Tab. Der Navigator ist der Browser, der das Fenster (das das Dokument umfasst) und alle anderen Fenster umfasst.](document-window-navigator.png)

- Das Fenster ist der Browser-Tab, in den eine Webseite geladen wird; dies wird in JavaScript durch das [`Window`](/de/docs/Web/API/Window)-Objekt dargestellt. Mit den verfügbaren Methoden auf diesem Objekt können Sie Dinge tun wie die Größe des Fensters zurückgeben (siehe [`Window.innerWidth`](/de/docs/Web/API/Window/innerWidth) und [`Window.innerHeight`](/de/docs/Web/API/Window/innerHeight)), das in dieses Fenster geladene Dokument manipulieren, datenspezifische Informationen auf der Client-Seite speichern (zum Beispiel mithilfe einer lokalen Datenbank oder eines anderen Speichersystems), einen [Ereignis-Handler](/de/docs/Learn_web_development/Core/Scripting/Events) an das aktuelle Fenster anfügen und mehr.
- Der Navigator repräsentiert den Status und die Identität des Browsers (d.h. den Benutzer-Agenten), wie er im Internet existiert. In JavaScript wird dies durch das [`Navigator`](/de/docs/Web/API/Navigator)-Objekt repräsentiert. Sie können dieses Objekt verwenden, um Dinge wie die bevorzugte Sprache des Benutzers abzurufen, einen Medienstream von der Webcam des Benutzers, usw.
- Das Dokument (repräsentiert durch das DOM in Browsern) ist die tatsächliche Seite, die in das Fenster geladen wird, und wird in JavaScript durch das [`Document`](/de/docs/Web/API/Document)-Objekt dargestellt. Sie können dieses Objekt verwenden, um Informationen über das HTML und CSS, aus denen das Dokument besteht, zurückzugeben und zu manipulieren, zum Beispiel um eine Referenz zu einem Element im DOM zu erhalten, seinen Textinhalt zu ändern, ihm neue Stile zuzuweisen, neue Elemente zu erstellen und sie als Kinder des aktuellen Elements hinzuzufügen oder es sogar insgesamt zu löschen.

In diesem Artikel konzentrieren wir uns hauptsächlich auf die Manipulation des Dokuments, aber wir zeigen auch ein paar andere nützliche Teile.

## Das Document Object Model

Lassen Sie uns einen kurzen Rückblick auf das Document Object Model (DOM) geben, das wir früher im Kurs auch betrachtet haben. Das aktuell in jedem Ihrer Browser-Tabs geladene Dokument wird durch ein DOM dargestellt. Dies ist eine "Baumstruktur"-Darstellung, die vom Browser erstellt wird und es ermöglicht, die HTML-Struktur leicht durch Programmiersprachen zuzugreifen — zum Beispiel verwendet der Browser selbst sie, um Styling- und andere Informationen auf die richtigen Elemente anzuwenden, wenn er eine Seite rendert, und Entwickler wie Sie können das DOM mit JavaScript nach dem Rendern der Seite manipulieren.

Wir haben eine Beispielseite unter [dom-example.html](https://github.com/mdn/learning-area/blob/main/javascript/apis/document-manipulation/dom-example.html) erstellt ([sehen Sie es auch live](https://mdn.github.io/learning-area/javascript/apis/document-manipulation/dom-example.html)). Versuchen Sie, dies in Ihrem Browser zu öffnen — es ist eine sehr einfache Seite, die ein {{htmlelement("section")}}-Element enthält, in dem Sie ein Bild und einen Absatz mit einem Link finden können. Der HTML-Quellcode sieht so aus:

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

Das DOM auf der anderen Seite sieht so aus:

![Baumstruktur-Darstellung des Document Object Model: Der oberste Knoten ist das Doctype- und HTML-Element. Kindknoten des HTML sind head und body. Jedes Kinderelement ist ein Zweig. Auch alle Texte, selbst Leerzeichen, werden angezeigt.](dom-screenshot.png)

> [!NOTE]
> Dieses DOM-Baudiagramm wurde mit Ian Hicksons [Live DOM Viewer](https://software.hixie.ch/utilities/js/live-dom-viewer/) erstellt.

Jeder Eintrag im Baum wird als **Knoten** bezeichnet. Sie können im obigen Diagramm sehen, dass einige Knoten Elemente darstellen (identifiziert als `HTML`, `HEAD`, `META` und so weiter) und andere Text darstellen (identifiziert als `#text`). Es gibt [andere Arten von Knoten](/de/docs/Web/API/Node/nodeType), aber dies sind die Haupttypen, denen Sie begegnen werden.

Knoten werden auch nach ihrer Position im Baum relativ zu anderen Knoten bezeichnet:

- **Wurzelknoten**: Der oberste Knoten im Baum, der im Fall von HTML immer der `HTML`-Knoten ist (andere Markup-Vokabularien wie SVG und benutzerdefiniertes XML haben unterschiedliche Wurzelelemente).
- **Kindknoten**: Ein Knoten direkt in einem anderen Knoten. Zum Beispiel ist `IMG` ein Kind von `SECTION` im obigen Beispiel.
- **Nachkommenknoten**: Ein Knoten irgendwo in einem anderen Knoten. Zum Beispiel ist `IMG` ein Kind von `SECTION` im obigen Beispiel und es ist auch ein Nachkomme. `IMG` ist kein Kind von `BODY`, da es zwei Ebenen unter ihm im Baum ist, aber es ist ein Nachkomme von `BODY`.
- **Elternknoten**: Ein Knoten, der einen anderen Knoten in sich hat. Zum Beispiel ist `BODY` der Elternknoten von `SECTION` im obigen Beispiel.
- **Geschwisterknoten**: Knoten, die auf derselben Ebene unter demselben Elternknoten im DOM-Baum sitzen. Zum Beispiel sind `IMG` und `P` Geschwister im obigen Beispiel.

Es ist nützlich, sich mit dieser Terminologie vertraut zu machen, bevor Sie mit dem DOM arbeiten, da eine Reihe von Codebegriffen, denen Sie begegnen werden, auf ihnen basieren. Sie werden ihnen auch in CSS begegnen (z.B. Nachkommen-Selektor, Kind-Selektor).

## Aktives Lernen: Grundlegende DOM-Manipulation

Um mit dem DOM-Manipulation zu beginnen, lassen Sie uns mit einem praktischen Beispiel starten.

1. Nehmen Sie eine lokale Kopie der [dom-example.html-Seite](https://github.com/mdn/learning-area/blob/main/javascript/apis/document-manipulation/dom-example.html) und des [Bildes](https://github.com/mdn/learning-area/blob/main/javascript/apis/document-manipulation/dinosaur.png), das damit verbunden ist.
2. Fügen Sie ein `<script></script>`-Element direkt über dem schließenden `</body>`-Tag hinzu.
3. Um ein Element im DOM zu manipulieren, müssen Sie es zuerst auswählen und eine Referenz darauf in einer Variablen speichern. Fügen Sie in Ihrem Skriptelement die folgende Zeile hinzu:

   ```js
   const link = document.querySelector("a");
   ```

4. Jetzt, da wir die Elementreferenz in einer Variablen gespeichert haben, können wir beginnen, sie mit den verfügbaren Eigenschaften und Methoden zu manipulieren (diese sind auf Schnittstellen wie [`HTMLAnchorElement`](/de/docs/Web/API/HTMLAnchorElement) im Fall von {{htmlelement("a")}}-Elementen definiert, ihre allgemeinere übergeordnete Schnittstelle ist [`HTMLElement`](/de/docs/Web/API/HTMLElement), und [`Node`](/de/docs/Web/API/Node) — die alle Knoten in einem DOM darstellt). Zuerst ändern wir den Text im Link, indem wir den Wert der [`Node.textContent`](/de/docs/Web/API/Node/textContent)-Eigenschaft aktualisieren. Fügen Sie die folgende Zeile unter der vorherigen hinzu:

   ```js
   link.textContent = "Mozilla Developer Network";
   ```

5. Wir sollten auch die URL ändern, auf die der Link verweist, damit er nicht an den falschen Ort führt, wenn er angeklickt wird. Fügen Sie die folgende Zeile wieder unten hinzu:

   ```js
   link.href = "https://developer.mozilla.org";
   ```

Beachten Sie, dass es wie bei vielen Dingen in JavaScript viele Möglichkeiten gibt, ein Element auszuwählen und eine Referenz darauf in einer Variablen zu speichern. [`Document.querySelector()`](/de/docs/Web/API/Document/querySelector) ist der empfohlene moderne Ansatz. Es ist bequem, da es Ihnen ermöglicht, Elemente mit CSS-Selektoren auszuwählen. Der obige `querySelector()`-Aufruf wird das erste auftretende {{htmlelement("a")}}-Element im Dokument auswählen. Wenn Sie mehrere Elemente auswählen und etwas mit ihnen tun wollten, könnten Sie [`Document.querySelectorAll()`](/de/docs/Web/API/Document/querySelectorAll) verwenden, das jedes im Dokument ausgewählte Element, das den Selektor erfüllt, auswählt und Referenzen darauf in einem einer [Array](/de/docs/Learn_web_development/Core/Scripting/Arrays)-ähnlichen Objekt, einem [`NodeList`](/de/docs/Web/API/NodeList), speichert.

Es gibt ältere Methoden, um Elementreferenzen zu erhalten, wie:

- [`Document.getElementById()`](/de/docs/Web/API/Document/getElementById), das ein Element mit einem bestimmten `id`-Attributwert auswählt, z.B. `<p id="myId">Mein Absatz</p>`. Die ID wird als Parameter an die Funktion übergeben, d.h. `const elementRef = document.getElementById('myId')`.
- [`Document.getElementsByTagName()`](/de/docs/Web/API/Document/getElementsByTagName), das ein array-ähnliches Objekt zurückgibt, das alle Elemente auf der Seite eines bestimmten Typs enthält, zum Beispiel `<p>`, `<a>` usw. Der Elementtyp wird als Parameter an die Funktion übergeben, d.h. `const elementRefArray = document.getElementsByTagName('p')`.

Diese beiden funktionieren in älteren Browsern besser als die modernen Methoden wie `querySelector()`, sind jedoch nicht so praktisch. Schauen Sie nach und sehen, was Sie noch finden können!

### Erstellen und Platzieren neuer Knoten

Das Obige hat Ihnen einen kleinen Vorgeschmack darauf gegeben, was Sie tun können, aber lassen Sie uns weiter gehen und erkunden, wie wir neue Elemente erstellen können.

1. Kehren Sie zum aktuellen Beispiel zurück und greifen Sie eine Referenz auf unser {{htmlelement("section")}}-Element — fügen Sie den folgenden Code am Ende Ihres bestehenden Skripts hinzu (machen Sie dasselbe mit den anderen Zeilen):

   ```js
   const sect = document.querySelector("section");
   ```

2. Erstellen wir jetzt einen neuen Absatz mit [`Document.createElement()`](/de/docs/Web/API/Document/createElement) und geben ihm einen Textinhalt auf die gleiche Weise wie zuvor:

   ```js
   const para = document.createElement("p");
   para.textContent = "We hope you enjoyed the ride.";
   ```

3. Sie können nun den neuen Absatz am Ende der Sektion mit [`Node.appendChild()`](/de/docs/Web/API/Node/appendChild) anhängen:

   ```js
   sect.appendChild(para);
   ```

4. Schließlich für diesen Teil, fügen wir einen Textknoten zum Absatz hinzu, in dem sich der Link befindet, um den Satz schön abzurunden. Zuerst erstellen wir den Textknoten mit [`Document.createTextNode()`](/de/docs/Web/API/Document/createTextNode):

   ```js
   const text = document.createTextNode(
     " — the premier source for web development knowledge.",
   );
   ```

5. Jetzt holen wir eine Referenz auf den Absatz, in dem sich der Link befindet, und hängen den Textknoten daran:

   ```js
   const linkPara = document.querySelector("p");
   linkPara.appendChild(text);
   ```

Das ist der größte Teil von dem, was Sie benötigen, um Knoten zum DOM hinzuzufügen – Sie werden diese Methoden viel verwenden, wenn Sie dynamische Schnittstellen erstellen (wir werden später einige Beispiele betrachten).

### Verschieben und Entfernen von Elementen

Es kann Situationen geben, in denen Sie Knoten verschieben oder vollständig aus dem DOM löschen möchten. Das ist durchaus möglich.

Wenn wir den Absatz mit dem Link darin an das Ende der Sektion verschieben wollten, könnten wir dies tun:

```js
sect.appendChild(linkPara);
```

Dies bewegt den Absatz nach unten an das Ende der Sektion. Sie könnten gedacht haben, dass es eine zweite Kopie davon erstellt, aber das ist nicht der Fall — `linkPara` ist eine Referenz auf die einzige Kopie dieses Absatzes. Wenn Sie eine Kopie erstellen und diese auch hinzufügen wollen, müssten Sie stattdessen [`Node.cloneNode()`](/de/docs/Web/API/Node/cloneNode) verwenden.

Das Entfernen eines Knotens ist auch ziemlich einfach, zumindest wenn Sie eine Referenz auf den zu entfernenden Knoten und seinen Elternteil haben. In unserem aktuellen Fall verwenden wir einfach [`Node.removeChild()`](/de/docs/Web/API/Node/removeChild), so:

```js
sect.removeChild(linkPara);
```

Wenn Sie einen Knoten nur basierend auf einer Referenz auf sich selbst entfernen möchten, was ziemlich häufig ist, können Sie [`Element.remove()`](/de/docs/Web/API/Element/remove) verwenden:

```js
linkPara.remove();
```

Diese Methode wird in älteren Browsern nicht unterstützt. Sie haben keine Methode, um einem Knoten zu sagen, sich selbst zu entfernen, daher müssten Sie Folgendes tun.

```js
linkPara.parentNode.removeChild(linkPara);
```

Versuchen Sie, die obigen Zeilen zu Ihrem Code hinzuzufügen.

### Manipulation von Styles

Es ist möglich, CSS-Stile über JavaScript auf verschiedene Arten zu manipulieren.

Zunächst einmal können Sie eine Liste aller mit einem Dokument verknüpften Stylesheets über [`Document.stylesheets`](/de/docs/Web/API/Document/stylesheets) abrufen, das ein array-ähnliches Objekt mit [`CSSStyleSheet`](/de/docs/Web/API/CSSStyleSheet)-Objekten zurückgibt. Sie können dann Stile nach Wunsch hinzufügen/entfernen. Wir werden jedoch nicht weiter auf diese Funktionen eingehen, da sie eine etwas archaische und schwierige Methode sind, um Styles zu manipulieren. Es gibt viel einfachere Möglichkeiten.

Die erste Möglichkeit besteht darin, Inline-Stile direkt auf die Elemente anzuwenden, die Sie dynamisch stilisieren möchten. Dies geschieht mit der [`HTMLElement.style`](/de/docs/Web/API/HTMLElement/style)-Eigenschaft, die Inline-Stileinformationen für jedes Element im Dokument enthält. Sie können Eigenschaften dieses Objekts festlegen, um die Elementstile direkt zu aktualisieren.

1. Fügen Sie als Beispiel diese Zeilen zu unserem laufenden Beispiel hinzu:

   ```js
   para.style.color = "white";
   para.style.backgroundColor = "black";
   para.style.padding = "10px";
   para.style.width = "250px";
   para.style.textAlign = "center";
   ```

2. Laden Sie die Seite neu und Sie werden sehen, dass die Stile auf den Absatz angewendet wurden. Wenn Sie diesen Absatz im [Page Inspector/DOM Inspector](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/index.html) Ihres Browsers betrachten, sehen Sie, dass diese Zeilen tatsächlich Inline-Stile zum Dokument hinzufügen:

   ```html
   <p
     style="color: white; background-color: black; padding: 10px; width: 250px; text-align: center;">
     We hope you enjoyed the ride.
   </p>
   ```

> [!NOTE]
> Beachten Sie, wie die JavaScript-Versionen der CSS-Stile in {{Glossary("camel_case", "lower camel case")}} geschrieben sind, während die CSS-Versionen mit Bindestrichen ({{Glossary("kebab_case", "kebab-case")}}) geschrieben sind (z.B. `backgroundColor` gegenüber `background-color`). Achten Sie darauf, dass Sie diese nicht verwechseln, sonst funktioniert es nicht.

Es gibt eine weitere gängige Methode, um Stile in Ihrem Dokument dynamisch zu manipulieren, die wir uns jetzt ansehen werden.

1. Löschen Sie die vorherigen fünf Zeilen, die Sie zum JavaScript hinzugefügt haben.
2. Fügen Sie das Folgende in Ihrem HTML-{{htmlelement("head")}} hinzu:

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

3. Nun wenden wir uns einer sehr nützlichen Methode zur allgemeinen HTML-Manipulation zu — [`Element.setAttribute()`](/de/docs/Web/API/Element/setAttribute) — diese nimmt zwei Argumente, das Attribut, das Sie auf dem Element festlegen möchten, und den Wert, den Sie festlegen möchten. In diesem Fall weisen wir unserem Absatz einen Klassennamen "highlight" zu:

   ```js
   para.setAttribute("class", "highlight");
   ```

4. Aktualisieren Sie die Seite und Sie werden keinen Unterschied sehen — das CSS wird immer noch auf den Absatz angewendet, aber diesmal durch Zuweisen einer Klasse, die von unserer CSS-Regel ausgewählt wird, und nicht als inline CSS-Stile.

Welche Methode Sie wählen liegt bei Ihnen; beide haben ihre Vor- und Nachteile. Die erste Methode erfordert weniger Einrichtung und ist gut für einfache Anwendungen geeignet, während die zweite Methode puristischer ist (kein Mischen von CSS und JavaScript, keine Inline-Stile, die als schlechte Praxis angesehen werden). Wenn Sie beginnen, größere und komplexere Apps zu entwickeln, werden Sie wahrscheinlich die zweite Methode häufiger verwenden, aber es liegt wirklich bei Ihnen.

An diesem Punkt haben wir nichts wirklich Nützliches gemacht! Es gibt keinen Sinn dabei, statische Inhalte mit JavaScript zu erstellen — Sie könnten sie genauso gut direkt in Ihr HTML schreiben und kein JavaScript verwenden. Es ist komplexer als HTML, und die Erstellung Ihrer Inhalte mit JavaScript hat auch andere Probleme (z.B. wird es nicht von Suchmaschinen gelesen).

Im nächsten Abschnitt werden wir einen praktischeren Einsatz von DOM-APIs betrachten.

> [!NOTE]
> Sie finden unsere [fertige Version des dom-example.html](https://github.com/mdn/learning-area/blob/main/javascript/apis/document-manipulation/dom-example-manipulated.html) Demos auf GitHub ([sehen Sie es auch live](https://mdn.github.io/learning-area/javascript/apis/document-manipulation/dom-example-manipulated.html)).

## Aktives Lernen: Eine dynamische Einkaufsliste

In dieser Herausforderung möchten wir ein einfaches Einkaufsliste-Beispiel erstellen, das es Ihnen ermöglicht, Elemente mithilfe eines Formular-Inputs und eines Buttons dynamisch zur Liste hinzuzufügen. Wenn Sie ein Element im Input hinzufügen und den Button drücken:

- Sollte das Element in der Liste erscheinen.
- Jedes Element sollte einen Button erhalten, der gedrückt werden kann, um das Element von der Liste zu löschen.
- Der Input sollte geleert und so fokussiert werden, dass Sie ein weiteres Element eingeben können.

Das fertige Demo wird in etwa so aussehen:

![Demo-Layout einer Einkaufsliste. Eine 'meine Einkaufsliste' Überschrift, gefolgt von 'Neues Element eingeben' mit einem Eingabefeld und einem 'Element hinzufügen'-Button. Die Liste der bereits hinzugefügten Elemente befindet sich darunter, jedes mit einem entsprechenden Löschen-Button.](shopping-list.png)

Um die Übung abzuschließen, folgen Sie den unten stehenden Schritten und stellen Sie sicher, dass die Liste wie beschrieben funktioniert.

1. Laden Sie zunächst eine Kopie unserer [shopping-list.html](https://github.com/mdn/learning-area/blob/main/javascript/apis/document-manipulation/shopping-list.html)-Startdatei herunter und machen Sie eine Kopie davon irgendwo. Sie werden sehen, dass es einige minimale CSS, ein div mit einem Label, Input und Button sowie eine leere Liste und ein {{htmlelement("script")}}-Element hat. Alle Ihre Änderungen erfolgen im Skript.
2. Erstellen Sie drei Variablen, die Referenzen zur Liste ({{htmlelement("ul")}}), {{htmlelement("input")}} und {{htmlelement("button")}}-Elementen halten.
3. Erstellen Sie eine [Funktion](/de/docs/Learn_web_development/Core/Scripting/Functions), die als Antwort auf das Drücken des Buttons ausgeführt wird.
4. Speichern Sie im Funktionskörper zunächst den aktuellen [Wert](/de/docs/Web/API/HTMLInputElement/value) des Eingabeelements in einer Variablen.
5. Leeren Sie als nächstes das Eingabeelement, indem Sie seinen Wert auf eine leere Zeichenkette setzen — `''`.
6. Erstellen Sie drei neue Elemente — ein Listenelement ({{htmlelement('li')}}), {{htmlelement('span')}} und {{htmlelement('button')}}, und speichern Sie sie in Variablen.
7. Fügen Sie das span- und das button-Element als Kinder des Listenelements hinzu.
8. Setzen Sie den Textinhalt des span-Elementes auf den zuvor gespeicherten Wert des Eingabeelements und den Textinhalt des buttons auf 'Löschen'.
9. Fügen Sie das Listenelement als Kind der Liste hinzu.
10. Fügen Sie dem Lösch-Button einen Ereignishandler hinzu, so dass er beim Klicken das gesamte Listenelement (`<li>...</li>`) löscht.
11. Verwenden Sie schließlich die [`focus()`](/de/docs/Web/API/HTMLElement/focus)-Methode, um das Eingabeelement zu fokussieren, bereit für die Eingabe des nächsten Einkaufslistenelements.

> [!NOTE]
> Wenn Sie wirklich feststecken, schauen Sie sich unsere [fertige Einkaufsliste](https://github.com/mdn/learning-area/blob/main/javascript/apis/document-manipulation/shopping-list-finished.html) an ([sehen Sie es auch live](https://mdn.github.io/learning-area/javascript/apis/document-manipulation/shopping-list-finished.html)).

## Zusammenfassung

Wir haben das Ende unserer Untersuchung der Dokument- und DOM-Manipulation erreicht. An diesem Punkt sollten Sie verstehen, was die wichtigen Teile eines Webbrowsers in Bezug auf die Kontrolle von Dokumenten und anderen Aspekten der Web-Erfahrung des Benutzers sind. Am wichtigsten ist, dass Sie verstehen sollten, was das Document Object Model ist und wie Sie es manipulieren können, um nützliche Funktionalitäten zu erstellen.

## Siehe auch

- Es gibt noch viele weitere Funktionen, die Sie zur Manipulation Ihrer Dokumente verwenden können. Schauen Sie sich einige unserer Referenzen an und entdecken Sie, was Sie herausfinden können:
  - [`Document`](/de/docs/Web/API/Document)
  - [`Window`](/de/docs/Web/API/Window)
  - [`Node`](/de/docs/Web/API/Node)
  - [`HTMLElement`](/de/docs/Web/API/HTMLElement), [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement), [`HTMLImageElement`](/de/docs/Web/API/HTMLImageElement), usw.
- [DOM Scripting](https://explainers.dev/dom-scripting/), explainers.dev

{{PreviousMenuNext("Learn_web_development/Core/Scripting/Object_basics","Learn_web_development/Core/Scripting/Network_requests", "Learn_web_development/Core/Scripting")}}
