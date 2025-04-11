---
title: "<area>: Das Image Map Area-Element"
slug: Web/HTML/Reference/Elements/area
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{HTMLSidebar}}

Das **`<area>`** [HTML](/de/docs/Web/HTML)-Element definiert einen Bereich innerhalb einer Image-Map, die vordefinierte anklickbare Bereiche hat. Eine _Image-Map_ ermöglicht es, geometrische Bereiche auf einem Bild mit {{Glossary("Hyperlink", "Hypertext-Links")}} zu verknüpfen.

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
  - : Ein alternativer Textstring, der in Browsern angezeigt wird, die keine Bilder anzeigen. Der Text sollte so formuliert sein, dass er dem Benutzer dieselbe Art von Auswahl präsentiert, wie das Bild es ohne den alternativen Text tun würde. Dieses Attribut ist nur erforderlich, wenn das [`href`](#href)-Attribut verwendet wird.
- `coords`

  - : Das `coords`-Attribut beschreibt die Koordinaten des [`shape`](#shape)-Attributs in Bezug auf Größe, Form und Platzierung einer `<area>`.
    Dieses Attribut darf nicht verwendet werden, wenn `shape` auf `default` gesetzt ist.

    - `rect`: Der Wert ist `x1,y1,x2,y2`.
      Der Wert gibt die Koordinaten der oberen linken und unteren rechten Ecke des Rechtecks an.
      Zum Beispiel gibt bei `<area shape="rect" coords="0,0,253,27" href="#" target="_blank" alt="Mozilla">` der Wert `0,0` und `253,27` die obere linke und die untere rechte Ecke des Rechtecks an.
    - `circle`: Der Wert ist `x,y,radius`. Der Wert gibt die Koordinaten des Kreismittelpunkts und des Radius an.
      Zum Beispiel: `<area shape="circle" coords="130,136,60" href="#" target="_blank" alt="MDN">`
    - `poly`: Der Wert ist `x1,y1,x2,y2,..,xn,yn`. Der Wert gibt die Koordinaten der Eckpunkte des Polygons an.
      Wenn das erste und das letzte Koordinatenpaar nicht gleich sind, fügt der Browser das letzte Koordinatenpaar hinzu, um das Polygon zu schließen.

    Die Werte sind Zahlen in CSS-Pixeln.

- `download`
  - : Dieses Attribut zeigt, falls vorhanden, an, dass die verlinkte Ressource heruntergeladen und nicht im Browser angezeigt werden soll. Siehe {{HTMLElement("a")}} für eine vollständige Beschreibung des [`download`](/de/docs/Web/HTML/Reference/Elements/a#download)-Attributs.
- `href`
  - : Das Hyperlink-Ziel für den Bereich. Sein Wert ist eine gültige URL. Dieses Attribut kann weggelassen werden; in diesem Fall repräsentiert das `<area>`-Element keinen Hyperlink.
- `ping`
  - : Enthält eine durch Leerzeichen getrennte Liste von URLs, an die, wenn der Hyperlink gefolgt wird, {{HTTPMethod("POST")}}-Anfragen mit dem Körper `PING` vom Browser (im Hintergrund) gesendet werden. Typischerweise für Tracking verwendet.
- `referrerpolicy`

  - : Ein String, der angibt, welchen Referrer verwendet werden soll, wenn die Ressource abgerufen wird:

    - `no-referrer`: Der {{HTTPHeader("Referer")}}-Header wird nicht gesendet.
    - `no-referrer-when-downgrade`: Der {{HTTPHeader("Referer")}}-Header wird nicht an {{Glossary("origin", "Ursprung")}}e ohne {{Glossary("TLS", "TLS")}} ({{Glossary("HTTPS", "HTTPS")}}) gesendet.
    - `origin`: Der gesendete Referrer wird auf den Ursprung der verweisenden Seite beschränkt: sein [Schema](/de/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_URL), {{Glossary("host", "Host")}} und {{Glossary("port", "Port")}}.
    - `origin-when-cross-origin`: Der Referrer, der an andere Ursprünge gesendet wird, ist auf das Schema, den Host und den Port beschränkt. Navigationen auf demselben Ursprung enthalten weiterhin den Pfad.
    - `same-origin`: Ein Referrer wird für {{Glossary("Same-origin_policy", "gleichen Ursprung")}} gesendet, aber Anfragen über verschiedene Ursprünge enthalten keine Referrer-Informationen.
    - `strict-origin`: Sendet nur den Ursprung des Dokuments als Referrer, wenn das Sicherheitseingestufte Protokoll gleich bleibt (HTTPS→HTTPS), aber sendet es nicht an ein weniger sicheres Ziel (HTTPS→HTTP).
    - `strict-origin-when-cross-origin` (default): Sendet eine vollständige URL, wenn eine Anfrage an denselben Ursprung gestellt wird, sendet nur den Ursprung, wenn das Sicherheitseingestufte Protokoll gleich bleibt (HTTPS→HTTPS), und sendet keinen Header zu einem weniger sicheren Ziel (HTTPS→HTTP).
    - `unsafe-url`: Der Referrer enthält den Ursprung _und_ den Pfad (aber nicht den [Fragment](/de/docs/Web/API/HTMLAnchorElement/hash), das [Passwort](/de/docs/Web/API/HTMLAnchorElement/password) oder den [Benutzernamen](/de/docs/Web/API/HTMLAnchorElement/username)).
      **Dieser Wert ist unsicher**, weil er Ursprünge und Pfade von TLS-geschützten Ressourcen zu unsicheren Ursprüngen leckt.

- [`rel`](/de/docs/Web/HTML/Reference/Attributes/rel)
  - : Für Anker, die das [`href`](#href)-Attribut enthalten, gibt dieses Attribut die Beziehung des Zielobjekts zum Link-Objekt an. Der Wert ist eine durch Leerzeichen getrennte Liste von Link-Typen. Die Werte und ihre Semantik werden von einer Autorität registriert, die für den Dokumentautor von Bedeutung sein könnte. Die Standardbeziehung, wenn keine andere angegeben ist, ist leer. Verwenden Sie dieses Attribut nur, wenn das [`href`](#href)-Attribut vorhanden ist.
- `shape`
  - : Die Form des zugeordneten Hotspots. Die Spezifikationen für HTML definieren die Werte `rect`, die einen rechteckigen Bereich definieren; `circle`, die einen kreisförmigen Bereich definieren; `poly`, die ein Polygon definieren; und `default`, das den gesamten Bereich jenseits aller definierten Formen angibt.
- `target`

  - : Ein Schlüsselwort oder ein vom Autor definierter Name des {{Glossary("browsing_context", "Browsing-Kontexts")}}, in dem die verlinkte Ressource angezeigt werden soll. Die folgenden Schlüsselwörter haben spezielle Bedeutungen:

    - `_self` (default): Zeigt die Ressource im aktuellen Browsing-Kontext an.
    - `_blank`: Zeigt die Ressource in einem neuen, unbenannten Browsing-Kontext an.
    - `_parent`: Zeigt die Ressource im übergeordneten Browsing-Kontext des aktuellen an, falls die aktuelle Seite innerhalb eines Rahmens ist. Wenn es keinen übergeordneten Kontext gibt, verhält es sich wie `_self`.
    - `_top`: Zeigt die Ressource im obersten Browsing-Kontext an (dem Browsing-Kontext, der ein Vorfahre des aktuellen Kontextes ist und keinen übergeordneten Kontext hat). Wenn es keinen übergeordneten Kontext gibt, verhält es sich wie `_self`.

    Verwenden Sie dieses Attribut nur, wenn das [`href`](#href)-Attribut vorhanden ist.

    > [!NOTE]
    > Wenn `target="_blank"` bei `<area>`-Elementen eingestellt ist, bietet es implizit dasselbe `rel`-Verhalten wie [`rel="noopener"`](/de/docs/Web/HTML/Reference/Attributes/rel/noopener), das `window.opener` nicht setzt. Siehe [Browser-Kompatibilität](#browser-kompatibilität) für den Unterstützungsstatus.

## Beispiele

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

### Ergebnis

{{ EmbedLiveSample('Examples', 360, 160) }}

## Technische Zusammenfassung

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/de/docs/Web/HTML/Guides/Content_categories">Inhaltskategorien</a>
      </th>
      <td>
        <a href="/de/docs/Web/HTML/Guides/Content_categories#flow_content">Fließende Inhalte</a>,
        <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content">Phrasierungsinhalte</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubter Inhalt</th>
      <td>Keiner; es ist ein {{Glossary("void_element", "leeres Element")}}.</td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>Muss ein Start-Tag haben und darf kein End-Tag haben.</td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Eltern</th>
      <td>
        Jedes Element, das <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content">Phrasierungsinhalte</a> akzeptiert. Das <code>&#x3C;area></code>-Element muss einen Vorfahren {{HTMLElement("map")}} haben, aber es muss kein direkter Elternteil sein.
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
