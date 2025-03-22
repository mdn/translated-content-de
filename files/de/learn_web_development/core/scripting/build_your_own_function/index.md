---
title: Erstellen Sie Ihre eigene Funktion
slug: Learn_web_development/Core/Scripting/Build_your_own_function
l10n:
  sourceCommit: 1b88b4d62918f6f13d1155825e3881f52d90206e
---

{{LearnSidebar}}

{{PreviousMenuNext("Learn_web_development/Core/Scripting/Functions","Learn_web_development/Core/Scripting/Return_values", "Learn_web_development/Core/Scripting")}}

In dem vorherigen Artikel wurden die meisten wesentlichen Theorien behandelt, dieser Artikel bietet praktische Erfahrung. Hier haben Sie die Möglichkeit, Ihre eigene, benutzerdefinierte Funktion zu erstellen. Dabei werden wir auch einige nützliche Details im Umgang mit Funktionen erklären.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>Verständnis von <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a> und den <a href="/de/docs/Learn_web_development/Core/Styling_basics">Grundlagen von CSS</a>, Vertrautheit mit den JavaScript-Funktionsgrundlagen, wie sie in der vorherigen Lektion behandelt wurden.</td>
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

Die benutzerdefinierte Funktion, die wir erstellen werden, heißt `displayMessage()`. Sie zeigt eine benutzerdefinierte Nachrichtenbox auf einer Webseite an und ersetzt die eingebaute [`alert()`](/de/docs/Web/API/Window/alert)-Funktion des Browsers durch eine angepasste Version. Wir haben das schon einmal gesehen, lassen Sie uns jedoch unser Gedächtnis auffrischen. Geben Sie Folgendes in die JavaScript-Konsole Ihres Browsers auf einer beliebigen Seite ein:

```js
alert("This is a message");
```

Die `alert()`-Funktion nimmt ein einzelnes Argument — den String, der in der Alert-Box angezeigt wird. Versuchen Sie, den String zu variieren, um die Nachricht zu ändern.

Die `alert()`-Funktion ist eingeschränkt: Sie können die Nachricht ändern, aber Sie können nicht einfach andere Dinge variieren, wie die Farbe, das Icon oder Ähnliches. Wir werden eine erstellen, die spannender sein wird.

> [!NOTE]
> Dieses Beispiel sollte in allen modernen Browsern gut funktionieren, aber das Styling könnte in etwas älteren Browsern etwas komisch aussehen. Wir empfehlen, diese Übung in einem modernen Browser wie Firefox, Opera oder Chrome durchzuführen.

## Die Grundfunktion

Zunächst einmal lassen Sie uns eine grundlegende Funktion erstellen.

> [!NOTE]
> Für Namenskonventionen von Funktionen sollten Sie die gleichen Regeln wie für [Variablennamenskonventionen](/de/docs/Learn_web_development/Core/Scripting/Variables#an_aside_on_variable_naming_rules) befolgen. Das ist in Ordnung, da Sie sie auseinanderhalten können — Funktionsnamen erscheinen mit Klammern dahinter, Variablen nicht.

1. Beginnen Sie mit dem Zugriff auf die [function-start.html](https://github.com/mdn/learning-area/blob/main/javascript/building-blocks/functions/function-start.html)-Datei und erstellen Sie eine lokale Kopie. Sie werden sehen, dass das HTML einfach ist — der Body enthält nur einen einzelnen Button. Wir haben auch etwas grundlegendes CSS bereitgestellt, um die benutzerdefinierte Nachrichtenbox zu stylen, und ein leeres {{htmlelement("script")}}-Element, um unser JavaScript einzufügen.
2. Fügen Sie als Nächstes Folgendes innerhalb des `<script>`-Elements hinzu:

   ```js-nolint
   function displayMessage() {
     ...
   }
   ```

   Wir beginnen mit dem Schlüsselwort `function`, was bedeutet, dass wir eine Funktion definieren. Darauf folgt der Name, den wir unserer Funktion geben möchten, ein Satz von Klammern und ein Satz von geschweiften Klammern. Alle Parameter, die wir unserer Funktion geben möchten, kommen in die Klammern, und der Code, der ausgeführt wird, wenn wir die Funktion aufrufen, kommt in die geschweiften Klammern.

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

Dies ist eine Menge Code, den wir durchgehen müssen, daher werden wir ihn Schritt für Schritt erläutern.

Die erste Zeile wählt das {{htmlelement("body")}}-Element aus, indem die [DOM API](/de/docs/Web/API/Document_Object_Model) verwendet wird, um die [`body`](/de/docs/Web/API/Document/body)-Eigenschaft des globalen [`document`](/de/docs/Web/API/Document/body)-Objekts abzurufen und sie einer Konstanten namens `body` zuzuweisen, damit wir später darauf zugreifen können:

```js
const body = document.body;
```

Der nächste Abschnitt verwendet eine DOM-API-Funktion namens [`document.createElement()`](/de/docs/Web/API/Document/createElement), um ein {{htmlelement("div")}}-Element zu erstellen und eine Referenz darauf in einer Konstanten namens `panel` zu speichern. Dieses Element wird der äußere Container unserer Nachrichtenbox sein.

Wir verwenden dann eine weitere DOM-API-Funktion namens [`Element.setAttribute()`](/de/docs/Web/API/Element/setAttribute), um ein `class`-Attribut auf unserem Panel mit einem Wert von `msgBox` zu setzen. Dies macht es einfacher, das Element zu stylen — wenn Sie sich das CSS auf der Seite ansehen, werden Sie sehen, dass wir einen `.msgBox`-Klassenselektor verwenden, um die Nachrichtenbox und deren Inhalt zu stylen.

Schließlich rufen wir eine DOM-Funktion namens [`Node.appendChild()`](/de/docs/Web/API/Node/appendChild) auf der vorher gespeicherten `body`-Konstanten auf, welche ein Element in ein anderes als dessen Kind einfügt. Wir spezifizieren das `panel` `<div>` als das Kind, das wir innerhalb des `<body>`-Elements anhängen möchten. Wir müssen dies tun, da das erstellte Element nicht einfach von selbst auf der Seite erscheint — wir müssen spezifizieren, wo es platziert werden soll.

```js
const panel = document.createElement("div");
panel.setAttribute("class", "msgBox");
body.appendChild(panel);
```

Die nächsten zwei Abschnitte verwenden die gleichen `createElement()`- und `appendChild()`-Funktionen, die wir bereits gesehen haben, um zwei neue Elemente zu erstellen — ein {{htmlelement("p")}} und ein {{htmlelement("button")}} — und sie als Kinder des `panel`-`<div>` auf der Seite einzufügen. Wir verwenden deren [`Node.textContent`](/de/docs/Web/API/Node/textContent)-Eigenschaft — die den Textinhalt eines Elements repräsentiert — um eine Nachricht innerhalb des Absatzes einzufügen und ein "x" innerhalb des Buttons. Dieser Button wird das Element sein, das geklickt/aktiviert werden muss, wenn der Benutzer die Nachrichtenbox schließen möchte.

```js
const msg = document.createElement("p");
msg.textContent = "This is a message box";
panel.appendChild(msg);

const closeBtn = document.createElement("button");
closeBtn.textContent = "x";
panel.appendChild(closeBtn);
```

Zum Abschluss rufen wir [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) auf, um eine Funktion hinzuzufügen, die aufgerufen wird, wenn der Benutzer auf den "Schließen"-Button klickt. Der Code wird das gesamte Panel von der Seite löschen — um die Nachrichtenbox zu schließen.

Kurz gesagt, die `addEventListener()`-Methode wird vom Button bereitgestellt (oder tatsächlich von jedem Element auf der Seite), dem eine Funktion und der Name eines Ereignisses übergeben werden können. In diesem Fall ist der Name des Ereignisses 'click', was bedeutet, dass die Funktion ausgeführt wird, wenn der Benutzer auf den Button klickt. Mehr über Ereignisse erfahren Sie in unserem [Artikel über Ereignisse](/de/docs/Learn_web_development/Core/Scripting/Events). Die Zeile innerhalb der Funktion verwendet die [`Node.removeChild()`](/de/docs/Web/API/Node/removeChild)-DOM-API-Funktion, um anzugeben, dass wir ein bestimmtes Kindelement des HTML-Elements entfernen möchten — in diesem Fall das Panel-`<div>`.

```js
closeBtn.addEventListener("click", () => panel.parentNode.removeChild(panel));
```

Grundsätzlich generiert dieser gesamte Codeblock einen HTML-Block, der so aussieht, und fügt ihn in die Seite ein:

```html
<div class="msgBox">
  <p>This is a message box</p>
  <button>x</button>
</div>
```

Das war eine Menge Code, um ihn durchzugehen — keine Sorge, wenn Sie sich nicht genau daran erinnern, wie jeder Teil davon jetzt funktioniert! Der Hauptteil, auf den wir uns hier konzentrieren möchten, ist die Struktur und Verwendung der Funktion, aber wir wollten für dieses Beispiel etwas Interessantes zeigen.

## Die Funktion aufrufen

Ihre Funktionsdefinition ist nun in Ihr `<script>`-Element eingefügt, aber sie wird nichts tun, so wie es ist.

1. Versuchen Sie, die folgende Zeile unterhalb Ihrer Funktion hinzuzufügen, um sie aufzurufen:

   ```js
   displayMessage();
   ```

   Diese Zeile ruft die Funktion auf und bewirkt, dass sie sofort ausgeführt wird. Wenn Sie Ihren Code speichern und im Browser neu laden, sehen Sie, dass die kleine Nachrichtenbox sofort angezeigt wird, aber nur einmal. Wir rufen sie schließlich nur einmal auf.

2. Öffnen Sie jetzt die Entwicklerwerkzeuge Ihres Browsers auf der Beispielseite, gehen Sie zur JavaScript-Konsole und geben Sie die Zeile dort erneut ein, Sie werden sehen, dass sie wieder erscheint! Das ist also lustig — wir haben jetzt eine wiederverwendbare Funktion, die wir jederzeit aufrufen können.

   Aber wir möchten wahrscheinlich, dass sie als Reaktion auf Benutzer- und Systemereignisse erscheint. In einer echten Anwendung würde eine solche Nachrichtenbox wahrscheinlich als Reaktion auf neue verfügbare Daten, einen aufgetretenen Fehler, den Versuch des Benutzers, ihr Profil zu löschen ("sind Sie sich sicher?") oder das Hinzufügen eines neuen Kontakts und das erfolgreiche Abschließen der Operation aufgerufen werden, usw.

   In dieser Demo werden wir die Nachrichtenbox erscheinen lassen, wenn der Benutzer den Button klickt.

3. Löschen Sie die vorherige Zeile, die Sie hinzugefügt haben.
4. Als nächstes wählen wir den Button aus und speichern eine Referenz darauf in einer Konstanten. Fügen Sie die folgende Zeile über die Funktionsdefinition in Ihren Code ein:

   ```js
   const btn = document.querySelector("button");
   ```

5. Fügen Sie abschließend die folgende Zeile unterhalb der vorherigen hinzu:

   ```js
   btn.addEventListener("click", displayMessage);
   ```

   Ähnlich wie bei unserem Click-Event-Handler für `closeBtn` rufen wir hier etwas Code als Reaktion auf einen Klick auf einen Button auf. Aber in diesem Fall rufen wir nicht eine anonyme Funktion mit etwas Code auf, sondern unsere `displayMessage()`-Funktion beim Namen.

6. Versuchen Sie, die Seite zu speichern und zu aktualisieren — jetzt sollten Sie sehen, dass die Nachrichtenbox erscheint, wenn Sie auf den Button klicken.

Sie fragen sich vielleicht, warum wir die Klammern nicht nach dem Funktionsnamen eingefügt haben. Das liegt daran, dass wir nicht möchten, dass die Funktion sofort aufgerufen wird — nur nachdem der Button geklickt wurde. Wenn Sie versuchen, die Zeile zu ändern in

```js
btn.addEventListener("click", displayMessage());
```

und speichern und neu laden, werden Sie sehen, dass die Nachrichtenbox erscheint, ohne dass der Button geklickt wurde! Die Klammern in diesem Kontext werden manchmal als "Funktionsaufruf-Operator" bezeichnet. Sie verwenden sie nur, wenn Sie die Funktion sofort im aktuellen Kontext ausführen möchten. In gleicher Weise wird der Code innerhalb der anonymen Funktion nicht sofort ausgeführt, da er sich im Funktionskontext befindet.

Wenn Sie das letzte Experiment versucht haben, stellen Sie bitte sicher, dass Sie die letzte Änderung rückgängig machen, bevor Sie fortfahren.

## Verbesserungen der Funktion durch Parameter

So wie es jetzt ist, ist die Funktion noch nicht sehr nützlich — wir möchten nicht jedes Mal dieselbe Standardnachricht anzeigen. Lassen Sie uns unsere Funktion verbessern, indem wir einige Parameter hinzufügen, die es uns ermöglichen, sie mit einigen verschiedenen Optionen aufzurufen.

1. Zuerst aktualisieren Sie die erste Zeile der Funktion:

   ```js
   function displayMessage() {
   ```

   zu diesem:

   ```js
   function displayMessage(msgText, msgType) {
   ```

   Jetzt können wir bei Aufruf der Funktion zwei Variablenwerte in den Klammern angeben, um die anzuzeigende Nachricht in der Nachrichtenbox und die Art der Nachricht anzugeben.

2. Um den ersten Parameter zu nutzen, aktualisieren Sie die folgende Zeile in Ihrer Funktion:

   ```js
   msg.textContent = "This is a message box";
   ```

   zu

   ```js
   msg.textContent = msgText;
   ```

3. Zuletzt müssen Sie nun Ihren Funktionsaufruf aktualisieren, um einige aktualisierte Nachrichtentexte einzuschließen. Ändern Sie die folgende Zeile:

   ```js
   btn.addEventListener("click", displayMessage);
   ```

   zu diesem Block:

   ```js
   btn.addEventListener("click", () =>
     displayMessage("Woo, this is a different message!"),
   );
   ```

   Wenn wir Parameter in Klammern für die Funktion angeben möchten, die wir aufrufen, dann können wir die Funktion nicht direkt aufrufen — wir müssen sie in eine anonyme Funktion einfügen, damit sie nicht im unmittelbaren Kontext steht und daher nicht sofort aufgerufen wird. Jetzt wird sie nicht aufgerufen, bis der Button geklickt wird.

4. Laden Sie den Code erneut und probieren Sie ihn aus, und Sie werden sehen, dass er immer noch einwandfrei funktioniert, aber jetzt können Sie auch die Nachricht im Parameter variieren, um unterschiedliche Nachrichten in der Box anzuzeigen!

### Ein komplexerer Parameter

Zum nächsten Parameter. Dieser wird etwas mehr Arbeit erfordern — wir werden es so einstellen, dass je nachdem, was im Parameter `msgType` angegeben ist, die Funktion ein anderes Icon und eine andere Hintergrundfarbe anzeigt.

1. Laden Sie zuerst die für diese Übung benötigten Icons ([warning](https://github.com/mdn/learning-area/blob/main/javascript/building-blocks/functions/icons/warning.png) und [chat](https://github.com/mdn/learning-area/blob/main/javascript/building-blocks/functions/icons/chat.png)) von GitHub herunter. Speichern Sie sie in einem neuen Ordner namens `icons` am gleichen Ort wie Ihre HTML-Datei.

   > [!NOTE]
   > Die Warn- und Chat-Icons wurden ursprünglich auf [iconfinder.com](https://www.iconfinder.com/) gefunden und von [Nazarrudin Ansyari](https://www.iconfinder.com/nazarr) entworfen — Danke! (Die tatsächlichen Icon-Seiten wurden inzwischen verschoben oder entfernt.)

2. Finden Sie als Nächstes das CSS innerhalb Ihrer HTML-Datei. Wir werden ein paar Änderungen vornehmen, um Platz für die Icons zu schaffen. Aktualisieren Sie zuerst die `.msgBox`-Breite von:

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

4. Nun müssen wir Code zu unserer `displayMessage()`-Funktion hinzufügen, um die Icons anzuzeigen. Fügen Sie den folgenden Block direkt über die schließende geschweifte Klammer (`}`) Ihrer Funktion hinzu:

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

   Hier, wenn der `msgType`-Parameter als `'warning'` gesetzt ist, wird das Warn-Icon angezeigt und die Hintergrundfarbe des Panels wird auf Rot gesetzt. Wenn es als `'chat'` gesetzt ist, wird das Chat-Icon angezeigt und die Hintergrundfarbe des Panels wird auf Aqua-Blau gesetzt. Wenn der `msgType`-Parameter überhaupt nicht angegeben ist (oder auf etwas anderes gesetzt ist), dann greift der `else { }` Teil des Codes ein, und der Absatz erhält standardmäßiges Padding und kein Icon, und es wird auch keine Hintergrundfarbe für das Panel gesetzt. Dies bietet einen Standardzustand, wenn kein `msgType`-Parameter angegeben wird, was bedeutet, dass es sich um einen optionalen Parameter handelt!

5. Lassen Sie uns unsere aktualisierte Funktion testen, versuchen Sie den `displayMessage()`-Aufruf von diesem:

   ```js
   displayMessage("Woo, this is a different message!");
   ```

   zu einem dieser zu ändern:

   ```js
   displayMessage("Your inbox is almost full — delete some mails", "warning");
   displayMessage("Brian: Hi there, how are you today?", "chat");
   ```

   Sie können sehen, wie nützlich unsere (jetzt nicht mehr so) kleine Funktion wird.

> [!NOTE]
> Wenn es Ihnen Schwierigkeiten bereitet, das Beispiel zur Funktion zu bringen, zögern Sie nicht, Ihren Code mit der [fertigen Version auf GitHub](https://github.com/mdn/learning-area/blob/main/javascript/building-blocks/functions/function-stage-4.html) (auch [sehen Sie es live laufen](https://mdn.github.io/learning-area/javascript/building-blocks/functions/function-stage-4.html)) zu überprüfen, oder bitten Sie uns um Hilfe.

## Testen Sie Ihre Fähigkeiten!

Sie haben das Ende dieses Artikels erreicht, aber können Sie sich an die wichtigsten Informationen erinnern? Sie können einige weitere Tests finden, um zu überprüfen, ob Sie diese Informationen behalten haben, bevor Sie weitermachen — siehe [Testen Sie Ihre Fähigkeiten: Funktionen](/de/docs/Learn_web_development/Core/Scripting/Test_your_skills:_Functions). Diese Tests erfordern Fähigkeiten, die im nächsten Artikel behandelt werden, daher möchten Sie diesen vielleicht zuerst lesen, bevor Sie den Test versuchen.

## Zusammenfassung

Glückwunsch zum Erreichen des Endes! Dieser Artikel hat Sie durch den gesamten Prozess des Erstellens einer praktischen benutzerdefinierten Funktion geführt, die mit etwas mehr Arbeit in ein echtes Projekt transplantiert werden könnte. Im nächsten Artikel werden wir Funktionen abschließen, indem wir ein weiteres essentielles verwandtes Konzept erklären — Rückgabewerte.

{{PreviousMenuNext("Learn_web_development/Core/Scripting/Functions","Learn_web_development/Core/Scripting/Return_values", "Learn_web_development/Core/Scripting")}}
