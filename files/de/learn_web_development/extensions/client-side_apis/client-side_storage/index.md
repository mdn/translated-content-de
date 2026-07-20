---
title: Client-seitige Speicherung
slug: Learn_web_development/Extensions/Client-side_APIs/Client-side_storage
l10n:
  sourceCommit: b5ee197a87ea18acbc4dd9544efa8c0e46253785
---

{{PreviousMenuNext("Learn_web_development/Extensions/Client-side_APIs/Drawing_graphics", "Learn_web_development/Extensions/Client-side_APIs/Third_party_APIs", "Learn_web_development/Extensions/Client-side_APIs")}}

Moderne Webbrowser unterstützen verschiedene Möglichkeiten, wie Websites Daten auf dem Computer des Benutzers speichern können – mit dessen Erlaubnis – und sie dann bei Bedarf abrufen können. Dadurch können Sie Daten für langfristige Speicherung beibehalten, Websites oder Dokumente für die Offline-Nutzung speichern, benutzerspezifische Einstellungen für Ihre Website speichern und mehr. Dieser Artikel erklärt die grundlegenden Funktionsweisen dieser Methoden.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Vertrautheit mit <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a>, <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS</a> und <a href="/de/docs/Learn_web_development/Core/Scripting">JavaScript</a>, insbesondere <a href="/de/docs/Learn_web_development/Core/Scripting/Object_basics">JavaScript-Objektgrundlagen</a> und grundlegende API-Abdeckung wie <a href="/de/docs/Learn_web_development/Core/Scripting/DOM_scripting">DOM-Scripting</a> und <a href="/de/docs/Learn_web_development/Core/Scripting/Network_requests">Netzwerkanfragen</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Die Konzepte der client-seitigen Speicherung und die Schlüsseltechnologien, die diese ermöglichen — Web Storage API, Cookies, Cache API und die IndexedDB API.</li>
          <li>Schlüsselnutzungsszenarien — Zustand über Reloads hinweg beibehalten, Login- und benutzerpersonalisierte Daten speichern und lokale/offline Nutzung ermöglichen.</li>
          <li>Verwendung von Web Storage für die einfache Speicherung von Schlüssel-Wert-Paaren, gesteuert durch JavaScript.</li>
          <li>Verwendung von IndexedDB zur Speicherung komplexerer, strukturierter Daten.</li>
          <li>Verwendung der Cache API und Service Worker für Offline-Nutzungsfälle.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Client-seitige Speicherung?

An anderer Stelle im MDN-Lernbereich haben wir über den Unterschied zwischen [statischen Seiten](/de/docs/Learn_web_development/Extensions/Server-side/First_steps/Client-Server_overview#static_sites) und [dynamischen Seiten](/de/docs/Learn_web_development/Extensions/Server-side/First_steps/Client-Server_overview#dynamic_sites) gesprochen. Die meisten modernen großen Websites sind dynamisch — sie speichern Daten auf dem Server mittels einer Art von Datenbank (serverseitige Speicherung) und führen [serverseitigen](/de/docs/Learn_web_development/Extensions/Server-side) Code aus, um die benötigten Daten abzurufen, sie in statische Seitentemplates einzufügen und das resultierende HTML dem Client zur Darstellung im Browser des Nutzers zu liefern.

Die client-seitige Speicherung basiert auf ähnlichen Prinzipien, hat aber unterschiedliche Anwendungen. Sie besteht aus JavaScript-APIs, die es ermöglichen, Daten auf dem Client (d.h. auf dem Computer des Nutzers) zu speichern und bei Bedarf abzurufen. Dies hat viele verschiedene Anwendungen, wie zum Beispiel:

- Personalisierung der Website-Präferenzen (z.B. Anzeige benutzerdefinierter Widgets, Farbschema oder Schriftgröße).
- Beibehaltung vorheriger Website-Aktivitäten (z.B. Speicherung des Inhalts eines Warenkorbs aus einer vorherigen Sitzung, Erinnerung daran, ob ein Nutzer bereits eingeloggt war).
- Lokale Speicherung von Daten und Assets, sodass eine Website schneller (und potenziell kostengünstiger) heruntergeladen werden kann oder ohne Netzwerkverbindung nutzbar ist.
- Lokale Speicherung von Dokumenten, die von Web-Anwendungen generiert wurden, zur Offline-Verwendung.

Oft werden client-seitige und serverseitige Speicherung gemeinsam verwendet. Beispielsweise könnten Sie eine Reihe von Musikdateien herunterladen (vielleicht verwendet von einem Webspiel oder einer Musikplayer-Anwendung), diese in einer client-seitigen Datenbank speichern und bei Bedarf abspielen. Der Benutzer müsste die Musikdateien nur einmal herunterladen — bei nachfolgenden Besuchen würden sie aus der Datenbank abgerufen.

> [!NOTE]
> Es gibt Beschränkungen hinsichtlich der Menge an Daten, die Sie mit den APIs zur client-seitigen Speicherung speichern können (möglicherweise sowohl für jede einzelne API als auch kumulativ); das genaue Limit variiert abhängig vom Browser und möglicherweise von den Benutzereinstellungen. Weitere Informationen finden Sie unter [Speicherquoten und Verarbeitungskriterien in Browsern](/de/docs/Web/API/Storage_API/Storage_quotas_and_eviction_criteria).

### Traditionell: Cookies

Das Konzept der client-seitigen Speicherung gibt es schon seit langer Zeit. Seit den frühen Tagen des Webs verwenden Websites [Cookies](/de/docs/Web/HTTP/Guides/Cookies), um Informationen zur Personalisierung der Benutzererfahrung auf Websites zu speichern. Sie sind die früheste Form der client-seitigen Speicherung, die im Web allgemein verwendet wurde.

Heutzutage gibt es einfachere Mechanismen zur Speicherung von client-seitigen Daten, weshalb wir Ihnen in diesem Artikel nicht beibringen, wie man Cookies verwendet. Das bedeutet jedoch nicht, dass Cookies im modernen Web völlig nutzlos sind — sie werden immer noch häufig zur Speicherung von Daten im Zusammenhang mit Benutzerpersonalisierung und -zustand verwendet, z.B. Sitzungs-IDs und Zugriffstoken. Weitere Informationen zu Cookies finden Sie in unserem Artikel [Verwendung von HTTP-Cookies](/de/docs/Web/HTTP/Guides/Cookies).

### Moderne Lösungen: Web Storage und IndexedDB

Die oben genannten „einfacheren“ Funktionen sind wie folgt:

- Die [Web Storage API](/de/docs/Web/API/Web_Storage_API) bietet einen Mechanismus zur Speicherung und zum Abrufen kleinerer Datenobjekte, die aus einem Namen und einem entsprechenden Wert bestehen. Dies ist nützlich, wenn Sie nur einige einfache Daten speichern müssen, wie den Namen des Benutzers, ob er eingeloggt ist, welche Farbe für den Hintergrund des Bildschirms verwendet werden soll usw.
- Die [IndexedDB API](/de/docs/Web/API/IndexedDB_API) bietet dem Browser ein vollständiges Datenbanksystem zur Speicherung komplexer Daten. Diese kann für alles verwendet werden, von vollständigen Sets von Kundendaten bis hin zu komplexen Datentypen wie Audio- oder Videodateien.

Sie erfahren im Folgenden mehr über diese APIs.

### Die Cache API

Die [`Cache`](/de/docs/Web/API/Cache) API ist dafür konzipiert, HTTP-Antworten auf spezifische Anfragen zu speichern, und ist sehr nützlich für Dinge wie das Speichern von Website-Assets offline, sodass die Website anschließend ohne Netzwerkverbindung genutzt werden kann. Cache wird normalerweise in Kombination mit der [Service Worker API](/de/docs/Web/API/Service_Worker_API) verwendet, obwohl es nicht erforderlich ist.

Die Verwendung von Cache und Service Workern ist ein fortgeschrittenes Thema, und wir werden es in diesem Artikel nicht ausführlich behandeln, obwohl wir ein Beispiel im Abschnitt [Offline-Asset-Speicherung](#offline-asset-speicherung) weiter unten zeigen werden.

## Einfache Datenspeicherung — Web Storage

Die [Web Storage API](/de/docs/Web/API/Web_Storage_API) ist sehr einfach zu verwenden — Sie speichern einfache Name/Wert-Paare von Daten (beschränkt auf Zeichenfolgen, Zahlen usw.) und rufen diese bei Bedarf ab.

### Grundsyntax

Wir zeigen Ihnen, wie das geht:

1. Gehen Sie zunächst zu unserer [Web Storage-Vorlage](https://mdn.github.io/learning-area/javascript/apis/client-side-storage/web-storage/index.html) auf GitHub (öffnen Sie diese in einem neuen Tab).
2. Öffnen Sie die JavaScript-Konsole der Entwicklerwerkzeuge Ihres Browsers.
3. Alle Ihre Web Storage-Daten sind in zwei objektähnlichen Strukturen innerhalb des Browsers enthalten: [`sessionStorage`](/de/docs/Web/API/Window/sessionStorage) und [`localStorage`](/de/docs/Web/API/Window/localStorage). Die erste speichert Daten, solange der Browser geöffnet ist (die Daten gehen verloren, wenn der Browser geschlossen wird), und die zweite speichert Daten auch nach dem Schließen und erneutes Öffnen des Browsers. Wir werden in diesem Artikel die zweite verwenden, da sie im Allgemeinen nützlicher ist.

   Die Methode [`Storage.setItem()`](/de/docs/Web/API/Storage/setItem) ermöglicht es Ihnen, einen Datenitem im Speicher zu speichern — sie akzeptiert zwei Parameter: den Namen des Items und seinen Wert. Versuchen Sie, dies in Ihre JavaScript-Konsole einzugeben (ändern Sie den Wert in Ihren eigenen Namen, wenn Sie möchten!):

   ```js
   localStorage.setItem("name", "Chris");
   ```

4. Die Methode [`Storage.getItem()`](/de/docs/Web/API/Storage/getItem) akzeptiert einen Parameter — den Namen eines Datenitems, das Sie abrufen möchten — und gibt den Wert des Items zurück. Geben Sie jetzt diese Zeilen in Ihre JavaScript-Konsole ein:

   ```js
   let myName = localStorage.getItem("name");
   myName;
   ```

   Beim Eingeben der zweiten Zeile sollten Sie sehen, dass die Variable `myName` nun den Wert des `name`-Datenitems enthält.

5. Die Methode [`Storage.removeItem()`](/de/docs/Web/API/Storage/removeItem) akzeptiert einen Parameter — den Namen eines Datenitems, das Sie entfernen möchten — und entfernt dieses Item aus dem Web Storage. Geben Sie die folgenden Zeilen in Ihre JavaScript-Konsole ein:

   ```js
   localStorage.removeItem("name");
   myName = localStorage.getItem("name");
   myName;
   ```

   Die dritte Zeile sollte nun `null` zurückgeben — das `name`-Item existiert nicht mehr im Web Storage.

### Die Daten bleiben erhalten!

Ein Hauptmerkmal der Web Storage ist, dass die Daten zwischen Seitenladevorgängen gespeichert bleiben (und sogar wenn der Browser heruntergefahren wird, im Fall von `localStorage`). Lassen Sie uns dies in Aktion sehen.

1. Öffnen Sie unsere Web Storage-Vorlage erneut, aber diesmal in einem anderen Browser als dem, in dem Sie dieses Tutorial geöffnet haben! Das macht es einfacher damit umzugehen.
2. Geben Sie diese Zeilen in die JavaScript-Konsole des Browsers ein:

   ```js
   localStorage.setItem("name", "Chris");
   let myName = localStorage.getItem("name");
   myName;
   ```

   Sie sollten sehen, dass das `name`-Item zurückgegeben wird.

3. Schließen Sie nun den Browser und öffnen ihn wieder.
4. Geben Sie die folgenden Zeilen erneut ein:

   ```js
   let myName = localStorage.getItem("name");
   myName;
   ```

   Sie sollten sehen, dass der Wert immer noch verfügbar ist, obwohl der Browser geschlossen und dann wieder geöffnet wurde.

### Separate Speicherung für jede Domäne

Es gibt einen separaten Datenspeicher für jede Domäne (jede separate Webadresse, die im Browser geladen wird). Sie werden feststellen, dass, wenn Sie zwei Websites laden (sagen wir google.com und amazon.com) und versuchen, ein Item auf einer Website zu speichern, es für die andere Website nicht verfügbar ist.

Das ist sinnvoll — man kann sich die Sicherheitsprobleme vorstellen, die auftreten würden, wenn Websites die Daten anderer Websites sehen könnten!

### Ein umfangreicheres Beispiel

Lassen Sie uns dieses neu erworbene Wissen anwenden, indem wir ein funktionierendes Beispiel schreiben, um Ihnen einen Eindruck zu geben, wie Web Storage verwendet werden kann. Unser Beispiel ermöglicht es Ihnen, einen Namen einzugeben, nach dem die Seite so aktualisiert wird, dass sie Ihnen eine persönliche Begrüßung gibt. Dieser Zustand wird auch über Seiten-/Browserneustarts hinweg beibehalten, da der Name in der Web Storage gespeichert wird.

Sie finden das Beispiel-HTML unter [personal-greeting.html](https://github.com/mdn/learning-area/blob/main/javascript/apis/client-side-storage/web-storage/personal-greeting.html) — dies enthält eine Website mit einem Header, Inhalt und Footer sowie einem Formular zur Eingabe Ihres Namens.

![Screenshot einer Website, die einen Header, Inhalts- und Footer-Bereich hat. Der Header enthält einen Willkommens-Text auf der linken Seite und einen Button mit der Aufschrift „Vergessen“ auf der rechten Seite. Der Inhaltsbereich hat eine Überschrift, gefolgt von zwei Absätzen mit Blindtext. Der Footer lautet „Copyright nobody. Use the code as you like“.](web-storage-demo.png)

Lassen Sie uns das Beispiel aufbauen, damit Sie verstehen, wie es funktioniert.

1. Erstellen Sie zunächst eine lokale Kopie unserer [personal-greeting.html](https://github.com/mdn/learning-area/blob/main/javascript/apis/client-side-storage/web-storage/personal-greeting.html) Datei in einem neuen Verzeichnis auf Ihrem Computer.
2. Beachten Sie als nächstes, wie unser HTML eine JavaScript-Datei namens `index.js` referenziert, mit einer Zeile wie `<script src="index.js" defer></script>`. Diese müssen wir erstellen und unseren JavaScript-Code hineinschreiben. Erstellen Sie eine `index.js` Datei im selben Verzeichnis wie Ihre HTML-Datei.
3. Wir beginnen damit, Referenzen zu allen HTML-Elementen zu erstellen, die wir in diesem Beispiel manipulieren müssen — wir erstellen sie alle als Konstanten, da diese Referenzen im Lebenszyklus der App nicht geändert werden müssen. Fügen Sie die folgenden Zeilen zu Ihrer JavaScript-Datei hinzu:

   ```js
   // create needed constants
   const rememberDiv = document.querySelector(".remember");
   const forgetDiv = document.querySelector(".forget");
   const form = document.querySelector("form");
   const nameInput = document.querySelector("#entername");
   const submitBtn = document.querySelector("#submitname");
   const forgetBtn = document.querySelector("#forgetname");

   const h1 = document.querySelector("h1");
   const personalGreeting = document.querySelector(".personal-greeting");
   ```

4. Als nächstes müssen wir einen kleinen Event-Listener einfügen, um zu verhindern, dass das Formular tatsächlich gesendet wird, wenn der Submit-Button gedrückt wird, da dies nicht das gewünschte Verhalten ist. Fügen Sie diesen Codeausschnitt unterhalb Ihres vorherigen Codes hinzu:

   ```js
   // Stop the form from submitting when a button is pressed
   form.addEventListener("submit", (e) => e.preventDefault());
   ```

5. Nun müssen wir einen Event-Listener hinzufügen, dessen Handler-Funktion ausgeführt wird, wenn der „Say hello“-Button geklickt wird. Die Kommentare erklären im Detail, was jeder Teil macht, aber im Wesentlichen nehmen wir hier den Namen, den der Benutzer in das Text-Eingabefeld eingegeben hat, und speichern ihn mithilfe von `setItem()` in der Web Storage, dann führen wir eine Funktion namens `nameDisplayCheck()` aus, die die Aktualisierung des tatsächlichen Website-Texts handhabt. Fügen Sie dies am Ende Ihres Codes hinzu:

   ```js
   // run function when the 'Say hello' button is clicked
   submitBtn.addEventListener("click", () => {
     // store the entered name in web storage
     localStorage.setItem("name", nameInput.value);
     // run nameDisplayCheck() to sort out displaying the personalized greetings and updating the form display
     nameDisplayCheck();
   });
   ```

6. An diesem Punkt benötigen wir auch einen Event-Handler, um eine Funktion auszuführen, wenn der „Vergessen“-Button geklickt wird — dieser wird nur angezeigt, nachdem der „Say hello“-Button geklickt wurde (die beiden Formularzustände wechseln hin und her). In dieser Funktion entfernen wir das `name`-Item mithilfe von `removeItem()` aus der Web Storage und führen dann erneut `nameDisplayCheck()` aus, um die Anzeige zu aktualisieren. Fügen Sie dies am Ende hinzu:

   ```js
   // run function when the 'Forget' button is clicked
   forgetBtn.addEventListener("click", () => {
     // Remove the stored name from web storage
     localStorage.removeItem("name");
     // run nameDisplayCheck() to sort out displaying the generic greeting again and updating the form display
     nameDisplayCheck();
   });
   ```

7. Es ist nun an der Zeit, die Funktion `nameDisplayCheck()` selbst zu definieren. Hier prüfen wir, ob das `name`-Item mithilfe von `localStorage.getItem('name')` in der Web Storage gespeichert wurde, als bedingter Test. Wenn der Name gespeichert wurde, wird dieser Aufruf zu `true` ausgewertet; wenn nicht, wird der Aufruf zu `false` ausgewertet. Wenn der Aufruf zu `true` ausgewertet wird, zeigen wir eine personalisierte Begrüßung an, zeigen den „Vergessen“-Teil des Formulars an und verbergen den „Say hello“-Teil des Formulars. Wenn der Aufruf zu `false` ausgewertet wird, zeigen wir eine allgemeine Begrüßung an und tun das Gegenteil. Fügen Sie den folgenden Code erneut am Ende hinzu:

   ```js
   // define the nameDisplayCheck() function
   function nameDisplayCheck() {
     // check whether the 'name' data item is stored in web Storage
     if (localStorage.getItem("name")) {
       // If it is, display personalized greeting
       const name = localStorage.getItem("name");
       h1.textContent = `Welcome, ${name}`;
       personalGreeting.textContent = `Welcome to our website, ${name}! We hope you have fun while you are here.`;
       // hide the 'remember' part of the form and show the 'forget' part
       forgetDiv.style.display = "block";
       rememberDiv.style.display = "none";
     } else {
       // if not, display generic greeting
       h1.textContent = "Welcome to our website ";
       personalGreeting.textContent =
         "Welcome to our website. We hope you have fun while you are here.";
       // hide the 'forget' part of the form and show the 'remember' part
       forgetDiv.style.display = "none";
       rememberDiv.style.display = "block";
     }
   }
   ```

8. Zu guter Letzt müssen wir die Funktion `nameDisplayCheck()` beim Laden der Seite ausführen. Wenn wir dies nicht tun, wird die personalisierte Begrüßung bei Reloads der Seite nicht beibehalten. Fügen Sie das folgende an das Ende Ihres Codes hinzu:

   ```js
   nameDisplayCheck();
   ```

Ihr Beispiel ist fertig — gut gemacht! Es bleibt nur noch übrig, Ihren Code zu speichern und Ihre HTML-Seite in einem Browser zu testen. Sie können unsere [fertige Version hier live sehen](https://mdn.github.io/learning-area/javascript/apis/client-side-storage/web-storage/personal-greeting.html).

> [!NOTE]
> Es gibt ein weiteres, etwas komplexeres Beispiel zum Erkunden unter [Verwenden der Web Storage API](/de/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API).

> [!NOTE]
> In der Zeile `<script src="index.js" defer></script>` des Quellcodes unserer fertigen Version gibt das `defer`-Attribut an, dass der Inhalt des {{htmlelement("script")}}-Elements erst ausgeführt wird, wenn die Seite vollständig geladen wurde.

## Komplexe Datenspeicherung — IndexedDB

Die [IndexedDB API](/de/docs/Web/API/IndexedDB_API) (manchmal abgekürzt als IDB) ist ein komplettes Datenbanksystem, das im Browser verfügbar ist und in dem Sie komplexe, zusammenhängende Daten speichern können, die nicht auf einfache Werte wie Zeichenfolgen oder Zahlen beschränkt sind. Sie können Videos, Bilder und nahezu alles andere in einer IndexedDB-Instanz speichern.

Die IndexedDB API ermöglicht es Ihnen, eine Datenbank zu erstellen und dann darin Objektspeicher zu erstellen. Objektspeicher sind wie Tabellen in einer relationalen Datenbank, und jeder Objektspeicher kann eine Vielzahl von Objekten enthalten. Um mehr über die IndexedDB API zu erfahren, siehe [Verwendung von IndexedDB](/de/docs/Web/API/IndexedDB_API/Using_IndexedDB).

Dies hat jedoch seinen Preis: IndexedDB ist viel komplexer zu verwenden als die Web Storage API. In diesem Abschnitt werden wir nur an der Oberfläche dessen kratzen, was möglich ist, aber wir geben Ihnen genug, um loszulegen.

### Durchlaufen eines Notizspeicher-Beispiels

Hier werden wir Ihnen ein Beispiel näherbringen, das es Ihnen ermöglicht, Notizen in Ihrem Browser zu speichern und sie jederzeit anzusehen und zu löschen, wobei Sie es selbst aufbauen und die grundlegendsten Teile von IDB erklären.

Die App sieht ungefähr so aus:

![IndexDB-Notizen-Demo-Screenshot mit vier Abschnitten. Der erste Abschnitt ist der Header. Der zweite Abschnitt listet alle Notizen auf, die erstellt wurden. Er enthält zwei Notizen, jede mit einem Löschen-Button. Der dritte Abschnitt ist ein Formular mit zwei Eingabefeldern für 'Notiztitel' und 'Notiztext' und einem Button mit der Aufschrift 'Neue Notiz erstellen'. Der untere Abschnitt im Footer zeigt 'Copyright nobody. Use the code as you like'.](idb-demo.png)

Jede Notiz hat einen Titel und einen Body-Text, die einzeln bearbeitbar sind. Der JavaScript-Code, den wir im Folgenden durchgehen, enthält detaillierte Kommentare, um Ihnen das Verständnis zu erleichtern.

### Erste Schritte

1. Erstellen Sie zunächst lokale Kopien unserer [`index.html`](https://github.com/mdn/learning-area/blob/main/javascript/apis/client-side-storage/indexeddb/notes/index.html), [`style.css`](https://github.com/mdn/learning-area/blob/main/javascript/apis/client-side-storage/indexeddb/notes/style.css) und [`index-start.js`](https://github.com/mdn/learning-area/blob/main/javascript/apis/client-side-storage/indexeddb/notes/index-start.js) Dateien in einem neuen Verzeichnis auf Ihrem lokalen Computer.
2. Sehen Sie sich die Dateien an. Sie werden sehen, dass das HTML eine Website mit einem Header und Footer sowie einem Hauptinhaltbereich definiert, der einen Platz zum Anzeigen von Notizen und ein Formular zum Eingeben neuer Notizen in die Datenbank enthält. Das CSS bietet ein wenig Styling, um klarer zu machen, was vor sich geht. Die JavaScript-Datei enthält fünf deklarierte Konstanten, die Referenzen auf das {{htmlelement("ul")}}-Element enthalten, in dem die Notizen angezeigt werden, sowie auf die Titel- und Body-{{htmlelement("input")}}-Elemente, das {{htmlelement("form")}} selbst und den {{htmlelement("button")}}.
3. Benennen Sie Ihre JavaScript-Datei in `index.js` um. Sie sind nun bereit, Code hinzuzufügen.

### Erste Einrichtung der Datenbank

Schauen wir uns nun an, was wir zuerst tun müssen, um tatsächlich eine Datenbank einzurichten.

1. Fügen Sie unterhalb der Konstantendeklarationen die folgenden Zeilen hinzu:

   ```js
   // Create an instance of a db object for us to store the open database in
   let db;
   ```

   Hier deklarieren wir eine Variable namens `db` — diese wird später verwendet, um ein Objekt zu speichern, das unsere Datenbank repräsentiert. Wir werden dies an einigen Stellen verwenden, daher haben wir es hier global deklariert, um es einfacher zu machen.

2. Als nächstes fügen Sie die folgenden Zeilen hinzu:

   ```js
   // Open our database; it is created if it doesn't already exist
   // (see the upgradeneeded handler below)
   const openRequest = window.indexedDB.open("notes_db", 1);
   ```

   Diese Zeile erstellt eine Anfrage zum Öffnen der Version `1` einer Datenbank namens `notes_db`. Wenn diese noch nicht existiert, wird sie von nachfolgendem Code erstellt. Sie werden sehen, dass dieses Anforderungsmuster in IndexedDB sehr oft verwendet wird. Datenbankoperationen nehmen Zeit in Anspruch. Sie wollen nicht, dass der Browser hängt, während Sie auf die Ergebnisse warten, daher sind Datenbankoperationen {{Glossary("asynchronous", "asynchron")}}, was bedeutet, dass sie nicht sofort geschehen, sondern zu einem bestimmten Zeitpunkt in der Zukunft, und Sie benachrichtigt werden, wenn sie abgeschlossen sind.

   Um dies in IndexedDB zu handhaben, erstellen Sie ein Anfrageobjekt (das alles genannt werden kann, was Sie möchten — wir haben es hier `openRequest` genannt, um klar zu machen, wofür es gedacht ist). Sie verwenden dann Ereignishandler, um Code auszuführen, wenn die Anfrage abgeschlossen, fehlgeschlagen usw. ist, was Sie unten in Aktion sehen werden.

   > [!NOTE]
   > Die Versionsnummer ist wichtig. Wenn Sie Ihre Datenbank aktualisieren möchten (zum Beispiel durch Ändern der Tabellenstruktur), müssen Sie Ihren Code erneut mit einer erhöhten Versionsnummer ausführen, einer anderen Schema, das im `upgradeneeded`-Handler angegeben ist (siehe unten), usw. Wir werden das Upgraden von Datenbanken in diesem Tutorial nicht behandeln.

3. Fügen Sie nun die folgenden Ereignishandler direkt unter Ihrer vorherigen Hinzufügung hinzu:

   ```js
   // error handler signifies that the database didn't open successfully
   openRequest.addEventListener("error", () =>
     console.error("Database failed to open"),
   );

   // success handler signifies that the database opened successfully
   openRequest.addEventListener("success", () => {
     console.log("Database opened successfully");

     // Store the opened database object in the db variable. This is used a lot below
     db = openRequest.result;

     // Run the displayData() function to display the notes already in the IDB
     displayData();
   });
   ```

   Der [`error`](/de/docs/Web/API/IDBRequest/error_event) Ereignishandler wird ausgeführt, falls das System mitteilt, dass die Anfrage fehlgeschlagen ist. Dies ermöglicht Ihnen, auf dieses Problem zu reagieren. In unserem Beispiel drucken wir einfach eine Nachricht auf die JavaScript-Konsole.

   Der [`success`](/de/docs/Web/API/IDBRequest/success_event) Ereignishandler wird ausgeführt, wenn die Anfrage erfolgreich zurückkehrt und die Datenbank erfolgreich geöffnet wurde. Wenn dies der Fall ist, wird ein Objekt, das die geöffnete Datenbank repräsentiert, in der [`openRequest.result`](/de/docs/Web/API/IDBRequest/result)-Eigenschaft verfügbar gemacht, sodass wir die Datenbank manipulieren können. Wir speichern dies in der `db`-Variablen, die wir zuvor erstellt haben, zur späteren Verwendung. Wir führen auch eine Funktion namens `displayData()` aus, die die Daten in der Datenbank innerhalb der {{htmlelement("ul")}} anzeigt. Wir führen sie jetzt aus, damit die Notizen, die bereits in der Datenbank sind, angezeigt werden, sobald die Seite geladen wird. Sie werden `displayData()` weiter unten definiert sehen.

4. Schließlich in diesem Abschnitt fügen wir den wahrscheinlich wichtigsten Ereignishandler zur Einrichtung der Datenbank hinzu: [`upgradeneeded`](/de/docs/Web/API/IDBOpenDBRequest/upgradeneeded_event). Dieser Handler wird ausgeführt, wenn die Datenbank noch nicht eingerichtet wurde oder wenn die Datenbank mit einer höheren Versionsnummer als der bestehenden gespeicherten Datenbank geöffnet wird (beim Ausführen eines Upgrades). Fügen Sie den folgenden Code unter Ihrem vorherigen Handler hinzu:

   ```js
   // Set up the database tables if this has not already been done
   openRequest.addEventListener("upgradeneeded", (e) => {
     // Grab a reference to the opened database
     db = e.target.result;

     // Create an objectStore in our database to store notes and an auto-incrementing key
     // An objectStore is similar to a 'table' in a relational database
     const objectStore = db.createObjectStore("notes_os", {
       keyPath: "id",
       autoIncrement: true,
     });

     // Define what data items the objectStore will contain
     objectStore.createIndex("title", "title", { unique: false });
     objectStore.createIndex("body", "body", { unique: false });

     console.log("Database setup complete");
   });
   ```

   Hier definieren wir das Schema (Struktur) unserer Datenbank; das heißt, das Set von Spalten (oder Feldern), die sie enthält. Hier holen wir zunächst eine Referenz zur existierenden Datenbank von der `result`-Eigenschaft des Ziels des Ereignisses ( `e.target.result` ), welches das `request`-Objekt ist. Dies entspricht der Zeile `db = openRequest.result;` im `success`-Ereignishandler, aber wir müssen dies hier separat tun, weil der `upgradeneeded`-Ereignishandler (falls notwendig) vor dem `success`-Ereignishandler ausgeführt wird, was bedeutet, dass der `db`-Wert nicht verfügbar wäre, wenn wir dies nicht tun.

   Wir verwenden dann [`IDBDatabase.createObjectStore()`](/de/docs/Web/API/IDBDatabase/createObjectStore), um einen neuen Objektspeicher innerhalb unserer geöffneten Datenbank namens `notes_os` zu erstellen. Dies entspricht einer einzelnen Tabelle in einem herkömmlichen Datenbanksystem. Wir haben ihn `notes` genannt und auch ein `autoIncrement`-Schlüsselfeld namens `id` angegeben — in jedem neuen Datensatz wird dies automatisch mit einem inkrementierten Wert gefüllt — der Entwickler muss dies nicht ausdrücklich einstellen. Da `id` der Schlüssel ist, wird das Feld `id` verwendet, um Datensätze eindeutig zu identifizieren, z.B. beim Löschen oder Anzeigen eines Datensatzes.

   Wir erstellen außerdem zwei andere Indizes (Felder) mithilfe der Methode [`IDBObjectStore.createIndex()`](/de/docs/Web/API/IDBObjectStore/createIndex): `title` (das einen Titel für jede Notiz enthält) und `body` (das den Body-Text der Notiz enthält).

Mit diesem Datenbankschema eingerichtet werden, bei Beginn mit dem Hinzufügen von Datensätzen in die Datenbank, wird jeder als ein Objekt in etwa diesen Zeilen dargestellt:

```json
{
  "title": "Buy milk",
  "body": "Need both cows milk and soy.",
  "id": 8
}
```

### Daten zur Datenbank hinzufügen

Schauen wir uns nun an, wie wir Datensätze zur Datenbank hinzufügen können. Dies erfolgt mithilfe des Formulars auf unserer Seite.

Fügen Sie unter Ihrem vorherigen Ereignishandler die folgende Zeile hinzu, welche einen `submit` Ereignishandler einrichtet, der eine Funktion namens `addData()` ausführt, wenn das Formular übermittelt wird (wenn der Submit-{{htmlelement("button")}} gedrückt wird, was erfolgreich zur Formularübermittlung führt):

```js
// Create a submit event handler so that when the form is submitted the addData() function is run
form.addEventListener("submit", addData);
```

Lassen Sie uns nun die Funktion `addData()` definieren. Fügen Sie diese unter Ihrer vorherigen Zeile hinzu:

```js
// Define the addData() function
function addData(e) {
  // prevent default - we don't want the form to submit in the conventional way
  e.preventDefault();

  // grab the values entered into the form fields and store them in an object ready for being inserted into the DB
  const newItem = { title: titleInput.value, body: bodyInput.value };

  // open a read/write db transaction, ready for adding the data
  const transaction = db.transaction(["notes_os"], "readwrite");

  // call an object store that's already been added to the database
  const objectStore = transaction.objectStore("notes_os");

  // Make a request to add our newItem object to the object store
  const addRequest = objectStore.add(newItem);

  addRequest.addEventListener("success", () => {
    // Clear the form, ready for adding the next entry
    titleInput.value = "";
    bodyInput.value = "";
  });

  // Report on the success of the transaction completing, when everything is done
  transaction.addEventListener("complete", () => {
    console.log("Transaction completed: database modification finished.");

    // update the display of data to show the newly added item, by running displayData() again.
    displayData();
  });

  transaction.addEventListener("error", () =>
    console.log("Transaction not opened due to error"),
  );
}
```

Dies ist ziemlich komplex; zerlegen wir es:

- Wir führen [`Event.preventDefault()`](/de/docs/Web/API/Event/preventDefault) am Ereignisobjekt aus, um zu verhindern, dass das Formular tatsächlich auf herkömmliche Weise übermittelt wird (dies würde zu einem Seiten-Reload führen und das Erlebnis verderben).
- Wir erstellen ein Objekt, das einen Datensatz repräsentiert, der in die Datenbank eingegeben werden soll, und füllen es mit Werten aus den Formulareingaben. Beachten Sie, dass wir keinen `id`-Wert explizit einfügen müssen — wie wir bereits erklärt haben, wird dies automatisch eingefügt.
- Wir öffnen eine `readwrite`-Transaktion gegen den `notes_os` Objektspeicher mithilfe der Methode [`IDBDatabase.transaction()`](/de/docs/Web/API/IDBDatabase/transaction). Dieses Transaktionsobjekt ermöglicht uns den Zugriff auf den Objektspeicher, damit wir etwas damit tun können, z.B. einen neuen Datensatz hinzufügen.
- Wir greifen auf den Objektspeicher mithilfe der Methode [`IDBTransaction.objectStore()`](/de/docs/Web/API/IDBTransaction/objectStore) zu und speichern das Ergebnis in der Variable `objectStore`.
- Wir fügen den neuen Datensatz mit [`IDBObjectStore.add()`](/de/docs/Web/API/IDBObjectStore/add) zur Datenbank hinzu. Dies erzeugt ein Anfrageobjekt, ähnlich dem, was wir zuvor gesehen haben.
- Wir fügen einer Reihe von Ereignishandlern zum `request` und den `transaction`-Objekten hinzu, um Code zu kritischen Zeitpunkten im Lebenszyklus auszuführen. Sobald die Anfrage erfolgreich war, leeren wir die Formulareingaben, um die Eingabe der nächsten Notiz vorzubereiten. Sobald die Transaktion abgeschlossen ist, führen wir die `displayData()`-Funktion erneut aus, um die Anzeige der Notizen auf der Seite zu aktualisieren.

### Daten anzeigen

Wir haben auf `displayData()` bereits zweimal in unserem Code verwiesen, daher sollten wir es wahrscheinlich definieren. Fügen Sie dies zu Ihrem Code hinzu, unterhalb der vorherigen Funktionsdefinition:

```js
// Define the displayData() function
function displayData() {
  // Here we empty the contents of the list element each time the display is updated
  // If you didn't do this, you'd get duplicates listed each time a new note is added
  while (list.firstChild) {
    list.removeChild(list.firstChild);
  }

  // Open our object store and then get a cursor - which iterates through all the
  // different data items in the store
  const objectStore = db.transaction("notes_os").objectStore("notes_os");
  objectStore.openCursor().addEventListener("success", (e) => {
    // Get a reference to the cursor
    const cursor = e.target.result;

    // If there is still another data item to iterate through, keep running this code
    if (cursor) {
      // Create a list item, h3, and p to put each data item inside when displaying it
      // structure the HTML fragment, and append it inside the list
      const listItem = document.createElement("li");
      const h3 = document.createElement("h3");
      const para = document.createElement("p");

      listItem.appendChild(h3);
      listItem.appendChild(para);
      list.appendChild(listItem);

      // Put the data from the cursor inside the h3 and para
      h3.textContent = cursor.value.title;
      para.textContent = cursor.value.body;

      // Store the ID of the data item inside an attribute on the listItem, so we know
      // which item it corresponds to. This will be useful later when we want to delete items
      listItem.setAttribute("data-note-id", cursor.value.id);

      // Create a button and place it inside each listItem
      const deleteBtn = document.createElement("button");
      listItem.appendChild(deleteBtn);
      deleteBtn.textContent = "Delete";

      // Set an event handler so that when the button is clicked, the deleteItem()
      // function is run
      deleteBtn.addEventListener("click", deleteItem);

      // Iterate to the next item in the cursor
      cursor.continue();
    } else {
      // Again, if list item is empty, display a 'No notes stored' message
      if (!list.firstChild) {
        const listItem = document.createElement("li");
        listItem.textContent = "No notes stored.";
        list.appendChild(listItem);
      }
      // if there are no more cursor items to iterate through, say so
      console.log("Notes all displayed");
    }
  });
}
```

Lassen Sie uns dies aufschlüsseln:

- Zuerst leeren wir den Inhalt des {{htmlelement("ul")}} Elements, bevor wir ihn mit dem aktualisierten Inhalt füllen. Wenn Sie dies nicht tun, würden Sie am Ende eine riesige Liste von duplizierten Inhalten erhalten, die bei jedem Update hinzugefügt würde.
- Als Nächstes holen wir eine Referenz zum `notes_os` Objektspeicher mithilfe von [`IDBDatabase.transaction()`](/de/docs/Web/API/IDBDatabase/transaction) und [`IDBTransaction.objectStore()`](/de/docs/Web/API/IDBTransaction/objectStore) wie wir es in `addData()` gemacht haben, außer dass wir sie hier in einer einzigen Zeile verketten.
- Der nächste Schritt ist die Verwendung der Methode [`IDBObjectStore.openCursor()`](/de/docs/Web/API/IDBObjectStore/openCursor), um eine Anfrage für einen Cursor zu öffnen — ein Konstrukt, das zum Durchlaufen der Datensätze in einem Objektspeicher verwendet werden kann. Wir hängen einen `success`-Ereignishandler ans Ende dieser Zeile, um den Code prägnanter zu machen — wenn der Cursor erfolgreich zurückgegeben wird, wird der Handler ausgeführt.
- Wir holen eine Referenz zum Cursor selbst (ein [`IDBCursor`](/de/docs/Web/API/IDBCursor) Objekt) mithilfe von `const cursor = e.target.result`.
- Dann überprüfen wir, ob der Cursor einen Datensatz aus dem Speicher enthält (`if (cursor){ }`) — wenn ja, erstellen wir ein DOM-Fragment, füllen es mit den Daten des Datensatzes und fügen es in die Seite ein (innerhalb des `<ul>` Elements). Wir fügen auch einen Löschen-Button hinzu, der bei Klick diese Notiz löscht, indem wir die `deleteItem()`-Funktion ausführen, die wir im nächsten Abschnitt ansehen werden.
- Am Ende des `if`-Blocks verwenden wir die Methode [`IDBCursor.continue()`](/de/docs/Web/API/IDBCursor/continue), um den Cursor zum nächsten Datensatz im Speicher vorzurücken und den Inhalt des `if`-Blocks erneut auszuführen. Wenn es gibt einen weiteren Datensatz zum Iterieren, wird er in die Seite eingefügt und `continue()` erneut ausgeführt, und so weiter.
- Wenn keine weiteren Datensätze zum Iterieren vorhanden sind, wird `cursor` `undefined` zurückgeben und daher wird der `else`-Block anstelle des `if`-Blocks ausgeführt. Dieser Block überprüft, ob Notizen im `<ul>` eingefügt wurden — falls nicht, fügt er eine Nachricht hinzu, dass keine Notiz gespeichert wurde.

### Eine Notiz löschen

Wie oben erwähnt, wird eine Notiz gelöscht, wenn der Löschen-Button einer Notiz gedrückt wird. Dies wird durch die `deleteItem()`-Funktion, die folgendermaßen aussieht, erreicht:

```js
// Define the deleteItem() function
function deleteItem(e) {
  // retrieve the name of the task we want to delete. We need
  // to convert it to a number before trying to use it with IDB; IDB key
  // values are type-sensitive.
  const noteId = Number(e.target.parentNode.getAttribute("data-note-id"));

  // open a database transaction and delete the task, finding it using the id we retrieved above
  const transaction = db.transaction(["notes_os"], "readwrite");
  const objectStore = transaction.objectStore("notes_os");
  const deleteRequest = objectStore.delete(noteId);

  // report that the data item has been deleted
  transaction.addEventListener("complete", () => {
    // delete the parent of the button
    // which is the list item, so it is no longer displayed
    e.target.parentNode.parentNode.removeChild(e.target.parentNode);
    console.log(`Note ${noteId} deleted.`);

    // Again, if list item is empty, display a 'No notes stored' message
    if (!list.firstChild) {
      const listItem = document.createElement("li");
      listItem.textContent = "No notes stored.";
      list.appendChild(listItem);
    }
  });
}
```

- Der ersteTeil davon benötigt etwas Erklärung — wir rufen die ID des zu löschenden Datensatzes mithilfe von `Number(e.target.parentNode.getAttribute('data-note-id'))` ab — erinnern Sie sich daran, dass die ID des Datensatzes in einem `data-note-id` Attribut auf der `<li>` gespeichert wurde, als sie zuerst angezeigt wurde. Wir müssen jedoch das Attribut durch das globale eingebaute [`Number()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Number) Objekt übergeben, da es vom Datentyp Zeichenfolge ist und daher von der Datenbank, die eine Zahl erwartet, nicht erkannt würde.
- Wir erhalten dann eine Referenz zum Objektspeicher, indem wir dasselbe Pattern verwenden, das wir zuvor gesehen haben, und verwenden die Methode [`IDBObjectStore.delete()`](/de/docs/Web/API/IDBObjectStore/delete), um den Datensatz aus der Datenbank zu löschen, wobei wir die ID übergeben.
- Wenn die Datenbanktransaktion abgeschlossen ist, löschen wir die Notiz-`<li>` aus dem DOM und führen erneut die Überprüfung durch, ob das `<ul>` jetzt leer ist, und fügen eine Notiz entsprechend ein.

Das ist es! Ihr Beispiel sollte jetzt funktionieren.

Wenn Sie Probleme damit haben, können Sie es gerne [mit unserem Live-Beispiel abgleichen](https://mdn.github.io/learning-area/javascript/apis/client-side-storage/indexeddb/notes/) (sehen Sie auch den [Quellcode](https://github.com/mdn/learning-area/blob/main/javascript/apis/client-side-storage/indexeddb/notes/index.js)).

### Komplexe Datenspeicherung über IndexedDB

Wie wir oben erwähnt haben, kann IndexedDB verwendet werden, um mehr als nur Textzeichenketten zu speichern. Sie können so ziemlich alles speichern, was Sie möchten, einschließlich komplexer Objekte wie Video- oder Image-Blobs. Und es ist nicht viel schwieriger zu erreichen als bei anderen Datentypen.

Um zu demonstrieren, wie man dies tut, haben wir ein weiteres Beispiel namens [IndexedDB-Videothek](https://github.com/mdn/learning-area/tree/main/javascript/apis/client-side-storage/indexeddb/video-store) geschrieben (sehen Sie es auch [hier live laufen](https://mdn.github.io/learning-area/javascript/apis/client-side-storage/indexeddb/video-store/)). Wenn Sie das Beispiel zum ersten Mal ausführen, lädt es alle Videos aus dem Netzwerk herunter, speichert sie in einer IndexedDB-Datenbank und zeigt die Videos dann in der Benutzeroberfläche innerhalb von {{htmlelement("video")}} Elementen an. Wenn Sie es zum zweiten Mal ausführen, findet es die Videos in der Datenbank und ruft sie stattdessen von dort ab, bevor sie angezeigt werden — dies macht nachfolgende Ladungen viel schneller und bandbreitenschonender.

Gehen wir die interessantesten Teile des Beispiels durch. Wir werden nicht alles betrachten — vieles ist ähnlich wie im vorherigen Beispiel, und der Code ist gut kommentiert.

1. In diesem Beispiel haben wir die Namen der abzurufenden Videos in einem Array von Objekten gespeichert:

   ```js
   const videos = [
     { name: "crystal" },
     { name: "elf" },
     { name: "frog" },
     { name: "monster" },
     { name: "pig" },
     { name: "rabbit" },
   ];
   ```

2. Um zu beginnen, führen wir, sobald die Datenbank erfolgreich geöffnet ist, eine `init()`-Funktion aus. Diese durchläuft die verschiedenen Videonamen und versucht, einen Datensatz zu laden, der durch jeden Namen aus der `videos`-Datenbank identifiziert wird.

   Wenn jedes Video in der Datenbank gefunden wird (überprüft, indem geprüft wird, ob `request.result` zu `true` ausgewertet wird — wenn der Datensatz nicht vorhanden ist, wird er `undefined` sein), werden seine Videodateien (gespeichert als Blobs) und der Videoname direkt an die `displayVideo()`-Funktion übergeben, um sie in der Benutzeroberfläche zu platzieren. Wenn nicht, wird der Videoname an die `fetchVideoFromNetwork()`-Funktion übergeben, um, sie ahnen es, das Video aus dem Netzwerk abzurufen.

   ```js
   function init() {
     // Loop through the video names one by one
     for (const video of videos) {
       // Open transaction, get object store, and get() each video by name
       const objectStore = db.transaction("videos_os").objectStore("videos_os");
       const request = objectStore.get(video.name);
       request.addEventListener("success", () => {
         // If the result exists in the database (is not undefined)
         if (request.result) {
           // Grab the videos from IDB and display them using displayVideo()
           console.log("taking videos from IDB");
           displayVideo(
             request.result.mp4,
             request.result.webm,
             request.result.name,
           );
         } else {
           // Fetch the videos from the network
           fetchVideoFromNetwork(video);
         }
       });
     }
   }
   ```

3. Der folgende Ausschnitt stammt aus `fetchVideoFromNetwork()` — hier rufen wir MP4- und WebM-Versionen des Videos mithilfe von zwei separaten [`fetch()`](/de/docs/Web/API/Window/fetch)-Anfragen ab. Wir verwenden dann die Methode [`Response.blob()`](/de/docs/Web/API/Response/blob), um den Body jeder Antwort als Blob zu extrahieren, was uns eine Objektrepräsentation der Videos gibt, die später gespeichert und angezeigt werden kann.

   Wir haben hier ein Problem — diese beiden Anfragen sind beide asynchron, aber wir möchten das Video erst anzeigen oder speichern, wenn beide Versprechen erfüllt wurden. Zum Glück gibt es eine eingebaute Methode, die solche Probleme behandelt — {{jsxref("Promise.all()")}}. Diese nimmt ein Argument — Referenzen auf alle einzelnen Versprechen, die Sie auf Erfüllung prüfen möchten, in einem Array platziert — und gibt ein Versprechen zurück, das erfüllt wird, wenn alle einzelnen Versprechen erfüllt sind.

   Im `then()`-Handler für dieses Versprechen rufen wir die `displayVideo()`-Funktion wie zuvor auf, um die Videos in der Benutzeroberfläche anzuzeigen, dann rufen wir auch die `storeVideo()`-Funktion auf, um diese Videos in der Datenbank zu speichern.

   ```js
   // Fetch the MP4 and WebM versions of the video using the fetch() function,
   // then expose their response bodies as blobs
   const mp4Blob = fetch(`videos/${video.name}.mp4`).then((response) =>
     response.blob(),
   );
   const webmBlob = fetch(`videos/${video.name}.webm`).then((response) =>
     response.blob(),
   );

   // Only run the next code when both promises have fulfilled
   Promise.all([mp4Blob, webmBlob]).then((values) => {
     // display the video fetched from the network with displayVideo()
     displayVideo(values[0], values[1], video.name);
     // store it in the IDB using storeVideo()
     storeVideo(values[0], values[1], video.name);
   });
   ```

4. Lassen Sie uns zuerst auf `storeVideo()` schauen. Dies ist sehr ähnlich dem Muster, das Sie im vorherigen Beispiel zum Hinzufügen von Daten zur Datenbank gesehen haben — wir öffnen eine `readwrite`-Transaktion und holen eine Referenz zu unserem `videos_os` Objektspeicher, erstellen ein Objekt, das den Datensatz zur Datenbank repräsentiert, dann fügen wir es mithilfe von [`IDBObjectStore.add()`](/de/docs/Web/API/IDBObjectStore/add) hinzu.

   ```js
   // Define the storeVideo() function
   function storeVideo(mp4, webm, name) {
     // Open transaction, get object store; make it a readwrite so we can write to the IDB
     const objectStore = db
       .transaction(["videos_os"], "readwrite")
       .objectStore("videos_os");

     // Add the record to the IDB using add()
     const request = objectStore.add({ mp4, webm, name });

     request.addEventListener("success", () =>
       console.log("Record addition attempt finished"),
     );
     request.addEventListener("error", () => console.error(request.error));
   }
   ```

5. Schließlich haben wir `displayVideo()`, das die DOM-Elemente erstellt, die benötigt werden, um das Video in der Benutzeroberfläche einzufügen, und sie dann in die Seite einfügt. Das Interessanteste daran sind die im nächsten Abschnitt gezeigten — um unsere Videoklumpen in einem `<video>`-Element tatsächlich anzuzeigen, müssen wir Objekt-URLs (interne URLs, die auf die im Arbeitsspeicher gespeicherten Videoklumpen zeigen) mithilfe der Methode [`URL.createObjectURL()`](/de/docs/Web/API/URL/createObjectURL_static) erstellen. Sobald das abgeschlossen ist, können wir die Objekt-URLs als Werte der `src`-Attribute unserer {{htmlelement("source")}} Elemente setzen und das funktioniert einwandfrei.

   ```js
   // Define the displayVideo() function
   function displayVideo(mp4Blob, webmBlob, title) {
     // Create object URLs out of the blobs
     const mp4URL = URL.createObjectURL(mp4Blob);
     const webmURL = URL.createObjectURL(webmBlob);

     // Create DOM elements to embed video in the page
     const article = document.createElement("article");
     const h2 = document.createElement("h2");
     h2.textContent = title;
     const video = document.createElement("video");
     video.controls = true;
     const source1 = document.createElement("source");
     source1.src = mp4URL;
     source1.type = "video/mp4";
     const source2 = document.createElement("source");
     source2.src = webmURL;
     source2.type = "video/webm";

     // Embed DOM elements into page
     section.appendChild(article);
     article.appendChild(h2);
     article.appendChild(video);
     video.appendChild(source1);
     video.appendChild(source2);
   }
   ```

## Offline-Asset-Speicherung

Das obige Beispiel zeigt bereits, wie man eine App erstellt, die große Assets in einer IndexedDB-Datenbank speichert, was die Notwendigkeit, sie mehr als einmal herunterzuladen, vermeidet. Dies ist bereits eine große Verbesserung des Benutzererlebnisses, aber es fehlt noch eine Sache — die Haupt-HTML-, CSS- und JavaScript-Dateien müssen immer noch bei jedem Zugriff auf die Site heruntergeladen werden, was bedeutet, dass sie nicht ohne Netzwerkverbindung funktionieren wird.

![Firefox-Offline-Bildschirm mit einer Zeichnung eines Comic-Charakters auf der linken Seite, der einen Zweipin-Stecker in seiner rechten Hand und eine Zweipin-Steckdose in seiner linken Hand hält. Auf der rechten Seite gibt es eine Offline-Modus-Nachricht und einen Button mit der Aufschrift „Erneut versuchen“.](ff-offline.png)

Dies ist, wo [Service Worker](/de/docs/Web/API/Service_Worker_API) und die eng verbundene [Cache API](/de/docs/Web/API/Cache) ins Spiel kommen.

Ein Service Worker ist eine JavaScript-Datei, die bei Zugriff durch einen Browser gegen einen bestimmten Ursprung (Website oder Teil einer Website an einer bestimmten Domäne) registriert wird. Wenn registriert, kann er Seiten kontrollieren, die an diesem Ursprung verfügbar sind. Er tut dies, indem er zwischen einer geladenen Seite und dem Netzwerk sitzt und Netzwerkrequests abfängt, die an diesen Ursprung gerichtet sind.

Wenn er eine Anfrage abfängt, kann er alles gewünschte damit tun (siehe [Ideen für Anwendungsfälle](/de/docs/Web/API/Service_Worker_API#other_use_case_ideas)), aber das klassische Beispiel ist das Speichern von Netzwerkantworten offline und dann diese als Antwort auf eine Anfrage anstelle der Antworten aus dem Netzwerk bereitzustellen. Effektiv ermöglicht es Ihnen, eine Website vollständig offline arbeiten zu lassen.

Die Cache-API ist ein weiteres Client-seitiges Speichermedium mit einem Unterschied — sie ist dafür konzipiert, HTTP-Antworten zu speichern und arbeitet sehr gut mit Service Workern zusammen.

### Ein Service Worker Beispiel

Schauen wir uns ein Beispiel an, um Ihnen eine Vorstellung davon zu geben, wie das aussehen könnte. Wir haben eine weitere Version des Videoarchiv-Beispiels erstellt, das wir im vorherigen Abschnitt gesehen haben — dieses funktioniert identisch, außer dass es auch die HTML-, CSS- und JavaScript-Dateien über die Cache-API über einen Service Worker speichert, sodass das Beispiel offline ausgeführt werden kann!

Sehen Sie sich [IndexedDB-Videothek mit Service Worker live laufend an](https://mdn.github.io/learning-area/javascript/apis/client-side-storage/cache-sw/video-store-offline/) und sehen Sie sich auch den [Quellcode](https://github.com/mdn/learning-area/tree/main/javascript/apis/client-side-storage/cache-sw/video-store-offline) an.

#### Den Service Worker registrieren

Das erste, was zu beachten ist, ist, dass es ein extra Stück Code in der Haupt-JavaScript-Datei gibt (siehe [index.js](https://github.com/mdn/learning-area/blob/main/javascript/apis/client-side-storage/cache-sw/video-store-offline/index.js)). Zuerst führen wir einen Feature-Detection-Test durch, um zu sehen, ob das `serviceWorker`-Mitglied im [`Navigator`](/de/docs/Web/API/Navigator)-Objekt verfügbar ist. Wenn dies true zurückgibt, dann wissen wir, dass zumindest die Grundlagen von Service Workern unterstützt werden. Innerhalb hiervon verwenden wir die Methode [`ServiceWorkerContainer.register()`](/de/docs/Web/API/ServiceWorkerContainer/register), um einen Service Worker, der sich in der `sw.js`-Datei befindet, gegen den Ursprung, an dem er sich befindet, zu registrieren, sodass er in der Lage ist, Seiten im gleichen Verzeichnis wie er oder in Unterverzeichnissen zu kontrollieren. Wenn sein Versprechen erfüllt ist, wird der Service Worker als registriert angesehen.

```js
// Register service worker to control making site work offline
if ("serviceWorker" in navigator) {
  navigator.serviceWorker
    .register(
      "/learning-area/javascript/apis/client-side-storage/cache-sw/video-store-offline/sw.js",
    )
    .then(() => console.log("Service Worker Registered"));
}
```

> [!NOTE]
> Der angegebene Pfad zur `sw.js`-Datei ist relativ zum Seitenursprung, nicht zu der JavaScript-Datei, die den Code enthält. Der Service Worker befindet sich bei `https://mdn.github.io/learning-area/javascript/apis/client-side-storage/cache-sw/video-store-offline/sw.js`. Der Ursprung ist `https://mdn.github.io`, und daher muss der angegebene Pfad `/learning-area/javascript/apis/client-side-storage/cache-sw/video-store-offline/sw.js` sein. Wenn Sie dieses Beispiel auf Ihrem eigenen Server hosten möchten, müssten Sie dies entsprechend ändern. Dies ist etwas verwirrend, aber es muss aus Sicherheitsgründen so funktionieren.

#### Den Service Worker installieren

Beim nächsten Mal, wenn eine Seite unter der Kontrolle des Service Workers abgerufen wird (z.B. wenn das Beispiel neu geladen wird), wird der Service Worker gegen diese Seite installiert, was bedeutet, dass er beginnen wird, sie zu kontrollieren. Beim Auftreten dieser Instanz wird ein Installationsereignis gegen den Service Worker ausgelöst; sie können Code innerhalb des Service Workers selbst schreiben, der auf die Installation reagiert.

Schauen wir uns ein Beispiel an, in der [sw.js](https://github.com/mdn/learning-area/blob/main/javascript/apis/client-side-storage/cache-sw/video-store-offline/sw.js)-Datei (dem Service Worker). Sie werden sehen, dass der Installations-Listener gegen `self` registriert ist. Dieses `self`-Schlüsselwort ist eine Möglichkeit, auf den globalen Gültigkeitsbereich des Service Workers von innerhalb der Service Worker-Datei zu verweisen.

Innerhalb des Installations-Handlers verwenden wir die Methode [`ExtendableEvent.waitUntil()`](/de/docs/Web/API/ExtendableEvent/waitUntil), die im Ereignisobjekt verfügbar ist, um darauf hinzuweisen, dass der Browser die Installation des Service Workers erst nach erfolgreicher Erfüllung des Versprechens abschließen soll.

Hier sehen wir die Cache-API in Aktion. Wir verwenden die Methode [`CacheStorage.open()`](/de/docs/Web/API/CacheStorage/open), um ein neues Cache-Objekt zu öffnen, in dem Antworten gespeichert werden können (ähnlich einem IndexedDB-Objektspeicher). Dieses Versprechen wird mit einem [`Cache`](/de/docs/Web/API/Cache)-Objekt erfüllt, das den `video-store`-Cache repräsentiert. Wir verwenden dann die Methode [`Cache.addAll()`](/de/docs/Web/API/Cache/addAll), um eine Reihe von Assets abzurufen und ihre Antworten in den Cache hinzuzufügen.

```js
self.addEventListener("install", (e) => {
  e.waitUntil(
    caches
      .open("video-store")
      .then((cache) =>
        cache.addAll([
          "/learning-area/javascript/apis/client-side-storage/cache-sw/video-store-offline/",
          "/learning-area/javascript/apis/client-side-storage/cache-sw/video-store-offline/index.html",
          "/learning-area/javascript/apis/client-side-storage/cache-sw/video-store-offline/index.js",
          "/learning-area/javascript/apis/client-side-storage/cache-sw/video-store-offline/style.css",
        ]),
      ),
  );
});
```

Das ist es bis jetzt, die Installation ist abgeschlossen.

#### Auf weitere Anfragen reagieren

Mit dem Service Worker, der registriert und gegen unsere HTML-Seite installiert ist, und den relevanten Assets, die alle unserem Cache hinzugefügt wurden, sind wir fast bereit zu gehen. Es bleibt nur noch eine Sache zu tun: Schreiben Sie ein wenig Code, um auf weitere Netzwerkanfragen zu antworten.

Das ist es, was der zweite Teil des Codes in `sw.js` tut. Wir fügen einen weiteren Listener zum globalen Gültigkeitsbereich des Service Workers hinzu, der die Handler-Funktion ausführt, wenn das `fetch`-Ereignis ausgelöst wird. Dies geschieht, wann immer der Browser eine Anfrage für ein Asset im Verzeichnis, in dem der Service Worker registriert ist, macht.

Innerhalb des Handlers loggen wir zuerst die URL des angeforderten Assets. Wir geben dann eine benutzerdefinierte Antwort auf die Anfrage mithilfe der Methode [`FetchEvent.respondWith()`](/de/docs/Web/API/FetchEvent/respondWith) zurück.

Innerhalb dieses Blocks verwenden wir [`CacheStorage.match()`](/de/docs/Web/API/CacheStorage/match), um zu überprüfen, ob eine übereinstimmende Anfrage (d.h. eine, die die URL übereinstimmt) in einem Cache gefunden werden kann. Dieses Versprechen wird mit der übereinstimmenden Antwort erfüllt, falls eine Übereinstimmung gefunden wird, oder `undefined`, falls keine gefunden wird.

Wenn eine Übereinstimmung gefunden wird, geben wir sie als benutzerdefinierte Antwort zurück. Falls nicht, holen wir die Antwort aus dem Netzwerk und geben stattdessen diese zurück.

```js
self.addEventListener("fetch", (e) => {
  console.log(e.request.url);
  e.respondWith(
    caches.match(e.request).then((response) => response || fetch(e.request)),
  );
});
```

Das war unser Service Worker.
Es gibt noch viel mehr, was man mit ihnen tun kann – für viel mehr Details siehe das [Service Worker Kochbuch](https://github.com/mdn/serviceworker-cookbook).
Vielen Dank an Paul Kinlan für seinen Artikel [Adding a Service Worker and Offline into your Web App](https://developers.google.com/codelabs/pwa-training/pwa03--going-offline#0), der dieses Beispiel inspiriert hat.

#### Das Beispiel offline testen

Um unser [Service Worker Beispiel](https://mdn.github.io/learning-area/javascript/apis/client-side-storage/cache-sw/video-store-offline/) zu testen, müssen Sie es ein paar Mal laden, um sicherzustellen, dass es registriert ist. Sobald dies geschehen ist, können Sie:

- Versuchen Sie, Ihre Netzwerkverbindung zu trennen/Ihr WLAN auszuschalten.
- Wählen Sie _Datei > Offline arbeiten_ wenn Sie Firefox verwenden.
- Gehen Sie zu den Devtools, dann wählen Sie _Application > Service Workers_, dann das _Offline_ Kontrollkästchen aktivieren, wenn Sie Chrome verwenden.

Wenn Sie Ihre Beispielseite erneut aktualisieren, sollten Sie sehen, dass sie weiterhin einwandfrei geladen wird. Alles wird offline gespeichert — die Seiten-Assets in einem Cache und die Videos in einer IndexedDB-Datenbank.

## Zusammenfassung

Das war's vorerst. Wir hoffen, dass Sie unseren Überblick über Technologien zur client-seitigen Speicherung nützlich fanden.

## Siehe auch

- [Web storage API](/de/docs/Web/API/Web_Storage_API)
- [IndexedDB API](/de/docs/Web/API/IndexedDB_API)
- [Cookies](/de/docs/Web/HTTP/Guides/Cookies)
- [Service worker API](/de/docs/Web/API/Service_Worker_API)

{{PreviousMenuNext("Learn_web_development/Extensions/Client-side_APIs/Drawing_graphics", "Learn_web_development/Extensions/Client-side_APIs/Third_party_APIs", "Learn_web_development/Extensions/Client-side_APIs")}}
