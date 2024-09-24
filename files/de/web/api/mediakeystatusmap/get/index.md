---
title: "MediaKeyStatusMap: get() Methode"
short-title: get()
slug: Web/API/MediaKeyStatusMap/get
l10n:
  sourceCommit: b01f35e069ca9d1c343f24b5d755d210c6107164
---

{{APIRef("Encrypted Media Extensions")}}{{SecureContext_Header}}

Die **`get()`**-Methode der {{domxref("MediaKeyStatusMap")}}-Schnittstelle gibt den Statuswert zurück, der mit dem angegebenen Schlüssel verknüpft ist, oder `undefined`, wenn keiner vorhanden ist.

Der Statuswert gibt an, ob der spezifische Schlüssel für die Entschlüsselung verwendet werden kann oder nicht.

## Syntax

```js-nolint
get(key)
```

### Parameter

- `key`
  - : Der Schlüssel, dessen Wert Sie zurückgeben möchten.

### Rückgabewert

Ein String, der den Statuswert angibt, der mit dem angegebenen Schlüssel verknüpft ist, oder `undefined`.

Die folgenden Statuswerte sind zulässig:

- `usable`
  - : Der Schlüssel kann derzeit für die Entschlüsselung verwendet werden.
- `expired`
  - : Der Schlüssel kann nicht mehr für die Entschlüsselung verwendet werden, da seine Ablaufzeit verstrichen ist.
- `released`
  - : Der Schlüssel wurde freigegeben und steht dem CDM nicht mehr zur Verfügung.
    Allerdings sind Informationen über den Schlüssel verfügbar, wie z.B. ein Nachweis über die Lizenzzerstörung.
- `output-restricted`
  - : Es gibt Ausgangsbeschränkungen, die mit dem Schlüssel basierend auf der angegebenen Richtlinie verbunden sind.
    Mit diesem Schlüssel entschlüsselte Mediendaten können von der Präsentation blockiert werden.
    Der Status zeigt an, dass die Verbindung zwischen der Quelle und dem Ausgang (zum Beispiel zwischen Ihrem Computer und einem externen Display) nicht vertrauenswürdig ist.
    Dies könnte darauf hinweisen, dass es HDCP-Versionsunterschiede zwischen der Quelle, den zwischengeschalteten Geräten und dem Ausgang gibt oder dass zwischengeschaltete Verbindungsgeräte wie HDMI-Kabel oder Videosplitter beschädigt oder nicht konform sind.
    Eine Anwendung könnte eine höhere HDCP-Version oder Inhalte verwenden, die keine so hohe Version erfordern.
    Sie sollten auch prüfen, ob zwischengeschaltete Geräte und Kabel HDCP unterstützen, fest verbunden und nicht beschädigt sind.
- `output-downscaled`
  - : Es gibt Ausgangsbeschränkungen, die mit dem Schlüssel basierend auf der angegebenen Richtlinie verbunden sind, aber diese Einschränkungen könnten gelockert werden, wenn der Inhalt in niedrigerer Qualität abgespielt wird.
    Wenn dieser Wert zurückgegeben wird, könnte eine Anwendung den Inhalt in niedrigerer Auflösung abspielen oder eine höhere HDCP-Version verwenden oder andere Inhalte, die keine so hohe HDCP-Version erfordern.
- `usable-in-future`
  - : Der Schlüssel wird in Zukunft zur Entschlüsselung nutzbar, sobald seine Startzeit erreicht ist.
- `status-pending`
  - : Der Status des Schlüssels ist noch nicht bekannt und wird ermittelt.
- `internal-error`
  - : Der Schlüssel kann derzeit aufgrund eines Fehlers im CDM nicht zur Entschlüsselung verwendet werden.
    Die Anwendung kann nichts unternehmen, um diesen Fall zu handhaben.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
