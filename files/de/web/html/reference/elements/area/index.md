---
title: "<area>: Das Image-Map-Bereichselement"
slug: Web/HTML/Reference/Elements/area
l10n:
  sourceCommit: 0754cd805a8e010d2e3a2a065f634a3bcf358252
---

Das **`<area>`**-Element von [HTML](/de/docs/Web/HTML) definiert einen Bereich innerhalb einer Bildkarte, die vordefinierte klickbare Bereiche hat. Eine _Bildkarte_ ermöglicht es, geometrische Bereiche auf einem Bild mit {{Glossary("Hyperlink", "Hypertext-Links")}} zu verbinden.

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
  - : Ein Text-String, der als Alternative für Browser angezeigt wird, die keine Bilder darstellen.
    Der Text sollte so formuliert sein, dass er dem Benutzer dieselbe Wahl bietet, wie sie das Bild ohne den Alternativtext bieten würde.
    Dieses Attribut ist nur erforderlich, wenn das [`href`](#href)-Attribut verwendet wird.
- `coords`
  - : Das `coords`-Attribut beschreibt die Koordinaten des [`shape`](#shape)-Attributs in Bezug auf Größe, Form und Platzierung eines `<area>`.
    Dieses Attribut darf nicht verwendet werden, wenn `shape` auf `default` gesetzt ist.
    - `rect`: der Wert ist `x1,y1,x2,y2`.
      Der Wert gibt die Koordinaten der oberen linken und unteren rechten Ecke des Rechtecks an.
      Zum Beispiel sind in `<area shape="rect" coords="0,0,253,27" href="#" target="_blank" alt="Mozilla">` die Koordinaten `0,0` und `253,27`, was die obere linke und untere rechte Ecke des Rechtecks bedeutet.
    - `circle`: der Wert ist `x,y,Radius`. Der Wert gibt die Koordinaten des Kreismittelpunkts und den Radius an.
      Zum Beispiel: `<area shape="circle" coords="130,136,60" href="#" target="_blank" alt="MDN">`
    - `poly`: der Wert ist `x1,y1,x2,y2,..,xn,yn`. Der Wert gibt die Koordinaten der Ränder des Polygons an.
      Wenn das erste und das letzte Koordinatenpaar nicht identisch sind, fügt der Browser das letzte Koordinatenpaar hinzu, um das Polygon zu schließen.

    Die Werte sind Zahlen in CSS-Pixeln.

- `download`
  - : Dieses Attribut zeigt, falls vorhanden, an, dass die verknüpfte Ressource heruntergeladen werden soll, anstatt im Browser angezeigt zu werden.
    Siehe {{HTMLElement("a")}} für eine vollständige Beschreibung des [`download`](/de/docs/Web/HTML/Reference/Elements/a#download)-Attributs.
- `href`
  - : Das Hyperlink-Ziel für den Bereich.
    Sein Wert ist eine gültige URL.
    Dieses Attribut kann ausgelassen werden; in diesem Fall stellt das `<area>`-Element keinen Hyperlink dar.
- `ping`
  - : Enthält eine durch Leerzeichen getrennte Liste von URLs, an die, wenn der Hyperlink gefolgt wird, {{HTTPMethod("POST")}}-Anfragen mit dem Inhalt `PING` vom Browser (im Hintergrund) gesendet werden.
    Typischerweise für Tracking verwendet.
- `referrerpolicy`
  - : Ein String, der angibt, welchen Referrer beim Abrufen der Ressource verwendet werden soll:
    - `no-referrer`: Der {{HTTPHeader("Referer")}}-Header wird nicht gesendet.
    - `no-referrer-when-downgrade`: Der {{HTTPHeader("Referer")}}-Header wird nicht an {{Glossary("origin", "Origin")}}s ohne {{Glossary("TLS", "TLS")}} ({{Glossary("HTTPS", "HTTPS")}}) gesendet.
    - `origin`: Der gesendete Referrer wird auf den Origin der verweisenden Seite beschränkt: ihr [Schema](/de/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_URL), {{Glossary("host", "Host")}} und {{Glossary("port", "Port")}}.
    - `origin-when-cross-origin`: Der Referrer, der an andere Origins gesendet wird, ist auf das Schema, den Host und den Port beschränkt. Navigationen am selben Origin beinhalten weiterhin den Pfad.
    - `same-origin`: Ein Referrer wird für {{Glossary("Same-origin_policy", "same origin")}} gesendet, aber Anfragen über Origin-Grenzen hinweg enthalten keine Referrer-Informationen.
    - `strict-origin`: Nur der Origin des Dokuments wird als Referrer gesendet, wenn das Protokollsicherheitslevel gleich bleibt (HTTPS→HTTPS), aber nicht an ein weniger sicheres Ziel gesendet wird (HTTPS→HTTP).
    - `strict-origin-when-cross-origin` (Standard): Sendet eine vollständige URL bei einer Same-Origin-Anfrage, sendet nur den Origin, wenn das Protokollsicherheitslevel gleich bleibt (HTTPS→HTTPS), und sendet keinen Header an ein weniger sicheres Ziel (HTTPS→HTTP).
    - `unsafe-url`: Der Referrer enthält Origin _und_ Pfad (aber nicht das [Fragment](/de/docs/Web/API/HTMLAnchorElement/hash), [Passwort](/de/docs/Web/API/HTMLAnchorElement/password) oder [Benutzername](/de/docs/Web/API/HTMLAnchorElement/username)).
      **Dieser Wert ist unsicher**, da er Origins und Pfade von TLS-geschützten Ressourcen an unsichere Origins leakt.

- [`rel`](/de/docs/Web/HTML/Reference/Attributes/rel)
  - : Für Anker, die das [`href`](#href)-Attribut enthalten, gibt dieses Attribut die Beziehung des Zielobjekts zum Linkobjekt an.
    Der Wert ist eine durch Leerzeichen getrennte Liste von Linktypen.
    Die Werte und deren Semantik werden von einer Autorität registriert, die dem Dokumentenautor Bedeutung verleihen könnte.
    Die standardmäßige Beziehung, falls keine andere angegeben ist, ist leer. Verwenden Sie dieses Attribut nur, wenn das [`href`](#href)-Attribut vorhanden ist.
- `shape`
  - : Die Form des zugehörigen Hotspots. Die HTML-Spezifikationen definieren die Werte `rect`, die einen rechteckigen Bereich definieren; `circle`, die einen kreisförmigen Bereich definieren; `poly`, die ein Polygon definieren; und `default`, was den gesamten Bereich jenseits aller definierten Formen angibt.
- `target`
  - : Ein Schlüsselwort oder vom Autor definierter Name des {{Glossary("browsing_context", "Browsing-Kontexts")}}, in dem die verknüpfte Ressource angezeigt werden soll.
    Die folgenden Schlüsselwörter haben besondere Bedeutungen:
    - `_self` (Standard): Zeigt die Ressource im aktuellen Browsing-Kontext an.
    - `_blank`: Zeigt die Ressource in einem neuen, unbenannten Browsing-Kontext an.
    - `_parent`: Zeigt die Ressource im Eltern-Browsing-Kontext des aktuellen an, falls die aktuelle Seite in einem Frame ist.
      Wenn es keinen Eltern gibt, verhält es sich wie `_self`.
    - `_top`: Zeigt die Ressource im obersten Browsing-Kontext an (der Browsing-Kontext, der ein Vorfahre des aktuellen ist und keinen Eltern hat).
      Wenn es keinen Eltern gibt, verhält es sich wie `_self`.

    Verwenden Sie dieses Attribut nur, wenn das [`href`](#href)-Attribut vorhanden ist.

    > [!NOTE]
    > Das Setzen von `target="_blank"` auf `<area>`-Elementen bietet implizit dasselbe `rel`-Verhalten wie das Setzen von [`rel="noopener"`](/de/docs/Web/HTML/Reference/Attributes/rel/noopener), was `window.opener` nicht setzt. Siehe [Browser-Kompatibilität](#browser-kompatibilität) für den Unterstützungsstatus.

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
        <a href="/de/docs/Web/HTML/Guides/Content_categories#flow_content">Fließinhalte</a>,
        <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content">ausgezeichnete Inhalte</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Zulässiger Inhalt</th>
      <td>Keiner; es ist ein {{Glossary("void_element", "leeres Element")}}.</td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>Muss einen Start-Tag haben und darf keinen End-Tag haben.</td>
    </tr>
    <tr>
      <th scope="row">Zulässige Eltern</th>
      <td>
        Jedes Element, das <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content">ausgezeichnete Inhalte</a> akzeptiert. Das <code>&#x3C;area></code>-Element muss einen Vorfahren {{HTMLElement("map")}} haben, muss jedoch nicht ein direkter Elternteil sein.
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
