---
title: Bauen Sie Ihre eigene Funktion
slug: Learn_web_development/Core/Scripting/Build_your_own_function
l10n:
  sourceCommit: 48d220a8cffdfd5f088f8ca89724a9a92e34d8c0
---

{{PreviousMenuNext("Learn_web_development/Core/Scripting/Functions","Learn_web_development/Core/Scripting/Return_values", "Learn_web_development/Core/Scripting")}}

Nachdem im vorherigen Artikel die wesentlichen Theorien behandelt wurden, bietet dieser Artikel praktische Erfahrungen. Hier haben Sie die Möglichkeit, Ihre eigene, benutzerdefinierte Funktion zu erstellen. Unterwegs erklären wir auch einige nützliche Details zum Umgang mit Funktionen.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>Grundkenntnisse in <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a> und den <a href="/de/docs/Learn_web_development/Core/Styling_basics">Grundlagen von CSS</a>, Vertrautheit mit den Grundlagen von JavaScript-Funktionen, wie im vorherigen Artikel behandelt.</td>
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

## Aktives Lernen: Lassen Sie uns eine Funktion erstellen

Die benutzerdefinierte Funktion, die wir erstellen werden, heißt `displayMessage()`. Sie zeigt ein benutzerdefiniertes Nachrichtenfeld auf einer Webseite an und dient als benutzerdefinierter Ersatz für die im Browser integrierte [`alert()`](/de/docs/Web/API/Window/alert)-Funktion. Wir haben dies schon früher gesehen, aber lassen Sie uns kurz unser Gedächtnis auffrischen. Geben Sie Folgendes in die JavaScript-Konsole Ihres Browsers ein, auf einer beliebigen Seite Ihrer Wahl:

```js
alert("This is a message");
```

Die `alert()`-Funktion nimmt ein einzelnes Argument — den String, der im Alarmfenster angezeigt wird. Versuchen Sie, den String zu variieren, um die Nachricht zu ändern.

Die `alert()`-Funktion ist begrenzt: Sie können die Nachricht ändern, aber es ist nicht einfach, etwas anderes zu variieren, wie die Farbe, das Symbol oder irgendetwas anderes. Wir werden eine erstellen, die mehr Spaß macht.

> [!NOTE]
> Dieses Beispiel sollte in allen modernen Browsern gut funktionieren, aber das Styling könnte in etwas älteren Browsern etwas komisch aussehen. Wir empfehlen, diese Übung in einem modernen Browser wie Firefox, Opera oder Chrome durchzuführen.

## Die grundlegende Funktion

Zunächst wollen wir eine grundlegende Funktion zusammenstellen.

> [!NOTE]
> Für Funktionsbenennungskonventionen sollten Sie die gleichen Regeln wie bei [Variablenbenennungskonventionen](/de/docs/Learn_web_development/Core/Scripting/Variables#an_aside_on_variable_naming_rules) befolgen. Das ist in Ordnung, da Sie sie voneinander unterscheiden können — Funktionsnamen erscheinen mit Klammern dahinter, bei Variablen nicht.

1. Beginnen Sie damit, die Datei [function-start.html](https://github.com/mdn/learning-area/blob/main/javascript/building-blocks/functions/function-start.html) zu öffnen und eine lokale Kopie anzufertigen. Sie werden sehen, dass das HTML einfach ist — der Body enthält nur einen einzigen Button. Wir haben auch einige grundlegende CSS bereitgestellt, um das benutzerdefinierte Nachrichtenfeld zu gestalten, und ein leeres {{htmlelement("script")}}-Element, um unser JavaScript einzufügen.
2. Fügen Sie als Nächstes Folgendes in das `<script>`-Element ein:

   ```js
   function displayMessage() {
     // …
   }
   ```

   Wir beginnen mit dem Schlüsselwort `function`, was bedeutet, dass wir eine Funktion definieren. Darauf folgt der Name, den wir unserer Funktion geben möchten, ein Paar Klammern und ein Paar geschweifte Klammern. Alle Parameter, die wir unserer Funktion geben möchten, gehen in die Klammern, und der Code, der ausgeführt wird, wenn wir die Funktion aufrufen, geht in die geschweiften Klammern.

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

Das ist eine Menge Code zum Durchgehen, also werden wir es Schritt für Schritt erläutern.

Die erste Zeile wählt das {{htmlelement("body")}}-Element aus, indem die [DOM API](/de/docs/Web/API/Document_Object_Model) verwendet wird, um die [`body`](/de/docs/Web/API/Document/body)-Eigenschaft des globalen [`document`](/de/docs/Web/API/Document/body)-Objekts zu erhalten und einer Konstanten namens `body` zuzuweisen, sodass wir später Dinge damit anstellen können:

```js
const body = document.body;
```

Der nächste Abschnitt verwendet eine DOM-API-Funktion namens [`document.createElement()`](/de/docs/Web/API/Document/createElement), um ein {{htmlelement("div")}}-Element zu erstellen und eine Referenz darauf in einer Konstanten namens `panel` zu speichern. Dieses Element wird der äußere Container unseres Nachrichtenfeldes sein.

Wir verwenden dann eine weitere DOM-API-Funktion namens [`Element.setAttribute()`](/de/docs/Web/API/Element/setAttribute), um ein `class`-Attribut mit einem Wert von `msgBox` auf unserem Panel zu setzen. Dies erleichtert das Stylen des Elements — wenn Sie sich das CSS auf der Seite ansehen, werden Sie sehen, dass wir einen `msgBox`-Klassenselektor verwenden, um das Nachrichtenfeld und seinen Inhalt zu gestalten.

Schließlich rufen wir eine DOM-Funktion namens [`Node.appendChild()`](/de/docs/Web/API/Node/appendChild) auf der zuvor gespeicherten `body`-Konstanten auf, die ein Element innerhalb eines anderen als Kind davon einfügt. Wir geben das Panel-`<div>` als das Kind an, das wir innerhalb des `<body>`-Elements einfügen möchten. Wir müssen dies tun, da das erstellte Element nicht einfach auf der Seite erscheint — wir müssen angeben, wo es eingefügt werden soll.

```js
const panel = document.createElement("div");
panel.setAttribute("class", "msgBox");
body.appendChild(panel);
```

Die nächsten zwei Abschnitte verwenden die gleichen `createElement()`- und `appendChild()`-Funktionen, die wir bereits gesehen haben, um zwei neue Elemente zu erstellen — ein {{htmlelement("p")}} und ein {{htmlelement("button")}} — und sie als Kinder des Panel-`<div>` in die Seite einzufügen. Wir verwenden deren [`Node.textContent`](/de/docs/Web/API/Node/textContent)-Eigenschaft — die den Textinhalt eines Elements darstellt —, um eine Nachricht in den Absatz und ein "x" in den Button einzufügen. Dieser Button muss geklickt/aktiviert werden, wenn der Benutzer das Nachrichtenfeld schließen möchte.

```js
const msg = document.createElement("p");
msg.textContent = "This is a message box";
panel.appendChild(msg);

const closeBtn = document.createElement("button");
closeBtn.textContent = "x";
panel.appendChild(closeBtn);
```

Schließlich rufen wir [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) auf, um eine Funktion hinzuzufügen, die aufgerufen wird, wenn der Benutzer den "Schließen"-Button klickt. Der Code entfernt das gesamte Panel von der Seite — um das Nachrichtenfeld zu schließen.

Kurz gesagt, die `addEventListener()`-Methode wird vom Button (oder tatsächlich jedem Element auf der Seite) zur Verfügung gestellt, das eine Funktion und den Namen eines Ereignisses übergeben bekommen kann. In diesem Fall ist der Name des Ereignisses 'click', was bedeutet, dass, wenn der Benutzer den Button anklickt, die Funktion ausgeführt wird. Sie werden viel mehr über Ereignisse in unserem Artikel über [Ereignisse](/de/docs/Learn_web_development/Core/Scripting/Events) lernen. Die Zeile innerhalb der Funktion verwendet die [`Node.removeChild()`](/de/docs/Web/API/Node/removeChild)-DOM-API-Funktion, um anzugeben, dass wir ein bestimmtes Kindelement des HTML-Elements entfernen möchten — in diesem Fall das Panel-`<div>`.

```js
closeBtn.addEventListener("click", () => panel.parentNode.removeChild(panel));
```

Im Wesentlichen erzeugt dieser gesamte Codeblock einen HTML-Block, der so aussieht, und fügt ihn in die Seite ein:

```html
<div class="msgBox">
  <p>This is a message box</p>
  <button>x</button>
</div>
```

Das war eine Menge Code zum Durcharbeiten — machen Sie sich keine Sorgen, wenn Sie sich nicht genau merken, wie jedes einzelne Teil funktioniert! Der Hauptteil, auf den wir uns hier konzentrieren möchten, ist die Struktur und Verwendung der Funktion, aber wir wollten für dieses Beispiel etwas Interessantes zeigen.

## Die Funktion aufrufen

Sie haben jetzt Ihre Funktionsdefinition in Ihr `<script>`-Element geschrieben, aber sie wird in ihrer aktuellen Form nichts tun.

1. Versuchen Sie, die folgende Zeile unterhalb Ihrer Funktion einzufügen, um sie aufzurufen:

   ```js
   displayMessage();
   ```

   Diese Zeile ruft die Funktion auf und lässt sie sofort ausführen. Wenn Sie Ihren Code speichern und im Browser neu laden, sehen Sie, dass das kleine Nachrichtenfeld sofort erscheint, nur ein einziges Mal. Wir rufen es schließlich nur einmal auf.

2. Öffnen Sie jetzt Ihre Browser-Entwicklerwerkzeuge auf der Beispielseite, gehen Sie zur JavaScript-Konsole und geben Sie dort die Zeile erneut ein, Sie werden es wieder erscheinen sehen! Das macht also Spaß — wir haben jetzt eine wiederverwendbare Funktion, die wir jederzeit aufrufen können.

   Aber wir wollen wahrscheinlich, dass sie als Reaktion auf Benutzer- und Systemaktionen erscheint. In einer echten Anwendung würde ein solches Nachrichtenfeld wahrscheinlich als Reaktion auf neue verfügbare Daten oder einen aufgetretenen Fehler aufgerufen werden oder wenn der Benutzer versucht, sein Profil zu löschen ("Sind Sie sicher?") oder wenn der Benutzer einen neuen Kontakt hinzufügt und der Vorgang erfolgreich abgeschlossen wurde, etc.

   In dieser Demo werden wir das Nachrichtenfeld anzeigen, wenn der Benutzer den Button klickt.

3. Löschen Sie die zuvor hinzugefügte Zeile.
4. Wählen Sie als Nächstes den Button aus und speichern Sie eine Referenz darauf in einer Konstanten. Fügen Sie die folgende Zeile zu Ihrem Code hinzu, oberhalb der Funktionsdefinition:

   ```js
   const btn = document.querySelector("button");
   ```

5. Fügen Sie schließlich die folgende Zeile unter der vorherigen hinzu:

   ```js
   btn.addEventListener("click", displayMessage);
   ```

   In ähnlicher Weise wie unser Klick-Event-Handler von `closeBtn` rufen wir hier einen Code als Reaktion auf einen Klick auf einen Button auf. Aber in diesem Fall rufen wir unsere `displayMessage()`-Funktion per Namen auf, anstatt eine anonyme Funktion mit etwas Code zu verwenden.

6. Versuchen Sie, die Seite zu speichern und zu aktualisieren — jetzt sollte das Nachrichtenfeld erscheinen, wenn Sie auf den Button klicken.

Sie fragen sich vielleicht, warum wir die Klammern nach dem Funktionsnamen nicht hinzugefügt haben. Das liegt daran, dass wir die Funktion nicht sofort aufrufen wollen — nur nachdem der Button geklickt wurde. Wenn Sie versuchen, die Zeile zu ändern in:

```js
btn.addEventListener("click", displayMessage());
```

und es speichern und neu laden, werden Sie sehen, dass das Nachrichtenfeld erscheint, ohne dass der Button geklickt wird! Die Klammern in diesem Kontext werden manchmal als "Funktionsaufruf-Operator" bezeichnet. Sie verwenden sie nur, wenn Sie die Funktion sofort im aktuellen Geltungsbereich ausführen möchten. Ebenso wird der Code in der anonymen Funktion nicht sofort ausgeführt, da er sich im Funktionsbereich befindet.

Wenn Sie das letzte Experiment versucht haben, stellen Sie sicher, dass Sie die letzte Änderung rückgängig machen, bevor Sie fortfahren.

## Die Funktion mit Parametern verbessern

In ihrem aktuellen Zustand ist die Funktion noch nicht sehr nützlich — wir wollen nicht jedes Mal dieselbe Standardnachricht anzeigen. Lassen Sie uns unsere Funktion verbessern, indem wir einige Parameter hinzufügen, die es uns erlauben, sie mit einigen unterschiedlichen Optionen aufzurufen.

1. Zuerst einmal aktualisieren Sie die erste Zeile der Funktion:

   ```js
   function displayMessage() {
   ```

   zu:

   ```js
   function displayMessage(msgText, msgType) {
   ```

   Jetzt, wenn wir die Funktion aufrufen, können wir zwei Variablenwerte in den Klammern angeben, um die zu zeigende Nachricht im Nachrichtenfeld und die Art der Nachricht zu spezifizieren.

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

   Wenn wir Parameter in Klammern für die Funktion angeben wollen, die wir aufrufen, können wir sie nicht direkt aufrufen — wir müssen sie in eine anonyme Funktion einfügen, damit sie nicht im unmittelbaren Geltungsbereich ist und daher nicht sofort aufgerufen wird. Jetzt wird sie erst aufgerufen, wenn der Button geklickt wird.

4. Laden Sie den Code erneut und probieren Sie ihn aus — Sie werden sehen, dass er immer noch einwandfrei funktioniert, außer dass Sie jetzt auch die Nachricht im Parameter variieren können, um unterschiedliche Nachrichten im Feld anzuzeigen!

### Ein komplexerer Parameter

Kommen wir zum nächsten Parameter. Dieser wird etwas mehr Arbeit erfordern — wir werden ihn so einstellen, dass die Funktion je nach Einstellung des `msgType`-Parameters ein anderes Symbol und eine andere Hintergrundfarbe anzeigt.

1. Laden Sie zuerst die für diese Übung benötigten Icons herunter ([warning](https://github.com/mdn/learning-area/blob/main/javascript/building-blocks/functions/icons/warning.png) und [chat](https://github.com/mdn/learning-area/blob/main/javascript/building-blocks/functions/icons/chat.png)) von GitHub. Speichern Sie sie in einem neuen Ordner namens `icons` am selben Ort wie Ihre HTML-Datei.

   > [!NOTE]
   > Die Warn- und Chat-Icons wurden ursprünglich auf [iconfinder.com](https://www.iconfinder.com/) gefunden und von [Nazarrudin Ansyari](https://www.iconfinder.com/nazarr) entworfen — Danke! (Die eigentlichen Iconseiten wurden mittlerweile verschoben oder entfernt.)

2. Suchen Sie als Nächstes das CSS in Ihrer HTML-Datei. Wir werden einige Änderungen vornehmen, um Platz für die Icons zu schaffen. Aktualisieren Sie zuerst die `.msgBox`-Breite von:

   ```css
   width: 200px;
   ```

   zu

   ```css
   width: 242px;
   ```

3. Fügen Sie als Nächstes die folgenden Zeilen innerhalb der `.msgBox p { }`-Regel hinzu:

   ```css
   padding-left: 82px;
   background-position: 25px center;
   background-repeat: no-repeat;
   ```

4. Jetzt müssen wir Code zu unserer `displayMessage()`-Funktion hinzufügen, um die Icons anzuzeigen. Fügen Sie den folgenden Block direkt vor der abschließenden geschweiften Klammer (`}`) Ihrer Funktion hinzu:

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

   Hier wird, wenn der `msgType`-Parameter auf `'warning'` eingestellt ist, das Warnsymbol angezeigt und die Hintergrundfarbe des Panels auf Rot gesetzt. Wenn es auf `'chat'` eingestellt ist, wird das Chatsymbol angezeigt und die Hintergrundfarbe des Panels auf Aquablau gesetzt. Wenn der `msgType`-Parameter überhaupt nicht (oder auf etwas anderes) gesetzt ist, tritt der `else { }`-Teil des Codes in Kraft, und dem Absatz wird ein Standardabstand zugewiesen und kein Symbol, ebenso wird keine Hintergrundfarbe des Panels gesetzt. Dies bietet einen Standardzustand, wenn kein `msgType`-Parameter angegeben ist, sodass es ein optionaler Parameter ist!

5. Testen wir unsere aktualisierte Funktion, versuchen Sie, den `displayMessage()`-Aufruf von diesem:

   ```js
   displayMessage("Woo, this is a different message!");
   ```

   zu einem dieser Beispiele zu ändern:

   ```js
   displayMessage("Your inbox is almost full — delete some mails", "warning");
   displayMessage("Brian: Hi there, how are you today?", "chat");
   ```

   Sie können sehen, wie nützlich unsere (inzwischen nicht mehr so kleine) Funktion wird.

> [!NOTE]
> Wenn Sie Probleme haben, das Beispiel zum Laufen zu bringen, können Sie Ihr Code mit der [fertigen Version auf GitHub](https://github.com/mdn/learning-area/blob/main/javascript/building-blocks/functions/function-stage-4.html) vergleichen (siehe auch [die Live-Demo](https://mdn.github.io/learning-area/javascript/building-blocks/functions/function-stage-4.html)), oder Sie können uns um Hilfe bitten.

## Testen Sie Ihr Wissen!

Sie haben das Ende dieses Artikels erreicht, aber können Sie sich an die wichtigsten Informationen erinnern? Sie finden einige weitere Tests, um zu überprüfen, ob Sie diese Informationen behalten haben, bevor Sie fortfahren — siehe [Testen Sie Ihr Wissen: Funktionen](/de/docs/Learn_web_development/Core/Scripting/Test_your_skills/Functions). Diese Tests erfordern Fähigkeiten, die im nächsten Artikel behandelt werden, also wollen Sie vielleicht diesen zuerst lesen, bevor Sie den Test versuchen.

## Zusammenfassung

Glückwunsch zum Erreichen des Endes! Dieser Artikel hat Sie durch den gesamten Prozess geführt, eine praktische benutzerdefinierte Funktion zu erstellen, die mit etwas mehr Arbeit in ein echtes Projekt integriert werden könnte. Im nächsten Artikel erläutern wir ein weiteres wichtiges verwandtes Konzept — Rückgabewerte.

{{PreviousMenuNext("Learn_web_development/Core/Scripting/Functions","Learn_web_development/Core/Scripting/Return_values", "Learn_web_development/Core/Scripting")}}
