---
title: "JavaScript: Interaktivität hinzufügen"
short-title: Interaktivität hinzufügen
slug: Learn_web_development/Getting_started/Your_first_website/Adding_interactivity
l10n:
  sourceCommit: 231152e9a749aaeba8de45f4cc712845a470dda9
---

{{PreviousMenuNext("Learn_web_development/Getting_started/Your_first_website/Styling_the_content", "Learn_web_development/Getting_started/Your_first_website/Publishing_your_website", "Learn_web_development/Getting_started/Your_first_website")}}

JavaScript ist eine Programmiersprache, die Webseiten Interaktivität hinzufügt. Sie können es verwenden, um nahezu alles zu steuern – von der Validierung von Formulardaten über die Funktionalität von Schaltflächen bis hin zur Spiel-Logik, dynamischen Stilaktualisierungen, Animationen und vielem mehr. Dieser Artikel vermittelt Ihnen den Einstieg in JavaScript und führt Sie durch das Hinzufügen einiger unterhaltsamer Funktionen zu Ihrer ersten Website.

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
          <li>Ein grundlegendes Verständnis der JavaScript-Sprachgrundlagen wie Variablen, Operatoren, Bedingungen, Funktionen und Ereignisse.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Was ist JavaScript?

{{Glossary("JavaScript", "JavaScript")}} ist eine vollständige Programmiersprache – sie enthält alle klassischen Programmierfunktionen, die Sie möglicherweise in anderen Programmiersprachen gesehen haben (oder zumindest davon gehört haben), wie **Variablen**, **Schleifen** und **Funktionen**.

JavaScript wird, wenn es auf Webseiten verwendet wird (obwohl es auch an anderen Orten verwendet werden kann), im Allgemeinen folgendermaßen eingesetzt:

- Es werden Referenzen auf einen oder mehrere Werte wie Zahlen oder auf Elemente auf der Seite abgerufen.
- Etwas mit diesen Werten tun, wie zum Beispiel die Zahlen zusammenzuzählen.
- Ein Ergebnis zurückgeben, das später für etwas anderes verwendet werden kann. Zum Beispiel könnten Sie die Summe dieser Zahlen auf der Seite anzeigen wollen.

Schauen wir uns ein Beispiel an. Wir verwenden die gleiche grundlegende Liste, die wir in den letzten Artikeln gesehen haben:

```html live-sample___basic-js
<p>Instructions for life:</p>

<ul>
  <li>Eat</li>
  <li>Sleep</li>
  <li>Repeat</li>
</ul>
```

Wir definieren auch eine CSS-Klasse namens `.done`, die jedes Element, auf das sie angewendet wird, stilisiert und es wie eine abgeschlossene Aufgabe mit grüner Textfarbe und Durchstreichen aussehen lässt. Wir wenden sie im nächsten Schritt mithilfe von JavaScript auf unsere `<li>`-Elemente an.

```css live-sample___basic-js
.done {
  color: darkseagreen;
  text-decoration: line-through solid black 2px;
}
```

Weiter zum JavaScript. Hier speichern wir zuerst Referenzen zu den `<li>`-Elementen in einer Variablen namens `listItems`. Dann definieren wir eine Funktion namens `toggleDone()`, die die `done`-Klasse zu einem Listenelement hinzufügt, wenn es sie nicht bereits hat, und die Klasse entfernt, wenn sie vorhanden ist. Schließlich durchlaufen wir die Listenelemente (mit `forEach()`) und fügen jedem Listenelement einen Ereignislistener hinzu (mit `addEventListener()`), sodass beim Klicken die `done`-Klasse umgeschaltet wird, was die zuvor definierte CSS-Anwendung bewirkt.

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

Keine Sorge, wenn Sie das obige JavaScript jetzt nicht verstehen. Sich mit JavaScript wohlzufühlen, ist herausfordernder als sich mit HTML und CSS vertraut zu machen, aber im Laufe des Kurses wird es klarer werden.

Dieses Beispiel wird im Webbrowser wie folgt gerendert:

{{EmbedLiveSample("basic-js", "100%", "140px")}}

Versuchen Sie, auf die Listenelemente zu klicken, und beachten Sie, wie die "done"-Stile als Ergebnis ein- und ausgeschaltet werden. Nicht schlecht für 11 Zeilen JavaScript.

## Ein "Hello world!" Durchgang

Um mit dem Schreiben von JavaScript zu beginnen, führen wir Sie durch das Hinzufügen eines _Hello world!_ Beispiels zu Ihrer Beispielwebsite. ([_Hello world!_](https://en.wikipedia.org/wiki/%22Hello,_World!%22_program) ist das Standard-Einführungsprogrammierungsbeispiel.)

> [!WARNING]
> Wenn Sie dem restlichen Kurs nicht gefolgt sind, [laden Sie dieses Beispielcode herunter](https://github.com/mdn/beginner-html-site-styled/archive/refs/heads/main.zip) und verwenden Sie es als Ausgangspunkt.

1. Erstellen Sie in Ihrem `first-website`-Ordner oder dem gerade heruntergeladenen Beispielordner einen neuen Ordner namens `scripts`.
2. Erstellen Sie im `scripts`-Ordner ein neues Textdokument namens `main.js` und speichern Sie es.
3. Gehen Sie zu Ihrer `index.html`-Datei und geben Sie diesen Code in eine neue Zeile ein, direkt vor dem schließenden `</head>`-Tag:

   ```html
   <script async src="scripts/main.js"></script>
   ```

   Dies erledigt die gleiche Aufgabe wie das {{htmlelement("link")}}-Element für CSS – es wendet das JavaScript auf die Seite an, sodass es das HTML (neben dem CSS und allem anderen auf der Seite) beeinflussen kann.

4. Fügen Sie diesen Code in Ihre `scripts/main.js`-Datei ein:

   ```js
   // Store a reference to the <h1> in a variable
   const myHeading = document.querySelector("h1");
   // Update the text content of the <h1>
   myHeading.textContent = "Hello world!";
   ```

5. Stellen Sie sicher, dass die HTML- und JavaScript-Dateien gespeichert sind, und laden Sie dann `index.html` in Ihrem Browser. Sie sollten etwas Ähnliches wie dieses sehen:

![Überschrift "hello world" über einem Firefox-Logo](hello-world.png)

Lassen Sie uns aufschlüsseln, wie dieses Beispiel funktioniert.

Wir haben JavaScript verwendet, um den Überschriftstext in `Hello world!` zu ändern. Wir haben eine Referenz auf die Überschrift genommen und sie in einer Variablen namens `myHeading` gespeichert (ein Container, der einen Wert speichert). Dies ist ähnlich wie das Anwenden von CSS auf Elemente – Sie wählen zuerst die Elemente aus, die Sie beeinflussen möchten, indem Sie einen CSS-Selektor verwenden, und definieren dann die Stile, die Sie für diese Elemente möchten. In beiden Fällen müssen Sie, wenn Sie etwas an einem Element tun möchten, es zuerst auswählen.

Danach setzen wir den Wert der `textContent`-Eigenschaft der `myHeading`-Variable (die den Textinhalt des `<h1>`-Elements repräsentiert) auf _Hello world!_.

Die Zeilen, die mit `//` beginnen, sind JavaScript-Kommentare. Genau wie HTML- und CSS-Kommentare ignoriert der Browser diese, was eine Möglichkeit bietet, Notizen zu Ihrem Code hinzuzufügen, um zu erklären, wie er funktioniert.

Lassen Sie uns weitermachen und einige neue Funktionen zu unserer Beispiel-Website hinzufügen.

> [!WARNING]
> Bevor Sie weiter gehen, löschen Sie den "Hello world!"-Code aus Ihrer `main.js`-Datei. Andernfalls wird der vorhandene Code mit dem neuen Code, den Sie hinzufügen werden, in Konflikt stehen.

## Ein Bilderwechsler hinzufügen

In diesem Abschnitt verwenden Sie JavaScript und [DOM API](/de/docs/Web/API/HTML_DOM_API)-Funktionen, um zwischen zwei Bildern zu wechseln. Diese Änderung erfolgt, wenn ein Benutzer auf das angezeigte Bild klickt.

1. Wählen Sie ein weiteres Bild aus, das Sie auf Ihrer Beispielwebsite präsentieren möchten. Idealerweise sollte das Bild die gleiche Größe wie das zuvor hinzugefügte haben oder zumindest möglichst nah dran sein.
2. Speichern Sie dieses Bild in Ihrem `images`-Ordner.
3. Fügen Sie den folgenden JavaScript-Code zu Ihrer `main.js`-Datei hinzu und achten Sie darauf, `firefox2.png` und beide Vorkommen von `firefox-icon.png` durch Ihre zweite respektive erste Bildnamen zu ersetzen.

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

4. Speichern Sie alle Dateien, und laden Sie `index.html` im Browser. Wenn Sie jetzt auf das Bild klicken, sollte es sich in das andere ändern.

In diesem Code haben Sie eine Referenz auf Ihr {{htmlelement("img")}}-Element in der Variablen `myImage` gespeichert. Dann haben Sie es mit einer `click`-Ereignisbehandlungsfunktion versehen. Jedes Mal, wenn das `<img>` angeklickt wird, macht die Funktion Folgendes:

- Sie ruft den Wert des `src`-Attributs des Bildes ab.
- Sie verwendet eine Bedingung (`if...else` Strukturen), um zu überprüfen, ob der `src`-Wert gleich dem Pfad des Originalbildes ist:
  - Falls ja, ändert der Code den `src`-Wert auf den Pfad des zweiten Bildes, sodass das andere Bild im `<img>`-Element geladen wird.
  - Falls nein (das Bild wurde bereits geändert), wechselt der `src`-Wert zurück zum Pfad des Originalbildes.

> [!NOTE]
> Dieser Abschnitt führt mehrere wichtige Begriffe ein. Zentrale Konzepte umfassen:
>
> - {{Glossary("API", "API")}}: Eine Reihe von Funktionen, die es einem Entwickler ermöglicht, mit einer Programmierumgebung zu interagieren. Web-APIs (wie die oben verwendeten DOM-API-Funktionen) basieren auf der JavaScript-Sprache und ermöglichen es Ihnen, verschiedene Teile des Browsers und der von ihm angezeigten Webseiten zu manipulieren.
> - [Ereignisse](/de/docs/Learn_web_development/Core/Scripting/Events): Dinge, die im Browser passieren. Sie sind entscheidend dafür, Websites interaktiv zu gestalten. Sie können Code als Reaktion auf Ereignisse ausführen, indem Sie **Ereignisbehandlungsfunktionen** verwenden – dies sind Codeblöcke, die ausgeführt werden, wenn ein Ereignis eintritt. Das häufigste Beispiel ist das [Klick-Ereignis](/de/docs/Web/API/Element/click_event), das vom Browser ausgelöst wird, wenn ein Benutzer auf etwas klickt.
> - [Funktionen](/de/docs/Learn_web_development/Core/Scripting/Functions): Eine Möglichkeit, Code zu verpacken, den Sie wiederverwenden möchten. Sie können Ihren Code einmal in einer Funktion definieren und ihn dann beliebig oft ausführen, wodurch Sie vermeiden, denselben Code immer wieder schreiben zu müssen. In unserem Beispiel hier haben wir eine `click`-Ereignisbehandlungsfunktion definiert, die jedes Mal ausgeführt wird, wenn ein Benutzer auf das Bild klickt.
> - [Bedingungen](/de/docs/Learn_web_development/Core/Scripting/Conditionals): Code-Strukturen, die verwendet werden, um zu testen, ob ein Ausdruck `true` oder `false` zurückgibt und je nach Ergebnis unterschiedlichen Code auszuführen. Eine sehr gängige Form von Bedingungen ist die `if...else`-Anweisung.

## Eine personalisierte Willkommensnachricht hinzufügen

Als nächstes ändern wir die Seitenüberschrift, um beim ersten Besuch des Nutzers eine personalisierte Willkommensnachricht anzuzeigen. Diese Willkommensnachricht wird im Browser mit der [Web Storage API](/de/docs/Web/API/Web_Storage_API) gespeichert, sodass die personalisierten Daten des Nutzers auch nach dem Verlassen der Seite und späterem Zurückkehren noch verfügbar sind. Wir fügen auch eine Möglichkeit hinzu, wie der Nutzer die Nachricht ändern kann.

1. Fügen Sie in `index.html` die folgende Zeile direkt vor dem schließenden `</body>`-Tag hinzu:

   ```html
   <button>Change user</button>
   ```

2. Fügen Sie in `main.js` den folgenden Code am Ende der Datei ein, genau so, wie er geschrieben ist. Dies erstellt Referenzen auf die neue Schaltfläche und die Überschrift und speichert jede in Variablen:

   ```js
   let myButton = document.querySelector("button");
   let myHeading = document.querySelector("h1");
   ```

3. Fügen Sie die folgende Funktion hinzu, um die personalisierte Begrüßung einzurichten. Diese wird jetzt noch nichts tun; wir werden die Funktion später aufrufen.

   ```js
   function setUserName() {
     const myName = prompt("Please enter your name.");
     localStorage.setItem("name", myName);
     myHeading.textContent = `Mozilla is cool, ${myName}`;
   }
   ```

   Die `setUserName()`-Funktion enthält eine [`prompt()`](/de/docs/Web/API/Window/prompt)-Funktion, die den Benutzer auffordert, Daten einzugeben und sie nach dem Klicken auf _OK_ in einer Variable speichert. In diesem Beispiel bitten wir den Benutzer, einen Namen einzugeben und ihn in `myName` zu speichern.<br /><br />

   Als nächstes verwendet der Code die [Web Storage API](/de/docs/Web/API/Web_Storage_API), die es uns ermöglicht, Daten im Browser zu speichern und später abzurufen. Wir verwenden die [`localStorage.setItem()`](/de/docs/Web/API/Storage/setItem) Funktion, um ein Datenelement namens `"name"` zu erstellen und zu speichern, wobei sein Wert auf die `myName`-Variable gesetzt wird, die die Benutzereingabe enthält.<br /><br />

   Schließlich setzen wir den `textContent` der Überschrift auf eine Zeichenkette, die den gespeicherten Namen des Benutzers enthält.

4. Fügen Sie nach der Funktionsdeklaration den folgenden bedingten Block hinzu. Dies ist unser _Initialisierungscode_ – er wird beim ersten Laden der Seite ausgeführt, um das Programm zu starten:

   ```js
   if (!localStorage.getItem("name")) {
     setUserName();
   } else {
     const storedName = localStorage.getItem("name");
     myHeading.textContent = `Mozilla is cool, ${storedName}`;
   }
   ```

   Die erste Zeile dieses Blocks verwendet den Negationsoperator (logisches NICHT, dargestellt durch das `!`-Zeichen) um zu überprüfen, ob das Datenelement `name` _nicht_ bereits in `localStorage` gespeichert ist. Wenn nicht, wird die `setUserName()`-Funktion ausgeführt, um es zu erstellen. Wenn es existiert (d.h. der Benutzer hat bei einem früheren Besuch einen Namen festgelegt), rufen wir den gespeicherten Namen mit [`localStorage.getItem()`](/de/docs/Web/API/Storage/getItem) ab und setzen den `textContent` der Überschrift auf eine Zeichenkette, plus den Benutzernamen – genau wie wir es innerhalb von `setUserName()` gemacht haben.

5. Fügen Sie der Schaltfläche eine `click`-Ereignisbehandlungsfunktion hinzu. Wenn sie angeklickt wird, wird `setUserName()` ausgeführt. Dies ermöglicht es dem Benutzer, einen anderen Namen zu speichern, wenn er möchte.

   ```js
   myButton.addEventListener("click", () => {
     setUserName();
   });
   ```

6. Speichern Sie alle Dateien und laden Sie `index.html` im Browser. Sie sollten sofort aufgefordert werden, Ihren Namen einzugeben. Nachdem Sie dies getan haben, erscheint er als Teil der personalisierten Begrüßung im `<h1>`. Beachten Sie, wie die Personalisierung auch nach dem Neuladen der Seite bestehen bleibt. Sie können die "Change user"-Schaltfläche klicken, um einen neuen Namen einzugeben.

> [!NOTE]
> Der Begriff [Operator](/de/docs/Learn_web_development/Core/Scripting/Math) bezieht sich auf ein JavaScript-Sprachezeichen, das eine Operation auf einem oder mehreren Werten ausführt. Beispiele umfassen `+` (addiert Werte), `-` (subtrahiert einen Wert von einem anderen) und `!` (negiert einen Wert — wie Sie es zuvor gesehen haben).

## Ein Benutzername von null?

Wenn Sie das Beispiel ausführen und das Dialogfeld erscheint, das Sie auffordert, Ihren Namen einzugeben, versuchen Sie, die Schaltfläche _Abbrechen_ zu drücken. Sie sollten letztendlich eine Überschrift erhalten, die _Mozilla is cool, null_ liest. Dies geschieht, weil der Wert auf [`null`](/de/docs/Web/JavaScript/Reference/Operators/null) gesetzt wird, wenn Sie die Aufforderung abbrechen. In JavaScript ist _null_ ein spezieller Wert, der das Fehlen eines Wertes repräsentiert.

Versuchen Sie auch, auf _OK_ zu klicken, ohne einen Namen einzugeben. Sie sollten eine Überschrift erhalten, die _Mozilla is cool,_ liest, weil Sie `myName` auf eine leere Zeichenkette gesetzt haben.

Um diese Probleme zu vermeiden, können Sie eine weitere Bedingung hinzufügen, um zu überprüfen, dass der Benutzer keinen leeren Namen eingegeben hat. Aktualisieren Sie Ihre `setUserName()`-Funktion auf Folgendes:

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

In menschlicher Sprache bedeutet dies: Wenn `myName` keinen Wert hat, führen Sie `setUserName()` erneut von Anfang an aus. Wenn es einen Wert hat (wenn obige Aussage nicht zutrifft), speichern Sie den Wert in `localStorage` und setzen ihn als Text der Überschrift.

## Fazit

Wenn Sie alle Anweisungen in diesem Artikel befolgt haben, sollten Sie mit einer Seite enden, die in etwa wie das Bild unten aussieht. Sie können auch [unsere Version anzeigen](https://mdn.github.io/beginner-html-site-scripted/).

![Endaussehen der HTML-Seite nach dem Erstellen von Elementen: eine Überschrift, großes zentriertes Logo, Inhalte und eine Schaltfläche](website-screen-scripted.png)

Wenn Sie stecken bleiben, können Sie Ihre Arbeit mit unserem [abgeschlossenen Beispielcode auf GitHub](https://github.com/mdn/beginner-html-site-scripted/blob/main/scripts/main.js) vergleichen.

Wir haben in diesem Artikel nur an der Oberfläche von JavaScript gekratzt. Sie werden viel mehr in unserem [Dynamisches Scripting mit JavaScript](/de/docs/Learn_web_development/Core/Scripting) Kernmodul später im Kurs lernen.

## Siehe auch

- [Scrimba: JavaScript lernen](https://scrimba.com/learn-javascript-c0v?via=mdn) <sup>[_MDN Lernpartner_](/de/docs/MDN/Writing_guidelines/Learning_content#partner_links_and_embeds)</sup>
  - : Der _Learn JavaScript_-Kurs von [Scrimba](https://scrimba.com?via=mdn) bringt Ihnen JavaScript durch das Lösen von über 140 interaktiven Programmierherausforderungen bei. Sie erstellen Projekte, darunter ein Spiel, eine Browsererweiterung und sogar eine mobile Anwendung. Scrimba bietet unterhaltsame interaktive Lektionen, die von sachkundigen Lehrern gelehrt werden.
- [JavaScript lernen](https://learnjavascript.online/)
  - : Dies ist eine hervorragende Ressource für angehende Webentwickler! Lernen Sie JavaScript in einer interaktiven Umgebung mit kurzen Lektionen und interaktiven Tests, geführt von einer automatisierten Bewertung. Die ersten 40 Lektionen sind kostenlos. Der vollständige Kurs ist für eine kleine einmalige Zahlung verfügbar.

{{PreviousMenuNext("Learn_web_development/Getting_started/Your_first_website/Styling_the_content", "Learn_web_development/Getting_started/Your_first_website/Publishing_your_website", "Learn_web_development/Getting_started/Your_first_website")}}
