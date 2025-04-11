---
title: "MediaError: code-Eigenschaft"
short-title: code
slug: Web/API/MediaError/code
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{APIRef("HTML DOM")}}

Die schreibgeschützte Eigenschaft **`MediaError.code`** gibt einen numerischen Wert zurück, der die Art des Fehlers darstellt, der bei einem Media-Element aufgetreten ist. Um eine Textzeichenfolge mit spezifischen Diagnostikinformationen zu erhalten, siehe [`MediaError.message`](/de/docs/Web/API/MediaError/message).

## Wert

Ein numerischer Wert, der die allgemeine Art des aufgetretenen Fehlers anzeigt. Die möglichen Werte sind unten bei [Media-Fehlercode-Konstanten](#media-fehlercode-konstanten) beschrieben.

### Media-Fehlercode-Konstanten

<table class="no-markdown">
  <thead>
    <tr>
      <th scope="col">Name</th>
      <th scope="col">Wert</th>
      <th scope="col">Beschreibung</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>MEDIA_ERR_ABORTED</code></td>
      <td><code>1</code></td>
      <td>
        Das Abrufen der zugehörigen Ressource wurde auf Wunsch des Benutzers abgebrochen.
      </td>
    </tr>
    <tr>
      <td><code>MEDIA_ERR_NETWORK</code></td>
      <td><code>2</code></td>
      <td>
        Es ist eine Art von Netzwerkfehler aufgetreten, die verhinderte, dass die Medien erfolgreich abgerufen werden konnten, obwohl sie zuvor verfügbar waren.
      </td>
    </tr>
    <tr>
      <td><code>MEDIA_ERR_DECODE</code></td>
      <td><code>3</code></td>
      <td>
        Obwohl zuvor festgestellt wurde, dass die Ressource nutzbar ist, trat beim Versuch, die Mediendatei zu dekodieren, ein Fehler auf.
      </td>
    </tr>
    <tr>
      <td><code>MEDIA_ERR_SRC_NOT_SUPPORTED</code></td>
      <td><code>4</code></td>
      <td>
        Die zugehörige Ressource oder das Medienanbieter-Objekt (wie z.B. ein
        [`MediaStream`](/de/docs/Web/API/MediaStream)) wurde als ungeeignet befunden.
      </td>
    </tr>
  </tbody>
</table>

## Beispiele

Dieses Beispiel erstellt ein {{HTMLElement("video")}}-Element, richtet einen Fehler-Handler dafür ein und legt dann das [`src`](/de/docs/Web/HTML/Reference/Elements/video#src)-Attribut des Elements auf die Videoressource fest, die im Element präsentiert werden soll. Der Fehler-Handler gibt eine Nachricht aus

```js
const obj = document.createElement("video");
obj.onerror = () => {
  console.error(`Error with media: ${obj.error.code}`);
};
obj.src = "https://example.com/blahblah.mp4";
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`MediaError`](/de/docs/Web/API/MediaError): Schnittstelle zur Definition der `MediaError.code`-Eigenschaft
