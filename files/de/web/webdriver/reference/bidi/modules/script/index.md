---
title: script-Modul
short-title: script
slug: Web/WebDriver/Reference/BiDi/Modules/script
l10n:
  sourceCommit: a4b7a640f04d4f6f1de19c1ee84888c967ece6cb
---

Das **`script`**-Modul enthält Befehle und Ereignisse zum Ausführen von JavaScript und zum Verwalten von Realms im Browser.

## Realms

JavaScript-Code wird in einer Ausführungsumgebung ausgeführt, die als [Realm](/de/docs/Web/JavaScript/Reference/Execution_model#realms) bezeichnet wird. Sie besitzt ein eigenes globales Objekt, beispielsweise [`Window`](/de/docs/Web/API/Window) für ein Dokument.
Normalerweise hat ein Dokument einen Realm. Für jeden Worker und jedes Worklet, das zu ihm gehört, kann jedoch ein weiterer Realm vorhanden sein.

In WebDriver BiDi hat jeder Realm eine eindeutige Zeichenkennung, die Realm-ID genannt wird.
Jeder [Kontext](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext#contexts) (ein Tab oder ein iframe) hat mindestens einen Realm.

### Arten von Realms

WebDriver BiDi definiert die folgenden Realm-Typwerte, gruppiert nach Ausführungsumgebung:

- `"window"` steht für Dokument-Realms, einschließlich [Sandbox-Realms](#sandbox-realms).
- `"dedicated-worker"`, `"shared-worker"` und `"service-worker"` stehen für die jeweiligen Worker-Realms.
  `"worker"` steht für jeden anderen Worker-Realm.
- `"audio-worklet"` und `"paint-worklet"` stehen für die jeweiligen Worklet-Realms.
  `"worklet"` steht für jeden anderen Worklet-Realm.

### Realms identifizieren

Sie können einen Realm auf eine der folgenden Arten identifizieren:

- Über seine Realm-ID.
- Über die ID des [Kontexts](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext#contexts), der ihn enthält, da jeder Kontext einen Realm für sein aktives Dokument hat.

Worker- und Worklet-Realms haben keine Kontext-ID. Sie können sie daher nur anhand ihrer Realm-ID identifizieren.

Befehle wie [`script.evaluate`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/script/evaluate) und [`script.callFunction`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/script/callFunction) akzeptieren im Parameter `target` entweder eine Realm-ID oder eine Kontext-ID.
Wenn Sie eine Kontext-ID übergeben, wird das Skript im Realm des aktiven Dokuments dieses Kontexts ausgeführt.

Bei jeder Navigation zu einem anderen Dokument wird ein neues Dokument mit einem neuen Realm geladen. Eine Realm-ID aus der Zeit vor der Navigation ist daher nicht mehr gültig.

### Sandbox-Realms

In WebDriver BiDi ist ein Sandbox-Realm ein benannter Realm, den Sie in einem Kontext erstellen.

Standardmäßig wird ein Skript, das Sie in einem Kontext auswerten, im Realm des aktiven Dokuments ausgeführt.
Das bedeutet, dass Ihr Skript versehentlich globale Variablen ändern kann, auf die die Seite angewiesen ist. Umgekehrt kann die Seite die Variablen lesen oder ändern, die Ihr Skript definiert.

Ein Sandbox-Realm verhindert dies.
Er hat ein eigenes globales Objekt, das von dem des aktiven Dokuments und von denen aller anderen Sandbox-Realms in diesem Kontext getrennt ist.
Skripte darin können auf dasselbe DOM zugreifen wie die Skripte der Seite. Sie sind jedoch nicht von Änderungen betroffen, die die Seite an integrierten Objekten und DOM-APIs vornimmt.
Auf Variablen, die von Skripten in einem Sandbox-Realm definiert werden, können die Skripte der Seite nicht zugreifen.

Es gibt keinen eigenen Befehl zum Erstellen eines Sandbox-Realms. Sie erstellen ihn, indem Sie im Parameter `target` des Befehls [`script.evaluate`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/script/evaluate#target) oder [`script.callFunction`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/script/callFunction#target) zusammen mit einer Kontext-ID einen Sandbox-Namen übergeben.
Der Browser erstellt den Sandbox-Realm, wenn Sie diesen Namen zum ersten Mal in diesem Kontext verwenden.
Für jede Kombination aus Kontext und Sandbox-Namen gibt es einen Realm. Derselbe Sandbox-Name in zwei Kontexten ergibt also zwei getrennte Realms.

### Unterschiede zwischen Realms

Realms unterscheiden sich darin, ob sie auf das DOM zugreifen können, ob sie von den Skripten der Seite isoliert sind und wie Sie sie identifizieren:

| Realm                       | Zugriff auf das DOM | Von den Skripten der Seite isoliert | Identifizierung                            |
| --------------------------- | ------------------- | ----------------------------------- | ------------------------------------------ |
| Realm des aktiven Dokuments | Ja                  | Nein                                | Realm-ID oder Kontext-ID                   |
| Sandbox-Realm               | Ja                  | Ja                                  | Realm-ID oder Kontext-ID mit Sandbox-Namen |
| Worker- oder Worklet-Realm  | Nein                | Ja                                  | Nur Realm-ID                               |

## Preload-Skripte

In WebDriver BiDi ist ein Preload-Skript eine Funktion, die automatisch vor den eigenen Skripten eines neuen Dokuments ausgeführt wird.
Wenn Sie ein Preload-Skript registrieren, wird es nicht in bereits vorhandenen Dokumenten ausgeführt.

Mit einem Preload-Skript können Sie Webplattform-APIs ersetzen oder überwachen, bevor die Seite sie verwendet.
Sie können beispielsweise Aufrufe von [`fetch()`](/de/docs/Web/API/Window/fetch) überwachen, um Anfragen zu erfassen, die über diese API gestellt werden – beginnend mit dem ersten Skript der Seite.

Standardmäßig wird die Funktion im Realm des neuen Dokuments ausgeführt.
Sie können stattdessen einen Sandbox-Namen angeben, um sie in einem [Sandbox-Realm](#sandbox-realms) auszuführen.

## Kanäle

Preload-Skripte und Funktionen, die mit dem Befehl `script.callFunction` aufgerufen werden, können über Kanäle Daten an abonnierte Clients senden.
Sie konfigurieren Kanäle über den Parameter `arguments` von [`script.addPreloadScript`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/script/addPreloadScript) oder [`script.callFunction`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/script/callFunction).

## Befehle

- [`script.addPreloadScript`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/script/addPreloadScript)
- [`script.callFunction`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/script/callFunction)
- [`script.disown`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/script/disown)
- [`script.evaluate`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/script/evaluate)
- [`script.getRealms`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/script/getRealms)
- [`script.removePreloadScript`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/script/removePreloadScript)

## Ereignisse

- [`script.realmCreated`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/script/realmCreated)
- [`script.realmDestroyed`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/script/realmDestroyed)

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
