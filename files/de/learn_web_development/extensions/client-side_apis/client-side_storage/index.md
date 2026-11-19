---
title: Clientseitige Speicherung
slug: Learn_web_development/Extensions/Client-side_APIs/Client-side_storage
l10n:
  sourceCommit: 022e5613135526cb013d07504eaf1784cc873b78
---

{{PreviousMenuNext("Learn_web_development/Extensions/Client-side_APIs/Drawing_graphics", "Learn_web_development/Extensions/Client-side_APIs/Third_party_APIs", "Learn_web_development/Extensions/Client-side_APIs")}}

Moderne Webbrowser bieten Websites verschiedene Möglichkeiten, mit Zustimmung der Benutzer Daten auf deren Computern zu speichern und bei Bedarf wieder abzurufen. So lassen sich Daten langfristig aufbewahren, Websites oder Dokumente für die Offline-Nutzung speichern und benutzerspezifische Einstellungen für eine Website beibehalten. Dieser Artikel erklärt die Grundlagen dieser Verfahren.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Vertrautheit mit <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a>, <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS</a> und <a href="/de/docs/Learn_web_development/Core/Scripting">JavaScript</a>, insbesondere mit den <a href="/de/docs/Learn_web_development/Core/Scripting/Object_basics">Grundlagen von JavaScript-Objekten</a> und grundlegenden APIs wie <a href="/de/docs/Learn_web_development/Core/Scripting/DOM_scripting">DOM-Scripting</a> und <a href="/de/docs/Learn_web_development/Core/Scripting/Network_requests">Netzwerkanfragen</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Das Konzept der clientseitigen Speicherung und die wichtigsten Technologien dafür: Web Storage API, Cookies, Cache API und IndexedDB API.</li>
          <li>Wichtige Anwendungsfälle: Zustand über das erneute Laden einer Seite hinweg beibehalten, Anmelde- und Personalisierungsdaten speichern sowie lokal und offline arbeiten.</li>
          <li>Web Storage verwenden, um einfache Schlüssel-Wert-Paare unter der Kontrolle von JavaScript zu speichern.</li>
          <li>IndexedDB verwenden, um komplexere, strukturierte Daten zu speichern.</li>
          <li>Cache API und Service Worker für die Offline-Nutzung verwenden.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Was ist clientseitige Speicherung?

An anderer Stelle im MDN-Lernbereich haben wir den Unterschied zwischen [statischen Websites](/de/docs/Learn_web_development/Extensions/Server-side/First_steps/Client-Server_overview#static_sites) und [dynamischen Websites](/de/docs/Learn_web_development/Extensions/Server-side/First_steps/Client-Server_overview#dynamic_sites) besprochen. Die meisten großen modernen Websites sind dynamisch: Sie speichern Daten mithilfe einer Datenbank auf dem Server (serverseitige Speicherung). Anschließend rufen sie mit [serverseitigem](/de/docs/Learn_web_development/Extensions/Server-side) Code die benötigten Daten ab, fügen sie in statische Seitenvorlagen ein und liefern das resultierende HTML an den Client aus, damit es im Browser angezeigt wird.

Die clientseitige Speicherung funktioniert nach ähnlichen Prinzipien, dient aber anderen Zwecken. Sie umfasst JavaScript-APIs, mit denen Sie Daten auf dem Client, also auf dem Computer der Benutzer, speichern und bei Bedarf wieder abrufen können. Dafür gibt es viele Anwendungsfälle, beispielsweise:

- Einstellungen für eine Website personalisieren, etwa die Auswahl benutzerdefinierter Widgets, eines Farbschemas oder einer Schriftgröße.
- Frühere Aktivitäten auf einer Website beibehalten, etwa den Inhalt eines Warenkorbs aus einer vorherigen Sitzung speichern oder sich merken, ob jemand bereits angemeldet war.
- Daten und Ressourcen lokal speichern, damit eine Website schneller und möglicherweise kostengünstiger geladen werden kann oder ohne Netzwerkverbindung nutzbar ist.
- Von Webanwendungen erzeugte Dokumente lokal speichern, um sie offline zu verwenden.

Häufig werden clientseitige und serverseitige Speicherung gemeinsam eingesetzt. Beispielsweise könnten Sie mehrere Musikdateien herunterladen, die von einem Webspiel oder einer Musikplayer-Anwendung verwendet werden, sie in einer clientseitigen Datenbank speichern und bei Bedarf abspielen. Die Benutzer müssten die Musikdateien nur einmal herunterladen. Bei späteren Besuchen würden sie stattdessen aus der Datenbank abgerufen.

> [!NOTE]
> Die Datenmenge, die Sie mit APIs zur clientseitigen Speicherung speichern können, ist begrenzt – möglicherweise sowohl für einzelne APIs als auch insgesamt. Die genaue Grenze hängt vom Browser und gegebenenfalls von Benutzereinstellungen ab. Weitere Informationen finden Sie unter [Speicherkontingente und Verdrängungskriterien von Browsern](/de/docs/Web/API/Storage_API/Storage_quotas_and_eviction_criteria).

### Der klassische Weg: Cookies

Das Konzept der clientseitigen Speicherung gibt es schon lange. Seit den Anfängen des Webs verwenden Websites [Cookies](/de/docs/Web/HTTP/Guides/Cookies), um Informationen zu speichern und die Nutzung einer Website zu personalisieren. Sie sind die älteste im Web verbreitete Form der clientseitigen Speicherung.

Heute stehen einfachere Verfahren zum Speichern clientseitiger Daten zur Verfügung. Deshalb erklären wir in diesem Artikel nicht, wie Sie Cookies verwenden. Das bedeutet allerdings nicht, dass Cookies im modernen Web überflüssig sind: Sie werden weiterhin häufig verwendet, um Daten zur Personalisierung und zum Benutzerzustand zu speichern, beispielsweise Sitzungs-IDs und Zugriffstoken. Weitere Informationen finden Sie in unserem Artikel [HTTP-Cookies verwenden](/de/docs/Web/HTTP/Guides/Cookies).

### Der moderne Weg: Web Storage und IndexedDB

Die oben erwähnten „einfacheren“ Funktionen sind:

- Die [Web Storage API](/de/docs/Web/API/Web_Storage_API) bietet einen Mechanismus zum Speichern und Abrufen kleinerer Datenelemente, die jeweils aus einem Namen und einem zugehörigen Wert bestehen. Das ist nützlich, wenn Sie lediglich einfache Daten speichern müssen, etwa den Namen einer Person, ob sie angemeldet ist oder welche Hintergrundfarbe verwendet werden soll.
- Die [IndexedDB API](/de/docs/Web/API/IndexedDB_API) stellt dem Browser ein vollständiges Datenbanksystem zum Speichern komplexer Daten bereit. Damit lassen sich beispielsweise ganze Sammlungen von Kundendatensätzen oder komplexe Datentypen wie Audio- und Videodateien speichern.

Weiter unten erfahren Sie mehr über diese APIs.

### Die Cache API

Die [`Cache`](/de/docs/Web/API/Cache) API wurde entwickelt, um HTTP-Antworten auf bestimmte Anfragen zu speichern. Sie eignet sich besonders dafür, Ressourcen einer Website offline vorzuhalten, damit die Website anschließend ohne Netzwerkverbindung genutzt werden kann. Cache wird gewöhnlich zusammen mit der [Service Worker API](/de/docs/Web/API/Service_Worker_API) verwendet, muss es aber nicht.

Die Verwendung von Cache und Service Workern ist ein fortgeschrittenes Thema, das wir in diesem Artikel nicht ausführlich behandeln. Ein Beispiel zeigen wir jedoch weiter unten im Abschnitt [Ressourcen für die Offline-Nutzung speichern](#ressourcen_für_die_offline-nutzung_speichern).

## Einfache Daten speichern – Web Storage

Die [Web Storage API](/de/docs/Web/API/Web_Storage_API) ist sehr einfach zu verwenden: Sie speichern einfache Daten als Name-Wert-Paare (beschränkt auf Zeichenfolgen, Zahlen usw.) und rufen die Werte bei Bedarf ab.

### Grundlegende Syntax

So funktioniert es:

1. Öffnen Sie unsere [leere Web-Storage-Vorlage](https://mdn.github.io/learning-area/javascript/apis/client-side-storage/web-storage/index.html) auf GitHub in einem neuen Tab.
2. Öffnen Sie die JavaScript-Konsole der Entwicklerwerkzeuge Ihres Browsers.
3. Alle Ihre Web-Storage-Daten befinden sich in zwei objektähnlichen Strukturen im Browser: [`sessionStorage`](/de/docs/Web/API/Window/sessionStorage) und [`localStorage`](/de/docs/Web/API/Window/localStorage). Die erste speichert Daten, solange der Browser geöffnet ist; beim Schließen gehen sie verloren. Die zweite bewahrt Daten auch dann auf, wenn der Browser geschlossen und später erneut geöffnet wird. In diesem Artikel verwenden wir die zweite, da sie im Allgemeinen nützlicher ist.

   Mit der Methode [`Storage.setItem()`](/de/docs/Web/API/Storage/setItem) speichern Sie ein Datenelement. Sie erwartet zwei Parameter: den Namen und den Wert des Elements. Geben Sie Folgendes in Ihre JavaScript-Konsole ein (ersetzen Sie den Wert gern durch Ihren eigenen Namen):

   ```js
   localStorage.setItem("name", "Chris");
   ```

4. Die Methode [`Storage.getItem()`](/de/docs/Web/API/Storage/getItem) erwartet einen Parameter – den Namen des Datenelements, das Sie abrufen möchten – und gibt dessen Wert zurück. Geben Sie nun diese Zeilen in Ihre JavaScript-Konsole ein:

   ```js
   let myName = localStorage.getItem("name");
   myName;
   ```

   Nach Eingabe der zweiten Zeile sollten Sie sehen, dass die Variable `myName` jetzt den Wert des Datenelements `name` enthält.

5. Die Methode [`Storage.removeItem()`](/de/docs/Web/API/Storage/removeItem) erwartet einen Parameter – den Namen des zu entfernenden Datenelements – und entfernt dieses Element aus Web Storage. Geben Sie die folgenden Zeilen in Ihre JavaScript-Konsole ein:

   ```js
   localStorage.removeItem("name");
   myName = localStorage.getItem("name");
   myName;
   ```

   Die dritte Zeile sollte jetzt `null` zurückgeben: Das Element `name` ist in Web Storage nicht mehr vorhanden.

### Die Daten bleiben erhalten!

Eine wichtige Eigenschaft von Web Storage ist, dass die Daten beim erneuten Laden einer Seite erhalten bleiben – im Fall von `localStorage` sogar nach dem Schließen des Browsers. Sehen wir uns das praktisch an.

1. Öffnen Sie unsere leere Web-Storage-Vorlage erneut, diesmal aber in einem anderen Browser als dem, in dem Sie dieses Tutorial lesen. Das erleichtert die Arbeit.
2. Geben Sie diese Zeilen in die JavaScript-Konsole des Browsers ein:

   ```js
   localStorage.setItem("name", "Chris");
   let myName = localStorage.getItem("name");
   myName;
   ```

   Der gespeicherte Name sollte zurückgegeben werden.

3. Schließen Sie nun den Browser und öffnen Sie ihn erneut.
4. Geben Sie die folgenden Zeilen noch einmal ein:

   ```js
   let myName = localStorage.getItem("name");
   myName;
   ```

   Sie sollten sehen, dass der Wert weiterhin verfügbar ist, obwohl der Browser zwischenzeitlich geschlossen wurde.

### Getrennter Speicher für jede Domain

Für jede Domain – also jede eigenständige Webadresse, die im Browser geladen wird – gibt es einen getrennten Datenspeicher. Wenn Sie zwei Websites laden, beispielsweise google.com und amazon.com, und auf einer davon ein Element speichern, ist es auf der anderen nicht verfügbar.

Das ist sinnvoll: Stellen Sie sich die Sicherheitsprobleme vor, die entstünden, wenn Websites gegenseitig auf ihre Daten zugreifen könnten!

### Ein ausführlicheres Beispiel

Wenden wir das neu erworbene Wissen an und schreiben wir ein funktionierendes Beispiel für die Verwendung von Web Storage. In unserem Beispiel können Sie einen Namen eingeben. Daraufhin wird die Seite aktualisiert und zeigt eine persönliche Begrüßung an. Dieser Zustand bleibt auch beim erneuten Laden der Seite oder des Browsers erhalten, da der Name in Web Storage gespeichert wird.

Das HTML für dieses Beispiel finden Sie unter [personal-greeting.html](https://github.com/mdn/learning-area/blob/main/javascript/apis/client-side-storage/web-storage/personal-greeting.html). Es enthält eine Website mit Kopfbereich, Inhalt und Fußbereich sowie einem Formular zur Eingabe Ihres Namens.

![Screenshot einer Website mit Kopfbereich, Inhalt und Fußbereich. Im Kopfbereich stehen links ein Begrüßungstext und rechts eine mit „forget“ beschriftete Schaltfläche. Im Inhaltsbereich folgen auf eine Überschrift zwei Absätze mit Platzhaltertext. Im Fußbereich steht „Copyright nobody. Use the code as you like“.](web-storage-demo.png)

Wir bauen das Beispiel Schritt für Schritt auf, damit Sie verstehen, wie es funktioniert.

1. Erstellen Sie zunächst in einem neuen Verzeichnis auf Ihrem Computer eine lokale Kopie unserer Datei [personal-greeting.html](https://github.com/mdn/learning-area/blob/main/javascript/apis/client-side-storage/web-storage/personal-greeting.html).
2. Beachten Sie, dass das HTML mit einer Zeile wie `<script src="index.js" defer></script>` auf eine JavaScript-Datei namens `index.js` verweist. Diese Datei müssen wir erstellen und unseren JavaScript-Code darin schreiben. Erstellen Sie im selben Verzeichnis wie Ihre HTML-Datei eine Datei namens `index.js`.
3. Zunächst erstellen wir Referenzen auf alle HTML-Bestandteile, die wir in diesem Beispiel verändern müssen. Da sich diese Referenzen während der Laufzeit der Anwendung nicht ändern müssen, deklarieren wir sie als Konstanten. Fügen Sie Ihrer JavaScript-Datei die folgenden Zeilen hinzu:

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

4. Als Nächstes benötigen wir einen kleinen Event Listener, der verhindert, dass das Formular beim Drücken der Submit-Schaltfläche tatsächlich abgesendet wird. Das ist hier nicht erwünscht. Fügen Sie unter Ihrem bisherigen Code Folgendes hinzu:

   ```js
   // Stop the form from submitting when a button is pressed
   form.addEventListener("submit", (e) => e.preventDefault());
   ```

5. Nun fügen wir einen Event Listener hinzu, dessen Handler-Funktion ausgeführt wird, wenn auf die Schaltfläche „Say hello“ geklickt wird. Die Kommentare erklären die einzelnen Schritte ausführlich. Im Wesentlichen lesen wir den Namen aus dem Texteingabefeld aus und speichern ihn mit `setItem()` in Web Storage. Anschließend rufen wir die Funktion `nameDisplayCheck()` auf, die den sichtbaren Text der Website aktualisiert. Fügen Sie Folgendes am Ende Ihres Codes hinzu:

   ```js
   // run function when the 'Say hello' button is clicked
   submitBtn.addEventListener("click", () => {
     // store the entered name in web storage
     localStorage.setItem("name", nameInput.value);
     // run nameDisplayCheck() to sort out displaying the personalized greetings and updating the form display
     nameDisplayCheck();
   });
   ```

6. Außerdem benötigen wir einen Event Handler, der beim Klicken auf die Schaltfläche „Forget“ eine Funktion ausführt. Diese Schaltfläche wird erst angezeigt, nachdem auf „Say hello“ geklickt wurde; die beiden Formularzustände wechseln einander ab. In dieser Funktion entfernen wir mit `removeItem()` das Element `name` aus Web Storage und rufen anschließend erneut `nameDisplayCheck()` auf, um die Anzeige zu aktualisieren. Fügen Sie Folgendes am Ende hinzu:

   ```js
   // run function when the 'Forget' button is clicked
   forgetBtn.addEventListener("click", () => {
     // Remove the stored name from web storage
     localStorage.removeItem("name");
     // run nameDisplayCheck() to sort out displaying the generic greeting again and updating the form display
     nameDisplayCheck();
   });
   ```

7. Jetzt definieren wir die Funktion `nameDisplayCheck()` selbst. Mit `localStorage.getItem('name')` prüfen wir in einer Bedingung, ob der Name in Web Storage gespeichert wurde. Ist er gespeichert, wird dieser Ausdruck als `true` ausgewertet; andernfalls als `false`. Bei `true` zeigen wir eine persönliche Begrüßung und den Formularbereich „Forget“ an und blenden den Bereich „Say hello“ aus. Bei `false` zeigen wir eine allgemeine Begrüßung an und verfahren mit den Formularbereichen umgekehrt. Fügen Sie wiederum den folgenden Code am Ende hinzu:

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

8. Zu guter Letzt müssen wir die Funktion `nameDisplayCheck()` beim Laden der Seite ausführen. Andernfalls würde die persönliche Begrüßung nach einem erneuten Laden nicht angezeigt. Fügen Sie Folgendes am Ende Ihres Codes hinzu:

   ```js
   nameDisplayCheck();
   ```

Ihr Beispiel ist fertig – gut gemacht! Jetzt müssen Sie nur noch Ihren Code speichern und die HTML-Seite im Browser testen. Sie können sich auch unsere [fertige Version live ansehen](https://mdn.github.io/learning-area/javascript/apis/client-side-storage/web-storage/personal-greeting.html).

> [!NOTE]
> Ein weiteres, etwas komplexeres Beispiel finden Sie unter [Die Web Storage API verwenden](/de/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API).

> [!NOTE]
> In der Zeile `<script src="index.js" defer></script>` im Quelltext unserer fertigen Version legt das Attribut `defer` fest, dass der Inhalt des {{htmlelement("script")}}-Elements erst ausgeführt wird, nachdem die Seite vollständig geladen wurde.

## Komplexe Daten speichern – IndexedDB

Die [IndexedDB API](/de/docs/Web/API/IndexedDB_API), manchmal als IDB abgekürzt, ist ein vollständiges Datenbanksystem im Browser. Darin können Sie komplexe, miteinander verknüpfte Daten speichern, deren Typen nicht auf einfache Werte wie Zeichenfolgen oder Zahlen beschränkt sind. Eine IndexedDB-Instanz kann Videos, Bilder und nahezu alles andere enthalten.

Mit der IndexedDB API können Sie eine Datenbank erstellen und darin Object Stores anlegen.
Object Stores ähneln Tabellen in einer relationalen Datenbank; jeder Object Store kann mehrere Objekte enthalten.
Weitere Informationen zur IndexedDB API finden Sie unter [IndexedDB verwenden](/de/docs/Web/API/IndexedDB_API/Using_IndexedDB).

Diese Möglichkeiten haben allerdings ihren Preis: IndexedDB ist deutlich komplexer zu verwenden als die Web Storage API. In diesem Abschnitt können wir ihre Möglichkeiten nur anreißen, vermitteln Ihnen aber genug Wissen für den Einstieg.

### Ein Beispiel zum Speichern von Notizen durcharbeiten

Wir führen Sie durch ein Beispiel, mit dem Sie Notizen im Browser speichern und jederzeit anzeigen oder löschen können. Sie bauen es selbst auf und lernen dabei die wichtigsten Grundlagen von IDB kennen.

Die Anwendung sieht ungefähr so aus:

![Screenshot einer IndexedDB-Demo für Notizen mit vier Bereichen. Der erste Bereich ist der Kopfbereich. Der zweite listet alle erstellten Notizen auf: zwei Notizen mit jeweils einer Schaltfläche zum Löschen. Der dritte Bereich enthält ein Formular mit Eingabefeldern für „Note title“ und „Note text“ sowie einer mit „Create new note“ beschrifteten Schaltfläche. Im Fußbereich steht „Copyright nobody. Use the code as you like“.](idb-demo.png)

Jede Notiz hat einen Titel und einen Textkörper, die jeweils einzeln bearbeitet werden können. Der JavaScript-Code, den wir im Folgenden durchgehen, enthält ausführliche Kommentare, damit Sie nachvollziehen können, was geschieht.

### Erste Schritte

1. Erstellen Sie zunächst in einem neuen Verzeichnis auf Ihrem Computer lokale Kopien der Dateien [`index.html`](https://github.com/mdn/learning-area/blob/main/javascript/apis/client-side-storage/indexeddb/notes/index.html), [`style.css`](https://github.com/mdn/learning-area/blob/main/javascript/apis/client-side-storage/indexeddb/notes/style.css) und [`index-start.js`](https://github.com/mdn/learning-area/blob/main/javascript/apis/client-side-storage/indexeddb/notes/index-start.js).
2. Sehen Sie sich die Dateien an. Das HTML definiert eine Website mit Kopf- und Fußbereich sowie einem Hauptbereich, in dem Notizen angezeigt und über ein Formular neue Notizen in die Datenbank eingegeben werden können. Das CSS gestaltet die Seite, damit die Abläufe besser erkennbar sind. Die JavaScript-Datei enthält fünf deklarierte Konstanten mit Referenzen auf das {{htmlelement("ul")}}-Element, in dem die Notizen angezeigt werden, die {{htmlelement("input")}}-Elemente für Titel und Text, das {{htmlelement("form")}} selbst und das {{htmlelement("button")}}.
3. Benennen Sie Ihre JavaScript-Datei in `index.js` um. Nun können Sie beginnen, Code hinzuzufügen.

### Die Datenbank einrichten

Sehen wir uns an, was wir zunächst tun müssen, um die Datenbank einzurichten.

1. Fügen Sie unter den Konstantendeklarationen die folgenden Zeilen hinzu:

   ```js
   // Create an instance of a db object for us to store the open database in
   let db;
   ```

   Hier deklarieren wir eine Variable namens `db`. Sie wird später ein Objekt enthalten, das unsere Datenbank repräsentiert. Da wir sie an mehreren Stellen verwenden, deklarieren wir sie der Einfachheit halber im globalen Gültigkeitsbereich.

2. Fügen Sie als Nächstes Folgendes hinzu:

   ```js
   // Open our database; it is created if it doesn't already exist
   // (see the upgradeneeded handler below)
   const openRequest = window.indexedDB.open("notes_db", 1);
   ```

   Diese Zeile erstellt eine Anfrage, um Version `1` einer Datenbank namens `notes_db` zu öffnen. Falls sie noch nicht existiert, wird sie durch den nachfolgenden Code erstellt. Dieses Muster mit Anfragen begegnet Ihnen in IndexedDB häufig. Datenbankoperationen benötigen Zeit. Während Sie auf ein Ergebnis warten, soll der Browser nicht blockiert werden. Deshalb erfolgen Datenbankoperationen {{Glossary("asynchronous", "asynchron")}}: Sie werden nicht sofort abgeschlossen, sondern zu einem späteren Zeitpunkt, und Sie erhalten eine Benachrichtigung, sobald sie beendet sind.

   Dafür erstellen Sie in IndexedDB ein Anfrageobjekt. Sie können es beliebig benennen; hier heißt es `openRequest`, damit sein Zweck erkennbar ist. Anschließend verwenden Sie Event Handler, um Code auszuführen, wenn die Anfrage erfolgreich abgeschlossen wird, fehlschlägt usw. Wie das funktioniert, sehen Sie gleich.

   > [!NOTE]
   > Die Versionsnummer ist wichtig. Um einen Object Store oder seine Indizes zu ändern, öffnen Sie die Datenbank mit einer höheren Versionsnummer und nehmen die Änderungen im Handler für `upgradeneeded` vor (siehe unten). Das Aktualisieren von Datenbanken behandeln wir in diesem Tutorial nicht.

3. Fügen Sie direkt unter dem bisherigen Code die folgenden Event Handler hinzu:

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

   Der Event Handler für [`error`](/de/docs/Web/API/IDBRequest/error_event) wird ausgeführt, wenn das System meldet, dass die Anfrage fehlgeschlagen ist. So können Sie auf das Problem reagieren. In unserem Beispiel geben wir lediglich eine Meldung in der JavaScript-Konsole aus.

   Der Event Handler für [`success`](/de/docs/Web/API/IDBRequest/success_event) wird ausgeführt, wenn die Anfrage erfolgreich war und die Datenbank geöffnet wurde. In diesem Fall steht unter der Eigenschaft [`openRequest.result`](/de/docs/Web/API/IDBRequest/result) ein Objekt zur Verfügung, das die geöffnete Datenbank repräsentiert und mit dem wir sie bearbeiten können. Wir speichern es für die spätere Verwendung in der zuvor erstellten Variablen `db`. Außerdem rufen wir die Funktion `displayData()` auf, die die Daten aus der Datenbank im {{HTMLElement("ul")}} anzeigt. Wir rufen sie bereits jetzt auf, damit vorhandene Notizen beim Laden der Seite sofort erscheinen. Die Definition von `displayData()` folgt später.

4. Zum Abschluss dieses Abschnitts fügen wir den wohl wichtigsten Event Handler für die Einrichtung der Datenbank hinzu: [`upgradeneeded`](/de/docs/Web/API/IDBOpenDBRequest/upgradeneeded_event). Dieser Handler wird ausgeführt, wenn die Datenbank noch nicht eingerichtet wurde oder wenn sie mit einer höheren Versionsnummer als die bereits gespeicherte Datenbank geöffnet wird, also bei einem Upgrade. Fügen Sie unter dem vorherigen Handler folgenden Code hinzu:

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

   In diesem Handler erstellen wir den Object Store und seine Indizes. Zunächst erhalten wir eine Referenz auf die vorhandene Datenbank über die Eigenschaft `result` des Event Targets (`e.target.result`), also des `request`-Objekts. Das entspricht der Zeile `db = openRequest.result;` im Event Handler für `success`. Hier müssen wir es jedoch separat tun, weil der Event Handler für `upgradeneeded` gegebenenfalls vor dem für `success` ausgeführt wird. Andernfalls wäre der Wert von `db` noch nicht verfügbar.

   Anschließend erstellen wir mit [`IDBDatabase.createObjectStore()`](/de/docs/Web/API/IDBDatabase/createObjectStore) in unserer geöffneten Datenbank einen neuen Object Store namens `notes_os`. Der Store verwendet `id` als Schlüsselpfad und aktiviert `autoIncrement`, sodass IndexedDB neuen Datensätzen ohne angegebenen Schlüssel automatisch einen Schlüssel zuweist. Da `id` der Schlüssel ist, dient dieses Feld dazu, Datensätze eindeutig zu identifizieren, beispielsweise beim Löschen oder Anzeigen.

   Mit [`IDBObjectStore.createIndex()`](/de/docs/Web/API/IDBObjectStore/createIndex) erstellen wir Indizes für `title` und `body`. Über diese Indizes können Sie Notizen anhand der Werte dieser Eigenschaften suchen. Beide Indizes verwenden `unique: false`, sodass mehrere Notizen denselben Titel oder Textkörper haben können. Ein Datensatz darf auch Eigenschaften enthalten, für die kein Index existiert.

Das Formular in diesem Beispiel liefert die Eigenschaften `title` und `body`. Mit der automatisch erzeugten `id` sieht eine gespeicherte Notiz so aus:

```json
{
  "title": "Buy milk",
  "body": "Need both cows milk and soy.",
  "id": 8
}
```

### Daten zur Datenbank hinzufügen

Sehen wir uns nun an, wie wir Datensätze zur Datenbank hinzufügen. Dazu verwenden wir das Formular auf unserer Seite.

Fügen Sie unter dem bisherigen Event Handler die folgende Zeile hinzu. Sie richtet einen Event Handler für `submit` ein, der beim Absenden des Formulars die Funktion `addData()` ausführt. Das geschieht, wenn das Submit-{{htmlelement("button")}} gedrückt wird und das Formular erfolgreich abgesendet werden kann:

```js
// Create a submit event handler so that when the form is submitted the addData() function is run
form.addEventListener("submit", addData);
```

Definieren wir nun die Funktion `addData()`. Fügen Sie sie unter der vorherigen Zeile hinzu:

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

Das ist recht komplex. Im Einzelnen tun wir Folgendes:

- Wir rufen [`Event.preventDefault()`](/de/docs/Web/API/Event/preventDefault) für das Event-Objekt auf, damit das Formular nicht auf herkömmliche Weise abgesendet wird. Das würde die Seite neu laden und die Nutzung beeinträchtigen.
- Wir erstellen ein Objekt für den Datensatz, der in die Datenbank eingefügt werden soll, und füllen es mit den Werten aus den Formulareingaben. Einen Wert für `id` müssen wir nicht ausdrücklich angeben: Wie oben erklärt, wird er automatisch ergänzt.
- Wir öffnen mit der Methode [`IDBDatabase.transaction()`](/de/docs/Web/API/IDBDatabase/transaction) eine `readwrite`-Transaktion für den Object Store `notes_os`. Das Transaktionsobjekt ermöglicht uns den Zugriff auf den Object Store, um beispielsweise einen neuen Datensatz hinzuzufügen.
- Wir greifen mit der Methode [`IDBTransaction.objectStore()`](/de/docs/Web/API/IDBTransaction/objectStore) auf den Object Store zu und speichern das Ergebnis in der Variablen `objectStore`.
- Wir fügen den neuen Datensatz mit [`IDBObjectStore.add()`](/de/docs/Web/API/IDBObjectStore/add) zur Datenbank hinzu. Dabei wird, wie bereits zuvor, ein Anfrageobjekt erstellt.
- Wir fügen den Objekten `request` und `transaction` mehrere Event Handler hinzu, um an wichtigen Punkten ihres Ablaufs Code auszuführen. Sobald die Anfrage erfolgreich war, leeren wir die Formulareingaben für die nächste Notiz. Sobald die Transaktion abgeschlossen ist, rufen wir erneut `displayData()` auf, um die angezeigten Notizen zu aktualisieren.

### Daten anzeigen

Wir haben in unserem Code bereits zweimal auf `displayData()` verwiesen. Jetzt sollten wir die Funktion definieren. Fügen Sie sie unter der vorherigen Funktionsdefinition ein:

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

Gehen wir auch diesen Code Schritt für Schritt durch:

- Zunächst leeren wir den Inhalt des {{htmlelement("ul")}}-Elements, bevor wir es mit den aktualisierten Inhalten füllen. Ohne diesen Schritt würde bei jeder Aktualisierung eine immer längere Liste doppelter Einträge entstehen.
- Danach erhalten wir wie in `addData()` mit [`IDBDatabase.transaction()`](/de/docs/Web/API/IDBDatabase/transaction) und [`IDBTransaction.objectStore()`](/de/docs/Web/API/IDBTransaction/objectStore) eine Referenz auf den Object Store `notes_os`. Hier verketten wir die Aufrufe allerdings in einer Zeile.
- Anschließend öffnen wir mit der Methode [`IDBObjectStore.openCursor()`](/de/docs/Web/API/IDBObjectStore/openCursor) eine Anfrage für einen Cursor. Mit einem Cursor können wir die Datensätze in einem Object Store durchlaufen. Um den Code kürzer zu halten, verketten wir am Ende dieser Zeile einen Event Handler für `success`: Sobald der Cursor erfolgreich bereitgestellt wurde, wird der Handler ausgeführt.
- Mit `const cursor = e.target.result` erhalten wir eine Referenz auf den Cursor selbst, ein [`IDBCursor`](/de/docs/Web/API/IDBCursor)-Objekt.
- Als Nächstes prüfen wir, ob der Cursor einen Datensatz aus dem Datenspeicher enthält (`if (cursor){ }`). Falls ja, erstellen wir ein DOM-Fragment, füllen es mit den Daten des Datensatzes und fügen es innerhalb des `<ul>`-Elements in die Seite ein. Außerdem fügen wir eine Schaltfläche zum Löschen hinzu. Ein Klick darauf ruft die Funktion `deleteItem()` auf und löscht die betreffende Notiz. Diese Funktion betrachten wir im nächsten Abschnitt.
- Am Ende des `if`-Blocks bewegen wir den Cursor mit der Methode [`IDBCursor.continue()`](/de/docs/Web/API/IDBCursor/continue) zum nächsten Datensatz im Datenspeicher. Danach wird der Inhalt des `if`-Blocks erneut ausgeführt. Gibt es einen weiteren Datensatz, wird er dadurch in die Seite eingefügt. Anschließend wird wieder `continue()` ausgeführt und so weiter.
- Sind keine weiteren Datensätze vorhanden, liefert `cursor` den Wert `undefined`. Deshalb wird statt des `if`-Blocks der `else`-Block ausgeführt. Er prüft, ob Notizen in das `<ul>` eingefügt wurden. Falls nicht, fügt er eine Meldung ein, dass keine Notiz gespeichert ist.

### Eine Notiz löschen

Wie oben beschrieben, wird eine Notiz gelöscht, wenn Sie auf ihre Schaltfläche zum Löschen klicken. Das übernimmt die Funktion `deleteItem()`, die so aussieht:

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

- Der erste Teil bedarf einer Erklärung: Mit `Number(e.target.parentNode.getAttribute('data-note-id'))` lesen wir die ID des zu löschenden Datensatzes aus. Zur Erinnerung: Beim ersten Anzeigen wurde die ID des Datensatzes in einem Attribut `data-note-id` am `<li>` gespeichert. Wir müssen den Attributwert allerdings mit dem globalen, integrierten [`Number()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Number)-Objekt umwandeln. Er ist nämlich eine Zeichenfolge, während die Datenbank eine Zahl erwartet.
- Anschließend erhalten wir nach dem bereits bekannten Muster eine Referenz auf den Object Store und löschen den Datensatz mit der Methode [`IDBObjectStore.delete()`](/de/docs/Web/API/IDBObjectStore/delete), der wir die ID übergeben.
- Sobald die Datenbanktransaktion abgeschlossen ist, entfernen wir das `<li>` der Notiz aus dem DOM. Danach prüfen wir erneut, ob das `<ul>` nun leer ist, und fügen gegebenenfalls eine entsprechende Meldung ein.

Das war’s! Ihr Beispiel sollte jetzt funktionieren.

Falls Sie Schwierigkeiten haben, können Sie es mit [unserem Live-Beispiel vergleichen](https://mdn.github.io/learning-area/javascript/apis/client-side-storage/indexeddb/notes/). Sehen Sie sich dazu auch den [Quellcode](https://github.com/mdn/learning-area/blob/main/javascript/apis/client-side-storage/indexeddb/notes/index.js) an.

### Komplexe Daten mit IndexedDB speichern

Wie bereits erwähnt, kann IndexedDB mehr als nur Zeichenfolgen speichern. Sie können nahezu alles darin ablegen, auch komplexe Objekte wie Video- oder Bild-Blobs. Das ist kaum schwieriger als das Speichern anderer Datentypen.

Um dies zu demonstrieren, haben wir ein weiteres Beispiel namens [IndexedDB-Videospeicher](https://github.com/mdn/learning-area/tree/main/javascript/apis/client-side-storage/indexeddb/video-store) erstellt. Sie können es sich auch [live ansehen](https://mdn.github.io/learning-area/javascript/apis/client-side-storage/indexeddb/video-store/). Beim ersten Ausführen lädt das Beispiel alle Videos aus dem Netzwerk herunter, speichert sie in einer IndexedDB-Datenbank und zeigt sie anschließend in {{htmlelement("video")}}-Elementen der Benutzeroberfläche an. Beim zweiten Ausführen findet es die Videos in der Datenbank und ruft sie von dort ab, bevor es sie anzeigt. Dadurch benötigen spätere Ladevorgänge deutlich weniger Zeit und Bandbreite.

Gehen wir die interessantesten Teile des Beispiels durch. Wir betrachten nicht alles: Vieles ähnelt dem vorherigen Beispiel, und der Code ist gut kommentiert.

1. Für dieses Beispiel haben wir die Namen der abzurufenden Videos in einem Array aus Objekten gespeichert:

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

2. Sobald die Datenbank erfolgreich geöffnet wurde, führen wir zunächst eine Funktion `init()` aus. Sie durchläuft die verschiedenen Videonamen und versucht, aus der Datenbank `videos` jeweils einen Datensatz abzurufen, der durch den Namen identifiziert wird.

   Wenn ein Video in der Datenbank gefunden wird – dazu prüfen wir, ob `request.result` als `true` ausgewertet wird; fehlt der Datensatz, ist der Wert `undefined` –, werden seine Videodateien, die als Blobs gespeichert sind, und sein Name direkt an `displayVideo()` übergeben, damit es in der Benutzeroberfläche erscheint. Andernfalls wird der Videoname an `fetchVideoFromNetwork()` übergeben, um das Video aus dem Netzwerk abzurufen.

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

3. Der folgende Ausschnitt stammt aus `fetchVideoFromNetwork()`. Hier rufen wir mit zwei getrennten [`fetch()`](/de/docs/Web/API/Window/fetch)-Anfragen eine MP4- und eine WebM-Version des Videos ab. Anschließend extrahieren wir mit der Methode [`Response.blob()`](/de/docs/Web/API/Response/blob) den Inhalt jeder Antwort als Blob. So erhalten wir eine Objektrepräsentation der Videos, die wir später speichern und anzeigen können.

   Dabei gibt es ein Problem: Beide Anfragen sind asynchron, aber wir möchten erst versuchen, das Video anzuzeigen oder zu speichern, wenn beide Promises erfüllt sind. Glücklicherweise gibt es dafür eine integrierte Methode: {{jsxref("Promise.all()")}}. Sie erwartet ein Argument – ein Array mit Referenzen auf alle einzelnen Promises, auf deren Erfüllung Sie warten möchten – und gibt ein Promise zurück, das erfüllt wird, sobald alle einzelnen Promises erfüllt sind.

   Im `then()`-Handler dieses Promise rufen wir wie zuvor `displayVideo()` auf, um die Videos in der Benutzeroberfläche anzuzeigen. Zusätzlich rufen wir `storeVideo()` auf, um sie in der Datenbank zu speichern.

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

4. Betrachten wir zuerst `storeVideo()`. Die Funktion folgt weitgehend dem Muster, das Sie im vorherigen Beispiel zum Hinzufügen von Daten zur Datenbank kennengelernt haben: Wir öffnen eine `readwrite`-Transaktion, erhalten eine Referenz auf unseren Object Store `videos_os`, erstellen ein Objekt für den einzufügenden Datensatz und fügen es mit [`IDBObjectStore.add()`](/de/docs/Web/API/IDBObjectStore/add) hinzu.

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

5. Schließlich gibt es `displayVideo()`. Diese Funktion erstellt die DOM-Elemente, die zum Anzeigen des Videos in der Benutzeroberfläche nötig sind, und fügt sie in die Seite ein. Besonders interessant sind die unten gezeigten Teile: Um unsere Video-Blobs in einem `<video>`-Element anzuzeigen, müssen wir mit der Methode [`URL.createObjectURL()`](/de/docs/Web/API/URL/createObjectURL_static) Objekt-URLs erstellen. Das sind interne URLs, die auf die im Arbeitsspeicher befindlichen Video-Blobs verweisen. Anschließend können wir diese Objekt-URLs als Werte der `src`-Attribute unserer {{htmlelement("source")}}-Elemente verwenden.

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

## Ressourcen für die Offline-Nutzung speichern

Das vorherige Beispiel zeigt bereits, wie Sie eine Anwendung erstellen, die große Ressourcen in einer IndexedDB-Datenbank speichert, sodass sie nicht mehrfach heruntergeladen werden müssen. Das verbessert die Nutzererfahrung erheblich. Allerdings fehlt noch etwas: Die Hauptdateien für HTML, CSS und JavaScript müssen bei jedem Aufruf der Website erneut heruntergeladen werden. Ohne Netzwerkverbindung funktioniert sie daher nicht.

![Firefox-Offline-Ansicht mit einer gezeichneten Figur auf der linken Seite, die rechts einen zweipoligen Stecker und links eine passende Steckdose hält. Rechts stehen eine Offline-Meldung und eine mit „Try again“ beschriftete Schaltfläche.](ff-offline.png)

Hier kommen [Service Worker](/de/docs/Web/API/Service_Worker_API) und die eng damit verbundene [Cache API](/de/docs/Web/API/Cache) ins Spiel.

Ein Service Worker ist eine JavaScript-Datei, die beim Aufruf durch einen Browser für einen bestimmten Origin registriert wird – eine Website oder einen Teil einer Website unter einer bestimmten Domain. Nach der Registrierung kann er Seiten dieses Origins kontrollieren. Dazu befindet er sich zwischen der geladenen Seite und dem Netzwerk und fängt Netzwerkanfragen ab, die an diesen Origin gerichtet sind.

Mit einer abgefangenen Anfrage kann er auf verschiedene Weise umgehen (siehe [Ideen für Anwendungsfälle](/de/docs/Web/API/Service_Worker_API#other_use_case_ideas)). Das klassische Beispiel besteht darin, Netzwerkantworten offline zu speichern und bei späteren Anfragen statt einer Antwort aus dem Netzwerk die gespeicherte Antwort bereitzustellen. So kann eine Website vollständig offline funktionieren.

Die Cache API ist ein weiterer Mechanismus zur clientseitigen Speicherung, allerdings mit einem besonderen Zweck: Sie ist auf das Speichern von HTTP-Antworten ausgelegt und funktioniert daher sehr gut mit Service Workern.

### Ein Service-Worker-Beispiel

Sehen wir uns ein Beispiel an, damit Sie eine Vorstellung davon bekommen, wie das aussehen kann. Wir haben eine weitere Version des Videospeichers aus dem vorherigen Abschnitt erstellt. Sie funktioniert genauso, speichert aber mithilfe eines Service Workers zusätzlich HTML, CSS und JavaScript über die Cache API. Dadurch kann das Beispiel offline ausgeführt werden.

Sehen Sie sich den [IndexedDB-Videospeicher mit Service Worker live an](https://mdn.github.io/learning-area/javascript/apis/client-side-storage/cache-sw/video-store-offline/) und werfen Sie einen Blick auf den [Quellcode](https://github.com/mdn/learning-area/tree/main/javascript/apis/client-side-storage/cache-sw/video-store-offline).

#### Den Service Worker registrieren

Zunächst fällt ein zusätzlicher Codeabschnitt in der Hauptdatei für JavaScript auf (siehe [index.js](https://github.com/mdn/learning-area/blob/main/javascript/apis/client-side-storage/cache-sw/video-store-offline/index.js)). Als Erstes prüfen wir mittels Feature Detection, ob das Mitglied `serviceWorker` im [`Navigator`](/de/docs/Web/API/Navigator)-Objekt verfügbar ist. Ist das Ergebnis wahr, wissen wir, dass der Browser zumindest die grundlegenden Funktionen von Service Workern unterstützt. Anschließend registrieren wir mit der Methode [`ServiceWorkerContainer.register()`](/de/docs/Web/API/ServiceWorkerContainer/register) einen Service Worker aus der Datei `sw.js` für den Origin, unter dem er sich befindet. So kann er Seiten im selben Verzeichnis und in dessen Unterverzeichnissen kontrollieren. Sobald das zugehörige Promise erfüllt ist, gilt der Service Worker als registriert.

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
> Der angegebene Pfad zur Datei `sw.js` bezieht sich auf den Origin der Website, nicht auf die JavaScript-Datei, die diesen Code enthält. Der Service Worker befindet sich unter `https://mdn.github.io/learning-area/javascript/apis/client-side-storage/cache-sw/video-store-offline/sw.js`. Der Origin ist `https://mdn.github.io`; deshalb muss der angegebene Pfad `/learning-area/javascript/apis/client-side-storage/cache-sw/video-store-offline/sw.js` lauten. Wenn Sie dieses Beispiel auf einem eigenen Server bereitstellen möchten, müssen Sie den Pfad entsprechend ändern. Das mag verwirrend sein, ist aber aus Sicherheitsgründen notwendig.

#### Den Service Worker installieren

Wenn beim nächsten Mal eine Seite unter der Kontrolle des Service Workers aufgerufen wird, etwa beim erneuten Laden des Beispiels, wird der Service Worker für diese Seite installiert und beginnt, sie zu kontrollieren. Dabei wird auf dem Service Worker ein `install`-Event ausgelöst. Sie können im Service Worker selbst Code schreiben, der auf die Installation reagiert.

Sehen wir uns ein Beispiel in der Datei [sw.js](https://github.com/mdn/learning-area/blob/main/javascript/apis/client-side-storage/cache-sw/video-store-offline/sw.js), also im Service Worker, an. Der Listener für `install` ist auf `self` registriert. Mit dem Schlüsselwort `self` können Sie innerhalb der Service-Worker-Datei auf den globalen Gültigkeitsbereich des Service Workers verweisen.

Im Handler für `install` verwenden wir die auf dem Event-Objekt verfügbare Methode [`ExtendableEvent.waitUntil()`](/de/docs/Web/API/ExtendableEvent/waitUntil). Damit signalisieren wir dem Browser, dass er die Installation des Service Workers erst abschließen soll, nachdem das übergebene Promise erfolgreich erfüllt wurde.

Hier sehen wir die Cache API in Aktion. Mit der Methode [`CacheStorage.open()`](/de/docs/Web/API/CacheStorage/open) öffnen wir ein neues Cache-Objekt, in dem Antworten gespeichert werden können, ähnlich einem IndexedDB Object Store. Das Promise wird mit einem [`Cache`](/de/docs/Web/API/Cache)-Objekt erfüllt, das den Cache `video-store` repräsentiert. Anschließend rufen wir mit der Methode [`Cache.addAll()`](/de/docs/Web/API/Cache/addAll) mehrere Ressourcen ab und fügen ihre Antworten dem Cache hinzu.

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

Damit ist die Installation vorerst abgeschlossen.

#### Auf weitere Anfragen antworten

Der Service Worker ist jetzt registriert und für unsere HTML-Seite installiert; außerdem liegen alle relevanten Ressourcen im Cache. Wir sind fast fertig. Es fehlt nur noch Code, der auf weitere Netzwerkanfragen antwortet.

Das übernimmt der zweite Codeabschnitt in `sw.js`. Wir fügen dem globalen Gültigkeitsbereich des Service Workers einen weiteren Listener hinzu. Er führt die Handler-Funktion aus, wenn das `fetch`-Event ausgelöst wird. Das geschieht immer dann, wenn der Browser eine Ressource aus dem Verzeichnis anfordert, für das der Service Worker registriert ist.

Im Handler protokollieren wir zunächst die URL der angeforderten Ressource. Anschließend stellen wir mit der Methode [`FetchEvent.respondWith()`](/de/docs/Web/API/FetchEvent/respondWith) eine eigene Antwort auf die Anfrage bereit.

Innerhalb dieses Blocks prüfen wir mit [`CacheStorage.match()`](/de/docs/Web/API/CacheStorage/match), ob sich in einem der Caches eine passende Anfrage befindet, deren URL also übereinstimmt. Falls ein Treffer gefunden wird, wird das Promise mit der passenden Antwort erfüllt; andernfalls mit `undefined`.

Bei einem Treffer geben wir die gespeicherte Antwort zurück. Andernfalls rufen wir die Antwort mit [fetch()](/de/docs/Web/API/Window/fetch) aus dem Netzwerk ab und geben stattdessen diese zurück.

```js
self.addEventListener("fetch", (e) => {
  console.log(e.request.url);
  e.respondWith(
    caches.match(e.request).then((response) => response || fetch(e.request)),
  );
});
```

Damit ist unser Service Worker fertig.
Mit Service Workern lässt sich noch viel mehr machen. Ausführlichere Informationen finden Sie im [Service-Worker-Kochbuch](https://github.com/mdn/serviceworker-cookbook).
Vielen Dank an Paul Kinlan für seinen Artikel [Adding a Service Worker and Offline into your Web App](https://developers.google.com/codelabs/pwa-training/pwa03--going-offline#0), der dieses Beispiel inspiriert hat.

#### Das Beispiel offline testen

Um unser [Service-Worker-Beispiel](https://mdn.github.io/learning-area/javascript/apis/client-side-storage/cache-sw/video-store-offline/) zu testen, müssen Sie es einige Male laden, damit der Service Worker sicher installiert ist. Danach können Sie:

- Ihre Netzwerkverbindung trennen oder WLAN ausschalten.
- In Firefox _Datei > Offline arbeiten_ auswählen.
- In Chrome die Entwicklerwerkzeuge öffnen, _Application > Service Workers_ auswählen und das Kontrollkästchen _Offline_ aktivieren.

Wenn Sie die Beispielseite erneut laden, sollte sie weiterhin problemlos angezeigt werden. Alles ist offline gespeichert: die Seitenressourcen in einem Cache und die Videos in einer IndexedDB-Datenbank.

## Zusammenfassung

Das war’s fürs Erste. Wir hoffen, dass Ihnen dieser Überblick über Technologien zur clientseitigen Speicherung geholfen hat.

## Siehe auch

- [Web Storage API](/de/docs/Web/API/Web_Storage_API)
- [IndexedDB API](/de/docs/Web/API/IndexedDB_API)
- [Cookies](/de/docs/Web/HTTP/Guides/Cookies)
- [Service Worker API](/de/docs/Web/API/Service_Worker_API)

{{PreviousMenuNext("Learn_web_development/Extensions/Client-side_APIs/Drawing_graphics", "Learn_web_development/Extensions/Client-side_APIs/Third_party_APIs", "Learn_web_development/Extensions/Client-side_APIs")}}
