---
title: API-Referenz-Seitenleisten
slug: MDN/Writing_guidelines/Howto/Write_an_api_reference/Sidebars
l10n:
  sourceCommit: 6d363614de8a40c33d1afe92e4e846b75beea986
---

Sie können eine benutzerdefinierte Seitenleiste auf API-Referenzseiten einfügen, damit Links zu verwandten Schnittstellen, Tutorials und anderen Ressourcen angezeigt werden, die nur für diese API relevant sind.
Dieser Artikel erklärt, wie das funktioniert.

## Erstellen einer Seitenleiste

Sie müssen die folgenden drei Schritte ausführen, um Ihre API-Seitenleiste zu erstellen:

1. Erstellen Sie Ihre API-Referenzseiten.
2. Fügen Sie einen Eintrag für Ihre spezifische API in die Datei [`GroupData.json`](https://github.com/mdn/content/blob/main/files/jsondata/GroupData.json) ein.
3. Verwenden Sie das [`APIRef`](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/api_list_specs.rs) Makro, um die Seitenleiste in jede Seite einzufügen, auf der Sie sie anzeigen möchten.

Lassen Sie uns jeden dieser Schritte der Reihe nach durchgehen.
Das Beispiel, auf das wir uns in diesem Artikel beziehen, ist die [Fetch API](/de/docs/Web/API/Fetch_API).

### Hinzufügen eines Eintrags zu GroupData.json

Die Datei `GroupData.json` enthält alle Daten, die sich darauf beziehen, welche Links in den API-Referenz-Seitenleisten erscheinen sollen.
Beim Aufruf nimmt das `APIRef` Makro einen als Parameter angegebenen API-Namen, sucht diesen Namen in `GroupData.json`, erstellt eine entsprechende Seitenleiste und fügt sie in die Seite ein.

Um einen Eintrag zu `GroupData.json` hinzuzufügen, müssen Sie:

1. Sicherstellen, dass Sie ein [GitHub](https://github.com/) Konto haben.
2. Das MDN-Inhaltsrepo forken, einen neuen Branch erstellen, um Ihre Änderungen aufzunehmen, und das Repo lokal klonen.
3. Ihren neuen Branch auschecken, bevor Sie mit der Arbeit beginnen, und sicherstellen, dass Sie die Änderungen darauf pushen, nachdem Sie die Arbeit abgeschlossen haben.
4. Einen Pull-Request erstellen, damit das MDN-Team Ihre Arbeit überprüfen kann und gegebenenfalls Änderungen anfordern kann.

Die Datei `GroupData.json` befindet sich im Verzeichnis `files/jsondata/`.
Wenn Sie sie sich ansehen, sehen Sie eine riesige JSON-Struktur, wobei jede API ihr eigenes Mitglied hat.
Der Name ist der API-Name und der Wert ist ein Objekt, das mehrere Untermglieder enthält, die die zu erstellenden Seitenleisten-Links definieren.

Zum Beispiel sehen Sie sich die [Fetch API](/de/docs/Web/API/Fetch_API) Seite auf MDN an.
Der entsprechende Eintrag in `GroupData.json` sieht folgendermaßen aus:

```json
{
  "Fetch API": {
    "overview": ["Fetch API"],
    "interfaces": [
      "Headers",
      "Request",
      "Response",
      "FetchController",
      "FetchObserver",
      "FetchSignal",
      "ObserverCallback"
    ],
    "methods": ["fetch()"],
    "properties": [],
    "events": []
  }
}
```

Wie Sie sehen, haben wir "Fetch API" für den Namen verwendet, und innerhalb des Objektwerts haben wir eine Reihe von Untermgliedern eingefügt.

#### Untermglieder, die in einem GroupData-Eintrag enthalten sein sollten

Dieser Abschnitt listet alle Untermglieder auf, die in einem `GroupData`-Eintrag enthalten sein könnten.

Beachten Sie, dass die meisten der in den aufgelisteten Untermgliedern enthaltenen Werte sowohl dem Linktext als auch Slugs entsprechen, die an das Ende der Haupt-API-Indexseite angehängt werden — `https://developer.mozilla.org/<language-code>/docs/Web/API` — um die endgültige URL für den angezeigten Link zu erstellen.
Zum Beispiel wird "Response" zu einem Link wie folgt führen:

```html
<li><a href="/en-US/docs/Web/API/Response">Response</a></li>
```

Es gibt einige Ausnahmen.
Zum Beispiel enthält das Untermglied "guides" die URLs, die auf zugehörige Leitfäden/Tutorials zeigen.
In diesem Fall werden die URLs an das Ende des MDN-Dokumentationsstamms angehängt — `https://developer.mozilla.org/<language-code>` — wodurch ein Artikel überall auf MDN einbezogen werden kann.

Hier sind die verfügbaren Mitglieder.
Diese sind alle technisch optional, aber es wird dringend empfohlen, dass Sie, anstatt sie auszulassen, leere Arrays hinzufügen.

1. `"overview"` — der Wert ist ein Array, in dem Sie den Slug der API-Übersichtsseite einfügen, falls es eine gibt.
   "Fetch API" führt zu einem Link zu [https://developer.mozilla.org/de/docs/Web/API/Fetch_API](/de/docs/Web/API/Fetch_API).
2. `"interfaces"` — der Wert ist ein Array, in dem Sie alle Schnittstellen auflisten sollten, die Teil dieser API sind.
   "Response" führt zu einem Link zu [https://developer.mozilla.org/de/docs/Web/API/Response](/de/docs/Web/API/Response).
3. `"methods"` — der Wert ist ein Array, das alle Methoden enthalten sollte, die die Spezifikation Schnittstellen anderer APIs hinzufügt, wie Instanziierungsmethoden, die auf [`Navigator`](/de/docs/Web/API/Navigator) oder [`Window`](/de/docs/Web/API/Window) erstellt wurden.
   Wenn es eine große Anzahl von Methoden gibt, könnten Sie in Erwägung ziehen, nur die beliebtesten aufzulisten oder sie am Anfang der Liste zu platzieren.
   "fetch()" führt zu einem Link zu [https://developer.mozilla.org/de/docs/Web/API/fetch](/de/docs/Web/API/Window/fetch).
   Listen Sie _keine_ Methoden auf, die Mitglieder von Schnittstellen sind, die derselben API gehören.
4. `"properties"` — der Wert ist ein Array, das alle mit der API verbundenen Eigenschaften enthalten sollte.
   Dies kann Eigenschaften umfassen, die Mitglieder von Schnittstellen sind, die in der API-Spezifikation definiert sind, und Eigenschaften, die die API auf anderen Schnittstellen definiert.
   Wenn es eine große Anzahl von Eigenschaften gibt, könnten Sie in Erwägung ziehen, nur die beliebtesten aufzulisten oder sie am Anfang der Liste zu platzieren.
   "Headers.append" führt zu einem Link zu [https://developer.mozilla.org/de/docs/Web/API/Headers/append](/de/docs/Web/API/Headers/append).
5. `"events"` — der Wert ist ein Array, das den _Titel_ von Ereignissen enthalten sollte, die Teil der API sind, jedoch in Schnittstellen definiert sind, die _nicht_ Teil der API sind (Ereignisse, die zu Schnittstellen in der API (`interfaces`) gehören, werden standardmäßig dokumentiert).
   Wenn es eine große Anzahl von Ereignissen gibt, könnten Sie in Erwägung ziehen, nur die beliebtesten aufzulisten oder sie am Anfang der Liste zu platzieren.
   Zum Beispiel ist `"Document: selectionchange"` Teil der [Selection API](/de/docs/Web/API/Selection_API), aber `Document` nicht, daher fügen wir das Ereignis dem Array hinzu, und es wird vom [Selection API](/de/docs/Web/API/Selection_API) Thema verlinkt.
6. `"guides"` — der Wert ist ein Array von Zeichenketten, die jeweils ein Leitfadenthema behandeln, das erklärt, wie die API verwendet wird.
   Die Zeichenketten enthalten den Teil der URL-Adresse des Leitfadens nach dem Sprachpfad: d.h. den `/docs/...` Teil der Leitfaden-URL.
   Zum Beispiel, um das Thema "Using Fetch" unter `https://developer.mozilla.org/de/docs/Web/API/Fetch_API/Using_Fetch` zu verlinken, würde das Leitfaden-Array "/docs/Web/API/Fetch_API/Using_Fetch" enthalten.
7. `"dictionaries"` — ein Array von Zeichenketten, das alle Wörterbücher auflistet, die Teil der API sind.
   Im Allgemeinen sollten nur Wörterbücher aufgeführt werden, die von mehr als einer Eigenschaft oder Methode verwendet werden, es sei denn, sie sind von besonderer Bedeutung oder müssen möglicherweise von mehreren Seiten aus referenziert werden.
   "CryptoKeyPair" führt zu einem Link zu [https://developer.mozilla.org/de/docs/Web/API/CryptoKeyPair](/de/docs/Web/API/CryptoKeyPair).
   > [!NOTE]
   > MDN bewegt sich weg von der separaten Dokumentation von Wörterbüchern.
   > Wo möglich, werden diese jetzt als Objekte an den Stellen beschrieben, an denen sie verwendet werden.
8. `"types"` — ein Array von Typdeklationen und enumerierten Typen, die von der API definiert werden.
   Sie können sich entscheiden, nur solche aufzulisten, die von besonderer Bedeutung sind oder von mehreren Seiten referenziert werden, um die Liste kurz zu halten.
   > [!NOTE]
   > MDN bewegt sich weg von der separaten Dokumentation von Typen.
   > Wo möglich, werden diese jetzt als Werte an den Stellen beschrieben, an denen sie verwendet werden.
9. `"callbacks"` — der Wert ist ein Array, das eine Liste aller definierten Callback-Typen für die API enthält.
   Es kann sein, dass es überhaupt nicht notwendig ist, diese Gruppe zu verwenden, auch nicht bei APIs, die Callback-Typen enthalten, da oft kein Bedarf besteht, sie separat zu dokumentieren.

## Tags, die von Seitenleisten verwendet werden

Einige Untermglieder werden automatisch von Unterseiten aus entdeckt, basierend auf Seitentags.
Seiten unter der obersten API-Ebene werden jedes Mal durchsucht, wenn die Seitenleiste gerendert wird, und Einträge für Methoden ("Method" Tag), Eigenschaften ("Property" Tag) und Konstruktoren ("Constructor" Tag) werden automatisch erstellt.

Untermglieder werden ebenfalls automatisch mit Warnsymbolen basierend auf Tags dekoriert.
Dekorationen werden für experimentelle ("Experimental" Tag), nicht standardisierte ("Non Standard" oder "Non-standard" Tag) oder stillgelegte ("Deprecated" Tag) Untermglieder hinzugefügt.

Weitere Informationen zur tagbasierten Verarbeitung sind [im APIRef-Quellcode](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/api_list_specs.rs) verfügbar.

## Einfügen der Seitenleiste

Sobald Sie einen Eintrag für Ihre API in `GroupData.json` hinzugefügt, ihn als Pull-Request eingereicht und die Änderung im Hauptrepo akzeptiert haben, können Sie ihn in Ihren API-Referenzseiten mithilfe des [`APIRef`](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/api_list_specs.rs) Makros einfügen, das den Namen verwendet, den Sie für Ihre API in GroupData als Parameter angegeben haben.
Als Beispiel wird die Seitenleiste der [WebVR API](/de/docs/Web/API/WebVR_API) in ihren Seiten mit folgendem Code eingefügt:

```plain
\{{APIRef("WebVR API")}}
```
