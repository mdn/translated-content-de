---
title: Wichtige Merkmale und grundlegende Terminologie von IndexedDB
slug: Web/API/IndexedDB_API/Basic_Terminology
l10n:
  sourceCommit: f4c14731a1a157fc8d8f7357ac4d74d14a7d7fb5
---

{{DefaultAPISidebar("IndexedDB")}}

Dieser Artikel beschreibt die wichtigsten Merkmale von IndexedDB und führt einige grundlegende Begriffe ein, die relevant sind, um die IndexedDB-API zu verstehen.

Folgende Artikel sind ebenfalls nützlich:

- Für ein detailliertes Tutorial zur Nutzung der API, siehe [Verwendung von IndexedDB](/de/docs/Web/API/IndexedDB_API/Using_IndexedDB).
- Für die Referenzdokumentation zur IndexedDB-API, siehe den Hauptartikel [IndexedDB-API](/de/docs/Web/API/IndexedDB_API) und dessen Unterseiten, die die von IndexedDB verwendeten Objekttypen dokumentieren.
- Für weitere Informationen darüber, wie der Browser Ihre Daten im Hintergrund speichert, lesen Sie [Browser-Speicherquoten und Aussonderungskriterien](/de/docs/Web/API/Storage_API/Storage_quotas_and_eviction_criteria).

## Wichtige Merkmale

IndexedDB ist eine Möglichkeit, Daten dauerhaft im Browser eines Benutzers zu speichern. Da es Ihnen ermöglicht, Webanwendungen mit umfangreichen Abfragefähigkeiten zu erstellen, unabhängig von der Netzwerkverfügbarkeit, können diese Anwendungen sowohl online als auch offline funktionieren. IndexedDB ist nützlich für Anwendungen, die eine große Menge an Daten speichern (z. B. ein Katalog von DVDs in einer Leihbibliothek) und Anwendungen, die keine dauerhafte Internetverbindung benötigen (z. B. E-Mail-Clients, To-Do-Listen und Notizblöcke).

IndexedDB ermöglicht es Ihnen, Objekte zu speichern und abzurufen, die mit einem "Schlüssel" indexiert sind. Alle Änderungen, die Sie an der Datenbank vornehmen, erfolgen innerhalb von Transaktionen. Wie die meisten Webspeicherlösungen folgt IndexedDB einer [same-origin policy](https://www.w3.org/Security/wiki/Same_Origin_Policy). So können Sie zwar auf gespeicherte Daten innerhalb einer Domäne zugreifen, jedoch nicht auf Daten aus verschiedenen Domänen.

Wenn Sie Annahmen aus der Arbeit mit anderen Arten von Datenbanken haben, könnten Sie bei der Arbeit mit IndexedDB verwirrt werden. Daher sind die folgenden wesentlichen Merkmale von IndexedDB wichtig, um sie im Hinterkopf zu behalten:

- **IndexedDB-Datenbanken speichern Schlüssel-Wert-Paare.** Die Werte können komplexe strukturierte Objekte sein, und Schlüssel können Eigenschaften dieser Objekte sein. Sie können Indizes erstellen, die jede Eigenschaft der Objekte für schnelles Suchen und sortierte Aufzählung verwenden. Schlüssel können binäre Objekte sein.
- **IndexedDB basiert auf einem transaktionalen Datenbankmodell.** Alles, was Sie in IndexedDB tun, geschieht immer im Kontext einer [Transaktion](#transaktion). Die IndexedDB-API bietet viele Objekte, die Indizes, Tabellen, Cursor usw. darstellen, aber jedes davon ist an eine bestimmte Transaktion gebunden. Daher können Sie keine Befehle ausführen oder Cursor außerhalb einer Transaktion öffnen. Transaktionen haben eine klar definierte Lebensdauer, sodass der Versuch, eine Transaktion zu verwenden, nachdem sie abgeschlossen ist, Ausnahmen auslöst. Außerdem werden Transaktionen automatisch festgeschrieben, wenn keine neuen Anfragen gestellt werden, während die Transaktion aktiv ist.

  Dieses Transaktionsmodell ist wirklich nützlich, wenn Sie berücksichtigen, was passieren könnte, wenn ein Benutzer zwei Instanzen Ihrer Webanwendung gleichzeitig in zwei verschiedenen Registerkarten öffnet. Ohne transaktionale Operationen könnten die beiden Instanzen sich gegenseitig bei ihren Änderungen stören. Wenn Sie mit Transaktionen in einer Datenbank nicht vertraut sind, lesen Sie den [Wikipedia-Artikel über Transaktionen](https://en.wikipedia.org/wiki/Database_transaction). Siehe auch [transaction](#transaktion) im Definitionsabschnitt.

- **Die IndexedDB-API ist größtenteils asynchron.** Die API gibt Ihnen keine Daten zurück, indem Werte zurückgegeben werden; stattdessen müssen Sie eine Callback-Funktion übergeben. Sie "speichern" keinen Wert in der Datenbank oder "rufen" einen Wert aus der Datenbank auf synchronem Wege ab. Stattdessen "fordern" Sie an, dass eine Datenbankoperation durchgeführt wird. Sie werden durch ein DOM-Ereignis benachrichtigt, wenn die Operation beendet ist, und die Art des Ereignisses informiert Sie darüber, ob die Operation erfolgreich war oder fehlgeschlagen ist.
- **IndexedDB verwendet viele Anfragen.** Anfragen sind Objekte, die die zuvor erwähnten Erfolgs- oder Fehler-DOM-Ereignisse erhalten. Sie haben `onsuccess`- und `onerror`-Eigenschaften, und Sie können `addEventListener()` und `removeEventListener()` auf ihnen aufrufen. Sie haben auch `readyState`-, `result`- und `errorCode`-Eigenschaften, die Ihnen den Status der Anfrage mitteilen. Die `result`-Eigenschaft ist besonders bemerkenswert, da sie viele verschiedene Dinge sein kann, abhängig davon, wie die Anfrage erzeugt wurde (z. B. eine `IDBCursor`-Instanz oder der Schlüssel für einen Wert, den Sie gerade in die Datenbank eingefügt haben).
- **IndexedDB verwendet DOM-Ereignisse, um Sie zu benachrichtigen, wenn Ergebnisse verfügbar sind.** DOM-Ereignisse haben immer eine `type`-Eigenschaft (bei IndexedDB wird sie meist auf `"success"` oder `"error"` gesetzt). DOM-Ereignisse haben auch eine `target`-Eigenschaft, die angibt, wohin das Ereignis geleitet wird. In den meisten Fällen ist das `target` eines Ereignisses das `IDBRequest`-Objekt, das als Ergebnis einer Datenbankoperation erzeugt wurde. Erfolgsereignisse steigen nicht auf und können nicht abgebrochen werden. Fehlerereignisse hingegen steigen auf und können abgebrochen werden. Dies ist ziemlich wichtig, da Fehlerereignisse alle Transaktionen, in denen sie ausgeführt werden, abbrechen, es sei denn, sie werden abgebrochen.
- **IndexedDB ist objektorientiert.** IndexedDB ist keine relationale Datenbank mit Tabellen, die Sammlungen von Zeilen und Spalten darstellen. Dieser wichtige und grundlegende Unterschied beeinflusst die Art und Weise, wie Sie Ihre Anwendungen entwerfen und entwickeln.

  In einem traditionellen relationalen Datenträger hätten Sie eine Tabelle, die eine Sammlung von Datenzeilen und Spalten von benannten Datentypen speichert. IndexedDB hingegen erfordert, dass Sie einen Objektspeicher für einen Datentyp erstellen und JavaScript-Objekte in diesem Speicher speichern. Jeder Objektspeicher kann eine Sammlung von Indizes enthalten, die es effizient machen, Abfragen zu stellen und zu iterieren. Wenn Sie mit objektorientierten Datenbankverwaltungssystemen nicht vertraut sind, lesen Sie den [Wikipedia-Artikel über Objektdatenbanken](https://en.wikipedia.org/wiki/Object_database).

- **IndexedDB verwendet keine Structured Query Language (SQL).** Es verwendet Abfragen für einen Index, der einen Cursor erzeugt, den Sie verwenden, um über das Ergebnisset zu iterieren. Wenn Sie mit NoSQL-Systemen nicht vertraut sind, lesen Sie den [Wikipedia-Artikel über NoSQL](https://en.wikipedia.org/wiki/NoSQL).
- **IndexedDB hält sich an eine Same-Origin-Policy.** Ein Ursprung ist die Domäne, das Anwendungsprotokoll und der Port einer URL des Dokuments, in dem das Skript ausgeführt wird. Jeder Ursprung hat seine eigene zugewiesene Datenbankensammlung. Jede Datenbank hat einen Namen, der sie innerhalb eines Ursprungs identifiziert.

  Die Sicherheitsgrenze, die auf IndexedDB auferlegt wird, verhindert, dass Anwendungen auf Daten mit einem anderen Ursprung zugreifen. Zum Beispiel kann eine App oder eine Seite in `http://www.example.com/app/` Daten von `http://www.example.com/dir/` abrufen, da sie denselben Ursprung haben, aber sie kann keine Daten von `http://www.example.com:8080/dir/` (anderer Port) oder `https://www.example.com/dir/` (anderes Protokoll) abrufen, da sie unterschiedliche Ursprünge haben.

  > [!NOTE]
  > Dritte Fensterinhalte (z. B. {{htmlelement("iframe")}}-Inhalte) können auf den IndexedDB-Speicher für den Ursprung zugreifen, in den sie eingebettet sind, es sei denn, der Browser ist so eingestellt, dass er [niemals Drittanbieter-Cookies akzeptiert](https://support.mozilla.org/en-US/kb/third-party-cookies-firefox-tracking-protection) (siehe [Firefox-Fehler 1147821](https://bugzil.la/1147821).)

### Einschränkungen

IndexedDB ist so konzipiert, dass es die meisten Fälle abdeckt, die clientseitigen Speicher benötigen. Es ist jedoch nicht für einige Fälle gedacht, wie die folgenden:

- Internationalisierte Sortierung. Nicht alle Sprachen sortieren Zeichenfolgen auf die gleiche Weise, daher wird eine internationalisierte Sortierung nicht unterstützt. Während die Datenbank Daten nicht in einer bestimmten internationalisierten Reihenfolge speichern kann, können Sie die Daten, die Sie aus der Datenbank gelesen haben, selbst sortieren.
- Synchronisierung. Die API ist nicht dafür ausgelegt, die Synchronisierung mit einer serverseitigen Datenbank zu übernehmen. Sie müssen Code schreiben, um eine Client-seitige indexedDB-Datenbank mit einer serverseitigen Datenbank zu synchronisieren.
- Volltextsuche. Die API hat kein Äquivalent zum `LIKE`-Operator in SQL.

Außerdem sollten Sie sich bewusst sein, dass Browser die Datenbank löschen können, wie in folgenden Fällen:

- Der Benutzer fordert eine Löschung an. Viele Browser haben Einstellungen, die es Benutzern ermöglichen, alle für eine bestimmte Website gespeicherten Daten zu löschen, einschließlich Cookies, Lesezeichen, gespeicherte Passwörter und IndexedDB-Daten.
- Der Browser befindet sich im privaten Browsing-Modus. Einige Browser haben einen "privaten Modus" (Firefox) oder einen "Inkognito-Modus" (Chrome). Am Ende der Sitzung löscht der Browser die Datenbank.
- Das Festplatten- oder Quotenkontingent wurde erreicht.
- Die Daten sind beschädigt.
- Eine inkompatible Änderung wird an der Funktion vorgenommen.

Die genauen Umstände und Browserfähigkeiten ändern sich im Laufe der Zeit, aber die allgemeine Philosophie der Browseranbieter ist, sich nach besten Kräften zu bemühen, die Daten so gut wie möglich zu erhalten.

## Kernterminologie

Dieser Abschnitt definiert und erklärt die Kernterminologie, die zum Verständnis der IndexedDB-API relevant ist.

### Datenbank

#### Datenbank

Ein Informationsspeicher, der typischerweise aus einem oder mehreren [_Objektspeichern_](#objektspeicher) besteht. Jede Datenbank muss Folgendes haben:

- Name. Dieser identifiziert die Datenbank innerhalb eines bestimmten Ursprungs und bleibt während ihrer gesamten Lebensdauer gleich. Der Name kann jeden Zeichenfolgenwert haben (einschließlich einer leeren Zeichenfolge).
- Aktuelle [_Version_](#version). Wenn eine Datenbank zum ersten Mal erstellt wird, ist ihre Version die Ganzzahl 1, sofern nicht anders angegeben. Jede Datenbank kann zu einem bestimmten Zeitpunkt nur eine Version haben.

#### Datenbankverbindung

Ein Vorgang, der durch das Öffnen einer _[Datenbank](#datenbank)_ erstellt wird. Eine gegebene Datenbank kann mehrere Verbindungen gleichzeitig haben.

#### langlebig

In Firefox war IndexedDB früher **langlebig**, was bedeutete, dass in einer Lese-Schreib-Transaktion ein [`complete`](/de/docs/Web/API/IDBTransaction/complete_event)-Ereignis nur dann ausgelöst wurde, wenn alle Daten garantiert auf die Festplatte geschrieben waren.

Seit Firefox 40 haben IndexedDB-Transaktionen weniger strenge Haltbarkeitsgarantien, um die Leistung zu steigern (siehe [Firefox-Fehler 1112702](https://bugzil.la/1112702)), was dem Verhalten anderer IndexedDB-Unterstützungsbrowser entspricht. In diesem Fall wird das [`complete`](/de/docs/Web/API/IDBTransaction/complete_event)-Ereignis ausgelöst, nachdem dem Betriebssystem mitgeteilt wurde, dass die Daten geschrieben werden sollen, jedoch möglicherweise, bevor die Daten tatsächlich auf die Festplatte geschrieben wurden. Das Ereignis kann daher schneller als zuvor geliefert werden, aber es besteht eine kleine Chance, dass die gesamte Transaktion verloren geht, wenn das Betriebssystem abstürzt oder es zu einem Stromausfall kommt, bevor die Daten auf die Festplatte geschrieben wurden. Da solche katastrophalen Ereignisse selten sind, sollten sich die meisten Benutzer darüber keine weiteren Gedanken machen.

> [!NOTE]
> In Firefox können Sie, wenn Sie aus irgendeinem Grund Haltbarkeit sicherstellen möchten (z. B. wenn Sie kritische Daten speichern, die später nicht rekonstruiert werden können), eine Transaktion dazu zwingen, auf die Festplatte zu schreiben, bevor das `complete`-Ereignis ausgelöst wird, indem Sie eine Transaktion im experimentellen (nicht standardisierten) `readwriteflush`-Modus erstellen (siehe [`IDBDatabase.transaction`](/de/docs/Web/API/IDBDatabase/transaction).) Dies ist derzeit experimentell und kann nur verwendet werden, wenn die Voreinstellung `dom.indexedDB.experimental` in `about:config` auf `true` gesetzt ist.

#### Index

Ein Index ist ein spezialisierter Objektspeicher zum Nachschlagen von Datensätzen in einem anderen Objektspeicher, dem sogenannten _referenzierten Objektspeicher_. Der Index ist ein persistenter Schlüssel-Wert-Speicher, bei dem der Wertteil seiner Datensätze der Schlüsselteil eines Datensatzes im referenzierten Objektspeicher ist. Die Datensätze in einem Index werden automatisch gefüllt, wenn Datensätze im referenzierten Objektspeicher eingefügt, aktualisiert oder gelöscht werden. Jeder Datensatz in einem Index kann nur auf einen Datensatz in seinem referenzierten Objektspeicher verweisen, aber mehrere Indizes können auf denselben Objektspeicher verweisen. Wenn sich der Objektspeicher ändert, werden alle Indizes, die den Objektspeicher referenzieren, automatisch aktualisiert.

Alternativ können Sie auch Datensätze in einem Objektspeicher mit dem [Schlüssel](#schlüssel) nachschlagen.

Um mehr über die Verwendung von Indizes zu erfahren, siehe [Verwendung von IndexedDB](/de/docs/Web/API/IndexedDB_API/Using_IndexedDB#using_an_index). Für die Referenzdokumentation über Index, siehe [IDBKeyRange](/de/docs/Web/API/IDBKeyRange).

#### Objektspeicher

Der Mechanismus, durch den Daten in der Datenbank gespeichert werden. Der Objektspeicher speichert dauerhaft Datensätze, die Schlüssel-Wert-Paare sind. Datensätze innerhalb eines Objektspeichers sind gemäß den _[Schlüsseln](#schlüssel)_ in aufsteigender Reihenfolge sortiert.

Jeder Objektspeicher muss einen Namen haben, der in seiner Datenbank eindeutig ist. Der Objektspeicher kann optional einen _[Schlüsselerzeuger](#schlüsselerzeuger)_ und einen _[Schlüsselpfad](#schlüsselpfad)_ haben. Wenn der Objektspeicher einen Schlüsselpfad hat, verwendet er _[inline-Schlüssel](#inline-schlüssel)_; andernfalls verwendet er _[out-of-line-Schlüssel](#out-of-line-schlüssel)_.

Für die Referenzdokumentation über den Objektspeicher, siehe [`IDBObjectStore`](/de/docs/Web/API/IDBObjectStore).

#### Anforderung

Der Vorgang, durch den Lese- und Schreibvorgänge an einer Datenbank durchgeführt werden. Jede Anforderung stellt einen Lese- oder Schreibvorgang dar.

#### Transaktion

Eine atomare Menge von Datenzugriffs- und Datenänderungsvorgängen auf einer bestimmten Datenbank. Es ist die Art und Weise, wie Sie mit den Daten in einer Datenbank interagieren. Tatsächlich muss jeder Lese- oder änderungsvorgang an den Daten in der Datenbank in einer Transaktion stattfinden.

Eine Datenbankverbindung kann mehrere aktive Transaktionen gleichzeitig haben, solange die Schreibtransaktionen keine sich überschneidenden [_Bereiche_](#umfang) haben. Der Bereich von Transaktionen, der bei der Erstellung definiert wird, bestimmt, mit welchen Objektspeichern die Transaktion interagieren kann und bleibt für die gesamte Lebensdauer der Transaktion konstant. Wenn beispielsweise eine Datenbankverbindung bereits eine Schreibtransaktion mit einem Bereich hat, der nur den `flyingMonkey`-Objektspeicher umfasst, können Sie eine zweite Transaktion mit einem Bereich der `unicornCentaur`- und `unicornPegasus`-Objektspeicher starten. Was Lese-Transaktionen betrifft, können Sie mehrere davon haben - sogar sich überschneidende.

Transaktionen sollten kurzlebig sein, daher kann der Browser eine Transaktion, die zu lange dauert, beenden, um Speicherressourcen freizugeben, die die langlaufende Transaktion gesperrt hat. Sie können die Transaktion abbrechen, wodurch die in der Transaktion vorgenommenen Änderungen an der Datenbank zurückgesetzt werden. Und Sie müssen nicht einmal warten, bis die Transaktion begonnen hat oder aktiv ist, um sie abzubrechen.

Die drei Modi von Transaktionen sind: `readwrite`, `readonly` und `versionchange`. Der einzige Weg, Objektspeicher und Indizes zu erstellen und zu löschen, ist die Verwendung einer [`versionchange`](/de/docs/Web/API/IDBDatabase/versionchange_event)-Transaktion. Um mehr über Transaktionstypen zu erfahren, siehe den Referenzartikel für [IndexedDB](/de/docs/Web/API/IndexedDB_API).

Da alles innerhalb einer Transaktion geschieht, ist dies ein sehr wichtiges Konzept in IndexedDB. Um mehr über Transaktionen zu erfahren, insbesondere darüber, wie sie sich auf die Versionierung beziehen, siehe [`IDBTransaction`](/de/docs/Web/API/IDBTransaction), das auch Referenzdokumentation enthält.

#### Version

Wenn eine Datenbank zum ersten Mal erstellt wird, ist ihre Version die Ganzzahl 1. Jede Datenbank hat zu einem bestimmten Zeitpunkt nur eine Version; eine Datenbank kann nicht gleichzeitig in mehreren Versionen existieren. Der einzige Weg, die Version zu ändern, besteht darin, sie mit einer höheren Version als der aktuellen zu öffnen.

### Schlüssel und Wert

#### Inline-Schlüssel

Ein Schlüssel, der als Teil des gespeicherten Werts gespeichert wird. Er wird durch einen _Schlüsselpfad_ gefunden. Ein Inline-Schlüssel kann mit einem Generator erzeugt werden. Nachdem der Schlüssel erzeugt wurde, kann er dann im Wert unter Verwendung des Schlüsselpfads gespeichert werden, oder er kann auch als Schlüssel verwendet werden.

#### Schlüssel

Ein Datenwert, durch den gespeicherte Werte organisiert und im Objektspeicher abgerufen werden. Der Objektspeicher kann den Schlüssel aus einer von drei Quellen ableiten: einem _[Schlüsselerzeuger](#schlüsselerzeuger)_, einem _[Schlüsselpfad](#schlüsselpfad)_ oder einem explizit angegebenen Wert. Der Schlüssel muss einen Datentyp haben, der eine Zahl hat, die größer ist als die davor. Jeder Datensatz in einem Objektspeicher muss einen Schlüssel haben, der innerhalb desselben Speichers eindeutig ist, sodass Sie keine mehrfachen Datensätze mit demselben Schlüssel in einem gegebenen Objektspeicher haben können.

Ein Schlüssel kann eine der folgenden Typen sein: [string](/de/docs/Web/JavaScript/Reference/Global_Objects/String), [date](/de/docs/Web/JavaScript/Reference/Global_Objects/Date), float, binäre Daten (dargestellt durch einen [`ArrayBuffer`](/de/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer) oder eine [`TypedArray`](/de/docs/Web/JavaScript/Reference/Global_Objects/TypedArray)-Ansicht wie [`Uint8Array`](/de/docs/Web/JavaScript/Reference/Global_Objects/Uint8Array)), und [array](/de/docs/Web/JavaScript/Reference/Global_Objects/Array). Die Länge eines Array-Schlüssels kann von `0` (leeres Array) bis unendlich reichen, und Sie können ein Array in ein Array einschließen.

Alternativ können Sie auch Datensätze in einem Objektspeicher mit dem _[Index](#index)_ nachschlagen.

#### Schlüsselerzeuger

Ein Mechanismus zur Erzeugung neuer Schlüssel in einer geordneten Sequenz. Wenn ein Objektspeicher keinen Schlüsselerzeuger hat, muss die Anwendung Schlüssel für die aufzubewahrenden Datensätze bereitstellen. Erzeuger werden nicht zwischen Speichern geteilt. Dies ist mehr ein Detail der Browser-Implementierung, da Sie in der Webentwicklung keine Schlüsselerzeuger erstellen oder darauf zugreifen.

#### Schlüsselpfad

Definiert, wo der Browser den Schlüssel aus dem Objektspeicher oder Index extrahieren soll. Ein gültiger Schlüsselpfad kann eines der folgenden enthalten: eine leere Zeichenfolge, ein JavaScript-Identifikator oder mehrere JavaScript-Identifikatoren, getrennt durch Punkte, oder ein Array, das eines dieser enthält. Er darf keine Leerzeichen enthalten.

#### Out-of-line-Schlüssel

Ein Schlüssel, der getrennt von dem gespeicherten Wert gespeichert wird.

#### Wert

Jeder Datensatz hat einen Wert, der alles enthalten kann, was in JavaScript ausgedrückt werden kann, einschließlich [boolean](/de/docs/Web/JavaScript/Reference/Global_Objects/Boolean), [number](/de/docs/Web/JavaScript/Reference/Global_Objects/Number), [string](/de/docs/Web/JavaScript/Reference/Global_Objects/String), [date](/de/docs/Web/JavaScript/Reference/Global_Objects/Date), [object](/de/docs/Web/JavaScript/Reference/Global_Objects/Object), [array](/de/docs/Web/JavaScript/Reference/Global_Objects/Array), [regexp](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp), [undefined](/de/docs/Web/JavaScript/Reference/Global_Objects/undefined) und null.

Wenn ein Objekt oder Array gespeichert wird, können die Eigenschaften und Werte in diesem Objekt oder Array auch alles sein, was ein gültiger Wert ist.

[Blobs](/de/docs/Web/API/Blob) und Dateien können gespeichert werden, siehe [Spezifikation](https://w3c.github.io/IndexedDB/).

### Bereich und Umfang

#### Cursor

Ein Mechanismus zum Durchlaufen mehrerer Datensätze mit einem _Schlüsselbereich_. Der Cursor hat eine Quelle, die angibt, welchen Index oder Objektspeicher er durchläuft. Er hat eine Position innerhalb des Bereichs und bewegt sich in eine Richtung, die in der Reihenfolge der Datensatzschlüssel aufsteigend oder absteigend ist. Für die Referenzdokumentation über Cursor, siehe [`IDBCursor`](/de/docs/Web/API/IDBCursor).

#### Schlüsselbereich

Ein kontinuierlicher Bereich über einen bestimmten Datentyp, der für Schlüssel verwendet wird. Datensätze können aus Objektspeichern und Indizes mit Schlüsseln oder einem Schlüsselbereich abgerufen werden. Sie können den Bereich über untere und obere Grenzen einschränken oder filtern. Zum Beispiel können Sie über alle Werte eines Schlüssels zwischen x und y iterieren.

Für die Referenzdokumentation über Schlüsselbereiche, siehe [`IDBKeyRange`](/de/docs/Web/API/IDBKeyRange).

#### Umfang

Die Menge der Objektspeicher und Indizes, auf die eine Transaktion angewandt wird. Die Umfänge von nur lesenden Transaktionen können sich überschneiden und gleichzeitig ausgeführt werden. Andererseits dürfen sich die Umfänge von schreibenden Transaktionen nicht überschneiden. Sie können trotzdem mehrere Transaktionen mit demselben Umfang zur gleichen Zeit starten, aber sie reihen sich einfach in eine Warteschlange ein und werden nacheinander ausgeführt.

## Nächste Schritte

Mit einem Verständnis der wichtigsten Merkmale und der Kernterminologie von IndexedDB können wir zu konkreteren Dingen übergehen. Für ein Tutorial zur Nutzung der API, siehe [Verwendung von IndexedDB](/de/docs/Web/API/IndexedDB_API/Using_IndexedDB).

## Siehe auch

- [Indexed Database API Specification](https://w3c.github.io/IndexedDB/)
- [IndexedDB API Reference](/de/docs/Web/API/IndexedDB_API)
- [Using IndexedDB](/de/docs/Web/API/IndexedDB_API/Using_IndexedDB)
- [IndexedDB — Der Speicher in Ihrem Browser](<https://learn.microsoft.com/en-us/previous-versions/msdn10/gg679063(v=msdn.10)>)
