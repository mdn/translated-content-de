---
title: "<area>: Das Bildkarten-Bereichselement"
slug: Web/HTML/Reference/Elements/area
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{HTMLSidebar}}

Das **`<area>`** [HTML](/de/docs/Web/HTML)-Element definiert einen Bereich innerhalb einer Bildkarte, der vordefinierte anklickbare Bereiche hat. Eine _Bildkarte_ ermöglicht es, geometrische Bereiche auf einem Bild mit {{Glossary("Hyperlink", "Hypertext-Links")}} zu verknüpfen.

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

Die Attribute dieses Elements schließen die [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes) ein.

- `alt`
  - : Ein alternativer Textstring, der in Browsern angezeigt wird, die keine Bilder darstellen.
    Der Text sollte so formuliert sein, dass er dem Benutzer dieselbe Art von Auswahl bietet, wie es das Bild täte, wenn es ohne den alternativen Text angezeigt würde.
    Dieses Attribut ist nur erforderlich, wenn das [`href`](#href)-Attribut verwendet wird.
- `coords`

  - : Das `coords`-Attribut beschreibt die Koordinaten des [`shape`](#shape)-Attributs in Größe, Form und Platzierung eines `<area>`.
    Dieses Attribut darf nicht verwendet werden, wenn `shape` auf `default` gesetzt ist.

    - `rect`: der Wert ist `x1,y1,x2,y2`.
      Der Wert gibt die Koordinaten der oberen linken und unteren rechten Ecke des Rechtecks an.
      Zum Beispiel, in `<area shape="rect" coords="0,0,253,27" href="#" target="_blank" alt="Mozilla">` sind die Koordinaten `0,0` und `253,27`, die jeweils die obere linke und die untere rechte Ecke des Rechtecks anzeigen.
    - `circle`: der Wert ist `x,y,radius`. Der Wert gibt die Koordinaten des Kreismittelpunkts und den Radius an.
      Zum Beispiel: `<area shape="circle" coords="130,136,60" href="#" target="_blank" alt="MDN">`
    - `poly`: der Wert ist `x1,y1,x2,y2,..,xn,yn`. Der Wert gibt die Koordinaten der Kanten des Polygons an.
      Wenn die ersten und letzten Koordinatenpaare nicht identisch sind, fügt der Browser das letzte Koordinatenpaar hinzu, um das Polygon zu schließen.

    Die Werte sind Zahlen in CSS-Pixeln.

- `download`
  - : Dieses Attribut zeigt, falls vorhanden, an, dass die verlinkte Ressource heruntergeladen und nicht im Browser angezeigt werden soll.
    Siehe {{HTMLElement("a")}} für eine vollständige Beschreibung des [`download`](/de/docs/Web/HTML/Reference/Elements/a#download)-Attributs.
- `href`
  - : Das Ziel des Hyperlinks für den Bereich.
    Sein Wert ist eine gültige URL.
    Dieses Attribut kann weggelassen werden; falls ja, repräsentiert das `<area>`-Element keinen Hyperlink.
- `ping`
  - : Enthält eine durch Leerzeichen getrennte Liste von URLs, zu denen beim Befolgen des Hyperlinks {{HTTPMethod("POST")}}-Anfragen mit dem Körper `PING` vom Browser (im Hintergrund) gesendet werden.
    Typischerweise für das Tracking verwendet.
- `referrerpolicy`

  - : Ein String, der angibt, welchen Referrer beim Abrufen der Ressource zu verwenden ist:
    - `no-referrer`: Der {{HTTPHeader("Referer")}}-Header wird nicht gesendet.
    - `no-referrer-when-downgrade`: Der {{HTTPHeader("Referer")}}-Header wird nicht an {{Glossary("origin", "Ursprünge")}} ohne {{Glossary("TLS", "TLS")}} ({{Glossary("HTTPS", "HTTPS")}}) gesendet.
    - `origin`: Der gesendete Referrer wird auf den Ursprung der verweisenden Seite beschränkt: das [Schema](/de/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_URL), {{Glossary("host", "Host")}} und {{Glossary("port", "Port")}}.
    - `origin-when-cross-origin`: Der an andere Ursprünge gesendete Referrer wird auf das Schema, den Host und den Port beschränkt. Navigationen im gleichen Ursprung enthalten weiterhin den Pfad.
    - `same-origin`: Ein Referrer wird für {{Glossary("Same-origin_policy", "den gleichen Ursprung")}} gesendet, aber fremd-ursprüngliche Anfragen enthalten keine Referrer-Informationen.
    - `strict-origin`: Sendet nur den Ursprung des Dokuments als Referrer, wenn das Sicherheitsniveau des Protokolls gleich bleibt (HTTPS→HTTPS), aber nicht an ein weniger sicheres Ziel (HTTPS→HTTP).
    - `strict-origin-when-cross-origin` (Standard): Sendet eine vollständige URL bei einer gleichen Ursprungsanfrage, sendet nur den Ursprung, wenn das Sicherheitsniveau des Protokolls gleich bleibt (HTTPS→HTTPS), und sendet keinen Header an ein weniger sicheres Ziel (HTTPS→HTTP).
    - `unsafe-url`: Der Referrer wird den Ursprung _und_ den Pfad umfassen (aber nicht das [Fragment](/de/docs/Web/API/HTMLAnchorElement/hash), [Passwort](/de/docs/Web/API/HTMLAnchorElement/password) oder [Benutzername](/de/docs/Web/API/HTMLAnchorElement/username)).
      **Dieser Wert ist unsicher**, da er Ursprünge und Pfade von TLS-geschützten Ressourcen an unsichere Ursprünge weitergibt.

- [`rel`](/de/docs/Web/HTML/Reference/Attributes/rel)
  - : Für Anker, die das [`href`](#href)-Attribut enthalten, gibt dieses Attribut die Beziehung des Zielobjekts zum Linkobjekt an.
    Der Wert ist eine durch Leerzeichen getrennte Liste von Linktypen.
    Die Werte und ihre Semantik werden von einer Behörde registriert, die für den Dokumentautor von Bedeutung sein könnte.
    Die Standardbeziehung, falls keine andere angegeben wird, ist void. Verwenden Sie dieses Attribut nur, wenn das [`href`](#href)-Attribut vorhanden ist.
- `shape`
  - : Die Form des zugehörigen Hotspots. Die Spezifikationen für HTML definieren die Werte `rect`, die einen rechteckigen Bereich definieren; `circle`, der einen kreisförmigen Bereich definiert; `poly`, das ein Polygon definiert; und `default`, was den gesamten Bereich über alle definierten Formen hinaus angibt.
- `target`

  - : Ein Schlüsselwort oder ein vom Autor definierter Name des {{Glossary("browsing_context", "Browsing-Kontextes")}}, in dem die verlinkte Ressource angezeigt wird.
    Die folgenden Schlüsselwörter haben besondere Bedeutungen:

    - `_self` (Standard): Zeigen Sie die Ressource im aktuellen Browsing-Kontext an.
    - `_blank`: Zeigen Sie die Ressource in einem neuen, unbenannten Browsing-Kontext an.
    - `_parent`: Zeigen Sie die Ressource im übergeordneten Browsing-Kontext des aktuellen an, wenn die aktuelle Seite in einem Rahmen eingebettet ist.
      Wenn es keinen übergeordneten gibt, wirkt sich das genauso aus wie `_self`.
    - `_top`: Zeigen Sie die Ressource im obersten Browsing-Kontext an (der Browsing-Kontext, der ein Vorfahre des aktuellen ist und keinen Elternteil hat).
      Wenn es keinen Elternteil gibt, wirkt sich das genauso aus wie `_self`.

    Verwenden Sie dieses Attribut nur, wenn das [`href`](#href)-Attribut vorhanden ist.

    > [!NOTE]
    > Die Einstellung von `target="_blank"` für `<area>`-Elemente bietet implizit dasselbe `rel`-Verhalten wie die Einstellung von [`rel="noopener"`](/de/docs/Web/HTML/Reference/Attributes/rel/noopener), das `window.opener` nicht setzt. Siehe [Browser-Kompatibilität](#browser-kompatibilität) für den Unterstützungsstatus.

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
        <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content">Phrasing-Inhalte</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubter Inhalt</th>
      <td>Keiner; es ist ein {{Glossary("void_element", "void-Element")}}.</td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>Must have a start tag and must not have an end tag.</td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Eltern</th>
      <td>
        Jedes Element, das <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content">Phrasing-Inhalte</a> akzeptiert. Das <code>&#x3C;area></code>-Element muss einen Vorfahren {{HTMLElement("map")}} haben, aber es muss kein direkter Elternteil sein.
      </td>
    </tr>
    <tr>
      <th scope="row">Implizierte ARIA-Rolle</th>
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
