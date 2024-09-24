---
title: Manipulation von Dokumenten
slug: Learn/JavaScript/Client-side_web_APIs/Manipulating_documents
l10n:
  sourceCommit: bc0d0d1ef796435e969f6d65c7e5d3c08f4023aa
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/JavaScript/Client-side_web_APIs/Introduction", "Learn/JavaScript/Client-side_web_APIs/Fetching_data", "Learn/JavaScript/Client-side_web_APIs")}}

Beim Schreiben von Webseiten und Apps ist eine der häufigsten Aufgaben, die Struktur des Dokuments auf gewisse Weise zu manipulieren. Dies wird in der Regel durch das Document Object Model (DOM) erreicht, eine Sammlung von APIs zur Steuerung von HTML- und Stilinformationen, die intensiv das {{domxref("Document")}}-Objekt nutzen. In diesem Artikel werden wir uns im Detail ansehen, wie das DOM verwendet wird, zusammen mit einigen anderen interessanten APIs, die Ihre Umgebung auf interessante Weise verändern können.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Grundkenntnisse in HTML, CSS und
        JavaScript — einschließlich JavaScript-Objekte.
      </td>
    </tr>
    <tr>
      <th scope="row">Zielsetzung:</th>
      <td>
        Die Benutzerfreundlichkeit mit den Kern-DOM-APIs sowie den anderen APIs, die häufig mit DOM- und Dokumentenmanipulation verbunden sind, zu erlangen.
      </td>
    </tr>
  </tbody>
</table>

## Die wichtigen Teile eines Webbrowsers

Webbrowser sind sehr komplexe Softwareteile mit vielen beweglichen Teilen, von denen viele nicht von einem Webentwickler mit JavaScript kontrolliert oder manipuliert werden können. Sie könnten denken, dass solche Einschränkungen schlecht sind, aber Browser sind aus guten Gründen gesperrt, die hauptsächlich die Sicherheit betreffen. Stellen Sie sich vor, eine Webseite könnte auf Ihre gespeicherten Passwörter oder andere sensible Informationen zugreifen und sich in Webseiten einloggen, als wären Sie es?

Trotz der Einschränkungen geben uns Web-APIs immer noch Zugriff auf viele Funktionalitäten, die es uns ermöglichen, eine Vielzahl von Aufgaben mit Webseiten zu erledigen. Es gibt einige offensichtliche Bestandteile, auf die Sie regelmäßig in Ihrem Code verweisen werden — betrachten Sie das folgende Diagramm, das die Hauptbestandteile eines Browsers darstellt, die direkt am Ansehen von Webseiten beteiligt sind:

![Wichtige Teile eines Webbrowsers; das Dokument ist die Webseite. Das Fenster beinhaltet das gesamte Dokument und auch den Tab. Der Navigator ist der Browser, der das Fenster (das das Dokument einschließt) und alle anderen Fenster umfasst.](document-window-navigator.png)

- Das Fenster ist der Browser-Tab, in den eine Webseite geladen wird; dies wird in JavaScript durch das {{domxref("Window")}}-Objekt dargestellt. Mit Methoden, die auf diesem Objekt verfügbar sind, können Sie Dinge tun, wie die Größe des Fensters zurückzugeben (siehe {{domxref("Window.innerWidth")}} und {{domxref("Window.innerHeight")}}), das im Fenster geladene Dokument zu manipulieren, Daten, die spezifisch für dieses Dokument sind, auf der Client-Seite zu speichern (zum Beispiel unter Verwendung einer lokalen Datenbank oder eines anderen Speichermechanismus), einen [Ereignis-Handler](/de/docs/Learn/JavaScript/Building_blocks/Events) an das aktuelle Fenster anzuhängen und mehr.
- Der Navigator stellt den Zustand und die Identität des Browsers (d.h. des User-Agents) dar, wie er im Web existiert. In JavaScript wird dies durch das {{domxref("Navigator")}}-Objekt dargestellt. Sie können dieses Objekt nutzen, um Dinge wie die bevorzugte Sprache des Benutzers oder einen Medienstream von der Webcam des Benutzers abzurufen.
- Das Dokument (dargestellt durch das DOM in Browsern) ist die eigentliche Seite, die in das Fenster geladen wird und wird in JavaScript durch das {{domxref("Document")}}-Objekt dargestellt. Sie können dieses Objekt verwenden, um Informationen über das HTML und CSS, das das Dokument umfasst, zurückzugeben und zu manipulieren, zum Beispiel eine Referenz zu einem Element im DOM zu erhalten, seinen Textinhalt zu ändern, neue Stile darauf anzuwenden, neue Elemente zu erstellen und als Kinder an das aktuelle Element anzuhängen oder es sogar ganz zu löschen.

In diesem Artikel konzentrieren wir uns hauptsächlich auf die Manipulation des Dokuments, aber wir zeigen Ihnen auch einige andere nützliche Aspekte.

## Das Document Object Model

Das Dokument, das derzeit in jedem Ihrer Browser-Tabs geladen ist, wird durch ein Document Object Model dargestellt. Dies ist eine "Baumstruktur"-Darstellung, die vom Browser erstellt wird und es ermöglicht, die HTML-Struktur leicht über Programmiersprachen zuzugreifen — zum Beispiel verwendet der Browser sie selbst, um Stile und andere Informationen auf die richtigen Elemente anzuwenden, während er eine Seite rendert, und Entwickler wie Sie können das DOM mit JavaScript nach dem Rendern der Seite manipulieren.

Wir haben eine einfache Beispielseite unter [dom-example.html](https://github.com/mdn/learning-area/blob/main/javascript/apis/document-manipulation/dom-example.html) erstellt ([sehen Sie es auch live](https://mdn.github.io/learning-area/javascript/apis/document-manipulation/dom-example.html)). Versuchen Sie, diese in Ihrem Browser zu öffnen — es ist eine sehr einfache Seite mit einem {{htmlelement("section")}}-Element, innerhalb dessen Sie ein Bild und einen Absatz mit einem Link finden. Der HTML-Quellcode sieht folgendermaßen aus:

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

Das DOM hingegen sieht so aus:

![Baumstruktur-Darstellung des Document Object Model: Der oberste Knoten ist der Doctype und HTML-Element. Kindknoten des HTML umfassen Kopf und Körper. Jedes Kindelement ist ein Zweig. Auch aller Text, sogar Leerraum, wird angezeigt.](dom-screenshot.png)

> [!NOTE]
> Dieses DOM-Baumbaumdiagramm wurde mit Ian Hicksons [Live DOM viewer](https://software.hixie.ch/utilities/js/live-dom-viewer/) erstellt.

Jeder Eintrag im Baum wird als **Knoten** bezeichnet. Sie können im obigen Diagramm sehen, dass einige Knoten Elemente darstellen (erkennbar an `HTML`, `HEAD`, `META` usw.) und andere Text repräsentieren (gekennzeichnet als `#text`). Es gibt [auch andere Knotentypen](/de/docs/Web/API/Node/nodeType), aber dies sind die Haupttypen, denen Sie begegnen werden.

Knoten werden auch durch ihre Position im Baum im Verhältnis zu anderen Knoten bezeichnet:

- **Wurzelknoten**: Der oberste Knoten im Baum, der im Fall von HTML immer der `HTML`-Knoten ist (andere Markup-Vokabulare wie SVG und benutzerdefinierte XML haben verschiedene Wurzelelemente).
- **Kindknoten**: Ein Knoten _direkt_ innerhalb eines anderen Knotens. Zum Beispiel ist `IMG` ein Kind von `SECTION` im obigen Beispiel.
- **Nachfolgeknoten**: Ein Knoten _irgendwo_ innerhalb eines anderen Knotens. Zum Beispiel ist `IMG` ein Kind von `SECTION` im obigen Beispiel und es ist auch ein Nachfolger. `IMG` ist kein Kind von `BODY`, da es zwei Ebenen unter ihm im Baum ist, aber es ist ein Nachfolger von `BODY`.
- **Elternknoten**: Ein Knoten, der einen anderen Knoten in sich hat. Zum Beispiel ist `BODY` der Elternknoten von `SECTION` im obigen Beispiel.
- **Geschwisterknoten**: Knoten, die sich auf derselben Ebene im DOM-Baum befinden. Zum Beispiel sind `IMG` und `P` Geschwister im obigen Beispiel.

Es ist nützlich, sich mit diesem Vokabular vertraut zu machen, bevor Sie mit dem DOM arbeiten, da eine Reihe von Code-Begriffen, denen Sie begegnen werden, sie verwenden. Möglicherweise sind Sie ihnen auch begegnet, wenn Sie CSS studiert haben (zum Beispiel Nachfolger-Selektor, Kind-Selektor).

## Aktives Lernen: Grundlagen der DOM-Manipulation

Um mit dem Lernen über DOM-Manipulation zu beginnen, beginnen wir mit einem praktischen Beispiel.

1. Nehmen Sie eine lokale Kopie der [dom-example.html Seite](https://github.com/mdn/learning-area/blob/main/javascript/apis/document-manipulation/dom-example.html) und das [Bild](https://github.com/mdn/learning-area/blob/main/javascript/apis/document-manipulation/dinosaur.png), das dazu gehört.
2. Fügen Sie ein `<script></script>`-Element direkt über dem abschließenden `</body>`-Tag hinzu.
3. Um ein Element innerhalb des DOM zu manipulieren, müssen Sie es zuerst auswählen und eine Referenz darauf in einer Variablen speichern. Fügen Sie innerhalb Ihres Skriptelements die folgende Zeile hinzu:

   ```js
   const link = document.querySelector("a");
   ```

4. Jetzt, da wir die Elementreferenz in einer Variablen gespeichert haben, können wir beginnen, sie mit den verfügbaren Eigenschaften und Methoden zu manipulieren (diese sind auf Schnittstellen wie {{domxref("HTMLAnchorElement")}} im Fall des {{htmlelement("a")}}-Elements, seiner allgemeineren Elternschnittstelle {{domxref("HTMLElement")}} und {{domxref("Node")}} — die alle Knoten in einem DOM darstellt — definiert). Zuerst ändern wir den Text im Link, indem wir den Wert der {{domxref("Node.textContent")}}-Eigenschaft aktualisieren. Fügen Sie die folgende Zeile unter der vorherigen hinzu:

   ```js
   link.textContent = "Mozilla Developer Network";
   ```

5. Wir sollten auch die URL ändern, auf die der Link zeigt, damit er nicht an den falschen Ort führt, wenn darauf geklickt wird. Fügen Sie die folgende Zeile hinzu, ebenfalls am Ende:

   ```js
   link.href = "https://developer.mozilla.org";
   ```

Beachten Sie, dass es, wie bei vielen Dingen in JavaScript, viele Möglichkeiten gibt, ein Element auszuwählen und eine Referenz darauf in einer Variablen zu speichern. {{domxref("Document.querySelector()")}} ist der empfohlene moderne Ansatz. Es ist bequem, weil Sie damit Elemente mit CSS-Selektoren auswählen können. Der obige `querySelector()`-Aufruf entspricht dem ersten {{htmlelement("a")}}-Element, das im Dokument erscheint. Wenn Sie mehrere Elemente abgleichen und Dinge damit tun wollten, könnten Sie {{domxref("Document.querySelectorAll()")}} verwenden, das jedes Element im Dokument erfasst, das mit dem Selektor übereinstimmt, und Referenzen darauf in einem [arrayartigen](/de/docs/Learn/JavaScript/First_steps/Arrays) Objekt namens {{domxref("NodeList")}} speichert.

Es gibt ältere Methoden, um Elementreferenzen zu erfassen, wie:

- {{domxref("Document.getElementById()")}}, welches ein Element mit einem bestimmten `id`-Attributwert auswählt, z.B. `<p id="myId">Mein Absatz</p>`. Die ID wird als Parameter an die Funktion übergeben, d.h. `const elementRef = document.getElementById('myId')`.
- {{domxref("Document.getElementsByTagName()")}}, das ein arrayartiges Objekt zurückgibt, das alle Elemente der Seite eines bestimmten Typs enthält, zum Beispiel `<p>`s, `<a>`s, usw. Der Elementtyp wird als Parameter an die Funktion übergeben, d.h. `const elementRefArray = document.getElementsByTagName('p')`.

Diese beiden funktionieren besser in älteren Browsern als die modernen Methoden wie `querySelector()`, sind aber nicht so bequem. Schauen Sie, welche anderen Sie finden können!

### Erstellen und Platzieren neuer Knoten

Das obige hat Ihnen einen kleinen Vorgeschmack darauf gegeben, was Sie tun können, aber lassen Sie uns weiter gehen und sehen, wie wir neue Elemente erstellen können.

1. Gehen wir zurück zu unserem aktuellen Beispiel und holen wir uns eine Referenz zu unserem {{htmlelement("section")}}-Element — fügen Sie den folgenden Code am Ende Ihres vorhandenen Skripts hinzu (tun Sie dasselbe mit den anderen Zeilen):

   ```js
   const sect = document.querySelector("section");
   ```

2. Jetzt erstellen wir einen neuen Absatz mit {{domxref("Document.createElement()")}} und geben ihm einigen Textinhalt, wie zuvor:

   ```js
   const para = document.createElement("p");
   para.textContent = "Wir hoffen, Sie haben die Fahrt genossen.";
   ```

3. Sie können den neuen Absatz jetzt am Ende der Sektion mit {{domxref("Node.appendChild()")}} anhängen:

   ```js
   sect.appendChild(para);
   ```

4. Schließlich fügen wir dem Absatz, in dem sich der Link befindet, einen Textknoten hinzu, um den Satz angemessen abzurunden. Zuerst erstellen wir den Textknoten mithilfe von {{domxref("Document.createTextNode()")}}:

   ```js
   const text = document.createTextNode(
     " — die führende Quelle für Webentwicklungswissen.",
   );
   ```

5. Nun holen wir uns eine Referenz zu dem Absatz, in dem sich der Link befindet, und fügen den Textknoten hinzu:

   ```js
   const linkPara = document.querySelector("p");
   linkPara.appendChild(text);
   ```

Das ist das meiste, was Sie zum Hinzufügen von Knoten zum DOM brauchen — Sie werden viel Gebrauch von diesen Methoden machen, wenn Sie dynamische Schnittstellen erstellen (wir werden später einige Beispiele ansehen).

### Verschieben und Entfernen von Elementen

Es kann vorkommen, dass Sie Knoten verschieben oder sie ganz aus dem DOM entfernen möchten. Dies ist durchaus möglich.

Wenn wir den Absatz mit dem Link darin an das Ende der Sektion verschieben möchten, könnten wir dies tun:

```js
sect.appendChild(linkPara);
```

Dies verschiebt den Absatz an das Ende der Sektion. Sie könnten denken, es würde eine zweite Kopie davon erstellen, aber das ist nicht der Fall — `linkPara` ist eine Referenz auf die eine und einzige Kopie dieses Absatzes. Wenn Sie eine Kopie erstellen und diese auch hinzufügen wollten, müssten Sie stattdessen {{domxref("Node.cloneNode()")}} verwenden.

Das Entfernen eines Knotens ist auch ziemlich einfach, zumindest wenn Sie eine Referenz auf den zu entfernenden Knoten und dessen Eltern haben. In unserem aktuellen Fall verwenden wir einfach {{domxref("Node.removeChild()")}}, so:

```js
sect.removeChild(linkPara);
```

Wenn Sie einen Knoten nur mit einer Referenz auf sich selbst entfernen möchten, was ziemlich häufig ist, können Sie {{domxref("Element.remove()")}} verwenden:

```js
linkPara.remove();
```

Diese Methode wird in älteren Browsern nicht unterstützt. Sie haben keine Methode, einem Knoten zu sagen, er solle sich selbst entfernen, also müssten Sie Folgendes tun.

```js
linkPara.parentNode.removeChild(linkPara);
```

Versuchen Sie, die obigen Zeilen zu Ihrem Code hinzuzufügen.

### Manipulation von Stilen

Es ist möglich, CSS-Stile auf verschiedene Arten über JavaScript zu manipulieren.

Zu Beginn können Sie eine Liste aller Stylesheets, die einem Dokument beigefügt sind, mit {{domxref("Document.stylesheets")}} erhalten, das ein arrayartiges Objekt mit {{domxref("CSSStyleSheet")}}-Objekten zurückgibt. Sie können dann nach Belieben Stile hinzufügen/löschen. Wir werden jedoch nicht weiter auf diese Funktionen eingehen, da sie eine etwas veraltete und schwierige Art und Weise der Stil-Manipulation darstellen. Es gibt viel einfachere Wege.

Der erste Weg besteht darin, Inline-Stile direkt auf die Elemente anzuwenden, die Sie dynamisch gestalten möchten. Dies geschieht mit der {{domxref("HTMLElement.style")}}-Eigenschaft, die Inline-Stilinformationsdetails für jedes Element im Dokument enthält. Sie können Eigenschaften dieses Objekts setzen, um Elementstile direkt zu aktualisieren.

1. Versuchen Sie als Beispiel, diese Zeilen zu unserem laufenden Beispiel hinzuzufügen:

   ```js
   para.style.color = "white";
   para.style.backgroundColor = "black";
   para.style.padding = "10px";
   para.style.width = "250px";
   para.style.textAlign = "center";
   ```

2. Laden Sie die Seite neu und Sie werden sehen, dass die Stile auf den Absatz angewendet wurden. Wenn Sie diesen Absatz im [Seiteninspektor/DOM-Inspektor](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/index.html) Ihres Browsers ansehen, werden Sie sehen, dass diese Zeilen tatsächlich Inline-Stile zum Dokument hinzufügen:

   ```html
   <p
     style="color: white; background-color: black; padding: 10px; width: 250px; text-align: center;">
     Wir hoffen, Sie haben die Fahrt genossen.
   </p>
   ```

> [!NOTE]
> Beachten Sie, wie die JavaScript-Versionen der CSS-Stile in {{Glossary("camel_case", "lower camel case")}} geschrieben sind, während die CSS-Versionen mit Bindestrichen versehen sind ({{Glossary("kebab_case", "kebab-case")}}) (z.B. `backgroundColor` gegenüber `background-color`). Achten Sie darauf, diese nicht zu verwechseln, sonst funktioniert es nicht.

Es gibt eine weitere übliche Methode zur dynamischen Manipulation von Stilen auf Ihrem Dokument, die wir jetzt ansehen werden.

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

3. Jetzt wenden wir uns einer sehr nützlichen Methode zur allgemeinen HTML-Manipulation zu — {{domxref("Element.setAttribute()")}} — diese nimmt zwei Argumente, das Attribut, das Sie auf dem Element setzen möchten, und den Wert, den Sie darauf setzen möchten. In diesem Fall werden wir einen Klassennamen "highlight" auf unserem Absatz setzen:

   ```js
   para.setAttribute("class", "highlight");
   ```

4. Aktualisieren Sie Ihre Seite und Sie werden keine Veränderung sehen — das CSS wird immer noch auf den Absatz angewendet, diesmal jedoch durch das Zuweisen einer Klasse, die von unserer CSS-Regel ausgewählt wird und nicht als Inline-CSS-Stile.

Welche Methode Sie wählen, bleibt Ihnen überlassen; beide haben ihre Vor- und Nachteile. Die erste Methode erfordert weniger Vorbereitung und ist gut für einfache Anwendungen, während die zweite Methode reiner ist (kein Mischen von CSS und JavaScript, keine Inline-Stile, die als schlechte Praxis angesehen werden). Wenn Sie anfangen, größere und komplexere Apps zu erstellen, werden Sie wahrscheinlich häufiger die zweite Methode verwenden, aber das liegt wirklich bei Ihnen.

An diesem Punkt haben wir nichts wirklich Nützliches getan! Es besteht kein Sinn darin, mit JavaScript statische Inhalte zu erstellen — Sie könnten sie genauso gut direkt in Ihr HTML schreiben und JavaScript nicht verwenden. Es ist komplexer als HTML, und die Erstellung Ihres Inhalts mit JavaScript birgt auch andere Probleme (wie z.B. dass Suchmaschinen ihn nicht lesen können).

Im nächsten Abschnitt werden wir uns eine praktischere Verwendung von DOM-APIs ansehen.

> [!NOTE]
> Sie finden unsere [fertige Version des dom-example.html](https://github.com/mdn/learning-area/blob/main/javascript/apis/document-manipulation/dom-example-manipulated.html) Demos auf GitHub ([sehen Sie es auch live](https://mdn.github.io/learning-area/javascript/apis/document-manipulation/dom-example-manipulated.html)).

## Aktives Lernen: Eine dynamische Einkaufsliste

In dieser Herausforderung möchten wir ein einfaches Einkaufsliste-Beispiel erstellen, das es Ihnen ermöglicht, Elemente dynamisch zur Liste hinzuzufügen, indem Sie ein Formulareingabefeld und eine Schaltfläche verwenden. Wenn Sie ein Element in das Eingabefeld hinzufügen und die Schaltfläche drücken:

- Das Element sollte in der Liste erscheinen.
- Jedes Element sollte mit einer Schaltfläche versehen werden, die gedrückt werden kann, um das Element von der Liste zu löschen.
- Das Eingabefeld sollte geleert und fokussiert werden, damit Sie ein weiteres Element eingeben können.

Das fertige Demo wird ungefähr so aussehen:

![Demo-Layout einer Einkaufsliste. Eine Überschrift "meine Einkaufsliste" gefolgt von "Geben Sie ein neues Element ein" mit einem Eingabefeld und "Element hinzufügen"-Schaltfläche. Die bereits hinzugefügte Liste von Elementen ist darunter, jedes mit einer entsprechenden Löschen-Schaltfläche.](shopping-list.png)

Um die Übung abzuschließen, folgen Sie den unten stehenden Schritten und stellen Sie sicher, dass die Liste wie beschrieben funktioniert.

1. Laden Sie für den Anfang eine Kopie unserer [shopping-list.html](https://github.com/mdn/learning-area/blob/main/javascript/apis/document-manipulation/shopping-list.html) Startdatei herunter und erstellen Sie eine Kopie an einem Ort Ihrer Wahl. Sie werden feststellen, dass sie etwas CSS beinhaltet, ein div mit einem Label, einem Eingabefeld und einer Schaltfläche sowie eine leere Liste und ein {{htmlelement("script")}}-Element. Ihre gesamten Ergänzungen werden innerhalb des Skripts stehen.
2. Erstellen Sie drei Variablen, die Referenzen auf das Listenelement ({{htmlelement("ul")}}), das {{htmlelement("input")}} und das {{htmlelement("button")}} enthalten.
3. Erstellen Sie eine [Funktion](/de/docs/Learn/JavaScript/Building_blocks/Functions), die als Reaktion auf das Klicken der Schaltfläche läuft.
4. Speichern Sie zu Beginn im Funktionskörper den aktuellen [Wert](/de/docs/Web/API/HTMLInputElement/value) des Eingabeelements in einer Variablen.
5. Leeren Sie als nächstes das Eingabeelement, indem Sie seinen Wert auf einen leeren String setzen — `''`.
6. Erstellen Sie drei neue Elemente — ein Listenelement ({{htmlelement('li')}}), ein {{htmlelement('span')}} und ein {{htmlelement('button')}} — und speichern Sie sie in Variablen.
7. Hängen Sie das span und die Schaltfläche als Kinder an das Listenelement an.
8. Setzen Sie den Textinhalt des span auf den zuvor gespeicherten Wert des Eingabeelements und den Textinhalt der Schaltfläche auf 'Löschen'.
9. Hängen Sie das Listenelement als Kind an die Liste an.
10. Verbinden Sie einen Ereignis-Handler mit der Lösch-Schaltfläche, um das gesamte Listenelement (`<li>...</li>`) zu löschen, wenn darauf geklickt wird.
11. Verwenden Sie schließlich die [`focus()`](/de/docs/Web/API/HTMLElement/focus)-Methode, um das Eingabeelement für die Eingabe des nächsten Einkaufslistenelements zu fokussieren.

> [!NOTE]
> Wenn Sie wirklich stecken bleiben, schauen Sie sich unsere [fertige Einkaufsliste](https://github.com/mdn/learning-area/blob/main/javascript/apis/document-manipulation/shopping-list-finished.html) ([sehen Sie sie auch live](https://mdn.github.io/learning-area/javascript/apis/document-manipulation/shopping-list-finished.html)) an.

## Zusammenfassung

Wir haben das Ende unserer Studie über die Manipulation von Dokumenten und DOM erreicht. An diesem Punkt sollten Sie verstehen, was die wichtigen Teile eines Webbrowsers im Hinblick auf die Steuerung von Dokumenten und anderen Aspekten der Web-Erfahrung der Benutzer sind. Vor allem sollten Sie verstehen, was das Document Object Model ist und wie Sie es manipulieren können, um nützliche Funktionen zu erstellen.

## Siehe auch

Es gibt viele weitere Funktionen, die Sie zur Manipulation Ihrer Dokumente verwenden können. Schauen Sie sich einige unserer Referenzen an und entdecken Sie, was Sie finden können:

- {{domxref("Document")}}
- {{domxref("Window")}}
- {{domxref("Node")}}
- {{domxref("HTMLElement")}}, {{domxref("HTMLInputElement")}}, {{domxref("HTMLImageElement")}}, usw.

(Siehe unser [Web API-Index](/de/docs/Web/API) für die vollständige Liste der auf MDN dokumentierten Web-APIs!)

{{PreviousMenuNext("Learn/JavaScript/Client-side_web_APIs/Introduction", "Learn/JavaScript/Client-side_web_APIs/Fetching_data", "Learn/JavaScript/Client-side_web_APIs")}}
