---
title: Erstellen Sie Ihre eigene Funktion
slug: Learn_web_development/Core/Scripting/Build_your_own_function
l10n:
  sourceCommit: 5310a5bff0e1f3e2dfafa44bc2aadbb39e1c4673
---

{{PreviousMenuNext("Learn_web_development/Core/Scripting/Functions","Learn_web_development/Core/Scripting/Return_values", "Learn_web_development/Core/Scripting")}}

Mit den meisten der grundlegenden Theorien, die im vorherigen Artikel behandelt wurden, bietet dieser Artikel praktische Erfahrungen. Hier erhalten Sie einige Übungen zum Erstellen Ihrer eigenen, benutzerdefinierten Funktion. Unterwegs erklären wir auch einige nützliche Details im Umgang mit Funktionen.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>Ein Verständnis von <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a> und den <a href="/de/docs/Learn_web_development/Core/Styling_basics">Grundlagen von CSS</a>, Vertrautheit mit den Grundlagen von JavaScript-Funktionen, wie sie in der vorherigen Lektion behandelt wurden.</td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Erfahrung im Erstellen eigener benutzerdefinierter Funktionen.</li>
          <li>Hinzufügen von Parametern zu Ihren Funktionen.</li>
          <li>Aufruf Ihrer Funktion.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Lassen Sie uns eine Funktion erstellen

Die benutzerdefinierte Funktion, die wir erstellen werden, heißt `displayMessage()`. Sie wird ein benutzerdefiniertes Nachrichtenfeld auf einer Webseite anzeigen und als maßgeschneiderter Ersatz für die im Browser integrierte [`alert()`](/de/docs/Web/API/Window/alert)-Funktion fungieren. Wir haben das schon einmal gesehen, aber lassen Sie uns unser Gedächtnis auffrischen. Geben Sie Folgendes in die JavaScript-Konsole Ihres Browsers ein, auf jeder gewünschten Seite:

```js
alert("This is a message");
```

Die `alert()`-Funktion nimmt ein einzelnes Argument — die Zeichenkette, die im Warnungsfeld angezeigt wird. Versuchen Sie, die Zeichenkette zu variieren, um die Nachricht zu ändern.

Die `alert()`-Funktion ist begrenzt: Sie können die Nachricht ändern, aber Sie können nichts anderes leicht variieren, wie z.B. die Farbe, das Symbol oder anderes. Wir werden eine bauen, die mehr Spaß macht.

> [!NOTE]
> Dieses Beispiel sollte in allen modernen Browsern gut funktionieren, aber das Styling könnte in etwas älteren Browsern ein wenig komisch aussehen. Wir empfehlen Ihnen, diese Übung in einem modernen Browser wie Firefox, Opera oder Chrome zu machen.

## Die grundlegende Funktion

Zu Beginn erstellen wir eine grundlegende Funktion.

> [!NOTE]
> Für Namenskonventionen von Funktionen sollten Sie die gleichen Regeln wie für [Variablennamenkonventionen](/de/docs/Learn_web_development/Core/Scripting/Variables#an_aside_on_variable_naming_rules) befolgen. Das ist in Ordnung, da Sie sie auseinanderhalten können — Funktionsnamen erscheinen mit Klammern dahinter, Variablen nicht.

1. Beginnen Sie damit, die [function-start.html](https://github.com/mdn/learning-area/blob/main/javascript/building-blocks/functions/function-start.html)-Datei aufzurufen und eine lokale Kopie zu erstellen. Sie werden feststellen, dass das HTML einfach ist — der Body enthält nur einen einzigen Button. Wir haben auch einige grundlegende CSS bereitgestellt, um das benutzerdefinierte Nachrichtenfeld zu stylen und ein leeres {{htmlelement("script")}}-Element, um unser JavaScript einzufügen.
2. Fügen Sie als Nächstes Folgendes in das `<script>`-Element ein:

   ```js
   function displayMessage() {
     // …
   }
   ```

   Wir beginnen mit dem Schlüsselwort `function`, was bedeutet, dass wir eine Funktion definieren. Darauf folgt der Name, den wir unserer Funktion geben möchten, ein Satz Klammern und ein Satz geschweifte Klammern. Alle Parameter, die wir unserer Funktion geben möchten, gehen in die Klammern, und der Code, der ausgeführt wird, wenn wir die Funktion aufrufen, geht in die geschweiften Klammern.

3. Fügen Sie schließlich den folgenden Code in die geschweiften Klammern ein:

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

Das ist ziemlich viel Code, den wir durchgehen müssen, also werden wir Sie Stück für Stück durchgehen.

Die erste Zeile wählt das {{htmlelement("body")}}-Element aus, indem die [DOM API](/de/docs/Web/API/Document_Object_Model) verwendet wird, um die [`body`](/de/docs/Web/API/Document/body)-Eigenschaft des globalen [`document`](/de/docs/Web/API/Document/body)-Objekts zu erhalten und sie einer Konstante namens `body` zuzuweisen, damit wir später damit arbeiten können:

```js
const body = document.body;
```

Der nächste Abschnitt verwendet eine DOM-API-Funktion namens [`document.createElement()`](/de/docs/Web/API/Document/createElement), um ein {{htmlelement("div")}}-Element zu erstellen und eine Referenz darauf in einer Konstante namens `panel` zu speichern. Dieses Element wird der äußere Container unseres Nachrichtenfelds sein.

Dann verwenden wir eine weitere DOM-API-Funktion namens [`Element.setAttribute()`](/de/docs/Web/API/Element/setAttribute), um ein `class`-Attribut auf unserem Panel mit einem Wert von `msgBox` zu setzen. Dies erleichtert das Stylen des Elements — wenn Sie sich das CSS auf der Seite ansehen, werden Sie sehen, dass wir einen `.msgBox`-Klassenselektor verwenden, um das Nachrichtenfeld und seinen Inhalt zu stylen.

Schließlich rufen wir eine DOM-Funktion namens [`Node.appendChild()`](/de/docs/Web/API/Node/appendChild) auf der vorher gespeicherten `body`-Konstanten auf, die ein Element als Kind eines anderen verschachtelt. Wir geben das Panel-`<div>` als das Kind an, das wir in das `<body>`-Element einfügen möchten. Wir müssen dies tun, da das erstellte Element nicht von selbst auf der Seite erscheint — wir müssen angeben, wo es platziert werden soll.

```js
const panel = document.createElement("div");
panel.setAttribute("class", "msgBox");
body.appendChild(panel);
```

Die nächsten beiden Abschnitte nutzen die gleichen `createElement()`- und `appendChild()`-Funktionen, die wir bereits gesehen haben, um zwei neue Elemente zu erstellen — ein {{htmlelement("p")}} und ein {{htmlelement("button")}} — und sie als Kinder des Panels `<div>` in die Seite einzufügen. Wir verwenden ihre [`Node.textContent`](/de/docs/Web/API/Node/textContent)-Eigenschaft — die den Textinhalt eines Elements darstellt — um eine Nachricht in den Paragraphen einzufügen und ein "x" in den Button. Dieser Button muss geklickt/aktiviert werden, wenn der Benutzer das Nachrichtenfeld schließen möchte.

```js
const msg = document.createElement("p");
msg.textContent = "This is a message box";
panel.appendChild(msg);

const closeBtn = document.createElement("button");
closeBtn.textContent = "x";
panel.appendChild(closeBtn);
```

Schließlich rufen wir [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) auf, um eine Funktion hinzuzufügen, die aufgerufen wird, wenn der Benutzer den "Schließen"-Button klickt. Der Code wird das ganze Panel von der Seite löschen — um das Nachrichtenfeld zu schließen.

Kurz gesagt, die `addEventListener()`-Methode kann auf jedem Element der Seite aufgerufen werden und enthält normalerweise zwei Argumente: den Namen eines Ereignisses und eine Funktion, die läuft, wenn das Ereignis eintritt. In diesem Fall ist der Ereignisname `click`, was bedeutet, dass wenn der Benutzer den Button klickt, die Funktion ausgeführt wird. Sie werden viel mehr über Ereignisse in unserem [Artikel über Ereignisse](/de/docs/Learn_web_development/Core/Scripting/Events) lernen. Die Zeile innerhalb der Funktion verwendet die [`removeChild()`](/de/docs/Web/API/Node/removeChild)-Methode, um anzugeben, dass wir ein bestimmtes Kindelement des `<body>`-Elements entfernen möchten: In diesem Fall das Panel `<div>`.

```js
closeBtn.addEventListener("click", () => body.removeChild(panel));
```

Grundsätzlich generiert dieser gesamte Codeblock einen HTML-Block, der so aussieht, und fügt ihn in die Seite ein:

```html
<div class="msgBox">
  <p>This is a message box</p>
  <button>x</button>
</div>
```

Das war eine Menge Code, den wir durcharbeiten mussten — machen Sie sich keine Sorgen, wenn Sie sich nicht genau merken, wie jeder Teil davon jetzt funktioniert! Der Hauptteil, auf den wir uns hier konzentrieren wollen, ist die Struktur und Verwendung der Funktion, aber wir wollten für dieses Beispiel etwas Interessantes zeigen.

## Die Funktion aufrufen

Sie haben jetzt Ihre Funktionsdefinition in Ihr `<script>`-Element geschrieben, aber sie wird so, wie sie ist, nichts tun.

1. Versuchen Sie, die folgende Zeile unterhalb Ihrer Funktion einzufügen, um sie aufzurufen:

   ```js
   displayMessage();
   ```

   Diese Zeile ruft die Funktion auf und führt sie sofort aus. Wenn Sie Ihren Code speichern und im Browser neu laden, wird das kleine Nachrichtenfeld sofort erscheinen, jedoch nur einmal. Schließlich rufen wir es nur einmal auf.

2. Öffnen Sie nun die Entwicklerwerkzeuge Ihres Browsers auf der Beispielseite, gehen Sie zur JavaScript-Konsole und geben Sie die Zeile dort erneut ein, und Sie werden es erneut erscheinen sehen! Das macht Spaß — wir haben jetzt eine wiederverwendbare Funktion, die wir jederzeit aufrufen können.

Allerdings möchten wir wahrscheinlich, dass das Nachrichtenfeld als Antwort auf Benutzer- und Systemaktionen erscheint. In einer realen Anwendung würde ein solches Nachrichtenfeld wahrscheinlich als Antwort auf neue verfügbare Daten, ein aufgetretenes Fehler oder wenn der Benutzer versucht, sein Profil zu löschen ("Sind Sie sicher?") oder wenn der Benutzer einen neuen Kontakt hinzufügt und der Vorgang erfolgreich abgeschlossen wurde, aufgerufen werden.

In diesem Demo-Beispiel lassen wir das Nachrichtenfeld erscheinen, wenn der Benutzer den Button klickt. So gehen Sie vor:

1. Löschen Sie die zuvor hinzugefügte Zeile (`displayMessage();`).
2. Wählen Sie das `<button>`-Element und speichern Sie eine Referenz darauf in einer Konstanten. Fügen Sie die folgende Zeile in Ihren Code über der Funktionsdefinition ein:

   ```js
   const btn = document.querySelector("button");
   ```

3. Erstellen Sie einen Ereignis-Listener für Button-Klicks, der unsere Funktion aufruft. Fügen Sie die folgende Zeile nach der Zeile `const btn =` ein:

   ```js
   btn.addEventListener("click", displayMessage);
   ```

   Ähnlich wie bei unserem `click`-Ereignis-Handler für closeBtn rufen wir hier einen Code als Antwort auf einen Klick auf den Button auf. Aber in diesem Fall rufen wir statt einer anonymen Funktion mit einigem Code unsere `displayMessage()`-Funktion beim Namen auf.

4. Versuchen Sie schließlich, die Seite zu speichern und zu aktualisieren — jetzt sollten Sie das Nachrichtenfeld sehen, wenn Sie auf den Button klicken.

Sie fragen sich vielleicht, warum wir die Klammern nach dem Funktionsnamen nicht eingeschlossen haben. Das liegt daran, dass wir die Funktion nicht sofort aufrufen möchten — nur nachdem der Button geklickt wurde. Wenn Sie versuchen, die Zeile zu ändern in:

```js example-bad
btn.addEventListener("click", displayMessage());
```

und speichern und neu laden, werden Sie sehen, dass das Nachrichtenfeld erscheint, ohne dass der Button geklickt wird! Die Klammern in diesem Kontext werden manchmal als "Funktionsaufrufoperator" bezeichnet. Sie verwenden sie nur, wenn Sie die Funktion sofort im aktuellen Bereich ausführen möchten. In gleicher Hinsicht wird der Code innerhalb der anonymen Funktion nicht sofort ausgeführt, da er sich im Funktionsbereich befindet.

Wenn Sie das letzte Experiment ausprobiert haben, stellen Sie sicher, dass Sie die letzte Änderung rückgängig machen, bevor Sie weiterfahren.

## Verbesserung der Funktion mit Parametern

Wie es jetzt ist, ist die Funktion immer noch nicht sehr nützlich — wir wollen nicht jedes Mal die gleiche Standardnachricht anzeigen. Lassen Sie uns unsere Funktion verbessern, indem wir einige Parameter hinzufügen, sodass wir sie mit einigen unterschiedlichen Optionen aufrufen können.

1. Aktualisieren Sie zuerst die erste Zeile der Funktion:

   ```js
   function displayMessage() {
   ```

   zu diesem:

   ```js
   function displayMessage(msgText, msgType) {
   ```

   Wenn wir die Funktion aufrufen, können wir jetzt zwei Variable-Werte innerhalb der Klammern angeben, um die Nachricht anzugeben, die im Nachrichtenfeld angezeigt werden soll, und den Typ der Nachricht.

2. Um den ersten Parameter zu verwenden, aktualisieren Sie die folgende Zeile innerhalb Ihrer Funktion:

   ```js
   msg.textContent = "This is a message box";
   ```

   zu

   ```js
   msg.textContent = msgText;
   ```

3. Zu guter Letzt müssen Sie nun Ihren Funktionsaufruf aktualisieren, um einen aktualisierten Nachrichtentext einzuschließen. Ändern Sie die folgende Zeile:

   ```js
   btn.addEventListener("click", displayMessage);
   ```

   zu diesem Block:

   ```js
   btn.addEventListener("click", () =>
     displayMessage("Woo, this is a different message!"),
   );
   ```

   Wenn wir Parameter in Klammern für die Funktion angeben möchten, die wir aufrufen, dann können wir sie nicht direkt aufrufen — wir müssen sie in eine anonyme Funktion einfügen, damit sie sich nicht im unmittelbaren Bereich befindet und daher nicht sofort aufgerufen wird. Jetzt wird sie erst aufgerufen, wenn der Button geklickt wird.

4. Laden Sie den Code erneut und probieren Sie ihn aus, und Sie werden sehen, dass er immer noch einwandfrei funktioniert, außer dass Sie jetzt auch die Nachricht innerhalb des Parameters variieren können, um unterschiedliche Nachrichten im Feld anzeigen zu lassen!

### Ein komplexerer Parameter

Weiter zum nächsten Parameter. Dieser wird etwas mehr Arbeit erfordern — wir werden ihn so einstellen, dass die Funktion je nach dem, auf welchen Wert der `msgType`-Parameter gesetzt ist, ein anderes Symbol und eine andere Hintergrundfarbe anzeigt.

1. Laden Sie zuerst die für diese Übung benötigten Icons herunter ([warning](https://github.com/mdn/learning-area/blob/main/javascript/building-blocks/functions/icons/warning.png) und [chat](https://github.com/mdn/learning-area/blob/main/javascript/building-blocks/functions/icons/chat.png)) von GitHub. Speichern Sie sie in einem neuen Ordner namens `icons` am gleichen Ort wie Ihre HTML-Datei.

   > [!NOTE]
   > Die Warn- und Chat-Symbole wurden ursprünglich auf iconfinder.com gefunden und von Nazarrudin Ansyari entworfen — Danke! (Die tatsächlichen Icon-Seiten wurden seitdem verschoben oder entfernt.)

2. Suchen Sie als Nächstes im CSS innerhalb Ihrer HTML-Datei. Wir werden einige Änderungen vornehmen, um Platz für die Icons zu schaffen. Aktualisieren Sie zuerst die Breite von `.msgBox` von:

   ```css
   width: 200px;
   ```

   zu

   ```css
   width: 242px;
   ```

3. Fügen Sie als Nächstes die folgenden Zeilen in die Regel `.msgBox p { }` ein:

   ```css
   padding-left: 82px;
   background-position: 25px center;
   background-repeat: no-repeat;
   ```

4. Jetzt müssen wir Code zu unserer `displayMessage()`-Funktion hinzufügen, um die Icons anzuzeigen. Fügen Sie den folgenden Block über der schließenden geschweiften Klammer (`}`) Ihrer Funktion hinzu:

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

   Hier wird, wenn der `msgType`-Parameter auf `"warning"` gesetzt ist, das Warn-Symbol angezeigt und die Hintergrundfarbe des Panels wird auf Rot gesetzt. Wenn er auf `"chat"` gesetzt ist, wird das Chat-Symbol angezeigt und die Hintergrundfarbe des Panels wird auf Aqua-Blau gesetzt. Wenn der `msgType`-Parameter überhaupt nicht (oder auf etwas anderes) gesetzt ist, tritt der `else { }`-Teil des Codes in Kraft, und der Paragraph erhält eine Standardauffüllung und kein Symbol, wobei auch keine Hintergrundfarbe für das Panel festgelegt wird. Dies bietet einen Standardzustand, wenn kein `msgType`-Parameter bereitgestellt wird, was bedeutet, dass es ein optionaler Parameter ist!

5. Lassen Sie uns unsere aktualisierte Funktion testen, versuchen Sie, den `displayMessage()`-Aufruf von diesem:

   ```js
   displayMessage("Woo, this is a different message!");
   ```

   zu einem dieser:

   ```js
   displayMessage("Your inbox is almost full — delete some mails", "warning");
   displayMessage("Brian: Hi there, how are you today?", "chat");
   ```

   Sie können sehen, wie nützlich unsere (nun nicht mehr so) kleine Funktion wird.

> [!NOTE]
> Wenn Sie Schwierigkeiten haben, das Beispiel zum Laufen zu bringen, fühlen Sie sich frei, Ihren Code mit der [fertigen Version auf GitHub](https://github.com/mdn/learning-area/blob/main/javascript/building-blocks/functions/function-stage-4.html) zu vergleichen ([sehen Sie es auch live laufen](https://mdn.github.io/learning-area/javascript/building-blocks/functions/function-stage-4.html)), oder fragen Sie uns um Hilfe.

## Zusammenfassung

Glückwunsch zum Erreichen des Endes! Dieser Artikel hat Sie durch den gesamten Prozess geführt, eine praktische benutzerdefinierte Funktion zu erstellen, die mit ein wenig mehr Arbeit in ein reales Projekt eingebaut werden könnte. Im nächsten Artikel werden wir Funktionen abschließen, indem wir ein weiteres wesentliches verwandtes Konzept — Rückgabewerte — erläutern.

{{PreviousMenuNext("Learn_web_development/Core/Scripting/Functions","Learn_web_development/Core/Scripting/Return_values", "Learn_web_development/Core/Scripting")}}
