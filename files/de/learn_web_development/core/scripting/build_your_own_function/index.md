---
title: Erstellen Sie Ihre eigene Funktion
slug: Learn_web_development/Core/Scripting/Build_your_own_function
l10n:
  sourceCommit: 30cb9ca54d74a63bd95e0e0f5281e9ade578c044
---

{{PreviousMenuNext("Learn_web_development/Core/Scripting/Functions","Learn_web_development/Core/Scripting/Return_values", "Learn_web_development/Core/Scripting")}}

Nach der Behandlung der meisten grundlegenden Theorien im vorherigen Artikel bietet dieser Artikel praktische Erfahrung. Hier erhalten Sie etwas Übung beim Erstellen Ihrer eigenen, benutzerdefinierten Funktion. Dabei werden wir auch einige nützliche Details zum Umgang mit Funktionen erklären.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>Verständnis von <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a> und den <a href="/de/docs/Learn_web_development/Core/Styling_basics">Grundlagen von CSS</a>, Vertrautheit mit den Grundlagen von JavaScript-Funktionen, wie sie in der vorherigen Lektion behandelt wurden.</td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Erfahrung beim Erstellen eigener benutzerdefinierter Funktionen.</li>
          <li>Hinzufügen von Parametern zu Ihren Funktionen.</li>
          <li>Aufrufen Ihrer Funktion.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Bauen wir eine Funktion

Die benutzerdefinierte Funktion, die wir erstellen werden, heißt `displayMessage()`. Sie zeigt ein benutzerdefiniertes Nachrichtenfeld auf einer Webseite an und fungiert als maßgeschneiderter Ersatz für die eingebaute [`alert()`](/de/docs/Web/API/Window/alert)-Funktion eines Browsers. Wir haben dies bereits gesehen, aber lassen Sie uns unser Gedächtnis auffrischen. Geben Sie das Folgende in die JavaScript-Konsole Ihres Browsers auf einer beliebigen Seite ein, die Sie mögen:

```js
alert("This is a message");
```

Die `alert()` Funktion nimmt ein einziges Argument — den String, der im Alarmfenster angezeigt wird. Versuchen Sie, den String zu variieren, um die Nachricht zu ändern.

Die `alert()` Funktion ist begrenzt: Sie können die Nachricht ändern, aber Sie können nicht so leicht etwas anderes variieren, wie die Farbe, das Icon oder irgendetwas anderes. Wir werden eine Funktion bauen, die mehr Spaß macht.

> [!NOTE]
> Dieses Beispiel sollte in allen modernen Browsern gut funktionieren, aber das Styling könnte in etwas älteren Browsern merkwürdig aussehen. Wir empfehlen Ihnen, diese Übung in einem modernen Browser wie Firefox, Opera oder Chrome durchzuführen.

## Die grundlegende Funktion

Zu Beginn setzen wir eine grundlegende Funktion zusammen.

> [!NOTE]
> Bei Funktionsbenennungen sollten Sie denselben Regeln folgen wie bei [Variablenbenennungen](/de/docs/Learn_web_development/Core/Scripting/Variables#an_aside_on_variable_naming_rules). Das ist in Ordnung, da Sie sie auseinanderhalten können — Funktionsnamen erscheinen mit Klammern danach, Variablennamen nicht.

1. Beginnen Sie damit, auf die Datei [function-start.html](https://github.com/mdn/learning-area/blob/main/javascript/building-blocks/functions/function-start.html) zuzugreifen und eine lokale Kopie zu erstellen. Sie werden sehen, dass das HTML einfach ist — der Hauptinhalt besteht nur aus einem einzigen Button. Wir haben auch etwas grundlegendes CSS bereitgestellt, um das benutzerdefinierte Nachrichtenfeld zu stylen, und ein leeres {{htmlelement("script")}}-Element, um unser JavaScript einzufügen.
2. Fügen Sie als nächstes Folgendes innerhalb des `<script>` Elements hinzu:

   ```js
   function displayMessage() {
     // …
   }
   ```

   Wir beginnen mit dem Schlüsselwort `function`, was bedeutet, dass wir eine Funktion definieren. Darauf folgt der Name, den wir unserer Funktion geben möchten, ein Satz Klammern und ein Satz geschweifter Klammern. Alle Parameter, die wir unserer Funktion geben möchten, gehen in die Klammern, und der Code, der ausgeführt wird, wenn wir die Funktion aufrufen, geht in die geschweiften Klammern.

3. Schließlich fügen Sie den folgenden Code in die geschweiften Klammern ein:

   ```js
   const body = document.body;

   const panel = document.createElement("div");
   panel.setAttribute("class", "msgBox");
   body.appendChild(panel);

   const msg = document.createElement("p");
   msg.textContent = "This is a message box";
   panel.appendChild(msg);

   const closeBtn = document.createElement("button");
   closeBtn.textContent = "x";
   panel.appendChild(closeBtn);

   closeBtn.addEventListener("click", () => body.removeChild(panel));
   ```

Das ist eine Menge Code, den wir durchgehen müssen, also werden wir es Stück für Stück durchgehen.

Der erste Codeabschnitt wählt das {{htmlelement("body")}} Element aus, indem wir die [DOM-API](/de/docs/Web/API/Document_Object_Model) nutzen, um die [`body`](/de/docs/Web/API/Document/body) Eigenschaft des globalen [`document`](/de/docs/Web/API/Document/body) Objekts zu erhalten und sie einer Konstante namens `body` zuzuweisen, damit wir später etwas damit machen können:

```js
const body = document.body;
```

Der nächste Abschnitt verwendet eine DOM-API-Funktion namens [`document.createElement()`](/de/docs/Web/API/Document/createElement), um ein {{htmlelement("div")}}-Element zu erstellen und einen Verweis darauf in einer Konstante namens `panel` zu speichern. Dieses Element wird der äußere Container unseres Nachrichtenfelds sein.

Wir verwenden dann eine andere DOM-API-Funktion namens [`Element.setAttribute()`](/de/docs/Web/API/Element/setAttribute), um ein `class`-Attribut auf unserem Panel mit einem Wert von `msgBox` zu setzen. Dies dient dazu, das Styling des Elements zu erleichtern — wenn Sie das CSS auf der Seite betrachten, werden Sie sehen, dass wir einen `.msgBox`-Klassenselektor verwenden, um das Nachrichtenfeld und dessen Inhalt zu stylen.

Schließlich rufen wir eine DOM-Funktion namens [`Node.appendChild()`](/de/docs/Web/API/Node/appendChild) auf der zuvor gespeicherten `body`-Konstanten auf, was ein Element in ein anderes als dessen Kind verschachtelt. Wir geben das Panel `<div>` als das Kind an, das wir innerhalb des `<body>` Elements anhängen möchten. Wir müssen dies tun, da das erstellte Element nicht einfach von alleine auf der Seite erscheint — wir müssen angeben, wo wir es platzieren möchten.

```js
const panel = document.createElement("div");
panel.setAttribute("class", "msgBox");
body.appendChild(panel);
```

Die nächsten beiden Abschnitte verwenden die gleichen `createElement()`- und `appendChild()`-Funktionen, die wir bereits gesehen haben, um zwei neue Elemente zu erstellen — ein {{htmlelement("p")}} und ein {{htmlelement("button")}} — und sie als Kinder des Panel-`<div>` auf der Seite einzufügen. Wir nutzen deren [`Node.textContent`](/de/docs/Web/API/Node/textContent)-Eigenschaft — die den Textinhalt eines Elements repräsentiert — um eine Nachricht in den Absatz einzufügen und ein "x" in den Button. Dieser Button wird das Element sein, das angeklickt oder aktiviert werden muss, wenn der Benutzer das Nachrichtenfeld schließen möchte.

```js
const msg = document.createElement("p");
msg.textContent = "This is a message box";
panel.appendChild(msg);

const closeBtn = document.createElement("button");
closeBtn.textContent = "x";
panel.appendChild(closeBtn);
```

Schließlich rufen wir [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) auf, um eine Funktion hinzuzufügen, die aufgerufen wird, wenn der Benutzer den "Schließen"-Button klickt. Der Code wird das gesamte Panel von der Seite löschen — um das Nachrichtenfeld zu schließen.

Kurz gesagt, die `addEventListener()` Methode kann auf jedem Element der Seite aufgerufen werden und erhält in der Regel zwei Argumente: den Namen eines Ereignisses und eine Funktion, die ausgeführt werden soll, wenn das Ereignis eintritt. In diesem Fall ist der Ereignisname `click`, was bedeutet, dass wenn der Benutzer auf den Button klickt, die Funktion ausgeführt wird. Sie werden viel mehr über Ereignisse in unserem [Artikel über Ereignisse](/de/docs/Learn_web_development/Core/Scripting/Events) lernen. Die Zeile innerhalb der Funktion verwendet die [`removeChild()`](/de/docs/Web/API/Node/removeChild)-Methode, um anzugeben, dass wir ein bestimmtes Kindelement des `<body>` Elements entfernen möchten: in diesem Fall das Panel `<div>`.

```js
closeBtn.addEventListener("click", () => body.removeChild(panel));
```

Im Wesentlichen generiert dieser gesamte Codeblock einen HTML-Block, der so aussieht, und fügt ihn in die Seite ein:

```html
<div class="msgBox">
  <p>This is a message box</p>
  <button>x</button>
</div>
```

Das war eine Menge Code, den man durcharbeiten musste — machen Sie sich keine Sorgen, wenn Sie sich jetzt nicht genau merken können, wie jeder Teil davon funktioniert! Der Hauptteil, auf den wir uns hier konzentrieren möchten, ist die Struktur und Verwendung der Funktion, aber wir wollten etwas Interessantes für dieses Beispiel zeigen.

## Aufruf der Funktion

Sie haben nun Ihre Funktionsdefinition gut in Ihr `<script>`-Element geschrieben, aber sie wird nichts tun, so wie es ist.

1. Versuchen Sie, die folgende Zeile unterhalb Ihrer Funktion einzufügen, um sie aufzurufen:

   ```js
   displayMessage();
   ```

   Diese Zeile ruft die Funktion auf und lässt sie sofort ausführen. Wenn Sie Ihren Code speichern und ihn im Browser neu laden, sehen Sie das kleine Nachrichtenfeld sofort erscheinen, nur einmal. Schließlich rufen wir es nur einmal auf.

2. Öffnen Sie nun Ihre Browser-Entwicklertools auf der Beispielseite, gehen Sie zur JavaScript-Konsole und geben Sie die Zeile dort erneut ein, Sie werden sehen, dass sie erneut erscheint! Das macht Spaß – wir haben jetzt eine wiederverwendbare Funktion, die wir jederzeit aufrufen können.

Allerdings möchten wir wahrscheinlich, dass das Nachrichtenfeld als Reaktion auf Benutzer- und Systemaktionen angezeigt wird. In einer echten Anwendung würde ein solches Nachrichtenfeld wahrscheinlich als Reaktion auf neue Daten, die verfügbar werden, oder einen aufgetretenen Fehler, oder der Benutzer, der versucht, sein Profil zu löschen ("Sind Sie sicher?"), oder der Benutzer, der einen neuen Kontakt hinzufügt und die Operation erfolgreich abgeschlossen ist, aufgerufen werden.

In dieser Demo werden wir das Nachrichtenfeld erscheinen lassen, wenn der Benutzer den Button klickt.
Folgen Sie diesen Schritten, um dies zum Laufen zu bringen:

1. Löschen Sie die vorher hinzugefügte Zeile (`displayMessage();`).
2. Wählen Sie das `<button>`-Element aus und speichern Sie einen Verweis darauf in einer Konstante. Fügen Sie folgende Zeile zu Ihrem Code über der Funktionsdefinition hinzu:

   ```js
   const btn = document.querySelector("button");
   ```

3. Erstellen Sie einen Ereignislistener für Buttonklicks, der unsere Funktion aufruft. Fügen Sie folgende Zeile nach der `const btn =` ein:

   ```js
   btn.addEventListener("click", displayMessage);
   ```

   Ähnlich wie bei unserem click-Ereignishandler des closeBtn rufen wir hier einen Code als Reaktion auf einen geklickten Button auf. In diesem Fall rufen wir jedoch keine anonyme Funktion auf, die Code enthält, sondern unsere `displayMessage()` Funktion namentlich.

4. Speichern und aktualisieren Sie die Seite — jetzt sollten Sie sehen, dass das Nachrichtenfeld erscheint, wenn Sie auf den Button klicken.

Sie fragen sich möglicherweise, warum wir die Klammern hinter dem Funktionsnamen nicht hinzugefügt haben. Das liegt daran, dass wir die Funktion nicht sofort aufrufen möchten — nur, nachdem der Button geklickt wurde. Wenn Sie versuchen, die Zeile zu ändern in

```js example-bad
btn.addEventListener("click", displayMessage());
```

und speichern und erneut laden, werden Sie sehen, dass das Nachrichtenfeld erscheint, ohne dass der Button geklickt wird! Die Klammern in diesem Kontext werden manchmal als "Funktionsaufrufoperator" bezeichnet. Sie verwenden sie nur, wenn Sie die Funktion sofort im aktuellen Bereich ausführen möchten. In derselben Hinsicht wird der Code innerhalb der anonymen Funktion nicht sofort ausgeführt, da er sich im Funktionsbereich befindet.

Wenn Sie das letzte Experiment versucht haben, stellen Sie sicher, dass Sie die letzte Änderung rückgängig machen, bevor Sie weitermachen.

> [!NOTE]
> Für mehr Übungen mit Funktionen schauen Sie sich die Scrimba<sup>[_MDN learning partner_](/de/docs/MDN/Writing_guidelines/Learning_content#partner_links_and_embeds)</sup> Challenge [Write your first function](https://scrimba.com/fullstack-path-c0fullstack/~04h?via=mdn) an.

## Verbesserung der Funktion mit Parametern

Die Funktion ist derzeit noch nicht sehr nützlich — wir möchten nicht einfach jedes Mal dieselbe Standardnachricht anzeigen. Lassen Sie uns unsere Funktion verbessern, indem wir einige Parameter hinzufügen, die es uns ermöglichen, sie mit unterschiedlichen Optionen aufzurufen.

1. Aktualisieren Sie zunächst die erste Zeile der Funktion:

   ```js
   function displayMessage() {
   ```

   auf:

   ```js
   function displayMessage(msgText, msgType) {
   ```

   Jetzt können wir beim Aufruf der Funktion zwei Variable Werte in den Klammern angeben, um die Nachricht festzulegen, die im Nachrichtenfeld angezeigt werden soll, und den Typ der Nachricht.

2. Um den ersten Parameter zu nutzen, aktualisieren Sie die folgende Zeile innerhalb Ihrer Funktion:

   ```js
   msg.textContent = "This is a message box";
   ```

   auf:

   ```js
   msg.textContent = msgText;
   ```

3. Zu guter Letzt müssen Sie nun Ihren Funktionsaufruf aktualisieren, um einige aktualisierte Nachrichtentexte einzuschließen. Ändern Sie die folgende Zeile:

   ```js
   btn.addEventListener("click", displayMessage);
   ```

   zu diesem Block:

   ```js
   btn.addEventListener("click", () =>
     displayMessage("Woo, this is a different message!"),
   );
   ```

   Wenn wir Parameter in Klammern für die Funktion angeben wollen, die wir aufrufen, dann können wir sie nicht direkt aufrufen — wir müssen sie in eine anonyme Funktion setzen, damit sie sich nicht im unmittelbaren Gültigkeitsbereich befindet und daher nicht sofort aufgerufen wird. Jetzt wird sie erst aufgerufen, wenn der Button geklickt wird.

4. Laden Sie den Code erneut und versuchen Sie es — Sie werden sehen, dass es immer noch einwandfrei funktioniert, nur dass Sie jetzt die Nachricht innerhalb des Parameters variieren können, um unterschiedliche Nachrichten im Feld anzuzeigen!

### Ein komplexerer Parameter

Nun zum nächsten Parameter. Dieser wird etwas mehr Arbeit erfordern — wir werden ihn so einstellen, dass je nachdem, was der `msgType` Parameter festgelegt wird, die Funktion ein anderes Symbol und eine andere Hintergrundfarbe anzeigt.

1. Laden Sie zuerst die für diese Übung benötigten Symbole ([warning](https://github.com/mdn/learning-area/blob/main/javascript/building-blocks/functions/icons/warning.png) und [chat](https://github.com/mdn/learning-area/blob/main/javascript/building-blocks/functions/icons/chat.png)) von GitHub herunter. Speichern Sie sie in einem neuen Ordner namens `icons` am selben Speicherort wie Ihre HTML-Datei.

   > [!NOTE]
   > Die Warning- und Chat-Icons wurden ursprünglich auf iconfinder.com gefunden und von Nazarrudin Ansyari entworfen — Danke! (Die tatsächlichen Icon-Seiten wurden inzwischen verschoben oder entfernt.)

2. Finden Sie als nächstes das CSS in Ihrer HTML-Datei. Wir werden ein paar Änderungen vornehmen, um Platz für die Icons zu schaffen. Aktualisieren Sie zunächst die `.msgBox` Breite von:

   ```css
   width: 200px;
   ```

   auf:

   ```css
   width: 242px;
   ```

3. Fügen Sie als nächstes die folgenden Zeilen in die `.msgBox p { }` Regel ein:

   ```css
   padding-left: 82px;
   background-position: 25px center;
   background-repeat: no-repeat;
   ```

4. Nun müssen wir Code in unserer `displayMessage()` Funktion hinzufügen, um die Icons anzuzeigen. Fügen Sie folgenden Block kurz vor der schließenden geschweiften Klammer (`}`) Ihrer Funktion hinzu:

   ```js
   if (msgType === "warning") {
     msg.style.backgroundImage = 'url("icons/warning.png")';
     panel.style.backgroundColor = "red";
   } else if (msgType === "chat") {
     msg.style.backgroundImage = 'url("icons/chat.png")';
     panel.style.backgroundColor = "aqua";
   } else {
     msg.style.paddingLeft = "20px";
   }
   ```

   Hier wird, wenn der `msgType` Parameter auf `"warning"` gesetzt ist, das Warning-Icon angezeigt und die Hintergrundfarbe des Panels auf Rot gesetzt. Wenn er auf `"chat"` gesetzt ist, wird das Chat-Icon angezeigt und die Hintergrundfarbe des Panels auf Aqua-Blau gesetzt. Wenn der `msgType` Parameter überhaupt nicht (oder auf etwas anderes) gesetzt ist, greift der `else { }` Teil des Codes und der Absatz erhält einen Standard-Padding und kein Icon, mit keinem Hintergrundpanel, das entweder gesetzt ist. Dies bietet einen Standardzustand, wenn kein `msgType` Parameter angegeben ist, was bedeutet, dass es ein optionaler Parameter ist!

5. Testen Sie unsere aktualisierte Funktion, versuchen Sie den `displayMessage()` Aufruf von diesem zu aktualisieren:

   ```js
   displayMessage("Woo, this is a different message!");
   ```

   zu einem von diesen:

   ```js
   displayMessage("Your inbox is almost full — delete some mails", "warning");
   displayMessage("Brian: Hi there, how are you today?", "chat");
   ```

   Sie können sehen, wie nützlich unsere (jetzt nicht mehr so) kleine Funktion wird.

> [!NOTE]
> Wenn Sie Probleme haben, das Beispiel zum Arbeiten zu bringen, können Sie Ihren Code gerne mit der [fertigen Version auf GitHub](https://github.com/mdn/learning-area/blob/main/javascript/building-blocks/functions/function-stage-4.html) vergleichen ([sehen Sie es live](https://mdn.github.io/learning-area/javascript/building-blocks/functions/function-stage-4.html) auch), oder uns um Hilfe bitten.

## Zusammenfassung

Herzlichen Glückwunsch zum Erreichen des Endes! Dieser Artikel hat Sie durch den gesamten Prozess geführt, eine praktische benutzerdefinierte Funktion zu erstellen, die mit ein wenig mehr Arbeit in ein echtes Projekt transplantiert werden könnte. Im nächsten Artikel werden wir Funktionen abschließen, indem wir ein weiteres essentielles verwandtes Konzept erklären — Rückgabewerte.

{{PreviousMenuNext("Learn_web_development/Core/Scripting/Functions","Learn_web_development/Core/Scripting/Return_values", "Learn_web_development/Core/Scripting")}}
