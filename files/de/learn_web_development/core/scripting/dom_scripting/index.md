---
title: Einführung in DOM-Scripting
short-title: DOM scripting
slug: Learn_web_development/Core/Scripting/DOM_scripting
l10n:
  sourceCommit: 0915a5e602d475bd1a1a57d905f0bac1b7ed57b8
---

{{PreviousMenuNext("Learn_web_development/Core/Scripting/Object_basics","Learn_web_development/Core/Scripting/Network_requests", "Learn_web_development/Core/Scripting")}}

Beim Schreiben von Webseiten und Apps ist eine der häufigsten Aufgaben, die Sie durchführen möchten, die Änderung der Dokumentstruktur in irgendeiner Weise. Dies geschieht in der Regel durch die Manipulation des Document Object Model (DOM) über eine Reihe von integrierten Browser-APIs zur Kontrolle von HTML und Styling-Informationen. In diesem Artikel werden wir Ihnen eine Einführung in das **DOM-Scripting** geben.

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
          <li>Was das DOM ist — die interne Darstellung der HTML-Struktur des Dokuments im Browser als Hierarchie von Objekten.</li>
          <li>Die wichtigen Teile eines Webbrowsers, wie sie in JavaScript repräsentiert werden — <code>Navigator</code>, <code>Window</code> und <code>Document</code>.</li>
          <li>Wie DOM-Knoten relativ zueinander im DOM-Baum existieren — Wurzel, Elternteil, Kind, Geschwister und Nachkomme.</li>
          <li>Erhalt von Referenzen zu DOM-Knoten, Erstellen neuer Knoten, Hinzufügen und Entfernen von Knoten und Attributen.</li>
          <li>Manipulation von CSS-Stilen mit JavaScript.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Die wichtigen Teile eines Webbrowsers

Webbrowser sind sehr komplizierte Softwarestücke mit vielen beweglichen Teilen, von denen viele von einem Webentwickler nicht mit JavaScript gesteuert oder manipuliert werden können. Sie könnten denken, dass solche Einschränkungen eine schlechte Sache sind, aber Browser sind aus guten Gründen gesperrt, die sich hauptsächlich um Sicherheit drehen. Stellen Sie sich vor, wenn eine Website Zugriff auf Ihre gespeicherten Passwörter oder andere sensible Informationen hätte und sich als Sie bei Webseiten anmelden könnte?

Trotz der Einschränkungen geben uns Web-APIs dennoch Zugriff auf viele Funktionen, die es uns ermöglichen, viele Dinge mit Webseiten zu tun. Es gibt einige wirklich offensichtliche Teile, auf die Sie in Ihrem Code regelmäßig verweisen werden — betrachten Sie das folgende Diagramm, das die Hauptteile eines Browsers darstellt, die direkt am Betrachten von Webseiten beteiligt sind:

![Wichtige Teile des Webbrowsers; das Dokument ist die Webseite. Das Fenster umfasst das gesamte Dokument und auch den Tab. Der Navigator ist der Browser, der das Fenster einschließlich des Dokuments und aller anderen Fenster umfasst.](document-window-navigator.png)

- Das Fenster ist der Browser-Tab, in den eine Webseite geladen ist; dies wird in JavaScript durch das [`Window`](/de/docs/Web/API/Window)-Objekt repräsentiert. Mit den auf diesem Objekt verfügbaren Methoden können Sie z.B. die Größe des Fensters zurückgeben (siehe [`Window.innerWidth`](/de/docs/Web/API/Window/innerWidth) und [`Window.innerHeight`](/de/docs/Web/API/Window/innerHeight)), das in dieses Fenster geladene Dokument manipulieren, dokumentenspezifische Daten auf der Clientseite speichern (z.B. mit einer lokalen Datenbank oder anderen Speichermethoden), einen [Ereignishandler](/de/docs/Learn_web_development/Core/Scripting/Events) an das aktuelle Fenster anhängen und mehr.
- Der Navigator repräsentiert den Zustand und die Identität des Browsers (d.h. des User-Agents), wie er im Web existiert. In JavaScript wird dies durch das [`Navigator`](/de/docs/Web/API/Navigator)-Objekt dargestellt. Sie können dieses Objekt verwenden, um Dinge wie die bevorzugte Sprache des Benutzers, einen Medienstrom von der Webcam des Benutzers usw. abzurufen.
- Das Dokument (repräsentiert durch das DOM in Browsern) ist die tatsächliche Seite, die in das Fenster geladen ist, und wird in JavaScript durch das [`Document`](/de/docs/Web/API/Document)-Objekt dargestellt. Sie können dieses Objekt verwenden, um Informationen zu HTML und CSS, die das Dokument ausmachen, zurückzugeben und zu manipulieren, z.B. eine Referenz zu einem Element im DOM zu erhalten, den Textinhalt zu ändern, neue Stile anzuwenden, neue Elemente zu erstellen und als Kind an das aktuelle Element anzufügen oder es sogar vollständig zu löschen.

In diesem Artikel werden wir uns hauptsächlich auf die Manipulation des Dokuments konzentrieren, aber wir werden auch einige andere nützliche Dinge zeigen.

## Das Document Object Model

Lassen Sie uns eine kurze Zusammenfassung des Document Object Model (DOM) geben, das wir auch früher im Kurs behandelt haben. Das Dokument, das derzeit in jedem Ihrer Browsertabs geladen ist, wird durch ein DOM dargestellt. Dies ist eine "Baumstruktur"-Darstellung, die vom Browser erstellt wird und es ermöglicht, dass die HTML-Struktur einfach von Programmiersprachen aus zugänglich ist — der Browser selbst verwendet es beispielsweise, um Styling- und andere Informationen auf die richtigen Elemente anzuwenden, während er eine Seite rendert, und Entwickler wie Sie können das DOM mit JavaScript nach dem Rendern der Seite manipulieren.

> [!NOTE]
> Scrimba's [The Document Object Model](https://scrimba.com/learn-javascript-c0v/~0g?via=mdn) <sup>[_MDN learning partner_](/de/docs/MDN/Writing_guidelines/Learning_content#partner_links_and_embeds)</sup> bietet eine nützliche Einführung in den Begriff "DOM" und dessen Bedeutung.

Wir haben eine Beispielseite unter [dom-example.html](https://github.com/mdn/learning-area/blob/main/javascript/apis/document-manipulation/dom-example.html) erstellt ([sehen Sie sie auch live](https://mdn.github.io/learning-area/javascript/apis/document-manipulation/dom-example.html)). Versuchen Sie, dies in Ihrem Browser zu öffnen — es ist eine sehr einfache Seite, die ein {{htmlelement("section")}}-Element enthält, in dem Sie ein Bild und einen Absatz mit einem darin enthaltenen Link finden. Der HTML-Quellcode sieht folgendermaßen aus:

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

![Baumstruktur-Darstellung des Document Object Model: Der obere Knoten ist der Doctype und das HTML-Element. Kindknoten des HTML sind Kopf und Körper. Jedes Kindelement ist ein Zweig. Alle Texte, sogar Leerzeichen, werden ebenfalls angezeigt.](dom-screenshot.png)

> [!NOTE]
> Dieses DOM-Baumdiagramm wurde mit Ian Hicksons [Live DOM Viewer](https://software.hixie.ch/utilities/js/live-dom-viewer/) erstellt.

Jeder Eintrag im Baum wird als **Knoten** bezeichnet. Im obigen Diagramm können Sie sehen, dass einige Knoten Elemente darstellen (identifiziert als `HTML`, `HEAD`, `META` und so weiter) und andere Text repräsentieren (identifiziert als `#text`). Es gibt auch [andere Arten von Knoten](/de/docs/Web/API/Node/nodeType), aber dies sind die Haupttypen, denen Sie begegnen werden.

Knoten werden auch durch ihre Position im Baum relativ zu anderen Knoten bezeichnet:

- **Wurzelknoten**: Der oberste Knoten im Baum, der im Falle von HTML immer der `HTML`-Knoten ist (andere Markup-Sprachen wie SVG und benutzerdefiniertes XML haben unterschiedliche Wurzelelemente).
- **Kindknoten**: Ein Knoten _direkt_ innerhalb eines anderen Knotens. Beispielsweise ist `IMG` ein Kind von `SECTION` im obigen Beispiel.
- **Nachkommenknoten**: Ein Knoten _irgendwo_ innerhalb eines anderen Knotens. Beispielsweise ist `IMG` ein Kind von `SECTION` im obigen Beispiel und gleichzeitig ein Nachkomme. `IMG` ist kein Kind von `BODY`, da es zwei Ebenen darunter im Baum ist, aber es ist ein Nachkomme von `BODY`.
- **Elternknoten**: Ein Knoten, der einen anderen Knoten innerhalb von sich hat. Beispielsweise ist `BODY` der Elternknoten von `SECTION` im obigen Beispiel.
- **Geschwisterknoten**: Knoten, die auf derselben Ebene unter demselben Elternknoten im DOM-Baum sitzen. Beispielsweise sind `IMG` und `P` Geschwister im obigen Beispiel.

Es ist hilfreich, sich mit dieser Terminologie vertraut zu machen, bevor Sie mit dem DOM arbeiten, da verschiedene Codebegriffe darauf basieren. Sie werden auch in CSS darauf stoßen (z.B. Nachkommenselektor, Kindselektor).

## Aktives Lernen: Grundlegende DOM-Manipulation

Um mit dem Lernen der DOM-Manipulation zu beginnen, lassen Sie uns mit einem praktischen Beispiel beginnen.

1. Nehmen Sie eine lokale Kopie der [dom-example.html-Seite](https://github.com/mdn/learning-area/blob/main/javascript/apis/document-manipulation/dom-example.html) und des [Bildes](https://github.com/mdn/learning-area/blob/main/javascript/apis/document-manipulation/dinosaur.png), das dazu gehört.
2. Fügen Sie ein `<script></script>`-Element direkt über dem schließenden `</body>`-Tag hinzu.
3. Um ein Element im DOM zu manipulieren, müssen Sie es zunächst auswählen und eine Referenz darauf in einer Variablen speichern. Fügen Sie in Ihrem Script-Element die folgende Zeile hinzu:

   ```js
   const link = document.querySelector("a");
   ```

4. Jetzt, da wir die Elementreferenz in einer Variablen gespeichert haben, können wir beginnen, sie mit den dafür verfügbaren Eigenschaften und Methoden zu manipulieren (diese sind auf Schnittstellen wie [`HTMLAnchorElement`](/de/docs/Web/API/HTMLAnchorElement) im Fall von {{htmlelement("a")}}-Element, seiner allgemeingültigeren übergeordneten Schnittstelle [`HTMLElement`](/de/docs/Web/API/HTMLElement) und [`Node`](/de/docs/Web/API/Node) definiert — das alle Knoten in einem DOM repräsentiert). Lassen Sie uns zunächst den Text im Link ändern, indem wir den Wert der [`Node.textContent`](/de/docs/Web/API/Node/textContent)-Eigenschaft aktualisieren. Fügen Sie die folgende Zeile unter der vorherigen hinzu:

   ```js
   link.textContent = "Mozilla Developer Network";
   ```

5. Wir sollten auch die URL ändern, auf die der Link zeigt, damit er nicht an die falsche Stelle geht, wenn darauf geklickt wird. Fügen Sie die folgende Zeile hinzu, wieder am Ende:

   ```js
   link.href = "https://developer.mozilla.org";
   ```

Beachten Sie, dass es, wie bei vielen Dingen in JavaScript, viele Möglichkeiten gibt, ein Element auszuwählen und eine Referenz darauf in einer Variablen zu speichern. [`Document.querySelector()`](/de/docs/Web/API/Document/querySelector) ist der empfohlene moderne Ansatz. Es ist bequem, weil es Ihnen ermöglicht, Elemente mit CSS-Selektoren auszuwählen. Der obige `querySelector()`-Aufruf wird das erste {{htmlelement("a")}}-Element im Dokument auswählen. Wenn Sie mehrere Elemente auswählen und etwas damit machen wollten, könnten Sie [`Document.querySelectorAll()`](/de/docs/Web/API/Document/querySelectorAll) verwenden, das jedes Element im Dokument auswählt, das dem Selektor entspricht und Referenzen darauf in einem [array](/de/docs/Learn_web_development/Core/Scripting/Arrays)-ähnlichen Objekt namens [`NodeList`](/de/docs/Web/API/NodeList) speichert.

Es gibt ältere Methoden zum Abrufen von Elementreferenzen, wie:

- [`Document.getElementById()`](/de/docs/Web/API/Document/getElementById), das ein Element mit einem gegebenen `id`-Attributwert auswählt, z.B. `<p id="myId">Mein Absatz</p>`. Die ID wird der Funktion als Parameter übergeben, d.h. `const elementRef = document.getElementById('myId')`.
- [`Document.getElementsByTagName()`](/de/docs/Web/API/Document/getElementsByTagName), das ein array-ähnliches Objekt zurückgibt, das alle Elemente im Dokument eines bestimmten Typs enthält, z.B. `<p>`, `<a>` usw. Der Elementtyp wird der Funktion als Parameter übergeben, d.h. `const elementRefArray = document.getElementsByTagName('p')`.

Diese beiden Methoden funktionieren in älteren Browsern besser als die modernen Methoden wie `querySelector()`, sind jedoch nicht so bequem. Schauen Sie nach, was Sie sonst noch finden können!

### Erstellen und Platzieren neuer Knoten

Das Obige hat Ihnen einen kleinen Vorgeschmack darauf gegeben, was Sie tun können, aber lassen Sie uns weitergehen und sehen, wie wir neue Elemente erstellen können.

1. Zurück zu unserem aktuellen Beispiel, lassen Sie uns mit dem Erstellen einer Referenz zu unserem {{htmlelement("section")}}-Element beginnen — fügen Sie den folgenden Code am Ende Ihres vorhandenen Skripts hinzu (machen Sie dies auch mit den anderen Zeilen):

   ```js
   const sect = document.querySelector("section");
   ```

2. Nun erstellen wir einen neuen Absatz mit [`Document.createElement()`](/de/docs/Web/API/Document/createElement) und geben ihm einen Textinhalt auf die gleiche Weise wie zuvor:

   ```js
   const para = document.createElement("p");
   para.textContent = "We hope you enjoyed the ride.";
   ```

3. Sie können den neuen Absatz nun am Ende der Sektion mit [`Node.appendChild()`](/de/docs/Web/API/Node/appendChild) anhängen:

   ```js
   sect.appendChild(para);
   ```

4. Schließlich für diesen Teil, lassen Sie uns einen Textknoten zum Absatz hinzufügen, in dem sich der Link befindet, um den Satz schön abzurunden. Zunächst erstellen wir den Textknoten mit [`Document.createTextNode()`](/de/docs/Web/API/Document/createTextNode):

   ```js
   const text = document.createTextNode(
     " — the premier source for web development knowledge.",
   );
   ```

5. Jetzt holen wir uns eine Referenz zu dem Absatz, in dem sich der Link befindet, und hängen den Textknoten an diesen an:

   ```js
   const linkPara = document.querySelector("p");
   linkPara.appendChild(text);
   ```

Das ist das meiste, was Sie benötigen, um Knoten zum DOM hinzuzufügen — Sie werden diese Methoden häufig verwenden, wenn Sie dynamische Schnittstellen erstellen (wir werden später einige Beispiele betrachten).

### Verschieben und Entfernen von Elementen

Es kann vorkommen, dass Sie Knoten verschieben oder sie vollständig aus dem DOM entfernen möchten. Dies ist durchaus möglich.

Wenn wir den Absatz mit dem Link darin nach unten in die Sektion verschieben wollten, könnten wir dies tun:

```js
sect.appendChild(linkPara);
```

Dies verschiebt den Absatz nach unten in die Sektion. Vielleicht dachten Sie, es würde eine zweite Kopie davon erstellen, aber das ist nicht der Fall — `linkPara` ist eine Referenz auf die eine und einzige Kopie dieses Absatzes. Wenn Sie eine Kopie davon machen und diese ebenfalls hinzufügen wollten, müssten Sie stattdessen [`Node.cloneNode()`](/de/docs/Web/API/Node/cloneNode) verwenden.

Das Entfernen eines Knotens ist ebenfalls ziemlich einfach, zumindest wenn Sie eine Referenz auf den zu entfernenden Knoten und seinen Elternknoten haben. In unserem aktuellen Fall verwenden wir einfach [`Node.removeChild()`](/de/docs/Web/API/Node/removeChild), so:

```js
sect.removeChild(linkPara);
```

Wenn Sie einen Knoten entfernen möchten, basierend nur auf einer Referenz zu diesem selbst, was ziemlich häufig ist, können Sie [`Element.remove()`](/de/docs/Web/API/Element/remove) verwenden:

```js
linkPara.remove();
```

Diese Methode wird in älteren Browsern nicht unterstützt. Sie haben keine Methode, um einem Knoten zu sagen, dass er sich selbst entfernen soll, daher müssten Sie Folgendes tun:

```js
linkPara.parentNode.removeChild(linkPara);
```

Probieren Sie es aus, diese Zeilen zu Ihrem Code hinzuzufügen.

### Manipulation von Stilen

Es ist möglich, CSS-Stile über JavaScript auf verschiedene Weise zu manipulieren.

Zu Beginn können Sie eine Liste aller Stylesheets erhalten, die an ein Dokument angehängt sind, indem Sie [`Document.styleSheets`](/de/docs/Web/API/Document/styleSheets) verwenden, die ein array-ähnliches Objekt mit [`CSSStyleSheet`](/de/docs/Web/API/CSSStyleSheet)-Objekten zurückgibt. Sie können dann Stile nach Belieben hinzufügen/entfernen. Wir werden jedoch nicht näher auf diese Funktionen eingehen, da sie eine etwas archaische und schwierige Methode zur Manipulation von Stilen sind. Es gibt viel einfachere Möglichkeiten.

Die erste Möglichkeit besteht darin, Inline-Stile direkt auf die Elemente hinzuzufügen, die Sie dynamisch gestalten möchten. Dies geschieht mit der [`HTMLElement.style`](/de/docs/Web/API/HTMLElement/style)-Eigenschaft, die Inline-Styling-Informationen für jedes Element im Dokument enthält. Sie können Eigenschaften dieses Objekts festlegen, um die Stile von Elementen direkt zu aktualisieren.

1. Fügen Sie als Beispiel diese Zeilen in unser laufendes Beispiel ein:

   ```js
   para.style.color = "white";
   para.style.backgroundColor = "black";
   para.style.padding = "10px";
   para.style.width = "250px";
   para.style.textAlign = "center";
   ```

2. Laden Sie die Seite neu, und Sie werden sehen, dass die Stile auf den Absatz angewendet wurden. Wenn Sie diesen Absatz in Ihrem Browser's [Seiteninspektor/DOM-Inspector](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/index.html) betrachten, werden Sie sehen, dass diese Zeilen tatsächlich Inline-Stile zum Dokument hinzufügen:

   ```html
   <p
     style="color: white; background-color: black; padding: 10px; width: 250px; text-align: center;">
     We hope you enjoyed the ride.
   </p>
   ```

> [!NOTE]
> Beachten Sie, wie die JavaScript-Property-Versionen der CSS-Stile in {{Glossary("camel_case", "Lower Camel Case")}} und die CSS-Versionen in {{Glossary("kebab_case", "Kebab-Case")}} geschrieben werden (z.B. `backgroundColor` im Vergleich zu `background-color`). Achten Sie darauf, dass Sie diese nicht verwechseln, sonst funktioniert es nicht.

Es gibt eine andere gängige Möglichkeit, Stile auf Ihrem Dokument dynamisch zu manipulieren, die wir uns jetzt ansehen werden.

1. Löschen Sie die vorherigen fünf Zeilen, die Sie dem JavaScript hinzugefügt haben.
2. Fügen Sie das folgende in Ihrem HTML-{{htmlelement("head")}} hinzu:

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

3. Nun wenden wir uns einer sehr nützlichen Methode für die allgemeine Manipulation von HTML zu — [`Element.setAttribute()`](/de/docs/Web/API/Element/setAttribute) — diese nimmt zwei Argumente, das Attribut, das Sie auf dem Element festlegen möchten, und den Wert, den Sie darauf festlegen möchten. In diesem Fall werden wir eine Klassenbezeichnung von highlight auf unseren Absatz setzen:

   ```js
   para.setAttribute("class", "highlight");
   ```

4. Aktualisieren Sie Ihre Seite und Sie werden keine Änderung sehen — das CSS wird immer noch auf den Absatz angewendet, aber diesmal, indem ihm eine Klasse gegeben wird, die von unserer CSS-Regel ausgewählt wird, nicht durch Inline-CSS-Stile.

Welche Methode Sie wählen, liegt bei Ihnen; beide haben ihre Vor- und Nachteile. Die erste Methode erfordert weniger Setup und ist für einfache Anwendungen gut geeignet, während die zweite Methode puristischer ist (kein Mischen von CSS und JavaScript, keine Inline-Stile, die als schlechte Praxis angesehen werden). Wenn Sie größere und umfassendere Apps erstellen, werden Sie wahrscheinlich die zweite Methode häufiger verwenden, aber es liegt wirklich bei Ihnen.

Zu diesem Zeitpunkt haben wir noch nichts Nützliches getan! Es hat keinen Zweck, statische Inhalte mit JavaScript zu erstellen — Sie könnten sie genauso gut einfach in Ihr HTML schreiben und kein JavaScript verwenden. Es ist komplexer als HTML, und das Erstellen Ihres Inhalts mit JavaScript hat auch andere Probleme damit verbunden (wie z.B. dass es nicht von Suchmaschinen gelesen werden kann).

Im nächsten Abschnitt werden wir uns eine praktischere Verwendung von DOM-APIs ansehen.

> [!NOTE]
> Sie können unsere [fertige Version des dom-example.html](https://github.com/mdn/learning-area/blob/main/javascript/apis/document-manipulation/dom-example-manipulated.html) auf GitHub finden ([sehen Sie sie auch live](https://mdn.github.io/learning-area/javascript/apis/document-manipulation/dom-example-manipulated.html)).

## Aktives Lernen: Eine dynamische Einkaufsliste

In dieser Herausforderung möchten wir ein einfaches Einkaufslisten-Beispiel erstellen, das es Ihnen ermöglicht, Elemente dynamisch mit einem Formulareingabefeld und einer Schaltfläche zur Liste hinzuzufügen. Wenn Sie ein Element in das Eingabefeld hinzufügen und die Schaltfläche drücken:

- Das Element sollte in der Liste erscheinen.
- Jedes Element sollte eine Schaltfläche erhalten, die gedrückt werden kann, um dieses Element von der Liste zu löschen.
- Das Eingabefeld sollte geleert und fokussiert werden, damit Sie ein weiteres Element eingeben können.

Das fertige Demo wird ungefähr so aussehen:

![Demo-Layout einer Einkaufsliste. Eine Überschrift 'meine Einkaufsliste', gefolgt von 'Ein neues Element eingeben' mit einem Eingabefeld und einer 'Element hinzufügen'-Schaltfläche. Die Liste der bereits hinzugefügten Elemente befindet sich darunter, jedes mit einer entsprechenden Löschtaste.](shopping-list.png)

Um die Übung abzuschließen, folgen Sie den unten stehenden Schritten und stellen Sie sicher, dass sich die Liste wie beschrieben verhält.

1. Laden Sie zunächst eine Kopie unserer [shopping-list.html](https://github.com/mdn/learning-area/blob/main/javascript/apis/document-manipulation/shopping-list.html) Startdatei herunter und erstellen Sie eine Kopie davon irgendwo. Sie werden sehen, dass sie ein minimales CSS, ein `div` mit einem Label, Eingabe und Schaltfläche sowie eine leere Liste und ein {{htmlelement("script")}}-Element hat. Sie werden alle Ihre Ergänzungen innerhalb des Skripts vornehmen.
2. Erstellen Sie drei Variablen, die Referenzen auf die Liste ({{htmlelement("ul")}}), das {{htmlelement("input")}} und das {{htmlelement("button")}}-Element halten.
3. Erstellen Sie eine [Funktion](/de/docs/Learn_web_development/Core/Scripting/Functions), die als Reaktion auf das Klicken der Schaltfläche ausgeführt wird.
4. Speichern Sie im Funktionskörper zunächst den aktuellen [Wert](/de/docs/Web/API/HTMLInputElement/value) des Eingabeelements in einer Variablen.
5. Leeren Sie als nächstes das Eingabeelement, indem Sie seinen Wert auf einen leeren String setzen — `''`.
6. Erstellen Sie drei neue Elemente — ein Listenelement ({{htmlelement("li")}}), {{htmlelement("span")}}, und {{htmlelement("button")}}, und speichern Sie sie in Variablen.
7. Hängen Sie das Span und die Schaltfläche als Kinder des Listenelements an.
8. Setzen Sie den Textinhalt des Span auf den zuvor gespeicherten Wert des Eingabeelements und den Textinhalt der Schaltfläche auf 'Löschen'.
9. Hängen Sie das Listenelement als Kind an die Liste an.
10. Ordnen Sie einen Ereignishandler der Löschtaste zu, sodass beim Klicken das gesamte Listenelement (`<li>...</li>`) gelöscht wird.
11. Verwenden Sie schließlich die [`focus()`](/de/docs/Web/API/HTMLElement/focus)-Methode, um das Eingabeelement für die Eingabe des nächsten Einkaufslistenartikels zu fokussieren.

> [!NOTE]
> Wenn Sie wirklich feststecken, werfen Sie einen Blick auf unsere [fertige Einkaufsliste](https://github.com/mdn/learning-area/blob/main/javascript/apis/document-manipulation/shopping-list-finished.html) ([sehen Sie sie auch live](https://mdn.github.io/learning-area/javascript/apis/document-manipulation/shopping-list-finished.html)).

## Zusammenfassung

Wir haben das Ende unseres Studiums der Dokument- und DOM-Manipulation erreicht. An diesem Punkt sollten Sie verstehen, was die wichtigen Teile eines Webbrowsers in Bezug auf die Kontrolle von Dokumenten und andere Aspekte der Nutzererfahrung im Web sind. Am wichtigsten, Sie sollten verstehen, was das Document Object Model ist und wie man es manipulieren kann, um nützliche Funktionalitäten zu erstellen.

## Siehe auch

- Es gibt viele weitere Funktionen, die Sie zur Manipulation Ihrer Dokumente verwenden können. Schauen Sie sich einige unserer Referenzen an und sehen Sie, was Sie entdecken können:
  - [`Document`](/de/docs/Web/API/Document)
  - [`Window`](/de/docs/Web/API/Window)
  - [`Node`](/de/docs/Web/API/Node)
  - [`HTMLElement`](/de/docs/Web/API/HTMLElement), [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement), [`HTMLImageElement`](/de/docs/Web/API/HTMLImageElement) usw.
- [DOM Scripting](https://explainers.dev/dom-scripting/), explainers.dev

{{PreviousMenuNext("Learn_web_development/Core/Scripting/Object_basics","Learn_web_development/Core/Scripting/Network_requests", "Learn_web_development/Core/Scripting")}}
