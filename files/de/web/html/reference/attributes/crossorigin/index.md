---
title: "HTML-Attribut: crossorigin"
short-title: crossorigin
slug: Web/HTML/Reference/Attributes/crossorigin
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{HTMLSidebar}}

Das **`crossorigin`**-Attribut, das bei den {{HTMLElement("audio")}}, {{HTMLElement("img")}}, {{HTMLElement("link")}}, {{HTMLElement("script")}} und {{HTMLElement("video")}} Elementen gültig ist, bietet Unterstützung für [CORS](/de/docs/Web/HTTP/Guides/CORS). Es definiert, wie das Element Cross-Origin-Anfragen behandelt und ermöglicht somit die Konfiguration der CORS-Anfragen für die vom Element abgerufenen Daten. Abhängig vom Element kann das Attribut ein CORS-Einstellungsattribut sein.

Das `crossorigin`-Inhaltsattribut bei Medienelementen ist ein CORS-Einstellungsattribut.

Diese Attribute sind {{Glossary("Enumerated", "aufgezählt")}} und haben die folgenden möglichen Werte:

- `anonymous`
  - : Die Anfrage verwendet CORS-Header und das Anmeldeinformationen-Flag ist auf `'same-origin'` gesetzt. Es erfolgt kein Austausch von **Benutzeranmeldedaten** über Cookies, clientseitige TLS-Zertifikate oder HTTP-Authentifizierung, es sei denn, das Ziel hat denselben Ursprung.
- `use-credentials`
  - : Die Anfrage verwendet CORS-Header, das Anmeldeinformationen-Flag ist auf `'include'` gesetzt, und **Benutzeranmeldedaten** werden immer einbezogen.
- `""`
  - : Wenn der Attributname auf einen leeren Wert gesetzt wird, wie `crossorigin` oder `crossorigin=""`, ist dies gleichbedeutend mit `anonymous`.

Ein ungültiges Schlüsselwort und eine leere Zeichenfolge werden als das Schlüsselwort `anonymous` behandelt.

Standardmäßig (das heißt, wenn das Attribut nicht angegeben ist) wird CORS überhaupt nicht verwendet. Der Benutzeragent wird keine Erlaubnis für den vollen Zugriff auf die Ressource anfordern, und im Fall einer Cross-Origin-Anfrage werden bestimmte Einschränkungen basierend auf dem betreffenden Elementtyp angewendet:

<table class="no-markdown">
  <tbody>
    <tr>
      <td class="header">Element</td>
      <td class="header">Einschränkungen</td>
    </tr>
    <tr>
      <td><code>img</code>, <code>audio</code>, <code>video</code></td>
      <td>
        Wenn die Ressource in einer {{HTMLElement("canvas")}} platziert wird, wird das Element als <a href="/de/docs/Web/HTML/How_to/CORS_enabled_image#security_and_tainted_canvases"><em>verunreinigt</em></a> markiert.
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
        Eine Anfrage ohne ein entsprechendes <code>crossorigin</code>-Header kann verworfen werden.
      </td>
    </tr>
  </tbody>
</table>

> [!NOTE]
> Das `crossorigin`-Attribut wird für [`rel="icon"`](/de/docs/Web/HTML/Reference/Attributes/rel#icon) in Chromium-basierten Browsern nicht unterstützt. Siehe das [offene Chromium-Problem](https://crbug.com/1121645).

### Beispiel: `crossorigin` mit dem `<script>`-Element

Sie können das folgende {{HTMLElement("script")}}-Element verwenden, um einem Browser mitzuteilen, dass er das Skript `https://example.com/example-framework.js` ohne das Senden von Benutzeranmeldedaten ausführen soll.

```html
<script
  src="https://example.com/example-framework.js"
  crossorigin="anonymous"></script>
```

### Beispiel: Web-Manifest mit Anmeldedaten

Der Wert `use-credentials` muss verwendet werden, wenn ein [Manifest](/de/docs/Web/Progressive_web_apps/Manifest) abgerufen wird, das Anmeldedaten erfordert, auch wenn die Datei vom selben Ursprung stammt.

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

{{QuickLinksWithSubpages("/de/docs/Web/HTML/")}}
