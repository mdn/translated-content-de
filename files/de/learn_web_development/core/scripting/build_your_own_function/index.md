---
title: Erstellen Sie Ihre eigene Funktion
slug: Learn_web_development/Core/Scripting/Build_your_own_function
l10n:
  sourceCommit: 9944f7b12ef1a6aecd54d4b2f0c188a82fdeaaf0
---

{{PreviousMenuNext("Learn_web_development/Core/Scripting/Functions","Learn_web_development/Core/Scripting/Return_values", "Learn_web_development/Core/Scripting")}}

Nachdem im vorherigen Artikel die meisten grundlegenden Theorien behandelt wurden, bietet dieser Artikel praktische Erfahrungen. Hier erhalten Sie die Möglichkeit, Ihre eigene, benutzerdefinierte Funktion zu erstellen. Dabei erklären wir auch einige nützliche Details zu Funktionen.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>Ein Verständnis von <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a> und den <a href="/de/docs/Learn_web_development/Core/Styling_basics">Grundlagen von CSS</a>, sowie Vertrautheit mit den JavaScript-Funktionsgrundlagen, wie sie in der vorherigen Lektion behandelt wurden.</td>
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

## Lassen Sie uns eine Funktion erstellen

Die benutzerdefinierte Funktion, die wir erstellen werden, heißt `displayMessage()`. Sie wird ein benutzerdefiniertes Nachrichtenfeld auf einer Webseite anzeigen und als maßgeschneiderter Ersatz für die im Browser integrierte [`alert()`](/de/docs/Web/API/Window/alert)-Funktion fungieren. Wir haben dies schon einmal gesehen, aber lassen Sie uns unser Gedächtnis auffrischen. Geben Sie Folgendes in die JavaScript-Konsole Ihres Browsers auf einer beliebigen Seite ein:

```js
alert("This is a message");
```

Die `alert()`-Funktion akzeptiert ein einziges Argument — den String, der im Alert-Fenster angezeigt wird. Versuchen Sie, den String zu variieren, um die Nachricht zu ändern.

Die `alert()`-Funktion ist begrenzt: Sie können die Nachricht ändern, aber nicht einfach etwas anderes wie die Farbe oder das Symbol variieren. Wir werden eine Funktion erstellen, die mehr Spaß machen wird.

> [!NOTE]
> Dieses Beispiel sollte in allen modernen Browsern gut funktionieren, aber das Styling könnte in etwas älteren Browsern etwas lustig aussehen. Wir empfehlen, diese Übung in einem modernen Browser wie Firefox, Opera oder Chrome zu machen.

## Die grundlegende Funktion

Fangen wir mit einer grundlegenden Funktion an.

> [!NOTE]
> Für Konventionen zur Benennung von Funktionen sollten Sie denselben Regeln folgen wie bei [Variablennamenskonventionen](/de/docs/Learn_web_development/Core/Scripting/Variables#an_aside_on_variable_naming_rules). Das ist in Ordnung, denn Sie können sie auseinanderhalten — Funktionsnamen erscheinen mit Klammern dahinter, Variablen nicht.

1. Beginnen Sie damit, die [function-start.html](https://github.com/mdn/learning-area/blob/main/javascript/building-blocks/functions/function-start.html)-Datei aufzurufen und eine lokale Kopie zu erstellen. Sie werden sehen, dass das HTML einfach ist — der Body enthält nur einen einzelnen Button. Wir haben auch ein grundlegendes CSS bereitgestellt, um das benutzerdefinierte Nachrichtenfeld zu stylen, und ein leeres {{htmlelement("script")}}-Element, um unser JavaScript einzufügen.
2. Fügen Sie als Nächstes das Folgende innerhalb des `<script>`-Elements hinzu:

   ```js
   function displayMessage() {
     // …
   }
   ```

   Wir beginnen mit dem Schlüsselwort `function`, das bedeutet, dass wir eine Funktion definieren. Darauf folgt der Name, den wir unserer Funktion geben möchten, ein Paar Klammern und ein Satz geschweifter Klammern. Alle Parameter, die wir unserer Funktion geben möchten, gehen in die Klammern, und der Code, der ausgeführt wird, wenn wir die Funktion aufrufen, geht in die geschweiften Klammern.

3. Fügen Sie schließlich den folgenden Code innerhalb der geschweiften Klammern hinzu:

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

Dies ist ziemlich viel Code, den wir durchgehen müssen, also werden wir es Stück für Stück durchgehen.

Die erste Zeile wählt das {{htmlelement("body")}}-Element aus, indem sie die [DOM-API](/de/docs/Web/API/Document_Object_Model) verwendet, um auf die [`body`](/de/docs/Web/API/Document/body)-Eigenschaft des globalen [`document`](/de/docs/Web/API/Document/body)-Objekts zuzugreifen und dieses einer Konstanten namens `body` zuzuweisen, damit wir später Dinge damit tun können:

```js
const body = document.body;
```

Der nächste Abschnitt verwendet eine DOM-API-Funktion namens [`document.createElement()`](/de/docs/Web/API/Document/createElement), um ein {{htmlelement("div")}}-Element zu erstellen und eine Referenz darauf in einer Konstanten namens `panel` zu speichern. Dieses Element wird der äußere Container unseres Nachrichtenfeldes sein.

Wir verwenden dann eine weitere DOM-API-Funktion namens [`Element.setAttribute()`](/de/docs/Web/API/Element/setAttribute), um ein `class`-Attribut auf unserem Panel mit einem Wert von `msgBox` zu setzen. Dies dient dazu, das Styling des Elements zu erleichtern — wenn Sie das CSS auf der Seite ansehen, werden Sie sehen, dass wir einen `.msgBox`-Klassenselektor verwenden, um das Nachrichtenfeld und seinen Inhalt zu stylen.

Schließlich rufen wir eine DOM-Funktion namens [`Node.appendChild()`](/de/docs/Web/API/Node/appendChild) auf der zuvor gespeicherten `body`-Konstanten auf, die ein Element als untergeordnetes Element darin verschachtelt. Wir spezifizieren das Panel `<div>` als das untergeordnete Element, das wir innerhalb des `<body>`-Elements einfügen möchten. Wir müssen dies tun, da das erstellte Element nicht einfach so auf der Seite erscheint — wir müssen angeben, wo wir es platzieren.

```js
const panel = document.createElement("div");
panel.setAttribute("class", "msgBox");
body.appendChild(panel);
```

Die nächsten beiden Abschnitte nutzen dieselben `createElement()`- und `appendChild()`-Funktionen, die wir bereits gesehen haben, um zwei neue Elemente zu erstellen — ein {{htmlelement("p")}}- und ein {{htmlelement("button")}}-Element — und sie als Kinder des Panel-`<div>`-Elements in der Seite einzufügen. Wir verwenden deren [`Node.textContent`](/de/docs/Web/API/Node/textContent)-Eigenschaft — die den Textinhalt eines Elements darstellt — um eine Nachricht in den Absatz einzufügen und ein "x" in den Button. Dieser Button muss angeklickt/aktiviert werden, wenn der Benutzer das Nachrichtenfeld schließen möchte.

```js
const msg = document.createElement("p");
msg.textContent = "This is a message box";
panel.appendChild(msg);

const closeBtn = document.createElement("button");
closeBtn.textContent = "x";
panel.appendChild(closeBtn);
```

Schließlich rufen wir [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) auf, um eine Funktion hinzuzufügen, die aufgerufen wird, wenn der Benutzer den "Schließen"-Button klickt. Der Code wird das gesamte Panel von der Seite löschen — um das Nachrichtenfeld zu schließen.

Kurz gesagt, die `addEventListener()`-Methode wird von dem Button (oder tatsächlich von jedem Element auf der Seite) bereitgestellt, dem eine Funktion und der Name eines Ereignisses übergeben werden können. In diesem Fall ist der Name des Ereignisses 'click', was bedeutet, dass wenn der Benutzer den Button anklickt, die Funktion ausgeführt wird. Sie werden viel mehr über Ereignisse in unserem [Ereignisartikel](/de/docs/Learn_web_development/Core/Scripting/Events) lernen. Die Zeile in der Funktion verwendet die [`Node.removeChild()`](/de/docs/Web/API/Node/removeChild)-DOM-API-Funktion, um anzugeben, dass wir ein bestimmtes Kind-Element des HTML-Elements entfernen möchten — in diesem Fall das Panel `<div>`.

```js
closeBtn.addEventListener("click", () => panel.parentNode.removeChild(panel));
```

Im Grunde generiert dieser ganze Codeblock einen HTML-Block, der so aussieht, und fügt ihn in die Seite ein:

```html
<div class="msgBox">
  <p>This is a message box</p>
  <button>x</button>
</div>
```

Das war eine Menge Code, um durchzugehen — machen Sie sich keine Sorgen, wenn Sie sich jetzt nicht genau merken, wie jeder Teil davon funktioniert! Der Hauptteil, auf den wir uns hier konzentrieren möchten, ist die Struktur und Verwendung der Funktion, aber wir wollten etwas Interessantes für dieses Beispiel zeigen.

## Die Funktion aufrufen

Sie haben nun Ihre Funktionsdefinition in Ihr `<script>`-Element geschrieben, aber sie wird in ihrem jetzigen Zustand nichts tun.

1. Versuchen Sie, die folgende Zeile unter Ihrer Funktion einzufügen, um sie aufzurufen:

   ```js
   displayMessage();
   ```

   Diese Zeile ruft die Funktion auf und lässt sie sofort ausgeführt werden. Wenn Sie Ihren Code speichern und im Browser neu laden, sehen Sie, dass das kleine Nachrichtenfeld sofort erscheint, nur einmal. Schließlich rufen wir es nur einmal auf.

2. Öffnen Sie jetzt die Entwicklertools Ihres Browsers auf der Beispielseite, gehen Sie zur JavaScript-Konsole und geben Sie die Zeile dort erneut ein; Sie werden sehen, dass es erneut erscheint! Das macht Spaß — wir haben jetzt eine wiederverwendbare Funktion, die wir jederzeit aufrufen können.

Wir wollen jedoch wahrscheinlich, dass das Nachrichtenfeld als Reaktion auf Benutzer- und Systemaktionen erscheint. In einer echten Anwendung würde ein solches Nachrichtenfeld wahrscheinlich als Reaktion auf neue verfügbare Daten, einen aufgetretenen Fehler, den Versuch des Benutzers, sein Profil zu löschen ("Sind Sie sich sicher?"), oder den erfolgreichen Abschluss des Hinzufügens eines neuen Kontakts usw. aufgerufen werden.

In dieser Demo lassen wir das Nachrichtenfeld erscheinen, wenn der Benutzer den Button anklickt. Hier sind die Schritte, die Sie befolgen sollten, um dies zu erreichen:

1. Löschen Sie die vorherige Zeile, die Sie hinzugefügt haben (`displayMessage();`).
2. Wählen Sie das `<button>`-Element aus und speichern Sie eine Referenz darauf in einer Konstanten. Fügen Sie die folgende Zeile zu Ihrem Code hinzu, über der Funktionsdefinition:

   ```js
   const btn = document.querySelector("button");
   ```

3. Erstellen Sie einen Ereignis-Listener für Button-Klicks, der unsere Funktion aufruft. Fügen Sie die folgende Zeile nach der `const btn =`-Zeile hinzu:

   ```js
   btn.addEventListener("click", displayMessage);
   ```

   In ähnlicher Weise wie bei unserem `closeBtn`-Click-Ereignishandler rufen wir hier etwas Code als Antwort auf einen Button-Klick auf. Aber in diesem Fall anstelle eines Aufrufs einer anonymen Funktion, die etwas Code enthält, rufen wir unsere `displayMessage()`-Funktion beim Namen auf.

4. Speichern und aktualisieren Sie die Seite und Sie sollten sehen, dass das Nachrichtenfeld erscheint, wenn Sie den Button anklicken.

Sie fragen sich vielleicht, warum wir die Klammern nach dem Funktionsnamen nicht eingeschlossen haben. Das liegt daran, dass wir die Funktion nicht sofort aufrufen wollen — nur nach einem Klick auf den Button. Wenn Sie versuchen, die Zeile zu ändern in

```js
btn.addEventListener("click", displayMessage());
```

und zu speichern und zu laden, werden Sie sehen, dass das Nachrichtenfeld ohne Klick auf den Button erscheint! Die Klammern in diesem Kontext werden manchmal als "Funktionsaufruf-Operator" bezeichnet. Sie verwenden sie nur, wenn Sie die Funktion sofort im aktuellen Gültigkeitsbereich ausführen möchten. In gleichem Maße wird auch der Code innerhalb der anonymen Funktion nicht sofort ausgeführt, da er im Funktionsbereich ist.

Wenn Sie das letzte Experiment versucht haben, machen Sie die letzte Änderung rückgängig, bevor Sie weitermachen.

## Verbesserung der Funktion mit Parametern

In ihrer jetzigen Form ist die Funktion noch nicht sehr nützlich — wir wollen nicht jedes Mal dieselbe Standardnachricht anzeigen. Lassen Sie uns unsere Funktion verbessern, indem wir Parameter hinzufügen, die es uns ermöglichen, sie mit verschiedenen Optionen aufzurufen.

1. Aktualisieren Sie zunächst die erste Zeile der Funktion:

   ```js
   function displayMessage() {
   ```

   zu dieser:

   ```js
   function displayMessage(msgText, msgType) {
   ```

   Jetzt können wir beim Aufrufen der Funktion zwei variable Werte in die Klammern einfügen, um die Nachricht zu bestimmen, die im Nachrichtenfeld angezeigt wird, und den Typ der Nachricht.

2. Um den ersten Parameter zu nutzen, aktualisieren Sie die folgende Zeile in Ihrer Funktion:

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

   Wenn wir Parameter in Klammern für die Funktion angeben möchten, die wir aufrufen, können wir sie nicht direkt aufrufen — wir müssen sie in eine anonyme Funktion setzen, damit sie sich nicht im unmittelbaren Bereich befindet und daher nicht sofort aufgerufen wird. Jetzt wird sie erst aufgerufen, wenn der Button angeklickt wird.

4. Laden und testen Sie den Code erneut und Sie werden sehen, dass er immer noch gut funktioniert, außer dass Sie jetzt auch die Nachricht innerhalb des Parameters variieren können, um verschiedene Nachrichten im Kasten anzuzeigen!

### Ein komplexerer Parameter

Weiter zum nächsten Parameter. Dieser wird etwas mehr Arbeit erfordern — wir werden ihn so einstellen, dass die Funktion je nach dem, worauf der `msgType`-Parameter eingestellt ist, ein anderes Symbol und eine andere Hintergrundfarbe anzeigt.

1. Laden Sie zuerst die für diese Übung benötigten Symbole ([warning](https://github.com/mdn/learning-area/blob/main/javascript/building-blocks/functions/icons/warning.png) und [chat](https://github.com/mdn/learning-area/blob/main/javascript/building-blocks/functions/icons/chat.png)) von GitHub herunter. Speichern Sie sie in einem neuen Ordner namens `icons` am selben Ort wie Ihre HTML-Datei.

   > [!NOTE]
   > Die Warn- und Chat-Symbole wurden ursprünglich auf [iconfinder.com](https://www.iconfinder.com/) gefunden und wurden von [Nazarrudin Ansyari](https://www.iconfinder.com/nazarr) entworfen — Danke! (Die tatsächlichen Icon-Seiten wurden inzwischen verschoben oder entfernt.)

2. Als nächstes finden Sie das CSS in Ihrer HTML-Datei. Wir werden einige Änderungen vornehmen, um Platz für die Symbole zu schaffen. Aktualisieren Sie zuerst die `.msgBox`-Breite von:

   ```css
   width: 200px;
   ```

   zu

   ```css
   width: 242px;
   ```

3. Fügen Sie als nächstes die folgenden Zeilen innerhalb der Regel `.msgBox p { }` hinzu:

   ```css
   padding-left: 82px;
   background-position: 25px center;
   background-repeat: no-repeat;
   ```

4. Nun müssen wir unserem `displayMessage()`-Funktion-Code hinzufügen, um die Anzeige der Symbole zu verwalten. Fügen Sie den folgenden Block direkt vor der schließenden geschweiften Klammer (`}`) Ihrer Funktion hinzu:

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

   Hier wird das Warnsymbol angezeigt und die Hintergrundfarbe des Panels auf Rot gesetzt, wenn der `msgType`-Parameter auf `"warning"` eingestellt ist. Wenn er auf `"chat"` eingestellt ist, wird das Chat-Symbol angezeigt und die Hintergrundfarbe des Panels auf Aqua-Blau gesetzt. Wenn der `msgType`-Parameter überhaupt nicht gesetzt ist (oder auf etwas anderes gesetzt wird), tritt der `else { }`-Teil des Codes in Kraft, und dem Absatz wird eine Standard-Abpolsterung gegeben und kein Symbol angezeigt, auch keine Hintergrundfarbe für das Panel gesetzt. Dies bietet einen Standardzustand, wenn kein `msgType`-Parameter angegeben ist, was bedeutet, dass es sich um einen optionalen Parameter handelt!

5. Lassen Sie uns unsere aktualisierte Funktion testen, versuchen Sie den `displayMessage()`-Aufruf von diesem:

   ```js
   displayMessage("Woo, this is a different message!");
   ```

   zu einem dieser:

   ```js
   displayMessage("Your inbox is almost full — delete some mails", "warning");
   displayMessage("Brian: Hi there, how are you today?", "chat");
   ```

   Sie können sehen, wie nützlich unsere (jetzt nicht mehr so) kleine Funktion wird.

> [!NOTE]
> Wenn Sie Schwierigkeiten haben, das Beispiel zum Laufen zu bringen, zögern Sie nicht, Ihren Code mit der [fertigen Version auf GitHub](https://github.com/mdn/learning-area/blob/main/javascript/building-blocks/functions/function-stage-4.html) zu vergleichen ([sehen Sie es auch live laufen](https://mdn.github.io/learning-area/javascript/building-blocks/functions/function-stage-4.html)), oder fragen Sie uns um Hilfe.

## Zusammenfassung

Herzlichen Glückwunsch zum Erreichen des Endes! Dieser Artikel führte Sie durch den gesamten Prozess des Aufbaus einer praktischen benutzerdefinierten Funktion, die mit ein wenig mehr Arbeit in ein reales Projekt übertragen werden könnte. Im nächsten Artikel werden wir Funktionen abschließen, indem wir ein weiteres essentielles verwandtes Konzept erklären — Rückgabewerte.

{{PreviousMenuNext("Learn_web_development/Core/Scripting/Functions","Learn_web_development/Core/Scripting/Return_values", "Learn_web_development/Core/Scripting")}}
