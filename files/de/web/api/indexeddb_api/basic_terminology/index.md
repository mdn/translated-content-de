---
title: Eigenschaften von IndexedDB und grundlegende Terminologie
slug: Web/API/IndexedDB_API/Basic_Terminology
l10n:
  sourceCommit: 77ea71add6054857698eb7ac1bfec8c7afe9ad4f
---

{{DefaultAPISidebar("IndexedDB")}}

Dieser Artikel beschreibt die Hauptmerkmale von IndexedDB und führt einige wesentliche Begriffe ein, die für das Verständnis der IndexedDB-API relevant sind.

Folgende Artikel könnten ebenfalls hilfreich sein:

- Für ein ausführliches Tutorial zur Nutzung der API siehe [Verwendung von IndexedDB](/de/docs/Web/API/IndexedDB_API/Using_IndexedDB).
- Für die Referenzdokumentation zur IndexedDB-API siehe den Hauptartikel [IndexedDB API](/de/docs/Web/API/IndexedDB_API) und dessen Unterseiten, die die von IndexedDB verwendeten Objekttypen dokumentieren.
- Für weitere Informationen darüber, wie der Browser Ihre Daten im Hintergrund speichert, lesen Sie [Browser-Speicherquoten und Löschkriterien](/de/docs/Web/API/Storage_API/Storage_quotas_and_eviction_criteria).

## Hauptmerkmale

IndexedDB bietet Ihnen die Möglichkeit, Daten dauerhaft im Browser eines Nutzers zu speichern. Da es ermöglicht, Webanwendungen mit umfangreichen Abfragefähigkeiten unabhängig von der Netzwerkverfügbarkeit zu erstellen, können diese Anwendungen sowohl online als auch offline funktionieren. IndexedDB ist nützlich für Anwendungen, die eine große Menge an Daten speichern (z. B. einen Katalog von DVDs in einer Leihbibliothek) und Anwendungen, die keine dauerhafte Internetverbindung benötigen, um zu funktionieren (z. B. E-Mail-Clients, Aufgabenlisten und Notizblöcke).

IndexedDB ermöglicht es Ihnen, Objekte zu speichern und abzurufen, die mit einem "Schlüssel" indexiert sind. Alle Änderungen, die Sie an der Datenbank vornehmen, geschehen innerhalb von Transaktionen. Wie die meisten Webspeicherlösungen folgt IndexedDB einer [Same-Origin-Policy](https://www.w3.org/Security/wiki/Same_Origin_Policy). Während Sie also auf gespeicherte Daten innerhalb einer Domain zugreifen können, können Sie nicht auf Daten über verschiedene Domains hinweg zugreifen.

Wenn Sie Annahmen aus der Arbeit mit anderen Datenbanktypen haben, könnten Sie beim Arbeiten mit IndexedDB auf Hindernisse stoßen. Daher sind die folgenden Hauptmerkmale von IndexedDB wichtig zu beachten:

- **IndexedDB-Datenbanken speichern Schlüssel-Wert-Paare.** Die Werte können komplexe strukturierte Objekte sein, und Schlüssel können Eigenschaften dieser Objekte sein. Sie können Indizes erstellen, die jede Eigenschaft der Objekte für schnelles Suchen sowie geordnete Aufzählung verwenden. Schlüssel können binäre Objekte sein.
- **IndexedDB basiert auf einem transaktionalen Datenbankmodell.** Alles, was Sie in IndexedDB tun, geschieht immer im Kontext einer [Transaktion](#transaktion). Die IndexedDB-API bietet viele Objekte, die Indizes, Tabellen, Cursor usw. repräsentieren, aber jedes dieser Objekte ist an eine bestimmte Transaktion gebunden. Daher können Sie außerhalb einer Transaktion keine Befehle ausführen oder Cursor öffnen. Transaktionen haben eine klar definierte Lebensdauer, sodass beim Versuch, eine Transaktion nach deren Abschluss zu verwenden, Ausnahmen geworfen werden. Auch werden Transaktionen automatisch übernommen, wenn keine neuen Anforderungen gestellt werden, während die Transaktion aktiv ist.

  Das Transaktionsmodell ist wirklich nützlich, wenn Sie bedenken, was passieren könnte, wenn ein Benutzer zwei Instanzen Ihrer Web-App gleichzeitig in zwei verschiedenen Tabs öffnet. Ohne transaktionale Operationen könnten die beiden Instanzen die Änderungen des jeweils anderen beeinträchtigen. Wenn Sie nicht mit Transaktionen in einer Datenbank vertraut sind, lesen Sie den [Wikipedia-Artikel über Transaktionen](https://en.wikipedia.org/wiki/Database_transaction). Siehe auch [Transaktion](#transaktion) im Definitionsabschnitt.

- **Die IndexedDB-API ist überwiegend asynchron.** Die API gibt Ihnen keine Daten durch Rückgabe von Werten; stattdessen müssen Sie eine Rückruffunktion übergeben. Sie "speichern" keinen Wert in der Datenbank oder "rufen" einen Wert durch synchrone Mittel aus der Datenbank ab. Stattdessen "fordern Sie an", dass eine Datenbankoperation stattfindet. Sie werden durch ein DOM-Ereignis benachrichtigt, wenn die Operation abgeschlossen ist, und die Art des Ereignisses lässt Sie wissen, ob die Operation erfolgreich war oder fehlgeschlagen ist.
- **IndexedDB verwendet viele Anforderungen.** Anfragen sind Objekte, die die zuvor erwähnten Erfolgs- oder Fehlschlag-DOM-Ereignisse empfangen. Sie haben Eigenschaften `onsuccess` und `onerror`, und Sie können `addEventListener()` und `removeEventListener()` auf sie aufrufen. Sie haben auch Eigenschaften `readyState`, `result` und `errorCode`, die Ihnen den Status der Anforderung mitteilen. Die Eigenschaft `result` ist besonders magisch, da sie je nach Erstellung der Anfrage viele verschiedene Dinge sein kann (zum Beispiel eine `IDBCursor`-Instanz oder der Schlüssel für einen Wert, den Sie gerade in die Datenbank eingefügt haben).
- **IndexedDB verwendet DOM-Ereignisse, um Sie zu benachrichtigen, wenn Ergebnisse verfügbar sind.** DOM-Ereignisse haben immer eine Eigenschaft `type` (in IndexedDB ist sie meist auf `"success"` oder `"error"` gesetzt). DOM-Ereignisse haben auch eine Eigenschaft `target`, die anzeigt, wohin das Ereignis geleitet wird. In den meisten Fällen ist das `target` eines Ereignisses das `IDBRequest`-Objekt, das als Ergebnis einer Datenbankoperation erstellt wurde. Erfolgsereignisse blubbern nicht auf und können nicht abgebrochen werden. Fehlerereignisse hingegen blubbern und können abgebrochen werden. Dies ist ziemlich wichtig, da Fehlerereignisse alle Transaktionen, in denen sie ausgeführt werden, abbrechen, es sei denn, sie werden abgebrochen.
- **IndexedDB ist objektorientiert.** IndexedDB ist keine relationale Datenbank mit Tabellen, die Sammlungen von Zeilen und Spalten darstellen. Dieser wichtige und grundlegende Unterschied beeinflusst die Art und Weise, wie Sie Ihre Anwendungen entwerfen und erstellen.

  In einem traditionellen relationalen Datenspeicher hätten Sie eine Tabelle, die eine Sammlung von Datenzeilen und Spalten mit benannten Datentypen speichert. Hingegen erfordert IndexedDB von Ihnen, einen Objektspeicher für einen Datentyp zu erstellen und JavaScript-Objekte in diesen Speicher zu persistieren. Jeder Objektspeicher kann eine Sammlung von Indizes haben, die das Abfragen und Durchlaufen effizient machen. Wenn Sie nicht mit objektorientierten Datenbanksystemen vertraut sind, lesen Sie den [Wikipedia-Artikel über Objektdatenbanken](https://en.wikipedia.org/wiki/Object_database).

- **IndexedDB verwendet keine strukturierte Abfragesprache (SQL).** Es verwendet Abfragen zu einem Index, die einen Cursor erzeugen, mit dem Sie über die Ergebnismenge iterieren. Wenn Sie mit NoSQL-Systemen nicht vertraut sind, lesen Sie den [Wikipedia-Artikel über NoSQL](https://en.wikipedia.org/wiki/NoSQL).

- **IndexedDB beachtet die Same-Origin-Policy.** Ein Origin ist die Domain, das Anwendungsprotokoll der Anwendungsschicht und der Port einer URL des Dokuments, in dem das Skript ausgeführt wird. Jedes Origin hat seinen eigenen zugeordneten Satz von Datenbanken. Jede Datenbank hat einen Namen, der sie innerhalb eines Origins identifiziert.

  Die von IndexedDB auferlegte Sicherheitsgrenze verhindert, dass Anwendungen auf Daten mit einem anderen Origin zugreifen. So kann beispielsweise eine App oder eine Seite in `http://www.example.com/app/` Daten von `http://www.example.com/dir/` abrufen, da sie dasselbe Origin haben, aber sie kann keine Daten von `http://www.example.com:8080/dir/` (anderer Port) oder `https://www.example.com/dir/` (anderes Protokoll) abrufen, da sie unterschiedliche Origins haben.

  > [!NOTE]
  > Inhalte von Drittanbieterfenstern (z. B. {{htmlelement("iframe")}}-Inhalte) können auf den IndexedDB-Speicher für das übergeordnete Origin zugreifen, es sei denn, der Browser ist so eingestellt, dass er [nie Drittanbieter-Cookies akzeptiert](https://support.mozilla.org/en-US/kb/third-party-cookies-firefox-tracking-protection) (siehe [Firefox-Bug 1147821](https://bugzil.la/1147821).)

### Einschränkungen

IndexedDB wurde entwickelt, um die meisten Fälle abzudecken, die clientseitigen Speicher benötigen. Allerdings wurde es für einige Fälle nicht entworfen, wie zum Beispiel:

- Internationalisierte Sortierung. Nicht alle Sprachen sortieren Zeichenfolgen auf dieselbe Weise, daher wird die internationalisierte Sortierung nicht unterstützt. Während die Datenbank keine Daten in einer spezifischen internationalisierten Ordnung speichern kann, können Sie die Daten selbst sortieren, nachdem Sie sie aus der Datenbank gelesen haben.
- Synchronisierung. Die API ist nicht dafür konzipiert, die Synchronisierung mit einer serverseitigen Datenbank zu übernehmen. Sie müssen Code schreiben, der eine clientseitige IndexedDB-Datenbank mit einer serverseitigen Datenbank synchronisiert.
- Volltextsuche. Die API hat kein Äquivalent zum `LIKE`-Operator in SQL.

Zusätzlich sollten Sie sich bewusst sein, dass Browser die Datenbank unter folgenden Bedingungen löschen können:

- Der Nutzer fordert eine Löschung an. Viele Browser haben Einstellungen, die es Nutzern ermöglichen, alle für eine gegebene Website gespeicherten Daten zu löschen, einschließlich Cookies, Lesezeichen, gespeicherter Passwörter und IndexedDB-Daten.
- Der Browser ist im Privatmodus. Einige Browser haben "privates Surfen" (Firefox) oder "Inkognito" (Chrome) Modi. Am Ende der Sitzung löscht der Browser die Datenbank.
- Das Festplatten- oder Kontingentlimit ist erreicht.
- Die Daten sind beschädigt.
- Eine inkompatible Änderung wird am Feature vorgenommen.

Die genauen Umstände und Fähigkeiten der Browser ändern sich mit der Zeit, aber die allgemeine Philosophie der Browseranbieter ist der bestmögliche Versuch, die Daten soweit wie möglich zu bewahren.

## Kernterminologie

Dieser Abschnitt definiert und erklärt Kernbegriffe, die für das Verständnis der IndexedDB-API relevant sind.

### Datenbank

#### Datenbank

Ein Informationsspeicher, der typischerweise ein oder mehrere [_Objektspeicher_](#objektspeicher) umfasst. Jede Datenbank muss Folgendes haben:

- Name. Dieser identifiziert die Datenbank innerhalb eines bestimmten Origins und bleibt über ihre Lebensdauer hinweg konstant. Der Name kann jeder String-Wert sein (einschließlich eines leeren Strings).
- Aktuelle [_Version_](#version). Wenn eine Datenbank zum ersten Mal erstellt wird, ist ihre Version, wenn nicht anders angegeben, die Ganzzahl 1. Jede Datenbank kann jeweils nur eine Version haben.

#### Datenbankverbindung

Eine Operation, die durch das Öffnen einer _[Datenbank](#datenbank)_ erstellt wird. Eine gegebene Datenbank kann gleichzeitig mehrere Verbindungen haben.

#### dauerhaft

In Firefox war IndexedDB früher **dauerhaft**, was bedeutet, dass in einer `readwrite`-Transaktion ein [`complete`](/de/docs/Web/API/IDBTransaction/complete_event)-Ereignis nur ausgelöst wurde, wenn alle Daten garantiert auf die Festplatte geschrieben worden waren.

Mit Firefox 40 haben IndexedDB-Transaktionen entspannte Dauerhaftigkeitsgarantien zur Steigerung der Leistung (siehe [Firefox-Bug 1112702](https://bugzil.la/1112702)), was das gleiche Verhalten wie bei anderen browserunterstützten IndexedDB-Implementierungen ist. In diesem Fall wird das [`complete`](/de/docs/Web/API/IDBTransaction/complete_event)-Ereignis ausgelöst, nachdem das Betriebssystem angewiesen wurde, die Daten zu schreiben, jedoch möglicherweise bevor diese Daten tatsächlich auf die Festplatte geschrieben wurden. Daher kann das Ereignis schneller als zuvor ausgeliefert werden, obwohl eine geringe Chance besteht, dass die gesamte Transaktion verloren geht, wenn das Betriebssystem abstürzt oder die Systemleistung ausfällt, bevor die Daten tatsächlich auf die Festplatte geschrieben wurden. Da solche katastrophalen Ereignisse selten sind, sollte sich der Großteil der Nutzer darüber keine weiteren Gedanken machen müssen.

> [!NOTE]
> In Firefox können Sie, wenn Sie aus irgendeinem Grund Dauerhaftigkeit sicherstellen möchten (z. B. weil Sie kritische Daten speichern, die später nicht neu berechnet werden können), eine Transaktion erzwingen, bevor die `complete`-Ereignisbenachrichtigung erfolgt, indem Sie eine Transaktion im experimentellen (nicht standardisierten) `readwriteflush`-Modus erstellen (siehe [`IDBDatabase.transaction`](/de/docs/Web/API/IDBDatabase/transaction).) Dies ist derzeit experimentell und kann nur verwendet werden, wenn die Einstellung `dom.indexedDB.experimental` in `about:config` auf `true` gesetzt ist.

#### Index

Ein Index ist ein spezialisierter Objektspeicher zum Nachschlagen von Datensätzen in einem anderen Objektspeicher, dem _referenzierten Objektspeicher_. Der Index ist ein persistenten Schlüssel-Wert-Speicher, in dem der Wertteil seiner Datensätze der Schlüsselteil eines Datensatzes im referenzierten Objektspeicher ist. Die Datensätze in einem Index werden automatisch ergänzt, wann immer Datensätze im referenzierten Objektspeicher eingefügt, aktualisiert oder gelöscht werden. Jeder Datensatz in einem Index kann nur auf einen Datensatz in seinem referenzierten Objektspeicher zeigen, aber mehrere Indizes können auf denselben Objektspeicher verweisen. Wenn sich der Objektspeicher ändert, werden alle Indizes, die den Objektspeicher referenzieren, automatisch aktualisiert.

Alternativ kann man auch Datensätze in einem Objektspeicher über den [Schlüssel](#schlüssel) nachschlagen.

Um mehr über die Verwendung von Indizes zu erfahren, siehe [Verwendung von IndexedDB](/de/docs/Web/API/IndexedDB_API/Using_IndexedDB#using_an_index). Für die Referenzdokumentation zum Index siehe [IDBKeyRange](/de/docs/Web/API/IDBKeyRange).

#### Objektspeicher

Der Mechanismus, durch den Daten in der Datenbank gespeichert werden. Der Objektspeicher hält dauerhaft Datensätze, die Schlüssel-Wert-Paare sind. Datensätze innerhalb eines Objektspeichers sind gemäß der _[Schlüssel](#schlüssel)_ in aufsteigender Reihenfolge sortiert.

Jeder Objektspeicher muss einen Namen haben, der innerhalb seiner Datenbank einzigartig ist. Der Objektspeicher kann optional einen _[Schlüsselgenerator](#schlüsselgenerator)_ und einen _[Schlüsselpfad](#schlüsselpfad)_ haben. Wenn der Objektspeicher einen Schlüsselpfad hat, verwendet er _[inline-Schlüssel](#inline-schlüssel)_; andernfalls verwendet er _[out-of-line-Schlüssel](#out-of-line-schlüssel)_.

Für die Referenzdokumentation zum Objektspeicher, siehe [`IDBObjectStore`](/de/docs/Web/API/IDBObjectStore).

#### Anfrage

Die Operation, durch die Lese- und Schreibvorgänge in einer Datenbank durchgeführt werden. Jede Anfrage repräsentiert einen Lese- oder Schreibvorgang.

#### Transaktion

Ein atomarer Satz von Datenzugriffs- und Datenänderungsoperationen auf eine bestimmte Datenbank. Es ist die Art und Weise, wie Sie mit den Daten in einer Datenbank interagieren. Tatsächlich muss jegliches Lesen oder Ändern von Daten in der Datenbank in einer Transaktion erfolgen.

Eine Datenbankverbindung kann gleichzeitig mehrere aktive Transaktionen haben, solange die Schreibtransaktionen keine überlappenden [_Bereiche_](#geltungsbereich) haben. Der Bereich von Transaktionen, der bei der Erstellung definiert wird, bestimmt, mit welchen Objektspeichern die Transaktion interagieren kann und bleibt über die Lebensdauer der Transaktion unverändert. Wenn eine Datenbankverbindung also bereits eine Schreibtransaktion mit einem Bereich hat, der nur den `flyingMonkey`-Objektspeicher abdeckt, können Sie eine zweite Transaktion mit dem Bereich der `unicornCentaur`- und `unicornPegasus`-Objektspeicher starten. Bei Lesetransaktionen können Sie sogar mehrere überlappende haben.

Transaktionen sollen kurzlebig sein, sodass der Browser eine Transaktion, die zu lange dauert, beenden kann, um Speicherressourcen freizugeben, die durch die lang laufende Transaktion blockiert sind. Sie können die Transaktion abbrechen, wobei die im Rahmen der Transaktion an der Datenbank vorgenommenen Änderungen zurückgenommen werden. Sie müssen nicht einmal darauf warten, dass die Transaktion gestartet wird oder aktiv ist, um sie abzubrechen.

Die drei Modi von Transaktionen sind: `readwrite`, `readonly` und `versionchange`. Der einzige Weg, um Objektspeicher und Indizes zu erstellen und zu löschen, besteht darin, eine [`versionchange`](/de/docs/Web/API/IDBDatabase/versionchange_event)-Transaktion zu verwenden. Um mehr über die Transaktionsarten zu erfahren, siehe den Referenzartikel für [IndexedDB](/de/docs/Web/API/IndexedDB_API).

Da alles innerhalb einer Transaktion passiert, ist es ein sehr wichtiges Konzept in IndexedDB. Um mehr über Transaktionen zu erfahren, insbesondere darüber, wie sie sich auf die Versionierung beziehen, siehe [`IDBTransaction`](/de/docs/Web/API/IDBTransaction), das auch eine Referenzdokumentation enthält.

#### Version

Wenn eine Datenbank zum ersten Mal erstellt wird, ist ihre Version die Ganzzahl 1. Jede Datenbank hat zu einem Zeitpunkt nur eine Version; eine Datenbank kann nicht in mehreren Versionen gleichzeitig existieren. Der einzige Weg, die Version zu ändern, besteht darin, sie mit einer höheren Version als der aktuellen zu öffnen.

### Schlüssel und Wert

#### Inline-Schlüssel

Ein Schlüssel, der als Teil des gespeicherten Wertes gespeichert wird. Er wird mit einem _Schlüsselpfad_ gefunden. Ein Inline-Schlüssel kann mit einem Generator erzeugt werden. Nachdem der Schlüssel erstellt wurde, kann er im Wert mit dem Schlüsselpfad gespeichert werden oder auch als Schlüssel verwendet werden.

#### Schlüssel

Ein Datenwert, nach dem gespeicherte Werte im Objektspeicher organisiert und abgerufen werden. Der Objektspeicher kann den Schlüssel aus einer der drei Quellen ableiten: einem _[Schlüsselgenerator](#schlüsselgenerator)_, einem _[Schlüsselpfad](#schlüsselpfad)_ oder einem explizit angegebenen Wert. Der Schlüssel muss von einem Datentyp sein, der eine Zahl hat, die größer ist als der vorhergehende. Jeder Datensatz in einem Objektspeicher muss einen für denselben Speicher einzigartigen Schlüssel haben, sodass Sie keine mehrfachen Datensätze mit demselben Schlüssel in einem gegebenen Objektspeicher haben können.

Ein Schlüssel kann einer der folgenden Typen sein: [string](/de/docs/Web/JavaScript/Reference/Global_Objects/String), [date](/de/docs/Web/JavaScript/Reference/Global_Objects/Date), Gleitkommazahl, Binärdaten (dargestellt durch einen [`ArrayBuffer`](/de/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer) oder eine [`TypedArray`](/de/docs/Web/JavaScript/Reference/Global_Objects/TypedArray)-Ansicht wie eine [`Uint8Array`](/de/docs/Web/JavaScript/Reference/Global_Objects/Uint8Array)) und [array](/de/docs/Web/JavaScript/Reference/Global_Objects/Array). Die Länge eines Arrayschlüssels kann von `0` (ein leeres Array) bis unendlich reichen, und man kann ein Array innerhalb eines Arrays einfügen.

Alternativ kann man auch Datensätze in einem Objektspeicher über den _[Index](#index)._ nachschlagen.

#### Schlüsselgenerator

Ein Mechanismus zur Erzeugung neuer Schlüssel in einer geordneten Reihenfolge. Wenn ein Objektspeicher keinen Schlüsselgenerator hat, muss die Anwendung Schlüssel für die zu speichernden Datensätze angeben. Generatoren werden nicht zwischen Speichern geteilt. Dies ist mehr ein Implementierungsdetail des Browsers, denn in der Webentwicklung erstellt oder greift man nicht wirklich auf Schlüsselgeneratoren zu.

#### Schlüsselpfad

Definiert, wo der Browser den Schlüssel im Objektspeicher oder Index extrahieren soll. Ein gültiger Schlüsselpfad kann eines der folgenden enthalten: einen leeren String, ein JavaScript-Identifikator oder mehrere durch Punkte getrennte JavaScript-Identifikatoren oder ein Array, das eines davon enthält. Er darf keine Leerzeichen enthalten.

#### Out-of-line-Schlüssel

Ein Schlüssel, der getrennt vom gespeicherten Wert gespeichert wird.

#### Wert

Jeder Datensatz hat einen Wert, der alles beinhalten könnte, was in JavaScript ausgedrückt werden kann, einschließlich [boolean](/de/docs/Web/JavaScript/Reference/Global_Objects/Boolean), [number](/de/docs/Web/JavaScript/Reference/Global_Objects/Number), [string](/de/docs/Web/JavaScript/Reference/Global_Objects/String), [date](/de/docs/Web/JavaScript/Reference/Global_Objects/Date), [object](/de/docs/Web/JavaScript/Reference/Global_Objects/Object), [array](/de/docs/Web/JavaScript/Reference/Global_Objects/Array), [regexp](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp), [undefined](/de/docs/Web/JavaScript/Reference/Global_Objects/undefined) und null.

Wenn ein Objekt oder Array gespeichert wird, können die Eigenschaften und Werte in diesem Objekt oder Array auch alles sein, was ein gültiger Wert ist.

[Blobs](/de/docs/Web/API/Blob) und Dateien können gespeichert werden, siehe [Spezifikation](https://w3c.github.io/IndexedDB/).

### Bereich und Geltungsbereich

#### Cursor

Ein Mechanismus für das Durchlaufen mehrerer Datensätze mit einem _Schlüsselbereich_. Der Cursor hat eine Quelle, die angibt, welchen Index oder Objektspeicher er durchläuft. Er hat eine Position im Bereich und bewegt sich in eine Richtung, die in der Reihenfolge der Datensatzschlüssel zunimmt oder abnimmt. Für die Referenzdokumentation zu Cursorn siehe [`IDBCursor`](/de/docs/Web/API/IDBCursor).

#### Schlüsselbereich

Ein kontinuierliches Intervall über einen bestimmten Datentyp, der für Schlüssel verwendet wird. Datensätze können mit Schlüsseln oder einem Schlüsselbereich aus Objektspeichern und Indizes abgerufen werden. Sie können den Bereich mit unteren und oberen Grenzen limitieren oder filtern. Beispielsweise können Sie über alle Werte eines Schlüssels zwischen x und y iterieren.

Für die Referenzdokumentation zu Schlüsselbereichen siehe [`IDBKeyRange`](/de/docs/Web/API/IDBKeyRange).

#### Geltungsbereich

Der Satz von Objektspeichern und Indizes, auf den eine Transaktion angewendet wird. Die Geltungsbereiche von schreibgeschützten Transaktionen können sich überschneiden und gleichzeitig ausgeführt werden. Andererseits können sich die Geltungsbereiche von Schreibtransaktionen nicht überschneiden. Sie können immer noch mehrere Transaktionen mit demselben Geltungsbereich gleichzeitig starten, aber diese reihen sich einfach an und werden nacheinander ausgeführt.

## Nächste Schritte

Mit einem Verständnis der wichtigsten Merkmale und der Kernterminologie von IndexedDB in der Tasche können wir zu konkreteren Themen übergehen. Für ein Tutorial zur Verwendung der API siehe [Verwendung von IndexedDB](/de/docs/Web/API/IndexedDB_API/Using_IndexedDB).

## Siehe auch

- [Indexed Database API-Spezifikation](https://w3c.github.io/IndexedDB/)
- [IndexedDB API-Referenz](/de/docs/Web/API/IndexedDB_API)
- [Verwendung von IndexedDB](/de/docs/Web/API/IndexedDB_API/Using_IndexedDB)
- [IndexedDB — Der Speicher in Ihrem Browser](<https://learn.microsoft.com/en-us/previous-versions/msdn10/gg679063(v=msdn.10)>)
