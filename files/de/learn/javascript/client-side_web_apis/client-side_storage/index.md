---
title: Client-seitige Speicherung
slug: Learn/JavaScript/Client-side_web_APIs/Client-side_storage
l10n:
  sourceCommit: bc0d0d1ef796435e969f6d65c7e5d3c08f4023aa
---

{{LearnSidebar}}

{{PreviousMenu("Learn/JavaScript/Client-side_web_APIs/Video_and_audio_APIs", "Learn/JavaScript/Client-side_web_APIs")}}

Moderne Webbrowser unterstützen verschiedene Methoden, um Daten auf dem Computer des Benutzers zu speichern — mit der Erlaubnis des Benutzers — und sie bei Bedarf abzurufen. Dies ermöglicht es Ihnen, Daten für die Langzeitspeicherung zu speichern, Websites oder Dokumente für die Offline-Nutzung zu speichern, benutzerspezifische Einstellungen für Ihre Website zu behalten und mehr. Dieser Artikel erklärt die Grundlagen, wie diese Technologien funktionieren.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        JavaScript-Grundkenntnisse (siehe
        <a href="/de/docs/Learn/JavaScript/First_steps">erste Schritte</a>,
        <a href="/de/docs/Learn/JavaScript/Building_blocks"
          >Bausteine</a
        >,
        <a href="/de/docs/Learn/JavaScript/Objects">JavaScript-Objekte</a>),
        die
        <a href="/de/docs/Learn/JavaScript/Client-side_web_APIs/Introduction"
          >Grundlagen von Client-seitigen APIs</a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Lernen, wie Sie Client-seitige Speicher-APIs verwenden, um Anwendungsdaten zu speichern.
      </td>
    </tr>
  </tbody>
</table>

## Client-seitige Speicherung?

An anderer Stelle im MDN-Lernbereich haben wir über den Unterschied zwischen [statischen Seiten](/de/docs/Learn/Server-side/First_steps/Client-Server_overview#static_sites) und [dynamischen Seiten](/de/docs/Learn/Server-side/First_steps/Client-Server_overview#dynamic_sites) gesprochen. Die meisten großen modernen Websites sind dynamisch — sie speichern Daten auf dem Server mithilfe einer Art Datenbank (Server-seitige Speicherung) und führen dann [Server-seitigen](/de/docs/Learn/Server-side) Code aus, um benötigte Daten abzurufen, diese in statische Seitentemplates einzufügen und das resultierende HTML an den Client zu senden, damit es im Browser des Benutzers angezeigt wird.

Die Client-seitige Speicherung funktioniert nach ähnlichen Prinzipien, hat jedoch unterschiedliche Anwendungsfälle. Sie besteht aus JavaScript-APIs, die ermöglichen, Daten auf dem Client (d.h. auf dem Computer des Benutzers) zu speichern und bei Bedarf abzurufen. Dafür gibt es viele verschiedene Anwendungen, wie zum Beispiel:

- Personalisierung von Site-Einstellungen (z.B. Anzeige der von einem Benutzer ausgewählten Widgets, Farbthemen oder Schriftgrößen).
- Beibehaltung vorheriger Site-Aktivitäten (z.B. Speichern des Inhalts eines Einkaufswagens aus einer vorherigen Sitzung, Erinnerung daran, ob ein Benutzer eingeloggt war).
- Lokales Speichern von Daten und Ressourcen, damit eine Website schneller geladen (und potenziell kostengünstiger) wird oder ohne Netzwerkverbindung nutzbar ist.
- Speicherung von Dokumenten, die von Webanwendungen generiert wurden, für die Offline-Nutzung

Häufig werden Client-seitige und Server-seitige Speicherung zusammen eingesetzt. Zum Beispiel könnten Sie eine Reihe von Musikdateien herunterladen (vielleicht genutzt von einem Webspiel oder Musikplayer-Anwendung), sie in einer Client-seitigen Datenbank speichern und bei Bedarf abspielen. Der Benutzer müsste die Musikdateien nur einmal herunterladen — bei späteren Besuchen würden sie aus der Datenbank abgerufen werden.

> [!NOTE]
> Es gibt Grenzen für die Menge an Daten, die Sie mit Client-seitigen Speicher-APIs speichern können (möglicherweise sowohl pro individueller API als auch kumulativ); das genaue Limit variiert je nach Browser und möglicherweise basierend auf Benutzereinstellungen. Weitere Informationen finden Sie unter [Browser storage quotas and eviction criteria](/de/docs/Web/API/Storage_API/Storage_quotas_and_eviction_criteria).

### Old school: Cookies

Das Konzept der Client-seitigen Speicherung gibt es schon lange. Seit den frühen Tagen des Webs haben Sites [Cookies](/de/docs/Web/HTTP/Cookies) verwendet, um Informationen zu speichern, um das Benutzererlebnis auf Websites zu personalisieren. Sie sind die früheste Form der häufig verwendeten Client-seitigen Speicherung im Web.

Heutzutage gibt es einfachere Mechanismen zum Speichern client-seitiger Daten, und deshalb werden wir Ihnen in diesem Artikel nicht beibringen, wie man Cookies verwendet. Dies bedeutet jedoch nicht, dass Cookies komplett nutzlos im modernen Web sind — sie werden immer noch häufig verwendet, um Daten im Zusammenhang mit Benutzerpersonalisierung und Status zu speichern, z.B. Session-IDs und Zugangstoken. Weitere Informationen über Cookies finden Sie in unserem Artikel [Using HTTP cookies](/de/docs/Web/HTTP/Cookies).

### New school: Web Storage und IndexedDB

Die oben erwähnten "einfacheren" Features sind wie folgt:

- Die [Web Storage API](/de/docs/Web/API/Web_Storage_API) bietet einen Mechanismus zum Speichern und Abrufen kleinerer Datenelemente, die aus einem Namen und einem entsprechenden Wert bestehen. Dies ist nützlich, wenn Sie nur einige einfache Daten speichern müssen, wie den Namen des Benutzers, ob er eingeloggt ist, welche Farbe für den Hintergrund der Seite verwendet werden soll usw.
- Die [IndexedDB API](/de/docs/Web/API/IndexedDB_API) bietet dem Browser ein komplettes Datenbanksystem zum Speichern komplexer Daten. Diese kann für alles verwendet werden, von kompletten Kundenakten bis hin zu komplexen Datentypen wie Audio- oder Videodateien.

Sie werden mehr über diese APIs weiter unten lernen.

### Die Cache API

Die [`Cache`](/de/docs/Web/API/Cache) API ist für das Speichern von HTTP-Antworten auf bestimmte Anfragen konzipiert und ist sehr nützlich, um zum Beispiel Website-Ressourcen offline zu speichern, sodass die Seite ohne Netzwerkverbindung verwendet werden kann. Cache wird normalerweise in Kombination mit der [Service Worker API](/de/docs/Web/API/Service_Worker_API) verwendet, obwohl es nicht zwingend erforderlich ist.

Die Verwendung von Cache und Service Workern ist ein fortgeschrittenes Thema, und wir werden es in diesem Artikel nicht im Detail behandeln, obwohl wir ein Beispiel im Abschnitt [Offline asset storage](#offline-speicherung_von_ressourcen) weiter unten zeigen.

## Speicherung einfacher Daten — Web Storage

Die [Web Storage API](/de/docs/Web/API/Web_Storage_API) ist sehr einfach zu verwenden — Sie speichern einfache Name/Wert-Paare von Daten (beschränkt auf Strings, Zahlen, etc.) und rufen diese Werte bei Bedarf ab.

### Grundsyntax

Lassen Sie uns Ihnen zeigen, wie:

1. Öffnen Sie zunächst unsere [Web Storage Blankovorgabe](https://mdn.github.io/learning-area/javascript/apis/client-side-storage/web-storage/index.html) auf GitHub (öffnen Sie dies in einem neuen Tab).
2. Öffnen Sie die JavaScript-Konsole der Entwicklertools Ihres Browsers.
3. Alle Ihre Web Storage-Daten sind in zwei objektähnlichen Strukturen im Browser enthalten: [`sessionStorage`](/de/docs/Web/API/Window/sessionStorage) und [`localStorage`](/de/docs/Web/API/Window/localStorage). Die erste speichert Daten, solange der Browser geöffnet ist (die Daten gehen verloren, wenn der Browser geschlossen wird), und die zweite behält die Daten auch nach dem Schließen und erneuten Öffnen des Browsers. Wir werden die zweite in diesem Artikel verwenden, da sie im Allgemeinen nützlicher ist.

   Die Methode [`Storage.setItem()`](/de/docs/Web/API/Storage/setItem) ermöglicht es Ihnen, ein Datenelement im Speicher zu speichern — sie benötigt zwei Parameter: den Namen des Elements und seinen Wert. Versuchen Sie, dies in Ihre JavaScript-Konsole einzugeben (ändern Sie den Wert in Ihren eigenen Namen, wenn Sie möchten!):

   ```js
   localStorage.setItem("name", "Chris");
   ```

4. Die Methode [`Storage.getItem()`](/de/docs/Web/API/Storage/getItem) nimmt einen Parameter — den Namen eines Datenelements, das Sie abrufen möchten — und gibt den Wert des Elements zurück. Geben Sie jetzt diese Zeilen in Ihre JavaScript-Konsole ein:

   ```js
   let myName = localStorage.getItem("name");
   myName;
   ```

   Beim Eingeben der zweiten Zeile sollten Sie sehen, dass die Variable `myName` nun den Wert des `name`-Datenelements enthält.

5. Die Methode [`Storage.removeItem()`](/de/docs/Web/API/Storage/removeItem) nimmt einen Parameter — den Namen eines Datenelements, das Sie entfernen möchten — und entfernt dieses Element aus dem Web Storage. Geben Sie die folgenden Zeilen in Ihre JavaScript-Konsole ein:

   ```js
   localStorage.removeItem("name");
   myName = localStorage.getItem("name");
   myName;
   ```

   Die dritte Zeile sollte nun `null` zurückgeben — das `name`-Element existiert nicht mehr im Web Storage.

### Die Daten bleiben erhalten!

Ein wichtiges Merkmal von Web Storage ist, dass die Daten zwischen Seitenladungen erhalten bleiben (und sogar, wenn der Browser heruntergefahren wird, im Fall von `localStorage`). Schauen wir uns das in Aktion an.

1. Öffnen Sie unsere Web Storage Blankovorgabe erneut, aber diesmal in einem anderen Browser als dem, den Sie für dieses Tutorial offen haben! Dies wird es einfacher machen, damit umzugehen.
2. Geben Sie diese Zeilen in die JavaScript-Konsole des Browsers ein:

   ```js
   localStorage.setItem("name", "Chris");
   let myName = localStorage.getItem("name");
   myName;
   ```

   Sie sollten das `name`-Element zurückgegeben sehen.

3. Schließen Sie jetzt den Browser und öffnen Sie ihn erneut.
4. Geben Sie die folgenden Zeilen erneut ein:

   ```js
   let myName = localStorage.getItem("name");
   myName;
   ```

   Sie sollten sehen, dass der Wert weiterhin verfügbar ist, obwohl der Browser geschlossen und dann erneut geöffnet wurde.

### Separate Speicherung für jede Domain

Es gibt einen separaten Datenspeicher für jede Domain (jede separate Webadresse, die im Browser geladen wird). Sie werden feststellen, dass, wenn Sie zwei Websites laden (zum Beispiel google.com und amazon.com) und versuchen, ein Element auf einer Website zu speichern, es für die andere Website nicht verfügbar sein wird.

Das macht Sinn — Sie können sich die Sicherheitsprobleme vorstellen, die auftreten würden, wenn Websites die Daten anderer sehen könnten!

### Ein umfassenderes Beispiel

Lassen Sie uns dieses neu erworbene Wissen anwenden, indem wir ein funktionierendes Beispiel schreiben, das Ihnen eine Vorstellung davon gibt, wie Web Storage verwendet werden kann. Unser Beispiel ermöglicht es Ihnen, einen Namen einzugeben, nach dem die Seite aktualisiert wird, um Ihnen eine personalisierte Begrüßung anzuzeigen. Dieser Zustand wird auch über Seiten-/Browser-Neuladevorgänge hinweg beibehalten, da der Name im Web Storage gespeichert wird.

Sie finden das Beispiel-HTML unter [personal-greeting.html](https://github.com/mdn/learning-area/blob/main/javascript/apis/client-side-storage/web-storage/personal-greeting.html) — dies enthält eine Website mit einem Header, Inhalt und Footer sowie einem Formular, um Ihren Namen einzugeben.

![Ein Screenshot einer Website, die Abschnitte für Header, Inhalt und Footer hat. Der Header zeigt einen Begrüßungstext auf der linken Seite und einen Button mit der Aufschrift 'vergessen' auf der rechten Seite. Der Inhalt hat eine Überschrift gefolgt von zwei Absätzen aus Platzhaltertext. Der Footer liest 'Copyright niemand. Verwenden Sie den Code, wie Sie möchten'.](web-storage-demo.png)

Lassen Sie uns das Beispiel aufbauen, damit Sie verstehen, wie es funktioniert.

1. Zuerst machen Sie eine lokale Kopie unserer [personal-greeting.html](https://github.com/mdn/learning-area/blob/main/javascript/apis/client-side-storage/web-storage/personal-greeting.html) Datei in einem neuen Verzeichnis auf Ihrem Computer.
2. Beachten Sie als nächstes, wie unser HTML eine JavaScript-Datei namens `index.js` referenziert, mit einer Zeile wie `<script src="index.js" defer></script>`. Wir müssen diese erstellen und unseren JavaScript-Code darin schreiben. Erstellen Sie eine `index.js`-Datei im gleichen Verzeichnis wie Ihre HTML-Datei.
3. Wir beginnen damit, Referenzen zu allen HTML-Elementen zu erstellen, die wir in diesem Beispiel manipulieren müssen — wir erstellen sie alle als Konstanten, da diese Referenzen innerhalb des Lebenszyklus der App nicht geändert werden müssen. Fügen Sie die folgenden Zeilen Ihrer JavaScript-Datei hinzu:

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

4. Als nächstes müssen wir einen kleinen Event-Listener einschließen, um das Formular davon abzuhalten, sich tatsächlich selbst zu übermitteln, wenn der Senden-Button gedrückt wird, da dies nicht das gewünschte Verhalten ist. Fügen Sie diesen Schnipsel unter Ihrem vorherigen Code hinzu:

   ```js
   // Stop the form from submitting when a button is pressed
   form.addEventListener("submit", (e) => e.preventDefault());
   ```

5. Jetzt müssen wir einen Event-Listener hinzufügen, wobei die Handlerfunktion ausgeführt wird, wenn der "Sag Hallo"-Button geklickt wird. Die Kommentare erklären im Detail, was jeder Teil macht, aber im Wesentlichen nehmen wir hier den Namen, den der Benutzer in das Textfeld eingegeben hat, und speichern ihn im Web Storage mit `setItem()`, dann führen wir eine Funktion namens `nameDisplayCheck()` aus, die die Aktualisierung des tatsächlichen Website-Texts übernimmt. Fügen Sie dies am Ende Ihres Codes hinzu:

   ```js
   // run function when the 'Say hello' button is clicked
   submitBtn.addEventListener("click", () => {
     // store the entered name in web storage
     localStorage.setItem("name", nameInput.value);
     // run nameDisplayCheck() to sort out displaying the personalized greetings and updating the form display
     nameDisplayCheck();
   });
   ```

6. An diesem Punkt benötigen wir auch einen Event-Handler, der eine Funktion ausführt, wenn der "Vergessen"-Button geklickt wird — dieser wird nur nach dem Klicken des "Sag Hallo"-Buttons angezeigt (die beiden Formularelemente wechseln sich gegenseitig ab). In dieser Funktion entfernen wir das `name`-Element aus dem Web Storage mit `removeItem()`, dann führen wir erneut `nameDisplayCheck()` aus, um die Anzeige zu aktualisieren. Fügen Sie dies am Ende hinzu:

   ```js
   // run function when the 'Forget' button is clicked
   forgetBtn.addEventListener("click", () => {
     // Remove the stored name from web storage
     localStorage.removeItem("name");
     // run nameDisplayCheck() to sort out displaying the generic greeting again and updating the form display
     nameDisplayCheck();
   });
   ```

7. Nun ist es Zeit, die Funktion `nameDisplayCheck()` selbst zu definieren. Hier überprüfen wir, ob das Name-Element im Web Storage gespeichert wurde, indem wir `localStorage.getItem('name')` als bedingten Test verwenden. Wenn der Name gespeichert wurde, wird dieser Aufruf zu `true` ausgewertet; wenn nicht, wird er zu `false` ausgewertet. Wenn der Aufruf zu `true` ausgewertet wird, zeigen wir eine personalisierte Begrüßung an, das "Vergessen"-Formular-Element wird angezeigt und das "Sag Hallo"-Formular-Element wird verborgen. Wenn der Aufruf zu `false` ausgewertet wird, zeigen wir eine generische Begrüßung an und machen das Gegenteil. Fügen Sie folgenden Code am unteren Ende hinzu:

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

8. Zu guter Letzt müssen wir die `nameDisplayCheck()`-Funktion ausführen, wenn die Seite geladen wird. Wenn wir dies nicht tun, wird die personalisierte Begrüßung nicht über Seiten-Neuladevorgänge hinweg beibehalten. Fügen Sie das folgende Ende Ihres Codes hinzu:

   ```js
   nameDisplayCheck();
   ```

Ihr Beispiel ist fertig — gut gemacht! Alles, was noch zu tun bleibt, ist Ihren Code zu speichern und Ihre HTML-Seite in einem Browser zu testen. Sie können unsere [fertige Version live hier sehen](https://mdn.github.io/learning-area/javascript/apis/client-side-storage/web-storage/personal-greeting.html).

> [!NOTE]
> Es gibt ein weiteres, etwas komplexeres Beispiel zum Erkunden unter [Using the Web Storage API](/de/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API).

> [!NOTE]
> In der Zeile `<script src="index.js" defer></script>` des Quellcodes unserer fertigen Version gibt das Attribut `defer` an, dass der Inhalt des `{{htmlelement("script")}}`-Elements nicht ausgeführt wird, bis die Seite vollständig geladen ist.

## Speicherung komplexer Daten — IndexedDB

Die [IndexedDB API](/de/docs/Web/API/IndexedDB_API) (manchmal abgekürzt als IDB) ist ein vollständiges Datenbanksystem, das im Browser verfügbar ist, in dem Sie komplexe zusammenhängende Daten speichern können, deren Typen nicht auf einfache Werte wie Strings oder Zahlen beschränkt sind. Sie können Videos, Bilder und fast alles andere in einer IndexedDB-Instanz speichern.

Die IndexedDB API ermöglicht es Ihnen, eine Datenbank zu erstellen und darin Objekt-Speicher zu erstellen.
Objekt-Speicher sind wie Tabellen in einer relationalen Datenbank, und jeder Objekt-Speicher kann eine Anzahl von Objekten enthalten.
Um mehr über die IndexedDB API zu erfahren, siehe [Using IndexedDB](/de/docs/Web/API/IndexedDB_API/Using_IndexedDB).

Allerdings bringt dies auch Komplexität mit sich: IndexedDB ist viel komplexer zu bedienen als die Web Storage API. In diesem Abschnitt kratzen wir nur an der Oberfläche dessen, wozu sie in der Lage ist, aber wir geben Ihnen genug, um anzufangen.

### Durchgehen eines Notizspeicher-Beispiels

Hier führen wir Sie durch ein Beispiel, das es Ihnen ermöglicht, Notizen in Ihrem Browser zu speichern und sie jederzeit anzusehen und zu löschen, indem wir Sie es selbst aufbauen lassen und die grundlegendsten Teile von IDB erkläutern, während wir vorgehen.

Die App sieht ungefähr so aus:

![IndexDB Notizen-Demo-Screenshot mit 4 Abschnitten. Der erste Abschnitt ist der Header. Der zweite Abschnitt listet alle Notizen auf, die erstellt wurden. Es gibt zwei Notizen, jede mit einem Löschen-Button. Ein dritter Abschnitt ist ein Formular mit 2 Eingabefeldern für 'Notiz-Titel' und 'Notiz-Text' und einem Button mit der Bezeichnung 'Neue Notiz erstellen'. Der unterste Abschnitt Footer liest 'Copyright niemand. Verwenden Sie den Code, wie Sie möchten'.](idb-demo.png)

Jede Notiz hat einen Titel und etwas Text, jeweils individuell bearbeitbar. Der JavaScript-Code, den wir unten durchgehen, ist ausführlich kommentiert, um Ihnen zu helfen, zu verstehen, was passiert.

### Einstieg

1. Machen Sie zuerst lokale Kopien unserer [`index.html`](https://github.com/mdn/learning-area/blob/main/javascript/apis/client-side-storage/indexeddb/notes/index.html), [`style.css`](https://github.com/mdn/learning-area/blob/main/javascript/apis/client-side-storage/indexeddb/notes/style.css) und [`index-start.js`](https://github.com/mdn/learning-area/blob/main/javascript/apis/client-side-storage/indexeddb/notes/index-start.js) Dateien in einem neuen Verzeichnis auf Ihrem lokalen Rechner.
2. Schauen Sie sich die Dateien an. Sie werden sehen, dass das HTML eine Website mit einem Header und Footer sowie einem Hauptinhaltsbereich definiert, der eine Stelle enthält, um Notizen anzuzeigen, und ein Formular, um neue Notizen in die Datenbank einzutragen. Das CSS bietet einige Styles, um klarer zu machen, was passiert. Die JavaScript-Datei enthält fünf deklarierte Konstanten, die Referenzen auf das {{htmlelement("ul")}}-Element, in dem die Notizen angezeigt werden, die {{htmlelement("input")}}-Elemente für Titel und Text, das {{htmlelement("form")}} selbst und den {{htmlelement("button")}} enthalten.
3. Benennen Sie Ihre JavaScript-Datei in `index.js` um. Jetzt sind Sie bereit, Code hinzuzufügen.

### Datenbank-Grundaufbau

Schauen wir uns nun an, was wir eigentlich tun müssen, um eine Datenbank einzurichten.

1. Unterhalb der Konstantendeklarationen fügen Sie die folgenden Zeilen hinzu:

   ```js
   // Create an instance of a db object for us to store the open database in
   let db;
   ```

   Hier deklarieren wir eine Variable namens `db` — diese wird später verwendet, um ein Objekt zu speichern, das unsere Datenbank repräsentiert. Wir werden dies in einigen Stellen verwenden, daher haben wir es hier global deklariert, um die Arbeit zu erleichtern.

2. Fügen Sie als nächstes die folgenden Zeilen hinzu:

   ```js
   // Open our database; it is created if it doesn't already exist
   // (see the upgradeneeded handler below)
   const openRequest = window.indexedDB.open("notes_db", 1);
   ```

   Diese Zeile erstellt eine Anfrage, um Version `1` einer Datenbank namens `notes_db` zu öffnen. Wenn diese noch nicht existiert, wird sie für Sie mit nachfolgendem Code erstellt. Sie werden dieses Anforderungsmuster sehr oft in IndexedDB sehen. Datenbankoperationen benötigen Zeit. Sie möchten den Browser nicht einfrieren lassen, während Sie auf die Ergebnisse warten, daher sind Datenbankoperationen [asynchron](/de/docs/Glossary/asynchronous), was bedeutet, dass sie nicht sofort, sondern irgendwann in der Zukunft stattfinden, und Sie werden benachrichtigt, wenn sie abgeschlossen sind.

   Um dies in IndexedDB zu handhaben, erstellen Sie ein Anforderungsobjekt (das Sie beliebig benennen können — wir haben es hier `openRequest` genannt, damit es offensichtlich ist, wofür es verwendet wird). Dann verwenden Sie Event-Handler, um Code auszuführen, wenn die Anfrage abgeschlossen, fehlgeschlagen ist usw., was Sie unten in Verwendung sehen werden.

   > [!NOTE]
   > Die Versionsnummer ist wichtig. Wenn Sie Ihre Datenbank aktualisieren möchten (zum Beispiel durch Ändern der Tabellenstruktur), müssen Sie Ihren Code erneut mit einer höheren Versionsnummer, anderem Schema im `upgradeneeded`-Handler (siehe unten) spezifizieren usw. Wir werden keine Datenbankaktualisierungen in diesem Tutorial behandeln.

3. Jetzt fügen Sie die folgenden Event-Handler unmittelbar unter Ihrer vorherigen Ergänzung hinzu:

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

   Der [`error`](/de/docs/Web/API/IDBRequest/error_event) Event-Handler wird ausgeführt, wenn das System zurückkommt und anzeigt, dass die Anfrage fehlgeschlagen ist. Dies ermöglicht es Ihnen, auf dieses Problem zu reagieren. In unserem Beispiel drucken wir einfach eine Nachricht an die JavaScript-Konsole.

   Der [`success`](/de/docs/Web/API/IDBRequest/success_event) Event-Handler wird ausgeführt, wenn die Anfrage erfolgreich zurückkommt, was bedeutet, dass die Datenbank erfolgreich geöffnet wurde. Wenn dies der Fall ist, wird ein Objekt, das die geöffnete Datenbank repräsentiert, in der [`openRequest.result`](/de/docs/Web/API/IDBRequest/result) Eigenschaft verfügbar, wodurch wir die Datenbank manipulieren können. Wir speichern dies in der `db`-Variable, die wir zuvor erstellt haben, für die spätere Verwendung. Wir führen auch eine Funktion namens `displayData()` aus, die die Daten in der Datenbank innerhalb des {{HTMLElement("ul")}}-Elements anzeigt. Wir führen sie jetzt aus, damit die bereits in der Datenbank vorhandenen Notizen angezeigt werden, sobald die Seite geladen wird. Sie werden `displayData()` später definiert sehen.

4. Schließlich für diesen Abschnitt, fügen wir den wahrscheinlich wichtigsten Event-Handler für das Einrichten der Datenbank hinzu: [`upgradeneeded`](/de/docs/Web/API/IDBOpenDBRequest/upgradeneeded_event). Dieser Handler wird ausgeführt, wenn die Datenbank noch nicht eingerichtet wurde oder wenn die Datenbank mit einer höheren Versionsnummer als die bereits gespeicherte Datenbank geöffnet wird (bei einem Upgrade). Fügen Sie den folgenden Code unterhalb Ihres vorherigen Handlers hinzu:

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

   Hier definieren wir das Schema (Struktur) unserer Datenbank; das heißt, die Reihe von Spalten (oder Felder), die sie enthält. Hier holen wir zuerst eine Referenz zur vorhandenen Datenbank von der `result`-Eigenschaft des Ziels des Events (`e.target.result`), das das `request`-Objekt ist. Dies ist gleichwertig mit der Zeile `db = openRequest.result;` im `success`-Event-Handler, aber wir müssen dies hier separat tun, weil der `upgradeneeded`-Event-Handler (falls benötigt) vor dem `success`-Event-Handler ausgeführt wird, was bedeutet, dass der Wert `db` nicht verfügbar wäre, wenn wir dies nicht tun.

   Dann verwenden wir [`IDBDatabase.createObjectStore()`](/de/docs/Web/API/IDBDatabase/createObjectStore), um einen neuen Objekt-Speicher in unserer geöffneten Datenbank namens `notes_os` zu erstellen. Dies entspricht einer einzelnen Tabelle in einem herkömmlichen Datenbanksystem. Wir haben ihm den Namen Notizen gegeben und auch ein `autoIncrement`-Schlüsselfeld namens `id` angegeben — in jedem neuen Datensatz wird dies automatisch mit einem inkrementierten Wert versehen — der Entwickler muss dies nicht explizit setzen. Da es sich um den Schlüssel handelt, wird das `id`-Feld verwendet, um Datensätze eindeutig zu identifizieren, wie z.B. beim Löschen oder Anzeigen eines Datensatzes.

   Wir erstellen auch zwei weitere Indizes (Felder) mit der Methode [`IDBObjectStore.createIndex()`](/de/docs/Web/API/IDBObjectStore/createIndex): `title` (der einen Titel für jede Notiz enthalten wird) und `body` (der den Text der Notiz enthalten wird).

Damit dieses Datenbankschema eingerichtet ist, wenn wir beginnen, Datensätze in die Datenbank einzufügen, wird jeder als ein Objekt entlang dieser Linien dargestellt:

```json
{
  "title": "Buy milk",
  "body": "Need both cows milk and soy.",
  "id": 8
}
```

### Hinzufügen von Daten zur Datenbank

Schauen wir uns nun an, wie wir Datensätze zur Datenbank hinzufügen können. Dies wird mit dem Formular auf unserer Seite gemacht.

Unterhalb Ihres vorherigen Event-Handlers fügen Sie die folgende Zeile hinzu, die einen `submit`-Event-Handler einrichtet, der eine Funktion namens `addData()` ausführt, wenn das Formular abgeschickt wird (wenn der Senden-{{htmlelement("button")}} gedrückt wird, was zu einem erfolgreichen Formularversand führt):

```js
// Create a submit event handler so that when the form is submitted the addData() function is run
form.addEventListener("submit", addData);
```

Nun definieren wir die Funktion `addData()`. Fügen Sie dies unterhalb Ihrer vorherigen Zeile hinzu:

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

Dies ist ziemlich komplex; im Einzelnen:

- Wir führen [`Event.preventDefault()`](/de/docs/Web/API/Event/preventDefault) für das Event-Objekt aus, um zu verhindern, dass das Formular tatsächlich auf konventionelle Weise eingereicht wird (dies würde zu einem Seiten-Neuladen führen und das Erlebnis beeinträchtigen).
- Wir erstellen ein Objekt, das einen Datensatz darstellt, der in die Datenbank eingetragen werden soll, und füllen ihn mit Werten aus den Formulareingaben. Beachten Sie, dass wir keinen `id`-Wert explizit angeben müssen — wie wir zuvor erklärt haben, wird dies automatisch gefüllt.
- Wir öffnen eine `readwrite`-Transaktion gegen den `notes_os`-Objektspeicher mit der Methode [`IDBDatabase.transaction()`](/de/docs/Web/API/IDBDatabase/transaction). Dieses Transaktionsobjekt ermöglicht es uns, auf den Objektspeicher zuzugreifen, damit wir etwas damit tun können, z.B. einen neuen Datensatz hinzufügen.
- Wir greifen auf den Objektspeicher mit der Methode [`IDBTransaction.objectStore()`](/de/docs/Web/API/IDBTransaction/objectStore) zu und speichern das Ergebnis in der Variablen `objectStore`.
- Wir fügen den neuen Datensatz mit [`IDBObjectStore.add()`](/de/docs/Web/API/IDBObjectStore/add) zur Datenbank hinzu. Dies erstellt ein Anforderungsobjekt, auf die gleiche Art und Weise, wie wir es zuvor gesehen haben.
- Wir fügen eine Reihe von Event-Handlern für das `request`- und das `transaction`-Objekt hinzu, um Code zu kritischen Punkten im Lebenszyklus auszuführen. Sobald die Anforderung erfolgreich war, leeren wir die Formulareingaben, um sie für die nächste Notiz bereit zu machen. Sobald die Transaktion abgeschlossen ist, führen wir die `displayData()`-Funktion erneut aus, um die Anzeige der Notizen auf der Seite zu aktualisieren.

### Anzeigen der Daten

Wir haben `displayData()` bereits zweimal in unserem Code referenziert, also sollten wir es wahrscheinlich definieren. Fügen Sie dies unter Ihrer vorherigen Funktionsdefinition hinzu:

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

Noch einmal, sehen wir uns das genauer an:

- Zuerst leeren wir den Inhalt des {{htmlelement("ul")}}-Elements, bevor wir es mit dem aktualisierten Inhalt füllen. Wenn Sie dies nicht tun, würden Sie am Ende mit einer riesigen Liste von dupliziertem Inhalt, die mit jedem Update hinzugefügt wird, enden.
- Als nächstes erhalten wir eine Referenz auf den `notes_os`-Objektspeicher mit der Methode [`IDBDatabase.transaction()`](/de/docs/Web/API/IDBDatabase/transaction) und [`IDBTransaction.objectStore()`](/de/docs/Web/API/IDBTransaction/objectStore), ähnlich wie wir es in `addData()` gemacht haben, außer dass wir sie hier in einer Zeile verketten.
- Der nächste Schritt ist die Methode [`IDBObjectStore.openCursor()`](/de/docs/Web/API/IDBObjectStore/openCursor) zu verwenden, um eine Anfrage nach einem Cursor zu öffnen — dies ist eine Konstruktion, die verwendet werden kann, um über die Datensätze in einem Objektspeicher zu iterieren. Wir verketten einen `success`-Event-Handler am Ende dieser Zeile, um den Code prägnanter zu machen — wenn der Cursor erfolgreich zurückgegeben wird, wird der Handler ausgeführt.
- Wir erhalten eine Referenz auf den Cursor selbst (ein [`IDBCursor`](/de/docs/Web/API/IDBCursor)-Objekt) mit `const cursor = e.target.result`.
- Als nächstes überprüfen wir, ob der Cursor einen Datensatz aus dem Datenspeicher enthält (`if (cursor){ }`) — falls ja, erstellen wir ein DOM-Fragment, füllen es mit den Daten aus dem Datensatz und fügen es in die Seite ein (innerhalb des `<ul>`-Elements). Wir fügen auch einen Löschen-Button ein, der, wenn geklickt, diese Notiz durch Ausführen der `deleteItem()`-Funktion löscht, die wir im nächsten Abschnitt betrachten werden.
- Am Ende des `if`-Blocks verwenden wir die Methode [`IDBCursor.continue()`](/de/docs/Web/API/IDBCursor/continue), um den Cursor zum nächsten Datensatz im Datenspeicher zu bewegen und den Inhalt des `if`-Blocks erneut auszuführen. Wenn es einen weiteren Datensatz zu iterieren gibt, wird dieser in die Seite eingefügt, und dann wird `continue()` erneut ausgeführt, und so weiter.
- Wenn es keine weiteren Datensätze mehr zu iterieren gibt, wird `cursor` `undefined` zurückgeben, und daher wird der `else`-Block anstelle des `if`-Blocks ausgeführt. Dieser Block überprüft, ob irgendwelche Notizen in das `<ul>` eingefügt wurden — wenn nicht, fügt er eine Nachricht ein, um zu sagen, dass keine Notiz gespeichert wurde.

### Löschen einer Notiz

Wie oben angegeben, wird eine Notiz gelöscht, wenn der Löschen-Button einer Notiz gedrückt wird. Dies wird durch die Funktion `deleteItem()` erreicht, die wie folgt aussieht:

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

- Den ersten Teil davon sollten wir etwas erklären — wir rufen die ID des zu löschenden Datensatzes mit `Number(e.target.parentNode.getAttribute('data-note-id'))` ab — erinnern Sie sich, dass die ID des Datensatzes in einem `data-note-id`-Attribut am `<li>` gespeichert wurde, als es das erste Mal angezeigt wurde. Wir müssen das Attribut jedoch über das globale eingebaute [`Number()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Number)-Objekt übergeben, da es vom Datentyp String ist, und daher nicht von der Datenbank erkannt würde, die eine Nummer erwartet.
- Dann erhalten wir eine Referenz auf den Objektspeicher, wobei wir das gleiche Muster verwenden, das wir bereits gesehen haben, und verwenden die Methode [`IDBObjectStore.delete()`](/de/docs/Web/API/IDBObjectStore/delete), um den Datensatz aus der Datenbank zu löschen, indem wir die ID übergeben.
- Sobald die Datenbanktransaktion abgeschlossen ist, löschen wir das `<li>` der Notiz aus dem DOM und führen erneut die Überprüfung durch, ob das `<ul>` jetzt leer ist, und fügen auf angemessene Weise eine Notiz ein.

Das war's! Ihr Beispiel sollte jetzt funktionieren.

Wenn Sie Probleme damit haben, können Sie es gerne mit unserem [Live-Beispiel abgleichen](https://mdn.github.io/learning-area/javascript/apis/client-side-storage/indexeddb/notes/) (siehe auch den [Quellcode](https://github.com/mdn/learning-area/blob/main/javascript/apis/client-side-storage/indexeddb/notes/index.js)).

### Speicherung komplexer Daten über IndexedDB

Wie wir oben erwähnt haben, IndexedDB kann verwendet werden, um mehr als nur Textstrings zu speichern. Sie können fast alles, was Sie möchten, speichern, einschließlich komplexer Objekte wie Video- oder Bild-Blobs. Und es ist nicht viel schwieriger zu erreichen als jede andere Art von Daten.

Um zu demonstrieren, wie es gemacht wird, haben wir ein weiteres Beispiel namens [IndexedDB video store](https://github.com/mdn/learning-area/tree/main/javascript/apis/client-side-storage/indexeddb/video-store) geschrieben (sehen Sie es [hier live laufen](https://mdn.github.io/learning-area/javascript/apis/client-side-storage/indexeddb/video-store/)). Wenn Sie das Beispiel zum ersten Mal ausführen, werden alle Videos aus dem Netzwerk heruntergeladen, in einer IndexedDB-Datenbank gespeichert, und dann die Videos in der Benutzeroberfläche innerhalb der `{{htmlelement("video")}}`-Elemente angezeigt. Beim zweiten Mal, wenn Sie es ausführen, findet es die Videos in der Datenbank und bekommt sie stattdessen von dort, bevor es sie anzeigt — dies macht nachfolgende Ladevorgänge deutlich schneller und weniger bandbreitenintensiv.

Gehen wir durch die interessantesten Teile des Beispiels. Wir werden nicht alles ansehen — vieles ähnelt dem vorherigen Beispiel, und der Code ist gut kommentiert.

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

2. Zu Beginn, sobald die Datenbank erfolgreich geöffnet wird, führen wir eine `init()`-Funktion aus. Diese durchläuft die verschiedenen Videonamen und versucht, einen durch jeden Namen identifizierten Datensatz aus der `videos`-Datenbank zu laden.

   Wenn jedes Video in der Datenbank gefunden wird (überprüft, indem festgestellt wird, ob `request.result` zu `true` bewertet wird — wenn der Datensatz nicht vorhanden ist, wird er `undefined` sein), werden seine Videodateien (die als Blobs gespeichert sind) und der Videoname direkt zur `displayVideo()`-Funktion weitergeleitet, um sie in der Benutzeroberfläche zu platzieren. Wenn nicht, wird der Videoname zur `fetchVideoFromNetwork()`-Funktion weitergeleitet, um, Sie haben es erraten, das Video vom Netzwerk abzurufen.

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

3. Der folgende Schnipsel stammt aus dem Inneren der `fetchVideoFromNetwork()` — hier holen wir MP4- und WebM-Versionen des Videos mit zwei separaten [`fetch()`](/de/docs/Web/API/Window/fetch)-Anfragen. Wir verwenden dann die Methode [`Response.blob()`](/de/docs/Web/API/Response/blob), um den Körper jeder Antwort als Blob zu extrahieren, was uns eine objektbezogene Darstellung der Videos gibt, die später gespeichert und angezeigt werden können.

   Hier haben wir ein Problem — diese beiden Anfragen sind beide asynchron, aber wir möchten das Video nur anzeigen oder speichern, wenn beide Versprechen erfüllt wurden. Glücklicherweise gibt es eine eingebaute Methode, die dieses Problem löst — {{jsxref("Promise.all()")}}. Diese nimmt ein Argument — Referenzen auf alle individuellen Versprechen, die Sie auf Erfüllung überprüfen möchten, die in ein Array eingefügt sind — und gibt ein Versprechen zurück, das erfüllt wird, wenn alle individuellen Versprechen erfüllt sind.

   Im `then()`-Handler dieses Versprechens rufen wir die `displayVideo()`-Funktion so auf, wie wir es vorher gemacht haben, um die Videos in der Benutzeroberfläche anzuzeigen, dann rufen wir auch die `storeVideo()`-Funktion auf, um diese Videos in der Datenbank zu speichern.

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

4. Schauen wir uns zuerst `storeVideo()` an. Dies ist sehr ähnlich zu dem Muster, das Sie im vorherigen Beispiel zum Hinzufügen von Daten zur Datenbank gesehen haben — wir öffnen eine `readwrite`-Transaktion und erhalten eine Referenz zu unserem `videos_os`-Objektspeicher, erstellen ein Objekt, das den Datensatz repräsentiert, den wir zur Datenbank hinzufügen möchten, und fügen es dann mit [`IDBObjectStore.add()`](/de/docs/Web/API/IDBObjectStore/add) hinzu.

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

5. Schließlich haben wir `displayVideo()`, das die DOM-Elemente erstellt, die benötigt werden, um das Video in der Benutzeroberfläche einzufügen und dann der Seite hinzuzufügen. Die interessantesten Teile davon sind die unten gezeigten — um unsere Videoblobs in einem `<video>`-Element anzuzeigen, müssen wir Objekt-URLs erstellen (interne URLs, die auf die im Speicher gespeicherten Videoblobs verweisen), indem wir die Methode [`URL.createObjectURL()`](/de/docs/Web/API/URL/createObjectURL_static) verwenden. Sobald dies erledigt ist, können wir die Objekt-URLs als Werte der `src`-Attribute unserer {{htmlelement("source")}}-Elemente festlegen, und es funktioniert einwandfrei.

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

## Offline-Speicherung von Ressourcen

Das obige Beispiel zeigt bereits, wie man eine App erstellt, die große Ressourcen in einer IndexedDB-Datenbank speichert, was vermeidet, dass sie mehr als einmal heruntergeladen werden müssen. Dies ist bereits eine deutliche Verbesserung der Benutzererfahrung, aber es fehlt noch eine Sache — die Haupt-HTML-, CSS- und JavaScript-Dateien müssen bei jedem Zugriff auf die Seite erneut heruntergeladen werden, was bedeutet, dass sie ohne Netzwerkverbindung nicht funktionieren wird.

![Firefox Offline-Bildschirm mit einer Illustration einer Cartoonfigur auf der linken Seite, die einen Zweipol-Stecker in ihrer rechten Hand und eine Zweipol-Steckdose in ihrer linken Hand hält. Auf der rechten Seite gibt es eine Meldung im Offline-Modus und einen Button mit der Aufschrift 'Erneut versuchen'.](ff-offline.png)

Hier kommen [Service Worker](/de/docs/Web/API/Service_Worker_API) und die eng verwandte [Cache API](/de/docs/Web/API/Cache) ins Spiel.

Ein Service Worker ist eine JavaScript-Datei, die bei Zugriff durch einen Browser gegen einen bestimmten Ursprung (Website oder Teil einer Website an einer bestimmten Domain) registriert wird. Wenn registriert, kann er die Seiten an diesem Ursprung steuern. Er tut dies, indem er zwischen einer geladenen Seite und dem Netzwerk steht und Netzwerkanfragen abfängt, die auf diesen Ursprung abzielen.

Wenn er eine Anfrage abfängt, kann er alles, was Sie sich wünschen, damit tun (siehe [Anwendungsfall-Ideen](/de/docs/Web/API/Service_Worker_API#other_use_case_ideas)), aber das klassische Beispiel ist, die Netzwerkantworten offline zu speichern und diese dann als Antwort auf eine Anfrage anstelle der Antworten des Netzwerks bereitzustellen. Im Wesentlichen ermöglicht es Ihnen, eine Website völlig offline funktionieren zu lassen.

Die Cache API ist ein weiteres Client-seitiges Speichersystem, mit einem kleinen Unterschied — sie ist dazu ausgelegt, HTTP-Antworten zu speichern, und funktioniert daher sehr gut mit Service Workern.

### Ein Service Worker Beispiel

Schauen wir uns ein Beispiel an, um Ihnen eine Vorstellung zu geben, wie dies aussehen könnte. Wir haben eine weitere Version des Video-Shop-Beispiels erstellt, das wir im vorherigen Abschnitt gesehen haben — dies funktioniert identisch, speichert jedoch zusätzlich die HTML-, CSS- und JavaScript-Dateien in der Cache API über einen Service Worker, was es ermöglicht, das Beispiel offline auszuführen!

Sehen Sie [IndexedDB Video Store mit Service Worker live laufen](https://mdn.github.io/learning-area/javascript/apis/client-side-storage/cache-sw/video-store-offline/), und sehen Sie sich auch den [Quellcode an](https://github.com/mdn/learning-area/tree/main/javascript/apis/client-side-storage/cache-sw/video-store-offline).

#### Registrierung des Service Workers

Das erste, was zu beachten ist, ist, dass sich zusätzlicher Code in der Haupt-JavaScript-Datei befindet (siehe [index.js](https://github.com/mdn/learning-area/blob/main/javascript/apis/client-side-storage/cache-sw/video-store-offline/index.js)). Zuerst führen wir einen Feature Detection-Test durch, um zu sehen, ob das `serviceWorker`-Mitglied im [`Navigator`](/de/docs/Web/API/Navigator)-Objekt verfügbar ist. Wenn dies wahr zurückgibt, wissen wir, dass zumindest die Grundlagen von Service Workern unterstützt werden. Hier verwenden wir die Methode [`ServiceWorkerContainer.register()`](/de/docs/Web/API/ServiceWorkerContainer/register), um einen Service Worker, der in der `sw.js`-Datei enthalten ist, gegen den Ursprung, bei dem er sich befindet, zu registrieren, damit er Seiten im gleichen Verzeichnis wie er oder in Unterverzeichnissen steuern kann. Wenn sein Versprechen erfüllt wird, wird der Service Worker als registriert angesehen.

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
> Der angegebene Pfad zur `sw.js`-Datei ist relativ zum Ursprungsort der Site und nicht zur JavaScript-Datei, die den Code enthält. Der Service Worker befindet sich unter `https://mdn.github.io/learning-area/javascript/apis/client-side-storage/cache-sw/video-store-offline/sw.js`. Der Ursprung ist `https://mdn.github.io`, und deshalb muss der angegebene Pfad `/learning-area/javascript/apis/client-side-storage/cache-sw/video-store-offline/sw.js` sein. Wenn Sie dieses Beispiel auf Ihrem eigenen Server hosten möchten, müssten Sie dies entsprechend ändern. Dies ist ziemlich verwirrend, aber es muss aus Sicherheitsgründen so funktionieren.

#### Installation des Service Workers

Das nächste Mal, wenn auf eine Seite, die der Kontrolle des Service Workers unterliegt, zugegriffen wird (z.B. wenn das Beispiel neu geladen wird), wird der Service Worker gegen diese Seite installiert, was bedeutet, dass er sie zu kontrollieren beginnt. Wenn dies geschieht, wird ein `install`-Event gegen den Service Worker ausgelöst; Sie können Code in den Service Worker selbst schreiben, der auf die Installation reagiert.

Ein Beispiel sehen wir in der [sw.js](https://github.com/mdn/learning-area/blob/main/javascript/apis/client-side-storage/cache-sw/video-store-offline/sw.js)-Datei (dem Service Worker). Sie werden sehen, dass der Installations-Listener gegenüber `self` registriert wird. Dieses `self`-Keyword ist eine Möglichkeit, von innerhalb der Service Worker-Datei auf den globalen Gültigkeitsbereich des Service Workers zu verweisen.

Innerhalb des `install`-Handlers verwenden wir die Methode [`ExtendableEvent.waitUntil()`](/de/docs/Web/API/ExtendableEvent/waitUntil), die im Event-Objekt verfügbar ist, um zu signalisieren, dass der Browser die Installation des Service Workers nicht abschließen sollte, bis das Versprechen darin erfolgreich erfüllt wurde.

Hier sehen wir die Cache API in Aktion. Wir verwenden die Methode [`CacheStorage.open()`](/de/docs/Web/API/CacheStorage/open), um ein neues Cache-Objekt zu öffnen, in dem Antworten gespeichert werden können (ähnlich wie ein IndexedDB-Objekte-Speicher). Dieses Versprechen wird mit einem [`Cache`](/de/docs/Web/API/Cache)-Objekt erfüllt, das den `video-store` Cache repräsentiert. Dann verwenden wir die Methode [`Cache.addAll()`](/de/docs/Web/API/Cache/addAll), um eine Reihe von Ressourcen abzurufen und ihre Antworten zum Cache hinzuzufügen.

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

Das war es vorerst, die Installation ist abgeschlossen.

#### Antworten auf weitere Anfragen

Mit dem registrierten und gegen unsere HTML-Seite installierten Service Worker und den relevanten Ressourcen, die alle zu unserem Cache hinzugefügt wurden, sind wir fast einsatzbereit. Es gibt nur noch eine Sache zu tun: Schreiben Sie etwas Code, um auf weitere Netzwerkanfragen zu reagieren.

Das ist, was der zweite Code in `sw.js` macht. Wir fügen dem globalen Gültigkeitsbereich des Service Workers einen weiteren Listener hinzu, der die Handlerfunktion ausführt, wenn das `fetch`-Event ausgelöst wird. Dies geschieht, wann immer der Browser eine Anfrage nach einer Ressource in dem Verzeichnis stellt, gegen das der Service Worker registriert ist.

Innerhalb des Handlers loggen wir zuerst die URL der angeforderten Ressource. Dann bieten wir eine benutzerdefinierte Antwort auf die Anfrage, indem wir die Methode [`FetchEvent.respondWith()`](/de/docs/Web/API/FetchEvent/respondWith) verwenden.

Innerhalb dieses Blocks verwenden wir [`CacheStorage.match()`](/de/docs/Web/API/CacheStorage/match), um zu überprüfen, ob eine passende Anfrage (d.h. mit der URL übereinstimmt) in irgendeinem Cache gefunden werden kann. Dieses Versprechen wird mit der passenden Antwort erfüllt, wenn ein Treffer gefunden wird, oder `undefined`, wenn nicht.

Wenn ein Treffer gefunden wird, geben wir ihn als benutzerdefinierte Antwort zurück. Wenn nicht, holen wir [fetch()](/de/docs/Web/API/Window/fetch) die Antwort aus dem Netzwerk und geben diese stattdessen zurück.

```js
self.addEventListener("fetch", (e) => {
  console.log(e.request.url);
  e.respondWith(
    caches.match(e.request).then((response) => response || fetch(e.request)),
  );
});
```

Und das war es für unseren Service Worker.
Es gibt eine ganze Menge mehr, was Sie damit tun können — für eine Menge mehr Details, sehen Sie bitte das [Service Worker Cookbook](https://github.com/mdn/serviceworker-cookbook).
Vielen Dank an Paul Kinlan für seinen Artikel [Adding a Service Worker and Offline into your Web App](https://developers.google.com/codelabs/pwa-training/pwa03--going-offline#0), der dieses Beispiel inspiriert hat.

#### Das Beispiel offline testen

Um unser [Service Worker Beispiel](https://mdn.github.io/learning-area/javascript/apis/client-side-storage/cache-sw/video-store-offline/) zu testen, müssen Sie es ein paar Mal laden, um sicherzustellen, dass es installiert ist. Sobald dies geschehen ist, können Sie:

- Versuchen, Ihr Netzwerk zu trennen/Ihr WLAN auszuschalten.
- Wählen Sie _Datei > Offline arbeiten_, wenn Sie Firefox verwenden.
- Gehen Sie zu den Entwicklertools, dann wählen Sie _Anwendung > Service Workers_, dann aktivieren Sie das _Offline_-Kästchen, wenn Sie Chrome verwenden.

Wenn Sie Ihre Beispielseite erneut neu laden, sollten Sie sehen, dass sie weiterhin einwandfrei geladen wird. Alles ist offline gespeichert — die Seitenressourcen in einem Cache und die Videos in einer IndexedDB-Datenbank.

## Zusammenfassung

Das war's für jetzt. Wir hoffen, Sie fanden unsere Übersicht über Client-seitige Speichertechnologien nützlich.

## Siehe auch

- [Web Storage API](/de/docs/Web/API/Web_Storage_API)
- [IndexedDB API](/de/docs/Web/API/IndexedDB_API)
- [Cookies](/de/docs/Web/HTTP/Cookies)
- [Service Worker API](/de/docs/Web/API/Service_Worker_API)

{{PreviousMenu("Learn/JavaScript/Client-side_web_APIs/Video_and_audio_APIs", "Learn/JavaScript/Client-side_web_APIs")}}
