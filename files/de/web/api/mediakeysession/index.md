---
title: MediaKeySession
slug: Web/API/MediaKeySession
l10n:
  sourceCommit: ba9a6bebd0e7bf1dd6b5c4eed156d8f1748ade0f
---

{{APIRef("Encrypted Media Extensions")}}{{SecureContext_Header}}

Die **`MediaKeySession`**-Schnittstelle der [Encrypted Media Extensions API](/de/docs/Web/API/Encrypted_Media_Extensions_API) repräsentiert einen Kontext für den Nachrichtenaustausch mit einem Content Decryption Module (CDM).

{{InheritanceDiagram}}

## Instanz-Eigenschaften

- [`MediaKeySession.closed`](/de/docs/Web/API/MediaKeySession/closed) {{ReadOnlyInline}}
  - : Gibt ein {{jsxref("Promise")}} zurück, das signalisiert, wann eine `MediaKeySession` geschlossen wird. Dieses Promise kann nur erfüllt werden und wird niemals abgelehnt. Das Schließen einer Sitzung bedeutet, dass Lizenzen und Schlüssel, die damit verbunden sind, nicht mehr für die Entschlüsselung von Mediendaten gültig sind.
- [`MediaKeySession.expiration`](/de/docs/Web/API/MediaKeySession/expiration) {{ReadOnlyInline}}
  - : Die Zeit, nach der die Schlüssel in der aktuellen Sitzung nicht mehr zur Entschlüsselung von Mediendaten verwendet werden können, oder `NaN`, wenn keine solche Zeit existiert. Dieser Wert wird vom CDM bestimmt und in Millisekunden seit dem 1. Januar 1970, UTC gemessen. Dieser Wert kann sich während der Laufzeit einer Sitzung ändern, zum Beispiel wenn eine Aktion das Starten eines Fensters auslöst.
- [`MediaKeySession.keyStatuses`](/de/docs/Web/API/MediaKeySession/keyStatuses) {{ReadOnlyInline}}
  - : Enthält eine Referenz auf eine schreibgeschützte [`MediaKeyStatusMap`](/de/docs/Web/API/MediaKeyStatusMap) der Schlüssel der aktuellen Sitzung und deren Status.
- [`MediaKeySession.sessionId`](/de/docs/Web/API/MediaKeySession/sessionId) {{ReadOnlyInline}}
  - : Enthält eine vom CDM generierte eindeutige Zeichenkette für das aktuelle Medienobjekt und dessen zugehörige Schlüssel oder Lizenzen.

### Ereignisse

- [`keystatuseschange`](/de/docs/Web/API/MediaKeySession/keystatuseschange_event)
  - : Wird ausgelöst, wenn es eine Änderung der Schlüssel in einer Sitzung oder deren Status gegeben hat.
- [`message`](/de/docs/Web/API/MediaKeySession/message_event)
  - : Wird ausgelöst, wenn das Content Decryption Module eine Nachricht für die Sitzung generiert hat.

## Instanz-Methoden

- [`MediaKeySession.close()`](/de/docs/Web/API/MediaKeySession/close)
  - : Gibt ein {{jsxref("Promise")}} zurück, nachdem die aktuelle Mediensitzung als nicht mehr benötigt gemeldet wurde und das CDM aufgefordert wurde, alle mit diesem Objekt verbundenen Ressourcen freizugeben und zu schließen.
- [`MediaKeySession.generateRequest()`](/de/docs/Web/API/MediaKeySession/generateRequest)
  - : Gibt ein {{jsxref("Promise")}} zurück, nachdem eine Medienanfrage basierend auf Initialisierungsdaten generiert wurde.
- [`MediaKeySession.load()`](/de/docs/Web/API/MediaKeySession/load)
  - : Gibt ein {{jsxref("Promise")}} zurück, das zu einem booleschen Wert aufgelöst wird, nachdem Daten für ein angegebenes Sitzungsobjekt geladen wurden.
- [`MediaKeySession.remove()`](/de/docs/Web/API/MediaKeySession/remove)
  - : Gibt ein {{jsxref("Promise")}} zurück, nachdem alle mit dem aktuellen Objekt verbundenen Sitzungsdaten entfernt wurden.
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
