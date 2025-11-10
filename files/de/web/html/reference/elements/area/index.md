---
title: "<area>: Das Image Map Area-Element"
slug: Web/HTML/Reference/Elements/area
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Das **`<area>`** [HTML](/de/docs/Web/HTML) Element definiert einen Bereich innerhalb einer Bildkarte, der vordefinierte klickbare Bereiche besitzt. Eine _Bildkarte_ ermöglicht es, geometrische Bereiche auf einem Bild mit {{Glossary("Hyperlink", "Hypertext-Links")}} zu verknüpfen.

Dieses Element wird nur innerhalb eines {{HTMLElement("map")}} Elements verwendet.

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

Die Attribute dieses Elements umfassen die [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes).

- `alt`
  - : Ein Textstring als Alternative, der in Browsern angezeigt wird, die keine Bilder anzeigen.
    Der Text sollte so formuliert sein, dass er dem Benutzer dieselbe Art von Wahl bietet, wie das Bild es ohne den Alternativtext tun würde.
    Dieses Attribut ist nur erforderlich, wenn das [`href`](#href) Attribut verwendet wird.
- `coords`

  - : Das `coords` Attribut beschreibt die Koordinaten des [`shape`](#shape) Attributs in Größe, Form und Platzierung eines `<area>`.
    Dieses Attribut darf nicht verwendet werden, wenn `shape` auf `default` gesetzt ist.

    - `rect`: der Wert ist `x1,y1,x2,y2`.
      Der Wert gibt die Koordinaten der oberen linken und unteren rechten Ecke des Rechtecks an.
      Zum Beispiel, in `<area shape="rect" coords="0,0,253,27" href="#" target="_blank" alt="Mozilla">` sind die Koordinaten `0,0` und `253,27`, was die obere linke und die untere rechte Ecke des Rechtecks angibt.
    - `circle`: der Wert ist `x,y,radius`. Der Wert gibt die Koordinaten des Kreismittelpunkts und den Radius an.
      Zum Beispiel: `<area shape="circle" coords="130,136,60" href="#" target="_blank" alt="MDN">`
    - `poly`: der Wert ist `x1,y1,x2,y2,..,xn,yn`. Der Wert gibt die Koordinaten der Ecken des Polygons an.
      Wenn die ersten und letzten Koordinatenpaare nicht identisch sind, wird der Browser das letzte Koordinatenpaar hinzufügen, um das Polygon zu schließen.

    Die Werte sind Zahlen in CSS-Pixeln. Unser [Formgenerator](/de/docs/Web/CSS/Guides/Shapes/Shape_generator) kann Ihnen helfen, die `coords`-Syntax zu generieren, indem Sie Punkte auf einem Bild auswählen, das Sie hochladen.

- `download`
  - : Dieses Attribut, falls vorhanden, gibt an, dass die verlinkte Ressource heruntergeladen werden soll, anstatt im Browser angezeigt zu werden.
    Siehe {{HTMLElement("a")}} für eine vollständige Beschreibung des [`download`](/de/docs/Web/HTML/Reference/Elements/a#download) Attributs.
- `href`
  - : Das Ziel des Hyperlinks für den Bereich.
    Sein Wert ist eine gültige URL.
    Dieses Attribut kann weggelassen werden; dann stellt das `<area>`-Element keinen Hyperlink dar.
- `ping`
  - : Enthält eine durch Leerzeichen getrennte Liste von URLs, an die, wenn der Hyperlink aufgerufen wird, {{HTTPMethod("POST")}} Anfragen mit dem Körper `PING` vom Browser (im Hintergrund) gesendet werden.
    Wird typischerweise für Tracking verwendet.
- `referrerpolicy`

  - : Ein String, der angibt, welcher Referer beim Abrufen der Ressource verwendet werden soll:
    - `no-referrer`: Der {{HTTPHeader("Referer")}}-Header wird nicht gesendet.
    - `no-referrer-when-downgrade`: Der {{HTTPHeader("Referer")}}-Header wird nicht an {{Glossary("origin", "origin")}}s ohne {{Glossary("TLS", "TLS")}} ({{Glossary("HTTPS", "HTTPS")}}) gesendet.
    - `origin`: Der gesendete Referer wird auf den Ursprung der verweisenden Seite beschränkt: ihre [scheme](/de/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_URL), {{Glossary("host", "host")}}, und {{Glossary("port", "port")}}.
    - `origin-when-cross-origin`: Der an andere Ursprünge gesendete Referer wird auf das Schema, den Host und den Port beschränkt. Navigationen im gleichen Ursprung enthalten weiterhin den Pfad.
    - `same-origin`: Ein Referer wird für {{Glossary("Same-origin_policy", "same origin")}} gesendet, aber Cross-Origin-Anfragen enthalten keine Referer-Informationen.
    - `strict-origin`: Sendet nur den Ursprung des Dokuments als Referer, wenn das Protokollsicherheitsniveau gleich bleibt (HTTPS→HTTPS), sendet ihn jedoch nicht an einen weniger sicheren Ort (HTTPS→HTTP).
    - `strict-origin-when-cross-origin` (Standard): Sendet eine vollständige URL bei einer gleichartigen Ursprungsanfrage, sendet nur den Ursprung, wenn das Protokollsicherheitsniveau gleich bleibt (HTTPS→HTTPS), und sendet keinen Header an eine weniger sichere Destination (HTTPS→HTTP).
    - `unsafe-url`: Der Referer enthält den Ursprung _und_ den Pfad (aber nicht das [fragment](/de/docs/Web/API/HTMLAnchorElement/hash), das [password](/de/docs/Web/API/HTMLAnchorElement/password), oder den [username](/de/docs/Web/API/HTMLAnchorElement/username)).
      **Dieser Wert ist unsicher**, da er Ursprünge und Pfade von TLS-geschützten Ressourcen an unsichere Ursprünge preisgibt.

- [`rel`](/de/docs/Web/HTML/Reference/Attributes/rel)
  - : Für Anker, die das [`href`](#href) Attribut enthalten, gibt dieses Attribut die Beziehung des Zielobjekts zum Linkobjekt an.
    Der Wert ist eine durch Leerzeichen getrennte Liste von Linktypen.
    Die Werte und ihre Bedeutungen werden von irgendeiner Autorität registriert, die für den Dokumentautor von Bedeutung sein könnte.
    Die Standardbeziehung ist leer, wenn keine andere angegeben ist. Verwenden Sie dieses Attribut nur, wenn das [`href`](#href) Attribut vorhanden ist.
- `shape`
  - : Die Form des zugehörigen Hotspots. Die Spezifikationen für HTML definieren die Werte `rect`, die eine rechteckige Region definiert; `circle`, die eine kreisförmige Region definiert; `poly`, die ein Polygon definiert; und `default`, die den gesamten Bereich jenseits jeglicher definierten Formen angibt.
- `target`

  - : Ein Schlüsselwort oder ein vom Autor definierter Name des {{Glossary("browsing_context", "browsing context")}}, in dem die verlinkte Ressource angezeigt werden soll.
    Die folgenden Schlüsselwörter haben besondere Bedeutungen:

    - `_self` (Standard): Zeigt die Ressource im aktuellen Browsing-Kontext an.
    - `_blank`: Zeigt die Ressource in einem neuen, unbenannten Browsing-Kontext an.
    - `_parent`: Zeigt die Ressource im übergeordneten Browsing-Kontext des aktuellen Kontexts an, falls die aktuelle Seite in einem Frame ist.
      Falls es keinen Eltern gibt, verhält es sich genauso wie `_self`.
    - `_top`: Zeigt die Ressource im obersten Browsing-Kontext an (der Browsing-Kontext, der ein Vorfahr des aktuellen ist und keinen Eltern hat).
      Falls es keinen Eltern gibt, verhält es sich genauso wie `_self`.

    Verwenden Sie dieses Attribut nur, wenn das [`href`](#href) Attribut vorhanden ist.

    > [!NOTE]
    > Das Setzen von `target="_blank"` auf `<area>`-Elementen bietet implizit dasselbe `rel`-Verhalten wie das Setzen von [`rel="noopener"`](/de/docs/Web/HTML/Reference/Attributes/rel/noopener), das `window.opener` nicht setzt. Siehe [Browser-Kompatibilität](#browser-kompatibilität) für den Unterstützungsstatus.

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

{{EmbedLiveSample('Bild mit klickbaren Bereichen', 360, 160)}}

## Technische Zusammenfassung

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/de/docs/Web/HTML/Guides/Content_categories">Inhaltskategorien</a>
      </th>
      <td>
        <a href="/de/docs/Web/HTML/Guides/Content_categories#flow_content">Flussinhalt</a>,
        <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content">Phraseninhalt</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubter Inhalt</th>
      <td>Keiner; es ist ein {{Glossary("void_element", "leeres Element")}}.</td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>Muss ein Start-Tag haben und darf keinen End-Tag haben.</td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Eltern</th>
      <td>
        Jedes Element, das <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content">Phraseninhalt</a> akzeptiert. Das <code>&#x3C;area></code>-Element muss einen {{HTMLElement("map")}}-Vorfahr haben, aber dieser muss kein direkter Eltern sein.
      </td>
    </tr>
    <tr>
      <th scope="row">Implizite ARIA-Rolle</th>
      <td>
        <a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/link_role"><code>link</code></a> wenn das <a href="#href"><code>href</code></a>-Attribut vorhanden ist, andernfalls
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
