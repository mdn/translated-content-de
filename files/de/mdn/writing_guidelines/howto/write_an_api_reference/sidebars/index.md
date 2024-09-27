---
title: API-Referenz-Sidebars
slug: MDN/Writing_guidelines/Howto/Write_an_api_reference/Sidebars
l10n:
  sourceCommit: 188594e189f5e73267faf2626adbb84d26128b15
---

{{MDNSidebar}}

Sie können eine benutzerdefinierte Seitenleiste auf API-Referenzseiten einfügen, sodass dort Links zu verwandten Schnittstellen, Tutorials und weiteren Ressourcen angezeigt werden, die speziell auf diese API zutreffen.
Dieser Artikel erklärt, wie das geht.

## Erstellen einer Seitenleiste

Um Ihre API-Seitenleiste zu erstellen, müssen Sie die folgenden drei Schritte ausführen:

1. Erstellen Sie Ihre API-Referenzseiten.
2. Fügen Sie einen Eintrag für Ihre spezielle API in die Datei [`GroupData.json`](https://github.com/mdn/content/blob/main/files/jsondata/GroupData.json) hinzu.
3. Verwenden Sie das Makro [`APIRef`](https://github.com/mdn/yari/blob/main/kumascript/macros/APIRef.ejs), um die Seitenleiste in jede Seite einzufügen, auf der Sie sie anzeigen möchten.

Lassen Sie uns jeden dieser Schritte der Reihe nach durchgehen. Das Beispiel, auf das wir in diesem Artikel verweisen werden, ist die [Fetch API](/de/docs/Web/API/Fetch_API).

### Hinzufügen eines Eintrags in GroupData.json

Die Datei `GroupData.json` enthält alle Daten dazu, welche Links in API-Referenz-Sidebars erscheinen sollen.
Wenn sie aufgerufen wird, nimmt das Makro `APIRef` einen ihm als Parameter übergebenen API-Namen, sucht diesen Namen in `GroupData.json` und baut eine entsprechende Seitenleiste, die in die Seite eingefügt wird.

Um einen Eintrag in `GroupData.json` hinzuzufügen, müssen Sie:

1. Sicherstellen, dass Sie ein [GitHub](https://github.com/) Konto haben.
2. Das MDN-Content-Repository forken, einen neuen Branch erstellen, um Ihre Änderungen aufzunehmen, und das Repository lokal klonen.
3. Checken Sie Ihren neuen Branch aus, bevor Sie mit der Arbeit beginnen, und stellen Sie sicher, dass Sie die Änderungen nach Abschluss an diesen pushen.
4. Erstellen Sie eine Pull-Anfrage, damit das MDN-Team Ihre Arbeit überprüfen und bei Bedarf Änderungen anfordern kann.

Die Datei `GroupData.json` befindet sich im Verzeichnis `files/jsondata/`.
Wenn Sie sie ansehen, sehen Sie eine große JSON-Struktur, wobei jede API ihr eigenes Mitglied hat.
Der Name ist der API-Name, und der Wert ist ein Objekt, das mehrere Untermglieder enthält, die die zu erstellenden Seitenleisten-Links definieren.

Zum Beispiel sehen Sie sich die Seite der [Fetch API](/de/docs/Web/API/Fetch_API) auf MDN an.
Der entsprechende Eintrag in `GroupData.json` sieht folgendermaßen aus:

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

Wie Sie sehen, haben wir "Fetch API" für den Namen verwendet und innerhalb des Objektwerts eine Anzahl von Untermgliedern inkludiert.

#### Untermglieder, die in einem GroupData-Eintrag enthalten sein sollten

Dieser Abschnitt listet alle Untermglieder auf, die Sie in einen `GroupData`-Eintrag aufnehmen könnten.

Beachten Sie, dass die meisten der innerhalb der aufgelisteten Untermglieder enthaltenen Werte sowohl dem Linktext als auch Slugs entsprechen, die an das Ende der Haupt-API-Indexseite angehängt werden — `https://developer.mozilla.org/<language-code>/docs/Web/API` — um die endgültige URL für den angezeigten Link zu erstellen.
Zum Beispiel führt "Response" dazu, dass ein Link wie folgt erstellt wird:

```html
<li><a href="/en-US/docs/Web/API/Response">Response</a></li>
```

Es gibt einige Ausnahmen. Zum Beispiel enthält das Untermglied "guides" die URLs, die auf zugehörige Leitfäden/Tutorials zeigen.
In diesem Fall werden die URLs an das Ende des MDN-Dokumentationsstamm — `https://developer.mozilla.org/<language-code>` — angehängt, sodass ein Artikel überall auf MDN aufgenommen werden kann.

Hier sind die verfügbaren Mitglieder.
Diese sind technisch alle optional, es wird jedoch dringend empfohlen, diese nicht wegzulassen, sondern leere Arrays einzufügen.

1. `"overview"` — Der Wert ist ein Array, innerhalb dessen Sie den Slug der API-Übersichtsseite aufnehmen, falls eine existiert.
   "Fetch API" führt zu einem Link zur [https://developer.mozilla.org/de/docs/Web/API/Fetch_API](/de/docs/Web/API/Fetch_API).
2. `"interfaces"` — Der Wert ist ein Array, in dem Sie alle Schnittstellen auflisten sollten, die Teil dieser API sind.
   "Response" führt zu einem Link zur [https://developer.mozilla.org/de/docs/Web/API/Response](/de/docs/Web/API/Response).
3. `"methods"` — Der Wert ist ein Array, das jegliche Methoden enthalten sollte, die die Spezifikation den mit anderen APIs verbundenen Schnittstellen hinzufügt, wie Initalisierungsmethoden, die auf [`Navigator`](/de/docs/Web/API/Navigator) oder [`Window`](/de/docs/Web/API/Window) erstellt wurden.
   Wenn es eine große Anzahl von Methoden gibt, sollten Sie vielleicht nur die beliebtesten auflisten oder diese zuerst in der Liste setzen.
   "fetch()" führt zu einem Link zur [https://developer.mozilla.org/de/docs/Web/API/fetch](/de/docs/Web/API/Window/fetch).
   Listen Sie _nicht_ die Methoden auf, die Mitglieder von Schnittstellen sind, die derselben API gehören.
4. `"properties"` — Der Wert ist ein Array, das alle mit der API verbundenen Eigenschaften enthalten sollte.
   Dies kann auch Eigenschaften umfassen, die Mitglieder von Schnittstellen sind, die in der API-Spezifikation definiert sind, und Eigenschaften, die die API auf anderen Schnittstellen definiert.
   Wenn es eine große Anzahl von Eigenschaften gibt, sollten Sie vielleicht nur die beliebtesten auflisten oder diese zuerst in der Liste setzen.
   "Headers.append" führt zu einem Link zur [https://developer.mozilla.org/de/docs/Web/API/Headers/append](/de/docs/Web/API/Headers/append).
5. `"events"` — Der Wert ist ein Array, das den _Titel_ von Ereignissen enthalten sollte, die Teil der API sind, aber in Schnittstellen definiert sind, die _nicht_ Teil der API sind (Ereignisse, die zu Schnittstellen in der API (`interfaces`) gehören, werden standardmäßig dokumentiert).
   Wenn es eine große Anzahl von Ereignissen gibt, sollten Sie vielleicht nur die beliebtesten auflisten oder diese zuerst in der Liste setzen.
   Zum Beispiel ist `"Document: selectionchange"` Teil der [Selection API](/de/docs/Web/API/Selection_API), aber `Document` ist es nicht, daher fügen wir das Ereignis in das Array und es wird vom [Selection API](/de/docs/Web/API/Selection_API)-Thema verlinkt.
6. `"guides"` — Der Wert ist ein Array von Zeichenfolgen, die jeweils ein Thema des Leitfadens ansprechen, das erklärt, wie die API zu verwenden ist.
   Die Zeichenfolgen enthalten den Teil der URL-Adresse des Leitfadens nach dem Sprachpfad: also den `/docs/...` Teil der Leitfaden-URL.
   Um beispielsweise zum Thema "Using Fetch" bei `https://developer.mozilla.org/de/docs/Web/API/Fetch_API/Using_Fetch` zu verlinken, würde das Array des Leitfadens "/docs/Web/API/Fetch_API/Using_Fetch" enthalten.
7. `"dictionaries"` — Ein Array von Zeichenfolgen, das alle Wörterbücher auflistet, die Teil der API sind.
   Im Allgemeinen sollten nur Wörterbücher aufgeführt werden, die von mehr als einer Eigenschaft oder Methode verwendet werden, es sei denn, sie sind von besonderer Bedeutung oder müssen von mehreren Seiten referenziert werden.
   "CryptoKeyPair" führt zu einem Link zur [https://developer.mozilla.org/de/docs/Web/API/CryptoKeyPair](/de/docs/Web/API/CryptoKeyPair).
   > [!NOTE]
   > MDN entfernt sich von der separaten Dokumentation von Wörterbüchern.
   > Wenn möglich, werden diese jetzt als Objekte an den Stellen beschrieben, an denen sie verwendet werden.
8. `"types"` — Ein Array von Typedefs und aufgezählten Typen, die von der API definiert werden.
   Sie können sich entscheiden, nur diejenigen aufzulisten, die von besonderer Bedeutung sind oder von mehreren Seiten referenziert werden, um die Liste kurz zu halten.
   > [!NOTE]
   > MDN entfernt sich von der separaten Dokumentation von Typedefs.
   > Wenn möglich, werden diese jetzt als Werte an den Stellen beschrieben, an denen sie verwendet werden.
9. `"callbacks"` — Der Wert ist ein Array, das eine Liste aller definierten Callback-Typen für die API enthält.
   Sie finden es möglicherweise unnötig, diese Gruppe überhaupt zu verwenden, selbst bei APIs, die Callback-Typen enthalten, da es oft nicht nützlich ist, diese separat zu dokumentieren.

## Tags, die von Seitenleisten verwendet werden

Einige Untermglieder werden automatisch von Unterseiten entdeckt, basierend auf Seitentags.
Seiten unter der obersten API-Ebene werden jedes Mal durchforstet, wenn die Seitenleiste gerendert wird, und Einträge werden automatisch für Methoden ("Method"-Tag), Eigenschaften ("Property"-Tag) und Konstruktoren ("Constructor"-Tag) erstellt.

Untermglieder werden basierend auf Tags auch automatisch mit Warnsymbolen dekoriert.
Dekorationen werden für experimentelle ("Experimental"-Tag), nicht standardisierte ("Non Standard" oder "Non-standard"-Tag) oder veraltete ("Deprecated"-Tag) Untermglieder hinzugefügt.

Weitere Informationen zur tag-basierten Verarbeitung sind [in der APIRef-Quelle](https://github.com/mdn/yari/blob/main/kumascript/macros/APIRef.ejs) verfügbar.

## Einfügen der Seitenleiste

Sobald Sie einen Eintrag für Ihre API in `GroupData.json` hinzugefügt, diesen als Pull-Anfrage übermittelt und die Änderung im Haupt-Repository akzeptiert haben, können Sie ihn in Ihre API-Referenzseiten mit dem [`APIRef`](https://github.com/mdn/yari/blob/main/kumascript/macros/APIRef.ejs) Makro einfügen, welches den in GroupData für Ihre API verwendeten Namen als Parameter verwendet.
Als Beispiel wird die Seitenleiste der [WebVR API](/de/docs/Web/API/WebVR_API) in ihren Seiten mit dem folgenden eingebunden:

```plain
\{{APIRef("WebVR API")}}
```
