---
title: "HTML-Attribut: crossorigin"
short-title: crossorigin
slug: Web/HTML/Attributes/crossorigin
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{HTMLSidebar}}

Das **`crossorigin`** Attribut, gültig für die {{HTMLElement("audio")}}, {{HTMLElement("img")}}, {{HTMLElement("link")}}, {{HTMLElement("script")}} und {{HTMLElement("video")}} Elemente, unterstützt [CORS](/de/docs/Web/HTTP/Guides/CORS) und bestimmt, wie das Element mit Cross-Origin-Anfragen umgeht, wodurch die Konfiguration von CORS-Anfragen für die abgerufenen Daten des Elements ermöglicht wird. Abhängig vom Element kann das Attribut ein CORS-Einstellungen-Attribut sein.

Das `crossorigin` Inhaltsattribut bei Medienelementen ist ein CORS-Einstellungen-Attribut.

Diese Attribute sind {{Glossary("Enumerated", "aufgezählt")}} und haben die folgenden möglichen Werte:

- `anonymous`
  - : Die Anfrage verwendet CORS-Header und das Anmelde-Flag ist auf `'same-origin'` gesetzt. Es findet kein Austausch von **Benutzeranmeldedaten** über Cookies, clientseitige TLS-Zertifikate oder HTTP-Authentifizierung statt, es sei denn, das Ziel ist derselbe Ursprung.
- `use-credentials`
  - : Die Anfrage verwendet CORS-Header, das Anmelde-Flag ist auf `'include'` gesetzt und **Benutzeranmeldedaten** werden immer eingeschlossen.
- `""`
  - : Wenn der Attributname auf einen leeren Wert gesetzt wird, wie `crossorigin` oder `crossorigin=""`, entspricht dies `anonymous`.

Ein ungültiges Schlüsselwort und ein leerer String werden als `anonymous` Schlüsselwort behandelt.

Standardmäßig (d. h. wenn das Attribut nicht angegeben ist) wird CORS überhaupt nicht verwendet. Der Benutzeragent wird nicht um Erlaubnis für den vollen Zugriff auf die Ressource bitten und im Falle einer Cross-Origin-Anfrage werden bestimmte Einschränkungen basierend auf dem betreffenden Elementtyp angewendet:

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
        Der Zugriff auf Fehlerprotokollierung über [`window.onerror`](/de/docs/Web/API/Window/error_event) wird eingeschränkt.
      </td>
    </tr>
    <tr>
      <td><code>link</code></td>
      <td>
        Anfragen ohne geeignetes <code>crossorigin</code> Header können verworfen werden.
      </td>
    </tr>
  </tbody>
</table>

> [!NOTE]
> Das `crossorigin` Attribut wird für [`rel="icon"`](/de/docs/Web/HTML/Attributes/rel#icon) in Chromium-basierten Browsern nicht unterstützt. Siehe das [offene Chromium-Problem](https://crbug.com/1121645).

### Beispiel: `crossorigin` mit dem `<script>` Element

Sie können das folgende {{HTMLElement("script")}} Element verwenden, um einem Browser mitzuteilen, das Skript `https://example.com/example-framework.js` auszuführen, ohne Benutzeranmeldedaten zu senden.

```html
<script
  src="https://example.com/example-framework.js"
  crossorigin="anonymous"></script>
```

### Beispiel: Webmanifest mit Anmeldedaten

Der Wert `use-credentials` muss verwendet werden, wenn ein [Manifest](/de/docs/Web/Progressive_web_apps/Manifest) abgerufen wird, das Anmeldedaten erfordert, selbst wenn die Datei vom selben Ursprung stammt.

```html
<link rel="manifest" href="/app.webmanifest" crossorigin="use-credentials" />
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Cross-Origin Resource Sharing (CORS)](/de/docs/Web/HTTP/Guides/CORS)
- [HTML-Attribut: `rel`](/de/docs/Web/HTML/Attributes/rel)

{{QuickLinksWithSubpages("/de/docs/Web/HTML/")}}
