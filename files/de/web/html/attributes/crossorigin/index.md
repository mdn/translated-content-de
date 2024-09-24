---
title: "HTML-Attribut: crossorigin"
short-title: crossorigin
slug: Web/HTML/Attributes/crossorigin
l10n:
  sourceCommit: 067a40e4ed27ea6e1f3b8bbfec15cd9dc3078f4c
---

{{HTMLSidebar}}

Das **`crossorigin`**-Attribut, gültig für die Elemente {{HTMLElement("audio")}}, {{HTMLElement("img")}}, {{HTMLElement("link")}}, {{HTMLElement("script")}} und {{HTMLElement("video")}}, bietet Unterstützung für [CORS](/de/docs/Web/HTTP/CORS). Es definiert, wie das Element mit Cross-Origin-Anfragen umgeht, und ermöglicht die Konfiguration der CORS-Anfragen für die vom Element abgerufenen Daten. Je nach Element kann das Attribut ein CORS-Einstellungen-Attribut sein.

Das `crossorigin`-Inhaltsattribut auf Medienelementen ist ein CORS-Einstellungen-Attribut.

Diese Attribute sind [enumerated](/de/docs/Glossary/Enumerated) und haben die folgenden möglichen Werte:

- `anonymous`
  - : Die Anfrage verwendet CORS-Header und das Credential-Flag ist auf `'same-origin'` gesetzt. Es erfolgt kein Austausch von **Benutzer-Anmeldedaten** über Cookies, clientseitige TLS-Zertifikate oder HTTP-Authentifizierung, es sei denn, das Ziel ist derselbe Ursprung.
- `use-credentials`
  - : Die Anfrage verwendet CORS-Header, das Credential-Flag ist auf `'include'` gesetzt und **Benutzer-Anmeldedaten** werden immer einbezogen.
- `""`
  - : Das Setzen des Attributnamens auf einen leeren Wert, wie `crossorigin` oder `crossorigin=""`, entspricht `anonymous`.

Ein ungültiges Schlüsselwort und eine leere Zeichenkette werden als `anonymous`-Schlüsselwort behandelt.

Standardmäßig (d. h. wenn das Attribut nicht angegeben ist) wird CORS überhaupt nicht verwendet. Der Benutzeragent wird nicht um Erlaubnis für den vollen Zugriff auf die Ressource bitten, und im Falle einer Cross-Origin-Anfrage werden bestimmte Einschränkungen basierend auf dem betreffenden Elementtyp angewendet:

<table class="no-markdown">
  <tbody>
    <tr>
      <td class="header">Element</td>
      <td class="header">Beschränkungen</td>
    </tr>
    <tr>
      <td><code>img</code>, <code>audio</code>, <code>video</code></td>
      <td>
        Wenn die Ressource in {{HTMLElement("canvas")}} platziert wird, wird das Element als <a href="/de/docs/Web/HTML/CORS_enabled_image#security_and_tainted_canvases"><em>tainted</em></a> markiert.
      </td>
    </tr>
    <tr>
      <td><code>script</code></td>
      <td>
        Der Zugriff auf Fehlerprotokolle über {{domxref('Window.error_event', 'window.onerror')}} wird eingeschränkt.
      </td>
    </tr>
    <tr>
      <td><code>link</code></td>
      <td>
        Eine Anfrage ohne passenden <code>crossorigin</code>-Header könnte verworfen werden.
      </td>
    </tr>
  </tbody>
</table>

> [!NOTE]
> Das `crossorigin`-Attribut wird in Chromium-basierten Browsern nicht für [`rel="icon"`](/de/docs/Web/HTML/Attributes/rel#icon) unterstützt. Siehe das [offene Chromium-Problem](https://crbug.com/1121645).

### Beispiel: `crossorigin` mit dem `<script>`-Element

Sie können das folgende {{HTMLElement("script")}}-Element verwenden, um einem Browser mitzuteilen, das Skript `https://example.com/example-framework.js` ohne Benutzer-Anmeldedaten auszuführen.

```html
<script
  src="https://example.com/example-framework.js"
  crossorigin="anonymous"></script>
```

### Beispiel: Webmanifest mit Anmeldedaten

Der Wert `use-credentials` muss verwendet werden, wenn ein [Manifest](/de/docs/Web/Manifest) abgerufen wird, das Anmeldedaten erfordert, selbst wenn die Datei vom selben Ursprung stammt.

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
