---
title: Erstellen Sie Ihre eigene Funktion
slug: Learn_web_development/Core/Scripting/Build_your_own_function
l10n:
  sourceCommit: 6149deb5f4beccdc09549fbf8d1810d9a4dc3462
---

{{PreviousMenuNext("Learn_web_development/Core/Scripting/Functions", "Learn_web_development/Core/Scripting/Return_values", "Learn_web_development/Core/Scripting")}}

Nachdem im vorherigen Artikel die meisten wesentlichen Theorien behandelt wurden, bietet dieser Artikel praktische Erfahrungen. Hier erhalten Sie Übung darin, Ihre eigene, benutzerdefinierte Funktion zu erstellen. Dabei erklären wir auch einige nützliche Details zum Umgang mit Funktionen.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>Ein Verständnis von <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a> und den <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS-Grundlagen</a> sowie Vertrautheit mit den JavaScript-Funktionsgrundlagen, die in der vorherigen Lektion behandelt wurden.</td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Erfahrung im Erstellen eigener benutzerdefinierter Funktionen.</li>
          <li>Hinzufügen von Parametern zu Ihren Funktionen.</li>
          <li>Aufrufen Ihrer Funktion.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Erstellen wir eine Funktion

Die benutzerdefinierte Funktion, die wir erstellen werden, heißt `displayMessage()`. Sie wird eine benutzerdefinierte Nachrichtenbox auf einer Webseite anzeigen und als angepasstes Ersatz für die eingebaute [`alert()`](/de/docs/Web/API/Window/alert)-Funktion eines Browsers dienen. Wir haben dies bereits gesehen, aber lassen Sie uns unser Gedächtnis auffrischen. Geben Sie das Folgende in die JavaScript-Konsole Ihres Browsers ein, auf jeder Seite, die Sie mögen:

```js
alert("This is a message");
```

Die `alert()`-Funktion nimmt ein einziges Argument — den String, der im Alarmfenster angezeigt wird. Versuchen Sie, den String zu variieren, um die Nachricht zu ändern.

Die `alert()`-Funktion ist eingeschränkt: Sie können die Nachricht ändern, aber nicht einfach andere Dinge wie die Farbe, das Icon oder etwas anderes variieren. Wir erstellen eine Funktion, die mehr Spaß macht.

> [!NOTE]
> Dieses Beispiel sollte in allen modernen Browsern gut funktionieren, aber das Styling könnte in etwas älteren Browsern etwas seltsam aussehen. Wir empfehlen Ihnen, diese Übung in einem modernen Browser wie Firefox, Opera oder Chrome durchzuführen.

## Die grundlegende Funktion

Zu Beginn setzen wir eine grundlegende Funktion zusammen.

> [!NOTE]
> Für Funktionsbenennungskonventionen sollten Sie denselben Regeln folgen wie den [Variablenbenennungskonventionen](/de/docs/Learn_web_development/Core/Scripting/Variables#an_aside_on_variable_naming_rules). Dies ist in Ordnung, da Sie sie auseinanderhalten können — Funktionsnamen erscheinen mit Klammern nach ihnen, Variablen jedoch nicht.

1. Beginnen Sie indem Sie die Datei [function-start.html](https://github.com/mdn/learning-area/blob/main/javascript/building-blocks/functions/function-start.html) aufrufen und eine lokale Kopie erstellen. Die HTML-Datei ist einfach — der Body enthält nur einen einzigen Button. Außerdem haben wir einige grundlegende CSS bereitgestellt, um die benutzerdefinierte Nachrichtenbox zu gestalten, und ein leeres {{htmlelement("script")}}-Element, um unser JavaScript einzufügen.
2. Fügen Sie als nächstes Folgendes in das `<script>`-Element ein:

   ```js
   function displayMessage() {
     // …
   }
   ```

   Wir beginnen mit dem Schlüsselwort `function`, das bedeutet, dass wir eine Funktion definieren. Darauf folgt der Name, den wir unserer Funktion geben möchten, ein Satz von Klammern und ein Satz von geschweiften Klammern. Alle Parameter, die wir unserer Funktion geben möchten, kommen in die Klammern, und der Code, der ausgeführt wird, wenn wir die Funktion aufrufen, kommt in die geschweiften Klammern.

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

   closeBtn.addEventListener("click", () =>
     panel.parentNode.removeChild(panel),
   );
   ```

Das ist eine Menge Code, den wir durchgehen müssen, also führen wir Sie Schritt für Schritt hindurch.

Die erste Zeile wählt das {{htmlelement("body")}}-Element aus, indem die [DOM-API](/de/docs/Web/API/Document_Object_Model) verwendet wird, um die [`body`](/de/docs/Web/API/Document/body)-Eigenschaft des globalen [`document`](/de/docs/Web/API/Document/body)-Objekts zu erhalten, und weist dieses einer Konstante namens `body` zu, damit wir später Dinge damit anstellen können:

```js
const body = document.body;
```

Der nächste Abschnitt verwendet eine DOM-API-Funktion namens [`document.createElement()`](/de/docs/Web/API/Document/createElement), um ein {{htmlelement("div")}}-Element zu erstellen und eine Referenz darauf in einer Konstanten namens `panel` zu speichern. Dieses Element wird der äußere Container unserer Nachrichtenbox sein.

Dann verwenden wir eine weitere DOM-API-Funktion namens [`Element.setAttribute()`](/de/docs/Web/API/Element/setAttribute), um ein `class`-Attribut mit einem Wert von `msgBox` auf unserem Panel einzurichten. Dies erleichtert das Styling des Elements — wenn Sie sich das CSS auf der Seite ansehen, werden Sie feststellen, dass wir einen `.msgBox`-Klassenselektor verwenden, um die Nachrichtenbox und ihren Inhalt zu gestalten.

Schließlich rufen wir eine DOM-Funktion namens [`Node.appendChild()`](/de/docs/Web/API/Node/appendChild) auf der zuvor gespeicherten `body`-Konstanten auf, die ein anderes Element als Kind darin verschachtelt. Wir geben das `panel`-`<div>` als das Kind an, das wir in das `<body>`-Element einfügen möchten. Wir müssen dies tun, da das von uns erstellte Element nicht von selbst auf der Seite erscheint — wir müssen angeben, wo wir es platzieren möchten.

```js
const panel = document.createElement("div");
panel.setAttribute("class", "msgBox");
body.appendChild(panel);
```

Die nächsten beiden Abschnitte verwenden dieselben `createElement()`- und `appendChild()`-Funktionen, die wir bereits gesehen haben, um zwei neue Elemente zu erstellen — ein {{htmlelement("p")}} und ein {{htmlelement("button")}} — und sie als Kinder des `panel` `<div>` in die Seite einzufügen. Wir verwenden deren [`Node.textContent`](/de/docs/Web/API/Node/textContent)-Eigenschaft — die den Textinhalt eines Elements darstellt — um eine Nachricht in das Absatz-Element und ein "x" in das Schaltflächen-Element einzufügen. Diese Schaltfläche muss angeklickt/aktiviert werden, wenn der Benutzer die Nachrichtenbox schließen möchte.

```js
const msg = document.createElement("p");
msg.textContent = "This is a message box";
panel.appendChild(msg);

const closeBtn = document.createElement("button");
closeBtn.textContent = "x";
panel.appendChild(closeBtn);
```

Schließlich rufen wir [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) auf, um eine Funktion hinzuzufügen, die ausgeführt wird, wenn der Benutzer auf die Schließen-Schaltfläche klickt. Der Code wird das gesamte Panel von der Seite löschen, um die Nachrichtenbox zu schließen.

Kurz gesagt, die Methode `addEventListener()` wird von der Schaltfläche (oder tatsächlich von jedem Element auf der Seite) bereitgestellt, dem eine Funktion und der Name eines Ereignisses übergeben werden können. In diesem Fall ist der Name des Ereignisses 'click', was bedeutet, dass die Funktion ausgeführt wird, wenn der Benutzer auf die Schaltfläche klickt. Sie werden in unserem [Artikel über Ereignisse](/de/docs/Learn_web_development/Core/Scripting/Events) viel mehr über Ereignisse erfahren. Die Zeile in der Funktion verwendet die [`Node.removeChild()`](/de/docs/Web/API/Node/removeChild)-DOM-API-Funktion, um anzugeben, dass wir ein bestimmtes Kindelement des HTML-Elements entfernen möchten — in diesem Fall das `panel` `<div>`.

```js
closeBtn.addEventListener("click", () => panel.parentNode.removeChild(panel));
```

Im Wesentlichen generiert dieser gesamte Codeblock einen Block von HTML, der so aussieht, und fügt ihn in die Seite ein:

```html
<div class="msgBox">
  <p>This is a message box</p>
  <button>x</button>
</div>
```

Das war viel Code, den es zu durchgehen galt — machen Sie sich keine Sorgen, wenn Sie nicht genau erinnern, wie jedes Detail gerade funktioniert! Der Hauptteil, auf den wir uns hier konzentrieren wollen, ist die Struktur und Nutzung der Funktion, aber wir wollten für dieses Beispiel etwas Interessantes zeigen.

## Die Funktion aufrufen

Sie haben nun Ihre Funktionsdefinition in Ihr `<script>`-Element eingebaut, aber sie wird als solche nichts bewirken.

1. Versuchen Sie, die folgende Zeile unter Ihrer Funktion hinzuzufügen, um sie aufzurufen:

   ```js
   displayMessage();
   ```

   Diese Zeile ruft die Funktion auf und lässt sie sofort laufen. Wenn Sie Ihren Code speichern und im Browser neu laden, sehen Sie, dass die kleine Nachrichtenbox direkt (nur einmal) erscheint. Schließlich rufen wir sie auch nur einmal auf.

2. Öffnen Sie nun in den Entwicklertools Ihres Browsers die JavaScript-Konsole und geben Sie die Zeile dort erneut ein, Sie werden sehen, dass sie wieder erscheint! Das macht Spaß – wir haben jetzt eine wiederverwendbare Funktion, die wir jederzeit aufrufen können.

Allerdings wollen wir wahrscheinlich, dass die Nachrichtenbox als Reaktion auf Benutzer- und Systemaktionen erscheint. In einer echten Anwendung würde eine solche Nachrichtenbox wahrscheinlich in Reaktion auf neue verfügbare Daten, einen aufgetretenen Fehler, wenn der Benutzer versucht, sein Profil zu löschen ("Sind Sie sicher, dass Sie das tun möchten?"), oder wenn der Benutzer einen neuen Kontakt hinzufügt und die Operation erfolgreich abgeschlossen wurde, aufgerufen werden.

In diesem Demo-Beispiel werden wir die Nachrichtenbox erscheinen lassen, wenn der Benutzer auf die Schaltfläche klickt.
Hier sind die Schritte, die Sie befolgen sollten, um dies zum Laufen zu bringen:

1. Löschen Sie die zuvor hinzugefügte Zeile (`displayMessage();`).
2. Wählen Sie das `<button>`-Element und speichern Sie eine Referenz darauf in einer Konstante. Fügen Sie die folgende Zeile oberhalb der Funktionsdefinition zu Ihrem Code hinzu:

   ```js
   const btn = document.querySelector("button");
   ```

3. Erstellen Sie einen Ereignislistener für Button-Klicks, der unsere Funktion aufruft. Fügen Sie die folgende Zeile nach der `const btn =`-Zeile hinzu:

   ```js
   btn.addEventListener("click", displayMessage);
   ```

   Ähnlich wie bei unserem `closeBtn`-Klickereignishandler rufen wir hier Code als Reaktion auf einen Klick auf einen Button auf. Aber in diesem Fall rufen wir anstelle einer anonymen Funktion, die Code enthält, unsere `displayMessage()`-Funktion nach ihrem Namen auf.

4. Speichern und aktualisieren Sie schließlich die Seite — nun sollten Sie sehen, dass die Nachrichtenbox erscheint, wenn Sie auf den Button klicken.

Sie fragen sich vielleicht, warum wir die Klammern nach dem Funktionsnamen nicht eingeschlossen haben. Das liegt daran, dass wir die Funktion nicht sofort aufrufen möchten — nur nachdem der Button geklickt wurde. Wenn Sie versuchen, die Zeile zu ändern in

```js
btn.addEventListener("click", displayMessage());
```

und speichern und neu laden, werden Sie sehen, dass die Nachrichtenbox erscheint, ohne dass der Button geklickt wird! Die Klammern in diesem Kontext werden manchmal als "Funktionsaufruf-Operator" bezeichnet. Sie verwenden sie nur, wenn Sie die Funktion sofort im aktuellen Bereich ausführen möchten. In gleicher Weise wird der Code innerhalb der anonymen Funktion nicht sofort ausgeführt, da er innerhalb des Funktionsbereichs ist.

Wenn Sie das letzte Experiment ausprobiert haben, stellen Sie sicher, dass Sie die letzte Änderung rückgängig machen, bevor Sie fortfahren.

## Verbesserung der Funktion mit Parametern

So wie die Funktion jetzt ist, ist sie immer noch nicht sehr nützlich — wir möchten nicht jedes Mal dieselbe Standardnachricht anzeigen. Lassen Sie uns unsere Funktion verbessern, indem wir einige Parameter hinzufügen, die es uns ermöglichen, sie mit einigen unterschiedlichen Optionen aufzurufen.

1. Aktualisieren Sie zunächst die erste Zeile der Funktion:

   ```js
   function displayMessage() {
   ```

   zu diesem:

   ```js
   function displayMessage(msgText, msgType) {
   ```

   Nun, wenn wir die Funktion aufrufen, können wir zwei Variablenwerte in die Klammern setzen, um die Nachricht anzugeben, die in der Nachrichtenbox angezeigt werden soll, und den Typ der Nachricht.

2. Um den ersten Parameter zu nutzen, aktualisieren Sie die folgende Zeile innerhalb Ihrer Funktion:

   ```js
   msg.textContent = "This is a message box";
   ```

   zu

   ```js
   msg.textContent = msgText;
   ```

3. Zu guter Letzt müssen Sie jetzt Ihren Funktionsaufruf aktualisieren, um einen aktualisierten Nachrichtentext einzuschließen. Ändern Sie die folgende Zeile:

   ```js
   btn.addEventListener("click", displayMessage);
   ```

   zu diesem Block:

   ```js
   btn.addEventListener("click", () =>
     displayMessage("Woo, this is a different message!"),
   );
   ```

   Wenn wir Parameter innerhalb der Klammern für die aufgerufene Funktion angeben wollen, können wir sie nicht direkt aufrufen — wir müssen sie in eine anonyme Funktion setzen, damit sie sich nicht im unmittelbaren Bereich befindet und daher nicht sofort aufgerufen wird. Nun wird sie erst aufgerufen, wenn der Button geklickt wird.

4. Laden Sie den Code erneut und probieren Sie ihn aus, und Sie werden sehen, dass er immer noch einwandfrei funktioniert, außer dass Sie jetzt auch die Nachricht innerhalb des Parameters variieren können, um unterschiedliche Nachrichten in der Box anzuzeigen!

### Ein komplexerer Parameter

Weiter zum nächsten Parameter. Dieser wird etwas mehr Arbeit erfordern — wir werden ihn so einstellen, dass je nachdem, auf welchen Wert der `msgType`-Parameter gesetzt ist, die Funktion ein anderes Icon und eine andere Hintergrundfarbe anzeigt.

1. Laden Sie zunächst die für diese Übung benötigten Icons ([warning](https://github.com/mdn/learning-area/blob/main/javascript/building-blocks/functions/icons/warning.png) und [chat](https://github.com/mdn/learning-area/blob/main/javascript/building-blocks/functions/icons/chat.png)) von GitHub herunter. Speichern Sie sie in einem neuen Ordner namens `icons` am selben Ort wie Ihre HTML-Datei.

   > [!NOTE]
   > Die Warn- und Chat-Icons wurden ursprünglich auf [iconfinder.com](https://www.iconfinder.com/) gefunden und von [Nazarrudin Ansyari](https://www.iconfinder.com/nazarr) entworfen — Danke! (Die tatsächlichen Icon-Seiten wurden seitdem verschoben oder entfernt.)

2. Finden Sie als Nächstes das CSS in Ihrer HTML-Datei. Wir werden einige Änderungen vornehmen, um Platz für die Icons zu schaffen. Aktualisieren Sie zunächst die `.msgBox`-Breite von:

   ```css
   width: 200px;
   ```

   zu

   ```css
   width: 242px;
   ```

3. Fügen Sie als nächstes die folgenden Zeilen in die `.msgBox p { }`-Regel ein:

   ```css
   padding-left: 82px;
   background-position: 25px center;
   background-repeat: no-repeat;
   ```

4. Jetzt müssen wir Code zu unserer `displayMessage()`-Funktion hinzufügen, um das Anzeigen der Icons zu handhaben. Fügen Sie den folgenden Block direkt über der schließenden geschweiften Klammer (`}`) Ihrer Funktion hinzu:

   ```js
   if (msgType === "warning") {
     msg.style.backgroundImage = "url(icons/warning.png)";
     panel.style.backgroundColor = "red";
   } else if (msgType === "chat") {
     msg.style.backgroundImage = "url(icons/chat.png)";
     panel.style.backgroundColor = "aqua";
   } else {
     msg.style.paddingLeft = "20px";
   }
   ```

   Hier, wenn der `msgType`-Parameter als `"warning"` gesetzt ist, wird das Warn-Icon angezeigt und die Hintergrundfarbe des Panels wird auf Rot gesetzt. Wenn er auf `"chat"` gesetzt ist, wird das Chat-Icon angezeigt und die Hintergrundfarbe des Panels wird auf Aqua-Blau gesetzt. Wenn der `msgType`-Parameter überhaupt nicht (oder auf etwas anderes) gesetzt ist, kommt der `else { }`-Teil des Codes zum Tragen und der Absatz erhält standardmäßiges Padding und kein Icon, mit keiner Hintergrundfarbe des Panels eingestellt. Dies bietet einen Standardzustand, wenn kein `msgType`-Parameter bereitgestellt wird, was bedeutet, dass er ein optionaler Parameter ist!

5. Lassen Sie uns unsere aktualisierte Funktion testen. Versuchen Sie, den `displayMessage()`-Aufruf von diesem:

   ```js
   displayMessage("Woo, this is a different message!");
   ```

   zu einem von diesen zu ändern:

   ```js
   displayMessage("Your inbox is almost full — delete some mails", "warning");
   displayMessage("Brian: Hi there, how are you today?", "chat");
   ```

   Sie sehen, wie nützlich unsere (jetzt nicht mehr so) kleine Funktion geworden ist.

> [!NOTE]
> Wenn Sie Probleme haben, das Beispiel zum Laufen zu bringen, können Sie Ihren Code mit der [fertigen Version auf GitHub](https://github.com/mdn/learning-area/blob/main/javascript/building-blocks/functions/function-stage-4.html) vergleichen ([siehe es auch live](https://mdn.github.io/learning-area/javascript/building-blocks/functions/function-stage-4.html)), oder Sie fragen uns um Hilfe.

## Zusammenfassung

Herzlichen Glückwunsch zur Vollendung! Dieser Artikel führte Sie durch den gesamten Prozess des Aufbaus einer praktischen benutzerdefinierten Funktion, die mit ein wenig mehr Arbeit in ein echtes Projekt transplantiert werden könnte. Im nächsten Artikel werden wir Funktionen mit einem weiteren wesentlichen verwandten Konzept — Rückgabewerten — abschließen.

{{PreviousMenuNext("Learn_web_development/Core/Scripting/Functions", "Learn_web_development/Core/Scripting/Return_values", "Learn_web_development/Core/Scripting")}}
