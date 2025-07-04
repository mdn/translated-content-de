---
title: "JavaScript: Hinzufügen von Interaktivität"
short-title: Hinzufügen von Interaktivität
slug: Learn_web_development/Getting_started/Your_first_website/Adding_interactivity
l10n:
  sourceCommit: bcc977bc3e79a87edd64cd9ef977b515f63daa2c
---

{{PreviousMenuNext("Learn_web_development/Getting_started/Your_first_website/Styling_the_content", "Learn_web_development/Getting_started/Your_first_website/Publishing_your_website", "Learn_web_development/Getting_started/Your_first_website")}}

JavaScript ist eine Programmiersprache, die Interaktivität zu Websites hinzufügt. Sie können es verwenden, um nahezu alles zu steuern: Formular-Datenvalidierung, Button-Funktionalität, Spiel-Logik, dynamische Gestaltung, Animationsupdates und vieles mehr. Dieser Artikel gibt Ihnen einen Einstieg in JavaScript und führt Sie durch das Hinzufügen einiger interessanter Funktionen zu Ihrer ersten Website.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Grundlegende Vertrautheit mit Ihrem Computer-Betriebssystem, der grundlegenden Software, die Sie zum Erstellen einer Website verwenden werden, und Dateisystemen.
      </td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Der Zweck und die Funktion von JavaScript.</li>
          <li>Ein grundlegendes Verständnis der JavaScript-Sprachelemente wie Variablen, Operatoren, Bedingungen, Funktionen und Ereignisse.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Was ist JavaScript?

{{Glossary("JavaScript", "JavaScript")}} ist eine vollwertige Programmiersprache – sie enthält alle klassischen Programmiermerkmale, die Sie in anderen Programmiersprachen vielleicht gesehen haben (oder zumindest darüber gehört haben), wie **Variablen**, **Schleifen** und **Funktionen**.

JavaScript, wenn es auf Webseiten verwendet wird (obwohl es auch an anderen Orten verwendet werden kann), funktioniert im Allgemeinen, indem es:

- Referenzen auf einen oder mehrere Werte wie Zahlen oder Elemente auf der Seite erhält.
- Mit diesen Werten etwas macht, wie etwa die Zahlen zusammenzuzählen.
- Ein Ergebnis zurückgibt, das später verwendet werden kann, um etwas anderes damit zu machen. Zum Beispiel könnten Sie die Summe dieser Zahlen auf der Seite anzeigen wollen.

Schauen wir uns ein Beispiel an. Wir verwenden die gleiche Grundliste, die wir in den letzten Artikeln gesehen haben:

```html live-sample___basic-js
<p>Instructions for life:</p>

<ul>
  <li>Eat</li>
  <li>Sleep</li>
  <li>Repeat</li>
</ul>
```

Wir definieren auch eine CSS-Klasse namens `.done`, die jedes Element, auf das sie angewendet wird, so gestaltet, dass es wie eine abgeschlossene Aufgabe mit grüner Schriftfarbe und Durchstreichung aussieht. Wir wenden es im nächsten Schritt mit JavaScript auf unsere `<li>` Elemente an.

```css live-sample___basic-js
.done {
  color: darkseagreen;
  text-decoration: line-through solid black 2px;
}
```

Nun zum JavaScript. Hier speichern wir zunächst Referenzen auf die `<li>` Elemente in einer Variable namens `listItems`. Dann definieren wir eine Funktion namens `toggleDone()`, die die `done` Klasse zu einem Listenelement hinzufügt, wenn es sie noch nicht hat, und die Klasse entfernt, wenn es sie hat. Schließlich durchlaufen wir die Listenelemente (mittels `forEach()`) und fügen jedem Listenelement einen Ereignislistener hinzu (mit `addEventListener()`), sodass beim Klick auf das Element die `done` Klasse umgeschaltet wird und das vorher definierte CSS angewendet wird.

```js live-sample___basic-js
const listItems = document.querySelectorAll("li");

function toggleDone(e) {
  if (!e.target.className) {
    e.target.className = "done";
  } else {
    e.target.className = "";
  }
}

listItems.forEach((item) => {
  item.addEventListener("click", toggleDone);
});
```

Keine Sorge, wenn Sie das obige JavaScript noch nicht verstehen. Sich mit JavaScript wohlzufühlen, ist anspruchsvoller als sich mit HTML und CSS vertraut zu machen, aber es wird später im Kurs klarer werden.

Dieses Beispiel wird in einem Webbrowser wie folgt dargestellt:

{{EmbedLiveSample("basic-js", "100%", "140px")}}

Versuchen Sie, die Listenelemente ein paar Mal anzuklicken, und beachten Sie, wie die "done" Stile als Ergebnis umgeschaltet werden. Gar nicht so schlecht für 11 Zeilen JavaScript.

## Ein "Hello world!" Durchgang

Um Ihnen den Einstieg in das Schreiben von JavaScript zu erleichtern, führen wir Sie durch das Hinzufügen eines _Hello world!_ Beispiels zu Ihrer Beispiel-Website. (_Hello world!_ ist das Standard-Einstiegsprogrammierungsbeispiel.)

> [!WARNING]
> Wenn Sie dem Rest unseres Kurses nicht gefolgt sind, [laden Sie dieses Beispielcode herunter](https://codeload.github.com/mdn/beginner-html-site-styled/zip/refs/heads/gh-pages) und verwenden Sie es als Ausgangspunkt.

1. Erstellen Sie in Ihrem `first-website` Ordner oder dem gerade heruntergeladenen Beispielordner einen neuen Ordner namens `scripts`.
2. Erstellen Sie innerhalb des `scripts` Ordners ein neues Textdokument namens `main.js` und speichern Sie es.
3. Gehen Sie zu Ihrer `index.html` Datei und fügen Sie diesen Code in einer neuen Zeile ein, direkt vor dem schließenden `</head>` Tag:

   ```html
   <script async src="scripts/main.js"></script>
   ```

   Dies erfüllt die gleiche Aufgabe wie das {{htmlelement("link")}} Element für CSS – es wendet das JavaScript auf die Seite an, sodass es das HTML (zusammen mit dem CSS und allem anderen auf der Seite) beeinflussen kann.

4. Fügen Sie diesen Code zu Ihrer `scripts/main.js` Datei hinzu:

   ```js
   // Store a reference to the <h1> in a variable
   const myHeading = document.querySelector("h1");
   // Update the text content of the <h1>
   myHeading.textContent = "Hello world!";
   ```

5. Stellen Sie sicher, dass die HTML- und JavaScript-Dateien gespeichert sind, und laden Sie dann `index.html` in Ihrem Browser. Sie sollten etwas sehen, das so aussieht:

![Überschrift "hello world" über einem Firefox-Logo](hello-world.png)

Lassen Sie uns erklären, wie dieses Beispiel funktioniert.

Wir haben JavaScript verwendet, um den Überschriftstext zu `Hello world!` zu ändern. Wir haben eine Referenz auf die Überschrift gegriffen und sie in einer Variablen namens `myHeading` (ein Container, der einen Wert speichert) gespeichert. Dies ist ähnlich wie das Anwenden von CSS auf Elemente – Sie wählen zuerst die Elemente aus, auf die Sie wirken möchten, indem Sie einen CSS-Selektor verwenden, und definieren dann die gewünschten Stile für diese Elemente. In beiden Fällen müssen Sie, wenn Sie etwas mit einem Element machen möchten, es zuerst auswählen.

Danach haben wir den Wert der `textContent`-Eigenschaft der `myHeading`-Variablen (die die Textinhalte des `<h1>` Elements darstellt) auf _Hello world!_ gesetzt.

Die Zeilen, die mit `//` beginnen, sind JavaScript-Kommentare. Wie bei HTML- und CSS-Kommentaren ignoriert der Browser diese und bietet Ihnen eine Möglichkeit, Anmerkungen über Ihren Code hinzuzufügen, um zu erklären, wie er funktioniert.

Lassen Sie uns weitermachen und einige neue Funktionen zu unserer Beispiel-Website hinzufügen.

> [!WARNING]
> Löschen Sie unbedingt den "Hello world!" Code aus Ihrer `main.js` Datei, bevor Sie weitermachen. Wenn Sie dies nicht tun, wird der vorhandene Code mit dem neuen Code, den Sie hinzufügen werden, kollidieren.

## Hinzufügen eines Bildwechslers

In diesem Abschnitt verwenden Sie JavaScript und [DOM API](/de/docs/Web/API/HTML_DOM_API) Funktionen, um die Anzeige zwischen zwei Bildern zu wechseln. Diese Änderung erfolgt, wenn ein Benutzer auf das angezeigte Bild klickt.

1. Wählen Sie ein weiteres Bild aus, das Sie auf Ihrer Beispiel-Website präsentieren möchten. Idealerweise sollte das Bild die gleiche Größe wie das zuvor hinzugefügte Bild haben oder so nah wie möglich daran sein.
2. Speichern Sie dieses Bild in Ihrem `images` Ordner.
3. Fügen Sie den folgenden JavaScript-Code zu Ihrer `main.js` Datei hinzu und ersetzen Sie dabei `firefox2.png` und beide Instanzen von `firefox-icon.png` mit Ihrem zweiten bzw. ersten Bildnamen.

   ```js
   const myImage = document.querySelector("img");

   myImage.addEventListener("click", () => {
     const mySrc = myImage.getAttribute("src");
     if (mySrc === "images/firefox-icon.png") {
       myImage.setAttribute("src", "images/firefox2.png");
     } else {
       myImage.setAttribute("src", "images/firefox-icon.png");
     }
   });
   ```

4. Speichern Sie alle Dateien und laden Sie `index.html` im Browser. Wenn Sie nun auf das Bild klicken, sollte es zum anderen wechseln.

In diesem Code haben Sie eine Referenz auf Ihr {{htmlelement("img")}} Element in der Variable `myImage` gespeichert. Dann haben Sie ihm eine `click` Ereignishandler-Funktion zugewiesen. Jedes Mal, wenn auf das `<img>` geklickt wird, führt die Funktion Folgendes aus:

- Sie ruft den Wert des `src` Attributs des Bildes ab.
- Sie verwendet eine bedingte Struktur (`if...else`), um zu prüfen, ob der `src` Wert dem Pfad des ursprünglichen Bildes entspricht:
  - Wenn ja, ändert der Code den `src` Wert auf den Pfad des zweiten Bildes, wodurch das andere Bild im `<img>` Element geladen wird.
  - Wenn nicht (bedeutet, dass das Bild bereits geändert wurde), wechselt der `src` Wert zurück auf den ursprünglichen Bildpfad.

> [!NOTE]
> In diesem Abschnitt werden mehrere wichtige Begriffe eingeführt. Wichtige Konzepte umfassen:
>
> - {{Glossary("API", "API")}}: Eine Reihe von Funktionen, die es einem Entwickler ermöglichen, mit einer Programmierumgebung zu interagieren. Web-APIs (wie die oben verwendeten DOM API-Funktionen) basieren auf der JavaScript-Sprache und ermöglichen es Ihnen, verschiedene Teile des Browsers und der von ihm angezeigten Webseiten zu manipulieren.
> - [Ereignisse](/de/docs/Learn_web_development/Core/Scripting/Events): Dinge, die im Browser geschehen. Sie sind der Schlüssel, um Websites interaktiv zu gestalten. Sie können Code als Reaktion auf Ereignisse mit **Ereignishandler-Funktionen** ausführen – das sind Codeblöcke, die ausgeführt werden, wenn ein Ereignis auftritt. Das häufigste Beispiel ist das [click Ereignis](/de/docs/Web/API/Element/click_event), das vom Browser ausgelöst wird, wenn ein Benutzer auf etwas klickt.
> - [Funktionen](/de/docs/Learn_web_development/Core/Scripting/Functions): Eine Möglichkeit, Code zu verpacken, den Sie wiederverwenden möchten. Sie können Ihren Code einmal innerhalb einer Funktion definieren und dann so oft ausführen, wie Sie möchten, was Ihnen hilft, zu vermeiden, denselben Code immer wieder zu schreiben. In unserem Beispiel hier haben wir eine `click` Ereignishandler-Funktion definiert, die jedes Mal ausgeführt wird, wenn ein Benutzer auf das Bild klickt.
> - [Bedingungen](/de/docs/Learn_web_development/Core/Scripting/Conditionals): Code-Strukturen, die verwendet werden, um zu testen, ob ein Ausdruck `true` oder `false` zurückgibt, und als Reaktion auf jedes Ergebnis unterschiedlichen Code auszuführen. Eine sehr häufige Form von Bedingungen ist die `if...else` Anweisung.

## Hinzufügen einer personalisierten Willkommensnachricht

Als nächstes ändern wir die Seitenüberschrift, um eine personalisierte Willkommensnachricht anzuzeigen, wenn der Benutzer die Website zum ersten Mal besucht. Diese Willkommensnachricht wird im Browser unter Verwendung der [Web Storage API](/de/docs/Web/API/Web_Storage_API) gespeichert, sodass, wenn der Benutzer die Website verlässt und später zurückkehrt, seine personalisierten Daten immer noch da sind. Wir werden auch einen Weg einschließen, damit der Benutzer die Nachricht ändern kann.

1. Fügen Sie in `index.html` die folgende Zeile direkt vor dem schließenden `</body>` Tag hinzu:

   ```html
   <button>Change user</button>
   ```

2. Platzieren Sie in `main.js` den folgenden Code am Ende der Datei genau so, wie er geschrieben ist. Dies erstellt Referenzen auf den neuen Button und die Überschrift und speichert jede in Variablen:

   ```js
   let myButton = document.querySelector("button");
   let myHeading = document.querySelector("h1");
   ```

3. Fügen Sie die folgende Funktion hinzu, um die personalisierte Begrüßung festzulegen. Dies wird noch nichts tun; wir werden die Funktion später aufrufen.

   ```js
   function setUserName() {
     const myName = prompt("Please enter your name.");
     localStorage.setItem("name", myName);
     myHeading.textContent = `Mozilla is cool, ${myName}`;
   }
   ```

   Die Funktion `setUserName()` enthält eine [`prompt()`](/de/docs/Web/API/Window/prompt) Funktion, die den Benutzer auffordert, Daten einzugeben, und diese nach dem Klicken auf _OK_ in einer Variablen speichert. In diesem Beispiel bitten wir den Benutzer, einen Namen einzugeben und ihn in `myName` zu speichern.<br /><br />

   Als nächstes verwendet der Code die [Web Storage API](/de/docs/Web/API/Web_Storage_API), die es uns ermöglicht, Daten im Browser zu speichern und später abzurufen. Wir verwenden die Funktion [`localStorage.setItem()`](/de/docs/Web/API/Storage/setItem), um ein Datenobjekt namens `"name"` zu erstellen und zu speichern, wobei dessen Wert auf die `myName` Variable gesetzt wird, die die Benutzereingabe enthält.<br /><br />

   Schließlich setzen wir den `textContent` der Überschrift auf eine Zeichenfolge, die den gespeicherten Namen des Benutzers enthält.

4. Fügen Sie den folgenden Bedingungsblock nach der Funktionsdeklaration hinzu. Dies ist unser _Initialisierungscode_ – er wird ausgeführt, wenn die Seite zum ersten Mal geladen wird, um das Programm zu starten:

   ```js
   if (!localStorage.getItem("name")) {
     setUserName();
   } else {
     const storedName = localStorage.getItem("name");
     myHeading.textContent = `Mozilla is cool, ${storedName}`;
   }
   ```

   Die erste Zeile dieses Blocks verwendet den Negationsoperator (logisches NICHT, dargestellt durch das `!` Zeichen), um zu prüfen, ob das `name` Datenobjekt _nicht_ bereits in `localStorage` gespeichert ist. Wenn nicht, wird die `setUserName()` Funktion ausgeführt, um es zu erstellen. Wenn es existiert (d.h. der Benutzer hat bei einem vorherigen Besuch einen Benutzernamen gesetzt), erhalten wir den gespeicherten Namen mit [`localStorage.getItem()`](/de/docs/Web/API/Storage/getItem) und setzen den `textContent` der Überschrift auf eine Zeichenfolge, plus den Namen des Benutzers – genau wie wir es in `setUserName()` gemacht haben.

5. Fügen Sie dem Button eine `click` Ereignishandler-Funktion hinzu. Wenn darauf geklickt wird, wird `setUserName()` ausgeführt. Dies ermöglicht es dem Benutzer, einen anderen Namen zu speichern, wenn er möchte.

   ```js
   myButton.addEventListener("click", () => {
     setUserName();
   });
   ```

6. Speichern Sie alle Dateien und laden Sie `index.html` im Browser. Sie sollten sofort aufgefordert werden, Ihren Namen einzugeben. Nachdem Sie dies getan haben, wird er als Teil der personalisierten Begrüßung im `<h1>` erscheinen. Beachten Sie, wie die Personalisierung sogar nach dem Neuladen der Seite bestehen bleibt. Sie können auf die Schaltfläche "Benutzer ändern" klicken, um einen neuen Namen einzugeben.

> [!NOTE]
> Der Begriff [Operator](/de/docs/Learn_web_development/Core/Scripting/Math) bezieht sich auf ein JavaScript-Sprachzeichen, das eine Operation an einem oder mehreren Werten ausführt. Beispiele sind `+` (addiert Werte), `-` (subtrahiert einen Wert von einem anderen) und `!` (verneint einen Wert – wie Sie es zuvor gesehen haben).

## Ein Benutzername von null?

Wenn Sie das Beispiel ausführen und das Dialogfeld erhalten, das Sie auffordert, Ihren Namen einzugeben, versuchen Sie, die _Abbrechen_ Taste zu drücken. Sie sollten mit einem Titel enden, der _Mozilla ist cool, null_ liest. Dies passiert, weil der Wert auf [`null`](/de/docs/Web/JavaScript/Reference/Operators/null) gesetzt wird, wenn Sie den Eingabedialog abbrechen. In JavaScript ist _null_ ein spezieller Wert, der die Abwesenheit eines Wertes darstellt.

Versuchen Sie auch, auf _OK_ zu klicken, ohne einen Namen einzugeben. Sie sollten mit einem Titel enden, der _Mozilla ist cool,_ liest, da Sie `myName` einer leeren Zeichenfolge zugewiesen haben.

Um diese Probleme zu vermeiden, können Sie eine weitere Bedingung hinzufügen, um zu überprüfen, ob der Benutzer keinen leeren Namen eingegeben hat. Aktualisieren Sie Ihre `setUserName()` Funktion zu Folgendem:

```js
function setUserName() {
  const myName = prompt("Please enter your name.");
  if (!myName) {
    setUserName();
  } else {
    localStorage.setItem("name", myName);
    myHeading.textContent = `Mozilla is cool, ${myName}`;
  }
}
```

In Menschensprache bedeutet das: Wenn `myName` keinen Wert hat, führen Sie `setUserName()` erneut von Anfang an aus. Wenn es einen Wert hat (wenn die obige Aussage nicht wahr ist), speichern Sie den Wert in `localStorage` und setzen ihn als Text der Überschrift.

## Fazit

Wenn Sie alle Anweisungen in diesem Artikel befolgt haben, sollten Sie mit einer Seite enden, die in etwa wie das unten abgebildete Bild aussieht. Sie können auch [unsere Version ansehen](https://mdn.github.io/beginner-html-site-scripted/).

![Endgültiges Aussehen der HTML-Seite nach dem Erstellen von Elementen: ein Header, ein großes zentriertes Logo, Inhalt und ein Button](website-screen-scripted.png)

Falls Sie stecken bleiben, können Sie Ihre Arbeit mit unserem [abgeschlossenen Beispielcode auf GitHub](https://github.com/mdn/beginner-html-site-scripted/blob/main/scripts/main.js) vergleichen.

Wir haben in diesem Artikel nur wirklich die Oberfläche von JavaScript angekratzt. Sie werden viel mehr in unserem [Dynamisches Skripting mit JavaScript](/de/docs/Learn_web_development/Core/Scripting) Kernmodul später im Kurs lernen.

## Siehe auch

- [Scrimba: Learn JavaScript](https://scrimba.com/learn-javascript-c0v?via=mdn) <sup>[_MDN Lernpartner_](/de/docs/MDN/Writing_guidelines/Learning_content#partner_links_and_embeds)</sup>
  - : Der Kurs [_Learn JavaScript_](https://scrimba.com?via=mdn) von Scrimba bringt Ihnen JavaScript bei, indem Sie über 140+ interaktive Programmierherausforderungen lösen, Projekte einschließlich eines Spiels, einer Browsererweiterung und sogar einer mobilen App erstellen. Scrimba bietet unterhaltsame interaktive Lektionen, die von sachkundigen Lehrern unterrichtet werden.
- [Learn JavaScript](https://learnjavascript.online/)
  - : Dies ist eine ausgezeichnete Ressource für angehende Webentwickler! Lernen Sie JavaScript in einer interaktiven Umgebung, mit kurzen Lektionen und interaktiven Tests, die von einer automatisierten Bewertung geleitet werden. Die ersten 40 Lektionen sind kostenlos. Der gesamte Kurs ist für eine kleine einmalige Zahlung erhältlich.

{{PreviousMenuNext("Learn_web_development/Getting_started/Your_first_website/Styling_the_content", "Learn_web_development/Getting_started/Your_first_website/Publishing_your_website", "Learn_web_development/Getting_started/Your_first_website")}}
