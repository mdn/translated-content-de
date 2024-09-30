---
title: "HTML-Attribut: crossorigin"
short-title: crossorigin
slug: Web/HTML/Attributes/crossorigin
l10n:
  sourceCommit: 067a40e4ed27ea6e1f3b8bbfec15cd9dc3078f4c
---

{{HTMLSidebar}}

Das **`crossorigin`**-Attribut, gültig für die {{HTMLElement("audio")}}, {{HTMLElement("img")}}, {{HTMLElement("link")}}, {{HTMLElement("script")}} und {{HTMLElement("video")}} Elemente, bietet Unterstützung für [CORS](/de/docs/Web/HTTP/CORS). Es definiert, wie das Element Cross-Origin-Anfragen behandelt, und ermöglicht so die Konfiguration der CORS-Anfragen für die abgerufenen Daten des Elements. Je nach Element kann das Attribut ein CORS-Einstellungsattribut sein.

Das `crossorigin`-Inhaltsattribut bei Medienelementen ist ein CORS-Einstellungsattribut.

Diese Attribute sind [aufgezählt](/de/docs/Glossary/Enumerated) und haben die folgenden möglichen Werte:

- `anonymous`
  - : Die Anfrage verwendet CORS-Header und das Berechtigungsflag ist auf `'same-origin'` gesetzt. Es erfolgt kein Austausch von **Benutzeranmeldeinformationen** über Cookies, clientseitige TLS-Zertifikate oder HTTP-Authentifizierung, es sei denn, das Ziel ist derselbe Ursprung.
- `use-credentials`
  - : Die Anfrage verwendet CORS-Header, das Berechtigungsflag ist auf `'include'` gesetzt und **Benutzeranmeldeinformationen** werden immer eingeschlossen.
- `""`
  - : Das Setzen des Attributnamens auf einen leeren Wert, wie `crossorigin` oder `crossorigin=""`, entspricht `anonymous`.

Ein ungültiges Schlüsselwort und ein leerer String werden als das Schlüsselwort `anonymous` behandelt.

Standardmäßig (das heißt, wenn das Attribut nicht angegeben ist) wird CORS überhaupt nicht verwendet. Der Benutzeragent wird keine Erlaubnis für den vollständigen Zugriff auf die Ressource anfordern, und im Fall einer Cross-Origin-Anfrage werden bestimmte Einschränkungen basierend auf dem betreffenden Elementtyp angewendet:

<table class="no-markdown">
  <tbody>
    <tr>
      <td class="header">Element</td>
      <td class="header">Einschränkungen</td>
    </tr>
    <tr>
      <td><code>img</code>, <code>audio</code>, <code>video</code></td>
      <td>
        Wenn die Ressource in einem {{HTMLElement("canvas")}} platziert wird, wird das Element als <a href="/de/docs/Web/HTML/CORS_enabled_image#security_and_tainted_canvases"><em>verunreinigt</em></a> markiert.
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
        Eine Anfrage ohne passenden <code>crossorigin</code>-Header kann verworfen werden.
      </td>
    </tr>
  </tbody>
</table>

> [!NOTE]
> Das `crossorigin`-Attribut wird für [`rel="icon"`](/de/docs/Web/HTML/Attributes/rel#icon) in auf Chromium basierten Browsern nicht unterstützt. Siehe das [offene Chromium-Problem](https://crbug.com/1121645).

### Beispiel: `crossorigin` mit dem `<script>`-Element

Sie können das folgende {{HTMLElement("script")}}-Element verwenden, um einem Browser mitzuteilen, das Skript `https://example.com/example-framework.js` auszuführen, ohne Benutzeranmeldeinformationen zu senden.

```html
<script
  src="https://example.com/example-framework.js"
  crossorigin="anonymous"></script>
```

### Beispiel: Web-Manifest mit Anmeldeinformationen

Der Wert `use-credentials` muss verwendet werden, wenn ein [Manifest](/de/docs/Web/Manifest) abgerufen wird, das Anmeldeinformationen erfordert, selbst wenn die Datei vom selben Ursprung kommt.

```html
<link rel="manifest" href="/app.webmanifest" crossorigin="use-credentials" />
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Cross-Origin Resource Sharing (CORS)](/de/docs/Web/HTTP/CORS)
- [HTML-Attribut: `rel`](/de/docs/Web/HTML/Attributes/rel)

{{QuickLinksWithSubpages("/de/docs/Web/HTML/")}}
