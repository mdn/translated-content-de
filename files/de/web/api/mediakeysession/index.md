---
title: MediaKeySession
slug: Web/API/MediaKeySession
l10n:
  sourceCommit: f74ea09f0510e670be74f76dc86d6e17e063d063
---

{{APIRef("Encrypted Media Extensions")}}{{SecureContext_Header}}

Die Schnittstelle **`MediaKeySession`** der [Encrypted Media Extensions API](/de/docs/Web/API/Encrypted_Media_Extensions_API) stellt einen Kontext für den Nachrichtenaustausch mit einem Content Decryption Module (CDM) dar.

{{InheritanceDiagram}}

## Instanzeigenschaften

- [`MediaKeySession.closed`](/de/docs/Web/API/MediaKeySession/closed) {{ReadOnlyInline}}
  - : Gibt ein {{jsxref("Promise")}} zurück, das signalisiert, wann eine `MediaKeySession` geschlossen wird. Dieses Promise kann nur erfüllt und niemals zurückgewiesen werden. Das Schließen einer Sitzung bedeutet, dass die zugehörigen Lizenzen und Schlüssel nicht mehr zum Entschlüsseln von Mediendaten gültig sind.
- [`MediaKeySession.expiration`](/de/docs/Web/API/MediaKeySession/expiration) {{ReadOnlyInline}}
  - : Der Zeitpunkt, nach dem die Schlüssel der aktuellen Sitzung nicht mehr zum Entschlüsseln von Mediendaten verwendet werden können, oder `NaN`, wenn es keinen solchen Zeitpunkt gibt. Dieser Wert wird vom CDM bestimmt und in Millisekunden seit dem 1. Januar 1970, 00:00 Uhr UTC, gemessen. Er kann sich während der Laufzeit einer Sitzung ändern, etwa wenn eine Aktion den Beginn eines Zeitfensters auslöst.
- [`MediaKeySession.keyStatuses`](/de/docs/Web/API/MediaKeySession/keyStatuses) {{ReadOnlyInline}}
  - : Enthält eine Referenz auf eine schreibgeschützte [`MediaKeyStatusMap`](/de/docs/Web/API/MediaKeyStatusMap) mit den Schlüsseln der aktuellen Sitzung und deren Status.
- [`MediaKeySession.sessionId`](/de/docs/Web/API/MediaKeySession/sessionId) {{ReadOnlyInline}}
  - : Enthält eine eindeutige Zeichenfolge, die vom CDM für das aktuelle Medienobjekt und die zugehörigen Schlüssel oder Lizenzen erzeugt wird.

## Instanzmethoden

- [`MediaKeySession.close()`](/de/docs/Web/API/MediaKeySession/close)
  - : Gibt ein {{jsxref("Promise")}} zurück, nachdem mitgeteilt wurde, dass die aktuelle Mediensitzung nicht mehr benötigt wird und das CDM alle mit diesem Objekt verbundenen Ressourcen freigeben und es schließen soll.
- [`MediaKeySession.generateRequest()`](/de/docs/Web/API/MediaKeySession/generateRequest)
  - : Gibt ein {{jsxref("Promise")}} zurück, nachdem anhand von Initialisierungsdaten eine Lizenzanfrage erzeugt wurde.
- [`MediaKeySession.load()`](/de/docs/Web/API/MediaKeySession/load)
  - : Gibt ein {{jsxref("Promise")}} zurück, das nach dem Laden der Daten für ein angegebenes Sitzungsobjekt mit einem booleschen Wert erfüllt wird.
- [`MediaKeySession.remove()`](/de/docs/Web/API/MediaKeySession/remove)
  - : Gibt ein {{jsxref("Promise")}} zurück, nachdem alle dem aktuellen Objekt zugeordneten Sitzungsdaten entfernt wurden.
- [`MediaKeySession.update()`](/de/docs/Web/API/MediaKeySession/update)
  - : Gibt ein {{jsxref("Promise")}} zurück, nachdem Nachrichten und Lizenzen an das CDM übergeben wurden.

## Ereignisse

- [`keystatuseschange`](/de/docs/Web/API/MediaKeySession/keystatuseschange_event)
  - : Wird ausgelöst, wenn sich die Schlüssel einer Sitzung oder deren Status ändern.
- [`message`](/de/docs/Web/API/MediaKeySession/message_event)
  - : Wird ausgelöst, wenn das Content Decryption Module eine Nachricht für die Sitzung erzeugt hat.

## Beispiele

```js
// TBD
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
