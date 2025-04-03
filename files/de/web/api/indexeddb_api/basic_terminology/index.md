---
title: Schlüsselmerkmale und grundlegende Terminologie von IndexedDB
slug: Web/API/IndexedDB_API/Basic_Terminology
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{DefaultAPISidebar("IndexedDB")}}

Dieser Artikel beschreibt die Schlüsselmerkmale von IndexedDB und führt einige wesentliche Begriffe ein, die für das Verständnis der IndexedDB-API relevant sind.

Die folgenden Artikel sind ebenfalls hilfreich:

- Für ein detailliertes Tutorial zur Nutzung der API siehe [Verwendung von IndexedDB](/de/docs/Web/API/IndexedDB_API/Using_IndexedDB).
- Für die Referenzdokumentation zur IndexedDB-API schauen Sie sich den Hauptartikel [IndexedDB API](/de/docs/Web/API/IndexedDB_API) und dessen Unterseiten an, die die von IndexedDB verwendeten Objekttypen dokumentieren.
- Für weitere Informationen darüber, wie der Browser die Speicherung Ihrer Daten im Hintergrund behandelt, lesen Sie [Browser-Speicherquoten und Löschkriterien](/de/docs/Web/API/Storage_API/Storage_quotas_and_eviction_criteria).

## Schlüsselmerkmale

IndexedDB ermöglicht es Ihnen, Daten dauerhaft im Browser eines Nutzers zu speichern. Da es Ihnen erlaubt, Webanwendungen mit umfangreichen Abfragefähigkeiten unabhängig von der Netzwerkverfügbarkeit zu erstellen, können diese Anwendungen sowohl online als auch offline funktionieren. IndexedDB ist nützlich für Anwendungen, die eine große Menge an Daten speichern (zum Beispiel ein Katalog von DVDs in einer Leihbibliothek) und Anwendungen, die keine ständige Internetverbindung benötigen (zum Beispiel E-Mail-Clients, To-Do-Listen und Notizblöcke).

IndexedDB erlaubt Ihnen, Objekte zu speichern und abzurufen, die mit einem „Schlüssel“ indiziert sind. Alle Änderungen, die Sie an der Datenbank vornehmen, erfolgen innerhalb von Transaktionen. Wie die meisten Webspeicherlösungen folgt IndexedDB einer [Same-Origin-Policy](https://www.w3.org/Security/wiki/Same_Origin_Policy). Während Sie also auf gespeicherte Daten innerhalb einer Domain zugreifen können, können Sie nicht auf Daten in verschiedenen Domains zugreifen.

Wenn Sie Annahmen aus der Arbeit mit anderen Arten von Datenbanken haben, könnten Sie bei der Arbeit mit IndexedDB verwirrt werden. Daher sind die folgenden Schlüsselmerkmale von IndexedDB wichtig zu beachten:

- **IndexedDB-Datenbanken speichern Schlüssel-Werte-Paare.** Die Werte können komplexe strukturierte Objekte sein, und Schlüssel können Eigenschaften dieser Objekte sein. Sie können Indizes erstellen, die jede Eigenschaft der Objekte für schnelles Suchen sowie sortierte Aufzählung verwenden. Schlüssel können binäre Objekte sein.
- **IndexedDB basiert auf einem transaktionalen Datenmodell.** Alles, was Sie in IndexedDB tun, geschieht immer im Kontext einer [Transaktion](#transaktion). Die IndexedDB-API bietet viele Objekte, die Indizes, Tabellen, Cursors usw. repräsentieren, aber jedes dieser Objekte ist an eine bestimmte Transaktion gebunden. Daher können Sie keine Befehle ausführen oder Cursors außerhalb einer Transaktion öffnen. Transaktionen haben eine gut definierte Lebensdauer, sodass der Versuch, eine Transaktion nach ihrer Beendigung zu verwenden, Ausnahmen auslöst. Transaktionen werden auch automatisch abgeschlossen, wenn keine neuen Anfragen gestellt werden, während die Transaktion aktiv ist.

  Dieses Transaktionsmodell ist wirklich nützlich, wenn Sie überlegen, was passieren könnte, wenn ein Benutzer zwei Instanzen Ihrer Webanwendung in zwei verschiedenen Tabs gleichzeitig öffnet. Ohne Transaktionsoperationen könnten sich die beiden Instanzen gegenseitig bei ihren Änderungen stören. Wenn Sie mit Transaktionen in einer Datenbank nicht vertraut sind, lesen Sie den [Wikipedia-Artikel über Transaktionen](https://en.wikipedia.org/wiki/Database_transaction). Siehe auch [Transaktion](#transaktion) im Abschnitt Definitionen.

- **Die IndexedDB-API ist größtenteils asynchron.** Die API gibt Ihnen keine Daten durch Rückgabe von Werten; stattdessen müssen Sie eine Callback-Funktion übergeben. Sie „speichern“ keinen Wert in der Datenbank oder „rufen“ einen Wert aus der Datenbank auf synchrone Weise ab. Stattdessen „beantragen“ Sie, dass eine Datenbankoperation durchgeführt wird. Sie werden durch ein DOM-Ereignis benachrichtigt, wenn die Operation abgeschlossen ist, und die Art des Ereignisses informiert Sie, ob die Operation erfolgreich war oder fehlgeschlagen ist.
- **IndexedDB verwendet viele Anfragen.** Anfragen sind Objekte, die die zuvor erwähnten DOM-Ereignisse bei Erfolg oder Misserfolg erhalten. Sie haben `onsuccess`- und `onerror`-Eigenschaften, und Sie können `addEventListener()` und `removeEventListener()` auf ihnen aufrufen. Sie haben auch `readyState`-, `result`- und `errorCode`-Eigenschaften, die Ihnen den Status der Anfrage mitteilen. Die `result`-Eigenschaft ist besonders bemerkenswert, da sie viele verschiedene Dinge sein kann, abhängig davon, wie die Anfrage erzeugt wurde (zum Beispiel eine `IDBCursor`-Instanz oder der Schlüssel für einen Wert, den Sie gerade in die Datenbank eingefügt haben).
- **IndexedDB verwendet DOM-Ereignisse, um Sie zu benachrichtigen, wenn Ergebnisse verfügbar sind.** DOM-Ereignisse haben immer eine `type`-Eigenschaft (in IndexedDB ist sie am häufigsten auf `"success"` oder `"error"` gesetzt). DOM-Ereignisse haben auch eine `target`-Eigenschaft, die angibt, wohin das Ereignis gesendet wird. In den meisten Fällen ist das `target` eines Ereignisses das `IDBRequest`-Objekt, das als Ergebnis einer Datenbankoperation erzeugt wurde. Erfolgsevents breiten sich nicht aus und können nicht abgebrochen werden. Fehlerereignisse hingegen breiten sich aus und können abgebrochen werden. Dies ist ziemlich wichtig, da Fehlerereignisse alle Transaktionen, in denen sie laufen, abbrechen, es sei denn, sie werden abgebrochen.
- **IndexedDB ist objektorientiert.** IndexedDB ist keine relationale Datenbank mit Tabellen, die Sammlungen von Zeilen und Spalten darstellen. Dieser wichtige und grundlegende Unterschied beeinflusst die Art und Weise, wie Sie Ihre Anwendungen entwerfen und erstellen.

  In einer traditionellen relationalen Datenbank hätten Sie eine Tabelle, die eine Sammlung von Datenzeilen und Spalten von benannten Datentypen speichert. IndexedDB erfordert hingegen, dass Sie einen Objekt-Store für einen Datentyp erstellen und JavaScript-Objekte in diesem Store speichern. Jeder Objekt-Store kann eine Sammlung von Indizes haben, die das Abfragen und Iterieren effizient macht. Wenn Sie mit objektorientierten Datenbankverwaltungssystemen nicht vertraut sind, lesen Sie den [Wikipedia-Artikel über Objekt-Datenbanken](https://en.wikipedia.org/wiki/Object_database).

- **IndexedDB verwendet keine Strukturierte Abfragesprache (SQL).** Es verwendet Abfragen auf einem Index, der einen Cursor erzeugt, mit dem Sie über die Ergebnismenge iterieren. Wenn Sie mit NoSQL-Systemen nicht vertraut sind, lesen Sie den [Wikipedia-Artikel über NoSQL](https://en.wikipedia.org/wiki/NoSQL).
- **IndexedDB hält sich an eine Same-Origin-Policy.** Eine Origin ist die Domain, das Anwendungsprotokoll und der Port einer URL des Dokuments, in dem das Skript ausgeführt wird. Jede Origin hat ihr eigenes zugeordnetes Set von Datenbanken. Jede Datenbank hat einen Namen, der sie innerhalb einer Origin identifiziert.

  Die Sicherheitsgrenze, die auf IndexedDB verhängt wird, verhindert, dass Anwendungen auf Daten mit einer anderen Origin zugreifen. Zum Beispiel kann eine App oder eine Seite unter `http://www.example.com/app/` Daten von `http://www.example.com/dir/` abrufen, weil sie die gleiche Origin haben, nicht jedoch von `http://www.example.com:8080/dir/` (unterschiedlicher Port) oder `https://www.example.com/dir/` (unterschiedliches Protokoll), weil sie unterschiedliche Origns haben.

  > [!NOTE]
  > Inhalte von Drittanbieter-Fenstern (z.B. {{htmlelement("iframe")}} Inhalte) können auf den IndexedDB-Store für die Origin zugreifen, in die sie eingebettet sind, es sei denn, der Browser ist so eingestellt, dass er [niemals Drittanbieter-Cookies akzeptiert](https://support.mozilla.org/en-US/kb/third-party-cookies-firefox-tracking-protection) (siehe [Firefox Bug 1147821](https://bugzil.la/1147821)).

### Einschränkungen

IndexedDB ist so konzipiert, dass es die meisten Fälle abdeckt, die eine clientseitige Speicherung benötigen. Allerdings ist es nicht für einige Fälle ausgelegt, wie zum Beispiel:

- Internationalisierte Sortierung. Nicht alle Sprachen sortieren Zeichenfolgen auf dieselbe Weise, daher wird die internationalisierte Sortierung nicht unterstützt. Während die Datenbank Daten nicht in einer bestimmten internationalisierten Reihenfolge speichern kann, können Sie die Daten, die Sie aus der Datenbank gelesen haben, selbst sortieren.
- Synchronisierung. Die API ist nicht dafür ausgelegt, die Synchronisierung mit einer serverseitigen Datenbank zu übernehmen. Sie müssen Code schreiben, der eine clientseitige IndexedDB-Datenbank mit einer serverseitigen Datenbank synchronisiert.
- Volltextsuche. Die API hat kein Äquivalent zum `LIKE`-Operator in SQL.

Darüber hinaus sollten Sie beachten, dass Browser die Datenbank löschen können, zum Beispiel unter den folgenden Bedingungen:

- Der Benutzer verlangt eine Löschung. Viele Browser haben Einstellungen, die es Benutzern ermöglichen, alle gespeicherten Daten für eine bestimmte Website zu löschen, einschließlich Cookies, Lesezeichen, gespeicherte Passwörter und IndexedDB-Daten.
- Der Browser befindet sich im privaten Modus. Einige Browser haben einen „privaten Modus“ (Firefox) oder „Inkognito“ (Chrome). Am Ende der Sitzung löscht der Browser die Datenbank.
- Das Festplatten- oder Kontingentlimit wurde erreicht.
- Die Daten sind beschädigt.
- Eine inkompatible Änderung wurde an der Funktion vorgenommen.

Die genauen Bedingungen und Fähigkeiten der Browser ändern sich mit der Zeit, aber die allgemeine Philosophie der Browseranbieter besteht darin, sich bestmöglich zu bemühen, die Daten nach Möglichkeit zu bewahren.

## Kernterminologie

Dieser Abschnitt definiert und erklärt die Kernbegriffe, die für das Verständnis der IndexedDB-API relevant sind.

### Datenbank

#### Datenbank

Ein Informationsspeicher, der typischerweise aus einem oder mehreren [_Objekt-Stores_](#objekt-store) besteht. Jede Datenbank muss Folgendes haben:

- Name. Dieser identifiziert die Datenbank innerhalb einer bestimmten Origin und bleibt während ihrer gesamten Lebensdauer konstant. Der Name kann ein beliebiger Zeichenfolgewert sein (einschließlich eines leeren Strings).
- Aktuelle [_Version_](#version). Wenn eine Datenbank erstmals erstellt wird, ist ihre Version die ganze Zahl 1, es sei denn, es wird etwas anderes angegeben. Jede Datenbank kann zu einem bestimmten Zeitpunkt nur eine Version haben.

#### Datenbankverbindung

Eine Operation, die durch das Öffnen einer _[Datenbank](#datenbank)_ erstellt wird. Eine gegebene Datenbank kann mehrere Verbindungen gleichzeitig haben.

#### dauerhaft

In Firefox war IndexedDB früher **dauerhaft**, das bedeutete, dass in einer Lese-Schreib-Transaktion ein [`complete`](/de/docs/Web/API/IDBTransaction/complete_event)-Ereignis nur dann ausgelöst wurde, wenn alle Daten garantiert auf die Festplatte geschrieben worden waren.

Seit Firefox 40 hat IndexedDB eine lockerere Haltbarkeitsgarantie, um die Leistung zu steigern (siehe [Firefox Bug 1112702](https://bugzil.la/1112702)), was dasselbe Verhalten wie bei anderen IndexedDB-unterstützenden Browsern ist. In diesem Fall wird das [`complete`](/de/docs/Web/API/IDBTransaction/complete_event)-Ereignis ausgelöst, nachdem das Betriebssystem angewiesen wurde, die Daten zu schreiben, aber möglicherweise bevor diese Daten tatsächlich auf die Festplatte geschrieben wurden. Das Ereignis kann daher schneller als zuvor geliefert werden, allerdings besteht eine geringe Chance, dass die gesamte Transaktion verloren geht, wenn das Betriebssystem abstürzt oder die Systemleistung verloren geht, bevor die Daten auf die Festplatte geschrieben wurden. Da solche katastrophalen Ereignisse selten sind, sollten sich die meisten Nutzer keine weiteren Sorgen machen müssen.

> [!NOTE]
> In Firefox, wenn Sie aus irgendeinem Grund Dauerhaftigkeit sicherstellen möchten (z.B. wenn Sie kritische Daten speichern, die später nicht erneut berechnet werden können), können Sie eine Transaktion erzwingen, um die Daten auf die Festplatte zu schreiben, bevor das `complete`-Ereignis geliefert wird, indem Sie eine Transaktion im experimentellen (nicht standardmäßigen) `readwriteflush`-Modus erstellen (siehe [`IDBDatabase.transaction`](/de/docs/Web/API/IDBDatabase/transaction)). Dies ist derzeit experimentell und kann nur verwendet werden, wenn die Einstellung `dom.indexedDB.experimental` in `about:config` auf `true` gesetzt ist.

#### Index

Ein Index ist ein spezialisierter Objekt-Store zum Nachschlagen von Datensätzen in einem anderen Objekt-Store, dem _referenzierten Objekt-Store_. Der Index ist ein dauerhaftes Schlüssel-Wert-Speichersystem, bei dem der Wertteil seiner Datensätze der Schlüsselteil eines Datensatzes im referenzierten Objekt-Store ist. Die Datensätze in einem Index werden automatisch gefüllt, wenn Datensätze im referenzierten Objekt-Store eingefügt, aktualisiert oder gelöscht werden. Jeder Datensatz in einem Index kann auf nur einen Datensatz in seinem referenzierten Objekt-Store verweisen, aber mehrere Indizes können denselben Objekt-Store referenzieren. Wenn sich der Objekt-Store ändert, werden alle Indizes, die auf den Objekt-Store verweisen, automatisch aktualisiert.

Alternativ können Sie auch Datensätze in einem Objekt-Store mit dem [Schlüssel](#schlüssel) nachschlagen.

Um mehr über die Verwendung von Indizes zu erfahren, siehe [Verwendung von IndexedDB](/de/docs/Web/API/IndexedDB_API/Using_IndexedDB#using_an_index). Für die Referenzdokumentation zum Index, siehe [IDBKeyRange](/de/docs/Web/API/IDBKeyRange).

#### Objekt-Store

Der Mechanismus, durch den Daten in der Datenbank gespeichert werden. Der Objekt-Store hält dauerhaft Datensätze, die Schlüssel-Wert-Paare sind. Datensätze in einem Objekt-Store sind gemäß den _[Schlüsseln](#schlüssel)_ in aufsteigender Reihenfolge sortiert.

Jeder Objekt-Store muss einen Namen haben, der innerhalb seiner Datenbank eindeutig ist. Der Objekt-Store kann optional einen _[Schlüsselgenerator](#schlüsselgenerator)_ und einen _[Schlüsselpfad](#schlüsselpfad)_ haben. Wenn der Objekt-Store einen Schlüsselpfad hat, verwendet er _[interne Schlüssel](#interner_schlüssel)_; andernfalls verwendet er _[externe Schlüssel](#externer_schlüssel)_.

Für die Referenzdokumentation zum Objekt-Store siehe [`IDBObjectStore`](/de/docs/Web/API/IDBObjectStore).

#### Anfrage

Die Operation, durch die das Lesen und Schreiben in einer Datenbank durchgeführt wird. Jede Anfrage stellt einen Lese- oder Schreibvorgang dar.

#### Transaktion

Ein atomarer Satz von Datenzugriffs- und Datenänderungsvorgängen auf einer bestimmten Datenbank. Es ist der Weg, wie Sie mit den Daten in einer Datenbank interagieren. Tatsächlich muss jede Lese- oder Datenänderung in der Datenbank in einer Transaktion stattfinden.

Eine Datenbankverbindung kann gleichzeitig mehrere aktive Transaktionen haben, solange die Schreibtransaktionen keine überlappenden [_Scopes_](#gültigkeitsbereich) haben. Der Scope von Transaktionen, der bei der Erstellung definiert wird, bestimmt, mit welchen Objekt-Stores die Transaktion interagieren kann, und bleibt während der Lebensdauer der Transaktion konstant. Wenn zum Beispiel eine Datenbankverbindung bereits eine Schreibtransaktion mit einem Scope hat, der nur den `flyingMonkey`-Objekt-Store umfasst, können Sie eine zweite Transaktion mit einem Scope der `unicornCentaur`- und `unicornPegasus`-Objekt-Stores starten. Was die Lesetransaktionen betrifft, können Sie mehrere davon haben — sogar überlappende.

Transaktionen sollen kurzlebig sein, sodass der Browser eine Transaktion, die zu lange dauert, beenden kann, um Speicherressourcen freizugeben, die die lang andauernde Transaktion gesperrt hat. Sie können die Transaktion abbrechen, wodurch die in der Transaktion vorgenommenen Änderungen an der Datenbank zurückgesetzt werden. Und Sie müssen nicht einmal darauf warten, dass die Transaktion beginnt oder aktiv ist, um sie abzubrechen.

Die drei Modi der Transaktionen sind: `readwrite`, `readonly` und `versionchange`. Die einzige Möglichkeit, Objekt-Stores und Indizes zu erstellen und zu löschen, besteht darin, eine [`versionchange`](/de/docs/Web/API/IDBDatabase/versionchange_event)-Transaktion zu verwenden. Um mehr über Transaktionstypen zu erfahren, siehe den Referenzartikel für [IndexedDB](/de/docs/Web/API/IndexedDB_API).

Da alles innerhalb einer Transaktion passiert, ist es ein sehr wichtiges Konzept in IndexedDB. Um mehr über Transaktionen zu erfahren, insbesondere darüber, wie sie sich auf die Versionierung beziehen, siehe [`IDBTransaction`](/de/docs/Web/API/IDBTransaction), das auch Referenzdokumentation hat.

#### Version

Wenn eine Datenbank erstmals erstellt wird, ist ihre Version die ganze Zahl 1. Jede Datenbank hat zu einem Zeitpunkt nur eine Version; eine Datenbank kann nicht in mehreren Versionen gleichzeitig existieren. Der einzige Weg, die Version zu ändern, besteht darin, sie mit einer höheren Version als der aktuellen zu öffnen.

### Schlüssel und Wert

#### interner Schlüssel

Ein Schlüssel, der als Teil des gespeicherten Wertes gespeichert wird. Er wird durch einen _Schlüsselpfad_ gefunden. Ein interner Schlüssel kann mit einem Generator erzeugt werden. Nachdem der Schlüssel generiert wurde, kann er dann im Wert unter Verwendung des Schlüsselpfads gespeichert werden, oder er kann auch als Schlüssel verwendet werden.

#### Schlüssel

Ein Datenwert, durch den die gespeicherten Werte im Objekt-Store organisiert und abgerufen werden. Der Objekt-Store kann den Schlüssel aus einer von drei Quellen ableiten: einem _[Schlüsselgenerator](#schlüsselgenerator)_, einem _[Schlüsselpfad](#schlüsselpfad)_ oder einem explizit angegebenen Wert. Der Schlüssel muss von einem Datentyp sein, der eine Zahl hat, die größer ist als die zuvor. Jeder Datensatz im Objekt-Store muss einen Schlüssel haben, der innerhalb desselben Stores eindeutig ist, sodass Sie in einem gegebenen Objekt-Store keine doppelten Datensätze mit dem gleichen Schlüssel haben können.

Ein Schlüssel kann einer der folgenden Typen sein: [string](/de/docs/Web/JavaScript/Reference/Global_Objects/String), [date](/de/docs/Web/JavaScript/Reference/Global_Objects/Date), float, ein binäres Blob und [array](/de/docs/Web/JavaScript/Reference/Global_Objects/Array). Für Arrays kann der Schlüssel von einem leeren Wert bis zu unendlich reichen. Und Sie können ein Array in ein Array einfügen.

Alternativ können Sie auch Datensätze in einem Objekt-Store mithilfe des _[Index](#index)_ nachschlagen.

#### Schlüsselgenerator

Ein Mechanismus zur Erzeugung neuer Schlüssel in einer geordneten Sequenz. Wenn ein Objekt-Store keinen Schlüsselgenerator hat, muss die Anwendung Schlüssel für Datensätze bereitstellen, die gespeichert werden. Generatoren werden nicht zwischen den Stores geteilt. Dies ist mehr ein browserinternes Detail, da man in der Webentwicklung im Allgemeinen keine Schlüsselgeneratoren erstellt oder darauf zugreift.

#### Schlüsselpfad

Definiert, wo der Browser den Schlüssel im Objekt-Store oder Index extrahieren soll. Ein gültiger Schlüsselpfad kann eines der folgenden beinhalten: einen leeren String, eine JavaScript-Identifikator oder mehrere JavaScript-Identifikatoren, die durch Punkte getrennt sind, oder ein Array, das eines dieser enthält. Es kann keine Leerzeichen enthalten.

#### externer Schlüssel

Ein Schlüssel, der separat vom Wert gespeichert wird, der gespeichert wird.

#### Wert

Jeder Datensatz hat einen Wert, der alles umfassen könnte, was in JavaScript ausgedrückt werden kann, einschließlich [boolean](/de/docs/Web/JavaScript/Reference/Global_Objects/Boolean), [number](/de/docs/Web/JavaScript/Reference/Global_Objects/Number), [string](/de/docs/Web/JavaScript/Reference/Global_Objects/String), [date](/de/docs/Web/JavaScript/Reference/Global_Objects/Date), [object](/de/docs/Web/JavaScript/Reference/Global_Objects/Object), [array](/de/docs/Web/JavaScript/Reference/Global_Objects/Array), [regexp](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp), [undefined](/de/docs/Web/JavaScript/Reference/Global_Objects/undefined) und null.

Wenn ein Objekt oder Array gespeichert wird, können die Eigenschaften und Werte in diesem Objekt oder Array auch alles sein, was ein gültiger Wert ist.

[Blobs](/de/docs/Web/API/Blob) und Dateien können gespeichert werden, siehe [Spezifikation](https://w3c.github.io/IndexedDB/).

### Bereich und Gültigkeitsbereich

#### Cursor

Ein Mechanismus zum Iterieren über mehrere Datensätze mit einem _Schlüsselbereich_. Der Cursor hat eine Quelle, die angibt, welchen Index oder welchen Objekt-Store er durchläuft. Er hat eine Position innerhalb des Bereichs und bewegt sich in einer Richtung, die in der Reihenfolge der Datensätze entweder ansteigend oder abnehmend ist. Für die Referenzdokumentation zu Cursors siehe [`IDBCursor`](/de/docs/Web/API/IDBCursor).

#### Schlüsselbereich

Ein kontinuierliches Intervall über einen Datentyp, der für Schlüssel verwendet wird. Datensätze können aus Objekt-Stores und Indizes unter Verwendung von Schlüsseln oder einem Schlüsselbereich abgerufen werden. Sie können den Bereich mithilfe unterer und oberer Grenzen begrenzen oder filtern. Zum Beispiel können Sie alle Werte eines Schlüssels zwischen x und y durchlaufen.

Für die Referenzdokumentation zu Schlüsselbereichen siehe [`IDBKeyRange`](/de/docs/Web/API/IDBKeyRange).

#### Gültigkeitsbereich

Die Menge der Objekt-Stores und Indizes, auf die sich eine Transaktion bezieht. Die Bereiche von schreibgeschützten Transaktionen können sich überschneiden und gleichzeitig ausgeführt werden. Andererseits können sich die Bereiche von Schreibtransaktionen nicht überschneiden. Sie können dennoch mehrere Transaktionen mit demselben Gültigkeitsbereich gleichzeitig starten, aber sie werden einfach in die Warteschlange gestellt und nacheinander ausgeführt.

## Nächste Schritte

Mit einem Verständnis der Schlüsselmerkmale von IndexedDB und der grundlegenden Terminologie können wir zu konkreteren Inhalten übergehen. Für ein Tutorial zur Nutzung der API siehe [Verwendung von IndexedDB](/de/docs/Web/API/IndexedDB_API/Using_IndexedDB).

## Siehe auch

- [Indexed Database API Specification](https://www.w3.org/TR/IndexedDB/)
- [IndexedDB API Referenz](/de/docs/Web/API/IndexedDB_API)
- [Verwendung von IndexedDB](/de/docs/Web/API/IndexedDB_API/Using_IndexedDB)
- [IndexedDB — Der Speicher in Ihrem Browser](<https://learn.microsoft.com/en-us/previous-versions/msdn10/gg679063(v=msdn.10)>)
