---
title: Einführung in das DOM-Scripting
short-title: DOM scripting
slug: Learn_web_development/Core/Scripting/DOM_scripting
l10n:
  sourceCommit: eec8e74ebe88d4fb05e74ebce6e471f1e3da5c6d
---

{{PreviousMenuNext("Learn_web_development/Core/Scripting/Object_basics","Learn_web_development/Core/Scripting/Network_requests", "Learn_web_development/Core/Scripting")}}

Beim Schreiben von Webseiten und Apps ist eine der häufigsten Aufgaben, die Sie vornehmen möchten, die Struktur des Dokuments auf irgendeine Weise zu ändern. Dies wird normalerweise durch das Manipulieren des Document Object Model (DOM) über eine Reihe von eingebauten Browser-APIs vorgenommen, die die Steuerung von HTML- und Stilinformationen ermöglichen. In diesem Artikel stellen wir Ihnen das **DOM-Scripting** vor.

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
          <li>Was das DOM ist — die interne Repräsentation des HTML-Aufbaus des Dokuments als Hierarchie von Objekten durch den Browser.</li>
          <li>Die wichtigen Teile eines Webbrowsers, die in JavaScript repräsentiert sind — <code>Navigator</code>, <code>Window</code> und <code>Document</code>.</li>
          <li>Wie DOM-Knoten relativ zueinander im DOM-Baum existieren — Wurzel, Elternteil, Kind, Geschwister und Nachkomme.</li>
          <li>Erhalten von Referenzen zu DOM-Knoten, Erstellen neuer Knoten, Hinzufügen und Entfernen von Knoten und Attributen.</li>
          <li>Manipulieren von CSS-Stilen mit JavaScript.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Die wichtigen Teile eines Webbrowsers

Webbrowser sind sehr komplizierte Softwarestücke mit vielen beweglichen Teilen, von denen viele nicht von einem Webentwickler mit JavaScript gesteuert oder manipuliert werden können. Sie denken vielleicht, dass solche Einschränkungen negativ sind, aber Browser sind aus guten Gründen, vor allem im Hinblick auf die Sicherheit, gesichert. Stellen Sie sich vor, eine Webseite könnte auf Ihre gespeicherten Passwörter oder andere sensible Informationen zugreifen und sich als Sie in Webseiten einloggen?

Trotz der Einschränkungen bieten Web-APIs uns dennoch Zugang zu vielen Funktionen, die es uns ermöglichen, eine Vielzahl von Dingen mit Webseiten zu tun. Es gibt einige sehr offensichtliche Teile, auf die Sie regelmäßig in Ihrem Code verweisen werden — betrachten Sie das folgende Diagramm, das die Hauptteile eines Browsers darstellt, die direkt an der Ansicht von Webseiten beteiligt sind:

![Wichtige Teile des Webbrowsers; das Dokument ist die Webseite. Das Fenster schließt das gesamte Dokument und auch den Tab ein. Der Navigator ist der Browser, der das Fenster (welches das Dokument einschließt) und alle anderen Fenster umfasst.](document-window-navigator.png)

- Das Fenster ist der Browser-Tab, in den eine Webseite geladen wird; dies wird in JavaScript durch das [`Window`](/de/docs/Web/API/Window)-Objekt repräsentiert. Mit den auf diesem Objekt verfügbaren Methoden können Sie Dinge wie die Größe des Fensters zurückgeben (siehe [`Window.innerWidth`](/de/docs/Web/API/Window/innerWidth) und [`Window.innerHeight`](/de/docs/Web/API/Window/innerHeight)), das in diesem Fenster geladene Dokument manipulieren, client-seitig spezifische Daten für dieses Dokument speichern (zum Beispiel unter Verwendung einer lokalen Datenbank oder eines anderen Speichermediums), einen [Ereignishandler](/de/docs/Learn_web_development/Core/Scripting/Events) an das aktuelle Fenster anhängen und mehr tun.
- Der Navigator repräsentiert den Zustand und die Identität des Browsers (d.h. den User-Agent), wie er im Web existiert. In JavaScript wird dies durch das [`Navigator`](/de/docs/Web/API/Navigator)-Objekt dargestellt. Mit diesem Objekt können Sie Dinge wie die bevorzugte Sprache des Benutzers oder einen Medien-Stream von der Webcam des Benutzers abrufen, usw.
- Das Dokument (im Browser durch das DOM repräsentiert) ist die tatsächliche Seite, die in das Fenster geladen wird und wird in JavaScript durch das [`Document`](/de/docs/Web/API/Document)-Objekt dargestellt. Sie können dieses Objekt verwenden, um Informationen über das HTML und CSS, aus dem das Dokument besteht, zurückzugeben und zu manipulieren, z.B. eine Referenz zu einem Element im DOM zu erhalten, dessen Textinhalt zu ändern, neue Stile darauf anzuwenden, neue Elemente zu erstellen und sie als Kinder zum aktuellen Element hinzuzufügen oder es sogar vollständig zu löschen.

In diesem Artikel konzentrieren wir uns hauptsächlich auf die Manipulation des Dokuments, aber wir zeigen auch einige andere nützliche Teile.

## Das Document Object Model

Lassen Sie uns eine kurze Zusammenfassung über das Document Object Model (DOM) geben, das wir auch früher im Kurs betrachtet haben. Das aktuell in jedem Ihrer Browser-Tabs geladene Dokument wird durch ein DOM repräsentiert. Dies ist eine "Baumstruktur"-Repräsentation, die vom Browser erstellt wird und mit der die HTML-Struktur leicht durch Programmiersprachen zugänglich ist — zum Beispiel verwendet der Browser es selbst, um Stil- und andere Informationen auf die richtigen Elemente anzuwenden, während eine Seite gerendert wird. Entwickler wie Sie können das DOM mit JavaScript nach dem Rendern der Seite manipulieren.

Wir haben eine Beispielseite erstellt unter [dom-example.html](https://github.com/mdn/learning-area/blob/main/javascript/apis/document-manipulation/dom-example.html) ([sehen Sie sie auch live](https://mdn.github.io/learning-area/javascript/apis/document-manipulation/dom-example.html)). Versuchen Sie, diese in Ihrem Browser zu öffnen — es ist eine sehr einfache Seite, die ein {{htmlelement("section")}}-Element enthält, in dem sich ein Bild und ein Absatz mit einem darin enthaltenen Link befinden. Der HTML-Quellcode sieht folgendermaßen aus:

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

![Baumstruktur-Darstellung des Document Object Model: Der obere Knoten ist der Doctype und das HTML-Element. Child-Knoten des HTML umfassen head und body. Jedes Kinderlement ist ein Ast. Auch alle Texte, selbst Leerzeichen, werden gezeigt.](dom-screenshot.png)

> [!NOTE]
> Dieses DOM-Baumschema wurde mit Ian Hicksons [Live DOM viewer](https://software.hixie.ch/utilities/js/live-dom-viewer/) erstellt.

Jeder Eintrag im Baum wird **Knoten** genannt. Im obigen Diagramm sehen Sie, dass einige Knoten Elemente repräsentieren (identifiziert als `HTML`, `HEAD`, `META` usw.) und andere Text repräsentieren (identifiziert als `#text`). Es gibt [andere Arten von Knoten](/de/docs/Web/API/Node/nodeType), aber dies sind die Haupttypen, denen Sie begegnen werden.

Knoten werden auch in Bezug auf ihre Position im Baum relativ zu anderen Knoten bezeichnet:

- **Wurzelknoten**: Der oberste Knoten im Baum, der im Fall von HTML immer der `HTML`-Knoten ist (andere Markup-Vokabulare wie SVG und benutzerdefiniertes XML haben unterschiedliche Wurzelelemente).
- **Kinderknoten**: Ein Knoten _direkt_ innerhalb eines anderen Knotens. Beispiel: `IMG` ist ein Kind von `SECTION` im obigen Beispiel.
- **Nachfolgeknoten**: Ein Knoten _irgendwo_ innerhalb eines anderen Knotens. Beispiel: `IMG` ist ein Kind von `SECTION` im obigen Beispiel und es ist auch ein Nachkomme. `IMG` ist kein Kind von `BODY`, da es zwei Ebenen darunter im Baum liegt, aber es ist ein Nachkomme von `BODY`.
- **Elternknoten**: Ein Knoten, der einen anderen Knoten innerhalb von sich hat. Beispiel: `BODY` ist der Elternknoten von `SECTION` im obigen Beispiel.
- **Geschwisterknoten**: Knoten, die auf derselben Ebene unter demselben Elternknoten im DOM-Baum sitzen. Beispiel: `IMG` und `P` sind Geschwister im obigen Beispiel.

Es ist nützlich, sich mit dieser Terminologie vertraut zu machen, bevor Sie mit dem DOM arbeiten, da viele der Code-Begriffe, auf die Sie stoßen, diese verwenden. Sie werden sie auch in CSS finden (z. B. Nachkomme-Selektor, Kind-Selektor).

## Aktives Lernen: Grundlegende DOM-Manipulation

Um mit dem Lernen über DOM-Manipulation zu beginnen, lassen Sie uns mit einem praktischen Beispiel beginnen.

1. Nehmen Sie eine lokale Kopie der [dom-example.html Seite](https://github.com/mdn/learning-area/blob/main/javascript/apis/document-manipulation/dom-example.html) und des [Bilds](https://github.com/mdn/learning-area/blob/main/javascript/apis/document-manipulation/dinosaur.png), das dazu gehört.
2. Fügen Sie ein `<script></script>`-Element direkt über dem schließenden `</body>`-Tag hinzu.
3. Um ein Element im DOM zu manipulieren, müssen Sie es zuerst auswählen und eine Referenz dazu in einer Variablen speichern. Fügen Sie in Ihrem Skriptelement die folgende Zeile hinzu:

   ```js
   const link = document.querySelector("a");
   ```

4. Nun, da wir die Elementreferenz in einer Variablen gespeichert haben, können wir beginnen, sie mit Properties und Methoden zu manipulieren, die darauf verfügbar sind (diese sind auf Schnittstellen wie [`HTMLAnchorElement`](/de/docs/Web/API/HTMLAnchorElement) im Falle des {{htmlelement("a")}}-Elements, seiner allgemeineren Elternschnittstelle [`HTMLElement`](/de/docs/Web/API/HTMLElement) und [`Node`](/de/docs/Web/API/Node) — welches alle Knoten in einem DOM repräsentiert, definiert). Zuerst ändern wir den Text im Link, indem wir den Wert der [`Node.textContent`](/de/docs/Web/API/Node/textContent)-Eigenschaft aktualisieren. Fügen Sie die folgende Zeile unter der vorhergehenden hinzu:

   ```js
   link.textContent = "Mozilla Developer Network";
   ```

5. Wir sollten auch die URL ändern, auf die der Link verweist, damit er beim Klicken nicht an den falschen Ort führt. Fügen Sie die folgende Zeile erneut unten hinzu:

   ```js
   link.href = "https://developer.mozilla.org";
   ```

Beachten Sie, dass es, wie bei vielen Dingen in JavaScript, viele Möglichkeiten gibt, ein Element auszuwählen und eine Referenz darauf in einer Variablen zu speichern. [`Document.querySelector()`](/de/docs/Web/API/Document/querySelector) ist der empfohlene moderne Ansatz. Es ist praktisch, weil es Ihnen erlaubt, Elemente mithilfe von CSS-Selektoren auszuwählen. Der obige `querySelector()`-Aufruf findet das erste {{htmlelement("a")}}-Element, das im Dokument erscheint. Wenn Sie mehrere Elemente finden und etwas mit ihnen machen wollten, könnten Sie [`Document.querySelectorAll()`](/de/docs/Web/API/Document/querySelectorAll) verwenden, das alle Elemente im Dokument findet, die dem Selektor entsprechen, und Referenzen darauf in einem [array](/de/docs/Learn_web_development/Core/Scripting/Arrays)-ähnlichen Objekt, das ein [`NodeList`](/de/docs/Web/API/NodeList) ist, speichert.

Es gibt ältere Methoden, um Element-Referenzen zu erhalten, wie:

- [`Document.getElementById()`](/de/docs/Web/API/Document/getElementById), das ein Element mit einem bestimmten `id`-Attributwert selektiert, z. B. `<p id="myId">Mein Absatz</p>`. Die ID wird der Funktion als Parameter übergeben, d.h. `const elementRef = document.getElementById('myId')`.
- [`Document.getElementsByTagName()`](/de/docs/Web/API/Document/getElementsByTagName), das ein array-ähnliches Objekt zurückgibt, das alle Elemente auf der Seite eines bestimmten Typs enthält, zum Beispiel `<p>`s, `<a>`s, usw. Der Elementtyp wird der Funktion als Parameter übergeben, d.h. `const elementRefArray = document.getElementsByTagName('p')`.

Diese beiden Methoden funktionieren besser in älteren Browsern als die modernen Methoden wie `querySelector()`, sind jedoch nicht so praktisch. Schauen Sie sich um und sehen Sie, was Sie sonst noch finden können!

### Erstellen und Platzieren neuer Knoten

Das Obige hat Ihnen einen kleinen Vorgeschmack darauf gegeben, was Sie tun können, aber lassen Sie uns weitergehen und sehen, wie wir neue Elemente erstellen können.

1. Gehen wir zurück zu unserem aktuellen Beispiel, lassen Sie uns damit beginnen, eine Referenz auf unser {{htmlelement("section")}}-Element zu bekommen — fügen Sie den folgenden Code am Ende Ihres bestehenden Skripts hinzu (machen Sie das Gleiche mit den anderen Zeilen auch):

   ```js
   const sect = document.querySelector("section");
   ```

2. Lassen Sie uns nun einen neuen Absatz mit [`Document.createElement()`](/de/docs/Web/API/Document/createElement) erstellen und ihm auf dieselbe Weise wie zuvor Textinhalt geben:

   ```js
   const para = document.createElement("p");
   para.textContent = "We hope you enjoyed the ride.";
   ```

3. Sie können den neuen Absatz nun mit [`Node.appendChild()`](/de/docs/Web/API/Node/appendChild) am Ende der Sektion anhängen:

   ```js
   sect.appendChild(para);
   ```

4. Schließlich, für diesen Teil, fügen wir dem Absatz, in dem der Link sitzt, einen Textknoten hinzu, um den Satz schön abzurunden. Zuerst erstellen wir den Textknoten mit [`Document.createTextNode()`](/de/docs/Web/API/Document/createTextNode):

   ```js
   const text = document.createTextNode(
     " — the premier source for web development knowledge.",
   );
   ```

5. Jetzt holen wir uns eine Referenz auf den Absatz, in dem der Link ist, und fügen den Textknoten hinzu:

   ```js
   const linkPara = document.querySelector("p");
   linkPara.appendChild(text);
   ```

Das ist das meiste, was Sie brauchen, um Knoten zum DOM hinzuzufügen — Sie werden diese Methoden oft verwenden, wenn Sie dynamische Schnittstellen erstellen (wir werden später einige Beispiele ansehen).

### Verschieben und Entfernen von Elementen

Es kann Zeiten geben, in denen Sie Knoten verschieben oder sie ganz aus dem DOM entfernen möchten. Das ist durchaus möglich.

Wenn wir den Absatz mit dem Link unten in der Sektion verschieben wollten, könnten wir das tun:

```js
sect.appendChild(linkPara);
```

Dies verschiebt den Absatz nach unten an das Ende der Sektion. Sie könnten gedacht haben, es würde eine zweite Kopie davon erstellen, aber das ist nicht der Fall — `linkPara` ist eine Referenz auf die einzige Kopie dieses Absatzes. Wenn Sie eine Kopie erstellen und diese ebenfalls hinzufügen wollten, müssen Sie stattdessen [`Node.cloneNode()`](/de/docs/Web/API/Node/cloneNode) verwenden.

Das Entfernen eines Knotens ist auch recht einfach, zumindest wenn Sie eine Referenz auf den zu entfernenden Knoten und dessen Eltern haben. In unserem aktuellen Fall verwenden wir einfach [`Node.removeChild()`](/de/docs/Web/API/Node/removeChild), so wie hier:

```js
sect.removeChild(linkPara);
```

Wenn Sie einen Knoten basierend nur auf einer Referenz auf sich selbst entfernen möchten, was ziemlich häufig vorkommt, können Sie [`Element.remove()`](/de/docs/Web/API/Element/remove) verwenden:

```js
linkPara.remove();
```

Diese Methode wird in älteren Browsern nicht unterstützt. Sie haben keine Methode, um einem Knoten zu sagen, dass er sich selbst entfernen soll, also müssten Sie Folgendes tun:

```js
linkPara.parentNode.removeChild(linkPara);
```

Versuchen Sie, die obigen Zeilen zu Ihrem Code hinzuzufügen.

### Manipulation von Stilen

Es ist möglich, CSS-Stile auf verschiedene Weisen über JavaScript zu manipulieren.

Zu Beginn können Sie eine Liste aller Stile aufrufen, die an ein Dokument angehängt sind, mithilfe von [`Document.styleSheets`](/de/docs/Web/API/Document/styleSheets), das ein array-ähnliches Objekt mit [`CSSStyleSheet`](/de/docs/Web/API/CSSStyleSheet)-Objekten zurückgibt. Anschließend können Sie nach Wunsch Stile hinzufügen oder entfernen. Wir werden jedoch nicht auf diese Funktionen eingehen, da sie eine etwas archaische und schwierige Methode sind, um Stile zu manipulieren. Es gibt viel einfachere Wege.

Der erste Weg ist das direkte Hinzufügen von Inline-Stilen an Elemente, die Sie dynamisch stilisieren möchten. Dies geschieht mit der [`HTMLElement.style`](/de/docs/Web/API/HTMLElement/style)-Eigenschaft, die Inline-Stilinformationen für jedes Element im Dokument enthält. Sie können Eigenschaften dieses Objekts festlegen, um Elementstile direkt zu aktualisieren.

1. Fügen Sie zum Beispiel diese Zeilen zu unserem laufenden Beispiel hinzu:

   ```js
   para.style.color = "white";
   para.style.backgroundColor = "black";
   para.style.padding = "10px";
   para.style.width = "250px";
   para.style.textAlign = "center";
   ```

2. Laden Sie die Seite neu und Sie werden sehen, dass die Stile auf den Absatz angewandt wurden. Wenn Sie diesen Absatz im [Page Inspector/DOM-Inspektor](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/index.html) Ihres Browsers ansehen, werden Sie sehen, dass diese Zeilen tatsächlich Inline-Stile zum Dokument hinzufügen:

   ```html
   <p
     style="color: white; background-color: black; padding: 10px; width: 250px; text-align: center;">
     We hope you enjoyed the ride.
   </p>
   ```

> [!NOTE]
> Beachten Sie, wie die JavaScript-Property-Versionen der CSS-Stile in {{Glossary("camel_case", "lower camel case")}} geschrieben sind, während die CSS-Versionen mit Bindestrichen ({{Glossary("kebab_case", "kebab-case")}}) versehen sind (z.B. `backgroundColor` versus `background-color`). Achten Sie darauf, dass Sie diese nicht verwechseln, sonst funktioniert es nicht.

Es gibt eine weitere häufige Methode, um Stile auf Ihrem Dokument dynamisch zu manipulieren, die wir uns jetzt ansehen werden.

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

3. Nun wenden wir eine sehr nützliche Methode für die allgemeine HTML-Manipulation an — [`Element.setAttribute()`](/de/docs/Web/API/Element/setAttribute) — diese nimmt zwei Argumente, das Attribut, das Sie auf das Element setzen möchten, und den Wert, den Sie darauf setzen möchten. In diesem Fall setzen wir einen Klassennamen von highlight auf unseren Absatz:

   ```js
   para.setAttribute("class", "highlight");
   ```

4. Aktualisieren Sie Ihre Seite und Sie werden keine Änderung sehen — das CSS wird immer noch auf den Absatz angewendet, aber diesmal indem wir ihm eine Klasse geben, die durch unsere CSS-Regel ausgewählt wird, und nicht als Inline-CSS-Stile.

Welche Methode Sie wählen, bleibt Ihnen überlassen; beide haben ihre Vor- und Nachteile. Die erste Methode benötigt weniger Einrichtung und ist für einfache Verwendungen geeignet, während die zweite Methode puristischer ist (kein Mischen von CSS und JavaScript, keine Inline-Stile, die als schlechte Praxis angesehen werden). Wenn Sie anfangen, größere und umfangreichere Apps zu erstellen, werden Sie wahrscheinlich die zweite Methode mehr verwenden, aber es liegt wirklich bei Ihnen.

An dieser Stelle haben wir noch nichts wirklich Nützliches getan! Es gibt keinen Grund, JavaScript zu verwenden, um statischen Inhalt zu erstellen — Sie könnten es genauso gut direkt in Ihr HTML schreiben und JavaScript nicht verwenden. Es ist komplexer als HTML, und die Erstellung Ihres Inhalts mit JavaScript hat auch noch andere Probleme (wie das Nichtlesbareit für Suchmaschinen).

Im nächsten Abschnitt werden wir uns eine praktischere Anwendung von DOM-APIs ansehen.

> [!NOTE]
> Sie können unsere [fertige Version der dom-example.html](https://github.com/mdn/learning-area/blob/main/javascript/apis/document-manipulation/dom-example-manipulated.html) Demo auf GitHub sehen ([sehen Sie sie auch live](https://mdn.github.io/learning-area/javascript/apis/document-manipulation/dom-example-manipulated.html)).

## Aktives Lernen: Eine dynamische Einkaufsliste

In dieser Herausforderung wollen wir ein einfaches Einkaufsliste-Beispiel erstellen, das Ihnen ermöglicht, mithilfe eines Eingabefelds und eines Buttons dynamisch Artikel zur Liste hinzuzufügen. Wenn Sie einen Artikel in das Eingabefeld hinzufügen und den Button drücken:

- Sollte der Artikel in der Liste erscheinen.
- Jeder Artikel sollte einen Button bekommen, der gedrückt werden kann, um den Artikel von der Liste zu löschen.
- Das Eingabefeld sollte geleert und fokussiert werden, damit Sie bereit sind, einen weiteren Artikel einzugeben.

Das fertige Demo wird etwa so aussehen:

![Demo-Layout einer Einkaufsliste. Ein 'meine Einkaufsliste' Kopfzeile, gefolgt von 'neuen Artikel eingeben' mit einem Eingabefeld und 'Artikel hinzufügen' Button. Die Liste der bereits hinzugefügten Artikel ist darunter, jeder mit einem entsprechenden Löschbutton.](shopping-list.png)

Um die Übung abzuschließen, folgen Sie den untenstehenden Schritten und stellen Sie sicher, dass sich die Liste wie beschrieben verhält.

1. Laden Sie zunächst eine Kopie unserer [shopping-list.html](https://github.com/mdn/learning-area/blob/main/javascript/apis/document-manipulation/shopping-list.html) Startdatei herunter und machen Sie eine Kopie davon irgendwo. Sie werden sehen, dass es über ein minimales CSS, ein div mit einem Label, Eingabefeld und Button sowie eine leere Liste und ein {{htmlelement("script")}}-Element verfügt. Alle Ihre Ergänzungen machen Sie im Skript.
2. Erstellen Sie drei Variablen, die Referenzen zu der Liste ({{htmlelement("ul")}}), dem {{htmlelement("input")}}, und dem {{htmlelement("button")}}-Element halten.
3. Erstellen Sie eine [Funktion](/de/docs/Learn_web_development/Core/Scripting/Functions), die als Reaktion auf das Klicken des Buttons ausgeführt wird.
4. Speichern Sie im Funktionsrumpf zunächst den aktuellen [Wert](/de/docs/Web/API/HTMLInputElement/value) des Eingabefelds in einer Variablen.
5. Leeren Sie das Eingabefeld, indem Sie seinen Wert auf einen Leerstring setzen — `''`.
6. Erstellen Sie drei neue Elemente — ein Listenelement ({{htmlelement('li')}}), {{htmlelement('span')}} und {{htmlelement('button')}} und speichern Sie sie in Variablen.
7. Hängen Sie den Span und den Button als Kinder des Listenelements an.
8. Setzen Sie den Textinhalt des Spans auf den zuvor gespeicherten Wert des Eingabefelds und den Textinhalt des Buttons auf 'Löschen'.
9. Fügen Sie das Listenelement als Kind der Liste hinzu.
10. Hängen Sie einen Ereignishandler an den Löschbutton, so dass er beim Klicken das gesamte Listenelement (`<li>...</li>`) löscht.
11. Verwenden Sie schließlich die [`focus()`](/de/docs/Web/API/HTMLElement/focus)-Methode, um das Eingabefeld zu fokussieren, damit Sie bereit sind, den nächsten Artikel der Einkaufsliste einzugeben.

> [!NOTE]
> Wenn Sie wirklich nicht weiterkommen, schauen Sie sich unsere [fertige Einkaufsliste](https://github.com/mdn/learning-area/blob/main/javascript/apis/document-manipulation/shopping-list-finished.html) an ([sehen Sie sie auch live laufend](https://mdn.github.io/learning-area/javascript/apis/document-manipulation/shopping-list-finished.html)).

## Zusammenfassung

Wir sind am Ende unseres Studiums der Dokumenten- und DOM-Manipulation angekommen. An diesem Punkt sollten Sie verstehen, was die wichtigen Teile eines Webbrowsers im Hinblick auf die Steuerung von Dokumenten und anderen Aspekten der Web-Erfahrung des Nutzers sind. Vor allem sollten Sie verstehen, was das Document Object Model ist und wie Sie es manipulieren können, um nützliche Funktionen zu erstellen.

## Siehe auch

- Es gibt noch viele weitere Funktionen, die Sie zur Manipulation Ihrer Dokumente verwenden können. Schauen Sie sich einige unserer Referenzen an und sehen Sie, was Sie entdecken können:
  - [`Document`](/de/docs/Web/API/Document)
  - [`Window`](/de/docs/Web/API/Window)
  - [`Node`](/de/docs/Web/API/Node)
  - [`HTMLElement`](/de/docs/Web/API/HTMLElement), [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement), [`HTMLImageElement`](/de/docs/Web/API/HTMLImageElement), usw.
- [DOM Scripting](https://explainers.dev/dom-scripting/), explainers.dev

{{PreviousMenuNext("Learn_web_development/Core/Scripting/Object_basics","Learn_web_development/Core/Scripting/Network_requests", "Learn_web_development/Core/Scripting")}}
