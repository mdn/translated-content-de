---
title: HTML-Attribut `crossorigin`
short-title: crossorigin
slug: Web/HTML/Reference/Attributes/crossorigin
l10n:
  sourceCommit: 210eb1d964922bbae94774dc6676ce92056e0423
---

Das Attribut **`crossorigin`** ist für die Elemente {{HTMLElement("audio")}}, {{HTMLElement("img")}}, {{HTMLElement("link")}}, {{HTMLElement("script")}} und {{HTMLElement("video")}} gültig. Es unterstützt [CORS](/de/docs/Web/HTTP/Guides/CORS), indem es festlegt, wie das Element ursprungsübergreifende Anfragen behandelt. Dadurch lässt sich konfigurieren, wie CORS-Anfragen für die vom Element abgerufenen Daten erfolgen. Je nach Element kann es sich um ein CORS-Einstellungsattribut handeln.

Bei Medienelementen ist das Inhaltsattribut `crossorigin` ein CORS-Einstellungsattribut.

Diese Attribute sind {{Glossary("Enumerated", "Aufzählungsattribute")}} und können folgende Werte annehmen:

- `anonymous`
  - : Die Anfrage verwendet CORS-Header ([`mode`](/de/docs/Web/API/RequestInit#mode) ist auf `cors` gesetzt) und [`credentials`](/de/docs/Web/API/RequestInit#credentials) ist auf `'same-origin'` gesetzt. Das bedeutet, dass Anmeldedaten wie Cookies, clientseitige TLS-Zertifikate und HTTP-Authentifizierungsheader nur gesendet werden, wenn das Ziel denselben Ursprung hat.
- `use-credentials`
  - : Die Anfrage verwendet CORS-Header ([`mode`](/de/docs/Web/API/RequestInit#mode) ist auf `cors` gesetzt) und [`credentials`](/de/docs/Web/API/RequestInit#credentials) ist auf `'include'` gesetzt. Anmeldedaten werden daher immer gesendet, auch bei ursprungsübergreifenden Anfragen.
- `""`
  - : Ein leerer Attributwert, etwa bei `crossorigin` oder `crossorigin=""`, entspricht `anonymous`. Ungültige Werte werden ebenfalls wie ein leerer String behandelt.

Standardmäßig, also wenn das Attribut nicht angegeben ist, werden Ressourcen im Allgemeinen ohne CORS abgerufen. Eine Ausnahme bilden [Modulskripte](/de/docs/Web/HTML/Reference/Elements/script/type#module), die immer CORS verwenden; bei ihnen hat daher nur `crossorigin="use-credentials"` eine Wirkung. Der User Agent fordert keine Berechtigung für den vollständigen Zugriff auf die Ressource an. Bei einer ursprungsübergreifenden Anfrage gelten je nach Elementtyp bestimmte Einschränkungen:

<table class="no-markdown">
  <tbody>
    <tr>
      <td class="header">Element</td>
      <td class="header">Einschränkungen</td>
    </tr>
    <tr>
      <td><code>img</code>, <code>audio</code>, <code>video</code></td>
      <td>
        Wenn die Ressource in einem {{HTMLElement("canvas")}} verwendet wird, wird das Element als <a href="/de/docs/Web/HTML/How_to/CORS_enabled_image#security_and_tainted_canvases"><em>tainted</em></a> markiert.
      </td>
    </tr>
    <tr>
      <td><code>script</code></td>
      <td>
        Der Zugriff auf die Fehlerprotokollierung über [`window.onerror`](/de/docs/Web/API/Window/error_event) ist eingeschränkt.
      </td>
    </tr>
    <tr>
      <td><code>link</code></td>
      <td>
        Eine Anfrage ohne geeigneten <code>crossorigin</code>-Header kann verworfen werden.
      </td>
    </tr>
  </tbody>
</table>

> [!NOTE]
> Das Attribut `crossorigin` wird für [`rel="icon"`](/de/docs/Web/HTML/Reference/Attributes/rel#icon) in Chromium-basierten Browsern nicht unterstützt. Siehe den [offenen Chromium-Issue](https://crbug.com/1121645).

## Beispiele

### `crossorigin` mit dem Element `<script>`

Mit dem folgenden {{HTMLElement("script")}}-Element können Sie einen Browser anweisen, das Skript `https://example.com/example-framework.js` auszuführen, ohne Benutzeranmeldedaten zu senden.

```html
<script
  src="https://example.com/example-framework.js"
  crossorigin="anonymous"></script>
```

### Webmanifest mit Anmeldedaten

Der Wert `use-credentials` muss verwendet werden, wenn ein [Manifest](/de/docs/Web/Progressive_web_apps/Manifest) abgerufen wird, das Anmeldedaten erfordert – auch wenn die Datei vom selben Ursprung stammt.

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
