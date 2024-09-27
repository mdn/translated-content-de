---
title: "MediaError: code-Eigenschaft"
short-title: code
slug: Web/API/MediaError/code
l10n:
  sourceCommit: eab4066e72d5478de920e4020e5db71214dcffa6
---

{{APIRef("HTML DOM")}}

Die schreibgeschützte Eigenschaft **`MediaError.code`** gibt einen numerischen Wert zurück, der die Art des Fehlers angibt, der bei einem Medien-Element aufgetreten ist. Um einen Textstring mit spezifischen Diagnoseinformationen zu erhalten, siehe [`MediaError.message`](/de/docs/Web/API/MediaError/message).

## Wert

Ein numerischer Wert, der den allgemeinen Fehlertyp angibt, der aufgetreten ist. Die möglichen Werte werden unten in den [Medienfehler-Codekonstanten](#medienfehler-codekonstanten) beschrieben.

### Medienfehler-Codekonstanten

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
        Das Abrufen der zugehörigen Ressource wurde auf Wunsch des Nutzers
        abgebrochen.
      </td>
    </tr>
    <tr>
      <td><code>MEDIA_ERR_NETWORK</code></td>
      <td><code>2</code></td>
      <td>
        Eine Art von Netzwerkfehler trat auf, der das erfolgreiche Abrufen der Medien verhinderte, obwohl sie zuvor verfügbar waren.
      </td>
    </tr>
    <tr>
      <td><code>MEDIA_ERR_DECODE</code></td>
      <td><code>3</code></td>
      <td>
        Obwohl zuvor festgestellt wurde, dass sie nutzbar sind, trat beim Versuch, die Medienressource zu dekodieren, ein Fehler auf.
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

Dieses Beispiel erstellt ein {{HTMLElement("video")}}-Element, richtet einen Fehlerbehandler dafür ein und setzt dann das [`src`](/de/docs/Web/HTML/Element/video#src)-Attribut des Elements auf die Videoressource, die im Element angezeigt werden soll. Der Fehlerbehandler gibt eine Nachricht aus.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`MediaError`](/de/docs/Web/API/MediaError): Schnittstelle, die verwendet wird, um die `MediaError.code`-Eigenschaft zu definieren
