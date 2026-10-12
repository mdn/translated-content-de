---
title: Erstellen Sie Ihre eigene Funktion
slug: Learn_web_development/Core/Scripting/Build_your_own_function
l10n:
  sourceCommit: 1a2a5b56a689b441ebf3be91b90f15746c5a5a01
---

{{PreviousMenuNext("Learn_web_development/Core/Scripting/Functions","Learn_web_development/Core/Scripting/Return_values", "Learn_web_development/Core/Scripting")}}

Nachdem wir im vorherigen Artikel den Großteil der wesentlichen Theorie behandelt haben, geht es in diesem Artikel um praktische Erfahrung. Sie üben, eine eigene Funktion zu erstellen. Dabei erklären wir auch einige nützliche Details zum Umgang mit Funktionen.

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

Die Funktion, die wir erstellen werden, heißt `displayMessage()`. Sie zeigt ein benutzerdefiniertes Meldungsfeld auf einer Webseite an und dient als anpassbarer Ersatz für die integrierte Browserfunktion [`alert()`](/de/docs/Web/API/Window/alert). Wir haben diese Funktion bereits gesehen, aber frischen wir die Erinnerung kurz auf. Geben Sie auf einer beliebigen Seite Folgendes in die JavaScript-Konsole Ihres Browsers ein:

```js
alert("This is a message");
```

Die Funktion `alert()` nimmt ein einzelnes Argument entgegen – den String, der im Meldungsfeld angezeigt wird. Ändern Sie den String, um eine andere Meldung anzuzeigen.

Die Funktion `alert()` ist eingeschränkt: Sie können die Meldung ändern, aber andere Dinge wie die Farbe oder das Symbol lassen sich nicht ohne Weiteres anpassen. Wir erstellen eine Funktion, die mehr Möglichkeiten bietet.

## Die grundlegende Funktion

Beginnen wir mit einer einfachen Funktion.

> [!NOTE]
> Bei der Benennung von Funktionen sollten Sie dieselben Regeln befolgen wie bei der [Benennung von Variablen](/de/docs/Learn_web_development/Core/Scripting/Variables#an_aside_on_variable_naming_rules). Die beiden lassen sich leicht unterscheiden: Nach Funktionsnamen stehen Klammern, nach Variablennamen nicht.

1. Erstellen Sie zunächst eine neue HTML-Datei auf Ihrem lokalen Dateisystem und fügen Sie den folgenden Code ein:

   ```html
   <!doctype html>
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
           background-color: #eeeeee;
           background-image: linear-gradient(
             to bottom,
             rgb(0 0 0 / 0),
             rgb(0 0 0 / 0.1)
           );
         }

         .msgBox p {
           line-height: 1.5;
           padding: 10px 20px;
           color: #333333;
         }

         .msgBox button {
           background: none;
           border: none;
           position: absolute;
           top: 0;
           right: 0;
           font-size: 1.1rem;
           color: #aaaaaa;
         }
       </style>
     </head>
     <body>
       <button>Display message box</button>

       <script></script>
     </body>
   </html>
   ```

   Das HTML ist einfach: Der Body enthält nur ein `<button>`-Element. Außerdem haben wir etwas grundlegendes CSS zum Gestalten des benutzerdefinierten Meldungsfelds und ein leeres {{htmlelement("script")}}-Element für unser JavaScript bereitgestellt.

2. Fügen Sie als Nächstes Folgendes in das `<script>`-Element ein:

   ```js
   function displayMessage() {
     // …
   }
   ```

   Wir beginnen mit dem Schlüsselwort `function`. Es bedeutet, dass wir eine Funktion definieren. Darauf folgen der Name, den wir unserer Funktion geben möchten, ein Klammerpaar und ein Paar geschweifter Klammern. Alle Parameter, die unsere Funktion erhalten soll, stehen in den runden Klammern. Der Code, der beim Aufruf der Funktion ausgeführt wird, steht in den geschweiften Klammern.

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

### Erläuterung des Funktionscodes

Das ist eine ganze Menge Code. Gehen wir ihn deshalb Schritt für Schritt durch.

Die erste Zeile wählt das {{htmlelement("body")}}-Element aus. Dazu greift sie über die [DOM-API](/de/docs/Web/API/Document_Object_Model) auf die Eigenschaft [`body`](/de/docs/Web/API/Document/body) des globalen Objekts [`document`](/de/docs/Web/API/Document) zu und weist sie einer Konstante namens `body` zu. So können wir später mit dem Element arbeiten:

```js
const body = document.body;
```

Der nächste Abschnitt verwendet die DOM-API-Funktion [`Document.createElement()`](/de/docs/Web/API/Document/createElement), um ein {{htmlelement("div")}}-Element zu erstellen und eine Referenz darauf in einer Konstante namens `panel` zu speichern. Dieses Element bildet den äußeren Container unseres Meldungsfelds.

Anschließend verwenden wir eine weitere DOM-API-Funktion namens [`Element.setAttribute()`](/de/docs/Web/API/Element/setAttribute), um für unser Panel ein `class`-Attribut mit dem Wert `msgBox` festzulegen. Dadurch lässt sich das Element leichter gestalten: Im CSS der Seite sehen Sie, dass wir den Klassenselektor `.msgBox` verwenden, um das Meldungsfeld und seinen Inhalt zu gestalten.

Zum Schluss rufen wir die DOM-Funktion [`Node.appendChild()`](/de/docs/Web/API/Node/appendChild) für die zuvor gespeicherte Konstante `body` auf. Sie fügt ein Element als Kindelement in ein anderes ein. Wir geben das `<div>`-Element des Panels als Kindelement an, das in das `<body>`-Element eingefügt werden soll. Das ist nötig, weil das erstellte Element nicht von selbst auf der Seite erscheint – wir müssen angeben, wo es platziert werden soll.

```js
const panel = document.createElement("div");
panel.setAttribute("class", "msgBox");
body.appendChild(panel);
```

Die nächsten beiden Abschnitte verwenden die bereits bekannten Funktionen `createElement()` und `appendChild()`, um zwei neue Elemente zu erstellen – ein {{htmlelement("p")}}- und ein {{htmlelement("button")}}-Element – und sie als Kindelemente des Panel-`<div>` in die Seite einzufügen. Über ihre Eigenschaft [`Node.textContent`](/de/docs/Web/API/Node/textContent), die den Textinhalt eines Elements repräsentiert, fügen wir eine Meldung in den Absatz und ein „x“ in den Button ein. Benutzer müssen diesen Button anklicken oder aktivieren, um das Meldungsfeld zu schließen.

```js
const msg = document.createElement("p");
msg.textContent = "This is a message box";
panel.appendChild(msg);

const closeBtn = document.createElement("button");
closeBtn.textContent = "x";
panel.appendChild(closeBtn);
```

Schließlich rufen wir [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) auf, um eine Funktion hinzuzufügen, die ausgeführt wird, wenn Benutzer auf den „Schließen“-Button klicken. Der Code entfernt dann das gesamte Panel von der Seite und schließt so das Meldungsfeld.

Kurz gesagt kann die Methode `addEventListener()` für jedes Element auf der Seite aufgerufen werden. Üblicherweise erhält sie zwei Argumente: den Namen eines Ereignisses und eine Funktion, die beim Eintreten dieses Ereignisses ausgeführt werden soll. Hier lautet der Ereignisname `click`. Die Funktion wird also ausgeführt, wenn Benutzer auf den Button klicken. In unserem [Artikel über Ereignisse](/de/docs/Learn_web_development/Core/Scripting/Events) erfahren Sie mehr darüber. Der Code innerhalb der Funktion verwendet die Methode [`removeChild()`](/de/docs/Web/API/Node/removeChild), um ein bestimmtes Kindelement des `<body>`-Elements zu entfernen – in diesem Fall das Panel-`<div>`.

```js
closeBtn.addEventListener("click", () => body.removeChild(panel));
```

Im Wesentlichen erzeugt dieser gesamte Codeblock einen HTML-Block wie den folgenden und fügt ihn in die Seite ein:

```html
<div class="msgBox">
  <p>This is a message box</p>
  <button>x</button>
</div>
```

Das war viel Code – machen Sie sich keine Sorgen, wenn Sie sich noch nicht genau merken können, wie jeder Teil funktioniert! Im Mittelpunkt stehen hier Aufbau und Verwendung der Funktion. Wir wollten für dieses Beispiel aber auch etwas Interessantes zeigen.

## Die Funktion aufrufen

Ihre Funktionsdefinition steht jetzt im `<script>`-Element, aber bisher geschieht noch nichts.

1. Fügen Sie unter Ihrer Funktion die folgende Zeile ein, um sie aufzurufen:

   ```js
   displayMessage();
   ```

   Diese Zeile ruft die Funktion auf, sodass sie sofort ausgeführt wird. Wenn Sie Ihren Code speichern und die Seite im Browser neu laden, erscheint das kleine Meldungsfeld sofort – und nur einmal. Schließlich rufen wir die Funktion auch nur einmal auf.

2. Öffnen Sie nun auf der Beispielseite die Entwicklertools Ihres Browsers, wechseln Sie zur JavaScript-Konsole und geben Sie die Zeile dort erneut ein. Das Meldungsfeld erscheint wieder! Wir haben jetzt also eine wiederverwendbare Funktion, die wir jederzeit aufrufen können.

Wahrscheinlich möchten wir das Meldungsfeld jedoch als Reaktion auf Benutzer- oder Systemaktionen anzeigen. In einer echten Anwendung könnte es beispielsweise erscheinen, wenn neue Daten verfügbar sind, ein Fehler aufgetreten ist, Benutzer ihr Profil löschen möchten („Sind Sie sicher?“) oder ein neuer Kontakt erfolgreich hinzugefügt wurde.

In dieser Demo soll das Meldungsfeld erscheinen, wenn Benutzer auf den Button klicken. Gehen Sie dazu wie folgt vor:

1. Löschen Sie die zuvor hinzugefügte Zeile (`displayMessage();`).
2. Wählen Sie das `<button>`-Element aus und speichern Sie eine Referenz darauf in einer Konstante. Fügen Sie dazu oberhalb der Funktionsdefinition die folgende Zeile ein:

   ```js
   const btn = document.querySelector("button");
   ```

3. Erstellen Sie einen Event Listener für Klicks auf den Button, der unsere Funktion aufruft. Fügen Sie die folgende Zeile nach der Zeile mit `const btn =` ein:

   ```js
   btn.addEventListener("click", displayMessage);
   ```

   Ähnlich wie beim Click-Event-Handler von closeBtn führen wir hier Code aus, wenn auf einen Button geklickt wird. Statt eine anonyme Funktion mit Code aufzurufen, übergeben wir hier jedoch unsere Funktion `displayMessage()` über ihren Namen.

4. Speichern Sie die Datei und laden Sie die Seite neu. Wenn Sie jetzt auf den Button klicken, sollte das Meldungsfeld erscheinen.

Vielleicht fragen Sie sich, warum nach dem Funktionsnamen keine Klammern stehen. Der Grund ist, dass wir die Funktion nicht sofort aufrufen möchten, sondern erst nach einem Klick auf den Button. Wenn Sie die Zeile ändern in

```js example-bad
btn.addEventListener("click", displayMessage());
```

und die Datei speichern und neu laden, sehen Sie, dass das Meldungsfeld ohne Klick auf den Button erscheint! Die Klammern werden in diesem Zusammenhang manchmal als „Funktionsaufrufoperator“ bezeichnet. Sie verwenden sie nur, wenn die Funktion sofort im aktuellen Gültigkeitsbereich ausgeführt werden soll.

Falls Sie das letzte Experiment ausprobiert haben, machen Sie die Änderung rückgängig, bevor Sie fortfahren.

> [!NOTE]
> Wenn Sie weiter mit Funktionen üben möchten, probieren Sie die Scrimba<sup>[_MDN-Lernpartner_](/de/docs/MDN/Writing_guidelines/Learning_content#partner_links_and_embeds)</sup>-Aufgabe [Schreiben Sie Ihre erste Funktion](https://scrimba.com/fullstack-path-c0fullstack/~04h?via=mdn) aus.

## Die Funktion mit Parametern verbessern

Bislang ist die Funktion noch nicht besonders nützlich: Wir möchten nicht jedes Mal dieselbe Standardmeldung anzeigen. Verbessern wir sie, indem wir Parameter hinzufügen, sodass wir sie mit unterschiedlichen Optionen aufrufen können.

1. Ändern Sie zunächst die erste Zeile der Funktion:

   ```js
   function displayMessage() {
   ```

   in:

   ```js
   function displayMessage(msgText, msgType) {
   ```

   Wenn wir die Funktion jetzt aufrufen, können wir in den Klammern zwei Werte übergeben: die Meldung, die im Meldungsfeld angezeigt werden soll, und den Typ der Meldung.

2. Um den ersten Parameter zu verwenden, ändern Sie die folgende Zeile innerhalb Ihrer Funktion:

   ```js
   msg.textContent = "This is a message box";
   ```

   in:

   ```js
   msg.textContent = msgText;
   ```

3. Zuletzt müssen Sie den Funktionsaufruf aktualisieren und einen neuen Meldungstext übergeben. Ändern Sie die folgende Zeile:

   ```js
   btn.addEventListener("click", displayMessage);
   ```

   in diesen Block:

   ```js
   btn.addEventListener("click", () =>
     displayMessage("Woo, this is a different message!"),
   );
   ```

   Wenn wir beim Funktionsaufruf Parameter in Klammern angeben möchten, können wir die Funktion hier nicht direkt übergeben. Wir müssen ihren Aufruf in eine anonyme Funktion setzen, damit er nicht im aktuellen Gültigkeitsbereich sofort ausgeführt wird. Nun erfolgt der Aufruf erst, wenn auf den Button geklickt wird.

4. Laden Sie die Seite neu und probieren Sie den Code noch einmal aus. Er funktioniert weiterhin, aber jetzt können Sie auch die Meldung im Parameter ändern, um unterschiedliche Meldungen im Feld anzuzeigen!

### Ein komplexerer Parameter

Kommen wir zum nächsten Parameter. Dafür ist etwas mehr Arbeit nötig: Je nach Wert von `msgType` soll die Funktion ein anderes Symbol und eine andere Hintergrundfarbe anzeigen.

1. Laden Sie zunächst die für diese Übung benötigten Symbole ([Warnung](https://github.com/mdn/learning-area/blob/main/javascript/building-blocks/functions/icons/warning.png) und [Chat](https://github.com/mdn/learning-area/blob/main/javascript/building-blocks/functions/icons/chat.png)) von GitHub herunter. Klicken Sie jeweils auf die Download-Schaltfläche und speichern Sie die Dateien am selben Ort wie Ihre HTML-Datei.

   > [!NOTE]
   > Die Warnungs- und Chat-Symbole stammten ursprünglich von iconfinder.com und wurden von Nazarrudin Ansyari gestaltet – vielen Dank! (Die ursprünglichen Symbolseiten wurden inzwischen verschoben oder entfernt.)

2. Suchen Sie als Nächstes das CSS in Ihrer HTML-Datei. Wir nehmen einige Änderungen vor, um Platz für die Symbole zu schaffen. Ändern Sie zunächst die Breite von `.msgBox` von:

   ```css
   width: 200px;
   ```

   in:

   ```css
   width: 242px;
   ```

3. Ändern Sie anschließend innerhalb der Regel `.msgBox p { }` die folgende Zeile:

   ```css
   padding: 10px 20px;
   ```

   in:

   ```css
   padding: 10px 20px 10px 82px;
   background-position: 25px center;
   background-repeat: no-repeat;
   ```

4. Jetzt müssen wir unserer Funktion `displayMessage()` Code hinzufügen, der die Symbole anzeigt. Fügen Sie den folgenden Block direkt vor der schließenden geschweiften Klammer (`}`) Ihrer Funktion ein:

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

   Wenn der Parameter `msgType` den Wert `"warning"` hat, wird das Warnsymbol angezeigt und die Hintergrundfarbe des Panels auf Rot gesetzt. Hat er den Wert `"chat"`, wird das Chat-Symbol angezeigt und die Hintergrundfarbe des Panels auf Aquablau gesetzt. Wenn `msgType` nicht angegeben ist oder einen anderen Wert hat, greift der Teil `else { }`: Der Absatz erhält das Standard-Padding, und weder ein Symbol noch eine Hintergrundfarbe für das Panel wird festgelegt. So gibt es einen Standardzustand, wenn kein Wert für `msgType` übergeben wird – der Parameter ist also optional!

5. Testen wir die aktualisierte Funktion. Ändern Sie den Aufruf von `displayMessage()` von:

   ```js
   btn.addEventListener("click", () =>
     displayMessage("Woo, this is a different message!"),
   );
   ```

   in eine dieser Varianten:

   ```js
   btn.addEventListener("click", () =>
     displayMessage("Your inbox is almost full — delete some mails", "warning"),
   );

   btn.addEventListener("click", () =>
     displayMessage("Brian: Hi there, how are you today?", "chat"),
   );
   ```

   Sie sehen, wie nützlich unsere inzwischen gar nicht mehr so kleine Funktion wird.

## Endergebnis

Wenn Sie alle obigen Schritte befolgt haben, sollte Ihr Beispiel so aussehen:

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
  background-color: #eeeeee;
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
  color: #333333;
}

.msgBox button {
  background: none;
  border: none;
  position: absolute;
  top: 0;
  right: 0;
  font-size: 1.1rem;
  color: #aaaaaa;
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
> Falls Sie Schwierigkeiten haben, das Beispiel zum Laufen zu bringen, können Sie Ihren Code mit unserer fertigen Version vergleichen: Klicken Sie im dargestellten Beispiel auf die Play-Schaltfläche, um den vollständigen Quellcode im MDN Playground anzuzeigen.

## Zusammenfassung

Herzlichen Glückwunsch, Sie haben das Ende erreicht! In diesem Artikel haben Sie den gesamten Prozess zum Erstellen einer eigenen, praktisch einsetzbaren Funktion durchlaufen. Mit etwas zusätzlicher Arbeit ließe sie sich in einem echten Projekt verwenden. Im nächsten Artikel schließen wir das Thema Funktionen ab und erklären ein weiteres wichtiges Konzept: Rückgabewerte.

{{PreviousMenuNext("Learn_web_development/Core/Scripting/Functions","Learn_web_development/Core/Scripting/Return_values", "Learn_web_development/Core/Scripting")}}
