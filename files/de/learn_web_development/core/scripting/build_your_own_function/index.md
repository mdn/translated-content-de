---
title: Erstellen Sie Ihre eigene Funktion
slug: Learn_web_development/Core/Scripting/Build_your_own_function
l10n:
  sourceCommit: c529f2672b3541cc28ea687ff9266f98b1734191
---

{{PreviousMenuNext("Learn_web_development/Core/Scripting/Functions","Learn_web_development/Core/Scripting/Return_values", "Learn_web_development/Core/Scripting")}}

Nachdem wir im vorherigen Artikel den größten Teil der grundlegenden Theorie behandelt haben, geht es in diesem Artikel um die Praxis. Sie werden üben, eine eigene Funktion zu erstellen. Dabei erklären wir auch einige nützliche Details zum Umgang mit Funktionen.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>Kenntnisse in <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a> und den <a href="/de/docs/Learn_web_development/Core/Styling_basics">Grundlagen von CSS</a> sowie Vertrautheit mit den Grundlagen von JavaScript-Funktionen, die in der vorherigen Lektion behandelt wurden.</td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Erfahrung beim Erstellen eigener Funktionen sammeln.</li>
          <li>Funktionen Parameter hinzufügen.</li>
          <li>Eine Funktion aufrufen.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Erstellen wir eine Funktion

Die Funktion, die wir erstellen werden, heißt `displayMessage()`. Sie zeigt ein eigenes Meldungsfenster auf einer Webseite an und dient als anpassbarer Ersatz für die integrierte Funktion [`alert()`](/de/docs/Web/API/Window/alert) des Browsers. Diese Funktion haben wir bereits gesehen, aber frischen wir die Erinnerung kurz auf. Geben Sie auf einer beliebigen Seite Folgendes in die JavaScript-Konsole Ihres Browsers ein:

```js
alert("This is a message");
```

Die Funktion `alert()` nimmt ein einziges Argument entgegen: den String, der im Hinweisfenster angezeigt wird. Probieren Sie verschiedene Strings aus, um die Meldung zu ändern.

Die Funktion `alert()` ist eingeschränkt: Sie können die Meldung ändern, aber andere Dinge wie die Farbe oder das Symbol lassen sich nicht ohne Weiteres anpassen. Wir erstellen eine Variante, die mehr Möglichkeiten bietet.

## Die grundlegende Funktion

Beginnen wir mit einer einfachen Funktion.

> [!NOTE]
> Bei der Benennung von Funktionen sollten Sie dieselben Regeln wie bei der [Benennung von Variablen](/de/docs/Learn_web_development/Core/Scripting/Variables#an_aside_on_variable_naming_rules) befolgen. Funktionen und Variablen lassen sich trotzdem unterscheiden: Auf Funktionsnamen folgen Klammern, auf Variablennamen nicht.

1. Erstellen Sie zunächst eine neue HTML-Datei auf Ihrem lokalen Dateisystem und fügen Sie den folgenden Code ein:

   ```html
   <!DOCTYPE html>
   <html lang="en-US">
     <head>
       <meta charset="utf-8" />
       <meta name="viewport" content="width=device-width" />
       <title>Function start</title>
       <style>
         .msgBox {
           position: absolute;
           top: 50%;
           left: 50%;
           transform: translate(-50%, -50%);
           width: 200px;
           border-radius: 10px;
           background-color: #eee;
           background-image: linear-gradient(
             to bottom,
             rgb(0 0 0 / 0),
             rgb(0 0 0 / 0.1)
           );
         }

         .msgBox p {
           line-height: 1.5;
           padding: 10px 20px;
           color: #333;
         }

         .msgBox button {
           background: none;
           border: none;
           position: absolute;
           top: 0;
           right: 0;
           font-size: 1.1rem;
           color: #aaa;
         }
       </style>
     </head>
     <body>
       <button>Display message box</button>

       <script></script>
     </body>
   </html>
   ```

   Das HTML ist einfach: Der Body enthält nur ein einziges `<button>`-Element. Wir haben außerdem etwas grundlegendes CSS für die Gestaltung des eigenen Meldungsfensters und ein leeres {{htmlelement("script")}}-Element für unser JavaScript bereitgestellt.

2. Fügen Sie als Nächstes Folgendes in das `<script>`-Element ein:

   ```js
   function displayMessage() {
     // …
   }
   ```

   Wir beginnen mit dem Schlüsselwort `function`, das angibt, dass wir eine Funktion definieren. Darauf folgen der Name, den wir der Funktion geben möchten, ein Klammerpaar und ein Paar geschweifter Klammern. Parameter, die wir der Funktion übergeben möchten, stehen innerhalb der runden Klammern. Der Code, der beim Aufruf der Funktion ausgeführt wird, steht innerhalb der geschweiften Klammern.

3. Fügen Sie schließlich den folgenden Code innerhalb der geschweiften Klammern ein:

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

### Erklärung des Funktionscodes

Das ist ziemlich viel Code. Gehen wir ihn deshalb Schritt für Schritt durch.

Die erste Zeile wählt das {{htmlelement("body")}}-Element aus. Dazu verwendet sie die [DOM API](/de/docs/Web/API/Document_Object_Model), um die Eigenschaft [`body`](/de/docs/Web/API/Document/body) des globalen [`document`](/de/docs/Web/API/Document)-Objekts abzurufen. Anschließend weist sie das Ergebnis einer Konstanten namens `body` zu, damit wir später damit arbeiten können:

```js
const body = document.body;
```

Der nächste Abschnitt verwendet die DOM-API-Funktion [`Document.createElement()`](/de/docs/Web/API/Document/createElement), um ein {{htmlelement("div")}}-Element zu erstellen und eine Referenz darauf in einer Konstanten namens `panel` zu speichern. Dieses Element bildet den äußeren Container unseres Meldungsfensters.

Danach verwenden wir eine weitere DOM-API-Funktion namens [`Element.setAttribute()`](/de/docs/Web/API/Element/setAttribute), um für unser Panel ein `class`-Attribut mit dem Wert `msgBox` festzulegen. Dadurch lässt sich das Element leichter gestalten: Wenn Sie sich das CSS auf der Seite ansehen, erkennen Sie, dass wir den Klassenselektor `.msgBox` verwenden, um das Meldungsfenster und seinen Inhalt zu gestalten.

Schließlich rufen wir die DOM-Funktion [`Node.appendChild()`](/de/docs/Web/API/Node/appendChild) für die zuvor gespeicherte Konstante `body` auf. Dadurch wird ein Element als Kind in ein anderes eingefügt. Wir geben das Panel-`<div>` als Kind an, das in das `<body>`-Element eingefügt werden soll. Das ist nötig, weil das erstellte Element nicht von selbst auf der Seite erscheint: Wir müssen festlegen, wo es eingefügt werden soll.

```js
const panel = document.createElement("div");
panel.setAttribute("class", "msgBox");
body.appendChild(panel);
```

In den nächsten beiden Abschnitten werden dieselben Funktionen `createElement()` und `appendChild()` verwendet, die wir bereits kennengelernt haben. Damit erstellen wir zwei neue Elemente – ein {{htmlelement("p")}}-Element und ein {{htmlelement("button")}}-Element – und fügen sie als Kinder des Panel-`<div>` in die Seite ein. Über ihre Eigenschaft [`Node.textContent`](/de/docs/Web/API/Node/textContent), die den Textinhalt eines Elements repräsentiert, fügen wir eine Meldung in den Absatz und ein „x“ in den Button ein. Diesen Button muss der Benutzer anklicken oder aktivieren, um das Meldungsfenster zu schließen.

```js
const msg = document.createElement("p");
msg.textContent = "This is a message box";
panel.appendChild(msg);

const closeBtn = document.createElement("button");
closeBtn.textContent = "x";
panel.appendChild(closeBtn);
```

Zum Schluss rufen wir [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) auf, um eine Funktion hinzuzufügen, die ausgeführt wird, wenn der Benutzer auf den „Schließen“-Button klickt. Der Code entfernt dann das gesamte Panel von der Seite und schließt so das Meldungsfenster.

Kurz gesagt: Die Methode `addEventListener()` kann für jedes Element auf der Seite aufgerufen werden. Üblicherweise werden ihr zwei Argumente übergeben: der Name eines Ereignisses und eine Funktion, die beim Eintreten des Ereignisses ausgeführt werden soll. In diesem Fall lautet der Ereignisname `click`. Das bedeutet, dass die Funktion ausgeführt wird, wenn der Benutzer auf den Button klickt. Mehr über Ereignisse erfahren Sie in unserem [Artikel über Ereignisse](/de/docs/Learn_web_development/Core/Scripting/Events). Der Code innerhalb der Funktion verwendet die Methode [`removeChild()`](/de/docs/Web/API/Node/removeChild), um ein bestimmtes Kindelement des `<body>`-Elements zu entfernen: in diesem Fall das Panel-`<div>`.

```js
closeBtn.addEventListener("click", () => body.removeChild(panel));
```

Im Wesentlichen erzeugt dieser gesamte Codeblock HTML, das wie folgt aussieht, und fügt es in die Seite ein:

```html
<div class="msgBox">
  <p>This is a message box</p>
  <button>x</button>
</div>
```

Das war eine Menge Code – machen Sie sich keine Sorgen, wenn Sie sich noch nicht genau merken können, wie jeder Teil funktioniert! Hier möchten wir uns vor allem auf den Aufbau und die Verwendung der Funktion konzentrieren. Für dieses Beispiel wollten wir aber etwas Interessantes zeigen.

## Die Funktion aufrufen

Die Definition Ihrer Funktion steht jetzt im `<script>`-Element. So, wie der Code derzeit ist, passiert jedoch noch nichts.

1. Fügen Sie die folgende Zeile unterhalb Ihrer Funktion ein, um sie aufzurufen:

   ```js
   displayMessage();
   ```

   Diese Zeile ruft die Funktion auf, sodass sie sofort ausgeführt wird. Wenn Sie Ihren Code speichern und die Seite im Browser neu laden, erscheint das kleine Meldungsfenster sofort – und nur einmal. Schließlich rufen wir die Funktion auch nur einmal auf.

2. Öffnen Sie nun auf der Beispielseite die Entwicklertools Ihres Browsers, wechseln Sie zur JavaScript-Konsole und geben Sie die Zeile dort erneut ein. Das Meldungsfenster erscheint wieder! Wir haben jetzt also eine wiederverwendbare Funktion, die wir jederzeit aufrufen können.

Wahrscheinlich soll das Meldungsfenster aber als Reaktion auf Benutzeraktionen oder Systemereignisse erscheinen. In einer echten Anwendung könnte es beispielsweise angezeigt werden, wenn neue Daten verfügbar sind, ein Fehler aufgetreten ist, ein Benutzer versucht, sein Profil zu löschen („Sind Sie sicher?“), oder das Hinzufügen eines neuen Kontakts erfolgreich abgeschlossen wurde.

In dieser Demo lassen wir das Meldungsfenster erscheinen, wenn der Benutzer auf den Button klickt. Gehen Sie dazu wie folgt vor:

1. Löschen Sie die zuvor hinzugefügte Zeile (`displayMessage();`).
2. Wählen Sie das `<button>`-Element aus und speichern Sie eine Referenz darauf in einer Konstanten. Fügen Sie dazu die folgende Zeile oberhalb der Funktionsdefinition ein:

   ```js
   const btn = document.querySelector("button");
   ```

3. Erstellen Sie einen Event Listener für Klicks auf den Button, der unsere Funktion aufruft. Fügen Sie die folgende Zeile nach der Zeile mit `const btn =` ein:

   ```js
   btn.addEventListener("click", displayMessage);
   ```

   Ähnlich wie beim Click-Event-Handler von `closeBtn` führen wir hier Code aus, wenn auf einen Button geklickt wird. In diesem Fall rufen wir jedoch keine anonyme Funktion mit Code auf, sondern unsere Funktion `displayMessage()` anhand ihres Namens.

4. Speichern Sie die Datei und laden Sie die Seite neu. Das Meldungsfenster sollte jetzt erscheinen, wenn Sie auf den Button klicken.

Vielleicht fragen Sie sich, warum wir hinter dem Funktionsnamen keine Klammern gesetzt haben. Der Grund ist, dass wir die Funktion nicht sofort aufrufen möchten, sondern erst nach einem Klick auf den Button. Wenn Sie die Zeile in Folgendes ändern,

```js example-bad
btn.addEventListener("click", displayMessage());
```

und die Datei speichern und neu laden, erscheint das Meldungsfenster, ohne dass auf den Button geklickt wurde! Die Klammern werden in diesem Zusammenhang manchmal als „Funktionsaufrufoperator“ bezeichnet. Sie verwenden sie nur, wenn Sie die Funktion sofort im aktuellen Gültigkeitsbereich ausführen möchten.

Falls Sie dieses Experiment ausprobiert haben, machen Sie die letzte Änderung rückgängig, bevor Sie fortfahren.

> [!NOTE]
> Wenn Sie mehr mit Funktionen üben möchten, probieren Sie die Scrimba<sup>[_MDN-Lernpartner_](/de/docs/MDN/Writing_guidelines/Learning_content#partner_links_and_embeds)</sup>-Aufgabe [Schreiben Sie Ihre erste Funktion](https://scrimba.com/fullstack-path-c0fullstack/~04h?via=mdn) aus.

## Die Funktion mit Parametern verbessern

Derzeit ist die Funktion noch nicht besonders nützlich: Wir möchten nicht jedes Mal dieselbe Standardmeldung anzeigen. Verbessern wir sie, indem wir Parameter hinzufügen. So können wir sie mit unterschiedlichen Optionen aufrufen.

1. Aktualisieren Sie zunächst die erste Zeile der Funktion:

   ```js
   function displayMessage() {
   ```

   zu:

   ```js
   function displayMessage(msgText, msgType) {
   ```

   Wenn wir die Funktion jetzt aufrufen, können wir innerhalb der Klammern zwei Werte übergeben: die Meldung, die im Meldungsfenster angezeigt werden soll, und den Typ der Meldung.

2. Um den ersten Parameter zu verwenden, ändern Sie die folgende Zeile innerhalb Ihrer Funktion:

   ```js
   msg.textContent = "This is a message box";
   ```

   zu:

   ```js
   msg.textContent = msgText;
   ```

3. Zu guter Letzt müssen Sie den Funktionsaufruf aktualisieren, damit er den neuen Meldungstext übergibt. Ändern Sie die folgende Zeile:

   ```js
   btn.addEventListener("click", displayMessage);
   ```

   zu diesem Block:

   ```js
   btn.addEventListener("click", () =>
     displayMessage("Woo, this is a different message!"),
   );
   ```

   Wenn wir beim Funktionsaufruf Parameter in Klammern angeben möchten, können wir die Funktion hier nicht direkt übergeben. Stattdessen müssen wir sie in eine anonyme Funktion einfügen, damit sie nicht sofort aufgerufen wird. Nun wird sie erst ausgeführt, wenn auf den Button geklickt wird.

4. Laden Sie die Seite neu und probieren Sie den Code aus. Er funktioniert weiterhin, aber jetzt können Sie den als Parameter übergebenen Text ändern, um unterschiedliche Meldungen im Fenster anzuzeigen!

### Ein komplexerer Parameter

Kommen wir zum nächsten Parameter. Dieser erfordert etwas mehr Arbeit: Abhängig vom Wert des Parameters `msgType` soll die Funktion ein anderes Symbol und eine andere Hintergrundfarbe anzeigen.

1. Laden Sie zunächst die für diese Übung benötigten Symbole ([Warnung](https://github.com/mdn/learning-area/blob/main/javascript/building-blocks/functions/icons/warning.png) und [Chat](https://github.com/mdn/learning-area/blob/main/javascript/building-blocks/functions/icons/chat.png)) von GitHub herunter. Klicken Sie jeweils auf den Download-Button und speichern Sie die Dateien am selben Ort wie Ihre HTML-Datei.

   > [!NOTE]
   > Die Symbole für Warnung und Chat stammten ursprünglich von iconfinder.com und wurden von Nazarrudin Ansyari gestaltet – vielen Dank! (Die ursprünglichen Seiten der Symbole wurden inzwischen verschoben oder entfernt.)

2. Suchen Sie als Nächstes das CSS in Ihrer HTML-Datei. Wir nehmen einige Änderungen vor, um Platz für die Symbole zu schaffen. Ändern Sie zunächst die Breite von `.msgBox` von:

   ```css
   width: 200px;
   ```

   zu:

   ```css
   width: 242px;
   ```

3. Ändern Sie anschließend innerhalb der Regel `.msgBox p { }` die folgende Zeile:

   ```css
   padding: 10px 20px;
   ```

   zu:

   ```css
   padding: 10px 20px 10px 82px;
   background-position: 25px center;
   background-repeat: no-repeat;
   ```

4. Jetzt müssen wir unserer Funktion `displayMessage()` Code hinzufügen, der die Symbole anzeigt. Fügen Sie den folgenden Block direkt oberhalb der schließenden geschweiften Klammer (`}`) Ihrer Funktion ein:

   ```js
   if (msgType === "warning") {
     msg.style.backgroundImage = "url(warning.png)";
     panel.style.backgroundColor = "red";
   } else if (msgType === "chat") {
     msg.style.backgroundImage = "url(chat.png)";
     panel.style.backgroundColor = "aqua";
   } else {
     msg.style.paddingLeft = "20px";
   }
   ```

   Wenn der Parameter `msgType` den Wert `"warning"` hat, wird das Warnsymbol angezeigt und die Hintergrundfarbe des Panels auf Rot gesetzt. Hat er den Wert `"chat"`, wird das Chat-Symbol angezeigt und die Hintergrundfarbe des Panels auf Aquablau gesetzt. Wenn der Parameter `msgType` gar nicht oder mit einem anderen Wert übergeben wird, kommt der Teil `else { }` zum Einsatz: Der Absatz erhält einen Standardinnenabstand und kein Symbol; auch für den Panelhintergrund wird keine Farbe festgelegt. So entsteht ein Standardzustand, wenn kein Parameter `msgType` übergeben wird. Der Parameter ist also optional!

5. Testen wir unsere aktualisierte Funktion. Ändern Sie den Aufruf von `displayMessage()` von:

   ```js
   btn.addEventListener("click", () =>
     displayMessage("Woo, this is a different message!");
   );
   ```

   zu einer dieser Varianten:

   ```js
   btn.addEventListener("click", () =>
     displayMessage("Your inbox is almost full — delete some mails", "warning"),
   );

   btn.addEventListener("click", () =>
     displayMessage("Brian: Hi there, how are you today?", "chat"),
   );
   ```

   Sie sehen, wie nützlich unsere inzwischen nicht mehr ganz so kleine Funktion wird.

## Endergebnis

Wenn Sie alle Schritte befolgt haben, sollte Ihr Beispiel wie folgt dargestellt werden:

```html hidden live-sample___final-result
<button>Display message box</button>
```

```css hidden live-sample___final-result
.msgBox {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 242px;
  border-radius: 10px;
  background-color: #eee;
  background-image: linear-gradient(
    to bottom,
    rgb(0 0 0 / 0),
    rgb(0 0 0 / 0.1)
  );
}

.msgBox p {
  line-height: 1.5;
  padding: 10px 20px 10px 82px;
  background-position: 25px center;
  background-repeat: no-repeat;
  color: #333;
}

.msgBox button {
  background: none;
  border: none;
  position: absolute;
  top: 0;
  right: 0;
  font-size: 1.1rem;
  color: #aaa;
}
```

```js hidden live-sample___final-result
const btn = document.querySelector("button");
btn.addEventListener("click", () =>
  displayMessage("Brian: Hi there, how are you today?", "chat"),
);

function displayMessage(msgText, msgType) {
  const body = document.body;

  const panel = document.createElement("div");
  panel.setAttribute("class", "msgBox");
  body.appendChild(panel);

  const msg = document.createElement("p");
  msg.textContent = msgText;
  panel.appendChild(msg);

  const closeBtn = document.createElement("button");
  closeBtn.textContent = "x";
  panel.appendChild(closeBtn);

  closeBtn.addEventListener("click", () => body.removeChild(panel));

  if (msgType === "warning") {
    msg.style.backgroundImage = "url(warning.png)";
    panel.style.backgroundColor = "red";
  } else if (msgType === "chat") {
    msg.style.backgroundImage = "url(chat.png)";
    panel.style.backgroundColor = "aqua";
  } else {
    msg.style.paddingLeft = "20px";
  }
}
```

{{embedlivesample("final-result","100%", "300")}}

> [!NOTE]
> Falls Sie Schwierigkeiten haben, das Beispiel zum Laufen zu bringen, können Sie Ihren Code mit unserer fertigen Version vergleichen. Klicken Sie im dargestellten Beispiel auf den Play-Button, um den vollständigen Quellcode im MDN Playground anzuzeigen.

## Zusammenfassung

Herzlichen Glückwunsch, Sie haben das Ende erreicht! In diesem Artikel haben Sie den gesamten Prozess durchlaufen, eine eigene praktische Funktion zu erstellen. Mit etwas zusätzlicher Arbeit ließe sie sich in einem echten Projekt einsetzen. Im nächsten Artikel schließen wir das Thema Funktionen ab und erklären ein weiteres wichtiges Konzept: Rückgabewerte.

{{PreviousMenuNext("Learn_web_development/Core/Scripting/Functions","Learn_web_development/Core/Scripting/Return_values", "Learn_web_development/Core/Scripting")}}
