---
title: Schlüsselmerkmale von IndexedDB und grundlegende Terminologie
slug: Web/API/IndexedDB_API/Basic_Terminology
l10n:
  sourceCommit: f2088b8912ef205a737551441d54b73507bd3ac6
---

{{DefaultAPISidebar("IndexedDB")}}

Dieser Artikel beschreibt die Schlüsselmerkmale von IndexedDB und führt einige wesentliche Begriffe ein, die für das Verständnis der IndexedDB-API relevant sind.

Sie werden auch folgende Artikel nützlich finden:

- Für ein detailliertes Tutorial zur Nutzung der API, siehe [Verwendung von IndexedDB](/de/docs/Web/API/IndexedDB_API/Using_IndexedDB).
- Für die Referenzdokumentation zur IndexedDB-API, schauen Sie sich den Hauptartikel zur [IndexedDB-API](/de/docs/Web/API/IndexedDB_API) und seine Unterseiten an, die die von IndexedDB verwendeten Objekttypen dokumentieren.
- Für mehr Informationen darüber, wie der Browser Ihre Daten im Hintergrund speichert, lesen Sie [Browser-Speicherquoten und Auslöschkriterien](/de/docs/Web/API/Storage_API/Storage_quotas_and_eviction_criteria).

## Schlüsselmerkmale

IndexedDB ist eine Möglichkeit, Daten innerhalb eines Benutzerbrowsers dauerhaft zu speichern. Da es Ihnen ermöglicht, Webanwendungen mit umfangreichen Abfragefähigkeiten zu erstellen, unabhängig von der Verfügbarkeit des Netzwerks, können diese Anwendungen sowohl online als auch offline arbeiten. IndexedDB ist nützlich für Anwendungen, die eine große Menge an Daten speichern (z.B. ein Katalog von DVDs in einer Leihbibliothek) und für Anwendungen, die keine dauerhafte Internetverbindung benötigen, um zu funktionieren (z.B. E-Mail-Clients, Aufgabenlisten und Notizblöcke).

IndexedDB ermöglicht es Ihnen, Objekte zu speichern und abzurufen, die mit einem "Schlüssel" indexiert sind. Alle Änderungen, die Sie an der Datenbank vornehmen, erfolgen innerhalb von Transaktionen. Wie die meisten Webspeicherlösungen folgt IndexedDB einer [Same-Origin-Policy](https://www.w3.org/Security/wiki/Same_Origin_Policy). Daher können Sie auf gespeicherte Daten innerhalb einer Domain zugreifen, jedoch nicht auf Daten aus verschiedenen Domains.

Wenn Sie Annahmen aus der Arbeit mit anderen Arten von Datenbanken haben, könnten Sie verwirrt sein, wenn Sie mit IndexedDB arbeiten. Daher sind folgende Schlüsselmerkmale von IndexedDB wichtig zu beachten:

- **IndexedDB-Datenbanken speichern Schlüssel-Wert-Paare.** Die Werte können komplex strukturierte Objekte sein, und Schlüssel können Eigenschaften dieser Objekte sein. Sie können Indizes erstellen, die jede Eigenschaft der Objekte für schnelles Suchen sowie sortierte Aufzählungen verwenden. Schlüssel können binäre Objekte sein.
- **IndexedDB basiert auf einem transaktionalen Datenbankmodell.** Alles, was Sie in IndexedDB tun, geschieht immer im Kontext einer [Transaktion](#transaktion). Die IndexedDB-API bietet viele Objekte, die Indizes, Tabellen, Cursor usw. repräsentieren, aber jedes von ihnen ist an eine bestimmte Transaktion gebunden. Daher können Sie keine Befehle ausführen oder Cursor außerhalb einer Transaktion öffnen. Transaktionen haben eine klar definierte Lebensdauer, sodass der Versuch, eine Transaktion nach ihrem Abschluss zu verwenden, Ausnahmen auslöst. Außerdem werden Transaktionen automatisch abgeschlossen, wenn keine neuen Anfragen mehr gestellt werden, während die Transaktion aktiv ist.

  Dieses Transaktionsmodell ist sehr nützlich, wenn man bedenkt, was passieren könnte, wenn ein Benutzer zwei Instanzen Ihrer Webanwendung gleichzeitig in zwei verschiedenen Tabs öffnet. Ohne transaktionale Operationen könnten die beiden Instanzen gegenseitig die Änderungen beeinflussen. Wenn Sie mit Transaktionen in einer Datenbank nicht vertraut sind, lesen Sie den [Wikipedia-Artikel zu Transaktionen](https://en.wikipedia.org/wiki/Database_transaction). Siehe auch [Transaktion](#transaktion) im Abschnitt Begriffsdefinitionen.

- **Die IndexedDB-API ist größtenteils asynchron.** Die API liefert Ihnen keine Daten, indem sie Werte zurückgibt; stattdessen müssen Sie eine Callback-Funktion übergeben. Sie "speichern" nicht einfach einen Wert in der Datenbank oder "rufen" einen Wert über synchrone Mittel ab. Stattdessen "fordern" Sie an, dass eine Datenbankoperation stattfindet. Sie werden durch ein DOM-Ereignis benachrichtigt, wenn der Vorgang abgeschlossen ist, und die Art des Ereignisses teilt Ihnen mit, ob der Vorgang erfolgreich war oder fehlgeschlagen ist.
- **IndexedDB verwendet viele Anfragen.** Anfragen sind Objekte, die die vorher erwähnten Erfolgs- oder Fehler-DOM-Ereignisse erhalten. Sie haben `onsuccess`- und `onerror`-Eigenschaften, und Sie können `addEventListener()` und `removeEventListener()` an ihnen aufrufen. Sie haben auch die Eigenschaften `readyState`, `result` und `errorCode`, die Ihnen den Status der Anfrage mitteilen. Die `result`-Eigenschaft ist besonders magisch, da sie viele verschiedene Dinge sein kann, abhängig davon, wie die Anfrage generiert wurde (zum Beispiel eine `IDBCursor`-Instanz oder der Schlüssel für einen Wert, den Sie gerade in die Datenbank eingefügt haben).
- **IndexedDB verwendet DOM-Ereignisse, um Sie zu benachrichtigen, wenn Ergebnisse verfügbar sind.** DOM-Ereignisse haben immer eine `type`-Eigenschaft (in IndexedDB ist sie meist auf `"success"` oder `"error"` gesetzt). DOM-Ereignisse haben auch eine `target`-Eigenschaft, die anzeigt, wohin das Ereignis geleitet wird. In den meisten Fällen ist das `target` eines Ereignisses das `IDBRequest`-Objekt, das als Ergebnis einer Datenbankoperation generiert wurde. Erfolgsereignisse werden nicht nach oben weitergeleitet und können nicht abgebrochen werden. Fehlerereignisse hingegen werden weitergeleitet und können abgebrochen werden. Dies ist ziemlich wichtig, da Fehlerereignisse alle Transaktionen, in denen sie ablaufen, abbrechen, es sei denn, sie werden abgebrochen.
- **IndexedDB ist objektorientiert.** IndexedDB ist keine relationale Datenbank mit Tabellen, die Sammlungen von Zeilen und Spalten darstellen. Dieser wichtige und fundamentale Unterschied beeinflusst die Art und Weise, wie Sie Ihre Anwendungen entwerfen und erstellen.

  In einem traditionellen relationalen Datenspeicher hätten Sie eine Tabelle, die eine Sammlung von Datenzeilen und Datenspalten mit benannten Typen speichert. Bei IndexedDB müssen Sie hingegen einen Objektstore für eine Art von Daten erstellen und JavaScript-Objekte in diesem Store speichern. Jeder Objektstore kann eine Sammlung von Indizes haben, die es effizient macht, Anfragen zu stellen und zu iterieren. Wenn Sie mit objektdatenbankbasierten Verwaltungssystemen nicht vertraut sind, lesen Sie den [Wikipedia-Artikel zur Objektdatenbank](https://en.wikipedia.org/wiki/Object_database).

- **IndexedDB verwendet keine Structured Query Language (SQL).** Es verwendet Abfragen auf einem Index, der einen Cursor erzeugt, den Sie verwenden, um über das Ergebnisset zu iterieren. Wenn Sie mit NoSQL-Systemen nicht vertraut sind, lesen Sie den [Wikipedia-Artikel zu NoSQL](https://en.wikipedia.org/wiki/NoSQL).
- **IndexedDB hält sich an eine Same-Origin-Policy.** Ein Origin ist die Domain, das Anwendungsprotokoll und der Port einer URL des Dokuments, in dem das Skript ausgeführt wird. Jedes Origin hat seinen eigenen zugeordneten Satz von Datenbanken. Jede Datenbank hat einen Namen, der sie innerhalb eines Origins identifiziert.

  Die Sicherheitsgrenze, die auf IndexedDB auferlegt wird, verhindert, dass Anwendungen auf Daten mit einem anderen Origin zugreifen können. Zum Beispiel kann eine Anwendung oder eine Seite unter `http://www.example.com/app/` Daten aus `http://www.example.com/dir/` abrufen, da sie den gleichen Origin haben, jedoch keine Daten aus `http://www.example.com:8080/dir/` (anderer Port) oder `https://www.example.com/dir/` (anderes Protokoll), da sie unterschiedliche Origins haben.

  > [!NOTE]
  > Inhalte von Drittanbieter-Fenstern (z.B. {{htmlelement("iframe")}}-Inhalte) können auf den IndexedDB-Store für den Origin zugreifen, in den sie eingebettet sind, es sei denn, der Browser ist so eingestellt, dass er [niemals Cookies von Drittanbietern akzeptiert](https://support.mozilla.org/en-US/kb/third-party-cookies-firefox-tracking-protection) (siehe [Firefox-Bug 1147821](https://bugzil.la/1147821).)

### Einschränkungen

IndexedDB ist so konzipiert, dass es die meisten Fälle abdeckt, die eine clientseitige Speicherung erfordern. Es ist jedoch nicht für einige wenige Fälle wie die folgenden ausgelegt:

- Internationalisierte Sortierung. Nicht alle Sprachen sortieren Zeichenfolgen auf die gleiche Weise, daher wird die internationalisierte Sortierung nicht unterstützt. Während die Datenbank Daten nicht in einer bestimmten internationalisierten Reihenfolge speichern kann, können Sie die Daten, die Sie aus der Datenbank gelesen haben, selbst sortieren.
- Synchronisierung. Die API ist nicht dafür ausgelegt, die Synchronisierung mit einer serverseitigen Datenbank zu übernehmen. Sie müssen Code schreiben, der eine clientseitige IndexedDB-Datenbank mit einer serverseitigen Datenbank synchronisiert.
- Volltextsuche. Die API verfügt nicht über ein Äquivalent zum `LIKE`-Operator in SQL.

Außerdem ist zu beachten, dass Browser die Datenbank löschen können, z.B. unter folgenden Bedingungen:

- Der Benutzer fordert eine Löschung an. Viele Browser haben Einstellungen, die es Benutzern ermöglichen, alle für eine bestimmte Website gespeicherten Daten zu löschen, einschließlich Cookies, Lesezeichen, gespeicherter Passwörter und IndexedDB-Daten.
- Der Browser befindet sich im privaten Modus. Einige Browser haben "Privates Surfen" (Firefox) oder "Inkognito" (Chrome) Modi. Am Ende der Sitzung löscht der Browser die Datenbank.
- Das Festplatten- oder Quotenlimit wurde erreicht.
- Die Daten sind beschädigt.
- Eine inkompatible Änderung wird an der Funktion vorgenommen.

Die genauen Umstände und Fähigkeiten der Browser ändern sich im Laufe der Zeit, aber die allgemeine Philosophie der Browser-Anbieter ist es, sich bestmöglich um die Aufbewahrung der Daten zu bemühen, wenn möglich.

## Grundlegende Terminologie

Dieser Abschnitt definiert und erklärt die grundlegende Terminologie, die für das Verständnis der IndexedDB-API relevant ist.

### Datenbank

#### Datenbank

Ein Informationsspeicher, der typischerweise aus einem oder mehreren [_Objektstores_](#objektstore) besteht. Jede Datenbank muss Folgendes haben:

- Name. Dieser identifiziert die Datenbank innerhalb eines bestimmten Origins und bleibt während ihrer gesamten Lebensdauer konstant. Der Name kann ein beliebiger Zeichenfolgenwert sein (einschließlich einer leeren Zeichenfolge).
- Aktuelle [_Version_](#version). Wenn eine Datenbank zum ersten Mal erstellt wird, ist ihre Version die ganze Zahl 1, wenn nicht anders angegeben. Jede Datenbank kann zu einem bestimmten Zeitpunkt nur eine Version haben.

#### Datenbankverbindung

Eine Operation, die durch das Öffnen einer _[Datenbank](#datenbank)_ erstellt wird. Eine gegebene Datenbank kann mehrere Verbindungen gleichzeitig haben.

#### dauerhaft

In Firefox war IndexedDB früher **dauerhaft**, was bedeutete, dass in einer Lese-/Schreib-Transaktion ein {{domxref("IDBTransaction.complete_event", "complete")}}-Ereignis nur dann ausgelöst wurde, wenn alle Daten garantiert auf die Festplatte geschrieben wurden.

Seit Firefox 40 haben IndexedDB-Transaktionen entspannte Haltbarkeitsgarantien, um die Leistung zu verbessern (siehe [Firefox-Bug 1112702](https://bugzil.la/1112702)), was das gleiche Verhalten wie bei anderen Browsern mit IndexedDB-Unterstützung ist. In diesem Fall wird das {{domxref("IDBTransaction.complete_event", "complete")}}-Ereignis ausgelöst, nachdem dem Betriebssystem mitgeteilt wurde, die Daten zu schreiben, aber möglicherweise bevor diese Daten tatsächlich auf die Festplatte geschrieben wurden. Das Ereignis kann daher schneller als zuvor geliefert werden, jedoch besteht ein geringes Risiko, dass die gesamte Transaktion verloren geht, wenn das Betriebssystem abstürzt oder es zu einem Stromausfall kommt, bevor die Daten auf die Festplatte geschrieben wurden. Da solche katastrophalen Ereignisse selten sind, sollten sich die meisten Verbraucher nicht weiter darum kümmern müssen.

> [!NOTE]
> In Firefox, falls Sie aus irgendeinem Grund Haltbarkeit sicherstellen möchten (z.B. wenn Sie kritische Daten speichern, die nicht später rekonstruiert werden können), können Sie eine Transaktion erstellen und sie vor der Auslieferung des `complete`-Events auf die Festplatte schreiben lassen, indem Sie eine Transaktion im experimentellen (nicht standardmäßigen) `readwriteflush`-Modus erstellen (siehe {{domxref("IDBDatabase.transaction")}}.) Dieser Modus ist derzeit experimentell und kann nur verwendet werden, wenn die `dom.indexedDB.experimental`-Einstellung in `about:config` auf `true` gesetzt ist.

#### Index

Ein Index ist ein spezialisiertes Objektstore für die Suche nach Datensätzen in einem anderen Objektstore, dem _referenzierten Objektstore_. Der Index ist ein dauerhaftes Schlüssel-Wert-Speicher, bei dem der Wertteil seiner Datensätze der Schlüsselteil eines Datensatzes im referenzierten Objektstore ist. Die Datensätze in einem Index werden automatisch gefüllt, wann immer Datensätze im referenzierten Objektstore eingefügt, aktualisiert oder gelöscht werden. Jeder Datensatz in einem Index kann nur auf einen Datensatz in seinem referenzierten Objektstore zeigen, aber mehrere Indizes können auf denselben Objektstore verweisen. Wenn sich der Objektstore ändert, werden alle Indizes, die auf den Objektstore verweisen, automatisch aktualisiert.

Alternativ können Sie auch Datensätze in einem Objektstore über den [Schlüssel](#schlüssel) nachschlagen.

Um mehr über die Verwendung von Indizes zu erfahren, siehe [Verwendung von IndexedDB](/de/docs/Web/API/IndexedDB_API/Using_IndexedDB#using_an_index). Für die Referenzdokumentation zu Indizes siehe [IDBKeyRange](/de/docs/Web/API/IDBKeyRange).

#### Objektstore

Der Mechanismus, durch den Daten in der Datenbank gespeichert werden. Der Objektstore hält dauerhaft Datensätze, die Schlüssel-Wert-Paare sind. Datensätze innerhalb eines Objektstores sind entsprechend den _[Schlüsseln](#schlüssel)_ in aufsteigender Reihenfolge sortiert.

Jeder Objektstore muss einen Namen haben, der innerhalb seiner Datenbank eindeutig ist. Der Objektstore kann optional einen _[Schlüsselerzeuger](#schlüsselerzeuger)_ und einen _[Schlüsselpfad](#schlüsselpfad)_ haben. Wenn der Objektstore einen Schlüsselpfad hat, verwendet er _[Inline-Schlüssel](#inline-schlüssel)_; ansonsten verwendet er _[Out-of-line-Schlüssel](#out-of-line-schlüssel)_.

Für die Referenzdokumentation zum Objektstore siehe {{domxref("IDBObjectStore")}}.

#### Anfrage

Die Operation, durch die das Lesen und Schreiben in einer Datenbank durchgeführt wird. Jede Anfrage stellt einen Lese- oder Schreibvorgang dar.

#### Transaktion

Ein atomarer Satz von Datenzugriffs- und Datenänderungsoperationen in einer bestimmten Datenbank. Es ist die Art und Weise, wie Sie mit den Daten in einer Datenbank interagieren. Tatsächlich muss jedes Lesen oder Ändern von Daten in der Datenbank in einer Transaktion erfolgen.

Eine Datenbankverbindung kann mehrere aktive Transaktionen gleichzeitig haben, solange die schreibenden Transaktionen keine sich überschneidenden [_Bereiche_](#umfang) haben. Der Bereich von Transaktionen, der bei der Erstellung definiert wird, bestimmt, mit welchen Objektstores die Transaktion interagieren kann und bleibt während der gesamten Lebensdauer der Transaktion konstant. Wenn zum Beispiel eine Datenbankverbindung bereits eine schreibende Transaktion mit einem Bereich hat, der nur den `flyingMonkey`-Objektstore umfasst, können Sie eine zweite Transaktion mit einem Bereich der `unicornCentaur`- und `unicornPegasus`-Objektstores starten. Bei Lesetransaktionen können Sie mehrere davon gleichzeitig haben – sogar sich überschneidende.

Erwartungsgemäß sind Transaktionen kurzlebig, sodass der Browser eine Transaktion, die zu lange dauert, beenden kann, um Speicherressourcen freizugeben, die die lang laufende Transaktion gesperrt hat. Sie können die Transaktion abbrechen, was die in der Transaktion an der Datenbank vorgenommenen Änderungen zurückrollt. Und Sie müssen nicht einmal warten, bis die Transaktion gestartet oder aktiv ist, um sie abzubrechen.

Die drei Transaktionsmodi sind: `readwrite`, `readonly` und `versionchange`. Der einzige Weg, um Objektstores und Indizes zu erstellen und zu löschen, ist die Verwendung einer [`versionchange`](/de/docs/Web/API/IDBDatabase/versionchange_event)-Transaktion. Um mehr über Transaktionstypen zu erfahren, siehe den Referenzartikel für [IndexedDB](/de/docs/Web/API/IndexedDB_API).

Da alles innerhalb einer Transaktion geschieht, ist es ein sehr wichtiges Konzept in IndexedDB. Um mehr über Transaktionen zu erfahren, insbesondere darüber, wie sie sich auf das Versionieren beziehen, siehe {{domxref("IDBTransaction")}}, welches auch Referenzdokumentation enthält.

#### Version

Wenn eine Datenbank zum ersten Mal erstellt wird, ist ihre Version die ganze Zahl 1. Jede Datenbank hat zu einem Zeitpunkt nur eine Version; eine Datenbank kann nicht gleichzeitig in mehreren Versionen existieren. Der einzige Weg, um die Version zu ändern, besteht darin, sie mit einer höheren Version als der aktuellen zu öffnen.

### Schlüssel und Wert

#### Inline-Schlüssel

Ein Schlüssel, der als Teil des gespeicherten Wertes gespeichert wird. Er wird mittels eines _Schlüsselpfads_ gefunden. Ein Inline-Schlüssel kann mit einem Generator erzeugt werden. Nachdem der Schlüssel erzeugt wurde, kann er dann im Wert using the key path gespeichert oder auch als Schlüssel verwendet werden.

#### Schlüssel

Ein Datenwert, anhand dessen gespeicherte Werte im Objektstore organisiert und abgerufen werden. Der Objektstore kann den Schlüssel aus einer von drei Quellen ableiten: einem _[Schlüsselerzeuger](#schlüsselerzeuger)_, einem _[Schlüsselpfad](#schlüsselpfad)_ oder einem explizit angegebenen Wert. Der Schlüssel muss einen Datentyp haben, der eine Zahl ist, die größer als die vorherige ist. Jeder Datensatz in einem Objektstore muss einen Schlüssel haben, der innerhalb desselben Speicherbereichs eindeutig ist, sodass Sie nicht mehrere Datensätze mit demselben Schlüssel in einem gegebenen Objektstore haben können.

Ein Schlüssel kann eine der folgenden Typen sein: [string](/de/docs/Web/JavaScript/Reference/Global_Objects/String), [date](/de/docs/Web/JavaScript/Reference/Global_Objects/Date), float, ein binäres Blob und [array](/de/docs/Web/JavaScript/Reference/Global_Objects/Array). Bei Arrays kann der Schlüssel von einem leeren Wert bis unendlich reichen. Und Sie können ein Array innerhalb eines Arrays einfügen.

Alternativ können Sie auch Datensätze in einem Objektstore über den _[Index](#index)_ nachschlagen.

#### Schlüsselerzeuger

Ein Mechanismus zur Erzeugung neuer Schlüssel in einer geordneten Sequenz. Wenn ein Objektstore keinen Schlüsselerzeuger hat, muss die Anwendung Schlüssel für die zu speichernden Datensätze bereitstellen. Erzeuger werden nicht zwischen den Stores geteilt. Dies ist mehr ein Detail der Browserimplementierung, denn in der Webentwicklung erstellen oder greifen Sie nicht wirklich auf Schlüsselerzeuger zu.

#### Schlüsselpfad

Definiert, wo der Browser den Schlüssel im Objektstore oder Index extrahieren soll. Ein gültiger Schlüsselpfad kann eines der folgenden enthalten: eine leere Zeichenfolge, ein JavaScript-Bezeichner oder mehrere JavaScript-Bezeichner, getrennt durch Punkte oder ein Array, das einen dieser enthält. Es kann keine Leerzeichen enthalten.

#### Out-of-line-Schlüssel

Ein Schlüssel, der separat von dem gespeicherten Wert gespeichert wird.

#### Wert

Jeder Datensatz hat einen Wert, der alles beinhalten könnte, was in JavaScript ausgedrückt werden kann, einschließlich [boolean](/de/docs/Web/JavaScript/Reference/Global_Objects/Boolean), [number](/de/docs/Web/JavaScript/Reference/Global_Objects/Number), [string](/de/docs/Web/JavaScript/Reference/Global_Objects/String), [date](/de/docs/Web/JavaScript/Reference/Global_Objects/Date), [object](/de/docs/Web/JavaScript/Reference/Global_Objects/Object), [array](/de/docs/Web/JavaScript/Reference/Global_Objects/Array), [regexp](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp), [undefined](/de/docs/Web/JavaScript/Reference/Global_Objects/undefined) und null sein kann.

Wenn ein Objekt oder ein Array gespeichert wird, können die Eigenschaften und Werte in diesem Objekt oder Array auch alles sein, was ein gültiger Wert ist.

[Blobs](/de/docs/Web/API/Blob) und Dateien können gespeichert werden, vgl. [Spezifikation](https://w3c.github.io/IndexedDB/).

### Bereich und Umfang

#### Cursor

Ein Mechanismus zum Iterieren über mehrere Datensätze mit einem _Schlüsselbereich_. Der Cursor hat eine Quelle, die angibt, welcher Index oder Objektstore durchlaufen wird. Er hat eine Position innerhalb des Bereichs und bewegt sich in einer Richtung, die in der Reihenfolge der Datensatzschlüssel ansteigt oder abnimmt. Für die Referenzdokumentation zu Cursors siehe {{domxref("IDBCursor")}}.

#### Schlüsselbereich

Ein kontinuierliches Intervall über einige für Schlüssel verwendete Datentypen. Datensätze können aus Objektstores und Indizes abgerufen werden, indem Schlüssel oder ein Bereich von Schlüsseln verwendet werden. Sie können den Bereich mit unteren und oberen Grenzen begrenzen oder filtern. Zum Beispiel können Sie über alle Werte eines Schlüssels zwischen x und y iterieren.

Für die Referenzdokumentation zum Schlüsselbereich siehe {{domxref("IDBKeyRange")}}.

#### Umfang

Die Menge der Objektstores und Indizes, auf die eine Transaktion angewendet wird. Die Umfänge von nur lesenden Transaktionen können sich überschneiden und gleichzeitig ausgeführt werden. Andererseits können sich die Umfänge von schreibenden Transaktionen nicht überschneiden. Sie können jedoch weiterhin mehrere Transaktionen mit demselben Umfang zur gleichen Zeit starten, aber sie werden einfach in eine Warteschlange gestellt und nacheinander ausgeführt.

## Nächste Schritte

Mit einem Verständnis der Schlüsselmerkmale und grundlegenden Terminologie von IndexedDB können wir uns konkreteren Themen widmen. Für ein Tutorial zur Verwendung der API siehe [Verwendung von IndexedDB](/de/docs/Web/API/IndexedDB_API/Using_IndexedDB).

## Siehe auch

- [Spezifikation der Indexed Database API](https://www.w3.org/TR/IndexedDB/)
- [IndexedDB-API-Referenz](/de/docs/Web/API/IndexedDB_API)
- [Verwendung von IndexedDB](/de/docs/Web/API/IndexedDB_API/Using_IndexedDB)
- [IndexedDB — Der Store in Ihrem Browser](<https://learn.microsoft.com/en-us/previous-versions/msdn10/gg679063(v=msdn.10)>)
