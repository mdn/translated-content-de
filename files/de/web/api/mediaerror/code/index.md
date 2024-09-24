---
title: "MediaError: code-Eigenschaft"
short-title: code
slug: Web/API/MediaError/code
l10n:
  sourceCommit: eab4066e72d5478de920e4020e5db71214dcffa6
---

{{APIRef("HTML DOM")}}

Die schreibgeschützte Eigenschaft **`MediaError.code`** gibt einen numerischen Wert zurück, der die Art des Fehlers repräsentiert, der bei einem Mediaelement aufgetreten ist. Um eine Textzeichenfolge mit spezifischen Diagnoseinformationen zu erhalten, siehe {{domxref("MediaError.message")}}.

## Wert

Ein numerischer Wert, der den allgemeinen Fehlertyp angibt, der aufgetreten ist. Die möglichen Werte sind unten beschrieben, in [Medien-Fehlercode-Konstanten](#medien-fehlercode-konstanten).

### Medien-Fehlercode-Konstanten

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
        Das Abrufen der zugehörigen Ressource wurde durch den Wunsch des
        Benutzers abgebrochen.
      </td>
    </tr>
    <tr>
      <td><code>MEDIA_ERR_NETWORK</code></td>
      <td><code>2</code></td>
      <td>
        Es ist eine Art von Netzwerkfehler aufgetreten, der verhinderte, dass
        die Medien erfolgreich abgerufen wurden, obwohl sie zuvor verfügbar
        waren.
      </td>
    </tr>
    <tr>
      <td><code>MEDIA_ERR_DECODE</code></td>
      <td><code>3</code></td>
      <td>
        Obwohl zuvor festgestellt wurde, dass die Ressource nutzbar ist, trat
        ein Fehler beim Versuch auf, die Medienressource zu dekodieren, was
        zu einem Fehler führte.
      </td>
    </tr>
    <tr>
      <td><code>MEDIA_ERR_SRC_NOT_SUPPORTED</code></td>
      <td><code>4</code></td>
      <td>
        Die zugehörige Ressource oder das Medienanbieterobjekt (wie ein
        {{domxref("MediaStream")}}) wurde als ungeeignet befunden.
      </td>
    </tr>
  </tbody>
</table>

## Beispiele

Dieses Beispiel erstellt ein {{HTMLElement("video")}}-Element, richtet einen Fehlerbehandler dafür ein und legt dann das [`src`](/de/docs/Web/HTML/Element/video#src)-Attribut des Elements auf die Videoressource fest, die im Element angezeigt werden soll. Der Fehlerbehandler gibt eine Nachricht aus

```js
const obj = document.createElement("video");
obj.onerror = () => {
  console.error(`Error with media: ${obj.error.code}`);
};
obj.src = "https://example.com/blahblah.mp4";
```

## Spezifikationen

{{Specifications}}

## Browserkompatibilität

{{Compat}}

## Siehe auch

- {{domxref("MediaError")}}: Schnittstelle zur Definition der `MediaError.code`-Eigenschaft
