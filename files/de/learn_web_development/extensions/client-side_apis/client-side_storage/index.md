---
title: Client-seitige Speicherung
slug: Learn_web_development/Extensions/Client-side_APIs/Client-side_storage
l10n:
  sourceCommit: a4fcf79b60471db6f148fa4ba36f2cdeafbbeb70
---

{{PreviousMenuNext("Learn_web_development/Extensions/Client-side_APIs/Drawing_graphics", "Learn_web_development/Extensions/Client-side_APIs/Third_party_APIs", "Learn_web_development/Extensions/Client-side_APIs")}}

Moderne Webbrowser unterstützen eine Reihe von Möglichkeiten, wie Websites Daten auf dem Computer des Benutzers speichern können — mit der Zustimmung des Benutzers — und sie bei Bedarf wieder abrufen können. Dies ermöglicht es Ihnen, Daten für die langfristige Speicherung zu behalten, Websites oder Dokumente für die Offline-Nutzung zu speichern, benutzerspezifische Einstellungen für Ihre Website zu behalten und mehr. Dieser Artikel erklärt die Grundlagen, wie diese funktionieren.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Vertrautheit mit <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a>, <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS</a> und <a href="/de/docs/Learn_web_development/Core/Scripting">JavaScript</a>, insbesondere <a href="/de/docs/Learn_web_development/Core/Scripting/Object_basics">Grundlagen von JavaScript-Objekten</a> und der Abdeckung von Kern-APIs wie <a href="/de/docs/Learn_web_development/Core/Scripting/DOM_scripting">DOM Scripting</a> und <a href="/de/docs/Learn_web_development/Core/Scripting/Network_requests">Netzwerkanfragen</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Die Konzepte der client-seitigen Speicherung und welche Schlüsseltechnologien diese ermöglichen — Web Storage API, Cookies, Cache API und die IndexedDB API.</li>
          <li>Schlüsselanwendungsfälle — Zustand über Neuladungen hinweg erhalten, Login- und Nutzerpersonalisierungsdaten persistent halten und lokal/offline arbeiten.</li>
          <li>Verwendung von Web Storage für einfache Speicherungen von Schlüssel-Wert-Paaren, gesteuert durch JavaScript.</li>
          <li>Verwendung von IndexedDB zum Speichern komplexerer, strukturierter Daten.</li>
          <li>Verwendung der Cache API und von Service Workern für Offline-Anwendungsfälle.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Client-seitige Speicherung?

An anderer Stelle im MDN-Lernbereich haben wir über den Unterschied zwischen [statischen Seiten](/de/docs/Learn_web_development/Extensions/Server-side/First_steps/Client-Server_overview#static_sites) und [dynamischen Seiten](/de/docs/Learn_web_development/Extensions/Server-side/First_steps/Client-Server_overview#dynamic_sites) gesprochen. Die meisten großen modernen Websites sind dynamisch — sie speichern Daten auf dem Server mit Hilfe einer Art von Datenbank (serverseitige Speicherung), führen dann [serverseitigen](/de/docs/Learn_web_development/Extensions/Server-side) Code aus, um benötigte Daten abzurufen, sie in statische Seitenvorlagen einzufügen und das resultierende HTML an den Client zu senden, welcher es im Browser des Benutzers anzeigt.

Die client-seitige Speicherung funktioniert nach ähnlichen Prinzipien, aber sie hat andere Verwendungszwecke. Sie besteht aus JavaScript-APIs, die es Ihnen erlauben, Daten auf dem Client (d.h. auf dem Gerät des Benutzers) zu speichern und sie dann bei Bedarf abzurufen. Dies hat viele verschiedene Anwendungsfälle, wie z.B.:

- Personalisierung von Website-Einstellungen (z.B. Anzeigen der benutzerspezifischen Auswahl an Widgets, Farbschema oder Schriftgröße).
- Beibehalten vorheriger Website-Aktivitäten (z.B. Speichern der Inhalte eines Warenkorbs aus einer vorherigen Sitzung, Erinnerung, ob ein Benutzer zuvor eingeloggt war).
- Lokales Speichern von Daten und Ressourcen, sodass eine Website schneller heruntergeladen werden kann (und möglicherweise weniger kostspielig) oder ohne Netzwerkverbindung nutzbar ist.
- Speichern von Dokumenten, die von Webanwendungen lokal für die Offline-Nutzung erzeugt werden.

Häufig werden client-seitige und serverseitige Speicherungen zusammen genutzt. Beispielsweise könnten Sie eine Reihe von Musikdateien (vielleicht genutzt von einem Webspiel oder einer Musikabspielanwendung) herunterladen, diese in einer client-seitigen Datenbank speichern und bei Bedarf abspielen. Der Benutzer müsste die Musikdateien nur einmal herunterladen — bei späteren Besuchen würden sie stattdessen aus der Datenbank abgerufen.

> [!NOTE]
> Es gibt Begrenzungen für die Menge an Daten, die Sie mit den client-seitigen Speicher-APIs speichern können (möglicherweise sowohl pro individueller API als auch kumulativ); das genaue Limit variiert je nach Browser und möglicherweise basierend auf den Benutzereinstellungen. Weitere Informationen finden Sie unter [Browser-Speicherlimits und Kriterien für die Löschung](/de/docs/Web/API/Storage_API/Storage_quotas_and_eviction_criteria).

### Old School: Cookies

Das Konzept der client-seitigen Speicherung gibt es schon lange. Seit den Anfängen des Webs haben Websites [Cookies](/de/docs/Web/HTTP/Guides/Cookies) verwendet, um Informationen zu speichern, die das Benutzererlebnis auf Websites personalisieren. Sie sind die früheste Form der client-seitigen Speicherung, die im Web häufig verwendet wird.

Heutzutage gibt es einfachere Mechanismen, um client-seitige Daten zu speichern, daher werden wir Ihnen in diesem Artikel nicht beibringen, wie man Cookies verwendet. Dies bedeutet jedoch nicht, dass Cookies im modernen Web komplett nutzlos sind — sie werden immer noch häufig verwendet, um Daten im Zusammenhang mit Benutzerpersonalisierung und -zustand zu speichern, z.B. Sitzungs-IDs und Zugangstokens. Weitere Informationen zu Cookies finden Sie in unserem Artikel [Verwendung von HTTP-Cookies](/de/docs/Web/HTTP/Guides/Cookies).

### New School: Web Storage und IndexedDB

Die oben erwähnten "einfacheren" Funktionen sind wie folgt:

- Die [Web Storage API](/de/docs/Web/API/Web_Storage_API) bietet einen Mechanismus zum Speichern und Abrufen kleinerer Dateneinheiten, die aus einem Namen und einem entsprechenden Wert bestehen. Dies ist nützlich, wenn Sie nur einige einfache Daten speichern müssen, z.B. den Benutzernamen, ob ein Benutzer eingeloggt ist, welche Farbe für den Bildschirmhintergrund verwendet werden soll usw.
- Die [IndexedDB API](/de/docs/Web/API/IndexedDB_API) stellt dem Browser ein vollständiges Datenbanksystem zur Speicherung komplexer Daten bereit. Dies kann für alles verwendet werden, von kompletten Kundendatensätzen bis hin zu komplexen Datentypen wie Audio- oder Videodateien.

Mehr über diese APIs erfahren Sie unten.

### Die Cache API

Die [`Cache`](/de/docs/Web/API/Cache) API wurde zum Speichern von HTTP-Antworten auf bestimmte Anfragen entwickelt und ist sehr nützlich für Dinge wie das Speichern von Website-Ressourcen offline, sodass die Website anschließend ohne Netzwerkverbindung genutzt werden kann. Cache wird in der Regel in Kombination mit der [Service Worker API](/de/docs/Web/API/Service_Worker_API) verwendet, muss aber nicht zwingend.

Die Verwendung von Cache und Service-Workern ist ein fortgeschrittenes Thema, und wir werden es in diesem Artikel nicht im Detail behandeln, obwohl wir ein Beispiel im Abschnitt [Offline-Asset-Speicherung](#offline-asset-speicherung) unten zeigen werden.

## Speichern einfacher Daten — Web Storage

Die [Web Storage API](/de/docs/Web/API/Web_Storage_API) ist sehr einfach zu benutzen — Sie speichern einfache Namens-/Wertepaare von Daten (begrenzt auf Strings, Nummern etc.) und rufen diese Werte bei Bedarf ab.

### Grundsyntax

Lassen Sie uns Ihnen zeigen, wie:

1. Besuchen Sie zunächst unsere [Web Storage Blanko-Vorlage](https://mdn.github.io/learning-area/javascript/apis/client-side-storage/web-storage/index.html) auf GitHub (öffnen Sie diese in einem neuen Tab).
2. Öffnen Sie die JavaScript-Konsole in den Entwicklerwerkzeugen Ihres Browsers.
3. Alle Ihre Web Storage-Daten befinden sich innerhalb von zwei objektähnlichen Strukturen im Browser: [`sessionStorage`](/de/docs/Web/API/Window/sessionStorage) und [`localStorage`](/de/docs/Web/API/Window/localStorage). Die erste speichert Daten, solange der Browser geöffnet ist (die Daten gehen verloren, wenn der Browser geschlossen wird) und die zweite speichert Daten sogar nach dem Schließen und erneuten Öffnen des Browsers. Wir werden in diesem Artikel die zweite verwenden, da sie im Allgemeinen nützlicher ist.

   Die Methode [`Storage.setItem()`](/de/docs/Web/API/Storage/setItem) ermöglicht es Ihnen, einen Datenpunkt im Speicher zu speichern — sie nimmt zwei Parameter entgegen: den Namen des Elements und dessen Wert. Versuchen Sie, das in Ihre JavaScript-Konsole einzugeben (ändern Sie den Wert auf Ihren eigenen Namen, wenn Sie möchten!):

   ```js
   localStorage.setItem("name", "Chris");
   ```

4. Die Methode [`Storage.getItem()`](/de/docs/Web/API/Storage/getItem) nimmt einen Parameter entgegen — den Namen des Datenpunkts, den Sie abrufen möchten — und gibt den Wert des Elements zurück. Geben Sie nun diese Zeilen in Ihre JavaScript-Konsole ein:

   ```js
   let myName = localStorage.getItem("name");
   myName;
   ```

   Nach Eingabe der zweiten Zeile sollten Sie sehen, dass die Variable `myName` nun den Wert des `name`-Datenpunkts enthält.

5. Die Methode [`Storage.removeItem()`](/de/docs/Web/API/Storage/removeItem) nimmt einen Parameter entgegen — den Namen des Datenpunkts, den Sie entfernen möchten — und entfernt dieses Element aus dem Web Storage. Geben Sie die folgenden Zeilen in Ihre JavaScript-Konsole ein:

   ```js
   localStorage.removeItem("name");
   myName = localStorage.getItem("name");
   myName;
   ```

   Die dritte Zeile sollte nun `null` zurückgeben — das `name`-Element existiert nicht mehr im Web Storage.

### Die Daten bleiben bestehen!

Ein Schlüsselmerkmal des Web Storage ist, dass die Daten zwischen den Seitenladungen bestehen bleiben (und sogar, wenn der Browser heruntergefahren wird, im Falle von `localStorage`). Lassen Sie uns das in Aktion sehen.

1. Öffnen Sie unsere Web Storage Blanko-Vorlage erneut, aber diesmal in einem anderen Browser als dem, in dem Sie dieses Tutorial geöffnet haben! Dies wird es einfacher machen, damit umzugehen.
2. Geben Sie diese Zeilen in die JavaScript-Konsole des Browsers ein:

   ```js
   localStorage.setItem("name", "Chris");
   let myName = localStorage.getItem("name");
   myName;
   ```

   Sie sollten das `name`-Element zurückgegeben sehen.

3. Nun schließen Sie den Browser und öffnen ihn wieder.
4. Geben Sie die folgenden Zeilen erneut ein:

   ```js
   let myName = localStorage.getItem("name");
   myName;
   ```

   Sie sollten feststellen, dass der Wert weiterhin verfügbar ist, obwohl der Browser geschlossen und dann wieder geöffnet wurde.

### Separater Speicher für jede Domain

Es gibt einen separaten Datenspeicher für jede Domain (jede in den Browser geladene separate Webadresse). Sie werden sehen, dass, wenn Sie zwei Websites laden (sagen wir google.com und amazon.com) und versuchen, ein Element auf einer Website zu speichern, es auf der anderen Website nicht verfügbar sein wird.

Das macht Sinn — man kann sich die Sicherheitsprobleme vorstellen, die auftreten würden, wenn Websites die Daten anderer sehen könnten!

### Ein umfangreicheres Beispiel

Lassen Sie uns dieses neu erworbene Wissen anwenden, indem wir ein funktionierendes Beispiel schreiben, das Ihnen eine Vorstellung davon gibt, wie Web Storage verwendet werden kann. Unser Beispiel erlaubt es Ihnen, einen Namen einzugeben, woraufhin die Seite ein personalisiertes Begrüßungstext aktualisiert. Dieser Zustand wird auch über Seiten-/Browserneuladen hinweg bestehen bleiben, weil der Name im Web Storage gespeichert ist.

Das Beispiel HTML finden Sie unter [personal-greeting.html](https://github.com/mdn/learning-area/blob/main/javascript/apis/client-side-storage/web-storage/personal-greeting.html) — dies enthält eine Website mit einem Header, Inhalt und Footer sowie ein Formular für die Eingabe Ihres Namens.

![Ein Screenshot einer Website, die über Header-, Inhalts- und Footer-Bereiche verfügt. In der linken Seite des Headers steht ein Willkommenssatz, und auf der rechten Seite befindet sich ein Knopf mit der Beschriftung 'forget'. Der Inhalt hat eine Überschrift gefolgt von zwei Absätzen Dummytext. Der Footer lautet 'Copyright nobody. Use the code as you like'.](web-storage-demo.png)

Lassen Sie uns das Beispiel aufbauen, damit Sie verstehen, wie es funktioniert.

1. Erstellen Sie zunächst eine lokale Kopie unserer [personal-greeting.html](https://github.com/mdn/learning-area/blob/main/javascript/apis/client-side-storage/web-storage/personal-greeting.html) Datei in einem neuen Verzeichnis auf Ihrem Computer.
2. Beachten Sie als nächstes, dass unser HTML auf eine JavaScript-Datei namens `index.js` verweist, mit einer Zeile wie `<script src="index.js" defer></script>`. Diese müssen wir erstellen und unseren JavaScript-Code dort einfügen. Erstellen Sie eine `index.js` Datei im gleichen Verzeichnis wie Ihre HTML-Datei.
3. Wir beginnen damit, Referenzen zu allen HTML-Funktionen zu erstellen, die wir in diesem Beispiel manipulieren müssen — wir erstellen sie alle als Konstante, da diese Referenzen im Lebenszyklus der App nicht geändert werden müssen. Fügen Sie die folgenden Zeilen zu Ihrer JavaScript-Datei hinzu:

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

4. Als nächstes müssen wir einen kleinen Event-Listener hinzufügen, um zu verhindern, dass das Formular sich tatsächlich abschickt, wenn der Senden-Button gedrückt wird, da dies nicht das Verhalten ist, das wir möchten. Fügen Sie diesen Ausschnitt direkt unter Ihren vorherigen Code hinzu:

   ```js
   // Stop the form from submitting when a button is pressed
   form.addEventListener("submit", (e) => e.preventDefault());
   ```

5. Jetzt müssen wir einen Event-Listener hinzufügen, dessen Handler-Funktion ausgeführt wird, wenn der "Say hello"-Button geklickt wird. Die Kommentare erläutern im Detail, was jeder Teil macht, aber im Wesentlichen nehmen wir den Namen, den der Benutzer in das Texteingabefeld eingegeben hat, speichern ihn im Web Storage mit `setItem()` und führen dann eine Funktion namens `nameDisplayCheck()` aus, die den tatsächlichen Website-Text aktualisiert. Fügen Sie dies am Ende Ihres Codes hinzu:

   ```js
   // run function when the 'Say hello' button is clicked
   submitBtn.addEventListener("click", () => {
     // store the entered name in web storage
     localStorage.setItem("name", nameInput.value);
     // run nameDisplayCheck() to sort out displaying the personalized greetings and updating the form display
     nameDisplayCheck();
   });
   ```

6. Zu diesem Zeitpunkt benötigen wir auch eine Ereignis-Handler-Funktion, die ausgeführt wird, wenn der "Forget"-Button geklickt wird — dies wird nur angezeigt, nachdem der "Say hello"-Button geklickt wurde (die beiden Formularzustände wechseln sich ab). In dieser Funktion entfernen wir das `name`-Element aus dem Web Storage mit `removeItem()` und führen dann erneut `nameDisplayCheck()` aus, um die Anzeige zu aktualisieren. Fügen Sie dies am Ende ein:

   ```js
   // run function when the 'Forget' button is clicked
   forgetBtn.addEventListener("click", () => {
     // Remove the stored name from web storage
     localStorage.removeItem("name");
     // run nameDisplayCheck() to sort out displaying the generic greeting again and updating the form display
     nameDisplayCheck();
   });
   ```

7. Jetzt ist es an der Zeit, die `nameDisplayCheck()` Funktion selbst zu definieren. Hier überprüfen wir, ob der Namenspunkt im Web Storage gespeichert wurde, indem wir `localStorage.getItem('name')` als Bedingungstest verwenden. Wenn der Name gespeichert wurde, wird dieser Aufruf zu `true` ausgewertet; wenn nicht, wird der Aufruf zu `false` ausgewertet. Wenn der Aufruf zu `true` ausgewertet wird, zeigen wir eine personalisierte Begrüßung an, zeigen den "forget" Teil des Formulars an und verbergen den "Say hello" Teil des Formulars. Wenn der Aufruf zu `false` ausgewertet wird, zeigen wir eine allgemeine Begrüßung an und machen das Gegenteil. Legen Sie auch diesen Code am Ende ab:

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

8. Zu guter Letzt müssen wir die `nameDisplayCheck()` Funktion ausführen, wenn die Seite geladen wird. Wenn wir dies nicht tun, wird die personalisierte Begrüßung nicht über das Neuladen der Seite erhalten bleiben. Fügen Sie Folgendes am Ende Ihres Codes hinzu:

   ```js
   nameDisplayCheck();
   ```

Ihr Beispiel ist abgeschlossen — gut gemacht! Alles, was jetzt noch bleibt, ist, Ihren Code zu speichern und Ihre HTML-Seite in einem Browser zu testen. Sie können unsere [fertige Version hier live sehen](https://mdn.github.io/learning-area/javascript/apis/client-side-storage/web-storage/personal-greeting.html).

> [!NOTE]
> Es gibt ein weiteres, etwas komplexeres Beispiel, das Sie unter [Verwendung der Web Storage API](/de/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API) erkunden können.

> [!NOTE]
> In der Zeile `<script src="index.js" defer></script>` des Quellcodes unserer fertigen Version gibt das `defer`-Attribut an, dass der Inhalt des {{htmlelement("script")}}-Elements erst ausgeführt wird, nachdem die Seite vollständig geladen wurde.

## Speichern komplexer Daten — IndexedDB

Die [IndexedDB API](/de/docs/Web/API/IndexedDB_API) (manchmal als IDB abgekürzt) ist ein vollständiges Datenbanksystem, das im Browser verfügbar ist und in dem Sie komplexe verwandte Daten speichern können, die nicht auf einfache Werte wie Strings oder Zahlen beschränkt sind. Sie können Videos, Bilder und nahezu alles andere in einer IndexedDB-Instanz speichern.

Die IndexedDB-API ermöglicht es Ihnen, eine Datenbank zu erstellen, dann Objekt-Speicher innerhalb dieser Datenbank zu erstellen.
Objektspeicher sind wie Tabellen in einer relationalen Datenbank, und jeder Objektspeicher kann eine Anzahl von Objekten enthalten.
Um mehr über die IndexedDB API zu erfahren, sehen Sie sich [Verwendung von IndexedDB](/de/docs/Web/API/IndexedDB_API/Using_IndexedDB) an.

Allerdings ist dies mit Kosten verbunden: IndexedDB ist viel komplexer zu nutzen als die Web Storage API. In diesem Abschnitt werden wir nur an der Oberfläche dessen kratzen, wozu es fähig ist, aber wir werden Ihnen genug geben, um anzufangen.

### Durcharbeiten eines Notizspeicher-Beispiels

Hier führen wir Sie durch ein Beispiel, das es Ihnen ermöglicht, Notizen in Ihrem Browser zu speichern und diese wann immer Sie möchten anzuzeigen und zu löschen, indem Sie sie für sich selbst aufbauen und die grundlegendsten Teile von IDB erklären, während wir voranschreiten.

Die App sieht in etwa so aus:

![IndexDB Notizen-Demo-Screenshot mit 4 Abschnitten. Der erste Abschnitt ist der Header. Der zweite Abschnitt listet alle Notizen, die erstellt wurden. Es hat zwei Notizen, jede mit einem Löschbutton. Ein dritter Abschnitt ist ein Formular mit zwei Eingabefeldern für 'Notiztitel' und 'Notiztext' und einem Button mit der Beschriftung 'Neue Notiz erstellen'. Der untere Abschnitt-Footer liest 'Copyright nobody. Use the code as you like'.](idb-demo.png)

Jede Notiz hat einen Titel und einen Textkörper, die jeweils individuell bearbeitbar sind. Der JavaScript-Code, den wir unten durchgehen, enthält detaillierte Kommentare, die Ihnen helfen, zu verstehen, was vor sich geht.

### Erste Schritte

1. Machen Sie zuerst lokale Kopien unseres [`index.html`](https://github.com/mdn/learning-area/blob/main/javascript/apis/client-side-storage/indexeddb/notes/index.html), [`style.css`](https://github.com/mdn/learning-area/blob/main/javascript/apis/client-side-storage/indexeddb/notes/style.css) und [`index-start.js`](https://github.com/mdn/learning-area/blob/main/javascript/apis/client-side-storage/indexeddb/notes/index-start.js) Dateien in einem neuen Verzeichnis auf Ihrer lokalen Maschine.
2. Schauen Sie sich die Dateien an. Sie werden sehen, dass das HTML eine Website mit einem Header und Footer definiert sowie einen Hauptinhaltsbereich, der einen Platz zum Anzeigen von Notizen und ein Formular zum Eingeben neuer Notizen in die Datenbank enthält. Das CSS bietet einige Stile, um klarer zu machen, was vor sich geht. Die JavaScript-Datei enthält fünf deklarierte Konstanten, die Referenzen auf das {{htmlelement("ul")}}-Element enthalten, in dem die Notizen angezeigt werden, die Titel- und Textkörper-{{htmlelement("input")}}-Elemente, das {{htmlelement("form")}} selbst und den {{htmlelement("button")}}.
3. Benennen Sie Ihre JavaScript-Datei in `index.js` um. Sie sind jetzt bereit, Code einzufügen.

### Datenbankeinrichtung

Schauen wir uns nun an, was wir überhaupt tun müssen, um eine Datenbank einzurichten.

1. Unterhalb der Konstantendeklarationen fügen Sie die folgenden Zeilen hinzu:

   ```js
   // Create an instance of a db object for us to store the open database in
   let db;
   ```

   Hier deklarieren wir eine Variable namens `db` — diese wird später verwendet, um ein Objekt zu speichern, das unsere Datenbank repräsentiert. Wir werden dies an mehreren Stellen verwenden, daher haben wir es hier global deklariert, um die Arbeit zu erleichtern.

2. Fügen Sie als nächstes das Folgende hinzu:

   ```js
   // Open our database; it is created if it doesn't already exist
   // (see the upgradeneeded handler below)
   const openRequest = window.indexedDB.open("notes_db", 1);
   ```

   Diese Zeile erstellt eine Anfrage, um Version `1` einer Datenbank namens `notes_db` zu öffnen. Wenn diese noch nicht existiert, wird sie durch nachfolgenden Code für Sie erstellt. Sie werden dieses Anforderungsmuster sehr oft in IndexedDB sehen. Datenbankoperationen benötigen Zeit. Sie möchten den Browser nicht blockieren, während Sie auf die Ergebnisse warten, daher sind Datenbankoperationen {{Glossary("asynchronous", "asynchron")}}, was bedeutet, dass sie nicht sofort passieren, sondern zu einem späteren Zeitpunkt, und Sie werden benachrichtigt, wenn sie abgeschlossen sind.

   Um dies in IndexedDB zu handhaben, erstellen Sie ein Anforderung-Objekt (das beliebig benannt werden kann — wir haben es `openRequest` genannt, damit klar ist, wofür es gedacht ist). Dann verwenden Sie Event-Handler, um Code auszuführen, wenn die Anfrage abschließt, fehlschlägt usw., was Sie unten sehen werden.

   > [!NOTE]
   > Die Versionsnummer ist wichtig. Wenn Sie Ihre Datenbank aktualisieren möchten (z.B. durch Ändern der Tabellenstruktur), müssen Sie Ihren Code erneut mit einer erhöhten Versionsnummer, einer anderen Schema-Angabe im `upgradeneeded`-Handler (siehe unten) usw. ausführen. Wir werden das Update von Datenbanken in diesem Tutorial nicht behandeln.

3. Fügen Sie nun die folgenden Event-Handler direkt unter Ihrer vorherigen Ergänzung hinzu:

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

   Der [`error`](/de/docs/Web/API/IDBRequest/error_event) Event-Handler wird ausgeführt, wenn das System zurückkommt und sagt, dass die Anfrage fehlgeschlagen ist. Dies ermöglicht es Ihnen, auf dieses Problem zu reagieren. In unserem Beispiel drucken wir einfach eine Nachricht in die JavaScript-Konsole.

   Der [`success`](/de/docs/Web/API/IDBRequest/success_event) Event-Handler wird ausgeführt, wenn die Anfrage erfolgreich zurückkommt, was bedeutet, dass die Datenbank erfolgreich geöffnet wurde. Wenn dies der Fall ist, wird ein Objekt, das die geöffnete Datenbank repräsentiert, in der [`openRequest.result`](/de/docs/Web/API/IDBRequest/result) Eigenschaft verfügbar, sodass wir die Datenbank manipulieren können. Wir speichern dies in der `db`-Variablen, die wir zuvor für den späteren Gebrauch erstellt haben. Wir führen auch eine Funktion namens `displayData()` aus, die die Daten in der Datenbank im {{HTMLElement("ul")}}-Element anzeigt. Wir führen es jetzt aus, sodass die bereits in der Datenbank befindlichen Notizen sofort nach dem Laden der Seite angezeigt werden. Sie werden `displayData()` später definiert sehen.

4. Schließlich für diesen Abschnitt werden wir wahrscheinlich den wichtigsten Event-Handler für das Einrichten der Datenbank hinzufügen: [`upgradeneeded`](/de/docs/Web/API/IDBOpenDBRequest/upgradeneeded_event). Dieser Handler wird ausgeführt, wenn die Datenbank noch nicht eingerichtet wurde oder wenn die Datenbank mit einer größeren Versionsnummer als der vorhandenen gespeicherten Datenbank (bei einem Upgrade) geöffnet wird. Fügen Sie den folgenden Code unterhalb Ihres vorherigen Handlers hinzu:

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

   Hier definieren wir das Schema (die Struktur) unserer Datenbank, das heißt, die Menge der Spalten (oder Felder), die es enthält. Hier greifen wir zuerst auf die bestehende Datenbank zu, indem wir die `result`-Eigenschaft des Ziels des Events (`e.target.result`) verwenden, das das `request`-Objekt ist. Dies ist gleichwertig zur Zeile `db = openRequest.result;` im `success` Event-Handler, aber wir müssen dies hier separat machen, weil der `upgradeneeded` Event-Handler (falls erforderlich) vor dem `success` Event-Handler ausgeführt wird, was bedeutet, dass der `db` Wert nicht verfügbar wäre, wenn wir dies nicht tun würden.

   Wir verwenden dann [`IDBDatabase.createObjectStore()`](/de/docs/Web/API/IDBDatabase/createObjectStore), um einen neuen Objektspeicher innerhalb unserer geöffneten Datenbank namens `notes_os` zu erstellen. Dies entspricht einer einzelnen Tabelle in einem konventionellen Datenbanksystem. Wir haben ihm den Namen notes gegeben und auch ein `autoIncrement` Schlüssel-Feld namens `id` angegeben — in jedem neuen Datensatz wird dies automatisch einen hochgezählten Wert erhalten — der Entwickler muss dies nicht explizit setzen. Als Schlüssel wird das `id`-Feld verwendet, um Datensätze eindeutig zu identifizieren, z.B. beim Löschen oder Anzeigen eines Datensatzes.

   Wir erstellen auch zwei andere Indizes (Felder) mit der Methode [`IDBObjectStore.createIndex()`](/de/docs/Web/API/IDBObjectStore/createIndex): `title` (das einen Titel für jede Notiz enthalten wird) und `body` (das den Textkörper der Notiz enthalten wird).

Mit diesem Datenbankschema eingerichtet, wird, wenn wir anfangen, Datensätze in die Datenbank hinzuzufügen, jeder als ein Objekt entlang dieser Linien repräsentiert werden:

```json
{
  "title": "Buy milk",
  "body": "Need both cows milk and soy.",
  "id": 8
}
```

### Hinzufügen von Daten zur Datenbank

Schauen wir uns nun an, wie wir Datensätze zur Datenbank hinzufügen können. Dies wird mit dem Formular auf unserer Seite geschehen.

Unter Ihrem vorherigen Event-Handler fügen Sie die folgende Zeile hinzu, die einen `submit` Event-Handler einrichtet, der eine Funktion namens `addData()` ausführt, wenn das Formular übermittelt wird (wenn der Sende-{{htmlelement("button")}} gedrückt wird, was zu einer erfolgreichen Formularübermittlung führt):

```js
// Create a submit event handler so that when the form is submitted the addData() function is run
form.addEventListener("submit", addData);
```

Lassen Sie uns nun die `addData()` Funktion definieren. Fügen Sie diese unterhalb der vorherigen Zeile hinzu:

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

Das ist ziemlich komplex; lassen Sie es uns aufschlüsseln:

- Wir führen [`Event.preventDefault()`](/de/docs/Web/API/Event/preventDefault) auf dem Event-Objekt aus, um zu verhindern, dass das Formular im konventionellen Sinne abschickt (dies würde einen Seiten-Refresh verursachen und das Erlebnis verderben).
- Wir erstellen ein Objekt, das einen Datensatz darstellt, der in die Datenbank eingegeben werden soll, und füllen es mit Werten aus den Formulareingaben. Beachten Sie, dass wir nicht explizit einen `id` Wert einschließen müssen — wie bereits erklärt, wird dies automatisch gefüllt.
- Wir öffnen eine `readwrite`-Transaktion gegen den Objektspeicher `notes_os` mit der Methode [`IDBDatabase.transaction()`](/de/docs/Web/API/IDBDatabase/transaction). Dieses Transaktionsobjekt erlaubt uns, auf den Objektspeicher zuzugreifen, sodass wir etwas damit tun können, z.B. einen neuen Datensatz hinzufügen.
- Wir greifen auf den Objektspeicher mit der Methode [`IDBTransaction.objectStore()`](/de/docs/Web/API/IDBTransaction/objectStore) zu und speichern das Ergebnis in der Variablen `objectStore`.
- Wir fügen den neuen Datensatz zur Datenbank mit [`IDBObjectStore.add()`](/de/docs/Web/API/IDBObjectStore/add) hinzu. Dies erstellt ein Anforderungsobjekt, auf die gleiche Weise, wie wir es zuvor gesehen haben.
- Wir fügen eine Reihe von Event-Handlern zu den Objekten `request` und `transaction` hinzu, um Code zu kritischen Zeitpunkten im Lebenszyklus auszuführen. Sobald die Anforderung erfolgreich war, löschen wir die Formulareingaben, um die nächste Notiz einzugeben. Sobald die Transaktion abgeschlossen ist, führen wir die `displayData()` Funktion erneut aus, um die Anzeige von Notizen auf der Seite zu aktualisieren.

### Die Daten anzeigen

Wir haben `displayData()` bereits zweimal in unserem Code referenziert, also sollten wir es wahrscheinlich auch definieren. Fügen Sie dies zu Ihrem Code hinzu, unterhalb der vorherigen Funktionsdefinition:

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

Lassen Sie uns dies wieder aufschlüsseln:

- Zuerst leeren wir den Inhalt des {{htmlelement("ul")}}-Elements, bevor wir es mit dem aktualisierten Inhalt füllen. Wenn Sie dies nicht tun, würden Sie am Ende mit einer riesigen Liste duplizierter Inhalte stehen, die mit jedem Update ergänzt wird.
- Als nächstes holen wir uns eine Referenz zu dem Objektspeicher `notes_os` mit [`IDBDatabase.transaction()`](/de/docs/Web/API/IDBDatabase/transaction) und [`IDBTransaction.objectStore()`](/de/docs/Web/API/IDBTransaction/objectStore), so wie wir es in `addData()` getan haben, außer dass wir sie hier in einer Zeile miteinander verbinden.
- Der nächste Schritt ist, die Methode [`IDBObjectStore.openCursor()`](/de/docs/Web/API/IDBObjectStore/openCursor) zu verwenden, um eine Anfrage für einen Cursor zu öffnen — dies ist ein Konstrukt, das verwendet werden kann, um über die Datensätze in einem Objektspeicher zu iterieren. Wir fügen einen `success` Event-Handler am Ende dieser Zeile an, um den Code kürzer zu machen — wenn der Cursor erfolgreich zurückgegeben wird, wird der Handler ausgeführt.
- Wir holen uns eine Referenz auf den Cursor selbst (ein [`IDBCursor`](/de/docs/Web/API/IDBCursor) Objekt) mit `const cursor = e.target.result`.
- Als nächstes überprüfen wir, ob der Cursor einen Datensatz aus dem Datenspeicher enthält (`if (cursor){ }`) — falls ja, erstellen wir ein DOM-Fragment, füllen es mit den Daten des Datensatzes und fügen es auf der Seite ein (innerhalb des `<ul>`-Elements). Wir fügen auch einen Löschen-Button hinzu, der beim Klicken diese Notiz durch Ausführen der Funktion `deleteItem()` löschen wird, die wir im nächsten Abschnitt ansehen werden.
- Am Ende des `if`-Blocks verwenden wir die Methode [`IDBCursor.continue()`](/de/docs/Web/API/IDBCursor/continue), um den Cursor zum nächsten Datensatz im Datenspeicher zu bewegen, und führen den Inhalt des `if`-Blocks erneut aus. Wenn es einen weiteren Datensatz zum Iterieren gibt, wird dies dazu führen, dass er in die Seite eingefügt wird, und dann wird `continue()` erneut ausgeführt, und so weiter.
- Wenn es keine weiteren Datensätze zum Iterieren gibt, kehrt `cursor` `undefined` zurück, und daher wird der `else`-Block anstelle des `if`-Blocks ausgeführt. Dieser Block überprüft, ob Notizen in das `<ul>` eingefügt wurden — falls nicht, fügt er eine Nachricht ein, dass keine Notizen gespeichert wurden.

### Eine Notiz löschen

Wie bereits erwähnt, wird beim Drücken des Löschen-Buttons einer Notiz diese gelöscht. Dies wird durch die Funktion `deleteItem()` erreicht, die so aussieht:

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

- Der erste Teil davon könnte eine Erklärung gebrauchen — wir holen die ID des zu löschenden Datensatzes mit `Number(e.target.parentNode.getAttribute('data-note-id'))` — denken Sie daran, dass die ID des Datensatzes in einem `data-note-id`-Attribut auf dem `<li>` gespeichert wurde, als es erstmals angezeigt wurde. Wir müssen jedoch dieses Attribut durch das globale eingebaute [`Number()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Number) Objekt führen, da es vom Datentyp String ist, und daher nicht von der Datenbank erkannt werden würde, die eine Nummer erwartet.
- Dann holen wir eine Referenz auf den Objektspeicher mit demselben Muster, das wir zuvor gesehen haben, und verwenden die Methode [`IDBObjectStore.delete()`](/de/docs/Web/API/IDBObjectStore/delete), um den Datensatz aus der Datenbank zu löschen, indem wir die ID übergeben.
- Wenn die Transaktion in der Datenbank abgeschlossen ist, löschen wir das `<li>` der Notiz aus dem DOM und machen erneut die Überprüfung, ob `<ul>` jetzt leer ist, und fügen ggf. eine Notiz ein.

Das war's! Ihr Beispiel sollte jetzt funktionieren.

Wenn Sie Probleme damit haben, können Sie [es mit unserem Live-Beispiel vergleichen](https://mdn.github.io/learning-area/javascript/apis/client-side-storage/indexeddb/notes/) (siehe auch den [Quellcode](https://github.com/mdn/learning-area/blob/main/javascript/apis/client-side-storage/indexeddb/notes/index.js)).

### Komplexe Daten über IndexedDB speichern

Wie bereits erwähnt, kann IndexedDB verwendet werden, um mehr als nur Textzeichenfolgen zu speichern. Sie können so ziemlich alles speichern, was Sie möchten, einschließlich komplexer Objekte wie Video- oder Bildblobs. Und es ist nicht viel schwieriger, dies zu erreichen als jeder andere Datentyp.

Um zu demonstrieren, wie man das macht, haben wir ein weiteres Beispiel namens [IndexedDB Video Store](https://github.com/mdn/learning-area/tree/main/javascript/apis/client-side-storage/indexeddb/video-store) geschrieben (siehe auch das [Live-Beispiel hier](https://mdn.github.io/learning-area/javascript/apis/client-side-storage/indexeddb/video-store/)). Wenn Sie das Beispiel zum ersten Mal ausführen, werden alle Videos aus dem Netzwerk heruntergeladen, in einer IndexedDB-Datenbank gespeichert und dann die Videos in der Benutzeroberfläche innerhalb von {{htmlelement("video")}} Elementen angezeigt. Das nächste Mal, wenn Sie es ausführen, findet es die Videos in der Datenbank und holt sie von dort, bevor es sie anzeigt — das macht spätere Ladevorgänge viel schneller und weniger bandbreitenintensiv.

Lassen Sie uns die interessantesten Teile des Beispiels durchgehen. Wir werden nicht alles ansehen — vieles davon ähnelt dem vorherigen Beispiel, und der Code ist gut kommentiert.

1. Für dieses Beispiel haben wir die Namen der abzurufenden Videos in einem Array von Objekten gespeichert:

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

2. Zu Beginn, sobald die Datenbank erfolgreich geöffnet wurde, führen wir eine `init()`-Funktion aus. Diese durchläuft die verschiedenen Videonamen und versucht, einen Datensatz zu laden, der durch jeden Namen aus der `videos`-Datenbank identifiziert wird.

   Wenn jedes Video in der Datenbank gefunden wird (überprüft, indem gesehen wird, ob `request.result` zu `true` überprüft — wenn der Datensatz nicht vorhanden ist, wird es `undefined` sein), werden seine Videodateien (die als Blobs gespeichert sind) und der Videoname direkt an die `displayVideo()`-Funktion übergeben, um sie in der Benutzeroberfläche darzustellen. Andernfalls wird der Videoname an die Funktion `fetchVideoFromNetwork()` übergeben, um, Sie haben es erraten, das Video aus dem Netzwerk zu holen.

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

3. Der folgende Ausschnitt stammt aus `fetchVideoFromNetwork()` — hier holen wir uns MP4- und WebM-Versionen des Videos mit zwei separaten [`fetch()`](/de/docs/Web/API/Window/fetch) Anfragen. Wir verwenden dann die Methode [`Response.blob()`](/de/docs/Web/API/Response/blob), um den Körper jeder Antwort als Blob zu extrahieren, was uns eine Objekt-Darstellung der Videos gibt, die gespeichert und später angezeigt werden können.

   Wir haben hier jedoch ein Problem — diese beiden Anfragen sind beide asynchron, aber wir möchten nur versuchen, das Video anzuzeigen oder zu speichern, wenn beide Versprechen erfüllt wurden. Glücklicherweise gibt es eine eingebaute Methode, die ein solches Problem löst — {{jsxref("Promise.all()")}}. Diese nimmt ein Argument entgegen — Verweise auf alle individuellen Versprechen, die Sie auf Erfüllung prüfen möchten, in einem Array platziert — und gibt ein Versprechen zurück, das erfüllt wird, wenn alle individuellen Versprechen erfüllt wurden.

   Innerhalb des `then()`-Handlers für dieses Versprechen rufen wir die `displayVideo()`-Funktion so auf, wie wir es zuvor getan haben, um die Videos in der Benutzeroberfläche anzuzeigen, und rufen dann auch die `storeVideo()`-Funktion auf, um diese Videos in der Datenbank zu speichern.

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

4. Lassen Sie uns zuerst `storeVideo()` ansehen. Dies ist sehr ähnlich dem Muster, das Sie im vorherigen Beispiel für das Hinzufügen von Daten zur Datenbank gesehen haben — wir öffnen eine `readwrite`-Transaktion und bekommen eine Referenz zu unserem `videos_os` Objektspeicher, erstellen ein Objekt, das den hinzuzufügenden Datensatz repräsentiert, und fügen es dann mit [`IDBObjectStore.add()`](/de/docs/Web/API/IDBObjectStore/add) hinzu.

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

5. Schließlich haben wir `displayVideo()`, das die benötigten DOM-Elemente erstellt, um das Video in der Benutzeroberfläche anzuzeigen, und sie dann der Seite hinzufügt. Die interessantesten Teile davon sind die unten gezeigten — um unsere Video-Blobs in einem `<video>` Element tatsächlich anzuzeigen, müssen wir Objekt-URLs (interne URLs, die auf die im Speicher gespeicherten Video-Blobs zeigen) mithilfe der Methode [`URL.createObjectURL()`](/de/docs/Web/API/URL/createObjectURL_static) erstellen. Sobald das erledigt ist, können wir die URL-Objekte zu den Werten der `src`-Attribute unseres {{htmlelement("source")}}-Elements festlegen, und es funktioniert einwandfrei.

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

Das obige Beispiel zeigt bereits, wie man eine App erstellt, die große Assets in einer IndexedDB-Datenbank speichert, wodurch vermieden wird, diese mehr als einmal herunterladen zu müssen. Dies ist bereits eine große Verbesserung der Benutzererfahrung, aber es fehlt noch eine Sache — die Haupt-HTML-, CSS- und JavaScript-Dateien müssen immer noch bei jedem Zugriff auf die Website heruntergeladen werden, was bedeutet, dass sie nicht funktionieren wird, wenn keine Netzwerkverbindung besteht.

![Firefox offline Bildschirm mit einer Illustration eines Cartoon-Charakters auf der linken Seite, der in seiner rechten Hand einen zwei-poligen Stecker und in der linken Hand eine zwei-polige Steckdose hält. Auf der rechten Seite gibt es eine Offline-Mode-Nachricht und einen Button mit der Beschriftung 'Try again'.](ff-offline.png)

Hier kommen [Service Worker](/de/docs/Web/API/Service_Worker_API) und die eng verwandte [Cache API](/de/docs/Web/API/Cache) ins Spiel.

Ein Service Worker ist eine JavaScript-Datei, die gegen eine bestimmte Herkunft (Website oder Teil einer Website unter einer bestimmten Domain) registriert wird, wenn sie von einem Browser abgerufen wird. Wenn registriert, kann er Seiten an dieser Herkunft kontrollieren. Er tut dies, indem er zwischen einer geladenen Seite und dem Netzwerk sitzt und Netzwerk-Anfragen abfängt, die an diese Herkunft gerichtet sind.

Wenn er eine Anfrage abfängt, kann er alles daran tun, was Sie möchten (siehe [Verwendungsbeispiele](/de/docs/Web/API/Service_Worker_API#other_use_case_ideas)), aber das klassische Beispiel ist das Speichern der Netzwerkausgaben offline und dann diese als Antwort auf eine Anfrage statt der Antworten vom Netzwerk zu liefern. Im Effekt ermöglicht es Ihnen, eine Website komplett offline zu betreiben.

Die Cache-API ist ein weiteres client-seitiges Speichersystem, mit einem kleinen Unterschied — sie wurde entwickelt, um HTTP-Antworten zu speichern und funktioniert daher sehr gut mit Service Workern.

### Ein Service Worker Beispiel

Lassen Sie uns ein Beispiel ansehen, um Ihnen eine Vorstellung davon zu geben, wie das aussehen könnte. Wir haben eine weitere Version des oben beschriebenen Video-Store-Beispiels erstellt — dies funktioniert identisch, speichert aber auch das HTML, CSS und JavaScript in der Cache-API über einen Service Worker, sodass das Beispiel offline laufen kann!

Sehen Sie sich [IndexedDB Video Store mit Service Worker live an](https://mdn.github.io/learning-area/javascript/apis/client-side-storage/cache-sw/video-store-offline/), und auch [sehen Sie sich den Quellcode an](https://github.com/mdn/learning-area/tree/main/javascript/apis/client-side-storage/cache-sw/video-store-offline).

#### Der Service Worker registrieren

Das erste, was zu beachten ist, ist, dass ein zusätzliches bisschen Code in der Haupt-JavaScript-Datei eingefügt wurde (siehe [index.js](https://github.com/mdn/learning-area/blob/main/javascript/apis/client-side-storage/cache-sw/video-store-offline/index.js)). Zuerst führen wir einen Feature-Erkennungstest durch, um zu sehen, ob das `serviceWorker`-Mitglied im [`Navigator`](/de/docs/Web/API/Navigator) Objekt verfügbar ist. Wenn dies true zurückgibt, wissen wir, dass wenigstens die Grundlagen von Service Workern unterstützt werden. Innerhalb hier verwenden wir die Methode [`ServiceWorkerContainer.register()`](/de/docs/Web/API/ServiceWorkerContainer/register), um einen Service Worker, der in der `sw.js` Datei enthalten ist, gegen die Herkunft zu registrieren, bei der er sich befindet, damit er Seiten im selben Verzeichnis wie er oder in Unterverzeichnissen kontrollieren kann. Wenn sein Versprechen erfüllt wird, wird der Service Worker als registriert betrachtet.

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
> Der angegebene Pfad zur `sw.js` Datei ist relativ zur Website-Herkunft, nicht zur JavaScript-Datei, die den Code enthält. Der Service Worker befindet sich unter `https://mdn.github.io/learning-area/javascript/apis/client-side-storage/cache-sw/video-store-offline/sw.js`. Die Herkunft ist `https://mdn.github.io`, und daher muss der angegebene Pfad `/learning-area/javascript/apis/client-side-storage/cache-sw/video-store-offline/sw.js` sein. Wenn Sie dieses Beispiel auf Ihrem eigenen Server hosten wollten, müssten Sie dies entsprechend ändern. Dies ist recht verwirrend, aber es muss aus Sicherheitsgründen auf diese Weise funktionieren.

#### Den Service Worker installieren

Das nächste Mal, wenn eine Seite unter der Kontrolle des Service Workers abgerufen wird (z.B. wenn das Beispiel neu geladen wird), wird der Service Worker gegen diese Seite installiert, was bedeutet, dass er es kontrollieren wird. Wenn dies geschieht, wird ein `install` Event gegen den Service Worker ausgelöst; Sie können in der Service Worker Datei selbst Code schreiben, der auf die Installation reagiert.

Schauen wir uns ein Beispiel an, in der [sw.js](https://github.com/mdn/learning-area/blob/main/javascript/apis/client-side-storage/cache-sw/video-store-offline/sw.js) Datei (der Service Worker). Sie werden sehen, dass der Installations-Listener gegen `self` registriert ist. Dieses `self` Schlüsselwort ist eine Möglichkeit, auf den globalen Bereich des Service Workers von innerhalb der Service Worker Datei zu verweisen.

Innerhalb des `install` Handlers verwenden wir die Methode [`ExtendableEvent.waitUntil()`](/de/docs/Web/API/ExtendableEvent/waitUntil), die im Event-Objekt verfügbar ist, um dem Browser zu signalisieren, dass er die Installation des Service Workers erst nach erfolgreicher Erfüllung des Versprechens abschließen soll.

Hier sehen wir die Cache-API in Aktion. Wir verwenden die Methode [`CacheStorage.open()`](/de/docs/Web/API/CacheStorage/open), um ein neues Cache-Objekt zu öffnen, in dem Antworten gespeichert werden können (ähnlich wie ein IndexedDB-Objektspeicher). Dieses Versprechen erfüllt sich mit einem [`Cache`](/de/docs/Web/API/Cache) Objekt, das den `video-store` Cache repräsentiert. Dann verwenden wir die Methode [`Cache.addAll()`](/de/docs/Web/API/Cache/addAll), um eine Reihe von Assets abzurufen und ihre Antworten dem Cache hinzuzufügen.

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

Das war's vorerst, die Installation ist abgeschlossen.

#### Auf weitere Anfragen reagieren

Mit dem registrierten und gegen unsere HTML-Seite installierten Service Worker und den relevanten Assets, die alle unserem Cache hinzugefügt wurden, sind wir fast bereit zu gehen. Es gibt nur noch eine Sache zu tun: Code zu schreiben, um auf weitere Netzwerk-Anfragen zu reagieren.

Das ist, was der zweite Code in `sw.js` tut. Wir fügen einen weiteren Listener zum globalen Bereich des Service Workers hinzu, der die Handlerfunktion ausführt, wenn das `fetch` Ereignis ausgelöst wird. Dies geschieht jedes Mal, wenn der Browser eine Anfrage nach einem Asset im Verzeichnis macht, gegen das der Service Worker registriert ist.

Innerhalb des Handlers protokollieren wir zuerst die URL des angeforderten Assets. Dann stellen wir eine benutzerdefinierte Antwort auf die Anfrage bereit, indem wir die Methode [`FetchEvent.respondWith()`](/de/docs/Web/API/FetchEvent/respondWith) verwenden.

Innerhalb dieses Blocks verwenden wir [`CacheStorage.match()`](/de/docs/Web/API/CacheStorage/match), um zu überprüfen, ob eine passende Anfrage (d.h. die zu der URL passt) in einem Cache gefunden werden kann. Dieses Versprechen erfüllt sich mit der passenden Antwort, wenn sie gefunden wird, oder `undefined`, wenn nicht.

Wenn ein solcher Treffer gefunden wird, geben wir ihn als die benutzerdefinierte Antwort zurück. Andernfalls holen wir die Antwort aus dem Netzwerk und geben stattdessen diese zurück.

```js
self.addEventListener("fetch", (e) => {
  console.log(e.request.url);
  e.respondWith(
    caches.match(e.request).then((response) => response || fetch(e.request)),
  );
});
```

Und das war's für unseren Service Worker.
Es gibt eine Menge mehr, was Sie mit ihnen tun können — für viele Details siehe das [Service worker cookbook](https://github.com/mdn/serviceworker-cookbook).
Vielen Dank an Paul Kinlan für seinen Artikel [Adding a Service Worker and Offline into your Web App](https://developers.google.com/codelabs/pwa-training/pwa03--going-offline#0), der dieses Beispiel inspiriert hat.

#### Das Beispiel offline testen

Um unser [Service Worker Beispiel](https://mdn.github.io/learning-area/javascript/apis/client-side-storage/cache-sw/video-store-offline/) zu testen, müssen Sie es ein paar Mal laden, um sicherzustellen, dass es installiert ist. Sobald dies erledigt ist, können Sie:

- Versuchen Sie, Ihr Netzwerk auszustecken/Ihre Wi-Fi auszuschalten.
- Wählen Sie _Datei > Offline arbeiten_, wenn Sie Firefox verwenden.
- Gehen Sie zu den Entwicklerwerkzeugen, wählen Sie dann _Anwendung > Service Worker_, und überprüfen Sie das _Offline_-Checkbox, wenn Sie Chrome verwenden.

Wenn Sie Ihre Beispielseite erneut aktualisieren, sollten Sie feststellen, dass sie immer noch einwandfrei geladen wird. Alles wird offline gespeichert — die Seitenassets in einem Cache und die Videos in einer IndexedDB-Datenbank.

## Zusammenfassung

Das war's für den Moment. Wir hoffen, Sie fanden unsere Übersicht über Technologien zur client-seitigen Speicherung nützlich.

## Siehe auch

- [Web Storage API](/de/docs/Web/API/Web_Storage_API)
- [IndexedDB API](/de/docs/Web/API/IndexedDB_API)
- [Cookies](/de/docs/Web/HTTP/Guides/Cookies)
- [Service Worker API](/de/docs/Web/API/Service_Worker_API)

{{PreviousMenuNext("Learn_web_development/Extensions/Client-side_APIs/Drawing_graphics", "Learn_web_development/Extensions/Client-side_APIs/Third_party_APIs", "Learn_web_development/Extensions/Client-side_APIs")}}
