---
title: "MediaKeyStatusMap: get()-Methode"
short-title: get()
slug: Web/API/MediaKeyStatusMap/get
l10n:
  sourceCommit: b01f35e069ca9d1c343f24b5d755d210c6107164
---

{{APIRef("Encrypted Media Extensions")}}{{SecureContext_Header}}

Die **`get()`**-Methode der [`MediaKeyStatusMap`](/de/docs/Web/API/MediaKeyStatusMap)-Schnittstelle gibt den Statuswert zurück, der dem gegebenen Schlüssel zugeordnet ist, oder `undefined`, falls keiner vorhanden ist.

Der Statuswert gibt an, ob der spezifische Schlüssel zur Entschlüsselung verwendet werden kann oder nicht.

## Syntax

```js-nolint
get(key)
```

### Parameter

- `key`
  - : Der Schlüssel, dessen Wert Sie zurückgegeben haben möchten.

### Rückgabewert

Ein String, der den dem gegebenen Schlüssel zugeordneten Statuswert angibt, oder `undefined`.

Die folgenden Statuswerte sind erlaubt:

- `usable`
  - : Der Schlüssel kann derzeit zur Entschlüsselung verwendet werden.
- `expired`
  - : Der Schlüssel kann nicht mehr zur Entschlüsselung verwendet werden, da seine Ablaufzeit überschritten ist.
- `released`
  - : Der Schlüssel wurde freigegeben und steht dem CDM nicht mehr zur Verfügung.
    Informationen über den Schlüssel sind jedoch verfügbar, wie z.B. ein Protokoll der Lizenzzerstörung.
- `output-restricted`
  - : Es gibt Ausgangebeschränkungen im Zusammenhang mit dem Schlüssel basierend auf der angegebenen Richtlinie.
    Mediendaten, die mit diesem Schlüssel entschlüsselt wurden, können von der Präsentation blockiert werden.
    Der Status zeigt an, dass die Verbindung zwischen der Quelle und dem Ausgabegerät (z.B. Ihrem Computer und einem externen Display) nicht vertrauenswürdig ist.
    Dies könnte darauf hindeuten, dass es HDCP-Versionsinkompatibilitäten zwischen der Quelle, Zwischenkomponenten und dem Ausgabegerät gibt oder dass zwischengeschaltete Anschlussgeräte wie HDMI-Kabel oder Videosplitter beschädigt oder nicht konform sind.
    Eine Anwendung könnte sich dafür entscheiden, eine höhere HDCP-Version, Inhalte zu verwenden, die nicht eine so hohe Version erfordern.
    Sie sollten auch überprüfen, dass Zwischengeräte und -kabel HDCP unterstützen, fest verbunden sind und nicht beschädigt sind.
- `output-downscaled`
  - : Es gibt Ausgangebeschränkungen im Zusammenhang mit dem Schlüssel basierend auf der angegebenen Richtlinie, jedoch könnten diese Beschränkungen gelockert werden, wenn die Inhalte in niedrigerer Qualität abgespielt werden.
    Wenn dieser Wert zurückgegeben wird, könnte eine Anwendung die Inhalte in niedrigerer Auflösung abspielen oder sich dafür entscheiden, eine höhere HDCP-Version zu verwenden oder andere Inhalte zu nutzen, die nicht eine so hohe HDCP-Version erfordern.
- `usable-in-future`
  - : Der Schlüssel wird in Zukunft zur Entschlüsselung nutzbar, sobald seine Startzeit erreicht wird.
- `status-pending`
  - : Der Status des Schlüssels ist noch nicht bekannt und wird bestimmt.
- `internal-error`
  - : Der Schlüssel ist aufgrund eines Fehlers im CDM derzeit nicht zur Entschlüsselung nutzbar.
    Die Anwendung kann in diesem Fall nichts unternehmen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
