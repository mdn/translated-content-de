---
title: Erstellen Sie Ihre eigene Funktion
slug: Learn_web_development/Core/Scripting/Build_your_own_function
l10n:
  sourceCommit: a4ff34eef85ccb654c5c3af7974caba396e8adcf
---

{{PreviousMenuNext("Learn_web_development/Core/Scripting/Functions","Learn_web_development/Core/Scripting/Return_values", "Learn_web_development/Core/Scripting")}}

Nachdem wir im vorherigen Artikel den Großteil der grundlegenden Theorie behandelt haben, geht es hier um praktische Erfahrung. Sie üben, eine eigene Funktion zu erstellen. Dabei erklären wir auch einige nützliche Details zum Umgang mit Funktionen.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>Grundkenntnisse in <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a> und den <a href="/de/docs/Learn_web_development/Core/Styling_basics">Grundlagen von CSS</a> sowie Vertrautheit mit den Grundlagen von JavaScript-Funktionen, die in der vorherigen Lektion behandelt wurden.</td>
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

Die Funktion, die wir erstellen werden, heißt `displayMessage()`. Sie zeigt ein benutzerdefiniertes Meldungsfenster auf einer Webseite an und dient als anpassbarer Ersatz für die integrierte [`alert()`](/de/docs/Web/API/Window/alert)-Funktion des Browsers. Wir haben diese Funktion bereits gesehen, frischen unser Wissen aber kurz auf. Geben Sie Folgendes in die JavaScript-Konsole Ihres Browsers ein, während eine beliebige Seite geöffnet ist:

```js
alert("This is a message");
```

Die Funktion `alert()` erwartet ein einzelnes Argument: die Zeichenkette, die im Hinweisfenster angezeigt wird. Versuchen Sie, die Zeichenkette zu ändern, um eine andere Meldung anzuzeigen.

Die Funktion `alert()` ist eingeschränkt: Sie können zwar die Meldung ändern, aber andere Dinge wie die Farbe oder das Symbol lassen sich nicht ohne Weiteres anpassen. Wir erstellen eine Variante, die mehr Möglichkeiten bietet.

## Die grundlegende Funktion

Beginnen wir mit einer einfachen Funktion.

> [!NOTE]
> Bei der Benennung von Funktionen sollten Sie dieselben Regeln wie bei der [Benennung von Variablen](/de/docs/Learn_web_development/Core/Scripting/Variables#an_aside_on_variable_naming_rules) befolgen. Die Unterscheidung ist dennoch einfach: Auf Funktionsnamen folgen Klammern, auf Variablennamen nicht.

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

   Das HTML ist einfach: Der Body enthält nur ein einziges `<button>`-Element. Außerdem haben wir etwas grundlegendes CSS für die Gestaltung des benutzerdefinierten Meldungsfensters und ein leeres {{htmlelement("script")}}-Element für unser JavaScript bereitgestellt.

2. Fügen Sie als Nächstes Folgendes innerhalb des `<script>`-Elements ein:

   ```js
   function displayMessage() {
     // …
   }
   ```

   Wir beginnen mit dem Schlüsselwort `function`. Es zeigt an, dass wir eine Funktion definieren. Darauf folgen der Name, den wir der Funktion geben möchten, ein Paar runde Klammern und ein Paar geschweifte Klammern. Parameter für die Funktion stehen innerhalb der runden Klammern; der Code, der beim Aufruf der Funktion ausgeführt wird, steht innerhalb der geschweiften Klammern.

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

Die erste Zeile wählt das {{htmlelement("body")}}-Element aus. Dazu greift sie über die [DOM-API](/de/docs/Web/API/Document_Object_Model) auf die [`body`](/de/docs/Web/API/Document/body)-Eigenschaft des globalen [`document`](/de/docs/Web/API/Document)-Objekts zu und weist sie einer Konstante namens `body` zu. So können wir später mit dem Element arbeiten:

```js
const body = document.body;
```

Im nächsten Abschnitt wird eine DOM-API-Funktion namens [`Document.createElement()`](/de/docs/Web/API/Document/createElement) verwendet, um ein {{htmlelement("div")}}-Element zu erstellen und eine Referenz darauf in einer Konstante namens `panel` zu speichern. Dieses Element bildet den äußeren Container unseres Meldungsfensters.

Anschließend verwenden wir eine weitere DOM-API-Funktion namens [`Element.setAttribute()`](/de/docs/Web/API/Element/setAttribute), um für unser Panel ein `class`-Attribut mit dem Wert `msgBox` festzulegen. Dadurch lässt sich das Element leichter gestalten: Im CSS der Seite sehen Sie, dass wir den Klassenselektor `.msgBox` verwenden, um das Meldungsfenster und seinen Inhalt zu gestalten.

Schließlich rufen wir für die zuvor gespeicherte Konstante `body` eine DOM-Funktion namens [`Node.appendChild()`](/de/docs/Web/API/Node/appendChild) auf. Sie fügt ein Element als Kindelement in ein anderes ein. Wir geben das `<div>`-Panel als Kindelement an, das in das `<body>`-Element eingefügt werden soll. Das ist notwendig, weil das erstellte Element nicht von selbst auf der Seite erscheint: Wir müssen angeben, wo es eingefügt werden soll.

```js
const panel = document.createElement("div");
panel.setAttribute("class", "msgBox");
body.appendChild(panel);
```

Die nächsten beiden Abschnitte verwenden die bereits bekannten Funktionen `createElement()` und `appendChild()`, um zwei weitere Elemente zu erstellen – ein {{htmlelement("p")}}- und ein {{htmlelement("button")}}-Element – und sie als Kindelemente des `<div>`-Panels in die Seite einzufügen. Über ihre Eigenschaft [`Node.textContent`](/de/docs/Web/API/Node/textContent), die den Textinhalt eines Elements repräsentiert, fügen wir eine Meldung in den Absatz und ein „x“ in den Button ein. Diesen Button muss die nutzende Person anklicken oder aktivieren, um das Meldungsfenster zu schließen.

```js
const msg = document.createElement("p");
msg.textContent = "This is a message box";
panel.appendChild(msg);

const closeBtn = document.createElement("button");
closeBtn.textContent = "x";
panel.appendChild(closeBtn);
```

Schließlich rufen wir [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) auf, um eine Funktion hinzuzufügen, die ausgeführt wird, wenn die nutzende Person auf den „Schließen“-Button klickt. Der Code entfernt das gesamte Panel von der Seite und schließt damit das Meldungsfenster.

Kurz gesagt kann die Methode `addEventListener()` für jedes Element auf der Seite aufgerufen werden. Üblicherweise erhält sie zwei Argumente: den Namen eines Ereignisses und eine Funktion, die beim Eintreten des Ereignisses ausgeführt werden soll. In diesem Fall lautet der Ereignisname `click`: Wenn die nutzende Person auf den Button klickt, wird die Funktion ausgeführt. Mehr über Ereignisse erfahren Sie in unserem [Artikel über Ereignisse](/de/docs/Learn_web_development/Core/Scripting/Events). Der Code innerhalb der Funktion verwendet die Methode [`removeChild()`](/de/docs/Web/API/Node/removeChild), um ein bestimmtes Kindelement des `<body>`-Elements zu entfernen – in diesem Fall das `<div>`-Panel.

```js
closeBtn.addEventListener("click", () => body.removeChild(panel));
```

Im Wesentlichen erzeugt dieser gesamte Codeblock das folgende HTML und fügt es in die Seite ein:

```html
<div class="msgBox">
  <p>This is a message box</p>
  <button>x</button>
</div>
```

Das war eine Menge Code. Machen Sie sich keine Sorgen, wenn Sie sich jetzt nicht genau merken können, wie jeder Teil funktioniert! Hier möchten wir uns vor allem auf die Struktur und Verwendung der Funktion konzentrieren, aber für dieses Beispiel wollten wir etwas Interessantes zeigen.

## Die Funktion aufrufen

Ihre Funktionsdefinition steht jetzt im `<script>`-Element. So, wie sie ist, bewirkt sie allerdings noch nichts.

1. Fügen Sie unter Ihrer Funktion die folgende Zeile ein, um sie aufzurufen:

   ```js
   displayMessage();
   ```

   Diese Zeile ruft die Funktion auf, sodass sie sofort ausgeführt wird. Wenn Sie Ihren Code speichern und die Seite im Browser neu laden, erscheint das kleine Meldungsfenster sofort – und nur einmal. Schließlich rufen wir die Funktion nur einmal auf.

2. Öffnen Sie nun auf der Beispielseite die Entwicklertools Ihres Browsers, wechseln Sie zur JavaScript-Konsole und geben Sie die Zeile dort erneut ein. Das Meldungsfenster erscheint wieder! Wir haben also eine wiederverwendbare Funktion, die wir jederzeit aufrufen können.

Wahrscheinlich möchten wir das Meldungsfenster aber als Reaktion auf Aktionen von Nutzenden oder des Systems anzeigen. In einer echten Anwendung könnte ein solches Fenster beispielsweise erscheinen, wenn neue Daten verfügbar sind, ein Fehler aufgetreten ist, jemand das eigene Profil löschen möchte („Sind Sie sicher?“) oder das Hinzufügen eines neuen Kontakts erfolgreich abgeschlossen wurde.

In dieser Demo soll das Meldungsfenster erscheinen, wenn die nutzende Person auf den Button klickt. Gehen Sie dazu wie folgt vor:

1. Löschen Sie die zuvor hinzugefügte Zeile (`displayMessage();`).
2. Wählen Sie das `<button>`-Element aus und speichern Sie eine Referenz darauf in einer Konstante. Fügen Sie dazu oberhalb der Funktionsdefinition die folgende Zeile ein:

   ```js
   const btn = document.querySelector("button");
   ```

3. Erstellen Sie einen Event-Listener für Klicks auf den Button, der unsere Funktion aufruft. Fügen Sie die folgende Zeile nach der Zeile mit `const btn =` ein:

   ```js
   btn.addEventListener("click", displayMessage);
   ```

   Ähnlich wie beim `click`-Event-Handler von `closeBtn` führen wir hier Code aus, wenn ein Button angeklickt wird. Statt jedoch eine anonyme Funktion mit Code aufzurufen, verweisen wir hier über ihren Namen auf unsere Funktion `displayMessage()`.

4. Speichern Sie die Datei und laden Sie die Seite neu. Jetzt sollte das Meldungsfenster erscheinen, wenn Sie auf den Button klicken.

Vielleicht fragen Sie sich, warum nach dem Funktionsnamen keine Klammern stehen. Der Grund ist, dass wir die Funktion nicht sofort aufrufen möchten, sondern erst nach einem Klick auf den Button. Wenn Sie die Zeile in Folgendes ändern:

```js example-bad
btn.addEventListener("click", displayMessage());
```

und die Datei speichern und die Seite neu laden, erscheint das Meldungsfenster, ohne dass der Button angeklickt wurde! Die Klammern werden in diesem Zusammenhang manchmal als „Funktionsaufrufoperator“ bezeichnet. Sie verwenden sie nur, wenn Sie die Funktion sofort im aktuellen Gültigkeitsbereich ausführen möchten.

Falls Sie das letzte Experiment ausprobiert haben, machen Sie diese Änderung rückgängig, bevor Sie fortfahren.

> [!NOTE]
> Wenn Sie Funktionen weiter üben möchten, sehen Sie sich die Scrimba<sup>[_MDN-Lernpartner_](/de/docs/MDN/Writing_guidelines/Learning_content#partner_links_and_embeds)</sup>-Übung [Schreiben Sie Ihre erste Funktion](https://scrimba.com/fullstack-path-c0fullstack/~04h?via=mdn) an.

## Die Funktion mit Parametern verbessern

Bisher ist die Funktion noch nicht besonders nützlich: Wir möchten nicht jedes Mal dieselbe Standardmeldung anzeigen. Verbessern wir sie durch Parameter, damit wir sie mit verschiedenen Optionen aufrufen können.

1. Ändern Sie zunächst die erste Zeile der Funktion:

   ```js
   function displayMessage() {
   ```

   in:

   ```js
   function displayMessage(msgText, msgType) {
   ```

   Wenn wir die Funktion aufrufen, können wir nun innerhalb der Klammern zwei Werte angeben: die Meldung, die im Meldungsfenster angezeigt werden soll, und ihren Typ.

2. Um den ersten Parameter zu verwenden, ändern Sie die folgende Zeile innerhalb Ihrer Funktion:

   ```js
   msg.textContent = "This is a message box";
   ```

   in:

   ```js
   msg.textContent = msgText;
   ```

3. Zu guter Letzt müssen Sie den Funktionsaufruf aktualisieren und einen Meldungstext angeben. Ändern Sie die folgende Zeile:

   ```js
   btn.addEventListener("click", displayMessage);
   ```

   in diesen Block:

   ```js
   btn.addEventListener("click", () =>
     displayMessage("Woo, this is a different message!"),
   );
   ```

   Wenn wir beim Aufruf der Funktion Parameter in Klammern angeben möchten, können wir sie hier nicht direkt aufrufen. Stattdessen müssen wir den Aufruf in eine anonyme Funktion setzen, damit er nicht sofort ausgeführt wird. Nun wird `displayMessage()` erst aufgerufen, wenn der Button angeklickt wird.

4. Laden Sie die Seite neu und testen Sie den Code. Er funktioniert weiterhin, aber jetzt können Sie auch den Meldungstext im Parameter ändern, um unterschiedliche Meldungen im Fenster anzuzeigen!

### Ein komplexerer Parameter

Kommen wir zum nächsten Parameter. Dieser erfordert etwas mehr Arbeit: Abhängig vom Wert des Parameters `msgType` soll die Funktion ein anderes Symbol und eine andere Hintergrundfarbe anzeigen.

1. Laden Sie zunächst die für diese Übung benötigten Symbole ([warning](https://github.com/mdn/learning-area/blob/main/javascript/building-blocks/functions/icons/warning.png) und [chat](https://github.com/mdn/learning-area/blob/main/javascript/building-blocks/functions/icons/chat.png)) von GitHub herunter. Klicken Sie jeweils auf den Download-Button und speichern Sie die Dateien am selben Ort wie Ihre HTML-Datei.

   > [!NOTE]
   > Die Symbole für Warnung und Chat stammen ursprünglich von iconfinder.com und wurden von Nazarrudin Ansyari gestaltet – vielen Dank! (Die ursprünglichen Symbolseiten wurden inzwischen verschoben oder entfernt.)

2. Suchen Sie als Nächstes das CSS in Ihrer HTML-Datei. Wir nehmen einige Änderungen vor, um Platz für die Symbole zu schaffen. Ändern Sie zuerst die Breite von `.msgBox` von:

   ```css
   width: 200px;
   ```

   in:

   ```css
   width: 242px;
   ```

3. Ändern Sie als Nächstes innerhalb der Regel `.msgBox p { }` die folgende Zeile:

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
     msg.style.backgroundImage = 'url("warning.png")';
     panel.style.backgroundColor = "red";
   } else if (msgType === "chat") {
     msg.style.backgroundImage = 'url("chat.png")';
     panel.style.backgroundColor = "aqua";
   } else {
     msg.style.paddingLeft = "20px";
   }
   ```

   Wenn der Parameter `msgType` den Wert `"warning"` hat, wird das Warnsymbol angezeigt und die Hintergrundfarbe des Panels auf Rot gesetzt. Bei `"chat"` wird das Chat-Symbol angezeigt und die Hintergrundfarbe des Panels auf Aquablau gesetzt. Wenn `msgType` gar nicht angegeben wird oder einen anderen Wert hat, greift der Teil `else { }`: Der Absatz erhält den standardmäßigen Innenabstand, es wird kein Symbol angezeigt und für das Panel wird keine Hintergrundfarbe festgelegt. So entsteht ein Standardzustand, wenn kein `msgType`-Parameter angegeben wird. Der Parameter ist also optional!

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

Wenn Sie alle Schritte befolgt haben, sollte Ihr Beispiel so dargestellt werden:

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
    msg.style.backgroundImage = 'url("warning.png")';
    panel.style.backgroundColor = "red";
  } else if (msgType === "chat") {
    msg.style.backgroundImage = 'url("chat.png")';
    panel.style.backgroundColor = "aqua";
  } else {
    msg.style.paddingLeft = "20px";
  }
}
```

{{embedlivesample("final-result","100%", "300")}}

> [!NOTE]
> Falls Sie Probleme haben, das Beispiel zum Laufen zu bringen, können Sie Ihren Code mit unserer fertigen Version vergleichen. Klicken Sie im dargestellten Beispiel auf den Play-Button, um den vollständigen Quellcode im MDN Playground anzuzeigen.

## Zusammenfassung

Herzlichen Glückwunsch, Sie haben das Ende erreicht! In diesem Artikel haben Sie den gesamten Prozess zum Erstellen einer eigenen, praktisch einsetzbaren Funktion durchlaufen. Mit etwas zusätzlicher Arbeit ließe sie sich in ein echtes Projekt übernehmen. Im nächsten Artikel schließen wir das Thema Funktionen mit einem weiteren wichtigen Konzept ab: Rückgabewerten.

{{PreviousMenuNext("Learn_web_development/Core/Scripting/Functions","Learn_web_development/Core/Scripting/Return_values", "Learn_web_development/Core/Scripting")}}
