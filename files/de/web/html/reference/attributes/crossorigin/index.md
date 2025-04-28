---
title: "HTML-Attribut: crossorigin"
short-title: crossorigin
slug: Web/HTML/Reference/Attributes/crossorigin
l10n:
  sourceCommit: c6cab7f1aa7dc9f3495486a5b46020db320101cf
---

{{HTMLSidebar}}

Das **`crossorigin`**-Attribut, gültig für die {{HTMLElement("audio")}}, {{HTMLElement("img")}}, {{HTMLElement("link")}}, {{HTMLElement("script")}}, und {{HTMLElement("video")}}-Elemente, unterstützt [CORS](/de/docs/Web/HTTP/Guides/CORS) und definiert, wie das Element mit Cross-Origin-Anfragen umgeht. Dadurch wird die Konfiguration von CORS-Anfragen für die vom Element geladenen Daten ermöglicht. Je nach Element kann das Attribut ein CORS-Einstellungsattribut sein.

Das `crossorigin`-Inhaltsattribut für Medienelemente ist ein CORS-Einstellungsattribut.

Diese Attribute sind {{Glossary("Enumerated", "enumeriert")}} und haben die folgenden möglichen Werte:

- `anonymous`
  - : Die Anfrage verwendet CORS-Header und das `credentials`-Flag ist auf `'same-origin'` gesetzt. Es erfolgt kein Austausch von **Benutzeranmeldeinformationen** über Cookies, clientseitige TLS-Zertifikate oder HTTP-Authentifizierung, es sei denn, das Ziel ist derselbe Ursprung.
- `use-credentials`
  - : Die Anfrage verwendet CORS-Header, das `credentials`-Flag ist auf `'include'` gesetzt und **Benutzeranmeldeinformationen** werden immer einbezogen.
- `""`
  - : Wenn der Attributname auf einen leeren Wert gesetzt wird, wie `crossorigin` oder `crossorigin=""`, ist dies dasselbe wie `anonymous`.

Ein ungültiges Schlüsselwort und ein leerer String werden als das `anonymous`-Schlüsselwort behandelt.

Standardmäßig (also wenn das Attribut nicht angegeben ist) wird CORS überhaupt nicht verwendet. Der Nutzeragent wird nicht um Erlaubnis für den vollen Zugriff auf die Ressource bitten, und im Falle einer Cross-Origin-Anfrage werden Einschränkungen basierend auf dem betreffenden Elementtyp angewendet:

<table class="no-markdown">
  <tbody>
    <tr>
      <td class="header">Element</td>
      <td class="header">Einschränkungen</td>
    </tr>
    <tr>
      <td><code>img</code>, <code>audio</code>, <code>video</code></td>
      <td>
        Wenn die Ressource in {{HTMLElement("canvas")}} platziert wird, wird das Element als <a href="/de/docs/Web/HTML/How_to/CORS_enabled_image#security_and_tainted_canvases"><em>tainted</em></a> markiert.
      </td>
    </tr>
    <tr>
      <td><code>script</code></td>
      <td>
        Der Zugriff auf die Fehlerprotokollierung über [`window.onerror`](/de/docs/Web/API/Window/error_event) wird eingeschränkt.
      </td>
    </tr>
    <tr>
      <td><code>link</code></td>
      <td>
        Eine Anfrage ohne geeignetes <code>crossorigin</code>-Header könnte verworfen werden.
      </td>
    </tr>
  </tbody>
</table>

> [!NOTE]
> Das `crossorigin`-Attribut wird nicht für [`rel="icon"`](/de/docs/Web/HTML/Reference/Attributes/rel#icon) in Chromium-basierten Browsern unterstützt. Siehe das [offene Chromium-Thema](https://crbug.com/1121645).

### Beispiel: `crossorigin` mit dem `<script>`-Element

Sie können das folgende {{HTMLElement("script")}}-Element verwenden, um einem Browser mitzuteilen, das `https://example.com/example-framework.js`-Skript ohne Senden von Benutzeranmeldeinformationen auszuführen.

```html
<script
  src="https://example.com/example-framework.js"
  crossorigin="anonymous"></script>
```

### Beispiel: Webmanifest mit Anmeldeinformationen

Der `use-credentials`-Wert muss verwendet werden, wenn ein [Manifest](/de/docs/Web/Progressive_web_apps/Manifest) abgerufen wird, das Anmeldeinformationen erfordert, selbst wenn die Datei aus demselben Ursprung stammt.

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
