---
title: "JavaScript: Interaktivität hinzufügen"
short-title: Interaktivität hinzufügen
slug: Learn_web_development/Getting_started/Your_first_website/Adding_interactivity
l10n:
  sourceCommit: fdb47ddce77e5737d7f127e9809ab498c46162b3
---

{{PreviousMenuNext("Learn_web_development/Getting_started/Your_first_website/Styling_the_content", "Learn_web_development/Getting_started/Your_first_website/Publishing_your_website", "Learn_web_development/Getting_started/Your_first_website")}}

JavaScript ist eine Programmiersprache, die Interaktivität zu Webseiten hinzufügt. Sie können es verwenden, um nahezu alles zu steuern – Formulardatenvalidierung, Button-Funktionalität, Spiel-Logik, dynamisches Styling, Animation-Updates und vieles mehr. Dieser Artikel hilft Ihnen beim Einstieg mit JavaScript und führt Sie durch das Hinzufügen einiger unterhaltsamer Funktionen zu Ihrer ersten Website.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Grundlegende Vertrautheit mit Ihrem Computer-Betriebssystem, der grundlegenden Software, die Sie zum Erstellen einer Webseite verwenden, und Dateisystemen.
      </td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Der Zweck und die Funktion von JavaScript.</li>
          <li>Ein grundlegendes Verständnis der JavaScript-Sprachgrundlagen wie Variablen, Operatoren, Bedingungen, Funktionen und Ereignissen.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Was ist JavaScript?

{{Glossary("JavaScript", "JavaScript")}} ist eine vollwertige Programmiersprache – sie enthält alle klassischen Programmiermerkmale, die Sie möglicherweise in anderen Programmiersprachen gesehen haben (oder zumindest gehört haben), wie **Variablen**, **Schleifen** und **Funktionen**.

JavaScript, wenn es auf Webseiten verwendet wird (obwohl es auch an anderen Orten verwendet werden kann), funktioniert typischerweise durch:

- Abrufen von Referenzen zu einem oder mehreren Werten wie Zahlen oder zu Elementen auf der Seite.
- Etwas mit diesen Werten tun, wie die Zahlen zusammenzuzählen.
- Rückgabe eines Ergebnisses, das später für etwas anderes verwendet werden kann. Zum Beispiel könnten Sie die Summe dieser Zahlen auf der Seite anzeigen wollen.

Schauen wir uns ein Beispiel an. Wir verwenden dieselbe grundlegende Liste, die wir in den letzten beiden Artikeln gesehen haben:

```html live-sample___basic-js
<p>Instructions for life:</p>

<ul>
  <li>Eat</li>
  <li>Sleep</li>
  <li>Repeat</li>
</ul>
```

Wir definieren auch eine CSS-Klasse namens `.done`, die jedes Element, auf das sie angewendet wird, stylt und es wie eine abgeschlossene Aufgabe mit grüner Textfarbe und einem Durchstrich aussehen lässt. Wir werden sie im nächsten Schritt mit JavaScript auf unsere `<li>`-Elemente anwenden.

```css live-sample___basic-js
.done {
  color: darkseagreen;
  text-decoration: line-through solid black 2px;
}
```

Nun zum JavaScript. Hier speichern wir zuerst Referenzen zu den `<li>`-Elementen in einer Variablen namens `listItems`. Dann definieren wir eine Funktion namens `toggleDone()`, die die Klasse `done` zu einem Listenelement hinzufügt, wenn es sie nicht bereits hat, und die Klasse entfernt, wenn doch. Schließlich durchlaufen wir die Listenelemente (verwenden `forEach()`) und fügen jedem Listenelement einen Ereignis-Listener hinzu (verwenden `addEventListener()`), damit beim Klicken auf das Element die `done`-Klasse umgeschaltet wird und das zuvor definierte CSS angewendet wird.

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

Machen Sie sich keine Gedanken, wenn Sie das obige JavaScript jetzt nicht verstehen. Sich in JavaScript einzuarbeiten ist anspruchsvoller als sich mit HTML und CSS vertraut zu machen, aber im späteren Verlauf des Kurses wird alles klarer.

Dieses Beispiel wird wie folgt in einem Webbrowser dargestellt:

{{EmbedLiveSample("basic-js", "100%", "140px")}}

Versuchen Sie, die Listenelemente ein paar Mal zu klicken und beachten Sie, wie die "done"-Stile als Ergebnis umgeschaltet werden. Nicht schlecht für 11 Zeilen JavaScript.

## Ein "Hello world!" Rundgang

Um Sie mit dem Schreiben von JavaScript zu beginnen, führen wir Sie durch das Hinzufügen eines _Hello world!_-Beispiels zu Ihrer Beispielwebsite. (_Hello world!_ ist das Standard-Beispielprogramm zum Einstieg in die Programmierung.)

> [!WARNING]
> Wenn Sie dem Rest unseres Kurses nicht gefolgt sind, [laden Sie diesen Beispielcode herunter](https://codeload.github.com/mdn/beginner-html-site-styled/zip/refs/heads/gh-pages) und verwenden Sie ihn als Ausgangspunkt.

1. Erstellen Sie in Ihrem `first-website`-Ordner oder dem eben heruntergeladenen Beispielordner einen neuen Ordner namens `scripts`.
2. Erstellen Sie im `scripts`-Ordner ein neues Textdokument mit dem Namen `main.js` und speichern Sie es.
3. Gehen Sie zu Ihrer `index.html`-Datei und geben Sie diesen Code in einer neuen Zeile ein, unmittelbar vor dem schließenden `</head>`-Tag:

   ```html
   <script async src="scripts/main.js"></script>
   ```

   Dies übernimmt dieselbe Aufgabe wie das {{htmlelement("link")}}-Element für CSS – es wendet das JavaScript auf die Seite an, sodass es das HTML (zusammen mit dem CSS und allem anderen auf der Seite) beeinflussen kann.

4. Fügen Sie diesen Code zu Ihrer `scripts/main.js`-Datei hinzu:

   ```js
   // Store a reference to the <h1> in a variable
   const myHeading = document.querySelector("h1");
   // Update the text content of the <h1>
   myHeading.textContent = "Hello world!";
   ```

5. Stellen Sie sicher, dass die HTML- und JavaScript-Dateien gespeichert sind, und laden Sie dann `index.html` in Ihrem Browser. Sie sollten etwas wie dies sehen:

![Überschrift "hello world" über einem Firefox-Logo](hello-world.png)

Lassen Sie uns aufschlüsseln, wie dieses Beispiel funktioniert.

Wir haben JavaScript verwendet, um den Überschriftstext in `Hello world!` zu ändern. Wir haben eine Referenz zur Überschrift gespeichert und in einer Variablen namens `myHeading` gespeichert (einem Container, der einen Wert speichert). Dies ist ähnlich wie das Anwenden von CSS auf Elemente – Sie wählen zuerst die Elemente aus, die Sie beeinflussen möchten, indem Sie einen CSS-Selektor verwenden und dann die Stile definieren, die Sie für diese Elemente wünschen. In beiden Fällen müssen Sie, wenn Sie etwas mit einem Element machen möchten, es zuerst auswählen.

Anschließend haben wir den Wert der `textContent`-Eigenschaft der `myHeading`-Variablen (die den Textinhalt des `<h1>`-Elements repräsentiert) auf _Hello world!_ gesetzt.

Die Zeilen, die mit `//` beginnen, sind JavaScript-Kommentare. Genau wie HTML- und CSS-Kommentare ignoriert der Browser diese und ermöglicht es Ihnen, Notizen zu Ihrem Code hinzuzufügen, um zu erklären, wie er funktioniert.

Lassen Sie uns fortfahren und einige neue Funktionen zu unserer Beispielseite hinzufügen.

> [!WARNING]
> Bevor Sie fortfahren, löschen Sie den "Hello world!"-Code aus Ihrer `main.js`-Datei. Wenn Sie dies nicht tun, wird der bestehende Code mit dem neuen Code, den Sie hinzufügen werden, in Konflikt geraten.

## Hinzufügen eines Bildwechslers

In diesem Abschnitt verwenden Sie JavaScript und [DOM API](/de/docs/Web/API/HTML_DOM_API) Funktionen, um die Anzeige zwischen zwei Bildern zu wechseln. Dieser Wechsel wird erfolgen, wenn ein Benutzer auf das angezeigte Bild klickt.

1. Wählen Sie ein anderes Bild aus, das Sie auf Ihrer Beispielseite präsentieren möchten. Idealerweise sollte das Bild die gleiche Größe wie das zuvor hinzugefügte haben oder so nah wie möglich dran sein.
2. Speichern Sie dieses Bild in Ihrem `images`-Ordner.
3. Fügen Sie den folgenden JavaScript-Code zu Ihrer `main.js`-Datei hinzu und stellen Sie sicher, dass Sie `firefox2.png` und beide Instanzen von `firefox-icon.png` mit Ihrem zweiten und ersten Bildnamen ersetzen.

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

4. Speichern Sie alle Dateien und laden Sie `index.html` im Browser. Wenn Sie nun auf das Bild klicken, sollte es sich in das andere Bild ändern.

In diesem Code haben Sie eine Referenz zu Ihrem {{htmlelement("img")}}-Element in der Variablen `myImage` gespeichert. Dann haben Sie ihm eine `click`-Ereignis-Handler-Funktion zugewiesen. Jedes Mal, wenn auf das `<img>` geklickt wird, führt die Funktion Folgendes aus:

- Ruft den Wert des `src`-Attributs des Bildes ab.
- Verwendet eine Bedingungsstruktur (`if ... else`), um zu überprüfen, ob der `src`-Wert dem Pfad des Originalbildes entspricht:

  - Wenn ja, ändert der Code den `src`-Wert in den Pfad des zweiten Bildes, wodurch das andere Bild innerhalb des `<img>`-Elements geladen wird.
  - Wenn nicht (was bedeutet, dass das Bild bereits geändert wurde), wechselt der `src`-Wert zurück zum ursprünglichen Bildpfad.

> [!NOTE]
> Dieser Abschnitt führt mehrere wichtige Begriffe ein. Schlüsselkonzepte umfassen:
>
> - {{Glossary("API", "API")}}: Eine Reihe von Funktionen, die es einem Entwickler ermöglichen, mit einer Programmierumgebung zu interagieren. Web-APIs (wie die oben verwendeten DOM API-Funktionen) basieren auf der JavaScript-Sprache und ermöglichen es Ihnen, verschiedene Teile des Browsers und der von ihm angezeigten Webseiten zu manipulieren.
> - [Ereignisse](/de/docs/Learn_web_development/Core/Scripting/Events): Dinge, die im Browser passieren. Sie sind entscheidend, um Webseiten interaktiv zu machen. Sie können Code in Reaktion auf Ereignisse ausführen, indem Sie **Ereignis-Handler-Funktionen** verwenden – dies sind Codeblöcke, die ausgeführt werden, wenn ein Ereignis eintritt. Das häufigste Beispiel ist das [click event](/de/docs/Web/API/Element/click_event), das vom Browser ausgelöst wird, wenn ein Benutzer auf etwas klickt.
> - [Funktionen](/de/docs/Learn_web_development/Core/Scripting/Functions): Eine Möglichkeit, Code zu verpacken, den Sie wiederverwenden möchten. Sie können Ihren Code einmal innerhalb einer Funktion definieren und dann so oft ausführen, wie Sie möchten. Dies hilft Ihnen, denselben Code nicht immer wieder schreiben zu müssen. In unserem Beispiel haben wir eine `click`-Ereignis-Handler-Funktion definiert, die jedes Mal ausgeführt wird, wenn ein Benutzer auf das Bild klickt.
> - [Bedingungen](/de/docs/Learn_web_development/Core/Scripting/Conditionals): Code-Strukturen, die verwendet werden, um zu testen, ob ein Ausdruck `true` oder `false` zurückgibt, und darauf basierend unterschiedlichen Code auszuführen. Eine sehr häufige Form von Bedingungen ist die `if...else`-Anweisung.

## Hinzufügen einer personalisierten Willkommensnachricht

Als nächstes ändern wir die Seitenüberschrift, um eine personalisierte Willkommensnachricht anzuzeigen, wenn der Benutzer die Seite zum ersten Mal besucht. Diese Willkommensnachricht wird im Browser mit der [Web Storage API](/de/docs/Web/API/Web_Storage_API) gespeichert, sodass, wenn der Benutzer die Seite verlässt und später zurückkehrt, seine personalisierten Daten noch da sind. Wir werden auch eine Möglichkeit hinzufügen, die Nachricht zu ändern.

1. Fügen Sie in `index.html` die folgende Zeile unmittelbar vor dem schließenden `</body>`-Tag hinzu:

   ```html
   <button>Change user</button>
   ```

2. Platzieren Sie in `main.js` den folgenden Code am Ende der Datei, genau so wie er geschrieben ist. Dies erstellt Referenzen zu dem neuen Button und der Überschrift und speichert jeden in Variablen:

   ```js
   let myButton = document.querySelector("button");
   let myHeading = document.querySelector("h1");
   ```

3. Fügen Sie die folgende Funktion hinzu, um die personalisierte Begrüßung einzustellen. Diese wird noch nichts unternehmen; wir werden die Funktion später aufrufen.

   ```js
   function setUserName() {
     const myName = prompt("Please enter your name.");
     localStorage.setItem("name", myName);
     myHeading.textContent = `Mozilla is cool, ${myName}`;
   }
   ```

   Die `setUserName()`-Funktion enthält eine [`prompt()`](/de/docs/Web/API/Window/prompt)-Funktion, die den Benutzer zur Eingabe von Daten auffordert und sie in einer Variablen speichert, nachdem er auf _OK_ geklickt hat. In diesem Beispiel fragen wir den Benutzer, einen Namen einzugeben, und speichern ihn in `myName`.<br /><br />

   Anschließend verwendet der Code die [Web Storage API](/de/docs/Web/API/Web_Storage_API), die es uns ermöglicht, Daten im Browser zu speichern und später abzurufen. Wir verwenden die [`localStorage.setItem()`](/de/docs/Web/API/Storage/setItem)-Funktion, um ein Datenelement namens `"name"` zu erstellen und zu speichern und dessen Wert auf die `myName`-Variable zu setzen, die die Benutzereingabe enthält.<br /><br />

   Schließlich setzen wir den `textContent` der Überschrift auf einen String, der den gespeicherten Namen des Benutzers enthält.

4. Fügen Sie diesen Bedingungsblock nach der Funktionsdeklaration hinzu. Dies ist unser _Initialisierungscode_ — er läuft, wenn die Seite zuerst geladen wird, um das Programm zu starten:

   ```js
   if (!localStorage.getItem("name")) {
     setUserName();
   } else {
     const storedName = localStorage.getItem("name");
     myHeading.textContent = `Mozilla is cool, ${storedName}`;
   }
   ```

   Die erste Zeile dieses Blocks verwendet den Negationsoperator (logisches NICHT, dargestellt durch das `!`-Zeichen), um zu überprüfen, ob das `name`-Datenelement noch nicht im `localStorage` gespeichert ist. Falls nicht, wird die `setUserName()`-Funktion ausgeführt, um es zu erstellen. Wenn es existiert (d.h. der Benutzer während eines früheren Besuchs einen Benutzernamen festgelegt hat), holen wir den gespeicherten Namen mit [`localStorage.getItem()`](/de/docs/Web/API/Storage/getItem) ab und setzen den `textContent` der Überschrift auf eine Zeichenkette plus den Benutzernamen – genau wie wir es innerhalb `setUserName()` gemacht haben.

5. Fügen Sie dem Button eine `click`-Ereignis-Handler-Funktion hinzu. Beim Klicken wird `setUserName()` ausgeführt. Dies ermöglicht dem Benutzer, einen anderen Namen zu speichern, falls er möchte.

   ```js
   myButton.addEventListener("click", () => {
     setUserName();
   });
   ```

6. Speichern Sie alle Dateien und laden Sie `index.html` im Browser. Es sollte sofort eine Aufforderung zur Eingabe Ihres Namens erscheinen. Nachdem Sie ihn eingegeben haben, wird er innerhalb des `<h1>` als Teil der personalisierten Begrüßung angezeigt. Beachten Sie, wie die Personalisierung sogar dann bestehen bleibt, wenn Sie die Seite neu laden. Sie können den Button "Change user" klicken, um einen neuen Namen einzugeben.

> [!NOTE]
> Der Begriff [Operator](/de/docs/Learn_web_development/Core/Scripting/Math) bezieht sich auf ein JavaScript-Sprachzeichen, das eine Operation an einem oder mehreren Werten durchführt. Beispiele sind `+` (fügt Werte hinzu), `-` (subtrahiert einen Wert von einem anderen) und `!` (negiert einen Wert – wie bereits gesehen).

## Ein Benutzername von null?

Wenn Sie das Beispiel ausführen und das Dialogfeld erhalten, das Sie zur Eingabe Ihres Namens auffordert, versuchen Sie, die _Abbrechen_-Schaltfläche zu drücken. Sie sollten mit einem Titel enden, der _Mozilla is cool, null_ lautet. Dies passiert, weil der Wert auf [`null`](/de/docs/Web/JavaScript/Reference/Operators/null) gesetzt wird, wenn Sie die Eingabeaufforderung abbrechen. In JavaScript ist _null_ ein spezieller Wert, der die Abwesenheit eines Wertes darstellt.

Versuchen Sie auch, _OK_ zu klicken, ohne einen Namen einzugeben. Sie sollten mit einem Titel enden, der lautet _Mozilla is cool,_ da Sie `myName` auf eine leere Zeichenkette gesetzt haben.

Um diese Probleme zu vermeiden, können Sie eine weitere Bedingung hinzufügen, um zu überprüfen, ob der Benutzer keinen leeren Namen eingegeben hat. Aktualisieren Sie Ihre `setUserName()`-Funktion wie folgt:

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

In menschlicher Sprache bedeutet dies: Wenn `myName` keinen Wert hat, führen Sie `setUserName()` erneut von Anfang an aus. Wenn es einen Wert hat (wenn die obige Aussage nicht wahr ist), speichern Sie den Wert in `localStorage` und setzen ihn als Text der Überschrift.

## Fazit

Wenn Sie alle Anweisungen in diesem Artikel befolgt haben, sollten Sie mit einer Seite enden, die in etwa so aussieht wie das untenstehende Bild. Sie können auch [unsere Version anzeigen](https://mdn.github.io/beginner-html-site-scripted/).

![Endgültiges Aussehen der HTML-Seite nach dem Erstellen von Elementen: eine Überschrift, großes zentriertes Logo, Inhalt und ein Button](website-screen-scripted.png)

Wenn Sie nicht weiterkommen, können Sie Ihre Arbeit mit unserem [fertigen Beispielcode auf GitHub](https://github.com/mdn/beginner-html-site-scripted/blob/main/scripts/main.js) vergleichen.

Wir haben in diesem Artikel nur die Oberfläche von JavaScript angekratzt. Sie werden viel mehr in unserem [Dynamisches Scripting mit JavaScript](/de/docs/Learn_web_development/Core/Scripting) Kernmodul später im Kurs lernen.

## Siehe auch

- [Scrimba: Learn JavaScript](https://scrimba.com/learn-javascript-c0v?via=mdn) <sup>[_MDN Lernpartner_](/de/docs/MDN/Writing_guidelines/Learning_content#partner_links_and_embeds)</sup>
  - : [Scrimba's](https://scrimba.com?via=mdn) _Learn JavaScript_ Kurs lehrt Ihnen JavaScript durch das Lösen von über 140 interaktiven Programmieraufgaben und dem Aufbau von Projekten, einschließlich eines Spiels, einer Browsererweiterung und sogar einer mobilen App. Scrimba bietet unterhaltsame interaktive Lektionen, die von kompetenten Lehrern geleitet werden.
- [Learn JavaScript](https://learnjavascript.online/)
  - : Dies ist eine hervorragende Ressource für angehende Webentwickler! Lernen Sie JavaScript in einer interaktiven Umgebung mit kurzen Lektionen und interaktiven Tests, angeleitet durch eine automatisierte Bewertung. Die ersten 40 Lektionen sind kostenlos. Der vollständige Kurs ist gegen eine kleine einmalige Zahlung verfügbar.

{{PreviousMenuNext("Learn_web_development/Getting_started/Your_first_website/Styling_the_content", "Learn_web_development/Getting_started/Your_first_website/Publishing_your_website", "Learn_web_development/Getting_started/Your_first_website")}}
