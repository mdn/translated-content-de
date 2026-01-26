---
title: "<area>: Das Image Map Area-Element"
slug: Web/HTML/Reference/Elements/area
l10n:
  sourceCommit: 995f8bcede5aa8ca40921b030deef7524ce9e1a3
---

Das **`<area>`** [HTML](/de/docs/Web/HTML)-Element definiert einen Bereich innerhalb einer Bildkarte, der vordefinierte klickbare Bereiche hat. Eine _Bildkarte_ ermöglicht es, geometrische Bereiche auf einem Bild mit {{Glossary("Hyperlink", "Hypertext-Links")}} zu verknüpfen.

Dieses Element wird nur innerhalb eines {{HTMLElement("map")}}-Elements verwendet.

{{InteractiveExample("HTML Demo: &lt;area&gt;", "tabbed-taller")}}

```html interactive-example
<map name="infographic">
  <area
    shape="poly"
    coords="129,0,260,95,129,138"
    href="https://developer.mozilla.org/docs/Web/HTTP"
    alt="HTTP" />
  <area
    shape="poly"
    coords="260,96,209,249,130,138"
    href="https://developer.mozilla.org/docs/Web/HTML"
    alt="HTML" />
  <area
    shape="poly"
    coords="209,249,49,249,130,139"
    href="https://developer.mozilla.org/docs/Web/JavaScript"
    alt="JavaScript" />
  <area
    shape="poly"
    coords="48,249,0,96,129,138"
    href="https://developer.mozilla.org/docs/Web/API"
    alt="Web APIs" />
  <area
    shape="poly"
    coords="0,95,128,0,128,137"
    href="https://developer.mozilla.org/docs/Web/CSS"
    alt="CSS" />
</map>
<img
  usemap="#infographic"
  src="/shared-assets/images/examples/mdn-info.png"
  alt="MDN infographic" />
```

```css interactive-example
img {
  display: block;
  margin: 0 auto;
  width: 260px;
  height: 260px;
}
```

## Attribute

Zu den Attributen dieses Elements gehören die [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes).

- `alt`
  - : Eine alternative Textzeichenfolge, die in Browsern angezeigt wird, die keine Bilder darstellen.
    Der Text sollte so formuliert sein, dass er dem Benutzer dieselbe Art von Auswahl bietet, wie das Bild, wenn es ohne den alternativen Text angezeigt wird.
    Dieses Attribut ist nur erforderlich, wenn das [`href`](#href)-Attribut verwendet wird.
- `coords`
  - : Das `coords`-Attribut beschreibt die Koordinaten des `shape`-Attributs in Größe, Form und Platzierung eines `<area>`.
    Dieses Attribut darf nicht verwendet werden, wenn `shape` auf `default` gesetzt ist.
    - `rect`: Der Wert ist `x1,y1,x2,y2`.
      Der Wert gibt die Koordinaten der oberen linken und unteren rechten Ecke des Rechtecks an.
      Zum Beispiel, in `<area shape="rect" coords="0,0,253,27" href="#" target="_blank" alt="Mozilla">` sind die Koordinaten `0,0` und `253,27`, die jeweils die obere linke und untere rechte Ecke des Rechtecks anzeigen.
    - `circle`: Der Wert ist `x,y,Radius`. Der Wert spezifiziert die Koordinaten des Kreismittelpunkts und den Radius.
      Zum Beispiel: `<area shape="circle" coords="130,136,60" href="#" target="_blank" alt="MDN">`
    - `poly`: Der Wert ist `x1,y1,x2,y2,..,xn,yn`. Der Wert gibt die Koordinaten der Ecken des Polygons an.
      Wenn die ersten und letzten Koordinatenpaare nicht identisch sind, fügt der Browser das letzte Koordinatenpaar ein, um das Polygon zu schließen.

    Die Werte sind Zahlen von CSS-Pixeln. Unser [Form-Generator](/de/docs/Web/CSS/Guides/Shapes/Shape_generator) kann Ihnen helfen, die `coords`-Syntax zu generieren, indem Sie Punkte auf einem Bild auswählen, das Sie hochladen.

- `download`
  - : Dieses Attribut, falls vorhanden, gibt an, dass die verlinkte Ressource heruntergeladen und nicht im Browser angezeigt werden soll.
    Siehe {{HTMLElement("a")}} für eine vollständige Beschreibung des [`download`](/de/docs/Web/HTML/Reference/Elements/a#download)-Attributs.
- `href`
  - : Das Hyperlink-Ziel für den Bereich.
    Sein Wert ist eine gültige URL.
    Dieses Attribut kann weggelassen werden; in diesem Fall repräsentiert das `<area>`-Element keinen Hyperlink.
- `interestfor` {{experimental_inline}} {{non-standard_inline}}
  - : Definiert das `<area>`-Element als **Interessensinvoker**. Sein Wert ist die `id` des Ziel-Elements, das in irgendeiner Weise beeinflusst wird (normalerweise angezeigt oder versteckt), wenn Interesse auf dem Invoker-Element gezeigt oder verloren wird (zum Beispiel durch Überfahren/Verlassen oder Fokussieren/Unfokussieren). Siehe [Using interest invokers](/de/docs/Web/API/Popover_API/Using_interest_invokers) für weitere Details und Beispiele.
- `ping`
  - : Enthält eine durch Leerzeichen getrennte Liste von URLs, an die, wenn der Hyperlink gefolgt wird, {{HTTPMethod("POST")}}-Anfragen mit dem Body `PING` vom Browser (im Hintergrund) gesendet werden.
    Wird typischerweise zum Tracking verwendet.
- `referrerpolicy`
  - : Ein String, der angibt, welcher Referrer beim Abrufen der Ressource verwendet werden soll:
    - `no-referrer`: Der {{HTTPHeader("Referer")}}-Header wird nicht gesendet.
    - `no-referrer-when-downgrade`: Der {{HTTPHeader("Referer")}}-Header wird nicht an {{Glossary("origin", "Origin")}}s ohne {{Glossary("TLS", "TLS")}} ({{Glossary("HTTPS", "HTTPS")}}) gesendet.
    - `origin`: Der gesendete Referrer wird auf den Ursprung der verweisenden Seite beschränkt: ihr [Schema](/de/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_URL), {{Glossary("host", "Host")}} und {{Glossary("port", "Port")}}.
    - `origin-when-cross-origin`: Der an andere Ursprünge gesendete Referrer wird auf das Schema, den Host und den Port beschränkt. Navigationen im selben Ursprung enthalten weiterhin den Pfad.
    - `same-origin`: Ein Referrer wird für {{Glossary("Same-origin_policy", "denselben Ursprung")}} gesendet, aber Cross-Origin-Anfragen enthalten keine Referrer-Informationen.
    - `strict-origin`: Sendet nur den Ursprung des Dokuments als Referrer, wenn das Protokollsicherheitsniveau gleich bleibt (HTTPS→HTTPS), aber sendet ihn nicht an ein weniger sicheres Ziel (HTTPS→HTTP).
    - `strict-origin-when-cross-origin` (Standard): Sendet eine vollständige URL bei Ausführung einer Anfrage des gleichen Ursprungs, sendet nur den Ursprung, wenn das Protokollsicherheitsniveau gleich bleibt (HTTPS→HTTPS), und sendet keinen Header an ein weniger sicheres Ziel (HTTPS→HTTP).
    - `unsafe-url`: Der Referrer enthält den Ursprung _und_ den Pfad (aber nicht das [Fragment](/de/docs/Web/API/HTMLAnchorElement/hash), [Passwort](/de/docs/Web/API/HTMLAnchorElement/password) oder [Benutzername](/de/docs/Web/API/HTMLAnchorElement/username)).
      **Dieser Wert ist unsicher**, weil er Ursprünge und Pfade von TLS-geschützten Ressourcen an unsichere Ursprünge leakt.

- [`rel`](/de/docs/Web/HTML/Reference/Attributes/rel)
  - : Für Anker, die das [`href`](#href)-Attribut enthalten, gibt dieses Attribut die Beziehung des Zielobjekts zum Linkobjekt an.
    Der Wert ist eine durch Leerzeichen getrennte Liste von Linktypen.
    Die Werte und ihre Semantik werden von einer Autorität registriert, die möglicherweise Bedeutung für den Dokumentautor haben kann.
    Die Standardbeziehung, wenn keine andere gegeben ist, ist leer. Verwenden Sie dieses Attribut nur, wenn das [`href`](#href)-Attribut vorhanden ist.
- `shape`
  - : Die Form der zugehörigen Hotspot-Region. Die Spezifikationen für HTML definieren die Werte `rect`, die eine rechteckige Region definieren; `circle`, die eine kreisförmige Region definieren; `poly`, die ein Polygon definieren; und `default`, was die gesamte Region über alle definierten Formen hinaus angibt.
- `target`
  - : Ein Schlüsselwort oder ein vom Autor definierter Name des {{Glossary("browsing_context", "Browsing-Kontexts")}}, in dem die verlinkte Ressource angezeigt wird.
    Die folgenden Schlüsselwörter haben besondere Bedeutungen:
    - `_self` (Standard): Zeigt die Ressource im aktuellen Browsing-Kontext an.
    - `_blank`: Zeigt die Ressource in einem neuen, unbenannten Browsing-Kontext an.
    - `_parent`: Zeigt die Ressource im übergeordneten Browsing-Kontext des aktuellen an, falls die aktuelle Seite in einem iframe ist.
      Falls es kein übergeordnetes Element gibt, wirkt es wie `_self`.
    - `_top`: Zeigt die Ressource im obersten Browsing-Kontext an (der Browsing-Kontext, der ein Vorfahr des aktuellen ist und kein übergeordnetes Element hat).
      Falls es kein übergeordnetes Element gibt, wirkt es wie `_self`.

    Verwenden Sie dieses Attribut nur, wenn das [`href`](#href)-Attribut vorhanden ist.

    > [!NOTE]
    > Das Setzen von `target="_blank"` auf `<area>`-Elementen impliziert das gleiche `rel`-Verhalten wie das Setzen von [`rel="noopener"`](/de/docs/Web/HTML/Reference/Attributes/rel/noopener), welches `window.opener` nicht setzt. Siehe [Browser-Kompatibilität](#browser-kompatibilität) für den Support-Status.

## Beispiele

### Bild mit klickbaren Bereichen

```html
<map name="primary">
  <area
    shape="circle"
    coords="75,75,75"
    href="left.html"
    alt="Click to go Left" />
  <area
    shape="circle"
    coords="275,75,75"
    href="right.html"
    alt="Click to go Right" />
</map>
<img
  usemap="#primary"
  src="https://dummyimage.com/350x150"
  alt="350 x 150 pic" />
```

{{ EmbedLiveSample('Image with clickable areas', 360, 160) }}

## Technische Zusammenfassung

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/de/docs/Web/HTML/Guides/Content_categories">Inhaltskategorien</a>
      </th>
      <td>
        <a href="/de/docs/Web/HTML/Guides/Content_categories#flow_content">Fließender Inhalt</a>,
        <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content">Phrasierung-Inhalt</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubter Inhalt</th>
      <td>Keiner; es ist ein {{Glossary("void_element", "leeres Element")}}.</td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>Muss ein Anfangstag haben und darf keinen Endtag haben.</td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Eltern</th>
      <td>
        Jedes Element, das <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content">Phrasierung-Inhalt</a> akzeptiert. Das <code>&#x3C;area></code>-Element muss einen Vorfahren {{HTMLElement("map")}} haben, aber es muss kein direkter Elternteil sein.
      </td>
    </tr>
    <tr>
      <th scope="row">Implizierte ARIA-Rolle</th>
      <td>
        <a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/link_role"><code>link</code></a> wenn <a href="#href"><code>href</code></a>-Attribut vorhanden ist, andernfalls
        <a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/generic_role"><code>generic</code></a>
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubte ARIA-Rollen</th>
      <td>Keine <code>role</code> erlaubt</td>
    </tr>
    <tr>
      <th scope="row">DOM-Schnittstelle</th>
      <td>[`HTMLAreaElement`](/de/docs/Web/API/HTMLAreaElement)</td>
    </tr>
  </tbody>
</table>

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
