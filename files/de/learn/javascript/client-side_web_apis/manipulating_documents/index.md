---
title: Manipulating documents
slug: Learn/JavaScript/Client-side_web_APIs/Manipulating_documents
l10n:
  sourceCommit: 93b34fcdb9cf91ff44f5dfe7f4dcd13e961962da
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/JavaScript/Client-side_web_APIs/Introduction", "Learn/JavaScript/Client-side_web_APIs/Fetching_data", "Learn/JavaScript/Client-side_web_APIs")}}

Beim Erstellen von Webseiten und Apps ist es eine der häufigsten Aufgaben, die Dokumentstruktur in irgendeiner Weise zu manipulieren. Dies wird normalerweise unter Verwendung des Document Object Model (DOM) durchgeführt, einer Reihe von APIs zur Steuerung von HTML- und Stil-Informationen, die stark auf das [`Document`](/de/docs/Web/API/Document)-Objekt zurückgreifen. In diesem Artikel werden wir im Detail untersuchen, wie man das DOM verwendet, zusammen mit einigen anderen interessanten APIs, die Ihre Umgebung auf interessante Weise verändern können.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Grundlegendes Verständnis von HTML, CSS und
        JavaScript — einschließlich JavaScript-Objekte.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Vertrautheit mit den Kern-DOM-APIs erlangen und den anderen APIs, die häufig
        mit DOM- und Dokumentmanipulation in Verbindung stehen.
      </td>
    </tr>
  </tbody>
</table>

## Die wichtigen Teile eines Webbrowsers

Webbrowser sind sehr komplizierte Softwarepakete mit vielen beweglichen Teilen, von denen viele nicht von einem Webentwickler mit JavaScript gesteuert oder manipuliert werden können. Man könnte denken, dass solche Einschränkungen schlecht sind, aber Browser sind aus guten Gründen abgesichert, die sich meistens um Sicherheit drehen. Stellen Sie sich vor, eine Website könnte auf Ihre gespeicherten Passwörter oder andere sensible Informationen zugreifen und sich bei Websites anmelden, als ob sie Sie wären?

Trotz der Einschränkungen geben uns Web-APIs immer noch Zugang zu vielen Funktionalitäten, die es uns ermöglichen, viele Dinge mit Webseiten zu tun. Es gibt ein paar wirklich offensichtliche Teile, auf die Sie regelmäßig in Ihrem Code Bezug nehmen werden — betrachten Sie das folgende Diagramm, das die Hauptteile eines Browsers darstellt, die direkt am Anzeigen von Webseiten beteiligt sind:

![Wichtige Teile eines Webbrowsers; das Dokument ist die Webseite. Das Fenster umfasst das gesamte Dokument und auch den Tab. Der Navigator ist der Browser, der das Fenster (einschließlich des Dokuments) und alle anderen Fenster umfasst.](document-window-navigator.png)

- Das Fenster ist der Browser-Tab, in den eine Webseite geladen wird; dies wird in JavaScript durch das [`Window`](/de/docs/Web/API/Window)-Objekt dargestellt. Mithilfe von Methoden, die auf diesem Objekt verfügbar sind, können Sie Dinge tun wie die Größe des Fensters zurückgeben (siehe [`Window.innerWidth`](/de/docs/Web/API/Window/innerWidth) und [`Window.innerHeight`](/de/docs/Web/API/Window/innerHeight)), das Dokument manipulieren, das in dieses Fenster geladen wurde, daten-spezifisch für dieses Dokument auf der Client-Seite speichern (z.B. mit einer lokalen Datenbank oder einem anderen Speichermodell), einen [Event-Handler](/de/docs/Learn/JavaScript/Building_blocks/Events) an das aktuelle Fenster anhängen und mehr.
- Der Navigator repräsentiert den Zustand und die Identität des Browsers (d.h. des User-Agents), wie er im Netz existiert. In JavaScript wird dies durch das [`Navigator`](/de/docs/Web/API/Navigator)-Objekt dargestellt. Sie können dieses Objekt verwenden, um Dinge wie die bevorzugte Sprache des Benutzers, einen Medienstrom von der Webcam des Benutzers usw. abzurufen.
- Das Dokument (dargestellt durch das DOM in Browsern) ist die tatsächliche Seite, die in das Fenster geladen wird, und wird in JavaScript durch das [`Document`](/de/docs/Web/API/Document)-Objekt dargestellt. Sie können dieses Objekt verwenden, um Informationen über das HTML und CSS, die das Dokument bilden, zurückzugeben und zu manipulieren, z.B. eine Referenz zu einem Element im DOM zu erhalten, seinen Textinhalt zu ändern, neue Stile darauf anzuwenden, neue Elemente zu erstellen und diese dem aktuellen Element als Kinder hinzuzufügen oder es sogar ganz zu löschen.

In diesem Artikel werden wir uns hauptsächlich auf die Manipulation des Dokuments konzentrieren, aber wir werden noch ein paar andere nützliche Dinge zeigen.

## Das Document Object Model

Das derzeit in jedem Ihrer Browser-Tabs geladene Dokument wird durch ein Document Object Model dargestellt. Dies ist eine "Baumstruktur"-Darstellung, die vom Browser erstellt wird und es ermöglicht, die HTML-Struktur einfach von Programmiersprachen aus zuzugreifen - zum Beispiel verwendet der Browser selbst sie, um Stilinformat ionen und andere Informationen auf die richtigen Elemente anzuwenden, während er eine Seite rendert, und Entwickler wie Sie können das DOM mit JavaScript manipulieren, nachdem die Seite gerendert wurde.

Wir haben eine Beispielseite unter [dom-example.html](https://github.com/mdn/learning-area/blob/main/javascript/apis/document-manipulation/dom-example.html) erstellt ([sehen Sie sie auch live](https://mdn.github.io/learning-area/javascript/apis/document-manipulation/dom-example.html)). Versuchen Sie, diese in Ihrem Browser zu öffnen - es ist eine sehr einfache Seite, die ein {{htmlelement("section")}}-Element enthält, in dem Sie ein Bild und einen Absatz mit einem Link darin finden können. Der HTML-Quellcode sieht folgendermaßen aus:

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

![Baumstruktur-Darstellung des Document Object Model: Der obere Knoten ist der doctype und das HTML-Element. Kindknoten des HTML beinhalten head und body. Jedes Kindelement ist ein Zweig. Sämtlicher Text, selbst Leerzeichen, wird ebenfalls angezeigt.](dom-screenshot.png)

> [!NOTE]
> Dieses DOM-Baumschema wurde mit Ian Hicksons [Live DOM viewer](https://software.hixie.ch/utilities/js/live-dom-viewer/) erstellt.

Jeder Eintrag im Baum wird als **Node** bezeichnet. Sie können im obigen Diagramm sehen, dass einige Nodes Elemente darstellen (identifiziert als `HTML`, `HEAD`, `META` usw.) und andere Text (identifiziert als `#text`). Es gibt [andere Arten von Nodes](/de/docs/Web/API/Node/nodeType), aber dies sind die Haupttypen, denen Sie begegnen werden.

Nodes werden auch durch ihre Position im Baum relativ zu anderen Nodes bezeichnet:

- **Root-Knoten:** Der oberste Knoten im Baum, der im Fall von HTML immer der `HTML`-Knoten ist (andere Markup-Vokabulare wie SVG und benutzerdefiniertes XML haben andere Root-Elemente).
- **Kindknoten:** Ein Knoten _direkt_ innerhalb eines anderen Knotens. Zum Beispiel ist `IMG` ein Kind von `SECTION` in obigem Beispiel.
- **Nachfahrenknoten:** Ein Knoten _irgendwo_ innerhalb eines anderen Knotens. Zum Beispiel ist `IMG` ein Kind von `SECTION` in obigem Beispiel und ebenfalls ein Nachfahre. `IMG` ist kein Kind von `BODY`, da es zwei Ebenen darunter im Baum ist, aber es ist ein Nachfahre von `BODY`.
- **Elternknoten:** Ein Knoten, der einen anderen Knoten in sich hat. Zum Beispiel ist `BODY` der Elternknoten von `SECTION` in obigem Beispiel.
- **Geschwisterknoten:** Knoten, die sich auf derselben Ebene im DOM-Baum befinden. Zum Beispiel sind `IMG` und `P` Geschwister im obigen Beispiel.

Es ist nützlich, sich mit dieser Terminologie vertraut zu machen, bevor Sie mit dem DOM arbeiten, da eine Reihe der im Code vorkommenden Begriffe auf ihnen basieren. Möglicherweise sind Sie auch mit ihnen vertraut, wenn Sie CSS studiert haben (z.B. Nachfahren-Selektor, Kind-Selektor).

## Aktives Lernen: Grundlegende DOM-Manipulation

Um mit dem Lernen über DOM-Manipulation zu beginnen, fangen wir mit einem praktischen Beispiel an.

1. Nehmen Sie eine lokale Kopie der [dom-example.html Seite](https://github.com/mdn/learning-area/blob/main/javascript/apis/document-manipulation/dom-example.html) und das [Bild](https://github.com/mdn/learning-area/blob/main/javascript/apis/document-manipulation/dinosaur.png), das dazu gehört.
2. Fügen Sie ein `<script></script>`-Element direkt vor dem schließenden `</body>`-Tag hinzu.
3. Um ein Element im DOM zu manipulieren, müssen Sie es zuerst auswählen und eine Referenz darauf in einer Variablen speichern. Fügen Sie in Ihrem Skript-Element die folgende Zeile hinzu:

   ```js
   const link = document.querySelector("a");
   ```

4. Jetzt, da wir die Elementreferenz in einer Variablen gespeichert haben, können wir beginnen, sie mithilfe von Eigenschaften und Methoden zu manipulieren, die darauf verfügbar sind (diese sind auf Schnittstellen wie [`HTMLAnchorElement`](/de/docs/Web/API/HTMLAnchorElement) im Fall des {{htmlelement("a")}}-Elements definiert, seiner allgemeineren Elternschnittstelle [`HTMLElement`](/de/docs/Web/API/HTMLElement) und [`Node`](/de/docs/Web/API/Node) — die alle Nodes in einem DOM darstellt). Zuerst ändern wir den Text im Link, indem wir den Wert der [`Node.textContent`](/de/docs/Web/API/Node/textContent)-Eigenschaft aktualisieren. Fügen Sie die folgende Zeile unter der vorherigen hinzu:

   ```js
   link.textContent = "Mozilla Developer Network";
   ```

5. Wir sollten auch die URL ändern, auf die der Link verweist, damit er nicht beim Klick an die falsche Stelle führt. Fügen Sie die folgende Zeile, wieder am Ende, hinzu:

   ```js
   link.href = "https://developer.mozilla.org";
   ```

Beachten Sie, dass es wie bei vielen Dingen in JavaScript viele Möglichkeiten gibt, ein Element auszuwählen und eine Referenz darauf in einer Variablen zu speichern. [`Document.querySelector()`](/de/docs/Web/API/Document/querySelector) ist der empfohlene moderne Ansatz. Es ist praktisch, weil es Ihnen ermöglicht, Elemente mit CSS-Selektoren auszuwählen. Der obige `querySelector()`-Aufruf wird das erste {{htmlelement("a")}}-Element anpassen, das im Dokument erscheint. Wenn Sie mehrere Elemente auswählen und etwas damit tun möchten, könnten Sie [`Document.querySelectorAll()`](/de/docs/Web/API/Document/querySelectorAll) verwenden, das alle Elemente im Dokument, die dem Selektor entsprechen, anpasst und Referenzen darauf in einem [array](/de/docs/Learn/JavaScript/First_steps/Arrays)-ähnlichen Objekt namens [`NodeList`](/de/docs/Web/API/NodeList) speichert.

Es gibt ältere Methoden, um Elementreferenzen zu erhalten, wie:

- [`Document.getElementById()`](/de/docs/Web/API/Document/getElementById), das ein Element mit einem bestimmten `id`-Attributwert auswählt, z.B. `<p id="myId">Mein Absatz</p>`. Die ID wird der Funktion als Parameter übergeben, d.h. `const elementRef = document.getElementById('myId')`.
- [`Document.getElementsByTagName()`](/de/docs/Web/API/Document/getElementsByTagName), das ein array-ähnliches Objekt zurückgibt, das alle Elemente auf der Seite eines bestimmten Typs enthält, z.B. `<p>`s, `<a>`s usw. Der Elementtyp wird der Funktion als Parameter übergeben, d.h. `const elementRefArray = document.getElementsByTagName('p')`.

Diese beiden arbeiten in älteren Browsern besser als die modernen Methoden wie `querySelector()`, sind aber nicht so bequem. Schauen Sie nach und sehen Sie, welche anderen Sie finden können!

### Erstellen und Platzieren neuer Nodes

Das obige gibt Ihnen einen kleinen Vorgeschmack auf das, was Sie tun können, aber schauen wir weiter und sehen, wie wir neue Elemente erstellen können.

1. Kehren wir zum aktuellen Beispiel zurück und beginnen wir damit, eine Referenz auf unser {{htmlelement("section")}}-Element zu holen — fügen Sie den folgenden Code am Ende Ihres bestehenden Skripts hinzu (machen Sie dasselbe mit den anderen Zeilen):

   ```js
   const sect = document.querySelector("section");
   ```

2. Erstellen wir nun einen neuen Absatz mit [`Document.createElement()`](/de/docs/Web/API/Document/createElement) und geben ihm Textinhalt auf die gleiche Weise wie zuvor:

   ```js
   const para = document.createElement("p");
   para.textContent = "We hope you enjoyed the ride.";
   ```

3. Sie können den neuen Absatz jetzt am Ende des Abschnitts mit [`Node.appendChild()`](/de/docs/Web/API/Node/appendChild) anhängen:

   ```js
   sect.appendChild(para);
   ```

4. Zum Schluss für diesen Teil fügen wir einen Textknoten zu dem Absatz hinzu, in dem sich der Link befindet, um den Satz schön abzurunden. Zuerst erstellen wir den Textknoten mit [`Document.createTextNode()`](/de/docs/Web/API/Document/createTextNode):

   ```js
   const text = document.createTextNode(
     " — the premier source for web development knowledge.",
   );
   ```

5. Jetzt holen wir eine Referenz auf den Absatz, in dem sich der Link befindet, und hängen den Textknoten daran an:

   ```js
   const linkPara = document.querySelector("p");
   linkPara.appendChild(text);
   ```

Das ist der größte Teil dessen, was Sie zum Hinzufügen von Nodes zum DOM benötigen — von diesen Methoden werden Sie viel Gebrauch machen, wenn Sie dynamische Schnittstellen erstellen (wir werden später einige Beispiele ansehen).

### Elemente verschieben und entfernen

Es kann Zeiten geben, in denen Sie Nodes verschieben oder vollständig aus dem DOM löschen möchten. Dies ist durchaus möglich.

Wenn wir den Absatz mit dem Link darin an das Ende des Abschnitts verschieben wollten, könnten wir dies so tun:

```js
sect.appendChild(linkPara);
```

Dies verschiebt den Absatz nach unten an das Ende des Abschnitts. Sie könnten gedacht haben, es würde eine zweite Kopie davon erstellen, aber das ist nicht der Fall — `linkPara` ist eine Referenz auf die eine und einzige Kopie dieses Absatzes. Wenn Sie eine Kopie erstellen und diese ebenfalls hinzufügen wollten, müssten Sie [`Node.cloneNode()`](/de/docs/Web/API/Node/cloneNode) verwenden.

Das Entfernen eines Knotens ist ebenfalls ziemlich einfach, zumindest wenn Sie eine Referenz auf den zu entfernenden Knoten und seinen Elternknoten haben. In unserem aktuellen Fall verwenden wir einfach [`Node.removeChild()`](/de/docs/Web/API/Node/removeChild), wie folgt:

```js
sect.removeChild(linkPara);
```

Wenn Sie einen Knoten entfernen möchten, der nur auf einer Referenz auf sich selbst basiert, was ziemlich häufig vorkommt, können Sie [`Element.remove()`](/de/docs/Web/API/Element/remove) verwenden:

```js
linkPara.remove();
```

Diese Methode wird in älteren Browsern nicht unterstützt. Sie haben keine Methode, einem Knoten mitzuteilen, sich selbst zu entfernen, daher müssten Sie Folgendes tun.

```js
linkPara.parentNode.removeChild(linkPara);
```

Versuchen Sie, die obigen Zeilen Ihrem Code hinzuzufügen.

### Stile manipulieren

Es ist möglich, CSS-Stile über JavaScript auf verschiedene Arten zu manipulieren.

Zunächst können Sie eine Liste aller Stylesheets, die an ein Dokument angehängt sind, mit [`Document.stylesheets`](/de/docs/Web/API/Document/stylesheets) erhalten, die ein array-ähnliches Objekt mit [`CSSStyleSheet`](/de/docs/Web/API/CSSStyleSheet)-Objekten zurückgibt. Sie können dann Stile nach Belieben hinzufügen/entfernen. Wir werden jedoch nicht weiter auf diese Funktionen eingehen, weil sie eine etwas archaische und schwierige Methode zur Manipulation von Stilen sind. Es gibt viel einfachere Wege.

Die erste Möglichkeit besteht darin, Inline-Stile direkt an Elemente hinzuzufügen, die Sie dynamisch gestalten möchten. Dies geschieht mit der [`HTMLElement.style`](/de/docs/Web/API/HTMLElement/style)-Eigenschaft, die Inline-Stil-Informationen für jedes Element im Dokument enthält. Sie können Eigenschaften dieses Objekts festlegen, um Stilelemente direkt zu aktualisieren.

1. Als Beispiel, versuchen Sie, diese Zeilen zu unserem laufenden Beispiel hinzuzufügen:

   ```js
   para.style.color = "white";
   para.style.backgroundColor = "black";
   para.style.padding = "10px";
   para.style.width = "250px";
   para.style.textAlign = "center";
   ```

2. Laden Sie die Seite neu und Sie werden sehen, dass die Stile auf den Absatz angewendet wurden. Wenn Sie sich diesen Absatz im [Seiteninspektor/DOM-Inspektor](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/index.html) Ihres Browsers ansehen, werden Sie sehen, dass diese Zeilen tatsächlich Inline-Stile zum Dokument hinzufügen:

   ```html
   <p
     style="color: white; background-color: black; padding: 10px; width: 250px; text-align: center;">
     We hope you enjoyed the ride.
   </p>
   ```

> [!NOTE]
> Beachten Sie, wie die JavaScript-Eigenschaften-Versionen der CSS-Stile in {{Glossary("camel_case", "lower camel case")}} geschrieben sind, während die CSS-Versionen durch Bindestriche getrennt sind ({{Glossary("kebab_case", "kebab-case")}}) (z.B. `backgroundColor` versus `background-color`). Achten Sie darauf, diese nicht zu verwechseln, sonst funktioniert es nicht.

Es gibt eine weitere gängige Methode, um Stile in Ihrem Dokument dynamisch zu manipulieren, die wir uns jetzt ansehen werden.

1. Löschen Sie die vorherigen fünf Zeilen, die Sie dem JavaScript hinzugefügt haben.
2. Fügen Sie das folgende innerhalb Ihres HTML-{{htmlelement("head")}}-Elements hinzu:

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

3. Nun wenden wir uns einer sehr nützlichen Methode zur allgemeinen HTML-Manipulation zu — [`Element.setAttribute()`](/de/docs/Web/API/Element/setAttribute) — diese nimmt zwei Argumente, das Attribut, das Sie auf dem Element festlegen möchten, und den Wert, den Sie darauf setzen möchten. In diesem Fall setzen wir einen Klassennamen von highlight auf unseren Absatz:

   ```js
   para.setAttribute("class", "highlight");
   ```

4. Aktualisieren Sie Ihre Seite, und Sie werden keine Änderung sehen — die CSS werden immer noch auf den Absatz angewendet, diesmal jedoch, indem ihm eine Klasse zugewiesen wird, die von unserer CSS-Regel ausgewählt wird, nicht als Inline-CSS-Stile.

Welche Methode Sie wählen, liegt bei Ihnen; beide haben ihre Vor- und Nachteile. Die erste Methode erfordert weniger Einrichtung und ist für einfache Zwecke geeignet, während die zweite Methode puristischer ist (kein Mischen von CSS und JavaScript, keine Inline-Stile, die als schlechte Praxis angesehen werden). Wenn Sie damit beginnen, größere und aufwendigere Apps zu entwickeln, werden Sie wahrscheinlich die zweite Methode häufiger verwenden, aber das liegt letztendlich bei Ihnen.

An dieser Stelle haben wir eigentlich nichts Nützliches getan! Es gibt keinen Sinn, statische Inhalte mit JavaScript zu erstellen — Sie könnten genauso gut einfach in Ihr HTML schreiben und JavaScript nicht verwenden. Es ist komplexer als HTML und das Erstellen Ihres Inhalts mit JavaScript hat auch andere Probleme (wie z.B. dass Suchmaschinen nicht lesbar sind).

Im nächsten Abschnitt werden wir uns eine nützlichere Anwendung der DOM-APIs ansehen.

> [!NOTE]
> Sie finden unsere [fertige Version des dom-example.html](https://github.com/mdn/learning-area/blob/main/javascript/apis/document-manipulation/dom-example-manipulated.html) Demos auf GitHub ([sehen Sie es auch live](https://mdn.github.io/learning-area/javascript/apis/document-manipulation/dom-example-manipulated.html)).

## Aktives Lernen: Eine dynamische Einkaufsliste

In dieser Herausforderung möchten wir ein einfaches Einkaufsliste-Beispiel erstellen, das es Ihnen ermöglicht, Elemente dynamisch zur Liste hinzuzufügen, indem Sie ein Formulareingabefeld und einen Knopf verwenden. Wenn Sie ein Element in das Eingabefeld eingeben und den Knopf drücken:

- Das Element sollte in der Liste erscheinen.
- Jedes Element sollte einen Knopf haben, der beim Drücken das Element aus der Liste löscht.
- Das Eingabefeld sollte geleert und fokussiert werden, damit Sie ein neues Element eingeben können.

Das fertige Demo sieht ungefähr so aus:

![Demo-Layout einer Einkaufsliste. Eine Überschrift 'Meine Einkaufsliste', gefolgt von 'Neues Element eingeben' mit einem Eingabefeld und einem 'Element hinzufügen' Button. Die Liste der bereits hinzugefügten Elemente befindet sich darunter, jedes mit einem entsprechenden Löschen-Button.](shopping-list.png)

Um die Übung abzuschließen, folgen Sie den unten stehenden Schritten und stellen Sie sicher, dass die Liste wie beschrieben funktioniert.

1. Laden Sie zunächst eine Kopie unserer [shopping-list.html](https://github.com/mdn/learning-area/blob/main/javascript/apis/document-manipulation/shopping-list.html)-Ausgangsdatei herunter, und machen Sie eine Kopie davon an einem Ort Ihrer Wahl. Sie werden sehen, dass es etwas minimalen CSS, ein div mit einem Label, einer Eingabe und einem Button sowie eine leere Liste und ein {{htmlelement("script")}}-Element gibt. Alle Ihre Ergänzungen werden im Skript vorgenommen.
2. Erstellen Sie drei Variablen, die Referenzen auf die Liste ({{htmlelement("ul")}}), das {{htmlelement("input")}}, und das {{htmlelement("button")}}-Element halten.
3. Erstellen Sie eine [Funktion](/de/docs/Learn/JavaScript/Building_blocks/Functions), die ausgeführt wird, wenn der Button angeklickt wird.
4. Starten Sie im Funktionskörper, indem Sie den aktuellen [Wert](/de/docs/Web/API/HTMLInputElement/value) des Eingabe-Elements in einer Variablen speichern.
5. Leeren Sie als Nächstes das Eingabefeld, indem Sie seinen Wert auf einen leeren String setzen — `''`.
6. Erstellen Sie drei neue Elemente — ein Listenelement ({{htmlelement('li')}}), {{htmlelement('span')}} und {{htmlelement('button')}} — und speichern Sie sie in Variablen.
7. Hängen Sie das span und den Button als Kinder des Listenelements an.
8. Setzen Sie den Textinhalt des span auf den zuvor gespeicherten Eingabewert und den Textinhalt des Buttons auf "Löschen".
9. Fügen Sie das Listenelement als Kind der Liste hinzu.
10. Hängen Sie einen Event-Handler an den Löschbutton, damit er beim Anklicken das gesamte Listenelement (`<li>...</li>`) löscht.
11. Verwenden Sie schließlich die [`focus()`](/de/docs/Web/API/HTMLElement/focus)-Methode, um das Eingabefeld zu fokussieren und bereit für die Eingabe des nächsten Einkaufslistelements zu machen.

> [!NOTE]
> Wenn Sie wirklich feststecken, schauen Sie sich unsere [fertige Einkaufsliste](https://github.com/mdn/learning-area/blob/main/javascript/apis/document-manipulation/shopping-list-finished.html) an ([sehen Sie sie auch live](https://mdn.github.io/learning-area/javascript/apis/document-manipulation/shopping-list-finished.html)).

## Zusammenfassung

Wir sind am Ende unseres Studiums der Dokumenten- und DOM-Manipulation angelangt. An diesem Punkt sollten Sie verstehen, was die wichtigen Teile eines Webbrowsers im Hinblick auf die Steuerung von Dokumenten und andere Aspekte der Web-Erfahrung des Benutzers sind. Am wichtigsten ist, dass Sie verstehen, was das Document Object Model ist und wie Sie es manipulieren, um nützliche Funktionalitäten zu erstellen.

## Siehe auch

Es gibt viele weitere Funktionen, die Sie zur Manipulation Ihrer Dokumente verwenden können. Schauen Sie sich einige unserer Referenzen an und sehen Sie, was Sie entdecken können:

- [`Document`](/de/docs/Web/API/Document)
- [`Window`](/de/docs/Web/API/Window)
- [`Node`](/de/docs/Web/API/Node)
- [`HTMLElement`](/de/docs/Web/API/HTMLElement), [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement), [`HTMLImageElement`](/de/docs/Web/API/HTMLImageElement) usw.

(Siehe unser [Web-API-Index](/de/docs/Web/API) für die vollständige Liste der auf MDN dokumentierten Web-APIs!)

{{PreviousMenuNext("Learn/JavaScript/Client-side_web_APIs/Introduction", "Learn/JavaScript/Client-side_web_APIs/Fetching_data", "Learn/JavaScript/Client-side_web_APIs")}}
