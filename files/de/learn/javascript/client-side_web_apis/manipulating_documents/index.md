---
title: Manipulating documents
slug: Learn/JavaScript/Client-side_web_APIs/Manipulating_documents
l10n:
  sourceCommit: f13c1fdd9eaa766d1e0fa909e72a8693ba03024f
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/JavaScript/Client-side_web_APIs/Introduction", "Learn/JavaScript/Client-side_web_APIs/Fetching_data", "Learn/JavaScript/Client-side_web_APIs")}}

Beim Erstellen von Webseiten und Apps ist eines der häufigsten Dinge, die Sie tun möchten, die Manipulation der Dokumentenstruktur auf irgendeine Weise. Dies geschieht normalerweise durch die Verwendung des Document Object Model (DOM), einer Reihe von APIs zur Steuerung von HTML und Styling-Informationen, die stark das [`Document`](/de/docs/Web/API/Document)-Objekt nutzen. In diesem Artikel betrachten wir im Detail, wie das DOM verwendet wird, zusammen mit einigen anderen interessanten APIs, die Ihre Umgebung auf interessante Weise verändern können.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Grundlegendes Verständnis von HTML, CSS und
        JavaScript — einschließlich JavaScript-Objekten.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Vertrautheit mit den Kern-DOM-APIs und den anderen APIs zu erlangen, die häufig
        mit DOM- und Dokumentmanipulation verbunden sind.
      </td>
    </tr>
  </tbody>
</table>

## Die wichtigen Teile eines Webbrowsers

Webbrowser sind sehr komplizierte Softwarepakete mit vielen beweglichen Teilen, von denen viele von einem Webentwickler mit JavaScript nicht gesteuert oder manipuliert werden können. Sie könnten denken, dass solche Einschränkungen etwas Schlechtes sind, aber Browser sind aus guten Gründen gesperrt, die sich hauptsächlich auf die Sicherheit konzentrieren. Stellen Sie sich vor, eine Website könnte auf Ihre gespeicherten Passwörter oder andere sensible Informationen zugreifen und sich auf Websites einloggen, als ob Sie es wären?

Trotz der Einschränkungen geben uns Web-APIs immer noch Zugriff auf eine Menge Funktionen, die es uns ermöglichen, viele Dinge mit Webseiten zu tun. Es gibt einige wirklich offensichtliche Teile, auf die Sie regelmäßig in Ihrem Code verweisen werden – betrachten Sie das folgende Diagramm, das die Hauptteile eines Browsers darstellt, die direkt am Betrachten von Webseiten beteiligt sind:

![Wichtige Teile des Webbrowsers; das Dokument ist die Webseite. Das Fenster umfasst das gesamte Dokument und auch die Registerkarte. Der Navigator ist der Browser, der das Fenster (das das Dokument umfasst) und alle anderen Fenster enthält.](document-window-navigator.png)

- Das Fenster ist der Browsertab, in den eine Webseite geladen wird; dies wird in JavaScript durch das [`Window`](/de/docs/Web/API/Window)-Objekt dargestellt. Mit den verfügbaren Methoden auf diesem Objekt können Sie Dinge wie die Größe des Fensters zurückgeben (siehe [`Window.innerWidth`](/de/docs/Web/API/Window/innerWidth) und [`Window.innerHeight`](/de/docs/Web/API/Window/innerHeight)), das Dokument manipulieren, das in diesem Fenster geladen wird, clientseitig spezifische Daten für dieses Dokument speichern (zum Beispiel mit einer lokalen Datenbank oder einem anderen Speichermedium), einen [Ereignis-Handler](/de/docs/Learn/JavaScript/Building_blocks/Events) an dem aktuellen Fenster anhängen und mehr.
- Der Navigator repräsentiert den Zustand und die Identität des Browsers (d.h. des User-Agents), wie er im Web existiert. In JavaScript wird dies durch das [`Navigator`](/de/docs/Web/API/Navigator)-Objekt dargestellt. Sie können dieses Objekt verwenden, um Dinge abzurufen wie die bevorzugte Sprache des Benutzers, einen Medien-Stream von der Webcam des Benutzers usw.
- Das Dokument (durch das DOM in Browsern repräsentiert) ist die tatsächliche Seite, die in das Fenster geladen wird, und wird in JavaScript durch das [`Document`](/de/docs/Web/API/Document)-Objekt dargestellt. Sie können dieses Objekt verwenden, um Informationen zu HTML und CSS, aus denen das Dokument besteht, zurückzugeben und zu manipulieren, zum Beispiel eine Referenz zu einem Element im DOM zu erhalten, dessen Textinhalt zu ändern, neue Stile darauf anzuwenden, neue Elemente zu erstellen und sie als Kinder an das aktuelle Element anzuhängen oder sie sogar ganz zu löschen.

In diesem Artikel konzentrieren wir uns hauptsächlich auf die Manipulation des Dokuments, aber wir zeigen nebenbei noch einige andere nützliche Teile.

## Das Document Object Model

Das aktuell in jedem Ihrer Browser-Tabs geladene Dokument wird durch ein Document Object Model dargestellt. Dies ist eine "Baumstruktur"-Darstellung, die vom Browser erstellt wird und es ermöglicht, dass die HTML-Struktur leicht von Programmiersprachen aus zugegriffen wird – zum Beispiel verwendet der Browser sie selbst, um Stil- und andere Informationen auf die richtigen Elemente anzuwenden, während er eine Seite rendert, und Entwickler wie Sie können das DOM nach dem Rendern der Seite mit JavaScript manipulieren.

Wir haben eine Beispielseite unter [dom-example.html](https://github.com/mdn/learning-area/blob/main/javascript/apis/document-manipulation/dom-example.html) erstellt ([sehen Sie es sich auch live an](https://mdn.github.io/learning-area/javascript/apis/document-manipulation/dom-example.html)). Versuchen Sie, diese in Ihrem Browser zu öffnen – es ist eine sehr einfache Seite, die ein {{htmlelement("section")}}-Element enthält, in dem sich ein Bild und ein Absatz mit einem Link befinden. Der HTML-Quellcode sieht so aus:

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

![Baumstruktur-Darstellung des Document Object Model: Der obere Knoten ist der Doctype und das HTML-Element. Die Kindknoten des HTML umfassen Kopf und Körper. Jedes Kindelement ist ein Zweig. Alle Texte, auch Leerzeichen, werden ebenfalls angezeigt.](dom-screenshot.png)

> [!NOTE]
> Dieses DOM-Baumdiagramm wurde mit Ian Hicksons [Live DOM-Viewer](https://software.hixie.ch/utilities/js/live-dom-viewer/) erstellt.

Jeder Eintrag im Baum wird als **Knoten** bezeichnet. Sie können im obigen Diagramm sehen, dass einige Knoten Elemente darstellen (identifiziert als `HTML`, `HEAD`, `META` und so weiter) und andere Texte darstellen (identifiziert als `#text`). Es gibt [auch andere Arten von Knoten](/de/docs/Web/API/Node/nodeType), aber dies sind die Haupttypen, denen Sie begegnen werden.

Knoten werden auch nach ihrer Position im Baum relativ zu anderen Knoten referenziert:

- **Root-Knoten**: Der oberste Knoten im Baum, der im Fall von HTML immer der `HTML`-Knoten ist (andere Markup-Vokabularien wie SVG und benutzerdefiniertes XML werden andere Root-Elemente haben).
- **Kindknoten**: Ein Knoten _direkt_ innerhalb eines anderen Knotens. Zum Beispiel ist `IMG` ein Kind von `SECTION` in dem obigen Beispiel.
- **Nachkommensknoten**: Ein Knoten _irgendwo_ innerhalb eines anderen Knotens. Zum Beispiel ist `IMG` ein Kind von `SECTION` in dem obigen Beispiel und auch ein Nachkomme. `IMG` ist kein Kind von `BODY`, da es zwei Ebenen darunter im Baum liegt, aber es ist ein Nachkomme von `BODY`.
- **Elternknoten**: Ein Knoten, der einen anderen Knoten innerhalb von sich hat. Zum Beispiel ist `BODY` der Elternknoten von `SECTION` in dem obigen Beispiel.
- **Geschwisterknoten**: Knoten, die auf derselben Ebene unter demselben Elternknoten im DOM-Baum sitzen. Zum Beispiel sind `IMG` und `P` Geschwister in dem obigen Beispiel.

Es ist nützlich, sich mit dieser Terminologie vertraut zu machen, bevor Sie mit dem DOM arbeiten, da einige der Codebegriffe, denen Sie begegnen werden, sie verwenden. Möglicherweise sind Sie auch darauf gestoßen, wenn Sie CSS studiert haben (z.B. Nachkommen-Selektor, Kind-Selektor).

## Aktives Lernen: Grundlegende DOM-Manipulation

Um mit dem Erlernen der DOM-Manipulation zu beginnen, beginnen wir mit einem praktischen Beispiel.

1. Nehmen Sie sich eine lokale Kopie der [dom-example.html Seite](https://github.com/mdn/learning-area/blob/main/javascript/apis/document-manipulation/dom-example.html) und das dazugehörige [Bild](https://github.com/mdn/learning-area/blob/main/javascript/apis/document-manipulation/dinosaur.png).
2. Fügen Sie ein `<script></script>`-Element direkt über dem schließenden `</body>`-Tag hinzu.
3. Um ein Element im DOM zu manipulieren, müssen Sie es zuerst auswählen und eine Referenz darauf in einer Variablen speichern. Fügen Sie in Ihrem Skript-Element die folgende Zeile hinzu:

   ```js
   const link = document.querySelector("a");
   ```

4. Jetzt, da wir die Elementreferenz in einer Variablen gespeichert haben, können wir damit beginnen, sie mit den ihr verfügbaren Eigenschaften und Methoden zu manipulieren (diese sind auf Schnittstellen wie [`HTMLAnchorElement`](/de/docs/Web/API/HTMLAnchorElement) im Fall des {{htmlelement("a")}}-Elements, seiner allgemeineren Elternschnittstelle [`HTMLElement`](/de/docs/Web/API/HTMLElement), und [`Node`](/de/docs/Web/API/Node) - die alle Knoten in einem DOM darstellt - definiert). Zuerst ändern wir den Text im Link durch Aktualisierung des Werts der [`Node.textContent`](/de/docs/Web/API/Node/textContent)-Eigenschaft. Fügen Sie die folgende Zeile unter der vorherigen hinzu:

   ```js
   link.textContent = "Mozilla Developer Network";
   ```

5. Wir sollten auch die URL ändern, auf die der Link zeigt, damit er nicht an den falschen Ort führt, wenn darauf geklickt wird. Fügen Sie die folgende Zeile hinzu, erneut am Ende:

   ```js
   link.href = "https://developer.mozilla.org";
   ```

Beachten Sie, dass es, wie bei vielen Dingen in JavaScript, viele Möglichkeiten gibt, ein Element auszuwählen und eine Referenz darauf in einer Variablen zu speichern. [`Document.querySelector()`](/de/docs/Web/API/Document/querySelector) ist der empfohlene moderne Ansatz. Es ist praktisch, weil Sie Elemente mit CSS-Selektoren auswählen können. Der obige `querySelector()`-Aufruf wird das erste {{htmlelement("a")}}-Element auswählen, das im Dokument erscheint. Wenn Sie mehrere Elemente auswählen und Dinge damit tun möchten, könnten Sie [`Document.querySelectorAll()`](/de/docs/Web/API/Document/querySelectorAll) verwenden, das jedes Element im Dokument auswählt, das zum Selektor passt, und Referenzen darauf in einem [array](/de/docs/Learn/JavaScript/First_steps/Arrays)-ähnlichen Objekt namens [`NodeList`](/de/docs/Web/API/NodeList) speichert.

Es gibt ältere Methoden, um Elementreferenzen zu erhalten, wie:

- [`Document.getElementById()`](/de/docs/Web/API/Document/getElementById), das ein Element mit einem gegebenen `id`-Attributwert auswählt, z.B. `<p id="myId">Mein Absatz</p>`. Die ID wird als Parameter an die Funktion übergeben, d.h. `const elementRef = document.getElementById('myId')`.
- [`Document.getElementsByTagName()`](/de/docs/Web/API/Document/getElementsByTagName), das ein Array-ähnliches Objekt zurückgibt, das alle Elemente auf der Seite eines gegebenen Typs enthält, zum Beispiel `<p>`s, `<a>`s, etc. Der Elementtyp wird als Parameter an die Funktion übergeben, d.h. `const elementRefArray = document.getElementsByTagName('p')`.

Diese beiden funktionieren besser in älteren Browsern als die modernen Methoden wie `querySelector()`, sind aber nicht so praktisch. Schauen Sie nach, was Sie sonst noch finden können!

### Erstellen und Platzieren neuer Knoten

Das Obige hat Ihnen einen kleinen Vorgeschmack darauf gegeben, was Sie tun können, aber lassen Sie uns weiter gehen und sehen, wie wir neue Elemente erstellen können.

1. Gehen wir zurück zu dem aktuellen Beispiel und holen wir uns eine Referenz auf unser {{htmlelement("section")}}-Element — fügen Sie den folgenden Code am Ende Ihres vorhandenen Skripts hinzu (machen Sie dasselbe mit den anderen Zeilen auch):

   ```js
   const sect = document.querySelector("section");
   ```

2. Erstellen wir nun einen neuen Absatz mit [`Document.createElement()`](/de/docs/Web/API/Document/createElement) und geben ihm einigen Textinhalt wie zuvor:

   ```js
   const para = document.createElement("p");
   para.textContent = "We hope you enjoyed the ride.";
   ```

3. Sie können den neuen Absatz jetzt am Ende der Sektion mit [`Node.appendChild()`](/de/docs/Web/API/Node/appendChild) anfügen:

   ```js
   sect.appendChild(para);
   ```

4. Schließlich für diesen Teil, fügen wir eine Textknoten in den Absatz ein, in dem der Link ist, um den Satz schön abzurunden. Zuerst erstellen wir den Textknoten mit [`Document.createTextNode()`](/de/docs/Web/API/Document/createTextNode):

   ```js
   const text = document.createTextNode(
     " — the premier source for web development knowledge.",
   );
   ```

5. Jetzt holen wir uns eine Referenz auf den Absatz, in dem der Link eingebettet ist, und fügen den Textknoten hinzu:

   ```js
   const linkPara = document.querySelector("p");
   linkPara.appendChild(text);
   ```

Das ist das Wichtigste, was Sie für das Hinzufügen von Knoten zum DOM benötigen — Sie werden viel Gebrauch von diesen Methoden machen, wenn Sie dynamische Schnittstellen erstellen (wir werden später auf einige Beispiele eingehen).

### Verschieben und Entfernen von Elementen

Es kann Zeiten geben, in denen Sie Knoten verschieben oder sie insgesamt aus dem DOM löschen möchten. Dies ist durchaus möglich.

Wenn wir den Absatz mit dem eingebetteten Link an das Ende der Sektion verschieben wollten, könnten wir dies tun:

```js
sect.appendChild(linkPara);
```

Dies verschiebt den Absatz nach unten zum Ende der Sektion. Sie könnten gedacht haben, dass es eine zweite Kopie davon erstellen würde, aber das ist nicht der Fall — `linkPara` ist eine Referenz auf die eine und einzige Kopie dieses Absatzes. Wenn Sie eine Kopie erstellen und diese ebenfalls hinzufügen möchten, müssten Sie stattdessen [`Node.cloneNode()`](/de/docs/Web/API/Node/cloneNode) verwenden.

Das Entfernen eines Knotens ist auch ziemlich einfach, zumindest wenn Sie eine Referenz auf den zu entfernenden Knoten und seinen Elternknoten haben. In unserem aktuellen Fall verwenden wir einfach [`Node.removeChild()`](/de/docs/Web/API/Node/removeChild), so:

```js
sect.removeChild(linkPara);
```

Wenn Sie einen Knoten nur basierend auf einer Referenz auf sich selbst entfernen möchten, was ziemlich häufig ist, können Sie [`Element.remove()`](/de/docs/Web/API/Element/remove) verwenden:

```js
linkPara.remove();
```

Diese Methode wird in älteren Browsern nicht unterstützt. Sie haben keine Methode, um einem Knoten mitzuteilen, sich selbst zu entfernen, daher müssten Sie Folgendes tun.

```js
linkPara.parentNode.removeChild(linkPara);
```

Versuchen Sie, die obigen Zeilen zu Ihrem Code hinzuzufügen.

### Manipulation von Stilen

Es ist möglich, CSS-Stile auf verschiedene Weisen über JavaScript zu manipulieren.

Zunächst können Sie eine Liste aller Stylesheets erhalten, die an ein Dokument angehängt sind, indem Sie [`Document.stylesheets`](/de/docs/Web/API/Document/stylesheets) verwenden, das ein Array-ähnliches Objekt mit [`CSSStyleSheet`](/de/docs/Web/API/CSSStyleSheet)-Objekten zurückgibt. Sie können dann Stile nach Belieben hinzufügen/entfernen. Wir werden jedoch nicht weiter auf diese Funktionen eingehen, da sie eine etwas archaische und schwierige Art der Stilmanipulation darstellen. Es gibt wesentlich einfachere Möglichkeiten.

Die erste Möglichkeit besteht darin, Inline-Stile direkt zu den Elementen hinzuzufügen, die Sie dynamisch stylen möchten. Dies erfolgt mit der [`HTMLElement.style`](/de/docs/Web/API/HTMLElement/style)-Eigenschaft, die Inline-Styling-Informationen für jedes Element im Dokument enthält. Sie können Eigenschaften dieses Objekts setzen, um Elementstile direkt zu aktualisieren.

1. Als Beispiel, versuchen Sie, diese Zeilen zu unserem aktuellen Beispiel hinzuzufügen:

   ```js
   para.style.color = "white";
   para.style.backgroundColor = "black";
   para.style.padding = "10px";
   para.style.width = "250px";
   para.style.textAlign = "center";
   ```

2. Laden Sie die Seite neu und Sie werden sehen, dass die Stile auf den Absatz angewendet wurden. Wenn Sie sich diesen Absatz im [Page Inspector/DOM Inspector Ihres Browsers](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/index.html) ansehen, sehen Sie, dass diese Linien tatsächlich Inline-Stile zum Dokument hinzufügen:

   ```html
   <p
     style="color: white; background-color: black; padding: 10px; width: 250px; text-align: center;">
     We hope you enjoyed the ride.
   </p>
   ```

> [!NOTE]
> Beachten Sie, wie die JavaScript-Property-Versionen der CSS-Stile im {{Glossary("camel_case", "Kamelstil")}} geschrieben sind, während die CSS-Versionen durch Bindestriche ({{Glossary("kebab_case", "Kebab-Stil")}}) getrennt sind (z.B. `backgroundColor` versus `background-color`). Achten Sie darauf, diese nicht zu vermischen, da es sonst nicht funktioniert.

Es gibt eine weitere häufige Möglichkeit, Stile in Ihrem Dokument dynamisch zu manipulieren, die wir uns nun ansehen werden.

1. Löschen Sie die vorherigen fünf Zeilen, die Sie zum JavaScript hinzugefügt haben.
2. Fügen Sie die folgende Zeile in Ihr HTML-{{htmlelement("head")}} hinzu:

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

3. Jetzt wenden wir uns einer sehr nützlichen Methode für die allgemeine HTML-Manipulation zu — [`Element.setAttribute()`](/de/docs/Web/API/Element/setAttribute) — diese nimmt zwei Argumente entgegen, das Attribut, das Sie auf dem Element festlegen möchten, und den Wert, den Sie darauf setzen möchten. In diesem Fall setzen wir einen Klassennamen von "highlight" auf unseren Absatz:

   ```js
   para.setAttribute("class", "highlight");
   ```

4. Aktualisieren Sie Ihre Seite, und Sie werden keine Veränderung sehen — die CSS wird noch auf den Absatz angewendet, diesmal jedoch, indem ihm eine Klasse gegeben wird, die von unserer CSS-Regel ausgewählt wird, nicht als Inline-CSS-Stile.

Welche Methode Sie wählen, liegt bei Ihnen; beide haben ihre Vor- und Nachteile. Die erste Methode erfordert weniger Einrichtung und ist gut für einfache Anwendungen, während die zweite Methode eher puristisch ist (keine Mischung von CSS und JavaScript, keine Inline-Stile, die als schlechte Praxis angesehen werden). Wenn Sie größere und komplexere Apps erstellen, werden Sie wahrscheinlich die zweite Methode häufiger verwenden, aber es liegt wirklich an Ihnen.

An diesem Punkt haben wir eigentlich nichts Brauchbares getan! Es macht keinen Sinn, statische Inhalte mit JavaScript zu erstellen — Sie könnten diese genauso gut direkt in Ihr HTML schreiben und JavaScript nicht verwenden. Es ist komplexer als HTML, und das Erstellen Ihrer Inhalte mit JavaScript hat auch andere damit verbundene Probleme (wie das Nicht-Lesbarsein durch Suchmaschinen).

Im nächsten Abschnitt werden wir uns eine praktischere Verwendung von DOM-APIs ansehen.

> [!NOTE]
> Sie finden unsere [fertige Version des dom-example.html](https://github.com/mdn/learning-area/blob/main/javascript/apis/document-manipulation/dom-example-manipulated.html)-Demos auf GitHub ([sehen Sie es sich auch live an](https://mdn.github.io/learning-area/javascript/apis/document-manipulation/dom-example-manipulated.html)).

## Aktives Lernen: Eine dynamische Einkaufsliste

Bei dieser Herausforderung wollen wir ein einfaches Einkaufsliste-Beispiel erstellen, das Ihnen ermöglicht, Elemente über ein Formulareingabefeld und einen Button dynamisch zur Liste hinzuzufügen. Wenn Sie ein Element zur Eingabe hinzufügen und den Button drücken:

- Soll das Element in der Liste erscheinen.
- Soll jedem Element ein Button gegeben werden, der gedrückt werden kann, um dieses Element aus der Liste zu löschen.
- Soll die Eingabe geleert und fokussiert werden, damit Sie ein weiteres Element eingeben können.

Das fertige Demo wird ungefähr so aussehen:

![Demo-Layout einer Einkaufsliste. Eine 'meine Einkaufsliste'-Überschrift gefolgt von 'Neues Element eingeben' mit einem Eingabefeld und einem 'Element hinzufügen'-Button. Die Liste der bereits hinzugefügten Elemente befindet sich unten, jedes mit einem entsprechenden Löschen-Button.](shopping-list.png)

Um die Übung abzuschließen, folgen Sie den unten stehenden Schritten und stellen Sie sicher, dass die Liste wie oben beschrieben funktioniert.

1. Laden Sie zunächst eine Kopie unserer [shopping-list.html](https://github.com/mdn/learning-area/blob/main/javascript/apis/document-manipulation/shopping-list.html) Startdatei herunter und machen Sie eine Kopie davon. Sie werden sehen, dass sie einige minimale CSS, ein Div mit einem Label, eine Eingabe und einen Button sowie eine leere Liste und ein {{htmlelement("script")}}-Element enthält. Sie werden alle Ihre Ergänzungen innerhalb des Skripts machen.
2. Erstellen Sie drei Variablen, die Referenzen auf die Liste ({{htmlelement("ul")}}), {{htmlelement("input")}} und {{htmlelement("button")}}-Elemente halten.
3. Erstellen Sie eine [Funktion](/de/docs/Learn/JavaScript/Building_blocks/Functions), die als Reaktion auf das Klicken des Buttons ausgeführt wird.
4. Innerhalb des Funktionskörpers speichern Sie den aktuellen [Wert](/de/docs/Web/API/HTMLInputElement/value) des Eingabeelements in einer Variablen.
5. Leeren Sie als Nächstes das Eingabeelement, indem Sie seinen Wert auf einen leeren String setzen — `''`.
6. Erstellen Sie drei neue Elemente — ein Listenelement ({{htmlelement('li')}}), {{htmlelement('span')}} und {{htmlelement('button')}} — und speichern Sie sie in Variablen.
7. Fügen Sie das Span- und das Button-Element als Kinder des Listenelements hinzu.
8. Setzen Sie den Textinhalt des Span-Elements auf den zuvor gespeicherten Wert des Eingabeelements und den Textinhalt des Buttons auf 'Delete'.
9. Fügen Sie das Listenelement als Kind zur Liste hinzu.
10. Hängen Sie einen Ereignishandler an den Löschen-Button an, damit, wenn er angeklickt wird, das gesamte Listenelement (`<li>...</li>`) gelöscht wird.
11. Verwenden Sie schließlich die [`focus()`](/de/docs/Web/API/HTMLElement/focus)-Methode, um das Eingabeelement bereitzuhalten, um das nächste Element der Einkaufsliste einzugeben.

> [!NOTE]
> Wenn Sie wirklich stecken bleiben, sehen Sie sich unsere [fertige Einkaufsliste](https://github.com/mdn/learning-area/blob/main/javascript/apis/document-manipulation/shopping-list-finished.html) an ([sehen Sie sie auch live in Betrieb](https://mdn.github.io/learning-area/javascript/apis/document-manipulation/shopping-list-finished.html)).

## Zusammenfassung

Wir haben das Ende unserer Untersuchung der Dokument- und DOM-Manipulation erreicht. An diesem Punkt sollten Sie verstehen, was die wichtigen Teile eines Webbrowsers im Hinblick auf die Steuerung von Dokumenten und anderen Aspekten der Web-Erfahrung des Benutzers sind. Am wichtigsten ist, dass Sie verstehen sollten, was das Document Object Model ist und wie Sie es manipulieren können, um nützliche Funktionalität zu schaffen.

## Siehe auch

Es gibt viele weitere Funktionen, die Sie zur Manipulation Ihrer Dokumente verwenden können. Sehen Sie sich einige unserer Referenzen an und entdecken Sie, was Sie noch finden können:

- [`Document`](/de/docs/Web/API/Document)
- [`Window`](/de/docs/Web/API/Window)
- [`Node`](/de/docs/Web/API/Node)
- [`HTMLElement`](/de/docs/Web/API/HTMLElement), [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement), [`HTMLImageElement`](/de/docs/Web/API/HTMLImageElement) usw.

(Siehe unser [Web-API-Index](/de/docs/Web/API) für die vollständige Liste der auf MDN dokumentierten Web-APIs!)

{{PreviousMenuNext("Learn/JavaScript/Client-side_web_APIs/Introduction", "Learn/JavaScript/Client-side_web_APIs/Fetching_data", "Learn/JavaScript/Client-side_web_APIs")}}
