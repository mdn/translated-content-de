---
title: MediaKeySession
slug: Web/API/MediaKeySession
l10n:
  sourceCommit: ba9a6bebd0e7bf1dd6b5c4eed156d8f1748ade0f
---

{{APIRef("Encrypted Media Extensions")}}{{SecureContext_Header}}

Die **`MediaKeySession`**-Schnittstelle der [Encrypted Media Extensions API](/de/docs/Web/API/Encrypted_Media_Extensions_API) repräsentiert einen Kontext für den Nachrichtenaustausch mit einem Content Decryption Module (CDM).

{{InheritanceDiagram}}

## Instanzeigenschaften

- [`MediaKeySession.closed`](/de/docs/Web/API/MediaKeySession/closed) {{ReadOnlyInline}}
  - : Gibt ein {{jsxref("Promise")}} zurück, das signalisiert, wann eine `MediaKeySession` geschlossen wird. Dieses Promise kann nur erfüllt und niemals abgelehnt werden. Das Schließen einer Sitzung bedeutet, dass Lizenzen und Schlüssel, die damit verbunden sind, nicht mehr zum Entschlüsseln von Mediendaten verwendet werden können.
- [`MediaKeySession.expiration`](/de/docs/Web/API/MediaKeySession/expiration) {{ReadOnlyInline}}
  - : Die Zeit, nach der die Schlüssel in der aktuellen Sitzung nicht mehr zum Entschlüsseln von Mediendaten verwendet werden können, oder `NaN`, wenn eine solche Zeit nicht existiert. Dieser Wert wird durch das CDM bestimmt und in Millisekunden seit dem 1. Januar 1970, UTC, gemessen. Dieser Wert kann sich während der Lebensdauer einer Sitzung ändern, z. B. wenn eine Aktion den Beginn eines Zeitfensters auslöst.
- [`MediaKeySession.keyStatuses`](/de/docs/Web/API/MediaKeySession/keyStatuses) {{ReadOnlyInline}}
  - : Enthält eine Referenz auf eine schreibgeschützte [`MediaKeyStatusMap`](/de/docs/Web/API/MediaKeyStatusMap) der Schlüssel der aktuellen Sitzung und deren Status.
- [`MediaKeySession.sessionId`](/de/docs/Web/API/MediaKeySession/sessionId) {{ReadOnlyInline}}
  - : Enthält eine eindeutige Zeichenkette, die vom CDM für das aktuelle Medienobjekt und die damit verbundenen Schlüssel oder Lizenzen generiert wurde.

### Ereignisse

- [`keystatuseschange`](/de/docs/Web/API/MediaKeySession/keystatuseschange_event)
  - : Wird ausgelöst, wenn es eine Änderung in den Schlüsseln einer Sitzung oder deren Status gibt.
- [`message`](/de/docs/Web/API/MediaKeySession/message_event)
  - : Wird ausgelöst, wenn das Content Decryption Module eine Nachricht für die Sitzung generiert hat.

## Instanzmethoden

- [`MediaKeySession.close()`](/de/docs/Web/API/MediaKeySession/close)
  - : Gibt ein {{jsxref("Promise")}} zurück, nachdem mitgeteilt wurde, dass die aktuelle Mediensitzung nicht mehr benötigt wird und dass das CDM alle mit diesem Objekt verbundenen Ressourcen freigeben und es schließen sollte.
- [`MediaKeySession.generateRequest()`](/de/docs/Web/API/MediaKeySession/generateRequest)
  - : Gibt ein {{jsxref("Promise")}} zurück, nachdem ein Medienantrag auf Grundlage von Initialisierungsdaten generiert wurde.
- [`MediaKeySession.load()`](/de/docs/Web/API/MediaKeySession/load)
  - : Gibt ein {{jsxref("Promise")}} zurück, das nach dem Laden von Daten für ein bestimmtes Sitzungsobjekt zu einem booleschen Wert führt.
- [`MediaKeySession.remove()`](/de/docs/Web/API/MediaKeySession/remove)
  - : Gibt ein {{jsxref("Promise")}} zurück, nachdem alle mit dem aktuellen Objekt verbundenen Sitzungsdaten entfernt wurden.
- [`MediaKeySession.update()`](/de/docs/Web/API/MediaKeySession/update)
  - : Gibt ein {{jsxref("Promise")}} zurück, nachdem Nachrichten und Lizenzen in das CDM geladen wurden.

## Beispiele

```js
// TBD
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
