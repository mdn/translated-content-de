---
title: "HTML-Attribut: crossorigin"
short-title: crossorigin
slug: Web/HTML/Reference/Attributes/crossorigin
l10n:
  sourceCommit: 0c81cbce5f95a0be935724bcd936f5592774eb3a
---

Das **`crossorigin`**-Attribut, das auf den {{HTMLElement("audio")}}, {{HTMLElement("img")}}, {{HTMLElement("link")}}, {{HTMLElement("script")}} und {{HTMLElement("video")}} Elementen gültig ist, unterstützt [CORS](/de/docs/Web/HTTP/Guides/CORS), indem es definiert, wie das Element mit Cross-Origin-Anfragen umgeht, und ermöglicht so die Konfiguration der CORS-Anfragen für die abgerufenen Daten des Elements. Abhängig vom Element kann das Attribut ein CORS-Einstellungselement sein.

Das `crossorigin`-Inhaltsattribut auf Medienelementen ist ein CORS-Einstellungselement.

Diese Attribute sind {{Glossary("Enumerated", "aufgezählt")}} und haben die folgenden möglichen Werte:

- `anonymous`
  - : Die Anfrage verwendet CORS-Header und das Credentials-Flag ist auf `'same-origin'` gesetzt. Es findet kein Austausch von **Benutzeranmeldeinformationen** über Cookies, clientseitige TLS-Zertifikate oder HTTP-Authentifizierung statt, es sei denn, das Ziel ist der gleiche Ursprung.
- `use-credentials`
  - : Die Anfrage verwendet CORS-Header, das Credentials-Flag ist auf `'include'` gesetzt und **Benutzeranmeldeinformationen** werden immer eingeschlossen.
- `""`
  - : Das Attribut auf einen leeren Wert setzen, wie `crossorigin` oder `crossorigin=""`, ist gleichbedeutend mit `anonymous`.

Ein ungültiges Schlüsselwort und ein leerer String werden als das Schlüsselwort `anonymous` behandelt.

Standardmäßig (also wenn das Attribut nicht angegeben ist) wird CORS überhaupt nicht verwendet. Der Benutzeragent fordert keine Erlaubnis für den vollen Zugriff auf die Ressource an und im Fall einer Cross-Origin-Anfrage werden bestimmte Einschränkungen angewendet, basierend auf dem betroffenen Elementtyp:

<table class="no-markdown">
  <tbody>
    <tr>
      <td class="header">Element</td>
      <td class="header">Einschränkungen</td>
    </tr>
    <tr>
      <td><code>img</code>, <code>audio</code>, <code>video</code></td>
      <td>
        Wenn die Ressource im {{HTMLElement("canvas")}} platziert wird, wird das Element als <a href="/de/docs/Web/HTML/How_to/CORS_enabled_image#security_and_tainted_canvases"><em>verunreinigt</em></a> markiert.
      </td>
    </tr>
    <tr>
      <td><code>script</code></td>
      <td>
        Der Zugriff auf Fehlerprotokollierung über [`window.onerror`](/de/docs/Web/API/Window/error_event) wird eingeschränkt.
      </td>
    </tr>
    <tr>
      <td><code>link</code></td>
      <td>
        Eine Anfrage ohne passenden <code>crossorigin</code>-Header kann verworfen werden.
      </td>
    </tr>
  </tbody>
</table>

> [!NOTE]
> Das `crossorigin`-Attribut wird von Chromium-basierten Browsern für [`rel="icon"`](/de/docs/Web/HTML/Reference/Attributes/rel#icon) nicht unterstützt. Siehe das [offene Chromium-Problem](https://crbug.com/1121645).

## Beispiele

### `crossorigin` mit dem `<script>`-Element

Sie können das folgende {{HTMLElement("script")}}-Element verwenden, um einem Browser mitzuteilen, das `https://example.com/example-framework.js`-Skript auszuführen, ohne Benutzeranmeldeinformationen zu senden.

```html
<script
  src="https://example.com/example-framework.js"
  crossorigin="anonymous"></script>
```

### Webmanifest mit Anmeldeinformationen

Der Wert `use-credentials` muss verwendet werden, wenn ein [Manifest](/de/docs/Web/Progressive_web_apps/Manifest) abgerufen wird, das Anmeldeinformationen erfordert, selbst wenn die Datei vom gleichen Ursprung stammt.

```html
<link rel="manifest" href="/app.webmanifest" crossorigin="use-credentials" />
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Cross-Origin Resource Sharing (CORS)](/de/docs/Web/HTTP/Guides/CORS)
- [HTML-Attribut: `rel`](/de/docs/Web/HTML/Reference/Attributes/rel)
