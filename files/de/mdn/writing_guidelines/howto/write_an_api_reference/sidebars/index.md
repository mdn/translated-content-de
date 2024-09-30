---
title: API-Referenz-Sidebars
slug: MDN/Writing_guidelines/Howto/Write_an_api_reference/Sidebars
l10n:
  sourceCommit: 188594e189f5e73267faf2626adbb84d26128b15
---

{{MDNSidebar}}

Sie können eine benutzerdefinierte Sidebar auf API-Referenzseiten einfügen, damit Links zu verwandten Schnittstellen, Tutorials und anderen Ressourcen angezeigt werden, die nur für diese API relevant sind. Dieser Artikel erklärt, wie das geht.

## Erstellen einer Sidebar

Sie müssen die folgenden drei Schritte ausführen, um Ihre API-Sidebar zu erstellen:

1. Erstellen Sie Ihre API-Referenzseiten.
2. Fügen Sie einen Eintrag für Ihre spezielle API in die Datei [`GroupData.json`](https://github.com/mdn/content/blob/main/files/jsondata/GroupData.json) hinzu.
3. Verwenden Sie das [`APIRef`](https://github.com/mdn/yari/blob/main/kumascript/macros/APIRef.ejs) Makro, um die Sidebar in jede Seite einzufügen, auf der sie angezeigt werden soll.

Lassen Sie uns jeden dieser Schritte der Reihe nach durchgehen. Das Beispiel, auf das wir uns in diesem Artikel beziehen werden, ist die [Fetch API](/de/docs/Web/API/Fetch_API).

### Hinzufügen eines Eintrags zu GroupData.json

Die Datei `GroupData.json` enthält alle Daten, die sich darauf beziehen, welche Links in den API-Referenz-Sidebars angezeigt werden sollen. Wenn das `APIRef` Makro aufgerufen wird, nimmt es den ihm als Parameter übergebenen API-Namen, sucht diesen Namen in `GroupData.json` nach und erstellt eine entsprechende Sidebar, die in die Seite eingefügt wird.

Um einen Eintrag zu `GroupData.json` hinzuzufügen, müssen Sie:

1. Stellen Sie sicher, dass Sie ein [GitHub](https://github.com/) Konto haben.
2. Forken Sie das MDN-Inhalts-Repository, erstellen Sie einen neuen Branch, um Ihre Änderungen aufzunehmen, und klonen Sie das Repository lokal.
3. Wechseln Sie zu Ihrem neuen Branch, bevor Sie mit der Arbeit beginnen, und stellen Sie sicher, dass Sie die Änderungen nach Abschluss dorthin übertragen.
4. Erstellen Sie eine Pull-Anfrage, damit das MDN-Team Ihre Arbeit überprüfen kann und gegebenenfalls Änderungen anfordern kann.

Die Datei `GroupData.json` befindet sich im Verzeichnis `files/jsondata/`. Wenn Sie sie öffnen, sehen Sie eine riesige JSON-Struktur, wobei jede API ihr eigenes Mitglied hat. Der Name ist der API-Name, und der Wert ist ein Objekt mit mehreren Untermembers, die die zu erstellenden Sidebar-Links definieren.

Zum Beispiel sieht der entsprechende Eintrag in `GroupData.json` für die [Fetch API](/de/docs/Web/API/Fetch_API) auf MDN wie folgt aus:

```json
"Fetch API": {
    "overview":   [ "Fetch API"],
    "interfaces": [ "Headers",
                    "Request",
                    "Response",
                    "FetchController",
                    "FetchObserver",
                    "FetchSignal",
                    "ObserverCallback" ],
    "methods":    [ "fetch()" ],
    "properties": [],
    "events":     []
},
```

Wie Sie sehen können, haben wir "Fetch API" für den Namen verwendet und innerhalb des Objektwerts eine Reihe von Untermembers aufgenommen.

#### Untermembers, die in einem GroupData-Eintrag enthalten sein sollten

Dieser Abschnitt listet alle Untermembers auf, die Sie in einem `GroupData`-Eintrag enthalten könnten.

Beachten Sie, dass die meisten der in den aufgelisteten Untermembers enthaltenen Werte sowohl den Linktext als auch die Slugs darstellen, die an das Ende der Haupt-API-Indexseite angefügt werden — `https://developer.mozilla.org/<language-code>/docs/Web/API` — um die endgültige URL für den angezeigten Link zu erstellen. Zum Beispiel resultiert "Response" in einem Link, der wie folgt erstellt wird:

```html
<li><a href="/en-US/docs/Web/API/Response">Response</a></li>
```

Es gibt einige Ausnahmen. Zum Beispiel enthält das Untermember "guides" die URLs, die auf zugehörige Leitfäden/Tutorials verweisen. In diesem Fall werden die URLs an das Ende des MDN-Dokumenten-Roots angefügt — `https://developer.mozilla.org/<language-code>` — wodurch ein Artikel irgendwo auf MDN aufgenommen werden kann.

Hier sind die verfügbaren Mitglieder. Diese sind alle technisch optional, aber es wird dringend empfohlen, dass Sie stattdessen leere Arrays einfügen, anstatt sie wegzulassen.

1. `"overview"` — der Wert ist ein Array, in dem Sie den Slug der API-Übersichtsseite einfügen, falls vorhanden. "Fetch API" führt zu einem Link zu [https://developer.mozilla.org/de/docs/Web/API/Fetch_API](/de/docs/Web/API/Fetch_API).
2. `"interfaces"` — der Wert ist ein Array, in dem Sie alle Schnittstellen auflisten sollten, die Teil dieser API sind. "Response" führt zu einem Link zu [https://developer.mozilla.org/de/docs/Web/API/Response](/de/docs/Web/API/Response).
3. `"methods"` — der Wert ist ein Array, das alle Methoden enthalten sollte, die die Spezifikation zu Schnittstellen anderer APIs hinzufügt, wie zum Beispiel Instanziierungsmethoden, die auf [`Navigator`](/de/docs/Web/API/Navigator) oder [`Window`](/de/docs/Web/API/Window) erstellt werden. Wenn es eine große Anzahl von Methoden gibt, möchten Sie möglicherweise nur die beliebtesten auflisten oder sie zuerst in der Liste anordnen. "fetch()" führt zu einem Link zu [https://developer.mozilla.org/de/docs/Web/API/fetch](/de/docs/Web/API/Window/fetch). Listen Sie _nicht_ Methoden auf, die Mitglieder von Schnittstellen sind, die der gleichen API gehören.
4. `"properties"` — der Wert ist ein Array, das alle mit der API verbundenen Eigenschaften enthalten sollte. Dies kann Eigenschaften umfassen, die Mitglieder von in der API-Spezifikation definierten Schnittstellen sind, und Eigenschaften, die die API auf anderen Schnittstellen definiert. Wenn es eine große Anzahl von Eigenschaften gibt, möchten Sie möglicherweise nur die beliebtesten auflisten oder sie zuerst in der Liste anordnen. "Headers.append" führt zu einem Link zu [https://developer.mozilla.org/de/docs/Web/API/Headers/append](/de/docs/Web/API/Headers/append).
5. `"events"` — der Wert ist ein Array, das den _Titel_ von Ereignissen enthalten sollte, die Teil der API sind, aber in Schnittstellen definiert sind, die _nicht_ Teil der API sind (Ereignisse, die zu Schnittstellen in der API (`interfaces`) gehören, werden standardmäßig dokumentiert). Wenn es eine große Anzahl von Ereignissen gibt, möchten Sie möglicherweise nur die beliebtesten auflisten oder sie zuerst in der Liste anordnen. Zum Beispiel ist `"Document: selectionchange"` Teil der [Selection API](/de/docs/Web/API/Selection_API), jedoch ist `Document` nicht Teil davon, also fügen wir das Ereignis zum Array hinzu und es wird vom [Selection API](/de/docs/Web/API/Selection_API) Thema verlinkt.
6. `"guides"` — der Wert ist ein Array aus Zeichenfolgen, jede behandelt ein Leitfaden-Thema, das erklärt, wie man die API verwendet. Die Zeichenfolgen enthalten den Teil der URL-Adresse des Leitfadens nach dem Sprachpfad: d. h. den `/docs/...` Teil der Leitfaden-URL. Zum Beispiel, um auf das Thema "Using Fetch" unter `https://developer.mozilla.org/de/docs/Web/API/Fetch_API/Using_Fetch` zu verlinken, würde das Leitfaden-Array "/docs/Web/API/Fetch_API/Using_Fetch" enthalten.
7. `"dictionaries"` — ein Array von Zeichenfolgen, das alle Wörterbücher auflistet, die Teil der API sind. Im Allgemeinen sollten nur Wörterbücher aufgelistet werden, die von mehr als einer Eigenschaft oder Methode verwendet werden, es sei denn, sie sind von besonderer Bedeutung oder es ist wahrscheinlich, dass sie von mehreren Seiten referenziert werden müssen. "CryptoKeyPair" führt zu einem Link zu [https://developer.mozilla.org/de/docs/Web/API/CryptoKeyPair](/de/docs/Web/API/CryptoKeyPair).
   > [!NOTE]
   > MDN entfernt sich von der separaten Dokumentation von Wörterbüchern.
   > Wo möglich, werden diese jetzt als Objekte an den Stellen beschrieben, an denen sie verwendet werden.
8. `"types"` — ein Array von Typdefinitionen und aufgezählten Typen, die von der API definiert werden. Sie können wählen, nur diejenigen aufzulisten, die von besonderer Bedeutung sind oder von mehreren Seiten referenziert werden, um die Liste kurz zu halten.
   > [!NOTE]
   > MDN entfernt sich von der separaten Dokumentation von Typdefinitionen.
   > Wo möglich, werden diese jetzt als Werte an den Stellen beschrieben, an denen sie verwendet werden.
9. `"callbacks"` — der Wert ist ein Array, das eine Liste aller definierten Rückruftypen für die API enthält. Sie finden es möglicherweise unnötig, diese Gruppe überhaupt zu verwenden, selbst bei APIs, die Rückruftypen enthalten, da diese oft nicht nützlich sind, um sie separat zu dokumentieren.

## Tags, die von Sidebars verwendet werden

Einige Untermembers werden automatisch anhand von Seitentags aus untergeordneten Seiten ermittelt. Seiten unterhalb der obersten API-Ebene werden jedes Mal durchsucht, wenn die Sidebar gerendert wird, und Einträge werden automatisch für Methoden ("Method"-Tag), Eigenschaften ("Property"-Tag) und Konstruktoren ("Constructor"-Tag) erstellt.

Untermembers werden ebenfalls automatisch mit Warnsymbolen dekoriert, basierend auf Tags. Dekorationen werden für experimentelle ("Experimental"-Tag), nicht standardisierte ("Non Standard" oder "Non-standard"-Tag) oder veraltete ("Deprecated"-Tag) Untermembers hinzugefügt.

Weitere Informationen zur tagbasierten Verarbeitung finden Sie [im Quellcode von APIRef](https://github.com/mdn/yari/blob/main/kumascript/macros/APIRef.ejs).

## Einfügen der Sidebar

Sobald Sie einen Eintrag für Ihre API in `GroupData.json` hinzugefügt, ihn als Pull-Anfrage eingereicht und die Änderung in das Haupt-Repository übernommen wurde, können Sie ihn mit dem [`APIRef`](https://github.com/mdn/yari/blob/main/kumascript/macros/APIRef.ejs) Makro in Ihre API-Referenzseiten einfügen, das den Namen verwendet, den Sie für Ihre API in `GroupData` verwendet haben. Ein Beispiel: Die Sidebar der [WebVR API](/de/docs/Web/API/WebVR_API) wird in ihren Seiten mit folgendem Code eingefügt:

```plain
\{{APIRef("WebVR API")}}
```
