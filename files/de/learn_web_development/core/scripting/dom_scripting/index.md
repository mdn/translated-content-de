---
title: Einführung in DOM-Scripting
short-title: DOM scripting
slug: Learn_web_development/Core/Scripting/DOM_scripting
l10n:
  sourceCommit: 6149deb5f4beccdc09549fbf8d1810d9a4dc3462
---

{{PreviousMenuNext("Learn_web_development/Core/Scripting/Object_basics","Learn_web_development/Core/Scripting/Network_requests", "Learn_web_development/Core/Scripting")}}

Beim Schreiben von Webseiten und Apps ist es eine der häufigsten Anforderungen, die Dokumentenstruktur in irgendeiner Form zu ändern. Dies wird in der Regel durch Manipulation des Document Object Model (DOM) über eine Reihe von integrierten Browser-APIs zur Steuerung von HTML und Stilinformationen erreicht. In diesem Artikel führen wir Sie in das **DOM-Scripting** ein.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>Verständnis von <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a> und den <a href="/de/docs/Learn_web_development/Core/Styling_basics">Grundlagen von CSS</a>, Vertrautheit mit den JavaScript-Grundlagen, wie in früheren Lektionen behandelt.</td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Was das DOM ist — die interne Darstellung der HTML-Struktur des Dokuments im Browser als eine Hierarchie von Objekten.</li>
          <li>Die wichtigen Teile eines Webbrowsers, wie sie in JavaScript durch <code>Navigator</code>, <code>Window</code> und <code>Document</code> dargestellt werden.</li>
          <li>Wie DOM-Knoten relativ zueinander im DOM-Baum existieren — Wurzel, Elternteil, Kind, Geschwister und Nachkommen.</li>
          <li>Abrufen von Referenzen zu DOM-Knoten, Erstellen neuer Knoten, Hinzufügen und Entfernen von Knoten und Attributen.</li>
          <li>Manipulation von CSS-Stilen mit JavaScript.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Die wichtigen Teile eines Webbrowsers

Webbrowser sind sehr komplexe Softwarepakete mit vielen beweglichen Teilen, von denen viele nicht von einem Webentwickler mit JavaScript kontrolliert oder manipuliert werden können. Sie könnten denken, dass solche Einschränkungen negativ sind, aber Browser sind aus guten Gründen gesichert, hauptsächlich im Hinblick auf die Sicherheit. Stellen Sie sich vor, eine Webseite könnte auf Ihre gespeicherten Passwörter oder andere sensible Informationen zugreifen und sich als Sie bei Webseiten anmelden?

Trotz der Einschränkungen geben uns Web-APIs immer noch Zugang zu vielen Funktionen, die es uns ermöglichen, viele Dinge mit Webseiten zu tun. Es gibt einige wirklich offensichtliche Dinge, auf die Sie regelmäßig in Ihrem Code verweisen werden — betrachten Sie das folgende Diagramm, das die Hauptteile eines Browsers darstellt, die direkt am Anzeigen von Webseiten beteiligt sind:

![Wichtige Teile des Webbrowsers; das Dokument ist die Webseite. Das Fenster umfasst das gesamte Dokument und auch den Tab. Der Navigator ist der Browser, der das Fenster (das das Dokument enthält) und alle anderen Fenster umfasst.](document-window-navigator.png)

- Das **Fenster** repräsentiert den Browsertab, in den eine Webseite geladen wird; dies wird in JavaScript durch das [`Window`](/de/docs/Web/API/Window)-Objekt dargestellt. Mithilfe von Methoden, die auf diesem Objekt verfügbar sind, können Sie Dinge tun wie die Größe des Fensters zurückgeben (siehe [`Window.innerWidth`](/de/docs/Web/API/Window/innerWidth) und [`Window.innerHeight`](/de/docs/Web/API/Window/innerHeight)), das in diesem Fenster geladene Dokument manipulieren, clientseitig spezifische Daten für dieses Dokument speichern (z. B. über eine lokale Datenbank oder andere Speicherungsmethoden), einen [Ereignishandler](/de/docs/Learn_web_development/Core/Scripting/Events) an das aktuelle Fenster anhängen und mehr.
- Der **Navigator** repräsentiert den Zustand und die Identität des Browsers im Web. In JavaScript wird dies durch das [`Navigator`](/de/docs/Web/API/Navigator)-Objekt dargestellt. Mit diesem Objekt können Sie Dinge wie die bevorzugte Sprache des Benutzers oder einen Medienstrom von der Webcam des Benutzers abrufen.
- Das **Dokument** (im Browser durch das DOM dargestellt) ist die tatsächliche Seite, die in das Fenster geladen wird und wird in JavaScript durch das [`Document`](/de/docs/Web/API/Document)-Objekt dargestellt. Mit diesem Objekt können Sie Informationen zu dem die Seite umgebenden HTML und CSS zurückgeben und manipulieren, z. B. eine Referenz zu einem Element im DOM abrufen, seinen Textinhalt ändern, neue Stile darauf anwenden, neue Elemente erstellen und hinzufügen, oder es sogar vollständig löschen.

In diesem Artikel konzentrieren wir uns hauptsächlich auf die Manipulation des Dokuments, aber wir zeigen auch einige andere nützliche Punkte.

## Das Document Object Model

Lassen Sie uns eine kurze Zusammenfassung des Document Object Model (DOM) geben, das wir auch bereits früher im Kurs betrachtet haben. Das derzeit in jedem Ihrer Browser-Tabs geladene Dokument wird durch ein DOM dargestellt. Dies ist eine „Baumstruktur“-Darstellung, die vom Browser erstellt wird und es ermöglicht, die HTML-Struktur leicht durch Programmiersprachen zu erreichen — z. B. verwendet der Browser es selbst, um das Styling und andere Informationen auf die richtigen Elemente anzuwenden, wenn er eine Seite rendert, und Entwickler wie Sie selbst können das DOM mit JavaScript manipulieren, nachdem die Seite gerendert wurde.

> [!NOTE]
> Scrimbas [The Document Object Model](https://scrimba.com/learn-javascript-c0v/~0g?via=mdn) <sup>[_MDN learning partner_](/de/docs/MDN/Writing_guidelines/Learning_content#partner_links_and_embeds)</sup> bietet einen praktischen Durchgang durch den Begriff "DOM" und was er bedeutet.

Wir haben eine Beispielseite erstellt unter [dom-example.html](https://github.com/mdn/learning-area/blob/main/javascript/apis/document-manipulation/dom-example.html) ([sehen Sie es auch live](https://mdn.github.io/learning-area/javascript/apis/document-manipulation/dom-example.html)). Versuchen Sie, diese in Ihrem Browser zu öffnen — es ist eine sehr einfache Seite, die ein {{htmlelement("section")}} enthält, in dem sich ein Bild und ein Absatz mit einem Link befinden. Der HTML-Quellcode sieht folgendermaßen aus:

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
        alt="A red Tyrannosaurus Rex: A two legged dinosaur
        standing upright like a human, with small arms, and a
        large head with lots of sharp teeth." />
      <p>
        Here we will add a link to the
        <a href="https://www.mozilla.org/">Mozilla homepage</a>
      </p>
    </section>
  </body>
</html>
```

Das DOM hingegen sieht wie folgt aus:

![Baumstruktur-Darstellung des Document Object Model: Der oberste Knoten ist der Doctype und das HTML-Element. Kindknoten des HTML umfassen Kopf und Körper. Jedes Kindelement ist ein Zweig. Alle Texte, auch Leerzeichen, werden ebenfalls angezeigt.](dom-screenshot.png)

> [!NOTE]
> Dieses DOM-Baumdiagramm wurde mit Ian Hicksons [Live DOM viewer](https://software.hixie.ch/utilities/js/live-dom-viewer/) erstellt.

Jeder Eintrag im Baum wird als **Knoten** bezeichnet. Sie können im obigen Diagramm sehen, dass einige Knoten Elemente darstellen (identifiziert als `HTML`, `HEAD`, `META` und so weiter) und andere Text repräsentieren (identifiziert als `#text`). Es gibt [auch andere Knotentypen](/de/docs/Web/API/Node/nodeType), aber dies sind die Haupttypen, denen Sie begegnen werden.

Knoten werden auch durch ihre Position im Baum relativ zu anderen Knoten bezeichnet:

- **Wurzelknoten**: Der oberste Knoten im Baum, der im Fall von HTML immer der `HTML`-Knoten ist (andere Markup-Vokabulare wie SVG und benutzerdefiniertes XML haben unterschiedliche Wurzelelemente).
- **Kinderknoten**: Ein Knoten _direkt_ innerhalb eines anderen Knotens. Zum Beispiel ist `IMG` ein Kind von `SECTION` im obigen Beispiel.
- **Nachkommenknoten**: Ein Knoten _irgendwo_ innerhalb eines anderen Knotens. Zum Beispiel ist `IMG` ein Kind von `SECTION` im obigen Beispiel, und es ist auch ein Nachkomme. `IMG` ist kein Kind von `BODY`, da es zwei Ebenen darunter im Baum liegt, aber es ist ein Nachkomme von `BODY`.
- **Elternknoten**: Ein Knoten, der einen anderen Knoten in sich hat. Zum Beispiel ist `BODY` der Elternknoten von `SECTION` im obigen Beispiel.
- **Geschwisterknoten**: Knoten, die auf derselben Ebene unter demselben Elternknoten im DOM-Baum sitzen. Zum Beispiel sind `IMG` und `P` im obigen Beispiel Geschwister.

Es ist hilfreich, sich mit dieser Terminologie vertraut zu machen, bevor man mit dem DOM arbeitet, da viele der Code-Termine, die Sie finden werden, davon Gebrauch machen. Sie werden ihnen auch in CSS begegnen (zum Beispiel Nachkommen-Selektor, Kind-Selektor).

## Durchführung einiger grundlegender DOM-Manipulationen

Um mit dem Lernen über DOM-Manipulation zu beginnen, lassen Sie uns mit einem praktischen Beispiel beginnen.

1. Nehmen Sie eine lokale Kopie der [dom-example.html-Seite](https://github.com/mdn/learning-area/blob/main/javascript/apis/document-manipulation/dom-example.html) und des [Bildes](https://github.com/mdn/learning-area/blob/main/javascript/apis/document-manipulation/dinosaur.png), das dazu gehört.
2. Fügen Sie ein `<script></script>`-Element direkt über dem abschließenden `</body>`-Tag hinzu.
3. Um ein Element im DOM zu manipulieren, müssen Sie es zuerst auswählen und eine Referenz darauf in einer Variablen speichern. Fügen Sie in Ihrem Skriptelement die folgende Zeile hinzu:

   ```js
   const link = document.querySelector("a");
   ```

4. Jetzt haben wir die Elementreferenz in einer Variablen gespeichert und können damit beginnen, sie mit den Eigenschaften und Methoden zu manipulieren, die darauf verfügbar sind (diese sind auf Schnittstellen wie [`HTMLAnchorElement`](/de/docs/Web/API/HTMLAnchorElement) im Fall des {{htmlelement("a")}}-Elements, seiner allgemeineren Elternschnittstelle [`HTMLElement`](/de/docs/Web/API/HTMLElement) und [`Node`](/de/docs/Web/API/Node) — die alle Knoten in einem DOM repräsentiert — definiert). Lassen Sie uns zunächst den Text im Link ändern, indem wir den Wert der [`Node.textContent`](/de/docs/Web/API/Node/textContent)-Eigenschaft aktualisieren. Fügen Sie die folgende Zeile unter der vorherigen hinzu:

   ```js
   link.textContent = "Mozilla Developer Network";
   ```

5. Wir sollten auch die URL ändern, auf die der Link zeigt, damit er nicht auf die falsche Seite verweist, wenn er angeklickt wird. Fügen Sie erneut die folgende Zeile am unteren Rand hinzu:

   ```js
   link.href = "https://developer.mozilla.org";
   ```

Wie bei vielen Dingen in JavaScript gibt es viele Möglichkeiten, ein Element auszuwählen und eine Referenz darauf in einer Variablen zu speichern. [`Document.querySelector()`](/de/docs/Web/API/Document/querySelector) ist die empfohlene moderne Methode. Es ist praktisch, weil Sie damit Elemente mithilfe von CSS-Selektoren auswählen können. Der obige `querySelector()`-Aufruf wird das erste {{htmlelement("a")}}-Element auswählen, das im Dokument erscheint. Wenn Sie mehrere Elemente auswählen und ändern möchten, könnten Sie [`Document.querySelectorAll()`](/de/docs/Web/API/Document/querySelectorAll) verwenden, das jedes Element im Dokument auswählt, das dem Selektor entspricht, und Referenzen darauf in einem [Array](/de/docs/Learn_web_development/Core/Scripting/Arrays)-ähnlichen Objekt namens [`NodeList`](/de/docs/Web/API/NodeList) speichert.

Es gibt ältere Methoden, um Elementreferenzen zu erhalten, wie zum Beispiel:

- [`Document.getElementById()`](/de/docs/Web/API/Document/getElementById), das ein Element mit einem bestimmten `id`-Attributwert auswählt, z. B. `<p id="myId">Mein Absatz</p>`. Die ID wird als Parameter an die Funktion übergeben, d.h. `const elementRef = document.getElementById('myId')`.
- [`Document.getElementsByTagName()`](/de/docs/Web/API/Document/getElementsByTagName), das ein array-ähnliches Objekt zurückgibt, das alle Elemente der Seite eines bestimmten Typs enthält, zum Beispiel `<p>`s, `<a>`s usw. Der Elementtyp wird als Parameter an die Funktion übergeben, d.h. `const elementRefArray = document.getElementsByTagName('p')`.

Diese beiden Methoden funktionieren in älteren Browsern besser als die modernen Methoden wie `querySelector()`, sind aber nicht so bequem. Sehen Sie nach und entdecken Sie, welche anderen Methoden es gibt!

### Erstellen und Platzieren neuer Knoten

Das Obige hat Ihnen einen kleinen Vorgeschmack darauf gegeben, was Sie tun können, aber lassen Sie uns weitergehen und schauen, wie wir neue Elemente erstellen können.

1. Gehen wir zurück zum aktuellen Beispiel. Zunächst holen wir eine Referenz zu unserem {{htmlelement("section")}}-Element — fügen Sie den folgenden Code unten zu Ihrem bestehenden Skript hinzu (tun Sie dasselbe auch mit den anderen Zeilen):

   ```js
   const sect = document.querySelector("section");
   ```

2. Lassen Sie uns nun ein neues Absatz-Element mit [`Document.createElement()`](/de/docs/Web/API/Document/createElement) erstellen und ihm einen Textinhalt in derselben Weise wie zuvor geben:

   ```js
   const para = document.createElement("p");
   para.textContent = "We hope you enjoyed the ride.";
   ```

3. Sie können nun den neuen Absatz am Ende des Abschnitts mit [`Node.appendChild()`](/de/docs/Web/API/Node/appendChild) anhängen:

   ```js
   sect.appendChild(para);
   ```

4. Schließlich, für diesen Teil, fügen wir dem Absatz, in dem sich der Link befindet, einen Textknoten hinzu, um den Satz schön abzurunden. Zuerst erstellen wir den Textknoten mit [`Document.createTextNode()`](/de/docs/Web/API/Document/createTextNode):

   ```js
   const text = document.createTextNode(
     " — the premier source for web development knowledge.",
   );
   ```

5. Jetzt holen wir uns eine Referenz zu dem Absatz, in dem der Link ist, und fügen den Textknoten hinzu:

   ```js
   const linkPara = document.querySelector("p");
   linkPara.appendChild(text);
   ```

Das ist das Wichtigste, was Sie zum Hinzufügen von Knoten zum DOM brauchen — Sie werden viel von diesen Methoden benutzen, wenn Sie dynamische Schnittstellen erstellen (wir werden später einige Beispiele betrachten).

### Verschieben und Entfernen von Elementen

Es kann vorkommen, dass Sie Knoten verschieben oder sie vollständig aus dem DOM entfernen möchten. Das ist durchaus möglich.

Wenn wir den Absatz mit dem Link nach unten in den Abschnitt verschieben wollten, könnten wir dies tun:

```js
sect.appendChild(linkPara);
```

Dies verschiebt den Absatz nach unten in den Abschnitt. Sie könnten denken, dass es eine zweite Kopie daraus machen würde, aber das ist nicht der Fall — `linkPara` ist eine Referenz zu der einen und einzigen Kopie dieses Absatzes. Wenn Sie eine Kopie erstellen und diese ebenfalls hinzufügen wollten, müssten Sie stattdessen [`Node.cloneNode()`](/de/docs/Web/API/Node/cloneNode) verwenden.

Das Entfernen eines Knotens ist auch ziemlich einfach, zumindest wenn Sie eine Referenz auf den zu entfernenden Knoten und dessen Elternteil haben. In unserem aktuellen Fall verwenden wir einfach [`Node.removeChild()`](/de/docs/Web/API/Node/removeChild), so:

```js
sect.removeChild(linkPara);
```

Wenn Sie einen Knoten basierend auf nur einer Referenz auf sich selbst entfernen möchten, was ziemlich häufig vorkommt, können Sie [`Element.remove()`](/de/docs/Web/API/Element/remove) verwenden:

```js
linkPara.remove();
```

Diese Methode wird nicht von älteren Browsern unterstützt. Sie haben keine Methode, um einem Knoten zu sagen, dass er sich selbst entfernen soll, daher müssten Sie folgendes tun:

```js
linkPara.parentNode.removeChild(linkPara);
```

Versuchen Sie, die obigen Zeilen in Ihren Code einzufügen.

### Manipulation von Stilen

Es ist möglich, CSS-Stile auf verschiedene Weise über JavaScript zu manipulieren.

Zuerst können Sie eine Liste aller an ein Dokument angehängten Stylesheets mit [`Document.styleSheets`](/de/docs/Web/API/Document/styleSheets) abrufen, welche ein array-ähnliches Objekt mit [`CSSStyleSheet`](/de/docs/Web/API/CSSStyleSheet)-Objekten zurückgibt. Sie können dann nach Belieben Stile hinzufügen/entfernen. Wir werden jedoch nicht weiter auf diese Funktionen eingehen, da sie eine etwas archaische und schwierige Methode zur Stilmanipulation darstellen. Es gibt viel einfachere Möglichkeiten.

Die erste Möglichkeit besteht darin, Inline-Stile direkt auf die Elemente anzuwenden, die Sie dynamisch gestalten wollen. Dies wird mit der [`HTMLElement.style`](/de/docs/Web/API/HTMLElement/style)-Eigenschaft gemacht, welche Inline-Stilinformationsdaten für jedes Element im Dokument enthält. Sie können Eigenschaften dieses Objekts festlegen, um die Stilelemente direkt zu aktualisieren.

1. Zum Beispiel versuchen Sie, diese Zeilen zu unserem laufenden Beispiel hinzuzufügen:

   ```js
   para.style.color = "white";
   para.style.backgroundColor = "black";
   para.style.padding = "10px";
   para.style.width = "250px";
   para.style.textAlign = "center";
   ```

2. Laden Sie die Seite neu, und Sie werden sehen, dass die Stile auf den Absatz angewendet wurden. Wenn Sie sich diesen Absatz im [Seiteninspektor/DOM-Inspektor](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/index.html) Ihres Browsers ansehen, werden Sie sehen, dass diese Zeilen tatsächlich Inline-Stile zum Dokument hinzufügen:

   ```html
   <p
     style="color: white; background-color: black; padding: 10px; width: 250px; text-align: center;">
     We hope you enjoyed the ride.
   </p>
   ```

> [!NOTE]
> Beachten Sie, dass die JavaScript-Eigenschaftsversionen der CSS-Stile in {{Glossary("camel_case", "lower camel case")}} geschrieben sind, während die CSS-Versionen mit Bindestrichen ({{Glossary("kebab_case", "kebab-case")}}) versehen sind (z. B. `backgroundColor` versus `background-color`). Achten Sie darauf, dass Sie diese nicht vermischen, da es sonst nicht funktionieren wird.

Es gibt eine weitere gängige Möglichkeit, dynamisch Stile auf Ihrem Dokument zu manipulieren, die wir uns jetzt anschauen.

1. Löschen Sie die vorhergehenden fünf Zeilen, die Sie dem JavaScript hinzugefügt haben.
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

3. Nun wenden wir uns einer sehr nützlichen Methode zur allgemeinen HTML-Manipulation zu — [`Element.setAttribute()`](/de/docs/Web/API/Element/setAttribute) — diese nimmt zwei Argumente, das Attribut, das Sie auf dem Element festlegen möchten, und den Wert, den Sie dafür festlegen möchten. In diesem Fall werden wir einen Klassennamen `highlight` auf unseren Absatz setzen:

   ```js
   para.setAttribute("class", "highlight");
   ```

4. Aktualisieren Sie Ihre Seite, und Sie werden sehen, dass sich nichts geändert hat — das CSS wird immer noch auf den Absatz angewendet, aber diesmal, indem ihm eine Klasse zugewiesen wird, die von unserer CSS-Regel ausgewählt wird, und nicht durch Inline-CSS-Stile.

Welche Methode Sie wählen, liegt bei Ihnen; beide haben ihre Vorteile und Nachteile. Die erste Methode erfordert weniger Einrichtung und ist gut für einfache Anwendungen, während die zweite Methode puristischer ist (kein Vermischen von CSS und JavaScript, keine Inline-Stile, die als schlechte Praxis angesehen werden). Sobald Sie größere und komplexere Apps erstellen, werden Sie wahrscheinlich mehr die zweite Methode einsetzen, aber es liegt wirklich an Ihnen.

Zu diesem Zeitpunkt haben wir wirklich nichts Nützliches gemacht! Es hat keinen Sinn, JavaScript zu verwenden, um statische Inhalte zu erstellen — Sie könnten es genauso gut einfach in Ihr HTML schreiben und kein JavaScript verwenden. JavaScript ist komplexer als HTML, und das Erstellen Ihrer Inhalte mit JavaScript hat auch andere Probleme (wie dass es von Suchmaschinen nicht lesbar ist).

Im nächsten Abschnitt werden wir einen praktischeren Anwendungsfall für DOM-APIs betrachten.

> [!NOTE]
> Sie können unsere [fertige Version der dom-example.html](https://github.com/mdn/learning-area/blob/main/javascript/apis/document-manipulation/dom-example-manipulated.html)-Demo auf GitHub finden ([sehen Sie es auch live](https://mdn.github.io/learning-area/javascript/apis/document-manipulation/dom-example-manipulated.html)).

## Erstellen einer dynamischen Einkaufsliste

In dieser Übung möchten wir, dass Sie eine dynamische Einkaufsliste erstellen, die es Ihnen ermöglicht, Elemente mithilfe eines Formulareingabefeldes und eines Buttons hinzuzufügen. Wenn Sie einen Artikel eingeben und auf den Button drücken:

- Sollte der Artikel in der Liste erscheinen.
- Jeder Artikel sollte einen Button erhalten, mit dem der Artikel von der Liste gelöscht werden kann.
- Die Eingabe sollte geleert und fokussiert werden, bereit für die Eingabe eines weiteren Artikels.

Das fertige Demo wird in etwa wie das folgende aussehen — probieren Sie es aus, bevor Sie es selbst bauen!

```html hidden live-sample___dynamic-shopping-list
<h1>My shopping list</h1>

<div>
  <label for="item">Enter a new item:</label>
  <input type="text" name="item" id="item" />
  <button>Add item</button>
</div>

<ul></ul>
```

```css hidden live-sample___dynamic-shopping-list
li {
  margin-bottom: 10px;
}

li button {
  font-size: 12px;
  margin-left: 20px;
}
```

```js hidden live-sample___dynamic-shopping-list
const list = document.querySelector("ul");
const input = document.querySelector("input");
const button = document.querySelector("button");

button.addEventListener("click", () => {
  const myItem = input.value;
  input.value = "";

  const listItem = document.createElement("li");
  const listText = document.createElement("span");
  const listBtn = document.createElement("button");

  listItem.appendChild(listText);
  listText.textContent = myItem;
  listItem.appendChild(listBtn);
  listBtn.textContent = "Delete";
  list.appendChild(listItem);

  listBtn.addEventListener("click", () => {
    list.removeChild(listItem);
  });

  input.focus();
});
```

{{EmbedLiveSample("dynamic-shopping-list", "100%", 300)}}

Um die Übung abzuschließen, befolgen Sie die unten stehenden Schritte und stellen Sie sicher, dass sich die Liste wie beschrieben verhält.

1. Laden Sie zu Beginn eine Kopie unseres [shopping-list.html](https://github.com/mdn/learning-area/blob/main/javascript/apis/document-manipulation/shopping-list.html)-Startdatei herunter und machen Sie eine Kopie davon irgendwo. Sie werden sehen, dass diese einige minimale CSS, ein div mit einem Label, einem Input und einem Button sowie eine leere Liste und ein {{htmlelement("script")}}-Element enthält. Alle Ihre Ergänzungen werden im Script vorgenommen.
2. Erstellen Sie drei Variablen, die Referenzen zu den Elementen der Liste ({{htmlelement("ul")}}), {{htmlelement("input")}} und {{htmlelement("button")}} halten.
3. Erstellen Sie eine [Funktion](/de/docs/Learn_web_development/Core/Scripting/Functions), die in Reaktion auf das Klicken auf den Button ausgeführt wird.
4. Speichern Sie am Anfang des Funktionskörpers den aktuellen [Wert](/de/docs/Web/API/HTMLInputElement/value) des Input-Elements in einer Variablen.
5. Leeren Sie als Nächstes das Input-Element, indem Sie dessen Wert auf einen leeren String einstellen — `""`.
6. Erstellen Sie drei neue Elemente — ein Listenelement ({{htmlelement('li')}}), {{htmlelement('span')}} und {{htmlelement('button')}} — und speichern Sie diese in Variablen.
7. Hängen Sie das span und den Button als Kinder des Listenelements an.
8. Setzen Sie den Textinhalt des span auf den zuvor gespeicherten Wert des Input-Elements und den Textinhalt des Buttons auf 'Löschen'.
9. Hängen Sie das Listenelement als Kind der Liste an.
10. Fügen Sie dem Löschen-Button einen Ereignishandler hinzu, sodass, wenn er geklickt wird, das gesamte Listenelement (`<li>...</li>`) gelöscht wird.
11. Verwenden Sie schließlich die [`focus()`](/de/docs/Web/API/HTMLElement/focus)-Methode, um das Input-Element zu fokussieren, und seien Sie bereit, den nächsten Artikel der Einkaufsliste einzugeben.

## Zusammenfassung

Wir haben das Ende unseres Studiums der Dokument- und DOM-Manipulation erreicht. An diesem Punkt sollten Sie verstehen, welche die wichtigen Teile eines Webbrowsers in Bezug auf die Steuerung von Dokumenten und anderen Aspekten der Web-Erfahrung des Benutzers sind. Am wichtigsten ist jedoch, dass Sie verstehen, was das Document Object Model ist und wie Sie es manipulieren können, um nützliche Funktionen zu erstellen.

## Siehe auch

- Es gibt viele weitere Funktionen, die Sie verwenden können, um Ihre Dokumente zu manipulieren. Schauen Sie sich einige unserer Referenzen an und entdecken Sie, was Sie finden können:
  - [`Document`](/de/docs/Web/API/Document)
  - [`Window`](/de/docs/Web/API/Window)
  - [`Node`](/de/docs/Web/API/Node)
  - [`HTMLElement`](/de/docs/Web/API/HTMLElement), [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement), [`HTMLImageElement`](/de/docs/Web/API/HTMLImageElement) usw.
- [DOM Scripting](https://explainers.dev/dom-scripting/), explainers.dev

{{PreviousMenuNext("Learn_web_development/Core/Scripting/Object_basics","Learn_web_development/Core/Scripting/Network_requests", "Learn_web_development/Core/Scripting")}}
