---
title: script-Modul
short-title: script
slug: Web/WebDriver/Reference/BiDi/Modules/script
l10n:
  sourceCommit: 7124ff73f982c7cd1882e5056e849443116f0333
---

Das **`script`**-Modul enthält Befehle und Ereignisse zum Ausführen von JavaScript und zum Verwalten von Realms im Browser.

## Realms

JavaScript-Code wird in einer Ausführungsumgebung ausgeführt, die als [Realm](/de/docs/Web/JavaScript/Reference/Execution_model#realms) bezeichnet wird. Sie besitzt ein eigenes globales Objekt, beispielsweise [`Window`](/de/docs/Web/API/Window) für ein Dokument.
Normalerweise hat ein Dokument einen Realm. Für jeden Worker und jedes Worklet, das zu ihm gehört, kann es jedoch einen zusätzlichen Realm haben.

In WebDriver BiDi hat jeder Realm eine eindeutige Zeichenfolgenkennung, die Realm-ID genannt wird.
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

- Anhand seiner Realm-ID.
- Anhand der ID des [Kontexts](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext#contexts), der ihn enthält, da jeder Kontext einen Realm für sein aktives Dokument hat.

Worker- und Worklet-Realms haben keine Kontext-ID. Sie können sie daher nur anhand ihrer Realm-ID identifizieren.

Befehle wie [`script.evaluate`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/script/evaluate) und [`script.callFunction`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/script/callFunction) haben einen `target`-Parameter, der entweder eine Realm-ID oder eine Kontext-ID akzeptiert.
Wenn Sie eine Kontext-ID übergeben, wird das Skript im Realm des aktiven Dokuments dieses Kontexts ausgeführt.

Bei jeder Navigation zu einem anderen Dokument wird ein neues Dokument mit einem neuen Realm geladen. Eine Realm-ID von vor der Navigation ist daher nicht mehr gültig.

### Sandbox-Realms

In WebDriver BiDi ist ein Sandbox-Realm ein benannter Realm, den Sie in einem Kontext erstellen.

Standardmäßig wird ein Skript, das Sie in einem Kontext auswerten, im Realm des aktiven Dokuments ausgeführt.
Das bedeutet, dass Ihr Skript versehentlich globale Objekte verändern kann, auf die die Seite angewiesen ist. Umgekehrt kann die Seite Variablen lesen oder verändern, die Ihr Skript definiert.

Ein Sandbox-Realm verhindert dies.
Er hat ein eigenes globales Objekt, das sowohl vom globalen Objekt des aktiven Dokuments als auch von denen aller anderen Sandbox-Realms in diesem Kontext getrennt ist.
Skripte darin können auf dasselbe DOM zugreifen wie die Skripte der Seite. Änderungen, die die Seite an integrierten Objekten und DOM-APIs vornimmt, wirken sich jedoch nicht auf sie aus.
Die Skripte der Seite können nicht auf Variablen zugreifen, die von Skripten in einem Sandbox-Realm definiert wurden.

Es gibt keinen eigenen Befehl zum Erstellen eines Sandbox-Realms. Sie erstellen ihn, indem Sie im `target`-Parameter des Befehls [`script.evaluate`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/script/evaluate#target) oder [`script.callFunction`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/script/callFunction#target) zusammen mit einer Kontext-ID einen Sandbox-Namen übergeben.
Der Browser erstellt den Sandbox-Realm, wenn Sie diesen Namen zum ersten Mal in diesem Kontext verwenden.
Für jede Kombination aus Kontext und Sandbox-Namen gibt es genau einen Realm. Derselbe Sandbox-Name in zwei Kontexten ergibt also zwei getrennte Realms.

### Unterschiede zwischen Realms

Realms unterscheiden sich darin, ob sie auf das DOM zugreifen können, ob sie von den Skripten der Seite isoliert sind und wie Sie sie identifizieren:

| Realm                       | Zugriff auf das DOM | Von den Skripten der Seite isoliert | Identifizierung                                  |
| --------------------------- | ------------------- | ----------------------------------- | ------------------------------------------------ |
| Realm des aktiven Dokuments | Ja                  | Nein                                | Realm-ID oder Kontext-ID                         |
| Sandbox-Realm               | Ja                  | Ja                                  | Realm-ID oder Kontext-ID mit einem Sandbox-Namen |
| Worker- oder Worklet-Realm  | Nein                | Ja                                  | Nur anhand der Realm-ID                          |

## Befehle

- [`script.getRealms`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/script/getRealms)

## Ereignisse

- [`script.realmCreated`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/script/realmCreated)
- [`script.realmDestroyed`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/script/realmDestroyed)

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
