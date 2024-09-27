---
title: Manipulating documents
slug: Learn/JavaScript/Client-side_web_APIs/Manipulating_documents
l10n:
  sourceCommit: bc0d0d1ef796435e969f6d65c7e5d3c08f4023aa
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/JavaScript/Client-side_web_APIs/Introduction", "Learn/JavaScript/Client-side_web_APIs/Fetching_data", "Learn/JavaScript/Client-side_web_APIs")}}

Wenn Sie Webseiten und Apps schreiben, gehört das Manipulieren der Dokumentstruktur in irgendeiner Weise zu den häufigsten Aufgaben. Dies wird in der Regel durch die Verwendung des Document Object Model (DOM) erreicht, einer Reihe von APIs zur Steuerung von HTML und Styling-Informationen, die stark vom [`Document`](/de/docs/Web/API/Document)-Objekt Gebrauch machen. In diesem Artikel werden wir uns eingehend damit befassen, wie man das DOM verwendet, zusammen mit einigen anderen interessanten APIs, die Ihre Umgebung auf interessante Weise verändern können.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Ein grundlegendes Verständnis von HTML, CSS und
        JavaScript – einschließlich JavaScript-Objekten.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Vertrautheit mit den Kern-DOM-APIs erlangen und den anderen APIs, die üblicherweise
        mit DOM- und Dokumentmanipulation in Verbindung stehen.
      </td>
    </tr>
  </tbody>
</table>

## Die wichtigen Teile eines Webbrowsers

Webbrowser sind sehr komplexe Softwarestücke mit vielen beweglichen Teilen, von denen viele nicht von einem Webentwickler mit JavaScript gesteuert oder manipuliert werden können. Sie könnten denken, dass solche Einschränkungen eine schlechte Sache sind, aber Browser sind aus guten Gründen gesperrt, hauptsächlich aus Sicherheitsgründen. Stellen Sie sich vor, eine Website könnte auf Ihre gespeicherten Passwörter oder andere sensible Informationen zugreifen und sich auf Websites einloggen, als ob sie Sie wären?

Trotz der Einschränkungen geben uns Web-APIs immer noch Zugriff auf viele Funktionen, die es uns ermöglichen, viele Dinge mit Webseiten zu tun. Es gibt ein paar wirklich offensichtliche Teile, auf die Sie regelmäßig in Ihrem Code verweisen – betrachten Sie das folgende Diagramm, das die Hauptteile eines Browsers darstellt, die direkt am Anzeigen von Webseiten beteiligt sind:

![Wichtige Teile eines Webbrowsers; das Dokument ist die Webseite. Das Fenster umfasst das gesamte Dokument und auch den Tab. Der Navigator ist der Browser, der das Fenster (das das Dokument umfasst) und alle anderen Fenster einschließt.](document-window-navigator.png)

- Das Fenster ist der Browsertab, in den eine Webseite geladen wird; dies wird in JavaScript durch das [`Window`](/de/docs/Web/API/Window)-Objekt dargestellt. Mit Methoden, die auf diesem Objekt verfügbar sind, können Sie Dinge wie die Größe des Fensters zurückgeben (siehe [`Window.innerWidth`](/de/docs/Web/API/Window/innerWidth) und [`Window.innerHeight`](/de/docs/Web/API/Window/innerHeight)), das in diesem Fenster geladene Dokument manipulieren, daten speziell für dieses Dokument auf der Client-Seite speichern (zum Beispiel mit einer lokalen Datenbank oder einem anderen Speichermechanismus), einen [Event-Handler](/de/docs/Learn/JavaScript/Building_blocks/Events) an das aktuelle Fenster anhängen und mehr.
- Der Navigator stellt den Zustand und die Identität des Browsers (d. h. den User-Agent) dar, wie er im Web existiert. In JavaScript wird dies durch das [`Navigator`](/de/docs/Web/API/Navigator)-Objekt dargestellt. Sie können dieses Objekt verwenden, um Dinge wie die bevorzugte Sprache des Benutzers, einen Medienstream von der Webcam des Benutzers usw. abzurufen.
- Das Dokument (in Browsern durch das DOM dargestellt) ist die tatsächliche Seite, die in das Fenster geladen wird, und wird in JavaScript durch das [`Document`](/de/docs/Web/API/Document)-Objekt dargestellt. Sie können dieses Objekt verwenden, um Informationen über das HTML und CSS, das das Dokument bildet, abzurufen und zu manipulieren, zum Beispiel eine Referenz zu einem Element im DOM bekommen, seinen Textinhalt ändern, neue Stile darauf anwenden, neue Elemente erstellen und diese als Kinder an das aktuelle Element anhängen oder sogar vollständig löschen.

In diesem Artikel konzentrieren wir uns hauptsächlich auf die Manipulation des Dokuments, aber wir zeigen auch ein paar andere nützliche Dinge.

## Das Document Object Model

Das aktuell in jedem Ihrer Browser-Tabs geladene Dokument wird durch ein Document Object Model dargestellt. Dies ist eine "Baumstruktur"-Darstellung, die vom Browser erstellt wird und es ermöglicht, die HTML-Struktur einfach von Programmiersprachen zuzugreifen – zum Beispiel verwendet der Browser es selbst, um Stile und andere Informationen auf die richtigen Elemente anzuwenden, während er eine Seite rendert, und Entwickler wie Sie können das DOM mit JavaScript manipulieren, nachdem die Seite gerendert wurde.

Wir haben eine einfache Beispielseite unter [dom-example.html](https://github.com/mdn/learning-area/blob/main/javascript/apis/document-manipulation/dom-example.html) erstellt ([siehe es sich auch live an](https://mdn.github.io/learning-area/javascript/apis/document-manipulation/dom-example.html)). Versuchen Sie, dies in Ihrem Browser zu öffnen – es ist eine sehr einfache Seite, die ein {{htmlelement("section")}}-Element enthält, in dem Sie ein Bild finden können und einen Absatz mit einem Link darin. Der HTML-Quellcode sieht so aus:

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

![Baumstruktur-Darstellung des Document Object Model: Der oberste Knoten ist der Doctype und das HTML-Element. Kindknoten des HTML sind Kopf und Körper. Jedes Kindelement ist ein Zweig. Auch alle Texte, sogar Leerzeichen, werden angezeigt.](dom-screenshot.png)

> [!NOTE]
> Dieses DOM-Baumdiagramm wurde mit Ian Hicksons [Live DOM Viewer](https://software.hixie.ch/utilities/js/live-dom-viewer/) erstellt.

Jeder Eintrag im Baum wird als **Knoten** bezeichnet. Sie können im obigen Diagramm sehen, dass einige Knoten Elemente darstellen (als `HTML`, `HEAD`, `META` usw. identifiziert), und andere Text darstellen (als `#text` identifiziert). Es gibt [auch andere Knotentypen](/de/docs/Web/API/Node/nodeType), aber dies sind die Haupttypen, denen Sie begegnen werden.

Knoten werden auch aufgrund ihrer Position relativ zu anderen Knoten im Baum beschrieben:

- **Wurzelknoten**: Der oberste Knoten im Baum, der im Fall von HTML immer der `HTML`-Knoten ist (andere Markup-Vokabularien wie SVG und benutzerdefiniertes XML haben unterschiedliche Wurzelelemente).
- **Kindknoten**: Ein Knoten _direkt_ innerhalb eines anderen Knotens. Beispielsweise ist `IMG` ein Kind von `SECTION` im obigen Beispiel.
- **Nachkommenknoten**: Ein Knoten _irgendwo_ innerhalb eines anderen Knotens. Beispielsweise ist `IMG` ein Kind von `SECTION` im obigen Beispiel, und es ist auch ein Nachkomme. `IMG` ist kein Kind von `BODY`, da es zwei Ebenen darunter im Baum liegt, aber es ist ein Nachkomme von `BODY`.
- **Elternknoten**: Ein Knoten, der einen anderen Knoten innerhalb hat. Beispielsweise ist `BODY` der Elternknoten von `SECTION` im obigen Beispiel.
- **Geschwisterknoten**: Knoten, die sich auf derselben Ebene im DOM-Baum befinden. Beispielsweise sind `IMG` und `P` im obigen Beispiel Geschwister.

Es ist nützlich, sich mit dieser Terminologie vertraut zu machen, bevor Sie mit dem DOM arbeiten, da eine Reihe von Begriffsdefinitionen, auf die Sie stoßen werden, auf ihnen basieren. Sie sind möglicherweise auch darauf gestoßen, wenn Sie CSS studiert haben (z. B. Nachkomme-Selektor, Kind-Selektor).

## Aktives Lernen: Grundlegende DOM-Manipulation

Um mit dem Lernen über DOM-Manipulation zu beginnen, fangen wir mit einem praktischen Beispiel an.

1. Nehmen Sie eine lokale Kopie der [dom-example.html-Seite](https://github.com/mdn/learning-area/blob/main/javascript/apis/document-manipulation/dom-example.html) und das [Bild](https://github.com/mdn/learning-area/blob/main/javascript/apis/document-manipulation/dinosaur.png), das dazu gehört.
2. Fügen Sie ein `<script></script>`-Element direkt über das schließende `</body>`-Tag hinzu.
3. Um ein Element im DOM zu manipulieren, müssen Sie es zuerst auswählen und eine Referenz darauf in einer Variablen speichern. Fügen Sie in Ihrem Skriptelement die folgende Zeile hinzu:

   ```js
   const link = document.querySelector("a");
   ```

4. Nun, da wir die Elementreferenz in einer Variablen gespeichert haben, können wir beginnen, sie mit den dafür verfügbaren Eigenschaften und Methoden zu manipulieren (diese sind auf Schnittstellen wie [`HTMLAnchorElement`](/de/docs/Web/API/HTMLAnchorElement) im Falle des {{htmlelement("a")}}-Elements, ihrer allgemeineren Elternschnittstelle [`HTMLElement`](/de/docs/Web/API/HTMLElement) und [`Node`](/de/docs/Web/API/Node) – die alle Knoten in einem DOM darstellt – definiert). Lassen Sie uns zunächst den Text im Link ändern, indem wir den Wert der [`Node.textContent`](/de/docs/Web/API/Node/textContent)-Eigenschaft aktualisieren. Fügen Sie die folgende Zeile unter der vorherigen hinzu:

   ```js
   link.textContent = "Mozilla Developer Network";
   ```

5. Wir sollten auch die URL ändern, auf die der Link verweist, damit er nicht beim Klicken an den falschen Ort führt. Fügen Sie die folgende Linie erneut am Ende hinzu:

   ```js
   link.href = "https://developer.mozilla.org";
   ```

Beachten Sie, dass es wie bei vielen Dingen in JavaScript viele Möglichkeiten gibt, ein Element auszuwählen und eine Referenz darauf in einer Variablen zu speichern. [`Document.querySelector()`](/de/docs/Web/API/Document/querySelector) ist der empfohlene moderne Ansatz. Es ist praktisch, weil es Ihnen ermöglicht, Elemente mit CSS-Selektoren auszuwählen. Der obige `querySelector()`-Aufruf wird das erste {{htmlelement("a")}}-Element im Dokument auswählen. Wenn Sie mehrere Elemente auswählen und bearbeiten möchten, können Sie [`Document.querySelectorAll()`](/de/docs/Web/API/Document/querySelectorAll) verwenden, das jedes Element im Dokument, das dem Selektor entspricht, auswählt und Referenzen darauf in einem [Array](/de/docs/Learn/JavaScript/First_steps/Arrays)-ähnlichen Objekt namens [`NodeList`](/de/docs/Web/API/NodeList) speichert.

Es gibt ältere Methoden, um Elementreferenzen zu erfassen, wie zum Beispiel:

- [`Document.getElementById()`](/de/docs/Web/API/Document/getElementById), die ein Element mit einem bestimmten `id`-Attributwert auswählt, z. B. `<p id="myId">Mein Absatz</p>`. Die ID wird als Parameter an die Funktion übergeben, d. h. `const elementRef = document.getElementById('myId')`.
- [`Document.getElementsByTagName()`](/de/docs/Web/API/Document/getElementsByTagName), die ein Array-ähnliches Objekt mit allen Elementen auf der Seite eines bestimmten Typs zurückgibt, beispielsweise `<p>`s, `<a>`s usw. Der Elementtyp wird als Parameter an die Funktion übergeben, d. h. `const elementRefArray = document.getElementsByTagName('p')`.

Diese beiden Methoden funktionieren in älteren Browsern besser als die modernen Methoden wie `querySelector()`, sind aber nicht so bequem. Schauen Sie nach, welche anderen Sie finden können!

### Neue Knoten erstellen und platzieren

Das Obige hat Ihnen einen kleinen Vorgeschmack darauf gegeben, was Sie tun können, aber lassen Sie uns weiter gehen und sehen, wie wir neue Elemente erstellen können.

1. Gehen wir zurück zum aktuellen Beispiel und beginnen wir damit, eine Referenz auf unser {{htmlelement("section")}}-Element zu erhalten – fügen Sie den folgenden Code unten in Ihr vorhandenes Skript ein (tun Sie dasselbe mit den anderen Zeilen):

   ```js
   const sect = document.querySelector("section");
   ```

2. Nun erstellen wir einen neuen Absatz mit [`Document.createElement()`](/de/docs/Web/API/Document/createElement) und geben ihm etwas Textinhalt auf die gleiche Weise wie zuvor:

   ```js
   const para = document.createElement("p");
   para.textContent = "We hope you enjoyed the ride.";
   ```

3. Sie können jetzt den neuen Absatz am Ende des Abschnitts mit [`Node.appendChild()`](/de/docs/Web/API/Node/appendChild) anhängen:

   ```js
   sect.appendChild(para);
   ```

4. Schließlich für diesen Teil, fügen wir einen Textknoten zum Absatz hinzu, in dem sich der Link befindet, um den Satz ordentlich abzurunden. Zuerst erstellen wir den Textknoten mit [`Document.createTextNode()`](/de/docs/Web/API/Document/createTextNode):

   ```js
   const text = document.createTextNode(
     " — the premier source for web development knowledge.",
   );
   ```

5. Nun holen wir uns eine Referenz auf den Absatz, in dem sich der Link befindet, und fügen den Textknoten hinzu:

   ```js
   const linkPara = document.querySelector("p");
   linkPara.appendChild(text);
   ```

Das ist das meiste, was Sie brauchen, um Knoten zum DOM hinzuzufügen – Sie werden diese Methoden häufig verwenden, wenn Sie dynamische Schnittstellen erstellen (wir werden später einige Beispiele betrachten).

### Elemente verschieben und entfernen

Es kann Zeiten geben, in denen Sie Knoten verschieben oder vollständig aus dem DOM entfernen möchten. Dies ist vollkommen möglich.

Wenn wir den Absatz mit dem Link darin an das Ende des Abschnitts verschieben wollten, könnten wir dies tun:

```js
sect.appendChild(linkPara);
```

Dies bewegt den Absatz nach unten an das Ende des Abschnitts. Sie könnten gedacht haben, es würde eine zweite Kopie davon erstellen, aber das ist nicht der Fall – `linkPara` ist eine Referenz auf die einzige Kopie dieses Absatzes. Wenn Sie eine Kopie erstellen und diese auch hinzufügen wollten, müssten Sie [`Node.cloneNode()`](/de/docs/Web/API/Node/cloneNode) stattdessen verwenden.

Das Entfernen eines Knotens ist recht einfach, zumindest wenn Sie eine Referenz auf den zu entfernenden Knoten und seinen Elternknoten haben. In unserem aktuellen Fall verwenden wir einfach [`Node.removeChild()`](/de/docs/Web/API/Node/removeChild), so:

```js
sect.removeChild(linkPara);
```

Wenn Sie einen Knoten nur auf Basis einer Referenz auf sich selbst entfernen möchten, was ziemlich häufig ist, können Sie [`Element.remove()`](/de/docs/Web/API/Element/remove) verwenden:

```js
linkPara.remove();
```

Diese Methode wird in älteren Browsern nicht unterstützt. Sie haben keine Methode, um einem Knoten mitzuteilen, sich selbst zu entfernen, daher müssten Sie Folgendes tun.

```js
linkPara.parentNode.removeChild(linkPara);
```

Versuchen Sie, die oben genannten Zeilen in Ihren Code einzufügen.

### Stile manipulieren

Es ist möglich, CSS-Stile über JavaScript auf verschiedene Weise zu manipulieren.

Zunächst können Sie eine Liste aller Stilelemente erhalten, die an ein Dokument angehängt sind, indem Sie [`Document.stylesheets`](/de/docs/Web/API/Document/stylesheets) verwenden, die ein Array-ähnliches Objekt mit [`CSSStyleSheet`](/de/docs/Web/API/CSSStyleSheet)-Objekten zurückgibt. Sie können dann Stile nach Belieben hinzufügen/entfernen. Wir werden diese Funktionen jedoch nicht weiter ausführen, da sie eine etwas archaische und schwierige Möglichkeit sind, Stil zu manipulieren. Es gibt viel einfachere Wege.

Der erste Weg ist, Inline-Stile direkt auf die Elemente zu setzen, die Sie dynamisch gestalten möchten. Dies geschieht mit der [`HTMLElement.style`](/de/docs/Web/API/HTMLElement/style)-Eigenschaft, die Inline-Styling-Informationen für jedes Element im Dokument enthält. Sie können Eigenschaften dieses Objekts festlegen, um Elementstile direkt zu aktualisieren.

1. Als Beispiel, versuchen Sie, diese Zeilen unserem fortlaufenden Beispiel hinzuzufügen:

   ```js
   para.style.color = "white";
   para.style.backgroundColor = "black";
   para.style.padding = "10px";
   para.style.width = "250px";
   para.style.textAlign = "center";
   ```

2. Laden Sie die Seite neu und Sie sehen, dass die Stile auf den Absatz angewendet wurden. Wenn Sie sich diesen Absatz im [Seiten-Inspector/DOM-Inspector](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/index.html) Ihres Browsers ansehen, sehen Sie, dass diese Zeilen tatsächlich Inline-Stile zum Dokument hinzufügen:

   ```html
   <p
     style="color: white; background-color: black; padding: 10px; width: 250px; text-align: center;">
     We hope you enjoyed the ride.
   </p>
   ```

> [!NOTE]
> Beachten Sie, dass die JavaScript-Eigenschaftsversionen der CSS-Stile im [lower camel case](/de/docs/Glossary/camel_case) geschrieben sind, während die CSS-Versionen mit Bindestrichen [kebab-case](/de/docs/Glossary/kebab_case) versehen sind (z. B. `backgroundColor` versus `background-color`). Stellen Sie sicher, dass Sie diese nicht durcheinander bringen, da es sonst nicht funktioniert.

Es gibt einen weiteren üblichen Weg, um Stile in Ihrem Dokument dynamisch zu manipulieren, den wir uns nun ansehen werden.

1. Löschen Sie die vorherigen fünf Zeilen, die Sie dem JavaScript hinzugefügt haben.
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

3. Jetzt wenden wir uns einer sehr nützlichen Methode zur allgemeinen HTML-Manipulation zu — [`Element.setAttribute()`](/de/docs/Web/API/Element/setAttribute) — diese nimmt zwei Argumente, das Attribut, das Sie auf dem Element setzen möchten, und den Wert, auf den Sie es setzen möchten. In diesem Fall werden wir einen Klassennamen von highlight auf unseren Absatz setzen:

   ```js
   para.setAttribute("class", "highlight");
   ```

4. Aktualisieren Sie Ihre Seite und Sie werden keine Änderung bemerken – das CSS wird weiterhin auf den Absatz angewendet, aber diesmal durch das Geben einer Klasse, die von unserer CSS-Regel ausgewählt wird, nicht als Inline-CSS-Stile.

Welche Methode Sie wählen, bleibt Ihnen überlassen; beide haben ihre Vor- und Nachteile. Die erste Methode erfordert weniger Einrichtung und eignet sich für einfache Anwendungen, während die zweite Methode puristischer ist (keine Mischung von CSS und JavaScript, keine Inline-Stile, die als schlechte Praxis angesehen werden). Wenn Sie beginnen, größere und komplexere Apps zu erstellen, werden Sie wahrscheinlich die zweite Methode mehr verwenden, aber es liegt wirklich bei Ihnen.

An diesem Punkt haben wir noch nichts wirklich Nützliches getan! Es gibt keinen Sinn, statische Inhalte mit JavaScript zu erstellen — Sie könnten es genauso gut direkt in Ihr HTML schreiben und JavaScript nicht verwenden. Es ist komplexer als HTML, und das Erstellen Ihrer Inhalte mit JavaScript hat auch andere Probleme, die damit verbunden sind (wie zum Beispiel, dass sie von Suchmaschinen nicht gelesen werden können).

Im nächsten Abschnitt werden wir uns einen praktischeren Gebrauch von DOM-APIs ansehen.

> [!NOTE]
> Sie können unsere [fertige Version der dom-example.html](https://github.com/mdn/learning-area/blob/main/javascript/apis/document-manipulation/dom-example-manipulated.html)-Demo auf GitHub finden ([sehen Sie es sich auch live an](https://mdn.github.io/learning-area/javascript/apis/document-manipulation/dom-example-manipulated.html)).

## Aktives Lernen: Eine dynamische Einkaufsliste

In dieser Herausforderung möchten wir ein einfaches Beispiel für eine Einkaufsliste erstellen, das es Ihnen ermöglicht, Artikel dynamisch zur Liste hinzuzufügen, indem Sie ein Formulareingabefeld und einen Button verwenden. Wenn Sie einen Artikel zur Eingabe hinzufügen und den Button drücken:

- Der Artikel sollte in der Liste erscheinen.
- Jeder Artikel sollte einen Button erhalten, der gedrückt werden kann, um diesen Artikel von der Liste zu entfernen.
- Die Eingabe sollte geleert und fokussiert werden, damit Sie einen weiteren Artikel eingeben können.

Die fertige Demo sieht in etwa so aus:

![Demo-Layout einer Einkaufsliste. Ein 'Meine Einkaufsliste'-Header gefolgt von 'Geben Sie einen neuen Artikel ein' mit einem Eingabefeld und 'Artikel hinzufügen'-Button. Die Liste der bereits hinzugefügten Artikel ist unten, jeder mit einem entsprechenden Löschen-Button.](shopping-list.png)

Um die Übung zu beenden, folgen Sie den unten stehenden Schritten und stellen Sie sicher, dass sich die Liste wie beschrieben verhält.

1. Zunächst laden Sie eine Kopie unserer [shopping-list.html](https://github.com/mdn/learning-area/blob/main/javascript/apis/document-manipulation/shopping-list.html) Startdatei herunter und machen eine Kopie davon irgendwo. Sie werden sehen, dass sie ein wenig CSS, ein Div mit einem Label, einer Eingabe und einem Button und eine leere Liste und ein {{htmlelement("script")}}-Element enthält. Sie werden alle Ihre Ergänzungen im Skript machen.
2. Erstellen Sie drei Variablen, die Referenzen zur Liste ({{htmlelement("ul")}}), {{htmlelement("input")}} und {{htmlelement("button")}}-Elementen halten.
3. Erstellen Sie eine [Funktion](/de/docs/Learn/JavaScript/Building_blocks/Functions), die als Antwort auf das Klicken des Buttons ausgeführt wird.
4. Im Funktionsblock speichern Sie zunächst den aktuellen [Wert](/de/docs/Web/API/HTMLInputElement/value) des Eingabeelements in einer Variablen.
5. Leeren Sie als nächstes das Eingabeelement, indem Sie seinem Wert einen leeren String zuweisen — `''`.
6. Erstellen Sie drei neue Elemente — eine Listenelement ({{htmlelement('li')}}), {{htmlelement('span')}}, und {{htmlelement('button')}} und speichern Sie sie in Variablen.
7. Hängen Sie das Span und den Button als Kinder des Listenelements an.
8. Setzen Sie den Textinhalt des Spans auf den zuvor gespeicherten Wert des Eingabeelements und den Textinhalt des Buttons auf 'Löschen'.
9. Hängen Sie das Listenelement als Kind der Liste an.
10. Hängen Sie einen Event-Handler an den Delete-Button an, damit beim Klicken das gesamte Listenelement (`<li>...</li>`) gelöscht wird.
11. Verwenden Sie schließlich die [`focus()`](/de/docs/Web/API/HTMLElement/focus)-Methode, um das Eingabeelement für die Eingabe des nächsten Eintrags in die Einkaufsliste vorzubereiten.

> [!NOTE]
> Wenn Sie wirklich hängen bleiben, schauen Sie sich unsere [fertige Einkaufsliste](https://github.com/mdn/learning-area/blob/main/javascript/apis/document-manipulation/shopping-list-finished.html) an ([sehen Sie es auch live laufen](https://mdn.github.io/learning-area/javascript/apis/document-manipulation/shopping-list-finished.html)).

## Zusammenfassung

Wir haben das Ende unseres Studiengangs über Dokument- und DOM-Manipulation erreicht. An diesem Punkt sollten Sie verstehen, was die wichtigen Teile eines Webbrowsers in Bezug auf die Kontrolle von Dokumenten und anderen Aspekten der Benutzererfahrung im Web sind. Am wichtigsten ist, dass Sie verstehen sollten, was das Document Object Model ist und wie man es manipuliert, um nützliche Funktionalität zu erstellen.

## Siehe auch

Es gibt viele weitere Funktionen, mit denen Sie Ihre Dokumente manipulieren können. Schauen Sie sich einige unserer Referenzen an und sehen Sie, was Sie entdecken können:

- [`Document`](/de/docs/Web/API/Document)
- [`Window`](/de/docs/Web/API/Window)
- [`Node`](/de/docs/Web/API/Node)
- [`HTMLElement`](/de/docs/Web/API/HTMLElement), [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement), [`HTMLImageElement`](/de/docs/Web/API/HTMLImageElement) usw.

(Siehe unser [Web API Index](/de/docs/Web/API) für die vollständige Liste der auf MDN dokumentierten Web-APIs!)

{{PreviousMenuNext("Learn/JavaScript/Client-side_web_APIs/Introduction", "Learn/JavaScript/Client-side_web_APIs/Fetching_data", "Learn/JavaScript/Client-side_web_APIs")}}
