---
title: Einführung in das DOM-Scripting
short-title: DOM scripting
slug: Learn_web_development/Core/Scripting/DOM_scripting
l10n:
  sourceCommit: 48d220a8cffdfd5f088f8ca89724a9a92e34d8c0
---

{{PreviousMenuNext("Learn_web_development/Core/Scripting/Object_basics","Learn_web_development/Core/Scripting/Network_requests", "Learn_web_development/Core/Scripting")}}

Beim Schreiben von Webseiten und Apps ist eine der häufigsten Aufgaben, die Sie durchführen möchten, die Änderung der Dokumentstruktur auf irgendeine Weise. Dies wird normalerweise durch die Manipulation des Document Object Model (DOM) über einen Satz von integrierten Browser-APIs zum Steuern von HTML und Styling-Informationen erledigt. In diesem Artikel lernen Sie das **DOM-Scripting** kennen.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>Ein Verständnis für <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a> und die <a href="/de/docs/Learn_web_development/Core/Styling_basics">Grundlagen von CSS</a>, sowie Vertrautheit mit JavaScript-Grundlagen, wie in früheren Lektionen behandelt.</td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Was das DOM ist — die interne Darstellung der HTML-Struktur des Dokuments durch den Browser als Hierarchie von Objekten.</li>
          <li>Die wichtigen Teile eines Webbrowsers, die in JavaScript dargestellt werden — <code>Navigator</code>, <code>Window</code> und <code>Document</code>.</li>
          <li>Wie DOM-Knoten relativ zueinander im DOM-Baum existieren — Wurzel, Eltern, Kind, Geschwister und Nachkomme.</li>
          <li>Referenzen zu DOM-Knoten erhalten, neue Knoten erstellen, Knoten und Attribute hinzufügen und entfernen.</li>
          <li>CSS-Stile mit JavaScript manipulieren.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Die wichtigen Teile eines Webbrowsers

Webbrowser sind sehr komplexe Softwareprogramme mit vielen beweglichen Teilen, von denen viele nicht von einem Webentwickler mit JavaScript gesteuert oder manipuliert werden können. Sie könnten denken, dass solche Einschränkungen eine schlechte Sache sind, aber Browser sind aus guten Gründen gesperrt, die sich hauptsächlich um Sicherheit drehen. Stellen Sie sich vor, wenn eine Website Zugriff auf Ihre gespeicherten Passwörter oder andere sensible Informationen hätte und sich auf Websites einloggte, als wären Sie es?

Trotz der Einschränkungen geben uns Web-APIs immer noch Zugriff auf viele Funktionen, die es uns ermöglichen, viele Dinge mit Webseiten zu tun. Es gibt einige wirklich offensichtliche Teile, auf die Sie regelmäßig in Ihrem Code verweisen werden — betrachten Sie das folgende Diagramm, das die Hauptteile eines Webbrowsers darstellt, die direkt am Betrachten von Webseiten beteiligt sind:

![Wichtige Teile eines Webbrowsers; das Dokument ist die Webseite. Das Fenster umfasst das gesamte Dokument und auch den Tab. Der Navigator ist der Browser, der das Fenster (das das Dokument umfasst) und alle anderen Fenster enthält.](document-window-navigator.png)

- Das Fenster ist der Browser-Tab, in den eine Webseite geladen wird; dies wird in JavaScript durch das [`Window`](/de/docs/Web/API/Window)-Objekt dargestellt. Mit den auf diesem Objekt verfügbaren Methoden können Sie Dinge tun wie die Größe des Fensters zurückgeben (siehe [`Window.innerWidth`](/de/docs/Web/API/Window/innerWidth) und [`Window.innerHeight`](/de/docs/Web/API/Window/innerHeight)), das Dokument manipulieren, das in diesem Fenster geladen ist, Daten spezifisch zu diesem Dokument clientseitig speichern (zum Beispiel mit einer lokalen Datenbank oder einem anderen Speichermedium), einen [Ereignishandler](/de/docs/Learn_web_development/Core/Scripting/Events) an das aktuelle Fenster anhängen und mehr.
- Der Navigator stellt den Zustand und die Identität des Browsers (d.h. des User-Agents) dar, wie er im Web existiert. In JavaScript wird dies durch das [`Navigator`](/de/docs/Web/API/Navigator)-Objekt dargestellt. Sie können dieses Objekt verwenden, um Dinge wie die bevorzugte Sprache des Benutzers oder einen Medienstream von der Webcam des Benutzers abzurufen.
- Das Dokument (durch das DOM in Browsern dargestellt) ist die eigentliche Seite, die in das Fenster geladen wird, und wird in JavaScript durch das [`Document`](/de/docs/Web/API/Document)-Objekt dargestellt. Sie können dieses Objekt verwenden, um Informationen über das HTML und das CSS, aus denen das Dokument besteht, zurückzugeben und zu manipulieren, zum Beispiel eine Referenz zu einem Element im DOM zu erhalten, seinen Textinhalt zu ändern, neue Stile darauf anzuwenden, neue Elemente zu erstellen und sie als Kinder an das aktuelle Element anzuhängen oder es sogar ganz zu löschen.

In diesem Artikel konzentrieren wir uns hauptsächlich auf die Manipulation des Dokuments, aber wir zeigen noch einige andere nützliche Dinge.

## Das Document Object Model

Lassen Sie uns einen kurzen Rückblick auf das Document Object Model (DOM) geben, das wir auch früher im Kurs betrachtet haben. Das derzeit in jedem Ihrer Browser-Tabs geladene Dokument wird durch ein DOM dargestellt. Dies ist eine "Baumstruktur"-Darstellung, die vom Browser erstellt wird und es der HTML-Struktur ermöglicht, leicht von Programmiersprachen abgerufen zu werden — beispielsweise verwendet der Browser selbst diese Struktur, um Stilinformationen und andere Informationen auf die richtigen Elemente anzuwenden, während er eine Seite rendert, und Entwickler wie Sie können das DOM mit JavaScript manipulieren, nachdem die Seite gerendert wurde.

Wir haben eine Beispielseite unter [dom-example.html](https://github.com/mdn/learning-area/blob/main/javascript/apis/document-manipulation/dom-example.html) erstellt ([auch live sehen](https://mdn.github.io/learning-area/javascript/apis/document-manipulation/dom-example.html)). Versuchen Sie, dies in Ihrem Browser zu öffnen — es ist eine sehr einfache Seite, die ein {{htmlelement("section")}}-Element enthält, innerhalb dessen sich ein Bild und ein Absatz mit einem Link befinden. Der HTML-Quellcode sieht folgendermaßen aus:

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

![Baumstruktur-Darstellung des Document Object Model: Der oberste Knoten ist der Dokumenttyp und das HTML-Element. Die Kindknoten des HTML beinhalten den Kopf und den Körper. Jedes Kindelement ist ein Zweig. Alle Texte, sogar Leerzeichen, werden ebenfalls angezeigt.](dom-screenshot.png)

> [!NOTE]
> Dieses DOM-Baumschema wurde mit Ian Hicksons [Live DOM Viewer](https://software.hixie.ch/utilities/js/live-dom-viewer/) erstellt.

Jeder Eintrag im Baum wird als **Knoten** bezeichnet. Sie können im obigen Diagramm sehen, dass einige Knoten Elemente darstellen (als `HTML`, `HEAD`, `META` und so weiter identifiziert) und andere Text (als `#text` identifiziert). Es gibt [weitere Knotentypen](/de/docs/Web/API/Node/nodeType), aber dies sind die häufigsten, denen Sie begegnen werden.

Knoten werden auch nach ihrer Position im Baum relativ zu anderen Knoten bezeichnet:

- **Wurzelknoten**: Der oberste Knoten im Baum, der im Falle von HTML immer der `HTML`-Knoten ist (andere Markup-Vokabulare wie SVG und benutzerdefinierte XML haben unterschiedliche Wurzelelemente).
- **Kindknoten**: Ein Knoten, der _direkt_ innerhalb eines anderen Knotens liegt. Zum Beispiel ist `IMG` ein Kind von `SECTION` im obigen Beispiel.
- **Nachkommenknoten**: Ein Knoten, der sich _irgendwo_ innerhalb eines anderen Knotens befindet. Zum Beispiel ist `IMG` ein Kind von `SECTION` im obigen Beispiel, und es ist auch ein Nachkomme. `IMG` ist kein Kind von `BODY`, da es zwei Ebenen darunter im Baum liegt, aber es ist ein Nachkomme von `BODY`.
- **Elternknoten**: Ein Knoten, der einen anderen Knoten in sich hat. Zum Beispiel ist `BODY` der Elternknoten von `SECTION` im obigen Beispiel.
- **Geschwisterknoten**: Knoten, die sich auf derselben Ebene unter demselben Elternknoten im DOM-Baum befinden. Zum Beispiel sind `IMG` und `P` Geschwister im obigen Beispiel.

Es ist nützlich, sich mit dieser Terminologie vertraut zu machen, bevor man mit dem DOM arbeitet, da eine Reihe von Codebegriffen, denen Sie begegnen werden, diese verwenden. Sie werden ihnen auch in CSS begegnen (z. B. Nachkommauswahl, Kinderauswahl).

## Aktives Lernen: Grundlegende DOM-Manipulation

Um mit dem Lernen über DOM-Manipulation zu beginnen, beginnen wir mit einem praktischen Beispiel.

1. Nehmen Sie eine lokale Kopie der [Dom-Beispielseite](https://github.com/mdn/learning-area/blob/main/javascript/apis/document-manipulation/dom-example.html) und des [Bildes](https://github.com/mdn/learning-area/blob/main/javascript/apis/document-manipulation/dinosaur.png), das dazu gehört.
2. Fügen Sie ein `<script></script>` Element direkt über dem schließenden `</body>`-Tag hinzu.
3. Um ein Element innerhalb des DOM zu manipulieren, müssen Sie es zuerst auswählen und eine Referenz darauf in einer Variablen speichern. Fügen Sie in Ihrem Skriptelement die folgende Zeile hinzu:

   ```js
   const link = document.querySelector("a");
   ```

4. Jetzt haben wir die Elementreferenz in einer Variablen gespeichert und können mit der Manipulation beginnen, indem wir die Eigenschaften und Methoden verwenden, die ihr zur Verfügung stehen (diese sind auf Schnittstellen wie [`HTMLAnchorElement`](/de/docs/Web/API/HTMLAnchorElement) im Fall von {{htmlelement("a")}}-Elementen, seiner allgemeineren Elternschnittstelle [`HTMLElement`](/de/docs/Web/API/HTMLElement) und [`Node`](/de/docs/Web/API/Node) definiert — die alle Knoten in einem DOM darstellt). Zuerst ändern wir den Text im Link, indem wir den Wert der [`Node.textContent`](/de/docs/Web/API/Node/textContent)-Eigenschaft aktualisieren. Fügen Sie die folgende Zeile unter der vorherigen hinzu:

   ```js
   link.textContent = "Mozilla Developer Network";
   ```

5. Wir sollten auch die URL ändern, auf die der Link zeigt, damit er beim Anklicken nicht an die falsche Stelle geht. Fügen Sie die folgende Zeile, wieder am Ende, hinzu:

   ```js
   link.href = "https://developer.mozilla.org";
   ```

Beachten Sie, dass, wie bei vielen Dingen in JavaScript, es viele Möglichkeiten gibt, ein Element auszuwählen und eine Referenz darauf in einer Variablen zu speichern. [`Document.querySelector()`](/de/docs/Web/API/Document/querySelector) ist die empfohlene moderne Methode. Es ist praktisch, weil es Ihnen erlaubt, Elemente mit CSS-Selektoren auszuwählen. Der obige `querySelector()`-Aufruf wird das erste {{htmlelement("a")}}-Element auswählen, das im Dokument erscheint. Wenn Sie mehrere Elemente auswählen und Dinge mit ihnen tun wollten, könnten Sie [`Document.querySelectorAll()`](/de/docs/Web/API/Document/querySelectorAll) verwenden, das jedes Element im Dokument auswählt, das dem Selektor entspricht, und Referenzen darauf in einem [array](/de/docs/Learn_web_development/Core/Scripting/Arrays)-ähnlichen Objekt namens [`NodeList`](/de/docs/Web/API/NodeList) speichert.

Es gibt ältere Methoden, um Elementreferenzen zu erhalten, wie:

- [`Document.getElementById()`](/de/docs/Web/API/Document/getElementById), die ein Element mit einem bestimmten `id`-Attributswert auswählt, z. B. `<p id="myId">Mein Absatz</p>`. Die ID wird als Parameter an die Funktion übergeben, d.h. `const elementRef = document.getElementById('myId')`.
- [`Document.getElementsByTagName()`](/de/docs/Web/API/Document/getElementsByTagName), die ein array-ähnliches Objekt zurückgibt, das alle Elemente einer bestimmten Art auf der Seite enthält, zum Beispiel `<p>`s, `<a>`s usw. Der Elementtyp wird als Parameter an die Funktion übergeben, d.h. `const elementRefArray = document.getElementsByTagName('p')`.

Diese beiden Methoden funktionieren in älteren Browsern besser als die modernen Methoden wie `querySelector()`, sind aber nicht so praktisch. Schauen Sie nach und sehen Sie, welche anderen Sie finden können!

### Erstellen und Platzieren neuer Knoten

Das Obige hat Ihnen einen kleinen Vorgeschmack darauf gegeben, was Sie tun können, aber lassen Sie uns weiter gehen und sehen, wie wir neue Elemente erstellen können.

1. Zurück zu unserem aktuellen Beispiel, beginnen wir mit dem Abrufen einer Referenz zu unserem {{htmlelement("section")}}-Element — fügen Sie den folgenden Code am Ende Ihres bestehenden Skripts hinzu (tun Sie dasselbe mit den anderen Zeilen):

   ```js
   const sect = document.querySelector("section");
   ```

2. Jetzt erstellen wir einen neuen Absatz mit [`Document.createElement()`](/de/docs/Web/API/Document/createElement) und geben ihm etwas Textinhalt auf die gleiche Weise wie zuvor:

   ```js
   const para = document.createElement("p");
   para.textContent = "We hope you enjoyed the ride.";
   ```

3. Sie können den neuen Absatz jetzt am Ende des Abschnitts mit [`Node.appendChild()`](/de/docs/Web/API/Node/appendChild) anhängen:

   ```js
   sect.appendChild(para);
   ```

4. Schließlich für diesen Teil fügen wir ein Textknoten in den Absatz ein, in dem der Link sitzt, um den Satz schön abzurunden. Zuerst erstellen wir den Textknoten mit [`Document.createTextNode()`](/de/docs/Web/API/Document/createTextNode):

   ```js
   const text = document.createTextNode(
     " — the premier source for web development knowledge.",
   );
   ```

5. Jetzt holen wir uns eine Referenz zu dem Absatz, in dem der Link ist, und fügen den Textknoten darin ein:

   ```js
   const linkPara = document.querySelector("p");
   linkPara.appendChild(text);
   ```

Das ist das meiste, was Sie zum Hinzufügen von Knoten zum DOM benötigen — Sie werden diese Methoden viel nutzen, wenn Sie dynamische Schnittstellen erstellen (wir werden später einige Beispiele betrachten).

### Verschieben und Entfernen von Elementen

Es kann Zeiten geben, in denen Sie Knoten verschieben oder sie ganz aus dem DOM löschen möchten. Das ist durchaus möglich.

Wenn wir den Absatz mit dem Link darin an das Ende des Abschnitts verschieben wollten, könnten wir das so machen:

```js
sect.appendChild(linkPara);
```

Dies verschiebt den Absatz an das Ende des Abschnitts. Sie könnten gedacht haben, dass es eine zweite Kopie davon machen würde, aber das ist nicht der Fall — `linkPara` ist eine Referenz auf die einzige Kopie dieses Absatzes. Wenn Sie eine Kopie machen und diese ebenfalls hinzufügen wollten, müssten Sie stattdessen [`Node.cloneNode()`](/de/docs/Web/API/Node/cloneNode) verwenden.

Das Entfernen eines Knotens ist ebenfalls recht einfach, zumindest wenn Sie eine Referenz auf den zu entfernenden Knoten und dessen Eltern haben. In unserem aktuellen Fall verwenden wir einfach [`Node.removeChild()`](/de/docs/Web/API/Node/removeChild), so:

```js
sect.removeChild(linkPara);
```

Wenn Sie einen Knoten basierend auf einer Referenz auf sich selbst entfernen möchten, was ziemlich häufig vorkommt, können Sie [`Element.remove()`](/de/docs/Web/API/Element/remove) verwenden:

```js
linkPara.remove();
```

Diese Methode wird in älteren Browsern nicht unterstützt. Sie haben keine Methode, um einem Knoten zu sagen, dass er sich selbst entfernen soll, also müssten Sie das folgende tun:

```js
linkPara.parentNode.removeChild(linkPara);
```

Versuchen Sie, die obigen Zeilen zu Ihrem Code hinzuzufügen.

### Manipulieren von Stilen

Es ist möglich, CSS-Stile über JavaScript auf verschiedene Weise zu manipulieren.

Zunächst können Sie eine Liste aller Stylesheets erhalten, die an ein Dokument angehängt sind, indem Sie [`Document.stylesheets`](/de/docs/Web/API/Document/styleSheets) verwenden, die ein array-ähnliches Objekt mit [`CSSStyleSheet`](/de/docs/Web/API/CSSStyleSheet)-Objekten zurückgibt. Sie können dann Styles hinzufügen oder entfernen, wie gewünscht. Wir werden jedoch nicht näher auf diese Funktionen eingehen, da sie eine etwas archaische und schwierige Methode sind, um Styles zu manipulieren. Es gibt viel einfachere Methoden.

Der erste Weg ist das Hinzufügen von Inline-Stilen direkt zu Elementen, die Sie dynamisch stylen möchten. Dies geschieht mit der [`HTMLElement.style`](/de/docs/Web/API/HTMLElement/style)-Eigenschaft, die inline Styling-Informationen für jedes Element im Dokument enthält. Sie können Eigenschaften dieses Objekts setzen, um Elementstile direkt zu aktualisieren.

1. Als Beispiel versuchen Sie, diese Zeilen zu unserem laufenden Beispiel hinzuzufügen:

   ```js
   para.style.color = "white";
   para.style.backgroundColor = "black";
   para.style.padding = "10px";
   para.style.width = "250px";
   para.style.textAlign = "center";
   ```

2. Laden Sie die Seite neu und Sie sehen, dass die Stile auf den Absatz angewendet wurden. Wenn Sie diesen Absatz im [Seiteninspektor/DOM-Inspektor](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/index.html) Ihres Browsers betrachten, werden Sie sehen, dass diese Zeilen tatsächlich Inline-Stile zum Dokument hinzufügen:

   ```html
   <p
     style="color: white; background-color: black; padding: 10px; width: 250px; text-align: center;">
     We hope you enjoyed the ride.
   </p>
   ```

> [!NOTE]
> Beachten Sie, wie die JavaScript-Eigenschaftsversionen der CSS-Stile in {{Glossary("camel_case", "Camel Case")}} geschrieben werden, während die CSS-Versionen mit Bindestrichen ({{Glossary("kebab_case", "Kebab-Case")}}) geschrieben sind (z. B. `backgroundColor` im Gegensatz zu `background-color`). Stellen Sie sicher, dass Sie diese nicht verwechseln, da Sie sonst nicht funktionieren werden.

Es gibt eine weitere übliche Methode, um Stile in Ihrem Dokument dynamisch zu manipulieren, die wir uns jetzt ansehen werden.

1. Löschen Sie die vorherigen fünf Zeilen, die Sie zu dem JavaScript hinzugefügt haben.
2. Fügen Sie das folgende in Ihr HTML-{{htmlelement("head")}} hinzu:

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

3. Nun wenden wir uns einer sehr nützlichen Methode zur allgemeinen HTML-Manipulation zu — [`Element.setAttribute()`](/de/docs/Web/API/Element/setAttribute) — diese nimmt zwei Argumente, das Attribut, das Sie auf dem Element setzen möchten, und den Wert, den Sie dafür festlegen möchten. In diesem Fall setzen wir einen Klassennamen "highlight" auf unseren Absatz:

   ```js
   para.setAttribute("class", "highlight");
   ```

4. Aktualisieren Sie Ihre Seite, und Sie werden keine Änderung sehen — das CSS wird immer noch auf den Absatz angewendet, diesmal jedoch, indem es eine Klasse zuweist, die von unserer CSS-Regel ausgewählt wird, und nicht als Inline-CSS-Stile.

Welche Methode Sie wählen, liegt bei Ihnen; beide haben ihre Vor- und Nachteile. Die erste Methode erfordert weniger Einrichtung und ist gut für einfache Anwendungen, während die zweite Methode puristischer ist (kein Mischen von CSS und JavaScript, keine Inline-Stile, die als schlechte Praxis angesehen werden). Wenn Sie anfangen, größere und aufwendigere Apps zu entwickeln, werden Sie wahrscheinlich die zweite Methode häufiger verwenden, aber es liegt wirklich an Ihnen.

An diesem Punkt haben wir nichts wirklich Nützliches gemacht! Es hat keinen Sinn, JavaScript zu verwenden, um statischen Inhalt zu erstellen — Sie könnten es genauso gut in Ihr HTML schreiben und JavaScript nicht verwenden. Es ist komplexer als HTML und das Erstellen Ihres Inhalts mit JavaScript hat auch andere Nachteile (wie das Nichtlesbarsein von Suchmaschinen).

Im nächsten Abschnitt werden wir einen praktischeren Einsatz von DOM-APIs untersuchen.

> [!NOTE]
> Sie können unsere [fertige Version der dom-example.html](https://github.com/mdn/learning-area/blob/main/javascript/apis/document-manipulation/dom-example-manipulated.html) Demo auf GitHub finden ([auch live sehen](https://mdn.github.io/learning-area/javascript/apis/document-manipulation/dom-example-manipulated.html)).

## Aktives Lernen: Eine dynamische Einkaufsliste

In dieser Herausforderung möchten wir ein einfaches Einkaufslistenbeispiel erstellen, das es Ihnen ermöglicht, Elemente dynamisch zur Liste hinzuzufügen, indem Sie ein Formulareingabefeld und einen Button verwenden. Wenn Sie ein Element in die Eingabe hinzufügen und den Button drücken:

- Sollte das Element in der Liste erscheinen.
- Jedes Element sollte einen Button bekommen, der gedrückt werden kann, um dieses Element von der Liste zu löschen.
- Die Eingabe sollte geleert und fokussiert werden, damit Sie ein weiteres Element eingeben können.

Das fertige Demo sieht etwa so aus:

![Demo-Layout einer Einkaufsliste. Eine 'meine Einkaufsliste'-Überschrift gefolgt von 'Geben Sie ein neues Element ein' mit einem Eingabefeld und 'Element hinzufügen'-Button. Die Liste der bereits hinzugefügten Elemente befindet sich darunter, jeweils mit einem entsprechenden Löschen-Button.](shopping-list.png)

Um die Übung abzuschließen, befolgen Sie die untenstehenden Schritte und stellen Sie sicher, dass sich die Liste wie beschrieben verhält.

1. Laden Sie zunächst eine Kopie unserer [shopping-list.html](https://github.com/mdn/learning-area/blob/main/javascript/apis/document-manipulation/shopping-list.html) Startdatei herunter und machen Sie eine Kopie davon irgendwo. Sie werden sehen, dass sie etwas minimales CSS, ein div mit einem Label, Eingabe und Button sowie eine leere Liste und ein {{htmlelement("script")}}-Element enthält. Sie werden alle Ihre Ergänzungen im Script machen.
2. Erstellen Sie drei Variablen, die Referenzen zu der Liste ({{htmlelement("ul")}}), dem {{htmlelement("input")}}, und dem {{htmlelement("button")}} halten.
3. Erstellen Sie eine [Funktion](/de/docs/Learn_web_development/Core/Scripting/Functions), die als Reaktion auf das Klicken des Buttons ausgeführt wird.
4. Speichern Sie zu Beginn des Funktionskörpers den aktuellen [Wert](/de/docs/Web/API/HTMLInputElement/value) des Eingabeelements in einer Variablen.
5. Leeren Sie als nächstes das Eingabeelement, indem Sie seinen Wert auf einen leeren String setzen — `''`.
6. Erstellen Sie drei neue Elemente — ein Listenelement ({{htmlelement('li')}}), {{htmlelement('span')}}, und {{htmlelement('button')}}, und speichern Sie sie in Variablen.
7. Fügen Sie das Span und den Button als Kinder des Listenelements hinzu.
8. Setzen Sie den Textinhalt des Spans auf den zuvor gespeicherten Wert des Eingabeelements und den Textinhalt des Buttons auf 'Löschen'.
9. Fügen Sie das Listenelement als Kind der Liste hinzu.
10. Hängen Sie einen Ereignishandler an den Löschen-Button an, damit beim Klicken das gesamte Listenelement (`<li>...</li>`) gelöscht wird.
11. Verwenden Sie schließlich die [`focus()`](/de/docs/Web/API/HTMLElement/focus)-Methode, um das Eingabeelement zu fokussieren, bereit für die Eingabe des nächsten Einkaufslistenelements.

> [!NOTE]
> Wenn Sie wirklich nicht weiterkommen, werfen Sie einen Blick auf unsere [fertige Einkaufsliste](https://github.com/mdn/learning-area/blob/main/javascript/apis/document-manipulation/shopping-list-finished.html) ([siehe es auch live](https://mdn.github.io/learning-area/javascript/apis/document-manipulation/shopping-list-finished.html)).

## Zusammenfassung

Wir haben das Ende unseres Studiums der Dokument- und DOM-Manipulation erreicht. An diesem Punkt sollten Sie verstehen, was die wichtigen Teile eines Webbrowsers im Hinblick auf die Steuerung von Dokumenten und anderen Aspekten des Web-Erlebnisses des Nutzers sind. Am wichtigsten sollten Sie verstehen, was das Document Object Model ist und wie man es manipuliert, um nützliche Funktionen zu erstellen.

## Siehe auch

- Es gibt viele weitere Funktionen, die Sie verwenden können, um Ihre Dokumente zu manipulieren. Schauen Sie sich einige unserer Referenzen an und sehen Sie, was Sie entdecken können:
  - [`Document`](/de/docs/Web/API/Document)
  - [`Window`](/de/docs/Web/API/Window)
  - [`Node`](/de/docs/Web/API/Node)
  - [`HTMLElement`](/de/docs/Web/API/HTMLElement), [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement), [`HTMLImageElement`](/de/docs/Web/API/HTMLImageElement), etc.
- [DOM Scripting](https://explainers.dev/dom-scripting/), explainers.dev

{{PreviousMenuNext("Learn_web_development/Core/Scripting/Object_basics","Learn_web_development/Core/Scripting/Network_requests", "Learn_web_development/Core/Scripting")}}
