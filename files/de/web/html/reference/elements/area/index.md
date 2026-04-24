---
title: "`<area>` HTML-Bildkartenelement"
short-title: <area>
slug: Web/HTML/Reference/Elements/area
l10n:
  sourceCommit: 599ae8b7ad414e91df473d91983f4ffc5cafabb3
---

Das **`<area>`** [HTML](/de/docs/Web/HTML)-Element definiert einen Bereich innerhalb einer Bildkarte, der vordefinierte anklickbare Bereiche enthält. Eine _Bildkarte_ ermöglicht es, geometrische Bereiche eines Bildes mit {{Glossary("Hyperlink", "Hypertext-Links")}} zu verknüpfen.

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
  - : Eine alternative Textzeichenkette, die in Browsern angezeigt wird, die keine Bilder anzeigen.
    Der Text sollte so formuliert sein, dass er dem Benutzer die gleiche Art von Wahlmöglichkeiten bietet wie das Bild, das ohne den alternativen Text angezeigt würde.
    Dieses Attribut ist nur erforderlich, wenn das [`href`](#href)-Attribut verwendet wird.
- `coords`
  - : Das `coords`-Attribut beschreibt die Koordinaten des [`shape`](#shape)-Attributs in Größe, Form und Platzierung eines `<area>`.
    Dieses Attribut darf nicht verwendet werden, wenn `shape` auf `default` gesetzt ist.
    - `rect`: der Wert ist `x1,y1,x2,y2`.
      Der Wert gibt die Koordinaten der linken oberen und rechten unteren Ecke des Rechtecks an.
      Zum Beispiel, in `<area shape="rect" coords="0,0,253,27" href="#" target="_blank" alt="Mozilla">` sind die Koordinaten `0,0` und `253,27`, die jeweils die obere linke und rechte untere Ecke des Rechtecks darstellen.
    - `circle`: der Wert ist `x,y,radius`. Der Wert gibt die Koordinaten des Kreismittelpunkts und den Radius an.
      Zum Beispiel: `<area shape="circle" coords="130,136,60" href="#" target="_blank" alt="MDN">`
    - `poly`: der Wert ist `x1,y1,x2,y2,..,xn,yn`. Der Wert gibt die Koordinaten der Kanten des Polygons an.
      Wenn die ersten und letzten Koordinatenpaare nicht gleich sind, fügt der Browser das letzte Koordinatenpaar hinzu, um das Polygon zu schließen.

    Die Werte sind Zahlen von CSS-Pixeln. Unser [Formengenerator](/de/docs/Web/CSS/Guides/Shapes/Shape_generator) kann Ihnen helfen, die `coords`-Syntax zu generieren, indem Sie Punkte auf einem Bild auswählen, das Sie hochladen.

- `download`
  - : Dieses Attribut gibt, sofern vorhanden, an, dass die verlinkte Ressource heruntergeladen werden soll, anstatt im Browser angezeigt zu werden.
    Weitere Informationen finden Sie bei {{HTMLElement("a")}} in der vollständigen Beschreibung des [`download`](/de/docs/Web/HTML/Reference/Elements/a#download)-Attributs.
- `href`
  - : Das Hyperlink-Ziel für den Bereich.
    Sein Wert ist eine gültige URL.
    Dieses Attribut kann weggelassen werden; in diesem Fall stellt das `<area>`-Element keinen Hyperlink dar.
- `interestfor` {{experimental_inline}} {{non-standard_inline}}
  - : Definiert das `<area>`-Element als einen **Interessensauslöser**. Sein Wert ist die `id` des Zielelements, das auf irgendeine Weise beeinflusst wird (normalerweise ein-/ausgeblendet), wenn Interesse am Auslöser-Element gezeigt oder verloren wird (zum Beispiel durch Hover/Unhover oder Fokussieren/Entfokussieren). Weitere Details und Beispiele finden Sie unter [Verwendung von Interessensauslösern](/de/docs/Web/API/Popover_API/Using_interest_invokers).
- `ping`
  - : Beinhaltet eine durch Leerzeichen getrennte Liste von URLs, zu denen, wenn der Hyperlink gefolgt wird, {{HTTPMethod("POST")}}-Anfragen mit dem Body `PING` vom Browser (im Hintergrund) gesendet werden.
    Wird typischerweise für Tracking verwendet.
- `referrerpolicy`
  - : Ein String, der angibt, welcher Referrer beim Abrufen der Ressource verwendet werden soll:
    - `no-referrer`: Der {{HTTPHeader("Referer")}}-Header wird nicht gesendet.
    - `no-referrer-when-downgrade`: Der {{HTTPHeader("Referer")}}-Header wird nicht an {{Glossary("origin", "Ursprünge")}} ohne {{Glossary("TLS", "TLS")}} ({{Glossary("HTTPS", "HTTPS")}}) gesendet.
    - `origin`: Der gesendete Referrer wird auf den Ursprung der verweisenden Seite beschränkt: sein [Schema](/de/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_URL), {{Glossary("host", "Host")}} und {{Glossary("port", "Port")}}.
    - `origin-when-cross-origin`: Der an andere Ursprünge gesendete Referrer wird auf das Schema, den Host und den Port beschränkt. Navigationen auf dem gleichen Ursprung beinhalten weiterhin den Pfad.
    - `same-origin`: Ein Referrer wird für {{Glossary("Same-origin_policy", "den gleichen Ursprung")}} gesendet, aber Anfragen über den Ursprung hinaus werden keine Referrer-Informationen enthalten.
    - `strict-origin`: Senden Sie nur den Ursprung des Dokuments als Referrer, wenn das Sicherheitsniveau des Protokolls gleich bleibt (HTTPS→HTTPS), aber senden Sie es nicht zu einem weniger sicheren Ziel (HTTPS→HTTP).
    - `strict-origin-when-cross-origin` (Standard): Senden Sie eine vollständige URL, wenn eine gleiche Ursprungsanfrage durchgeführt wird, senden Sie nur den Ursprung, wenn das Sicherheitsniveau des Protokolls gleich bleibt (HTTPS→HTTPS), und senden Sie keinen Header an ein weniger sicheres Ziel (HTTPS→HTTP).
    - `unsafe-url`: Der Referrer enthält den Ursprung _und_ den Pfad (aber nicht das [Fragment](/de/docs/Web/API/HTMLAnchorElement/hash), [Passwort](/de/docs/Web/API/HTMLAnchorElement/password) oder [Benutzername](/de/docs/Web/API/HTMLAnchorElement/username)).
      **Dieser Wert ist unsicher**, da er Ursprünge und Pfade von TLS-geschützten Ressourcen an unsichere Ursprünge leakt.

- [`rel`](/de/docs/Web/HTML/Reference/Attributes/rel)
  - : Für Anker, die das [`href`](#href)-Attribut enthalten, gibt dieses Attribut die Beziehung des Zielobjekts zum Linkobjekt an.
    Der Wert ist eine durch Leerzeichen getrennte Liste von Linktypen.
    Die Werte und ihre Semantik werden von einer Behörde registriert, die für den Dokumentautor Bedeutung haben könnte.
    Die standardmäßige Beziehung, falls keine andere gegeben ist, ist leer. Verwenden Sie dieses Attribut nur, wenn das [`href`](#href)-Attribut vorhanden ist.
- `shape`
  - : Die Form des zugehörigen Hotspots. Die HTML-Spezifikationen definieren die Werte `rect`, die einen rechteckigen Bereich definieren; `circle`, die einen kreisförmigen Bereich definieren; `poly`, die ein Polygon definieren; und `default`, die den gesamten Bereich über alle definierten Formen hinaus anzeigen.
- `target`
  - : Ein Schlüsselwort oder vom Autor definierter Name des {{Glossary("browsing_context", "Browsing-Kontextes")}}, um die verlinkte Ressource anzuzeigen.
    Die folgenden Schlüsselwörter haben spezielle Bedeutungen:
    - `_self` (Standard): Zeigen Sie die Ressource im aktuellen Browsing-Kontext.
    - `_blank`: Zeigen Sie die Ressource in einem neuen, unbenannten Browsing-Kontext.
    - `_parent`: Zeigen Sie die Ressource im übergeordneten Browsing-Kontext des aktuellen an, wenn die aktuelle Seite innerhalb eines Rahmens ist.
      Wenn kein übergeordneter vorhanden ist, wirkt es wie `_self`.
    - `_top`: Zeigen Sie die Ressource im obersten Browsing-Kontext an (dem Browsing-Kontext, der ein Vorfahr des aktuellen ist und kein übergeordnetes Element hat).
      Wenn kein übergeordneter vorhanden ist, wirkt es wie `_self`.

    Verwenden Sie dieses Attribut nur, wenn das [`href`](#href)-Attribut vorhanden ist.

    > [!NOTE]
    > Das Setzen von `target="_blank"` auf `<area>`-Elementen bietet implizit das gleiche `rel`-Verhalten wie das Setzen von [`rel="noopener"`](/de/docs/Web/HTML/Reference/Attributes/rel/noopener), das `window.opener` nicht setzt. Siehe [Browser-Kompatibilität](#browser-kompatibilität) für den Unterstützungsstatus.

## Beispiele

### Bild mit anklickbaren Bereichen

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
        <a href="/de/docs/Web/HTML/Guides/Content_categories#flow_content">Flussinhalt</a>,
        <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content">Formulierung</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Zulässiger Inhalt</th>
      <td>Keiner; es ist ein {{Glossary("void_element", "leeres Element")}}.</td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>Muss ein Start-Tag haben und darf keinen End-Tag haben.</td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Eltern</th>
      <td>
        Jedes Element, das <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content">Phraseninhalt</a> akzeptiert. Das <code>&#x3C;area></code>-Element muss einen Vorfahren {{HTMLElement("map")}} haben, muss jedoch kein direktes Elternteil sein.
      </td>
    </tr>
    <tr>
      <th scope="row">Implizite ARIA-Rolle</th>
      <td>
        <a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/link_role"><code>link</code></a> wenn <a href="#href"><code>href</code></a>-Attribut vorhanden ist, ansonsten
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
