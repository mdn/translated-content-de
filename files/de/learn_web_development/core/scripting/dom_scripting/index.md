---
title: Einführung in die DOM-Skriptierung
short-title: DOM scripting
slug: Learn_web_development/Core/Scripting/DOM_scripting
l10n:
  sourceCommit: 6c58c5d4227a031105740b0e85acbc6178223d0a
---

{{LearnSidebar}}

{{PreviousMenuNext("Learn_web_development/Core/Scripting/Object_basics","Learn_web_development/Core/Scripting/Network_requests", "Learn_web_development/Core/Scripting")}}

Beim Schreiben von Webseiten und Apps werden Sie häufig die Dokumentstruktur auf irgendeine Weise ändern wollen. Dies geschieht normalerweise durch die Manipulation des Document Object Model (DOM) über eine Reihe von integrierten Browser-APIs zur Steuerung von HTML- und Stilinformationen. In diesem Artikel werden wir Sie in die **DOM-Skriptierung** einführen.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>Ein Verständnis von <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a> und den <a href="/de/docs/Learn_web_development/Core/Styling_basics">Grundlagen von CSS</a>, sowie Vertrautheit mit den JavaScript-Grundlagen, die in den vorherigen Lektionen behandelt wurden.</td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Was das DOM ist — die interne Darstellung der HTML-Struktur des Dokuments im Browser als Hierarchie von Objekten.</li>
          <li>Die wichtigen Teile eines Webbrowsers, wie sie in JavaScript dargestellt werden — <code>Navigator</code>, <code>Window</code> und <code>Document</code>.</li>
          <li>Wie DOM-Knoten relativ zueinander im DOM-Baum existieren — Wurzel, Elternteil, Kind, Geschwister und Nachkomme.</li>
          <li>Erhalten von Referenzen auf DOM-Knoten, Erstellen neuer Knoten, Hinzufügen und Entfernen von Knoten und Attributen.</li>
          <li>Manipulieren von CSS-Stilen mit JavaScript.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Die wichtigen Teile eines Webbrowsers

Webbrowser sind sehr komplizierte Softwarestücke mit vielen beweglichen Teilen, von denen viele nicht durch einen Webentwickler mit JavaScript gesteuert oder manipuliert werden können. Es mag den Anschein haben, dass solche Einschränkungen nachteilig sind, aber Browser sind aus guten Gründen gesichert, hauptsächlich aus Sicherheitsgründen. Stellen Sie sich vor, eine Website könnte auf Ihre gespeicherten Passwörter oder andere sensible Informationen zugreifen und sich als Sie bei Websites anmelden?

Trotz der Einschränkungen bieten Web-APIs uns immer noch Zugriff auf viele Funktionen, die es uns ermöglichen, eine Vielzahl von Dingen mit Webseiten zu tun. Es gibt einige wirklich offensichtliche Teile, auf die Sie regelmäßig in Ihrem Code verweisen werden — betrachten Sie das folgende Diagramm, das die Hauptteile eines Browsers darstellt, die direkt mit dem Anzeigen von Webseiten zu tun haben:

![Wichtige Teile des Webbrowsers; das Dokument ist die Webseite. Das Fenster umfasst das gesamte Dokument und auch den Tab. Der Navigator ist der Browser, der das Fenster (das das Dokument enthält) und alle anderen Fenster umfasst.](document-window-navigator.png)

- Das Fenster ist der Browser-Tab, in dem eine Webseite geladen wird; dies wird in JavaScript durch das [`Window`](/de/docs/Web/API/Window)-Objekt dargestellt. Durch Methoden, die auf diesem Objekt verfügbar sind, können Sie Dinge tun wie die Fenstergröße zurückgeben (siehe [`Window.innerWidth`](/de/docs/Web/API/Window/innerWidth) und [`Window.innerHeight`](/de/docs/Web/API/Window/innerHeight)), das in diesem Fenster geladene Dokument manipulieren, datenspezifische Informationen zu diesem Dokument auf der Client-Seite speichern (zum Beispiel mit einer lokalen Datenbank oder einem anderen Speichermedium), einen [Event-Handler](/de/docs/Learn_web_development/Core/Scripting/Events) an das aktuelle Fenster anhängen und vieles mehr.
- Der Navigator stellt den Zustand und die Identität des Browsers (d.h. den User-Agent) dar, wie er im Web existiert. In JavaScript wird dies durch das [`Navigator`](/de/docs/Web/API/Navigator)-Objekt dargestellt. Sie können dieses Objekt verwenden, um Dinge wie die bevorzugte Sprache des Benutzers oder einen Mediastream von der Webcam des Benutzers abzurufen.
- Das Dokument (dargestellt durch das DOM in Browsern) ist die tatsächliche Seite, die im Fenster geladen ist, und wird in JavaScript durch das [`Document`](/de/docs/Web/API/Document)-Objekt dargestellt. Sie können dieses Objekt verwenden, um Informationen über das HTML und CSS, das das Dokument umfasst, zurückzugeben und zu manipulieren. Zum Beispiel können Sie eine Referenz zu einem Element im DOM erhalten, dessen Textinhalt ändern, neue Stile darauf anwenden, neue Elemente erstellen und diese als Kinder zum aktuellen Element hinzufügen oder es sogar ganz löschen.

In diesem Artikel konzentrieren wir uns hauptsächlich auf die Manipulation des Dokuments, zeigen aber auch einige andere nützliche Funktionen.

## Das Document Object Model

Lassen Sie uns eine kurze Zusammenfassung des Document Object Model (DOM) geben, das wir auch früher im Kurs behandelt haben. Das derzeit in jedem Ihrer Browser-Tabs geladene Dokument wird durch ein DOM dargestellt. Dies ist eine "Baumstruktur"-Darstellung, die vom Browser erstellt wird und es ermöglicht, die HTML-Struktur leicht durch Programmiersprachen zuzugreifen — zum Beispiel verwendet der Browser es selbst, um Styling und andere Informationen auf die richtigen Elemente anzuwenden, während er eine Seite rendert, und Entwickler wie Sie können das DOM mit JavaScript manipulieren, nachdem die Seite gerendert wurde.

Wir haben eine Beispielseite unter [dom-example.html](https://github.com/mdn/learning-area/blob/main/javascript/apis/document-manipulation/dom-example.html) erstellt ([siehe sie auch live](https://mdn.github.io/learning-area/javascript/apis/document-manipulation/dom-example.html)). Versuchen Sie, dies in Ihrem Browser zu öffnen — es ist eine sehr einfache Seite mit einem {{htmlelement("section")}}-Element, in dem Sie ein Bild und einen Absatz mit einem Link darin finden. Der HTML-Quellcode sieht wie folgt aus:

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

Das DOM sieht hingegen so aus:

![Baumstruktur-Darstellung des Document Object Model: Der oberste Knoten ist der Doctype und das HTML-Element. Die Kindknoten von HTML umfassen Head und Body. Jedes Kindelement ist ein Zweig. Alle Texte, sogar Leerzeichen, werden ebenfalls angezeigt.](dom-screenshot.png)

> [!NOTE]
> Dieses DOM-Baudiagramm wurde mit Ian Hicksons [Live DOM-Viewer](https://software.hixie.ch/utilities/js/live-dom-viewer/) erstellt.

Jeder Eintrag im Baum wird als **Knoten** bezeichnet. Sie können im obigen Diagramm sehen, dass einige Knoten Elemente darstellen (identifiziert als `HTML`, `HEAD`, `META` und so weiter) und andere Text darstellen (identifiziert als `#text`). Es gibt [auch andere Arten von Knoten](/de/docs/Web/API/Node/nodeType), aber dies sind die wichtigsten, mit denen Sie zu tun haben werden.

Knoten werden auch nach ihrer Position im Baum relativ zu anderen Knoten bezeichnet:

- **Wurzelknoten**: Der oberste Knoten im Baum, der im Fall von HTML immer der `HTML`-Knoten ist (andere Markup-Vokabulare wie SVG und benutzerdefinierte XML haben unterschiedliche Wurzelelemente).
- **Kindknoten**: Ein Knoten _direkt_ innerhalb eines anderen Knotens. Zum Beispiel ist `IMG` ein Kind von `SECTION` im obigen Beispiel.
- **Nachkommenknoten**: Ein Knoten _irgendwo_ innerhalb eines anderen Knotens. Zum Beispiel ist `IMG` ein Kind von `SECTION` im obigen Beispiel, und es ist auch ein Nachkomme. `IMG` ist kein Kind von `BODY`, da es zwei Ebenen darunter im Baum liegt, aber es ist ein Nachkomme von `BODY`.
- **Elternknoten**: Ein Knoten, der einen anderen Knoten innerhalb von sich hat. Zum Beispiel ist `BODY` der Elternknoten von `SECTION` im obigen Beispiel.
- **Geschwisterknoten**: Knoten, die auf derselben Ebene unter demselben Elternknoten im DOM-Baum sitzen. Zum Beispiel sind `IMG` und `P` im obigen Beispiel Geschwister.

Es ist nützlich, sich mit dieser Terminologie vor der Arbeit mit dem DOM vertraut zu machen, da eine Reihe der Codebegriffe, denen Sie begegnen werden, darauf basieren. Sie werden ihnen auch in CSS begegnen (z. B. Nachkommensselektor, Kindselektor).

## Aktives Lernen: Grundlegende DOM-Manipulation

Um mit dem Lernen der DOM-Manipulation zu beginnen, beginnen wir mit einem praktischen Beispiel.

1. Nehmen Sie eine lokale Kopie der [dom-example.html-Seite](https://github.com/mdn/learning-area/blob/main/javascript/apis/document-manipulation/dom-example.html) und des [Bildes](https://github.com/mdn/learning-area/blob/main/javascript/apis/document-manipulation/dinosaur.png), das dazu gehört.
2. Fügen Sie ein `<script></script>`-Element direkt über dem schließenden `</body>`-Tag hinzu.
3. Um ein Element im DOM zu manipulieren, müssen Sie es zuerst auswählen und eine Referenz darauf in einer Variablen speichern. Fügen Sie in Ihrem Skriptelement die folgende Zeile hinzu:

   ```js
   const link = document.querySelector("a");
   ```

4. Jetzt, da wir die Elementreferenz in einer Variablen gespeichert haben, können wir beginnen, sie mit den darauf verfügbaren Eigenschaften und Methoden zu manipulieren (diese sind auf Schnittstellen wie [`HTMLAnchorElement`](/de/docs/Web/API/HTMLAnchorElement) im Falle des {{htmlelement("a")}}-Elements, seiner allgemeineren Elternschnittstelle [`HTMLElement`](/de/docs/Web/API/HTMLElement) und [`Node`](/de/docs/Web/API/Node) — die alle Knoten in einem DOM darstellt, definiert). Zuerst ändern wir den Text im Link, indem wir den Wert der [`Node.textContent`](/de/docs/Web/API/Node/textContent)-Eigenschaft aktualisieren. Fügen Sie die folgende Zeile unter der vorherigen hinzu:

   ```js
   link.textContent = "Mozilla Developer Network";
   ```

5. Wir sollten auch die URL ändern, auf die der Link verweist, damit er beim Klicken nicht an den falschen Ort geht. Fügen Sie die folgende Zeile erneut am Ende hinzu:

   ```js
   link.href = "https://developer.mozilla.org";
   ```

Beachten Sie, dass es, wie bei vielen Dingen in JavaScript, viele Möglichkeiten gibt, ein Element auszuwählen und eine Referenz darauf in einer Variablen zu speichern. [`Document.querySelector()`](/de/docs/Web/API/Document/querySelector) ist der empfohlene moderne Ansatz. Er ist praktisch, da er Ihnen erlaubt, Elemente mit CSS-Selektoren auszuwählen. Der obige `querySelector()`-Aufruf wird das erste {{htmlelement("a")}}-Element, das im Dokument erscheint, auswählen. Wenn Sie mehrere Elemente auswählen und Dinge damit tun wollen, könnten Sie [`Document.querySelectorAll()`](/de/docs/Web/API/Document/querySelectorAll) verwenden, das jedes Element im Dokument, das dem Selektor entspricht, auswählt und Referenzen darauf in einem [array](/de/docs/Learn_web_development/Core/Scripting/Arrays)-ähnlichen Objekt namens [`NodeList`](/de/docs/Web/API/NodeList) speichert.

Es gibt ältere Methoden zum Abrufen von Elementreferenzen, wie zum Beispiel:

- [`Document.getElementById()`](/de/docs/Web/API/Document/getElementById), das ein Element mit einem bestimmten `id`-Attributwert auswählt, z. B. `<p id="myId">Mein Absatz</p>`. Die ID wird der Funktion als Parameter übergeben, d.h. `const elementRef = document.getElementById('myId')`.
- [`Document.getElementsByTagName()`](/de/docs/Web/API/Document/getElementsByTagName), das ein Array-ähnliches Objekt zurückgibt, das alle Elemente auf der Seite eines bestimmten Typs enthält, beispielsweise `<p>`s, `<a>`s usw. Der Elementtyp wird als Parameter der Funktion übergeben, d.h. `const elementRefArray = document.getElementsByTagName('p')`.

Diese beiden funktionieren in älteren Browsern besser als die modernen Methoden wie `querySelector()`, sind aber nicht so praktisch. Schauen Sie mal nach, welche anderen Sie finden können!

### Erstellen und Platzieren neuer Knoten

Das obige Beispiel hat Ihnen einen kleinen Vorgeschmack darauf gegeben, was Sie tun können, aber schauen wir uns genauer an, wie wir neue Elemente erstellen können.

1. Gehen wir zurück zu dem aktuellen Beispiel und fangen wir damit an, eine Referenz auf unser {{htmlelement("section")}}-Element zu erhalten — fügen Sie den folgenden Code am Ende Ihres vorhandenen Skriptes hinzu (tun Sie dasselbe mit den anderen Zeilen):

   ```js
   const sect = document.querySelector("section");
   ```

2. Erstellen wir nun einen neuen Absatz mit [`Document.createElement()`](/de/docs/Web/API/Document/createElement) und geben ihm etwas Textinhalt, wie zuvor:

   ```js
   const para = document.createElement("p");
   para.textContent = "We hope you enjoyed the ride.";
   ```

3. Sie können jetzt den neuen Absatz am Ende des Abschnitts mit [`Node.appendChild()`](/de/docs/Web/API/Node/appendChild) anhängen:

   ```js
   sect.appendChild(para);
   ```

4. Schließlich für diesen Teil, fügen wir dem Absatz, in dem sich der Link befindet, einen Textknoten hinzu, um den Satz schön abzuschließen. Zuerst werden wir den Textknoten mit [`Document.createTextNode()`](/de/docs/Web/API/Document/createTextNode) erstellen:

   ```js
   const text = document.createTextNode(
     " — the premier source for web development knowledge.",
   );
   ```

5. Jetzt holen wir uns eine Referenz auf den Absatz, in dem sich der Link befindet, und hängen den Textknoten daran an:

   ```js
   const linkPara = document.querySelector("p");
   linkPara.appendChild(text);
   ```

Das ist das meiste, was Sie zum Hinzufügen von Knoten zum DOM benötigen — Sie werden diese Methoden viel nutzen, wenn Sie dynamische Schnittstellen erstellen (wir schauen uns später einige Beispiele an).

### Bewegen und Entfernen von Elementen

Es kann Zeiten geben, in denen Sie Knoten verschieben oder vollständig aus dem DOM entfernen möchten. Dies ist durchaus möglich.

Wenn wir wollten, dass der Absatz mit dem Link darin an das Ende des Abschnitts verschoben wird, könnten wir dies tun:

```js
sect.appendChild(linkPara);
```

Dies verschiebt den Absatz nach unten zum Ende des Abschnitts. Sie hätten vielleicht gedacht, dass eine zweite Kopie davon erstellt wird, aber das ist nicht der Fall — `linkPara` ist eine Referenz auf diese eine und einzige Kopie dieses Absatzes. Wenn Sie eine Kopie erstellen und diese ebenfalls hinzufügen wollten, müssten Sie `Node.cloneNode()` verwenden.

Das Entfernen eines Knotens ist ebenfalls ziemlich einfach, zumindest wenn Sie eine Referenz auf den zu entfernenden Knoten und dessen Elternteil haben. In unserem aktuellen Fall verwenden wir einfach `Node.removeChild()`, wie folgt:

```js
sect.removeChild(linkPara);
```

Wenn Sie einen Knoten nur basierend auf einer Referenz darauf entfernen möchten, was ziemlich üblich ist, können Sie `Element.remove()` verwenden:

```js
linkPara.remove();
```

Diese Methode wird in älteren Browsern nicht unterstützt. Sie haben keine Methode, einem Knoten zu sagen, dass er sich selbst entfernen muss, also müssten Sie das Folgende tun:

```js
linkPara.parentNode.removeChild(linkPara);
```

Probieren Sie aus, die obigen Zeilen zu Ihrem Code hinzuzufügen.

### Manipulieren von Stilen

Es ist möglich, CSS-Stile auf verschiedene Weise über JavaScript zu manipulieren.

Zuerst können Sie eine Liste aller Stylesheets abrufen, die einem Dokument angehängt sind, indem Sie `Document.stylesheets` verwenden, das ein Array-ähnliches Objekt mit `CSSStyleSheet`-Objekten zurückgibt. Sie können dann Stile hinzufügen/entfernen, wie Sie möchten. Wir werden jedoch nicht weiter auf diese Funktionen eingehen, da sie eine etwas veraltete und schwierige Möglichkeit sind, Stile zu manipulieren. Es gibt viel einfachere Möglichkeiten.

Die erste Möglichkeit besteht darin, Inline-Stile direkt auf die Elemente, die Sie dynamisch gestalten möchten, hinzuzufügen. Dies geschieht mit der `HTMLElement.style`-Eigenschaft, die Inline-Stylinformation für jedes Element im Dokument enthält. Sie können Eigenschaften dieses Objekts festlegen, um Elementstile direkt zu aktualisieren.

1. Als Beispiel, versuchen Sie diese Zeilen zu unserem laufenden Beispiel hinzuzufügen:

   ```js
   para.style.color = "white";
   para.style.backgroundColor = "black";
   para.style.padding = "10px";
   para.style.width = "250px";
   para.style.textAlign = "center";
   ```

2. Laden Sie die Seite neu, und Sie werden sehen, dass die Stile auf den Absatz angewendet wurden. Wenn Sie sich diesen Absatz im [Page Inspector/DOM-Inspector](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/index.html) Ihres Browsers ansehen, werden Sie sehen, dass diese Zeilen tatsächlich Inline-Stile zum Dokument hinzufügen:

   ```html
   <p
     style="color: white; background-color: black; padding: 10px; width: 250px; text-align: center;">
     We hope you enjoyed the ride.
   </p>
   ```

> [!NOTE]
> Beachten Sie, dass die JavaScript-Property-Versionen der CSS-Stile in {{Glossary("camel_case", "lower camel case")}} geschrieben sind, während die CSS-Versionen mit Bindestrichen ({{Glossary("kebab_case", "kebab-case")}}) versehen sind (z. B. `backgroundColor` versus `background-color`). Achten Sie darauf, diese nicht zu verwechseln, sonst funktioniert es nicht.

Es gibt eine weitere häufige Möglichkeit, Stile auf Ihrem Dokument dynamisch zu manipulieren, die wir uns jetzt ansehen werden.

1. Löschen Sie die vorherigen fünf Zeilen, die Sie dem JavaScript hinzugefügt haben.
2. Fügen Sie Folgendes in Ihr HTML-{{htmlelement("head")}} ein:

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

3. Nun kommen wir zu einer sehr nützlichen Methode zur allgemeinen HTML-Manipulation — `Element.setAttribute()` — diese nimmt zwei Argumente, das Attribut, das Sie auf dem Element setzen möchten, und den Wert, den Sie ihm zuweisen möchten. In diesem Fall werden wir unserem Absatz eine Klasse "highlight" zuweisen:

   ```js
   para.setAttribute("class", "highlight");
   ```

4. Aktualisieren Sie Ihre Seite, und Sie werden keine Änderung sehen — das CSS wird immer noch auf den Absatz angewendet, diesmal jedoch, indem ihm eine Klasse zugewiesen wird, die von unserer CSS-Regel ausgewählt wird, nicht als Inline-CSS-Stile.

Welche Methode Sie wählen, liegt bei Ihnen; beide haben ihre Vor- und Nachteile. Die erste Methode erfordert weniger Einrichtung und ist gut für einfache Anwendungen, während die zweite Methode puristischer ist (keine Mischung von CSS und JavaScript, keine Inline-Stile, die als schlechte Praxis angesehen werden). Wenn Sie beginnen, größere und komplexere Apps zu erstellen, werden Sie wahrscheinlich die zweite Methode häufiger verwenden, aber das bleibt Ihnen überlassen.

An diesem Punkt haben wir eigentlich nichts Nützliches getan! Es hat keinen Zweck, JavaScript zu verwenden, um statischen Inhalt zu erstellen — Sie könnten diesen genauso gut in Ihr HTML schreiben und JavaScript nicht verwenden. Es ist komplexer als HTML, und das Erstellen Ihres Inhalts mit JavaScript hat auch andere Probleme, die damit verbunden sind (wie es nicht von Suchmaschinen lesbar ist).

Im nächsten Abschnitt werden wir uns einen praktischeren Gebrauch von DOM-APIs ansehen.

> [!NOTE]
> Sie finden unsere [fertige Version des dom-example.html](https://github.com/mdn/learning-area/blob/main/javascript/apis/document-manipulation/dom-example-manipulated.html) Demos auf GitHub ([siehe es auch live](https://mdn.github.io/learning-area/javascript/apis/document-manipulation/dom-example-manipulated.html)).

## Aktives Lernen: Eine dynamische Einkaufsliste

In dieser Herausforderung möchten wir ein einfaches Einkaufsliste-Beispiel erstellen, das es Ihnen ermöglicht, Elemente dynamisch zur Liste hinzuzufügen, indem Sie ein Formulareingabefeld und eine Schaltfläche verwenden. Wenn Sie ein Element in das Eingabefeld eingeben und die Schaltfläche drücken:

- Das Element sollte in der Liste erscheinen.
- Jedes Element sollte eine Schaltfläche erhalten, die gedrückt werden kann, um das Element von der Liste zu löschen.
- Das Eingabefeld sollte geleert und fokussiert sein, damit Sie ein weiteres Element eingeben können.

Das fertige Demo wird ungefähr so aussehen:

![Demo-Layout einer Einkaufsliste. Eine "Meine Einkaufsliste"-Überschrift, gefolgt von "Ein neues Element eingeben" mit einem Eingabefeld und einer Schaltfläche "Element hinzufügen". Die Liste der bereits hinzugefügten Elemente befindet sich darunter, jedes mit einer entsprechenden Löschen-Schaltfläche.](shopping-list.png)

Um die Übung abzuschließen, folgen Sie den untenstehenden Schritten und stellen Sie sicher, dass sich die Liste wie beschrieben verhält.

1. Laden Sie zuerst eine Kopie unserer [shopping-list.html](https://github.com/mdn/learning-area/blob/main/javascript/apis/document-manipulation/shopping-list.html)-Startdatei herunter und machen Sie eine Kopie davon an einem Ort Ihrer Wahl. Sie werden sehen, dass sie einige minimale CSS, ein div mit einem Label, Eingabe und Schaltfläche hat und eine leere Liste und {{htmlelement("script")}}-Element. Sie werden alle Ihre Ergänzungen innerhalb des Skripts vornehmen.
2. Erstellen Sie drei Variablen, die Referenzen auf das Listenelement ({{htmlelement("ul")}}), {{htmlelement("input")}} und {{htmlelement("button")}} enthalten.
3. Erstellen Sie eine [Funktion](/de/docs/Learn_web_development/Core/Scripting/Functions), die ausgeführt wird, wenn die Schaltfläche geklickt wird.
4. Speichern Sie im Funktionskörper zunächst den aktuellen [Wert](/de/docs/Web/API/HTMLInputElement/value) des Eingabeelements in einer Variablen.
5. Leeren Sie als Nächstes das Eingabeelement, indem Sie dessen Wert auf einen leeren String setzen — `''`.
6. Erstellen Sie drei neue Elemente — ein Listenelement ({{htmlelement('li')}}), {{htmlelement('span')}}, und {{htmlelement('button')}}, und speichern Sie sie in Variablen.
7. Hängen Sie das span-Element und die Schaltfläche als Kinder des Listenelements an.
8. Setzen Sie den Textinhalt des span-Elements auf den vorher gespeicherten Wert des Eingabeelements und den Textinhalt der Schaltfläche auf 'Delete'.
9. Fügen Sie das Listenelement als Kind der Liste hinzu.
10. Befestigen Sie einen Event-Handler an der Löschen-Schaltfläche, der, wenn er geklickt wird, das gesamte Listenelement (`<li>...</li>`) löscht.
11. Verwenden Sie abschließend die [`focus()`](/de/docs/Web/API/HTMLElement/focus)-Methode, um das Eingabeelement zu fokussieren, damit es bereit ist, das nächste Einkaufsliste-Element einzugeben.

> [!NOTE]
> Wenn Sie wirklich stecken bleiben, werfen Sie einen Blick auf unsere [fertige Einkaufsliste](https://github.com/mdn/learning-area/blob/main/javascript/apis/document-manipulation/shopping-list-finished.html) ([sehen Sie sie auch live](https://mdn.github.io/learning-area/javascript/apis/document-manipulation/shopping-list-finished.html)).

## Zusammenfassung

Wir sind am Ende unseres Studiums der Dokument- und DOM-Manipulation angelangt. An diesem Punkt sollten Sie verstehen, was die wichtigen Teile eines Webbrowsers in Bezug auf die Steuerung von Dokumenten und anderen Aspekten der Web-Erfahrung des Benutzers sind. Am wichtigsten ist, dass Sie verstehen sollten, was das Document Object Model ist und wie Sie es manipulieren können, um nützliche Funktionalität zu schaffen.

## Siehe auch

- Es gibt viele weitere Funktionen, die Sie verwenden können, um Ihre Dokumente zu manipulieren. Schauen Sie sich einige unserer Referenzen an und sehen Sie, was Sie entdecken können:
  - [`Document`](/de/docs/Web/API/Document)
  - [`Window`](/de/docs/Web/API/Window)
  - [`Node`](/de/docs/Web/API/Node)
  - [`HTMLElement`](/de/docs/Web/API/HTMLElement), [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement), [`HTMLImageElement`](/de/docs/Web/API/HTMLImageElement), usw.
- [DOM Scripting](https://explainers.dev/dom-scripting/), explainers.dev

{{PreviousMenuNext("Learn_web_development/Core/Scripting/Object_basics","Learn_web_development/Core/Scripting/Network_requests", "Learn_web_development/Core/Scripting")}}
