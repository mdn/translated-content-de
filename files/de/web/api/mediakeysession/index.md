---
title: MediaKeySession
slug: Web/API/MediaKeySession
l10n:
  sourceCommit: cb7e7fde9b942001d6acef7d9868fbf622d71636
---

{{APIRef("Encrypted Media Extensions")}}{{SecureContext_Header}}

Das Interface **`MediaKeySession`** der [Encrypted Media Extensions API](/de/docs/Web/API/Encrypted_Media_Extensions_API) repräsentiert einen Kontext für den Nachrichtenaustausch mit einem Content Decryption Module (CDM).

{{InheritanceDiagram}}

## Instanz-Eigenschaften

- [`MediaKeySession.closed`](/de/docs/Web/API/MediaKeySession/closed) {{ReadOnlyInline}}
  - : Gibt ein {{jsxref("Promise")}} zurück, das signalisiert, wann eine `MediaKeySession` geschlossen wird. Dieses Promise kann nur erfüllt und nie abgelehnt werden. Das Schließen einer Sitzung bedeutet, dass Lizenzen und Schlüssel, die damit verbunden sind, nicht mehr zum Entschlüsseln von Mediendaten gültig sind.
- [`MediaKeySession.expiration`](/de/docs/Web/API/MediaKeySession/expiration) {{ReadOnlyInline}}
  - : Der Zeitpunkt, nach dem die Schlüssel in der aktuellen Sitzung nicht mehr zur Entschlüsselung von Mediendaten verwendet werden können, oder `NaN`, wenn keine solche Zeit existiert. Dieser Wert wird vom CDM bestimmt und in Millisekunden seit dem 1. Januar 1970, UTC gemessen. Dieser Wert kann sich während der Laufzeit einer Sitzung ändern, z.B. wenn eine Aktion den Beginn eines Zeitfensters auslöst.
- [`MediaKeySession.keyStatuses`](/de/docs/Web/API/MediaKeySession/keyStatuses) {{ReadOnlyInline}}
  - : Enthält eine Referenz zu einer schreibgeschützten [`MediaKeyStatusMap`](/de/docs/Web/API/MediaKeyStatusMap) der Schlüssel der aktuellen Sitzung und deren Status.
- [`MediaKeySession.sessionId`](/de/docs/Web/API/MediaKeySession/sessionId) {{ReadOnlyInline}}
  - : Enthält eine vom CDM generierte eindeutige Zeichenfolge für das aktuelle Medienobjekt und dessen zugehörige Schlüssel oder Lizenzen.

### Ereignisse

- [`keystatuseschange`](/de/docs/Web/API/MediaKeySession/keystatuseschange_event)
  - : Wird ausgelöst, wenn es eine Änderung bei den Schlüsseln in einer Sitzung oder deren Status gegeben hat.
- [`message`](/de/docs/Web/API/MediaKeySession/message_event)
  - : Wird ausgelöst, wenn das Content Decryption Module eine Nachricht für die Sitzung generiert hat.

## Instanz-Methoden

- [`MediaKeySession.close()`](/de/docs/Web/API/MediaKeySession/close)
  - : Gibt ein {{jsxref("Promise")}} zurück, nachdem die aktuelle Mediensitzung als nicht mehr benötigt gemeldet wurde und das CDM alle mit diesem Objekt verbundenen Ressourcen freigeben und es schließen sollte.
- [`MediaKeySession.generateRequest()`](/de/docs/Web/API/MediaKeySession/generateRequest)
  - : Gibt ein {{jsxref("Promise")}} zurück, nachdem eine Lizenzanfrage basierend auf Initialisierungsdaten generiert wurde.
- [`MediaKeySession.load()`](/de/docs/Web/API/MediaKeySession/load)
  - : Gibt ein {{jsxref("Promise")}} zurück, das zu einem booleschen Wert aufgelöst wird, nachdem Daten für ein angegebenes Sitzungsobjekt geladen wurden.
- [`MediaKeySession.remove()`](/de/docs/Web/API/MediaKeySession/remove)
  - : Gibt ein {{jsxref("Promise")}} zurück, nachdem alle Sitzungsdaten, die mit dem aktuellen Objekt verbunden sind, entfernt wurden.
- [`MediaKeySession.update()`](/de/docs/Web/API/MediaKeySession/update)
  - : Gibt ein {{jsxref("Promise")}} zurück, nachdem Nachrichten und Lizenzen an das CDM geladen wurden.

## Beispiele

```js
// TBD
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
