---
title: "JavaScript: Interaktivität hinzufügen"
short-title: Interaktivität hinzufügen
slug: Learn_web_development/Getting_started/Your_first_website/Adding_interactivity
l10n:
  sourceCommit: b5a6d8bc5fd751032f70b88e7ec1ec61339937de
---

{{PreviousMenuNext("Learn_web_development/Getting_started/Your_first_website/Styling_the_content", "Learn_web_development/Getting_started/Your_first_website/Publishing_your_website", "Learn_web_development/Getting_started/Your_first_website")}}

JavaScript ist eine Programmiersprache, die Websites interaktiv macht. Sie können es verwenden, um fast alles zu steuern — Überprüfung von Formulardaten, Schaltflächenfunktionen, Spiel-Logik, dynamische Stile, Animationsupdates und vieles mehr. Dieser Artikel hilft Ihnen, mit JavaScript zu beginnen, und führt Sie durch das Hinzufügen einiger lustiger Funktionen zu Ihrer ersten Website.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Grundlegende Vertrautheit mit Ihrem Computerbetriebssystem, der grundlegenden Software, die Sie zum Erstellen einer Website verwenden, und den Dateisystemen.
      </td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Der Zweck und die Funktion von JavaScript.</li>
          <li>Ein grundlegendes Verständnis der JavaScript-Grundlagen wie Variablen, Operatoren, Bedingungen, Funktionen und Ereignisse.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Was ist JavaScript?

{{Glossary("JavaScript", "JavaScript")}} ist eine vollwertige Programmiersprache — sie enthält alle klassischen Programmiersprachen-Funktionen, die Sie möglicherweise in anderen Programmiersprachen gesehen haben (oder zumindest davon gehört haben), wie **Variablen**, **Schleifen** und **Funktionen**.

JavaScript funktioniert, wenn es auf Webseiten verwendet wird (obwohl es auch an anderen Orten verwendet werden kann), im Allgemeinen so:

- Es werden Referenzen zu einem oder mehreren Werten wie Zahlen oder zu Elementen auf der Seite abgerufen.
- Es wird etwas mit diesen Werten gemacht, wie das Addieren der Zahlen.
- Ein Ergebnis wird zurückgegeben, das später anderweitig verwendet werden kann. Zum Beispiel möchten Sie möglicherweise die Summe dieser Zahlen auf der Seite anzeigen.

Schauen wir uns ein Beispiel an. Wir verwenden die gleiche grundlegende Liste, die wir in den letzten Artikeln gesehen haben:

```html live-sample___basic-js
<p>Instructions for life:</p>

<ul>
  <li>Eat</li>
  <li>Sleep</li>
  <li>Repeat</li>
</ul>
```

Wir definieren auch eine CSS-Klasse namens `.done`, die jedes Element, auf das sie angewendet wird, stilisiert und es wie eine erledigte Aufgabe mit grüner Textfarbe und Durchstreichung erscheinen lässt. Wir werden sie im nächsten Schritt mit JavaScript auf unsere `<li>`-Elemente anwenden.

```css live-sample___basic-js
.done {
  color: darkseagreen;
  text-decoration: line-through solid black 2px;
}
```

Nun zum JavaScript. Hier speichern wir zuerst Referenzen zu den `<li>`-Elementen in einer Variablen namens `listItems`. Dann definieren wir eine Funktion namens `toggleDone()`, die die `done`-Klasse zu einem Listenelement hinzufügt, wenn es sie noch nicht hat, und die Klasse entfernt, wenn es sie hat. Schließlich gehen wir durch die Listenelemente (mit `forEach()`) und fügen jedem Listenelement einen Ereignislistener hinzu (mit `addEventListener()`), sodass die `done`-Klasse umgeschaltet wird, wenn darauf geklickt wird, und das CSS angewendet wird, das wir zuvor definiert haben.

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

Machen Sie sich keine Sorgen, wenn Sie das obenstehende JavaScript jetzt noch nicht verstehen. Sich mit JavaScript vertraut zu machen, ist herausfordernder als sich mit HTML und CSS vertraut zu machen, aber die Dinge werden im weiteren Verlauf des Kurses klarer werden.

Dieses Beispiel wird in einem Webbrowser wie folgt dargestellt:

{{EmbedLiveSample("basic-js", "100%", "140px")}}

Versuchen Sie, die Listenelemente ein paar Mal anzuklicken, und beachten Sie, wie die "done"-Stile als Ergebnis ein- und ausgeschaltet werden. Nicht schlecht für 11 Zeilen JavaScript.

## Eine "Hello world!"-Anleitung

Um Ihnen den Einstieg in das Schreiben von JavaScript zu erleichtern, führen wir Sie durch das Hinzufügen eines _Hello world!_-Beispiels zu Ihrer Beispiel-Website. (_Hello world!_ ist das Standard-Beispielprogramm zur Einführung in die Programmierung.)

> [!WARNING]
> Wenn Sie den Rest unseres Kurses nicht verfolgt haben, [laden Sie diesen Beispielcode herunter](https://codeload.github.com/mdn/beginner-html-site-styled/zip/refs/heads/main) und verwenden Sie ihn als Ausgangspunkt.

1. Erstellen Sie in Ihrem `first-website`-Ordner oder dem gerade heruntergeladenen Beispielordner einen neuen Ordner namens `scripts`.
2. Erstellen Sie im Ordner `scripts` ein neues Textdokument namens `main.js` und speichern Sie es.
3. Gehen Sie zu Ihrer `index.html`-Datei und geben Sie diesen Code in einer neuen Zeile kurz vor dem schließenden `</head>`-Tag ein:

   ```html
   <script async src="scripts/main.js"></script>
   ```

   Dies erfüllt die gleiche Aufgabe wie das {{htmlelement("link")}}-Element für CSS – es wendet das JavaScript auf die Seite an, sodass es das HTML (zusammen mit dem CSS und allem anderen auf der Seite) beeinflussen kann.

4. Fügen Sie diesen Code zu Ihrer `scripts/main.js`-Datei hinzu:

   ```js
   // Store a reference to the <h1> in a variable
   const myHeading = document.querySelector("h1");
   // Update the text content of the <h1>
   myHeading.textContent = "Hello world!";
   ```

5. Stellen Sie sicher, dass die HTML- und JavaScript-Dateien gespeichert sind, laden Sie dann `index.html` in Ihrem Browser. Sie sollten etwas wie dies sehen:

![Überschrift "hello world" über einem Firefox-Logo](hello-world.png)

Lassen Sie uns analysieren, wie dieses Beispiel funktioniert.

Wir haben JavaScript verwendet, um den Überschriftstext in `Hello world!` zu ändern. Wir haben eine Referenz zur Überschrift abgerufen und sie in einer Variablen namens `myHeading` (ein Container, der einen Wert speichert) gespeichert. Dies ist ähnlich wie das Anwenden von CSS auf Elemente – Sie wählen zuerst die Elemente aus, die Sie beeinflussen möchten, indem Sie einen CSS-Selektor verwenden, und definieren dann die Stile, die Sie für diese Elemente möchten. In beiden Fällen müssen Sie das Element zuerst auswählen, wenn Sie etwas damit machen möchten.

Anschließend setzen wir den Wert der `textContent`-Eigenschaft der Variablen `myHeading` (die den Textinhalt des `<h1>`-Elements darstellt) auf _Hello world!_.

Die Zeilen, die mit `//` beginnen, sind JavaScript-Kommentare. Ebenso wie HTML- und CSS-Kommentare ignoriert der Browser diese, sodass Sie Anmerkungen zu Ihrem Code hinzufügen können, um zu erklären, wie er funktioniert.

Lassen Sie uns fortfahren und einige neue Funktionen zu unserer Beispielseite hinzufügen.

> [!WARNING]
> Bevor Sie weitermachen, löschen Sie den "Hello world!"-Code aus Ihrer `main.js`-Datei. Wenn Sie das nicht tun, wird der bestehende Code mit dem neuen Code, den Sie hinzufügen werden, kollidieren.

## Hinzufügen eines Bildwechslers

In diesem Abschnitt werden Sie JavaScript und [DOM API](/de/docs/Web/API/HTML_DOM_API)-Funktionen verwenden, um zwischen zwei Bildern hin- und herzuschalten. Diese Änderung erfolgt, wenn ein Benutzer auf das angezeigte Bild klickt.

1. Wählen Sie ein weiteres Bild, das auf Ihrer Beispielseite dargestellt werden soll. Idealerweise sollte das Bild die gleiche Größe wie das vorher hinzugefügte Bild haben oder so nah wie möglich daran sein.
2. Speichern Sie dieses Bild in Ihrem `images`-Ordner.
3. Fügen Sie den folgenden JavaScript-Code zu Ihrer `main.js`-Datei hinzu und ersetzen Sie dabei `firefox2.png` und beide Instanzen von `firefox-icon.png` durch den Namen Ihres zweiten bzw. ersten Bildes.

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

4. Speichern Sie alle Dateien und laden Sie `index.html` im Browser. Wenn Sie jetzt auf das Bild klicken, sollte es sich in das andere Bild ändern.

In diesem Code haben Sie eine Referenz zu Ihrem {{htmlelement("img")}}-Element in der Variablen `myImage` gespeichert. Dann haben Sie ihm eine `click`-Ereignis-Handler-Funktion zugewiesen. Jedes Mal, wenn auf das `<img>` geklickt wird, führt die Funktion Folgendes durch:

- Ruft den Wert des `src`-Attributs des Bildes ab.
- Verwendet eine Bedingung (`if...else`-Struktur), um zu prüfen, ob der `src`-Wert dem Pfad des ursprünglichen Bildes entspricht:
  - Wenn ja, ändert der Code den `src`-Wert in den Pfad des zweiten Bildes, sodass das andere Bild im `<img>`-Element geladen wird.
  - Wenn nicht (das heißt, das Bild wurde bereits geändert), wechselt der `src`-Wert zurück zum ursprünglichen Bildpfad.

> [!NOTE]
> Dieser Abschnitt führt einige wichtige Begriffe ein. Schlüsselkonzepte sind:
>
> - {{Glossary("API", "API")}}: Eine Reihe von Funktionen, die es einem Entwickler ermöglichen, mit einer Programmierumgebung zu interagieren. Web-APIs (wie die oben verwendeten DOM-API-Funktionen) basieren auf der JavaScript-Sprache und ermöglichen die Manipulation verschiedener Teile des Browsers und der angezeigten Webseiten.
> - [Ereignisse](/de/docs/Learn_web_development/Core/Scripting/Events): Dinge, die im Browser passieren. Sie sind der Schlüssel zur Erstellung interaktiver Websites. Sie können Code als Reaktion auf Ereignisse ausführen, indem Sie **Ereignis-Handler-Funktionen** verwenden – dies sind Codeblöcke, die ausgeführt werden, wenn ein Ereignis auftritt. Das häufigste Beispiel ist das [Klickereignis](/de/docs/Web/API/Element/click_event), das vom Browser ausgelöst wird, wenn ein Benutzer auf etwas klickt.
> - [Funktionen](/de/docs/Learn_web_development/Core/Scripting/Functions): Eine Möglichkeit, Code, den Sie wiederverwenden möchten, zu verpacken. Sie können Ihren Code einmal in einer Funktion definieren und dann so oft ausführen, wie Sie möchten, was Ihnen hilft, das gleiche Code-Schreiben immer wieder zu vermeiden. In unserem Beispiel haben wir eine `click`-Ereignis-Handler-Funktion definiert, die jedes Mal ausgeführt wird, wenn ein Benutzer auf das Bild klickt.
> - [Bedingungen](/de/docs/Learn_web_development/Core/Scripting/Conditionals): Code-Strukturen, die verwendet werden, um zu testen, ob ein Ausdruck `true` oder `false` zurückgibt und unterschiedlichen Code als Reaktion auf jedes Ergebnis auszuführen. Ein sehr gängiges Format von Bedingungen ist die `if...else`-Anweisung.

## Hinzufügen einer personalisierten Willkommensnachricht

Als Nächstes ändern wir die Seitenüberschrift, um eine personalisierte Willkommensnachricht anzuzeigen, wenn der Benutzer die Seite zum ersten Mal besucht. Diese Willkommensnachricht wird im Browser mithilfe der [Web Storage API](/de/docs/Web/API/Web_Storage_API) gespeichert, sodass die personalisierten Daten des Benutzers immer noch vorhanden sind, wenn er die Seite verlässt und später zurückkehrt. Wir werden auch eine Möglichkeit einfügen, damit der Benutzer die Nachricht ändern kann.

1. Fügen Sie in `index.html` folgende Zeile kurz vor dem schließenden `</body>`-Tag hinzu:

   ```html
   <button>Change user</button>
   ```

2. Fügen Sie in `main.js` den folgenden Code am Ende der Datei ein, genau so wie er geschrieben ist. Dies erstellt Referenzen zu der neuen Schaltfläche und der Überschrift und speichert sie in Variablen:

   ```js
   let myButton = document.querySelector("button");
   let myHeading = document.querySelector("h1");
   ```

3. Fügen Sie die folgende Funktion hinzu, um die personalisierte Begrüßung festzulegen. Diese wird noch nichts tun; wir werden die Funktion später aufrufen.

   ```js
   function setUserName() {
     const myName = prompt("Please enter your name.");
     localStorage.setItem("name", myName);
     myHeading.textContent = `Mozilla is cool, ${myName}`;
   }
   ```

   Die `setUserName()`-Funktion enthält eine [`prompt()`](/de/docs/Web/API/Window/prompt)-Funktion, die den Benutzer auffordert, Daten einzugeben und sie in einer Variablen zu speichern, nachdem er auf _OK_ geklickt hat. In diesem Beispiel bitten wir den Benutzer, einen Namen einzugeben und ihn in `myName` zu speichern.<br /><br />

   Anschließend verwendet der Code die [Web Storage API](/de/docs/Web/API/Web_Storage_API), die es uns ermöglicht, Daten im Browser zu speichern und später abzurufen. Wir verwenden die Funktion [`localStorage.setItem()`](/de/docs/Web/API/Storage/setItem), um ein Datenelement namens `"name"` zu erstellen und seinen Wert auf die Variable `myName` zu setzen, die die Eingabe des Benutzers enthält.<br /><br />

   Schließlich setzen wir die `textContent`-Eigenschaft der Überschrift auf eine Zeichenfolge, die den gespeicherten Namen des Benutzers enthält.

4. Fügen Sie nach der Funktionsdeklaration den folgenden bedingten Block hinzu. Dies ist unser _Initialisierungscode_ – er wird ausgeführt, wenn die Seite zuerst geladen wird, um das Programm zu starten:

   ```js
   if (!localStorage.getItem("name")) {
     setUserName();
   } else {
     const storedName = localStorage.getItem("name");
     myHeading.textContent = `Mozilla is cool, ${storedName}`;
   }
   ```

   Die erste Zeile dieses Blocks verwendet den Negationsoperator (logisches NICHT, dargestellt durch das Zeichen `!`), um zu überprüfen, ob das Datenelement `name` _nicht_ bereits in `localStorage` gespeichert ist. Falls nicht, wird die Funktion `setUserName()` ausgeführt, um es zu erstellen. Wenn es existiert (also der Benutzer bei einem vorherigen Besuch einen Benutzernamen festgelegt hat), rufen wir den gespeicherten Namen mithilfe von [`localStorage.getItem()`](/de/docs/Web/API/Storage/getItem) ab und setzen die `textContent`-Eigenschaft der Überschrift auf eine Zeichenfolge sowie den Namen des Benutzers – genau wie wir es innerhalb von `setUserName()` getan haben.

5. Fügen Sie der Schaltfläche eine `click`-Ereignis-Handler-Funktion hinzu. Beim Klicken wird `setUserName()` ausgeführt. Dies ermöglicht es dem Benutzer, einen anderen Namen zu speichern, falls er möchte.

   ```js
   myButton.addEventListener("click", () => {
     setUserName();
   });
   ```

6. Speichern Sie alle Dateien und laden Sie `index.html` im Browser. Sie werden sofort aufgefordert, Ihren Namen einzugeben. Nachdem Sie das getan haben, erscheint er als Teil des personalisierten Grußes innerhalb des `<h1>`. Beachten Sie, wie die Personalisierung selbst dann bestehen bleibt, wenn Sie die Seite neu laden. Sie können auf die Schaltfläche "Benutzer ändern" klicken, um einen neuen Namen einzugeben.

> [!NOTE]
> Der Begriff [Operator](/de/docs/Learn_web_development/Core/Scripting/Math) bezieht sich auf ein Zeichen der JavaScript-Sprache, das eine Operation an einem oder mehreren Werten durchführt. Beispiele beinhalten `+` (addiert Werte), `-` (subtrahiert einen Wert von einem anderen) und `!` (verneint einen Wert – wie Sie zuvor gesehen haben).

## Ein Benutzername von null?

Wenn Sie das Beispiel ausführen und das Dialogfeld zum Eingeben Ihres Namens erhalten, versuchen Sie, die _Abbrechen_ zu drücken. Sie sollten mit einem Titel enden, der _Mozilla is cool, null_ lautet. Dies passiert, weil der Wert auf [`null`](/de/docs/Web/JavaScript/Reference/Operators/null) gesetzt wird, wenn Sie die Eingabeaufforderung abbrechen. In JavaScript ist _null_ ein spezieller Wert, der das Fehlen eines Wertes darstellt.

Versuchen Sie auch, auf _OK_ zu klicken, ohne einen Namen einzugeben. Sie sollten mit einem Titel enden, der _Mozilla is cool,_ lautet, weil Sie `myName` auf eine leere Zeichenfolge gesetzt haben.

Um diese Probleme zu vermeiden, können Sie eine weitere Bedingung hinzufügen, um zu überprüfen, ob der Benutzer keinen leeren Namen eingegeben hat. Aktualisieren Sie Ihre Funktion `setUserName()` wie folgt:

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

In menschlicher Sprache bedeutet dies: Wenn `myName` keinen Wert hat, führen Sie `setUserName()` erneut von Anfang an aus. Wenn es einen Wert hat (wenn die obige Anweisung nicht wahr ist), speichern Sie den Wert in `localStorage` und setzen ihn als Text der Überschrift.

## Fazit

Wenn Sie alle Anweisungen in diesem Artikel befolgt haben, sollten Sie mit einer Seite enden, die etwa wie das folgende Bild aussieht. Sie können auch unsere [Version anzeigen](https://mdn.github.io/beginner-html-site-scripted/).

![Endgültiges Aussehen der HTML-Seite nach Erstellung der Elemente: eine Überschrift, großes zentriertes Logo, Inhalt und eine Schaltfläche](website-screen-scripted.png)

Wenn Sie stecken bleiben, können Sie Ihre Arbeit mit unserem [fertigen Beispielcode auf GitHub](https://github.com/mdn/beginner-html-site-scripted/blob/main/scripts/main.js) vergleichen.

Wir haben in diesem Artikel wirklich nur an der Oberfläche von JavaScript gekratzt. Sie werden viel mehr in unserem [Dynamisches Scripting mit JavaScript](/de/docs/Learn_web_development/Core/Scripting) Kernmodul später im Kurs lernen.

## Siehe auch

- [Scrimba: JavaScript lernen](https://scrimba.com/learn-javascript-c0v?via=mdn) <sup>[_MDN Lernpartner_](/de/docs/MDN/Writing_guidelines/Learning_content#partner_links_and_embeds)</sup>
  - : [Scrimbas](https://scrimba.com?via=mdn) _JavaScript lernen_-Kurs bringt Ihnen JavaScript durch das Lösen von über 140 interaktiven Programmierherausforderungen bei, indem Sie Projekte einschließlich eines Spiels, einer Browsererweiterung und sogar einer mobilen App erstellen. Scrimba bietet unterhaltsame interaktive Lektionen, die von erfahrenen Lehrern gelehrt werden.
- [JavaScript lernen](https://learnjavascript.online/)
  - : Dies ist eine ausgezeichnete Ressource für angehende Webentwickler! Lernen Sie JavaScript in einer interaktiven Umgebung, mit kurzen Lektionen und interaktiven Tests, geleitet durch eine automatisierte Bewertung. Die ersten 40 Lektionen sind kostenlos. Der vollständige Kurs ist gegen eine geringe einmalige Zahlung erhältlich.

{{PreviousMenuNext("Learn_web_development/Getting_started/Your_first_website/Styling_the_content", "Learn_web_development/Getting_started/Your_first_website/Publishing_your_website", "Learn_web_development/Getting_started/Your_first_website")}}
