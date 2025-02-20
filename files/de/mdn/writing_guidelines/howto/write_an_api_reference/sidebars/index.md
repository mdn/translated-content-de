---
title: API-Referenz-Seitenleisten
slug: MDN/Writing_guidelines/Howto/Write_an_api_reference/Sidebars
l10n:
  sourceCommit: 269fa421f0a79b18f6000a26baebe30c74571b1f
---

Sie können auf API-Referenzseiten eine benutzerdefinierte Seitenleiste einfügen, die Links zu verwandten Interfaces, Tutorials und anderen nur für diese API relevanten Ressourcen anzeigt.
Dieser Artikel erklärt, wie es funktioniert.

## Erstellen einer Seitenleiste

Um Ihre API-Seitenleiste zu erstellen, müssen Sie die folgenden drei Schritte durchführen:

1. Erstellen Sie Ihre API-Referenzseiten.
2. Fügen Sie einen Eintrag für Ihre spezifische API in die Datei [`GroupData.json`](https://github.com/mdn/content/blob/main/files/jsondata/GroupData.json) ein.
3. Verwenden Sie das Makro [`APIRef`](https://github.com/mdn/rari-doc/src/templ/templs/api_list_specs.rs), um die Seitenleiste in jede Seite einzufügen, auf der sie angezeigt werden soll.

Gehen wir diese Schritte der Reihe nach durch.
Das Beispiel, auf das wir uns in diesem Artikel beziehen, ist die [Fetch API](/de/docs/Web/API/Fetch_API).

### Hinzufügen eines Eintrags in GroupData.json

Die Datei `GroupData.json` enthält alle Daten darüber, welche Links in den API-Referenz-Seitenleisten angezeigt werden sollen.
Wenn das Makro `APIRef` aufgerufen wird, nimmt es einen API-Namen als Parameter, sucht diesen Namen in `GroupData.json`, erstellt eine passende Seitenleiste und fügt sie auf der Seite ein.

Um einen Eintrag in `GroupData.json` hinzuzufügen, müssen Sie:

1. Sicherstellen, dass Sie ein [GitHub](https://github.com/)-Konto haben.
2. Das MDN-Inhalts-Repository forken, einen neuen Branch erstellen, um Ihre Änderungen zu speichern, und das Repository lokal klonen.
3. Ihren neuen Branch auschecken, bevor Sie loslegen, und sicherstellen, dass Sie Ihre Änderungen nach Abschluss hochladen.
4. Einen Pull Request erstellen, damit das MDN-Team Ihre Arbeit überprüfen und möglicherweise Änderungen anfordern kann.

Die Datei `GroupData.json` befindet sich im Verzeichnis `files/jsondata/`.
Wenn Sie die Datei öffnen, sehen Sie eine große JSON-Struktur, bei der jede API ein eigenes Element hat.
Der Name ist der API-Name, und der Wert ist ein Objekt mit mehreren Unterelementen, die die zu erstellenden Seitenleisten-Links definieren.

Ein Beispiel: Schauen Sie sich die Seite [Fetch API](/de/docs/Web/API/Fetch_API) auf MDN an.
Der entsprechende Eintrag in `GroupData.json` sieht so aus:

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

Wie Sie sehen können, haben wir "Fetch API" als Namen verwendet, und innerhalb des Objektwertes fügen wir eine Reihe von Unterelementen hinzu.

#### Unterelemente, die in einem GroupData-Eintrag enthalten sein sollten

In diesem Abschnitt sind alle Unterelemente aufgelistet, die in einem `GroupData`-Eintrag enthalten sein könnten.

Beachten Sie, dass die meisten Werte, die in den aufgeführten Unterelementen enthalten sind, sowohl dem Linktext entsprechen als auch den Slugs, die am Ende der Haupt-API-Indexseite — `https://developer.mozilla.org/<language-code>/docs/Web/API` — angehängt werden, um die endgültige URL für den angezeigten Link zu erstellen.
Zum Beispiel wird durch "Response" ein Link wie folgt erstellt:

```html
<li><a href="/en-US/docs/Web/API/Response">Response</a></li>
```

Es gibt ein paar Ausnahmen.
Zum Beispiel enthält das Unterelement "guides" die URLs, die auf zugehörige Anleitungen/Tutorials verweisen.
In diesem Fall werden die URLs am Ende des MDN-Dokumenten-Root — `https://developer.mozilla.org/<language-code>` — angehängt, sodass ein Artikel irgendwo auf MDN enthalten sein kann.

Hier sind die verfügbaren Elemente.
Technisch gesehen sind alle optional, aber es wird dringend empfohlen, dass Sie anstelle eines Weglassens leere Arrays einfügen.

1. `"overview"` — Der Wert ist ein Array, in dem Sie den Slug der Übersichtsseite der API einschließen, falls vorhanden.
   "Fetch API" führt zu einem Link auf [https://developer.mozilla.org/de/docs/Web/API/Fetch_API](/de/docs/Web/API/Fetch_API).
2. `"interfaces"` — Der Wert ist ein Array, in dem Sie alle Interfaces auflisten sollten, die Teil dieser API sind.
   "Response" führt zu einem Link auf [https://developer.mozilla.org/de/docs/Web/API/Response](/de/docs/Web/API/Response).
3. `"methods"` — Der Wert ist ein Array, das alle Methoden enthalten sollte, die die Spezifikation zu Interfaces anderer APIs hinzufügt, wie z. B. Instanziierungsmethoden, die auf [`Navigator`](/de/docs/Web/API/Navigator) oder [`Window`](/de/docs/Web/API/Window) erstellt wurden.
   Wenn es eine große Anzahl von Methoden gibt, sollten Sie in Erwägung ziehen, nur die beliebtesten oder die wichtigsten zuerst aufzulisten.
   "fetch()" führt zu einem Link auf [https://developer.mozilla.org/de/docs/Web/API/fetch](/de/docs/Web/API/Window/fetch).
   _Listen Sie keine Methoden auf, die Mitglieder von Interfaces sind, die von derselben API verwaltet werden._
4. `"properties"` — Der Wert ist ein Array, das alle Eigenschaften enthalten sollte, die mit der API verbunden sind.
   Dies kann Eigenschaften umfassen, die Mitglieder von Interfaces sind, die in der API-Spezifikation definiert sind, und Eigenschaften, die die API auf anderen Interfaces definiert.
   Wenn es eine große Anzahl von Eigenschaften gibt, sollten Sie in Erwägung ziehen, nur die beliebtesten oder die wichtigsten zuerst aufzulisten.
   "Headers.append" führt zu einem Link auf [https://developer.mozilla.org/de/docs/Web/API/Headers/append](/de/docs/Web/API/Headers/append).
5. `"events"` — Der Wert ist ein Array, das die _Titel_ der Events enthalten sollte, die Teil der API sind, aber in Interfaces definiert sind, die _nicht_ Teil der API sind (Events, die zu Interfaces in der API (`interfaces`) gehören, werden standardmäßig dokumentiert).
   Wenn es eine große Anzahl von Events gibt, sollten Sie in Erwägung ziehen, nur die beliebtesten oder die wichtigsten zuerst aufzulisten.
   Zum Beispiel gehört `"Document: selectionchange"` zur [Selection API](/de/docs/Web/API/Selection_API), aber `Document` nicht, also fügen wir das Event zum Array hinzu, und es wird vom Thema [Selection API](/de/docs/Web/API/Selection_API) aus verlinkt.
6. `"guides"` — Der Wert ist ein Array von Strings, die jeweils ein Thema einer Anleitung behandeln, das erklärt, wie die API zu verwenden ist.
   Die Strings enthalten den Teil der URL-Adresse der Anleitung nach dem Sprachpfad: also den `/docs/...`-Teil der URL der Anleitung.
   Um beispielsweise das Thema "Using Fetch" unter `https://developer.mozilla.org/de/docs/Web/API/Fetch_API/Using_Fetch` zu verlinken, würde das Array der Anleitung "/docs/Web/API/Fetch_API/Using_Fetch" enthalten.
7. `"dictionaries"` — Ein Array von Strings, in dem alle Dictionaries aufgelistet sind, die Teil der API sind.
   Im Allgemeinen sollten nur Dictionaries, die von mehr als einer Eigenschaft oder Methode verwendet werden, hier aufgelistet werden, es sei denn, sie sind von besonderer Bedeutung oder werden wahrscheinlich von mehreren Seiten referenziert.
   "CryptoKeyPair" führt zu einem Link auf [https://developer.mozilla.org/de/docs/Web/API/CryptoKeyPair](/de/docs/Web/API/CryptoKeyPair).
   > [!NOTE]
   > MDN bewegt sich weg von der separaten Dokumentation von Dictionaries.
   > Wo möglich, werden diese jetzt als Objekte an den Stellen beschrieben, an denen sie verwendet werden.
8. `"types"` — Ein Array von `typedefs` und enumerierten Typen, die von der API definiert werden.
   Sie können sich entscheiden, nur solche aufzulisten, die von besonderer Bedeutung oder von mehreren Seiten referenziert werden, um die Liste kurz zu halten.
   > [!NOTE]
   > MDN bewegt sich weg von der separaten Dokumentation von `typedefs`.
   > Wo möglich, werden diese jetzt als Werte an den Stellen beschrieben, an denen sie verwendet werden.
9. `"callbacks"` — Der Wert ist ein Array, das eine Liste aller definierten Callback-Typen für die API enthält.
   Sie könnten es für unnötig halten, diese Gruppe überhaupt zu verwenden, selbst bei APIs, die Callback-Typen enthalten, da sie oft nicht nützlich sind, separat zu dokumentieren.

## Tags, die von Seitenleisten verwendet werden

Einige Unterelemente werden basierend auf Seitentags automatisch aus untergeordneten Seiten entdeckt.
Seiten unter der obersten API-Ebene werden jedes Mal gecrawlt, wenn die Seitenleiste gerendert wird, und Einträge werden automatisch für Methoden ("Method"-Tag), Eigenschaften ("Property"-Tag) und Konstruktoren ("Constructor"-Tag) erstellt.

Unterelemente werden ebenfalls automatisch mit Warnsymbolen basierend auf Tags versehen.
Dekorationen werden für experimentelle ("Experimental"-Tag), nicht-standardisierte ("Non Standard" oder "Non-standard"-Tag) oder veraltete ("Deprecated"-Tag) Unterelemente hinzugefügt.

Weitere Informationen zur tagbasierten Verarbeitung finden Sie [im APIRef-Quelltext](https://github.com/mdn/rari-doc/src/templ/templs/api_list_specs.rs).

## Einfügen der Seitenleiste

Nachdem Sie einen Eintrag für Ihre API in `GroupData.json` hinzugefügt, diesen als Pull Request eingereicht und die Änderung in das Hauptrepository übernommen wurde, können Sie ihn auf Ihren API-Referenzseiten mit dem [`APIRef`](https://github.com/mdn/rari-doc/src/templ/templs/api_list_specs.rs)-Makro einfügen, das den Namen Ihrer API, wie in GroupData verwendet, als Parameter übernimmt.
Zum Beispiel wird die Seitenleiste der [WebVR API](/de/docs/Web/API/WebVR_API) in ihren Seiten mit dem folgenden Code eingefügt:

```plain
\{{APIRef("WebVR API")}}
```
