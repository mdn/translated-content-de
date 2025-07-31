---
title: "<area>: Das Image-Map-Bereich-Element"
slug: Web/HTML/Reference/Elements/area
l10n:
  sourceCommit: efebdd806165ea668d49fc67fd5b1d7f6229907b
---

Das **`<area>`** [HTML](/de/docs/Web/HTML)-Element definiert einen Bereich innerhalb einer Image-Map, die vordefinierte klickbare Bereiche hat. Eine _Image-Map_ ermöglicht es, geometrische Bereiche auf einem Bild mit {{Glossary("Hyperlink", "Hypertext-Links")}} zu verknüpfen.

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

Die Attribute dieses Elements umfassen die [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes).

- `alt`
  - : Eine alternative Zeichenkette, die in Browsern angezeigt werden soll, die keine Bilder anzeigen.
    Der Text sollte so formuliert sein, dass er dem Benutzer dieselbe Art von Wahlmöglichkeit bietet, wie das Bild es tun würde, wenn es ohne den Alternativtext angezeigt würde.
    Dieses Attribut ist nur erforderlich, wenn das [`href`](#href)-Attribut verwendet wird.
- `coords`
  - : Das `coords`-Attribut beschreibt die Koordinaten des [`shape`](#shape)-Attributs in Bezug auf Größe, Form und Platzierung eines `<area>`.
    Dieses Attribut darf nicht verwendet werden, wenn `shape` auf `default` gesetzt ist.
    - `rect`: Der Wert ist `x1,y1,x2,y2`.
      Der Wert gibt die Koordinaten der oberen linken und unteren rechten Ecke des Rechtecks an.
      Zum Beispiel: `<area shape="rect" coords="0,0,253,27" href="#" target="_blank" alt="Mozilla">` Die Koordinaten sind `0,0` und `253,27`, und bezeichnen die oberen linken und unteren rechten Ecken des Rechtecks.
    - `circle`: Der Wert ist `x,y,Radius`. Der Wert gibt die Koordinaten des Kreismittelpunkts und den Radius an.
      Beispiel: `<area shape="circle" coords="130,136,60" href="#" target="_blank" alt="MDN">`
    - `poly`: Der Wert ist `x1,y1,x2,y2,..,xn,yn`. Der Wert gibt die Koordinaten der Ecken des Polygons an.
      Wenn die ersten und letzten Koordinatenpaare nicht identisch sind, fügt der Browser das letzte Koordinatenpaar hinzu, um das Polygon zu schließen.

    Die Werte sind Zahlen von CSS-Pixeln. Unser [Shape-Generator](/de/docs/Web/CSS/CSS_shapes/Shape_generator) kann Ihnen helfen, die `coords`-Syntax zu generieren, indem Sie Punkte auf einem Bild auswählen, das Sie hochladen.

- `download`
  - : Dieses Attribut zeigt, falls vorhanden, an, dass die verlinkte Ressource heruntergeladen werden soll, anstatt im Browser angezeigt zu werden.
    Siehe {{HTMLElement("a")}} für eine vollständige Beschreibung des [`download`](/de/docs/Web/HTML/Reference/Elements/a#download)-Attributs.
- `href`
  - : Das Hyperlink-Ziel für den Bereich.
    Sein Wert ist eine gültige URL.
    Dieses Attribut kann weggelassen werden; falls ja, stellt das `<area>`-Element keinen Hyperlink dar.
- `ping`
  - : Enthält eine durch Leerzeichen getrennte Liste von URLs, an die, wenn der Hyperlink gefolgt wird, {{HTTPMethod("POST")}}-Anfragen mit dem Body `PING` vom Browser (im Hintergrund) gesendet werden.
    In der Regel verwendet zu Tracking-Zwecken.
- `referrerpolicy`
  - : Ein String, der angibt, welche Referrer verwendet werden sollen, um die Ressource abzurufen:
    - `no-referrer`: Der {{HTTPHeader("Referer")}}-Header wird nicht gesendet.
    - `no-referrer-when-downgrade`: Der {{HTTPHeader("Referer")}}-Header wird nicht an {{Glossary("origin", "Orte")}} ohne {{Glossary("TLS", "TLS")}} ({{Glossary("HTTPS", "HTTPS")}}) gesendet.
    - `origin`: Der gesendete Referrer wird auf den Ursprung der verweisenden Seite beschränkt: ihr [Schema](/de/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_URL), {{Glossary("host", "Host")}} und {{Glossary("port", "Port")}}.
    - `origin-when-cross-origin`: Der an andere Ursprünge gesendete Referrer wird auf das Schema, den Host und den Port beschränkt. Navigationen innerhalb desselben Ursprungs beinhalten trotzdem den Pfad.
    - `same-origin`: Ein Referrer wird für {{Glossary("Same-origin_policy", "denselben Ursprung")}} gesendet, aber bei außenstehenden Anfragen wird keine Referrer-Information enthalten sein.
    - `strict-origin`: Sendet nur den Ursprung des Dokuments als Referrer, wenn das Protokollsicherheitsniveau gleich bleibt (HTTPS→HTTPS), sendet aber nicht an ein weniger sicheres Ziel (HTTPS→HTTP).
    - `strict-origin-when-cross-origin` (Standard): Sendet eine vollständige URL bei derselben Ursprungsanfrage, sendet nur den Ursprung, wenn das Protokollsicherheitsniveau gleich bleibt (HTTPS→HTTPS), und sendet keinen Header an ein weniger sicheres Ziel (HTTPS→HTTP).
    - `unsafe-url`: Der Referrer beinhaltet den Ursprung _und_ den Pfad (aber nicht das [Fragment](/de/docs/Web/API/HTMLAnchorElement/hash), [Passwort](/de/docs/Web/API/HTMLAnchorElement/password) oder [Benutzername](/de/docs/Web/API/HTMLAnchorElement/username)).
      **Dieser Wert ist unsicher**, da er Ursprünge und Pfade von TLS-geschützten Ressourcen an unsichere Ursprünge überträgt.

- [`rel`](/de/docs/Web/HTML/Reference/Attributes/rel)
  - : Für Anker mit dem [`href`](#href)-Attribut gibt dieses Attribut die Beziehung des Zielobjekts zum Link-Objekt an.
    Der Wert ist eine durch Leerzeichen getrennte Liste von Link-Typen.
    Die Werte und ihre Semantik werden von einer Autorität registriert, die Bedeutung für den Dokumentautor haben könnte.
    Die Standardbeziehung, wenn keine andere angegeben ist, ist leer. Verwenden Sie dieses Attribut nur, wenn das [`href`](#href)-Attribut vorhanden ist.
- `shape`
  - : Die Form des zugeordneten Hotspots. Die HTML-Spezifikationen definieren die Werte `rect` für ein rechteckiges Gebiet, `circle` für ein kreisförmiges Gebiet, `poly` für ein Polygon und `default` für das gesamte Gebiet außerhalb jeder definierten Form.
- `target`
  - : Ein Schlüsselwort oder ein vom Autor festgelegter Name des {{Glossary("browsing_context", "Browsing-Kontextes")}}, in dem die verlinkte Ressource angezeigt werden soll.
    Die folgenden Schlüsselwörter haben spezielle Bedeutungen:
    - `_self` (Standard): Zeigt die Ressource im aktuellen Browsing-Kontext an.
    - `_blank`: Zeigt die Ressource in einem neuen, unbenannten Browsing-Kontext an.
    - `_parent`: Zeigt die Ressource im übergeordneten Browsing-Kontext des aktuellen an, falls die aktuelle Seite in einem Frame eingebettet ist.
      Wenn es keinen Eltern gibt, wirkt dies gleich wie `_self`.
    - `_top`: Zeigt die Ressource im obersten Browsing-Kontext an (der Browsing-Kontext, der Vorfahr des aktuellen ist und keinen Eltern hat).
      Wenn es keinen Eltern gibt, wirkt dies gleich wie `_self`.

    Verwenden Sie dieses Attribut nur, wenn das [`href`](#href)-Attribut vorhanden ist.

    > [!NOTE]
    > Das Setzen von `target="_blank"` auf `<area>`-Elementen bietet implizit dasselbe `rel`-Verhalten wie das Setzen von [`rel="noopener"`](/de/docs/Web/HTML/Reference/Attributes/rel/noopener), was `window.opener` nicht setzt. Siehe [Browser-Kompatibilität](#browser-kompatibilität) für den Unterstützungsstatus.

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
        Jedes Element, das <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content">Phraseninhalt</a> akzeptiert. Das <code>&#x3C;area></code>-Element muss einen Vorfahren {{HTMLElement("map")}} haben, jedoch muss dies nicht der direkte Elternteil sein.
      </td>
    </tr>
    <tr>
      <th scope="row">Implizite ARIA-Rolle</th>
      <td>
        <a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/link_role"><code>link</code></a>, wenn das <a href="#href"><code>href</code></a>-Attribut vorhanden ist, andernfalls
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
