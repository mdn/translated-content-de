---
title: "`crossorigin` HTML-Attribut"
short-title: crossorigin
slug: Web/HTML/Reference/Attributes/crossorigin
l10n:
  sourceCommit: b50ed7ac1c2ca21b4b5cfb594474a17da3f2e6c2
---

Das **`crossorigin`** Attribut, das für die {{HTMLElement("audio")}}, {{HTMLElement("img")}}, {{HTMLElement("link")}}, {{HTMLElement("script")}} und {{HTMLElement("video")}} Elemente gültig ist, bietet Unterstützung für [CORS](/de/docs/Web/HTTP/Guides/CORS). Es definiert, wie das Element Cross-Origin-Anfragen behandelt und ermöglicht dadurch die Konfiguration der CORS-Anfragen für die vom Element abgerufenen Daten. Abhängig vom Element kann das Attribut ein CORS-Einstellungen-Attribut sein.

Das `crossorigin` Inhaltsattribut bei Medienelementen ist ein CORS-Einstellungen-Attribut.

Diese Attribute sind {{Glossary("Enumerated", "aufgezählt")}} und haben die folgenden möglichen Werte:

- `anonymous`
  - : Die Anfrage verwendet CORS-Header und das Credential-Flag ist auf `'same-origin'` gesetzt. Es erfolgt kein Austausch von **Benutzeranmeldeinformationen** über Cookies, clientseitige TLS-Zertifikate oder HTTP-Authentifizierung, es sei denn, das Ziel ist der gleiche Ursprung.
- `use-credentials`
  - : Die Anfrage verwendet CORS-Header, das Credential-Flag ist auf `'include'` gesetzt und **Benutzeranmeldeinformationen** werden immer einbezogen.
- `""`
  - : Das Setzen des Attributnamens auf einen leeren Wert, wie `crossorigin` oder `crossorigin=""`, entspricht `anonymous`.

Ein ungültiges Schlüsselwort und ein leerer String werden als `anonymous` Schlüsselwort behandelt.

Standardmäßig (d.h. wenn das Attribut nicht angegeben ist) wird CORS überhaupt nicht verwendet. Der Benutzeragent wird nicht um Erlaubnis für den vollen Zugriff auf die Ressource bitten, und im Falle einer Cross-Origin-Anfrage werden bestimmte Einschränkungen basierend auf dem betreffenden Elementtyp angewendet:

<table class="no-markdown">
  <tbody>
    <tr>
      <td class="header">Element</td>
      <td class="header">Einschränkungen</td>
    </tr>
    <tr>
      <td><code>img</code>, <code>audio</code>, <code>video</code></td>
      <td>
        Wenn die Ressource in {{HTMLElement("canvas")}} platziert wird, wird das Element als <a href="/de/docs/Web/HTML/How_to/CORS_enabled_image#security_and_tainted_canvases"><em>verunreinigt</em></a> markiert.
      </td>
    </tr>
    <tr>
      <td><code>script</code></td>
      <td>
        Der Zugriff auf Error-Logging über [`window.onerror`](/de/docs/Web/API/Window/error_event) wird eingeschränkt.
      </td>
    </tr>
    <tr>
      <td><code>link</code></td>
      <td>
        Eine Anfrage ohne entsprechendes <code>crossorigin</code> Header könnte verworfen werden.
      </td>
    </tr>
  </tbody>
</table>

> [!NOTE]
> Das `crossorigin` Attribut wird in Chromium-basierten Browsern nicht für [`rel="icon"`](/de/docs/Web/HTML/Reference/Attributes/rel#icon) unterstützt. Siehe das [offene Chromium-Problem](https://crbug.com/1121645).

## Beispiele

### `crossorigin` mit dem `<script>` Element

Sie können das folgende {{HTMLElement("script")}} Element verwenden, um einem Browser mitzuteilen, das Skript `https://example.com/example-framework.js` auszuführen, ohne Benutzer-Anmeldeinformationen zu senden.

```html
<script
  src="https://example.com/example-framework.js"
  crossorigin="anonymous"></script>
```

### Web Manifest mit Anmeldeinformationen

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
