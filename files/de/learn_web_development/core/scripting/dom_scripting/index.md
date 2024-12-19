---
title: Einführung in das DOM-Scripting
slug: Learn_web_development/Core/Scripting/DOM_scripting
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{LearnSidebar}}

{{PreviousMenuNext("Learn_web_development/Core/Scripting/Object_basics","Learn_web_development/Core/Scripting/Network_requests", "Learn_web_development/Core/Scripting")}}

Beim Schreiben von Webseiten und -apps ist es häufig nötig, die Dokumentenstruktur in irgendeiner Weise zu ändern. Dies geschieht in der Regel durch die Manipulation des Document Object Model (DOM) mittels einer Reihe von integrierten Browser-APIs zur Steuerung von HTML und Styling-Informationen. In diesem Artikel führen wir Sie in das **DOM-Scripting** ein.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>Ein Verständnis von <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a> und den <a href="/de/docs/Learn_web_development/Core/Styling_basics">Grundlagen von CSS</a>, Vertrautheit mit den JavaScript-Grundlagen, wie sie in den vorherigen Lektionen behandelt wurden.</td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Was das DOM ist — die interne Darstellung des HTML-Aufbaus eines Dokuments als Hierarchie von Objekten im Browser.</li>
          <li>Die wichtigen Teile eines Webbrowsers, wie sie in JavaScript dargestellt sind — <code>Navigator</code>, <code>Window</code> und <code>Document</code>.</li>
          <li>Wie DOM-Knoten sich relativ zueinander im DOM-Baum befinden — Wurzel, Elternteil, Kind, Geschwister und Nachkommen.</li>
          <li>Referenzen zu DOM-Knoten abrufen, neue Knoten erstellen, Knoten und Attribute hinzufügen und entfernen.</li>
          <li>Manipulation von CSS-Stilen mit JavaScript.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Die wichtigen Teile eines Webbrowsers

Webbrowser sind sehr komplexe Softwarestücke mit vielen beweglichen Teilen, von denen viele von einem Webentwickler nicht mit JavaScript gesteuert oder manipuliert werden können. Sie könnten denken, dass solche Einschränkungen eine schlechte Sache sind, aber Browser sind aus guten Gründen, hauptsächlich im Zusammenhang mit Sicherheit, eingeschränkt. Stellen Sie sich vor, eine Website könnte auf Ihre gespeicherten Passwörter oder andere sensible Informationen zugreifen und sich bei Websites anmelden, als wären Sie es?

Trotz der Einschränkungen bieten Web-APIs uns trotzdem Zugang zu vielen Funktionen, die es ermöglichen, viele Dinge mit Webseiten zu tun. Es gibt einige wirklich offensichtlich nützliche Teile, auf die Sie regelmäßig in Ihrem Code verweisen werden – betrachten Sie das folgende Diagramm, das die Hauptteile eines Browsers darstellt, die direkt am Betrachten von Webseiten beteiligt sind:

![Wichtige Teile des Webbrowsers; das Dokument ist die Webseite. Das Fenster umfasst das gesamte Dokument und auch den Tab. Der Navigator ist der Browser, der das Fenster (das das Dokument umfasst) und alle anderen Fenster enthält.](document-window-navigator.png)

- Das Fenster ist der Browser-Tab, in den eine Webseite geladen wird; dies wird in JavaScript durch das [`Window`](/de/docs/Web/API/Window)-Objekt repräsentiert. Mit den auf diesem Objekt verfügbaren Methoden können Sie Dinge wie die Größe des Fensters zurückgeben (siehe [`Window.innerWidth`](/de/docs/Web/API/Window/innerWidth) und [`Window.innerHeight`](/de/docs/Web/API/Window/innerHeight)), das in dieses Fenster geladene Dokument manipulieren, für dieses Dokument spezifische Daten auf Client-Seite speichern (zum Beispiel unter Verwendung einer lokalen Datenbank oder eines anderen Speichermediums), einen [Ereignis-Handler](/de/docs/Learn_web_development/Core/Scripting/Events) an das aktuelle Fenster anhängen und mehr.
- Der Navigator repräsentiert den Zustand und die Identität des Browsers (d. h. den User-Agent) auf dem Web. In JavaScript wird dies durch das [`Navigator`](/de/docs/Web/API/Navigator)-Objekt repräsentiert. Sie können dieses Objekt verwenden, um Dinge wie die bevorzugte Sprache des Benutzers, einen Medienstream von der Webcam des Benutzers usw. abzurufen.
- Das Dokument (im Browser durch das DOM repräsentiert) ist die tatsächliche Seite, die in das Fenster geladen wurde, und wird in JavaScript durch das [`Document`](/de/docs/Web/API/Document)-Objekt dargestellt. Mit diesem Objekt können Sie Informationen über das HTML und CSS zurückgeben und manipulieren, die das Dokument ausmachen, beispielsweise eine Referenz auf ein Element im DOM abrufen, seinen Textinhalt ändern, ihm neue Stile zuweisen, neue Elemente erstellen und als Kinder zum aktuellen Element hinzufügen oder es sogar ganz löschen.

In diesem Artikel konzentrieren wir uns hauptsächlich auf die Manipulation des Dokuments, aber wir werden auch ein paar andere nützliche Dinge zeigen.

## Das Document Object Model

Lassen Sie uns einen kurzen Rückblick auf das Document Object Model (DOM) geben, das wir bereits früher im Kurs angesehen haben. Das Dokument, das in jedem Ihrer Browser-Tabs aktuell geladen ist, wird durch ein DOM dargestellt. Dies ist eine "Baumstruktur"-Darstellung, die vom Browser erstellt wird und den HTML-Aufbau leicht zugänglich für Programmiersprachen macht — zum Beispiel verwendet der Browser es selbst, um Stil- und andere Informationen auf die richtigen Elemente anzuwenden, während er eine Seite rendert, und Entwickler wie Sie können das DOM mit JavaScript manipulieren, nachdem die Seite gerendert ist.

Wir haben eine Beispielseite unter [dom-example.html](https://github.com/mdn/learning-area/blob/main/javascript/apis/document-manipulation/dom-example.html) erstellt ([sehen Sie es sich auch live an](https://mdn.github.io/learning-area/javascript/apis/document-manipulation/dom-example.html)). Versuchen Sie, dies in Ihrem Browser zu öffnen — es ist eine sehr einfache Seite, die ein {{htmlelement("section")}}-Element enthält, in dem Sie ein Bild und einen Absatz mit einem Link finden. Der HTML-Quellcode sieht folgendermaßen aus:

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

![Baumstruktur-Darstellung des Document Object Model: Der oberste Knoten ist der doctype und das HTML-Element. Kinderknoten des HTML umfassen head und body. Jedes Kind-Element ist ein Zweig. Auch alle Textangaben, sogar Leerzeichen, werden gezeigt.](dom-screenshot.png)

> [!NOTE]
> Dieses DOM-Baumdiagramm wurde mit Ian Hicksons [Live DOM viewer](https://software.hixie.ch/utilities/js/live-dom-viewer/) erstellt.

Jeder Eintrag im Baum wird als **Knoten** bezeichnet. Sie können im obigen Diagramm sehen, dass einige Knoten Elemente repräsentieren (identifiziert als `HTML`, `HEAD`, `META` und so weiter) und andere Text darstellen (identifiziert als `#text`). Es gibt [weitere Knotentypen](/de/docs/Web/API/Node/nodeType), aber dies sind die Haupttypen, denen Sie begegnen werden.

Knoten werden auch nach ihrer Position im Baum relativ zu anderen Knoten bezeichnet:

- **Wurzelknoten**: Der oberste Knoten im Baum, der im Falle von HTML immer der `HTML`-Knoten ist (andere Markup-Vokabulare wie SVG und benutzerdefiniertes XML werden andere Wurzelelemente haben).
- **Kindknoten**: Ein Knoten _direkt_ innerhalb eines anderen Knotens. Zum Beispiel ist `IMG` ein Kind von `SECTION` im obigen Beispiel.
- **Nachkommenknoten**: Ein Knoten _irgendwo_ innerhalb eines anderen Knotens. Zum Beispiel ist `IMG` ein Kind von `SECTION` im obigen Beispiel und es ist auch ein Nachkomme. `IMG` ist kein Kind von `BODY`, da es zwei Ebenen tiefer im Baum ist, aber es ist ein Nachkomme von `BODY`.
- **Elternknoten**: Ein Knoten, der einen anderen Knoten in sich hat. Zum Beispiel ist `BODY` der Elternknoten von `SECTION` im obigen Beispiel.
- **Geschwisterknoten**: Knoten, die auf derselben Ebene unter demselben Elternknoten im DOM-Baum sitzen. Zum Beispiel sind `IMG` und `P` Geschwister im obigen Beispiel.

Es ist nützlich, sich mit dieser Terminologie vertraut zu machen, bevor Sie mit dem DOM arbeiten, da einige der Codebegriffe, die Sie kennenlernen werden, sie verwenden. Sie werden ihnen auch in CSS begegnen (z. B. Nachkommen-Selektor, Kind-Selektor).

## Aktives Lernen: Grundlegende DOM-Manipulation

Um mit dem Lernen über DOM-Manipulation zu beginnen, starten wir mit einem praktischen Beispiel.

1. Nehmen Sie eine lokale Kopie der [dom-example.html-Seite](https://github.com/mdn/learning-area/blob/main/javascript/apis/document-manipulation/dom-example.html) und des dazugehörigen [Bildes](https://github.com/mdn/learning-area/blob/main/javascript/apis/document-manipulation/dinosaur.png).
2. Fügen Sie ein `<script></script>`-Element direkt über dem schließenden `</body>`-Tag hinzu.
3. Um ein Element innerhalb des DOM zu manipulieren, müssen Sie es zuerst auswählen und eine Referenz darauf in einer Variablen speichern. Fügen Sie innerhalb Ihres Skriptelements die folgende Zeile hinzu:

   ```js
   const link = document.querySelector("a");
   ```

4. Da wir nun die Elementreferenz in einer Variablen gespeichert haben, können wir beginnen, es mithilfe der ihm verfügbaren Eigenschaften und Methoden zu manipulieren (diese sind auf Schnittstellen wie [`HTMLAnchorElement`](/de/docs/Web/API/HTMLAnchorElement) im Fall von {{htmlelement("a")}}-Element, seiner allgemeineren Elternschnittstelle [`HTMLElement`](/de/docs/Web/API/HTMLElement) und [`Node`](/de/docs/Web/API/Node) — welche alle Knoten in einem DOM repräsentiert — definiert). Zuallererst ändern wir den Text innerhalb des Links, indem wir den Wert der [`Node.textContent`](/de/docs/Web/API/Node/textContent)-Eigenschaft aktualisieren. Fügen Sie die folgende Zeile unter der vorherigen hinzu:

   ```js
   link.textContent = "Mozilla Developer Network";
   ```

5. Wir sollten auch die URL ändern, auf die der Link verweist, damit sie beim Anklicken nicht an die falsche Stelle führt. Fügen Sie die folgende Zeile wieder am Ende hinzu:

   ```js
   link.href = "https://developer.mozilla.org";
   ```

Beachten Sie, dass es, wie bei vielen Dingen in JavaScript, viele Möglichkeiten gibt, ein Element auszuwählen und eine Referenz darauf in einer Variablen zu speichern. [`Document.querySelector()`](/de/docs/Web/API/Document/querySelector) ist der empfohlene moderne Ansatz. Es ist praktisch, weil Sie damit Elemente mithilfe von CSS-Selektoren auswählen können. Der obige `querySelector()`-Aufruf wählt das erste {{htmlelement("a")}}-Element aus, das im Dokument erscheint. Wenn Sie mehrere Elemente auswählen und Dinge damit tun möchten, könnten Sie [`Document.querySelectorAll()`](/de/docs/Web/API/Document/querySelectorAll) verwenden, das jedes Element im Dokument, das dem Selektor entspricht, matcht und Referenzen darauf in einem [Array](/de/docs/Learn_web_development/Core/Scripting/Arrays)-ähnlichen Objekt namens [`NodeList`](/de/docs/Web/API/NodeList) speichert.

Es gibt ältere Methoden, um Elementreferenzen zu erhalten, wie etwa:

- [`Document.getElementById()`](/de/docs/Web/API/Document/getElementById), das ein Element mit einem gegebenen `id`-Attributwert auswählt, z. B. `<p id="myId">Mein Absatz</p>`. Die ID wird der Funktion als Parameter übergeben, d. h. `const elementRef = document.getElementById('myId')`.
- [`Document.getElementsByTagName()`](/de/docs/Web/API/Document/getElementsByTagName), das ein array-ähnliches Objekt zurückgibt, das alle Elemente auf der Seite eines gegebenen Typs enthält, z. B. `<p>`s, `<a>`s usw. Der Elementtyp wird der Funktion als Parameter übergeben, z. B. `const elementRefArray = document.getElementsByTagName('p')`.

Diese zwei funktionieren besser in älteren Browsern als die modernen Methoden wie `querySelector()`, sind aber nicht so praktisch. Sehen Sie sich um und sehen, welche anderen Sie finden können!

### Erstellen und Platzieren neuer Knoten

Das oben Beschriebene hat Ihnen einen kleinen Vorgeschmack darauf gegeben, was Sie tun können, aber lassen Sie uns weitergehen suchen, wie wir neue Elemente erstellen können.

1. Kehren wir zum aktuellen Beispiel zurück, und starten damit, dass wir eine Referenz zu unserem {{htmlelement("section")}}-Element erhalten — fügen Sie den folgenden Code unten in Ihrem aktuellen Skript hinzu (tun Sie dasselbe mit den anderen Zeilen ebenfalls):

   ```js
   const sect = document.querySelector("section");
   ```

2. Nun lassen Sie uns einen neuen Absatz mittels [`Document.createElement()`](/de/docs/Web/API/Document/createElement) erstellen und ihm etwas Textinhalt ähnlich wie zuvor geben:

   ```js
   const para = document.createElement("p");
   para.textContent = "We hope you enjoyed the ride.";
   ```

3. Sie können jetzt den neuen Absatz am Ende der Sektion mit [`Node.appendChild()`](/de/docs/Web/API/Node/appendChild) anhängen:

   ```js
   sect.appendChild(para);
   ```

4. Schließlich für diesen Teil, fügen wir einen Textknoten zum Absatz hinzu, in dem der Link sitzt, um den Satz schön abzurunden. Zuerst erstellen wir den Textknoten mit [`Document.createTextNode()`](/de/docs/Web/API/Document/createTextNode):

   ```js
   const text = document.createTextNode(
     " — the premier source for web development knowledge.",
   );
   ```

5. Jetzt holen wir uns eine Referenz auf den Absatz, in dem sich der Link befindet, und fügen den Textknoten hinzu:

   ```js
   const linkPara = document.querySelector("p");
   linkPara.appendChild(text);
   ```

Das ist das meiste, was Sie zum Hinzufügen von Knoten zum DOM benötigen – Sie machen viel von diesen Methoden Gebrauch, wenn Sie dynamische Schnittstellen erstellen (wir werden später ein paar Beispiele anschauen).

### Verschieben und Entfernen von Elementen

Es kann Zeiten geben, in denen Sie Knoten verschieben oder sie ganz aus dem DOM löschen möchten. Dies ist durchaus möglich.

Wenn wir den Absatz mit dem Link darin an das Ende der Sektion verschieben wollten, könnten wir dies folgendermaßen tun:

```js
sect.appendChild(linkPara);
```

Dies verschiebt den Absatz an das untere Ende der Sektion. Sie könnten gedacht haben, dass es eine zweite Kopie davon machen würde, aber das ist nicht der Fall — `linkPara` ist eine Referenz auf die eine und einzige Kopie dieses Absatzes. Wenn Sie eine Kopie machen und diese ebenfalls hinzufügen wollten, müssten Sie stattdessen [`Node.cloneNode()`](/de/docs/Web/API/Node/cloneNode) verwenden.

Das Entfernen eines Knotens ist auch ziemlich einfach, zumindest wenn Sie eine Referenz auf den zu entfernenden Knoten und seinen Elternknoten haben. In unserem aktuellen Fall verwenden wir einfach [`Node.removeChild()`](/de/docs/Web/API/Node/removeChild), so:

```js
sect.removeChild(linkPara);
```

Wenn Sie einen Knoten basierend nur auf einer Referenz auf sich selbst entfernen möchten, was ziemlich häufig vorkommt, können Sie [`Element.remove()`](/de/docs/Web/API/Element/remove) verwenden:

```js
linkPara.remove();
```

Diese Methode wird nicht in älteren Browsern unterstützt. Sie haben keine Methode, um einem Knoten zu sagen, dass er sich selbst entfernen soll, also müssten Sie folgendes tun.

```js
linkPara.parentNode.removeChild(linkPara);
```

Versuchen Sie, die obigen Zeilen zu Ihrem Code hinzuzufügen.

### Manipulieren von Stilen

Es ist möglich, CSS-Stile über JavaScript auf verschiedene Weise zu manipulieren.

Zu Beginn können Sie eine Liste aller Stile, die an ein Dokument angehängt sind, über [`Document.stylesheets`](/de/docs/Web/API/Document/stylesheets) erhalten, was ein array-ähnliches Objekt mit [`CSSStyleSheet`](/de/docs/Web/API/CSSStyleSheet)-Objekten zurückgibt. Sie können dann Stile hinzufügen/entfernen, wie gewünscht. Allerdings werden wir diese Funktionen nicht weiter ausführen, weil sie eine etwas archaische und schwierige Art der Stilmanipulation darstellen. Es gibt viel einfachere Wege.

Der erste Weg ist das Hinzufügen von Inline-Stilen direkt zu den Elementen, die Sie dynamisch stylen möchten. Das geschieht mit der [`HTMLElement.style`](/de/docs/Web/API/HTMLElement/style)-Eigenschaft, die Inline-Styling-Informationen für jedes Element im Dokument enthält. Sie können Eigenschaften dieses Objekts setzen, um Elementstile direkt zu aktualisieren.

1. Als Beispiel, versuchen Sie diese Zeilen zu unserem laufenden Beispiel hinzuzufügen:

   ```js
   para.style.color = "white";
   para.style.backgroundColor = "black";
   para.style.padding = "10px";
   para.style.width = "250px";
   para.style.textAlign = "center";
   ```

2. Laden Sie die Seite neu und Sie werden sehen, dass die Stile auf den Absatz angewendet wurden. Wenn Sie sich diesen Absatz im [Seiteninspektor/DOM-Inspektor Ihres Browsers](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/index.html) ansehen, werden Sie sehen, dass diese Zeilen tatsächlich Inline-Stile zum Dokument hinzufügen:

   ```html
   <p
     style="color: white; background-color: black; padding: 10px; width: 250px; text-align: center;">
     We hope you enjoyed the ride.
   </p>
   ```

> [!NOTE]
> Beachten Sie, wie die JavaScript-Eigenschaftsversionen der CSS-Stile in {{Glossary("camel_case", "lower camel case")}} geschrieben sind, während die CSS-Versionen mit Bindestrichen ({{Glossary("kebab_case", "kebab-case")}}) geschrieben sind (z. B. `backgroundColor` versus `background-color`). Achten Sie darauf, sich nicht zu verwechseln, sonst funktioniert es nicht.

Es gibt eine weitere häufige Methode, um Stile auf Ihrem Dokument dynamisch zu manipulieren, die wir nun betrachten werden.

1. Löschen Sie die vorherigen fünf Zeilen, die Sie dem JavaScript hinzugefügt haben.
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

3. Nun wenden wir uns einer sehr nützlichen Methode für die allgemeine HTML-Manipulation zu — [`Element.setAttribute()`](/de/docs/Web/API/Element/setAttribute) — diese nimmt zwei Argumente, das Attribut, das Sie auf dem Element setzen möchten, und den Wert, den Sie setzen möchten. In diesem Fall werden wir den Klassennamen highlight auf unseren Absatz setzen:

   ```js
   para.setAttribute("class", "highlight");
   ```

4. Aktualisieren Sie Ihre Seite, und Sie sehen keine Änderung — das CSS wird immer noch auf den Absatz angewendet, aber diesmal, indem ihm eine Klasse gegeben wird, die von unserer CSS-Regel ausgewählt wird, nicht als Inline-CSS-Stile.

Welche Methode Sie wählen, liegt bei Ihnen; beide haben ihre Vor- und Nachteile. Die erste Methode erfordert weniger Setup und ist gut für einfache Anwendungen geeignet, während die zweite Methode puristischer ist (kein Mischen von CSS und JavaScript, keine Inline-Stile, die als schlechte Praxis angesehen werden). Wenn Sie anfangen, größere und kompliziertere Apps zu erstellen, werden Sie wahrscheinlich damit beginnen, die zweite Methode häufiger zu verwenden, aber es ist wirklich Ihre Entscheidung.

An diesem Punkt haben wir eigentlich noch nichts Nützliches gemacht! Es hat keinen Sinn, statische Inhalte mit JavaScript zu erstellen — Sie könnten sie einfach in Ihr HTML schreiben und JavaScript nicht verwenden. Es ist komplexer als HTML, und das Erstellen Ihres Inhalts mit JavaScript hat auch andere Probleme, die damit verbunden sind (wie die Unleserlichkeit für Suchmaschinen).

Im nächsten Abschnitt werden wir uns eine praktischere Anwendung der DOM-APIs ansehen.

> [!NOTE]
> Sie finden unsere [fertige Version der dom-example.html](https://github.com/mdn/learning-area/blob/main/javascript/apis/document-manipulation/dom-example-manipulated.html) Demo auf GitHub ([sehen Sie es sich auch live an](https://mdn.github.io/learning-area/javascript/apis/document-manipulation/dom-example-manipulated.html)).

## Aktives Lernen: Eine dynamische Einkaufsliste

In dieser Herausforderung möchten wir ein einfaches Einkaufsliste-Beispiel erstellen, das es ermöglicht, Elemente dynamisch zur Liste hinzuzufügen, indem ein Formulareingabefeld und eine Schaltfläche verwendet werden. Wenn Sie ein Element in die Eingabe hinzufügen und die Schaltfläche drücken:

- Das Element sollte in der Liste erscheinen.
- Jedes Element sollte eine Schaltfläche erhalten, die gedrückt werden kann, um dieses Element von der Liste zu löschen.
- Die Eingabe sollte geleert und fokussiert werden, damit Sie ein weiteres Element eingeben können.

Das fertige Demo wird ungefähr so aussehen:

![Demo-Layout einer Einkaufsliste. Eine 'meine Einkaufsliste' Überschrift gefolgt von 'Einen neuen Artikel eingeben' mit einem Eingabefeld und 'Artikel hinzufügen' Schaltfläche. Die Liste der bereits hinzugefügten Artikel ist unten, jeder mit einer entsprechenden Löschen-Schaltfläche. ](shopping-list.png)

Um die Übung zu absolvieren, folgen Sie den untenstehenden Schritten und stellen Sie sicher, dass die Liste wie beschrieben funktioniert.

1. Laden Sie zunächst eine Kopie unserer [shopping-list.html](https://github.com/mdn/learning-area/blob/main/javascript/apis/document-manipulation/shopping-list.html) Startdatei herunter und machen Sie eine Kopie davon irgendwo. Sie werden sehen, dass es ein wenig CSS, ein Div mit einem Label, Eingabe und Schaltfläche, und eine leere Liste und ein {{htmlelement("script")}} Element enthält. Sie werden alle Ihre Ergänzungen im Skript vornehmen.
2. Erstellen Sie drei Variablen, die Referenzen auf die Liste ({{htmlelement("ul")}}), {{htmlelement("input")}}, und {{htmlelement("button")}} Elemente halten.
3. Erstellen Sie eine [Funktion](/de/docs/Learn_web_development/Core/Scripting/Functions), die als Antwort auf das Drücken der Schaltfläche ausgeführt wird.
4. Speichern Sie im Funktionskörper zunächst den aktuellen [Wert](/de/docs/Web/API/HTMLInputElement/value) des Eingabeelements in einer Variablen.
5. Leeren Sie als nächstes das Eingabeelement, indem Sie seinen Wert auf einen leeren String setzen — `''`.
6. Erstellen Sie drei neue Elemente — ein Listenelement ({{htmlelement('li')}}), {{htmlelement('span')}} und {{htmlelement('button')}}, und speichern Sie sie in Variablen.
7. Fügen Sie das Span und den Button als Kinder des Listenelements hinzu.
8. Setzen Sie den Textinhalt des Span auf den zuvor gespeicherten Wert des Eingabeelements, und den Textinhalt des Button auf 'Löschen'.
9. Fügen Sie das Listenelement als Kind der Liste hinzu.
10. Hängen Sie einen Ereignishandler an die Löschen-Schaltfläche an, sodass, wenn sie angeklickt wird, das gesamte Listenelement (`<li>...</li>`) gelöscht wird.
11. Verwenden Sie schließlich die [`focus()`](/de/docs/Web/API/HTMLElement/focus)-Methode, um das Eingabeelement für die Eingabe des nächsten Einkaufslisten-Artikels zu fokussieren.

> [!NOTE]
> Wenn Sie wirklich nicht weiterkommen, werfen Sie einen Blick auf unsere [fertige Einkaufsliste](https://github.com/mdn/learning-area/blob/main/javascript/apis/document-manipulation/shopping-list-finished.html) ([sehen Sie es auch live ausführen](https://mdn.github.io/learning-area/javascript/apis/document-manipulation/shopping-list-finished.html)).

## Zusammenfassung

Wir haben das Ende unseres Studiums der Dokument- und DOM-Manipulation erreicht. An diesem Punkt sollten Sie verstehen, was die wichtigen Teile eines Webbrowsers im Hinblick auf die Steuerung von Dokumenten und anderen Aspekten der Web-Erfahrung des Benutzers sind. Am wichtigsten ist, dass Sie verstehen sollten, was das Document Object Model ist und wie man es manipuliert, um nützliche Funktionalität zu schaffen.

## Siehe auch

Es gibt viele weitere Funktionen, die Sie zur Manipulation Ihrer Dokumente verwenden können. Schauen Sie sich einige unserer Referenzen an und sehen Sie, was Sie entdecken können:

- [`Document`](/de/docs/Web/API/Document)
- [`Window`](/de/docs/Web/API/Window)
- [`Node`](/de/docs/Web/API/Node)
- [`HTMLElement`](/de/docs/Web/API/HTMLElement), [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement), [`HTMLImageElement`](/de/docs/Web/API/HTMLImageElement), etc.

(Siehe unser [Web-API-Index](/de/docs/Web/API) für die vollständige Liste der auf MDN dokumentierten Web-APIs!)

{{PreviousMenuNext("Learn_web_development/Core/Scripting/Object_basics","Learn_web_development/Core/Scripting/Network_requests", "Learn_web_development/Core/Scripting")}}
