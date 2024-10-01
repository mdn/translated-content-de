---
title: Manipulierung von Dokumenten
slug: Learn/JavaScript/Client-side_web_APIs/Manipulating_documents
l10n:
  sourceCommit: bc0d0d1ef796435e969f6d65c7e5d3c08f4023aa
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/JavaScript/Client-side_web_APIs/Introduction", "Learn/JavaScript/Client-side_web_APIs/Fetching_data", "Learn/JavaScript/Client-side_web_APIs")}}

Beim Schreiben von Webseiten und Apps ist eine der häufigsten Aufgaben, die Dokumentstruktur in irgendeiner Weise zu manipulieren. Dies wird üblicherweise durch die Verwendung des Document Object Model (DOM) erreicht, einer Sammlung von APIs zur Steuerung von HTML und Styling-Informationen, die häufig das [`Document`](/de/docs/Web/API/Document)-Objekt verwenden. In diesem Artikel schauen wir uns im Detail an, wie man das DOM nutzt, zusammen mit einigen anderen interessanten APIs, die Ihre Umgebung auf interessante Weise verändern können.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Grundkenntnisse in HTML, CSS und
        JavaScript — einschließlich JavaScript-Objekten.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Vertrautheit mit den grundlegenden DOM-APIs und den anderen häufig mit DOM- und Dokumentmanipulation assoziierten APIs erlangen.
      </td>
    </tr>
  </tbody>
</table>

## Die wichtigen Teile eines Webbrowsers

Webbrowser sind sehr komplexe Software mit vielen beweglichen Teilen, von denen viele nicht von einem Webentwickler mit JavaScript gesteuert oder manipuliert werden können. Sie könnten denken, dass solche Beschränkungen eine schlechte Sache sind, aber Browser sind aus guten Gründen gesperrt, die sich hauptsächlich um Sicherheit drehen. Stellen Sie sich vor, eine Website könnte auf Ihre gespeicherten Passwörter oder andere sensible Informationen zugreifen und so tun, als ob sie Sie wäre?

Trotz der Beschränkungen geben uns Web-APIs weiterhin Zugriff auf viele Funktionen, die es uns ermöglichen, viele Dinge mit Webseiten zu tun. Es gibt ein paar wirklich offensichtliche Aspekte, auf die Sie regelmäßig in Ihrem Code verweisen werden – betrachten Sie die folgende Darstellung, die die Hauptteile eines Browsers darstellt, die direkt an der Anzeige von Webseiten beteiligt sind:

![Wichtige Teile eines Webbrowsers; das Dokument ist die Webseite. Das Fenster umfasst das gesamte Dokument und auch den Tab. Der Navigator ist der Browser, der das Fenster (das das Dokument umfasst) und alle anderen Fenster enthält.](document-window-navigator.png)

- Das Fenster ist der Tab des Browsers, in den eine Webseite geladen wird; dies wird in JavaScript durch das [`Window`](/de/docs/Web/API/Window)-Objekt dargestellt. Mithilfe der auf diesem Objekt verfügbaren Methoden können Sie Dinge tun wie die Größe des Fensters zurückgeben (siehe [`Window.innerWidth`](/de/docs/Web/API/Window/innerWidth) und [`Window.innerHeight`](/de/docs/Web/API/Window/innerHeight)), das in dieses Fenster geladene Dokument manipulieren, dokumentenspezifische Daten auf der Client-Seite speichern (beispielsweise mithilfe einer lokalen Datenbank oder eines anderen Speichersystems), einen [Ereignis-Handler](/de/docs/Learn/JavaScript/Building_blocks/Events) am aktuellen Fenster anbringen und mehr.
- Der Navigator stellt den Zustand und die Identität des Browsers (d. h. den User-Agent) dar, wie er im Web existiert. In JavaScript wird dies durch das [`Navigator`](/de/docs/Web/API/Navigator)-Objekt dargestellt. Sie können dieses Objekt verwenden, um Dinge wie die bevorzugte Sprache des Benutzers oder einen Medienstrom von der Webcam des Benutzers abzurufen.
- Das Dokument (dargestellt durch das DOM in Browsern) ist die eigentliche Seite, die in das Fenster geladen wird, und wird in JavaScript durch das [`Document`](/de/docs/Web/API/Document)-Objekt dargestellt. Sie können dieses Objekt verwenden, um Informationen über das HTML und CSS, aus dem das Dokument besteht, zurückzugeben und zu manipulieren, zum Beispiel eine Referenz zu einem Element im DOM zu erhalten, dessen Textinhalt zu ändern, neue Stile darauf anzuwenden, neue Elemente zu erstellen und sie dem aktuellen Element als Kind hinzuzufügen oder es sogar vollständig zu löschen.

In diesem Artikel konzentrieren wir uns hauptsächlich auf die Manipulation des Dokuments, aber wir zeigen auch einige andere nützliche Aspekte.

## Das Document Object Model

Das derzeit in jedem Ihrer Browsertabs geladene Dokument wird durch ein Document Object Model dargestellt. Dies ist eine "Baumstruktur"-Darstellung, die vom Browser erstellt wird und es ermöglicht, die HTML-Struktur durch Programmiersprachen leicht zugänglich zu machen – zum Beispiel verwendet der Browser es selbst, um jedem Element beim Rendern einer Seite Styling- und andere Informationen zuzuordnen, und Entwickler wie Sie können das DOM mit JavaScript manipulieren, nachdem die Seite gerendert wurde.

Wir haben eine einfache Beispielseite unter [dom-example.html](https://github.com/mdn/learning-area/blob/main/javascript/apis/document-manipulation/dom-example.html) erstellt ([sehen Sie sie sich auch live an](https://mdn.github.io/learning-area/javascript/apis/document-manipulation/dom-example.html)). Versuchen Sie, dies in Ihrem Browser zu öffnen — es ist eine sehr einfache Seite, die ein {{htmlelement("section")}}-Element enthält, in dem Sie ein Bild und einen Absatz mit einem Link finden können. Der HTML-Quellcode sieht folgendermaßen aus:

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

![Baumstruktur-Darstellung des Document Object Model: Der oberste Knoten ist der Doktyp und HTML-Element. Die Kindknoten des HTML umfassen head und body. Jedes Kindelement ist ein Zweig. Auch sämtlicher Text, sogar Leerraum, wird ebenfalls angezeigt.](dom-screenshot.png)

> [!NOTE]
> Dieses DOM-Baumschaubild wurde mit Ian Hicksons [Live DOM viewer](https://software.hixie.ch/utilities/js/live-dom-viewer/) erstellt.

Jeder Eintrag im Baum wird als **Knoten** bezeichnet. Sie können im oben stehenden Diagramm sehen, dass einige Knoten Elemente darstellen (identifiziert als `HTML`, `HEAD`, `META` und so weiter) und andere Text (identifiziert als `#text`). Es gibt [andere Arten von Knoten](/de/docs/Web/API/Node/nodeType), aber dies sind die Haupttypen, auf die Sie stoßen werden.

Knoten werden auch nach ihrer Position im Baum relativ zu anderen Knoten referenziert:

- **Stammknoten**: Der oberste Knoten im Baum, der im Fall von HTML immer der `HTML`-Knoten ist (andere Markup-Vokabulare wie SVG und benutzerdefiniertes XML haben andere Stammknoten).
- **Kinderknoten**: Ein Knoten, der _direkt_ innerhalb eines anderen Knotens liegt. Zum Beispiel ist `IMG` ein Kind von `SECTION` im obigen Beispiel.
- **Nachfahre-Knoten**: Ein Knoten, der _irgendwo_ innerhalb eines anderen Knotens liegt. Zum Beispiel ist `IMG` ein Kind von `SECTION` im obigen Beispiel, und es ist auch ein Nachfahre. `IMG` ist kein Kind von `BODY`, da es zwei Ebenen darunter im Baum liegt, aber es ist ein Nachfahre von `BODY`.
- **Elternknoten**: Ein Knoten, der einen anderen Knoten in sich hat. Zum Beispiel ist `BODY` der Elternknoten von `SECTION` im obigen Beispiel.
- **Geschwisterknoten**: Knoten, die sich auf der gleichen Ebene im DOM-Baum befinden. Zum Beispiel sind `IMG` und `P` Geschwister im obigen Beispiel.

Es ist nützlich, sich mit dieser Terminologie vertraut zu machen, bevor Sie mit dem DOM arbeiten, da eine Reihe der Codebegriffe, auf die Sie stoßen, sie verwenden. Möglicherweise sind Sie auch darauf gestoßen, wenn Sie CSS studiert haben (z. B. Nachfahren-Selektor, Kind-Selektor).

## Aktives Lernen: Grundlegende DOM-Manipulation

Um mit der DOM-Manipulation zu beginnen, starten wir mit einem praktischen Beispiel.

1. Nehmen Sie eine lokale Kopie der [dom-example.html-Seite](https://github.com/mdn/learning-area/blob/main/javascript/apis/document-manipulation/dom-example.html) und des [Bildes](https://github.com/mdn/learning-area/blob/main/javascript/apis/document-manipulation/dinosaur.png), das dazu gehört.
2. Fügen Sie ein `<script></script>`-Element direkt über dem schließenden `</body>`-Tag ein.
3. Um ein Element innerhalb des DOM zu manipulieren, müssen Sie es zuerst auswählen und eine Referenz darauf in einer Variablen speichern. Fügen Sie in Ihrem Skriptelement die folgende Zeile hinzu:

   ```js
   const link = document.querySelector("a");
   ```

4. Nun, da wir die Elementreferenz in einer Variablen gespeichert haben, können wir beginnen, es mithilfe der für es verfügbaren Eigenschaften und Methoden zu manipulieren (diese sind auf Schnittstellen wie [`HTMLAnchorElement`](/de/docs/Web/API/HTMLAnchorElement) im Fall eines {{htmlelement("a")}}-Elements definiert, auf der allgemeineren Elternschnittstelle [`HTMLElement`](/de/docs/Web/API/HTMLElement) und [`Node`](/de/docs/Web/API/Node) — die alle Knoten in einem DOM darstellt). Ändern wir zunächst den Text im Link, indem wir den Wert der [`Node.textContent`](/de/docs/Web/API/Node/textContent)-Eigenschaft aktualisieren. Fügen Sie die folgende Zeile unter der vorherigen hinzu:

   ```js
   link.textContent = "Mozilla Developer Network";
   ```

5. Wir sollten auch die URL ändern, auf die der Link verweist, damit er nicht an die falsche Stelle geht, wenn er angeklickt wird. Fügen Sie die folgende Zeile hinzu, wieder am Ende:

   ```js
   link.href = "https://developer.mozilla.org";
   ```

Beachten Sie, dass es, wie bei vielen Dingen in JavaScript, viele Möglichkeiten gibt, ein Element auszuwählen und eine Referenz darauf in einer Variablen zu speichern. [`Document.querySelector()`](/de/docs/Web/API/Document/querySelector) ist der empfohlene moderne Ansatz. Es ist praktisch, weil es Ihnen erlaubt, Elemente mit CSS-Selektoren auszuwählen. Der obige `querySelector()`-Aufruf wählt das erste {{htmlelement("a")}}-Element, das im Dokument erscheint. Wenn Sie mehrere Elemente auswählen und mit ihnen arbeiten möchten, können Sie [`Document.querySelectorAll()`](/de/docs/Web/API/Document/querySelectorAll) verwenden, das alle Elemente im Dokument auswählt, die mit dem Selektor übereinstimmen, und Referenzen darauf in einem [array](/de/docs/Learn/JavaScript/First_steps/Arrays)-ähnlichen Objekt namens [`NodeList`](/de/docs/Web/API/NodeList) speichert.

Es gibt ältere Methoden, um Elementreferenzen zu erhalten, wie zum Beispiel:

- [`Document.getElementById()`](/de/docs/Web/API/Document/getElementById), das ein Element mit einem bestimmten `id`-Attributwert auswählt, z. B. `<p id="myId">Mein Absatz</p>`. Die ID wird der Funktion als Parameter übergeben, d. h. `const elementRef = document.getElementById('myId')`.
- [`Document.getElementsByTagName()`](/de/docs/Web/API/Document/getElementsByTagName), das ein arrayähnliches Objekt zurückgibt, das alle Elemente auf der Seite eines bestimmten Typs enthält, beispielsweise `<p>`s, `<a>`s usw. Der Elementtyp wird als Parameter der Funktion übergeben, d. h. `const elementRefArray = document.getElementsByTagName('p')`.

Diese beiden Methoden funktionieren in älteren Browsern besser als die modernen Methoden wie `querySelector()`, sind jedoch nicht so praktisch. Schauen Sie sich an, welche anderen Sie finden können!

### Erstellen und Platzieren neuer Knoten

Das Obige hat Ihnen einen kleinen Vorgeschmack darauf gegeben, was Sie tun können, aber lassen Sie uns weitergehen und sehen, wie wir neue Elemente erstellen können.

1. Zurück zu unserem aktuellen Beispiel, beginnen wir damit, eine Referenz zu unserem {{htmlelement("section")}}-Element zu ergreifen — fügen Sie den folgenden Code am Ende Ihres bestehenden Skripts hinzu (machen Sie dasselbe mit den anderen Zeilen):

   ```js
   const sect = document.querySelector("section");
   ```

2. Nun erstellen wir einen neuen Absatz mit [`Document.createElement()`](/de/docs/Web/API/Document/createElement) und geben ihm einen Textinhalt auf die gleiche Weise wie zuvor:

   ```js
   const para = document.createElement("p");
   para.textContent = "We hope you enjoyed the ride.";
   ```

3. Sie können den neuen Absatz nun mit [`Node.appendChild()`](/de/docs/Web/API/Node/appendChild) am Ende der Sektion anhängen:

   ```js
   sect.appendChild(para);
   ```

4. Schließlich für diesen Teil, fügen wir dem Absatz, in dem der Link sitzt, einen Textknoten hinzu, um den Satz schön abzurunden. Zuerst erstellen wir den Textknoten mit [`Document.createTextNode()`](/de/docs/Web/API/Document/createTextNode):

   ```js
   const text = document.createTextNode(
     " — the premier source for web development knowledge.",
   );
   ```

5. Jetzt holen wir eine Referenz zum Absatz, in dem der Link sitzt, und hängen den Textknoten daran an:

   ```js
   const linkPara = document.querySelector("p");
   linkPara.appendChild(text);
   ```

Das ist das meiste, was Sie für das Hinzufügen von Knoten zum DOM benötigen – Sie werden diese Methoden häufig verwenden, wenn Sie dynamische Schnittstellen erstellen (wir werden uns später einige Beispiele ansehen).

### Elemente bewegen und entfernen

Es kann vorkommen, dass Sie Knoten verschieben oder sie ganz aus dem DOM löschen möchten. Das ist durchaus möglich.

Wenn wir den Absatz mit dem Link darin an das Ende des Abschnitts verschieben wollten, könnten wir das tun:

```js
sect.appendChild(linkPara);
```

Dies verschiebt den Absatz nach unten zum Ende des Abschnitts. Sie könnten gedacht haben, dass es eine zweite Kopie davon machen würde, aber das ist nicht der Fall — `linkPara` ist eine Referenz zur einen und einzigen Kopie dieses Absatzes. Wenn Sie eine Kopie machen und diese ebenfalls hinzufügen möchten, müssten Sie stattdessen [`Node.cloneNode()`](/de/docs/Web/API/Node/cloneNode) verwenden.

Das Entfernen eines Knotens ist ebenfalls ziemlich einfach, zumindest wenn Sie eine Referenz auf den zu entfernenden Knoten und seinen Elternknoten haben. In unserem aktuellen Fall verwenden wir einfach [`Node.removeChild()`](/de/docs/Web/API/Node/removeChild), so:

```js
sect.removeChild(linkPara);
```

Wenn Sie einen Knoten nur basierend auf einer Referenz auf sich selbst entfernen möchten, was ziemlich häufig ist, können Sie [`Element.remove()`](/de/docs/Web/API/Element/remove) verwenden:

```js
linkPara.remove();
```

Diese Methode wird in älteren Browsern nicht unterstützt. Sie haben keine Methode, um einem Knoten zu sagen, er solle sich selbst entfernen, also müssten Sie Folgendes tun:

```js
linkPara.parentNode.removeChild(linkPara);
```

Probieren Sie aus, diese Zeilen zu Ihrem Code hinzuzufügen.

### Manipulation von Stilen

Es ist möglich, CSS-Stile auf verschiedene Weise über JavaScript zu manipulieren.

Zunächst können Sie eine Liste aller Stile, die einem Dokument angehängt sind, mithilfe von [`Document.stylesheets`](/de/docs/Web/API/Document/stylesheets) abrufen, die ein arrayähnliches Objekt mit [`CSSStyleSheet`](/de/docs/Web/API/CSSStyleSheet)-Objekten zurückgibt. Sie können dann Stile hinzufügen/entfernen, wie gewünscht. Wir werden auf diese Funktionen jedoch nicht näher eingehen, da sie eine etwas archaische und schwierige Möglichkeit darstellen, Stile zu manipulieren. Es gibt viel einfachere Wege.

Der erste Weg ist das Hinzufügen von Inline-Stilen direkt zu den Elementen, die Sie dynamisch stylen möchten. Dies geschieht mit der [`HTMLElement.style`](/de/docs/Web/API/HTMLElement/style)-Eigenschaft, die Inline-Stilinformationsdaten für jedes Element im Dokument enthält. Sie können die Eigenschaften dieses Objekts festlegen, um Elementstile direkt zu aktualisieren.

1. Fügen Sie zum Beispiel diese Zeilen zu unserem laufenden Beispiel hinzu:

   ```js
   para.style.color = "white";
   para.style.backgroundColor = "black";
   para.style.padding = "10px";
   para.style.width = "250px";
   para.style.textAlign = "center";
   ```

2. Laden Sie die Seite neu, und Sie werden sehen, dass die Stile auf den Absatz angewendet wurden. Wenn Sie sich diesen Absatz in Ihrem Browser über den [Page Inspector/DOM inspector](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/index.html) ansehen, können Sie sehen, dass diese Zeilen tatsächlich Inline-Stile auf das Dokument hinzufügen:

   ```html
   <p
     style="color: white; background-color: black; padding: 10px; width: 250px; text-align: center;">
     We hope you enjoyed the ride.
   </p>
   ```

> [!NOTE]
> Beachten Sie, dass die JavaScript-Versionen der CSS-Stile im {{Glossary("camel_case", "Lower Camel Case")}} geschrieben sind, während die CSS-Versionen im {{Glossary("kebab_case", "Kebab-Case")}} ({{Glossary("kebab_case", "kebab-case")}}) geschrieben sind (z. B. `backgroundColor` gegenüber `background-color`). Stellen Sie sicher, dass Sie diese nicht verwechseln, andernfalls funktioniert es nicht.

Es gibt eine weitere gebräuchliche Methode, um Stile dynamisch zu manipulieren, die wir jetzt betrachten werden.

1. Löschen Sie die vorherigen fünf Zeilen, die Sie zum JavaScript hinzugefügt haben.
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

3. Wenden wir uns nun einer sehr nützlichen Methode für die allgemeine HTML-Manipulation zu — [`Element.setAttribute()`](/de/docs/Web/API/Element/setAttribute) — diese nimmt zwei Argumente entgegen, das Attribut, das Sie auf dem Element setzen möchten, und den Wert, den Sie ihm zuweisen möchten. In diesem Fall werden wir der Klasse `highlight` auf unseren Absatz setzen:

   ```js
   para.setAttribute("class", "highlight");
   ```

4. Aktualisieren Sie Ihre Seite, und Sie werden keine Änderung sehen — das CSS ist immer noch auf den Absatz angewendet, aber diesmal, indem ihm eine Klasse zugewiesen wird, die von unserer CSS-Regel ausgewählt wird, nicht durch Inline-CSS-Stile.

Welche Methode Sie wählen, bleibt Ihnen überlassen; beide haben ihre Vor- und Nachteile. Die erste Methode erfordert weniger Einrichtung und ist gut für einfache Anwendungen geeignet, während die zweite Methode puristischer ist (kein Mischen von CSS und JavaScript, keine Inline-Stile, die als schlechte Praxis angesehen werden). Wenn Sie anfangen, größere und komplexere Apps zu entwickeln, werden Sie wahrscheinlich die zweite Methode häufiger verwenden, aber es liegt wirklich bei Ihnen.

An diesem Punkt haben wir noch nichts Nützliches gemacht! Es macht keinen Sinn, statische Inhalte mit JavaScript zu erstellen — Sie könnten sie ebenso gut in Ihr HTML schreiben und kein JavaScript verwenden. Es ist komplexer als HTML, und die Erstellung Ihres Inhalts mit JavaScript bringt auch andere Probleme mit sich (wie das Nichtlesbarsein durch Suchmaschinen).

Im nächsten Abschnitt werden wir einen praktischeren Gebrauch von DOM-APIs betrachten.

> [!NOTE]
> Sie können unsere [fertige Version des dom-example.html](https://github.com/mdn/learning-area/blob/main/javascript/apis/document-manipulation/dom-example-manipulated.html)-Demos auf GitHub finden ([sehen Sie sie sich auch live an](https://mdn.github.io/learning-area/javascript/apis/document-manipulation/dom-example-manipulated.html)).

## Aktives Lernen: Eine dynamische Einkaufsliste

In dieser Herausforderung möchten wir ein einfaches Einkaufsliste-Beispiel erstellen, das Ihnen erlaubt, Elemente dynamisch zur Liste hinzuzufügen, indem Sie eine Eingabe und einen Button verwenden. Wenn Sie ein Element in die Eingabe hinzufügen und den Button drücken:

- Soll das Element in der Liste erscheinen.
- Soll jedem Element ein Button gegeben werden, der gedrückt werden kann, um dieses Element von der Liste zu löschen.
- Soll die Eingabe geleert und bereit für den nächsten Eintrag fokussiert werden.

Das fertige Demo wird etwa so aussehen:

![Demo-Layout einer Einkaufsliste. Ein 'meine Einkaufsliste'-Header gefolgt von 'Geben Sie einen neuen Artikel ein' mit einem Eingabefeld und 'Artikel hinzufügen' Button. Die Liste der bereits hinzugefügten Artikel befindet sich unten, jeweils mit einem entsprechenden Löschen-Button.](shopping-list.png)

Um die Übung abzuschließen, folgen Sie den unten stehenden Schritten und stellen Sie sicher, dass sich die Liste wie beschrieben verhält.

1. Laden Sie zunächst eine Kopie unserer [shopping-list.html](https://github.com/mdn/learning-area/blob/main/javascript/apis/document-manipulation/shopping-list.html)-Startdatei herunter und machen Sie eine Kopie davon. Sie werden sehen, dass es etwas minimales CSS, ein div mit einem Label, einer Eingabe und einem Button, sowie eine leere Liste und ein {{htmlelement("script")}}-Element enthält. Sie werden alle Ihre Ergänzungen innerhalb des Skripts vornehmen.
2. Erstellen Sie drei Variablen, die Referenzen auf die Liste ({{htmlelement("ul")}}), {{htmlelement("input")}} und {{htmlelement("button")}}-Elemente speichern.
3. Erstellen Sie eine [Funktion](/de/docs/Learn/JavaScript/Building_blocks/Functions), die als Reaktion auf das Klicken des Buttons ausgeführt wird.
4. Speichern Sie im Funktionskörper zunächst den aktuellen [Wert](/de/docs/Web/API/HTMLInputElement/value) des Eingabeelements in einer Variablen.
5. Leeren Sie als Nächstes das Eingabeelement, indem Sie seinen Wert auf einen leeren String setzen — `''`.
6. Erstellen Sie drei neue Elemente — ein Listenelement ({{htmlelement('li')}}), {{htmlelement('span')}} und {{htmlelement('button')}}, und speichern Sie sie in Variablen.
7. Hängen Sie das span und den Button als Kinder des Listenelements an.
8. Setzen Sie den Textinhalt des span auf den zuvor gespeicherten Wert des Eingabeelements und den Textinhalt des Buttons auf 'Löschen'.
9. Hängen Sie das Listenelement als Kind der Liste an.
10. Bringen Sie einen Ereignis-Handler am Lösch-Button an, sodass beim Klicken das gesamte Listenelement (`<li>...</li>`) gelöscht wird.
11. Verwenden Sie schließlich die [`focus()`](/de/docs/Web/API/HTMLElement/focus)-Methode, um das Eingabeelement zu fokussieren und bereit für die Eingabe des nächsten Elements auf der Einkaufsliste zu machen.

> [!NOTE]
> Wenn Sie wirklich nicht weiterkommen, schauen Sie sich unsere [fertige Einkaufsliste](https://github.com/mdn/learning-area/blob/main/javascript/apis/document-manipulation/shopping-list-finished.html) an ([sehen Sie sich auch die laufende Version an](https://mdn.github.io/learning-area/javascript/apis/document-manipulation/shopping-list-finished.html)).

## Zusammenfassung

Wir haben das Ende unserer Untersuchung der Dokument- und DOM-Manipulation erreicht. An diesem Punkt sollten Sie verstehen, was die wichtigen Teile eines Webbrowsers im Hinblick auf die Steuerung von Dokumenten und anderen Aspekten des Web-Erlebnisses eines Benutzers sind. Am wichtigsten ist, dass Sie verstehen sollten, was das Document Object Model ist und wie Sie es manipulieren können, um nützliche Funktionalitäten zu schaffen.

## Siehe auch

Es gibt viele weitere Funktionen, mit denen Sie Ihre Dokumente manipulieren können. Schauen Sie sich einige unserer Referenzen an und entdecken Sie, was Sie finden können:

- [`Document`](/de/docs/Web/API/Document)
- [`Window`](/de/docs/Web/API/Window)
- [`Node`](/de/docs/Web/API/Node)
- [`HTMLElement`](/de/docs/Web/API/HTMLElement), [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement), [`HTMLImageElement`](/de/docs/Web/API/HTMLImageElement) usw.

(Siehe unseren [Web-API-Index](/de/docs/Web/API) für die vollständige Liste der auf MDN dokumentierten Web-APIs!)

{{PreviousMenuNext("Learn/JavaScript/Client-side_web_APIs/Introduction", "Learn/JavaScript/Client-side_web_APIs/Fetching_data", "Learn/JavaScript/Client-side_web_APIs")}}
