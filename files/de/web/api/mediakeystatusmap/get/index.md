---
title: "MediaKeyStatusMap: get() Methode"
short-title: get()
slug: Web/API/MediaKeyStatusMap/get
l10n:
  sourceCommit: b01f35e069ca9d1c343f24b5d755d210c6107164
---

{{APIRef("Encrypted Media Extensions")}}{{SecureContext_Header}}

Die **`get()`**-Methode der [`MediaKeyStatusMap`](/de/docs/Web/API/MediaKeyStatusMap) Schnittstelle gibt den Statuswert zurück, der dem angegebenen Schlüssel zugeordnet ist, oder `undefined`, wenn keiner vorhanden ist.

Der Statuswert zeigt an, ob der spezifische Schlüssel für die Entschlüsselung verwendet werden kann oder nicht.

## Syntax

```js-nolint
get(key)
```

### Parameter

- `key`
  - : Der Schlüssel, dessen Wert Sie zurückgeben möchten.

### Rückgabewert

Ein String, der den Statuswert angibt, der dem angegebenen Schlüssel zugeordnet ist, oder `undefined`.

Die folgenden Statuswerte sind erlaubt:

- `usable`
  - : Der Schlüssel kann derzeit zur Entschlüsselung verwendet werden.
- `expired`
  - : Der Schlüssel kann nicht mehr zur Entschlüsselung verwendet werden, da seine Ablaufzeit abgelaufen ist.
- `released`
  - : Der Schlüssel wurde freigegeben und ist für das CDM nicht mehr verfügbar. Informationen über den Schlüssel sind jedoch weiterhin verfügbar, z. B. ein Nachweis der Lizenzvernichtung.
- `output-restricted`
  - : Mit dem Schlüssel sind, basierend auf der festgelegten Richtlinie, Ausgabbeschränkungen verbunden. Mediendaten, die mit diesem Schlüssel entschlüsselt wurden, können von der Darstellung ausgeschlossen werden. Der Status weist darauf hin, dass die Verbindung zwischen Quelle und Ausgabe (z. B. Ihr Computer und ein externer Bildschirm) nicht vertrauenswürdig ist. Dies kann bedeuten, dass es HDCP-Versionsunterschiede zwischen der Quelle, den zwischengeschalteten Geräten und der Ausgabe gibt oder dass zwischengeschaltete Verbindungsgeräte wie HDMI-Kabel oder Video-Splitter beschädigt oder nicht konform sind. Eine Anwendung könnte sich entscheiden, eine höhere HDCP-Version, Inhalte zu verwenden, die eine so hohe Version nicht erfordern. Sie sollten auch überprüfen, ob die zwischengeschalteten Geräte und Kabel HDCP unterstützen, fest verbunden und nicht beschädigt sind.
- `output-downscaled`
  - : Mit dem Schlüssel sind, basierend auf der festgelegten Richtlinie, Ausgabbeschränkungen verbunden, diese Beschränkungen könnten jedoch gelockert werden, wenn der Inhalt in niedrigerer Qualität abgespielt wird. Wenn dieser Wert zurückgegeben wird, könnte eine Anwendung den Inhalt in geringerer Auflösung abspielen, oder sie könnte sich entscheiden, eine höhere HDCP-Version oder andere Inhalte zu verwenden, die eine so hohe HDCP-Version nicht erfordern.
- `usable-in-future`
  - : Der Schlüssel wird in Zukunft zur Entschlüsselung nutzbar sein, sobald seine Startzeit erreicht ist.
- `status-pending`
  - : Der Status des Schlüssels ist noch nicht bekannt und wird ermittelt.
- `internal-error`
  - : Der Schlüssel kann derzeit aufgrund eines Fehlers im CDM nicht zur Entschlüsselung verwendet werden. Die Anwendung kann in diesem Fall nichts unternehmen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
