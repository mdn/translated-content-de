---
title: MediaKeySession
slug: Web/API/MediaKeySession
l10n:
  sourceCommit: ba9a6bebd0e7bf1dd6b5c4eed156d8f1748ade0f
---

{{APIRef("Encrypted Media Extensions")}}{{SecureContext_Header}}

Das **`MediaKeySession`** Interface der [Encrypted Media Extensions API](/de/docs/Web/API/Encrypted_Media_Extensions_API) stellt einen Kontext für den Nachrichtenaustausch mit einem Content Decryption Module (CDM) dar.

{{InheritanceDiagram}}

## Instanzeigenschaften

- {{domxref("MediaKeySession.closed")}} {{ReadOnlyInline}}
  - : Gibt ein {{jsxref("Promise")}} zurück, das signalisiert, wann eine `MediaKeySession` geschlossen wird. Dieses Promise kann nur erfüllt werden und wird nie abgelehnt. Das Schließen einer Sitzung bedeutet, dass Lizenzen und Schlüssel, die damit verbunden sind, nicht mehr zur Entschlüsselung von Mediendaten gültig sind.
- {{domxref("MediaKeySession.expiration")}} {{ReadOnlyInline}}
  - : Die Zeit, nach der die Schlüssel in der aktuellen Sitzung nicht mehr zur Entschlüsselung von Mediendaten verwendet werden können, oder `NaN`, wenn keine solche Zeit existiert. Dieser Wert wird durch das CDM bestimmt und in Millisekunden seit dem 1. Januar 1970, UTC gemessen. Dieser Wert kann sich während der Lebensdauer einer Sitzung ändern, z. B. wenn eine Aktion den Beginn eines Fensters auslöst.
- {{domxref("MediaKeySession.keyStatuses")}} {{ReadOnlyInline}}
  - : Enthält eine Referenz auf eine schreibgeschützte {{domxref("MediaKeyStatusMap")}} der Schlüssel der aktuellen Sitzung und deren Status.
- {{domxref("MediaKeySession.sessionId")}} {{ReadOnlyInline}}
  - : Enthält einen vom CDM generierten eindeutigen String für das aktuelle Medienobjekt und dessen zugehörige Schlüssel oder Lizenzen.

### Ereignisse

- {{domxref("MediaKeySession.keystatuseschange_event", "keystatuseschange")}}
  - : Wird ausgelöst, wenn es eine Änderung an den Schlüsseln in einer Sitzung oder deren Status gibt.
- {{domxref("MediaKeySession.message_event", "message")}}
  - : Wird ausgelöst, wenn das Content Decryption Module eine Nachricht für die Sitzung generiert hat.

## Instanzmethoden

- {{domxref("MediaKeySession.close()")}}
  - : Gibt ein {{jsxref("Promise")}} zurück, nachdem die aktuelle Mediensitzung als nicht mehr benötigt benachrichtigt wurde und das CDM alle mit diesem Objekt verbundenen Ressourcen freigeben und schließen sollte.
- {{domxref("MediaKeySession.generateRequest()")}}
  - : Gibt ein {{jsxref("Promise")}} zurück, nachdem eine Medienanforderung basierend auf Initialisierungsdaten generiert wurde.
- {{domxref("MediaKeySession.load()")}}
  - : Gibt ein {{jsxref("Promise")}} zurück, das sich nach dem Laden von Daten für ein angegebenes Sitzungsobjekt zu einem booleschen Wert auflöst.
- {{domxref("MediaKeySession.remove()")}}
  - : Gibt ein {{jsxref("Promise")}} zurück, nachdem alle mit dem aktuellen Objekt verbundenen Sitzungsdaten entfernt wurden.
- {{domxref("MediaKeySession.update()")}}
  - : Gibt ein {{jsxref("Promise")}} zurück, nachdem Nachrichten und Lizenzen in das CDM geladen wurden.

## Beispiele

```js
// TBD
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
