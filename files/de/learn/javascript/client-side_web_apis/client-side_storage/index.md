---
title: Client-seitige Speicherung
slug: Learn/JavaScript/Client-side_web_APIs/Client-side_storage
l10n:
  sourceCommit: bc0d0d1ef796435e969f6d65c7e5d3c08f4023aa
---

{{LearnSidebar}}

{{PreviousMenu("Learn/JavaScript/Client-side_web_APIs/Video_and_audio_APIs", "Learn/JavaScript/Client-side_web_APIs")}}

Moderne Webbrowser unterstützen verschiedene Möglichkeiten, wie Websites Daten auf dem Computer des Nutzers speichern können — mit Erlaubnis des Nutzers — und sie bei Bedarf abrufen können. Dies ermöglicht es Ihnen, Daten für die langfristige Speicherung zu behalten, Websites oder Dokumente für die Offline-Nutzung zu speichern, nutzerspezifische Einstellungen für Ihre Website beizubehalten und mehr. Dieser Artikel erklärt die Grundlagen, wie diese funktionieren.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        JavaScript-Grundlagen (siehe
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
        Lernen, wie man client-seitige Speicher-APIs verwendet, um Anwendungsdaten zu speichern.
      </td>
    </tr>
  </tbody>
</table>

## Client-seitige Speicherung?

Andernorts im MDN-Lernbereich sprachen wir über den Unterschied zwischen [statischen Sites](/de/docs/Learn/Server-side/First_steps/Client-Server_overview#static_sites) und [dynamischen Sites](/de/docs/Learn/Server-side/First_steps/Client-Server_overview#dynamic_sites). Die meisten großen modernen Websites sind dynamisch — sie speichern Daten auf dem Server mit einer Art von Datenbank (serverseitige Speicherung), führen dann [serverseitigen](/de/docs/Learn/Server-side) Code aus, um die benötigten Daten abzurufen, in statische Seitenvorlagen einzufügen und das resultierende HTML an den Client zu senden, damit es vom Browser des Benutzers angezeigt wird.

Client-seitige Speicherung funktioniert nach ähnlichen Prinzipien, hat jedoch andere Verwendungszwecke. Sie besteht aus JavaScript-APIs, die es Ihnen ermöglichen, Daten auf dem Client (d. h. auf dem Rechner des Nutzers) zu speichern und bei Bedarf abzurufen. Dies hat viele verschiedene Anwendungsfälle, wie:

- Personalisierung von Site-Einstellungen (z. B. Anzeige der vom Nutzer gewählten Anpassungs-Widgets, Farbschema oder Schriftgröße).
- Beibehaltung zurückliegender Site-Aktivitäten (z. B. Speicherung des Inhalts eines Warenkorbs von einer vorherigen Sitzung, Erinnerung, ob ein Nutzer zuvor eingeloggt war).
- Lokale Speicherung von Daten und Assets, sodass eine Site schneller (und möglicherweise kostengünstiger) heruntergeladen werden kann oder ohne Netzwerkverbindung nutzbar ist.
- Lokale Speicherung von Dokumenten, die von Webanwendungen generiert wurden, zur Nutzung offline

Oft werden client-seitige und serverseitige Speicher zusammen verwendet. Beispielsweise könnten Sie eine Reihe von Musikdateien (vielleicht verwendet von einem Webspiel oder einer Musikplayer-Anwendung) herunterladen, diese in einer client-seitigen Datenbank speichern und bei Bedarf abspielen. Der Nutzer müsste die Musikdateien nur einmal herunterladen — bei späteren Besuchen würden sie stattdessen aus der Datenbank abgerufen.

> [!NOTE]
> Es gibt Grenzen für die Menge an Daten, die Sie mit client-seitigen Speicher-APIs speichern können (möglicherweise sowohl pro einzelner API als auch kumulativ); das genaue Limit variiert je nach Browser und möglicherweise aufgrund von Nutzereinstellungen. Siehe [Browser-Speicherquoten und Löschkriterien](/de/docs/Web/API/Storage_API/Storage_quotas_and_eviction_criteria) für weitere Informationen.

### Oldschool: Cookies

Das Konzept der client-seitigen Speicherung gibt es schon lange. Seit den frühen Tagen des Webs verwenden Websites [Cookies](/de/docs/Web/HTTP/Cookies), um Informationen zur Personalisierung der Nutzererfahrung auf Websites zu speichern. Sie sind die früheste auf dem Web weit verbreitete Form der client-seitigen Speicherung.

Heutzutage gibt es einfachere Mechanismen zum Speichern von client-seitigen Daten, daher lehren wir Sie in diesem Artikel nicht, wie man Cookies verwendet. Dies bedeutet jedoch nicht, dass Cookies auf modernen Websites völlig nutzlos sind — sie werden nach wie vor häufig genutzt, um Daten in Zusammenhang mit der Personalisierung und dem Status von Nutzern zu speichern, z. B. Sitzungs-IDs und Zugangstokens. Weitere Informationen zu Cookies finden Sie in unserem Artikel [Verwendung von HTTP-Cookies](/de/docs/Web/HTTP/Cookies).

### Neumodisch: Web Storage und IndexedDB

Die oben erwähnten "einfacheren" Funktionen sind folgende:

- Die [Web Storage API](/de/docs/Web/API/Web_Storage_API) bietet einen Mechanismus zum Speichern und Abrufen kleinerer Datenelemente, die aus einem Namen und einem entsprechenden Wert bestehen. Dies ist nützlich, wenn Sie einfach einige grundlegende Daten speichern müssen, wie den Namen des Nutzers, ob er eingeloggt ist, welche Farbe für den Hintergrund des Bildschirms gewählt werden soll usw.
- Die [IndexedDB API](/de/docs/Web/API/IndexedDB_API) bietet dem Browser ein vollständiges Datenbanksystem zum Speichern komplexer Daten. Diese kann für alles verwendet werden, von vollständigen Kundendatensätzen bis hin zu komplexen Datentypen wie Audio- oder Videodateien.

Sie werden im Folgenden mehr über diese APIs erfahren.

### Die Cache API

Die [`Cache`](/de/docs/Web/API/Cache) API ist dazu gedacht, HTTP-Antworten auf spezifische Anfragen zu speichern, und ist sehr nützlich, um Dinge wie Website-Assets offline zu speichern, sodass die Site anschließend ohne Netzwerkverbindung verwendet werden kann. Cache wird üblicherweise in Kombination mit der [Service Worker API](/de/docs/Web/API/Service_Worker_API) verwendet, obwohl es nicht zwingend erforderlich ist.

Die Nutzung von Caches und Service Workern ist ein fortgeschrittenes Thema, und wir werden es in diesem Artikel nicht ausführlich behandeln, obwohl wir ein Beispiel im Abschnitt [Offline-Asset-Speicherung](#offline-asset-speicherung) unten zeigen werden.

## Speichern einfacher Daten — Web Storage

Die [Web Storage API](/de/docs/Web/API/Web_Storage_API) ist sehr einfach zu verwenden — Sie speichern einfache Name/Wert-Paare von Daten (beschränkt auf Zeichenfolgen, Zahlen usw.) und rufen diese Werte bei Bedarf ab.

### Grundlegende Syntax

Lassen Sie uns Ihnen zeigen, wie:

1. Zuerst besuchen Sie unsere [Web Storage leere Vorlage](https://mdn.github.io/learning-area/javascript/apis/client-side-storage/web-storage/index.html) auf GitHub (öffnen Sie dies in einem neuen Tab).
2. Öffnen Sie die JavaScript-Konsole der Entwicklertools Ihres Browsers.
3. Alle Ihre Web-Speicherdaten sind in zwei strukturenähnlichen Objekten im Browser enthalten: [`sessionStorage`](/de/docs/Web/API/Window/sessionStorage) und [`localStorage`](/de/docs/Web/API/Window/localStorage). Die erste speichert Daten, solange der Browser geöffnet ist (die Daten gehen beim Schließen des Browsers verloren) und die zweite speichert Daten, auch nachdem der Browser geschlossen und dann erneut geöffnet wurde. Wir verwenden die zweite in diesem Artikel, da sie im Allgemeinen nützlicher ist.

   Die Methode [`Storage.setItem()`](/de/docs/Web/API/Storage/setItem) ermöglicht es Ihnen, ein Datenelement im Speicher zu speichern — sie nimmt zwei Parameter: den Namen des Elements und dessen Wert. Versuchen Sie, dies in Ihre JavaScript-Konsole einzugeben (ändern Sie den Wert in Ihren eigenen Namen, wenn Sie möchten!):

   ```js
   localStorage.setItem("name", "Chris");
   ```

4. Die Methode [`Storage.getItem()`](/de/docs/Web/API/Storage/getItem) nimmt einen Parameter — den Namen eines Datenelements, das Sie abrufen möchten — und gibt den Wert des Elements zurück. Geben Sie jetzt diese Zeilen in Ihre JavaScript-Konsole ein:

   ```js
   let myName = localStorage.getItem("name");
   myName;
   ```

   Nachdem Sie die zweite Zeile eingegeben haben, sollten Sie sehen, dass die Variable `myName` jetzt den Wert des `name`-Datenelements enthält.

5. Die Methode [`Storage.removeItem()`](/de/docs/Web/API/Storage/removeItem) nimmt einen Parameter — den Namen eines Datenelements, das Sie entfernen möchten — und entfernt dieses Element aus dem Web Storage. Geben Sie die folgenden Zeilen in Ihre JavaScript-Konsole ein:

   ```js
   localStorage.removeItem("name");
   myName = localStorage.getItem("name");
   myName;
   ```

   Die dritte Zeile sollte jetzt `null` zurückgeben — das `name`-Element existiert nicht mehr im Web Storage.

### Die Daten bleiben bestehen!

Ein wesentliches Merkmal des Web Storage ist, dass die Daten zwischen Seitenladevorgängen bestehen bleiben (und sogar, wenn der Browser heruntergefahren wird, im Fall von `localStorage`). Schauen wir uns das einmal in Aktion an.

1. Öffnen Sie unsere Web Storage leere Vorlage erneut, diesmal jedoch in einem anderen Browser als dem, in dem Sie dieses Tutorial geöffnet haben! Dies wird es Ihnen erleichtern, damit umzugehen.
2. Geben Sie diese Zeilen in die JavaScript-Konsole des Browsers ein:

   ```js
   localStorage.setItem("name", "Chris");
   let myName = localStorage.getItem("name");
   myName;
   ```

   Sie sollten das zurückgegebene Namensobjekt sehen.

3. Schließen Sie nun den Browser und öffnen Sie ihn erneut.
4. Geben Sie die folgenden Zeilen wieder ein:

   ```js
   let myName = localStorage.getItem("name");
   myName;
   ```

   Sie sollten sehen, dass der Wert immer noch verfügbar ist, auch wenn der Browser geschlossen und dann erneut geöffnet wurde.

### Separater Speicher für jede Domain

Es gibt einen separaten Datenspeicher für jede Domain (jede separate Webadresse, die im Browser geladen wird). Sie werden sehen, dass, wenn Sie zwei Websites laden (sagen wir google.com und amazon.com) und versuchen, ein Element auf einer Website zu speichern, es auf der anderen Website nicht verfügbar sein wird.

Das macht Sinn — Sie können sich die Sicherheitsprobleme vorstellen, die entstehen würden, wenn Websites auf die Daten anderer Websites zugreifen könnten!

### Ein umfassenderes Beispiel

Lassen Sie uns dieses neu erworbene Wissen anwenden, indem wir ein funktionierendes Beispiel schreiben, um Ihnen eine Vorstellung davon zu geben, wie Web Storage verwendet werden kann. Unser Beispiel wird es Ihnen ermöglichen, einen Namen einzugeben, nach dem die Seite ein personalisiertes Begrüßungstext ausgibt. Dieser Zustand bleibt bestehen, auch wenn die Seite neu geladen oder der Browser geschlossen wird, da der Name im Web Storage gespeichert wird.

Sie finden das Beispiel-HTML unter [personal-greeting.html](https://github.com/mdn/learning-area/blob/main/javascript/apis/client-side-storage/web-storage/personal-greeting.html) — dies enthält eine Website mit einem Kopfbereich, Inhalt und Fußzeile sowie einem Formular zur Eingabe Ihres Namens.

![Ein Screenshot einer Website, die Kopfbereich, Inhalt und Fußzeilenabschnitte enthält. Der Kopfbereich hat links einen Begrüßungstext und rechts eine Schaltfläche mit der Beschriftung "vergiss". Der Inhalt hat eine Überschrift, gefolgt von zwei Absätzen mit Platzhaltertext. Die Fußzeile lautet "Copyright niemand. Verwenden Sie den Code, wie Sie möchten".](web-storage-demo.png)

Lassen Sie uns das Beispiel aufbauen, damit Sie verstehen, wie es funktioniert.

1. Zuerst machen Sie eine lokale Kopie unserer [personal-greeting.html](https://github.com/mdn/learning-area/blob/main/javascript/apis/client-side-storage/web-storage/personal-greeting.html) Datei in einem neuen Verzeichnis auf Ihrem Computer.
2. Achten Sie als nächstes darauf, wie unser HTML eine JavaScript-Datei namens `index.js` referenziert, mit einer Zeile wie `<script src="index.js" defer></script>`. Wir müssen diese erstellen und unseren JavaScript-Code darin schreiben. Erstellen Sie eine `index.js` Datei im gleichen Verzeichnis wie Ihre HTML-Datei.
3. Wir beginnen damit, Referenzen zu allen HTML-Elementen zu erstellen, die wir in diesem Beispiel manipulieren müssen — wir erstellen sie alle als Konstanten, da sich diese Referenzen im Lebenszyklus der App nicht ändern müssen. Fügen Sie die folgenden Zeilen in Ihre JavaScript-Datei ein:

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

4. Als nächstes müssen wir einen kleinen Ereignislistener einfügen, um das Formular daran zu hindern, sich tatsächlich selbst zu übermitteln, wenn die Absenden-Schaltfläche gedrückt wird, da dies nicht das Verhalten ist, das wir wollen. Fügen Sie diesen Ausschnitt unterhalb Ihres vorherigen Codes hinzu:

   ```js
   // Stop the form from submitting when a button is pressed
   form.addEventListener("submit", (e) => e.preventDefault());
   ```

5. Jetzt müssen wir einen Ereignislistener hinzufügen, dessen Handler-Funktion ausgeführt wird, wenn die "Say hello" Schaltfläche geklickt wird. Die Kommentare erklären im Detail, was jeder Teil macht, aber im Wesentlichen nehmen wir hier den Namen, den der Nutzer in das Texteingabefeld eingegeben hat, und speichern ihn mit `setItem()` im Web Storage, dann führen wir eine Funktion namens `nameDisplayCheck()` aus, die die tatsächliche Aktualisierung des Websitetextes handhabt. Fügen Sie dies an das Ende Ihres Codes hinzu:

   ```js
   // run function when the 'Say hello' button is clicked
   submitBtn.addEventListener("click", () => {
     // store the entered name in web storage
     localStorage.setItem("name", nameInput.value);
     // run nameDisplayCheck() to sort out displaying the personalized greetings and updating the form display
     nameDisplayCheck();
   });
   ```

6. An diesem Punkt benötigen wir auch einen Ereignishandler, der eine Funktion ausführt, wenn die "Forget" Schaltfläche geklickt wird — diese wird nur angezeigt, nachdem die "Say hello" Schaltfläche geklickt wurde (die beiden Formularzustände schalten sich hin und her). In dieser Funktion entfernen wir das `name` Element aus dem Web Storage mit `removeItem()`, dann führen wir erneut `nameDisplayCheck()` aus, um die Anzeige zu aktualisieren. Fügen Sie dies unten hinzu:

   ```js
   // run function when the 'Forget' button is clicked
   forgetBtn.addEventListener("click", () => {
     // Remove the stored name from web storage
     localStorage.removeItem("name");
     // run nameDisplayCheck() to sort out displaying the generic greeting again and updating the form display
     nameDisplayCheck();
   });
   ```

7. Jetzt ist es an der Zeit, die `nameDisplayCheck()` Funktion selbst zu definieren. Hier prüfen wir, ob das Name-Element im Web Storage gespeichert wurde, indem wir `localStorage.getItem('name')` als bedingten Test verwenden. Wenn der Name gespeichert wurde, wird dieser Aufruf mit `true` ausgewertet; wenn nicht, wird er mit `false` ausgewertet. Wenn der Aufruf mit `true` ausgewertet wird, zeigen wir eine personalisierte Begrüßung an, zeigen den "forget" Teil des Formulars an und verbergen den "Say hello" Teil des Formulars. Wenn der Aufruf mit `false` ausgewertet wird, zeigen wir eine generische Begrüßung an und tun das Gegenteil. Setzen Sie den folgenden Code wieder an das Ende:

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

8. Zuletzt, aber nicht zuletzt, müssen wir die `nameDisplayCheck()` Funktion ausführen, wenn die Seite geladen wird. Wenn wir dies nicht tun, wird die personalisierte Begrüßung nicht über Seitenaktualisierungen hinweg bestehen bleiben. Fügen Sie das Folgende unten an Ihrem Code hinzu:

   ```js
   nameDisplayCheck();
   ```

Ihr Beispiel ist fertig — gut gemacht! Alles, was jetzt noch bleibt, ist Ihren Code zu speichern und Ihre HTML-Seite in einem Browser zu testen. Sie können [unsere fertige Version hier live sehen](https://mdn.github.io/learning-area/javascript/apis/client-side-storage/web-storage/personal-greeting.html).

> [!NOTE]
> Es gibt ein weiteres, etwas komplexeres Beispiel zu erkunden unter [Verwendung der Web Storage API](/de/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API).

> [!NOTE]
> In der Zeile `<script src="index.js" defer></script>` des Quellcodes unserer fertigen Version gibt das `defer`-Attribut an, dass die Inhalte des {{htmlelement("script")}}-Elements nicht ausgeführt werden, bis die Seite vollständig geladen ist.

## Speichern komplexer Daten — IndexedDB

Die [IndexedDB API](/de/docs/Web/API/IndexedDB_API) (manchmal abgekürzt als IDB) ist ein vollständiges Datenbanksystem, das im Browser verfügbar ist, in dem Sie komplexe verwandte Daten speichern können, deren Typen nicht auf einfache Werte wie Zeichenfolgen oder Zahlen beschränkt sind. Sie können Videos, Bilder und so gut wie alles andere in einer IndexedDB-Instanz speichern.

Die IndexedDB API erlaubt es Ihnen, eine Datenbank zu erstellen und dann in dieser Datenbank Speicher für Objekte anzulegen. Objektspeicher sind wie Tabellen in einer relationalen Datenbank, und jeder Objektspeicher kann eine Anzahl von Objekten enthalten. Um mehr über die IndexedDB API zu erfahren, sehen Sie sich [Verwendung von IndexedDB](/de/docs/Web/API/IndexedDB_API/Using_IndexedDB) an.

Jedoch kommt dies mit einem Preis: IndexedDB ist viel komplexer zu verwenden als die Web Storage API. In diesem Abschnitt werden wir wirklich nur an der Oberfläche dessen kratzen, wozu es fähig ist, aber wir werden Ihnen genug geben, um anzufangen.

### Durcharbeiten eines Notizspeicherbeispiels

Hier werden wir Ihnen ein Beispiel vorstellen, das es Ihnen erlaubt, Notizen in Ihrem Browser zu speichern und diese jederzeit zu betrachten und zu löschen, indem wir es für Sie aufbauen und die grundlegendsten Teile von IDB erklären, während wir weitermachen.

Die App sieht in etwa so aus:

![IndexDB-Notizen-Demo-Screenshot mit 4 Abschnitten. Der erste Abschnitt ist der Kopfbereich. Der zweite Abschnitt listet alle Notizen auf, die erstellt wurden. Er enthält zwei Notizen, jede mit einer Löschtaste. Ein dritter Abschnitt ist ein Formular mit 2 Eingabefeldern für 'Notiztitel' und 'Notiztext' sowie einer Schaltfläche mit der Beschriftung 'Neue Notiz erstellen'. Der unterste Bereich Fußzeile lautet 'Copyright niemand. Verwenden Sie den Code, wie Sie möchten'.](idb-demo.png)

Jede Notiz hat einen Titel und Text, die jeweils individuell bearbeitbar sind. Der JavaScript-Code, den wir unten durchgehen, hat detaillierte Kommentare, um Ihnen zu helfen zu verstehen, was vor sich geht.

### Erste Schritte

1. Machen Sie zunächst lokale Kopien unserer [`index.html`](https://github.com/mdn/learning-area/blob/main/javascript/apis/client-side-storage/indexeddb/notes/index.html), [`style.css`](https://github.com/mdn/learning-area/blob/main/javascript/apis/client-side-storage/indexeddb/notes/style.css) und [`index-start.js`](https://github.com/mdn/learning-area/blob/main/javascript/apis/client-side-storage/indexeddb/notes/index-start.js) Dateien in ein neues Verzeichnis auf Ihrer lokalen Maschine.
2. Schauen Sie sich die Dateien an. Sie werden sehen, dass das HTML eine Website mit Kopfbereich und Fußzeile sowie einem Hauptinhaltsbereich definiert, der einen Ort zum Anzeigen von Notizen und ein Formular zum Eingeben neuer Notizen in die Datenbank enthält. Das CSS bietet einige Stile, um klarer zu machen, was vor sich geht. Die JavaScript-Datei enthält fünf deklarierte Konstanten, die Referenzen auf das {{htmlelement("ul")}}-Element, in dem die Notizen angezeigt werden, die Titel- und Text-{{htmlelement("input")}}-Elemente, das {{htmlelement("form")}} und das {{htmlelement("button")}} enthalten.
3. Benennen Sie Ihre JavaScript-Datei in `index.js` um. Sie sind nun bereit, Code hinzuzufügen.

### Datenbankanfangsaufbau

Nun schauen wir uns an, was wir überhaupt tun müssen, um tatsächlich eine Datenbank einzurichten.

1. Fügen Sie unter den Konstantendeklarationen die folgenden Zeilen hinzu:

   ```js
   // Create an instance of a db object for us to store the open database in
   let db;
   ```

   Hier deklarieren wir eine Variable namens `db` — diese wird später verwendet, um ein Objekt darzustellen, das unsere Datenbank repräsentiert. Wir werden dies an einigen Stellen verwenden, daher haben wir es hier global deklariert, um die Dinge einfacher zu machen.

2. Fügen Sie als nächstes Folgendes hinzu:

   ```js
   // Open our database; it is created if it doesn't already exist
   // (see the upgradeneeded handler below)
   const openRequest = window.indexedDB.open("notes_db", 1);
   ```

   Diese Zeile erstellt eine Anfrage, um die Version `1` einer Datenbank namens `notes_db` zu öffnen. Wenn diese noch nicht existiert, wird sie für Sie durch den folgenden Code erstellt. Sie werden dieses Anforderungsmuster sehr oft in IndexedDB sehen. Datenbankoperationen benötigen Zeit. Sie wollen den Browser nicht einfrieren, während Sie auf die Ergebnisse warten, daher sind Datenbankoperationen [asynchron](/de/docs/Glossary/asynchronous), was bedeutet, dass sie nicht sofort geschehen, sondern irgendwann in der Zukunft, und Sie werden benachrichtigt, wenn sie abgeschlossen sind.

   Um dies in IndexedDB zu handhaben, erstellen Sie ein Anfrageobjekt (das Sie nennen können, wie Sie möchten — wir haben es hier `openRequest` genannt, damit es offensichtlich ist, wofür es ist). Dann verwenden Sie Ereignishandler, um Code auszuführen, wenn die Anfrage abgeschlossen ist, fehlschlägt, usw., was Sie im Folgenden sehen werden.

   > [!NOTE]
   > Die Versionsnummer ist wichtig. Wenn Sie Ihre Datenbank aktualisieren möchten (z. B., indem Sie die Tabellenstruktur ändern), müssen Sie Ihren Code mit einer erhöhten Versionsnummer erneut ausführen, unterschiedliche Schema im `upgradeneeded`-Handler (siehe unten) spezifizieren usw. Wir werden das Aktualisieren von Datenbanken in diesem Tutorial nicht behandeln.

3. Fügen Sie nun die folgenden Ereignishandler direkt unterhalb Ihrer vorherigen Ergänzung hinzu:

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

   Der [`error`](/de/docs/Web/API/IDBRequest/error_event) Ereignishandler wird ausgeführt, wenn das System zurückmeldet, dass die Anfrage fehlgeschlagen ist. Dies ermöglicht Ihnen, auf das Problem zu reagieren. In unserem Beispiel drucken wir einfach eine Nachricht in die JavaScript-Konsole.

   Der [`success`](/de/docs/Web/API/IDBRequest/success_event) Ereignishandler wird ausgeführt, wenn die Anfrage erfolgreich zurückgibt, was bedeutet, dass die Datenbank erfolgreich geöffnet wurde. Wenn dies der Fall ist, wird ein Objekt, das die geöffnete Datenbank repräsentiert, in der [`openRequest.result`](/de/docs/Web/API/IDBRequest/result) Eigenschaft verfügbar, sodass wir die Datenbank manipulieren können. Wir speichern dies in der `db` Variable, die wir vorher für den späteren Gebrauch erstellt haben. Wir führen auch eine Funktion namens `displayData()` aus, die die Daten in der Datenbank innerhalb des {{HTMLElement("ul")}} anzeigt. Wir führen es jetzt aus, damit die Notizen, die sich bereits in der Datenbank befinden, sofort angezeigt werden, sobald die Seite geladen wird. Sie werden `displayData()` später definiert sehen.

4. Schließlich für diesen Abschnitt, fügen wir wahrscheinlich den wichtigsten Ereignishandler für das Einrichten der Datenbank hinzu: [`upgradeneeded`](/de/docs/Web/API/IDBOpenDBRequest/upgradeneeded_event). Dieser Handler läuft, wenn die Datenbank noch nicht eingerichtet wurde oder wenn die Datenbank mit einer größeren Versionsnummer als die existierende gespeicherte Datenbank geöffnet wird (bei einem Upgrade). Fügen Sie den folgenden Code unterhalb Ihres vorherigen Handlers hinzu:

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

   Hier definieren wir das Schema (Struktur) unserer Datenbank; das heißt, die Menge an Spalten (oder Feldern), die sie enthält. Hier greifen wir zunächst auf eine Referenz auf die bestehende Datenbank aus der `result` Eigenschaft des Ziel-Objekts des Ereignisses zu (`e.target.result`), welches das `request` Objekt ist. Dies entspricht der Zeile `db = openRequest.result;` innerhalb des `success` Ereignishandlers, aber wir müssen dies separat hier tun, da der `upgradeneeded` Ereignishandler (falls erforderlich) vor dem `success` Ereignishandler läuft, was bedeutet, dass der `db` Wert nicht verfügbar wäre, wenn wir dies nicht tun würden.

   Wir verwenden dann [`IDBDatabase.createObjectStore()`](/de/docs/Web/API/IDBDatabase/createObjectStore), um einen neuen Objektspeicher innerhalb unserer geöffneten Datenbank namens `notes_os` zu erstellen. Dies entspricht einer Tabelle in einem herkömmlichen Datenbanksystem. Wir haben es `notes` genannt und auch ein `autoIncrement`-Schlüsselfeld namens `id` spezifiziert — jedes neue Datensatz erhält automatisch einen inkrementierten Wert — der Entwickler muss dies nicht explizit setzen. Da es sich um den Schlüssel handelt, wird das `id` Feld verwendet, um Datensätze zu identifizieren, etwa beim Löschen oder Anzeigen eines Datensatzes.

   Wir erstellen auch zwei andere Indizes (Felder) mit der Methode [`IDBObjectStore.createIndex()`](/de/docs/Web/API/IDBObjectStore/createIndex): `title` (welches einen Titel für jede Notiz enthält), und `body` (welches den Text der Notiz enthält).

Mit diesem Datenbankschema wird bei Beginn der Speicherung von Datensätzen in der Datenbank jede als Objekt etwa folgendermaßen dargestellt:

```json
{
  "title": "Buy milk",
  "body": "Need both cows milk and soy.",
  "id": 8
}
```

### Hinzufügen von Daten zur Datenbank

Nun schauen wir uns an, wie wir Datensätze zur Datenbank hinzufügen können. Dies wird mit dem Formular auf unserer Seite geschehen.

Fügen Sie unter Ihrem vorherigen Ereignishandler die folgende Zeile hinzu, die einen `submit` Ereignishandler einrichtet, der eine Funktion namens `addData()` ausführt, wenn das Formular übermittelt wird (wenn die Absenden-{{htmlelement("button")}} gedrückt wird, was zu einer erfolgreichen Formularübermittlung führt):

```js
// Create a submit event handler so that when the form is submitted the addData() function is run
form.addEventListener("submit", addData);
```

Nun lassen Sie uns die `addData()` Funktion definieren. Fügen Sie dies unter Ihrer vorherigen Zeile hinzu:

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

Dies ist ziemlich komplex; brechen wir es auf, wir:

- Verwenden [`Event.preventDefault()`](/de/docs/Web/API/Event/preventDefault) am Ereignisobjekt, um das Formular daran zu hindern, sich tatsächlich in herkömmlicher Weise abzusenden (dies würde eine Seitenaktualisierung verursachen und das Erlebnis verderben).
- Erstellen ein Objekt, das einen Datensatz darstellt, um ihn in die Datenbank einzutragen, und füllen es mit Werten aus den Formulareingaben. Beachten Sie, dass wir keinen `id`-Wert explizit aufnehmen müssen — wie wir bereits erklärt haben, wird dies automatisch gefüllt.
- Öffnen eine `readwrite` Transaktion gegen den `notes_os` Objektspeicher mit der Methode [`IDBDatabase.transaction()`](/de/docs/Web/API/IDBDatabase/transaction). Dieses Transaktionsobjekt erlaubt es uns, auf den Objektspeicher zuzugreifen, sodass wir etwas damit tun können, z. B. einen neuen Datensatz hinzufügen.
- Greifen auf das Objektspeicher mit der Methode [`IDBTransaction.objectStore()`](/de/docs/Web/API/IDBTransaction/objectStore) zu, und speichern das Ergebnis in der Variablen `objectStore`.
- Fügen den neuen Datensatz mit [`IDBObjectStore.add()`](/de/docs/Web/API/IDBObjectStore/add) zur Datenbank hinzu. Dies erstellt ein Anfrageobjekt, in der gleichen Art und Weise, wie wir es gesehen haben.
- Fügen eine Reihe von Ereignishandlern zum `request` und dem `transaction` Objekten hinzu, um Code in kritischen Punkten im Lebenszyklus auszuführen. Sobald die Anfrage erfolgreich war, leeren wir die Formulareingaben, um die nächste Notiz einzugeben. Sobald die Transaktion abgeschlossen ist, führen wir die `displayData()` Funktion erneut aus, um die Anzeige der Notizen auf der Seite zu aktualisieren.

### Anzeigen der Daten

Wir haben bereits zweimal auf `displayData()` in unserem Code verwiesen, daher sollten wir sie wahrscheinlich besser definieren. Fügen Sie dies Ihrem Code hinzu, unterhalb der vorherigen Funktionsdefinition:

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

Lassen Sie und dies erneut aufbrechen:

- Zuerst entleeren wir den Inhalt des {{htmlelement("ul")}} Elements, bevor wir es dann mit dem aktualisierten Inhalt füllen. Wenn Sie dies nicht tun, würden Sie mit einer riesigen Liste von dupliziertem Inhalt enden, die bei jeder Aktualisierung hinzugefügt wird.
- Als nächstes erhalten wir eine Referenz auf den `notes_os` Objektspeicher, indem wir [`IDBDatabase.transaction()`](/de/docs/Web/API/IDBDatabase/transaction) und [`IDBTransaction.objectStore()`](/de/docs/Web/API/IDBTransaction/objectStore) verwenden, wie wir es in `addData()` getan haben, außer, dass wir sie hier in einer Zeile aneinander ketten.
- Der nächste Schritt ist es, die Methode [`IDBObjectStore.openCursor()`](/de/docs/Web/API/IDBObjectStore/openCursor) zu verwenden, um eine Anfrage für einen Cursor zu öffnen — dies ist ein Konstrukt, das verwendet werden kann, um durch die Datensätze in einem Objektspeicher zu iterieren. Wir ketten einen `success` Ereignishandler ans Ende dieser Linie, um den Code kürzer zu machen — wenn der Cursor erfolgreich zurückgegeben wird, wird der Handler ausgeführt.
- Wir erhalten eine Referenz auf den Cursor selbst (ein [`IDBCursor`](/de/docs/Web/API/IDBCursor) Objekt) mit `const cursor = e.target.result`.
- Als nächstes überprüfen wir, ob der Cursor einen Datensatz aus dem Datenspeicher enthält (`if (cursor){ }`) — wenn dem so ist, erstellen wir ein DOM-Fragment, füllen es mit den Daten aus dem Datensatz und fügen es auf der Seite ein (innerhalb des `<ul>` Elements). Wir fügen auch einen Lösch-Button hinzu, der, wenn er geklickt wird, jene Notiz löscht, indem er die `deleteItem()` Funktion ausführt, die wir im nächsten Abschnitt sehen werden.
- Am Ende des `if` Blocks verwenden wir die Methode [`IDBCursor.continue()`](/de/docs/Web/API/IDBCursor/continue), um den Cursor zum nächsten Datensatz im Datenspeicher weiter zu bewegen, und führen den Inhalt des `if` Blocks erneut aus. Wenn es einen weiteren Datensatz zu iterieren gibt, bewirkt dies, dass er auf der Seite eingefügt wird, und dann wird `continue()` erneut ausgeführt, und so weiter.
- Wenn es keine weiteren Datensätze mehr gibt, über die iteriert werden kann, wird `cursor` `undefined` zurückgeben und daher wird der `else` Block anstelle des `if` Blocks ausgeführt. Dieser Block überprüft, ob irgendwelche Notizen in das `<ul>` eingefügt wurden — wenn nicht, wird eine Nachricht eingefügt, dass keine Notiz gespeichert wurde.

### Löschen einer Notiz

Wie oben erwähnt, wenn die Lösch-Schaltfläche einer Notiz gedrückt wird, wird die Notiz gelöscht. Dies wird mit der Funktion `deleteItem()` erreicht, die so aussieht:

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

- Der erste Teil davon könnte einer Erklärung bedürfen — wir rufen die ID des zu löschenden Datensatzes ab, indem wir `Number(e.target.parentNode.getAttribute('data-note-id'))` verwenden — erinnern Sie sich daran, dass die ID des Datensatzes in einem `data-note-id` Attribut auf dem `<li>` gespeichert wurde, als es zuerst angezeigt wurde. Wir müssen das Attribut jedoch durch das globale eingebaute Objekt [`Number()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Number) durchlaufen, da es vom Datentyp String ist und daher nicht von der Datenbank erkannt würde, die eine Zahl erwartet.
- Dann erhalten wir eine Referenz auf den Objektspeicher, indem wir das gleiche Muster verwenden, das wir vorher gesehen haben, und verwenden die Methode [`IDBObjectStore.delete()`](/de/docs/Web/API/IDBObjectStore/delete), um den Datensatz aus der Datenbank zu löschen, indem wir ihm die ID übergeben.
- Wenn die Datenbanktransaktion abgeschlossen ist, löschen wir das `<li>` der Notiz aus dem DOM und führen erneut die Überprüfung durch, ob das `<ul>` jetzt leer ist, indem wir eine Notiz wie angemessen einfügen.

Das war's! Ihr Beispiel sollte jetzt funktionieren.

Wenn Sie Probleme damit haben, können Sie es gerne [mit unserem Live-Beispiel abgleichen](https://mdn.github.io/learning-area/javascript/apis/client-side-storage/indexeddb/notes/) (sehen Sie sich auch den [Quellcode](https://github.com/mdn/learning-area/blob/main/javascript/apis/client-side-storage/indexeddb/notes/index.js) an).

### Speichern komplexer Daten über IndexedDB

Wie oben erwähnt, kann IndexedDB verwendet werden, um mehr als nur Text-Zeichenfolgen zu speichern. Sie können so gut wie alles speichern, was Sie wollen, einschließlich komplexer Objekte wie Video- oder Bild-Blobs. Und es ist nicht viel schwieriger zu erreichen als jede andere Art von Daten.

Um zu demonstrieren, wie man dies tut, haben wir ein weiteres Beispiel geschrieben, das [IndexedDB-Videoladen](https://github.com/mdn/learning-area/tree/main/javascript/apis/client-side-storage/indexeddb/video-store) genannt wird (sehen Sie es auch [live hier laufen](https://mdn.github.io/learning-area/javascript/apis/client-side-storage/indexeddb/video-store/)). Wenn Sie das Beispiel zum ersten Mal ausführen, lädt es alle Videos aus dem Netzwerk herunter, speichert sie in einer IndexedDB-Datenbank und zeigt dann die Videos in der Benutzeroberfläche in {{htmlelement("video")}} Elementen an. Beim zweiten Mal wird es in der Datenbank angezeigt und von dort aus abgerufen, bevor es angezeigt wird — das macht nachfolgende Ladevorgänge viel schneller und weniger bandbreitenhungrig.

Schauen wir uns die interessantesten Teile des Beispiels an. Wir werden nicht alles ansehen — vieles ist ähnlich wie im vorherigen Beispiel und der Code ist gut dokumentiert.

1. Für dieses Beispiel haben wir die Namen der Videos, die abgerufen werden sollen, in einem Array von Objekten gespeichert:

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

2. Zunächst einmal, wenn die Datenbank erfolgreich geöffnet wurde, führen wir eine `init()` Funktion aus. Diese durchläuft die verschiedenen Videonamen und versucht, einen durch jeden Namen identifizierten Datensatz aus der `videos` Datenbank zu laden.

   Wenn jedes Video in der Datenbank gefunden wird (überprüft, indem geprüft wird, ob `request.result` mit `true` bewertet wird — wenn der Datensatz nicht vorhanden ist, wird er `undefined` sein), werden die zugehörigen Videodateien (als Blobs gespeichert) und der Videoname direkt an die `displayVideo()` Funktion übergeben, um sie in der Benutzeroberfläche anzuzeigen. Andernfalls, wird der Videoname an die `fetchVideoFromNetwork()` Funktion übergeben, um, wie Sie es erraten haben, das Video aus dem Netzwerk abzurufen.

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

3. Der folgende Ausschnitt ist aus dem Inneren der `fetchVideoFromNetwork()` Funktion entnommen — hier rufen wir MP4- und WebM-Versionen des Videos mit zwei separaten [`fetch()`](/de/docs/Web/API/Window/fetch) Anfragen ab. Wir verwenden dann die Methode [`Response.blob()`](/de/docs/Web/API/Response/blob), um den Körper jeder Antwort als Blob zu extrahieren, und geben uns eine objektbezogene Darstellung der Videos, die später gespeichert und angezeigt werden können.

   Wir haben jedoch hier ein Problem — diese beiden Anfragen sind beide asynchron, aber wir möchten versuchen, das Video erst dann anzuzeigen oder zu speichern, wenn beide Versprechen erfüllt sind. Glücklicherweise gibt es eine eingebaute Methode, die ein solches Problem löst — {{jsxref("Promise.all()")}}. Dies nimmt ein Argument — Referenzen auf all die einzelnen Versprechen, die Sie zur Erfüllung prüfen möchten, die in ein Array gesetzt werden — und gibt ein Versprechen zurück, das erfüllt wird, wenn alle einzelnen Versprechen erfüllt sind.

   Innerhalb des `then()` Handlers für dieses Versprechen rufen wir die `displayVideo()` Funktion wie zuvor auf, um die Videos in der Benutzeroberfläche anzuzeigen, dann rufen wir auch die `storeVideo()` Funktion auf, um diese Videos in der Datenbank zu speichern.

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

4. Lassen Sie uns zuerst `storeVideo()` ansehen. Dies ist sehr ähnlich zu dem Muster, das Sie im vorherigen Beispiel zum Hinzufügen von Daten zur Datenbank gesehen haben — wir öffnen eine `readwrite` Transaktion und erhalten eine Referenz auf unseren `videos_os` Objektspeicher, erstellen ein Objekt, das den Datensatz darstellt, der zur Datenbank hinzugefügt werden soll, und fügen es dann mit [`IDBObjectStore.add()`](/de/docs/Web/API/IDBObjectStore/add) hinzu.

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

5. Schließlich haben wir `displayVideo()`, das die DOM-Elemente erstellt, die benötigt werden, um das Video in der Benutzeroberfläche einzufügen und es dann der Seite hinzuzufügt. Der interessanteste Teil davon ist das Folgende — um unsere Video-Blobs in einem `<video>` Element anzuzeigen, müssen wir Objekt-URLs (interne URLs, die auf die in Speicher gespeicherten Video-Blobs zeigen) mit der Methode [`URL.createObjectURL()`](/de/docs/Web/API/URL/createObjectURL_static) erstellen. Sobald dies erledigt ist, können wir die Objekt-URLs als Werte der `src` Attribute unseres {{htmlelement("source")}} Elements festlegen, und es funktioniert einwandfrei.

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

Das obige Beispiel zeigt bereits, wie man eine App erstellt, die große Assets in einer IndexedDB-Datenbank speichert und so vermeidet, dass sie mehr als einmal heruntergeladen werden müssen. Dies ist bereits eine großartige Verbesserung der Benutzererfahrung, aber es gibt noch eine Sache, die fehlt — die Haupt-HTML-, CSS- und JavaScript-Dateien müssen immer noch bei jedem Zugriff auf die Site heruntergeladen werden, was bedeutet, dass sie nicht funktioniert, wenn keine Netzwerkverbindung besteht.

![Firefox-Offlinescreen mit einer Illustration eines Cartoon-Charakters links, der in seiner rechten Hand einen Zwei-Pin-Stecker und in seiner linken Hand eine Zwei-Pin-Steckdose hält. Auf der rechten Seite gibt es eine Nachricht im Offline-Modus und eine Schaltfläche mit der Aufschrift "Erneut versuchen".](ff-offline.png)

Hier kommen [Service Worker](/de/docs/Web/API/Service_Worker_API) und die eng verwandte [Cache API](/de/docs/Web/API/Cache) ins Spiel.

Ein Service Worker ist eine JavaScript-Datei, die beim Zugriff auf eine Website oder einen Teil einer Website einer bestimmten Domain von einem Browser registriert wird. Wenn registriert, kann er Seiten steuern, die an dieser Domain verfügbar sind. Er tut dies, indem er zwischen eine geladene Seite und das Netzwerk geht und Netzwerkabfragen abfängt, die auf diese Domain gerichtet sind.

Wenn er eine Anfrage abfängt, kann er alles tun, was Sie wünschen (sehen Sie [Beispiele für Anwendungsfälle](/de/docs/Web/API/Service_Worker_API#other_use_case_ideas)), aber das klassische Beispiel ist das Speichern von Netzwerkausgaben offline und dann das Zurückgeben dieser als Antwort auf eine Anfrage anstelle der Antworten aus dem Netzwerk. Im Wesentlichen ermöglicht es Ihnen, dass eine Website vollständig offline funktioniert.

Die Cache API ist ein weiteres client-seitiges Speichermodul, mit einem kleinen Unterschied — sie wurde zum Speichern von HTTP-Antworten konzipiert und funktioniert daher sehr gut mit Service Workern.

### Ein Service Worker Beispiel

Lassen Sie uns ein Beispiel anschauen, um Ihnen eine Vorstellung davon zu geben, wie das aussehen könnte. Wir haben eine weitere Version des Videoladensbeispiels erstellt, das wir im vorherigen Abschnitt gesehen haben — dies funktioniert genau gleich, außer dass es auch die HTML-, CSS- und JavaScript-Dateien in der Cache-API über einen Service Worker speichert, sodass das Beispiel offline laufen kann!

Sehen Sie [IndexedDB Video-Laden mit Service Worker läuft live](https://mdn.github.io/learning-area/javascript/apis/client-side-storage/cache-sw/video-store-offline/), und auch [sehen Sie den Quellcode](https://github.com/mdn/learning-area/tree/main/javascript/apis/client-side-storage/cache-sw/video-store-offline).

#### Registrierung des Service Workers

Der erste Punkt zu beachten ist, dass es ein zusätzliches Stück Code gibt, das in die Haupt-JavaScript-Datei eingefügt wird (siehe [index.js](https://github.com/mdn/learning-area/blob/main/javascript/apis/client-side-storage/cache-sw/video-store-offline/index.js)). Zuerst führen wir einen Feature-Erkennungstest durch, um zu sehen, ob das `serviceWorker`-Mitglied im [`Navigator`](/de/docs/Web/API/Navigator) Objekt verfügbar ist. Wenn dies `true` zurückgibt, dann wissen wir, dass zumindest die grundlegende Unterstützung für Service Worker gegeben ist. Innerhalb dieses Bereichs verwenden wir die Methode [`ServiceWorkerContainer.register()`](/de/docs/Web/API/ServiceWorkerContainer/register), um einen Service Worker, der in der `sw.js` Datei enthalten ist, gegen die Domain zu registrieren, bei der er sich befindet, sodass er Seiten im gleichen Verzeichnis wie sein enthält, oder Unterverzeichnisse kontrollieren kann. Wenn sein Versprechen erfüllt ist, wird der Service Worker registriert.

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
> Der gegebene Pfad zur `sw.js` Datei ist relativ zur Site-Domain, nicht zur JavaScript-Datei, die den Code enthält. Der Service Worker befindet sich unter `https://mdn.github.io/learning-area/javascript/apis/client-side-storage/cache-sw/video-store-offline/sw.js`. Die Domain ist `https://mdn.github.io`, und daher muss der gegebene Pfad `/learning-area/javascript/apis/client-side-storage/cache-sw/video-store-offline/sw.js` sein. Wenn Sie dieses Beispiel auf Ihrem eigenen Server hosten möchten, müssten Sie dieses entsprechend ändern. Dies ist ziemlich verwirrend, aber es muss so funktionieren aus Sicherheitsgründen.

#### Installation des Service Workers

Das nächste Mal, wenn eine Seite, die unter der Kontrolle des Service Workers steht, zugegriffen wird (z. B. wenn das Beispiel neu geladen wird), wird der Service Worker gegen diese Seite installiert, was bedeutet, dass er beginnen wird, sie zu steuern. Wenn dies geschieht, wird ein `install` Ereignis gegen den Service Worker ausgelöst; Sie können Code innerhalb des Service Workers selbst schreiben, der auf die Installation reagiert.

Lassen Sie uns ein Beispiel ansehen, in der [sw.js](https://github.com/mdn/learning-area/blob/main/javascript/apis/client-side-storage/cache-sw/video-store-offline/sw.js) Datei (der Service Worker). Sie werden sehen, dass der Installations-Listener gegen `self` registriert ist. Dieses `self`-Schlüsselwort ist ein Weg, um vom Inneren der Service Worker-Datei aus auf den globalen Bereich des Service Workers zu verweisen.

Innerhalb des `install` Handlers verwenden wir die Methode [`ExtendableEvent.waitUntil()`](/de/docs/Web/API/ExtendableEvent/waitUntil), die am Ereignisobjekt verfügbar ist, um anzuzeigen, dass der Browser die Installation des Service Workers nicht abschließen soll, bis das innere Versprechen erfolgreich erfüllt wurde.

Hier sehen wir die Cache API in Aktion. Wir verwenden die Methode [`CacheStorage.open()`](/de/docs/Web/API/CacheStorage/open), um ein neues Cache-Objekt zu öffnen, in dem Antworten gespeichert werden können (ähnlich einem IndexedDB-Objektspeicher). Dieses Versprechen wird mit einem [`Cache`](/de/docs/Web/API/Cache) Objekt erfüllt, das den `video-store` Cache repräsentiert. Wir verwenden dann die Methode [`Cache.addAll()`](/de/docs/Web/API/Cache/addAll), um eine Reihe von Assets abzurufen und deren Antworten zum Cache hinzuzufügen.

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

Das war's für jetzt, Installation abgeschlossen.

#### Antwort auf weitere Anfragen

Mit dem Service Worker registriert und gegen unsere HTML-Seite installiert und die relevanten Assets alle zu unserem Cache hinzugefügt, sind wir fast bereit. Es gibt nur noch eine Sache zu tun: Schreiben Sie etwas Code, um auf weitere Netzwerkabfragen zu reagieren.

Das ist es, was das zweite Stück Code in `sw.js` tut. Wir fügen einen weiteren Listener zum globalen Bereich des Service Workers hinzu, der die Handler-Funktion ausführt, wenn das `fetch` Ereignis ausgelöst wird. Dies geschieht immer dann, wenn der Browser eine Anforderung für ein Asset in dem Verzeichnis macht, gegen das der Service Worker registriert ist.

Innerhalb des Handlers loggen wir zunächst die URL des angeforderten Assets. Anschließend bieten wir eine benutzerdefinierte Antwort auf die Anfrage an, indem wir die Methode [`FetchEvent.respondWith()`](/de/docs/Web/API/FetchEvent/respondWith) verwenden.

Innerhalb dieses Blocks verwenden wir [`CacheStorage.match()`](/de/docs/Web/API/CacheStorage/match), um zu prüfen, ob eine passende Anfrage (d. h. die der URL entspricht) in einem Cache gefunden werden kann. Dieses Versprechen wird mit der passenden Antwort erfüllt, wenn ein Treffer gefunden wird, oder `undefined`, wenn nicht.

Wenn ein Treffer gefunden wird, geben wir ihn als benutzerdefinierte Antwort zurück. Wenn nicht, holen wir [fetch()](/de/docs/Web/API/Window/fetch) die Antwort aus dem Netzwerk und geben diese stattdessen zurück.

```js
self.addEventListener("fetch", (e) => {
  console.log(e.request.url);
  e.respondWith(
    caches.match(e.request).then((response) => response || fetch(e.request)),
  );
});
```

Und das war's für unseren Service Worker.
Es gibt eine ganze Menge mehr, die Sie damit tun können — für viel mehr Details, siehe das [Service Worker-Kochbuch](https://github.com/mdn/serviceworker-cookbook).
Vielen Dank an Paul Kinlan für seinen Artikel [Adding a Service Worker and Offline into your Web App](https://developers.google.com/codelabs/pwa-training/pwa03--going-offline#0), der dieses Beispiel inspiriert hat.

#### Testen des Beispiels offline

Um unser [Service Worker-Beispiel](https://mdn.github.io/learning-area/javascript/apis/client-side-storage/cache-sw/video-store-offline/) zu testen, müssen Sie es ein paar Mal laden, um sicherzustellen, dass es installiert ist. Sobald dies erledigt ist, können Sie:

- Versuchen Sie, Ihr Netzwerk zu trennen/Ihr WLAN auszuschalten.
- Wählen Sie _Datei > Offline arbeiten_, wenn Sie Firefox verwenden.
- Gehen Sie zu den Entwicklerwerkzeugen, wählen dann _Anwendung > Service Worker_, und markieren Sie das _Offline_-Kontrollkästchen, wenn Sie Chrome verwenden.

Wenn Sie Ihre Beispielseite erneut aktualisieren, sollten Sie sehen, dass sie immer noch einwandfrei geladen wird. Alles wird offline gespeichert — die Seiten-Assets in einem Cache und die Videos in einer IndexedDB-Datenbank.

## Zusammenfassung

Das war's für jetzt. Wir hoffen, dass Sie unseren Überblick über client-seitige Speichertechnologien nützlich fanden.

## Siehe auch

- [Web Storage API](/de/docs/Web/API/Web_Storage_API)
- [IndexedDB API](/de/docs/Web/API/IndexedDB_API)
- [Cookies](/de/docs/Web/HTTP/Cookies)
- [Service Worker API](/de/docs/Web/API/Service_Worker_API)

{{PreviousMenu("Learn/JavaScript/Client-side_web_APIs/Video_and_audio_APIs", "Learn/JavaScript/Client-side_web_APIs")}}
