---
title: "JavaScript: Interaktivität hinzufügen"
short-title: Interaktivität hinzufügen
slug: Learn_web_development/Getting_started/Your_first_website/Adding_interactivity
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{PreviousMenuNext("Learn_web_development/Getting_started/Your_first_website/Styling_the_content", "Learn_web_development/Getting_started/Your_first_website/Publishing_your_website", "Learn_web_development/Getting_started/Your_first_website")}}

JavaScript ist eine Programmiersprache, die Websites interaktiv macht. Sie können JavaScript verwenden, um nahezu alles zu steuern – von der Validierung von Formulardaten, über die Funktionalität von Tasten, Spiel-Logik, dynamische Stile bis hin zu Animationen und vielem mehr. Dieser Artikel führt Sie in JavaScript ein und zeigt Ihnen, wie Sie Ihrem ersten Website-Projekt einige unterhaltsame Funktionen hinzufügen können.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Grundkenntnisse in Ihrem Computer-Betriebssystem, der grundlegenden Software, die für den Aufbau einer Website benötigt wird, und den Dateisystemen.
      </td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Der Zweck und die Funktion von JavaScript.</li>
          <li>Ein grundlegendes Verständnis für die JavaScript-Programmiersprache wie Variablen, Operatoren, bedingte Anweisungen, Funktionen und Ereignisse.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Was ist JavaScript?

{{Glossary("JavaScript", "JavaScript")}} ist eine vollwertige Programmiersprache – sie enthält alle klassischen Programmiermerkmale, die Sie möglicherweise aus anderen Programmiersprachen kennen (oder zumindest davon gehört haben), wie **Variablen**, **Schleifen** und **Funktionen**.

JavaScript, wenn es auf Webseiten verwendet wird (obwohl es auch an anderen Stellen verwendet werden kann), funktioniert im Allgemeinen folgendermaßen:

- Erhalten von Referenzen auf einen oder mehrere Werte, wie z.B. Zahlen oder auf Elemente auf der Seite.
- Durchführung von Operationen mit diesen Werten, wie z.B. das Addieren von Zahlen.
- Rückgabe eines Ergebnisses, das später für andere Zwecke verwendet werden kann. So können Sie z.B. die Summe dieser Zahlen auf der Seite anzeigen lassen.

Schauen wir uns ein Beispiel an. Wir werden dieselbe grundlegende Liste verwenden, die wir in den letzten Artikeln gesehen haben:

```html live-sample___basic-js
<p>Instructions for life:</p>

<ul>
  <li>Eat</li>
  <li>Sleep</li>
  <li>Repeat</li>
</ul>
```

Wir definieren auch eine CSS-Klasse namens `.done`, die jedes Element, auf das sie angewendet wird, so stylt, dass es wie eine abgeschlossene Aufgabe aussieht, mit grüner Textfarbe und einem Durchstrich. Diese Klasse werden wir im nächsten Schritt mit JavaScript auf unsere `<li>`-Elemente anwenden.

```css live-sample___basic-js
.done {
  color: darkseagreen;
  text-decoration: line-through solid black 2px;
}
```

Kommen wir nun zum JavaScript. Hier speichern wir zunächst Referenzen auf die `<li>`-Elemente in einer Variablen namens `listItems`. Dann definieren wir eine Funktion namens `toggleDone()`, die das `done`-Klasse einem Listenelement hinzufügt, wenn es sie noch nicht hat, und sie entfernt, wenn es sie hat. Schließlich durchlaufen wir die Listenelemente (mithilfe von `forEach()`) und fügen jedem Listenelement einen Ereignis-Listener hinzu (mithilfe von `addEventListener()`), sodass beim Klicken darauf die `done`-Klasse umgeschaltet wird und das von uns definierte CSS angewendet wird.

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

Machen Sie sich keine Sorgen, wenn Sie das obige JavaScript jetzt noch nicht verstehen. Sich mit JavaScript vertraut zu machen, ist herausfordernder als sich mit HTML und CSS vertraut zu machen, aber im Verlauf des Kurses wird alles klarer werden.

Dieses Beispiel wird in einem Webbrowser folgendermaßen dargestellt:

{{EmbedLiveSample("basic-js", "100%", "140px")}}

Versuchen Sie, die Listenelemente ein paar Mal anzuklicken und beobachten Sie, wie die "done"-Stile als Ergebnis umgeschaltet werden. Gar nicht so schlecht für 11 Zeilen JavaScript.

## Ein "Hello world!"-Durchlauf

Um Sie beim Schreiben von JavaScript zu starten, führen wir Sie durch das Hinzufügen eines _Hello world!_-Beispiels zu Ihrer Beispiel-Website. (_Hello world!_ ist das Standard-Einführungsprogrammierbeispiel.)

> [!WARNING]
> Wenn Sie dem Rest unseres Kurses nicht gefolgt sind, [laden Sie dieses Beispielcode herunter](https://codeload.github.com/mdn/beginner-html-site-styled/zip/refs/heads/gh-pages) und verwenden Sie es als Ausgangspunkt.

1. Erstellen Sie in Ihrem `first-website`-Ordner oder dem soeben heruntergeladenen Beispielordner einen neuen Ordner namens `scripts`.
2. Erstellen Sie innerhalb des Ordners `scripts` ein neues Textdokument namens `main.js` und speichern Sie es ab.
3. Gehen Sie zu Ihrer `index.html`-Datei und geben Sie diesen Code in einer neuen Zeile ein, kurz vor dem schließenden `</head>`-Tag:

   ```html
   <script async src="scripts/main.js"></script>
   ```

   Dies erledigt dieselbe Aufgabe wie das {{htmlelement("link")}}-Element für CSS – es wendet das JavaScript auf die Seite an, sodass es das HTML (zusammen mit dem CSS und allem anderen auf der Seite) beeinflussen kann.

4. Fügen Sie diesen Code zu Ihrer Datei `scripts/main.js` hinzu:

   ```js
   // Store a reference to the <h1> in a variable
   const myHeading = document.querySelector("h1");
   // Update the text content of the <h1>
   myHeading.textContent = "Hello world!";
   ```

5. Stellen Sie sicher, dass die HTML- und JavaScript-Dateien gespeichert sind, und laden Sie dann `index.html` in Ihrem Browser. Sie sollten so etwas sehen:

![Überschrift "hello world" über einem Firefox-Logo](hello-world.png)

Lassen Sie uns analysieren, wie dieses Beispiel funktioniert.

Wir haben JavaScript verwendet, um den Überschriftstext in `Hello world!` zu ändern. Wir haben eine Referenz auf die Überschrift erstellt und in einer Variablen namens `myHeading` gespeichert (ein Container, der einen Wert speichert). Das ist ähnlich wie bei der Anwendung von CSS auf Elemente – Sie wählen zuerst die Elemente aus, die Sie beeinflussen möchten, indem Sie einen CSS-Selektor verwenden, und definieren dann die Stile, die für diese Elemente gelten sollen. In beiden Fällen, wenn Sie etwas mit einem Element tun möchten, müssen Sie es zuerst auswählen.

Danach haben wir den Wert der `textContent`-Eigenschaft der `myHeading`-Variablen (welches den Textinhalt des `<h1>`-Elements darstellt) auf _Hello world!_ gesetzt.

Die Zeilen, die mit `//` beginnen, sind JavaScript-Kommentare. Wie bei HTML- und CSS-Kommentaren ignoriert der Browser diese und bietet Ihnen eine Möglichkeit, Notizen zu Ihrem Code hinzuzufügen, um zu erklären, wie er funktioniert.

Kommen wir zum nächsten Schritt und fügen wir unserer Beispiel-Website einige neue Funktionen hinzu.

> [!WARNING]
> Bevor Sie weitermachen, löschen Sie den "Hello world!"-Code aus Ihrer `main.js`-Datei. Wenn Sie dies nicht tun, wird der vorhandene Code mit dem neuen Code, den Sie hinzufügen werden, kollidieren.

## Hinzufügen eines Bildwechslers

In diesem Abschnitt verwenden Sie JavaScript und [DOM API](/de/docs/Web/API/HTML_DOM_API)-Funktionen, um die Anzeige zwischen zwei Bildern zu wechseln. Diese Änderung tritt ein, wenn ein Benutzer das angezeigte Bild anklickt.

1. Wählen Sie ein weiteres Bild aus, das Sie auf Ihrer Beispiel-Website zeigen möchten. Idealerweise sollte das Bild die gleiche Größe wie das zuvor hinzugefügte Bild oder so nah wie möglich sein.
2. Speichern Sie dieses Bild in Ihrem `images`-Ordner.
3. Fügen Sie den folgenden JavaScript-Code zu Ihrer Datei `main.js` hinzu, und ersetzen Sie dabei `firefox2.png` und beide Instanzen von `firefox-icon.png` durch die Namen Ihrer zweiten bzw. ersten Bilder.

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

4. Speichern Sie alle Dateien und laden Sie `index.html` im Browser. Jetzt sollte das Bild wechseln, wenn Sie darauf klicken.

In diesem Code haben Sie eine Referenz auf Ihr {{htmlelement("img")}}-Element in der Variablen `myImage` gespeichert. Dann haben Sie ihr eine `click`-Ereignishandler-Funktion zugewiesen. Jedes Mal, wenn das `<img>` angeklickt wird, führt die Funktion folgendes aus:

- Ruft den Wert des `src`-Attributs des Bildes ab.
- Verwendet eine Bedingung (`if ... else`-Struktur), um zu überprüfen, ob der `src`-Wert dem Pfad des ursprünglichen Bildes entspricht:
  - Wenn ja, ändert der Code den `src`-Wert in den Pfad des zweiten Bildes, wodurch das andere Bild im `<img>`-Element geladen wird.
  - Wenn nicht (d.h. das Bild wurde bereits gewechselt), wechselt der `src`-Wert zurück zum ursprünglichen Bildpfad.

> [!NOTE]
> Dieser Abschnitt führt mehrere wichtige Begriffe ein. Wichtige Konzepte umfassen:
>
> - {{Glossary("API", "API")}}: Ein Satz von Funktionen, der es einem Entwickler ermöglicht, mit einer Programmierumgebung zu interagieren. Web-APIs (wie die oben verwendeten DOM API-Funktionen) basieren auf der JavaScript-Sprache und ermöglichen es Ihnen, verschiedene Teile des Browsers und der angezeigten Webseiten zu manipulieren.
> - [Ereignisse](/de/docs/Learn_web_development/Core/Scripting/Events): Dinge, die im Browser passieren. Sie sind entscheidend, um Websites interaktiv zu machen. Sie können Code als Antwort auf Ereignisse ausführen, indem Sie **Ereignishandler-Funktionen** verwenden – dies sind Codeblöcke, die ausgeführt werden, wenn ein Ereignis eintritt. Das gebräuchlichste Beispiel ist das [Klick-Ereignis](/de/docs/Web/API/Element/click_event), das vom Browser ausgelöst wird, wenn ein Benutzer auf etwas klickt.
> - [Funktionen](/de/docs/Learn_web_development/Core/Scripting/Functions): Eine Möglichkeit, Code zu verpacken, den Sie wiederverwenden möchten. Sie können Ihren Code einmal innerhalb einer Funktion definieren und ihn dann so oft ausführen, wie Sie möchten, was Ihnen hilft, das Schreiben von demselben Code immer wieder zu vermeiden. In unserem Beispiel hier haben wir eine `click`-Ereignishandler-Funktion definiert, die jedes Mal ausgeführt wird, wenn ein Benutzer auf das Bild klickt.
> - [Bedingungen](/de/docs/Learn_web_development/Core/Scripting/Conditionals): Code-Strukturen, die verwendet werden, um zu überprüfen, ob eine Ausdruck `true` oder `false` zurückgibt, und um je nach Ergebnis verschiedenen Code auszuführen. Eine sehr häufige Form der Bedingung ist die `if...else`-Anweisung.

## Hinzufügen einer personalisierten Willkommensnachricht

Als nächstes ändern wir die Seitenüberschrift, um eine personalisierte Willkommensnachricht anzuzeigen, wenn der Benutzer die Website zum ersten Mal besucht. Diese Willkommensnachricht wird im Browser mithilfe der [Web Storage API](/de/docs/Web/API/Web_Storage_API) gespeichert, sodass die persönlichen Daten des Benutzers auch nach dem Verlassen der Website und einer Rückkehr später noch vorhanden sind. Wir werden auch eine Möglichkeit einfügen, damit der Benutzer die Nachricht ändern kann.

1. Fügen Sie in `index.html` die folgende Zeile kurz vor dem schließenden `</body>`-Tag hinzu:

   ```html
   <button>Change user</button>
   ```

2. Platzieren Sie in `main.js` den folgenden Code am Ende der Datei, genau wie geschrieben. Dies erstellt Referenzen auf die neue Taste und die Überschrift und speichert jede in Variablen:

   ```js
   let myButton = document.querySelector("button");
   let myHeading = document.querySelector("h1");
   ```

3. Fügen Sie die folgende Funktion hinzu, um die personalisierte Begrüßung einzurichten. Dies wird noch nichts tun; wir werden die Funktion später aufrufen.

   ```js
   function setUserName() {
     const myName = prompt("Please enter your name.");
     localStorage.setItem("name", myName);
     myHeading.textContent = `Mozilla is cool, ${myName}`;
   }
   ```

   Die `setUserName()`-Funktion enthält eine [`prompt()`](/de/docs/Web/API/Window/prompt)-Funktion, die den Benutzer auffordert, Daten einzugeben und sie nach dem Klicken auf _OK_ in einer Variablen zu speichern. In diesem Beispiel bitten wir den Benutzer, einen Namen einzugeben, und speichern ihn in `myName`.<br /><br />

   Als Nächstes verwendet der Code die [Web Storage API](/de/docs/Web/API/Web_Storage_API), die es uns ermöglicht, Daten im Browser zu speichern und später abzurufen. Wir verwenden die Funktion [`localStorage.setItem()`](/de/docs/Web/API/Storage/setItem), um ein Datenelement namens `"name"` zu erstellen und zu speichern, dessen Wert auf die `myName`-Variable gesetzt wird, die die Eingabe des Benutzers enthält.<br /><br />

   Schließlich setzen wir den `textContent` der Überschrift auf einen String, der den gespeicherten Namen des Benutzers enthält.

4. Fügen Sie nach der Funktionsdeklaration den folgenden bedingten Block hinzu. Dies ist unser _Initialisierungscode_ – er wird ausgeführt, wenn die Seite zum ersten Mal geladen wird, um das Programm zu starten:

   ```js
   if (!localStorage.getItem("name")) {
     setUserName();
   } else {
     const storedName = localStorage.getItem("name");
     myHeading.textContent = `Mozilla is cool, ${storedName}`;
   }
   ```

   Die erste Zeile dieses Blocks verwendet den Negationsoperator (logisches NICHT, dargestellt durch das `!`-Zeichen), um zu überprüfen, ob das `name`-Datenelement _nicht_ bereits in `localStorage` gespeichert ist. Wenn nicht, wird die `setUserName()`-Funktion ausgeführt, um es zu erstellen. Wenn es existiert (d.h. der Benutzer hat während eines früheren Besuchs einen Benutzernamen gesetzt), rufen wir den gespeicherten Namen mit [`localStorage.getItem()`](/de/docs/Web/API/Storage/getItem) ab und setzen den `textContent` der Überschrift auf einen String plus den Namen des Benutzers – ähnlich wie wir es innerhalb von `setUserName()` gemacht haben.

5. Fügen Sie der Taste eine `click`-Ereignishandler-Funktion hinzu. Wenn angeklickt, wird `setUserName()` ausgeführt. Dies ermöglicht dem Benutzer, einen anderen Namen zu speichern, wenn er möchte.

   ```js
   myButton.addEventListener("click", () => {
     setUserName();
   });
   ```

6. Speichern Sie alle Dateien und laden Sie `index.html` im Browser. Sie sollten sofort aufgefordert werden, Ihren Namen einzugeben. Nachdem Sie dies getan haben, wird er als Teil der personalisierten Begrüßung innerhalb des `<h1>` angezeigt. Beachten Sie, wie die Personalisierung auch nach dem Neuladen der Seite erhalten bleibt. Sie können die Schaltfläche "Benutzer ändern" anklicken, um einen neuen Namen einzugeben.

> [!NOTE]
> Der Begriff [Operator](/de/docs/Learn_web_development/Core/Scripting/Math) bezieht sich auf ein JavaScript-Sprache-Zeichen, das eine Operation auf einem oder mehreren Werten durchführt. Beispiele umfassen `+` (addiert Werte), `-` (subtrahiert einen Wert von einem anderen) und `!` (negiert einen Wert – wie Sie zuvor gesehen haben).

## Ein Benutzername von null?

Wenn Sie das Beispiel ausführen und das Dialogfeld erhalten, das Sie auffordert, Ihren Namen einzugeben, versuchen Sie die _Abbrechen_-Taste zu drücken. Sie sollten mit einer Überschrift enden, die _Mozilla is cool, null_ liest. Dies geschieht, weil der Wert auf [`null`](/de/docs/Web/JavaScript/Reference/Operators/null) gesetzt wird, wenn Sie die Eingabeaufforderung abbrechen. In JavaScript ist _null_ ein spezieller Wert, der das Fehlen eines Wertes darstellt.

Versuchen Sie auch, auf _OK_ zu klicken, ohne einen Namen einzugeben. Sie sollten mit einer Überschrift enden, die _Mozilla is cool,_ liest, da Sie `myName` auf einen leeren String gesetzt haben.

Um diese Probleme zu vermeiden, können Sie eine weitere Bedingung hinzufügen, um zu überprüfen, dass der Benutzer keinen leeren Namen eingegeben hat. Aktualisieren Sie Ihre `setUserName()`-Funktion wie folgt:

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

In menschlicher Sprache bedeutet dies: Wenn `myName` keinen Wert hat, führen Sie `setUserName()` erneut von Anfang an aus. Wenn es einen Wert hat (wenn die obige Anweisung nicht wahr ist), dann speichern Sie den Wert in `localStorage` und setzen ihn als Text der Überschrift.

## Fazit

Wenn Sie alle Anweisungen in diesem Artikel befolgt haben, sollten Sie mit einer Seite enden, die etwas wie das unten stehende Bild aussieht. Sie können auch [unsere Version anzeigen](https://mdn.github.io/beginner-html-site-scripted/).

![Endgültiges Aussehen der HTML-Seite nach dem Erstellen von Elementen: ein Header, ein groß zentriertes Logo, Inhalt und eine Taste](website-screen-scripted.png)

Wenn Sie feststecken, können Sie Ihre Arbeit mit unserem [fertigen Beispielcode auf GitHub](https://github.com/mdn/beginner-html-site-scripted/blob/main/scripts/main.js) vergleichen.

Wir haben in diesem Artikel nur an der Oberfläche von JavaScript gekratzt. Sie werden viel mehr in unserem [Dynamisches Skripting mit JavaScript](/de/docs/Learn_web_development/Core/Scripting) Kernmodul später im Kurs lernen.

## Siehe auch

- [Scrimba: Learn JavaScript](https://scrimba.com/learn-javascript-c0v?via=mdn) <sup>[_MDN Lernpartner_](/de/docs/MDN/Writing_guidelines/Learning_content#partner_links_and_embeds)</sup>
  - : [Scrimbas](https://scrimba.com?via=mdn) _Learn JavaScript_-Kurs lehrt Ihnen JavaScript durch das Lösen von über 140 interaktiven Codierherausforderungen, der Erstellung von Projekten, einschließlich eines Spiels, einer Browser-Erweiterung und sogar einer mobilen App. Scrimba bietet unterhaltsame interaktive Lektionen, die von sachkundigen Lehrern unterrichtet werden.
- [Learn JavaScript](https://learnjavascript.online/)
  - : Dies ist eine ausgezeichnete Ressource für angehende Webentwickler! Lernen Sie JavaScript in einer interaktiven Umgebung mit kurzen Lektionen und interaktiven Tests, angeleitet durch eine automatisierte Bewertung. Die ersten 40 Lektionen sind kostenlos. Der vollständige Kurs ist für eine kleine Einmalzahlung erhältlich.

{{PreviousMenuNext("Learn_web_development/Getting_started/Your_first_website/Styling_the_content", "Learn_web_development/Getting_started/Your_first_website/Publishing_your_website", "Learn_web_development/Getting_started/Your_first_website")}}
