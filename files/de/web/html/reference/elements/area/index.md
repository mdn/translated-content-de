---
title: "<area>: Das Bildkartengebiet-Element"
slug: Web/HTML/Reference/Elements/area
l10n:
  sourceCommit: e00212a2a707a57b49b58b37a6a6c978aaef2bbd
---

Das **`<area>`** [HTML](/de/docs/Web/HTML)-Element definiert einen Bereich innerhalb einer Bildkarte, die vordefinierte anklickbare Bereiche besitzt. Eine _Bildkarte_ erlaubt es, geometrische Bereiche auf einem Bild mit {{Glossary("Hyperlink", "Hypertext-Links")}} zu assoziieren.

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

Die Attribute dieses Elements beinhalten die [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes).

- `alt`
  - : Eine alternative Textzeichenfolge, die in Browsern angezeigt wird, die keine Bilder anzeigen.
    Der Text sollte so formuliert sein, dass er dem Benutzer dieselbe Art von Auswahl bietet, wie es das Bild bieten würde, wenn es ohne Alternativtext angezeigt wird.
    Dieses Attribut ist nur erforderlich, wenn das [`href`](#href)-Attribut verwendet wird.
- `coords`
  - : Das `coords`-Attribut beschreibt die Koordinaten des [`shape`](#shape)-Attributs in Größe, Form und Platzierung eines `<area>`.
    Dieses Attribut darf nicht verwendet werden, wenn `shape` auf `default` gesetzt ist.
    - `rect`: Der Wert ist `x1,y1,x2,y2`.
      Der Wert spezifiziert die Koordinaten der oberen linken und unteren rechten Ecke des Rechtecks.
      Zum Beispiel: In `<area shape="rect" coords="0,0,253,27" href="#" target="_blank" alt="Mozilla">` sind die Koordinaten `0,0` und `253,27`, was jeweils die obere linke und untere rechte Ecke des Rechtecks angibt.
    - `circle`: Der Wert ist `x,y,Radius`. Der Wert spezifiziert die Koordinaten des Kreismittelpunkts und den Radius.
      Zum Beispiel: `<area shape="circle" coords="130,136,60" href="#" target="_blank" alt="MDN">`
    - `poly`: Der Wert ist `x1,y1,x2,y2,..,xn,yn`. Der Wert spezifiziert die Koordinaten der Kanten des Polygons.
      Wenn das erste und letzte Koordinatenpaar nicht identisch sind, wird der Browser das letzte Koordinatenpaar hinzufügen, um das Polygon zu schließen.

    Die Werte sind Zahlen in CSS-Pixel. Unser [Formen-Generator](/de/docs/Web/CSS/Guides/Shapes/Shape_generator) kann Ihnen helfen, die `coords`-Syntax zu erzeugen, indem Sie Punkte auf einem Bild auswählen, das Sie hochladen.

- `download`
  - : Dieses Attribut gibt, falls vorhanden, an, dass die verknüpfte Ressource heruntergeladen und nicht im Browser angezeigt werden soll.
    Siehe {{HTMLElement("a")}} für eine vollständige Beschreibung des [`download`](/de/docs/Web/HTML/Reference/Elements/a#download)-Attributs.
- `href`
  - : Das Hyperlink-Ziel für das Gebiet.
    Sein Wert ist eine gültige URL.
    Dieses Attribut kann weggelassen werden; falls dies geschieht, stellt das `<area>`-Element keinen Hyperlink dar.
- `interestfor` {{experimental_inline}}
  - : Definiert das `<area>`-Element als **Interest Invoker**. Sein Wert ist die `id` des Ziel-Elements, das in irgendeiner Weise beeinflusst wird (normalerweise gezeigt oder verborgen), wenn Interesse an dem Invoker-Element gezeigt oder verloren wird (zum Beispiel durch Überfahren/Bereithalten oder Fokussieren/Entfokussieren). Siehe [Using interest invokers](/de/docs/Web/API/Popover_API/Using_interest_invokers) für mehr Details und Beispiele.
- `ping`
  - : Enthält eine durch Leerzeichen getrennte Liste von URLs, zu denen, wenn der Hyperlink gefolgt wird, {{HTTPMethod("POST")}}-Anfragen mit dem Körper `PING` vom Browser (im Hintergrund) gesendet werden.
    Typischerweise wird dies für Tracking verwendet.
- `referrerpolicy`
  - : Ein String, der angibt, welche Referrer verwendet werden soll, wenn die Ressource abgerufen wird:
    - `no-referrer`: Der {{HTTPHeader("Referer")}}-Header wird nicht gesendet.
    - `no-referrer-when-downgrade`: Der {{HTTPHeader("Referer")}}-Header wird nicht an {{Glossary("origin", "Origin")}}s ohne {{Glossary("TLS", "TLS")}} ({{Glossary("HTTPS", "HTTPS")}}) gesendet.
    - `origin`: Der gesendete Referrer wird auf den Origin der verweisenden Seite beschränkt: dessen [Schema](/de/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_URL), {{Glossary("host", "Host")}} und {{Glossary("port", "Port")}}.
    - `origin-when-cross-origin`: Der Referrer, der an andere Origins gesendet wird, wird auf das Schema, den Host und den Port beschränkt. Navigationen im gleichen Origin enthalten weiterhin den Pfad.
    - `same-origin`: Ein Referrer wird für {{Glossary("Same-origin_policy", "gleicher Origin")}} gesendet, aber Anfragen über Origin-Grenzen hinweg enthalten keine Referrer-Informationen.
    - `strict-origin`: Sendet nur den Origin des Dokuments als Referrer, wenn das Protokollsicherheitsniveau gleich bleibt (HTTPS→HTTPS), sendet es jedoch nicht an ein weniger sicheres Ziel (HTTPS→HTTP).
    - `strict-origin-when-cross-origin` (Standard): Sendet eine vollständige URL bei einer gleichen Origin-Anfrage, sendet nur den Origin, wenn das Protokollsicherheitsniveau gleich bleibt (HTTPS→HTTPS) und sendet keinen Header an ein weniger sicheres Ziel (HTTPS→HTTP).
    - `unsafe-url`: Der Referrer wird den Origin _und_ den Pfad einschließen (aber nicht das [Fragment](/de/docs/Web/API/HTMLAnchorElement/hash), [Passwort](/de/docs/Web/API/HTMLAnchorElement/password) oder [Benutzername](/de/docs/Web/API/HTMLAnchorElement/username)).
      **Dieser Wert ist unsicher**, weil er Ursprünge und Pfade von TLS-geschützten Ressourcen an unsichere Ursprünge weitergibt.

- [`rel`](/de/docs/Web/HTML/Reference/Attributes/rel)
  - : Für Anker, die das [`href`](#href)-Attribut enthalten, gibt dieses Attribut die Beziehung des Zielobjekts zum Linkobjekt an.
    Der Wert ist eine durch Leerzeichen getrennte Liste von Link-Typen.
    Die Werte und ihre Semantik werden von einer Behörde registriert, die möglicherweise eine Bedeutung für den Dokumentautor hat.
    Die Standardbeziehung, wenn keine andere angegeben wird, ist leer. Verwenden Sie dieses Attribut nur, wenn das [`href`](#href)-Attribut vorhanden ist.
- `shape`
  - : Die Form des zugehörigen Hot Spots. Die Spezifikationen für HTML definieren die Werte `rect`, die einen rechteckigen Bereich definieren; `circle`, die einen kreisförmigen Bereich definieren; `poly`, die ein Polygon definieren; und `default`, die den gesamten Bereich außerhalb definierter Formen anzeigen.
- `target`
  - : Ein Schlüsselwort oder ein vom Autor definierter Name des {{Glossary("browsing_context", "Browserskontexts")}}, in dem die verknüpfte Ressource angezeigt wird.
    Die folgenden Schlüsselwörter haben spezielle Bedeutungen:
    - `_self` (Standard): Zeigt die Ressource im aktuellen Browserskontext an.
    - `_blank`: Zeigt die Ressource in einem neuen, unbenannten Browserskontext an.
    - `_parent`: Zeigt die Ressource im übergeordneten Browserskontext des aktuellen an, falls die aktuelle Seite in einem Rahmen ist.
      Wenn kein übergeordnetes Element vorhanden ist, verhält sich dies wie `_self`.
    - `_top`: Zeigt die Ressource im obersten Browserskontext an (der Browserskontext, der ein Vorfahre des aktuellen ist und kein übergeordnetes Element hat).
      Wenn kein übergeordnetes Element vorhanden ist, verhält sich dies wie `_self`.

    Verwenden Sie dieses Attribut nur, wenn das [`href`](#href)-Attribut vorhanden ist.

    > [!NOTE]
    > Das Setzen von `target="_blank"` auf `<area>`-Elementen impliziert dasselbe `rel`-Verhalten wie das Setzen von [`rel="noopener"`](/de/docs/Web/HTML/Reference/Attributes/rel/noopener), wodurch `window.opener` nicht gesetzt wird. Siehe [Browser-Kompatibilität](#browser-kompatibilität) für den Unterstützungsstatus.

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

## Technische Übersicht

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/de/docs/Web/HTML/Guides/Content_categories">Inhaltskategorien</a>
      </th>
      <td>
        <a href="/de/docs/Web/HTML/Guides/Content_categories#flow_content">Fließendes Inhalt</a>,
        <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content">Redewendungsinhalt</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubter Inhalt</th>
      <td>Keiner; es ist ein {{Glossary("void_element", "Leerelement")}}.</td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>Muss ein Anfangs-Tag haben und darf keinen End-Tag haben.</td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Eltern</th>
      <td>
        Jedes Element, das <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content">Redewendungsinhalt</a> akzeptiert. Das <code>&#x3C;area></code>-Element muss einen Vorfahren {{HTMLElement("map")}} haben, muss aber nicht ein direkter Elternteil sein.
      </td>
    </tr>
    <tr>
      <th scope="row">Implizite ARIA-Rolle</th>
      <td>
        <a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/link_role"><code>link</code></a>, wenn ein <a href="#href"><code>href</code></a>-Attribut vorhanden ist, ansonsten
        <a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/generic_role"><code>generic</code></a>
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubte ARIA-Rollen</th>
      <td>Keine Rolle erlaubt</td>
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
