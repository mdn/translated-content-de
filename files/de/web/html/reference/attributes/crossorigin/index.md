---
title: "HTML-Attribut: crossorigin"
short-title: crossorigin
slug: Web/HTML/Reference/Attributes/crossorigin
l10n:
  sourceCommit: 0754cd805a8e010d2e3a2a065f634a3bcf358252
---

Das **`crossorigin`**-Attribut, gültig für die {{HTMLElement("audio")}}, {{HTMLElement("img")}}, {{HTMLElement("link")}}, {{HTMLElement("script")}} und {{HTMLElement("video")}} Elemente, bietet Unterstützung für [CORS](/de/docs/Web/HTTP/Guides/CORS), indem es definiert, wie das Element mit Anfragen zwischen verschiedenen Ursprüngen umgeht. Dadurch wird es ermöglicht, die CORS-Anfragen für die vom Element abgerufenen Daten zu konfigurieren. Abhängig vom Element kann das Attribut ein CORS-Einstellungselement sein.

Das `crossorigin`-Inhaltsattribut bei Media-Elementen ist ein CORS-Einstellungselement.

Diese Attribute sind {{Glossary("Enumerated", "aufzählbar")}} und haben die folgenden möglichen Werte:

- `anonymous`
  - : Anfrage verwendet CORS-Header und das Credentials-Flag ist auf `'same-origin'` gesetzt. Es erfolgt kein Austausch von **Benutzeranmeldeinformationen** über Cookies, Client-seitige TLS-Zertifikate oder HTTP-Authentifizierung, es sei denn, das Ziel ist der gleiche Ursprung.
- `use-credentials`
  - : Anfrage verwendet CORS-Header, Credentials-Flag ist auf `'include'` gesetzt und **Benutzeranmeldeinformationen** werden immer eingeschlossen.
- `""`
  - : Wenn der Attributname auf einen leeren Wert gesetzt wird, wie `crossorigin` oder `crossorigin=""`, entspricht dies `anonymous`.

Ein ungültiges Schlüsselwort und eine leere Zeichenkette werden als das Schlüsselwort `anonymous` gehandhabt.

Standardmäßig (also wenn das Attribut nicht angegeben ist) wird CORS überhaupt nicht verwendet. Der Benutzer-Agent wird keine Erlaubnis für den vollen Zugriff auf die Ressource anfordern, und im Falle einer Anfrage über verschiedene Ursprünge werden bestimmte Einschränkungen basierend auf dem jeweiligen Elementtyp angewendet:

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
        Anfragen ohne entsprechendes <code>crossorigin</code>-Header können verworfen werden.
      </td>
    </tr>
  </tbody>
</table>

> [!NOTE]
> Das `crossorigin`-Attribut wird für [`rel="icon"`](/de/docs/Web/HTML/Reference/Attributes/rel#icon) in Browsern auf Chromium-Basis nicht unterstützt. Siehe das [offene Chromium-Problem](https://crbug.com/1121645).

### Beispiel: `crossorigin` mit dem `<script>`-Element

Sie können das folgende {{HTMLElement("script")}}-Element verwenden, um einem Browser mitzuteilen, das `https://example.com/example-framework.js` Skript ohne das Senden von Benutzeranmeldeinformationen auszuführen.

```html
<script
  src="https://example.com/example-framework.js"
  crossorigin="anonymous"></script>
```

### Beispiel: Web-Manifest mit Anmeldedaten

Der Wert `use-credentials` muss verwendet werden, wenn ein [Manifest](/de/docs/Web/Progressive_web_apps/Manifest) abgerufen wird, das Anmeldedaten erfordert, auch wenn sich die Datei vom gleichen Ursprung stammt.

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
