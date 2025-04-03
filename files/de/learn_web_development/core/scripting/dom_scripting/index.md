---
title: Einführung in das DOM-Scripting
short-title: DOM scripting
slug: Learn_web_development/Core/Scripting/DOM_scripting
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{LearnSidebar}}

{{PreviousMenuNext("Learn_web_development/Core/Scripting/Object_basics","Learn_web_development/Core/Scripting/Network_requests", "Learn_web_development/Core/Scripting")}}

Beim Erstellen von Webseiten und Apps ist eine der häufigsten Aufgaben, die Dokumentstruktur in irgendeiner Weise zu ändern. Dies geschieht normalerweise durch die Manipulation des Document Object Model (DOM) über eine Reihe von integrierten Browser-APIs zur Steuerung der HTML- und Styling-Informationen. In diesem Artikel werden wir Sie in das **DOM-Scripting** einführen.

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
          <li>Was das DOM ist — die interne Darstellung der HTML-Struktur des Dokuments durch den Browser als Hierarchie von Objekten.</li>
          <li>Die wichtigen Teile eines Webbrowsers, dargestellt in JavaScript — <code>Navigator</code>, <code>Window</code> und <code>Document</code>.</li>
          <li>Wie DOM-Knoten relativ zueinander im DOM-Baum existieren — Wurzel, Elternteil, Kind, Geschwister und Nachkomme.</li>
          <li>Abrufen von Referenzen zu DOM-Knoten, Erstellen neuer Knoten, Hinzufügen und Entfernen von Knoten und Attributen.</li>
          <li>Manipulation von CSS-Stilen mit JavaScript.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Die wichtigen Teile eines Webbrowsers

Webbrowser sind sehr komplizierte Software mit vielen beweglichen Teilen, von denen viele nicht von einem Webentwickler über JavaScript gesteuert oder manipuliert werden können. Man könnte denken, dass solche Einschränkungen negativ sind, aber Browser sind aus guten Gründen gesperrt, hauptsächlich aus Sicherheitsgründen. Stellen Sie sich vor, eine Website könnte auf Ihre gespeicherten Passwörter oder andere sensible Informationen zugreifen und sich in Websites einloggen, als wären Sie es?

Trotz der Einschränkungen geben uns Web-APIs immer noch Zugriff auf viele Funktionen, die es uns ermöglichen, eine Vielzahl von Dingen mit Webseiten zu tun. Es gibt ein paar wirklich offensichtliche Dinge, auf die Sie regelmäßig in Ihrem Code verweisen werden — betrachten Sie das folgende Diagramm, das die Hauptteile eines Browsers darstellt, die direkt am Anzeigen von Webseiten beteiligt sind:

![Wichtige Teile des Webbrowsers; das Dokument ist die Webseite. Das Fenster umfasst das gesamte Dokument und auch den Tab. Der Navigator ist der Browser, der das Fenster (das das Dokument umfasst) und alle anderen Fenster enthält.](document-window-navigator.png)

- Das Fenster ist der Tab des Browsers, in den eine Webseite geladen wird; dies wird in JavaScript durch das [`Window`](/de/docs/Web/API/Window)-Objekt dargestellt. Mit den auf diesem Objekt verfügbaren Methoden können Sie Dinge tun wie die Größe des Fensters zurückgeben (siehe [`Window.innerWidth`](/de/docs/Web/API/Window/innerWidth) und [`Window.innerHeight`](/de/docs/Web/API/Window/innerHeight)), das in dieses Fenster geladene Dokument manipulieren, datenspezifische Informationen auf der Client-Seite speichern (zum Beispiel mithilfe einer lokalen Datenbank oder eines anderen Speichermediums), einen [Ereignis-Handler](/de/docs/Learn_web_development/Core/Scripting/Events) an das aktuelle Fenster anhängen und mehr.
- Der Navigator stellt den Zustand und die Identität des Browsers (d.h. des User-Agents) dar, wie er im Web existiert. In JavaScript wird dies durch das [`Navigator`](/de/docs/Web/API/Navigator)-Objekt dargestellt. Sie können dieses Objekt verwenden, um Dinge wie die bevorzugte Sprache des Benutzers oder einen Medienstrom von der Webcam des Benutzers abzurufen.
- Das Dokument (dargestellt durch das DOM in Browsern) ist die eigentliche Seite, die in das Fenster geladen wird, und wird in JavaScript durch das [`Document`](/de/docs/Web/API/Document)-Objekt dargestellt. Sie können dieses Objekt verwenden, um Informationen über das HTML und CSS zurückzugeben und zu manipulieren, aus denen das Dokument besteht, z. B. eine Referenz zu einem Element im DOM abrufen, seinen Textinhalt ändern, ihm neue Stile zuweisen, neue Elemente erstellen und als Kinder dem aktuellen Element hinzufügen oder es sogar vollständig löschen.

In diesem Artikel werden wir uns hauptsächlich auf die Manipulation des Dokuments konzentrieren, aber wir zeigen Ihnen auch ein paar andere nützliche Dinge nebenbei.

## Das Document Object Model

Lassen Sie uns einen kurzen Rückblick auf das Document Object Model (DOM) geben, das wir auch bereits früher im Kurs betrachtet haben. Das aktuell in jedem Ihrer Browsertabs geladene Dokument wird durch ein DOM dargestellt. Dies ist eine "Baumstruktur"-Darstellung, die vom Browser erstellt wird, um die HTML-Struktur für Programmiersprachen leicht zugänglich zu machen — der Browser selbst verwendet es beispielsweise, um Styling und andere Informationen auf die richtigen Elemente anzuwenden, während er eine Seite rendert, und Entwickler wie Sie können das DOM mit JavaScript manipulieren, nachdem die Seite gerendert wurde.

Wir haben eine Beispielseite erstellt unter [dom-example.html](https://github.com/mdn/learning-area/blob/main/javascript/apis/document-manipulation/dom-example.html) ([auch live sehen](https://mdn.github.io/learning-area/javascript/apis/document-manipulation/dom-example.html)). Versuchen Sie, dies in Ihrem Browser zu öffnen — es handelt sich um eine sehr einfache Seite, die ein {{htmlelement("section")}}-Element enthält, in dem Sie ein Bild und einen Absatz mit einem Link darin finden. Der HTML-Quellcode sieht folgendermaßen aus:

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

Das DOM dagegen sieht folgendermaßen aus:

![Baumstruktur-Darstellung des Document Object Model: Der oberste Knoten ist der Doctype und das HTML-Element. Kinderknoten des HTML sind Kopf und Körper. Jedes Kindelement ist ein Zweig. Alle Texte, sogar Leerzeichen, werden ebenfalls angezeigt.](dom-screenshot.png)

> [!NOTE]
> Dieses DOM-Baumdiagramm wurde mit Ian Hicksons [Live-DOM-Viewer](https://software.hixie.ch/utilities/js/live-dom-viewer/) erstellt.

Jeder Eintrag im Baum wird als **Knoten** bezeichnet. Sie können im obigen Diagramm sehen, dass einige Knoten Elemente repräsentieren (gekennzeichnet als `HTML`, `HEAD`, `META` usw.) und andere den Text (gekennzeichnet als `#text`). Es gibt [auch andere Arten von Knoten](/de/docs/Web/API/Node/nodeType), aber diese sind die Haupttypen, denen Sie begegnen werden.

Knoten werden auch anhand ihrer Position im Baum relativ zu anderen Knoten benannt:

- **Wurzelknoten**: Der oberste Knoten im Baum, der bei HTML immer der `HTML`-Knoten ist (andere Markup-Vokabulare wie SVG und benutzerdefiniertes XML haben andere Wurzelelemente).
- **Kindknoten**: Ein Knoten _direkt_ innerhalb eines anderen Knotens. Beispielsweise ist `IMG` in obigem Beispiel ein Kind von `SECTION`.
- **Nachkommenknoten**: Ein Knoten _irgendwo_ innerhalb eines anderen Knotens. Beispielsweise ist `IMG` ein Kind von `SECTION` in obigem Beispiel und gleichzeitig ein Nachkomme. `IMG` ist kein Kind von `BODY`, da es im Baum zwei Ebenen darunter liegt, aber es ist ein Nachkomme von `BODY`.
- **Elternknoten**: Ein Knoten, der einen anderen Knoten in sich trägt. Beispielsweise ist `BODY` in obigem Beispiel der Elternknoten von `SECTION`.
- **Geschwisterknoten**: Knoten, die auf derselben Ebene unter demselben Elternknoten im DOM-Baum sitzen. Beispielsweise sind `IMG` und `P` in obigem Beispiel Geschwister.

Es ist nützlich, sich mit dieser Terminologie vertraut zu machen, bevor Sie mit dem DOM arbeiten, da viele der Codebegriffe, denen Sie begegnen werden, darauf basieren. Sie werden ihnen auch in CSS begegnen (z. B. Nachkommensselektor, Kindselektor).

## Aktives Lernen: Grundlegende DOM-Manipulation

Um das DOM-Manipulation zu lernen, beginnen wir mit einem praktischen Beispiel.

1. Nehmen Sie eine lokale Kopie der [dom-example.html-Seite](https://github.com/mdn/learning-area/blob/main/javascript/apis/document-manipulation/dom-example.html) und des dazugehörigen [Bildes](https://github.com/mdn/learning-area/blob/main/javascript/apis/document-manipulation/dinosaur.png).
2. Fügen Sie ein `<script></script>`-Element direkt oberhalb des schließenden `</body>`-Tags hinzu.
3. Um ein Element innerhalb des DOM zu manipulieren, müssen Sie es zunächst auswählen und eine Referenz darauf in einer Variablen speichern. Fügen Sie innerhalb Ihres Skriptelements die folgende Zeile hinzu:

   ```js
   const link = document.querySelector("a");
   ```

4. Nun, da wir die Referenz auf das Element in einer Variablen gespeichert haben, können wir beginnen, es mit den dafür verfügbaren Eigenschaften und Methoden zu manipulieren (diese sind auf Schnittstellen wie [`HTMLAnchorElement`](/de/docs/Web/API/HTMLAnchorElement) im Fall des {{htmlelement("a")}}-Elements, seiner allgemeineren Elternschnittstelle [`HTMLElement`](/de/docs/Web/API/HTMLElement) und [`Node`](/de/docs/Web/API/Node) definiert — die alle Knoten in einem DOM darstellen). Zuerst ändern wir den Text im Link, indem wir den Wert der [`Node.textContent`](/de/docs/Web/API/Node/textContent)-Eigenschaft aktualisieren. Fügen Sie die folgende Zeile unter der vorherigen hinzu:

   ```js
   link.textContent = "Mozilla Developer Network";
   ```

5. Wir sollten auch die URL ändern, auf die der Link zeigt, damit er nicht an die falsche Stelle führt, wenn er geklickt wird. Fügen Sie die folgende Zeile erneut am Ende hinzu:

   ```js
   link.href = "https://developer.mozilla.org";
   ```

Beachten Sie, dass es, wie bei vielen Dingen in JavaScript, viele Möglichkeiten gibt, ein Element auszuwählen und eine Referenz darauf in einer Variablen zu speichern. [`Document.querySelector()`](/de/docs/Web/API/Document/querySelector) ist die empfohlene moderne Methode. Sie ist praktisch, weil Sie damit Elemente mithilfe von CSS-Selektoren auswählen können. Der obige `querySelector()`-Aufruf wird das erste {{htmlelement("a")}}-Element auswählen, das im Dokument erscheint. Wenn Sie mehrere Elemente auswählen und damit arbeiten möchten, könnten Sie [`Document.querySelectorAll()`](/de/docs/Web/API/Document/querySelectorAll) verwenden, das alle im Dokument übereinstimmenden Elemente auswählt und Referenzen darauf in einem [Array](/de/docs/Learn_web_development/Core/Scripting/Arrays)-ähnlichen Objekt namens [`NodeList`](/de/docs/Web/API/NodeList) speichert.

Es gibt ältere Methoden, um Elementreferenzen zu erhalten, wie:

- [`Document.getElementById()`](/de/docs/Web/API/Document/getElementById), das ein Element mit einem bestimmten `id`-Attributwert auswählt, z. B. `<p id="myId">Mein Absatz</p>`. Die ID wird als Parameter an die Funktion übergeben, z. B. `const elementRef = document.getElementById('myId')`.
- [`Document.getElementsByTagName()`](/de/docs/Web/API/Document/getElementsByTagName), das ein Array-ähnliches Objekt mit allen auf der Seite eines bestimmten Typs befindlichen Elementen zurückgibt, zum Beispiel `<p>`s, `<a>`s usw. Der Elementtyp wird als Parameter an die Funktion übergeben, z. B. `const elementRefArray = document.getElementsByTagName('p')`.

Diese beiden funktionieren besser in älteren Browsern als die modernen Methoden wie `querySelector()`, sind aber nicht so praktisch. Schauen Sie mal nach, was Sie sonst noch finden können!

### Erstellen und Platzieren neuer Knoten

Das oben Gesagte gibt Ihnen einen kleinen Vorgeschmack darauf, was Sie tun können, aber lassen Sie uns weitergehen und sehen, wie wir neue Elemente erstellen können.

1. Zurück zu unserem aktuellen Beispiel: Beginnen wir damit, eine Referenz auf unser {{htmlelement("section")}}-Element zu greifen — fügen Sie den folgenden Code am Ende Ihres bestehenden Skriptes hinzu (machen Sie dies auch mit den anderen Zeilen):

   ```js
   const sect = document.querySelector("section");
   ```

2. Nun erstellen wir einen neuen Absatz mit [`Document.createElement()`](/de/docs/Web/API/Document/createElement) und geben ihm auf die gleiche Weise wie zuvor etwas Textinhalt:

   ```js
   const para = document.createElement("p");
   para.textContent = "We hope you enjoyed the ride.";
   ```

3. Sie können jetzt den neuen Absatz am Ende des Abschnitts mit [`Node.appendChild()`](/de/docs/Web/API/Node/appendChild) anhängen:

   ```js
   sect.appendChild(para);
   ```

4. Schließlich für diesen Teil fügen wir dem Absatz, in dem sich der Link befindet, einen Textknoten hinzu, um den Satz schön abzurunden. Zuerst erstellen wir den Textknoten mit [`Document.createTextNode()`](/de/docs/Web/API/Document/createTextNode):

   ```js
   const text = document.createTextNode(
     " — the premier source for web development knowledge.",
   );
   ```

5. Jetzt holen wir eine Referenz des Absatzes, in dem der Link sitzt, und fügen den Textknoten hinzu:

   ```js
   const linkPara = document.querySelector("p");
   linkPara.appendChild(text);
   ```

Das ist das meiste, was Sie zum Hinzufügen von Knoten zum DOM benötigen — Sie werden viel Gebrauch von diesen Methoden machen, wenn Sie dynamische Schnittstellen erstellen (wir werden später einige Beispiele betrachten).

### Verschieben und Entfernen von Elementen

Es kann Zeiten geben, in denen Sie Knoten verschieben oder vollständig aus dem DOM entfernen möchten. Dies ist durchaus möglich.

Wenn wir den Absatz, der den Link enthält, an das Ende des Abschnitts verschieben wollten, könnten wir dies tun:

```js
sect.appendChild(linkPara);
```

Dies verschiebt den Absatz an das Ende des Abschnitts. Sie könnten gedacht haben, es würde eine zweite Kopie davon machen, aber das ist nicht der Fall — `linkPara` ist eine Referenz auf die eine und einzige Kopie dieses Absatzes. Wenn Sie eine Kopie machen und diese ebenfalls hinzufügen möchten, müssten Sie stattdessen [`Node.cloneNode()`](/de/docs/Web/API/Node/cloneNode) verwenden.

Das Entfernen eines Knotens ist ebenfalls ziemlich einfach, zumindest wenn Sie eine Referenz auf den zu entfernenden Knoten und dessen Eltern haben. In unserem aktuellen Fall verwenden wir einfach [`Node.removeChild()`](/de/docs/Web/API/Node/removeChild), so:

```js
sect.removeChild(linkPara);
```

Wenn Sie einen Knoten nur anhand einer Referenz auf sich selbst entfernen möchten, was ziemlich häufig vorkommt, können Sie [`Element.remove()`](/de/docs/Web/API/Element/remove) verwenden:

```js
linkPara.remove();
```

Diese Methode wird in älteren Browsern nicht unterstützt. Dort haben sie keine Methode, um einem Knoten zu sagen, sich selbst zu entfernen, daher müssten Sie Folgendes tun:

```js
linkPara.parentNode.removeChild(linkPara);
```

Fügen Sie die obigen Zeilen zu Ihrem Code hinzu.

### Manipulation von CSS-Stilen

Es ist möglich, CSS-Stile über JavaScript auf verschiedene Weise zu manipulieren.

Zum Start können Sie eine Liste aller an ein Dokument angehängten Stylesheets erhalten, indem Sie [`Document.stylesheets`](/de/docs/Web/API/Document/styleSheets) verwenden, was ein Array-ähnliches Objekt mit [`CSSStyleSheet`](/de/docs/Web/API/CSSStyleSheet)-Objekten zurückgibt. Sie können dann Stile nach Belieben hinzufügen/entfernen. Wir werden jedoch nicht weiter auf diese Funktionen eingehen, da sie eine etwas archaische und schwierige Art und Weise darstellen, Stile zu manipulieren. Es gibt viel einfachere Möglichkeiten.

Die erste Möglichkeit besteht darin, Inline-Stile direkt auf die Elemente anzuwenden, die Sie dynamisch gestalten möchten. Dies geschieht mit der [`HTMLElement.style`](/de/docs/Web/API/HTMLElement/style)-Eigenschaft, die Inline-Styling-Informationen für jedes Element im Dokument enthält. Sie können die Eigenschaften dieses Objekts festlegen, um die Stilelemente direkt zu aktualisieren.

1. Fügen Sie in unserem Beispiel folgende Zeilen hinzu:

   ```js
   para.style.color = "white";
   para.style.backgroundColor = "black";
   para.style.padding = "10px";
   para.style.width = "250px";
   para.style.textAlign = "center";
   ```

2. Laden Sie die Seite neu und Sie werden sehen, dass die Stile auf den Absatz angewendet wurden. Wenn Sie sich diesen Absatz im [Page Inspector/DOM Inspector](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/index.html) Ihres Browsers ansehen, werden Sie feststellen, dass diese Zeilen tatsächlich Inline-Stile zu Dokument hinzugefügt haben:

   ```html
   <p
     style="color: white; background-color: black; padding: 10px; width: 250px; text-align: center;">
     We hope you enjoyed the ride.
   </p>
   ```

> [!NOTE]
> Beachten Sie, wie die JavaScript-Eigenschaftsversionen der CSS-Stile in {{Glossary("camel_case", "lower camel case")}} geschrieben sind, während die CSS-Versionen mit Bindestrichen ({{Glossary("kebab_case", "kebab-case")}}) geschrieben sind (z. B. `backgroundColor` gegenüber `background-color`). Stellen Sie sicher, dass Sie diese nicht verwechseln, sonst funktioniert es nicht.

Es gibt eine weitere gebräuchliche Methode, um Stile in Ihrem Dokument dynamisch zu manipulieren, die wir uns jetzt ansehen werden.

1. Löschen Sie die letzten fünf Zeilen, die Sie dem JavaScript hinzugefügt haben.
2. Fügen Sie folgendes in Ihr HTML {{htmlelement("head")}} ein:

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

3. Nun wenden wir uns einer sehr nützlichen Methode für die allgemeine HTML-Manipulation zu — [`Element.setAttribute()`](/de/docs/Web/API/Element/setAttribute) — diese nimmt zwei Argumente, das Attribut, das Sie auf dem Element festlegen möchten, und den Wert, den Sie ihm zuordnen möchten. In diesem Fall legen wir eine Klassenbezeichnung namens highlight auf unseren Absatz fest:

   ```js
   para.setAttribute("class", "highlight");
   ```

4. Laden Sie Ihre Seite neu, und Sie werden keine Änderungen sehen — das CSS wird immer noch auf den Absatz angewendet, diesmal jedoch, indem ihm eine Klasse zugewiesen wird, die durch unsere CSS-Regel ausgewählt wurde und nicht als Inline-CSS-Stile.

Welche Methode Sie wählen, bleibt Ihnen überlassen; beide haben ihre Vor- und Nachteile. Die erste Methode erfordert weniger Setup und ist gut für einfache Anwendungen geeignet, während die zweite Methode mehr "purist" ist (keine Mischung aus CSS und JavaScript, keine Inline-Stile, die als schlechte Praxis gelten). Wenn Sie beginnen, größere und komplexere Apps zu entwickeln, werden Sie wahrscheinlich eher die zweite Methode verwenden, aber es liegt wirklich an Ihnen.

Bis zu diesem Punkt haben wir nichts wirklich Nützliches gemacht! Es macht keinen Sinn, JavaScript zu verwenden, um statische Inhalte zu erstellen — Sie könnten es genauso gut direkt in Ihr HTML schreiben und kein JavaScript verwenden. Es ist komplexer als HTML, und die Erstellung von Inhalten mit JavaScript hat auch andere Probleme (wie z. B. nicht von Suchmaschinen lesbar zu sein).

Im nächsten Abschnitt werden wir uns eine praktischere Anwendung der DOM-APIs ansehen.

> [!NOTE]
> Sie finden unsere [fertige Version der dom-example.html](https://github.com/mdn/learning-area/blob/main/javascript/apis/document-manipulation/dom-example-manipulated.html) Demo auf GitHub ([auch live sehen](https://mdn.github.io/learning-area/javascript/apis/document-manipulation/dom-example-manipulated.html)).

## Aktives Lernen: Eine dynamische Einkaufsliste

In dieser Herausforderung möchten wir ein einfaches Einkaufsliste-Beispiel erstellen, das es erlaubt, Elemente der Liste dynamisch über ein Formularfeld und einen Button hinzuzufügen. Wenn Sie ein Element zu der Eingabe hinzufügen und den Button betätigen:

- Das Element sollte in der Liste angezeigt werden.
- Jedes Element sollte mit einem Button versehen sein, der gedrückt werden kann, um dieses Element aus der Liste zu löschen.
- Das Eingabefeld sollte geleert und fokussiert werden, damit Sie ein weiteres Element eingeben können.

Die fertige Demo sieht folgendermaßen aus:

![Demo-Anordnung einer Einkaufsliste. Eine 'Meine Einkaufsliste' Überschrift, gefolgt von 'Geben Sie ein neues Element ein' mit einem Eingabefeld und einem 'Element hinzufügen'-Button. Die Liste der bereits hinzugefügten Elemente befindet sich unten, jedes mit einem entsprechende删除arte löschen-Button.](shopping-list.png)

Um die Übung abzuschließen, folgen Sie den unten angegebenen Schritten und stellen Sie sicher, dass sich die Liste wie beschrieben verhält.

1. Um zu beginnen, laden Sie eine Kopie unserer [shopping-list.html](https://github.com/mdn/learning-area/blob/main/javascript/apis/document-manipulation/shopping-list.html) Startdatei herunter und machen Sie eine Kopie davon irgendwo. Sie werden sehen, dass es einige minimale CSS, eine div mit einem Label, Eingabe und Button, sowie eine leere Liste und ein {{htmlelement("script")}}-Element enthält. Alle Ihre Ergänzungen werden Sie im Skript machen.
2. Erstellen Sie drei Variablen, die Referenzen auf die Liste ({{htmlelement("ul")}}), {{htmlelement("input")}} und {{htmlelement("button")}} Elemente halten.
3. Erstellen Sie eine [Funktion](/de/docs/Learn_web_development/Core/Scripting/Functions), die als Reaktion auf das Klicken des Buttons ausgeführt wird.
4. Speichern Sie innerhalb des Funktionskörpers zuerst den aktuellen [Wert](/de/docs/Web/API/HTMLInputElement/value) des Eingabefelds in einer Variablen.
5. Leeren Sie als Nächstes das Eingabefeld, indem Sie dessen Wert auf eine leere Zeichenfolge setzen — `''`.
6. Erstellen Sie drei neue Elemente — ein Listenelement ({{htmlelement('li')}}), {{htmlelement('span')}} und {{htmlelement('button')}} und speichern Sie sie in Variablen.
7. Anhängen Sie das span und den Button als Kinder des Listenelements.
8. Setzen Sie den Textinhalt des span auf den zuvor gespeicherten Wert des Eingabefelds und den Textinhalt des Buttons auf 'Löschen'.
9. Fügen Sie das Listenelement als Kind der Liste hinzu.
10. Hängen Sie einen Ereignis-Handler an den Löschen-Button an, sodass er beim Klicken das gesamte Listenelement (`<li>...</li>`) löscht.
11. Verwenden Sie schließlich die [`focus()`](/de/docs/Web/API/HTMLElement/focus)-Methode, um das Eingabefeld zu fokussieren und bereit zu machen, das nächste Einkaufslistelement einzugeben.

> [!NOTE]
> Wenn Sie wirklich nicht weiterkommen, schauen Sie sich unsere [fertige Einkaufsliste](https://github.com/mdn/learning-area/blob/main/javascript/apis/document-manipulation/shopping-list-finished.html) an ([auch live anzeigen](https://mdn.github.io/learning-area/javascript/apis/document-manipulation/shopping-list-finished.html)).

## Zusammenfassung

Wir haben das Ende unseres Studiums über Dokument- und DOM-Manipulation erreicht. An diesem Punkt sollten Sie verstehen, was die wichtigen Teile eines Webbrowsers in Bezug auf die Steuerung von Dokumenten und anderen Aspekten der Web-Erfahrung eines Benutzers sind. Am wichtigsten ist, dass Sie verstehen, was das Document Object Model ist und wie Sie es manipulieren können, um nützliche Funktionalitäten zu schaffen.

## Siehe auch

- Es gibt noch viele weitere Funktionen, mit denen Sie Ihre Dokumente manipulieren können. Schauen Sie in einige unserer Referenzen und entdecken Sie, was Sie herausfinden können:
  - [`Document`](/de/docs/Web/API/Document)
  - [`Window`](/de/docs/Web/API/Window)
  - [`Node`](/de/docs/Web/API/Node)
  - [`HTMLElement`](/de/docs/Web/API/HTMLElement), [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement), [`HTMLImageElement`](/de/docs/Web/API/HTMLImageElement) usw.
- [DOM-Scripting](https://explainers.dev/dom-scripting/), explainers.dev

{{PreviousMenuNext("Learn_web_development/Core/Scripting/Object_basics","Learn_web_development/Core/Scripting/Network_requests", "Learn_web_development/Core/Scripting")}}
